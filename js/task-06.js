const refs = {
    inputEl: document.querySelector('input#validation-input'),
};

const maxLength = refs.inputEl.getAttribute('data-length');

refs.inputEl.addEventListener('blur', validator);

function validator() {
    if (refs.inputEl.value.length !== Number(maxLength)) {
        return refs.inputEl.classList.add('invalid');
    }

    refs.inputEl.classList.replace('invalid', 'valid');
}
