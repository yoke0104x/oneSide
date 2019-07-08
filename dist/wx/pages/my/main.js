require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([4],{

/***/ 146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(147);



// add this to handle exception
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.errorHandler = function (err) {
  if (console && console.error) {
    console.error(err);
  }
};

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_681c8edd_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(150);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(148)
}
var normalizeComponent = __webpack_require__(4)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_681c8edd_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\my\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-681c8edd", Component.options)
  } else {
    hotAPI.reload("data-v-681c8edd", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 148:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(5);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({
  computed: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["c" /* mapState */])({
    formatPhonearr: function formatPhonearr(state) {
      return state.index.formatPhone;
    }
  })),
  data: function data() {
    return {
      img: 'https://img-blog.csdnimg.cn/20190703093730222.png',
      formatPhone: ''
    };
  },
  onShow: function onShow() {
    var value = wx.getStorageSync('ectPhone');
    var img = wx.getStorageSync('img');
    console.log(value, img);
    if (value) {
      this.formatPhone = value;
      this.img = img;
    }
  },

  methods: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({
    getPhoneNumber: function getPhoneNumber(e) {
      console.log(e);
      var that = this;
      if (e.target.iv) {
        this.ectPhone({
          iv: e.target.iv,
          encryptedData: e.target.encryptedData
        });
        wx.showToast({
          title: '绑定手机号成功',
          icon: 'success',
          duration: 2000
        });
        wx.getStorage({
          key: 'img',
          success: function success(res) {
            console.log(res.data);
            that.img = res.data;
          }
        });
      }
    },
    goSignList: function goSignList() {
      wx.navigateTo({ url: '/pages/interList/main' });
    }
  }, Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["b" /* mapActions */])('index', ['ectPhone']))
});

/***/ }),

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "wrap"
  }, [_c('header', [_c('div', {
    staticClass: "avatar"
  }, [_c('image', {
    attrs: {
      "src": _vm.img,
      "lazy-load": "false"
    }
  })]), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.formatPhonearr || _vm.formatPhone))])], 1), _vm._v(" "), (_vm.formatPhonearr || _vm.formatPhone) ? _c('ul', [_c('li', {
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": _vm.goSignList
    }
  }, [_c('icon', {
    attrs: {
      "type": "waiting",
      "size": "18px"
    }
  }), _vm._v(" "), _c('span', [_vm._v("\n        我的面试\n      ")]), _vm._v(" "), _c('image', {
    attrs: {
      "src": "https://img-blog.csdnimg.cn/20190703142339376.png"
    }
  })], 1), _vm._v(" "), _c('button', {
    staticClass: "concat",
    attrs: {
      "open-type": "contact"
    }
  }, [_c('icon', {
    attrs: {
      "type": "info",
      "size": "18px"
    }
  }), _vm._v(" "), _c('span', [_vm._v("客服中心")]), _vm._v(" "), _c('image', {
    attrs: {
      "src": "https://img-blog.csdnimg.cn/20190703142339376.png"
    }
  })], 1)], 1) : _c('button', {
    attrs: {
      "open-type": "getPhoneNumber",
      "eventid": '1'
    },
    on: {
      "getphonenumber": _vm.getPhoneNumber
    }
  }, [_vm._v("获取手机号")])], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-681c8edd", esExports)
  }
}

/***/ })

},[146]);