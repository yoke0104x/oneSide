require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([5],{

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(140);



// add this to handle exception
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.errorHandler = function (err) {
  if (console && console.error) {
    console.error(err);
  }
};
var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_4cacf4f4_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(145);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(141)
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_4cacf4f4_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\interview\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4cacf4f4", Component.options)
  } else {
    hotAPI.reload("data-v-4cacf4f4", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 141:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vuex__ = __webpack_require__(5);


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
  name: '.box',
  data: function data() {
    return {
      time: '10:11',
      input1: '',
      input2: '',
      text: '',
      address: '请输入面试地址',
      timeall: ''
    };
  },

  computed: __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_2_vuex__["c" /* mapState */])({
    objList: function objList(state) {
      return state.index.obj;
    }
  })),
  onShow: function onShow() {
    if (this.objList.address) {
      this.address = this.objList.address;
    }
  },

  methods: __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default()({
    bindTimeChange: function bindTimeChange(e) {
      var value = e.mp.detail.value;

      this.time = value;
    },
    urladdress: function urladdress() {
      wx.navigateTo({ url: '/pages/address/main' });
    },
    submit: function submit(e) {
      // console.log(e)
      this.timeall = '' + new Date('2019-7-6 ' + this.time) * 1;
      var input1 = this.input1,
          input2 = this.input2,
          objList = this.objList,
          timeall = this.timeall,
          text = this.text;

      if (input1 && input2.length === 11 && timeall) {
        var _objList$location = this.objList.location,
            lat = _objList$location.lat,
            lng = _objList$location.lng;

        this.addInterview({
          company: input1,
          phone: input2,
          form_id: e.target.formId,
          address: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(objList),
          latitude: lat,
          longitude: lng,
          start_time: timeall * 1,
          description: text
        });
        this.input1 = '';
        this.input2 = '';
        this.text = '';
      } else {
        wx.showModal({
          title: '爸爸您传的参数不完整哦 ?ω?',
          content: '请认真填写详细信息呢 ∩ω∩!',
          showCancel: false,
          success: function success(res) {
            if (res.confirm) {
              console.log('确定');
            }
          }
        });
      }
      console.log(this);
    }
  }, Object(__WEBPACK_IMPORTED_MODULE_2_vuex__["b" /* mapActions */])('index', ['addInterview']))
});

/***/ }),

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "box"
  }, [_c('form', {
    attrs: {
      "report-submit": "",
      "eventid": '5'
    },
    on: {
      "submit": _vm.submit
    }
  }, [_c('h1', [_vm._v("面试信息")]), _vm._v(" "), _c('div', {
    staticClass: "nav"
  }, [_c('div', {
    staticClass: "list"
  }, [_c('div', [_vm._v("公司名称")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.input1),
      expression: "input1"
    }],
    attrs: {
      "title": "公司名称",
      "type": "text",
      "placeholder": "请输入公司名称",
      "eventid": '0'
    },
    domProps: {
      "value": (_vm.input1)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.input1 = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "list"
  }, [_c('div', [_vm._v("公司电话")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.input2),
      expression: "input2"
    }],
    attrs: {
      "type": "text",
      "placeholder": "请输入面试联系人电话",
      "eventid": '1'
    },
    domProps: {
      "value": (_vm.input2)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.input2 = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "picker list"
  }, [_c('div', [_vm._v("面试时间")]), _vm._v(" "), _c('picker', {
    attrs: {
      "mode": "time",
      "value": "time",
      "start": "09:01",
      "end": "21:01",
      "eventid": '2'
    },
    on: {
      "change": _vm.bindTimeChange
    }
  }, [_c('view', {
    staticClass: "picker"
  }, [_vm._v("\n            2019-7-6 " + _vm._s(_vm.time) + "\n          ")])])], 1), _vm._v(" "), _c('div', {
    staticClass: "list picker"
  }, [_c('div', [_vm._v("面试地址")]), _vm._v(" "), _c('span', {
    attrs: {
      "eventid": '3'
    },
    on: {
      "click": _vm.urladdress
    }
  }, [_vm._v(_vm._s(_vm.address))])])]), _vm._v(" "), _c('h1', [_vm._v("备注信息")]), _vm._v(" "), _c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.text),
      expression: "text"
    }],
    staticClass: "textarea",
    attrs: {
      "cols": "0",
      "rows": "5",
      "placeholder": "备注信息(可选，100个字以内)",
      "eventid": '4'
    },
    domProps: {
      "value": (_vm.text)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.text = $event.target.value
      }
    }
  }), _vm._v(" "), _c('button', {
    staticClass: "button",
    attrs: {
      "form-type": "submit"
    }
  }, [_vm._v("确认")])], 1)], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-4cacf4f4", esExports)
  }
}

/***/ })

},[139]);