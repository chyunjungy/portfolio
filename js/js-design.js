$(document).ready(function () {

    let scwid = $('.scroll section').width()


    // // 마우스휠을 했을때, 이벤트가 일어나라. - menu02로 안감

    // // 현위치(.scroll section) 에서 마우스를 올렸을때 전으로 가고
    // // 현위치(.scroll section) 에서 마우스를 내렸을때 후로 가라.
    // // $('.scroll').mousewheel(function (evernt, delta) {


    //     let tt = 0
        

    //     if (delta > 0) {
    //         // 이전순서로 이동
    //         // let prev = $(this).prev().offset().left;
    //         if (tt > 2) tt++;



    //         // 0 . 100% , 200%



    //         // 스크롤
    //         $('html,body').stop().animate({
    //             scrollTop: -scwid*tt
    //         }, 1400);
    //         console.log(tt);





    //     } else if (delta < 0) {

    //         // // 다음순서로 이동
    //         // // let next = $(this).next().offset().left;
    //         if(tt<2)tt++;


    //         $('html,body').stop().animate({
    //             scrollTop: scwid*tt
    //         }, 1400);


    //     };



    // });



  
   







    // 아이콘01 클릭시 컬러 변경
    $('.design .icon01').click(function () {

        $(this).removeClass('on');
        $('.design .icon02').addClass('on');

        $('.info span i').addClass('on');

        // nav
        $('.design nav li a').addClass('on');
        $('.design nav li').addClass('at');
        $('.design nav .artBtn p:nth-child(2)').addClass('on');

        $(window).scroll(function () {

            let sc = $(this).scrollTop();
            // console.log(sc);
            $('.scroll').css({
                'left': -sc
            });


            let aa = scwid / 2
            let bb = scwid * 1
            let cc = scwid + aa


            if (sc >= aa && sc < bb) {
                $('.design nav .artBtn p:nth-child(1)').removeClass('aa');
                $('.design nav .artBtn p:nth-child(1)').removeClass('bb');
                $('.design nav .artBtn p:nth-child(1)').removeClass('cc');
                $('.design nav .artBtn p:nth-child(1)').removeClass('ee');
                $('.design nav .artBtn p:nth-child(1)').removeClass('ff');
                $('.design nav .artBtn p:nth-child(1)').addClass('dd');



            };

            if (sc >= bb && sc < cc) {
                $('.design nav .artBtn p:nth-child(1)').removeClass('aa');
                $('.design nav .artBtn p:nth-child(1)').removeClass('bb');
                $('.design nav .artBtn p:nth-child(1)').removeClass('cc');
                $('.design nav .artBtn p:nth-child(1)').removeClass('dd');
                $('.design nav .artBtn p:nth-child(1)').removeClass('ff');
                $('.design nav .artBtn p:nth-child(1)').addClass('ee');

                $('.info').css({
                    'left': '100%'
                });

            };

            if (sc >= cc) {
                $('.design nav .artBtn p:nth-child(1)').removeClass('aa');
                $('.design nav .artBtn p:nth-child(1)').removeClass('bb');
                $('.design nav .artBtn p:nth-child(1)').removeClass('cc');
                $('.design nav .artBtn p:nth-child(1)').removeClass('dd');
                $('.design nav .artBtn p:nth-child(1)').removeClass('ee');
                $('.design nav .artBtn p:nth-child(1)').addClass('ff');

                $('.info').css({
                    'left': '200%'
                });

            };



        });

        // footer
        $('.design footer').addClass('on');



        // menu01
        $('.design .menu01').addClass('on');
        $('.design .menu01 .bg p:nth-child(1)').addClass('on');
        $('.design .menu01 .bg p:nth-child(2)').addClass('on');
        $('.design .menu01 .bg p:nth-child(3)').addClass('on');
        $('.design .menu01 .bg p:nth-child(4)').addClass('on');

        $('.design .menu01 .star span:nth-child(1)').addClass('on');
        $('.design .menu01 .star span:nth-child(2)').addClass('on');
        $('.design .menu01 .star span:nth-child(3)').addClass('on');
        $('.design .menu01 .star span:nth-child(4)').addClass('on');
        $('.design .menu01 .star span:nth-child(5)').addClass('on');
        $('.design .menu01 .star span:nth-child(6)').addClass('on');
        $('.design .menu01 .star span:nth-child(7)').addClass('on');
        $('.design .menu01 .star span:nth-child(8)').addClass('on');
        $('.design .menu01 .star span:nth-child(9)').addClass('on');

        $('.design .menu01 .txt em:nth-child(1)').addClass('on');
        $('.design .menu01 .txt em:nth-child(2)').addClass('on');
        $('.design .menu01 .txt em:nth-child(3)').addClass('on');

        $('.design .menu01 .title').addClass('on');

        $('.design .menu01 .pub strong').addClass('on');
        $('.design .menu01 .pub div').addClass('on');
        $('.design .menu01 .pub div a em').addClass('on');

        $('.design .menu01 .dsi strong').addClass('on');
        $('.design .menu01 .dsiImg').addClass('on');
        $('.design .menu01 .dsiBox02 p').addClass('at');
        $('.design .menu01 .hover span').addClass('on');
        $('.design .menu01 .dsiBtn i').addClass('on');
        $('.design .menu01 .start').addClass('at');
        $('.design .menu01 .end').addClass('at');

        $('.design .menu01 .view strong').addClass('on');
        $('.design .menu01 .view div').addClass('on');
        $('.design .menu01 .view div em').addClass('on');

        // main
        $('.design .main').addClass('on');
        $('.design .main .bg p:nth-child(1)').addClass('on');
        $('.design .main .bg p:nth-child(2)').addClass('on');
        $('.design .main .bg p:nth-child(3)').addClass('on');
        $('.design .main .bg p:nth-child(4)').addClass('on');

        $('.design .main .star span:nth-child(1)').addClass('on');
        $('.design .main .star span:nth-child(2)').addClass('on');
        $('.design .main .star span:nth-child(3)').addClass('on');
        $('.design .main .star span:nth-child(4)').addClass('on');
        $('.design .main .star span:nth-child(5)').addClass('on');
        $('.design .main .star span:nth-child(6)').addClass('on');
        $('.design .main .star span:nth-child(7)').addClass('on');
        $('.design .main .star span:nth-child(8)').addClass('on');

        $('.design .main .txt em:nth-child(1)').addClass('on');
        $('.design .main .txt em:nth-child(2)').addClass('on');
        $('.design .main .txt em:nth-child(3)').addClass('on');
        $('.design .main .txt em:nth-child(4)').addClass('on');

        $('.design .main .affor').addClass('on');

        $('.design .main .title').addClass('on');
        $('.design .main .txt01').addClass('on');
        $('.design .main .txt02 p:nth-child(1)').addClass('on');
        $('.design .main .txt02 p:nth-child(2)').addClass('on');
        $('.design .main .img').addClass('on');
        $('.design .main .img em').addClass('on');

        // menu02
        $('.design .menu02').addClass('on');
        $('.design .menu02 .bg p:nth-child(1)').addClass('on');
        $('.design .menu02 .bg p:nth-child(2)').addClass('on');
        $('.design .menu02 .bg p:nth-child(3)').addClass('on');
        $('.design .menu02 .bg p:nth-child(4)').addClass('on');

        $('.design .menu02 .star span:nth-child(1)').addClass('on');
        $('.design .menu02 .star span:nth-child(2)').addClass('on');
        $('.design .menu02 .star span:nth-child(3)').addClass('on');
        $('.design .menu02 .star span:nth-child(4)').addClass('on');
        $('.design .menu02 .star span:nth-child(5)').addClass('on');
        $('.design .menu02 .star span:nth-child(6)').addClass('on');
        $('.design .menu02 .star span:nth-child(7)').addClass('on');
        $('.design .menu02 .star span:nth-child(8)').addClass('on');
        $('.design .menu02 .star span:nth-child(9)').addClass('on');
        $('.design .menu02 .star span:nth-child(10)').addClass('on');

        $('.design .menu02 .txt em:nth-child(1)').addClass('on');
        $('.design .menu02 .txt em:nth-child(2)').addClass('on');
        $('.design .menu02 .txt em:nth-child(3)').addClass('on');

        $('.design .menu02 .title').addClass('on');

        $('.design .menu02 .pub strong').addClass('on');
        $('.design .menu02 .pub div').addClass('on');
        $('.design .menu02 .pub div a em').addClass('on');

        $('.design .menu02 .dsi strong').addClass('on');
        $('.design .menu02 .dsiImg').addClass('on');
        $('.design .menu02 .hover span').addClass('on');
        $('.design .menu02 .dsiBtn i').addClass('on');
        $('.design .menu02 .start').addClass('at');
        $('.design .menu02 .end').addClass('at');

        $('.design .menu02 .view strong').addClass('on');
        $('.design .menu02 .view div').addClass('on');
        $('.design .menu02 .view div em').addClass('on');


    });






    // 아이콘02 클릭시 컬러 돌아오기
    $('.design .icon02').click(function () {

        $(this).removeClass('on');
        $('.design .icon01').addClass('on');

        $('.info span i').removeClass('on');

        // nav
        $('.design nav li a').removeClass('on');
        $('.design nav li').removeClass('at');
        $('.design nav .artBtn p:nth-child(2)').removeClass('on');

        $(window).scroll(function () {

            let sc = $(this).scrollTop();
            console.log(sc);
            $('.scroll').css({
                'left': -sc
            });


            let aa = scwid / 2
            let bb = scwid * 1
            let cc = scwid + aa

            if (sc >= aa && sc < bb) {
                $('.design nav .artBtn p:nth-child(1)').removeClass('bb');
                $('.design nav .artBtn p:nth-child(1)').removeClass('cc');
                $('.design nav .artBtn p:nth-child(1)').removeClass('dd');
                $('.design nav .artBtn p:nth-child(1)').removeClass('ee');
                $('.design nav .artBtn p:nth-child(1)').removeClass('ff');
                $('.design nav .artBtn p:nth-child(1)').addClass('aa');

            };

            if (sc >= bb && sc < cc) {
                $('.design nav .artBtn p:nth-child(1)').removeClass('aa');
                $('.design nav .artBtn p:nth-child(1)').removeClass('cc');
                $('.design nav .artBtn p:nth-child(1)').removeClass('dd');
                $('.design nav .artBtn p:nth-child(1)').removeClass('ee');
                $('.design nav .artBtn p:nth-child(1)').removeClass('ff');
                $('.design nav .artBtn p:nth-child(1)').addClass('bb');

            };

            if (sc >= cc) {
                $('.design nav .artBtn p:nth-child(1)').removeClass('aa');
                $('.design nav .artBtn p:nth-child(1)').removeClass('bb');
                $('.design nav .artBtn p:nth-child(1)').removeClass('dd');
                $('.design nav .artBtn p:nth-child(1)').removeClass('ee');
                $('.design nav .artBtn p:nth-child(1)').removeClass('ff');
                $('.design nav .artBtn p:nth-child(1)').addClass('cc');

            };

        });

        // footer
        $('.design footer').removeClass('on');

        // menu01
        $('.design .menu01').removeClass('on');
        $('.design .menu01 .bg p:nth-child(1)').removeClass('on');
        $('.design .menu01 .bg p:nth-child(2)').removeClass('on');
        $('.design .menu01 .bg p:nth-child(3)').removeClass('on');
        $('.design .menu01 .bg p:nth-child(4)').removeClass('on');

        $('.design .menu01 .star span:nth-child(1)').removeClass('on');
        $('.design .menu01 .star span:nth-child(2)').removeClass('on');
        $('.design .menu01 .star span:nth-child(3)').removeClass('on');
        $('.design .menu01 .star span:nth-child(4)').removeClass('on');
        $('.design .menu01 .star span:nth-child(5)').removeClass('on');
        $('.design .menu01 .star span:nth-child(6)').removeClass('on');
        $('.design .menu01 .star span:nth-child(7)').removeClass('on');
        $('.design .menu01 .star span:nth-child(8)').removeClass('on');
        $('.design .menu01 .star span:nth-child(9)').removeClass('on');

        $('.design .menu01 .txt em:nth-child(1)').removeClass('on');
        $('.design .menu01 .txt em:nth-child(2)').removeClass('on');
        $('.design .menu01 .txt em:nth-child(3)').removeClass('on');

        $('.design .menu01 .title').removeClass('on');

        $('.design .menu01 .pub strong').removeClass('on');
        $('.design .menu01 .pub div').removeClass('on');
        $('.design .menu01 .pub div a em').removeClass('on');

        $('.design .menu01 .dsi strong').removeClass('on');
        $('.design .menu01 .dsiImg').removeClass('on');
        $('.design .menu01 .dsiBox02 p').removeClass('at');
        $('.design .menu01 .hover span').removeClass('on');
        $('.design .menu01 .dsiBtn i').removeClass('on');
        $('.design .menu01 .start').removeClass('at');
        $('.design .menu01 .end').removeClass('at');

        $('.design .menu01 .view strong').removeClass('on');
        $('.design .menu01 .view div').removeClass('on');
        $('.design .menu01 .view div em').removeClass('on');


        // main
        $('.design .main').removeClass('on');
        $('.design .main .bg p:nth-child(1)').removeClass('on');
        $('.design .main .bg p:nth-child(2)').removeClass('on');
        $('.design .main .bg p:nth-child(3)').removeClass('on');
        $('.design .main .bg p:nth-child(4)').removeClass('on');

        $('.design .main .star span:nth-child(1)').removeClass('on');
        $('.design .main .star span:nth-child(2)').removeClass('on');
        $('.design .main .star span:nth-child(3)').removeClass('on');
        $('.design .main .star span:nth-child(4)').removeClass('on');
        $('.design .main .star span:nth-child(5)').removeClass('on');
        $('.design .main .star span:nth-child(6)').removeClass('on');
        $('.design .main .star span:nth-child(7)').removeClass('on');
        $('.design .main .star span:nth-child(8)').removeClass('on');

        $('.design .main .txt em:nth-child(1)').removeClass('on');
        $('.design .main .txt em:nth-child(2)').removeClass('on');
        $('.design .main .txt em:nth-child(3)').removeClass('on');
        $('.design .main .txt em:nth-child(4)').removeClass('on');

        $('.design .main .affor').removeClass('on');

        $('.design .main .title').removeClass('on');
        $('.design .main .txt01').removeClass('on');
        $('.design .main .txt02 p:nth-child(1)').removeClass('on');
        $('.design .main .txt02 p:nth-child(2)').removeClass('on');
        $('.design .main .img').removeClass('on');
        $('.design .main .img em').removeClass('on');


        // menu02
        $('.design .menu02').removeClass('on');
        $('.design .menu02 .bg p:nth-child(1)').removeClass('on');
        $('.design .menu02 .bg p:nth-child(2)').removeClass('on');
        $('.design .menu02 .bg p:nth-child(3)').removeClass('on');
        $('.design .menu02 .bg p:nth-child(4)').removeClass('on');

        $('.design .menu02 .star span:nth-child(1)').removeClass('on');
        $('.design .menu02 .star span:nth-child(2)').removeClass('on');
        $('.design .menu02 .star span:nth-child(3)').removeClass('on');
        $('.design .menu02 .star span:nth-child(4)').removeClass('on');
        $('.design .menu02 .star span:nth-child(5)').removeClass('on');
        $('.design .menu02 .star span:nth-child(6)').removeClass('on');
        $('.design .menu02 .star span:nth-child(7)').removeClass('on');
        $('.design .menu02 .star span:nth-child(8)').removeClass('on');
        $('.design .menu02 .star span:nth-child(9)').removeClass('on');
        $('.design .menu02 .star span:nth-child(10)').removeClass('on');

        $('.design .menu02 .txt em:nth-child(1)').removeClass('on');
        $('.design .menu02 .txt em:nth-child(2)').removeClass('on');
        $('.design .menu02 .txt em:nth-child(3)').removeClass('on');

        $('.design .menu02 .title').removeClass('on');

        $('.design .menu02 .pub strong').removeClass('on');
        $('.design .menu02 .pub div').removeClass('on');
        $('.design .menu02 .pub div a em').removeClass('on');

        $('.design .menu02 .dsi strong').removeClass('on');
        $('.design .menu02 .dsiImg').removeClass('on');
        $('.design .menu02 .hover span').removeClass('on');
        $('.design .menu02 .dsiBtn i').removeClass('on');
        $('.design .menu02 .start').removeClass('at');
        $('.design .menu02 .end').removeClass('at');

        $('.design .menu02 .view strong').removeClass('on');
        $('.design .menu02 .view div').removeClass('on');
        $('.design .menu02 .view div em').removeClass('on');


    });


    // .design .menu02 .dsiBtn 의 up / down 을 클릭할때, dsiImg 의 p 들이 순서대로 바껴라
    //  p 총 5개
    // .dsiImg p의 온값을 받아라.

    let up01 = 0
    $('.menu01 .dsiBtn .up').click(function () {


        if (up01 < 5) up01++;

        $('.design .menu01 .start').removeClass('on');

        $('.design .menu01 .dsiBox02 p').removeClass('on');
        $('.design .menu01 .dsiBox02 p').eq(up01).addClass('on');

        if (up01 == 5) {

            $('.design .menu01 .end').removeClass('on');
            $('.design .menu01 .end').addClass('on');
        }
    });




    $('.menu01 .dsiBtn .down').click(function () {

        if (up01 > 0) up01--;

        $('.design .menu01 .end').removeClass('on');

        $('.design .menu01 .dsiBox02 p').removeClass('on');
        $('.design .menu01 .dsiBox02 p').eq(up01).addClass('on');


        if (up01 == 0) {

            $('.design .menu01 .start').removeClass('on');
            $('.design .menu01 .start').addClass('on');
        }

    });





    // .design .menu02 .dsiBtn 의 up / down 을 클릭할때, dsiImg 의 p 들이 순서대로 바껴라
    //  p 총 5개
    // .dsiImg p의 온값을 받아라.

    let up02 = 0
    $('.menu02 .dsiBtn .up').click(function () {

        if (up02 < 4) up02++;
        // if (up02==5) up02 = 0;

        $('.design .menu02 .start').removeClass('on');

        $('.design .menu02 .dsiImg p').removeClass('on');
        $('.design .menu02 .dsiImg p').eq(up02).addClass('on');

        if (up02 == 4) {
            $('.design .menu02 .end').addClass('on');

        }

    });



    $('.menu02 .dsiBtn .down').click(function () {

        if (up02 > 0) up02--;

        $('.design .menu02 .end').removeClass('on');


        $('.design .menu02 .dsiImg p').removeClass('on');
        $('.design .menu02 .dsiImg p').eq(up02).addClass('on');


        if (up02 == 0) {

            $('.design .menu02 .start').addClass('on');
        }
    });
















})