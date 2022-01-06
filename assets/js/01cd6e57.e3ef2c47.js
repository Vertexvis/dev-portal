"use strict";(self.webpackChunkdev_portal=self.webpackChunkdev_portal||[]).push([[8834],{3905:function(e,t,r){r.d(t,{Zo:function(){return m},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=u(r),f=a,d=p["".concat(c,".").concat(f)]||p[f]||l[f]||o;return r?n.createElement(d,i(i({ref:t},m),{},{components:r})):n.createElement(d,i({ref:t},m))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},4109:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return m},default:function(){return p}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],s={id:"transformation-matrices",title:"Transformation matrices",description:"Transformation matrices used by the Vertex platform."},c=void 0,u={unversionedId:"guides/transformation-matrices",id:"guides/transformation-matrices",isDocsHomePage:!1,title:"Transformation matrices",description:"Transformation matrices used by the Vertex platform.",source:"@site/docs/guides/transformation-matrices.mdx",sourceDirName:"guides",slug:"/guides/transformation-matrices",permalink:"/docs/guides/transformation-matrices",editUrl:"https://github.com/Vertexvis/dev-portal/tree/main/docs/guides/transformation-matrices.mdx",tags:[],version:"current",frontMatter:{id:"transformation-matrices",title:"Transformation matrices",description:"Transformation matrices used by the Vertex platform."},sidebar:"guidesSidebar",previous:{title:"3D model database",permalink:"/docs/guides/model-database"},next:{title:"Glossary",permalink:"/docs/guides/glossary"}},m=[],l={toc:m};function p(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Vertex uses 4x4 column-major af\ufb01ne transformation matrices. The upper-left 3x3 sub-matrix represents a rotation while the last column represents a translation. Note the final row is always assumed to be ",(0,o.kt)("inlineCode",{parentName:"p"},"[ 0 0 0 1 ]")," regardless of values provided. To rotate an object, see ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Rotation_matrix#In_three_dimensions"},"Rotation matrices"),". To translate an object, see ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Translation_(geometry)#Matrix_representation"},"Translation matrices"),"."))}p.isMDXComponent=!0}}]);