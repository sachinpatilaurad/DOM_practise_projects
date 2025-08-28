var inc = document.getElementById('inc')
var dec = document.getElementById('dec')
var reset = document.getElementById('reset')

var num = document.getElementById('counter');
let count = 0;
inc.addEventListener('click',function(){
    count++;
    num.innerHTML = count;

});
dec.addEventListener('click',function(){
    count--;
    num.innerHTML = count;

});
reset.addEventListener('click',function(){
    num.innerHTML = 0;
})