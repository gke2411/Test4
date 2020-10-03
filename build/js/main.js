var slideIndex = 1;
var slides = document.getElementsByClassName('slider-item');

function showSlides (n) {
	var blocks;
 	for (var i = 0; i<slides.length; i++) {
		slides[i].classList.add("hidden");
		slides[i].classList.remove("active");
		blocks = slides[i].getElementsByClassName('item-name');
		if(blocks.length){
			for(var k = 0; k < blocks.length; k++){
				blocks[k].classList.remove("appear");
			}
		}
	}

	slides[n-1].classList.remove("hidden");
	slides[n-1].classList.add("active");
	blocks = slides[n-1].getElementsByClassName('item-name');

	var appearBlock = function(block){
		block.classList.add("appear");
	}
	var appear;
	var windowIterator;

	if (window.innerWidth <= 375){
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

function plusSlides(m){
	n = !m ? 1 : slideIndex + m;
	if(n > slides.length){	n = 1;	}
	if(n < 1){	n = slides.length;	}

	slideIndex = n;

	showSlides(slideIndex);
}

function currentSlide(m){
n = !m ? 1 : m;
if(n > slides.length){	n = 1;	}
if(n < 1){	n = slides.length;	}

slideIndex = n;
	showSlides(slideIndex);
}

showSlides(slideIndex);