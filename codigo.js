let mango = document.querySelector('.mango');

for(let i = 0; i < 10; i++){
 let a = document.createElement('div');
 mango.appendChild(a);
 a.classList.add('mango2');
 a.style.transform = `rotatey(${i*40}deg)`;
};

let m2 = document.querySelectorAll('.mango2');
m2.forEach(function(e,i) {
let b = document.createElement('div');
m2[i].appendChild(b);
b.classList.add('mango3');
});
