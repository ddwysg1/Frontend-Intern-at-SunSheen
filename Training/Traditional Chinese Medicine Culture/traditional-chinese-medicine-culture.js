     // 实例化mySwiper对象
     var mySwiper = new Swiper ('.swiper-container',{
         loop: true,
         speed:2000,
         direction:'horizontal',
         nextButton: '.swiper-button-next',
         prevButton: '.swiper-button-prev',
     })  
     $('.swiper-button-prev').on('click',function(){
           mySwiper.swipePrev();
     })
     $('.swiper-button-next').on('click',function(){
           mySwiper.swipeNext();
     }) 
