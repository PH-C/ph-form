(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["ph-form"] = factory();
	else
		root["ph-form"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "6473":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_2036a70f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("b0e0");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_2036a70f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_2036a70f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "8875":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
// MIT license
// source: https://github.com/amiller-gh/currentScript-polyfill

// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(typeof self !== 'undefined' ? self : this, function () {
  function getCurrentScript () {
    var descriptor = Object.getOwnPropertyDescriptor(document, 'currentScript')
    // for chrome
    if (!descriptor && 'currentScript' in document && document.currentScript) {
      return document.currentScript
    }

    // for other browsers with native support for currentScript
    if (descriptor && descriptor.get !== getCurrentScript && document.currentScript) {
      return document.currentScript
    }
  
    // IE 8-10 support script readyState
    // IE 11+ & Firefox support stack trace
    try {
      throw new Error();
    }
    catch (err) {
      // Find the second match for the "at" string to get file src url from stack.
      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
        scriptLocation = (stackDetails && stackDetails[1]) || false,
        line = (stackDetails && stackDetails[2]) || false,
        currentLocation = document.location.href.replace(document.location.hash, ''),
        pageSource,
        inlineScriptSourceRegExp,
        inlineScriptSource,
        scripts = document.getElementsByTagName('script'); // Live NodeList collection
  
      if (scriptLocation === currentLocation) {
        pageSource = document.documentElement.outerHTML;
        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
      }
  
      for (var i = 0; i < scripts.length; i++) {
        // If ready state is interactive, return the script tag
        if (scripts[i].readyState === 'interactive') {
          return scripts[i];
        }
  
        // If src matches, return the script tag
        if (scripts[i].src === scriptLocation) {
          return scripts[i];
        }
  
        // If inline source matches, return the script tag
        if (
          scriptLocation === currentLocation &&
          scripts[i].innerHTML &&
          scripts[i].innerHTML.trim() === inlineScriptSource
        ) {
          return scripts[i];
        }
      }
  
      // If no match, return null
      return null;
    }
  };

  return getCurrentScript
}));


/***/ }),

/***/ "b0e0":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (true) {
    var getCurrentScript = __webpack_require__("8875")
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"ebc3b49a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/Form/src/index.vue?vue&type=template&id=2036a70f&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"forms"},[_c('el-form',{ref:_vm.formObj.ref,attrs:{"model":_vm.formObj.data,"label-width":_vm.formObj.labelWidth,"rules":_vm.formObj.rules,"inline":_vm.formObj.inline,"label-position":_vm.formObj.labelPosition || 'left'}},_vm._l((_vm.formObj.formItemArr),function(formItem,index){return _c('el-row',{key:index},[(Array.isArray(formItem))?_vm._l((formItem),function(fItem,fIdx){return _c('el-col',{key:fIdx,attrs:{"span":fItem.span}},[(fItem.type === 'slot')?[_vm._t(fItem.name)]:_c('el-form-item',{attrs:{"prop":fItem.prop,"label":fItem.label,"label-width":fItem.labelWidth || _vm.formObj.labelWidth}},[(fItem.type === 'group')?[_c('div',{staticClass:"group-cnt"},[_c('i',{class:fItem.icon}),_c('span',[_vm._v(_vm._s(fItem.text))])])]:(fItem.type === 'el-input' && fItem.vaiNumber)?[_c('el-input',{attrs:{"placeholder":fItem.placeholder,"disabled":fItem.disabled || false,"maxlength":fItem.maxlength,"show-word-limit":""},model:{value:(_vm.formObj['data'][fItem.prop]),callback:function ($$v) {_vm.$set(_vm.formObj['data'], fItem.prop, _vm._n($$v))},expression:"formObj['data'][fItem.prop]"}})]:(fItem.type === 'el-input')?[_c('el-input',{attrs:{"placeholder":fItem.placeholder,"disabled":fItem.disabled || false,"maxlength":fItem.maxlength,"show-word-limit":""},nativeOn:{"keyup":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }return _vm.handleEvent(fItem.event, fItem)}},model:{value:(_vm.formObj['data'][fItem.prop]),callback:function ($$v) {_vm.$set(_vm.formObj['data'], fItem.prop, $$v)},expression:"formObj['data'][fItem.prop]"}},[(fItem.unit)?_c('template',{slot:"append"},[_vm._v(" "+_vm._s(fItem.unit)+" ")]):(fItem.unitBtn)?_c('template',{slot:"append"},[_c('el-button',{attrs:{"type":"primary"},on:{"click":function () { return _vm.handleEvent(fItem.unitBtnEvent, fItem); }}},[_vm._v(" "+_vm._s(fItem.unitBtn)+" ")])],1):_vm._e()],2)]:(fItem.type === 'el-input-number')?[_c('el-input-number',{attrs:{"controls-position":"right","precision":fItem.precision || 0,"placeholder":fItem.placeholder,"disabled":fItem.disabled || false,"min":fItem.min || 0,"max":fItem.max || Infinity},model:{value:(_vm.formObj['data'][fItem.prop]),callback:function ($$v) {_vm.$set(_vm.formObj['data'], fItem.prop, $$v)},expression:"formObj['data'][fItem.prop]"}},[(fItem.unit)?_c('template',{slot:"append"},[_vm._v(" "+_vm._s(fItem.unit)+" ")]):_vm._e()],2)]:(fItem.type === 'el-checkbox')?[_c('el-checkbox-group',{attrs:{"disabled":fItem.disabled || false},model:{value:(_vm.formObj['data'][fItem.prop]),callback:function ($$v) {_vm.$set(_vm.formObj['data'], fItem.prop, $$v)},expression:"formObj['data'][fItem.prop]"}},_vm._l((fItem.datas),function(cItem,cIdx){return _c('el-checkbox',{key:cIdx,attrs:{"label":cItem.label,"name":"type"}})}),1)]:(fItem.type === 'el-radio')?[_c('el-radio-group',{attrs:{"disabled":fItem.disabled || false},on:{"change":function (val) { return _vm.handleEvent(fItem.event, val); }},model:{value:(_vm.formObj['data'][fItem.prop]),callback:function ($$v) {_vm.$set(_vm.formObj['data'], fItem.prop, $$v)},expression:"formObj['data'][fItem.prop]"}},_vm._l((fItem.datas),function(rItem,rIdx){return _c('el-radio',{key:rIdx,attrs:{"label":rItem.label}})}),1)]:(fItem.type === 'el-select')?[_c('el-select',{attrs:{"multiple":fItem.multiple,"placeholder":fItem.placeholder,"disabled":fItem.disabled || false},on:{"change":function (val) { return _vm.handleEvent(fItem.event || fItem.prop, val); }},model:{value:(_vm.formObj['data'][fItem.prop]),callback:function ($$v) {_vm.$set(_vm.formObj['data'], fItem.prop, $$v)},expression:"formObj['data'][fItem.prop]"}},_vm._l((fItem.options),function(oItem,idx){return _c('el-option',{key:idx,attrs:{"label":oItem.label,"value":oItem.value}})}),1)]:(fItem.type === 'el-cascader')?[_c('el-cascader',{attrs:{"options":fItem.options,"props":fItem.props,"show-all-levels":fItem.showAllLevels,"clearable":"","filterable":"","placeholder":fItem.placeholder},on:{"change":function (val) { return _vm.handleEvent(fItem.event || fItem.prop, val); }},model:{value:(_vm.formObj['data'][fItem.prop]),callback:function ($$v) {_vm.$set(_vm.formObj['data'], fItem.prop, $$v)},expression:"formObj['data'][fItem.prop]"}})]:(fItem.type === 'el-textarea')?[_c('el-input',{attrs:{"type":"textarea","rows":fItem.rows || 3,"disabled":fItem.disabled || false,"maxlength":fItem.maxlength,"show-word-limit":""},model:{value:(_vm.formObj['data'][fItem.prop]),callback:function ($$v) {_vm.$set(_vm.formObj['data'], fItem.prop, $$v)},expression:"formObj['data'][fItem.prop]"}})]:(fItem.type === 'el-switch')?[_c('el-switch',{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949","disabled":fItem.disabled || false},model:{value:(_vm.formObj['data'][fItem.prop]),callback:function ($$v) {_vm.$set(_vm.formObj['data'], fItem.prop, $$v)},expression:"formObj['data'][fItem.prop]"}})]:(fItem.type === 'el-date-picker')?[_c('el-date-picker',{staticStyle:{"width":"100%"},attrs:{"placeholder":fItem.placeholder,"start-placeholder":"开始日期","end-placeholder":"结束日期","type":fItem.selectType,"value-format":fItem.valformat ? fItem.valformat : 'yyyy-MM-dd',"default-time":fItem.defaultTime || ['00:00:00', '23:59:59'],"disabled":fItem.disabled || false},on:{"change":function (val) { return _vm.handleEvent(fItem.event || fItem.prop, val); }},model:{value:(_vm.formObj['data'][fItem.prop]),callback:function ($$v) {_vm.$set(_vm.formObj['data'], fItem.prop, $$v)},expression:"formObj['data'][fItem.prop]"}})]:(fItem.type === 'el-time-picker')?[_c('el-time-picker',{attrs:{"is-range":fItem.isRange,"placeholder":fItem.placeholder,"picker-options":fItem.pickerOptions,"value-format":fItem.valformat ? fItem.valformat : 'HH:mm:ss',"disabled":fItem.disabled || false},model:{value:(_vm.formObj['data'][fItem.prop]),callback:function ($$v) {_vm.$set(_vm.formObj['data'], fItem.prop, $$v)},expression:"formObj['data'][fItem.prop]"}})]:(fItem.type === 'el-upload-pic')?[_c('el-upload',{class:{
                  hide:
                    formItem.limit <= 1 &&
                    _vm.formObj['data'][formItem.prop].length >= 1,
                },attrs:{"file-list":Array.from(_vm.formObj['data'][fItem.prop] || []),"disabled":fItem.disabled,"action":fItem.action || _vm.$FILE_UPLOAD_API,"list-type":"picture-card","limit":fItem.limit || 3,"multiple":fItem.multiple || true,"accept":fItem.accept || 'image/*',"on-preview":function (file) { return _vm.handlePictureCardPreview(file, index); },"on-remove":function (file) { return _vm.handleRemove(fItem, file, index); },"on-change":function (file, fileList) { return _vm.onChangeFile(formItem, file, fileList); },"on-exceed":_vm.$message.error.bind(this, '文件超出上传长度')},scopedSlots:_vm._u([{key:"file",fn:function(ref){
                var file = ref.file;
return _c('div',{},[(fItem.accept && fItem.accept.indexOf('video') > -1)?_c('video',{staticClass:"el-upload-list__item-thumbnail",attrs:{"src":file.url,"controls":"controls"}},[_vm._v(" 您的浏览器不支持视频播放 ")]):(
                      fItem.accept && fItem.accept.indexOf('image') > -1
                    )?_c('img',{staticClass:"el-upload-list__item-thumbnail",attrs:{"src":file.url,"alt":""}}):_c('img',{staticClass:"el-upload-list__item-thumbnail",attrs:{"src":file.url,"alt":""}}),_c('span',{staticClass:"el-upload-list__item-actions"},[(
                        fItem.accept && fItem.accept.indexOf('video') > -1
                      )?_c('span',{staticClass:"el-upload-list__item-preview",on:{"click":function($event){return _vm.handleVideoCardPreview(file, index)}}},[_c('i',{staticClass:"el-icon-zoom-in"})]):_c('span',{staticClass:"el-upload-list__item-preview",on:{"click":function($event){return _vm.handlePictureCardPreview(file, index)}}},[_c('i',{staticClass:"el-icon-zoom-in"})]),(!_vm.disabled)?_c('span',{staticClass:"el-upload-list__item-delete",on:{"click":function($event){return _vm.handleDownload(file)}}},[_c('i',{staticClass:"el-icon-download"})]):_vm._e(),(!_vm.disabled)?_c('span',{staticClass:"el-upload-list__item-delete",on:{"click":function($event){return _vm.handleRemove(fItem, file, index)}}},[_c('i',{staticClass:"el-icon-delete"})]):_vm._e()])])}}],null,true)},[_c('i',{staticClass:"el-icon-plus",attrs:{"slot":"default"},slot:"default"})])]:(fItem.type === 'el-upload-file')?[_c('el-upload',{attrs:{"action":fItem.action || _vm.$FILE_UPLOAD_API,"disabled":fItem.disabled,"on-remove":function (file) { return _vm.handleRemove(fItem, file, index); },"multiple":"","limit":fItem.limit || 5,"accept":fItem.accept || 'image/*',"file-list":Array.from(_vm.formObj[fItem.prop] || []),"on-change":function (file, fileList) { return _vm.onChangeFile(formItem, file, fileList); }}},[_c('el-button',{attrs:{"size":"small","type":"primary"}},[_vm._v(" 点击上传 ")])],1)]:(fItem.type === 'el-button')?[_vm._l((fItem.btns),function(btn,btnIdx){return [(btn.event === 'submit')?_c('el-button',{key:btnIdx,attrs:{"icon":btn.icon,"type":btn.type},on:{"click":function () { return _vm.submitForm(_vm.formObj.ref, btn.event); }}},[_vm._v(" "+_vm._s(btn.name)+" ")]):(btn.event === 'reset')?_c('el-button',{key:btnIdx,attrs:{"icon":btn.icon},on:{"click":function($event){return _vm.resetForm(_vm.formObj.ref, btn.event)}}},[_vm._v(" "+_vm._s(btn.name)+" ")]):_c('el-button',{key:btnIdx,attrs:{"icon":btn.icon,"type":btn.type},on:{"click":function () { return _vm.handleEvent(btn.event); }}},[_vm._v(" "+_vm._s(btn.name)+" ")])]})]:(fItem.type === 'el-radio-btn-group')?[_c('el-radio-group',{on:{"change":function (val) { return _vm.handleEvent(fItem.event, val); }},model:{value:(_vm.formObj['data'][fItem.prop]),callback:function ($$v) {_vm.$set(_vm.formObj['data'], fItem.prop, $$v)},expression:"formObj['data'][fItem.prop]"}},_vm._l((fItem.options),function(itema,indexs){return _c('el-radio-button',{key:indexs,attrs:{"label":itema.label}},[_vm._v(" "+_vm._s(itema.value)+" ")])}),1)]:(fItem.type === 'el-radio-spaceBtn-group')?[_c('div',{staticClass:"asd"},[_c('el-radio-group',{on:{"change":function (val) { return _vm.handleEvent(fItem.event || fItem.prop, val); }},model:{value:(_vm.formObj['data'][fItem.prop]),callback:function ($$v) {_vm.$set(_vm.formObj['data'], fItem.prop, $$v)},expression:"formObj['data'][fItem.prop]"}},_vm._l((fItem.options),function(itema,indexs){return _c('el-radio-button',{key:indexs,staticClass:"bot",attrs:{"label":itema.label}},[_vm._v(" "+_vm._s(itema.value)+" ")])}),1)],1)]:(fItem.type === 'el-date-check')?[_c('el-checkbox',{attrs:{"type":"checkbox"},on:{"click":function($event){_vm.formObj['data'][fItem.prop] = !_vm.formObj['data'][fItem.prop]},"change":function($event){return _vm.disabledShow(_vm.formObj['data'][fItem.prop])}},model:{value:(_vm.formObj['data'][fItem.prop]),callback:function ($$v) {_vm.$set(_vm.formObj['data'], fItem.prop, $$v)},expression:"formObj['data'][fItem.prop]"}}),_vm._v(" 漏斗查询 ")]:(fItem.type === 'el-date-introductPicker')?[_c('el-date-picker',{attrs:{"disabled":_vm.disabledTemp,"type":fItem.selectType,"placeholder":"选择日期","picker-options":fItem.pickerOptions,"value-format":fItem.valformat ? fItem.valformat : 'yyyy-MM-dd'},model:{value:(_vm.formObj['data'][fItem.prop]),callback:function ($$v) {_vm.$set(_vm.formObj['data'], fItem.prop, $$v)},expression:"formObj['data'][fItem.prop]"}})]:void 0],2)],2)}):[_c('el-col',{attrs:{"span":formItem.span}},[(formItem.type === 'slot')?[_vm._t(formItem.name)]:_c('el-form-item',{attrs:{"prop":formItem.prop,"label":formItem.label,"label-width":formItem.labelWidth || _vm.formObj.labelWidth}},[(formItem.type === 'el-input' && formItem.vaiNumber)?[_c('el-input',{attrs:{"placeholder":formItem.placeholder,"disabled":formItem.disabled || false,"maxlength":formItem.maxlength,"show-word-limit":""},model:{value:(_vm.formObj['data'][formItem.prop]),callback:function ($$v) {_vm.$set(_vm.formObj['data'], formItem.prop, _vm._n($$v))},expression:"formObj['data'][formItem.prop]"}})]:(formItem.type === 'el-input')?[_c('el-input',{attrs:{"placeholder":formItem.placeholder,"disabled":formItem.disabled || false,"maxlength":formItem.maxlength,"show-word-limit":""},model:{value:(_vm.formObj['data'][formItem.prop]),callback:function ($$v) {_vm.$set(_vm.formObj['data'], formItem.prop, $$v)},expression:"formObj['data'][formItem.prop]"}},[(formItem.unit)?_c('template',{slot:"append"},[_vm._v(" "+_vm._s(formItem.unit)+" ")]):(formItem.unitBtn)?_c('template',{slot:"append"},[_c('el-button',{attrs:{"type":"primary"},on:{"click":function () { return _vm.handleEvent(formItem.unitBtnEvent, formItem); }}},[_vm._v(" "+_vm._s(formItem.unitBtn)+" ")])],1):_vm._e()],2)]:(formItem.type === 'el-password-input')?[_c('el-input',{attrs:{"placeholder":formItem.placeholder,"show-password":"","disabled":formItem.disabled || false,"maxlength":formItem.maxlength,"show-word-limit":""},model:{value:(_vm.formObj['data'][formItem.prop]),callback:function ($$v) {_vm.$set(_vm.formObj['data'], formItem.prop, $$v)},expression:"formObj['data'][formItem.prop]"}},[(formItem.unit)?_c('template',{slot:"append"},[_vm._v(" "+_vm._s(formItem.unit)+" ")]):_vm._e()],2)]:(formItem.type === 'el-input-number')?[_c('el-input-number',{attrs:{"controls-position":"right","precision":formItem.precision || 0,"placeholder":formItem.placeholder,"disabled":formItem.disabled || false,"min":formItem.min || 0,"max":formItem.max || Infinity},model:{value:(_vm.formObj['data'][formItem.prop]),callback:function ($$v) {_vm.$set(_vm.formObj['data'], formItem.prop, $$v)},expression:"formObj['data'][formItem.prop]"}},[(formItem.unit)?_c('template',{slot:"append"},[_vm._v(" "+_vm._s(formItem.unit)+" ")]):_vm._e()],2)]:(formItem.type === 'el-select')?[_c('el-select',{attrs:{"multiple":formItem.multiple,"placeholder":formItem.placeholder,"disabled":formItem.disabled || false},on:{"change":function (val) { return _vm.handleEvent(formItem.event || formItem.prop, val); }},model:{value:(_vm.formObj['data'][formItem.prop]),callback:function ($$v) {_vm.$set(_vm.formObj['data'], formItem.prop, $$v)},expression:"formObj['data'][formItem.prop]"}},_vm._l((formItem.options),function(oItem,idx){return _c('el-option',{key:idx,attrs:{"label":oItem.label,"value":oItem.value}})}),1)]:(formItem.type === 'el-cascader')?[_c('el-cascader',{attrs:{"options":formItem.options,"props":formItem.props,"show-all-levels":formItem.showAllLevels,"clearable":"","filterable":"","placeholder":formItem.placeholder},on:{"change":function (val) { return _vm.handleEvent(formItem.event || formItem.prop, val); }},model:{value:(_vm.formObj['data'][formItem.prop]),callback:function ($$v) {_vm.$set(_vm.formObj['data'], formItem.prop, $$v)},expression:"formObj['data'][formItem.prop]"}})]:(formItem.type === 'el-upload-pic')?[_c('el-upload',{class:{
                  hide:
                    formItem.limit === 6 &&
                    _vm.formObj['data'][formItem.prop].length === 6,
                },attrs:{"file-list":Array.from(_vm.formObj['data'][formItem.prop] || []),"disabled":formItem.disabled,"action":formItem.action || _vm.$FILE_UPLOAD_API,"list-type":"picture-card","limit":formItem.limit || 3,"multiple":formItem.multiple || true,"accept":formItem.accept || 'image/*',"on-preview":function (file) { return _vm.handlePictureCardPreview(file, index); },"on-remove":function (file) { return _vm.handleRemove(formItem, file, index); },"on-change":function (file, fileList) { return _vm.onChangeFile(formItem, file, fileList); },"on-exceed":_vm.$message.error.bind(this, '文件超出上传长度')},scopedSlots:_vm._u([{key:"file",fn:function(ref){
                var file = ref.file;
return _c('div',{},[(
                      formItem.accept && formItem.accept.indexOf('video') > -1
                    )?_c('video',{staticClass:"el-upload-list__item-thumbnail",attrs:{"src":file.url,"controls":"controls"}},[_vm._v(" 您的浏览器不支持视频播放 ")]):_c('img',{staticClass:"el-upload-list__item-thumbnail",attrs:{"src":file.url,"alt":""}}),_c('span',{staticClass:"el-upload-list__item-actions"},[(
                        formItem.accept &&
                        formItem.accept.indexOf('video') > -1
                      )?_c('span',{staticClass:"el-upload-list__item-preview",on:{"click":function($event){return _vm.handleVideoCardPreview(file, index)}}},[_c('i',{staticClass:"el-icon-zoom-in"})]):_c('span',{staticClass:"el-upload-list__item-preview",on:{"click":function($event){return _vm.handlePictureCardPreview(file, index)}}},[_c('i',{staticClass:"el-icon-zoom-in"})]),(!_vm.disabled)?_c('span',{staticClass:"el-upload-list__item-delete",on:{"click":function($event){return _vm.handleDownload(file)}}},[_c('i',{staticClass:"el-icon-download"})]):_vm._e(),(!_vm.disabled)?_c('span',{staticClass:"el-upload-list__item-delete",on:{"click":function($event){return _vm.handleRemove(formItem, file, index)}}},[_c('i',{staticClass:"el-icon-delete"})]):_vm._e()])])}}],null,true)},[_c('i',{staticClass:"el-icon-plus",attrs:{"slot":"default"},slot:"default"})])]:(formItem.type === 'el-upload-file')?[_c('el-upload',{attrs:{"action":formItem.action || _vm.$FILE_UPLOAD_API,"disabled":formItem.disabled,"on-remove":function (file) { return _vm.handleRemove(formItem, file, index); },"multiple":"","limit":formItem.limit || 5,"accept":formItem.accept || 'image/*',"file-list":Array.from(_vm.formObj[formItem.prop] || []),"on-change":function (file, fileList) { return _vm.onChangeFile(formItem, file, fileList); }}},[_c('el-button',{attrs:{"size":"small","type":"primary"}},[_vm._v(" 点击上传 ")])],1)]:(formItem.type === 'el-date-picker')?[_c('el-date-picker',{staticStyle:{"width":"100%"},attrs:{"placeholder":formItem.placeholder,"type":formItem.selectType,"start-placeholder":"开始日期","end-placeholder":"结束日期","value-format":formItem.valformat ? formItem.valformat : 'yyyy-MM-dd',"default-time":formItem.defaultTime || ['00:00:00', '23:59:59'],"disabled":formItem.disabled || false},model:{value:(_vm.formObj['data'][formItem.prop]),callback:function ($$v) {_vm.$set(_vm.formObj['data'], formItem.prop, $$v)},expression:"formObj['data'][formItem.prop]"}})]:(formItem.type === 'el-time-picker')?[_c('el-time-picker',{attrs:{"is-range":formItem.isRange,"placeholder":formItem.placeholder,"picker-options":formItem.pickerOptions,"value-format":formItem.valformat ? formItem.valformat : 'HH:mm:ss',"disabled":formItem.disabled || false},model:{value:(_vm.formObj['data'][formItem.prop]),callback:function ($$v) {_vm.$set(_vm.formObj['data'], formItem.prop, $$v)},expression:"formObj['data'][formItem.prop]"}})]:(formItem.type === 'el-switch')?[_c('el-switch',{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949","disabled":formItem.disabled || false},model:{value:(_vm.formObj['data'][formItem.prop]),callback:function ($$v) {_vm.$set(_vm.formObj['data'], formItem.prop, $$v)},expression:"formObj['data'][formItem.prop]"}})]:(formItem.type === 'el-checkbox')?[_c('el-checkbox-group',{attrs:{"disabled":formItem.disabled || false},model:{value:(_vm.formObj['data'][formItem.prop]),callback:function ($$v) {_vm.$set(_vm.formObj['data'], formItem.prop, $$v)},expression:"formObj['data'][formItem.prop]"}},_vm._l((formItem.datas),function(cItem,cIdx){return _c('el-checkbox',{key:cIdx,attrs:{"label":cItem.label,"name":"type"}})}),1)]:(formItem.type === 'el-radio')?[_c('el-radio-group',{attrs:{"disabled":formItem.disabled || false},on:{"change":function (val) { return _vm.handleEvent(formItem.event, val); }},model:{value:(_vm.formObj['data'][formItem.prop]),callback:function ($$v) {_vm.$set(_vm.formObj['data'], formItem.prop, $$v)},expression:"formObj['data'][formItem.prop]"}},_vm._l((formItem.datas),function(rItem,rIdx){return _c('el-radio',{key:rIdx,attrs:{"label":rItem.label}})}),1)]:(formItem.type === 'el-textarea')?[_c('el-input',{attrs:{"type":"textarea","rows":formItem.rows || 3,"disabled":formItem.disabled || false,"maxlength":formItem.maxlength,"placeholder":formItem.placeholder,"show-word-limit":""},model:{value:(_vm.formObj['data'][formItem.prop]),callback:function ($$v) {_vm.$set(_vm.formObj['data'], formItem.prop, $$v)},expression:"formObj['data'][formItem.prop]"}})]:(formItem.type === 'el-button')?[_vm._l((formItem.btns),function(btn,btnIdx){return [(btn.event === 'submit')?_c('el-button',{key:btnIdx,attrs:{"type":btn.type},on:{"click":function () { return _vm.submitForm(_vm.formObj.ref, btn.event); }}},[_vm._v(" "+_vm._s(btn.name)+" ")]):(btn.event === 'reset')?_c('el-button',{key:btnIdx,on:{"click":function($event){return _vm.resetForm(_vm.formObj.ref, btn.event)}}},[_vm._v(" "+_vm._s(btn.name)+" ")]):_c('el-button',{key:btnIdx,attrs:{"type":btn.type},on:{"click":function () { return _vm.handleEvent(btn.event); }}},[_vm._v(" "+_vm._s(btn.name)+" ")])]})]:void 0],2)],2)]],2)}),1),_c('el-dialog',{attrs:{"visible":_vm.dialogVisible,"close-on-click-modal":false,"append-to-body":""},on:{"update:visible":function($event){_vm.dialogVisible=$event}}},[_c('img',{attrs:{"width":"100%","src":_vm.dialogImageUrl,"alt":""}})]),_c('el-dialog',{attrs:{"visible":_vm.videoDialogVisible,"close-on-click-modal":false,"append-to-body":""},on:{"update:visible":function($event){_vm.videoDialogVisible=$event}}},[_c('video',{staticClass:"el-upload-list__item-thumbnail",attrs:{"width":"100%","src":_vm.dialogVideoUrl,"controls":"controls"}})])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./packages/Form/src/index.vue?vue&type=template&id=2036a70f&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/Form/src/index.vue?vue&type=script&lang=js&
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

/* harmony default export */ var srcvue_type_script_lang_js_ = ({
  name: "ph-form",
  props: {
    formObj: {
      default: () => {},
      required: true,
    },
  },
  data: () => {
    return {
      dialogImageUrl: "",
      dialogVideoUrl: "",
      dialogVisible: false,
      videoDialogVisible: false,
      disabled: false,
      hideUpload: false,
      show: false,
      disabledTemp: true,
    };
  },

  mounted() {
    console.log("mounted");
    this.formObj.rules = this.formRule(this.formObj.formItemArr)
  },
  methods: {
    formRule(formItemArr) {
      formItemArr = formItemArr.flat(Infinity); // 数组扁平化
      const rules = {};
      for (let i = 0; i < formItemArr.length; i++) {
        const item = formItemArr[i];
        if (item.type === "el-button" || !item.required) {
          continue;
        }
        if (item.rules && Array.isArray(item.rules)) {
          rules[item.prop] = item.rules;
        } else {
          rules[item.prop] = [];
        }
        if (
          item.type === "el-date-picker" &&
          item.selectType.indexOf("range") > -1
        ) {
          rules[item.prop].push({
            required: true,
            type: "array",
            len: 2,
            message: "请选择日期范围",
            trigger: "blur,change",
          });
        } else if (
          item.type === "el-radio" ||
          item.type === "el-checkbox" ||
          item.type === "el-switch" ||
          item.type === "el-date-picker" ||
          item.type === "el-select"
        ) {
          rules[item.prop].push({
            required: true,
            message: `请选择${item.label}`,
            trigger: "change",
          });
        } else {
          rules[item.prop].push({
            required: true,
            message: `请输入${item.label}`,
            trigger: "change",
          });
        }
      }
      console.log("rules", rules);
      return rules;
    },

    handleRemove(formItem, file) {
      const photos = this.formObj.data[formItem.prop];
      const fileList = photos.filter((item) => item.url !== file.url);
      this.$set(this.formObj.data, formItem.prop, fileList);
    },
    onChangeFile(formItem, file, fileList) {
      console.log("onChangeFile", file, fileList);
      const data = {
        file: file,
        fileList: fileList,
      };
      this.handleEvent(formItem.event, data);
    },

    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    handleVideoCardPreview(file) {
      this.dialogVideoUrl = file.url;
      this.videoDialogVisible = true;
    },
    // handleDownload(file) {
    //   api.download(file.url.split("=")[1]);
    // },
    handleEvent(event, data) {
      console.log("handleEvent", data);

      this.$emit(event, data);
    },
    disabledShow(val) {
      if (val == true) {
        this.disabledTemp = false;
      } else {
        this.disabledTemp = true;
      }
    },
    submitForm(formName, event) {
      this.$refs[formName].validate((valid) => {
        console.log("formName", event, valid);
        if (valid) {
          this.$emit(event, this.formObj.data);
        } else {
          // console.log('error submit!!')
          this.$message("提交失败，请检查您的所填项！");
          return false;
        }
      });
    },

    resetForm(formName, event) {
      this.$refs[formName].resetFields();
      this.$emit(event, formName);
    },

    changeHideUpload(fileList) {
      this.hideUpload = fileList.length >= 1;
    },
  },
});

// CONCATENATED MODULE: ./packages/Form/src/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var Form_srcvue_type_script_lang_js_ = (srcvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/Form/src/index.vue?vue&type=style&index=0&id=2036a70f&scoped=true&lang=css&
var srcvue_type_style_index_0_id_2036a70f_scoped_true_lang_css_ = __webpack_require__("6473");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./packages/Form/src/index.vue






/* normalize component */

var component = normalizeComponent(
  Form_srcvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "2036a70f",
  null
  
)

/* harmony default export */ var Form_src = (component.exports);
// CONCATENATED MODULE: ./packages/Form/index.js
// 导入组件，组件必须声明 name


// 为组件提供 install 安装方法，供按需引入
Form_src.install = function (Vue) {
  Vue.component(Form_src.name, Form_src)
}

// 导出组件
/* harmony default export */ var Form = (Form_src);
// CONCATENATED MODULE: ./packages/index.js


// 组件列表
const components = [
  Form
]

// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，那么所有的组件都会被注册
const install = function (Vue) {
  // 判断是否安装
  if (install.installed) return
  // 遍历注册全局组件
  components.map(component => Vue.component(component.name, component))
}

// 判断是否是直接引入文件
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

/* harmony default export */ var packages_0 = ({
  // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
  install,
  // 以下是具体的组件列表
  PHForm: Form
});

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (packages_0);



/***/ })

/******/ });
});
//# sourceMappingURL=ph-form.umd.js.map