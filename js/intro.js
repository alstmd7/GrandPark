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

