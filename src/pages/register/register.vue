<template>
  <div>
  	<!-- window: height:2148 -->
   <!--  <mobtop></mobtop>  -->
<!--     <div class="container">
     	<div class="topBack" style="height:28.5vh;background-color:red;"></div>
     	<div class="logForm" style="height:23vh;background-color:green;"></div>
     	<div class="logWra" style="margin-top:10vh;height:5vh"><button>登陆</button></div>
     	<div class="logWra" style="margin-top:10vh;"><p><span>忘记密码？</span>|<span>现在注册</span></p></div>
    </div> -->
    <div class="container">
      <div class="topBack" :style="lgBack"></div>
      <div class="lrgWra">               
        <div class="regForm">
          <div class="lrgPara">
            <i class="lrgico phico"></i><input  placeholder="请输入手机号码">
          </div>
          <div class="lrgPara">
            <i class="lrgico codico"></i><input class="codInp"  placeholder="手机验证码"><a class="myfr gtcod">获取验证码</a>
          </div>
          <div class="lrgPara">
            <i class="lrgico pswdico"></i><input  placeholder="请输入登陆密码">
          </div>
        </div>
        <div class="lrgbWra"><button>立即注册</button></div>
        <div class="regMan"><p><span>已注册,</span>立即登陆</p></div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return{
        lgBack:{
        height:"16.5vh",
        backgroundImage:"url("+require("../../../static/Img/Back/regBack.png")+")",
        backgroundSize:"100vw 16.5vh",
        },        
      }
    },
  }
</script>