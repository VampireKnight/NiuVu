<template>
	<div>
		<div class="compad" style="background-color:white;overflow;hidden;margin-top:1vh;">
			<router-link tag="li" class="slitem" :to="{path: '/set/info'}">个人资料<i class="myfr toico"></i></router-link>	
			<router-link tag="li" class="slitem" :to="{path: '/set/pswd'}">修改密码<i class="myfr toico"></i></router-link>		
			<router-link tag="li" class="slitem" :to="{path: '/set/addr'}">收货地址<i class="myfr toico"></i></router-link>			
		</div>
		<div class="lrgbWra compad" style="margin-top:15.5vh;"><button>退出</button></div>
	</div>
</template>
<style type="text/css">
	body{
		background-color: #f7f7f7;
	}
	.slitem{
		padding: 2.2vh 0vw;
		font-size: 2vh;
		line-height: 3.2vh;
		list-style: none;
		
	}
	.slitem:not(:last-child){
		border-bottom: 1px solid #c6c6c6;
	}
	.toico:after{
		content: "";
		width: 1.2vh;
		height: 3.2vh;
		right:1.6vh;
		position: absolute;
	  	background: url("../../../static/Img/Icon/rarrow.png") no-repeat;
	  	background-size: 1.2vh 3.2vh; 
	}
</style>