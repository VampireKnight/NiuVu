<template scope="props">
	<div >
		<slot name="open">		
			<div class="coursePara">
				<div class="clpInl imgwra">
					<img style="width:30vw;" src="http://www.66toujiao.com:80/education-front/file/getFile.front?name=195f00cd-bae2-4f5f-9b5c-118044ee938e.jpg">
				</div>
				<div class="clpInl clAbout">
					<div class="sclInfo">
						<a class="p1" href="class.html?clid=146">每天学会一种K线</a>
						<p class="p2">课程介绍:<span class="clAca">趋势博弈讲习所</span></p>
						<p>
							<span class="p3">免费</span>
							<span class="classBuy">立即学习</span>
						</p>					
					</div>
				</div>
			</div>
		</slot>	
		<slot name="comp">
			<div class="coursePara">
				<div class="clpInl imgwra">
					<img style="width:30vw;" src="http://www.66toujiao.com:80/education-front/file/getFile.front?name=195f00cd-bae2-4f5f-9b5c-118044ee938e.jpg">
				</div>
				<div class="clpInl clAbout">
					<div class="sclInfo">
						<a class="p1" href="class.html?clid=146">每天学会一种K线</a>
						<p class="p2">课时:<span class="clAca">12</span>频次<span>每周3节</span>周期<span>2个月</span></p>
						<p>
							<span class="p3">600</span>金豆
							<span class="classBuy">立即学习</span>
						</p>					
					</div>
				</div>
			</div>
		</slot>
		<slot name="live">
			<div class="coursePara">
				<div class="clpInl imgwra">
					<img style="width:30vw;" src="http://www.66toujiao.com:80/education-front/file/getFile.front?name=195f00cd-bae2-4f5f-9b5c-118044ee938e.jpg">
				</div>
				<div class="clpInl clAbout">
					<div class="sclInfo">
						<a class="p1" href="class.html?clid=146">每天学会一种K线</a>
						<p class="p2">2017.01.01 10:00-11:00</p>
						<p>
							<span class="p3">免费</span>
							<span class="classBuy">立即学习</span>
						</p>					
					</div>
				</div>
			</div>
		</slot>
	</div>
</template>
<style type="text/css">
.coursePara{
	height: 20vh;
	margin-top: 1.8vw;
	background-color: white;
}
.clpInl{
	float: left;
}	
.imgwra{
	width:30vw;
	margin-right: 10vw;
}
.clAbout{
	width:60vw;
}
.p3 {
	float: left;
}
.classBuy{
	float: right;
}
</style>