!function(e){function t(t){for(var o,a,l=t[0],c=t[1],u=t[2],f=0,p=[];f<l.length;f++)a=l[f],r[a]&&p.push(r[a][0]),r[a]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);for(s&&s(t);p.length;)p.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],o=!0,l=1;l<n.length;l++){var c=n[l];0!==r[c]&&(o=!1)}o&&(i.splice(t--,1),e=a(a.s=n[0]))}return e}var o={},r={2:0},i=[];function a(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise(function(t,o){n=r[e]=[t,o]});t.push(n[2]=o);var i,l=document.getElementsByTagName("head")[0],c=document.createElement("script");c.charset="utf-8",c.timeout=120,a.nc&&c.setAttribute("nonce",a.nc),c.src=function(e){return a.p+""+({}[e]||e)+".f2bad00f8385656cd2a6.js"}(e),i=function(t){c.onerror=c.onload=null,clearTimeout(u);var n=r[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src,a=new Error("Loading chunk "+e+" failed.\n("+o+": "+i+")");a.type=o,a.request=i,n[1](a)}r[e]=void 0}};var u=setTimeout(function(){i({type:"timeout",target:c})},12e4);c.onerror=c.onload=i,l.appendChild(c)}return Promise.all(t)},a.m=e,a.c=o,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)a.d(n,o,function(t){return e[t]}.bind(null,o));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/assets/",a.oe=function(e){throw console.error(e),e};var l=window.webpackJsonp=window.webpackJsonp||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var s=c;i.push([460,0]),n()}({131:function(e,t,n){"use strict";var o=n(1),r=n(88),i=n(189),a=n.n(i),l=n(190),c=n.n(l),u=["localStorage","sessionStorage"],s=JSON.parse,f=JSON.stringify,p={getToken:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u[0],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"token";return e===u[0]?localStorage&&localStorage.getItem(t)||null:e===u[1]&&sessionStorage&&sessionStorage.getItem(t)||null},setToken:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:u[0],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"token";!e||e.length<=0||(t===u[0]&&localStorage&&localStorage.setItem(n,e),t===u[1]&&sessionStorage&&sessionStorage.setItem(n,e))},isAuthenticated:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u[0],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"token";return e===u[0]?!(!localStorage||!localStorage.getItem(t)):e===u[1]&&!(!sessionStorage||!sessionStorage.getItem(t))},clearToken:function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"token";return localStorage&&localStorage[e]?(localStorage.removeItem(e),!0):!(!sessionStorage||!sessionStorage[e])&&(sessionStorage.removeItem(e),!0)},getTokenExpirationDate:function(e){if(!e)return new Date(0);var t=a()(e);return t.exp?new Date(1e3*t.exp):new Date(0)},isExpiredToken:function(e){var t=this.getTokenExpirationDate(e),n=new Date,o=c()(n,t);return o},getUserInfo:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u[0],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"userInfo";return e===u[0]?localStorage&&s(localStorage.getItem(t))||null:e===u[1]&&sessionStorage&&s(sessionStorage.getItem(t))||null},setUserInfo:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:u[0],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"userInfo";!e||e.length<=0||(t===u[0]&&localStorage&&localStorage.setItem(n,f(e)),t===u[1]&&sessionStorage&&sessionStorage.setItem(n,f(e)))},clearUserInfo:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"userInfo";localStorage&&localStorage[e]&&localStorage.removeItem(e),sessionStorage&&sessionStorage[e]&&sessionStorage.removeItem(e)},clearAllAppStorage:function(){localStorage&&localStorage.clear(),sessionStorage&&sessionStorage.clear()}},d=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,o,r){var i=t&&t.defaultProps,a=arguments.length-3;if(n||0===a||(n={}),n&&i)for(var l in i)void 0===n[l]&&(n[l]=i[l]);else n||(n=i||{});if(1===a)n.children=r;else if(a>1){for(var c=Array(a),u=0;u<a;u++)c[u]=arguments[u+3];n.children=c}return{$$typeof:e,type:t,key:void 0===o?null:""+o,ref:null,props:n,_owner:null}}}(),v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},y=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();var b=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.checkIsAuthenticated=function(){var e=p.getUserInfo()?p.getUserInfo():null,t=p.getToken()&&function(e){return e&&e.id}(e);return n.setState({isAuthenticated:t}),t},n.checkTokenIsExpired=function(){var e=p.getToken(),t=p.isExpiredToken(e);return n.setState({isExpiredToken:t}),t},n.setToken=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";p.setToken(e),n.setState({token:e,isAuthenticated:!0})},n.setUserInfo=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;"object"===(void 0===e?"undefined":h(e))&&(p.setUserInfo(e),n.setState({user:e}))},n.disconnectUser=function(){return p.clearAllAppStorage(),n.checkIsAuthenticated(),!0},n.state=v({},n.props.initialState,{checkIsAuthenticated:n.checkIsAuthenticated,checkTokenIsExpired:n.checkTokenIsExpired,disconnectUser:n.disconnectUser,setToken:n.setToken,setUserInfo:n.setUserInfo}),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o["Component"]),y(t,[{key:"render",value:function(){var e=this.props.children;return d(r.b,{value:v({},this.state)},void 0," ",e," ")}}]),t}();b.defaultProps={initialState:{token:null,user:null,isAuthenticated:!1,isExpiredToken:!0,lastAuthDate:null}};t.a=b},137:function(e,t,n){"use strict";var o=n(1),r=n.n(o),i=(n(121),n(44)),a=u(["\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n    transform: none;\n  }\n"],["\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n    transform: none;\n  }\n"]),l=u(["\n  ",";\n"],["\n  ",";\n"]),c=u(["\n      opacity: 0;\n      animation-name: ",";\n      animation-timing-function: ease-in;\n      animation-duration: 0.7s;\n      animation-delay: 0s;\n      animation-fill-mode: both;\n    "],["\n      opacity: 0;\n      animation-name: ",";\n      animation-timing-function: ease-in;\n      animation-duration: 0.7s;\n      animation-delay: 0s;\n      animation-fill-mode: both;\n    "]);function u(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var s=Object(i.d)(a),f=i.b.div(l,function(e){return e.viewEnter&&Object(i.a)(c,s)}),p=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,o,r){var i=t&&t.defaultProps,a=arguments.length-3;if(n||0===a||(n={}),n&&i)for(var l in i)void 0===n[l]&&(n[l]=i[l]);else n||(n=i||{});if(1===a)n.children=r;else if(a>1){for(var c=Array(a),u=0;u<a;u++)c[u]=arguments[u+3];n.children=c}return{$$typeof:e,type:t,key:void 0===o?null:""+o,ref:null,props:n,_owner:null}}}(),d=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();var v=function(){return function(e){return function(t){function n(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(n,o.Component),d(n,[{key:"render",value:function(){var t=function(e,t){var n={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n}(this.props,[]);return p(f,{viewEnter:!0},void 0,r.a.createElement(e,t))}}]),n}()}};t.a=v},194:function(e){e.exports={token:"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJkZW1vIiwiaWF0IjoxNTAyMzA3MzU0LCJleHAiOjE3MjMyMzIxNTQsImF1ZCI6ImRlbW8tZGVtbyIsInN1YiI6ImRlbW8iLCJHaXZlbk5hbWUiOiJKb2huIiwiU3VybmFtZSI6IkRvZSIsIkVtYWlsIjoiam9obi5kb2VAZXhhbXBsZS5jb20iLCJSb2xlIjpbIlN1cGVyIGNvb2wgZGV2IiwibWFnaWMgbWFrZXIiXX0.6FjgLCypaqmRp4tDjg_idVKIzQw16e-z_rjA3R94IqQ",user:{id:111,login:"john.doe@fake.mail",firstname:"John",lastname:"Doe",isAdmin:!0}}},40:function(e,t,n){"use strict";n.d(t,"a",function(){return u});var o=n(1),r=n.n(o),i=(n(121),n(88)),a=(n(131),Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}),l=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,o,r){var i=t&&t.defaultProps,a=arguments.length-3;if(n||0===a||(n={}),n&&i)for(var l in i)void 0===n[l]&&(n[l]=i[l]);else n||(n=i||{});if(1===a)n.children=r;else if(a>1){for(var c=Array(a),u=0;u<a;u++)c[u]=arguments[u+3];n.children=c}return{$$typeof:e,type:t,key:void 0===o?null:""+o,ref:null,props:n,_owner:null}}}(),c=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();function u(){return function(e){return function(t){function n(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(n,o["Component"]),c(n,[{key:"render",value:function(){var t=function(e,t){var n={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n}(this.props,[]);return l(i.a,{},void 0,function(n){return r.a.createElement(e,a({},n,t))})}}]),n}()}}},460:function(e,t,n){"use strict";n.r(t);n(195);var o=n(1),r=n.n(o),i=n(31),a=n(182),l=n.n(a),c=n(183),u=n(184),s=n.n(u),f=n(20),p=(n(411),n(44)),d=function(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  html, body {\n    margin: 0;\n    height: 100%;\n    -webkit-font-smoothing: antialiased;\n  }\n\n  * {\n    box-sizing: border-box;\n  }\n\n  a {\n    text-decoration: none;\n    color: inherit;\n    &:hover {\n      text-decoration: none;\n    }\n  }\n"],["\n  html, body {\n    margin: 0;\n    height: 100%;\n    -webkit-font-smoothing: antialiased;\n  }\n\n  * {\n    box-sizing: border-box;\n  }\n\n  a {\n    text-decoration: none;\n    color: inherit;\n    &:hover {\n      text-decoration: none;\n    }\n  }\n"]);var v=function(){return Object(p.c)(d)},h=n(465),y=n(471),b=n(466),m=n(25),g=n.n(m),w=n(188),O=n.n(w),S=(n(121),n(428)),k=n(191),j=n.n(k),_=n(40),P=n(37),x=n(464),I=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,o,r){var i=t&&t.defaultProps,a=arguments.length-3;if(n||0===a||(n={}),n&&i)for(var l in i)void 0===n[l]&&(n[l]=i[l]);else n||(n=i||{});if(1===a)n.children=r;else if(a>1){for(var c=Array(a),u=0;u<a;u++)c[u]=arguments[u+3];n.children=c}return{$$typeof:e,type:t,key:void 0===o?null:""+o,ref:null,props:n,_owner:null}}}(),C=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();function E(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var T=function(e){function t(){var e,n,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,i=Array(r),a=0;a<r;a++)i[a]=arguments[a];return n=o=E(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),o.state={isOpen:!1},o.toggle=function(e){e&&e.preventDefault(),o.setState(function(e){return{isOpen:!prevIsOpened}})},o.handlesNavItemClick=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"/";return function(t){t&&t.preventDefault(),o.props.history.push(e)}},o.handlesDisconnect=function(e){e&&e.preventDefault();var t=o.props,n=t.history;(0,t.disconnectUser)(),n.push("/")},E(o,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o["PureComponent"]),C(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.brand,o=t.navModel.rightLinks,r=t.isAuthenticated,i=this.state.isOpen;return I(P.e,{color:"light",light:!0,expand:"md"},void 0,I(P.f,{href:"/"},void 0,n),I(P.g,{onClick:this.toggle}),I(P.a,{isOpen:i,navbar:!0},void 0,I(P.b,{className:"ml-auto",navbar:!0},void 0,o.map(function(t,n){var o=t.label,r=t.link;t.viewName;return I(P.c,{},""+n,I(P.d,{href:"#",onClick:e.handlesNavItemClick(r)},void 0,o))}),r&&I(P.c,{},void 0,I(P.d,{href:"#",onClick:this.handlesDisconnect},void 0,"Disconnect")))))}}]),t}();T.defaultProps={brand:"brand"};var A=Object(x.a)(T),N=g()(Object(_.a)())(A),D=n(3),L=n.n(D),R=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,o,r){var i=t&&t.defaultProps,a=arguments.length-3;if(n||0===a||(n={}),n&&i)for(var l in i)void 0===n[l]&&(n[l]=i[l]);else n||(n=i||{});if(1===a)n.children=r;else if(a>1){for(var c=Array(a),u=0;u<a;u++)c[u]=arguments[u+3];n.children=c}return{$$typeof:e,type:t,key:void 0===o?null:""+o,ref:null,props:n,_owner:null}}}(),U=R("path",{d:"M256,213.7L256,213.7L256,213.7l174.2,167.2c4.3,4.2,11.4,4.1,15.8-0.2l30.6-29.9c4.4-4.3,4.5-11.3,0.2-15.5L264.1,131.1\r\n      c-2.2-2.2-5.2-3.2-8.1-3c-3-0.1-5.9,0.9-8.1,3L35.2,335.3c-4.3,4.2-4.2,11.2,0.2,15.5L66,380.7c4.4,4.3,11.5,4.4,15.8,0.2L256,213.7z"}),$=function(e){var t=e.color;return R("svg",{width:"24px",height:"24px",viewBox:"0 0 512 512",fill:""+t},void 0,U)};$.defaultProps={color:"#F1F1F1"},$.displayName="UpIcon";var M=$,z=function(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  margin-right: 10px;\n"],["\n  margin-right: 10px;\n"]);var B=p.b.div(z),F=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,o,r){var i=t&&t.defaultProps,a=arguments.length-3;if(n||0===a||(n={}),n&&i)for(var l in i)void 0===n[l]&&(n[l]=i[l]);else n||(n=i||{});if(1===a)n.children=r;else if(a>1){for(var c=Array(a),u=0;u<a;u++)c[u]=arguments[u+3];n.children=c}return{$$typeof:e,type:t,key:void 0===o?null:""+o,ref:null,props:n,_owner:null}}}(),W=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},J="-10px",Y={position:"fixed",right:J,left:"",bottom:"40px",width:"100px",zIndex:10,opacity:.5,backgroundColor:"#4A4A4A"},V=F(B,{},void 0,F(M,{color:"#F1F1F1"})),Z=function(e){var t=e.onClick,n=e.position,o=e.children,r=e.motionStyle,i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"bottom-right",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Y,n=W({},t);switch(e){case"bottom-right":return n.right=J,n.left="",n;case"bottom-left":return n.right="",n.left=J,n;default:return t}}(n,W({},r,Y));return F("button",{style:i,className:L()({btn:!0}),onClick:t},void 0,!o&&V,!!o&&o)};Z.defaultProps={position:"bottom-right"},Z.displayName="BackToTopButton";var X=Z,q=n(93),G=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,o,r){var i=t&&t.defaultProps,a=arguments.length-3;if(n||0===a||(n={}),n&&i)for(var l in i)void 0===n[l]&&(n[l]=i[l]);else n||(n=i||{});if(1===a)n.children=r;else if(a>1){for(var c=Array(a),u=0;u<a;u++)c[u]=arguments[u+3];n.children=c}return{$$typeof:e,type:t,key:void 0===o?null:""+o,ref:null,props:n,_owner:null}}}(),H=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();function Q(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var K=function(e){function t(){var e,n,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,i=Array(r),a=0;a<r;a++)i[a]=arguments[a];return n=o=Q(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),o.state={windowScrollY:0,showBackButton:!1,tickingScollObserve:!1},o.handleWindowScroll=function(){if(window){var e=o.state,t=e.windowScrollY,n=e.tickingScollObserve,r=o.props.minScrollY,i=void 0!==window.pageYOffset?window.pageYOffset:(document.documentElement||document.body.parentNode||document.body).scrollTop;n||window.requestAnimationFrame(function(){if(t!==i){var e=i>=r;o.setState({windowScrollY:i,showBackButton:e})}o.setState({tickingScollObserve:!1})}),o.setState({tickingScollObserve:!0})}},o.handlesOnBackButtonClick=function(e){e&&e.preventDefault();var t=o.props.minScrollY,n=o.state.windowScrollY;window&&n&&n>t&&window.scroll({top:0,left:0,behavior:"smooth"})},o.scrollDone=function(){var e=o.props.onScrollDone;e&&e()},Q(o,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o["Component"]),H(t,[{key:"componentWillMount",value:function(){"undefined"!=typeof window&&window.addEventListener("scroll",this.handleWindowScroll)}},{key:"componentWillUnmount",value:function(){"undefined"!=typeof window&&window.removeEventListener("scroll",this.handleWindowScroll)}},{key:"render",value:function(){var e=this,t=this.state.showBackButton;return G(q.Motion,{style:{x:Object(q.spring)(t?0:120,q.presets.stiff)}},void 0,function(t){var n=t.x;return G(X,{position:"bottom-right",onClick:e.handlesOnBackButtonClick,motionStyle:{WebkitTransform:"translate3d("+n+"px, 0, 0)",transform:"translate3d("+n+"px, 0, 0)"}})})}}]),t}();K.defaultProps={minScrollY:120,onScrollDone:function(){}};var ee=K,te={brand:"OrangaChang Brewing Company",leftLinks:[],rightLinks:[{label:"Home",link:"/"},{label:"Beers",link:"/beers",view:"beers",isRouteBtn:!0},{label:"Protected",link:"/protected",view:"protected",isRouteBtn:!0},{label:"About",link:"/about",view:"about",isRouteBtn:!0},{label:"Disconnect",link:"/login",view:"login",isRouteBtn:!0}]},ne=n(92),oe="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},re=ne.b.sw.path;var ie=function(){void 0!==("undefined"==typeof window?"undefined":oe(window))&&"serviceWorker"in navigator&&window.addEventListener("load",function(){navigator.serviceWorker.register(re).then(function(e){}).catch(function(e){})})},ae=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,o,r){var i=t&&t.defaultProps,a=arguments.length-3;if(n||0===a||(n={}),n&&i)for(var l in i)void 0===n[l]&&(n[l]=i[l]);else n||(n=i||{});if(1===a)n.children=r;else if(a>1){for(var c=Array(a),u=0;u<a;u++)c[u]=arguments[u+3];n.children=c}return{$$typeof:e,type:t,key:void 0===o?null:""+o,ref:null,props:n,_owner:null}}}(),le=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();function ce(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var ue=ae(ee,{minScrollY:40,scrollTo:"appContainer"});var se=function(){return function(e){var t=function(t){function n(){var e,t,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n);for(var r=arguments.length,i=Array(r),a=0;a<r;a++)i[a]=arguments[a];return t=o=ce(this,(e=n.__proto__||Object.getPrototypeOf(n)).call.apply(e,[this].concat(i))),o.state={navModel:te},o.handleLeftNavItemClick=function(e,t){},o.handleRightNavItemClick=function(e,t){},ce(o,t)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(n,o.Component),le(n,[{key:"componentDidMount",value:function(){ie()}},{key:"render",value:function(){var t=this.props,n=(t.history,t.location,t.match,function(e,t){var n={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n}(t,["history","location","match"])),o=this.state.navModel;return ae("div",{id:"appContainer"},void 0,ae(N,{brand:o.brand,navModel:o,handleLeftNavItemClick:this.handleLeftNavItemClick,handleRightNavItemClick:this.handleRightNavItemClick}),ae(j.a,{fluid:!0},void 0,r.a.createElement(e,n)),ue)}}]),n}();return g()(S.a)(t)}},fe=g()()(se),pe=n(62),de=n(437),ve=Object(f.a)(function(){return Promise.all([n.e(0),n.e(3)]).then(n.bind(null,468))},{modules:["../pages/home"]}),he=Object(f.a)(function(){return n.e(4).then(n.bind(null,470))},{modules:["../pages/about"]}),ye=Object(f.a)(function(){return n.e(5).then(n.bind(null,475))},{modules:["../pages/beers"]}),be=Object(f.a)(function(){return n.e(6).then(n.bind(null,473))},{modules:["../pages/protected"]}),me=Object(f.a)(function(){return Promise.all([n.e(0),n.e(1)]).then(n.bind(null,474))},{modules:["../pages/pageNotFound"]}),ge=Object(f.a)(function(){return n.e(7).then(n.bind(null,472))},{modules:["../components/privateRoute"]}),we=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,o,r){var i=t&&t.defaultProps,a=arguments.length-3;if(n||0===a||(n={}),n&&i)for(var l in i)void 0===n[l]&&(n[l]=i[l]);else n||(n=i||{});if(1===a)n.children=r;else if(a>1){for(var c=Array(a),u=0;u<a;u++)c[u]=arguments[u+3];n.children=c}return{$$typeof:e,type:t,key:void 0===o?null:""+o,ref:null,props:n,_owner:null}}}(),Oe=we(pe.a,{exact:!0,path:"/",component:ve}),Se=we(pe.a,{exact:!0,path:"/beers",component:ye}),ke=we(pe.a,{path:"/about",component:he}),je=we(ge,{path:"/protected",component:be}),_e=we(pe.a,{component:me}),Pe=function(){return we(de.a,{},void 0,Oe,Se,ke,je,_e)},xe=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();var Ie=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o["Component"]),xe(t,[{key:"componentDidUpdate",value:function(e){window&&(e.location!==this.props.location&&window.scrollTo(0,0))}},{key:"render",value:function(){return this.props.children}}]),t}(),Ce=Object(S.a)(Ie),Ee=(n(463),n(469)),Te=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,o,r){var i=t&&t.defaultProps,a=arguments.length-3;if(n||0===a||(n={}),n&&i)for(var l in i)void 0===n[l]&&(n[l]=i[l]);else n||(n=i||{});if(1===a)n.children=r;else if(a>1){for(var c=Array(a),u=0;u<a;u++)c[u]=arguments[u+3];n.children=c}return{$$typeof:e,type:t,key:void 0===o?null:""+o,ref:null,props:n,_owner:null}}}(),Ae=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();var Ne=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o["PureComponent"]),Ae(t,[{key:"componentDidMount",value:function(){(0,this.props.disconnectUser)()}},{key:"render",value:function(){return r.a.createElement(h.a,this.props,Te(Ee.a,{to:{pathname:"/login"}}))}}]),t}(),De=Object(x.a)(Ne),Le=g()(Object(_.a)())(De),Re=n(131),Ue=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,o,r){var i=t&&t.defaultProps,a=arguments.length-3;if(n||0===a||(n={}),n&&i)for(var l in i)void 0===n[l]&&(n[l]=i[l]);else n||(n=i||{});if(1===a)n.children=r;else if(a>1){for(var c=Array(a),u=0;u<a;u++)c[u]=arguments[u+3];n.children=c}return{$$typeof:e,type:t,key:void 0===o?null:""+o,ref:null,props:n,_owner:null}}}(),$e=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();var Me=g()(fe())(Pe),ze=O()(),Be=Object(f.a)(function(){return Promise.resolve().then(n.bind(null,463))},{modules:["./pages/login"]}),Fe=Object(f.a)(function(){return Promise.all([n.e(0),n.e(1)]).then(n.bind(null,474))},{modules:["./pages/pageNotFound"]}),We=Ue(h.a,{exact:!0,path:"/login",component:Be}),Je=Ue(Me,{}),Ye=Ue(Le,{path:"/logout"}),Ve=Ue(h.a,{component:Fe}),Ze=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o["Component"]),$e(t,[{key:"render",value:function(){return Ue(y.a,{history:ze},void 0,Ue(Re.a,{},void 0,Ue(Ce,{},void 0,Ue(b.a,{},void 0,We,Je,Ye,Ve))))}}]),t}(),Xe=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,o,r){var i=t&&t.defaultProps,a=arguments.length-3;if(n||0===a||(n={}),n&&i)for(var l in i)void 0===n[l]&&(n[l]=i[l]);else n||(n=i||{});if(1===a)n.children=r;else if(a>1){for(var c=Array(a),u=0;u<a;u++)c[u]=arguments[u+3];n.children=c}return{$$typeof:e,type:t,key:void 0===o?null:""+o,ref:null,props:n,_owner:null}}}(),qe=document.getElementById("root");s.a.polyfill(),window.__forceSmoothScrollPolyfill__=!0,window.snapSaveState=function(){return Object(f.b)()},v(),l()();!function(e){var t=Xe(c.AppContainer,{},void 0,Xe(e,{})),n=function(){return t},o=Xe(n,{});qe.hasChildNodes()?Object(f.c)().then(function(){Object(i.hydrate)(o,qe)}):Object(i.render)(Xe(n,{}),qe)}(Ze)},463:function(e,t,n){"use strict";n.r(t);var o=n(25),r=n.n(o),i=n(1),a=n(192),l=n.n(a),c=n(136),u=n.n(c),s=n(135),f=n.n(s),p=n(64),d=n.n(p),v=n(92),h=(n(193),function(){return window.location.origin||(window.location.origin=window.location.protocol+"//"+window.location.hostname+(window.location.port?":"+window.location.port:"")),window.location.origin}),y=n(194),b=n(40),m=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,o,r){var i=t&&t.defaultProps,a=arguments.length-3;if(n||0===a||(n={}),n&&i)for(var l in i)void 0===n[l]&&(n[l]=i[l]);else n||(n=i||{});if(1===a)n.children=r;else if(a>1){for(var c=Array(a),u=0;u<a;u++)c[u]=arguments[u+3];n.children=c}return{$$typeof:e,type:t,key:void 0===o?null:""+o,ref:null,props:n,_owner:null}}}(),g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},w=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();function O(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){return function o(r,i){try{var a=t[r](i),l=a.value}catch(e){return void n(e)}if(!a.done)return Promise.resolve(l).then(function(e){o("next",e)},function(e){o("throw",e)});e(l)}("next")})}}function S(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var k=m("legend",{},void 0,"Login"),j=m("label",{htmlFor:"inputEmail",className:"col-lg-2 control-label"},void 0,"Email"),_=m("label",{htmlFor:"inputPassword",className:"col-lg-2 control-label"},void 0,"Password"),P=m("span",{},void 0,"login in...  ",m("i",{className:"fa fa-spinner fa-pulse fa-fw"})),x=m("span",{},void 0,"Login"),I=function(e){function t(){var e,n,o,r=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var i=arguments.length,a=Array(i),c=0;c<i;c++)a[c]=arguments[c];return n=o=S(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(a))),o.state={email:"",password:"",isLogging:!1},o.disconnectUser=function(){(0,o.props.disconnectUser)()},o.handlesOnEmailChange=function(e){e.preventDefault(),o.setState({email:e.target.value.trim()})},o.handlesOnPasswordChange=function(e){e.preventDefault(),o.setState({password:e.target.value.trim()})},o.handlesOnLogin=function(){var e=O(regeneratorRuntime.mark(function e(t){var n,i,a,l,c,u,s,f,p,d,v,h;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t&&t.preventDefault(),n=o.props,i=n.history,a=n.setToken,l=n.setUserInfo,c=o.state,u=c.email,s=c.password,f={login:u,password:s},e.prev=4,o.setState({isLogging:!0}),e.next=8,o.logUser(f);case 8:p=e.sent,d=p.data,v=d.token,h=d.user,a(v),l(h),o.setState({isLogging:!1}),i.push({pathname:"/"}),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(4),o.setState({isLogging:!1});case 19:case"end":return e.stop()}},e,r,[[4,16]])}));return function(t){return e.apply(this,arguments)}}(),o.logUser=function(){var e=O(regeneratorRuntime.mark(function e(){var t,n,o,i,a,c,u=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t="login",n=h()+"/"+t,o="post",i={},a={credentials:"same-origin",data:{login:u,password:s}},!v.a.DEV_MODE){e.next=7;break}return e.abrupt("return",new Promise(function(e){return setTimeout(e({data:y}),3e3)}));case 7:return e.prev=7,e.next=10,l.a.request(g({method:o,url:n,withCredentials:!0,headers:g({Accept:"application/json","Content-Type":"application/json","Acces-Control-Allow-Origin":"*"},i)},a));case 10:return c=e.sent,e.abrupt("return",Promise.resolve(c));case 14:return e.prev=14,e.t0=e.catch(7),e.abrupt("return",Promise.reject(e.t0));case 17:case"end":return e.stop()}},e,r,[[7,14]])}));return function(){return e.apply(this,arguments)}}(),o.goHome=function(e){e&&e.preventDefault(),o.props.history.push({pathname:"/"})},S(o,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i["PureComponent"]),w(t,[{key:"componentDidMount",value:function(){this.disconnectUser()}},{key:"render",value:function(){var e=this.state,t=e.email,n=e.password,o=e.isLogging;return m("div",{className:"content"},void 0,m(f.a,{},void 0,m(d.a,{md:{size:4,offset:4},xs:{size:10,offset:1}},void 0,m("form",{className:"form-horizontal",noValidate:!0},void 0,m("fieldset",{},void 0,k,m("div",{className:"form-group"},void 0,j,m(d.a,{lg:12},void 0,m("input",{type:"text",className:"form-control",id:"inputEmail",placeholder:"Email",autoComplete:"username email",value:t,onChange:this.handlesOnEmailChange}))),m("div",{className:"form-group"},void 0,_,m(d.a,{lg:12},void 0,m("input",{type:"password",className:"form-control",id:"inputPassword",placeholder:"Password",autoComplete:"current-password",value:n,onChange:this.handlesOnPasswordChange}))),m("div",{className:"form-group"},void 0,m(d.a,{lg:{size:12}},void 0,m(u.a,{className:"login-button btn-block",color:"primary",disabled:o,onClick:this.handlesOnLogin},void 0,o?P:x))))))),m(f.a,{},void 0,m(d.a,{md:{size:4,offset:4},xs:{size:10,offset:1}},void 0,m("div",{className:"pull-right"},void 0,m(u.a,{className:"btn-block",onClick:this.goHome},void 0,"back to home")))))}}]),t}(),C=n(137);t.default=r()(Object(C.a)(),Object(b.a)())(I)},88:function(e,t,n){"use strict";n.d(t,"b",function(){return a}),n.d(t,"a",function(){return l});var o=n(1),r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},i=Object(o.createContext)(r({},{isAuthenticated:!1,lastAuthDate:null})),a=i.Provider,l=i.Consumer},92:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var o={DEV_MODE:!0,sw:{path:"public/assets/sw.js"}};t.b=o}});