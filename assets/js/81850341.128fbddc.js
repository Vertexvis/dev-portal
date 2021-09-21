"use strict";(self.webpackChunkdev_portal=self.webpackChunkdev_portal||[]).push([[9795],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=o,h=m["".concat(l,".").concat(d)]||m[d]||u[d]||r;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},73773:function(e,t,n){n.d(t,{a:function(){return o}});var a=n(67294);function o(){return a.createElement(a.Fragment,null,"Your Vertex client secret is sensitive and must be kept secure at all times. You should ",a.createElement("strong",null,"never")," include it in client-side web applications.")}},4947:function(e,t,n){n.d(t,{R:function(){return o}});var a=n(67294);function o(){return a.createElement(a.Fragment,null,"The following instructions assume:",a.createElement("ul",null,a.createElement("li",null,"You"," ",a.createElement("a",{href:"https://account.vertexvis.com/signup"},"created a free developer account"),"."),a.createElement("li",null,"You created credentials in the"," ",a.createElement("a",{href:"https://console.vertexvis.com/applications"},"Vertex Console")," ","and have your Vertex client ID and secret.")))}},94381:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return m},default:function(){return f},frontMatter:function(){return u},metadata:function(){return d},toc:function(){return h}});var a=n(87462),o=n(63366),r=n(67294),i=n(3905);function s(){return r.createElement("ul",null,r.createElement("li",null,"They include all required and optional body parameters for completeness. Remove any optional parameters as desired."),r.createElement("li",null,"They use auto-generated IDs and other values that may share the same value for ease of documentation only. In actual requests and responses, the IDs should uniquely identify their corresponding resource."))}var l=n(73773),c=n(4947),p=["components"],u={id:"postman-quick-start",title:"Postman quick start",description:"Quick start guide for the Vertex platform using Postman."},m=void 0,d={unversionedId:"guides/postman-quick-start",id:"guides/postman-quick-start",isDocsHomePage:!1,title:"Postman quick start",description:"Quick start guide for the Vertex platform using Postman.",source:"@site/docs/guides/postman-quick-start.mdx",sourceDirName:"guides",slug:"/guides/postman-quick-start",permalink:"/docs/guides/postman-quick-start",editUrl:"https://github.com/Vertexvis/dev-portal/tree/main/docs/guides/postman-quick-start.mdx",tags:[],version:"current",frontMatter:{id:"postman-quick-start",title:"Postman quick start",description:"Quick start guide for the Vertex platform using Postman."},sidebar:"guidesSidebar",previous:{title:"Build your first application",permalink:"/docs/guides/build-your-first-app"},next:{title:"Authentication",permalink:"/docs/guides/authentication"}},h=[{value:"Open Vertex&#39;s Postman collection",id:"open-vertexs-postman-collection",children:[]},{value:"Get an access token",id:"get-an-access-token",children:[]},{value:"Make API requests",id:"make-api-requests",children:[]}],k={toc:h};function f(e){var t=e.components,r=(0,o.Z)(e,p);return(0,i.kt)("wrapper",(0,a.Z)({},k,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"For advanced functionality beyond what our UI Components provide, you can optionally integrate directly with our API. The API guides show examples using ",(0,i.kt)("inlineCode",{parentName:"p"},"curl"),". If you're less comfortable with the command line, though, Postman is a better choice. If you'd rather jump staight to calling our API in your application, check out our ",(0,i.kt)("a",{parentName:"p",href:"/docs/sdks-and-tools"},"API Clients")," instead."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.postman.com/"},"Postman")," is a tool to build and test HTTP requests in an easy-to-use interface without configuring a full development environment. Vertex provides a Postman Collection, a set of pre-configured API requests getting you started with the API without manually configuring each request."),(0,i.kt)("h2",{id:"open-vertexs-postman-collection"},"Open Vertex's Postman collection"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://www.postman.com/downloads/"},"Download and install Postman"),"."),(0,i.kt)("li",{parentName:"ol"},"In the upper-right corner of our ",(0,i.kt)("a",{parentName:"li",href:"https://docs.vertexvis.com/"},"API Reference")," documentation, click ",(0,i.kt)("strong",{parentName:"li"},"Run in Postman"),".")),(0,i.kt)("p",null,"The collection contains the reference documentation as well, as shown below."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Postman collection documentation",src:n(22494).Z,title:"Postman collection documentation"})),(0,i.kt)("p",null,"Notes about the Postman collection and API Reference code samples,"),(0,i.kt)(s,{mdxType:"PostmanInfo"}),(0,i.kt)("h2",{id:"get-an-access-token"},"Get an access token"),(0,i.kt)("p",null,"You gain secure access to Vertex APIs by exchanging OAuth 2.0 credentials for an access token. Subsequent Postman calls will then include the access token in the ",(0,i.kt)("inlineCode",{parentName:"p"},"Authorization")," header automatically."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)(c.R,{mdxType:"SignUpNote"}))),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"In Postman, on the left pane, right-click ",(0,i.kt)("strong",{parentName:"li"},"Vertex Platform API")," collection."),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Edit"),".")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Postman edit collection",src:n(50305).Z,title:"Postman edit collection"})),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"In the ",(0,i.kt)("strong",{parentName:"li"},"Edit Collection")," dialog, click the ",(0,i.kt)("strong",{parentName:"li"},"Authorization")," tab."),(0,i.kt)("li",{parentName:"ol"},"On the left, set ",(0,i.kt)("strong",{parentName:"li"},"Type")," to ",(0,i.kt)("strong",{parentName:"li"},"OAuth 2.0"),"."),(0,i.kt)("li",{parentName:"ol"},"On the right, from ",(0,i.kt)("strong",{parentName:"li"},"Grant Type"),", select ",(0,i.kt)("strong",{parentName:"li"},"Client Credentials"),"."),(0,i.kt)("li",{parentName:"ol"},"Enter the Vertex ",(0,i.kt)("strong",{parentName:"li"},"Client ID")," and ",(0,i.kt)("strong",{parentName:"li"},"Client Secret")," that you received when you created your Vertex account.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Postman edit collection dialog",src:n(67945).Z,title:"Postman edit collection dialog"})),(0,i.kt)("ol",{start:7},(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Get New Access Token"),"."),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Proceed")," and then ",(0,i.kt)("strong",{parentName:"li"},"Use Token")," on the next two dialogs."),(0,i.kt)("li",{parentName:"ol"},"In the bottom right corner, click ",(0,i.kt)("strong",{parentName:"li"},"Update"),".")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)(l.a,{mdxType:"ProtectSecretNote"}))),(0,i.kt)("p",null,"Congratulations! You got an access token and are ready to make API calls."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Access tokens expire in 60 minutes to help keep your data safe. If you receive a ",(0,i.kt)("inlineCode",{parentName:"p"},"401: Unauthorized")," error, it may indicate an expired access token. Perform the steps above to get a new one."))),(0,i.kt)("h2",{id:"make-api-requests"},"Make API requests"),(0,i.kt)("p",null,"Select a request from the Vertex Platform API collection. In this example, we use ",(0,i.kt)("inlineCode",{parentName:"p"},"get Files")," in the ",(0,i.kt)("inlineCode",{parentName:"p"},"files")," folder."),(0,i.kt)("p",null,"The Params tab (and Body tab if this were a ",(0,i.kt)("inlineCode",{parentName:"p"},"POST")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"PATCH")," request) include all required and optional parameters for completeness. They may also use auto-generated values, as shown below."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Postman get files",src:n(74839).Z,title:"Postman get files"})),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Unselect the checkbox next to each parameter to use the defaults."),(0,i.kt)("li",{parentName:"ol"},"On the ",(0,i.kt)("strong",{parentName:"li"},"Authorization")," tab, for ",(0,i.kt)("strong",{parentName:"li"},"Type"),", select ",(0,i.kt)("strong",{parentName:"li"},"Inherit auth from parent"),"."),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Send")," to the right of the request URL, and you'll see the response in the bottom pane.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Postman get files response",src:n(43720).Z,title:"Postman get files response"})),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"data")," array in the response is empty since we haven't created any files yet. Let's change that by following the ",(0,i.kt)("a",{parentName:"p",href:"/docs/guides/import-data"},"Import data")," guide."))}f.isMDXComponent=!0},22494:function(e,t,n){t.Z=n.p+"assets/images/postman-documentation-2654b2fb64677bc843a54fe6992e6dcb.png"},67945:function(e,t,n){t.Z=n.p+"assets/images/postman-edit-collection-dialog-e83d7ab00cbcf5d5842df5deb6296fc7.png"},50305:function(e,t,n){t.Z=n.p+"assets/images/postman-edit-collection-42cba413964103652c5c36dd4b4abd0f.png"},43720:function(e,t,n){t.Z=n.p+"assets/images/postman-get-files-response-db0878cc051dcf649a6adf45daecca08.png"},74839:function(e,t,n){t.Z=n.p+"assets/images/postman-get-files-54f7d865bf06a7c39c1e5743153e1428.png"}}]);