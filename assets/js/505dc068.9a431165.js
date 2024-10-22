"use strict";(self.webpackChunkdev_portal=self.webpackChunkdev_portal||[]).push([[6476],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,v=d["".concat(s,".").concat(m)]||d[m]||p[m]||l;return n?r.createElement(v,o(o({ref:t},c),{},{components:n})):r.createElement(v,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8215:function(e,t,n){var r=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},6396:function(e,t,n){n.d(t,{Z:function(){return d}});var r=n(7462),a=n(7294),l=n(2389),o=n(9443);var i=function(){var e=(0,a.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},s=n(3616),u=n(6010),c="tabItem_vU9c";function p(e){var t,n,l,o=e.lazy,p=e.block,d=e.defaultValue,m=e.values,v=e.groupId,f=e.className,h=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=m?m:h.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),y=(0,s.lx)(b,(function(e,t){return e.value===t.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===d?d:null!=(t=null!=d?d:null==(n=h.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(l=h[0])?void 0:l.props.value;if(null!==g&&!b.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=i(),k=w.tabGroupChoices,x=w.setTabGroupChoices,C=(0,a.useState)(g),E=C[0],N=C[1],O=[],T=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=v){var j=k[v];null!=j&&j!==E&&b.some((function(e){return e.value===j}))&&N(j)}var I=function(e){var t=e.currentTarget,n=O.indexOf(t),r=b[n].value;r!==E&&(T(t),N(r),null!=v&&x(v,r))},D=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=O.indexOf(e.currentTarget)+1;n=O[r]||O[0];break;case"ArrowLeft":var a=O.indexOf(e.currentTarget)-1;n=O[a]||O[O.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":p},f)},b.map((function(e){var t=e.value,n=e.label,l=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:E===t?0:-1,"aria-selected":E===t,key:t,ref:function(e){return O.push(e)},onKeyDown:D,onFocus:I,onClick:I},l,{className:(0,u.Z)("tabs__item",c,null==l?void 0:l.className,{"tabs__item--active":E===t})}),null!=n?n:t)}))),o?(0,a.cloneElement)(h.filter((function(e){return e.props.value===E}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},h.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==E})}))))}function d(e){var t=(0,l.Z)();return a.createElement(p,(0,r.Z)({key:String(t)},e))}},2259:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return d},default:function(){return v}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),o=n(6396),i=n(8215),s=["components"],u={id:"install-sdk",title:"Install Web UI Components",description:"Install the Vertex platform Web UI Components."},c=void 0,p={unversionedId:"guides/install-sdk",id:"guides/install-sdk",title:"Install Web UI Components",description:"Install the Vertex platform Web UI Components.",source:"@site/docs/guides/install-sdk.mdx",sourceDirName:"guides",slug:"/guides/install-sdk",permalink:"/docs/guides/install-sdk",editUrl:"https://github.com/Vertexvis/dev-portal/tree/main/docs/guides/install-sdk.mdx",tags:[],version:"current",frontMatter:{id:"install-sdk",title:"Install Web UI Components",description:"Install the Vertex platform Web UI Components."},sidebar:"guidesSidebar",previous:{title:"Synchronizing with Connect",permalink:"/docs/guides/sync-scenes-to-connect"},next:{title:"Browser compatibility",permalink:"/docs/guides/browser-compatibility"}},d=[{value:"npm module",id:"npm-module",children:[],level:2},{value:"CDN or static hosting",id:"cdn-or-static-hosting",children:[],level:2},{value:"React bindings",id:"react-bindings",children:[],level:2}],m={toc:d};function v(e){var t=e.components,n=(0,a.Z)(e,s);return(0,l.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"You can install the Web UI Components with ",(0,l.kt)("a",{parentName:"p",href:"https://www.npmjs.com/get-npm"},"npm"),", ",(0,l.kt)("a",{parentName:"p",href:"https://classic.yarnpkg.com/en/docs/install/"},"Yarn"),", or get started quickly with static hosting or a CDN. For most users, installing from npm or Yarn is the best choice."),(0,l.kt)("p",null,"Whichever you choose, be consistent and import all files from the same version of the library. Mixing files from different sources may cause duplicate code to be included or even break the application in unexpected ways."),(0,l.kt)("h2",{id:"npm-module"},"npm module"),(0,l.kt)("p",null,"To install the ",(0,l.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@vertexvis/viewer"},"@vertexvis/viewer")," npm module."),(0,l.kt)(o.Z,{defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"npm",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"npm install @vertexvis/viewer\n"))),(0,l.kt)(i.Z,{value:"yarn",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add @vertexvis/viewer\n")))),(0,l.kt)("p",null,"The package will be downloaded and installed. Then you're ready to import it into your code."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"import { defineCustomElements } from '@vertexvis/viewer/loader';\n\ndefineCustomElements(window).then(() => main());\n\nasync function main() {\n  const viewer = document.querySelector('vertex-viewer');\n  await viewer.load(\n    'urn:vertex:stream-key:AH7v0jg5aN5_thkhU-XTzB_29aqW89EjyOH8'\n  );\n  console.log('Loaded!');\n}\n")),(0,l.kt)("p",null,"If you plan on targeting IE11 or Edge <= 18, you'll also need to supply polyfills for the Web Components APIs (Custom Elements, Shadow DOM, CSS Variables, etc). To include the polyfills, import ",(0,l.kt)("inlineCode",{parentName:"p"},"applyPolyfills")," from the loader."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"import { applyPolyfills, defineCustomElements } from '@vertexvis/viewer/loader';\n\napplyPolyfills()\n  .then(() => defineCustomElements(window))\n  .then(() => main());\n\nfunction main() {\n  // ...\n}\n")),(0,l.kt)("h2",{id:"cdn-or-static-hosting"},"CDN or static hosting"),(0,l.kt)("p",null,"The UI Components can be used without any build system, either by uploading files to your web server or using an existing CDN. Because it relies on ES modules, any script that references it must use ",(0,l.kt)("inlineCode",{parentName:"p"},'type="module"')," as shown."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html lang="">\n  <head>\n    <meta charset="utf-8" />\n    <link\n      rel="stylesheet"\n      href="https://cdn.jsdelivr.net/npm/@vertexvis/viewer@0.22.x/dist/viewer/viewer.css"\n    />\n  </head>\n  <body>\n    <script\n      type="module"\n      src="https://cdn.jsdelivr.net/npm/@vertexvis/viewer@0.22.x/dist/viewer/viewer.esm.js"\n    ><\/script>\n    <script\n      nomodule\n      src="https://cdn.jsdelivr.net/npm/@vertexvis/viewer@0.22.x/dist/viewer.js"\n    ><\/script>\n  </body>\n</html>\n')),(0,l.kt)("h2",{id:"react-bindings"},"React bindings"),(0,l.kt)("p",null,"For up-to-date installation instructions for our React bindings, see the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/Vertexvis/vertex-web-sdk/tree/master/packages/viewer-react"},(0,l.kt)("inlineCode",{parentName:"a"},"viewer-react")," README"),"."))}v.isMDXComponent=!0}}]);