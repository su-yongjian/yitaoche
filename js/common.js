// 首页tab切换样式

$(function(){
    $(".toggleStyle").on("click","li",function(){
      $(this).addClass("activeBottom").siblings().removeClass("activeBottom");
    })
})