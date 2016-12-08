<template>
  <div class="signin-photo">
    <div class="form-container">
      <div class="image-holder"></div>
      <form method="post">
        <h2 class="text-center"><strong>Sign In</strong> to your account.</h2>
        <div class="form-group">
          <input class="form-control" type="email" name="email" placeholder="Email">
        </div>
        <div class="form-group">
          <input class="form-control" type="password" name="password" placeholder="Password">
        </div>
        <div class="form-group">
          <button class="btn btn-primary btn-block" type="submit">Login </button>
        </div>
        <router-link to="register" class="already">Don'thave an account? Signup here.</router-link>
        <router-link to="recover" class="already">Forgot your password?</router-link>
      </form>
    </div>
  </div>
</template>

<style lang="less" rel="stylesheet/less">
  .signin-photo {
    background:#f1f7fc;
    padding:80px 0;
  }

  .signin-photo .image-holder {
    display:table-cell;
    width:auto;
    background:url(/imgs/signinformimage.jpg);
    background-size:cover;
  }

  .signin-photo .form-container {
    display:table;
    max-width:900px;
    width:90%;
    margin:0 auto;
    box-shadow:1px 1px 5px rgba(0,0,0,0.1);
  }

  .signin-photo form {
    display:table-cell;
    width:400px;
    background-color:#ffffff;
    padding:40px 60px;
    color:#505e6c;
  }

  @media (max-width:991px) {
    .signin-photo form {
      padding:40px;
    }
  }

  .signin-photo form h2 {
    font-size:24px;
    line-height:1.5;
    margin-bottom:30px;
  }

  .signin-photo form .form-control {
    background:#f7f9fc;
    border:none;
    border-bottom:1px solid #dfe7f1;
    border-radius:0;
    box-shadow:none;
    outline:none;
    color:inherit;
    text-indent:6px;
    height:40px;
  }

  .signin-photo form .checkbox {
    font-size:13px;
    line-height:20px;
  }

  .signin-photo form .btn-primary {
    background:#f4476b;
    border:none;
    border-radius:4px;
    padding:11px;
    box-shadow:none;
    margin-top:35px;
    text-shadow:none;
    outline:none !important;
  }

  .signin-photo form .btn-primary:hover, .signin-photo form .btn-primary:active {
    background:#eb3b60;
  }

  .signin-photo form .btn-primary:active {
    transform:translateY(1px);
  }

  .signin-photo form .already {
    display:block;
    text-align:center;
    font-size:12px;
    color:#6f7a85;
    opacity:0.9;
    text-decoration:none;
  }
</style>