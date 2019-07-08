<template>
  <div class="wrap">
    <ul>
      <li>
        <label for="">面试地址：</label>
        <span>{{detailData.address.address}}</span>
      </li>
      <li>
        <label for="">面试时间：</label>
        <span>{{detailData.start_time}}</span>
      </li>
      <li>
        <label for="">联系方式：</label>
        <span @click="makePhone">{{detailData.phone}}</span>
      </li>
      <li>
        <label for="">是否提醒：</label>
        <span>{{detailData.remind?'未提醒':'已提醒'}}</span>
      </li>
      <li>
        <label for="">面试状态：</label>
        <span>{{detailData.status==-1?'未开始':detailData.status==0?'已打卡': '已放弃'}}</span>
      </li>
      <li v-if="detailData.status==-1">
        <label for="">取消提醒：</label>
        <switch :checked="detailData.remind===1"
                @change="cancelRemind" />
      </li>
    </ul>
    <section v-if="detailData.status==-1 && title"
             class="action">
      <button @click="goSign">去打卡</button>
      <button @click="giveup">放弃面试</button>
    </section>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
export default {
  data () {
    return {
      title: true
    }
  },
  computed: {
    ...mapState({
      detailData: state => state.index.detailData
    })
  },
  methods: {
    cancelRemind () {
      this.interupdate({ title: this.detailData.id, remind: this.detailData.remind === -1 ? 1 : -1 })
      this.interdetail(this.detailData.id)
    },
    giveup () {
      let that = this
      wx.showModal({
        title: '你确定要放弃面试吗？',
        content: '放弃面试',
        success (res) {
          if (res.confirm) {
            that.interupdate({ title: that.detailData.id, status: 1 })
            that.interdetail(that.detailData.id)
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })
    },
    goSign () {
      wx.navigateTo({ url: '/pages/punch/main' })
    },
    ...mapActions('index', ['interupdate', 'interdetail'])
  },
  created () {
    console.log(this)
  }
}
</script>

<style lang="scss">
ul {
  border-top: 1rpx solid #eee;
  border-bottom: 1rpx solid #eee;
  background: #fff;
}
li {
  width: 720rpx;
  min-height: 88rpx;
  margin-left: 30rpx;
  border-bottom: 1rpx solid #eee;
  display: flex;
  align-items: center;
  justify-content: space-between;
  label {
    color: #666;
    width: 170rpx;
    font-size: 30rpx;
  }
  span,
  switch {
    flex: 1;
    // text-align: right;
    font-size: 30rpx;
    color: #333;
    // height: 88rpx;
    // line-height: 88rpx;
    // overflow: hidden;
    // white-space: nowrap;
    // text-overflow: ellipsis;
    padding-right: 30rpx;
    box-sizing: border-box;
  }
}
li:last-child {
  border-bottom: none;
}
.action {
  display: flex;
  margin: 50rpx 15rpx;
  button {
    flex: 1;
    color: #fff;
    margin: 15rpx;
  }
  button:first-child {
    background: #197dbf;
  }
  button:last-child {
    background: #dc4e42;
  }
}
</style>