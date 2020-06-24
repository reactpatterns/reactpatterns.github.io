(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{123:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return a})),n.d(t,"default",(function(){return s}));var i=n(2),r=(n(0),n(162));const o={id:"multi-level-conditional-rendering",title:"Multi-level conditional rendering",sidebar_label:"Multi-level conditional rendering"},l={id:"multi-level-conditional-rendering",title:"Multi-level conditional rendering",description:"What about nested conditional renderings? Let\u2019s have a look at the List component that can either show a list, an empty text or nothing.",source:"@site/docs/multi-level-conditional-rendering.md",permalink:"/docs/multi-level-conditional-rendering",sidebar_label:"Multi-level conditional rendering",sidebar:"someSidebar",previous:{title:"Conditional rendering with enum",permalink:"/docs/conditional-rendering-with-enum"},next:{title:"With higher order component",permalink:"/docs/with-higher-order-component"}},a=[],c={rightToc:a};function s({components:e,...t}){return Object(r.b)("wrapper",Object(i.a)({},c,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("p",null,"What about nested conditional renderings? Let\u2019s have a look at the List component that can either show a list, an empty text or nothing."),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-js"}),"function List({ list }) {\n  const isNull = !list\n  const isEmpty = !isNull && !list.length\n\n  return (\n    <div>\n      { isNull\n          ? null\n          : ( isEmpty\n              ? <p>Sorry, the list is empty.</p>\n              : <div>{list.map(item => <ListItem item={item} />)}</div>\n            )\n      }\n    </div>\n  )\n}\n\n// usage\n<List list={null} /> // <div></div>\n<List list={[]} /> // <div><p>Sorry, the list is empty.</p></div>\n<List list={['a', 'b', 'c']} /> // <div><div>a</div><div>b</div><div>c</div><div>\n")),Object(r.b)("p",null,"It works. However I would recommend to keep the nested conditional renderings to a minimum. It makes it less readable. My recommendation would be to split it up into smaller components which themselves have conditional renderings."),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-js"}),"function List({ list }) {\n  const isList = list && list.length\n\n  return (\n    <div>\n      { isList\n          ? <div>{list.map(item => <ListItem item={item} />)}</div>\n          : <NoList isNull={!list} isEmpty={list && !list.length} />\n      }\n    </div>\n  )\n}\n\nfunction NoList({ isNull, isEmpty }) {\n  return (!isNull && isEmpty) && <p>Sorry, the list is empty.</p>\n}\n")))}s.isMDXComponent=!0},162:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return b}));var i=n(0),r=n.n(i);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=u(n),m=i,b=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return n?r.a.createElement(b,a(a({ref:t},s),{},{components:n})):r.a.createElement(b,a({ref:t},s))}));function b(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=m;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:i,l[1]=a;for(var s=2;s<o;s++)l[s]=n[s];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);