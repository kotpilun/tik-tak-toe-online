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

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ HomePage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/game */ \"./components/game/index.js\");\n/* harmony import */ var _components_game_use_game_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/game/use-game-state */ \"./components/game/use-game-state.js\");\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/header */ \"./components/header/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_uikit_ui_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/uikit/ui-modal */ \"./components/uikit/ui-modal.jsx\");\n/* harmony import */ var _components_uikit_ui_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/uikit/ui-button */ \"./components/uikit/ui-button.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction HomePage() {\n    _s();\n    const [playersCount, setPlayersCount] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(4);\n    const { cells, currentMove, nextMove, handleCellClick, winnerSequence, handlePlayerTimeOver, winnerSymbol } = (0,_components_game_use_game_state__WEBPACK_IMPORTED_MODULE_2__.useGameState)(playersCount);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-slate-50 min-h-screen\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_header__WEBPACK_IMPORTED_MODULE_3__.Header, {}, void 0, false, {\n                fileName: \"C:\\\\projects\\\\tik-tak-toe-online\\\\pages\\\\index.jsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"pt-6 mx-auto w-max\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_game__WEBPACK_IMPORTED_MODULE_1__.GameTitle, {\n                        playersCount: playersCount\n                    }, void 0, false, {\n                        fileName: \"C:\\\\projects\\\\tik-tak-toe-online\\\\pages\\\\index.jsx\",\n                        lineNumber: 24,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_game__WEBPACK_IMPORTED_MODULE_1__.GameInfo, {\n                        className: \"mt-4\",\n                        playersCount: playersCount,\n                        currentMove: currentMove,\n                        isWinner: !!winnerSymbol,\n                        onPlayerTimeOver: handlePlayerTimeOver\n                    }, void 0, false, {\n                        fileName: \"C:\\\\projects\\\\tik-tak-toe-online\\\\pages\\\\index.jsx\",\n                        lineNumber: 25,\n                        columnNumber: 9\n                    }, this),\n                    winnerSymbol,\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_uikit_ui_modal__WEBPACK_IMPORTED_MODULE_5__.UiModal, {\n                        width: \"md\",\n                        isOpen: winnerSymbol,\n                        onClose: ()=>console.log(\"close\"),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_uikit_ui_modal__WEBPACK_IMPORTED_MODULE_5__.UiModal.Header, {\n                                children: \"Игра завершена\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\projects\\\\tik-tak-toe-online\\\\pages\\\\index.jsx\",\n                                lineNumber: 38,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_uikit_ui_modal__WEBPACK_IMPORTED_MODULE_5__.UiModal.Body, {\n                                className: \"text-sm \",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: [\n                                        \"Победитель: \",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"text-teal-600\",\n                                            children: \"Oleg\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\projects\\\\tik-tak-toe-online\\\\pages\\\\index.jsx\",\n                                            lineNumber: 41,\n                                            columnNumber: 27\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\projects\\\\tik-tak-toe-online\\\\pages\\\\index.jsx\",\n                                    lineNumber: 40,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\projects\\\\tik-tak-toe-online\\\\pages\\\\index.jsx\",\n                                lineNumber: 39,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_uikit_ui_modal__WEBPACK_IMPORTED_MODULE_5__.UiModal.Footer, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_uikit_ui_button__WEBPACK_IMPORTED_MODULE_6__.UiButton, {\n                                        variant: \"outline\",\n                                        size: \"md\",\n                                        children: \"Вернуться\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\projects\\\\tik-tak-toe-online\\\\pages\\\\index.jsx\",\n                                        lineNumber: 45,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_uikit_ui_button__WEBPACK_IMPORTED_MODULE_6__.UiButton, {\n                                        variant: \"primary\",\n                                        size: \"md\",\n                                        children: \"Играть снова\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\projects\\\\tik-tak-toe-online\\\\pages\\\\index.jsx\",\n                                        lineNumber: 48,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\projects\\\\tik-tak-toe-online\\\\pages\\\\index.jsx\",\n                                lineNumber: 44,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\projects\\\\tik-tak-toe-online\\\\pages\\\\index.jsx\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_game__WEBPACK_IMPORTED_MODULE_1__.GameField, {\n                        className: \"mt-6\",\n                        cells: cells,\n                        currentMove: currentMove,\n                        nextMove: nextMove,\n                        handleCellClick: handleCellClick,\n                        winnerSequence: winnerSequence,\n                        winnerSymbol: winnerSymbol\n                    }, void 0, false, {\n                        fileName: \"C:\\\\projects\\\\tik-tak-toe-online\\\\pages\\\\index.jsx\",\n                        lineNumber: 53,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\projects\\\\tik-tak-toe-online\\\\pages\\\\index.jsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\projects\\\\tik-tak-toe-online\\\\pages\\\\index.jsx\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, this);\n}\n_s(HomePage, \"sX8+cp1Ie2il4tFFQP/mskrQIqc=\", false, function() {\n    return [\n        _components_game_use_game_state__WEBPACK_IMPORTED_MODULE_2__.useGameState\n    ];\n});\n_c = HomePage;\nfunction HomePageLayout(param) {\n    let { header, children } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-slate-50 min-h-screen\",\n        children: [\n            header,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"pt-6 mx-auto w-max\",\n                children: children\n            }, void 0, false, {\n                fileName: \"C:\\\\projects\\\\tik-tak-toe-online\\\\pages\\\\index.jsx\",\n                lineNumber: 71,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\projects\\\\tik-tak-toe-online\\\\pages\\\\index.jsx\",\n        lineNumber: 69,\n        columnNumber: 5\n    }, this);\n}\n_c1 = HomePageLayout;\nvar _c, _c1;\n$RefreshReg$(_c, \"HomePage\");\n$RefreshReg$(_c1, \"HomePageLayout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQW9FO0FBQ0g7QUFDbkI7QUFDYjtBQUNzQjtBQUNFO0FBRTFDLFNBQVNROztJQUN0QixNQUFNLENBQUNDLGNBQWNDLGdCQUFnQixHQUFHTCwrQ0FBUUEsQ0FBQztJQUNqRCxNQUFNLEVBQ0pNLEtBQUssRUFDTEMsV0FBVyxFQUNYQyxRQUFRLEVBQ1JDLGVBQWUsRUFDZkMsY0FBYyxFQUNkQyxvQkFBb0IsRUFDcEJDLFlBQVksRUFDYixHQUFHZCw2RUFBWUEsQ0FBQ007SUFFakIscUJBQ0UsOERBQUNTO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDZixzREFBTUE7Ozs7OzBCQUNQLDhEQUFDZ0I7Z0JBQUtELFdBQVU7O2tDQUNkLDhEQUFDbEIsdURBQVNBO3dCQUFDUSxjQUFjQTs7Ozs7O2tDQUN6Qiw4REFBQ1Asc0RBQVFBO3dCQUNQaUIsV0FBVTt3QkFDVlYsY0FBY0E7d0JBQ2RHLGFBQWFBO3dCQUNiUyxVQUFVLENBQUMsQ0FBQ0o7d0JBQ1pLLGtCQUFrQk47Ozs7OztvQkFFbkJDO2tDQUNELDhEQUFDWCwrREFBT0E7d0JBQ05pQixPQUFNO3dCQUNOQyxRQUFRUDt3QkFDUlEsU0FBUyxJQUFNQyxRQUFRQyxHQUFHLENBQUM7OzBDQUUzQiw4REFBQ3JCLCtEQUFPQSxDQUFDRixNQUFNOzBDQUFDOzs7Ozs7MENBQ2hCLDhEQUFDRSwrREFBT0EsQ0FBQ3NCLElBQUk7Z0NBQUNULFdBQVU7MENBQ3RCLDRFQUFDRDs7d0NBQUk7c0RBQ1MsOERBQUNXOzRDQUFLVixXQUFVO3NEQUFnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7MENBR2hELDhEQUFDYiwrREFBT0EsQ0FBQ3dCLE1BQU07O2tEQUNiLDhEQUFDdkIsaUVBQVFBO3dDQUFDd0IsU0FBUTt3Q0FBVUMsTUFBSztrREFBSzs7Ozs7O2tEQUd0Qyw4REFBQ3pCLGlFQUFRQTt3Q0FBQ3dCLFNBQVE7d0NBQVVDLE1BQUs7a0RBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0FLMUMsOERBQUNoQyx1REFBU0E7d0JBQ1JtQixXQUFVO3dCQUNWUixPQUFPQTt3QkFDUEMsYUFBYUE7d0JBQ2JDLFVBQVVBO3dCQUNWQyxpQkFBaUJBO3dCQUNqQkMsZ0JBQWdCQTt3QkFDaEJFLGNBQWNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLeEI7R0F6RHdCVDs7UUFVbEJMLHlFQUFZQTs7O0tBVk1LO0FBMkR4QixTQUFTeUIsZUFBZSxLQUFvQjtRQUFwQixFQUFFQyxNQUFNLEVBQUVDLFFBQVEsRUFBRSxHQUFwQjtJQUN0QixxQkFDRSw4REFBQ2pCO1FBQUlDLFdBQVU7O1lBQ1plOzBCQUNELDhEQUFDZDtnQkFBS0QsV0FBVTswQkFBc0JnQjs7Ozs7Ozs7Ozs7O0FBRzVDO01BUFNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzeD83ZmZkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdhbWVGaWVsZCwgR2FtZVRpdGxlLCBHYW1lSW5mbyB9IGZyb20gXCIuLi9jb21wb25lbnRzL2dhbWVcIjtcbmltcG9ydCB7IHVzZUdhbWVTdGF0ZSB9IGZyb20gXCIuLi9jb21wb25lbnRzL2dhbWUvdXNlLWdhbWUtc3RhdGVcIjtcbmltcG9ydCB7IEhlYWRlciB9IGZyb20gXCIuLi9jb21wb25lbnRzL2hlYWRlclwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFVpTW9kYWwgfSBmcm9tIFwiLi4vY29tcG9uZW50cy91aWtpdC91aS1tb2RhbFwiO1xuaW1wb3J0IHsgVWlCdXR0b24gfSBmcm9tIFwiLi4vY29tcG9uZW50cy91aWtpdC91aS1idXR0b25cIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZVBhZ2UoKSB7XG4gIGNvbnN0IFtwbGF5ZXJzQ291bnQsIHNldFBsYXllcnNDb3VudF0gPSB1c2VTdGF0ZSg0KTtcbiAgY29uc3Qge1xuICAgIGNlbGxzLFxuICAgIGN1cnJlbnRNb3ZlLFxuICAgIG5leHRNb3ZlLFxuICAgIGhhbmRsZUNlbGxDbGljayxcbiAgICB3aW5uZXJTZXF1ZW5jZSxcbiAgICBoYW5kbGVQbGF5ZXJUaW1lT3ZlcixcbiAgICB3aW5uZXJTeW1ib2wsXG4gIH0gPSB1c2VHYW1lU3RhdGUocGxheWVyc0NvdW50KTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctc2xhdGUtNTAgbWluLWgtc2NyZWVuXCI+XG4gICAgICA8SGVhZGVyIC8+XG4gICAgICA8bWFpbiBjbGFzc05hbWU9XCJwdC02IG14LWF1dG8gdy1tYXhcIj5cbiAgICAgICAgPEdhbWVUaXRsZSBwbGF5ZXJzQ291bnQ9e3BsYXllcnNDb3VudH0gLz5cbiAgICAgICAgPEdhbWVJbmZvXG4gICAgICAgICAgY2xhc3NOYW1lPVwibXQtNFwiXG4gICAgICAgICAgcGxheWVyc0NvdW50PXtwbGF5ZXJzQ291bnR9XG4gICAgICAgICAgY3VycmVudE1vdmU9e2N1cnJlbnRNb3ZlfVxuICAgICAgICAgIGlzV2lubmVyPXshIXdpbm5lclN5bWJvbH1cbiAgICAgICAgICBvblBsYXllclRpbWVPdmVyPXtoYW5kbGVQbGF5ZXJUaW1lT3Zlcn1cbiAgICAgICAgLz5cbiAgICAgICAge3dpbm5lclN5bWJvbH1cbiAgICAgICAgPFVpTW9kYWxcbiAgICAgICAgICB3aWR0aD1cIm1kXCJcbiAgICAgICAgICBpc09wZW49e3dpbm5lclN5bWJvbH1cbiAgICAgICAgICBvbkNsb3NlPXsoKSA9PiBjb25zb2xlLmxvZyhcImNsb3NlXCIpfVxuICAgICAgICA+XG4gICAgICAgICAgPFVpTW9kYWwuSGVhZGVyPtCY0LPRgNCwINC30LDQstC10YDRiNC10L3QsDwvVWlNb2RhbC5IZWFkZXI+XG4gICAgICAgICAgPFVpTW9kYWwuQm9keSBjbGFzc05hbWU9XCJ0ZXh0LXNtIFwiPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAg0J/QvtCx0LXQtNC40YLQtdC70Yw6IDxzcGFuIGNsYXNzTmFtZT1cInRleHQtdGVhbC02MDBcIj5PbGVnPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9VaU1vZGFsLkJvZHk+XG4gICAgICAgICAgPFVpTW9kYWwuRm9vdGVyPlxuICAgICAgICAgICAgPFVpQnV0dG9uIHZhcmlhbnQ9XCJvdXRsaW5lXCIgc2l6ZT1cIm1kXCI+XG4gICAgICAgICAgICAgINCS0LXRgNC90YPRgtGM0YHRj1xuICAgICAgICAgICAgPC9VaUJ1dHRvbj5cbiAgICAgICAgICAgIDxVaUJ1dHRvbiB2YXJpYW50PVwicHJpbWFyeVwiIHNpemU9XCJtZFwiPlxuICAgICAgICAgICAgICDQmNCz0YDQsNGC0Ywg0YHQvdC+0LLQsFxuICAgICAgICAgICAgPC9VaUJ1dHRvbj5cbiAgICAgICAgICA8L1VpTW9kYWwuRm9vdGVyPlxuICAgICAgICA8L1VpTW9kYWw+XG4gICAgICAgIDxHYW1lRmllbGRcbiAgICAgICAgICBjbGFzc05hbWU9XCJtdC02XCJcbiAgICAgICAgICBjZWxscz17Y2VsbHN9XG4gICAgICAgICAgY3VycmVudE1vdmU9e2N1cnJlbnRNb3ZlfVxuICAgICAgICAgIG5leHRNb3ZlPXtuZXh0TW92ZX1cbiAgICAgICAgICBoYW5kbGVDZWxsQ2xpY2s9e2hhbmRsZUNlbGxDbGlja31cbiAgICAgICAgICB3aW5uZXJTZXF1ZW5jZT17d2lubmVyU2VxdWVuY2V9XG4gICAgICAgICAgd2lubmVyU3ltYm9sPXt3aW5uZXJTeW1ib2x9XG4gICAgICAgIC8+XG4gICAgICA8L21haW4+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmZ1bmN0aW9uIEhvbWVQYWdlTGF5b3V0KHsgaGVhZGVyLCBjaGlsZHJlbiB9KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJiZy1zbGF0ZS01MCBtaW4taC1zY3JlZW5cIj5cbiAgICAgIHtoZWFkZXJ9XG4gICAgICA8bWFpbiBjbGFzc05hbWU9XCJwdC02IG14LWF1dG8gdy1tYXhcIj57Y2hpbGRyZW59PC9tYWluPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkdhbWVGaWVsZCIsIkdhbWVUaXRsZSIsIkdhbWVJbmZvIiwidXNlR2FtZVN0YXRlIiwiSGVhZGVyIiwidXNlU3RhdGUiLCJVaU1vZGFsIiwiVWlCdXR0b24iLCJIb21lUGFnZSIsInBsYXllcnNDb3VudCIsInNldFBsYXllcnNDb3VudCIsImNlbGxzIiwiY3VycmVudE1vdmUiLCJuZXh0TW92ZSIsImhhbmRsZUNlbGxDbGljayIsIndpbm5lclNlcXVlbmNlIiwiaGFuZGxlUGxheWVyVGltZU92ZXIiLCJ3aW5uZXJTeW1ib2wiLCJkaXYiLCJjbGFzc05hbWUiLCJtYWluIiwiaXNXaW5uZXIiLCJvblBsYXllclRpbWVPdmVyIiwid2lkdGgiLCJpc09wZW4iLCJvbkNsb3NlIiwiY29uc29sZSIsImxvZyIsIkJvZHkiLCJzcGFuIiwiRm9vdGVyIiwidmFyaWFudCIsInNpemUiLCJIb21lUGFnZUxheW91dCIsImhlYWRlciIsImNoaWxkcmVuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.jsx\n"));

/***/ })

});