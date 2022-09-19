// e.preventDafult()


$(document).ready(function () {

    // 실행문

    // bg 의 높이를 윈도우의 높이로 변환해라.
    let ht = $(window).height();
    let meht = $('nav').height();
    // $('section').height(ht-(ht/10));
    $('.bg').height(ht);
    $('section').height(ht - meht);
    








    // #wrap 의 높이 맞는 지 확인하기 (없어도 됨)
    // section 의 갯수를 찾아라.
    let secNum = $('section').size();
    // console.log(secNum);
    // wrap 의 높이를 section 의 갯수 (6)를 더한만큼 맞추어라.
    let sec = $('section').height(ht - meht);
    $('#wrap').height(sec * secNum);





    let wid = $('.landing').width();
    $('.landing_inner .bg_vid').height(wid);










    // 브라우저가 리사이즈 될때마다, bg의 높이를 윈도우의 높이로 변환해라.

    $(window).resize(function () {

        let ht = $(window).height();
        $('.bg').height(ht);


        // bg 의 높이를 윈도우의 높이로 변환해라.
        let meht = $('.navBar').height();
        $('section').height(ht - meht);
        $('#wrap section:nth-child(1)').css({
            'margin-top': meht



        });


        // 브라우저가 리사이즈 될때마다, bg_vid의 height 값을 landing 의 width 값과 맞춰라.
        let wid = $('.landing').width();
        $('.landing_inner .bg_vid').height(wid);


        






    });







    // 로고 클릭할때, 스크롤의 위치가 젤 위로 와라.
    $('.logo').click(function () {


        $('html,body').stop().animate({
            scrollTop: 0
        }, 1000);

    });









    // nav 의 li 를 클릭할떄,
    // section 의 순번을 찾아 각자의(section) 높이만큼씩 스크롤의 위치를 움직여라


    // 수정 - 화면 확대하면 110% 부터 li 클릭시 on 값이랑 스크롤 위치 안먹힘

    $('nav li').click(function () {

        // li의 온값이 붙어있어라.
        $('nav li').removeClass('on');
        $(this).addClass('on');



        // let sect = $('section').height();
        let meht = $('.navBar').height();
        // let sect = $('section').offset().top;

        let i = $(this).index();


        let sect = $('section').eq(i).offset().top;
        // console.log(sect);

        $('html,body').stop().animate({
            scrollTop: sect - meht
        }, 1000);



    });





    // // 마우스휠을 했을때, 이벤트가 일어나라.

    // // 현위치(section) 에서 마우스를 올렸을때 전으로 가고
    // // 현위치(section) 에서 마우스를 내렸을때 후로 가라.
    $('section').mousewheel(function (evernt, delta) {
        let meht = $('.navBar').height();


        if (delta > 0) {
            // 이전순서로 이동
            let prev = $(this).prev().offset().top;

            // 스크롤
            $('html,body').stop().animate({
                scrollTop: prev - meht
            }, 1400, "easeOutBounce");



        } else if (delta < 0) {

            // 다음순서로 이동
            let next = $(this).next().offset().top;


            $('html,body').stop().animate({
                scrollTop: next - meht
            }, 1400, "easeOutBounce");

        };





    });




    // // 윈도우에서 스크롤했을때, 스크롤의 위치값을 찾아내고,
    // // 위치에 따라 화면의 구간이 바뀌고, 메뉴의 on값이 바뀌어라.
    $(window).scroll(function () {

        let sc = $(this).scrollTop();


        let aa = $('section').eq(0).offset().top;
        let bb = $('section').eq(1).offset().top;
        let cc = $('section').eq(2).offset().top;
        let dd = $('section').eq(3).offset().top;
        let ee = $('section').eq(4).offset().top;
        let ff = $('section').eq(5).offset().top;


        if (sc >= 0 && sc < aa) {

            $('nav li').removeClass('on');
            $('nav li').eq(0).addClass('on');

        };

        if (sc >= aa && sc < bb) {

            $('nav li').removeClass('on');
            $('nav li').eq(1).addClass('on');

        };

        if (sc >= bb && sc < cc) {

            $('nav li').removeClass('on');
            $('nav li').eq(2).addClass('on');

        };

        if (sc >= cc && sc < dd) {

            $('nav li').removeClass('on');
            $('nav li').eq(3).addClass('on');

        };

        if (sc >= dd && sc < ee) {

            $('nav li').removeClass('on');
            $('nav li').eq(4).addClass('on');

        };

        if (sc >= ee && sc < ff) {

            $('nav li').removeClass('on');
            $('nav li').eq(5).addClass('on');

        };








    })










    // 더해야함  - 비디오 재생/멈춤



    // // landing 의 하트 icon(.btn) 누르면 slide(on) 나와라. - 다시 누르면 들어가라
    // // icon이 바뀌어라. (on)
    // // 비디오가 재생이 되어라. - 들어가면 비디오 재생이 멈춰라
    // // (.bg_vid 흐려지기 - 고민중)








    // 클릭시!
    // .btn 클릭했을떄, slide(on) 가 나와라.
    // 수정해야함. 모든 section 의 slide 가 나옴
    $('.btn').click(function () {



        $('.slide').removeClass('on');
        $(this).parents('.slide').addClass('on');
        $(this).addClass('on');
        $('.slide span').addClass('on');

        $('.landing_inner .bg_vid').css({
            'opacity': 0.5
        });



        // 비디오 재생하기
        let pp = $(this).parents();
        let ii = pp.children('.vid');

        let vid = ii.children('video').get(0);
        vid.play();

    })

    // slide 에 마우스가 떠났을때, slide(on) 가 사라져라.
    $('.slide').mouseleave(function () {

        $(this).removeClass('on');
        $('.btn').removeClass('on');
        $('.slide span').removeClass('on');
        $('.landing_inner .bg_vid').css({
            'opacity': 1
        })



        // 비디오 멈추기
        let pp = $(this).children('.vid');

        let vid = pp.children('video').get(0);
        vid.pause();


    });

    // .slide span 클릭시 slide(on) 가 사라져라.
    $('.slide span').click(function () {

        $('.slide').removeClass('on');
        $('.slide span').removeClass('on');
        $(this).addClass('on');
        $('.btn').removeClass('on');
        $('.landing_inner .bg_vid').css({
            'opacity': 1
        })


        // 비디오 멈추기
        let pp = $(this).parents();
        let ii = pp.children('.vid');

        let vid = ii.children('video').get(0);
        vid.pause();


    })










    //3. new

    // .newBox li 에 마우스가 들어갔을떄, 들어간 li 의 span 에 on 값 생겨라.
    $('.newBox li').mouseenter(function () {


        $('.newBox span').removeClass('on');
        // li에 있는 span 을 찾아라. (순번있는건 li이지 span이 아님)
        $(this).find('span').addClass('on');


    });


    // .newBox li 에 마우스가 떠났을떄, 들어간 li 의 span 에 on 값 사라져라.
    $('.newBox li').mouseleave(function () {

        $('.newBox span').removeClass('on');

    });







    //4. best////////////////////////////// 


    // .best_title p 를 클릭할때,
    // .best_con(.best_con>div) 과 .best_toon(.best_toon>div) 의 on 값이 켜져라.
    $('.best_title p').click(function () {

        let i = $(this).index();
        // console.log(i);

        $('.best_title p').removeClass('on');
        $(this).addClass('on');

        $('.best_con>div').stop().fadeOut();
        $('.best_con>div').eq(i).fadeIn();

        $('.best_toon>div').stop().fadeOut();
        $('.best_toon>div').eq(i).fadeIn();


    });

    // .thumnail ul li 을 클릭할떄, 순번에 맞게 .bigImg p 가 보여라
    $('.con01 .thumnail ul li').click(function () {

        let thum = $(this).index();
        // console.log(thum);

        $('.con01 .thumnail ul li').removeClass('on');
        $(this).addClass('on');
        $('.con01 .bigImg p').stop().fadeOut();
        $('.con01 .bigImg p').eq(thum).stop().fadeIn();

    });

    $('.con02 .thumnail ul li').click(function () {

        let thum = $(this).index();
        // console.log(thum);

        $('.con02 .thumnail ul li').removeClass('on');
        $(this).addClass('on');
        $('.con02 .bigImg p').stop().fadeOut();
        $('.con02 .bigImg p').eq(thum).stop().fadeIn();

    });

    $('.con03 .thumnail ul li').click(function () {

        let thum = $(this).index();
        // console.log(thum);

        $('.con03 .thumnail ul li').removeClass('on');
        $(this).addClass('on');
        $('.con03 .bigImg p').stop().fadeOut();
        $('.con03 .bigImg p').eq(thum).stop().fadeIn();

    });





    // toon 자동재생 & 마우스 오버시 멈춤

    // 

    let ti = 0;
    $('button').click(function () {

        ti++;
        // console.log(ti);

        // 내가 클릭한 li 의 복사본 만들기
        $('.trailer01 li').eq(ti - 1).clone().appendTo('.trailer01 ul');
        $('.trailer01 ul').css({
            'left': -(14 * ti)+'vw'
        });

        $('.trailer02 li').eq(ti - 1).clone().appendTo('.trailer02 ul');
        $('.trailer02 ul').css({
            'left': -(14 * ti)+'vw'
        });

        $('.trailer03 li').eq(ti - 1).clone().appendTo('.trailer03 ul');
        $('.trailer03 ul').css({
            'left': -(14 * ti)+'vw'
        });

    });

    // 자동으로 버튼을 클릭한 효과를 내라.
    let slide = setInterval(function () {

        $('button').trigger('click');

    }, 3000);

    // 마우스가 올라가면 멈추고 마우스가 떠나면 움직여라.
    // 제일 큰 덩어리에 마우스 올려야함! 항상!!
    $('.best_toon>div').mouseenter(function () {

        clearInterval(slide);

    });

    $('.best_toon>div').mouseleave(function () {

        slide = setInterval(function () {

            $('button').trigger('click');

        }, 3000);
    });











    // 6.category

    // .cate_title p 를 클릭하면, 이벤트가 일어나라
    $('.cate_title p').click(function () {

        let cate01 = $(this).index();


        // .cate_title p.on 값이 생겨라
        $('.cate_title p').removeClass('on');
        $(this).addClass('on');

        // .cateNum p 의 on값이 생겨라.
        $('.cateNum p').removeClass('on');
        $('.cateNum p').eq(cate01).addClass('on');

        // .cate_big p 의 on값이 생겨라.
        $('.cate_big p').stop().fadeOut();
        $('.cate_big p').eq(cate01).stop().fadeIn();

        // .cate_trailer>div 의 on값이 생겨라.
        $('.cate_trailer>div').removeClass('on');
        $('.cate_trailer>div').eq(cate01).addClass('on');
    });

    // .cateNum p를 클릭하면, 이벤트가 일어나라.

    $('.cateNum p').click(function () {

        let cate02 = $(this).index();


        // .cateNum p p.on 값이 생겨라

        $('.cateNum p').removeClass('on');
        $(this).addClass('on');

        // .cate_title p 의 on값이 생겨라.
        $('.cate_title p').removeClass('on');
        $('.cate_title p').eq(cate02).addClass('on');

         // .cate_big p 의 on값이 생겨라.
         $('.cate_big p').stop().fadeOut();
         $('.cate_big p').eq(cate02).stop().fadeIn();

        // .cate_trailer>div 의 on값이 생겨라.
        $('.cate_trailer>div').removeClass('on');
        $('.cate_trailer>div').eq(cate02).addClass('on');

    });



    // .cateThum .right 를 클릭할떄, 오른쪽으로 1040px 만큼 이동해라.
    // left 아이콘이 하얀색으로 변해라.



    $('.cate_trailer .right i').click(function () {



        $('.cateBox ul').css({
            'left': '-52vw'
        });

        $('.cate_trailer i').removeClass('on');
        $('.cate_trailer .left i').addClass('on');

    });

    $('.cate_trailer .left i').click(function () {



        $('.cateBox ul').css({
            'left': '0px'
        });
        $('.cate_trailer i').removeClass('on');
        $('.cate_trailer .right i').addClass('on');

    });











})