require("../../../common/manifest.js")
require("../../../common/vendor.js")
global.webpackJsonpMpvue([7],{

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(130);



// add this to handle exception
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.errorHandler = function (err) {
  if (console && console.error) {
    console.error(err);
  }
};

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_bb17c2d2_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(133);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(131)
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_bb17c2d2_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\interList\\detail\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-bb17c2d2", Component.options)
  } else {
    hotAPI.reload("data-v-bb17c2d2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 131:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 132:
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
//
//
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      title: true
    };
  },

  computed: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["c" /* mapState */])({
    detailData: function detailData(state) {
      return state.index.detailData;
    }
  })),
  methods: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({
    cancelRemind: function cancelRemind() {
      this.interupdate({ title: this.detailData.id, remind: this.detailData.remind === -1 ? 1 : -1 });
      this.interdetail(this.detailData.id);
    },
    giveup: function giveup() {
      var that = this;
      wx.showModal({
        title: '你确定要放弃面试吗？',
        content: '放弃面试',
        success: function success(res) {
          if (res.confirm) {
            that.interupdate({ title: that.detailData.id, status: 1 });
            that.interdetail(that.detailData.id);
          } else if (res.cancel) {
            console.log('用户点击取消');
          }
        }
      });
    },
    goSign: function goSign() {
      wx.navigateTo({ url: '/pages/punch/main' });
    }
  }, Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["b" /* mapActions */])('index', ['interupdate', 'interdetail'])),
  created: function created() {
    console.log(this);
  }
});

/***/ }),

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "wrap"
  }, [_c('ul', [_c('li', [_c('label', {
    attrs: {
      "for": ""
    }
  }, [_vm._v("面试地址：")]), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.detailData.address.address))])], 1), _vm._v(" "), _c('li', [_c('label', {
    attrs: {
      "for": ""
    }
  }, [_vm._v("面试时间：")]), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.detailData.start_time))])], 1), _vm._v(" "), _c('li', [_c('label', {
    attrs: {
      "for": ""
    }
  }, [_vm._v("联系方式：")]), _vm._v(" "), _c('span', {
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": _vm.makePhone
    }
  }, [_vm._v(_vm._s(_vm.detailData.phone))])], 1), _vm._v(" "), _c('li', [_c('label', {
    attrs: {
      "for": ""
    }
  }, [_vm._v("是否提醒：")]), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.detailData.remind ? '未提醒' : '已提醒'))])], 1), _vm._v(" "), _c('li', [_c('label', {
    attrs: {
      "for": ""
    }
  }, [_vm._v("面试状态：")]), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.detailData.status == -1 ? '未开始' : _vm.detailData.status == 0 ? '已打卡' : '已放弃'))])], 1), _vm._v(" "), (_vm.detailData.status == -1) ? _c('li', [_c('label', {
    attrs: {
      "for": ""
    }
  }, [_vm._v("取消提醒：")]), _vm._v(" "), _c('switch', {
    attrs: {
      "checked": _vm.detailData.remind === 1,
      "eventid": '1'
    },
    on: {
      "change": _vm.cancelRemind
    }
  })], 1) : _vm._e()], 1), _vm._v(" "), (_vm.detailData.status == -1 && _vm.title) ? _c('section', {
    staticClass: "action"
  }, [_c('button', {
    attrs: {
      "eventid": '2'
    },
    on: {
      "click": _vm.goSign
    }
  }, [_vm._v("去打卡")]), _vm._v(" "), _c('button', {
    attrs: {
      "eventid": '3'
    },
    on: {
      "click": _vm.giveup
    }
  }, [_vm._v("放弃面试")])], 1) : _vm._e()], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-bb17c2d2", esExports)
  }
}

/***/ })

},[129]);