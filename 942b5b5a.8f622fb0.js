(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{100:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return i})),t.d(n,"rightToc",(function(){return p})),t.d(n,"default",(function(){return s}));var o=t(3),a=t(7),r=(t(0),t(129)),c={id:"component-injection",sidebar_label:"Component injection",title:"Component Injection",description:"Component injection | React Patterns, techniques, tips and tricks in development for Ract developer.",keywords:["component injection","react component injection","reactpatterns","react patterns","reactjspatterns","reactjs patterns","react","reactjs","react techniques","react tips and tricks"],version:"Component injection",image:"/img/reactpatterns-cover.png"},i={unversionedId:"component-injection",id:"component-injection",isDocsHomePage:!1,title:"Component Injection",description:"Component injection | React Patterns, techniques, tips and tricks in development for Ract developer.",source:"@site/docs/component-injection.md",slug:"/component-injection",permalink:"/docs/component-injection",version:"current",sidebar_label:"Component injection",sidebar:"someSidebar",previous:{title:"Function as Prop Component",permalink:"/docs/function-as-prop-component"},next:{title:"If Else",permalink:"/docs/if-else"}},p=[{value:"What is Component Injection?",id:"what-is-component-injection",children:[]},{value:"Example 1",id:"example-1",children:[]},{value:"Example 2",id:"example-2",children:[]}],l={rightToc:p};function s(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"what-is-component-injection"},"What is Component Injection?"),Object(r.b)("p",null,"Passing (or inject) a component into another component it's called Component Injection."),Object(r.b)("h2",{id:"example-1"},"Example 1"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx"}),"const Hello = ({ name }) => {\n  return <div>`hello from ${name}`</div>\n};\n")),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx"}),"<Foo Hello={Hello} />\n")),Object(r.b)("p",null,"It look pretty much the same as in the ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/function-as-prop-component",title:"function as prop component"}),"function as prop component"),", except the prop we capitalize ",Object(r.b)("inlineCode",{parentName:"p"},"Hello")," because convention calls for us to capitalize the first letter of a component name. We also pass in ",Object(r.b)("inlineCode",{parentName:"p"},"props"),", an object, instead of a single string parameter, those are the only differences."),Object(r.b)("p",null,"And ",Object(r.b)("inlineCode",{parentName:"p"},"Foo")," component will looks a lot more like a traditional React component."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx"}),'const Foo = ({ Hello }) => {\n  return <Hello name="foo" />\n};\n')),Object(r.b)("h2",{id:"example-2"},"Example 2"),Object(r.b)("p",null,"Let's take a look at a advanced example, altered for component injection."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx"}),"import React from 'react'\n\nexport default class PageWidth extends React.Component {\n  state = { width: 100 }\n\n  render() {\n    const { width } = this.state\n    const { Width } = this.props\n\n    return <Width width={width} />\n  }\n}\n")),Object(r.b)("p",null,"So well as how you use it."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx"}),"<PageWidth Width={DisplayPageWidthText} />\n")),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx"}),"const DisplayWindowWidthText = ({ width }) => {\n  return <div>window is {width}</div>\n};\n")),Object(r.b)("p",null,"As you can see, the ",Object(r.b)("inlineCode",{parentName:"p"},"DisplayPageWidthText"),' component is "injected" into ',Object(r.b)("inlineCode",{parentName:"p"},"PageWidth")," as a prop named ",Object(r.b)("inlineCode",{parentName:"p"},"Width"),"."),Object(r.b)("p",null,"You could even pass a different component and get a completely different rendered output, thanks to the power of ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/render-callback",title:"render callback"}),"render callback"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx"}),"<PageWidth Width={DisplayDevice} />\n")),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx"}),"const DisplayDevice = ({ width }) => {\n  let device = null\n  if (width <= 480) {\n    device = 'mobile'\n  } else if (width <= 768) {\n    device = 'tablet'\n  } else {\n    device = 'desktop'\n  }\n  return <div>you are using a {device}</div>\n}\n")))}s.isMDXComponent=!0},129:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return u}));var o=t(0),a=t.n(o);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),s=function(e){var n=a.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=s(e.components);return a.a.createElement(l.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},m=a.a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=s(t),m=o,u=d["".concat(c,".").concat(m)]||d[m]||b[m]||r;return t?a.a.createElement(u,i(i({ref:n},l),{},{components:t})):a.a.createElement(u,i({ref:n},l))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,c=new Array(r);c[0]=m;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var l=2;l<r;l++)c[l]=t[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);