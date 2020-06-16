(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{152:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return p}));var n=r(2),a=r(6),o=(r(0),r(161)),c={id:"promises-over-callbacks",title:"Promises over callbacks",sidebar_label:"Promises over callbacks"},s={id:"promises-over-callbacks",title:"Promises over callbacks",description:"For HTTP Requests, our existing solution is to use callbacks:",source:"@site/docs/promises-over-callbacks.md",permalink:"/docs/promises-over-callbacks",sidebar_label:"Promises over callbacks",sidebar:"someSidebar",previous:{title:"Destructuring rest/spread operator",permalink:"/docs/destructuring-rest-or-spread-operator"},next:{title:"Container component (Stateful component)",permalink:"/docs/container-component"}},l=[],i={rightToc:l};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},i,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"For HTTP Requests, our existing solution is to use callbacks:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"request(url, (error, response) => {\n  // handle success or error.\n});\n\ndoSomethingElse();\n")),Object(o.b)("p",null,'A few problems exist with callbacks. One is known as "',Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"http://callbackhell.com",title:"Callback Hell"}),"Callback Hell"),'". A larger problem is decomposition.'),Object(o.b)("p",null,"The callback pattern requires us to specify the task and the callback at the same time. By difference, promises allow us to specify and dispatch the request in one place:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"promise = fetch(url) //fetch is a replacement for XMLHttpRequest\n")),Object(o.b)("p",null,"and then add the callback later, and in a different place:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"promise.then(response => {\n  // handle the response.\n})\n")),Object(o.b)("p",null,"This also allows us to attach multiple handlers to the same task:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"promise.then(response => {\n  // handle the response.\n})\n\npromise.then(response => {\n  // do something else with the response.\n})\n")))}p.isMDXComponent=!0},161:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=a.a.createContext({}),p=function(e){var t=a.a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=p(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),u=p(r),m=n,f=u["".concat(c,".").concat(m)]||u[m]||b[m]||o;return r?a.a.createElement(f,s(s({ref:t},i),{},{components:r})):a.a.createElement(f,s({ref:t},i))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,c[1]=s;for(var i=2;i<o;i++)c[i]=r[i];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);