


 // Trigger
 $('.menu-icon').click(function () {
  $(this).toggleClass('actives')
  $('.mo-nav').toggleClass('actives')
})

$('.close').click(function () {
  $('.open').removeClass('actives')
  $('.close').removeClass('actives')
})

$('.open').click(function(){
  $(this).toggleClass('active')
  $('.close').toggleClass('active')
  
})
$('.close').click(function(){
  $('.close').removeClass('active')
  $('.open').removeClass('active')
})

$(".main-nav li a").click(function(){
    $(this).toggleClass('navidot')
})