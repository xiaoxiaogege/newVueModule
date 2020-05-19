<template>
  <div>
    <van-sticky>
      <van-search v-model="value"
                  shape="round"
                  placeholder="请输入搜索关键词" />
    </van-sticky>
    <van-index-bar :index-list="indexList">
      <van-index-anchor v-for="(item,index) in nameData"
                        :key="index+'a'"
                        :index="index">
        <span class="indexWord">{{index}}</span>
        <van-cell :title="citem"
                  v-for="(citem,cindex) in item"
                  :key="cindex+'a'" />
      </van-index-anchor>
    </van-index-bar>
    <mTabbar></mTabbar>
  </div>
</template>

<script>
import mTabbar from '@/components/tabbar.vue'
import { IndexBar, IndexAnchor, Cell, Search, Sticky } from 'vant'
export default {
  components: {
    mTabbar,
    [IndexBar.name]: IndexBar,
    [IndexAnchor.name]: IndexAnchor,
    [Cell.name]: Cell,
    [Search.name]: Search,
    [Sticky.name]: Sticky
  },
  data() {
    return {
      indexList: [
        'A',
        'B',
        'C',
        'D',
        'E',
        'F',
        'G',
        'H',
        'J',
        'K',
        'L',
        'M',
        'N'
      ],
      nameData: {
        A: [
          '阿拉善盟A',
          '鞍山市A',
          '阿拉善盟A',
          '鞍山市A',
          '阿拉善盟A',
          '鞍山市A'
        ],
        B: ['阿拉善盟B', '鞍山市B', '阿拉善盟B', '鞍山市B'],
        C: [
          '阿拉善盟C',
          '鞍山市C',
          '阿拉善盟C',
          '鞍山市C',
          '阿拉善盟C',
          '鞍山市C',
          '阿拉善盟C',
          '鞍山市C'
        ],
        D: ['阿拉善盟D', '鞍山市D'],
        E: ['阿拉善盟E', '鞍山市E', '阿拉善盟E', '鞍山市E'],
        F: ['阿拉善盟E', '鞍山市E', '阿拉善盟E', '鞍山市E'],
        G: ['阿拉善盟E', '鞍山市E', '阿拉善盟E', '鞍山市E'],
        H: ['阿拉善盟E', '鞍山市E', '阿拉善盟E', '鞍山市E'],
        J: ['阿拉善盟E', '鞍山市E', '阿拉善盟E', '鞍山市E'],
        K: ['阿拉善盟E', '鞍山市E', '阿拉善盟E', '鞍山市E'],
        L: ['阿拉善盟E', '鞍山市E', '阿拉善盟E', '鞍山市E'],
        M: ['阿拉善盟E', '鞍山市E', '阿拉善盟E', '鞍山市E'],
        N: ['阿拉善盟E', '鞍山市E', '阿拉善盟E', '鞍山市E']
      }
    }
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {}
}
</script>
<style>
</style>