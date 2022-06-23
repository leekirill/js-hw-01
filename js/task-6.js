const inputEl = document.querySelector('input#validation-input');
const maxLength = inputEl.getAttribute('data-length');

inputEl.addEventListener('blur', handler => {
    // inputEl.value.length !== Number(maxLength)
    //     ? inputEl.classList.add('invalid')
    //     : inputEl.classList.add('valid'),

    if (inputEl.value.length !== Number(maxLength)) {
        inputEl.classList.add('invalid');
    }
    inputEl.classList.add('valid');
});
