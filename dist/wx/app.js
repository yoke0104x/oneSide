require("./common/manifest.js")
require("./common/vendor.js")
global.webpackJsonpMpvue([1],{

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__store__ = __webpack_require__(54);



// 引入vuex


__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.productionTip = false;
__WEBPACK_IMPORTED_MODULE_1__App__["a" /* default */].mpType = 'app';

__WEBPACK_IMPORTED_MODULE_0_vue___default.a.prototype.$store = __WEBPACK_IMPORTED_MODULE_2__store__["a" /* default */];

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__App__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_App_vue__ = __webpack_require__(53);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(51)
}
var normalizeComponent = __webpack_require__(4)
/* script */

/* template */
var __vue_template__ = null
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_App_vue__["a" /* default */],
  __vue_template__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\App.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-87a06f64", Component.options)
  } else {
    hotAPI.reload("data-v-87a06f64", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 51:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

/* harmony default export */ __webpack_exports__["a"] = ({
  created: function created() {
    // 调用API从本地缓存中获取数据
    /*
     * 平台 api 差异的处理方式:  api 方法统一挂载到 mpvue 名称空间, 平台判断通过 mpvuePlatform 特征字符串
     * 微信：mpvue === wx, mpvuePlatform === 'wx'
     * 头条：mpvue === tt, mpvuePlatform === 'tt'
     * 百度：mpvue === swan, mpvuePlatform === 'swan'
     * 支付宝(蚂蚁)：mpvue === my, mpvuePlatform === 'my'
     */
    wx.getUserInfo({
      success: function success(res) {
        console.log(res);
        wx.setStorage({
          key: 'img',
          data: res.userInfo.avatarUrl
        });
      }
    });
  }
});

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vuex_dist_logger__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vuex_dist_logger___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_vuex_dist_logger__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modules_index__ = __webpack_require__(56);






// 引入子模块



__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */].Store({
  modules: {
    index: __WEBPACK_IMPORTED_MODULE_3__modules_index__["a" /* default */]
  },
  plugins: [__WEBPACK_IMPORTED_MODULE_2_vuex_dist_logger___default()()]
}));

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__servers__ = __webpack_require__(94);



// 原始数据
// eslint-disable-next-line standard/object-curly-even-spacing

var state = {
  longitude: '80',
  latitude: '123',
  list: [],
  obj: {},
  interList: [],
  detailData: {},
  formatPhone: ''

  // 派生数据
};var getters = {};

// 异变改变
var actions = {
  // 获取当前地理位置
  getLocation: function getLocation(_ref, payload) {
    var commit = _ref.commit;

    wx.getLocation({
      type: 'wgs84',
      success: function success(res) {
        commit('updateLocation', res);
      }
    });
  },

  // 获取模糊搜索地址
  getaddress: function getaddress(_ref2, options) {
    var commit = _ref2.commit;

    wx.request({
      url: 'https://apis.map.qq.com/ws/place/v1/suggestion/?region=' + options.selector[options.index] + '&keyword=' + options.title + '&key=LRIBZ-N7L6D-R6M44-PM5RE-GTERH-V2F7E',
      header: {
        'content-type': 'application/json'
      },
      success: function success(res) {
        commit('getaddressList', res.data.data);
      }
    });
  },

  // 授权
  getSetting: function getSetting(_ref3, options) {
    var commit = _ref3.commit;

    wx.getSetting({
      success: function success(res) {
        if (!res.authSetting['scope.userInfo']) {
          if (res.authSetting['scope.userInfo'] === false) {
            wx.openSetting({
              success: function success(res) {
                console.log(res);
              }
            });
          }
        } else {
          wx.navigateTo({
            url: '/pages/interview/main'
          });
        }
      }
    });
  },

  // 登录
  login: function login(_ref4, options) {
    var commit = _ref4.commit;

    wx.login({
      success: function success(res) {
        if (res.code) {
          Object(__WEBPACK_IMPORTED_MODULE_3__servers__["a" /* Longins */])(res).then(function (str) {
            if (str.data.openid && str.data.phone) {
              wx.setStorage({
                key: 'openid',
                data: str.data.openid
              });
              wx.setStorage({
                key: 'phone',
                data: str.data.phone
              });
            }
          }).catch(function () {
            // console.log('失败')
          });
        } else {
          wx.showToast({
            title: '登陆失败',
            icon: 'error',
            duration: 2000
          });
        }
      }
    });
  },

  // 添加面试
  addInterview: function addInterview(_ref5, options) {
    var _this = this;

    var commit = _ref5.commit;
    return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee() {
      var res;
      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return Object(__WEBPACK_IMPORTED_MODULE_3__servers__["b" /* addinter */])(options);

            case 2:
              res = _context.sent;

              if (res.code === 0) {
                wx.showModal({
                  title: '温馨提示',
                  content: res.msg,
                  showCancel: false,
                  success: function success(res) {
                    if (res.confirm) {
                      wx.navigateTo({ url: '/pages/interList/main' });
                    }
                  }
                });
              }
              return _context.abrupt('return', res);

            case 5:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this);
    }))();
  },

  // 获取面试列表
  addInterList: function addInterList(_ref6, options) {
    var _this2 = this;

    var commit = _ref6.commit;
    return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee2() {
      var res;
      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return Object(__WEBPACK_IMPORTED_MODULE_3__servers__["d" /* interList */])(options);

            case 2:
              res = _context2.sent;

              res.data.forEach(function (el) {
                el.address = JSON.parse(el.address);
                el.start_time = new Date(el.start_time * 1).toLocaleString();
              });
              if (options.page !== 1) {
                commit('interList', { list: [].concat(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray___default()(state.interList), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray___default()(res.data)) });
              } else {
                commit('interList', { list: res.data });
              }
              return _context2.abrupt('return', res);

            case 6:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, _this2);
    }))();
  },

  // 获取面试详情
  interdetail: function interdetail(_ref7, options) {
    var _this3 = this;

    var commit = _ref7.commit;
    return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee3() {
      var res;
      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return Object(__WEBPACK_IMPORTED_MODULE_3__servers__["e" /* interdetail */])(options);

            case 2:
              res = _context3.sent;

              if (res.code * 1 === 0 * 1) {
                res.data.start_time = new Date(res.data.start_time * 1).toLocaleString();
                commit('interdetail', res.data);
              }
              return _context3.abrupt('return', res);

            case 5:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, _this3);
    }))();
  },

  // 更新面试
  interupdate: function interupdate(_ref8, options) {
    var _this4 = this;

    var commit = _ref8.commit;
    return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee4() {
      var data;
      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return Object(__WEBPACK_IMPORTED_MODULE_3__servers__["f" /* interupdate */])(options);

            case 2:
              data = _context4.sent;

              console.log(data);

            case 4:
            case 'end':
              return _context4.stop();
          }
        }
      }, _callee4, _this4);
    }))();
  },

  // 解密手机号
  ectPhone: function ectPhone(_ref9, options) {
    var _this5 = this;

    var commit = _ref9.commit;
    return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee5() {
      var res;
      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return Object(__WEBPACK_IMPORTED_MODULE_3__servers__["c" /* ecryptpPhone */])(options);

            case 2:
              res = _context5.sent;

              commit('ectPhone', res.data);

            case 4:
            case 'end':
              return _context5.stop();
          }
        }
      }, _callee5, _this5);
    }))();
  }
};

// 同步改变，改变数据的唯一途径。
var mutations = {
  updateLocation: function updateLocation(state, payload) {
    state.longitude = payload.longitude;
    state.latitude = payload.latitude;
  },
  getaddressList: function getaddressList(state, payload) {
    state.list = payload;
  },
  mapItem: function mapItem(state, payload) {
    state.obj = payload;
  },
  interList: function interList(state, payload) {
    state.interList = payload.list;
  },
  interdetail: function interdetail(state, payload) {
    payload.address = JSON.parse(payload.address);
    state.detailData = payload;
  },
  ectPhone: function ectPhone(state, payload) {
    var formatPhone = payload.phoneNumber.replace(/[^0-9]/ig, '').substr(0, 3) + '****' + payload.phoneNumber.replace(/[^0-9]/ig, '').substr(7);
    wx.setStorageSync('ectPhone', formatPhone);
    // console.log(formatPhone, '.................................')
    state.formatPhone = formatPhone;
  }
};
/* harmony default export */ __webpack_exports__["a"] = ({
  namespaced: true,
  state: state,
  getters: getters,
  actions: actions,
  mutations: mutations
});

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__request__ = __webpack_require__(95);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__request__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__request__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__request__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_0__request__["d"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_0__request__["e"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_0__request__["f"]; });
/* eslint-disable */


/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Longins;
/* harmony export (immutable) */ __webpack_exports__["b"] = addinter;
/* harmony export (immutable) */ __webpack_exports__["d"] = interList;
/* harmony export (immutable) */ __webpack_exports__["e"] = interdetail;
/* harmony export (immutable) */ __webpack_exports__["f"] = interupdate;
/* harmony export (immutable) */ __webpack_exports__["c"] = ecryptpPhone;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_request__ = __webpack_require__(96);

// 登录接口
function Longins(options) {
  return __WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* default */].request('user/code2session', {
    code: options.code
  }, {
    method: 'POST'
  });
}

function addinter(options) {
  console.log(options);
  return __WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* default */].request('/sign', options, {
    method: 'POST'
  });
}
// 获取面试列表
function interList(options) {
  return __WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* default */].request('/sign', options, {
    method: 'GET'
  });
}
// 获取面试详情
function interdetail(options) {
  return __WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* default */].request('/sign/' + options, options, {
    method: 'GET'
  });
}

// 更新面试
function interupdate(options) {
  return __WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* default */].request('/sign/' + options.title, { remind: options.remind, status: options.status }, {
    method: 'PUT'
  });
}

// 解密手机号
function ecryptpPhone(options) {
  return __WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* default */].request('/user/decrypt', options, {
    method: 'POST'
  });
}

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_flyio_dist_npm_wx__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_flyio_dist_npm_wx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_flyio_dist_npm_wx__);
/* eslint-disable */


var fly = new __WEBPACK_IMPORTED_MODULE_0_flyio_dist_npm_wx___default.a();

//设置超时
fly.config.timeout = 10000;
//设置请求基地址
fly.config.baseURL = 'https://sign.jasonandjay.com/';
// fly.config.baseURL = "http://123.206.55.50:7001/"
// fly.config.baseURL = "http://169.254.12.68:7001/"
// fly.config.baseURL = 'http://127.0.0.1:7001/'

var HOST = 'https://127.0.0.1'; // 更改
//添加请求拦截器
fly.interceptors.request.use(function (request) {
  // 把openid放在请求头部
  var openid = wx.getStorageSync('openid');
  console.log(openid);
  if (openid) {
    request.headers['openid'] = openid;
  }
  //给所有请求添加自定义header
  // request.headers["Cookie"] = map(cookies, (v, k) => k + '=' + v).join(';')
  //打印出请求体
  // console.log(request.body)
  //终止请求
  //var err=new Error("xxx")
  //err.request=request
  //return Promise.reject(new Error(""))

  //可以显式返回request, 也可以不返回，没有返回值时拦截器中默认返回request
  return request;
});

//添加响应拦截器，响应拦截器会在then/catch处理之前执行
fly.interceptors.response.use(function (response) {
  if (response.request.url.indexOf(HOST) == 0) {
    var hcks = response.headers['set-cookie'] || response.headers['Set-Cookie'];
    if (hcks != null) {
      hcks.forEach(function (v) {
        var ck = v.split(';')[0].split('=');
        cookies[ck[0]] = ck[1];
      });
    }
  }
  //只将请求结果的data字段返回
  return response.data;
}, function (err) {
  //发生网络错误后会走到这里
  //return Promise.resolve("ssss")
});

/* harmony default export */ __webpack_exports__["a"] = (fly);

/***/ })

},[49]);