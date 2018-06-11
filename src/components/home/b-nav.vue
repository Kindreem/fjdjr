<template>
  <div>
    <section class="icon">
       <div v-for="item in items" :key="item.img" class="item">
            <router-link :to="{ name: item.href}">
                    <img :src="item.img" :alt="item.title">
                    <h4>{{ item.title }}</h4>
            </router-link>
       </div>
      </section>
    <section class="talk">
      <a href="https://m.jr.jd.com/spe/jrapphelp/index.html?sid=" alt="">
        <img src="https://img12.360buyimg.com/jrpmobile/jfs/t2842/350/3035567089/14791/5f6ff93d/577cf395N31e76288.png?width=1125&height=252"/>
      </a>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [{
                href: "lend",
                img: "https://img12.360buyimg.com/jrpmobile/jfs/t12799/50/704102454/5247/19eac80a/5a4f2622Nc4aca701.png?width=90&height=90",
                title: "旅游"
            }, {
                href: "lend",
                img: "https://img12.360buyimg.com/jrpmobile/jfs/t16033/196/1306232362/4705/4c678227/5a4f265bN66ef5ae8.png?width=90&height=90",
                title: "医美"
            }, {
                href: "lend",
                img: "https://img12.360buyimg.com/jrpmobile/jfs/t13051/63/2559290659/4702/e4068917/5a4f2693N937f1905.png?width=88&height=88",
                title: "房抵贷"
            }, {
                href: "lend",
                img: "https://img12.360buyimg.com/jrpmobile/jfs/t15133/16/1440686097/5786/1b038e03/5a4f26bfN03ed1f66.png?width=90&height=90",
                title: "驾校"
            }, {
                href: "lend",
                img: "https://img12.360buyimg.com/jrpmobile/jfs/t14896/125/1435676873/3668/a8b392f7/5a4f26edN6cdfda66.png?width=88&height=88",
                title: "分期用"
            }],
    }
  }
}
</script>


<style lang="stylus" scoped>
.icon {
  display flex
  justify-content: space-around;
  text-align center
  font-size 26px
  color #666
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  padding-top 40px
  background #fff
  margin-bottom 20px
  padding-bottom 8px
}
.talk img {
 display inline-block
 width 100%
 height auto
 text-align center
}
</style>

