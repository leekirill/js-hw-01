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

incrementBtn.addEventListener(
    'click',
    () => (value.textContent = counterValue.increment()),
);

decrementBtn.addEventListener(
    'click',
    () => (value.textContent = counterValue.decrement()),
);
