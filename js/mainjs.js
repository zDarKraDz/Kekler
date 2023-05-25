/*анимация появления блоков*/
function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
     change.target.classList.add('element-show');
    }
  });
}

let options = {
  threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.element-animation');

for (let elm of elements) {
  observer.observe(elm);
}


/*Закрепление шапки*/
let header = document.querySelector('.header'),
	headerH = document.querySelector('.header').clientHeight;

document.onscroll = function(){
	let scroll = window.scrollY;

	if(scroll > headerH){
		header.classList.add('fixed');
		document.body.style.paddingTop = headerH + 139+ 'px';
	}else{
		header.classList.remove('fixed');
		document.body.removeAttribute('style');
	}
}

/*закрытие блока*/
var krestik = document.getElementById('krestik');
var adv = document.getElementById('header-line');
krestik.onclick = function(){
    krestik.style.display = 'none';
    adv.style.display = 'none';
};
