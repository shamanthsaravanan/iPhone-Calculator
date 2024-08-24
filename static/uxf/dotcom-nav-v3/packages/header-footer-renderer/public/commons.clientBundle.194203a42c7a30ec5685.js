/*! For license information please see commons.clientBundle.194203a42c7a30ec5685.js.LICENSE.txt */
(self.webpackChunkheader_footer_renderer = self.webpackChunkheader_footer_renderer || []).push([
    [223], {
        8089: (e, o, i) => {
            "use strict";
            if (i.d(o, {
                    A: () => d
                }), 818 != i.j) var r = i(4660);
            if (818 != i.j) var t = i(2);
            var a = "/*|*/",
                n = a + "}";

            function s(e) {
                e && l.current.insert(e + "}")
            }
            var l = {
                    current: null
                },
                c = function(e, o, i, r, t, c, d, u, p, m) {
                    switch (e) {
                        case 1:
                            switch (o.charCodeAt(0)) {
                                case 64:
                                    return l.current.insert(o + ";"), "";
                                case 108:
                                    if (98 === o.charCodeAt(2)) return ""
                            }
                            break;
                        case 2:
                            if (0 === u) return o + a;
                            break;
                        case 3:
                            switch (u) {
                                case 102:
                                case 112:
                                    return l.current.insert(i[0] + o), "";
                                default:
                                    return o + (0 === m ? a : "")
                            }
                        case -2:
                            o.split(n).forEach(s)
                    }
                };
            const d = 818 != i.j ? function(e) {
                void 0 === e && (e = {});
                var o, i = e.key || "css";
                void 0 !== e.prefix && (o = {
                    prefix: e.prefix
                });
                var a, n = new t.A(o),
                    s = {};
                a = e.container || document.head;
                var d, u = document.querySelectorAll("style[data-emotion-" + i + "]");
                Array.prototype.forEach.call(u, (function(e) {
                    e.getAttribute("data-emotion-" + i).split(" ").forEach((function(e) {
                        s[e] = !0
                    })), e.parentNode !== a && a.appendChild(e)
                })), n.use(e.stylisPlugins)(c), d = function(e, o, i, r) {
                    var t = o.name;
                    l.current = i, n(e, o.styles), r && (p.inserted[t] = !0)
                };
                var p = {
                    key: i,
                    sheet: new r.v({
                        key: i,
                        container: a,
                        nonce: e.nonce,
                        speedy: e.speedy
                    }),
                    nonce: e.nonce,
                    inserted: s,
                    registered: {},
                    insert: d
                };
                return p
            } : null
        },
        5712: (e, o, i) => {
            "use strict";
            i.d(o, {
                A: () => t
            });
            var r = i(6283);
            const t = 818 != i.j ? function() {
                for (var e = arguments.length, o = new Array(e), i = 0; i < e; i++) o[i] = arguments[i];
                return (0, r.J)(o)
            } : null
        },
        6606: (e, o, i) => {
            "use strict";
            i.d(o, {
                A: () => r
            });
            const r = 818 != i.j ? function(e) {
                for (var o, i = 0, r = 0, t = e.length; t >= 4; ++r, t -= 4) o = 1540483477 * (65535 & (o = 255 & e.charCodeAt(r) | (255 & e.charCodeAt(++r)) << 8 | (255 & e.charCodeAt(++r)) << 16 | (255 & e.charCodeAt(++r)) << 24)) + (59797 * (o >>> 16) << 16), i = 1540483477 * (65535 & (o ^= o >>> 24)) + (59797 * (o >>> 16) << 16) ^ 1540483477 * (65535 & i) + (59797 * (i >>> 16) << 16);
                switch (t) {
                    case 3:
                        i ^= (255 & e.charCodeAt(r + 2)) << 16;
                    case 2:
                        i ^= (255 & e.charCodeAt(r + 1)) << 8;
                    case 1:
                        i = 1540483477 * (65535 & (i ^= 255 & e.charCodeAt(r))) + (59797 * (i >>> 16) << 16)
                }
                return (((i = 1540483477 * (65535 & (i ^= i >>> 13)) + (59797 * (i >>> 16) << 16)) ^ i >>> 15) >>> 0).toString(36)
            } : null
        },
        8590: (e, o, i) => {
            "use strict";
            i.d(o, {
                A: () => r
            });
            const r = 818 != i.j ? function(e) {
                var o = {};
                return function(i) {
                    return void 0 === o[i] && (o[i] = e(i)), o[i]
                }
            } : null
        },
        6283: (e, o, i) => {
            "use strict";
            i.d(o, {
                J: () => v
            });
            var r = i(6606);
            const t = {
                animationIterationCount: 1,
                borderImageOutset: 1,
                borderImageSlice: 1,
                borderImageWidth: 1,
                boxFlex: 1,
                boxFlexGroup: 1,
                boxOrdinalGroup: 1,
                columnCount: 1,
                columns: 1,
                flex: 1,
                flexGrow: 1,
                flexPositive: 1,
                flexShrink: 1,
                flexNegative: 1,
                flexOrder: 1,
                gridRow: 1,
                gridRowEnd: 1,
                gridRowSpan: 1,
                gridRowStart: 1,
                gridColumn: 1,
                gridColumnEnd: 1,
                gridColumnSpan: 1,
                gridColumnStart: 1,
                msGridRow: 1,
                msGridRowSpan: 1,
                msGridColumn: 1,
                msGridColumnSpan: 1,
                fontWeight: 1,
                lineHeight: 1,
                opacity: 1,
                order: 1,
                orphans: 1,
                tabSize: 1,
                widows: 1,
                zIndex: 1,
                zoom: 1,
                WebkitLineClamp: 1,
                fillOpacity: 1,
                floodOpacity: 1,
                stopOpacity: 1,
                strokeDasharray: 1,
                strokeDashoffset: 1,
                strokeMiterlimit: 1,
                strokeOpacity: 1,
                strokeWidth: 1
            };
            var a = i(8590),
                n = /[A-Z]|^ms/g,
                s = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
                l = function(e) {
                    return 45 === e.charCodeAt(1)
                },
                c = function(e) {
                    return null != e && "boolean" != typeof e
                },
                d = (0, a.A)((function(e) {
                    return l(e) ? e : e.replace(n, "-$&").toLowerCase()
                })),
                u = function(e, o) {
                    switch (e) {
                        case "animation":
                        case "animationName":
                            if ("string" == typeof o) return o.replace(s, (function(e, o, i) {
                                return m = {
                                    name: o,
                                    styles: i,
                                    next: m
                                }, o
                            }))
                    }
                    return 1 === t[e] || l(e) || "number" != typeof o || 0 === o ? o : o + "px"
                };

            function p(e, o, i, r) {
                if (null == i) return "";
                if (void 0 !== i.__emotion_styles) return i;
                switch (typeof i) {
                    case "boolean":
                        return "";
                    case "object":
                        if (1 === i.anim) return m = {
                            name: i.name,
                            styles: i.styles,
                            next: m
                        }, i.name;
                        if (void 0 !== i.styles) {
                            var t = i.next;
                            if (void 0 !== t)
                                for (; void 0 !== t;) m = {
                                    name: t.name,
                                    styles: t.styles,
                                    next: m
                                }, t = t.next;
                            return i.styles + ";"
                        }
                        return function(e, o, i) {
                            var r = "";
                            if (Array.isArray(i))
                                for (var t = 0; t < i.length; t++) r += p(e, o, i[t], !1);
                            else
                                for (var a in i) {
                                    var n = i[a];
                                    if ("object" != typeof n) null != o && void 0 !== o[n] ? r += a + "{" + o[n] + "}" : c(n) && (r += d(a) + ":" + u(a, n) + ";");
                                    else if (!Array.isArray(n) || "string" != typeof n[0] || null != o && void 0 !== o[n[0]]) {
                                        var s = p(e, o, n, !1);
                                        switch (a) {
                                            case "animation":
                                            case "animationName":
                                                r += d(a) + ":" + s + ";";
                                                break;
                                            default:
                                                r += a + "{" + s + "}"
                                        }
                                    } else
                                        for (var l = 0; l < n.length; l++) c(n[l]) && (r += d(a) + ":" + u(a, n[l]) + ";")
                                }
                            return r
                        }(e, o, i);
                    case "function":
                        if (void 0 !== e) {
                            var a = m,
                                n = i(e);
                            return m = a, p(e, o, n, r)
                        }
                }
                if (null == o) return i;
                var s = o[i];
                return void 0 === s || r ? i : s
            }
            var m, y = /label:\s*([^\s;\n{]+)\s*;/g,
                v = function(e, o, i) {
                    if (1 === e.length && "object" == typeof e[0] && null !== e[0] && void 0 !== e[0].styles) return e[0];
                    var t = !0,
                        a = "";
                    m = void 0;
                    var n = e[0];
                    null == n || void 0 === n.raw ? (t = !1, a += p(i, o, n, !1)) : a += n[0];
                    for (var s = 1; s < e.length; s++) a += p(i, o, e[s], 46 === a.charCodeAt(a.length - 1)), t && (a += n[s]);
                    y.lastIndex = 0;
                    for (var l, c = ""; null !== (l = y.exec(a));) c += "-" + l[1];
                    return {
                        name: (0, r.A)(a) + c,
                        styles: a,
                        next: m
                    }
                }
        },
        4660: (e, o, i) => {
            "use strict";
            i.d(o, {
                v: () => r
            });
            var r = 818 != i.j ? function() {
                function e(e) {
                    this.isSpeedy = void 0 === e.speedy || e.speedy, this.tags = [], this.ctr = 0, this.nonce = e.nonce, this.key = e.key, this.container = e.container, this.before = null
                }
                var o = e.prototype;
                return o.insert = function(e) {
                    if (this.ctr % (this.isSpeedy ? 65e3 : 1) == 0) {
                        var o, i = function(e) {
                            var o = document.createElement("style");
                            return o.setAttribute("data-emotion", e.key), void 0 !== e.nonce && o.setAttribute("nonce", e.nonce), o.appendChild(document.createTextNode("")), o
                        }(this);
                        o = 0 === this.tags.length ? this.before : this.tags[this.tags.length - 1].nextSibling, this.container.insertBefore(i, o), this.tags.push(i)
                    }
                    var r = this.tags[this.tags.length - 1];
                    if (this.isSpeedy) {
                        var t = function(e) {
                            if (e.sheet) return e.sheet;
                            for (var o = 0; o < document.styleSheets.length; o++)
                                if (document.styleSheets[o].ownerNode === e) return document.styleSheets[o]
                        }(r);
                        try {
                            var a = 105 === e.charCodeAt(1) && 64 === e.charCodeAt(0);
                            t.insertRule(e, a ? 0 : t.cssRules.length)
                        } catch (e) {}
                    } else r.appendChild(document.createTextNode(e));
                    this.ctr++
                }, o.flush = function() {
                    this.tags.forEach((function(e) {
                        return e.parentNode.removeChild(e)
                    })), this.tags = [], this.ctr = 0
                }, e
            }() : null
        },
        3080: (e, o, i) => {
            "use strict";
            i.d(o, {
                A: () => f
            });
            var r = i(1979),
                t = i(1594),
                a = i(8590),
                n = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/;
            const s = (0, a.A)((function(e) {
                return n.test(e) || 111 === e.charCodeAt(0) && 110 === e.charCodeAt(1) && e.charCodeAt(2) < 91
            }));
            var l = i(214),
                c = i(2264),
                d = i(6283),
                u = s,
                p = function(e) {
                    return "theme" !== e && "innerRef" !== e
                },
                m = function(e) {
                    return "string" == typeof e && e.charCodeAt(0) > 96 ? u : p
                };

            function y(e, o) {
                var i = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    o && (r = r.filter((function(o) {
                        return Object.getOwnPropertyDescriptor(e, o).enumerable
                    }))), i.push.apply(i, r)
                }
                return i
            }
            var v = function() {
                return null
            };
            var g = function e(o, i) {
                var a, n, s;
                void 0 !== i && (a = i.label, s = i.target, n = o.__emotion_forwardProp && i.shouldForwardProp ? function(e) {
                    return o.__emotion_forwardProp(e) && i.shouldForwardProp(e)
                } : i.shouldForwardProp);
                var u = o.__emotion_real === o,
                    p = u && o.__emotion_base || o;
                "function" != typeof n && u && (n = o.__emotion_forwardProp);
                var g = n || m(p),
                    f = !g("as");
                return function() {
                    var h = arguments,
                        C = u && void 0 !== o.__emotion_styles ? o.__emotion_styles.slice(0) : [];
                    if (void 0 !== a && C.push("label:" + a + ";"), null == h[0] || void 0 === h[0].raw) C.push.apply(C, h);
                    else {
                        C.push(h[0][0]);
                        for (var T = h.length, b = 1; b < T; b++) C.push(h[b], h[0][b])
                    }
                    var H = (0, l.ic)((function(e, o, i) {
                        return (0, t.createElement)(l.Dx.Consumer, null, (function(r) {
                            var a = f && e.as || p,
                                l = "",
                                u = [],
                                y = e;
                            if (null == e.theme) {
                                for (var h in y = {}, e) y[h] = e[h];
                                y.theme = r
                            }
                            "string" == typeof e.className ? l = (0, c.R)(o.registered, u, e.className) : null != e.className && (l = e.className + " ");
                            var T = (0, d.J)(C.concat(u), o.registered, y);
                            (0, c.s)(o, T, "string" == typeof a), l += o.key + "-" + T.name, void 0 !== s && (l += " " + s);
                            var b = f && void 0 === n ? m(a) : g,
                                H = {};
                            for (var A in e) f && "as" === A || b(A) && (H[A] = e[A]);
                            H.className = l, H.ref = i || e.innerRef;
                            var S = (0, t.createElement)(a, H),
                                N = (0, t.createElement)(v, null);
                            return (0, t.createElement)(t.Fragment, null, N, S)
                        }))
                    }));
                    return H.displayName = void 0 !== a ? a : "Styled(" + ("string" == typeof p ? p : p.displayName || p.name || "Component") + ")", H.defaultProps = o.defaultProps, H.__emotion_real = H, H.__emotion_base = p, H.__emotion_styles = C, H.__emotion_forwardProp = n, Object.defineProperty(H, "toString", {
                        value: function() {
                            return "." + s
                        }
                    }), H.withComponent = function(o, t) {
                        return e(o, void 0 !== t ? function(e) {
                            for (var o = 1; o < arguments.length; o++) {
                                var i = null != arguments[o] ? arguments[o] : {};
                                o % 2 ? y(Object(i), !0).forEach((function(o) {
                                    (0, r.A)(e, o, i[o])
                                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : y(Object(i)).forEach((function(o) {
                                    Object.defineProperty(e, o, Object.getOwnPropertyDescriptor(i, o))
                                }))
                            }
                            return e
                        }({}, i || {}, {}, t) : i).apply(void 0, C)
                    }, H
                }
            }.bind();
            ["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"].forEach((function(e) {
                g[e] = g(e)
            }));
            const f = g
        },
        2: (e, o, i) => {
            "use strict";
            i.d(o, {
                A: () => r
            });
            const r = 818 != i.j ? function(e) {
                function o(e, r, l, c, p) {
                    for (var m, y, v, g, T, H = 0, A = 0, S = 0, N = 0, P = 0, x = 0, D = v = m = 0, L = 0, I = 0, R = 0, G = 0, j = l.length, _ = j - 1, z = "", K = "", U = "", W = ""; L < j;) {
                        if (y = l.charCodeAt(L), L === _ && 0 !== A + N + S + H && (0 !== A && (y = 47 === A ? 10 : 47), N = S = H = 0, j++, _++), 0 === A + N + S + H) {
                            if (L === _ && (0 < I && (z = z.replace(u, "")), 0 < z.trim().length)) {
                                switch (y) {
                                    case 32:
                                    case 9:
                                    case 59:
                                    case 13:
                                    case 10:
                                        break;
                                    default:
                                        z += l.charAt(L)
                                }
                                y = 59
                            }
                            switch (y) {
                                case 123:
                                    for (m = (z = z.trim()).charCodeAt(0), v = 1, G = ++L; L < j;) {
                                        switch (y = l.charCodeAt(L)) {
                                            case 123:
                                                v++;
                                                break;
                                            case 125:
                                                v--;
                                                break;
                                            case 47:
                                                switch (y = l.charCodeAt(L + 1)) {
                                                    case 42:
                                                    case 47:
                                                        e: {
                                                            for (D = L + 1; D < _; ++D) switch (l.charCodeAt(D)) {
                                                                case 47:
                                                                    if (42 === y && 42 === l.charCodeAt(D - 1) && L + 2 !== D) {
                                                                        L = D + 1;
                                                                        break e
                                                                    }
                                                                    break;
                                                                case 10:
                                                                    if (47 === y) {
                                                                        L = D + 1;
                                                                        break e
                                                                    }
                                                            }
                                                            L = D
                                                        }
                                                }
                                                break;
                                            case 91:
                                                y++;
                                            case 40:
                                                y++;
                                            case 34:
                                            case 39:
                                                for (; L++ < _ && l.charCodeAt(L) !== y;);
                                        }
                                        if (0 === v) break;
                                        L++
                                    }
                                    if (v = l.substring(G, L), 0 === m && (m = (z = z.replace(d, "").trim()).charCodeAt(0)), 64 === m) {
                                        switch (0 < I && (z = z.replace(u, "")), y = z.charCodeAt(1)) {
                                            case 100:
                                            case 109:
                                            case 115:
                                            case 45:
                                                I = r;
                                                break;
                                            default:
                                                I = E
                                        }
                                        if (G = (v = o(r, I, v, y, p + 1)).length, 0 < F && (T = s(3, v, I = i(E, z, R), r, M, w, G, y, p, c), z = I.join(""), void 0 !== T && 0 === (G = (v = T.trim()).length) && (y = 0, v = "")), 0 < G) switch (y) {
                                            case 115:
                                                z = z.replace(b, n);
                                            case 100:
                                            case 109:
                                            case 45:
                                                v = z + "{" + v + "}";
                                                break;
                                            case 107:
                                                v = (z = z.replace(f, "$1 $2")) + "{" + v + "}", v = 1 === O || 2 === O && a("@" + v, 3) ? "@-webkit-" + v + "@" + v : "@" + v;
                                                break;
                                            default:
                                                v = z + v, 112 === c && (K += v, v = "")
                                        } else v = ""
                                    } else v = o(r, i(r, z, R), v, c, p + 1);
                                    U += v, v = R = I = D = m = 0, z = "", y = l.charCodeAt(++L);
                                    break;
                                case 125:
                                case 59:
                                    if (1 < (G = (z = (0 < I ? z.replace(u, "") : z).trim()).length)) switch (0 === D && (m = z.charCodeAt(0), 45 === m || 96 < m && 123 > m) && (G = (z = z.replace(" ", ":")).length), 0 < F && void 0 !== (T = s(1, z, r, e, M, w, K.length, c, p, c)) && 0 === (G = (z = T.trim()).length) && (z = "\0\0"), m = z.charCodeAt(0), y = z.charCodeAt(1), m) {
                                        case 0:
                                            break;
                                        case 64:
                                            if (105 === y || 99 === y) {
                                                W += z + l.charAt(L);
                                                break
                                            }
                                        default:
                                            58 !== z.charCodeAt(G - 1) && (K += t(z, m, y, z.charCodeAt(2)))
                                    }
                                    R = I = D = m = 0, z = "", y = l.charCodeAt(++L)
                            }
                        }
                        switch (y) {
                            case 13:
                            case 10:
                                47 === A ? A = 0 : 0 === 1 + m && 107 !== c && 0 < z.length && (I = 1, z += "\0"), 0 < F * B && s(0, z, r, e, M, w, K.length, c, p, c), w = 1, M++;
                                break;
                            case 59:
                            case 125:
                                if (0 === A + N + S + H) {
                                    w++;
                                    break
                                }
                            default:
                                switch (w++, g = l.charAt(L), y) {
                                    case 9:
                                    case 32:
                                        if (0 === N + H + A) switch (P) {
                                            case 44:
                                            case 58:
                                            case 9:
                                            case 32:
                                                g = "";
                                                break;
                                            default:
                                                32 !== y && (g = " ")
                                        }
                                        break;
                                    case 0:
                                        g = "\\0";
                                        break;
                                    case 12:
                                        g = "\\f";
                                        break;
                                    case 11:
                                        g = "\\v";
                                        break;
                                    case 38:
                                        0 === N + A + H && (I = R = 1, g = "\f" + g);
                                        break;
                                    case 108:
                                        if (0 === N + A + H + k && 0 < D) switch (L - D) {
                                            case 2:
                                                112 === P && 58 === l.charCodeAt(L - 3) && (k = P);
                                            case 8:
                                                111 === x && (k = x)
                                        }
                                        break;
                                    case 58:
                                        0 === N + A + H && (D = L);
                                        break;
                                    case 44:
                                        0 === A + S + N + H && (I = 1, g += "\r");
                                        break;
                                    case 34:
                                    case 39:
                                        0 === A && (N = N === y ? 0 : 0 === N ? y : N);
                                        break;
                                    case 91:
                                        0 === N + A + S && H++;
                                        break;
                                    case 93:
                                        0 === N + A + S && H--;
                                        break;
                                    case 41:
                                        0 === N + A + H && S--;
                                        break;
                                    case 40:
                                        0 === N + A + H && (0 === m && (2 * P + 3 * x == 533 || (m = 1)), S++);
                                        break;
                                    case 64:
                                        0 === A + S + N + H + D + v && (v = 1);
                                        break;
                                    case 42:
                                    case 47:
                                        if (!(0 < N + H + S)) switch (A) {
                                            case 0:
                                                switch (2 * y + 3 * l.charCodeAt(L + 1)) {
                                                    case 235:
                                                        A = 47;
                                                        break;
                                                    case 220:
                                                        G = L, A = 42
                                                }
                                                break;
                                            case 42:
                                                47 === y && 42 === P && G + 2 !== L && (33 === l.charCodeAt(G + 2) && (K += l.substring(G, L + 1)), g = "", A = 0)
                                        }
                                }
                                0 === A && (z += g)
                        }
                        x = P, P = y, L++
                    }
                    if (0 < (G = K.length)) {
                        if (I = r, 0 < F && void 0 !== (T = s(2, K, I, e, M, w, G, c, p, c)) && 0 === (K = T).length) return W + K + U;
                        if (K = I.join(",") + "{" + K + "}", 0 != O * k) {
                            switch (2 !== O || a(K, 2) || (k = 0), k) {
                                case 111:
                                    K = K.replace(C, ":-moz-$1") + K;
                                    break;
                                case 112:
                                    K = K.replace(h, "::-webkit-input-$1") + K.replace(h, "::-moz-$1") + K.replace(h, ":-ms-input-$1") + K
                            }
                            k = 0
                        }
                    }
                    return W + K + U
                }

                function i(e, o, i) {
                    var t = o.trim().split(v);
                    o = t;
                    var a = t.length,
                        n = e.length;
                    switch (n) {
                        case 0:
                        case 1:
                            var s = 0;
                            for (e = 0 === n ? "" : e[0] + " "; s < a; ++s) o[s] = r(e, o[s], i).trim();
                            break;
                        default:
                            var l = s = 0;
                            for (o = []; s < a; ++s)
                                for (var c = 0; c < n; ++c) o[l++] = r(e[c] + " ", t[s], i).trim()
                    }
                    return o
                }

                function r(e, o, i) {
                    var r = o.charCodeAt(0);
                    switch (33 > r && (r = (o = o.trim()).charCodeAt(0)), r) {
                        case 38:
                            return o.replace(g, "$1" + e.trim());
                        case 58:
                            return e.trim() + o.replace(g, "$1" + e.trim());
                        default:
                            if (0 < 1 * i && 0 < o.indexOf("\f")) return o.replace(g, (58 === e.charCodeAt(0) ? "" : "$1") + e.trim())
                    }
                    return e + o
                }

                function t(e, o, i, r) {
                    var n = e + ";",
                        s = 2 * o + 3 * i + 4 * r;
                    if (944 === s) {
                        e = n.indexOf(":", 9) + 1;
                        var l = n.substring(e, n.length - 1).trim();
                        return l = n.substring(0, e).trim() + l + ";", 1 === O || 2 === O && a(l, 1) ? "-webkit-" + l + l : l
                    }
                    if (0 === O || 2 === O && !a(n, 1)) return n;
                    switch (s) {
                        case 1015:
                            return 97 === n.charCodeAt(10) ? "-webkit-" + n + n : n;
                        case 951:
                            return 116 === n.charCodeAt(3) ? "-webkit-" + n + n : n;
                        case 963:
                            return 110 === n.charCodeAt(5) ? "-webkit-" + n + n : n;
                        case 1009:
                            if (100 !== n.charCodeAt(4)) break;
                        case 969:
                        case 942:
                            return "-webkit-" + n + n;
                        case 978:
                            return "-webkit-" + n + "-moz-" + n + n;
                        case 1019:
                        case 983:
                            return "-webkit-" + n + "-moz-" + n + "-ms-" + n + n;
                        case 883:
                            if (45 === n.charCodeAt(8)) return "-webkit-" + n + n;
                            if (0 < n.indexOf("image-set(", 11)) return n.replace(P, "$1-webkit-$2") + n;
                            break;
                        case 932:
                            if (45 === n.charCodeAt(4)) switch (n.charCodeAt(5)) {
                                case 103:
                                    return "-webkit-box-" + n.replace("-grow", "") + "-webkit-" + n + "-ms-" + n.replace("grow", "positive") + n;
                                case 115:
                                    return "-webkit-" + n + "-ms-" + n.replace("shrink", "negative") + n;
                                case 98:
                                    return "-webkit-" + n + "-ms-" + n.replace("basis", "preferred-size") + n
                            }
                            return "-webkit-" + n + "-ms-" + n + n;
                        case 964:
                            return "-webkit-" + n + "-ms-flex-" + n + n;
                        case 1023:
                            if (99 !== n.charCodeAt(8)) break;
                            return "-webkit-box-pack" + (l = n.substring(n.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify")) + "-webkit-" + n + "-ms-flex-pack" + l + n;
                        case 1005:
                            return m.test(n) ? n.replace(p, ":-webkit-") + n.replace(p, ":-moz-") + n : n;
                        case 1e3:
                            switch (o = (l = n.substring(13).trim()).indexOf("-") + 1, l.charCodeAt(0) + l.charCodeAt(o)) {
                                case 226:
                                    l = n.replace(T, "tb");
                                    break;
                                case 232:
                                    l = n.replace(T, "tb-rl");
                                    break;
                                case 220:
                                    l = n.replace(T, "lr");
                                    break;
                                default:
                                    return n
                            }
                            return "-webkit-" + n + "-ms-" + l + n;
                        case 1017:
                            if (-1 === n.indexOf("sticky", 9)) break;
                        case 975:
                            switch (o = (n = e).length - 10, s = (l = (33 === n.charCodeAt(o) ? n.substring(0, o) : n).substring(e.indexOf(":", 7) + 1).trim()).charCodeAt(0) + (0 | l.charCodeAt(7))) {
                                case 203:
                                    if (111 > l.charCodeAt(8)) break;
                                case 115:
                                    n = n.replace(l, "-webkit-" + l) + ";" + n;
                                    break;
                                case 207:
                                case 102:
                                    n = n.replace(l, "-webkit-" + (102 < s ? "inline-" : "") + "box") + ";" + n.replace(l, "-webkit-" + l) + ";" + n.replace(l, "-ms-" + l + "box") + ";" + n
                            }
                            return n + ";";
                        case 938:
                            if (45 === n.charCodeAt(5)) switch (n.charCodeAt(6)) {
                                case 105:
                                    return l = n.replace("-items", ""), "-webkit-" + n + "-webkit-box-" + l + "-ms-flex-" + l + n;
                                case 115:
                                    return "-webkit-" + n + "-ms-flex-item-" + n.replace(A, "") + n;
                                default:
                                    return "-webkit-" + n + "-ms-flex-line-pack" + n.replace("align-content", "").replace(A, "") + n
                            }
                            break;
                        case 973:
                        case 989:
                            if (45 !== n.charCodeAt(3) || 122 === n.charCodeAt(4)) break;
                        case 931:
                        case 953:
                            if (!0 === N.test(e)) return 115 === (l = e.substring(e.indexOf(":") + 1)).charCodeAt(0) ? t(e.replace("stretch", "fill-available"), o, i, r).replace(":fill-available", ":stretch") : n.replace(l, "-webkit-" + l) + n.replace(l, "-moz-" + l.replace("fill-", "")) + n;
                            break;
                        case 962:
                            if (n = "-webkit-" + n + (102 === n.charCodeAt(5) ? "-ms-" + n : "") + n, 211 === i + r && 105 === n.charCodeAt(13) && 0 < n.indexOf("transform", 10)) return n.substring(0, n.indexOf(";", 27) + 1).replace(y, "$1-webkit-$2") + n
                    }
                    return n
                }

                function a(e, o) {
                    var i = e.indexOf(1 === o ? ":" : "{"),
                        r = e.substring(0, 3 !== o ? i : 10);
                    return i = e.substring(i + 1, e.length - 1), D(2 !== o ? r : r.replace(S, "$1"), i, o)
                }

                function n(e, o) {
                    var i = t(o, o.charCodeAt(0), o.charCodeAt(1), o.charCodeAt(2));
                    return i !== o + ";" ? i.replace(H, " or ($1)").substring(4) : "(" + o + ")"
                }

                function s(e, o, i, r, t, a, n, s, l, d) {
                    for (var u, p = 0, m = o; p < F; ++p) switch (u = x[p].call(c, e, m, i, r, t, a, n, s, l, d)) {
                        case void 0:
                        case !1:
                        case !0:
                        case null:
                            break;
                        default:
                            m = u
                    }
                    if (m !== o) return m
                }

                function l(e) {
                    return void 0 !== (e = e.prefix) && (D = null, e ? "function" != typeof e ? O = 1 : (O = 2, D = e) : O = 0), l
                }

                function c(e, i) {
                    var r = e;
                    if (33 > r.charCodeAt(0) && (r = r.trim()), r = [r], 0 < F) {
                        var t = s(-1, i, r, r, M, w, 0, 0, 0, 0);
                        void 0 !== t && "string" == typeof t && (i = t)
                    }
                    var a = o(E, r, i, 0, 0);
                    return 0 < F && void 0 !== (t = s(-2, a, r, r, M, w, a.length, 0, 0, 0)) && (a = t), k = 0, w = M = 1, a
                }
                var d = /^\0+/g,
                    u = /[\0\r\f]/g,
                    p = /: */g,
                    m = /zoo|gra/,
                    y = /([,: ])(transform)/g,
                    v = /,\r+?/g,
                    g = /([\t\r\n ])*\f?&/g,
                    f = /@(k\w+)\s*(\S*)\s*/,
                    h = /::(place)/g,
                    C = /:(read-only)/g,
                    T = /[svh]\w+-[tblr]{2}/,
                    b = /\(\s*(.*)\s*\)/g,
                    H = /([\s\S]*?);/g,
                    A = /-self|flex-/g,
                    S = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
                    N = /stretch|:\s*\w+\-(?:conte|avail)/,
                    P = /([^-])(image-set\()/,
                    w = 1,
                    M = 1,
                    k = 0,
                    O = 1,
                    E = [],
                    x = [],
                    F = 0,
                    D = null,
                    B = 0;
                return c.use = function e(o) {
                    switch (o) {
                        case void 0:
                        case null:
                            F = x.length = 0;
                            break;
                        default:
                            if ("function" == typeof o) x[F++] = o;
                            else if ("object" == typeof o)
                                for (var i = 0, r = o.length; i < r; ++i) e(o[i]);
                            else B = 0 | !!o
                    }
                    return e
                }, c.set = l, void 0 !== e && l(e), c
            } : null
        },
        2264: (e, o, i) => {
            "use strict";
            i.d(o, {
                R: () => t,
                s: () => a
            });
            var r = 818 != i.j || null;

            function t(e, o, i) {
                var r = "";
                return i.split(" ").forEach((function(i) {
                    void 0 !== e[i] ? o.push(e[i]) : r += i + " "
                })), r
            }
            var a = function(e, o, i) {
                var t = e.key + "-" + o.name;
                if ((!1 === i || !1 === r && void 0 !== e.compat) && void 0 === e.registered[t] && (e.registered[t] = o.styles), void 0 === e.inserted[o.name]) {
                    var a = o;
                    do {
                        e.insert("." + t, a, e.sheet, !0), a = a.next
                    } while (void 0 !== a)
                }
            }
        },
        3899: (e, o, i) => {
            "use strict";
            i.d(o, {
                A: () => y
            });
            var r = i(7201),
                t = i(1594),
                a = i.n(t),
                n = i(7635);

            function s(e) {
                return (s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function l(e, o, i) {
                var r;
                return r = function(e) {
                    if ("object" != s(e) || !e) return e;
                    var o, i = e[Symbol.toPrimitive];
                    if (void 0 !== i) {
                        if ("object" != s(o = i.call(e, "string"))) return o;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return String(e)
                }(o), (o = "symbol" == s(r) ? r : String(r)) in e ? Object.defineProperty(e, o, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[o] = i, e
            }
            var c = (0, t.forwardRef)((function(e, o) {
                var i, r, t = e.appearance,
                    s = void 0 === t ? "primary" : t,
                    c = e.ariaLabel,
                    d = e.background,
                    u = void 0 === d ? "light" : d,
                    p = e.children,
                    m = e.className,
                    y = e.classes,
                    v = void 0 === y ? {
                        button: "btn",
                        text: "cta",
                        iconWrapper: "",
                        buttonLarge: "btn-lg",
                        buttonMedium: "btn-md",
                        buttonSmall: "",
                        buttonResponsive: "btn-responsive",
                        textUnderline: "underline"
                    } : y,
                    g = e.disabled,
                    f = e.href,
                    h = e.iconPlacement,
                    C = void 0 === h ? "end" : h,
                    T = e.onClick,
                    b = e.size,
                    H = void 0 === b ? "responsive" : b,
                    A = e.Component,
                    S = void 0 === A ? "button" : A,
                    N = e.Icon,
                    P = e.IconWrapper,
                    w = void 0 === P ? "span" : P,
                    M = e.type,
                    k = void 0 === M ? "submit" : M,
                    O = e.disableRipple,
                    E = void 0 !== O && O,
                    x = function(e, o) {
                        var i, r = {};
                        for (var t in e) Object.prototype.hasOwnProperty.call(e, t) && o.indexOf(t) < 0 && (r[t] = e[t]);
                        if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                            for (i = 0, t = Object.getOwnPropertySymbols(e); i < t.length; i++) o.indexOf(t[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, t[i]) && (r[t[i]] = e[t[i]]);
                        return r
                    }(e, ["appearance", "ariaLabel", "background", "children", "className", "classes", "disabled", "href", "iconPlacement", "onClick", "size", "Component", "Icon", "IconWrapper", "type", "disableRipple"]),
                    F = function(e) {
                        return "text" === e || "textUnderline" === e ? "primary" : e
                    }(s),
                    D = function(e, o, i) {
                        return "text" === e || "textUnderline" === e ? i : o
                    }(s, v.button, v.text),
                    B = "textUnderline" === s ? v.textUnderline : "";
                v.button ? (i = "dark" === u ? "light" : "dark", r = "".concat(D, "-").concat(F, "-").concat(i, " ").concat(B)) : r = s;
                var L = function(e, o, i, r, t) {
                    return "small" === e ? o : "medium" === e ? i : "large" === e ? r : t
                }(H, v.buttonSmall, v.buttonMedium, v.buttonLarge, v.buttonResponsive);
                r = (0, n.A)("nds-btn", m, r, l(l({}, L, !!L), "disabled", "a" === S ? void 0 : g));
                var I = N && a().createElement(w, {
                    className: (0, n.A)("btn-icon-wrapper", v.iconWrapper)
                }, N);
                return a().createElement(S, Object.assign({
                    disabled: "a" === S ? void 0 : g,
                    "aria-label": c,
                    className: r,
                    onClick: T,
                    href: "button" !== S ? f : void 0,
                    type: "a" !== S ? k : void 0
                }, x, {
                    ref: o
                }), "start" === C && I, p, "end" === C && I, !("textUnderline" === s || "text" === s || E || g) && a().createElement("span", {
                    className: "ripple"
                }))
            }));
            c.displayName = "Button";
            var d = i(214),
                u = i(9911),
                p = i(4927),
                m = (0, t.forwardRef)((function(e, o) {
                    return a().createElement(c, Object.assign({}, e, {
                        ref: o
                    }))
                }));
            m.displayName = "ButtonWithRef";
            var y = (0, r.A)(m, {
                target: "ex41m6f0"
            })((function(e) {
                var o, i, r = e.Component,
                    t = e.className,
                    a = e.size,
                    n = e.appearance,
                    s = void 0 === n ? "primary" : n,
                    l = e.background,
                    c = void 0 === l ? "light" : l,
                    m = e.disableRipple,
                    y = e.iconPlacement,
                    v = "light" === c,
                    g = {
                        light: {
                            primary: {
                                backgroundStyle: "var(--podium-cds-button-color-bg-primary)",
                                color: "var(--podium-cds-color-text-primary-on-dark)",
                                hoverFocusActiveBackground: "var(--podium-cds-button-color-bg-primary-hover)",
                                disabledBackground: "var(--podium-cds-button-color-bg-primary-disabled)",
                                disabledColor: "var(--podium-cds-color-text-disabled)"
                            },
                            secondary: {
                                backgroundStyle: "var(--podium-cds-button-color-bg-secondary)",
                                color: "var(--podium-cds-color-text-primary-on-light)",
                                borderColor: "var(--podium-cds-button-color-border-secondary)",
                                hoverFocusActiveBackground: "var(--podium-cds-button-color-bg-secondary)",
                                hoverFocusActiveBorderColor: "var(--podium-cds-button-color-border-secondary-hover)",
                                disabledBackground: "var(--podium-cds-button-color-bg-secondary)",
                                disabledColor: "var(--podium-cds-color-text-disabled)",
                                disabledBorderColor: "var(--podium-cds-button-color-border-secondary-disabled)"
                            },
                            tertiary: {
                                backgroundStyle: "inherit",
                                color: "var(--podium-cds-color-text-primary-on-light)",
                                hoverFocusActiveBackground: "var(--podium-cds-icon-button-color-bg-tertiary-hover)",
                                disabledBackground: "inherit",
                                disabledColor: "var(--podium-cds-color-text-disabled)"
                            }
                        },
                        dark: {
                            primary: {
                                backgroundStyle: "var(--podium-cds-button-color-bg-primary-on-dark)",
                                color: "var(--podium-cds-color-text-primary-on-light)",
                                hoverFocusActiveBackground: "var(--podium-cds-button-color-bg-primary-hover-on-dark)",
                                disabledBackground: "var(--podium-cds-button-color-bg-primary-disabled-on-dark)",
                                disabledColor: "var(--podium-cds-color-text-disabled-inverse)"
                            },
                            secondary: {
                                backgroundStyle: "var(--podium-cds-button-color-bg-secondary)",
                                color: "var(--podium-cds-color-text-primary-on-dark)",
                                borderColor: "var(--podium-cds-button-color-border-secondary-on-dark)",
                                hoverFocusActiveBackground: "var(--podium-cds-button-color-bg-secondary)",
                                hoverFocusActiveBorderColor: "var(--podium-cds-button-color-border-secondary)",
                                disabledBackground: "var(--podium-cds-button-color-bg-secondary)",
                                disabledColor: "var(--podium-cds-color-text-disabled-inverse)",
                                disabledBorderColor: "var(--podium-cds-button-color-border-secondary-disabled-on-dark)"
                            },
                            tertiary: {
                                backgroundStyle: "inherit",
                                color: "var(--podium-cds-color-text-primary-on-dark)",
                                hoverFocusActiveBackground: "var(--podium-cds-icon-button-color-bg-tertiary-hover-on-dark)",
                                disabledBackground: "inherit",
                                disabledColor: "var(--podium-cds-color-text-disabled-inverse)"
                            }
                        }
                    };
                return (0, d.AH)("font:var(--podium-cds-typography-body1-strong);text-align:center;text-decoration:none;box-sizing:border-box;display:", "a" === r ? "inline-flex" : "flex", ";justify-content:center;align-items:center;position:relative;cursor:pointer;", function() {
                    var e, o, i;
                    if ("primary" === s || "secondary" === s || "tertiary" === s) return o = "\n          padding: var(--podium-cds-button-padding-top-l) var(--podium-cds-button-padding-sides-l);\n          width: 100%;\n          min-height: var(--podium-cds-button-height-l);\n        ", i = "\n        padding: var(--podium-cds-button-padding-top-s) var(--podium-cds-button-padding-sides-s) var(--podium-cds-button-padding-bottom-s);\n        min-height: var(--podium-cds-button-height-s);\n      ", e = "large" === a ? o : "medium" === a ? "\n          padding: var(--podium-cds-button-padding-top-m) var(--podium-cds-button-padding-sides-m);\n          min-height: var(--podium-cds-button-height-m);\n      " : "small" === a ? i : "\n          ".concat(o, "\n          @media (min-width: ").concat(u.f.podiumCdsBreakpointM, ") {\n            ").concat(i, "\n            width: auto;\n            height: auto;\n            min-height: auto;\n          }\n        "), (0, d.AH)(e)
                }(), " ", (o = "end" === y ? "0" : "var(--podium-cds-size-spacing-xs)", i = "start" === y ? "0" : "var(--podium-cds-size-spacing-xs)", "small" === a && (o = "end" === y ? "0" : "8px", i = "start" === y ? "-4px" : "var(--podium-cds-size-spacing-xs)"), (0, d.AH)(".btn-icon-wrapper{width:", "small" === a ? "20px" : "var(--podium-cds-size-icon-m)", ";height:var(--podium-cds-size-icon-m);margin-inline-end:", o, ";margin-inline-start:", i, ";svg{width:var(--podium-cds-size-icon-m);}}")), " ", "text" === s || "textUnderline" === s ? function() {
                    if ("text" === s) return (0, d.AH)("display:block;.btn-icon-wrapper{display:inline-flex;width:", "small" === a ? "16px" : "var(--podium-cds-size-icon-m)", ";height:var(--podium-cds-size-icon-m);margin-inline-end:", "end" === y ? "0" : "var(--podium-cds-size-spacing-xs)", ";margin-inline-start:", "start" === y ? "0" : "var(--podium-cds-size-spacing-xs)", ";svg{width:var(--podium-cds-size-icon-m);content:'';position:absolute;transform:translateY(5px);}}")
                }() : null, " ", function() {
                    if ("text" === s || "textUnderline" === s) return (0, d.AH)("padding:0;color:", v ? "var(--podium-cds-color-text-primary)" : "var(--podium-cds-color-text-primary-inverse)", ";background:transparent;text-align:start;border:0;", "small" === a && "font: var(--podium-cds-typography-body3-strong);\n          ", " ", "medium" === a && "\n          font: var(--podium-cds-typography-body2-strong);\n          ", " ", "large" === a && "\n          font: var(--podium-cds-typography-body1-strong);\n        ", " ", "responsive" === a && "@media (min-width: ".concat(parseInt("600", 10) + 1, "px) {\n              font: var(--podium-cds-typography-body3-strong)\n            }\n        }"), " &:active:not(:disabled){color:", v ? "var(--podium-cds-color-text-secondary)" : "var(--podium-cds-color-text-secondary-inverse)", ";}&:focus:not(:disabled){color:", v ? "var(--podium-cds-color-text-primary)" : "var(--podium-cds-color-text-primary-inverse)", ";}@media (hover:hover){&:hover:not(:disabled){color:", v ? "var(--podium-cds-color-text-hover)" : "var(--podium-cds-color-text-hover-inverse)", ";}}&:disabled{color:", v ? "var(--podium-cds-color-text-disabled)" : "var(--podium-cds-color-text-disabled-inverse)", ";cursor:default;}")
                }(), " ", function() {
                    var e, o, i;
                    if ("textUnderline" === s) return e = {
                        paddingEnd: "start" === y ? "28px" : "initial",
                        marginEnd: "end" === y ? "0" : "auto",
                        resetMargins: "start" === y ? "0" : "var(--podium-cds-size-spacing-xs)",
                        svgTransform: "translateY(-2px)"
                    }, o = {
                        large: Object.assign({}, e),
                        medium: Object.assign(Object.assign({}, e), {
                            svgTransform: "translateY(-4px)"
                        }),
                        small: Object.assign({}, e),
                        responsive: Object.assign({}, e)
                    }, (0, d.AH)("@media screen and (min-resolution:1dppx){border-bottom:var(--podium-cds-size-border-width-m) solid ", v ? "var(--podium-cds-color-text-primary)" : "var(--podium-cds-color-text-primary-inverse)", ";box-shadow:inset 0 -1px 0 0 ", v ? "var(--podium-cds-color-text-primary)" : "var(--podium-cds-color-text-primary-inverse)", ";}@media screen and (min-resolution:2dppx){border-bottom:var(--podium-cds-size-border-width-m) solid ", v ? "var(--podium-cds-color-text-primary)" : "var(--podium-cds-color-text-primary-inverse)", ";box-shadow:inset 0 var(--podium-cds-button-box-shadow-width) 0 0 ", v ? "var(--podium-cds-color-text-primary)" : "var(--podium-cds-color-text-primary-inverse)", ";}.btn-icon-wrapper{display:inline-flex;height:auto;margin-inline-end:", (i = o[null != a ? a : "medium"]).marginEnd, ";margin-inline-start:", i.resetMargins, ";margin-left:", "start" === y ? "initial" : "4px", ";padding-inline-end:", i.paddingEnd, ";svg{content:'';position:absolute;left:", "start" === y ? "0" : "initial", ";right:0;top:0;transform:", i.svgTransform, ';}}[dir="rtl"] &{.btn-icon-wrapper{margin-inline-end:', i.marginEnd, ";margin-inline-start:", i.resetMargins, ";padding-inline-end:", i.paddingEnd, ";svg{right:", "start" === y ? "0" : "initial", ";}}}&:hover:not(:disabled),&:active:not(:disabled){@media screen and (min-resolution:1dppx){border-bottom:var(--podium-cds-size-border-width-m) solid ", v ? "var(--podium-cds-color-text-hover)" : "var(--podium-cds-color-text-hover-inverse)", ";box-shadow:inset 0 -1px 0 0 ", v ? "var(--podium-cds-color-text-hover)" : "var(--podium-cds-color-text-hover-inverse)", ";}@media screen and (min-resolution:2dppx){border-bottom:var(--podium-cds-size-border-width-m) solid ", v ? "var(--podium-cds-color-text-hover)" : "var(--podium-cds-color-text-hover-inverse)", ";box-shadow:inset 0 var(--podium-cds-button-box-shadow-width) 0 0 ", v ? "var(--podium-cds-color-text-hover)" : "var(--podium-cds-color-text-hover-inverse)", ";}}&:disabled{@media screen and (min-resolution:1dppx){border-bottom:var(--podium-cds-size-border-width-m) solid ", v ? "var(--podium-cds-button-color-border-secondary-disabled)" : "var(--podium-cds-button-color-border-secondary-disabled-on-dark)", ";box-shadow:inset 0 -1px 0 0 ", v ? "var(--podium-cds-button-color-border-secondary-disabled)" : "var(--podium-cds-button-color-border-secondary-disabled-on-dark)", ";}@media screen and (min-resolution:2dppx){border-bottom:var(--podium-cds-size-border-width-m) solid ", v ? "var(--podium-cds-button-color-border-secondary-disabled)" : "var(--podium-cds-button-color-border-secondary-disabled-on-dark)", ";box-shadow:inset 0 var(--podium-cds-button-box-shadow-width) 0 0 ", v ? "var(--podium-cds-button-color-border-secondary-disabled)" : "var(--podium-cds-button-color-border-secondary-disabled-on-dark)", ";}}", i)
                }(), " ", m || "text" === s || "textUnderline" === s ? null : (0, d.AH)("position:relative;overflow:hidden;transform:translate3d(0,0,0);> .ripple{display:block;position:absolute;", "small" === a && "width: var(--podium-cds-button-height-s);\n           height: var(--podium-cds-button-height-s);\n          ", " ", "medium" === a && "width: var(--podium-cds-button-height-m);\n         height: var(--podium-cds-button-height-m);\n        ", " ", "large" === a && "width: var(--podium-cds-button-height-l);\n         height: var(--podium-cds-button-height-l);\n        ", " ", "responsive" === a && "@media (min-width: ".concat(u.f.podiumCdsBreakpointM, ") {\n          width: var(--podium-cds-button-height-s);\n          height: var(--podium-cds-button-height-s);\n        }\n        width: var(--podium-cds-button-height-l);\n        height: var(--podium-cds-button-height-l);\n        "), " border-radius:var(--podium-cds-button-border-radius);top:50%;left:50%;background-color:rgba(255,255,255,0.7);background-size:100%;transform:translate3d(-50%,-50%,0) scale(10);transform-origin:center center;opacity:0;transition:transform 0.8s,opacity 1s;margin:0;}&:active > .ripple{transform:translate3d(-50%,-50%,0) scale(0);opacity:0.5;transition:0s;}"), " ", function() {
                    var e, o, i, r, t, a, n, l, u;
                    if ("primary" === s || "secondary" === s || "tertiary" === s) return o = (e = g[null != c ? c : "light"][s]).backgroundStyle, i = e.color, r = e.borderColor, t = e.hoverFocusActiveBackground, a = e.hoverFocusActiveBorderColor, n = e.disabledBackground, l = e.disabledColor, u = e.disabledBorderColor, (0, d.AH)("background:", o, ";color:", i, ";border:none;border-radius:var(--podium-cds-button-border-radius);outline:none;&::before{content:'';position:absolute;top:0px;right:0px;bottom:0px;left:0px;border-radius:var(--podium-cds-button-border-radius);", "secondary" === s && "\n              border: var(--podium-cds-button-border-width) solid ".concat(r, ";\n          "), "}", "secondary" === s && "\n          ".concat(p.wq, "{\n          border: var(--podium-cds-button-border-width) solid;\n          border-color: ").concat(r, ";\n          }\n        "), " &:active:not(:disabled){background:", t, ";&::before{border-color:", a, ";}}@media (hover:hover){&:hover:not(:disabled){background:", t, ";&::before{border-color:", a, ";}}}&:focus-visible{box-shadow:0 0 0 2px var(--podium-cds-color-focus-ring);}&.focus-visible{box-shadow:0 0 0 2px var(--podium-cds-color-focus-ring);}&:disabled{&::before{border-color:", u, ";}background:", n, ";color:", l, ";cursor:default;}")
                }(), " ", (null == t ? void 0 : t.includes("nds-button--icon-only")) && (0, d.AH)("&.nds-button--icon-only{width:unset;min-height:unset;padding:", "small" === a ? "6px" : "medium" === a ? "12px" : "18px", ";", ("responsive" === a || "large" === a) && "\n      svg {\n        width: 24px;\n        height: 24px;\n      }\n      ", " @media (min-width:", u.f.podiumCdsBreakpointS, "){padding:", "large" === a ? "14px" : "medium" === a ? "12px" : "6px", ";svg{height:", "large" === a ? "24px" : "auto", ";width:", "large" === a ? "24px" : "auto", ";}}&.btn-primary-dark.disabled,&.btn-secondary-dark.disabled{background-color:var(--podium-cds-icon-button-color-bg-disabled);color:var(--podium-cds-color-text-disabled);&::before{border-color:var(--podium-cds-icon-button-color-bg-disabled);}}&.btn-primary-light.disabled{background-color:var(--podium-cds-icon-button-color-bg-disabled-on-dark);}&.btn-secondary-dark{background-color:var(--podium-cds-icon-button-color-bg-secondary);&::before{border-color:var(--podium-cds-icon-button-color-bg-secondary);}&:hover:not(:disabled){background-color:var(--podium-cds-icon-button-color-bg-secondary-hover);border-color:var(--podium-cds-icon-button-color-bg-secondary-hover);&::before{border-color:var(--podium-cds-icon-button-color-bg-secondary-hover);}}}&.btn-secondary-light{background-color:var(--podium-cds-icon-button-color-bg-secondary-on-dark);&::before{border-color:var(--podium-cds-icon-button-color-bg-secondary-on-dark);}&:hover:not(:disabled){background-color:var(--podium-cds-icon-button-color-bg-secondary-hover-on-dark);&::before{border-color:var(--podium-cds-icon-button-color-bg-secondary-hover-on-dark);}}&.disabled{background-color:var(--podium-cds-icon-button-color-bg-disabled-on-dark);&::before{border-color:var(--podium-cds-icon-button-color-bg-disabled-on-dark);}color:var(--podium-cds-color-text-disabled-inverse);}}}"), " &.inline-flx-btn{display:inline-flex;}")
            }))
        },
        7511: (e, o, i) => {
            "use strict";
            i.d(o, {
                K: () => s
            });
            var r = i(1594),
                t = i.n(r),
                a = i(7635),
                n = i(3899),
                s = (0, r.forwardRef)((function(e, o) {
                    var i = e.appearance,
                        r = void 0 === i ? "primary" : i,
                        s = e.background,
                        l = void 0 === s ? "light" : s,
                        c = e.classes,
                        d = void 0 === c ? {
                            button: "btn",
                            buttonLarge: "btn-lg",
                            buttonMedium: "btn-md",
                            buttonSmall: "",
                            buttonResponsive: "btn-responsive"
                        } : c,
                        u = e.className,
                        p = e.Component,
                        m = void 0 === p ? "button" : p,
                        y = e.disableRipple,
                        v = void 0 !== y && y,
                        g = e.Icon,
                        f = e.size,
                        h = void 0 === f ? "medium" : f,
                        C = e.type,
                        T = void 0 === C ? "button" : C,
                        b = function(e, o) {
                            var i, r = {};
                            for (var t in e) Object.prototype.hasOwnProperty.call(e, t) && o.indexOf(t) < 0 && (r[t] = e[t]);
                            if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                                for (i = 0, t = Object.getOwnPropertySymbols(e); i < t.length; i++) o.indexOf(t[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, t[i]) && (r[t[i]] = e[t[i]]);
                            return r
                        }(e, ["appearance", "background", "classes", "className", "Component", "disableRipple", "Icon", "size", "type"]),
                        H = (0, a.A)("nds-button--icon-only", u);
                    return t().createElement(n.A, Object.assign({
                        appearance: r,
                        background: l,
                        className: H,
                        classes: d,
                        Component: m,
                        disableRipple: v,
                        size: h,
                        type: T
                    }, b, {
                        ref: o
                    }), g)
                }));
            s.displayName = "IconButton"
        },
        9261: (e, o, i) => {
            "use strict";
            i.d(o, {
                m: () => d
            });
            var r = i(7201),
                t = i(1594),
                a = i.n(t),
                n = i(7635),
                s = i(214),
                l = i(9911),
                c = (0, s.AH)("background:var(--podium-cds-color-bg-primary);width:100%;z-index:1;position:relative;padding-top:var(--podium-cds-size-spacing-l);@media (min-width:", l.f.podiumCdsBreakpointM, '){padding-left:64px;}&:before{content:"";display:block;position:absolute;bottom:calc(100% - 18px);left:0;width:100%;height:36px;}> *{display:inherit;}> * > * + *{margin-top:var(--podium-cds-size-spacing-grid-gutter-l);}@media (min-width:', l.f.podiumCdsBreakpointM, "){> *{display:flex;flex-direction:row-reverse;}> * > * + *{margin-top:0;margin-right:var(--podium-cds-size-spacing-grid-gutter);}}"),
                d = (0, r.A)((function(e) {
                    var o, i = e.classes,
                        r = void 0 === i ? {} : i,
                        t = e.children,
                        s = e.components,
                        l = void 0 === s ? {} : s,
                        c = function(e, o) {
                            var i, r = {};
                            for (var t in e) Object.prototype.hasOwnProperty.call(e, t) && o.indexOf(t) < 0 && (r[t] = e[t]);
                            if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                                for (i = 0, t = Object.getOwnPropertySymbols(e); i < t.length; i++) o.indexOf(t[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, t[i]) && (r[t[i]] = e[t[i]]);
                            return r
                        }(e, ["classes", "children", "components"]),
                        d = null !== (o = l.ModalActionsComp) && void 0 !== o ? o : "div",
                        u = (0, n.A)(r.childrenWrapper, "nds-modal__actions");
                    return a().createElement(d, Object.assign({
                        className: r.wrapper,
                        "data-testid": "modal-actions"
                    }, c), a().createElement("div", {
                        className: u
                    }, t))
                }), {
                    target: "e1savm5v0"
                })(c)
        },
        8554: (e, o, i) => {
            "use strict";
            i.d(o, {
                R: () => V
            });
            var r = i(7201),
                t = i(1594),
                a = i.n(t),
                n = i(9911),
                s = i(214),
                l = i(9715),
                c = i(7635),
                d = i(4867),
                u = i.n(d),
                p = i(5206),
                m = i(7670),
                y = function(e) {
                    var o = e.selector,
                        i = e.children;
                    return (0, p.createPortal)(i, (0, m.W)(o))
                };

            function v(e) {
                return (v = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }
            var g = (0, t.forwardRef)((function(e, o) {
                var i = e.selector,
                    r = void 0 === i ? "#modal-root" : i,
                    t = e.isOpen,
                    n = void 0 !== t && t,
                    s = e.trapFocus,
                    l = void 0 === s || s,
                    c = e.children,
                    d = function(e, o) {
                        var i, r = {};
                        for (var t in e) Object.prototype.hasOwnProperty.call(e, t) && o.indexOf(t) < 0 && (r[t] = e[t]);
                        if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                            for (i = 0, t = Object.getOwnPropertySymbols(e); i < t.length; i++) o.indexOf(t[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, t[i]) && (r[t[i]] = e[t[i]]);
                        return r
                    }(e, ["selector", "isOpen", "trapFocus", "children"]),
                    p = l ? a().createElement(u(), null, a().createElement("div", null, c)) : c;
                return "undefined" === ("undefined" == typeof window ? "undefined" : v(window)) ? p : n ? a().createElement(y, Object.assign({
                    selector: r
                }, d), a().createElement("div", {
                    ref: o,
                    className: "modal-portal-content-wrapper"
                }, p)) : null
            }));
            g.displayName = "ModalPortal";
            var f = i(2287),
                h = function(e) {
                    var o = e.closeModal,
                        i = e.shouldCloseOnBackgroundClick,
                        r = e.shouldCloseOnEsc,
                        n = e.className,
                        s = e.children,
                        l = e.backdropCompProps,
                        c = function(e, o) {
                            var i, r = {};
                            for (var t in e) Object.prototype.hasOwnProperty.call(e, t) && o.indexOf(t) < 0 && (r[t] = e[t]);
                            if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                                for (i = 0, t = Object.getOwnPropertySymbols(e); i < t.length; i++) o.indexOf(t[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, t[i]) && (r[t[i]] = e[t[i]]);
                            return r
                        }(e, ["closeModal", "shouldCloseOnBackgroundClick", "shouldCloseOnEsc", "className", "children", "backdropCompProps"]),
                        d = (0, t.useRef)(null);
                    return (0, t.useEffect)((function() {
                        var e = function(e) {
                            "Escape" === e.key && o && r && o(e)
                        };
                        return (0, f.V)() && window.addEventListener("keydown", e),
                            function() {
                                (0, f.V)() && window.removeEventListener("keydown", e)
                            }
                    }), [r]), a().createElement("div", Object.assign({
                        ref: d,
                        className: n,
                        onClick: function(e) {
                            e.target === d.current && o && i && o(e)
                        },
                        "data-testid": "modal-backdrop"
                    }, l, c), s)
                },
                C = function(e) {
                    var o, i = e.components,
                        r = e.className,
                        t = function(e, o) {
                            var i, r = {};
                            for (var t in e) Object.prototype.hasOwnProperty.call(e, t) && o.indexOf(t) < 0 && (r[t] = e[t]);
                            if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                                for (i = 0, t = Object.getOwnPropertySymbols(e); i < t.length; i++) o.indexOf(t[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, t[i]) && (r[t[i]] = e[t[i]]);
                            return r
                        }(e, ["components", "className"]),
                        n = null !== (o = null == i ? void 0 : i.ModalContainerComp) && void 0 !== o ? o : "section";
                    return a().createElement(n, Object.assign({
                        className: r
                    }, t))
                },
                T = i(9281),
                b = i(9250);
            const H = {},
                A = "undefined" == typeof window ? null : window,
                S = A && void 0 !== A.visualViewport ? A.visualViewport : null,
                N = () => [document.documentElement.clientWidth, document.documentElement.clientHeight];
            var P = (0, t.forwardRef)((function(e, o) {
                var i, r, t, n, s = e.appearance,
                    l = void 0 === s ? "base" : s,
                    d = e["aria-labelledby"],
                    u = e.children,
                    p = e.classes,
                    m = void 0 === p ? {} : p,
                    y = e.className,
                    v = e.closeModal,
                    f = e.isOpen,
                    P = e.role,
                    w = void 0 === P ? "modal" : P,
                    M = e.components,
                    k = void 0 === M ? {} : M,
                    O = e.shouldCloseOnBackgroundClick,
                    E = e.shouldCloseOnEsc,
                    x = e.backdropCompProps,
                    F = e.modalRootCompProps,
                    D = e.modalContainerCompProps,
                    B = e.modalPortalCompProps,
                    L = function(e, o) {
                        var i, r = {};
                        for (var t in e) Object.prototype.hasOwnProperty.call(e, t) && o.indexOf(t) < 0 && (r[t] = e[t]);
                        if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                            for (i = 0, t = Object.getOwnPropertySymbols(e); i < t.length; i++) o.indexOf(t[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, t[i]) && (r[t[i]] = e[t[i]]);
                        return r
                    }(e, ["appearance", "aria-labelledby", "children", "classes", "className", "closeModal", "isOpen", "role", "components", "shouldCloseOnBackgroundClick", "shouldCloseOnEsc", "backdropCompProps", "modalRootCompProps", "modalContainerCompProps", "modalPortalCompProps"]),
                    I = function(e) {
                        void 0 === e && (e = H);
                        const {
                            wait: o,
                            leading: i,
                            initialWidth: r = 0,
                            initialHeight: t = 0
                        } = e, [a, n] = (0, T.d)("undefined" == typeof document ? [r, t] : N, o, i), s = () => n(N);
                        return (0, b.A)(A, "resize", s), (0, b.A)(S, "resize", s), (0, b.A)(A, "orientationchange", s), a
                    }({
                        wait: 250
                    })[1],
                    R = null !== (i = k.BackdropComp) && void 0 !== i ? i : h,
                    G = null !== (r = k.ModalComp) && void 0 !== r ? r : g,
                    j = null !== (t = k.ModalContainerComp) && void 0 !== t ? t : C,
                    _ = null !== (n = k.ModalRootComp) && void 0 !== n ? n : "div";
                return a().createElement(G, Object.assign({
                    className: m.modal,
                    isOpen: f,
                    ref: o
                }, B, L), a().createElement(R, Object.assign({
                    className: m.backdrop,
                    closeModal: v,
                    shouldCloseOnBackgroundClick: O,
                    shouldCloseOnEsc: E
                }, x), a().createElement(_, Object.assign({
                    className: (0, c.A)(y, m.root),
                    role: w,
                    "aria-labelledby": d,
                    style: "fullscreen" === l ? {
                        height: I
                    } : {}
                }, F), a().createElement(C, Object.assign({
                    className: m.backdropContainer,
                    appearance: l,
                    components: {
                        ModalContainerComp: j
                    }
                }, D), u))))
            }));
            P.displayName = "ModalBase";
            var w = i(9017),
                M = function(e) {
                    e.appearance;
                    var o, i = e.className,
                        r = e.classes,
                        t = void 0 === r ? {} : r,
                        n = e.slots,
                        s = void 0 === n ? {} : n,
                        l = e.components,
                        d = (e.closeModal, e.modalCloseAriaLabel, e.id),
                        u = e.title,
                        p = e.modalHeaderSlotProps,
                        m = e.Icon,
                        y = function(e, o) {
                            var i, r = {};
                            for (var t in e) Object.prototype.hasOwnProperty.call(e, t) && o.indexOf(t) < 0 && (r[t] = e[t]);
                            if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                                for (i = 0, t = Object.getOwnPropertySymbols(e); i < t.length; i++) o.indexOf(t[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, t[i]) && (r[t[i]] = e[t[i]]);
                            return r
                        }(e, ["appearance", "className", "classes", "slots", "components", "closeModal", "modalCloseAriaLabel", "id", "title", "modalHeaderSlotProps", "Icon"]),
                        v = l.IconWrapperComp || "span",
                        g = null !== (o = s.HeaderTitleSlot) && void 0 !== o ? o : null;
                    return a().createElement("header", Object.assign({
                        className: i
                    }, p, y), m && a().createElement(v, {
                        className: (0, c.A)("icon-wrapper", t.iconWrapper),
                        "data-testid": "modal-icon"
                    }, a().createElement(m, {
                        className: t.icon
                    })), a().createElement(w.E, {
                        className: (0, c.A)("title-heading", t.title),
                        id: d,
                        appearance: "title1",
                        "data-testid": "modal-header-title"
                    }, g && g, !g && u))
                },
                k = i(5679),
                O = function(e) {
                    var o = e.modalCloseAriaLabel,
                        i = void 0 === o ? "Close Modal" : o,
                        r = e.onClick,
                        t = e.className,
                        n = e.modalCloseButtonCompProps,
                        s = function(e, o) {
                            var i, r = {};
                            for (var t in e) Object.prototype.hasOwnProperty.call(e, t) && o.indexOf(t) < 0 && (r[t] = e[t]);
                            if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                                for (i = 0, t = Object.getOwnPropertySymbols(e); i < t.length; i++) o.indexOf(t[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, t[i]) && (r[t[i]] = e[t[i]]);
                            return r
                        }(e, ["modalCloseAriaLabel", "onClick", "className", "modalCloseButtonCompProps"]);
                    return a().createElement("button", Object.assign({
                        className: (0, c.A)(t, "modal-ui-close"),
                        "aria-label": i,
                        onClick: r,
                        type: "button"
                    }, n, s), a().createElement(k.b, {
                        "aria-hidden": !0
                    }))
                };

            function E(e) {
                return (E = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }
            var x = {
                    name: "15dbg69",
                    styles: ".nds-no-scroll{overflow:hidden;}.nds-override-urlbar{position:fixed;overflow-y:scroll;height:100vh;-webkit-overflow-scrolling:touch;}"
                },
                F = (0, t.forwardRef)((function(e, o) {
                    var i, r, n, d, u, p, m = e.appearance,
                        y = void 0 === m ? "base" : m,
                        v = (e["aria-labelledby"], e.transitionDuration),
                        g = void 0 === v ? "250" : v,
                        h = e.children,
                        T = e.classes,
                        b = void 0 === T ? {} : T,
                        H = e.className,
                        A = e.components,
                        S = void 0 === A ? {} : A,
                        N = e.slots,
                        w = void 0 === N ? {} : N,
                        k = e.closeModal,
                        F = e.modalCloseAriaLabel,
                        D = e.isOpen,
                        B = e.role,
                        L = void 0 === B ? "modal" : B,
                        I = e.shouldCloseOnBackgroundClick,
                        R = void 0 === I || I,
                        G = e.shouldCloseOnEsc,
                        j = void 0 === G || G,
                        _ = e.title,
                        z = e.titleId,
                        K = e.backdropCompProps,
                        U = e.modalRootCompProps,
                        W = e.modalCloseButtonCompProps,
                        J = e.modalContainerCompProps,
                        Y = e.modalHeaderCompProps,
                        V = e.modalContentCompProps,
                        X = e.modalMainCompProps,
                        q = e.Icon,
                        $ = e.modalPortalCompProps,
                        Q = function(e, o) {
                            var i, r = {};
                            for (var t in e) Object.prototype.hasOwnProperty.call(e, t) && o.indexOf(t) < 0 && (r[t] = e[t]);
                            if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                                for (i = 0, t = Object.getOwnPropertySymbols(e); i < t.length; i++) o.indexOf(t[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, t[i]) && (r[t[i]] = e[t[i]]);
                            return r
                        }(e, ["appearance", "aria-labelledby", "transitionDuration", "children", "classes", "className", "components", "slots", "closeModal", "modalCloseAriaLabel", "isOpen", "role", "shouldCloseOnBackgroundClick", "shouldCloseOnEsc", "title", "titleId", "backdropCompProps", "modalRootCompProps", "modalCloseButtonCompProps", "modalContainerCompProps", "modalHeaderCompProps", "modalContentCompProps", "modalMainCompProps", "Icon", "modalPortalCompProps"]),
                        Z = null != z ? z : null == _ ? void 0 : _.toLowerCase().replace(/\W/g, "-"),
                        ee = (0, t.useRef)(),
                        oe = w.HeaderTitleSlot,
                        ie = w.FooterSlot,
                        re = null !== (i = S.ModalContainerComp) && void 0 !== i ? i : C,
                        te = null !== (r = S.ModalContentComp) && void 0 !== r ? r : "div",
                        ae = null !== (n = S.ModalMainComp) && void 0 !== n ? n : "div",
                        ne = S.IconWrapperComp,
                        se = S.ModalRootComp,
                        le = null !== (d = S.ModalCloseButtonComp) && void 0 !== d ? d : O,
                        ce = null !== (u = S.ModalHeaderComp) && void 0 !== u ? u : M,
                        de = null !== (p = S.ModalBaseComp) && void 0 !== p ? p : P,
                        ue = S.BackdropComp,
                        pe = S.ModalComp;
                    return (0, t.useEffect)((function() {
                        (0, f.V)() && D && (ee.current = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0)
                    }), [D]), (0, t.useEffect)((function() {
                        if ((0, f.V)()) {
                            var e = document.querySelector("body");
                            return D && (setTimeout((function() {
                                    e.classList.add("nds-no-scroll")
                                }), parseFloat(g)), "fullscreen" === y && (setTimeout((function() {
                                    window.scrollTo(0, 0), e.classList.add("nds-no-scroll")
                                }), parseFloat(g)), e.classList.add("nds-override-urlbar"))),
                                function() {
                                    e.classList.remove("nds-no-scroll", "nds-override-urlbar"), D && ee.current && (window.scrollTo(0, ee.current), ee.current = null)
                                }
                        }
                    }), [y, D, g]), a().createElement(a().Fragment, null, a().createElement(s.mL, {
                        styles: x
                    }), a().createElement(l.A, {
                        appear: D,
                        in: D,
                        timeout: parseFloat(g),
                        classNames: "modal",
                        mountOnEnter: !0,
                        unmountOnExit: !0
                    }, a().createElement(de, Object.assign({
                        className: (0, c.A)(H, y, b.base),
                        appearance: y,
                        isOpen: !0,
                        role: L,
                        "aria-labelledby": "modal-".concat(Z),
                        classes: {
                            backdrop: b.backdrop,
                            backdropContainer: b.backdropContainer,
                            modal: b.modal,
                            root: b.root
                        },
                        components: {
                            ModalContainerComp: re,
                            ModalRootComp: se,
                            ModalComp: pe,
                            BackdropComp: ue
                        },
                        closeModal: k,
                        shouldCloseOnBackgroundClick: R,
                        shouldCloseOnEsc: j,
                        modalPortalCompProps: $,
                        backdropCompProps: K,
                        modalRootCompProps: U,
                        modalContainerCompProps: J,
                        ref: o
                    }, Q), "function" === E(k) && "fullscreen" === y && a().createElement("div", {
                        className: "close-btn-container"
                    }, a().createElement(le, {
                        modalappearance: y,
                        className: b.closeButton,
                        modalCloseAriaLabel: F,
                        onClick: k,
                        "data-testid": "modal-close-button",
                        modalCloseButtonCompProps: W
                    })), a().createElement(ae, Object.assign({
                        className: b.main,
                        appearance: y
                    }, X), "function" === E(k) && "fullscreen" !== y && a().createElement("div", {
                        className: "close-btn-container"
                    }, a().createElement(le, {
                        modalappearance: y,
                        className: b.closeButton,
                        modalCloseAriaLabel: F,
                        onClick: k,
                        "data-testid": "modal-close-button",
                        modalCloseButtonCompProps: W
                    })), a().createElement("div", {
                        className: "modal-header-container"
                    }, a().createElement(ce, Object.assign({
                        appearance: y,
                        closeModal: k,
                        components: {
                            IconWrapperComp: ne
                        },
                        className: b.header,
                        classes: {
                            icon: b.icon,
                            iconWrapper: b.iconWrapper,
                            title: (0, c.A)(b.title)
                        },
                        slots: {
                            HeaderTitleSlot: oe
                        },
                        id: "modal-".concat(Z),
                        title: _,
                        Icon: q
                    }, Y))), a().createElement(te, Object.assign({
                        className: b.content
                    }, V), h)), ie ? a().createElement(a().Fragment, null, ie) : null)))
                }));
            F.displayName = "Modal";
            var D = (0, r.A)(h, {
                    target: "e1mocx0m0"
                })({
                    name: "lulp55",
                    styles: "position:fixed;top:0;left:0;right:0;bottom:0;height:100%;width:100%;background-color:var(--podium-cds-color-scrim-100);z-index:var(--podium-cds-elevation-100);.modal-enter &,.modal-appear &{opacity:0;}.modal-enter-active &,.modal-appear-active &{opacity:1;transition:opacity var(--podium-cds-transition-duration-normal);}.modal-exit &{opacity:1;}.modal-exit-active &{opacity:0;transition:opacity var(--podium-cds-transition-duration-normal);}"
                }),
                B = (0, r.A)((function(e) {
                    return a().createElement(C, Object.assign({}, e))
                }), {
                    target: "e1k4uanx0"
                })((function(e) {
                    var o = e.appearance;
                    return (0, s.AH)((0, s.AH)("width:100%;max-height:100vh;height:100%;padding:40px var(--podium-cds-size-spacing-l) var(--podium-cds-size-spacing-l) var(--podium-cds-size-spacing-l);overflow:auto;-webkit-overflow-scrolling:touch;::-webkit-scrollbar{display:none;}scrollbar-width:none;-ms-overflow-style:none;@media (min-width:", n.f.podiumCdsBreakpointM, "){height:100%;padding:calc(var(--podium-cds-size-spacing-xl) + var(--podium-cds-size-spacing-m));}"), ";", function() {
                        if ("fullscreen" !== o) return (0, s.AH)("overflow:auto;-webkit-overflow-scrolling:touch;max-height:calc(100vh - 60px);@media (min-width:", n.f.podiumCdsBreakpointM, '){max-height:calc(100vh - 120px);}display:flex;flex-direction:column;&:before{content:"";display:block;position:absolute;top:0;left:0;width:100%;height:36px;z-index:1;}')
                    }(), ";", function() {
                        if ("fullscreen" === o) return (0, s.AH)("width:100%;margin-left:auto;margin-right:auto;@media (min-width:", n.f.podiumCdsBreakpointM, "}){width:66.66666666666666%;}")
                    }(), ";")
                })),
                L = {
                    BackdropComp: D,
                    ModalontainerComp: B
                },
                I = (0, t.forwardRef)((function(e, o) {
                    var i = e.components,
                        r = function(e, o) {
                            var i, r = {};
                            for (var t in e) Object.prototype.hasOwnProperty.call(e, t) && o.indexOf(t) < 0 && (r[t] = e[t]);
                            if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                                for (i = 0, t = Object.getOwnPropertySymbols(e); i < t.length; i++) o.indexOf(t[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, t[i]) && (r[t[i]] = e[t[i]]);
                            return r
                        }(e, ["components"]);
                    return a().createElement(P, Object.assign({
                        components: Object.assign(Object.assign({}, L), i)
                    }, r, {
                        ref: o
                    }))
                }));
            I.displayName = "ModalBaseStyledComps";
            var R = (0, r.A)(I, {
                    target: "ejfruub0"
                })((function(e) {
                    var o = e.appearance;
                    return (0, s.AH)((0, s.AH)("position:absolute;left:0;width:100%;background:var(--podium-cds-color-bg-primary);bottom:0;transform:translate3d(0,0,0);overflow:hidden;@media (min-width:", n.f.podiumCdsBreakpointM, "){bottom:auto;top:50%;left:50%;height:auto;transform:translate3d(-50%,-50%,0);}"), ";", "baseMedium" === o ? (0, s.AH)("max-height:calc(100% - 60px);border-radius:var(--podium-cds-size-border-radius-xl) var(--podium-cds-size-border-radius-xl) 0 0;@media (min-width:", n.f.podiumCdsBreakpointM, "){border-radius:var(--podium-cds-size-border-radius-xl);max-width:762px;max-height:calc(100% - 120px);}") : "fullscreen" !== o ? (0, s.AH)("max-height:calc(100% - 60px);border-radius:var(--podium-cds-size-border-radius-xl) var(--podium-cds-size-border-radius-xl) 0 0;@media (min-width:", n.f.podiumCdsBreakpointM, "){border-radius:var(--podium-cds-size-border-radius-xl);max-width:536px;max-height:calc(100% - 120px);}") : void 0, ";", (0, s.AH)(".modal-enter &,.modal-appear &{transform:translate3d(0,100%,0);}.modal-enter-active &,.modal-appear-active &{transform:translate3d(0,0,0);transition:transform var(--podium-cds-transition-duration-normal) var(--podium-cds-transition-timing-function-ease);}.modal-exit &{transform:translate3d(0,0,0);}.modal-exit-active &{transform:translate3d(0,100%,0);transition:transform var(--podium-cds-transition-duration-normal) var(--podium-cds-transition-timing-function-ease);}@media (min-width:", n.f.podiumCdsBreakpointM, "){.modal-enter &,.modal-appear &{transform:translate3d(-50%,-45%,0);}.modal-enter-active &,.modal-appear-active &{transform:translate3d(-50%,-50%,0);transition:transform var(--podium-cds-transition-duration-normal) var(--podium-cds-transition-timing-function-ease);}.modal-exit &{transform:translate3d(-50%,-50%,0);}.modal-exit-active &{transform:translate3d(-50%,-45%,0);transition:transform var(--podium-cds-transition-duration-normal) var(--podium-cds-transition-timing-function-ease);}}"), ";")
                })),
                G = (0, s.AH)("width:100%;padding-bottom:calc(var(--podium-cds-size-spacing-l) + var(--podium-cds-size-spacing-xs));padding-right:48px;padding-top:var(--podium-cds-size-spacing-xs);font:var(--podium-cds-typography-320-to-1919-title3);@media (min-width:", n.f.podiumCdsBreakpointXl, "){*{font:var(--podium-cds-typography-1920-plus-title3);}}.icon-wrapper{font-size:var(--podium-cds-typography-body-2-size);}"),
                j = (0, r.A)((function(e) {
                    return a().createElement(M, Object.assign({}, e))
                }), {
                    target: "eijldiu0"
                })(G),
                _ = (0, s.AH)("font:var(--podium-cds-typography-body1);width:100%;@media (max-width:", n.f.podiumCdsBreakpointM, "){padding-bottom:var(--podium-cds-size-spacing-s);}"),
                z = (0, r.A)("div", {
                    target: "exp5h810"
                })(_),
                K = (0, r.A)("div", {
                    target: "eqelnlg0"
                })((function(e) {
                    var o = e.appearance;
                    return (0, s.AH)("overflow:scroll;@media (max-width:", n.f.podiumCdsBreakpointM, "){max-height:", "fullscreen" === o ? null : "100vh", ";-webkit-overflow-scrolling:touch;::-webkit-scrollbar{display:none;}scrollbar-width:none;-ms-overflow-style:none;")
                })),
                U = i(7511),
                W = i(4927),
                J = {
                    ModalContentComp: z,
                    ModalMainComp: K,
                    ModalContainerComp: B,
                    ModalCloseButtonComp: function(e) {
                        var o = e.modalCloseAriaLabel,
                            i = void 0 === o ? "Close Modal" : o,
                            r = e.onClick,
                            t = e.className,
                            n = e.modalCloseButtonCompProps,
                            s = function(e, o) {
                                var i, r = {};
                                for (var t in e) Object.prototype.hasOwnProperty.call(e, t) && o.indexOf(t) < 0 && (r[t] = e[t]);
                                if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                                    for (i = 0, t = Object.getOwnPropertySymbols(e); i < t.length; i++) o.indexOf(t[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, t[i]) && (r[t[i]] = e[t[i]]);
                                return r
                            }(e, ["modalCloseAriaLabel", "onClick", "className", "modalCloseButtonCompProps"]);
                        return a().createElement(U.K, Object.assign({
                            className: (0, c.A)("modal-ui-close", t),
                            ariaLabel: i,
                            appearance: "secondary",
                            size: "small",
                            onClick: r,
                            type: "button",
                            Icon: a().createElement(k.b, {
                                "aria-hidden": !0
                            })
                        }, n, s))
                    },
                    ModalHeaderComp: j,
                    ModalBaseComp: R,
                    BackdropComp: D
                },
                Y = (0, t.forwardRef)((function(e, o) {
                    var i = e.components,
                        r = function(e, o) {
                            var i, r = {};
                            for (var t in e) Object.prototype.hasOwnProperty.call(e, t) && o.indexOf(t) < 0 && (r[t] = e[t]);
                            if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                                for (i = 0, t = Object.getOwnPropertySymbols(e); i < t.length; i++) o.indexOf(t[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, t[i]) && (r[t[i]] = e[t[i]]);
                            return r
                        }(e, ["components"]);
                    return a().createElement(F, Object.assign({
                        components: Object.assign(Object.assign({}, J), i)
                    }, r, {
                        ref: o
                    }))
                }));
            Y.displayName = "ModalStyledComps";
            var V = (0, r.A)(Y, {
                target: "e1i5x44y0"
            })(".close-btn-container{position:sticky;top:var(--podium-cds-size-spacing-xs);right:var(--podium-cds-size-spacing-xs);z-index:var(--podium-cds-elevation-100);float:right;@media (max-width:", n.f.podiumCdsBreakpointM, "){top:0;}", W.pH, "{position:absolute;top:52px;right:64px;@media (max-width:", n.f.podiumCdsBreakpointM, "){top:44px;right:28px;margin:0;}}", W.wq, "{float:none;", W.eN, "{right:var(--podium-cds-size-spacing-s);top:var(--podium-cds-size-spacing-s);button{position:absolute;right:var(--podium-cds-size-spacing-s);top:0px;}}}}.modal-header-container{display:inline-block;width:80%;}");
            V.displayName = "ModalStyled"
        },
        7670: (e, o, i) => {
            "use strict";
            i.d(o, {
                W: () => t
            });
            var r = i(1594),
                t = function(e) {
                    var o = (0, r.useRef)(null);
                    return (0, r.useEffect)((function() {
                        var i = document.querySelector(e);
                        return i || console.warn('Could not find modal root "'.concat(e, '".')), i && i.appendChild(o.current),
                            function() {
                                o.current.parentNode && o.current.parentNode.removeChild(o.current)
                            }
                    }), []), o.current || (o.current = document.createElement("div")), o.current
                }
        },
        6589: (e, o, i) => {
            "use strict";
            i.d(o, {
                Wj: () => n
            });
            var r = i(1594),
                t = i.n(r);
            if (818 != i.j) var a = i(7548);
            var n = function(e) {
                var o = e.children,
                    i = e.lang,
                    n = void 0 === i ? "en-us" : i,
                    s = e.themeExtension,
                    l = function(e, o) {
                        var i, r = {};
                        for (var t in e) Object.prototype.hasOwnProperty.call(e, t) && o.indexOf(t) < 0 && (r[t] = e[t]);
                        if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                            for (i = 0, t = Object.getOwnPropertySymbols(e); i < t.length; i++) o.indexOf(t[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, t[i]) && (r[t[i]] = e[t[i]]);
                        return r
                    }(e, ["children", "lang", "themeExtension"]);
                return (0, r.useEffect)((function() {
                    window.document && function(e) {
                        var o, i;
                        e && ((i = null !== (o = document.getElementById("custom-podium-css-extension")) && void 0 !== o ? o : document.createElement("style")).setAttribute("id", "custom-podium-css-extension"), i.innerHTML = "\n    :root {\n      ".concat(Object.keys(e).map((function(o) {
                            var i = o.replace(/[A-Z]/g, (function(e) {
                                return "-".concat(e.toLowerCase())
                            })).replace(/[0-9]\d+/g, (function(e) {
                                return "-".concat(e)
                            }));
                            return "--".concat(i, ": ").concat(e[o], ";\n")
                        })).join(""), "\n    }\n  "), document.head.appendChild(i))
                    }(s)
                }), [s]), t().createElement(a.K, Object.assign({
                    lang: n,
                    themeExtension: s
                }, l), o)
            }
        },
        7548: (e, o, i) => {
            "use strict";
            i.d(o, {
                K: () => n
            });
            var r = i(1594),
                t = i.n(r),
                a = (0, r.createContext)({}),
                n = function(e) {
                    var o = e.children,
                        i = e.lang,
                        n = (e.themeExtension, function(e, o) {
                            var i, r = {};
                            for (var t in e) Object.prototype.hasOwnProperty.call(e, t) && o.indexOf(t) < 0 && (r[t] = e[t]);
                            if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                                for (i = 0, t = Object.getOwnPropertySymbols(e); i < t.length; i++) o.indexOf(t[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, t[i]) && (r[t[i]] = e[t[i]]);
                            return r
                        }(e, ["children", "lang", "themeExtension"])),
                        s = (0, r.useMemo)((function() {
                            return Object.assign({
                                language: i
                            }, n)
                        }), [i, n]);
                    return t().createElement(a.Provider, {
                        value: s
                    }, o)
                }
        },
        4098: (e, o, i) => {
            "use strict";

            function r(e) {
                return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }
            i.d(o, {
                Z: () => t
            });
            var t = function(e) {
                return "string" !== r(e) ? e : e[0] ? e[0].toUpperCase() + e.slice(1) : e
            }
        },
        9017: (e, o, i) => {
            "use strict";
            i.d(o, {
                E: () => c
            });
            var r = i(1594),
                t = i.n(r),
                a = i(7635);

            function n(e) {
                return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function s(e, o, i) {
                var r;
                return r = function(e) {
                    if ("object" != n(e) || !e) return e;
                    var o, i = e[Symbol.toPrimitive];
                    if (void 0 !== i) {
                        if ("object" != n(o = i.call(e, "string"))) return o;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return String(e)
                }(o), (o = "symbol" == n(r) ? r : String(r)) in e ? Object.defineProperty(e, o, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[o] = i, e
            }
            var l = {
                    body1: "p",
                    body2: "p",
                    body3: "p",
                    body4: "p",
                    body1Strong: "p",
                    body2Strong: "p",
                    body3Strong: "p",
                    body4Strong: "p",
                    body1Link: "a",
                    body2Link: "a",
                    body3Link: "a",
                    body4Link: "a",
                    legal: "p",
                    editorialBody1: "p",
                    editorialBody1Strong: "p",
                    oversize1: "p",
                    oversize2: "p",
                    oversize3: "p",
                    display1: "h1",
                    display2: "h2",
                    display3: "h3",
                    display4: "h4",
                    title1: "h1",
                    title2: "h2",
                    title3: "h3",
                    title4: "h4",
                    conversation1: "p",
                    conversation2: "p",
                    conversation3: "p",
                    conversation4: "p"
                },
                c = (0, r.forwardRef)((function(e, o) {
                    var i = e.Component,
                        r = e.align,
                        n = void 0 === r ? "inherit" : r,
                        c = e.appearance,
                        d = void 0 === c ? "body1" : c,
                        u = e.bold,
                        p = void 0 !== u && u,
                        m = e.className,
                        y = e.color,
                        v = void 0 === y ? "primary" : y,
                        g = e.display,
                        f = void 0 === g ? "initial" : g,
                        h = e.strikethrough,
                        C = void 0 !== h && h,
                        T = e.weight,
                        b = void 0 === T ? "regular" : T,
                        H = e.uppercase,
                        A = function(e, o) {
                            var i, r = {};
                            for (var t in e) Object.prototype.hasOwnProperty.call(e, t) && o.indexOf(t) < 0 && (r[t] = e[t]);
                            if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                                for (i = 0, t = Object.getOwnPropertySymbols(e); i < t.length; i++) o.indexOf(t[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, t[i]) && (r[t[i]] = e[t[i]]);
                            return r
                        }(e, ["Component", "align", "appearance", "bold", "className", "color", "display", "strikethrough", "weight", "uppercase"]),
                        S = (0, a.A)("nds-text", m, s(s(s(s(s(s(s(s({}, "text-align-".concat(n), "inherit" !== n), "appearance-".concat(d), !0), "bold", p), "color-".concat(v), !0), "display-".concat(f), "initial" !== f), "weight-".concat(b), !0), "strikethrough", C), "uppercase", H)),
                        N = i || l[d];
                    return N || (N = "p"), t().createElement(N, Object.assign({
                        className: S
                    }, A, {
                        ref: o
                    }))
                }))
        },
        6980: (e, o, i) => {
            "use strict";
            i.d(o, {
                z: () => p
            });
            var r = i(7201),
                t = i(9017),
                a = i(214),
                n = i(4927),
                s = {
                    primary: "var(--podium-cds-color-text-primary)",
                    primaryInverse: "var(--podium-cds-color-text-primary-inverse)",
                    secondary: "var(--podium-cds-color-text-secondary)",
                    secondaryInverse: "var(--podium-cds-color-text-secondary-inverse)",
                    disabled: "var(--podium-cds-color-text-disabled)",
                    error: "var(--podium-cds-color-text-critical)",
                    success: "var(--podium-cds-color-text-success)"
                },
                l = {
                    body1: "--podium-cds-typography-body1",
                    body2: "--podium-cds-typography-body2",
                    body3: "--podium-cds-typography-body3",
                    body4: "--podium-cds-typography-body4",
                    body1Strong: "--podium-cds-typography-body1-strong",
                    body2Strong: "--podium-cds-typography-body2-strong",
                    body3Strong: "--podium-cds-typography-body3-strong",
                    body4Strong: "--podium-cds-typography-body4-strong",
                    legal: "--podium-cds-typography-legal"
                },
                c = function(e, o) {
                    return e && !o ? "@media (min-width: ".concat(e, ")") : !e && o ? "@media (max-width: ".concat(o, ")") : "@media (min-width: ".concat(e, ") and (max-width: ").concat(o, ")")
                },
                d = {
                    name: "f3vz0n",
                    styles: "font-weight:500"
                },
                u = {
                    name: "1vg6q84",
                    styles: "font-weight:700;"
                },
                p = (0, r.A)(t.E, {
                    target: "e1yhcai00"
                })((function(e) {
                    var o, i = e.align,
                        r = e.appearance,
                        t = e.bold,
                        p = e.color,
                        m = e.display,
                        y = e.strikethrough,
                        v = e.weight,
                        g = e.uppercase;
                    return (0, a.AH)(function(e) {
                        var o, i;
                        if (e) {
                            if ("body" === e.substr(0, 4) && !e.includes("Link") || "legal" === e) return "font: var(".concat(l[e], ");");
                            if (e.includes("Link")) return o = e.substr(0, 5), "font: var(".concat(l[o], "); text-decoration: underline; text-underline-offset: 1px;");
                            switch (!0) {
                                case e.includes("display"):
                                    return "\n        font: var(--podium-cds-typography-960-to-1919-".concat(e, ");\n        ").concat(c(null, "959px"), "{\n          font: var(--podium-cds-typography-320-to-959-").concat(e, ");\n        }\n        ").concat(c("1920px"), "{\n          font: var(--podium-cds-typography-1920-plus-").concat(e, ");\n        }\n      ");
                                case e.includes("oversize"):
                                    return "\n        font: var(--podium-cds-typography-320-to-959-".concat(e, ");\n        ").concat(c("960px", "1439px"), "{\n          font: var(--podium-cds-typography-960-to-1439-").concat(e, ");\n        }\n        ").concat(c("1440px", "1919px"), "{\n          font: var(--podium-cds-typography-1440-to-1919-").concat(e, ");\n        }\n        ").concat(c("1920px"), "{\n          font: var(--podium-cds-typography-1920-plus-").concat(e, ");\n        }\n      ");
                                case e.includes("conversation"):
                                    return "\n        font: var(--podium-cds-typography-320-to-959-".concat(e, ");\n        ").concat(c("960px", "1919px"), "{\n          font: var(--podium-cds-typography-960-to-1919-").concat(e, ");\n        }\n        ").concat(c("1920px"), "{\n          font: var(--podium-cds-typography-1920-plus-").concat(e, ");\n        }\n      ");
                                case e.includes("title"):
                                    return "\n          font: var(--podium-cds-typography-320-to-1919-".concat(e, ");\n          ").concat(c("1920px"), "{\n            font: var(--podium-cds-typography-1920-plus-").concat(e, ");\n          }\n        ");
                                case e.includes("editorial"):
                                    return i = e.replace("Body1", "-body1").replace("Strong", "-strong"), "\n          font: var(--podium-cds-typography-320-to-959-".concat(i, ");\n          ").concat(c("960px"), "{\n            font: var(--podium-cds-typography-960-plus-").concat(i, ");\n          }\n        ");
                                default:
                                    return ""
                            }
                        }
                    }(r), " color:", ((o = p) ? s[o] : null) || o, ";", function(e) {
                        return (0, a.AH)("text-align:", e, ";", n.DV, "{text-align:", function(e) {
                            return "end" === e ? "right" : "center" === e ? "center" : "left"
                        }(e), ';[dir="rtl"] &{text-align:', function(e) {
                            return "end" === e ? "left" : "center" === e ? "center" : "right"
                        }(e), ";}}")
                    }(i), ";", function(e) {
                        if (null != e) return (0, a.AH)("text-transform:", !1 === e ? "none" : "uppercase", ";")
                    }(g), ";", function(e, o) {
                        return "medium" === e ? d : "bold" === e || !0 === o ? u : (0, a.AH)()
                    }(v, t), " ", y && "text-decoration: line-through;", " ", "initial" !== m && "display: ".concat(m, ";"))
                }))
        },
        1558: (e, o, i) => {
            "use strict";
            if (i.d(o, {
                    d: () => a
                }), 818 != i.j) var r = i(9911);
            if (818 != i.j) var t = i(4098);
            var a = function(e, o) {
                if (!o) return "";
                var i = r.f["podiumCdsBreakpoint".concat((0, t.Z)(o))];
                if (!i) return "";
                var a = parseInt(i, 10),
                    n = {
                        lt: a - 1,
                        lte: a,
                        gte: a,
                        gt: a + 1
                    },
                    s = {
                        lt: "max-width",
                        lte: "max-width",
                        gte: "min-width",
                        gt: "min-width"
                    };
                return s[e] && n[e] ? "@media (".concat(String(s[e]), ": ").concat(String(n[e]), "px)") : ""
            }
        },
        7070: (e, o, i) => {
            "use strict";
            i.d(o, {
                N: () => l
            });
            var r = i(1594);
            if (818 != i.j) var t = i(2287);

            function a(e, o) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, o) {
                    var i, r, t, a, n, s, l, c = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != c) {
                        n = [], s = !0, l = !1;
                        try {
                            if (t = (c = c.call(e)).next, 0 === o) {
                                if (Object(c) !== c) return;
                                s = !1
                            } else
                                for (; !(s = (i = t.call(c)).done) && (n.push(i.value), n.length !== o); s = !0);
                        } catch (e) {
                            l = !0, r = e
                        } finally {
                            try {
                                if (!s && null != c.return && (a = c.return(), Object(a) !== a)) return
                            } finally {
                                if (l) throw r
                            }
                        }
                        return n
                    }
                }(e, o) || function(e, o) {
                    if (e) {
                        if ("string" == typeof e) return n(e, o);
                        var i = Object.prototype.toString.call(e).slice(8, -1);
                        return "Object" === i && e.constructor && (i = e.constructor.name), "Map" === i || "Set" === i ? Array.from(e) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? n(e, o) : void 0
                    }
                }(e, o) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function n(e, o) {
                var i, r;
                for ((null == o || o > e.length) && (o = e.length), i = 0, r = new Array(o); i < o; i++) r[i] = e[i];
                return r
            }

            function s(e) {
                return (s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }
            var l = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                    o = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).defaultMatch,
                    i = void 0 !== o && o,
                    n = !(!(0, t.V)() || !window.matchMedia),
                    l = (0, r.useMemo)((function() {
                        return n ? window.matchMedia("string" === s(e) ? e.replace("@media", "").trim() : "") : {
                            matches: i
                        }
                    }), [i, n, e]),
                    c = a((0, r.useState)(l.matches), 2),
                    d = c[0],
                    u = c[1];
                return (0, r.useEffect)((function() {
                    var e;
                    if (n) return e = function(e) {
                            u(e.matches)
                        }, u(l.matches), l.addListener(e),
                        function() {
                            return l.removeListener(e)
                        }
                }), [l, n]), d
            }
        },
        2287: (e, o, i) => {
            "use strict";

            function r(e) {
                return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }
            i.d(o, {
                V: () => t
            });
            var t = function() {
                return "undefined" !== ("undefined" == typeof window ? "undefined" : r(window))
            }
        },
        7201: (e, o, i) => {
            "use strict";
            i.d(o, {
                A: () => v
            });
            var r = i(1979),
                t = i(1594),
                a = i(8590),
                n = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/;
            const s = (0, a.A)((function(e) {
                return n.test(e) || 111 === e.charCodeAt(0) && 110 === e.charCodeAt(1) && e.charCodeAt(2) < 91
            }));
            var l = i(214),
                c = i(2264),
                d = i(6283),
                u = s,
                p = function(e) {
                    return "theme" !== e && "innerRef" !== e
                },
                m = function(e) {
                    return "string" == typeof e && e.charCodeAt(0) > 96 ? u : p
                };

            function y(e, o) {
                var i = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    o && (r = r.filter((function(o) {
                        return Object.getOwnPropertyDescriptor(e, o).enumerable
                    }))), i.push.apply(i, r)
                }
                return i
            }
            const v = function e(o, i) {
                var a, n, s;
                void 0 !== i && (a = i.label, s = i.target, n = o.__emotion_forwardProp && i.shouldForwardProp ? function(e) {
                    return o.__emotion_forwardProp(e) && i.shouldForwardProp(e)
                } : i.shouldForwardProp);
                var u = o.__emotion_real === o,
                    p = u && o.__emotion_base || o;
                "function" != typeof n && u && (n = o.__emotion_forwardProp);
                var v = n || m(p),
                    g = !v("as");
                return function() {
                    var f = arguments,
                        h = u && void 0 !== o.__emotion_styles ? o.__emotion_styles.slice(0) : [];
                    if (void 0 !== a && h.push("label:" + a + ";"), null == f[0] || void 0 === f[0].raw) h.push.apply(h, f);
                    else {
                        h.push(f[0][0]);
                        for (var C = f.length, T = 1; T < C; T++) h.push(f[T], f[0][T])
                    }
                    var b = (0, l.ic)((function(e, o, i) {
                        return (0, t.createElement)(l.Dx.Consumer, null, (function(r) {
                            var a = g && e.as || p,
                                l = "",
                                u = [],
                                y = e;
                            if (null == e.theme) {
                                for (var f in y = {}, e) y[f] = e[f];
                                y.theme = r
                            }
                            "string" == typeof e.className ? l = (0, c.R)(o.registered, u, e.className) : null != e.className && (l = e.className + " ");
                            var C = (0, d.J)(h.concat(u), o.registered, y);
                            (0, c.s)(o, C, "string" == typeof a), l += o.key + "-" + C.name, void 0 !== s && (l += " " + s);
                            var T = g && void 0 === n ? m(a) : v,
                                b = {};
                            for (var H in e) g && "as" === H || T(H) && (b[H] = e[H]);
                            return b.className = l, b.ref = i || e.innerRef, (0, t.createElement)(a, b)
                        }))
                    }));
                    return b.displayName = void 0 !== a ? a : "Styled(" + ("string" == typeof p ? p : p.displayName || p.name || "Component") + ")", b.defaultProps = o.defaultProps, b.__emotion_real = b, b.__emotion_base = p, b.__emotion_styles = h, b.__emotion_forwardProp = n, Object.defineProperty(b, "toString", {
                        value: function() {
                            return "." + s
                        }
                    }), b.withComponent = function(o, t) {
                        return e(o, void 0 !== t ? function(e) {
                            for (var o = 1; o < arguments.length; o++) {
                                var i = null != arguments[o] ? arguments[o] : {};
                                o % 2 ? y(i, !0).forEach((function(o) {
                                    (0, r.A)(e, o, i[o])
                                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : y(i).forEach((function(o) {
                                    Object.defineProperty(e, o, Object.getOwnPropertyDescriptor(i, o))
                                }))
                            }
                            return e
                        }({}, i || {}, {}, t) : i).apply(void 0, h)
                    }, b
                }
            }
        },
        9911: (e, o, i) => {
            "use strict";
            i.d(o, {
                f: () => r
            });
            const r = {
                podiumCdsBreakpointXs: "320px",
                podiumCdsBreakpointS: "600px",
                podiumCdsBreakpointM: "960px",
                podiumCdsBreakpointL: "1440px",
                podiumCdsBreakpointXl: "1920px"
            }
        },
        7635: (e, o, i) => {
            "use strict";

            function r(e) {
                var o, i, t = "";
                if ("string" == typeof e || "number" == typeof e) t += e;
                else if ("object" == typeof e)
                    if (Array.isArray(e))
                        for (o = 0; o < e.length; o++) e[o] && (i = r(e[o])) && (t && (t += " "), t += i);
                    else
                        for (o in e) e[o] && (t && (t += " "), t += o);
                return t
            }
            i.d(o, {
                A: () => t
            });
            const t = 818 != i.j ? function() {
                for (var e, o, i = 0, t = ""; i < arguments.length;)(e = arguments[i++]) && (o = r(e)) && (t && (t += " "), t += o);
                return t
            } : null
        },
        4388: (e, o, i) => {
            "use strict";
            i.d(o, {
                a: () => d
            });
            var r = i(1594),
                t = i.n(r);
            if (818 != i.j) var a = i(9787);

            function n(e) {
                return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, n(e)
            }

            function s(e, o) {
                var i, r = Object.keys(e);
                return Object.getOwnPropertySymbols && (i = Object.getOwnPropertySymbols(e), o && (i = i.filter((function(o) {
                    return Object.getOwnPropertyDescriptor(e, o).enumerable
                }))), r.push.apply(r, i)), r
            }

            function l(e) {
                var o, i;
                for (o = 1; o < arguments.length; o++) i = null != arguments[o] ? arguments[o] : {}, o % 2 ? s(Object(i), !0).forEach((function(o) {
                    var r, t, a, s;
                    r = e, t = o, a = i[o], s = function(e) {
                        if ("object" != n(e) || !e) return e;
                        var o, i = e[Symbol.toPrimitive];
                        if (void 0 !== i) {
                            if ("object" != n(o = i.call(e, "string"))) return o;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return String(e)
                    }(t), (t = "symbol" == n(s) ? s : String(s)) in r ? Object.defineProperty(r, t, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : r[t] = a
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : s(Object(i)).forEach((function(o) {
                    Object.defineProperty(e, o, Object.getOwnPropertyDescriptor(i, o))
                }));
                return e
            }
            var c = {
                    s: t().createElement(t().Fragment, null, t().createElement("path", {
                        stroke: "currentColor",
                        strokeWidth: "1.5",
                        d: "M17.5 9.25l-5.5 5.5-5.5-5.5"
                    })),
                    m: t().createElement(t().Fragment, null, t().createElement("path", {
                        stroke: "currentColor",
                        strokeWidth: "1.5",
                        d: "M18.966 8.476L12 15.443 5.033 8.476"
                    })),
                    l: t().createElement(t().Fragment, null, t().createElement("path", {
                        stroke: "currentColor",
                        strokeWidth: "3",
                        d: "M37.933 16.951L24 30.885 10.067 16.951"
                    }))
                },
                d = 818 != i.j ? t().memo((function(e) {
                    return t().createElement(a.A, l(l({}, e), {}, {
                        paths: c,
                        fill: "none"
                    }))
                })) : null
        },
        5679: (e, o, i) => {
            "use strict";
            i.d(o, {
                b: () => d
            });
            var r = i(1594),
                t = i.n(r);
            if (818 != i.j) var a = i(9787);

            function n(e) {
                return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, n(e)
            }

            function s(e, o) {
                var i, r = Object.keys(e);
                return Object.getOwnPropertySymbols && (i = Object.getOwnPropertySymbols(e), o && (i = i.filter((function(o) {
                    return Object.getOwnPropertyDescriptor(e, o).enumerable
                }))), r.push.apply(r, i)), r
            }

            function l(e) {
                var o, i;
                for (o = 1; o < arguments.length; o++) i = null != arguments[o] ? arguments[o] : {}, o % 2 ? s(Object(i), !0).forEach((function(o) {
                    var r, t, a, s;
                    r = e, t = o, a = i[o], s = function(e) {
                        if ("object" != n(e) || !e) return e;
                        var o, i = e[Symbol.toPrimitive];
                        if (void 0 !== i) {
                            if ("object" != n(o = i.call(e, "string"))) return o;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return String(e)
                    }(t), (t = "symbol" == n(s) ? s : String(s)) in r ? Object.defineProperty(r, t, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : r[t] = a
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : s(Object(i)).forEach((function(o) {
                    Object.defineProperty(e, o, Object.getOwnPropertyDescriptor(i, o))
                }));
                return e
            }
            var c = {
                    s: t().createElement(t().Fragment, null, t().createElement("path", {
                        stroke: "currentColor",
                        strokeWidth: "1.5",
                        d: "M17.5 6.5l-11 11m0-11l11 11"
                    })),
                    m: t().createElement(t().Fragment, null, t().createElement("path", {
                        stroke: "currentColor",
                        strokeWidth: "1.5",
                        d: "M18.973 5.027L5.028 18.972m0-13.945l13.944 13.945"
                    })),
                    l: t().createElement(t().Fragment, null, t().createElement("path", {
                        stroke: "currentColor",
                        strokeWidth: "3",
                        d: "M37.945 10.055l-27.89 27.89m0-27.89l27.89 27.89"
                    }))
                },
                d = 818 != i.j ? t().memo((function(e) {
                    return t().createElement(a.A, l(l({}, e), {}, {
                        paths: c,
                        fill: "none"
                    }))
                })) : null
        },
        9787: (e, o, i) => {
            "use strict";
            i.d(o, {
                A: () => y
            });
            var r = i(1594),
                t = i.n(r);

            function a(e) {
                return a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, a(e)
            }
            var n = 818 != i.j ? ["aria-hidden", "className", "fill", "height", "paths", "role", "title", "size", "viewBox", "width"] : null;

            function s(e, o) {
                var i, r = Object.keys(e);
                return Object.getOwnPropertySymbols && (i = Object.getOwnPropertySymbols(e), o && (i = i.filter((function(o) {
                    return Object.getOwnPropertyDescriptor(e, o).enumerable
                }))), r.push.apply(r, i)), r
            }

            function l(e, o, i) {
                var r;
                return r = function(e) {
                    if ("object" != a(e) || !e) return e;
                    var o, i = e[Symbol.toPrimitive];
                    if (void 0 !== i) {
                        if ("object" != a(o = i.call(e, "string"))) return o;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return String(e)
                }(o), (o = "symbol" == a(r) ? r : String(r)) in e ? Object.defineProperty(e, o, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[o] = i, e
            }

            function c(e, o) {
                var i, r;
                for ((null == o || o > e.length) && (o = e.length), i = 0, r = new Array(o); i < o; i++) r[i] = e[i];
                return r
            }
            var d = "24px",
                u = "48px",
                p = {
                    s: "0 0 ".concat(parseInt(d), " ").concat(parseInt(d)),
                    m: "0 0 ".concat(parseInt(d), " ").concat(parseInt(d)),
                    l: "0 0 ".concat(parseInt(u), " ").concat(parseInt(u))
                },
                m = {
                    s: d,
                    m: d,
                    l: u,
                    container: "container"
                },
                y = function(e) {
                    var o, i, a = e["aria-hidden"],
                        d = e.className,
                        u = e.fill,
                        y = e.height,
                        v = e.paths,
                        g = e.role,
                        f = void 0 === g ? "img" : g,
                        h = e.title,
                        C = e.size,
                        T = void 0 === C ? "m" : C,
                        b = e.viewBox,
                        H = e.width,
                        A = function(e, o) {
                            if (null == e) return {};
                            var i, r, t, a = function(e, o) {
                                if (null == e) return {};
                                var i, r, t = {},
                                    a = Object.keys(e);
                                for (r = 0; r < a.length; r++) i = a[r], o.indexOf(i) >= 0 || (t[i] = e[i]);
                                return t
                            }(e, o);
                            if (Object.getOwnPropertySymbols)
                                for (i = Object.getOwnPropertySymbols(e), t = 0; t < i.length; t++) r = i[t], o.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
                            return a
                        }(e, n),
                        S = (o = (0, r.useState)(T), i = 2, function(e) {
                            if (Array.isArray(e)) return e
                        }(o) || function(e, o) {
                            var i, r, t, a, n, s, l, c = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                            if (null != c) {
                                n = [], s = !0, l = !1;
                                try {
                                    if (t = (c = c.call(e)).next, 0 === o) {
                                        if (Object(c) !== c) return;
                                        s = !1
                                    } else
                                        for (; !(s = (i = t.call(c)).done) && (n.push(i.value), n.length !== o); s = !0);
                                } catch (e) {
                                    l = !0, r = e
                                } finally {
                                    try {
                                        if (!s && null != c.return && (a = c.return(), Object(a) !== a)) return
                                    } finally {
                                        if (l) throw r
                                    }
                                }
                                return n
                            }
                        }(o, i) || function(e, o) {
                            if (e) {
                                if ("string" == typeof e) return c(e, o);
                                var i = Object.prototype.toString.call(e).slice(8, -1);
                                return "Object" === i && e.constructor && (i = e.constructor.name), "Map" === i || "Set" === i ? Array.from(e) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? c(e, o) : void 0
                            }
                        }(o, i) || function() {
                            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }()),
                        N = S[0],
                        P = S[1],
                        w = a;
                    (function(e) {
                        return !e && !h
                    })(a) && (w = !0), (0, r.useEffect)((function() {
                        Object.keys(m).includes(T) ? P(T) : P("m")
                    }), [T]);
                    var M = b || p[T] || p.m;
                    return t().createElement("svg", function(e) {
                        var o, i;
                        for (o = 1; o < arguments.length; o++) i = null != arguments[o] ? arguments[o] : {}, o % 2 ? s(Object(i), !0).forEach((function(o) {
                            l(e, o, i[o])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : s(Object(i)).forEach((function(o) {
                            Object.defineProperty(e, o, Object.getOwnPropertyDescriptor(i, o))
                        }));
                        return e
                    }({
                        "aria-hidden": w ? "true" : "false",
                        className: d,
                        focusable: "false",
                        viewBox: M,
                        role: f,
                        width: function() {
                            if ("container" !== N) return H || m[N]
                        }(),
                        height: function() {
                            if ("container" !== N) return y || m[N]
                        }(),
                        fill: u
                    }, A), (null == v ? void 0 : v[N]) ? v[N] : null == v ? void 0 : v.m, h && t().createElement("title", null, h))
                }
        },
        4104: (e, o, i) => {
            "use strict";
            i.d(o, {
                f: () => r
            });
            const r = {
                podiumCdsBreakpointXs: "320px",
                podiumCdsBreakpointS: "600px",
                podiumCdsBreakpointM: "960px",
                podiumCdsBreakpointL: "1440px",
                podiumCdsBreakpointXl: "1920px"
            }
        },
        6556: (e, o, i) => {
            "use strict";
            i.d(o, {
                U: () => r
            });
            const r = {
                podiumCdsBreakpointXs: "320px",
                podiumCdsBreakpointS: "600px",
                podiumCdsBreakpointM: "960px",
                podiumCdsBreakpointL: "1440px",
                podiumCdsBreakpointXl: "1920px",
                podiumCdsColorBlack: "#111111",
                podiumCdsColorWhite: "#FFFFFF",
                podiumCdsColorRed50: "#FFE5E5",
                podiumCdsColorRed100: "#FFC3C4",
                podiumCdsColorRed200: "#FFABAD",
                podiumCdsColorRed300: "#FF7975",
                podiumCdsColorRed400: "#FF4E4A",
                podiumCdsColorRed500: "#EE0005",
                podiumCdsColorRed600: "#D30005",
                podiumCdsColorRed700: "#A70E00",
                podiumCdsColorRed800: "#780700",
                podiumCdsColorRed900: "#530300",
                podiumCdsColorOrange50: "#FFE2D6",
                podiumCdsColorOrange100: "#FFC5AD",
                podiumCdsColorOrange200: "#FFA584",
                podiumCdsColorOrange300: "#FF8255",
                podiumCdsColorOrange400: "#FF5000",
                podiumCdsColorOrange500: "#D33918",
                podiumCdsColorOrange600: "#9F290F",
                podiumCdsColorOrange700: "#7E200D",
                podiumCdsColorOrange800: "#5D180C",
                podiumCdsColorOrange900: "#3E1009",
                podiumCdsColorYellow50: "#FEF087",
                podiumCdsColorYellow100: "#FEEA55",
                podiumCdsColorYellow200: "#FEDF35",
                podiumCdsColorYellow300: "#FFD11B",
                podiumCdsColorYellow400: "#FDC400",
                podiumCdsColorYellow500: "#FCA600",
                podiumCdsColorYellow600: "#F08E0A",
                podiumCdsColorYellow700: "#E57A09",
                podiumCdsColorYellow800: "#CD6006",
                podiumCdsColorYellow900: "#99470A",
                podiumCdsColorGreen50: "#DFFFB9",
                podiumCdsColorGreen100: "#BDFB72",
                podiumCdsColorGreen200: "#83F13B",
                podiumCdsColorGreen300: "#5FE63F",
                podiumCdsColorGreen400: "#3CCD49",
                podiumCdsColorGreen500: "#1EAA52",
                podiumCdsColorGreen600: "#007D48",
                podiumCdsColorGreen700: "#00643E",
                podiumCdsColorGreen800: "#005034",
                podiumCdsColorGreen900: "#003C2A",
                podiumCdsColorBlue50: "#D6EEFF",
                podiumCdsColorBlue100: "#B9E2FF",
                podiumCdsColorBlue200: "#87CEFF",
                podiumCdsColorBlue300: "#4CABFF",
                podiumCdsColorBlue400: "#1190FF",
                podiumCdsColorBlue500: "#1151FF",
                podiumCdsColorBlue600: "#0034E3",
                podiumCdsColorBlue700: "#061DBB",
                podiumCdsColorBlue800: "#02068E",
                podiumCdsColorBlue900: "#020664",
                podiumCdsColorTeal50: "#D4FFFB",
                podiumCdsColorTeal100: "#9CFFF7",
                podiumCdsColorTeal200: "#69EEE7",
                podiumCdsColorTeal300: "#31CBCB",
                podiumCdsColorTeal400: "#1CB2B6",
                podiumCdsColorTeal500: "#008E98",
                podiumCdsColorTeal600: "#0A7281",
                podiumCdsColorTeal700: "#005C68",
                podiumCdsColorTeal800: "#004856",
                podiumCdsColorTeal900: "#043441",
                podiumCdsColorPurple50: "#E4E1FC",
                podiumCdsColorPurple100: "#D6D1FF",
                podiumCdsColorPurple200: "#BEAFFD",
                podiumCdsColorPurple300: "#A082FF",
                podiumCdsColorPurple400: "#8755FF",
                podiumCdsColorPurple500: "#6E0FF6",
                podiumCdsColorPurple600: "#5400CC",
                podiumCdsColorPurple700: "#4400A9",
                podiumCdsColorPurple800: "#300080",
                podiumCdsColorPurple900: "#1C0060",
                podiumCdsColorPink50: "#FFE1F3",
                podiumCdsColorPink100: "#FFCDEA",
                podiumCdsColorPink200: "#FFB0DD",
                podiumCdsColorPink300: "#FE90CC",
                podiumCdsColorPink400: "#FC5DBB",
                podiumCdsColorPink500: "#ED1AA0",
                podiumCdsColorPink600: "#D00B84",
                podiumCdsColorPink700: "#A50767",
                podiumCdsColorPink800: "#770349",
                podiumCdsColorPink900: "#4C012D",
                podiumCdsColorGrey50: "#FAFAFA",
                podiumCdsColorGrey100: "#F5F5F5",
                podiumCdsColorGrey200: "#E5E5E5",
                podiumCdsColorGrey300: "#CACACB",
                podiumCdsColorGrey400: "#9E9EA0",
                podiumCdsColorGrey500: "#707072",
                podiumCdsColorGrey600: "#4B4B4D",
                podiumCdsColorGrey700: "#39393B",
                podiumCdsColorGrey800: "#28282A",
                podiumCdsColorGrey900: "#1F1F21",
                podiumCdsColorScrim100: "rgba(17,17,17,0.36)",
                podiumCdsColorScrim100Inverse: "rgba(17,17,17,0.80)",
                podiumCdsColorScrimPrimary: "rgba(17,17,17,0.36)",
                podiumCdsColorScrimPrimaryInverse: "rgba(17,17,17,0.80)",
                podiumCdsColorBrandOrange: "#FF5000",
                podiumCdsColorBrandRed: "#EE0005",
                podiumCdsColorGradientBrandOrange: "linear-gradient(113.7deg, #FF0015 3.64%, #fe5000 50.92%, #FF6A00 97.26%)",
                podiumCdsColorBgActive: "#F5F5F5",
                podiumCdsColorBgCritical: "#D30005",
                podiumCdsColorBgDisabled: "#E5E5E5",
                podiumCdsColorBgHover: "#E5E5E5",
                podiumCdsColorBgOverlay: "#FFFFFF",
                podiumCdsColorBgPrimary: "#FFFFFF",
                podiumCdsColorBgSecondary: "#F5F5F5",
                podiumCdsColorBgSuccess: "#007D48",
                podiumCdsColorBgWarning: "#FEDF35",
                podiumCdsColorBgHoverInverse: "#39393B",
                podiumCdsColorBgPrimaryInverse: "#1F1F21",
                podiumCdsColorBgOnImagePrimary: "#FFFFFF",
                podiumCdsColorBgOnImageSecondary: "#E5E5E5",
                podiumCdsColorBgAlwaysDark: "#111111",
                podiumCdsColorBgAlwaysLight: "#FFFFFF",
                podiumCdsColorBgModal: "#FFFFFF",
                podiumCdsColorTextCritical: "#D30005",
                podiumCdsColorTextDisabled: "#CACACB",
                podiumCdsColorTextHover: "#707072",
                podiumCdsColorTextLink: "#1151FF",
                podiumCdsColorTextPrimary: "#111111",
                podiumCdsColorTextSecondary: "#707072",
                podiumCdsColorTextSuccess: "#007D48",
                podiumCdsColorTextDisabledInverse: "#39393B",
                podiumCdsColorTextHoverInverse: "#E5E5E5",
                podiumCdsColorTextPrimaryInverse: "#FFFFFF",
                podiumCdsColorTextSecondaryInverse: "#9E9EA0",
                podiumCdsColorTextPrimaryOnLight: "#111111",
                podiumCdsColorTextPrimaryOnDark: "#FFFFFF",
                podiumCdsColorTextSecondaryOnLight: "#707072",
                podiumCdsColorTextSecondaryOnDark: "#9E9EA0",
                podiumCdsColorTextHoverOnLight: "#707072",
                podiumCdsColorTextHoverOnDark: "#E5E5E5",
                podiumCdsColorTextDisabledOnLight: "#CACACB",
                podiumCdsColorTextDisabledOnDark: "#39393B",
                podiumCdsColorBorderActive: "#111111",
                podiumCdsColorBorderCritical: "#D30005",
                podiumCdsColorBorderDisabled: "#CACACB",
                podiumCdsColorBorderPrimary: "#707072",
                podiumCdsColorBorderSecondary: "#CACACB",
                podiumCdsColorBorderTertiary: "#E5E5E5",
                podiumCdsColorBorderSuccess: "#007D48",
                podiumCdsColorBorderActiveInverse: "#FFFFFF",
                podiumCdsColorBorderPrimaryInverse: "#9E9EA0",
                podiumCdsColorBorderPrimaryOnLight: "#707072",
                podiumCdsColorBorderPrimaryOnDark: "#9E9EA0",
                podiumCdsColorBorderActiveOnLight: "#111111",
                podiumCdsColorBorderActiveOnDark: "#FFFFFF",
                podiumCdsColorBorderDisabledOnLight: "#CACACB",
                podiumCdsColorBorderDisabledOnDark: "#39393B",
                podiumCdsColorCritical: "#D30005",
                podiumCdsColorCriticalInverse: "#FF4E4A",
                podiumCdsColorSuccess: "#007D48",
                podiumCdsColorSuccessInverse: "#1EAA52",
                podiumCdsColorInfo: "#1151FF",
                podiumCdsColorInfoInverse: "#1190FF",
                podiumCdsColorWarning: "#FEDF35",
                podiumCdsColorWarningInverse: "#FEEA55",
                podiumCdsColorFocusRing: "#1151FF",
                podiumCdsColorFocusShadow: "rgba(17, 17, 17, 0.12)",
                podiumCdsColorBoxFocusRing: "rgba(39, 93, 197, 1)",
                podiumCdsColorTextBadge: "#D33918",
                podiumCdsButtonBorderRadius: "30px",
                podiumCdsButtonBorderWidth: "1.5px",
                podiumCdsButtonBoxShadowWidth: "0",
                podiumCdsButtonBoxShadowHoverWidth: "0",
                podiumCdsButtonTextDecorationLine: "underline",
                podiumCdsButtonPaddingTopS: "6px",
                podiumCdsButtonPaddingTopM: "12px",
                podiumCdsButtonPaddingTopL: "18px",
                podiumCdsButtonPaddingBottomS: "6px",
                podiumCdsButtonPaddingBottomM: "12px",
                podiumCdsButtonPaddingBottomL: "18px",
                podiumCdsButtonPaddingSidesS: "16px",
                podiumCdsButtonPaddingSidesM: "24px",
                podiumCdsButtonPaddingSidesL: "24px",
                podiumCdsButtonPaddingUnderline: "0",
                podiumCdsButtonHeightS: "34px",
                podiumCdsButtonHeightM: "46px",
                podiumCdsButtonHeightL: "58px",
                podiumCdsButtonColorBgPrimary: "#111111",
                podiumCdsButtonColorBgPrimaryOnLight: "#111111",
                podiumCdsButtonColorBgPrimaryOnDark: "#FFFFFF",
                podiumCdsButtonColorBgPrimaryHover: "#707072",
                podiumCdsButtonColorBgPrimaryHoverOnLight: "#707072",
                podiumCdsButtonColorBgPrimaryHoverOnDark: "#CACACB",
                podiumCdsButtonColorBgPrimaryDisabled: "#E5E5E5",
                podiumCdsButtonColorBgPrimaryDisabledOnLight: "#E5E5E5",
                podiumCdsButtonColorBgPrimaryDisabledOnDark: "#4B4B4D",
                podiumCdsButtonColorBgSecondary: "transparent",
                podiumCdsButtonColorBorderSecondary: "#CACACB",
                podiumCdsButtonColorBorderSecondaryOnLight: "#CACACB",
                podiumCdsButtonColorBorderSecondaryOnDark: "#9E9EA0",
                podiumCdsButtonColorBorderSecondaryHover: "#111111",
                podiumCdsButtonColorBorderSecondaryHoverOnDark: "#FFFFFF",
                podiumCdsButtonColorBorderSecondaryDisabled: "#CACACB",
                podiumCdsButtonColorBorderSecondaryDisabledOnDark: "#4B4B4D",
                podiumCdsDialogBgBlur: "4px",
                podiumCdsIconButtonColorBgPrimary: "#111111",
                podiumCdsIconButtonColorBgPrimaryOnLight: "#111111",
                podiumCdsIconButtonColorBgPrimaryOnDark: "#FFFFFF",
                podiumCdsIconButtonColorBgPrimaryHover: "#707072",
                podiumCdsIconButtonColorBgPrimaryHoverOnLight: "#707072",
                podiumCdsIconButtonColorBgPrimaryHoverOnDark: "#9E9EA0",
                podiumCdsIconButtonColorBgSecondary: "#F5F5F5",
                podiumCdsIconButtonColorBgSecondaryOnLight: "#F5F5F5",
                podiumCdsIconButtonColorBgSecondaryOnDark: "#111111",
                podiumCdsIconButtonColorBgSecondaryHover: "#CACACB",
                podiumCdsIconButtonColorBgSecondaryHoverOnLight: "#CACACB",
                podiumCdsIconButtonColorBgSecondaryHoverOnDark: "#39393B",
                podiumCdsIconButtonColorBgTertiaryHover: "#E5E5E5",
                podiumCdsIconButtonColorBgTertiaryHoverOnLight: "#E5E5E5",
                podiumCdsIconButtonColorBgTertiaryHoverOnDark: "#39393B",
                podiumCdsIconButtonColorBgDisabled: "#E5E5E5",
                podiumCdsIconButtonColorBgDisabledOnLight: "#E5E5E5",
                podiumCdsIconButtonColorBgDisabledOnDark: "#707072",
                podiumCdsInputColorDisabled: "#707072",
                podiumCdsElevation10: "10",
                podiumCdsElevation20: "20",
                podiumCdsElevation30: "30",
                podiumCdsElevation40: "40",
                podiumCdsElevation50: "50",
                podiumCdsElevation60: "60",
                podiumCdsElevation70: "70",
                podiumCdsElevation80: "80",
                podiumCdsElevation90: "90",
                podiumCdsElevation100: "100",
                podiumCdsFontWeightRegular: "400",
                podiumCdsFontWeightMedium: "500",
                podiumCdsFontWeightBold: "700",
                podiumCdsFontSizeXxs: "12px",
                podiumCdsFontSizeXs: "14px",
                podiumCdsFontSizeS: "16px",
                podiumCdsFontSizeM: "20px",
                podiumCdsFontSizeL: "24px",
                podiumCdsFontSizeXl: "28px",
                podiumCdsFontSizeXxl: "32px",
                podiumCdsFontSizeXxxl: "40px",
                podiumCdsFontSizeXxxxl: "48px",
                podiumCdsFontSizeXxxxxl: "72px",
                podiumCdsFontStyleNormal: "normal",
                podiumCdsFormShadowFocus: "0 0 0 12px rgba(17, 17, 17, 0.12)",
                podiumCdsMotionEasingFunctional: "cubic-bezier(0.4, 0, 0.2, 1)",
                podiumCdsMotionEasingExpressive: "cubic-bezier(0.6, 0, 0.1, 1)",
                podiumCdsMotionDelay50: "50ms",
                podiumCdsMotionDelay100: "100ms",
                podiumCdsMotionDelay150: "150ms",
                podiumCdsMotionDelay200: "200ms",
                podiumCdsMotionDelay250: "250ms",
                podiumCdsMotionDuration150: "150ms",
                podiumCdsMotionDuration250: "250ms",
                podiumCdsMotionDuration300: "300ms",
                podiumCdsMotionDuration350: "350ms",
                podiumCdsMotionDuration400: "400ms",
                podiumCdsShadow100: "0px 4px 8px 0px rgba(17, 17, 17, 0.06), 0px 0px 24px 4px rgba(17, 17, 17, 0.03)",
                podiumCdsShadow100Inverse: "0px 4px 8px 0px rgba(17, 17, 17, 0.18), 0px 0px 24px 4px rgba(17, 17, 17, 0.09)",
                podiumCdsSizeSpacingXs: "4px",
                podiumCdsSizeSpacingS: "8px",
                podiumCdsSizeSpacingM: "12px",
                podiumCdsSizeSpacingL: "24px",
                podiumCdsSizeSpacingXl: "36px",
                podiumCdsSizeSpacingXxl: "60px",
                podiumCdsSizeSpacingXxxl: "84px",
                podiumCdsSizeSpacingXxxxl: "120px",
                podiumCdsSizeSpacingGridGutter: "16px",
                podiumCdsSizeSpacingGridGutterL: "12px",
                podiumCdsSizeSpacingGridExteriorGutterS: "24px",
                podiumCdsSizeSpacingGridExteriorGutterL: "48px",
                podiumCdsSizeBorderRadiusS: "4px",
                podiumCdsSizeBorderRadiusM: "8px",
                podiumCdsSizeBorderRadiusL: "12px",
                podiumCdsSizeBorderRadiusXl: "24px",
                podiumCdsSizeBorderWidthS: "1px",
                podiumCdsSizeBorderWidthM: "1.5px",
                podiumCdsSizeBorderWidthL: "2px",
                podiumCdsSizeIconS: "16px",
                podiumCdsSizeIconM: "24px",
                podiumCdsSizeIconL: "48px",
                podiumCdsSizeFormInputContainerHeight: "86px",
                podiumCdsSizeFormInputFieldHeight: "56px",
                podiumCdsTransitionTimingFunctionEase: "cubic-bezier(.25, .1, .25, 1)",
                podiumCdsTransitionDurationFast: "150ms",
                podiumCdsTransitionDurationNormal: "250ms",
                i18nTokens: {
                    "ar-sa": {
                        podiumCdsTypography320To959Oversize1: "500 6rem/1.6 'Neue Frutiger Arabic Medium', 'Myriad Arabic Semibold', 'SF Arabic Medium', Helvetica, Tahoma, 'تاهوما', sans-serif",
                        podiumCdsTypography320To959Oversize2: "500 4.75rem/1.6 'Neue Frutiger Arabic Medium', 'Myriad Arabic Semibold', 'SF Arabic Medium', Helvetica, Tahoma, 'تاهوما', sans-serif",
                        podiumCdsTypography320To959Oversize3: "500 3.75rem/1.6 'Neue Frutiger Arabic Medium', 'Myriad Arabic Semibold', 'SF Arabic Medium', Helvetica, Tahoma, 'تاهوما', sans-serif",
                        podiumCdsTypography320To959Display1: "800 3rem/1.6 'Neue Frutiger Arabic Extra Black', 'Myriad Arabic Black', 'SF Arabic Black', Helvetica, Tahoma, 'تاهوما', sans-serif",
                        podiumCdsTypography320To959Display2: "800 2.5rem/1.6 'Neue Frutiger Arabic Extra Black', 'Myriad Arabic Black', 'SF Arabic Black', Helvetica, Tahoma, 'تاهوما', sans-serif",
                        podiumCdsTypography320To959Display3: "800 2rem/1.6 'Neue Frutiger Arabic Extra Black', 'Myriad Arabic Black', 'SF Arabic Black', Helvetica, Tahoma, 'تاهوما', sans-serif",
                        podiumCdsTypography320To959Display4: "800 1.5rem/1.6 'Neue Frutiger Arabic Extra Black', 'Myriad Arabic Black', 'SF Arabic Black', Helvetica, Tahoma, 'تاهوما', sans-serif",
                        podiumCdsTypography320To959Conversation1: "300 2rem/1.6 'Neue Frutiger Arabic Regular', 'Myriad Arabic', 'SF Arabic Regular', Helvetica, Tahoma, 'تاهوما', sans-serif",
                        podiumCdsTypography320To959Conversation2: "300 1.5rem/1.6 'Neue Frutiger Arabic Regular', 'Myriad Arabic', 'SF Arabic Regular', Helvetica, Tahoma, 'تاهوما', sans-serif",
                        podiumCdsTypography320To959Conversation3: "300 1.25rem/1.6 'Neue Frutiger Arabic Regular', 'Myriad Arabic', 'SF Arabic Regular', Helvetica, Tahoma, 'تاهوما', sans-serif",
                        podiumCdsTypography320To959Conversation4: "300 1rem/1.5  'Neue Frutiger Arabic Regular', 'Myriad Arabic', 'SF Arabic Regular', Helvetica, Tahoma, 'تاهوما', sans-serif",
                        podiumCdsTypography320To959EditorialBody1: "400 1rem/1.5 'Neue Frutiger Arabic Regular', 'Myriad Arabic', 'SF Arabic Regular', Helvetica, Tahoma, 'تاهوما', sans-serif",
                        podiumCdsTypography320To959EditorialBody1Strong: "500 1rem/1.5  'Neue Frutiger Arabic Medium', 'Myriad Arabic Semibold', 'SF Arabic Medium', Helvetica, Tahoma, 'تاهوما', sans-serif",
                        podiumCdsTypography320To1919Title1: "500 2.5rem/1.6 'Neue Frutiger Arabic Medium', 'Myriad Arabic Semibold', 'SF Arabic Medium', Helvetica, Tahoma, 'تاهوما', sans-serif",
                        podiumCdsTypography320To1919Title2: "500 2rem/1.6 'Neue Frutiger Arabic Medium', 'Myriad Arabic Semibold', 'SF Arabic Medium', Helvetica, Tahoma, 'تاهوما', sans-serif",
                        podiumCdsTypography320To1919Title3: "500 1.5rem/1.6 'Neue Frutiger Arabic Medium', 'Myriad Arabic Semibold', 'SF Arabic Medium', Helvetica, Tahoma, 'تاهوما', sans-serif",
                        podiumCdsTypography320To1919Title4: "500 1.25rem/1.6 'Neue Frutiger Arabic Medium', 'Myriad Arabic Semibold', 'SF Arabic Medium', Helvetica, Tahoma, 'تاهوما', sans-serif",
                        podiumCdsTypography960To1439Oversize1: "500 7.5rem/1.6 'Neue Frutiger Arabic Medium', 'Myriad Arabic Semibold', 'SF Arabic Medium', Helvetica, Tahoma, 'تاهوما', sans-serif",
                        podiumCdsTypography960To1439Oversize2: "500 6rem/1.6 'Neue Frutiger Arabic Medium', 'Myriad Arabic Semibold', 'SF Arabic Medium', Helvetica, Tahoma, 'تاهوما', sans-serif",
                        podiumCdsTypography960To1439Oversize3: "500 4.75rem/1.6 'Neue Frutiger Arabic Medium', 'Myriad Arabic Semibold', 'SF Arabic Medium', Helvetica, Tahoma, 'تاهوما', sans-serif",
                        podiumCdsTypography960To1919Display1: "800 6rem/1.6 'Neue Frutiger Arabic Extra Black', 'Myriad Arabic Black', 'SF Arabic Black', Helvetica, Tahoma, 'تاهوما', sans-serif",
                        podiumCdsTypography960To1919Display2: "800 4.75rem/1.6 'Neue Frutiger Arabic Extra Black', 'Myriad Arabic Black', 'SF Arabic Black', Helvetica, Tahoma, 'تاهوما', sans-serif",
                        podiumCdsTypography960To1919Display3: "800 3.75rem/1.6 'Neue Frutiger Arabic Extra Black', 'Myriad Arabic Black', 'SF Arabic Black', Helvetica, Tahoma, 'تاهوما', sans-serif",
                        podiumCdsTypography960To1919Display4: "800 3rem/1.6 'Neue Frutiger Arabic Extra Black', 'Myriad Arabic Black', 'SF Arabic Black', Helvetica, Tahoma, 'تاهوما', sans-serif",
                        podiumCdsTypography960To1919Conversation1: "300 3rem/1.6 'Neue Frutiger Arabic Regular', 'Myriad Arabic', 'SF Arabic Regular', Helvetica, Tahoma, 'تاهوما', sans-serif",
                        podiumCdsTypography960To1919Conversation2: "300 2.5rem/1.6 'Neue Frutiger Arabic Regular', 'Myriad Arabic', 'SF Arabic Regular', Helvetica, Tahoma, 'تاهوما', sans-serif",
                        podiumCdsTypography960To1919Conversation3: "300 2rem/1.6 'Neue Frutiger Arabic Regular', 'Myriad Arabic', 'SF Arabic Regular', Helvetica, Tahoma, 'تاهوما', sans-serif",
                        podiumCdsTypography960To1919Conversation4: "300 1.25rem/1.6 'Neue Frutiger Arabic Regular', 'Myriad Arabic', 'SF Arabic Regular', Helvetica, Tahoma, 'تاهوما', sans-serif",
                        podiumCdsTypography960PlusEditorialBody1: "400 1.25rem/1.6 'Neue Frutiger Arabic Regular', 'Myriad Arabic', 'SF Arabic Regular', Helvetica, Tahoma, 'تاهوما', sans-serif",
                        podiumCdsTypography960PlusEditorialBody1Strong: "500 1.25rem/1.6 'Neue Frutiger Arabic Medium', 'Myriad Arabic Semibold', 'SF Arabic Medium', Helvetica, Tahoma, 'تاهوما', sans-serif",
                        podiumCdsTypography1440To1919Oversize1: "500 9.375rem/1.6 'Neue Frutiger Arabic Medium', 'Myriad Arabic Semibold', 'SF Arabic Medium', Helvetica, Tahoma, 'تاهوما', sans-serif",
                        podiumCdsTypography1440To1919Oversize2: "500 7.5rem/1.6 'Neue Frutiger Arabic Medium', 'Myriad Arabic Semibold', 'SF Arabic Medium', Helvetica, Tahoma, 'تاهوما', sans-serif",
                        podiumCdsTypography1440To1919Oversize3: "500 6rem/1.6 'Neue Frutiger Arabic Medium', 'Myriad Arabic Semibold', 'SF Arabic Medium', Helvetica, Tahoma, 'تاهوما', sans-serif",
                        podiumCdsTypography1920PlusOversize1: "500 11.625rem/1.6 'Neue Frutiger Arabic Medium', 'Myriad Arabic Semibold', 'SF Arabic Medium', Helvetica, Tahoma, 'تاهوما', sans-serif",
                        podiumCdsTypography1920PlusOversize2: "500 9.375rem/1.6 'Neue Frutiger Arabic Medium', 'Myriad Arabic Semibold', 'SF Arabic Medium', Helvetica, Tahoma, 'تاهوما', sans-serif",
                        podiumCdsTypography1920PlusOversize3: "500 7.5rem/1.6 'Neue Frutiger Arabic Medium', 'Myriad Arabic Semibold', 'SF Arabic Medium', Helvetica, Tahoma, 'تاهوما', sans-serif",
                        podiumCdsTypography1920PlusDisplay1: "800 7.5rem/1.6 'Neue Frutiger Arabic Extra Black', 'Myriad Arabic Black', 'SF Arabic Black', Helvetica, Tahoma, 'تاهوما', sans-serif",
                        podiumCdsTypography1920PlusDisplay2: "800 6rem/1.6 'Neue Frutiger Arabic Extra Black', 'Myriad Arabic Black', 'SF Arabic Black', Helvetica, Tahoma, 'تاهوما', sans-serif",
                        podiumCdsTypography1920PlusDisplay3: "800 4.75rem/1.6 'Neue Frutiger Arabic Extra Black', 'Myriad Arabic Black', 'SF Arabic Black', Helvetica, Tahoma, 'تاهوما', sans-serif",
                        podiumCdsTypography1920PlusDisplay4: "800 3.75rem/1.6 'Neue Frutiger Arabic Extra Black', 'Myriad Arabic Black', 'SF Arabic Black', Helvetica, Tahoma, 'تاهوما', sans-serif",
                        podiumCdsTypography1920PlusTitle1: "500 3rem/1.6 'Neue Frutiger Arabic Medium', 'Myriad Arabic Semibold', 'SF Arabic Medium', Helvetica, Tahoma, 'تاهوما', sans-serif",
                        podiumCdsTypography1920PlusTitle2: "500 2.5rem/1.6 'Neue Frutiger Arabic Medium', 'Myriad Arabic Semibold', 'SF Arabic Medium', Helvetica, Tahoma, 'تاهوما', sans-serif",
                        podiumCdsTypography1920PlusTitle3: "500 2rem/1.6 'Neue Frutiger Arabic Medium', 'Myriad Arabic Semibold', 'SF Arabic Medium', Helvetica, Tahoma, 'تاهوما', sans-serif",
                        podiumCdsTypography1920PlusTitle4: "500 1.5rem/1.6 'Neue Frutiger Arabic Medium', 'Myriad Arabic Semibold', 'SF Arabic Medium', Helvetica, Tahoma, 'تاهوما', sans-serif",
                        podiumCdsTypography1920PlusConversation1: "300 3.75rem/1.6 'Neue Frutiger Arabic Regular', 'Myriad Arabic', 'SF Arabic Regular', Helvetica, Tahoma, 'تاهوما', sans-serif",
                        podiumCdsTypography1920PlusConversation2: "300 3rem/1.6 'Neue Frutiger Arabic Regular', 'Myriad Arabic', 'SF Arabic Regular', Helvetica, Tahoma, 'تاهوما', sans-serif",
                        podiumCdsTypography1920PlusConversation3: "300 2.5rem/1.6 'Neue Frutiger Arabic Regular', 'Myriad Arabic', 'SF Arabic Regular', Helvetica, Tahoma, 'تاهوما', sans-serif",
                        podiumCdsTypography1920PlusConversation4: "300 1.25rem/1.6 'Neue Frutiger Arabic Regular', 'Myriad Arabic', 'SF Arabic Regular', Helvetica, Tahoma, 'تاهوما', sans-serif",
                        podiumCdsTypographyBody1: "400 1rem/1.5 'Neue Frutiger Arabic Regular', 'Myriad Arabic', 'SF Arabic Regular', Helvetica, Tahoma, 'تاهوما', sans-serif",
                        podiumCdsTypographyBody1Strong: "500 1rem/1.5 'Neue Frutiger Arabic Medium', 'Myriad Arabic Semibold', 'SF Arabic Medium', Helvetica, Tahoma, 'تاهوما', sans-serif",
                        podiumCdsTypographyBody2: "400 .875rem/1.5 'Neue Frutiger Arabic Regular', 'Myriad Arabic', 'SF Arabic Regular', Helvetica, Tahoma, 'تاهوما', sans-serif",
                        podiumCdsTypographyBody2Strong: "500 .875rem/1.5 'Neue Frutiger Arabic Medium', 'Myriad Arabic Semibold', 'SF Arabic Medium', Helvetica, Tahoma, 'تاهوما', sans-serif",
                        podiumCdsTypographyBody3: "400 .75rem/1.5 'Neue Frutiger Arabic Regular', 'Myriad Arabic', 'SF Arabic Regular', Helvetica, Tahoma, 'تاهوما', sans-serif",
                        podiumCdsTypographyBody3Strong: "500 .75rem/1.5 'Neue Frutiger Arabic Medium', 'Myriad Arabic Semibold', 'SF Arabic Medium', Helvetica, Tahoma, 'تاهوما', sans-serif",
                        podiumCdsTypographyBody4: "400 .625rem/1.5 'Neue Frutiger Arabic Regular', 'Myriad Arabic', 'SF Arabic Regular', Helvetica, Tahoma, 'تاهوما', sans-serif",
                        podiumCdsTypographyBody4Strong: "500 .625rem/1.5 'Neue Frutiger Arabic Medium', 'Myriad Arabic Semibold', 'SF Arabic Medium', Helvetica, Tahoma, 'تاهوما', sans-serif",
                        podiumCdsTypographyLegal: "400 .875rem/1.5 'Neue Frutiger Arabic Regular', 'Myriad Arabic', 'SF Arabic Regular', Helvetica, Tahoma, 'تاهوما', sans-serif"
                    },
                    "ca-es": {
                        podiumCdsTypography320To959Oversize1: "500 6rem/1.2 'Helvetica Now Display Medium', Helvetica, Arial, sans-serif",
                        podiumCdsTypography320To959Oversize2: "500 4.75rem/1.2 'Helvetica Now Display Medium', Helvetica, Arial, sans-serif",
                        podiumCdsTypography320To959Oversize3: "500 3.75rem/1.2 'Helvetica Now Display Medium', Helvetica, Arial, sans-serif",
                        podiumCdsTypography320To959Display1: "800 3rem/1.25 'Nike Futura ND', 'Helvetica Now Text Medium', Helvetica, Arial, sans-serif",
                        podiumCdsTypography320To959Display2: "800 2.5rem/1.25 'Nike Futura ND', 'Helvetica Now Text Medium', Helvetica, Arial, sans-serif",
                        podiumCdsTypography320To959Display3: "800 2rem/1.25 'Nike Futura ND', 'Helvetica Now Text Medium', Helvetica, Arial, sans-serif",
                        podiumCdsTypography320To959Display4: "800 1.5rem/1.25 'Nike Futura ND', 'Helvetica Now Text Medium', Helvetica, Arial, sans-serif",
                        podiumCdsTypography320To959Conversation1: "300 2rem/1.35 'Palatino LT Pro Light', Helvetica, Arial, sans-serif",
                        podiumCdsTypography320To959Conversation2: "300 1.5rem/1.35 'Palatino LT Pro Light', Helvetica, Arial, sans-serif",
                        podiumCdsTypography320To959Conversation3: "300 1.25rem/1.35 'Palatino LT Pro Light', Helvetica, Arial, sans-serif",
                        podiumCdsTypography320To959Conversation4: "300 1rem/1.5 'Palatino LT Pro Light', Helvetica, Arial, sans-serif",
                        podiumCdsTypography320To959EditorialBody1: "400 1rem/1.5 'Helvetica Now Text', Helvetica, Arial, sans-serif",
                        podiumCdsTypography320To959EditorialBody1Strong: "500 1rem/1.5 'Helvetica Now Text Medium', Helvetica, Arial, sans-serif",
                        podiumCdsTypography320To1919Title1: "500 2.5rem/1.2 'Helvetica Now Display Medium', Helvetica, Arial, sans-serif",
                        podiumCdsTypography320To1919Title2: "500 2rem/1.2 'Helvetica Now Display Medium', Helvetica, Arial, sans-serif",
                        podiumCdsTypography320To1919Title3: "500 1.5rem/1.35 'Helvetica Now Display Medium', Helvetica, Arial, sans-serif",
                        podiumCdsTypography320To1919Title4: "500 1.25rem/1.5 'Helvetica Now Display Medium', Helvetica, Arial, sans-serif",
                        podiumCdsTypography960To1439Oversize1: "500 7.5rem/1.2 'Helvetica Now Display Medium', Helvetica, Arial, sans-serif",
                        podiumCdsTypography960To1439Oversize2: "500 6rem/1.2 'Helvetica Now Display Medium', Helvetica, Arial, sans-serif",
                        podiumCdsTypography960To1439Oversize3: "500 4.75rem/1.2 'Helvetica Now Display Medium', Helvetica, Arial, sans-serif",
                        podiumCdsTypography960To1919Display1: "800 6rem/1.25 'Nike Futura ND', 'Helvetica Now Text Medium', Helvetica, Arial, sans-serif",
                        podiumCdsTypography960To1919Display2: "800 4.75rem/1.25 'Nike Futura ND', 'Helvetica Now Text Medium', Helvetica, Arial, sans-serif",
                        podiumCdsTypography960To1919Display3: "800 3.75rem/1.25 'Nike Futura ND', 'Helvetica Now Text Medium', Helvetica, Arial, sans-serif",
                        podiumCdsTypography960To1919Display4: "800 3rem/1.25 'Nike Futura ND', 'Helvetica Now Text Medium', Helvetica, Arial, sans-serif",
                        podiumCdsTypography960To1919Conversation1: "300 3rem/1.25 'Palatino LT Pro Light', Helvetica, Arial, sans-serif",
                        podiumCdsTypography960To1919Conversation2: "300 2.5rem/1.35 'Palatino LT Pro Light', Helvetica, Arial, sans-serif",
                        podiumCdsTypography960To1919Conversation3: "300 2rem/1.35 'Palatino LT Pro Light', Helvetica, Arial, sans-serif",
                        podiumCdsTypography960To1919Conversation4: "300 1.25rem/1.35 'Palatino LT Pro Light', Helvetica, Arial, sans-serif",
                        podiumCdsTypography960PlusEditorialBody1: "400 1.25rem/1.5 'Helvetica Now Text', Helvetica, Arial, sans-serif",
                        podiumCdsTypography960PlusEditorialBody1Strong: "500 1.25rem/1.5 'Helvetica Now Text Medium', Helvetica, Arial, sans-serif",
                        podiumCdsTypography1440To1919Oversize1: "500 9.375rem/1.2 'Helvetica Now Display Medium', Helvetica, Arial, sans-serif",
                        podiumCdsTypography1440To1919Oversize2: "500 7.5rem/1.2 'Helvetica Now Display Medium', Helvetica, Arial, sans-serif",
                        podiumCdsTypography1440To1919Oversize3: "500 6rem/1.2 'Helvetica Now Display Medium', Helvetica, Arial, sans-serif",
                        podiumCdsTypography1920PlusOversize1: "500 11.625rem/1.2 'Helvetica Now Display Medium', Helvetica, Arial, sans-serif",
                        podiumCdsTypography1920PlusOversize2: "500 9.375rem/1.2 'Helvetica Now Display Medium', Helvetica, Arial, sans-serif",
                        podiumCdsTypography1920PlusOversize3: "500 7.5rem/1.2 'Helvetica Now Display Medium', Helvetica, Arial, sans-serif",
                        podiumCdsTypography1920PlusDisplay1: "800 7.5rem/1.25 'Nike Futura ND', 'Helvetica Now Text Medium', Helvetica, Arial, sans-serif",
                        podiumCdsTypography1920PlusDisplay2: "800 6rem/1.25 'Nike Futura ND', 'Helvetica Now Text Medium', Helvetica, Arial, sans-serif",
                        podiumCdsTypography1920PlusDisplay3: "800 4.75rem/1.25 'Nike Futura ND', 'Helvetica Now Text Medium', Helvetica, Arial, sans-serif",
                        podiumCdsTypography1920PlusDisplay4: "800 3.75rem/1.25 'Nike Futura ND', 'Helvetica Now Text Medium', Helvetica, Arial, sans-serif",
                        podiumCdsTypography1920PlusTitle1: "500 3rem/1.2 'Helvetica Now Display Medium', Helvetica, Arial, sans-serif",
                        podiumCdsTypography1920PlusTitle2: "500 2.5rem/1.2 'Helvetica Now Display Medium', Helvetica, Arial, sans-serif",
                        podiumCdsTypography1920PlusTitle3: "500 2rem/1.2 'Helvetica Now Display Medium', Helvetica, Arial, sans-serif",
                        podiumCdsTypography1920PlusTitle4: "500 1.5rem/1.2 'Helvetica Now Display Medium', Helvetica, Arial, sans-serif",
                        podiumCdsTypography1920PlusConversation1: "300 3.75rem/1.25 'Palatino LT Pro Light', Helvetica, Arial, sans-serif",
                        podiumCdsTypography1920PlusConversation2: "300 3rem/1.25 'Palatino LT Pro Light', Helvetica, Arial, sans-serif",
                        podiumCdsTypography1920PlusConversation3: "300 2.5rem/1.35 'Palatino LT Pro Light', Helvetica, Arial, sans-serif",
                        podiumCdsTypography1920PlusConversation4: "300 1.25rem/1.35 'Palatino LT Pro Light', Helvetica, Arial, sans-serif",
                        podiumCdsTypographyBody1: "400 1rem/1.5 'Helvetica Now Text', Helvetica, Arial, sans-serif",
                        podiumCdsTypographyBody1Strong: "500 1rem/1.5 'Helvetica Now Text Medium', Helvetica, Arial, sans-serif",
                        podiumCdsTypographyBody2: "400 .875rem/1.5 'Helvetica Now Text', Helvetica, Arial, sans-serif",
                        podiumCdsTypographyBody2Strong: "500 .875rem/1.5 'Helvetica Now Text Medium', Helvetica, Arial, sans-serif",
                        podiumCdsTypographyBody3: "400 .75rem/1.5 'Helvetica Now Text', Helvetica, Arial, sans-serif",
                        podiumCdsTypographyBody3Strong: "500 .75rem/1.5 'Helvetica Now Text Medium', Helvetica, Arial, sans-serif",
                        podiumCdsTypographyBody4: "400 .625rem/1.5 'Helvetica Now Text', Helvetica, Arial, sans-serif",
                        podiumCdsTypographyBody4Strong: "500 .625rem/1.5 'Helvetica Now Text Medium', Helvetica, Arial, sans-serif",
                        podiumCdsTypographyLegal: "400 .875rem/1.5 'Helvetica Now Text', Helvetica, Arial, sans-serif"
                    },
                    "cs-cz": {
                        podiumCdsTypography320To959Oversize1: "500 6rem/1.2 'Helvetica Now Display Medium', Helvetica, Arial, sans-serif",
                        podiumCdsTypography320To959Oversize2: "500 4.75rem/1.2 'Helvetica Now Display Medium', Helvetica, Arial, sans-serif",
                        podiumCdsTypography320To959Oversize3: "500 3.75rem/1.2 'Helvetica Now Display Medium', Helvetica, Arial, sans-serif",
                        podiumCdsTypography320To959Display1: "800 3rem/1 'Nike Futura ND', 'Helvetica Now Text Medium', Helvetica, Arial, sans-serif",
                        podiumCdsTypography320To959Display2: "800 2.5rem/1.1 'Nike Futura ND', 'Helvetica Now Text Medium', Helvetica, Arial, sans-serif",
                        podiumCdsTypography320To959Display3: "800 2rem/1.1 'Nike Futura ND', 'Helvetica Now Text Medium', Helvetica, Arial, sans-serif",
                        podiumCdsTypography320To959Display4: "800 1.5rem/1.1 'Nike Futura ND', 'Helvetica Now Text Medium', Helvetica, Arial, sans-serif",
                        podiumCdsTypography320To959Conversation1: "300 2rem/1.35 'Palatino LT Pro Light', Helvetica, Arial, sans-serif",
                        podiumCdsTypography320To959Conversation2: "300 1.5rem/1.35 'Palatino LT Pro Light', Helvetica, Arial, sans-serif",
                        podiumCdsTypography320To959Conversation3: "300 1.25rem/1.35 'Palatino LT Pro Light', Helvetica, Arial, sans-serif",
                        podiumCdsTypography320To959Conversation4: "300 1rem/1.5 'Palatino LT Pro Light', Helvetica, Arial, sans-serif",
                        podiumCdsTypography320To959EditorialBody1: "400 1rem/1.5 'Helvetica Now Text', Helvetica, Arial, sans-serif",
                        podiumCdsTypography320To959EditorialBody1Strong: "500 1rem/1.5 'Helvetica Now Text Medium', Helvetica, Arial, sans-serif",
                        podiumCdsTypography320To1919Title1: "500 2.5rem/1.2 'Helvetica Now Display Medium', Helvetica, Arial, sans-serif",
                        podiumCdsTypography320To1919Title2: "500 2rem/1.2 'Helvetica Now Display Medium', Helvetica, Arial, sans-serif",
                        podiumCdsTypography320To1919Title3: "500 1.5rem/1.2 'Helvetica Now Display Medium', Helvetica, Arial, sans-serif",
                        podiumCdsTypography320To1919Title4: "500 1.25rem/1.5 'Helvetica Now Display Medium', Helvetica, Arial, sans-serif",
                        podiumCdsTypography960To1439Oversize1: "500 7.5rem/1.2 'Helvetica Now Display Medium', Helvetica, Arial, sans-serif",
                        podiumCdsTypography960To1439Oversize2: "500 6rem/1.2 'Helvetica Now Display Medium', Helvetica, Arial, sans-serif",
                        podiumCdsTypography960To1439Oversize3: "500 4.75rem/1.2 'Helvetica Now Display Medium', Helvetica, Arial, sans-serif",
                        podiumCdsTypography960To1919Display1: "800 6rem/1 'Nike Futura ND', 'Helvetica Now Text Medium', Helvetica, Arial, sans-serif",
                        podiumCdsTypography960To1919Display2: "800 4.75rem/1 'Nike Futura ND', 'Helvetica Now Text Medium', Helvetica, Arial, sans-serif",
                        podiumCdsTypography960To1919Display3: "800 3.75rem/1 'Nike Futura ND', 'Helvetica Now Text Medium', Helvetica, Arial, sans-serif",
                        podiumCdsTypography960To1919Display4: "800 3rem/1 'Nike Futura ND', 'Helvetica Now Text Medium', Helvetica, Arial, sans-serif",
                        podiumCdsTypography960To1919Conversation1: "300 3rem/1.25 'Palatino LT Pro Light', Helvetica, Arial, sans-serif",
                        podiumCdsTypography960To1919Conversation2: "300 2.5rem/1.35 'Palatino LT Pro Light', Helvetica, Arial, sans-serif",
                        podiumCdsTypography960To1919Conversation3: "300 2rem/1.35 'Palatino LT Pro Light', Helvetica, Arial, sans-serif",
                        podiumCdsTypography960To1919Conversation4: "300 1.25rem/1.35 'Palatino LT Pro Light', Helvetica, Arial, sans-serif",
                        podiumCdsTypography960PlusEditorialBody1: "400 1.25rem/1.5 'Helvetica Now Text', Helvetica, Arial, sans-serif",
                        podiumCdsTypography960PlusEditorialBody1Strong: "500 1.25rem/1.5 'Helvetica Now Text Medium', Helvetica, Arial, sans-serif",
                        podiumCdsTypography1440To1919Oversize1: "500 9.375rem/1.2 'Helvetica Now Display Medium', Helvetica, Arial, sans-serif",
                        podiumCdsTypography1440To1919Oversize2: "500 7.5rem/1.2 'Helvetica Now Display Medium', Helvetica, Arial, sans-serif",
                        podiumCdsTypography1440To1919Oversize3: "500 6rem/1.2 'Helvetica Now Display Medium', Helvetica, Arial, sans-serif",
                        podiumCdsTypography1920PlusOversize1: "500 11.625rem/1.2 'Helvetica Now Display Medium', Helvetica, Arial, sans-serif",
                        podiumCdsTypography1920PlusOversize2: "500 9.375rem/1.2 'Helvetica Now Display Medium', Helvetica, Arial, sans-serif",
                        podiumCdsTypography1920PlusOversize3: "500 7.5rem/1.2 'Helvetica Now Display Medium', Helvetica, Arial, sans-serif",
                        podiumCdsTypography1920PlusDisplay1: "800 7.5rem/1 'Nike Futura ND', 'Helvetica Now Text Medium', Helvetica, Arial, sans-serif",
                        podiumCdsTypography1920PlusDisplay2: "800 6rem/1 'Nike Futura ND', 'Helvetica Now Text Medium', Helvetica, Arial, sans-serif",
                        podiumCdsTypography1920PlusDisplay3: "800 4.75rem/1 'Nike Futura ND', 'Helvetica Now Text Medium', Helvetica, Arial, sans-serif",
                        podiumCdsTypography1920PlusDisplay4: "800 3.75rem/1 'Nike Futura ND', 'Helvetica Now Text Medium', Helvetica, Arial, sans-serif",
                        podiumCdsTypography1920PlusTitle1: "500 3rem/1.2 'Helvetica Now Display Medium', Helvetica, Arial, sans-serif",
                        podiumCdsTypography1920PlusTitle2: "500 2.5rem/1.2 'Helvetica Now Display Medium', Helvetica, Arial, sans-serif",
                        podiumCdsTypography1920PlusTitle3: "500 2rem/1.2 'Helvetica Now Display Medium', Helvetica, Arial, sans-serif",
                        podiumCdsTypography1920PlusTitle4: "500 1.5rem/1.2 'Helvetica Now Display Medium', Helvetica, Arial, sans-serif",
                        podiumCdsTypography1920PlusConversation1: "300 3.75rem/1.25 'Palatino LT Pro Light', Helvetica, Arial, sans-serif",
                        podiumCdsTypography1920PlusConversation2: "300 3rem/1.25 'Palatino LT Pro Light', Helvetica, Arial, sans-serif",
                        podiumCdsTypography1920PlusConversation3: "300 2.5rem/1.35 'Palatino LT Pro Light', Helvetica, Arial, sans-serif",
                        podiumCdsTypography1920PlusConversation4: "300 1.25rem/1.35 'Palatino LT Pro Light', Helvetica, Arial, sans-serif",
                        podiumCdsTypographyBody1: "400 1rem/1.5 'Helvetica Now Text', Helvetica, Arial, sans-serif",
                        podiumCdsTypographyBody1Strong: "500 1rem/1.5 'Helvetica Now Text Medium', Helvetica, Arial, sans-serif",
                        podiumCdsTypographyBody2: "400 .875rem/1.5 'Helvetica Now Text', Helvetica, Arial, sans-serif",
                        podiumCdsTypographyBody2Strong: "500 .875rem/1.5 'Helvetica Now Text Medium', Helvetica, Arial, sans-serif",
                        podiumCdsTypographyBody3: "400 .75rem/1.5 'Helvetica Now Text', Helvetica, Arial, sans-serif",
                        podiumCdsTypographyBody3Strong: "500 .75rem/1.5 'Helvetica Now Text Medium', Helvetica, Arial, sans-serif",
                        podiumCdsTypographyBody4: "400 .625rem/1.5 'Helvetica Now Text', Helvetica, Arial, sans-serif",
                        podiumCdsTypographyBody4Strong: "500 .625rem/1.5 'Helvetica Now Text Medium', Helvetica, Arial, sans-serif",
                        podiumCdsTypographyLegal: "400 .875rem/1.5 'Helvetica Now Text', Helvetica, Arial, sans-serif"
                    },
                    get "da-dk" () {
                        return this["cs-cz"]
                    },
                    get "de-de" () {
                        return this["cs-cz"]
                    },
                    "el-gr": {
                        podiumCdsTypography320To959Oversize1: "500 6rem/1.2 'HelveticaNeueLTW1G-Md', Helvetica, Arial, sans-serif",
                        podiumCdsTypography320To959Oversize2: "500 4.75rem/1.2 'HelveticaNeueLTW1G-Md', Helvetica, Arial, sans-serif",
                        podiumCdsTypography320To959Oversize3: "500 3.75rem/1.2 'HelveticaNeueLTW1G-Md', Helvetica, Arial, sans-serif",
                        podiumCdsTypography320To959Display1: "800 3rem/1.1 'Nike Futura ND','HelveticaNeueLTW1G-Md', Helvetica, Arial, sans-serif",
                        podiumCdsTypography320To959Display2: "800 2.5rem/1.1 'Nike Futura ND','HelveticaNeueLTW1G-Md', Helvetica, Arial, sans-serif",
                        podiumCdsTypography320To959Display3: "800 2rem/1.2 'Nike Futura ND','HelveticaNeueLTW1G-Md', Helvetica, Arial, sans-serif",
                        podiumCdsTypography320To959Display4: "800 1.5rem/1.2 'Nike Futura ND','HelveticaNeueLTW1G-Md', Helvetica, Arial, sans-serif",
                        podiumCdsTypography320To959Conversation1: "300 2rem/1.2 'HelveticaNeueLTW1G-Roman', Helvetica, Arial, sans-serif",
                        podiumCdsTypography320To959Conversation2: "300 1.5rem/1.2 'HelveticaNeueLTW1G-Roman', Helvetica, Arial, sans-serif",
                        podiumCdsTypography320To959Conversation3: "300 1.25rem/1.2 'HelveticaNeueLTW1G-Roman', Helvetica, Arial, sans-serif",
                        podiumCdsTypography320To959Conversation4: "300 1rem/1.5 'HelveticaNeueLTW1G-Roman', Helvetica, Arial, sans-serif",
                        podiumCdsTypography320To959EditorialBody1: "400 1rem/1.5 'HelveticaNeueLTW1G-Roman', Helvetica, Arial, sans-serif",
                        podiumCdsTypography320To959EditorialBody1Strong: "500 1rem/1.5 'HelveticaNeueLTW1G-Md', Helvetica, Arial, sans-serif",
                        podiumCdsTypography320To1919Title1: "500 2.5rem/1.2 'HelveticaNeueLTW1G-Md', Helvetica, Arial, sans-serif",
                        podiumCdsTypography320To1919Title2: "500 2rem/1.2 'HelveticaNeueLTW1G-Md', Helvetica, Arial, sans-serif",
                        podiumCdsTypography320To1919Title3: "500 1.5rem/1.2 'HelveticaNeueLTW1G-Md', Helvetica, Arial, sans-serif",
                        podiumCdsTypography320To1919Title4: "500 1.25rem/1.5 'HelveticaNeueLTW1G-Md', Helvetica, Arial, sans-serif",
                        podiumCdsTypography960To1439Oversize1: "500 7.5rem/1.2 'HelveticaNeueLTW1G-Md', Helvetica, Arial, sans-serif",
                        podiumCdsTypography960To1439Oversize2: "500 6rem/1.2 'HelveticaNeueLTW1G-Md', Helvetica, Arial, sans-serif",
                        podiumCdsTypography960To1439Oversize3: "500 4.75rem/1.2 'HelveticaNeueLTW1G-Md', Helvetica, Arial, sans-serif",
                        podiumCdsTypography960To1919Display1: "800 6rem/1 'Nike Futura ND','HelveticaNeueLTW1G-Md', Helvetica, Arial, sans-serif",
                        podiumCdsTypography960To1919Display2: "800 4.75rem/1 'Nike Futura ND','HelveticaNeueLTW1G-Md', Helvetica, Arial, sans-serif",
                        podiumCdsTypography960To1919Display3: "800 3.75rem/1 'Nike Futura ND','HelveticaNeueLTW1G-Md', Helvetica, Arial, sans-serif",
                        podiumCdsTypography960To1919Display4: "800 3rem/1.1 'Nike Futura ND','HelveticaNeueLTW1G-Md', Helvetica, Arial, sans-serif",
                        podiumCdsTypography960To1919Conversation1: "300 3rem/1.2 'HelveticaNeueLTW1G-Roman', Helvetica, Arial, sans-serif",
                        podiumCdsTypography960To1919Conversation2: "300 2.5rem/1.2 'HelveticaNeueLTW1G-Roman', Helvetica, Arial, sans-serif",
                        podiumCdsTypography960To1919Conversation3: "300 2rem/1.2 'HelveticaNeueLTW1G-Roman', Helvetica, Arial, sans-serif",
                        podiumCdsTypography960To1919Conversation4: "300 1.25rem/1.2 'HelveticaNeueLTW1G-Roman', Helvetica, Arial, sans-serif",
                        podiumCdsTypography960PlusEditorialBody1: "400 1.25rem/1.5 'HelveticaNeueLTW1G-Roman', Helvetica, Arial, sans-serif",
                        podiumCdsTypography960PlusEditorialBody1Strong: "500 1.25rem/1.5 'HelveticaNeueLTW1G-Md', Helvetica, Arial, sans-serif",
                        podiumCdsTypography1440To1919Oversize1: "500 9.375rem/1 'HelveticaNeueLTW1G-Md', Helvetica, Arial, sans-serif",
                        podiumCdsTypography1440To1919Oversize2: "500 7.5rem/1 'HelveticaNeueLTW1G-Md', Helvetica, Arial, sans-serif",
                        podiumCdsTypography1440To1919Oversize3: "500 6rem/1.1 'HelveticaNeueLTW1G-Md', Helvetica, Arial, sans-serif",
                        podiumCdsTypography1920PlusOversize1: "500 11.625rem/1.2 'HelveticaNeueLTW1G-Md', Helvetica, Arial, sans-serif",
                        podiumCdsTypography1920PlusOversize2: "500 9.375rem/1.2 'HelveticaNeueLTW1G-Md', Helvetica, Arial, sans-serif",
                        podiumCdsTypography1920PlusOversize3: "500 7.5rem/1.2 'HelveticaNeueLTW1G-Md', Helvetica, Arial, sans-serif",
                        podiumCdsTypography1920PlusDisplay1: "800 7.5rem/1 'Nike Futura ND','HelveticaNeueLTW1G-Md', Helvetica, Arial, sans-serif",
                        podiumCdsTypography1920PlusDisplay2: "800 6rem/1 'Nike Futura ND','HelveticaNeueLTW1G-Md', Helvetica, Arial, sans-serif",
                        podiumCdsTypography1920PlusDisplay3: "800 4.75rem/1 'Nike Futura ND','HelveticaNeueLTW1G-Md', Helvetica, Arial, sans-serif",
                        podiumCdsTypography1920PlusDisplay4: "800 3.75rem/1 'Nike Futura ND','HelveticaNeueLTW1G-Md', Helvetica, Arial, sans-serif",
                        podiumCdsTypography1920PlusTitle1: "500 3rem/1.2 'HelveticaNeueLTW1G-Md', Helvetica, Arial, sans-serif",
                        podiumCdsTypography1920PlusTitle2: "500 2.5rem/1.2 'HelveticaNeueLTW1G-Md', Helvetica, Arial, sans-serif",
                        podiumCdsTypography1920PlusTitle3: "500 2rem/1.2 'HelveticaNeueLTW1G-Md', Helvetica, Arial, sans-serif",
                        podiumCdsTypography1920PlusTitle4: "500 1.5rem/1.2 'HelveticaNeueLTW1G-Md', Helvetica, Arial, sans-serif",
                        podiumCdsTypography1920PlusConversation1: "300 3.75rem/1.2 'HelveticaNeueLTW1G-Roman', Helvetica, Arial, sans-serif",
                        podiumCdsTypography1920PlusConversation2: "300 3rem/1.2 'HelveticaNeueLTW1G-Roman', Helvetica, Arial, sans-serif",
                        podiumCdsTypography1920PlusConversation3: "300 2.5rem/1.2 'HelveticaNeueLTW1G-Roman', Helvetica, Arial, sans-serif",
                        podiumCdsTypography1920PlusConversation4: "300 1.25rem/1.5 'HelveticaNeueLTW1G-Roman', Helvetica, Arial, sans-serif",
                        podiumCdsTypographyBody1: "400 1rem/1.5 'HelveticaNeueLTW1G-Roman', Helvetica, Arial, sans-serif",
                        podiumCdsTypographyBody1Strong: "500 1rem/1.5 'HelveticaNeueLTW1G-Md', Helvetica, Arial, sans-serif",
                        podiumCdsTypographyBody2: "400 .875rem/1.5 'HelveticaNeueLTW1G-Roman', Helvetica, Arial, sans-serif",
                        podiumCdsTypographyBody2Strong: "500 .875rem/1.5 'HelveticaNeueLTW1G-Md', Helvetica, Arial, sans-serif",
                        podiumCdsTypographyBody3: "400 .75rem/1.5 'HelveticaNeueLTW1G-Roman', Helvetica, Arial, sans-serif",
                        podiumCdsTypographyBody3Strong: "500 .75rem/1.5 'HelveticaNeueLTW1G-Md', Helvetica, Arial, sans-serif",
                        podiumCdsTypographyBody4: "400 .625rem/1.5 'HelveticaNeueLTW1G-Roman', Helvetica, Arial, sans-serif",
                        podiumCdsTypographyBody4Strong: "500 .625rem/1.5 'HelveticaNeueLTW1G-Md', Helvetica, Arial, sans-serif",
                        podiumCdsTypographyLegal: "400 .875rem/1.5 'HelveticaNeueLTW1G-Roman', Helvetica, Arial, sans-serif"
                    },
                    "en-ca": {
                        podiumCdsTypography320To959Oversize1: "500 6rem/1.1 'Helvetica Now Display Medium', Helvetica, Arial, sans-serif",
                        podiumCdsTypography320To959Oversize2: "500 4.75rem/1.1 'Helvetica Now Display Medium', Helvetica, Arial, sans-serif",
                        podiumCdsTypography320To959Oversize3: "500 3.75rem/1.2 'Helvetica Now Display Medium', Helvetica, Arial, sans-serif",
                        podiumCdsTypography320To959Display1: "800 3rem/.9 'Nike Futura ND', 'Helvetica Now Text Medium', Helvetica, Arial, sans-serif",
                        podiumCdsTypography320To959Display2: "800 2.5rem/.9 'Nike Futura ND', 'Helvetica Now Text Medium', Helvetica, Arial, sans-serif",
                        podiumCdsTypography320To959Display3: "800 2rem/.9 'Nike Futura ND', 'Helvetica Now Text Medium', Helvetica, Arial, sans-serif",
                        podiumCdsTypography320To959Display4: "800 1.5rem/.9 'Nike Futura ND', 'Helvetica Now Text Medium', Helvetica, Arial, sans-serif",
                        podiumCdsTypography320To959Conversation1: "300 2rem/1.35 'Palatino LT Pro Light', Helvetica, Arial, sans-serif",
                        podiumCdsTypography320To959Conversation2: "300 1.5rem/1.35 'Palatino LT Pro Light', Helvetica, Arial, sans-serif",
                        podiumCdsTypography320To959Conversation3: "300 1.25rem/1.35 'Palatino LT Pro Light', Helvetica, Arial, sans-serif",
                        podiumCdsTypography320To959Conversation4: "300 1rem/1.35 'Palatino LT Pro Light', Helvetica, Arial, sans-serif",
                        podiumCdsTypography320To959EditorialBody1: "400 1rem/1.5 'Helvetica Now Text', Helvetica, Arial, sans-serif",
                        podiumCdsTypography320To959EditorialBody1Strong: "500 1rem/1.5 'Helvetica Now Text Medium', Helvetica, Arial, sans-serif",
                        podiumCdsTypography320To1919Title1: "500 2.5rem/1.2 'Helvetica Now Display Medium', Helvetica, Arial, sans-serif",
                        podiumCdsTypography320To1919Title2: "500 2rem/1.2 'Helvetica Now Display Medium', Helvetica, Arial, sans-serif",
                        podiumCdsTypography320To1919Title3: "500 1.5rem/1.2 'Helvetica Now Display Medium', Helvetica, Arial, sans-serif",
                        podiumCdsTypography320To1919Title4: "500 1.25rem/1.2 'Helvetica Now Display Medium', Helvetica, Arial, sans-serif",
                        podiumCdsTypography960To1439Oversize1: "500 7.5rem/1 'Helvetica Now Display Medium', Helvetica, Arial, sans-serif",
                        podiumCdsTypography960To1439Oversize2: "500 6rem/1.1 'Helvetica Now Display Medium', Helvetica, Arial, sans-serif",
                        podiumCdsTypography960To1439Oversize3: "500 4.75rem/1.1 'Helvetica Now Display Medium', Helvetica, Arial, sans-serif",
                        podiumCdsTypography960To1919Display1: "800 6rem/.9 'Nike Futura ND', 'Helvetica Now Text Medium', Helvetica, Arial, sans-serif",
                        podiumCdsTypography960To1919Display2: "800 4.75rem/.9 'Nike Futura ND', 'Helvetica Now Text Medium', Helvetica, Arial, sans-serif",
                        podiumCdsTypography960To1919Display3: "800 3.75rem/.9 'Nike Futura ND', 'Helvetica Now Text Medium', Helvetica, Arial, sans-serif",
                        podiumCdsTypography960To1919Display4: "800 3rem/.9 'Nike Futura ND', 'Helvetica Now Text Medium', Helvetica, Arial, sans-serif",
                        podiumCdsTypography960To1919Conversation1: "300 3rem/1.1 'Palatino LT Pro Light', Helvetica, Arial, sans-serif",
                        podiumCdsTypography960To1919Conversation2: "300 2.5rem/1.1 'Palatino LT Pro Light', Helvetica, Arial, sans-serif",
                        podiumCdsTypography960To1919Conversation3: "300 2rem/1.35 'Palatino LT Pro Light', Helvetica, Arial, sans-serif",
                        podiumCdsTypography960To1919Conversation4: "300 1.25rem/1.35 'Palatino LT Pro Light', Helvetica, Arial, sans-serif",
                        podiumCdsTypography960PlusEditorialBody1: "400 1.25rem/1.5 'Helvetica Now Text', Helvetica, Arial, sans-serif",
                        podiumCdsTypography960PlusEditorialBody1Strong: "500 1.25rem/1.5 'Helvetica Now Text Medium', Helvetica, Arial, sans-serif",
                        podiumCdsTypography1440To1919Oversize1: "500 9.375rem/1 'Helvetica Now Display Medium', Helvetica, Arial, sans-serif",
                        podiumCdsTypography1440To1919Oversize2: "500 7.5rem/1 'Helvetica Now Display Medium', Helvetica, Arial, sans-serif",
                        podiumCdsTypography1440To1919Oversize3: "500 6rem/1.1 'Helvetica Now Display Medium', Helvetica, Arial, sans-serif",
                        podiumCdsTypography1920PlusOversize1: "500 11.625rem/1 'Helvetica Now Display Medium', Helvetica, Arial, sans-serif",
                        podiumCdsTypography1920PlusOversize2: "500 9.375rem/1 'Helvetica Now Display Medium', Helvetica, Arial, sans-serif",
                        podiumCdsTypography1920PlusOversize3: "500 7.5rem/1 'Helvetica Now Display Medium', Helvetica, Arial, sans-serif",
                        podiumCdsTypography1920PlusDisplay1: "800 7.5rem/.9 'Nike Futura ND', 'Helvetica Now Text Medium', Helvetica, Arial, sans-serif",
                        podiumCdsTypography1920PlusDisplay2: "800 6rem/.9 'Nike Futura ND', 'Helvetica Now Text Medium', Helvetica, Arial, sans-serif",
                        podiumCdsTypography1920PlusDisplay3: "800 4.75rem/.9 'Nike Futura ND', 'Helvetica Now Text Medium', Helvetica, Arial, sans-serif",
                        podiumCdsTypography1920PlusDisplay4: "800 3.75rem/.9 'Nike Futura ND', 'Helvetica Now Text Medium', Helvetica, Arial, sans-serif",
                        podiumCdsTypography1920PlusTitle1: "500 3rem/1.2 'Helvetica Now Display Medium', Helvetica, Arial, sans-serif",
                        podiumCdsTypography1920PlusTitle2: "500 2.5rem/1.2 'Helvetica Now Display Medium', Helvetica, Arial, sans-serif",
                        podiumCdsTypography1920PlusTitle3: "500 2rem/1.2 'Helvetica Now Display Medium', Helvetica, Arial, sans-serif",
                        podiumCdsTypography1920PlusTitle4: "500 1.5rem/1.2 'Helvetica Now Display Medium', Helvetica, Arial, sans-serif",
                        podiumCdsTypography1920PlusConversation1: "300 3.75rem/1.1 'Palatino LT Pro Light', Helvetica, Arial, sans-serif",
                        podiumCdsTypography1920PlusConversation2: "300 3rem/1.1 'Palatino LT Pro Light', Helvetica, Arial, sans-serif",
                        podiumCdsTypography1920PlusConversation3: "300 2.5rem/1.1 'Palatino LT Pro Light', Helvetica, Arial, sans-serif",
                        podiumCdsTypography1920PlusConversation4: "300 1.25rem/1.35 'Palatino LT Pro Light', Helvetica, Arial, sans-serif",
                        podiumCdsTypographyBody1: "400 1rem/1.5 'Helvetica Now Text', Helvetica, Arial, sans-serif",
                        podiumCdsTypographyBody1Strong: "500 1rem/1.5 'Helvetica Now Text Medium', Helvetica, Arial, sans-serif",
                        podiumCdsTypographyBody2: "400 .875rem/1.5 'Helvetica Now Text', Helvetica, Arial, sans-serif",
                        podiumCdsTypographyBody2Strong: "500 .875rem/1.5 'Helvetica Now Text Medium', Helvetica, Arial, sans-serif",
                        podiumCdsTypographyBody3: "400 .75rem/1.5 'Helvetica Now Text', Helvetica, Arial, sans-serif",
                        podiumCdsTypographyBody3Strong: "500 .75rem/1.5 'Helvetica Now Text Medium', Helvetica, Arial, sans-serif",
                        podiumCdsTypographyBody4: "400 .625rem/1.5 'Helvetica Now Text', Helvetica, Arial, sans-serif",
                        podiumCdsTypographyBody4Strong: "500 .625rem/1.5 'Helvetica Now Text Medium', Helvetica, Arial, sans-serif",
                        podiumCdsTypographyLegal: "400 .875rem/1.5 'Helvetica Now Text', Helvetica, Arial, sans-serif"
                    },
                    get "en-gb" () {
                        return this["en-ca"]
                    },
                    get "en-jp" () {
                        return this["en-ca"]
                    },
                    get "en-us" () {
                        return this["en-ca"]
                    },
                    get "es-ar" () {
                        return this["cs-cz"]
                    },
                    get "es-ca" () {
                        return this["cs-cz"]
                    },
                    get "es-cl" () {
                        return this["cs-cz"]
                    },
                    get "es-es" () {
                        return this["cs-cz"]
                    },
                    get "es-la" () {
                        return this["cs-cz"]
                    },
                    get "es-mx" () {
                        return this["cs-cz"]
                    },
                    get "es-uy" () {
                        return this["cs-cz"]
                    },
                    get "fr-fr" () {
                        return this["ca-es"]
                    },
                    get "hu-hu" () {
                        return this["cs-cz"]
                    },
                    get "it-it" () {
                        return this["cs-cz"]
                    },
                    "ja-jp": {
                        podiumCdsTypography320To959Oversize1: "500 6rem/1.35 'Noto Sans JP Medium', Helvetica, Arial, 'Hiragino Sans', 'Hiragino Kaku Gothic Pro', 'ヒラギノ角ゴ', 'MS Pgothic', 'ＭＳ Ｐゴシック', sans-serif",
                        podiumCdsTypography320To959Oversize2: "500 4.75rem/1.35 'Noto Sans JP Medium', Helvetica, Arial, 'Hiragino Sans', 'Hiragino Kaku Gothic Pro', 'ヒラギノ角ゴ', 'MS Pgothic', 'ＭＳ Ｐゴシック', sans-serif",
                        podiumCdsTypography320To959Oversize3: "500 3.75rem/1.35 'Noto Sans JP Medium', Helvetica, Arial, 'Hiragino Sans', 'Hiragino Kaku Gothic Pro', 'ヒラギノ角ゴ', 'MS Pgothic', 'ＭＳ Ｐゴシック', sans-serif",
                        podiumCdsTypography320To959Display1: "900 3rem/1.2 'Noto Sans JP Black', Helvetica, Arial, 'Hiragino Sans', 'Hiragino Kaku Gothic Pro', 'ヒラギノ角ゴ', 'MS Pgothic', 'ＭＳ Ｐゴシック', sans-serif",
                        podiumCdsTypography320To959Display2: "900 2.5rem/1.2 'Noto Sans JP Black', Helvetica, Arial, 'Hiragino Sans', 'Hiragino Kaku Gothic Pro', 'ヒラギノ角ゴ', 'MS Pgothic', 'ＭＳ Ｐゴシック', sans-serif",
                        podiumCdsTypography320To959Display3: "900 2rem/1.25 'Noto Sans JP Black', Helvetica, Arial, 'Hiragino Sans', 'Hiragino Kaku Gothic Pro', 'ヒラギノ角ゴ', 'MS Pgothic', 'ＭＳ Ｐゴシック', sans-serif",
                        podiumCdsTypography320To959Display4: "900 1.5rem/1.25 'Noto Sans JP Black', Helvetica, Arial, 'Hiragino Sans', 'Hiragino Kaku Gothic Pro', 'ヒラギノ角ゴ', 'MS Pgothic', 'ＭＳ Ｐゴシック', sans-serif",
                        podiumCdsTypography320To959Conversation1: "300 2rem/1.5 'Noto Sans JP', Helvetica, Arial, 'Hiragino Sans', 'Hiragino Kaku Gothic Pro', 'ヒラギノ角ゴ', 'MS Pgothic', 'ＭＳ Ｐゴシック', sans-serif",
                        podiumCdsTypography320To959Conversation2: "300 1.5rem/1.5 'Noto Sans JP', Helvetica, Arial, 'Hiragino Sans', 'Hiragino Kaku Gothic Pro', 'ヒラギノ角ゴ', 'MS Pgothic', 'ＭＳ Ｐゴシック', sans-serif",
                        podiumCdsTypography320To959Conversation3: "300 1.25rem/1.5 'Noto Sans JP', Helvetica, Arial, 'Hiragino Sans', 'Hiragino Kaku Gothic Pro', 'ヒラギノ角ゴ', 'MS Pgothic', 'ＭＳ Ｐゴシック', sans-serif",
                        podiumCdsTypography320To959Conversation4: "300 1rem/1.75 'Noto Sans JP', Helvetica, Arial, 'Hiragino Sans', 'Hiragino Kaku Gothic Pro', 'ヒラギノ角ゴ', 'MS Pgothic', 'ＭＳ Ｐゴシック', sans-serif",
                        podiumCdsTypography320To959EditorialBody1: "400 1rem/1.75 'Noto Sans JP', Helvetica, Arial, 'Hiragino Sans', 'Hiragino Kaku Gothic Pro', 'ヒラギノ角ゴ', 'MS Pgothic', 'ＭＳ Ｐゴシック', sans-serif",
                        podiumCdsTypography320To959EditorialBody1Strong: "500 1rem/1.75 'Noto Sans JP Medium', Helvetica, Arial, 'Hiragino Sans', 'Hiragino Kaku Gothic Pro', 'ヒラギノ角ゴ', 'MS Pgothic', 'ＭＳ Ｐゴシック', sans-serif",
                        podiumCdsTypography320To1919Title1: "500 2.5rem/1.5 'Noto Sans JP Medium', Helvetica, Arial, 'Hiragino Sans', 'Hiragino Kaku Gothic Pro', 'ヒラギノ角ゴ', 'MS Pgothic', 'ＭＳ Ｐゴシック', sans-serif",
                        podiumCdsTypography320To1919Title2: "500 2rem/1.5 'Noto Sans JP Medium', Helvetica, Arial, 'Hiragino Sans', 'Hiragino Kaku Gothic Pro', 'ヒラギノ角ゴ', 'MS Pgothic', 'ＭＳ Ｐゴシック', sans-serif",
                        podiumCdsTypography320To1919Title3: "500 1.5rem/1.5 'Noto Sans JP Medium', Helvetica, Arial, 'Hiragino Sans', 'Hiragino Kaku Gothic Pro', 'ヒラギノ角ゴ', 'MS Pgothic', 'ＭＳ Ｐゴシック', sans-serif",
                        podiumCdsTypography320To1919Title4: "500 1.25rem/1.75 'Noto Sans JP Medium', Helvetica, Arial, 'Hiragino Sans', 'Hiragino Kaku Gothic Pro', 'ヒラギノ角ゴ', 'MS Pgothic', 'ＭＳ Ｐゴシック', sans-serif",
                        podiumCdsTypography960To1439Oversize1: "500 7.5rem/1.35 'Noto Sans JP Medium', Helvetica, Arial, 'Hiragino Sans', 'Hiragino Kaku Gothic Pro', 'ヒラギノ角ゴ', 'MS Pgothic', 'ＭＳ Ｐゴシック', sans-serif",
                        podiumCdsTypography960To1439Oversize2: "500 6rem/1.35 'Noto Sans JP Medium', Helvetica, Arial, 'Hiragino Sans', 'Hiragino Kaku Gothic Pro', 'ヒラギノ角ゴ', 'MS Pgothic', 'ＭＳ Ｐゴシック', sans-serif",
                        podiumCdsTypography960To1439Oversize3: "500 4.75rem/1.35 'Noto Sans JP Medium', Helvetica, Arial, 'Hiragino Sans', 'Hiragino Kaku Gothic Pro', 'ヒラギノ角ゴ', 'MS Pgothic', 'ＭＳ Ｐゴシック', sans-serif",
                        podiumCdsTypography960To1919Display1: "900 6rem/1.2 'Noto Sans JP Black', Helvetica, Arial, 'Hiragino Sans', 'Hiragino Kaku Gothic Pro', 'ヒラギノ角ゴ', 'MS Pgothic', 'ＭＳ Ｐゴシック', sans-serif",
                        podiumCdsTypography960To1919Display2: "900 4.75rem/1.2 'Noto Sans JP Black', Helvetica, Arial, 'Hiragino Sans', 'Hiragino Kaku Gothic Pro', 'ヒラギノ角ゴ', 'MS Pgothic', 'ＭＳ Ｐゴシック', sans-serif",
                        podiumCdsTypography960To1919Display3: "900 3.75rem/1.2 'Noto Sans JP Black', Helvetica, Arial, 'Hiragino Sans', 'Hiragino Kaku Gothic Pro', 'ヒラギノ角ゴ', 'MS Pgothic', 'ＭＳ Ｐゴシック', sans-serif",
                        podiumCdsTypography960To1919Display4: "900 3rem/1.2 'Noto Sans JP Black', Helvetica, Arial, 'Hiragino Sans', 'Hiragino Kaku Gothic Pro', 'ヒラギノ角ゴ', 'MS Pgothic', 'ＭＳ Ｐゴシック', sans-serif",
                        podiumCdsTypography960To1919Conversation1: "300 3rem/1.5 'Noto Sans JP', Helvetica, Arial, 'Hiragino Sans', 'Hiragino Kaku Gothic Pro', 'ヒラギノ角ゴ', 'MS Pgothic', 'ＭＳ Ｐゴシック', sans-serif",
                        podiumCdsTypography960To1919Conversation2: "300 2.5rem/1.5 'Noto Sans JP', Helvetica, Arial, 'Hiragino Sans', 'Hiragino Kaku Gothic Pro', 'ヒラギノ角ゴ', 'MS Pgothic', 'ＭＳ Ｐゴシック', sans-serif",
                        podiumCdsTypography960To1919Conversation3: "300 2rem/1.5 'Noto Sans JP', Helvetica, Arial, 'Hiragino Sans', 'Hiragino Kaku Gothic Pro', 'ヒラギノ角ゴ', 'MS Pgothic', 'ＭＳ Ｐゴシック', sans-serif",
                        podiumCdsTypography960To1919Conversation4: "300 1.25rem/1.75 'Noto Sans JP', Helvetica, Arial, 'Hiragino Sans', 'Hiragino Kaku Gothic Pro', 'ヒラギノ角ゴ', 'MS Pgothic', 'ＭＳ Ｐゴシック', sans-serif",
                        podiumCdsTypography960PlusEditorialBody1: "400 1.25rem/1.75 'Noto Sans JP', Helvetica, Arial, 'Hiragino Sans', 'Hiragino Kaku Gothic Pro', 'ヒラギノ角ゴ', 'MS Pgothic', 'ＭＳ Ｐゴシック', sans-serif",
                        podiumCdsTypography960PlusEditorialBody1Strong: "500 1.25rem/1.75 'Noto Sans JP Medium', Helvetica, Arial, 'Hiragino Sans', 'Hiragino Kaku Gothic Pro', 'ヒラギノ角ゴ', 'MS Pgothic', 'ＭＳ Ｐゴシック', sans-serif",
                        podiumCdsTypography1440To1919Oversize1: "500 9.375rem/1.35 'Noto Sans JP Medium', Helvetica, Arial, 'Hiragino Sans', 'Hiragino Kaku Gothic Pro', 'ヒラギノ角ゴ', 'MS Pgothic', 'ＭＳ Ｐゴシック', sans-serif",
                        podiumCdsTypography1440To1919Oversize2: "500 7.5rem/1.35 'Noto Sans JP Medium', Helvetica, Arial, 'Hiragino Sans', 'Hiragino Kaku Gothic Pro', 'ヒラギノ角ゴ', 'MS Pgothic', 'ＭＳ Ｐゴシック', sans-serif",
                        podiumCdsTypography1440To1919Oversize3: "500 6rem/1.35 'Noto Sans JP Medium', Helvetica, Arial, 'Hiragino Sans', 'Hiragino Kaku Gothic Pro', 'ヒラギノ角ゴ', 'MS Pgothic', 'ＭＳ Ｐゴシック', sans-serif",
                        podiumCdsTypography1920PlusOversize1: "500 11.625rem/1.35 'Noto Sans JP Medium', Helvetica, Arial, 'Hiragino Sans', 'Hiragino Kaku Gothic Pro', 'ヒラギノ角ゴ', 'MS Pgothic', 'ＭＳ Ｐゴシック', sans-serif",
                        podiumCdsTypography1920PlusOversize2: "500 9.375rem/1.35 'Noto Sans JP Medium', Helvetica, Arial, 'Hiragino Sans', 'Hiragino Kaku Gothic Pro', 'ヒラギノ角ゴ', 'MS Pgothic', 'ＭＳ Ｐゴシック', sans-serif",
                        podiumCdsTypography1920PlusOversize3: "500 7.5rem/1.35 'Noto Sans JP Medium', Helvetica, Arial, 'Hiragino Sans', 'Hiragino Kaku Gothic Pro', 'ヒラギノ角ゴ', 'MS Pgothic', 'ＭＳ Ｐゴシック', sans-serif",
                        podiumCdsTypography1920PlusDisplay1: "900 7.5rem/1.2 'Noto Sans JP Black', Helvetica, Arial, 'Hiragino Sans', 'Hiragino Kaku Gothic Pro', 'ヒラギノ角ゴ', 'MS Pgothic', 'ＭＳ Ｐゴシック', sans-serif",
                        podiumCdsTypography1920PlusDisplay2: "900 6rem/1.2 'Noto Sans JP Black', Helvetica, Arial, 'Hiragino Sans', 'Hiragino Kaku Gothic Pro', 'ヒラギノ角ゴ', 'MS Pgothic', 'ＭＳ Ｐゴシック', sans-serif",
                        podiumCdsTypography1920PlusDisplay3: "900 4.75rem/1.2 'Noto Sans JP Black', Helvetica, Arial, 'Hiragino Sans', 'Hiragino Kaku Gothic Pro', 'ヒラギノ角ゴ', 'MS Pgothic', 'ＭＳ Ｐゴシック', sans-serif",
                        podiumCdsTypography1920PlusDisplay4: "900 3.75rem/1.2 'Noto Sans JP Black', Helvetica, Arial, 'Hiragino Sans', 'Hiragino Kaku Gothic Pro', 'ヒラギノ角ゴ', 'MS Pgothic', 'ＭＳ Ｐゴシック', sans-serif",
                        podiumCdsTypography1920PlusTitle1: "500 3rem/1.5 'Noto Sans JP Medium', Helvetica, Arial, 'Hiragino Sans', 'Hiragino Kaku Gothic Pro', 'ヒラギノ角ゴ', 'MS Pgothic', 'ＭＳ Ｐゴシック', sans-serif",
                        podiumCdsTypography1920PlusTitle2: "500 2.5rem/1.5 'Noto Sans JP Medium', Helvetica, Arial, 'Hiragino Sans', 'Hiragino Kaku Gothic Pro', 'ヒラギノ角ゴ', 'MS Pgothic', 'ＭＳ Ｐゴシック', sans-serif",
                        podiumCdsTypography1920PlusTitle3: "500 2rem/1.5 'Noto Sans JP Medium', Helvetica, Arial, 'Hiragino Sans', 'Hiragino Kaku Gothic Pro', 'ヒラギノ角ゴ', 'MS Pgothic', 'ＭＳ Ｐゴシック', sans-serif",
                        podiumCdsTypography1920PlusTitle4: "500 1.5rem/1.5 'Noto Sans JP Medium', Helvetica, Arial, 'Hiragino Sans', 'Hiragino Kaku Gothic Pro', 'ヒラギノ角ゴ', 'MS Pgothic', 'ＭＳ Ｐゴシック', sans-serif",
                        podiumCdsTypography1920PlusConversation1: "300 3.75rem/1.5 'Noto Sans JP', Helvetica, Arial, 'Hiragino Sans', 'Hiragino Kaku Gothic Pro', 'ヒラギノ角ゴ', 'MS Pgothic', 'ＭＳ Ｐゴシック', sans-serif",
                        podiumCdsTypography1920PlusConversation2: "300 3rem/1.5 'Noto Sans JP', Helvetica, Arial, 'Hiragino Sans', 'Hiragino Kaku Gothic Pro', 'ヒラギノ角ゴ', 'MS Pgothic', 'ＭＳ Ｐゴシック', sans-serif",
                        podiumCdsTypography1920PlusConversation3: "300 2.5rem/1.5 'Noto Sans JP', Helvetica, Arial, 'Hiragino Sans', 'Hiragino Kaku Gothic Pro', 'ヒラギノ角ゴ', 'MS Pgothic', 'ＭＳ Ｐゴシック', sans-serif",
                        podiumCdsTypography1920PlusConversation4: "300 1.25rem/1.75 'Noto Sans JP', Helvetica, Arial, 'Hiragino Sans', 'Hiragino Kaku Gothic Pro', 'ヒラギノ角ゴ', 'MS Pgothic', 'ＭＳ Ｐゴシック', sans-serif",
                        podiumCdsTypographyBody1: "400 1rem/1.75 'Noto Sans JP', Helvetica, Arial, 'Hiragino Sans', 'Hiragino Kaku Gothic Pro', 'ヒラギノ角ゴ', 'MS Pgothic', 'ＭＳ Ｐゴシック', sans-serif",
                        podiumCdsTypographyBody1Strong: "500 1rem/1.75 'Noto Sans JP Medium', Helvetica, Arial, 'Hiragino Sans', 'Hiragino Kaku Gothic Pro', 'ヒラギノ角ゴ', 'MS Pgothic', 'ＭＳ Ｐゴシック', sans-serif",
                        podiumCdsTypographyBody2: "400 .875rem/1.75 'Noto Sans JP', Helvetica, Arial, 'Hiragino Sans', 'Hiragino Kaku Gothic Pro', 'ヒラギノ角ゴ', 'MS Pgothic', 'ＭＳ Ｐゴシック', sans-serif",
                        podiumCdsTypographyBody2Strong: "500 .875rem/1.75 'Noto Sans JP Medium', Helvetica, Arial, 'Hiragino Sans', 'Hiragino Kaku Gothic Pro', 'ヒラギノ角ゴ', 'MS Pgothic', 'ＭＳ Ｐゴシック', sans-serif",
                        podiumCdsTypographyBody3: "400 .75rem/1.75 'Noto Sans JP', Helvetica, Arial, 'Hiragino Sans', 'Hiragino Kaku Gothic Pro', 'ヒラギノ角ゴ', 'MS Pgothic', 'ＭＳ Ｐゴシック', sans-serif",
                        podiumCdsTypographyBody3Strong: "500 .75rem/1.75 'Noto Sans JP Medium', Helvetica, Arial, 'Hiragino Sans', 'Hiragino Kaku Gothic Pro', 'ヒラギノ角ゴ', 'MS Pgothic', 'ＭＳ Ｐゴシック', sans-serif",
                        podiumCdsTypographyBody4: "400 .625rem/1.75 'Noto Sans JP', Helvetica, Arial, 'Hiragino Sans', 'Hiragino Kaku Gothic Pro', 'ヒラギノ角ゴ', 'MS Pgothic', 'ＭＳ Ｐゴシック', sans-serif",
                        podiumCdsTypographyBody4Strong: "500 .625rem/1.75 'Noto Sans JP Medium', Helvetica, Arial, 'Hiragino Sans', 'Hiragino Kaku Gothic Pro', 'ヒラギノ角ゴ', 'MS Pgothic', 'ＭＳ Ｐゴシック', sans-serif",
                        podiumCdsTypographyLegal: "400 .875rem/1.75 'Noto Sans JP', Helvetica, Arial, 'Hiragino Sans', 'Hiragino Kaku Gothic Pro', 'ヒラギノ角ゴ', 'MS Pgothic', 'ＭＳ Ｐゴシック', sans-serif"
                    },
                    "ko-kr": {
                        podiumCdsTypography320To959Oversize1: "500 6rem/1.35 'Noto Sans KR Medium', Helvetica, Arial, 'Apple SD Gothic Neo', 'Apple SD 산돌고딕 Neo', 'Malgun Gothic', '맑은 고딕', sans-serif",
                        podiumCdsTypography320To959Oversize2: "500 4.75rem/1.35 'Noto Sans KR Medium', Helvetica, Arial, 'Apple SD Gothic Neo', 'Apple SD 산돌고딕 Neo', 'Malgun Gothic', '맑은 고딕', sans-serif",
                        podiumCdsTypography320To959Oversize3: "500 3.75rem/1.35 'Noto Sans KR Medium', Helvetica, Arial, 'Apple SD Gothic Neo', 'Apple SD 산돌고딕 Neo', 'Malgun Gothic', '맑은 고딕', sans-serif",
                        podiumCdsTypography320To959Display1: "900 3rem/1.2 'Noto Sans KR Black', Helvetica, Arial, 'Apple SD Gothic Neo', 'Apple SD 산돌고딕 Neo', 'Malgun Gothic', '맑은 고딕', sans-serif",
                        podiumCdsTypography320To959Display2: "900 2.5rem/1.2 'Noto Sans KR Black', Helvetica, Arial, 'Apple SD Gothic Neo', 'Apple SD 산돌고딕 Neo', 'Malgun Gothic', '맑은 고딕', sans-serif",
                        podiumCdsTypography320To959Display3: "900 2rem/1.25 'Noto Sans KR Black', Helvetica, Arial, 'Apple SD Gothic Neo', 'Apple SD 산돌고딕 Neo', 'Malgun Gothic', '맑은 고딕', sans-serif",
                        podiumCdsTypography320To959Display4: "900 1.5rem/1.25 'Noto Sans KR Black', Helvetica, Arial, 'Apple SD Gothic Neo', 'Apple SD 산돌고딕 Neo', 'Malgun Gothic', '맑은 고딕', sans-serif",
                        podiumCdsTypography320To959Conversation1: "300 2rem/1.5 'Noto Sans KR', Helvetica, Arial, 'Apple SD Gothic Neo', 'Apple SD 산돌고딕 Neo', 'Malgun Gothic', '맑은 고딕', sans-serif",
                        podiumCdsTypography320To959Conversation2: "300 1.5rem/1.5 'Noto Sans KR', Helvetica, Arial, 'Apple SD Gothic Neo', 'Apple SD 산돌고딕 Neo', 'Malgun Gothic', '맑은 고딕', sans-serif",
                        podiumCdsTypography320To959Conversation3: "300 1.25rem/1.5 'Noto Sans KR', Helvetica, Arial, 'Apple SD Gothic Neo', 'Apple SD 산돌고딕 Neo', 'Malgun Gothic', '맑은 고딕', sans-serif",
                        podiumCdsTypography320To959Conversation4: "300 1rem/1.25 'Noto Sans KR', Helvetica, Arial, 'Apple SD Gothic Neo', 'Apple SD 산돌고딕 Neo', 'Malgun Gothic', '맑은 고딕', sans-serif",
                        podiumCdsTypography320To959EditorialBody1: "400 1rem/1.75 'Noto Sans KR', Helvetica, Arial, 'Apple SD Gothic Neo', 'Apple SD 산돌고딕 Neo', 'Malgun Gothic', '맑은 고딕', sans-serif",
                        podiumCdsTypography320To959EditorialBody1Strong: "500 1rem/1.75 'Noto Sans KR Medium', Helvetica, Arial, 'Apple SD Gothic Neo', 'Apple SD 산돌고딕 Neo', 'Malgun Gothic', '맑은 고딕', sans-serif",
                        podiumCdsTypography320To1919Title1: "500 2.5rem/1.5 'Noto Sans KR Medium', Helvetica, Arial, 'Apple SD Gothic Neo', 'Apple SD 산돌고딕 Neo', 'Malgun Gothic', '맑은 고딕', sans-serif",
                        podiumCdsTypography320To1919Title2: "500 2rem/1.5 'Noto Sans KR Medium', Helvetica, Arial, 'Apple SD Gothic Neo', 'Apple SD 산돌고딕 Neo', 'Malgun Gothic', '맑은 고딕', sans-serif",
                        podiumCdsTypography320To1919Title3: "500 1.5rem/1.5 'Noto Sans KR Medium', Helvetica, Arial, 'Apple SD Gothic Neo', 'Apple SD 산돌고딕 Neo', 'Malgun Gothic', '맑은 고딕', sans-serif",
                        podiumCdsTypography320To1919Title4: "500 1.25rem/1.75 'Noto Sans KR Medium', Helvetica, Arial, 'Apple SD Gothic Neo', 'Apple SD 산돌고딕 Neo', 'Malgun Gothic', '맑은 고딕', sans-serif",
                        podiumCdsTypography960To1439Oversize1: "500 7.5rem/1.35 'Noto Sans KR Medium', Helvetica, Arial, 'Apple SD Gothic Neo', 'Apple SD 산돌고딕 Neo', 'Malgun Gothic', '맑은 고딕', sans-serif",
                        podiumCdsTypography960To1439Oversize2: "500 6rem/1.35 'Noto Sans KR Medium', Helvetica, Arial, 'Apple SD Gothic Neo', 'Apple SD 산돌고딕 Neo', 'Malgun Gothic', '맑은 고딕', sans-serif",
                        podiumCdsTypography960To1439Oversize3: "500 4.75rem/1.35 'Noto Sans KR Medium', Helvetica, Arial, 'Apple SD Gothic Neo', 'Apple SD 산돌고딕 Neo', 'Malgun Gothic', '맑은 고딕', sans-serif",
                        podiumCdsTypography960To1919Display1: "900 6rem/1.2 'Noto Sans KR Black', Helvetica, Arial, 'Apple SD Gothic Neo', 'Apple SD 산돌고딕 Neo', 'Malgun Gothic', '맑은 고딕', sans-serif",
                        podiumCdsTypography960To1919Display2: "900 4.75rem/1.2 'Noto Sans KR Black', Helvetica, Arial, 'Apple SD Gothic Neo', 'Apple SD 산돌고딕 Neo', 'Malgun Gothic', '맑은 고딕', sans-serif",
                        podiumCdsTypography960To1919Display3: "900 3.75rem/1.2 'Noto Sans KR Black', Helvetica, Arial, 'Apple SD Gothic Neo', 'Apple SD 산돌고딕 Neo', 'Malgun Gothic', '맑은 고딕', sans-serif",
                        podiumCdsTypography960To1919Display4: "900 3rem/1.2 'Noto Sans KR Black', Helvetica, Arial, 'Apple SD Gothic Neo', 'Apple SD 산돌고딕 Neo', 'Malgun Gothic', '맑은 고딕', sans-serif",
                        podiumCdsTypography960To1919Conversation1: "300 3rem/1.5 'Noto Sans KR', Helvetica, Arial, 'Apple SD Gothic Neo', 'Apple SD 산돌고딕 Neo', 'Malgun Gothic', '맑은 고딕', sans-serif",
                        podiumCdsTypography960To1919Conversation2: "300 2.5rem/1.5 'Noto Sans KR', Helvetica, Arial, 'Apple SD Gothic Neo', 'Apple SD 산돌고딕 Neo', 'Malgun Gothic', '맑은 고딕', sans-serif",
                        podiumCdsTypography960To1919Conversation3: "300 2rem/1.5 'Noto Sans KR', Helvetica, Arial, 'Apple SD Gothic Neo', 'Apple SD 산돌고딕 Neo', 'Malgun Gothic', '맑은 고딕', sans-serif",
                        podiumCdsTypography960To1919Conversation4: "300 1.25rem/1.75 'Noto Sans KR', Helvetica, Arial, 'Apple SD Gothic Neo', 'Apple SD 산돌고딕 Neo', 'Malgun Gothic', '맑은 고딕', sans-serif",
                        podiumCdsTypography960PlusEditorialBody1: "400 1.25rem/1.75 'Noto Sans KR', Helvetica, Arial, 'Apple SD Gothic Neo', 'Apple SD 산돌고딕 Neo', 'Malgun Gothic', '맑은 고딕', sans-serif",
                        podiumCdsTypography960PlusEditorialBody1Strong: "500 1.25rem/1.75 'Noto Sans KR Medium', Helvetica, Arial, 'Apple SD Gothic Neo', 'Apple SD 산돌고딕 Neo', 'Malgun Gothic', '맑은 고딕', sans-serif",
                        podiumCdsTypography1440To1919Oversize1: "500 9.375rem/1.35 'Noto Sans KR Medium', Helvetica, Arial, 'Apple SD Gothic Neo', 'Apple SD 산돌고딕 Neo', 'Malgun Gothic', '맑은 고딕', sans-serif",
                        podiumCdsTypography1440To1919Oversize2: "500 7.5rem/1.35 'Noto Sans KR Medium', Helvetica, Arial, 'Apple SD Gothic Neo', 'Apple SD 산돌고딕 Neo', 'Malgun Gothic', '맑은 고딕', sans-serif",
                        podiumCdsTypography1440To1919Oversize3: "500 6rem/1.35 'Noto Sans KR Medium', Helvetica, Arial, 'Apple SD Gothic Neo', 'Apple SD 산돌고딕 Neo', 'Malgun Gothic', '맑은 고딕', sans-serif",
                        podiumCdsTypography1920PlusOversize1: "500 11.625rem/1.35 'Noto Sans KR Medium', Helvetica, Arial, 'Apple SD Gothic Neo', 'Apple SD 산돌고딕 Neo', 'Malgun Gothic', '맑은 고딕', sans-serif",
                        podiumCdsTypography1920PlusOversize2: "500 9.375rem/1.35 'Noto Sans KR Medium', Helvetica, Arial, 'Apple SD Gothic Neo', 'Apple SD 산돌고딕 Neo', 'Malgun Gothic', '맑은 고딕', sans-serif",
                        podiumCdsTypography1920PlusOversize3: "500 7.5rem/1.35 'Noto Sans KR Medium', Helvetica, Arial, 'Apple SD Gothic Neo', 'Apple SD 산돌고딕 Neo', 'Malgun Gothic', '맑은 고딕', sans-serif",
                        podiumCdsTypography1920PlusDisplay1: "900 7.5rem/1.2 'Noto Sans KR Black', Helvetica, Arial, 'Apple SD Gothic Neo', 'Apple SD 산돌고딕 Neo', 'Malgun Gothic', '맑은 고딕', sans-serif",
                        podiumCdsTypography1920PlusDisplay2: "900 6rem/1.2 'Noto Sans KR Black', Helvetica, Arial, 'Apple SD Gothic Neo', 'Apple SD 산돌고딕 Neo', 'Malgun Gothic', '맑은 고딕', sans-serif",
                        podiumCdsTypography1920PlusDisplay3: "900 4.75rem/1.2 'Noto Sans KR Black', Helvetica, Arial, 'Apple SD Gothic Neo', 'Apple SD 산돌고딕 Neo', 'Malgun Gothic', '맑은 고딕', sans-serif",
                        podiumCdsTypography1920PlusDisplay4: "900 3.75rem/1.2 'Noto Sans KR Black', Helvetica, Arial, 'Apple SD Gothic Neo', 'Apple SD 산돌고딕 Neo', 'Malgun Gothic', '맑은 고딕', sans-serif",
                        podiumCdsTypography1920PlusTitle1: "500 3rem/1.5 'Noto Sans KR Medium', Helvetica, Arial, 'Apple SD Gothic Neo', 'Apple SD 산돌고딕 Neo', 'Malgun Gothic', '맑은 고딕', sans-serif",
                        podiumCdsTypography1920PlusTitle2: "500 2.5rem/1.5 'Noto Sans KR Medium', Helvetica, Arial, 'Apple SD Gothic Neo', 'Apple SD 산돌고딕 Neo', 'Malgun Gothic', '맑은 고딕', sans-serif",
                        podiumCdsTypography1920PlusTitle3: "500 2rem/1.5 'Noto Sans KR Medium', Helvetica, Arial, 'Apple SD Gothic Neo', 'Apple SD 산돌고딕 Neo', 'Malgun Gothic', '맑은 고딕', sans-serif",
                        podiumCdsTypography1920PlusTitle4: "500 1.5rem/1.5 'Noto Sans KR Medium', Helvetica, Arial, 'Apple SD Gothic Neo', 'Apple SD 산돌고딕 Neo', 'Malgun Gothic', '맑은 고딕', sans-serif",
                        podiumCdsTypography1920PlusConversation1: "300 3.75rem/1.5 'Noto Sans KR', Helvetica, Arial, 'Apple SD Gothic Neo', 'Apple SD 산돌고딕 Neo', 'Malgun Gothic', '맑은 고딕', sans-serif",
                        podiumCdsTypography1920PlusConversation2: "300 3rem/1.5 'Noto Sans KR', Helvetica, Arial, 'Apple SD Gothic Neo', 'Apple SD 산돌고딕 Neo', 'Malgun Gothic', '맑은 고딕', sans-serif",
                        podiumCdsTypography1920PlusConversation3: "300 2.5rem/1.5 'Noto Sans KR', Helvetica, Arial, 'Apple SD Gothic Neo', 'Apple SD 산돌고딕 Neo', 'Malgun Gothic', '맑은 고딕', sans-serif",
                        podiumCdsTypography1920PlusConversation4: "300 1.25rem/1.75 'Noto Sans KR', Helvetica, Arial, 'Apple SD Gothic Neo', 'Apple SD 산돌고딕 Neo', 'Malgun Gothic', '맑은 고딕', sans-serif",
                        podiumCdsTypographyBody1: "400 1rem/1.75 'Noto Sans KR', Helvetica, Arial, 'Apple SD Gothic Neo', 'Apple SD 산돌고딕 Neo', 'Malgun Gothic', '맑은 고딕', sans-serif",
                        podiumCdsTypographyBody1Strong: "500 1rem/1.75 'Noto Sans KR Medium', Helvetica, Arial, 'Apple SD Gothic Neo', 'Apple SD 산돌고딕 Neo', 'Malgun Gothic', '맑은 고딕', sans-serif",
                        podiumCdsTypographyBody2: "400 .875rem/1.75 'Noto Sans KR', Helvetica, Arial, 'Apple SD Gothic Neo', 'Apple SD 산돌고딕 Neo', 'Malgun Gothic', '맑은 고딕', sans-serif",
                        podiumCdsTypographyBody2Strong: "500 .875rem/1.75 'Noto Sans KR Medium', Helvetica, Arial, 'Apple SD Gothic Neo', 'Apple SD 산돌고딕 Neo', 'Malgun Gothic', '맑은 고딕', sans-serif",
                        podiumCdsTypographyBody3: "400 .75rem/1.75 'Noto Sans KR', Helvetica, Arial, 'Apple SD Gothic Neo', 'Apple SD 산돌고딕 Neo', 'Malgun Gothic', '맑은 고딕', sans-serif",
                        podiumCdsTypographyBody3Strong: "500 .75rem/1.75 'Noto Sans KR Medium', Helvetica, Arial, 'Apple SD Gothic Neo', 'Apple SD 산돌고딕 Neo', 'Malgun Gothic', '맑은 고딕', sans-serif",
                        podiumCdsTypographyBody4: "400 .625rem/1.75 'Noto Sans KR', Helvetica, Arial, 'Apple SD Gothic Neo', 'Apple SD 산돌고딕 Neo', 'Malgun Gothic', '맑은 고딕', sans-serif",
                        podiumCdsTypographyBody4Strong: "500 .625rem/1.75 'Noto Sans KR Medium', Helvetica, Arial, 'Apple SD Gothic Neo', 'Apple SD 산돌고딕 Neo', 'Malgun Gothic', '맑은 고딕', sans-serif",
                        podiumCdsTypographyLegal: "400 .875rem/1.75 'Noto Sans KR', Helvetica, Arial, 'Apple SD Gothic Neo', 'Apple SD 산돌고딕 Neo', 'Malgun Gothic', '맑은 고딕', sans-serif"
                    },
                    get "nl-en" () {
                        return this["cs-cz"]
                    },
                    get "nl-nl" () {
                        return this["cs-cz"]
                    },
                    get "no-no" () {
                        return this["cs-cz"]
                    },
                    get "pl-pl" () {
                        return this["ca-es"]
                    },
                    get "pt-br" () {
                        return this["ca-es"]
                    },
                    get "pt-pt" () {
                        return this["ca-es"]
                    },
                    "ru-ru": {
                        podiumCdsTypography320To959Oversize1: "500 6rem/1.2 'HelveticaNeueLTW1G-Md', Helvetica, Arial, sans-serif",
                        podiumCdsTypography320To959Oversize2: "500 4.75rem/1.2 'HelveticaNeueLTW1G-Md', Helvetica, Arial, sans-serif",
                        podiumCdsTypography320To959Oversize3: "500 3.75rem/1.2 'HelveticaNeueLTW1G-Md', Helvetica, Arial, sans-serif",
                        podiumCdsTypography320To959Display1: "800 3rem/1.1 'Nike Futura ND','HelveticaNeueLTW1G-Md', Helvetica, Arial, sans-serif",
                        podiumCdsTypography320To959Display2: "800 2.5rem/1.2 'Nike Futura ND','HelveticaNeueLTW1G-Md', Helvetica, Arial, sans-serif",
                        podiumCdsTypography320To959Display3: "800 2rem/1.2 'Nike Futura ND','HelveticaNeueLTW1G-Md', Helvetica, Arial, sans-serif",
                        podiumCdsTypography320To959Display4: "800 1.5rem/1.2 'Nike Futura ND','HelveticaNeueLTW1G-Md', Helvetica, Arial, sans-serif",
                        podiumCdsTypography320To959Conversation1: "300 2rem/1.2 'HelveticaNeueLTW1G-Roman', Helvetica, Arial, sans-serif",
                        podiumCdsTypography320To959Conversation2: "300 1.5rem/1.2 'HelveticaNeueLTW1G-Roman', Helvetica, Arial, sans-serif",
                        podiumCdsTypography320To959Conversation3: "300 1.25rem/1.2 'HelveticaNeueLTW1G-Roman', Helvetica, Arial, sans-serif",
                        podiumCdsTypography320To959Conversation4: "300 1rem/1.5 'HelveticaNeueLTW1G-Roman', Helvetica, Arial, sans-serif",
                        podiumCdsTypography320To959EditorialBody1: "400 1rem/1.5 'HelveticaNeueLTW1G-Roman', Helvetica, Arial, sans-serif",
                        podiumCdsTypography320To959EditorialBody1Strong: "500 1rem/1.5 'HelveticaNeueLTW1G-Md', Helvetica, Arial, sans-serif",
                        podiumCdsTypography320To1919Title1: "500 2.5rem/1.2 'HelveticaNeueLTW1G-Md', Helvetica, Arial, sans-serif",
                        podiumCdsTypography320To1919Title2: "500 2rem/1.2 'HelveticaNeueLTW1G-Md', Helvetica, Arial, sans-serif",
                        podiumCdsTypography320To1919Title3: "500 1.5rem/1.2 'HelveticaNeueLTW1G-Md', Helvetica, Arial, sans-serif",
                        podiumCdsTypography320To1919Title4: "500 1.25rem/1.5 'HelveticaNeueLTW1G-Md', Helvetica, Arial, sans-serif",
                        podiumCdsTypography960To1439Oversize1: "500 7.5rem/1.2 'HelveticaNeueLTW1G-Md', Helvetica, Arial, sans-serif",
                        podiumCdsTypography960To1439Oversize2: "500 6rem/1.2 'HelveticaNeueLTW1G-Md', Helvetica, Arial, sans-serif",
                        podiumCdsTypography960To1439Oversize3: "500 4.75rem/1.2 'HelveticaNeueLTW1G-Md', Helvetica, Arial, sans-serif",
                        podiumCdsTypography960To1919Display1: "800 6rem/1.1 'Nike Futura ND','HelveticaNeueLTW1G-Md', Helvetica, Arial, sans-serif",
                        podiumCdsTypography960To1919Display2: "800 4.75rem/1.1 'Nike Futura ND','HelveticaNeueLTW1G-Md', Helvetica, Arial, sans-serif",
                        podiumCdsTypography960To1919Display3: "800 3.75rem/1.1 'Nike Futura ND','HelveticaNeueLTW1G-Md', Helvetica, Arial, sans-serif",
                        podiumCdsTypography960To1919Display4: "800 3rem/1.1 'Nike Futura ND','HelveticaNeueLTW1G-Md', Helvetica, Arial, sans-serif",
                        podiumCdsTypography960To1919Conversation1: "300 3rem/1.2 'HelveticaNeueLTW1G-Roman', Helvetica, Arial, sans-serif",
                        podiumCdsTypography960To1919Conversation2: "300 2.5rem/1.2 'HelveticaNeueLTW1G-Roman', Helvetica, Arial, sans-serif",
                        podiumCdsTypography960To1919Conversation3: "300 2rem/1.2 'HelveticaNeueLTW1G-Roman', Helvetica, Arial, sans-serif",
                        podiumCdsTypography960To1919Conversation4: "300 1.25rem/1.5 'HelveticaNeueLTW1G-Roman', Helvetica, Arial, sans-serif",
                        podiumCdsTypography960PlusEditorialBody1: "400 1.25rem/1.5 'HelveticaNeueLTW1G-Roman', Helvetica, Arial, sans-serif",
                        podiumCdsTypography960PlusEditorialBody1Strong: "500 1.25rem/1.5 'HelveticaNeueLTW1G-Md', Helvetica, Arial, sans-serif",
                        podiumCdsTypography1440To1919Oversize1: "500 9.375rem/1.2 'HelveticaNeueLTW1G-Md', Helvetica, Arial, sans-serif",
                        podiumCdsTypography1440To1919Oversize2: "500 7.5rem/1.2 'HelveticaNeueLTW1G-Md', Helvetica, Arial, sans-serif",
                        podiumCdsTypography1440To1919Oversize3: "500 6rem/1.2 'HelveticaNeueLTW1G-Md', Helvetica, Arial, sans-serif",
                        podiumCdsTypography1920PlusOversize1: "500 11.625rem/1.2 'HelveticaNeueLTW1G-Md', Helvetica, Arial, sans-serif",
                        podiumCdsTypography1920PlusOversize2: "500 9.375rem/1.2 'HelveticaNeueLTW1G-Md', Helvetica, Arial, sans-serif",
                        podiumCdsTypography1920PlusOversize3: "500 7.5rem/1.2 'HelveticaNeueLTW1G-Md', Helvetica, Arial, sans-serif",
                        podiumCdsTypography1920PlusDisplay1: "800 7.5rem/1.1 'Nike Futura ND','HelveticaNeueLTW1G-Md', Helvetica, Arial, sans-serif",
                        podiumCdsTypography1920PlusDisplay2: "800 6rem/1.1 'Nike Futura ND','HelveticaNeueLTW1G-Md', Helvetica, Arial, sans-serif",
                        podiumCdsTypography1920PlusDisplay3: "800 4.75rem/1.1 'Nike Futura ND','HelveticaNeueLTW1G-Md', Helvetica, Arial, sans-serif",
                        podiumCdsTypography1920PlusDisplay4: "800 3.75rem/1.1 'Nike Futura ND','HelveticaNeueLTW1G-Md', Helvetica, Arial, sans-serif",
                        podiumCdsTypography1920PlusTitle1: "500 3rem/1.2 'HelveticaNeueLTW1G-Md', Helvetica, Arial, sans-serif",
                        podiumCdsTypography1920PlusTitle2: "500 2.5rem/1.2 'HelveticaNeueLTW1G-Md', Helvetica, Arial, sans-serif",
                        podiumCdsTypography1920PlusTitle3: "500 2rem/1.2 'HelveticaNeueLTW1G-Md', Helvetica, Arial, sans-serif",
                        podiumCdsTypography1920PlusTitle4: "500 1.5rem/1.2 'HelveticaNeueLTW1G-Md', Helvetica, Arial, sans-serif",
                        podiumCdsTypography1920PlusConversation1: "300 3.75rem/1.2 'HelveticaNeueLTW1G-Roman', Helvetica, Arial, sans-serif",
                        podiumCdsTypography1920PlusConversation2: "300 3rem/1.2 'HelveticaNeueLTW1G-Roman', Helvetica, Arial, sans-serif",
                        podiumCdsTypography1920PlusConversation3: "300 2.5rem/1.2 'HelveticaNeueLTW1G-Roman', Helvetica, Arial, sans-serif",
                        podiumCdsTypography1920PlusConversation4: "300 1.25rem/1.5 'HelveticaNeueLTW1G-Roman', Helvetica, Arial, sans-serif",
                        podiumCdsTypographyBody1: "400 1rem/1.5 'HelveticaNeueLTW1G-Roman', Helvetica, Arial, sans-serif",
                        podiumCdsTypographyBody1Strong: "500 1rem/1.5 'HelveticaNeueLTW1G-Md', Helvetica, Arial, sans-serif",
                        podiumCdsTypographyBody2: "400 .875rem/1.5 'HelveticaNeueLTW1G-Roman', Helvetica, Arial, sans-serif",
                        podiumCdsTypographyBody2Strong: "500 .875rem/1.5 'HelveticaNeueLTW1G-Md', Helvetica, Arial, sans-serif",
                        podiumCdsTypographyBody3: "400 .75rem/1.5 'HelveticaNeueLTW1G-Roman', Helvetica, Arial, sans-serif",
                        podiumCdsTypographyBody3Strong: "500 .75rem/1.5 'HelveticaNeueLTW1G-Md', Helvetica, Arial, sans-serif",
                        podiumCdsTypographyBody4: "400 .625rem/1.5 'HelveticaNeueLTW1G-Roman', Helvetica, Arial, sans-serif",
                        podiumCdsTypographyBody4Strong: "500 .625rem/1.5 'HelveticaNeueLTW1G-Md', Helvetica, Arial, sans-serif",
                        podiumCdsTypographyLegal: "400 .875rem/1.5 'HelveticaNeueLTW1G-Roman', Helvetica, Arial, sans-serif"
                    },
                    get "sv-se" () {
                        return this["cs-cz"]
                    },
                    "th-th": {
                        podiumCdsTypography320To959Oversize1: "700 6rem/1.75 'Helvetica Neue LT Thai Bold', Helvetica, Arial, Krungthep, 'กรุงเทพ', Thonburi, 'ธนบุรี', 'Leelawadee UI', 'ลีลาวดี UI', Tahoma, 'ทาโฮม่า', sans-serif",
                        podiumCdsTypography320To959Oversize2: "700 4.75rem/1.75 'Helvetica Neue LT Thai Bold', Helvetica, Arial, Krungthep, 'กรุงเทพ', Thonburi, 'ธนบุรี', 'Leelawadee UI', 'ลีลาวดี UI', Tahoma, 'ทาโฮม่า', sans-serif",
                        podiumCdsTypography320To959Oversize3: "700 3.75rem/1.75 'Helvetica Neue LT Thai Bold', Helvetica, Arial, Krungthep, 'กรุงเทพ', Thonburi, 'ธนบุรี', 'Leelawadee UI', 'ลีลาวดี UI', Tahoma, 'ทาโฮม่า', sans-serif",
                        podiumCdsTypography320To959Display1: "800 3rem/1.75 'AvenirNextThaiModern-XtraBd','Helvetica Neue LT Thai Bold', Helvetica, Arial, Krungthep, 'กรุงเทพ', Thonburi, 'ธนบุรี', 'Leelawadee UI', 'ลีลาวดี UI', Tahoma, 'ทาโฮม่า', sans-serif",
                        podiumCdsTypography320To959Display2: "800 2.5rem/1.75 'AvenirNextThaiModern-XtraBd','Helvetica Neue LT Thai Bold', Helvetica, Arial, Krungthep, 'กรุงเทพ', Thonburi, 'ธนบุรี', 'Leelawadee UI', 'ลีลาวดี UI', Tahoma, 'ทาโฮม่า', sans-serif",
                        podiumCdsTypography320To959Display3: "800 2rem/1.75 'AvenirNextThaiModern-XtraBd','Helvetica Neue LT Thai Bold', Helvetica, Arial, Krungthep, 'กรุงเทพ', Thonburi, 'ธนบุรี', 'Leelawadee UI', 'ลีลาวดี UI', Tahoma, 'ทาโฮม่า', sans-serif",
                        podiumCdsTypography320To959Display4: "800 1.5rem/1.75 'AvenirNextThaiModern-XtraBd','Helvetica Neue LT Thai Bold', Helvetica, Arial, Krungthep, 'กรุงเทพ', Thonburi, 'ธนบุรี', 'Leelawadee UI', 'ลีลาวดี UI', Tahoma, 'ทาโฮม่า', sans-serif",
                        podiumCdsTypography320To959Conversation1: "300 2rem/1.75 'Helvetica Neue LT Thai', Helvetica, Arial, Krungthep, 'กรุงเทพ', Thonburi, 'ธนบุรี', 'Leelawadee UI', 'ลีลาวดี UI', Tahoma, 'ทาโฮม่า', sans-serif",
                        podiumCdsTypography320To959Conversation2: "300 1.5rem/1.75 'Helvetica Neue LT Thai', Helvetica, Arial, Krungthep, 'กรุงเทพ', Thonburi, 'ธนบุรี', 'Leelawadee UI', 'ลีลาวดี UI', Tahoma, 'ทาโฮม่า', sans-serif",
                        podiumCdsTypography320To959Conversation3: "300 1.25rem/1.75 'Helvetica Neue LT Thai', Helvetica, Arial, Krungthep, 'กรุงเทพ', Thonburi, 'ธนบุรี', 'Leelawadee UI', 'ลีลาวดี UI', Tahoma, 'ทาโฮม่า', sans-serif",
                        podiumCdsTypography320To959Conversation4: "300 1rem/1.75 'Helvetica Neue LT Thai', Helvetica, Arial, Krungthep, 'กรุงเทพ', Thonburi, 'ธนบุรี', 'Leelawadee UI', 'ลีลาวดี UI', Tahoma, 'ทาโฮม่า', sans-serif",
                        podiumCdsTypography320To959EditorialBody1: "400 1rem/1.75 'Helvetica Neue LT Thai', Helvetica, Arial, Krungthep, 'กรุงเทพ', Thonburi, 'ธนบุรี', 'Leelawadee UI', 'ลีลาวดี UI', Tahoma, 'ทาโฮม่า', sans-serif",
                        podiumCdsTypography320To959EditorialBody1Strong: "500 1rem/1.75 'Helvetica Neue LT Thai Bold', Helvetica, Arial, Krungthep, 'กรุงเทพ', Thonburi, 'ธนบุรี', 'Leelawadee UI', 'ลีลาวดี UI', Tahoma, 'ทาโฮม่า', sans-serif",
                        podiumCdsTypography320To1919Title1: "700 2.5rem/1.75 'Helvetica Neue LT Thai Bold', Helvetica, Arial, Krungthep, 'กรุงเทพ', Thonburi, 'ธนบุรี', 'Leelawadee UI', 'ลีลาวดี UI', Tahoma, 'ทาโฮม่า', sans-serif",
                        podiumCdsTypography320To1919Title2: "700 2rem/1.75 'Helvetica Neue LT Thai Bold', Helvetica, Arial, Krungthep, 'กรุงเทพ', Thonburi, 'ธนบุรี', 'Leelawadee UI', 'ลีลาวดี UI', Tahoma, 'ทาโฮม่า', sans-serif",
                        podiumCdsTypography320To1919Title3: "700 1.5rem/1.75 'Helvetica Neue LT Thai Bold', Helvetica, Arial, Krungthep, 'กรุงเทพ', Thonburi, 'ธนบุรี', 'Leelawadee UI', 'ลีลาวดี UI', Tahoma, 'ทาโฮม่า', sans-serif",
                        podiumCdsTypography320To1919Title4: "700 1.25rem/1.75 'Helvetica Neue LT Thai Bold', Helvetica, Arial, Krungthep, 'กรุงเทพ', Thonburi, 'ธนบุรี', 'Leelawadee UI', 'ลีลาวดี UI', Tahoma, 'ทาโฮม่า', sans-serif",
                        podiumCdsTypography960To1439Oversize1: "700 7.5rem/1.75 'Helvetica Neue LT Thai Bold', Helvetica, Arial, Krungthep, 'กรุงเทพ', Thonburi, 'ธนบุรี', 'Leelawadee UI', 'ลีลาวดี UI', Tahoma, 'ทาโฮม่า', sans-serif",
                        podiumCdsTypography960To1439Oversize2: "700 6rem/1.75 'Helvetica Neue LT Thai Bold', Helvetica, Arial, Krungthep, 'กรุงเทพ', Thonburi, 'ธนบุรี', 'Leelawadee UI', 'ลีลาวดี UI', Tahoma, 'ทาโฮม่า', sans-serif",
                        podiumCdsTypography960To1439Oversize3: "700 4.75rem/1.75 'Helvetica Neue LT Thai Bold', Helvetica, Arial, Krungthep, 'กรุงเทพ', Thonburi, 'ธนบุรี', 'Leelawadee UI', 'ลีลาวดี UI', Tahoma, 'ทาโฮม่า', sans-serif",
                        podiumCdsTypography960To1439Title1: "700 2.5rem/1.75 'Helvetica Neue LT Thai Bold', Helvetica, Arial, Krungthep, 'กรุงเทพ', Thonburi, 'ธนบุรี', 'Leelawadee UI', 'ลีลาวดี UI', Tahoma, 'ทาโฮม่า', sans-serif",
                        podiumCdsTypography960To1439Title2: "700 2rem/1.75 'Helvetica Neue LT Thai Bold', Helvetica, Arial, Krungthep, 'กรุงเทพ', Thonburi, 'ธนบุรี', 'Leelawadee UI', 'ลีลาวดี UI', Tahoma, 'ทาโฮม่า', sans-serif",
                        podiumCdsTypography960To1439Title3: "700 1.5rem/1.75 'Helvetica Neue LT Thai Bold', Helvetica, Arial, Krungthep, 'กรุงเทพ', Thonburi, 'ธนบุรี', 'Leelawadee UI', 'ลีลาวดี UI', Tahoma, 'ทาโฮม่า', sans-serif",
                        podiumCdsTypography960To1439Title4: "700 1.25rem/1.75 'Helvetica Neue LT Thai Bold', Helvetica, Arial, Krungthep, 'กรุงเทพ', Thonburi, 'ธนบุรี', 'Leelawadee UI', 'ลีลาวดี UI', Tahoma, 'ทาโฮม่า', sans-serif",
                        podiumCdsTypography960To1919Display1: "800 6rem/1.75 'AvenirNextThaiModern-XtraBd','Helvetica Neue LT Thai Bold', Helvetica, Arial, Krungthep, 'กรุงเทพ', Thonburi, 'ธนบุรี', 'Leelawadee UI', 'ลีลาวดี UI', Tahoma, 'ทาโฮม่า', sans-serif",
                        podiumCdsTypography960To1919Display2: "800 4.75rem/1.75 'AvenirNextThaiModern-XtraBd','Helvetica Neue LT Thai Bold', Helvetica, Arial, Krungthep, 'กรุงเทพ', Thonburi, 'ธนบุรี', 'Leelawadee UI', 'ลีลาวดี UI', Tahoma, 'ทาโฮม่า', sans-serif",
                        podiumCdsTypography960To1919Display3: "800 3.75rem/1.75 'AvenirNextThaiModern-XtraBd','Helvetica Neue LT Thai Bold', Helvetica, Arial, Krungthep, 'กรุงเทพ', Thonburi, 'ธนบุรี', 'Leelawadee UI', 'ลีลาวดี UI', Tahoma, 'ทาโฮม่า', sans-serif",
                        podiumCdsTypography960To1919Display4: "800 3rem/1.75 'AvenirNextThaiModern-XtraBd','Helvetica Neue LT Thai Bold', Helvetica, Arial, Krungthep, 'กรุงเทพ', Thonburi, 'ธนบุรี', 'Leelawadee UI', 'ลีลาวดี UI', Tahoma, 'ทาโฮม่า', sans-serif",
                        podiumCdsTypography960To1919Conversation1: "300 3rem/1.75 'Helvetica Neue LT Thai', Helvetica, Arial, Krungthep, 'กรุงเทพ', Thonburi, 'ธนบุรี', 'Leelawadee UI', 'ลีลาวดี UI', Tahoma, 'ทาโฮม่า', sans-serif",
                        podiumCdsTypography960To1919Conversation2: "300 2.5rem/1.75 'Helvetica Neue LT Thai', Helvetica, Arial, Krungthep, 'กรุงเทพ', Thonburi, 'ธนบุรี', 'Leelawadee UI', 'ลีลาวดี UI', Tahoma, 'ทาโฮม่า', sans-serif",
                        podiumCdsTypography960To1919Conversation3: "300 2rem/1.75 'Helvetica Neue LT Thai', Helvetica, Arial, Krungthep, 'กรุงเทพ', Thonburi, 'ธนบุรี', 'Leelawadee UI', 'ลีลาวดี UI', Tahoma, 'ทาโฮม่า', sans-serif",
                        podiumCdsTypography960To1919Conversation4: "300 1.25rem/1.75 'Helvetica Neue LT Thai', Helvetica, Arial, Krungthep, 'กรุงเทพ', Thonburi, 'ธนบุรี', 'Leelawadee UI', 'ลีลาวดี UI', Tahoma, 'ทาโฮม่า', sans-serif",
                        podiumCdsTypography960PlusEditorialBody1: "400 1.25rem/1.75 'Helvetica Neue LT Thai', Helvetica, Arial, Krungthep, 'กรุงเทพ', Thonburi, 'ธนบุรี', 'Leelawadee UI', 'ลีลาวดี UI', Tahoma, 'ทาโฮม่า', sans-serif",
                        podiumCdsTypography960PlusEditorialBody1Strong: "500 1.25rem/1.75 'Helvetica Neue LT Thai Bold', Helvetica, Arial, Krungthep, 'กรุงเทพ', Thonburi, 'ธนบุรี', 'Leelawadee UI', 'ลีลาวดี UI', Tahoma, 'ทาโฮม่า', sans-serif",
                        podiumCdsTypography1440To1919Oversize1: "700 9.375rem/1.75 'Helvetica Neue LT Thai Bold', Helvetica, Arial, Krungthep, 'กรุงเทพ', Thonburi, 'ธนบุรี', 'Leelawadee UI', 'ลีลาวดี UI', Tahoma, 'ทาโฮม่า', sans-serif",
                        podiumCdsTypography1440To1919Oversize2: "700 7.5rem/1.75 'Helvetica Neue LT Thai Bold', Helvetica, Arial, Krungthep, 'กรุงเทพ', Thonburi, 'ธนบุรี', 'Leelawadee UI', 'ลีลาวดี UI', Tahoma, 'ทาโฮม่า', sans-serif",
                        podiumCdsTypography1440To1919Oversize3: "700 6rem/1.75 'Helvetica Neue LT Thai Bold', Helvetica, Arial, Krungthep, 'กรุงเทพ', Thonburi, 'ธนบุรี', 'Leelawadee UI', 'ลีลาวดี UI', Tahoma, 'ทาโฮม่า', sans-serif",
                        podiumCdsTypography1920PlusOversize1: "700 11.625rem/1.75 'Helvetica Neue LT Thai Bold', Helvetica, Arial, Krungthep, 'กรุงเทพ', Thonburi, 'ธนบุรี', 'Leelawadee UI', 'ลีลาวดี UI', Tahoma, 'ทาโฮม่า', sans-serif",
                        podiumCdsTypography1920PlusOversize2: "700 9.375rem/1.75 'Helvetica Neue LT Thai Bold', Helvetica, Arial, Krungthep, 'กรุงเทพ', Thonburi, 'ธนบุรี', 'Leelawadee UI', 'ลีลาวดี UI', Tahoma, 'ทาโฮม่า', sans-serif",
                        podiumCdsTypography1920PlusOversize3: "700 7.5rem/1.75 'Helvetica Neue LT Thai Bold', Helvetica, Arial, Krungthep, 'กรุงเทพ', Thonburi, 'ธนบุรี', 'Leelawadee UI', 'ลีลาวดี UI', Tahoma, 'ทาโฮม่า', sans-serif",
                        podiumCdsTypography1920PlusDisplay1: "800 7.5rem/1.75 'AvenirNextThaiModern-XtraBd','Helvetica Neue LT Thai Bold', Helvetica, Arial, Krungthep, 'กรุงเทพ', Thonburi, 'ธนบุรี', 'Leelawadee UI', 'ลีลาวดี UI', Tahoma, 'ทาโฮม่า', sans-serif",
                        podiumCdsTypography1920PlusDisplay2: "800 6rem/1.75 'AvenirNextThaiModern-XtraBd','Helvetica Neue LT Thai Bold', Helvetica, Arial, Krungthep, 'กรุงเทพ', Thonburi, 'ธนบุรี', 'Leelawadee UI', 'ลีลาวดี UI', Tahoma, 'ทาโฮม่า', sans-serif",
                        podiumCdsTypography1920PlusDisplay3: "800 4.75rem/1.75 'AvenirNextThaiModern-XtraBd','Helvetica Neue LT Thai Bold', Helvetica, Arial, Krungthep, 'กรุงเทพ', Thonburi, 'ธนบุรี', 'Leelawadee UI', 'ลีลาวดี UI', Tahoma, 'ทาโฮม่า', sans-serif",
                        podiumCdsTypography1920PlusDisplay4: "800 3.75rem/1.75 'AvenirNextThaiModern-XtraBd','Helvetica Neue LT Thai Bold', Helvetica, Arial, Krungthep, 'กรุงเทพ', Thonburi, 'ธนบุรี', 'Leelawadee UI', 'ลีลาวดี UI', Tahoma, 'ทาโฮม่า', sans-serif",
                        podiumCdsTypography1920PlusTitle1: "700 3rem/1.75 'Helvetica Neue LT Thai Bold', Helvetica, Arial, Krungthep, 'กรุงเทพ', Thonburi, 'ธนบุรี', 'Leelawadee UI', 'ลีลาวดี UI', Tahoma, 'ทาโฮม่า', sans-serif",
                        podiumCdsTypography1920PlusTitle2: "700 2.5rem/1.75 'Helvetica Neue LT Thai Bold', Helvetica, Arial, Krungthep, 'กรุงเทพ', Thonburi, 'ธนบุรี', 'Leelawadee UI', 'ลีลาวดี UI', Tahoma, 'ทาโฮม่า', sans-serif",
                        podiumCdsTypography1920PlusTitle3: "700 2rem/1.75 'Helvetica Neue LT Thai Bold', Helvetica, Arial, Krungthep, 'กรุงเทพ', Thonburi, 'ธนบุรี', 'Leelawadee UI', 'ลีลาวดี UI', Tahoma, 'ทาโฮม่า', sans-serif",
                        podiumCdsTypography1920PlusTitle4: "700 1.5rem/1.75 'Helvetica Neue LT Thai Bold', Helvetica, Arial, Krungthep, 'กรุงเทพ', Thonburi, 'ธนบุรี', 'Leelawadee UI', 'ลีลาวดี UI', Tahoma, 'ทาโฮม่า', sans-serif",
                        podiumCdsTypography1920PlusConversation1: "300 3.75rem/1.75 'Helvetica Neue LT Thai', Helvetica, Arial, Krungthep, 'กรุงเทพ', Thonburi, 'ธนบุรี', 'Leelawadee UI', 'ลีลาวดี UI', Tahoma, 'ทาโฮม่า', sans-serif",
                        podiumCdsTypography1920PlusConversation2: "300 3rem/1.75 'Helvetica Neue LT Thai', Helvetica, Arial, Krungthep, 'กรุงเทพ', Thonburi, 'ธนบุรี', 'Leelawadee UI', 'ลีลาวดี UI', Tahoma, 'ทาโฮม่า', sans-serif",
                        podiumCdsTypography1920PlusConversation3: "300 2.5rem/1.75 'Helvetica Neue LT Thai', Helvetica, Arial, Krungthep, 'กรุงเทพ', Thonburi, 'ธนบุรี', 'Leelawadee UI', 'ลีลาวดี UI', Tahoma, 'ทาโฮม่า', sans-serif",
                        podiumCdsTypography1920PlusConversation4: "300 1.25rem/1.75 'Helvetica Neue LT Thai', Helvetica, Arial, Krungthep, 'กรุงเทพ', Thonburi, 'ธนบุรี', 'Leelawadee UI', 'ลีลาวดี UI', Tahoma, 'ทาโฮม่า', sans-serif",
                        podiumCdsTypographyBody1: "400 1rem/1.75 'Helvetica Neue LT Thai', Helvetica, Arial, Krungthep, 'กรุงเทพ', Thonburi, 'ธนบุรี', 'Leelawadee UI', 'ลีลาวดี UI', Tahoma, 'ทาโฮม่า', sans-serif",
                        podiumCdsTypographyBody1Strong: "700 1rem/1.75 'Helvetica Neue LT Thai Bold', Helvetica, Arial, Krungthep, 'กรุงเทพ', Thonburi, 'ธนบุรี', 'Leelawadee UI', 'ลีลาวดี UI', Tahoma, 'ทาโฮม่า', sans-serif",
                        podiumCdsTypographyBody2: "400 .875rem/1.75 'Helvetica Neue LT Thai', Helvetica, Arial, Krungthep, 'กรุงเทพ', Thonburi, 'ธนบุรี', 'Leelawadee UI', 'ลีลาวดี UI', Tahoma, 'ทาโฮม่า', sans-serif",
                        podiumCdsTypographyBody2Strong: "700 .875rem/1.75 'Helvetica Neue LT Thai Bold', Helvetica, Arial, Krungthep, 'กรุงเทพ', Thonburi, 'ธนบุรี', 'Leelawadee UI', 'ลีลาวดี UI', Tahoma, 'ทาโฮม่า', sans-serif",
                        podiumCdsTypographyBody3: "400 .75rem/1.75 'Helvetica Neue LT Thai', Helvetica, Arial, Krungthep, 'กรุงเทพ', Thonburi, 'ธนบุรี', 'Leelawadee UI', 'ลีลาวดี UI', Tahoma, 'ทาโฮม่า', sans-serif",
                        podiumCdsTypographyBody3Strong: "700 .75rem/1.75 'Helvetica Neue LT Thai Bold', Helvetica, Arial, Krungthep, 'กรุงเทพ', Thonburi, 'ธนบุรี', 'Leelawadee UI', 'ลีลาวดี UI', Tahoma, 'ทาโฮม่า', sans-serif",
                        podiumCdsTypographyBody4: "400 .625rem/1.75 'Helvetica Neue LT Thai', Helvetica, Arial, Krungthep, 'กรุงเทพ', Thonburi, 'ธนบุรี', 'Leelawadee UI', 'ลีลาวดี UI', Tahoma, 'ทาโฮม่า', sans-serif",
                        podiumCdsTypographyBody4Strong: "700 .625rem/1.75 'Helvetica Neue LT Thai Bold', Helvetica, Arial, Krungthep, 'กรุงเทพ', Thonburi, 'ธนบุรี', 'Leelawadee UI', 'ลีลาวดี UI', Tahoma, 'ทาโฮม่า', sans-serif",
                        podiumCdsTypographyLegal: "400 .875rem/1.75 'Helvetica Neue LT Thai', Helvetica, Arial, Krungthep, 'กรุงเทพ', Thonburi, 'ธนบุรี', 'Leelawadee UI', 'ลีลาวดี UI', Tahoma, 'ทาโฮม่า', sans-serif"
                    },
                    get "tr-tr" () {
                        return this["ca-es"]
                    },
                    "zh-cn": {
                        podiumCdsTypography320To959Oversize1: "500 6rem/1.1 'Noto Sans SC Medium', Helvetica, Arial, 'PingFang SC', '苹方-简', 'Heiti SC', '黑体-简', 'Microsoft YaHei', '微软雅黑', sans-serif",
                        podiumCdsTypography320To959Oversize2: "500 4.75rem/1.1 'Noto Sans SC Medium', Helvetica, Arial, 'PingFang SC', '苹方-简', 'Heiti SC', '黑体-简', 'Microsoft YaHei', '微软雅黑', sans-serif",
                        podiumCdsTypography320To959Oversize3: "500 3.75rem/1.2 'Noto Sans SC Medium', Helvetica, Arial, 'PingFang SC', '苹方-简', 'Heiti SC', '黑体-简', 'Microsoft YaHei', '微软雅黑', sans-serif",
                        podiumCdsTypography320To959Display1: "400 3rem/1 'NikeSC365', 'Noto Sans SC Black', Helvetica, Arial, 'PingFang SC', '苹方-简', 'Heiti SC', '黑体-简', 'Microsoft YaHei', '微软雅黑', sans-serif",
                        podiumCdsTypography320To959Display2: "400 2.5rem/1 'NikeSC365', 'Noto Sans SC Black', Helvetica, Arial, 'PingFang SC', '苹方-简', 'Heiti SC', '黑体-简', 'Microsoft YaHei', '微软雅黑', sans-serif",
                        podiumCdsTypography320To959Display3: "400 2rem/1 'NikeSC365', 'Noto Sans SC Black', Helvetica, Arial, 'PingFang SC', '苹方-简', 'Heiti SC', '黑体-简', 'Microsoft YaHei', '微软雅黑', sans-serif",
                        podiumCdsTypography320To959Display4: "400 1.5rem/1 'NikeSC365', 'Noto Sans SC Black', Helvetica, Arial, 'PingFang SC', '苹方-简', 'Heiti SC', '黑体-简', 'Microsoft YaHei', '微软雅黑', sans-serif",
                        podiumCdsTypography320To959Conversation1: "300 2rem/1.2 'Noto Sans SC', Helvetica, Arial, 'PingFang SC', '苹方-简', 'Heiti SC', '黑体-简', 'Microsoft YaHei', '微软雅黑', sans-serif",
                        podiumCdsTypography320To959Conversation2: "300 1.5rem/1.2 'Noto Sans SC', Helvetica, Arial, 'PingFang SC', '苹方-简', 'Heiti SC', '黑体-简', 'Microsoft YaHei', '微软雅黑', sans-serif",
                        podiumCdsTypography320To959Conversation3: "300 1.25rem/1.2 'Noto Sans SC', Helvetica, Arial, 'PingFang SC', '苹方-简', 'Heiti SC', '黑体-简', 'Microsoft YaHei', '微软雅黑', sans-serif",
                        podiumCdsTypography320To959Conversation4: "300 1rem/1.5 'Noto Sans SC', Helvetica, Arial, 'PingFang SC', '苹方-简', 'Heiti SC', '黑体-简', 'Microsoft YaHei', '微软雅黑', sans-serif",
                        podiumCdsTypography320To959EditorialBody1: "400 1rem/1.5 'Noto Sans SC', Helvetica, Arial, 'PingFang SC', '苹方-简', 'Heiti SC', '黑体-简', 'Microsoft YaHei', '微软雅黑', sans-serif",
                        podiumCdsTypography320To959EditorialBody1Strong: "500 1rem/1.5 'Noto Sans SC Medium', Helvetica, Arial, 'PingFang SC', '苹方-简', 'Heiti SC', '黑体-简', 'Microsoft YaHei', '微软雅黑', sans-serif",
                        podiumCdsTypography320To1919Title1: "500 2.5rem/1.2 'Noto Sans SC Medium', Helvetica, Arial, 'PingFang SC', '苹方-简', 'Heiti SC', '黑体-简', 'Microsoft YaHei', '微软雅黑', sans-serif",
                        podiumCdsTypography320To1919Title2: "500 2rem/1.2 'Noto Sans SC Medium', Helvetica, Arial, 'PingFang SC', '苹方-简', 'Heiti SC', '黑体-简', 'Microsoft YaHei', '微软雅黑', sans-serif",
                        podiumCdsTypography320To1919Title3: "500 1.5rem/1.2 'Noto Sans SC Medium', Helvetica, Arial, 'PingFang SC', '苹方-简', 'Heiti SC', '黑体-简', 'Microsoft YaHei', '微软雅黑', sans-serif",
                        podiumCdsTypography320To1919Title4: "500 1.25rem/1.2 'Noto Sans SC Medium', Helvetica, Arial, 'PingFang SC', '苹方-简', 'Heiti SC', '黑体-简', 'Microsoft YaHei', '微软雅黑', sans-serif",
                        podiumCdsTypography960To1439Oversize1: "500 7.5rem/1 'Noto Sans SC Medium', Helvetica, Arial, 'PingFang SC', '苹方-简', 'Heiti SC', '黑体-简', 'Microsoft YaHei', '微软雅黑', sans-serif",
                        podiumCdsTypography960To1439Oversize2: "500 6rem/1.1 'Noto Sans SC Medium', Helvetica, Arial, 'PingFang SC', '苹方-简', 'Heiti SC', '黑体-简', 'Microsoft YaHei', '微软雅黑', sans-serif",
                        podiumCdsTypography960To1439Oversize3: "500 4.75rem/1.1 'Noto Sans SC Medium', Helvetica, Arial, 'PingFang SC', '苹方-简', 'Heiti SC', '黑体-简', 'Microsoft YaHei', '微软雅黑', sans-serif",
                        podiumCdsTypography960To1919Display1: "400 6rem/.9 'NikeSC365', 'Noto Sans SC Black', Helvetica, Arial, 'PingFang SC', '苹方-简', 'Heiti SC', '黑体-简', 'Microsoft YaHei', '微软雅黑', sans-serif",
                        podiumCdsTypography960To1919Display2: "400 4.75rem/.9 'NikeSC365', 'Noto Sans SC Black', Helvetica, Arial, 'PingFang SC', '苹方-简', 'Heiti SC', '黑体-简', 'Microsoft YaHei', '微软雅黑', sans-serif",
                        podiumCdsTypography960To1919Display3: "400 3.75rem/.9 'NikeSC365', 'Noto Sans SC Black', Helvetica, Arial, 'PingFang SC', '苹方-简', 'Heiti SC', '黑体-简', 'Microsoft YaHei', '微软雅黑', sans-serif",
                        podiumCdsTypography960To1919Display4: "400 3rem/1 'NikeSC365', 'Noto Sans SC Black', Helvetica, Arial, 'PingFang SC', '苹方-简', 'Heiti SC', '黑体-简', 'Microsoft YaHei', '微软雅黑', sans-serif",
                        podiumCdsTypography960To1919Conversation1: "300 3rem/1.2 'Noto Sans SC', Helvetica, Arial, 'PingFang SC', '苹方-简', 'Heiti SC', '黑体-简', 'Microsoft YaHei', '微软雅黑', sans-serif",
                        podiumCdsTypography960To1919Conversation2: "300 2.5rem/1.2 'Noto Sans SC', Helvetica, Arial, 'PingFang SC', '苹方-简', 'Heiti SC', '黑体-简', 'Microsoft YaHei', '微软雅黑', sans-serif",
                        podiumCdsTypography960To1919Conversation3: "300 2rem/1.2 'Noto Sans SC', Helvetica, Arial, 'PingFang SC', '苹方-简', 'Heiti SC', '黑体-简', 'Microsoft YaHei', '微软雅黑', sans-serif",
                        podiumCdsTypography960To1919Conversation4: "300 1.25rem/1.2 'Noto Sans SC', Helvetica, Arial, 'PingFang SC', '苹方-简', 'Heiti SC', '黑体-简', 'Microsoft YaHei', '微软雅黑', sans-serif",
                        podiumCdsTypography960PlusEditorialBody1: "400 1.25rem/1.2 'Noto Sans SC', Helvetica, Arial, 'PingFang SC', '苹方-简', 'Heiti SC', '黑体-简', 'Microsoft YaHei', '微软雅黑', sans-serif",
                        podiumCdsTypography960PlusEditorialBody1Strong: "500 1.25rem/1.2 'Noto Sans SC Medium', Helvetica, Arial, 'PingFang SC', '苹方-简', 'Heiti SC', '黑体-简', 'Microsoft YaHei', '微软雅黑', sans-serif",
                        podiumCdsTypography1440To1919Oversize1: "500 9.375rem/1 'Noto Sans SC Medium', Helvetica, Arial, 'PingFang SC', '苹方-简', 'Heiti SC', '黑体-简', 'Microsoft YaHei', '微软雅黑', sans-serif",
                        podiumCdsTypography1440To1919Oversize2: "500 7.5rem/1 'Noto Sans SC Medium', Helvetica, Arial, 'PingFang SC', '苹方-简', 'Heiti SC', '黑体-简', 'Microsoft YaHei', '微软雅黑', sans-serif",
                        podiumCdsTypography1440To1919Oversize3: "500 6rem/1.1 'Noto Sans SC Medium', Helvetica, Arial, 'PingFang SC', '苹方-简', 'Heiti SC', '黑体-简', 'Microsoft YaHei', '微软雅黑', sans-serif",
                        podiumCdsTypography1920PlusOversize1: "500 11.625rem/1 'Noto Sans SC Medium', Helvetica, Arial, 'PingFang SC', '苹方-简', 'Heiti SC', '黑体-简', 'Microsoft YaHei', '微软雅黑', sans-serif",
                        podiumCdsTypography1920PlusOversize2: "500 9.375rem/1 'Noto Sans SC Medium', Helvetica, Arial, 'PingFang SC', '苹方-简', 'Heiti SC', '黑体-简', 'Microsoft YaHei', '微软雅黑', sans-serif",
                        podiumCdsTypography1920PlusOversize3: "500 7.5rem/1 'Noto Sans SC Medium', Helvetica, Arial, 'PingFang SC', '苹方-简', 'Heiti SC', '黑体-简', 'Microsoft YaHei', '微软雅黑', sans-serif",
                        podiumCdsTypography1920PlusDisplay1: "400 7.5rem/.9 'NikeSC365', 'Noto Sans SC Black', Helvetica, Arial, 'PingFang SC', '苹方-简', 'Heiti SC', '黑体-简', 'Microsoft YaHei', '微软雅黑', sans-serif",
                        podiumCdsTypography1920PlusDisplay2: "400 6rem/.9 'NikeSC365', 'Noto Sans SC Black', Helvetica, Arial, 'PingFang SC', '苹方-简', 'Heiti SC', '黑体-简', 'Microsoft YaHei', '微软雅黑', sans-serif",
                        podiumCdsTypography1920PlusDisplay3: "400 4.75rem/.9 'NikeSC365', 'Noto Sans SC Black', Helvetica, Arial, 'PingFang SC', '苹方-简', 'Heiti SC', '黑体-简', 'Microsoft YaHei', '微软雅黑', sans-serif",
                        podiumCdsTypography1920PlusDisplay4: "400 3.75rem/.9 'NikeSC365', 'Noto Sans SC Black', Helvetica, Arial, 'PingFang SC', '苹方-简', 'Heiti SC', '黑体-简', 'Microsoft YaHei', '微软雅黑', sans-serif",
                        podiumCdsTypography1920PlusTitle1: "500 3rem/1.2 'Noto Sans SC Medium', Helvetica, Arial, 'PingFang SC', '苹方-简', 'Heiti SC', '黑体-简', 'Microsoft YaHei', '微软雅黑', sans-serif",
                        podiumCdsTypography1920PlusTitle2: "500 2.5rem/1.2 'Noto Sans SC Medium', Helvetica, Arial, 'PingFang SC', '苹方-简', 'Heiti SC', '黑体-简', 'Microsoft YaHei', '微软雅黑', sans-serif",
                        podiumCdsTypography1920PlusTitle3: "500 2rem/1.2 'Noto Sans SC Medium', Helvetica, Arial, 'PingFang SC', '苹方-简', 'Heiti SC', '黑体-简', 'Microsoft YaHei', '微软雅黑', sans-serif",
                        podiumCdsTypography1920PlusTitle4: "500 1.5rem/1.2 'Noto Sans SC Medium', Helvetica, Arial, 'PingFang SC', '苹方-简', 'Heiti SC', '黑体-简', 'Microsoft YaHei', '微软雅黑', sans-serif",
                        podiumCdsTypography1920PlusConversation1: "300 3.75rem/1.2 'Noto Sans SC', Helvetica, Arial, 'PingFang SC', '苹方-简', 'Heiti SC', '黑体-简', 'Microsoft YaHei', '微软雅黑', sans-serif",
                        podiumCdsTypography1920PlusConversation2: "300 3rem/1.2 'Noto Sans SC', Helvetica, Arial, 'PingFang SC', '苹方-简', 'Heiti SC', '黑体-简', 'Microsoft YaHei', '微软雅黑', sans-serif",
                        podiumCdsTypography1920PlusConversation3: "300 2.5rem/1.2 'Noto Sans SC', Helvetica, Arial, 'PingFang SC', '苹方-简', 'Heiti SC', '黑体-简', 'Microsoft YaHei', '微软雅黑', sans-serif",
                        podiumCdsTypography1920PlusConversation4: "300 1.25rem/1.2 'Noto Sans SC', Helvetica, Arial, 'PingFang SC', '苹方-简', 'Heiti SC', '黑体-简', 'Microsoft YaHei', '微软雅黑', sans-serif",
                        podiumCdsTypographyBody1: "400 1rem/1.5 'Noto Sans SC', Helvetica, Arial, 'PingFang SC', '苹方-简', 'Heiti SC', '黑体-简', 'Microsoft YaHei', '微软雅黑', sans-serif",
                        podiumCdsTypographyBody1Strong: "500 1rem/1.5 'Noto Sans SC Medium', Helvetica, Arial, 'PingFang SC', '苹方-简', 'Heiti SC', '黑体-简', 'Microsoft YaHei', '微软雅黑', sans-serif",
                        podiumCdsTypographyBody2: "400 .875rem/1.5 'Noto Sans SC', Helvetica, Arial, 'PingFang SC', '苹方-简', 'Heiti SC', '黑体-简', 'Microsoft YaHei', '微软雅黑', sans-serif",
                        podiumCdsTypographyBody2Strong: "500 .875rem/1.5 'Noto Sans SC Medium', Helvetica, Arial, 'PingFang SC', '苹方-简', 'Heiti SC', '黑体-简', 'Microsoft YaHei', '微软雅黑', sans-serif",
                        podiumCdsTypographyBody3: "400 .75rem/1.5 'Noto Sans SC', Helvetica, Arial, 'PingFang SC', '苹方-简', 'Heiti SC', '黑体-简', 'Microsoft YaHei', '微软雅黑', sans-serif",
                        podiumCdsTypographyBody3Strong: "500 .75rem/1.5 'Noto Sans SC Medium', Helvetica, Arial, 'PingFang SC', '苹方-简', 'Heiti SC', '黑体-简', 'Microsoft YaHei', '微软雅黑', sans-serif",
                        podiumCdsTypographyBody4: "400 .625rem/1.5 'Noto Sans SC', Helvetica, Arial, 'PingFang SC', '苹方-简', 'Heiti SC', '黑体-简', 'Microsoft YaHei', '微软雅黑', sans-serif",
                        podiumCdsTypographyBody4Strong: "500 .625rem/1.5 'Noto Sans SC Medium', Helvetica, Arial, 'PingFang SC', '苹方-简', 'Heiti SC', '黑体-简', 'Microsoft YaHei', '微软雅黑', sans-serif",
                        podiumCdsTypographyLegal: "400 .875rem/1.5 'Noto Sans SC', Helvetica, Arial, 'PingFang SC', '苹方-简', 'Heiti SC', '黑体-简', 'Microsoft YaHei', '微软雅黑', sans-serif"
                    },
                    "zh-hk": {
                        podiumCdsTypography320To959Oversize1: "500 6rem/1.1 'Noto Sans TC Medium', Helvetica, Arial, 'PingFang TC', '苹方-繁', 'Heiti TC', '黑體-繁', 'Microsoft JhengHei', '微軟正黑體', sans-serif",
                        podiumCdsTypography320To959Oversize2: "500 4.75rem/1.1 'Noto Sans TC Medium', Helvetica, Arial, 'PingFang TC', '苹方-繁', 'Heiti TC', '黑體-繁', 'Microsoft JhengHei', '微軟正黑體', sans-serif",
                        podiumCdsTypography320To959Oversize3: "500 3.75rem/1.2 'Noto Sans TC Medium', Helvetica, Arial, 'PingFang TC', '苹方-繁', 'Heiti TC', '黑體-繁', 'Microsoft JhengHei', '微軟正黑體', sans-serif",
                        podiumCdsTypography320To959Display1: "900 3rem/1.1 'Noto Sans TC Black', Helvetica, Arial, 'PingFang TC', '苹方-繁', 'Heiti TC', '黑體-繁', 'Microsoft JhengHei', '微軟正黑體', sans-serif",
                        podiumCdsTypography320To959Display2: "900 2.5rem/1.1 'Noto Sans TC Black', Helvetica, Arial, 'PingFang TC', '苹方-繁', 'Heiti TC', '黑體-繁', 'Microsoft JhengHei', '微軟正黑體', sans-serif",
                        podiumCdsTypography320To959Display3: "900 2rem/1.15  'Noto Sans TC Black', Helvetica, Arial, 'PingFang TC', '苹方-繁', 'Heiti TC', '黑體-繁', 'Microsoft JhengHei', '微軟正黑體', sans-serif",
                        podiumCdsTypography320To959Display4: "900 1.5rem/1.15  'Noto Sans TC Black', Helvetica, Arial, 'PingFang TC', '苹方-繁', 'Heiti TC', '黑體-繁', 'Microsoft JhengHei', '微軟正黑體', sans-serif",
                        podiumCdsTypography320To959Conversation1: "300 2rem/1.2 'Noto Sans TC', Helvetica, Arial, 'PingFang TC', '苹方-繁', 'Heiti TC', '黑體-繁', 'Microsoft JhengHei', '微軟正黑體', sans-serif",
                        podiumCdsTypography320To959Conversation2: "300 1.5rem/1.2 'Noto Sans TC', Helvetica, Arial, 'PingFang TC', '苹方-繁', 'Heiti TC', '黑體-繁', 'Microsoft JhengHei', '微軟正黑體', sans-serif",
                        podiumCdsTypography320To959Conversation3: "300 1.25rem/1.2 'Noto Sans TC', Helvetica, Arial, 'PingFang TC', '苹方-繁', 'Heiti TC', '黑體-繁', 'Microsoft JhengHei', '微軟正黑體', sans-serif",
                        podiumCdsTypography320To959Conversation4: "300 1rem/1.5 'Noto Sans TC', Helvetica, Arial, 'PingFang TC', '苹方-繁', 'Heiti TC', '黑體-繁', 'Microsoft JhengHei', '微軟正黑體', sans-serif",
                        podiumCdsTypography320To959EditorialBody1: "400 1rem/1.5 'Noto Sans TC', Helvetica, Arial, 'PingFang TC', '苹方-繁', 'Heiti TC', '黑體-繁', 'Microsoft JhengHei', '微軟正黑體', sans-serif",
                        podiumCdsTypography320To959EditorialBody1Strong: "500 1rem/1.5 'Noto Sans TC Medium', Helvetica, Arial, 'PingFang TC', '苹方-繁', 'Heiti TC', '黑體-繁', 'Microsoft JhengHei', '微軟正黑體', sans-serif",
                        podiumCdsTypography320To1919Title1: "500 2.5rem/1.5 'Noto Sans TC Medium', Helvetica, Arial, 'PingFang TC', '苹方-繁', 'Heiti TC', '黑體-繁', 'Microsoft JhengHei', '微軟正黑體', sans-serif",
                        podiumCdsTypography320To1919Title2: "500 2rem/1.5 'Noto Sans TC Medium', Helvetica, Arial, 'PingFang TC', '苹方-繁', 'Heiti TC', '黑體-繁', 'Microsoft JhengHei', '微軟正黑體', sans-serif",
                        podiumCdsTypography320To1919Title3: "500 1.5rem/1.5 'Noto Sans TC Medium', Helvetica, Arial, 'PingFang TC', '苹方-繁', 'Heiti TC', '黑體-繁', 'Microsoft JhengHei', '微軟正黑體', sans-serif",
                        podiumCdsTypography320To1919Title4: "500 1.25rem/1.5 'Noto Sans TC Medium', Helvetica, Arial, 'PingFang TC', '苹方-繁', 'Heiti TC', '黑體-繁', 'Microsoft JhengHei', '微軟正黑體', sans-serif",
                        podiumCdsTypography960To1439Oversize1: "500 7.5rem/1 'Noto Sans TC Medium', Helvetica, Arial, 'PingFang TC', '苹方-繁', 'Heiti TC', '黑體-繁', 'Microsoft JhengHei', '微軟正黑體', sans-serif",
                        podiumCdsTypography960To1439Oversize2: "500 6rem/1.1 'Noto Sans TC Medium', Helvetica, Arial, 'PingFang TC', '苹方-繁', 'Heiti TC', '黑體-繁', 'Microsoft JhengHei', '微軟正黑體', sans-serif",
                        podiumCdsTypography960To1439Oversize3: "500 4.75rem/1.1 'Noto Sans TC Medium', Helvetica, Arial, 'PingFang TC', '苹方-繁', 'Heiti TC', '黑體-繁', 'Microsoft JhengHei', '微軟正黑體', sans-serif",
                        podiumCdsTypography960To1919Display1: "900 6rem/1.1 'Noto Sans TC Black', Helvetica, Arial, 'PingFang TC', '苹方-繁', 'Heiti TC', '黑體-繁', 'Microsoft JhengHei', '微軟正黑體', sans-serif",
                        podiumCdsTypography960To1919Display2: "900 4.75rem/1.1 'Noto Sans TC Black', Helvetica, Arial, 'PingFang TC', '苹方-繁', 'Heiti TC', '黑體-繁', 'Microsoft JhengHei', '微軟正黑體', sans-serif",
                        podiumCdsTypography960To1919Display3: "900 3.75rem/1.1 'Noto Sans TC Black', Helvetica, Arial, 'PingFang TC', '苹方-繁', 'Heiti TC', '黑體-繁', 'Microsoft JhengHei', '微軟正黑體', sans-serif",
                        podiumCdsTypography960To1919Display4: "900 3rem/1.1 'Noto Sans TC Black', Helvetica, Arial, 'PingFang TC', '苹方-繁', 'Heiti TC', '黑體-繁', 'Microsoft JhengHei', '微軟正黑體', sans-serif",
                        podiumCdsTypography960To1919Conversation1: "300 3rem/1.2 'Noto Sans TC', Helvetica, Arial, 'PingFang TC', '苹方-繁', 'Heiti TC', '黑體-繁', 'Microsoft JhengHei', '微軟正黑體', sans-serif",
                        podiumCdsTypography960To1919Conversation2: "300 2.5rem/1.2 'Noto Sans TC', Helvetica, Arial, 'PingFang TC', '苹方-繁', 'Heiti TC', '黑體-繁', 'Microsoft JhengHei', '微軟正黑體', sans-serif",
                        podiumCdsTypography960To1919Conversation3: "300 2rem/1.2 'Noto Sans TC', Helvetica, Arial, 'PingFang TC', '苹方-繁', 'Heiti TC', '黑體-繁', 'Microsoft JhengHei', '微軟正黑體', sans-serif",
                        podiumCdsTypography960To1919Conversation4: "300 1.25rem/1.2 'Noto Sans TC', Helvetica, Arial, 'PingFang TC', '苹方-繁', 'Heiti TC', '黑體-繁', 'Microsoft JhengHei', '微軟正黑體', sans-serif",
                        podiumCdsTypography960PlusEditorialBody1: "400 1.25rem/1.2 'Noto Sans TC', Helvetica, Arial, 'PingFang TC', '苹方-繁', 'Heiti TC', '黑體-繁', 'Microsoft JhengHei', '微軟正黑體', sans-serif",
                        podiumCdsTypography960PlusEditorialBody1Strong: "500 1.25rem/1.2 'Noto Sans TC Medium', Helvetica, Arial, 'PingFang TC', '苹方-繁', 'Heiti TC', '黑體-繁', 'Microsoft JhengHei', '微軟正黑體', sans-serif",
                        podiumCdsTypography1440To1919Oversize1: "500 9.375rem/1 'Noto Sans TC Medium', Helvetica, Arial, 'PingFang TC', '苹方-繁', 'Heiti TC', '黑體-繁', 'Microsoft JhengHei', '微軟正黑體', sans-serif",
                        podiumCdsTypography1440To1919Oversize2: "500 7.5rem/1 'Noto Sans TC Medium', Helvetica, Arial, 'PingFang TC', '苹方-繁', 'Heiti TC', '黑體-繁', 'Microsoft JhengHei', '微軟正黑體', sans-serif",
                        podiumCdsTypography1440To1919Oversize3: "500 6rem/1.1 'Noto Sans TC Medium', Helvetica, Arial, 'PingFang TC', '苹方-繁', 'Heiti TC', '黑體-繁', 'Microsoft JhengHei', '微軟正黑體', sans-serif",
                        podiumCdsTypography1920PlusOversize1: "500 11.625rem/1 'Noto Sans TC Medium', Helvetica, Arial, 'PingFang TC', '苹方-繁', 'Heiti TC', '黑體-繁', 'Microsoft JhengHei', '微軟正黑體', sans-serif",
                        podiumCdsTypography1920PlusOversize2: "500 9.375rem/1 'Noto Sans TC Medium', Helvetica, Arial, 'PingFang TC', '苹方-繁', 'Heiti TC', '黑體-繁', 'Microsoft JhengHei', '微軟正黑體', sans-serif",
                        podiumCdsTypography1920PlusOversize3: "500 7.5rem/1 'Noto Sans TC Medium', Helvetica, Arial, 'PingFang TC', '苹方-繁', 'Heiti TC', '黑體-繁', 'Microsoft JhengHei', '微軟正黑體', sans-serif",
                        podiumCdsTypography1920PlusDisplay1: "900 7.5rem/1.1 'Noto Sans TC Black', Helvetica, Arial, 'PingFang TC', '苹方-繁', 'Heiti TC', '黑體-繁', 'Microsoft JhengHei', '微軟正黑體', sans-serif",
                        podiumCdsTypography1920PlusDisplay2: "900 6rem/1.1 'Noto Sans TC Black', Helvetica, Arial, 'PingFang TC', '苹方-繁', 'Heiti TC', '黑體-繁', 'Microsoft JhengHei', '微軟正黑體', sans-serif",
                        podiumCdsTypography1920PlusDisplay3: "900 4.75rem/1.1 'Noto Sans TC Black', Helvetica, Arial, 'PingFang TC', '苹方-繁', 'Heiti TC', '黑體-繁', 'Microsoft JhengHei', '微軟正黑體', sans-serif",
                        podiumCdsTypography1920PlusDisplay4: "900 3.75rem/1.1 'Noto Sans TC Black', Helvetica, Arial, 'PingFang TC', '苹方-繁', 'Heiti TC', '黑體-繁', 'Microsoft JhengHei', '微軟正黑體', sans-serif",
                        podiumCdsTypography1920PlusTitle1: "500 3rem/1.5 'Noto Sans TC Medium', Helvetica, Arial, 'PingFang TC', '苹方-繁', 'Heiti TC', '黑體-繁', 'Microsoft JhengHei', '微軟正黑體', sans-serif",
                        podiumCdsTypography1920PlusTitle2: "500 2.5rem/1.5 'Noto Sans TC Medium', Helvetica, Arial, 'PingFang TC', '苹方-繁', 'Heiti TC', '黑體-繁', 'Microsoft JhengHei', '微軟正黑體', sans-serif",
                        podiumCdsTypography1920PlusTitle3: "500 2rem/1.5 'Noto Sans TC Medium', Helvetica, Arial, 'PingFang TC', '苹方-繁', 'Heiti TC', '黑體-繁', 'Microsoft JhengHei', '微軟正黑體', sans-serif",
                        podiumCdsTypography1920PlusTitle4: "500 1.5rem/1.5 'Noto Sans TC Medium', Helvetica, Arial, 'PingFang TC', '苹方-繁', 'Heiti TC', '黑體-繁', 'Microsoft JhengHei', '微軟正黑體', sans-serif",
                        podiumCdsTypography1920PlusConversation1: "300 3.75rem/1.2 'Noto Sans TC', Helvetica, Arial, 'PingFang TC', '苹方-繁', 'Heiti TC', '黑體-繁', 'Microsoft JhengHei', '微軟正黑體', sans-serif",
                        podiumCdsTypography1920PlusConversation2: "300 3rem/1.2 'Noto Sans TC', Helvetica, Arial, 'PingFang TC', '苹方-繁', 'Heiti TC', '黑體-繁', 'Microsoft JhengHei', '微軟正黑體', sans-serif",
                        podiumCdsTypography1920PlusConversation3: "300 2.5rem/1.2 'Noto Sans TC', Helvetica, Arial, 'PingFang TC', '苹方-繁', 'Heiti TC', '黑體-繁', 'Microsoft JhengHei', '微軟正黑體', sans-serif",
                        podiumCdsTypography1920PlusConversation4: "300 1.25rem/1.2 'Noto Sans TC', Helvetica, Arial, 'PingFang TC', '苹方-繁', 'Heiti TC', '黑體-繁', 'Microsoft JhengHei', '微軟正黑體', sans-serif",
                        podiumCdsTypographyBody1: "400 1rem/1.5 'Noto Sans TC', Helvetica, Arial, 'PingFang TC', '苹方-繁', 'Heiti TC', '黑體-繁', 'Microsoft JhengHei', '微軟正黑體', sans-serif",
                        podiumCdsTypographyBody1Strong: "500 1rem/1.5 'Noto Sans TC Medium', Helvetica, Arial, 'PingFang TC', '苹方-繁', 'Heiti TC', '黑體-繁', 'Microsoft JhengHei', '微軟正黑體', sans-serif",
                        podiumCdsTypographyBody2: "400 .875rem/1.5 'Noto Sans TC', Helvetica, Arial, 'PingFang TC', '苹方-繁', 'Heiti TC', '黑體-繁', 'Microsoft JhengHei', '微軟正黑體', sans-serif",
                        podiumCdsTypographyBody2Strong: "500 .875rem/1.5 'Noto Sans TC Medium', Helvetica, Arial, 'PingFang TC', '苹方-繁', 'Heiti TC', '黑體-繁', 'Microsoft JhengHei', '微軟正黑體', sans-serif",
                        podiumCdsTypographyBody3: "400 .75rem/1.5 'Noto Sans TC', Helvetica, Arial, 'PingFang TC', '苹方-繁', 'Heiti TC', '黑體-繁', 'Microsoft JhengHei', '微軟正黑體', sans-serif",
                        podiumCdsTypographyBody3Strong: "500 .75rem/1.5 'Noto Sans TC Medium', Helvetica, Arial, 'PingFang TC', '苹方-繁', 'Heiti TC', '黑體-繁', 'Microsoft JhengHei', '微軟正黑體', sans-serif",
                        podiumCdsTypographyBody4: "400 .625rem/1.5 'Noto Sans TC', Helvetica, Arial, 'PingFang TC', '苹方-繁', 'Heiti TC', '黑體-繁', 'Microsoft JhengHei', '微軟正黑體', sans-serif",
                        podiumCdsTypographyBody4Strong: "500 .625rem/1.5 'Noto Sans TC Medium', Helvetica, Arial, 'PingFang TC', '苹方-繁', 'Heiti TC', '黑體-繁', 'Microsoft JhengHei', '微軟正黑體', sans-serif",
                        podiumCdsTypographyLegal: "400 .875rem/1.5 'Noto Sans TC', Helvetica, Arial, 'PingFang TC', '苹方-繁', 'Heiti TC', '黑體-繁', 'Microsoft JhengHei', '微軟正黑體', sans-serif"
                    },
                    "zh-tw": {
                        podiumCdsTypography320To959Oversize1: "500 6rem/1.1 'Noto Sans TC Medium', Helvetica, Arial, 'PingFang TC', '苹方-繁', 'Heiti TC', '黑體-繁', 'Microsoft JhengHei', '微軟正黑體', sans-serif",
                        podiumCdsTypography320To959Oversize2: "500 4.75rem/1.1 'Noto Sans TC Medium', Helvetica, Arial, 'PingFang TC', '苹方-繁', 'Heiti TC', '黑體-繁', 'Microsoft JhengHei', '微軟正黑體', sans-serif",
                        podiumCdsTypography320To959Oversize3: "500 3.75rem/1.2 'Noto Sans TC Medium', Helvetica, Arial, 'PingFang TC', '苹方-繁', 'Heiti TC', '黑體-繁', 'Microsoft JhengHei', '微軟正黑體', sans-serif",
                        podiumCdsTypography320To959Display1: "900 3rem/1.1 'Noto Sans TC Black', Helvetica, Arial, 'PingFang TC', '苹方-繁', 'Heiti TC', '黑體-繁', 'Microsoft JhengHei', '微軟正黑體', sans-serif",
                        podiumCdsTypography320To959Display2: "900 2.5rem/1.1 'Noto Sans TC Black', Helvetica, Arial, 'PingFang TC', '苹方-繁', 'Heiti TC', '黑體-繁', 'Microsoft JhengHei', '微軟正黑體', sans-serif",
                        podiumCdsTypography320To959Display3: "900 2rem/1.15  'Noto Sans TC Black', Helvetica, Arial, 'PingFang TC', '苹方-繁', 'Heiti TC', '黑體-繁', 'Microsoft JhengHei', '微軟正黑體', sans-serif",
                        podiumCdsTypography320To959Display4: "900 1.5rem/1.15  'Noto Sans TC Black', Helvetica, Arial, 'PingFang TC', '苹方-繁', 'Heiti TC', '黑體-繁', 'Microsoft JhengHei', '微軟正黑體', sans-serif",
                        podiumCdsTypography320To959Conversation1: "300 2rem/1.2 'Noto Sans TC', Helvetica, Arial, 'PingFang TC', '苹方-繁', 'Heiti TC', '黑體-繁', 'Microsoft JhengHei', '微軟正黑體', sans-serif",
                        podiumCdsTypography320To959Conversation2: "300 1.5rem/1.2 'Noto Sans TC', Helvetica, Arial, 'PingFang TC', '苹方-繁', 'Heiti TC', '黑體-繁', 'Microsoft JhengHei', '微軟正黑體', sans-serif",
                        podiumCdsTypography320To959Conversation3: "300 1.25rem/1.2 'Noto Sans TC', Helvetica, Arial, 'PingFang TC', '苹方-繁', 'Heiti TC', '黑體-繁', 'Microsoft JhengHei', '微軟正黑體', sans-serif",
                        podiumCdsTypography320To959Conversation4: "300 1rem/1.5 'Noto Sans TC', Helvetica, Arial, 'PingFang TC', '苹方-繁', 'Heiti TC', '黑體-繁', 'Microsoft JhengHei', '微軟正黑體', sans-serif",
                        podiumCdsTypography320To959EditorialBody1: "400 1rem/1.5 'Noto Sans TC', Helvetica, Arial, 'PingFang TC', '苹方-繁', 'Heiti TC', '黑體-繁', 'Microsoft JhengHei', '微軟正黑體', sans-serif",
                        podiumCdsTypography320To959EditorialBody1Strong: "500 1rem/1.5 'Noto Sans TC Medium', Helvetica, Arial, 'PingFang TC', '苹方-繁', 'Heiti TC', '黑體-繁', 'Microsoft JhengHei', '微軟正黑體', sans-serif",
                        podiumCdsTypography320To1919Title1: "500 2.5rem/1.5 'Noto Sans TC Medium', Helvetica, Arial, 'PingFang TC', '苹方-繁', 'Heiti TC', '黑體-繁', 'Microsoft JhengHei', '微軟正黑體', sans-serif",
                        podiumCdsTypography320To1919Title2: "500 2rem/1.5 'Noto Sans TC Medium', Helvetica, Arial, 'PingFang TC', '苹方-繁', 'Heiti TC', '黑體-繁', 'Microsoft JhengHei', '微軟正黑體', sans-serif",
                        podiumCdsTypography320To1919Title3: "500 1.5rem/1.5 'Noto Sans TC Medium', Helvetica, Arial, 'PingFang TC', '苹方-繁', 'Heiti TC', '黑體-繁', 'Microsoft JhengHei', '微軟正黑體', sans-serif",
                        podiumCdsTypography320To1919Title4: "500 1.25rem/1.5 'Noto Sans TC Medium', Helvetica, Arial, 'PingFang TC', '苹方-繁', 'Heiti TC', '黑體-繁', 'Microsoft JhengHei', '微軟正黑體', sans-serif",
                        podiumCdsTypography960To1439Oversize1: "500 7.5rem/1 'Noto Sans TC Medium', Helvetica, Arial, 'PingFang TC', '苹方-繁', 'Heiti TC', '黑體-繁', 'Microsoft JhengHei', '微軟正黑體', sans-serif",
                        podiumCdsTypography960To1439Oversize2: "500 6rem/1.1 'Noto Sans TC Medium', Helvetica, Arial, 'PingFang TC', '苹方-繁', 'Heiti TC', '黑體-繁', 'Microsoft JhengHei', '微軟正黑體', sans-serif",
                        podiumCdsTypography960To1439Oversize3: "500 4.75rem/1.1 'Noto Sans TC Medium', Helvetica, Arial, 'PingFang TC', '苹方-繁', 'Heiti TC', '黑體-繁', 'Microsoft JhengHei', '微軟正黑體', sans-serif",
                        podiumCdsTypography960To1919Display1: "900 6rem/1.1 'Noto Sans TC Black', Helvetica, Arial, 'PingFang TC', '苹方-繁', 'Heiti TC', '黑體-繁', 'Microsoft JhengHei', '微軟正黑體', sans-serif",
                        podiumCdsTypography960To1919Display2: "900 4.75rem/1.1 'Noto Sans TC Black', Helvetica, Arial, 'PingFang TC', '苹方-繁', 'Heiti TC', '黑體-繁', 'Microsoft JhengHei', '微軟正黑體', sans-serif",
                        podiumCdsTypography960To1919Display3: "900 3.75rem/1.1 'Noto Sans TC Black', Helvetica, Arial, 'PingFang TC', '苹方-繁', 'Heiti TC', '黑體-繁', 'Microsoft JhengHei', '微軟正黑體', sans-serif",
                        podiumCdsTypography960To1919Display4: "900 3rem/1.1 'Noto Sans TC Black', Helvetica, Arial, 'PingFang TC', '苹方-繁', 'Heiti TC', '黑體-繁', 'Microsoft JhengHei', '微軟正黑體', sans-serif",
                        podiumCdsTypography960To1919Conversation1: "300 3rem/1.2 'Noto Sans TC', Helvetica, Arial, 'PingFang TC', '苹方-繁', 'Heiti TC', '黑體-繁', 'Microsoft JhengHei', '微軟正黑體', sans-serif",
                        podiumCdsTypography960To1919Conversation2: "300 2.5rem/1.2 'Noto Sans TC', Helvetica, Arial, 'PingFang TC', '苹方-繁', 'Heiti TC', '黑體-繁', 'Microsoft JhengHei', '微軟正黑體', sans-serif",
                        podiumCdsTypography960To1919Conversation3: "300 2rem/1.2 'Noto Sans TC', Helvetica, Arial, 'PingFang TC', '苹方-繁', 'Heiti TC', '黑體-繁', 'Microsoft JhengHei', '微軟正黑體', sans-serif",
                        podiumCdsTypography960To1919Conversation4: "300 1.25rem/1.2 'Noto Sans TC', Helvetica, Arial, 'PingFang TC', '苹方-繁', 'Heiti TC', '黑體-繁', 'Microsoft JhengHei', '微軟正黑體', sans-serif",
                        podiumCdsTypography960PlusEditorialBody1: "400 1.25rem/1.2 'Noto Sans TC', Helvetica, Arial, 'PingFang TC', '苹方-繁', 'Heiti TC', '黑體-繁', 'Microsoft JhengHei', '微軟正黑體', sans-serif",
                        podiumCdsTypography960PlusEditorialBody1Strong: "500 1.25rem/1.2 'Noto Sans TC Medium', Helvetica, Arial, 'PingFang TC', '苹方-繁', 'Heiti TC', '黑體-繁', 'Microsoft JhengHei', '微軟正黑體', sans-serif",
                        podiumCdsTypography1440To1919Oversize1: "500 9.375rem/1 'Noto Sans TC Medium', Helvetica, Arial, 'PingFang TC', '苹方-繁', 'Heiti TC', '黑體-繁', 'Microsoft JhengHei', '微軟正黑體', sans-serif",
                        podiumCdsTypography1440To1919Oversize2: "500 7.5rem/1 'Noto Sans TC Medium', Helvetica, Arial, 'PingFang TC', '苹方-繁', 'Heiti TC', '黑體-繁', 'Microsoft JhengHei', '微軟正黑體', sans-serif",
                        podiumCdsTypography1440To1919Oversize3: "500 6rem/1.1 'Noto Sans TC Medium', Helvetica, Arial, 'PingFang TC', '苹方-繁', 'Heiti TC', '黑體-繁', 'Microsoft JhengHei', '微軟正黑體', sans-serif",
                        podiumCdsTypography1920PlusOversize1: "500 11.625rem/1 'Noto Sans TC Medium', Helvetica, Arial, 'PingFang TC', '苹方-繁', 'Heiti TC', '黑體-繁', 'Microsoft JhengHei', '微軟正黑體', sans-serif",
                        podiumCdsTypography1920PlusOversize2: "500 9.375rem/1 'Noto Sans TC Medium', Helvetica, Arial, 'PingFang TC', '苹方-繁', 'Heiti TC', '黑體-繁', 'Microsoft JhengHei', '微軟正黑體', sans-serif",
                        podiumCdsTypography1920PlusOversize3: "500 7.5rem/1 'Noto Sans TC Medium', Helvetica, Arial, 'PingFang TC', '苹方-繁', 'Heiti TC', '黑體-繁', 'Microsoft JhengHei', '微軟正黑體', sans-serif",
                        podiumCdsTypography1920PlusDisplay1: "900 7.5rem/1.1 'Noto Sans TC Black', Helvetica, Arial, 'PingFang TC', '苹方-繁', 'Heiti TC', '黑體-繁', 'Microsoft JhengHei', '微軟正黑體', sans-serif",
                        podiumCdsTypography1920PlusDisplay2: "900 6rem/1.1 'Noto Sans TC Black', Helvetica, Arial, 'PingFang TC', '苹方-繁', 'Heiti TC', '黑體-繁', 'Microsoft JhengHei', '微軟正黑體', sans-serif",
                        podiumCdsTypography1920PlusDisplay3: "900 4.75rem/1.1 'Noto Sans TC Black', Helvetica, Arial, 'PingFang TC', '苹方-繁', 'Heiti TC', '黑體-繁', 'Microsoft JhengHei', '微軟正黑體', sans-serif",
                        podiumCdsTypography1920PlusDisplay4: "900 3.75rem/1.1 'Noto Sans TC Black', Helvetica, Arial, 'PingFang TC', '苹方-繁', 'Heiti TC', '黑體-繁', 'Microsoft JhengHei', '微軟正黑體', sans-serif",
                        podiumCdsTypography1920PlusTitle1: "500 3rem/1.5 'Noto Sans TC Medium', Helvetica, Arial, 'PingFang TC', '苹方-繁', 'Heiti TC', '黑體-繁', 'Microsoft JhengHei', '微軟正黑體', sans-serif",
                        podiumCdsTypography1920PlusTitle2: "500 2.5rem/1.5 'Noto Sans TC Medium', Helvetica, Arial, 'PingFang TC', '苹方-繁', 'Heiti TC', '黑體-繁', 'Microsoft JhengHei', '微軟正黑體', sans-serif",
                        podiumCdsTypography1920PlusTitle3: "500 2rem/1.5 'Noto Sans TC Medium', Helvetica, Arial, 'PingFang TC', '苹方-繁', 'Heiti TC', '黑體-繁', 'Microsoft JhengHei', '微軟正黑體', sans-serif",
                        podiumCdsTypography1920PlusTitle4: "500 1.5rem/1.5 'Noto Sans TC Medium', Helvetica, Arial, 'PingFang TC', '苹方-繁', 'Heiti TC', '黑體-繁', 'Microsoft JhengHei', '微軟正黑體', sans-serif",
                        podiumCdsTypography1920PlusConversation1: "300 3.75rem/1.2 'Noto Sans TC', Helvetica, Arial, 'PingFang TC', '苹方-繁', 'Heiti TC', '黑體-繁', 'Microsoft JhengHei', '微軟正黑體', sans-serif",
                        podiumCdsTypography1920PlusConversation2: "300 3rem/1.2 'Noto Sans TC', Helvetica, Arial, 'PingFang TC', '苹方-繁', 'Heiti TC', '黑體-繁', 'Microsoft JhengHei', '微軟正黑體', sans-serif",
                        podiumCdsTypography1920PlusConversation3: "300 2.5rem/1.2 'Noto Sans TC', Helvetica, Arial, 'PingFang TC', '苹方-繁', 'Heiti TC', '黑體-繁', 'Microsoft JhengHei', '微軟正黑體', sans-serif",
                        podiumCdsTypography1920PlusConversation4: "300 1.25rem/1.2 'Noto Sans TC', Helvetica, Arial, 'PingFang TC', '苹方-繁', 'Heiti TC', '黑體-繁', 'Microsoft JhengHei', '微軟正黑體', sans-serif",
                        podiumCdsTypographyBody1: "400 1rem/1.5 'Noto Sans TC', Helvetica, Arial, 'PingFang TC', '苹方-繁', 'Heiti TC', '黑體-繁', 'Microsoft JhengHei', '微軟正黑體', sans-serif",
                        podiumCdsTypographyBody1Strong: "500 1rem/1.5 'Noto Sans TC Medium', Helvetica, Arial, 'PingFang TC', '苹方-繁', 'Heiti TC', '黑體-繁', 'Microsoft JhengHei', '微軟正黑體', sans-serif",
                        podiumCdsTypographyBody2: "400 .875rem/1.5 'Noto Sans TC', Helvetica, Arial, 'PingFang TC', '苹方-繁', 'Heiti TC', '黑體-繁', 'Microsoft JhengHei', '微軟正黑體', sans-serif",
                        podiumCdsTypographyBody2Strong: "500 .875rem/1.5 'Noto Sans TC Medium', Helvetica, Arial, 'PingFang TC', '苹方-繁', 'Heiti TC', '黑體-繁', 'Microsoft JhengHei', '微軟正黑體', sans-serif",
                        podiumCdsTypographyBody3: "400 .75rem/1.5 'Noto Sans TC', Helvetica, Arial, 'PingFang TC', '苹方-繁', 'Heiti TC', '黑體-繁', 'Microsoft JhengHei', '微軟正黑體', sans-serif",
                        podiumCdsTypographyBody3Strong: "500 .75rem/1.5 'Noto Sans TC Medium', Helvetica, Arial, 'PingFang TC', '苹方-繁', 'Heiti TC', '黑體-繁', 'Microsoft JhengHei', '微軟正黑體', sans-serif",
                        podiumCdsTypographyBody4: "400 .625rem/1.5 'Noto Sans TC', Helvetica, Arial, 'PingFang TC', '苹方-繁', 'Heiti TC', '黑體-繁', 'Microsoft JhengHei', '微軟正黑體', sans-serif",
                        podiumCdsTypographyBody4Strong: "500 .625rem/1.5 'Noto Sans TC Medium', Helvetica, Arial, 'PingFang TC', '苹方-繁', 'Heiti TC', '黑體-繁', 'Microsoft JhengHei', '微軟正黑體', sans-serif",
                        podiumCdsTypographyLegal: "400 .875rem/1.5 'Noto Sans TC', Helvetica, Arial, 'PingFang TC', '苹方-繁', 'Heiti TC', '黑體-繁', 'Microsoft JhengHei', '微軟正黑體', sans-serif"
                    }
                }
            }
        },
        1780: (e, o, i) => {
            "use strict";
            if (i.d(o, {
                    A: () => a
                }), 818 != i.j) var r = i(7545);
            var t = i(971);

            function a(e, o, i) {
                return {
                    appConstants: i,
                    fire: function(i, r) {
                        var a;
                        console.warn('The "fire" method in the ux-tread-analytics-client engine is deprecated. Please use "track" instead.'), e.some((function(e) {
                            return a = e(i)
                        })) ? r ? (0, t.forEach)(o, (function(e) {
                            var o = this.async();
                            e(a, o)
                        }), (function() {
                            r()
                        })) : o.forEach((function(e) {
                            return e(a)
                        })) : r && r()
                    },
                    track: function(i, a, n, s) {
                        var l = "function" == typeof a ? a : s;
                        if ("object" === (0, r.A)(i)) {
                            var c, d = i;
                            e.some((function(e) {
                                return c = e(d)
                            })) ? l ? (0, t.forEach)(o, (function(e) {
                                var o = this.async();
                                e(c, o)
                            }), (function() {
                                l()
                            })) : o.forEach((function(e) {
                                return e(c)
                            })) : l && l()
                        }
                    }
                }
            }
        },
        6516: (e, o, i) => {
            "use strict";
            i.d(o, {
                JM: () => r
            });
            var r = ".nike.com",
                t = ".nikecloud.com",
                a = "https://www",
                n = ("https://store".concat(r), "https://secure-store".concat(r), "https://api".concat(r), "".concat(a).concat(r));
            "".concat(a).concat(".converse.com"), "https://uxtesting.prod.commerce".concat(t), "https://experience.prod.commerce".concat(t), "https://experience.test.commerce".concat(t), "".concat(n, "/assets")
        },
        700: (e, o, i) => {
            "use strict";
            i.d(o, {
                a: () => n
            });
            var r = i(7034),
                t = i.n(r),
                a = i(1462).Kw.COOKIE_NAME,
                n = function() {
                    return t().get(a)
                }
        },
        7034: (e, o, i) => {
            var r, t, a;
            void 0 === (t = "function" == typeof(r = a = function() {
                function e() {
                    for (var e = 0, o = {}; e < arguments.length; e++) {
                        var i = arguments[e];
                        for (var r in i) o[r] = i[r]
                    }
                    return o
                }

                function o(e) {
                    return e.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent)
                }
                return function i(r) {
                    function t() {}

                    function a(o, i, a) {
                        if ("undefined" != typeof document) {
                            "number" == typeof(a = e({
                                path: "/"
                            }, t.defaults, a)).expires && (a.expires = new Date(1 * new Date + 864e5 * a.expires)), a.expires = a.expires ? a.expires.toUTCString() : "";
                            try {
                                var n = JSON.stringify(i);
                                /^[\{\[]/.test(n) && (i = n)
                            } catch (e) {}
                            i = r.write ? r.write(i, o) : encodeURIComponent(String(i)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), o = encodeURIComponent(String(o)).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent).replace(/[\(\)]/g, escape);
                            var s = "";
                            for (var l in a) a[l] && (s += "; " + l, !0 !== a[l] && (s += "=" + a[l].split(";")[0]));
                            return document.cookie = o + "=" + i + s
                        }
                    }

                    function n(e, i) {
                        if ("undefined" != typeof document) {
                            for (var t = {}, a = document.cookie ? document.cookie.split("; ") : [], n = 0; n < a.length; n++) {
                                var s = a[n].split("="),
                                    l = s.slice(1).join("=");
                                i || '"' !== l.charAt(0) || (l = l.slice(1, -1));
                                try {
                                    var c = o(s[0]);
                                    if (l = (r.read || r)(l, c) || o(l), i) try {
                                        l = JSON.parse(l)
                                    } catch (e) {}
                                    if (t[c] = l, e === c) break
                                } catch (e) {}
                            }
                            return e ? t[e] : t
                        }
                    }
                    return t.set = a, t.get = function(e) {
                        return n(e, !1)
                    }, t.getJSON = function(e) {
                        return n(e, !0)
                    }, t.remove = function(o, i) {
                        a(o, "", e(i, {
                            expires: -1
                        }))
                    }, t.defaults = {}, t.withConverter = i, t
                }((function() {}))
            }) ? r.call(o, i, o, e) : r) || (e.exports = t), e.exports = a()
        },
        2259: (e, o, i) => {
            "use strict";
            i.d(o, {
                A: () => t,
                d: () => r
            });
            var r = {
                    COUNTRY_COOKIE_KEY: "NIKE_COMMERCE_COUNTRY",
                    LANGUAGE_COOKIE_KEY: "NIKE_COMMERCE_LANG_LOCALE",
                    COMBINED_COOKIE_KEY: "nike_locale",
                    CHOICE_COOKIE_KEY: "CONSUMERCHOICE",
                    CHOSEN_COOKIE_KEY: "CONSUMERCHOICE_SESSION"
                },
                t = {
                    countryRegex: /^[A-Z]{2}$/,
                    legacyLanguageRegex: /^[a-z]{2}_[A-Z]{2}$/,
                    combinedRegex: /^[a-z]{2}\/[a-z]{2}_[a-z]{2}$/
                }
        },
        8426: (e, o, i) => {
            "use strict";
            i.d(o, {
                F: () => n
            });
            var r = i(295),
                t = i.n(r),
                a = function() {
                    return {
                        get: function(e) {
                            return t().get(e)
                        },
                        set: function(e, o, i) {
                            t().set(e, o, i)
                        }
                    }
                },
                n = {
                    createInstance: function(e) {
                        return {
                            get: function(e) {
                                return a().get(e)
                            },
                            set: function(o, i) {
                                a().set(o, i, e)
                            }
                        }
                    }
                }
        },
        3221: (e, o, i) => {
            "use strict";
            i.d(o, {
                L9: () => f,
                lX: () => g,
                If: () => y,
                um: () => h,
                dF: () => C
            });
            var r = i(8122),
                t = i(1979),
                a = i(6516),
                n = i(8426);

            function s(e, o) {
                var i = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    o && (r = r.filter((function(o) {
                        return Object.getOwnPropertyDescriptor(e, o).enumerable
                    }))), i.push.apply(i, r)
                }
                return i
            }
            var l = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        o = n.F.createInstance(function(e) {
                            for (var o = 1; o < arguments.length; o++) {
                                var i = null != arguments[o] ? arguments[o] : {};
                                o % 2 ? s(Object(i), !0).forEach((function(o) {
                                    (0, t.A)(e, o, i[o])
                                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : s(Object(i)).forEach((function(o) {
                                    Object.defineProperty(e, o, Object.getOwnPropertyDescriptor(i, o))
                                }))
                            }
                            return e
                        }({
                            domain: e.domain || a.JM,
                            expires: new Date((new Date).getTime() + 864e5)
                        }, e));
                    return {
                        get: function(e) {
                            return o.get(e)
                        },
                        set: function(e, i) {
                            o.set(e, i)
                        }
                    }
                },
                c = function(e, o) {
                    return l(o).get(e)
                };
            const d = function(e, o) {
                return function() {
                    var i, r, t;
                    return null !== (i = window) && void 0 !== i && null !== (r = i.webShellClient) && void 0 !== r && r.privacy && window.webShellClient.privacy[e] ? (t = window.webShellClient.privacy)[e].apply(t, arguments) : o.apply(void 0, arguments)
                }
            };
            var u = "sq",
                p = {
                    UNSET: {
                        allowPerformance: null,
                        allowMarketing: null
                    },
                    0: {
                        allowPerformance: !1,
                        allowMarketing: !1
                    },
                    1: {
                        allowPerformance: !0,
                        allowMarketing: !1
                    },
                    2: {
                        allowPerformance: !1,
                        allowMarketing: !0
                    },
                    3: {
                        allowPerformance: !0,
                        allowMarketing: !0
                    }
                },
                m = {
                    AT: "Austria",
                    BE: "Belgium",
                    BG: "Bulgaria",
                    HR: "Croatia",
                    CY: "Cyprus",
                    CZ: "Czech Republic",
                    DK: "Denmark",
                    EE: "Estonia",
                    FI: "Finland",
                    FR: "France",
                    DE: "Germany",
                    GR: "Greece",
                    HU: "Hungary",
                    IE: "Ireland, Republic of (EIRE)",
                    IT: "Italy",
                    LV: "Latvia",
                    LT: "Lithuania",
                    LU: "Luxembourg",
                    MT: "Malta",
                    NL: "Netherlands",
                    NO: "Norway",
                    PL: "Poland",
                    PT: "Portugal",
                    RO: "Romania",
                    SK: "Slovakia",
                    SI: "Slovenia",
                    ES: "Spain",
                    SE: "Sweden",
                    CH: "Switzerland",
                    GB: "United Kingdom"
                },
                y = d("isCookieRequiredCountry", (function() {
                    return !!m[(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "").toUpperCase()]
                })),
                v = [],
                g = d("getPreferences", (function(e, o) {
                    var i = c(u, o),
                        t = ((0, r.I_)() || {}).cc || e,
                        a = Boolean(t);
                    if (!i) return !a || y(t) ? p.UNSET : p[3];
                    if (p[i]) return p[i];
                    throw new Error("unknown value for privacy cookie: ".concat(i))
                })),
                f = d("addInitialPreferenceListener", (function(e) {
                    v.push(e)
                })),
                h = (d("getInitialPreferenceListeners", (function() {
                    return v
                })), d("isMarketingAllowed", (function(e, o) {
                    return g(e, o).allowMarketing
                })), d("isPerformanceAllowed", (function(e, o) {
                    return g(e, o).allowPerformance
                })), d("isPreferenceSet", (function(e) {
                    return void 0 !== c(u, e)
                }))),
                C = d("setPreferences", (function(e, o) {
                    for (var i, r, t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, a = arguments.length > 3 ? arguments[3] : void 0, n = !h(t), s = 0; s <= 3; s += 1)
                        if (p[s].allowPerformance === e && p[s].allowMarketing === o) {
                            i = u, r = s, l(t).set(i, r);
                            break
                        }
                    return n && v.forEach((function(e) {
                        return e()
                    })), g(a, t)
                }))
        },
        295: (e, o, i) => {
            var r, t, a;
            void 0 === (t = "function" == typeof(r = a = function() {
                function e() {
                    for (var e = 0, o = {}; e < arguments.length; e++) {
                        var i = arguments[e];
                        for (var r in i) o[r] = i[r]
                    }
                    return o
                }

                function o(e) {
                    return e.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent)
                }
                return function i(r) {
                    function t() {}

                    function a(o, i, a) {
                        if ("undefined" != typeof document) {
                            "number" == typeof(a = e({
                                path: "/"
                            }, t.defaults, a)).expires && (a.expires = new Date(1 * new Date + 864e5 * a.expires)), a.expires = a.expires ? a.expires.toUTCString() : "";
                            try {
                                var n = JSON.stringify(i);
                                /^[\{\[]/.test(n) && (i = n)
                            } catch (e) {}
                            i = r.write ? r.write(i, o) : encodeURIComponent(String(i)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), o = encodeURIComponent(String(o)).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent).replace(/[\(\)]/g, escape);
                            var s = "";
                            for (var l in a) a[l] && (s += "; " + l, !0 !== a[l] && (s += "=" + a[l].split(";")[0]));
                            return document.cookie = o + "=" + i + s
                        }
                    }

                    function n(e, i) {
                        if ("undefined" != typeof document) {
                            for (var t = {}, a = document.cookie ? document.cookie.split("; ") : [], n = 0; n < a.length; n++) {
                                var s = a[n].split("="),
                                    l = s.slice(1).join("=");
                                i || '"' !== l.charAt(0) || (l = l.slice(1, -1));
                                try {
                                    var c = o(s[0]);
                                    if (l = (r.read || r)(l, c) || o(l), i) try {
                                        l = JSON.parse(l)
                                    } catch (e) {}
                                    if (t[c] = l, e === c) break
                                } catch (e) {}
                            }
                            return e ? t[e] : t
                        }
                    }
                    return t.set = a, t.get = function(e) {
                        return n(e, !1)
                    }, t.getJSON = function(e) {
                        return n(e, !0)
                    }, t.remove = function(o, i) {
                        a(o, "", e(i, {
                            expires: -1
                        }))
                    }, t.defaults = {}, t.withConverter = i, t
                }((function() {}))
            }) ? r.call(o, i, o, e) : r) || (e.exports = t), e.exports = a()
        },
        3116: (e, o, i) => {
            "use strict";
            i.d(o, {
                u: () => n
            });
            var r = i(1594);
            let t = 818 != i.j ? [] : null;
            const a = (e, o) => i => {
                    null !== e.modalManager && (e.modalManager.activeModalID = i, t.forEach((r => {
                        r({
                            isOpen: o === i,
                            modalManager: e.modalManager
                        })
                    })))
                },
                n = (e = ("undefined" == typeof window ? null : new window.webShellClient.ModalManager), o = Math.random().toString()) => {
                    var i;
                    const n = {
                            isOpen: !1,
                            modalManager: e
                        },
                        s = a(n, o),
                        l = e => {
                            null !== n.modalManager && (n.modalManager.refEl = e)
                        },
                        [, c] = (0, r.useState)();
                    return null !== n.modalManager && (n.modalManager.setActiveModalID = a(n), n.modalManager.setReferringElement = l), (0, r.useEffect)((() => (t.push(c), () => {
                        t = t.filter((e => e !== c))
                    })), []), [{
                        isOpen: o === (null === (i = n.modalManager) || void 0 === i ? void 0 : i.activeModalID),
                        modalManager: n.modalManager
                    }, s, l]
                }
        },
        9281: (e, o, i) => {
            "use strict";
            i.d(o, {
                d: () => n
            });
            var r = i(1594);
            if (818 != i.j) var t = i(1497);
            const a = (e, o = 100, i = !1) => {
                    const a = (0, t.A)(e),
                        n = r.useRef(),
                        s = [o, i, a];

                    function l() {
                        n.current && clearTimeout(n.current), n.current = void 0
                    }

                    function c() {
                        n.current = void 0
                    }
                    return r.useEffect((() => l), s), r.useCallback((function() {
                        const e = arguments,
                            {
                                current: r
                            } = n;
                        if (void 0 === r && i) return n.current = setTimeout(c, o), a.current.apply(null, e);
                        r && clearTimeout(r), n.current = setTimeout((() => {
                            n.current = void 0, a.current.apply(null, e)
                        }), o)
                    }), s)
                },
                n = (e, o, i) => {
                    const t = r.useState(e);
                    return [t[0], a(t[1], o, i)]
                }
        },
        9250: (e, o, i) => {
            "use strict";
            i.d(o, {
                A: () => t
            });
            var r = i(1594);
            const t = 818 != i.j ? function(e, o, i, t) {
                const a = r.useRef(i),
                    n = r.useRef(t);
                r.useEffect((() => {
                    a.current = i, n.current = t
                })), r.useEffect((() => {
                    const i = e && "current" in e ? e.current : e;
                    if (!i) return;
                    let r = 0;

                    function t(...e) {
                        r || a.current.apply(this, e)
                    }
                    i.addEventListener(o, t);
                    const s = n.current;
                    return () => {
                        r = 1, i.removeEventListener(o, t), s && s()
                    }
                }), [e, o])
            } : null
        },
        1497: (e, o, i) => {
            "use strict";
            i.d(o, {
                A: () => t
            });
            var r = i(1594);
            const t = 818 != i.j ? e => {
                const o = r.useRef(e);
                return r.useEffect((() => {
                    o.current = e
                })), o
            } : null
        },
        971: function(e, o) {
            ! function(e) {
                e.forEach = function(e, o, i) {
                    var r = -1,
                        t = e.length >>> 0;
                    ! function a(n) {
                        var s, l = !1 === n;
                        do {
                            ++r
                        } while (!(r in e) && r !== t);
                        l || r === t ? i && i(!l, e) : (n = o.call({
                            async: function() {
                                return s = !0, a
                            }
                        }, e[r], r, e), s || a(n))
                    }()
                }
            }(o || this)
        },
        9002: (e, o, i) => {
            "use strict";
            i.d(o, {
                A: () => L
            });
            var r = i(1780),
                t = i(3221),
                a = i(3142);

            function n(e) {
                var o;
                const {
                    country: i,
                    useGeoPrivacy: r
                } = e;
                return !(null !== (o = window.NikePrivacy) && void 0 !== o && o.isEnabled || !(0, a.A)(i, r) || (0, t.um)())
            }
            const s = "nikecom",
                l = "Search Clear Clicked",
                c = "Search Submitted",
                d = "Search Preview Clicked",
                u = "Search Typeahead Clicked",
                p = "Search Typeahead Shown",
                m = "Search Popular Suggestion Clicked",
                y = "Nav Shopping Menu Clicked",
                v = "Nav Shortcut Clicked",
                g = "Nav Brand Bar Clicked",
                f = "Nav Membership Clicked",
                h = "Nav Account Clicked",
                C = "Nav Cart Clicked",
                T = "Nav Geo Mismatch Clicked",
                b = "Nav Geo Selection Auto Opened",
                H = "Nav Geo Selection Clicked",
                A = "Nav Help Clicked",
                S = "Nav Footer Clicked",
                N = "Find A Store Clicked",
                P = "Search Opened",
                w = "Search Closed",
                M = {
                    [h]: "nav-account-clicked",
                    [g]: "nav-brand-bar-clicked",
                    [C]: "nav-cart-clicked",
                    [S]: "nav-footer-clicked",
                    [T]: "nav-geo-mismatch-clicked",
                    [b]: "nav-geo-selection-auto-opened",
                    [H]: "nav-geo-selection-clicked",
                    [A]: "nav-help-clicked",
                    [f]: "nav-membership-clicked",
                    [l]: "search-clear-clicked",
                    [w]: "nav-search-close",
                    [P]: "nav-search-open",
                    [m]: "search-popular-suggestion-clicked",
                    [d]: "search-preview-clicked",
                    [c]: "search-submitted",
                    [u]: "search-typeahead-clicked",
                    [p]: "search-typeahead-shown",
                    [y]: "nav-shopping-menu-clicked",
                    [v]: "nav-shortcut-clicked",
                    [N]: "find-a-store-clicked"
                };

            function k() {
                if ("undefined" != typeof window) return window.webShellClient.analytics
            }
            const O = {
                isFunctional: !1,
                isMarketing: !1,
                isPerformance: !0
            };

            function E(e, o) {
                const i = {
                    action_typeaheadSuggestionShown: e => {
                        let {
                            props: o
                        } = e;
                        const {
                            searchTerm: i
                        } = o, r = "user typed";
                        return {
                            analyticsEventName: p,
                            analyticsProperties: {
                                searchTerm: i,
                                searchTermType: "".concat(r, ":").concat(i),
                                searchType: r
                            }
                        }
                    },
                    click_closeMobileMenu: () => ({
                        analyticsEventName: v,
                        analyticsProperties: {
                            clickActivity: "nav:menu close"
                        }
                    }),
                    click_geoMismatchConfirm: e => {
                        var o, i;
                        const r = "nav:geo mismatch:confirm:".concat((null == e || null === (o = e.props) || void 0 === o ? void 0 : o.country) || "", ":").concat((null == e || null === (i = e.props) || void 0 === i ? void 0 : i.language) || "");
                        return {
                            analyticsEventName: T,
                            analyticsProperties: {
                                clickActivity: r
                            }
                        }
                    },
                    click_geoMismatchDismiss: () => ({
                        analyticsEventName: T,
                        analyticsProperties: {
                            clickActivity: "nav:geo mismatch:close"
                        }
                    }),
                    click_geoMismatchShown: e => {
                        let {
                            props: o
                        } = e;
                        const i = "nav:geo mismatch:displayed:".concat(o.country);
                        return {
                            analyticsEventName: T,
                            analyticsProperties: {
                                clickActivity: i
                            }
                        }
                    },
                    click_headerLogo: e => {
                        var o;
                        let {
                            props: i
                        } = e;
                        const r = "nav:".concat(null == i || null === (o = i.dataset) || void 0 === o ? void 0 : o.brand, ":home");
                        return {
                            analyticsEventName: g,
                            analyticsProperties: {
                                clickActivity: r
                            }
                        }
                    },
                    click_navAccount: e => {
                        var o;
                        const i = "nav:".concat(((null == e || null === (o = e.props) || void 0 === o ? void 0 : o.path) || "").split(":").slice(0, 2).join(":"));
                        return {
                            analyticsEventName: h,
                            analyticsProperties: {
                                clickActivity: i
                            }
                        }
                    },
                    click_navBrandBar: e => {
                        var o;
                        const i = "nav:".concat((null == e || null === (o = e.props) || void 0 === o ? void 0 : o.label) || "");
                        return {
                            analyticsEventName: g,
                            analyticsProperties: {
                                clickActivity: i
                            }
                        }
                    },
                    click_navCart: () => ({
                        analyticsEventName: C,
                        analyticsProperties: {
                            clickActivity: "nav:cart"
                        },
                        viewChannel: "cart"
                    }),
                    click_navCountrySelectionAutoOpen: e => {
                        var o, i;
                        const r = e.props.supported ? "nav:geo selection:open:language tunnel:".concat((null == e || null === (o = e.props) || void 0 === o ? void 0 : o.country) || "") : "nav:geo selection:open:country not supported:".concat((null == e || null === (i = e.props) || void 0 === i ? void 0 : i.country) || "");
                        return {
                            analyticsEventName: b,
                            analyticsProperties: {
                                clickActivity: r
                            }
                        }
                    },
                    click_navCountrySelectionDismiss: e => {
                        var o;
                        const i = "nav:geo selection:close:".concat((null == e || null === (o = e.props) || void 0 === o ? void 0 : o.country) || "");
                        return {
                            analyticsEventName: H,
                            analyticsProperties: {
                                clickActivity: i
                            }
                        }
                    },
                    click_navCountrySelectionOpen: e => {
                        var o;
                        const i = "nav:geo selection:open:".concat((null == e || null === (o = e.props) || void 0 === o ? void 0 : o.country) || "");
                        return {
                            analyticsEventName: H,
                            analyticsProperties: {
                                clickActivity: i
                            }
                        }
                    },
                    click_navCountrySelectionSuccess: e => {
                        var o, i;
                        const r = "nav:geo selection:selected:".concat((null == e || null === (o = e.props) || void 0 === o ? void 0 : o.country) || "", ":").concat((null == e || null === (i = e.props) || void 0 === i ? void 0 : i.language) || "");
                        return {
                            analyticsEventName: H,
                            analyticsProperties: {
                                clickActivity: r
                            }
                        }
                    },
                    click_navFooter: e => {
                        var o;
                        const i = "nav:footer:".concat((null == e || null === (o = e.props) || void 0 === o ? void 0 : o.path) || "");
                        return {
                            analyticsEventName: S,
                            analyticsProperties: {
                                clickActivity: i
                            }
                        }
                    },
                    click_navHelpMenu: e => {
                        var o;
                        const i = "nav:".concat((null == e || null === (o = e.props) || void 0 === o ? void 0 : o.path) || "");
                        return {
                            analyticsEventName: A,
                            analyticsProperties: {
                                clickActivity: i
                            }
                        }
                    },
                    click_navMembership: e => {
                        var o;
                        const i = "nav:".concat((null == e || null === (o = e.props) || void 0 === o ? void 0 : o.path) || "");
                        return {
                            analyticsEventName: f,
                            analyticsProperties: {
                                clickActivity: i
                            }
                        }
                    },
                    click_navMobileHelpMenu: e => {
                        var o;
                        const i = "nav:menu:".concat((null == e || null === (o = e.props) || void 0 === o ? void 0 : o.path) || "");
                        return {
                            analyticsEventName: A,
                            analyticsProperties: {
                                clickActivity: i
                            }
                        }
                    },
                    click_navOnsiteSearchTypeahead: e => {
                        let {
                            props: o
                        } = e;
                        const {
                            searchTerm: i
                        } = o, r = "typeahead";
                        return {
                            analyticsEventName: u,
                            analyticsProperties: {
                                searchTerm: i,
                                searchTermType: "".concat(r, ":").concat(i),
                                searchType: r
                            }
                        }
                    },
                    click_navShoppingMenu: e => {
                        let {
                            props: o
                        } = e;
                        const i = "nav:shop>".concat(((null == o ? void 0 : o.path) || "").replace(/:/g, ">").replace("header>", "").replace(/^root>/, ""));
                        return {
                            analyticsEventName: y,
                            analyticsProperties: {
                                clickActivity: i,
                                destinationUrl: o.href
                            }
                        }
                    },
                    click_navShortcut: e => {
                        var o;
                        const i = (null == e || null === (o = e.props) || void 0 === o ? void 0 : o.path) || "",
                            r = "nav:".concat(i),
                            t = {
                                analyticsEventName: v,
                                analyticsProperties: {
                                    clickActivity: r
                                }
                            };
                        return "favorites" === i && (t.viewChannel = "favorites"), t
                    },
                    click_navShortcut_mobile: e => {
                        var o;
                        const i = "nav:menu:".concat((null == e || null === (o = e.props) || void 0 === o ? void 0 : o.path) || "");
                        return {
                            analyticsEventName: v,
                            analyticsProperties: {
                                clickActivity: i
                            }
                        }
                    },
                    click_navStoreLocator: () => ({
                        analyticsEventName: N,
                        analyticsProperties: {
                            clickActivity: "nav:find a store"
                        }
                    }),
                    click_openMobileMenu: () => ({
                        analyticsEventName: v,
                        analyticsProperties: {
                            clickActivity: "nav:menu open"
                        }
                    }),
                    click_popularSearchSelection: e => {
                        let {
                            props: o
                        } = e;
                        const i = (null == o ? void 0 : o.path) || "",
                            r = "popular term";
                        return {
                            analyticsEventName: m,
                            analyticsProperties: {
                                searchTerm: i,
                                searchTermType: "".concat(r, ":").concat(i),
                                searchType: r
                            }
                        }
                    },
                    click_searchClear: () => ({
                        analyticsEventName: l,
                        analyticsProperties: {
                            clickActivity: "nav:search:cleared"
                        }
                    }),
                    click_searchOpen: () => ({
                        analyticsEventName: P,
                        analyticsProperties: {
                            clickActivity: "nav:search:open"
                        }
                    }),
                    click_searchClose: () => ({
                        analyticsEventName: w,
                        analyticsProperties: {
                            clickActivity: "nav:search:close"
                        }
                    }),
                    submit_navOnsiteSearchUserTyped: e => {
                        let {
                            searchItem: o
                        } = e;
                        const i = "user typed";
                        return {
                            analyticsEventName: c,
                            analyticsProperties: {
                                searchTerm: o,
                                searchTermType: "".concat(i, ":").concat(o),
                                searchType: i
                            }
                        }
                    },
                    visualSearchItemClick: e => {
                        let {
                            props: o
                        } = e;
                        const {
                            eventProps: i = {}
                        } = o, {
                            searchTerm: r,
                            itemSelected: t
                        } = i, a = "search preview";
                        return {
                            analyticsEventName: d,
                            analyticsProperties: {
                                products: [{
                                    productId: t
                                }],
                                searchTerm: r,
                                searchTermType: "".concat(a, ":").concat(r),
                                searchType: a
                            }
                        }
                    }
                };
                return r => {
                    if (!i[r.type]) return null;
                    const t = function(e) {
                            return "function" == typeof e ? e() : e || {}
                        }(e),
                        a = function(e) {
                            let o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            const {
                                experimentManager: i
                            } = o;
                            return i && i.getExperimentData ? i.getExperimentData(e) : {}
                        }(t, o),
                        n = function(e) {
                            const o = {};
                            return null != e && e.abTest && (o.experiments = e.abTest.optimizely.map((e => "".concat(e.experimentId, ":").concat(e.variationId)))), o
                        }(a),
                        s = i[r.type](r, t);
                    return {
                        abTest: n,
                        eventName: r.type,
                        privacy: { ...O
                        },
                        ...s,
                        ...t
                    }
                }
            }
            var x = i(8779),
                F = i(942),
                D = i(4378);
            const B = {
                    __dumb: !0,
                    track(e, o) {
                        "function" == typeof o && o()
                    }
                },
                L = function(e) {
                    let o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    ! function() {
                        var e;
                        const o = k();
                        null === (e = window) || void 0 === e || null === (e = e.analyticsClient) || void 0 === e || e.load(), o && o.load()
                    }();
                    let i = B;
                    const {
                        appInfo: t = {},
                        eventInfo: a = {},
                        sinks: l = [],
                        useGeoPrivacy: c
                    } = e.opts, {
                        country: d,
                        language: u
                    } = e.locale, p = {
                        appInfo: t,
                        country: d,
                        eventInfo: a,
                        language: u,
                        sinks: l,
                        useGeoPrivacy: c
                    }, {
                        queueConditions: m = [n]
                    } = o, y = [];

                    function v() {
                        for (; y.length;) {
                            const {
                                payload: e,
                                callback: o
                            } = y.shift();
                            i.track(e, o)
                        }
                    }
                    if (!Boolean(null == t ? void 0 : t.environment)) return i;
                    const g = {
                        getBaseEngine: () => i,
                        getEventsQueue: () => y,
                        processQueue: v,
                        track: function(e, o) {
                            ! function(e) {
                                let o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : x.lQ;
                                y.push({
                                    callback: o,
                                    payload: e
                                })
                            }(e, o),
                            function(e) {
                                return m.some((o => o(p, e)))
                            }(e) ? "function" == typeof o && o(): v()
                        }
                    };
                    var f;
                    return i = (0, r.A)(function(e, o) {
                        return [E(e, o)]
                    }(a, e), function(e) {
                        const {
                            appInfo: o
                        } = e.opts, {
                            country: i,
                            language: r
                        } = e.locale;
                        return [function(e) {
                            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : x.lQ;
                            const a = k(),
                                {
                                    analyticsEventName: n
                                } = e,
                                l = M[n],
                                c = "production".startsWith("prod") ? "2iv4Qa7rFEipAs4iE850BkBpTYQvlAFZ" : "POwa4r8vBBSw7xdQZ0dqGlNuyaT7Y7pZ";
                            if (!a || !n || !l) return t();
                            const {
                                viewName: d,
                                viewChannel: u,
                                analyticsProperties: p = {},
                                abTest: m
                            } = e, y = d ? d.toLowerCase() : void 0, v = u || (null == o ? void 0 : o.viewChannel), g = {
                                app: {
                                    backendPlatform: (null == o ? void 0 : o.platform) || "",
                                    domain: (0, D.g)().hostname,
                                    version: "3.1.18"
                                },
                                locale: {
                                    country: i.toLowerCase(),
                                    language: "".concat(i, "_").concat(r).toLowerCase()
                                },
                                view: {
                                    experienceType: s,
                                    pageName: v && y ? "".concat(s, ">").concat(v, ">").concat(y) : v ? "".concat(s, ">").concat(v) : "".concat(s),
                                    pageType: v ? v.toLowerCase() : void 0
                                },
                                ...p
                            };
                            Object.keys(m).length && (g.abTest = m);
                            const f = {
                                $schema: "".concat("https://www.nike.com/assets/measure/schemas/digital-product/dotcom/platform/web/classification/experience-event/experience/global-nav/event-type/track/event-name", "/").concat(l, "/").concat("version/LATEST/schema.json"),
                                writeKey: c
                            };
                            return a.track(n, g, f), t()
                        }]
                    }(e).concat(l), t), "undefined" != typeof window && (null === (f = window) || void 0 === f || null === (f = f.NikePrivacy) || void 0 === f || !f.isEnabled) && F.Fl.addInitialListener(v), g
                }
        },
        4604: (e, o, i) => {
            "use strict";
            i.d(o, {
                Ay: () => l,
                ib: () => s,
                px: () => n
            });
            var r = i(5098),
                t = i.n(r);
            const a = "newrelic",
                n = "dotcom-nav-v3";

            function s() {
                return "undefined" != typeof window && window[a]
            }

            function l(e) {
                var o, i;

                function r(o, i) {
                    const {
                        env: r
                    } = e;
                    if (!s()) return "prod" !== r && t().warn("Global newrelic instance is inaccessible"), !1;
                    const a = i ? "".concat(n, "-").concat(i) : n;
                    return s().addPageAction(a, o), !0
                }

                function a(o, i) {
                    const {
                        id: t,
                        timestamp: a,
                        version: n
                    } = e.generation || {};
                    return r({
                        generationId: t,
                        generationTimestamp: a,
                        generationVersion: n,
                        ...o
                    }, i)
                }
                return null === (o = s()) || void 0 === o || null === (i = o.setCustomAttribute) || void 0 === i || i.call(o, "navVersion", "v3"), {
                    error: function(e) {
                        let {
                            stack: o,
                            message: i
                        } = e;
                        return a({
                            context: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                            errorMessage: i,
                            errorStack: o,
                            type: "error"
                        })
                    },
                    initPerformanceMetrics: function() {
                        window.addEventListener("load", (() => {
                            var e, o;
                            const i = null === (e = window.performance) || void 0 === e || null === (o = e.getEntriesByType) || void 0 === o ? void 0 : o.call(e, "navigation")[0];
                            i && (a({
                                context: "v3PageDomInteractive",
                                duration: i.domInteractive,
                                entryType: i.entryType
                            }), a({
                                context: "v3PageLoad",
                                duration: i.loadEventStart,
                                entryType: i.entryType
                            }))
                        }))
                    },
                    log: a,
                    startTrace: function() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                        const {
                            startTime: o
                        } = window.performance.mark("".concat(e, "Start"));
                        return function() {
                            const {
                                startTime: i
                            } = window.performance.mark("".concat(e, "End")), {
                                duration: r,
                                entryType: t
                            } = window.performance.measure("".concat(e, "Measure"), "".concat(e, "Start"), "".concat(e, "End"));
                            return a({
                                context: e,
                                entryType: t,
                                duration: r,
                                startTraceTime: o,
                                stopTraceTime: i,
                                type: "trace"
                            })
                        }
                    },
                    trigger: r
                }
            }
        },
        2893: (e, o, i) => {
            "use strict";
            i.d(o, {
                t: () => l
            });
            var r = i(1594),
                t = i.n(r),
                a = i(9067),
                n = i.n(a),
                s = i(4604);
            class l extends t().Component {
                constructor(e) {
                    super(e), this.state = {
                        hasError: !1
                    }
                }
                componentDidCatch(e, o) {
                    this.setState({
                        hasError: !0
                    });
                    const i = (0, s.ib)();
                    null == i || i.addPageAction("".concat(s.px), {
                        context: "AppErrorBoundary",
                        errorMessage: e.message,
                        errorStack: e.stack,
                        errorInfo: o,
                        type: "error"
                    })
                }
                render() {
                    return this.state.hasError ? null : this.props.children
                }
            }
            l.propTypes = {
                children: n().node.isRequired
            }
        },
        1431: (e, o, i) => {
            "use strict";
            i.d(o, {
                A: () => w
            });
            var r = i(9575),
                t = i(1594),
                a = i.n(t),
                n = i(9067),
                s = i(6211),
                l = i(1455),
                c = i(1541),
                d = i(180),
                u = i(884),
                p = i(4357),
                m = i(9787);

            function y(e) {
                return y = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, y(e)
            }

            function v(e, o) {
                var i, r = Object.keys(e);
                return Object.getOwnPropertySymbols && (i = Object.getOwnPropertySymbols(e), o && (i = i.filter((function(o) {
                    return Object.getOwnPropertyDescriptor(e, o).enumerable
                }))), r.push.apply(r, i)), r
            }

            function g(e) {
                var o, i;
                for (o = 1; o < arguments.length; o++) i = null != arguments[o] ? arguments[o] : {}, o % 2 ? v(Object(i), !0).forEach((function(o) {
                    var r, t, a, n;
                    r = e, t = o, a = i[o], n = function(e) {
                        if ("object" != y(e) || !e) return e;
                        var o, i = e[Symbol.toPrimitive];
                        if (void 0 !== i) {
                            if ("object" != y(o = i.call(e, "string"))) return o;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return String(e)
                    }(t), (t = "symbol" == y(n) ? n : String(n)) in r ? Object.defineProperty(r, t, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : r[t] = a
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : v(Object(i)).forEach((function(o) {
                    Object.defineProperty(e, o, Object.getOwnPropertyDescriptor(i, o))
                }));
                return e
            }
            var f = {
                    s: a().createElement(a().Fragment, null, a().createElement("path", {
                        stroke: "currentColor",
                        strokeWidth: "1.5",
                        d: "M17.5 14.75L12 9.25l-5.5 5.5"
                    })),
                    m: a().createElement(a().Fragment, null, a().createElement("path", {
                        stroke: "currentColor",
                        strokeWidth: "1.5",
                        d: "M5.034 15.527L12 8.561l6.967 6.966"
                    })),
                    l: a().createElement(a().Fragment, null, a().createElement("path", {
                        stroke: "currentColor",
                        strokeWidth: "3",
                        d: "M10.067 31.054L24 17.122l13.934 13.932"
                    }))
                },
                h = a().memo((function(e) {
                    return a().createElement(m.A, g(g({}, e), {}, {
                        paths: f,
                        fill: "none"
                    }))
                })),
                C = i(4388),
                T = i(27),
                b = i(8858),
                H = i(4912),
                A = i(3037);
            const S = e => {
                    let {
                        isMenuOpen: o,
                        passedProps: i
                    } = e;
                    return o ? a().createElement(h, i) : a().createElement(C.a, i)
                },
                N = e => {
                    let {
                        children: o,
                        isMenuOpen: i,
                        isFocusVisible: r
                    } = e;
                    return i ? a().createElement(s.n1, {
                        autoFocus: r,
                        restoreFocus: !0
                    }, o) : a().createElement(t.Fragment, null, o)
                },
                P = e => {
                    const {
                        testId: o,
                        children: i,
                        menuLink: n,
                        menuLabel: s,
                        MenuContainerComponent: m,
                        detailsContentCustomClass: y,
                        isMenuOpen: v,
                        setMenuOpen: g,
                        containerClassName: f,
                        styledSummaryText: h
                    } = e, {
                        isFocusVisible: C,
                        focusProps: P
                    } = function(e = {}) {
                        let {
                            autoFocus: o = !1,
                            isTextInput: i,
                            within: r
                        } = e, a = (0, t.useRef)({
                            isFocused: !1,
                            isFocusVisible: o || (0, l.pP)()
                        }), [n, s] = (0, t.useState)(!1), [u, p] = (0, t.useState)((() => a.current.isFocused && a.current.isFocusVisible)), m = (0, t.useCallback)((() => p(a.current.isFocused && a.current.isFocusVisible)), []), y = (0, t.useCallback)((e => {
                            a.current.isFocused = e, s(e), m()
                        }), [m]);
                        (0, l.K7)((e => {
                            a.current.isFocusVisible = e, m()
                        }), [], {
                            isTextInput: i
                        });
                        let {
                            focusProps: v
                        } = (0, c.i)({
                            isDisabled: r,
                            onFocusChange: y
                        }), {
                            focusWithinProps: g
                        } = (0, d.R)({
                            isDisabled: !r,
                            onFocusWithinChange: y
                        });
                        return {
                            isFocused: n,
                            isFocusVisible: u,
                            focusProps: r ? g : v
                        }
                    }(), {
                        MENU: w
                    } = T.AJ, M = "Account Menu" === s, k = (0, t.useRef)(null), {
                        keyboardProps: O
                    } = (0, u.d)({
                        onKeyDown: e => {
                            "Escape" === e.key && (g(!1), k.current.focus())
                        }
                    }), {
                        keyboardProps: E
                    } = (0, u.d)({
                        onKeyDown: e => {
                            "Enter" === e.key || "Space" === e.key ? (g(!v), e.nativeEvent.preventDefault()) : e.shiftKey && "Tab" === e.key && v && g(!1)
                        }
                    }), x = (0, A.A)((0, H.A)("nav_menu_aria_label", w), {
                        menu: e.menuLabel || ""
                    }), {
                        focusWithinProps: F
                    } = (0, d.R)({
                        onBlurWithin: () => g(!1)
                    });
                    return i ? a().createElement(m, {
                        className: f,
                        "data-testid": o,
                        onMouseEnter: () => g(!0),
                        onMouseLeave: () => g(!1)
                    }, n, a().createElement(b.w9, {
                        className: (0, p.A)(v && T.U8),
                        onToggle: e => g(e.currentTarget.open),
                        open: v
                    }, a().createElement("summary", (0, r.A)({
                        "aria-expanded": v,
                        "aria-haspopup": "menu",
                        "aria-label": x,
                        className: (0, p.A)(b.ui, M && b.T8),
                        ref: k,
                        role: "menuitem",
                        tabIndex: 0
                    }, P, E), h, a().createElement(S, {
                        isMenuOpen: v,
                        passedProps: {
                            "aria-hidden": "true",
                            size: "s",
                            className: b.yf
                        }
                    })), a().createElement(N, {
                        isFocusVisible: C,
                        isMenuOpen: v
                    }, a().createElement("div", (0, r.A)({
                        className: y,
                        "data-testid": "dropdown-details-container"
                    }, F, O), i)))) : a().createElement(m, {
                        className: f,
                        "data-testid": o
                    }, n)
                },
                w = P;
            P.propTypes = {
                children: (0, n.oneOfType)([n.element, n.array]),
                detailsContentCustomClass: n.string,
                isMenuOpen: n.bool,
                testId: n.string,
                setMenuOpen: n.func,
                menuLink: n.element,
                MenuContainerComponent: n.elementType,
                containerClassName: n.string,
                menuLabel: n.string,
                styledSummaryText: n.element
            }, N.propTypes = {
                children: (0, n.oneOfType)([n.element, n.array]),
                isMenuOpen: n.bool,
                isFocusVisible: n.bool
            }, S.propTypes = {
                isMenuOpen: n.bool,
                passedProps: n.object
            }
        },
        8858: (e, o, i) => {
            "use strict";
            i.d(o, {
                T8: () => u,
                ui: () => c,
                w9: () => p,
                yf: () => d
            });
            var r, t, a = i(2119),
                n = i(3080),
                s = i(27);
            const l = "".concat("dropdown", "__content"),
                c = "drop-down-accessibility-button",
                d = "summary-caret",
                u = "account-icon",
                p = (n.A.div(r || (r = (0, a.A)(["\n  position: absolute;\n  min-width: 240px;\n  right: 0;\n  top: ", "px;\n  background: var(--podium-cds-color-bg-primary);\n  min-height: 200px;\n  opacity: 0;\n  visibility: hidden;\n  transform: translateY(-20px);\n  transition: opacity 200ms;\n  border-radius: 0 0 8px 8px;\n  z-index: 100;\n\n  &.", " {\n    opacity: 1;\n    visibility: visible;\n    transform: translateY(0px);\n    transition: opacity 200ms, visibility 0s, transform 250ms ease;\n  }\n\n  .", " {\n    padding-top: 20px;\n    padding-left: 15px;\n  }\n"])), s.B9, s.Gd, l), n.A.details(t || (t = (0, a.A)(["\n  .", " {\n    display: flex;\n    align-items: center;\n    opacity: 0;\n    svg {\n      width: 12px;\n    }\n    &:focus {\n      opacity: 1;\n      transition: transform ease, opacity 500ms;\n    }\n  }\n  .", " {\n    width: 0px;\n  }\n  .", ":focus {\n    width: auto;\n  }\n  .", " {\n    // svg icon will trigger a mouseleave event without this style\n    pointer-events: none;\n  }\n  /** hides the default arrow on some browsers (safari) */\n  > summary::-webkit-details-marker {\n    display: none;\n  }\n"])), c, u, u, d))
        },
        8814: (e, o, i) => {
            "use strict";
            i.d(o, {
                A: () => C
            });
            var r = i(9575),
                t = i(1594),
                a = i.n(t),
                n = i(9067),
                s = i(3899),
                l = i(6980),
                c = i(884),
                d = i(1182),
                u = i(9731),
                p = i(942),
                m = i(9725);
            const y = "https://".concat("www.nike.com", "/assets/vendor/pulse-insights/1.0.0/surveys.js"),
                v = e => {
                    var o;
                    let {
                        locale: i,
                        openCookieModal: r
                    } = e;
                    if (null === (o = window.NikePrivacy) || void 0 === o || !o.isEnabled) return r();
                    const t = (0, m.xS)("guest/settings/privacy")(i);
                    window.location.assign(t)
                },
                g = {
                    "#site-feedback": function(e) {
                        let {
                            locale: o
                        } = e;
                        const {
                            country: i,
                            language: r,
                            langRegion: t
                        } = o, {
                            allowPerformance: a
                        } = p.Fl.get();
                        if (!window.pi) {
                            window.pi = function() {
                                window.pi.commands = window.pi.commands || [], window.pi.commands.push(arguments)
                            };
                            const e = document.createElement("script");
                            e.id = "pulse-insights", e.src = y, e.async = !0;
                            const o = document.getElementsByTagName("script")[0];
                            o.parentNode.insertBefore(e, o)
                        }
                        if (pi("identify", "PI-42807056"), pi("spa", !1), pi("set_context_data", {
                                country: i,
                                language: r
                            }), a && pi("visitor_tracking", !0), t) {
                            const e = "feedback-link-".concat(i.toLowerCase(), "-").concat(t);
                            pi("present", e)
                        } else pi("get", "surveys")
                    },
                    "#cookie_settings": v,
                    "#cookie_settings.html": v,
                    "/cookie_settings.html": v
                };
            var f = i(1705);
            const h = (0, t.forwardRef)(((e, o) => {
                    const {
                        Icon: i,
                        ariaLabel: n,
                        children: p,
                        className: m,
                        clickEventPayload: y,
                        shouldSendEvent: v = !0,
                        href: h,
                        text: C,
                        dataTestId: T,
                        onClick: b,
                        onPopup: H,
                        ...A
                    } = e, {
                        engine: S
                    } = (0, t.useContext)(u.Ig), {
                        openModal: N
                    } = (0, t.useContext)(f.Ay) || {}, P = (0, d.A)(), w = (0, t.useRef)(null), M = o || w, {
                        keyboardProps: k
                    } = (0, c.d)({
                        onKeyDown: e => {
                            " " === e.key ? "menu" === e.target.getAttribute("aria-haspopup") && H ? (e.preventDefault(), H(e)) : (e.nativeEvent.preventDefault(), M.current.click()) : e.continuePropagation()
                        }
                    }), O = T || "link", E = h ? "a" : s.A, x = h ? {
                        href: h
                    } : {
                        appearance: "text",
                        disableRipple: !0,
                        Icon: i,
                        iconPlacement: "start"
                    };
                    return a().createElement(E, (0, r.A)({}, A, {
                        "aria-label": n,
                        className: m || "",
                        "data-testid": O,
                        onClick: e => {
                            if (e.preventDefault(), b && b(e), v && null != y && y.type && (null == S || S.track(y)), h) {
                                const e = {
                                    locale: P,
                                    openCookieModal: () => N(f.T0.COOKIE, 1)
                                };
                                if (g[h]) return g[h](e);
                                window.location.assign(h)
                            }
                        }
                    }, x, k, {
                        ref: M
                    }), p && p, C && a().createElement(l.z, {
                        appearance: "body3Strong",
                        className: m,
                        color: "secondary"
                    }, C))
                })),
                C = h;
            h.propTypes = {
                ariaLabel: n.string,
                children: n.node,
                className: n.string,
                clickEventPayload: (0, n.shape)({}),
                shouldSendEvent: n.bool,
                href: n.string,
                Icon: n.node,
                onClick: n.func,
                text: n.string,
                dataTestId: n.string,
                onPopup: n.func
            }
        },
        4413: (e, o, i) => {
            "use strict";
            i.d(o, {
                A: () => b
            });
            var r, t = i(9575),
                a = i(1594),
                n = i.n(a),
                s = i(9067),
                l = i(6980),
                c = i(8814),
                d = i(2119),
                u = i(3080);
            const p = "dropdown",
                m = "".concat(p, "__sub_list_title"),
                y = "".concat(p, "__sub_list_item"),
                v = "".concat(p, "__list_title"),
                g = u.A.div(r || (r = (0, d.A)(["\n  margin-left: 12px;\n  width: 16%;\n  max-width: 214px;\n  min-width: 134px;\n\n  .", " {\n    font: var(--podium-cds-typography-body2-strong);\n    color: var(--podium-cds-color-text-primary);\n    font-weight: var(--podium-cds-font-weight-medium);\n    padding-top: 36px;\n    padding-bottom: 12px;\n    &:hover,\n    &:focus {\n      color: var(--podium-cds-color-text-primary);\n    }\n  }\n  .", " {\n    p {\n      color: var(--podium-cds-color-text-secondary);\n      line-height: 150%;\n      padding-bottom: 8px;\n      &:hover,\n      &:focus {\n        color: var(--podium-cds-color-text-primary);\n      }\n    }\n  }\n  .", " {\n    padding-bottom: 12px;\n    display: block;\n    p {\n      font: var(--podium-cds-typography-body1-strong);\n      color: var(--podium-cds-color-text-primary);\n      font-weight: var(--podium-cds-font-weight-medium);\n    }\n  }\n"])), m, y, v);
            var f = i(422),
                h = i(27),
                C = i(1384);
            const T = e => {
                    var o;
                    const {
                        content: i,
                        columnChildren: r,
                        textAppearance: s = "body3Strong",
                        containerClassName: d
                    } = e, u = (0, a.useRef)(null);
                    let p = null == i ? void 0 : i.content;
                    r && (p = r(i));
                    const T = i.analyticsEventName || f.A.CLICK_NAV_MEMBERSHIP,
                        b = () => {
                            window.webShellClient.identity.signOut().finally({})
                        },
                        H = {
                            props: {
                                path: null == i || null === (o = i.path) || void 0 === o ? void 0 : o.join(":")
                            },
                            type: T
                        };
                    T === f.A.CLICK_NAV_ACCOUNT && (H.props.path = "myAccount:".concat(null == i ? void 0 : i.classification));
                    const [A, S] = (0, a.useState)(null), N = (0, a.useRef)(!1);
                    (0, a.useEffect)((() => {
                        N.current && u.current.focus()
                    }), [A]);
                    const P = (e, o) => {
                        var i;
                        const r = null == e || null === (i = e[0]) || void 0 === i ? void 0 : i.label;
                        return n().createElement("ul", (0, t.A)({
                            key: o
                        }, r ? {
                            "aria-label": r
                        } : {}), null == e ? void 0 : e.map(((e, i) => {
                            var r, t;
                            const a = {
                                props: {
                                    path: null == e || null === (r = e.path) || void 0 === r ? void 0 : r.join(":")
                                },
                                type: T
                            };
                            return T === f.A.CLICK_NAV_ACCOUNT && (a.props.path = "myAccount:".concat(null == e ? void 0 : e.classification)), n().createElement("li", {
                                className: (0, C.gN)(e) ? m : y,
                                key: "".concat(null == e ? void 0 : e.label, "-").concat(i)
                            }, n().createElement(c.A, {
                                clickEventPayload: a,
                                href: null == e ? void 0 : e.url,
                                onClick: (null == e || null === (t = e.path) || void 0 === t ? void 0 : t.join(":")) === h.bq ? b : void 0,
                                onFocus: () => {
                                    if ((0, C.gN)(e) && 0 === o) return N.current || S(!A), void(N.current = !N.current)
                                },
                                ref: (0, C.gN)(e) && 0 === o ? u : null,
                                role: "menuitem"
                            }, n().createElement(l.z, {
                                appearance: (0, C.gN)(e) ? "body2Strong" : s,
                                role: "presentation"
                            }, null == e ? void 0 : e.label)))
                        })))
                    };
                    return n().createElement(g, {
                        className: d,
                        role: "menu"
                    }, (null == i ? void 0 : i.title) && n().createElement(c.A, {
                        className: v,
                        clickEventPayload: H,
                        href: null == i ? void 0 : i.titleLink
                    }, n().createElement(l.z, {
                        appearance: s,
                        color: "secondary"
                    }, null == i ? void 0 : i.title)), (e => n().createElement(n().Fragment, null, (0, C.vZ)(e).map(P)))(p))
                },
                b = T;
            T.propTypes = {
                content: (0, s.shape)({
                    content: (0, s.arrayOf)(s.object),
                    title: s.string,
                    titleLink: s.string
                }),
                columnChildren: s.func,
                id: s.string,
                textAppearance: s.string,
                ListItemComponent: s.object,
                containerClassName: s.string
            }
        },
        6614: (e, o, i) => {
            "use strict";
            i.d(o, {
                B: () => t
            });
            var r = i(1594);
            const t = 818 != i.j ? (0, r.createContext)() : null
        },
        1705: (e, o, i) => {
            "use strict";
            i.d(o, {
                T0: () => s,
                Zn: () => y,
                Ay: () => v
            });
            var r = i(1594),
                t = i.n(r),
                a = i(9067),
                n = i(3116);
            i(5098);
            const s = {
                    COOKIE: "cookie",
                    GEOMISMATCH: "geomismatch",
                    LANGUAGE_TUNNEL: "language_tunnel",
                    KOREAN_LEGAL: "korean_legal"
                },
                l = {
                    HEADER: [s.COOKIE, s.GEOMISMATCH],
                    FOOTER: [s.LANGUAGE_TUNNEL, s.KOREAN_LEGAL]
                },
                c = "dotcomNavModal",
                d = "".concat(c, "_open"),
                u = "".concat(c, "dotcomNavModal_close"),
                p = "".concat(c, "_queue_updated"),
                m = (0, r.createContext)(),
                y = e => {
                    let {
                        children: o,
                        location: i
                    } = e;
                    const [a, s] = (0, r.useState)(), c = (0, r.useRef)(null), [, y, v] = function() {
                        const [e] = (0, r.useState)(Math.random().toString()), [o, i, t] = (0, n.u)("undefined" == typeof window ? null : window.webShellClient.modalManager, e);
                        if ("undefined" == typeof window) return [!1, () => !1, () => !1, {
                            forceCloseModal: () => !1,
                            forceOpenModal: () => !1,
                            onAfterClose: () => {},
                            onAfterOpen: () => {},
                            onRequestClose: () => {}
                        }];
                        const a = `:scope > :not(${window.webShellClient.modalManager.rootSelector}):not([aria-hidden="true"]):not([data-shell-aria-hidden-exempt]):not(script)`,
                            s = window.webShellClient.modalManager;
                        let l = null,
                            c = null,
                            d = null;
                        const u = (e, o, i) => (i(document.activeElement), [...document.body.querySelectorAll(a)].forEach((e => {
                                e.setAttribute("aria-hidden", "true"), e.setAttribute("data-shell-aria-hidden-by-dialog", "true")
                            })), e(o), !0),
                            p = (e, o, i) => (e.closeVanilla(), ((e, o) => {
                                var i;
                                let r = e;
                                if (o)
                                    if ("string" == typeof o) {
                                        const e = document.getElementById(o);
                                        e && (r = e)
                                    } else "function" == typeof o.focus && (r = o);
                                null === (i = null != r ? r : e) || void 0 === i || i.focus()
                            })(e.refEl, i), [...document.body.querySelectorAll(':scope > [aria-hidden="true"][data-shell-aria-hidden-by-dialog]')].forEach((e => {
                                e.removeAttribute("aria-hidden"), e.removeAttribute("data-shell-aria-hidden-by-dialog")
                            })), o(null), !0);
                        return [o.isOpen, (m = s, y = i, v = t, g = e, () => (e => null === e.activeModalID)(m) ? (u(y, g, v) && l && l(), !0) : (console.error("Cannot safely open modal: you have no permission or there is a portal problem."), !1)), ((e, o, i) => r => (c && c(), ((e, o) => e.activeModalID === o)(e, i) ? (p(e, o, r) && d && d(), !0) : (console.error("Cannot safely close modal: no open modal or no permission."), !1)))(s, i, e), {
                            forceCloseModal: ((e, o) => i => (c && c(), console.warn("forceCloseModal stomps on any active modal."), p(e, o, i) && d && d(), !0))(s, i),
                            forceOpenModal: ((e, o, i, r) => () => (console.warn("forceOpenModal may adversely affect user experience."), e.activeModalID && p(e, o), u(o, i, r) && l && l(), !0))(s, i, e, t),
                            onAfterClose: e => {
                                d = e
                            },
                            onAfterOpen: e => {
                                l = e
                            },
                            onRequestClose: e => {
                                c = e
                            }
                        }];
                        var m, y, v, g
                    }(), g = e => {
                        const o = !(null != e && e.isBlocking) || v();
                        return s(void 0), c.current = void 0, o
                    }, f = (0, r.useRef)(null), h = () => {
                        "function" == typeof f.current && (f.current(), f.current = null)
                    }, C = e => {
                        const o = (e => {
                            const o = !e.isBlocking || y();
                            return o && (s(e), c.current = e), o
                        })(e);
                        if (!o) return void setTimeout((() => {
                            C(e)
                        }), 1e3);
                        const i = () => {
                            var o, i;
                            g(null == c ? void 0 : c.current), o = e.id, i = () => C(e), window.addEventListener("".concat(d).concat(o), i, {
                                once: !0
                            })
                        };
                        window.addEventListener(u, i, {
                            once: !0
                        }), f.current = () => {
                            window.removeEventListener(u, i)
                        }
                    };
                    (0, r.useEffect)((() => {
                        var e;
                        const o = e => {
                            let {
                                detail: o
                            } = e;
                            i && !l[i].includes(o.id) || (e => {
                                1 !== window.dotcomNavModalQueue.length ? window.dotcomNavModalQueue[0].id !== e.id || (e => {
                                    const o = new CustomEvent(u);
                                    window.dispatchEvent(o), C(e)
                                })(e) : C(e)
                            })(o)
                        };
                        window.addEventListener(p, o);
                        const r = null === (e = window) || void 0 === e ? void 0 : e.dotcomNavModalQueue;
                        return (null == r ? void 0 : r.length) > 0 && o({
                            detail: r[0]
                        }), () => {
                            h(), window.removeEventListener(p, o), window.dotcomNavModalQueue && delete window.dotcomNavModalQueue
                        }
                    }), []);
                    const T = e => {
                            window.dispatchEvent(new CustomEvent(p, {
                                detail: e
                            }))
                        },
                        b = (0, r.useCallback)((function(e) {
                            const o = {
                                id: e,
                                priority: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                                isBlocking: !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2]
                            };
                            window.dotcomNavModalQueue || (window.dotcomNavModalQueue = []), window.dotcomNavModalQueue.find((e => e.id === o.id)) || (window.dotcomNavModalQueue.push(o), window.dotcomNavModalQueue.sort(((e, o) => o.priority - e.priority)), T(o))
                        }), []),
                        H = (0, r.useCallback)((() => {
                            g(a), h(), window.dotcomNavModalQueue.shift(), window.dotcomNavModalQueue.length > 0 && T(window.dotcomNavModalQueue[0])
                        }), [a]);
                    return t().createElement(m.Provider, {
                        value: {
                            currentModal: null == a ? void 0 : a.id,
                            openModal: b,
                            closeModal: H
                        }
                    }, o)
                };
            y.propTypes = {
                children: a.node.isRequired,
                location: a.string
            };
            const v = m
        },
        9189: (e, o, i) => {
            "use strict";
            i.d(o, {
                a: () => u,
                f: () => d
            });
            var r = i(9575),
                t = i(1594),
                a = i.n(t),
                n = i(9067);
            const s = {
                    opts: (new(i(8623).A)).opts,
                    mounted: !1
                },
                l = a().createContext(s);

            function c() {
                const [e, o] = (0, t.useState)(s);
                return (0, t.useEffect)((() => {
                    const e = window.NikeDotcomNav;
                    e.onLoad((() => {
                        const {
                            opts: i,
                            mounted: r
                        } = e;
                        o({
                            opts: i,
                            mounted: r
                        })
                    }))
                }), []), e
            }
            const d = e => a().createElement(l.Provider, (0, r.A)({
                    value: c()
                }, e)),
                u = () => a().useContext(l);
            d.propTypes = {
                children: n.node
            }
        },
        422: (e, o, i) => {
            "use strict";
            i.d(o, {
                A: () => r
            });
            const r = 818 != i.j ? {
                SHOPPING_EVENT: "click_navShoppingMenu",
                CLICK_NAV_FOOTER: "click_navFooter",
                CLICK_HELP_MENU: "click_navHelpMenu",
                CLICK_NAV_MEMBERSHIP: "click_navMembership",
                CLICK_NAV_ACCOUNT: "click_navAccount",
                CLICK_BRAND_BAR: "click_navBrandBar",
                CLICK_GEO_MISMATCH_DISMISS: "click_geoMismatchDismiss",
                CLICK_HEADER_LOGO: "click_headerLogo",
                CLICK_NAV_SHORTCUT: "click_navShortcut",
                CLICK_NAV_CART: "click_navCart",
                CLICK_NAV_COUNTRY_SELECTION_SUCCESS: "click_navCountrySelectionSuccess",
                CLICK_NAV_MOBILE_SHORTCUT: "click_navMobileShortcut",
                CLICK_NAV_STORE_LOCATOR: "click_navStoreLocator",
                CLICK_OPEN_MOBILE_MENU: "click_openMobileMenu",
                CLICK_SEARCH_CLEAR: "click_searchClear",
                CLICK_SEARCH_CLOSE: "click_searchClose",
                CLICK_SEARCH_OPEN: "click_searchOpen",
                CLICK_POPULAR_SEARCH_SELECTION: "click_popularSearchSelection",
                CLICK_CLOSE_MOBILE_MENU: "click_closeMobileMenu",
                SUBMIT_USER_TYPED_SEARCH: "submit_navOnsiteSearchUserTyped",
                ACTION_TYPE_AHEAD_SUGGESTIONS_SHOWN: "action_typeaheadSuggestionShown",
                CLICK_TYPE_AHEAD_SUGGESTIONS: "click_navOnsiteSearchTypeahead",
                CLICK_VISUAL_SEARCH_ITEM: "visualSearchItemClick"
            } : null
        },
        4912: (e, o, i) => {
            "use strict";
            i.d(o, {
                A: () => a
            });
            var r = i(1594),
                t = i(6614);
            const a = 818 != i.j ? (e, o) => {
                var i;
                const [a] = (0, r.useContext)(t.B);
                return (null == a || null === (i = a.translations) || void 0 === i ? void 0 : i[e]) || o
            } : null
        },
        7133: (e, o, i) => {
            "use strict";
            i.d(o, {
                A: () => n
            });
            var r = i(1594),
                t = i(6614),
                a = i(27);
            const n = 818 != i.j ? (e, o) => {
                var i, n;
                const [s] = (0, r.useContext)(t.B);
                return e === a.hL.HEADER ? null == s || null === (i = s.globalNavData) || void 0 === i || null === (i = i.header) || void 0 === i || null === (i = i.menus) || void 0 === i ? void 0 : i[o] : null == s || null === (n = s.globalNavData) || void 0 === n || null === (n = n.footer) || void 0 === n || null === (n = n.menus) || void 0 === n ? void 0 : n[o]
            } : null
        },
        1857: (e, o, i) => {
            "use strict";
            i.d(o, {
                A: () => a
            });
            var r = i(1594),
                t = i(6614);
            const a = 818 != i.j ? e => {
                var o;
                const [i] = (0, r.useContext)(t.B);
                return null == i || null === (o = i.flags) || void 0 === o ? void 0 : o[e]
            } : null
        },
        1182: (e, o, i) => {
            "use strict";
            i.d(o, {
                A: () => a
            });
            var r = i(1594),
                t = i(6614);
            const a = 818 != i.j ? () => {
                const [e] = (0, r.useContext)(t.B);
                return (null == e ? void 0 : e.locale) || {}
            } : null
        },
        5098: e => {
            e.exports = {
                debug: console.debug,
                error: console.error,
                info: console.log,
                console: console.log,
                trace: console.log,
                warn: console.warn
            }
        },
        8623: (e, o, i) => {
            "use strict";
            i.d(o, {
                A: () => n
            });
            var r = i(1979),
                t = i(4604),
                a = i(27);
            class n {
                constructor() {
                    (0, r.A)(this, "env", "prod"), (0, r.A)(this, "components", {}), (0, r.A)(this, "logger", console), (0, r.A)(this, "mounted", !1), (0, r.A)(this, "store", null), (0, r.A)(this, "messages", {}), (0, r.A)(this, "configurations", {}), (0, r.A)(this, "generation", null), (0, r.A)(this, "initialState", {}), (0, r.A)(this, "onLoadEvents", []), (0, r.A)(this, "engine", null), (0, r.A)(this, "actionListeners", {}), (0, r.A)(this, "newrelic", (0, t.Ay)(this)), (0, r.A)(this, "opts", {
                        calls: {},
                        triggers: {},
                        showPrivacyPolicy: 0,
                        showGeomismatch: !1,
                        redirectGeomismatch: null,
                        setLegacyCookies: !1,
                        onSearchSubmit: null,
                        useGeoPrivacy: !0,
                        peakabooNavEnabled: null
                    })
                }
                get vanilla() {
                    return "prod" !== this.env && this.logger.warn("NikeDotcomNav.vanilla.objects is deprecated. Use NikeDotcomNav.components"), {
                        objects: this.components
                    }
                }
                init(e) {
                    this.logger.info("NikeDotcomNav: Initializing.");
                    const {
                        country: o,
                        language: i,
                        locale: r,
                        currency: n,
                        clientVersion: s,
                        clientBaseUrl: l,
                        initialState: c,
                        messages: d,
                        metadata: {
                            generationId: u,
                            timestamp: p
                        },
                        env: m = "prod"
                    } = e;
                    this.env = m, this.initialState = c, this.messages = d, this.locale = {
                        country: o,
                        language: i,
                        currency: n,
                        ...r,
                        get locale() {
                            return this.logger.warn("Deprecated: NikeDotcomNav.locale.locale"), r
                        }
                    }, this.generation = {
                        country: o,
                        language: i,
                        id: "".concat(o, "/").concat(i, "/").concat(u),
                        timestamp: new Date(p),
                        version: s,
                        baseUrl: l
                    }, this.newrelic = (0, t.Ay)(this, e), this.newrelic.initPerformanceMetrics(), window.setTimeout((() => {
                        this.mounted || this.logger.warn("NikeDotcomNav.mount() not called yet?")
                    }), a.XY)
                }
                mount() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    this.logger.info("NikeDotcomNav: Mounting.");
                    try {
                        if (this.mounted) return this.logger.warn("NikeDotcomNav already mounted"), !0;
                        ! function(e) {
                            let {
                                onSearchSubmit: o
                            } = e;
                            if (o && "function" != typeof o) throw new Error("onSearchSubmit config expected to be a function that takes a search string.")
                        }(Object.assign(this.opts, e)), this.mounted = !0, this.unloadEvents()
                    } catch (e) {
                        throw this.newrelic.error(e, "NikeDotcomNav:mount"), e
                    }
                    return !0
                }
                onLoad(e) {
                    if ("function" != typeof e) throw new TypeError("Argument must be a callback function");
                    this.mounted ? e() : this.onLoadEvents.push(e)
                }
                unloadEvents() {
                    for (; this.onLoadEvents.length;) this.onLoadEvents.pop()()
                }
                register(e, o) {
                    this.configurations[e] = o
                }
            }
        },
        3037: (e, o, i) => {
            "use strict";
            i.d(o, {
                A: () => t
            });
            const r = /{{?(#[a-zA-Z]+ )?[a-zA-Z]+.[a-zA-Z]*}?}/gm,
                t = 818 != i.j ? (e, o) => {
                    if (!o) return e;
                    const i = [];
                    let t, a = 0,
                        n = !0;
                    for (; null !== (t = r.exec(e));) {
                        t.index > a && i.push(e.slice(a, t.index));
                        const r = t.index + t[0].length,
                            s = t[0].slice(1, t[0].length - 1);
                        "string" != typeof(o[s] || "") && (n = !1), i.push(o[s]), a = r
                    }
                    return a !== e.length && i.push(e.slice(a)), n ? i.join("") : i
                } : null
        },
        942: (e, o, i) => {
            "use strict";
            i.d(o, {
                Fl: () => c
            });
            var r = i(3221),
                t = i(8779);
            const a = "data-sq-exempt";
            let n = !1;
            const s = ["mouseup", "dblclick", "click", "focus", "blur", "input", "scroll", "wheel", "touchmove"];

            function l(e) {
                const o = e.split("."),
                    i = 1 === o.length ? 0 : o.length - 2;
                return 0 === i ? o[i] : ".".concat(o[i], ".com")
            }
            const c = {
                acceptAll() {
                    return this.set({
                        allowMarketing: !0,
                        allowPerformance: !0
                    })
                },
                addInitialListener(e) {
                    (0, r.L9)(e)
                },
                get: () => (0, r.lX)(),
                listen(e, o) {
                    if (n) return this.stopListening;
                    const i = i => !(o && o() || !n || i.target.hasAttribute(a) || i.target.parentElement.hasAttribute(a) || i.target.hasAttribute("".concat(a, "_").concat(i.type)) || i.target.parentElement.hasAttribute("".concat(a, "_").concat(i.type)) || (this.acceptAll(), l(), e && e(i), 0)),
                        r = function(e) {
                            let o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : document;
                            return o ? [...o.querySelectorAll(e)] : []
                        }(".l-header a, .pre-l-header-container a"),
                        l = () => {
                            s.forEach((e => {
                                document.body.removeEventListener(e, i)
                            })), r.forEach((e => {
                                e.removeEventListener("focus", i)
                            })), n = !1, this.stopListening = t.lQ
                        };
                    return r.forEach((e => {
                        e.addEventListener("focus", i)
                    })), s.forEach((e => {
                        document.body.addEventListener(e, i)
                    })), n = !0, this.stopListening = l, l
                },
                rejectAll() {
                    return this.set({
                        allowMarketing: !1,
                        allowPerformance: !1
                    })
                },
                set(e) {
                    const {
                        allowPerformance: o,
                        allowMarketing: i
                    } = e;
                    return (0, r.dF)(Boolean(o), Boolean(i), {
                        domain: l(window.location.hostname),
                        expires: 365
                    })
                },
                stopListening: t.lQ
            }
        },
        9568: (e, o, i) => {
            "use strict";

            function r(e, o) {
                return e.classList ? !!o && e.classList.contains(o) : -1 !== (" " + (e.className.baseVal || e.className) + " ").indexOf(" " + o + " ")
            }
            i.d(o, {
                A: () => r
            })
        },
        4867: (e, o, i) => {
            "use strict";

            function r(e) {
                return r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, r(e)
            }

            function t(e, o) {
                for (var i = 0; i < o.length; i++) {
                    var r = o[i];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function a(e, o) {
                return a = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, o) {
                    return e.__proto__ = o, e
                }, a(e, o)
            }

            function n(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function s(e) {
                return s = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }, s(e)
            }
            var l = i(1594),
                c = i(5206),
                d = i(9067),
                u = i(8654).createFocusTrap,
                p = i(679).isFocusable,
                m = function(e) {
                    ! function(e, o) {
                        if ("function" != typeof o && null !== o) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(o && o.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }), Object.defineProperty(e, "prototype", {
                            writable: !1
                        }), o && a(e, o)
                    }(y, e);
                    var o, i, d, u, m = (d = y, u = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                        } catch (e) {
                            return !1
                        }
                    }(), function() {
                        var e, o = s(d);
                        if (u) {
                            var i = s(this).constructor;
                            e = Reflect.construct(o, arguments, i)
                        } else e = o.apply(this, arguments);
                        return function(e, o) {
                            if (o && ("object" === r(o) || "function" == typeof o)) return o;
                            if (void 0 !== o) throw new TypeError("Derived constructors may only return object or undefined");
                            return n(e)
                        }(this, e)
                    });

                    function y(e) {
                        var o, i, r, t;
                        ! function(e, o) {
                            if (!(e instanceof o)) throw new TypeError("Cannot call a class as a function")
                        }(this, y), t = function(e) {
                            var o, i = null !== (o = this.internalOptions[e]) && void 0 !== o ? o : this.originalOptions[e];
                            if ("function" == typeof i) {
                                for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++) t[a - 1] = arguments[a];
                                i = i.apply(void 0, t)
                            }
                            if (!0 === i && (i = void 0), !i) {
                                if (void 0 === i || !1 === i) return i;
                                throw new Error("`".concat(e, "` was specified but was not a node, or did not return a node"))
                            }
                            var n, s = i;
                            if ("string" == typeof i && !(s = null === (n = this.getDocument()) || void 0 === n ? void 0 : n.querySelector(i))) throw new Error("`".concat(e, "` as selector refers to no known node"));
                            return s
                        }, (r = "getNodeForOption") in (i = n(o = m.call(this, e))) ? Object.defineProperty(i, r, {
                            value: t,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : i[r] = t, o.handleDeactivate = o.handleDeactivate.bind(n(o)), o.handlePostDeactivate = o.handlePostDeactivate.bind(n(o)), o.handleClickOutsideDeactivates = o.handleClickOutsideDeactivates.bind(n(o)), o.internalOptions = {
                            returnFocusOnDeactivate: !1,
                            checkCanReturnFocus: null,
                            onDeactivate: o.handleDeactivate,
                            onPostDeactivate: o.handlePostDeactivate,
                            clickOutsideDeactivates: o.handleClickOutsideDeactivates
                        }, o.originalOptions = {
                            returnFocusOnDeactivate: !0,
                            onDeactivate: null,
                            onPostDeactivate: null,
                            checkCanReturnFocus: null,
                            clickOutsideDeactivates: !1
                        };
                        var a = e.focusTrapOptions;
                        for (var s in a) Object.prototype.hasOwnProperty.call(a, s) && ("returnFocusOnDeactivate" !== s && "onDeactivate" !== s && "onPostDeactivate" !== s && "checkCanReturnFocus" !== s && "clickOutsideDeactivates" !== s ? o.internalOptions[s] = a[s] : o.originalOptions[s] = a[s]);
                        return o.outsideClick = null, o.focusTrapElements = e.containerElements || [], o.updatePreviousElement(), o
                    }
                    return o = y, (i = [{
                        key: "getDocument",
                        value: function() {
                            return this.props.focusTrapOptions.document || ("undefined" != typeof document ? document : void 0)
                        }
                    }, {
                        key: "getReturnFocusNode",
                        value: function() {
                            var e = this.getNodeForOption("setReturnFocus", this.previouslyFocusedElement);
                            return e || !1 !== e && this.previouslyFocusedElement
                        }
                    }, {
                        key: "updatePreviousElement",
                        value: function() {
                            var e = this.getDocument();
                            e && (this.previouslyFocusedElement = e.activeElement)
                        }
                    }, {
                        key: "deactivateTrap",
                        value: function() {
                            this.focusTrap && this.focusTrap.active && this.focusTrap.deactivate({
                                returnFocus: !1,
                                checkCanReturnFocus: null,
                                onDeactivate: this.originalOptions.onDeactivate
                            })
                        }
                    }, {
                        key: "handleClickOutsideDeactivates",
                        value: function(e) {
                            var o = "function" == typeof this.originalOptions.clickOutsideDeactivates ? this.originalOptions.clickOutsideDeactivates.call(null, e) : this.originalOptions.clickOutsideDeactivates;
                            return o && (this.outsideClick = {
                                target: e.target,
                                allowDeactivation: o
                            }), o
                        }
                    }, {
                        key: "handleDeactivate",
                        value: function() {
                            this.originalOptions.onDeactivate && this.originalOptions.onDeactivate.call(null), this.deactivateTrap()
                        }
                    }, {
                        key: "handlePostDeactivate",
                        value: function() {
                            var e = this,
                                o = function() {
                                    var o = e.getReturnFocusNode(),
                                        i = !(!e.originalOptions.returnFocusOnDeactivate || null == o || !o.focus || e.outsideClick && (!e.outsideClick.allowDeactivation || p(e.outsideClick.target, e.internalOptions.tabbableOptions))),
                                        r = e.internalOptions.preventScroll,
                                        t = void 0 !== r && r;
                                    i && o.focus({
                                        preventScroll: t
                                    }), e.originalOptions.onPostDeactivate && e.originalOptions.onPostDeactivate.call(null), e.outsideClick = null
                                };
                            this.originalOptions.checkCanReturnFocus ? this.originalOptions.checkCanReturnFocus.call(null, this.getReturnFocusNode()).then(o, o) : o()
                        }
                    }, {
                        key: "setupFocusTrap",
                        value: function() {
                            if (!this.focusTrap) {
                                var e = this.focusTrapElements.map(c.findDOMNode);
                                e.some(Boolean) && (this.focusTrap = this.props._createFocusTrap(e, this.internalOptions), this.props.active && this.focusTrap.activate(), this.props.paused && this.focusTrap.pause())
                            }
                        }
                    }, {
                        key: "componentDidMount",
                        value: function() {
                            this.props.active && this.setupFocusTrap()
                        }
                    }, {
                        key: "componentDidUpdate",
                        value: function(e) {
                            if (this.focusTrap) {
                                e.containerElements !== this.props.containerElements && this.focusTrap.updateContainerElements(this.props.containerElements);
                                var o = !e.active && this.props.active,
                                    i = e.active && !this.props.active,
                                    r = !e.paused && this.props.paused,
                                    t = e.paused && !this.props.paused;
                                if (o && (this.updatePreviousElement(), this.focusTrap.activate()), i) return void this.deactivateTrap();
                                r && this.focusTrap.pause(), t && this.focusTrap.unpause()
                            } else e.containerElements !== this.props.containerElements && (this.focusTrapElements = this.props.containerElements), this.props.active && (this.updatePreviousElement(), this.setupFocusTrap())
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            this.deactivateTrap()
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this,
                                o = this.props.children ? l.Children.only(this.props.children) : void 0;
                            if (o) {
                                if (o.type && o.type === l.Fragment) throw new Error("A focus-trap cannot use a Fragment as its child container. Try replacing it with a <div> element.");
                                return l.cloneElement(o, {
                                    ref: function(i) {
                                        var r = e.props.containerElements;
                                        o && ("function" == typeof o.ref ? o.ref(i) : o.ref && (o.ref.current = i)), e.focusTrapElements = r || [i]
                                    }
                                })
                            }
                            return null
                        }
                    }]) && t(o.prototype, i), Object.defineProperty(o, "prototype", {
                        writable: !1
                    }), y
                }(l.Component),
                y = "undefined" == typeof Element ? Function : Element;
            m.propTypes = {
                active: d.bool,
                paused: d.bool,
                focusTrapOptions: d.shape({
                    document: d.object,
                    onActivate: d.func,
                    onPostActivate: d.func,
                    checkCanFocusTrap: d.func,
                    onDeactivate: d.func,
                    onPostDeactivate: d.func,
                    checkCanReturnFocus: d.func,
                    initialFocus: d.oneOfType([d.instanceOf(y), d.string, d.bool, d.func]),
                    fallbackFocus: d.oneOfType([d.instanceOf(y), d.string, d.func]),
                    escapeDeactivates: d.oneOfType([d.bool, d.func]),
                    clickOutsideDeactivates: d.oneOfType([d.bool, d.func]),
                    returnFocusOnDeactivate: d.bool,
                    setReturnFocus: d.oneOfType([d.instanceOf(y), d.string, d.bool, d.func]),
                    allowOutsideClick: d.oneOfType([d.bool, d.func]),
                    preventScroll: d.bool,
                    tabbableOptions: d.shape({
                        displayCheck: d.oneOf(["full", "non-zero-area", "none"]),
                        getShadowRoot: d.oneOfType([d.bool, d.func])
                    })
                }),
                containerElements: d.arrayOf(d.instanceOf(y)),
                children: d.oneOfType([d.element, d.instanceOf(y)])
            }, m.defaultProps = {
                active: !0,
                paused: !1,
                focusTrapOptions: {},
                _createFocusTrap: u
            }, e.exports = m
        },
        8654: (e, o, i) => {
            "use strict";
            if (i.r(o), i.d(o, {
                    createFocusTrap: () => m
                }), 818 != i.j) var r = i(679);

            function t(e, o) {
                var i = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    o && (r = r.filter((function(o) {
                        return Object.getOwnPropertyDescriptor(e, o).enumerable
                    }))), i.push.apply(i, r)
                }
                return i
            }

            function a(e) {
                for (var o = 1; o < arguments.length; o++) {
                    var i = null != arguments[o] ? arguments[o] : {};
                    o % 2 ? t(Object(i), !0).forEach((function(o) {
                        n(e, o, i[o])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : t(Object(i)).forEach((function(o) {
                        Object.defineProperty(e, o, Object.getOwnPropertyDescriptor(i, o))
                    }))
                }
                return e
            }

            function n(e, o, i) {
                return o in e ? Object.defineProperty(e, o, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[o] = i, e
            }
            var s, l = (s = [], {
                    activateTrap: function(e) {
                        if (s.length > 0) {
                            var o = s[s.length - 1];
                            o !== e && o.pause()
                        }
                        var i = s.indexOf(e); - 1 === i || s.splice(i, 1), s.push(e)
                    },
                    deactivateTrap: function(e) {
                        var o = s.indexOf(e); - 1 !== o && s.splice(o, 1), s.length > 0 && s[s.length - 1].unpause()
                    }
                }),
                c = function(e) {
                    return setTimeout(e, 0)
                },
                d = function(e, o) {
                    var i = -1;
                    return e.every((function(e, r) {
                        return !o(e) || (i = r, !1)
                    })), i
                },
                u = function(e) {
                    for (var o = arguments.length, i = new Array(o > 1 ? o - 1 : 0), r = 1; r < o; r++) i[r - 1] = arguments[r];
                    return "function" == typeof e ? e.apply(void 0, i) : e
                },
                p = function(e) {
                    return e.target.shadowRoot && "function" == typeof e.composedPath ? e.composedPath()[0] : e.target
                },
                m = function(e, o) {
                    var i, t = (null == o ? void 0 : o.document) || document,
                        n = a({
                            returnFocusOnDeactivate: !0,
                            escapeDeactivates: !0,
                            delayInitialFocus: !0
                        }, o),
                        s = {
                            containers: [],
                            containerGroups: [],
                            tabbableGroups: [],
                            nodeFocusedBeforeActivation: null,
                            mostRecentlyFocusedNode: null,
                            active: !1,
                            paused: !1,
                            delayInitialFocusTimer: void 0
                        },
                        m = function(e, o, i) {
                            return e && void 0 !== e[o] ? e[o] : n[i || o]
                        },
                        y = function(e) {
                            return s.containerGroups.findIndex((function(o) {
                                var i = o.container,
                                    r = o.tabbableNodes;
                                return i.contains(e) || r.find((function(o) {
                                    return o === e
                                }))
                            }))
                        },
                        v = function(e) {
                            var o = n[e];
                            if ("function" == typeof o) {
                                for (var i = arguments.length, r = new Array(i > 1 ? i - 1 : 0), a = 1; a < i; a++) r[a - 1] = arguments[a];
                                o = o.apply(void 0, r)
                            }
                            if (!0 === o && (o = void 0), !o) {
                                if (void 0 === o || !1 === o) return o;
                                throw new Error("`".concat(e, "` was specified but was not a node, or did not return a node"))
                            }
                            var s = o;
                            if ("string" == typeof o && !(s = t.querySelector(o))) throw new Error("`".concat(e, "` as selector refers to no known node"));
                            return s
                        },
                        g = function() {
                            var e = v("initialFocus");
                            if (!1 === e) return !1;
                            if (void 0 === e)
                                if (y(t.activeElement) >= 0) e = t.activeElement;
                                else {
                                    var o = s.tabbableGroups[0];
                                    e = o && o.firstTabbableNode || v("fallbackFocus")
                                }
                            if (!e) throw new Error("Your focus-trap needs to have at least one focusable element");
                            return e
                        },
                        f = function() {
                            if (s.containerGroups = s.containers.map((function(e) {
                                    var o = (0, r.tabbable)(e, n.tabbableOptions),
                                        i = (0, r.focusable)(e, n.tabbableOptions);
                                    return {
                                        container: e,
                                        tabbableNodes: o,
                                        focusableNodes: i,
                                        firstTabbableNode: o.length > 0 ? o[0] : null,
                                        lastTabbableNode: o.length > 0 ? o[o.length - 1] : null,
                                        nextTabbableNode: function(e) {
                                            var o = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                                                t = i.findIndex((function(o) {
                                                    return o === e
                                                }));
                                            if (!(t < 0)) return o ? i.slice(t + 1).find((function(e) {
                                                return (0, r.isTabbable)(e, n.tabbableOptions)
                                            })) : i.slice(0, t).reverse().find((function(e) {
                                                return (0, r.isTabbable)(e, n.tabbableOptions)
                                            }))
                                        }
                                    }
                                })), s.tabbableGroups = s.containerGroups.filter((function(e) {
                                    return e.tabbableNodes.length > 0
                                })), s.tabbableGroups.length <= 0 && !v("fallbackFocus")) throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times")
                        },
                        h = function e(o) {
                            !1 !== o && o !== t.activeElement && (o && o.focus ? (o.focus({
                                preventScroll: !!n.preventScroll
                            }), s.mostRecentlyFocusedNode = o, function(e) {
                                return e.tagName && "input" === e.tagName.toLowerCase() && "function" == typeof e.select
                            }(o) && o.select()) : e(g()))
                        },
                        C = function(e) {
                            var o = v("setReturnFocus", e);
                            return o || !1 !== o && e
                        },
                        T = function(e) {
                            var o = p(e);
                            y(o) >= 0 || (u(n.clickOutsideDeactivates, e) ? i.deactivate({
                                returnFocus: n.returnFocusOnDeactivate && !(0, r.isFocusable)(o, n.tabbableOptions)
                            }) : u(n.allowOutsideClick, e) || e.preventDefault())
                        },
                        b = function(e) {
                            var o = p(e),
                                i = y(o) >= 0;
                            i || o instanceof Document ? i && (s.mostRecentlyFocusedNode = o) : (e.stopImmediatePropagation(), h(s.mostRecentlyFocusedNode || g()))
                        },
                        H = function(e) {
                            if (function(e) {
                                    return "Escape" === e.key || "Esc" === e.key || 27 === e.keyCode
                                }(e) && !1 !== u(n.escapeDeactivates, e)) return e.preventDefault(), void i.deactivate();
                            (function(e) {
                                return "Tab" === e.key || 9 === e.keyCode
                            })(e) && function(e) {
                                var o = p(e);
                                f();
                                var i = null;
                                if (s.tabbableGroups.length > 0) {
                                    var t = y(o),
                                        a = t >= 0 ? s.containerGroups[t] : void 0;
                                    if (t < 0) i = e.shiftKey ? s.tabbableGroups[s.tabbableGroups.length - 1].lastTabbableNode : s.tabbableGroups[0].firstTabbableNode;
                                    else if (e.shiftKey) {
                                        var l = d(s.tabbableGroups, (function(e) {
                                            var i = e.firstTabbableNode;
                                            return o === i
                                        }));
                                        if (l < 0 && (a.container === o || (0, r.isFocusable)(o, n.tabbableOptions) && !(0, r.isTabbable)(o, n.tabbableOptions) && !a.nextTabbableNode(o, !1)) && (l = t), l >= 0) {
                                            var c = 0 === l ? s.tabbableGroups.length - 1 : l - 1;
                                            i = s.tabbableGroups[c].lastTabbableNode
                                        }
                                    } else {
                                        var u = d(s.tabbableGroups, (function(e) {
                                            var i = e.lastTabbableNode;
                                            return o === i
                                        }));
                                        if (u < 0 && (a.container === o || (0, r.isFocusable)(o, n.tabbableOptions) && !(0, r.isTabbable)(o, n.tabbableOptions) && !a.nextTabbableNode(o)) && (u = t), u >= 0) {
                                            var m = u === s.tabbableGroups.length - 1 ? 0 : u + 1;
                                            i = s.tabbableGroups[m].firstTabbableNode
                                        }
                                    }
                                } else i = v("fallbackFocus");
                                i && (e.preventDefault(), h(i))
                            }(e)
                        },
                        A = function(e) {
                            var o = p(e);
                            y(o) >= 0 || u(n.clickOutsideDeactivates, e) || u(n.allowOutsideClick, e) || (e.preventDefault(), e.stopImmediatePropagation())
                        },
                        S = function() {
                            if (s.active) return l.activateTrap(i), s.delayInitialFocusTimer = n.delayInitialFocus ? c((function() {
                                h(g())
                            })) : h(g()), t.addEventListener("focusin", b, !0), t.addEventListener("mousedown", T, {
                                capture: !0,
                                passive: !1
                            }), t.addEventListener("touchstart", T, {
                                capture: !0,
                                passive: !1
                            }), t.addEventListener("click", A, {
                                capture: !0,
                                passive: !1
                            }), t.addEventListener("keydown", H, {
                                capture: !0,
                                passive: !1
                            }), i
                        },
                        N = function() {
                            if (s.active) return t.removeEventListener("focusin", b, !0), t.removeEventListener("mousedown", T, !0), t.removeEventListener("touchstart", T, !0), t.removeEventListener("click", A, !0), t.removeEventListener("keydown", H, !0), i
                        };
                    return (i = {
                        get active() {
                            return s.active
                        },
                        get paused() {
                            return s.paused
                        },
                        activate: function(e) {
                            if (s.active) return this;
                            var o = m(e, "onActivate"),
                                i = m(e, "onPostActivate"),
                                r = m(e, "checkCanFocusTrap");
                            r || f(), s.active = !0, s.paused = !1, s.nodeFocusedBeforeActivation = t.activeElement, o && o();
                            var a = function() {
                                r && f(), S(), i && i()
                            };
                            return r ? (r(s.containers.concat()).then(a, a), this) : (a(), this)
                        },
                        deactivate: function(e) {
                            if (!s.active) return this;
                            var o = a({
                                onDeactivate: n.onDeactivate,
                                onPostDeactivate: n.onPostDeactivate,
                                checkCanReturnFocus: n.checkCanReturnFocus
                            }, e);
                            clearTimeout(s.delayInitialFocusTimer), s.delayInitialFocusTimer = void 0, N(), s.active = !1, s.paused = !1, l.deactivateTrap(i);
                            var r = m(o, "onDeactivate"),
                                t = m(o, "onPostDeactivate"),
                                d = m(o, "checkCanReturnFocus"),
                                u = m(o, "returnFocus", "returnFocusOnDeactivate");
                            r && r();
                            var p = function() {
                                c((function() {
                                    u && h(C(s.nodeFocusedBeforeActivation)), t && t()
                                }))
                            };
                            return u && d ? (d(C(s.nodeFocusedBeforeActivation)).then(p, p), this) : (p(), this)
                        },
                        pause: function() {
                            return s.paused || !s.active || (s.paused = !0, N()), this
                        },
                        unpause: function() {
                            return s.paused && s.active ? (s.paused = !1, f(), S(), this) : this
                        },
                        updateContainerElements: function(e) {
                            var o = [].concat(e).filter(Boolean);
                            return s.containers = o.map((function(e) {
                                return "string" == typeof e ? t.querySelector(e) : e
                            })), s.active && f(), this
                        }
                    }).updateContainerElements(e), i
                }
        },
        5157: (e, o, i) => {
            var r, t = "__lodash_hash_undefined__",
                a = 1 / 0,
                n = "[object Function]",
                s = "[object GeneratorFunction]",
                l = "[object Symbol]",
                c = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
                d = /^\w*$/,
                u = /^\./,
                p = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
                m = /\\(\\)?/g,
                y = /^\[object .+?Constructor\]$/,
                v = "object" == typeof i.g && i.g && i.g.Object === Object && i.g,
                g = "object" == typeof self && self && self.Object === Object && self,
                f = v || g || Function("return this")(),
                h = Array.prototype,
                C = Function.prototype,
                T = Object.prototype,
                b = f["__core-js_shared__"],
                H = (r = /[^.]+$/.exec(b && b.keys && b.keys.IE_PROTO || "")) ? "Symbol(src)_1." + r : "",
                A = C.toString,
                S = T.hasOwnProperty,
                N = T.toString,
                P = RegExp("^" + A.call(S).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
                w = f.Symbol,
                M = h.splice,
                k = R(f, "Map"),
                O = R(Object, "create"),
                E = w ? w.prototype : void 0,
                x = E ? E.toString : void 0;

            function F(e) {
                var o = -1,
                    i = e ? e.length : 0;
                for (this.clear(); ++o < i;) {
                    var r = e[o];
                    this.set(r[0], r[1])
                }
            }

            function D(e) {
                var o = -1,
                    i = e ? e.length : 0;
                for (this.clear(); ++o < i;) {
                    var r = e[o];
                    this.set(r[0], r[1])
                }
            }

            function B(e) {
                var o = -1,
                    i = e ? e.length : 0;
                for (this.clear(); ++o < i;) {
                    var r = e[o];
                    this.set(r[0], r[1])
                }
            }

            function L(e, o) {
                for (var i, r, t = e.length; t--;)
                    if ((i = e[t][0]) === (r = o) || i != i && r != r) return t;
                return -1
            }

            function I(e, o) {
                var i, r, t = e.__data__;
                return ("string" == (r = typeof(i = o)) || "number" == r || "symbol" == r || "boolean" == r ? "__proto__" !== i : null === i) ? t["string" == typeof o ? "string" : "hash"] : t.map
            }

            function R(e, o) {
                var i = function(e, o) {
                    return null == e ? void 0 : e[o]
                }(e, o);
                return function(e) {
                    if (!K(e) || H && H in e) return !1;
                    var o = function(e) {
                        var o = K(e) ? N.call(e) : "";
                        return o == n || o == s
                    }(e) || function(e) {
                        var o = !1;
                        if (null != e && "function" != typeof e.toString) try {
                            o = !!(e + "")
                        } catch (e) {}
                        return o
                    }(e) ? P : y;
                    return o.test(function(e) {
                        if (null != e) {
                            try {
                                return A.call(e)
                            } catch (e) {}
                            try {
                                return e + ""
                            } catch (e) {}
                        }
                        return ""
                    }(e))
                }(i) ? i : void 0
            }
            F.prototype.clear = function() {
                this.__data__ = O ? O(null) : {}
            }, F.prototype.delete = function(e) {
                return this.has(e) && delete this.__data__[e]
            }, F.prototype.get = function(e) {
                var o = this.__data__;
                if (O) {
                    var i = o[e];
                    return i === t ? void 0 : i
                }
                return S.call(o, e) ? o[e] : void 0
            }, F.prototype.has = function(e) {
                var o = this.__data__;
                return O ? void 0 !== o[e] : S.call(o, e)
            }, F.prototype.set = function(e, o) {
                return this.__data__[e] = O && void 0 === o ? t : o, this
            }, D.prototype.clear = function() {
                this.__data__ = []
            }, D.prototype.delete = function(e) {
                var o = this.__data__,
                    i = L(o, e);
                return !(i < 0 || (i == o.length - 1 ? o.pop() : M.call(o, i, 1), 0))
            }, D.prototype.get = function(e) {
                var o = this.__data__,
                    i = L(o, e);
                return i < 0 ? void 0 : o[i][1]
            }, D.prototype.has = function(e) {
                return L(this.__data__, e) > -1
            }, D.prototype.set = function(e, o) {
                var i = this.__data__,
                    r = L(i, e);
                return r < 0 ? i.push([e, o]) : i[r][1] = o, this
            }, B.prototype.clear = function() {
                this.__data__ = {
                    hash: new F,
                    map: new(k || D),
                    string: new F
                }
            }, B.prototype.delete = function(e) {
                return I(this, e).delete(e)
            }, B.prototype.get = function(e) {
                return I(this, e).get(e)
            }, B.prototype.has = function(e) {
                return I(this, e).has(e)
            }, B.prototype.set = function(e, o) {
                return I(this, e).set(e, o), this
            };
            var G = _((function(e) {
                var o;
                e = null == (o = e) ? "" : function(e) {
                    if ("string" == typeof e) return e;
                    if (U(e)) return x ? x.call(e) : "";
                    var o = e + "";
                    return "0" == o && 1 / e == -a ? "-0" : o
                }(o);
                var i = [];
                return u.test(e) && i.push(""), e.replace(p, (function(e, o, r, t) {
                    i.push(r ? t.replace(m, "$1") : o || e)
                })), i
            }));

            function j(e) {
                if ("string" == typeof e || U(e)) return e;
                var o = e + "";
                return "0" == o && 1 / e == -a ? "-0" : o
            }

            function _(e, o) {
                if ("function" != typeof e || o && "function" != typeof o) throw new TypeError("Expected a function");
                var i = function() {
                    var r = arguments,
                        t = o ? o.apply(this, r) : r[0],
                        a = i.cache;
                    if (a.has(t)) return a.get(t);
                    var n = e.apply(this, r);
                    return i.cache = a.set(t, n), n
                };
                return i.cache = new(_.Cache || B), i
            }
            _.Cache = B;
            var z = Array.isArray;

            function K(e) {
                var o = typeof e;
                return !!e && ("object" == o || "function" == o)
            }

            function U(e) {
                return "symbol" == typeof e || function(e) {
                    return !!e && "object" == typeof e
                }(e) && N.call(e) == l
            }
            e.exports = function(e, o, i) {
                var r = null == e ? void 0 : function(e, o) {
                    var i;
                    o = function(e, o) {
                        if (z(e)) return !1;
                        var i = typeof e;
                        return !("number" != i && "symbol" != i && "boolean" != i && null != e && !U(e)) || d.test(e) || !c.test(e) || null != o && e in Object(o)
                    }(o, e) ? [o] : z(i = o) ? i : G(i);
                    for (var r = 0, t = o.length; null != e && r < t;) e = e[j(o[r++])];
                    return r && r == t ? e : void 0
                }(e, o);
                return void 0 === r ? i : r
            }
        },
        6999: (e, o, i) => {
            "use strict";
            var r = i(6848);

            function t() {}

            function a() {}
            a.resetWarningCache = t, e.exports = function() {
                function e(e, o, i, t, a, n) {
                    if (n !== r) {
                        var s = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                        throw s.name = "Invariant Violation", s
                    }
                }

                function o() {
                    return e
                }
                e.isRequired = e;
                var i = {
                    array: e,
                    bigint: e,
                    bool: e,
                    func: e,
                    number: e,
                    object: e,
                    string: e,
                    symbol: e,
                    any: e,
                    arrayOf: o,
                    element: e,
                    elementType: e,
                    instanceOf: o,
                    node: e,
                    objectOf: o,
                    oneOf: o,
                    oneOfType: o,
                    shape: o,
                    exact: o,
                    checkPropTypes: a,
                    resetWarningCache: t
                };
                return i.PropTypes = i, i
            }
        },
        9067: (e, o, i) => {
            e.exports = i(6999)()
        },
        6848: e => {
            "use strict";
            e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
        },
        9715: (e, o, i) => {
            "use strict";
            i.d(o, {
                A: () => S
            });
            var r = i(9575);

            function t(e, o) {
                if (null == e) return {};
                var i = {};
                for (var r in e)
                    if ({}.hasOwnProperty.call(e, r)) {
                        if (o.includes(r)) continue;
                        i[r] = e[r]
                    }
                return i
            }
            var a = i(9140),
                n = i(9568);

            function s(e, o) {
                return e.replace(new RegExp("(^|\\s)" + o + "(?:\\s|$)", "g"), "$1").replace(/\s+/g, " ").replace(/^\s*|\s*$/g, "")
            }
            var l = i(1594),
                c = i.n(l),
                d = i(5206),
                u = i.n(d);
            const p = c().createContext(null);
            var m = function(e) {
                    return e.scrollTop
                },
                y = "unmounted",
                v = "exited",
                g = "entering",
                f = "entered",
                h = "exiting",
                C = function(e) {
                    function o(o, i) {
                        var r;
                        r = e.call(this, o, i) || this;
                        var t, a = i && !i.isMounting ? o.enter : o.appear;
                        return r.appearStatus = null, o.in ? a ? (t = v, r.appearStatus = g) : t = f : t = o.unmountOnExit || o.mountOnEnter ? y : v, r.state = {
                            status: t
                        }, r.nextCallback = null, r
                    }(0, a.A)(o, e), o.getDerivedStateFromProps = function(e, o) {
                        return e.in && o.status === y ? {
                            status: v
                        } : null
                    };
                    var i = o.prototype;
                    return i.componentDidMount = function() {
                        this.updateStatus(!0, this.appearStatus)
                    }, i.componentDidUpdate = function(e) {
                        var o = null;
                        if (e !== this.props) {
                            var i = this.state.status;
                            this.props.in ? i !== g && i !== f && (o = g) : i !== g && i !== f || (o = h)
                        }
                        this.updateStatus(!1, o)
                    }, i.componentWillUnmount = function() {
                        this.cancelNextCallback()
                    }, i.getTimeouts = function() {
                        var e, o, i, r = this.props.timeout;
                        return e = o = i = r, null != r && "number" != typeof r && (e = r.exit, o = r.enter, i = void 0 !== r.appear ? r.appear : o), {
                            exit: e,
                            enter: o,
                            appear: i
                        }
                    }, i.updateStatus = function(e, o) {
                        if (void 0 === e && (e = !1), null !== o)
                            if (this.cancelNextCallback(), o === g) {
                                if (this.props.unmountOnExit || this.props.mountOnEnter) {
                                    var i = this.props.nodeRef ? this.props.nodeRef.current : u().findDOMNode(this);
                                    i && m(i)
                                }
                                this.performEnter(e)
                            } else this.performExit();
                        else this.props.unmountOnExit && this.state.status === v && this.setState({
                            status: y
                        })
                    }, i.performEnter = function(e) {
                        var o = this,
                            i = this.props.enter,
                            r = this.context ? this.context.isMounting : e,
                            t = this.props.nodeRef ? [r] : [u().findDOMNode(this), r],
                            a = t[0],
                            n = t[1],
                            s = this.getTimeouts(),
                            l = r ? s.appear : s.enter;
                        e || i ? (this.props.onEnter(a, n), this.safeSetState({
                            status: g
                        }, (function() {
                            o.props.onEntering(a, n), o.onTransitionEnd(l, (function() {
                                o.safeSetState({
                                    status: f
                                }, (function() {
                                    o.props.onEntered(a, n)
                                }))
                            }))
                        }))) : this.safeSetState({
                            status: f
                        }, (function() {
                            o.props.onEntered(a)
                        }))
                    }, i.performExit = function() {
                        var e = this,
                            o = this.props.exit,
                            i = this.getTimeouts(),
                            r = this.props.nodeRef ? void 0 : u().findDOMNode(this);
                        o ? (this.props.onExit(r), this.safeSetState({
                            status: h
                        }, (function() {
                            e.props.onExiting(r), e.onTransitionEnd(i.exit, (function() {
                                e.safeSetState({
                                    status: v
                                }, (function() {
                                    e.props.onExited(r)
                                }))
                            }))
                        }))) : this.safeSetState({
                            status: v
                        }, (function() {
                            e.props.onExited(r)
                        }))
                    }, i.cancelNextCallback = function() {
                        null !== this.nextCallback && (this.nextCallback.cancel(), this.nextCallback = null)
                    }, i.safeSetState = function(e, o) {
                        o = this.setNextCallback(o), this.setState(e, o)
                    }, i.setNextCallback = function(e) {
                        var o = this,
                            i = !0;
                        return this.nextCallback = function(r) {
                            i && (i = !1, o.nextCallback = null, e(r))
                        }, this.nextCallback.cancel = function() {
                            i = !1
                        }, this.nextCallback
                    }, i.onTransitionEnd = function(e, o) {
                        this.setNextCallback(o);
                        var i = this.props.nodeRef ? this.props.nodeRef.current : u().findDOMNode(this),
                            r = null == e && !this.props.addEndListener;
                        if (i && !r) {
                            if (this.props.addEndListener) {
                                var t = this.props.nodeRef ? [this.nextCallback] : [i, this.nextCallback],
                                    a = t[0],
                                    n = t[1];
                                this.props.addEndListener(a, n)
                            }
                            null != e && setTimeout(this.nextCallback, e)
                        } else setTimeout(this.nextCallback, 0)
                    }, i.render = function() {
                        var e = this.state.status;
                        if (e === y) return null;
                        var o = this.props,
                            i = o.children,
                            r = (o.in, o.mountOnEnter, o.unmountOnExit, o.appear, o.enter, o.exit, o.timeout, o.addEndListener, o.onEnter, o.onEntering, o.onEntered, o.onExit, o.onExiting, o.onExited, o.nodeRef, t(o, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]));
                        return c().createElement(p.Provider, {
                            value: null
                        }, "function" == typeof i ? i(e, r) : c().cloneElement(c().Children.only(i), r))
                    }, o
                }(c().Component);

            function T() {}
            C.contextType = p, C.propTypes = {}, C.defaultProps = { in: !1,
                mountOnEnter: !1,
                unmountOnExit: !1,
                appear: !1,
                enter: !0,
                exit: !0,
                onEnter: T,
                onEntering: T,
                onEntered: T,
                onExit: T,
                onExiting: T,
                onExited: T
            }, C.UNMOUNTED = y, C.EXITED = v, C.ENTERING = g, C.ENTERED = f, C.EXITING = h;
            const b = C;
            var H = function(e, o) {
                    return e && o && o.split(" ").forEach((function(o) {
                        return r = o, void((i = e).classList ? i.classList.remove(r) : "string" == typeof i.className ? i.className = s(i.className, r) : i.setAttribute("class", s(i.className && i.className.baseVal || "", r)));
                        var i, r
                    }))
                },
                A = function(e) {
                    function o() {
                        for (var o, i = arguments.length, r = new Array(i), t = 0; t < i; t++) r[t] = arguments[t];
                        return (o = e.call.apply(e, [this].concat(r)) || this).appliedClasses = {
                            appear: {},
                            enter: {},
                            exit: {}
                        }, o.onEnter = function(e, i) {
                            var r = o.resolveArguments(e, i),
                                t = r[0],
                                a = r[1];
                            o.removeClasses(t, "exit"), o.addClass(t, a ? "appear" : "enter", "base"), o.props.onEnter && o.props.onEnter(e, i)
                        }, o.onEntering = function(e, i) {
                            var r = o.resolveArguments(e, i),
                                t = r[0],
                                a = r[1] ? "appear" : "enter";
                            o.addClass(t, a, "active"), o.props.onEntering && o.props.onEntering(e, i)
                        }, o.onEntered = function(e, i) {
                            var r = o.resolveArguments(e, i),
                                t = r[0],
                                a = r[1] ? "appear" : "enter";
                            o.removeClasses(t, a), o.addClass(t, a, "done"), o.props.onEntered && o.props.onEntered(e, i)
                        }, o.onExit = function(e) {
                            var i = o.resolveArguments(e)[0];
                            o.removeClasses(i, "appear"), o.removeClasses(i, "enter"), o.addClass(i, "exit", "base"), o.props.onExit && o.props.onExit(e)
                        }, o.onExiting = function(e) {
                            var i = o.resolveArguments(e)[0];
                            o.addClass(i, "exit", "active"), o.props.onExiting && o.props.onExiting(e)
                        }, o.onExited = function(e) {
                            var i = o.resolveArguments(e)[0];
                            o.removeClasses(i, "exit"), o.addClass(i, "exit", "done"), o.props.onExited && o.props.onExited(e)
                        }, o.resolveArguments = function(e, i) {
                            return o.props.nodeRef ? [o.props.nodeRef.current, e] : [e, i]
                        }, o.getClassNames = function(e) {
                            var i = o.props.classNames,
                                r = "string" == typeof i,
                                t = r ? (r && i ? i + "-" : "") + e : i[e];
                            return {
                                baseClassName: t,
                                activeClassName: r ? t + "-active" : i[e + "Active"],
                                doneClassName: r ? t + "-done" : i[e + "Done"]
                            }
                        }, o
                    }(0, a.A)(o, e);
                    var i = o.prototype;
                    return i.addClass = function(e, o, i) {
                        var r = this.getClassNames(o)[i + "ClassName"],
                            t = this.getClassNames("enter").doneClassName;
                        "appear" === o && "done" === i && t && (r += " " + t), "active" === i && e && m(e), r && (this.appliedClasses[o][i] = r, function(e, o) {
                            e && o && o.split(" ").forEach((function(o) {
                                return r = o, void((i = e).classList ? i.classList.add(r) : (0, n.A)(i, r) || ("string" == typeof i.className ? i.className = i.className + " " + r : i.setAttribute("class", (i.className && i.className.baseVal || "") + " " + r)));
                                var i, r
                            }))
                        }(e, r))
                    }, i.removeClasses = function(e, o) {
                        var i = this.appliedClasses[o],
                            r = i.base,
                            t = i.active,
                            a = i.done;
                        this.appliedClasses[o] = {}, r && H(e, r), t && H(e, t), a && H(e, a)
                    }, i.render = function() {
                        var e = this.props,
                            o = (e.classNames, t(e, ["classNames"]));
                        return c().createElement(b, (0, r.A)({}, o, {
                            onEnter: this.onEnter,
                            onEntered: this.onEntered,
                            onEntering: this.onEntering,
                            onExit: this.onExit,
                            onExiting: this.onExiting,
                            onExited: this.onExited
                        }))
                    }, o
                }(c().Component);
            A.defaultProps = {
                classNames: ""
            }, A.propTypes = {};
            const S = A
        },
        679: (e, o, i) => {
            "use strict";
            i.r(o), i.d(o, {
                focusable: () => C,
                isFocusable: () => H,
                isTabbable: () => T,
                tabbable: () => h
            });
            var r = 818 != i.j ? ["input", "select", "textarea", "a[href]", "button", "[tabindex]:not(slot)", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])', "details>summary:first-of-type", "details"] : null,
                t = 818 != i.j ? r.join(",") : null,
                a = "undefined" == typeof Element,
                n = a ? function() {} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector,
                s = !a && Element.prototype.getRootNode ? function(e) {
                    return e.getRootNode()
                } : function(e) {
                    return e.ownerDocument
                },
                l = function(e, o, i) {
                    var r = Array.prototype.slice.apply(e.querySelectorAll(t));
                    return o && n.call(e, t) && r.unshift(e), r.filter(i)
                },
                c = function e(o, i, r) {
                    for (var a = [], s = Array.from(o); s.length;) {
                        var l = s.shift();
                        if ("SLOT" === l.tagName) {
                            var c = l.assignedElements(),
                                d = e(c.length ? c : l.children, !0, r);
                            r.flatten ? a.push.apply(a, d) : a.push({
                                scope: l,
                                candidates: d
                            })
                        } else {
                            n.call(l, t) && r.filter(l) && (i || !o.includes(l)) && a.push(l);
                            var u = l.shadowRoot || "function" == typeof r.getShadowRoot && r.getShadowRoot(l),
                                p = !r.shadowRootFilter || r.shadowRootFilter(l);
                            if (u && p) {
                                var m = e(!0 === u ? l.children : u.children, !0, r);
                                r.flatten ? a.push.apply(a, m) : a.push({
                                    scope: l,
                                    candidates: m
                                })
                            } else s.unshift.apply(s, l.children)
                        }
                    }
                    return a
                },
                d = function(e, o) {
                    return e.tabIndex < 0 && (o || /^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName) || e.isContentEditable) && isNaN(parseInt(e.getAttribute("tabindex"), 10)) ? 0 : e.tabIndex
                },
                u = function(e, o) {
                    return e.tabIndex === o.tabIndex ? e.documentOrder - o.documentOrder : e.tabIndex - o.tabIndex
                },
                p = function(e) {
                    return "INPUT" === e.tagName
                },
                m = function(e) {
                    var o = e.getBoundingClientRect(),
                        i = o.width,
                        r = o.height;
                    return 0 === i && 0 === r
                },
                y = function(e, o) {
                    return !(o.disabled || function(e) {
                        return p(e) && "hidden" === e.type
                    }(o) || function(e, o) {
                        var i = o.displayCheck,
                            r = o.getShadowRoot;
                        if ("hidden" === getComputedStyle(e).visibility) return !0;
                        var t = n.call(e, "details>summary:first-of-type") ? e.parentElement : e;
                        if (n.call(t, "details:not([open]) *")) return !0;
                        var a = s(e).host,
                            l = (null == a ? void 0 : a.ownerDocument.contains(a)) || e.ownerDocument.contains(e);
                        if (i && "full" !== i) {
                            if ("non-zero-area" === i) return m(e)
                        } else {
                            if ("function" == typeof r) {
                                for (var c = e; e;) {
                                    var d = e.parentElement,
                                        u = s(e);
                                    if (d && !d.shadowRoot && !0 === r(d)) return m(e);
                                    e = e.assignedSlot ? e.assignedSlot : d || u === e.ownerDocument ? d : u.host
                                }
                                e = c
                            }
                            if (l) return !e.getClientRects().length
                        }
                        return !1
                    }(o, e) || function(e) {
                        return "DETAILS" === e.tagName && Array.prototype.slice.apply(e.children).some((function(e) {
                            return "SUMMARY" === e.tagName
                        }))
                    }(o) || function(e) {
                        if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))
                            for (var o = e.parentElement; o;) {
                                if ("FIELDSET" === o.tagName && o.disabled) {
                                    for (var i = 0; i < o.children.length; i++) {
                                        var r = o.children.item(i);
                                        if ("LEGEND" === r.tagName) return !!n.call(o, "fieldset[disabled] *") || !r.contains(e)
                                    }
                                    return !0
                                }
                                o = o.parentElement
                            }
                        return !1
                    }(o))
                },
                v = function(e, o) {
                    return !(function(e) {
                        return function(e) {
                            return p(e) && "radio" === e.type
                        }(e) && ! function(e) {
                            if (!e.name) return !0;
                            var o, i = e.form || s(e),
                                r = function(e) {
                                    return i.querySelectorAll('input[type="radio"][name="' + e + '"]')
                                };
                            if ("undefined" != typeof window && void 0 !== window.CSS && "function" == typeof window.CSS.escape) o = r(window.CSS.escape(e.name));
                            else try {
                                o = r(e.name)
                            } catch (e) {
                                return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", e.message), !1
                            }
                            var t = function(e, o) {
                                for (var i = 0; i < e.length; i++)
                                    if (e[i].checked && e[i].form === o) return e[i]
                            }(o, e.form);
                            return !t || t === e
                        }(e)
                    }(o) || d(o) < 0 || !y(e, o))
                },
                g = function(e) {
                    var o = parseInt(e.getAttribute("tabindex"), 10);
                    return !!(isNaN(o) || o >= 0)
                },
                f = function e(o) {
                    var i = [],
                        r = [];
                    return o.forEach((function(o, t) {
                        var a = !!o.scope,
                            n = a ? o.scope : o,
                            s = d(n, a),
                            l = a ? e(o.candidates) : n;
                        0 === s ? a ? i.push.apply(i, l) : i.push(n) : r.push({
                            documentOrder: t,
                            tabIndex: s,
                            item: o,
                            isScope: a,
                            content: l
                        })
                    })), r.sort(u).reduce((function(e, o) {
                        return o.isScope ? e.push.apply(e, o.content) : e.push(o.content), e
                    }), []).concat(i)
                },
                h = function(e, o) {
                    var i;
                    return i = (o = o || {}).getShadowRoot ? c([e], o.includeContainer, {
                        filter: v.bind(null, o),
                        flatten: !1,
                        getShadowRoot: o.getShadowRoot,
                        shadowRootFilter: g
                    }) : l(e, o.includeContainer, v.bind(null, o)), f(i)
                },
                C = function(e, o) {
                    return (o = o || {}).getShadowRoot ? c([e], o.includeContainer, {
                        filter: y.bind(null, o),
                        flatten: !0,
                        getShadowRoot: o.getShadowRoot
                    }) : l(e, o.includeContainer, y.bind(null, o))
                },
                T = function(e, o) {
                    if (o = o || {}, !e) throw new Error("No node provided");
                    return !1 !== n.call(e, t) && v(o, e)
                },
                b = 818 != i.j ? r.concat("iframe").join(",") : null,
                H = function(e, o) {
                    if (o = o || {}, !e) throw new Error("No node provided");
                    return !1 !== n.call(e, b) && y(o, e)
                }
        },
        6284: (e, o, i) => {
            "use strict";

            function r(e, o) {
                (null == o || o > e.length) && (o = e.length);
                for (var i = 0, r = Array(o); i < o; i++) r[i] = e[i];
                return r
            }
            i.d(o, {
                A: () => r
            })
        },
        6488: (e, o, i) => {
            "use strict";

            function r(e) {
                if (Array.isArray(e)) return e
            }
            i.d(o, {
                A: () => r
            })
        },
        1979: (e, o, i) => {
            "use strict";
            i.d(o, {
                A: () => t
            });
            var r = i(7545);

            function t(e, o, i) {
                return (o = function(e) {
                    var o = function(e) {
                        if ("object" != (0, r.A)(e) || !e) return e;
                        var o = e[Symbol.toPrimitive];
                        if (void 0 !== o) {
                            var i = o.call(e, "string");
                            if ("object" != (0, r.A)(i)) return i;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return String(e)
                    }(e);
                    return "symbol" == (0, r.A)(o) ? o : o + ""
                }(o)) in e ? Object.defineProperty(e, o, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[o] = i, e
            }
        },
        9575: (e, o, i) => {
            "use strict";

            function r() {
                return r = Object.assign ? Object.assign.bind() : function(e) {
                    for (var o = 1; o < arguments.length; o++) {
                        var i = arguments[o];
                        for (var r in i)({}).hasOwnProperty.call(i, r) && (e[r] = i[r])
                    }
                    return e
                }, r.apply(null, arguments)
            }
            i.d(o, {
                A: () => r
            })
        },
        9140: (e, o, i) => {
            "use strict";
            if (i.d(o, {
                    A: () => t
                }), 818 != i.j) var r = i(1087);

            function t(e, o) {
                e.prototype = Object.create(o.prototype), e.prototype.constructor = e, (0, r.A)(e, o)
            }
        },
        3171: (e, o, i) => {
            "use strict";

            function r(e, o) {
                var i = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null != i) {
                    var r, t, a, n, s = [],
                        l = !0,
                        c = !1;
                    try {
                        if (a = (i = i.call(e)).next, 0 === o) {
                            if (Object(i) !== i) return;
                            l = !1
                        } else
                            for (; !(l = (r = a.call(i)).done) && (s.push(r.value), s.length !== o); l = !0);
                    } catch (e) {
                        c = !0, t = e
                    } finally {
                        try {
                            if (!l && null != i.return && (n = i.return(), Object(n) !== n)) return
                        } finally {
                            if (c) throw t
                        }
                    }
                    return s
                }
            }
            i.d(o, {
                A: () => r
            })
        },
        5405: (e, o, i) => {
            "use strict";

            function r() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            i.d(o, {
                A: () => r
            })
        },
        1087: (e, o, i) => {
            "use strict";

            function r(e, o) {
                return r = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, o) {
                    return e.__proto__ = o, e
                }, r(e, o)
            }
            i.d(o, {
                A: () => r
            })
        },
        9082: (e, o, i) => {
            "use strict";
            if (i.d(o, {
                    A: () => s
                }), 818 != i.j) var r = i(6488);
            if (818 != i.j) var t = i(3171);
            if (818 != i.j) var a = i(7985);
            if (818 != i.j) var n = i(5405);

            function s(e, o) {
                return (0, r.A)(e) || (0, t.A)(e, o) || (0, a.A)(e, o) || (0, n.A)()
            }
        },
        2119: (e, o, i) => {
            "use strict";

            function r(e, o) {
                return o || (o = e.slice(0)), Object.freeze(Object.defineProperties(e, {
                    raw: {
                        value: Object.freeze(o)
                    }
                }))
            }
            i.d(o, {
                A: () => r
            })
        },
        7545: (e, o, i) => {
            "use strict";

            function r(e) {
                return r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, r(e)
            }
            i.d(o, {
                A: () => r
            })
        },
        7985: (e, o, i) => {
            "use strict";
            if (i.d(o, {
                    A: () => t
                }), 818 != i.j) var r = i(6284);

            function t(e, o) {
                if (e) {
                    if ("string" == typeof e) return (0, r.A)(e, o);
                    var i = {}.toString.call(e).slice(8, -1);
                    return "Object" === i && e.constructor && (i = e.constructor.name), "Map" === i || "Set" === i ? Array.from(e) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? (0, r.A)(e, o) : void 0
                }
            }
        },
        3551: (e, o, i) => {
            "use strict";
            if (i.d(o, {
                    l: () => s
                }), 818 != i.j) var r = i(4235);
            if (818 != i.j) var t = i(7318);
            if (818 != i.j) var a = i(7425);
            if (818 != i.j) var n = i(1455);

            function s(e) {
                const o = (0, r.T)(e);
                if ("virtual" === (0, n.ME)()) {
                    let i = o.activeElement;
                    (0, t.v)((() => {
                        o.activeElement === i && e.isConnected && (0, a.e)(e)
                    }))
                } else(0, a.e)(e)
            }
        },
        7789: (e, o, i) => {
            "use strict";
            if (i.d(o, {
                    J: () => t
                }), 818 != i.j) var r = i(4235);

            function t(e, o) {
                return "#comment" !== e.nodeName && function(e) {
                    const o = (0, r.m)(e);
                    if (!(e instanceof o.HTMLElement || e instanceof o.SVGElement)) return !1;
                    let {
                        display: i,
                        visibility: t
                    } = e.style, a = "none" !== i && "hidden" !== t && "collapse" !== t;
                    if (a) {
                        const {
                            getComputedStyle: o
                        } = e.ownerDocument.defaultView;
                        let {
                            display: i,
                            visibility: r
                        } = o(e);
                        a = "none" !== i && "hidden" !== r && "collapse" !== r
                    }
                    return a
                }(e) && function(e, o) {
                    return !e.hasAttribute("hidden") && !e.hasAttribute("data-react-aria-prevent-focus") && ("DETAILS" !== e.nodeName || !o || "SUMMARY" === o.nodeName || e.hasAttribute("open"))
                }(e, o) && (!e.parentElement || t(e.parentElement, e))
            }
        },
        1930: (e, o, i) => {
            "use strict";

            function r(e) {
                if (!e) return;
                let o = !0;
                return i => {
                    let r = { ...i,
                        preventDefault() {
                            i.preventDefault()
                        },
                        isDefaultPrevented: () => i.isDefaultPrevented(),
                        stopPropagation() {
                            console.error("stopPropagation is now the default behavior for events in React Spectrum. You can use continuePropagation() to revert this behavior.")
                        },
                        continuePropagation() {
                            o = !1
                        }
                    };
                    e(r), o && i.stopPropagation()
                }
            }
            i.d(o, {
                T: () => r
            })
        },
        1541: (e, o, i) => {
            "use strict";
            if (i.d(o, {
                    i: () => n
                }), 818 != i.j) var r = i(2501);
            var t = i(1594);
            if (818 != i.j) var a = i(4235);

            function n(e) {
                let {
                    isDisabled: o,
                    onFocus: i,
                    onBlur: n,
                    onFocusChange: s
                } = e;
                const l = (0, t.useCallback)((e => {
                        if (e.target === e.currentTarget) return n && n(e), s && s(!1), !0
                    }), [n, s]),
                    c = (0, r.y)(l),
                    d = (0, t.useCallback)((e => {
                        const o = (0, a.T)(e.target);
                        e.target === e.currentTarget && o.activeElement === e.target && (i && i(e), s && s(!0), c(e))
                    }), [s, i, c]);
                return {
                    focusProps: {
                        onFocus: !o && (i || s || n) ? d : void 0,
                        onBlur: o || !n && !s ? void 0 : l
                    }
                }
            }
        },
        1455: (e, o, i) => {
            "use strict";
            i.d(o, {
                ME: () => b,
                pP: () => T,
                K7: () => A
            });
            var r = i(2401),
                t = i(4235),
                a = i(1594);
            let n = null,
                s = new Set,
                l = new Map,
                c = !1,
                d = !1;
            const u = {
                Tab: !0,
                Escape: !0
            };

            function p(e, o) {
                for (let i of s) i(e, o)
            }

            function m(e) {
                c = !0,
                    function(e) {
                        return !(e.metaKey || !(0, r.cX)() && e.altKey || e.ctrlKey || "Control" === e.key || "Shift" === e.key || "Meta" === e.key)
                    }(e) && (n = "keyboard", p("keyboard", e))
            }

            function y(e) {
                n = "pointer", "mousedown" !== e.type && "pointerdown" !== e.type || (c = !0, p("pointer", e))
            }

            function v(e) {
                var o;
                (0 === (o = e).mozInputSource && o.isTrusted || ((0, r.m0)() && o.pointerType ? "click" === o.type && 1 === o.buttons : 0 === o.detail && !o.pointerType)) && (c = !0, n = "virtual")
            }

            function g(e) {
                e.target !== window && e.target !== document && (c || d || (n = "virtual", p("virtual", e)), c = !1, d = !1)
            }

            function f() {
                c = !1, d = !0
            }

            function h(e) {
                if ("undefined" == typeof window || l.get((0, t.m)(e))) return;
                const o = (0, t.m)(e),
                    i = (0, t.T)(e);
                let r = o.HTMLElement.prototype.focus;
                o.HTMLElement.prototype.focus = function() {
                    c = !0, r.apply(this, arguments)
                }, i.addEventListener("keydown", m, !0), i.addEventListener("keyup", m, !0), i.addEventListener("click", v, !0), o.addEventListener("focus", g, !0), o.addEventListener("blur", f, !1), "undefined" != typeof PointerEvent ? (i.addEventListener("pointerdown", y, !0), i.addEventListener("pointermove", y, !0), i.addEventListener("pointerup", y, !0)) : (i.addEventListener("mousedown", y, !0), i.addEventListener("mousemove", y, !0), i.addEventListener("mouseup", y, !0)), o.addEventListener("beforeunload", (() => {
                    C(e)
                }), {
                    once: !0
                }), l.set(o, {
                    focus: r
                })
            }
            const C = (e, o) => {
                const i = (0, t.m)(e),
                    r = (0, t.T)(e);
                o && r.removeEventListener("DOMContentLoaded", o), l.has(i) && (i.HTMLElement.prototype.focus = l.get(i).focus, r.removeEventListener("keydown", m, !0), r.removeEventListener("keyup", m, !0), r.removeEventListener("click", v, !0), i.removeEventListener("focus", g, !0), i.removeEventListener("blur", f, !1), "undefined" != typeof PointerEvent ? (r.removeEventListener("pointerdown", y, !0), r.removeEventListener("pointermove", y, !0), r.removeEventListener("pointerup", y, !0)) : (r.removeEventListener("mousedown", y, !0), r.removeEventListener("mousemove", y, !0), r.removeEventListener("mouseup", y, !0)), l.delete(i))
            };

            function T() {
                return "pointer" !== n
            }

            function b() {
                return n
            }
            "undefined" != typeof document && function(e) {
                const o = (0, t.T)(e);
                let i;
                "loading" !== o.readyState ? h(e) : (i = () => {
                    h(e)
                }, o.addEventListener("DOMContentLoaded", i))
            }();
            const H = new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]);

            function A(e, o, i) {
                h(), (0, a.useEffect)((() => {
                    let o = (o, r) => {
                        (function(e, o, i) {
                            var r;
                            const a = "undefined" != typeof window ? (0, t.m)(null == i ? void 0 : i.target).HTMLInputElement : HTMLInputElement,
                                n = "undefined" != typeof window ? (0, t.m)(null == i ? void 0 : i.target).HTMLTextAreaElement : HTMLTextAreaElement,
                                s = "undefined" != typeof window ? (0, t.m)(null == i ? void 0 : i.target).HTMLElement : HTMLElement,
                                l = "undefined" != typeof window ? (0, t.m)(null == i ? void 0 : i.target).KeyboardEvent : KeyboardEvent;
                            return !((e = e || (null == i ? void 0 : i.target) instanceof a && !H.has(null == i || null === (r = i.target) || void 0 === r ? void 0 : r.type) || (null == i ? void 0 : i.target) instanceof n || (null == i ? void 0 : i.target) instanceof s && (null == i ? void 0 : i.target.isContentEditable)) && "keyboard" === o && i instanceof l && !u[i.key])
                        })(!!(null == i ? void 0 : i.isTextInput), o, r) && e(T())
                    };
                    return s.add(o), () => {
                        s.delete(o)
                    }
                }), o)
            }
        },
        180: (e, o, i) => {
            "use strict";
            if (i.d(o, {
                    R: () => a
                }), 818 != i.j) var r = i(2501);
            var t = i(1594);

            function a(e) {
                let {
                    isDisabled: o,
                    onBlurWithin: i,
                    onFocusWithin: a,
                    onFocusWithinChange: n
                } = e, s = (0, t.useRef)({
                    isFocusWithin: !1
                }), l = (0, t.useCallback)((e => {
                    s.current.isFocusWithin && !e.currentTarget.contains(e.relatedTarget) && (s.current.isFocusWithin = !1, i && i(e), n && n(!1))
                }), [i, n, s]), c = (0, r.y)(l), d = (0, t.useCallback)((e => {
                    s.current.isFocusWithin || document.activeElement !== e.target || (a && a(e), n && n(!0), s.current.isFocusWithin = !0, c(e))
                }), [a, n, c]);
                return o ? {
                    focusWithinProps: {
                        onFocus: void 0,
                        onBlur: void 0
                    }
                } : {
                    focusWithinProps: {
                        onFocus: d,
                        onBlur: l
                    }
                }
            }
        },
        884: (e, o, i) => {
            "use strict";
            if (i.d(o, {
                    d: () => t
                }), 818 != i.j) var r = i(1930);

            function t(e) {
                return {
                    keyboardProps: e.isDisabled ? {} : {
                        onKeyDown: (0, r.T)(e.onKeyDown),
                        onKeyUp: (0, r.T)(e.onKeyUp)
                    }
                }
            }
        },
        2501: (e, o, i) => {
            "use strict";
            i.d(o, {
                y: () => s
            });
            var r = i(1594);
            if (818 != i.j) var t = i(7428);
            if (818 != i.j) var a = i(430);
            class n {
                isDefaultPrevented() {
                    return this.nativeEvent.defaultPrevented
                }
                preventDefault() {
                    this.defaultPrevented = !0, this.nativeEvent.preventDefault()
                }
                stopPropagation() {
                    this.nativeEvent.stopPropagation(), this.isPropagationStopped = () => !0
                }
                isPropagationStopped() {
                    return !1
                }
                persist() {}
                constructor(e, o) {
                    this.nativeEvent = o, this.target = o.target, this.currentTarget = o.currentTarget, this.relatedTarget = o.relatedTarget, this.bubbles = o.bubbles, this.cancelable = o.cancelable, this.defaultPrevented = o.defaultPrevented, this.eventPhase = o.eventPhase, this.isTrusted = o.isTrusted, this.timeStamp = o.timeStamp, this.type = e
                }
            }

            function s(e) {
                let o = (0, r.useRef)({
                    isFocused: !1,
                    observer: null
                });
                (0, t.N)((() => {
                    const e = o.current;
                    return () => {
                        e.observer && (e.observer.disconnect(), e.observer = null)
                    }
                }), []);
                let i = (0, a.J)((o => {
                    null == e || e(o)
                }));
                return (0, r.useCallback)((e => {
                    if (e.target instanceof HTMLButtonElement || e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement || e.target instanceof HTMLSelectElement) {
                        o.current.isFocused = !0;
                        let r = e.target,
                            t = e => {
                                o.current.isFocused = !1, r.disabled && i(new n("blur", e)), o.current.observer && (o.current.observer.disconnect(), o.current.observer = null)
                            };
                        r.addEventListener("focusout", t, {
                            once: !0
                        }), o.current.observer = new MutationObserver((() => {
                            if (o.current.isFocused && r.disabled) {
                                var e;
                                null === (e = o.current.observer) || void 0 === e || e.disconnect();
                                let i = r === document.activeElement ? null : document.activeElement;
                                r.dispatchEvent(new FocusEvent("blur", {
                                    relatedTarget: i
                                })), r.dispatchEvent(new FocusEvent("focusout", {
                                    bubbles: !0,
                                    relatedTarget: i
                                }))
                            }
                        })), o.current.observer.observe(r, {
                            attributes: !0,
                            attributeFilter: ["disabled"]
                        })
                    }
                }), [i])
            }
        },
        1814: (e, o, i) => {
            "use strict";
            i.d(o, {
                WX: () => c
            });
            var r = i(1594);
            const t = {
                    prefix: String(Math.round(1e10 * Math.random())),
                    current: 0
                },
                a = r.createContext(t),
                n = r.createContext(!1);

            function s(e) {
                let o = (0, r.useContext)(a),
                    i = function(e = !1) {
                        let o = (0, r.useContext)(a),
                            i = (0, r.useRef)(null);
                        if (null === i.current && !e) {
                            var t, n;
                            let e = null === (n = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) || void 0 === n || null === (t = n.ReactCurrentOwner) || void 0 === t ? void 0 : t.current;
                            if (e) {
                                let i = d.get(e);
                                null == i ? d.set(e, {
                                    id: o.current,
                                    state: e.memoizedState
                                }) : e.memoizedState !== i.state && (o.current = i.id, d.delete(e))
                            }
                            i.current = ++o.current
                        }
                        return i.current
                    }(o === t),
                    [s, l] = (0, r.useState)(!0),
                    c = (0, r.useMemo)((() => ({
                        prefix: o === t ? "" : `${o.prefix}-${i}`,
                        current: 0
                    })), [o, i]);
                return "undefined" != typeof document && (0, r.useLayoutEffect)((() => {
                    l(!1)
                }), []), r.createElement(a.Provider, {
                    value: c
                }, r.createElement(n.Provider, {
                    value: s
                }, e.children))
            }
            let l = !1;

            function c(e) {
                return "function" == typeof r.useId ? (l || (console.warn("In React 18, SSRProvider is not necessary and is a noop. You can remove it from your app."), l = !0), r.createElement(r.Fragment, null, e.children)) : r.createElement(s, e)
            }
            Boolean("undefined" != typeof window && window.document && window.document.createElement);
            let d = new WeakMap;
            r.useId
        },
        4235: (e, o, i) => {
            "use strict";
            i.d(o, {
                T: () => r,
                m: () => t
            });
            const r = e => {
                    var o;
                    return null !== (o = null == e ? void 0 : e.ownerDocument) && void 0 !== o ? o : document
                },
                t = e => e && "window" in e && e.window === e ? e : r(e).defaultView || window
        },
        7425: (e, o, i) => {
            "use strict";

            function r(e) {
                if (function() {
                        if (null == t) {
                            t = !1;
                            try {
                                document.createElement("div").focus({
                                    get preventScroll() {
                                        return t = !0, !0
                                    }
                                })
                            } catch (e) {}
                        }
                        return t
                    }()) e.focus({
                    preventScroll: !0
                });
                else {
                    let o = function(e) {
                        let o = e.parentNode,
                            i = [],
                            r = document.scrollingElement || document.documentElement;
                        for (; o instanceof HTMLElement && o !== r;)(o.offsetHeight < o.scrollHeight || o.offsetWidth < o.scrollWidth) && i.push({
                            element: o,
                            scrollTop: o.scrollTop,
                            scrollLeft: o.scrollLeft
                        }), o = o.parentNode;
                        return r instanceof HTMLElement && i.push({
                            element: r,
                            scrollTop: r.scrollTop,
                            scrollLeft: r.scrollLeft
                        }), i
                    }(e);
                    e.focus(),
                        function(e) {
                            for (let {
                                    element: o,
                                    scrollTop: i,
                                    scrollLeft: r
                                } of e) o.scrollTop = i, o.scrollLeft = r
                        }(o)
                }
            }
            i.d(o, {
                e: () => r
            });
            let t = null
        },
        2401: (e, o, i) => {
            "use strict";

            function r() {
                return e = /^Mac/i, "undefined" != typeof window && null != window.navigator && e.test((null === (o = window.navigator.userAgentData) || void 0 === o ? void 0 : o.platform) || window.navigator.platform);
                var e, o
            }

            function t() {
                return e = /Android/i, "undefined" != typeof window && null != window.navigator && ((null === (o = window.navigator.userAgentData) || void 0 === o ? void 0 : o.brands.some((o => e.test(o.brand)))) || e.test(window.navigator.userAgent));
                var e, o
            }
            i.d(o, {
                cX: () => r,
                m0: () => t
            })
        },
        7318: (e, o, i) => {
            "use strict";
            i.d(o, {
                v: () => n
            });
            let r = new Map,
                t = new Set;

            function a() {
                if ("undefined" == typeof window) return;

                function e(e) {
                    return "propertyName" in e
                }
                let o = i => {
                    if (!e(i) || !i.target) return;
                    let a = r.get(i.target);
                    if (a && (a.delete(i.propertyName), 0 === a.size && (i.target.removeEventListener("transitioncancel", o), r.delete(i.target)), 0 === r.size)) {
                        for (let e of t) e();
                        t.clear()
                    }
                };
                document.body.addEventListener("transitionrun", (i => {
                    if (!e(i) || !i.target) return;
                    let t = r.get(i.target);
                    t || (t = new Set, r.set(i.target, t), i.target.addEventListener("transitioncancel", o, {
                        once: !0
                    })), t.add(i.propertyName)
                })), document.body.addEventListener("transitionend", o)
            }

            function n(e) {
                requestAnimationFrame((() => {
                    0 === r.size ? e() : t.add(e)
                }))
            }
            "undefined" != typeof document && ("loading" !== document.readyState ? a() : document.addEventListener("DOMContentLoaded", a))
        },
        430: (e, o, i) => {
            "use strict";
            if (i.d(o, {
                    J: () => a
                }), 818 != i.j) var r = i(7428);
            var t = i(1594);

            function a(e) {
                const o = (0, t.useRef)(null);
                return (0, r.N)((() => {
                    o.current = e
                }), [e]), (0, t.useCallback)(((...e) => {
                    const i = o.current;
                    return null == i ? void 0 : i(...e)
                }), [])
            }
        },
        7428: (e, o, i) => {
            "use strict";
            i.d(o, {
                N: () => t
            });
            var r = i(1594);
            const t = "undefined" != typeof document ? r.useLayoutEffect : () => {}
        },
        4357: (e, o, i) => {
            "use strict";

            function r(e) {
                var o, i, t = "";
                if ("string" == typeof e || "number" == typeof e) t += e;
                else if ("object" == typeof e)
                    if (Array.isArray(e)) {
                        var a = e.length;
                        for (o = 0; o < a; o++) e[o] && (i = r(e[o])) && (t && (t += " "), t += i)
                    } else
                        for (i in e) e[i] && (t && (t += " "), t += i);
                return t
            }
            i.d(o, {
                A: () => t
            });
            const t = 818 != i.j ? function() {
                for (var e, o, i = 0, t = "", a = arguments.length; i < a; i++)(e = arguments[i]) && (o = r(e)) && (t && (t += " "), t += o);
                return t
            } : null
        },
        3478: (e, o, i) => {
            "use strict";

            function r(e) {
                for (var o = 1; o < arguments.length; o++) {
                    var i = arguments[o];
                    for (var r in i) e[r] = i[r]
                }
                return e
            }
            i.d(o, {
                A: () => t
            });
            var t = function e(o, i) {
                function t(e, t, a) {
                    if ("undefined" != typeof document) {
                        "number" == typeof(a = r({}, i, a)).expires && (a.expires = new Date(Date.now() + 864e5 * a.expires)), a.expires && (a.expires = a.expires.toUTCString()), e = encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape);
                        var n = "";
                        for (var s in a) a[s] && (n += "; " + s, !0 !== a[s] && (n += "=" + a[s].split(";")[0]));
                        return document.cookie = e + "=" + o.write(t, e) + n
                    }
                }
                return Object.create({
                    set: t,
                    get: function(e) {
                        if ("undefined" != typeof document && (!arguments.length || e)) {
                            for (var i = document.cookie ? document.cookie.split("; ") : [], r = {}, t = 0; t < i.length; t++) {
                                var a = i[t].split("="),
                                    n = a.slice(1).join("=");
                                try {
                                    var s = decodeURIComponent(a[0]);
                                    if (r[s] = o.read(n, s), e === s) break
                                } catch (e) {}
                            }
                            return e ? r[e] : r
                        }
                    },
                    remove: function(e, o) {
                        t(e, "", r({}, o, {
                            expires: -1
                        }))
                    },
                    withAttributes: function(o) {
                        return e(this.converter, r({}, this.attributes, o))
                    },
                    withConverter: function(o) {
                        return e(r({}, this.converter, o), this.attributes)
                    }
                }, {
                    attributes: {
                        value: Object.freeze(i)
                    },
                    converter: {
                        value: Object.freeze(o)
                    }
                })
            }({
                read: function(e) {
                    return '"' === e[0] && (e = e.slice(1, -1)), e.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent)
                },
                write: function(e) {
                    return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g, decodeURIComponent)
                }
            }, {
                path: "/"
            })
        }
    }
]);