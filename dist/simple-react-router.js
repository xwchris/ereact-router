! function (e, t) {
  "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports["simple-react-router"] = t() : e["simple-react-router"] = t()
}(window, function () {
  return function (e) {
    var t = {};

    function n(r) {
      if (t[r]) return t[r].exports;
      var o = t[r] = {
        i: r,
        l: !1,
        exports: {}
      };
      return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports
    }
    return n.m = e, n.c = t, n.d = function (e, t, r) {
      n.o(e, t) || Object.defineProperty(e, t, {
        enumerable: !0,
        get: r
      })
    }, n.r = function (e) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
      }), Object.defineProperty(e, "__esModule", {
        value: !0
      })
    }, n.t = function (e, t) {
      if (1 & t && (e = n(e)), 8 & t) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var r = Object.create(null);
      if (n.r(r), Object.defineProperty(r, "default", {
          enumerable: !0,
          value: e
        }), 2 & t && "string" != typeof e)
        for (var o in e) n.d(r, o, function (t) {
          return e[t]
        }.bind(null, o));
      return r
    }, n.n = function (e) {
      var t = e && e.__esModule ? function () {
        return e.default
      } : function () {
        return e
      };
      return n.d(t, "a", t), t
    }, n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "", n(n.s = 4)
  }([function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var r = n(1),
      o = function () {
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "").toString().replace(/\/$/, "") || "/"
      },
      u = {
        routes: [],
        mode: null,
        config: function (e) {
          return u.mode = e && e.mode && "history" === e.mode && history.pushState ? "history" : "hash", u
        },
        add: function (e, t) {
          return u.routes.push({
            pathname: o(e),
            handler: t
          }), u
        },
        remove: function (e) {
          return u.routes.forEach(function (t, n) {
            t.pathname === o(e) && u.routes.splice(n, 1)
          }), u
        },
        match: function (e, t) {
          return r(e).test(t)
        },
        current: function () {
          return "history" === u.mode ? location.pathname : location.hash
        },
        listen: function () {
          var e = u.current();
          return clearInterval(u.interval), u.interval = setInterval(function () {
            var t = u.current();
            t !== e && (e = t, u.routes.filter(function (t) {
              return u.match(t.pathname, e)
            }).forEach(function (t) {
              return t.handler(e)
            }))
          }, 50), u
        },
        flush: function () {
          return u.routes = [], u.mode = null, u.root = "/", u
        },
        navigate: function (e) {
          "history" === u.mode ? history.pushState(null, null, e) : window.location.href = window.location.href.replace(/#(.*)$/, "") + e
        },
        getPathParamsParser: function (e) {
          var t = [];
          return {
            reg: r(e, t),
            keys: t
          }
        },
        getPathParams: function (e, t) {
          var n = {},
            r = e.reg,
            o = e.keys,
            u = t.match(r);
          return u.length > 1 && (u.shift(), o.forEach(function (e, t) {
            n[e.name] = u[t]
          })), n
        }
      };
    t.default = u
  }, function (e, t, n) {
    "use strict";
    e.exports = function (e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
        n = "^" + e.replace(/\/:([^\/]+)/g, function (e, n) {
          return t.push({
            name: n
          }), "/([^/]+)"
        });
      return new RegExp(n)
    }
  }, function (e, t, n) {
    "use strict";
    e.exports = n(6)
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.RouteContext = void 0;
    var r = function (e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }(n(2));
    t.RouteContext = r.default.createContext()
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.Route = t.Link = t.BrowserRouter = void 0;
    var r = i(n(5)),
      o = i(n(11)),
      u = i(n(12));

    function i(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    t.BrowserRouter = r.default, t.Link = o.default, t.Route = u.default
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var r = function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
          }
        }
        return function (t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t
        }
      }(),
      o = a(n(2)),
      u = a(n(0)),
      i = n(3);

    function a(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    var c = {
        path: "/"
      },
      l = function (e) {
        function t(e) {
          ! function (e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
          }(this, t);
          var n = function (e, t) {
              if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return !t || "object" != typeof t && "function" != typeof t ? e : t
            }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e)),
            r = "history" === n.props.mode ? "history" : "hash";
          return u.default.config({
            mode: r
          }).listen(), n.onChangeRouteContext = n.onChangeRouteContext.bind(n), n.state = {
            currentRoute: c,
            onChangeRouteContext: n.onChangeRouteContext
          }, n
        }
        return function (e, t) {
          if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
          e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }(t, o.default.Component), r(t, [{
          key: "componentDidMount",
          value: function () {
            var e = u.default.current();
            console.log("current", e), this.onChangeRouteContext(e)
          }
        }, {
          key: "onChangeRouteContext",
          value: function (e) {
            this.setState({
              currentRoute: {
                path: e
              },
              onChangeRouteContext: this.onChangeRouteContext
            })
          }
        }, {
          key: "render",
          value: function () {
            return o.default.createElement(i.RouteContext.Provider, {
              value: this.state
            }, this.props.children)
          }
        }]), t
      }();
    t.default = l
  }, function (e, t, n) {
    "use strict";
    /** @license React v16.4.2
     * react.production.min.js
     *
     * Copyright (c) 2013-present, Facebook, Inc.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      },
      o = n(7),
      u = n(8),
      i = n(9),
      a = n(10),
      c = "function" == typeof Symbol && Symbol.for,
      l = c ? Symbol.for("react.element") : 60103,
      f = c ? Symbol.for("react.portal") : 60106,
      s = c ? Symbol.for("react.fragment") : 60107,
      p = c ? Symbol.for("react.strict_mode") : 60108,
      d = c ? Symbol.for("react.profiler") : 60114,
      y = c ? Symbol.for("react.provider") : 60109,
      h = c ? Symbol.for("react.context") : 60110,
      v = c ? Symbol.for("react.async_mode") : 60111,
      m = c ? Symbol.for("react.forward_ref") : 60112;
    c && Symbol.for("react.timeout");
    var b = "function" == typeof Symbol && Symbol.iterator;

    function g(e) {
      for (var t = arguments.length - 1, n = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, r = 0; r < t; r++) n += "&args[]=" + encodeURIComponent(arguments[r + 1]);
      u(!1, "Minified React error #" + e + "; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ", n)
    }
    var _ = {
      isMounted: function () {
        return !1
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {}
    };

    function j(e, t, n) {
      this.props = e, this.context = t, this.refs = i, this.updater = n || _
    }

    function O() {}

    function w(e, t, n) {
      this.props = e, this.context = t, this.refs = i, this.updater = n || _
    }
    j.prototype.isReactComponent = {}, j.prototype.setState = function (e, t) {
      "object" !== (void 0 === e ? "undefined" : r(e)) && "function" != typeof e && null != e && g("85"), this.updater.enqueueSetState(this, e, t, "setState")
    }, j.prototype.forceUpdate = function (e) {
      this.updater.enqueueForceUpdate(this, e, "forceUpdate")
    }, O.prototype = j.prototype;
    var P = w.prototype = new O;
    P.constructor = w, o(P, j.prototype), P.isPureReactComponent = !0;
    var x = {
        current: null
      },
      C = Object.prototype.hasOwnProperty,
      k = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      };

    function S(e, t, n) {
      var r = void 0,
        o = {},
        u = null,
        i = null;
      if (null != t)
        for (r in void 0 !== t.ref && (i = t.ref), void 0 !== t.key && (u = "" + t.key), t) C.call(t, r) && !k.hasOwnProperty(r) && (o[r] = t[r]);
      var a = arguments.length - 2;
      if (1 === a) o.children = n;
      else if (1 < a) {
        for (var c = Array(a), f = 0; f < a; f++) c[f] = arguments[f + 2];
        o.children = c
      }
      if (e && e.defaultProps)
        for (r in a = e.defaultProps) void 0 === o[r] && (o[r] = a[r]);
      return {
        $$typeof: l,
        type: e,
        key: u,
        ref: i,
        props: o,
        _owner: x.current
      }
    }

    function R(e) {
      return "object" === (void 0 === e ? "undefined" : r(e)) && null !== e && e.$$typeof === l
    }
    var E = /\/+/g,
      M = [];

    function $(e, t, n, r) {
      if (M.length) {
        var o = M.pop();
        return o.result = e, o.keyPrefix = t, o.func = n, o.context = r, o.count = 0, o
      }
      return {
        result: e,
        keyPrefix: t,
        func: n,
        context: r,
        count: 0
      }
    }

    function T(e) {
      e.result = null, e.keyPrefix = null, e.func = null, e.context = null, e.count = 0, 10 > M.length && M.push(e)
    }

    function A(e, t, n, o) {
      var u = void 0 === e ? "undefined" : r(e);
      "undefined" !== u && "boolean" !== u || (e = null);
      var i = !1;
      if (null === e) i = !0;
      else switch (u) {
        case "string":
        case "number":
          i = !0;
          break;
        case "object":
          switch (e.$$typeof) {
            case l:
            case f:
              i = !0
          }
      }
      if (i) return n(o, e, "" === t ? "." + L(e, 0) : t), 1;
      if (i = 0, t = "" === t ? "." : t + ":", Array.isArray(e))
        for (var a = 0; a < e.length; a++) {
          var c = t + L(u = e[a], a);
          i += A(u, c, n, o)
        } else if (null === e || void 0 === e ? c = null : c = "function" == typeof (c = b && e[b] || e["@@iterator"]) ? c : null, "function" == typeof c)
          for (e = c.call(e), a = 0; !(u = e.next()).done;) i += A(u = u.value, c = t + L(u, a++), n, o);
        else "object" === u && g("31", "[object Object]" === (n = "" + e) ? "object with keys {" + Object.keys(e).join(", ") + "}" : n, "");
      return i
    }

    function L(e, t) {
      return "object" === (void 0 === e ? "undefined" : r(e)) && null !== e && null != e.key ? function (e) {
        var t = {
          "=": "=0",
          ":": "=2"
        };
        return "$" + ("" + e).replace(/[=:]/g, function (e) {
          return t[e]
        })
      }(e.key) : t.toString(36)
    }

    function I(e, t) {
      e.func.call(e.context, t, e.count++)
    }

    function q(e, t, n) {
      var r = e.result,
        o = e.keyPrefix;
      e = e.func.call(e.context, t, e.count++), Array.isArray(e) ? N(e, r, n, a.thatReturnsArgument) : null != e && (R(e) && (t = o + (!e.key || t && t.key === e.key ? "" : ("" + e.key).replace(E, "$&/") + "/") + n, e = {
        $$typeof: l,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
      }), r.push(e))
    }

    function N(e, t, n, r, o) {
      var u = "";
      null != n && (u = ("" + n).replace(E, "$&/") + "/"), t = $(t, u, r, o), null == e || A(e, "", q, t), T(t)
    }
    var U = {
        Children: {
          map: function (e, t, n) {
            if (null == e) return e;
            var r = [];
            return N(e, r, null, t, n), r
          },
          forEach: function (e, t, n) {
            if (null == e) return e;
            t = $(null, null, t, n), null == e || A(e, "", I, t), T(t)
          },
          count: function (e) {
            return null == e ? 0 : A(e, "", a.thatReturnsNull, null)
          },
          toArray: function (e) {
            var t = [];
            return N(e, t, null, a.thatReturnsArgument), t
          },
          only: function (e) {
            return R(e) || g("143"), e
          }
        },
        createRef: function () {
          return {
            current: null
          }
        },
        Component: j,
        PureComponent: w,
        createContext: function (e, t) {
          return void 0 === t && (t = null), (e = {
            $$typeof: h,
            _calculateChangedBits: t,
            _defaultValue: e,
            _currentValue: e,
            _currentValue2: e,
            _changedBits: 0,
            _changedBits2: 0,
            Provider: null,
            Consumer: null
          }).Provider = {
            $$typeof: y,
            _context: e
          }, e.Consumer = e
        },
        forwardRef: function (e) {
          return {
            $$typeof: m,
            render: e
          }
        },
        Fragment: s,
        StrictMode: p,
        unstable_AsyncMode: v,
        unstable_Profiler: d,
        createElement: S,
        cloneElement: function (e, t, n) {
          (null === e || void 0 === e) && g("267", e);
          var r = void 0,
            u = o({}, e.props),
            i = e.key,
            a = e.ref,
            c = e._owner;
          if (null != t) {
            void 0 !== t.ref && (a = t.ref, c = x.current), void 0 !== t.key && (i = "" + t.key);
            var f = void 0;
            for (r in e.type && e.type.defaultProps && (f = e.type.defaultProps), t) C.call(t, r) && !k.hasOwnProperty(r) && (u[r] = void 0 === t[r] && void 0 !== f ? f[r] : t[r])
          }
          if (1 === (r = arguments.length - 2)) u.children = n;
          else if (1 < r) {
            f = Array(r);
            for (var s = 0; s < r; s++) f[s] = arguments[s + 2];
            u.children = f
          }
          return {
            $$typeof: l,
            type: e.type,
            key: i,
            ref: a,
            props: u,
            _owner: c
          }
        },
        createFactory: function (e) {
          var t = S.bind(null, e);
          return t.type = e, t
        },
        isValidElement: R,
        version: "16.4.2",
        __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {
          ReactCurrentOwner: x,
          assign: o
        }
      },
      B = {
        default: U
      },
      F = B && U || B;
    e.exports = F.default ? F.default : F
  }, function (e, t, n) {
    "use strict";
    /*
    object-assign
    (c) Sindre Sorhus
    @license MIT
    */
    var r = Object.getOwnPropertySymbols,
      o = Object.prototype.hasOwnProperty,
      u = Object.prototype.propertyIsEnumerable;
    e.exports = function () {
      try {
        if (!Object.assign) return !1;
        var e = new String("abc");
        if (e[5] = "de", "5" === Object.getOwnPropertyNames(e)[0]) return !1;
        for (var t = {}, n = 0; n < 10; n++) t["_" + String.fromCharCode(n)] = n;
        if ("0123456789" !== Object.getOwnPropertyNames(t).map(function (e) {
            return t[e]
          }).join("")) return !1;
        var r = {};
        return "abcdefghijklmnopqrst".split("").forEach(function (e) {
          r[e] = e
        }), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, r)).join("")
      } catch (e) {
        return !1
      }
    }() ? Object.assign : function (e, t) {
      for (var n, i, a = function (e) {
          if (null === e || void 0 === e) throw new TypeError("Object.assign cannot be called with null or undefined");
          return Object(e)
        }(e), c = 1; c < arguments.length; c++) {
        for (var l in n = Object(arguments[c])) o.call(n, l) && (a[l] = n[l]);
        if (r) {
          i = r(n);
          for (var f = 0; f < i.length; f++) u.call(n, i[f]) && (a[i[f]] = n[i[f]])
        }
      }
      return a
    }
  }, function (e, t, n) {
    "use strict";
    var r = function (e) {};
    e.exports = function (e, t, n, o, u, i, a, c) {
      if (r(t), !e) {
        var l;
        if (void 0 === t) l = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
        else {
          var f = [n, o, u, i, a, c],
            s = 0;
          (l = new Error(t.replace(/%s/g, function () {
            return f[s++]
          }))).name = "Invariant Violation"
        }
        throw l.framesToPop = 1, l
      }
    }
  }, function (e, t, n) {
    "use strict";
    e.exports = {}
  }, function (e, t, n) {
    "use strict";

    function r(e) {
      return function () {
        return e
      }
    }
    var o = function () {};
    o.thatReturns = r, o.thatReturnsFalse = r(!1), o.thatReturnsTrue = r(!0), o.thatReturnsNull = r(null), o.thatReturnsThis = function () {
      return this
    }, o.thatReturnsArgument = function (e) {
      return e
    }, e.exports = o
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var r = function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
          }
        }
        return function (t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t
        }
      }(),
      o = i(n(2)),
      u = i(n(0));

    function i(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    var a = function (e) {
      function t(e) {
        ! function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, t);
        var n = function (e, t) {
          if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return !t || "object" != typeof t && "function" != typeof t ? e : t
        }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
        return n.handler = null, n.onClickLink = n.onClickLink.bind(n), n
      }
      return function (e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
      }(t, o.default.Component), r(t, [{
        key: "onClickLink",
        value: function (e) {
          e.preventDefault(), u.default.navigate(this.props.to)
        }
      }, {
        key: "render",
        value: function () {
          var e = this.props,
            t = e.to,
            n = void 0 === t ? "" : t,
            r = e.children,
            u = void 0 === r ? null : r;
          return o.default.createElement("a", {
            href: n,
            onClick: this.onClickLink
          }, u)
        }
      }]), t
    }();
    t.default = a
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var r = i(n(2)),
      o = i(n(0)),
      u = n(3);

    function i(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    var a = null;
    t.default = function (e) {
      var t = e.path,
        n = void 0 === t ? "" : t,
        i = e.component,
        c = void 0 === i ? function () {} : i,
        l = e.exact,
        f = void 0 !== l && l;
      return r.default.createElement(u.RouteContext.Consumer, null, function (e) {
        var t = e.currentRoute,
          u = e.onChangeRouteContext;
        a || (a = u, o.default.add(n, function (e) {
          a(e)
        }));
        var i = t.path;
        if (f ? n === i : o.default.match(n, i)) {
          var l = o.default.getPathParamsParser(n),
            s = o.default.getPathParams(l, i) || {};
          return r.default.createElement(c, {
            match: {
              params: s
            }
          })
        }
        return null
      })
    }
  }])
});
