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
} else {//wE ARE ON THE browser or the user is not running metamask
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vZXRoZXJ1bS93ZWIzLmpzIl0sIm5hbWVzIjpbIndlYjMiLCJ3aW5kb3ciLCJXZWIzIiwiY3VycmVudFByb3ZpZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBRUEsSUFBSUEsSUFBSjs7QUFFQSxJQUFHLFNBQWlDLE9BQU9DLE1BQU0sQ0FBQ0QsSUFBZCxLQUF1QixXQUEzRCxFQUF1RTtBQUNuRTtBQUNBQSxNQUFJLEdBQUcsSUFBSUUsNkNBQUosQ0FBU0QsTUFBTSxDQUFDRCxJQUFQLENBQVlHLGVBQXJCLENBQVA7QUFDSCxDQUhELE1BR0ssQ0FDRDtBQUVIOztBQUVELCtEQUFlSCxJQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjQ4YmMyZWQ4MThlMzBkYzg5NjNkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgV2ViMyBmcm9tICd3ZWIzJztcclxuLy8gaW1wb3J0IGRldGVjdEV0aGVyZXVtUHJvdmlkZXIgZnJvbSAnQG1ldGFtYXNrL2RldGVjdC1wcm92aWRlcic7XHJcbi8vIC8vY29uc3QgSERXYWxsZXRQcm92aWRlciA9IHJlcXVpcmUoJ3RydWZmbGUtaGR3YWxsZXQtcHJvdmlkZXInKTtcclxuLy8gdmFyIHByb3ZpZGVyO1xyXG4vLyBjb25zdCBydW4gPSBhc3luYyAoKSA9PiB7XHJcblxyXG4vLyAgICAgcHJvdmlkZXIgPSBhd2FpdCBkZXRlY3RFdGhlcmV1bVByb3ZpZGVyKCk7XHJcbi8vIH1cclxuLy8gcnVuKCk7XHJcbi8vIC8vIGNvbnN0IHByb3ZpZGVyID0gbmV3IEhEV2FsbGV0UHJvdmlkZXIoXHJcbi8vIC8vIFx0J2tuZWUgZmVicnVhcnkgaHVtYmxlIGVuam95IG5hcGtpbiBicm90aGVyIHNtYXJ0IHRpbHQgdmlhYmxlIGJhbm5lciBzZXJpZXMgZGVzZXJ0JyxcclxuLy8gLy8gXHQnSFRUUDovLzEyNy4wLjAuMTo3NTQ1J1xyXG4vLyAvLyApO1xyXG5cclxuLy8gLy8gY29uc3Qgd2ViMyA9IG5ldyBXZWIzKHdpbmRvdy53ZWIzLmN1cnJlbnRQcm92aWRlcik7XHJcbi8vIC8vIGlmIChwcm92aWRlcikge1xyXG4vLyAvLyAgICAgLy8gRnJvbSBub3cgb24sIHRoaXMgc2hvdWxkIGFsd2F5cyBiZSB0cnVlOlxyXG4vLyAvLyAgICAgLy8gcHJvdmlkZXIgPT09IHdpbmRvdy5ldGhlcmV1bVxyXG4vLyAvLyAgICAgc3RhcnRBcHAocHJvdmlkZXIpOyAvLyBpbml0aWFsaXplIHlvdXIgYXBwXHJcbi8vIC8vICAgfSBlbHNlIHtcclxuLy8gLy8gICAgIGNvbnNvbGUubG9nKCdQbGVhc2UgaW5zdGFsbCBNZXRhTWFzayEnKTtcclxuLy8gLy8gICB9XHJcblxyXG4vLyBjb25zdCB3ZWIzID0gbmV3IFdlYjMocHJvdmlkZXIpO1xyXG5cclxuLy8gZXhwb3J0IGRlZmF1bHQgd2ViMztcclxuXHJcbi8vIHRoaXMgd2lsbCBkb1xyXG5cclxuaW1wb3J0IFdlYjMgZnJvbSAnd2ViMyc7XHJcblxyXG5sZXQgd2ViMztcclxuXHJcbmlmKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiB3aW5kb3cud2ViMyAhPT0gJ3VuZGVmaW5lZCcpe1xyXG4gICAgLy93ZSBhcmUgaW4gdGhlIGJyb3dzZXIgYW5kIG1ldGFtYXNrIGlzIHJ1bm5pbmdcclxuICAgIHdlYjMgPSBuZXcgV2ViMyh3aW5kb3cud2ViMy5jdXJyZW50UHJvdmlkZXIpO1xyXG59ZWxzZXtcclxuICAgIC8vd0UgQVJFIE9OIFRIRSBicm93c2VyIG9yIHRoZSB1c2VyIGlzIG5vdCBydW5uaW5nIG1ldGFtYXNrXHJcbiAgICBcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2ViMzsiXSwic291cmNlUm9vdCI6IiJ9