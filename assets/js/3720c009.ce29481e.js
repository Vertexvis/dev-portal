"use strict";(self.webpackChunkdev_portal=self.webpackChunkdev_portal||[]).push([[3751,9514,138],{83316:function(e,t,n){n.r(t),n.d(t,{default:function(){return i}});var r=n(67294),a=n(33516),l=n(941),c=n(37211),o="tag_21yA";function u(e){var t=e.letterEntry;return r.createElement("article",null,r.createElement("h2",null,t.letter),r.createElement("ul",{className:"padding--none"},t.tags.map((function(e){return r.createElement("li",{key:e.permalink,className:o},r.createElement(c.Z,e))}))),r.createElement("hr",null))}var s=function(e){var t=e.tags,n=(0,l.PZ)(t);return r.createElement("section",{className:"margin-vert--lg"},n.map((function(e){return r.createElement(u,{key:e.letter,letterEntry:e})})))};var i=function(e){var t=e.tags,n=(0,l.MA)();return r.createElement(a.Z,{title:n,wrapperClassName:l.kM.wrapper.docsPages,pageClassName:l.kM.page.docsTagsListPage,searchMetadatas:{tag:"doc_tags_list"}},r.createElement("div",{className:"container margin-vert--lg"},r.createElement("div",{className:"row"},r.createElement("main",{className:"col col--8 col--offset-2"},r.createElement("h1",null,n),r.createElement(s,{tags:t})))))}},37211:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(67294),a=n(86010),l=n(36742),c="tag_1Okp",o="tagRegular_3MiF",u="tagWithCount_1HU1";var s=function(e){var t,n=e.permalink,s=e.name,i=e.count;return r.createElement(l.Z,{href:n,className:(0,a.Z)(c,(t={},t[o]=!i,t[u]=i,t))},s,i&&r.createElement("span",null,i))}},6979:function(e,t,n){var r=n(87462),a=n(63366),l=n(67294),c=n(73935),o=n(52263),u=n(5977),s=n(44996),i=n(36742),m=n(35742),f=n(6397),h=n(57052),d=n(16747),g=n(95613),p=n(24973),v=["contextualSearch"],E=null;function C(e){var t=e.hit,n=e.children;return l.createElement(i.Z,{to:t.url},n)}function k(e){var t=e.state,n=e.onClose,r=(0,f.Z)().generateSearchPageLink;return l.createElement(i.Z,{to:r(t.query),onClick:n},"See all ",t.context.nbHits," results")}function b(e){var t,i,f=e.contextualSearch,b=(0,a.Z)(e,v),Z=(0,o.Z)().siteMetadata,P=(0,g.Z)(),S=null!=(t=null==(i=b.searchParameters)?void 0:i.facetFilters)?t:[],y=f?[].concat(P,S):S,M=Object.assign({},b.searchParameters,{facetFilters:y}),N=(0,s.C)().withBaseUrl,w=(0,u.k6)(),O=(0,l.useRef)(null),_=(0,l.useRef)(null),A=(0,l.useState)(!1),R=A[0],F=A[1],I=(0,l.useState)(null),x=I[0],B=I[1],T=(0,l.useCallback)((function(){return E?Promise.resolve():Promise.all([n.e(4300).then(n.bind(n,44300)),Promise.all([n.e(532),n.e(6945)]).then(n.bind(n,46945)),Promise.all([n.e(532),n.e(9846)]).then(n.bind(n,9846))]).then((function(e){var t=e[0].DocSearchModal;E=t}))}),[]),D=(0,l.useCallback)((function(){T().then((function(){O.current=document.createElement("div"),document.body.insertBefore(O.current,document.body.firstChild),F(!0)}))}),[T,F]),L=(0,l.useCallback)((function(){F(!1),O.current.remove()}),[F]),U=(0,l.useCallback)((function(e){T().then((function(){F(!0),B(e.key)}))}),[T,F,B]),j=(0,l.useRef)({navigate:function(e){var t=e.itemUrl;w.push(t)}}).current,H=(0,l.useRef)((function(e){return e.map((function(e){var t=document.createElement("a");return t.href=e.url,Object.assign({},e,{url:N(""+t.pathname+t.hash)})}))})).current,V=(0,l.useMemo)((function(){return function(e){return l.createElement(k,(0,r.Z)({},e,{onClose:L}))}}),[L]),Y=(0,l.useCallback)((function(e){return e.addAlgoliaAgent("docusaurus",Z.docusaurusVersion),e}),[Z.docusaurusVersion]);(0,h.D)({isOpen:R,onOpen:D,onClose:L,onInput:U,searchButtonRef:_});var q=(0,p.I)({id:"theme.SearchBar.label",message:"Search Our Docs",description:"The ARIA label and placeholder for search button"});return l.createElement(l.Fragment,null,l.createElement(m.Z,null,l.createElement("link",{rel:"preconnect",href:"https://"+b.appId+"-dsn.algolia.net",crossOrigin:"anonymous"})),l.createElement(d.a,{onTouchStart:T,onFocus:T,onMouseOver:T,onClick:D,ref:_,translations:{buttonText:q,buttonAriaLabel:q}}),R&&(0,c.createPortal)(l.createElement(E,(0,r.Z)({onClose:L,initialScrollY:window.scrollY,initialQuery:x,navigator:j,transformItems:H,hitComponent:C,resultsFooterComponent:V,transformSearchClient:Y},b,{searchParameters:M})),O.current))}t.Z=function(){var e=(0,o.Z)().siteConfig;return l.createElement(b,e.themeConfig.algolia)}}}]);