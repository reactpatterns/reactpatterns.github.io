(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{129:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return g}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),s=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),b=r,g=u["".concat(i,".").concat(b)]||u[b]||d[b]||a;return n?o.a.createElement(g,c(c({ref:t},p),{},{components:n})):o.a.createElement(g,c({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<a;p++)i[p]=n[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},77:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(3),o=n(7),a=(n(0),n(129)),i={id:"logical-and-operator",sidebar_label:"Logical && operator",title:"Logical && Operator",description:"Logical && operator | React Patterns, techniques, tips and tricks in development for Ract developer.",keywords:["logical && operator","react logical && operator","reactpatterns","react patterns","reactjspatterns","reactjs patterns","react","reactjs","react techniques","react tips and tricks"],version:"Logical && operator",image:"/img/reactpatterns-cover.png"},c={unversionedId:"logical-and-operator",id:"logical-and-operator",isDocsHomePage:!1,title:"Logical && Operator",description:"Logical && operator | React Patterns, techniques, tips and tricks in development for Ract developer.",source:"@site/docs/logical-and-operator.md",slug:"/logical-and-operator",permalink:"/docs/logical-and-operator",version:"current",sidebar_label:"Logical && operator",sidebar:"someSidebar",previous:{title:"Ternary Operation",permalink:"/docs/ternary-operation"},next:{title:"Switch Case Operator",permalink:"/docs/switch-case-operator"}},l=[],p={rightToc:l};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"It happens often that you want to render either an element or nothing. You could have a ",Object(a.b)("inlineCode",{parentName:"p"},"LoadingIndicator")," component that returns a loading text or nothing. You can do it in JSX with an if statement or ternary operation."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"function LoadingIndicator({ isLoading }) {\n  if (isLoading) {\n    return (\n      <div>\n        <p>Loading...</p>\n      </div>\n    )\n  } else {\n    return null\n  }\n}\n\nfunction LoadingIndicator({ isLoading }) {\n  return (\n    <div>\n      { isLoading\n          ? <p>Loading...</p>\n          : null\n      }\n    </div>\n  )\n}\n")),Object(a.b)("p",null,"But there is an alternative way that omits the necessity to return null. The logical ",Object(a.b)("inlineCode",{parentName:"p"},"&&")," operator helps you to make conditions that would return null more concise."),Object(a.b)("p",null,"How does it work? In JavaScript a ",Object(a.b)("inlineCode",{parentName:"p"},"true && 'Hello World'")," always evaluates to ",Object(a.b)("inlineCode",{parentName:"p"},"Hello World")," and a ",Object(a.b)("inlineCode",{parentName:"p"},"false && 'Hello World'")," always evaluates to false."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"const result = true && 'Hello World'\nconsole.log(result)\n// Hello World\n\nconst result = false && 'Hello World'\nconsole.log(result)\n// false\n")),Object(a.b)("p",null,"In React you can make use of that behaviour. If the condition is true, the expression after the logical ",Object(a.b)("inlineCode",{parentName:"p"},"&&")," operator will be the output. If the condition is false, React ignores and skips the expression."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"function LoadingIndicator({ isLoading }) {\n  return (\n    <div>\n      { isLoading && <p>Loading...</p> }\n    </div>\n  )\n}\n")),Object(a.b)("p",null,"That's your way to go when you want to return an element or nothing. It makes it even more concise than a ternary operation when you would return null for a condition."))}s.isMDXComponent=!0}}]);