// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log , alert, document.write

let var1 = 'hello';
let var2 = 'owu';
let var3 = 'com';
let var4 = 'ua';
let var5 = 1;
let var6 = 10;
let var7 = -999;
let var8 = 123;
let var9 = 3.14;
let var10 = 2.7;
let var11 = 116;
let var12 = true;
let var13 = false;

let general = var1 + '\n' + var2 + '\n' + var3 + '\n' + var4 + '\n' + var5 + '\n' + var6 + '\n' + var7 + '\n' + var8 + '\n' + var9 + '\n' + var10 + '\n' + var11 + '\n' + var12 + '\n' + var13;

console.log(general);

alert(general);

document.write(general);

// - Переприсвоїти кожну змінну з завдання вище на будь які довільні значення.
//     Вивести кожну змінну за допомогою: console.log , alert, document.write

var1 = 774;
var2 = 'bye';
var3 = false;
var4 = 124;
var5 = true;
var6 = '10 + 12';
var7 = 14;
var8 = 'qwer';
var9 = 1.8484;
var10 = 0;
var11 = 'pkb';
var12 = 'true';
var13 = 98765.1;

let gen = var1 + '\n' + var2 + '\n' + var3 + '\n' + var4 + '\n' + var5 + '\n' + var6 + '\n' + var7 + '\n' + var8 + '\n' + var9 + '\n' + var10 + '\n' + var11 + '\n' + var12 + '\n' + var13;

console.log(gen);

alert(gen);

document.write(gen);

// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. Зконкатенувати їх в одну змінну person.

let firstName = 'Хітушка';
let middleName = 'Тетяна';
let lastName = 'Олександрівна';
let person = firstName + ' ' + middleName + ' ' + lastName;
console.log(person);


// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
//     Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".

let name = +prompt('Ваше имя', '');
let surname = +prompt('Ваше отчество', '');
let age = +prompt('Ваш возраст', '');

alert('Поздравляю ' + name + ' ' + surname + ', тебе ' + age + ' лет!');

// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;

let a = 100;
console.log(typeof a);

let b = '100';
console.log(typeof b);

let c = true;
console.log(typeof c);

// - Поставет відповідний оператор в виразах що б вийшов відповідний результат.
//     В однакових виразаї не використовувати однакові оператори!!!
//5 < 6 -> true
//5 > 6 -> false
//5 == 6 -> false
// 5 === 6 -> false
// 10 == 10 -> true
// 10 === 10 -> true
// 10 > 10 -> false
// 10 < 10 -> false
// 10 != 10// -> false
//123 === '123'; //-> false
// 123 == '123' -> true
//
// Додатково:
//     - Подивіться на наступні вирази і спробуйте вгадати яким буде вивід в консоль. Перевірте себе.
// console.log(132 > 100 && 45 < 12 ); false
// console.log(34 > 33 && 23 < 90 ); true
// console.log(99 > 100 && 45 > 12 ); false
// console.log(132 > 100 || 45 < 12 ); true
// console.log(111 > 11 || 45 < 111 ); true
// console.log((111 > 11 || 45 < 111) && (132 > 100 || 45 < 12) ); true
// console.log((111 > 11 || 45 < 56) || (132 > 100 || 45 < 12) ); true
// console.log((132 > 100 && 45 < 12 ) && (132 > 100 || 45 < 12 ) ); false
// console.log((111 > 11 || 45 < 111) || (99 > 100 && 45 > 12 )); true
//console.log(!!'-1'); true
// console.log(!!-1); true
// console.log(!!'0'); true
// console.log(!!'null'); true
// console.log(!!'undefined'); true
// console.log(!!(3/'owu')); true
// console.log((111 > 11 || 45 < 111) ||  !!'0'); true
// console.log((!!111 == !!11 || 45 < 111) && (99 > 100 && 45 > 12 )); false