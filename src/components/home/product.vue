<template>
  <div class="all">
    <section class="title">
       <h4>- 众筹新品 -</h4>
       <div>
         <span>更多尖货</span>
         <i class="el-icon-arrow-right"></i>
       </div>
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
                slidesPerView: 2.3,
                spaceBetween: 30,
                freeMode: true,
                slidesOffsetBefore: 24,
                slidesOffsetAfter: 24
            },
        items: [{
                href: "earn",
                src: "//img12.360buyimg.com/jrpmobile/jfs/t19990/203/1131512962/38522/dd594744/5b15fdfcNbb5c9217.jpg?width=335&height=421",
            }, {
                href: "earn",
                src: "//img12.360buyimg.com/jrpmobile/jfs/t21175/291/715906694/33834/80191bbe/5b15ff42Nb7c4635a.jpg?width=335&height=421",
            }, {
                href: "earn",
                src: "//img12.360buyimg.com/jrpmobile/jfs/t21433/228/724755954/28560/5599d225/5b15fe12N8732d7a5.jpg?width=335&height=421",
            }]
     }
   }
}
</script>


<style lang="stylus" scoped>
 .all{
   background #fff
   padding-bottom 40px
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
    div {
      position absolute
      top 0
      right 0
      font-size 28px
      color #999
      font-weight: 400
      margin-right 32px

    }
 }
 >>>.swiper-slide {
       a{
          display: block;
          width: 100%;
          img {
            width 125*2px !important
            height auto !important
         }
       }

 }
</style>
