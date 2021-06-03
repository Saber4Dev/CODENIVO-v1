(function ($) {

	"use strict";

	$(function () {
		$("#tabs").tabs();
	});

	$(window).scroll(function () {
		var scroll = $(window).scrollTop();
		var box = $('.header-text').height();
		var header = $('header').height();

		if (scroll >= box - header) {
			$("header").addClass("background-header");
		} else {
			$("header").removeClass("background-header");
		}
	});


	$('.schedule-filter li').on('click', function () {
		var tsfilter = $(this).data('tsfilter');
		$('.schedule-filter li').removeClass('active');
		$(this).addClass('active');
		if (tsfilter == 'all') {
			$('.schedule-table').removeClass('filtering');
			$('.ts-item').removeClass('show');
		} else {
			$('.schedule-table').addClass('filtering');
		}
		$('.ts-item').each(function () {
			$(this).removeClass('show');
			if ($(this).data('tsmeta') == tsfilter) {
				$(this).addClass('show');
			}
		});
	});


	// Window Resize Mobile Menu Fix
	mobileNav();


	// Scroll animation init
	window.sr = new scrollReveal();


	// Menu Dropdown Toggle
	if ($('.menu-trigger').length) {
		$(".menu-trigger").on('click', function () {
			$(this).toggleClass('active');
			$('.header-area .nav').slideToggle(200);
		});
	}


	function onScroll(event) {
		var scrollPos = $(document).scrollTop();
		$('.nav a').each(function () {
			var currLink = $(this);
			var refElement = $(currLink.attr("href"));
			if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
				$('.nav ul li a').removeClass("active");
				currLink.addClass("active");
			}
			else {
				currLink.removeClass("active");
			}
		});
	}


	// Page loading animation
	$(window).on('load', function () {

		$('#js-preloader').addClass('loaded');

	});


	// Window Resize Mobile Menu Fix
	$(window).on('resize', function () {
		mobileNav();
	});


	// Window Resize Mobile Menu Fix
	function mobileNav() {
		var width = $(window).width();
		$('.submenu').on('click', function () {
			if (width < 767) {
				$('.submenu ul').removeClass('active');
				$(this).find('ul').toggleClass('active');
			}
		});
	}
	/*
	(function () {
		$("cart").hover(function () {
			$(this).find(".shopping-cart.").toggle();
		})
	});
	*/
	$(document).mouseup(function (e) {
		var container = $('#contact-panel');
		if (!container.is(e.target) // if the target of the click isn't the container...
			&& container.has(e.target).length === 0) // ... nor a descendant of the container
		{
			container.removeClass('is-active');
		}
	});
})(window.jQuery);


//Cart Nav dropdown
// closes the panel on click outside
$(document).ready(function () {
	"use strict";

	var menuActive = false;
	var header = $('.header');
	setHeader();
	initCustomDropdown();
	initPageMenu();

	function setHeader() {

		if (window.innerWidth > 991 && menuActive) {
			closeMenu();
		}
	}

	function initCustomDropdown() {
		if ($('.custom_dropdown_placeholder').length && $('.custom_list').length) {
			var placeholder = $('.custom_dropdown_placeholder');
			var list = $('.custom_list');
		}

		placeholder.on('click', function (ev) {
			if (list.hasClass('active')) {
				list.removeClass('active');
			}
			else {
				list.addClass('active');
			}

			$(document).one('click', function closeForm(e) {
				if ($(e.target).hasClass('clc')) {
					$(document).one('click', closeForm);
				}
				else {
					list.removeClass('active');
				}
			});

		});

		$('.custom_list a').on('click', function (ev) {
			ev.preventDefault();
			var index = $(this).parent().index();

			placeholder.text($(this).text()).css('opacity', '1');

			if (list.hasClass('active')) {
				list.removeClass('active');
			}
			else {
				list.addClass('active');
			}
		});


		$('select').on('change', function (e) {
			placeholder.text(this.value);

			$(this).animate({ width: placeholder.width() + 'px' });
		});
	}

	/*
	
	4. Init Page Menu
	
	*/

	function initPageMenu() {
		if ($('.page_menu').length && $('.page_menu_content').length) {
			var menu = $('.page_menu');
			var menuContent = $('.page_menu_content');
			var menuTrigger = $('.menu_trigger');

			//Open / close page menu
			menuTrigger.on('click', function () {
				if (!menuActive) {
					openMenu();
				}
				else {
					closeMenu();
				}
			});

			//Handle page menu
			if ($('.page_menu_item').length) {
				var items = $('.page_menu_item');
				items.each(function () {
					var item = $(this);
					if (item.hasClass("has-children")) {
						item.on('click', function (evt) {
							evt.preventDefault();
							evt.stopPropagation();
							var subItem = item.find('> ul');
							if (subItem.hasClass('active')) {
								subItem.toggleClass('active');
								TweenMax.to(subItem, 0.3, { height: 0 });
							}
							else {
								subItem.toggleClass('active');
								TweenMax.set(subItem, { height: "auto" });
								TweenMax.from(subItem, 0.3, { height: 0 });
							}
						});
					}
				});
			}
		}
	}

	function openMenu() {
		var menu = $('.page_menu');
		var menuContent = $('.page_menu_content');
		TweenMax.set(menuContent, { height: "auto" });
		TweenMax.from(menuContent, 0.3, { height: 0 });
		menuActive = true;
	}

	function closeMenu() {
		var menu = $('.page_menu');
		var menuContent = $('.page_menu_content');
		TweenMax.to(menuContent, 0.3, { height: 0 });
		menuActive = false;
	}


});