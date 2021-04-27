/*! For license information please see 801.ef685158a83c9cda54ff.js.LICENSE.txt */
(self.webpackChunkhidden_parts_demo =
  self.webpackChunkhidden_parts_demo || []).push([
  [801],
  {
    801: (e, t, r) => {
      'use strict';
      r.r(t), r.d(t, { scopeCss: () => C });
      var n = r(655),
        s = '-shadowcsshost',
        o = ')(?:\\(((?:\\([^)(]*\\)|[^)(]*)+?)\\))?([^,{]*)',
        c = new RegExp('(-shadowcsshost' + o, 'gim'),
        a = new RegExp('(-shadowcsscontext' + o, 'gim'),
        i = new RegExp('(-shadowcssslotted' + o, 'gim'),
        u = '-shadowcsshost-no-combinator',
        l = /-shadowcsshost-no-combinator([^\s]*)/,
        h = [/::shadow/g, /::content/g],
        p = /-shadowcsshost/gim,
        f = /:host/gim,
        d = /::slotted/gim,
        g = /:host-context/gim,
        m = /\/\*\s*[\s\S]*?\*\//g,
        v = /\/\*\s*#\s*source(Mapping)?URL=[\s\S]+?\*\//g,
        _ = /(\s*)([^;\{\}]+?)(\s*)((?:{%BLOCK%}?\s*;?)|(?:\s*;))/g,
        x = /([{}])/g,
        w = '%BLOCK%',
        b = function (e, t) {
          var r = S(e),
            n = 0;
          return r.escapedString.replace(_, function () {
            for (var e = [], s = 0; s < arguments.length; s++)
              e[s] = arguments[s];
            var o = e[2],
              c = '',
              a = e[4],
              i = '';
            a &&
              a.startsWith('{%BLOCK%') &&
              ((c = r.blocks[n++]), (a = a.substring(w.length + 1)), (i = '{'));
            var u = { selector: o, content: c },
              l = t(u);
            return '' + e[1] + l.selector + e[3] + i + l.content + a;
          });
        },
        S = function (e) {
          for (
            var t = e.split(x), r = [], n = [], s = 0, o = [], c = 0;
            c < t.length;
            c++
          ) {
            var a = t[c];
            '}' === a && s--,
              s > 0
                ? o.push(a)
                : (o.length > 0 && (n.push(o.join('')), r.push(w), (o = [])),
                  r.push(a)),
              '{' === a && s++;
          }
          return (
            o.length > 0 && (n.push(o.join('')), r.push(w)),
            { escapedString: r.join(''), blocks: n }
          );
        },
        O = function (e, t, r) {
          return e.replace(t, function () {
            for (var e = [], t = 0; t < arguments.length; t++)
              e[t] = arguments[t];
            if (e[2]) {
              for (var n = e[2].split(','), s = [], o = 0; o < n.length; o++) {
                var c = n[o].trim();
                if (!c) break;
                s.push(r(u, c, e[3]));
              }
              return s.join(',');
            }
            return u + e[3];
          });
        },
        W = function (e, t, r) {
          return e + t.replace(s, '') + r;
        },
        k = function (e, t, r) {
          return t.indexOf(s) > -1
            ? W(e, t, r)
            : e + t + r + ', ' + t + ' ' + e + r;
        },
        j = function (e, t, r, n, s) {
          return b(e, function (e) {
            var s = e.selector,
              o = e.content;
            return (
              '@' !== e.selector[0]
                ? (s = (function (e, t, r, n) {
                    return e
                      .split(',')
                      .map(function (e) {
                        return n && e.indexOf('.' + n) > -1
                          ? e.trim()
                          : (function (e, t) {
                              return !(function (e) {
                                return (
                                  (e = e
                                    .replace(/\[/g, '\\[')
                                    .replace(/\]/g, '\\]')),
                                  new RegExp(
                                    '^(' + e + ')([>\\s~+[.,{:][\\s\\S]*)?$',
                                    'm'
                                  )
                                );
                              })(t).test(e);
                            })(e, t)
                          ? (function (e, t, r) {
                              for (
                                var n,
                                  s =
                                    '.' +
                                    (t = t.replace(
                                      /\[is=([^\]]*)\]/g,
                                      function (e) {
                                        for (
                                          var t = [], r = 1;
                                          r < arguments.length;
                                          r++
                                        )
                                          t[r - 1] = arguments[r];
                                        return t[0];
                                      }
                                    )),
                                  o = function (e) {
                                    var n = e.trim();
                                    if (!n) return '';
                                    if (e.indexOf(u) > -1)
                                      n = (function (e, t, r) {
                                        if (((p.lastIndex = 0), p.test(e))) {
                                          var n = '.' + r;
                                          return e
                                            .replace(l, function (e, t) {
                                              return t.replace(
                                                /([^:]*)(:*)(.*)/,
                                                function (e, t, r, s) {
                                                  return t + n + r + s;
                                                }
                                              );
                                            })
                                            .replace(p, n + ' ');
                                        }
                                        return t + ' ' + e;
                                      })(e, t, r);
                                    else {
                                      var o = e.replace(p, '');
                                      if (o.length > 0) {
                                        var c = o.match(/([^:]*)(:*)(.*)/);
                                        c && (n = c[1] + s + c[2] + c[3]);
                                      }
                                    }
                                    return n;
                                  },
                                  c = (function (e) {
                                    var t = [],
                                      r = 0;
                                    return {
                                      content: (e = e.replace(
                                        /(\[[^\]]*\])/g,
                                        function (e, n) {
                                          var s = '__ph-' + r + '__';
                                          return t.push(n), r++, s;
                                        }
                                      )).replace(
                                        /(:nth-[-\w]+)(\([^)]+\))/g,
                                        function (e, n, s) {
                                          var o = '__ph-' + r + '__';
                                          return t.push(s), r++, n + o;
                                        }
                                      ),
                                      placeholders: t,
                                    };
                                  })(e),
                                  a = '',
                                  i = 0,
                                  h = /( |>|\+|~(?!=))\s*/g,
                                  f = !((e = c.content).indexOf(u) > -1);
                                null !== (n = h.exec(e));

                              ) {
                                var d = n[1],
                                  g = e.slice(i, n.index).trim();
                                (a +=
                                  ((f = f || g.indexOf(u) > -1) ? o(g) : g) +
                                  ' ' +
                                  d +
                                  ' '),
                                  (i = h.lastIndex);
                              }
                              var m,
                                v = e.substring(i);
                              return (
                                (a += (f = f || v.indexOf(u) > -1) ? o(v) : v),
                                (m = c.placeholders),
                                a.replace(/__ph-(\d+)__/g, function (e, t) {
                                  return m[+t];
                                })
                              );
                            })(e, t, r).trim()
                          : e.trim();
                      })
                      .join(', ');
                  })(e.selector, t, r, n))
                : (e.selector.startsWith('@media') ||
                    e.selector.startsWith('@supports') ||
                    e.selector.startsWith('@page') ||
                    e.selector.startsWith('@document')) &&
                  (o = j(e.content, t, r, n)),
              { selector: s.replace(/\s{2,}/g, ' ').trim(), content: o }
            );
          });
        },
        C = function (e, t, r) {
          var o = t + '-h',
            l = t + '-s',
            p = e.match(v) || [];
          e = e.replace(m, '');
          var _ = [];
          if (r) {
            var x = function (e) {
              var t = '/*!@___' + _.length + '___*/',
                r = '/*!@' + e.selector + '*/';
              return (
                _.push({ placeholder: t, comment: r }),
                (e.selector = t + e.selector),
                e
              );
            };
            e = b(e, function (e) {
              return '@' !== e.selector[0]
                ? x(e)
                : e.selector.startsWith('@media') ||
                  e.selector.startsWith('@supports') ||
                  e.selector.startsWith('@page') ||
                  e.selector.startsWith('@document')
                ? ((e.content = b(e.content, x)), e)
                : e;
            });
          }
          var w = (function (e, t, r, n, o) {
            var l = (function (e, t) {
              var r = '.' + t + ' > ',
                n = [];
              return (
                (e = e.replace(i, function () {
                  for (var e = [], t = 0; t < arguments.length; t++)
                    e[t] = arguments[t];
                  if (e[2]) {
                    for (
                      var s = e[2].trim(),
                        o = e[3],
                        c = r + s + o,
                        a = '',
                        i = e[4] - 1;
                      i >= 0;
                      i--
                    ) {
                      var l = e[5][i];
                      if ('}' === l || ',' === l) break;
                      a = l + a;
                    }
                    var h = a + c,
                      p = '' + a.trimRight() + c.trim();
                    if (h.trim() !== p.trim()) {
                      var f = p + ', ' + h;
                      n.push({ orgSelector: h, updatedSelector: f });
                    }
                    return c;
                  }
                  return u + e[3];
                })),
                { selectors: n, cssText: e }
              );
            })(
              (e = (function (e) {
                return O(e, a, k);
              })(
                (e = (function (e) {
                  return O(e, c, W);
                })(
                  (e = e
                    .replace(g, '-shadowcsscontext')
                    .replace(f, s)
                    .replace(d, '-shadowcssslotted'))
                ))
              )),
              n
            );
            return (
              (e = (function (e) {
                return h.reduce(function (e, t) {
                  return e.replace(t, ' ');
                }, e);
              })((e = l.cssText))),
              t && (e = j(e, t, r, n)),
              {
                cssText: (e = (e = e.replace(
                  /-shadowcsshost-no-combinator/g,
                  '.' + r
                )).replace(/>\s*\*\s+([^{, ]+)/gm, ' $1 ')).trim(),
                slottedSelectors: l.selectors,
              }
            );
          })(e, t, o, l);
          return (
            (e = (0, n.pr)([w.cssText], p).join('\n')),
            r &&
              _.forEach(function (t) {
                var r = t.placeholder,
                  n = t.comment;
                e = e.replace(r, n);
              }),
            w.slottedSelectors.forEach(function (t) {
              e = e.replace(t.orgSelector, t.updatedSelector);
            }),
            e
          );
        };
    },
  },
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oaWRkZW4tcGFydHMtZGVtby8uL25vZGVfbW9kdWxlcy9AdmVydGV4dmlzL3ZpZXdlci9kaXN0L2VzbS1lczUvc2hhZG93LWNzcy1jNjM5NjNiNS5qcyJdLCJuYW1lcyI6WyJfcG9seWZpbGxIb3N0IiwiX3BhcmVuU3VmZml4IiwiX2Nzc0NvbG9uSG9zdFJlIiwiUmVnRXhwIiwiX2Nzc0NvbG9uSG9zdENvbnRleHRSZSIsIl9jc3NDb2xvblNsb3R0ZWRSZSIsIl9wb2x5ZmlsbEhvc3ROb0NvbWJpbmF0b3IiLCJfcG9seWZpbGxIb3N0Tm9Db21iaW5hdG9yUmUiLCJfc2hhZG93RE9NU2VsZWN0b3JzUmUiLCJfcG9seWZpbGxIb3N0UmUiLCJfY29sb25Ib3N0UmUiLCJfY29sb25TbG90dGVkUmUiLCJfY29sb25Ib3N0Q29udGV4dFJlIiwiX2NvbW1lbnRSZSIsIl9jb21tZW50V2l0aEhhc2hSZSIsIl9ydWxlUmUiLCJfY3VybHlSZSIsIkJMT0NLX1BMQUNFSE9MREVSIiwicHJvY2Vzc1J1bGVzIiwiaW5wdXQiLCJydWxlQ2FsbGJhY2siLCJpbnB1dFdpdGhFc2NhcGVkQmxvY2tzIiwiZXNjYXBlQmxvY2tzIiwibmV4dEJsb2NrSW5kZXgiLCJlc2NhcGVkU3RyaW5nIiwicmVwbGFjZSIsIm0iLCJfaSIsImFyZ3VtZW50cyIsImxlbmd0aCIsInNlbGVjdG9yIiwiY29udGVudCIsInN1ZmZpeCIsImNvbnRlbnRQcmVmaXgiLCJzdGFydHNXaXRoIiwiYmxvY2tzIiwic3Vic3RyaW5nIiwiY3NzUnVsZSIsInJ1bGUiLCJpbnB1dFBhcnRzIiwic3BsaXQiLCJyZXN1bHRQYXJ0cyIsImVzY2FwZWRCbG9ja3MiLCJicmFja2V0Q291bnQiLCJjdXJyZW50QmxvY2tQYXJ0cyIsInBhcnRJbmRleCIsInBhcnQiLCJwdXNoIiwiam9pbiIsImNvbnZlcnRDb2xvblJ1bGUiLCJjc3NUZXh0IiwicmVnRXhwIiwicGFydFJlcGxhY2VyIiwicGFydHMiLCJyIiwiaSIsInAiLCJ0cmltIiwiY29sb25Ib3N0UGFydFJlcGxhY2VyIiwiaG9zdCIsImNvbG9uSG9zdENvbnRleHRQYXJ0UmVwbGFjZXIiLCJpbmRleE9mIiwic2NvcGVTZWxlY3RvcnMiLCJzY29wZVNlbGVjdG9yVGV4dCIsImhvc3RTZWxlY3RvciIsInNsb3RTZWxlY3RvciIsImNvbW1lbnRPcmlnaW5hbFNlbGVjdG9yIiwibWFwIiwic2hhbGxvd1BhcnQiLCJzY29wZVNlbGVjdG9yIiwibWFrZVNjb3BlTWF0Y2hlciIsInRlc3QiLCJzZWxlY3Rvck5lZWRzU2NvcGluZyIsInJlcyIsImNsYXNzTmFtZSIsIl8iLCJfc2NvcGVTZWxlY3RvclBhcnQiLCJzY29wZWRQIiwibGFzdEluZGV4IiwicmVwbGFjZUJ5XzEiLCJiZWZvcmUiLCJjb2xvbiIsImFmdGVyIiwiYXBwbHlTaW1wbGVTZWxlY3RvclNjb3BlIiwidCIsIm1hdGNoZXMiLCJtYXRjaCIsInNhZmVDb250ZW50IiwicGxhY2Vob2xkZXJzIiwiaW5kZXgiLCJrZWVwIiwicmVwbGFjZUJ5IiwicHNldWRvIiwiZXhwIiwic2FmZVNlbGVjdG9yIiwic2NvcGVkU2VsZWN0b3IiLCJzdGFydEluZGV4Iiwic2VwIiwic2hvdWxkU2NvcGUiLCJleGVjIiwic2VwYXJhdG9yIiwicGFydF8xIiwic2xpY2UiLCJhcHBseVN0cmljdFNlbGVjdG9yU2NvcGUiLCJzY29wZUNzcyIsInNjb3BlSWQiLCJob3N0U2NvcGVJZCIsInNsb3RTY29wZUlkIiwiY29tbWVudHNXaXRoSGFzaCIsIm9yZ1NlbGVjdG9ycyIsInByb2Nlc3NDb21tZW50ZWRTZWxlY3Rvcl8xIiwicGxhY2Vob2xkZXIiLCJjb21tZW50Iiwic2NvcGVkIiwic2xvdHRlZCIsInNsb3RDbGFzcyIsInNlbGVjdG9ycyIsImNvbXBvdW5kIiwic2xvdHRlZFNlbGVjdG9yIiwicHJlZml4U2VsZWN0b3IiLCJjaGFyIiwib3JnU2VsZWN0b3IiLCJhZGRlZFNlbGVjdG9yIiwidHJpbVJpZ2h0IiwidXBkYXRlZFNlbGVjdG9yIiwiY29udmVydENvbG9uU2xvdHRlZCIsImNvbnZlcnRDb2xvbkhvc3RDb250ZXh0IiwiY29udmVydENvbG9uSG9zdCIsInJlZHVjZSIsInJlc3VsdCIsInBhdHRlcm4iLCJjb252ZXJ0U2hhZG93RE9NU2VsZWN0b3JzIiwic2xvdHRlZFNlbGVjdG9ycyIsInNjb3BlQ3NzVGV4dCIsImZvckVhY2giLCJfYSJdLCJtYXBwaW5ncyI6IjtnS0ErQ0lBLEVBQWdCLGlCQUloQkMsRUFBZSxrREFDZkMsRUFBa0IsSUFBSUMsT0FBTyxrQkFBc0JGLEVBQWMsT0FDakVHLEVBQXlCLElBQUlELE9BQU8scUJBQTZCRixFQUFjLE9BQy9FSSxFQUFxQixJQUFJRixPQUFPLHFCQUF5QkYsRUFBYyxPQUN2RUssRUFBNEJOLCtCQUM1Qk8sRUFBOEIsdUNBQzlCQyxFQUF3QixDQUFDLFlBQWEsY0FFdENDLEVBQWtCLG9CQUNsQkMsRUFBZSxXQUNmQyxFQUFrQixlQUNsQkMsRUFBc0IsbUJBQ3RCQyxFQUFhLHVCQUliQyxFQUFxQiwrQ0FJckJDLEVBQVUsd0RBQ1ZDLEVBQVcsVUFHWEMsRUFBb0IsVUFDcEJDLEVBQWUsU0FBVUMsRUFBT0MsR0FDaEMsSUFBSUMsRUFBeUJDLEVBQWFILEdBQ3RDSSxFQUFpQixFQUNyQixPQUFPRixFQUF1QkcsY0FBY0MsUUFBUVYsR0FBUyxXQUV6RCxJQURBLElBQUlXLEVBQUksR0FDQ0MsRUFBSyxFQUFHQSxFQUFLQyxVQUFVQyxPQUFRRixJQUNwQ0QsRUFBRUMsR0FBTUMsVUFBVUQsR0FFdEIsSUFBSUcsRUFBV0osRUFBRSxHQUNiSyxFQUFVLEdBQ1ZDLEVBQVNOLEVBQUUsR0FDWE8sRUFBZ0IsR0FDaEJELEdBQVVBLEVBQU9FLFdBQVcsY0FDNUJILEVBQVVWLEVBQXVCYyxPQUFPWixLQUN4Q1MsRUFBU0EsRUFBT0ksVUFBVW5CLEVBQWtCWSxPQUFTLEdBQ3JESSxFQUFnQixLQUVwQixJQUFJSSxFQUFVLENBQ1ZQLFNBQVVBLEVBQ1ZDLFFBQVNBLEdBRVRPLEVBQU9sQixFQUFh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dUQsRUFBU0MsRUFBYUMsR0FXekQsT0FWQXpELEdBQVUsUUFBZSxDQUFDK0QsRUFBTy9ELFNBQVUwRCxHQUFrQjVELEtBQUssTUFDOURrQixHQUNBMkMsRUFBYXlCLFNBQVEsU0FBVUMsR0FDM0IsSUFBSXhCLEVBQWN3QixFQUFHeEIsWUFBYUMsRUFBVXVCLEVBQUd2QixRQUMvQzlELEVBQVVBLEVBQVF6QixRQUFRc0YsRUFBYUMsTUFHL0NDLEVBQU9tQixpQkFBaUJFLFNBQVEsU0FBVWhCLEdBQ3RDcEUsRUFBVUEsRUFBUXpCLFFBQVE2RixFQUFnQkcsWUFBYUgsRUFBZ0JNLG9CQUVwRTFFIiwiZmlsZSI6IjgwMS4wY2ZkM2U4NWM5MzBhMDA0NjVkYy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9fc3ByZWFkQXJyYXlzIH0gZnJvbSBcInRzbGliXCI7XG4vKiohXG4gKiBDb3B5cmlnaHQgKGMpIDIwMjEgVmVydGV4IFNvZnR3YXJlIExMQy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqL1xuLypcbiBTdGVuY2lsIENsaWVudCBQbGF0Zm9ybSB2MS4xNy4zIHwgTUlUIExpY2Vuc2VkIHwgaHR0cHM6Ly9zdGVuY2lsanMuY29tXG4gKi9cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKlxuICogVGhpcyBmaWxlIGlzIGEgcG9ydCBvZiBzaGFkb3dDU1MgZnJvbSB3ZWJjb21wb25lbnRzLmpzIHRvIFR5cGVTY3JpcHQuXG4gKiBodHRwczovL2dpdGh1Yi5jb20vd2ViY29tcG9uZW50cy93ZWJjb21wb25lbnRzanMvYmxvYi80ZWZlY2Q3ZTBlL3NyYy9TaGFkb3dDU1MvU2hhZG93Q1NTLmpzXG4gKiBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2Jsb2IvbWFzdGVyL3BhY2thZ2VzL2NvbXBpbGVyL3NyYy9zaGFkb3dfY3NzLnRzXG4gKi9cbnZhciBzYWZlU2VsZWN0b3IgPSBmdW5jdGlvbiAoc2VsZWN0b3IpIHtcbiAgICB2YXIgcGxhY2Vob2xkZXJzID0gW107XG4gICAgdmFyIGluZGV4ID0gMDtcbiAgICB2YXIgY29udGVudDtcbiAgICAvLyBSZXBsYWNlcyBhdHRyaWJ1dGUgc2VsZWN0b3JzIHdpdGggcGxhY2Vob2xkZXJzLlxuICAgIC8vIFRoZSBXUyBpbiBbYXR0cj1cInZhIGx1ZVwiXSB3b3VsZCBvdGhlcndpc2UgYmUgaW50ZXJwcmV0ZWQgYXMgYSBzZWxlY3RvciBzZXBhcmF0b3IuXG4gICAgc2VsZWN0b3IgPSBzZWxlY3Rvci5yZXBsYWNlKC8oXFxbW15cXF1dKlxcXSkvZywgZnVuY3Rpb24gKF8sIGtlZXApIHtcbiAgICAgICAgdmFyIHJlcGxhY2VCeSA9IFwiX19waC1cIiArIGluZGV4ICsgXCJfX1wiO1xuICAgICAgICBwbGFjZWhvbGRlcnMucHVzaChrZWVwKTtcbiAgICAgICAgaW5kZXgrKztcbiAgICAgICAgcmV0dXJuIHJlcGxhY2VCeTtcbiAgICB9KTtcbiAgICAvLyBSZXBsYWNlcyB0aGUgZXhwcmVzc2lvbiBpbiBgOm50aC1jaGlsZCgybiArIDEpYCB3aXRoIGEgcGxhY2Vob2xkZXIuXG4gICAgLy8gV1MgYW5kIFwiK1wiIHdvdWxkIG90aGVyd2lzZSBiZSBpbnRlcnByZXRlZCBhcyBzZWxlY3RvciBzZXBhcmF0b3JzLlxuICAgIGNvbnRlbnQgPSBzZWxlY3Rvci5yZXBsYWNlKC8oOm50aC1bLVxcd10rKShcXChbXildK1xcKSkvZywgZnVuY3Rpb24gKF8sIHBzZXVkbywgZXhwKSB7XG4gICAgICAgIHZhciByZXBsYWNlQnkgPSBcIl9fcGgtXCIgKyBpbmRleCArIFwiX19cIjtcbiAgICAgICAgcGxhY2Vob2xkZXJzLnB1c2goZXhwKTtcbiAgICAgICAgaW5kZXgrKztcbiAgICAgICAgcmV0dXJuIHBzZXVkbyArIHJlcGxhY2VCeTtcbiAgICB9KTtcbiAgICB2YXIgc3MgPSB7XG4gICAgICAgIGNvbnRlbnQ6IGNvbnRlbnQsXG4gICAgICAgIHBsYWNlaG9sZGVyczogcGxhY2Vob2xkZXJzLFxuICAgIH07XG4gICAgcmV0dXJuIHNzO1xufTtcbnZhciByZXN0b3JlU2FmZVNlbGVjdG9yID0gZnVuY3Rpb24gKHBsYWNlaG9sZGVycywgY29udGVudCkge1xuICAgIHJldHVybiBjb250ZW50LnJlcGxhY2UoL19fcGgtKFxcZCspX18vZywgZnVuY3Rpb24gKF8sIGluZGV4KSB7IHJldHVybiBwbGFjZWhvbGRlcnNbK2luZGV4XTsgfSk7XG59O1xudmFyIF9wb2x5ZmlsbEhvc3QgPSAnLXNoYWRvd2Nzc2hvc3QnO1xudmFyIF9wb2x5ZmlsbFNsb3R0ZWQgPSAnLXNoYWRvd2Nzc3Nsb3R0ZWQnO1xuLy8gbm90ZTogOmhvc3QtY29udGV4dCBwcmUtcHJvY2Vzc2VkIHRvIC1zaGFkb3djc3Nob3N0Y29udGV4dC5cbnZhciBfcG9seWZpbGxIb3N0Q29udGV4dCA9ICctc2hhZG93Y3NzY29udGV4dCc7XG52YXIgX3BhcmVuU3VmZml4ID0gJykoPzpcXFxcKCgnICsgJyg/OlxcXFwoW14pKF0qXFxcXCl8W14pKF0qKSs/JyArICcpXFxcXCkpPyhbXix7XSopJztcbnZhciBfY3NzQ29sb25Ib3N0UmUgPSBuZXcgUmVnRXhwKCcoJyArIF9wb2x5ZmlsbEhvc3QgKyBfcGFyZW5TdWZmaXgsICdnaW0nKTtcbnZhciBfY3NzQ29sb25Ib3N0Q29udGV4dFJlID0gbmV3IFJlZ0V4cCgnKCcgKyBfcG9seWZpbGxIb3N0Q29udGV4dCArIF9wYXJlblN1ZmZpeCwgJ2dpbScpO1xudmFyIF9jc3NDb2xvblNsb3R0ZWRSZSA9IG5ldyBSZWdFeHAoJygnICsgX3BvbHlmaWxsU2xvdHRlZCArIF9wYXJlblN1ZmZpeCwgJ2dpbScpO1xudmFyIF9wb2x5ZmlsbEhvc3ROb0NvbWJpbmF0b3IgPSBfcG9seWZpbGxIb3N0ICsgJy1uby1jb21iaW5hdG9yJztcbnZhciBfcG9seWZpbGxIb3N0Tm9Db21iaW5hdG9yUmUgPSAvLXNoYWRvd2Nzc2hvc3Qtbm8tY29tYmluYXRvcihbXlxcc10qKS87XG52YXIgX3NoYWRvd0RPTVNlbGVjdG9yc1JlID0gWy86OnNoYWRvdy9nLCAvOjpjb250ZW50L2ddO1xudmFyIF9zZWxlY3RvclJlU3VmZml4ID0gJyhbPlxcXFxzfitbLix7Ol1bXFxcXHNcXFxcU10qKT8kJztcbnZhciBfcG9seWZpbGxIb3N0UmUgPSAvLXNoYWRvd2Nzc2hvc3QvZ2ltO1xudmFyIF9jb2xvbkhvc3RSZSA9IC86aG9zdC9naW07XG52YXIgX2NvbG9uU2xvdHRlZFJlID0gLzo6c2xvdHRlZC9naW07XG52YXIgX2NvbG9uSG9zdENvbnRleHRSZSA9IC86aG9zdC1jb250ZXh0L2dpbTtcbnZhciBfY29tbWVudFJlID0gL1xcL1xcKlxccypbXFxzXFxTXSo/XFwqXFwvL2c7XG52YXIgc3RyaXBDb21tZW50cyA9IGZ1bmN0aW9uIChpbnB1dCkge1xuICAgIHJldHVybiBpbnB1dC5yZXBsYWNlKF9jb21tZW50UmUsICcnKTtcbn07XG52YXIgX2NvbW1lbnRXaXRoSGFzaFJlID0gL1xcL1xcKlxccyojXFxzKnNvdXJjZShNYXBwaW5nKT9VUkw9W1xcc1xcU10rP1xcKlxcLy9nO1xudmFyIGV4dHJhY3RDb21tZW50c1dpdGhIYXNoID0gZnVuY3Rpb24gKGlucHV0KSB7XG4gICAgcmV0dXJuIGlucHV0Lm1hdGNoKF9jb21tZW50V2l0aEhhc2hSZSkgfHwgW107XG59O1xudmFyIF9ydWxlUmUgPSAvKFxccyopKFteO1xce1xcfV0rPykoXFxzKikoKD86eyVCTE9DSyV9P1xccyo7Pyl8KD86XFxzKjspKS9nO1xudmFyIF9jdXJseVJlID0gLyhbe31dKS9nO1xudmFyIE9QRU5fQ1VSTFkgPSAneyc7XG52YXIgQ0xPU0VfQ1VSTFkgPSAnfSc7XG52YXIgQkxPQ0tfUExBQ0VIT0xERVIgPSAnJUJMT0NLJSc7XG52YXIgcHJvY2Vzc1J1bGVzID0gZnVuY3Rpb24gKGlucHV0LCBydWxlQ2FsbGJhY2spIHtcbiAgICB2YXIgaW5wdXRXaXRoRXNjYXBlZEJsb2NrcyA9IGVzY2FwZUJsb2NrcyhpbnB1dCk7XG4gICAgdmFyIG5leHRCbG9ja0luZGV4ID0gMDtcbiAgICByZXR1cm4gaW5wdXRXaXRoRXNjYXBlZEJsb2Nrcy5lc2NhcGVkU3RyaW5nLnJlcGxhY2UoX3J1bGVSZSwgZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgbSA9IFtdO1xuICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgbVtfaV0gPSBhcmd1bWVudHNbX2ldO1xuICAgICAgICB9XG4gICAgICAgIHZhciBzZWxlY3RvciA9IG1bMl07XG4gICAgICAgIHZhciBjb250ZW50ID0gJyc7XG4gICAgICAgIHZhciBzdWZmaXggPSBtWzRdO1xuICAgICAgICB2YXIgY29udGVudFByZWZpeCA9ICcnO1xuICAgICAgICBpZiAoc3VmZml4ICYmIHN1ZmZpeC5zdGFydHNXaXRoKCd7JyArIEJMT0NLX1BMQUNFSE9MREVSKSkge1xuICAgICAgICAgICAgY29udGVudCA9IGlucHV0V2l0aEVzY2FwZWRCbG9ja3MuYmxvY2tzW25leHRCbG9ja0luZGV4KytdO1xuICAgICAgICAgICAgc3VmZml4ID0gc3VmZml4LnN1YnN0cmluZyhCTE9DS19QTEFDRUhPTERFUi5sZW5ndGggKyAxKTtcbiAgICAgICAgICAgIGNvbnRlbnRQcmVmaXggPSAneyc7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGNzc1J1bGUgPSB7XG4gICAgICAgICAgICBzZWxlY3Rvcjogc2VsZWN0b3IsXG4gICAgICAgICAgICBjb250ZW50OiBjb250ZW50LFxuICAgICAgICB9O1xuICAgICAgICB2YXIgcnVsZSA9IHJ1bGVDYWxsYmFjayhjc3NSdWxlKTtcbiAgICAgICAgcmV0dXJuIFwiXCIgKyBtWzFdICsgcnVsZS5zZWxlY3RvciArIG1bM10gKyBjb250ZW50UHJlZml4ICsgcnVsZS5jb250ZW50ICsgc3VmZml4O1xuICAgIH0pO1xufTtcbnZhciBlc2NhcGVCbG9ja3MgPSBmdW5jdGlvbiAoaW5wdXQpIHtcbiAgICB2YXIgaW5wdXRQYXJ0cyA9IGlucHV0LnNwbGl0KF9jdXJseVJlKTtcbiAgICB2YXIgcmVzdWx0UGFydHMgPSBbXTtcbiAgICB2YXIgZXNjYXBlZEJsb2NrcyA9IFtdO1xuICAgIHZhciBicmFja2V0Q291bnQgPSAwO1xuICAgIHZhciBjdXJyZW50QmxvY2tQYXJ0cyA9IFtdO1xuICAgIGZvciAodmFyIHBhcnRJbmRleCA9IDA7IHBhcnRJbmRleCA8IGlucHV0UGFydHMubGVuZ3RoOyBwYXJ0SW5kZXgrKykge1xuICAgICAgICB2YXIgcGFydCA9IGlucHV0UGFydHNbcGFydEluZGV4XTtcbiAgICAgICAgaWYgKHBhcnQgPT09IENMT1NFX0NVUkxZKSB7XG4gICAgICAgICAgICBicmFja2V0Q291bnQtLTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYnJhY2tldENvdW50ID4gMCkge1xuICAgICAgICAgICAgY3VycmVudEJsb2NrUGFydHMucHVzaChwYXJ0KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50QmxvY2tQYXJ0cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgZXNjYXBlZEJsb2Nrcy5wdXNoKGN1cnJlbnRCbG9ja1BhcnRzLmpvaW4oJycpKTtcbiAgICAgICAgICAgICAgICByZXN1bHRQYXJ0cy5wdXNoKEJMT0NLX1BMQUNFSE9MREVSKTtcbiAgICAgICAgICAgICAgICBjdXJyZW50QmxvY2tQYXJ0cyA9IFtdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzdWx0UGFydHMucHVzaChwYXJ0KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGFydCA9PT0gT1BFTl9DVVJMWSkge1xuICAgICAgICAgICAgYnJhY2tldENvdW50Kys7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKGN1cnJlbnRCbG9ja1BhcnRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgZXNjYXBlZEJsb2Nrcy5wdXNoKGN1cnJlbnRCbG9ja1BhcnRzLmpvaW4oJycpKTtcbiAgICAgICAgcmVzdWx0UGFydHMucHVzaChCTE9DS19QTEFDRUhPTERFUik7XG4gICAgfVxuICAgIHZhciBzdHJFc2NhcGVkQmxvY2tzID0ge1xuICAgICAgICBlc2NhcGVkU3RyaW5nOiByZXN1bHRQYXJ0cy5qb2luKCcnKSxcbiAgICAgICAgYmxvY2tzOiBlc2NhcGVkQmxvY2tzLFxuICAgIH07XG4gICAgcmV0dXJuIHN0ckVzY2FwZWRCbG9ja3M7XG59O1xudmFyIGluc2VydFBvbHlmaWxsSG9zdEluQ3NzVGV4dCA9IGZ1bmN0aW9uIChzZWxlY3Rvcikge1xuICAgIHNlbGVjdG9yID0gc2VsZWN0b3JcbiAgICAgICAgLnJlcGxhY2UoX2NvbG9uSG9zdENvbnRleHRSZSwgX3BvbHlmaWxsSG9zdENvbnRleHQpXG4gICAgICAgIC5yZXBsYWNlKF9jb2xvbkhvc3RSZSwgX3BvbHlmaWxsSG9zdClcbiAgICAgICAgLnJlcGxhY2UoX2NvbG9uU2xvdHRlZFJlLCBfcG9seWZpbGxTbG90dGVkKTtcbiAgICByZXR1cm4gc2VsZWN0b3I7XG59O1xudmFyIGNvbnZlcnRDb2xvblJ1bGUgPSBmdW5jdGlvbiAoY3NzVGV4dCwgcmVnRXhwLCBwYXJ0UmVwbGFjZXIpIHtcbiAgICAvLyBtWzFdID0gOmhvc3QoLWNvbnRleHQpLCBtWzJdID0gY29udGVudHMgb2YgKCksIG1bM10gcmVzdCBvZiBydWxlXG4gICAgcmV0dXJuIGNzc1RleHQucmVwbGFjZShyZWdFeHAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIG0gPSBbXTtcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIG1bX2ldID0gYXJndW1lbnRzW19pXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobVsyXSkge1xuICAgICAgICAgICAgdmFyIHBhcnRzID0gbVsyXS5zcGxpdCgnLCcpO1xuICAgICAgICAgICAgdmFyIHIgPSBbXTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGFydHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgcCA9IHBhcnRzW2ldLnRyaW0oKTtcbiAgICAgICAgICAgICAgICBpZiAoIXApXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIHIucHVzaChwYXJ0UmVwbGFjZXIoX3BvbHlmaWxsSG9zdE5vQ29tYmluYXRvciwgcCwgbVszXSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHIuam9pbignLCcpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIF9wb2x5ZmlsbEhvc3ROb0NvbWJpbmF0b3IgKyBtWzNdO1xuICAgICAgICB9XG4gICAgfSk7XG59O1xudmFyIGNvbG9uSG9zdFBhcnRSZXBsYWNlciA9IGZ1bmN0aW9uIChob3N0LCBwYXJ0LCBzdWZmaXgpIHtcbiAgICByZXR1cm4gaG9zdCArIHBhcnQucmVwbGFjZShfcG9seWZpbGxIb3N0LCAnJykgKyBzdWZmaXg7XG59O1xudmFyIGNvbnZlcnRDb2xvbkhvc3QgPSBmdW5jdGlvbiAoY3NzVGV4dCkge1xuICAgIHJldHVybiBjb252ZXJ0Q29sb25SdWxlKGNzc1RleHQsIF9jc3NDb2xvbkhvc3RSZSwgY29sb25Ib3N0UGFydFJlcGxhY2VyKTtcbn07XG52YXIgY29sb25Ib3N0Q29udGV4dFBhcnRSZXBsYWNlciA9IGZ1bmN0aW9uIChob3N0LCBwYXJ0LCBzdWZmaXgpIHtcbiAgICBpZiAocGFydC5pbmRleE9mKF9wb2x5ZmlsbEhvc3QpID4gLTEpIHtcbiAgICAgICAgcmV0dXJuIGNvbG9uSG9zdFBhcnRSZXBsYWNlcihob3N0LCBwYXJ0LCBzdWZmaXgpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGhvc3QgKyBwYXJ0ICsgc3VmZml4ICsgJywgJyArIHBhcnQgKyAnICcgKyBob3N0ICsgc3VmZml4O1xuICAgIH1cbn07XG52YXIgY29udmVydENvbG9uU2xvdHRlZCA9IGZ1bmN0aW9uIChjc3NUZXh0LCBzbG90U2NvcGVJZCkge1xuICAgIHZhciBzbG90Q2xhc3MgPSAnLicgKyBzbG90U2NvcGVJZCArICcgPiAnO1xuICAgIHZhciBzZWxlY3RvcnMgPSBbXTtcbiAgICBjc3NUZXh0ID0gY3NzVGV4dC5yZXBsYWNlKF9jc3NDb2xvblNsb3R0ZWRSZSwgZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgbSA9IFtdO1xuICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgbVtfaV0gPSBhcmd1bWVudHNbX2ldO1xuICAgICAgICB9XG4gICAgICAgIGlmIChtWzJdKSB7XG4gICAgICAgICAgICB2YXIgY29tcG91bmQgPSBtWzJdLnRyaW0oKTtcbiAgICAgICAgICAgIHZhciBzdWZmaXggPSBtWzNdO1xuICAgICAgICAgICAgdmFyIHNsb3R0ZWRTZWxlY3RvciA9IHNsb3RDbGFzcyArIGNvbXBvdW5kICsgc3VmZml4O1xuICAgICAgICAgICAgdmFyIHByZWZpeFNlbGVjdG9yID0gJyc7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gbVs0XSAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNoYXIgPSBtWzVdW2ldO1xuICAgICAgICAgICAgICAgIGlmIChjaGFyID09PSAnfScgfHwgY2hhciA9PT0gJywnKSB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwcmVmaXhTZWxlY3RvciA9IGNoYXIgKyBwcmVmaXhTZWxlY3RvcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBvcmdTZWxlY3RvciA9IHByZWZpeFNlbGVjdG9yICsgc2xvdHRlZFNlbGVjdG9yO1xuICAgICAgICAgICAgdmFyIGFkZGVkU2VsZWN0b3IgPSBcIlwiICsgcHJlZml4U2VsZWN0b3IudHJpbVJpZ2h0KCkgKyBzbG90dGVkU2VsZWN0b3IudHJpbSgpO1xuICAgICAgICAgICAgaWYgKG9yZ1NlbGVjdG9yLnRyaW0oKSAhPT0gYWRkZWRTZWxlY3Rvci50cmltKCkpIHtcbiAgICAgICAgICAgICAgICB2YXIgdXBkYXRlZFNlbGVjdG9yID0gYWRkZWRTZWxlY3RvciArIFwiLCBcIiArIG9yZ1NlbGVjdG9yO1xuICAgICAgICAgICAgICAgIHNlbGVjdG9ycy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgb3JnU2VsZWN0b3I6IG9yZ1NlbGVjdG9yLFxuICAgICAgICAgICAgICAgICAgICB1cGRhdGVkU2VsZWN0b3I6IHVwZGF0ZWRTZWxlY3RvcixcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBzbG90dGVkU2VsZWN0b3I7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gX3BvbHlmaWxsSG9zdE5vQ29tYmluYXRvciArIG1bM107XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4ge1xuICAgICAgICBzZWxlY3RvcnM6IHNlbGVjdG9ycyxcbiAgICAgICAgY3NzVGV4dDogY3NzVGV4dCxcbiAgICB9O1xufTtcbnZhciBjb252ZXJ0Q29sb25Ib3N0Q29udGV4dCA9IGZ1bmN0aW9uIChjc3NUZXh0KSB7XG4gICAgcmV0dXJuIGNvbnZlcnRDb2xvblJ1bGUoY3NzVGV4dCwgX2Nzc0NvbG9uSG9zdENvbnRleHRSZSwgY29sb25Ib3N0Q29udGV4dFBhcnRSZXBsYWNlcik7XG59O1xudmFyIGNvbnZlcnRTaGFkb3dET01TZWxlY3RvcnMgPSBmdW5jdGlvbiAoY3NzVGV4dCkge1xuICAgIHJldHVybiBfc2hhZG93RE9NU2VsZWN0b3JzUmUucmVkdWNlKGZ1bmN0aW9uIChyZXN1bHQsIHBhdHRlcm4pIHsgcmV0dXJuIHJlc3VsdC5yZXBsYWNlKHBhdHRlcm4sICcgJyk7IH0sIGNzc1RleHQpO1xufTtcbnZhciBtYWtlU2NvcGVNYXRjaGVyID0gZnVuY3Rpb24gKHNjb3BlU2VsZWN0b3IpIHtcbiAgICB2YXIgbHJlID0gL1xcWy9nO1xuICAgIHZhciBycmUgPSAvXFxdL2c7XG4gICAgc2NvcGVTZWxlY3RvciA9IHNjb3BlU2VsZWN0b3IucmVwbGFjZShscmUsICdcXFxcWycpLnJlcGxhY2UocnJlLCAnXFxcXF0nKTtcbiAgICByZXR1cm4gbmV3IFJlZ0V4cCgnXignICsgc2NvcGVTZWxlY3RvciArICcpJyArIF9zZWxlY3RvclJlU3VmZml4LCAnbScpO1xufTtcbnZhciBzZWxlY3Rvck5lZWRzU2NvcGluZyA9IGZ1bmN0aW9uIChzZWxlY3Rvciwgc2NvcGVTZWxlY3Rvcikge1xuICAgIHZhciByZSA9IG1ha2VTY29wZU1hdGNoZXIoc2NvcGVTZWxlY3Rvcik7XG4gICAgcmV0dXJuICFyZS50ZXN0KHNlbGVjdG9yKTtcbn07XG52YXIgYXBwbHlTaW1wbGVTZWxlY3RvclNjb3BlID0gZnVuY3Rpb24gKHNlbGVjdG9yLCBzY29wZVNlbGVjdG9yLCBob3N0U2VsZWN0b3IpIHtcbiAgICAvLyBJbiBBbmRyb2lkIGJyb3dzZXIsIHRoZSBsYXN0SW5kZXggaXMgbm90IHJlc2V0IHdoZW4gdGhlIHJlZ2V4IGlzIHVzZWQgaW4gU3RyaW5nLnJlcGxhY2UoKVxuICAgIF9wb2x5ZmlsbEhvc3RSZS5sYXN0SW5kZXggPSAwO1xuICAgIGlmIChfcG9seWZpbGxIb3N0UmUudGVzdChzZWxlY3RvcikpIHtcbiAgICAgICAgdmFyIHJlcGxhY2VCeV8xID0gXCIuXCIgKyBob3N0U2VsZWN0b3I7XG4gICAgICAgIHJldHVybiBzZWxlY3RvclxuICAgICAgICAgICAgLnJlcGxhY2UoX3BvbHlmaWxsSG9zdE5vQ29tYmluYXRvclJlLCBmdW5jdGlvbiAoXywgc2VsZWN0b3IpIHtcbiAgICAgICAgICAgIHJldHVybiBzZWxlY3Rvci5yZXBsYWNlKC8oW146XSopKDoqKSguKikvLCBmdW5jdGlvbiAoXywgYmVmb3JlLCBjb2xvbiwgYWZ0ZXIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYmVmb3JlICsgcmVwbGFjZUJ5XzEgKyBjb2xvbiArIGFmdGVyO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pXG4gICAgICAgICAgICAucmVwbGFjZShfcG9seWZpbGxIb3N0UmUsIHJlcGxhY2VCeV8xICsgJyAnKTtcbiAgICB9XG4gICAgcmV0dXJuIHNjb3BlU2VsZWN0b3IgKyAnICcgKyBzZWxlY3Rvcjtcbn07XG52YXIgYXBwbHlTdHJpY3RTZWxlY3RvclNjb3BlID0gZnVuY3Rpb24gKHNlbGVjdG9yLCBzY29wZVNlbGVjdG9yLCBob3N0U2VsZWN0b3IpIHtcbiAgICB2YXIgaXNSZSA9IC9cXFtpcz0oW15cXF1dKilcXF0vZztcbiAgICBzY29wZVNlbGVjdG9yID0gc2NvcGVTZWxlY3Rvci5yZXBsYWNlKGlzUmUsIGZ1bmN0aW9uIChfKSB7XG4gICAgICAgIHZhciBwYXJ0cyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBfaSA9IDE7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgcGFydHNbX2kgLSAxXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBhcnRzWzBdO1xuICAgIH0pO1xuICAgIHZhciBjbGFzc05hbWUgPSAnLicgKyBzY29wZVNlbGVjdG9yO1xuICAgIHZhciBfc2NvcGVTZWxlY3RvclBhcnQgPSBmdW5jdGlvbiAocCkge1xuICAgICAgICB2YXIgc2NvcGVkUCA9IHAudHJpbSgpO1xuICAgICAgICBpZiAoIXNjb3BlZFApIHtcbiAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgfVxuICAgICAgICBpZiAocC5pbmRleE9mKF9wb2x5ZmlsbEhvc3ROb0NvbWJpbmF0b3IpID4gLTEpIHtcbiAgICAgICAgICAgIHNjb3BlZFAgPSBhcHBseVNpbXBsZVNlbGVjdG9yU2NvcGUocCwgc2NvcGVTZWxlY3RvciwgaG9zdFNlbGVjdG9yKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIHJlbW92ZSA6aG9zdCBzaW5jZSBpdCBzaG91bGQgYmUgdW5uZWNlc3NhcnlcbiAgICAgICAgICAgIHZhciB0ID0gcC5yZXBsYWNlKF9wb2x5ZmlsbEhvc3RSZSwgJycpO1xuICAgICAgICAgICAgaWYgKHQubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHZhciBtYXRjaGVzID0gdC5tYXRjaCgvKFteOl0qKSg6KikoLiopLyk7XG4gICAgICAgICAgICAgICAgaWYgKG1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgc2NvcGVkUCA9IG1hdGNoZXNbMV0gKyBjbGFzc05hbWUgKyBtYXRjaGVzWzJdICsgbWF0Y2hlc1szXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNjb3BlZFA7XG4gICAgfTtcbiAgICB2YXIgc2FmZUNvbnRlbnQgPSBzYWZlU2VsZWN0b3Ioc2VsZWN0b3IpO1xuICAgIHNlbGVjdG9yID0gc2FmZUNvbnRlbnQuY29udGVudDtcbiAgICB2YXIgc2NvcGVkU2VsZWN0b3IgPSAnJztcbiAgICB2YXIgc3RhcnRJbmRleCA9IDA7XG4gICAgdmFyIHJlcztcbiAgICB2YXIgc2VwID0gLyggfD58XFwrfH4oPyE9KSlcXHMqL2c7XG4gICAgLy8gSWYgYSBzZWxlY3RvciBhcHBlYXJzIGJlZm9yZSA6aG9zdCBpdCBzaG91bGQgbm90IGJlIHNoaW1tZWQgYXMgaXRcbiAgICAvLyBtYXRjaGVzIG9uIGFuY2VzdG9yIGVsZW1lbnRzIGFuZCBub3Qgb24gZWxlbWVudHMgaW4gdGhlIGhvc3QncyBzaGFkb3dcbiAgICAvLyBgOmhvc3QtY29udGV4dChkaXYpYCBpcyB0cmFuc2Zvcm1lZCB0b1xuICAgIC8vIGAtc2hhZG93Y3NzaG9zdC1uby1jb21iaW5hdG9yZGl2LCBkaXYgLXNoYWRvd2Nzc2hvc3Qtbm8tY29tYmluYXRvcmBcbiAgICAvLyB0aGUgYGRpdmAgaXMgbm90IHBhcnQgb2YgdGhlIGNvbXBvbmVudCBpbiB0aGUgMm5kIHNlbGVjdG9ycyBhbmQgc2hvdWxkIG5vdCBiZSBzY29wZWQuXG4gICAgLy8gSGlzdG9yaWNhbGx5IGBjb21wb25lbnQtdGFnOmhvc3RgIHdhcyBtYXRjaGluZyB0aGUgY29tcG9uZW50IHNvIHdlIGFsc28gd2FudCB0byBwcmVzZXJ2ZVxuICAgIC8vIHRoaXMgYmVoYXZpb3IgdG8gYXZvaWQgYnJlYWtpbmcgbGVnYWN5IGFwcHMgKGl0IHNob3VsZCBub3QgbWF0Y2gpLlxuICAgIC8vIFRoZSBiZWhhdmlvciBzaG91bGQgYmU6XG4gICAgLy8gLSBgdGFnOmhvc3RgIC0+IGB0YWdbaF1gICh0aGlzIGlzIHRvIGF2b2lkIGJyZWFraW5nIGxlZ2FjeSBhcHBzLCBzaG91bGQgbm90IG1hdGNoIGFueXRoaW5nKVxuICAgIC8vIC0gYHRhZyA6aG9zdGAgLT4gYHRhZyBbaF1gIChgdGFnYCBpcyBub3Qgc2NvcGVkIGJlY2F1c2UgaXQncyBjb25zaWRlcmVkIHBhcnQgb2YgYVxuICAgIC8vICAgYDpob3N0LWNvbnRleHQodGFnKWApXG4gICAgdmFyIGhhc0hvc3QgPSBzZWxlY3Rvci5pbmRleE9mKF9wb2x5ZmlsbEhvc3ROb0NvbWJpbmF0b3IpID4gLTE7XG4gICAgLy8gT25seSBzY29wZSBwYXJ0cyBhZnRlciB0aGUgZmlyc3QgYC1zaGFkb3djc3Nob3N0LW5vLWNvbWJpbmF0b3JgIHdoZW4gaXQgaXMgcHJlc2VudFxuICAgIHZhciBzaG91bGRTY29wZSA9ICFoYXNIb3N0O1xuICAgIHdoaWxlICgocmVzID0gc2VwLmV4ZWMoc2VsZWN0b3IpKSAhPT0gbnVsbCkge1xuICAgICAgICB2YXIgc2VwYXJhdG9yID0gcmVzWzFdO1xuICAgICAgICB2YXIgcGFydF8xID0gc2VsZWN0b3Iuc2xpY2Uoc3RhcnRJbmRleCwgcmVzLmluZGV4KS50cmltKCk7XG4gICAgICAgIHNob3VsZFNjb3BlID0gc2hvdWxkU2NvcGUgfHwgcGFydF8xLmluZGV4T2YoX3BvbHlmaWxsSG9zdE5vQ29tYmluYXRvcikgPiAtMTtcbiAgICAgICAgdmFyIHNjb3BlZFBhcnQgPSBzaG91bGRTY29wZSA/IF9zY29wZVNlbGVjdG9yUGFydChwYXJ0XzEpIDogcGFydF8xO1xuICAgICAgICBzY29wZWRTZWxlY3RvciArPSBzY29wZWRQYXJ0ICsgXCIgXCIgKyBzZXBhcmF0b3IgKyBcIiBcIjtcbiAgICAgICAgc3RhcnRJbmRleCA9IHNlcC5sYXN0SW5kZXg7XG4gICAgfVxuICAgIHZhciBwYXJ0ID0gc2VsZWN0b3Iuc3Vic3RyaW5nKHN0YXJ0SW5kZXgpO1xuICAgIHNob3VsZFNjb3BlID0gc2hvdWxkU2NvcGUgfHwgcGFydC5pbmRleE9mKF9wb2x5ZmlsbEhvc3ROb0NvbWJpbmF0b3IpID4gLTE7XG4gICAgc2NvcGVkU2VsZWN0b3IgKz0gc2hvdWxkU2NvcGUgPyBfc2NvcGVTZWxlY3RvclBhcnQocGFydCkgOiBwYXJ0O1xuICAgIC8vIHJlcGxhY2UgdGhlIHBsYWNlaG9sZGVycyB3aXRoIHRoZWlyIG9yaWdpbmFsIHZhbHVlc1xuICAgIHJldHVybiByZXN0b3JlU2FmZVNlbGVjdG9yKHNhZmVDb250ZW50LnBsYWNlaG9sZGVycywgc2NvcGVkU2VsZWN0b3IpO1xufTtcbnZhciBzY29wZVNlbGVjdG9yID0gZnVuY3Rpb24gKHNlbGVjdG9yLCBzY29wZVNlbGVjdG9yVGV4dCwgaG9zdFNlbGVjdG9yLCBzbG90U2VsZWN0b3IpIHtcbiAgICByZXR1cm4gc2VsZWN0b3JcbiAgICAgICAgLnNwbGl0KCcsJylcbiAgICAgICAgLm1hcChmdW5jdGlvbiAoc2hhbGxvd1BhcnQpIHtcbiAgICAgICAgaWYgKHNsb3RTZWxlY3RvciAmJiBzaGFsbG93UGFydC5pbmRleE9mKCcuJyArIHNsb3RTZWxlY3RvcikgPiAtMSkge1xuICAgICAgICAgICAgcmV0dXJuIHNoYWxsb3dQYXJ0LnRyaW0oKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2VsZWN0b3JOZWVkc1Njb3Bpbmcoc2hhbGxvd1BhcnQsIHNjb3BlU2VsZWN0b3JUZXh0KSkge1xuICAgICAgICAgICAgcmV0dXJuIGFwcGx5U3RyaWN0U2VsZWN0b3JTY29wZShzaGFsbG93UGFydCwgc2NvcGVTZWxlY3RvclRleHQsIGhvc3RTZWxlY3RvcikudHJpbSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHNoYWxsb3dQYXJ0LnRyaW0oKTtcbiAgICAgICAgfVxuICAgIH0pXG4gICAgICAgIC5qb2luKCcsICcpO1xufTtcbnZhciBzY29wZVNlbGVjdG9ycyA9IGZ1bmN0aW9uIChjc3NUZXh0LCBzY29wZVNlbGVjdG9yVGV4dCwgaG9zdFNlbGVjdG9yLCBzbG90U2VsZWN0b3IsIGNvbW1lbnRPcmlnaW5hbFNlbGVjdG9yKSB7XG4gICAgcmV0dXJuIHByb2Nlc3NSdWxlcyhjc3NUZXh0LCBmdW5jdGlvbiAocnVsZSkge1xuICAgICAgICB2YXIgc2VsZWN0b3IgPSBydWxlLnNlbGVjdG9yO1xuICAgICAgICB2YXIgY29udGVudCA9IHJ1bGUuY29udGVudDtcbiAgICAgICAgaWYgKHJ1bGUuc2VsZWN0b3JbMF0gIT09ICdAJykge1xuICAgICAgICAgICAgc2VsZWN0b3IgPSBzY29wZVNlbGVjdG9yKHJ1bGUuc2VsZWN0b3IsIHNjb3BlU2VsZWN0b3JUZXh0LCBob3N0U2VsZWN0b3IsIHNsb3RTZWxlY3Rvcik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAocnVsZS5zZWxlY3Rvci5zdGFydHNXaXRoKCdAbWVkaWEnKSB8fCBydWxlLnNlbGVjdG9yLnN0YXJ0c1dpdGgoJ0BzdXBwb3J0cycpIHx8IHJ1bGUuc2VsZWN0b3Iuc3RhcnRzV2l0aCgnQHBhZ2UnKSB8fCBydWxlLnNlbGVjdG9yLnN0YXJ0c1dpdGgoJ0Bkb2N1bWVudCcpKSB7XG4gICAgICAgICAgICBjb250ZW50ID0gc2NvcGVTZWxlY3RvcnMocnVsZS5jb250ZW50LCBzY29wZVNlbGVjdG9yVGV4dCwgaG9zdFNlbGVjdG9yLCBzbG90U2VsZWN0b3IpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBjc3NSdWxlID0ge1xuICAgICAgICAgICAgc2VsZWN0b3I6IHNlbGVjdG9yLnJlcGxhY2UoL1xcc3syLH0vZywgJyAnKS50cmltKCksXG4gICAgICAgICAgICBjb250ZW50OiBjb250ZW50LFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gY3NzUnVsZTtcbiAgICB9KTtcbn07XG52YXIgc2NvcGVDc3NUZXh0ID0gZnVuY3Rpb24gKGNzc1RleHQsIHNjb3BlSWQsIGhvc3RTY29wZUlkLCBzbG90U2NvcGVJZCwgY29tbWVudE9yaWdpbmFsU2VsZWN0b3IpIHtcbiAgICBjc3NUZXh0ID0gaW5zZXJ0UG9seWZpbGxIb3N0SW5Dc3NUZXh0KGNzc1RleHQpO1xuICAgIGNzc1RleHQgPSBjb252ZXJ0Q29sb25Ib3N0KGNzc1RleHQpO1xuICAgIGNzc1RleHQgPSBjb252ZXJ0Q29sb25Ib3N0Q29udGV4dChjc3NUZXh0KTtcbiAgICB2YXIgc2xvdHRlZCA9IGNvbnZlcnRDb2xvblNsb3R0ZWQoY3NzVGV4dCwgc2xvdFNjb3BlSWQpO1xuICAgIGNzc1RleHQgPSBzbG90dGVkLmNzc1RleHQ7XG4gICAgY3NzVGV4dCA9IGNvbnZlcnRTaGFkb3dET01TZWxlY3RvcnMoY3NzVGV4dCk7XG4gICAgaWYgKHNjb3BlSWQpIHtcbiAgICAgICAgY3NzVGV4dCA9IHNjb3BlU2VsZWN0b3JzKGNzc1RleHQsIHNjb3BlSWQsIGhvc3RTY29wZUlkLCBzbG90U2NvcGVJZCk7XG4gICAgfVxuICAgIGNzc1RleHQgPSBjc3NUZXh0LnJlcGxhY2UoLy1zaGFkb3djc3Nob3N0LW5vLWNvbWJpbmF0b3IvZywgXCIuXCIgKyBob3N0U2NvcGVJZCk7XG4gICAgY3NzVGV4dCA9IGNzc1RleHQucmVwbGFjZSgvPlxccypcXCpcXHMrKFteeywgXSspL2dtLCAnICQxICcpO1xuICAgIHJldHVybiB7XG4gICAgICAgIGNzc1RleHQ6IGNzc1RleHQudHJpbSgpLFxuICAgICAgICBzbG90dGVkU2VsZWN0b3JzOiBzbG90dGVkLnNlbGVjdG9ycyxcbiAgICB9O1xufTtcbnZhciBzY29wZUNzcyA9IGZ1bmN0aW9uIChjc3NUZXh0LCBzY29wZUlkLCBjb21tZW50T3JpZ2luYWxTZWxlY3Rvcikge1xuICAgIHZhciBob3N0U2NvcGVJZCA9IHNjb3BlSWQgKyAnLWgnO1xuICAgIHZhciBzbG90U2NvcGVJZCA9IHNjb3BlSWQgKyAnLXMnO1xuICAgIHZhciBjb21tZW50c1dpdGhIYXNoID0gZXh0cmFjdENvbW1lbnRzV2l0aEhhc2goY3NzVGV4dCk7XG4gICAgY3NzVGV4dCA9IHN0cmlwQ29tbWVudHMoY3NzVGV4dCk7XG4gICAgdmFyIG9yZ1NlbGVjdG9ycyA9IFtdO1xuICAgIGlmIChjb21tZW50T3JpZ2luYWxTZWxlY3Rvcikge1xuICAgICAgICB2YXIgcHJvY2Vzc0NvbW1lbnRlZFNlbGVjdG9yXzEgPSBmdW5jdGlvbiAocnVsZSkge1xuICAgICAgICAgICAgdmFyIHBsYWNlaG9sZGVyID0gXCIvKiFAX19fXCIgKyBvcmdTZWxlY3RvcnMubGVuZ3RoICsgXCJfX18qL1wiO1xuICAgICAgICAgICAgdmFyIGNvbW1lbnQgPSBcIi8qIUBcIiArIHJ1bGUuc2VsZWN0b3IgKyBcIiovXCI7XG4gICAgICAgICAgICBvcmdTZWxlY3RvcnMucHVzaCh7IHBsYWNlaG9sZGVyOiBwbGFjZWhvbGRlciwgY29tbWVudDogY29tbWVudCB9KTtcbiAgICAgICAgICAgIHJ1bGUuc2VsZWN0b3IgPSBwbGFjZWhvbGRlciArIHJ1bGUuc2VsZWN0b3I7XG4gICAgICAgICAgICByZXR1cm4gcnVsZTtcbiAgICAgICAgfTtcbiAgICAgICAgY3NzVGV4dCA9IHByb2Nlc3NSdWxlcyhjc3NUZXh0LCBmdW5jdGlvbiAocnVsZSkge1xuICAgICAgICAgICAgaWYgKHJ1bGUuc2VsZWN0b3JbMF0gIT09ICdAJykge1xuICAgICAgICAgICAgICAgIHJldHVybiBwcm9jZXNzQ29tbWVudGVkU2VsZWN0b3JfMShydWxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHJ1bGUuc2VsZWN0b3Iuc3RhcnRzV2l0aCgnQG1lZGlhJykgfHwgcnVsZS5zZWxlY3Rvci5zdGFydHNXaXRoKCdAc3VwcG9ydHMnKSB8fCBydWxlLnNlbGVjdG9yLnN0YXJ0c1dpdGgoJ0BwYWdlJykgfHwgcnVsZS5zZWxlY3Rvci5zdGFydHNXaXRoKCdAZG9jdW1lbnQnKSkge1xuICAgICAgICAgICAgICAgIHJ1bGUuY29udGVudCA9IHByb2Nlc3NSdWxlcyhydWxlLmNvbnRlbnQsIHByb2Nlc3NDb21tZW50ZWRTZWxlY3Rvcl8xKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcnVsZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBydWxlO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgdmFyIHNjb3BlZCA9IHNjb3BlQ3NzVGV4dChjc3NUZXh0LCBzY29wZUlkLCBob3N0U2NvcGVJZCwgc2xvdFNjb3BlSWQpO1xuICAgIGNzc1RleHQgPSBfX3NwcmVhZEFycmF5cyhbc2NvcGVkLmNzc1RleHRdLCBjb21tZW50c1dpdGhIYXNoKS5qb2luKCdcXG4nKTtcbiAgICBpZiAoY29tbWVudE9yaWdpbmFsU2VsZWN0b3IpIHtcbiAgICAgICAgb3JnU2VsZWN0b3JzLmZvckVhY2goZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICB2YXIgcGxhY2Vob2xkZXIgPSBfYS5wbGFjZWhvbGRlciwgY29tbWVudCA9IF9hLmNvbW1lbnQ7XG4gICAgICAgICAgICBjc3NUZXh0ID0gY3NzVGV4dC5yZXBsYWNlKHBsYWNlaG9sZGVyLCBjb21tZW50KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHNjb3BlZC5zbG90dGVkU2VsZWN0b3JzLmZvckVhY2goZnVuY3Rpb24gKHNsb3R0ZWRTZWxlY3Rvcikge1xuICAgICAgICBjc3NUZXh0ID0gY3NzVGV4dC5yZXBsYWNlKHNsb3R0ZWRTZWxlY3Rvci5vcmdTZWxlY3Rvciwgc2xvdHRlZFNlbGVjdG9yLnVwZGF0ZWRTZWxlY3Rvcik7XG4gICAgfSk7XG4gICAgcmV0dXJuIGNzc1RleHQ7XG59O1xuZXhwb3J0IHsgc2NvcGVDc3MgfTtcbiJdLCJzb3VyY2VSb290IjoiIn0=
