(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{152:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(2),o=n(6),a=(n(0),n(162)),i={id:"switch-case-operator",title:"Switch case operator",sidebar_label:"Switch case operator"},c={id:"switch-case-operator",title:"Switch case operator",description:"Now there might be cases where you have multiple conditional renderings. The conditional rendering could apply based on different states. Let\u2019s imagine a notification component that can render an error, warning or info component based on the input state. You can use a switch case operator to handle the conditional rendering of these multiple states.",source:"@site/docs/switch-case-operator.md",permalink:"/docs/switch-case-operator",sidebar_label:"Switch case operator",sidebar:"someSidebar",previous:{title:"Logical && operator",permalink:"/docs/logical-and-operator"},next:{title:"Conditional rendering with enum",permalink:"/docs/conditional-rendering-with-enum"}},s=[],l={rightToc:s};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Now there might be cases where you have multiple conditional renderings. The conditional rendering could apply based on different states. Let\u2019s imagine a notification component that can render an error, warning or info component based on the input state. You can use a switch case operator to handle the conditional rendering of these multiple states."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"function Notification({ text, state }) {\n  switch(state) {\n    case 'info':\n      return <Info text={text} />\n    case 'warning':\n      return <Warning text={text} />\n    case 'error':\n      return <Error text={text} />\n    default:\n      return null\n  }\n}\n")),Object(a.b)("p",null,"Please note that you always have to use the ",Object(a.b)("inlineCode",{parentName:"p"},"default")," for the switch case operator. In React a component has always to return an element or ",Object(a.b)("inlineCode",{parentName:"p"},"null"),"."),Object(a.b)("p",null,"As a little information\u200b - When a component has a conditional rendering based on a state, it makes sense to describe the interface of the component with ",Object(a.b)("inlineCode",{parentName:"p"},"React.PropTypes"),"."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"function Notification({ text, state }) {\n  switch(state) {\n    case 'info':\n      return <Info text={text} />\n    case 'warning':\n      return <Warning text={text} />\n    case 'error':\n      return <Error text={text} />\n    default:\n      return null;\n  }\n}\n\nNotification.propTypes = {\n  text: React.PropTypes.string,\n  state: React.PropTypes.oneOf(['info', 'warning', 'error'])\n}\n")),Object(a.b)("p",null,"Now you have one generic component to show different kinds of notifications. Based on the state prop the component could have different looks. An error should be red, a warning should be yellow and an info should be blue."),Object(a.b)("p",null,"An alternative way would be to inline the switch case. Therefore you would need a self invoking JavaScript function."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"function Notification({ text, state }) {\n  return (\n    <div>\n      {(() => {\n        switch(state) {\n          case 'info':\n            return <Info text={text} />\n          case 'warning':\n            return <Warning text={text} />\n          case 'error':\n            return <Error text={text} />\n          default:\n            return null\n        }\n      })()}\n    </div>\n  )\n}\n")))}u.isMDXComponent=!0},162:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),f=r,b=p["".concat(i,".").concat(f)]||p[f]||d[f]||a;return n?o.a.createElement(b,c(c({ref:t},l),{},{components:n})):o.a.createElement(b,c({ref:t},l))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);