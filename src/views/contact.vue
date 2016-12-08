<template>
  <div class="contact-clean">
    <form method="post">
      <h2 class="text-center">Contact us</h2>
      <div class="form-group has-success has-feedback">
        <input class="form-control" type="text" name="name" placeholder="Name">
        <i class="form-control-feedback fa fa-check" aria-hidden="true"></i>
      </div>
      <div class="form-group has-error has-feedback">
        <input class="form-control" type="email" name="email" placeholder="Email">
        <i class="form-control-feedback fa fa-times" aria-hidden="true"></i>
        <p class="help-block">Please enter a correct email address.</p>
      </div>
      <div class="form-group">
        <textarea class="form-control" rows="14" name="message" placeholder="Message"></textarea>
      </div>
      <div class="form-group">
        <button class="btn btn-primary" type="submit">send </button>
      </div>
    </form>
  </div>
</template>

<style lang="less" rel="stylesheet/less">
  //contact
  .contact-clean {
    background:#f1f7fc;
    padding:80px 0;
  }

  @media (max-width:767px) {
    .contact-clean {
      padding:20px 0;
    }
  }

  .contact-clean form {
    max-width:480px;
    width:90%;
    margin:0 auto;
    background-color:#ffffff;
    padding:40px;
    border-radius:4px;
    color:#505e6c;
    box-shadow:1px 1px 5px rgba(0,0,0,0.1);
  }

  @media (max-width:767px) {
    .contact-clean form {
      padding:30px;
    }
  }

  .contact-clean h2 {
    margin-top:5px;
    font-weight:bold;
    font-size:28px;
    margin-bottom:36px;
    color:inherit;
  }

  .contact-clean .form-group:last-child {
    margin-bottom:5px;
  }

  .contact-clean form .form-control {
    background:#fff;
    border:1px solid #d4d4d4;
    border-radius:2px;
    box-shadow:1px 1px 1px rgba(0,0,0,0.05);
    outline:none;
    color:inherit;
    padding-left:12px;
    height:42px;
  }

  .contact-clean form .form-control:focus {
    border:1px solid #b2b2b2;
  }

  .contact-clean form textarea.form-control {
    min-height:100px;
    max-height:260px;
    padding-top:10px;
    resize:vertical;
  }

  .contact-clean form .form-control-feedback {
    height:42px;
    line-height:42px;
  }

  .contact-clean form .help-block {
    margin-top:8px;
    font-size:13px;
  }

  .contact-clean form .btn {
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
    outline:none !important;
  }

  .contact-clean form .btn:hover {
    opacity:1;
  }

  .contact-clean form .btn:active {
    transform:translateY(1px);
  }

  .contact-clean form .btn-primary {
    background-color:#055ada !important;
    margin-top:15px;
    color:#fff;
  }

</style>