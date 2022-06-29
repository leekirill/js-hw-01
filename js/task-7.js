const refs = {
    rangeEl: document.querySelector('input#font-size-control'),
    textEl: document.querySelector('span#text'),
};

const fontSizeChanger = function () {
    refs.textEl.setAttribute('style', `font-size: ${refs.rangeEl.value}px`);
};

refs.rangeEl.addEventListener('input', fontSizeChanger);
