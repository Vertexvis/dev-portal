/*! For license information please see c4f5d8e4.3f0da94f.js.LICENSE.txt */
(self.webpackChunkdev_portal=self.webpackChunkdev_portal||[]).push([[4195,9514,138],{62841:function(e,t,a){"use strict";a.r(t);var l=a(22122),n=a(67294),r=a(94184),o=a.n(r),s=a(39284),c=a(36742),i=a(52263),m=(a(44996),a(99578)),u=[{title:n.createElement(n.Fragment,null,"Render your first scene"),icon:n.createElement(n.Fragment,null,n.createElement("svg",{height:"32",viewBox:"0 0 16 16",width:"32",xmlns:"http://www.w3.org/2000/svg"},n.createElement("path",{d:"m8 5.37a.5.5 0 0 0 -.5.5.5.5 0 0 0 1 0 .5.5 0 0 0 -.5-.5zm-1.57 4.22a.5.5 0 0 0 -.54-.85.5.5 0 0 0 .54.84zm-1.84 1.17a.5.5 0 1 0 -.54-.84.49.49 0 0 0 -.16.69.5.5 0 0 0 .7.15zm3.41-7.5a.5.5 0 0 0 -.5.5.5.5 0 1 0 1 0 .5.5 0 0 0 -.5-.5zm5.73.8-5.5-2.85a.47.47 0 0 0 -.42 0l-5.54 2.85a.48.48 0 0 0 -.27.44v7a.6.6 0 0 0 .06.23v.06.06a.31.31 0 0 0 .09.07l5.5 2.85a.47.47 0 0 0 .46 0l5.5-2.85a.31.31 0 0 0 .09-.07l.05-.06v-.06a.6.6 0 0 0 .25-.23v-7a.48.48 0 0 0 -.27-.44zm-6.23 9.47-4.5-2.33v-5.79l4.5 2.86zm.5-6.12-4.5-2.87 4.5-2.33 4.5 2.33zm5 3.79-4.5 2.33v-5.26l4.5-2.86zm-1.61-.45a.5.5 0 0 0 .54-.85.5.5 0 0 0 -.54.84zm-1.83-1.17a.5.5 0 1 0 .54-.84.5.5 0 0 0 -.69.15.49.49 0 0 0 .15.69z",fill:"#00ade4"}))),description:n.createElement(n.Fragment,null,"Visualize 3D in under 10 minutes. We've provided a sample model that's already in the cloud, so you can try out Vertex. Once you're rendering, you're ready to integrate Vertex into your applications. It's that simple."),callout:[{text:n.createElement(n.Fragment,null,"TRY IT OUT"),url:"/docs/guides/render-your-first-scene/"}],cta_links:!1,classes:"col col--4 first"},{title:n.createElement(n.Fragment,null,"Import data"),icon:n.createElement(n.Fragment,null,n.createElement("svg",{height:"32",viewBox:"0 0 16 16",width:"32",xmlns:"http://www.w3.org/2000/svg"},n.createElement("path",{d:"m7 12a.5.5 0 0 0 1 0v-4.5h3l-3.5-5-3.5 5h3zm6.5-1a.5.5 0 0 0 -.5.5v2.33a.16.16 0 0 1 -.17.17h-10.66a.16.16 0 0 1 -.17-.17v-2.33a.5.5 0 0 0 -1 0v2.33a1.17 1.17 0 0 0 1.17 1.17h10.66a1.17 1.17 0 0 0 1.17-1.17v-2.33a.5.5 0 0 0 -.5-.5z",fill:"#00ade4"}))),description:n.createElement(n.Fragment,null,"Import 3D data into the Vertex Parts Library. We provide you two ways to do this along with options to include attributes, such as existing part and revision IDs or metadata from your PLM system."),callout:!1,cta_links:[{text:n.createElement(n.Fragment,null,"Quickly import data (CLI)"),url:"/docs/guides/import-data"},{text:n.createElement(n.Fragment,null,"Populate your Parts Library (API)"),url:"/docs/guides/import-data-with-api"},{text:n.createElement(n.Fragment,null,"Import metadata"),url:"/docs/guides/import-metadata"}],classes:"col col--4"},{title:n.createElement(n.Fragment,null,"Build your first application"),icon:n.createElement(n.Fragment,null,n.createElement("svg",{height:"29",width:"29",viewBox:"0 0 25.38 25.38",xmlns:"http://www.w3.org/2000/svg"},n.createElement("g",{fill:"#00ade4",transform:"translate(-1.81 -1.81)"},n.createElement("path",{d:"m24.47 16.31h-5.47a2.72 2.72 0 0 0 -2.69 2.69v5.44a2.72 2.72 0 0 0 2.69 2.75h5.44a2.72 2.72 0 0 0 2.72-2.72v-5.47a2.72 2.72 0 0 0 -2.69-2.69zm.91 8.16a.91.91 0 0 1 -.91.91h-5.47a.91.91 0 0 1 -.91-.91v-4.53h7.26z"}),n.createElement("path",{d:"m10 16.31h-5.47a2.72 2.72 0 0 0 -2.72 2.69v5.44a2.72 2.72 0 0 0 2.72 2.72h5.47a2.72 2.72 0 0 0 2.72-2.72v-5.44a2.72 2.72 0 0 0 -2.72-2.69zm.91 8.16a.91.91 0 0 1 -.91.91h-5.47a.91.91 0 0 1 -.91-.91v-4.53h7.26z"}),n.createElement("path",{d:"m24.47 1.81h-5.47a2.72 2.72 0 0 0 -2.72 2.72v5.47a2.72 2.72 0 0 0 2.72 2.69h5.44a2.72 2.72 0 0 0 2.75-2.69v-5.47a2.72 2.72 0 0 0 -2.72-2.72zm.91 8.19a.91.91 0 0 1 -.91.91h-5.47a.91.91 0 0 1 -.91-.91v-4.56h7.26z"}),n.createElement("path",{d:"m10 1.81h-5.47a2.72 2.72 0 0 0 -2.72 2.72v5.47a2.72 2.72 0 0 0 2.72 2.72h5.47a2.72 2.72 0 0 0 2.69-2.72v-5.47a2.72 2.72 0 0 0 -2.69-2.72zm.88 8.19a.91.91 0 0 1 -.91.91h-5.44a.91.91 0 0 1 -.91-.91v-4.56h7.26z"})))),description:n.createElement(n.Fragment,null,"Deploy a full stack NextJS application using our template as a starting point. Add your own functionality to customize the application and take full advantage of what Vertex has to offer."),callout:[{text:n.createElement(n.Fragment,null,"Build It"),url:"/docs/guides/build-your-first-app"}],cta_links:!1,classes:"col col--4"}];function d(e){var t=e.title,a=e.description,l=e.icon,r=e.callout,s=e.cta_links,i=e.classes;return n.createElement("div",{className:o()("gs-guide",i,m.Z.gsGuide)},n.createElement("div",{className:o()("gs-guide-content",m.Z.cardContent,m.Z.gsGuideContent)},l,n.createElement("h2",null,t),n.createElement("p",null,a),n.createElement("div",{className:o()(m.Z.cardLinks)},r.length&&r.map((function(e,t){return n.createElement("div",{key:t,className:o()(m.Z.callOutCardLink)},n.createElement("p",null,n.createElement(c.Z,{className:o()("button button--outline button--primary"),to:e.url},e.text)))})),s.length&&s.map((function(e,t){return n.createElement("p",{key:t},n.createElement(c.Z,{className:o()("sdk-link non-button-link"),to:e.url},e.text))})))))}var p=[{title:n.createElement(n.Fragment,null,"Vertex CLI"),logos:[{source:n.createElement(n.Fragment,null,n.createElement("svg",{viewBox:"0 0 95 95",xmlns:"http://www.w3.org/2000/svg"},n.createElement("linearGradient",{id:"a",gradientTransform:"matrix(1 0 0 -1 0 95)",gradientUnits:"userSpaceOnUse",x1:"20.45",x2:"73.86",y1:"18.49",y2:"75.76"},n.createElement("stop",{offset:".08",stopColor:"#09c"}),n.createElement("stop",{offset:".12",stopColor:"#009bc4"}),n.createElement("stop",{offset:".18",stopColor:"#00a1ad"}),n.createElement("stop",{offset:".26",stopColor:"#0a8"}),n.createElement("stop",{offset:".35",stopColor:"#00b754"}),n.createElement("stop",{offset:".45",stopColor:"#00c713"}),n.createElement("stop",{offset:".48",stopColor:"#0c0"}),n.createElement("stop",{offset:".53",stopColor:"#39c100"}),n.createElement("stop",{offset:".58",stopColor:"#6db600"}),n.createElement("stop",{offset:".63",stopColor:"#9aad00"}),n.createElement("stop",{offset:".69",stopColor:"#bea600"}),n.createElement("stop",{offset:".74",stopColor:"#dba000"}),n.createElement("stop",{offset:".8",stopColor:"#ef9c00"}),n.createElement("stop",{offset:".85",stopColor:"#fb9a00"}),n.createElement("stop",{offset:".9",stopColor:"#f90"})),n.createElement("linearGradient",{id:"b",x1:"34.49",x2:"87.91",xlinkHref:"#a",y1:"5.39",y2:"62.66"}),n.createElement("linearGradient",{id:"c",x1:"14.21",x2:"67.62",xlinkHref:"#a",y1:"24.31",y2:"81.57"}),n.createElement("linearGradient",{id:"d",x1:"-1.97",x2:"51.45",xlinkHref:"#a",y1:"39.39",y2:"96.66"}),n.createElement("path",{d:"m72.66 15.58h-50.32a6.88 6.88 0 0 0 -6.87 6.81v50.18a6.86 6.86 0 0 0 6.87 6.85h50.32a6.87 6.87 0 0 0 6.87-6.85v-50.18a6.88 6.88 0 0 0 -6.87-6.81zm2.29 57a2.3 2.3 0 0 1 -2.3 2.28h-50.31a2.3 2.3 0 0 1 -2.34-2.29v-36.34h55zm0-40.91h-54.95v-9.28a2.3 2.3 0 0 1 2.3-2.29h50.36a2.31 2.31 0 0 1 2.34 2.29z",fill:"url(#a)"}),n.createElement("path",{d:"m47.52 68.12h18.29a2.29 2.29 0 0 0 0-4.57h-18.29a2.29 2.29 0 0 0 0 4.57z",fill:"url(#b)"}),n.createElement("path",{d:"m27.61 67.45a2.28 2.28 0 0 0 3.19 0l13.1-13.05-13.06-13a2.29 2.29 0 0 0 -3.72 2.6 2.38 2.38 0 0 0 .53.52l9.81 9.81-9.81 9.83a2.29 2.29 0 0 0 -.08 3.23z",fill:"url(#c)"}),n.createElement("circle",{cx:"25.92",cy:"25.71",fill:"url(#d)",r:"2.91"})))}],url:"https://github.com/Vertexvis/vertex-cli"},{title:n.createElement(n.Fragment,null,"Web UI Components"),logos:[{source:n.createElement(n.Fragment,null,n.createElement("svg",{viewBox:"0 0 95 95",xmlns:"http://www.w3.org/2000/svg"},n.createElement("path",{d:"m25.14 79.89-4.98-55.81h54.68l-4.98 55.81-22.39 6.2z",fill:"#e44d26"}),n.createElement("path",{d:"m47.5 81.35 18.09-5.02 4.26-47.69h-22.35z",fill:"#f16529"}),n.createElement("path",{d:"m47.5 49.34h-9.06l-.63-7h9.69v-6.85h-.02-17.15l.17 1.84 1.68 18.86h15.32z",fill:"#ebebeb"}),n.createElement("path",{d:"m47.5 67.12-.03.01-7.63-2.06-.48-5.46h-3.71-3.16l.96 10.75 14.02 3.89h.03z",fill:"#ebebeb"}),n.createElement("path",{d:"m25.25 8.91h3.47v3.44h3.19v-3.44h3.48v10.41h-3.48v-3.49h-3.18v3.49h-3.48z"}),n.createElement("path",{d:"m40 12.36h-3.1v-3.45h9.6v3.45h-3.06v7h-3.44z"}),n.createElement("path",{d:"m48 8.91h3.63l2.23 3.66 2.23-3.66h3.62v10.41h-3.43v-5.16l-2.4 3.7h-.06l-2.39-3.7v5.16h-3.43z"}),n.createElement("path",{d:"m61.48 8.91h3.52v7h4.89v3.44h-8.41z"}),n.createElement("g",{fill:"#fff"},n.createElement("path",{d:"m47.48 49.34v6.85h8.42l-.79 8.88-7.63 2.06v7.12l14.03-3.89.1-1.16 1.61-18.02.17-1.84h-1.85z"}),n.createElement("path",{d:"m47.48 35.49v4.25 2.58.02h16.51.02l.14-1.54.31-3.47.16-1.84z"}))))}],url:"https://github.com/Vertexvis/vertex-web-sdk"},{title:n.createElement(n.Fragment,null,"React UI Component Bindings"),logos:[{source:n.createElement(n.Fragment,null,n.createElement("svg",{viewBox:"0 0 95 95",xmlns:"http://www.w3.org/2000/svg"},n.createElement("path",{d:"m7.28 47.37c0 6.08 5.93 11.75 15.28 15-1.87 9.4-.33 17 4.79 19.93s13.1.93 20.54-5.57c7.26 6.24 14.59 8.7 19.7 5.74s6.86-11.14 4.94-20.84c9.74-3.22 15.19-8 15.19-14.21 0-5.93-5.94-11.06-15.17-14.24 2.07-10.1.32-17.49-5-20.57-5.14-3-12.55-.38-19.91 6-7.66-6.8-15-8.88-20.33-5.79-5.14 3-6.6 10.69-4.73 20.26-9.06 3.13-15.3 8.38-15.3 14.29z",fill:"#fff"}),n.createElement("path",{d:"m70.52 36.32c-.76-.26-1.53-.5-2.3-.72.13-.52.24-1 .35-1.57 1.74-8.45.61-15.26-3.28-17.5-3.73-2.15-9.82.09-16 5.45-.61.53-1.2 1.07-1.78 1.63l-1.18-1.09c-6.45-5.73-12.92-8.14-16.8-5.9s-4.83 8.56-3.26 16.57c.15.79.33 1.58.53 2.36-.92.26-1.8.54-2.65.84-7.56 2.63-12.39 6.77-12.39 11s5.24 8.92 13.08 11.61c.64.22 1.28.42 1.93.61-.21.84-.39 1.69-.56 2.55-1.49 7.84-.32 14.12 3.39 16.26s10.27-.06 16.54-5.54c.5-.44 1-.89 1.49-1.38.63.61 1.27 1.2 1.93 1.77 6.07 5.22 12.07 7.33 15.78 5.18s5.08-8.93 3.46-17.1c-.12-.62-.27-1.26-.43-1.91l1.33-.44c8.19-2.71 13.52-7.1 13.52-11.59 0-4.3-5-8.46-12.7-11.12z",fill:"#53c1de"}),n.createElement("path",{d:"m68.74 56.13-1.2.38a69.88 69.88 0 0 0 -3.62-9 71.27 71.27 0 0 0 3.48-8.92c.73.21 1.44.43 2.12.67 6.62 2.28 10.65 5.64 10.65 8.23 0 2.77-4.36 6.35-11.43 8.69zm-2.93 5.87a26 26 0 0 1 .34 9.43c-.43 2.29-1.28 3.82-2.34 4.43-2.25 1.31-7.07-.39-12.26-4.86-.59-.51-1.19-1.06-1.79-1.63a72.84 72.84 0 0 0 6-7.61 72.38 72.38 0 0 0 9.68-1.49c.15.59.28 1.16.39 1.73zm-29.68 13.59c-2.2.77-4 .8-5 .19-2.25-1.3-3.19-6.32-1.91-13.05.15-.8.33-1.59.52-2.37a73 73 0 0 0 9.63 1.39 75.93 75.93 0 0 0 6.13 7.58c-.44.43-.89.84-1.36 1.25a26 26 0 0 1 -8 5zm-10.3-19.47a25.81 25.81 0 0 1 -8.33-4.43c-1.78-1.52-2.67-3-2.67-4.25 0-2.6 3.88-5.92 10.35-8.17q1.21-.42 2.46-.78a72.05 72.05 0 0 0 3.48 9 73.06 73.06 0 0 0 -3.53 9.15c-.59-.14-1.18-.32-1.76-.52zm3.45-23.52c-1.34-6.86-.45-12 1.8-13.33s7.67.59 13.24 5.53c.36.32.72.65 1.07 1a74.62 74.62 0 0 0 -6.08 7.53 74.52 74.52 0 0 0 -9.54 1.48c-.18-.73-.34-1.46-.49-2.2zm30.82 7.61c-.7-1.2-1.42-2.4-2.17-3.57 2.28.29 4.46.67 6.51 1.14a65.24 65.24 0 0 1 -2.28 6.15c-.66-1.25-1.35-2.49-2.06-3.72zm-12.57-12.21c1.41 1.53 2.82 3.23 4.21 5.08-2.82-.14-5.63-.14-8.45 0 1.39-1.83 2.81-3.53 4.24-5.07zm-12.64 12.23c-.71 1.22-1.38 2.45-2 3.7-.89-2.11-1.65-4.18-2.27-6.18 2-.46 4.21-.83 6.48-1.12q-1.16 1.79-2.21 3.6zm2.25 18.24a62.49 62.49 0 0 1 -6.58-1.06c.63-2 1.4-4.15 2.31-6.3.65 1.24 1.32 2.48 2 3.69s1.49 2.47 2.27 3.67zm10.48 8.66c-1.45-1.56-2.89-3.29-4.3-5.14 1.37 0 2.76.08 4.18.08s2.89 0 4.31-.1a64.47 64.47 0 0 1 -4.19 5.16zm14.56-16.13a63.23 63.23 0 0 1 2.4 6.28 67.22 67.22 0 0 1 -6.66 1.14c.75-1.2 1.49-2.41 2.19-3.64s1.41-2.51 2.07-3.78zm-4.71 2.26c-1.08 1.88-2.23 3.74-3.47 5.53-2.12.15-4.31.23-6.54.23s-4.35-.02-6.46-.21c-1.23-1.8-2.4-3.65-3.49-5.54s-2.11-3.8-3-5.75c.94-2 2-3.88 3-5.76 1.1-1.88 2.26-3.76 3.49-5.52 2.13-.16 4.31-.24 6.51-.24s4.39.08 6.52.24q1.81 2.7 3.44 5.5c1.09 1.88 2.11 3.79 3.08 5.73q-1.44 3-3.07 5.79zm6.29-34.09c2.4 1.38 3.33 7 1.82 14.24-.09.48-.2 1-.32 1.43a71 71 0 0 0 -9.55-1.51 71.11 71.11 0 0 0 -6-7.54c.54-.52 1.08-1 1.64-1.51 5.28-4.59 10.21-6.4 12.45-5.11z",fill:"#fff"}),n.createElement("path",{d:"m47.5 41.12a6.38 6.38 0 1 1 -6.38 6.38 6.38 6.38 0 0 1 6.38-6.38",fill:"#53c1de"})))}],url:"https://github.com/Vertexvis/vertex-web-sdk/tree/master/packages/viewer-react"},{title:n.createElement(n.Fragment,null,"Node API Client"),logos:[{source:n.createElement(n.Fragment,null,n.createElement("svg",{viewBox:"0 0 95 95",xmlns:"http://www.w3.org/2000/svg"},n.createElement("path",{d:"m47.6 82.55a5.67 5.67 0 0 1 -2.71-.71l-8.56-5.08c-1.29-.71-.64-1-.26-1.1a15.76 15.76 0 0 0 3.87-1.74.58.58 0 0 1 .64.07l6.57 3.92a.81.81 0 0 0 .77 0l25.69-14.91a.74.74 0 0 0 .39-.71v-29.65a.72.72 0 0 0 -.39-.7l-25.69-14.82a.81.81 0 0 0 -.77 0l-25.7 14.82a.8.8 0 0 0 -.38.7v29.69a.82.82 0 0 0 .38.71l7 4.06c3.8 1.93 6.18-.33 6.18-2.58v-29.3a.79.79 0 0 1 .78-.77h3.28a.78.78 0 0 1 .77.77v29.3c0 5.09-2.76 8-7.59 8-1.49 0-2.64 0-5.93-1.61l-6.74-3.81a5.44 5.44 0 0 1 -2.71-4.71v-29.68a5.42 5.42 0 0 1 2.71-4.71l25.69-14.87a5.76 5.76 0 0 1 5.41 0l25.7 14.87a5.43 5.43 0 0 1 2.7 4.7v29.69a5.45 5.45 0 0 1 -2.7 4.71l-25.7 14.9a6.49 6.49 0 0 1 -2.7.58zm7.92-20.41c-11.27 0-13.59-5.15-13.59-9.53a.78.78 0 0 1 .77-.78h3.35a.66.66 0 0 1 .71.65c.52 3.41 2 5.09 8.82 5.09 5.41 0 7.73-1.23 7.73-4.13 0-1.67-.64-2.89-9.08-3.73-7-.71-11.4-2.26-11.4-7.86 0-5.21 4.38-8.31 11.72-8.31 8.25 0 12.3 2.84 12.82 9a1.11 1.11 0 0 1 -.19.58.81.81 0 0 1 -.52.26h-3.35a.77.77 0 0 1 -.71-.58c-.77-3.54-2.77-4.7-8.05-4.7-5.92 0-6.63 2.06-6.63 3.6 0 1.87.84 2.45 8.82 3.48s11.66 2.51 11.66 8-4.7 8.89-12.88 8.89z",fill:"#539e43"})))}],url:"https://github.com/Vertexvis/vertex-api-client-node"},{title:n.createElement(n.Fragment,null,"Xamarin UI Components"),logos:[{source:n.createElement(n.Fragment,null,n.createElement("svg",{viewBox:"0 0 95 95",xmlns:"http://www.w3.org/2000/svg"},n.createElement("path",{d:"m32.15 15.21a5.77 5.77 0 0 0 -4.87 2.79l-15.35 26.69a5.81 5.81 0 0 0 0 5.63l15.35 26.68a5.78 5.78 0 0 0 4.87 2.82h30.7a5.78 5.78 0 0 0 4.87-2.82l15.35-26.68a5.81 5.81 0 0 0 0-5.63l-15.35-26.69a5.75 5.75 0 0 0 -4.87-2.81zm.28 15.6h5.42a.71.71 0 0 1 .58.34l9 16a.62.62 0 0 1 .09.26.79.79 0 0 1 .08-.26l9-16a.69.69 0 0 1 .6-.34h5.29a.72.72 0 0 1 .6 1l-8.82 15.69 8.73 15.67a.73.73 0 0 1 -.6 1h-5.25a.7.7 0 0 1 -.6-.37l-9-16a.79.79 0 0 1 -.08-.26.62.62 0 0 1 -.09.26l-9 16a.7.7 0 0 1 -.58.37h-5.24a.72.72 0 0 1 -.6-1l8.76-15.67-8.72-15.68a.72.72 0 0 1 .47-1z",fill:"#3498db"})))}],url:"https://github.com/Vertexvis/xamarin-viewer"}];function g(e){var t=e.title,a=e.logos,l=e.url;return n.createElement("div",{className:o()("sdk",m.Z.jumpDoc)},n.createElement("div",{className:o()(m.Z.cardContent,"sdk-card")},a.length&&a.map((function(e,t){return n.createElement("span",{className:o()(m.Z.sdkLogo),key:t},e.source)})),n.createElement("p",null,t),n.createElement(c.Z,{className:o()("sdk-button-link"),to:l})))}var h=[{title:n.createElement(n.Fragment,null,"Getting Started"),cta_links:[{text:n.createElement(n.Fragment,null,"Render your first scene"),url:"/docs/guides/render-your-first-scene"},{text:n.createElement(n.Fragment,null,"Import data with CLI"),url:"/docs/guides/import-data"},{text:n.createElement(n.Fragment,null,"Build your first application"),url:"/docs/guides/build-your-first-app"}]},{title:n.createElement(n.Fragment,null,"API Advanced Steps"),cta_links:[{text:n.createElement(n.Fragment,null,"Postman quick start"),url:"/docs/guides/postman-quick-start"},{text:n.createElement(n.Fragment,null,"Authentication"),url:"/docs/guides/authentication"},{text:n.createElement(n.Fragment,null,"Import data (API)"),url:"/docs/guides/import-data-with-api"},{text:n.createElement(n.Fragment,null,"Import metadata"),url:"/docs/guides/import-metadata"},{text:n.createElement(n.Fragment,null,"Render static scenes"),url:"/docs/guides/render-static-scenes"},{text:n.createElement(n.Fragment,null,"Webhook events"),url:"/docs/guides/webhook-events"}]},{title:n.createElement(n.Fragment,null,"Reference"),cta_links:[{text:n.createElement(n.Fragment,null,"Install Web UI Components"),url:"/docs/guides/install-sdk"},{text:n.createElement(n.Fragment,null,"Browser compatibility"),url:"/docs/guides/browser-compatibility"},{text:n.createElement(n.Fragment,null,"Supported file formats"),url:"/docs/guides/supported-file-formats"},{text:n.createElement(n.Fragment,null,"Platform architecture"),url:"/docs/guides/platform-architecture"},{text:n.createElement(n.Fragment,null,"3D model database"),url:"/docs/guides/model-database"},{text:n.createElement(n.Fragment,null,"Transformation matrices"),url:"/docs/guides/transformation-matrices"},{text:n.createElement(n.Fragment,null,"UI Component examples"),url:"https://github.com/Vertexvis/vertex-web-sdk/tree/master/examples"},{text:n.createElement(n.Fragment,null,"Glossary"),url:"/docs/guides/glossary"}]}];function E(e){var t=e.title,a=e.cta_links;return n.createElement("div",{className:o()("col",m.Z.guideCard)},n.createElement("div",{className:o()(m.Z.guideCardContent)},n.createElement("h2",null,t),n.createElement("div",{className:o()(m.Z.cardLinks)},a.length&&a.map((function(e,t){return n.createElement("p",{key:t},n.createElement(c.Z,{className:o()("gc-link non-button-link"),to:e.url},e.text))})))))}var f=[{title:n.createElement(n.Fragment,null,"3D Visual Analytics"),description:n.createElement(n.Fragment,null,"Quickly connect external data sources to your 3D digital twin to accelerate quality, cost, and supply chain analyses and deliver powerful insights with ease."),imageSrc:"/img/examples/visual analytics-card.png",url:"/examples/3d-visual-analytics",width:"col--6"},{title:n.createElement(n.Fragment,null,"Digital Twin"),description:n.createElement(n.Fragment,null,"Visualize IoT time series data aligned to your 3D digital twin to improve decision-making and increase the effectiveness of IoT analytics."),imageSrc:"/img/examples/digital-twin-card.png",url:"/examples/digital-twin",width:"col--6"}];function v(e){var t=e.title,a=e.description,l=e.imageSrc,r=e.url,s=e.width;return n.createElement("div",{className:o()("col",s,"feature-card",m.Z.featureCard)},n.createElement("div",{className:o()("feature-card-content",m.Z.featureCardContent)},n.createElement("div",{className:o()("header")},n.createElement("img",{src:l,alt:""})),n.createElement("div",{className:o()("content")},n.createElement("h2",null,t),n.createElement("div",{className:o()("intro")},n.createElement("span",null,a)),n.createElement(c.Z,{to:r,className:o()("target")}))))}t.default=function(){var e=(0,i.Z)().siteConfig,t=void 0===e?{}:e;return n.createElement(s.Z,{title:"Vertex Developer Portal",description:"Vertex platform APIs and SDKs unlock 3D product data to fuel fast and easy collaboration. Collaborate on complex designs with anyone, anytime, and from any device."},n.createElement("header",{className:o()("hero hero--primary home-hero",m.Z.heroBanner)},n.createElement("div",{className:o()("container")},n.createElement("div",{className:o()("row")},n.createElement("div",{className:o()("col col--8 col--offset-2")},n.createElement("div",{className:o()("home-hero-content")},n.createElement("h1",null,t.title),n.createElement("p",{className:o()("lead-in")},t.tagline),n.createElement("img",{src:"/img/tablet-preview.png",alt:"Platform Preview",className:o()("preview-hero")}))))),n.createElement("svg",{className:"angled",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100",preserveAspectRatio:"none"},n.createElement("polygon",{fill:"#FFF",points:"0,100 100,0 100,100"}))),n.createElement("main",null,n.createElement("div",{className:o()(m.Z.gettingStartedSection)},u&&u.length&&n.createElement("section",{className:o()("getting-started")},n.createElement("div",{className:o()("container")},n.createElement("div",{className:o()("row")},n.createElement("div",{className:o()("col col--12")},n.createElement("h2",{className:o()("secondary")},"Start building your application with our Getting Started guides")),u.map((function(e,t){return n.createElement(d,(0,l.Z)({key:t},e))})))))),n.createElement("div",{className:o()(m.Z.logoCallout,"logo-callout")},n.createElement("div",{className:o()("container")},n.createElement("div",{className:o()("row")},n.createElement("div",{className:o()("col col--9")},n.createElement("h2",{className:o()(m.Z.logoMark,m.Z.awsMark)},"Ready to add 3D experiences to your applications and workflows? Subscribe to the Vertex 3D Visualization Platform through the AWS Marketplace:"," ",n.createElement(c.Z,{to:"https://aws.amazon.com/marketplace/pp/B08PP264Z1"},"free for the first 100 rendering sessions!"))),n.createElement("div",{className:o()("col col--3 button-column")},n.createElement("p",null,n.createElement(c.Z,{to:"https://aws.amazon.com/marketplace/pp/B08PP264Z1",className:o()("button button--secondary",m.Z.callOutButton)},"Sign Up Now")))))),n.createElement("div",{className:o()(m.Z.sdkLogosSection)},p&&p.length&&n.createElement("section",{className:o()("getting-started-sdks")},n.createElement("div",{className:o()("container")},n.createElement("div",{className:o()("row")},n.createElement("div",{className:o()("col col--12")},n.createElement("h2",{className:o()("secondary")},"SDKs & Tools"),n.createElement("p",null,"The following tools are offered to simplify and accelerate the development of applications leveraging the Vertex platform.")))),n.createElement("div",{className:o()("container","sdk-logos")},n.createElement("div",{className:o()("row")},p.map((function(e,t){return n.createElement(g,(0,l.Z)({key:t},e))})))),n.createElement("div",{className:o()("container")},n.createElement("div",{className:o()("row")},n.createElement("div",{className:o()("col",m.Z.sdkFooter)},n.createElement(c.Z,{className:o()("non-button-link"),to:"/docs/sdks-and-tools"},"More SDKs & Tools")))))),h&&h.length&&n.createElement("div",{className:o()(m.Z.guideCardSection)},n.createElement("div",{className:o()("container")},n.createElement("div",{className:o()("row")},n.createElement("div",{className:o()("col col--12")},n.createElement("h2",{className:o()("secondary")},"Guides")),h.map((function(e,t){return n.createElement(E,(0,l.Z)({key:t},e))}))))),f&&f.length&&n.createElement("div",{className:o()(m.Z.sampleAppsSection,m.Z.mainGray)},n.createElement("div",{className:o()("container")},n.createElement("div",{className:o()("row")},n.createElement("div",{className:o()("col","col--12",m.Z.sampleAppsSectionHeader)},n.createElement("h2",{className:o()("secondary")},"Examples"),n.createElement("p",null,"We built the following example applications to give you ideas about how you can use Vertex.")),f.map((function(e,t){return n.createElement(v,(0,l.Z)({key:t},e))})),n.createElement("div",{className:o()("col","col--12")},n.createElement("p",null,n.createElement(c.Z,{to:"/examples",className:o()("non-button-link")},"More Examples"))))))),n.createElement("div",{className:o()("cta-block")},n.createElement("div",{className:o()("content")},n.createElement("div",{className:o()("container")},n.createElement("div",{className:o()("row")},n.createElement("div",{className:o()("col col--12")},n.createElement("h2",null,"Build Powerful Apps\xa0Fast"),n.createElement("p",null,"Ready to add 3D experiences to your applications and workflows? Subscribe for ",n.createElement("strong",null,"free")," to the Vertex 3D Visualization Platform through the AWS Marketplace."),n.createElement(c.Z,{className:o()("button button--primary",m.Z.getStarted),to:"https://aws.amazon.com/marketplace/pp/B08PP264Z1?stl=true"},"Sign Up Now"),n.createElement("img",{src:"/img/Powered-By_logo-horiz_RGB_WHT Copy.png",alt:"Powered by AWS",className:o()("logo-aws")})))))))}},6979:function(e,t,a){"use strict";var l=a(22122),n=a(19756),r=a(67294),o=a(73935),s=a(52263),c=a(5977),i=a(44996),m=a(36742),u=a(35742),d=a(6397),p=a(57052),g=a(16747),h=a(95613),E=a(24973),f=["contextualSearch"],v=null;function k(e){var t=e.hit,a=e.children;return r.createElement(m.Z,{to:t.url},a)}function w(e){var t=e.state,a=e.onClose,l=(0,d.Z)().generateSearchPageLink;return r.createElement(m.Z,{to:l(t.query),onClick:a},"See all ",t.context.nbHits," results")}function x(e){var t,m,d=e.contextualSearch,x=(0,n.Z)(e,f),C=(0,s.Z)().siteMetadata,y=(0,h.Z)(),b=null!=(t=null==(m=x.searchParameters)?void 0:m.facetFilters)?t:[],_=d?[].concat(y,b):b,N=Object.assign({},x.searchParameters,{facetFilters:_}),F=(0,i.C)().withBaseUrl,z=(0,c.k6)(),S=(0,r.useRef)(null),Z=(0,r.useRef)(null),P=(0,r.useState)(!1),I=P[0],L=P[1],B=(0,r.useState)(null),D=B[0],A=B[1],V=(0,r.useCallback)((function(){return v?Promise.resolve():Promise.all([a.e(3763).then(a.bind(a,83763)),Promise.all([a.e(532),a.e(6945)]).then(a.bind(a,46945)),Promise.all([a.e(532),a.e(9846)]).then(a.bind(a,9846))]).then((function(e){var t=e[0].DocSearchModal;v=t}))}),[]),M=(0,r.useCallback)((function(){V().then((function(){S.current=document.createElement("div"),document.body.insertBefore(S.current,document.body.firstChild),L(!0)}))}),[V,L]),T=(0,r.useCallback)((function(){L(!1),S.current.remove()}),[L]),H=(0,r.useCallback)((function(e){V().then((function(){L(!0),A(e.key)}))}),[V,L,A]),O=(0,r.useRef)({navigate:function(e){var t=e.itemUrl;z.push(t)}}).current,R=(0,r.useRef)((function(e){return e.map((function(e){var t=document.createElement("a");return t.href=e.url,Object.assign({},e,{url:F(""+t.pathname+t.hash)})}))})).current,G=(0,r.useMemo)((function(){return function(e){return r.createElement(w,(0,l.Z)({},e,{onClose:T}))}}),[T]),j=(0,r.useCallback)((function(e){return e.addAlgoliaAgent("docusaurus",C.docusaurusVersion),e}),[C.docusaurusVersion]);(0,p.D)({isOpen:I,onOpen:M,onClose:T,onInput:H,searchButtonRef:Z});var U=(0,E.I)({id:"theme.SearchBar.label",message:"Search Our Docs",description:"The ARIA label and placeholder for search button"});return r.createElement(r.Fragment,null,r.createElement(u.Z,null,r.createElement("link",{rel:"preconnect",href:"https://"+x.appId+"-dsn.algolia.net",crossOrigin:"anonymous"})),r.createElement(g.a,{onTouchStart:V,onFocus:V,onMouseOver:V,onClick:M,ref:Z,translations:{buttonText:U,buttonAriaLabel:U}}),I&&(0,o.createPortal)(r.createElement(v,(0,l.Z)({onClose:T,initialScrollY:window.scrollY,initialQuery:D,navigator:O,transformItems:R,hitComponent:k,resultsFooterComponent:G,transformSearchClient:j},x,{searchParameters:N})),S.current))}t.Z=function(){var e=(0,s.Z)().siteConfig;return r.createElement(x,e.themeConfig.algolia)}},94184:function(e,t){var a;!function(){"use strict";var l={}.hasOwnProperty;function n(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var r=typeof a;if("string"===r||"number"===r)e.push(a);else if(Array.isArray(a)){if(a.length){var o=n.apply(null,a);o&&e.push(o)}}else if("object"===r)if(a.toString===Object.prototype.toString)for(var s in a)l.call(a,s)&&a[s]&&e.push(s);else e.push(a.toString())}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(a=function(){return n}.apply(t,[]))||(e.exports=a)}()},99578:function(e,t){"use strict";t.Z={placeholder:"placeholder_2yF_",contactLegal:"contactLegal_1Y21",heroBanner:"heroBanner_3P7f",LPhero:"LPhero_3Lqs",lightHero:"lightHero_vjYe",containerLarge:"containerLarge_Yds5",sdks:"sdks_3RID",supportCardsIntro:"supportCardsIntro_1nZn",guides:"guides_PlFO",mainGray:"mainGray_3RkZ",logoCallout:"logoCallout_1Fyp",callOutButton:"callOutButton_-4dS",logoMark:"logoMark_2HkL",awsMark:"awsMark_BPXs",githubMark:"githubMark_sNsK",platformImage:"platformImage_1lVt",frame:"frame_1RrD",frameImg:"frameImg_17sw",buttons:"buttons_1r9m",sectionPadding:"sectionPadding_1KlB",textLeft:"textLeft_1sC-",textCenter:"textCenter_tG45",betaCalloutHeading:"betaCalloutHeading_1aNM",betaCalloutParagraph:"betaCalloutParagraph_10WT",normalParagraph:"normalParagraph_17t_",sdkLogosSection:"sdkLogosSection_BWw7",guideCardSection:"guideCardSection_1dD1",platformFAQSection:"platformFAQSection_ZNm_",sampleAppsSection:"sampleAppsSection_2cvt",sampleAppsSectionHeader:"sampleAppsSectionHeader_Y0n8",gettingStartedSection:"gettingStartedSection_10eO",gsGuideContent:"gsGuideContent_qikp",getStarted:"getStarted_1iQB",callouts:"callouts_2IQ9",useCaseHeader:"useCaseHeader_VTWZ",useCaseNav:"useCaseNav_1Iw1",useCase:"useCase_3kFD",useCases:"useCases_vjI9",callout:"callout_PB24",calloutInfo:"calloutInfo_2fCY",calloutImage:"calloutImage_2LI_",calloutContent:"calloutContent_10qz",calloutDescription:"calloutDescription_1js1",jumpDoc:"jumpDoc_cy4j",apiDocs:"apiDocs_3Y8J",cliDocs:"cliDocs_3ZuZ",cardContent:"cardContent_2FAo",sceneStudioFeatureContent:"sceneStudioFeatureContent_2hod",sceneStudioFeatureDescription:"sceneStudioFeatureDescription_2tPX",guideCardContent:"guideCardContent_2Pkt",sdkLogosContent:"sdkLogosContent_8RGv",sdkFooter:"sdkFooter_3CWp",logoLabel:"logoLabel_1fUk",sdkLogos:"sdkLogos_1Hay",sdkLogo:"sdkLogo_MV8J",sdkContent:"sdkContent_yf0x",guideCard:"guideCard_3Yym",sdkLinks:"sdkLinks_2bVm",cardLinks:"cardLinks_3h8T",cardLinksButton:"cardLinksButton_22VV",callOutCardLink:"callOutCardLink_31X-",sdkHero:"sdkHero_3Fi-",sdkMargin:"sdkMargin_XsY_",jumpDocTarget:"jumpDocTarget_1Sr5",exampleButtons:"exampleButtons_3rT4",useCaseContent:"useCaseContent_qNwf",useCaseHeading:"useCaseHeading_3Nqi",features:"features_3azU"}}}]);