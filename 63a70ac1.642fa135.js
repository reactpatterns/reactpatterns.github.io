(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{126:function(e,n,r){"use strict";r.d(n,"a",(function(){return p})),r.d(n,"b",(function(){return h}));var t=r(0),o=r.n(t);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),u=function(e){var n=o.a.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):c(c({},n),e)),r},p=function(e){var n=u(e.components);return o.a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},f=o.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(r),f=t,h=p["".concat(i,".").concat(f)]||p[f]||d[f]||a;return r?o.a.createElement(h,c(c({ref:n},l),{},{components:r})):o.a.createElement(h,c({ref:n},l))}));function h(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var a=r.length,i=new Array(a);i[0]=f;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:t,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},84:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return i})),r.d(n,"metadata",(function(){return c})),r.d(n,"rightToc",(function(){return s})),r.d(n,"default",(function(){return u}));var t=r(3),o=r(7),a=(r(0),r(126)),i={id:"higher-order-function",sidebar_label:"Higher-Order function",title:"Higher-Order Function",description:"Higher-Order function | React Patterns, techniques, tips and tricks in development for Ract developer.",keywords:["higher-order function","higher order function","reactpatterns","react patterns","reactjspatterns","reactjs patterns","react","reactjs","react techniques","react tips and tricks"],version:"Higher-Order functions",image:"/img/reactpatterns-cover.png"},c={unversionedId:"higher-order-function",id:"higher-order-function",isDocsHomePage:!1,title:"Higher-Order Function",description:"Higher-Order function | React Patterns, techniques, tips and tricks in development for Ract developer.",source:"@site/docs/higher-order-function.md",slug:"/higher-order-function",permalink:"/docs/higher-order-function",version:"current",sidebar_label:"Higher-Order function",sidebar:"someSidebar",previous:{title:"Stateless Function (Presentational Component)",permalink:"/docs/stateless-function"},next:{title:"Higher-Order Component",permalink:"/docs/higher-order-component"}},s=[{value:"What is Higher-Order Function?",id:"what-is-higher-order-function",children:[]},{value:"For examples",id:"for-examples",children:[]}],l={rightToc:s};function u(e){var n=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(t.a)({},l,r,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"what-is-higher-order-function"},"What is Higher-Order Function?"),Object(a.b)("p",null,"Functions that operate on other functions, either by taking them as arguments or by returning them are called higher-order functions."),Object(a.b)("h2",{id:"for-examples"},"For examples"),Object(a.b)("p",null,"We can have functions that create new functions."),Object(a.b)("pre",null,Object(a.b)("code",Object(t.a)({parentName:"pre"},{className:"language-js"}),"function greaterThan(n) {\n  return m => m > n\n}\n\nconst greaterThan10 = greaterThan(10)\n\nconsole.log(greaterThan10(11))\n// true\n")),Object(a.b)("p",null,"We can have functions that change other functions."),Object(a.b)("pre",null,Object(a.b)("code",Object(t.a)({parentName:"pre"},{className:"language-js"}),'function noisy(f) {\n  return (...args) => {\n    console.log("calling with", args)\n    const result = f(...args)\n    console.log("called with", args, ", returned", result)\n    return result\n  }\n}\nnoisy(Math.min)(3, 2, 1)\n// calling with [3, 2, 1]\n// called with [3, 2, 1] , returned 1\n')),Object(a.b)("p",null,"We can even write functions that provide new types of control flow."),Object(a.b)("pre",null,Object(a.b)("code",Object(t.a)({parentName:"pre"},{className:"language-js"}),'function unless(test, then) {\n  if (!test) then()\n}\n\nrepeat(3, n => {\n  unless(n % 2 == 1, () => {\n    console.log(n, "is even")\n  })\n})\n// 0 is even\n// 2 is even\n')),Object(a.b)("p",null,"There is a built-in array method, forEach, that provides something like a for/of loop as a higher-order function."),Object(a.b)("pre",null,Object(a.b)("code",Object(t.a)({parentName:"pre"},{className:"language-js"}),'["A", "B"].forEach(l => console.log(l));\n// A\n// B\n')))}u.isMDXComponent=!0}}]);