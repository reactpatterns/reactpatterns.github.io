(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{148:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return l}));var a=n(2),r=n(6),o=(n(0),n(162)),c={id:"functional-setstate",title:"Functional setState (Pass a function to setState)",sidebar_label:"Functional setState"},s={id:"functional-setstate",title:"Functional setState (Pass a function to setState)",description:"React has popularized functional programming in JavaScript. So today I reveal to you a new functional gold in React is Functional setState.",source:"@site/docs/functional-setstate.md",permalink:"/docs/functional-setstate",sidebar_label:"Functional setState"},i=[],u={rightToc:i};function l(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"React has popularized functional programming in JavaScript. So today I reveal to you a new functional gold in React is ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"Functional setState")),"."),Object(o.b)("p",null,"Assume that you have a User component as below."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"class User {\n  state = {\n    score : 0,\n  };\n\n  render () {\n    return (\n      <div>This user scored {this.state.score}</div>\n    );\n  }\n}\n")),Object(o.b)("p",null,"To manage the state, React provides a special method called setState(). You use it like this."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"class User {\n  ... \n\n  increaseScore () {\n    this.setState({score : this.state.score + 1});\n  }\n\n  ...\n}\n")),Object(o.b)("p",null,"Note how ",Object(o.b)("inlineCode",{parentName:"p"},"setState()")," works. You pass it an object containing part(s) of the state you want to update. In other words, the object you pass would have keys corresponding to the keys in the component state, then ",Object(o.b)("inlineCode",{parentName:"p"},"setState()"),' updates or sets the state by merging the object to the state. Thus, "set-State".'),Object(o.b)("p",null,"Instead of passing an object, you could pass a function to setState as well."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"setState()")," also accepts a function. The function accepts the previous state and current props of the component which it uses to calculate and return the next state. See it below:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"this.setState(function (state, props) {\n return {\n  score: state.score + 1\n }\n});\n")),Object(o.b)("p",null,"Example:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"function increment(state, props) {\n  return {\n    value: state.value + props.step,\n  };\n}\n\nfunction decrement(state, props) {\n  return {\n    value: state.value - props.step,\n  }\n}\n\nclass Counter extends React.Component {\n  state = { value: 0 };\n\n  handleIncrement = () => {\n    this.setState(increment);\n  }\n\n  handleDecrement = () => {\n    this.setState(decrement);\n  }\n\n  render() {\n    return (\n      <div>\n        <button onClick={this.handleIncrement}>+</button>\n        <h1>{this.state.value}</h1>\n        <button onClick={this.handleDecrement}>-</button>\n      </div>\n    )\n  }\n}\n")))}l.isMDXComponent=!0},162:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=r.a.createContext({}),l=function(e){var t=r.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return r.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=l(n),d=a,f=p["".concat(c,".").concat(d)]||p[d]||b[d]||o;return n?r.a.createElement(f,s(s({ref:t},u),{},{components:n})):r.a.createElement(f,s({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,c[1]=s;for(var u=2;u<o;u++)c[u]=n[u];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);