<template>
 <div class="all">
       <Carousel :items="items" :swiperOption="swiperOption"></Carousel>
      <section class="icon">
       <div v-for="item in enters" :key="item.img" class="item">
            <router-link :to="{ name: item.href}">
                    <img :src="item.img" :alt="item.title">
                    <h4 :style="item.style">{{ item.title }}</h4>
            </router-link>
       </div>
      </section>

 </div>
</template>

<script>
import Carousel from "../public/carousel"
export default {
   components: {
     Carousel
   },
   data() {
        return {
            swiperOption: {
                autoplay:true,
                loop: true,
                pagination: {
                    el: '.swiper-pagination'
               },
            },
            items: [{
                href: "lend",
                src: "//img12.360buyimg.com/jrpmobile/jfs/t19987/89/1149818391/50849/8cce23f4/5b153b07N93e907ce.jpg?width=750&amp;height=320",
            }, {
                href: "lend",
                src: "//img12.360buyimg.com/jrpmobile/jfs/t21460/9/706282496/50254/430f12b4/5b153b4eN6585e47a.jpg?width=750&amp;height=320",
            }, {
                href: "home",
                src: "//img12.360buyimg.com/jrpmobile/jfs/t20206/148/685434065/89038/9edfe21e/5b15447aN09ead85e.jpg?width=750&amp;height=320",
            }],
            enters: [{
                href: "lend",
                img: "//img12.360buyimg.com/jrpmobile/jfs/t3991/64/2521945388/12110/93c0139/58d1e462Ncf294123.png?width=132&amp;height=132",
                title: "优惠券",
            }, {
                href: "lend",
                img: "//img12.360buyimg.com/jrpmobile/jfs/t5590/252/875247023/17343/946aa72c/59224650N0f7ffc92.png?width=132&height=132",
                title: "领红包",
            }, {
                href: "lend",
                img: "//img12.360buyimg.com/jrpmobile/jfs/t4393/329/2180608902/13217/c88c0cec/58ec9dcdN1534e2d7.png?width=132&height=132",
                title: "抢钢镚",
                style: "color:red;"
            }, {
                href: "lend",
                img: "//img12.360buyimg.com/jrpmobile/jfs/t5488/298/1036263348/12073/b4f4de97/590ac8e8Ne9def22e.png?width=135&height=135",
                title: "白条提额",
            }],
        }
    },
}
</script>

<style>

</style>

<style lang="stylus" scoped>

>>>.swiper-slide img{
   width: 100%
 }
 .all {
  margin-top 120px
}
   .icon {
     background white
     height 166px
     width 100%
     padding-top: 40px;
     display: flex
     margin-bottom: 20px;
    justify-content: space-around;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    .item{
      text-align center
    }
    img {
      display: block;
        width: 90px;
        height: 90px;
     }
     h4{
        font-size: 26px;
        color: #666;
     }
     .item:first-child {
       position relative
     }
     .item:first-child::after{
       content:"100-99卷";
       color:red;
       font-size 22px
       position absolute
       top 135px
       left 0
     }
   }
</style>
