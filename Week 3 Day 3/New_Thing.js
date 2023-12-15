function timesTwoAgain(num) {
    console.log('num is', num);
    var y = num*2; 
    return y;
}
var result = timesTwoAgain(3) + timesTwoAgain(5);
console.log('result is', result);