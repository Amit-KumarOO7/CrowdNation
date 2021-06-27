self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./node_modules/@metamask/detect-provider/dist/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/@metamask/detect-provider/dist/index.js ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";

/**
 * Returns a Promise that resolves to the value of window.ethereum if it is
 * set within the given timeout, or null.
 * The Promise will not reject, but an error will be thrown if invalid options
 * are provided.
 *
 * @param options - Options bag.
 * @param options.mustBeMetaMask - Whether to only look for MetaMask providers.
 * Default: false
 * @param options.silent - Whether to silence console errors. Does not affect
 * thrown errors. Default: false
 * @param options.timeout - Milliseconds to wait for 'ethereum#initialized' to
 * be dispatched. Default: 3000
 * @returns A Promise that resolves with the Provider if it is detected within
 * given timeout, otherwise null.
 */
function detectEthereumProvider({ mustBeMetaMask = false, silent = false, timeout = 3000, } = {}) {
    _validateInputs();
    let handled = false;
    return new Promise((resolve) => {
        if (window.ethereum) {
            handleEthereum();
        }
        else {
            window.addEventListener('ethereum#initialized', handleEthereum, { once: true });
            setTimeout(() => {
                handleEthereum();
            }, timeout);
        }
        function handleEthereum() {
            if (handled) {
                return;
            }
            handled = true;
            window.removeEventListener('ethereum#initialized', handleEthereum);
            const { ethereum } = window;
            if (ethereum && (!mustBeMetaMask || ethereum.isMetaMask)) {
                resolve(ethereum);
            }
            else {
                const message = mustBeMetaMask && ethereum
                    ? 'Non-MetaMask window.ethereum detected.'
                    : 'Unable to detect window.ethereum.';
                !silent && console.error('@metamask/detect-provider:', message);
                resolve(null);
            }
        }
    });
    function _validateInputs() {
        if (typeof mustBeMetaMask !== 'boolean') {
            throw new Error(`@metamask/detect-provider: Expected option 'mustBeMetaMask' to be a boolean.`);
        }
        if (typeof silent !== 'boolean') {
            throw new Error(`@metamask/detect-provider: Expected option 'silent' to be a boolean.`);
        }
        if (typeof timeout !== 'number') {
            throw new Error(`@metamask/detect-provider: Expected option 'timeout' to be a number.`);
        }
    }
}
module.exports = detectEthereumProvider;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQVlBOzs7Ozs7Ozs7Ozs7Ozs7R0FlRztBQUNILFNBQVMsc0JBQXNCLENBQUMsRUFDOUIsY0FBYyxHQUFHLEtBQUssRUFDdEIsTUFBTSxHQUFHLEtBQUssRUFDZCxPQUFPLEdBQUcsSUFBSSxHQUNmLEdBQUcsRUFBRTtJQUVKLGVBQWUsRUFBRSxDQUFDO0lBRWxCLElBQUksT0FBTyxHQUFHLEtBQUssQ0FBQztJQUVwQixPQUFPLElBQUksT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUU7UUFDN0IsSUFBSSxNQUFNLENBQUMsUUFBUSxFQUFFO1lBRW5CLGNBQWMsRUFBRSxDQUFDO1NBRWxCO2FBQU07WUFFTCxNQUFNLENBQUMsZ0JBQWdCLENBQ3JCLHNCQUFzQixFQUN0QixjQUFjLEVBQ2QsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQ2YsQ0FBQztZQUVGLFVBQVUsQ0FBQyxHQUFHLEVBQUU7Z0JBQ2QsY0FBYyxFQUFFLENBQUM7WUFDbkIsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1NBQ2I7UUFFRCxTQUFTLGNBQWM7WUFFckIsSUFBSSxPQUFPLEVBQUU7Z0JBQ1gsT0FBTzthQUNSO1lBQ0QsT0FBTyxHQUFHLElBQUksQ0FBQztZQUVmLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxzQkFBc0IsRUFBRSxjQUFjLENBQUMsQ0FBQztZQUVuRSxNQUFNLEVBQUUsUUFBUSxFQUFFLEdBQUcsTUFBTSxDQUFDO1lBRTVCLElBQUksUUFBUSxJQUFJLENBQUMsQ0FBQyxjQUFjLElBQUksUUFBUSxDQUFDLFVBQVUsQ0FBQyxFQUFFO2dCQUN4RCxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDbkI7aUJBQU07Z0JBRUwsTUFBTSxPQUFPLEdBQUcsY0FBYyxJQUFJLFFBQVE7b0JBQ3hDLENBQUMsQ0FBQyx3Q0FBd0M7b0JBQzFDLENBQUMsQ0FBQyxtQ0FBbUMsQ0FBQztnQkFFeEMsQ0FBQyxNQUFNLElBQUksT0FBTyxDQUFDLEtBQUssQ0FBQyw0QkFBNEIsRUFBRSxPQUFPLENBQUMsQ0FBQztnQkFDaEUsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ2Y7UUFDSCxDQUFDO0lBQ0gsQ0FBQyxDQUFDLENBQUM7SUFFSCxTQUFTLGVBQWU7UUFDdEIsSUFBSSxPQUFPLGNBQWMsS0FBSyxTQUFTLEVBQUU7WUFDdkMsTUFBTSxJQUFJLEtBQUssQ0FBQyw4RUFBOEUsQ0FBQyxDQUFDO1NBQ2pHO1FBQ0QsSUFBSSxPQUFPLE1BQU0sS0FBSyxTQUFTLEVBQUU7WUFDL0IsTUFBTSxJQUFJLEtBQUssQ0FBQyxzRUFBc0UsQ0FBQyxDQUFDO1NBQ3pGO1FBQ0QsSUFBSSxPQUFPLE9BQU8sS0FBSyxRQUFRLEVBQUU7WUFDL0IsTUFBTSxJQUFJLEtBQUssQ0FBQyxzRUFBc0UsQ0FBQyxDQUFDO1NBQ3pGO0lBQ0gsQ0FBQztBQUNILENBQUM7QUFsRkQsaUJBQVMsc0JBQXNCLENBQUMifQ==

/***/ }),

/***/ "./etherum/web3.js":
/*!*************************!*\
  !*** ./etherum/web3.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var E_BlockChain_crowdnation_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var E_BlockChain_crowdnation_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(E_BlockChain_crowdnation_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var E_BlockChain_crowdnation_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _metamask_detect_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @metamask/detect-provider */ "./node_modules/@metamask/detect-provider/dist/index.js");
/* harmony import */ var _metamask_detect_provider__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_metamask_detect_provider__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! web3 */ "./node_modules/web3/lib/index.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);


// import Web3 from 'web3';
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
  var provider;

  var run = /*#__PURE__*/function () {
    var _ref = (0,E_BlockChain_crowdnation_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/E_BlockChain_crowdnation_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
      return E_BlockChain_crowdnation_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _metamask_detect_provider__WEBPACK_IMPORTED_MODULE_2___default()();

            case 2:
              provider = _context.sent;

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function run() {
      return _ref.apply(this, arguments);
    };
  }();

  run();
  web3 = new (web3__WEBPACK_IMPORTED_MODULE_3___default())(provider); //web3 = new Web3(window.web3.currentProvider);
} else {
  //wE ARE ON THE server or the user is not running metamask
  var _provider = new (web3__WEBPACK_IMPORTED_MODULE_3___default().providers.HttpProvider)('HTTP://127.0.0.1:7545');

  web3 = new (web3__WEBPACK_IMPORTED_MODULE_3___default())(_provider);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtZXRhbWFzay9kZXRlY3QtcHJvdmlkZXIvZGlzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vZXRoZXJ1bS93ZWIzLmpzIl0sIm5hbWVzIjpbIndlYjMiLCJ3aW5kb3ciLCJwcm92aWRlciIsInJ1biIsImRldGVjdEV0aGVyZXVtUHJvdmlkZXIiLCJXZWIzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLDBEQUEwRCxLQUFLO0FBQ2hHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkVBQTZFLGFBQWE7QUFDMUY7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixXQUFXO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsK3lEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUQzQztDQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTs7QUFFQTtBQUVBLElBQUlBLElBQUo7O0FBRUEsSUFBRyxTQUFpQyxPQUFPQyxNQUFNLENBQUNELElBQWQsS0FBdUIsV0FBM0QsRUFBdUU7QUFDbkU7QUFDQSxNQUFJRSxRQUFKOztBQUNBLE1BQU1DLEdBQUc7QUFBQSxtUUFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFDU0MsZ0VBQXNCLEVBRC9COztBQUFBO0FBQ1JGLHNCQURROztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQUhDLEdBQUc7QUFBQTtBQUFBO0FBQUEsS0FBVDs7QUFHQUEsS0FBRztBQUVISCxNQUFJLEdBQUcsSUFBSUssNkNBQUosQ0FBU0gsUUFBVCxDQUFQLENBUm1FLENBU25FO0FBQ0gsQ0FWRCxNQVVLO0FBQ0Q7QUFDQSxNQUFNQSxTQUFRLEdBQUcsSUFBSUcsb0VBQUosQ0FDYix1QkFEYSxDQUFqQjs7QUFHQUwsTUFBSSxHQUFHLElBQUlLLDZDQUFKLENBQVNILFNBQVQsQ0FBUDtBQUNIOztBQUVELCtEQUFlRixJQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4Ljg5N2RkNjBiYTU2ZTM1ZTMyMzhlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbi8qKlxuICogUmV0dXJucyBhIFByb21pc2UgdGhhdCByZXNvbHZlcyB0byB0aGUgdmFsdWUgb2Ygd2luZG93LmV0aGVyZXVtIGlmIGl0IGlzXG4gKiBzZXQgd2l0aGluIHRoZSBnaXZlbiB0aW1lb3V0LCBvciBudWxsLlxuICogVGhlIFByb21pc2Ugd2lsbCBub3QgcmVqZWN0LCBidXQgYW4gZXJyb3Igd2lsbCBiZSB0aHJvd24gaWYgaW52YWxpZCBvcHRpb25zXG4gKiBhcmUgcHJvdmlkZWQuXG4gKlxuICogQHBhcmFtIG9wdGlvbnMgLSBPcHRpb25zIGJhZy5cbiAqIEBwYXJhbSBvcHRpb25zLm11c3RCZU1ldGFNYXNrIC0gV2hldGhlciB0byBvbmx5IGxvb2sgZm9yIE1ldGFNYXNrIHByb3ZpZGVycy5cbiAqIERlZmF1bHQ6IGZhbHNlXG4gKiBAcGFyYW0gb3B0aW9ucy5zaWxlbnQgLSBXaGV0aGVyIHRvIHNpbGVuY2UgY29uc29sZSBlcnJvcnMuIERvZXMgbm90IGFmZmVjdFxuICogdGhyb3duIGVycm9ycy4gRGVmYXVsdDogZmFsc2VcbiAqIEBwYXJhbSBvcHRpb25zLnRpbWVvdXQgLSBNaWxsaXNlY29uZHMgdG8gd2FpdCBmb3IgJ2V0aGVyZXVtI2luaXRpYWxpemVkJyB0b1xuICogYmUgZGlzcGF0Y2hlZC4gRGVmYXVsdDogMzAwMFxuICogQHJldHVybnMgQSBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCB0aGUgUHJvdmlkZXIgaWYgaXQgaXMgZGV0ZWN0ZWQgd2l0aGluXG4gKiBnaXZlbiB0aW1lb3V0LCBvdGhlcndpc2UgbnVsbC5cbiAqL1xuZnVuY3Rpb24gZGV0ZWN0RXRoZXJldW1Qcm92aWRlcih7IG11c3RCZU1ldGFNYXNrID0gZmFsc2UsIHNpbGVudCA9IGZhbHNlLCB0aW1lb3V0ID0gMzAwMCwgfSA9IHt9KSB7XG4gICAgX3ZhbGlkYXRlSW5wdXRzKCk7XG4gICAgbGV0IGhhbmRsZWQgPSBmYWxzZTtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgaWYgKHdpbmRvdy5ldGhlcmV1bSkge1xuICAgICAgICAgICAgaGFuZGxlRXRoZXJldW0oKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdldGhlcmV1bSNpbml0aWFsaXplZCcsIGhhbmRsZUV0aGVyZXVtLCB7IG9uY2U6IHRydWUgfSk7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBoYW5kbGVFdGhlcmV1bSgpO1xuICAgICAgICAgICAgfSwgdGltZW91dCk7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gaGFuZGxlRXRoZXJldW0oKSB7XG4gICAgICAgICAgICBpZiAoaGFuZGxlZCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGhhbmRsZWQgPSB0cnVlO1xuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2V0aGVyZXVtI2luaXRpYWxpemVkJywgaGFuZGxlRXRoZXJldW0pO1xuICAgICAgICAgICAgY29uc3QgeyBldGhlcmV1bSB9ID0gd2luZG93O1xuICAgICAgICAgICAgaWYgKGV0aGVyZXVtICYmICghbXVzdEJlTWV0YU1hc2sgfHwgZXRoZXJldW0uaXNNZXRhTWFzaykpIHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKGV0aGVyZXVtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBtdXN0QmVNZXRhTWFzayAmJiBldGhlcmV1bVxuICAgICAgICAgICAgICAgICAgICA/ICdOb24tTWV0YU1hc2sgd2luZG93LmV0aGVyZXVtIGRldGVjdGVkLidcbiAgICAgICAgICAgICAgICAgICAgOiAnVW5hYmxlIHRvIGRldGVjdCB3aW5kb3cuZXRoZXJldW0uJztcbiAgICAgICAgICAgICAgICAhc2lsZW50ICYmIGNvbnNvbGUuZXJyb3IoJ0BtZXRhbWFzay9kZXRlY3QtcHJvdmlkZXI6JywgbWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShudWxsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGZ1bmN0aW9uIF92YWxpZGF0ZUlucHV0cygpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBtdXN0QmVNZXRhTWFzayAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEBtZXRhbWFzay9kZXRlY3QtcHJvdmlkZXI6IEV4cGVjdGVkIG9wdGlvbiAnbXVzdEJlTWV0YU1hc2snIHRvIGJlIGEgYm9vbGVhbi5gKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIHNpbGVudCAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEBtZXRhbWFzay9kZXRlY3QtcHJvdmlkZXI6IEV4cGVjdGVkIG9wdGlvbiAnc2lsZW50JyB0byBiZSBhIGJvb2xlYW4uYCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiB0aW1lb3V0ICE9PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBAbWV0YW1hc2svZGV0ZWN0LXByb3ZpZGVyOiBFeHBlY3RlZCBvcHRpb24gJ3RpbWVvdXQnIHRvIGJlIGEgbnVtYmVyLmApO1xuICAgICAgICB9XG4gICAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBkZXRlY3RFdGhlcmV1bVByb3ZpZGVyO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYVc1a1pYZ3Vhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOXpjbU12YVc1a1pYZ3VkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanRCUVZsQk96czdPenM3T3pzN096czdPenM3UjBGbFJ6dEJRVU5JTEZOQlFWTXNjMEpCUVhOQ0xFTkJRVU1zUlVGRE9VSXNZMEZCWXl4SFFVRkhMRXRCUVVzc1JVRkRkRUlzVFVGQlRTeEhRVUZITEV0QlFVc3NSVUZEWkN4UFFVRlBMRWRCUVVjc1NVRkJTU3hIUVVObUxFZEJRVWNzUlVGQlJUdEpRVVZLTEdWQlFXVXNSVUZCUlN4RFFVRkRPMGxCUld4Q0xFbEJRVWtzVDBGQlR5eEhRVUZITEV0QlFVc3NRMEZCUXp0SlFVVndRaXhQUVVGUExFbEJRVWtzVDBGQlR5eERRVUZETEVOQlFVTXNUMEZCVHl4RlFVRkZMRVZCUVVVN1VVRkROMElzU1VGQlNTeE5RVUZOTEVOQlFVTXNVVUZCVVN4RlFVRkZPMWxCUlc1Q0xHTkJRV01zUlVGQlJTeERRVUZETzFOQlJXeENPMkZCUVUwN1dVRkZUQ3hOUVVGTkxFTkJRVU1zWjBKQlFXZENMRU5CUTNKQ0xITkNRVUZ6UWl4RlFVTjBRaXhqUVVGakxFVkJRMlFzUlVGQlJTeEpRVUZKTEVWQlFVVXNTVUZCU1N4RlFVRkZMRU5CUTJZc1EwRkJRenRaUVVWR0xGVkJRVlVzUTBGQlF5eEhRVUZITEVWQlFVVTdaMEpCUTJRc1kwRkJZeXhGUVVGRkxFTkJRVU03V1VGRGJrSXNRMEZCUXl4RlFVRkZMRTlCUVU4c1EwRkJReXhEUVVGRE8xTkJRMkk3VVVGRlJDeFRRVUZUTEdOQlFXTTdXVUZGY2tJc1NVRkJTU3hQUVVGUExFVkJRVVU3WjBKQlExZ3NUMEZCVHp0aFFVTlNPMWxCUTBRc1QwRkJUeXhIUVVGSExFbEJRVWtzUTBGQlF6dFpRVVZtTEUxQlFVMHNRMEZCUXl4dFFrRkJiVUlzUTBGQlF5eHpRa0ZCYzBJc1JVRkJSU3hqUVVGakxFTkJRVU1zUTBGQlF6dFpRVVZ1UlN4TlFVRk5MRVZCUVVVc1VVRkJVU3hGUVVGRkxFZEJRVWNzVFVGQlRTeERRVUZETzFsQlJUVkNMRWxCUVVrc1VVRkJVU3hKUVVGSkxFTkJRVU1zUTBGQlF5eGpRVUZqTEVsQlFVa3NVVUZCVVN4RFFVRkRMRlZCUVZVc1EwRkJReXhGUVVGRk8yZENRVU40UkN4UFFVRlBMRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVU03WVVGRGJrSTdhVUpCUVUwN1owSkJSVXdzVFVGQlRTeFBRVUZQTEVkQlFVY3NZMEZCWXl4SlFVRkpMRkZCUVZFN2IwSkJRM2hETEVOQlFVTXNRMEZCUXl4M1EwRkJkME03YjBKQlF6RkRMRU5CUVVNc1EwRkJReXh0UTBGQmJVTXNRMEZCUXp0blFrRkZlRU1zUTBGQlF5eE5RVUZOTEVsQlFVa3NUMEZCVHl4RFFVRkRMRXRCUVVzc1EwRkJReXcwUWtGQk5FSXNSVUZCUlN4UFFVRlBMRU5CUVVNc1EwRkJRenRuUWtGRGFFVXNUMEZCVHl4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8yRkJRMlk3VVVGRFNDeERRVUZETzBsQlEwZ3NRMEZCUXl4RFFVRkRMRU5CUVVNN1NVRkZTQ3hUUVVGVExHVkJRV1U3VVVGRGRFSXNTVUZCU1N4UFFVRlBMR05CUVdNc1MwRkJTeXhUUVVGVExFVkJRVVU3V1VGRGRrTXNUVUZCVFN4SlFVRkpMRXRCUVVzc1EwRkJReXc0UlVGQk9FVXNRMEZCUXl4RFFVRkRPMU5CUTJwSE8xRkJRMFFzU1VGQlNTeFBRVUZQTEUxQlFVMHNTMEZCU3l4VFFVRlRMRVZCUVVVN1dVRkRMMElzVFVGQlRTeEpRVUZKTEV0QlFVc3NRMEZCUXl4elJVRkJjMFVzUTBGQlF5eERRVUZETzFOQlEzcEdPMUZCUTBRc1NVRkJTU3hQUVVGUExFOUJRVThzUzBGQlN5eFJRVUZSTEVWQlFVVTdXVUZETDBJc1RVRkJUU3hKUVVGSkxFdEJRVXNzUTBGQlF5eHpSVUZCYzBVc1EwRkJReXhEUVVGRE8xTkJRM3BHTzBsQlEwZ3NRMEZCUXp0QlFVTklMRU5CUVVNN1FVRnNSa1FzYVVKQlFWTXNjMEpCUVhOQ0xFTkJRVU1pZlE9PSIsIi8vIGltcG9ydCBXZWIzIGZyb20gJ3dlYjMnO1xyXG5pbXBvcnQgZGV0ZWN0RXRoZXJldW1Qcm92aWRlciBmcm9tICdAbWV0YW1hc2svZGV0ZWN0LXByb3ZpZGVyJztcclxuLy8gLy9jb25zdCBIRFdhbGxldFByb3ZpZGVyID0gcmVxdWlyZSgndHJ1ZmZsZS1oZHdhbGxldC1wcm92aWRlcicpO1xyXG4vLyB2YXIgcHJvdmlkZXI7XHJcbi8vIGNvbnN0IHJ1biA9IGFzeW5jICgpID0+IHtcclxuXHJcbi8vICAgICBwcm92aWRlciA9IGF3YWl0IGRldGVjdEV0aGVyZXVtUHJvdmlkZXIoKTtcclxuLy8gfVxyXG4vLyBydW4oKTtcclxuLy8gLy8gY29uc3QgcHJvdmlkZXIgPSBuZXcgSERXYWxsZXRQcm92aWRlcihcclxuLy8gLy8gXHQna25lZSBmZWJydWFyeSBodW1ibGUgZW5qb3kgbmFwa2luIGJyb3RoZXIgc21hcnQgdGlsdCB2aWFibGUgYmFubmVyIHNlcmllcyBkZXNlcnQnLFxyXG4vLyAvLyBcdCdIVFRQOi8vMTI3LjAuMC4xOjc1NDUnXHJcbi8vIC8vICk7XHJcblxyXG4vLyAvLyBjb25zdCB3ZWIzID0gbmV3IFdlYjMod2luZG93LndlYjMuY3VycmVudFByb3ZpZGVyKTtcclxuLy8gLy8gaWYgKHByb3ZpZGVyKSB7XHJcbi8vIC8vICAgICAvLyBGcm9tIG5vdyBvbiwgdGhpcyBzaG91bGQgYWx3YXlzIGJlIHRydWU6XHJcbi8vIC8vICAgICAvLyBwcm92aWRlciA9PT0gd2luZG93LmV0aGVyZXVtXHJcbi8vIC8vICAgICBzdGFydEFwcChwcm92aWRlcik7IC8vIGluaXRpYWxpemUgeW91ciBhcHBcclxuLy8gLy8gICB9IGVsc2Uge1xyXG4vLyAvLyAgICAgY29uc29sZS5sb2coJ1BsZWFzZSBpbnN0YWxsIE1ldGFNYXNrIScpO1xyXG4vLyAvLyAgIH1cclxuXHJcbi8vIGNvbnN0IHdlYjMgPSBuZXcgV2ViMyhwcm92aWRlcik7XHJcblxyXG4vLyBleHBvcnQgZGVmYXVsdCB3ZWIzO1xyXG5cclxuLy8gdGhpcyB3aWxsIGRvXHJcblxyXG5pbXBvcnQgV2ViMyBmcm9tICd3ZWIzJztcclxuXHJcbmxldCB3ZWIzO1xyXG5cclxuaWYodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHdpbmRvdy53ZWIzICE9PSAndW5kZWZpbmVkJyl7XHJcbiAgICAvL3dlIGFyZSBpbiB0aGUgYnJvd3NlciBhbmQgbWV0YW1hc2sgaXMgcnVubmluZ1xyXG4gICAgbGV0IHByb3ZpZGVyO1xyXG4gICAgY29uc3QgcnVuID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIHByb3ZpZGVyID0gYXdhaXQgZGV0ZWN0RXRoZXJldW1Qcm92aWRlcigpO1xyXG4gICAgfVxyXG4gICAgcnVuKCk7XHJcbiAgICBcclxuICAgIHdlYjMgPSBuZXcgV2ViMyhwcm92aWRlcik7XHJcbiAgICAvL3dlYjMgPSBuZXcgV2ViMyh3aW5kb3cud2ViMy5jdXJyZW50UHJvdmlkZXIpO1xyXG59ZWxzZXtcclxuICAgIC8vd0UgQVJFIE9OIFRIRSBzZXJ2ZXIgb3IgdGhlIHVzZXIgaXMgbm90IHJ1bm5pbmcgbWV0YW1hc2tcclxuICAgIGNvbnN0IHByb3ZpZGVyID0gbmV3IFdlYjMucHJvdmlkZXJzLkh0dHBQcm92aWRlcihcclxuICAgICAgICAnSFRUUDovLzEyNy4wLjAuMTo3NTQ1J1xyXG4gICAgKTtcclxuICAgIHdlYjMgPSBuZXcgV2ViMyhwcm92aWRlcik7IFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3ZWIzOyJdLCJzb3VyY2VSb290IjoiIn0=