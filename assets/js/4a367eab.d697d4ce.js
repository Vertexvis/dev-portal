/*! For license information please see 4a367eab.d697d4ce.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[21,16,50],{143:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function l(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var r=typeof n;if("string"===r||"number"===r)e.push(n);else if(Array.isArray(n)){if(n.length){var c=l.apply(null,n);c&&e.push(c)}}else if("object"===r)if(n.toString===Object.prototype.toString)for(var i in n)a.call(n,i)&&n[i]&&e.push(i);else e.push(n.toString())}}return e.join(" ")}e.exports?(l.default=l,e.exports=l):void 0===(n=function(){return l}.apply(t,[]))||(e.exports=n)}()},144:function(e,t,a){"use strict";var n=a(3),l=a(7),r=a(0),c=a.n(r),i=a(24),o=a(16),s=a(22),u=a(134),m=a(133),d=a(23),p=a(145),h=a(610),f=a(612),g=a(151),b=a(135),E=null;function v(e){var t=e.hit,a=e.children;return c.a.createElement(m.a,{to:t.url},a)}function y(e){var t=e.state,a=e.onClose,n=Object(p.a)().generateSearchPageLink;return c.a.createElement(m.a,{to:n(t.query),onClick:a},"See all ",t.context.nbHits," results")}function w(e){var t,m,p=e.contextualSearch,w=Object(l.a)(e,["contextualSearch"]),O=Object(o.default)().siteMetadata,j=Object(g.a)(),N=null!==(t=null===(m=w.searchParameters)||void 0===m?void 0:m.facetFilters)&&void 0!==t?t:[],S=p?[].concat(j,N):N,x=Object.assign({},w.searchParameters,{facetFilters:S}),C=Object(u.b)().withBaseUrl,k=Object(s.useHistory)(),P=Object(r.useRef)(null),A=Object(r.useRef)(null),D=Object(r.useState)(!1),F=D[0],T=D[1],V=Object(r.useState)(null),I=V[0],R=V[1],B=Object(r.useCallback)((function(){return E?Promise.resolve():Promise.all([a.e(59).then(a.bind(null,150)),Promise.all([a.e(0),a.e(60)]).then(a.bind(null,149)),a.e(0).then(a.t.bind(null,56,7))]).then((function(e){var t=e[0].DocSearchModal;E=t}))}),[]),M=Object(r.useCallback)((function(){B().then((function(){P.current=document.createElement("div"),document.body.insertBefore(P.current,document.body.firstChild),T(!0)}))}),[B,T]),L=Object(r.useCallback)((function(){T(!1),P.current.remove()}),[T]),H=Object(r.useCallback)((function(e){B().then((function(){T(!0),R(e.key)}))}),[B,T,R]),J=Object(r.useRef)({navigate:function(e){var t=e.itemUrl;k.push(t)}}).current,z=Object(r.useRef)((function(e){return e.map((function(e){var t=document.createElement("a");return t.href=e.url,Object.assign({},e,{url:C(""+t.pathname+t.hash)})}))})).current,G=Object(r.useMemo)((function(){return function(e){return c.a.createElement(y,Object(n.a)({},e,{onClose:L}))}}),[L]),Q=Object(r.useCallback)((function(e){return e.addAlgoliaAgent("docusaurus",O.docusaurusVersion),e}),[O.docusaurusVersion]);Object(h.a)({isOpen:F,onOpen:M,onClose:L,onInput:H,searchButtonRef:A});var U=Object(b.b)({id:"theme.SearchBar.label",message:"Search Our Docs",description:"The ARIA label and placeholder for search button"});return c.a.createElement(c.a.Fragment,null,c.a.createElement(d.a,null,c.a.createElement("link",{rel:"preconnect",href:"https://"+w.appId+"-dsn.algolia.net",crossOrigin:"anonymous"})),c.a.createElement(f.a,{onTouchStart:B,onFocus:B,onMouseOver:B,onClick:M,ref:A,translations:{buttonText:U,buttonAriaLabel:U}}),F&&Object(i.createPortal)(c.a.createElement(E,Object(n.a)({onClose:L,initialScrollY:window.scrollY,initialQuery:I,navigator:J,transformItems:z,hitComponent:v,resultsFooterComponent:G,transformSearchClient:Q},w,{searchParameters:x})),P.current))}t.a=function(){var e=Object(o.default)().siteConfig;return c.a.createElement(w,e.themeConfig.algolia)}},93:function(e,t,a){"use strict";a.r(t);var n=a(3),l=a(0),r=a.n(l),c=a(143),i=a.n(c),o=a(147),s=a(133),u=a(16),m=(a(134),a(58)),d=a.n(m),p=[{title:r.a.createElement(r.a.Fragment,null,"NextJS Starter"),description:r.a.createElement(r.a.Fragment,null,"We created our full stack, deployable starter application using the NextJS framework. Quickly and easily build your own prototype application that takes full advantage of the Vertex platform."),imageSrc:"/img/examples/starter-card.png",url:"/examples/nextjs",cta:"Try it Out",width:"col--4"},{title:r.a.createElement(r.a.Fragment,null,"Digital Twin"),description:r.a.createElement(r.a.Fragment,null,"Visualize IoT time series data aligned to your 3D digital twin to improve decision-making and increase the effectiveness of IoT analytics."),imageSrc:"/img/examples/digital-twin-card.png",url:"/examples/digital-twin",cta:"Try it Out",width:"col--4"},{title:r.a.createElement(r.a.Fragment,null,"3D Visual Analytics"),description:r.a.createElement(r.a.Fragment,null,"Quickly connect external data sources to your 3D digital twin to accelerate quality, cost, and supply chain analyses and deliver powerful insights with ease."),imageSrc:"/img/examples/visual analytics-card.png",url:"/examples/3d-visual-analytics",cta:"Try it Out",width:"col--4"}];function h(e){var t=e.title,a=e.description,n=e.imageSrc,l=e.url,c=e.cta,o=e.width;return r.a.createElement("div",{className:i()("col",o,"feature-card",d.a.featureCard)},r.a.createElement("div",{className:i()("feature-card-content",d.a.featureCardContent)},r.a.createElement("div",{className:i()("header")},r.a.createElement("img",{src:n,alt:""})),r.a.createElement("div",{className:i()("content")},r.a.createElement("h2",null,t),r.a.createElement("div",{className:i()("intro")},r.a.createElement("div",null,a),r.a.createElement("br",null),r.a.createElement("div",{className:i()("non-button-link")},c)),r.a.createElement(s.a,{to:l,className:i()("target")}))))}t.default=function(){return Object(u.default)().siteConfig,r.a.createElement(o.a,{title:"Example Applications | Vertex Developer Portal",description:"Example applications to help easily integrate 3D CAD data with data sources such as IoT, MES, data warehouses, and data lakes."},r.a.createElement("header",{className:i()(d.a.LPhero,d.a.lightHero)},r.a.createElement("div",{className:i()("container")},r.a.createElement("div",{className:i()("row")},r.a.createElement("div",{className:i()("col")},r.a.createElement("h1",null,"Example Applications"),r.a.createElement("p",null,"With the Vertex platform, non-3D developers can easily integrate 3D CAD data into their application with just a few lines of code. Get an idea of what you can do with these examples."))))),r.a.createElement("main",null,p&&p.length&&r.a.createElement("div",{className:i()(d.a.sampleAppsSection)},r.a.createElement("div",{className:i()(d.a.containerLarge)},r.a.createElement("div",{className:i()("row")},p.map((function(e,t){return r.a.createElement(h,Object(n.a)({key:t},e))}))))),r.a.createElement("div",{className:i()(d.a.sectionPadding,d.a.mainGray)},r.a.createElement("div",{className:i()("container")},r.a.createElement("div",{className:i()("row")},r.a.createElement("div",{className:i()("col","col--4")},r.a.createElement("img",{src:"/img/scene-studio/ss-preview.png",alt:""})),r.a.createElement("div",{className:i()("col","col--8","betaCalloutContent")},r.a.createElement("span",{className:i()("tag-pill")},"Beta"),r.a.createElement("h2",{className:i()(d.a.betaCalloutHeading)},"Easily Author 3D Content with Scene Studio",r.a.createElement("sup",null,"\u2122")),r.a.createElement("p",{className:i()(d.a.betaCalloutParagraph)},"Scene Studio",r.a.createElement("sup",null,"\u2122")," gets 3D applications to colleagues and clients. It replaces traditional product documentation that is difficult to maintain and not easily accessible."),r.a.createElement("p",null,r.a.createElement(s.a,{to:"/examples/scene-studio",className:i()("non-button-link")},"Learn more"))))))),r.a.createElement("div",{className:i()("cta-block")},r.a.createElement("div",{className:i()("content")},r.a.createElement("div",{className:i()("container")},r.a.createElement("div",{className:i()("row")},r.a.createElement("div",{className:i()("col col--12")},r.a.createElement("h2",null,"Ready to get started?"),r.a.createElement("p",null,"Get in touch with a platform expert or subscribe for free to the Vertex 3D Visualization Platform through the AWS Marketplace."),r.a.createElement(s.a,{className:i()("button button--primary",d.a.getStarted),to:"https://aws.amazon.com/marketplace/pp/B08PP264Z1?stl=true"},"Sign Up Now")," ","\xa0",r.a.createElement(s.a,{className:i()("button button--primary",d.a.getStarted),to:"/examples/contact"},"Contact an Expert")))))))}}}]);