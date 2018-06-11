<template>
  <div>
    <section class="one">
       <h2>白条服务</h2>
       <div class="imgbox">
         <div class="left">
           <img src="./whiteCard.png" alt="">
         </div>
         <div class="right">
           <img src="./whiteCircle.png" alt="">
           <p>小白信用</p>
           <p>登录查看</p>
         </div>
       </div>
    </section>
    <section class="three">
       <img src="https://img12.360buyimg.com/jrpmobile/jfs/t16675/365/91110617/54621/c0042c09/5a5c87faNd161d42e.png?width=730&height=264" alt="">
    </section>
  </div>
</template>

<style lang="stylus" scoped>
.one{
  margin-top 20px
  background #fff
  padding-top 1.4rem
  padding-bottom 28px
  h2{
    margin-left: .8rem;
    margin-right: .8rem;
    font-size: 0.93rem;
    padding-left: .59rem;
    position: relative;
    margin-bottom: .7rem;
  }
   h2::before{
    content: '';
    width: .15rem;
    height: 1rem;
    background: url('./title.png') no-repeat 0 0;
    background-size: 100% 100%;
    display: inline-block;
    position: absolute;
    top: 59%;
    left: 0;
    margin-top: -.5625rem;
    border-radius: .3125rem;
  }
}
.imgbox{
  width 100%
  .left{
    width 62%
    padding-left 0.3rem
    box-sizing border-box
    display inline-block
    img{
      width 100%
    }
  }
  .right{
    width 36%
    padding-right 0.3rem
    box-sizing border-box
    position relative
    display inline-block
    img{
      width 100%
    }
    p:nth-child(2){
      box-sizing: border-box;
      padding-right 7%
      color #ffeac9
      width 100%
      text-align: center
      font-size: .64rem
      position absolute
      top 32%
      text-align center
    }
    p:nth-child(3){
      box-sizing: border-box;
      padding-right 7%
      width 100%
      color #ae8339
      position absolute
      bottom 26%
      text-align center
      font-size .64rem
    }
  }
}
.three{
  background #fff
  padding-bottom 40px
  margin-bottom 120px
  img{
    width 100%
  }
}
</style>
