<template>
  <div id="app">
    <transition name="router-fade" mode="out-in">
      <router-view></router-view>
    </transition>
<!--     <div class="loading_jump" v-if="isLoading">
      <div class="loading_jump1"></div>
      <div class="loading_jump2"></div>
    </div> -->
  </div>
</template>

<script>
export default {
  name: 'app',
  computed: {
    asd(){
      return this.$store.getters.getCount;
    }
  },
  methods: {
    change(arg){
      this.$store.dispatch('setCount',arg)
    },
  },
  data () {
    return {
      
    }
  }
}
</script>

<style lang="scss">
@import "./common/css/reset.scss";

</style>
