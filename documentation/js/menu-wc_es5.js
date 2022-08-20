"use strict";

function _typeof(obj) {
  "@babel/helpers - typeof";
  return (
    (_typeof =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (obj) {
            return typeof obj;
          }
        : function (obj) {
            return obj &&
              "function" == typeof Symbol &&
              obj.constructor === Symbol &&
              obj !== Symbol.prototype
              ? "symbol"
              : typeof obj;
          }),
    _typeof(obj)
  );
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", { writable: false });
  return Constructor;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: { value: subClass, writable: true, configurable: true },
  });
  Object.defineProperty(subClass, "prototype", { writable: false });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
      result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError(
      "Derived constructors may only return object or undefined"
    );
  }
  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  }
  return self;
}

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;
  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class;
    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }
    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);
      _cache.set(Class, Wrapper);
    }
    function Wrapper() {
      return _construct(Class, arguments, _getPrototypeOf(this).constructor);
    }
    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true,
      },
    });
    return _setPrototypeOf(Wrapper, Class);
  };
  return _wrapNativeSuper(Class);
}

function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct()) {
    _construct = Reflect.construct.bind();
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }
  return _construct.apply(null, arguments);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {})
    );
    return true;
  } catch (e) {
    return false;
  }
}

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf
    ? Object.setPrototypeOf.bind()
    : function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
      };
  return _setPrototypeOf(o, p);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf
    ? Object.getPrototypeOf.bind()
    : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      };
  return _getPrototypeOf(o);
}

customElements.define(
  "compodoc-menu",
  /*#__PURE__*/ (function (_HTMLElement) {
    _inherits(_class, _HTMLElement);

    var _super = _createSuper(_class);

    function _class() {
      var _this;

      _classCallCheck(this, _class);

      _this = _super.call(this);
      _this.isNormalMode = _this.getAttribute("mode") === "normal";
      return _this;
    }

    _createClass(_class, [
      {
        key: "connectedCallback",
        value: function connectedCallback() {
          this.render(this.isNormalMode);
        },
      },
      {
        key: "render",
        value: function render(isNormalMode) {
          var tp = lithtml.html(
            '\n        <nav>\n            <ul class="list">\n                <li class="title">\n                    <a href="index.html" data-type="index-link">ums documentation</a>\n                </li>\n\n                <li class="divider"></li>\n                '
              .concat(
                isNormalMode
                  ? '<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>'
                  : "",
                '\n                <li class="chapter">\n                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>\n                    <ul class="links">\n                        <li class="link">\n                            <a href="overview.html" data-type="chapter-link">\n                                <span class="icon ion-ios-keypad"></span>Overview\n                            </a>\n                        </li>\n                        <li class="link">\n                            <a href="index.html" data-type="chapter-link">\n                                <span class="icon ion-ios-paper"></span>README\n                            </a>\n                        </li>\n                                <li class="link">\n                                    <a href="dependencies.html" data-type="chapter-link">\n                                        <span class="icon ion-ios-list"></span>Dependencies\n                                    </a>\n                                </li>\n                                <li class="link">\n                                    <a href="properties.html" data-type="chapter-link">\n                                        <span class="icon ion-ios-apps"></span>Properties\n                                    </a>\n                                </li>\n                    </ul>\n                </li>\n                    <li class="chapter modules">\n                        <a data-type="chapter-link" href="modules.html">\n                            <div class="menu-toggler linked" data-toggle="collapse" '
              )
              .concat(
                isNormalMode
                  ? 'data-target="#modules-links"'
                  : 'data-target="#xs-modules-links"',
                '>\n                                <span class="icon ion-ios-archive"></span>\n                                <span class="link-name">Modules</span>\n                                <span class="icon ion-ios-arrow-down"></span>\n                            </div>\n                        </a>\n                        <ul class="links collapse " '
              )
              .concat(
                isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"',
                '>\n                            <li class="link">\n                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>\n                                    <li class="chapter inner">\n                                        <div class="simple menu-toggler" data-toggle="collapse" '
              )
              .concat(
                isNormalMode
                  ? 'data-target="#components-links-module-AppModule-62583df425c57b83b753022ac330e0853c377c9942dd9f12adb8c28909549c86e8120c303b94955e97211691a0a193114bafa36cc1a8079a99ce78df2657cf6d"'
                  : 'data-target="#xs-components-links-module-AppModule-62583df425c57b83b753022ac330e0853c377c9942dd9f12adb8c28909549c86e8120c303b94955e97211691a0a193114bafa36cc1a8079a99ce78df2657cf6d"',
                '>\n                                            <span class="icon ion-md-cog"></span>\n                                            <span>Components</span>\n                                            <span class="icon ion-ios-arrow-down"></span>\n                                        </div>\n                                        <ul class="links collapse" '
              )
              .concat(
                isNormalMode
                  ? 'id="components-links-module-AppModule-62583df425c57b83b753022ac330e0853c377c9942dd9f12adb8c28909549c86e8120c303b94955e97211691a0a193114bafa36cc1a8079a99ce78df2657cf6d"'
                  : 'id="xs-components-links-module-AppModule-62583df425c57b83b753022ac330e0853c377c9942dd9f12adb8c28909549c86e8120c303b94955e97211691a0a193114bafa36cc1a8079a99ce78df2657cf6d"',
                '>\n                                            <li class="link">\n                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                            <li class="link">\n                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>\n                            </li>\n                            <li class="link">\n                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>\n                                    <li class="chapter inner">\n                                        <div class="simple menu-toggler" data-toggle="collapse" '
              )
              .concat(
                isNormalMode
                  ? 'data-target="#components-links-module-AuthModule-d3d317e141868f379bf36e0566102da68b08d091c6df28af1152980d981412c8c65e82453b8bd91568e212839d04ea965b5cb3ef1b137e821e48043c83c251e4"'
                  : 'data-target="#xs-components-links-module-AuthModule-d3d317e141868f379bf36e0566102da68b08d091c6df28af1152980d981412c8c65e82453b8bd91568e212839d04ea965b5cb3ef1b137e821e48043c83c251e4"',
                '>\n                                            <span class="icon ion-md-cog"></span>\n                                            <span>Components</span>\n                                            <span class="icon ion-ios-arrow-down"></span>\n                                        </div>\n                                        <ul class="links collapse" '
              )
              .concat(
                isNormalMode
                  ? 'id="components-links-module-AuthModule-d3d317e141868f379bf36e0566102da68b08d091c6df28af1152980d981412c8c65e82453b8bd91568e212839d04ea965b5cb3ef1b137e821e48043c83c251e4"'
                  : 'id="xs-components-links-module-AuthModule-d3d317e141868f379bf36e0566102da68b08d091c6df28af1152980d981412c8c65e82453b8bd91568e212839d04ea965b5cb3ef1b137e821e48043c83c251e4"',
                '>\n                                            <li class="link">\n                                                <a href="components/AuthComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthComponent</a>\n                                            </li>\n                                            <li class="link">\n                                                <a href="components/LoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                            <li class="link">\n                                <a href="modules/AuthRoutingModule.html" data-type="entity-link" >AuthRoutingModule</a>\n                            </li>\n                            <li class="link">\n                                <a href="modules/CoreModule.html" data-type="entity-link" >CoreModule</a>\n                            </li>\n                            <li class="link">\n                                <a href="modules/SharedModule.html" data-type="entity-link" >SharedModule</a>\n                                    <li class="chapter inner">\n                                        <div class="simple menu-toggler" data-toggle="collapse" '
              )
              .concat(
                isNormalMode
                  ? 'data-target="#components-links-module-SharedModule-64efcd31b6bbe55cf08f84864a8aead115f754eeae8c4e629108f73f68eebebf2bbe678a392eb8b5e38916e9f684b8a1382bb5bb23ddca745130c815f03458c4"'
                  : 'data-target="#xs-components-links-module-SharedModule-64efcd31b6bbe55cf08f84864a8aead115f754eeae8c4e629108f73f68eebebf2bbe678a392eb8b5e38916e9f684b8a1382bb5bb23ddca745130c815f03458c4"',
                '>\n                                            <span class="icon ion-md-cog"></span>\n                                            <span>Components</span>\n                                            <span class="icon ion-ios-arrow-down"></span>\n                                        </div>\n                                        <ul class="links collapse" '
              )
              .concat(
                isNormalMode
                  ? 'id="components-links-module-SharedModule-64efcd31b6bbe55cf08f84864a8aead115f754eeae8c4e629108f73f68eebebf2bbe678a392eb8b5e38916e9f684b8a1382bb5bb23ddca745130c815f03458c4"'
                  : 'id="xs-components-links-module-SharedModule-64efcd31b6bbe55cf08f84864a8aead115f754eeae8c4e629108f73f68eebebf2bbe678a392eb8b5e38916e9f684b8a1382bb5bb23ddca745130c815f03458c4"',
                '>\n                                            <li class="link">\n                                                <a href="components/ConfirmModalComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ConfirmModalComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                            <li class="link">\n                                <a href="modules/UserModule.html" data-type="entity-link" >UserModule</a>\n                                    <li class="chapter inner">\n                                        <div class="simple menu-toggler" data-toggle="collapse" '
              )
              .concat(
                isNormalMode
                  ? 'data-target="#components-links-module-UserModule-8e7edc737b3944fbcdd7f55097b2131952585032c578776e720a77d3bd07b3346b60d241087ac47846e1c219e1308a84067dc17a779daec73cd2baf4944b31c2"'
                  : 'data-target="#xs-components-links-module-UserModule-8e7edc737b3944fbcdd7f55097b2131952585032c578776e720a77d3bd07b3346b60d241087ac47846e1c219e1308a84067dc17a779daec73cd2baf4944b31c2"',
                '>\n                                            <span class="icon ion-md-cog"></span>\n                                            <span>Components</span>\n                                            <span class="icon ion-ios-arrow-down"></span>\n                                        </div>\n                                        <ul class="links collapse" '
              )
              .concat(
                isNormalMode
                  ? 'id="components-links-module-UserModule-8e7edc737b3944fbcdd7f55097b2131952585032c578776e720a77d3bd07b3346b60d241087ac47846e1c219e1308a84067dc17a779daec73cd2baf4944b31c2"'
                  : 'id="xs-components-links-module-UserModule-8e7edc737b3944fbcdd7f55097b2131952585032c578776e720a77d3bd07b3346b60d241087ac47846e1c219e1308a84067dc17a779daec73cd2baf4944b31c2"',
                '>\n                                            <li class="link">\n                                                <a href="components/UserAddComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserAddComponent</a>\n                                            </li>\n                                            <li class="link">\n                                                <a href="components/UserComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserComponent</a>\n                                            </li>\n                                            <li class="link">\n                                                <a href="components/UserEditComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserEditComponent</a>\n                                            </li>\n                                            <li class="link">\n                                                <a href="components/UserListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserListComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                            <li class="link">\n                                <a href="modules/UserRoutingModule.html" data-type="entity-link" >UserRoutingModule</a>\n                            </li>\n                </ul>\n                </li>\n                    <li class="chapter">\n                        <div class="simple menu-toggler" data-toggle="collapse" '
              )
              .concat(
                isNormalMode
                  ? 'data-target="#classes-links"'
                  : 'data-target="#xs-classes-links"',
                '>\n                            <span class="icon ion-ios-paper"></span>\n                            <span>Classes</span>\n                            <span class="icon ion-ios-arrow-down"></span>\n                        </div>\n                        <ul class="links collapse " '
              )
              .concat(
                isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"',
                '>\n                            <li class="link">\n                                <a href="classes/AppErrorStateMatcher.html" data-type="entity-link" >AppErrorStateMatcher</a>\n                            </li>\n                            <li class="link">\n                                <a href="classes/Global.html" data-type="entity-link" >Global</a>\n                            </li>\n                        </ul>\n                    </li>\n                        <li class="chapter">\n                            <div class="simple menu-toggler" data-toggle="collapse" '
              )
              .concat(
                isNormalMode
                  ? 'data-target="#injectables-links"'
                  : 'data-target="#xs-injectables-links"',
                '>\n                                <span class="icon ion-md-arrow-round-down"></span>\n                                <span>Injectables</span>\n                                <span class="icon ion-ios-arrow-down"></span>\n                            </div>\n                            <ul class="links collapse " '
              )
              .concat(
                isNormalMode
                  ? 'id="injectables-links"'
                  : 'id="xs-injectables-links"',
                '>\n                                <li class="link">\n                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>\n                                </li>\n                                <li class="link">\n                                    <a href="injectables/BaseHttpService.html" data-type="entity-link" >BaseHttpService</a>\n                                </li>\n                                <li class="link">\n                                    <a href="injectables/UserService.html" data-type="entity-link" >UserService</a>\n                                </li>\n                            </ul>\n                        </li>\n                    <li class="chapter">\n                        <div class="simple menu-toggler" data-toggle="collapse" '
              )
              .concat(
                isNormalMode
                  ? 'data-target="#guards-links"'
                  : 'data-target="#xs-guards-links"',
                '>\n                            <span class="icon ion-ios-lock"></span>\n                            <span>Guards</span>\n                            <span class="icon ion-ios-arrow-down"></span>\n                        </div>\n                        <ul class="links collapse " '
              )
              .concat(
                isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"',
                '>\n                            <li class="link">\n                                <a href="guards/AuthenticationGuard.html" data-type="entity-link" >AuthenticationGuard</a>\n                            </li>\n                        </ul>\n                    </li>\n                    <li class="chapter">\n                        <div class="simple menu-toggler" data-toggle="collapse" '
              )
              .concat(
                isNormalMode
                  ? 'data-target="#interfaces-links"'
                  : 'data-target="#xs-interfaces-links"',
                '>\n                            <span class="icon ion-md-information-circle-outline"></span>\n                            <span>Interfaces</span>\n                            <span class="icon ion-ios-arrow-down"></span>\n                        </div>\n                        <ul class="links collapse " '
              )
              .concat(
                isNormalMode
                  ? ' id="interfaces-links"'
                  : 'id="xs-interfaces-links"',
                '>\n                            <li class="link">\n                                <a href="interfaces/User.html" data-type="entity-link" >User</a>\n                            </li>\n                        </ul>\n                    </li>\n                    <li class="chapter">\n                        <div class="simple menu-toggler" data-toggle="collapse" '
              )
              .concat(
                isNormalMode
                  ? 'data-target="#miscellaneous-links"'
                  : 'data-target="#xs-miscellaneous-links"',
                '>\n                            <span class="icon ion-ios-cube"></span>\n                            <span>Miscellaneous</span>\n                            <span class="icon ion-ios-arrow-down"></span>\n                        </div>\n                        <ul class="links collapse " '
              )
              .concat(
                isNormalMode
                  ? 'id="miscellaneous-links"'
                  : 'id="xs-miscellaneous-links"',
                '>\n                            <li class="link">\n                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>\n                            </li>\n                            <li class="link">\n                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>\n                            </li>\n                        </ul>\n                    </li>\n                        <li class="chapter">\n                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>\n                        </li>\n                    <li class="chapter">\n                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>\n                    </li>\n                    <li class="divider"></li>\n                    <li class="copyright">\n                        Documentation generated using <a href="https://compodoc.app/" target="_blank">\n                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">\n                        </a>\n                    </li>\n            </ul>\n        </nav>\n        '
              )
          );
          this.innerHTML = tp.strings;
        },
      },
    ]);

    return _class;
  })(/*#__PURE__*/ _wrapNativeSuper(HTMLElement))
);
