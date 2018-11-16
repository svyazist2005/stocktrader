<template>
  <div class="menu">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#"><router-link to="/">Stock Trader</router-link></a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse lefthead" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#"><router-link to="/portfolio">Portfolio</router-link><span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"><router-link to="/stocks">Stocks</router-link></a>
          </li>
        </ul>
      </div>
      <div class="collapse navbar-collapse righthead" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#">End Day <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Save & load
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">Save acivity</a>
              <a class="dropdown-item" href="#">Load activity</a>
            </div>
          </li>

          <li class="nav-item">
            <a class="nav-link" href="#"><router-link to="/founds"> <b>Founds</b></router-link>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </div>

</template>

<script>
</script>

<style>
.menu{
  margin:20px;
}
li{
  margin-left:30px;
  margin-right:30px;
}

.righthead{
  margin-left:200px;
}

</style>
