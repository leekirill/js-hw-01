const counterValue = {
    value: 0,

    increment() {
        return (this.value += 1);
    },
    decrement() {
        return (this.value -= 1);
    },
};

const incrementBtn = document.querySelector('button[data-action="increment"]');
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const value = document.querySelector('span#value');

incrementBtn.addEventListener('click', onClickIncrementBtn);
decrementBtn.addEventListener('click', onClickDecrementBtn);

function onClickIncrementBtn() {
    value.textContent = counterValue.increment();
}
function onClickDecrementBtn() {
    value.textContent = counterValue.decrement();
}
