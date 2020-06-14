(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{156:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return i})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return p}));var o=t(2),a=t(6),r=(t(0),t(160)),c={id:"function-as-child-component",title:"Function as child component",sidebar_label:"Function as child component"},i={id:"function-as-child-component",title:"Function as child component",description:"A Function as Child Component is a pattern that lets you pass a render function to a component as the children prop, so you can change what you can pass as children to a component.",source:"@site/docs/function-as-child-component.md",permalink:"/docs/function-as-child-component",sidebar_label:"Function as child component",sidebar:"someSidebar",previous:{title:"Render callback",permalink:"/docs/render-callback"},next:{title:"Function as prop component",permalink:"/docs/function-as-prop-component"}},l=[],s={rightToc:l};function p(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("p",null,"A Function as Child Component is a pattern that lets you pass a render function to a component as the children prop, so you can change what you can pass as children to a component."),Object(r.b)("p",null,"When you use a Function as child component, instead of passing JSX markup, you assign children as a function."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"<Foo>\n  {(name) => <div>`hello from ${name}`</div>}\n</Foo>\n")),Object(r.b)("p",null,"And the ",Object(r.b)("inlineCode",{parentName:"p"},"Foo")," component would look something like this."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"const Foo = ({ children }) => {\n  return children('foo')\n}\n")),Object(r.b)("p",null,"Now let take a look at a advanced example of a Function as child component."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"class PageWidth extends React.Component {\n  state = { width: 0 }\n\n  componentDidMount() {\n    this.setState({ width: window.innerWidth })\n\n    window.addEventListener(\n      'resize',\n      ({ target }) => {\n        this.setState({ width: target.innerWidth })\n      }\n    );\n  }\n\n  render() {\n    const { width } = this.state\n\n    return this.props.children(width)\n  }\n}\n")),Object(r.b)("p",null,"And then you could use it as."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"<PageWidth>\n  {width => <div>Page width is {width}</div>}\n</PageWidth>\n")),Object(r.b)("p",null,'As you can see above, children is "overloaded" and passed to PageWidth as a function instead of being a ReactNodeList as nature intended. The PageWidth component\u2019s render method calls this.props.children (passing it width), which returns rendered JSX.'),Object(r.b)("p",null,"The real power of render callbacks can be seen in this example. PageWidth will do all of the heavy lifting, while exactly what is rendered can change, depending on the render function that is passed."))}p.isMDXComponent=!0},160:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return b}));var o=t(0),a=t.n(o);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),p=function(e){var n=a.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=p(e.components);return a.a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},h=a.a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(t),h=o,b=d["".concat(c,".").concat(h)]||d[h]||u[h]||r;return t?a.a.createElement(b,i(i({ref:n},s),{},{components:t})):a.a.createElement(b,i({ref:n},s))}));function b(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,c=new Array(r);c[0]=h;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var s=2;s<r;s++)c[s]=t[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}h.displayName="MDXCreateElement"}}]);