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

/***/ "./components/game-new/ui/player-info.jsx":
/*!************************************************!*\
  !*** ./components/game-new/ui/player-info.jsx ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   PlayerInfo: function() { return /* binding */ PlayerInfo; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _game_symbol__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game-symbol */ \"./components/game-new/ui/game-symbol.jsx\");\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clsx */ \"./node_modules/clsx/dist/clsx.mjs\");\n\n\n\n\nfunction PlayerInfo(param) {\n    let { isRight, name, rating, avatar, symbol, isTimerRunning, seconds } = param;\n    const minuteString = String(Math.floor(seconds / 60)).padStart(2, \"0\");\n    const secondsString = String(seconds % 60).padStart(2, \"0\");\n    const getTimerColor = ()=>{\n        const isDanger = seconds <= 10;\n        if (isTimerRunning) {\n            return isDanger ? \"text-orange-600\" : \"text-slate-900\";\n        }\n        return \"text-slate-200\";\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex items-center gap-3\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\"relative\", isRight && \"order-3\"),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center gap-2 text-start text-teal-600 w-44\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                src: avatar,\n                                alt: \"avatar\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\projects\\\\tik-tak-toe-online\\\\components\\\\game-new\\\\ui\\\\player-info.jsx\",\n                                lineNumber: 31,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"overflow-hidden\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"text-lg leading-tight truncate\",\n                                        children: name\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\projects\\\\tik-tak-toe-online\\\\components\\\\game-new\\\\ui\\\\player-info.jsx\",\n                                        lineNumber: 33,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"text-slate-400 text-xs leading-tight\",\n                                        children: [\n                                            \"Рейтинг: \",\n                                            rating\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\projects\\\\tik-tak-toe-online\\\\components\\\\game-new\\\\ui\\\\player-info.jsx\",\n                                        lineNumber: 34,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\projects\\\\tik-tak-toe-online\\\\components\\\\game-new\\\\ui\\\\player-info.jsx\",\n                                lineNumber: 32,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\projects\\\\tik-tak-toe-online\\\\components\\\\game-new\\\\ui\\\\player-info.jsx\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-5 h-5 rounded-full bg-white shadow absolute -left-1 -top-1 flex items-center justify-center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_game_symbol__WEBPACK_IMPORTED_MODULE_2__.GameSymbol, {\n                            className: \"w-3 h-3\",\n                            symbol: symbol\n                        }, void 0, false, {\n                            fileName: \"C:\\\\projects\\\\tik-tak-toe-online\\\\components\\\\game-new\\\\ui\\\\player-info.jsx\",\n                            lineNumber: 40,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\projects\\\\tik-tak-toe-online\\\\components\\\\game-new\\\\ui\\\\player-info.jsx\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\projects\\\\tik-tak-toe-online\\\\components\\\\game-new\\\\ui\\\\player-info.jsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\"h-6 w-px bg-slate-200\", isRight && \"order-2\")\n            }, void 0, false, {\n                fileName: \"C:\\\\projects\\\\tik-tak-toe-online\\\\components\\\\game-new\\\\ui\\\\player-info.jsx\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\" text-lg font-semibold w-[60px]\", isRight && \"order-1\", getTimerColor()),\n                children: [\n                    minuteString,\n                    \":\",\n                    secondsString\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\projects\\\\tik-tak-toe-online\\\\components\\\\game-new\\\\ui\\\\player-info.jsx\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\projects\\\\tik-tak-toe-online\\\\components\\\\game-new\\\\ui\\\\player-info.jsx\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, this);\n}\n_c = PlayerInfo;\nvar _c;\n$RefreshReg$(_c, \"PlayerInfo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dhbWUtbmV3L3VpL3BsYXllci1pbmZvLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUErQjtBQUNZO0FBQ25CO0FBRWpCLFNBQVNHLFdBQVcsS0FRMUI7UUFSMEIsRUFDekJDLE9BQU8sRUFDUEMsSUFBSSxFQUNKQyxNQUFNLEVBQ05DLE1BQU0sRUFDTkMsTUFBTSxFQUNOQyxjQUFjLEVBQ2RDLE9BQU8sRUFDUixHQVIwQjtJQVN6QixNQUFNQyxlQUFlQyxPQUFPQyxLQUFLQyxLQUFLLENBQUNKLFVBQVUsS0FBS0ssUUFBUSxDQUFDLEdBQUc7SUFDbEUsTUFBTUMsZ0JBQWdCSixPQUFPRixVQUFVLElBQUlLLFFBQVEsQ0FBQyxHQUFHO0lBQ3ZELE1BQU1FLGdCQUFnQjtRQUNwQixNQUFNQyxXQUFXUixXQUFXO1FBRTVCLElBQUlELGdCQUFnQjtZQUNsQixPQUFPUyxXQUFXLG9CQUFvQjtRQUN4QztRQUNBLE9BQU87SUFDVDtJQUVBLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0Q7Z0JBQUlDLFdBQVdsQixnREFBSUEsQ0FBQyxZQUFZRSxXQUFXOztrQ0FDMUMsOERBQUNlO3dCQUNDQyxXQUFXOzswQ0FFWCw4REFBQ3BCLG1EQUFLQTtnQ0FBQ3FCLEtBQUtkO2dDQUFRZSxLQUFJOzs7Ozs7MENBQ3hCLDhEQUFDSDtnQ0FBSUMsV0FBVTs7a0RBQ2IsOERBQUNEO3dDQUFJQyxXQUFVO2tEQUFrQ2Y7Ozs7OztrREFDakQsOERBQUNjO3dDQUFJQyxXQUFVOzs0Q0FBdUM7NENBQzFDZDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0FJaEIsOERBQUNhO3dCQUFJQyxXQUFVO2tDQUNiLDRFQUFDbkIsb0RBQVVBOzRCQUFDbUIsV0FBVTs0QkFBVVosUUFBUUE7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUc1Qyw4REFBQ1c7Z0JBQ0NDLFdBQVdsQixnREFBSUEsQ0FBQyx5QkFBeUJFLFdBQVc7Ozs7OzswQkFFdEQsOERBQUNlO2dCQUNDQyxXQUFXbEIsZ0RBQUlBLENBQ2IsbUNBQ0FFLFdBQVcsV0FDWGE7O29CQUdETjtvQkFBYTtvQkFBRUs7Ozs7Ozs7Ozs7Ozs7QUFJeEI7S0FwRGdCYiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2dhbWUtbmV3L3VpL3BsYXllci1pbmZvLmpzeD9mMmMxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgeyBHYW1lU3ltYm9sIH0gZnJvbSBcIi4vZ2FtZS1zeW1ib2xcIjtcclxuaW1wb3J0IGNsc3ggZnJvbSBcImNsc3hcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBQbGF5ZXJJbmZvKHtcclxuICBpc1JpZ2h0LFxyXG4gIG5hbWUsXHJcbiAgcmF0aW5nLFxyXG4gIGF2YXRhcixcclxuICBzeW1ib2wsXHJcbiAgaXNUaW1lclJ1bm5pbmcsXHJcbiAgc2Vjb25kcyxcclxufSkge1xyXG4gIGNvbnN0IG1pbnV0ZVN0cmluZyA9IFN0cmluZyhNYXRoLmZsb29yKHNlY29uZHMgLyA2MCkpLnBhZFN0YXJ0KDIsIFwiMFwiKTtcclxuICBjb25zdCBzZWNvbmRzU3RyaW5nID0gU3RyaW5nKHNlY29uZHMgJSA2MCkucGFkU3RhcnQoMiwgXCIwXCIpO1xyXG4gIGNvbnN0IGdldFRpbWVyQ29sb3IgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBpc0RhbmdlciA9IHNlY29uZHMgPD0gMTA7XHJcblxyXG4gICAgaWYgKGlzVGltZXJSdW5uaW5nKSB7XHJcbiAgICAgIHJldHVybiBpc0RhbmdlciA/IFwidGV4dC1vcmFuZ2UtNjAwXCIgOiBcInRleHQtc2xhdGUtOTAwXCI7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gXCJ0ZXh0LXNsYXRlLTIwMFwiO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0zXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbHN4KFwicmVsYXRpdmVcIiwgaXNSaWdodCAmJiBcIm9yZGVyLTNcIil9PlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT17XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiB0ZXh0LXN0YXJ0IHRleHQtdGVhbC02MDAgdy00NFwifVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxJbWFnZSBzcmM9e2F2YXRhcn0gYWx0PVwiYXZhdGFyXCIgLz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3ZlcmZsb3ctaGlkZGVuXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1sZyBsZWFkaW5nLXRpZ2h0IHRydW5jYXRlXCI+e25hbWV9PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1zbGF0ZS00MDAgdGV4dC14cyBsZWFkaW5nLXRpZ2h0XCI+XHJcbiAgICAgICAgICAgICAg0KDQtdC50YLQuNC90LM6IHtyYXRpbmd9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTUgaC01IHJvdW5kZWQtZnVsbCBiZy13aGl0ZSBzaGFkb3cgYWJzb2x1dGUgLWxlZnQtMSAtdG9wLTEgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cclxuICAgICAgICAgIDxHYW1lU3ltYm9sIGNsYXNzTmFtZT1cInctMyBoLTNcIiBzeW1ib2w9e3N5bWJvbH0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9e2Nsc3goXCJoLTYgdy1weCBiZy1zbGF0ZS0yMDBcIiwgaXNSaWdodCAmJiBcIm9yZGVyLTJcIil9XHJcbiAgICAgID48L2Rpdj5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT17Y2xzeChcclxuICAgICAgICAgIFwiIHRleHQtbGcgZm9udC1zZW1pYm9sZCB3LVs2MHB4XVwiLFxyXG4gICAgICAgICAgaXNSaWdodCAmJiBcIm9yZGVyLTFcIixcclxuICAgICAgICAgIGdldFRpbWVyQ29sb3IoKSxcclxuICAgICAgICApfVxyXG4gICAgICA+XHJcbiAgICAgICAge21pbnV0ZVN0cmluZ306e3NlY29uZHNTdHJpbmd9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJHYW1lU3ltYm9sIiwiY2xzeCIsIlBsYXllckluZm8iLCJpc1JpZ2h0IiwibmFtZSIsInJhdGluZyIsImF2YXRhciIsInN5bWJvbCIsImlzVGltZXJSdW5uaW5nIiwic2Vjb25kcyIsIm1pbnV0ZVN0cmluZyIsIlN0cmluZyIsIk1hdGgiLCJmbG9vciIsInBhZFN0YXJ0Iiwic2Vjb25kc1N0cmluZyIsImdldFRpbWVyQ29sb3IiLCJpc0RhbmdlciIsImRpdiIsImNsYXNzTmFtZSIsInNyYyIsImFsdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/game-new/ui/player-info.jsx\n"));

/***/ })

});