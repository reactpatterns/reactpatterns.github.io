(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{120:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return l}));var r=n(2),o=n(6),a=(n(0),n(160)),i={id:"ternary-operation",title:"Ternary operation",sidebar_label:"Ternary operation"},c={id:"ternary-operation",title:"Ternary operation",description:"You can make your if-else statement more concise by using a ternary operation.",source:"@site/docs/ternary-operation.md",permalink:"/docs/ternary-operation",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/ternary-operation.md",sidebar_label:"Ternary operation",sidebar:"someSidebar",previous:{title:"If else",permalink:"/docs/if-else"},next:{title:"Logical && operator",permalink:"/docs/logical-and-operator"}},u=[],p={rightToc:u};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"You can make your if-else statement more concise by using a ternary operation."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"condition ? expr1 : expr2\n")),Object(a.b)("p",null,"Imagine you have a toggle to switch between two modes, edit and view, in your component. The derived condition is a simple boolean. You can use the boolean to decide which element you want to return."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"function Item({ item, mode }) {\n  const isEditMode = mode === 'EDIT';\n\n  return (\n    <div>\n      { isEditMode\n          ? <ItemEdit item={item} />\n          : <ItemView item={item} />\n      }\n    </div>\n  );\n}\n")),Object(a.b)("p",null,"If your blocks in both branches of the ternary operation are getting bigger, you can use parentheses."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"function Item({ item, mode }) {\n  const isEditMode = mode === 'EDIT';\n\n  return (\n    <div>\n    { isEditMode ? \n      (\n        <ItemEdit item={item} />\n      ) : \n      (\n        <ItemView item={item} />\n      )\n    }\n    </div>\n  );\n}\n")),Object(a.b)("p",null,"The ternary operation makes the conditional rendering in React more concise than the if-else statement. It is simple to inline it in your return statement."))}l.isMDXComponent=!0},160:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),l=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=l(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),s=l(n),d=r,b=s["".concat(i,".").concat(d)]||s[d]||m[d]||a;return n?o.a.createElement(b,c(c({ref:t},p),{},{components:n})):o.a.createElement(b,c({ref:t},p))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<a;p++)i[p]=n[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);