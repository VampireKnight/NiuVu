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
        <router-link :to="{path: '/'}" tag="li"><div class="iconWrap"><i class="nvico"></i></div><p>首页</p></router-link>
        <router-link :to="{path: '/courlis'}"  tag="li"><div class="iconWrap"><i class="nvico"></i></div><p>课程</p></router-link>
        <router-link :to="{path: '/acadlis'}"  tag="li"><div class="iconWrap"><i class="nvico"></i></div><p>学院</p></router-link>
        <router-link :to="{path: '/dyslis'}"   tag="li"><div class="iconWrap"><i class="nvico"></i></div><p>动态</p></router-link>
        <router-link :to="{path: '/personal'}" tag="li"><div class="iconWrap"><i class="nvico"></i></div><p>个人中心</p></router-link>
                <!-- <div class="relpos">
                  <i class="bnavli-myico bnav4"></i>
                </div>
                <p>会员</p> -->
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
  height:100px;
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
  -moz-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.nav-list .iconWrap{
  height: 36px;
}
.nvico:after{
  content:"";
  height:36px;
  width:36px;
  margin-left:-18px;
  position:absolute;
} 
.nvico:after {
  background: url("../../../static/Img/Icon/bnav2.png") no-repeat;
  background-size: 36px 36px; 
}
.router-link-exact-active .nvico:after{
  background: url("../../../static/Img/Icon/bnav2-ac.png") no-repeat;
  background-size: 36px 36px; 
}
</style>