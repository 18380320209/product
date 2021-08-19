<template>
  <div class="login">
    <!--用户名-->
    <div class="login-commonality">
      <img src="@/assets/img/Lan/user.svg">
      <input type="text" name="login-phone" placeholder="请输入用户名">
    </div>
    <!--密码-->
    <div class="login-commonality">
      <img src="@/assets/img/Lan/password.svg">
      <input type="text" name="login-phone" placeholder="请输入密码">
    </div>
    <div class="login-ok">
      <button>登陆</button>
    </div>
    <div class="login-other">

    </div>
    <div class="login-hint">
      <p>登陆表示你同意该软件用户服务协议和隐私协议</p>
    </div>

  </div>
</template>

<script>
export default {
  name: "login"
}
</script>

<style scoped>
  .login-commonality{
    border: 1px solid rebeccapurple;
    height: 25px;
    width: 80%;
    margin: auto;
    margin-top: 10px;
  }
  p{
    font-size: 10px;
    margin-top: 50px;
  }
  button{
    color: #ffffff;
    background-color: blueviolet;
    font-weight: bold;
    font-size: 14px;
    border: 1px solid blueviolet;
    width:40%;
    height: 35px;
    margin: auto;
    margin-top: 10px;
    border-radius: 15px;
  }
  button:hover{
    border-radius: 15px;
    background-color: gray;
    color: #ffffff;
  }
  img{
    height: 15px;
    width: 15px;
    padding-top: 2px;
    margin-right: 10px;
  }
  input{
    border: none;
    background-color: rgba(250,250,250,0.5);
  }

</style>