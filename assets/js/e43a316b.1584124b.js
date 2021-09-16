"use strict";(self.webpackChunkdev_portal=self.webpackChunkdev_portal||[]).push([[425],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=a,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},54853:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return u}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],s={id:"getting-started",title:"Getting started"},c=void 0,l={unversionedId:"guides/getting-started",id:"version-beta/guides/getting-started",isDocsHomePage:!1,title:"Getting started",description:"The Vertex platform includes a set of APIs and UI Components, which together provide a powerful toolset for building scalable applications based on 3D data.",source:"@site/versioned_docs/version-beta/guides/getting-started.md",sourceDirName:"guides",slug:"/guides/getting-started",permalink:"/docs/beta/guides/getting-started",editUrl:"https://github.com/Vertexvis/dev-portal/tree/main/versioned_docs/version-beta/guides/getting-started.md",tags:[],version:"beta",frontMatter:{id:"getting-started",title:"Getting started"},sidebar:"version-beta/docs",next:{title:"Authentication",permalink:"/docs/beta/guides/authentication"}},p=[{value:"APIs",id:"apis",children:[]},{value:"UI Components",id:"ui-components",children:[{value:"Web UI Components",id:"web-ui-components",children:[]},{value:"Xamarin UI Components",id:"xamarin-ui-components",children:[]}]}],d={toc:p};function u(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The Vertex platform includes a set of APIs and UI Components, which together provide a powerful toolset for building scalable applications based on 3D data."),(0,i.kt)("p",null,"This site includes documentation for the APIs and UI Components, with guides and other references to help you get up and running quickly."),(0,i.kt)("h2",{id:"apis"},"APIs"),(0,i.kt)("p",null,"APIs provide direct access to the cloud-based services that comprise the Vertex platform. Vertex provides the ability to import and collaborate with 3D data, author three-dimensional scene states, and stream interactive 3D views to multiple devices."),(0,i.kt)("p",null,"The APIs are primarily HTTP-based RESTful APIs with OAuth2 based authentication. Secure (TCP-based) WebSocket connections provide real-time streaming capabilities for viewing and analyzing large 3D datasets."),(0,i.kt)("p",null,"To get started, check out the ",(0,i.kt)("a",{parentName:"p",href:"./authentication"},"Authentication")," guide and ",(0,i.kt)("a",{parentName:"p",href:"/api/beta"},"API Reference"),"."),(0,i.kt)("h2",{id:"ui-components"},"UI Components"),(0,i.kt)("p",null,"The following UI Components are actively developed and supported by Vertex.\nThey provide components and tools which simplify and accelerate the development of applications leveraging the Vertex platform."),(0,i.kt)("p",null,"These projects receive regular product updates and patches."),(0,i.kt)("h3",{id:"web-ui-components"},(0,i.kt)("a",{parentName:"h3",href:"../sdk/sdk-web"},"Web UI Components")),(0,i.kt)("p",null,"The Web UI Components provide a lightweight and configurable client interface that can query, analyze, and render 3D data models and associated metadata. It features an interactive viewer component that is configurable and extensible. Because the cloud does all the heavy lifting, this client interface performs well across most device types, including mobile."),(0,i.kt)("p",null,"Languages: JavaScript/TypeScript"),(0,i.kt)("h3",{id:"xamarin-ui-components"},(0,i.kt)("a",{parentName:"h3",href:"../sdk/sdk-xamarin"},"Xamarin UI Components")),(0,i.kt)("p",null,"The Xamarin UI Components wrap the Web UI Components, exposing all of the platform capabilities for use in building Xamarin applications which can be run on iOS, Android, and the Universal Windows Platform."),(0,i.kt)("p",null,"Languages: C#/JavaScript"))}u.isMDXComponent=!0}}]);