<template>
  <div>
    <section class="save">
      <h3>保险保障</h3>
      <div class="left">
        <p>100万</p>
        <p>账户安全险</p>
        <p>免费领取</p>
        <span>今日推荐</span>
      </div>
      <div class="right">
        <div v-for="item in enters" :key="item.img" class="item">
            <router-link :to="{ name: item.href}">
                    <img :src="item.img" :alt="item.title">
                    <h4>{{ item.title }}</h4>
            </router-link>
       </div>
      </div>
      <div class="photo">
        <a href="https://sale.jd.com/app/act/d3csZWwfpQo08xe.html">
        <img src="https://img12.360buyimg.com/jrpmobile/jfs/t21520/220/770346544/34912/890a3c18/5b17a40fNb6732372.jpg?width=750&height=200" alt="">
        </a>
      </div>
    </section>
    <section class="shares">
      <h3>股票</h3>
      <div class="lefts">
        <img src="https://img12.360buyimg.com/jrpmobile/jfs/t8767/137/977390432/7475/e5acd251/59ba3a31Ncbd06cac.jpg?width=335&height=200" alt="">
        <div class="lcont">
          <img src="http://img30.360buyimg.com/jr_image/jfs/t5848/216/253631918/136369/1894b4a7/591e5567Ncfb35e99.jpg" alt="">
          <p>405.79<span>%</span></p>
          <p>累计收益排行榜</p>
          <p><span>牛人</span>zangyn
            <img src="./go_btn.png" alt="">
          </p>
        </div>
      </div>
      <div class="rights">
        <img src="https://img12.360buyimg.com/jrpmobile/jfs/t15661/192/2386880166/5534/2d3f9dfd/5aa7310bN2f099f7a.jpg?width=335&height=200" alt="">
        <div class="rcont">
           <p>618猜大盘涨跌</p>
           <p>领5元话费券+500钢镚</p>
           <p>立即前往
             <img src="./go_btn.png" alt="">
           </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return{
      enters: [{
                href: "home",
                img: "https://img12.360buyimg.com/jrpmobile/jfs/t8881/304/1359242815/2540/5ef07179/59b90050N62f41061.png?width=56&height=56",
                title: "车险",
            }, {
                href: "home",
                img: "https://img12.360buyimg.com/jrpmobile/jfs/t9040/57/2313007861/3024/82c36c44/59ca556eNb605e901.png?width=56&height=56",
                title: "人寿",
            }, {
                href: "home",
                img: "https://img12.360buyimg.com/jrpmobile/jfs/t9283/283/1383600733/3117/82a51164/59b900cfNe88db318.png?width=56&height=56",
                title: "意外",

            }, {
                href: "home",
                img: "https://img12.360buyimg.com/jrpmobile/jfs/t8929/33/1393593833/1749/1e115bd7/59b900e6N73c7b311.png?width=56&height=56",
                title: "财产",
            },{
                href: "home",
                img: "https://img12.360buyimg.com/jrpmobile/jfs/t8902/275/1411242449/2807/a2cc902a/59b90111N4e88098c.png?width=56&height=56",
                title: "健康",
            },{
                href: "home",
                img: "https://img12.360buyimg.com/jrpmobile/jfs/t8962/170/1384497943/2594/aa2a2ad9/59b9011bNf3b01bea.png?width=56&height=56",
                title: "旅行",
            }],
    }
  }
}
</script>


<style lang="stylus" scoped>
.save{
  background #fff
  margin-bottom 20px
  h3{
    height 120px
    line-height 120px
    font-size 38px
    font-weight bold
    padding-left 30px
  }
}
.left{
  width 106*2px
  height 130*2px
  box-shadow: 0 0 0.625rem 0.03125rem rgba(101,118,155,.15);
  box-sizing border-box
  text-align center
  overflow:hidden
  margin-left 15px
  position relative
  float left
  margin-bottom 16px
  p:nth-child(1){
    color: #1bd5c7
    font-size 48px
    font-weight bold
    margin 62px 0 4px
  }
  p:nth-child(2){
    font-size 25px
    margin-bottom 24px
  }
  p:nth-child(3){
    background #1bd5c7
    border-radius:25px
    color #fff
    font-size 20px

    height 50px
    line-height 50px
    padding 0 12px
    margin 0 24px
  }
  span{
    position absolute
    top 0px
    left 0
    font-size 24px
    background: #000;
    height: 0.7rem;
    line-height: 0.7rem;
    color #fff
    padding 0 12px
  }
}
.right{
  box-sizing: border-box;
  box-shadow: 0 0 0.625rem 0.03125rem rgba(101,118,155,.15);
  float right
  display flex
  width: 61%;
  justify-content: space-around
  flex-wrap: wrap
  text-align center
  margin-right 15px
  height 260px
  .item{
    width 33%
    font-size 24px
    img{
      display block
      margin 20px auto 2px
    }
    h4{
      padding 0 12px
    }
  }
}
.photo{
  img {
    display block
    width 100%
  }
}
.shares{
  background #fff
  height 188*2px
  margin-bottom 120px
  h3{
    height 120px
    line-height 120px
    font-size 38px
    font-weight bold
    padding-left 30px
  }
  .lefts{
    float left
    width 50%
    padding-left 30px
    padding-right 8px
    box-sizing border-box
    position relative

    >img {
      width 100%
      height 200px
    }
  }
  .rights{
    float right
    width 50%
    padding-left 8px
    padding-right 30px
    box-sizing border-box
    position relative
    img {
      width 100%
      height 200px
    }
  }
}
.lcont{
  >img{
    display block
    border-radius: 50%
    width 80px
    height 80px
    position absolute
    top 28px
    left 50px
  }
  p:nth-child(2){
    position absolute
    top 20px
    right 45px
    color #fff
    font-size 0.8rem
    font-weight bold
    span{
      font-weight normal
      font-size 0.6rem
    }
  }
  p:nth-child(3){
    color #fff
    font-size 0.5rem
    position absolute
    top 74px
    right 35px
  }
  p:nth-child(4){
    position absolute
    bottom 40px
    right 87px
    color #fff
    font-size 23px
    z-index 999
    span{
      background-image: linear-gradient(-90deg,#fd5737,#ec3038);
      border-radius: 1.5px
      display inline-block
      width 60px
      height 30px
      line-height 30px
      margin-right 6px
      text-align center
    }
    img{
      position absolute
      bottom -8px
      right -62px
      display inline-block
      width 50px
      height 50px
    }
  }
}
.rcont{
  p{
    color #fff
  }
  p:nth-child(1){
    position absolute
    top 24px
    left 38px
    font-size 0.72rem
  }
  p:nth-child(2){
    position absolute
    top 76px
    left 40px
    font-size 0.5rem
  }
  p:nth-child(3){
    position absolute
    bottom 45px
    right 120px
    font-size 23px
    img{
      position absolute
      bottom -10px
      right -65px
      display inline-block
      width 50px
      height 50px
    }
  }
}
</style>

