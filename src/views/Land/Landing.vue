<template>
  <div class="landing">
    <!--顶部图标-->
    <div class="landing-top">

    </div>
    <!--中间菜单栏-->
    <div class="landing-centre">
      <router-link to="/land/register" class="landing-item">
        <div class="register">注册</div>
      </router-link>
      <router-link to="/land/login" class="landing-item" >
        <div class="login">登陆</div>
      </router-link>
    </div>

    <!--底部信息展示-->
    <div class="landing-bottom">
      <router-view class="landing-text"></router-view>
    </div>
  </div>
</template>

<script>

export default {
  name: "Landing"
}
</script>

<style scoped>

  .landing-top{
    height: 150px;
    background-color: rgba(250,250,250,0.5);
    border-radius: 5px;
  }

  .landing-centre{
    background-color: rgba(250,250,250,0.5);
    height: 40px;
    margin: auto;
    border-radius: 5%;
    margin-top: 10px;
    display: flex;
  }
  .landing-item{
    flex: 1;
    text-align: center;
    margin-top: 10px;
  }
  a {
    text-decoration: none;
    color: black;
  }
  a.router-link-exact-active {
    color: blueviolet;
  }
  .landing-bottom{
    background: rgba(250,250,250,0.5);
    height: 260px;
    margin-top: 10px;
  }
  .landing-text{
    padding-top: 10px;
  }
</style>