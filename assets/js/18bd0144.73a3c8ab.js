/*! For license information please see 18bd0144.73a3c8ab.js.LICENSE.txt */
(self.webpackChunkdev_portal=self.webpackChunkdev_portal||[]).push([[3116,138],{50584:function(e,t,a){"use strict";a.r(t);var n=a(22122),r=a(67294),o=a(94184),l=a.n(o),s=a(71525),i=a(36742),c=a(52263),u=(a(44996),a(99578)),m=[{title:r.createElement(r.Fragment,null,"Digital Twin"),description:r.createElement(r.Fragment,null,"Visualize IoT time series data aligned to your 3D digital twin to improve decision-making and increase the effectiveness of IoT analytics."),url:"/examples/digital-twin",width:"col--4"},{title:r.createElement(r.Fragment,null,"3D Visual Analytics"),description:r.createElement(r.Fragment,null,"Quickly connect external data sources to your 3D digital twin to accelerate quality, cost, and supply chain analyses and deliver powerful insights with ease."),url:"/examples/3d-visual-analytics",width:"col--4"},{title:r.createElement(r.Fragment,null,"Scene Studio"),description:r.createElement(r.Fragment,null,"Scene Studio",r.createElement("sup",null,"\u2122")," gets 3D applications to colleagues and clients. It replaces traditional product documentation that is difficult to maintain and not easily accessible."),url:"/examples/scene-studio",width:"col--4"}];function d(e){var t=e.title,a=e.description,n=(e.imageSrc,e.url),o=e.width;return r.createElement("div",{className:l()("col",o,"feature-card",u.Z.featureCard)},r.createElement("div",{className:l()("feature-card-content",u.Z.featureCardContent)},r.createElement("div",{className:l()("content")},r.createElement("h2",null,t),r.createElement("div",{className:l()("intro")},r.createElement("div",null,a)),r.createElement(i.Z,{to:n,className:l()("target")}))))}t.default=function(){return(0,c.default)().siteConfig,r.createElement(s.Z,{title:"NextJS Starter | Vertex Developer Portal",description:"Quickly and easily build your own digital twin prototype application using the NextJS framework."},r.createElement("header",{className:l()(u.Z.LPhero,u.Z.lightHero)},r.createElement("div",{className:l()("container")},r.createElement("div",{className:l()("row")},r.createElement("div",{className:l()("col")},r.createElement("h1",null,"NextJS Starter"),r.createElement("p",null,"Use our starter application template using the NextJS framework.")),r.createElement("div",{className:l()("col","col--8","col--offset-2")},r.createElement("img",{src:"/img/examples/starter-app.png",alt:""})),r.createElement("div",{className:l()("col","col--8","col--offset-2",u.Z.textLeft)},r.createElement("h2",{className:l()(u.Z.betaCalloutHeading)},"What you can do with this application"),r.createElement("p",{className:l()(u.Z.normalParagraph)},"View a scene, apply camera states, and see a scene item's metadata. We built this application following best practices for integrating the Vertex platform."," ",r.createElement(i.Z,{to:"/docs/guides/build-your-first-app"},"Follow our guide")," ","to build a foundation, then add functionality to create your own prototype application using Vertex."),r.createElement("div",{className:l()(u.Z.textCenter)},r.createElement(i.Z,{to:"https://nextjs-starter.vertexvis.io",className:l()("button button--primary")},"Launch App")," ","\xa0",r.createElement(i.Z,{to:"https://github.com/Vertexvis/vertex-nextjs-starter",className:l()("button button--primary button--outline")},"View on Github")))))),r.createElement("main",null,r.createElement("div",{className:l()(u.Z.mainGray)},m&&m.length&&r.createElement("div",{className:l()(u.Z.sectionPadding,u.Z.textCenter)},r.createElement("div",{className:l()(u.Z.containerLarge)},r.createElement("h2",null,"Check out our other example apps"),r.createElement("div",{className:l()("row")},r.createElement("div",{className:l()("col col--10 col--offset-1")},r.createElement("div",{className:l()("row")},m.map((function(e,t){return r.createElement(d,(0,n.Z)({key:t},e))}))))))))),r.createElement("div",{className:l()("cta-block")},r.createElement("div",{className:l()("content")},r.createElement("div",{className:l()("container")},r.createElement("div",{className:l()("row")},r.createElement("div",{className:l()("col col--12")},r.createElement("h2",null,"Ready to get started?"),r.createElement("p",null,"Get in touch with one of our platform experts or subscribe for free to the Vertex 3D Visualization Platform through the AWS Marketplace."),r.createElement(i.Z,{className:l()("button button--primary",u.Z.getStarted),to:"https://aws.amazon.com/marketplace/pp/B08PP264Z1?stl=true"},"Sign Up Now")," ","\xa0",r.createElement(i.Z,{className:l()("button button--primary",u.Z.getStarted),to:"/examples/contact"},"Contact an Expert")))))))}},6979:function(e,t,a){"use strict";var n=a(22122),r=a(19756),o=a(67294),l=a(73935),s=a(52263),i=a(5977),c=a(44996),u=a(36742),m=a(35742),d=a(6397),p=a(57052),g=a(16747),f=a(95613),h=a(24973),C=["contextualSearch"],_=null;function k(e){var t=e.hit,a=e.children;return o.createElement(u.Z,{to:t.url},a)}function v(e){var t=e.state,a=e.onClose,n=(0,d.Z)().generateSearchPageLink;return o.createElement(u.Z,{to:n(t.query),onClick:a},"See all ",t.context.nbHits," results")}function E(e){var t,u,d=e.contextualSearch,E=(0,r.Z)(e,C),b=(0,s.default)().siteMetadata,S=(0,f.Z)(),y=null!=(t=null==(u=E.searchParameters)?void 0:u.facetFilters)?t:[],N=d?[].concat(S,y):y,w=Object.assign({},E.searchParameters,{facetFilters:N}),x=(0,c.C)().withBaseUrl,Z=(0,i.k6)(),L=(0,o.useRef)(null),P=(0,o.useRef)(null),D=(0,o.useState)(!1),F=D[0],I=D[1],B=(0,o.useState)(null),V=B[0],A=B[1],H=(0,o.useCallback)((function(){return _?Promise.resolve():Promise.all([a.e(3763).then(a.bind(a,83763)),Promise.all([a.e(532),a.e(6945)]).then(a.bind(a,46945)),Promise.all([a.e(532),a.e(9846)]).then(a.bind(a,9846))]).then((function(e){var t=e[0].DocSearchModal;_=t}))}),[]),j=(0,o.useCallback)((function(){H().then((function(){L.current=document.createElement("div"),document.body.insertBefore(L.current,document.body.firstChild),I(!0)}))}),[H,I]),M=(0,o.useCallback)((function(){I(!1),L.current.remove()}),[I]),O=(0,o.useCallback)((function(e){H().then((function(){I(!0),A(e.key)}))}),[H,I,A]),T=(0,o.useRef)({navigate:function(e){var t=e.itemUrl;Z.push(t)}}).current,R=(0,o.useRef)((function(e){return e.map((function(e){var t=document.createElement("a");return t.href=e.url,Object.assign({},e,{url:x(""+t.pathname+t.hash)})}))})).current,Y=(0,o.useMemo)((function(){return function(e){return o.createElement(v,(0,n.Z)({},e,{onClose:M}))}}),[M]),G=(0,o.useCallback)((function(e){return e.addAlgoliaAgent("docusaurus",b.docusaurusVersion),e}),[b.docusaurusVersion]);(0,p.D)({isOpen:F,onOpen:j,onClose:M,onInput:O,searchButtonRef:P});var q=(0,h.I)({id:"theme.SearchBar.label",message:"Search Our Docs",description:"The ARIA label and placeholder for search button"});return o.createElement(o.Fragment,null,o.createElement(m.Z,null,o.createElement("link",{rel:"preconnect",href:"https://"+E.appId+"-dsn.algolia.net",crossOrigin:"anonymous"})),o.createElement(g.a,{onTouchStart:H,onFocus:H,onMouseOver:H,onClick:j,ref:P,translations:{buttonText:q,buttonAriaLabel:q}}),F&&(0,l.createPortal)(o.createElement(_,(0,n.Z)({onClose:M,initialScrollY:window.scrollY,initialQuery:V,navigator:T,transformItems:R,hitComponent:k,resultsFooterComponent:Y,transformSearchClient:G},E,{searchParameters:w})),L.current))}t.Z=function(){var e=(0,s.default)().siteConfig;return o.createElement(E,e.themeConfig.algolia)}},94184:function(e,t){var a;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var o=typeof a;if("string"===o||"number"===o)e.push(a);else if(Array.isArray(a)){if(a.length){var l=r.apply(null,a);l&&e.push(l)}}else if("object"===o)if(a.toString===Object.prototype.toString)for(var s in a)n.call(a,s)&&a[s]&&e.push(s);else e.push(a.toString())}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(t,[]))||(e.exports=a)}()},99578:function(e,t){"use strict";t.Z={placeholder:"placeholder_2yF_",contactLegal:"contactLegal_1Y21",heroBanner:"heroBanner_3P7f",LPhero:"LPhero_3Lqs",lightHero:"lightHero_vjYe",containerLarge:"containerLarge_Yds5",sdks:"sdks_3RID",supportCardsIntro:"supportCardsIntro_1nZn",guides:"guides_PlFO",mainGray:"mainGray_3RkZ",logoCallout:"logoCallout_1Fyp",callOutButton:"callOutButton_-4dS",logoMark:"logoMark_2HkL",awsMark:"awsMark_BPXs",githubMark:"githubMark_sNsK",platformImage:"platformImage_1lVt",frame:"frame_1RrD",frameImg:"frameImg_17sw",buttons:"buttons_1r9m",sectionPadding:"sectionPadding_1KlB",textLeft:"textLeft_1sC-",textCenter:"textCenter_tG45",betaCalloutHeading:"betaCalloutHeading_1aNM",betaCalloutParagraph:"betaCalloutParagraph_10WT",normalParagraph:"normalParagraph_17t_",sdkLogosSection:"sdkLogosSection_BWw7",guideCardSection:"guideCardSection_1dD1",platformFAQSection:"platformFAQSection_ZNm_",sampleAppsSection:"sampleAppsSection_2cvt",sampleAppsSectionHeader:"sampleAppsSectionHeader_Y0n8",gettingStartedSection:"gettingStartedSection_10eO",gsGuideContent:"gsGuideContent_qikp",getStarted:"getStarted_1iQB",callouts:"callouts_2IQ9",useCaseHeader:"useCaseHeader_VTWZ",useCaseNav:"useCaseNav_1Iw1",useCase:"useCase_3kFD",useCases:"useCases_vjI9",callout:"callout_PB24",calloutInfo:"calloutInfo_2fCY",calloutImage:"calloutImage_2LI_",calloutContent:"calloutContent_10qz",calloutDescription:"calloutDescription_1js1",jumpDoc:"jumpDoc_cy4j",apiDocs:"apiDocs_3Y8J",cliDocs:"cliDocs_3ZuZ",cardContent:"cardContent_2FAo",sceneStudioFeatureContent:"sceneStudioFeatureContent_2hod",sceneStudioFeatureDescription:"sceneStudioFeatureDescription_2tPX",guideCardContent:"guideCardContent_2Pkt",sdkLogosContent:"sdkLogosContent_8RGv",sdkFooter:"sdkFooter_3CWp",logoLabel:"logoLabel_1fUk",sdkLogos:"sdkLogos_1Hay",sdkLogo:"sdkLogo_MV8J",sdkContent:"sdkContent_yf0x",guideCard:"guideCard_3Yym",sdkLinks:"sdkLinks_2bVm",cardLinks:"cardLinks_3h8T",cardLinksButton:"cardLinksButton_22VV",callOutCardLink:"callOutCardLink_31X-",sdkHero:"sdkHero_3Fi-",sdkMargin:"sdkMargin_XsY_",jumpDocTarget:"jumpDocTarget_1Sr5",exampleButtons:"exampleButtons_3rT4",useCaseContent:"useCaseContent_qNwf",useCaseHeading:"useCaseHeading_3Nqi",features:"features_3azU"}}}]);