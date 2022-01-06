/*! For license information please see c6d43249.f6966d75.js.LICENSE.txt */
(self.webpackChunkdev_portal=self.webpackChunkdev_portal||[]).push([[4976,9514,138],{6823:function(e,t,a){"use strict";a.d(t,{d:function(){return i}});var n=a(4184),r=a.n(n),o=a(6742),l=a(7294),s=a(9578);function i(){return l.createElement("div",{className:r()("col col--12")},l.createElement("h2",null,"Ready to get started?"),l.createElement("p",null,"Get in touch with a platform expert or sign up to the Vertex 3D Visualization Platform:"," ",l.createElement("strong",null,"free for the first 100 rendering sessions.")),l.createElement(o.Z,{className:r()("button button--primary",s.Z.getStarted),to:"/examples/contact"},"Contact an Expert"),"\xa0",l.createElement(o.Z,{className:r()("button button--primary",s.Z.getStarted),to:"https://account.vertexvis.com/signup"},"Sign Up Now")," ")}},7979:function(e,t,a){"use strict";a.r(t);var n=a(7462),r=a(7294),o=a(4184),l=a.n(o),s=a(3516),i=a(6742),c=a(9578),u=a(6823),m=[{title:r.createElement(r.Fragment,null,"Digital Twin"),description:r.createElement(r.Fragment,null,"Visualize IoT time series data aligned to your 3D digital twin to improve decision-making and increase the effectiveness of IoT analytics."),url:"/examples/digital-twin",width:"col--4"},{title:r.createElement(r.Fragment,null,"3D Visual Analytics"),description:r.createElement(r.Fragment,null,"Quickly connect external data sources to your 3D digital twin to accelerate quality, cost, and supply chain analyses and deliver powerful insights with ease."),url:"/examples/3d-visual-analytics",width:"col--4"},{title:r.createElement(r.Fragment,null,"NextJS Starter"),description:r.createElement(r.Fragment,null,"We created our full stack, deployable starter application using the NextJS framework. Quickly and easily build your own prototype application that takes full advantage of the Vertex platform."),url:"/examples/nextjs",width:"col--4"}];function d(e){var t=e.title,a=e.description,n=e.url,o=e.width;return r.createElement("div",{className:l()("col",o,"feature-card",c.Z.featureCard)},r.createElement("div",{className:l()("feature-card-content",c.Z.featureCardContent)},r.createElement("div",{className:l()("content")},r.createElement("h2",null,t),r.createElement("div",{className:l()("intro")},r.createElement("div",null,a)),r.createElement(i.Z,{to:n,className:l()("target")}))))}t.default=function(){return r.createElement(s.Z,{title:"3D Work Instructions | Vertex Developer Portal",description:"Example of how to connect 3D digital twins to your existing processes and workflows."},r.createElement("header",{className:l()(c.Z.LPhero,c.Z.lightHero)},r.createElement("div",{className:l()("container")},r.createElement("div",{className:l()("row")},r.createElement("div",{className:l()("col")},r.createElement("h1",null,"3D Work Instructions"),r.createElement("p",null,"Bring clarity to your processes by connecting 3D digital twins to your work instructions.")),r.createElement("div",{className:l()("col","col--8","col--offset-2")},r.createElement("img",{src:"/img/examples/work-instructions.png",alt:""})),r.createElement("div",{className:l()("col","col--8","col--offset-2",c.Z.textLeft)},r.createElement("h2",{className:l()(c.Z.betaCalloutHeading)},"What you can do with this application"),r.createElement("p",{className:l()(c.Z.normalParagraph)},"Visualize your data in context by building a fully interactive 3D digital twin for your work instructions. Create a sequence of steps that includes dynamic 3D snapshots of the required parts along with written instructions. Choose if you want to ghost model geometry that's not part of the active step or hide it completely. You can also connect your issue-tracking tool to report issues and enter feature requests."),r.createElement("div",{className:l()(c.Z.textCenter)},r.createElement(i.Z,{to:"https://work-instructions.vertexvis.io/",className:l()("button button--primary")},"Launch App")," ","\xa0",r.createElement(i.Z,{to:"https://github.com/Vertexvis/work-instructions-demo",className:l()("button button--primary button--outline")},"View on Github")))))),r.createElement("main",null,r.createElement("div",{className:l()(c.Z.mainGray)},m&&m.length&&r.createElement("div",{className:l()(c.Z.sectionPadding,c.Z.textCenter)},r.createElement("div",{className:l()(c.Z.containerLarge)},r.createElement("h2",null,"Check out our other example apps"),r.createElement("div",{className:l()("row")},r.createElement("div",{className:l()("col col--10 col--offset-1")},r.createElement("div",{className:l()("row")},m.map((function(e,t){return r.createElement(d,(0,n.Z)({key:t},e))}))))))))),r.createElement("div",{className:l()("cta-block")},r.createElement("div",{className:l()("content")},r.createElement("div",{className:l()("container")},r.createElement("div",{className:l()("row")},r.createElement(u.d,null))))))}},6979:function(e,t,a){"use strict";var n=a(7462),r=a(3366),o=a(7294),l=a(3935),s=a(2263),i=a(5977),c=a(4996),u=a(6742),m=a(5742),d=a(6397),p=a(7052),g=a(6747),f=a(5613),h=a(4973),C=["contextualSearch"],k=null;function _(e){var t=e.hit,a=e.children;return o.createElement(u.Z,{to:t.url},a)}function v(e){var t=e.state,a=e.onClose,n=(0,d.Z)().generateSearchPageLink;return o.createElement(u.Z,{to:n(t.query),onClick:a},"See all ",t.context.nbHits," results")}function E(e){var t,u,d=e.contextualSearch,E=(0,r.Z)(e,C),y=(0,s.Z)().siteMetadata,b=(0,f.Z)(),w=null!=(t=null==(u=E.searchParameters)?void 0:u.facetFilters)?t:[],N=d?[].concat(b,w):w,S=Object.assign({},E.searchParameters,{facetFilters:N}),Z=(0,c.C)().withBaseUrl,x=(0,i.k6)(),L=(0,o.useRef)(null),D=(0,o.useRef)(null),P=(0,o.useState)(!1),I=P[0],F=P[1],B=(0,o.useState)(null),H=B[0],V=B[1],A=(0,o.useCallback)((function(){return k?Promise.resolve():Promise.all([a.e(4300).then(a.bind(a,4300)),Promise.all([a.e(532),a.e(6945)]).then(a.bind(a,6945)),Promise.all([a.e(532),a.e(9846)]).then(a.bind(a,9846))]).then((function(e){var t=e[0].DocSearchModal;k=t}))}),[]),O=(0,o.useCallback)((function(){A().then((function(){L.current=document.createElement("div"),document.body.insertBefore(L.current,document.body.firstChild),F(!0)}))}),[A,F]),j=(0,o.useCallback)((function(){F(!1),L.current.remove()}),[F]),M=(0,o.useCallback)((function(e){A().then((function(){F(!0),V(e.key)}))}),[A,F,V]),T=(0,o.useRef)({navigate:function(e){var t=e.itemUrl;x.push(t)}}).current,R=(0,o.useRef)((function(e){return e.map((function(e){var t=document.createElement("a");return t.href=e.url,Object.assign({},e,{url:Z(""+t.pathname+t.hash)})}))})).current,Y=(0,o.useMemo)((function(){return function(e){return o.createElement(v,(0,n.Z)({},e,{onClose:j}))}}),[j]),q=(0,o.useCallback)((function(e){return e.addAlgoliaAgent("docusaurus",y.docusaurusVersion),e}),[y.docusaurusVersion]);(0,p.D)({isOpen:I,onOpen:O,onClose:j,onInput:M,searchButtonRef:D});var G=(0,h.I)({id:"theme.SearchBar.label",message:"Search Our Docs",description:"The ARIA label and placeholder for search button"});return o.createElement(o.Fragment,null,o.createElement(m.Z,null,o.createElement("link",{rel:"preconnect",href:"https://"+E.appId+"-dsn.algolia.net",crossOrigin:"anonymous"})),o.createElement(g.a,{onTouchStart:A,onFocus:A,onMouseOver:A,onClick:O,ref:D,translations:{buttonText:G,buttonAriaLabel:G}}),I&&(0,l.createPortal)(o.createElement(k,(0,n.Z)({onClose:j,initialScrollY:window.scrollY,initialQuery:H,navigator:T,transformItems:R,hitComponent:_,resultsFooterComponent:Y,transformSearchClient:q},E,{searchParameters:S})),L.current))}t.Z=function(){var e=(0,s.Z)().siteConfig;return o.createElement(E,e.themeConfig.algolia)}},4184:function(e,t){var a;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var o=typeof a;if("string"===o||"number"===o)e.push(a);else if(Array.isArray(a)){if(a.length){var l=r.apply(null,a);l&&e.push(l)}}else if("object"===o)if(a.toString===Object.prototype.toString)for(var s in a)n.call(a,s)&&a[s]&&e.push(s);else e.push(a.toString())}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(t,[]))||(e.exports=a)}()},9578:function(e,t){"use strict";t.Z={placeholder:"placeholder_2yF_",contactLegal:"contactLegal_1Y21",heroBanner:"heroBanner_3P7f",LPhero:"LPhero_3Lqs",lightHero:"lightHero_vjYe",containerLarge:"containerLarge_Yds5",sdks:"sdks_3RID",supportCardsIntro:"supportCardsIntro_1nZn",guides:"guides_PlFO",mainGray:"mainGray_3RkZ",logoCallout:"logoCallout_1Fyp",callOutButton:"callOutButton_-4dS",logoMark:"logoMark_2HkL",awsMark:"awsMark_BPXs",githubMark:"githubMark_sNsK",platformImage:"platformImage_1lVt",frame:"frame_1RrD",frameImg:"frameImg_17sw",buttons:"buttons_1r9m",sectionPadding:"sectionPadding_1KlB",textLeft:"textLeft_1sC-",textCenter:"textCenter_tG45",betaCalloutHeading:"betaCalloutHeading_1aNM",betaCalloutParagraph:"betaCalloutParagraph_10WT",normalParagraph:"normalParagraph_17t_",sdkLogosSection:"sdkLogosSection_BWw7",guideCardSection:"guideCardSection_1dD1",platformFAQSection:"platformFAQSection_ZNm_",sampleAppsSection:"sampleAppsSection_2cvt",sampleAppsSectionHeader:"sampleAppsSectionHeader_Y0n8",gettingStartedSection:"gettingStartedSection_10eO",gsGuideContent:"gsGuideContent_qikp",getStarted:"getStarted_1iQB",callouts:"callouts_2IQ9",useCaseHeader:"useCaseHeader_VTWZ",useCaseNav:"useCaseNav_1Iw1",useCase:"useCase_3kFD",useCases:"useCases_vjI9",callout:"callout_PB24",calloutInfo:"calloutInfo_2fCY",calloutImage:"calloutImage_2LI_",calloutContent:"calloutContent_10qz",calloutDescription:"calloutDescription_1js1",jumpDoc:"jumpDoc_cy4j",apiDocs:"apiDocs_3Y8J",cliDocs:"cliDocs_3ZuZ",cardContent:"cardContent_2FAo",guideCardContent:"guideCardContent_2Pkt",sdkLogosContent:"sdkLogosContent_8RGv",sdkFooter:"sdkFooter_3CWp",logoLabel:"logoLabel_1fUk",sdkLogos:"sdkLogos_1Hay",sdkLogo:"sdkLogo_MV8J",sdkContent:"sdkContent_yf0x",guideCard:"guideCard_3Yym",sdkLinks:"sdkLinks_2bVm",cardLinks:"cardLinks_3h8T",cardLinksButton:"cardLinksButton_22VV",callOutCardLink:"callOutCardLink_31X-",sdkHero:"sdkHero_3Fi-",sdkMargin:"sdkMargin_XsY_",jumpDocTarget:"jumpDocTarget_1Sr5",exampleButtons:"exampleButtons_3rT4",useCaseContent:"useCaseContent_qNwf",useCaseHeading:"useCaseHeading_3Nqi",features:"features_3azU"}}}]);