/*! For license information please see 83e9e333.674f5a08.js.LICENSE.txt */
(self.webpackChunkdev_portal=self.webpackChunkdev_portal||[]).push([[1779,9514,138],{9154:function(e,t,n){"use strict";var r=n(1721),o=n(7294),a=n(4593),l=function(e){function t(){return e.apply(this,arguments)||this}return(0,r.Z)(t,e),t.prototype.render=function(){return o.createElement(a.q,null,o.createElement("script",{src:"/js/WrapSelect.js"}))},t}(o.Component);t.Z=l},1016:function(e,t,n){"use strict";n.r(t);var r=n(7294),o=n(4184),a=n.n(o),l=n(7967),s=n.n(l),i=n(9154),c=n(3516),u=n(6742),d=n(9578);t.default=function(){return r.createElement(c.Z,{title:"Contact a Specialist | Vertex Developer Portal",description:"Vertex platform APIs and SDKs unlock 3D product data to fuel fast and easy collaboration. Collaborate on complex designs with anyone, anytime, and from any device."},r.createElement("header",{className:a()(d.Z.LPhero,d.Z.lightHero)},r.createElement("div",{className:a()("container")},r.createElement("div",{className:a()("row")},r.createElement("div",{className:a()("col")},r.createElement("h1",null,"Contact a Specialist"),r.createElement("p",null,"Please complete the form below or email our team at any time at"," ",r.createElement(u.Z,{to:"mailto:support@vertexvis.com"},"support@vertexvis.com"),"."))))),r.createElement("main",null,r.createElement("div",{className:a()(d.Z.contactSpecialist)},r.createElement("div",{className:a()("container")},r.createElement("div",{className:a()("row")},r.createElement("div",{className:a()("col col--10 col--offset-1")},r.createElement("div",{className:a()("row form-wrapper")},r.createElement("div",{className:a()("col col--7 contact-form")},r.createElement(s(),{portalId:"8780919",formId:"415c36a7-dbae-4dfb-bf40-9db22e7875f1",onSubmit:function(){return console.log("submit!")},onReady:function(){return window.js_selects()},loading:r.createElement("div",null,"Loading...")}),r.createElement("div",{className:a()(d.Z.contactLegal)},r.createElement("p",null,"By submitting this form, you agree your contact information may be used by us to communicate with you about your registration, related products and services, and offers from select partners. Refer to our"," ",r.createElement(u.Z,{to:"https://vertexvis.com/privacy-policy"},"Privacy Policy")," ","and"," ",r.createElement(u.Z,{to:"https://vertexvis.com/terms-of-use"},"Terms of Use")," ","for additional information."))),r.createElement("div",{className:a()("col col--5 contact-content")},r.createElement("p",null,"We're committed to offering you help with your integrations and questions about the Vertex platform."),r.createElement("p",null,"Our Customer Support team is available Monday through Friday from 7 a.m. - 7 p.m. CST/CDT (excluding major U.S. holidays).")))))))),r.createElement(i.Z,null))}},6979:function(e,t,n){"use strict";var r=n(7462),o=n(3366),a=n(7294),l=n(3935),s=n(2263),i=n(5977),c=n(4996),u=n(6742),d=n(5742),m=n(6397),f=n(7052),p=n(6747),h=n(5613),g=n(4973),v=["contextualSearch"],_=null;function b(e){var t=e.hit,n=e.children;return a.createElement(u.Z,{to:t.url},n)}function C(e){var t=e.state,n=e.onClose,r=(0,m.Z)().generateSearchPageLink;return a.createElement(u.Z,{to:r(t.query),onClick:n},"See all ",t.context.nbHits," results")}function y(e){var t,u,m=e.contextualSearch,y=(0,o.Z)(e,v),k=(0,s.Z)().siteMetadata,S=(0,h.Z)(),E=null!=(t=null==(u=y.searchParameters)?void 0:u.facetFilters)?t:[],w=m?[].concat(S,E):E,P=Object.assign({},y.searchParameters,{facetFilters:w}),L=(0,c.C)().withBaseUrl,F=(0,i.k6)(),Z=(0,a.useRef)(null),j=(0,a.useRef)(null),O=(0,a.useState)(!1),x=O[0],I=O[1],D=(0,a.useState)(null),N=D[0],B=D[1],M=(0,a.useCallback)((function(){return _?Promise.resolve():Promise.all([n.e(4300).then(n.bind(n,4300)),Promise.all([n.e(532),n.e(6945)]).then(n.bind(n,6945)),Promise.all([n.e(532),n.e(9846)]).then(n.bind(n,9846))]).then((function(e){var t=e[0].DocSearchModal;_=t}))}),[]),A=(0,a.useCallback)((function(){M().then((function(){Z.current=document.createElement("div"),document.body.insertBefore(Z.current,document.body.firstChild),I(!0)}))}),[M,I]),H=(0,a.useCallback)((function(){I(!1),Z.current.remove()}),[I]),R=(0,a.useCallback)((function(e){M().then((function(){I(!0),B(e.key)}))}),[M,I,B]),T=(0,a.useRef)({navigate:function(e){var t=e.itemUrl;F.push(t)}}).current,V=(0,a.useRef)((function(e){return e.map((function(e){var t=document.createElement("a");return t.href=e.url,Object.assign({},e,{url:L(""+t.pathname+t.hash)})}))})).current,Y=(0,a.useMemo)((function(){return function(e){return a.createElement(C,(0,r.Z)({},e,{onClose:H}))}}),[H]),q=(0,a.useCallback)((function(e){return e.addAlgoliaAgent("docusaurus",k.docusaurusVersion),e}),[k.docusaurusVersion]);(0,f.D)({isOpen:x,onOpen:A,onClose:H,onInput:R,searchButtonRef:j});var U=(0,g.I)({id:"theme.SearchBar.label",message:"Search Our Docs",description:"The ARIA label and placeholder for search button"});return a.createElement(a.Fragment,null,a.createElement(d.Z,null,a.createElement("link",{rel:"preconnect",href:"https://"+y.appId+"-dsn.algolia.net",crossOrigin:"anonymous"})),a.createElement(p.a,{onTouchStart:M,onFocus:M,onMouseOver:M,onClick:A,ref:j,translations:{buttonText:U,buttonAriaLabel:U}}),x&&(0,l.createPortal)(a.createElement(_,(0,r.Z)({onClose:H,initialScrollY:window.scrollY,initialQuery:N,navigator:T,transformItems:V,hitComponent:b,resultsFooterComponent:Y,transformSearchClient:q},y,{searchParameters:P})),Z.current))}t.Z=function(){var e=(0,s.Z)().siteConfig;return a.createElement(y,e.themeConfig.algolia)}},4184:function(e,t){var n;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var a=typeof n;if("string"===a||"number"===a)e.push(n);else if(Array.isArray(n)){if(n.length){var l=o.apply(null,n);l&&e.push(l)}}else if("object"===a)if(n.toString===Object.prototype.toString)for(var s in n)r.call(n,s)&&n[s]&&e.push(s);else e.push(n.toString())}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()},9578:function(e,t){"use strict";t.Z={placeholder:"placeholder_2yF_",contactLegal:"contactLegal_1Y21",heroBanner:"heroBanner_3P7f",LPhero:"LPhero_3Lqs",lightHero:"lightHero_vjYe",containerLarge:"containerLarge_Yds5",sdks:"sdks_3RID",supportCardsIntro:"supportCardsIntro_1nZn",guides:"guides_PlFO",mainGray:"mainGray_3RkZ",logoCallout:"logoCallout_1Fyp",callOutButton:"callOutButton_-4dS",logoMark:"logoMark_2HkL",awsMark:"awsMark_BPXs",githubMark:"githubMark_sNsK",platformImage:"platformImage_1lVt",frame:"frame_1RrD",frameImg:"frameImg_17sw",buttons:"buttons_1r9m",sectionPadding:"sectionPadding_1KlB",textLeft:"textLeft_1sC-",textCenter:"textCenter_tG45",betaCalloutHeading:"betaCalloutHeading_1aNM",betaCalloutParagraph:"betaCalloutParagraph_10WT",normalParagraph:"normalParagraph_17t_",sdkLogosSection:"sdkLogosSection_BWw7",guideCardSection:"guideCardSection_1dD1",platformFAQSection:"platformFAQSection_ZNm_",sampleAppsSection:"sampleAppsSection_2cvt",sampleAppsSectionHeader:"sampleAppsSectionHeader_Y0n8",gettingStartedSection:"gettingStartedSection_10eO",gsGuideContent:"gsGuideContent_qikp",getStarted:"getStarted_1iQB",callouts:"callouts_2IQ9",useCaseHeader:"useCaseHeader_VTWZ",useCaseNav:"useCaseNav_1Iw1",useCase:"useCase_3kFD",useCases:"useCases_vjI9",callout:"callout_PB24",calloutInfo:"calloutInfo_2fCY",calloutImage:"calloutImage_2LI_",calloutContent:"calloutContent_10qz",calloutDescription:"calloutDescription_1js1",jumpDoc:"jumpDoc_cy4j",apiDocs:"apiDocs_3Y8J",cliDocs:"cliDocs_3ZuZ",cardContent:"cardContent_2FAo",guideCardContent:"guideCardContent_2Pkt",sdkLogosContent:"sdkLogosContent_8RGv",sdkFooter:"sdkFooter_3CWp",logoLabel:"logoLabel_1fUk",sdkLogos:"sdkLogos_1Hay",sdkLogo:"sdkLogo_MV8J",sdkContent:"sdkContent_yf0x",guideCard:"guideCard_3Yym",sdkLinks:"sdkLinks_2bVm",cardLinks:"cardLinks_3h8T",cardLinksButton:"cardLinksButton_22VV",callOutCardLink:"callOutCardLink_31X-",sdkHero:"sdkHero_3Fi-",sdkMargin:"sdkMargin_XsY_",jumpDocTarget:"jumpDocTarget_1Sr5",exampleButtons:"exampleButtons_3rT4",useCaseContent:"useCaseContent_qNwf",useCaseHeading:"useCaseHeading_3Nqi",features:"features_3azU"}},7967:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=l(n(7294));l(n(3935));function l(e){return e&&e.__esModule?e:{default:e}}var s=0,i=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={loaded:!1},n.id=s++,n.createForm=n.createForm.bind(n),n.findFormElement=n.findFormElement.bind(n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"createForm",value:function(){var e=this;if(window.hbspt){if(null===this.el)return;var t=r({},this.props);delete t.loading,delete t.onSubmit,delete t.onReady;var n=r({},t,{target:"#"+this.el.getAttribute("id"),onFormSubmit:function(t){var n=t.serializeArray();e.props.onSubmit(n)}});return window.hbspt.forms.create(n),!0}setTimeout(this.createForm,1)}},{key:"loadScript",value:function(){var e=this,t=document.createElement("script");t.defer=!0,t.onload=function(){e.createForm(),e.findFormElement()},t.src="//js.hsforms.net/forms/v2.js",document.head.appendChild(t)}},{key:"findFormElement",value:function(){if(null!==this.el){var e=this.el.querySelector("iframe");e?(this.setState({loaded:!0}),this.props.onReady&&this.props.onReady(e)):setTimeout(this.findFormElement,1)}}},{key:"componentDidMount",value:function(){window.hbspt||this.props.noScript?(this.createForm(),this.findFormElement()):this.loadScript()}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){var e=this;return a.default.createElement("div",null,a.default.createElement("div",{ref:function(t){return e.el=t},id:"reactHubspotForm"+this.id,style:{display:this.state.loaded?"block":"none"}}),!this.state.loaded&&this.props.loading)}}]),t}(a.default.Component);t.default=i,e.exports=t.default}}]);