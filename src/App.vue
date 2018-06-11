<template>
  <div id="app">
    <router-view/>
    <navbar/>
  </div>
</template>

<script>
import navbar from './components/public/navbar'
export default {
  components : {
      navbar
  }
}
</script>


