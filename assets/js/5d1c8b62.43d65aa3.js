(window.webpackJsonp=window.webpackJsonp||[]).push([[24,14,44],{146:function(e,t,n){"use strict";var a=n(3),r=n(7),c=n(0),o=n.n(c),l=n(25),u=n(16),i=n(22),s=n(136),b=n(135),f=n(24),m=n(148),d=n(603),h=n(605),O=n(158),j=n(129),v=null;function p(e){var t=e.hit,n=e.children;return o.a.createElement(b.a,{to:t.url},n)}function g(e){var t=e.state,n=e.onClose,a=Object(m.a)().generateSearchPageLink;return o.a.createElement(b.a,{to:a(t.query),onClick:n},"See all ",t.context.nbHits," results")}function C(e){var t,b,m=e.contextualSearch,C=Object(r.a)(e,["contextualSearch"]),E=Object(u.default)().siteMetadata,k=Object(O.a)(),S=null!==(t=null===(b=C.searchParameters)||void 0===b?void 0:b.facetFilters)&&void 0!==t?t:[],P=m?[].concat(k,S):S,w=Object.assign({},C.searchParameters,{facetFilters:P}),A=Object(s.b)().withBaseUrl,y=Object(i.useHistory)(),x=Object(c.useRef)(null),I=Object(c.useRef)(null),R=Object(c.useState)(!1),F=R[0],B=R[1],M=Object(c.useState)(null),T=M[0],V=M[1],D=Object(c.useCallback)((function(){return v?Promise.resolve():Promise.all([n.e(53).then(n.bind(null,157)),Promise.all([n.e(0),n.e(54)]).then(n.bind(null,156)),n.e(0).then(n.t.bind(null,57,7))]).then((function(e){var t=e[0].DocSearchModal;v=t}))}),[]),H=Object(c.useCallback)((function(){D().then((function(){x.current=document.createElement("div"),document.body.insertBefore(x.current,document.body.firstChild),B(!0)}))}),[D,B]),J=Object(c.useCallback)((function(){B(!1),x.current.remove()}),[B]),L=Object(c.useCallback)((function(e){D().then((function(){B(!0),V(e.key)}))}),[D,B,V]),U=Object(c.useRef)({navigate:function(e){var t=e.itemUrl;y.push(t)}}).current,Y=Object(c.useRef)((function(e){return e.map((function(e){var t=document.createElement("a");return t.href=e.url,Object.assign({},e,{url:A(""+t.pathname+t.hash)})}))})).current,q=Object(c.useMemo)((function(){return function(e){return o.a.createElement(g,Object(a.a)({},e,{onClose:J}))}}),[J]),Q=Object(c.useCallback)((function(e){return e.addAlgoliaAgent("docusaurus",E.docusaurusVersion),e}),[E.docusaurusVersion]);Object(d.a)({isOpen:F,onOpen:H,onClose:J,onInput:L,searchButtonRef:I});var z=Object(j.b)({id:"theme.SearchBar.label",message:"Search Our Docs",description:"The ARIA label and placeholder for search button"});return o.a.createElement(o.a.Fragment,null,o.a.createElement(f.a,null,o.a.createElement("link",{rel:"preconnect",href:"https://"+C.appId+"-dsn.algolia.net",crossOrigin:"anonymous"})),o.a.createElement(h.a,{onTouchStart:D,onFocus:D,onMouseOver:D,onClick:H,ref:I,translations:{buttonText:z,buttonAriaLabel:z}}),F&&Object(l.createPortal)(o.a.createElement(v,Object(a.a)({onClose:J,initialScrollY:window.scrollY,initialQuery:T,navigator:U,transformItems:Y,hitComponent:p,resultsFooterComponent:q,transformSearchClient:Q},C,{searchParameters:w})),x.current))}t.a=function(){var e=Object(u.default)().siteConfig;return o.a.createElement(C,e.themeConfig.algolia)}},95:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(151),o=n(16);t.default=function(e){var t=e.version,n=Object(o.default)().siteConfig,a=void 0===n?{}:n;return r.a.createElement(c.a,{title:"API reference "+t+" | "+a.title,description:"Vertex's platform API specification "+t},r.a.createElement("div",{style:{marginTop:"5rem",textAlign:"center"}},r.a.createElement("p",null,"Our 1.0 API Reference has"," ",r.a.createElement("a",{href:"https://docs.vertexvis.com/"},"moved here"),".")))}}}]);