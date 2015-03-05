// head.ready(function() {
// 	$(".dropdown").click(function(event){
// 		$(this).toggleClass("is-open");
// 		$(".dropdown__menu").slideToggle();
// 		return false;
// 	});
// });

head.ready(function() {

	(function() {

    var company__nav = $('.company__nav');

    if ( company__nav.length ) {

        var itemSelector    = '.company__item',
            btnSelector     = '.company__title',
            contentSelector = '.company__content',
            activeClass     = 'is-active';

        company__nav.each(function() {
            var el       = $(this),
                btn      = el.find(btnSelector),
                items    = el.find(itemSelector),
                contents = el.find(contentSelector);

            btn.on('click', function(event) {
                event.preventDefault();

                var currentBtn = $(this),
                    item       = currentBtn.parent(itemSelector),
                    content    = currentBtn.siblings(contentSelector);

                if ( item.hasClass(activeClass) ) {
                    item.removeClass(activeClass);
                    content.slideUp(200);
                } else {
                    items.removeClass(activeClass);
                    contents.slideUp(200);
                    item.addClass(activeClass);
                    content.slideDown(200);
                }
            });
        });
    }

})();

	$('.company__btn').click(function(event){
		$('.company__nav').toggleClass('is-open');
	});

});

