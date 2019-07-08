// 原始数据
// eslint-disable-next-line standard/object-curly-even-spacing
import { Longins, addinter, interList, interdetail, interupdate, ecryptpPhone } from '../../servers'
const state = {
  longitude: '80',
  latitude: '123',
  list: [],
  obj: {},
  interList: [],
  detailData: {},
  formatPhone: ''
}

// 派生数据
const getters = {

}

// 异变改变
const actions = {
  // 获取当前地理位置
  getLocation ({ commit }, payload) {
    wx.getLocation({
      type: 'wgs84',
      success (res) {
        commit('updateLocation', res)
      }
    })
  },
  // 获取模糊搜索地址
  getaddress ({ commit }, options) {
    wx.request({
      url: `https://apis.map.qq.com/ws/place/v1/suggestion/?region=${options.selector[options.index]}&keyword=${options.title}&key=LRIBZ-N7L6D-R6M44-PM5RE-GTERH-V2F7E`,
      header: {
        'content-type': 'application/json'
      },
      success: (res) => {
        commit('getaddressList', res.data.data)
      }
    })
  },
  // 授权
  getSetting ({ commit }, options) {
    wx.getSetting({
      success: function (res) {
        if (!res.authSetting['scope.userInfo']) {
          if (res.authSetting['scope.userInfo'] === false) {
            wx.openSetting({
              success (res) {
                console.log(res)
              }
            })
          }
        } else {
          wx.navigateTo({
            url: '/pages/interview/main'
          })
        }
      }
    })
  },
  // 登录
  login ({ commit }, options) {
    wx.login({
      success: (res) => {
        if (res.code) {
          Longins(res).then(str => {
            if (str.data.openid && str.data.phone) {
              wx.setStorage({
                key: 'openid',
                data: str.data.openid
              })
              wx.setStorage({
                key: 'phone',
                data: str.data.phone
              })
            }
          }).catch(() => {
            // console.log('失败')
          })
        } else {
          wx.showToast({
            title: '登陆失败',
            icon: 'error',
            duration: 2000
          })
        }
      }
    })
  },
  // 添加面试
  async addInterview ({ commit }, options) {
    let res = await addinter(options)
    if (res.code === 0) {
      wx.showModal({
        title: '温馨提示',
        content: res.msg,
        showCancel: false,
        success (res) {
          if (res.confirm) {
            wx.navigateTo({ url: `/pages/interList/main` })
          }
        }
      })
    }
    return res
  },
  // 获取面试列表
  async addInterList ({ commit }, options) {
    let res = await interList(options)
    res.data.forEach(el => {
      el.address = JSON.parse(el.address)
      el.start_time = new Date((el.start_time) * 1).toLocaleString()
    })
    if (options.page !== 1) {
      commit('interList', { list: [...state.interList, ...res.data] })
    } else {
      commit('interList', { list: res.data })
    }
    return res
  },
  // 获取面试详情
  async interdetail ({ commit }, options) {
    let res = await interdetail(options)
    if (res.code * 1 === 0 * 1) {
      res.data.start_time = new Date((res.data.start_time) * 1).toLocaleString()
      commit('interdetail', res.data)
    }
    return res
  },
  // 更新面试
  async interupdate ({ commit }, options) {
    let data = await interupdate(options)
    console.log(data)
  },
  // 解密手机号
  async ectPhone ({ commit }, options) {
    let res = await ecryptpPhone(options)
    commit('ectPhone', res.data)
  }
}

// 同步改变，改变数据的唯一途径。
const mutations = {
  updateLocation (state, payload) {
    state.longitude = payload.longitude
    state.latitude = payload.latitude
  },
  getaddressList (state, payload) {
    state.list = payload
  },
  mapItem (state, payload) {
    state.obj = payload
  },
  interList (state, payload) {
    state.interList = payload.list
  },
  interdetail (state, payload) {
    payload.address = JSON.parse(payload.address)
    state.detailData = payload
  },
  ectPhone (state, payload) {
    let formatPhone = payload.phoneNumber.replace(/[^0-9]/ig, '').substr(0, 3) + '****' + payload.phoneNumber.replace(/[^0-9]/ig, '').substr(7)
    wx.setStorageSync('ectPhone', formatPhone)
    // console.log(formatPhone, '.................................')
    state.formatPhone = formatPhone
  }
}
export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
