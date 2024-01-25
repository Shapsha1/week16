//Задание 1
//Найдите все формы на странице. При нажатии на кнопку выведите количество найденных форм.
//Подсказка: используйте коллекцию document.forms и свойство length
const paragraph = document.getElementById("practicum");

function makeOne() {
    paragraph.innerHTML = document.forms.length;
    //Ваш код
}

document.querySelector(".b-1").addEventListener("click", makeOne);

//Задание 2
//Найдите первую форму на странице. При нажатии на кнопку выведите значение атрибута "name" этой формы.
//Подсказка: используйте коллекцию document.forms и метод getAttribute
const paragraphTwo = document.getElementById("practicum2");

function makeTwo() {
    firstForm = document.forms[0];
    paragraphTwo.innerHTML = firstForm.getAttribute("name");
    //Ваш код
}

document.querySelector(".b-2").addEventListener("click", makeTwo);

//Задание 3
//Найдите последнюю форму на странице. При нажатии на кнопку выведите значение атрибута "name" этой формы.
//Подсказка: используйте коллекцию document.forms и метод getAttribute
const paragraphThree = document.getElementById("practicum3");

function makeThree() {
    lastForm = document.forms[document.forms.length - 1];
    paragraphThree.innerHTML = lastForm.getAttribute("name");
    //Ваш код
}

document.querySelector(".b-3").addEventListener("click", makeThree);

//Задание 4
//Найдите все формы на странице и выведите их названия
//При нажатии на кнопку выведите названия всех найденных форм, разделенных запятыми
//Подсказка: Для решения задания вы можете использовать следующую логику:
//- Получите все формы на странице, используя коллекцию document.forms
//- Создайте пустой массив formNames для хранения названий форм
//- Пройдитесь по каждой форме в коллекции и для каждой формы
//- Получите значение атрибута name с помощью метода getAttribute
//- Добавьте полученное название в массив formNames
//- Преобразуйте массив formNames в строку, разделив названия запятыми, с помощью метода join()
//- Выведите полученную строку названий форм в элемент с id practicum4 при нажатии на кнопку
const paragraphFour = document.getElementById("practicum4");

function makeFour() {
    let forms = [...document.forms];
    let formNames = [];
    forms.forEach((form) => {
        let formName = form.getAttribute("name");
        formNames.push(formName);
    });
    let formNamesString = formNames.join(", ");
    paragraphFour.innerHTML = formNamesString;
    //Ваш код
}

document.querySelector(".b-4").addEventListener("click", makeFour);

//Задание 5
//Найдите третью форму на странице, используя document.forms и имя формы (которое вы знаете из задания 4)
//Выведите на страницу количество элементов в форме, используя коллекцию form.elements
//Подсказка: используйте коллекцию document.forms для получения формы по индексу и свойство form.elements.length для получения количества элементов в форме
const paragraphFive = document.getElementById("practicum5");

function makeFive() {
    const formThree = document.forms.formThree;
    let formThreeElements = formThree.elements.length;
    paragraphFive.innerHTML = `Элементов в третьей форме: ${formThreeElements}`;
    //Ваш код
}

document.querySelector(".b-5").addEventListener("click", makeFive);

//Задание 6
//Найдите вторую форму на странице, используя document.forms и имя формы (которое вы знаете из задания 4)
//Выведите на страницу количество элементов в форме, используя коллекцию form.elements
const paragraphSix = document.getElementById("practicum6");

function makeSix() {
    const formTwo = document.forms.formTwo;
    let formTwoElements = formTwo.elements.length;
    paragraphSix.innerHTML = `Элементов во второй форме: ${formTwoElements}`;
    //Ваш код
}

document.querySelector(".b-6").addEventListener("click", makeSix);

//Задание 7
//Выведите перечисление названий (name) всех элементов второй формы на экран. В задании 6 вы нашли их количество.
//Подсказка:
//- Используйте document.forms для получения коллекции всех форм на странице
//- Найдите вторую форму в коллекции форм, используя индекс 1 (индексы начинаются с 0)
//- Получите коллекцию элементов формы с помощью свойства elements у второй формы
//- Создайте пустую строку elementsList, которая будет хранить перечисление названий элементов
//- Используя цикл for, переберите элементы формы в коллекции formElements
//- Внутри цикла добавьте текущее название элемента формы (свойство name) в elementsList, добавляя дефис перед названием
//- После цикла выведите текст с перечислением элементов в элемент с id practicum7, используя свойство textContent
const paragraphSeven = document.getElementById("practicum7");

function makeSeven() {
    const formTwo = document.forms[1];
    let elementsList = "";
    let formElements = formTwo.elements;
    for (let element of formElements) {
        let elementsName = element.getAttribute("name");
        elementsList += ` - ${elementsName} <br>`;
    }
    paragraphSeven.innerHTML = elementsList;
    //Ваш код
}

document.querySelector(".b-7").addEventListener("click", makeSeven);

//Задание 8
//Выведите перечисление названий (name) всех элементов первой формы на экран. В задании 5 вы нашли их количество.
const paragraphEight = document.getElementById("practicum8");

function makeEight() {
    const formOne = document.forms[0];
    let elementsList = "";
    let formElements = formOne.elements;
    for (let element of formElements) {
        let elementsName = element.getAttribute("name");
        elementsList += ` - ${elementsName} <br>`;
    }
    paragraphEight.innerHTML = elementsList;
    //Ваш код
}

document.querySelector(".b-8").addEventListener("click", makeEight);

//Задание 9
//Найдите третью форму на странице. Выведите перечисление названий (name) всех элементов формы на экран.
const paragraphNine = document.getElementById("practicum9");

function makeNine() {
    let elementsList = [];
    let formElements = [...document.forms[2].elements];
    formElements.forEach((element) => {
        let elementsName = element.getAttribute("name");
        elementsList.push(elementsName);
    });
    let elementsListAsString = elementsList.join(", ");
    paragraphNine.innerHTML = elementsListAsString;
    //Ваш код
}

document.querySelector(".b-9").addEventListener("click", makeNine);

//Задание 10
//Выведите на экран значенеие radio кнопки третьей формы на странице
//Подсказка: используйте коллекцию document.forms для доступа к формам, свойство elements для доступа к элементам формы и свойство value для получения значения radio кнопки
const paragraphTen = document.getElementById("practicum10");

function makeTen() {
    const formFour = document.forms.lastForm;
    const formFourRadio = formFour.elements.fourthName;
    paragraphTen.textContent = `Значение радио кнопки: ${formFourRadio.value}`;

    //Ваш код
}

document.querySelector(".b-10").addEventListener("click", makeTen);

//Задание 11
//Выведите значения всех опций из первой формы
//Подсказка: используйте коллекцию document.forms для доступа к формам, свойство elements для доступа к элементам формы и свойство value для получения значения выбранной опции
//- Получите доступ к форме с помощью document.forms и сохраните её в переменную
//- Получите доступ к элементу select с помощью form.elements и сохраните его в переменную
//- Создайте пустую строку optionsValues, которая будет хранить значения всех опций
//- Используйте цикл для перебора опций в коллекции элемента select
//- Внутри цикла получите значение каждой опции с помощью свойства value и добавьте его в optionsValues
//- Выведите значения опций на страницу
const paragraphEleven = document.getElementById("practicum11");

function makeEleven() {
    const formOne = document.forms.formOne;
    const formOneSelect = formOne.elements.firstSelect;
    let optionsValues = "";
    Array.from(formOneSelect).forEach((option) => {
        let optionsValue = option.value;
        optionsValues += `${optionsValue} <br>`;
    });
    paragraphEleven.innerHTML = optionsValues;
    //Ваш код
}

document.querySelector(".b-11").addEventListener("click", makeEleven);

//Задание 12
//Выведите значения атрибутов id всех чекбоксов (количество: 3) из второй формы
//Подсказка:
//- Получите доступ к форме с помощью document.forms и сохраните её в переменную
//- Получите доступ к чекбоксам с помощью form.elements и сохраните их в переменные
//- Получите значения атрибутов id всех чекбоксов второй формы
const paragraphTwelve = document.getElementById("practicum12");

function makeTwelve() {
    const formTwo = document.forms.formTwo;
    const formTwoElements = formTwo.elements;
    let allCheckboxId = [];
    Array.from(formTwoElements).forEach((element) => {
        if (element.getAttribute("type") === "checkbox") {
            let checkboxId = element.getAttribute("id");
            allCheckboxId.push(checkboxId);
        }
    });
    let allCheckboxIdAsString = allCheckboxId.join(", ");
    paragraphTwelve.textContent = `Id чекбоксов: ${allCheckboxIdAsString}`;
    //Ваш код
}

document.querySelector(".b-12").addEventListener("click", makeTwelve);

// Задание 13
//Проверьте была ли выбрана кнопка четвёртой формы
//Подсказка:
//- Получите доступ к форме с помощью document.forms и сохраните её в переменную
//- Получите доступ к radio кнопке с помощью form.elements и сохраните её в переменную
//- Используйте условный оператор (if) для проверки выбранности кнопки
//- Если кнопка выбрана, выведите сообщение "Кнопка выбрана" на страницу
//- Если кнопка не выбрана, выведите сообщение "Кнопка не выбрана" на страницу
const paragraphThirteen = document.getElementById("practicum13");

function checkButton(e) {
    e.preventDefault();
    const form = document.forms.lastForm;
    const btn = form.elements.fourthName;
    if (btn.checked) {
        paragraphThirteen.textContent = `Кнопка выбрана`;
    } else {
        paragraphThirteen.textContent = `Кнопка не выбрана`;
    }
    //Ваш код
}

document.querySelector(".b-13").addEventListener("click", checkButton);

//Задание 14
//Выведите на экран название выбранного варианта в первой форме
//Подсказка:
//- Получите доступ к форме с помощью document.forms и сохраните её в переменную
//- Получите доступ к элементу select с помощью form.elements и сохраните его в переменную
//- Установите выбранным любой вариант формы
//- Используйте свойство value выбранной опции для получения выбранного варианта
//- Напишите проверку, которая используя условный оператор (if) будет выводить в элемент paragraphFourteen название выбранного варианта
const paragraphFourteen = document.getElementById("practicum14");

function checkOption() {
    const form = document.forms.formOne;
    const select = form.elements.firstSelect;
    paragraphFourteen.textContent = select.value;
    //Ваш код
}

document.querySelector(".b-14").addEventListener("click", checkOption);

//Задание 15
//Добавьте в первую форму выбранную Опцию 3 по умолчанию
//Подсказка:
//- Получите доступ к форме с помощью document.forms и сохраните её в переменную
//- Получите доступ к элементу select с помощью form.elements и сохраните его в переменную
//- Используйте свойство selectedIndex элемента select, чтобы установить выбранный индекс опции по умолчанию
//- Установите значение selectedIndex равным индексу опции, которую вы хотите выбрать по умолчанию

function makeFifteen() {
    const form = document.forms.formOne;
    const select = form.elements.firstSelect;
    select.selectedIndex = 2;
    //Ваш код
}

makeFifteen();

//Задание 16
//Добавьте во вторую форму выбранный Вариант 3 по умолчанию
//Подсказка:
//- Получите доступ к форме с помощью document.forms и сохраните её в переменную
//- Получите доступ к элементу checkbox с помощью form.elements и сохраните его в переменную
//- Используйте свойство checked элемента checkbox, чтобы установить его выбранным по умолчанию
//- Установите значение checked равным true для выбранного варианта

function makeSixteen() {
    const form = document.forms.formTwo;
    const checkbox = form.elements.checkboxThree;
    checkbox.checked = true;
    //Ваш код
}

makeSixteen();

//Задание 17
//Проверьте, заполнены ли все поля первой формы перед отправкой
//Подсказка:
//- Получите доступ к форме с помощью document.forms и сохраните её в переменную formOne
//- Получите доступ к каждому полю формы с помощью form.elements и сохраните их в соответствующие переменные
//- Используйте условные операторы (if) для проверки каждого поля на заполненность
//- Если хотя бы одно поле не заполнено, выведите сообщение об ошибке на страницу (элемент для добавления ошибки создан: <p class="error-message" id="errorMessage"></p>)
//- Добавьте слушатель события submit к форме, чтобы выполнить проверку перед отправкой
//- В обработчике события вызовите метод event.preventDefault() для отмены отправки формы в случае ошибки

const formOne = document.forms.formOne;
formOne.addEventListener("submit", function (event) {
    const errorMessage = document.querySelector("#errorMessage");
    const firstName = formOne.elements.firstName;
    const firstEmail = formOne.elements.firstEmail;
    if (firstName.value.length === 0 || firstEmail.value.length === 0) {
        event.preventDefault(); //Отмена отправки
        errorMessage.textContent = "Заполните все поля формы";
    }
    //Ваш код
});

//Задание 18
//Очистите все поля первой формы после отправки
//Подсказка:
//- Получите доступ к форме с помощью document.forms и сохраните её в переменную
//- Используйте метод reset() формы, чтобы очистить все её поля после отправки
//- Добавьте слушатель события addEventListener на первую форму, как вы делали в задании 17
//- В обработчике события вызовите метод event.preventDefault() для отмены отправки формы в случае ошибки
formOne.addEventListener("submit", function (event) {
    formOne.reset();
});
//Ваш код

//Задание 19
//При выборе определенной опции из выпадающего списка измените цвет фона страницы
//Подсказка:
//- Получите доступ к элементу select с помощью document.getElementById или другим методом выборки элементов и сохраните его в переменную
//- Используйте событие change для отслеживания изменений в выборе опции
//- В обработчике события, используя условные операторы (if), проверьте выбранную опцию
//- В зависимости от выбранной опции, измените цвет фона страницы, используя свойство document.body.style.backgroundColor

const selectElement = document.getElementById("firstSelect");
selectElement.addEventListener("change", function () {
    if (selectElement.value === "Опция 1") {
        document.body.style.backgroundColor = "red";
    } else if (selectElement.value === "Опция 2") {
        document.body.style.backgroundColor = "green";
    } else if (selectElement.value === "Опция 3") {
        document.body.style.backgroundColor = "blue";
    }
});

//Ващ код

//Задание 20
//Добавьте валидацию для поля Email
//Подсказка:
//- Получите доступ к первой форме с помощью document.forms и сохраните её в переменную
//- Получите доступ к полю Email с помощью form.elements и сохраните его в переменную
//- Используйте событие input для отслеживания изменений в поле Email
//- В обработчике события, используя регулярное выражение (RegExp: /^[^\s@]+@[^\s@]+.[^\s@]+$/), проверьте введенное значение поля Email
//- В зависимости от результата проверки, измените стиль поля Email (например, установите класс с ошибкой) и отобразите сообщение об ошибке в элементе <p> (добавьте элемент самостоятельно) с помощью свойства textContent.

const emailInput = formOne.elements.firstEmail;
const errorMessage = document.getElementById("errorMessage");
const emailRegExp = /^[^\s@]+@[^\s@]+.[^\s@]+$/;
emailInput.addEventListener("input", function () {
    if (!emailRegExp.test(emailInput.value)) {
        emailInput.style.borderColor = "red";
        errorMessage.textContent = "Введите вреный email";
    } else {
        emailInput.style.borderColor = "#D1D1D1";
        errorMessage.textContent = "";
    }
});

//Ваш код

//Задание 21
//При отправке второй формы выполните проверку всех чекбоксов. Если ни один из чекбоксов не выбран, отмените отправку формы и выведите сообщение об ошибке в элементе с id "result21".

document.querySelector(".b-21").onclick = function (evt) {
    const checkboxes = document.forms.formTwo.querySelectorAll('input[type="checkbox"]');
    let errorMessage = document.querySelector("#result21");
    let isChecked = false;
    errorMessage.textContent = "Выберите один из вариантов";
    checkboxes.forEach(function (checkbox) {
        if (checkbox.checked) {
            isChecked = true;
        }
    });
    if (!isChecked) {
        evt.preventDefault();
        errorMessage.textContent = "Выберите один из вариантов";
    } else {
        errorMessage.textContent = "";
    }
    //Ваш код
};

//Задание 22
//При отправке третьей формы выполните проверку поля Имя на заполненность. Если поле Имя пустое, отмените отправку формы и выведите сообщение об ошибке в элементе с id "result22".

document.querySelector(".b-22").onclick = function (event) {
    const nameInput = document.forms.formThree.elements.thirdName;
    let errorMessage = document.querySelector("#result22");
    errorMessage.textContent = "";
    if (nameInput.value.length === 0) {
        event.preventDefault();
        errorMessage.textContent = "Укажите имя";
    }
    //Ваш код
};

//Задание 23
//При выборе опции "Я хочу зарегистрироваться" в четвёртой форме кнопка должна быть разблокирована. В противном случае, сделайте кнопку отправки формы заблокированной.
//Подсказка: используйте свойство disabled
let fourthBtn = document.forms.lastForm.elements.fourthButton;
let fourthRadio = document.forms.lastForm.elements.fourthName;
fourthBtn.setAttribute("disabled", true);
fourthRadio.addEventListener("change", function () {
    fourthBtn.disabled = !fourthRadio.checked;
});

//Задание 24
//Найдите все поля ввода на странице (querySelectorAll) и установите им атрибут "placeholder" со значением "Введите данные" (используйте метод forEach).
document.querySelector(".b-24").addEventListener("click", function () {
    let inputs = document.querySelectorAll(".form__input");
    inputs.forEach((input) => {
        input.setAttribute("placeholder", "Введите данные");
    });
    //Ваш код
});

//Задание 25
//При фокусе на любом поле ввода измените его границу на цвет "#00ff00". При потере фокуса восстановите стандартную границу.

document.querySelector(".b-25").addEventListener("click", function () {
    const inputs = document.querySelectorAll("input");
    inputs.forEach(function (input) {
        input.addEventListener("focus", function () {
            input.style.borderColor = "#00ff00";
        });
        input.addEventListener("blur", function () {
            input.style.borderColor = "#D1D1D1";
        });
        //Ваш код
    });
});

//Задание 26
//При нажатии на кнопку "Задание 26" отобразите в элементе с id "result26" значение placeholder из поля имя в третьей форме

document.querySelector(".b-26").addEventListener("click", function (event) {
    event.preventDefault();
    let message = document.querySelector("#result26");
    let nameInput = document.forms.formThree.elements.thirdName;
    message.textContent = `Значение placeholder из поля имя в третьей форме: ${nameInput.getAttribute("placeholder")}`;
    //Ваш код
});

//Задание 27
//При изменении значения любого из полей второй формы отобразите сообщение с текстом "Изменение внесено" в элементе с id "result27"

const formTwoInputs = document.querySelectorAll(".secondForm input");

formTwoInputs.forEach(function (input) {
    input.addEventListener("input", function () {
        const message = document.querySelector("#result27");
        message.textContent = "Изменение внесено";
        //Ваш код
    });
});

//Задание 28
//При выборе любой из опций выпадающего списка в третьей форме отобразите сообщение с текстом "Опция выбрана" в элементе с id "result28"

const selectFormThree = document.getElementById("firstSelect");

selectFormThree.addEventListener("change", function () {
    const message = document.querySelector("#result28");
    message.textContent = "Опция выбрана";
    //Ваш код
});
