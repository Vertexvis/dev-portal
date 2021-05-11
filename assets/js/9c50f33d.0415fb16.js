(self.webpackChunkdev_portal=self.webpackChunkdev_portal||[]).push([[7418],{11967:function(e,n,t){"use strict";t.d(n,{jc:function(){return y},en:function(){return k},AE:function(){return b}});var a=t(22122),r=t(67294),i=t(41395),o=t(58215),s="browserWindow_25XZ",l="browserWindowHeader_KqAw",c="buttons_1hjc",d="browserWindowAddressBar_3kU8",m="dot_3vUt",p="browserWindowMenuIcon_62Vr",u="bar_1GUQ",h="browserWindowBody_2pXR";var f=function(e){var n=e.children,t=e.minHeight,a=e.url;return r.createElement("div",{className:s,style:{minHeight:t}},r.createElement("div",{className:l},r.createElement("div",{className:c},r.createElement("span",{className:m,style:{background:"#f25f58"}}),r.createElement("span",{className:m,style:{background:"#fbbe3c"}}),r.createElement("span",{className:m,style:{background:"#58cb42"}})),r.createElement("div",{className:d},a),r.createElement("div",{className:p},r.createElement("div",null,r.createElement("span",{className:u}),r.createElement("span",{className:u}),r.createElement("span",{className:u})))),r.createElement("div",{className:h},n))},w=t(24544),g=t(13618),v={html:"HTML",js:"JavaScript",xamarin:"Xamarin"},x=["viewer","js","html","xamarin"];function y(e){var n=e.selected,t=void 0===n?"js":n,a=e.groupId,s=e.children,l=r.Children.toArray(s).map((function(e){if(e.props.originalType===k)return{label:v[e.props.lang]||e.props.lang,value:e.props.lang,children:r.createElement(k,{lang:e.props.lang,code:e.props.code,children:e.props.children})};if(e.props.originalType===b)return{label:"Viewer",value:"viewer",children:r.createElement(b,{src:e.props.src})};throw new Error("Unhandled element type "+e.props.mdxType)})),c=l.sort((function(e,n){return x.indexOf(e.value)-x.indexOf(n.value)})),d=c.map((function(e){return{label:e.label,value:e.value}})),m=c.map((function(e){return r.createElement(o.Z,{key:e.value,value:e.value},e.children)})),p=0===l.length&&l.some((function(e){return e.value===t}))?t:l[0].value;return r.createElement(i.Z,{defaultValue:p,groupId:a,values:d},m)}function k(e){var n=e.lang,t=e.code,i=e.children;return t?r.createElement(w.ZP,(0,a.Z)({},w.lG,{theme:g.Z,code:t.default,language:n}),(function(e){var n=e.className,t=e.style,a=e.tokens,i=e.getLineProps,o=e.getTokenProps;return r.createElement("pre",{className:n,style:t},a.map((function(e,n){return r.createElement("div",i({line:e,key:n}),e.map((function(e,n){return r.createElement("span",o({token:e,key:n}))})))})))})):r.createElement(r.Fragment,null,i)}function b(e){var n=e.src,t=(0,r.useRef)(null);return(0,r.useEffect)((function(){function e(e){e.preventDefault()}return null!=t.current&&t.current.contentWindow.addEventListener("wheel",e,{passive:!1}),function(){null!=t.current&&t.current.contentWindow.removeEventListener("wheel",e)}})),r.createElement(f,{url:"developer.vertexvis.com"},r.createElement("iframe",{ref:t,width:"100%",height:"400",src:n,frameBorder:"0",style:{display:"block"}}))}},87161:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return s},metadata:function(){return l},toc:function(){return c},default:function(){return m}});var a=t(22122),r=t(19756),i=(t(67294),t(3905)),o=t(11967),s={id:"load-model",title:"Loading models in the Viewer component",sidebar_label:"Loading models"},l={unversionedId:"guides/load-model",id:"version-beta/guides/load-model",isDocsHomePage:!1,title:"Loading models in the Viewer component",description:"This guide walks you through the process of creating a scene using",source:"@site/versioned_docs/version-beta/guides/load-model.md",sourceDirName:"guides",slug:"/guides/load-model",permalink:"/docs/beta/guides/load-model",editUrl:"https://github.com/Vertexvis/dev-portal/tree/main/versioned_docs/version-beta/guides/load-model.md",version:"beta",sidebar_label:"Loading models",frontMatter:{id:"load-model",title:"Loading models in the Viewer component",sidebar_label:"Loading models"},sidebar:"version-beta/docs",previous:{title:"Importing data",permalink:"/docs/beta/guides/importing-data"},next:{title:"Scene and item operations",permalink:"/docs/beta/guides/scene-operations"}},c=[{value:"Referencing a model",id:"referencing-a-model",children:[]},{value:"Creating a scene",id:"creating-a-scene",children:[]},{value:"Configuring a new scene",id:"configuring-a-new-scene",children:[]},{value:"Summary",id:"summary",children:[]}],d={toc:c};function m(e){var n=e.components,t=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This guide walks you through the process of creating a scene using\nVertex's UI Components and APIs."),(0,i.kt)("p",null,"To view a model imported into Vertex, you must first create a scene to load into the viewer. Scenes can either be created through the UI Components or through our RESTful API."),(0,i.kt)("p",null,"You can find the example JS code for this guide in our ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Vertexvis/web-sdk-examples/tree/master/examples/loading-models"},"Web UI Component\nExamples")," repo."),(0,i.kt)("h2",{id:"referencing-a-model"},"Referencing a model"),(0,i.kt)("p",null,"When creating a scene, you'll first need to provide a reference to the file or\nsnapshot that you want to load. These references are expressed as URNs in the\nfollowing formats:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"urn:vertexvis:eedc:file:{vertex-id}"),": References a model by a Vertex\nfile ID."),(0,i.kt)("p",{parentName:"li"},"The ID of a file can be found in the URL of the Vertex application when you open a\nmodel. For example, if the URL to your file is\n",(0,i.kt)("inlineCode",{parentName:"p"},"https://app.vertexvis.com/file/2c2410ee-6ab9-45ee-a80b-255f2e20160f"),", then\n",(0,i.kt)("inlineCode",{parentName:"p"},"2c2410ee-6ab9-45ee-a80b-255f2e20160f")," is the file ID.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"urn:vertexvis:eedc:file?externalId={external-id}"),": References a model by an\nexternal ID that was assigned by you when uploading the model. This approach\nis used to map files in your system with files in Vertex, and can be more\nconvenient when uploading a model.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"urn:vertexvis:eedc:scenestate:{vertex-id}"),". References a model by a scene\nstate, and can be used to load snapshots that were created in our\napplication."),(0,i.kt)("p",{parentName:"li"},"The ID of a scene state can be found by inspecting the network traffic of the\nVertex application. When opening a model, search for a call to\n",(0,i.kt)("inlineCode",{parentName:"p"},"https://rest-api.prod.vertexvis.io/rest/api/model_snapshot_versions"),". The\nsnapshot ID will be included in the returned JSON at\n",(0,i.kt)("inlineCode",{parentName:"p"},"items[].snapshotVersion.sceneState.id"),"."))),(0,i.kt)("h2",{id:"creating-a-scene"},"Creating a scene"),(0,i.kt)("p",null,"Creating a scene with the UI Components involves using a ",(0,i.kt)("inlineCode",{parentName:"p"},"SceneBuilder"),". The\n",(0,i.kt)("inlineCode",{parentName:"p"},"SceneBuilder")," describes instructions for how to build the scene. You can\ncreate an instance of the builder from the viewer in your target platform and\ninclude helper methods to indicate the items to include in the\nscene and what material colors they should have."),(0,i.kt)("p",null,"When you're done setting up the scene, call the builder's ",(0,i.kt)("inlineCode",{parentName:"p"},"execute()")," method.\nThis instructs Vertex to build the scene, and when it's finished, return a\nreference to your new scene. You can then pass this reference to the viewer to\nvisualize your model."),(0,i.kt)(o.jc,{mdxType:"CodeExamples"},(0,i.kt)(o.en,{lang:"js",mdxType:"Example"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"window.addEventListener('DOMContentLoaded', () => {\n  main();\n});\n\nasync function main() {\n  const viewer = document.querySelector('#viewer');\n  const newScene = await newScene();\n\n  const scene = await newScene\n    .from('urn:vertexvis:eedc:file?externalId=my-file')\n    .execute();\n\n  await viewer.load(scene);\n}\n"))),(0,i.kt)(o.en,{lang:"xamarin",mdxType:"Example"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'using Vertexvis.Viewer.Common;\nusing Xamarin.Forms;\n\nnamespace Example\n{\n    public class ExampleViewer : ContentView\n    {\n        public ExampleViewer()\n        {\n            InitializeComponent();\n            Content = new Viewer();\n            loadModel();\n        }\n\n        private async Task LoadModel() {\n            SceneBuilder newScene = await viewer.newScene();\n            string scene = await newScene\n                .From(Resource.FileByExternalId("my-file"))\n                .Execute();\n            await viewer.Load(scene);\n        }\n    }\n}\n'))),(0,i.kt)(o.AE,{src:"/examples/load-model/create-scene.html",mdxType:"Viewer"})),(0,i.kt)("h2",{id:"configuring-a-new-scene"},"Configuring a new scene"),(0,i.kt)("p",null,"Sometimes you'll want to specify what's included in your initial scene. For\nexample, you might want to hide all items except for a specific part, or specify\nthat certain parts have a material color. These operations are additive, and can\nbe combined to express a complex set of expressions."),(0,i.kt)("p",null,"Use the scene builder's selector interface to select items on which you want to perform an operation. You can select items by their ID or by metadata assigned to items in the CAD model."),(0,i.kt)(o.jc,{mdxType:"CodeExamples"},(0,i.kt)(o.en,{lang:"js",mdxType:"Example"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"window.addEventListener('DOMContentLoaded', () => {\n  main();\n});\n\nasync function main() {\n  const viewer = document.querySelector('#viewer');\n  const newScene = await newScene();\n\n  const scene = await newScene\n    .from('urn:vertexvis:eedc:file?externalId=my-file')\n    // Hide everything in the scene except for a single part\n    .showOnly((s) => s.withMetadata('name', 'some-metadata-value'))\n    // Add another item to the scene\n    .show((s) => s.withId('some-part-id'))\n    // Apply a material color to an item.\n    .highlight('#0000ff', (s) => s.withId('some-part-id'))\n    .execute();\n\n  await viewer.load(scene);\n}\n"))),(0,i.kt)(o.en,{lang:"xamarin",mdxType:"Example"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'using Vertexvis.Viewer.Common;\nusing Xamarin.Forms;\n\nnamespace Example\n{\n    public class ExampleViewer : ContentView\n    {\n        public ExampleViewer()\n        {\n            InitializeComponent();\n            Content = new Viewer();\n            loadModel();\n        }\n\n        private async Task LoadModel() {\n            SceneBuilder newScene = await viewer.newScene();\n            string scene = await newScene\n                .From(Resource.FileByExternalId("my-file"))\n                // Hide everything in the scene except for a single part\n                .ShowOnly(s => s.WithMetadata("name", "some-metadata-value"))\n                // Add another item to the scene\n                .Show(s => s.WithPartId("some-part-id"))\n                // Apply a material color to an item.\n                .Highlight(new HexColor("#0000ff"), s => s.withId("some-part-id"))\n                .Execute();\n\n            await viewer.Load(scene);\n        }\n    }\n}\n'))),(0,i.kt)(o.AE,{src:"/examples/load-model/configure-scene.html",mdxType:"Viewer"})),(0,i.kt)("h2",{id:"summary"},"Summary"),(0,i.kt)("p",null,"In this guide, we explored how to load a model into the viewer using a reference\nURN, and how to configure the initial state of the scene using selectors. In the\nnext guide, we'll ","[learn how to perform operations][./scene-operations.md]"," on a scene\nloaded by the viewer, and how we can use these operations to create user\ninteractions."))}m.isMDXComponent=!0}}]);