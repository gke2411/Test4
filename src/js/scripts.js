var slideIndex = 0;
var slides = document.getElementsByClassName('slider__item');

function showSlides (n) {
	var blocksAll;
 	for (var i = 0; i<slides.length; i++) {
		slides[i].classList.remove("slider__item_active");
		blocksAll = document.getElementsByClassName('item__name_appear');
		if(blocksAll.length){
			for(var k = 0; k < blocksAll.length; k++){
				blocksAll[k].classList.remove("item__name_appear");
			}
		}
	}

	slides[n].classList.add("slider__item_active");
	var blocks = slides[n].getElementsByClassName('item__name');

	var appearBlock = function(block){
		block.classList.add("item__name_appear");
	}
	var appear;
	var windowIterator;

	if (window.innerWidth <= 414){
		windowIterator = 1;
	}else {
		windowIterator = 3;
	}

	for(var j = 0; j<blocks.length-windowIterator; j++){
		if(j == 0 || j == blocks.length){
			appear = setTimeout(appearBlock, 300 * j, blocks[j]);
		}else {
			appear = setTimeout(appearBlock, 300 * j, blocks[j]);
			appear = setTimeout(appearBlock, 300 * j+windowIterator, blocks[j+windowIterator]);
		}
	}
}

function getIndex (m){
	n = !m ? 0 : m;
	if(n > slides.length){	n = 0;	}
	if(n < 0){	n = slides.length;	}
	return n;
}

function currentSlide(m){
	//console.log(m);
	slideIndex = getIndex(m);
	showSlides(slideIndex);
}

for (var l = 0; l<slides.length; l++ ){
	var li = document.createElement('li');

	li.classList.add("nav__item");
	li.setAttribute("data-index", l);
	li.innerHTML = "&#xb7";


	parent = document.getElementsByClassName('slider__nav');
	parent[parent.length-1].appendChild(li);

	li.addEventListener('click', function(event){
		iterator = event.target.getAttribute('data-index');
		currentSlide(iterator);
	})
}

showSlides(slideIndex);
