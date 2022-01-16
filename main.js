const toTop = document.querySelector(".to-top");
window.addEventListener("scroll", () => {
	if(window.pageYOffset > 100){
		toTop.classList.add("active");
	}else{
		toTop.classList.remove("active");
	}
});

$(".readmore-btn").on('click', function(){
  $(this).parent().toggleClass("showContent");
  var replaceText = $(this).parent().hasClass("showContent") ? "Read Less >" : "Read More >";
  $(this).text(replaceText);
});

/*main image slider one*/
$(".slider-one")
.not(".slick-initialized")
.slick({
	autoplay:true,
	dots:true,
	prevArrow:".site-slider .prev",
	nextArrow:".site-slider .next",
	autoplaySpeed:5000
});

/*cat image slider two*/
$(".slider-two")
.not(".slick-initialized")
.slick({
	prevArrow:".site-slider-two .prev",
	nextArrow:".site-slider-two .next",
	slidesToShow:5,
	slidesToScroll:1,
	autoplaySpeed:3000
});