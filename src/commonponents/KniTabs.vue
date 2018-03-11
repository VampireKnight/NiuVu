<template>
	<div>	
		<ul :class="ulname" >
			<!-- <li  v-for="item in tabs.tabs" class="tab{{tabs.tabLen}}"></li> -->
 			<li v-for="item in tabs.tabs">
 				<a  @click="tabChange($event)" :data-tab="item.targid">{{item.name}}</a>
 			</li>
		 	<!-- <li class="tab-active"><a @click="tabChange($event)" data-tab="allClass"  aria-controls="allClass" role="tab" data-toggle="tab">精品课程<span id="clNum"></span></a></li>
			<li ><a @click="tabChange($event)" data-tab="allAcademy" aria-controls="allAcademy" role="tab" data-toggle="tab">找学院<span id="acNum"></span></a></li>
			<li ><a @click="tabChange($event)" data-tab="allDystate" aria-controls="allDystate" role="tab" data-toggle="tab">查动态<span id="dyNum"></span></a></li> -->
		</ul>
	</div>
</template>
<style type="text/css">
	.nav-tabs{
		width: 100vw;
		background-color: gray;
	}
	.nav-tabs li.third{
		width: 30vw;
		color: white;
		list-style: none;
		display: inline-block;
		text-align: center;
	}
	.tab-pane{
		display: none;
	}
	.active{
		display: block;
	}
</style>
<script type="text/javascript">
export default {
	created(){
		console.log(this.tabs.tabLen);
		this.multi=this.tabs.multiContent;
		this.ulname="tablen"+this.tabs.tabLen;
	},
	data(){
		return {
			multi:false,
			ulname:'',
			tabshow:'tab-active',
			contNormal:'tab-pane',
			contShow:"active",
			role:"tabpane",
		}
	},
	name:'KniTabs',
	props:['tabs'],
	ready(){
		console.log(this.tabs);
	},
	/*props:{
		tabs: {
        	type: Object,
        	default: () => ({})
      	},
  	},*/
	methods:{
		tabChange(event) {
			//如果本身就在显示，则不做任何操作 if


			//多显示区域
/*			if(this.multi){
				console.log(this.$data);
				console.log("多显示区域");
				console.log(event.currentTarget.getAttribute("data-tab"));*/
			if(this.multi){
				var tabCs=document.querySelectorAll('[role="tabpane"]');//所以tab对应显示的窗口
				for(var i=0;i<tabCs.length;i++){
					console.log(this.contNormal);
					tabCs[i].classList.remove("active");//如果visible被设置则删除它，否则添加它
				}
				document.getElementById(event.currentTarget.getAttribute("data-tab")).classList.add(this.contShow)
			}else{
				console.log("单区域");
				this.$emit('infirefresh');
				console.log('触发外部方法');
			}	  
	      	/*this.$nextTick(() => {
	             this.$refs.infiniteLoading.$emit('$InfiniteLoading:reset');
	      });*/
	    },
	},
}	
</script>