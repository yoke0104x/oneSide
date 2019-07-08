require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([6],{

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(135);



// add this to handle exception
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.errorHandler = function (err) {
  if (console && console.error) {
    console.error(err);
  }
};

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_784f645f_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(138);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(136)
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_784f645f_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\interList\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-784f645f", Component.options)
  } else {
    hotAPI.reload("data-v-784f645f", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 136:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 137:
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


/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      list: [{ stateNmae: '未打卡', status: -1 }, { stateNmae: '已打卡', status: 0 }, { stateNmae: '已放弃', status: 1 }, { stateNmae: '全部', status: 3 }],
      ind: 0,
      status: -1,
      page: 1,
      index: 1,
      pageSize: 10,
      hasMore: false
    };
  },

  computed: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["c" /* mapState */])({
    interList: function interList(state) {
      return state.index.interList;
    }
  })),
  methods: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({
    tabs: function tabs(e, status) {
      this.ind = e;
      this.status = status;
      if (status * 1 === 3) {
        this.addInterList({
          page: this.page,
          pageSize: this.pageSize
        });
      } else {
        this.addInterList({
          status: this.status,
          page: this.page,
          pageSize: this.pageSize
        });
      }
    },
    goDetail: function goDetail(index) {
      console.log(index);
      this.interdetail(index);
      wx.navigateTo({ url: '/pages/interList/detail/main' });
    }
  }, Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["b" /* mapActions */])('index', ['addInterList', 'interdetail'])),
  onShow: function onShow() {
    this.addInterList({
      status: -1,
      page: 1,
      pageSize: 10
    });
  },
  onReachBottom: function onReachBottom() {
    var index = this.index;

    console.log(++index);
    if (this.interList.length <= index * this.pageSize) {
      if (this.status !== 3) {
        ++this.index;
        this.addInterList({
          status: this.status,
          page: index,
          pageSize: this.pageSize
        });
      } else {
        this.index = 1;
        console.log(this.index, '................');
        this.addInterList({
          page: ++this.index,
          pageSize: this.pageSize
        });
      }

      this.hasMore = true;
    } else {
      this.hasMore = false;
    }
    this.hasMore = false;
    if (!this.hasMore) {
      index = null;
    }
  }
});

/***/ }),

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "box"
  }, [_c('div', {
    staticClass: "tops"
  }, _vm._l((_vm.list), function(item, index) {
    return _c('p', {
      key: index,
      class: index === _vm.ind ? 'active' : null,
      attrs: {
        "eventid": '0_' + index
      },
      on: {
        "click": function($event) {
          _vm.tabs(index, item.status)
        }
      }
    }, [_vm._v(_vm._s(item.stateNmae))])
  })), _vm._v(" "), _c('div', [(_vm.interList.length) ? _c('ul', {
    staticClass: "alltops"
  }, _vm._l((_vm.interList), function(item, index) {
    return _c('li', {
      key: item.id,
      attrs: {
        "eventid": '1_' + index
      },
      on: {
        "click": function($event) {
          _vm.goDetail(item.id)
        }
      }
    }, [_c('p', [_c('span', [_vm._v(_vm._s(item.company))]), _vm._v(" "), _c('span', {
      class: 'tag' + (item.status + 2)
    }, [_vm._v(_vm._s(item.status ? item.status == 1 ? '已放弃' : '未开始' : '已打卡'))])]), _vm._v(" "), _c('p', [_vm._v(_vm._s(item.address.address))]), _vm._v(" "), _c('p', [_c('span', [_vm._v("面试时间: " + _vm._s(item.start_time))]), _vm._v(" "), _c('span', {
      class: 'tag' + (2 - item.status)
    }, [_vm._v(_vm._s(item.remind ? '未提醒' : '已提醒'))])])], 1)
  })) : _c('p', {
    staticClass: "none"
  }, [_vm._v("当前分类还没有面试!")])], 1), _vm._v(" "), (_vm.interList.length) ? _c('p', {
    staticClass: "more"
  }, [_vm._v(_vm._s(_vm.hasMore ? '上拉加载更多' : '我是有底线的'))]) : _vm._e()], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-784f645f", esExports)
  }
}

/***/ })

},[134]);