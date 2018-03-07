<template>
	<div>	
		<div class="commWid allAcClWrap" style="margin-bottom:50px;">
			<ul class="allAcCl-tab nav nav-tabs" role="tablist">
			 	<li role="presentation" class="active third"><a @click="tab($event)" data-tab="allClass"  aria-controls="allClass" role="tab" data-toggle="tab">全部课程<span id="clNum"></span></a></li>
				<li role="presentation" class="third"><a @click="tab($event)" data-tab="allAcademy" aria-controls="allAcademy" role="tab" data-toggle="tab">找学院<span id="acNum"></span></a></li>
				<li role="presentation" class="third"><a @click="tab($event)" data-tab="allDystate" aria-controls="allDystate" role="tab" data-toggle="tab">查动态<span id="dyNum"></span></a></li>
			</ul>
			<div class="allAcCl-tabCont tab-content">
			    <div role="tabpanel" class="tab-pane active" id="allClass">
			    	<div id="searcList" class="allcList" ref="allcList" style="max-height:700px;overflow-y: auto;">				    	
			    		全部课程
			    		<p v-for="item in clist">
						    课程:
						    <span v-text="item"></span>
						</p>
						<mugen-scroll :handler="cfetchData" :should-handle="!cloading" scroll-container="allcList">
					      loading...
					    </mugen-scroll>
				    </div>					    										
			    </div>			    
			    <div role="tabpanel" class="tab-pane" id="allAcademy">
			    	<div id="searacList" class="allAcList" ref="allacList" style="overflow-y: auto;">
			    		找学院
			    		<p v-for="item in alist">
						    学院:
						    <span v-text="item"></span>
						</p>
						<mugen-scroll :handler="afetchData" :should-handle="!aloading" scroll-container="allacList">
					      loading...
					    </mugen-scroll>
			    	</div>			    	
			    </div>
			    <div role="tabpanel" class="tab-pane" id="allDystate">
					<div id="seardyList" ref="alldyList" style="overflow-y: auto;">
						查动态
						<p v-for="item in dlist">
						    动态:
						    <span v-text="item"></span>
						</p>
						<mugen-scroll :handler="dfetchData" :should-handle="!dloading" scroll-container="alldyList">
					      loading...
					    </mugen-scroll>
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
import MugenScroll from 'vue-mugen-scroll';
export default {
	data() {
	    return {
	      	cloading:false,
	      	aloading:false,
	      	dloading:false,
	      	clist: [],
	      	alist: [],
	      	dlist: [],
	    };
	  },
	methods:{
	    tab(event){
	        var targId=event.currentTarget.getAttribute("data-tab");
	        document.getElementsByClassName('active tab-pane')[0].setAttribute("class","tab-pane");
	        document.getElementById(targId).setAttribute("class","tab-pane active")
	    },
	   	cfetchData() {
	        this.cloading = true
	        console.log("clist:"+this.clist.length);
	        setTimeout(() => {
		        const temp1 = [];
		        for (let i = this.clist.length + 1; i <= this.clist.length + 20; i++) {
		          temp1.push(i);
		        }
		        this.clist = this.clist.concat(temp1);		   
		      }, 1000);
	        this.cloading = false
	    },
	    afetchData() {
	        this.aloading = true
	        console.log("alist:"+this.alist.length);
	        setTimeout(() => {
		        const temp2 = [];
		        for (let i = this.alist.length + 1; i <= this.alist.length + 20; i++) {
		          temp2.push(i);
		        }
		        this.alist = this.alist.concat(temp2);		      
		      }, 1000);
	        this.aloading = false
	    },
	    dfetchData() {
	        this.dloading = true
	        console.log("dlist:"+this.dlist.length);
	        setTimeout(() => {
		        const temp3 = [];
		        for (let i = this.dlist.length + 1; i <= this.dlist.length + 20; i++) {
		          temp3.push(i);
		        }
		        this.dlist = this.dlist.concat(temp3);		      
		      }, 1000);
	        this.dloading = false
	    },
	},
	components: {
    	MugenScroll,
  	},
}	
</script>