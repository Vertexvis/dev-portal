"use strict";(self.webpackChunkdev_portal=self.webpackChunkdev_portal||[]).push([[8880,9514,138],{2568:function(e,t,n){n.r(t);var r=n(7294),a=n(3516),o=n(2263);t.default=function(e){var t=e.version,n=(0,o.Z)().siteConfig,l=void 0===n?{}:n;return r.createElement(a.Z,{title:"API reference "+t+" | "+l.title,description:"Vertex's platform API specification "+t},r.createElement("div",{style:{marginTop:"5rem",textAlign:"center"}},r.createElement("p",null,"Our 1.0 API Reference has"," ",r.createElement("a",{href:"https://docs.vertexvis.com/"},"moved here"),".")))}},6979:function(e,t,n){var r=n(7462),a=n(3366),o=n(7294),l=n(3935),c=n(2263),u=n(5977),i=n(4996),s=n(6742),f=n(5742),m=n(6397),h=n(7052),d=n(6747),v=n(5613),p=n(4973),b=["contextualSearch"],C=null;function g(e){var t=e.hit,n=e.children;return o.createElement(s.Z,{to:t.url},n)}function k(e){var t=e.state,n=e.onClose,r=(0,m.Z)().generateSearchPageLink;return o.createElement(s.Z,{to:r(t.query),onClick:n},"See all ",t.context.nbHits," results")}function E(e){var t,s,m=e.contextualSearch,E=(0,a.Z)(e,b),Z=(0,c.Z)().siteMetadata,P=(0,v.Z)(),S=null!=(t=null==(s=E.searchParameters)?void 0:s.facetFilters)?t:[],A=m?[].concat(P,S):S,I=Object.assign({},E.searchParameters,{facetFilters:A}),O=(0,i.C)().withBaseUrl,x=(0,u.k6)(),y=(0,o.useRef)(null),R=(0,o.useRef)(null),w=(0,o.useState)(!1),F=w[0],B=w[1],M=(0,o.useState)(null),T=M[0],D=M[1],V=(0,o.useCallback)((function(){return C?Promise.resolve():Promise.all([n.e(4300).then(n.bind(n,4300)),Promise.all([n.e(532),n.e(6945)]).then(n.bind(n,6945)),Promise.all([n.e(532),n.e(9846)]).then(n.bind(n,9846))]).then((function(e){var t=e[0].DocSearchModal;C=t}))}),[]),j=(0,o.useCallback)((function(){V().then((function(){y.current=document.createElement("div"),document.body.insertBefore(y.current,document.body.firstChild),B(!0)}))}),[V,B]),L=(0,o.useCallback)((function(){B(!1),y.current.remove()}),[B]),U=(0,o.useCallback)((function(e){V().then((function(){B(!0),D(e.key)}))}),[V,B,D]),Y=(0,o.useRef)({navigate:function(e){var t=e.itemUrl;x.push(t)}}).current,_=(0,o.useRef)((function(e){return e.map((function(e){var t=document.createElement("a");return t.href=e.url,Object.assign({},e,{url:O(""+t.pathname+t.hash)})}))})).current,q=(0,o.useMemo)((function(){return function(e){return o.createElement(k,(0,r.Z)({},e,{onClose:L}))}}),[L]),H=(0,o.useCallback)((function(e){return e.addAlgoliaAgent("docusaurus",Z.docusaurusVersion),e}),[Z.docusaurusVersion]);(0,h.D)({isOpen:F,onOpen:j,onClose:L,onInput:U,searchButtonRef:R});var Q=(0,p.I)({id:"theme.SearchBar.label",message:"Search Our Docs",description:"The ARIA label and placeholder for search button"});return o.createElement(o.Fragment,null,o.createElement(f.Z,null,o.createElement("link",{rel:"preconnect",href:"https://"+E.appId+"-dsn.algolia.net",crossOrigin:"anonymous"})),o.createElement(d.a,{onTouchStart:V,onFocus:V,onMouseOver:V,onClick:j,ref:R,translations:{buttonText:Q,buttonAriaLabel:Q}}),F&&(0,l.createPortal)(o.createElement(C,(0,r.Z)({onClose:L,initialScrollY:window.scrollY,initialQuery:T,navigator:Y,transformItems:_,hitComponent:g,resultsFooterComponent:q,transformSearchClient:H},E,{searchParameters:I})),y.current))}t.Z=function(){var e=(0,c.Z)().siteConfig;return o.createElement(E,e.themeConfig.algolia)}}}]);