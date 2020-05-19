<template>
  <div class="home-box">
    <van-sticky>
      <van-search v-model="value"
                  shape="round"
                  background="#4fc08d"
                  placeholder="请输入搜索关键词" />
    </van-sticky>
    <van-swipe :autoplay="3000"
               :width="375">
      <van-swipe-item v-for="(image, index) in images"
                      :key="index">
        <img v-lazy="image" />
      </van-swipe-item>
    </van-swipe>

    <van-grid :gutter="10">
      <van-grid-item v-for="value in menuList"
                     :key="value"
                     :to="value.to" >
                     <i :class="value.icon" style="color:#1989fa; font-size:32px"></i>
                     <p>{{value.text}}</p>
                     </van-grid-item>
    </van-grid>
    <van-row class="hot-title p-t-b-10">
      <van-col span="24">热门推荐</van-col>
    </van-row>
    <van-card v-for="(item) in 8"
              :key="item"
              num="2"
              price="2.00"
              desc="描述信息"
              title="商品标题"
              thumb="https://img.yzcdn.cn/vant/ipad.jpeg" />

    <div class="button p-t-b-10">
      <van-button type="primary" to="/about" block>更多产品</van-button>
    </div>

    <!-- <div class="box">
      <p>这是一段话，测试文本</p>
      <p>{{userInfo.name}}</p>
      <p>{{userInfo.age}}</p>
      <p>{{number}}</p>
    </div> -->
    <mTabbar></mTabbar>
  </div>

</template>

<script>
// @ is an alias to /src
// import logoImg from '../assets/images/logo.png'
import {
  Button,
  Tabbar,
  TabbarItem,
  Swipe,
  SwipeItem,
  Search,
  Sticky,
  Grid,
  GridItem,
  Card,
  Col,
  Row
} from 'vant'
import mTabbar from '@/components/tabbar.vue'
import { mapState, mapActions, mapMutations } from 'vuex'
import { Lazyload } from 'vant'
Vue.use(Lazyload)

export default {
  name: 'home',
  components: {
    mTabbar,
    [Button.name]: Button,
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [Search.name]: Search,
    [Sticky.name]: Sticky,
    [Grid.name]: Grid,
    [GridItem.name]: GridItem,
    [Card.name]: Card,
    [Col.name]: Col,
    [Row.name]: Row
  },
  data() {
    return {
      active: 0,
      value: '',
      images: [
        'https://img.yzcdn.cn/vant/apple-1.jpg',
        'https://img.yzcdn.cn/vant/apple-2.jpg'
      ],
      menuList:[
        {
          icon:"iconfont icon-kuaidi1",
          text:"查快递",
          to:"/about"
        },
        {
          icon:"iconfont icon-yewujieshao-xiaojiankuaidi",
          text:"寄快递",
          to:"/about"
        },
        {
          icon:"iconfont icon-kuaidichaxun",
          text:"查物流"
        },
        {
          icon:"iconfont icon-kuaidifuwu",
          text:"查订单"
        }
      ]
    }
  },
  mounted() {
    // this.query()
    this.queryDome()
    console.log(this.userInfo)
  },
  computed: {
    ...mapState({
      userInfo: state => state.dome.userInfo
    }),
    ...mapState('dome', {
      number: 'number'
    })
  },
  methods: {
    ...mapActions('dome', {
      queryDome: 'queryDome'
    }),
    ...mapMutations(['setDome']),
    query() {
      let params = {
        appId: 'app_out'
      }
      this.$api.dome.query(params)
      this.$api.dome.newsMock()
      this.$api.dome.newsInfo()
    }
  }
}
</script>

<style lang="less">
.home-box{
  padding-bottom: 100px;
}
.box {
  width: 750px;
  height: 200px;
  background: #f00;
  p {
    font-size: 36px;
  }
}
.p-t-b-10{ padding: 20px;}
</style>
