<template>
  <div class="Information">
    <img src="@/assets/img/logo.jpg" alt="this is a picture">
    <div class="information-middle" v-for="item in informationList" :key="item.id">
      <div class="information-top-div">
        <div class="information-div">
          用户昵称：
        </div>
        <div class="information-p">
          {{item.name}}
        </div>
      </div>
      <hr>
      <div class="information-top-div">
        <div class="information-div">
          用户性别：
        </div>
        <div class="information-p">
          {{item.sex}}
        </div>
      </div>
      <hr>
      <div class="information-top-div">
        <div class="information-div">
          个性签名：
        </div>
        <div class="information-p">
          {{item.cont}}
        </div>
      </div>
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
    background-color:rgba(250,250,250,0.5) ;
    width: 98%;
    height: 130px;
    border-radius: 5%;
  }
  .information-middle ul{
    width: 80%;
  }

  .information-top-div{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    padding-top: 5px;
    padding-left: 8px;
  }
  .information-div{

    height: 20px;
    float: left;
  }
  .information-p{
    margin-left: 100px;
  }


</style>