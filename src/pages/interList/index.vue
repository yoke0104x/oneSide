<template>
  <div class="box">
    <div class="tops">
      <p v-for="(item,index) in list"
         :key="index"
         :class="index===ind?'active':null"
         @click="tabs(index,item.status)">{{item.stateNmae}}</p>
    </div>
    <div>
      <ul v-if="interList.length"
          class="alltops">
        <li v-for="item in interList"
            :key="item.id"
            @click="goDetail(item.id)">
          <p>
            <span>{{item.company}}</span>
            <span :class="'tag'+(item.status+2)">{{item.status?item.status==1?'已放弃':'未开始':'已打卡'}}</span>
          </p>
          <p>{{item.address.address}}</p>
          <p>
            <span>面试时间: {{item.start_time}}</span>
            <span :class="'tag'+(2-item.status)">{{item.remind?'未提醒':'已提醒'}}</span>
          </p>
        </li>
      </ul>
      <p v-else
         class="none">当前分类还没有面试!</p>
    </div>
    <p class="more"
       v-if="interList.length">{{hasMore?'上拉加载更多': '我是有底线的'}}</p>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
export default {
  data () {
    return {
      list: [{ stateNmae: '未打卡', status: -1 }, { stateNmae: '已打卡', status: 0 }, { stateNmae: '已放弃', status: 1 }, { stateNmae: '全部', status: 3 }],
      ind: 0,
      status: -1,
      page: 1,
      index: 1,
      pageSize: 10,
      hasMore: false
    }
  },
  computed: {
    ...mapState({
      interList: state => state.index.interList
    })
  },
  methods: {
    tabs (e, status) {
      this.ind = e
      this.status = status
      if (status * 1 === 3) {
        this.addInterList({
          page: this.page,
          pageSize: this.pageSize
        })
      } else {
        this.addInterList({
          status: this.status,
          page: this.page,
          pageSize: this.pageSize
        })
      }
    },
    goDetail (index) {
      console.log(index)
      this.interdetail(index)
      wx.navigateTo({ url: `/pages/interList/detail/main` })
    },
    ...mapActions('index', ['addInterList', 'interdetail'])

  },
  onShow () {
    this.addInterList({
      status: -1,
      page: 1,
      pageSize: 10
    })
  },
  onReachBottom () {
    let { index } = this
    console.log(++index)
    if (this.interList.length <= index * this.pageSize) {
      if (this.status !== 3) {
        ++this.index
        this.addInterList({
          status: this.status,
          page: index,
          pageSize: this.pageSize
        })
      } else {
        this.index = 1
        console.log(this.index, '................')
        this.addInterList({
          page: ++this.index,
          pageSize: this.pageSize
        })
      }

      this.hasMore = true
    } else {
      this.hasMore = false
    }
    this.hasMore = false
    if (!this.hasMore) {
      index = null
    }
  }
}
</script>

<style lang="scss">
page,
.box {
  width: 100%;
  height: 100%;
  // background: #ccc;
}
.tops {
  width: 100%;
  height: 100rpx;
  display: flex;
  border-top: 1rpx solid #ccc;
  background: #fff;
  position: fixed;
  top: 0;
  left: 0;
}
.tops p {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}
.active {
  border-bottom: 1px solid blueviolet;
  color: blueviolet;
}
.alltops {
  margin-top: 100rpx;
}
li {
  border-top: 20rpx solid #eee;
  width: 100%;
  padding: 10rpx 30rpx;
  box-sizing: border-box;

  p {
    display: flex;
    line-height: 1.5;
    margin: 15rpx 0;
    align-items: center;
    justify-content: space-between;
  }
  p:nth-child(1) {
    span:first-child {
      color: #000;
      font-size: 44rpx;
      font-weight: 500;
    }
    span:last-child {
      font-size: 30rpx;
      padding: 5rpx 10rpx;
    }
  }
  p:nth-child(2) {
    font-size: 32rpx;
    color: #999;
    line-height: 1.2;
    overflow: hidden;
    text-overflow: ellipsis; //文本溢出显示省略号
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
  p:nth-child(3) {
    font-size: 34rpx;
    color: #666;
    span:last-child {
      padding: 5rpx 10rpx;
    }
  }
}
.tag1 {
  background-color: rgba(144, 147, 153, 0.1);
  border-color: rgba(144, 147, 153, 0.2);
  color: #909399;
}
.tag2 {
  background-color: rgba(64, 158, 255, 0.1);
  color: #409eff;
  border: 1px solid rgba(64, 158, 255, 0.2);
}
.tag3 {
  background-color: rgba(245, 108, 108, 0.1);
  border-color: rgba(245, 108, 108, 0.2);
  color: #f56c6c;
}
.none {
  padding: 100rpx 0;
  text-align: center;
  font-size: 30rpx;
  color: #666;
}
.more {
  text-align: center;
  font-size: 32rpx;
  line-height: 2;
  color: #999;
  // border-bottom: 20rpx solid #eee;
  border-top: 20rpx solid #eee;
}
</style>