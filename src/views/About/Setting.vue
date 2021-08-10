<template>
  <div class="Setting">
    <router-link to="/about/setting/information" class="rlink">
      <div class="personal" v-for="item in myselfList" :key="item.id">
        <img :src="item.images" alt="is this picture">
        <div class="head">
          <h4>{{item.name}}</h4>
          <h5>账号：{{item.phone}}</h5>
        </div>
      </div>
    </router-link>

    <div class=" setting-middle">

          <router-link to="/about/setting/safety" class="rlink">
            <div class="safety">
              账号与安全
              <img src="@/assets/img/about/setting-next.svg" alt="this is a picture" >
            </div>
          </router-link>


      <hr />

          <router-link to="/about/setting/software" class="rlink">
            <div class="safety">
              关于软件
              <img src="@/assets/img/about/setting-next.svg" alt="this is a picture">
            </div>
          </router-link>

      <hr />

          <router-link to="/about/setting/theme" class="rlink">
            <div class="safety">
              主题换肤
              <img src="@/assets/img/about/setting-next.svg" alt="this is a picture">
            </div>
          </router-link>



    </div>
    <div class="button">
      <div class="cut">
        切换账号
      </div>
      <div class="exit">
        <Cmp/>
      </div>
    </div>
  </div>


</template>

<script>
import Cmp from "./Cmp";

export default {
  name: "Setting",
  components:{
    Cmp
  },
  data(){
    return{
      myselfList:[
        {
          id:1,
          phone:19950193512,
          images:require('@/assets/img/logo.jpg'),
          name:'胖头鱼',
          cont:'hello',
        }
      ]
    }
  }
}
</script>

<style scoped>
  .Setting{
    margin: auto;
  }
  .personal{
    background-color: white;
    width: 98%;
    height: 85px;
    border-radius: 5%;
  }
  .personal img{
    width: 60px;
    height: 60px;
    border-radius: 50%;
    margin-top: 10px;
    margin-left: 20px;
    float: left;
  }
  .safety img{
    height: 15px;
    float: right;
  }
  h4{
    font-family: 宋体;
    font-size: 20px;
    padding: 10px;
    text-align: center;
  }
  h5{
    font-family: 宋体;
    font-size: 14px;
    text-align:center;
    margin-top: -25px;
    color: darkgray;
    margin-left: 20px;
  }
  hr{
    width: 90%;
    border: none;
    background-color: antiquewhite;
    height: 2px;
    margin-top: -10px;
  }
  .setting-middle{
    background-color: white;
    width: 98%;
    margin-top: 20px;
    height: 200px;
  }
  .safety{
    font-size: 18px;
    text-align: left;
    margin-left: 30px;
    padding: 20px;
  }
  .button{
    margin-top: 20px;
    width: 98%;
    border-radius: 5%;
  }
  .cut{
    font-size: 18px;
    padding: 10px;
    background-color: white;
  }
  .exit{
    font-size: 18px;
    background-color: white;
    padding: 10px;
    margin-top: 10px;
  }
  .rlink{
    text-decoration: none;
    color: black;
  }

</style>