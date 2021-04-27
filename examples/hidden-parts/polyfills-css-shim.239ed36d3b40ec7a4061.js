/*! For license information please see polyfills-css-shim.239ed36d3b40ec7a4061.js.LICENSE.txt */
(self.webpackChunkhidden_parts_demo =
  self.webpackChunkhidden_parts_demo || []).push([
  [843],
  {
    667: () => {
      var t = function () {
        (this.start = 0),
          (this.end = 0),
          (this.previous = null),
          (this.parent = null),
          (this.rules = null),
          (this.parsedCssText = ''),
          (this.cssText = ''),
          (this.atRule = !1),
          (this.type = 0),
          (this.keyframesName = ''),
          (this.selector = ''),
          (this.parsedSelector = '');
      };
      function e(e) {
        return r(
          (function (e) {
            var r = new t();
            (r.start = 0), (r.end = e.length);
            for (var n = r, i = 0, a = e.length; i < a; i++)
              if (e[i] === s) {
                n.rules || (n.rules = []);
                var u = n,
                  c = u.rules[u.rules.length - 1] || null;
                ((n = new t()).start = i + 1),
                  (n.parent = u),
                  (n.previous = c),
                  u.rules.push(n);
              } else e[i] === o && ((n.end = i + 1), (n = n.parent || r));
            return r;
          })(
            (e = (function (t) {
              return t.replace(i.comments, '').replace(i.port, '');
            })(e))
          ),
          e
        );
      }
      function r(t, e) {
        var s = e.substring(t.start, t.end - 1);
        if (((t.parsedCssText = t.cssText = s.trim()), t.parent)) {
          var o = t.previous ? t.previous.end : t.parent.start;
          s = (s = (s = (function (t) {
            return t.replace(/\\([0-9a-f]{1,6})\s/gi, function () {
              for (var t = arguments[1], e = 6 - t.length; e--; ) t = '0' + t;
              return '\\' + t;
            });
          })((s = e.substring(o, t.start - 1)))).replace(
            i.multipleSpaces,
            ' '
          )).substring(s.lastIndexOf(';') + 1);
          var l = (t.parsedSelector = t.selector = s.trim());
          (t.atRule = 0 === l.indexOf(c)),
            t.atRule
              ? 0 === l.indexOf(u)
                ? (t.type = n.MEDIA_RULE)
                : l.match(i.keyframesRule) &&
                  ((t.type = n.KEYFRAMES_RULE),
                  (t.keyframesName = t.selector.split(i.multipleSpaces).pop()))
              : 0 === l.indexOf(a)
              ? (t.type = n.MIXIN_RULE)
              : (t.type = n.STYLE_RULE);
        }
        var p = t.rules;
        if (p)
          for (var f = 0, h = p.length, d = void 0; f < h && (d = p[f]); f++)
            r(d, e);
        return t;
      }
      var n = {
          STYLE_RULE: 1,
          KEYFRAMES_RULE: 7,
          MEDIA_RULE: 4,
          MIXIN_RULE: 1e3,
        },
        s = '{',
        o = '}',
        i = {
          comments: /\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,
          port: /@import[^;]*;/gim,
          customProp: /(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,
          mixinProp: /(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,
          mixinApply: /@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim,
          varApply: /[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,
          keyframesRule: /^@[^\s]*keyframes/,
          multipleSpaces: /\s+/g,
        },
        a = '--',
        u = '@media',
        c = '@';
      function l(t, e, r) {
        t.lastIndex = 0;
        var n = e.substring(r).match(t);
        if (n) {
          var s = r + n.index;
          return { start: s, end: s + n[0].length };
        }
        return null;
      }
      var p = /\bvar\(/,
        f = /\B--[\w-]+\s*:/,
        h = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,
        d = /^[\t ]+\n/gm;
      function m(t, e, r) {
        var n = (function (t, e) {
          var r = l(p, t, e);
          if (!r) return null;
          var n = (function (t, e) {
              for (var r = 0, n = e; n < t.length; n++) {
                var s = t[n];
                if ('(' === s) r++;
                else if (')' === s && --r <= 0) return n + 1;
              }
              return n;
            })(t, r.start),
            s = t.substring(r.end, n - 1).split(','),
            o = s[0],
            i = s.slice(1);
          return {
            start: r.start,
            end: n,
            propName: o.trim(),
            fallback: i.length > 0 ? i.join(',').trim() : void 0,
          };
        })(t, r);
        if (!n) return e.push(t.substring(r, t.length)), t.length;
        var s = n.propName,
          o = null != n.fallback ? y(n.fallback) : void 0;
        return (
          e.push(t.substring(r, n.start), function (t) {
            return (function (t, e, r) {
              return t[e] ? t[e] : r ? v(r, t) : '';
            })(t, s, o);
          }),
          n.end
        );
      }
      function v(t, e) {
        for (var r = '', n = 0; n < t.length; n++) {
          var s = t[n];
          r += 'string' == typeof s ? s : s(e);
        }
        return r;
      }
      function g(t, e) {
        for (var r = !1, n = !1, s = e; s < t.length; s++) {
          var o = t[s];
          if (r) n && '"' === o && (r = !1), n || "'" !== o || (r = !1);
          else if ('"' === o) (r = !0), (n = !0);
          else if ("'" === o) (r = !0), (n = !1);
          else {
            if (';' === o) return s + 1;
            if ('}' === o) return s;
          }
        }
        return s;
      }
      function y(t) {
        var e = 0;
        t = (function (t) {
          for (var e = '', r = 0; ; ) {
            var n = l(f, t, r),
              s = n ? n.start : t.length;
            if (((e += t.substring(r, s)), !n)) break;
            r = g(t, s);
          }
          return e;
        })((t = t.replace(h, ''))).replace(d, '');
        for (var r = []; e < t.length; ) e = m(t, r, e);
        return r;
      }
      function S(t) {
        var e = {};
        t.forEach(function (t) {
          t.declarations.forEach(function (t) {
            e[t.prop] = t.value;
          });
        });
        for (
          var r = {},
            n = Object.entries(e),
            s = function (t) {
              var e = !1;
              if (
                (n.forEach(function (t) {
                  var n = t[0],
                    s = v(t[1], r);
                  s !== r[n] && ((r[n] = s), (e = !0));
                }),
                !e)
              )
                return 'break';
            },
            o = 0;
          o < 10 && 'break' !== s();
          o++
        );
        return r;
      }
      function b(t, e) {
        if ((void 0 === e && (e = 0), !t.rules)) return [];
        var r = [];
        return (
          t.rules
            .filter(function (t) {
              return t.type === n.STYLE_RULE;
            })
            .forEach(function (t) {
              var n = (function (t) {
                for (var e, r = []; (e = M.exec(t.trim())); ) {
                  var n = x(e[2]),
                    s = n.value,
                    o = n.important;
                  r.push({ prop: e[1].trim(), value: y(s), important: o });
                }
                return r;
              })(t.cssText);
              n.length > 0 &&
                t.parsedSelector.split(',').forEach(function (t) {
                  (t = t.trim()),
                    r.push({
                      selector: t,
                      declarations: n,
                      specificity: 1,
                      nu: e,
                    });
                }),
                e++;
            }),
          r
        );
      }
      var E = '!important',
        M = /(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gm;
      function x(t) {
        var e = (t = t.replace(/\s+/gim, ' ').trim()).endsWith(E);
        return (
          e && (t = t.substr(0, t.length - E.length).trim()),
          { value: t, important: e }
        );
      }
      function w(t) {
        var e = [];
        return (
          t.forEach(function (t) {
            e.push.apply(e, t.selectors);
          }),
          e
        );
      }
      function k(t) {
        var r = e(t),
          n = y(t);
        return {
          original: t,
          template: n,
          selectors: b(r),
          usesCssVars: n.length > 1,
        };
      }
      function C(t, e) {
        if (
          t.some(function (t) {
            return t.styleEl === e;
          })
        )
          return !1;
        var r = k(e.textContent);
        return (r.styleEl = e), t.push(r), !0;
      }
      function I(t) {
        var e = S(w(t));
        t.forEach(function (t) {
          t.usesCssVars && (t.styleEl.textContent = v(t.template, e));
        });
      }
      function R(t, e, r) {
        return (function (t, e, r) {
          return t.replace(new RegExp(e, 'g'), r);
        })(t, '\\.' + e, '.' + r);
      }
      function _(t, e) {
        return Array.from(
          t.querySelectorAll('style:not([data-styles]):not([data-no-shim])')
        )
          .map(function (t) {
            return C(e, t);
          })
          .some(Boolean);
      }
      function A(t, e, r) {
        var n = r.href;
        return fetch(n)
          .then(function (t) {
            return t.text();
          })
          .then(function (s) {
            if (
              (function (t) {
                return t.indexOf('var(') > -1 || O.test(t);
              })(s) &&
              r.parentNode
            ) {
              (function (t) {
                return (T.lastIndex = 0), T.test(t);
              })(s) &&
                (s = (function (t, e) {
                  var r = e.replace(/[^/]*$/, '');
                  return t.replace(T, function (t, e) {
                    var n = r + e;
                    return t.replace(e, n);
                  });
                })(s, n));
              var o = t.createElement('style');
              o.setAttribute('data-styles', ''),
                (o.textContent = s),
                C(e, o),
                r.parentNode.insertBefore(o, r),
                r.remove();
            }
          })
          .catch(function (t) {
            console.error(t);
          });
      }
      var L,
        O = /[\s;{]--[-a-zA-Z0-9]+\s*:/m,
        T = /url[\s]*\([\s]*['"]?(?!(?:https?|data)\:|\/)([^\'\"\)]*)[\s]*['"]?\)[\s]*/gim,
        U = (function () {
          function t(t, e) {
            (this.win = t),
              (this.doc = e),
              (this.count = 0),
              (this.hostStyleMap = new WeakMap()),
              (this.hostScopeMap = new WeakMap()),
              (this.globalScopes = []),
              (this.scopesMap = new Map()),
              (this.didInit = !1);
          }
          return (
            (t.prototype.i = function () {
              var t = this;
              return this.didInit || !this.win.requestAnimationFrame
                ? Promise.resolve()
                : ((this.didInit = !0),
                  new Promise(function (e) {
                    t.win.requestAnimationFrame(function () {
                      (function (t, e) {
                        'undefined' != typeof MutationObserver &&
                          new MutationObserver(function () {
                            _(t, e) && I(e);
                          }).observe(document.head, { childList: !0 });
                      })(t.doc, t.globalScopes),
                        (function (t, e) {
                          return (
                            _(t, e),
                            (function (t, e) {
                              for (
                                var r = [],
                                  n = t.querySelectorAll(
                                    'link[rel="stylesheet"][href]:not([data-no-shim])'
                                  ),
                                  s = 0;
                                s < n.length;
                                s++
                              )
                                r.push(A(t, e, n[s]));
                              return Promise.all(r);
                            })(t, e).then(function () {
                              I(e);
                            })
                          );
                        })(t.doc, t.globalScopes).then(function () {
                          return e();
                        });
                    });
                  }));
            }),
            (t.prototype.addLink = function (t) {
              var e = this;
              return A(this.doc, this.globalScopes, t).then(function () {
                e.updateGlobal();
              });
            }),
            (t.prototype.addGlobalStyle = function (t) {
              C(this.globalScopes, t) && this.updateGlobal();
            }),
            (t.prototype.createHostStyle = function (t, e, r, n) {
              if (this.hostScopeMap.has(t))
                throw new Error('host style already created');
              var s = this.registerHostTemplate(r, e, n),
                o = this.doc.createElement('style');
              return (
                o.setAttribute('data-no-shim', ''),
                s.usesCssVars
                  ? n
                    ? ((o['s-sc'] = e = s.scopeId + '-' + this.count),
                      (o.textContent = '/*needs update*/'),
                      this.hostStyleMap.set(t, o),
                      this.hostScopeMap.set(
                        t,
                        (function (t, e) {
                          var r = t.template.map(function (r) {
                              return 'string' == typeof r
                                ? R(r, t.scopeId, e)
                                : r;
                            }),
                            n = t.selectors.map(function (r) {
                              return Object.assign(Object.assign({}, r), {
                                selector: R(r.selector, t.scopeId, e),
                              });
                            });
                          return Object.assign(Object.assign({}, t), {
                            template: r,
                            selectors: n,
                            scopeId: e,
                          });
                        })(s, e)
                      ),
                      this.count++)
                    : ((s.styleEl = o),
                      s.usesCssVars || (o.textContent = v(s.template, {})),
                      this.globalScopes.push(s),
                      this.updateGlobal(),
                      this.hostScopeMap.set(t, s))
                  : (o.textContent = r),
                o
              );
            }),
            (t.prototype.removeHost = function (t) {
              var e = this.hostStyleMap.get(t);
              e && e.remove(),
                this.hostStyleMap.delete(t),
                this.hostScopeMap.delete(t);
            }),
            (t.prototype.updateHost = function (t) {
              var e = this.hostScopeMap.get(t);
              if (e && e.usesCssVars && e.isScoped) {
                var r = this.hostStyleMap.get(t);
                if (r) {
                  var n = S(
                    (function (t, e, r) {
                      var n = [],
                        s = (function (t, e) {
                          for (var r = []; e; ) {
                            var n = t.get(e);
                            n && r.push(n), (e = e.parentElement);
                          }
                          return r;
                        })(e, t);
                      return (
                        r.forEach(function (t) {
                          return n.push(t);
                        }),
                        s.forEach(function (t) {
                          return n.push(t);
                        }),
                        (function (t) {
                          return (
                            t.sort(function (t, e) {
                              return t.specificity === e.specificity
                                ? t.nu - e.nu
                                : t.specificity - e.specificity;
                            }),
                            t
                          );
                        })(
                          w(n).filter(function (e) {
                            return (function (t, e) {
                              return (
                                ':root' === e || 'html' === e || t.matches(e)
                              );
                            })(t, e.selector);
                          })
                        )
                      );
                    })(t, this.hostScopeMap, this.globalScopes)
                  );
                  r.textContent = v(e.template, n);
                }
              }
            }),
            (t.prototype.updateGlobal = function () {
              I(this.globalScopes);
            }),
            (t.prototype.registerHostTemplate = function (t, e, r) {
              var n = this.scopesMap.get(e);
              return (
                n ||
                  (((n = k(t)).scopeId = e),
                  (n.isScoped = r),
                  this.scopesMap.set(e, n)),
                n
              );
            }),
            t
          );
        })();
      !(L = 'undefined' != typeof window && window) ||
        L.__cssshim ||
        (L.CSS && L.CSS.supports && L.CSS.supports('color', 'var(--c)')) ||
        (L.__cssshim = new U(L, L.document));
    },
  },
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oaWRkZW4tcGFydHMtZGVtby8uL25vZGVfbW9kdWxlcy9AdmVydGV4dmlzL3ZpZXdlci9kaXN0L2VzbS1lczUvY3NzLXNoaW0tYTY1OTA3OWYuanMiXSwibmFtZXMiOlsiU3R5bGVOb2RlIiwidGhpcyIsInN0YXJ0IiwiZW5kIiwicHJldmlvdXMiLCJwYXJlbnQiLCJydWxlcyIsInBhcnNlZENzc1RleHQiLCJjc3NUZXh0IiwiYXRSdWxlIiwidHlwZSIsImtleWZyYW1lc05hbWUiLCJzZWxlY3RvciIsInBhcnNlZFNlbGVjdG9yIiwicGFyc2UiLCJlIiwicGFyc2VDc3MiLCJ0IiwibGVuZ3RoIiwiciIsIm4iLCJzIiwiT1BFTl9CUkFDRSIsIm8iLCJhIiwicHVzaCIsIkNMT1NFX0JSQUNFIiwibGV4IiwicmVwbGFjZSIsIlJYIiwiY29tbWVudHMiLCJwb3J0IiwiY2xlYW4iLCJzdWJzdHJpbmciLCJ0cmltIiwiYXJndW1lbnRzIiwiX2V4cGFuZFVuaWNvZGVFc2NhcGVzIiwibXVsdGlwbGVTcGFjZXMiLCJsYXN0SW5kZXhPZiIsImluZGV4T2YiLCJBVF9TVEFSVCIsIk1FRElBX1NUQVJUIiwidHlwZXMiLCJNRURJQV9SVUxFIiwibWF0Y2giLCJrZXlmcmFtZXNSdWxlIiwiS0VZRlJBTUVTX1JVTEUiLCJzcGxpdCIsInBvcCIsIlZBUl9TVEFSVCIsIk1JWElOX1JVTEUiLCJTVFlMRV9SVUxFIiwiaSIsImwiLCJjdXN0b21Qcm9wIiwibWl4aW5Qcm9wIiwibWl4aW5BcHBseSIsInZhckFwcGx5IiwiZmluZFJlZ2V4IiwibGFzdEluZGV4IiwiaW5kZXgiLCJWQVJfVVNBR0VfU1RBUlQiLCJWQVJfQVNTSUdOX1NUQVJUIiwiQ09NTUVOVFMiLCJUUkFJTElOR19MSU5FUyIsImNvbXBpbGVWYXIiLCJmaW5kVmFyRW5kSW5kZXgiLCJzbGljZSIsInByb3BOYW1lIiwiZmFsbGJhY2siLCJqb2luIiwicGFyc2VWYXIiLCJjb21waWxlVGVtcGxhdGUiLCJleGVjdXRlVGVtcGxhdGUiLCJyZXNvbHZlVmFyIiwiZmluZEVuZFZhbHVlIiwicmVtb3ZlQ3VzdG9tQXNzaWducyIsInJlc29sdmVWYWx1ZXMiLCJmb3JFYWNoIiwiZGVjbGFyYXRpb25zIiwicHJvcCIsInZhbHVlIiwiT2JqZWN0IiwiZW50cmllcyIsImdldFNlbGVjdG9ycyIsImZpbHRlciIsIkZJTkRfREVDTEFSQVRJT05TIiwiZXhlYyIsIm5vcm1hbGl6ZVZhbHVlIiwiaW1wb3J0YW50IiwiZ2V0RGVjbGFyYXRpb25zIiwic3BlY2lmaWNpdHkiLCJudSIsIklNUE9SVEFOVCIsImVuZHNXaXRoIiwic3Vic3RyIiwiZ2V0U2VsZWN0b3JzRm9yU2NvcGVzIiwiYXBwbHkiLCJzZWxlY3RvcnMiLCJwYXJzZUNTUyIsIm9yaWdpbmFsIiwidGVtcGxhdGUiLCJ1c2VzQ3NzVmFycyIsImFkZEdsb2JhbFN0eWxlIiwic29tZSIsInN0eWxlRWwiLCJ0ZXh0Q29udGVudCIsInVwZGF0ZUdsb2JhbFNjb3BlcyIsInJlcGxhY2VTY29wZSIsIlJlZ0V4cCIsInJlcGxhY2VBbGwiLCJsb2FkRG9jdW1lbnRTdHlsZXMiLCJBcnJheSIsImZyb20iLCJxdWVyeVNlbGVjdG9yQWxsIiwibWFwIiwiQm9vbGVhbiIsImFkZEdsb2JhbExpbmsiLCJocmVmIiwiZmV0Y2giLCJ0aGVuIiwidGV4dCIsIkNTU19WQVJJQUJMRV9SRUdFWFAiLCJ0ZXN0IiwiaGFzQ3NzVmFyaWFibGVzIiwicGFyZW50Tm9kZSIsIkNTU19VUkxfUkVHRVhQIiwiaGFzUmVsYXRpdmVVcmxzIiwiZml4UmVsYXRpdmVVcmxzIiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsImluc2VydEJlZm9yZSIsInJlbW92ZSIsImNhdGNoIiwiY29uc29sZSIsImVycm9yIiwiQ3VzdG9tU3R5bGUiLCJ3aW4iLCJkb2MiLCJjb3VudCIsImhvc3RTdHlsZU1hcCIsIldlYWtNYXAiLCJob3N0U2NvcGVNYXAiLCJnbG9iYWxTY29wZXMiLCJzY29wZXNNYXAiLCJNYXAiLCJkaWRJbml0IiwicHJvdG90eXBlIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiUHJvbWlzZSIsInJlc29sdmUiLCJNdXRhdGlvbk9ic2VydmVyIiwib2JzZXJ2ZSIsImRvY3VtZW50IiwiaGVhZCIsImNoaWxkTGlzdCIsInN0YXJ0V2F0Y2hlciIsImFsbCIsImxvYWREb2N1bWVudExpbmtzIiwibG9hZERvY3VtZW50IiwiYWRkTGluayIsInVwZGF0ZUdsb2JhbCIsImNyZWF0ZUhvc3RTdHlsZSIsImhhcyIsIkVycm9yIiwicmVnaXN0ZXJIb3N0VGVtcGxhdGUiLCJzY29wZUlkIiwic2V0IiwiYXNzaWduIiwicmVTY29wZSIsInJlbW92ZUhvc3QiLCJnZXQiLCJkZWxldGUiLCJ1cGRhdGVIb3N0IiwiaXNTY29wZWQiLCJwYXJlbnRFbGVtZW50IiwiZ2V0U2NvcGVzRm9yRWxlbWVudCIsInNvcnQiLCJzb3J0U2VsZWN0b3JzIiwibWF0Y2hlcyIsImdldEFjdGl2ZVNlbGVjdG9ycyIsIndpbmRvdyIsIl9fY3Nzc2hpbSIsIkNTUyIsInN1cHBvcnRzIl0sIm1hcHBpbmdzIjoiO2tHQU1BLElBQUlBLEVBQVksV0FBY0MsS0FBS0MsTUFBUSxFQUFHRCxLQUFLRSxJQUFNLEVBQUdGLEtBQUtHLFNBQVcsS0FBTUgsS0FBS0ksT0FBUyxLQUFNSixLQUFLSyxNQUFRLEtBQU1MLEtBQUtNLGNBQWdCLEdBQUlOLEtBQUtPLFFBQVUsR0FBSVAsS0FBS1EsUUFBUyxFQUFJUixLQUFLUyxLQUFPLEVBQUdULEtBQUtVLGNBQWdCLEdBQUlWLEtBQUtXLFNBQVcsR0FBSVgsS0FBS1ksZUFBaUIsSUFDelEsU0FBU0MsRUFBTUMsR0FBSyxPQUFPQyxFQUUzQixTQUFhRCxHQUFLLElBQUlFLEVBQUksSUFBSWpCLEVBQVdpQixFQUFFZixNQUFRLEVBQUdlLEVBQUVkLElBQU1ZLEVBQUVHLE9BQVEsSUFBSyxJQUFJQyxFQUFJRixFQUFHRyxFQUFJLEVBQUdDLEVBQUlOLEVBQUVHLE9BQVFFLEVBQUlDLEVBQUdELElB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ZmlsbHMtY3NzLXNoaW0uM2Y4YjAxMjcyYWRiNmI4ZDYzMGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiohXG4gKiBDb3B5cmlnaHQgKGMpIDIwMjEgVmVydGV4IFNvZnR3YXJlIExMQy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqL1xuLypcbiBTdGVuY2lsIENsaWVudCBQYXRjaCB2MS4xNy4zIHwgTUlUIExpY2Vuc2VkIHwgaHR0cHM6Ly9zdGVuY2lsanMuY29tXG4gKi9cbnZhciBTdHlsZU5vZGUgPSBmdW5jdGlvbiAoKSB7IHRoaXMuc3RhcnQgPSAwLCB0aGlzLmVuZCA9IDAsIHRoaXMucHJldmlvdXMgPSBudWxsLCB0aGlzLnBhcmVudCA9IG51bGwsIHRoaXMucnVsZXMgPSBudWxsLCB0aGlzLnBhcnNlZENzc1RleHQgPSBcIlwiLCB0aGlzLmNzc1RleHQgPSBcIlwiLCB0aGlzLmF0UnVsZSA9ICExLCB0aGlzLnR5cGUgPSAwLCB0aGlzLmtleWZyYW1lc05hbWUgPSBcIlwiLCB0aGlzLnNlbGVjdG9yID0gXCJcIiwgdGhpcy5wYXJzZWRTZWxlY3RvciA9IFwiXCI7IH07XG5mdW5jdGlvbiBwYXJzZShlKSB7IHJldHVybiBwYXJzZUNzcyhsZXgoZSA9IGNsZWFuKGUpKSwgZSk7IH1cbmZ1bmN0aW9uIGNsZWFuKGUpIHsgcmV0dXJuIGUucmVwbGFjZShSWC5jb21tZW50cywgXCJcIikucmVwbGFjZShSWC5wb3J0LCBcIlwiKTsgfVxuZnVuY3Rpb24gbGV4KGUpIHsgdmFyIHQgPSBuZXcgU3R5bGVOb2RlOyB0LnN0YXJ0ID0gMCwgdC5lbmQgPSBlLmxlbmd0aDsgZm9yICh2YXIgciA9IHQsIG4gPSAwLCBzID0gZS5sZW5ndGg7IG4gPCBzOyBuKyspXG4gICAgaWYgKGVbbl0gPT09IE9QRU5fQlJBQ0UpIHtcbiAgICAgICAgci5ydWxlcyB8fCAoci5ydWxlcyA9IFtdKTtcbiAgICAgICAgdmFyIG8gPSByLCBhID0gby5ydWxlc1tvLnJ1bGVzLmxlbmd0aCAtIDFdIHx8IG51bGw7XG4gICAgICAgIChyID0gbmV3IFN0eWxlTm9kZSkuc3RhcnQgPSBuICsgMSwgci5wYXJlbnQgPSBvLCByLnByZXZpb3VzID0gYSwgby5ydWxlcy5wdXNoKHIpO1xuICAgIH1cbiAgICBlbHNlXG4gICAgICAgIGVbbl0gPT09IENMT1NFX0JSQUNFICYmIChyLmVuZCA9IG4gKyAxLCByID0gci5wYXJlbnQgfHwgdCk7IHJldHVybiB0OyB9XG5mdW5jdGlvbiBwYXJzZUNzcyhlLCB0KSB7IHZhciByID0gdC5zdWJzdHJpbmcoZS5zdGFydCwgZS5lbmQgLSAxKTsgaWYgKGUucGFyc2VkQ3NzVGV4dCA9IGUuY3NzVGV4dCA9IHIudHJpbSgpLCBlLnBhcmVudCkge1xuICAgIHZhciBuID0gZS5wcmV2aW91cyA/IGUucHJldmlvdXMuZW5kIDogZS5wYXJlbnQuc3RhcnQ7XG4gICAgciA9IChyID0gKHIgPSBfZXhwYW5kVW5pY29kZUVzY2FwZXMociA9IHQuc3Vic3RyaW5nKG4sIGUuc3RhcnQgLSAxKSkpLnJlcGxhY2UoUlgubXVsdGlwbGVTcGFjZXMsIFwiIFwiKSkuc3Vic3RyaW5nKHIubGFzdEluZGV4T2YoXCI7XCIpICsgMSk7XG4gICAgdmFyIHMgPSBlLnBhcnNlZFNlbGVjdG9yID0gZS5zZWxlY3RvciA9IHIudHJpbSgpO1xuICAgIGUuYXRSdWxlID0gMCA9PT0gcy5pbmRleE9mKEFUX1NUQVJUKSwgZS5hdFJ1bGUgPyAwID09PSBzLmluZGV4T2YoTUVESUFfU1RBUlQpID8gZS50eXBlID0gdHlwZXMuTUVESUFfUlVMRSA6IHMubWF0Y2goUlgua2V5ZnJhbWVzUnVsZSkgJiYgKGUudHlwZSA9IHR5cGVzLktFWUZSQU1FU19SVUxFLCBlLmtleWZyYW1lc05hbWUgPSBlLnNlbGVjdG9yLnNwbGl0KFJYLm11bHRpcGxlU3BhY2VzKS5wb3AoKSkgOiAwID09PSBzLmluZGV4T2YoVkFSX1NUQVJUKSA/IGUudHlwZSA9IHR5cGVzLk1JWElOX1JVTEUgOiBlLnR5cGUgPSB0eXBlcy5TVFlMRV9SVUxFO1xufSB2YXIgbyA9IGUucnVsZXM7IGlmIChvKVxuICAgIGZvciAodmFyIGEgPSAwLCBpID0gby5sZW5ndGgsIGwgPSB2b2lkIDA7IGEgPCBpICYmIChsID0gb1thXSk7IGErKylcbiAgICAgICAgcGFyc2VDc3MobCwgdCk7IHJldHVybiBlOyB9XG5mdW5jdGlvbiBfZXhwYW5kVW5pY29kZUVzY2FwZXMoZSkgeyByZXR1cm4gZS5yZXBsYWNlKC9cXFxcKFswLTlhLWZdezEsNn0pXFxzL2dpLCAoZnVuY3Rpb24gKCkgeyBmb3IgKHZhciBlID0gYXJndW1lbnRzWzFdLCB0ID0gNiAtIGUubGVuZ3RoOyB0LS07KVxuICAgIGUgPSBcIjBcIiArIGU7IHJldHVybiBcIlxcXFxcIiArIGU7IH0pKTsgfVxudmFyIHR5cGVzID0geyBTVFlMRV9SVUxFOiAxLCBLRVlGUkFNRVNfUlVMRTogNywgTUVESUFfUlVMRTogNCwgTUlYSU5fUlVMRTogMWUzIH0sIE9QRU5fQlJBQ0UgPSBcIntcIiwgQ0xPU0VfQlJBQ0UgPSBcIn1cIiwgUlggPSB7IGNvbW1lbnRzOiAvXFwvXFwqW14qXSpcXCorKFteLypdW14qXSpcXCorKSpcXC8vZ2ltLCBwb3J0OiAvQGltcG9ydFteO10qOy9naW0sIGN1c3RvbVByb3A6IC8oPzpeW147XFwtXFxzfV0rKT8tLVteO3t9XSo/Oltee307XSo/KD86WztcXG5dfCQpL2dpbSwgbWl4aW5Qcm9wOiAvKD86XlteO1xcLVxcc31dKyk/LS1bXjt7fV0qPzpbXnt9O10qP3tbXn1dKj99KD86WztcXG5dfCQpPy9naW0sIG1peGluQXBwbHk6IC9AYXBwbHlcXHMqXFwoP1teKTtdKlxcKT9cXHMqKD86WztcXG5dfCQpPy9naW0sIHZhckFwcGx5OiAvW147Ol0qPzpbXjtdKj92YXJcXChbXjtdKlxcKSg/Ols7XFxuXXwkKT8vZ2ltLCBrZXlmcmFtZXNSdWxlOiAvXkBbXlxcc10qa2V5ZnJhbWVzLywgbXVsdGlwbGVTcGFjZXM6IC9cXHMrL2cgfSwgVkFSX1NUQVJUID0gXCItLVwiLCBNRURJQV9TVEFSVCA9IFwiQG1lZGlhXCIsIEFUX1NUQVJUID0gXCJAXCI7XG5mdW5jdGlvbiBmaW5kUmVnZXgoZSwgdCwgcikgeyBlLmxhc3RJbmRleCA9IDA7IHZhciBuID0gdC5zdWJzdHJpbmcocikubWF0Y2goZSk7IGlmIChuKSB7XG4gICAgdmFyIHMgPSByICsgbi5pbmRleDtcbiAgICByZXR1cm4geyBzdGFydDogcywgZW5kOiBzICsgblswXS5sZW5ndGggfTtcbn0gcmV0dXJuIG51bGw7IH1cbnZhciBWQVJfVVNBR0VfU1RBUlQgPSAvXFxidmFyXFwoLywgVkFSX0FTU0lHTl9TVEFSVCA9IC9cXEItLVtcXHctXStcXHMqOi8sIENPTU1FTlRTID0gL1xcL1xcKlteKl0qXFwqKyhbXi8qXVteKl0qXFwqKykqXFwvL2dpbSwgVFJBSUxJTkdfTElORVMgPSAvXltcXHQgXStcXG4vZ207XG5mdW5jdGlvbiByZXNvbHZlVmFyKGUsIHQsIHIpIHsgcmV0dXJuIGVbdF0gPyBlW3RdIDogciA/IGV4ZWN1dGVUZW1wbGF0ZShyLCBlKSA6IFwiXCI7IH1cbmZ1bmN0aW9uIGZpbmRWYXJFbmRJbmRleChlLCB0KSB7IGZvciAodmFyIHIgPSAwLCBuID0gdDsgbiA8IGUubGVuZ3RoOyBuKyspIHtcbiAgICB2YXIgcyA9IGVbbl07XG4gICAgaWYgKFwiKFwiID09PSBzKVxuICAgICAgICByKys7XG4gICAgZWxzZSBpZiAoXCIpXCIgPT09IHMgJiYgLS1yIDw9IDApXG4gICAgICAgIHJldHVybiBuICsgMTtcbn0gcmV0dXJuIG47IH1cbmZ1bmN0aW9uIHBhcnNlVmFyKGUsIHQpIHsgdmFyIHIgPSBmaW5kUmVnZXgoVkFSX1VTQUdFX1NUQVJULCBlLCB0KTsgaWYgKCFyKVxuICAgIHJldHVybiBudWxsOyB2YXIgbiA9IGZpbmRWYXJFbmRJbmRleChlLCByLnN0YXJ0KSwgcyA9IGUuc3Vic3RyaW5nKHIuZW5kLCBuIC0gMSkuc3BsaXQoXCIsXCIpLCBvID0gc1swXSwgYSA9IHMuc2xpY2UoMSk7IHJldHVybiB7IHN0YXJ0OiByLnN0YXJ0LCBlbmQ6IG4sIHByb3BOYW1lOiBvLnRyaW0oKSwgZmFsbGJhY2s6IGEubGVuZ3RoID4gMCA/IGEuam9pbihcIixcIikudHJpbSgpIDogdm9pZCAwIH07IH1cbmZ1bmN0aW9uIGNvbXBpbGVWYXIoZSwgdCwgcikgeyB2YXIgbiA9IHBhcnNlVmFyKGUsIHIpOyBpZiAoIW4pXG4gICAgcmV0dXJuIHQucHVzaChlLnN1YnN0cmluZyhyLCBlLmxlbmd0aCkpLCBlLmxlbmd0aDsgdmFyIHMgPSBuLnByb3BOYW1lLCBvID0gbnVsbCAhPSBuLmZhbGxiYWNrID8gY29tcGlsZVRlbXBsYXRlKG4uZmFsbGJhY2spIDogdm9pZCAwOyByZXR1cm4gdC5wdXNoKGUuc3Vic3RyaW5nKHIsIG4uc3RhcnQpLCAoZnVuY3Rpb24gKGUpIHsgcmV0dXJuIHJlc29sdmVWYXIoZSwgcywgbyk7IH0pKSwgbi5lbmQ7IH1cbmZ1bmN0aW9uIGV4ZWN1dGVUZW1wbGF0ZShlLCB0KSB7IGZvciAodmFyIHIgPSBcIlwiLCBuID0gMDsgbiA8IGUubGVuZ3RoOyBuKyspIHtcbiAgICB2YXIgcyA9IGVbbl07XG4gICAgciArPSBcInN0cmluZ1wiID09IHR5cGVvZiBzID8gcyA6IHModCk7XG59IHJldHVybiByOyB9XG5mdW5jdGlvbiBmaW5kRW5kVmFsdWUoZSwgdCkgeyBmb3IgKHZhciByID0gITEsIG4gPSAhMSwgcyA9IHQ7IHMgPCBlLmxlbmd0aDsgcysrKSB7XG4gICAgdmFyIG8gPSBlW3NdO1xuICAgIGlmIChyKVxuICAgICAgICBuICYmICdcIicgPT09IG8gJiYgKHIgPSAhMSksIG4gfHwgXCInXCIgIT09IG8gfHwgKHIgPSAhMSk7XG4gICAgZWxzZSBpZiAoJ1wiJyA9PT0gbylcbiAgICAgICAgciA9ICEwLCBuID0gITA7XG4gICAgZWxzZSBpZiAoXCInXCIgPT09IG8pXG4gICAgICAgIHIgPSAhMCwgbiA9ICExO1xuICAgIGVsc2Uge1xuICAgICAgICBpZiAoXCI7XCIgPT09IG8pXG4gICAgICAgICAgICByZXR1cm4gcyArIDE7XG4gICAgICAgIGlmIChcIn1cIiA9PT0gbylcbiAgICAgICAgICAgIHJldHVybiBzO1xuICAgIH1cbn0gcmV0dXJuIHM7IH1cbmZ1bmN0aW9uIHJlbW92ZUN1c3RvbUFzc2lnbnMoZSkgeyBmb3IgKHZhciB0ID0gXCJcIiwgciA9IDA7Oykge1xuICAgIHZhciBuID0gZmluZFJlZ2V4KFZBUl9BU1NJR05fU1RBUlQsIGUsIHIpLCBzID0gbiA/IG4uc3RhcnQgOiBlLmxlbmd0aDtcbiAgICBpZiAodCArPSBlLnN1YnN0cmluZyhyLCBzKSwgIW4pXG4gICAgICAgIGJyZWFrO1xuICAgIHIgPSBmaW5kRW5kVmFsdWUoZSwgcyk7XG59IHJldHVybiB0OyB9XG5mdW5jdGlvbiBjb21waWxlVGVtcGxhdGUoZSkgeyB2YXIgdCA9IDA7IGUgPSByZW1vdmVDdXN0b21Bc3NpZ25zKGUgPSBlLnJlcGxhY2UoQ09NTUVOVFMsIFwiXCIpKS5yZXBsYWNlKFRSQUlMSU5HX0xJTkVTLCBcIlwiKTsgZm9yICh2YXIgciA9IFtdOyB0IDwgZS5sZW5ndGg7KVxuICAgIHQgPSBjb21waWxlVmFyKGUsIHIsIHQpOyByZXR1cm4gcjsgfVxuZnVuY3Rpb24gcmVzb2x2ZVZhbHVlcyhlKSB7IHZhciB0ID0ge307IGUuZm9yRWFjaCgoZnVuY3Rpb24gKGUpIHsgZS5kZWNsYXJhdGlvbnMuZm9yRWFjaCgoZnVuY3Rpb24gKGUpIHsgdFtlLnByb3BdID0gZS52YWx1ZTsgfSkpOyB9KSk7IGZvciAodmFyIHIgPSB7fSwgbiA9IE9iamVjdC5lbnRyaWVzKHQpLCBzID0gZnVuY3Rpb24gKGUpIHsgdmFyIHQgPSAhMTsgaWYgKG4uZm9yRWFjaCgoZnVuY3Rpb24gKGUpIHsgdmFyIG4gPSBlWzBdLCBzID0gZXhlY3V0ZVRlbXBsYXRlKGVbMV0sIHIpOyBzICE9PSByW25dICYmIChyW25dID0gcywgdCA9ICEwKTsgfSkpLCAhdClcbiAgICByZXR1cm4gXCJicmVha1wiOyB9LCBvID0gMDsgbyA8IDEwOyBvKyspIHtcbiAgICBpZiAoXCJicmVha1wiID09PSBzKCkpXG4gICAgICAgIGJyZWFrO1xufSByZXR1cm4gcjsgfVxuZnVuY3Rpb24gZ2V0U2VsZWN0b3JzKGUsIHQpIHsgaWYgKHZvaWQgMCA9PT0gdCAmJiAodCA9IDApLCAhZS5ydWxlcylcbiAgICByZXR1cm4gW107IHZhciByID0gW107IHJldHVybiBlLnJ1bGVzLmZpbHRlcigoZnVuY3Rpb24gKGUpIHsgcmV0dXJuIGUudHlwZSA9PT0gdHlwZXMuU1RZTEVfUlVMRTsgfSkpLmZvckVhY2goKGZ1bmN0aW9uIChlKSB7IHZhciBuID0gZ2V0RGVjbGFyYXRpb25zKGUuY3NzVGV4dCk7IG4ubGVuZ3RoID4gMCAmJiBlLnBhcnNlZFNlbGVjdG9yLnNwbGl0KFwiLFwiKS5mb3JFYWNoKChmdW5jdGlvbiAoZSkgeyBlID0gZS50cmltKCksIHIucHVzaCh7IHNlbGVjdG9yOiBlLCBkZWNsYXJhdGlvbnM6IG4sIHNwZWNpZmljaXR5OiBjb21wdXRlU3BlY2lmaWNpdHkoKSwgbnU6IHQgfSk7IH0pKSwgdCsrOyB9KSksIHI7IH1cbmZ1bmN0aW9uIGNvbXB1dGVTcGVjaWZpY2l0eShlKSB7IHJldHVybiAxOyB9XG52YXIgSU1QT1JUQU5UID0gXCIhaW1wb3J0YW50XCIsIEZJTkRfREVDTEFSQVRJT05TID0gLyg/Ol58WztcXHN7XVxccyopKC0tW1xcdy1dKj8pXFxzKjpcXHMqKD86KCg/OicoPzpcXFxcJ3wuKSo/J3xcIig/OlxcXFxcInwuKSo/XCJ8XFwoW14pXSo/XFwpfFtefTt7XSkrKXxcXHsoW159XSopXFx9KD86KD89WztcXHN9XSl8JCkpL2dtO1xuZnVuY3Rpb24gZ2V0RGVjbGFyYXRpb25zKGUpIHsgZm9yICh2YXIgdCwgciA9IFtdOyB0ID0gRklORF9ERUNMQVJBVElPTlMuZXhlYyhlLnRyaW0oKSk7KSB7XG4gICAgdmFyIG4gPSBub3JtYWxpemVWYWx1ZSh0WzJdKSwgcyA9IG4udmFsdWUsIG8gPSBuLmltcG9ydGFudDtcbiAgICByLnB1c2goeyBwcm9wOiB0WzFdLnRyaW0oKSwgdmFsdWU6IGNvbXBpbGVUZW1wbGF0ZShzKSwgaW1wb3J0YW50OiBvIH0pO1xufSByZXR1cm4gcjsgfVxuZnVuY3Rpb24gbm9ybWFsaXplVmFsdWUoZSkgeyB2YXIgdCA9IChlID0gZS5yZXBsYWNlKC9cXHMrL2dpbSwgXCIgXCIpLnRyaW0oKSkuZW5kc1dpdGgoSU1QT1JUQU5UKTsgcmV0dXJuIHQgJiYgKGUgPSBlLnN1YnN0cigwLCBlLmxlbmd0aCAtIElNUE9SVEFOVC5sZW5ndGgpLnRyaW0oKSksIHsgdmFsdWU6IGUsIGltcG9ydGFudDogdCB9OyB9XG5mdW5jdGlvbiBnZXRBY3RpdmVTZWxlY3RvcnMoZSwgdCwgcikgeyB2YXIgbiA9IFtdLCBzID0gZ2V0U2NvcGVzRm9yRWxlbWVudCh0LCBlKTsgcmV0dXJuIHIuZm9yRWFjaCgoZnVuY3Rpb24gKGUpIHsgcmV0dXJuIG4ucHVzaChlKTsgfSkpLCBzLmZvckVhY2goKGZ1bmN0aW9uIChlKSB7IHJldHVybiBuLnB1c2goZSk7IH0pKSwgc29ydFNlbGVjdG9ycyhnZXRTZWxlY3RvcnNGb3JTY29wZXMobikuZmlsdGVyKChmdW5jdGlvbiAodCkgeyByZXR1cm4gbWF0Y2hlcyhlLCB0LnNlbGVjdG9yKTsgfSkpKTsgfVxuZnVuY3Rpb24gZ2V0U2NvcGVzRm9yRWxlbWVudChlLCB0KSB7IGZvciAodmFyIHIgPSBbXTsgdDspIHtcbiAgICB2YXIgbiA9IGUuZ2V0KHQpO1xuICAgIG4gJiYgci5wdXNoKG4pLCB0ID0gdC5wYXJlbnRFbGVtZW50O1xufSByZXR1cm4gcjsgfVxuZnVuY3Rpb24gZ2V0U2VsZWN0b3JzRm9yU2NvcGVzKGUpIHsgdmFyIHQgPSBbXTsgcmV0dXJuIGUuZm9yRWFjaCgoZnVuY3Rpb24gKGUpIHsgdC5wdXNoLmFwcGx5KHQsIGUuc2VsZWN0b3JzKTsgfSkpLCB0OyB9XG5mdW5jdGlvbiBzb3J0U2VsZWN0b3JzKGUpIHsgcmV0dXJuIGUuc29ydCgoZnVuY3Rpb24gKGUsIHQpIHsgcmV0dXJuIGUuc3BlY2lmaWNpdHkgPT09IHQuc3BlY2lmaWNpdHkgPyBlLm51IC0gdC5udSA6IGUuc3BlY2lmaWNpdHkgLSB0LnNwZWNpZmljaXR5OyB9KSksIGU7IH1cbmZ1bmN0aW9uIG1hdGNoZXMoZSwgdCkgeyByZXR1cm4gXCI6cm9vdFwiID09PSB0IHx8IFwiaHRtbFwiID09PSB0IHx8IGUubWF0Y2hlcyh0KTsgfVxuZnVuY3Rpb24gcGFyc2VDU1MoZSkgeyB2YXIgdCA9IHBhcnNlKGUpLCByID0gY29tcGlsZVRlbXBsYXRlKGUpOyByZXR1cm4geyBvcmlnaW5hbDogZSwgdGVtcGxhdGU6IHIsIHNlbGVjdG9yczogZ2V0U2VsZWN0b3JzKHQpLCB1c2VzQ3NzVmFyczogci5sZW5ndGggPiAxIH07IH1cbmZ1bmN0aW9uIGFkZEdsb2JhbFN0eWxlKGUsIHQpIHsgaWYgKGUuc29tZSgoZnVuY3Rpb24gKGUpIHsgcmV0dXJuIGUuc3R5bGVFbCA9PT0gdDsgfSkpKVxuICAgIHJldHVybiAhMTsgdmFyIHIgPSBwYXJzZUNTUyh0LnRleHRDb250ZW50KTsgcmV0dXJuIHIuc3R5bGVFbCA9IHQsIGUucHVzaChyKSwgITA7IH1cbmZ1bmN0aW9uIHVwZGF0ZUdsb2JhbFNjb3BlcyhlKSB7IHZhciB0ID0gcmVzb2x2ZVZhbHVlcyhnZXRTZWxlY3RvcnNGb3JTY29wZXMoZSkpOyBlLmZvckVhY2goKGZ1bmN0aW9uIChlKSB7IGUudXNlc0Nzc1ZhcnMgJiYgKGUuc3R5bGVFbC50ZXh0Q29udGVudCA9IGV4ZWN1dGVUZW1wbGF0ZShlLnRlbXBsYXRlLCB0KSk7IH0pKTsgfVxuZnVuY3Rpb24gcmVTY29wZShlLCB0KSB7IHZhciByID0gZS50ZW1wbGF0ZS5tYXAoKGZ1bmN0aW9uIChyKSB7IHJldHVybiBcInN0cmluZ1wiID09IHR5cGVvZiByID8gcmVwbGFjZVNjb3BlKHIsIGUuc2NvcGVJZCwgdCkgOiByOyB9KSksIG4gPSBlLnNlbGVjdG9ycy5tYXAoKGZ1bmN0aW9uIChyKSB7IHJldHVybiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHIpLCB7IHNlbGVjdG9yOiByZXBsYWNlU2NvcGUoci5zZWxlY3RvciwgZS5zY29wZUlkLCB0KSB9KTsgfSkpOyByZXR1cm4gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBlKSwgeyB0ZW1wbGF0ZTogciwgc2VsZWN0b3JzOiBuLCBzY29wZUlkOiB0IH0pOyB9XG5mdW5jdGlvbiByZXBsYWNlU2NvcGUoZSwgdCwgcikgeyByZXR1cm4gZSA9IHJlcGxhY2VBbGwoZSwgXCJcXFxcLlwiICsgdCwgXCIuXCIgKyByKTsgfVxuZnVuY3Rpb24gcmVwbGFjZUFsbChlLCB0LCByKSB7IHJldHVybiBlLnJlcGxhY2UobmV3IFJlZ0V4cCh0LCBcImdcIiksIHIpOyB9XG5mdW5jdGlvbiBsb2FkRG9jdW1lbnQoZSwgdCkgeyByZXR1cm4gbG9hZERvY3VtZW50U3R5bGVzKGUsIHQpLCBsb2FkRG9jdW1lbnRMaW5rcyhlLCB0KS50aGVuKChmdW5jdGlvbiAoKSB7IHVwZGF0ZUdsb2JhbFNjb3Blcyh0KTsgfSkpOyB9XG5mdW5jdGlvbiBzdGFydFdhdGNoZXIoZSwgdCkgeyBcInVuZGVmaW5lZFwiICE9IHR5cGVvZiBNdXRhdGlvbk9ic2VydmVyICYmIG5ldyBNdXRhdGlvbk9ic2VydmVyKChmdW5jdGlvbiAoKSB7IGxvYWREb2N1bWVudFN0eWxlcyhlLCB0KSAmJiB1cGRhdGVHbG9iYWxTY29wZXModCk7IH0pKS5vYnNlcnZlKGRvY3VtZW50LmhlYWQsIHsgY2hpbGRMaXN0OiAhMCB9KTsgfVxuZnVuY3Rpb24gbG9hZERvY3VtZW50TGlua3MoZSwgdCkgeyBmb3IgKHZhciByID0gW10sIG4gPSBlLnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpbmtbcmVsPVwic3R5bGVzaGVldFwiXVtocmVmXTpub3QoW2RhdGEtbm8tc2hpbV0pJyksIHMgPSAwOyBzIDwgbi5sZW5ndGg7IHMrKylcbiAgICByLnB1c2goYWRkR2xvYmFsTGluayhlLCB0LCBuW3NdKSk7IHJldHVybiBQcm9taXNlLmFsbChyKTsgfVxuZnVuY3Rpb24gbG9hZERvY3VtZW50U3R5bGVzKGUsIHQpIHsgcmV0dXJuIEFycmF5LmZyb20oZS5xdWVyeVNlbGVjdG9yQWxsKFwic3R5bGU6bm90KFtkYXRhLXN0eWxlc10pOm5vdChbZGF0YS1uby1zaGltXSlcIikpLm1hcCgoZnVuY3Rpb24gKGUpIHsgcmV0dXJuIGFkZEdsb2JhbFN0eWxlKHQsIGUpOyB9KSkuc29tZShCb29sZWFuKTsgfVxuZnVuY3Rpb24gYWRkR2xvYmFsTGluayhlLCB0LCByKSB7IHZhciBuID0gci5ocmVmOyByZXR1cm4gZmV0Y2gobikudGhlbigoZnVuY3Rpb24gKGUpIHsgcmV0dXJuIGUudGV4dCgpOyB9KSkudGhlbigoZnVuY3Rpb24gKHMpIHsgaWYgKGhhc0Nzc1ZhcmlhYmxlcyhzKSAmJiByLnBhcmVudE5vZGUpIHtcbiAgICBoYXNSZWxhdGl2ZVVybHMocykgJiYgKHMgPSBmaXhSZWxhdGl2ZVVybHMocywgbikpO1xuICAgIHZhciBvID0gZS5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gICAgby5zZXRBdHRyaWJ1dGUoXCJkYXRhLXN0eWxlc1wiLCBcIlwiKSwgby50ZXh0Q29udGVudCA9IHMsIGFkZEdsb2JhbFN0eWxlKHQsIG8pLCByLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKG8sIHIpLCByLnJlbW92ZSgpO1xufSB9KSkuY2F0Y2goKGZ1bmN0aW9uIChlKSB7IGNvbnNvbGUuZXJyb3IoZSk7IH0pKTsgfVxudmFyIENTU19WQVJJQUJMRV9SRUdFWFAgPSAvW1xcczt7XS0tWy1hLXpBLVowLTldK1xccyo6L207XG5mdW5jdGlvbiBoYXNDc3NWYXJpYWJsZXMoZSkgeyByZXR1cm4gZS5pbmRleE9mKFwidmFyKFwiKSA+IC0xIHx8IENTU19WQVJJQUJMRV9SRUdFWFAudGVzdChlKTsgfVxudmFyIENTU19VUkxfUkVHRVhQID0gL3VybFtcXHNdKlxcKFtcXHNdKlsnXCJdPyg/ISg/Omh0dHBzP3xkYXRhKVxcOnxcXC8pKFteXFwnXFxcIlxcKV0qKVtcXHNdKlsnXCJdP1xcKVtcXHNdKi9naW07XG5mdW5jdGlvbiBoYXNSZWxhdGl2ZVVybHMoZSkgeyByZXR1cm4gQ1NTX1VSTF9SRUdFWFAubGFzdEluZGV4ID0gMCwgQ1NTX1VSTF9SRUdFWFAudGVzdChlKTsgfVxuZnVuY3Rpb24gZml4UmVsYXRpdmVVcmxzKGUsIHQpIHsgdmFyIHIgPSB0LnJlcGxhY2UoL1teL10qJC8sIFwiXCIpOyByZXR1cm4gZS5yZXBsYWNlKENTU19VUkxfUkVHRVhQLCAoZnVuY3Rpb24gKGUsIHQpIHsgdmFyIG4gPSByICsgdDsgcmV0dXJuIGUucmVwbGFjZSh0LCBuKTsgfSkpOyB9XG52YXIgQ3VzdG9tU3R5bGUgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGUoZSwgdCkgeyB0aGlzLndpbiA9IGUsIHRoaXMuZG9jID0gdCwgdGhpcy5jb3VudCA9IDAsIHRoaXMuaG9zdFN0eWxlTWFwID0gbmV3IFdlYWtNYXAsIHRoaXMuaG9zdFNjb3BlTWFwID0gbmV3IFdlYWtNYXAsIHRoaXMuZ2xvYmFsU2NvcGVzID0gW10sIHRoaXMuc2NvcGVzTWFwID0gbmV3IE1hcCwgdGhpcy5kaWRJbml0ID0gITE7IH0gcmV0dXJuIGUucHJvdG90eXBlLmkgPSBmdW5jdGlvbiAoKSB7IHZhciBlID0gdGhpczsgcmV0dXJuIHRoaXMuZGlkSW5pdCB8fCAhdGhpcy53aW4ucmVxdWVzdEFuaW1hdGlvbkZyYW1lID8gUHJvbWlzZS5yZXNvbHZlKCkgOiAodGhpcy5kaWRJbml0ID0gITAsIG5ldyBQcm9taXNlKChmdW5jdGlvbiAodCkgeyBlLndpbi5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKGZ1bmN0aW9uICgpIHsgc3RhcnRXYXRjaGVyKGUuZG9jLCBlLmdsb2JhbFNjb3BlcyksIGxvYWREb2N1bWVudChlLmRvYywgZS5nbG9iYWxTY29wZXMpLnRoZW4oKGZ1bmN0aW9uICgpIHsgcmV0dXJuIHQoKTsgfSkpOyB9KSk7IH0pKSk7IH0sIGUucHJvdG90eXBlLmFkZExpbmsgPSBmdW5jdGlvbiAoZSkgeyB2YXIgdCA9IHRoaXM7IHJldHVybiBhZGRHbG9iYWxMaW5rKHRoaXMuZG9jLCB0aGlzLmdsb2JhbFNjb3BlcywgZSkudGhlbigoZnVuY3Rpb24gKCkgeyB0LnVwZGF0ZUdsb2JhbCgpOyB9KSk7IH0sIGUucHJvdG90eXBlLmFkZEdsb2JhbFN0eWxlID0gZnVuY3Rpb24gKGUpIHsgYWRkR2xvYmFsU3R5bGUodGhpcy5nbG9iYWxTY29wZXMsIGUpICYmIHRoaXMudXBkYXRlR2xvYmFsKCk7IH0sIGUucHJvdG90eXBlLmNyZWF0ZUhvc3RTdHlsZSA9IGZ1bmN0aW9uIChlLCB0LCByLCBuKSB7IGlmICh0aGlzLmhvc3RTY29wZU1hcC5oYXMoZSkpXG4gICAgdGhyb3cgbmV3IEVycm9yKFwiaG9zdCBzdHlsZSBhbHJlYWR5IGNyZWF0ZWRcIik7IHZhciBzID0gdGhpcy5yZWdpc3Rlckhvc3RUZW1wbGF0ZShyLCB0LCBuKSwgbyA9IHRoaXMuZG9jLmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTsgcmV0dXJuIG8uc2V0QXR0cmlidXRlKFwiZGF0YS1uby1zaGltXCIsIFwiXCIpLCBzLnVzZXNDc3NWYXJzID8gbiA/IChvW1wicy1zY1wiXSA9IHQgPSBzLnNjb3BlSWQgKyBcIi1cIiArIHRoaXMuY291bnQsIG8udGV4dENvbnRlbnQgPSBcIi8qbmVlZHMgdXBkYXRlKi9cIiwgdGhpcy5ob3N0U3R5bGVNYXAuc2V0KGUsIG8pLCB0aGlzLmhvc3RTY29wZU1hcC5zZXQoZSwgcmVTY29wZShzLCB0KSksIHRoaXMuY291bnQrKykgOiAocy5zdHlsZUVsID0gbywgcy51c2VzQ3NzVmFycyB8fCAoby50ZXh0Q29udGVudCA9IGV4ZWN1dGVUZW1wbGF0ZShzLnRlbXBsYXRlLCB7fSkpLCB0aGlzLmdsb2JhbFNjb3Blcy5wdXNoKHMpLCB0aGlzLnVwZGF0ZUdsb2JhbCgpLCB0aGlzLmhvc3RTY29wZU1hcC5zZXQoZSwgcykpIDogby50ZXh0Q29udGVudCA9IHIsIG87IH0sIGUucHJvdG90eXBlLnJlbW92ZUhvc3QgPSBmdW5jdGlvbiAoZSkgeyB2YXIgdCA9IHRoaXMuaG9zdFN0eWxlTWFwLmdldChlKTsgdCAmJiB0LnJlbW92ZSgpLCB0aGlzLmhvc3RTdHlsZU1hcC5kZWxldGUoZSksIHRoaXMuaG9zdFNjb3BlTWFwLmRlbGV0ZShlKTsgfSwgZS5wcm90b3R5cGUudXBkYXRlSG9zdCA9IGZ1bmN0aW9uIChlKSB7IHZhciB0ID0gdGhpcy5ob3N0U2NvcGVNYXAuZ2V0KGUpOyBpZiAodCAmJiB0LnVzZXNDc3NWYXJzICYmIHQuaXNTY29wZWQpIHtcbiAgICB2YXIgciA9IHRoaXMuaG9zdFN0eWxlTWFwLmdldChlKTtcbiAgICBpZiAocikge1xuICAgICAgICB2YXIgbiA9IHJlc29sdmVWYWx1ZXMoZ2V0QWN0aXZlU2VsZWN0b3JzKGUsIHRoaXMuaG9zdFNjb3BlTWFwLCB0aGlzLmdsb2JhbFNjb3BlcykpO1xuICAgICAgICByLnRleHRDb250ZW50ID0gZXhlY3V0ZVRlbXBsYXRlKHQudGVtcGxhdGUsIG4pO1xuICAgIH1cbn0gfSwgZS5wcm90b3R5cGUudXBkYXRlR2xvYmFsID0gZnVuY3Rpb24gKCkgeyB1cGRhdGVHbG9iYWxTY29wZXModGhpcy5nbG9iYWxTY29wZXMpOyB9LCBlLnByb3RvdHlwZS5yZWdpc3Rlckhvc3RUZW1wbGF0ZSA9IGZ1bmN0aW9uIChlLCB0LCByKSB7IHZhciBuID0gdGhpcy5zY29wZXNNYXAuZ2V0KHQpOyByZXR1cm4gbiB8fCAoKG4gPSBwYXJzZUNTUyhlKSkuc2NvcGVJZCA9IHQsIG4uaXNTY29wZWQgPSByLCB0aGlzLnNjb3Blc01hcC5zZXQodCwgbikpLCBuOyB9LCBlOyB9KCk7XG4hZnVuY3Rpb24gKGUpIHsgIWUgfHwgZS5fX2Nzc3NoaW0gfHwgZS5DU1MgJiYgZS5DU1Muc3VwcG9ydHMgJiYgZS5DU1Muc3VwcG9ydHMoXCJjb2xvclwiLCBcInZhcigtLWMpXCIpIHx8IChlLl9fY3Nzc2hpbSA9IG5ldyBDdXN0b21TdHlsZShlLCBlLmRvY3VtZW50KSk7IH0oXCJ1bmRlZmluZWRcIiAhPSB0eXBlb2Ygd2luZG93ICYmIHdpbmRvdyk7XG4iXSwic291cmNlUm9vdCI6IiJ9
