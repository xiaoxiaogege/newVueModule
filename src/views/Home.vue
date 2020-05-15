<template>
  <div class="home">
    <!-- <img alt="Vue logo" :src="logoImg" /> -->
    <div class="button">
      <van-button type="primary"
                  url="www.baidu.com">URL 跳转</van-button>
      <van-button type="primary"
                  to="/about">路由跳转</van-button>
      <div>
        <van-button type="default"
                    size="normal">默认按钮</van-button>
      </div>
      <div>
        <van-button type="primary"
                    icon="star-o"
                    size="large">主要按钮</van-button>
      </div>
      <div>
        <van-button type="info"
                    size="small">信息按钮</van-button>
      </div>
      <div>
        <van-button type="warning"
                    size="mini">警告按钮</van-button>
      </div>
      <van-button type="danger"
                  block>危险按钮</van-button>
    </div>

    <div class="cell">
      <van-cell-group>
        <van-cell title="单元格"
                  value="内容" />
        <van-cell title="单元格"
                  value="内容"
                  label="描述信息" />
      </van-cell-group>
    </div>

    <van-slider v-model="value"
                bar-height="10px"
                active-color="#ee0a24" />

    <van-dropdown-menu>
      <van-dropdown-item v-model="value1"
                         :options="option1" />
      <van-dropdown-item v-model="value2"
                         :options="option2" />
      <van-dropdown-item v-model="value3"
                         :options="option3" />
      <van-dropdown-item v-model="value4"
                         :options="option4" />
    </van-dropdown-menu>
    <van-number-keyboard safe-area-inset-bottom :show="true" />
    <div class="box">
      <p>这是一段话，测试文本</p>
      <p>{{userInfo.name}}</p>
      <p>{{userInfo.age}}</p>
      <p>{{number}}</p>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import logoImg from '../assets/images/logo.png'
import {
  Button,
  Cell,
  CellGroup,
  Slider,
  DropdownMenu,
  DropdownItem,
  NumberKeyboard
} from 'vant'
import { mapState, mapActions, mapMutations } from 'vuex'

export default {
  name: 'home',
  components: {
    [Button.name]: Button,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [Slider.name]: Slider,
    [DropdownMenu.name]: DropdownMenu,
    [DropdownItem.name]: DropdownItem,
    [NumberKeyboard.name]: NumberKeyboard
  },
  data() {
    return {
      // logoImg: logoImg
      value: 10,
      value1: 0,
      value2: 'a',
      value3: 'b',
      value4: 'c',
      option1: [
        { text: '全部商品', value: 0 },
        { text: '新款商品', value: 1 },
        { text: '活动商品', value: 2 }
      ],
      option2: [
        { text: '默认排序', value: 'a' },
        { text: '好评排序', value: 'b' },
        { text: '销量排序', value: 'c' }
      ],
      option3: [
        { text: '默认排序', value: 'a' },
        { text: '好评排序', value: 'b' },
        { text: '销量排序', value: 'c' }
      ],
      option4: [
        { text: '默认排序', value: 'a' },
        { text: '好评排序', value: 'b' },
        { text: '销量排序', value: 'c' }
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
.box {
  width: 750px;
  height: 200px;
  background: #f00;
  p {
    font-size: 36px;
  }
}
</style>
