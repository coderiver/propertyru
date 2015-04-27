// $(document).ready(function(){


head.ready(function() {

		$('.slider__main_in').slick({
			slidesToShow: 5,
			slidesToScroll: 5,
			arrows: true,
			// variableWidth: true,
			responsive: [
					{
						breakpoint: 1700,
						settings: {
							slidesToShow: 4,
							slidesToScroll: 4,
						}
					},
					{
						breakpoint: 1400,
						settings: {
							slidesToShow: 3,
							slidesToScroll: 3,
						}
					},
					{
						breakpoint: 900,
						settings: {
							slidesToShow: 2,
							slidesToScroll: 2,
						}
					},
					{
						breakpoint: 700,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1,
						}
					}
				]
		 });
		$('.banner__slider').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			dots: true,
		  infinite: true,
		});

		
		$('.item_about_add').click(function() {
			if($(this).find('i').hasClass('heart_pr')) {
				$(this).find('i').removeClass('heart_pr').addClass('heart')
			}
			else	$(this).find('i').removeClass('heart').addClass('heart_pr');
		});
		$('.object__btn').click(function() {
			if($(this).find('i').hasClass('heart_p')) {
				$(this).find('i').removeClass('heart_p').addClass('heart')
			}
			else	$(this).find('i').removeClass('heart').addClass('heart_p');
		});
		$('.popup__like').click(function(event) {
			$(this).toggleClass('is-active');
			return false;
		});

		function isTouchDevice() {
		   var el = document.createElement('div');
		   el.setAttribute('ongesturestart', 'return;'); // or try "ontouchstart"
		   return typeof el.ongesturestart === "function";
		}
		if(isTouchDevice()){
			$('.item').click(function(event) {
				$(this).addClass("is-touched");
			});
		}
	// });
	//popUpMenu
	var $popUpMenu = $(".pop-up-menu");
	$('.js-popup-menu').click(function() {
		if($popUpMenu.hasClass("is-visible")) {
			$('.humb').css("background-color", "#4d4d4d");
			$popUpMenu.removeClass("is-visible");
			$('.pop-up-menu-entry__map').addClass('is-hidden');
		}
		else {
			$('.humb').css("background-color", "#96c833");
			$popUpMenu.addClass("is-visible");
			$('.pop-up-menu-entry__map').removeClass('is-hidden');
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
	$('.country .header__foo_main_header_new').click(function() {
	if($('.newest_in').hasClass('is-visible')) {
		$('.newest_in').removeClass('is-visible');
	}
	else $('.newest_in').addClass('is-visible');
	});
	$('.pop-up-menu__company .pop-up-menu__header').click(function() {
	if($('.pop-up-menu__company .pop-up-menu_info').hasClass('is-visible')) {
		$(' .pop-up-menu__company .pop-up-menu_info').removeClass('is-visible');
	}
	else $(' .pop-up-menu__company .pop-up-menu_info').addClass('is-visible');
	});
	$('.js-pop-obje').click(function() {
	if($('.pop-obje').hasClass('is-visible')) {
		$(' .pop-obje').removeClass('is-visible');
	}
	else $(' .pop-obje').addClass('is-visible');
	});
		$('.js-pop-serv').click(function() {
	if($('.pop-serv').hasClass('is-visible')) {
		$(' .pop-serv').removeClass('is-visible');
	}
	else $(' .pop-serv').addClass('is-visible');
	});
	$('.pop-up-menu__contacts .pop-up-menu__header').click(function() {
	if($('.pop-up-menu__contacts .pop-up-menu_info').hasClass('is-visible')) {
		$(' .pop-up-menu__contacts .pop-up-menu_info').removeClass('is-visible');
	}
	else $(' .pop-up-menu__contacts .pop-up-menu_info').addClass('is-visible');
	});
	$cover = $('.cover');
	$popUpCallback = $('.pop-up-callback');
	$popUpPresent = $('.pop-up-present');
	$('.btn_recall').click(function() {
		$('.pop-up-callback').addClass('is-visible');
		$cover.addClass('is-visible');
	});
	//
	$('.js-pop-up-present-open').click(function() {
		$popUpPresent.addClass('is-visible');
		$cover.addClass('is-visible');
	});
	$cover.click(function() {
		if($popUpCallback.hasClass('is-visible'))	closeCallback();
		else if($popUpPresent.hasClass('is-visible'))	closePresent();
	});
	//
	$('.pop-up-callback__header_close').click(function() {
		if($popUpCallback.hasClass('is-visible'))	closeCallback();
		else if($popUpPresent.hasClass('is-visible'))	closePresent();
	});
	function closeCallback() {
		$cover.removeClass('is-visible');
		$popUpCallback.removeClass('is-visible');
	};
	//
	function closePresent() {
		$cover.removeClass('is-visible');
		$popUpPresent.removeClass('is-visible');
	};
	var $containerHeaderNav = $(".container__header_nav").find('span');
	$(".container__header_nav_marked").click(function() {
			if($(".container__header_nav_cards").find('span').hasClass('is-active')) {
				$containerHeaderNav.removeClass('is-active');
			}
		containerHeaderNav($(this));
	});
	$(".container__header_nav_cards").click(function() {
		if($(".container__header_nav_marked").find('span').hasClass('is-active')) {
				$containerHeaderNav.removeClass('is-active');
		}
		containerHeaderNav($(this));
	});
	$(".container__header_nav_loc").click(function() {
	
		containerHeaderNav($(this));

	});
	function containerHeaderNav (el) {
		el.find('span').toggleClass('is-active');
		if($(".container__header_nav_marked span").hasClass('is-active')) {
			$(".container__header_nav_marked span").find('i').removeClass('inf').addClass('inf_wh');
			$('.content').addClass('list');
		}
		else  {
			$(".container__header_nav_marked span").find('i').removeClass('inf_wh').addClass('inf');
			$('.content').removeClass('list');
		}

		if($(".container__header_nav_cards span").hasClass('is-active')) {
			$(".container__header_nav_cards span").find('i').removeClass('sqr').addClass('sqr_wh');
		}
		else {
			$(".container__header_nav_cards span").find('i').removeClass('sqr_wh').addClass('sqr');
		}

		if($(".container__header_nav_loc span").hasClass('is-active')) {
			$(".container__header_nav_loc span").find('i').removeClass('loc_b').addClass('loc_wh');
			$('.content__map').addClass('is-visible');
		}
		else {
			$(".container__header_nav_loc span").find('i').removeClass('loc_wh').addClass('loc_b');
			$('.content__map').removeClass('is-visible');
		}
		
					
	};
	var $copyItems = $('.copy_box .item');
	$('#show_more').click(function() {
		$copyItems.clone('true').appendTo('.content .content__items');
	});
	$('.circle').click(function() {
			if($('.nav').hasClass('is-visible')) $('.nav').removeClass('is-visible')
			else $('.nav').addClass('is-visible')
	});

	//galleries synchronize (ITEM)
	var slideshows = $('.cycle-slideshow').on('cycle-next cycle-prev', function(e, opts) {
		slideshows.not(this).cycle('goto', opts.currSlide);
	});

	$('.p-slider__pager .p-slide').click(function() {
		var index = $('.p-slider__pager').data('cycle.API').getSlideIndex(this);
		console.log(index);
		slideshows.cycle('goto', index);
	});

	(function( $ ) {
			$.widget( "custom.combobox", {
				_create: function() {
					this.wrapper = $( "<span>" )
						.addClass( "custom-combobox" )
						.insertAfter( this.element );
	 
					this.element.hide();
					this._createAutocomplete();
					this._createShowAllButton();
					 this.input.attr("placeholder", this.element.attr('placeholder'));
				},
	 
				_createAutocomplete: function() {
					var selected = this.element.children( ":selected" ),
						value = selected.val() ? selected.text() : "";
	 
					this.input = $( "<input>" )
						.appendTo( this.wrapper )
						.val( value )
						.attr( "title", "" )
						.addClass( "custom-combobox-input ui-widget ui-widget-content ui-state-default ui-corner-left" )
						.autocomplete({
							delay: 0,
							minLength: 0,
							source: $.proxy( this, "_source" )
						})
						.tooltip({
							tooltipClass: "ui-state-highlight"
						});
	 
					this._on( this.input, {
						autocompleteselect: function( event, ui ) {
							ui.item.option.selected = true;
							this._trigger( "select", event, {
								item: ui.item.option
							});
						},
	 
						autocompletechange: "_removeIfInvalid"
					});
				},
	 
				_createShowAllButton: function() {
					var input = this.input,
						wasOpen = false;
	 
					$( "<a>" )
						.attr( "tabIndex", -1 )
						// .attr( "title", "Show All Items" )
						.tooltip()
						.appendTo( this.wrapper )
						.button({
							icons: {
								primary: "ui-icon-triangle-1-s"
							},
							text: false
						})
						.removeClass( "ui-corner-all" )
						.addClass( "custom-combobox-toggle ui-corner-right" )
						.mousedown(function() {
							wasOpen = input.autocomplete( "widget" ).is( ":visible" );
						})
						.click(function() {
							input.focus();
	 
							// Close if already visible
							if ( wasOpen ) {
								return;
							}
	 
							// Pass empty string as value to search for, displaying all results
							input.autocomplete( "search", "" );
						});
				},
	 
				_source: function( request, response ) {
					var matcher = new RegExp( $.ui.autocomplete.escapeRegex(request.term), "i" );
					response( this.element.children( "option" ).map(function() {
						var text = $( this ).text();
						if ( this.value && ( !request.term || matcher.test(text) ) )
							return {
								label: text,
								value: text,
								option: this
							};
					}) );
				},
	 
				_removeIfInvalid: function( event, ui ) {
	 
					// Selected an item, nothing to do
					if ( ui.item ) {
						return;
					}
	 
					// Search for a match (case-insensitive)
					var value = this.input.val(),
						valueLowerCase = value.toLowerCase(),
						valid = false;
					this.element.children( "option" ).each(function() {
						if ( $( this ).text().toLowerCase() === valueLowerCase ) {
							this.selected = valid = true;
							return false;
						}
					});
	 
					// Found a match, nothing to do
					if ( valid ) {
						return;
					}
	 
					// Remove invalid value
					this.input
						.val( "" )
						.attr( "title", value + " didn't match any item" )
						.tooltip( "open" );
					this.element.val( "" );
					this._delay(function() {
						this.input.tooltip( "close" ).attr( "title", "" );
					}, 2500 );
					this.input.autocomplete( "instance" ).term = "";
				},
	 
				_destroy: function() {
					this.wrapper.remove();
					this.element.show();
				}
			});
		})( jQuery );
		$(function() {
			$( ".combobox" ).combobox();
			$( ".toggle" ).click(function() {
				$( ".combobox" ).toggle();
			});
		});

		$('.js-popup-open').on('click', function(event) {
			 if ($(event.target).closest("a, span").length) return;
    
		$('.js-wrap').addClass('is-active');
			$('.popup').slick({
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: true,
				prevArrow: $('.popup-wrap .slick-prev'),
				nextArrow: $('.popup-wrap .slick-next')
			});
    event.stopPropagation();
		return false;
	 });
		$('.js-popup-close').on('click', function(event) {
			if ($(event.target).closest(".slick-next, .slick-prev").length) return;
			$('.js-wrap').removeClass('is-active');
	    event.stopPropagation();
			return false;
		});
			$('.popup-wrap').on('click', function(event) {
			if ($(event.target).closest(".slick-next, .slick-prev,.popup").length) return;
			$('.js-wrap').removeClass('is-active');
	    event.stopPropagation();
			return false;
		});
	$(".js-select-list").hide();
	$(".js-select").removeClass("is-active");
	$(document).ready(function() {
			$(document).click(function() {
				$(".js-select-list").hide();
				$(".js-select").removeClass("is-active");
			});
			function selectList() {
					var select = $(".js-select");
					var select_list = $(".js-select-list");
					$("body").on("click", ".js-select", function(event){
							if ($(this).hasClass("is-active")) {
									select.removeClass("is-active");
									select_list.hide();
							}
							else {
									select.removeClass("is-active");
									select_list.hide();
									$(this).find(".js-select-list").show();
									$(this).addClass("is-active");
							}
							event.stopPropagation();
					});
					$("body").on("click", ".js-select-list li", function(event){
							var id = $(this).attr("data-id");
							var text = $(this).text();
							$(this).parents(".js-select").find(".js-select-text").text(text);
							$(this).parents(".js-select").find(".js-select-input").val(id);
							$(this).parent().hide();
							$(this).parents(".js-select").removeClass("is-active");
							event.stopPropagation();
					});
			}  
			
			selectList();
			$("body").on("click", ".js-select", function(event){
					event.stopPropagation();
			});
			
	});
		var config = {
			'.chosen-select'           : {},
			'.chosen-select-deselect'  : {allow_single_deselect:true},
			'.chosen-select-no-single' : {disable_search_threshold:10},
			'.chosen-select-no-results': {no_results_text:'Oops, nothing found!'},
			'.chosen-select-width'     : {width:"95%"}
		}
		for (var selector in config) {
			$(selector).chosen(config[selector]);
		}

	$(document).ready(function() {
		$('body').mouseover(function() {
	 if($('.subw .chosen-choices').find('li').hasClass('search-choice')) {
		$('.subw').find('i').hide();
	 }
		else {$('.subw').find('i').show();}
		if($('.region .chosen-choices').find('li').hasClass('search-choice')) {
			$('.region').find('i').hide();
		 }
			else {$('.region').find('i').show();}
		
	})
		 })
	$('.subw').find('i').click(function(){
		$('.subw .search-field').click();
	})

		$('.region').find('i').click(function(){
		$('.region .search-field').click();
	})



	$(window).scroll(function() {    
			 var scroll = $(window).scrollTop();
			 var botpos = $('.slider').offset().top;
			 var ww = $('.company__nav').height();
			 if ($('.js-wrap').length>0) {
				if (scroll+43 >= $('.js-wrap').offset().top) {
						$(".js-fixed").addClass("is-fixed");
						if(scroll>botpos-ww - 43 - 35){
							$(".js-fixed").addClass('is-abs');
						}
						else{
							$(".js-fixed").removeClass('is-abs').addClass("is-fixed");
						}
				} else {
						$(".js-fixed").removeClass("is-fixed");
				};
			 };
			  if ($('.js-wrap-form').length>0) {
			 	if (scroll+40 >= $('.js-wrap-form').offset().top) {
			 			$(".js-fixed-form").addClass("is-fixed");
		 				$(".base__form_minimize").addClass('is-visible');
		 				if($(".form_catalog").hasClass('is-visible') && $(".base__form_minimize").find('span').text() === 'Развернуть'){
	 							$(".form_catalog").removeClass('is-visible');
								$('.base__form_main').addClass('p_rem');

		 				}
		 				
			 			if(scroll>botpos- ww - 43 - 35){
			 				$(".js-fixed-form").addClass('is-abs');
			 			}
			 			else{
			 				$(".js-fixed-form").removeClass('is-abs').addClass("is-fixed");}

			 	} else {
			 			$(".js-fixed-form").removeClass("is-fixed");
		 				$(".base__form_minimize").removeClass('is-visible');
						$('.form_catalog').addClass('is-visible');
		 				if(	$('.base__form_main').hasClass('p_rem')) {
							$('.base__form_main').removeClass('p_rem');
		 				}


			 	};
			  };
	 });

	$(".js-sticky").sticky({topSpacing:50});
	$('.new-select').select2({
	  tags: true
	})
	;
	var $newestDrop = $('.newest-select__drop-menu');
	var $newestTxt	= $('.newest-select__txt');
	var $checked = $('<i class="check-icon"></i>');
	var $openDropDist = $('.js-drop-dist');
	var $openDropSubw = $('.js-drop-subw');
	var $openDrop = $('.js-drop');
	var flag = false;
	$('.newest-select i.select').click(function(){
		$(this).siblings('.js-drop').trigger('click');
	})
	$openDrop.click(function(){
		var $this = $(this);
		var $drop = $this.siblings($newestDrop);
		var $li = $drop.find('li');
		if(!$drop.hasClass('is-visible')) {
				$drop.addClass('is-visible');
		} else {
			$drop.removeClass('is-visible');
		}
	});
//- CounterWidget
var CounterWidget = function ($el) {
    var count = 0;
    var $clicker = $el.find('.ui-menu-item');
    var $display = $el.find('.js-drop');

    $clicker.on('click', function () {
			if(!$(this).hasClass('checked')) {
				$(this).addClass('checked');
				$checked.clone().prependTo($(this));
				count++;
			} else {
					$(this).removeClass('checked');
					$(this).find('.check-icon').remove();
					count--;
				}
        $display.val('Выбрано: ' + count);
    });
}
$('.newest-select').each(function (index, el) {
    new CounterWidget($(el));
});
//-end CounterWidget
	$(document).click(function(){
		if($(event.target).closest('.newest-select').length) return;
		if($newestDrop.hasClass('is-visible'))	{$newestDrop.removeClass('is-visible');
		$newestDrop.siblings('i.select').removeClass('is-visible');
	}
	    event.stopPropagation();

		});
	

	$('.js-minimize-form').click(function() {
		if(!$('.form_catalog').hasClass('is-visible')){
				$('.form_catalog').addClass('is-visible');
				$(this).find('.minimize__action').text('Свернуть');
				$(this).find('i').removeClass('animate').addClass('animate-r');
			$('.base__form_main').removeClass('p_rem');

		}
		else { 
			$('.form_catalog').removeClass('is-visible');
			$(this).find('.minimize__action').text('Развернуть');
			$(this).find('i').addClass('animate').removeClass('animate-r');
			$('.base__form_main').addClass('p_rem');

		}
	});

window.addEventListener("keydown", function(e){
		if (e.keyCode == 27 && $('.js-wrap').hasClass('is-active')) {
      $('.js-popup-close').click();
			console.log("A");
		}
	}, true);

});
// })