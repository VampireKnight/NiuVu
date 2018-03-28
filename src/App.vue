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
  html{
    font-size: 1vw;
  }
  body{
    margin: 0px;    
  }
  p,h1,h2,h3,h4,h5,h6{
    margin: 0px;
    padding: 0px;
  }
  button{
    outline: none;
    border:0px;
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
      namelist:{
        "set":{
            "a":"个人资料",
            "b":"修改密码",
            "c":"收货地址",
        }
      }
    }
  },
  computed:{
    gtrouter:function(){
        console.log(this.$route.name);
        if(this.$route.name){
          this.mobTit=this.$route.name;
          return this.mobTit;
        }else{
            var prout=this.$route.fullPath.split('/');
            this.mobTit=this.namelist[prout[1]][prout[2]];
        }
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
