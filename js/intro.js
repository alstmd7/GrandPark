/* 탭 메뉴 선택시 이미지, 텍스트 교체 */
$(document).ready(function() {
  // 첫번째 탭 활성화
  $('.intro_img li:first').addClass('active');
  $('.intro_title div:first').addClass('active');

  // 탭 메뉴 클릭 이벤트 처리
  $('.inttab_menu a').click(function(event) {
    event.preventDefault();

    // 탭 메뉴 활성화/비활성화 처리
    $('.inttab_menu li').removeClass('active');
    $(this).parent().addClass('active');

    // 탭 콘텐츠 활성화/비활성화 처리
    $('.intro_img').removeClass('active');
    $($(this).attr('href')).addClass('active');
  });
});


/* 탭 메뉴 선택 시 배너 이미지가 관련 이미지로 교체 */
$(document).ready(function() {
  // 탭 메뉴의 버튼을 클릭했을 때
  $(".inttab_menu a").click(function(e) {
    // 기본 동작을 중지하여 a 태그의 링크 이동을 막습니다.
    e.preventDefault();
    
    // 선택된 버튼에 active 클래스를 추가하고, 나머지 버튼에서는 active 클래스를 제거
    $(this).parent().addClass("active").siblings().removeClass("active");
    
    // 선택된 버튼에 해당하는 이미지를 inthide_menu에서 찾아서 intro_banner에 출력
    var index = $(this).parent().index();
    $(".intro_banner img").attr("src", $(".inthide_menu div").eq(index).find("img").attr("src"));
  });
});


/* 마우스 스크롤 시 탭 메뉴 하위 요소 페이드 인 아웃 출력 */
    /* 데스크탑 크기 이상에서만 작동되는 조건문 (전체를 감싸야 함) */
    $(window).scroll(function() {
    var windowHeight = $(window).height();
    var scrollPos = $(window).scrollTop();

    // 첫 번째 a href에 대한 동작 적용
    var link1Offset = $('#tabimg_1').offset().top;
    if (scrollPos > link1Offset - windowHeight + 400) { /* 스크롤 높이에 따른 요소 출력 여부 조정 */
      $('.intro_img').css('opacity', '1');
    } else {
      $('.intro_img').css('opacity', '0');
    }
    if (scrollPos > link1Offset - windowHeight + 400) {
      $('.intro_text').css('opacity', '1');
    } else {
      $('.intro_text').css('opacity', '0');
    }
    
    // 두 번째 a href에 대한 동작 적용
    var link2Offset = $('#tabimg_2').offset().top;
    if (scrollPos > link2Offset - windowHeight + 400) {
      $('.intro_img').css('opacity', '1');
    } else {
      $('.intro_img').css('opacity', '0');
    }
    if (scrollPos > link2Offset - windowHeight + 400) {
      $('.intro_text').css('opacity', '1');
    } else {
      $('.intro_text').css('opacity', '0');
    }

    // 세 번째 a href에 대한 동작 적용
    var link3Offset = $('#tabimg_3').offset().top;
    if (scrollPos > link3Offset - windowHeight + 400) {
      $('.intro_img').css('opacity', '1');
    } else {
      $('.intro_img').css('opacity', '0');
    }
    if (scrollPos > link3Offset - windowHeight + 400) {
      $('.intro_text').css('opacity', '1');
    } else {
      $('.intro_text').css('opacity', '0');
    }

    // 네 번째 a href에 대한 동작 적용
    var link4Offset = $('#tabimg_4').offset().top;
    if (scrollPos > link4Offset - windowHeight + 400) {
      $('.intro_img').css('opacity', '1');
    } else {
      $('.intro_img').css('opacity', '0');
    }
    if (scrollPos > link4Offset - windowHeight + 400) {
      $('.intro_text').css('opacity', '1');
    } else {
      $('.intro_text').css('opacity', '0');
    }

  });


/* 탭 메뉴 클릭 시 하위 요소 페이드 인 아웃 출력 */
$('.inttab_menu li a').on('click', function(event) {
  event.preventDefault(); // 기본 클릭 이벤트를 취소
  var target = $(this).attr('href'); // 클릭한 a 태그의 href 속성값을 가져옴

  if ($(target).length) {
    // 해당 요소의 애니메이션을 적용, 
    // 500은 애니메이션이 진행될 시간(ex\ 500: 0.5초, 1000: 1초)
    $(target).find('img.jangso').css('opacity', 0).animate({
      opacity: 1
    }, 500);
    $(target).find('.intro_text').css('opacity', 0).animate({
      opacity: 1
    }, 1000);
    $(target).find('.intro_btn').css('opacity', 0).animate({
      opacity: 1
    }, 500);
    $(target).find(".je_mok").css('opacity', 0).animate({
      opacity: 1
    }, 500);
    $(target).find(".hide_img").css('opacity', 0).animate({
      opacity: 1
    }, 1500);
  }
});




