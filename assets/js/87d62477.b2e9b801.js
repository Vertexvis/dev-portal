(self.webpackChunkdev_portal=self.webpackChunkdev_portal||[]).push([[9551],{35722:function(e,t,n){"use strict";n.d(t,{G:function(){return s}});var a=n(67294),r=n(21140),i=n.n(r),o='Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"';function s(e){var t=e.chart;return(0,a.useEffect)((function(){i().contentLoaded()}),[]),a.createElement("div",{className:"mermaid"},t)}i().initialize({fontFamily:o,gantt:{fontFamily:o},sequence:{actorFontFamily:o,messageFontFamily:o,messageFontWeight:100,noteFontFamily:o,showSequenceNumbers:!0},startOnLoad:!0})},73773:function(e,t,n){"use strict";n.d(t,{a:function(){return r}});var a=n(67294);function r(){return a.createElement(a.Fragment,null,"Your Vertex client secret is sensitive and must be kept secure at all times. You should ",a.createElement("strong",null,"never")," include it in client-side web applications.")}},4947:function(e,t,n){"use strict";n.d(t,{R:function(){return r}});var a=n(67294);function r(){return a.createElement(a.Fragment,null,"The following instructions assume:",a.createElement("ul",null,a.createElement("li",null,"You created a free developer account by"," ",a.createElement("a",{href:"https://aws.amazon.com/marketplace/pp/B08PP264Z1?stl=true"},"visiting our listing on the AWS Marketplace"),"."),a.createElement("li",null,"You created credentials in the"," ",a.createElement("a",{href:"https://console.vertexvis.com/applications"},"Vertex Console")," ","and have your Vertex client ID and secret.")))}},97675:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return u},metadata:function(){return c},toc:function(){return d},default:function(){return m}});var a=n(22122),r=n(19756),i=(n(67294),n(3905)),o=n(35722),s=(n(73773),n(4947),n(41395)),l=n(58215),u={id:"webhook-events",title:"Webhook Events",description:"Receive Vertex platform event notifications with webhooks to automatically trigger actions in your application."},c={unversionedId:"guides/webhook-events",id:"guides/webhook-events",isDocsHomePage:!1,title:"Webhook Events",description:"Receive Vertex platform event notifications with webhooks to automatically trigger actions in your application.",source:"@site/docs/guides/webhooks.mdx",sourceDirName:"guides",slug:"/guides/webhook-events",permalink:"/docs/guides/webhook-events",editUrl:"https://github.com/Vertexvis/dev-portal/tree/main/docs/guides/webhooks.mdx",version:"current",frontMatter:{id:"webhook-events",title:"Webhook Events",description:"Receive Vertex platform event notifications with webhooks to automatically trigger actions in your application."},sidebar:"guidesSidebar",previous:{title:"Render static scenes",permalink:"/docs/guides/render-static-scenes"},next:{title:"Install Web UI Components",permalink:"/docs/guides/install-sdk"}},d=[{value:"Creating a webhook endpoint",id:"creating-a-webhook-endpoint",children:[]},{value:"Creating a webhook subscription",id:"creating-a-webhook-subscription",children:[]},{value:"Verifying events using webhook signatures",id:"verifying-events-using-webhook-signatures",children:[]},{value:"Topics",id:"topics",children:[]},{value:"Retry schedule",id:"retry-schedule",children:[]}],p={toc:d};function m(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Vertex uses webhooks to notify your application of activity occurring in your account. Rather than your application calling our API, webhooks allow Vertex to call your API or server. For instance, webhook events indicate when asynchronous operations like creating parts and scene items complete. Upon receiving these events from Vertex, your application can react."),(0,i.kt)("p",null,"The specific actions your webhook endpoint takes differ based on the event. Some examples include:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Starting scene creation once all parts in the scene are translated"),(0,i.kt)("li",{parentName:"ul"},"Updating database values when a scene is updated"),(0,i.kt)("li",{parentName:"ul"},"Sending an event to your front-end when a scene is ready to view")),(0,i.kt)("p",null,"Not all applications require webhooks. Many events in Vertex have synchronous results. For example, a successful request to create a scene immediately returns. These requests don't require webhooks."),(0,i.kt)("p",null,"To receive webhook events, do the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Create a webhook endpoint on your server."),(0,i.kt)("li",{parentName:"ul"},"Create a webhook subscription providing your server's URL."),(0,i.kt)("li",{parentName:"ul"},"Verify the events using the webhook signature.")),(0,i.kt)(o.G,{chart:"\n  sequenceDiagram\n  participant C as Client App\n  participant API as Vertex API\n      Note over C,API: Create webhook subscription\n      C->>+API: Create webhook subscription\n      API--\x3e>-C: Subscription secret\n      Note over C,API: Receive webhook events\n      API->>+C: scene.updated, etc.\n      C--\x3e>-API: 200 OK\n      C->>+C: Verify event with secret, take action\n",mdxType:"Mermaid"}),(0,i.kt)("h2",{id:"creating-a-webhook-endpoint"},"Creating a webhook endpoint"),(0,i.kt)("p",null,"Creating a webhook endpoint on your server is as simple as adding a new route with the desired URL. For each event, Vertex ",(0,i.kt)("inlineCode",{parentName:"p"},"POST"),"s to your endpoint with the JSON event body."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"For security purposes, Vertex requires HTTPS URLs for webhook subscriptions."))),(0,i.kt)("p",null,"Your webhook endpoint must confirm successful receipt with a 2xx status code. All timeouts or response codes >=3xx indicate failure to Vertex and ",(0,i.kt)("a",{parentName:"p",href:"#retry-schedule"},"we will retry"),". Vertex stops retrying after the 8th attempt. After multiple days without receiving any 2xx status codes from your endpoint, Vertex pauses your subscription."),(0,i.kt)("p",null,"Your endpoint must return a 2xx status code quickly, even as your sever receives many events in parallel. Therefore, Vertex recommends immediately queuing events using something like SQS or RabbitMQ, returning a 200, and then processing the event asynchronously."),(0,i.kt)("p",null,"Event processing should be idempotent as endpoints may occasionally receive the same event more than once. Vertex also does not guarantee event order. Your endpoint should not expect delivery in a specific order."),(0,i.kt)("h2",{id:"creating-a-webhook-subscription"},"Creating a webhook subscription"),(0,i.kt)("p",null,"To receive webhooks, you first create a webhook subscription. ",(0,i.kt)("inlineCode",{parentName:"p"},"POST")," to the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.vertexvis.com/#27c642fc-6abd-4fea-851b-7f7b5cc476cb"},"createWebhookSubscription")," API. ",(0,i.kt)("a",{parentName:"p",href:"#topics"},"See the table below")," for available topics. It's best practice to receive only the topics required by your application. Listening for extra events puts strain on your server and is not recommended."),(0,i.kt)(s.Z,{defaultValue:"req",values:[{label:"Request",value:"req"},{label:"Response",value:"res"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"req",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'curl --location --request POST \\\n  --url "https://platform.vertexvis.com/webhook-subscriptions" \\\n  --header "Authorization: Bearer [YOUR_ACCESS_TOKEN]" \\\n  --header "Content-Type: application/vnd.api+json" \\\n  --data \'{\n  "data": {\n    "attributes": {\n      // highlight-start\n      "topics": ["scene.updated"],\n      "url": "https://example.com"\n      // highlight-end\n    },\n    "type": "webhook-subscription"\n  }\n}\'\n'))),(0,i.kt)(l.Z,{value:"res",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "type": "webhook-subscription",\n    "id": "[YOUR_WEBHOOK_SUBSCRIPTION_ID]",\n    "attributes": {\n      "url": "https://example.com/",\n      // highlight-next-line\n      "secret": "[YOUR_WEBHOOK_SECRET]",\n      "topics": ["scene.updated"],\n      "status": "active",\n      "created": "2021-01-01T12:00:00.000Z"\n    }\n  }\n}\n')))),(0,i.kt)("p",null,"Vertex generates a unique secret for each subscription. Keep it secure. We'll use it in the following section."),(0,i.kt)("h2",{id:"verifying-events-using-webhook-signatures"},"Verifying events using webhook signatures"),(0,i.kt)("p",null,"Vertex signs webhook events it sends to your endpoints and includes a signature in each event's ",(0,i.kt)("inlineCode",{parentName:"p"},"x-vertex-signature")," header allowing you to verify that Vertex sent the events."),(0,i.kt)("p",null,"Vertex generates signatures using a hash-based message authentication code (HMAC) with SHA-256. To verify it in your webhook endpoint, compute an HMAC with the SHA256 hash function. Use the secret as the key and the HTTP request's body as the message. The following is an example using Node.js."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import { createHmac } from 'crypto';\n\nexport function handler(evt) {\n  const signature = evt.headers['x-vertex-signature'];\n  if (!signature) {\n    return response(400, 'No signature.');\n  }\n\n  if (!isSignatureValid(evt.body, signature)) {\n    return response(400, 'Invalid signature.');\n  }\n\n  try {\n    const body = JSON.parse(evt.body);\n    console.log(\n      `Received ${evt.headers['x-vertex-topic']}: ${JSON.stringify(body)}`\n    );\n\n    // TODO: Take action on the webhook event.\n\n    return response(200, 'OK');\n  } catch (e) {\n    return response(400, 'Invalid body.');\n  }\n}\n\nexport function isSignatureValid(body, signature) {\n  return (\n    signature ===\n    createHmac('sha256', process.env.WEBHOOK_SECRET).update(body).digest('hex')\n  );\n}\n")),(0,i.kt)("h2",{id:"topics"},"Topics"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"queued-scene-item.completed")),(0,i.kt)("td",{parentName:"tr",align:null},"Queued scene item completed. Occurs after asynchronous ",(0,i.kt)("inlineCode",{parentName:"td"},"POST /scenes/:id/scene-items")," completes.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"queued-translation.completed")),(0,i.kt)("td",{parentName:"tr",align:null},"Queued translation completed. Occurs after asynchronous ",(0,i.kt)("inlineCode",{parentName:"td"},"POST /parts")," or ",(0,i.kt)("inlineCode",{parentName:"td"},"POST /geometry-sets")," completes.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"scene.updated")),(0,i.kt)("td",{parentName:"tr",align:null},"Scene updated. Occurs upon ",(0,i.kt)("inlineCode",{parentName:"td"},"PATCH /scenes/:id")," and after asynchronous scene ",(0,i.kt)("inlineCode",{parentName:"td"},"commit")," of a scene completes and ",(0,i.kt)("inlineCode",{parentName:"td"},"state")," updates to ",(0,i.kt)("inlineCode",{parentName:"td"},"ready"),".")))),(0,i.kt)("h2",{id:"retry-schedule"},"Retry schedule"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Retry number"),(0,i.kt)("th",{parentName:"tr",align:null},"Interval relative to last retry"),(0,i.kt)("th",{parentName:"tr",align:null},"Time relative to original attempt"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"1"),(0,i.kt)("td",{parentName:"tr",align:null},"5 mins"),(0,i.kt)("td",{parentName:"tr",align:null},"5 mins")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"2"),(0,i.kt)("td",{parentName:"tr",align:null},"10 mins"),(0,i.kt)("td",{parentName:"tr",align:null},"15 mins")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"3"),(0,i.kt)("td",{parentName:"tr",align:null},"45 mins"),(0,i.kt)("td",{parentName:"tr",align:null},"1 hr")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"4"),(0,i.kt)("td",{parentName:"tr",align:null},"2 hrs"),(0,i.kt)("td",{parentName:"tr",align:null},"3 hrs")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"5"),(0,i.kt)("td",{parentName:"tr",align:null},"3 hrs"),(0,i.kt)("td",{parentName:"tr",align:null},"6 hrs")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"6"),(0,i.kt)("td",{parentName:"tr",align:null},"6 hrs"),(0,i.kt)("td",{parentName:"tr",align:null},"12 hrs")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"7"),(0,i.kt)("td",{parentName:"tr",align:null},"12 hrs"),(0,i.kt)("td",{parentName:"tr",align:null},"24 hrs")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"8"),(0,i.kt)("td",{parentName:"tr",align:null},"24 hrs"),(0,i.kt)("td",{parentName:"tr",align:null},"48 hrs")))))}m.isMDXComponent=!0},11748:function(e,t,n){var a={"./locale":89234,"./locale.js":89234};function r(e){var t=i(e);return n(t)}function i(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=i,e.exports=r,r.id=11748}}]);