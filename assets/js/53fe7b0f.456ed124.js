(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{122:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return u})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return m}));var r={};n.r(r),n.d(r,"default",(function(){return c}));var i=n(3),a=n(7),o=(n(0),n(125)),s=n(166),c='<!DOCTYPE html>\n<html lang="">\n  <head>\n    <meta charset="utf-8" />\n    <title>Getting Started with Vertex</title>\n    <meta name="viewport" content="width=device-width, initial-scale=1" />\n    <link\n      rel="stylesheet"\n      href="https://unpkg.com/@vertexvis/viewer@0.9.x/dist/viewer/viewer.css"\n    />\n    <style>\n      html,\n      body,\n      .viewer {\n        width: 100%;\n        height: 100%;\n        padding: 0;\n        margin: 0;\n      }\n    </style>\n  </head>\n  <body>\n    <script\n      type="module"\n      src="https://unpkg.com/@vertexvis/viewer@0.9.x/dist/viewer/viewer.esm.js"\n    ><\/script>\n    <script\n      nomodule\n      src="https://unpkg.com/@vertexvis/viewer@0.9.x/dist/viewer.js"\n    ><\/script>\n\n    <vertex-viewer\n      class="viewer"\n      client-id="08F675C4AACE8C0214362DB5EFD4FACAFA556D463ECA00877CB225157EF58BFA"\n    >\n    </vertex-viewer>\n\n    <script type="module">\n      import { defineCustomElements } from \'https://unpkg.com/@vertexvis/viewer@0.9.x/dist/esm/loader.js\';\n      import { ColorMaterial } from \'https://unpkg.com/@vertexvis/viewer@0.9.x/dist/esm/index.js\';\n\n      async function main() {\n        await defineCustomElements(window);\n\n        const viewer = document.querySelector(\'vertex-viewer\');\n        await viewer.load(\n          `urn:vertexvis:stream-key:U9cSWVb7fvS9k-NQcT28uZG6wtm6xmiG0ctU`\n        );\n\n        viewer.addEventListener(\'tap\', async (event) => {\n          const scene = await viewer.scene();\n          const raycaster = scene.raycaster();\n\n          const result = await raycaster.hitItems(event.detail.position);\n          const [hit] = result.hits;\n\n          if (hit != null) {\n            await scene\n              .items((op) => [\n                op.where((q) => q.all()).deselect(),\n                op\n                  .where((q) => q.withItemId(hit.itemId.hex))\n                  .select(ColorMaterial.create(255, 255, 0)),\n              ])\n              .execute();\n          } else {\n            await scene\n              .items((op) => op.where((q) => q.all()).deselect())\n              .execute();\n          }\n        });\n      }\n\n      main();\n    <\/script>\n  </body>\n</html>\n',l={id:"render-your-first-scene",title:"Render your first scene",description:"Use the Vertex platform's Viewer component to render your first scene."},u={unversionedId:"guides/render-your-first-scene",id:"guides/render-your-first-scene",isDocsHomePage:!1,title:"Render your first scene",description:"Use the Vertex platform's Viewer component to render your first scene.",source:"@site/docs/guides/render-your-first-scene.mdx",sourceDirName:"guides",slug:"/guides/render-your-first-scene",permalink:"/docs/guides/render-your-first-scene",editUrl:"https://github.com/Vertexvis/dev-portal/tree/main/docs/guides/render-your-first-scene.mdx",version:"current",frontMatter:{id:"render-your-first-scene",title:"Render your first scene",description:"Use the Vertex platform's Viewer component to render your first scene."},sidebar:"guidesSidebar",next:{title:"Import data with CLI",permalink:"/docs/guides/import-data"}},p=[{value:"Before we start",id:"before-we-start",children:[]},{value:"Rendering the scene",id:"rendering-the-scene",children:[]},{value:"Interacting with the scene",id:"interacting-with-the-scene",children:[]},{value:"Wrapping up",id:"wrapping-up",children:[]}],d={toc:p};function m(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(i.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The Vertex Web UI Components include a collection of standards-based ",Object(o.b)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/Web_Components"},"web components")," allowing you to view, interact with, and modify 3D data. These components look and act like regular HTML elements, allowing you to embed our viewer into simple JavaScript applications or more complex applications using React, Vue, or Angular."),Object(o.b)("p",null,"All the heavy lifting of rendering takes place server-side within Vertex's platform, enabling you to build performant applications across all types of devices using even complex models."),Object(o.b)("p",null,"The following is a brief introduction to render your first scene in Vertex. The working example complete with an interactive demo is available at the ",Object(o.b)("a",{parentName:"p",href:"#wrapping-up"},"bottom of the page")," if you get stuck and need help."),Object(o.b)("h2",{id:"before-we-start"},"Before we start"),Object(o.b)("p",null,"Save the following HTML to a file on your computer and open it in your browser."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html lang="">\n  <head>\n    <meta charset="utf-8" />\n    <title>Getting Started with Vertex</title>\n    <meta name="viewport" content="width=device-width, initial-scale=1" />\n    <link\n      rel="stylesheet"\n      href="https://unpkg.com/@vertexvis/viewer@0.9.x/dist/viewer/viewer.css"\n    />\n    <style>\n      html,\n      body,\n      .viewer {\n        width: 100%;\n        height: 100%;\n        padding: 0;\n        margin: 0;\n      }\n    </style>\n  </head>\n  <body>\n    <script\n      type="module"\n      src="https://unpkg.com/@vertexvis/viewer@0.9.x/dist/viewer/viewer.esm.js"\n    ><\/script>\n    <script\n      nomodule\n      src="https://unpkg.com/@vertexvis/viewer@0.9.x/dist/viewer.js"\n    ><\/script>\n\n    <vertex-viewer\n      class="viewer"\n      client-id="08F675C4AACE8C0214362DB5EFD4FACAFA556D463ECA00877CB225157EF58BFA"\n    >\n    </vertex-viewer>\n\n    <script type="module">\n      // Our JavaScript will go here.\n    <\/script>\n  </body>\n</html>\n')),Object(o.b)("h2",{id:"rendering-the-scene"},"Rendering the scene"),Object(o.b)("p",null,"To render a scene, you'll need a stream key. Stream keys grant the Viewer component access to a specific scene. We'll explain these in more detail later. But for now, let's use our test key, ",Object(o.b)("inlineCode",{parentName:"p"},"U9cSWVb7fvS9k-NQcT28uZG6wtm6xmiG0ctU"),". Copy the following into the empty ",Object(o.b)("inlineCode",{parentName:"p"},"<script>")," tag."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"import { defineCustomElements } from 'https://unpkg.com/@vertexvis/viewer@0.9.x/dist/esm/loader.js';\nimport { ColorMaterial } from 'https://unpkg.com/@vertexvis/viewer@0.9.x/dist/esm/index.js';\n\nasync function main() {\n  await defineCustomElements(window);\n\n  const viewer = document.querySelector('vertex-viewer');\n  await viewer.load(\n    `urn:vertexvis:stream-key:U9cSWVb7fvS9k-NQcT28uZG6wtm6xmiG0ctU`\n  );\n}\n\nmain();\n")),Object(o.b)("p",null,"Let's take a moment to explain what's going on here. The first line imports the loader that fetches web components used on our page. The loader only loads required components, minimizing the startup time of your application."),Object(o.b)("p",null,"The second line imports a utility that we'll use later. One thing to note is that we're using the ES6 import syntax to load these files. Our components are packaged and distributed using the modern ECMAScript module standard, making it easy to load them in a browser."),Object(o.b)("p",null,"Inside our ",Object(o.b)("inlineCode",{parentName:"p"},"main")," function, we call ",Object(o.b)("inlineCode",{parentName:"p"},"defineCustomElements")," to search for components and register them with the browser. Once they're registered, we can begin to interact with the viewer. The next lines query for the viewer in the DOM and load our scene via the stream key. This starts a new streaming session with its own scene view. Scene views isolate scene modifications such as camera and scene item updates. This allows users to view and modify a scene without their changes impacting others viewing the same scene."),Object(o.b)("p",null,"At this point, you should see the model rendering in your browser. You've rendered your first scene."),Object(o.b)("h2",{id:"interacting-with-the-scene"},"Interacting with the scene"),Object(o.b)("p",null,"Now that we're able to render a scene. Let's add a simple interaction to select items based on clicking or tapping on them. Update the ",Object(o.b)("inlineCode",{parentName:"p"},"main")," function with the following JavaScript."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"async function main() {\n  await defineCustomElements(window);\n\n  const viewer = document.querySelector('vertex-viewer');\n  await viewer.load(\n    `urn:vertexvis:stream-key:U9cSWVb7fvS9k-NQcT28uZG6wtm6xmiG0ctU`\n  );\n\n  viewer.addEventListener('tap', async (event) => {\n    const scene = await viewer.scene();\n    const raycaster = scene.raycaster();\n\n    const result = await raycaster.hitItems(event.detail.position);\n    console.log('hit results', result.hits);\n  });\n}\n")),Object(o.b)("p",null,"The first thing we need to do is figure out which item to select. We do this by registering for ",Object(o.b)("inlineCode",{parentName:"p"},"tap")," events from the viewer. The event listener will receive an event that contains the 2D position of where the user clicked or tapped the viewer."),Object(o.b)("p",null,"Inside the listener, we retrieve an instance of the scene and a raycaster. You'll use the ",Object(o.b)("inlineCode",{parentName:"p"},"Scene")," object to perform operations on items and the camera. The ",Object(o.b)("inlineCode",{parentName:"p"},"Raycaster")," is used to perform hit tests on items in the scene. Calling ",Object(o.b)("inlineCode",{parentName:"p"},"raycaster.hitItems")," with the 2D coordinates of the event returns a list of items that intersect those coordinates. You might notice we're using ",Object(o.b)("inlineCode",{parentName:"p"},"async/await")," here. Since these operations happen asynchronously, we need to wait for those tasks to complete before continuing."),Object(o.b)("p",null,"Try clicking on an item in the viewer. Look in your browser's developer console. You should see logs printing an array of hit results when tapping on an item and an empty array when tapping in white space."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"hit results [Hit]\nhit results []\n")),Object(o.b)("p",null,"Now that we are receiving hit results, we can use them to perform actions on the scene. Replace your ",Object(o.b)("inlineCode",{parentName:"p"},"main")," function with the following JavaScript."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"async function main() {\n  await defineCustomElements(window);\n\n  const viewer = document.querySelector('vertex-viewer');\n  await viewer.load(\n    `urn:vertexvis:stream-key:U9cSWVb7fvS9k-NQcT28uZG6wtm6xmiG0ctU`\n  );\n\n  viewer.addEventListener('tap', async (event) => {\n    const scene = await viewer.scene();\n    const raycaster = scene.raycaster();\n\n    const result = await raycaster.hitItems(event.detail.position);\n    const [hit] = result.hits;\n\n    if (hit != null) {\n      await scene\n        .items((op) => [\n          op.where((q) => q.all()).deselect(),\n          op\n            .where((q) => q.withItemId(hit.itemId.hex))\n            .select(ColorMaterial.create(255, 255, 0)),\n        ])\n        .execute();\n    } else {\n      await scene.items((op) => op.where((q) => q.all()).deselect()).execute();\n    }\n  });\n}\n")),Object(o.b)("p",null,"Here, we're using an API from the Viewer component to modify the scene's items. Scenes contain a tree of items, and each item has a position, visibility, selection, material, and reference geometry. Vertex can render huge scenes, so it's prohibitive to send all scene items over the network. The client may also run into memory constraints, especially on lower-end devices. Instead, we provide a query API to pick the items to update and which operations to perform on them. Then, send this operation to the server to execute on the scene."),Object(o.b)("p",null,"Let's analyze what queries we're using in this interaction. When we get a hit result back, we create a compound query that will deselect all items in the scene and select an item matching an ID from our hit result. Calling ",Object(o.b)("inlineCode",{parentName:"p"},"execute")," sends the operation to the server, updates the scene, and renders a new image."),Object(o.b)("p",null,"With this interaction written, try selecting items. Tapping in white space should deselect all items."),Object(o.b)("h2",{id:"wrapping-up"},"Wrapping up"),Object(o.b)("p",null,"Congratulations! To recap the concepts learned so far:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"A scene is a container for scene items."),Object(o.b)("li",{parentName:"ul"},"Scene items have a position, visibility, selection, material, and reference geometry."),Object(o.b)("li",{parentName:"ul"},"You gain access to create views of a scene via stream keys."),Object(o.b)("li",{parentName:"ul"},"Scene views allow for simultaneous viewing and modification of a scene."),Object(o.b)("li",{parentName:"ul"},"You use queries in the Viewer component to modify the state of scene items within scene views.")),Object(o.b)(s.a,{mdxType:"CodeExamples"},Object(o.b)(s.b,{lang:"html",code:r,mdxType:"Example"}),Object(o.b)(s.c,{src:"/examples/first-scene/index.html",mdxType:"Viewer"})))}m.isMDXComponent=!0},125:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return h}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),u=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,h=p["".concat(o,".").concat(m)]||p[m]||d[m]||a;return n?i.a.createElement(h,s(s({ref:t},l),{},{components:n})):i.a.createElement(h,s({ref:t},l))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<a;l++)o[l]=n[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},126:function(e,t,n){"use strict";function r(e){var t,n,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(i&&(i+=" "),i+=n);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}t.a=function(){for(var e,t,n=0,i="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(i&&(i+=" "),i+=t);return i}},130:function(e,t,n){"use strict";var r=n(0),i=n(131);t.a=function(){var e=Object(r.useContext)(i.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},131:function(e,t,n){"use strict";var r=n(0),i=Object(r.createContext)(void 0);t.a=i},133:function(e,t,n){"use strict";var r=n(0),i=n.n(r),a=n(130),o=n(126),s=n(56),c=n.n(s);var l=37,u=39;t.a=function(e){var t=e.lazy,n=e.block,s=e.defaultValue,p=e.values,d=e.groupId,m=e.className,h=Object(a.a)(),v=h.tabGroupChoices,f=h.setTabGroupChoices,y=Object(r.useState)(s),b=y[0],g=y[1],w=r.Children.toArray(e.children),O=[];if(null!=d){var j=v[d];null!=j&&j!==b&&p.some((function(e){return e.value===j}))&&g(j)}var k=function(e){var t=e.currentTarget,n=O.indexOf(t),r=p[n].value;g(r),null!=d&&(f(d,r),setTimeout((function(){var e,n,r,i,a,o,s,l;(e=t.getBoundingClientRect(),n=e.top,r=e.left,i=e.bottom,a=e.right,o=window,s=o.innerHeight,l=o.innerWidth,n>=0&&a<=l&&i<=s&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(c.a.tabItemActive),setTimeout((function(){return t.classList.remove(c.a.tabItemActive)}),2e3))}),150))},x=function(e){var t,n;switch(e.keyCode){case u:var r=O.indexOf(e.target)+1;n=O[r]||O[0];break;case l:var i=O.indexOf(e.target)-1;n=O[i]||O[O.length-1]}null===(t=n)||void 0===t||t.focus()};return i.a.createElement("div",{className:"tabs-container"},i.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":n},m)},p.map((function(e){var t=e.value,n=e.label;return i.a.createElement("li",{role:"tab",tabIndex:b===t?0:-1,"aria-selected":b===t,className:Object(o.a)("tabs__item",c.a.tabItem,{"tabs__item--active":b===t}),key:t,ref:function(e){return O.push(e)},onKeyDown:x,onFocus:k,onClick:k},n)}))),t?Object(r.cloneElement)(w.filter((function(e){return e.props.value===b}))[0],{className:"margin-vert--md"}):i.a.createElement("div",{className:"margin-vert--md"},w.map((function(e,t){return Object(r.cloneElement)(e,{key:t,hidden:e.props.value!==b})}))))}},134:function(e,t,n){"use strict";var r=n(0),i=n.n(r);t.a=function(e){var t=e.children,n=e.hidden,r=e.className;return i.a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},152:function(e,t,n){"use strict";n.d(t,"b",(function(){return o}));var r=n(23),i={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},a=n(0),o={Prism:r.a,theme:i};function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var l=/\r\n|\r|\n/,u=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},p=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},d=function(e,t){var n=e.plain,r=Object.create(null),i=e.styles.reduce((function(e,n){var r=n.languages,i=n.style;return r&&!r.includes(t)||n.types.forEach((function(t){var n=c({},e[t],i);e[t]=n})),e}),r);return i.root=n,i.plain=c({},n,{backgroundColor:null}),i};function m(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}var h=function(e){function t(){for(var t=this,n=[],r=arguments.length;r--;)n[r]=arguments[r];e.apply(this,n),s(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?d(e.theme,e.language):void 0;return t.themeDict=n})),s(this,"getLineProps",(function(e){var n=e.key,r=e.className,i=e.style,a=c({},m(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),o=t.getThemeDict(t.props);return void 0!==o&&(a.style=o.plain),void 0!==i&&(a.style=void 0!==a.style?c({},a.style,i):i),void 0!==n&&(a.key=n),r&&(a.className+=" "+r),a})),s(this,"getStyleForToken",(function(e){var n=e.types,r=e.empty,i=n.length,a=t.getThemeDict(t.props);if(void 0!==a){if(1===i&&"plain"===n[0])return r?{display:"inline-block"}:void 0;if(1===i&&!r)return a[n[0]];var o=r?{display:"inline-block"}:{},s=n.map((function(e){return a[e]}));return Object.assign.apply(Object,[o].concat(s))}})),s(this,"getTokenProps",(function(e){var n=e.key,r=e.className,i=e.style,a=e.token,o=c({},m(e,["key","className","style","token"]),{className:"token "+a.types.join(" "),children:a.content,style:t.getStyleForToken(a),key:void 0});return void 0!==i&&(o.style=void 0!==o.style?c({},o.style,i):i),void 0!==n&&(o.key=n),r&&(o.className+=" "+r),o})),s(this,"tokenize",(function(e,t,n,r){var i={code:t,grammar:n,language:r,tokens:[]};e.hooks.run("before-tokenize",i);var a=i.tokens=e.tokenize(i.code,i.grammar,i.language);return e.hooks.run("after-tokenize",i),a}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,r=e.code,i=e.children,a=this.getThemeDict(this.props),o=t.languages[n];return i({tokens:function(e){for(var t=[[]],n=[e],r=[0],i=[e.length],a=0,o=0,s=[],c=[s];o>-1;){for(;(a=r[o]++)<i[o];){var d=void 0,m=t[o],h=n[o][a];if("string"==typeof h?(m=o>0?m:["plain"],d=h):(m=p(m,h.type),h.alias&&(m=p(m,h.alias)),d=h.content),"string"==typeof d){var v=d.split(l),f=v.length;s.push({types:m,content:v[0]});for(var y=1;y<f;y++)u(s),c.push(s=[]),s.push({types:m,content:v[y]})}else o++,t.push(m),n.push(d),r.push(0),i.push(d.length)}o--,t.pop(),n.pop(),r.pop(),i.pop()}return u(s),c}(void 0!==o?this.tokenize(t,r,o,n):[r]),className:"prism-code language-"+n,style:void 0!==a?a.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(a.Component);t.a=h},166:function(e,t,n){"use strict";n.d(t,"a",(function(){return v})),n.d(t,"b",(function(){return f})),n.d(t,"c",(function(){return y}));var r=n(3),i=n(0),a=n.n(i),o=n(133),s=n(134),c=n(58),l=n.n(c);var u=function(e){var t=e.children,n=e.minHeight,r=e.url;return a.a.createElement("div",{className:l.a.browserWindow,style:{minHeight:n}},a.a.createElement("div",{className:l.a.browserWindowHeader},a.a.createElement("div",{className:l.a.buttons},a.a.createElement("span",{className:l.a.dot,style:{background:"#f25f58"}}),a.a.createElement("span",{className:l.a.dot,style:{background:"#fbbe3c"}}),a.a.createElement("span",{className:l.a.dot,style:{background:"#58cb42"}})),a.a.createElement("div",{className:l.a.browserWindowAddressBar},r),a.a.createElement("div",{className:l.a.browserWindowMenuIcon},a.a.createElement("div",null,a.a.createElement("span",{className:l.a.bar}),a.a.createElement("span",{className:l.a.bar}),a.a.createElement("span",{className:l.a.bar})))),a.a.createElement("div",{className:l.a.browserWindowBody},t))},p=n(152),d={plain:{color:"#F8F8F2",backgroundColor:"#282A36"},styles:[{types:["prolog","constant","builtin"],style:{color:"rgb(189, 147, 249)"}},{types:["inserted","function"],style:{color:"rgb(80, 250, 123)"}},{types:["deleted"],style:{color:"rgb(255, 85, 85)"}},{types:["changed"],style:{color:"rgb(255, 184, 108)"}},{types:["punctuation","symbol"],style:{color:"rgb(248, 248, 242)"}},{types:["string","char","tag","selector"],style:{color:"rgb(255, 121, 198)"}},{types:["keyword","variable"],style:{color:"rgb(189, 147, 249)",fontStyle:"italic"}},{types:["comment"],style:{color:"rgb(98, 114, 164)"}},{types:["attr-name"],style:{color:"rgb(241, 250, 140)"}}]},m={html:"HTML",js:"JavaScript",xamarin:"Xamarin"},h=["viewer","js","html","xamarin"];function v(e){var t=e.selected,n=void 0===t?"js":t,r=e.groupId,i=e.children,c=a.a.Children.toArray(i).map((function(e){if(e.props.originalType===f)return{label:m[e.props.lang]||e.props.lang,value:e.props.lang,children:a.a.createElement(f,{lang:e.props.lang,code:e.props.code,children:e.props.children})};if(e.props.originalType===y)return{label:"Viewer",value:"viewer",children:a.a.createElement(y,{src:e.props.src})};throw new Error("Unhandled element type "+e.props.mdxType)})),l=c.sort((function(e,t){return h.indexOf(e.value)-h.indexOf(t.value)})),u=l.map((function(e){return{label:e.label,value:e.value}})),p=l.map((function(e){return a.a.createElement(s.a,{key:e.value,value:e.value},e.children)})),d=0===c.length&&c.some((function(e){return e.value===n}))?n:c[0].value;return a.a.createElement(o.a,{defaultValue:d,groupId:r,values:u},p)}function f(e){var t=e.lang,n=e.code,i=e.children;return n?a.a.createElement(p.a,Object(r.a)({},p.b,{theme:d,code:n.default,language:t}),(function(e){var t=e.className,n=e.style,r=e.tokens,i=e.getLineProps,o=e.getTokenProps;return a.a.createElement("pre",{className:t,style:n},r.map((function(e,t){return a.a.createElement("div",i({line:e,key:t}),e.map((function(e,t){return a.a.createElement("span",o({token:e,key:t}))})))})))})):a.a.createElement(a.a.Fragment,null,i)}function y(e){var t=e.src,n=Object(i.useRef)(null);return Object(i.useEffect)((function(){function e(e){e.preventDefault()}return null!=n.current&&n.current.contentWindow.addEventListener("wheel",e,{passive:!1}),function(){null!=n.current&&n.current.contentWindow.removeEventListener("wheel",e)}})),a.a.createElement(u,{url:"developer.vertexvis.com"},a.a.createElement("iframe",{ref:n,width:"100%",height:"400",src:t,frameBorder:"0",style:{display:"block"}}))}}}]);