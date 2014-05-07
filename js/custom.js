$(document).ready(function () {

  
 var urlmenu = document.getElementById( 'menu1' );
 urlmenu.onchange = function() {
        window.open(location,'_self'); 
	
 };

if(navigator.userAgent.match(/Trident.*rv:11\./)) {
    $('body').addClass('ie11');
}

    /* ---------------------------------------------------------------------- */

    /*	tabs-list block

    /* ---------------------------------------------------------------------- */

    var explore = $("#tabs-list > div ");
    explore.easytabs({
        animate: true,
        updateHash: true,
        transitionIn: 'slideDown',
        transitionOut: 'slideUp',
        animationSpeed: speed,
        tabActiveClass: 'active'
    })
        .end()
        .on('easytabs:after', function (e) {
            var $ref = $map.data('gMap.reference');
            google.maps.event.trigger($ref, 'resize');
            $ref.setCenter(gLocation);
        });
    var profile = $("#profile");
    var profilescrollcontainer = profile.find(".scroll-container");
    var profileexternalscrolly = profile.find(".external-scroll_y");

    var cv = $("#cv");
    var cvscrollcontainer = cv.find(".scroll-container");
    var cvexternalscrolly = cv.find(".external-scroll_y");

    cvscrollcontainer.scrollbar({
        autoScrollSize: true,
        scrolly: countryexternalscrolly
    });

    var contacts = $("#contacts");
    var contactsscrollcontainer = contacts.find(".scroll-container");
    var contactsexternalscrolly = contacts.find(".external-scroll_y");



    /**************************************************/
    /* Hde menu and simple search*/
    /**************************************************/
    $('.menu-hider').click(function () {
        if ($('.menu-hider').hasClass('closed')) {
            $('.menu-hider').removeClass('closed');
            $('#navigation').slideDown(400);
			$('.reponsive-nav').slideDown(400);
	        $('#search').slideDown(400);
            $('#header').height(140); /*.css('borderBottom','none');*/
        } else {
            $('.menu-hider').addClass('closed');
            $('#navigation').slideUp(400);
			$('.reponsive-nav').slideUp(400);
		    $('#search').slideUp(400);
            $('#header').height(60); /*.css('borderBottom','2px solid #E5E5E5');*/
        }
    });

    if ($(window).width() < 485) {
        if ($('.menu-hider').hasClass('closed'))
            return;
        else {
            $('.menu-hider').addClass('closed');
            $('#navigation').slideUp(400);
			$('.reponsive-nav').slideUp(400);
            $('#search').slideUp(400);
            $('#header').height(60);
            /*$('#header.hider').css('borderBottom','2px solid #E5E5E5');*/
        };
    };

    /* ---------------------------------------------------------------------- */
    /*  Responsive Menu
    /* ---------------------------------------------------------------------- */
    /*$(function(){
		$("ul#navigation").menutron({
		  maxScreenWidth: 480,
		  menuTitle: 'Main Menu:'
		});
	  });*/

    /* ---------------------------------------------------------------------- */
    /*	Partners Hover effect
    /* ---------------------------------------------------------------------- */
    jQuery(".partner").hover(function () {
        jQuery(this).find('.partner-hover').animate({
            opacity: 1
        }, 150);
        jQuery(this).find('.part-img').animate({
            opacity: 0
        }, 150);
    }, function () {
        jQuery(this).find('.part-img').animate({
            opacity: 1
        }, 150);
        jQuery(this).find('.partner-hover').animate({
            opacity: 0
        }, 150);
    })
    /* ---------------------------------------------------------------------- */
    /*	Global
    /* ---------------------------------------------------------------------- */
    var speed = 500;

    /*	Images centration */
    centeringImages();

    /* Go Top Scroll Buttom */
    var e = $(".scrollTop");
    var windowheight = 300;

    e.click(function () {
        $("html:not(:animated)" + (!$.browser.opera ? ",body:not(:animated)" : "")).animate({
            scrollTop: 0
        }, speed);
        return false;
    });

    function show_scrollTop() {
        ($(window).scrollTop() > windowheight) ? e.fadeIn(speed) : e.fadeOut(speed);
    }

    $(window).scroll(function () {
        show_scrollTop()
    });
    show_scrollTop();

    /* Scroll Menu Fix */
    var bar = $("#bar");
    var body = $('body');
    var header = $('#header');
    var barheight = bar.height() + 2;

    function show_bar() {
        if ($(window).scrollTop() < barheight) {
            bar.show();
            body.css('margin-top', '0');
            header.attr('class', '');
        } else {
            bar.hide();
            body.css('margin-top', '94px');
            header.attr('class', 'scroll');
        }
    }
    $(window).scroll(function () {
        show_bar()
    });
    show_bar();

    /* ---------------------------------------------------------------------- */
    /*	Menu Major
    /* ---------------------------------------------------------------------- */

    /*	Submenu show/hide */
    var container = $('#navigation li.expanded');

    container.find('ul.submenu').hide();

    container.hover(function () {
            $(this).find('ul').slideDown(speed);
        },
        function () {
            $(this).find('ul').hide();
        });

    /*	Submenu show menu down arrow */
    var acontainer = $('#navigation li.expanded > a');

    acontainer.each(function () {
        $(this).html($(this).html() + '<span class="dropdown"></span>');
    });
    /* ---------------------------------------------------------------------- */
    /*	Content Height
    /* ---------------------------------------------------------------------- */
    var contentwithout = 0;

    if ($('#bar').height()) {
        contentwithout = contentwithout + $('#bar').height() + 2
    }
    if ($('#header').height()) {
        contentwithout = contentwithout + $('#header').height() + 2;
    }
    if ($('#search').height()) {
        contentwithout = contentwithout + $('#search').height() + 2;
    }
    if ($('#footer').height()) {
        contentwithout = contentwithout + $('#footer').height() + 2;
    }
    if ($('#copyright').height()) {
        contentwithout = contentwithout + $('#copyright').height() + 2;
    }
    contentwithout = contentwithout + 20; /* I don't know for what it, but it is very important fix. ;) */

    $('div#content').css('min-height', $(window).height() - contentwithout);
    /* ---------------------------------------------------------------------- */
    /*	Search Form
    /* ---------------------------------------------------------------------- */
    $('div#options').css('display', 'none');

    $('div#more-options').click(function () {
        $(this).hide();
        $('div#options').slideDown(speed);
    });
    /* ---------------------------------------------------------------------- */
    /*	Login Form
    /* ---------------------------------------------------------------------- */
    /*	Show/Hide Form */
    var login1form = $('#login-panel div.left div.first');
    var login2form = $('#login-panel div.right div.first');
    var login1buttom = $('#find-job-buttom');
    var login2buttom = $('#post-job-buttom');

    login1buttom.click(function () {
        login1form.find('.counter').fadeOut(speed / 5);
        login2form.slideDown(speed);
        login1form.slideUp(speed);
        login2form.find('.badge').fadeIn(speed * 2.5);
    });

    login2buttom.click(function () {
        login2form.find('.badge').fadeOut(speed / 5);
        login1form.slideDown(speed);
        login2form.slideUp(speed);
        login1form.find('.counter').fadeIn(speed * 2.5);
    });

    /* ---------------------------------------------------------------------- */
    /*	Input Customize
    /* ---------------------------------------------------------------------- */
    $(".select").combosex({
        classCombo: 'select',
        classOptions: 'select-options'
    });

    $(".textfield").each(function () {
        var placeholder = $(this).attr('placeholder');
        $(this).combosex({
            classCombo: 'textfield',
            placeholder: placeholder
        })
    });

    $(".textfield-with-callback").each(function () {
        var placeholder = $(this).attr('placeholder');
        $(this).combosex({
            classCombo: 'textfield',
            classOptions: 'textfield-options',
            delay: 222,
            placeholder: placeholder,
            suggest: function (hash, ex) {
                this.xhr = $.getJSON("http://suggest.yandex.ru/suggest-ya.cgi?callback=?", {
                    lr: 213,
                    v: 3,
                    part: ex.str
                }, function (data) {
                    var res = [];
                    for (var i in data[1]) {
                        if (data[1][i][0] != "nav") {
                            res.push({
                                val: data[1][i],
                                text: data[1][i]
                            });
                        }
                    }
                    ex.results(res);
                });
            }
        });
    });
    /* ---------------------------------------------------------------------- */
    /*	Google Map on Homepages
     /* ---------------------------------------------------------------------- */

    var homepageMap = $('#centerMap');

    homepageMap.gMap({
        address: 'Paris, France',
        zoom: 1,
        scaleControl: true,
        scrollwheel: false
    });
    /* ---------------------------------------------------------------------- */
    /*	Sliders
    /* ---------------------------------------------------------------------- */
    $('.dott-flexslider').flexslider({
        animation: "slide",
        directionNav: false,
        keyboardNav: false
    });

    $('.butt-flexslider').flexslider({
        animation: "slide",
        controlNav: false,
        prevText: "",
        nextText: ""
    });

    $('.header-flexslider').flexslider({
        animation: "slide",
        controlNav: false,
        prevText: "",
        nextText: ""
    });

    /* ---------------------------------------------------------------------- */
    /*	Google Map in contact's
    /* ---------------------------------------------------------------------- */
    var $map = $('#contact-map');
    var $address1 = $("#first-address").html();
    var $address2 = $("#second-address").html();

    $map.gMap({
        address: $address1,
        zoom: 10,
        scaleControl: true,
        scrollwheel: false,
        markers: [{
            address: $address1,
            html: $address1,
            icon: {
                image: "images/map-marker.png",
                iconsize: [36, 42],
                iconanchor: [18, 42]
            }
        }, {
            address: $address2,
            html: $address2,
            icon: {
                image: "images/map-marker.png",
                iconsize: [36, 42],
                iconanchor: [18, 42]
            }
        }]
    });
    /* ---------------------------------------------------------------------- */
    /*	Explore block
    /* ---------------------------------------------------------------------- */
    var explore = $("#explore > div ");

    explore.easytabs({
        animate: true,
        updateHash: false,
        transitionIn: 'slideDown',
        transitionOut: 'slideUp',
        animationSpeed: speed,
        tabActiveClass: 'active'
    });

    var industry = $("#industry");
    var industryscrollcontainer = industry.find(".scroll-container");
    var industryexternalscrolly = industry.find(".external-scroll_y");

    industryscrollcontainer.scrollbar({
        autoScrollSize: true,
        scrolly: industryexternalscrolly
    });

    var country = $("#country");
    var countryscrollcontainer = country.find(".scroll-container");
    var countryexternalscrolly = country.find(".external-scroll_y");

    countryscrollcontainer.scrollbar({
        autoScrollSize: true,
        scrolly: countryexternalscrolly
    });

    var type = $("#type");
    var typescrollcontainer = type.find(".scroll-container");
    var typeexternalscrolly = type.find(".external-scroll_y");

    typescrollcontainer.scrollbar({
        autoScrollSize: true,
        scrolly: typeexternalscrolly
    });
    /* ---------------------------------------------------------------------- */
    /*	Job page search Filtering
    /* ---------------------------------------------------------------------- */
    var filterfield = $("div.filter-content");
    var filterbutton = $("div.show-hide-button");
    var filtercontent = $("div.filter-container");

    filterfield.each(function () {
        if ($(this).hasClass('hide')) {
            $(this).find(filtercontent).css('display', 'none');
        } else if ($(this).hasClass('show')) {
            $(this).find(filtercontent).css('display', 'block');
        }
    });

    filterfield.find(filterbutton).click(function () {
        if ($(this).parent(filterfield).hasClass('hide')) {
            $(this).parent(filterfield).removeClass('hide').addClass('show');
            $(this).parent(filterfield).find(filtercontent).slideDown(speed);
        } else if ($(this).parent(filterfield).hasClass('show')) {
            $(this).parent(filterfield).removeClass('show').addClass('hide');
            $(this).parent(filterfield).find(filtercontent).slideUp(speed);
        }
    });

    filterfield.find("ul > li.expanded").each(function () {
        $(this).find("> ul").css('display', 'none');
        $(this).find("> a").addClass('noactive');
        $(this).find("> a").click(function () {
            if ($(this).hasClass('active')) {
                $(this).removeClass('active').addClass('noactive');
                $(this).next("ul").slideUp(speed);
            } else if ($(this).hasClass('noactive')) {
                $(this).removeClass('noactive').addClass('active');
                $(this).next("ul").slideDown(speed);
            }
        });
    });

    var minorfield = $("div.filter-content").find("div.minor");
    var minorbutton = $("div.minor-label");

    minorfield.each(function () {
        if ($(this).hasClass('hide')) {
            $(this).find("ul").css('display', 'none');
        } else if ($(this).hasClass('show')) {
            $(this).find("ul").css('display', 'block');
        }
    });

    minorfield.find(minorbutton).click(function () {
        if ($(this).parent(minorfield).hasClass('hide')) {
            $(this).parent(minorfield).removeClass('hide').addClass('show');
            $(this).parent(minorfield).find("ul").slideDown(speed);
        } else if ($(this).parent(minorfield).hasClass('show')) {
            $(this).parent(minorfield).removeClass('show').addClass('hide');
            $(this).parent(minorfield).find("ul").slideUp(speed);
        }
    });

    var daybarcontainer = $(".dayprogressbar-mover");
    var daybegin = daybarcontainer.find(".begin").find(".count").html();
    var dayend = daybarcontainer.find(".end").find(".count").html();

    daybarcontainer.find(".end").find(".count").html(dayend / 2);

    daybarcontainer.find(".bar").slider({
        range: true,
        min: daybegin,
        max: dayend,
        step: 1,
        values: [daybegin, dayend / 2],
        slide: function (event, ui) {
            daybarcontainer.find(".begin").find(".count").html(ui.values[0]);
            daybarcontainer.find(".end").find(".count").html(ui.values[1]);
        }
    });

    $(".ui-slider-handle:last").addClass("right");

    var rangebarcontainer = $(".rangeprogressbar-mover");
    var rangebegin = Number(rangebarcontainer.find(".begin").find(".count").attr('count'));
    var rangeend = Number(rangebarcontainer.find(".end").find(".count").attr('count'));

    rangebarcontainer.find(".begin").find(".count").attr('value', '$' + String(rangebegin).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '));
    rangebarcontainer.find(".end").find(".count").attr('value', '$' + String(rangeend * 0.8).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '));

    rangebarcontainer.find(".bar").slider({
        range: true,
        min: 0,
        max: 100000,
        step: 50,
        values: [500, 50000],
        slide: function (event, ui) {
            rangebarcontainer.find(".begin").find(".count").attr('value', '$' + String(ui.values[0]).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')).attr('count', ui.values[0]);
            rangebarcontainer.find(".end").find(".count").attr('value', '$' + String(ui.values[1]).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')).attr('count', ui.values[1]);
        }
    });

    /* ---------------------------------------------------------------------- */
    /*	Google Map on job page
    /* ---------------------------------------------------------------------- */
    var mapcontainer = $("#map-container");
    var showbutton = mapcontainer.find(".show-map-button");
    var hidebutton = mapcontainer.find(".hide-map-button");
    var mapincontainer = mapcontainer.find(".map");
    var mapheight = mapincontainer.css('height');

    showbutton.css('display', 'none');
    hidebutton.css('display', 'block');

    hidebutton.click(function () {
        mapincontainer.animate({
            height: '44px'
        });
        hidebutton.fadeOut(speed);
        showbutton.fadeIn(speed);
    });

    showbutton.click(function () {
        mapincontainer.animate({
            height: mapheight
        });
        showbutton.fadeOut(speed);
        hidebutton.fadeIn(speed);
    });

    var marker1 = mapcontainer.find(".marker1").html(),
        marker2 = mapcontainer.find(".marker2").html(),
        marker3 = mapcontainer.find(".marker3").html(),
        marker4 = mapcontainer.find(".marker4").html(),
        marker5 = mapcontainer.find(".marker5").html(),
        marker6 = mapcontainer.find(".marker6").html(),
        marker7 = mapcontainer.find(".marker7").html(),
        marker8 = mapcontainer.find(".marker8").html(),
        marker9 = mapcontainer.find(".marker9").html(),
        marker10 = mapcontainer.find(".marker10").html();

    var $jobmap = $("#job-page-map");
    var $jobmap2 = $("#one-job-page-map");

    $jobmap.gMap({
        address: marker1,
        zoom: 10,
        scaleControl: true,
        scrollwheel: false,
        markers: [{
            address: marker1,
            html: marker1,
            icon: {
                image: "images/map-marker.png",
                iconsize: [36, 42],
                iconanchor: [18, 42]
            }
        }, {
            address: marker2,
            html: marker2,
            icon: {
                image: "images/map-marker.png",
                iconsize: [36, 42],
                iconanchor: [18, 42]
            }
        }, {
            address: marker3,
            html: marker3,
            icon: {
                image: "images/map-marker.png",
                iconsize: [36, 42],
                iconanchor: [18, 42]
            }
        }, {
            address: marker4,
            html: marker4,
            icon: {
                image: "images/map-marker.png",
                iconsize: [36, 42],
                iconanchor: [18, 42]
            }
        }, {
            address: marker5,
            html: marker5,
            icon: {
                image: "images/map-marker.png",
                iconsize: [36, 42],
                iconanchor: [18, 42]
            }
        }, {
            address: marker6,
            html: marker6,
            icon: {
                image: "images/map-marker.png",
                iconsize: [36, 42],
                iconanchor: [18, 42]
            }
        }, {
            address: marker7,
            html: marker7,
            icon: {
                image: "images/map-marker.png",
                iconsize: [36, 42],
                iconanchor: [18, 42]
            }
        }, {
            address: marker8,
            html: marker8,
            icon: {
                image: "images/map-marker.png",
                iconsize: [36, 42],
                iconanchor: [18, 42]
            }
        }, {
            address: marker9,
            html: marker9,
            icon: {
                image: "images/map-marker.png",
                iconsize: [36, 42],
                iconanchor: [18, 42]
            }
        }, {
            address: marker10,
            html: marker10,
            icon: {
                image: "images/map-marker.png",
                iconsize: [36, 42],
                iconanchor: [18, 42]
            }
        }]
    });
    $jobmap2.gMap({
        address: marker1,
        zoom: 10,
        scaleControl: true,
        scrollwheel: false
    })


    /*----------------------------------------------*/
    /* Function for change viewmode
	/*----------------------------------------------*/
    $('.mode').live('click', function () {
        var self = $(this);
        var mode = $(this).children().attr('class');
        $('.view_mode').fadeOut(500);
        $('.mode').removeClass('active');
        $('.view_mode[id=' + mode + ']').delay(502).fadeIn(500);
        self.addClass('active');
    })

    /* ---------------------------------------------------------------------- */
    /*	Job Page Fields
    /* ---------------------------------------------------------------------- */
    var jobcontentfields = $("#job-content-fields");

    jobcontentfields.find(".nav-buttons .show-hide").addClass('hide');
    jobcontentfields.each(function () {
        progressbaranimation();
    })

    jobcontentfields.each(function () {
        $(this).find(".body-field").find(".full-body").css('display', 'none');
        $(this).find(".block-fields").css('display', 'none');
        $(this).find(".buttons-field").css('display', 'none');
    });

    jobcontentfields.find(".field-container").addClass('hide');

    $(".roll-with-description.hide").each(function () {
        $(this).each(function () {
            $(this).find(".description").css('display', 'none')
        })
    });

    $(".roll-with-description.show").each(function () {
        $(this).each(function () {
            $(this).find(".description").css('display', 'block')
        })
    });

    var textcontainer = jobcontentfields.find(".body-field");

    textcontainer.each(function () {
        $(this).find(".read-more").click(function () {
            $(this).parent("p").parent(".teaser").parent(".body-field").find(".full-body").slideDown(speed);
            $(this).fadeOut(speed);
        });
    });



    var viewfullbutton = jobcontentfields.find(".show-hide");

    function progressbaranimation() {
        $(".progressbar > span").each(function () {
            var bar = $(this);
            var level = $(this).attr('data-level');
            bar.width(0);
            bar.animate({
                width: level + '%'
            }, speed * 1.5);
        });
    }
    progressbaranimation();


    viewfullbutton.each(function () {
        $(this).click(function () {
            if ($(this).hasClass('hide')) {
                $(this).removeClass('hide').addClass('show');
                var parentelement = $(this).parent("ul").parent(".nav-buttons").parent(".field-container");
                parentelement.removeClass('hide').addClass('show');
                parentelement.find(".block-fields").slideDown(speed);
                parentelement.find(".buttons-field").slideDown(speed);
                parentelement.find(".full-body").slideDown(speed);
                parentelement.find(".social_media_icons.job").slideDown(speed);
                parentelement.find("span.read-more").slideUp(speed);
                progressbaranimation();
            } else if ($(this).hasClass('show')) {
                $(this).removeClass('show').addClass('hide');
                var parentelement = $(this).parent("ul").parent(".nav-buttons").parent(".field-container");
                parentelement.removeClass('show').addClass('hide');
                parentelement.find(".block-fields").slideUp(speed);
                parentelement.find(".buttons-field").slideUp(speed);
                parentelement.find(".full-body").slideUp(speed);
                parentelement.find(".social_media_icons.job").slideUp(speed);
                parentelement.find("span.read-more").slideDown(speed);
            }
        });
    });



    $(".roll-with-description").each(function () {
        $(this).click(function () {
            if ($(this).hasClass("show")) {
                $(this).removeClass("show").addClass("hide");
                $(this).find(".description").slideUp(speed);
            } else if ($(this).hasClass("hide")) {
                $(this).removeClass("hide").addClass("show");
                $(this).find(".description").slideDown(speed);
            }
        });
    });

    resizeIframe();
});
$(window).resize(function () {
    resizeIframe();
    centeringImages();
});
/*
 * function for resizing iframe
 * */
function resizeIframe() {
    var size = parseInt($('.content-center.border').css('width'));
    $('.content-center.border').find('iframe').attr('width', size);
}

function centeringImages() {
    /*	Images centration */
    $('.centering:has(img)').each(function () {
        var divwidth = $(this).width();
        var divheight = $(this).height();
        var imgwidth = $(this).find('img').width();
        var imgheight = $(this).find('img').height();

        $(this).find('img').css('margin-left', (divwidth - imgwidth) / 2).css('margin-top', (divheight - imgheight) / 2);
    });
}
/*
 * function for story block
 * */
$('.user-avatar a').live('mouseenter', function () {
    if ($(window).width() < 480) {
        return;
    }
    $('.effect').show();
    $(this).find('.effect').hide();
    showStory($(this).index());
})

function showStory(index) {
    var ind = 70;
    var first = 114;
    var index = index;
    $('.story_block').css('top', 185);
    if ($(window).width() < 960) {
        var indy = index;
        if (indy > 10) {
            $('.story_block').css('top', 302);
            index = Math.abs(3 - index);
        }

    }
    $('.story_block .before').css('left', first + ind * index + 20);
    $('.story_block').show();
}
$('.user-avatar a').live('mouseleave', function () {
    $('.effect,.story_block').hide();
})
$('.story_block').live('mouseenter', function () {
    $('.story_block').show();
})




function setEqualHeight(columns) {
    var tallestcolumn = 0;
    columns.each(

        function () {
            currentHeight = $(this).height();
            if (currentHeight > tallestcolumn) {
                tallestcolumn = currentHeight;
            }
        }
    );
    columns.height(tallestcolumn);
};

$(document).ready(function () {
    /* setEqualHeight($("#equal-height1,#equal-height2"));*/
    if ($(document).width() > 763) setEqualHeight($("#documents,#equal-height1,#equal-height2"));
    else
        return;

    /*----------------------------------------------*/
    /* Function when window resized
/*----------------------------------------------*/
    /*if($(window).width()<480){return;}
	$(window).resize(function(){
		centeringImages();
		if ($(window).width() > 763) 
		 setEqualHeight($("#documents,#equal-height1,#equal-height2"));
	});	*/
});




/*$(".video-container").fitVids();*/