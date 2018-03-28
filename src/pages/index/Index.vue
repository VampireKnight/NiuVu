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
        <router-link :to="{path: '/index'}" tag="li"><div class="iconWrap"><i class="nvico nav1"></i></div><p>首页</p></router-link>
        <router-link :to="{path: '/courlis'}"  tag="li"><div class="iconWrap"><i class="nvico nav2"></i></div><p>课程</p></router-link>
        <router-link :to="{path: '/acadlis'}"  tag="li"><div class="iconWrap"><i class="nvico nav3"></i></div><p>学院</p></router-link>
        <router-link :to="{path: '/dyslis'}"   tag="li"><div class="iconWrap"><i class="nvico nav4"></i></div><p>动态</p></router-link>
        <router-link :to="{path: '/personal'}" tag="li"><div class="iconWrap"><i class="nvico nav5"></i></div><p>个人中心</p></router-link>
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
  padding-bottom: 22vw;
}
.mb-footer{
  background-color: white;
  overflow: hidden;
  position: fixed;
  padding-top: 1.5vw;
  bottom: 0px;
  box-shadow: 0px -5px 10px rgb(232,227,226);
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
  height: 5.6vw;
}
.nav-list p{
  line-height: 1.6;
}
.nvico:after{
  content:"";
  height:5.6vw;
  width:5.6vw;
  margin-left:-2.8vw;
  position:absolute;
} 
/*.nvico:after {
  background: url("../../../static/Img/Icon/bnav2.png") no-repeat;
  background-size: 36px 36px; 
}
.router-link-exact-active .nvico:after{
  background: url("../../../static/Img/Icon/bnav2-ac.png") no-repeat;
  background-size: 36px 36px; 
}*/
.nav1:after{
  background: url("../../../static/Img/Icon/nav1.png") no-repeat;
  background-size: 5.6vw 5.6vw; 
}
.nav2:after{
  background: url("../../../static/Img/Icon/nav2.png") no-repeat;
  background-size: 5.6vw 5.6vw; 
}
.nav3:after{
  background: url("../../../static/Img/Icon/nav3.png") no-repeat;
  background-size: 5.6vw 5.6vw; 
}
.nav4:after{
  background: url("../../../static/Img/Icon/nav4.png") no-repeat;
  background-size: 5.6vw 5.6vw; 
}
.nav5:after{
  background: url("../../../static/Img/Icon/nav5.png") no-repeat;
  background-size: 5.6vw 5.6vw; 
}
.router-link-active .nav1:after{
  background: url("../../../static/Img/Icon/ac-nav1.png") no-repeat;
  background-size: 5.6vw 5.6vw; 
}
.router-link-active .nav2:after{
  background: url("../../../static/Img/Icon/ac-nav2.png") no-repeat;
  background-size: 5.6vw 5.6vw; 
}
.router-link-active .nav3:after{
  background: url("../../../static/Img/Icon/ac-nav3.png") no-repeat;
  background-size: 5.6vw 5.6vw; 
}
.router-link-active .nav4:after{
  background: url("../../../static/Img/Icon/ac-nav4.png") no-repeat;
  background-size: 5.6vw 5.6vw; 
}
.router-link-active .nav5:after{
  background: url("../../../static/Img/Icon/ac-nav5.png") no-repeat;
  background-size: 5.6vw 5.6vw; 
}
.router-link-active p{
  color: #f7444c;
}
</style>