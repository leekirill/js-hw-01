const rangeEl = document.querySelector('input#font-size-control');
const textEl = document.querySelector('span#text');

console.log(rangeEl.type);

rangeEl.addEventListener('input', handler => {
    console.log(rangeEl.value);
    textEl.setAttribute('style', `font-size: ${rangeEl.value}px`);
});
