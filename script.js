$(function () {

    // アニメーション

    // $('.fv').addClass('is_active');
    // setTimeout(function () {
    //     $('.fv').fadeOut();
    // }, 3700);

    $(".shop_slide").slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 0,
        speed:7000,
        dots: false,
        // fade: true,
        slidesToShow: 1.3,
        cssEase:"linear"
    });

    $(".allshop_slide").slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 0,
        speed:7000,
        dots: false,
        // fade: true,
        slidesToShow: 3,
        cssEase:"linear",
        // responsive: [
        //     {
        //         breakpoint: 767,
        //         settings: {
        //             slidesToShow: 2.5,
        //         },
        //     },
        // ],
    });


    $(".capture_slide").slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2500,
        dots: false,
        // fade: true,
        slidesToShow: 1,
        speed: 1500,
        fade: true,

    });

    $(".service_slide").slick({
        arrows: true,
        autoplay: true,
        autoplaySpeed: 2500,
        centerPadding: "30px",
        dots: false,
        // fade: true,
        slidesToShow: 3,
        speed: 400,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    });
});


$(".hum_btn, .hum_nav li").on("click", function () {
    $(".shop_nav").fadeToggle();
    $(".header_nav").fadeToggle();
    $(".taiken_btn").fadeToggle();
    $(".hum_btn").toggleClass("open");
    $(".hum_nav").toggleClass("active");
    $(".sp_hum_nav").toggleClass("active");
    $(".main_visual").toggleClass("active");
});

jQuery(function () {
    var $offset = jQuery('.taiken_btn').offset();
    jQuery(window).scroll(function () {
        if (jQuery(window).scrollTop() > $offset.top) {
            jQuery('.taiken_btn').addClass('fixed');
        } else {
            jQuery('.taiken_btn').removeClass('fixed');
        }
    });
});

if($.cookie("disappear") != "ok"){
    $(".popup_wrap").removeClass("ok");
} else {
    $(".popup_wrap").addClass("ok");
}

$('.popup_close').click(function(){
    $.cookie("disappear", "ok", { expires: 1, path: "/" });
    $(".popup_wrap").addClass("ok");
});

// 1. ページがスクロールされた時にイベントを設定する
$(window).scroll(function () {
    
    // 2. ウィンドウの位置を取得する
    var scrollTop = $(this).scrollTop(); // ウィンドウ枠内の上の位置を取得する
    var scrollBottom = scrollTop + $(this).height(); // ウィンドウ枠内の下の位置を取得する

    // 3. 指定した要素にそれぞれ処理を追加する
    $(".action2").each(function (i) {

        // 4. ウィンドウの位置と表示したい要素の位置を比較する
        if (scrollBottom > $(this).offset().top) {
            
            // 5. 0.3秒毎ごとに1つずつfadeinクラスを付与する
            var target = this;
            setTimeout(function () {
                $(target).addClass("fadein");
            }, 300 * i);

        }

    });
});


$(function () {
    $(".qa_title").on("click", function () {
        $(".qa_title").not(this).removeClass("open");
        $(".qa_title").not(this).next().slideUp(300);
        $(this).toggleClass("open");
        $(this).next().slideToggle(300);
    });
});


$(function () {
    $(window).scroll(function () {
      const windowHeight = $(window).height();
      const scroll = $(window).scrollTop();
  
      $('.action').each(function () {
        const targetPosition = $(this).offset().top;
        if (scroll > targetPosition - windowHeight + 100) {
          $(this).addClass("is-fadein");
        }
      });
    });
  });
  

