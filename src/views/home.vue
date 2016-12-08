<template>
  <div>
    <!-- highlight -->
    <div class="highlight-phone">
      <div class="container">
        <div class="row">
          <div class="col-sm-8">
            <div class="intro">
              <h2>Get Actionable Trade Information</h2>
              <p>Nunc luctus in metus eget fringilla. Aliquam sed justo ligula. Vestibulum nibh erat, pellentesque ut laoreet vitae. Aliqua sed justo ligula.</p>
              <router-link to="register" class="btn btn-primary" role="button">get started</router-link>
            </div>
          </div>
          <div class="col-sm-4 hidden-xs">
            <div class="iphone-mockup"><img src="/imgs/iphone.svg" class="device">
              <div class="screen"></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- articles -->
    <div class="article-list">
      <div class="container">
        <div class="intro">
          <h2 class="text-center">Economic News</h2>
          <p class="text-center">Nunc luctus in metus eget fringilla. Aliquam sed justo ligula. Vestibulum nibh erat, pellentesque ut laoreet vitae. </p>
        </div>
        <div class="row articles">
          <div class="col-md-4 col-sm-6 item">
            <a href="#"><img class="img-responsive" src="/imgs/article.jpeg"></a>
            <h3 class="name">Article Title</h3>
            <p class="description">Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu gravida. Aliquam varius finibus est, interdum justo suscipit id.</p>
            <a href="#" class="action"><i class="fa fa-arrow-circle-right" aria-hidden="true"></i></a>
          </div>
          <div class="col-md-4 col-sm-6 item">
            <a href="#"><img class="img-responsive" src="/imgs/building.jpg"></a>
            <h3 class="name">Article Title</h3>
            <p class="description">Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu gravida. Aliquam varius finibus est, interdum justo suscipit id.</p>
            <a href="#" class="action"><i class="fa fa-arrow-circle-right" aria-hidden="true"></i></a>
          </div>
          <div class="col-md-4 col-sm-6 item">
            <a href="#"><img class="img-responsive" src="/imgs/signinformimage.jpg"></a>
            <h3 class="name">Article Title</h3>
            <p class="description">Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu gravida. Aliquam varius finibus est, interdum justo suscipit id.</p>
            <a href="#" class="action"><i class="fa fa-arrow-circle-right" aria-hidden="true"></i></a>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<style lang="less" rel="stylesheet/less">
  //highlight phone
  .highlight-phone {
    color:#313437;
    background-color:#eef4f7;
    padding:50px 0 55px;
    overflow:hidden;
  }

  @media (max-width:767px) {
    .highlight-phone {
      text-align:center;
    }
  }

  .highlight-phone p {
    color:#7d8285;
  }

  .highlight-phone h2 {
    font-weight:bold;
    margin-bottom:35px;
    line-height:1.5;
    padding-top:0;
    margin-top:0;
    color:inherit;
  }

  .highlight-phone .intro {
    font-size:18px;
    max-width:500px;
    line-height:1.5;
  }

  @media (max-width:767px) {
    .highlight-phone .intro {
      max-width:none;
    }
  }

  .highlight-phone .intro p {
    margin-bottom:35px;
  }

  .highlight-phone .intro .btn {
    padding:16px 32px;
    border:none;
    background:none;
    box-shadow:none;
    text-shadow:none;
    opacity:0.9;
    text-transform:uppercase;
    font-weight:bold;
    font-size:13px;
    letter-spacing:0.4px;
    line-height:1;
  }

  .highlight-phone .intro .btn:hover {
    opacity:1;
  }

  .highlight-phone .intro .btn:active {
    transform:translateY(1px);
  }

  .highlight-phone .intro .btn-primary {
    background-color:#055ada;
    color:#fff;
  }

  .highlight-phone .iphone-mockup {
    position:relative;
    max-width:260px;
    margin-top:-30px;
    margin-bottom:-230px;
    transform:rotate(-15deg);
  }

  .highlight-phone .iphone-mockup img.device {
    width:100%;
    height:auto;
  }

  .highlight-phone .iphone-mockup .screen {
    position:absolute;
    width:88%;
    height:77%;
    top:12%;
    border-radius:2px;
    left:6%;
    border:1px solid #444;
    background-color:#aaa;
    overflow:hidden;
    background:url(/imgs/Robinhood-stock-trading-app.png);
    background-size:cover;
    background-position:center;
  }

  .highlight-phone .iphone-mockup .screen:before {
    content:'';
    background-color:#fff;
    position:absolute;
    width:70%;
    height:140%;
    top:-12%;
    right:-60%;
    transform:rotate(-19deg);
    opacity:0.2;
  }


  //articles
  .article-list {
    color:#313437;
    background-color:#fff;
  }

  .article-list p {
    color:#7d8285;
  }

  .article-list h2 {
    font-weight:bold;
    margin-bottom:40px;
    padding-top:40px;
    color:inherit;
  }

  @media (max-width:767px) {
    .article-list h2 {
      margin-bottom:25px;
      padding-top:25px;
      font-size:24px;
    }
  }

  .article-list .intro {
    font-size:16px;
    max-width:500px;
    margin:0 auto;
  }

  .article-list .intro p {
    margin-bottom:0;
  }

  .article-list .articles {
    padding-bottom:40px;
  }

  .article-list .item {
    padding-top:50px;
    min-height:425px;
    text-align:center;
  }

  .article-list .item .name {
    font-weight:bold;
    font-size:16px;
    margin-top:20px;
    color:inherit;
  }

  .article-list .item .description {
    font-size:14px;
    margin-top:15px;
    margin-bottom:0;
  }

  .article-list .item .action {
    font-size:24px;
    width:24px;
    margin:22px auto 0;
    line-height:1;
    display:block;
    color:#4f86c3;
    opacity:0.85;
    transition:opacity 0.2s;
    text-decoration:none;
  }

  .article-list .item .action:hover {
    opacity:1;
  }

</style>