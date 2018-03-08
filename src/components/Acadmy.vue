<template>
	<div>	
		<div class="commWid allAcClWrap" style="margin-bottom:50px;">
			<ul class="allAcCl-tab nav nav-tabs" role="tablist">
			 	<li role="presentation" class="active third"><a @click="tabChange()" data-tab="allClass"  aria-controls="allClass" role="tab" data-toggle="tab">全部课程<span id="clNum"></span></a></li>
				<li role="presentation" class="third"><a @click="tabChange()" data-tab="allAcademy" aria-controls="allAcademy" role="tab" data-toggle="tab">找学院<span id="acNum"></span></a></li>
				<li role="presentation" class="third"><a @click="tabChange()" data-tab="allDystate" aria-controls="allDystate" role="tab" data-toggle="tab">查动态<span id="dyNum"></span></a></li>
			</ul>
			<div class="allAcCl-tabCont tab-content">
			    <div role="tabpanel" class="tab-pane active" id="allClass">
			    	<div id="searcList" class="allcList" ref="allcList">				    	
			    		<p v-for="item in list">
						    <span v-text="item"></span>
						</p>
				    </div>					    										
		    		<infinite-loading @infinite="infiniteHandler" ref="infiniteLoading">
					    <span slot="no-more">
					      There is no more Hacker News :(
					    </span>
					</infinite-loading>
				</div>
			</div>
		</div>
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
import InfiniteLoading from 'vue-infinite-loading';
export default {
	data() {
		return{
			list: [],	 
		}		          
	},
	methods:{
	    infiniteHandler($state) {
	      setTimeout(() => {
	        const temp = [];
	        console.log("滚动:"+this.list.length);
	        for (let i = this.list.length + 1; i <= this.list.length + 20; i++) {
	          temp.push(i);
	        }
	        this.list = this.list.concat(temp);
	        $state.loaded();
	      }, 1000);
	    },
		tabChange() {
	      	this.list = [];
	      	console.log("重置:"+this.list.length);
	      	this.$nextTick(() => {
	             this.$refs.infiniteLoading.$emit('$InfiniteLoading:reset');
	      });
	    },
	},
	components: {
    	InfiniteLoading,
  	},
}	
</script>