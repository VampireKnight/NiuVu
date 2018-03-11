<template>
	<div>	
		<div class="commWid allAcClWrap" style="margin-bottom:50px;">
			<ul class="allAcCl-tab nav nav-tabs" role="tablist">
			 	<li role="presentation" class="tab-active fifth"><a @click="tabChange($event)" data-tab="allClass"  aria-controls="allClass" role="tab" data-toggle="tab">已支付<span id="clNum"></span></a></li>
				<li role="presentation" class="fifth"><a @click="tabChange($event)" data-tab="allAcademy" aria-controls="allAcademy" role="tab" data-toggle="tab">待支付<span id="acNum"></span></a></li>
				<li role="presentation" class="fifth"><a @click="tabChange($event)" data-tab="allDystate" aria-controls="allDystate" role="tab" data-toggle="tab">已取消<span id="dyNum"></span></a></li>
				<li role="presentation" class="fifth"><a @click="tabChange($event)" data-tab="allDystate" aria-controls="allDystate" role="tab" data-toggle="tab">退款中<span id="dyNum"></span></a></li>
				<li role="presentation" class="fifth"><a @click="tabChange($event)" data-tab="allDystate" aria-controls="allDystate" role="tab" data-toggle="tab">已退款<span id="dyNum"></span></a></li>
			</ul>
			<div class="allAcCl-tabCont tab-content">
			    <div role="tabpanel" class="tab-pane active" id="allClass">
			    	<div id="searcList" class="allcList" ref="allcList">				    	
						<ord-para v-for="item in list"></ord-para>
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
		height: 20px;
	}
	.nav-tabs li.fifth{
		width: 20vw;
		color: white;
		list-style: none;
		display: inline-block;
		text-align: center;
		float: left;
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
import OrdPara from '../pagecomponents/orderpara';
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
		tabChange(event) {
	      	this.list = [];
	      	console.log(event.currentTarget);
	      	console.log("重置:"+this.list.length);
	      	this.$nextTick(() => {
	             this.$refs.infiniteLoading.$emit('$InfiniteLoading:reset');
	      });
	    },
	},
	components: {
		OrdPara,
    	InfiniteLoading,
  	},
}	
</script>