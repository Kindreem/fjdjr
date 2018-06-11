<template>
  <div>
    <ul class="icon">
      <li><img src="//img12.360buyimg.com/jrpmobile/jfs/t2971/333/1297567079/898/f2d2e00d/577dc28dNe5138337.png?width=108&height=108" alt="">
          <p>客户端</p>
      </li>
      <li><img src="//img12.360buyimg.com/jrpmobile/jfs/t2824/256/2966087355/831/188bfa25/577cf3dcN18aadbf2.png?width=108&height=108" alt="">
           <p>触屏版</p>
      </li>
      <li><img src="//img12.360buyimg.com/jrpmobile/jfs/t2920/282/1283157010/1040/23f1430b/577cf3e5N53f740b8.png?width=108&height=108" alt="">
          <p>电脑版</p>
      </li>
    </ul>
   <ul class="ft">
     <li>Copyright © 2004-2018 京东JD.com 版权所有</li>
     <li>投资有风险，购买需谨慎</li>
     <li>京东金融平台服务协议</li>
     <li>京东金融隐私政策</li>
   </ul>
  </div>
</template>

<style lang="stylus" scoped>
.icon {
    display flex
    justify-content space-around
    text-align center
    padding 40px 0 20px
    border-bottom  1px solid #ddd
    li img {
      display block
      height 90px
      width 90px
    }
    li p {
    font-size 26px
    color #999
    margin-top 12px
   }
}
.ft {
  color #999
  font-size 24px
  text-align center
  li {
    border-bottom  1px solid #ddd
    box-sizing: border-box;
    padding 24px 32px
    line-height 1.6
  }
}
</style>

