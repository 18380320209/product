<template>
  <div class="home">
    <div class="top-nav">
      <img src="@/assets/img/logo.jpg" class="advertising">
    </div>
    <div>
      <div class="list-div">
        <h2>榜单</h2>
      </div>
      <div id="tab-bar">
        <div class="tab-bar-item">
          <router-link to="/home/cloth">
            <img src="@/assets/img/home/text01.jpg" class="list-img">
            <div>衣物</div>
          </router-link>
        </div>
        <div class="tab-bar-item">
          <router-link to="/home/food">

              <img src="@/assets/img/home/text02.jpg" class="list-img">
              <div>食品</div>
          </router-link>
        </div>
        <div class="tab-bar-item">
          <router-link to="/home/beauty">

              <img src="@/assets/img/home/text03.jpg" class="list-img">
              <div>美妆</div>
          </router-link>
        </div>
        <div class="tab-bar-item">
          <router-link to="/home/electronic">

              <img src="@/assets/img/home/text04.jpg" class="list-img">
              <div>电子</div>
          </router-link>
        </div>

    </div>
    </div>
    <div id="recommend">
      <ul class="ul01" >
        <li class="li01" v-for="item in HomeProductList" v-bind:key="item.id">
          <div>
            <img v-bind:src="item.images" class="li-img">
            <h4>{{ item.name }}</h4>
            <h5>￥{{item.price}}</h5>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

  export default {
    name: "Home",
    components: {
    },
    data(){
      return{
        HomeProductList:[
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

};
</script>
<style>
  .top-nav{
    z-index: inherit;
  }
  .advertising{
    height: 200px;
    width: 95%;
    border-radius: 10px;
    margin-top: 10px;
  }
  .list-img{
    height: 40px;
    width: 40px;
    border-radius: 50%;
    margin-top: 5px;
  }
  #tab-bar{
    display: flex;
    height: 80px;
    width: 95%;
    margin: auto;
    background-color: white;
    margin-top: 10px;
  }
  .tab-bar-item{
    flex: 1;
    text-align: center;
  }
  .ul01{
    width: 95%;
    text-align: center;
    margin-left: -30px;
  }
  .li01{
    width: 45%;
    float: left;
    display: block;
    height: 200px;
    background-color: white;
    margin-left: 10px;
    margin-top: 20px;
    border-radius: 8%;
  }
  .li-img{
    width: 80%;
    margin-top: 10px;
    border-radius: 5%;
  }
  h4{
    margin-top: 5px;
    font-family: 宋体;
    text-align: center;
  }
  h5{
    margin-top: -10px;
    font-family: 宋体;
    text-align: center;
  }
  h2{
    font-family: 宋体;
    font-size: 20px;
    text-align: center;
  }
  .list-div{
    background-color: white;
    width: 95%;
    height: 30px;
    margin: auto;
  }
  #tab-bar a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
    font-family: 宋体;
  }

</style>
