<template>
	<router-link :to="'/business'+msg.path">
		<section class="businessList clear">
			<div class="business_pic fl">
				<img src="../../images/shop-logo2.jpg">
			</div>
			<div class="business_info fr">
				<div class="business_name clear">
					<h3 class="fl ell">
						<span v-if="msg.brand">品牌</span>
						{{msg.shop_name}}
					</h3>
					<div class="fr name_icon">
						<div class="bzp" v-if="msg.bao">
							<i>保</i>
						</div>
						<div class="bzp" v-if="msg.piao">
							<i>票</i>
						</div>
						<div class="bzp" v-if="msg.zhun">
							<i>准</i>
						</div>										
					</div>
				</div>
				<div class="business_rate clear">
					<div class="rate_star fl">
            <YellowStar :code="msg.shop_rating"></YellowStar>
            <span class="orange_code  v-md">{{ msg.shop_rating }}</span>
					</div>
					<div class="rate_icon fr">
						<div class="zsd" v-if="msg.on_time">准时达</div>
						<div class="fyzs" v-if="msg.fengniao">蜂鸟专送</div>
					</div>
				</div>
				<div class="business_price clear">
					<div class="price fl">
						<span class="start_send">￥{{msg.start_send}}起送</span>
						<span class="send_cost">配送费{{msg.send_cost}}元</span>
					</div>
					<div class="speed fr">
						<span class="distance">{{msg.distance}}m</span>
						<span class="estimate_time">{{msg.estimate_time}}分钟</span>
					</div>
				</div>
			</div>
		</section>
	</router-link>

</template>
<script type="text/javascript">
  import YellowStar from './rate.vue'
	export default{
		name: 'businessList',
        props: ['msg'],
		data(){
			return{

			}
		},
    components:{
      YellowStar
    }
	}
</script>
<style lang="scss">
	/* 单个商家 */
.businessList{
  background:#fff;

  .business_pic{
    width:1.6rem;
    height:1.6rem;
    padding:0.4rem;
    float: left;
    img{
      width:100%;
      height:100%;
    }
  }
  .business_info{
    float: right;
    width:7.4rem;
    height:1.6rem;
    padding:0.4rem .2rem .4rem 0;
    .business_name{
      font-size:.35rem;
      line-height:.45rem;
      vertical-align:top;
      h3{
        width:5rem;
        display:inline-block;
        span{
          color: #52250a;
          background:#ffd930;
          font-size:.2rem;
          padding:.02rem;
          border-radius: 2px;
          vertical-align:top;
          margin-right: .04rem;
        }
      }
      .bzp{
        width: .3rem;
        height: .3rem;
        font-size:.26rem;
        text-align:center;
        line-height:.3rem;
        display: inline-block;
        color: #999;
        border: 0.01rem solid #ddd;
        padding: 0.01rem;
        border-radius:3px;
        i{
          font-style: normal;
        }
        
      }
    }
    .business_rate,.business_price{
      font-size:.25rem;
      margin-top: .3rem;
      line-height:.25rem;
    }

  }
  .code_num{
    svg{
      width:.3rem;
      height:.3rem;
      fill: #ffaa0c;
    }
  }
  .zsd{
    font-size:.25rem;
    height: .35rem;
    line-height: .3rem;
    padding: 0 0.05rem;
    display:inline-block;
    color: #0096ff;
    background: #fff;
    border: 0.01rem solid  #0096ff;
    box-sizing: border-box;
    border-radius:3px;
  }
  .fnzs{
    font-size:.25rem;
    height: .35rem;
    padding: 0 0.05rem;
    line-height: .3rem;
    display:inline-block;
    background:  #0096ff;
    color: #fff;
    border: 0.01rem solid  #0096ff;
    box-sizing: border-box;
    border-radius:3px;
  }
}
</style>