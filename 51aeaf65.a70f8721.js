(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{126:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),l=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},d=function(e){var t=l(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},h=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=l(n),h=r,m=d["".concat(s,".").concat(h)]||d[h]||u[h]||o;return n?a.a.createElement(m,p(p({ref:t},c),{},{components:n})):a.a.createElement(m,p({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=h;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:r,s[1]=p;for(var c=2;c<o;c++)s[c]=n[c];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},81:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return p})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(7),o=(n(0),n(126)),s={id:"shouldcomponentupdate-avoid-heavy-re-render",sidebar_label:"shouldComponentUpdate avoid heavy re-renders",title:"shouldComponentUpdate Avoid Heavy Re-render",description:"shouldComponentUpdate avoid heavy re-renders | React Patterns, techniques, tips and tricks in development for Ract developer.",keywords:["shouldComponentUpdate avoid heavy re-renders","reactpatterns","react patterns","reactjspatterns","reactjs patterns","react","reactjs","react techniques","react tips and tricks"],version:"shouldComponentUpdate avoid heavy re-renders",image:"/img/reactpatterns-cover.png"},p={unversionedId:"shouldcomponentupdate-avoid-heavy-re-render",id:"shouldcomponentupdate-avoid-heavy-re-render",isDocsHomePage:!1,title:"shouldComponentUpdate Avoid Heavy Re-render",description:"shouldComponentUpdate avoid heavy re-renders | React Patterns, techniques, tips and tricks in development for Ract developer.",source:"@site/docs/shouldcomponentupdate-avoid-heavy-rerender.md",slug:"/shouldcomponentupdate-avoid-heavy-re-render",permalink:"/docs/shouldcomponentupdate-avoid-heavy-re-render",version:"current",sidebar_label:"shouldComponentUpdate avoid heavy re-renders",sidebar:"someSidebar",previous:{title:"Props in Initial State is an Anti-pattern",permalink:"/docs/props-in-initial-state-is-an-anti-pattern"},next:{title:"Indexes as a Key is an Anti-pattern",permalink:"/docs/indexes-as-a-key-is-an-anti-pattern"}},i=[],c={rightToc:i};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"React component re-render every time the props or state change, so imagine having to render the entire page every time there in an action, that takes a big load on the browser, that's where shouldComponentUpdate comes in, whenever React is rendering the view it checks to see if shouldComponentUpdate is returning false/true, so whenever you have a component that is static let do yourself a favor and return false or if not let check to see if the props/state has changed."),Object(o.b)("p",null,"Let take a look the below example."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"const AutocompleteItem = (props) => {\n  const selectedClass = props.selected === true ? 'selected' : ''\n  var path = parseUri(props.url).path\n  path = path.length <= 0 ? props.url : '...' + path\n\n  return (\n    <li\n      onMouseLeave={props.onMouseLeave}\n      className={selectedClass}>\n      <i className=\"ion-ios-eye\"\n         data-image={props.image}\n         data-url={props.url}\n         data-title={props.title}\n         onClick={props.handlePlanetViewClick} />\n      <span\n        onMouseEnter={props.onMouseEnter}>\n        <div className=\"dot bg-mint\" />\n        {path}\n      </span>\n    </li>\n  )\n}\n")),Object(o.b)("p",null,"This component above has no state which causes it to re-render every time. So what we want is to convert it to a regular component and use the function ",Object(o.b)("inlineCode",{parentName:"p"},"shouldComponentUpdate"),". Then we want to check if the props that we use in this component have change. If there was a change return true else return false. The component becomes."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"export default class AutocompleteItem extends React.Component {\n  shouldComponentUpdate(nextProps, nextState) {\n    return nextProps.url !== this.props.url || nextProps.selected !== this.props.selected\n  }\n\n  render() {\n    const {props} = this;\n    const selectedClass = props.selected === true ? 'selected' : ''\n    var path = parseUri(props.url).path\n    path = path.length <= 0 ? props.url : '...' + path\n\n    return (\n      <li\n        onMouseLeave={props.onMouseLeave}\n        className={selectedClass}>\n        <i className=\"ion-ios-eye\"\n           data-image={props.image}\n           data-url={props.url}\n           data-title={props.title}\n           onClick={props.handlePlanetViewClick} />\n        <span\n          onMouseEnter={props.onMouseEnter}>\n          <div className=\"dot bg-mint\" />\n          {path}\n        </span>\n      </li>\n    )\n  }\n}\n")))}l.isMDXComponent=!0}}]);