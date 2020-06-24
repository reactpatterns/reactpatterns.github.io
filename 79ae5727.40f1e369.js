(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{126:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return i}));var r=n(2),s=(n(0),n(162));const a={id:"stateless-function",sidebar_label:"Stateless Function",title:"Stateless Function (Presentational Component)",description:"Stateless Function (Presentational Component) | React Patterns, techniques, tips and tricks in development for Ract developer.",image:"/img/reactpatterns-cover.png",keywords:["Stateless function","statelessfunction","presentational component","presentationalcomponent","reactpatterns","react patterns","reactjspatterns","reactjs patterns","react","reactjs","react techniques","react tips and tricks"],permalink:null,version:"Stateless Function (Presentational Component)"},o={id:"stateless-function",title:"Stateless Function (Presentational Component)",description:"Stateless Function (Presentational Component) | React Patterns, techniques, tips and tricks in development for Ract developer.",source:"@site/docs/stateless-function.md",permalink:"/docs/stateless-function",sidebar_label:"Stateless Function",sidebar:"someSidebar",previous:{title:"Make the API Call in componentDidMount()",permalink:"/docs/make-the-api-call-in-componentdidmount"},next:{title:"Higher-Order Functions",permalink:"/docs/higher-order-functions"}},c=[],p={rightToc:c};function i({components:e,...t}){return Object(s.b)("wrapper",Object(r.a)({},p,t,{components:e,mdxType:"MDXLayout"}),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Stateless Function is a way to define React components as a function. Rather than as a class or via ",Object(s.b)("inlineCode",{parentName:"li"},"React.createClass"),"."),Object(s.b)("li",{parentName:"ul"},"Stateless Function does not hold state; just props.")),Object(s.b)("p",null,"Without Stateless Function, write a presentational component that is just renders props, and doesn't has state:"),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const UserPassword = React.createClass({\n  render() {\n    return <p>The user password is: {this.props.userpassword}</p>\n  },\n})\n\n// OR\n\nclass Userpassword extends React.Component {\n  render() {\n    return <p>The user password is: {this.props.userpassword}</p>\n  }\n}\n")),Object(s.b)("p",null,"With stateless function:"),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const UserPassword = function(props) {\n  return <p>The user password is: {this.props.userpassword}</p>\n};\n")),Object(s.b)("p",null,"With stateless function, arrow function, destructuring and implicit return:"),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const UserPassword = ({userpassword}) => <p>The user password is: {userpassword}</p>\n")),Object(s.b)("p",null,"Stateless Function is great for styling as well:"),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const PrimaryButton = props => {\n  const styles = { background: 'red', color: 'white' }\n\n  return <button {...props} style={styles} />\n}\n")),Object(s.b)("p",null,"Stateless Function with event handlers:"),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const Button = props => {\n  const onClick = e => console.log('You clicked me!')\n\n  return <button onClick={onClick}>Click me!</button>\n};\n")),Object(s.b)("p",null,"Stateless Function can have defined defaultProps, propTypes:"),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"import PropTypes from 'prop-types'\n\nconst UserPassword = props => <p>The user password is: {this.props.userpassword}</p>\n\nUserPassword.propTypes = {\n  userpassword: PropTypes.string.isRequired,\n}\n\nUsername.defaultProps = {\n  username: 'Jonh',\n}\n")),Object(s.b)("p",null,"Stateless Function can have defined contextTypes (when using context, it's simply passed in as the second argument):"),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"import PropTypes from 'prop-types'\n\nconst UserPassword = (props, context) => <p>User password is {context.password}</p>\n\nWowComponent.contextTypes = {\n  password: PropTypes.string.isRequired,\n}\n")))}i.isMDXComponent=!0},162:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),s=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var i=s.a.createContext({}),l=function(e){var t=s.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return s.a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return s.a.createElement(s.a.Fragment,{},t)}},b=s.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),u=l(n),b=r,m=u["".concat(o,".").concat(b)]||u[b]||d[b]||a;return n?s.a.createElement(m,c(c({ref:t},i),{},{components:n})):s.a.createElement(m,c({ref:t},i))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=b;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var i=2;i<a;i++)o[i]=n[i];return s.a.createElement.apply(null,o)}return s.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);