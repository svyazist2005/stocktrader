<template>
  <div id="app">
    <mainmenu></mainmenu>
    <router-view></router-view>

  </div>
</template>

<script>
import MainMenu from './components/mainmenu.vue'
export default{
  components:{
    mainmenu:MainMenu
  }
}
</script>

<style>
</style>
