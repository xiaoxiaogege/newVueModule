<template>
  <div>
    <van-submit-bar style="bottom:60px"
                    :price="3050"
                    button-text="提交订单"
                    @submit="onSubmit">
      <van-checkbox v-model="checked">全选</van-checkbox>
      <template #tip>
        你的收货地址不支持同城送, <span @click="onClickEditAddress">修改地址</span>
      </template>
    </van-submit-bar>
    <mTabbar></mTabbar>
  </div>
</template>

<script>
import mTabbar from '@/components/tabbar.vue'
import { SubmitBar, Checkbox, CheckboxGroup } from 'vant'
export default {
  components: {
    mTabbar,
    [SubmitBar.name]: SubmitBar,
    [Checkbox.name]: Checkbox,
    [CheckboxGroup.name]: CheckboxGroup
  },
  data() {
    return {
      checked:true
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