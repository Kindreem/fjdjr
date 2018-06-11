<template>
  <div class="all">
    <div class="tilte clearfloat">
      <h4>小金库</h4>
      <h4>更多理财产品<i class="el-icon-arrow-right"></i></h4>
    </div>
    <section class="one">
      <P>3.9970<span>%</span></P>
      <p>七日年化收益</p>
      <p>支付/缴费/优质理财/大额理财</p>
      <div>开启送礼包</div>
    </section>
    <section class="two">
      <h4>稳健灵活 定期理财</h4>
      <swiper :options="swiperOption">
        <swiper-slide v-for="item in money" :key="item.title">
           <router-link :to="{ name: item.href}">
              <dl class="ban">
                <dt>{{ item.title }}</dt>
                <dd>{{ item.sub }}</dd>
                <dd>{{ item.rate }}<span>%</span></dd>
                <dd>{{ item.text }}</dd>
              </dl>
           </router-link>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </section>
    <section class="three">
      <h4>银行+ 银行服务精选</h4>
      <carousel :items="items" :swiperOption="swiperOption"/>
    </section>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import carousel from '../public/carousel'
export default {
  components: {
    carousel,
    swiper,
    swiperSlide
  },
  data() {
     return {
        swiperOption: {
                slidesPerView: 3.4,
                spaceBetween: 24,
                freeMode: true,
                slidesOffsetBefore: 24,
                slidesOffsetAfter: 24,

            },
        items: [{
                href: "home",
                src: "https://img12.360buyimg.com/jrpmobile/jfs/t20638/45/788293331/14111/511b55b0/5b17a30dN687a4335.png?width=210&height=260",
            }, {
                href: "home",
                src: "https://img12.360buyimg.com/jrpmobile/jfs/t21160/216/743945158/14802/c417b3c9/5b17a31aN35676309.png?width=210&height=260",
            }, {
                href: "home",
                src: "https://img12.360buyimg.com/jrpmobile/jfs/t20842/183/774592744/14888/e33804ee/5b17a32aN2482a649.png?width=210&height=260",
            },{
                href: "home",
                src: "https://img12.360buyimg.com/jrpmobile/jfs/t22000/229/760887122/14483/5fdcceb0/5b17a332N30edea03.png?width=210&height=260",
            }],
        money: [{
                title: "月月盈",
                sub: "金融专享",
                rate: "4.70",
                text: "近七日年化收益率",
                href: "home"
            }, {
                title: "周期盈",
                sub: "理财优选",
                rate: "4.60",
                text: "近七日年化收益率",
                href: "home"
            }, {
                title: "双年盈",
                sub: "2年可赎回",
                rate: "6.00",
                text: "历史年化投资回报率",
                href: "home"
            }, {
                title: "随享盈",
                sub: "质押贷款",
                rate: "5.50",
                text: "历史年化结算利率",
                href: "home"
            }],
     }
   }
}
</script>


<style lang="stylus" scoped>
@import 'swiper/dist/css/swiper.css';
.all{
  background #fff
  padding-bottom 40px
  margin-bottom 20px
}
.tilte{
  h4{
    height: 2.55rem;
    line-height: 2.55rem;
  }
  h4:nth-child(1){
    font-weight bold
    font-size: 0.7rem
    float left
    margin-left 30px
  }
  h4:nth-child(2){
    color #999
    float right
    font-size 0.5rem
    margin-right 30px
  }
}
.one{
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  background url(./gold.png) no-repeat 50%
  background-size cover
  margin 0 30px
  padding-left 28px
  position relative
  color #fff
  height 200px
  P:nth-child(1){
    height: 1.5rem;
    line-height: 1.5rem;
    padding-top 24px
    font-size 100%
    font-weight bold
    span{
      font-size 0.4rem
    }
  }
  P:nth-child(2){
    height 34px
    line-height 34px
    font-size 25px
    margin 8px 0 4px
  }
  P:nth-child(3){
    opacity: .6
    font-size 25px
  }
  div {
    background url('./gold2.png') no-repeat 50%
    background-size cover
    position absolute
    top 0
    right 0
    height 200px
    line-height 200px
    width 166*2px
    font-size 26px
    text-align center
  }
}
.two{
  h4{
    height 100px
    line-height 100px
    font-size 30px
    margin-left 30px
  }
}
.ban{
    background #fff
    box-shadow: 0 0 0.4rem 0.1rem rgba(101,118,155,.15);
    border-radius: .125rem;
    padding-left 30px
    padding-right 30px
    box-sizing border-box
    height 130*2px
    width 210px
  dt{
    font-size 32px
    padding-top 38px
    padding-bottom 10px
  }
  dd:nth-child(2){
    font-size 20px
    background-image: linear-gradient(#5e8fff,#2f6fff);
    color: #fff;
    border-radius: 15px;
    width 100px
    text-align center
  }
  dd:nth-child(3){
    font-size 45px
    color red
    font-weight bold
    span{
      font-size 30px
    }
  }
  dd:nth-child(4){
    margin-top 8px
    font-size 22px
    color #999
  }
}
.three{
  h4{
    height 100px
    line-height 100px
    font-size 30px
    margin-left 30px
  }
}
>>>.swiper-slide {
       a{
          display: inline-block;
          width: 100%;
          img {
            width 105*2px !important
            height auto !important
         }
       }
}
</style>
