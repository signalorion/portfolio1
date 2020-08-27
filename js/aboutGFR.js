//aboutGFR 제이쿼리 구간

//전역변수////////////////
//1. 페이지번호를 먹이는 전역변수
var pno = 0;
//2. 전체 페이지 수
const totnum = 3;
//const는 변수 var와 달리 변경불가한 상수를 말한다
//3. 광스크롤방지
var psts = 0; //0은 허용이고 1은 불허용이다
//4. 한페이지 높이값
var winH = $(window).height();
//5. 마지막 페이지 스크롤 막기상태값
var lastSts = 0; //0-허용, 1-막기
//6. 마지막 페이지 스크롤을 막기위해 구분해주는 값
// 왜만드는가? 마지막 페이지 도착후 바로 잠그면
// 바로 위로 올라가는게 안되기때문
// 따라서 마지막 페이지 스크롤을 시작할때 잠궈준다.
// 마지막 페이지 스크롤을 시작하면 상태값을 1로 바꿔준다.
var allowit = 0;



//////////////////////////////////////

$(function () {


    $(document).on("mousewheel DOMMouseScroll", function (e) {

        if (lastSts === 1) return true;

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

        //마지막 페이지에서 자동스크롤 잠금
        if (pno === 2 && allowit === 1) lastSts = 1;
    }); ///////// mousewheel ///////////////////
    ///////////////////////////////////////////

    $(".discograp").scroll(function () {
        var scTop = $(this).scrollTop();
        console.log("스크롤위치:" + scTop);

        // 마지막 페이지의 스크롤이 상단0에 도착하면 자동스크롤 잠금 상태 풀기
        if (scTop === 0) {
            lastSts = 0;// 마지막 페이지 잠금 상태 초기화!
            allowit = 0;//잠금허락 상태값 초기화!
        } /// if //////////////////

        if (scTop > 0) allowit = 1; //잠금상태 허락할까요? 상태값 1로(응!true)

    }); /////// scroll /////////////////





    $(".detail_close").click(function () {
        $(".albumdetail").hide();
    }); //앨범상세페이지 누르면 닫기//////

    $(".discograp ul li").mouseover(function () {
        $(this).find("div").show();
    }).mouseout(function () {
        $(".albumimg_hover").hide();
    });



    $(".proclose").click(function () {
        $(".member_info").hide(); //시간이징함수
    }); ////멤버프로필 상세 누르면 닫기//////

    $(".member_info").click(function () {
        $(".member_info").hide();
    }); //그냥 멤버프로필을 눌러도 닫기//////

    $(".sw_pro>img").click(function () {
        $(".member_info").hide(),
            $(".member_info.sw_pro").show(); //토글기능을쓰면서 팝업이랑 안겹치게 보이는 방법은 없을까...
    });

    $(".yr_pro>img").click(function () {
        $(".member_info").hide(),
            $(".member_info.yr_pro").show();
    });
    $(".eh_pro>img").click(function () {
        $(".member_info").hide(),
            $(".member_info.eh_pro").show();
    });
    $(".yj_pro>img").click(function () {
        $(".member_info").hide(),
            $(".member_info.yj_pro").show();
    });
    $(".sb_pro>img").click(function () {
        $(".member_info").hide(),
            $(".member_info.sb_pro").show();
    });
    $(".uj_pro>img").click(function () {
        $(".member_info").hide(),
            $(".member_info.uj_pro").show();
    }); //각 멤버 사진 누르면 열ㄹㅣ기///


    //////앨범디테일 켜기/////////////////////////
    $("#albumimg_13").click(function () {
        $(".albumdetail.no13").fadeIn(600);
    });
    $("#albumimg_12").click(function () {
        $(".albumdetail.no12").fadeIn(600);
    });
    $("#albumimg_11").click(function () {
        $(".albumdetail.no11").fadeIn(600);
    });
    $("#albumimg_10").click(function () {
        $(".albumdetail.no10").fadeIn(600);
    });
    $("#albumimg_9").click(function () {
        $(".albumdetail.no9").fadeIn(600);
    });
    $("#albumimg_8").click(function () {
        $(".albumdetail.no8").fadeIn(600);
    });
    $("#albumimg_7").click(function () {
        $(".albumdetail.no7").fadeIn(600);
    });
    $("#albumimg_6").click(function () {
        $(".albumdetail.no6").fadeIn(600);
    }); //////////////////앨범티테일켜기/////////

    //앨범디테일창 클릭하면 꺼지게
    $(".albumdetail").click(function () {
        $(".albumdetail").fadeOut(500);
    }); ///////////////////////////////앨범디테일끄기


    //스크롤 부드럽게 이동하기~!
    $(".cont1_menu a").click(function (e) {
        //1. a링크 눌렀을때 기능을 제거한다.
        e.preventDefault();

        //2. a 태그의 href값을 읽어오기(페이지id값과도 같다)
        var pid = $(this).attr("href");
        //console.log(pid);

        //3. 이동할 페이지 id 높이값을 구하기 offset() 메서드사용!
        //높이값구하는 변수를 하나 만든다
        var ptop = $(pid).offset().top; //top에 ()를 안쓰도록 주의하자 ^^
        console.log(ptop);

        //4. 스크롤이동 애니메이션 만들기
        $("html, body").animate({
            scrollTop: ptop + "px" //여기에 세미콜론을 안쓰도록 주의하자 ^^
        }, 800);

    }); /////////click/////////////////////

    /////메인으로 돌아가는 화살표 애니메이션
    $(".back2main").mouseenter(function () {
        $(".back2main img").css({
            transform: 'rotate(-90deg)',
            transition: "all .8s"
        });
    });
    $(".back2main").mouseleave(function () {
        $(".back2main img").css('transform', 'rotate(0deg)');
    }); ////////////////////화살표애니메이션







}); //////제이쿼리로딩구간//////////////
