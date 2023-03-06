document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('cards') !== null) {
        resultNode.innerHTML = localStorage.getItem('cards');
    }
});
  
const buttonNode = document.querySelector('.button');
const resultNode = document.querySelector('.result');

function useRequest(url, callback) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    
    xhr.onload = function() {
        if (xhr.status != 200) {
            console.log('Статус ответа: ', xhr.status);
        } else {
            const result = JSON.parse(xhr.response);
            if (callback) {
                callback(result);
            }
        }
    };
    
    xhr.onerror = function() {
        console.log('Ошибка! Статус ответа: ', xhr.status);
    };
    
    xhr.send();
};

function displayResult(apiData) {
    let cards = '';
    
    apiData.forEach(item => {
        const cardBlock = `
            <div class='card'>
                <img src='${item.download_url}' class='card-image'></img>
            </div>
        `;
        cards = cards + cardBlock;
    });
           
    resultNode.innerHTML = cards;
    localStorage.setItem('cards', cards)
}

buttonNode.addEventListener('click', () => {
    let inputPageValue = document.getElementById('page').value;
    let inputLimitValue = document.getElementById('limit').value;

    let pageIsValid = inputPageValue > 0 && inputPageValue < 11 && inputPageValue !== '';
    let limitIsValid = inputLimitValue > 0 && inputLimitValue < 11 && inputLimitValue !== '';

    if (!pageIsValid && !limitIsValid) {
        resultNode.innerHTML = `<p class='error'>Номер страницы и лимит вне диапазона от 1 до 10</p>`;
    } else if (!pageIsValid) {
        resultNode.innerHTML = `<p class='error'>Номер страницы вне диапазона от 1 до 10</p>`;
    } else if (!limitIsValid) {
        resultNode.innerHTML = `<p class='error'>Лимит вне диапазона от 1 до 10</p>`;
    } else {
        useRequest(`https://picsum.photos/v2/list?page=${inputPageValue}&limit=${inputLimitValue}`, displayResult)
    }
})