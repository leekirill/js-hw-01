const allLi = document.querySelectorAll('.item');

for (const liEl of allLi) {
    const heading = liEl.querySelector('h2');
    const allLi = liEl.querySelectorAll('li');

    liEl.append(`Категория: ${heading.textContent}; `);
    liEl.append(`Количество элементов: ${allLi.length}`);
}
