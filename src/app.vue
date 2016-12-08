<template>
  <div>
    <!-- header -->
    <div>
      <nav class="navbar navbar-default navigation-clean-button">
        <div class="container-fluid">
          <div class="navbar-header">
            <router-link to="/" class="navbar-brand navbar-link">Scrape-N-Trade</router-link>
            <button class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navcol-1">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
          </div>
          <div class="collapse navbar-collapse" id="navcol-1">
            <p class="navbar-text navbar-right actions">
              <router-link to="signin" class="btn btn-default action-button" role="button">Login</router-link>
            </p>
          </div>
        </div>
      </nav>
    </div>

    <!-- view -->
    <div>
      <router-view></router-view>
    </div>

    <!-- footer -->
    <div class="footer-basic">
      <footer>
        <div class="social">
          <a href="#"><i class="fa fa-reddit-alien" aria-hidden="true"></i></a>
          <a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a>
          <a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a>
        </div>
        <ul class="list-inline">
          <li><a href="#">Home</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Terms</a></li>
          <li><a href="#">Privacy Policy</a></li>
        </ul>
        <p class="copyright">ScrapeTrader © 2016</p>
      </footer>
    </div>
  </div>
</template>

<style lang="less" rel="stylesheet/less">
  @import "../node_modules/bootstrap/less/bootstrap.less";
  @import "../node_modules/font-awesome/less/font-awesome.less";
  @import "../node_modules/toastr/toastr.less";
  @import (inline) "../node_modules/nprogress/nprogress.css";
  @fa-font-path: "/fonts/";

  //header
  .navigation-clean-button {
    background:#1d2834;
    padding-top:10px;
    padding-bottom:10px;
    color:#333;
    border-radius:0;
    box-shadow:none;
    border:none;
    margin-bottom:0;
    @media (max-width:767px) {
      padding-top:0;
      padding-bottom:0;
    }
    @media (max-width:767px) {
      .navbar-header {
        padding-top:10px;
        padding-bottom:10px;
      }
    }
    @media (max-width:767px) {
      .navbar-right {
        margin-bottom:20px;
      }
    }
    .navbar-brand {
      font-weight:bold;
      color:white;
    }
    .navbar-brand:hover {
      color:#222;
    }
    .navbar-toggle {
      border-color:#ddd;
      .icon-bar {
        background-color:#888;
      }
    }
    .navbar-toggle:hover, .navbar-toggle:focus {
      background:none;
    }
    .navbar-collapse, .navbar-form {
      border-top-color:#ddd;
    }
    .actions {
      margin-top:7px;
      margin-bottom:0;
    }
    .action-button, .action-button:active {
      background:#27405e;
      border-radius:20px;
      color:#fff;
      box-shadow:none;
      border:none;
      text-shadow:none;
      padding:10px 22px;
      transition:background-color 0.25s;
    }
    .action-button:hover {
      background:#66d7d7;
    }
  }

  //footer
  .footer-basic {
    padding:40px 0;
    background-color:#ffffff;
    color:#4b4c4d;
    ul {
      padding:0;
      list-style:none;
      text-align:center;
      font-size:18px;
      line-height:1.6;
      margin-bottom:0;
      a {
        color:inherit;
        text-decoration:none;
        opacity:0.8;
      }
      a:hover {
        opacity:1;
      }
    }
    li {
      padding:0 10px;
    }
    .social {
      text-align:center;
      padding-bottom:25px;
    }
    .social > a {
      font-size:24px;
      width:40px;
      height:40px;
      line-height:40px;
      display:inline-block;
      text-align:center;
      border-radius:50%;
      border:1px solid #ccc;
      margin:0 8px;
      color:inherit;
      opacity:0.75;
    }
    .social > a:hover {
      opacity:0.9;
    }
    .copyright {
      margin-top:15px;
      text-align:center;
      font-size:13px;
      color:#aaa;
      margin-bottom:0;
    }
  }

</style>
