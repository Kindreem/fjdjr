<template>
  <div>
    <section class="one">
     <a href="https://sale.jd.com/m/act/2rdQxoIunUqfRH.html?zcyunying&zhuanqian&sid=">
     <img src="https://img12.360buyimg.com/jrpmobile/jfs/t19891/164/1247233855/32104/d53dd61a/5b191f5aN986532fc.jpg?width=750&height=259" alt="">
     </a>
  </section>
  <section class="two">
    <div class="leftb">
      <p>16.43<span>%</span></p>
      <p>历史年化收益率</p>
      <p>立即购买<i class="el-icon-caret-right"></i></p>
    </div>
    <div class="rightb">
      <carousel :items="items" :swiperOption="swiperOption"/>
      <div>
        <P>为你推荐</P>
        <img src="./jiantou.png" alt=""/>
      </div>
    </div>
  </section>
  <board/>
  </div>
</template>

<script>
import carousel from '../public/carousel'
import board from '../public/board'
export default {
  components: {
    carousel,
    board
  },
  data() {
    return {
        items: [{
                href: "home",
                src: "https://img12.360buyimg.com/jrpmobile/jfs/t19909/114/1130426612/12125/51525df1/5b15e76dN656f78d8.jpg?width=160&height=160",
                title: "4折首发  电助力山地越野自行车"
            }, {
                href: "home",
                src: "https://img12.360buyimg.com/jrpmobile/jfs/t22381/94/701688836/9880/57c99f43/5b15e77eNe1548b95.jpg?width=160&height=160",
                title: "99元秒 经典国货飞跃手绘帆布鞋"
            }, {
                href: "home",
                src: "https://img12.360buyimg.com/jrpmobile/jfs/t21475/96/687216780/4122/81c4265a/5b15e7d9N4328842d.jpg?width=160&height=160",
                title: "19元抢  10秒榨汁 智能便携"
            }],
       swiperOption: {
                direction: "vertical",
                autoplay:true,
                loop: true,
                allowTouchMove:false,
            }
    }
  }
}
</script>


<style lang="stylus" scoped>
.one{
  margin-bottom 8px
  img{
    width 100%
  }
}
.two{
  margin-bottom 16px
  background #fff
  color #fff
  display flex
  justify-content space-between
  .leftb{
    background url('./ban.png') no-repeat 50%
    background-size cover
    margin-left 30px
    width 33%
    height 200px
    padding-left 32px
    box-sizing border-box
    border-radius: 8px
    p:nth-child(1){
      font-size 1.2rem
      font-weight bold
      span{
        font-size 20px
      }
    }
    p:nth-child(2){
      font-size 23px
      padding-bottom 12px
      margin-bottom 12px
    }
    p:nth-child(3){
      font-size 24px
    }
  }
}
.rightb{
  background url('./ban2.png') no-repeat 50%
  background-size cover
  position: relative;
  width: 67%;
  height 200px
  box-sizing: border-box;
  margin-right 30px
  margin-left 18px
  div{
    p{
      position absolute
      z-index 999
      color #fff
      font-size 0.5rem
      bottom 25px
      left 190px
    }
    img{
      position absolute
      z-index 999
      bottom 0px
      right 0

    }
  }
}
>>>.swiper-container{
  height 200px
}
>>>.swiper-slide{
  img{
    padding 20px
    float left
  }
  p{
    color #fff
    font-size 24px
    padding-top 20px
  }
}
</style>

