head.ready(function() {

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

		$('.pop-up-item__main_slider_main_in').slick({
			slidesToShow: 3,
			slidesToScroll: 3,
			// variableWidth: true,
			arrows: true,
			prevArrow: $('.pop-up-item_prev_btn'),
			nextArrow: $('.pop-up-item_nxt_btn'),
			// respondTo: 'min',
			// slide: $('.item__slider_img'),


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
	// });
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
		containerHeaderNav($(this));
	});
	$(".container__header_nav_cards").click(function() {
		if($containerHeaderNav.hasClass('is-active')) {
			$containerHeaderNav.removeClass('is-active');
		}
		containerHeaderNav($(this));
	});
	$(".container__header_nav_loc").click(function() {
	if($containerHeaderNav.hasClass('is-active')) {
		$containerHeaderNav.removeClass('is-active');
	}
		containerHeaderNav($(this));

	});
	function containerHeaderNav (el) {
		el.find('span').addClass('is-active');
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
			$('.content').addClass('map');
		}
		else {
			$(".container__header_nav_loc span").find('i').removeClass('loc_wh').addClass('loc_b');
			$('.content').removeClass('map');
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

	  $('.js-popup-open').on('click', function() {
    $('.js-wrap').addClass('is-active');
      $('.popup').slick({
 				slidesToShow: 1,
			  slidesToScroll: 1,
   	   	arrows: true,
			  prevArrow: $('.popup__prev_btn'),
			  nextArrow: $('.popup__next_btn')
   		});
    return false;
   });
	  $('.js-popup-close').on('click', function() {
	  	$('.js-wrap').removeClass('is-active');
	  	return false;
	  });

});