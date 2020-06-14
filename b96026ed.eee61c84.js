(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{139:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return p})),t.d(n,"default",(function(){return i}));var r=t(2),a=t(6),s=(t(0),t(160)),o={id:"functional-stateless-component",title:"Functional stateless component (Presentational component)",sidebar_label:"Functional stateless component"},c={id:"functional-stateless-component",title:"Functional stateless component (Presentational component)",description:"Functional stateless component (FSC) is a way to define React components as a function, rather than as a class or via React.createClass.",source:"@site/docs/functional-stateless-component.md",permalink:"/docs/functional-stateless-component",sidebar_label:"Functional stateless component",sidebar:"someSidebar",previous:{title:"Promises over callbacks",permalink:"/docs/promises-over-callbacks"},next:{title:"Container component (Stateful component)",permalink:"/docs/container-component"}},p=[],l={rightToc:p};function i(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(s.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(s.b)("p",null,"Functional stateless component (FSC) is a way to define React components as a function, rather than as a class or via ",Object(s.b)("inlineCode",{parentName:"p"},"React.createClass"),"."),Object(s.b)("p",null,"Without FSC write a presentational component that is just renders props, and doesn\u2019t has state:"),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const UserPassword = React.createClass({\n  render() {\n    return <p>The user password is: {this.props.userpassword}</p>\n  },\n})\n\n// OR\n\nclass Userpassword extends React.Component {\n  render() {\n    return <p>The user password is: {this.props.userpassword}</p>\n  }\n}\n")),Object(s.b)("p",null,"With FSC:"),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const UserPassword = function(props) {\n  return <p>The user password is: {this.props.userpassword}</p>\n}\n")),Object(s.b)("p",null,"With FSC, arrow function, destructuring and implicit return:"),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const UserPassword = ({ userpassword }) => <p>The user password is: {userpassword}</p>\n")),Object(s.b)("p",null,"FSC is great for styling as well:"),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const PrimaryButton = props => {\n  const styles = { background: 'red', color: 'white' }\n\n  return <button {...props} style={styles} />\n}\n")),Object(s.b)("p",null,"FSC with event handlers:"),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const Button = props => {\n  const onClick = e => (...)\n\n  return <button onClick={onClick}>Click me!</button>\n}\n")),Object(s.b)("p",null,"FSC can have defined defaultProps, propTypes:"),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const UserPassword = props => <p>...</p>\n\nUserPassword.propTypes = {\n  userpassword: React.PropTypes.string.isRequired,\n}\n\nUsername.defaultProps = {\n  username: 'Bunlong',\n}\n")),Object(s.b)("p",null,"FSC can have defined contextTypes (when using context, it\u2019s simply passed in as the second argument):"),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const UserPassword = (props, context) => <p>User password is {context.password}</p>\n\nWowComponent.contextTypes = {\n  password: React.PropTypes.string.isRequired,\n}\n")))}i.isMDXComponent=!0},160:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),i=function(e){var n=a.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=i(e.components);return a.a.createElement(l.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=i(t),d=r,m=u["".concat(o,".").concat(d)]||u[d]||b[d]||s;return t?a.a.createElement(m,c(c({ref:n},l),{},{components:t})):a.a.createElement(m,c({ref:n},l))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=t.length,o=new Array(s);o[0]=d;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<s;l++)o[l]=t[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);