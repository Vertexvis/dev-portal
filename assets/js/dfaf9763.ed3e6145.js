(self.webpackChunkdev_portal=self.webpackChunkdev_portal||[]).push([[3088],{55180:function(e,t,a){"use strict";a.d(t,{I:function(){return r}});var n=a(67294);function r(){return n.createElement(n.Fragment,null,"To import an entire assembly, you may need to take an additional step to"," ",n.createElement("a",{href:"https://github.com/Vertexvis/vertex-community/discussions/19#discussioncomment-660793"},"prepare it for Vertex"),".")}},35722:function(e,t,a){"use strict";a.d(t,{G:function(){return s}});var n=a(67294),r=a(21140),i=a.n(r),o='Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"';function s(e){var t=e.chart;return(0,n.useEffect)((function(){i().contentLoaded()}),[]),n.createElement("div",{className:"mermaid"},t)}i().initialize({fontFamily:o,gantt:{fontFamily:o},sequence:{actorFontFamily:o,messageFontFamily:o,messageFontWeight:100,noteFontFamily:o,showSequenceNumbers:!0},startOnLoad:!0})},94510:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return u},metadata:function(){return m},toc:function(){return c},default:function(){return v}});var n=a(22122),r=a(19756),i=(a(67294),a(3905)),o=a(55180),s=a(35722),l=a(41395),p=a(58215),d=["components"],u={id:"import-data-with-api",title:"Import data",description:"Import your team's or organization's parts into Vertex's Parts Library using Vertex's platform APIs."},m={unversionedId:"guides/import-data-with-api",id:"guides/import-data-with-api",isDocsHomePage:!1,title:"Import data",description:"Import your team's or organization's parts into Vertex's Parts Library using Vertex's platform APIs.",source:"@site/docs/guides/import-data-with-api.mdx",sourceDirName:"guides",slug:"/guides/import-data-with-api",permalink:"/docs/guides/import-data-with-api",editUrl:"https://github.com/Vertexvis/dev-portal/tree/main/docs/guides/import-data-with-api.mdx",version:"current",frontMatter:{id:"import-data-with-api",title:"Import data",description:"Import your team's or organization's parts into Vertex's Parts Library using Vertex's platform APIs."},sidebar:"guidesSidebar",previous:{title:"Authentication",permalink:"/docs/guides/authentication"},next:{title:"Import metadata",permalink:"/docs/guides/import-metadata"}},c=[{value:"Uploading files",id:"uploading-files",children:[]},{value:"Creating parts",id:"creating-parts",children:[]}],h={toc:c};function v(e){var t=e.components,a=(0,r.Z)(e,d);return(0,i.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Vertex's Parts Library is a repository of your team's or organization's parts, each with references to geometry and optional metadata."),(0,i.kt)("p",null,"To import your 3D data into the Parts Library, do the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Create a file resource and upload your 3D data to it. Your files may contain either individual parts or larger assemblies."),(0,i.kt)("li",{parentName:"ul"},"Initiate a translation to create parts from the data contained in the file.")),(0,i.kt)(s.G,{chart:"\n  sequenceDiagram\n  participant C as Client App\n  participant API as Vertex API\n      Note over C,API: Upload file\n      C->>+API: Create file with metadata\n      API--\x3e>-C: File ID\n      C->>+API: Upload file contents with file ID\n      API--\x3e>-C: 204\n      Note over C,API: Initiate translation\n      C->>+API: Initiate translation with file ID\n      API--\x3e>-C: Queued translation ID\n      loop Check status\n        C->>+API: Check translation status with queued translation ID\n        API--\x3e>-C: If running, status | If complete, redirect to part\n      end\n",mdxType:"Mermaid"}),(0,i.kt)("h2",{id:"uploading-files"},"Uploading files"),(0,i.kt)("p",null,"See our ",(0,i.kt)("a",{parentName:"p",href:"/docs/guides/supported-file-formats"},"supported file formats"),". If you do not have 3D data handy, download a model from our ",(0,i.kt)("a",{parentName:"p",href:"/docs/guides/model-database"},"3D database")," to follow along. To create files in one of these formats, ",(0,i.kt)("inlineCode",{parentName:"p"},"POST")," to the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.vertexvis.com/#a8f05429-036c-45b8-89ef-6bd3aa14a7fe"},"createFile")," API."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)(o.I,{mdxType:"ImportAssemblyNote"}))),(0,i.kt)(l.Z,{defaultValue:"req",values:[{label:"Request",value:"req"},{label:"Response",value:"res"}],mdxType:"Tabs"},(0,i.kt)(p.Z,{value:"req",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'curl --location --request POST \\\n  --url "https://platform.vertexvis.com/files" \\\n  --header "Authorization: Bearer [YOUR_ACCESS_TOKEN]" \\\n  --header "Content-Type: application/vnd.api+json" \\\n  --data \'{\n  "data": {\n    "attributes": {\n      // highlight-next-line\n      "name": "vertex-valve.jt"\n    },\n    "type": "file"\n  }\n}\'\n'))),(0,i.kt)(p.Z,{value:"res",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "attributes": {\n      "created": "2021-01-01T12:00:00.000Z",\n      "name": "vertex-valve.jt",\n      "status": "pending"\n    },\n    // highlight-next-line\n    "id": "[YOUR_FILE_ID]",\n    "type": "file"\n  }\n}\n')))),(0,i.kt)("p",null,"Now that the file resource exists, ",(0,i.kt)("inlineCode",{parentName:"p"},"POST")," to the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.vertexvis.com/#0b0a01c2-831d-4b01-87ea-765d4f2e6c1a"},"uploadFile")," API."),(0,i.kt)(l.Z,{defaultValue:"req",values:[{label:"Request",value:"req"},{label:"Response",value:"res"}],mdxType:"Tabs"},(0,i.kt)(p.Z,{value:"req",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'curl --location --request POST \\\n  // highlight-next-line\n  --url "https://platform.vertexvis.com/files/[YOUR_FILE_ID]" \\\n  --header "Authorization: Bearer [YOUR_ACCESS_TOKEN]" \\\n  --header "Content-Type: application/octet-stream" \\\n  --upload-file "[YOUR_PATH_TO_3D_DATA_FILE_INCLUDING_FILE_EXTENSION]"\n'))),(0,i.kt)(p.Z,{value:"res",mdxType:"TabItem"},(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"204: No Content")))),(0,i.kt)("h2",{id:"creating-parts"},"Creating parts"),(0,i.kt)("p",null,"To make querying for parts easier, Vertex supports supplied IDs. You supply these IDs, likely using existing part and revision IDs from your PLM system. To initiate translations, ",(0,i.kt)("inlineCode",{parentName:"p"},"POST")," to the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.vertexvis.com/#05c13b3e-b407-4b19-b110-e6bdc016a714"},"createPart")," API. This API is asynchronous, returning the status of a queued translation."),(0,i.kt)(l.Z,{defaultValue:"req",values:[{label:"Request",value:"req"},{label:"Response",value:"res"}],mdxType:"Tabs"},(0,i.kt)(p.Z,{value:"req",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'curl --location --request POST \\\n  --url "https://platform.vertexvis.com/parts" \\\n  --header "Authorization: Bearer [YOUR_ACCESS_TOKEN]" \\\n  --header "Content-Type: application/vnd.api+json" \\\n  --data \'{\n  "data": {\n    "attributes": {\n      // highlight-start\n      "suppliedId": "[YOUR_SUPPLIED_ID]",\n      "suppliedRevisionId": "[YOUR_SUPPLIED_REVISION_ID]"\n      // highlight-end\n    },\n    "relationships": {\n      "source": {\n        "data": {\n          // highlight-next-line\n          "id": "[YOUR_FILE_ID]",\n          "type": "file"\n        }\n      }\n    },\n    "type": "part"\n  }\n}\'\n'))),(0,i.kt)(p.Z,{value:"res",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "attributes": {\n      "status": "running"\n    },\n    // highlight-next-line\n    "id": "[YOUR_QUEUED_TRANSLATION_ID]",\n    "type": "queued-translation"\n  }\n}\n')))),(0,i.kt)("p",null,"To check the status of queued translations, ",(0,i.kt)("inlineCode",{parentName:"p"},"GET")," the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.vertexvis.com/#9d4734b1-3300-46bb-bb87-85d23b5e52a3"},"getQueuedTranslation")," API. The response returns one of the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The status if ",(0,i.kt)("inlineCode",{parentName:"li"},"running"),"."),(0,i.kt)("li",{parentName:"ul"},"An ",(0,i.kt)("inlineCode",{parentName:"li"},"error")," (similar to the response above)."),(0,i.kt)("li",{parentName:"ul"},"Upon completion, redirects to the created part.")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"PART_ID")," returned is for the root assembly or part. If your file contains a hierarchy, query for other parts using the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.vertexvis.com/#25778d06-038f-410f-bb67-503c932a59a8"},"getParts")," API."))),(0,i.kt)(l.Z,{defaultValue:"req",values:[{label:"Request",value:"req"},{label:"Response",value:"res"}],mdxType:"Tabs"},(0,i.kt)(p.Z,{value:"req",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'curl --location --request GET \\\n  // highlight-next-line\n  --url "https://platform.vertexvis.com/queued-translations/[YOUR_QUEUED_TRANSLATION_ID]" \\\n  --header "Authorization: Bearer [YOUR_ACCESS_TOKEN]" \\\n  --location\n'))),(0,i.kt)(p.Z,{value:"res",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "attributes": {\n      "created": "2021-01-01T12:00:00.000Z",\n      "name": "[YOUR_NAME]",\n      "suppliedId": "[YOUR_SUPPLIED_ID]"\n    },\n    // highlight-next-line\n    "id": "[YOUR_PART_ID]",\n    "relationships": {\n      "partRevisions": [\n        {\n          // highlight-next-line\n          "id": "[YOUR_PART_REVISION_ID]",\n          "type": "part-revision"\n        }\n      ]\n    },\n    "type": "part"\n  },\n  "included": [\n    {\n      "data": {\n        "attributes": {\n          "created": "2021-01-01T12:00:00.000Z",\n          "name": "[YOUR_NAME]",\n          "suppliedId": "[YOUR_SUPPLIED_ID]"\n        },\n        "id": "[YOUR_PART_REVISION_ID]",\n        "relationships": {\n          "part": {\n            "id": "[YOUR_PART_ID]",\n            "type": "part"\n          }\n        },\n        "type": "part-revision"\n      }\n    }\n  ]\n}\n')))))}v.isMDXComponent=!0},11748:function(e,t,a){var n={"./locale":89234,"./locale.js":89234};function r(e){var t=i(e);return a(t)}function i(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=i,e.exports=r,r.id=11748}}]);