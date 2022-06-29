const refs = {
    inputEl: document.querySelector('input#validation-input'),
};

const maxLength = refs.inputEl.getAttribute('data-length');

refs.inputEl.addEventListener('blur', validator);

function validator() {
    if (refs.inputEl.value.length !== Number(maxLength)) {
        refs.inputEl.classList.add('invalid');
    } else {
        refs.inputEl.classList.replace('invalid', 'valid');
    }
    if (refs.inputEl.value.length === 0)
        refs.inputEl.classList.remove('invalid', 'valid');
}
