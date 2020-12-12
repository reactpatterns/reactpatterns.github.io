(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{126:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),l=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},u=function(e){var t=l(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=l(n),m=r,b=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return n?a.a.createElement(b,p(p({ref:t},c),{},{components:n})):a.a.createElement(b,p({ref:t},c))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=m;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:r,s[1]=p;for(var c=2;c<o;c++)s[c]=n[c];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},92:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return p})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(7),o=(n(0),n(126)),s={id:"spreading-props-on-dom-elements-is-an-anti-pattern",sidebar_label:"Spreading props on DOM elements is an anti-pattern",title:"Spreading props on DOM Elements is an Anti-pattern",description:"spreading props on DOM elements is an anti-pattern | React Patterns, techniques, tips and tricks in development for Ract developer.",keywords:["shouldComponentUpdate avoid heavy re-renders","reactpatterns","react patterns","reactjspatterns","reactjs patterns","react","reactjs","react techniques","react tips and tricks"],version:"Spreading props on DOM elements is an anti-pattern",image:"/img/reactpatterns-cover.png"},p={unversionedId:"spreading-props-on-dom-elements-is-an-anti-pattern",id:"spreading-props-on-dom-elements-is-an-anti-pattern",isDocsHomePage:!1,title:"Spreading props on DOM Elements is an Anti-pattern",description:"spreading props on DOM elements is an anti-pattern | React Patterns, techniques, tips and tricks in development for Ract developer.",source:"@site/docs/spreading-props-on-dom-elements-is-an-anti-pattern.md",slug:"/spreading-props-on-dom-elements-is-an-anti-pattern",permalink:"/docs/spreading-props-on-dom-elements-is-an-anti-pattern",version:"current",sidebar_label:"Spreading props on DOM elements is an anti-pattern",sidebar:"someSidebar",previous:{title:"Indexes as a Key is an Anti-pattern",permalink:"/docs/indexes-as-a-key-is-an-anti-pattern"}},i=[],c={rightToc:i};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Well, we usually spread the properties to the elements to avoid writing every single one manually."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"<Component {...props} />\n")),Object(o.b)("p",null,"This works very well, however, when we spread props into a Dom element, we run the risk of adding unknown HTML attributes, which is a bad pratice."),Object(o.b)("p",null,"To see the warning in the console, a basic operation we can do is render the following component."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),'const Spread = () => <div foo="bar" />\n')),Object(o.b)("p",null,"The message we get looks like the following."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"Unknown props `foo` on <div> tag. Remove this prop from the element\n")),Object(o.b)("p",null,"Because the foo property is not valid for a div element."),Object(o.b)("p",null,"In this case, as we said, it's easy to figure out which attribute we are passing and remove it but, if we use the spread operator, as in the following."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"const Spread = props => <div {...props} />\n")),Object(o.b)("p",null,"We can't control which properties are passed from the parent."),Object(o.b)("p",null,"If we use the component in the following way, there are no issues."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'<Spread className="foo" />\n')))}l.isMDXComponent=!0}}]);