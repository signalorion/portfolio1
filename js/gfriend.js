//메인화면 제이쿼리창

//전역변수////////////////
//1. 페이지번호를 먹이는 전역변수
var pno = 0;
//2. 전체 페이지 수
var totnum = 6;
//const는 변수 var와 달리 변경불가한 상수를 말한다
//3. 광스크롤방지
var psts = 0; //0은 허용이고 1은 불허용이다
//4. 한페이지 높이값
var winH = $(window).height();



//////////////////////////////////////

$(function () {
    //스크롤로 화면 넘어가는거
    //맨 밑에서 top가기 버튼 누르고나서 스크롤하면 다시 아래로 내려감
    
    $(document).on("mousewheel DOMMouseScroll", function (e) {


        /////// 광스크롤막기 /////////////////
        if (psts === 1) return true; //돌아가!
        psts = 1; //잠금(기존0값을 변경)
        setTimeout(function () {
            psts = 0;
        }, 600); /// 타임아웃 ///
        ////////////////////////////////////


        e = window.event || e;
        var delta = e.detail ? e.detail : e.wheelDelta;
        //console.log("델타:"+delta);
        //아랫방향
        if (delta < 0) {
            pno++;
            if (pno === totnum) pno = totnum - 1;
        } else {
            pno--;
            if (pno === -1) pno = 0;
        }
        console.log("pno:" + pno);

        $("html,body").stop().animate({
            scrollTop: (winH * pno) + "px"
        }, 400);



    }); /////// mousewheel /////////////////
    
    

    $(".mainlistlogo").hover(function () {
        $("img", this).fadeOut(500)
    }, function () {
        $("img", this).fadeIn(900)
    });
    ///////////메인로고 사르르사라지기///////////


    var tg1 = $(".slide1")
    var goslide1 = function (dir) {
        if (dir) {
            var first = tg1.find("li").first();
            tg1.append(first);
        } else {
            var last = tg1.find("li").last();
            tg1.prepend(last);
        }
    }
    var tg2 = $(".slide2")
    var goslide2 = function (dir) {
        if (dir) {
            var first = tg2.find("li").first();
            tg2.append(first);
        } else {
            var last = tg2.find("li").last();
            tg2.prepend(last);
        }
    }
    var tg3 = $(".slide3")
    var goslide3 = function (dir) {
        if (dir) {
            var first = tg3.find("li").first();
            tg3.append(first);
        } else {
            var last = tg3.find("li").last();
            tg3.prepend(last);
        }
    }


    $(".brkroom .img_arrow.right").click(function () {
        goslide1(1);
        

    });

    $(".tilted .img_arrow.right").click(function () {
        goslide2(1);

    });

    $(".apple .img_arrow.right").click(function () {
        goslide3(1);
    });

    $(".brkroom .img_arrow.left").click(function () {
        goslide1(0);
    });
    $(".tilted .img_arrow.left").click(function () {
        goslide2(0);
    });
    $(".apple .img_arrow.left").click(function () {
        goslide3(0);
    }); /////////슬라이드설정/////////////////

    $(".track_plus").click(function () {
        //화살표 돌아가는거 하고싶다
        $(this).parent().next().slideToggle(function () {});

        /*$("img",this).css({transform: 'rotate(-45deg)', transition:"all .6s"});*/
        $(this).prev().css({
            fontWeight:"bold"
        }); /*다른애들은 볼드 안됐으면 좋겠는데...*/
    
    }); ////////신곡소개///////////////

    $(".menubtn").mouseenter(function () {
        /*width 55퍼로 늘리기*/
        $(".menu_hover").css({
            width: "40%",
            transition: "all, .8s"
            
        });
    });
    $(".menubtn").mouseout(function () {
        /*width 55퍼로 늘리기*/
        $(".menu_hover").css({
            width: "0%",
            transition: "all, .8s"
        });
    }); ////////메뉴버튼 설정///////////가만히좀있게못하나....

    //페이지 스르륵 내려가기//////////////////////////////////
    $(".nextpage a, #cont1 a, .mainlistlogo a, .m_mainmenu_list a").click(function (e) {
        e.preventDefault();

        var pid = $(this).attr("href");
        console.log(pid);

        var ptop = $(pid).offset().top;

        $("html, body").animate({
            scrollTop: ptop + "px"
        }, 800);
    }); ////////////로딩화면 화살표 클릭시///////////////

    $(".concept_ver li a, .up_arrow a").click(function (e) {
        e.preventDefault();

        var pid = $(this).attr("href");
        console.log(pid);

        var ptop = $(pid).offset().top;

        $("html, body").animate({
            scrollTop: ptop + "px"
        }, 800);
    }); //////////////콘셉이름 클릭시////////////

    $(".mainlinks .mainviewinfo").click(function (e) {
        e.preventDefault();

        var pid = $(this).attr("href");
        console.log(pid);

        var ptop = $(pid).offset().top;

        $("html, body").animate({
            scrollTop: ptop + "px"
        }, 900);
    }); //////////////메인메뉴 클릭시////////////

    $(".up_arrow a").hover(function () {
        $(this).animate({
            bottom: "58px"
        }, 500);
    }, function () {
        $(this).animate({
            bottom: "50px"
        });
    }); ////////////////////메인으로가는 화살표 움직이기
    
    /*모바일 설정********************************/
   $(".m_mainmenu").click(function(){
  $(".m_mainmenu_box").toggle();
});







}); //////////제이쿼리로딩//////////////////
