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
}

buttonNode.addEventListener('click', () => {
    let inputValue = document.querySelector('input').value;
    if (inputValue === '') {
        resultNode.innerHTML = `<p class='error'>Введено не число!</p>`
    } else if (inputValue < 1 || inputValue > 10) {
        resultNode.innerHTML = `<p class='error'>Число ${inputValue} вне диапазона от 1 до 10!</p>`
    } else {
    useRequest(`https://picsum.photos/v2/list/?limit=${inputValue}`, displayResult);
    }
});