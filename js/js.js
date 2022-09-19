$(document).ready(function () {


    // 화면이 열렸을때, 스크롤의 위치가 0이 되어라.(애니메이트밖에 안됨)
    $('html,body').stop().animate({
        scrollTop: 0
    }, 1000);



    // 임시설정
    // $('html,body').stop().animate({
    //     scrollTop: scwid * 1
    // }, 1000);






    //  home, art, design 의 높이를 윈도우의 높이로 변환해라.
    let ht = $(window).height();

    $('.home').height(ht);
    $('.art').height(ht);
    $('.scroll').height(ht);
    $('.scroll section').height(ht);


    // 스크롤 값 연결

    // 섹션의 갯수를 찾아라.
    // let numAc = $('.scroll section').size();

    // 섹션의 넓이
    let wid = $(window).width();
    $('.design').width(wid);
    let scwid = $('.scroll section').width();
    let widTotal = scwid * 2;



    // 최종섹션의 가로크기값을 바디의 높이값에 대입해라.
    $('body').height(widTotal + innerHeight);
    // innerHeight (살짝 남아야하는데 왜 살짝 모자르지,,,->섹션의 width 값 윈도우 넓이만큼 해놔서)




    // 화면을 리사이즈 했을때 높이값 설정
    $(window).resize(function () {

        $('.home').height(ht);
        $('.art').height(ht);
        $('.scroll').height(ht);
        $('.scroll section').height(ht);
        $('.scroll .bg').height(ht);



    });

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

    }, 1000);

    setTimeout(function () {

        $('.home .mainTxt01 em').eq(1).addClass('show');
        $('.home .mainTxt01 em').eq(3).addClass('show');
        $('.home .mainTxt01 em').eq(6).addClass('show');
        $('.home .mainTxt01 em').eq(9).addClass('show');

    }, 1500);


    // 사이트 열었을때, 홈 화면 .home .mainTxt02 일정시간 후 뜨기
    setTimeout(function () {

        $('.home .mainTxt02 p').addClass('show');

    }, 3000);


    // 
    setTimeout(function () {

        $('.home .homeBtn01 p').addClass('show');
        $('.home .homeBtn02 p').addClass('show');

    }, 4000);





    // @@@네비게이션 설정

    // home에서 이동

    $('.homeBtn01 p').click(function () {
        let homeBtn01 = $(this).parents();
        let home01 = $(homeBtn01).parents();

        $(home01).css({
            'top': '-100%'
        });
        $('.art').css({
            'left': 0
        });

        $('html,body').stop().animate({
            scrollTop: 0
        }, 1000);

        $('.home .mainTxt01 em').removeClass('show');
        $('.home .mainTxt02 p').removeClass('show');
        $('.home .homeBtn01 p').removeClass('show');
        $('.home .homeBtn02 p').removeClass('show');

    });

    $('.homeBtn02 p').click(function () {
        let homeBtn02 = $(this).parents();
        let home02 = $(homeBtn02).parents();

        $(home02).css({
            'top': '-100%'
        });
        $('.design').css({
            'left': 0
        });


        $('html,body').stop().animate({
            scrollTop: scwid * 1
        }, 1000);

        $('.home .mainTxt01 em').removeClass('show');
        $('.home .mainTxt02 p').removeClass('show');
        $('.home .homeBtn01 p').removeClass('show');
        $('.home .homeBtn02 p').removeClass('show');

        // 디자인 main img & txt 시간 별로 뜨기
        setTimeout(function () {

            $('.design .main .bigImg').addClass('show');

        }, 1000);


        setTimeout(function () {

            $('.design .main .txt02 p').eq(0).addClass('show');

        }, 2000);

        setTimeout(function () {

            $('.design .main .txt02 p').eq(1).addClass('show');

        }, 2200);

        setTimeout(function () {

            $('.design .main .title').addClass('show');

        }, 2500);


        setTimeout(function () {
            
            $('.design .main .txt01').addClass('show');
            $('.design .main .img').addClass('show');

        }, 3000);

        


        


    });



    // art에서 이동

    $('.art h2').eq(0).click(function () {
        let art01 = $(this).parents();

        $(art01).css({
            'left': '-100%'
        });


        $('.home').css({
            'top': 0
        });

        $('html,body').stop().animate({
            scrollTop: 0
        }, 1000);


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

    $('.art h2').eq(1).click(function () {
        let art02 = $(this).parents();

        $(art02).css({
            'left': '-100%'
        });
        $('.design').css({
            'left': 0
        });




        $('html,body').stop().animate({
            scrollTop: scwid * 1
        }, 1000);

        // 디자인 main img & txt 시간 별로 뜨기
        setTimeout(function () {

            $('.design .main .bigImg').addClass('show');

        }, 1000);


        setTimeout(function () {

            $('.design .main .txt02 p').eq(0).addClass('show');

        }, 2000);

        setTimeout(function () {

            $('.design .main .txt02 p').eq(1).addClass('show');

        }, 2200);

        setTimeout(function () {

            $('.design .main .title').addClass('show');

        }, 2500);


        setTimeout(function () {
            
            $('.design .main .txt01').addClass('show');
            $('.design .main .img').addClass('show');

        }, 3000);


    });



    // design에서 이동


    // 홈으로 이동
    $('.design .dBtn p').eq(1).click(function () {
        let dBtn01 = $(this).parents();
        let design01 = $(dBtn01).parents();
        let design02 = $(design01).parents();

        $(design02).css({
            'left': '100%'
        });



        $('.home').css({
            'top': 0
        });

        $('html,body').stop().animate({
            scrollTop: 0
        }, 1000);

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

        
        // 디자인 메인 이미지 텍스트 시간차 제거
        $('.design .main .bigImg').removeClass('show');
        $('.design .main .title').removeClass('show');
        $('.design .main .txt01').removeClass('show');
        $('.design .main .img').removeClass('show');
        $('.design .main .txt02 p').removeClass('show');

    });

    // 아트로 이동
    $('.design .artBtn').click(function () {
        let artBtn01 = $(this).parents();
        let design03 = $(artBtn01).parents();

        $(design03).css({
            'left': '100%'
        });



        $('.art').css({
            'left': 0
        });

        $('html,body').stop().animate({
            scrollTop: 0
        }, 1000);

        
        // 디자인 메인 이미지 텍스트 시간차 제거
        $('.design .main .bigImg').removeClass('show');
        $('.design .main .title').removeClass('show');
        $('.design .main .txt01').removeClass('show');
        $('.design .main .img').removeClass('show');
        $('.design .main .txt02 p').removeClass('show');

    });







    // 디자인@@@@@@@@@@@@@@@@@@@@@@@@

    // 스크롤로 이동시 li 에 on 값주기

    $(window).scroll(function () {
        let sc = $(this).scrollTop();
        // console.log(sc);
        $('.scroll').css({
            'left': -sc
        });


        // let aa = $('.scroll section').eq(0).offset().left;
        // let bb = $('.scroll section').eq(1).offset().left;
        // let cc = $('.scroll section').eq(2).offset().left;

        let aa = scwid/2 
        let bb = scwid*1
        let cc = scwid+aa

        if (sc >= aa && sc < bb) {

            $('.design>nav li').removeClass('on');
            $('.design>nav .artBtn p:nth-child(1)').removeClass('bb');
            $('.design>nav .artBtn p:nth-child(1)').removeClass('cc');
            $('.design>nav li').eq(0).addClass('on');
            $('.design>nav .artBtn p:nth-child(1)').addClass('aa');

        };

        if (sc >= bb && sc < cc) {

            $('.design>nav li').removeClass('on');
            $('.design>nav .artBtn p:nth-child(1)').removeClass('aa');
            $('.design>nav .artBtn p:nth-child(1)').removeClass('cc');
            $('.design>nav li').eq(1).addClass('on');
            $('.design>nav .artBtn p:nth-child(1)').addClass('bb');

        };

        if (sc >= cc) {

            $('.design>nav li').removeClass('on');
            $('.design>nav .artBtn p:nth-child(1)').removeClass('aa');
            $('.design>nav .artBtn p:nth-child(1)').removeClass('bb');
            $('.design>nav li').eq(2).addClass('on');
            $('.design>nav .artBtn p:nth-child(1)').addClass('cc');

        };

        // 디자인 nav 이동
        $('.design nav li').click(function (e) {
            e.preventDefault();

            let i = $(this).index();

            // li on 값
            $('.design nav li').removeClass('on');
            $(this).addClass('on');

            let scwid = $('.scroll section').width();
            let widi = scwid * i


            $('html,body').stop().animate({
                scrollTop: widi
            }, 1500);


        });




    });


    // #ffeffb    #e1fff1
    // home 의 p 버튼에 마우스 오버 시 부모자인 .homeBtn01/02 의 배경색 변경
    $('.home .homeBtn01 p').mouseenter(function () {

        let home01 = $(this).parents();

        $(home01).css({
            'background-color': '#e1fff1'
        });
    });

    $('.home .homeBtn01 p').mouseleave(function () {

        let home01 = $(this).parents();

        $(home01).css({
            'background-color': '#fff'
        });
    });


    $('.home .homeBtn02 p').mouseenter(function () {

        let home02 = $(this).parents();

        $(home02).css({
            'background-color': '#ffeffb'
        });
    });

    $('.home .homeBtn02 p').mouseleave(function () {

        let home02 = $(this).parents();

        $(home02).css({
            'background-color': '#fff'
        });
    });




    // 마우스 움직일떄  배경 브러쉬 움직여라

    $(window).mousemove(function (e) {

        let x = e.pageX,
            y = e.pageY;

        // // 내용출력하기
        // $('.pageX').text(x);
        // $('.pageY').text(y);

        $('.bg .brush01').each(function (index, item) {

            let itemX = $(this).offset().left + 20,
                itemY = $(this).offset().top + 20,

                diffX = x - itemX,
                diffY = y - itemY,

                radians = Math.atan2(diffY, diffX),
                angle = radians * 40 / Math.PI;



            $(this).css({
                "transform": "rotate(" + angle + "deg)"
            });


        });

        $('.bg .brush02').each(function (index, item) {

            let itemX = $(this).offset().left + 20,
                itemY = $(this).offset().top + 20,

                diffX = x - itemX,
                diffY = y - itemY,

                radians = Math.atan2(diffY, diffX),
                angle = radians * -20 / Math.PI;



            $(this).css({
                "transform": "rotate(" + angle + "deg)"
            });


        });




        // 디자인 네비 프로필 클릭 시 팝업 열리기
        $('.dBtn p:nth-child(1)').click(function () {


            $('.info').fadeIn();

        });

        // 디자인 프로필 아이콘 클릭 시 팝업 닫기

        $('.info i').click(function () {


            $('.info').fadeOut();

        });

        // 디자인 메인 프로필 이미지 클릭 시 팝업 열리기

        $('.design .main .img p').click(function () {


            $('.info').fadeIn();

        });


        // 디자인 춘식 컨셉뷰 이미지 클릭 시 팝업 열리기

        $('.design .menu01 .view div').click(function () {


            $('.viewC').fadeIn();

        });

        $('.viewC i').click(function () {


            $('.viewC').fadeOut();

            $('html,body').stop().animate({
                scrollTop: 0
            }, 500);


        });

        // 디자인 모네 컨셉뷰 이미지 클릭 시 팝업 열리기

        $('.design .menu02 .view div').click(function () {


            $('.viewM').fadeIn();

            $('html,body').stop().animate({
                scrollTop: 0
            }, 500);

        });

        $('.viewM i').click(function () {


            $('.viewM').fadeOut();

            $('html,body').stop().animate({
                scrollTop: widTotal
            }, 500);


        });




    });


    















})