<template>
  <div class="register">
    <!--用户名-->
    <div class="register-commonality">
      <img src="@/assets/img/Lan/user.svg">
      <input type="text" name="register-phone" placeholder="请输入用户名">
    </div>
    <!--密码-->
    <div class="register-commonality">
      <img src="@/assets/img/Lan/password.svg">
      <input type="text" name="register-phone" placeholder="请输入密码">
    </div>
    <!--验证码-->
    <div class="register-commonality">
      <img src="@/assets/img/Lan/phone.svg">
      <input type="text" name="register-phone" placeholder="请输入电话号码">
    </div>
    <div class="register-code">
      <img src="@/assets/img/Lan/hint.svg">
      <input type="text" name="register-phone" class="register-text" placeholder="请输入6位验证码">

    </div>
    <img src="" class="code-img">
    <!--确认按钮-->
    <div class="register-ok">
      <button type="button">确认</button>
    </div>
    <!--下方提示-->
    <div class="register-hint">
      <p>注册表示你同意该软件用户服务协议和隐私协议</p>
    </div>

  </div>
</template>

<script>
export default {
  name: "register"
}
</script>

<style scoped>

.register-commonality{
  border: 1px solid rebeccapurple;
  height: 25px;
  width: 80%;
  margin: auto;
  margin-top: 10px;
}
.register-code{
  border: 1px solid rebeccapurple;
  height: 25px;
  width: 60%;
  margin-left: 30px;
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
  .register-text{
    width: 100px;
  }
  input{
    border: none;
    background-color: rgba(250,250,250,0.5);
  }
  .register-hint{
    margin-top: -30px;
  }

</style>