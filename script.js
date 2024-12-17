// Частина 1: Розрахунок суми трьох аргументів

// Отримуємо елементи input та кнопку
const inputA = document.querySelector('#inputA');
const inputB = document.querySelector('#inputB');
const inputC = document.querySelector('#inputC');
const calculateButton = document.querySelector('#calculateButton');
const resultElement = document.querySelector('#task3');

// Додаємо обробник події на кнопку
calculateButton.addEventListener('click', () => {
    // Отримуємо значення введені користувачем та конвертуємо їх у числа
    const a = Number(inputA.value);
    const b = Number(inputB.value);
    const c = Number(inputC.value);

    // Обчислюємо суму
    const sum = a + b + c;

    // Виводимо результат у тег <task3>
    resultElement.innerHTML = `Результат: ${sum}`;
});

// Частина 2: Додавання елементів до контейнера

// Отримуємо елементи кнопок та контейнера task2
const addCircleButton = document.querySelector('#addCircleButton');
const addRectangleButton = document.querySelector('#addRectangleButton');
const task2Container = document.querySelector('#task2');

// Додаємо обробники подій на кнопки
addCircleButton.addEventListener('click', () => {
    addElement('circle'); // Додаємо круг
});

addRectangleButton.addEventListener('click', () => {
    addElement('rectangle'); // Додаємо прямокутник
});

// Функція для додавання об'єкта
function addElement(type) {
    // Створюємо новий елемент в залежності від типу
    const newElement = document.createElement('div');

    // Додаємо клас в залежності від типу елемента
    if (type === 'circle') {
        newElement.classList.add('circle');
    } else if (type === 'rectangle') {
        newElement.classList.add('rectangle');
    }

    // Додаємо новий елемент в контейнер task2
    task2Container.appendChild(newElement);
}
