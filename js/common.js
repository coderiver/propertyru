head.ready(function() {

	// $(document).on("click", function(){
	// 	$(".js-popup").hide();
	// });

	// function scrollFixedElements() {
	//     var scroll_left = $(this).scrollLeft();
	//     $(".fixed-element").css({
	//         left: -scroll_left
	//     });
	// }
	// scrollFixedElements();
	// $(window).scroll(function(){
	//     scrollFixedElements()
	// });

	console.log($('body').html());
	(function($){
		$(document).ready(function() {
			var image_array = new Array();
			image_array = [
				{image: 'content/our_team/1.jpg', link_url: 'content/our_team/1big.jpg', link_rel: 'prettyPhoto'},
					// image for the first layer, goes with the text from id="sw0"
				{image: 'content/our_team/2.jpg', link_url: 'content/our_team/2big.jpg', link_rel: 'prettyPhoto'},
					// image for the second layer, goes with the text from id="sw1"
				{image: 'content/our_team/3.jpg', link_url: 'content/our_team/3big.jpg', link_rel: 'prettyPhoto'},
					// image for the third layer, goes with the text from id="sw2"
				{image: 'content/our_team/4.jpg', link_url: 'content/our_team/4big.jpg', link_rel: 'prettyPhoto'},
					// ...
				{image: 'content/our_team/5.jpg', link_url: 'content/our_team/5big.jpg', link_rel: 'prettyPhoto'},
				{image: 'content/our_team/6.jpg', link_url: 'content/our_team/6big.jpg', link_rel: 'prettyPhoto'},
				{image: 'content/our_team/7.jpg', link_url: 'content/our_team/7big.jpg', link_rel: 'prettyPhoto'}
			];
			$('#slider1').content_slider({		// bind plugin to div id="slider1"
				map : image_array,				// pointer to the image map
				max_shown_items: 7,				// number of visible circles
				hv_switch: 0,					// 0 = horizontal slider, 1 = vertical
				active_item: 0,					// layer that will be shown at start, 0=first, 1=second...
				wrapper_text_max_height: 450,	// height of widget, displayed in pixels
				middle_click: 1,				// when main circle is clicked: 1 = slider will go to the previous layer/circle, 2 = to the next
				under_600_max_height: 1200,		// if resolution is below 600 px, set max height of content
				border_radius:	-1,				// -1 = circle, 0 and other = radius
				automatic_height_resize: 1,
				border_on_off: 0,
				allow_shadow: 0
			});
		});
	})(jQuery);
	// 	$('#arr_r').click(function() {
	// 			moveR();
	// 		return false;
	// 	});
	// 	$('#arr_l').click(function() {
	// 			moveL();
	// 		return false;
	// 	});
	// function moveR() {
	// 	var step = $('.item').width();
	// 	$('.slider__main_in').animate({left: '-'+step*3-50}, 500);
	// };
	// function moveL() {
	// 	var step = $('.item').width();
	// 	$('.slider__main_in').animate({left: step}, 500);
	// };
	$(document).ready(function() {
		$('.slider__main_in').slick({
			slidesToShow: 3,
			slidesToScroll: 3,
			arrows: true,
			prevArrow: $('#arr_l-btn'),
			nextArrow: $('#arr_r-btn'),
		});
		$('.item_about_add').click(function() {
			$(this).find('i').removeClass('heart_b').addClass('heart_pr');
		})
	});

	
});