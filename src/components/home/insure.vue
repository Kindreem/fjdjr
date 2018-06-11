<template>
  <div class="all">
    <section class="title">
       <h4>- 保险保障 -</h4>
    </section>
    <section>
      <Carousel :items="items" :swiperOption="swiperOption"></Carousel>
    </section>
  </div>
</template>

<script>
import Carousel from '../public/carousel'
export default {
   components: {
     Carousel
   },
   data() {
     return {
        swiperOption: {
                slidesPerView: 2.8,
                spaceBetween: 24,
                freeMode: true,
                slidesOffsetBefore: 24,
                slidesOffsetAfter: 24,

            },
        items: [{
                href: "earn",
                src: "//img12.360buyimg.com/jrpmobile/jfs/t12355/171/849656870/29064/92c9bc12/5a153643N04efba6e.jpg?width=210&height=260",
            }, {
                href: "earn",
                src: "//img12.360buyimg.com/jrpmobile/jfs/t9697/338/291348712/12737/27e1204/59cb6304Naef85042.jpg?width=210&height=260",
            }, {
                href: "earn",
                src: "//img12.360buyimg.com/jrpmobile/jfs/t10360/347/311063647/10881/14a5cd40/59cb632fNcac82571.jpg?width=210&height=260",
            },{
                href: "earn",
                src: "//img12.360buyimg.com/jrpmobile/jfs/t13927/226/2090083878/14208/2746192a/5a31dde6Nbba7f26c.png?width=210&height=260",
            },{
                href: "earn",
                src: "//img12.360buyimg.com/jrpmobile/jfs/t9703/119/296348375/11253/b9bc3ce7/59cb637dNf25b0dff.jpg?width=210&height=260",
            }]
     }
   }
}
</script>


<style lang="stylus" scoped>
 .all{
   background #fff
   padding-bottom 70px
   margin-bottom 20px
 }
 .title {
    text-align: center;
    box-sizing: border-box;
    height: 56*2px;
    line-height: 56*2px;
    padding: 0 32px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    position relative
    h4 {
      font-size: 16*2px;
      font-weight: 700;
    }
 }
 >>>.swiper-slide {
       a{
          display: inline-block;
          width: 100%;
          img {
            width 125*2px !important
            height auto !important
         }
       }
}
</style>
