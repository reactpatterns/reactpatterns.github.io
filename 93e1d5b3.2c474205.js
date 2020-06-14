(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{132:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return i})),t.d(n,"rightToc",(function(){return s})),t.d(n,"default",(function(){return p}));var o=t(2),r=t(6),a=(t(0),t(160)),c={id:"container-component",title:"Container component (Stateful component)",sidebar_label:"Container component"},i={id:"container-component",title:"Container component (Stateful component)",description:"A container does data fetching and then renders its corresponding sub-component.",source:"@site/docs/container-component.md",permalink:"/docs/container-component",sidebar_label:"Container component",sidebar:"someSidebar",previous:{title:"Functional stateless component (Presentational component)",permalink:"/docs/functional-stateless-component"},next:{title:"State hoisting",permalink:"/docs/state-hoisting"}},s=[],m={rightToc:s};function p(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},m,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"A container does data fetching and then renders its corresponding sub-component."),Object(a.b)("p",null,"Assume that you have a component that displays comments. You didn\u2019t know about container components. So, you put everything in one place."),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),'const fetchSomeComments = cb =>\n  cb([\n    { author: "Bunlong VAN", body: "Nice to see you here!" },\n    { author: "You", body: "Thanks!" }\n  ])\n\nclass CommentList extends React.Component {\n  this.state = { comments: [] }\n\n  componentDidMount() {\n    fetchSomeComments(comments => this.setState({ comments: comments }))\n  }\n\n  render() {\n    return (\n      <ul>\n        {this.state.comments.map(c => (\n          <li>{c.body}\u2014{c.author}</li>\n        ))}\n      </ul>\n    )\n  }\n}\n\nReactDOM.render(\n  <CommentList />,\n  document.getElementById("root")\n)\n')),Object(a.b)("p",null,'Your component is responsible for both fetching data and presenting it. There\u2019s nothing "wrong" with this but you miss out on a few benefits of React.'),Object(a.b)("p",null,"CommentList can\u2019t be reused unless under the exact same circumstances."),Object(a.b)("p",null,"Lets pull out data-fetching into a container component."),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"class CommentListContainer extends React.Component {\n  state = { comments: [] }\n\n  componentDidMount() {\n    fetchSomeComments(comments =>\n      this.setState({ comments: comments }))\n  }\n\n  render() {\n    return <CommentList comments={this.state.comments} />\n  }\n}\n")),Object(a.b)("p",null,"Now, let\u2019s rework CommentList to take comments as a prop."),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"const CommentList = props =>\n  <ul>\n    {props.comments.map(c => (\n      <li>{c.body}\u2014{c.author}</li>\n    ))}\n  </ul>\n")),Object(a.b)("p",null,"What we got:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Separated our data-fetching and rendering concerns.")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Made our CommentList component reusable.")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Given CommentList the ability to set PropTypes."))))}p.isMDXComponent=!0},160:function(e,n,t){"use strict";t.d(n,"a",(function(){return l})),t.d(n,"b",(function(){return d}));var o=t(0),r=t.n(o);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var m=r.a.createContext({}),p=function(e){var n=r.a.useContext(m),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=p(e.components);return r.a.createElement(m.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},b=r.a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),l=p(t),b=o,d=l["".concat(c,".").concat(b)]||l[b]||u[b]||a;return t?r.a.createElement(d,i(i({ref:n},m),{},{components:t})):r.a.createElement(d,i({ref:n},m))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=b;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var m=2;m<a;m++)c[m]=t[m];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);