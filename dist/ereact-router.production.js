!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.EReactRouter=e():t.EReactRouter=e()}(window,function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=3)}([function(t,e,n){"use strict";let r=null;r=n(1),t.exports=r.default||r},function(t,e,n){window,t.exports=function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";n.r(e);var r="@react/__attr_key__",o=[];function u(t,e){this._dirty=!1,this.props=t,this.state=this.state||{},this.context=e||{},this._renderCallbacks=[]}Object.assign(u.prototype,{setState:function(t,e){this.prevState||(this.prevState=this.state),this.state=Object.assign({},this.state,t),e&&this._renderCallbacks.push(e),i(this,"@react/render_async")},forceUpdate:function(t){t&&this._renderCallbacks.push(t),i(this,"@react/force_update")},render:function(){}});var i=function t(e,n,r){var u=e.props,i=e.state,c=e.prevProps||u,l=e.prevState||i,f=e.prevContext||r,s=!!e.base,y="@react/force_update"===n,d=!1;if("@react/render_async"!==n){if(e._dirty=!1,s&&(e.props=c,e.state=l,e.context=f,!y&&e.shouldComponentUpdate&&!1===e.shouldComponentUpdate(u,i)?d=!0:e.componentWillUpdate&&e.componentWillUpdate(u,i),e.props=u,e.state=i,e.context=r),e.prevProps=e.prevState=e.prevContext=null,!d){e.getChildContext&&(r=Object.assign({},r,e.getChildContext()));var h=e.render(),m=null;!function(t){return Array.isArray?Array.isArray(t):"[object Array]"===Object.prototype.toString.call(t)}(h)?m=a(e.base,h,null,r):(m=document.createDocumentFragment(),p(m,h,r)),e.base=m,!s&&e.componentDidMount?e.componentDidMount():s&&e.componentDidUpdate&&e.componentDidUpdate(c,l),m._component=e}for(;e._renderCallbacks.length;)e._renderCallbacks.pop().call(e)}else e._dirty||1!==o.push(e)||(e._dirty=!0,function(t){"function"==typeof Promise?Promise.resolve().then(t):setTimeout(t)}(function(){var e=o.pop();e._dirty&&t(e,"@react/render_sync",r)}))};function c(t){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var a=function(t,e,n,r){var o=l(t,e,r);return n&&o.parentNode!==n&&n.appendChild(o),o},l=function(t,e,n){var r=t;if(null!=e&&"boolean"!=typeof e||(e=""),"string"==typeof e||"number"==typeof e)return t&&t.parentNode&&3===t.nodeType?t.nodeValue!==e&&(t.nodeValue=e):(r=document.createTextNode(e),t&&t.parentNode&&t.parentNode.replaceChild(r,t)),r;if("function"==typeof e.type)return function(t,e,n){var r,o=e.attributes;return null==t||null==t._component||t._component.constructor!==e.type?(r=function(t,e,n){var r;return t.prototype&&t.prototype.render?(r=new t(e,n),u.call(r,e,n)):(r=new u(e,n)).render=function(){return t(e,n)},r.constructor=t,r}(e.type,o,n),t&&t._component&&t._component.componentWillUnmount&&t._component.componentWillUnmount()):r=t._component,function(t,e,n){t.base?t.componentWillReceiveProps&&t.componentWillReceiveProps(e):t.componentWillMount&&t.componentWillMount(),t.prevProps||(t.prevProps=t.props),t.prevContext||(t.prevContext=t.context),t.props=e,i(t,"@react/render_sync",n)}(r,o,n),r.base}(t,e,n);if((!t||t.nodeName.toLowerCase()!==e.type)&&(r=document.createElement(e.type),t)){for(;t.firstChild;)r.appendChild(t.firstChild);t.parentNode&&t.parentNode.replaceChild(r,t)}return p(r,e.children,n),f(r,e.attributes),r},f=function(t,e){var n=t[r]||{};for(name in n)e&&null!=e[name]||null==n[name]||s(t,name,void 0);for(name in e)name in n&&e[name]===("value"===name||"checked"===name?t[name]:n[name])||s(t,name,e[name])},p=function(t,e,n){for(var r=t.childNodes,o=e.length,u=0;u<o;u++){var i=r[u],c=e[u],a=l(i,c,n);i!==a&&(null==i?t.appendChild(a):t.replaceChild(a,i))}if((r&&r.length)>o)for(var f=r.length-1;f>=o;f--)t.removeChild(r[f])},s=function(t,e,n){if(t[r]=t[r]||{},null!=n&&(t[r][e]=n),"className"===e&&(e="class"),"htmlFor"===e&&(e="for"),"key"===e||"children"===e||"innerHTML"===e);else if("ref"===e&&null!=n)"function"==typeof n?n(t):console.error("ref should be an function");else if("style"===e){if("object"===c(n))for(var o in n)t.style[o]="number"==typeof n[o]?"".concat(n[o],"px"):n[o];"string"!=typeof n&&null!=n||(t.style=n)}else if("dangerouslySetInnerHTML"===e)"object"===c(n)&&(t.innerHTML=n.__html);else if(e.startsWith("on")){var u=e.endsWith("Capture"),i=e.toLowerCase().substring(2);n?t.addEventListener(i,y,u):t.removeEventListener(i,y,u),(t._listener||(t._listener={}))[i]=n}else t.setAttribute(e,n)};function y(t){return this._listener[t.type]()}e.default={createElement:function(t,e){for(var n,r=Object.assign({},e),o=arguments.length,u=new Array(o>2?o-2:0),i=2;i<o;i++)u[i-2]=arguments[i];var c=(n=[]).concat.apply(n,u),a=new function(){};return r.children=c,a.type=t,a.attributes=r,a.children=c,a},render:function(t,e){return a(null,t,e,{})},Component:u}}])},function(t,e){t.exports=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n="^"+t.replace(/\/:([^\/]+)/g,function(t,n){return e.push({name:n}),"/([^/]+)"});return new RegExp(n)}},function(t,e,n){"use strict";n.r(e);var r=n(0),o=n.n(r),u=n(2),i=function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"").toString().replace(/\/$/,"")||"/"},c={routes:[],mode:null,config:function(t){return c.mode=t&&t.mode&&"history"===t.mode&&history.pushState?"history":"hash",c},add:function(t,e){return c.routes.push({pathname:i(t),handler:e}),c},remove:function(t){return c.routes.forEach(function(e,n){e.pathname===i(t)&&c.routes.splice(n,1)}),c},match:function(t,e){return u(t).test(e)},current:function(){return"history"===c.mode?location.pathname:location.hash},listen:function(){var t=c.current();return clearInterval(c.interval),c.interval=setInterval(function(){var e=c.current();e!==t&&(t=e,c.routes.filter(function(e){return c.match(e.pathname,t)}).forEach(function(e){return e.handler(t)}))},50),c},flush:function(){return c.routes=[],c.mode=null,c.root="/",c},navigate:function(t){"history"===c.mode?history.pushState(null,null,t):window.location.href=window.location.href.replace(/#(.*)$/,"")+t},getPathParamsParser:function(t){var e=[];return{reg:u(t,e),keys:e}},getPathParams:function(t,e){var n={},r=t.reg,o=t.keys,u=e.match(r);return u.length>1&&(u.shift(),o.forEach(function(t,e){n[t.name]=u[e]})),n}},a=c;function l(t){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function f(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function p(t){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function s(t,e){return(s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function y(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}var d={path:"/"},h=function(t){function e(t){var n;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var r="history"===(n=function(t,e){return!e||"object"!==l(e)&&"function"!=typeof e?y(t):e}(this,p(e).call(this,t))).props.mode?"history":"hash";return a.config({mode:r}).listen(),n.onChangeRouteContext=n.onChangeRouteContext.bind(y(y(n))),n.state={currentRoute:d,onChangeRouteContext:n.onChangeRouteContext},n}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&s(t,e)}(e,o.a.Component),function(t,e,n){e&&f(t.prototype,e),n&&f(t,n)}(e,[{key:"componentDidMount",value:function(){var t=a.current();this.onChangeRouteContext(t)}},{key:"getChildContext",value:function(){return this.state}},{key:"onChangeRouteContext",value:function(t){this.setState({currentRoute:{path:t},onChangeRouteContext:this.onChangeRouteContext})}},{key:"render",value:function(){return this.props.children||null}}]),e}();function m(t){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function b(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function v(t){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function g(t,e){return(g=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function _(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}var C=function(t){function e(t){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(n=function(t,e){return!e||"object"!==m(e)&&"function"!=typeof e?_(t):e}(this,v(e).call(this,t))).handler=null,n.onClickLink=n.onClickLink.bind(_(_(n))),n}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&g(t,e)}(e,o.a.Component),function(t,e,n){e&&b(t.prototype,e),n&&b(t,n)}(e,[{key:"onClickLink",value:function(t){t.preventDefault(),a.navigate(this.props.to)}},{key:"render",value:function(){var t=this.props,e=t.to,n=void 0===e?"":e,r=t.children,u=void 0===r?null:r;return o.a.createElement("a",{href:n,onClick:this.onClickLink},u)}}]),e}();function O(t){return(O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function j(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function x(t,e){return!e||"object"!==O(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function S(t){return(S=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function P(t,e){return(P=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var w=function(t){function e(t){var n;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var r=(n=x(this,S(e).call(this,t))).props.onChangeRouteContext;return a.add(n.props.pathname,function(t){return r(t)}),n}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&P(t,e)}(e,o.a.Component),function(t,e,n){e&&j(t.prototype,e),n&&j(t,n)}(e,[{key:"render",value:function(){var t=this.props,n=t.exact,r=void 0!==n&&n,u=t.currentRoute,i=t.path,c=void 0===i?"":i,l=t.component,f=void 0===l?function(){}:l,p=u.path;if(r?c===p:a.match(c,p)){var s=e.getPathParamsParser(c),y=a.getPathParams(s,p)||{};return o.a.createElement(f,{match:{params:y}})}return null}}]),e}();n.d(e,"BrowserRouter",function(){return h}),n.d(e,"Link",function(){return C}),n.d(e,"Route",function(){return w})}])});