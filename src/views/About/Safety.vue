<template>
 <div id="Safety">
   <div id="safetyTitle" class="saftytitle">
     <p>❥账号安全❥</p>
   </div>
    <div id="safetyTop" class="safetytop" v-for="item in safetylist" :key="item.id">
      <div class="safetytop01">
        <div class="safetytopdiv">
          <div class="safetydiv">
            电话号码：
          </div>
          <div class="safetyp">
            {{item.phone}}
          </div>
        </div>
        <hr>
        <div class="safetytopdiv">
          <div class="safetydiv">
            用户密码：
          </div>
          <div class="safetyp">
            {{item.password}}
          </div>
        </div>
        <hr>
        <div class="safetytopdiv">
          <div class="safetydiv">
            用户昵称：
          </div>
          <div class="safetyp">
            {{item.name}}
          </div>
        </div>
        <hr>
      </div>
    </div>
 </div>
</template>

<script>
export default {
  name: "Safety",
  data(){
    return{
      safetylist:[
        {
          id:1,
          images:require('@/assets/img/logo.jpg'),
          name:'胖头鱼',
          cont:'hello',
          phone:19950193512,
          password:123456,
          taobao:654321,
        }
      ]
    }
  }
}
</script>

<style scoped>
  .saftytitle{
    font-size: 20px;
    margin-top: -10%;
  }
  .safetytop{
    background-color: white;
    height: 150px;
    width: 98%;
  }
  .safetytop01{
    padding: 20px;

  }
  .safetytopdiv{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .safetydiv{

    height: 20px;
    float: left;
  }
  .safetyp{
    margin-left: 100px;
  }
</style>