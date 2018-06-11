<template>
  <div class="all">
    <carousel :items="items" :swiperOption="swiperOption"/>
  </div>
</template>

<script>
import carousel from '../public/carousel'
export default {
  components: {
    carousel
  },
  data () {
    return {
      items: [{
                href: "home",
                src: "https://img12.360buyimg.com/jrpmobile/jfs/t12799/50/704102454/5247/19eac80a/5a4f2622Nc4aca701.png?width=90&height=90",
                title: "旅游"
            }, {
                href: "home",
                src: "https://img12.360buyimg.com/jrpmobile/jfs/t16033/196/1306232362/4705/4c678227/5a4f265bN66ef5ae8.png?width=90&height=90",
                title: "医美"
            }, {
                href: "home",
                src: "https://img12.360buyimg.com/jrpmobile/jfs/t13051/63/2559290659/4702/e4068917/5a4f2693N937f1905.png?width=88&height=88",
                title: "房抵贷"
            },{
                href: "home",
                src: "https://img12.360buyimg.com/jrpmobile/jfs/t15133/16/1440686097/5786/1b038e03/5a4f26bfN03ed1f66.png?width=90&height=90",
                title: "驾校"
            }, {
                href: "home",
                src: "https://img12.360buyimg.com/jrpmobile/jfs/t14896/125/1435676873/3668/a8b392f7/5a4f26edN6cdfda66.png?width=88&height=88",
                title: "分期用"
            }, {
                href: "home",
                src: "https://img12.360buyimg.com/jrpmobile/jfs/t16183/231/1309653281/4671/3ace8435/5a4f27d0N9e3df1d5.png?width=90&height=90",
                title: "教育"
            },{
                href: "home",
                src: "https://img12.360buyimg.com/jrpmobile/jfs/t15955/206/1280935063/4274/6204375a/5a4f2801N015920c5.png?width=90&height=90",
                title: "车险"
            }, {
                href: "home",
                src: "https://img12.360buyimg.com/jrpmobile/jfs/t15451/2/1424737894/3801/e7844c76/5a4f2823Ne430c735.png?width=88&height=88",
                title: "家装"
            }, {
                href: "home",
                src: "https://img12.360buyimg.com/jrpmobile/jfs/t15922/204/1330308267/4745/e0cae4a0/5a4f2836Nd00354cb.png?width=90&height=90",
                title: "租房"
            },{
                href: "home",
                src: "https://img12.360buyimg.com/jrpmobile/jfs/t20710/128/786107348/9560/df0c6362/5b191cbdNfd636259.jpg?width=90&height=90",
                title: "分期商城"
            }],
       swiperOption: {
               slidesPerView: 5,
               slidesPerGroup : 5,
               pagination: {
                    el: '.swiper-pagination'
               },
            }
    }
  }
}
</script>

<style lang="stylus" scoped>
.all{
  background #fff
  // padding-bottom 55px
}
>>>.swiper-container{
   box-sizing border-box
   padding 0 20px
}
>>>.swiper-slide{
  text-align center
  padding-bottom 55px
  img{
    display block
    margin 0 auto 18px
    width: 2.1rem;
    height: 2.1rem;
  }
  p{
    font-size 0.58rem
    color #333
  }
}
>>>.swiper-pagination{
  bottom 10px
}
</style>


