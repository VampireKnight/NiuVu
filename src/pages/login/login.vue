<template>
  <div>
  	<!-- window: height:2148 -->
   <!--  <mobtop></mobtop>  -->
    <div class="container">
     	<div class="topBack" :style="lgBack"></div>
     	<div class="lrgWra">     		    	
	     	<div class="logForm">
	     		<div class="lrgPara">
	     			<i class="lrgico phico"></i><input  placeholder="请输入手机号码">
	     		</div>
	     		<div class="lrgPara">
	     			<i class="lrgico pswdico"></i><input  placeholder="请输入登陆密码">
	     		</div>
	     	</div>
	     	<div class="lrgbWra"><button>登陆</button></div>
	     	<div class="logMan"><p><span>忘记密码？</span>|<span>现在注册</span></p></div>
     	</div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
    	lgBack:{
			height:"28.5vh",
			backgroundImage:"url("+require("../../../static/Img/Back/logBack.png")+")",
			backgroundSize:"100vw 28.5vh",
    	},        
    }
  },
}
</script>