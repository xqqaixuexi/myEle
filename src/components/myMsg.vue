<template>
  <div class="myzone_index">
    <Backbar title="个人中心"></Backbar>
    <div class="myzone_content">
      <!-- 头 -->
      <div class="myzone_info clear">
        <img src="../images/slider-pic/myzone_image.jpg" alt="">
        <div class="myzone_uid">
          <h3>{{ uname }}</h3>
          <p>185****3414</p>
        </div>
      </div>
    </div>
    <!-- 3分 -->
    <div class="three_lan">
      <a class="three_lan_">
        <p class="big_colorful">
          <span class="index-2FmrF_0" style="color: rgb(255, 153, 0);">钱包</span><span class="index-2V-Hh_0"></span>
        </p>
        <p class="index-3S6cZ_0"></p>
      </a>
      <a class="three_lan_" style="border-left: 1px solid #ddd;border-right: 1px solid #ddd;">
        <p class="big_colorful">
          <span class="index-2FmrF_0" style="color: rgb(255, 95, 62);">优惠券</span><span class="index-2V-Hh_0"></span>
        </p>
        <p class="index-3S6cZ_0"></p>
      </a>
      <a class="three_lan_">
        <p class="big_colorful">
          <span class="index-2FmrF_0" style="color: rgb(106, 194, 11);">积分</span><span class="index-2V-Hh_0"></span>
        </p>
        <p class="index-3S6cZ_0"></p>
      </a>
    </div>
    <!-- 栏 -->
    <router-link to="/order"> 
      <div class="some_bar first-c">
        <svg class="v-md">
          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#order.070ae2a"></use>
        </svg>
        <span class="v-md">我的订单</span>
      </div>
    </router-link>
    <div class="some_bar">
      <svg class="v-md">
        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#blue_location"></use>
      </svg>
      <span class="v-md">收货地址</span>
    </div>
    <div class="some_bar">
      <svg class="v-md">
        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#shop"></use>
      </svg>
      <span class="v-md">积分商城</span>
    </div>
    <div class="some_bar">
      <svg class="v-md">
        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#eleme"></use>
      </svg>
      <span class="v-md">饿了么会员卡</span>
    </div>

    <div class="some_bar first-c">
      <svg class="v-md">
        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#discover.5811137"></use>
      </svg>
      <span class="v-md">服务中心</span>
    </div>
    <div class="some_bar" @click='outLogin'>
      <svg class="v-md">
        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#index.18edf5a"></use>
      </svg>
      <span class="v-md">退出登录</span>
    </div>
    <fixedNav></fixedNav>
  </div>
</template>

<script>
import Backbar from './small_components/back.vue';
import fixedNav from './small_components/fixedNav.vue';
export default {
  name: 'myMsg',
  data () {
    return {
      uname: ''
    };
  },
  mounted () {
    if (!this.isLogin) {
      this.$router.replace('/login');
    } else {
      this.uname = this.$store.getters.getuname;
      // 设置当前标记为我的
      this.$store.dispatch('setWhichpage', this.$route.path);
    }
  },
  computed: {
    isLogin () {
      return this.$store.getters.getLogin;
    }
  },
  methods: {
    outLogin(e){
      // alert(111)
      this.$store.dispatch('setLogin',false);
      this.$router.replace('/index')
    }
  },
  components: {
    fixedNav,
    Backbar
  }
};
</script>

<style lang="scss" scoped>
.myzone_content{
  width:100%;
  height:3rem;
  margin-top:1rem;
  padding: .8rem .4rem;
  box-sizing:border-box;
  background:#0097ff;
  img{
    width:1.4rem;
    height:1.4rem;
    border-radius:50%;float: left;
  }
  .myzone_uid{
    float: left;
    margin-left:.5rem;
    color:#fff;
    h3{
      font-size:.7rem;
    }
    p{
      font-size:.4rem;
    }
  }
}
.three_lan{
  display: table;
  width: 100%;
  height: 2.24rem;
  border-bottom: 1px solid #ddd;
  background-color: #fff;
  .three_lan_{
    display: table-cell;
    width: 33.3333%;
    vertical-align: middle;
    text-align: center;
    p.big_colorful{
      line-height:.4rem;
    }
    .index-2FmrF_0 {
        padding: .4rem 0 0;
        font-size: .6rem;
        line-height: .6rem;
        font-weight: 700;
    }
    .index-2V-Hh_0 {
        font-size: .32rem;
        line-height: .32rem;
    }
    .index-3S6cZ_0 {
        font-size: .32rem;
        line-height: .37rem;
        font-weight: 500;
        color: #666;
    }

  }
}
div.some_bar{
  width: 10rem;
  height: 1.1rem;
  padding: 0 .4rem;
  box-sizing: border-box;
  background:#fff;
  font-size:.4rem;
  line-height:1.1rem;
  border-top:1px solid #dedede;
  &.first-c{
    margin-top: .3rem;
    boeder:none;
  }
  svg{
    width: .4rem;
    height: .4rem;
  }
  span{
    margin-left:.2rem;
  }
}

</style>
