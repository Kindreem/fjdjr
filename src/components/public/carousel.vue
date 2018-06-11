<template>
  <swiper :options="swiperOption">
    <swiper-slide v-for="item in items" :key="item.src">
      <router-link :to="{ name: item.href}">
                    <img :src="item.src" alt="">
                    <p>{{item.title}}</p>
        </router-link>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
      components: {
      swiper,
      swiperSlide
  },

     mame:'carrousel',

      props: {
        swiperOption: {

        },
        items: {
        },
    },
}
</script>


<style lang="css">
  @import 'swiper/dist/css/swiper.css';
</style>


