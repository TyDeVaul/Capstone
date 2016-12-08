<template>
  <div class="row">

    <!-- brand (SM) -->
    <router-link tag="a" to="/" class="hidden-md hidden-lg">
      <!-- logo -->
      <div align="right" class="logo col-xs-2">
        <img height="55" src="/imgs/logo.png" />
      </div>

      <!-- title -->
      <div class="col-xs-4">
        <h2>PullGrid</h2>
      </div>
    </router-link>

    <!-- brand (LG) -->
    <router-link tag="a" to="/" class="hidden-sm hidden-xs">
      <!-- logo -->
      <div class="logo col-md-1">
        <img height="70" src="/imgs/logo.png" />
      </div>

      <!-- title -->
      <div class="col-md-2">
        <h3>PullGrid<br/>
          <small>Webtorrent Video</small>
        </h3>
      </div>
    </router-link>

    <div class="padding">
      <!-- upload button -->
      <div align="center" class="col-md-2 col-xs-3 pull-right">
        <router-link tag="button" to="/upload" type="button" class="btn btn-primary">Upload</router-link>
      </div>

      <!-- search bar -->
      <div class="col-md-7 col-xs-12 pull-right">
        <div class="input-group">
          <div class="input-group-btn">
            <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Videos <span class="caret"></span>
            </button>
            <ul class="dropdown-menu">
              <li><a href="#">Videos</a></li>
              <li><a href="#">Channels</a></li>
              <li><a href="#">Users</a></li>
            </ul>
          </div>
          <input type="text" class="form-control" aria-label="...">
              <span class="input-group-btn">
                <button class="btn btn-default" type="button">Search!</button>
              </span>
        </div>
      </div>
    </div>

  </div>
</template>


<style lang="less" rel="stylesheet/less">
  //header
  .header {
    .logo {
      padding-top: 8px;
      padding-left: 20px;
      padding-right: 15px;
    }
    .padding {
      padding-top: 25px;
    }
    .divider {
      margin-top: 0px;
      margin-bottom: 0px;
    }
  }
</style>