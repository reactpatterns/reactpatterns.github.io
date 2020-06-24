(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{102:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return l}));var r=n(2),o=n(6),a=(n(0),n(162)),s={id:"state-hoisting",title:"State hoisting",sidebar_label:"State hoisting"},c={id:"state-hoisting",title:"State hoisting",description:"As the application grows you will realise that some components will need common data or actions in one component may need to cause another component to re-render as well.",source:"@site/docs/state-hoisting.md",permalink:"/docs/state-hoisting",sidebar_label:"State hoisting",sidebar:"someSidebar",previous:{title:"Container component (Stateful component)",permalink:"/docs/container-component"},next:{title:"Pure component avoid heavy re-renders",permalink:"/docs/pure-component-avoid-heavy-re-renders"}},i=[],p={rightToc:i};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"As the application grows you will realise that some components will need common data or actions in one component may need to cause another component to re-render as well."),Object(a.b)("p",null,"Let take a look the example below."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"// App.js\n\nimport React from 'react'\nimport Header from 'Header'\nimport List from 'List'\n\nexport class App extends React.Component {\n  render(){\n    return(\n      <div>\n        <Header/>\n        <List/>\n      </div>\n    )\n  }\n}\n")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"// Header.js\n\nimport React from 'react'\n\nexport class Header extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {customers: []}\n  }\n\n  componentDidMount() {\n    const customers = getData() // this fictional function calls an API\n    this.setState({customers})\n  }\n\n  render() {\n    return(<div>No of Customer: {this.state.customers.length}</div>)\n  }\n}\n")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"// List.js\n\nimport React from 'react'\n\nexport class List extends React.Component {\n  constructor(props) {\n    super(props)\n    this.state = {customers: []}\n  }\n\n  componentDidMount() {\n    const cars = getData() // this fictional function calls an API\n    this.setState({customers})\n  }\n\n  render() {\n    return this.state.customers.map((car) => {\n      return (<div>Customer: {customers.name}</div>)\n    })\n  }\n}\n")),Object(a.b)("p",null,"As the example above you are encouraged to lift state up, if two components need to act on the same data or need to use the same callback. It mean that you should create a common ancestor in this common ancestor and then use the state to manage all the data and callbacks that children will use in rendering."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"// App.js\n\nimport React from 'react'\nimport Header from 'Header'\nimport List from 'List'\n\nexport class App extends React.Component {\n  constructor(props){\n    super(props)\n    this.state = {customers: []}\n  }\n\n  componentDidMount() {\n    const customers = getData() // this fictional function calls an API\n    this.setState({customers})\n  }\n\n  render(){\n    const {customers} = this.state\n\n    return(\n      <div>\n        <Header customers/>\n        <List customers/>\n      </div>\n    )\n  }\n}\n")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"// Header.js\n\nconst Header = ({customers}) => (<div> No of Customer: {customers.length}</div>)\n\nexport Header\n")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"// List.js\n\nconst List = ({customers}) => (\n  customers.map((customer) => {\n    return (<div>Customer: {customer.name}</div>)\n  })\n)\n\nexport List\n")))}l.isMDXComponent=!0},162:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),l=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(n),d=r,b=u["".concat(s,".").concat(d)]||u[d]||m[d]||a;return n?o.a.createElement(b,c(c({ref:t},p),{},{components:n})):o.a.createElement(b,c({ref:t},p))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,s[1]=c;for(var p=2;p<a;p++)s[p]=n[p];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);