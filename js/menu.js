// 모바일 메뉴 슬라이드 함수
// function slideMenu() {
//     // menu_toggle_btn이 클릭되었을 때
//     $('.menu_toggle_btn').click(function () {
//         if(matchMedia("screen and (max-width:767px)").matches){
//             // menu_sub 클래스들을 slideUP() 함
//             $('.menu_sub').slideUp();
//             // header_menu가 슬라이드 토글됨(500->0.5초)
//             $('.header_menu').slideToggle(500);
//         }
//     });

//     // menu_title(메인 메뉴)가 클릭되었을 때
//     $('.menu_title').click(function () {
//         // 모바일일 경우에만 실행
//         if(matchMedia("screen and (max-width:767px)").matches){
//         // 클릭된 menu_title(메인 메뉴)의 다음 형제 요소(next)인
//         // menu_sub에서 slideToggle()을 실행
//             $(this).next('.menu_sub').slideToggle(200);
//             // 클릭된 menu_title의 부모 요소(parent)의 형제 요소(siblings)들 중
//             // menu_sub 클래스들을 slideUP() 함
//             $(this).parent().siblings().find('.menu_sub').slideUp(200);
//         }else{
//             $('.menu_title').off("click");
//         }
//     });
// }

// // 모바일이 아닐 때 슬라이드 메뉴(PC,태블릿)
// function slideMenuPC() {
//     // 먼저 모바일인지 아닌지 구분
//     if(matchMedia("screen and (min-width:768px)").matches){
//         // 헤더 메뉴에 마우스가 올라왔을 때
//         $(".header_menu").hover(
//             function() {
//               $(".menu_sub").css("display", "inline-block");
//             },
//             function() {
//               $(".menu_sub").css("display", "none");
//             }
//         );
//     }
// }

// 기존의 이벤트를 모두 제거하는 함수
function noEvent() {
    // 모바일 버전 이벤트 제거
    $('.menu_title').off('mouseenter mouseleave');
    $('.menu_toggle_btn').off('click');
    $('.menu_title').off('click');
    $(window).off('resize');
    
    // PC/태블릿 버전 이벤트 제거
    $('.menu_title').off('click');
    $('.header_menu').off('mouseenter');
    $('.header_menu').off('mouseleave');
  }

// 슬라이드 메뉴 총 정리
function slideMenu() {
    // 모바일일 경우
    if(matchMedia("screen and (max-width:767px)").matches){
        // 이벤트 제거
        noEvent();
        // 메뉴 토글 버튼 클릭 시
        $('.menu_toggle_btn').click(function () {
            // 헤더 메뉴 토글 전, 서브 메뉴가 열려있는 지 확인
            // 만약 서브 메뉴가 보이는 상태(열려있음)라면,
            if($('.menu_sub').is(':visible')){
                // 서브 메뉴 슬라이드 업
                $('.menu_sub').slideUp();
                // 토글 버튼에 있는 change 클래스 제거하기
                $('.menu_toggle_btn').removeClass("change");
            }
            // 해더메뉴 토글
            $('.header_menu').slideToggle(400, 'swing', function() {
                // 숨겨져 있는 경우라면
                if ($(this).is(':hidden')) {
                    // 높이를 auto로 설정해서 resize문제 해결
                    $(this).css('height', 'auto');
                }
            });
        });
        
        // 메인 메뉴 클릭 시
        $('.menu_title').click(function() {
            // $sub는 클릭 된 메인 메뉴의 서브 메뉴
            // 변수 앞에 $를 붙인 이유는 jQuery 객체를 참조하는 변수이기 때문(관례), 상관은 없음.
            var $sub = $(this).next('.menu_sub');
            // 현재 눌린 메뉴가 아닌(not) 다른 서브메뉴들 슬라이드 업(닫기)
            $('.menu_sub').not($sub).slideUp();
            // 눌린 메뉴 서브메뉴 열기/닫기
            $sub.slideToggle();
        });

        // 윈도우 크기가 변경될 때 이벤트 핸들러 추가
        $(window).on('resize', function () {
            // 열려있는 서브 메뉴의 높이를 'auto'로 설정하여 높이 조정
            $('.menu_sub:visible').css('height', 'auto');
        });
        
        
    } // 태블릿과 pc의 경우
    else if(matchMedia("screen and (min-width:768px)").matches){
        // 이벤트 제거
        noEvent();
        // 서브 메뉴 slideUp 하기
        $('.menu_sub').slideUp();
        // 만약 menu_title이 보이지 않는 상태라면
        if($('.menu_title').is(':hidden')){
            // 보이게 하기
            $('.menu_title').css('display','inline-block');
        }
        // 메뉴에 마우스가 올라왔을 때
        $(".header_menu").hover(
            // 마우스가 올라가 있으면(mouseenter)
            function() {
                $(".menu_sub").css("display", "inline-block");
            },
            // 마우스가 올라가 있지 않으면(mouseleave)
            function() {
                $(".menu_sub").css("display", "none");
            }
        );
           
    }

}


// 메뉴 버튼 애니메이션(모바일 토글 버튼)
function menuButton(x) {
    x.classList.toggle("change");
}

// 윈도우 로드 시 실행
$(document).ready(function () {
    // 페이지 로드 시 이벤트 등록
    slideMenu();
});

// 디바운스
function debounce(func, delay) {
    let timeoutId;
    return function() {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(func, delay);
    }
}

// 화면 크기가 바뀌었을 때
// 0.5초 기다린 이후 최종적으로 확정된 화면에서 코드 실행
$(window).on('resize', debounce(function() {
    // 토글 버튼의 모양이 바뀌어져 있는지(X모양인지) 확인
    var menu_toggle_btn = $(".menu_toggle_btn");
    // 토글 버튼에 "change"클래스가 있는 경우가 모양이 바뀌어져 있는 경우이므로
    if (menu_toggle_btn.hasClass("change")) {
        // change 클래스 제거하여 원래 모양으로 바꿈
        menu_toggle_btn.removeClass("change");
    }

    // 전부 슬라이드 업 시킴
    $('.menu_sub').slideUp();
    // 모바일 아닐 때 헤더 메뉴까지 슬라이드 업 시키면 없어져버림
    if(matchMedia("screen and (max-width:767px)").matches){
        // 모바일이면 업시켜버리고
        $('.header_menu').slideUp();
    }else{
        // 모바일 아니면 내려서 보이게 해야함
        $('.header_menu').slideDown();
    }

    // 슬라이드 함수 재호출
    slideMenu();

  }, 250));

