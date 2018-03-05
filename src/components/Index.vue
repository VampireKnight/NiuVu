<template>
	<div>
	  	<nav class="indNav">
		  	<a>精品课程</a>
		  	<a>免费专区</a>
		  	<a>在线直播</a>
		  	<a>学院库</a>
	  	</nav>
	  	<div class="secPla">
	  		<div class="secTop"><div class="TitLefLine"></div><span>今日直播</span><div style="float:right;">更多>></div></div>
	  		<div><img src=""></div>
	  	</div>
	  	<div class="secPla">
	  		<div class="secTop"><div class="TitLefLine"></div><span>热门课程</span><div style="float:right;">更多>></div></div>
	  		<div class="secHtCl">
	  			<ind-hotcl></ind-hotcl>
	  			<div class="secPara">asdfasdfas</div>
	  			<div class="secPara">1321313213</div>
	  			<div class="secPara">asdfasdfas</div>
	  			<div class="secPara">1321345668</div>
	  		</div>
	  	</div>
	</div>
</template>

<script>
	import IndHotcl from './IndHcl';
	export default {
	  components: { // 声明子组件
	   	IndHotcl,
	  },
	}
</script>
<style>
.indNav a{
	float: left;
	width: 25vw;
	text-align: center;
	display:inline-block;
}
.secHtCl .secPara{
	width: 50vw;
}
.secHtCl .secPara:nth-child(odd){
	float: left;
}
.secHtCl .secPara:nth-child(even){
	float: right;
}
</style>