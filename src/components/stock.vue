<template>
  <div class="menu">
    <div class="card">
      <div class="card-header">{{company}}</div>
      <div class="card-body">
        <h5 class="card-text">{{value}}</h5>
        <div class="input-group input-group-sm mb-3">
          <div class="input-group-prepend">
          <span class="input-group-text" id="inputGroup-sizing-sm">Amount</span>
          </div>
          <div class="input">
            <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
            <button class="btn btn-primary btn-sm">Buy</button>
          </div>
          </div>


      </div>
    </div>
  </div>
</template>

<script>
export default{
  props:['company','value']
}
</script>

<style>
.card{
  text-align: right;
  margin-left:70px;
  margin-right:70px;

}
.card-body{
  width:250px;
}
.input{
  display:inline-flex;
}
</style>
