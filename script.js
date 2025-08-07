let drink = prompt("Виберіть напій: кава, чай або сік").toLowerCase();

switch (drink) {
    case "кава":
        alert("Ви обрали Кава");
        break;
    case "чай":
        alert("Ви обрали Чай");
        break;
    case "сік":
        alert("Ви обрали Сік");
        break;
    default:
        alert("Такого варіанту немає");
}

let day = prompt("Введіть день тижня").toLowerCase();

if (day === "понеділок" || day === "вівторок" || day === "середа" || day === "четвер" || day === "п’ятниця") {
    alert("Це робочий день");
} else if (day === "субота" || day === "неділя") {
    alert("Це вихідний");
} else {
    alert("Невірно введено день тижня");
}

let month = Number(prompt("Введіть номер місяця (1-12)"));

if (month === 12 || month === 1 || month === 2) {
    alert("Зима");
} else if (month >= 3 && month <= 5) {
    alert("Весна");
} else if (month >= 6 && month <= 8) {
    alert("Літо");
} else if (month >= 9 && month <= 11) {
    alert("Осінь");
} else {
    alert("Невірний номер місяця");
}

let color = prompt("Введіть колір (червоний, зелений, жовтий)").toLowerCase();

if (color === "червоний") {
    alert("Стоп");
} else if (color === "зелений") {
    alert("Йти");
} else if (color === "жовтий") {
    alert("Чекати");
} else {
    alert("Невірний колір");
}


let num1 = Number(prompt("Введіть перше число"));
let num2 = Number(prompt("Введіть друге число"));
let operator = prompt("Введіть оператор (+, -, *, /)");

switch (operator) {
    case "+":
        alert(`Результат: ${num1 + num2}`);
        break;
    case "-":
        alert(`Результат: ${num1 - num2}`);
        break;
    case "*":
        alert(`Результат: ${num1 * num2}`);
        break;
    case "/":
        if (num2 === 0) {
            alert("Помилка: ділення на нуль");
        } else {
            alert(`Результат: ${num1 / num2}`);
        }
        break;
    default:
        alert("Невірний оператор");
}