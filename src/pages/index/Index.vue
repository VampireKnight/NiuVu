<template>
  <div>
   <!--  <mobtop></mobtop>  --> 
    <div class="container">
      <keep-alive>
         <router-view></router-view> 
      </keep-alive>
    </div>
    <footer class="mb-footer">
      <ul class="nav-list">
        <router-link :to="{path: '/'}" tag="li"><i class="nvico"></i>首页</router-link>
        <router-link :to="{path: '/courlis'}"  tag="li"><i class="nvico"></i>课程</router-link>
        <router-link :to="{path: '/acadlis'}"  tag="li"><i class="nvico"></i>学院</router-link>
        <router-link :to="{path: '/dyslis'}"   tag="li"><i class="nvico"></i>动态</router-link>
        <router-link :to="{path: '/personal'}" tag="li"><i class="nvico"></i>个人中心</router-link>
      </ul>
    </footer>
  </div>
</template>

<script>
/*import mobtop from 'mobtop';*/
export default {
  name: 'App',
  components: { // 声明子组件
/*    mobtop,*/
  },
}
</script>

<style>
body{
  margin: 0px;
}
.mb-footer{
  background-color: yellow;
  overflow: hidden;
  position: fixed;
  bottom: 0px;
}
.nav-list{
  margin: 0px;
  padding: 0px;
  list-style: none;
}
.nav-list li{
  display: inline-block;
  float: left;
  width: 20vw;
  text-align: center;
}
.router-link-exact-active{
  color:#f8444d;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>