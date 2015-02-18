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

	$(document).ready(function() {
		$('.slider__main_in').slick({
			slidesToShow: 3,
			slidesToScroll: 3,
			arrows: true,
			prevArrow: $('#arr_l-btn'),
			nextArrow: $('#arr_r-btn'),
			variableWidth: true,
			responsive: [
		    {
		      breakpoint: 1024,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 2,
		        infinite: true,
		        arrows: false
		      }}]
		});
		$('.item_about_add').click(function() {
			if($(this).find('i').hasClass('heart_pr')) {
				$(this).find('i').removeClass('heart_pr').addClass('heart_b')
			}
			else	$(this).find('i').removeClass('heart_b').addClass('heart_pr');
		})
	});
	//popUpMenu
	var $popUpMenu = $(".pop-up-menu");
	$('.humb').click(function() {
		if($popUpMenu.hasClass("is-visible")) {
			$(this).css("background-color", "#4d4d4d");
			$popUpMenu.removeClass("is-visible");
			
		}
		else {
			$(this).css("background-color", "#96c833");
			$popUpMenu.addClass("is-visible");
		}
	});
	//baseTopP
	var $baseTopP = $(".base_top_text").find('p');
	$(".base_top_text p").click(function() {
		if($baseTopP.hasClass('is-active')) {
			$baseTopP.removeClass('is-active');
		};
		if(!$(this).hasClass('is-active')) {
			$(this).addClass('is-active');
		}
	});
	var $baseFormLi = $(".base__form_nav").find('li span');
	var $commerceNav = $('#base_form_nav_commerce');
	var $aliveNav = $('#base_form_nav_alive');
	var $gardenNav = $('#base_form_nav_garden');
	var $newestNav = $('#base_form_nav_newest');
	var $formMain = $(".base__form_main").find('form');
	$(".base__form_nav li span").click(function() {
		if($baseFormLi.hasClass('is-active')) {
			$baseFormLi.removeClass('is-active');
		};
		if(!$(this).hasClass('is-active')) {
			$(this).addClass('is-active');

			if($commerceNav.hasClass('is-active')) {
				$formMain.removeClass('is-visible');
				$('.form__commerce').addClass('is-visible')
			}
			else if($aliveNav.hasClass('is-active')) {
				$formMain.removeClass('is-visible');
				$('.form__alive').addClass('is-visible')
			}
			else if($gardenNav.hasClass('is-active')) {
				$formMain.removeClass('is-visible');
				$('.form__garden').addClass('is-visible')
			}
			else if($newestNav.hasClass('is-active')) {
				$formMain.removeClass('is-visible');
				$('.form__newest').addClass('is-visible');
			}
		}
	});
	$('.commercial .header__foo_main_header').click(function() {
		if($('.commercial_in').hasClass('is-visible')) {
			$('.commercial_in').removeClass('is-visible');
		}
		else $('.commercial_in').addClass('is-visible');
	});
	$('.resident .header__foo_main_header').click(function() {
	if($('.resident_in').hasClass('is-visible')) {
		$('.resident_in').removeClass('is-visible');
	}
	else $('.resident_in').addClass('is-visible');
});
		$('.country .header__foo_main_header').click(function() {
		if($('.country_in').hasClass('is-visible')) {
			$('.country_in').removeClass('is-visible');
		}
		else $('.country_in').addClass('is-visible');
	});


		$('.pop-up-menu__company .pop-up-menu__header').click(function() {
		if($('.pop-up-menu__company .pop-up-menu_info').hasClass('is-visible')) {
			$(' .pop-up-menu__company .pop-up-menu_info').removeClass('is-visible');
		}
		else $(' .pop-up-menu__company .pop-up-menu_info').addClass('is-visible');
	});
			$('.pop-up-menu__service .pop-up-menu__header').click(function() {
			if($('.pop-up-menu__service .pop-up-menu_info').hasClass('is-visible')) {
				$(' .pop-up-menu__service .pop-up-menu_info').removeClass('is-visible');
			}
			else $(' .pop-up-menu__service .pop-up-menu_info').addClass('is-visible');
		});
				$('.pop-up-menu__contacts .pop-up-menu__header').click(function() {
				if($('.pop-up-menu__contacts .pop-up-menu_info').hasClass('is-visible')) {
					$(' .pop-up-menu__contacts .pop-up-menu_info').removeClass('is-visible');
				}
				else $(' .pop-up-menu__contacts .pop-up-menu_info').addClass('is-visible');
			});
	$cover = $('.cover');
	$popUpCallback = $('.pop-up-callback');
	$('.btn_recall').click(function() {
		$('.pop-up-callback').addClass('is-visible');
		$cover.addClass('is-visible');
	});
	$cover.click(function() {
		if($popUpCallback.hasClass('is-visible'))	closeCallback();
	});
	$('.pop-up-callback__header_close').click(function() {
		closeCallback();
	})
	function closeCallback() {
		$cover.removeClass('is-visible');
		$popUpCallback.removeClass('is-visible');
	};
	var $containerHeaderNav = $(".container__header_nav").find('span');
	$(".container__header_nav_marked").click(function() {
			if($containerHeaderNav.hasClass('is-active')) {
				$containerHeaderNav.removeClass('is-active');
			}
			// $(this).find('i').removeClass('inf').addClass('inf_wh');
			containerHeaderNav($(this));

	});
	$(".container__header_nav_cards").click(function() {
		if($containerHeaderNav.hasClass('is-active')) {
			$containerHeaderNav.removeClass('is-active');
		}
			// $(this).find('i').removeClass('sqr').addClass('sqr_wh');
			containerHeaderNav($(this));

	});
	$(".container__header_nav_loc").click(function() {
	if($containerHeaderNav.hasClass('is-active')) {
		$containerHeaderNav.removeClass('is-active');
	}
		// $(this).find('i').removeClass('loc_b').addClass('loc_wh');
		containerHeaderNav($(this));

	});
	function containerHeaderNav (el) {
			el.find('span').addClass('is-active');


			if($(".container__header_nav_marked span").hasClass('is-active')) {
			$(".container__header_nav_marked span").find('i').removeClass('inf').addClass('inf_wh');
			}
			else  {
				$(".container__header_nav_marked span").find('i').removeClass('inf_wh').addClass('inf');
			}


			if($(".container__header_nav_cards span").hasClass('is-active')) {
			$(".container__header_nav_cards span").find('i').removeClass('sqr').addClass('sqr_wh');
			}
			else {
				$(".container__header_nav_cards span").find('i').removeClass('sqr_wh').addClass('sqr');
			}


			if($(".container__header_nav_loc span").hasClass('is-active')) {
			$(".container__header_nav_loc span").find('i').removeClass('loc_b').addClass('loc_wh');
			}
			else {
				$(".container__header_nav_loc span").find('i').removeClass('loc_wh').addClass('loc_b');
			}
	}
});