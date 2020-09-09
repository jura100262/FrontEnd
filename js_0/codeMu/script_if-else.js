// *Задача 1
var num = 10;
if (num == 10) {
    console.log('Верно');
} else {
    console.log('Неверно');
}
// *Задача 2
var min = 10;
if (min >= 0 && min <= 14) {
    console.log('В первую четверть.');
}
if (min >= 15 && min <= 30) {
    console.log('Во вторую четверть.');
}
if (min >= 31 && min <= 45) {
    console.log('В третью четверть.');
}
if (min >= 46 && min <= 60) {
    console.log('В четвертую четверть.');
}
// *Задача 3
// Решение через 2 if:
var lang = 'ru';
if (lang == 'ru') {
    var arr = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
}
if (lang == 'en') {
    arr = ['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn'];
}
console.log(arr);
// Решение через switch-case:
var lang = 'ru';
switch (lang) {
    case 'ru':
        var arr = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
        break;
    case 'en':
        arr = ['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn'];
        break;
}
console.log(arr);
// Решение через многомерный массив:
var lang = 'ru';
var arr = {
    'ru': ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'],
    'en': ['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn'],
};
console.log(arr[lang]);