<template>
  <div class="all">
    <section class="one">
       <img src="./goldCard.png" alt="">
       <p>最高可借</p>
       <p><span>¥</span>300,000</p>
       <p>立即登录</p>
    </section>
    <section class="two">
      <carousel :items="items" :swiperOption="swiperOption"/>
    </section>
    <section class="three">
       <h2>有车有钱</h2>
       <div class="imgbox">
          <img src="https://img12.360buyimg.com/jrpmobile/jfs/t20908/337/627708226/28636/c40fca33/5b14a506N28514790.png?width=375&height=233" alt="">
          <img src="https://img12.360buyimg.com/jrpmobile/jfs/t14215/140/1757206721/24186/81b4e53c/5a56c877Nee6cfc4d.jpg?width=375&height=233" alt="">
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
                autoplay:true,
                loop: true,
                pagination: {
                    el: '.swiper-pagination'
               },
            },
            items: [{
                href: "home",
                src: "https://img12.360buyimg.com/jrpmobile/jfs/t21517/104/795265325/14813/bb62cab2/5b188a4dN19ddeec2.png?width=690&height=154",
            }, {
                href: "home",
                src: "https://img12.360buyimg.com/jrpmobile/jfs/t21451/11/663818125/20878/df33661/5b14a278N23660196.png?width=690&height=154",
            }, {
                href: "home",
                src: "https://img12.360buyimg.com/jrpmobile/jfs/t22306/109/816875493/17231/f94bd16f/5b188ae4Nf5b83cb2.png?width=690&height=154",
            },{
                href: "home",
                src: "https://img12.360buyimg.com/jrpmobile/jfs/t21373/216/811904941/14964/e2382b53/5b188fa3Nb6060885.png?width=690&height=154",
            },{
                href: "home",
                src: "https://img12.360buyimg.com/jrpmobile/jfs/t19837/240/1205734195/14362/6a06188d/5b188c80N2ed2ce13.png?width=690&height=154",
            }],
        }
  }
}
</script>


<style lang="stylus" scoped>
.all{
  background url('./bj.png') no-repeat 0 0
  background-size 100% auto
  overflow hidden
}
.one{
  margin: 1.35rem 0.7rem 0;
  position relative
  img {
    width 100%
  }
  P{
    color #fff
  }
  p:nth-child(2){
    position absolute
    top 12%
    left 10%
    font-size 0.788rem
  }
  p:nth-child(3){
    font-size 2.1rem
    position absolute
    top 20%
    left 10%
    text-shadow: 0 0.3rem 0.3rem rgba(63,39,0,.2);
    span{
      font-size 1.46rem
    }
  }
  p:nth-child(4){
    background url('./btnBj.png') no-repeat 0 0
    background-size 100% 100%
    font-size 0.7rem
    height: 1.5rem;
    line-height: 1.5rem;
    width: 5rem
    text-align center
    position absolute
    top 50%
    left 10%
  }
}
>>>.swiper-slide{
  padding: 0 .9rem;
  box-sizing border-box
  a{
    display block
    width 100%
  }
  img{
    display inline-block
    width 100%
    vertical-align: middle;
  }
}
.three{
  padding-top 1.4rem
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
  margin-bottom 1.5rem
  img{
    width 49%

  }
}
</style>

