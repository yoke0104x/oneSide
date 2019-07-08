<template>
  <div class="wrap">
    <header>
      <div class="avatar">
        <image :src="img"
               lazy-load="false"></image>
      </div>
      <p>{{formatPhonearr || formatPhone}}</p>
    </header>
    <ul v-if="formatPhonearr || formatPhone">
      <li @click="goSignList">
        <icon type="waiting"
              size="18px" />
        <span>
          我的面试
        </span>
        <image src="https://img-blog.csdnimg.cn/20190703142339376.png"></image>
      </li>
      <button open-type="contact"
              class="concat">
        <icon type="info"
              size="18px" />
        <span>客服中心</span>
        <image src="https://img-blog.csdnimg.cn/20190703142339376.png"></image>
      </button>
    </ul>
    <button v-else
            open-type="getPhoneNumber"
            @getphonenumber="getPhoneNumber">获取手机号</button>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
export default {
  computed: {
    ...mapState({
      formatPhonearr: state => state.index.formatPhone
    })
  },
  data () {
    return {
      img: 'https://img-blog.csdnimg.cn/20190703093730222.png',
      formatPhone: ''
    }
  },
  onShow () {
    var value = wx.getStorageSync('ectPhone')
    var img = wx.getStorageSync('img')
    console.log(value, img)
    if (value) {
      this.formatPhone = value
      this.img = img
    }
  },
  methods: {
    getPhoneNumber (e) {
      console.log(e)
      let that = this
      if (e.target.iv) {
        this.ectPhone({
          iv: e.target.iv,
          encryptedData: e.target.encryptedData
        })
        wx.showToast({
          title: '绑定手机号成功',
          icon: 'success',
          duration: 2000
        })
        wx.getStorage({
          key: 'img',
          success (res) {
            console.log(res.data)
            that.img = res.data
          }
        })
      }
    },
    goSignList () {
      wx.navigateTo({ url: '/pages/interList/main' })
    },
    ...mapActions('index', ['ectPhone'])
  }
}
</script>

<style lang="scss">
header {
  background: #f4f6f9;
  width: 100%;
  height: 350rpx;
  box-sizing: border-box;
  padding: 50rpx 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  .avatar {
    width: 110rpx;
    height: 110rpx;
    background: #fff;
    text-align: center;
    border-radius: 50%;
  }
  image {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
}
li,
button.concat {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 30rpx 40rpx;
  border: 0;
  border-bottom: 1rpx solid #eee;
  span:nth-child(2) {
    flex: 1;
    margin-left: 40rpx;
    color: #666;
    font-size: 36rpx;
    background: transparent;
    text-align: left;
  }
  image {
    width: 40rpx;
    height: 40rpx;
  }
}
button.concat {
  height: 106rpx;
}
</style>