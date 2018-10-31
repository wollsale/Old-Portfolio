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

    /***/"./website/src/assets/js/cursor.js":
    /*!*****************************************!*\
      !*** ./website/src/assets/js/cursor.js ***!
      \*****************************************/
    /*! no exports provided */
    /***/function websiteSrcAssetsJsCursorJs(module, __webpack_exports__, __webpack_require__) {

        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony import */var _helpers_isDesktop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ./helpers/isDesktop */"./website/src/assets/js/helpers/isDesktop.js");

        var cursorHandling = function cursorHandling() {

            var myCursor = document.querySelector('.js-cursor');
            var myCursorCircle = document.querySelector('.js-cursor > circle');

            if (!myCursor || !_helpers_isDesktop__WEBPACK_IMPORTED_MODULE_0__["default"]) return;

            var linksArray = document.querySelectorAll('a');

            for (var i = 0; i < linksArray.length; i++) {
                linksArray[i].addEventListener('mouseover', function (e) {
                    myCursor.classList.add('js-cursor--is-hovering');
                });
                linksArray[i].addEventListener('mouseleave', function (e) {
                    myCursor.classList.remove('js-cursor--is-hovering');
                });
            }

            document.addEventListener('mousemove', function (e) {
                var moveX = e.clientX - myCursor.clientHeight / 2 + 1;
                var moveY = e.clientY - myCursor.clientWidth / 2 + 1;

                myCursor.style.top = moveY + 'px';
                myCursor.style.left = moveX + 'px';
            });
        };

        cursorHandling();

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

    /***/"./website/src/assets/js/helpers/map.js":
    /*!**********************************************!*\
      !*** ./website/src/assets/js/helpers/map.js ***!
      \**********************************************/
    /*! exports provided: default */
    /***/function websiteSrcAssetsJsHelpersMapJs(module, __webpack_exports__, __webpack_require__) {

        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */__webpack_require__.d(__webpack_exports__, "default", function () {
            return map;
        });
        function map(num, in_min, in_max, out_min, out_max) {
            return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
        }

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

            window.addEventListener('resize', function () {
                console.log('resizing...');
                if (isHomepage() && !isDesktop()) headerHeight();
            });

            if (isHomepage() && !isDesktop()) headerHeight();
        }();

        /***/
    },

    /***/"./website/src/assets/js/modal/modal.js":
    /*!**********************************************!*\
      !*** ./website/src/assets/js/modal/modal.js ***!
      \**********************************************/
    /*! no exports provided */
    /***/function websiteSrcAssetsJsModalModalJs(module, __webpack_exports__, __webpack_require__) {

        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony import */var _helpers_isDesktop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ../helpers/isDesktop */"./website/src/assets/js/helpers/isDesktop.js");

        var modal = function () {
            var modals = document.querySelectorAll('.js-modal');
            var triggers = document.querySelectorAll('.js-modalTrigger');
            var closes = document.querySelectorAll('.js-modalClose');
            var cursor = document.querySelector('.js-cursor');
            var body = document.body;
            var openClass = "js-modal--is-open";
            var noScrollClass = "js-no-scroll";
            var closeCursor = "js-cursor--is-close";

            var _loop = function _loop(i) {
                var trigger = triggers[i];

                trigger.addEventListener('click', function (e) {
                    e.preventDefault();
                    var target = trigger.dataset.target;

                    var _loop2 = function _loop2(_i) {
                        var modal = modals[_i];
                        var id = modal.dataset.id;

                        // Get height
                        modal.style.height = window.innerHeight + "px";

                        if (target == id) modal.classList.add(openClass), body.classList.add(noScrollClass), cursor.classList.add(closeCursor), modal.querySelector('.about__content').scrollTo(0, 0);

                        if (_helpers_isDesktop__WEBPACK_IMPORTED_MODULE_0__["default"]) {
                            if (modal.classList.contains(openClass)) modal.addEventListener('click', function (e) {
                                modal.classList.remove(openClass);
                                cursor.classList.remove(closeCursor);
                                body.classList.remove(noScrollClass);
                            });
                        }
                    };

                    for (var _i = 0; _i < modals.length; _i++) {
                        _loop2(_i);
                    }

                    for (var _i2 = 0; _i2 < closes.length; _i2++) {
                        var close = closes[_i2];
                        close.addEventListener('click', function (e) {
                            e.preventDefault();

                            for (var _i3 = 0; _i3 < modals.length; _i3++) {
                                var _modal = modals[_i3];
                                if (_modal.classList.contains(openClass)) _modal.classList.remove(openClass), body.classList.remove(noScrollClass), cursor.classList.remove(closeCursor);
                            }
                        });
                    }
                });
            };

            for (var i = 0; i < triggers.length; i++) {
                _loop(i);
            }
        }();

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

            var _loop3 = function _loop3(i) {
                var el = links[i];
                var url = el.href;

                el.addEventListener('click', function (e) {
                    e.preventDefault();
                    e.stopImmediatePropagation();
                    body.classList.contains(transitionClass) ? body.classList.remove(transitionClass) : body.classList.add(transitionClass);

                    setTimeout(function () {
                        location.href = url;
                    }, 1300);
                });
            };

            for (var i = 0; i < links.length; i++) {
                _loop3(i);
            }
        }();

        /***/
    },

    /***/"./website/src/assets/js/sandbox.js":
    /*!******************************************!*\
      !*** ./website/src/assets/js/sandbox.js ***!
      \******************************************/
    /*! exports provided: default */
    /***/function websiteSrcAssetsJsSandboxJs(module, __webpack_exports__, __webpack_require__) {

        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony import */var _helpers_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ./helpers/map */"./website/src/assets/js/helpers/map.js");
        /* map(num, in_min, in_max, out_min, out_max) */

        /* harmony default export */__webpack_exports__["default"] = function () {

            var body = document.querySelector('body');
            var sections = document.querySelectorAll('.js-contrast');
            var windowHeight = window.innerHeight;

            // map()
            var r = 238;
            var g = 245;
            var b = 255;

            // in()
            function backgroundColorIn(section) {
                var difference = windowHeight - section.top;

                var rEvolutiveValue = Math.round(Object(_helpers_map__WEBPACK_IMPORTED_MODULE_0__["default"])(difference, 0, windowHeight, 255, r));
                var gEvolutiveValue = Math.round(Object(_helpers_map__WEBPACK_IMPORTED_MODULE_0__["default"])(difference, 0, windowHeight, 255, g));
                var bEvolutiveValue = Math.round(Object(_helpers_map__WEBPACK_IMPORTED_MODULE_0__["default"])(difference, 0, windowHeight, 255, b));

                body.style.backgroundColor = 'rgb(' + rEvolutiveValue + ', ' + gEvolutiveValue + ', ' + bEvolutiveValue + ')';
            }
            // out()
            function backgroundColorOut(section) {
                var difference = windowHeight - section.bottom;

                var rEvolutiveValue = Math.round(Object(_helpers_map__WEBPACK_IMPORTED_MODULE_0__["default"])(difference, 0, 250, r, 255));
                var gEvolutiveValue = Math.round(Object(_helpers_map__WEBPACK_IMPORTED_MODULE_0__["default"])(difference, 0, 250, g, 255));
                var bEvolutiveValue = Math.round(Object(_helpers_map__WEBPACK_IMPORTED_MODULE_0__["default"])(difference, 0, 250, b, 255));

                body.style.backgroundColor = 'rgb(' + rEvolutiveValue + ', ' + gEvolutiveValue + ', ' + bEvolutiveValue + ')';
            }

            // ForEach
            sections.forEach(function (section) {
                document.addEventListener('scroll', function () {
                    section.top = section.getBoundingClientRect().top;
                    section.bottom = section.getBoundingClientRect().bottom;

                    var showIn = section.top <= windowHeight && section.top >= 0;
                    var showOut = section.bottom <= windowHeight && section.bottom >= windowHeight - 250;

                    if (showIn) {
                        backgroundColorIn(section);
                    }
                    if (showOut) {
                        backgroundColorOut(section);
                    }
                });
            });
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
        /* harmony import */var _pageTransition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ./pageTransition */"./website/src/assets/js/pageTransition.js");
        /* harmony import */var _modal_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ./modal/modal */"./website/src/assets/js/modal/modal.js");
        /* harmony import */var _cursor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./cursor */"./website/src/assets/js/cursor.js");
        /* harmony import */var _sandbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ./sandbox */"./website/src/assets/js/sandbox.js");

        // import contrast from './contrast';
        // import lazyLoading from './lazyLoading';


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
