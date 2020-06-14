(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{138:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return s})),t.d(n,"metadata",(function(){return i})),t.d(n,"rightToc",(function(){return p})),t.d(n,"default",(function(){return c}));var r=t(2),a=t(6),o=(t(0),t(160)),s={id:"spreading-props-on-dom-elements-is-an-anti-patterns",title:"Spreading props on DOM elements is an anti-patterns",sidebar_label:"Spreading props on DOM elements is an anti-patterns"},i={id:"spreading-props-on-dom-elements-is-an-anti-patterns",title:"Spreading props on DOM elements is an anti-patterns",description:"Well, we usually spread the properties to the elements to avoid writing every single one manually.",source:"@site/docs/spreading-props-on-dom-elements-is-an-anti-patterns.md",permalink:"/docs/spreading-props-on-dom-elements-is-an-anti-patterns",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/spreading-props-on-dom-elements-is-an-anti-patterns.md",sidebar_label:"Spreading props on DOM elements is an anti-patterns",sidebar:"someSidebar",previous:{title:"Indexes as a key is an anti-patterns",permalink:"/docs/indexes-as-a-key-is-an-anti-patterns"},next:{title:"Pure component avoid heavy re-renders",permalink:"/docs/pure-component-avoid-heavy-re-renders"}},p=[],l={rightToc:p};function c(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Well, we usually spread the properties to the elements to avoid writing every single one manually."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"<Component {...props} />\n")),Object(o.b)("p",null,"This works very well."),Object(o.b)("p",null,"However, when we spread props into a Dom element, we run the risk of adding unknown HTML attributes, which is a bad pratice."),Object(o.b)("p",null,"To see the warning in the console, a basic operation we can do is render the following component."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'const Spread = () => <div foo="bar" />\n')),Object(o.b)("p",null,"The message we get looks like the following:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"Unknown props `foo` on <div> tag. Remove this prop from the element\n")),Object(o.b)("p",null,"Because the foo property is not valid for a div element."),Object(o.b)("p",null,"In this case, as we said, it's easy to figure out which attribute we are passing and remove it but, if we use the spread operator, as in the following."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const Spread = props => <div {...props} />\n")),Object(o.b)("p",null,"We can't control which properties are passed from the parent."),Object(o.b)("p",null,"If we use the component in this way:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'<Spread className="foo" />\n')),Object(o.b)("p",null,"There are no issues."))}c.isMDXComponent=!0},160:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),c=function(e){var n=a.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return a.a.createElement(l.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=c(t),d=r,m=u["".concat(s,".").concat(d)]||u[d]||b[d]||o;return t?a.a.createElement(m,i(i({ref:n},l),{},{components:t})):a.a.createElement(m,i({ref:n},l))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,s=new Array(o);s[0]=d;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var l=2;l<o;l++)s[l]=t[l];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);