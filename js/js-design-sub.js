$(document).ready(function () {

    // .design .menu01 .dsiImg 클릭할때, sub01 이 올라온다.
    $('.menu01 .dsiImg').click(function () {




        $('.dsisub').css({
            'left': 0
        });


        $('.design').css({
            'top': '-100%'
        });



        $('html,body').stop().animate({
            scrollTop: 0
        }, 1000);

        $('.dsisub .icon03').removeClass('on');
        $('.dsisub .icon01').addClass('on');


        $('.dsisub nav .artBtn p:nth-child(1)').removeClass('bb');
        $('.dsisub .sub01').removeClass('on');



        $('.dsisub').addClass('on');
        $('.dsisub .sub02').addClass('on');
        $('.dsisub nav .artBtn p:nth-child(1)').addClass('aa');

        $('.dsisub .subNav').removeClass('aa');
        $('.dsisub .subNav').removeClass('bb');

        $('.dsisub nav li').removeClass('on');
        $('.dsisub nav li').eq(0).addClass('on');

        $('.dsisub .sub01 .title a').removeClass('on');
        $('.dsisub .sub01 .title a').eq(0).addClass('on');


        // 춘식 제거
        $('.dsisub .icon02').removeClass('on');

        $('.dsisub .sub01').removeClass('aa');

        $('.dsisub .icon01').addClass('on');
        $('.dsisub nav li a').removeClass('on');

        $('.dsisub nav .artBtn p:nth-child(1)').removeClass('bb');
        $('.dsisub nav .artBtn p:nth-child(1)').removeClass('cc');
        $('.dsisub nav .artBtn p:nth-child(1)').removeClass('dd');
        $('.dsisub nav .artBtn p:nth-child(1)').addClass('aa');

        $('.dsisub nav .artBtn p:nth-child(2)').removeClass('on');

        $('.dsisub nav li').removeClass('at');


        $('.dsisub .sub01 article').eq(0).removeClass('on');
        $('.dsisub .sub01 .title p').removeClass('on');
        $('.dsisub .sub01 strong').removeClass('on');
        $('.dsisub .sub01 span').removeClass('on');
        $('.dsisub .sub01 em').removeClass('on');


        // 모네 제거
        $('.dsisub .icon03').removeClass('on');
        $('.dsisub .icon04').removeClass('on');








    });

    // .design .menu02 .dsiImg 클릭할때, sub02 이 올라온다.
    $('.menu02 .dsiImg').click(function () {
        let a01 = $(this).parents();
        // menu01
        let a02 = $(a01).parents();
        // scroll
        let a03 = $(a02).parents();
        // design
        let a04 = $(a03).parents();

        $('.dsisub').css({
            'top': 0,
            'left': 0
        });


        $(a04).css({
            'top': '-100%'

        });

        $('.dsisub .icon01').removeClass('on');
        $('.dsisub .icon03').addClass('on');


        $('html,body').stop().animate({
            scrollTop: 0
        }, 1000);

        $('.dsisub nav .artBtn p:nth-child(1)').removeClass('aa');
        $('.dsisub .sub02').removeClass('on');



        $('.dsisub').addClass('on');


        $('.dsisub .sub01').addClass('on');
        $('.dsisub nav .artBtn p:nth-child(1)').addClass('bb');

        $('.dsisub .subNav').removeClass('aa');
        $('.dsisub .subNav').removeClass('bb');


        $('.dsisub nav li').removeClass('on');
        $('.dsisub nav li').eq(2).addClass('on');


        // 모네 제거
        $('.dsisub .icon04').removeClass('on');

        $('.dsisub .sub02').removeClass('aa');

        $('.dsisub .icon03').addClass('on');
        $('.dsisub nav li a').removeClass('on');

        $('.dsisub nav .artBtn p:nth-child(1)').removeClass('aa');
        $('.dsisub nav .artBtn p:nth-child(1)').removeClass('cc');
        $('.dsisub nav .artBtn p:nth-child(1)').removeClass('dd');
        $('.dsisub nav .artBtn p:nth-child(1)').addClass('bb');

        $('.dsisub nav .artBtn p:nth-child(2)').removeClass('on');

        $('.dsisub nav li').removeClass('at');

        $('.dsisub .sub02 article').eq(0).removeClass('on');
        $('.dsisub .sub02 .title p').removeClass('on');
        $('.dsisub .sub02 strong').removeClass('on');
        $('.dsisub .sub02 span').removeClass('on');
        $('.dsisub .sub02 em').removeClass('on');


        // 춘식 제거
        $('.dsisub .icon01').removeClass('on');
        $('.dsisub .icon02').removeClass('on');



    });


    // 춘식 서브페이지 아이콘 색 변경

    $('.dsisub .icon01').click(function () {

        $(this).removeClass('on');

        $('.dsisub .sub01').addClass('aa');

        $('.dsisub .icon02').addClass('on');
        $('.dsisub nav li a').addClass('on');
        $('.dsisub nav li').addClass('at');

        $('.info span i').addClass('on');

        $('.dsisub nav .artBtn p:nth-child(1)').removeClass('aa');
        $('.dsisub nav .artBtn p:nth-child(1)').removeClass('bb');
        $('.dsisub nav .artBtn p:nth-child(1)').removeClass('dd');
        $('.dsisub nav .artBtn p:nth-child(1)').addClass('cc');

        $('.dsisub nav .artBtn p:nth-child(2)').addClass('on');
        $('.dsisub nav li').addClass('at');

        $('.dsisub .subNav').addClass('aa');

        $('.dsisub .sub01 article').eq(0).addClass('on');
        $('.dsisub .sub01 .title p').addClass('on');
        $('.dsisub .sub01 strong').addClass('on');
        $('.dsisub .sub01 span').addClass('on');
        $('.dsisub .sub01 em').addClass('on');


    });

    $('.dsisub .icon02').click(function () {

        $(this).removeClass('on');

        $('.dsisub .sub01').removeClass('aa');

        $('.dsisub .icon01').addClass('on');
        $('.dsisub nav li a').removeClass('on');

        $('.dsisub nav .artBtn p:nth-child(1)').removeClass('bb');
        $('.dsisub nav .artBtn p:nth-child(1)').removeClass('cc');
        $('.dsisub nav .artBtn p:nth-child(1)').removeClass('dd');
        $('.dsisub nav .artBtn p:nth-child(1)').addClass('aa');

        $('.dsisub nav .artBtn p:nth-child(2)').removeClass('on');

        $('.dsisub nav li').removeClass('at');

        $('.dsisub .subNav').removeClass('aa');

        $('.dsisub .sub01 article').eq(0).removeClass('on');
        $('.dsisub .sub01 .title p').removeClass('on');
        $('.dsisub .sub01 strong').removeClass('on');
        $('.dsisub .sub01 span').removeClass('on');
        $('.dsisub .sub01 em').removeClass('on');





    });

    // 모네 서브페이지 아이콘 색 변경

    $('.dsisub .icon03').click(function () {

        $(this).removeClass('on');

        $('.dsisub .sub02').addClass('aa');

        $('.dsisub .icon04').addClass('on');
        $('.dsisub nav li a').addClass('on');
        $('.dsisub nav li').addClass('at');

        $('.info span i').addClass('on');

        $('.info span i').removeClass('on');

        $('.dsisub nav .artBtn p:nth-child(1)').removeClass('aa');
        $('.dsisub nav .artBtn p:nth-child(1)').removeClass('bb');
        $('.dsisub nav .artBtn p:nth-child(1)').removeClass('cc');
        $('.dsisub nav .artBtn p:nth-child(1)').addClass('dd');

        $('.dsisub nav .artBtn p:nth-child(2)').addClass('on');
        $('.dsisub nav li').addClass('at');

        $('.dsisub .subNav').addClass('bb');

        $('.dsisub .sub02 article').eq(0).addClass('on');
        $('.dsisub .sub02 .title p').addClass('on');
        $('.dsisub .sub02 strong').addClass('on');
        $('.dsisub .sub02 span').addClass('on');
        $('.dsisub .sub02 em').addClass('on');



    });

    $('.dsisub .icon04').click(function () {

        $(this).removeClass('on');

        $('.dsisub .sub02').removeClass('aa');

        $('.dsisub .icon03').addClass('on');
        $('.dsisub nav li a').removeClass('on');

        $('.info span i').removeClass('on');

        $('.dsisub nav .artBtn p:nth-child(1)').removeClass('aa');
        $('.dsisub nav .artBtn p:nth-child(1)').removeClass('cc');
        $('.dsisub nav .artBtn p:nth-child(1)').removeClass('dd');
        $('.dsisub nav .artBtn p:nth-child(1)').addClass('bb');

        $('.dsisub nav .artBtn p:nth-child(2)').removeClass('on');

        $('.dsisub nav li').removeClass('at');

        $('.dsisub .subNav').removeClass('bb');

        $('.dsisub .sub02 article').eq(0).removeClass('on');
        $('.dsisub .sub02 .title p').removeClass('on');
        $('.dsisub .sub02 strong').removeClass('on');
        $('.dsisub .sub02 span').removeClass('on');
        $('.dsisub .sub02 em').removeClass('on');



    });



    // dsisub에서 이동

    // 프로필 열리기

    // 홈으로 이동
    $('.dsisub .dBtn p').eq(1).click(function () {


        $('.design').css({
            'top': '0%',
            'left': '100%'

        });

        $('.home').css({
            'top': 0
        });

        $('.dsisub').css({
            'left': '-100%'

        });

        $('html,body').stop().animate({
            scrollTop: 0
        }, 1000);

        $('.dsisub').removeClass('on');

        // 사이트 열었을때, 홈 화면 .home .mainTxt01 em 일정시간 후 뜨기
        setTimeout(function () {

            $('.home .mainTxt01 em').eq(0).addClass('show');
            $('.home .mainTxt01 em').eq(5).addClass('show');
            $('.home .mainTxt01 em').eq(7).addClass('show');
            $('.home .mainTxt01 em').eq(10).addClass('show');

        }, 500);

        setTimeout(function () {

            $('.home .mainTxt01 em').eq(2).addClass('show');
            $('.home .mainTxt01 em').eq(4).addClass('show');
            $('.home .mainTxt01 em').eq(8).addClass('show');
            $('.home .mainTxt01 em').eq(11).addClass('show');

        }, 700);

        setTimeout(function () {

            $('.home .mainTxt01 em').eq(1).addClass('show');
            $('.home .mainTxt01 em').eq(3).addClass('show');
            $('.home .mainTxt01 em').eq(6).addClass('show');
            $('.home .mainTxt01 em').eq(9).addClass('show');

        }, 900);


        // 사이트 열었을때, 홈 화면 .home .mainTxt02 일정시간 후 뜨기
        setTimeout(function () {

            $('.home .mainTxt02 p').addClass('show');

        }, 1500);


        // 
        setTimeout(function () {

            $('.home .homeBtn01 p').addClass('show');
            $('.home .homeBtn02 p').addClass('show');

        }, 2500);

    });

    // 아트로 이동
    $('.dsisub .artBtn').click(function () {


        $('.design').css({
            'top': '0%',
            'left': '100%'
        });
        $('.art').css({
            'left': 0
        });

        $('.dsisub').css({
            'left': '-100%'

        });


        $('html,body').stop().animate({
            scrollTop: 0
        }, 1000);

        //$('.design nav').removeClass('on');
        //$('.design footer').removeClass('aa');

        $('.dsisub').removeClass('on');

    });


    // 디자인 서브페이지 nav 이동
    $('.dsisub nav li').eq(0).click(function (e) {
        e.preventDefault();


        $('.dsisub').css({
            'left': '-100%'

        });

        $('.design').css({
            'top': '0%'
        });

        $('html,body').stop().animate({
            scrollTop: 0
        }, 1000);

        //$('.design nav').removeClass('on');
        $('.design footer').removeClass('aa');

        $('.dsisub').removeClass('on');



    });

    let scwid = $('.scroll section').width();

    $('.dsisub nav li').eq(1).click(function (e) {
        e.preventDefault();


        $('.dsisub').css({
            'left': '-100%'

        });

        $('.design').css({
            'top': '0%'
        });

        $('html,body').stop().animate({
            scrollTop: scwid+30
        }, 1000);

        //$('.design nav').removeClass('on');
        $('.design footer').removeClass('aa');

        $('.dsisub').removeClass('on');




    });

    $('.dsisub nav li').eq(2).click(function (e) {
        e.preventDefault();



        $('.dsisub').css({
            'left': '-100%'

        });

        $('.design').css({
            'top': '0%'
        });

        $('html,body').stop().animate({
            scrollTop: scwid * 2
        }, 1000);

        //$('.design nav').removeClass('on');
        $('.design footer').removeClass('aa');

        $('.dsisub').removeClass('on');


    });





    // 춘식 서브페이지의 sub01 첫번째 li를 클릭했을때, 스크롤 top이 0이 되어라
    $('.dsisub .sub01 .title li').eq(0).click(function (e) {
        e.preventDefault();

        $('html,body').stop().animate({
            scrollTop: 0
        }, 1000);

        $('.dsisub .sub01 .title a').removeClass('on');
        $(this).children().addClass('on');


    });

    // 춘식 서브페이지의 sub01 첫번째 a를 클릭했을때, 스크롤 top이 .dsisub .sub01 article:nth-child(3)의 offset().top 이 되어라



    $('.dsisub .sub01 .title li').eq(1).click(function (e) {
        e.preventDefault();

        let chun = $('.dsisub .sub01 article').eq(2).offset().top;
        let chun01 = $('.dsisub nav').height();


        $('html,body').stop().animate({
            scrollTop: chun - chun01
        }, 1000);

        $('.dsisub .sub01 .title a').removeClass('on');
        $(this).children().addClass('on');


    });

    // 서브페이지에서 스크롤 했을때, 아티클 3번째 offset().top 에 오면 li on 값 생기기

    $(window).scroll(function () {

        let sc = $(this).scrollTop();

        let chun01 = $('.dsisub nav').height();
        let chun02 = $('.dsisub .sub01 article').eq(0).height();

        let subsc01 = $('.dsisub .sub01 article').eq(1).height();
        let subsc02 = $('.dsisub .sub01 article').eq(2).offset().top;

        if (sc >= 0 && sc < subsc02 - chun01 - (chun02 * 2)) {
            $('.dsisub .sub01 .title a').removeClass('on');
            $('.dsisub .sub01 .title a').eq(0).addClass('on');

        };

        if (sc >= subsc02 - chun01 - (chun02 * 2)) {
            $('.dsisub .sub01 .title a').removeClass('on');
            $('.dsisub .sub01 .title a').eq(1).addClass('on');

        };


    });


    ///////////////

    // 모네 서브페이지의 sub02 첫번째 li를 클릭했을때, 스크롤 top이 0이 되어라
    $('.dsisub .sub02 .title li').eq(0).click(function (e) {
        e.preventDefault();

        $('html,body').stop().animate({
            scrollTop: 0
        }, 1000);

        $('.dsisub .sub02 .title a').removeClass('on');
        $(this).children().addClass('on');


    });

    // 모네 서브페이지의 sub02 첫번째 a를 클릭했을때, 스크롤 top이 .dsisub .sub01 article:nth-child(3)의 offset().top 이 되어라



    $('.dsisub .sub02 .title li').eq(1).click(function (e) {
        e.preventDefault();

        let chun = $('.dsisub .sub02 article').eq(2).offset().top;
        let chun01 = $('.dsisub nav').height();


        $('html,body').stop().animate({
            scrollTop: chun - chun01
        }, 1000);

        $('.dsisub .sub02 .title a').removeClass('on');
        $(this).children().addClass('on');


    });

    // 서브페이지에서 스크롤 했을때, 아티클 3번째 offset().top 에 오면 li on 값 생기기

    $(window).scroll(function () {

        let sc = $(this).scrollTop();

        let monet01 = $('.dsisub nav').height();
        let monet02 = $('.dsisub .sub02 article').eq(0).height();

        let subsc01 = $('.dsisub .sub02 article').eq(1).height();
        let subsc02 = $('.dsisub .sub02 article').eq(2).offset().top;

        if (sc >= 0 && sc < subsc02 - monet01 - (monet02 * 2)) {
            $('.dsisub .sub02 .title a').removeClass('on');
            $('.dsisub .sub02 .title a').eq(0).addClass('on');

        };

        if (sc >= subsc02 - monet01 - (monet02 * 2)) {
            $('.dsisub .sub02 .title a').removeClass('on');
            $('.dsisub .sub02 .title a').eq(1).addClass('on');

        };


    });




    // 모네 서브페이지 애니메이션

    let moani01 = 0

    setInterval(function () {

        if (moani01 < 4) moani01++;

        if (moani01 == 4) moani01 = -1;

        $('.dsisub .sub02 .mo01 .aniImg p').css({
            'opacity': 0
        });
        $('.dsisub .sub02 .mo01 .aniImg p').eq(moani01).css({
            'opacity': 1
        });

    }, 3000);


    let moani02 = 0

    setInterval(function () {

        if (moani02 < 2) moani02++;

        if (moani02 == 2) moani02 = -1;

        $('.dsisub .sub02 .mo05 .aniImg p').css({
            'opacity': 0
        });
        $('.dsisub .sub02 .mo05 .aniImg p').eq(moani02).css({
            'opacity': 1
        });

    }, 3000);



    // @@@@@@서브페이지 title 스크롤시 보였다가 안보였다가 해라


    var FirstScroll = 0;
    var prevScrollTop = $(window).scrollTop(),
        tp = $(window).scrollTop();
    $(window).scroll(function (e) {

        // addclass 안먹힘 css / hide / fade 는 먹힘
        tp = $(this).scrollTop();
        if (tp > prevScrollTop) {

            $('.dsisub .title').hide();

        } else if (tp < prevScrollTop) {

            $('.dsisub .title').show();
        }
        prevScrollTop = tp;
    });












})