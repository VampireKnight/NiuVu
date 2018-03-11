<template>
	 <div class="app-head" style="background-color:#2f2f2f;">
      <div class="top" style="color:#fdfdfd;">
      	<span style="float:left;width:10vw;">&lt;</span><span class="pagTit" style="width:80vw;float:left;text-align:center;">
      	{{title}}</span><span style="float:left;width:10vw;text-align:right;">
      	...</span>
      	<br style="clear:both;" />
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
	    props:["title"]  	
	}
</script>
<style type="text/css">
	.top:after{display:block;clear:both;content:"";visibility:hidden;height:0} 
	.top{zoom:1}
	.top span{
		display: block;
	}
</style>