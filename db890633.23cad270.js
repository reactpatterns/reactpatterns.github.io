(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{104:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return p})),t.d(n,"rightToc",(function(){return i})),t.d(n,"default",(function(){return s}));var o=t(3),r=t(7),a=(t(0),t(118)),c={id:"function-as-prop-component",sidebar_label:"Function as Prop Component",title:"Function as Prop Component",description:"Function as Prop Component | React Patterns, techniques, tips and tricks in development for Ract developer.",image:"/img/reactpatterns-cover.png",keywords:["function as prop component","function as prop","prop component","reactpatterns","react patterns","reactjspatterns","reactjs patterns","react","reactjs","react techniques","react tips and tricks"],permalink:null,version:"Function as Prop Component"},p={unversionedId:"function-as-prop-component",id:"function-as-prop-component",isDocsHomePage:!1,title:"Function as Prop Component",description:"Function as Prop Component | React Patterns, techniques, tips and tricks in development for Ract developer.",source:"@site/docs/function-as-prop-component.md",slug:"/function-as-prop-component",permalink:"/docs/function-as-prop-component",version:"current",sidebar_label:"Function as Prop Component",sidebar:"someSidebar",previous:{title:"Function as Child Component",permalink:"/docs/function-as-child-component"},next:{title:"Component Injection",permalink:"/docs/component-injection"}},i=[],l={rightToc:i};function s(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Exactly passing a ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/render-callback",title:"Render Callback"}),"Render Callback")," function to a component is not the issue. The issue is the ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/function-as-child-component",title:"Function as Child Component"}),"Function as Child Component")," implementation chose to use the prop ",Object(a.b)("inlineCode",{parentName:"p"},"children"),"."),Object(a.b)("p",null,"So how could you pass a ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/render-callback",title:"Render Callback"}),"Render Callback")," function to a component in a clean manner?"),Object(a.b)("p",null,"You would need to name your prop meaningful."),Object(a.b)("p",null,"Here's how you could change the Foo example to pass a function as a prop:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"<Foo hello={(name) => <div>`hello from ${name}`</div>} />\n")),Object(a.b)("p",null,"And here's another example, hello is created outside of the JSX (a better practice):"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"const hello = (name) => {\n  return <div>`hello from ${name}`</div>\n}\n")),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"<Foo hello={hello} />\n")),Object(a.b)("p",null,"And this time, Foo makes a lot more sense:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"const Foo = ({ hello }) => {\n  return hello('foo')\n}\n")),Object(a.b)("p",null,'Notice how this is much more descriptive? The code is self-documenting. You can say to yourself, "Foo calls a hello function" instead of "Foo calls something".'))}s.isMDXComponent=!0},118:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return d}));var o=t(0),r=t.n(o);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=r.a.createContext({}),s=function(e){var n=r.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},u=function(e){var n=s(e.components);return r.a.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},b=r.a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=s(t),b=o,d=u["".concat(c,".").concat(b)]||u[b]||m[b]||a;return t?r.a.createElement(d,p(p({ref:n},l),{},{components:t})):r.a.createElement(d,p({ref:n},l))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=b;var p={};for(var i in n)hasOwnProperty.call(n,i)&&(p[i]=n[i]);p.originalType=e,p.mdxType="string"==typeof e?e:o,c[1]=p;for(var l=2;l<a;l++)c[l]=t[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);