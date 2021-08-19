<template>
  <div id="Electronic">
    <div class="ele-title">
      <h2>流行电器排行榜</h2>
    </div>
    <div class="cloth-list">
      <div class="list-tab-bar">
        <div class="list-tab-bar-item">
          精选
        </div>
        <div class="list-tab-bar-item">
          生活电器
        </div>
        <div class="list-tab-bar-item">
          中式厨电
        </div>
        <div class="list-tab-bar-item">
          西式厨电
        </div>
      </div>
      <div class="list-main">
        <div class="listA" v-for="item in EleProductList" :key="item.id">
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

    <div class="electronic-list">

    </div>

</template>

<script>
export default {
  name: "Electronic",
  data(){
    return{
      EleProductList:[
        {
          id:1,
          images:require("@/assets/img/productList/cloths/cloth-text01.jpg"),
          name:"白色短袖",
          price:"29.9"
        }
      ]
    }
  }
}
</script>

<style scoped>
  .ele-title{
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
    background-color: rgba(250,250,250,0.5);
    margin-top: 10px;
    border-radius: 5px;
  }
  .list-tab-bar-item{
    flex: 1;
    text-align: center;
  }
  .list-main{
    background-color: rgba(250,250,250,0.5);
    width: 95%;
    margin: auto;
    margin-top: 10px;
    border-radius: 5px;
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
    border-radius: 5px;


  }
</style>