<template>
  <div class="Information">
    <img src="@/assets/img/logo.jpg" alt="this is a picture">
    <div class="information-middle" v-for="item in informationList" :key="item.id">
      <ul>
        <li class="li-title">用户昵称：</li>
        <li class="li-text" >{{item.name}}</li>
        <li class="li-title">用户性别：</li>
        <li class="li-text">{{item.sex}}</li>
        <li class="li-title">个性签名：</li>
        <li class="li-text">{{item.cont}}</li>
      </ul>
    </div>

  </div>
</template>

<script>

  export default {
    name: "Information",
    data(){
      return{
        informationList:[
          {
            id:1,
            phone:19950193512,
            images:require('@/assets/img/logo.jpg'),
            name:'胖头鱼',
            sex:"女",
            cont:'hello',
          }
        ]
      }
    }
  }
</script>

<style scoped>
  img{
    height: 100px;
    border-radius: 50%;
  }
  .information-middle{
    background-color: white;
    width: 98%;
    height: 130px;
    border-radius: 5%;
  }
  .information-middle ul{
    width: 80%;
  }
  .li-title{
    font-family: SimHei;
    font-size: 18px;
    width: 35%;
    float: left;
    display: block;
    padding: 10px;
  }
  .li-text{
    font-size: 18px;
    font-family: 宋体;
    width: 50%;
    float: left;
    display: block;
    padding: 10px;
  }


</style>