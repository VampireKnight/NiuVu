<template>
	<div class="compad" style="background-color:white;overflow;hidden;margin-top:1vh;">
		<li tag="li" class="slitem">个人资料<p class="myfr">123456789<i class="toico"></i></p></li>
		<li tag="li" class="slitem">个人资料<p class="myfr">123456789<i class="toico"></i></p></li>
		<li tag="li" class="slitem">个人资料<p class="myfr">123456789<i class="toico"></i></p></li>
		<li tag="li" class="slitem">个人资料<p class="myfr">123456789<i class="toico"></i></p></li>
		<li tag="li" class="slitem">个人资料<p class="myfr">123456789<i class="toico"></i></p></li>
		<li tag="li" class="slitem">个人资料<p class="myfr">123456789<i class="toico"></i></p></li>
		<li tag="li" class="slitem">个人资料<p class="myfr">123456789<i class="toico"></i></p></li>
		<li tag="li" class="slitem">个人资料<p class="myfr">123456789<i class="toico"></i></p></li>
		<li tag="li" class="slitem">个人资料<p class="myfr">123456789<i class="toico"></i></p></li>				
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
	.toico{
		width: 2vh;
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