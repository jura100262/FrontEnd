for (var i = 1; i < 100; i++) {
    console.log(i + '<br>');
}
for (var i = 100; i < 1; i--) {
    console.log(i + '<br>');
}


for (var i = 2; i < 100; i += 2) {
    console.log(i + '<br>');
}


var arr = [];
for (i = 0; i < 10; i++) {
    arr[i] = 'x';
}
console.log(arr);


var arr = [];
for (i = 1; i <= 10; i++) {
    arr.push(i);
}
console.log(arr);