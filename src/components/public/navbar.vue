<template>
  <div class="all">
       <ul class="bar">
         <li v-for="item in items" :key="item.src1">
           <router-link :to="{ name: item.href}">
             <img :src="item.src1" alt=""/>
             <h4>{{item.title}}</h4>
           </router-link>
         </li>
       </ul>
  </div>
</template>

<script>
export default {
  data() {
    return{
      items: [{
          clicked: false,
          title: "首页",
          href: "home",
          src1: "https://img12.360buyimg.com/jrpmobile/jfs/t17587/158/1300523690/1908/eabacaac/5ac4850bNdf876dd8.png?width=60&height=60",
          src2: "https://img12.360buyimg.com/jrpmobile/jfs/t17650/174/1729132233/4020/2b09fc25/5ad6aac4N620fbed1.png?width=60&height=60"
      },{
          href: "earn",
          title: "赚钱",
          clicked: false,
          src1: "https://img12.360buyimg.com/jrpmobile/jfs/t7690/252/3621724688/1715/757a3ca1/59e9d81bN27304850.png?width=60&height=60",
          src2: "https://img12.360buyimg.com/jrpmobile/jfs/t9922/341/1927418106/3391/75795250/59e9d7e9N1289d306.png?width=60&height=60"
      },{
          href: "lend",
          title: "借钱",
          clicked: false,
          src1: "https://img12.360buyimg.com/jrpmobile/jfs/t11653/76/201131398/1192/bf1b2852/59e9d7f3N5f691137.png?width=60&height=60",
          src2: "https://img12.360buyimg.com/jrpmobile/jfs/t10717/7/1897882784/3005/9f66e191/59e9d826Nadb4e6db.png?width=60&height=60"
      },{
          href: "home",
          title: "省钱",
          clicked: false,
          src1: "https://img12.360buyimg.com/jrpmobile/jfs/t19729/201/1027312338/1395/95cecd48/5ab85d0eN01f81011.png?width=56&height=56",
          src2: "https://img12.360buyimg.com/jrpmobile/jfs/t19663/262/787103169/1654/ffffd4b/5aaa44adN4d5e3560.png?width=56&height=56"
      },{
          href: "home",
          title: "金融会员",
          clicked: false,
          src1: "https://img12.360buyimg.com/jrpmobile/jfs/t10897/141/1894216742/2046/ad0e8dc1/59e9d7feNaa5dd2fd.png?width=60&height=60",
          src2: "https://img12.360buyimg.com/jrpmobile/jfs/t11191/356/198417818/3320/c18da9bd/59e9d86aN8d1daea3.png?width=60&height=60"
      }],

    }
  },

}
</script>

<style lang="stylus" scoped>
.all{
  background #fff
  position: fixed;
  bottom : -2px;
  left: 0;
  right: 0;
  z-index 999
  width: 100%;
  height: 100px;
  box-shadow: 0 -6px 8px rgba(0,0,0,.03);
}
.bar {
  width: 100%;
  height: 100px;
  display flex
  justify-content space-around
  text-align center
  li{

    a{
      display inline-block
    img{
      display block
      width 44px
      margin: 12px auto 6px
    }
    h4{
      color #B1B4BB
      font-size 22px
     }
    }
   }
}
.router-link-active h4{
  color #4668FF !important
}
</style>

