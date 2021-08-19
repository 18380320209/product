<template>
  <div class="Footprint">
    <div class="footTop">浏览记录：</div><br>
    <div class="footMiddle">
      <ul class="ul02">
        <li class="li02" v-for="item in footlist" :key="item.id">
          <div>
            <img :src="item.images" class="li02-img">
            <h4>{{item.name}}</h4>
            <h5>￥{{item.price}}</h5>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footprint",
  data(){
    return{
      footlist:[
        {
          id:1,
          images:require("@/assets/img/productList/cloths/cloth-text03.jpg"),
          name:"白色短袖01",
          price:"49.9"
        },
        {
          id:1,
          images:require("@/assets/img/productList/cloths/cloth-text03.jpg"),
          name:"白色短袖02",
          price:"49.9"
        },
        {
          id:1,
          images:require("@/assets/img/productList/cloths/cloth-text03.jpg"),
          name:"白色短袖03",
          price:"49.9"
        }
      ]
    }
  }
}
</script>

<style scoped>
  .footTop{
    float: left;
    background-color:rgba(250,250,250,0.5);
    width: 108%;
    margin-left: -10px;
    height: 30px;
    border-radius: 5px;
  }
  .ul02{
    width: 100%;
    text-align: center;
    margin-left: -50px;
  }
  .li02{
    width: 45%;
    float: left;
    display: block;
    height: 200px;
    background-color: rgba(250,250,250,0.5);
    margin-top: 20px;
    border-radius: 5px;
    margin-left: 13px;
  }
  .li02-img{
    width: 80%;
    margin-top: 12px;
  }
</style>