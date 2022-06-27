const inputEl = document.querySelector('input#validation-input');
const maxLength = inputEl.getAttribute('data-length');

inputEl.addEventListener('blur', handler => {
    if (inputEl.value.length === Number(maxLength)) {
        inputEl.classList.add('valid');
    } else {
        inputEl.classList.add('invalid');
    }
});
