
    $('.slider').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false
    });
 var count = 1;
 setInterval(function () {
   count++;
   if (count > 3) count = 1;
   var ele = $('.slider').find('img')
   $.when(ele.fadeOut())
     .done(function () {
       ele.fadeIn().attr('src', 'image/slider_0' + count + '.png')
     })
 }, 3000);
