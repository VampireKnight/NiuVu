<template>
	<div>
		<div class="" style="background-color:white">
			<router-link tag="li" class="slitem" :to="{path: '/set/info'}">个人资料<i class="myfr">></i></router-link>	
			<router-link tag="li" :to="{path: '/set/pswd'}">修改密码<i class="myfr">></i></router-link>		
			<router-link tag="li" :to="{path: '/set/addr'}">收货地址<i class="myfr">></i></router-link>			
		</div>
	</div>
</template>
<style type="text/css">
	.slitem{
		padding: 2.2vh;
		line-height: 3.2vh;
	}
</style>