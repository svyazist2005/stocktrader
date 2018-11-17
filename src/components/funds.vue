<template>
  <div class="menu">
  <h2>Operations history</h2>
  <ul v-for='event in $store.state.history' class="list-group">
  <li class="list-group-item list-group-item-warning">{{event}}</li>
  </ul>
  </div>
</template>

<script>
export default{
  data:function(){
    return{

    }
  }
}
</script>

<style scoped>
li{
  width: 400px;
  height: 30px;
  padding: 2px;
}
ul{
  align-items: center;
}
</style>
