<template>
  <div class="about">
    <div class="myself" v-for="item in piclist" :key="item.id">
      <img :src="item.images" alt="is this picture">
      <div class="head">
        <p class="head-text01">{{item.name}}</p>
        <p class="head-text02">{{item.cont}}</p>
      </div>
      <div class="head-set">
        <router-link to="/about/setting">
          <img src="@/assets/img/about/set.svg" alt="this is a picture about setting" >
        </router-link>
      </div>
    </div>
    <div class="middle">
      <router-link to="/about/Footprint" class="middle-item" >
          <div class="footprint">足迹</div>

      </router-link>
      <router-link to="/about/Collect" class="middle-item">
          <div class="collect">收藏</div>
      </router-link>

    </div>
    <div class="bottom">
      <router-view class="view"></router-view>
    </div>
  </div>
</template>
<script>

  export default {
    name:'About',
    components:{
    },
    data(){
      return {
        piclist:[
          {
            id:1,
            images:require('@/assets/img/logo.jpg'),
            name:'胖头鱼',
            cont:'hello',
          }
        ],
        cur:1

      }
    }
  }
</script>
<style>
  .myself{
    background-color: rgba(250,250,250,0.5);
    width: 95%;
    height: 70px;
    margin: auto;
    border-radius: 5px;
  }
  .myself img{
    width: 60px;
    height: 60px;
    border-radius: 50%;
    margin-top: 5px;
    margin-left: 20px;
    float: left;
  }
  .head{
    float: left;
  }
  .head-text01{
    font-size: 20px;
    font-family: 宋体;
    font-weight: bold;
    margin: 10px;
  }
  .head-text02{
    font-size: 12px;
    font-family: 宋体;
  }
  .middle{
    background-color: rgba(250,250,250,0.5);
    width: 95%;
    height: 40px;
    margin: auto;
    border-radius: 5px;
    margin-top: 10px;
    display: flex;
  }
  .middle-item{
    flex: 1;
    text-align: center;
    margin-top: 10px;
  }
  .bottom{
    width: 95%;
    height: 500px;
    margin: auto;
    margin-top: 10px;
  }
  .head-set img{
    float: right;
    height: 30px;
    padding: 20px;
  }
  .footprint{
    margin-top: 0px;
  }
  a {
    text-decoration: none;
    color: black;
  }
  a.router-link-exact-active {
    color: blueviolet;
  }
  .view{
    padding: 10px;
  }

</style>
