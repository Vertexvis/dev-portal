(self.webpackChunkdev_portal=self.webpackChunkdev_portal||[]).push([[9545],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=l(n),m=o,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},31868:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return p},toc:function(){return c},default:function(){return s}});var r=n(22122),o=n(19756),a=(n(67294),n(3905)),i={id:"sdk",title:"UI Component overview",sidebar_label:"UI Component overview"},p={unversionedId:"sdk",id:"version-beta/sdk",isDocsHomePage:!1,title:"UI Component overview",description:"The following UI Components are actively developed and supported by Vertex. They provide components and tools which simplify and accelerate the development of applications leveraging the Vertex platform.",source:"@site/versioned_docs/version-beta/sdk.md",sourceDirName:".",slug:"/sdk",permalink:"/docs/beta/sdk",editUrl:"https://github.com/Vertexvis/dev-portal/tree/main/versioned_docs/version-beta/sdk.md",version:"beta",sidebar_label:"UI Component overview",frontMatter:{id:"sdk",title:"UI Component overview",sidebar_label:"UI Component overview"},sidebar:"version-beta/docs",previous:{title:"Scene and item operations",permalink:"/docs/beta/guides/scene-operations"},next:{title:"Web UI Components introduction",permalink:"/docs/beta/sdk/sdk-web"}},c=[{value:"Web UI Components",id:"web-ui-components",children:[]},{value:"Xamarin UI Components",id:"xamarin-ui-components",children:[]}],l={toc:c};function s(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The following UI Components are actively developed and supported by Vertex. They provide components and tools which simplify and accelerate the development of applications leveraging the Vertex platform."),(0,a.kt)("p",null,"These projects receive regular product updates and patches."),(0,a.kt)("h3",{id:"web-ui-components"},(0,a.kt)("a",{parentName:"h3",href:"./sdk/sdk-web"},"Web UI Components")),(0,a.kt)("p",null,"The Web UI Components provide a lightweight and configurable client interface that can query, analyze, and render 3D data models and associated metadata. It features an interactive viewer component that is configurable and extensible. Because all the heavy lifting is done in the cloud, this client interface performs well across most device types, including mobile."),(0,a.kt)("p",null,"Languages: JavaScript/TypeScript"),(0,a.kt)("h3",{id:"xamarin-ui-components"},(0,a.kt)("a",{parentName:"h3",href:"./sdk/sdk-xamarin"},"Xamarin UI Components")),(0,a.kt)("p",null,"The Xamarin UI Components wrap the Web UI Components, exposing all the capabilities of the platform for use in building Xamarin applications that can be run on iOS, Android, and the Universal Windows Platform."),(0,a.kt)("p",null,"Languages: C#/JavaScript"))}s.isMDXComponent=!0}}]);