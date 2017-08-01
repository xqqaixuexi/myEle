<template>
  <div v-if="showMe">
    <div class="re_search">
      <svg @click="$router.go(-1)">
        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-left.6f6409e"></use>
      </svg>
<!--       <input type="search" v-on:input="search_method" v-model="search_text" class="v-md" placeholder="请输入商品名称" @keydown.enter="search_method"> -->
        <input type="search"  v-model="search_text" class="v-md" placeholder="请输入商品名称" @keydown.enter="search_method">
    </div>
    <h6  class="search_get" v-if="search_get">没有该商家，换个词试试吧！</h6>
    <businessList v-for="(item, n) in search_res" :key="n" :msg="item"></businessList>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import businessList from './small_components/businessList.vue';

export default {
  name: 'search',
  data () {
    return {
      showMe: true,
      search_text: '', // 搜索框内容
      search_res: [], // 搜索结果
      search_get:true
    };
  },
  mounted () {
    this.search_method();
  },
  computed: {
    ...mapGetters([
      'getBussinessbrief' // 商家简略信息
    ])
  },
  methods: {
  	//搜索只匹配了商家名称，其他还没匹配
    search_method () {
      this.search_get = true;
      this.search_res = [];
      var mainWord = this.$route.params.keyword;

      if (this.search_text !== '' && this.search_text !== this.$route.params.keyword) {
        mainWord = this.search_text;
      }
      this.search_text = mainWord;
      for (var x in this.getBussinessbrief) {
        if (this.getBussinessbrief[x].shop_name.includes(mainWord)) {
        	this.search_get = false;
          this.search_res.push(this.getBussinessbrief[x]);
          
        }
      }
    }
  },
  components: {
    businessList
  }
};
</script>

<style lang="scss" scoped>
.re_search{
  background:#0096ff;
  line-height:0;
  padding: .2rem;
  svg{
    width:.6rem;
    height:.6rem;
  }
  input[type="search"]{
    display:inline-block;
    height:.9rem;
    width:8rem;
    outline: none;
    border: none;
    border-radius:.45rem;
    background:#f2f2f2;
    box-sizing: border-box;
    padding: 0 .5rem;
    font-size:.4rem;
  }
}
.search_get{
	margin-top:5rem;
	text-align:center;
	color:gray;
}
</style>
