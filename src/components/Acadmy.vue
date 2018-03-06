<template>
	<div>	
		<div class="commWid allAcClWrap">
			<ul class="allAcCl-tab nav nav-tabs" role="tablist">
			 	<li role="presentation" class="active third"><a @click="tab" data-tab="allClass"  aria-controls="allClass" role="tab" data-toggle="tab">全部课程<span id="clNum"></span></a></li>
				<li role="presentation" class="third"><a @click="tab" data-tab="allAcademy" aria-controls="allAcademy" role="tab" data-toggle="tab">找学院<span id="acNum"></span></a></li>
				<li role="presentation" class="third"><a @click="tab" data-tab="allDystate" aria-controls="allDystate" role="tab" data-toggle="tab">查动态<span id="dyNum"></span></a></li>
			</ul>
			<div class="allAcCl-tabCont tab-content">
			    <div role="tabpanel" class="tab-pane active" id="allClass">
			    	<div id="searcList" class="allcList">				    	
			    	
				    </div>					    
				    <div class="haScrmain" > 	
						<div id="clScro" class="searscro" data-switch="true" data-load="off"  data-ind="2" data-tabscro="class" data-paget=>							
							<div class="dropload-down"><div class="dropload-load">点击加载更多</div></div>
						</div>	
		 				<div style="height:1px;margin-top:1px;"></div>
					</div>
			    </div>			    
			    <div role="tabpanel" class="tab-pane" id="allAcademy">
			    	<div id="searacList" class="allAcList">

			    	</div>
			    	<!-- pagnation -->
	    			<div class="haScrmain" > 	
						<div id="acScro" class="searscro" data-switch="true" data-load="off"  data-ind="2" data-tabscro="academy" data-paget=>							
							<div class="dropload-down"><div class="dropload-load">点击加载更多</div></div>
						</div>	
		 				<div style="height:1px;margin-top:1px;"></div>
					</div>
			    </div>
			    <div role="tabpanel" class="tab-pane" id="allDystate">
					<div id="seardyList">
					
					</div>
					<div class="haScrmain" > 	
						<div id="dyScro" class="searscro" data-switch="true" data-load="off"  data-ind="2" data-tabscro="dystate" data-paget=>							
							<div class="dropload-down"><div class="dropload-load">点击加载更多</div></div>
						</div>	
		 				<div style="height:1px;margin-top:1px;"></div>
					</div>
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
export default {
	computed:{
	    tab:function(){
	        console.log(this);
	    }
	},
	methods:{
	   
	},
}	
</script>