<template>
  <div>
    <v-header/>
    <h-slider/>
    <board/>
    <manage/>
    <product/>
    <insure/>
    <bnav/>
    <hfooter/>
    <flex/>
  </div>
</template>

<script>
import hheader from './h-header'
import hslider from './h-slider'
import board from '../public/board'
import manage from './manage'
import product from './product'
import insure from './insure'
import bnav from './b-nav'
import hfooter from './footer'
import flex from './flex';
export default {
    components : {
      "v-header" : hheader,
      "h-slider" : hslider,
       board,
       manage,
       product,
       insure,
       bnav,
       hfooter,
       flex
    }
}
</script>
