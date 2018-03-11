<template>
  <swiper :options="swiperOption">
    <!-- slides -->
    		<swiper-slide v-for="slide in swiperSlides"><a><img :src="slide.img"></a></swiper-slide>
	    <!-- Optional controls -->
	    <div class="swiper-pagination"  slot="pagination"></div>
	    <div class="swiper-button-prev" slot="button-prev"></div>
	    <div class="swiper-button-next" slot="button-next"></div>
	    <div class="swiper-scrollbar"   slot="scrollbar"></div>
  </swiper>

  <ul>
  	<li>精品课程</li>
  	<li>免费专区</li>
  	<li>在线直播</li>
  	<li>学院库</li>
  </ul>
  <div class="secPla">
  	<div><span></span></div>
  </div>
</template>

<script>
	import 'swiper/dist/css/swiper.css'
	import { swiper, swiperSlide } from 'vue-awesome-swiper'
	export default {
	  	components: {
	    	swiper,
	    	swiperSlide
	  	},
	   	name: 'carrousel',
	   	created() {
/*	    	this.$nextTick(function () {
  		    	this.$http.get("/resume-html/RecruitController/getCarousel.weixin").then(function(res){  
	            console.log(res.data.data);
	            this.swiperSlides=res.data.data;   
	        })
	    })*/  
	  	},
	    data() {
	      return {
	        swiperOption: {
	          // some swiper options/callbacks
	          // 所有的参数同 swiper 官方 api 参数
	          // ...
/*	           pagination: {
	            el: '.swiper-pagination'
	          }*/
          	    autoplay: {
				    delay: 3000,
				    stopOnLastSlide: false,
				    disableOnInteraction: true,
			    },  
                //分页器  
	            pagination : {
	            	el:'.swiper-pagination',
	            },  
	            paginationClickable :true,   
	        },
	        swiperSlides:[],
	      }
	    },
	    computed:{
/*	      swiper() {
	        return this.$refs.mySwiper.swiper
	      }*/
	    },
	    mounted() {
	      // current swiper instance
	      // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
	      this.swiper;
/*	      console.log('this is current swiper instance object', this.swiper)
	      this.swiper.slideTo(3, 1000, false)*/
	    } 
	}
</script>
<style>
	.swiper-slide img{
		width:100vw;
	}
</style>