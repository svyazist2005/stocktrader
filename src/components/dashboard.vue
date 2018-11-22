<template>
  <div class="menu">
    <h1>Dashboard</h1>
    <hr>
    <h2>Funds: {{getFunds}} USD</h2>
    <h3>Game day: {{getGameDay}}</h3>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
export default{
  computed:mapGetters(['getFunds','getGameDay'])
}
</script>

<style>
</style>
