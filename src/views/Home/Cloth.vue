<template>
  <div id="Cloth">
    <div class="cloth-title">
      <h2>流行衣物排行榜</h2>
    </div>
    <div class="cloth-list">
      <div class="list-tab-bar">
        <div class="list-tab-bar-item">
          精选
        </div>
        <div class="list-tab-bar-item">
          裙装
        </div>
        <div class="list-tab-bar-item">
          套装
        </div>
        <div class="list-tab-bar-item">
          牛仔裤
        </div>
      </div>
      <div class="list-main">
        <div class="listA" v-for="item in ProductList" :key="item.id">
          <div class="listLine">
            <img v-bind:src="item.images" alt="Here is a picture of the items on the list" class="listImage">
          </div>
          <div class="listLine" >
            <h4>{{item.name}}</h4>
            <h5>￥{{item.price}}</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cloth",
  data(){
    return{
      ProductList:[
        {
          id:1,
          images:require("@/assets/img/productList/cloths/cloth-text01.jpg"),
          name:"白色短袖",
          price:"29.9"
        },
        {
          id:2,
          images:require("@/assets/img/productList/cloths/cloth-text02.jpg"),
          name:"裙子01",
          price:"29.9"
        },
        {
          id:3,
          images:require("@/assets/img/productList/cloths/cloth-text03.jpg"),
          name:"白色短袖02",
          price:"29.9"
        },
        {
          id:4,
          images:require("@/assets/img/productList/cloths/cloth-text04.jpg"),
          name:"白色短袖03",
          price:"9.9"
        },
        {
          id:5,
          images:require("@/assets/img/productList/cloths/cloth-text05.jpg"),
          name:"裙子02",
          price:"59.9"
        },


      ]
    }
  }
}
</script>

<style scoped>
 .cloth-title{
   width: 100%;
   height: 40px;
   margin-top: -30px;
 }
 h2{
   font-family: 宋体;
   font-size: 20px;
   padding: 10px;
 }
 .list-tab-bar{
   display: flex;
   height: 30px;
   width: 95%;
   margin: auto;
   background-color: white;
   margin-top: 10px;
   border-radius: 5%;
 }
 .list-tab-bar-item{
   flex: 1;
   text-align: center;
 }
 .list-main{
   background-color: white;
   width: 95%;
   margin: auto;
   margin-top: 10px;
   border-radius: 5%;
 }
 .listA{
   display: flex;
 }
 .listLine{
   flex: 1;
   text-align: left;
 }

 .listImage{
   height: 80%;
   width: 100px;
   margin-top: 10px;
   margin-left: 30px;
   border-radius: 5%;


 }

</style>