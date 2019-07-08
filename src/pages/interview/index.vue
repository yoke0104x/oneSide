<template>
  <div class="box">
    <form @submit="submit"
          report-submit>
      <h1>面试信息</h1>
      <div class="nav">
        <div class="list">
          <div>公司名称</div>
          <input title="公司名称"
                 type="text"
                 placeholder="请输入公司名称"
                 v-model="input1">
        </div>
        <div class="list">
          <div>公司电话</div>
          <input type="text"
                 placeholder="请输入面试联系人电话"
                 v-model="input2">
        </div>
        <div class="picker list">
          <div>面试时间</div>
          <picker mode="time"
                  value="time"
                  start="09:01"
                  end="21:01"
                  @change="bindTimeChange">
            <view class="picker">
              2019-7-6 {{time}}
            </view>
          </picker>
        </div>
        <div class="list picker">
          <div>面试地址</div>
          <span @click="urladdress">{{address}}</span>
        </div>
      </div>
      <h1>备注信息</h1>
      <textarea cols="0"
                rows="5"
                placeholder="备注信息(可选，100个字以内)"
                class="textarea"
                v-model="text"></textarea>
      <button class="button"
              form-type="submit">确认</button>
    </form>

  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: '.box',
  data () {
    return {
      time: '10:11',
      input1: '',
      input2: '',
      text: '',
      address: '请输入面试地址',
      timeall: ''
    }
  },
  computed: {
    ...mapState({
      objList: state => state.index.obj
    })
  },
  onShow () {
    if (this.objList.address) {
      this.address = this.objList.address
    }
  },
  methods: {
    bindTimeChange (e) {
      let { value } = e.mp.detail
      this.time = value
    },
    urladdress () {
      wx.navigateTo({ url: `/pages/address/main` })
    },
    submit (e) {
      // console.log(e)
      this.timeall = `${new Date(`2019-7-6 ${this.time}`) * 1}`
      let { input1, input2, objList, timeall, text } = this
      if (input1 && input2.length === 11 && timeall) {
        let { lat, lng } = this.objList.location
        this.addInterview({
          company: input1,
          phone: input2,
          form_id: e.target.formId,
          address: JSON.stringify(objList),
          latitude: lat,
          longitude: lng,
          start_time: timeall * 1,
          description: text
        })
        this.input1 = ''
        this.input2 = ''
        this.text = ''
      } else {
        wx.showModal({
          title: '爸爸您传的参数不完整哦 ?ω?',
          content: '请认真填写详细信息呢 ∩ω∩!',
          showCancel: false,
          success (res) {
            if (res.confirm) {
              console.log('确定')
            }
          }
        })
      }
      console.log(this)
    },
    ...mapActions('index', ['addInterview'])
  }
}
</script>
<style>
page,
.box {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
h1 {
  width: 100%;
  height: 40rpx;
  line-height: 40rpx;
  background: #f6f6f6;
  padding: 15rpx 0 15rpx 30rpx;
  font-size: 34rpx;
}
.list {
  width: 100%;
  height: 88rpx;
  border-bottom: 0.3px solid #eeeeee;
  display: flex;
  align-items: center;
  justify-content: space-between;
  line-height: 88rpx;
  margin-left: 30rpx;
  font-size: 30rpx;
}
.picker {
  display: flex;
  justify-content: flex-start;
}
.list div {
  width: 170rpx;
  height: 100%;
}
input {
  flex: 1;
  height: 100%;
}
.textarea {
  font-size: 30rpx;
  color: #333;
  width: 690rpx;
  height: 200rpx;
  margin: 30rpx;
  box-sizing: border-box;
  padding: 10rpx;
  border: 1rpx solid silver;
  border-radius: 5rpx;
}
.button {
  width: 100%;
}
</style>