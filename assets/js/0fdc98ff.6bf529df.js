"use strict";(self.webpackChunkdev_portal=self.webpackChunkdev_portal||[]).push([[9743],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(n),u=r,h=m["".concat(l,".").concat(u)]||m[u]||d[u]||i;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},58215:function(e,t,n){var a=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},55064:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(67294),r=n(79443);var i=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},o=n(86010),s="tabItem_1uMI",l="tabItemActive_2DSg";var c=37,p=39;var d=function(e){var t=e.lazy,n=e.block,r=e.defaultValue,d=e.values,m=e.groupId,u=e.className,h=i(),v=h.tabGroupChoices,f=h.setTabGroupChoices,g=(0,a.useState)(r),k=g[0],N=g[1],y=a.Children.toArray(e.children),w=[];if(null!=m){var b=v[m];null!=b&&b!==k&&d.some((function(e){return e.value===b}))&&N(b)}var x=function(e){var t=e.currentTarget,n=w.indexOf(t),a=d[n].value;N(a),null!=m&&(f(m,a),setTimeout((function(){var e,n,a,r,i,o,s,c;(e=t.getBoundingClientRect(),n=e.top,a=e.left,r=e.bottom,i=e.right,o=window,s=o.innerHeight,c=o.innerWidth,n>=0&&i<=c&&r<=s&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l),setTimeout((function(){return t.classList.remove(l)}),2e3))}),150))},I=function(e){var t,n;switch(e.keyCode){case p:var a=w.indexOf(e.target)+1;n=w[a]||w[0];break;case c:var r=w.indexOf(e.target)-1;n=w[r]||w[w.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},u)},d.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:k===t?0:-1,"aria-selected":k===t,className:(0,o.Z)("tabs__item",s,{"tabs__item--active":k===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:I,onFocus:x,onClick:x},n)}))),t?(0,a.cloneElement)(y.filter((function(e){return e.props.value===k}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==k})}))))}},79443:function(e,t,n){var a=(0,n(67294).createContext)(void 0);t.Z=a},55180:function(e,t,n){n.d(t,{I:function(){return r}});var a=n(67294);function r(){return a.createElement(a.Fragment,null,"To import an entire assembly, you may need to take an additional step to"," ",a.createElement("a",{href:"https://github.com/Vertexvis/vertex-community/discussions/19#discussioncomment-660793"},"prepare it for Vertex"),".")}},73773:function(e,t,n){n.d(t,{a:function(){return r}});var a=n(67294);function r(){return a.createElement(a.Fragment,null,"Your Vertex client secret is sensitive and must be kept secure at all times. You should ",a.createElement("strong",null,"never")," include it in client-side web applications.")}},4947:function(e,t,n){n.d(t,{R:function(){return r}});var a=n(67294);function r(){return a.createElement(a.Fragment,null,"The following instructions assume:",a.createElement("ul",null,a.createElement("li",null,"You created a free developer account by"," ",a.createElement("a",{href:"https://aws.amazon.com/marketplace/pp/B08PP264Z1?stl=true"},"visiting our listing on the AWS Marketplace"),"."),a.createElement("li",null,"You created credentials in the"," ",a.createElement("a",{href:"https://console.vertexvis.com/applications"},"Vertex Console")," ","and have your Vertex client ID and secret.")))}},2204:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return m},contentTitle:function(){return u},metadata:function(){return h},toc:function(){return v},default:function(){return g}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=n(55180),s=n(73773),l=n(4947),c=n(55064),p=n(58215),d=["components"],m={id:"import-data",title:"Import data with CLI",description:"Import your team's or organization's parts into Vertex's Parts Library using Vertex's platform APIs."},u=void 0,h={unversionedId:"guides/import-data",id:"guides/import-data",isDocsHomePage:!1,title:"Import data with CLI",description:"Import your team's or organization's parts into Vertex's Parts Library using Vertex's platform APIs.",source:"@site/docs/guides/import-data.mdx",sourceDirName:"guides",slug:"/guides/import-data",permalink:"/docs/guides/import-data",editUrl:"https://github.com/Vertexvis/dev-portal/tree/main/docs/guides/import-data.mdx",version:"current",frontMatter:{id:"import-data",title:"Import data with CLI",description:"Import your team's or organization's parts into Vertex's Parts Library using Vertex's platform APIs."},sidebar:"guidesSidebar",previous:{title:"Render your first scene",permalink:"/docs/guides/render-your-first-scene"},next:{title:"Build your first application",permalink:"/docs/guides/build-your-first-app"}},v=[{value:"Install the CLI",id:"install-the-cli",children:[]},{value:"CLI authentication",id:"cli-authentication",children:[]},{value:"Import data",id:"import-data",children:[]},{value:"Render scenes",id:"render-scenes",children:[]},{value:"Wrapping up",id:"wrapping-up",children:[]}],f={toc:v};function g(e){var t=e.components,n=(0,r.Z)(e,d);return(0,i.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Now that you've ",(0,i.kt)("a",{parentName:"p",href:"/docs/guides/render-your-first-scene"},"rendered your first scene"),", try importing your own 3D data using the Vertex command-line interface (CLI). The CLI makes Vertex API calls on your behalf, simplifying typical operations into single commands."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)(l.R,{mdxType:"SignUpNote"}))),(0,i.kt)("h2",{id:"install-the-cli"},"Install the CLI"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Install the CLI with either ",(0,i.kt)("a",{parentName:"li",href:"https://www.npmjs.com/get-npm"},"npm")," or ",(0,i.kt)("a",{parentName:"li",href:"https://classic.yarnpkg.com/en/docs/install/"},"Yarn"),". If you need help, here's a ",(0,i.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=NzXeLbOP_-0"},"third-party video")," for setting up Node.js and npm.")),(0,i.kt)(c.Z,{defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},(0,i.kt)(p.Z,{value:"npm",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"npm install --global @vertexvis/cli\n"))),(0,i.kt)(p.Z,{value:"yarn",mdxType:"TabItem"},(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"On Windows, you may need to add Yarn's ",(0,i.kt)("inlineCode",{parentName:"p"},"bin")," directory to your ",(0,i.kt)("inlineCode",{parentName:"p"},"PATH")," variable; ",(0,i.kt)("a",{parentName:"p",href:"https://stackoverflow.com/a/60436135"},"more details here"),"."))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"yarn global add @vertexvis/cli\n")))),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Verify it's working by accessing help.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"# Help for the CLI as a whole\nvertex --help\n\n# Help for an individual command\nvertex configure --help\n\n# Help for a topic\nvertex scenes --help\n\n# Help for a command within a topic\nvertex scenes:get --help\n")),(0,i.kt)("h2",{id:"cli-authentication"},"CLI authentication"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Have your Vertex client ID and secret ready so that the CLI can authenticate Vertex API calls on your behalf.")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)(s.a,{mdxType:"ProtectSecretNote"}))),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Run ",(0,i.kt)("inlineCode",{parentName:"li"},"vertex configure")," and follow the prompts.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"vertex configure\n")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Some customers use a different base API path than the default (",(0,i.kt)("a",{parentName:"p",href:"https://platform.vertexvis.com"},"https://platform.vertexvis.com"),"). In this case, add the ",(0,i.kt)("inlineCode",{parentName:"p"},"--basePath")," option to all commands, e.g., ",(0,i.kt)("inlineCode",{parentName:"p"},"vertex configure --basePath [YOUR_BASE_PATH]"),"."))),(0,i.kt)("p",null,"After you follow the prompts, the command creates ",(0,i.kt)("inlineCode",{parentName:"p"},"~/.config/@vertexvis/cli/config.json")," on macOS/Linux and ",(0,i.kt)("inlineCode",{parentName:"p"},"%LOCALAPPDATA%\\@vertexvis\\cli\\config.json")," on Windows with your credentials. When you run additional commands, the CLI uses these to authenticate API calls."),(0,i.kt)("p",null,"Keep your client ID and secret handy; you'll use it in the following guide as well."),(0,i.kt)("h2",{id:"import-data"},"Import data"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"To import 3D data in one of ",(0,i.kt)("a",{parentName:"li",href:"/docs/guides/supported-file-formats"},"Vertex's supported formats"),", create a JSON file containing a list of scene items. Multiple CLI commands use this JSON file to build requests for the API.")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If you don't have 3D data handy, download a prepared model from our ",(0,i.kt)("a",{parentName:"p",href:"/docs/guides/model-database"},"3D database")," to follow along."),(0,i.kt)(o.I,{mdxType:"ImportAssemblyNote"}))),(0,i.kt)("p",null,"Below is a simple example of a JSON file with the required parameters specified. For a complete list and explanation of each parameter, see the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Vertexvis/vertex-cli/blob/master/src/create-items/index.d.ts"},"type definition"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="vertex-valve.json"',title:'"vertex-valve.json"'},'[\n  {\n    "indexMetadata": true,\n    "source": {\n      "fileName": "[YOUR_PATH_TO_3D_DATA_FILE_INCLUDING_FILE_EXTENSION]",\n      "suppliedPartId": "vertex-valve",\n      "suppliedRevisionId": "1"\n    }\n  }\n]\n')),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Next, run ",(0,i.kt)("inlineCode",{parentName:"li"},"create-parts")," with the path to this JSON file as an argument. ",(0,i.kt)("inlineCode",{parentName:"li"},"create-parts")," uploads the 3D data, translates it into 3D geometry, and creates parts in Vertex's Parts Library. Vertex's Parts Library is a repository of your team's or organization's parts, each with references to geometry and optional metadata. As we'll see later in this guide, you can use combinations of these parts to build scenes.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"vertex create-parts [YOUR_PATH_TO_JSON_FILE]\n")),(0,i.kt)("h2",{id:"render-scenes"},"Render scenes"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"With the parts now in Vertex's Parts Library, run ",(0,i.kt)("inlineCode",{parentName:"li"},"create-scene")," to create a scene and add the root part as a scene item to that scene. This command prints the created scene ID.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"vertex create-scene --name [YOUR_SCENE_NAME] [YOUR_PATH_TO_JSON_FILE]\n")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"To render the scene, run the ",(0,i.kt)("inlineCode",{parentName:"li"},"scenes:render")," command and include the  ",(0,i.kt)("inlineCode",{parentName:"li"},"--viewer")," flag along with the scene ID from the previous step.\nThe ",(0,i.kt)("inlineCode",{parentName:"li"},"--viewer")," flag creates an HTML file using Vertex's Viewer component similar to the one you wrote in the ",(0,i.kt)("a",{parentName:"li",href:"/docs/guides/render-your-first-scene"},"Render your first scene")," guide. It then opens this file in your browser so you can interact with it.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"vertex scenes:render --viewer [YOUR_SCENE_ID]\n")),(0,i.kt)("p",null,"Keep your scene ID handy; you'll use it in the following guide as well."),(0,i.kt)("h2",{id:"wrapping-up"},"Wrapping up"),(0,i.kt)("p",null,"Congratulations! You've imported your own 3D data into Vertex and interacted with it using our Viewer component. To recap the concepts learned so far:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Vertex's command-line interface (CLI) makes Vertex API calls on your behalf, simplifying typical operations into single commands."),(0,i.kt)("li",{parentName:"ul"},"Vertex's Parts Library is a repository of your team's or organization's parts. You can build scenes using any combination of these parts.")),(0,i.kt)("p",null,"We explained a few commands in this guide, but for a complete list of CLI commands and their options, check out the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Vertexvis/vertex-cli"},(0,i.kt)("inlineCode",{parentName:"a"},"vertex-cli")," README"),"."))}g.isMDXComponent=!0},86010:function(e,t,n){function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}n.d(t,{Z:function(){return r}})}}]);