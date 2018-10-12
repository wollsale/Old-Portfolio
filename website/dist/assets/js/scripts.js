'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/******/(function (modules) {
    // webpackBootstrap
    /******/ // The module cache
    /******/var installedModules = {};
    /******/
    /******/ // The require function
    /******/function __webpack_require__(moduleId) {
        /******/
        /******/ // Check if module is in cache
        /******/if (installedModules[moduleId]) {
            /******/return installedModules[moduleId].exports;
            /******/
        }
        /******/ // Create a new module (and put it into the cache)
        /******/var module = installedModules[moduleId] = {
            /******/i: moduleId,
            /******/l: false,
            /******/exports: {}
            /******/ };
        /******/
        /******/ // Execute the module function
        /******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/
        /******/ // Flag the module as loaded
        /******/module.l = true;
        /******/
        /******/ // Return the exports of the module
        /******/return module.exports;
        /******/
    }
    /******/
    /******/
    /******/ // expose the modules object (__webpack_modules__)
    /******/__webpack_require__.m = modules;
    /******/
    /******/ // expose the module cache
    /******/__webpack_require__.c = installedModules;
    /******/
    /******/ // define getter function for harmony exports
    /******/__webpack_require__.d = function (exports, name, getter) {
        /******/if (!__webpack_require__.o(exports, name)) {
            /******/Object.defineProperty(exports, name, { enumerable: true, get: getter });
            /******/
        }
        /******/
    };
    /******/
    /******/ // define __esModule on exports
    /******/__webpack_require__.r = function (exports) {
        /******/if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
            /******/Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
            /******/
        }
        /******/Object.defineProperty(exports, '__esModule', { value: true });
        /******/
    };
    /******/
    /******/ // create a fake namespace object
    /******/ // mode & 1: value is a module id, require it
    /******/ // mode & 2: merge all properties of value into the ns
    /******/ // mode & 4: return value when already ns object
    /******/ // mode & 8|1: behave like require
    /******/__webpack_require__.t = function (value, mode) {
        /******/if (mode & 1) value = __webpack_require__(value);
        /******/if (mode & 8) return value;
        /******/if (mode & 4 && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && value && value.__esModule) return value;
        /******/var ns = Object.create(null);
        /******/__webpack_require__.r(ns);
        /******/Object.defineProperty(ns, 'default', { enumerable: true, value: value });
        /******/if (mode & 2 && typeof value != 'string') for (var key in value) {
            __webpack_require__.d(ns, key, function (key) {
                return value[key];
            }.bind(null, key));
        } /******/return ns;
        /******/
    };
    /******/
    /******/ // getDefaultExport function for compatibility with non-harmony modules
    /******/__webpack_require__.n = function (module) {
        /******/var getter = module && module.__esModule ?
        /******/function getDefault() {
            return module['default'];
        } :
        /******/function getModuleExports() {
            return module;
        };
        /******/__webpack_require__.d(getter, 'a', getter);
        /******/return getter;
        /******/
    };
    /******/
    /******/ // Object.prototype.hasOwnProperty.call
    /******/__webpack_require__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
    };
    /******/
    /******/ // __webpack_public_path__
    /******/__webpack_require__.p = "";
    /******/
    /******/
    /******/ // Load entry module and return exports
    /******/return __webpack_require__(__webpack_require__.s = 0);
    /******/
})(
/************************************************************************/
/******/{

    /***/"./website/src/assets/js/contrast.js":
    /*!*******************************************!*\
      !*** ./website/src/assets/js/contrast.js ***!
      \*******************************************/
    /*! exports provided: default */
    /***/function websiteSrcAssetsJsContrastJs(module, __webpack_exports__, __webpack_require__) {

        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */__webpack_exports__["default"] = function () {
            var body = document.querySelector("body");
            var targetSection = document.querySelector(".js-contrast");
            var windowHeight = window.innerHeight;

            if (!targetSection) return;

            function map(num, in_min, in_max, out_min, out_max) {
                return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
            }

            document.addEventListener("scroll", function (e) {
                var difference = targetSection.getBoundingClientRect().top - windowHeight;

                if (difference <= 0 && difference >= -Math.abs(windowHeight)) {
                    var num = difference - -Math.abs(windowHeight);
                    var value = Math.round(map(num, 0, windowHeight, 20, 255));

                    body.style.backgroundColor = 'rgb(' + value + ',' + value + ',' + value + ')';
                }

                if (window.scrollY == 0 || difference >= 0) {
                    body.style.backgroundColor = 'rgb(255, 255, 255)';
                    body.style.transition = 'color .3s linear';
                }
            });
        }();

        /***/
    },

    /***/"./website/src/assets/js/helpers/isDesktop.js":
    /*!****************************************************!*\
      !*** ./website/src/assets/js/helpers/isDesktop.js ***!
      \****************************************************/
    /*! exports provided: default */
    /***/function websiteSrcAssetsJsHelpersIsDesktopJs(module, __webpack_exports__, __webpack_require__) {

        "use strict";

        __webpack_require__.r(__webpack_exports__);
        var isDesktop = function () {
            if (document.documentElement.clientWidth >= 900) return true;
        }();

        /* harmony default export */__webpack_exports__["default"] = isDesktop;

        /***/
    },

    /***/"./website/src/assets/js/homepageHeaderHeight.js":
    /*!*******************************************************!*\
      !*** ./website/src/assets/js/homepageHeaderHeight.js ***!
      \*******************************************************/
    /*! no static exports found */
    /***/function websiteSrcAssetsJsHomepageHeaderHeightJs(module, exports) {

        // import isHomepage from './helpers/isHomepage'
        // import isDesktop from './helpers/isDesktop'

        var homepageHeaderHeight = function () {
            var isHomepage = function isHomepage() {
                var body = document.body;
                if (body.classList.contains('homepage')) return true;
            };

            var isDesktop = function isDesktop() {
                if (document.documentElement.clientWidth >= 900) return true;
            };

            var headerHeight = function headerHeight() {
                var windowHeight = window.innerHeight;
                var body = document.body;

                body.style.height = windowHeight + "px";
            };

            if (isHomepage() && !isDesktop()) headerHeight();
        }();

        /***/
    },

    /***/"./website/src/assets/js/modal/modal.js":
    /*!**********************************************!*\
      !*** ./website/src/assets/js/modal/modal.js ***!
      \**********************************************/
    /*! no static exports found */
    /***/function websiteSrcAssetsJsModalModalJs(module, exports) {

        var modals = document.querySelectorAll('.js-modal');
        var triggers = document.querySelectorAll('.js-modalTrigger');
        var closes = document.querySelectorAll('.js-modalClose');
        var body = document.body;
        var openClass = "js-modal--is-open";
        var noScrollClass = "js-no-scroll";

        var _loop = function _loop(i) {
            var trigger = triggers[i];

            trigger.addEventListener('click', function (e) {
                e.preventDefault();
                var target = trigger.dataset.target;

                for (var _i = 0; _i < modals.length; _i++) {
                    var modal = modals[_i];
                    var id = modal.dataset.id;
                    if (target == id) modal.classList.add(openClass), body.classList.add(noScrollClass);
                }

                for (var _i2 = 0; _i2 < closes.length; _i2++) {
                    var close = closes[_i2];
                    close.addEventListener('click', function (e) {
                        e.preventDefault();

                        for (var _i3 = 0; _i3 < modals.length; _i3++) {
                            var _modal = modals[_i3];
                            if (_modal.classList.contains(openClass)) _modal.classList.remove(openClass), body.classList.remove(noScrollClass);
                        }
                    });
                }
            });
        };

        for (var i = 0; i < triggers.length; i++) {
            _loop(i);
        }

        /***/
    },

    /***/"./website/src/assets/js/pageTransition.js":
    /*!*************************************************!*\
      !*** ./website/src/assets/js/pageTransition.js ***!
      \*************************************************/
    /*! exports provided: pageTransition */
    /***/function websiteSrcAssetsJsPageTransitionJs(module, __webpack_exports__, __webpack_require__) {

        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */__webpack_require__.d(__webpack_exports__, "pageTransition", function () {
            return pageTransition;
        });
        /* harmony import */var _helpers_isDesktop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ./helpers/isDesktop */"./website/src/assets/js/helpers/isDesktop.js");

        var pageTransition = function () {
            var body = document.body;
            var transitionClass = 'js-pageInTransition';
            var links = document.querySelectorAll('a[data-transition]');

            if (!_helpers_isDesktop__WEBPACK_IMPORTED_MODULE_0__["default"]) return;

            var _loop2 = function _loop2(i) {
                var el = links[i];
                var url = el.href;

                el.addEventListener('click', function (e) {
                    e.preventDefault();
                    body.classList.contains(transitionClass) ? body.classList.remove(transitionClass) : body.classList.add(transitionClass);

                    setTimeout(function () {
                        location.href = url;
                    }, 1300);
                });
            };

            for (var i = 0; i < links.length; i++) {
                _loop2(i);
            }
        }();

        /***/
    },

    /***/"./website/src/assets/js/scripts.js":
    /*!******************************************!*\
      !*** ./website/src/assets/js/scripts.js ***!
      \******************************************/
    /*! no exports provided */
    /***/function websiteSrcAssetsJsScriptsJs(module, __webpack_exports__, __webpack_require__) {

        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony import */var _homepageHeaderHeight__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ./homepageHeaderHeight */"./website/src/assets/js/homepageHeaderHeight.js");
        /* harmony import */var _homepageHeaderHeight__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_homepageHeaderHeight__WEBPACK_IMPORTED_MODULE_0__);
        /* harmony import */var _contrast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ./contrast */"./website/src/assets/js/contrast.js");
        /* harmony import */var _pageTransition__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ./pageTransition */"./website/src/assets/js/pageTransition.js");
        /* harmony import */var _modal_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./modal/modal */"./website/src/assets/js/modal/modal.js");
        /* harmony import */var _modal_modal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_modal_modal__WEBPACK_IMPORTED_MODULE_3__);

        // import modalCloseCursor from './modal/modalCloseCursor';

        /***/
    },

    /***/0:
    /*!************************************************!*\
      !*** multi ./website/src/assets/js/scripts.js ***!
      \************************************************/
    /*! no static exports found */
    /***/function _(module, exports, __webpack_require__) {

        module.exports = __webpack_require__( /*! /Users/alexis/Desktop/Bureau/_projects/alexiswollseifen/05/website/src/assets/js/scripts.js */"./website/src/assets/js/scripts.js");

        /***/
    }

    /******/ });
//# sourceMappingURL=scripts.js.map
