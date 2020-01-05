$(document).ready(function(){
	$('a.menu_button img').click(function(){
		$('div.menu_wrapper').addClass('open');
	});
	$('a.dismiss_button img').click(function(){
		$('div.menu_wrapper').removeClass('open');
	});
	 // $('.carousel').carousel({
    //   interval: 6000
    // });
	$('#clint-slider').bxSlider({
        pager: false,
        minSlides: 3,
        maxSlides: 3,
        moveSlides: 1,
        slideWidth: 5000,
        slideMargin: 25,
        prevSelector: $('#client-prev'),
        nextSelector: $('#client-next'),
        prevText: 'prev',
        nextText: 'next'
    });

});

(function () {
    $('.we-craft .multi-item-carousel').carousel({
        interval: 0
    });

// for every slide in carousel, copy the next slide's item in the slide.
// Do the same for the next, next item.
    $('.we-craft .multi-item-carousel .item').each(function(){
        var next = $(this).next();
        if (!next.length) {
            next = $(this).siblings(':first');
        }
        next.children(':first-child').clone().appendTo($(this));

        if (next.next().length>0) {
            next.next().children(':first-child').clone().appendTo($(this));
        } else {
            $(this).siblings(':first').children(':first-child').clone().appendTo($(this));
        }
    });

    $('.client-success carousel.slide.multi-item-carousel').carousel({
        interval: false
    });
    $('.client-success .multi-item-carousel .item').each(function(){
        var next = $(this).next();
        if (!next.length) {
            next = $(this).siblings(':first');
        }
        next.children(':first-child').clone().appendTo($(this));

        if (next.next().length>0) {
            next.next().children(':first-child').clone().appendTo($(this));
        } else {
            next.siblings(':first').children(':first-child').clone().appendTo($(this));
        }
    });
})()