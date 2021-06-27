self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./etherum/web3.js":
/*!*************************!*\
  !*** ./etherum/web3.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! web3 */ "./node_modules/web3/lib/index.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_0__);
/* module decorator */ module = __webpack_require__.hmd(module);
// import Web3 from 'web3';
// import detectEthereumProvider from '@metamask/detect-provider';
// //const HDWalletProvider = require('truffle-hdwallet-provider');
// var provider;
// const run = async () => {
//     provider = await detectEthereumProvider();
// }
// run();
// // const provider = new HDWalletProvider(
// // 	'knee february humble enjoy napkin brother smart tilt viable banner series desert',
// // 	'HTTP://127.0.0.1:7545'
// // );
// // const web3 = new Web3(window.web3.currentProvider);
// // if (provider) {
// //     // From now on, this should always be true:
// //     // provider === window.ethereum
// //     startApp(provider); // initialize your app
// //   } else {
// //     console.log('Please install MetaMask!');
// //   }
// const web3 = new Web3(provider);
// export default web3;
// this will do

var web3;

if ( true && typeof window.web3 !== 'undefined') {
  //we are in the browser and metamask is running
  web3 = new (web3__WEBPACK_IMPORTED_MODULE_0___default())(window.web3.currentProvider);
} else {}

/* harmony default export */ __webpack_exports__["default"] = (web3);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vZXRoZXJ1bS93ZWIzLmpzIl0sIm5hbWVzIjpbIndlYjMiLCJ3aW5kb3ciLCJXZWIzIiwiY3VycmVudFByb3ZpZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBRUEsSUFBSUEsSUFBSjs7QUFFQSxJQUFHLFNBQWlDLE9BQU9DLE1BQU0sQ0FBQ0QsSUFBZCxLQUF1QixXQUEzRCxFQUF1RTtBQUNuRTtBQUNBQSxNQUFJLEdBQUcsSUFBSUUsNkNBQUosQ0FBU0QsTUFBTSxDQUFDRCxJQUFQLENBQVlHLGVBQXJCLENBQVA7QUFDSCxDQUhELE1BR0ssQ0FFSjs7QUFFRCwrREFBZUgsSUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5jOTRmOTE1N2ZlYmQ2YWEyMjdhYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IFdlYjMgZnJvbSAnd2ViMyc7XHJcbi8vIGltcG9ydCBkZXRlY3RFdGhlcmV1bVByb3ZpZGVyIGZyb20gJ0BtZXRhbWFzay9kZXRlY3QtcHJvdmlkZXInO1xyXG4vLyAvL2NvbnN0IEhEV2FsbGV0UHJvdmlkZXIgPSByZXF1aXJlKCd0cnVmZmxlLWhkd2FsbGV0LXByb3ZpZGVyJyk7XHJcbi8vIHZhciBwcm92aWRlcjtcclxuLy8gY29uc3QgcnVuID0gYXN5bmMgKCkgPT4ge1xyXG5cclxuLy8gICAgIHByb3ZpZGVyID0gYXdhaXQgZGV0ZWN0RXRoZXJldW1Qcm92aWRlcigpO1xyXG4vLyB9XHJcbi8vIHJ1bigpO1xyXG4vLyAvLyBjb25zdCBwcm92aWRlciA9IG5ldyBIRFdhbGxldFByb3ZpZGVyKFxyXG4vLyAvLyBcdCdrbmVlIGZlYnJ1YXJ5IGh1bWJsZSBlbmpveSBuYXBraW4gYnJvdGhlciBzbWFydCB0aWx0IHZpYWJsZSBiYW5uZXIgc2VyaWVzIGRlc2VydCcsXHJcbi8vIC8vIFx0J0hUVFA6Ly8xMjcuMC4wLjE6NzU0NSdcclxuLy8gLy8gKTtcclxuXHJcbi8vIC8vIGNvbnN0IHdlYjMgPSBuZXcgV2ViMyh3aW5kb3cud2ViMy5jdXJyZW50UHJvdmlkZXIpO1xyXG4vLyAvLyBpZiAocHJvdmlkZXIpIHtcclxuLy8gLy8gICAgIC8vIEZyb20gbm93IG9uLCB0aGlzIHNob3VsZCBhbHdheXMgYmUgdHJ1ZTpcclxuLy8gLy8gICAgIC8vIHByb3ZpZGVyID09PSB3aW5kb3cuZXRoZXJldW1cclxuLy8gLy8gICAgIHN0YXJ0QXBwKHByb3ZpZGVyKTsgLy8gaW5pdGlhbGl6ZSB5b3VyIGFwcFxyXG4vLyAvLyAgIH0gZWxzZSB7XHJcbi8vIC8vICAgICBjb25zb2xlLmxvZygnUGxlYXNlIGluc3RhbGwgTWV0YU1hc2shJyk7XHJcbi8vIC8vICAgfVxyXG5cclxuLy8gY29uc3Qgd2ViMyA9IG5ldyBXZWIzKHByb3ZpZGVyKTtcclxuXHJcbi8vIGV4cG9ydCBkZWZhdWx0IHdlYjM7XHJcblxyXG4vLyB0aGlzIHdpbGwgZG9cclxuXHJcbmltcG9ydCBXZWIzIGZyb20gJ3dlYjMnO1xyXG5cclxubGV0IHdlYjM7XHJcblxyXG5pZih0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2Ygd2luZG93LndlYjMgIT09ICd1bmRlZmluZWQnKXtcclxuICAgIC8vd2UgYXJlIGluIHRoZSBicm93c2VyIGFuZCBtZXRhbWFzayBpcyBydW5uaW5nXHJcbiAgICB3ZWIzID0gbmV3IFdlYjMod2luZG93LndlYjMuY3VycmVudFByb3ZpZGVyKTtcclxufWVsc2V7XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3ZWIzOyJdLCJzb3VyY2VSb290IjoiIn0=