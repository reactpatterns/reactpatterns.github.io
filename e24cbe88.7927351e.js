(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{114:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(7),o=(n(0),n(126)),c={id:"switch-case-operator",sidebar_label:"Switch case operator",title:"Switch Case Operator",description:"Switch case operator | React Patterns, techniques, tips and tricks in development for Ract developer.",keywords:["switch case operator","react switch case operator","reactpatterns","react patterns","reactjspatterns","reactjs patterns","react","reactjs","react techniques","react tips and tricks"],version:"Switch case operator",image:"/img/reactpatterns-cover.png"},i={unversionedId:"switch-case-operator",id:"switch-case-operator",isDocsHomePage:!1,title:"Switch Case Operator",description:"Switch case operator | React Patterns, techniques, tips and tricks in development for Ract developer.",source:"@site/docs/switch-case-operator.md",slug:"/switch-case-operator",permalink:"/docs/switch-case-operator",version:"current",sidebar_label:"Switch case operator",sidebar:"someSidebar",previous:{title:"Logical && Operator",permalink:"/docs/logical-and-operator"},next:{title:"Conditional Rendering with Enum",permalink:"/docs/conditional-rendering-with-enum"}},s=[],p={rightToc:s};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Now there might be cases where you have multiple conditional renderings. The conditional rendering could apply based on different states."),Object(o.b)("p",null,"Let's imagine a notification component that can render an error, warning or info component based on the input state. You can use a switch case operator to handle the conditional rendering of these multiple states."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"function Notification({ text, state }) {\n  switch(state) {\n    case 'info':\n      return <Info text={text} />\n    case 'warning':\n      return <Warning text={text} />\n    case 'error':\n      return <Error text={text} />\n    default:\n      return null\n  }\n}\n")),Object(o.b)("p",null,"Please note that you always have to use the ",Object(o.b)("inlineCode",{parentName:"p"},"default")," for the switch case operator. In React a component has always to return an element or ",Object(o.b)("inlineCode",{parentName:"p"},"null"),"."),Object(o.b)("p",null,"As a little information\u200b, when a component has a conditional rendering based on a state, it makes sense to describe the interface of the component with ",Object(o.b)("inlineCode",{parentName:"p"},"React.PropTypes"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"function Notification({ text, state }) {\n  switch(state) {\n    case 'info':\n      return <Info text={text} />\n    case 'warning':\n      return <Warning text={text} />\n    case 'error':\n      return <Error text={text} />\n    default:\n      return null\n  }\n}\n\nNotification.propTypes = {\n  text: React.PropTypes.string,\n  state: React.PropTypes.oneOf(['info', 'warning', 'error'])\n}\n")),Object(o.b)("p",null,"Now you have one generic component to show different kinds of notifications. Based on the state prop the component could have different looks. An error should be red, a warning should be yellow and an info should be blue."),Object(o.b)("p",null,"An alternative way would be to inline the switch case. Therefore you would need a self invoking JavaScript function."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"function Notification({ text, state }) {\n  return (\n    <div>\n      {(() => {\n        switch(state) {\n          case 'info':\n            return <Info text={text} />\n          case 'warning':\n            return <Warning text={text} />\n          case 'error':\n            return <Error text={text} />\n          default:\n            return null\n        }\n      })()}\n    </div>\n  )\n}\n")))}l.isMDXComponent=!0},126:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),l=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),f=r,b=u["".concat(c,".").concat(f)]||u[f]||d[f]||o;return n?a.a.createElement(b,i(i({ref:t},p),{},{components:n})):a.a.createElement(b,i({ref:t},p))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var p=2;p<o;p++)c[p]=n[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);