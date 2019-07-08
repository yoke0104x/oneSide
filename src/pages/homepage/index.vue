<template>
  <div class="wrapper">
    <map class="top"
         :longitude="longitude"
         :latitude="latitude"
         scale="14"
         subkey="X7RBZ-MMOKR-UQEWJ-WSCXC-IVXVK-IFFLL"
         show-location>
    </map>
    <cover-view class="bottoms">
      <cover-view class="content-button">
        <cover-view class="span"
                    @click="getLocation"></cover-view>
        <cover-view class="span"
                    @click="mywx"></cover-view>
      </cover-view>
      <cover-view class="all">
        <button @click="getTopsall"
                open-type="getUserInfo">添加面试</button>
      </cover-view>
    </cover-view>
  </div>
</template>

<script>
import QQMapWX from '@/utils/qqMap'
import { mapState, mapActions } from 'vuex'
export default {
  computed: {
    ...mapState({
      longitude: state => state.index.longitude,
      latitude: state => state.index.latitude
    })
  },
  methods: {
    ...mapActions({
      getLocations: 'index/getLocation',
      getSetting: 'index/getSetting',
      login: 'index/login'
    }),
    getTopsall () {
      // console.log(this)
      // 获取权限
      this.getSetting()
    },
    mywx () {
      wx.navigateTo({
        url: '/pages/my/main'
      })
    }
  },
  created () {
    let qqmapsdk = new QQMapWX({
      key: 'X7RBZ-MMOKR-UQEWJ-WSCXC-IVXVK-IFFLL'
    })
    // 登录
    this.login()
    // 获取当前位置
    this.getLocations()
  }
}
</script>
<style>
page,
.wrapper,
.top {
  width: 100%;
  height: 100%;
}
.bottoms {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 230rpx;
}
.all {
  background: #000;
  height: 100rpx;
  display: flex;
  align-items: center;
}
.bottoms button {
  background: #000;
  color: #fff;
}
.content-button {
  width: 100%;
  height: 133rpx;
  display: flex;
  justify-content: space-between;
  padding: 0 30rpx;
  box-sizing: border-box;
}
.content-button .span {
  width: 80rpx;
  height: 80rpx;
  border-radius: 50%;
}
.content-button .span:first-child {
  background: url(https://img-blog.csdnimg.cn/20190701151346972.png) no-repeat;
  background-size: 100%;
  /* background: #000; */
}
.content-button .span:last-child {
  background: #000 url(https://img-blog.csdnimg.cn/20190701151357655.png)
    no-repeat;
  background-size: 100%;
}
* {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>