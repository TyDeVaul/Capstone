<template>
  <div class="recover">
    <div class="container">
      <div class="intro">
        <h2 class="text-center">Recover Account</h2>
        <p class="text-center">If you forgot your username and password, you can recover your account by typing in your email address below. We will send you an email on how to recover your account. </p>
      </div>
      <form class="form-inline" method="post">
        <div class="form-group">
          <input class="form-control" type="email" name="email" placeholder="Your Email">
        </div>
        <div class="form-group">
          <button class="btn btn-primary" type="submit">Send Email</button>
        </div>
      </form>
    </div>
  </div>
</template>

<style lang="less" rel="stylesheet/less">
  .recover {
    color: #313437;
    background-color: #fff;
    padding: 50px 0;
  }

  .recover p {
    color:#7d8285;
    line-height:1.5;
  }

  .recover h2 {
    font-size:24px;
    font-weight:bold;
    margin-bottom:25px;
    line-height:1.5;
    padding-top:0;
    margin-top:0;
    color:inherit;
  }

  .recover .intro {
    font-size:16px;
    max-width:500px;
    margin:0 auto 25px;
  }

  .recover .intro p {
    margin-bottom:35px;
  }

  .recover form {
    text-align:center;
  }

  .recover form .form-control {
    background:#eff1f4;
    border:none;
    border-radius:3px;
    box-shadow:none;
    outline:none;
    color:inherit;
    text-indent:9px;
    height:45px;
    margin-right:10px;
    min-width:250px;
  }

  .recover form .btn {
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

  .recover form .btn:hover {
    opacity:1;
  }

  .recover form .btn:active {
    transform:translateY(1px);
  }

  .recover form .btn-primary {
    background-color:#055ada !important;
    color:#fff;
    outline:none !important;
  }
</style>