$(document).ready(function() {
  // 첫번째 탭 활성화
  $('.tab_menu li:first').addClass('active');
  $('.tab_content div:first').addClass('active');

  // 탭 메뉴 클릭 이벤트 처리
  $('.tab_menu a').click(function(event) {
    event.preventDefault();

    // 탭 메뉴 활성화/비활성화 처리
    $('.tab_menu li').removeClass('active');
    $(this).parent().addClass('active');

    // 탭 콘텐츠 활성화/비활성화 처리
    $('.tab_pane').removeClass('active');
    $($(this).attr('href')).addClass('active');
  });
});