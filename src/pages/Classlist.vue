<template>
	<div>	
		<div class="commWid allAcClWrap" style="margin-bottom:50px;">
			<kni-tabs @infirefresh="infresh" :tabs="tablist"></kni-tabs>
				<div role="tabpane" class="tab-pane active" id="allClass">
			    	<div id="searcList" class="allcList" ref="allcList">
			    		<!-- <cour-cla v-for="item in list">
							
						</cour-cla>	 -->			    	
						<cour-cla class="courCla">
							
						</cour-cla>
						<!-- <cour-cla v-for="item in list">
							<slot name="open"></slot>
						</cour-cla> -->
				    </div>					    										
		    		<!-- <infinite-loading @infinite="infiniteHandler" ref="infiniteLoading">
					    <span slot="no-more">
					      There is no more Hacker News :(
					    </span>
					</infinite-loading> -->
				</div>
			<!-- <div class="allAcCl-tabCont tab-content">
			    <div role="tabpane" class="tab-pane active" id="allClass">
			    	所有课程
				</div>
				<div role="tabpane" class="tab-pane " id="allAcademy">
			    	所有学院					    										
				</div>
				<div role="tabpane" class="tab-pane " id="allDystate">
			    	所有动态
				</div>
			</div> -->
		</div>
	</div>
</template>
<style type="text/css">
	body{
		background-color: #f7f7f7;
	}
	.allcList .coursePara:first-child{
		margin-top: 1.3vw;
	}
	.nav-tabs{
		width: 99vw;
		padding: 0px 0.5vw;
		background-color: gray;
	}
	.nav-tabs li.third{
		width: 33vw;
		color: #434343;
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
import KniTabs from '../commonponents/KniTabs'
import CourCla from '../pagecomponents/class';
export default {
	data() {
		return{
			list: [],	
			tablist:{
				multiContent:false,//是否对应多个显示区域
				tabShow:"tab-active",//tab active类名
				contNormal:'tab-pane',//tab 对应显示区域的普通样式
				contShow:"active",//tab 对应显示区域
				tabLen:5,//tab数量
				role:"tabpane",
				tabs:[
						{
				          index: 0,
				          name: '选项一',
				          targid:"allClass",
				        },
				        {
				          index: 1,
				          name: '选项二',
				          targid:"allAcademy",
				        },
				        {
				          index: 2,
				          name: '选项三',
				          targid:"allDystate",
				        },
			        ],
				}
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
	    infresh(){
	    	this.list=[];
	    	console.log("重置:"+this.list.length);
	    	this.$nextTick(() => {
	             this.$refs.infiniteLoading.$emit('$InfiniteLoading:reset');
	      	});
	    }
	},
	components: {
		KniTabs,
		CourCla,
   		InfiniteLoading,
  	},
}	
</script>