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
      <div class="list-main"></div>
    </div>
    </div>

    <div class="electronic-list">

    </div>

</template>

<script>
export default {
  name: "Electronic"
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
    height: 500px;
    width: 95%;
    margin: auto;
    margin-top: 10px;
    border-radius: 5%;
  }
</style>