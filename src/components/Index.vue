<template>
	<div style="background-color:#f4f4f4; padding-top:1.5vw;">
	  	<nav class="indNav" style="padding:4vw 0px 2vw; background-color:white;display:flex;">
		  	<a>
		  		<div><img :src="coImg" style="width:11vw;"></div>	
		  		<h4 style="font-size:2vw;">精品课程</h4>
		  	</a>
		  	<a>
		  		<div><img :src="frImg" style="width:11vw;"></div>	
		  		<h4 style="font-size:2vw;">免费专区</h4>
		  	</a>
		  	<a>
		  		<div><img :src="lvImg" style="width:11vw;"></div>	
		  		<h4 style="font-size:2vw;">在线直播</h4>
		  	</a>
		  	<a>
		  		<div><img :src="acImg" style="width:11vw;"></div>	
		  		<h4 style="font-size:2vw;">学院库</h4>
		  	</a>
	  	</nav>
	  	<div class="secPla" style="margin-top:3vw;background-color:white;padding:5vw 3vw 6vw;">
	  		<div class="secTop">
	  			<div class="tab-conTop" style="float:left;"> 
		    		<div class="vline" style="margin-left: 2px;width: 2px;background-color: #f73131;height: 18px;display:inline-block;vertical-align: top;"></div>
		    		<p class="tab-conTit" style="font-size:18px;margin-left:6px;display:inline-block;vertical-align: top;">公开课程</p>
		    	</div>
		    	<div style="float:right;">更多>></div>
		    		<img :src="indtl" style="width:94vw;">
	  			<div class="TitLefLine"></div><span>今日直播</span><div style="float:right;">更多>></div></div>
	  		<div><img src=""></div>
	  	</div>
	  	<div class="secPla" style="overflow:hidden;margin-top:3vw;background-color:white; padding:5vw 3vw 6vw;">
	  		<div class="secTop"><div class="TitLefLine"></div><span>热门课程</span><div style="float:right;">更多>></div></div>
	  		<div class="secHtCl">

	  			<!-- <ind-hotcl></ind-hotcl> -->

	  			<div class="secPara">
	  				<div class="iwrap"><img :src="htcd1"></div>
	  				<p class="p1">黄金没有理由上千三</p>
	  				<p class="p2">1.2万人购买</p>
	  			</div>
	  			<div class="secPara">
	  				<div class="iwrap"><img :src="htcd2"></div>
	  				<p class="p1">黄金没有理由上千三</p>
	  				<p class="p2">1.2万人购买</p>
	  			</div>
	  			<!-- <div style="clear:both;"></div> -->
	  			<div class="secPara">
	  				<div class="iwrap"><img :src="htcd3"></div>
	  				<p class="p1">黄金没有理由上千三</p>
	  				<p class="p2">1.2万人购买</p>
	  			</div>
	  			<div class="secPara">
	  				<div class="iwrap"><img :src="htcd4"></div>
	  				<p class="p1">黄金没有理由上千三</p>
	  				<p class="p2">1.2万人购买</p>
	  			</div>
	  		</div>
	  	</div>

	  	<div class="secPla" style="overflow:hidden;margin-top:3vw;background-color:white; padding:5vw 3vw 6vw;">
	  		<div class="indcList">
	  			<!-- <ind-hotcl></ind-hotcl> -->
	  			<div class="clPara">
	  				<div class="iwrap"><img :src="comp1"></div>
	  				<div class="clInf">
	  					<p class="p1">2017驾驭周期 乘势而上</p>
	  					<p class="p2">中亿财经网</p>
	  					<p class="p3">6598人学习<span class="pri"><strong>600</strong>金豆</span></p>
	  				</div>
	  			</div>
	  			<div class="clPara">
	  				<div class="iwrap"><img :src="comp2"></div>
	  				<div class="clInf">
	  					<p class="p1">2017驾驭周期 乘势而上</p>
	  					<p class="p2">中亿财经网</p>
	  					<p class="p3">6598人学习<span class="pri"><strong>600</strong>金豆</span></p>
	  				</div>
	  			</div>
	  			<!-- <div style="clear:both;"></div> -->
	  			<div class="clPara">
	  				<div class="iwrap"><img :src="comp3"></div>
	  				<div class="clInf">
	  					<p class="p1">2017驾驭周期 乘势而上</p>
	  					<p class="p2">中亿财经网</p>
	  					<p class="p3">6598人学习<span class="pri"><strong>600</strong>金豆</span></p>
	  				</div>
	  			</div>
	  			<div class="clPara">
	  				<div class="iwrap"><img :src="comp2"></div>
	  				<div class="clInf">
	  					<p class="p1">2017驾驭周期 乘势而上</p>
	  					<p class="p2">中亿财经网</p>
	  					<p class="p3">6598人学习<span class="pri"><strong>600</strong>金豆</span></p>
	  				</div>
	  			</div>
	  		</div>
	  	</div>
	</div>
</template>

<script>	
	import IndHotcl from './IndHcl';
	export default {
	  data(){
	  	return{
	  		coImg:require("../../static/Img/compimg.png"),
	  		frImg:require("../../static/Img/freeimg.png"),
	  		lvImg:require("../../static/Img/liveimg.png"),
	  		acImg:require("../../static/Img/acadimg.png"),
	  		indtl:require("../../static/indemo/index-tldemo.png"),
	  		htcd1:require("../../static/indemo/index-htcd1.png"),
	  		htcd2:require("../../static/indemo/index-htcd2.png"),
	  		htcd3:require("../../static/indemo/index-htcd3.png"),
	  		htcd4:require("../../static/indemo/index-htcd4.png"),
	  		comp1:require("../../static/indemo/index-comp1.png"),
	  		comp2:require("../../static/indemo/index-comp2.png"),
	  		comp3:require("../../static/indemo/index-comp3.png"),
	  	}
	  },
	  components: { // 声明子组件
	   	IndHotcl,
	  },
	}
</script>
<style>
.indNav a{
	width: 25vw;
	text-align: center;
	display:inline-block;
}
.indNav a h4{
	margin: 0px;
	font-weight: normal;
	line-height: 2.4;
}
.secHtCl .secPara{
	width:44vw;
	height: 37vw;
}
.secHtCl .secPara:nth-child(odd){
	float: left;
}
.secHtCl .secPara:nth-child(even){
	float: right;
}
.secHtCl .secPara:not(:nth-child(1)):not(:nth-child(2)){
	margin-top: 3vw;
}
.secHtCl{
/*	overflow: hidden;*/
	zoom:1;
	background-color: white;
}
.secPara .iwrap,.iwrap img{
	width: 100%;
}
.iwrap img{display: block;}
/*.secHtCl:after{
	content: "";
	clear: both;
}*/
.indcList{
	padding:0px 1vw;
}
.indcList .clPara{
	display: flex;
	padding: 4vw 0vw 5vw;
 	border-bottom: 1px solid #c1c1c1;
}
.clPara .iwrap{
	width: 32vw;
}
.clPara .clInf{
	margin-left: 3vw;
}
.clPara .clInf .p1{
	color: #0e0e0e;
	font-weight:600;
	font-size:4vw;
	line-height:9.4vw;
}
.clPara .clInf .p2,.clPara .clInf .p3{
	font-size: 3.5vw;
	line-height: 5vw;
	width: 57vw;
	color: #979797;
}
.clPara .clInf .pri{
	color: #393838;
	float: right;
}
.clInf .pri strong{
	color: #f7444c;
	font-size: 5.2vw;
}
</style>