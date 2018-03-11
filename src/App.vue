<template>
   <div>
      <mob-top v-bind:title="gtrouter"></mob-top>
      <div class="container">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </div> 
  </div>
</template>
<style type="text/css">
  body{
    margin: 0px;
  }
  ul,li{
    margin: 0px;
    padding: 0px;
    border: none;
  }
</style>
<script>
/*console.log($route);*/
import MobTop from './mobtop';
export default {
  name: 'App',
  data(){
    return{

    }
  },
  computed:{
    gtrouter:function(){
        this.mobTit=this.$route.name;
/*        console.log(this.mobTit);*/
        return this.mobTit;
    }
  },
  methods:{
   
  },
  components: { // 声明子组件
   	MobTop,
  },
}
</script>
