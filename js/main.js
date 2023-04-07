// 윈도우 로드 시 실행
$(document).ready(function () {
    // bxSlider 인스턴스 생성
    var slider = $('.bxslider').bxSlider({
        controls: false,    // 이전 다음 버튼 노출 여부
        moveSlides: 1,     // 슬라이드 이동시 개수
        pager: false,      // 현재 위치 페이징 표시 여부 설정
        wrapperClass:'slider_wrap', // 기본 bx-wrapper
        adaptiveHeight: true // 높이 자동 조절
    });

    //이미지 버튼 클릭 시 이전/다음 슬라이드로 이동
    $('#slider_prev').click(function () {
        slider.goToPrevSlide();
    });
    $('#slider_next').click(function () {
        slider.goToNextSlide();
    });

});
