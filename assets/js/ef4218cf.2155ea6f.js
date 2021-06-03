(self.webpackChunkdev_portal=self.webpackChunkdev_portal||[]).push([[6823],{35722:function(e,t,n){"use strict";n.d(t,{G:function(){return o}});var a=n(67294),i=n(21140),s=n.n(i),r='Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"';function o(e){var t=e.chart;return(0,a.useEffect)((function(){s().contentLoaded()}),[]),a.createElement("div",{className:"mermaid"},t)}s().initialize({fontFamily:r,gantt:{fontFamily:r},sequence:{actorFontFamily:r,messageFontFamily:r,messageFontWeight:100,noteFontFamily:r,showSequenceNumbers:!0},startOnLoad:!0})},73773:function(e,t,n){"use strict";n.d(t,{a:function(){return i}});var a=n(67294);function i(){return a.createElement(a.Fragment,null,"Your Vertex client secret is sensitive and must be kept secure at all times. You should ",a.createElement("strong",null,"never")," include it in client-side web applications.")}},4947:function(e,t,n){"use strict";n.d(t,{R:function(){return i}});var a=n(67294);function i(){return a.createElement(a.Fragment,null,"The following instructions assume:",a.createElement("ul",null,a.createElement("li",null,"You created a free developer account by"," ",a.createElement("a",{href:"https://aws.amazon.com/marketplace/pp/B08PP264Z1?stl=true"},"visiting our listing on the AWS Marketplace"),"."),a.createElement("li",null,"You created credentials in the"," ",a.createElement("a",{href:"https://console.vertexvis.com/applications"},"Vertex Console")," ","and have your Vertex client ID and secret.")))}},92243:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return p},metadata:function(){return m},toc:function(){return h},default:function(){return v}});var a=n(22122),i=n(19756),s=(n(67294),n(3905)),r=n(35722),o=n(73773),c=n(4947),l=n(41395),u=n(58215),d=["components"],p={id:"authentication",title:"Authentication",description:"Gain secure access to Vertex platform APIs and SDKs."},m={unversionedId:"guides/authentication",id:"guides/authentication",isDocsHomePage:!1,title:"Authentication",description:"Gain secure access to Vertex platform APIs and SDKs.",source:"@site/docs/guides/authentication.mdx",sourceDirName:"guides",slug:"/guides/authentication",permalink:"/docs/guides/authentication",editUrl:"https://github.com/Vertexvis/dev-portal/tree/main/docs/guides/authentication.mdx",version:"current",frontMatter:{id:"authentication",title:"Authentication",description:"Gain secure access to Vertex platform APIs and SDKs."},sidebar:"guidesSidebar",previous:{title:"Postman quick start",permalink:"/docs/guides/postman-quick-start"},next:{title:"Import data",permalink:"/docs/guides/import-data-with-api"}},h=[{value:"Creating access tokens",id:"creating-access-tokens",children:[]},{value:"Using access tokens",id:"using-access-tokens",children:[]},{value:"Viewer component",id:"viewer-component",children:[]}],k={toc:h};function v(e){var t=e.components,n=(0,i.Z)(e,d);return(0,s.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)(c.R,{mdxType:"SignUpNote"}))),(0,s.kt)("p",null,"Gain secure access to the Vertex APIs by exchanging OAuth 2.0 credentials for an access token."),(0,s.kt)("p",null,"The flow is as follows:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Your application makes a secure HTTP call, providing its credentials. You receive an access token in response."),(0,s.kt)("li",{parentName:"ul"},"When making subsequent Vertex API calls, your application includes the access token.")),(0,s.kt)(r.G,{chart:"\n  sequenceDiagram\n  participant CF as Client App Frontend\n  participant C as Client App\n  participant V as Vertex API clients\n  participant API as Vertex API\n    CF->>+C: Authenticate\n    C->>+API: Request token with credentials\n    API--\x3e>-C: Token response\n    C--\x3e>-CF: Token\n    CF->>+V: API client call with token\n    V--\x3e>-CF: API client response\n    C->>+API: API request with token\n    API--\x3e>-C: API response\n",mdxType:"Mermaid"}),(0,s.kt)("h2",{id:"creating-access-tokens"},"Creating access tokens"),(0,s.kt)("p",null,"To create an access token, ",(0,s.kt)("inlineCode",{parentName:"p"},"POST")," to the ",(0,s.kt)("a",{parentName:"p",href:"https://docs.vertexvis.com/#f8c5dc19-0f68-442e-8d28-aa03be2c48fb"},"createToken")," API with your credentials. The token API uses HTTP basic access authentication. The request contains the ",(0,s.kt)("inlineCode",{parentName:"p"},"Authorization: Basic [YOUR_CREDENTIALS]")," header, where ",(0,s.kt)("inlineCode",{parentName:"p"},"YOUR_CREDENTIALS")," is the Base64 encoding of your Vertex client ID and secret joined by a colon. The following command performs this encoding and creates an access token."),(0,s.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)(o.a,{mdxType:"ProtectSecretNote"}))),(0,s.kt)(l.Z,{defaultValue:"req",values:[{label:"Request",value:"req"},{label:"Response",value:"res"}],mdxType:"Tabs"},(0,s.kt)(u.Z,{value:"req",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},'curl --location --request POST \\\n  // highlight-next-line\n  --url "https://platform.vertexvis.com/oauth2/token" \\\n  --header "Authorization: Basic $(echo -n "[YOUR_CLIENT_ID]:[YOUR_CLIENT_SECRET]" | base64)" \\\n  --header "Content-Type: application/x-www-form-urlencoded" \\\n  --data-urlencode "grant_type=client_credentials"\n'))),(0,s.kt)(u.Z,{value:"res",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  // highlight-next-line\n  "access_token": "[YOUR_ACCESS_TOKEN]",\n  "account_id": "[YOUR_ACCOUNT_ID]",\n  "expires_in": 3600,\n  "scopes": [],\n  "token_type": "bearer"\n}\n')))),(0,s.kt)("h2",{id:"using-access-tokens"},"Using access tokens"),(0,s.kt)("p",null,"Access tokens are valid for one hour. Include them as a bearer token in the ",(0,s.kt)("inlineCode",{parentName:"p"},"Authorization")," header for subsequent API calls."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},'curl --location --request GET \\\n  --url "https://platform.vertexvis.com/files" \\\n  // highlight-next-line\n  --header "Authorization: Bearer [YOUR_ACCESS_TOKEN]"\n')),(0,s.kt)("h2",{id:"viewer-component"},"Viewer component"),(0,s.kt)("p",null,"The Viewer component authenticates using stream keys. These keys grant access to specific scenes, so you'll need one first. If you don't have one, create one by following the ",(0,s.kt)("a",{parentName:"p",href:"/docs/guides/import-data"},"Import data")," and ",(0,s.kt)("a",{parentName:"p",href:"/docs/guides/render-static-scenes"},"Render static scenes")," guides. Then, to create a stream key, ",(0,s.kt)("inlineCode",{parentName:"p"},"POST")," to the ",(0,s.kt)("a",{parentName:"p",href:"https://docs.vertexvis.com/#dd9c119e-5808-4bc5-8aeb-afc1ca34362d"},"createSceneStreamKey")," API."),(0,s.kt)(l.Z,{defaultValue:"req",values:[{label:"Request",value:"req"},{label:"Response",value:"res"}],mdxType:"Tabs"},(0,s.kt)(u.Z,{value:"req",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},'curl --location --request POST \\\n  // highlight-next-line\n  --url "https://platform.vertexvis.com/scenes/[YOUR_SCENE_ID]/stream-keys" \\\n  --header "Authorization: Bearer [YOUR_ACCESS_TOKEN]" \\\n  --header "Content-Type: application/vnd.api+json" \\\n  --data \'{\n  "data": {\n    "attributes": {\n      "expiry": 600\n    },\n    "type": "stream-key"\n  }\n}\'\n'))),(0,s.kt)(u.Z,{value:"res",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "attributes": {\n      // highlight-next-line\n      "key": "[YOUR_STREAM_KEY]",\n      "expiry": 600\n    },\n    "id": "[YOUR_STREAM_KEY_ID]",\n    "relationships": {\n      "scene": {\n        "data": {\n          "id": "[YOUR_SCENE_ID]",\n          "type": "scene"\n        }\n      }\n    },\n    "type": "stream-key"\n  }\n}\n')))),(0,s.kt)("p",null,"Now, pass the stream key to the ",(0,s.kt)("inlineCode",{parentName:"p"},"viewer.load")," method in the Viewer component."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"async function main() {\n  const viewer = document.querySelector('vertex-viewer');\n  // highlight-next-line\n  await viewer.load('urn:vertexvis:stream-key:[YOUR_STREAM_KEY]');\n}\n")))}v.isMDXComponent=!0},11748:function(e,t,n){var a={"./locale":89234,"./locale.js":89234};function i(e){var t=s(e);return n(t)}function s(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}i.keys=function(){return Object.keys(a)},i.resolve=s,e.exports=i,i.id=11748}}]);