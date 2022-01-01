


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

// $(".main-nav li a").click(function(){
//     $(".main-nav li a").removeClass()
//     $(this).addClass('on')
// })


// $('.main-nav li a').each(function(index){
//   $(this).attr('menu-index', index);
// }).click(function(){
//   var index = $(this).attr('menu-index');
//   $('.main-nav li a[menu-index=' + index + ']').addClass('on');
//   $('.main-nav li a[menu-index!=' + index + ']').removeClass('on');
// });

