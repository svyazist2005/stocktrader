<template>
  <div class="menu">
  <h2>Operations history</h2>
  <hr>
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
  padding-left: 10px;
  text-align: center;
}
ul{
  align-items: center;
  margin:0;
  padding: 0;
}
</style>
