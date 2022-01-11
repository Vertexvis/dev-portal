"use strict";(self.webpackChunkdev_portal=self.webpackChunkdev_portal||[]).push([[678],{1280:function(e,t,n){n.d(t,{jc:function(){return b},en:function(){return x},AE:function(){return y}});var r=n(7462),i=n(7294),a="browserWindow_CU2T",s="browserWindowHeader_9KMa",o="buttons_HaVU",l="browserWindowAddressBar_ep3W",d="dot_AgBE",c="browserWindowMenuIcon_mrOC",p="bar_CAZr",m="browserWindowBody_jHfO";var u=function(e){var t=e.children,n=e.minHeight,r=e.url;return i.createElement("div",{className:a,style:{minHeight:n}},i.createElement("div",{className:s},i.createElement("div",{className:o},i.createElement("span",{className:d,style:{background:"#f25f58"}}),i.createElement("span",{className:d,style:{background:"#fbbe3c"}}),i.createElement("span",{className:d,style:{background:"#58cb42"}})),i.createElement("div",{className:l},r),i.createElement("div",{className:c},i.createElement("div",null,i.createElement("span",{className:p}),i.createElement("span",{className:p}),i.createElement("span",{className:p})))),i.createElement("div",{className:m},t))},v=n(8215),h=n(6396),w=n(3746),g=n(3618),k={html:"HTML",js:"JavaScript",xamarin:"Xamarin"},f=["viewer","js","html","xamarin"];function b(e){var t=e.selected,n=void 0===t?"js":t,r=e.groupId,a=e.children,s=i.Children.toArray(a).map((function(e){if(e.props.originalType===x)return{label:k[e.props.lang]||e.props.lang,value:e.props.lang,children:i.createElement(x,{lang:e.props.lang,code:e.props.code,children:e.props.children})};if(e.props.originalType===y)return{label:"Viewer",value:"viewer",children:i.createElement(y,{src:e.props.src})};throw new Error("Unhandled element type "+e.props.mdxType)})),o=s.sort((function(e,t){return f.indexOf(e.value)-f.indexOf(t.value)})),l=o.map((function(e){return{label:e.label,value:e.value}})),d=o.map((function(e){return i.createElement(v.Z,{key:e.value,value:e.value},e.children)})),c=0===s.length&&s.some((function(e){return e.value===n}))?n:s[0].value;return i.createElement(h.Z,{defaultValue:c,groupId:r,values:l},d)}function x(e){var t=e.lang,n=e.code,a=e.children;return n?i.createElement(w.ZP,(0,r.Z)({},w.lG,{theme:g.Z,code:n.default,language:t}),(function(e){var t=e.className,n=e.style,r=e.tokens,a=e.getLineProps,s=e.getTokenProps;return i.createElement("pre",{className:t,style:n},r.map((function(e,t){return i.createElement("div",a({line:e,key:t}),e.map((function(e,t){return i.createElement("span",s({token:e,key:t}))})))})))})):i.createElement(i.Fragment,null,a)}function y(e){var t=e.src,n=(0,i.useRef)(null);return(0,i.useEffect)((function(){function e(e){e.preventDefault()}return null!=n.current&&n.current.contentWindow.addEventListener("wheel",e,{passive:!1}),function(){null!=n.current&&n.current.contentWindow.removeEventListener("wheel",e)}})),i.createElement(u,{url:"developer.vertexvis.com"},i.createElement("iframe",{ref:n,width:"100%",height:"400",src:t,frameBorder:"0",style:{display:"block"}}))}},4752:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return d},metadata:function(){return c},toc:function(){return p},default:function(){return u}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),s=n(1280),o=["components"],l={id:"sdk-web-getting-started",title:"Getting started with Web UI Components"},d=void 0,c={unversionedId:"sdk/sdk-web-getting-started",id:"version-beta/sdk/sdk-web-getting-started",title:"Getting started with Web UI Components",description:"Installation",source:"@site/versioned_docs/version-beta/sdk/sdk-web-getting-started.md",sourceDirName:"sdk",slug:"/sdk/sdk-web-getting-started",permalink:"/docs/beta/sdk/sdk-web-getting-started",editUrl:"https://github.com/Vertexvis/dev-portal/tree/main/versioned_docs/version-beta/sdk/sdk-web-getting-started.md",tags:[],version:"beta",frontMatter:{id:"sdk-web-getting-started",title:"Getting started with Web UI Components"},sidebar:"version-beta/docs",previous:{title:"Web UI Components introduction",permalink:"/docs/beta/sdk/sdk-web"},next:{title:"Viewer component API",permalink:"/docs/beta/sdk/sdk-web-api"}},p=[{value:"Installation",id:"installation",children:[{value:"Script tag",id:"script-tag",children:[],level:3}],level:2},{value:"Loading a model in the viewer",id:"loading-a-model-in-the-viewer",children:[],level:2},{value:"More examples",id:"more-examples",children:[],level:2}],m={toc:p};function u(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("p",null,"Before you can start using the Web UI Components, you will need application credentials and an access token. You should also import data into the platform for use with the viewer."),(0,a.kt)("p",null,"For more information, see ",(0,a.kt)("a",{parentName:"p",href:"../guides/authentication"},"Authentication")," and ",(0,a.kt)("a",{parentName:"p",href:"../guides/importing-data"},"Importing Data"),"."),(0,a.kt)("h3",{id:"script-tag"},"Script tag"),(0,a.kt)("p",null,"The easiest way to pull the viewer component into your project is to include the viewer in a ",(0,a.kt)("inlineCode",{parentName:"p"},"<script>")," tag of your HTML."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<html>\n  <head>\n    <link\n      rel="stylesheet"\n      href="https://unpkg.com/@vertexvis/viewer@0.3.x/dist/viewer/viewer.css"\n    />\n    <script\n      type="module"\n      src="https://unpkg.com/@vertexvis/viewer@0.3.x/dist/viewer/viewer.esm.js"\n    ><\/script>\n    <script\n      nomodule\n      src="https://unpkg.com/@vertexvis/viewer@0.3.x/dist/viewer.js"\n    ><\/script>\n  </head>\n</html>\n')),(0,a.kt)("h2",{id:"loading-a-model-in-the-viewer"},"Loading a model in the viewer"),(0,a.kt)("p",null,"HELLO WORLD. The first thing you should try out when getting started with the Web UI Components is the viewer component, which can be embedded within web applications and other environments with browser engine capabilities."),(0,a.kt)("p",null,"To try it out, create a simple HTML file using the viewer library. This provides an interactive 3D view of models that have been imported into the platform. Models must be imported into the platform beforehand, and can be loaded by ",(0,a.kt)("inlineCode",{parentName:"p"},"fileId"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"externalId"),", or ",(0,a.kt)("inlineCode",{parentName:"p"},"sceneStateId"),". See the ",(0,a.kt)("a",{parentName:"p",href:"../guides/importing-data"},"Importing Data")," guide for\nhelp importing your data."),(0,a.kt)("p",null,"Here's a simple example of loading a model:"),(0,a.kt)(s.jc,{mdxType:"CodeExamples"},(0,a.kt)(s.en,{lang:"html",mdxType:"Example"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<html>\n  <head>\n    <link\n      rel="stylesheet"\n      href="https://unpkg.com/@vertexvis/viewer@0.3.2-5/dist/viewer/viewer.css"\n    />\n    <script\n      type="module"\n      src="https://unpkg.com/@vertexvis/viewer@0.3.2-5/dist/viewer/viewer.esm.js"\n    ><\/script>\n    <script\n      nomodule\n      src="https://unpkg.com/@vertexvis/viewer@0.3.2-5/dist/viewer.js"\n    ><\/script>\n\n    <script>\n      window.addEventListener(\'DOMContentLoaded\', () => {\n        main();\n      });\n\n      function main() {\n        const viewer = document.querySelector(\'#viewer\');\n        viewer.addEventListener(\'pick\', (event) => {\n          console.log(\'picked parts\', event.details.hitResults);\n        });\n      }\n    <\/script>\n  </head>\n  <body>\n    <vertex-viewer\n      id="viewer"\n      credentials-client-id="client-id"\n      credentials-token="token"\n      model="urn:vertexvis:eedc:scenestate:123"\n    >\n      <vertex-viewer-toolbar data-viewer="viewer"></vertex-viewer-toolbar>\n    </vertex-viewer>\n  </body>\n</html>\n'))),(0,a.kt)(s.AE,{src:"/examples/getting-started/viewer.html",mdxType:"Viewer"})),(0,a.kt)("h2",{id:"more-examples"},"More examples"),(0,a.kt)("p",null,"After you've loaded a model into the basic viewer, you can begin to explore the additional capabilities of the\nviewer components combined with the Vertex platform APIs."),(0,a.kt)("p",null,"Check out ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Vertexvis/vertex-web-sdk/tree/master/examples"},"UI Component Examples")," on GitHub for more complex examples."))}u.isMDXComponent=!0}}]);