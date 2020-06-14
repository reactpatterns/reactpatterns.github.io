(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{143:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(2),a=n(6),o=(n(0),n(160)),s={id:"indexes-as-a-key-is-an-anti-patterns",title:"Indexes as a key is an anti-patterns",sidebar_label:"Indexes as a key is an anti-patterns"},i={id:"indexes-as-a-key-is-an-anti-patterns",title:"Indexes as a key is an anti-patterns",description:"Keys should be unique so that React can keep a better track of elements.",source:"@site/docs/indexes-as-a-key-is-an-anti-patterns.md",permalink:"/docs/indexes-as-a-key-is-an-anti-patterns",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/indexes-as-a-key-is-an-anti-patterns.md",sidebar_label:"Indexes as a key is an anti-patterns",sidebar:"someSidebar",previous:{title:"shouldComponentUpdate avoid heavy re-renders",permalink:"/docs/shouldcomponentupdate-avoid-heavy-re-renders"},next:{title:"Spreading props on DOM elements is an anti-patterns",permalink:"/docs/spreading-props-on-dom-elements-is-an-anti-patterns"}},c=[],p={rightToc:c};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Keys should be unique so that React can keep a better track of elements."),Object(o.b)("p",null,"Assume you use index of an item as its key when render a list as below:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"{todos.map((todo, index) =>\n  <Todo\n    {...todo}\n    key={index}\n  />\n)}\n")),Object(o.b)("p",null,"A key is the only thing React uses to identify DOM elements. What going on if you push an item to the list or remove items in the middle, If the key is same as before React assumes that the DOM element represents the same component as before."),Object(o.b)("p",null,"The better way:"),Object(o.b)("p",null,"Each items should have a permanent and unique property. It should be assigned when the item is created. Then we can use it the following way."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"{todos.map((todo) =>\n  <Todo \n    {...todo}\n    key={todo.id} \n  />\n)}\n")))}u.isMDXComponent=!0},160:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),u=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),l=u(n),b=r,m=l["".concat(s,".").concat(b)]||l[b]||d[b]||o;return n?a.a.createElement(m,i(i({ref:t},p),{},{components:n})):a.a.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=b;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var p=2;p<o;p++)s[p]=n[p];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);