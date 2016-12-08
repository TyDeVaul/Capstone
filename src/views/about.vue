<template>
  <div class="team-clean">
    <div class="container">
      <div class="intro">
        <h2 class="text-center">The Team </h2>
        <p class="text-center">Nunc luctus in metus eget fringilla. Aliquam sed justo ligula. Vestibulum nibh erat, pellentesque ut laoreet vitae. </p>
      </div>
      <div class="row people">
        <div class="col-md-6 col-sm-6 item"><img class="img-circle" src="https://cdn1.iconfinder.com/data/icons/user-pictures/100/male3-512.png">
          <h3 class="name">Brian Smith </h3>
          <p class="title">Developer </p>
          <p class="description">Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu gravida. Aliquam varius finibus est, et interdum justo suscipit id. Etiam dictum feugiat tellus, a semper massa. </p>
          <div class="social"><a href="#"><i class="fa fa-facebook-official"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-instagram"></i></a></div>
        </div>
        <div class="col-md-6 col-sm-6 item"><img class="img-circle" src="http://i.imgur.com/GjDaZ9o.jpg" width="160" height="160">
          <h3 class="name">Dominik Perez </h3>
          <p class="title">Developer </p>
          <p class="description">Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu gravida. Aliquam varius finibus est, et interdum justo suscipit id. Etiam dictum feugiat tellus, a semper massa. </p>
          <div class="social"><a href="#"><i class="fa fa-facebook-official"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-instagram"></i></a></div>
        </div>
        <div class="col-md-6 col-sm-6 item"><img class="img-circle" src="http://i.imgur.com/83eL0BD.jpg" width="160" height="160">
          <h3 class="name">Nick Wehrhan </h3>
          <p class="title">Developer </p>
          <p class="description">Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu gravida. Aliquam varius finibus est, et interdum justo suscipit id. Etiam dictum feugiat tellus, a semper massa. </p>
          <div class="social"><a href="#"><i class="fa fa-facebook-official"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-instagram"></i></a></div>
        </div>
        <div class="col-md-6 col-sm-6 item"><img class="img-circle" src="http://i.imgur.com/1vUEFPm.jpg" width="160" height="160">
          <h3 class="name">Tyler DeVaul </h3>
          <p class="title">Developer </p>
          <p class="description">Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu gravida. Aliquam varius finibus est, et interdum justo suscipit id. Etiam dictum feugiat tellus, a semper massa. </p>
          <div class="social"><a href="#"><i class="fa fa-facebook-official"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-instagram"></i></a></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" rel="stylesheet/less">
  //team
  .team-clean {
    color:#313437;
    background-color:#fff;
  }

  .team-clean p {
    color:#7d8285;
  }

  .team-clean h2 {
    font-weight:bold;
    margin-bottom:40px;
    padding-top:40px;
    color:inherit;
  }

  @media (max-width:767px) {
    .team-clean h2 {
      margin-bottom:25px;
      padding-top:25px;
      font-size:24px;
    }
  }

  .team-clean .intro {
    font-size:16px;
    max-width:500px;
    margin:0 auto;
  }

  .team-clean .intro p {
    margin-bottom:0;
  }

  .team-clean .people {
    padding-bottom:40px;
  }

  .team-clean .item {
    text-align:center;
    padding-top:50px;
  }

  .team-clean .item .name {
    font-weight:bold;
    margin-top:28px;
    margin-bottom:8px;
    color:inherit;
  }

  .team-clean .item .title {
    text-transform:uppercase;
    font-weight:bold;
    color:#d0d0d0;
    letter-spacing:2px;
    font-size:13px;
  }

  .team-clean .item .description {
    font-size:15px;
    margin-top:15px;
    margin-bottom:20px;
  }

  .team-clean .item img {
    max-width:160px;
  }

  .team-clean .social {
    font-size:18px;
    color:#a2a8ae;
  }

  .team-clean .social a {
    color:inherit;
    margin:0 10px;
    display:inline-block;
    opacity:0.7;
  }

  .team-clean .social a:hover {
    opacity:1;
  }

</style>