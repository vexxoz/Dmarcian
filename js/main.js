/*

[Main Script]

Project: dmarcian
Version: 1.1
Author : Blake Caldwell

*/

;(function ($) {
    "use strict";
    
    /* ------------------------------------------------------------------------- *
     * COMMON VARIABLES
     * ------------------------------------------------------------------------- */
    var $wn = $(window),
        $body = $('body');
        
    /* ------------------------------------------------------------------------- *
     * Check Data
     * ------------------------------------------------------------------------- */
    var checkData = function (data, value) {
        return typeof data === 'undefined' ? value : data;
    };
        
    /* ------------------------------------------------------------------------- *
     * TAWK
     * ------------------------------------------------------------------------- */
    if ( typeof Tawk_API !== 'undefined' ) {
        Tawk_API = Tawk_API || {};
        Tawk_API.onLoad = function(){
            if ( $('#tawkchat-container').length ) {
                $body.addClass('isTawkMobile');
            }
        };
    }

    $(function () {
        /* ------------------------------------------------------------------------- *
         * BACKGROUND IMAGE
         * ------------------------------------------------------------------------- */
        var $bgImg = $('[data-bg-img]');
        
        $bgImg.each(function () {
            var $t = $(this);

            $t.css('background-image', 'url(' + $t.data('bg-img') + ')').addClass('bg--img bg--overlay').attr('data-rjs', 2).removeAttr('data-bg-img');
        });
        
        /* ------------------------------------------------------------------------- *
         * RETINAJS
         * ------------------------------------------------------------------------- */
        retinajs();
        
        /* ------------------------------------------------------------------------- *
         * TOOLTIP
         * ------------------------------------------------------------------------- */
        var $tooltip = $('[data-toggle="tooltip"]');
        
        $tooltip.tooltip();
        
        /* ------------------------------------------------------------------------- *
         * HOVER INTENT
         * ------------------------------------------------------------------------- */
        var $navHoverIntent = $('.NavHoverIntent');
        
        $navHoverIntent.hoverIntent({
            selector: 'li.dropdown',
            over: function () {
                $(this).addClass('open');
            },   
            out: function () {
                $(this).removeClass('open');
            },
            timeout: 0,
            interval: 0
        });
        
        /* ------------------------------------------------------------------------- *
         * ANIMATE SCROLL
         * ------------------------------------------------------------------------- */
        var $animateScrollLink = $('.AnimateScrollLink'),
            $animateScrollList = $('.AnimateScrollList'),
            animateScrolling = function (e) {
                var target = $(this).attr('href');
                
                $(target).animatescroll({
                    padding: 0,
                    easing: "easeInOutExpo",
                    scrollSpeed: 1200
                });
                
                e.preventDefault();
            };
        
        $animateScrollLink.on('click', animateScrolling);
        $animateScrollList.on('click', 'a', animateScrolling);
        
        /* ------------------------------------------------------------------------- *
         * MAGNIFIC POPUP
         * ------------------------------------------------------------------------- */
        var $popupImg = $('[data-popup="img"]');
        
        if ( $popupImg.length ) {
            $popupImg.magnificPopup({
                type:'image',
                zoom: {
                    enabled: true
                }
            });
        }
        
        /* ------------------------------------------------------------------------- *
         * STICKYJS
         * ------------------------------------------------------------------------- */
        var $sticky = $('[data-sticky]');
        
        $sticky.each(function () {
            $(this).sticky({
                zIndex: 999
            });
        });
        
        /* ------------------------------------------------------------------------- *
         * COUNTER UP
         * ------------------------------------------------------------------------- */
        var $counterUp = $('[data-counter-up="numbers"]');
            
        if ( $counterUp.length ) {
            $counterUp.counterUp({
                delay: 10,
                time: 1000
            });
        }
        
        /* -------------------------------------------------------------------------*
         * COUNTDOWN
         * -------------------------------------------------------------------------*/
        var $countDown = $('[data-counter-down]');
            
        $countDown.each(function () {
            var $t = $(this);
            
            $t.countdown($t.data('counter-down'), function(e) {
                $(this).html( '<ul>' + e.strftime('<li><strong>%D</strong><span>Days</span></li><li><strong>%H</strong><span>Hours</span></li><li><strong>%M</strong><span>Minutes</span></li><li><strong>%S</strong><span>Seconds</span></li>') + '</ul>' );
            });
        });
        
        /* ------------------------------------------------------------------------- *
         * FORM VALIDATION
         * ------------------------------------------------------------------------- */
        var $formValidation = $('[data-form-validation] form');
        
        $formValidation.each(function () {
            var $t = $(this);
            
            $t.validate({
                errorPlacement: function () {
                    return true;
                }
            });
        });
        
        /* ------------------------------------------------------------------------- *
         * OWL CAROUSEL
         * ------------------------------------------------------------------------- */
        var $owlCarousel = $('.owl-carousel');
        
        $owlCarousel.each(function () {
            var $t = $(this);
            
            $t.owlCarousel({
                items: checkData( $t.data('carousel-items'), 1 ),
                margin: checkData( $t.data('carousel-margin'), 0 ),
                loop: checkData( $t.data('carousel-loop'), true ),
                smartSpeed: checkData( $t.data('carousel-smartspeed'), 2400 ),
                autoplay: checkData( $t.data('carousel-autoplay'), false ),
                autoplayHoverPause: checkData( $t.data('carousel-hover-pause'), false ),
				autoplayTimeout: checkData( $t.data('carousel-autoplaytimeout'), 1000 ),
                
                navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
                dots: checkData( $t.data('carousel-dots'), false ),
                dotsContainer: checkData( $t.data('carousel-dots-container'), false ),
                responsive: checkData( $t.data('carousel-responsive'), {} )
            });
        });
        
        /* Icon Ticker */
        var $owlCarousel = $('.owl-carousel-icon');
        
        $owlCarousel.each(function () {
            var $t = $(this);
            
            $t.owlCarousel({
                items: checkData( $t.data('carousel-items'), 1 ),
                margin: checkData( $t.data('carousel-margin'), 0 ),
                loop: checkData( $t.data('carousel-loop'), true ),
                smartSpeed: 500,
                autoplay: checkData( $t.data('carousel-autoplay'), false ),
                autoplayHoverPause: checkData( $t.data('carousel-hover-pause'), false ),
				autoplayTimeout:1000,
                nav: checkData( $t.data('carousel-nav'), false ),
                navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
                dots: checkData( $t.data('carousel-dots'), false ),
                dotsContainer: checkData( $t.data('carousel-dots-container'), false ),
                responsive: checkData( $t.data('carousel-responsive'), {} )
            });
        });        
        
        /* ------------------------------------------------------------------------- *
         * BANNER AREA
         * ------------------------------------------------------------------------- */
        var $bannerSlider = $('.banner--slider'),
            $bannerSliderNav = $('.banner--slider-nav'),
            $bannerSliderNavList = $bannerSliderNav.find('li');
        
        if ( $bannerSliderNav.length ) {
            $bannerSliderNavList.css( 'width', (100 / $bannerSliderNavList.length) + '%' );
        }
        
        /* ------------------------------------------------------------------------- *
         * SERVICES TAB AREA
         * ------------------------------------------------------------------------- */
        var $servicesTabNav = $('.services-tab--nav');
        
        $servicesTabNav
            .find('li [title]').tooltip({ trigger: 'manual' })
                .end()
                .find('li.active [title]').tooltip('show')
                .end()
                .on('shown.bs.tab', function (e) {
                    $(e.target).tooltip('show');
                    $(e.relatedTarget).tooltip('hide');
                });

        /* ------------------------------------------------------------------------- *
         * PRICING INCLUDED AREA
         * ------------------------------------------------------------------------- */
        var $pricingIncluded = $('#pricingIncluded');
        
        if ( $pricingIncluded.length ) {
            var objPricingIncluded = {
                pricingItemFirst: $pricingIncluded.find('.pricing--item:first-child .pricing--features li:not(:first-child)'),
                pricingItemOther: $pricingIncluded.find('.pricing--item:not(:first-child) .pricing--features li')
            };
            
            objPricingIncluded.pricingItemOther.each(function (i) {
                var $t = $(this),
                    value = objPricingIncluded.pricingItemFirst.eq( $t.index() ).text();
                
                $t.prepend( '<strong class="hidden-md hidden-lg">' + value + '</strong>' );
            });
        }
        
        /* -------------------------------------------------------------------------*
         * PRICING TABLE AREA
         * -------------------------------------------------------------------------*/
        var $pricingTable = $('.PricingTable'),
            $pricingTableHeadings = $pricingTable.find('thead th');
        
        if ( $pricingTable.length ) {
            $pricingTable.find('tbody td').each(function () {
                var $t = $(this),
                    value = $pricingTableHeadings.eq( $t.index() ).text();
                
                $t.append( '<strong class="hidden-md hidden-lg">' + value + '</strong>' );
            });
        }
        
        /* ------------------------------------------------------------------------- *
         * VPS PRICING AREA
         * ------------------------------------------------------------------------- */
        var $vpsPricing = $('#vpsPricing'),
            vpsPricingObj = {};
        
        vpsPricingObj.$slider = $vpsPricing.find('#vpsPricingSlider');
        vpsPricingObj.$putValue = $vpsPricing.find('[data-put-value]');
        vpsPricingObj.$putHref = $vpsPricing.find('[data-put-href]');
            
        vpsPricingObj.slider = function (res) {
            vpsPricingObj.slider.value = 1;
            vpsPricingObj.slider.max = res.length - 1;
            
            vpsPricingObj.slider.changeValue = function (e, ui) {
                vpsPricingObj.slider.value = $.isEmptyObject( ui ) ? vpsPricingObj.slider.value : ui.value;
                
                vpsPricingObj.$slider.find('.ui-slider-handle').html( '<div class="pricing--content"><div class="pricing--header bg-color--black"><h3 class="h4">' + res[ vpsPricingObj.slider.value ].title + '</h3><h4 class="h5">Starting At<strong>' + res[ vpsPricingObj.slider.value ].price + '</strong></h4></div><div class="pricing--icon"><i class="fa ' + res[ vpsPricingObj.slider.value ].icon + '"></i></div></div>' );
                
                vpsPricingObj.$putValue.each(function () {
                    var $t = $(this);
                    
                    $t.text( res[ vpsPricingObj.slider.value ][ $t.data('put-value') ] );
                });

                vpsPricingObj.$putHref.attr('href', res[ vpsPricingObj.slider.value ][ vpsPricingObj.$putHref.data('put-href') ] );
            };
            
            vpsPricingObj.$slider.slider({
                animate: 'fast',
                range: 'min',
                min: 0,
                max: vpsPricingObj.slider.max,
                value: vpsPricingObj.slider.value,
                step: 1,
                create: vpsPricingObj.slider.changeValue,
                slide: vpsPricingObj.slider.changeValue
            });
        };
        
        if ( $vpsPricing.length ) {
            $.getJSON('json/vps-plans.json', vpsPricingObj.slider)
                .done(function () {
                    vpsPricingObj.$items = $vpsPricing.find('.vps-pricing--items');
                    vpsPricingObj.$tag = $vpsPricing.find('.vps-pricing--tag');
                    
                    vpsPricingObj.$tag.css( 'height', vpsPricingObj.$items.height() );
                    
                    $wn.on('resize', function () {
                        vpsPricingObj.$tag.css( 'height', vpsPricingObj.$items.height() ); 
                    });
                });
        }
        
        /* ------------------------------------------------------------------------- *
         * DATACENTER AREA
         * ------------------------------------------------------------------------- */
        var $datacenterSlider = $('.datacenter--slider');
        
        $datacenterSlider.on('changed.owl.carousel', function (e) {
            $datacenterSlider.find('.owl-item').eq( e.item.index ).children('a').tab('show');
        });
        
        /* -------------------------------------------------------------------------*
         * MAP
         * -------------------------------------------------------------------------*/
        var $map = $('#map'),
            mapHeight = $('#contactInfo').outerHeight() > 400 ? $('#contactInfo').outerHeight() + 60 : 400,
            setMap = function () {
                var map = new google.maps.Map($map[0], {
                    center: {lat: $map.data('map-latitude'), lng: $map.data('map-longitude')},
                    zoom: $map.data('map-zoom'),
                    scrollwheel: false,
                    disableDefaultUI: true,
                    zoomControl: true,
                    styles: [{"featureType":"all","elementType":"geometry.fill","stylers":[{"weight":"2.00"}]},{"featureType":"all","elementType":"geometry.stroke","stylers":[{"color":"#9c9c9c"}]},{"featureType":"all","elementType":"labels.text","stylers":[{"visibility":"on"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"landscape","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"landscape.man_made","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"color":"#eeeeee"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#7b7b7b"}]},{"featureType":"road","elementType":"labels.text.stroke","stylers":[{"color":"#ffffff"}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#46bcec"},{"visibility":"on"}]},{"featureType":"water","elementType":"geometry.fill","stylers":[{"color":"#c8d7d4"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"color":"#070707"}]},{"featureType":"water","elementType":"labels.text.stroke","stylers":[{"color":"#ffffff"}]}]
                });
                
                if ( typeof $map.data('map-marker') !== 'undefined' ) {
                    var data = $map.data('map-marker'),
                        i = 0;

                    for ( i; i < data.length; i++ ) {
                        new google.maps.Marker({
                            position: {lat: data[i][0], lng: data[i][1]},
                            map: map,
                            animation: google.maps.Animation.DROP,
                            draggable: true
                        });
                    }
                }
            };
        
        if ( $map.length ) {
            $map
                .css('height', mapHeight)
                .next('#contactInfo').css( 'margin-top', -($('#contactInfo').outerHeight()) )
                .prev('#map').css('z-index', -1);
            
            setMap();
        }
        
        /* -------------------------------------------------------------------------*
         * CONTACT AREA
         * -------------------------------------------------------------------------*/
        var $contactForm = $('.contact--form'),
            $contactMap = $('.contact--map'),
            $contactStatus = $('.contact--status'),
            setContactMapHeight = function () {
                $contactMap.children('#map').css( 'height', $contactForm.outerHeight() );
            },
            contactFormAjax = function (el) {
                var $el = $(el),
                    formURL = $el.attr('action'),
                    formData = $el.serialize();
                    
                $.post(formURL, formData, function (res) {
                    $contactStatus.show().html(res).delay(3000).fadeOut('show');
                });
            };
        
        if ( $contactForm.length ) {
            setContactMapHeight();
            
            $contactForm.find('form').validate({
                errorPlacement: function () {
                    return true;
                },
                submitHandler: contactFormAjax
            });
        }
        
        /* -------------------------------------------------------------------------*
         * CONTACT INFO AREA
         * -------------------------------------------------------------------------*/
        var $contactInfo = $('#contactInfo'),
            $contactInfoItem = $contactInfo.find('.contact-info--item'),
            contactInfoItemH = 0;

        if ( $contactInfoItem.length ) {
            $contactInfoItem.each(function (i) {
                var $t = $(this);

                contactInfoItemH = $t.outerHeight() > contactInfoItemH ? $t.outerHeight() : contactInfoItemH;

                if ( $contactInfoItem.length === (i + 1) ) {
                    $contactInfoItem.css('height', contactInfoItemH);
                }
            });
        }
        
        /* ------------------------------------------------------------------------- *
         * PRODUCT SINGLE IMAGE
         * ------------------------------------------------------------------------- */
        var $prodcutSingleImg = $('.product--single-img');
        
        $prodcutSingleImg.on('click', '.owl-item a', function () {
            $(this).addClass('active').parent('.owl-item').siblings().children('a').removeClass('active');
        });
        
        /* ------------------------------------------------------------------------- *
         * PRODUCT QUANTITY
         * ------------------------------------------------------------------------- */
        var $productQuantity = $('.product--quantity'),
            $productQuantityInput = $productQuantity.children('input'),
            productQuantityMin = parseInt( $productQuantityInput.data('min'), 10 ),
            productQuantityMax = parseInt( $productQuantityInput.data('max'), 10 );
        
        $productQuantity
            .on('click', '[data-up]', function () {
                var $t = $(this),
                    value = parseInt( $productQuantityInput.val(), 10 ) + $t.data('up');
                
                if ( value <= productQuantityMax ) {
                    $productQuantityInput.val( value );
                }
            })
            .on('click', '[data-down]', function () {
                var $t = $(this),
                    value = parseInt( $productQuantityInput.val(), 10 ) - $t.data('down');
                
                if ( value >= productQuantityMin ) {
                    $productQuantityInput.val( value );
                }
            });
        
        /* ------------------------------------------------------------------------- *
         * PRODUCT RATING
         * ------------------------------------------------------------------------- */
        var $productRatingSelect = $('#productRatingSelect');
        
        if ( $productRatingSelect.length ) {
            $productRatingSelect.barrating({
                theme: 'bootstrap-stars',
                hoverState: false
            });
        }
        
        /* ------------------------------------------------------------------------- *
         * COMING SOON SLIDER
         * ------------------------------------------------------------------------- */
        var $comingSoonSlider = $('.coming-soon--slider');
        
        if ( $comingSoonSlider.length ) {
            $comingSoonSlider
                .css( 'height', $('.coming-soon--content').outerHeight() )
                .trigger('refresh.owl.carousel');
        }

        /* ------------------------------------------------------------------------- *
         * COLOR SWITCHER
         * ------------------------------------------------------------------------- */
        if ( typeof $.cColorSwitcher !== "undefined" ) {
            $.cColorSwitcher({
                'switcherTitle': 'Main Colors:',
                'switcherColors': [{
                    bgColor: '#119ee6',
                    filepath: 'css/colors/theme-color-1.css'
                }, {
                    bgColor: '#8bc34a',
                    filepath: 'css/colors/theme-color-2.css'
                }, {
                    bgColor: '#ff5252',
                    filepath: 'css/colors/theme-color-3.css'
                }, {
                    bgColor: '#ff9600',
                    filepath: 'css/colors/theme-color-4.css'
                }, {
                    bgColor: '#e91e63',
                    filepath: 'css/colors/theme-color-5.css'
                }, {
                    bgColor: '#00BCD4',
                    filepath: 'css/colors/theme-color-6.css'
                }, {
                    bgColor: '#FC5143',
                    filepath: 'css/colors/theme-color-7.css'
                }, {
                    bgColor: '#00B249',
                    filepath: 'css/colors/theme-color-8.css'
                }, {
                    bgColor: '#D48B91',
                    filepath: 'css/colors/theme-color-9.css'
                }, {
                    bgColor: '#8CBEB2',
                    filepath: 'css/colors/theme-color-10.css'
                }],
                'switcherTarget': $('#changeColorScheme')
            });
        }
    });
    
    $wn.on('load', function () {
        /* ------------------------------------------------------------------------- *
         * BODY SCROLLING
         * ------------------------------------------------------------------------- */
        var isBodyScrolling = function () {
            if ( $wn.scrollTop() > 1 ) {
                $body.addClass('isScrolling');
            } else {
                $body.removeClass('isScrolling');
            }
        };
        
        isBodyScrolling();
        $wn.on('scroll', isBodyScrolling);
        
        /* ------------------------------------------------------------------------- *
         * ADJUST ROW
         * ------------------------------------------------------------------------- */
        var $adjustRow = $('.AdjustRow');
        
        if ( $adjustRow.length ) {
            $adjustRow.isotope({layoutMode: 'fitRows'});
        }
        
        /* ------------------------------------------------------------------------- *
         * MASONRY ROW
         * ------------------------------------------------------------------------- */
        var $masonryRow = $('.MasonryRow');
        
        if ( $masonryRow.length ) {
            $masonryRow.isotope();
        }
        
        /* ------------------------------------------------------------------------- *
         * FEATURES GRID AREA
         * ------------------------------------------------------------------------- */
        var $featuresGridLeft = $('.features-grid--left'),
            $featuresGridRight = $('.features-grid--right'),
            featuresGridRightChildH = 0,
            featuresGridRightChildren = function () {
                $featuresGridRight.find('.features-grid--item').each(function (i) {
                    var $t = $(this);
                    
                    featuresGridRightChildH = $t.outerHeight() > featuresGridRightChildH ? $t.outerHeight() : featuresGridRightChildH;
                    
                    $featuresGridRight.children('.row').children('div').css('height', featuresGridRightChildH);
                    
                    if ( i === ($featuresGridRight.length - 1) ) {
                        $featuresGridLeft.css( 'height', $featuresGridRight.outerHeight() );
                    }
                });
            };
            
        featuresGridRightChildren();
        $wn.on('resize', featuresGridRightChildren);
        
        /* ------------------------------------------------------------------------- *
         * GALLERY AREA
         * ------------------------------------------------------------------------- */
        var $galleryItems = $('.gallery--items'),
            galleryItem = '.gallery--item',
            $galleryFilter = $('.gallery--filter');
        
        if ( $galleryItems.length ) {
            $galleryItems.isotope({
                animationEngine: 'best-available',
                itemSelector: galleryItem
            });
            
            $galleryFilter.on('click', 'li', function () {
                var $t = $(this),
                    f = $t.data('target'),
                    s = (f !== '*') ? '[data-cat~="'+ f +'"]' : f;
                
                $galleryItems.isotope({
                    filter: s
                });
                
                $t.addClass('active').siblings().removeClass('active');
            });
        }
        
        /* ------------------------------------------------------------------------- *
         * PRELOADER
         * ------------------------------------------------------------------------- */
        var $preloader = $('#preloader');
        
        if ( $preloader.length ) {
            $preloader.fadeOut();
        }
        
        
        
        /* ------------------------------------------------------------------------- *
         * Custom
         * ------------------------------------------------------------------------- */
        
        /*
        var $servicesTabNav = $('.services-tab--nav');
        
        $servicesTabNav
                .find('li.active [title]')
                .end()
                .on('shown.bs.tab', function (e) {
                    var title = $(e.target).data('caption');
                    document.getElementById("tab_text").innerHTML = title;
                    
                });        
        */
        var previous_title = "";
        
        $("#tab01").hover(function(e){
            var title = $(e.target).data('caption');
			if(title){
				document.getElementById("tab_text").innerHTML = title;
				previous_title = title;
			}
		});
        $("#tab02").hover(function(e){
            var title = $(e.target).data('caption');
			if(title){
				document.getElementById("tab_text").innerHTML = title;
				previous_title = title;
			}
            
        });
        $("#tab03").hover(function(e){
            var title = $(e.target).data('caption');
			if(title){
				document.getElementById("tab_text").innerHTML = title;
				previous_title = title;
			}
            
        });
        $("#tab04").hover(function(e){
            var title = $(e.target).data('caption');
			if(title){
				document.getElementById("tab_text").innerHTML = title;
				previous_title = title;
            }
			
        });  
        
        /* ---------------------------- */
        
        $("#headbar_domain").keypress(function(e){
            var domain = document.getElementById("headbar_domain").value;
            document.getElementById("domain01").value = domain;
            document.getElementById("domain02").value = domain;
            if (e.keyCode == 13){
                $('html, body').animate({
                    scrollTop: $("#servicesTab").offset().top
                }, 750);
            }
        });
        
    
        
        /*---------------------------*/
        
        
        $("#partner_signup").click(function(){
            $("#partners_form").animate({
                height: "toggle"
            });
        });
               
		setInterval(function(){ 
			$('#freeTrialButton').addClass('hvr-buzz-out-active');  
			   setTimeout(function(){
				 // toggle back after 1 second
				 $('#freeTrialButton').removeClass('hvr-buzz-out-active');   
			   },5000);
			$('#freeTrialHeaderButton').addClass('hvr-buzz-out-active');  
			   setTimeout(function(){
				 // toggle back after 1 second
				 $('#freeTrialHeaderButton').removeClass('hvr-buzz-out-active');   
			   },5000);   
        },10000);
    });
    
})(jQuery);
