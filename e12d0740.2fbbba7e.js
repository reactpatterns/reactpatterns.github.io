(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{151:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return a})),t.d(r,"metadata",(function(){return c})),t.d(r,"rightToc",(function(){return i})),t.d(r,"default",(function(){return p}));var n=t(2),o=(t(0),t(162));const a={id:"destructuring-rest-or-spread-operator",title:"Destructuring rest/spread operator",sidebar_label:"Destructuring rest/spread operator"},c={id:"destructuring-rest-or-spread-operator",title:"Destructuring rest/spread operator",description:"The ... rest operator gathers the rest of the items in the props object argument and puts them in the variable rest.",source:"@site/docs/destructuring-rest-or-spread-operator.md",permalink:"/docs/destructuring-rest-or-spread-operator",sidebar_label:"Destructuring rest/spread operator",sidebar:"someSidebar",previous:{title:"Nested destructuring",permalink:"/docs/nested-destructuring"},next:{title:"Promises over callbacks",permalink:"/docs/promises-over-callbacks"}},i=[],s={rightToc:i};function p({components:e,...r}){return Object(o.b)("wrapper",Object(n.a)({},s,r,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"...")," rest operator gathers the rest of the items in the props object argument and puts them in the variable rest."),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"...")," rest in the JSX is actually JSX syntax for spreading the props in the the rest object into individual props."),Object(o.b)("p",null,"Without using rest/spread:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"function Modal(props) {\n  var onClick = props.onClick\n  var show = props.show\n  var backdrop = props.backdrop\n\n  return (\n    <Modal show={show} backdrop={backdrop}>\n      <Button onClick={onClick}>Next</Button>\n    </Modal>\n  )\n}\n")),Object(o.b)("p",null,"Here is an example destructuring rest/spread operator:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"function Modal({ onClick, ...rest }) {\n  return (\n    <Modal {...rest}>\n      <Button onClick={onClick}>Next</Button>\n    </Modal>\n  )\n}\n")))}p.isMDXComponent=!0},162:function(e,r,t){"use strict";t.d(r,"a",(function(){return l})),t.d(r,"b",(function(){return f}));var n=t(0),o=t.n(n);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=o.a.createContext({}),u=function(e){var r=o.a.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},l=function(e){var r=u(e.components);return o.a.createElement(p.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},b=o.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=u(t),b=n,f=l["".concat(c,".").concat(b)]||l[b]||d[b]||a;return t?o.a.createElement(f,i(i({ref:r},p),{},{components:t})):o.a.createElement(f,i({ref:r},p))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,c=new Array(a);c[0]=b;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var p=2;p<a;p++)c[p]=t[p];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);