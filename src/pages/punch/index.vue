<template>
  <div class="wrapper">
    <map class="top"
         :longitude="longitudes"
         :latitude="latitudes"
         scale="14"
         :circle="circle"
         subkey="X7RBZ-MMOKR-UQEWJ-WSCXC-IVXVK-IFFLL"
         show-location>
    </map>
    <cover-view class="bottoms">
      <cover-view class="content-button">
        <cover-view class="span"
                    @click="getLocation"></cover-view>
        <cover-view class="span"></cover-view>
      </cover-view>
      <cover-view class="all">
        <button @click="getTopsall"
                open-type="getUserInfo">打卡</button>
      </cover-view>

    </cover-view>
  </div>
</template>

<script>
import QQMapWX from '@/utils/qqMap'
import { mapState, mapActions } from 'vuex'
export default {
  data () {
    return {
      longitudes: 116.29845,
      latitudes: 39.95933,
      distance: 0
    }
  },
  computed: {
    ...mapState({
      longitude: state => state.index.longitude,
      latitude: state => state.index.latitude,
      detailData: state => state.index.detailData
    }),
    circle () {
      if (!this.markers) {
        return []
      } else {
        return [{
          ...this.markers[0],
          color: this.distance > 100 ? '#C9394A' : '#197DBF',
          fillColor: 'rgba(0,0,0, .3)',
          radius: 100,
          strokeWidth: 2
        }]
      }
    }
  },
  onShow () {
    console.log(this.detailData)
  },
  methods: {
    ...mapActions({
      getLocations: 'index/getLocation'
    }),
    getLocation () {
      this.longitude = this.longitudes
      this.latitudes = this.latitudes
    },
    getTopsall () {
      console.log(this.detailData)
    }
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
* {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>