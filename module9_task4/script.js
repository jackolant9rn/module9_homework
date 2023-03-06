const buttonNode = document.querySelector('.button');
const resultNode = document.querySelector('.result');

buttonNode.addEventListener('click', () => {
    let inputXValue = document.getElementById('x').value;
    let inputYValue = document.getElementById('y').value;

    if (inputXValue === '' || inputXValue === '' || inputXValue < 100 || inputXValue > 300 || inputYValue < 100 || inputYValue > 300) {
        resultNode.innerHTML = `<p class='error'>Одно из чисел вне диапазона от 100 до 300!</p>`;
    } else {
    fetch(`https://picsum.photos/${inputXValue}/${inputYValue}`)
        .then((response) => {
            resultNode.innerHTML = `<img src='${response.url}'></img>`
        });
    }
})