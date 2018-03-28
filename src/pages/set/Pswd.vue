<template>
	<div>
		<div class="compad" style="background-color:white;overflow;hidden;margin-top:1vh;     padding-bottom:5.5vh;">
			<div class="slitem">
				<input class="rpInp" type="" name="" placeholder="原密码">
			</div>
			<div class="slitem">
				<input class="rpInp" type="" name="" placeholder="新密码">
			</div>
			<div class="slitem" style="border-bottom:1px solid #c6c6c6;">
				<input class="rpInp" type="" name="" placeholder="确认新密码">
			</div>		
		</div>
		<div class="lrgbWra compad" style="margin-top:4.7vh;"><button>修改密码</button></div>
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

	.slitem .rpInp{
		width: 100%;
		text-indent: 0.5em;
		font-size: 2.2vh;
		border:none;
		outline: none;
	}
</style>