(self.webpackChunkdev_portal=self.webpackChunkdev_portal||[]).push([[6476],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||i;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},58215:function(e,t,n){"use strict";var r=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},55064:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});var r=n(67294),a=n(79443);var i=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},o=n(86010),l="tabItem_1uMI",s="tabItemActive_2DSg";var c=37,u=39;var p=function(e){var t=e.lazy,n=e.block,a=e.defaultValue,p=e.values,m=e.groupId,d=e.className,f=i(),v=f.tabGroupChoices,h=f.setTabGroupChoices,b=(0,r.useState)(a),y=b[0],g=b[1],k=r.Children.toArray(e.children),w=[];if(null!=m){var x=v[m];null!=x&&x!==y&&p.some((function(e){return e.value===x}))&&g(x)}var C=function(e){var t=e.currentTarget,n=w.indexOf(t),r=p[n].value;g(r),null!=m&&(h(m,r),setTimeout((function(){var e,n,r,a,i,o,l,c;(e=t.getBoundingClientRect(),n=e.top,r=e.left,a=e.bottom,i=e.right,o=window,l=o.innerHeight,c=o.innerWidth,n>=0&&i<=c&&a<=l&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},N=function(e){var t,n;switch(e.keyCode){case u:var r=w.indexOf(e.target)+1;n=w[r]||w[0];break;case c:var a=w.indexOf(e.target)-1;n=w[a]||w[w.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},d)},p.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,className:(0,o.Z)("tabs__item",l,{"tabs__item--active":y===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:N,onFocus:C,onClick:C},n)}))),t?(0,r.cloneElement)(k.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},k.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==y})}))))}},79443:function(e,t,n){"use strict";var r=(0,n(67294).createContext)(void 0);t.Z=r},93487:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return m},default:function(){return f}});var r=n(22122),a=n(19756),i=(n(67294),n(3905)),o=n(55064),l=n(58215),s=["components"],c={id:"install-sdk",title:"Install Web UI Components",description:"Install the Vertex platform Web UI Components."},u=void 0,p={unversionedId:"guides/install-sdk",id:"guides/install-sdk",isDocsHomePage:!1,title:"Install Web UI Components",description:"Install the Vertex platform Web UI Components.",source:"@site/docs/guides/install-sdk.mdx",sourceDirName:"guides",slug:"/guides/install-sdk",permalink:"/docs/guides/install-sdk",editUrl:"https://github.com/Vertexvis/dev-portal/tree/main/docs/guides/install-sdk.mdx",version:"current",frontMatter:{id:"install-sdk",title:"Install Web UI Components",description:"Install the Vertex platform Web UI Components."},sidebar:"guidesSidebar",previous:{title:"Webhook Events",permalink:"/docs/guides/webhook-events"},next:{title:"Browser compatibility",permalink:"/docs/guides/browser-compatibility"}},m=[{value:"npm module",id:"npm-module",children:[]},{value:"CDN or static hosting",id:"cdn-or-static-hosting",children:[]},{value:"React bindings",id:"react-bindings",children:[]}],d={toc:m};function f(e){var t=e.components,n=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"You can install the Web UI Components with ",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/get-npm"},"npm"),", ",(0,i.kt)("a",{parentName:"p",href:"https://classic.yarnpkg.com/en/docs/install/"},"Yarn"),", or get started quickly with static hosting or a CDN. For most users, installing from npm or Yarn is the best choice."),(0,i.kt)("p",null,"Whichever you choose, be consistent and import all files from the same version of the library. Mixing files from different sources may cause duplicate code to be included or even break the application in unexpected ways."),(0,i.kt)("h2",{id:"npm-module"},"npm module"),(0,i.kt)("p",null,"To install the ",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@vertexvis/viewer"},"@vertexvis/viewer")," npm module."),(0,i.kt)(o.Z,{defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"npm",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"npm install @vertexvis/viewer\n"))),(0,i.kt)(l.Z,{value:"yarn",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add @vertexvis/viewer\n")))),(0,i.kt)("p",null,"The package will be downloaded and installed. Then you're ready to import it into your code."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import { defineCustomElements } from '@vertexvis/viewer/loader';\n\ndefineCustomElements(window).then(() => main());\n\nasync function main() {\n  const viewer = document.querySelector('vertex-viewer');\n  await viewer.load(\n    'urn:vertexvis:stream-key:U9cSWVb7fvS9k-NQcT28uZG6wtm6xmiG0ctU'\n  );\n  console.log('Loaded!');\n}\n")),(0,i.kt)("p",null,"If you plan on targeting IE11 or Edge <= 18, you'll also need to supply polyfills for the Web Components APIs (Custom Elements, Shadow DOM, CSS Variables, etc). To include the polyfills, import ",(0,i.kt)("inlineCode",{parentName:"p"},"applyPolyfills")," from the loader."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import { applyPolyfills, defineCustomElements } from '@vertexvis/viewer/loader';\n\napplyPolyfills()\n  .then(() => defineCustomElements(window))\n  .then(() => main());\n\nfunction main() {\n  // ...\n}\n")),(0,i.kt)("h2",{id:"cdn-or-static-hosting"},"CDN or static hosting"),(0,i.kt)("p",null,"The UI Components can be used without any build system, either by uploading files to your web server or using an existing CDN. Because it relies on ES modules, any script that references it must use ",(0,i.kt)("inlineCode",{parentName:"p"},'type="module"')," as shown."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html lang="">\n  <head>\n    <meta charset="utf-8" />\n    <link\n      rel="stylesheet"\n      href="https://unpkg.com/@vertexvis/viewer@0.9.x/dist/viewer/viewer.css"\n    />\n  </head>\n  <body>\n    <script\n      type="module"\n      src="https://unpkg.com/@vertexvis/viewer@0.9.x/dist/viewer/viewer.esm.js"\n    ><\/script>\n    <script\n      nomodule\n      src="https://unpkg.com/@vertexvis/viewer@0.9.x/dist/viewer.js"\n    ><\/script>\n  </body>\n</html>\n')),(0,i.kt)("h2",{id:"react-bindings"},"React bindings"),(0,i.kt)("p",null,"For up-to-date installation instructions for our React bindings, see the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Vertexvis/vertex-web-sdk/tree/master/packages/viewer-react"},(0,i.kt)("inlineCode",{parentName:"a"},"viewer-react")," README"),"."))}f.isMDXComponent=!0},86010:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}n.d(t,{Z:function(){return a}})}}]);