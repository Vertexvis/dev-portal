(self.webpackChunkdev_portal=self.webpackChunkdev_portal||[]).push([[5963],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(r),m=o,b=u["".concat(p,".").concat(m)]||u[m]||d[m]||i;return r?n.createElement(b,a(a({ref:t},c),{},{components:r})):n.createElement(b,a({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},25814:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return s},metadata:function(){return p},toc:function(){return l},default:function(){return d}});var n=r(22122),o=r(19756),i=(r(67294),r(3905)),a=["components"],s={id:"sdk-web",title:"Web UI Components introduction",sidebar_label:"Web UI Components introduction"},p={unversionedId:"sdk/sdk-web",id:"version-beta/sdk/sdk-web",isDocsHomePage:!1,title:"Web UI Components introduction",description:"Overview",source:"@site/versioned_docs/version-beta/sdk/sdk-web.md",sourceDirName:"sdk",slug:"/sdk/sdk-web",permalink:"/docs/beta/sdk/sdk-web",editUrl:"https://github.com/Vertexvis/dev-portal/tree/main/versioned_docs/version-beta/sdk/sdk-web.md",version:"beta",sidebar_label:"Web UI Components introduction",frontMatter:{id:"sdk-web",title:"Web UI Components introduction",sidebar_label:"Web UI Components introduction"},sidebar:"version-beta/docs",previous:{title:"UI Component overview",permalink:"/docs/beta/sdk"},next:{title:"Getting started with Web UI Components",permalink:"/docs/beta/sdk/sdk-web-getting-started"}},l=[{value:"Overview",id:"overview",children:[]},{value:"Browser compatibility",id:"browser-compatibility",children:[]},{value:"Distribution",id:"distribution",children:[]}],c={toc:l};function d(e){var t=e.components,s=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"The Web UI Components include a collection of standards-based ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/Web_Components"},"web components")," that enable you to quickly build\ncustomized applications powered by the Vertex platform. The JavaScript-based viewer component provides an ability to view, interact with, and analyze 3D data models through the platform. All the heavy lifting takes place server-side, enabling you to build performant applications using complex 3D data across all types of devices."),(0,i.kt)("p",null,"The web components are implemented in JavaScript, and the packages are shipped with TypeScript type definitions. They can be utilized within a variety of application environments that run within a browser engine. This includes standard web applications and iOS/Android mobile apps, as well as other embedded environments that offer a modern browser engine, such as WebKit. Both mouse and touch interactions are supported out of the box."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Vertex 3D Viewer",src:r(95203).Z,title:"Vertex 3D Viewer"})),(0,i.kt)("h2",{id:"browser-compatibility"},"Browser compatibility"),(0,i.kt)("p",null,"The web components are intended to work with most modern browsers, including those that support the Custom Elements v1\nspecification. For many browsers that do not support the Custom Elements v1 spec, a polyfill is automatically used.\nSee below for our complete browser support matrix:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"Edge"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Chrome","*"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Firefox","*"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Safari 9+","*"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Chrome Android","*"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Mobile Safari","*"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2713")))),(0,i.kt)("p",null,"*","Indicates the current version of the browser"),(0,i.kt)("p",null,"The web components may work in older browsers, but require additional polyfills.\nWe cannot guarantee support for browsers outside of our compatibility matrix."),(0,i.kt)("h2",{id:"distribution"},"Distribution"),(0,i.kt)("p",null,"The Vertex Viewer component is distributed via ",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@vertexvis/viewer"},"npm"),". For more information, see ",(0,i.kt)("a",{parentName:"p",href:"sdk-web-getting-started"},"Getting started with Web UI Components"),"."))}d.isMDXComponent=!0},95203:function(e,t,r){"use strict";t.Z=r.p+"assets/images/embedded-viewer-sample-0ece662c582a4291b7ddddcb9bbb4f19.png"}}]);