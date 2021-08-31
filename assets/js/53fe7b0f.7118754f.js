"use strict";(self.webpackChunkdev_portal=self.webpackChunkdev_portal||[]).push([[9028],{11967:function(e,t,n){n.d(t,{jc:function(){return k},en:function(){return x},AE:function(){return b}});var r=n(87462),i=n(67294),a=n(55064),s=n(58215),o="browserWindow_25XZ",l="browserWindowHeader_KqAw",c="buttons_1hjc",d="browserWindowAddressBar_3kU8",u="dot_3vUt",p="browserWindowMenuIcon_62Vr",m="bar_1GUQ",h="browserWindowBody_2pXR";var v=function(e){var t=e.children,n=e.minHeight,r=e.url;return i.createElement("div",{className:o,style:{minHeight:n}},i.createElement("div",{className:l},i.createElement("div",{className:c},i.createElement("span",{className:u,style:{background:"#f25f58"}}),i.createElement("span",{className:u,style:{background:"#fbbe3c"}}),i.createElement("span",{className:u,style:{background:"#58cb42"}})),i.createElement("div",{className:d},r),i.createElement("div",{className:p},i.createElement("div",null,i.createElement("span",{className:m}),i.createElement("span",{className:m}),i.createElement("span",{className:m})))),i.createElement("div",{className:h},t))},w=n(24544),f=n(13618),y={html:"HTML",js:"JavaScript",xamarin:"Xamarin"},g=["viewer","js","html","xamarin"];function k(e){var t=e.selected,n=void 0===t?"js":t,r=e.groupId,o=e.children,l=i.Children.toArray(o).map((function(e){if(e.props.originalType===x)return{label:y[e.props.lang]||e.props.lang,value:e.props.lang,children:i.createElement(x,{lang:e.props.lang,code:e.props.code,children:e.props.children})};if(e.props.originalType===b)return{label:"Viewer",value:"viewer",children:i.createElement(b,{src:e.props.src})};throw new Error("Unhandled element type "+e.props.mdxType)})),c=l.sort((function(e,t){return g.indexOf(e.value)-g.indexOf(t.value)})),d=c.map((function(e){return{label:e.label,value:e.value}})),u=c.map((function(e){return i.createElement(s.Z,{key:e.value,value:e.value},e.children)})),p=0===l.length&&l.some((function(e){return e.value===n}))?n:l[0].value;return i.createElement(a.Z,{defaultValue:p,groupId:r,values:d},u)}function x(e){var t=e.lang,n=e.code,a=e.children;return n?i.createElement(w.ZP,(0,r.Z)({},w.lG,{theme:f.Z,code:n.default,language:t}),(function(e){var t=e.className,n=e.style,r=e.tokens,a=e.getLineProps,s=e.getTokenProps;return i.createElement("pre",{className:t,style:n},r.map((function(e,t){return i.createElement("div",a({line:e,key:t}),e.map((function(e,t){return i.createElement("span",s({token:e,key:t}))})))})))})):i.createElement(i.Fragment,null,a)}function b(e){var t=e.src,n=(0,i.useRef)(null);return(0,i.useEffect)((function(){function e(e){e.preventDefault()}return null!=n.current&&n.current.contentWindow.addEventListener("wheel",e,{passive:!1}),function(){null!=n.current&&n.current.contentWindow.removeEventListener("wheel",e)}})),i.createElement(v,{url:"developer.vertexvis.com"},i.createElement("iframe",{ref:n,width:"100%",height:"400",src:t,frameBorder:"0",style:{display:"block"}}))}},60342:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return u},default:function(){return v},frontMatter:function(){return d},metadata:function(){return p},toc:function(){return m}});var r={};n.r(r),n.d(r,{default:function(){return l}});var i=n(87462),a=n(63366),s=(n(67294),n(3905)),o=n(11967),l='<!DOCTYPE html>\n<html lang="">\n  <head>\n    <meta charset="utf-8" />\n    <title>Getting Started with Vertex</title>\n    <meta name="viewport" content="width=device-width, initial-scale=1" />\n    <link\n      rel="stylesheet"\n      href="https://unpkg.com/@vertexvis/viewer@0.9.x/dist/viewer/viewer.css"\n    />\n    <style>\n      html,\n      body,\n      .viewer {\n        width: 100%;\n        height: 100%;\n        padding: 0;\n        margin: 0;\n      }\n    </style>\n  </head>\n  <body>\n    <script\n      type="module"\n      src="https://unpkg.com/@vertexvis/viewer@0.9.x/dist/viewer/viewer.esm.js"\n    ><\/script>\n    <script\n      nomodule\n      src="https://unpkg.com/@vertexvis/viewer@0.9.x/dist/viewer.js"\n    ><\/script>\n\n    <vertex-viewer\n      class="viewer"\n      client-id="08F675C4AACE8C0214362DB5EFD4FACAFA556D463ECA00877CB225157EF58BFA"\n    >\n    </vertex-viewer>\n\n    <script type="module">\n      import { defineCustomElements } from \'https://unpkg.com/@vertexvis/viewer@0.9.x/dist/esm/loader.js\';\n      import { ColorMaterial } from \'https://unpkg.com/@vertexvis/viewer@0.9.x/dist/esm/index.js\';\n\n      async function main() {\n        await defineCustomElements(window);\n\n        const viewer = document.querySelector(\'vertex-viewer\');\n        await viewer.load(\n          `urn:vertexvis:stream-key:Eh96kzXEppNfcxj5gbbqdJ9oUdQPB7hXzHrU`\n        );\n\n        viewer.addEventListener(\'tap\', async (event) => {\n          const scene = await viewer.scene();\n          const raycaster = scene.raycaster();\n\n          const result = await raycaster.hitItems(event.detail.position);\n          const [hit] = result.hits;\n\n          if (hit != null) {\n            await scene\n              .items((op) => [\n                op.where((q) => q.all()).deselect(),\n                op\n                  .where((q) => q.withItemId(hit.itemId.hex))\n                  .select(ColorMaterial.create(255, 255, 0)),\n              ])\n              .execute();\n          } else {\n            await scene\n              .items((op) => op.where((q) => q.all()).deselect())\n              .execute();\n          }\n        });\n      }\n\n      main();\n    <\/script>\n  </body>\n</html>\n',c=["components"],d={id:"render-your-first-scene",title:"Render your first scene",description:"Use the Vertex platform's Viewer component to render your first scene."},u=void 0,p={unversionedId:"guides/render-your-first-scene",id:"guides/render-your-first-scene",isDocsHomePage:!1,title:"Render your first scene",description:"Use the Vertex platform's Viewer component to render your first scene.",source:"@site/docs/guides/render-your-first-scene.mdx",sourceDirName:"guides",slug:"/guides/render-your-first-scene",permalink:"/docs/guides/render-your-first-scene",editUrl:"https://github.com/Vertexvis/dev-portal/tree/main/docs/guides/render-your-first-scene.mdx",version:"current",frontMatter:{id:"render-your-first-scene",title:"Render your first scene",description:"Use the Vertex platform's Viewer component to render your first scene."},sidebar:"guidesSidebar",next:{title:"Import data with CLI",permalink:"/docs/guides/import-data"}},m=[{value:"Before you start",id:"before-you-start",children:[]},{value:"Render the scene",id:"render-the-scene",children:[]},{value:"Interact with the scene",id:"interact-with-the-scene",children:[]},{value:"Wrapping up",id:"wrapping-up",children:[]}],h={toc:m};function v(e){var t=e.components,n=(0,a.Z)(e,c);return(0,s.kt)("wrapper",(0,i.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"The Vertex Web UI Components include a collection of standards-based ",(0,s.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/Web_Components"},"web components")," that let you view, interact with, and modify 3D data. These components look and act like regular HTML elements, allowing you to embed our viewer into simple JavaScript applications or more complex applications using React, Vue, or Angular."),(0,s.kt)("p",null,"All the heavy lifting of rendering takes place server-side within Vertex's platform, enabling you to build performant applications across all types of devices using even complex models."),(0,s.kt)("p",null,"The following is a brief introduction to render your first scene in Vertex. The working example complete with an interactive demo is available at the ",(0,s.kt)("a",{parentName:"p",href:"#wrapping-up"},"bottom of the page")," if you get stuck and need help."),(0,s.kt)("h2",{id:"before-you-start"},"Before you start"),(0,s.kt)("p",null,"Save the following HTML to a file on your computer and open it in your browser. The page is currently blank."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html lang="">\n  <head>\n    <meta charset="utf-8" />\n    <title>Getting Started with Vertex</title>\n    <meta name="viewport" content="width=device-width, initial-scale=1" />\n    <link\n      rel="stylesheet"\n      href="https://unpkg.com/@vertexvis/viewer@0.9.x/dist/viewer/viewer.css"\n    />\n    <style>\n      html,\n      body,\n      .viewer {\n        width: 100%;\n        height: 100%;\n        padding: 0;\n        margin: 0;\n      }\n    </style>\n  </head>\n  <body>\n    <script\n      type="module"\n      src="https://unpkg.com/@vertexvis/viewer@0.9.x/dist/viewer/viewer.esm.js"\n    ><\/script>\n    <script\n      nomodule\n      src="https://unpkg.com/@vertexvis/viewer@0.9.x/dist/viewer.js"\n    ><\/script>\n\n    <vertex-viewer\n      class="viewer"\n      client-id="08F675C4AACE8C0214362DB5EFD4FACAFA556D463ECA00877CB225157EF58BFA"\n    >\n    </vertex-viewer>\n\n    <script type="module">\n      // Our JavaScript will go here.\n    <\/script>\n  </body>\n</html>\n')),(0,s.kt)("h2",{id:"render-the-scene"},"Render the scene"),(0,s.kt)("p",null,"To render a scene, you'll need a stream key. Stream keys grant the Viewer component access to a specific scene. This is explained in more detail later, but for now, use our test key, ",(0,s.kt)("inlineCode",{parentName:"p"},"Eh96kzXEppNfcxj5gbbqdJ9oUdQPB7hXzHrU"),". Copy the following into the empty ",(0,s.kt)("inlineCode",{parentName:"p"},"<script>")," tag."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"import { defineCustomElements } from 'https://unpkg.com/@vertexvis/viewer@0.9.x/dist/esm/loader.js';\nimport { ColorMaterial } from 'https://unpkg.com/@vertexvis/viewer@0.9.x/dist/esm/index.js';\n\nasync function main() {\n  await defineCustomElements(window);\n\n  const viewer = document.querySelector('vertex-viewer');\n  await viewer.load(\n    `urn:vertexvis:stream-key:Eh96kzXEppNfcxj5gbbqdJ9oUdQPB7hXzHrU`\n  );\n}\n\nmain();\n")),(0,s.kt)("p",null,"Here's what this code does:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"The first line imports the loader that fetches web components used on our page. The loader only loads the required components, minimizing the startup time of your application."),(0,s.kt)("li",{parentName:"ul"},"The second line imports a utility that you'll use later. One thing to note is that we're using the ES6 import syntax to load these files. Our components are packaged and distributed using the modern ECMAScript module standard, making it easy to load them in a browser."),(0,s.kt)("li",{parentName:"ul"},"Inside the ",(0,s.kt)("inlineCode",{parentName:"li"},"main")," function, ",(0,s.kt)("inlineCode",{parentName:"li"},"defineCustomElements")," searches for components and registers them with the browser. Once they're registered, you can interact with the viewer."),(0,s.kt)("li",{parentName:"ul"},"The next lines query for the viewer in the DOM and load the scene via the stream key. This starts a new streaming session with its own scene view. Scene views isolate scene modifications such as camera and scene item updates. This allows users to view and modify a scene without their changes impacting others viewing the same scene")),(0,s.kt)("p",null,"You should now see the model rendering in your browser. You've rendered your first scene."),(0,s.kt)("h2",{id:"interact-with-the-scene"},"Interact with the scene"),(0,s.kt)("p",null,"Now that you're able to render a scene, add a simple interaction to select items based on clicking or tapping on them. Update the ",(0,s.kt)("inlineCode",{parentName:"p"},"main")," function with the following JavaScript."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"async function main() {\n  await defineCustomElements(window);\n\n  const viewer = document.querySelector('vertex-viewer');\n  await viewer.load(\n    `urn:vertexvis:stream-key:Eh96kzXEppNfcxj5gbbqdJ9oUdQPB7hXzHrU`\n  );\n\n  viewer.addEventListener('tap', async (event) => {\n    const scene = await viewer.scene();\n    const raycaster = scene.raycaster();\n\n    const result = await raycaster.hitItems(event.detail.position);\n    console.log('hit results', result.hits);\n  });\n}\n")),(0,s.kt)("p",null,"Here's what this code does:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Registering for ",(0,s.kt)("inlineCode",{parentName:"li"},"tap")," events in the viewer figures out which item to select. When a user clicks or taps in the viewer, the event listener receives an event that contains the 2D position of the click location."),(0,s.kt)("li",{parentName:"ul"},"Inside the event listener, an instance of the scene and a raycaster is retrieved. The ",(0,s.kt)("inlineCode",{parentName:"li"},"scene")," object performs operations on items and the camera. The ",(0,s.kt)("inlineCode",{parentName:"li"},"raycaster")," performs hit tests on items in the scene. Calling ",(0,s.kt)("inlineCode",{parentName:"li"},"raycaster.hitItems")," with the 2D coordinates of the event returns a list of items that intersect those coordinates. Notice you're using ",(0,s.kt)("inlineCode",{parentName:"li"},"async/await")," here. Since these operations happen asynchronously, you need to wait for those tasks to complete before continuing.")),(0,s.kt)("p",null,"Try clicking on an item in the viewer. Look in your browser's developer console. You should see logs printing an array of hit results when tapping on an item and an empty array when tapping in white space."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"hit results [Hit]\nhit results []\n")),(0,s.kt)("p",null,"Now that you're receiving hit results, you can use them to perform actions on the scene. Replace your ",(0,s.kt)("inlineCode",{parentName:"p"},"main")," function with the following JavaScript."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"async function main() {\n  await defineCustomElements(window);\n\n  const viewer = document.querySelector('vertex-viewer');\n  await viewer.load(\n    `urn:vertexvis:stream-key:Eh96kzXEppNfcxj5gbbqdJ9oUdQPB7hXzHrU`\n  );\n\n  viewer.addEventListener('tap', async (event) => {\n    const scene = await viewer.scene();\n    const raycaster = scene.raycaster();\n\n    const result = await raycaster.hitItems(event.detail.position);\n    const [hit] = result.hits;\n\n    if (hit != null) {\n      await scene\n        .items((op) => [\n          op.where((q) => q.all()).deselect(),\n          op\n            .where((q) => q.withItemId(hit.itemId.hex))\n            .select(ColorMaterial.create(255, 255, 0)),\n        ])\n        .execute();\n    } else {\n      await scene.items((op) => op.where((q) => q.all()).deselect()).execute();\n    }\n  });\n}\n")),(0,s.kt)("p",null,"Here's what this code does:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"An API from the Viewer component modifies the scene's items. Scenes contain a tree of items, and each item has a position, visibility, selection, material, and reference geometry. Vertex can render huge scenes, so it's prohibitive to send all scene items over the network. The client may also run into memory constraints, especially on lower-end devices. Instead, we provide a query API to pick the items to update and which operations to perform on them, and then send this operation to the server to execute on the scene."),(0,s.kt)("li",{parentName:"ul"},"For the queries in this interaction: when you get a hit result back, you create a compound query that deselects all items in the scene and selects an item matching an ID from your hit result. Calling ",(0,s.kt)("inlineCode",{parentName:"li"},"execute")," sends the operation to the server, updates the scene, and renders a new image.")),(0,s.kt)("p",null,"With this interaction written, try selecting items in the viewer. Tapping an item should apply the selection color. Tapping in white space should deselect all items."),(0,s.kt)("h2",{id:"wrapping-up"},"Wrapping up"),(0,s.kt)("p",null,"Congratulations! To recap the concepts learned so far:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"A scene is a container for scene items."),(0,s.kt)("li",{parentName:"ul"},"Scene items have a position, visibility, selection, material, and reference geometry."),(0,s.kt)("li",{parentName:"ul"},"You gain access to create views of a scene via stream keys."),(0,s.kt)("li",{parentName:"ul"},"Scene views allow for simultaneous viewing and modification of a scene."),(0,s.kt)("li",{parentName:"ul"},"You use queries in the Viewer component to modify the state of scene items within scene views.")),(0,s.kt)(o.jc,{mdxType:"CodeExamples"},(0,s.kt)(o.en,{lang:"html",code:r,mdxType:"Example"}),(0,s.kt)(o.AE,{src:"/examples/first-scene/index.html",mdxType:"Viewer"})))}v.isMDXComponent=!0}}]);