<template>
	<div class="index_main" v-if="showMe">
		<!-- 首页头部 -->
	    <div class="index_header">
	      <!-- 地址 -->
	      <div class="index_location">
	        <div class="location_left ell">
	          <svg class="v-md">
	            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#location"></use>
	          </svg>
	          <span  class="v-md">北京市海淀区</span>
	        </div>

	        <!-- 登录按钮 -->
	        <div class="index_login" v-if="!isLogin">
	          <router-link to="/login">登录</router-link>
	        </div>
	        <div class="index_login" v-if="isLogin">
	        	<router-link to="/myMsg">{{uname}}</router-link>
	        </div>
	      </div>

	      <!-- 搜索 -->
	      <div class="search_box">
	      	<!-- <el-input  tyep="text" v-model="search_word" placeholder="搜索商家、美食" @keydown.enter="enter_search"></el-input> -->
	        <input type="text" placeholder="搜索商家" @keydown.enter="enter_search" v-model="search_word">
	      </div>
	    </div>
	    <!-- 首页走马灯，使用vue-swipe-->
	    <div class="index_banner">
	      <Swipe class="my-swipe" :auto="5000" :speed="800"><!-- swipe 设置滚动延迟时间和滚动速度 -->
	        <Swipe-item class="slide slide1">
	          <router-link to="/search/美食">
	            <div class="common_slider">
	              <img src="../images/slider-pic/slider-pic1.jpeg" alt="">
	              <p>美食</p>
	            </div>
	          </router-link>
	          <router-link to="/search/甜品饮品">
	            <div class="common_slider">
	              <img src="../images/slider-pic/slider-pic2.jpeg" alt="">
	              <p>甜品饮品</p>
	            </div>
	          </router-link>
	          <router-link to="/search/商超便利">
	            <div class="common_slider">
	              <img src="../images/slider-pic/slider-pic3.jpeg" alt="">
	              <p>商超便利</p>
	            </div>
	          </router-link>
	          <router-link to="/search/预定早餐">
	            <div class="common_slider">
	              <img src="../images/slider-pic/slider-pic4.jpeg" alt="">
	              <p>预定早餐</p>
	            </div>
	          </router-link>
	          <router-link to="/search/果蔬生鲜">
	            <div class="common_slider">
	              <img src="../images/slider-pic/slider-pic5.jpg" alt="">
	              <p>果蔬生鲜</p>
	            </div>
	          </router-link>
	          <router-link to="/search/新店特惠">
	            <div class="common_slider">
	              <img src="../images/slider-pic/slider-pic6.jpeg" alt="">
	              <p>新店特惠</p>
	            </div>
	          </router-link>
	          <router-link to="/search/准时达">
	            <div class="common_slider">
	              <img src="../images/slider-pic/slider-pic7.jpeg" alt="">
	              <p>准时达</p>
	            </div>
	          </router-link>
	          <router-link to="/search/午餐">
	            <div class="common_slider">
	              <img src="../images/slider-pic/slider-pic8.jpeg" alt="">
	              <p>午餐</p>
	            </div>
	          </router-link>
	        </Swipe-item>
	        <Swipe-item class="slide slide2">
	          <router-link to="/search/土豪推荐">
	            <div class="common_slider">
	              <img src="../images/slider-pic/slider-pic9.jpeg" alt="">
	              <p>土豪推荐</p>
	            </div>
	          </router-link>
	          <router-link to="/search/鲜花蛋糕">
	            <div class="common_slider">
	              <img src="../images/slider-pic/slider-pic10.jpeg" alt="">
	              <p>鲜花蛋糕</p>
	            </div>
	          </router-link>
	          <router-link to="/search/汉堡薯条">
	            <div class="common_slider">
	              <img src="../images/slider-pic/slider-pic11.jpeg" alt="">
	              <p>汉堡薯条</p>
	            </div>
	          </router-link>
	          <router-link to="/search/日韩料理">
	            <div class="common_slider">
	              <img src="../images/slider-pic/slider-pic12.jpeg" alt="">
	              <p>日韩料理</p>
	            </div>
	          </router-link>
	          <router-link to="/search/麻辣烫">
	            <div class="common_slider">
	              <img src="../images/slider-pic/slider-pic13.jpeg" alt="">
	              <p>麻辣烫</p>
	            </div>
	          </router-link>
	          <router-link to="/search/披萨意面">
	            <div class="common_slider">
	              <img src="../images/slider-pic/slider-pic14.jpeg" alt="">
	              <p>披萨意面</p>
	            </div>
	          </router-link>
	          <router-link to="/search/川湘菜">
	            <div class="common_slider">
	              <img src="../images/slider-pic/slider-pic15.jpeg" alt="">
	              <p>川湘菜</p>
	            </div>
	          </router-link>
	          <router-link to="/search/包子粥店">
	            <div class="common_slider">
	              <img src="../images/slider-pic/slider-pic16.jpeg" alt="">
	              <p>包子粥店</p>
	            </div>
	          </router-link>
	        </Swipe-item>
	      </Swipe>
	    </div>
	     <!-- 标题 -->
    	<h3 class="index_title">外卖餐厅</h3> 
    	<div class="index_business">
    		<businessList v-for="n in getBussinessbrief" :msg="n"></businessList>
    	</div>
		<!-- 撑开Fixednav挡住的位置 -->
		<div class="space"></div>
    	<fixedNav></fixedNav>
	</div>
</template>
<script type="text/javascript">
	import {Swipe,SwipeItem} from 'vue-swipe'
	import businessList from './small_components/businessList.vue'
	import fixedNav from './small_components/fixedNav.vue'
	import { mapGetters } from 'vuex';
	export default{
		data(){
			return{
				"showMe":true,
				"search_word": "",
				"isLogin":false,
				"uname":""
			}
		},
		mounted () {
					    // 设置当前标记为主页
		    this.$store.dispatch('setWhichpage', this.$route.path);

		    this.isLogin = this.getLogin;
		    if(!this.getLogin){
		    	return;
		    }else{
		    	this.uname = this.$store.getters.getuname;
		    }

		},
		computed:{
			//因为无法识别...mapGetters的写法报错,已改正，package缺少一个东西
			...mapGetters([
				'getLogin',
				'getBussinessbrief'
			])

		},
		methods:{
		    enter_search (e) {
		    	console.log(this.search_word)
		    	if(this.search_word !==''){
		    		this.$router.push('/search/' + this.search_word);
		    	}else{
		    		alert('请输入内容')
		    	}
		        
		    }
		},
		components:{
			Swipe,
			SwipeItem,
			businessList,
			fixedNav
		}
	}
</script>
<style lang="scss">
	.index_main{
		width:100%;
		overflow:hidden;
		.index_header{ 
			background:#0096ff;
			height:3rem;
    		padding:.26rem;
    		box-sizing:border-box;
 			.index_location{
		       height:.9rem;
		       color:#fff;
		       width:10rem;
		       font-size:.4rem;		
		       .location_left{
		       		width:8rem;
		       		svg{
		       			width:.5rem;
		       			height:.5rem;
		       		}
		       }
		       .index_login{
		       		position: absolute;
			        height:1rem;
			        font-size:.35rem;
			        right: 0;
			        top: 0;
			        line-height:1rem;
			        padding:0 .5rem;
			        a{
			          color:#fff;
			        }
		       }		
 			}  
		    .search_box{
		      width:9rem;
		      margin: 0 auto;
		      height:1rem;
		      input[type="text"]{
		        width:100%;
		        height:1rem;
		        outline:none;
		        font-size:.4rem;
		        text-align: center;
		        border:none;
		        display:block;
		        border-radius:.45rem;
		      }
		    } 		
		}
		.index_banner{
		    height:4.6rem;
		    background:#fff;
		    margin-bottom:0.2rem;
		    .common_slider{
			      width:2.49rem;
			      height:2rem;
			      float: left;
			      img{
			        margin: 0 auto;
			        display:block;
			        width:1.2rem;
			        height:1.2rem;
			        margin-top:.2rem;
			      }
			      p{
			        text-align:center;
			        font-size: .3rem;
			      }
			}
		}
		.index_title{
		    line-height: .8rem;
		    font-weight: 600;
		    background: #fff;
		    border-top: 1px solid #eee;
		    font-size: .4rem;
		    padding-left: .4rem;
		}
		.space{
		    width:10rem;
		    height:1.2rem;
		}		
	}
	/* slider插件css + 改写*/
.mint-swipe,.mint-swipe-items-wrap{overflow:hidden;position:relative;height:100%}.mint-swipe-items-wrap>div{position:absolute;-webkit-transform:translateX(-100%);transform:translateX(-100%);width:100%;height:100%;display:none}.mint-swipe-items-wrap>div.is-active{display:block;-webkit-transform:none;transform:none}.mint-swipe-indicators{position:absolute;bottom:10px;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.mint-swipe-indicator{width:.1rem;height:.1rem;display:inline-block;border-radius:50%;background:#ccc;margin:0 3px}.mint-swipe-indicator.is-active{background:#0096ff}
</style>