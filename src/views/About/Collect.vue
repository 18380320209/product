<template>
  <div class="Collect">
    <div class="collectTop">收藏记录：</div><br>
    <div class="collectMiddle">
      <ul class="ul03">
        <li class="li03" v-for="item in collectlist" :key="item.id">
          <div>
            <img :src="item.images" class="li03-img">
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
  name: "Collect",
  data(){
    return{
      collectlist:[
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
.collectTop{
  float: left;
  background-color: white;
  width: 108%;
  margin-left: -10px;
  height: 30px;
  border-radius: 8%;
}
.ul03{
  width: 100%;
  text-align: center;
  margin-left: -50px;
}
.li03{
  width: 45%;
  float: left;
  display: block;
  height: 200px;
  background-color: white;
  margin-top: 20px;
  border-radius: 8%;
  margin-left: 13px;
}
.li03-img{
  width: 80%;
  margin-top: 12px;
}
</style>