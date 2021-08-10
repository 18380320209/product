<template>
  <div class="cmp">
    <el-button @click="openAlertBox">退出登陆</el-button>
    <div class="alert-box" ref="alertBox">
      <div class="box-head">
        <strong class="title">确认信息</strong>
        <span @click="closeAlertBox" class="close">×</span>
      </div>
      <div class="box-content">
        <div class="one-line">
          <span class="test1"><i>*</i>确认是否退出登陆</span>
        </div>
        <div class="box-btn">
          <button @click="commitAlertBox" class="ok">提交</button>
          <button @click="closeAlertBox" class="no">取消</button>
        </div>
      </div>
    </div>
    <div ref="boxBg" class="box-bg"></div>
  </div>
</template>

<script>
export default {
  name: "Cmp",
  methods:{
    /* 打开*/
    openAlertBox(){
      this.$refs.alertBox.style.display = "block";
      this.$refs.boxBg.style.display = "block";
    },
    /* 关闭*/
    closeAlertBox(){
      this.$refs.alertBox.style.display = "none";
      this.$refs.boxBg.style.display = "none";
    },
    /* 提交*/
    commitAlertBox(){
      this.$refs.alertBox.style.display = "none";
      this.$refs.boxBg.style.display = "none";
    }
  }
}
</script>

<style scoped>
  .cmp{
    width: 100%;
    position: relative;
  }
  .alert-box{
    display: none;
    width: 80%;
    height: 200px;
    background: #fff;
    border-radius: 10px 10px 10px 10px;
    position: absolute;
    top: -90px;
    left: 50%;
    z-index: 999;
    transform: translate(-50%, -50%);
  }
  .box-head{
    width: 100%;
    height: 42px;
    background: #f4f4f4;
    border-radius: 10px 10px 0px 0px;
    padding: 0 20px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    line-height: 42px;
    color: #666666;
  }
  .title{

  }
  .close{
    cursor: pointer;
  }
  .box-content{
    padding: 30px 40px;
    box-sizing: border-box;
  }
  .test1{
    font-size: 16px;
  }
  i{
    color: red;
  }
  input{
    width: 440px;
    height: 28px;
    background: #ffffff;
    border: 1px solid #e5e5e5;
    box-sizing: border-box;
    padding-left: 13px;
    border-radius: 2px;
  }
  .one-line{
    display: flex;
    justify-content: space-between;
  }
  .box-btn{
    width: 220px;
    margin: 0 auto;
    margin-top: 40px;
    display: flex;
    justify-content: space-between;
  }
  .ok{
    width: 25%;
    height: 34px;
    line-height: 34px;
    border-radius: 6px;
    font-size: 14px;
    border: 1px solid #0066ff;
    box-sizing: border-box;
    outline: 0;
    cursor: pointer;
    background: #0066ff;
    color: #ffffff;
  }
  .no{
    width: 25%;
    height: 34px;
    line-height: 34px;
    border-radius: 6px;
    font-size: 14px;
    border: 1px solid #0066ff;
    box-sizing: border-box;
    outline: 0;
    background: #e7f5ff;
    color: #0066ff;
    margin-right: 35%;
  }
  .box-bg{
    display: none;
    position: fixed;
    z-index: 10;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.2);
  }
</style>