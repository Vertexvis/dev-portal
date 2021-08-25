"use strict";(self.webpackChunkdev_portal=self.webpackChunkdev_portal||[]).push([[6240],{3905:function(e,t,r){r.d(t,{Zo:function(){return m},kt:function(){return u}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),d=c(r),u=a,k=d["".concat(s,".").concat(u)]||d[u]||l[u]||i;return r?n.createElement(k,o(o({ref:t},m),{},{components:r})):n.createElement(k,o({ref:t},m))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},40897:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return p},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return m},default:function(){return d}});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),o=["components"],p={id:"sdk-xamarin",title:"Xamarin UI Components introduction",sidebar_label:"Xamarin UI Components introduction"},s=void 0,c={unversionedId:"sdk/sdk-xamarin",id:"version-beta/sdk/sdk-xamarin",isDocsHomePage:!1,title:"Xamarin UI Components introduction",description:"Overview",source:"@site/versioned_docs/version-beta/sdk/sdk-xamarin.md",sourceDirName:"sdk",slug:"/sdk/sdk-xamarin",permalink:"/docs/beta/sdk/sdk-xamarin",editUrl:"https://github.com/Vertexvis/dev-portal/tree/main/versioned_docs/version-beta/sdk/sdk-xamarin.md",version:"beta",frontMatter:{id:"sdk-xamarin",title:"Xamarin UI Components introduction",sidebar_label:"Xamarin UI Components introduction"},sidebar:"version-beta/docs",previous:{title:"Viewer component API",permalink:"/docs/beta/sdk/sdk-web-api"},next:{title:"Getting started with Xamarin UI Components",permalink:"/docs/beta/sdk/sdk-xamarin-getting-started"}},m=[{value:"Overview",id:"overview",children:[]},{value:"Framework compatibility",id:"framework-compatibility",children:[]},{value:"Distribution",id:"distribution",children:[]}],l={toc:m};function d(e){var t=e.components,p=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},l,p,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"The Vertex Xamarin UI Components include a collection of ",(0,i.kt)("a",{parentName:"p",href:"https://dotnet.microsoft.com/apps/xamarin/xamarin-forms"},"Xamarin Forms")," Views that enable you to quickly embed a Viewer component into a Xamarin Forms cross-platform application. This Viewer component provides the ability to view, interact with, and analyze 3D models through the Vertex platform. All the heavy lifting takes place server-side, enabling you to build performant applications using complex 3D data across all types of devices."),(0,i.kt)("p",null,"The provided Views are implemented in Xamarin Forms, targeting the .NET Standard 2.0 framework. Additional platform-specific projects are included as part of the package, and provide support for Android and iOS through the ",(0,i.kt)("a",{parentName:"p",href:"https://www.nuget.org/packages/Vertexvis.Viewer/"},"base Vertexvis.Viewer")," package, and support for the Universal Windows Platform through a ",(0,i.kt)("a",{parentName:"p",href:"https://www.nuget.org/packages/Vertexvis.Viewer.Uwp/"},"supplementary Vertexvis.Viewer.Uwp")," package. See the ",(0,i.kt)("a",{parentName:"p",href:"#framework-compatibility"},"compatibility table")," for more details. The common Viewer component provides touch-based interactions out of the box, and provides a ViewerToolbar component with a tool for fitting the camera to the visible parts in a model."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Vertex 3D Viewer",src:r(64626).Z,title:"Vertex 3D Viewer"})),(0,i.kt)("h2",{id:"framework-compatibility"},"Framework compatibility"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"Package"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Project"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Targeted Frameworks"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("a",{parentName:"td",href:"https://www.nuget.org/packages/Vertexvis.Viewer/"},"Vertexvis.Viewer")),(0,i.kt)("td",{parentName:"tr",align:"center"},"Vertexvis.Viewer.Common"),(0,i.kt)("td",{parentName:"tr",align:"center"},".NET Standard 2.0")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("a",{parentName:"td",href:"https://www.nuget.org/packages/Vertexvis.Viewer/"},"Vertexvis.Viewer")),(0,i.kt)("td",{parentName:"tr",align:"center"},"Vertexvis.Viewer.iOS"),(0,i.kt)("td",{parentName:"tr",align:"center"},"iOS 10+")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("a",{parentName:"td",href:"https://www.nuget.org/packages/Vertexvis.Viewer/"},"Vertexvis.Viewer")),(0,i.kt)("td",{parentName:"tr",align:"center"},"Vertexvis.Viewer.Android"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Pie (v9.0)+")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("a",{parentName:"td",href:"https://www.nuget.org/packages/Vertexvis.Viewer.Uwp/"},"Vertexvis.Viewer.Uwp")),(0,i.kt)("td",{parentName:"tr",align:"center"},"Vertexvis.Viewer.Uwp"),(0,i.kt)("td",{parentName:"tr",align:"center"},"uap10.0.16299",(0,i.kt)("br",null)," uap10.0.17134",(0,i.kt)("br",null)," uap10.0.17763",(0,i.kt)("br",null)," uap10.0.18362")))),(0,i.kt)("h2",{id:"distribution"},"Distribution"),(0,i.kt)("p",null,"The Vertex Xamarin UI Components are distributed via ",(0,i.kt)("a",{parentName:"p",href:"https://www.nuget.org/packages?q=Vertexvis"},"NuGet"),".\nFor more information, see ",(0,i.kt)("a",{parentName:"p",href:"sdk-xamarin-getting-started"},"Getting Started with Xamarin UI Components"),"."))}d.isMDXComponent=!0},64626:function(e,t,r){t.Z=r.p+"assets/images/xamarin-viewer-sample-cf36754b4947bebeb771359c597607cc.png"}}]);