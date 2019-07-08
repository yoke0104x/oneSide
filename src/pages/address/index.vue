<template>
  <div>
    <div class="list">
      <div class="title">
        <picker @change="bindPickerChange"
                :value="index"
                :range="selector">
          <view class="picker">
            {{selector[index]}}
          </view>
        </picker>
      </div>
      <div class="inp">
        <input type="text"
               v-model="title"
               placeholder="面试地址"
               @input="changeinp">
      </div>
    </div>
    <div v-for="(item,i) in list"
         :key="i">
      <div class="lists"
           @click="all(item)">{{item.address}}</div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
  data () {
    return {
      title: '',
      selector: ['北京', '上海', '天津', '重庆', '日本'],
      index: 0,
      item: ''
    }
  },
  computed: {
    ...mapState({
      list: state => state.index.list
    })
  },
  methods: {
    bindPickerChange (e) {
      let { value } = e.target
      this.index = value
      console.log(value)
    },
    changeinp () {
      let that = this
      clearTimeout(clock)
      var clock = setTimeout(function () {
        that.getaddress({ title: that.title, index: that.index, selector: that.selector })
      }, 1500)
    },
    all (item) {
      this.$store.commit('index/mapItem', item)
      wx.navigateBack({
        delta: 1 // 返回的页面数，如果 delta 大于现有页面数，则返回到首页,
      })
    },
    ...mapActions('index', ['getaddress', 'mapItem'])
  }
}
</script>
<style>
.list {
  width: 100%;
  height: 80rpx;
  border-bottom: 1px solid #eeeeee;
  border-top: 1px solid #eeeeee;
  display: flex;
  font-size: 30rpx;
}
.list > .title {
  width: 150rpx;
  height: 100%;
  border-right: 1px solid #ccc;
  text-align: center;
  line-height: 80rpx;
}
.lists {
  width: 100%;
  height: 80rpx;
  display: flex;
  align-items: center;
  border-bottom: 2rpx solid #ccc;
  padding: 0 20rpx;
  box-sizing: border-box;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.list > .inp {
  flex: 1;
  display: flex;
  align-items: center;
  margin-left: 30rpx;
}
</style>


