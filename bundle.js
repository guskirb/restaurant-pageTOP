/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../Resources/Callingstone.ttf */ "./Resources/Callingstone.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../Resources/Sedan.ttf */ "./Resources/Sedan.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
  font-family: "Callingstone";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  font-weight: 500;
  font-style: normal;
}

@font-face {
  font-family: "Sedan";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
  font-weight: 500;
  font-style: normal;
}

:root {
  --accent-color: #0c0100;
  --background-color: #fcf7ec;
}

body {
  margin: 0;
  box-sizing: border-box;
  min-height: 100vh;
  display: flex;
  background-size: cover;
  background-position: center;
  background-color: var(--background-color);
}

header {
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  align-items: center;
  font-family: "Sedan", sans-serif;
  color: var(--background-color);
  height: 100vh;
  min-width: 20vw;
  text-align: center;
  z-index: 1;
  background-color: var(--accent-color);
}

header > h1 {
  font-size: 2em;
  padding-top: 5vh;
  font-family: "Callingstone", sans-serif;
}

nav {
  display: flex;
  width: 12vw;
  flex-flow: column;
  gap: 3vw;
  align-items: center;
}

nav > button {
  width: 5vw;
  height: 5vh;
  border: none;
  background: none;
  color: var(--background-color);
  font-size: 1.2em;
  text-align: center;
  font-family: "Sedan", sans-serif;
  border: solid 1px var(--accent-color);
}

nav > button:hover {
  border-bottom: solid 1px var(--background-color);
}

.headerBottom {
  padding-bottom: 5vh;
  font-size: 1.1em;
}

.headerBottom > img {
  height: 35px;
}

#content {
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1.2vw;
  margin: 1.2vw;
  font-family: "Sedan", sans-serif;
  min-width: 77.8vw;
}

#content > img {
  width: 25vw;
  height: 95vh;
  object-fit: cover;
}

#content > div {
  text-align: center;
  border: solid 2px var(--accent-color);
  padding: 20px;
  color: var(--accent-color);
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  align-items: center;
}

#content h2 {
  font-size: 2em;
}

#content h3 {
  font-size: 1.3em;
}

#content p {
  font-size: 1em;
}

#content > div > div {
  text-align: center;
  border: solid 1px var(--accent-color);
  padding: 20px;
  color: var(--accent-color);
  list-style: none;
  width: 20vw;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,2BAA2B;EAC3B,4CAAqC;EACrC,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,oBAAoB;EACpB,4CAA8B;EAC9B,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,uBAAuB;EACvB,2BAA2B;AAC7B;;AAEA;EACE,SAAS;EACT,sBAAsB;EACtB,iBAAiB;EACjB,aAAa;EACb,sBAAsB;EACtB,2BAA2B;EAC3B,yCAAyC;AAC3C;;AAEA;EACE,aAAa;EACb,iBAAiB;EACjB,8BAA8B;EAC9B,mBAAmB;EACnB,gCAAgC;EAChC,8BAA8B;EAC9B,aAAa;EACb,eAAe;EACf,kBAAkB;EAClB,UAAU;EACV,qCAAqC;AACvC;;AAEA;EACE,cAAc;EACd,gBAAgB;EAChB,uCAAuC;AACzC;;AAEA;EACE,aAAa;EACb,WAAW;EACX,iBAAiB;EACjB,QAAQ;EACR,mBAAmB;AACrB;;AAEA;EACE,UAAU;EACV,WAAW;EACX,YAAY;EACZ,gBAAgB;EAChB,8BAA8B;EAC9B,gBAAgB;EAChB,kBAAkB;EAClB,gCAAgC;EAChC,qCAAqC;AACvC;;AAEA;EACE,gDAAgD;AAClD;;AAEA;EACE,mBAAmB;EACnB,gBAAgB;AAClB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,kCAAkC;EAClC,UAAU;EACV,aAAa;EACb,gCAAgC;EAChC,iBAAiB;AACnB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,iBAAiB;AACnB;;AAEA;EACE,kBAAkB;EAClB,qCAAqC;EACrC,aAAa;EACb,0BAA0B;EAC1B,aAAa;EACb,iBAAiB;EACjB,8BAA8B;EAC9B,mBAAmB;AACrB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,kBAAkB;EAClB,qCAAqC;EACrC,aAAa;EACb,0BAA0B;EAC1B,gBAAgB;EAChB,WAAW;AACb","sourcesContent":["@font-face {\n  font-family: \"Callingstone\";\n  src: url(/Resources/Callingstone.ttf);\n  font-weight: 500;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: \"Sedan\";\n  src: url(/Resources/Sedan.ttf);\n  font-weight: 500;\n  font-style: normal;\n}\n\n:root {\n  --accent-color: #0c0100;\n  --background-color: #fcf7ec;\n}\n\nbody {\n  margin: 0;\n  box-sizing: border-box;\n  min-height: 100vh;\n  display: flex;\n  background-size: cover;\n  background-position: center;\n  background-color: var(--background-color);\n}\n\nheader {\n  display: flex;\n  flex-flow: column;\n  justify-content: space-between;\n  align-items: center;\n  font-family: \"Sedan\", sans-serif;\n  color: var(--background-color);\n  height: 100vh;\n  min-width: 20vw;\n  text-align: center;\n  z-index: 1;\n  background-color: var(--accent-color);\n}\n\nheader > h1 {\n  font-size: 2em;\n  padding-top: 5vh;\n  font-family: \"Callingstone\", sans-serif;\n}\n\nnav {\n  display: flex;\n  width: 12vw;\n  flex-flow: column;\n  gap: 3vw;\n  align-items: center;\n}\n\nnav > button {\n  width: 5vw;\n  height: 5vh;\n  border: none;\n  background: none;\n  color: var(--background-color);\n  font-size: 1.2em;\n  text-align: center;\n  font-family: \"Sedan\", sans-serif;\n  border: solid 1px var(--accent-color);\n}\n\nnav > button:hover {\n  border-bottom: solid 1px var(--background-color);\n}\n\n.headerBottom {\n  padding-bottom: 5vh;\n  font-size: 1.1em;\n}\n\n.headerBottom > img {\n  height: 35px;\n}\n\n#content {\n  display: grid;\n  grid-template-rows: 1fr;\n  grid-template-columns: 1fr 1fr 1fr;\n  gap: 1.2vw;\n  margin: 1.2vw;\n  font-family: \"Sedan\", sans-serif;\n  min-width: 77.8vw;\n}\n\n#content > img {\n  width: 25vw;\n  height: 95vh;\n  object-fit: cover;\n}\n\n#content > div {\n  text-align: center;\n  border: solid 2px var(--accent-color);\n  padding: 20px;\n  color: var(--accent-color);\n  display: flex;\n  flex-flow: column;\n  justify-content: space-between;\n  align-items: center;\n}\n\n#content h2 {\n  font-size: 2em;\n}\n\n#content h3 {\n  font-size: 1.3em;\n}\n\n#content p {\n  font-size: 1em;\n}\n\n#content > div > div {\n  text-align: center;\n  border: solid 1px var(--accent-color);\n  padding: 20px;\n  color: var(--accent-color);\n  list-style: none;\n  width: 20vw;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   aboutLoad: () => (/* binding */ aboutLoad)
/* harmony export */ });
/* harmony import */ var _Resources_food2_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Resources/food2.jpg */ "./Resources/food2.jpg");
/* harmony import */ var _Resources_food3_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Resources/food3.jpg */ "./Resources/food3.jpg");



const container = document.getElementById("content")
const textDiv = document.createElement("div")
const textHeader = document.createElement("h2")
const textSubHeader = document.createElement("h3")
const textBox = document.createElement("p")
const openingTimes = document.createElement("div")

textHeader.textContent = "Welcome to La Restaurant!"
textSubHeader.textContent = "Providing a luxury dining experience for over 20 years!"
textBox.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pellentesque enim risus, nec rhoncus magna vulputate a. Duis tincidunt accumsan diam, nec commodo ligula pulvinar in. Proin augue orci, vestibulum vel urna vitae, bibendum laoreet diam. Quisque sed lobortis tortor. Donec non interdum purus. Donec eget erat sed lectus semper molestie. Fusce efficitur eros metus, sed ultrices turpis facilisis a. Ut luctus orci magna, ac faucibus ligula tristique sit amet. Mauris ultrices quis quam sit amet bibendum. Sed blandit augue eget mauris feugiat cursus. In hac habitasse platea dictumst. Pellentesque volutpat eleifend ligula, a elementum sapien pulvinar sed. Sed dapibus libero nec arcu sodales, et consequat dolor sollicitudin. Praesent laoreet nulla ac semper tincidunt."

function aboutLoad() {
    while (openingTimes.firstChild) {
        openingTimes.removeChild(openingTimes.lastChild);
    };
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    };
    container.appendChild(textDiv)
    textDiv.appendChild(textHeader)
    textDiv.appendChild(textSubHeader)
    textDiv.appendChild(textBox)
    textDiv.appendChild(openingTimes)
    openingTimes.appendChild(document.createElement("li")).textContent = "Brunch"
    openingTimes.appendChild(document.createElement("li")).textContent = "Saturday + Sunday: 11 a.m. - 2:30 p.m."
    openingTimes.appendChild(document.createElement("li")).textContent = "Dinner"
    openingTimes.appendChild(document.createElement("li")).textContent = "Sunday: 5 - 9 p.m."
    openingTimes.appendChild(document.createElement("li")).textContent = "Monday - Thursday: 5 - 10 p.m."
    openingTimes.appendChild(document.createElement("li")).textContent = "Friday + Saturday: 5 - 11 p.m."
    openingTimes.appendChild(document.createElement("li")).textContent = "Friday + Saturday: 5 - 11 p.m."
    openingTimes.appendChild(document.createElement("li")).textContent = "Happy Hour"
    openingTimes.appendChild(document.createElement("li")).textContent = "Monday - Friday: 5 - 7 p.m."
    let pic2 = document.createElement("img");
    let pic3 = document.createElement("img");
    pic2.src = _Resources_food2_jpg__WEBPACK_IMPORTED_MODULE_0__;
    pic3.src = _Resources_food3_jpg__WEBPACK_IMPORTED_MODULE_1__;
    container.appendChild(pic2)
    container.appendChild(pic3)
}

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   homeLoad: () => (/* binding */ homeLoad)
/* harmony export */ });
/* harmony import */ var _Resources_food1_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Resources/food1.jpg */ "./Resources/food1.jpg");
/* harmony import */ var _Resources_food2_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Resources/food2.jpg */ "./Resources/food2.jpg");
/* harmony import */ var _Resources_food3_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Resources/food3.jpg */ "./Resources/food3.jpg");



const container = document.getElementById("content")

function homeLoad() {
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    };

    let pic1 = document.createElement("img");
    let pic2 = document.createElement("img");
    let pic3 = document.createElement("img");

    pic1.src = _Resources_food1_jpg__WEBPACK_IMPORTED_MODULE_0__;
    pic2.src = _Resources_food2_jpg__WEBPACK_IMPORTED_MODULE_1__;
    pic3.src = _Resources_food3_jpg__WEBPACK_IMPORTED_MODULE_2__;

    container.appendChild(pic1);
    container.appendChild(pic2);
    container.appendChild(pic3);

}

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   menuLoad: () => (/* binding */ menuLoad)
/* harmony export */ });
/* harmony import */ var _Resources_food3_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Resources/food3.jpg */ "./Resources/food3.jpg");


const container = document.getElementById("content")
const textDiv1 = document.createElement("div")
const textDiv2 = document.createElement("div")

function menuLoad() {
    while (textDiv1.firstChild) {
        textDiv1.removeChild(textDiv1.lastChild);
    };
    while (textDiv2.firstChild) {
        textDiv2.removeChild(textDiv2.lastChild);
    };
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    };
    container.appendChild(textDiv1)
    container.appendChild(textDiv2)

    textDiv1.appendChild(document.createElement("h2")).textContent = "MENU"
    textDiv1.appendChild(document.createElement("h3")).textContent = "Main Course"
    textDiv1.appendChild(document.createElement("h4")).textContent = "Potato Gnocchi"
    textDiv1.appendChild(document.createElement("p")).textContent = "Purple sprouting broccoli, black garlic, Pecorino (v)"
    textDiv1.appendChild(document.createElement("h4")).textContent = "Pork Chop"
    textDiv1.appendChild(document.createElement("p")).textContent = "Cime di rapa, Belper Knolle"
    textDiv1.appendChild(document.createElement("h4")).textContent = "Steak au Poivre"
    textDiv1.appendChild(document.createElement("p")).textContent = "Peppercorn sauce, truffle"
    textDiv1.appendChild(document.createElement("h3")).textContent = "Sides"
    textDiv1.appendChild(document.createElement("h5")).textContent = "Mashed Potatoes (v)"
    textDiv1.appendChild(document.createElement("h5")).textContent = "French Fries (v)"
    textDiv1.appendChild(document.createElement("h5")).textContent = "Glazed Garden Carrots, Carrot Purée (vg)"

    textDiv2.appendChild(document.createElement("h2")).textContent = "MENU"
    textDiv2.appendChild(document.createElement("h3")).textContent = "Desserts"
    textDiv2.appendChild(document.createElement("h4")).textContent = "Chocolate Soufflé Tart"
    textDiv2.appendChild(document.createElement("p")).textContent = "Cocoa nib ice cream"
    textDiv2.appendChild(document.createElement("h4")).textContent = "Blood Orange Baked Alaska"
    textDiv2.appendChild(document.createElement("p")).textContent = "Pomegranate, Grand Marnier"
    textDiv2.appendChild(document.createElement("h4")).textContent = "Homemade Sorbet or Ice Cream"
    textDiv2.appendChild(document.createElement("p")).textContent = "Vanilla, cocoa nib, rhubarb, blood orange & pomegrante, Marsala, rum"
    textDiv2.appendChild(document.createElement("h3")).textContent = "Coffee"
    textDiv2.appendChild(document.createElement("h5")).textContent = "Machiatto"
    textDiv2.appendChild(document.createElement("h5")).textContent = "Espresso/Double Espresso"
    textDiv2.appendChild(document.createElement("h5")).textContent = "Cappucino"

    let pic = document.createElement("img");
    pic.src = _Resources_food3_jpg__WEBPACK_IMPORTED_MODULE_0__;
    container.appendChild(pic)
}

/***/ }),

/***/ "./Resources/Callingstone.ttf":
/*!************************************!*\
  !*** ./Resources/Callingstone.ttf ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e72e3a749f0383fb7b47.ttf";

/***/ }),

/***/ "./Resources/Sedan.ttf":
/*!*****************************!*\
  !*** ./Resources/Sedan.ttf ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d7fc4427c1781412445c.ttf";

/***/ }),

/***/ "./Resources/facebook.svg":
/*!********************************!*\
  !*** ./Resources/facebook.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "447507321d8589bea1fa.svg";

/***/ }),

/***/ "./Resources/food1.jpg":
/*!*****************************!*\
  !*** ./Resources/food1.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7e10805a998e3f0248c7.jpg";

/***/ }),

/***/ "./Resources/food2.jpg":
/*!*****************************!*\
  !*** ./Resources/food2.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4ed23c61baaebc92222b.jpg";

/***/ }),

/***/ "./Resources/food3.jpg":
/*!*****************************!*\
  !*** ./Resources/food3.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "457e447721227da5eaf3.jpg";

/***/ }),

/***/ "./Resources/instagram.svg":
/*!*********************************!*\
  !*** ./Resources/instagram.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "26ad17adbefaa914861a.svg";

/***/ }),

/***/ "./Resources/twitter.svg":
/*!*******************************!*\
  !*** ./Resources/twitter.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0f7406768dabc17cda96.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"bundle": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about */ "./src/about.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ "./src/style.css");









const homeButton = document.getElementById("home")
const aboutButton = document.getElementById("about")
const menuButton = document.getElementById("menu")
const footer = document.querySelector(".headerBottom")




(0,_home__WEBPACK_IMPORTED_MODULE_0__.homeLoad)()

aboutButton.addEventListener("click", _about__WEBPACK_IMPORTED_MODULE_1__.aboutLoad);
homeButton.addEventListener("click", _home__WEBPACK_IMPORTED_MODULE_0__.homeLoad);
menuButton.addEventListener("click", _menu__WEBPACK_IMPORTED_MODULE_2__.menuLoad);




})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map
