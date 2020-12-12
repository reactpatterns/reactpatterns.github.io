(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{126:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return m}));var r=n(0),c=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var s=c.a.createContext({}),p=function(e){var t=c.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return c.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},f=c.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),l=p(n),f=r,m=l["".concat(o,".").concat(f)]||l[f]||d[f]||a;return n?c.a.createElement(m,i(i({ref:t},s),{},{components:n})):c.a.createElement(m,i({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=f;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var s=2;s<a;s++)o[s]=n[s];return c.a.createElement.apply(null,o)}return c.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},96:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return p}));var r=n(3),c=n(7),a=(n(0),n(126)),o={id:"destructuring-function-argument",sidebar_label:"Destructuring function argument",title:"Destructuring Function Argument",description:"Destructuring function argument | React Patterns, techniques, tips and tricks in development for Ract developer.",keywords:["destructuring function argument","child component","reactpatterns","react patterns","reactjspatterns","reactjs patterns","react","reactjs","react techniques","react tips and tricks"],version:"Destructuring function argument",image:"/img/reactpatterns-cover.png"},i={unversionedId:"destructuring-function-argument",id:"destructuring-function-argument",isDocsHomePage:!1,title:"Destructuring Function Argument",description:"Destructuring function argument | React Patterns, techniques, tips and tricks in development for Ract developer.",source:"@site/docs/destructuring-function-argument.md",slug:"/destructuring-function-argument",permalink:"/docs/destructuring-function-argument",version:"current",sidebar_label:"Destructuring function argument",sidebar:"someSidebar",previous:{title:"What is Destructuring?",permalink:"/docs/destructuring"},next:{title:"Nested Destructuring",permalink:"/docs/nested-destructuring"}},u=[{value:"For example",id:"for-example",children:[]}],s={rightToc:u};function p(e){var t=e.components,n=Object(c.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Destructuring can be applied to function arguments that are objects or arrays."),Object(a.b)("h2",{id:"for-example"},"For example"),Object(a.b)("p",null,"Without destructuring."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"function Modal(props) {\n  var onClickNext = props.onClickNext\n  var step = props.step\n\n  return (\n    <div>\n      <h1>Step {step} - Name</h1>\n      <Button onClick={onClickNext}>Next</Button>\n    </div>\n  )\n}\n")),Object(a.b)("p",null,"This function expects a single object as an argument and it is destructured into onClickNext and step."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"function ModalName({ onClickNext, step }) {\n  return (\n    <div>\n      <h1>Step {step} - Name</h1>\n      <Button onClick={onClickNext}>Next</Button>\n    </div>\n  )\n}\n")))}p.isMDXComponent=!0}}]);