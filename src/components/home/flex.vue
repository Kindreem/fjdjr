<template>
  <div>
    <section class="one">
      <a href="https://know.m.jd.com/page/entry?sid=">
      <img src="https://img12.360buyimg.com/jrpmobile/jfs/t21436/340/923020148/11810/e9247761/5b1c9436N351971c7.gif" alt="">
      </a>
    </section>
    <section v-show="Isshow" class="two">
       <a href="#"><img src="./go_top.png" alt=""></a>
    </section>
  </div>
</template>

<script>
export default {
  mounted() {
        window.addEventListener('scroll', this.show)
    },
  data() {
    return{
      Isshow: false
    }
  },
  methods: {
     show() {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        // console.log(scrollTop)
        if(document.documentElement.scrollTop>800){
          this.Isshow=true;
         }
         else{
           this.Isshow=false;
         }
     },
   }
}

</script>


<style lang="stylus" scoped>
.one{
  position fixed
  bottom 138*2px
  right 32px
  z-index 9999
  width 100px
  img{
    width 100%
  }
}
.two{
  position fixed
  bottom 72*2px
  right 32px
  z-index 9999
  width 100px
  img{
    width 100%
  }
}
</style>
