const inputEl = document.querySelector('input#name-input');
const spanEl = document.querySelector('span#name-output');

inputEl.addEventListener('input', handler => {
    spanEl.innerHTML = inputEl.value;

    if (spanEl.textContent === '') spanEl.innerHTML = 'незнакомец';
});
