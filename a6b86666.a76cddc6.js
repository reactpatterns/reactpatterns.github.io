(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{102:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return s})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return p})),r.d(t,"default",(function(){return u}));var n=r(3),a=r(7),o=(r(0),r(126)),s={id:"jsx-spread-attributes",sidebar_label:"JSX spread attributes",title:"JSX Spread Attributes",description:"JSX spread attributes | React Patterns, techniques, tips and tricks in development for Ract developer.",keywords:["jsx spread attributes","jsx attributes","reactpatterns","react patterns","reactjspatterns","reactjs patterns","react","reactjs","react techniques","react tips and tricks"],version:"JSX spread attributes",image:"/img/reactpatterns-cover.png"},c={unversionedId:"jsx-spread-attributes",id:"jsx-spread-attributes",isDocsHomePage:!1,title:"JSX Spread Attributes",description:"JSX spread attributes | React Patterns, techniques, tips and tricks in development for Ract developer.",source:"@site/docs/jsx-spread-attributes.md",slug:"/jsx-spread-attributes",permalink:"/docs/jsx-spread-attributes",version:"current",sidebar_label:"JSX spread attributes",sidebar:"someSidebar",previous:{title:"Accessing a Child Component",permalink:"/docs/accessing-a-child-component"},next:{title:"Render Callback",permalink:"/docs/render-callback"}},p=[{value:"What is JSX Spread Attributes?",id:"what-is-jsx-spread-attributes",children:[]},{value:"For examples",id:"for-examples",children:[]}],i={rightToc:p};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},i,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"what-is-jsx-spread-attributes"},"What is JSX Spread Attributes?"),Object(o.b)("p",null,"Spread attributes is a JSX feature, it's a syntax for passing all of an object's properties as JSX attributes."),Object(o.b)("h2",{id:"for-examples"},"For examples"),Object(o.b)("p",null,"If you know all the properties that you want to place on a component ahead of time, it is easy to use JSX."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const component = <Component foo={x} bar={y} />\n")),Object(o.b)("p",null,"If you don't know which properties you want to set, you might be tempted to add them onto the object later."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"var component = <Component />;\ncomponent.props.foo = x // bad\ncomponent.props.bar = y // also bad\n")),Object(o.b)("p",null,"Now you can use a new feature of JSX called spread attributes."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"let props = {}\nprops.foo = x\nprops.bar = y\n\nconst component = <Component {...props} />\n")),Object(o.b)("p",null,"The properties of the object that you pass in are copied onto the component's props. You can use this multiple times or combine it with other attributes. The specification order is important. Later attributes override previous ones."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"let props = { foo: 'default' }\nconst component = <Component {...props} foo={'override'} />\nconsole.log(component.props.foo) // 'override'\n")))}u.isMDXComponent=!0},126:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=a.a.createContext({}),u=function(e){var t=a.a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=u(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),l=u(r),d=n,m=l["".concat(s,".").concat(d)]||l[d]||b[d]||o;return r?a.a.createElement(m,c(c({ref:t},i),{},{components:r})):a.a.createElement(m,c({ref:t},i))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:n,s[1]=c;for(var i=2;i<o;i++)s[i]=r[i];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);