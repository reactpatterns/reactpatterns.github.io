(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{134:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),i=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},p=function(e){var t=i(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=i(n),m=a,f=p["".concat(c,".").concat(m)]||p[m]||b[m]||o;return n?r.a.createElement(f,u(u({ref:t},s),{},{components:n})):r.a.createElement(f,u({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=m;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:a,c[1]=u;for(var s=2;s<o;s++)c[s]=n[s];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},158:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/react-hooks-cheat-sheet-97aa08c28454a1ac8a861e4eb6436cd5.png"},92:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return u})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return i}));var a=n(3),r=n(7),o=(n(0),n(134)),c={slug:"react-hooks-cheat-sheet",title:"React Hooks Cheat Sheet",author:"Bunlong",author_title:"React Patterns Team",author_url:"https://github.com/Bunlong",author_image_url:"https://avatars1.githubusercontent.com/u/37023003?s=400&u=0049c6773040efb265cdf622076305f8b47facec&v=4",tags:["hook"],image:"/img/react-hooks-cheat-sheet.png"},u={permalink:"/blog/react-hooks-cheat-sheet",source:"@site/blog/2021-07-29-react-hooks-cheat-sheet.md",description:"React Hooks Cheat Sheet",date:"2021-07-29T00:00:00.000Z",tags:[{label:"hook",permalink:"/blog/tags/hook"}],title:"React Hooks Cheat Sheet",readingTime:2.335,truncated:!0,nextItem:{title:"What is React Server Component",permalink:"/blog/react-server-component"}},l=[{value:"State Management",id:"state-management",children:[{value:"useState()",id:"usestate",children:[]}]}],s={rightToc:l};function i(e){var t=e.components,c=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,c,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("img",{alt:"React Hooks Cheat Sheet",src:n(158).default,title:"React Hooks Cheat Sheet"})),Object(o.b)("h2",{id:"state-management"},"State Management"),Object(o.b)("h3",{id:"usestate"},"useState()"),Object(o.b)("p",null,"Declare state."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const [name, setName] = useState('Initial value');\n")),Object(o.b)("p",null,"Update state."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"setName('New value'); // directly\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"setName((value) => 'New' + value); // based on previous state\n")))}i.isMDXComponent=!0}}]);