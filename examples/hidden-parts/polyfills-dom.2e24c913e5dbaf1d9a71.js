/*! For license information please see polyfills-dom.2e24c913e5dbaf1d9a71.js.LICENSE.txt */
(self.webpackChunkhidden_parts_demo =
  self.webpackChunkhidden_parts_demo || []).push([
  [748],
  {
    701: () => {
      var t, e, n, o, i;
      (function () {
        var t = new Set(
          'annotation-xml color-profile font-face font-face-src font-face-uri font-face-format font-face-name missing-glyph'.split(
            ' '
          )
        );
        function e(e) {
          var n = t.has(e);
          return (e = /^[a-z][.0-9_a-z]*-[\-.0-9_a-z]*$/.test(e)), !n && e;
        }
        function n(t) {
          var e = t.isConnected;
          if (void 0 !== e) return e;
          for (; t && !(t.__CE_isImportDocument || t instanceof Document); )
            t =
              t.parentNode ||
              (window.ShadowRoot && t instanceof ShadowRoot ? t.host : void 0);
          return !(!t || !(t.__CE_isImportDocument || t instanceof Document));
        }
        function o(t, e) {
          for (; e && e !== t && !e.nextSibling; ) e = e.parentNode;
          return e && e !== t ? e.nextSibling : null;
        }
        function i(t, e, n) {
          n = void 0 === n ? new Set() : n;
          for (var r = t; r; ) {
            if (r.nodeType === Node.ELEMENT_NODE) {
              var a = r;
              e(a);
              var c = a.localName;
              if ('link' === c && 'import' === a.getAttribute('rel')) {
                if ((r = a.import) instanceof Node && !n.has(r))
                  for (n.add(r), r = r.firstChild; r; r = r.nextSibling)
                    i(r, e, n);
                r = o(t, a);
                continue;
              }
              if ('template' === c) {
                r = o(t, a);
                continue;
              }
              if ((a = a.__CE_shadowRoot))
                for (a = a.firstChild; a; a = a.nextSibling) i(a, e, n);
            }
            r = r.firstChild ? r.firstChild : o(t, r);
          }
        }
        function r(t, e, n) {
          t[e] = n;
        }
        function a() {
          (this.a = new Map()),
            (this.g = new Map()),
            (this.c = []),
            (this.f = []),
            (this.b = !1);
        }
        function c(t, e) {
          t.b &&
            i(e, function (e) {
              return l(t, e);
            });
        }
        function l(t, e) {
          if (t.b && !e.__CE_patched) {
            e.__CE_patched = !0;
            for (var n = 0; n < t.c.length; n++) t.c[n](e);
            for (n = 0; n < t.f.length; n++) t.f[n](e);
          }
        }
        function s(t, e) {
          var n = [];
          for (
            i(e, function (t) {
              return n.push(t);
            }),
              e = 0;
            e < n.length;
            e++
          ) {
            var o = n[e];
            1 === o.__CE_state ? t.connectedCallback(o) : h(t, o);
          }
        }
        function u(t, e) {
          var n = [];
          for (
            i(e, function (t) {
              return n.push(t);
            }),
              e = 0;
            e < n.length;
            e++
          ) {
            var o = n[e];
            1 === o.__CE_state && t.disconnectedCallback(o);
          }
        }
        function p(t, e, n) {
          var o = (n = void 0 === n ? {} : n).u || new Set(),
            r =
              n.i ||
              function (e) {
                return h(t, e);
              },
            a = [];
          if (
            (i(
              e,
              function (e) {
                if (
                  'link' === e.localName &&
                  'import' === e.getAttribute('rel')
                ) {
                  var n = e.import;
                  n instanceof Node &&
                    ((n.__CE_isImportDocument = !0), (n.__CE_hasRegistry = !0)),
                    n && 'complete' === n.readyState
                      ? (n.__CE_documentLoadHandled = !0)
                      : e.addEventListener('load', function () {
                          var n = e.import;
                          if (!n.__CE_documentLoadHandled) {
                            n.__CE_documentLoadHandled = !0;
                            var i = new Set(o);
                            i.delete(n), p(t, n, { u: i, i: r });
                          }
                        });
                } else a.push(e);
              },
              o
            ),
            t.b)
          )
            for (e = 0; e < a.length; e++) l(t, a[e]);
          for (e = 0; e < a.length; e++) r(a[e]);
        }
        function h(t, e) {
          if (void 0 === e.__CE_state) {
            var o = e.ownerDocument;
            if (
              (o.defaultView ||
                (o.__CE_isImportDocument && o.__CE_hasRegistry)) &&
              (o = t.a.get(e.localName))
            ) {
              o.constructionStack.push(e);
              var i = o.constructorFunction;
              try {
                try {
                  if (new i() !== e)
                    throw Error(
                      'The custom element constructor did not produce the element being upgraded.'
                    );
                } finally {
                  o.constructionStack.pop();
                }
              } catch (t) {
                throw ((e.__CE_state = 2), t);
              }
              if (
                ((e.__CE_state = 1),
                (e.__CE_definition = o),
                o.attributeChangedCallback)
              )
                for (o = o.observedAttributes, i = 0; i < o.length; i++) {
                  var r = o[i],
                    a = e.getAttribute(r);
                  null !== a && t.attributeChangedCallback(e, r, null, a, null);
                }
              n(e) && t.connectedCallback(e);
            }
          }
        }
        function f(t) {
          var e = document;
          (this.c = t),
            (this.a = e),
            (this.b = void 0),
            p(this.c, this.a),
            'loading' === this.a.readyState &&
              ((this.b = new MutationObserver(this.f.bind(this))),
              this.b.observe(this.a, { childList: !0, subtree: !0 }));
        }
        function d(t) {
          t.b && t.b.disconnect();
        }
        function m() {
          var t = this;
          (this.b = this.a = void 0),
            (this.c = new Promise(function (e) {
              (t.b = e), t.a && e(t.a);
            }));
        }
        function b(t) {
          if (t.a) throw Error('Already resolved.');
          (t.a = void 0), t.b && t.b(void 0);
        }
        function y(t) {
          (this.c = !1),
            (this.a = t),
            (this.j = new Map()),
            (this.f = function (t) {
              return t();
            }),
            (this.b = !1),
            (this.g = []),
            (this.o = new f(t));
        }
        (a.prototype.connectedCallback = function (t) {
          var e = t.__CE_definition;
          e.connectedCallback && e.connectedCallback.call(t);
        }),
          (a.prototype.disconnectedCallback = function (t) {
            var e = t.__CE_definition;
            e.disconnectedCallback && e.disconnectedCallback.call(t);
          }),
          (a.prototype.attributeChangedCallback = function (t, e, n, o, i) {
            var r = t.__CE_definition;
            r.attributeChangedCallback &&
              -1 < r.observedAttributes.indexOf(e) &&
              r.attributeChangedCallback.call(t, e, n, o, i);
          }),
          (f.prototype.f = function (t) {
            var e = this.a.readyState;
            for (
              ('interactive' !== e && 'complete' !== e) || d(this), e = 0;
              e < t.length;
              e++
            )
              for (var n = t[e].addedNodes, o = 0; o < n.length; o++)
                p(this.c, n[o]);
          }),
          (y.prototype.l = function (t, n) {
            var o = this;
            if (!(n instanceof Function))
              throw new TypeError(
                'Custom element constructors must be functions.'
              );
            if (!e(t))
              throw new SyntaxError(
                "The element name '" + t + "' is not valid."
              );
            if (this.a.a.get(t))
              throw Error(
                "A custom element with name '" +
                  t +
                  "' has already been defined."
              );
            if (this.c)
              throw Error('A custom element is already being defined.');
            this.c = !0;
            try {
              var i = function (t) {
                  var e = r[t];
                  if (void 0 !== e && !(e instanceof Function))
                    throw Error("The '" + t + "' callback must be a function.");
                  return e;
                },
                r = n.prototype;
              if (!(r instanceof Object))
                throw new TypeError(
                  "The custom element constructor's prototype is not an object."
                );
              var a = i('connectedCallback'),
                c = i('disconnectedCallback'),
                l = i('adoptedCallback'),
                s = i('attributeChangedCallback'),
                u = n.observedAttributes || [];
            } catch (t) {
              return;
            } finally {
              this.c = !1;
            }
            (n = {
              localName: t,
              constructorFunction: n,
              connectedCallback: a,
              disconnectedCallback: c,
              adoptedCallback: l,
              attributeChangedCallback: s,
              observedAttributes: u,
              constructionStack: [],
            }),
              (function (t, e, n) {
                t.a.set(e, n), t.g.set(n.constructorFunction, n);
              })(this.a, t, n),
              this.g.push(n),
              this.b ||
                ((this.b = !0),
                this.f(function () {
                  return (function (t) {
                    if (!1 !== t.b) {
                      t.b = !1;
                      for (
                        var e = t.g, n = [], o = new Map(), i = 0;
                        i < e.length;
                        i++
                      )
                        o.set(e[i].localName, []);
                      for (
                        p(t.a, document, {
                          i: function (e) {
                            if (void 0 === e.__CE_state) {
                              var i = e.localName,
                                r = o.get(i);
                              r ? r.push(e) : t.a.a.get(i) && n.push(e);
                            }
                          },
                        }),
                          i = 0;
                        i < n.length;
                        i++
                      )
                        h(t.a, n[i]);
                      for (; 0 < e.length; ) {
                        var r = e.shift();
                        (i = r.localName), (r = o.get(r.localName));
                        for (var a = 0; a < r.length; a++) h(t.a, r[a]);
                        (i = t.j.get(i)) && b(i);
                      }
                    }
                  })(o);
                }));
          }),
          (y.prototype.i = function (t) {
            p(this.a, t);
          }),
          (y.prototype.get = function (t) {
            if ((t = this.a.a.get(t))) return t.constructorFunction;
          }),
          (y.prototype.m = function (t) {
            if (!e(t))
              return Promise.reject(
                new SyntaxError(
                  "'" + t + "' is not a valid custom element name."
                )
              );
            var n = this.j.get(t);
            return (
              n ||
                ((n = new m()),
                this.j.set(t, n),
                this.a.a.get(t) &&
                  !this.g.some(function (e) {
                    return e.localName === t;
                  }) &&
                  b(n)),
              n.c
            );
          }),
          (y.prototype.s = function (t) {
            d(this.o);
            var e = this.f;
            this.f = function (n) {
              return t(function () {
                return e(n);
              });
            };
          }),
          (window.CustomElementRegistry = y),
          (y.prototype.define = y.prototype.l),
          (y.prototype.upgrade = y.prototype.i),
          (y.prototype.get = y.prototype.get),
          (y.prototype.whenDefined = y.prototype.m),
          (y.prototype.polyfillWrapFlushCallback = y.prototype.s);
        var g = window.Document.prototype.createElement,
          v = window.Document.prototype.createElementNS,
          w = window.Document.prototype.importNode,
          E = window.Document.prototype.prepend,
          _ = window.Document.prototype.append,
          C = window.DocumentFragment.prototype.prepend,
          N = window.DocumentFragment.prototype.append,
          S = window.Node.prototype.cloneNode,
          T = window.Node.prototype.appendChild,
          k = window.Node.prototype.insertBefore,
          D = window.Node.prototype.removeChild,
          A = window.Node.prototype.replaceChild,
          O = Object.getOwnPropertyDescriptor(
            window.Node.prototype,
            'textContent'
          ),
          j = window.Element.prototype.attachShadow,
          L = Object.getOwnPropertyDescriptor(
            window.Element.prototype,
            'innerHTML'
          ),
          M = window.Element.prototype.getAttribute,
          x = window.Element.prototype.setAttribute,
          H = window.Element.prototype.removeAttribute,
          R = window.Element.prototype.getAttributeNS,
          P = window.Element.prototype.setAttributeNS,
          F = window.Element.prototype.removeAttributeNS,
          I = window.Element.prototype.insertAdjacentElement,
          z = window.Element.prototype.insertAdjacentHTML,
          U = window.Element.prototype.prepend,
          W = window.Element.prototype.append,
          q = window.Element.prototype.before,
          B = window.Element.prototype.after,
          $ = window.Element.prototype.replaceWith,
          V = window.Element.prototype.remove,
          X = window.HTMLElement,
          G = Object.getOwnPropertyDescriptor(
            window.HTMLElement.prototype,
            'innerHTML'
          ),
          J = window.HTMLElement.prototype.insertAdjacentElement,
          K = window.HTMLElement.prototype.insertAdjacentHTML,
          Q = new (function () {})();
        function Y(t, e, o) {
          function i(e) {
            return function (o) {
              for (var i = [], r = 0; r < arguments.length; ++r)
                i[r] = arguments[r];
              r = [];
              for (var a = [], c = 0; c < i.length; c++) {
                var l = i[c];
                if (
                  (l instanceof Element && n(l) && a.push(l),
                  l instanceof DocumentFragment)
                )
                  for (l = l.firstChild; l; l = l.nextSibling) r.push(l);
                else r.push(l);
              }
              for (e.apply(this, i), i = 0; i < a.length; i++) u(t, a[i]);
              if (n(this))
                for (i = 0; i < r.length; i++)
                  (a = r[i]) instanceof Element && s(t, a);
            };
          }
          void 0 !== o.h && (e.prepend = i(o.h)),
            void 0 !== o.append && (e.append = i(o.append));
        }
        var Z,
          tt = window.customElements;
        if (
          !tt ||
          tt.forcePolyfill ||
          'function' != typeof tt.define ||
          'function' != typeof tt.get
        ) {
          var et = new a();
          (Z = et),
            (window.HTMLElement = (function () {
              function t() {
                var t = this.constructor,
                  e = Z.g.get(t);
                if (!e)
                  throw Error(
                    'The custom element being constructed was not registered with `customElements`.'
                  );
                var n = e.constructionStack;
                if (0 === n.length)
                  return (
                    (n = g.call(document, e.localName)),
                    Object.setPrototypeOf(n, t.prototype),
                    (n.__CE_state = 1),
                    (n.__CE_definition = e),
                    l(Z, n),
                    n
                  );
                var o = n[(e = n.length - 1)];
                if (o === Q)
                  throw Error(
                    'The HTMLElement constructor was either called reentrantly for this constructor or called multiple times.'
                  );
                return (
                  (n[e] = Q), Object.setPrototypeOf(o, t.prototype), l(Z, o), o
                );
              }
              return (
                (t.prototype = X.prototype),
                Object.defineProperty(t.prototype, 'constructor', {
                  writable: !0,
                  configurable: !0,
                  enumerable: !1,
                  value: t,
                }),
                t
              );
            })()),
            (function () {
              var t = et;
              r(Document.prototype, 'createElement', function (e) {
                if (this.__CE_hasRegistry) {
                  var n = t.a.get(e);
                  if (n) return new n.constructorFunction();
                }
                return (e = g.call(this, e)), l(t, e), e;
              }),
                r(Document.prototype, 'importNode', function (e, n) {
                  return (
                    (e = w.call(this, e, !!n)),
                    this.__CE_hasRegistry ? p(t, e) : c(t, e),
                    e
                  );
                }),
                r(Document.prototype, 'createElementNS', function (e, n) {
                  if (
                    this.__CE_hasRegistry &&
                    (null === e || 'http://www.w3.org/1999/xhtml' === e)
                  ) {
                    var o = t.a.get(n);
                    if (o) return new o.constructorFunction();
                  }
                  return (e = v.call(this, e, n)), l(t, e), e;
                }),
                Y(t, Document.prototype, { h: E, append: _ });
            })(),
            Y(et, DocumentFragment.prototype, { h: C, append: N }),
            (function () {
              function t(t, o) {
                Object.defineProperty(t, 'textContent', {
                  enumerable: o.enumerable,
                  configurable: !0,
                  get: o.get,
                  set: function (t) {
                    if (this.nodeType === Node.TEXT_NODE) o.set.call(this, t);
                    else {
                      var i = void 0;
                      if (this.firstChild) {
                        var r = this.childNodes,
                          a = r.length;
                        if (0 < a && n(this)) {
                          i = Array(a);
                          for (var c = 0; c < a; c++) i[c] = r[c];
                        }
                      }
                      if ((o.set.call(this, t), i))
                        for (t = 0; t < i.length; t++) u(e, i[t]);
                    }
                  },
                });
              }
              var e = et;
              r(Node.prototype, 'insertBefore', function (t, o) {
                if (t instanceof DocumentFragment) {
                  var i = Array.prototype.slice.apply(t.childNodes);
                  if (((t = k.call(this, t, o)), n(this)))
                    for (o = 0; o < i.length; o++) s(e, i[o]);
                  return t;
                }
                return (
                  (i = n(t)),
                  (o = k.call(this, t, o)),
                  i && u(e, t),
                  n(this) && s(e, t),
                  o
                );
              }),
                r(Node.prototype, 'appendChild', function (t) {
                  if (t instanceof DocumentFragment) {
                    var o = Array.prototype.slice.apply(t.childNodes);
                    if (((t = T.call(this, t)), n(this)))
                      for (var i = 0; i < o.length; i++) s(e, o[i]);
                    return t;
                  }
                  return (
                    (o = n(t)),
                    (i = T.call(this, t)),
                    o && u(e, t),
                    n(this) && s(e, t),
                    i
                  );
                }),
                r(Node.prototype, 'cloneNode', function (t) {
                  return (
                    (t = S.call(this, !!t)),
                    this.ownerDocument.__CE_hasRegistry ? p(e, t) : c(e, t),
                    t
                  );
                }),
                r(Node.prototype, 'removeChild', function (t) {
                  var o = n(t),
                    i = D.call(this, t);
                  return o && u(e, t), i;
                }),
                r(Node.prototype, 'replaceChild', function (t, o) {
                  if (t instanceof DocumentFragment) {
                    var i = Array.prototype.slice.apply(t.childNodes);
                    if (((t = A.call(this, t, o)), n(this)))
                      for (u(e, o), o = 0; o < i.length; o++) s(e, i[o]);
                    return t;
                  }
                  i = n(t);
                  var r = A.call(this, t, o),
                    a = n(this);
                  return a && u(e, o), i && u(e, t), a && s(e, t), r;
                }),
                O && O.get
                  ? t(Node.prototype, O)
                  : (function (t, e) {
                      (t.b = !0), t.c.push(e);
                    })(e, function (e) {
                      t(e, {
                        enumerable: !0,
                        configurable: !0,
                        get: function () {
                          for (
                            var t = [], e = 0;
                            e < this.childNodes.length;
                            e++
                          ) {
                            var n = this.childNodes[e];
                            n.nodeType !== Node.COMMENT_NODE &&
                              t.push(n.textContent);
                          }
                          return t.join('');
                        },
                        set: function (t) {
                          for (; this.firstChild; )
                            D.call(this, this.firstChild);
                          null != t &&
                            '' !== t &&
                            T.call(this, document.createTextNode(t));
                        },
                      });
                    });
            })(),
            (function () {
              function t(t, e) {
                Object.defineProperty(t, 'innerHTML', {
                  enumerable: e.enumerable,
                  configurable: !0,
                  get: e.get,
                  set: function (t) {
                    var o = this,
                      r = void 0;
                    if (
                      (n(this) &&
                        ((r = []),
                        i(this, function (t) {
                          t !== o && r.push(t);
                        })),
                      e.set.call(this, t),
                      r)
                    )
                      for (var l = 0; l < r.length; l++) {
                        var s = r[l];
                        1 === s.__CE_state && a.disconnectedCallback(s);
                      }
                    return (
                      this.ownerDocument.__CE_hasRegistry
                        ? p(a, this)
                        : c(a, this),
                      t
                    );
                  },
                });
              }
              function e(t, e) {
                r(t, 'insertAdjacentElement', function (t, o) {
                  var i = n(o);
                  return (
                    (t = e.call(this, t, o)), i && u(a, o), n(t) && s(a, o), t
                  );
                });
              }
              function o(t, e) {
                function n(t, e) {
                  for (var n = []; t !== e; t = t.nextSibling) n.push(t);
                  for (e = 0; e < n.length; e++) p(a, n[e]);
                }
                r(t, 'insertAdjacentHTML', function (t, o) {
                  if ('beforebegin' === (t = t.toLowerCase())) {
                    var i = this.previousSibling;
                    e.call(this, t, o),
                      n(i || this.parentNode.firstChild, this);
                  } else if ('afterbegin' === t)
                    (i = this.firstChild),
                      e.call(this, t, o),
                      n(this.firstChild, i);
                  else if ('beforeend' === t)
                    (i = this.lastChild),
                      e.call(this, t, o),
                      n(i || this.firstChild, null);
                  else {
                    if ('afterend' !== t)
                      throw new SyntaxError(
                        'The value provided (' +
                          String(t) +
                          ") is not one of 'beforebegin', 'afterbegin', 'beforeend', or 'afterend'."
                      );
                    (i = this.nextSibling),
                      e.call(this, t, o),
                      n(this.nextSibling, i);
                  }
                });
              }
              var a = et;
              j &&
                r(Element.prototype, 'attachShadow', function (t) {
                  t = j.call(this, t);
                  var e = a;
                  if (e.b && !t.__CE_patched) {
                    t.__CE_patched = !0;
                    for (var n = 0; n < e.c.length; n++) e.c[n](t);
                  }
                  return (this.__CE_shadowRoot = t);
                }),
                L && L.get
                  ? t(Element.prototype, L)
                  : G && G.get
                  ? t(HTMLElement.prototype, G)
                  : (function (t, e) {
                      (t.b = !0), t.f.push(e);
                    })(a, function (e) {
                      t(e, {
                        enumerable: !0,
                        configurable: !0,
                        get: function () {
                          return S.call(this, !0).innerHTML;
                        },
                        set: function (t) {
                          var e = 'template' === this.localName,
                            n = e ? this.content : this,
                            o = v.call(
                              document,
                              this.namespaceURI,
                              this.localName
                            );
                          for (o.innerHTML = t; 0 < n.childNodes.length; )
                            D.call(n, n.childNodes[0]);
                          for (t = e ? o.content : o; 0 < t.childNodes.length; )
                            T.call(n, t.childNodes[0]);
                        },
                      });
                    }),
                r(Element.prototype, 'setAttribute', function (t, e) {
                  if (1 !== this.__CE_state) return x.call(this, t, e);
                  var n = M.call(this, t);
                  x.call(this, t, e),
                    (e = M.call(this, t)),
                    a.attributeChangedCallback(this, t, n, e, null);
                }),
                r(Element.prototype, 'setAttributeNS', function (t, e, n) {
                  if (1 !== this.__CE_state) return P.call(this, t, e, n);
                  var o = R.call(this, t, e);
                  P.call(this, t, e, n),
                    (n = R.call(this, t, e)),
                    a.attributeChangedCallback(this, e, o, n, t);
                }),
                r(Element.prototype, 'removeAttribute', function (t) {
                  if (1 !== this.__CE_state) return H.call(this, t);
                  var e = M.call(this, t);
                  H.call(this, t),
                    null !== e &&
                      a.attributeChangedCallback(this, t, e, null, null);
                }),
                r(Element.prototype, 'removeAttributeNS', function (t, e) {
                  if (1 !== this.__CE_state) return F.call(this, t, e);
                  var n = R.call(this, t, e);
                  F.call(this, t, e);
                  var o = R.call(this, t, e);
                  n !== o && a.attributeChangedCallback(this, e, n, o, t);
                }),
                J
                  ? e(HTMLElement.prototype, J)
                  : I
                  ? e(Element.prototype, I)
                  : console.warn(
                      'Custom Elements: `Element#insertAdjacentElement` was not patched.'
                    ),
                K
                  ? o(HTMLElement.prototype, K)
                  : z
                  ? o(Element.prototype, z)
                  : console.warn(
                      'Custom Elements: `Element#insertAdjacentHTML` was not patched.'
                    ),
                Y(a, Element.prototype, { h: U, append: W }),
                (function (t) {
                  function e(e) {
                    return function (o) {
                      for (var i = [], r = 0; r < arguments.length; ++r)
                        i[r] = arguments[r];
                      r = [];
                      for (var a = [], c = 0; c < i.length; c++) {
                        var l = i[c];
                        if (
                          (l instanceof Element && n(l) && a.push(l),
                          l instanceof DocumentFragment)
                        )
                          for (l = l.firstChild; l; l = l.nextSibling)
                            r.push(l);
                        else r.push(l);
                      }
                      for (e.apply(this, i), i = 0; i < a.length; i++)
                        u(t, a[i]);
                      if (n(this))
                        for (i = 0; i < r.length; i++)
                          (a = r[i]) instanceof Element && s(t, a);
                    };
                  }
                  var o = Element.prototype;
                  void 0 !== q && (o.before = e(q)),
                    void 0 !== q && (o.after = e(B)),
                    void 0 !== $ &&
                      r(o, 'replaceWith', function (e) {
                        for (var o = [], i = 0; i < arguments.length; ++i)
                          o[i] = arguments[i];
                        i = [];
                        for (var r = [], a = 0; a < o.length; a++) {
                          var c = o[a];
                          if (
                            (c instanceof Element && n(c) && r.push(c),
                            c instanceof DocumentFragment)
                          )
                            for (c = c.firstChild; c; c = c.nextSibling)
                              i.push(c);
                          else i.push(c);
                        }
                        for (
                          a = n(this), $.apply(this, o), o = 0;
                          o < r.length;
                          o++
                        )
                          u(t, r[o]);
                        if (a)
                          for (u(t, this), o = 0; o < i.length; o++)
                            (r = i[o]) instanceof Element && s(t, r);
                      }),
                    void 0 !== V &&
                      r(o, 'remove', function () {
                        var e = n(this);
                        V.call(this), e && u(t, this);
                      });
                })(a);
            })(),
            (document.__CE_hasRegistry = !0);
          var nt = new y(et);
          Object.defineProperty(window, 'customElements', {
            configurable: !0,
            enumerable: !0,
            value: nt,
          });
        }
      }.call(self),
        'string' != typeof document.baseURI &&
          Object.defineProperty(Document.prototype, 'baseURI', {
            enumerable: !0,
            configurable: !0,
            get: function () {
              var t = document.querySelector('base');
              return t && t.href ? t.href : document.URL;
            },
          }),
        'function' != typeof window.CustomEvent &&
          ((window.CustomEvent = function (t, e) {
            e = e || { bubbles: !1, cancelable: !1, detail: void 0 };
            var n = document.createEvent('CustomEvent');
            return n.initCustomEvent(t, e.bubbles, e.cancelable, e.detail), n;
          }),
          (window.CustomEvent.prototype = window.Event.prototype)),
        (t = Event.prototype),
        (e = document),
        (n = window),
        t.composedPath ||
          (t.composedPath = function () {
            if (this.path) return this.path;
            var t = this.target;
            for (this.path = []; null !== t.parentNode; )
              this.path.push(t), (t = t.parentNode);
            return this.path.push(e, n), this.path;
          }),
        'function' != typeof (o = window.Element.prototype).matches &&
          (o.matches =
            o.msMatchesSelector ||
            o.mozMatchesSelector ||
            o.webkitMatchesSelector ||
            function (t) {
              t = (this.document || this.ownerDocument).querySelectorAll(t);
              for (var e = 0; t[e] && t[e] !== this; ) ++e;
              return !!t[e];
            }),
        'function' != typeof o.closest &&
          (o.closest = function (t) {
            for (var e = this; e && 1 === e.nodeType; ) {
              if (e.matches(t)) return e;
              e = e.parentNode;
            }
            return null;
          }),
        (function (t) {
          function e(t) {
            return (t = n(t)) && 11 === t.nodeType ? e(t.host) : t;
          }
          function n(t) {
            return t && t.parentNode ? n(t.parentNode) : t;
          }
          'function' != typeof t.getRootNode &&
            (t.getRootNode = function (t) {
              return t && t.composed ? e(this) : n(this);
            });
        })(Element.prototype),
        (function (t) {
          'isConnected' in t ||
            Object.defineProperty(t, 'isConnected', {
              configurable: !0,
              enumerable: !0,
              get: function () {
                var t = this.getRootNode({ composed: !0 });
                return t && 9 === t.nodeType;
              },
            });
        })(Element.prototype),
        [
          Element.prototype,
          CharacterData.prototype,
          DocumentType.prototype,
        ].forEach(function (t) {
          t.hasOwnProperty('remove') ||
            Object.defineProperty(t, 'remove', {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              value: function () {
                null !== this.parentNode && this.parentNode.removeChild(this);
              },
            });
        }),
        'classList' in (i = Element.prototype) ||
          Object.defineProperty(i, 'classList', {
            get: function () {
              var t = this,
                e = (t.getAttribute('class') || '')
                  .replace(/^\s+|\s$/g, '')
                  .split(/\s+/g);
              function n() {
                e.length > 0
                  ? t.setAttribute('class', e.join(' '))
                  : t.removeAttribute('class');
              }
              return (
                '' === e[0] && e.splice(0, 1),
                (e.toggle = function (t, o) {
                  void 0 !== o
                    ? o
                      ? e.add(t)
                      : e.remove(t)
                    : -1 !== e.indexOf(t)
                    ? e.splice(e.indexOf(t), 1)
                    : e.push(t),
                    n();
                }),
                (e.add = function () {
                  for (
                    var t = [].slice.call(arguments), o = 0, i = t.length;
                    o < i;
                    o++
                  )
                    -1 === e.indexOf(t[o]) && e.push(t[o]);
                  n();
                }),
                (e.remove = function () {
                  for (
                    var t = [].slice.call(arguments), o = 0, i = t.length;
                    o < i;
                    o++
                  )
                    -1 !== e.indexOf(t[o]) && e.splice(e.indexOf(t[o]), 1);
                  n();
                }),
                (e.item = function (t) {
                  return e[t];
                }),
                (e.contains = function (t) {
                  return -1 !== e.indexOf(t);
                }),
                (e.replace = function (t, o) {
                  -1 !== e.indexOf(t) && e.splice(e.indexOf(t), 1, o), n();
                }),
                (e.value = t.getAttribute('class') || ''),
                e
              );
            },
          }),
        (function (t) {
          try {
            document.body.classList.add();
          } catch (o) {
            var e = t.add,
              n = t.remove;
            (t.add = function () {
              for (var t = 0; t < arguments.length; t++)
                e.call(this, arguments[t]);
            }),
              (t.remove = function () {
                for (var t = 0; t < arguments.length; t++)
                  n.call(this, arguments[t]);
              });
          }
        })(DOMTokenList.prototype));
    },
    526: () => {
      var t, e, n, o, i;
      (function () {
        'use strict';
        var t = new Set(
          'annotation-xml color-profile font-face font-face-src font-face-uri font-face-format font-face-name missing-glyph'.split(
            ' '
          )
        );
        function e(e) {
          var n = t.has(e);
          return (e = /^[a-z][.0-9_a-z]*-[\-.0-9_a-z]*$/.test(e)), !n && e;
        }
        function n(t) {
          var e = t.isConnected;
          if (void 0 !== e) return e;
          for (; t && !(t.__CE_isImportDocument || t instanceof Document); )
            t =
              t.parentNode ||
              (window.ShadowRoot && t instanceof ShadowRoot ? t.host : void 0);
          return !(!t || !(t.__CE_isImportDocument || t instanceof Document));
        }
        function o(t, e) {
          for (; e && e !== t && !e.nextSibling; ) e = e.parentNode;
          return e && e !== t ? e.nextSibling : null;
        }
        function i(t, e, n) {
          n = void 0 === n ? new Set() : n;
          for (var r = t; r; ) {
            if (r.nodeType === Node.ELEMENT_NODE) {
              var a = r;
              e(a);
              var c = a.localName;
              if ('link' === c && 'import' === a.getAttribute('rel')) {
                if ((r = a.import) instanceof Node && !n.has(r))
                  for (n.add(r), r = r.firstChild; r; r = r.nextSibling)
                    i(r, e, n);
                r = o(t, a);
                continue;
              }
              if ('template' === c) {
                r = o(t, a);
                continue;
              }
              if ((a = a.__CE_shadowRoot))
                for (a = a.firstChild; a; a = a.nextSibling) i(a, e, n);
            }
            r = r.firstChild ? r.firstChild : o(t, r);
          }
        }
        function r(t, e, n) {
          t[e] = n;
        }
        function a() {
          (this.a = new Map()),
            (this.g = new Map()),
            (this.c = []),
            (this.f = []),
            (this.b = !1);
        }
        function c(t, e) {
          t.b &&
            i(e, function (e) {
              return l(t, e);
            });
        }
        function l(t, e) {
          if (t.b && !e.__CE_patched) {
            e.__CE_patched = !0;
            for (var n = 0; n < t.c.length; n++) t.c[n](e);
            for (n = 0; n < t.f.length; n++) t.f[n](e);
          }
        }
        function s(t, e) {
          var n = [];
          for (
            i(e, function (t) {
              return n.push(t);
            }),
              e = 0;
            e < n.length;
            e++
          ) {
            var o = n[e];
            1 === o.__CE_state ? t.connectedCallback(o) : h(t, o);
          }
        }
        function u(t, e) {
          var n = [];
          for (
            i(e, function (t) {
              return n.push(t);
            }),
              e = 0;
            e < n.length;
            e++
          ) {
            var o = n[e];
            1 === o.__CE_state && t.disconnectedCallback(o);
          }
        }
        function p(t, e, n) {
          var o = (n = void 0 === n ? {} : n).u || new Set(),
            r =
              n.i ||
              function (e) {
                return h(t, e);
              },
            a = [];
          if (
            (i(
              e,
              function (e) {
                if (
                  'link' === e.localName &&
                  'import' === e.getAttribute('rel')
                ) {
                  var n = e.import;
                  n instanceof Node &&
                    ((n.__CE_isImportDocument = !0), (n.__CE_hasRegistry = !0)),
                    n && 'complete' === n.readyState
                      ? (n.__CE_documentLoadHandled = !0)
                      : e.addEventListener('load', function () {
                          var n = e.import;
                          if (!n.__CE_documentLoadHandled) {
                            n.__CE_documentLoadHandled = !0;
                            var i = new Set(o);
                            i.delete(n), p(t, n, { u: i, i: r });
                          }
                        });
                } else a.push(e);
              },
              o
            ),
            t.b)
          )
            for (e = 0; e < a.length; e++) l(t, a[e]);
          for (e = 0; e < a.length; e++) r(a[e]);
        }
        function h(t, e) {
          if (void 0 === e.__CE_state) {
            var o = e.ownerDocument;
            if (
              (o.defaultView ||
                (o.__CE_isImportDocument && o.__CE_hasRegistry)) &&
              (o = t.a.get(e.localName))
            ) {
              o.constructionStack.push(e);
              var i = o.constructorFunction;
              try {
                try {
                  if (new i() !== e)
                    throw Error(
                      'The custom element constructor did not produce the element being upgraded.'
                    );
                } finally {
                  o.constructionStack.pop();
                }
              } catch (t) {
                throw ((e.__CE_state = 2), t);
              }
              if (
                ((e.__CE_state = 1),
                (e.__CE_definition = o),
                o.attributeChangedCallback)
              )
                for (o = o.observedAttributes, i = 0; i < o.length; i++) {
                  var r = o[i],
                    a = e.getAttribute(r);
                  null !== a && t.attributeChangedCallback(e, r, null, a, null);
                }
              n(e) && t.connectedCallback(e);
            }
          }
        }
        function f(t) {
          var e = document;
          (this.c = t),
            (this.a = e),
            (this.b = void 0),
            p(this.c, this.a),
            'loading' === this.a.readyState &&
              ((this.b = new MutationObserver(this.f.bind(this))),
              this.b.observe(this.a, { childList: !0, subtree: !0 }));
        }
        function d(t) {
          t.b && t.b.disconnect();
        }
        function m() {
          var t = this;
          (this.b = this.a = void 0),
            (this.c = new Promise(function (e) {
              (t.b = e), t.a && e(t.a);
            }));
        }
        function b(t) {
          if (t.a) throw Error('Already resolved.');
          (t.a = void 0), t.b && t.b(void 0);
        }
        function y(t) {
          (this.c = !1),
            (this.a = t),
            (this.j = new Map()),
            (this.f = function (t) {
              return t();
            }),
            (this.b = !1),
            (this.g = []),
            (this.o = new f(t));
        }
        (a.prototype.connectedCallback = function (t) {
          var e = t.__CE_definition;
          e.connectedCallback && e.connectedCallback.call(t);
        }),
          (a.prototype.disconnectedCallback = function (t) {
            var e = t.__CE_definition;
            e.disconnectedCallback && e.disconnectedCallback.call(t);
          }),
          (a.prototype.attributeChangedCallback = function (t, e, n, o, i) {
            var r = t.__CE_definition;
            r.attributeChangedCallback &&
              -1 < r.observedAttributes.indexOf(e) &&
              r.attributeChangedCallback.call(t, e, n, o, i);
          }),
          (f.prototype.f = function (t) {
            var e = this.a.readyState;
            for (
              ('interactive' !== e && 'complete' !== e) || d(this), e = 0;
              e < t.length;
              e++
            )
              for (var n = t[e].addedNodes, o = 0; o < n.length; o++)
                p(this.c, n[o]);
          }),
          (y.prototype.l = function (t, n) {
            var o = this;
            if (!(n instanceof Function))
              throw new TypeError(
                'Custom element constructors must be functions.'
              );
            if (!e(t))
              throw new SyntaxError(
                "The element name '" + t + "' is not valid."
              );
            if (this.a.a.get(t))
              throw Error(
                "A custom element with name '" +
                  t +
                  "' has already been defined."
              );
            if (this.c)
              throw Error('A custom element is already being defined.');
            this.c = !0;
            try {
              var i = function (t) {
                  var e = r[t];
                  if (void 0 !== e && !(e instanceof Function))
                    throw Error("The '" + t + "' callback must be a function.");
                  return e;
                },
                r = n.prototype;
              if (!(r instanceof Object))
                throw new TypeError(
                  "The custom element constructor's prototype is not an object."
                );
              var a = i('connectedCallback'),
                c = i('disconnectedCallback'),
                l = i('adoptedCallback'),
                s = i('attributeChangedCallback'),
                u = n.observedAttributes || [];
            } catch (t) {
              return;
            } finally {
              this.c = !1;
            }
            (n = {
              localName: t,
              constructorFunction: n,
              connectedCallback: a,
              disconnectedCallback: c,
              adoptedCallback: l,
              attributeChangedCallback: s,
              observedAttributes: u,
              constructionStack: [],
            }),
              (function (t, e, n) {
                t.a.set(e, n), t.g.set(n.constructorFunction, n);
              })(this.a, t, n),
              this.g.push(n),
              this.b ||
                ((this.b = !0),
                this.f(function () {
                  return (function (t) {
                    if (!1 !== t.b) {
                      t.b = !1;
                      for (
                        var e = t.g, n = [], o = new Map(), i = 0;
                        i < e.length;
                        i++
                      )
                        o.set(e[i].localName, []);
                      for (
                        p(t.a, document, {
                          i: function (e) {
                            if (void 0 === e.__CE_state) {
                              var i = e.localName,
                                r = o.get(i);
                              r ? r.push(e) : t.a.a.get(i) && n.push(e);
                            }
                          },
                        }),
                          i = 0;
                        i < n.length;
                        i++
                      )
                        h(t.a, n[i]);
                      for (; 0 < e.length; ) {
                        var r = e.shift();
                        (i = r.localName), (r = o.get(r.localName));
                        for (var a = 0; a < r.length; a++) h(t.a, r[a]);
                        (i = t.j.get(i)) && b(i);
                      }
                    }
                  })(o);
                }));
          }),
          (y.prototype.i = function (t) {
            p(this.a, t);
          }),
          (y.prototype.get = function (t) {
            if ((t = this.a.a.get(t))) return t.constructorFunction;
          }),
          (y.prototype.m = function (t) {
            if (!e(t))
              return Promise.reject(
                new SyntaxError(
                  "'" + t + "' is not a valid custom element name."
                )
              );
            var n = this.j.get(t);
            return (
              n ||
                ((n = new m()),
                this.j.set(t, n),
                this.a.a.get(t) &&
                  !this.g.some(function (e) {
                    return e.localName === t;
                  }) &&
                  b(n)),
              n.c
            );
          }),
          (y.prototype.s = function (t) {
            d(this.o);
            var e = this.f;
            this.f = function (n) {
              return t(function () {
                return e(n);
              });
            };
          }),
          (window.CustomElementRegistry = y),
          (y.prototype.define = y.prototype.l),
          (y.prototype.upgrade = y.prototype.i),
          (y.prototype.get = y.prototype.get),
          (y.prototype.whenDefined = y.prototype.m),
          (y.prototype.polyfillWrapFlushCallback = y.prototype.s);
        var g = window.Document.prototype.createElement,
          v = window.Document.prototype.createElementNS,
          w = window.Document.prototype.importNode,
          E = window.Document.prototype.prepend,
          _ = window.Document.prototype.append,
          C = window.DocumentFragment.prototype.prepend,
          N = window.DocumentFragment.prototype.append,
          S = window.Node.prototype.cloneNode,
          T = window.Node.prototype.appendChild,
          k = window.Node.prototype.insertBefore,
          D = window.Node.prototype.removeChild,
          A = window.Node.prototype.replaceChild,
          O = Object.getOwnPropertyDescriptor(
            window.Node.prototype,
            'textContent'
          ),
          j = window.Element.prototype.attachShadow,
          L = Object.getOwnPropertyDescriptor(
            window.Element.prototype,
            'innerHTML'
          ),
          M = window.Element.prototype.getAttribute,
          x = window.Element.prototype.setAttribute,
          H = window.Element.prototype.removeAttribute,
          R = window.Element.prototype.getAttributeNS,
          P = window.Element.prototype.setAttributeNS,
          F = window.Element.prototype.removeAttributeNS,
          I = window.Element.prototype.insertAdjacentElement,
          z = window.Element.prototype.insertAdjacentHTML,
          U = window.Element.prototype.prepend,
          W = window.Element.prototype.append,
          q = window.Element.prototype.before,
          B = window.Element.prototype.after,
          $ = window.Element.prototype.replaceWith,
          V = window.Element.prototype.remove,
          X = window.HTMLElement,
          G = Object.getOwnPropertyDescriptor(
            window.HTMLElement.prototype,
            'innerHTML'
          ),
          J = window.HTMLElement.prototype.insertAdjacentElement,
          K = window.HTMLElement.prototype.insertAdjacentHTML,
          Q = new (function () {})();
        function Y(t, e, o) {
          function i(e) {
            return function (o) {
              for (var i = [], r = 0; r < arguments.length; ++r)
                i[r] = arguments[r];
              r = [];
              for (var a = [], c = 0; c < i.length; c++) {
                var l = i[c];
                if (
                  (l instanceof Element && n(l) && a.push(l),
                  l instanceof DocumentFragment)
                )
                  for (l = l.firstChild; l; l = l.nextSibling) r.push(l);
                else r.push(l);
              }
              for (e.apply(this, i), i = 0; i < a.length; i++) u(t, a[i]);
              if (n(this))
                for (i = 0; i < r.length; i++)
                  (a = r[i]) instanceof Element && s(t, a);
            };
          }
          void 0 !== o.h && (e.prepend = i(o.h)),
            void 0 !== o.append && (e.append = i(o.append));
        }
        var Z,
          tt = window.customElements;
        if (
          !tt ||
          tt.forcePolyfill ||
          'function' != typeof tt.define ||
          'function' != typeof tt.get
        ) {
          var et = new a();
          (Z = et),
            (window.HTMLElement = (function () {
              function t() {
                var t = this.constructor,
                  e = Z.g.get(t);
                if (!e)
                  throw Error(
                    'The custom element being constructed was not registered with `customElements`.'
                  );
                var n = e.constructionStack;
                if (0 === n.length)
                  return (
                    (n = g.call(document, e.localName)),
                    Object.setPrototypeOf(n, t.prototype),
                    (n.__CE_state = 1),
                    (n.__CE_definition = e),
                    l(Z, n),
                    n
                  );
                var o = n[(e = n.length - 1)];
                if (o === Q)
                  throw Error(
                    'The HTMLElement constructor was either called reentrantly for this constructor or called multiple times.'
                  );
                return (
                  (n[e] = Q), Object.setPrototypeOf(o, t.prototype), l(Z, o), o
                );
              }
              return (
                (t.prototype = X.prototype),
                Object.defineProperty(t.prototype, 'constructor', {
                  writable: !0,
                  configurable: !0,
                  enumerable: !1,
                  value: t,
                }),
                t
              );
            })()),
            (function () {
              var t = et;
              r(Document.prototype, 'createElement', function (e) {
                if (this.__CE_hasRegistry) {
                  var n = t.a.get(e);
                  if (n) return new n.constructorFunction();
                }
                return (e = g.call(this, e)), l(t, e), e;
              }),
                r(Document.prototype, 'importNode', function (e, n) {
                  return (
                    (e = w.call(this, e, !!n)),
                    this.__CE_hasRegistry ? p(t, e) : c(t, e),
                    e
                  );
                }),
                r(Document.prototype, 'createElementNS', function (e, n) {
                  if (
                    this.__CE_hasRegistry &&
                    (null === e || 'http://www.w3.org/1999/xhtml' === e)
                  ) {
                    var o = t.a.get(n);
                    if (o) return new o.constructorFunction();
                  }
                  return (e = v.call(this, e, n)), l(t, e), e;
                }),
                Y(t, Document.prototype, { h: E, append: _ });
            })(),
            Y(et, DocumentFragment.prototype, { h: C, append: N }),
            (function () {
              function t(t, o) {
                Object.defineProperty(t, 'textContent', {
                  enumerable: o.enumerable,
                  configurable: !0,
                  get: o.get,
                  set: function (t) {
                    if (this.nodeType === Node.TEXT_NODE) o.set.call(this, t);
                    else {
                      var i = void 0;
                      if (this.firstChild) {
                        var r = this.childNodes,
                          a = r.length;
                        if (0 < a && n(this)) {
                          i = Array(a);
                          for (var c = 0; c < a; c++) i[c] = r[c];
                        }
                      }
                      if ((o.set.call(this, t), i))
                        for (t = 0; t < i.length; t++) u(e, i[t]);
                    }
                  },
                });
              }
              var e = et;
              r(Node.prototype, 'insertBefore', function (t, o) {
                if (t instanceof DocumentFragment) {
                  var i = Array.prototype.slice.apply(t.childNodes);
                  if (((t = k.call(this, t, o)), n(this)))
                    for (o = 0; o < i.length; o++) s(e, i[o]);
                  return t;
                }
                return (
                  (i = n(t)),
                  (o = k.call(this, t, o)),
                  i && u(e, t),
                  n(this) && s(e, t),
                  o
                );
              }),
                r(Node.prototype, 'appendChild', function (t) {
                  if (t instanceof DocumentFragment) {
                    var o = Array.prototype.slice.apply(t.childNodes);
                    if (((t = T.call(this, t)), n(this)))
                      for (var i = 0; i < o.length; i++) s(e, o[i]);
                    return t;
                  }
                  return (
                    (o = n(t)),
                    (i = T.call(this, t)),
                    o && u(e, t),
                    n(this) && s(e, t),
                    i
                  );
                }),
                r(Node.prototype, 'cloneNode', function (t) {
                  return (
                    (t = S.call(this, !!t)),
                    this.ownerDocument.__CE_hasRegistry ? p(e, t) : c(e, t),
                    t
                  );
                }),
                r(Node.prototype, 'removeChild', function (t) {
                  var o = n(t),
                    i = D.call(this, t);
                  return o && u(e, t), i;
                }),
                r(Node.prototype, 'replaceChild', function (t, o) {
                  if (t instanceof DocumentFragment) {
                    var i = Array.prototype.slice.apply(t.childNodes);
                    if (((t = A.call(this, t, o)), n(this)))
                      for (u(e, o), o = 0; o < i.length; o++) s(e, i[o]);
                    return t;
                  }
                  i = n(t);
                  var r = A.call(this, t, o),
                    a = n(this);
                  return a && u(e, o), i && u(e, t), a && s(e, t), r;
                }),
                O && O.get
                  ? t(Node.prototype, O)
                  : (function (t, e) {
                      (t.b = !0), t.c.push(e);
                    })(e, function (e) {
                      t(e, {
                        enumerable: !0,
                        configurable: !0,
                        get: function () {
                          for (
                            var t = [], e = 0;
                            e < this.childNodes.length;
                            e++
                          ) {
                            var n = this.childNodes[e];
                            n.nodeType !== Node.COMMENT_NODE &&
                              t.push(n.textContent);
                          }
                          return t.join('');
                        },
                        set: function (t) {
                          for (; this.firstChild; )
                            D.call(this, this.firstChild);
                          null != t &&
                            '' !== t &&
                            T.call(this, document.createTextNode(t));
                        },
                      });
                    });
            })(),
            (function () {
              function t(t, e) {
                Object.defineProperty(t, 'innerHTML', {
                  enumerable: e.enumerable,
                  configurable: !0,
                  get: e.get,
                  set: function (t) {
                    var o = this,
                      r = void 0;
                    if (
                      (n(this) &&
                        ((r = []),
                        i(this, function (t) {
                          t !== o && r.push(t);
                        })),
                      e.set.call(this, t),
                      r)
                    )
                      for (var l = 0; l < r.length; l++) {
                        var s = r[l];
                        1 === s.__CE_state && a.disconnectedCallback(s);
                      }
                    return (
                      this.ownerDocument.__CE_hasRegistry
                        ? p(a, this)
                        : c(a, this),
                      t
                    );
                  },
                });
              }
              function e(t, e) {
                r(t, 'insertAdjacentElement', function (t, o) {
                  var i = n(o);
                  return (
                    (t = e.call(this, t, o)), i && u(a, o), n(t) && s(a, o), t
                  );
                });
              }
              function o(t, e) {
                function n(t, e) {
                  for (var n = []; t !== e; t = t.nextSibling) n.push(t);
                  for (e = 0; e < n.length; e++) p(a, n[e]);
                }
                r(t, 'insertAdjacentHTML', function (t, o) {
                  if ('beforebegin' === (t = t.toLowerCase())) {
                    var i = this.previousSibling;
                    e.call(this, t, o),
                      n(i || this.parentNode.firstChild, this);
                  } else if ('afterbegin' === t)
                    (i = this.firstChild),
                      e.call(this, t, o),
                      n(this.firstChild, i);
                  else if ('beforeend' === t)
                    (i = this.lastChild),
                      e.call(this, t, o),
                      n(i || this.firstChild, null);
                  else {
                    if ('afterend' !== t)
                      throw new SyntaxError(
                        'The value provided (' +
                          String(t) +
                          ") is not one of 'beforebegin', 'afterbegin', 'beforeend', or 'afterend'."
                      );
                    (i = this.nextSibling),
                      e.call(this, t, o),
                      n(this.nextSibling, i);
                  }
                });
              }
              var a = et;
              j &&
                r(Element.prototype, 'attachShadow', function (t) {
                  t = j.call(this, t);
                  var e = a;
                  if (e.b && !t.__CE_patched) {
                    t.__CE_patched = !0;
                    for (var n = 0; n < e.c.length; n++) e.c[n](t);
                  }
                  return (this.__CE_shadowRoot = t);
                }),
                L && L.get
                  ? t(Element.prototype, L)
                  : G && G.get
                  ? t(HTMLElement.prototype, G)
                  : (function (t, e) {
                      (t.b = !0), t.f.push(e);
                    })(a, function (e) {
                      t(e, {
                        enumerable: !0,
                        configurable: !0,
                        get: function () {
                          return S.call(this, !0).innerHTML;
                        },
                        set: function (t) {
                          var e = 'template' === this.localName,
                            n = e ? this.content : this,
                            o = v.call(
                              document,
                              this.namespaceURI,
                              this.localName
                            );
                          for (o.innerHTML = t; 0 < n.childNodes.length; )
                            D.call(n, n.childNodes[0]);
                          for (t = e ? o.content : o; 0 < t.childNodes.length; )
                            T.call(n, t.childNodes[0]);
                        },
                      });
                    }),
                r(Element.prototype, 'setAttribute', function (t, e) {
                  if (1 !== this.__CE_state) return x.call(this, t, e);
                  var n = M.call(this, t);
                  x.call(this, t, e),
                    (e = M.call(this, t)),
                    a.attributeChangedCallback(this, t, n, e, null);
                }),
                r(Element.prototype, 'setAttributeNS', function (t, e, n) {
                  if (1 !== this.__CE_state) return P.call(this, t, e, n);
                  var o = R.call(this, t, e);
                  P.call(this, t, e, n),
                    (n = R.call(this, t, e)),
                    a.attributeChangedCallback(this, e, o, n, t);
                }),
                r(Element.prototype, 'removeAttribute', function (t) {
                  if (1 !== this.__CE_state) return H.call(this, t);
                  var e = M.call(this, t);
                  H.call(this, t),
                    null !== e &&
                      a.attributeChangedCallback(this, t, e, null, null);
                }),
                r(Element.prototype, 'removeAttributeNS', function (t, e) {
                  if (1 !== this.__CE_state) return F.call(this, t, e);
                  var n = R.call(this, t, e);
                  F.call(this, t, e);
                  var o = R.call(this, t, e);
                  n !== o && a.attributeChangedCallback(this, e, n, o, t);
                }),
                J
                  ? e(HTMLElement.prototype, J)
                  : I
                  ? e(Element.prototype, I)
                  : console.warn(
                      'Custom Elements: `Element#insertAdjacentElement` was not patched.'
                    ),
                K
                  ? o(HTMLElement.prototype, K)
                  : z
                  ? o(Element.prototype, z)
                  : console.warn(
                      'Custom Elements: `Element#insertAdjacentHTML` was not patched.'
                    ),
                Y(a, Element.prototype, { h: U, append: W }),
                (function (t) {
                  function e(e) {
                    return function (o) {
                      for (var i = [], r = 0; r < arguments.length; ++r)
                        i[r] = arguments[r];
                      r = [];
                      for (var a = [], c = 0; c < i.length; c++) {
                        var l = i[c];
                        if (
                          (l instanceof Element && n(l) && a.push(l),
                          l instanceof DocumentFragment)
                        )
                          for (l = l.firstChild; l; l = l.nextSibling)
                            r.push(l);
                        else r.push(l);
                      }
                      for (e.apply(this, i), i = 0; i < a.length; i++)
                        u(t, a[i]);
                      if (n(this))
                        for (i = 0; i < r.length; i++)
                          (a = r[i]) instanceof Element && s(t, a);
                    };
                  }
                  var o = Element.prototype;
                  void 0 !== q && (o.before = e(q)),
                    void 0 !== q && (o.after = e(B)),
                    void 0 !== $ &&
                      r(o, 'replaceWith', function (e) {
                        for (var o = [], i = 0; i < arguments.length; ++i)
                          o[i] = arguments[i];
                        i = [];
                        for (var r = [], a = 0; a < o.length; a++) {
                          var c = o[a];
                          if (
                            (c instanceof Element && n(c) && r.push(c),
                            c instanceof DocumentFragment)
                          )
                            for (c = c.firstChild; c; c = c.nextSibling)
                              i.push(c);
                          else i.push(c);
                        }
                        for (
                          a = n(this), $.apply(this, o), o = 0;
                          o < r.length;
                          o++
                        )
                          u(t, r[o]);
                        if (a)
                          for (u(t, this), o = 0; o < i.length; o++)
                            (r = i[o]) instanceof Element && s(t, r);
                      }),
                    void 0 !== V &&
                      r(o, 'remove', function () {
                        var e = n(this);
                        V.call(this), e && u(t, this);
                      });
                })(a);
            })(),
            (document.__CE_hasRegistry = !0);
          var nt = new y(et);
          Object.defineProperty(window, 'customElements', {
            configurable: !0,
            enumerable: !0,
            value: nt,
          });
        }
      }.call(self),
        'string' != typeof document.baseURI &&
          Object.defineProperty(Document.prototype, 'baseURI', {
            enumerable: !0,
            configurable: !0,
            get: function () {
              var t = document.querySelector('base');
              return t && t.href ? t.href : document.URL;
            },
          }),
        'function' != typeof window.CustomEvent &&
          ((window.CustomEvent = function (t, e) {
            e = e || { bubbles: !1, cancelable: !1, detail: void 0 };
            var n = document.createEvent('CustomEvent');
            return n.initCustomEvent(t, e.bubbles, e.cancelable, e.detail), n;
          }),
          (window.CustomEvent.prototype = window.Event.prototype)),
        (t = Event.prototype),
        (e = document),
        (n = window),
        t.composedPath ||
          (t.composedPath = function () {
            if (this.path) return this.path;
            var t = this.target;
            for (this.path = []; null !== t.parentNode; )
              this.path.push(t), (t = t.parentNode);
            return this.path.push(e, n), this.path;
          }),
        'function' != typeof (o = window.Element.prototype).matches &&
          (o.matches =
            o.msMatchesSelector ||
            o.mozMatchesSelector ||
            o.webkitMatchesSelector ||
            function (t) {
              t = (this.document || this.ownerDocument).querySelectorAll(t);
              for (var e = 0; t[e] && t[e] !== this; ) ++e;
              return !!t[e];
            }),
        'function' != typeof o.closest &&
          (o.closest = function (t) {
            for (var e = this; e && 1 === e.nodeType; ) {
              if (e.matches(t)) return e;
              e = e.parentNode;
            }
            return null;
          }),
        (function (t) {
          function e(t) {
            return (t = n(t)) && 11 === t.nodeType ? e(t.host) : t;
          }
          function n(t) {
            return t && t.parentNode ? n(t.parentNode) : t;
          }
          'function' != typeof t.getRootNode &&
            (t.getRootNode = function (t) {
              return t && t.composed ? e(this) : n(this);
            });
        })(Element.prototype),
        (function (t) {
          'isConnected' in t ||
            Object.defineProperty(t, 'isConnected', {
              configurable: !0,
              enumerable: !0,
              get: function () {
                var t = this.getRootNode({ composed: !0 });
                return t && 9 === t.nodeType;
              },
            });
        })(Element.prototype),
        [
          Element.prototype,
          CharacterData.prototype,
          DocumentType.prototype,
        ].forEach(function (t) {
          t.hasOwnProperty('remove') ||
            Object.defineProperty(t, 'remove', {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              value: function () {
                null !== this.parentNode && this.parentNode.removeChild(this);
              },
            });
        }),
        'classList' in (i = Element.prototype) ||
          Object.defineProperty(i, 'classList', {
            get: function () {
              var t = this,
                e = (t.getAttribute('class') || '')
                  .replace(/^\s+|\s$/g, '')
                  .split(/\s+/g);
              function n() {
                e.length > 0
                  ? t.setAttribute('class', e.join(' '))
                  : t.removeAttribute('class');
              }
              return (
                '' === e[0] && e.splice(0, 1),
                (e.toggle = function (t, o) {
                  void 0 !== o
                    ? o
                      ? e.add(t)
                      : e.remove(t)
                    : -1 !== e.indexOf(t)
                    ? e.splice(e.indexOf(t), 1)
                    : e.push(t),
                    n();
                }),
                (e.add = function () {
                  for (
                    var t = [].slice.call(arguments), o = 0, i = t.length;
                    o < i;
                    o++
                  )
                    -1 === e.indexOf(t[o]) && e.push(t[o]);
                  n();
                }),
                (e.remove = function () {
                  for (
                    var t = [].slice.call(arguments), o = 0, i = t.length;
                    o < i;
                    o++
                  )
                    -1 !== e.indexOf(t[o]) && e.splice(e.indexOf(t[o]), 1);
                  n();
                }),
                (e.item = function (t) {
                  return e[t];
                }),
                (e.contains = function (t) {
                  return -1 !== e.indexOf(t);
                }),
                (e.replace = function (t, o) {
                  -1 !== e.indexOf(t) && e.splice(e.indexOf(t), 1, o), n();
                }),
                (e.value = t.getAttribute('class') || ''),
                e
              );
            },
          }),
        (function (t) {
          try {
            document.body.classList.add();
          } catch (o) {
            var e = t.add,
              n = t.remove;
            (t.add = function () {
              for (var t = 0; t < arguments.length; t++)
                e.call(this, arguments[t]);
            }),
              (t.remove = function () {
                for (var t = 0; t < arguments.length; t++)
                  n.call(this, arguments[t]);
              });
          }
        })(DOMTokenList.prototype));
    },
  },
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oaWRkZW4tcGFydHMtZGVtby8uL25vZGVfbW9kdWxlcy9AdmVydGV4dmlzL3ZpZXdlci9kaXN0L2VzbS1lczUvZG9tLTQwNjFjZWJhLmpzIiwid2VicGFjazovL2hpZGRlbi1wYXJ0cy1kZW1vLy4vbm9kZV9tb2R1bGVzL0B2ZXJ0ZXh2aXMvdmlld2VyL2Rpc3QvZXNtL3BvbHlmaWxscy9kb20uanMiXSwibmFtZXMiOlsiYiIsImMiLCJkIiwiYSIsImUiLCJhYSIsIlNldCIsInNwbGl0IiwiZyIsImhhcyIsInRlc3QiLCJsIiwiaXNDb25uZWN0ZWQiLCJfX0NFX2lzSW1wb3J0RG9jdW1lbnQiLCJEb2N1bWVudCIsInBhcmVudE5vZGUiLCJ3aW5kb3ciLCJTaGFkb3dSb290IiwiaG9zdCIsIm4iLCJuZXh0U2libGluZyIsInAiLCJub2RlVHlwZSIsIk5vZGUiLCJFTEVNRU5UX05PREUiLCJmIiwibG9jYWxOYW1lIiwiZ2V0QXR0cmlidXRlIiwiaW1wb3J0IiwiYWRkIiwiZmlyc3RDaGlsZCIsIl9fQ0Vfc2hhZG93Um9vdCIsInIiLCJ1IiwidGhpcyIsIk1hcCIsInYiLCJ3IiwiX19DRV9wYXRjaGVkIiwibGVuZ3RoIiwieCIsInB1c2giLCJfX0NFX3N0YXRlIiwiY29ubmVjdGVkQ2FsbGJhY2siLCJ5IiwieiIsImRpc2Nvbm5lY3RlZENhbGxiYWNrIiwiQSIsImkiLCJfX0NFX2hhc1JlZ2lzdHJ5IiwicmVhZHlTdGF0ZSIsIl9fQ0VfZG9jdW1lbnRMb2FkSGFuZGxlZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJkZWxldGUiLCJvd25lckRvY3VtZW50IiwiZGVmYXVsdFZpZXciLCJnZXQiLCJjb25zdHJ1Y3Rpb25TdGFjayIsImNvbnN0cnVjdG9yRnVuY3Rpb24iLCJFcnJvciIsInBvcCIsInQiLCJfX0NFX2RlZmluaXRpb24iLCJhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2siLCJvYnNlcnZlZEF0dHJpYnV0ZXMiLCJCIiwiZG9jdW1lbnQiLCJNdXRhdGlvbk9ic2VydmVyIiwiYmluZCIsIm9ic2VydmUiLCJjaGlsZExpc3QiLCJzdWJ0cmVlIiwiQyIsImRpc2Nvbm5lY3QiLCJlYSIsIlByb21pc2UiLCJEIiwiRSIsImoiLCJvIiwicHJvdG90eXBlIiwiY2FsbCIsImluZGV4T2YiLCJhZGRlZE5vZGVzIiwiRnVuY3Rpb24iLCJUeXBlRXJyb3IiLCJTeW50YXhFcnJvciIsIk9iamVjdCIsImsiLCJoIiwibSIsInEiLCJhZG9wdGVkQ2FsbGJhY2siLCJzZXQiLCJiYSIsInNoaWZ0IiwiZmEiLCJyZWplY3QiLCJzb21lIiwicyIsIkN1c3RvbUVsZW1lbnRSZWdpc3RyeSIsImRlZmluZSIsInVwZ3JhZGUiLCJ3aGVuRGVmaW5lZCIsInBvbHlmaWxsV3JhcEZsdXNoQ2FsbGJhY2siLCJGIiwiY3JlYXRlRWxlbWVudCIsIkciLCJjcmVhdGVFbGVtZW50TlMiLCJoYSIsImltcG9ydE5vZGUiLCJpYSIsInByZXBlbmQiLCJqYSIsImFwcGVuZCIsImthIiwiRG9jdW1lbnRGcmFnbWVudCIsImxhIiwiSCIsImNsb25lTm9kZSIsIkkiLCJhcHBlbmRDaGlsZCIsIkoiLCJpbnNlcnRCZWZvcmUiLCJLIiwicmVtb3ZlQ2hpbGQiLCJMIiwicmVwbGFjZUNoaWxkIiwiTSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsIk4iLCJFbGVtZW50IiwiYXR0YWNoU2hhZG93IiwiTyIsIlAiLCJRIiwic2V0QXR0cmlidXRlIiwiUiIsInJlbW92ZUF0dHJpYnV0ZSIsIlMiLCJnZXRBdHRyaWJ1dGVOUyIsIlQiLCJzZXRBdHRyaWJ1dGVOUyIsIlUiLCJyZW1vdmVBdHRyaWJ1dGVOUyIsIm1hIiwiaW5zZXJ0QWRqYWNlbnRFbGVtZW50IiwibmEiLCJpbnNlcnRBZGphY2VudEhUTUwiLCJvYSIsInBhIiwiViIsImJlZm9yZSIsInFhIiwiYWZ0ZXIiLCJyYSIsInJlcGxhY2VXaXRoIiwic2EiLCJyZW1vdmUiLCJ0YSIsIkhUTUxFbGVtZW50IiwiVyIsInVhIiwidmEiLCJ3YSIsIlkiLCJhcmd1bWVudHMiLCJhcHBseSIsIloiLCJjdXN0b21FbGVtZW50cyIsImZvcmNlUG9seWZpbGwiLCJYIiwiY29uc3RydWN0b3IiLCJzZXRQcm90b3R5cGVPZiIsImRlZmluZVByb3BlcnR5Iiwid3JpdGFibGUiLCJjb25maWd1cmFibGUiLCJlbnVtZXJhYmxlIiwidmFsdWUiLCJ5YSIsIlRFWFRfTk9ERSIsImNoaWxkTm9kZXMiLCJBcnJheSIsInNsaWNlIiwiY2EiLCJDT01NRU5UX05PREUiLCJ0ZXh0Q29udGVudCIsImpvaW4iLCJjcmVhdGVUZXh0Tm9kZSIsInphIiwidG9Mb3dlckNhc2UiLCJwcmV2aW91c1NpYmxpbmciLCJsYXN0Q2hpbGQiLCJTdHJpbmciLCJkYSIsImlubmVySFRNTCIsImNvbnRlbnQiLCJuYW1lc3BhY2VVUkkiLCJjb25zb2xlIiwid2FybiIsIkFhIiwiQmEiLCJzZWxmIiwiYmFzZVVSSSIsInF1ZXJ5U2VsZWN0b3IiLCJocmVmIiwiVVJMIiwiQ3VzdG9tRXZlbnQiLCJidWJibGVzIiwiY2FuY2VsYWJsZSIsImRldGFpbCIsImNyZWF0ZUV2ZW50IiwiaW5pdEN1c3RvbUV2ZW50IiwiRXZlbnQiLCJjb21wb3NlZFBhdGgiLCJwYXRoIiwidGFyZ2V0IiwibWF0Y2hlcyIsIm1zTWF0Y2hlc1NlbGVjdG9yIiwibW96TWF0Y2hlc1NlbGVjdG9yIiwid2Via2l0TWF0Y2hlc1NlbGVjdG9yIiwicXVlcnlTZWxlY3RvckFsbCIsImNsb3Nlc3QiLCJnZXRSb290Tm9kZSIsImNvbXBvc2VkIiwiQ2hhcmFjdGVyRGF0YSIsIkRvY3VtZW50VHlwZSIsImZvckVhY2giLCJoYXNPd25Qcm9wZXJ0eSIsInJlcGxhY2UiLCJzcGxpY2UiLCJ0b2dnbGUiLCJpdGVtIiwiY29udGFpbnMiLCJib2R5IiwiY2xhc3NMaXN0IiwiRE9NVG9rZW5MaXN0Il0sIm1hcHBpbmdzIjoiO2tHQTBhQSxJQUFXQSxFQUFHQyxFQUFHQyxFQVFOQyxFQXFCQUMsR0FqY1gsV0FDSSxJQUFJQyxFQUFLLElBQUlD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QUlhLEVBQUVxQixRQUFROUUsSUFBSXlELEVBQUV5SyxPQUFPekssRUFBRXFCLFFBQVE5RSxHQUFHLEVBQUU0QyxHQUFHN0IsS0FBSzBDLEVBQUVxSCxNQUFNOUssRUFBRXVCLGFBQWEsVUFBVSxHQUFHa0MsS0FLbjBCLFNBQVU3RCxHQUFHLElBQUlrRSxTQUFTd0ssS0FBS0MsVUFBVTlNLE1BQU0sTUFBTXpCLEdBQUcsSUFBSUgsRUFBRUQsRUFBRTZCLElBQUkzQixFQUFFRixFQUFFOEosT0FBTzlKLEVBQUU2QixJQUFJLFdBQVcsSUFBSSxJQUFJMUIsRUFBRSxFQUFFQSxFQUFFbUssVUFBVS9ILE9BQU9wQyxJQUFJRixFQUFFZ0YsS0FBSy9DLEtBQUtvSSxVQUFVbkssS0FBS0gsRUFBRThKLE9BQU8sV0FBVyxJQUFJLElBQUkzSixFQUFFLEVBQUVBLEVBQUVtSyxVQUFVL0gsT0FBT3BDLElBQUlELEVBQUUrRSxLQUFLL0MsS0FBS29JLFVBQVVuSyxNQUEzTyxDQUFtUHlPLGFBQWE1SiIsImZpbGUiOiJwb2x5ZmlsbHMtZG9tLjAwMDBjMGI5NzQzNTMwY2QyOGZiLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIVxuICogQ29weXJpZ2h0IChjKSAyMDIxIFZlcnRleCBTb2Z0d2FyZSBMTEMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKi9cbi8qXG4gU3RlbmNpbCBDbGllbnQgUGF0Y2ggdjEuMTcuMyB8IE1JVCBMaWNlbnNlZCB8IGh0dHBzOi8vc3RlbmNpbGpzLmNvbVxuICovXG4oZnVuY3Rpb24gKCkge1xuICAgIHZhciBhYSA9IG5ldyBTZXQoXCJhbm5vdGF0aW9uLXhtbCBjb2xvci1wcm9maWxlIGZvbnQtZmFjZSBmb250LWZhY2Utc3JjIGZvbnQtZmFjZS11cmkgZm9udC1mYWNlLWZvcm1hdCBmb250LWZhY2UtbmFtZSBtaXNzaW5nLWdseXBoXCIuc3BsaXQoXCIgXCIpKTtcbiAgICBmdW5jdGlvbiBnKGEpIHsgdmFyIGIgPSBhYS5oYXMoYSk7IGEgPSAvXlthLXpdWy4wLTlfYS16XSotW1xcLS4wLTlfYS16XSokLy50ZXN0KGEpOyByZXR1cm4gIWIgJiYgYTsgfVxuICAgIGZ1bmN0aW9uIGwoYSkgeyB2YXIgYiA9IGEuaXNDb25uZWN0ZWQ7IGlmICh2b2lkIDAgIT09IGIpXG4gICAgICAgIHJldHVybiBiOyBmb3IgKDsgYSAmJiAhKGEuX19DRV9pc0ltcG9ydERvY3VtZW50IHx8IGEgaW5zdGFuY2VvZiBEb2N1bWVudCk7KVxuICAgICAgICBhID0gYS5wYXJlbnROb2RlIHx8ICh3aW5kb3cuU2hhZG93Um9vdCAmJiBhIGluc3RhbmNlb2YgU2hhZG93Um9vdCA/IGEuaG9zdCA6IHZvaWQgMCk7IHJldHVybiAhKCFhIHx8ICEoYS5fX0NFX2lzSW1wb3J0RG9jdW1lbnQgfHwgYSBpbnN0YW5jZW9mIERvY3VtZW50KSk7IH1cbiAgICBmdW5jdGlvbiBuKGEsIGIpIHsgZm9yICg7IGIgJiYgYiAhPT0gYSAmJiAhYi5uZXh0U2libGluZzspXG4gICAgICAgIGIgPSBiLnBhcmVudE5vZGU7IHJldHVybiBiICYmIGIgIT09IGEgPyBiLm5leHRTaWJsaW5nIDogbnVsbDsgfVxuICAgIGZ1bmN0aW9uIHAoYSwgYiwgZCkgeyBkID0gdm9pZCAwID09PSBkID8gbmV3IFNldCA6IGQ7IGZvciAodmFyIGMgPSBhOyBjOykge1xuICAgICAgICBpZiAoYy5ub2RlVHlwZSA9PT0gTm9kZS5FTEVNRU5UX05PREUpIHtcbiAgICAgICAgICAgIHZhciBlID0gYztcbiAgICAgICAgICAgIGIoZSk7XG4gICAgICAgICAgICB2YXIgZiA9IGUubG9jYWxOYW1lO1xuICAgICAgICAgICAgaWYgKFwibGlua1wiID09PSBmICYmIFwiaW1wb3J0XCIgPT09IGUuZ2V0QXR0cmlidXRlKFwicmVsXCIpKSB7XG4gICAgICAgICAgICAgICAgYyA9IGUuaW1wb3J0O1xuICAgICAgICAgICAgICAgIGlmIChjIGluc3RhbmNlb2YgTm9kZSAmJiAhZC5oYXMoYykpXG4gICAgICAgICAgICAgICAgICAgIGZvciAoZC5hZGQoYyksIGMgPSBjLmZpcnN0Q2hpbGQ7IGM7IGMgPSBjLm5leHRTaWJsaW5nKVxuICAgICAgICAgICAgICAgICAgICAgICAgcChjLCBiLCBkKTtcbiAgICAgICAgICAgICAgICBjID0gbihhLCBlKTtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKFwidGVtcGxhdGVcIiA9PT0gZikge1xuICAgICAgICAgICAgICAgIGMgPSBuKGEsIGUpO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGUgPSBlLl9fQ0Vfc2hhZG93Um9vdClcbiAgICAgICAgICAgICAgICBmb3IgKGUgPSBlLmZpcnN0Q2hpbGQ7IGU7IGUgPSBlLm5leHRTaWJsaW5nKVxuICAgICAgICAgICAgICAgICAgICBwKGUsIGIsIGQpO1xuICAgICAgICB9XG4gICAgICAgIGMgPSBjLmZpcnN0Q2hpbGQgPyBjLmZpcnN0Q2hpbGQgOiBuKGEsIGMpO1xuICAgIH0gfVxuICAgIGZ1bmN0aW9uIHIoYSwgYiwgZCkgeyBhW2JdID0gZDsgfVxuICAgIGZ1bmN0aW9uIHUoKSB7IHRoaXMuYSA9IG5ldyBNYXA7IHRoaXMuZyA9IG5ldyBNYXA7IHRoaXMuYyA9IFtdOyB0aGlzLmYgPSBbXTsgdGhpcy5iID0gITE7IH1cbiAgICBmdW5jdGlvbiBiYShhLCBiLCBkKSB7IGEuYS5zZXQoYiwgZCk7IGEuZy5zZXQoZC5jb25zdHJ1Y3RvckZ1bmN0aW9uLCBkKTsgfVxuICAgIGZ1bmN0aW9uIGNhKGEsIGIpIHsgYS5iID0gITA7IGEuYy5wdXNoKGIpOyB9XG4gICAgZnVuY3Rpb24gZGEoYSwgYikgeyBhLmIgPSAhMDsgYS5mLnB1c2goYik7IH1cbiAgICBmdW5jdGlvbiB2KGEsIGIpIHsgYS5iICYmIHAoYiwgZnVuY3Rpb24gKGIpIHsgcmV0dXJuIHcoYSwgYik7IH0pOyB9XG4gICAgZnVuY3Rpb24gdyhhLCBiKSB7IGlmIChhLmIgJiYgIWIuX19DRV9wYXRjaGVkKSB7XG4gICAgICAgIGIuX19DRV9wYXRjaGVkID0gITA7XG4gICAgICAgIGZvciAodmFyIGQgPSAwOyBkIDwgYS5jLmxlbmd0aDsgZCsrKVxuICAgICAgICAgICAgYS5jW2RdKGIpO1xuICAgICAgICBmb3IgKGQgPSAwOyBkIDwgYS5mLmxlbmd0aDsgZCsrKVxuICAgICAgICAgICAgYS5mW2RdKGIpO1xuICAgIH0gfVxuICAgIGZ1bmN0aW9uIHgoYSwgYikgeyB2YXIgZCA9IFtdOyBwKGIsIGZ1bmN0aW9uIChiKSB7IHJldHVybiBkLnB1c2goYik7IH0pOyBmb3IgKGIgPSAwOyBiIDwgZC5sZW5ndGg7IGIrKykge1xuICAgICAgICB2YXIgYyA9IGRbYl07XG4gICAgICAgIDEgPT09IGMuX19DRV9zdGF0ZSA/IGEuY29ubmVjdGVkQ2FsbGJhY2soYykgOiB5KGEsIGMpO1xuICAgIH0gfVxuICAgIGZ1bmN0aW9uIHooYSwgYikgeyB2YXIgZCA9IFtdOyBwKGIsIGZ1bmN0aW9uIChiKSB7IHJldHVybiBkLnB1c2goYik7IH0pOyBmb3IgKGIgPSAwOyBiIDwgZC5sZW5ndGg7IGIrKykge1xuICAgICAgICB2YXIgYyA9IGRbYl07XG4gICAgICAgIDEgPT09IGMuX19DRV9zdGF0ZSAmJiBhLmRpc2Nvbm5lY3RlZENhbGxiYWNrKGMpO1xuICAgIH0gfVxuICAgIGZ1bmN0aW9uIEEoYSwgYiwgZCkge1xuICAgICAgICBkID0gdm9pZCAwID09PSBkID8ge30gOiBkO1xuICAgICAgICB2YXIgYyA9IGQudSB8fCBuZXcgU2V0LCBlID0gZC5pIHx8IGZ1bmN0aW9uIChiKSB7IHJldHVybiB5KGEsIGIpOyB9LCBmID0gW107XG4gICAgICAgIHAoYiwgZnVuY3Rpb24gKGIpIHsgaWYgKFwibGlua1wiID09PSBiLmxvY2FsTmFtZSAmJiBcImltcG9ydFwiID09PSBiLmdldEF0dHJpYnV0ZShcInJlbFwiKSkge1xuICAgICAgICAgICAgdmFyIGQgPSBiLmltcG9ydDtcbiAgICAgICAgICAgIGQgaW5zdGFuY2VvZiBOb2RlICYmIChkLl9fQ0VfaXNJbXBvcnREb2N1bWVudCA9ICEwLCBkLl9fQ0VfaGFzUmVnaXN0cnkgPSAhMCk7XG4gICAgICAgICAgICBkICYmIFwiY29tcGxldGVcIiA9PT0gZC5yZWFkeVN0YXRlID8gZC5fX0NFX2RvY3VtZW50TG9hZEhhbmRsZWQgPSAhMCA6IGIuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgZnVuY3Rpb24gKCkgeyB2YXIgZCA9IGIuaW1wb3J0OyBpZiAoIWQuX19DRV9kb2N1bWVudExvYWRIYW5kbGVkKSB7XG4gICAgICAgICAgICAgICAgZC5fX0NFX2RvY3VtZW50TG9hZEhhbmRsZWQgPSAhMDtcbiAgICAgICAgICAgICAgICB2YXIgZiA9IG5ldyBTZXQoYyk7XG4gICAgICAgICAgICAgICAgZi5kZWxldGUoZCk7XG4gICAgICAgICAgICAgICAgQShhLCBkLCB7IHU6IGYsIGk6IGUgfSk7XG4gICAgICAgICAgICB9IH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIGYucHVzaChiKTsgfSwgYyk7XG4gICAgICAgIGlmIChhLmIpXG4gICAgICAgICAgICBmb3IgKGIgPVxuICAgICAgICAgICAgICAgIDA7IGIgPCBmLmxlbmd0aDsgYisrKVxuICAgICAgICAgICAgICAgIHcoYSwgZltiXSk7XG4gICAgICAgIGZvciAoYiA9IDA7IGIgPCBmLmxlbmd0aDsgYisrKVxuICAgICAgICAgICAgZShmW2JdKTtcbiAgICB9XG4gICAgZnVuY3Rpb24geShhLCBiKSB7XG4gICAgICAgIGlmICh2b2lkIDAgPT09IGIuX19DRV9zdGF0ZSkge1xuICAgICAgICAgICAgdmFyIGQgPSBiLm93bmVyRG9jdW1lbnQ7XG4gICAgICAgICAgICBpZiAoZC5kZWZhdWx0VmlldyB8fCBkLl9fQ0VfaXNJbXBvcnREb2N1bWVudCAmJiBkLl9fQ0VfaGFzUmVnaXN0cnkpXG4gICAgICAgICAgICAgICAgaWYgKGQgPSBhLmEuZ2V0KGIubG9jYWxOYW1lKSkge1xuICAgICAgICAgICAgICAgICAgICBkLmNvbnN0cnVjdGlvblN0YWNrLnB1c2goYik7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjID0gZC5jb25zdHJ1Y3RvckZ1bmN0aW9uO1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobmV3IGMgIT09IGIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IEVycm9yKFwiVGhlIGN1c3RvbSBlbGVtZW50IGNvbnN0cnVjdG9yIGRpZCBub3QgcHJvZHVjZSB0aGUgZWxlbWVudCBiZWluZyB1cGdyYWRlZC5cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkLmNvbnN0cnVjdGlvblN0YWNrLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNhdGNoICh0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBiLl9fQ0Vfc3RhdGUgPSAyLCB0O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGIuX19DRV9zdGF0ZSA9IDE7XG4gICAgICAgICAgICAgICAgICAgIGIuX19DRV9kZWZpbml0aW9uID0gZDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGQuYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKVxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChkID0gZC5vYnNlcnZlZEF0dHJpYnV0ZXMsIGMgPSAwOyBjIDwgZC5sZW5ndGg7IGMrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlID0gZFtjXSwgZiA9IGIuZ2V0QXR0cmlidXRlKGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGwgIT09IGYgJiYgYS5hdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2soYiwgZSwgbnVsbCwgZiwgbnVsbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGwoYikgJiYgYS5jb25uZWN0ZWRDYWxsYmFjayhiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgdS5wcm90b3R5cGUuY29ubmVjdGVkQ2FsbGJhY2sgPSBmdW5jdGlvbiAoYSkgeyB2YXIgYiA9IGEuX19DRV9kZWZpbml0aW9uOyBiLmNvbm5lY3RlZENhbGxiYWNrICYmIGIuY29ubmVjdGVkQ2FsbGJhY2suY2FsbChhKTsgfTtcbiAgICB1LnByb3RvdHlwZS5kaXNjb25uZWN0ZWRDYWxsYmFjayA9IGZ1bmN0aW9uIChhKSB7IHZhciBiID0gYS5fX0NFX2RlZmluaXRpb247IGIuZGlzY29ubmVjdGVkQ2FsbGJhY2sgJiYgYi5kaXNjb25uZWN0ZWRDYWxsYmFjay5jYWxsKGEpOyB9O1xuICAgIHUucHJvdG90eXBlLmF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayA9IGZ1bmN0aW9uIChhLCBiLCBkLCBjLCBlKSB7IHZhciBmID0gYS5fX0NFX2RlZmluaXRpb247IGYuYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrICYmIC0xIDwgZi5vYnNlcnZlZEF0dHJpYnV0ZXMuaW5kZXhPZihiKSAmJiBmLmF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjay5jYWxsKGEsIGIsIGQsIGMsIGUpOyB9O1xuICAgIGZ1bmN0aW9uIEIoYSkgeyB2YXIgYiA9IGRvY3VtZW50OyB0aGlzLmMgPSBhOyB0aGlzLmEgPSBiOyB0aGlzLmIgPSB2b2lkIDA7IEEodGhpcy5jLCB0aGlzLmEpOyBcImxvYWRpbmdcIiA9PT0gdGhpcy5hLnJlYWR5U3RhdGUgJiYgKHRoaXMuYiA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKHRoaXMuZi5iaW5kKHRoaXMpKSwgdGhpcy5iLm9ic2VydmUodGhpcy5hLCB7IGNoaWxkTGlzdDogITAsIHN1YnRyZWU6ICEwIH0pKTsgfVxuICAgIGZ1bmN0aW9uIEMoYSkgeyBhLmIgJiYgYS5iLmRpc2Nvbm5lY3QoKTsgfVxuICAgIEIucHJvdG90eXBlLmYgPSBmdW5jdGlvbiAoYSkgeyB2YXIgYiA9IHRoaXMuYS5yZWFkeVN0YXRlOyBcImludGVyYWN0aXZlXCIgIT09IGIgJiYgXCJjb21wbGV0ZVwiICE9PSBiIHx8IEModGhpcyk7IGZvciAoYiA9IDA7IGIgPCBhLmxlbmd0aDsgYisrKVxuICAgICAgICBmb3IgKHZhciBkID0gYVtiXS5hZGRlZE5vZGVzLCBjID0gMDsgYyA8IGQubGVuZ3RoOyBjKyspXG4gICAgICAgICAgICBBKHRoaXMuYywgZFtjXSk7IH07XG4gICAgZnVuY3Rpb24gZWEoKSB7IHZhciBhID0gdGhpczsgdGhpcy5iID0gdGhpcy5hID0gdm9pZCAwOyB0aGlzLmMgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYikgeyBhLmIgPSBiOyBhLmEgJiYgYihhLmEpOyB9KTsgfVxuICAgIGZ1bmN0aW9uIEQoYSkgeyBpZiAoYS5hKVxuICAgICAgICB0aHJvdyBFcnJvcihcIkFscmVhZHkgcmVzb2x2ZWQuXCIpOyBhLmEgPSB2b2lkIDA7IGEuYiAmJiBhLmIodm9pZCAwKTsgfVxuICAgIGZ1bmN0aW9uIEUoYSkgeyB0aGlzLmMgPSAhMTsgdGhpcy5hID0gYTsgdGhpcy5qID0gbmV3IE1hcDsgdGhpcy5mID0gZnVuY3Rpb24gKGIpIHsgcmV0dXJuIGIoKTsgfTsgdGhpcy5iID0gITE7IHRoaXMuZyA9IFtdOyB0aGlzLm8gPSBuZXcgQihhKTsgfVxuICAgIEUucHJvdG90eXBlLmwgPSBmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICB2YXIgZCA9IHRoaXM7XG4gICAgICAgIGlmICghKGIgaW5zdGFuY2VvZiBGdW5jdGlvbikpXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ3VzdG9tIGVsZW1lbnQgY29uc3RydWN0b3JzIG11c3QgYmUgZnVuY3Rpb25zLlwiKTtcbiAgICAgICAgaWYgKCFnKGEpKVxuICAgICAgICAgICAgdGhyb3cgbmV3IFN5bnRheEVycm9yKFwiVGhlIGVsZW1lbnQgbmFtZSAnXCIgKyBhICsgXCInIGlzIG5vdCB2YWxpZC5cIik7XG4gICAgICAgIGlmICh0aGlzLmEuYS5nZXQoYSkpXG4gICAgICAgICAgICB0aHJvdyBFcnJvcihcIkEgY3VzdG9tIGVsZW1lbnQgd2l0aCBuYW1lICdcIiArIGEgKyBcIicgaGFzIGFscmVhZHkgYmVlbiBkZWZpbmVkLlwiKTtcbiAgICAgICAgaWYgKHRoaXMuYylcbiAgICAgICAgICAgIHRocm93IEVycm9yKFwiQSBjdXN0b20gZWxlbWVudCBpcyBhbHJlYWR5IGJlaW5nIGRlZmluZWQuXCIpO1xuICAgICAgICB0aGlzLmMgPSAhMDtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHZhciBjID0gZnVuY3Rpb24gKGIpIHtcbiAgICAgICAgICAgICAgICB2YXIgYSA9IGVbYl07XG4gICAgICAgICAgICAgICAgaWYgKHZvaWQgMCAhPT0gYSAmJiAhKGEgaW5zdGFuY2VvZiBGdW5jdGlvbikpXG4gICAgICAgICAgICAgICAgICAgIHRocm93IEVycm9yKFwiVGhlICdcIiArIGIgKyBcIicgY2FsbGJhY2sgbXVzdCBiZSBhIGZ1bmN0aW9uLlwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gYTtcbiAgICAgICAgICAgIH0sIGUgPSBiLnByb3RvdHlwZTtcbiAgICAgICAgICAgIGlmICghKGUgaW5zdGFuY2VvZiBPYmplY3QpKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJUaGUgY3VzdG9tIGVsZW1lbnQgY29uc3RydWN0b3IncyBwcm90b3R5cGUgaXMgbm90IGFuIG9iamVjdC5cIik7XG4gICAgICAgICAgICB2YXIgZiA9IGMoXCJjb25uZWN0ZWRDYWxsYmFja1wiKTtcbiAgICAgICAgICAgIHZhciB0ID0gYyhcImRpc2Nvbm5lY3RlZENhbGxiYWNrXCIpO1xuICAgICAgICAgICAgdmFyIGsgPSBjKFwiYWRvcHRlZENhbGxiYWNrXCIpO1xuICAgICAgICAgICAgdmFyIGggPSBjKFwiYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrXCIpO1xuICAgICAgICAgICAgdmFyIG0gPSBiLm9ic2VydmVkQXR0cmlidXRlcyB8fCBbXTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAocSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgdGhpcy5jID0gITE7XG4gICAgICAgIH1cbiAgICAgICAgYiA9IHsgbG9jYWxOYW1lOiBhLCBjb25zdHJ1Y3RvckZ1bmN0aW9uOiBiLCBjb25uZWN0ZWRDYWxsYmFjazogZiwgZGlzY29ubmVjdGVkQ2FsbGJhY2s6IHQsIGFkb3B0ZWRDYWxsYmFjazogaywgYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrOiBoLCBvYnNlcnZlZEF0dHJpYnV0ZXM6IG0sIGNvbnN0cnVjdGlvblN0YWNrOiBbXSB9O1xuICAgICAgICBiYSh0aGlzLmEsIGEsIGIpO1xuICAgICAgICB0aGlzLmcucHVzaChiKTtcbiAgICAgICAgdGhpcy5iIHx8ICh0aGlzLmIgPSAhMCwgdGhpcy5mKGZ1bmN0aW9uICgpIHsgcmV0dXJuIGZhKGQpOyB9KSk7XG4gICAgfTtcbiAgICBFLnByb3RvdHlwZS5pID0gZnVuY3Rpb24gKGEpIHsgQSh0aGlzLmEsIGEpOyB9O1xuICAgIGZ1bmN0aW9uIGZhKGEpIHsgaWYgKCExICE9PSBhLmIpIHtcbiAgICAgICAgYS5iID0gITE7XG4gICAgICAgIGZvciAodmFyIGIgPSBhLmcsIGQgPSBbXSwgYyA9IG5ldyBNYXAsIGUgPSAwOyBlIDwgYi5sZW5ndGg7IGUrKylcbiAgICAgICAgICAgIGMuc2V0KGJbZV0ubG9jYWxOYW1lLCBbXSk7XG4gICAgICAgIEEoYS5hLCBkb2N1bWVudCwgeyBpOiBmdW5jdGlvbiAoYikgeyBpZiAodm9pZCAwID09PSBiLl9fQ0Vfc3RhdGUpIHtcbiAgICAgICAgICAgICAgICB2YXIgZSA9IGIubG9jYWxOYW1lLCBmID0gYy5nZXQoZSk7XG4gICAgICAgICAgICAgICAgZiA/IGYucHVzaChiKSA6IGEuYS5hLmdldChlKSAmJiBkLnB1c2goYik7XG4gICAgICAgICAgICB9IH0gfSk7XG4gICAgICAgIGZvciAoZSA9IDA7IGUgPCBkLmxlbmd0aDsgZSsrKVxuICAgICAgICAgICAgeShhLmEsIGRbZV0pO1xuICAgICAgICBmb3IgKDsgMCA8IGIubGVuZ3RoOykge1xuICAgICAgICAgICAgdmFyIGYgPSBiLnNoaWZ0KCk7XG4gICAgICAgICAgICBlID0gZi5sb2NhbE5hbWU7XG4gICAgICAgICAgICBmID0gYy5nZXQoZi5sb2NhbE5hbWUpO1xuICAgICAgICAgICAgZm9yICh2YXIgdCA9IDA7IHQgPCBmLmxlbmd0aDsgdCsrKVxuICAgICAgICAgICAgICAgIHkoYS5hLCBmW3RdKTtcbiAgICAgICAgICAgIChlID0gYS5qLmdldChlKSkgJiYgRChlKTtcbiAgICAgICAgfVxuICAgIH0gfVxuICAgIEUucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIChhKSB7IGlmIChhID0gdGhpcy5hLmEuZ2V0KGEpKVxuICAgICAgICByZXR1cm4gYS5jb25zdHJ1Y3RvckZ1bmN0aW9uOyB9O1xuICAgIEUucHJvdG90eXBlLm0gPSBmdW5jdGlvbiAoYSkgeyBpZiAoIWcoYSkpXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgU3ludGF4RXJyb3IoXCInXCIgKyBhICsgXCInIGlzIG5vdCBhIHZhbGlkIGN1c3RvbSBlbGVtZW50IG5hbWUuXCIpKTsgdmFyIGIgPSB0aGlzLmouZ2V0KGEpOyBpZiAoYilcbiAgICAgICAgcmV0dXJuIGIuYzsgYiA9IG5ldyBlYTsgdGhpcy5qLnNldChhLCBiKTsgdGhpcy5hLmEuZ2V0KGEpICYmICF0aGlzLmcuc29tZShmdW5jdGlvbiAoYikgeyByZXR1cm4gYi5sb2NhbE5hbWUgPT09IGE7IH0pICYmIEQoYik7IHJldHVybiBiLmM7IH07XG4gICAgRS5wcm90b3R5cGUucyA9IGZ1bmN0aW9uIChhKSB7IEModGhpcy5vKTsgdmFyIGIgPSB0aGlzLmY7IHRoaXMuZiA9IGZ1bmN0aW9uIChkKSB7IHJldHVybiBhKGZ1bmN0aW9uICgpIHsgcmV0dXJuIGIoZCk7IH0pOyB9OyB9O1xuICAgIHdpbmRvdy5DdXN0b21FbGVtZW50UmVnaXN0cnkgPSBFO1xuICAgIEUucHJvdG90eXBlLmRlZmluZSA9IEUucHJvdG90eXBlLmw7XG4gICAgRS5wcm90b3R5cGUudXBncmFkZSA9IEUucHJvdG90eXBlLmk7XG4gICAgRS5wcm90b3R5cGUuZ2V0ID0gRS5wcm90b3R5cGUuZ2V0O1xuICAgIEUucHJvdG90eXBlLndoZW5EZWZpbmVkID0gRS5wcm90b3R5cGUubTtcbiAgICBFLnByb3RvdHlwZS5wb2x5ZmlsbFdyYXBGbHVzaENhbGxiYWNrID0gRS5wcm90b3R5cGUucztcbiAgICB2YXIgRiA9IHdpbmRvdy5Eb2N1bWVudC5wcm90b3R5cGUuY3JlYXRlRWxlbWVudCwgRyA9IHdpbmRvdy5Eb2N1bWVudC5wcm90b3R5cGUuY3JlYXRlRWxlbWVudE5TLCBoYSA9IHdpbmRvdy5Eb2N1bWVudC5wcm90b3R5cGUuaW1wb3J0Tm9kZSwgaWEgPSB3aW5kb3cuRG9jdW1lbnQucHJvdG90eXBlLnByZXBlbmQsIGphID0gd2luZG93LkRvY3VtZW50LnByb3RvdHlwZS5hcHBlbmQsIGthID0gd2luZG93LkRvY3VtZW50RnJhZ21lbnQucHJvdG90eXBlLnByZXBlbmQsIGxhID0gd2luZG93LkRvY3VtZW50RnJhZ21lbnQucHJvdG90eXBlLmFwcGVuZCwgSCA9IHdpbmRvdy5Ob2RlLnByb3RvdHlwZS5jbG9uZU5vZGUsIEkgPSB3aW5kb3cuTm9kZS5wcm90b3R5cGUuYXBwZW5kQ2hpbGQsIEogPSB3aW5kb3cuTm9kZS5wcm90b3R5cGUuaW5zZXJ0QmVmb3JlLCBLID0gd2luZG93Lk5vZGUucHJvdG90eXBlLnJlbW92ZUNoaWxkLCBMID0gd2luZG93Lk5vZGUucHJvdG90eXBlLnJlcGxhY2VDaGlsZCwgTSA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iod2luZG93Lk5vZGUucHJvdG90eXBlLCBcInRleHRDb250ZW50XCIpLCBOID0gd2luZG93LkVsZW1lbnQucHJvdG90eXBlLmF0dGFjaFNoYWRvdywgTyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iod2luZG93LkVsZW1lbnQucHJvdG90eXBlLCBcImlubmVySFRNTFwiKSwgUCA9IHdpbmRvdy5FbGVtZW50LnByb3RvdHlwZS5nZXRBdHRyaWJ1dGUsIFEgPSB3aW5kb3cuRWxlbWVudC5wcm90b3R5cGUuc2V0QXR0cmlidXRlLCBSID0gd2luZG93LkVsZW1lbnQucHJvdG90eXBlLnJlbW92ZUF0dHJpYnV0ZSwgUyA9IHdpbmRvdy5FbGVtZW50LnByb3RvdHlwZS5nZXRBdHRyaWJ1dGVOUywgVCA9IHdpbmRvdy5FbGVtZW50LnByb3RvdHlwZS5zZXRBdHRyaWJ1dGVOUywgVSA9IHdpbmRvdy5FbGVtZW50LnByb3RvdHlwZS5yZW1vdmVBdHRyaWJ1dGVOUywgbWEgPSB3aW5kb3cuRWxlbWVudC5wcm90b3R5cGUuaW5zZXJ0QWRqYWNlbnRFbGVtZW50LCBuYSA9IHdpbmRvdy5FbGVtZW50LnByb3RvdHlwZS5pbnNlcnRBZGphY2VudEhUTUwsIG9hID0gd2luZG93LkVsZW1lbnQucHJvdG90eXBlLnByZXBlbmQsIHBhID0gd2luZG93LkVsZW1lbnQucHJvdG90eXBlLmFwcGVuZCwgViA9IHdpbmRvdy5FbGVtZW50LnByb3RvdHlwZS5iZWZvcmUsIHFhID0gd2luZG93LkVsZW1lbnQucHJvdG90eXBlLmFmdGVyLCByYSA9IHdpbmRvdy5FbGVtZW50LnByb3RvdHlwZS5yZXBsYWNlV2l0aCwgc2EgPSB3aW5kb3cuRWxlbWVudC5wcm90b3R5cGUucmVtb3ZlLCB0YSA9IHdpbmRvdy5IVE1MRWxlbWVudCwgVyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iod2luZG93LkhUTUxFbGVtZW50LnByb3RvdHlwZSwgXCJpbm5lckhUTUxcIiksIHVhID0gd2luZG93LkhUTUxFbGVtZW50LnByb3RvdHlwZS5pbnNlcnRBZGphY2VudEVsZW1lbnQsIHZhID0gd2luZG93LkhUTUxFbGVtZW50LnByb3RvdHlwZS5pbnNlcnRBZGphY2VudEhUTUw7XG4gICAgdmFyIHdhID0gbmV3IGZ1bmN0aW9uICgpIHsgfTtcbiAgICBmdW5jdGlvbiB4YSgpIHtcbiAgICAgICAgdmFyIGEgPSBYO1xuICAgICAgICB3aW5kb3cuSFRNTEVsZW1lbnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBmdW5jdGlvbiBiKCkge1xuICAgICAgICAgICAgICAgIHZhciBiID0gdGhpcy5jb25zdHJ1Y3RvciwgYyA9IGEuZy5nZXQoYik7XG4gICAgICAgICAgICAgICAgaWYgKCFjKVxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcihcIlRoZSBjdXN0b20gZWxlbWVudCBiZWluZyBjb25zdHJ1Y3RlZCB3YXMgbm90IHJlZ2lzdGVyZWQgd2l0aCBgY3VzdG9tRWxlbWVudHNgLlwiKTtcbiAgICAgICAgICAgICAgICB2YXIgZSA9IGMuY29uc3RydWN0aW9uU3RhY2s7XG4gICAgICAgICAgICAgICAgaWYgKDAgPT09IGUubGVuZ3RoKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZSA9IEYuY2FsbChkb2N1bWVudCwgYy5sb2NhbE5hbWUpLCBPYmplY3Quc2V0UHJvdG90eXBlT2YoZSwgYi5wcm90b3R5cGUpLCBlLl9fQ0Vfc3RhdGUgPSAxLCBlLl9fQ0VfZGVmaW5pdGlvbiA9IGMsIHcoYSwgZSksIGU7XG4gICAgICAgICAgICAgICAgYyA9IGUubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgICAgICB2YXIgZiA9IGVbY107XG4gICAgICAgICAgICAgICAgaWYgKGYgPT09IHdhKVxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcihcIlRoZSBIVE1MRWxlbWVudCBjb25zdHJ1Y3RvciB3YXMgZWl0aGVyIGNhbGxlZCByZWVudHJhbnRseSBmb3IgdGhpcyBjb25zdHJ1Y3RvciBvciBjYWxsZWQgbXVsdGlwbGUgdGltZXMuXCIpO1xuICAgICAgICAgICAgICAgIGVbY10gPSB3YTtcbiAgICAgICAgICAgICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YoZiwgYi5wcm90b3R5cGUpO1xuICAgICAgICAgICAgICAgIHcoYSwgZik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBiLnByb3RvdHlwZSA9IHRhLnByb3RvdHlwZTtcbiAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShiLnByb3RvdHlwZSwgXCJjb25zdHJ1Y3RvclwiLCB7IHdyaXRhYmxlOiAhMCwgY29uZmlndXJhYmxlOiAhMCwgZW51bWVyYWJsZTogITEsIHZhbHVlOiBiIH0pO1xuICAgICAgICAgICAgcmV0dXJuIGI7XG4gICAgICAgIH0oKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gWShhLCBiLCBkKSB7IGZ1bmN0aW9uIGMoYikgeyByZXR1cm4gZnVuY3Rpb24gKGQpIHsgZm9yICh2YXIgZSA9IFtdLCBjID0gMDsgYyA8IGFyZ3VtZW50cy5sZW5ndGg7ICsrYylcbiAgICAgICAgZVtjXSA9IGFyZ3VtZW50c1tjXTsgYyA9IFtdOyBmb3IgKHZhciBmID0gW10sIG0gPSAwOyBtIDwgZS5sZW5ndGg7IG0rKykge1xuICAgICAgICB2YXIgcSA9IGVbbV07XG4gICAgICAgIHEgaW5zdGFuY2VvZiBFbGVtZW50ICYmIGwocSkgJiYgZi5wdXNoKHEpO1xuICAgICAgICBpZiAocSBpbnN0YW5jZW9mIERvY3VtZW50RnJhZ21lbnQpXG4gICAgICAgICAgICBmb3IgKHEgPSBxLmZpcnN0Q2hpbGQ7IHE7IHEgPSBxLm5leHRTaWJsaW5nKVxuICAgICAgICAgICAgICAgIGMucHVzaChxKTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgYy5wdXNoKHEpO1xuICAgIH0gYi5hcHBseSh0aGlzLCBlKTsgZm9yIChlID0gMDsgZSA8IGYubGVuZ3RoOyBlKyspXG4gICAgICAgIHooYSwgZltlXSk7IGlmIChsKHRoaXMpKVxuICAgICAgICBmb3IgKGUgPSAwOyBlIDwgYy5sZW5ndGg7IGUrKylcbiAgICAgICAgICAgIGYgPSBjW2VdLCBmIGluc3RhbmNlb2YgRWxlbWVudCAmJiB4KGEsIGYpOyB9OyB9IHZvaWQgMCAhPT0gZC5oICYmIChiLnByZXBlbmQgPSBjKGQuaCkpOyB2b2lkIDAgIT09IGQuYXBwZW5kICYmIChiLmFwcGVuZCA9IGMoZC5hcHBlbmQpKTsgfVxuICAgIGZ1bmN0aW9uIHlhKCkge1xuICAgICAgICB2YXIgYSA9IFg7XG4gICAgICAgIHIoRG9jdW1lbnQucHJvdG90eXBlLCBcImNyZWF0ZUVsZW1lbnRcIiwgZnVuY3Rpb24gKGIpIHsgaWYgKHRoaXMuX19DRV9oYXNSZWdpc3RyeSkge1xuICAgICAgICAgICAgdmFyIGQgPSBhLmEuZ2V0KGIpO1xuICAgICAgICAgICAgaWYgKGQpXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBkLmNvbnN0cnVjdG9yRnVuY3Rpb247XG4gICAgICAgIH0gYiA9IEYuY2FsbCh0aGlzLCBiKTsgdyhhLCBiKTsgcmV0dXJuIGI7IH0pO1xuICAgICAgICByKERvY3VtZW50LnByb3RvdHlwZSwgXCJpbXBvcnROb2RlXCIsIGZ1bmN0aW9uIChiLCBkKSB7IGIgPSBoYS5jYWxsKHRoaXMsIGIsICEhZCk7IHRoaXMuX19DRV9oYXNSZWdpc3RyeSA/IEEoYSwgYikgOiB2KGEsIGIpOyByZXR1cm4gYjsgfSk7XG4gICAgICAgIHIoRG9jdW1lbnQucHJvdG90eXBlLCBcImNyZWF0ZUVsZW1lbnROU1wiLCBmdW5jdGlvbiAoYiwgZCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuX19DRV9oYXNSZWdpc3RyeSAmJiAobnVsbCA9PT0gYiB8fCBcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWxcIiA9PT0gYikpIHtcbiAgICAgICAgICAgICAgICB2YXIgYyA9IGEuYS5nZXQoZCk7XG4gICAgICAgICAgICAgICAgaWYgKGMpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgYy5jb25zdHJ1Y3RvckZ1bmN0aW9uO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYiA9IEcuY2FsbCh0aGlzLCBiLCBkKTtcbiAgICAgICAgICAgIHcoYSwgYik7XG4gICAgICAgICAgICByZXR1cm4gYjtcbiAgICAgICAgfSk7XG4gICAgICAgIFkoYSwgRG9jdW1lbnQucHJvdG90eXBlLCB7IGg6IGlhLCBhcHBlbmQ6IGphIH0pO1xuICAgIH1cbiAgICBmdW5jdGlvbiB6YSgpIHtcbiAgICAgICAgZnVuY3Rpb24gYShhLCBjKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShhLCBcInRleHRDb250ZW50XCIsIHsgZW51bWVyYWJsZTogYy5lbnVtZXJhYmxlLCBjb25maWd1cmFibGU6ICEwLCBnZXQ6IGMuZ2V0LCBzZXQ6IGZ1bmN0aW9uIChhKSB7IGlmICh0aGlzLm5vZGVUeXBlID09PSBOb2RlLlRFWFRfTk9ERSlcbiAgICAgICAgICAgICAgICBjLnNldC5jYWxsKHRoaXMsIGEpO1xuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFyIGQgPSB2b2lkIDA7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZSA9IHRoaXMuY2hpbGROb2RlcywgayA9IGUubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICBpZiAoMCA8IGsgJiYgbCh0aGlzKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZCA9IEFycmF5KGspO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaCA9IDA7IGggPCBrOyBoKyspXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZFtoXSA9IGVbaF07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYy5zZXQuY2FsbCh0aGlzLCBhKTtcbiAgICAgICAgICAgICAgICBpZiAoZClcbiAgICAgICAgICAgICAgICAgICAgZm9yIChhID0gMDsgYSA8IGQubGVuZ3RoOyBhKyspXG4gICAgICAgICAgICAgICAgICAgICAgICB6KGIsIGRbYV0pO1xuICAgICAgICAgICAgfSB9IH0pOyB9XG4gICAgICAgIHZhciBiID0gWDtcbiAgICAgICAgcihOb2RlLnByb3RvdHlwZSwgXCJpbnNlcnRCZWZvcmVcIiwgZnVuY3Rpb24gKGEsIGMpIHtcbiAgICAgICAgICAgIGlmIChhIGluc3RhbmNlb2YgRG9jdW1lbnRGcmFnbWVudCkge1xuICAgICAgICAgICAgICAgIHZhciBlID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmFwcGx5KGEuY2hpbGROb2Rlcyk7XG4gICAgICAgICAgICAgICAgYSA9IEouY2FsbCh0aGlzLCBhLCBjKTtcbiAgICAgICAgICAgICAgICBpZiAobCh0aGlzKSlcbiAgICAgICAgICAgICAgICAgICAgZm9yIChjID0gMDsgYyA8IGUubGVuZ3RoOyBjKyspXG4gICAgICAgICAgICAgICAgICAgICAgICB4KGIsIGVbY10pO1xuICAgICAgICAgICAgICAgIHJldHVybiBhO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZSA9IGwoYSk7XG4gICAgICAgICAgICBjID0gSi5jYWxsKHRoaXMsIGEsIGMpO1xuICAgICAgICAgICAgZSAmJiB6KGIsIGEpO1xuICAgICAgICAgICAgbCh0aGlzKSAmJiB4KGIsIGEpO1xuICAgICAgICAgICAgcmV0dXJuIGM7XG4gICAgICAgIH0pO1xuICAgICAgICByKE5vZGUucHJvdG90eXBlLCBcImFwcGVuZENoaWxkXCIsIGZ1bmN0aW9uIChhKSB7IGlmIChhIGluc3RhbmNlb2YgRG9jdW1lbnRGcmFnbWVudCkge1xuICAgICAgICAgICAgdmFyIGMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuYXBwbHkoYS5jaGlsZE5vZGVzKTtcbiAgICAgICAgICAgIGEgPSBJLmNhbGwodGhpcywgYSk7XG4gICAgICAgICAgICBpZiAobCh0aGlzKSlcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBlID0gMDsgZSA8IGMubGVuZ3RoOyBlKyspXG4gICAgICAgICAgICAgICAgICAgIHgoYiwgY1tlXSk7XG4gICAgICAgICAgICByZXR1cm4gYTtcbiAgICAgICAgfSBjID0gbChhKTsgZSA9IEkuY2FsbCh0aGlzLCBhKTsgYyAmJiB6KGIsIGEpOyBsKHRoaXMpICYmIHgoYiwgYSk7IHJldHVybiBlOyB9KTtcbiAgICAgICAgcihOb2RlLnByb3RvdHlwZSwgXCJjbG9uZU5vZGVcIiwgZnVuY3Rpb24gKGEpIHtcbiAgICAgICAgICAgIGEgPSBILmNhbGwodGhpcywgISFhKTtcbiAgICAgICAgICAgIHRoaXMub3duZXJEb2N1bWVudC5fX0NFX2hhc1JlZ2lzdHJ5ID8gQShiLCBhKSA6IHYoYiwgYSk7XG4gICAgICAgICAgICByZXR1cm4gYTtcbiAgICAgICAgfSk7XG4gICAgICAgIHIoTm9kZS5wcm90b3R5cGUsIFwicmVtb3ZlQ2hpbGRcIiwgZnVuY3Rpb24gKGEpIHsgdmFyIGMgPSBsKGEpLCBlID0gSy5jYWxsKHRoaXMsIGEpOyBjICYmIHooYiwgYSk7IHJldHVybiBlOyB9KTtcbiAgICAgICAgcihOb2RlLnByb3RvdHlwZSwgXCJyZXBsYWNlQ2hpbGRcIiwgZnVuY3Rpb24gKGEsIGMpIHsgaWYgKGEgaW5zdGFuY2VvZiBEb2N1bWVudEZyYWdtZW50KSB7XG4gICAgICAgICAgICB2YXIgZSA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5hcHBseShhLmNoaWxkTm9kZXMpO1xuICAgICAgICAgICAgYSA9IEwuY2FsbCh0aGlzLCBhLCBjKTtcbiAgICAgICAgICAgIGlmIChsKHRoaXMpKVxuICAgICAgICAgICAgICAgIGZvciAoeihiLCBjKSwgYyA9IDA7IGMgPCBlLmxlbmd0aDsgYysrKVxuICAgICAgICAgICAgICAgICAgICB4KGIsIGVbY10pO1xuICAgICAgICAgICAgcmV0dXJuIGE7XG4gICAgICAgIH0gZSA9IGwoYSk7IHZhciBmID0gTC5jYWxsKHRoaXMsIGEsIGMpLCBkID0gbCh0aGlzKTsgZCAmJiB6KGIsIGMpOyBlICYmIHooYiwgYSk7IGQgJiYgeChiLCBhKTsgcmV0dXJuIGY7IH0pO1xuICAgICAgICBNICYmIE0uZ2V0ID8gYShOb2RlLnByb3RvdHlwZSwgTSkgOiBjYShiLCBmdW5jdGlvbiAoYikge1xuICAgICAgICAgICAgYShiLCB7IGVudW1lcmFibGU6ICEwLCBjb25maWd1cmFibGU6ICEwLCBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgYSA9IFtdLCBiID0gMDsgYiA8IHRoaXMuY2hpbGROb2Rlcy5sZW5ndGg7IGIrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGYgPSB0aGlzLmNoaWxkTm9kZXNbYl07XG4gICAgICAgICAgICAgICAgICAgICAgICBmLm5vZGVUeXBlICE9PSBOb2RlLkNPTU1FTlRfTk9ERSAmJiBhLnB1c2goZi50ZXh0Q29udGVudCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGEuam9pbihcIlwiKTtcbiAgICAgICAgICAgICAgICB9LCBzZXQ6IGZ1bmN0aW9uIChhKSB7IGZvciAoOyB0aGlzLmZpcnN0Q2hpbGQ7KVxuICAgICAgICAgICAgICAgICAgICBLLmNhbGwodGhpcywgdGhpcy5maXJzdENoaWxkKTsgbnVsbCAhPSBhICYmIFwiXCIgIT09IGEgJiYgSS5jYWxsKHRoaXMsIGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGEpKTsgfSB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIEFhKGEpIHtcbiAgICAgICAgZnVuY3Rpb24gYihiKSB7IHJldHVybiBmdW5jdGlvbiAoZSkgeyBmb3IgKHZhciBjID0gW10sIGQgPSAwOyBkIDwgYXJndW1lbnRzLmxlbmd0aDsgKytkKVxuICAgICAgICAgICAgY1tkXSA9IGFyZ3VtZW50c1tkXTsgZCA9IFtdOyBmb3IgKHZhciBrID0gW10sIGggPSAwOyBoIDwgYy5sZW5ndGg7IGgrKykge1xuICAgICAgICAgICAgdmFyIG0gPSBjW2hdO1xuICAgICAgICAgICAgbSBpbnN0YW5jZW9mIEVsZW1lbnQgJiYgbChtKSAmJiBrLnB1c2gobSk7XG4gICAgICAgICAgICBpZiAobSBpbnN0YW5jZW9mIERvY3VtZW50RnJhZ21lbnQpXG4gICAgICAgICAgICAgICAgZm9yIChtID0gbS5maXJzdENoaWxkOyBtOyBtID0gbS5uZXh0U2libGluZylcbiAgICAgICAgICAgICAgICAgICAgZC5wdXNoKG0pO1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIGQucHVzaChtKTtcbiAgICAgICAgfSBiLmFwcGx5KHRoaXMsIGMpOyBmb3IgKGMgPSAwOyBjIDwgay5sZW5ndGg7IGMrKylcbiAgICAgICAgICAgIHooYSwga1tjXSk7IGlmIChsKHRoaXMpKVxuICAgICAgICAgICAgZm9yIChjID0gMDsgYyA8IGQubGVuZ3RoOyBjKyspXG4gICAgICAgICAgICAgICAgayA9IGRbY10sIGsgaW5zdGFuY2VvZiBFbGVtZW50ICYmIHgoYSwgayk7IH07IH1cbiAgICAgICAgdmFyIGQgPSBFbGVtZW50LnByb3RvdHlwZTtcbiAgICAgICAgdm9pZCAwICE9PSBWICYmIChkLmJlZm9yZSA9IGIoVikpO1xuICAgICAgICB2b2lkIDAgIT09IFYgJiYgKGQuYWZ0ZXIgPSBiKHFhKSk7XG4gICAgICAgIHZvaWQgMCAhPT0gcmEgJiZcbiAgICAgICAgICAgIHIoZCwgXCJyZXBsYWNlV2l0aFwiLCBmdW5jdGlvbiAoYikgeyBmb3IgKHZhciBlID0gW10sIGMgPSAwOyBjIDwgYXJndW1lbnRzLmxlbmd0aDsgKytjKVxuICAgICAgICAgICAgICAgIGVbY10gPSBhcmd1bWVudHNbY107IGMgPSBbXTsgZm9yICh2YXIgZCA9IFtdLCBrID0gMDsgayA8IGUubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgaCA9IGVba107XG4gICAgICAgICAgICAgICAgaCBpbnN0YW5jZW9mIEVsZW1lbnQgJiYgbChoKSAmJiBkLnB1c2goaCk7XG4gICAgICAgICAgICAgICAgaWYgKGggaW5zdGFuY2VvZiBEb2N1bWVudEZyYWdtZW50KVxuICAgICAgICAgICAgICAgICAgICBmb3IgKGggPSBoLmZpcnN0Q2hpbGQ7IGg7IGggPSBoLm5leHRTaWJsaW5nKVxuICAgICAgICAgICAgICAgICAgICAgICAgYy5wdXNoKGgpO1xuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgYy5wdXNoKGgpO1xuICAgICAgICAgICAgfSBrID0gbCh0aGlzKTsgcmEuYXBwbHkodGhpcywgZSk7IGZvciAoZSA9IDA7IGUgPCBkLmxlbmd0aDsgZSsrKVxuICAgICAgICAgICAgICAgIHooYSwgZFtlXSk7IGlmIChrKVxuICAgICAgICAgICAgICAgIGZvciAoeihhLCB0aGlzKSwgZSA9IDA7IGUgPCBjLmxlbmd0aDsgZSsrKVxuICAgICAgICAgICAgICAgICAgICBkID0gY1tlXSwgZCBpbnN0YW5jZW9mIEVsZW1lbnQgJiYgeChhLCBkKTsgfSk7XG4gICAgICAgIHZvaWQgMCAhPT0gc2EgJiYgcihkLCBcInJlbW92ZVwiLCBmdW5jdGlvbiAoKSB7IHZhciBiID0gbCh0aGlzKTsgc2EuY2FsbCh0aGlzKTsgYiAmJiB6KGEsIHRoaXMpOyB9KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gQmEoKSB7XG4gICAgICAgIGZ1bmN0aW9uIGEoYSwgYikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoYSwgXCJpbm5lckhUTUxcIiwgeyBlbnVtZXJhYmxlOiBiLmVudW1lcmFibGUsIGNvbmZpZ3VyYWJsZTogITAsIGdldDogYi5nZXQsIHNldDogZnVuY3Rpb24gKGEpIHsgdmFyIGUgPSB0aGlzLCBkID0gdm9pZCAwOyBsKHRoaXMpICYmIChkID0gW10sIHAodGhpcywgZnVuY3Rpb24gKGEpIHsgYSAhPT0gZSAmJiBkLnB1c2goYSk7IH0pKTsgYi5zZXQuY2FsbCh0aGlzLCBhKTsgaWYgKGQpXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgZiA9IDA7IGYgPCBkLmxlbmd0aDsgZisrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0ID0gZFtmXTtcbiAgICAgICAgICAgICAgICAgICAgMSA9PT0gdC5fX0NFX3N0YXRlICYmIGMuZGlzY29ubmVjdGVkQ2FsbGJhY2sodCk7XG4gICAgICAgICAgICAgICAgfSB0aGlzLm93bmVyRG9jdW1lbnQuX19DRV9oYXNSZWdpc3RyeSA/IEEoYywgdGhpcykgOiB2KGMsIHRoaXMpOyByZXR1cm4gYTsgfSB9KTsgfVxuICAgICAgICBmdW5jdGlvbiBiKGEsIGIpIHsgcihhLCBcImluc2VydEFkamFjZW50RWxlbWVudFwiLCBmdW5jdGlvbiAoYSwgZSkgeyB2YXIgZCA9IGwoZSk7IGEgPSBiLmNhbGwodGhpcywgYSwgZSk7IGQgJiYgeihjLCBlKTsgbChhKSAmJiB4KGMsIGUpOyByZXR1cm4gYTsgfSk7IH1cbiAgICAgICAgZnVuY3Rpb24gZChhLCBiKSB7XG4gICAgICAgICAgICBmdW5jdGlvbiBlKGEsIGIpIHsgZm9yICh2YXIgZSA9IFtdOyBhICE9PSBiOyBhID0gYS5uZXh0U2libGluZylcbiAgICAgICAgICAgICAgICBlLnB1c2goYSk7IGZvciAoYiA9IDA7IGIgPCBlLmxlbmd0aDsgYisrKVxuICAgICAgICAgICAgICAgIEEoYywgZVtiXSk7IH1cbiAgICAgICAgICAgIHIoYSwgXCJpbnNlcnRBZGphY2VudEhUTUxcIiwgZnVuY3Rpb24gKGEsIGMpIHtcbiAgICAgICAgICAgICAgICBhID0gYS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgICAgIGlmIChcImJlZm9yZWJlZ2luXCIgPT09IGEpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGQgPSB0aGlzLnByZXZpb3VzU2libGluZztcbiAgICAgICAgICAgICAgICAgICAgYi5jYWxsKHRoaXMsIGEsIGMpO1xuICAgICAgICAgICAgICAgICAgICBlKGQgfHwgdGhpcy5wYXJlbnROb2RlLmZpcnN0Q2hpbGQsIHRoaXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChcImFmdGVyYmVnaW5cIiA9PT0gYSlcbiAgICAgICAgICAgICAgICAgICAgZCA9IHRoaXMuZmlyc3RDaGlsZCwgYi5jYWxsKHRoaXMsIGEsIGMpLCBlKHRoaXMuZmlyc3RDaGlsZCwgZCk7XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoXCJiZWZvcmVlbmRcIiA9PT0gYSlcbiAgICAgICAgICAgICAgICAgICAgZCA9IHRoaXMubGFzdENoaWxkLCBiLmNhbGwodGhpcywgYSwgYyksIGUoZCB8fCB0aGlzLmZpcnN0Q2hpbGQsIG51bGwpO1xuICAgICAgICAgICAgICAgIGVsc2UgaWYgKFwiYWZ0ZXJlbmRcIiA9PT0gYSlcbiAgICAgICAgICAgICAgICAgICAgZCA9IHRoaXMubmV4dFNpYmxpbmcsIGIuY2FsbCh0aGlzLCBhLCBjKSwgZSh0aGlzLm5leHRTaWJsaW5nLCBkKTtcbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBTeW50YXhFcnJvcihcIlRoZSB2YWx1ZSBwcm92aWRlZCAoXCIgKyBTdHJpbmcoYSkgKyBcIikgaXMgbm90IG9uZSBvZiAnYmVmb3JlYmVnaW4nLCAnYWZ0ZXJiZWdpbicsICdiZWZvcmVlbmQnLCBvciAnYWZ0ZXJlbmQnLlwiKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHZhciBjID0gWDtcbiAgICAgICAgTiAmJiByKEVsZW1lbnQucHJvdG90eXBlLCBcImF0dGFjaFNoYWRvd1wiLCBmdW5jdGlvbiAoYSkgeyBhID0gTi5jYWxsKHRoaXMsIGEpOyB2YXIgYiA9IGM7IGlmIChiLmIgJiYgIWEuX19DRV9wYXRjaGVkKSB7XG4gICAgICAgICAgICBhLl9fQ0VfcGF0Y2hlZCA9ICEwO1xuICAgICAgICAgICAgZm9yICh2YXIgZSA9IDA7IGUgPCBiLmMubGVuZ3RoOyBlKyspXG4gICAgICAgICAgICAgICAgYi5jW2VdKGEpO1xuICAgICAgICB9IHJldHVybiB0aGlzLl9fQ0Vfc2hhZG93Um9vdCA9IGE7IH0pO1xuICAgICAgICBPICYmIE8uZ2V0ID8gYShFbGVtZW50LnByb3RvdHlwZSwgTykgOiBXICYmIFcuZ2V0ID8gYShIVE1MRWxlbWVudC5wcm90b3R5cGUsIFcpIDogZGEoYywgZnVuY3Rpb24gKGIpIHtcbiAgICAgICAgICAgIGEoYiwgeyBlbnVtZXJhYmxlOiAhMCwgY29uZmlndXJhYmxlOiAhMCwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBILmNhbGwodGhpcywgITApLmlubmVySFRNTDsgfSwgc2V0OiBmdW5jdGlvbiAoYSkgeyB2YXIgYiA9IFwidGVtcGxhdGVcIiA9PT0gdGhpcy5sb2NhbE5hbWUsIGMgPSBiID8gdGhpcy5jb250ZW50IDogdGhpcywgZSA9IEcuY2FsbChkb2N1bWVudCwgdGhpcy5uYW1lc3BhY2VVUkksIHRoaXMubG9jYWxOYW1lKTsgZm9yIChlLmlubmVySFRNTCA9IGE7IDAgPCBjLmNoaWxkTm9kZXMubGVuZ3RoOylcbiAgICAgICAgICAgICAgICAgICAgSy5jYWxsKGMsIGMuY2hpbGROb2Rlc1swXSk7IGZvciAoYSA9IGIgPyBlLmNvbnRlbnQgOiBlOyAwIDwgYS5jaGlsZE5vZGVzLmxlbmd0aDspXG4gICAgICAgICAgICAgICAgICAgIEkuY2FsbChjLCBhLmNoaWxkTm9kZXNbMF0pOyB9IH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgcihFbGVtZW50LnByb3RvdHlwZSwgXCJzZXRBdHRyaWJ1dGVcIiwgZnVuY3Rpb24gKGEsIGIpIHsgaWYgKDEgIT09IHRoaXMuX19DRV9zdGF0ZSlcbiAgICAgICAgICAgIHJldHVybiBRLmNhbGwodGhpcywgYSwgYik7IHZhciBlID0gUC5jYWxsKHRoaXMsIGEpOyBRLmNhbGwodGhpcywgYSwgYik7IGIgPSBQLmNhbGwodGhpcywgYSk7IGMuYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKHRoaXMsIGEsIGUsIGIsIG51bGwpOyB9KTtcbiAgICAgICAgcihFbGVtZW50LnByb3RvdHlwZSwgXCJzZXRBdHRyaWJ1dGVOU1wiLCBmdW5jdGlvbiAoYSwgYiwgZCkgeyBpZiAoMSAhPT0gdGhpcy5fX0NFX3N0YXRlKVxuICAgICAgICAgICAgcmV0dXJuIFQuY2FsbCh0aGlzLCBhLCBiLCBkKTsgdmFyIGUgPSBTLmNhbGwodGhpcywgYSwgYik7IFQuY2FsbCh0aGlzLCBhLCBiLCBkKTsgZCA9IFMuY2FsbCh0aGlzLCBhLCBiKTsgYy5hdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sodGhpcywgYiwgZSwgZCwgYSk7IH0pO1xuICAgICAgICByKEVsZW1lbnQucHJvdG90eXBlLCBcInJlbW92ZUF0dHJpYnV0ZVwiLCBmdW5jdGlvbiAoYSkgeyBpZiAoMSAhPT0gdGhpcy5fX0NFX3N0YXRlKVxuICAgICAgICAgICAgcmV0dXJuIFIuY2FsbCh0aGlzLCBhKTsgdmFyIGIgPSBQLmNhbGwodGhpcywgYSk7IFIuY2FsbCh0aGlzLCBhKTsgbnVsbCAhPT0gYiAmJiBjLmF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayh0aGlzLCBhLCBiLCBudWxsLCBudWxsKTsgfSk7XG4gICAgICAgIHIoRWxlbWVudC5wcm90b3R5cGUsIFwicmVtb3ZlQXR0cmlidXRlTlNcIiwgZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgICAgIGlmICgxICE9PSB0aGlzLl9fQ0Vfc3RhdGUpXG4gICAgICAgICAgICAgICAgcmV0dXJuIFUuY2FsbCh0aGlzLCBhLCBiKTtcbiAgICAgICAgICAgIHZhciBkID0gUy5jYWxsKHRoaXMsIGEsIGIpO1xuICAgICAgICAgICAgVS5jYWxsKHRoaXMsIGEsIGIpO1xuICAgICAgICAgICAgdmFyIGUgPSBTLmNhbGwodGhpcywgYSwgYik7XG4gICAgICAgICAgICBkICE9PSBlICYmIGMuYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKHRoaXMsIGIsIGQsIGUsIGEpO1xuICAgICAgICB9KTtcbiAgICAgICAgdWEgPyBiKEhUTUxFbGVtZW50LnByb3RvdHlwZSwgdWEpIDogbWEgPyBiKEVsZW1lbnQucHJvdG90eXBlLCBtYSkgOiBjb25zb2xlLndhcm4oXCJDdXN0b20gRWxlbWVudHM6IGBFbGVtZW50I2luc2VydEFkamFjZW50RWxlbWVudGAgd2FzIG5vdCBwYXRjaGVkLlwiKTtcbiAgICAgICAgdmEgPyBkKEhUTUxFbGVtZW50LnByb3RvdHlwZSwgdmEpIDogbmEgPyBkKEVsZW1lbnQucHJvdG90eXBlLCBuYSkgOiBjb25zb2xlLndhcm4oXCJDdXN0b20gRWxlbWVudHM6IGBFbGVtZW50I2luc2VydEFkamFjZW50SFRNTGAgd2FzIG5vdCBwYXRjaGVkLlwiKTtcbiAgICAgICAgWShjLCBFbGVtZW50LnByb3RvdHlwZSwgeyBoOiBvYSwgYXBwZW5kOiBwYSB9KTtcbiAgICAgICAgQWEoYyk7XG4gICAgfVxuICAgIHZhciBaID0gd2luZG93LmN1c3RvbUVsZW1lbnRzO1xuICAgIGlmICghWiB8fCBaLmZvcmNlUG9seWZpbGwgfHwgXCJmdW5jdGlvblwiICE9IHR5cGVvZiBaLmRlZmluZSB8fCBcImZ1bmN0aW9uXCIgIT0gdHlwZW9mIFouZ2V0KSB7XG4gICAgICAgIHZhciBYID0gbmV3IHU7XG4gICAgICAgIHhhKCk7XG4gICAgICAgIHlhKCk7XG4gICAgICAgIFkoWCwgRG9jdW1lbnRGcmFnbWVudC5wcm90b3R5cGUsIHsgaDoga2EsIGFwcGVuZDogbGEgfSk7XG4gICAgICAgIHphKCk7XG4gICAgICAgIEJhKCk7XG4gICAgICAgIGRvY3VtZW50Ll9fQ0VfaGFzUmVnaXN0cnkgPSAhMDtcbiAgICAgICAgdmFyIGN1c3RvbUVsZW1lbnRzID0gbmV3IEUoWCk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh3aW5kb3csIFwiY3VzdG9tRWxlbWVudHNcIiwgeyBjb25maWd1cmFibGU6ICEwLCBlbnVtZXJhYmxlOiAhMCwgdmFsdWU6IGN1c3RvbUVsZW1lbnRzIH0pO1xuICAgIH1cbn0pLmNhbGwoc2VsZik7XG4vLyBQb2x5ZmlsbCBkb2N1bWVudC5iYXNlVVJJXG5cInN0cmluZ1wiICE9PSB0eXBlb2YgZG9jdW1lbnQuYmFzZVVSSSAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkoRG9jdW1lbnQucHJvdG90eXBlLCBcImJhc2VVUklcIiwgeyBlbnVtZXJhYmxlOiAhMCwgY29uZmlndXJhYmxlOiAhMCwgZ2V0OiBmdW5jdGlvbiAoKSB7IHZhciBhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJhc2VcIik7IHJldHVybiBhICYmIGEuaHJlZiA/IGEuaHJlZiA6IGRvY3VtZW50LlVSTDsgfSB9KTtcbi8vIFBvbHlmaWxsIEN1c3RvbUV2ZW50XG5cImZ1bmN0aW9uXCIgIT09IHR5cGVvZiB3aW5kb3cuQ3VzdG9tRXZlbnQgJiYgKHdpbmRvdy5DdXN0b21FdmVudCA9IGZ1bmN0aW9uIChjLCBhKSB7IGEgPSBhIHx8IHsgYnViYmxlczogITEsIGNhbmNlbGFibGU6ICExLCBkZXRhaWw6IHZvaWQgMCB9OyB2YXIgYiA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KFwiQ3VzdG9tRXZlbnRcIik7IGIuaW5pdEN1c3RvbUV2ZW50KGMsIGEuYnViYmxlcywgYS5jYW5jZWxhYmxlLCBhLmRldGFpbCk7IHJldHVybiBiOyB9LCB3aW5kb3cuQ3VzdG9tRXZlbnQucHJvdG90eXBlID0gd2luZG93LkV2ZW50LnByb3RvdHlwZSk7XG4vLyBFdmVudC5jb21wb3NlZFBhdGhcbihmdW5jdGlvbiAoYiwgYywgZCkgeyBiLmNvbXBvc2VkUGF0aCB8fCAoYi5jb21wb3NlZFBhdGggPSBmdW5jdGlvbiAoKSB7IGlmICh0aGlzLnBhdGgpXG4gICAgcmV0dXJuIHRoaXMucGF0aDsgdmFyIGEgPSB0aGlzLnRhcmdldDsgZm9yICh0aGlzLnBhdGggPSBbXTsgbnVsbCAhPT0gYS5wYXJlbnROb2RlOylcbiAgICB0aGlzLnBhdGgucHVzaChhKSwgYSA9IGEucGFyZW50Tm9kZTsgdGhpcy5wYXRoLnB1c2goYywgZCk7IHJldHVybiB0aGlzLnBhdGg7IH0pOyB9KShFdmVudC5wcm90b3R5cGUsIGRvY3VtZW50LCB3aW5kb3cpO1xuLyohXG5FbGVtZW50LmNsb3Nlc3QgYW5kIEVsZW1lbnQubWF0Y2hlc1xuaHR0cHM6Ly9naXRodWIuY29tL2pvbmF0aGFudG5lYWwvY2xvc2VzdFxuQ3JlYXRpdmUgQ29tbW9ucyBaZXJvIHYxLjAgVW5pdmVyc2FsXG4qL1xuKGZ1bmN0aW9uIChhKSB7IFwiZnVuY3Rpb25cIiAhPT0gdHlwZW9mIGEubWF0Y2hlcyAmJiAoYS5tYXRjaGVzID0gYS5tc01hdGNoZXNTZWxlY3RvciB8fCBhLm1vek1hdGNoZXNTZWxlY3RvciB8fCBhLndlYmtpdE1hdGNoZXNTZWxlY3RvciB8fCBmdW5jdGlvbiAoYSkgeyBhID0gKHRoaXMuZG9jdW1lbnQgfHwgdGhpcy5vd25lckRvY3VtZW50KS5xdWVyeVNlbGVjdG9yQWxsKGEpOyBmb3IgKHZhciBiID0gMDsgYVtiXSAmJiBhW2JdICE9PSB0aGlzOylcbiAgICArK2I7IHJldHVybiAhIWFbYl07IH0pOyBcImZ1bmN0aW9uXCIgIT09IHR5cGVvZiBhLmNsb3Nlc3QgJiYgKGEuY2xvc2VzdCA9IGZ1bmN0aW9uIChhKSB7IGZvciAodmFyIGIgPSB0aGlzOyBiICYmIDEgPT09IGIubm9kZVR5cGU7KSB7XG4gICAgaWYgKGIubWF0Y2hlcyhhKSlcbiAgICAgICAgcmV0dXJuIGI7XG4gICAgYiA9IGIucGFyZW50Tm9kZTtcbn0gcmV0dXJuIG51bGw7IH0pOyB9KSh3aW5kb3cuRWxlbWVudC5wcm90b3R5cGUpO1xuLyohXG5FbGVtZW50LmdldFJvb3ROb2RlKClcbiovXG4oZnVuY3Rpb24gKGMpIHsgZnVuY3Rpb24gZChhKSB7IGEgPSBiKGEpOyByZXR1cm4gYSAmJiAxMSA9PT0gYS5ub2RlVHlwZSA/IGQoYS5ob3N0KSA6IGE7IH0gZnVuY3Rpb24gYihhKSB7IHJldHVybiBhICYmIGEucGFyZW50Tm9kZSA/IGIoYS5wYXJlbnROb2RlKSA6IGE7IH0gXCJmdW5jdGlvblwiICE9PSB0eXBlb2YgYy5nZXRSb290Tm9kZSAmJiAoYy5nZXRSb290Tm9kZSA9IGZ1bmN0aW9uIChhKSB7IHJldHVybiBhICYmIGEuY29tcG9zZWQgPyBkKHRoaXMpIDogYih0aGlzKTsgfSk7IH0pKEVsZW1lbnQucHJvdG90eXBlKTtcbi8qIVxuRWxlbWVudC5pc0Nvbm5lY3RlZCgpXG4qL1xuKGZ1bmN0aW9uIChhKSB7IFwiaXNDb25uZWN0ZWRcIiBpbiBhIHx8IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShhLCBcImlzQ29ubmVjdGVkXCIsIHsgY29uZmlndXJhYmxlOiAhMCwgZW51bWVyYWJsZTogITAsIGdldDogZnVuY3Rpb24gKCkgeyB2YXIgYSA9IHRoaXMuZ2V0Um9vdE5vZGUoeyBjb21wb3NlZDogITAgfSk7IHJldHVybiBhICYmIDkgPT09IGEubm9kZVR5cGU7IH0gfSk7IH0pKEVsZW1lbnQucHJvdG90eXBlKTtcbi8qIVxuRWxlbWVudC5yZW1vdmUoKVxuKi9cbihmdW5jdGlvbiAoYikgeyBiLmZvckVhY2goZnVuY3Rpb24gKGEpIHsgYS5oYXNPd25Qcm9wZXJ0eShcInJlbW92ZVwiKSB8fCBPYmplY3QuZGVmaW5lUHJvcGVydHkoYSwgXCJyZW1vdmVcIiwgeyBjb25maWd1cmFibGU6ICEwLCBlbnVtZXJhYmxlOiAhMCwgd3JpdGFibGU6ICEwLCB2YWx1ZTogZnVuY3Rpb24gKCkgeyBudWxsICE9PSB0aGlzLnBhcmVudE5vZGUgJiYgdGhpcy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMpOyB9IH0pOyB9KTsgfSkoW0VsZW1lbnQucHJvdG90eXBlLCBDaGFyYWN0ZXJEYXRhLnByb3RvdHlwZSwgRG9jdW1lbnRUeXBlLnByb3RvdHlwZV0pO1xuLyohXG5FbGVtZW50LmNsYXNzTGlzdFxuKi9cbiFmdW5jdGlvbiAoZSkgeyAnY2xhc3NMaXN0JyBpbiBlIHx8IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLCBcImNsYXNzTGlzdFwiLCB7IGdldDogZnVuY3Rpb24gKCkgeyB2YXIgZSA9IHRoaXMsIHQgPSAoZS5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKSB8fCBcIlwiKS5yZXBsYWNlKC9eXFxzK3xcXHMkL2csIFwiXCIpLnNwbGl0KC9cXHMrL2cpOyBmdW5jdGlvbiBuKCkgeyB0Lmxlbmd0aCA+IDAgPyBlLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIHQuam9pbihcIiBcIikpIDogZS5yZW1vdmVBdHRyaWJ1dGUoXCJjbGFzc1wiKTsgfSByZXR1cm4gXCJcIiA9PT0gdFswXSAmJiB0LnNwbGljZSgwLCAxKSwgdC50b2dnbGUgPSBmdW5jdGlvbiAoZSwgaSkgeyB2b2lkIDAgIT09IGkgPyBpID8gdC5hZGQoZSkgOiB0LnJlbW92ZShlKSA6IC0xICE9PSB0LmluZGV4T2YoZSkgPyB0LnNwbGljZSh0LmluZGV4T2YoZSksIDEpIDogdC5wdXNoKGUpLCBuKCk7IH0sIHQuYWRkID0gZnVuY3Rpb24gKCkgeyBmb3IgKHZhciBlID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMpLCBpID0gMCwgcyA9IGUubGVuZ3RoOyBpIDwgczsgaSsrKVxuICAgICAgICAtMSA9PT0gdC5pbmRleE9mKGVbaV0pICYmIHQucHVzaChlW2ldKTsgbigpOyB9LCB0LnJlbW92ZSA9IGZ1bmN0aW9uICgpIHsgZm9yICh2YXIgZSA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKSwgaSA9IDAsIHMgPSBlLmxlbmd0aDsgaSA8IHM7IGkrKylcbiAgICAgICAgLTEgIT09IHQuaW5kZXhPZihlW2ldKSAmJiB0LnNwbGljZSh0LmluZGV4T2YoZVtpXSksIDEpOyBuKCk7IH0sIHQuaXRlbSA9IGZ1bmN0aW9uIChlKSB7IHJldHVybiB0W2VdOyB9LCB0LmNvbnRhaW5zID0gZnVuY3Rpb24gKGUpIHsgcmV0dXJuIC0xICE9PSB0LmluZGV4T2YoZSk7IH0sIHQucmVwbGFjZSA9IGZ1bmN0aW9uIChlLCBpKSB7IC0xICE9PSB0LmluZGV4T2YoZSkgJiYgdC5zcGxpY2UodC5pbmRleE9mKGUpLCAxLCBpKSwgbigpOyB9LCB0LnZhbHVlID0gZS5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKSB8fCBcIlwiLCB0OyB9IH0pOyB9KEVsZW1lbnQucHJvdG90eXBlKTtcbi8qIVxuRE9NVG9rZW5MaXN0XG4qL1xuKGZ1bmN0aW9uIChiKSB7IHRyeSB7XG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCk7XG59XG5jYXRjaCAoZSkge1xuICAgIHZhciBjID0gYi5hZGQsIGQgPSBiLnJlbW92ZTtcbiAgICBiLmFkZCA9IGZ1bmN0aW9uICgpIHsgZm9yICh2YXIgYSA9IDA7IGEgPCBhcmd1bWVudHMubGVuZ3RoOyBhKyspXG4gICAgICAgIGMuY2FsbCh0aGlzLCBhcmd1bWVudHNbYV0pOyB9O1xuICAgIGIucmVtb3ZlID0gZnVuY3Rpb24gKCkgeyBmb3IgKHZhciBhID0gMDsgYSA8IGFyZ3VtZW50cy5sZW5ndGg7IGErKylcbiAgICAgICAgZC5jYWxsKHRoaXMsIGFyZ3VtZW50c1thXSk7IH07XG59IH0pKERPTVRva2VuTGlzdC5wcm90b3R5cGUpO1xuIiwiKGZ1bmN0aW9uKCl7XG4gIC8qXG4gICAgQ29weXJpZ2h0IChjKSAyMDE2IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAgICBUaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0XG4gICAgVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcbiAgICBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHRcbiAgICBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuICAgIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4gICovXG4gICd1c2Ugc3RyaWN0Jzt2YXIgYWE9bmV3IFNldChcImFubm90YXRpb24teG1sIGNvbG9yLXByb2ZpbGUgZm9udC1mYWNlIGZvbnQtZmFjZS1zcmMgZm9udC1mYWNlLXVyaSBmb250LWZhY2UtZm9ybWF0IGZvbnQtZmFjZS1uYW1lIG1pc3NpbmctZ2x5cGhcIi5zcGxpdChcIiBcIikpO2Z1bmN0aW9uIGcoYSl7dmFyIGI9YWEuaGFzKGEpO2E9L15bYS16XVsuMC05X2Etel0qLVtcXC0uMC05X2Etel0qJC8udGVzdChhKTtyZXR1cm4hYiYmYX1mdW5jdGlvbiBsKGEpe3ZhciBiPWEuaXNDb25uZWN0ZWQ7aWYodm9pZCAwIT09YilyZXR1cm4gYjtmb3IoO2EmJiEoYS5fX0NFX2lzSW1wb3J0RG9jdW1lbnR8fGEgaW5zdGFuY2VvZiBEb2N1bWVudCk7KWE9YS5wYXJlbnROb2RlfHwod2luZG93LlNoYWRvd1Jvb3QmJmEgaW5zdGFuY2VvZiBTaGFkb3dSb290P2EuaG9zdDp2b2lkIDApO3JldHVybiEoIWF8fCEoYS5fX0NFX2lzSW1wb3J0RG9jdW1lbnR8fGEgaW5zdGFuY2VvZiBEb2N1bWVudCkpfVxuICBmdW5jdGlvbiBuKGEsYil7Zm9yKDtiJiZiIT09YSYmIWIubmV4dFNpYmxpbmc7KWI9Yi5wYXJlbnROb2RlO3JldHVybiBiJiZiIT09YT9iLm5leHRTaWJsaW5nOm51bGx9XG4gIGZ1bmN0aW9uIHAoYSxiLGQpe2Q9dm9pZCAwPT09ZD9uZXcgU2V0OmQ7Zm9yKHZhciBjPWE7Yzspe2lmKGMubm9kZVR5cGU9PT1Ob2RlLkVMRU1FTlRfTk9ERSl7dmFyIGU9YztiKGUpO3ZhciBmPWUubG9jYWxOYW1lO2lmKFwibGlua1wiPT09ZiYmXCJpbXBvcnRcIj09PWUuZ2V0QXR0cmlidXRlKFwicmVsXCIpKXtjPWUuaW1wb3J0O2lmKGMgaW5zdGFuY2VvZiBOb2RlJiYhZC5oYXMoYykpZm9yKGQuYWRkKGMpLGM9Yy5maXJzdENoaWxkO2M7Yz1jLm5leHRTaWJsaW5nKXAoYyxiLGQpO2M9bihhLGUpO2NvbnRpbnVlfWVsc2UgaWYoXCJ0ZW1wbGF0ZVwiPT09Zil7Yz1uKGEsZSk7Y29udGludWV9aWYoZT1lLl9fQ0Vfc2hhZG93Um9vdClmb3IoZT1lLmZpcnN0Q2hpbGQ7ZTtlPWUubmV4dFNpYmxpbmcpcChlLGIsZCl9Yz1jLmZpcnN0Q2hpbGQ/Yy5maXJzdENoaWxkOm4oYSxjKX19ZnVuY3Rpb24gcihhLGIsZCl7YVtiXT1kfTtmdW5jdGlvbiB1KCl7dGhpcy5hPW5ldyBNYXA7dGhpcy5nPW5ldyBNYXA7dGhpcy5jPVtdO3RoaXMuZj1bXTt0aGlzLmI9ITF9ZnVuY3Rpb24gYmEoYSxiLGQpe2EuYS5zZXQoYixkKTthLmcuc2V0KGQuY29uc3RydWN0b3JGdW5jdGlvbixkKX1mdW5jdGlvbiBjYShhLGIpe2EuYj0hMDthLmMucHVzaChiKX1mdW5jdGlvbiBkYShhLGIpe2EuYj0hMDthLmYucHVzaChiKX1mdW5jdGlvbiB2KGEsYil7YS5iJiZwKGIsZnVuY3Rpb24oYil7cmV0dXJuIHcoYSxiKX0pfWZ1bmN0aW9uIHcoYSxiKXtpZihhLmImJiFiLl9fQ0VfcGF0Y2hlZCl7Yi5fX0NFX3BhdGNoZWQ9ITA7Zm9yKHZhciBkPTA7ZDxhLmMubGVuZ3RoO2QrKylhLmNbZF0oYik7Zm9yKGQ9MDtkPGEuZi5sZW5ndGg7ZCsrKWEuZltkXShiKX19XG4gIGZ1bmN0aW9uIHgoYSxiKXt2YXIgZD1bXTtwKGIsZnVuY3Rpb24oYil7cmV0dXJuIGQucHVzaChiKX0pO2ZvcihiPTA7YjxkLmxlbmd0aDtiKyspe3ZhciBjPWRbYl07MT09PWMuX19DRV9zdGF0ZT9hLmNvbm5lY3RlZENhbGxiYWNrKGMpOnkoYSxjKX19ZnVuY3Rpb24geihhLGIpe3ZhciBkPVtdO3AoYixmdW5jdGlvbihiKXtyZXR1cm4gZC5wdXNoKGIpfSk7Zm9yKGI9MDtiPGQubGVuZ3RoO2IrKyl7dmFyIGM9ZFtiXTsxPT09Yy5fX0NFX3N0YXRlJiZhLmRpc2Nvbm5lY3RlZENhbGxiYWNrKGMpfX1cbiAgZnVuY3Rpb24gQShhLGIsZCl7ZD12b2lkIDA9PT1kP3t9OmQ7dmFyIGM9ZC51fHxuZXcgU2V0LGU9ZC5pfHxmdW5jdGlvbihiKXtyZXR1cm4geShhLGIpfSxmPVtdO3AoYixmdW5jdGlvbihiKXtpZihcImxpbmtcIj09PWIubG9jYWxOYW1lJiZcImltcG9ydFwiPT09Yi5nZXRBdHRyaWJ1dGUoXCJyZWxcIikpe3ZhciBkPWIuaW1wb3J0O2QgaW5zdGFuY2VvZiBOb2RlJiYoZC5fX0NFX2lzSW1wb3J0RG9jdW1lbnQ9ITAsZC5fX0NFX2hhc1JlZ2lzdHJ5PSEwKTtkJiZcImNvbXBsZXRlXCI9PT1kLnJlYWR5U3RhdGU/ZC5fX0NFX2RvY3VtZW50TG9hZEhhbmRsZWQ9ITA6Yi5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLGZ1bmN0aW9uKCl7dmFyIGQ9Yi5pbXBvcnQ7aWYoIWQuX19DRV9kb2N1bWVudExvYWRIYW5kbGVkKXtkLl9fQ0VfZG9jdW1lbnRMb2FkSGFuZGxlZD0hMDt2YXIgZj1uZXcgU2V0KGMpO2YuZGVsZXRlKGQpO0EoYSxkLHt1OmYsaTplfSl9fSl9ZWxzZSBmLnB1c2goYil9LGMpO2lmKGEuYilmb3IoYj1cbiAgMDtiPGYubGVuZ3RoO2IrKyl3KGEsZltiXSk7Zm9yKGI9MDtiPGYubGVuZ3RoO2IrKyllKGZbYl0pfVxuICBmdW5jdGlvbiB5KGEsYil7aWYodm9pZCAwPT09Yi5fX0NFX3N0YXRlKXt2YXIgZD1iLm93bmVyRG9jdW1lbnQ7aWYoZC5kZWZhdWx0Vmlld3x8ZC5fX0NFX2lzSW1wb3J0RG9jdW1lbnQmJmQuX19DRV9oYXNSZWdpc3RyeSlpZihkPWEuYS5nZXQoYi5sb2NhbE5hbWUpKXtkLmNvbnN0cnVjdGlvblN0YWNrLnB1c2goYik7dmFyIGM9ZC5jb25zdHJ1Y3RvckZ1bmN0aW9uO3RyeXt0cnl7aWYobmV3IGMhPT1iKXRocm93IEVycm9yKFwiVGhlIGN1c3RvbSBlbGVtZW50IGNvbnN0cnVjdG9yIGRpZCBub3QgcHJvZHVjZSB0aGUgZWxlbWVudCBiZWluZyB1cGdyYWRlZC5cIik7fWZpbmFsbHl7ZC5jb25zdHJ1Y3Rpb25TdGFjay5wb3AoKX19Y2F0Y2godCl7dGhyb3cgYi5fX0NFX3N0YXRlPTIsdDt9Yi5fX0NFX3N0YXRlPTE7Yi5fX0NFX2RlZmluaXRpb249ZDtpZihkLmF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjaylmb3IoZD1kLm9ic2VydmVkQXR0cmlidXRlcyxjPTA7YzxkLmxlbmd0aDtjKyspe3ZhciBlPVxuICBkW2NdLGY9Yi5nZXRBdHRyaWJ1dGUoZSk7bnVsbCE9PWYmJmEuYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKGIsZSxudWxsLGYsbnVsbCl9bChiKSYmYS5jb25uZWN0ZWRDYWxsYmFjayhiKX19fXUucHJvdG90eXBlLmNvbm5lY3RlZENhbGxiYWNrPWZ1bmN0aW9uKGEpe3ZhciBiPWEuX19DRV9kZWZpbml0aW9uO2IuY29ubmVjdGVkQ2FsbGJhY2smJmIuY29ubmVjdGVkQ2FsbGJhY2suY2FsbChhKX07dS5wcm90b3R5cGUuZGlzY29ubmVjdGVkQ2FsbGJhY2s9ZnVuY3Rpb24oYSl7dmFyIGI9YS5fX0NFX2RlZmluaXRpb247Yi5kaXNjb25uZWN0ZWRDYWxsYmFjayYmYi5kaXNjb25uZWN0ZWRDYWxsYmFjay5jYWxsKGEpfTtcbiAgdS5wcm90b3R5cGUuYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrPWZ1bmN0aW9uKGEsYixkLGMsZSl7dmFyIGY9YS5fX0NFX2RlZmluaXRpb247Zi5hdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2smJi0xPGYub2JzZXJ2ZWRBdHRyaWJ1dGVzLmluZGV4T2YoYikmJmYuYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrLmNhbGwoYSxiLGQsYyxlKX07ZnVuY3Rpb24gQihhKXt2YXIgYj1kb2N1bWVudDt0aGlzLmM9YTt0aGlzLmE9Yjt0aGlzLmI9dm9pZCAwO0EodGhpcy5jLHRoaXMuYSk7XCJsb2FkaW5nXCI9PT10aGlzLmEucmVhZHlTdGF0ZSYmKHRoaXMuYj1uZXcgTXV0YXRpb25PYnNlcnZlcih0aGlzLmYuYmluZCh0aGlzKSksdGhpcy5iLm9ic2VydmUodGhpcy5hLHtjaGlsZExpc3Q6ITAsc3VidHJlZTohMH0pKX1mdW5jdGlvbiBDKGEpe2EuYiYmYS5iLmRpc2Nvbm5lY3QoKX1CLnByb3RvdHlwZS5mPWZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMuYS5yZWFkeVN0YXRlO1wiaW50ZXJhY3RpdmVcIiE9PWImJlwiY29tcGxldGVcIiE9PWJ8fEModGhpcyk7Zm9yKGI9MDtiPGEubGVuZ3RoO2IrKylmb3IodmFyIGQ9YVtiXS5hZGRlZE5vZGVzLGM9MDtjPGQubGVuZ3RoO2MrKylBKHRoaXMuYyxkW2NdKX07ZnVuY3Rpb24gZWEoKXt2YXIgYT10aGlzO3RoaXMuYj10aGlzLmE9dm9pZCAwO3RoaXMuYz1uZXcgUHJvbWlzZShmdW5jdGlvbihiKXthLmI9YjthLmEmJmIoYS5hKX0pfWZ1bmN0aW9uIEQoYSl7aWYoYS5hKXRocm93IEVycm9yKFwiQWxyZWFkeSByZXNvbHZlZC5cIik7YS5hPXZvaWQgMDthLmImJmEuYih2b2lkIDApfTtmdW5jdGlvbiBFKGEpe3RoaXMuYz0hMTt0aGlzLmE9YTt0aGlzLmo9bmV3IE1hcDt0aGlzLmY9ZnVuY3Rpb24oYil7cmV0dXJuIGIoKX07dGhpcy5iPSExO3RoaXMuZz1bXTt0aGlzLm89bmV3IEIoYSl9XG4gIEUucHJvdG90eXBlLmw9ZnVuY3Rpb24oYSxiKXt2YXIgZD10aGlzO2lmKCEoYiBpbnN0YW5jZW9mIEZ1bmN0aW9uKSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ3VzdG9tIGVsZW1lbnQgY29uc3RydWN0b3JzIG11c3QgYmUgZnVuY3Rpb25zLlwiKTtpZighZyhhKSl0aHJvdyBuZXcgU3ludGF4RXJyb3IoXCJUaGUgZWxlbWVudCBuYW1lICdcIithK1wiJyBpcyBub3QgdmFsaWQuXCIpO2lmKHRoaXMuYS5hLmdldChhKSl0aHJvdyBFcnJvcihcIkEgY3VzdG9tIGVsZW1lbnQgd2l0aCBuYW1lICdcIithK1wiJyBoYXMgYWxyZWFkeSBiZWVuIGRlZmluZWQuXCIpO2lmKHRoaXMuYyl0aHJvdyBFcnJvcihcIkEgY3VzdG9tIGVsZW1lbnQgaXMgYWxyZWFkeSBiZWluZyBkZWZpbmVkLlwiKTt0aGlzLmM9ITA7dHJ5e3ZhciBjPWZ1bmN0aW9uKGIpe3ZhciBhPWVbYl07aWYodm9pZCAwIT09YSYmIShhIGluc3RhbmNlb2YgRnVuY3Rpb24pKXRocm93IEVycm9yKFwiVGhlICdcIitiK1wiJyBjYWxsYmFjayBtdXN0IGJlIGEgZnVuY3Rpb24uXCIpO1xuICByZXR1cm4gYX0sZT1iLnByb3RvdHlwZTtpZighKGUgaW5zdGFuY2VvZiBPYmplY3QpKXRocm93IG5ldyBUeXBlRXJyb3IoXCJUaGUgY3VzdG9tIGVsZW1lbnQgY29uc3RydWN0b3IncyBwcm90b3R5cGUgaXMgbm90IGFuIG9iamVjdC5cIik7dmFyIGY9YyhcImNvbm5lY3RlZENhbGxiYWNrXCIpO3ZhciB0PWMoXCJkaXNjb25uZWN0ZWRDYWxsYmFja1wiKTt2YXIgaz1jKFwiYWRvcHRlZENhbGxiYWNrXCIpO3ZhciBoPWMoXCJhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2tcIik7dmFyIG09Yi5vYnNlcnZlZEF0dHJpYnV0ZXN8fFtdfWNhdGNoKHEpe3JldHVybn1maW5hbGx5e3RoaXMuYz0hMX1iPXtsb2NhbE5hbWU6YSxjb25zdHJ1Y3RvckZ1bmN0aW9uOmIsY29ubmVjdGVkQ2FsbGJhY2s6ZixkaXNjb25uZWN0ZWRDYWxsYmFjazp0LGFkb3B0ZWRDYWxsYmFjazprLGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjazpoLG9ic2VydmVkQXR0cmlidXRlczptLGNvbnN0cnVjdGlvblN0YWNrOltdfTtiYSh0aGlzLmEsXG4gIGEsYik7dGhpcy5nLnB1c2goYik7dGhpcy5ifHwodGhpcy5iPSEwLHRoaXMuZihmdW5jdGlvbigpe3JldHVybiBmYShkKX0pKX07RS5wcm90b3R5cGUuaT1mdW5jdGlvbihhKXtBKHRoaXMuYSxhKX07XG4gIGZ1bmN0aW9uIGZhKGEpe2lmKCExIT09YS5iKXthLmI9ITE7Zm9yKHZhciBiPWEuZyxkPVtdLGM9bmV3IE1hcCxlPTA7ZTxiLmxlbmd0aDtlKyspYy5zZXQoYltlXS5sb2NhbE5hbWUsW10pO0EoYS5hLGRvY3VtZW50LHtpOmZ1bmN0aW9uKGIpe2lmKHZvaWQgMD09PWIuX19DRV9zdGF0ZSl7dmFyIGU9Yi5sb2NhbE5hbWUsZj1jLmdldChlKTtmP2YucHVzaChiKTphLmEuYS5nZXQoZSkmJmQucHVzaChiKX19fSk7Zm9yKGU9MDtlPGQubGVuZ3RoO2UrKyl5KGEuYSxkW2VdKTtmb3IoOzA8Yi5sZW5ndGg7KXt2YXIgZj1iLnNoaWZ0KCk7ZT1mLmxvY2FsTmFtZTtmPWMuZ2V0KGYubG9jYWxOYW1lKTtmb3IodmFyIHQ9MDt0PGYubGVuZ3RoO3QrKyl5KGEuYSxmW3RdKTsoZT1hLmouZ2V0KGUpKSYmRChlKX19fUUucHJvdG90eXBlLmdldD1mdW5jdGlvbihhKXtpZihhPXRoaXMuYS5hLmdldChhKSlyZXR1cm4gYS5jb25zdHJ1Y3RvckZ1bmN0aW9ufTtcbiAgRS5wcm90b3R5cGUubT1mdW5jdGlvbihhKXtpZighZyhhKSlyZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IFN5bnRheEVycm9yKFwiJ1wiK2ErXCInIGlzIG5vdCBhIHZhbGlkIGN1c3RvbSBlbGVtZW50IG5hbWUuXCIpKTt2YXIgYj10aGlzLmouZ2V0KGEpO2lmKGIpcmV0dXJuIGIuYztiPW5ldyBlYTt0aGlzLmouc2V0KGEsYik7dGhpcy5hLmEuZ2V0KGEpJiYhdGhpcy5nLnNvbWUoZnVuY3Rpb24oYil7cmV0dXJuIGIubG9jYWxOYW1lPT09YX0pJiZEKGIpO3JldHVybiBiLmN9O0UucHJvdG90eXBlLnM9ZnVuY3Rpb24oYSl7Qyh0aGlzLm8pO3ZhciBiPXRoaXMuZjt0aGlzLmY9ZnVuY3Rpb24oZCl7cmV0dXJuIGEoZnVuY3Rpb24oKXtyZXR1cm4gYihkKX0pfX07d2luZG93LkN1c3RvbUVsZW1lbnRSZWdpc3RyeT1FO0UucHJvdG90eXBlLmRlZmluZT1FLnByb3RvdHlwZS5sO0UucHJvdG90eXBlLnVwZ3JhZGU9RS5wcm90b3R5cGUuaTtFLnByb3RvdHlwZS5nZXQ9RS5wcm90b3R5cGUuZ2V0O1xuICBFLnByb3RvdHlwZS53aGVuRGVmaW5lZD1FLnByb3RvdHlwZS5tO0UucHJvdG90eXBlLnBvbHlmaWxsV3JhcEZsdXNoQ2FsbGJhY2s9RS5wcm90b3R5cGUuczt2YXIgRj13aW5kb3cuRG9jdW1lbnQucHJvdG90eXBlLmNyZWF0ZUVsZW1lbnQsRz13aW5kb3cuRG9jdW1lbnQucHJvdG90eXBlLmNyZWF0ZUVsZW1lbnROUyxoYT13aW5kb3cuRG9jdW1lbnQucHJvdG90eXBlLmltcG9ydE5vZGUsaWE9d2luZG93LkRvY3VtZW50LnByb3RvdHlwZS5wcmVwZW5kLGphPXdpbmRvdy5Eb2N1bWVudC5wcm90b3R5cGUuYXBwZW5kLGthPXdpbmRvdy5Eb2N1bWVudEZyYWdtZW50LnByb3RvdHlwZS5wcmVwZW5kLGxhPXdpbmRvdy5Eb2N1bWVudEZyYWdtZW50LnByb3RvdHlwZS5hcHBlbmQsSD13aW5kb3cuTm9kZS5wcm90b3R5cGUuY2xvbmVOb2RlLEk9d2luZG93Lk5vZGUucHJvdG90eXBlLmFwcGVuZENoaWxkLEo9d2luZG93Lk5vZGUucHJvdG90eXBlLmluc2VydEJlZm9yZSxLPXdpbmRvdy5Ob2RlLnByb3RvdHlwZS5yZW1vdmVDaGlsZCxMPXdpbmRvdy5Ob2RlLnByb3RvdHlwZS5yZXBsYWNlQ2hpbGQsTT1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHdpbmRvdy5Ob2RlLnByb3RvdHlwZSxcbiAgXCJ0ZXh0Q29udGVudFwiKSxOPXdpbmRvdy5FbGVtZW50LnByb3RvdHlwZS5hdHRhY2hTaGFkb3csTz1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHdpbmRvdy5FbGVtZW50LnByb3RvdHlwZSxcImlubmVySFRNTFwiKSxQPXdpbmRvdy5FbGVtZW50LnByb3RvdHlwZS5nZXRBdHRyaWJ1dGUsUT13aW5kb3cuRWxlbWVudC5wcm90b3R5cGUuc2V0QXR0cmlidXRlLFI9d2luZG93LkVsZW1lbnQucHJvdG90eXBlLnJlbW92ZUF0dHJpYnV0ZSxTPXdpbmRvdy5FbGVtZW50LnByb3RvdHlwZS5nZXRBdHRyaWJ1dGVOUyxUPXdpbmRvdy5FbGVtZW50LnByb3RvdHlwZS5zZXRBdHRyaWJ1dGVOUyxVPXdpbmRvdy5FbGVtZW50LnByb3RvdHlwZS5yZW1vdmVBdHRyaWJ1dGVOUyxtYT13aW5kb3cuRWxlbWVudC5wcm90b3R5cGUuaW5zZXJ0QWRqYWNlbnRFbGVtZW50LG5hPXdpbmRvdy5FbGVtZW50LnByb3RvdHlwZS5pbnNlcnRBZGphY2VudEhUTUwsb2E9d2luZG93LkVsZW1lbnQucHJvdG90eXBlLnByZXBlbmQsXG4gIHBhPXdpbmRvdy5FbGVtZW50LnByb3RvdHlwZS5hcHBlbmQsVj13aW5kb3cuRWxlbWVudC5wcm90b3R5cGUuYmVmb3JlLHFhPXdpbmRvdy5FbGVtZW50LnByb3RvdHlwZS5hZnRlcixyYT13aW5kb3cuRWxlbWVudC5wcm90b3R5cGUucmVwbGFjZVdpdGgsc2E9d2luZG93LkVsZW1lbnQucHJvdG90eXBlLnJlbW92ZSx0YT13aW5kb3cuSFRNTEVsZW1lbnQsVz1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHdpbmRvdy5IVE1MRWxlbWVudC5wcm90b3R5cGUsXCJpbm5lckhUTUxcIiksdWE9d2luZG93LkhUTUxFbGVtZW50LnByb3RvdHlwZS5pbnNlcnRBZGphY2VudEVsZW1lbnQsdmE9d2luZG93LkhUTUxFbGVtZW50LnByb3RvdHlwZS5pbnNlcnRBZGphY2VudEhUTUw7dmFyIHdhPW5ldyBmdW5jdGlvbigpe307ZnVuY3Rpb24geGEoKXt2YXIgYT1YO3dpbmRvdy5IVE1MRWxlbWVudD1mdW5jdGlvbigpe2Z1bmN0aW9uIGIoKXt2YXIgYj10aGlzLmNvbnN0cnVjdG9yLGM9YS5nLmdldChiKTtpZighYyl0aHJvdyBFcnJvcihcIlRoZSBjdXN0b20gZWxlbWVudCBiZWluZyBjb25zdHJ1Y3RlZCB3YXMgbm90IHJlZ2lzdGVyZWQgd2l0aCBgY3VzdG9tRWxlbWVudHNgLlwiKTt2YXIgZT1jLmNvbnN0cnVjdGlvblN0YWNrO2lmKDA9PT1lLmxlbmd0aClyZXR1cm4gZT1GLmNhbGwoZG9jdW1lbnQsYy5sb2NhbE5hbWUpLE9iamVjdC5zZXRQcm90b3R5cGVPZihlLGIucHJvdG90eXBlKSxlLl9fQ0Vfc3RhdGU9MSxlLl9fQ0VfZGVmaW5pdGlvbj1jLHcoYSxlKSxlO2M9ZS5sZW5ndGgtMTt2YXIgZj1lW2NdO2lmKGY9PT13YSl0aHJvdyBFcnJvcihcIlRoZSBIVE1MRWxlbWVudCBjb25zdHJ1Y3RvciB3YXMgZWl0aGVyIGNhbGxlZCByZWVudHJhbnRseSBmb3IgdGhpcyBjb25zdHJ1Y3RvciBvciBjYWxsZWQgbXVsdGlwbGUgdGltZXMuXCIpO1xuICBlW2NdPXdhO09iamVjdC5zZXRQcm90b3R5cGVPZihmLGIucHJvdG90eXBlKTt3KGEsZik7cmV0dXJuIGZ9Yi5wcm90b3R5cGU9dGEucHJvdG90eXBlO09iamVjdC5kZWZpbmVQcm9wZXJ0eShiLnByb3RvdHlwZSxcImNvbnN0cnVjdG9yXCIse3dyaXRhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCxlbnVtZXJhYmxlOiExLHZhbHVlOmJ9KTtyZXR1cm4gYn0oKX07ZnVuY3Rpb24gWShhLGIsZCl7ZnVuY3Rpb24gYyhiKXtyZXR1cm4gZnVuY3Rpb24oZCl7Zm9yKHZhciBlPVtdLGM9MDtjPGFyZ3VtZW50cy5sZW5ndGg7KytjKWVbY109YXJndW1lbnRzW2NdO2M9W107Zm9yKHZhciBmPVtdLG09MDttPGUubGVuZ3RoO20rKyl7dmFyIHE9ZVttXTtxIGluc3RhbmNlb2YgRWxlbWVudCYmbChxKSYmZi5wdXNoKHEpO2lmKHEgaW5zdGFuY2VvZiBEb2N1bWVudEZyYWdtZW50KWZvcihxPXEuZmlyc3RDaGlsZDtxO3E9cS5uZXh0U2libGluZyljLnB1c2gocSk7ZWxzZSBjLnB1c2gocSl9Yi5hcHBseSh0aGlzLGUpO2ZvcihlPTA7ZTxmLmxlbmd0aDtlKyspeihhLGZbZV0pO2lmKGwodGhpcykpZm9yKGU9MDtlPGMubGVuZ3RoO2UrKylmPWNbZV0sZiBpbnN0YW5jZW9mIEVsZW1lbnQmJngoYSxmKX19dm9pZCAwIT09ZC5oJiYoYi5wcmVwZW5kPWMoZC5oKSk7dm9pZCAwIT09ZC5hcHBlbmQmJihiLmFwcGVuZD1jKGQuYXBwZW5kKSl9O2Z1bmN0aW9uIHlhKCl7dmFyIGE9WDtyKERvY3VtZW50LnByb3RvdHlwZSxcImNyZWF0ZUVsZW1lbnRcIixmdW5jdGlvbihiKXtpZih0aGlzLl9fQ0VfaGFzUmVnaXN0cnkpe3ZhciBkPWEuYS5nZXQoYik7aWYoZClyZXR1cm4gbmV3IGQuY29uc3RydWN0b3JGdW5jdGlvbn1iPUYuY2FsbCh0aGlzLGIpO3coYSxiKTtyZXR1cm4gYn0pO3IoRG9jdW1lbnQucHJvdG90eXBlLFwiaW1wb3J0Tm9kZVwiLGZ1bmN0aW9uKGIsZCl7Yj1oYS5jYWxsKHRoaXMsYiwhIWQpO3RoaXMuX19DRV9oYXNSZWdpc3RyeT9BKGEsYik6dihhLGIpO3JldHVybiBifSk7cihEb2N1bWVudC5wcm90b3R5cGUsXCJjcmVhdGVFbGVtZW50TlNcIixmdW5jdGlvbihiLGQpe2lmKHRoaXMuX19DRV9oYXNSZWdpc3RyeSYmKG51bGw9PT1ifHxcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWxcIj09PWIpKXt2YXIgYz1hLmEuZ2V0KGQpO2lmKGMpcmV0dXJuIG5ldyBjLmNvbnN0cnVjdG9yRnVuY3Rpb259Yj1HLmNhbGwodGhpcyxiLFxuICBkKTt3KGEsYik7cmV0dXJuIGJ9KTtZKGEsRG9jdW1lbnQucHJvdG90eXBlLHtoOmlhLGFwcGVuZDpqYX0pfTtmdW5jdGlvbiB6YSgpe2Z1bmN0aW9uIGEoYSxjKXtPYmplY3QuZGVmaW5lUHJvcGVydHkoYSxcInRleHRDb250ZW50XCIse2VudW1lcmFibGU6Yy5lbnVtZXJhYmxlLGNvbmZpZ3VyYWJsZTohMCxnZXQ6Yy5nZXQsc2V0OmZ1bmN0aW9uKGEpe2lmKHRoaXMubm9kZVR5cGU9PT1Ob2RlLlRFWFRfTk9ERSljLnNldC5jYWxsKHRoaXMsYSk7ZWxzZXt2YXIgZD12b2lkIDA7aWYodGhpcy5maXJzdENoaWxkKXt2YXIgZT10aGlzLmNoaWxkTm9kZXMsaz1lLmxlbmd0aDtpZigwPGsmJmwodGhpcykpe2Q9QXJyYXkoayk7Zm9yKHZhciBoPTA7aDxrO2grKylkW2hdPWVbaF19fWMuc2V0LmNhbGwodGhpcyxhKTtpZihkKWZvcihhPTA7YTxkLmxlbmd0aDthKyspeihiLGRbYV0pfX19KX12YXIgYj1YO3IoTm9kZS5wcm90b3R5cGUsXCJpbnNlcnRCZWZvcmVcIixmdW5jdGlvbihhLGMpe2lmKGEgaW5zdGFuY2VvZiBEb2N1bWVudEZyYWdtZW50KXt2YXIgZT1BcnJheS5wcm90b3R5cGUuc2xpY2UuYXBwbHkoYS5jaGlsZE5vZGVzKTtcbiAgYT1KLmNhbGwodGhpcyxhLGMpO2lmKGwodGhpcykpZm9yKGM9MDtjPGUubGVuZ3RoO2MrKyl4KGIsZVtjXSk7cmV0dXJuIGF9ZT1sKGEpO2M9Si5jYWxsKHRoaXMsYSxjKTtlJiZ6KGIsYSk7bCh0aGlzKSYmeChiLGEpO3JldHVybiBjfSk7cihOb2RlLnByb3RvdHlwZSxcImFwcGVuZENoaWxkXCIsZnVuY3Rpb24oYSl7aWYoYSBpbnN0YW5jZW9mIERvY3VtZW50RnJhZ21lbnQpe3ZhciBjPUFycmF5LnByb3RvdHlwZS5zbGljZS5hcHBseShhLmNoaWxkTm9kZXMpO2E9SS5jYWxsKHRoaXMsYSk7aWYobCh0aGlzKSlmb3IodmFyIGU9MDtlPGMubGVuZ3RoO2UrKyl4KGIsY1tlXSk7cmV0dXJuIGF9Yz1sKGEpO2U9SS5jYWxsKHRoaXMsYSk7YyYmeihiLGEpO2wodGhpcykmJngoYixhKTtyZXR1cm4gZX0pO3IoTm9kZS5wcm90b3R5cGUsXCJjbG9uZU5vZGVcIixmdW5jdGlvbihhKXthPUguY2FsbCh0aGlzLCEhYSk7dGhpcy5vd25lckRvY3VtZW50Ll9fQ0VfaGFzUmVnaXN0cnk/QShiLGEpOnYoYixcbiAgYSk7cmV0dXJuIGF9KTtyKE5vZGUucHJvdG90eXBlLFwicmVtb3ZlQ2hpbGRcIixmdW5jdGlvbihhKXt2YXIgYz1sKGEpLGU9Sy5jYWxsKHRoaXMsYSk7YyYmeihiLGEpO3JldHVybiBlfSk7cihOb2RlLnByb3RvdHlwZSxcInJlcGxhY2VDaGlsZFwiLGZ1bmN0aW9uKGEsYyl7aWYoYSBpbnN0YW5jZW9mIERvY3VtZW50RnJhZ21lbnQpe3ZhciBlPUFycmF5LnByb3RvdHlwZS5zbGljZS5hcHBseShhLmNoaWxkTm9kZXMpO2E9TC5jYWxsKHRoaXMsYSxjKTtpZihsKHRoaXMpKWZvcih6KGIsYyksYz0wO2M8ZS5sZW5ndGg7YysrKXgoYixlW2NdKTtyZXR1cm4gYX1lPWwoYSk7dmFyIGY9TC5jYWxsKHRoaXMsYSxjKSxkPWwodGhpcyk7ZCYmeihiLGMpO2UmJnooYixhKTtkJiZ4KGIsYSk7cmV0dXJuIGZ9KTtNJiZNLmdldD9hKE5vZGUucHJvdG90eXBlLE0pOmNhKGIsZnVuY3Rpb24oYil7YShiLHtlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtmb3IodmFyIGE9W10sXG4gIGI9MDtiPHRoaXMuY2hpbGROb2Rlcy5sZW5ndGg7YisrKXt2YXIgZj10aGlzLmNoaWxkTm9kZXNbYl07Zi5ub2RlVHlwZSE9PU5vZGUuQ09NTUVOVF9OT0RFJiZhLnB1c2goZi50ZXh0Q29udGVudCl9cmV0dXJuIGEuam9pbihcIlwiKX0sc2V0OmZ1bmN0aW9uKGEpe2Zvcig7dGhpcy5maXJzdENoaWxkOylLLmNhbGwodGhpcyx0aGlzLmZpcnN0Q2hpbGQpO251bGwhPWEmJlwiXCIhPT1hJiZJLmNhbGwodGhpcyxkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShhKSl9fSl9KX07ZnVuY3Rpb24gQWEoYSl7ZnVuY3Rpb24gYihiKXtyZXR1cm4gZnVuY3Rpb24oZSl7Zm9yKHZhciBjPVtdLGQ9MDtkPGFyZ3VtZW50cy5sZW5ndGg7KytkKWNbZF09YXJndW1lbnRzW2RdO2Q9W107Zm9yKHZhciBrPVtdLGg9MDtoPGMubGVuZ3RoO2grKyl7dmFyIG09Y1toXTttIGluc3RhbmNlb2YgRWxlbWVudCYmbChtKSYmay5wdXNoKG0pO2lmKG0gaW5zdGFuY2VvZiBEb2N1bWVudEZyYWdtZW50KWZvcihtPW0uZmlyc3RDaGlsZDttO209bS5uZXh0U2libGluZylkLnB1c2gobSk7ZWxzZSBkLnB1c2gobSl9Yi5hcHBseSh0aGlzLGMpO2ZvcihjPTA7YzxrLmxlbmd0aDtjKyspeihhLGtbY10pO2lmKGwodGhpcykpZm9yKGM9MDtjPGQubGVuZ3RoO2MrKylrPWRbY10sayBpbnN0YW5jZW9mIEVsZW1lbnQmJngoYSxrKX19dmFyIGQ9RWxlbWVudC5wcm90b3R5cGU7dm9pZCAwIT09ViYmKGQuYmVmb3JlPWIoVikpO3ZvaWQgMCE9PVYmJihkLmFmdGVyPWIocWEpKTt2b2lkIDAhPT1yYSYmXG4gIHIoZCxcInJlcGxhY2VXaXRoXCIsZnVuY3Rpb24oYil7Zm9yKHZhciBlPVtdLGM9MDtjPGFyZ3VtZW50cy5sZW5ndGg7KytjKWVbY109YXJndW1lbnRzW2NdO2M9W107Zm9yKHZhciBkPVtdLGs9MDtrPGUubGVuZ3RoO2srKyl7dmFyIGg9ZVtrXTtoIGluc3RhbmNlb2YgRWxlbWVudCYmbChoKSYmZC5wdXNoKGgpO2lmKGggaW5zdGFuY2VvZiBEb2N1bWVudEZyYWdtZW50KWZvcihoPWguZmlyc3RDaGlsZDtoO2g9aC5uZXh0U2libGluZyljLnB1c2goaCk7ZWxzZSBjLnB1c2goaCl9az1sKHRoaXMpO3JhLmFwcGx5KHRoaXMsZSk7Zm9yKGU9MDtlPGQubGVuZ3RoO2UrKyl6KGEsZFtlXSk7aWYoaylmb3IoeihhLHRoaXMpLGU9MDtlPGMubGVuZ3RoO2UrKylkPWNbZV0sZCBpbnN0YW5jZW9mIEVsZW1lbnQmJngoYSxkKX0pO3ZvaWQgMCE9PXNhJiZyKGQsXCJyZW1vdmVcIixmdW5jdGlvbigpe3ZhciBiPWwodGhpcyk7c2EuY2FsbCh0aGlzKTtiJiZ6KGEsdGhpcyl9KX07ZnVuY3Rpb24gQmEoKXtmdW5jdGlvbiBhKGEsYil7T2JqZWN0LmRlZmluZVByb3BlcnR5KGEsXCJpbm5lckhUTUxcIix7ZW51bWVyYWJsZTpiLmVudW1lcmFibGUsY29uZmlndXJhYmxlOiEwLGdldDpiLmdldCxzZXQ6ZnVuY3Rpb24oYSl7dmFyIGU9dGhpcyxkPXZvaWQgMDtsKHRoaXMpJiYoZD1bXSxwKHRoaXMsZnVuY3Rpb24oYSl7YSE9PWUmJmQucHVzaChhKX0pKTtiLnNldC5jYWxsKHRoaXMsYSk7aWYoZClmb3IodmFyIGY9MDtmPGQubGVuZ3RoO2YrKyl7dmFyIHQ9ZFtmXTsxPT09dC5fX0NFX3N0YXRlJiZjLmRpc2Nvbm5lY3RlZENhbGxiYWNrKHQpfXRoaXMub3duZXJEb2N1bWVudC5fX0NFX2hhc1JlZ2lzdHJ5P0EoYyx0aGlzKTp2KGMsdGhpcyk7cmV0dXJuIGF9fSl9ZnVuY3Rpb24gYihhLGIpe3IoYSxcImluc2VydEFkamFjZW50RWxlbWVudFwiLGZ1bmN0aW9uKGEsZSl7dmFyIGQ9bChlKTthPWIuY2FsbCh0aGlzLGEsZSk7ZCYmeihjLGUpO2woYSkmJngoYyxlKTtyZXR1cm4gYX0pfVxuICBmdW5jdGlvbiBkKGEsYil7ZnVuY3Rpb24gZShhLGIpe2Zvcih2YXIgZT1bXTthIT09YjthPWEubmV4dFNpYmxpbmcpZS5wdXNoKGEpO2ZvcihiPTA7YjxlLmxlbmd0aDtiKyspQShjLGVbYl0pfXIoYSxcImluc2VydEFkamFjZW50SFRNTFwiLGZ1bmN0aW9uKGEsYyl7YT1hLnRvTG93ZXJDYXNlKCk7aWYoXCJiZWZvcmViZWdpblwiPT09YSl7dmFyIGQ9dGhpcy5wcmV2aW91c1NpYmxpbmc7Yi5jYWxsKHRoaXMsYSxjKTtlKGR8fHRoaXMucGFyZW50Tm9kZS5maXJzdENoaWxkLHRoaXMpfWVsc2UgaWYoXCJhZnRlcmJlZ2luXCI9PT1hKWQ9dGhpcy5maXJzdENoaWxkLGIuY2FsbCh0aGlzLGEsYyksZSh0aGlzLmZpcnN0Q2hpbGQsZCk7ZWxzZSBpZihcImJlZm9yZWVuZFwiPT09YSlkPXRoaXMubGFzdENoaWxkLGIuY2FsbCh0aGlzLGEsYyksZShkfHx0aGlzLmZpcnN0Q2hpbGQsbnVsbCk7ZWxzZSBpZihcImFmdGVyZW5kXCI9PT1hKWQ9dGhpcy5uZXh0U2libGluZyxiLmNhbGwodGhpcyxhLGMpLGUodGhpcy5uZXh0U2libGluZyxcbiAgZCk7ZWxzZSB0aHJvdyBuZXcgU3ludGF4RXJyb3IoXCJUaGUgdmFsdWUgcHJvdmlkZWQgKFwiK1N0cmluZyhhKStcIikgaXMgbm90IG9uZSBvZiAnYmVmb3JlYmVnaW4nLCAnYWZ0ZXJiZWdpbicsICdiZWZvcmVlbmQnLCBvciAnYWZ0ZXJlbmQnLlwiKTt9KX12YXIgYz1YO04mJnIoRWxlbWVudC5wcm90b3R5cGUsXCJhdHRhY2hTaGFkb3dcIixmdW5jdGlvbihhKXthPU4uY2FsbCh0aGlzLGEpO3ZhciBiPWM7aWYoYi5iJiYhYS5fX0NFX3BhdGNoZWQpe2EuX19DRV9wYXRjaGVkPSEwO2Zvcih2YXIgZT0wO2U8Yi5jLmxlbmd0aDtlKyspYi5jW2VdKGEpfXJldHVybiB0aGlzLl9fQ0Vfc2hhZG93Um9vdD1hfSk7TyYmTy5nZXQ/YShFbGVtZW50LnByb3RvdHlwZSxPKTpXJiZXLmdldD9hKEhUTUxFbGVtZW50LnByb3RvdHlwZSxXKTpkYShjLGZ1bmN0aW9uKGIpe2EoYix7ZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIEguY2FsbCh0aGlzLCEwKS5pbm5lckhUTUx9LFxuICBzZXQ6ZnVuY3Rpb24oYSl7dmFyIGI9XCJ0ZW1wbGF0ZVwiPT09dGhpcy5sb2NhbE5hbWUsYz1iP3RoaXMuY29udGVudDp0aGlzLGU9Ry5jYWxsKGRvY3VtZW50LHRoaXMubmFtZXNwYWNlVVJJLHRoaXMubG9jYWxOYW1lKTtmb3IoZS5pbm5lckhUTUw9YTswPGMuY2hpbGROb2Rlcy5sZW5ndGg7KUsuY2FsbChjLGMuY2hpbGROb2Rlc1swXSk7Zm9yKGE9Yj9lLmNvbnRlbnQ6ZTswPGEuY2hpbGROb2Rlcy5sZW5ndGg7KUkuY2FsbChjLGEuY2hpbGROb2Rlc1swXSl9fSl9KTtyKEVsZW1lbnQucHJvdG90eXBlLFwic2V0QXR0cmlidXRlXCIsZnVuY3Rpb24oYSxiKXtpZigxIT09dGhpcy5fX0NFX3N0YXRlKXJldHVybiBRLmNhbGwodGhpcyxhLGIpO3ZhciBlPVAuY2FsbCh0aGlzLGEpO1EuY2FsbCh0aGlzLGEsYik7Yj1QLmNhbGwodGhpcyxhKTtjLmF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayh0aGlzLGEsZSxiLG51bGwpfSk7cihFbGVtZW50LnByb3RvdHlwZSxcInNldEF0dHJpYnV0ZU5TXCIsZnVuY3Rpb24oYSxcbiAgYixkKXtpZigxIT09dGhpcy5fX0NFX3N0YXRlKXJldHVybiBULmNhbGwodGhpcyxhLGIsZCk7dmFyIGU9Uy5jYWxsKHRoaXMsYSxiKTtULmNhbGwodGhpcyxhLGIsZCk7ZD1TLmNhbGwodGhpcyxhLGIpO2MuYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKHRoaXMsYixlLGQsYSl9KTtyKEVsZW1lbnQucHJvdG90eXBlLFwicmVtb3ZlQXR0cmlidXRlXCIsZnVuY3Rpb24oYSl7aWYoMSE9PXRoaXMuX19DRV9zdGF0ZSlyZXR1cm4gUi5jYWxsKHRoaXMsYSk7dmFyIGI9UC5jYWxsKHRoaXMsYSk7Ui5jYWxsKHRoaXMsYSk7bnVsbCE9PWImJmMuYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKHRoaXMsYSxiLG51bGwsbnVsbCl9KTtyKEVsZW1lbnQucHJvdG90eXBlLFwicmVtb3ZlQXR0cmlidXRlTlNcIixmdW5jdGlvbihhLGIpe2lmKDEhPT10aGlzLl9fQ0Vfc3RhdGUpcmV0dXJuIFUuY2FsbCh0aGlzLGEsYik7dmFyIGQ9Uy5jYWxsKHRoaXMsYSxiKTtVLmNhbGwodGhpcyxhLGIpO3ZhciBlPVMuY2FsbCh0aGlzLFxuICBhLGIpO2QhPT1lJiZjLmF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayh0aGlzLGIsZCxlLGEpfSk7dWE/YihIVE1MRWxlbWVudC5wcm90b3R5cGUsdWEpOm1hP2IoRWxlbWVudC5wcm90b3R5cGUsbWEpOmNvbnNvbGUud2FybihcIkN1c3RvbSBFbGVtZW50czogYEVsZW1lbnQjaW5zZXJ0QWRqYWNlbnRFbGVtZW50YCB3YXMgbm90IHBhdGNoZWQuXCIpO3ZhP2QoSFRNTEVsZW1lbnQucHJvdG90eXBlLHZhKTpuYT9kKEVsZW1lbnQucHJvdG90eXBlLG5hKTpjb25zb2xlLndhcm4oXCJDdXN0b20gRWxlbWVudHM6IGBFbGVtZW50I2luc2VydEFkamFjZW50SFRNTGAgd2FzIG5vdCBwYXRjaGVkLlwiKTtZKGMsRWxlbWVudC5wcm90b3R5cGUse2g6b2EsYXBwZW5kOnBhfSk7QWEoYyl9O3ZhciBaPXdpbmRvdy5jdXN0b21FbGVtZW50cztpZighWnx8Wi5mb3JjZVBvbHlmaWxsfHxcImZ1bmN0aW9uXCIhPXR5cGVvZiBaLmRlZmluZXx8XCJmdW5jdGlvblwiIT10eXBlb2YgWi5nZXQpe3ZhciBYPW5ldyB1O3hhKCk7eWEoKTtZKFgsRG9jdW1lbnRGcmFnbWVudC5wcm90b3R5cGUse2g6a2EsYXBwZW5kOmxhfSk7emEoKTtCYSgpO2RvY3VtZW50Ll9fQ0VfaGFzUmVnaXN0cnk9ITA7dmFyIGN1c3RvbUVsZW1lbnRzPW5ldyBFKFgpO09iamVjdC5kZWZpbmVQcm9wZXJ0eSh3aW5kb3csXCJjdXN0b21FbGVtZW50c1wiLHtjb25maWd1cmFibGU6ITAsZW51bWVyYWJsZTohMCx2YWx1ZTpjdXN0b21FbGVtZW50c30pfTtcbn0pLmNhbGwoc2VsZik7XG5cbi8vIFBvbHlmaWxsIGRvY3VtZW50LmJhc2VVUklcblwic3RyaW5nXCIhPT10eXBlb2YgZG9jdW1lbnQuYmFzZVVSSSYmT2JqZWN0LmRlZmluZVByb3BlcnR5KERvY3VtZW50LnByb3RvdHlwZSxcImJhc2VVUklcIix7ZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7dmFyIGE9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJhc2VcIik7cmV0dXJuIGEmJmEuaHJlZj9hLmhyZWY6ZG9jdW1lbnQuVVJMfX0pO1xuXG4vLyBQb2x5ZmlsbCBDdXN0b21FdmVudFxuXCJmdW5jdGlvblwiIT09dHlwZW9mIHdpbmRvdy5DdXN0b21FdmVudCYmKHdpbmRvdy5DdXN0b21FdmVudD1mdW5jdGlvbihjLGEpe2E9YXx8e2J1YmJsZXM6ITEsY2FuY2VsYWJsZTohMSxkZXRhaWw6dm9pZCAwfTt2YXIgYj1kb2N1bWVudC5jcmVhdGVFdmVudChcIkN1c3RvbUV2ZW50XCIpO2IuaW5pdEN1c3RvbUV2ZW50KGMsYS5idWJibGVzLGEuY2FuY2VsYWJsZSxhLmRldGFpbCk7cmV0dXJuIGJ9LHdpbmRvdy5DdXN0b21FdmVudC5wcm90b3R5cGU9d2luZG93LkV2ZW50LnByb3RvdHlwZSk7XG5cbi8vIEV2ZW50LmNvbXBvc2VkUGF0aFxuKGZ1bmN0aW9uKGIsYyxkKXtiLmNvbXBvc2VkUGF0aHx8KGIuY29tcG9zZWRQYXRoPWZ1bmN0aW9uKCl7aWYodGhpcy5wYXRoKXJldHVybiB0aGlzLnBhdGg7dmFyIGE9dGhpcy50YXJnZXQ7Zm9yKHRoaXMucGF0aD1bXTtudWxsIT09YS5wYXJlbnROb2RlOyl0aGlzLnBhdGgucHVzaChhKSxhPWEucGFyZW50Tm9kZTt0aGlzLnBhdGgucHVzaChjLGQpO3JldHVybiB0aGlzLnBhdGh9KX0pKEV2ZW50LnByb3RvdHlwZSxkb2N1bWVudCx3aW5kb3cpO1xuXG4vKiFcbkVsZW1lbnQuY2xvc2VzdCBhbmQgRWxlbWVudC5tYXRjaGVzXG5odHRwczovL2dpdGh1Yi5jb20vam9uYXRoYW50bmVhbC9jbG9zZXN0XG5DcmVhdGl2ZSBDb21tb25zIFplcm8gdjEuMCBVbml2ZXJzYWxcbiovXG4oZnVuY3Rpb24oYSl7XCJmdW5jdGlvblwiIT09dHlwZW9mIGEubWF0Y2hlcyYmKGEubWF0Y2hlcz1hLm1zTWF0Y2hlc1NlbGVjdG9yfHxhLm1vek1hdGNoZXNTZWxlY3Rvcnx8YS53ZWJraXRNYXRjaGVzU2VsZWN0b3J8fGZ1bmN0aW9uKGEpe2E9KHRoaXMuZG9jdW1lbnR8fHRoaXMub3duZXJEb2N1bWVudCkucXVlcnlTZWxlY3RvckFsbChhKTtmb3IodmFyIGI9MDthW2JdJiZhW2JdIT09dGhpczspKytiO3JldHVybiEhYVtiXX0pO1wiZnVuY3Rpb25cIiE9PXR5cGVvZiBhLmNsb3Nlc3QmJihhLmNsb3Nlc3Q9ZnVuY3Rpb24oYSl7Zm9yKHZhciBiPXRoaXM7YiYmMT09PWIubm9kZVR5cGU7KXtpZihiLm1hdGNoZXMoYSkpcmV0dXJuIGI7Yj1iLnBhcmVudE5vZGV9cmV0dXJuIG51bGx9KX0pKHdpbmRvdy5FbGVtZW50LnByb3RvdHlwZSk7XG5cbi8qIVxuRWxlbWVudC5nZXRSb290Tm9kZSgpXG4qL1xuKGZ1bmN0aW9uKGMpe2Z1bmN0aW9uIGQoYSl7YT1iKGEpO3JldHVybiBhJiYxMT09PWEubm9kZVR5cGU/ZChhLmhvc3QpOmF9ZnVuY3Rpb24gYihhKXtyZXR1cm4gYSYmYS5wYXJlbnROb2RlP2IoYS5wYXJlbnROb2RlKTphfVwiZnVuY3Rpb25cIiE9PXR5cGVvZiBjLmdldFJvb3ROb2RlJiYoYy5nZXRSb290Tm9kZT1mdW5jdGlvbihhKXtyZXR1cm4gYSYmYS5jb21wb3NlZD9kKHRoaXMpOmIodGhpcyl9KX0pKEVsZW1lbnQucHJvdG90eXBlKTtcblxuLyohXG5FbGVtZW50LmlzQ29ubmVjdGVkKClcbiovXG4oZnVuY3Rpb24oYSl7XCJpc0Nvbm5lY3RlZFwiaW4gYXx8T2JqZWN0LmRlZmluZVByb3BlcnR5KGEsXCJpc0Nvbm5lY3RlZFwiLHtjb25maWd1cmFibGU6ITAsZW51bWVyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXt2YXIgYT10aGlzLmdldFJvb3ROb2RlKHtjb21wb3NlZDohMH0pO3JldHVybiBhJiY5PT09YS5ub2RlVHlwZX19KX0pKEVsZW1lbnQucHJvdG90eXBlKTtcblxuLyohXG5FbGVtZW50LnJlbW92ZSgpXG4qL1xuKGZ1bmN0aW9uKGIpe2IuZm9yRWFjaChmdW5jdGlvbihhKXthLmhhc093blByb3BlcnR5KFwicmVtb3ZlXCIpfHxPYmplY3QuZGVmaW5lUHJvcGVydHkoYSxcInJlbW92ZVwiLHtjb25maWd1cmFibGU6ITAsZW51bWVyYWJsZTohMCx3cml0YWJsZTohMCx2YWx1ZTpmdW5jdGlvbigpe251bGwhPT10aGlzLnBhcmVudE5vZGUmJnRoaXMucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzKX19KX0pfSkoW0VsZW1lbnQucHJvdG90eXBlLENoYXJhY3RlckRhdGEucHJvdG90eXBlLERvY3VtZW50VHlwZS5wcm90b3R5cGVdKTtcblxuLyohXG5FbGVtZW50LmNsYXNzTGlzdFxuKi9cbiFmdW5jdGlvbihlKXsnY2xhc3NMaXN0J2luIGV8fE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiY2xhc3NMaXN0XCIse2dldDpmdW5jdGlvbigpe3ZhciBlPXRoaXMsdD0oZS5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKXx8XCJcIikucmVwbGFjZSgvXlxccyt8XFxzJC9nLFwiXCIpLnNwbGl0KC9cXHMrL2cpO2Z1bmN0aW9uIG4oKXt0Lmxlbmd0aD4wP2Uuc2V0QXR0cmlidXRlKFwiY2xhc3NcIix0LmpvaW4oXCIgXCIpKTplLnJlbW92ZUF0dHJpYnV0ZShcImNsYXNzXCIpfXJldHVyblwiXCI9PT10WzBdJiZ0LnNwbGljZSgwLDEpLHQudG9nZ2xlPWZ1bmN0aW9uKGUsaSl7dm9pZCAwIT09aT9pP3QuYWRkKGUpOnQucmVtb3ZlKGUpOi0xIT09dC5pbmRleE9mKGUpP3Quc3BsaWNlKHQuaW5kZXhPZihlKSwxKTp0LnB1c2goZSksbigpfSx0LmFkZD1mdW5jdGlvbigpe2Zvcih2YXIgZT1bXS5zbGljZS5jYWxsKGFyZ3VtZW50cyksaT0wLHM9ZS5sZW5ndGg7aTxzO2krKyktMT09PXQuaW5kZXhPZihlW2ldKSYmdC5wdXNoKGVbaV0pO24oKX0sdC5yZW1vdmU9ZnVuY3Rpb24oKXtmb3IodmFyIGU9W10uc2xpY2UuY2FsbChhcmd1bWVudHMpLGk9MCxzPWUubGVuZ3RoO2k8cztpKyspLTEhPT10LmluZGV4T2YoZVtpXSkmJnQuc3BsaWNlKHQuaW5kZXhPZihlW2ldKSwxKTtuKCl9LHQuaXRlbT1mdW5jdGlvbihlKXtyZXR1cm4gdFtlXX0sdC5jb250YWlucz1mdW5jdGlvbihlKXtyZXR1cm4tMSE9PXQuaW5kZXhPZihlKX0sdC5yZXBsYWNlPWZ1bmN0aW9uKGUsaSl7LTEhPT10LmluZGV4T2YoZSkmJnQuc3BsaWNlKHQuaW5kZXhPZihlKSwxLGkpLG4oKX0sdC52YWx1ZT1lLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpfHxcIlwiLHR9fSl9KEVsZW1lbnQucHJvdG90eXBlKTtcblxuLyohXG5ET01Ub2tlbkxpc3RcbiovXG4oZnVuY3Rpb24oYil7dHJ5e2RvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgpfWNhdGNoKGUpe3ZhciBjPWIuYWRkLGQ9Yi5yZW1vdmU7Yi5hZGQ9ZnVuY3Rpb24oKXtmb3IodmFyIGE9MDthPGFyZ3VtZW50cy5sZW5ndGg7YSsrKWMuY2FsbCh0aGlzLGFyZ3VtZW50c1thXSl9O2IucmVtb3ZlPWZ1bmN0aW9uKCl7Zm9yKHZhciBhPTA7YTxhcmd1bWVudHMubGVuZ3RoO2ErKylkLmNhbGwodGhpcyxhcmd1bWVudHNbYV0pfX19KShET01Ub2tlbkxpc3QucHJvdG90eXBlKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=
