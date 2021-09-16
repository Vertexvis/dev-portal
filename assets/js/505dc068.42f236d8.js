"use strict";(self.webpackChunkdev_portal=self.webpackChunkdev_portal||[]).push([[6476],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},58215:function(e,t,n){var r=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,o=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:o},t)}},55064:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(67294),o=n(79443);var a=function(){var e=(0,r.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=n(86010),l="tabItem_1uMI",s="tabItemActive_2DSg";var u=function(e){var t,n=e.lazy,o=e.block,u=e.defaultValue,c=e.values,p=e.groupId,d=e.className,m=r.Children.toArray(e.children),f=null!=c?c:m.map((function(e){return{value:e.props.value,label:e.props.label}})),v=null!=u?u:null==(t=m.find((function(e){return e.props.default})))?void 0:t.props.value,h=a(),b=h.tabGroupChoices,g=h.setTabGroupChoices,y=(0,r.useState)(v),k=y[0],w=y[1],x=[];if(null!=p){var C=b[p];null!=C&&C!==k&&f.some((function(e){return e.value===C}))&&w(C)}var N=function(e){var t=e.currentTarget,n=x.indexOf(t),r=f[n].value;w(r),null!=p&&(g(p,r),setTimeout((function(){var e,n,r,o,a,i,l,u;(e=t.getBoundingClientRect(),n=e.top,r=e.left,o=e.bottom,a=e.right,i=window,l=i.innerHeight,u=i.innerWidth,n>=0&&a<=u&&o<=l&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},E=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=x.indexOf(e.target)+1;n=x[r]||x[0];break;case"ArrowLeft":var o=x.indexOf(e.target)-1;n=x[o]||x[x.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":o},d)},f.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:k===t?0:-1,"aria-selected":k===t,className:(0,i.Z)("tabs__item",l,{"tabs__item--active":k===t}),key:t,ref:function(e){return x.push(e)},onKeyDown:E,onFocus:N,onClick:N},null!=n?n:t)}))),n?(0,r.cloneElement)(m.filter((function(e){return e.props.value===k}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},m.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==k})}))))}},79443:function(e,t,n){var r=(0,n(67294).createContext)(void 0);t.Z=r},2259:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return d},default:function(){return f}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=n(55064),l=n(58215),s=["components"],u={id:"install-sdk",title:"Install Web UI Components",description:"Install the Vertex platform Web UI Components."},c=void 0,p={unversionedId:"guides/install-sdk",id:"guides/install-sdk",isDocsHomePage:!1,title:"Install Web UI Components",description:"Install the Vertex platform Web UI Components.",source:"@site/docs/guides/install-sdk.mdx",sourceDirName:"guides",slug:"/guides/install-sdk",permalink:"/docs/guides/install-sdk",editUrl:"https://github.com/Vertexvis/dev-portal/tree/main/docs/guides/install-sdk.mdx",tags:[],version:"current",frontMatter:{id:"install-sdk",title:"Install Web UI Components",description:"Install the Vertex platform Web UI Components."},sidebar:"guidesSidebar",previous:{title:"Webhook Events",permalink:"/docs/guides/webhook-events"},next:{title:"Browser compatibility",permalink:"/docs/guides/browser-compatibility"}},d=[{value:"npm module",id:"npm-module",children:[]},{value:"CDN or static hosting",id:"cdn-or-static-hosting",children:[]},{value:"React bindings",id:"react-bindings",children:[]}],m={toc:d};function f(e){var t=e.components,n=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"You can install the Web UI Components with ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/get-npm"},"npm"),", ",(0,a.kt)("a",{parentName:"p",href:"https://classic.yarnpkg.com/en/docs/install/"},"Yarn"),", or get started quickly with static hosting or a CDN. For most users, installing from npm or Yarn is the best choice."),(0,a.kt)("p",null,"Whichever you choose, be consistent and import all files from the same version of the library. Mixing files from different sources may cause duplicate code to be included or even break the application in unexpected ways."),(0,a.kt)("h2",{id:"npm-module"},"npm module"),(0,a.kt)("p",null,"To install the ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@vertexvis/viewer"},"@vertexvis/viewer")," npm module."),(0,a.kt)(i.Z,{defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"npm",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"npm install @vertexvis/viewer\n"))),(0,a.kt)(l.Z,{value:"yarn",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add @vertexvis/viewer\n")))),(0,a.kt)("p",null,"The package will be downloaded and installed. Then you're ready to import it into your code."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import { defineCustomElements } from '@vertexvis/viewer/loader';\n\ndefineCustomElements(window).then(() => main());\n\nasync function main() {\n  const viewer = document.querySelector('vertex-viewer');\n  await viewer.load(\n    'urn:vertexvis:stream-key:Eh96kzXEppNfcxj5gbbqdJ9oUdQPB7hXzHrU'\n  );\n  console.log('Loaded!');\n}\n")),(0,a.kt)("p",null,"If you plan on targeting IE11 or Edge <= 18, you'll also need to supply polyfills for the Web Components APIs (Custom Elements, Shadow DOM, CSS Variables, etc). To include the polyfills, import ",(0,a.kt)("inlineCode",{parentName:"p"},"applyPolyfills")," from the loader."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import { applyPolyfills, defineCustomElements } from '@vertexvis/viewer/loader';\n\napplyPolyfills()\n  .then(() => defineCustomElements(window))\n  .then(() => main());\n\nfunction main() {\n  // ...\n}\n")),(0,a.kt)("h2",{id:"cdn-or-static-hosting"},"CDN or static hosting"),(0,a.kt)("p",null,"The UI Components can be used without any build system, either by uploading files to your web server or using an existing CDN. Because it relies on ES modules, any script that references it must use ",(0,a.kt)("inlineCode",{parentName:"p"},'type="module"')," as shown."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html lang="">\n  <head>\n    <meta charset="utf-8" />\n    <link\n      rel="stylesheet"\n      href="https://unpkg.com/@vertexvis/viewer@0.10.x/dist/viewer/viewer.css"\n    />\n  </head>\n  <body>\n    <script\n      type="module"\n      src="https://unpkg.com/@vertexvis/viewer@0.10.x/dist/viewer/viewer.esm.js"\n    ><\/script>\n    <script\n      nomodule\n      src="https://unpkg.com/@vertexvis/viewer@0.10.x/dist/viewer.js"\n    ><\/script>\n  </body>\n</html>\n')),(0,a.kt)("h2",{id:"react-bindings"},"React bindings"),(0,a.kt)("p",null,"For up-to-date installation instructions for our React bindings, see the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Vertexvis/vertex-web-sdk/tree/master/packages/viewer-react"},(0,a.kt)("inlineCode",{parentName:"a"},"viewer-react")," README"),"."))}f.isMDXComponent=!0},86010:function(e,t,n){function r(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function o(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(o&&(o+=" "),o+=t);return o}n.d(t,{Z:function(){return o}})}}]);