/*! For license information please see 4a367eab.80987f5c.js.LICENSE.txt */
(self.webpackChunkdev_portal=self.webpackChunkdev_portal||[]).push([[5025,138],{42007:function(e,t,a){"use strict";a.r(t);var n=a(22122),r=a(67294),l=a(94184),o=a.n(l),s=a(71525),c=a(36742),i=a(52263),u=(a(44996),a(99578)),m=[{title:r.createElement(r.Fragment,null,"NextJS Starter"),description:r.createElement(r.Fragment,null,"We created our full stack, deployable starter application using the NextJS framework. Quickly and easily build your own prototype application that takes full advantage of the Vertex platform."),imageSrc:"/img/examples/starter-card.png",url:"/examples/nextjs",cta:"Try it Out",width:"col--4"},{title:r.createElement(r.Fragment,null,"Digital Twin"),description:r.createElement(r.Fragment,null,"Visualize IoT time series data aligned to your 3D digital twin to improve decision-making and increase the effectiveness of IoT analytics."),imageSrc:"/img/examples/digital-twin-card.png",url:"/examples/digital-twin",cta:"Try it Out",width:"col--4"},{title:r.createElement(r.Fragment,null,"3D Visual Analytics"),description:r.createElement(r.Fragment,null,"Quickly connect external data sources to your 3D digital twin to accelerate quality, cost, and supply chain analyses and deliver powerful insights with ease."),imageSrc:"/img/examples/visual analytics-card.png",url:"/examples/3d-visual-analytics",cta:"Try it Out",width:"col--4"}];function d(e){var t=e.title,a=e.description,n=e.imageSrc,l=e.url,s=e.cta,i=e.width;return r.createElement("div",{className:o()("col",i,"feature-card",u.Z.featureCard)},r.createElement("div",{className:o()("feature-card-content",u.Z.featureCardContent)},r.createElement("div",{className:o()("header")},r.createElement("img",{src:n,alt:""})),r.createElement("div",{className:o()("content")},r.createElement("h2",null,t),r.createElement("div",{className:o()("intro")},r.createElement("div",null,a),r.createElement("br",null),r.createElement("div",{className:o()("non-button-link")},s)),r.createElement(c.Z,{to:l,className:o()("target")}))))}t.default=function(){return(0,i.default)().siteConfig,r.createElement(s.Z,{title:"Example Applications | Vertex Developer Portal",description:"Example applications to help easily integrate 3D CAD data with data sources such as IoT, MES, data warehouses, and data lakes."},r.createElement("header",{className:o()(u.Z.LPhero,u.Z.lightHero)},r.createElement("div",{className:o()("container")},r.createElement("div",{className:o()("row")},r.createElement("div",{className:o()("col")},r.createElement("h1",null,"Example Applications"),r.createElement("p",null,"With the Vertex platform, non-3D developers can easily integrate 3D CAD data into their application with just a few lines of code. Get an idea of what you can do with these examples."))))),r.createElement("main",null,m&&m.length&&r.createElement("div",{className:o()(u.Z.sampleAppsSection)},r.createElement("div",{className:o()(u.Z.containerLarge)},r.createElement("div",{className:o()("row")},m.map((function(e,t){return r.createElement(d,(0,n.Z)({key:t},e))}))))),r.createElement("div",{className:o()(u.Z.sectionPadding,u.Z.mainGray)},r.createElement("div",{className:o()("container")},r.createElement("div",{className:o()("row")},r.createElement("div",{className:o()("col","col--4")},r.createElement("img",{src:"/img/scene-studio/ss-preview.png",alt:""})),r.createElement("div",{className:o()("col","col--8","betaCalloutContent")},r.createElement("span",{className:o()("tag-pill")},"Beta"),r.createElement("h2",{className:o()(u.Z.betaCalloutHeading)},"Easily Author 3D Content with Scene Studio",r.createElement("sup",null,"\u2122")),r.createElement("p",{className:o()(u.Z.betaCalloutParagraph)},"Scene Studio",r.createElement("sup",null,"\u2122")," gets 3D applications to colleagues and clients. It replaces traditional product documentation that is difficult to maintain and not easily accessible."),r.createElement("p",null,r.createElement(c.Z,{to:"/examples/scene-studio",className:o()("non-button-link")},"Learn more"))))))),r.createElement("div",{className:o()("cta-block")},r.createElement("div",{className:o()("content")},r.createElement("div",{className:o()("container")},r.createElement("div",{className:o()("row")},r.createElement("div",{className:o()("col col--12")},r.createElement("h2",null,"Ready to get started?"),r.createElement("p",null,"Get in touch with a platform expert or subscribe for free to the Vertex 3D Visualization Platform through the AWS Marketplace."),r.createElement(c.Z,{className:o()("button button--primary",u.Z.getStarted),to:"https://aws.amazon.com/marketplace/pp/B08PP264Z1?stl=true"},"Sign Up Now")," ","\xa0",r.createElement(c.Z,{className:o()("button button--primary",u.Z.getStarted),to:"/examples/contact"},"Contact an Expert")))))))}},6979:function(e,t,a){"use strict";var n=a(22122),r=a(19756),l=a(67294),o=a(73935),s=a(52263),c=a(5977),i=a(44996),u=a(36742),m=a(35742),d=a(6397),p=a(57052),g=a(16747),f=a(95613),h=a(24973),C=null;function _(e){var t=e.hit,a=e.children;return l.createElement(u.Z,{to:t.url},a)}function k(e){var t=e.state,a=e.onClose,n=(0,d.Z)().generateSearchPageLink;return l.createElement(u.Z,{to:n(t.query),onClick:a},"See all ",t.context.nbHits," results")}function E(e){var t,u,d=e.contextualSearch,E=(0,r.Z)(e,["contextualSearch"]),v=(0,s.default)().siteMetadata,S=(0,f.Z)(),b=null!=(t=null==(u=E.searchParameters)?void 0:u.facetFilters)?t:[],y=d?[].concat(S,b):b,w=Object.assign({},E.searchParameters,{facetFilters:y}),N=(0,i.C)().withBaseUrl,x=(0,c.k6)(),Z=(0,l.useRef)(null),L=(0,l.useRef)(null),D=(0,l.useState)(!1),P=D[0],F=D[1],I=(0,l.useState)(null),A=I[0],B=I[1],O=(0,l.useCallback)((function(){return C?Promise.resolve():Promise.all([a.e(3763).then(a.bind(a,83763)),Promise.all([a.e(532),a.e(6945)]).then(a.bind(a,46945)),Promise.all([a.e(532),a.e(9846)]).then(a.bind(a,9846))]).then((function(e){var t=e[0].DocSearchModal;C=t}))}),[]),H=(0,l.useCallback)((function(){O().then((function(){Z.current=document.createElement("div"),document.body.insertBefore(Z.current,document.body.firstChild),F(!0)}))}),[O,F]),M=(0,l.useCallback)((function(){F(!1),Z.current.remove()}),[F]),T=(0,l.useCallback)((function(e){O().then((function(){F(!0),B(e.key)}))}),[O,F,B]),j=(0,l.useRef)({navigate:function(e){var t=e.itemUrl;x.push(t)}}).current,V=(0,l.useRef)((function(e){return e.map((function(e){var t=document.createElement("a");return t.href=e.url,Object.assign({},e,{url:N(""+t.pathname+t.hash)})}))})).current,R=(0,l.useMemo)((function(){return function(e){return l.createElement(k,(0,n.Z)({},e,{onClose:M}))}}),[M]),Y=(0,l.useCallback)((function(e){return e.addAlgoliaAgent("docusaurus",v.docusaurusVersion),e}),[v.docusaurusVersion]);(0,p.D)({isOpen:P,onOpen:H,onClose:M,onInput:T,searchButtonRef:L});var G=(0,h.I)({id:"theme.SearchBar.label",message:"Search Our Docs",description:"The ARIA label and placeholder for search button"});return l.createElement(l.Fragment,null,l.createElement(m.Z,null,l.createElement("link",{rel:"preconnect",href:"https://"+E.appId+"-dsn.algolia.net",crossOrigin:"anonymous"})),l.createElement(g.a,{onTouchStart:O,onFocus:O,onMouseOver:O,onClick:H,ref:L,translations:{buttonText:G,buttonAriaLabel:G}}),P&&(0,o.createPortal)(l.createElement(C,(0,n.Z)({onClose:M,initialScrollY:window.scrollY,initialQuery:A,navigator:j,transformItems:V,hitComponent:_,resultsFooterComponent:R,transformSearchClient:Y},E,{searchParameters:w})),Z.current))}t.Z=function(){var e=(0,s.default)().siteConfig;return l.createElement(E,e.themeConfig.algolia)}},94184:function(e,t){var a;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var l=typeof a;if("string"===l||"number"===l)e.push(a);else if(Array.isArray(a)){if(a.length){var o=r.apply(null,a);o&&e.push(o)}}else if("object"===l)if(a.toString===Object.prototype.toString)for(var s in a)n.call(a,s)&&a[s]&&e.push(s);else e.push(a.toString())}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(t,[]))||(e.exports=a)}()},99578:function(e,t){"use strict";t.Z={placeholder:"placeholder_2yF_",contactLegal:"contactLegal_1Y21",heroBanner:"heroBanner_3P7f",LPhero:"LPhero_3Lqs",lightHero:"lightHero_vjYe",containerLarge:"containerLarge_Yds5",sdks:"sdks_3RID",supportCardsIntro:"supportCardsIntro_1nZn",guides:"guides_PlFO",mainGray:"mainGray_3RkZ",logoCallout:"logoCallout_1Fyp",callOutButton:"callOutButton_-4dS",logoMark:"logoMark_2HkL",awsMark:"awsMark_BPXs",githubMark:"githubMark_sNsK",platformImage:"platformImage_1lVt",frame:"frame_1RrD",frameImg:"frameImg_17sw",buttons:"buttons_1r9m",sectionPadding:"sectionPadding_1KlB",textLeft:"textLeft_1sC-",textCenter:"textCenter_tG45",betaCalloutHeading:"betaCalloutHeading_1aNM",betaCalloutParagraph:"betaCalloutParagraph_10WT",normalParagraph:"normalParagraph_17t_",sdkLogosSection:"sdkLogosSection_BWw7",guideCardSection:"guideCardSection_1dD1",platformFAQSection:"platformFAQSection_ZNm_",sampleAppsSection:"sampleAppsSection_2cvt",sampleAppsSectionHeader:"sampleAppsSectionHeader_Y0n8",gettingStartedSection:"gettingStartedSection_10eO",gsGuideContent:"gsGuideContent_qikp",getStarted:"getStarted_1iQB",callouts:"callouts_2IQ9",useCaseHeader:"useCaseHeader_VTWZ",useCaseNav:"useCaseNav_1Iw1",useCase:"useCase_3kFD",useCases:"useCases_vjI9",callout:"callout_PB24",calloutInfo:"calloutInfo_2fCY",calloutImage:"calloutImage_2LI_",calloutContent:"calloutContent_10qz",calloutDescription:"calloutDescription_1js1",jumpDoc:"jumpDoc_cy4j",apiDocs:"apiDocs_3Y8J",cliDocs:"cliDocs_3ZuZ",cardContent:"cardContent_2FAo",sceneStudioFeatureContent:"sceneStudioFeatureContent_2hod",sceneStudioFeatureDescription:"sceneStudioFeatureDescription_2tPX",guideCardContent:"guideCardContent_2Pkt",sdkLogosContent:"sdkLogosContent_8RGv",sdkFooter:"sdkFooter_3CWp",logoLabel:"logoLabel_1fUk",sdkLogos:"sdkLogos_1Hay",sdkLogo:"sdkLogo_MV8J",sdkContent:"sdkContent_yf0x",guideCard:"guideCard_3Yym",sdkLinks:"sdkLinks_2bVm",cardLinks:"cardLinks_3h8T",cardLinksButton:"cardLinksButton_22VV",callOutCardLink:"callOutCardLink_31X-",sdkHero:"sdkHero_3Fi-",sdkMargin:"sdkMargin_XsY_",jumpDocTarget:"jumpDocTarget_1Sr5",exampleButtons:"exampleButtons_3rT4",useCaseContent:"useCaseContent_qNwf",useCaseHeading:"useCaseHeading_3Nqi",features:"features_3azU"}}}]);