<template>
  <div class="Sofety">
    <div id="demo">
      <input v-model="view" type="radio" value="v-a" id="a"><label for="a">A</label>
      <input v-model="view" type="radio" value="v-b" id="b"><label for="b">B</label>
      <transition name="component-fade" mode="out-in">
        <component v-bind:is="view"></component>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: "Software",
  data(){
    return{
      view:'v-a'
    }
  },
  components:{
    'v-a':{
      template:'<div>Component A</div>'
    },
    'v-b':{
      template: '<div>Component B</div>'
    }
  }
}
</script>

<style scoped>

</style>