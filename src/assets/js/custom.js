// import "bootstrap/dist/css/bootstrap.min.css"

import $ from 'jquery'

$(document).ready(function() {

    $(window).load(function() {
        $(".loader").fadeOut();
        
       setTimeout(function() { 
            if(!$('body').hasClass('close-pop')){
            $('.popup-layer').addClass('active');
            $('.popup').addClass('active');
        }
      }, 1000);
        
        
        
    });

});



$(document).ready(function () {

    $("li:first-child").addClass("first");
    $("li:last-child").addClass("last");
    
    $('[href="#"]').attr("href", "javascript:;");
    $('.menu-Bar').click(function() {
        $(this).toggleClass('open');
        $('.menuWrap').toggleClass('open');
        $('body').toggleClass('ovr-hiddn');
        $('body').toggleClass('overflw');
    });

   $('.tab-screens-slider').slick({
        dots: false,
        arrows: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
       autoplaySpeed: 2000,
        prevArrow: ".tab-prev",
        nextArrow: ".tab-next",
        responsive: [
        {
            breakpoint: 825,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
                arrows:false
            }
        },
        ]
    });
   $('.indust-slider').slick({
        dots: false,
        arrows: false,
        infinite: true,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
       autoplaySpeed: 2000,
    });

            $('.product-slid').slick({
        dots: false,
        arrows: false,
        infinite: true,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
        {
            breakpoint: 825,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
                arrows:false
            }
        },
        ]
    });

        $('.packages-list').slick({
        dots: true,
        arrows: false,
        infinite: false,
        speed: 800,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        responsive: [
        {
            breakpoint: 1023,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
            }
        },
        ]
    });

    
    $('.what-we-slide').slick({
        dots: false,
        arrows: true,
        speed: 300,
        centerPadding: '60px',
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: ".we-prev",
        nextArrow: ".we-next",
        autoplay: false,
        autoplaySpeed: 2000,
        centerMode: true,
        responsive: [
            {
                breakpoint: 1023,
                settings: {
                    centerPadding: '-60px',
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    dots: false,
                    arrows:false
                    
                }
            },
            {
                breakpoint: 767,
                settings: {
                    centerPadding: '0px',
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    arrows:false
                    
                }
            },
        ]
    });
    $('.seo-service-list').slick({
        dots: false,
        arrows: false,
        speed: 300,
        centerPadding: '30px',
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: ".we-prev",
        nextArrow: ".we-next",
        autoplay: false,
        autoplaySpeed: 2000,
        centerMode: true,
        infinite: false,
        responsive: [
            {
                breakpoint: 1023,
                settings: {
                    infinite: true,
                    centerPadding: '30px',
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    dots: false,
                    arrows:false
                    
                }
            },
            {
                breakpoint: 767,
                settings: {
                    infinite: true,
                    centerPadding: '0px',
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                    arrows:false,
                    autoplay: true,
                    autoplaySpeed: 1500,
                }
            },
        ]
    });
    $('.content-service-list').slick({
        dots: false,
        arrows: false,
        speed: 300,
        centerPadding: '60px',
        slidesToShow: 5,
        slidesToScroll: 1,
        prevArrow: ".we-prev",
        nextArrow: ".we-next",
        autoplay: true,
        autoplaySpeed: 2000,
        centerMode: true,
        infinite: true,
        responsive: [
            {
                breakpoint: 1660,
                settings: {
                    infinite: true,
                    centerPadding: '30px',
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    dots: false,
                    arrows:false
                    
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    infinite: true,
                    centerPadding: '30px',
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    dots: false,
                    arrows:false
                    
                }
            },
            {
                breakpoint: 1023,
                settings: {
                    infinite: true,
                    centerPadding: '30px',
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    dots: false,
                    arrows:false
                    
                }
            },
            {
                breakpoint: 767,
                settings: {
                    infinite: true,
                    centerPadding: '0px',
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                    arrows:false
                    
                }
            },
        ]
    });
    $('.industries-icon-list').slick({
    dots: false,
    arrows: false,
    infinite: false,
    speed: 800,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    responsive: [
    {
        breakpoint: 1023,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
        }
    },
    {
        breakpoint: 767,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
        }
    },
    ]
});
    $('.mobile-dev-slider').slick({
    dots: true,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
});
    $('.slide-logos').slick({
    dots: false,
    arrows: false,
    fade: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
});


// counter javascript start

$('.count').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 4000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});

// counter javascript end


    // $('.faqAccordian>li.first').addClass('active');
    $('ul.faq-ul li.active div').slideDown();
    $('ul.faq-ul li h4').click(function() {
        $('ul.faq-ul li').removeClass('active');
        $(this).parent('li').addClass('active');
        $('ul.faq-ul li div').slideUp();
        $(this).parent('li').find('div').slideDown();
    });
    
        $('.faq-ul>li').click(function(){
            $(this).addClass('active');
            $(this).siblings().removeClass('active');
        });
     

    $('.searchBtn').click(function() {
        $('.searchWrap').addClass('active');
        $('.overlay').fadeIn('active');
        $('.searchWrap input').focus();
        $('.searchWrap input').focusout(function(e) {
            $(this).parents().removeClass('active');
            $('.overlay').fadeOut('active');
            $('body').removeClass('ovr-hiddn');

        });
    });

});


$(window).on('load', function() {
    var currentUrl = window.location.href.substr(window.location.href.lastIndexOf("/") + 1);
    $('ul.menu li a').each(function() {
        var hrefVal = $(this).attr('href');
        if (hrefVal == currentUrl) {
            $(this).removeClass('active');
            $(this).closest('li').addClass('active')
            $('ul.menu li.first').removeClass('active');
        }
    })

});

// tabing

     $('[data-targetit]').on('click', function(e) {
  $(this).addClass('current');
  $(this).addClass('active');
  $('.all-packages-list').removeClass('active');
  setTimeout(function() { 
      $('.all-packages-list').addClass('active');
}, 100);
  $(this).siblings().removeClass('current');
  $(this).siblings().removeClass('active');
  var target = $(this).data('targetit');
  $('.' + target).siblings('[class^="box-"]').hide();
  $('.' + target).siblings('[class^="box-"]').removeClass("active");
  $('.' + target).fadeIn();
  $('.' + target).addClass("active");
});


     // sticky header

     $(window).scroll(function() {
    if ($(this).scrollTop() > 100){  
        $('header').addClass("active");
    }
    else{
        $('header').removeClass("active");
    }
});


// slider additional js for tabbing
          $(".quote-toggle").on("click", function (e) {
        $(".quote-form-wrap").addClass("active");
    });
          $(".dis-qoute").on("click", function (e) {
        $(".quote-form-wrap").removeClass("active");
    });
          $("[data-targetit]").on("click", function (e) {
              
        $(".packages-list").slick("setPosition");
    });
        $(".work-list li").mouseenter(function(){
        $(this).addClass("active");
        $(this).parent(".work-list").addClass("active")
   });
        $(".work-list li").mouseleave(function(){
        $(".work-list li").removeClass("active");
        $(this).parent(".work-list").removeClass("active")
   });








const xpText = document.querySelectorAll(".xp-text")
function textBold() {
  xpText.forEach(btn => {
        let x = Math.floor((Math.random() * 10) + 1);
        if(btn.classList.contains(`xp-text${x}`)){
            xpText.forEach(btn => {
                btn.classList.remove("active")
            })
            btn.classList.add("active")
        }
    })
}
setInterval(textBold, 1000);




    // const whatweBtns = document.querySelectorAll(".portfolio-btns-whatwe li")
    // const whatweItems = document.querySelectorAll(".portfolio-item2")
    // const whatweList = document.querySelector(".portfolio-list2")
    // whatweItems.forEach(port => {
        //     if(port.classList.contains("all")){
            //         port.classList.add("active")
            //     }
            // })
            // whatweBtns.forEach(btn => {
                //          btn.addEventListener("click" , e => {
                    //           if (!btn.classList.contains("active")) {         
                        //             whatweBtns.forEach(b => {
                            //                     b.classList.remove("active")
//                 })
//                 whatweItems.forEach(porta => {
    //                         porta.classList.remove("active")
    //                 })
    //                 btn.classList.add("active")
    //                 whatweList.classList.remove("active")
    //                 whatweList.innerHTML = ""
    //                 let targetbtn = btn.dataset.whatwe
    //                 whatweItems.forEach(port => {
        //                     if(port.classList.contains(`${targetbtn}`)){
            //                         whatweList.appendChild(port)
            //                         port.classList.add("active")
            //                         setTimeout(addClass, 10);
            //                         function addClass() {
                //                             whatweList.classList.add("active")
                //                         }
                //                     }
                //             })
                //         }  
                
                //        })
                //     })






                // const svgMeter = document.querySelector(".meter-svg #bar")
const svgcounter = document.querySelectorAll(".svg-counter")

// svgMeter.style.strokeDashoffset = "0px"
// console.log(svgMeter)

// popup
$('.popup-btn,.pack-btn').click(function(){
    $('.popup-layer').addClass('active');
    $('.popup').addClass('active');
    $('body').addClass('pop-active')
});
$('.dis-popup , .popup-layer').click(function(){
    $('.popup-layer').removeClass('active');
    $('.popup').removeClass('active');
    $('body').removeClass('pop-active')
});
$('.dropdown-btn').click(function(){
    $(this).parent('.drop-down').toggleClass('active');
});




$('.all-faq-btns').click(function(){
    $('ul.faq-ul li.active div').slideDown();
    $('ul.faq-ul li h4').click(function() {
        $('ul.faq-ul li').removeClass('active');
        $(this).parent('li').addClass('active');
        $('ul.faq-ul li div').slideUp();
        $(this).parent('li').find('div').slideDown();
    });
    
        $('.faq-ul>li').click(function(){
            $(this).addClass('active');
            $(this).siblings().removeClass('active');
        });  
});



$("[data-targetit]").on("click", function (e) {
          
    $(".packages-list2").slick("setPosition");
});



$('.packages-list2').addClass('active');
function packageslider(){
    if ($(window).width() < 1023) {
        $('.packages-list2').removeClass('active');
        if(!$('.packages-list2').hasClass('slick-slider')) {
            $('.packages-list2').slick({
                dots: false,
                arrows: true,
                infinite: false,
                speed: 800,
                slidesToShow: 3,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 1500,
                responsive: [
                {
                    breakpoint: 1023,
                    settings: {
                        arrows: true,
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        arrows: true,
                    }
                },
                ]
            });
        }
    } else {
        if($('.packages-list2').hasClass('slick-slider')) {
        $('.packages-list2').slick('unslick');
        $('.packages-list2').addClass('active');
        }
    }
}
packageslider()
$(window).resize(function () {
    packageslider()
});


$(".footer-faq h4").on("click", function (e) {
    if(!$(this).parent('div').hasClass('active')) {
         $(this).parent('div').addClass('active')
        } else {
            console.log('same')
            $(this).parent('div').removeClass('active') 
        }
});


var base_url = $('#base_url').val();


if(window.location == base_url+"/web-design.php" || window.location == base_url+'/web-development.php' || window.location == base_url+'/ecommerce.php' || window.location == base_url+'/mobile-application.php' || window.location == base_url+'/brand-design.php' || window.location == base_url+'/seo.php' || window.location == base_url+'/social-media.php' || window.location == base_url+'/content-writing.php' ){

var counted = 0;
$(window).scroll(function() {

//   console.log($('#counter').offset());
let oTop = $('#counter').offset().top - window.innerHeight;
   
  if (counted == 0 && $(window).scrollTop() > oTop) {
    $('.count').each(function() {
        $('.count').parent('div').addClass('active')



        svgcounter.forEach(counter => {
            let svgValue = counter.dataset.count * 3
         //    let division = svgValue / defaultSvg
         //    console.log(division)
             let svg = counter.parentElement.parentElement.children[1].children[1]
             svg.style.strokeDashoffset = `${svgValue}%`
         })





      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },
        {
          duration: 2000,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
            //alert('finished');
          }

        });
    });
    counted = 1;
  }
});
}


$('.logo-sel-pic').click(function(){
        dis = $(this);
        logotypeget = dis.data('logotype');
        sbl = dis.parents('li').siblings().find('.logo-sel-pic');
        dis.addClass('white_select');
        sbl.removeClass('white_select');
        $('#logotypeget').val(logotypeget);
    });

       $('.logofont').click(function(){
        dis = $(this);
        logofonttyp = dis.data('logofont');
        sbl = dis.parents('li').siblings().find('.logofont');
        dis.addClass('gt_logofnt');
        sbl.removeClass('gt_logofnt');
        $('#logofonttyp').val(logofonttyp);
    });

          $('.logoclr').click(function(){
        dis = $(this);
        logoclrslect = dis.data('logoclr');
        sbl = dis.parents('li').siblings().find('.logoclr');
        dis.addClass('logoclr-slect');
        sbl.removeClass('logoclr-slect');
        $('#logoclrslect').val(logoclrslect);
    });