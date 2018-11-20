<template>
  <div id="app">
    <mainmenu></mainmenu>
    <transition enter-active-class="animated fadeInDown" mode="out-in">
    <router-view></router-view>
    </transition>
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
