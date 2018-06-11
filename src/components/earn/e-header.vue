<template>
  <theader :value='value'/>
</template>

<script>
import theader from '../public/header'
export default {
  components : {
    theader
  },
  data() {
    return{
      value: '赚钱'
    }
  }
}
</script>
