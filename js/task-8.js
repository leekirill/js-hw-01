import colorArray from './colorArray.js';

const inputEl = document.querySelector('input');
const createBtn = document.querySelector('button[data-action="render"]');
const clearBtn = document.querySelector('button[data-action="destroy"]');
const divBoxes = document.querySelector('div#boxes');

function createBoxes(amount) {
    const divArray = [];
    for (let i = 0; i < amount; i++) {
        divArray.push(i + 1);
    }

    divBoxes.insertAdjacentHTML(
        'afterbegin',
        divArray.map(
            e =>
                `<div style='width:${e * 10 + 20}px; height:${
                    e * 10 + 20
                }px; background-color:${
                    colorArray[
                        Math.floor(Math.random() * (colorArray.length - 1))
                    ]
                }'></div>`,
        ),
    );
}

function destroyBoxes() {
    divBoxes.innerHTML = '';
    inputEl.value = 0;
}

createBtn.addEventListener('click', handler => {
    divBoxes.innerHTML = '';
    createBoxes(Number(inputEl.value));
    inputEl.style.marginBottom = '20px';
    divBoxes.style.display = 'flex';
    divBoxes.style.flexWrap = 'wrap';
}); // по клику на кнопку Создать

inputEl.addEventListener('keypress', handler => {
    divBoxes.innerHTML = '';
    if (handler.key === 'Enter') createBoxes(Number(inputEl.value));
    inputEl.style.marginBottom = '20px';
    divBoxes.style.display = 'flex';
    divBoxes.style.flexWrap = 'wrap';
}); // по Enter

clearBtn.addEventListener('click', handler => {
    destroyBoxes();
});
