const refs = {
    rangeEl: document.querySelector('input#font-size-control'),
    textEl: document.querySelector('span#text'),
};

refs.rangeEl.addEventListener('input', fontSizeChanger);

function fontSizeChanger() {
    refs.textEl.setAttribute('style', `font-size: ${refs.rangeEl.value}px`);
}
