/* 탭 메뉴 선택 시 배너 이미지가 관련 이미지로 교체 */
$(document).ready(function() {
  // 탭 메뉴의 버튼을 클릭했을 때
  $(".inttab_menu li").click(function() {
    // 선택된 버튼에 active 클래스를 추가하고, 나머지 버튼에서는 active 클래스를 제거
    $(this).addClass("active").siblings().removeClass("active");
    
    // 선택된 버튼에 해당하는 이미지를 inthide_menu에서 찾아서 intro_banner에 출력
    var index = $(this).index();
    $(".intro_banner img").attr("src", $(".inthide_menu div").eq(index).find("img").attr("src"));
  });
});


