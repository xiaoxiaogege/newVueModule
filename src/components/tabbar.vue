<template>
  <van-tabbar v-model="active"
              :route="true">
    <van-tabbar-item icon="home-o"
                     to="/">首页</van-tabbar-item>
    <van-tabbar-item icon="search"
                     to="/search">搜索</van-tabbar-item>
    <van-tabbar-item icon="shopping-cart-o"
                     to="/car">购物车</van-tabbar-item>
    <van-tabbar-item icon="friends-o"
                     to="/my">我的</van-tabbar-item>
  </van-tabbar>
</template>

<script>
import { Tabbar, TabbarItem } from 'vant'
export default {
  name: 'tabbar',
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem
  },
  data() {
    return {}
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {}
}
</script>
<style>
</style>