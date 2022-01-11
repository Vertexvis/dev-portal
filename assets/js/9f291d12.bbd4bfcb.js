"use strict";(self.webpackChunkdev_portal=self.webpackChunkdev_portal||[]).push([[2269],{1280:function(e,n,t){t.d(n,{jc:function(){return y},en:function(){return b},AE:function(){return x}});var a=t(7462),o=t(7294),i="browserWindow_CU2T",r="browserWindowHeader_9KMa",l="buttons_HaVU",s="browserWindowAddressBar_ep3W",c="dot_AgBE",d="browserWindowMenuIcon_mrOC",m="bar_CAZr",u="browserWindowBody_jHfO";var p=function(e){var n=e.children,t=e.minHeight,a=e.url;return o.createElement("div",{className:i,style:{minHeight:t}},o.createElement("div",{className:r},o.createElement("div",{className:l},o.createElement("span",{className:c,style:{background:"#f25f58"}}),o.createElement("span",{className:c,style:{background:"#fbbe3c"}}),o.createElement("span",{className:c,style:{background:"#58cb42"}})),o.createElement("div",{className:s},a),o.createElement("div",{className:d},o.createElement("div",null,o.createElement("span",{className:m}),o.createElement("span",{className:m}),o.createElement("span",{className:m})))),o.createElement("div",{className:u},n))},h=t(8215),v=t(6396),w=t(3746),g=t(3618),f={html:"HTML",js:"JavaScript",xamarin:"Xamarin"},k=["viewer","js","html","xamarin"];function y(e){var n=e.selected,t=void 0===n?"js":n,a=e.groupId,i=e.children,r=o.Children.toArray(i).map((function(e){if(e.props.originalType===b)return{label:f[e.props.lang]||e.props.lang,value:e.props.lang,children:o.createElement(b,{lang:e.props.lang,code:e.props.code,children:e.props.children})};if(e.props.originalType===x)return{label:"Viewer",value:"viewer",children:o.createElement(x,{src:e.props.src})};throw new Error("Unhandled element type "+e.props.mdxType)})),l=r.sort((function(e,n){return k.indexOf(e.value)-k.indexOf(n.value)})),s=l.map((function(e){return{label:e.label,value:e.value}})),c=l.map((function(e){return o.createElement(h.Z,{key:e.value,value:e.value},e.children)})),d=0===r.length&&r.some((function(e){return e.value===t}))?t:r[0].value;return o.createElement(v.Z,{defaultValue:d,groupId:a,values:s},c)}function b(e){var n=e.lang,t=e.code,i=e.children;return t?o.createElement(w.ZP,(0,a.Z)({},w.lG,{theme:g.Z,code:t.default,language:n}),(function(e){var n=e.className,t=e.style,a=e.tokens,i=e.getLineProps,r=e.getTokenProps;return o.createElement("pre",{className:n,style:t},a.map((function(e,n){return o.createElement("div",i({line:e,key:n}),e.map((function(e,n){return o.createElement("span",r({token:e,key:n}))})))})))})):o.createElement(o.Fragment,null,i)}function x(e){var n=e.src,t=(0,o.useRef)(null);return(0,o.useEffect)((function(){function e(e){e.preventDefault()}return null!=t.current&&t.current.contentWindow.addEventListener("wheel",e,{passive:!1}),function(){null!=t.current&&t.current.contentWindow.removeEventListener("wheel",e)}})),o.createElement(p,{url:"developer.vertexvis.com"},o.createElement("iframe",{ref:t,width:"100%",height:"400",src:n,frameBorder:"0",style:{display:"block"}}))}},1544:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return m},default:function(){return p}});var a=t(7462),o=t(3366),i=(t(7294),t(3905)),r=t(1280),l=["components"],s={id:"scene-operations",title:"Scene and item operations",sidebar_label:"Scene operations"},c=void 0,d={unversionedId:"guides/scene-operations",id:"version-beta/guides/scene-operations",title:"Scene and item operations",description:"In this guide, we'll demonstrate how to perform operations on a scene loaded into the viewer.",source:"@site/versioned_docs/version-beta/guides/scene-operations.md",sourceDirName:"guides",slug:"/guides/scene-operations",permalink:"/docs/beta/guides/scene-operations",editUrl:"https://github.com/Vertexvis/dev-portal/tree/main/versioned_docs/version-beta/guides/scene-operations.md",tags:[],version:"beta",frontMatter:{id:"scene-operations",title:"Scene and item operations",sidebar_label:"Scene operations"},sidebar:"version-beta/docs",previous:{title:"Loading models",permalink:"/docs/beta/guides/load-model"},next:{title:"UI Component overview",permalink:"/docs/beta/sdk"}},m=[{value:"Scene operations overview",id:"scene-operations-overview",children:[],level:2},{value:"Types of operations",id:"types-of-operations",children:[{value:"<code>showOnly(Selector)</code>",id:"showonlyselector",children:[],level:3},{value:"<code>show(Selector)</code>",id:"showselector",children:[],level:3},{value:"<code>hide(Selector)</code>",id:"hideselector",children:[],level:3},{value:"<code>showAll()</code>",id:"showall",children:[],level:3},{value:"<code>hideAll()</code>",id:"hideall",children:[],level:3},{value:"<code>highlight(Color, Selector)</code>",id:"highlightcolor-selector",children:[],level:3},{value:"<code>clearAllHighlights()</code>",id:"clearallhighlights",children:[],level:3}],level:2},{value:"Summary",id:"summary",children:[],level:2}],u={toc:m};function p(e){var n=e.components,t=(0,o.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In this guide, we'll demonstrate how to perform operations on a scene loaded into the viewer.\nYou can use these operations to hook up other UI controls and user interactions to modify the scene."),(0,i.kt)("p",null,"In the next guide, we'll demonstrate how to use user actions to perform scene\noperations."),(0,i.kt)("h2",{id:"scene-operations-overview"},"Scene operations overview"),(0,i.kt)("p",null,"Scene operations are used to modify the state of a loaded scene. Vertex's UI Components\nexpose a set of APIs that your application can use to describe scene mutations\nand submitting an operation to Vertex's APIs to mutate the scene. The Viewer component\nautomatically handles the regeneration of an image with the updated scene."),(0,i.kt)("p",null,"To begin a scene operation, you'll need to retrieve a reference to the scene\nthrough your target platform's viewer. The returned scene contains\nmethods that you can then use to describe scene operations you'd like to make."),(0,i.kt)("p",null,"When you're ready to perform the operation, call the returned builder's\n",(0,i.kt)("inlineCode",{parentName:"p"},"execute()"),". This method returns an async task that completes when the operation\ncompletes and the viewer has received a new image with the updated scene."),(0,i.kt)("p",null,"The following example demonstrates how to change the visibility of a part."),(0,i.kt)(r.jc,{mdxType:"CodeExamples"},(0,i.kt)(r.en,{lang:"js",mdxType:"Example"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:"{16-20,23-31}","{16-20,23-31}":!0},"window.addEventListener('DOMContentLoaded', () => {\n  main();\n});\n\nasync function main() {\n  const button = document.querySelector('#toggle-button');\n  const viewer = document.querySelector('#viewer');\n  const newScene = await newScene();\n\n  const scene = await newScene\n    .from('urn:vertexvis:eedc:file?externalId=my-file')\n    .execute();\n\n  await viewer.load(scene);\n\n  let isHidden = false;\n  button.addEventListener('click', () => {\n    isHidden = !isHidden;\n    toggleVisibility(viewer, 'item-name', isHidden);\n  });\n}\n\nasync function toggleVisibility(viewer, itemName, hide) {\n  const scene = await viewer.scene();\n\n  if (hide) {\n    scene.show((s) => s.withMetadata('name', itemName)).execute();\n  } else {\n    scene.hide((s) => s.withMetadata('name', itemName)).execute();\n  }\n}\n"))),(0,i.kt)(r.en,{lang:"xamarin",mdxType:"Example"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp",metastring:"{8,16,19-22,24-36}","{8,16,19-22,24-36}":!0},'using Vertexvis.Viewer.Common;\nusing Xamarin.Forms;\n\nnamespace Example\n{\n    public class ExampleViewer : ContentView\n    {\n        private bool IsHidden = false;\n\n        public ExampleViewer()\n        {\n            InitializeComponent();\n            Content = new Viewer();\n            loadModel();\n\n            Button.Clicked += OnButtonClicked;\n        }\n\n        private void OnButtonClicked() {\n            IsHidden = !IsHidden;\n            ToggleVisibility("item-name", IsHidden);\n        }\n\n        private async Task ToggleVisibility(String itemName, bool hide) {\n            Scene scene = await viewer.Scene();\n\n            if (hide) {\n              scene.Items()\n                  .Hide(s => selector.WithMetadata("name", itemName))\n                  .Execute();\n            } else {\n              scene.Items()\n                  .Show(s => selector.WithMetadata("name", itemName))\n                  .Execute();\n            }\n        }\n\n        private async Task LoadModel() {\n            SceneBuilder newScene = await viewer.newScene();\n            string scene = await newScene\n                .From(Resource.FileByExternalId("my-file"))\n                .Execute();\n            await viewer.Load(scene);\n        }\n    }\n}\n'))),(0,i.kt)(r.AE,{src:"/examples/scene-operations/overview.html",mdxType:"Viewer"})),(0,i.kt)("p",null,"The scene operations expose a selector interface that's used to select items\nthat an operation should be performed on. You can select items by their ID or by\nmetadata that might be assigned to items in the CAD model."),(0,i.kt)("h2",{id:"types-of-operations"},"Types of operations"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Scene")," exposes a set of operations that you can use to mutate a scene.\nThese operations are implemented as a fluid and chainable interface that allows\nyou to build up a set of operations to perform."),(0,i.kt)(r.jc,{mdxType:"CodeExamples"},(0,i.kt)(r.en,{lang:"js",mdxType:"Example"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"scene\n  .showOnly((s) => s.withMetadata('name', 'item-1'))\n  .show((s) => s.withMetadata('name', 'item-2'))\n  .highlight('#ff0000', (s) => s.withMetadata('name', 'item-3'))\n  .execute();\n"))),(0,i.kt)(r.en,{lang:"xamarin",mdxType:"Example"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'scene.Items()\n    .ShowOnly(s => s.WithMetadata("name", "item-1"))\n    .Show(s => s.WithMetadata("name", "item-2"))\n    .Highlight(new HexColor("#ff0000"), s => s.WithMetadata("name", "item-3"))\n    .Execute();\n')))),(0,i.kt)("h3",{id:"showonlyselector"},(0,i.kt)("inlineCode",{parentName:"h3"},"showOnly(Selector)")),(0,i.kt)("p",null,"Performs an operation to hide all items in the scene except for the item\nmatching the given selector."),(0,i.kt)("h3",{id:"showselector"},(0,i.kt)("inlineCode",{parentName:"h3"},"show(Selector)")),(0,i.kt)("p",null,"Performs an operation to show an item in the scene that matches the given\nselector."),(0,i.kt)("h3",{id:"hideselector"},(0,i.kt)("inlineCode",{parentName:"h3"},"hide(Selector)")),(0,i.kt)("p",null,"Performs an operation to hide an item in the scene that matches the given\nselector."),(0,i.kt)("h3",{id:"showall"},(0,i.kt)("inlineCode",{parentName:"h3"},"showAll()")),(0,i.kt)("p",null,"Performs an operation to show all items in the scene."),(0,i.kt)("h3",{id:"hideall"},(0,i.kt)("inlineCode",{parentName:"h3"},"hideAll()")),(0,i.kt)("p",null,"Performs an operation to hide all items in the scene."),(0,i.kt)("h3",{id:"highlightcolor-selector"},(0,i.kt)("inlineCode",{parentName:"h3"},"highlight(Color, Selector)")),(0,i.kt)("p",null,"Performs an operation to change the material color of an item that matches the\ngiven selector."),(0,i.kt)("h3",{id:"clearallhighlights"},(0,i.kt)("inlineCode",{parentName:"h3"},"clearAllHighlights()")),(0,i.kt)("p",null,"Performs an operation to reset the material color of all items in the scene."),(0,i.kt)("h2",{id:"summary"},"Summary"),(0,i.kt)("p",null,"In this guide, you learned how to apply operations to a scene loaded in the\nviewer. We explored the different types of scene operations and how they can\nbe combined to build up more complex operations."))}p.isMDXComponent=!0}}]);