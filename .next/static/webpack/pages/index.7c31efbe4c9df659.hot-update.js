"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/game-new/game.jsx":
/*!**************************************!*\
  !*** ./components/game-new/game.jsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Game: function() { return /* binding */ Game; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ui_back_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui/back-link */ \"./components/game-new/ui/back-link.jsx\");\n/* harmony import */ var _ui_game_info__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui/game-info */ \"./components/game-new/ui/game-info.jsx\");\n/* harmony import */ var _ui_game_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui/game-layout */ \"./components/game-new/ui/game-layout.jsx\");\n/* harmony import */ var _ui_game_title__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ui/game-title */ \"./components/game-new/ui/game-title.jsx\");\n\n\n\n\n\nfunction Game() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_game_layout__WEBPACK_IMPORTED_MODULE_3__.GameLayout, {\n        backlink: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_back_link__WEBPACK_IMPORTED_MODULE_1__.BackLink, {}, void 0, false, {\n            fileName: \"C:\\\\projects\\\\tik-tak-toe-online\\\\components\\\\game-new\\\\game.jsx\",\n            lineNumber: 9,\n            columnNumber: 17\n        }, void 0),\n        title: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_game_title__WEBPACK_IMPORTED_MODULE_4__.GameTitle, {}, void 0, false, {\n            fileName: \"C:\\\\projects\\\\tik-tak-toe-online\\\\components\\\\game-new\\\\game.jsx\",\n            lineNumber: 10,\n            columnNumber: 14\n        }, void 0),\n        gameInfo: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_game_info__WEBPACK_IMPORTED_MODULE_2__.GameInfo, {\n            playersCount: 4,\n            isRatingGame: true,\n            timeMode: \"1 минута на ход\"\n        }, void 0, false, {\n            fileName: \"C:\\\\projects\\\\tik-tak-toe-online\\\\components\\\\game-new\\\\game.jsx\",\n            lineNumber: 12,\n            columnNumber: 9\n        }, void 0)\n    }, void 0, false, {\n        fileName: \"C:\\\\projects\\\\tik-tak-toe-online\\\\components\\\\game-new\\\\game.jsx\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, this);\n}\n_c = Game;\nvar _c;\n$RefreshReg$(_c, \"Game\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dhbWUtbmV3L2dhbWUuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQTBDO0FBQ0E7QUFDSTtBQUNGO0FBRXJDLFNBQVNJO0lBQ2QscUJBQ0UsOERBQUNGLHVEQUFVQTtRQUNURyx3QkFBVSw4REFBQ0wsbURBQVFBOzs7OztRQUNuQk0scUJBQU8sOERBQUNILHFEQUFTQTs7Ozs7UUFDakJJLHdCQUNFLDhEQUFDTixtREFBUUE7WUFBQ08sY0FBYztZQUFHQyxZQUFZO1lBQUNDLFVBQVU7Ozs7Ozs7Ozs7O0FBSTFEO0tBVmdCTiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2dhbWUtbmV3L2dhbWUuanN4P2U0MmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmFja0xpbmsgfSBmcm9tIFwiLi91aS9iYWNrLWxpbmtcIjtcclxuaW1wb3J0IHsgR2FtZUluZm8gfSBmcm9tIFwiLi91aS9nYW1lLWluZm9cIjtcclxuaW1wb3J0IHsgR2FtZUxheW91dCB9IGZyb20gXCIuL3VpL2dhbWUtbGF5b3V0XCI7XHJcbmltcG9ydCB7IEdhbWVUaXRsZSB9IGZyb20gXCIuL3VpL2dhbWUtdGl0bGVcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBHYW1lKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8R2FtZUxheW91dFxyXG4gICAgICBiYWNrbGluaz17PEJhY2tMaW5rIC8+fVxyXG4gICAgICB0aXRsZT17PEdhbWVUaXRsZSAvPn1cclxuICAgICAgZ2FtZUluZm89e1xyXG4gICAgICAgIDxHYW1lSW5mbyBwbGF5ZXJzQ291bnQ9ezR9IGlzUmF0aW5nR2FtZSB0aW1lTW9kZT17XCIxINC80LjQvdGD0YLQsCDQvdCwINGF0L7QtFwifSAvPlxyXG4gICAgICB9XHJcbiAgICAvPlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIkJhY2tMaW5rIiwiR2FtZUluZm8iLCJHYW1lTGF5b3V0IiwiR2FtZVRpdGxlIiwiR2FtZSIsImJhY2tsaW5rIiwidGl0bGUiLCJnYW1lSW5mbyIsInBsYXllcnNDb3VudCIsImlzUmF0aW5nR2FtZSIsInRpbWVNb2RlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/game-new/game.jsx\n"));

/***/ })

});