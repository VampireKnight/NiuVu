<template>
	 <div class="app-head" style="background-color:#2f2f2f;">
      <div style="overflow:hidden;color:#fdfdfd;">
      	<span style="float:left;width:10vw;">&lt;</span>
      	<span class="pagTit" style="width:80vw;float:left;text-align:center;">{{title}}</span>
      	<span style="float:left;width:10vw;text-align:right;">...</span>
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