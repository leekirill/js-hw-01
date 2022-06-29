import colorArray from './colorArray.js';

const refs = {
    inputEl: document.querySelector('input'),
    createBtn: document.querySelector('button[data-action="render"]'),
    clearBtn: document.querySelector('button[data-action="destroy"]'),
    divBoxes: document.querySelector('div#boxes'),
};

function createBoxes(amount) {
    const divArray = [];
    for (let i = 0; i < amount; i++) {
        divArray.push(i + 1);
    }

    refs.divBoxes.insertAdjacentHTML(
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

refs.createBtn.addEventListener('click', onClickCreateBoxes);
refs.inputEl.addEventListener('keydown', onClickCreateBoxesByEnter);
refs.inputEl.addEventListener('keydown', onClickDestroyAllBoxesByEsc);
refs.clearBtn.addEventListener('click', onClickDestroyAllBoxes);

function onClickCreateBoxes() {
    refs.divBoxes.innerHTML = '';
    createBoxes(Number(refs.inputEl.value));
    refs.inputEl.style.marginBottom = '20px';
    refs.divBoxes.style.display = 'flex';
    refs.divBoxes.style.flexWrap = 'wrap';
}

function onClickCreateBoxesByEnter(event) {
    refs.divBoxes.innerHTML = '';
    if (event.key === 'Enter') createBoxes(Number(refs.inputEl.value));
    refs.inputEl.style.marginBottom = '20px';
    refs.divBoxes.style.display = 'flex';
    refs.divBoxes.style.flexWrap = 'wrap';
}

function onClickDestroyAllBoxes() {
    refs.divBoxes.innerHTML = '';
    refs.inputEl.value = 0;
}
function onClickDestroyAllBoxesByEsc(event) {
    if (event.key === 'Escape') {
        refs.divBoxes.innerHTML = '';
        refs.inputEl.value = 0;
    }
}
