/*Задание
Вам необходимо самостоятельно решить, для какого задания
какой оператор ветвления лучше использовать: if, switch или
    тернарный.*/
/*        1. Запросить у пользователя его возраст и определить, кем он
        является: ребенком (0–2), подростком (12–18), взрослым
    (18_60) или пенсионером (60– ...).*/
/*let age;
let result;
age = prompt("Введите свой возраст");
result = parseInt(age);
if (result >= 0  && result <= 12) alert ('ребенок');
if (result > 12 && result <=18) alert ('подросток');
if (result > 18 && result <= 60) alert ('взрослый');
if (result > 60) alert ('пенсионер');*/
/*        2. Запросить у пользователя число от 0 до 9 и вывести ему
        спецсимвол, который расположен на этой клавише (1–!,
        2–@, 3–# и т. д).*/
/*let number;
let result;
number = prompt('введите число от 0 до 9');
switch (number) {
    case "1":
        alert('!');
        break;
    case "2":
        alert('@');
    case "3":
        alert('#');
        break;
    case "4":
        alert('$');
        break;
    case "5":
        alert('%');
        break;
    case "6":
        alert('^');
        break;
    case "7":
        alert('&');
        break;
    case "8":
        alert('*');
        break;
    case "9":
        alert('(');
        break;
    case "0":
        alert(')');
        break;
    default:
        alert('вы ввели число не из диапазона');
}*/
/*        3. Запросить у пользователя трехзначное и число и проверить,
        есть ли в нем одинаковые цифры.*/
/*
let number;
let result;
number = parseInt(prompt('Введите трехзначное число'));
let one;
let two;
let three;
one = number%10;
two = Math.floor(((number - (number%10))/10)%10);
three = Math.floor((number - (two * 10) - one)/100);
result = (one === two || one === three || two === three) ? alert ('В веденном числе есть одинаковые числа') : alert ('В веденном числе нет одинаковых чисел');
*/

/*        4. Запросить у пользователя год и проверить, високосный он
        или нет. Високосный год либо кратен 400, либо кратен 4 и
        при этом не кратен 100.*/
/*let age;
let result;
age = parseInt(prompt("Введите год"));

result = (age % 400 === 0 || age % 4===0 || age % 100 ===0) ? alert('год високосный') : alert('год не високосный');*/
/*        5. Запросить у пользователя пятиразрядное число и определить, является ли оно палиндромом.*/
/*let number;
let result;
number = parseInt(prompt('Введите пятизначное число'));
let one;
let two;
let three;
let four;
let five;
five = number%10;
four = Math.floor(((number - (number%10))/10)%10);
three = Math.floor((number - (four * 10) - five)/100%10);
two = Math.floor((number -(three * 100) -(four * 10) - five)/1000%10);
one = Math.floor((number -(two * 1000) - (three * 100) -(four * 10) - five)/10000%10);
result = (one === five && two === four) ? alert('палиндром') : alert('не палиндром');*/

/*        6. Написать конвертор валют. Пользователь вводит количество USD, выбирает, в какую валюту хочет перевести: EUR,
        UAN или AZN, и получает в ответ соответствующую сумму.*/

/*let dollars;
let change;
const euro = 20.36;
const uan = 15.36;
const azn = 12.36;

dollars = parseInt(prompt("Введите кол-во долларов (разделитель точка)"));
change = (prompt("Введите валюту в какую хотите перевести EUR, UAN или AZN").toLowerCase());
switch (change) {
    case "eur" :
        alert('сумма перевода ' + dollars * euro);
        break;
    case "uan" :
        alert('сумма перевода ' + dollars * uan);
        break;
    case "azn" :
        alert('сумма перевода ' + dollars * azn);
        break;
    default:
        alert('вы ввели валюту не из дипазона');
}*/

/*        7. Запросить у пользователя сумму покупки и вывести сумму
        к оплате со скидкой: от 200 до 300 – скидка будет 3%, от 300
        до 500 – 5%, от 500 и выше – 7%.*/
/*let sum;
let result;
sum = parseInt(prompt('введите сумму покупки'));
if (sum >= 200 && sum < 300) result = sum * 0.97;
if (sum >= 300 && sum < 500) result = sum * 0.95;
if (sum >= 500) result = sum * 0.93;
alert('Сумма к оплате ' + result + 'руб.');*/
/*8. Запросить у пользователя длину окружности и периметр
        квадрата. Определить, может ли такая окружность поместиться в указанный квадрат.*/
/*let length;
let perimetr;
let radius2;
let result2;
length = parseInt(prompt('введите длину окружности'));
perimetr = parseInt(prompt('введите периметр квадрата'));
radius2 = length/(2* Math.PI) * 2;
result2 = perimetr/4;
if (radius2 <= result2) {
    alert('окружность поместиться в указанный квадрат');
} else {
    alert('окружность не поместиться в указанный квадрат');
}*/

/*        9. Задать пользователю 3 вопроса, в каждом вопросе по 3 варианта ответа. За каждый правильный ответ начисляется 2
        балла. После вопросов выведите пользователю количество
        набранных баллов.*/
/*let question1;
let question2;
let question3;
question1 = (prompt('какой сегодня месяц. Введите вариант:Январь, март, апрель').toLowerCase());
question2 = (prompt('какой текущий год. Введите вариант:2020, 2021, новый год').toLowerCase());
question3 = (prompt('в каком городе вы находитесь. Введите вариант:Тула, Париж, Гуанчжоу').toLowerCase());
switch (question1) {
    case "январь" :
        question1=0;
        break;
    case "март" :
        question1=0;
        break;
    case "апрель":
        question1 = 2;
        break;
    default:
        alert('вы не выбрали ни один из предложенных ответов');
}
switch (question2) {
    case "2020" :
        question2=0;
        break;
    case "2021" :
        question2=2;
        break;
    case "новый год":
        question2 = 0;
        break;
    default:
        alert('вы не выбрали ни один из предложенных ответов');
}
switch (question3) {
    case "тула" :
        question3= 2;
        break;
    case "париж" :
        question3=0;
        break;
    case "гуанчжоу":
        question3 = 0;
        break;
    default:
        alert('вы не выбрали ни один из предложенных ответов');
}
alert('Количество набранных баллов   ' + (parseInt(question1)+parseInt(question2)+parseInt(question3)));*/
/*
        10. Запросить дату (день, месяц, год) и вывести следующую
        за ней дату. Учтите возможность перехода на следующий
        месяц, год, а также високосный год*/
/*let time;
let array=[];
let date;
let month;
let year;
let now;
time = prompt('введите дату через точку в формате ХХ.ХХ.ХХХХ');

array = time.split(".");
date = parseInt(array[0]);
month = parseInt(array[1]) -1; //месяц считается с нуля
year = parseInt(array[2]);


now = new Date(year,month,date);
now.setDate(now.getDate()+1);

let dd = now.getDate();
if (dd<10) dd = '0' + dd;

let mm= now.getMonth()+1; //месяц считается с нуля
if (mm<10) mm= '0' + mm;

let yy=now.getFullYear();

alert('Следующая дата: ' + dd + '.' + mm + '.' + yy);*/


