<template>
	 <div class="app-head" style="background-color:#2f2f2f;">
      <div class="top" style="color:#fdfdfd;height:6vh;padding:0px 3vw;-webkit-box-align: center;display: flex;font-size:16px;line-height:1;align-items: center;">
      		<div v-on:click="hisback" style="-webkit-box-flex: .5;-ms-flex: .5;flex: .5;">
      			<span style="">&lt;返回</span>
      		</div>
      		<h1 class="pagTit" style="text-align:center;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;font-size: inherit;font-weight: 400;-webkit-box-flex: 1;-ms-flex: 1;flex: 1;line-height:2;">{{title}}</h1>
      		<div style="-webkit-box-flex: .5;-ms-flex: .5;flex: .5;text-align:right;">
 				<span style="text-align:right;">...</span>      			
      		</div>
      </div>
    </div>
</template>
<script>
	export default{
		data() {
	      	return {
		      list: [],
		    };
	    },
	    methods:{
			hisback:function(){
				this.$router.go(-1);
			}   
  		},
	    props:["title"]  	
	}
</script>
<style type="text/css">
	.top:after{display:block;clear:both;content:"";visibility:hidden;height:0} 
	.top{zoom:1}
	/*.top span{
		display: block;
	}*/
</style>