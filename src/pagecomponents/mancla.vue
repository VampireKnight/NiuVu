<template scope="props">
	<div>	
		<div class="maclPara">
			<div class="clpInl imgwra">
				<img :src="macImg">
			</div>
			<div class="macr">
				<h1>经济数据全面走弱,对股市有哪些影响？</h1>
				<div class="maInf">
					<div>
						<p>讲师：天下财经</p>
						<p>课时：1</p>
						<p>有效期:2017-12-12 至 2018-12-12</p>
					</div>
					<p class="morew" style="">查看详情>></p>
				</div>
			</div>
		</div>


		<div class="maclPara">
			<div class="clpInl imgwra">
				<img :src="macImg">
			</div>
			<div class="macr">
				<h1>经济数据全面走弱,对股市有哪些影响？</h1>
				<div class="maInf">
					<div>
						<p>讲师：天下财经</p>
						<p>课时：1</p>
						<p>有效期:免费</p>
					</div>
					<p class="morew">查看详情>></p>
				</div>
			</div>
		</div>


		<div class="maclPara">
			<div class="clpInl imgwra">
				<img :src="macImg">
			</div>
			<div class="macr">
				<h1>经济数据全面走弱,对股市有哪些影响？</h1>
				<div class="maInf">
					<div>
						<p>讲师：天下财经</p>
						<p>直播时间:2018.01.01 09:00-10:00</p>
					</div>
					<p class="morew" style="">查看详情>></p>
				</div>
			</div>
		</div>
	</div>
</template>
<style>
	
	.maclPara{
		background-color: white;
		padding:2.7vw 3vw;
		margin-top: 1.6vw;
	}
	.maclPara:first-child{
		margin-top: 1.3vw;
	}
	.maclPara{
		display: flex;
	}
	.maclPara .imgwra{
		width: 23vw;
		height: 16vw;
	}
	.imgwra img{
		width: 100%;
		height: 100%;
	}
	.maclPara .macr{
		width: 67.5vw;
		margin-left: 3.5vw;
	}
	.maInf{
		width:67.5vw;position:relative;
	}
	.morew{
		position:absolute;right:0px;bottom:0px;
	}

</style>
<script>
export default {
  data(){
  	return{
  		macImg:require("../../static/Test/mancl.png"),
  	}
  },
  components: { // 声明子组件

  },
}
</script>