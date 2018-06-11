<template>
  <div class="all">
    <carousel :items="items" :swiperOption="swiperOption"></carousel>
    <section class="card">
      <div>
       <p>会员等级</p>
       <p>立即登录 马上赚钱！</p>
       <p>签到</p>
      </div>
    </section>
    <section class="icon">
       <div v-for="item in enters" :key="item.img" class="item">
            <router-link :to="{ name: item.href}">
                    <img :src="item.img" :alt="item.title">
                    <h4>{{ item.title }}</h4>
            </router-link>
       </div>
      </section>
  </div>
</template>

<script>
import carousel from '../public/carousel'
export default {
  components: {
    carousel
  },
  data() {
        return {
            swiperOption: {
                autoHeight:true,
                autoplay:true,
                loop: true,
                pagination: {
                    el: '.swiper-pagination'
               },
            },
            items: [{
                href: "home",
                src: "https://img12.360buyimg.com/jrpmobile/jfs/t20260/135/818222458/40819/4ffb660/5b1920ecNd2fb196c.jpg?width=750&height=400",
            }, {
                href: "home",
                src: "https://img12.360buyimg.com/jrpmobile/jfs/t21619/125/824907563/44634/346d1832/5b191fdfN1a967fe0.jpg?width=750&height=400",
            }, {
                href: "home",
                src: "https://img12.360buyimg.com/jrpmobile/jfs/t20722/210/816041991/31289/b04589/5b191ff5N88145893.jpg?width=750&height=400",
            },{
                href: "home",
                src: "https://img12.360buyimg.com/jrpmobile/jfs/t21220/213/818780518/36137/83c96072/5b192001Nfd79f196.jpg?width=750&height=400",
            }],enters: [{
                href: "home",
                img: "https://img12.360buyimg.com/jrpmobile/jfs/t20875/247/767136654/3397/4920e429/5b17a21dN12815dcb.png?width=90&height=90",
                title: "领红包",
            }, {
                href: "home",
                img: "https://img12.360buyimg.com/jrpmobile/jfs/t19969/99/1258086181/3335/ce72a37c/5b17a228Nde674407.png?width=90&height=90",
                title: "领福利",
            }, {
                href: "home",
                img: "https://img12.360buyimg.com/jrpmobile/jfs/t22051/340/786216480/3243/3e729baf/5b17a22fN94444298.png?width=90&height=90",
                title: "领卷",
            }, {
                href: "home",
                img: "https://img12.360buyimg.com/jrpmobile/jfs/t22354/354/756308514/3376/8db34145/5b17a236Na1c71c6a.png?width=90&height=90",
                title: "支付抽奖",
            },{
                href: "home",
                img: "https://img12.360buyimg.com/jrpmobile/jfs/t19831/78/1154867160/3236/a8af8d49/5b17a23dNcfe84201.png?width=90&height=90",
                title: "全部",
            }]
          }
  }
}
</script>

<style lang="stylus" scoped>
>>>.swiper-pagination {
  bottom  50px !important
}
>>>.swiper-slide img{
   width: 100%
 }
 .all{
   background #fff
   position relative
 }
.card {
  margin 0 32px
  background #fff
  position absolute
  bottom 220px
  left 0
  right 0
  z-index 1000
  height 130px
  border-radius: 0.125rem
  box-shadow: 0 0 0.625rem 0.03125rem rgba(101,118,155,.15)
  div {
    position relative
    text-align center
    p:nth-child(1){
      background url('./huiyuan.png') no-repeat
      background-size cover
      position absolute
      top: 25%
      left 20px
      height: 66px
      width 46*2px
      line-height: 66px
      color: #fff;
      font-size: 18px;
      box-shadow: 0 0.15rem 0.2rem 0 hsla(41,44%,63%,.51)
    }
   p:nth-child(2){
     font-size: 28px
     color: #c6a76f
     line-height 130px
     text-align left
     padding-left 122px
   }
   p:nth-child(3){
     background url('./qiandao.png') no-repeat
     background-size cover
     position absolute
     top 25%
     right 30px
     border-radius: .9375rem;
     width 140px
     height 66px
     line-height: 66px
     color: #fff;
     font-size: 24px;
     box-shadow: 0 0.2rem 0.3rem 0 hsla(40,41%,61%,.41)
   }
  }
}
.icon{
  display flex
  justify-content space-around
  margin-top 134px
  text-align center
}
.item{
  margin 0 auto
  img {
    display block
  }
  h4 {
    font-size 24px
    margin 18px 0 48px
  }
}
.item:nth-child(3) {
       position relative
}
.item:nth-child(3)::after{
       content:"领现金";
       background url('base.png') no-repeat 50%
       background-size 100% 100%
       color #fff
       font-size 19px
       position absolute
       top -10px
       left 45px
       text-align center
       height: 45px;
       line-height 34px
       width: 90px;
}
</style>


