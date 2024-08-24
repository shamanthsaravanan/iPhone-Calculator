/* Nike -- marketing-automation.custom.javascript -- 1.2.0 */
(() => {
    "use strict";
    var e = {
            734: (e, n, t) => {
                t.d(n, {
                    Z: () => c
                });
                var i = t(81),
                    o = t.n(i),
                    r = t(645),
                    a = t.n(r)()(o());
                a.push([e.id, ".at-cjs-debug-modal {\n  font: var(--podium-cds-typography-body1);\n  color: #111111;\n  background: #cccccc;\n  display: block;\n  align-content: center;\n  justify-content: center;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 1000;\n  padding: 5px;\n  border: 3px solid black;\n  border-radius: 5px;\n}\n.at-cjs-debug-modal-table {\n  font: var(--podium-cds-typography-body1-strong);\n  color: #111111;\n  display: table;\n  border-collapse: collapse;\n  border: 3px solid black;\n  border-spacing: 0;\n  width: 100%;\n}\n.at-cjs-debug-modal-table-header {\n  font: var(--podium-cds-typography-body1-strong);\n  vertical-align: bottom;\n  padding: 10px;\n  border: inherit;\n  background-color: #11aacc;\n}\n.at-cjs-debug-modal-table-row {\n  font: var(--podium-cds-typography-body1-strong);\n  color: #111111;\n  border: 2px solid black;\n  border-radius: 5px;\n  padding: 10px;\n  align-items: center;\n  justify-content: center;\n  align-content: center;\n  background-color: #f5f5f5;\n}\n\n.at-cjs-debug-modal-table-data {\n  font: var(--podium-cds-typography-body1-strong);\n  color: #111111;\n  border: inherit;\n  padding: 10px;\n}\n.at-cjs-debug-modal-button {\n  font: var(--podium-cds-typography-body1-strong);\n  padding: 0px 5px;\n  background-color: #fa5400;\n  border: 3px solid black;\n  border-radius: 5px;\n}\n#fake-modal {\n  display: 'block';\n  align-content: 'center';\n  justify-content: 'center';\n  position: 'absolute';\n  top: '50%';\n  left: '50%';\n  transform: 'translate(-50%, -50%)';\n  z-index: '1000';\n  padding: '5px';\n  border: '3px solid black';\n  border-radius: '5px';\n}\n", ""]);
                const c = a
            },
            645: e => {
                e.exports = function(e) {
                    var n = [];
                    return n.toString = function() {
                        return this.map((function(n) {
                            var t = "",
                                i = void 0 !== n[5];
                            return n[4] && (t += "@supports (".concat(n[4], ") {")), n[2] && (t += "@media ".concat(n[2], " {")), i && (t += "@layer".concat(n[5].length > 0 ? " ".concat(n[5]) : "", " {")), t += e(n), i && (t += "}"), n[2] && (t += "}"), n[4] && (t += "}"), t
                        })).join("")
                    }, n.i = function(e, t, i, o, r) {
                        "string" == typeof e && (e = [
                            [null, e, void 0]
                        ]);
                        var a = {};
                        if (i)
                            for (var c = 0; c < this.length; c++) {
                                var s = this[c][0];
                                null != s && (a[s] = !0)
                            }
                        for (var l = 0; l < e.length; l++) {
                            var d = [].concat(e[l]);
                            i && a[d[0]] || (void 0 !== r && (void 0 === d[5] || (d[1] = "@layer".concat(d[5].length > 0 ? " ".concat(d[5]) : "", " {").concat(d[1], "}")), d[5] = r), t && (d[2] ? (d[1] = "@media ".concat(d[2], " {").concat(d[1], "}"), d[2] = t) : d[2] = t), o && (d[4] ? (d[1] = "@supports (".concat(d[4], ") {").concat(d[1], "}"), d[4] = o) : d[4] = "".concat(o)), n.push(d))
                        }
                    }, n
                }
            },
            81: e => {
                e.exports = function(e) {
                    return e[1]
                }
            },
            379: e => {
                var n = [];

                function t(e) {
                    for (var t = -1, i = 0; i < n.length; i++)
                        if (n[i].identifier === e) {
                            t = i;
                            break
                        }
                    return t
                }

                function i(e, i) {
                    for (var r = {}, a = [], c = 0; c < e.length; c++) {
                        var s = e[c],
                            l = i.base ? s[0] + i.base : s[0],
                            d = r[l] || 0,
                            u = "".concat(l, " ").concat(d);
                        r[l] = d + 1;
                        var p = t(u),
                            f = {
                                css: s[1],
                                media: s[2],
                                sourceMap: s[3],
                                supports: s[4],
                                layer: s[5]
                            };
                        if (-1 !== p) n[p].references++, n[p].updater(f);
                        else {
                            var h = o(f, i);
                            i.byIndex = c, n.splice(c, 0, {
                                identifier: u,
                                updater: h,
                                references: 1
                            })
                        }
                        a.push(u)
                    }
                    return a
                }

                function o(e, n) {
                    var t = n.domAPI(n);
                    t.update(e);
                    return function(n) {
                        if (n) {
                            if (n.css === e.css && n.media === e.media && n.sourceMap === e.sourceMap && n.supports === e.supports && n.layer === e.layer) return;
                            t.update(e = n)
                        } else t.remove()
                    }
                }
                e.exports = function(e, o) {
                    var r = i(e = e || [], o = o || {});
                    return function(e) {
                        e = e || [];
                        for (var a = 0; a < r.length; a++) {
                            var c = t(r[a]);
                            n[c].references--
                        }
                        for (var s = i(e, o), l = 0; l < r.length; l++) {
                            var d = t(r[l]);
                            0 === n[d].references && (n[d].updater(), n.splice(d, 1))
                        }
                        r = s
                    }
                }
            },
            569: e => {
                var n = {};
                e.exports = function(e, t) {
                    var i = function(e) {
                        if (void 0 === n[e]) {
                            var t = document.querySelector(e);
                            if (window.HTMLIFrameElement && t instanceof window.HTMLIFrameElement) try {
                                t = t.contentDocument.head
                            } catch (e) {
                                t = null
                            }
                            n[e] = t
                        }
                        return n[e]
                    }(e);
                    if (!i) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
                    i.appendChild(t)
                }
            },
            216: e => {
                e.exports = function(e) {
                    var n = document.createElement("style");
                    return e.setAttributes(n, e.attributes), e.insert(n, e.options), n
                }
            },
            565: (e, n, t) => {
                e.exports = function(e) {
                    var n = t.nc;
                    n && e.setAttribute("nonce", n)
                }
            },
            795: e => {
                e.exports = function(e) {
                    if ("undefined" == typeof document) return {
                        update: function() {},
                        remove: function() {}
                    };
                    var n = e.insertStyleElement(e);
                    return {
                        update: function(t) {
                            ! function(e, n, t) {
                                var i = "";
                                t.supports && (i += "@supports (".concat(t.supports, ") {")), t.media && (i += "@media ".concat(t.media, " {"));
                                var o = void 0 !== t.layer;
                                o && (i += "@layer".concat(t.layer.length > 0 ? " ".concat(t.layer) : "", " {")), i += t.css, o && (i += "}"), t.media && (i += "}"), t.supports && (i += "}");
                                var r = t.sourceMap;
                                r && "undefined" != typeof btoa && (i += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r)))), " */")), n.styleTagTransform(i, e, n.options)
                            }(n, e, t)
                        },
                        remove: function() {
                            ! function(e) {
                                if (null === e.parentNode) return !1;
                                e.parentNode.removeChild(e)
                            }(n)
                        }
                    }
                }
            },
            589: e => {
                e.exports = function(e, n) {
                    if (n.styleSheet) n.styleSheet.cssText = e;
                    else {
                        for (; n.firstChild;) n.removeChild(n.firstChild);
                        n.appendChild(document.createTextNode(e))
                    }
                }
            }
        },
        n = {};

    function t(i) {
        var o = n[i];
        if (void 0 !== o) return o.exports;
        var r = n[i] = {
            id: i,
            exports: {}
        };
        return e[i](r, r.exports, t), r.exports
    }
    t.n = e => {
        var n = e && e.__esModule ? () => e.default : () => e;
        return t.d(n, {
            a: n
        }), n
    }, t.d = (e, n) => {
        for (var i in n) t.o(n, i) && !t.o(e, i) && Object.defineProperty(e, i, {
            enumerable: !0,
            get: n[i]
        })
    }, t.g = function() {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || new Function("return this")()
        } catch (e) {
            if ("object" == typeof window) return window
        }
    }(), t.o = (e, n) => Object.prototype.hasOwnProperty.call(e, n), t.nc = void 0, (() => {
        var e, n;
        ! function(e) {
            e.OfferValidation = "offer validation", e.Finalization = "finalization", e.Run = "run", e.ActivationControl = "activation control", e.AnalyticClientMissing = "analytics client is missing expected method isInitialized", e.AnalyticsClientNotInitialized = "analytics client is not initialized", e.ABTNikedotcomUnavailable = "abt.nike.com unavailable"
        }(e || (e = {})),
        function(e) {
            e.ExperimentationNotAllowed = "experimentation not allowed", e.AppContextNotAvailable = "appContext not available", e.InitializationFailed = "initialization failed"
        }(n || (n = {}));
        class i extends t.g.Error {
            constructor(e, n) {
                super(`experiment failed ${e}: ${k(n)}`)
            }
        }
        class o extends t.g.Error {
            constructor(e, n) {
                super(`Experiment Data Failuere: ${e}: ${k(n)}`)
            }
        }
        t.g.Error;
        class r extends t.g.Error {
            constructor(e) {
                super(`service unavailable: ${e}`)
            }
        }
        class a extends t.g.Error {
            constructor(e) {
                super(`experiment failed: element not found ${e.selector}`), this.analytics = e.analytics
            }
        }
        class c extends t.g.Error {
            constructor(e) {
                super(`element not found: ${e}`)
            }
        }
        class s extends t.g.Error {
            constructor(e, n) {
                super(`experiment failed during ${e}: ${k(n)}`)
            }
        }
        class l extends t.g.Error {
            constructor(e) {
                super(`experiment failed: ${e}`)
            }
        }
        var d = function(e, n, t, i) {
            return new(t || (t = Promise))((function(o, r) {
                function a(e) {
                    try {
                        s(i.next(e))
                    } catch (e) {
                        r(e)
                    }
                }

                function c(e) {
                    try {
                        s(i.throw(e))
                    } catch (e) {
                        r(e)
                    }
                }

                function s(e) {
                    var n;
                    e.done ? o(e.value) : (n = e.value, n instanceof t ? n : new t((function(e) {
                        e(n)
                    }))).then(a, c)
                }
                s((i = i.apply(e, n || [])).next())
            }))
        };

        function u(e, n = document) {
            return d(this, void 0, void 0, (function*() {
                return m.runAsync((() => n.querySelector(e)))
            }))
        }

        function p(e) {
            const n = document.createElement("template");
            n.innerHTML = e;
            const t = n.content.firstElementChild;
            if (!t) throw new Error("invalid HTML string provided when converting HTML to element");
            return t
        }

        function f(e) {
            if ("string" == typeof e) {
                const n = document.querySelector(e);
                if (!n) throw new Error(`Failed to attach CJS ID: '${e}' was not found`);
                return n
            }
            return e
        }

        function h(e, n = document) {
            return d(this, void 0, void 0, (function*() {
                const t = (e, t) => d(this, void 0, void 0, (function*() {
                        const i = yield u(t, n);
                        if (!i) throw new c(t);
                        return {
                            key: e,
                            el: i
                        }
                    })),
                    i = (e, t) => d(this, void 0, void 0, (function*() {
                        const i = yield function(e, n = document) {
                            return d(this, void 0, void 0, (function*() {
                                return m.runAsync((() => Array.from(n.querySelectorAll(e))))
                            }))
                        }(t, n);
                        if (!i || 0 === i.length) throw new c(t);
                        return {
                            key: e,
                            el: i
                        }
                    })),
                    o = {};
                return (yield Promise.all(Object.entries(e).map((([e, n]) => d(this, void 0, void 0, (function*() {
                    return Array.isArray(n) ? i(e, n[0]) : t(e, n)
                })))))).forEach((e => {
                    o[e.key] = e.el
                })), o
            }))
        }

        function v(e) {
            return Object.entries(e).map((([e, n]) => `${e}: ${n}`)).join("; ")
        }
        var _, g = function(e, n, t, i) {
            return new(t || (t = Promise))((function(o, r) {
                function a(e) {
                    try {
                        s(i.next(e))
                    } catch (e) {
                        r(e)
                    }
                }

                function c(e) {
                    try {
                        s(i.throw(e))
                    } catch (e) {
                        r(e)
                    }
                }

                function s(e) {
                    var n;
                    e.done ? o(e.value) : (n = e.value, n instanceof t ? n : new t((function(e) {
                        e(n)
                    }))).then(a, c)
                }
                s((i = i.apply(e, n || [])).next())
            }))
        };
        ! function(e) {
            e[e.CONTINUE = 0] = "CONTINUE", e[e.STOP = 1] = "STOP"
        }(_ || (_ = {}));
        class m {
            constructor() {
                this.maxAttempts = 10, this.interval = 50, this.exponentRate = 1.5
            }
            static run(e) {
                const n = Object.assign(new m, e),
                    {
                        onTick: t,
                        onError: i,
                        onTimeout: o,
                        interval: r,
                        exponentRate: a,
                        maxAttempts: c
                    } = n,
                    s = (e = 0) => {
                        if ((e => {
                                try {
                                    return t(e)
                                } catch (e) {
                                    return i(e instanceof Error ? e : new Error("Unknown error occurred", {
                                        cause: e
                                    })), _.STOP
                                }
                            })(e) === _.STOP) return;
                        if (e + 1 >= c) return void o();
                        const n = r * Math.pow(e + 1, a);
                        setTimeout((() => {
                            s(e + 1)
                        }), n)
                    };
                return s(), n
            }
            static runAsync(e) {
                return new Promise(((n, t) => {
                    m.run({
                        onTick: () => {
                            const t = e();
                            return t ? (n(t), _.STOP) : _.CONTINUE
                        },
                        onError: t,
                        onTimeout: () => {
                            n(null)
                        }
                    })
                }))
            }
        }

        function b(e = 0) {
            return g(this, void 0, void 0, (function*() {
                return new Promise((n => setTimeout(n, e)))
            }))
        }

        function w() {
            try {
                return window.location.search.includes("at_cjs_version")
            } catch (e) {
                return !1
            }
        }
        const y = {
            info: (...e) => {
                w() && console.info(...e)
            },
            debug: (...e) => {
                w() && console.debug(...e)
            },
            warn: (...e) => {
                w() && console.warn(...e)
            },
            error: (...e) => {
                w() && console.error(...e)
            },
            log: (...e) => {
                w() && console.log(...e)
            }
        };

        function k(e) {
            return null == e ? "Unknown error" : e instanceof Error ? e.message : String(e)
        }
        const x = e => (e.map = n => x((t => n(e(t)))), e.or = n => x((t => {
                try {
                    return e(t)
                } catch (e) {
                    return n(t)
                }
            })), e),
            C = () => "bad banditype" (),
            E = e => x((n => typeof n == typeof e ? n : C())),
            A = () => E(""),
            T = () => E(0),
            L = () => E(C),
            j = () => E(),
            N = e => x((n => n instanceof e ? n : C())),
            I = e => N(Object).map((n => {
                const t = {};
                for (const i in e) {
                    const o = e[i](n[i]);
                    void 0 !== o && (t[i] = o)
                }
                return t
            })),
            S = e => N(Object).map((n => {
                const t = { ...n
                };
                for (const i in e) {
                    const o = e[i](n[i]);
                    void 0 !== o && (t[i] = o)
                }
                return t
            }));

        function O() {
            return A().map((e => e.trim())).map((e => e.length > 0 ? e : C()))
        }

        function P() {
            return A().map((e => e.trim())).map((e => e.length > 0 ? e : C())).or(j())
        }
        var R = function(e, n, t, i) {
            return new(t || (t = Promise))((function(o, r) {
                function a(e) {
                    try {
                        s(i.next(e))
                    } catch (e) {
                        r(e)
                    }
                }

                function c(e) {
                    try {
                        s(i.throw(e))
                    } catch (e) {
                        r(e)
                    }
                }

                function s(e) {
                    var n;
                    e.done ? o(e.value) : (n = e.value, n instanceof t ? n : new t((function(e) {
                        e(n)
                    }))).then(a, c)
                }
                s((i = i.apply(e, n || [])).next())
            }))
        };
        class $ {
            constructor(e, n, t, i, o, r = new Map) {
                this.appContext = e, this.urlWatcher = n, this.activeConfig = t, this.activeExperiment = i, this.reporter = o, this.experimentToAttributeID = r
            }
            user() {
                return this.appContext.user
            }
            app() {
                return this.appContext.app
            }
            browser() {
                return this.appContext.browser
            }
            experimentConfig() {
                return this.activeConfig
            }
            experiment() {
                return this.activeExperiment
            }
            addUrlListener(e, n) {
                this.urlWatcher.addListener(e, n)
            }
            attachIdToElement(e, n) {
                var t;
                const i = null != n ? n : this.activeConfig.id,
                    o = f(e),
                    r = null !== (t = this.experimentToAttributeID.get(i)) && void 0 !== t ? t : 0;
                this.experimentToAttributeID.set(i, r + 1), o.setAttribute("data-at_cjs_id", `${i}-${r}`)
            }
            addAnalyticsClickListener(e, n = {}) {
                var t;
                const i = f(e),
                    o = null !== (t = n.title) && void 0 !== t ? t : "experiment-cta-clicked";
                i.addEventListener("click", (() => {
                    this.reporter.experimentCtaClicked(o, n.clickActivity)
                }))
            }
            finalizeExperiment(e) {
                var n, t;
                return R(this, void 0, void 0, (function*() {
                    for (const t of null !== (n = e.idElements) && void 0 !== n ? n : []) this.attachIdToElement(t);
                    for (const n of null !== (t = e.clickElements) && void 0 !== t ? t : []) this.addAnalyticsClickListener(n);
                    const i = this.activeConfig.offer;
                    if (i.analyticsClickEventSelector) {
                        const e = yield u(i.analyticsClickEventSelector);
                        e && this.addAnalyticsClickListener(e, {
                            title: "AT_CJS_EXPERIMENT_CLICKED",
                            clickActivity: i.analyticsClickEventSelector
                        })
                    }
                }))
            }
        }

        function D(e, n) {
            return e && e.length > 0 ? e : n
        }
        const z = e => {
                var n, t, i, o, r, a, c, s, l, d;
                const {
                    href: u
                } = e.location;
                let [, p] = null !== (n = Object.entries({
                    "/t/": "pdp",
                    "/t-dark/": "pdp",
                    "/u-dark/": "pdp",
                    "/u/": "pdp",
                    "/w/": "pw",
                    "/w-dark/": "pw",
                    "/cart": "cart",
                    "/checkout": "checkout"
                }).find((([e]) => u.includes(e)))) && void 0 !== n ? n : [];
                return p || (p = null === (r = null === (o = null === (i = null === (t = e.__NEXT_DATA__) || void 0 === t ? void 0 : t.props) || void 0 === i ? void 0 : i.pageProps) || void 0 === o ? void 0 : o.navConfig) || void 0 === r ? void 0 : r.analyticsPageType), "pw" === p && (null === (d = null === (l = null === (s = null === (c = null === (a = e.__NEXT_DATA__) || void 0 === a ? void 0 : a.props) || void 0 === c ? void 0 : c.pageProps) || void 0 === s ? void 0 : s.initialState) || void 0 === l ? void 0 : l.Wall) || void 0 === d ? void 0 : d.searchTerm) && (p = "onsite search"), p
            },
            M = e => {
                let n;
                switch (e) {
                    case "pdp":
                    case "homepage":
                    case "landing page":
                    case "cart":
                    case "onsite search":
                    case "checkout":
                        n = e;
                        break;
                    case "pw":
                        n = "product wall"
                }
                return n
            },
            U = (e, n, t) => {
                var i, o, r, a, c, s, l, d, u, p, f, h, v, _, g, m;
                const b = null === (c = null === (a = null === (r = null === (o = null === (i = e.__NEXT_DATA__) || void 0 === i ? void 0 : i.props) || void 0 === o ? void 0 : o.pageProps) || void 0 === r ? void 0 : r.initialState) || void 0 === a ? void 0 : a.Wall) || void 0 === c ? void 0 : c.products,
                    w = b && b.length > 0,
                    y = null === (u = null === (d = null === (l = null === (s = e.__NEXT_DATA__) || void 0 === s ? void 0 : s.props) || void 0 === l ? void 0 : l.pageProps) || void 0 === d ? void 0 : d.navConfig) || void 0 === u ? void 0 : u.pageDetail.toLowerCase();
                if ("pdp" === n) {
                    if (null == t ? void 0 : t.includes("-")) {
                        return t.substring(0, t.lastIndexOf("-")).replace(/-/g, " ").toLowerCase()
                    }
                    return "no page title"
                }
                return "homepage" === n ? D(y, "no page title") : "landing page" === n ? void 0 !== y && "" !== y ? `${y}:land` : "no page title" : "onsite search" === n ? w ? "results found" : "no search results" : w ? D(null === (m = null === (g = null === (_ = null === (v = null === (h = null === (f = null === (p = e.__NEXT_DATA__) || void 0 === p ? void 0 : p.props) || void 0 === f ? void 0 : f.pageProps) || void 0 === h ? void 0 : h.initialState) || void 0 === v ? void 0 : v.Wall) || void 0 === _ ? void 0 : _.facetNav) || void 0 === g ? void 0 : g.analytics) || void 0 === m ? void 0 : m.legacyPageName.toLowerCase(), "no page title") : "page not found"
            },
            B = e => {
                var n, t, i, o, r;
                const a = z(e),
                    c = ((e, n) => {
                        var t, i;
                        let o, r;
                        switch (n) {
                            case "pdp":
                                r = U(e, n, null === (i = null === (t = e.__NEXT_DATA__) || void 0 === t ? void 0 : t.query) || void 0 === i ? void 0 : i.slug), o = r.toLowerCase();
                                break;
                            case "pw":
                            case "onsite search":
                                r = U(e, n), o = `${n}>${r}`.toLowerCase();
                                break;
                            case "homepage":
                            case "landing page":
                                o = U(e, n);
                                break;
                            case "cart":
                                o = "cart>view";
                                break;
                            case "checkout":
                                o = "checkout>checkout"
                        }
                        return o
                    })(e, a),
                    s = U(e, a, null === (t = null === (n = e.__NEXT_DATA__) || void 0 === n ? void 0 : n.query) || void 0 === t ? void 0 : t.slug),
                    l = M(a),
                    d = null === (i = e.webShellClient) || void 0 === i ? void 0 : i.locale.get().currency,
                    u = (e => Object.assign({
                        domain: "www.nike.com",
                        backendPlatform: "cloud"
                    }, e && {
                        name: e
                    }))(l),
                    p = ((e, n, t) => Object.assign(Object.assign(Object.assign({
                        experienceType: "nikecom"
                    }, e && {
                        pageName: `nikecom>${e}`
                    }), e && {
                        pageDetail: null != t ? t : e
                    }), n && {
                        pageType: n
                    }))(c, a, s),
                    f = (e => ({
                        language: D(null == e ? void 0 : e.language, "en"),
                        country: D(null == e ? void 0 : e.country, "us")
                    }))(null === (o = e.webShellClient) || void 0 === o ? void 0 : o.locale.get());
                return Object.assign(Object.assign({
                    app: u,
                    view: p
                }, d && {
                    currency: d
                }), {
                    language: D(null === (r = e.webShellClient) || void 0 === r ? void 0 : r.locale.get().langRegion, "en_US"),
                    locale: f
                })
            };
        var H = function(e, n, t, i) {
            return new(t || (t = Promise))((function(o, r) {
                function a(e) {
                    try {
                        s(i.next(e))
                    } catch (e) {
                        r(e)
                    }
                }

                function c(e) {
                    try {
                        s(i.throw(e))
                    } catch (e) {
                        r(e)
                    }
                }

                function s(e) {
                    var n;
                    e.done ? o(e.value) : (n = e.value, n instanceof t ? n : new t((function(e) {
                        e(n)
                    }))).then(a, c)
                }
                s((i = i.apply(e, n || [])).next())
            }))
        };

        function F(e) {
            return H(this, void 0, void 0, (function*() {
                const t = yield m.runAsync((() => e.locale.get()));
                if (!t) throw new i(n.AppContextNotAvailable, "locale is missing");
                if (!t.language || !t.country) throw new i(n.AppContextNotAvailable, "locale is incomplete");
                return t
            }))
        }

        function W() {
            return H(this, void 0, void 0, (function*() {
                yield m.runAsync((() => window.__NEXT_DATA__));
                const e = z(window),
                    t = M(e);
                if (t) return t;
                throw new i(n.AppContextNotAvailable, "could not determine appName")
            }))
        }

        function J(e, t, o) {
            return H(this, void 0, void 0, (function*() {
                const r = o.allowedCountries.map((e => e.toLowerCase()));
                if (!o.allowedLanguages.map((e => e.toLowerCase())).includes(e.app.appLanguage.toLowerCase()) || !r.includes(e.app.appCountry.toLowerCase())) return !1;
                const a = yield function() {
                    return H(this, void 0, void 0, (function*() {
                        return m.runAsync((() => window.analyticsClient))
                    }))
                }(), c = yield t.identity.getIsSwooshUser();
                if (a && !c) {
                    let e;
                    try {
                        e = yield a.isInitialized()
                    } catch (e) {
                        throw new i(n.AppContextNotAvailable, e)
                    }
                    if (!e) throw new i(n.AppContextNotAvailable);
                    return function(e) {
                        var n;
                        const t = null === (n = window.NikePrivacy) || void 0 === n ? void 0 : n.permissions.get();
                        if (t) {
                            const n = t.flatMap((({
                                category: e,
                                isEnabled: n
                            }) => n ? [e.toLocaleLowerCase()] : []));
                            return e.requiredPermissions.map((e => e.toLowerCase())).every((e => n.includes(e)))
                        }
                        return !1
                    }(o)
                }
                return !1
            }))
        }
        var V = function(e, n, t, i) {
            return new(t || (t = Promise))((function(o, r) {
                function a(e) {
                    try {
                        s(i.next(e))
                    } catch (e) {
                        r(e)
                    }
                }

                function c(e) {
                    try {
                        s(i.throw(e))
                    } catch (e) {
                        r(e)
                    }
                }

                function s(e) {
                    var n;
                    e.done ? o(e.value) : (n = e.value, n instanceof t ? n : new t((function(e) {
                        e(n)
                    }))).then(a, c)
                }
                s((i = i.apply(e, n || [])).next())
            }))
        };
        const X = (e, n) => {
            y.log(e, n)
        };
        class Z {
            constructor(e, n, t) {
                this.pkgVersion = t, this.newRelic = (n, i) => {
                    e(n, Object.assign({
                        at_cjs_version: t
                    }, i))
                }, this.adobeAnalytics = (e, i) => {
                    const o = B(window);
                    o.app.version = t, n(e, Object.assign(Object.assign({}, o), i))
                }
            }
            static buildReporter(e) {
                var n;
                return V(this, void 0, void 0, (function*() {
                    const t = yield m.runAsync((() => {
                        var e;
                        return (null === (e = window.webShellClient) || void 0 === e ? void 0 : e.analytics.track) ? {
                            newRelic: window.newrelic.addPageAction,
                            adobe: (e, n) => {
                                var t;
                                null === (t = window.webShellClient) || void 0 === t || t.analytics.track(e, null != n ? n : {}, {
                                    writeKey: "2iv4Qa7rFEipAs4iE850BkBpTYQvlAFZ"
                                })
                            }
                        } : null
                    }));
                    return (null == t ? void 0 : t.adobe) ? new Z(null !== (n = t.newRelic) && void 0 !== n ? n : X, t.adobe, e) : null
                }))
            }
            getReporterParams() {
                return [this.newRelic, this.adobeAnalytics, this.pkgVersion]
            }
            targetSDKError(e) {
                this.log(`failed to call Target via the at.js SDK: ${e}`, "error", "AT_CJS_TARGET_SDK_ERROR")
            }
            log(e, n, t = "AT_CJS_LOG") {
                const i = {
                    logMessage: e,
                    logLevel: n
                };
                this.newRelic(t, i), y[n](`WEBJS: ${e}`, t)
            }
            failureError(e) {
                this.log(e, "error", "AT_CJS_FAILURE")
            }
            uncaughtError(e, n) {
                this.log(`message: ${e}, stack: ${n}`, "error", "AT_CJS_UNCAUGHT_ERROR")
            }
            sendFromError(e) {
                if (y.error(String(e)), e instanceof Error) switch (!0) {
                    case e instanceof l:
                        this.log(e.message, "warn", "AT_CJS_LOG");
                        break;
                    case e instanceof i:
                        this.log(e.message, "error", "AT_CJS_INITIALIZATION_ERROR");
                        break;
                    case e instanceof a:
                    case e instanceof s:
                    case e instanceof c:
                        this.failureError(e.message);
                        break;
                    default:
                        this.uncaughtError(e.message || "uncaught error", e.stack)
                } else this.failureError(`Unrecognized Error: ${k(e)}`)
            }
        }
        class q extends Z {
            constructor(e, n) {
                super(...e.getReporterParams()), this.config = n;
                const t = this.adobeAnalytics;
                this.adobeAnalytics = (e, i) => {
                    t(e, Object.assign({
                        "experience.name": n.experienceName,
                        "activity.name": n.activityName,
                        abTest: {
                            analytics: n.tntaId
                        }
                    }, i))
                };
                const i = this.newRelic;
                this.newRelic = (e, t) => {
                    i(e, Object.assign({
                        "experience.name": n.experienceName,
                        "activity.name": n.activityName
                    }, t))
                }
            }
            experimentActivated() {
                this.newRelic("AT_CJS_EXPERIMENT_ACTIVATED"), this.config.activatedCallback(), y.log("Experiment Activated")
            }
            experimentCtaClicked(e, n) {
                this.log(`message: ${e}, clickActivity: ${n}`, "info", "AT_CJS_EXPERIMENT_CTA_CLICKED"), this.adobeAnalytics("Experiment CTA Clicked", {
                    clickActivity: n
                })
            }
        }
        class K {
            constructor(e, n) {
                this.cb = e, this.options = n
            }
            shouldUpdate(e) {
                const n = new window.URL(e);
                let t = !0;
                return this.options.onlyIfPathIncludes && this.options.onlyIfPathIncludes.length > 0 && (t = this.options.onlyIfPathIncludes.some((e => e.test(n.pathname)))), this.options.onlyIfPathDoesntInclude && this.options.onlyIfPathDoesntInclude.length > 0 && (t = !this.options.onlyIfPathDoesntInclude.some((e => e.test(n.pathname)))), t
            }
            update(e) {
                this.shouldUpdate(e) && this.cb(e)
            }
        }
        class G {
            constructor() {
                this.listeners = [], this.currentHref = window.location.href
            }
            updateListeners() {
                for (const e of this.listeners) e.update(this.currentHref)
            }
            reset() {
                this.interval && clearInterval(this.interval), this.listeners = []
            }
            addListener(e, n = {}) {
                const t = new K(e, n);
                n.immediate && t.update(this.currentHref), this.listeners.push(t), this.startListening()
            }
            startListening() {
                this.listeners.length > 0 && (this.interval = setInterval((() => {
                    window.location.href != this.currentHref && (this.currentHref = window.location.href, this.updateListeners())
                }), 1))
            }
        }
        class Q {
            constructor(e) {
                this.appContext = e
            }
            build(e, n) {
                return new $(this.appContext, new G, n, e, new q(this.appContext.reporter, n))
            }
        }
        var Y = function(e, n, t, i) {
            return new(t || (t = Promise))((function(o, r) {
                function a(e) {
                    try {
                        s(i.next(e))
                    } catch (e) {
                        r(e)
                    }
                }

                function c(e) {
                    try {
                        s(i.throw(e))
                    } catch (e) {
                        r(e)
                    }
                }

                function s(e) {
                    var n;
                    e.done ? o(e.value) : (n = e.value, n instanceof t ? n : new t((function(e) {
                        e(n)
                    }))).then(a, c)
                }
                s((i = i.apply(e, n || [])).next())
            }))
        };
        const ee = I({
            observeSelector: P()
        });
        class ne {
            mboxes() {
                return []
            }
            actions() {
                return ["BAU"]
            }
            validate({
                offer: e
            }) {
                return Y(this, void 0, void 0, (function*() {
                    return ee(e)
                }))
            }
            activationControl({
                offer: e
            }) {
                return Y(this, void 0, void 0, (function*() {
                    return e.observeSelector ? u(e.observeSelector).then((e => e ? $e.ActivateAfterRun : $e.DoNotRunOrActivate)) : $e.ActivateAfterRun
                }))
            }
            run() {
                return Y(this, void 0, void 0, (function*() {
                    return {}
                }))
            }
        }
        var te = function(e, n, t, i) {
            return new(t || (t = Promise))((function(o, r) {
                function a(e) {
                    try {
                        s(i.next(e))
                    } catch (e) {
                        r(e)
                    }
                }

                function c(e) {
                    try {
                        s(i.throw(e))
                    } catch (e) {
                        r(e)
                    }
                }

                function s(e) {
                    var n;
                    e.done ? o(e.value) : (n = e.value, n instanceof t ? n : new t((function(e) {
                        e(n)
                    }))).then(a, c)
                }
                s((i = i.apply(e, n || [])).next())
            }))
        };
        const ie = I({
                id: O(),
                action: O(),
                element: O(),
                lambdaGatewayURL: O(),
                thresholdConfiguration: I({
                    displayThreshold: T()
                })
            }),
            oe = {
                main: {
                    width: "300px",
                    "margin-bottom": "20px",
                    "line-height": "24px"
                },
                wrapper: {
                    display: "flex",
                    gap: "5px"
                },
                svgIcon: {
                    display: "block"
                },
                svgIconWrapper: {
                    height: "24px",
                    width: "24px",
                    display: "flex",
                    "justify-content": "center",
                    "align-items": "center",
                    "flex-shrink": "0"
                }
            },
            re = "#707072",
            ae = Object.assign({}, oe),
            ce = Object.assign(Object.assign({}, oe), {
                main: {
                    "margin-top": "36px",
                    display: "flex",
                    "justify-content": "center",
                    "line-height": "24px",
                    color: re
                }
            }),
            se = Object.freeze({
                VARIANT_EYEBROW: "socialProof",
                VARIANT_ABOVE_ATB: "socialProof2AboveATB"
            });
        class le {
            constructor() {
                this.removeExistingOffer = e => {
                    Array.from(document.querySelectorAll(e)).forEach((e => {
                        e.remove()
                    }))
                }, this.removeExistingOffers = () => {
                    this.removeExistingOffer('[data-testid="sp_variant_1"]'), this.removeExistingOffer('[data-testid="sp_variant_2"]')
                }
            }
            mboxes() {
                return ["at_cjs_social_proof"]
            }
            watchUrl() {
                return {}
            }
            activationControl() {
                return te(this, void 0, void 0, (function*() {
                    return $e.DoNotActivate
                }))
            }
            validate({
                offer: e
            }) {
                return te(this, void 0, void 0, (function*() {
                    return ie(e)
                }))
            }
            static getStyleColor() {
                const e = window.location.pathname.split("/");
                return e[e.length - 1]
            }
            static formatCount(e) {
                let n;
                return e < 100 || isNaN(e) ? e.toString() : e < 1e3 ? (n = 100 * Math.floor(e / 100), `${n.toLocaleString()}+`) : (n = 1e3 * Math.floor(e / 1e3), `${n.toLocaleString()}+`)
            }
            static shouldDisplayMessage(e, n) {
                const {
                    displayThreshold: t
                } = e;
                return Number(n.data) >= t
            }
            static generateContent(e, n) {
                const t = le.formatCount(Number(n.data)),
                    i = (e => {
                        const n = e ? re : "#111111";
                        return `<svg width="22"  style="${v(oe.svgIcon)}" height="16" data-testid="eyeIcon" alt="" role="img" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M14.75 7.9996C14.75 10.0706 13.071 11.7496 11 11.7496C8.92898 11.7496 7.24998 10.0706 7.24998 7.9996C7.24998 5.9286 8.92898 4.2496 11 4.2496C13.071 4.2496 14.75 5.9286 14.75 7.9996Z" stroke=${n} stroke-width="1.5"/><path fill-rule="evenodd" clip-rule="evenodd" d="M20.6021 7.566C20.7891 7.828 20.7891 8.171 20.6021 8.433C19.5391 9.923 15.7301 14.75 11.0001 14.75C6.26908 14.75 2.46808 9.922 1.40708 8.432C1.22108 8.17 1.22108 7.829 1.40708 7.567C2.46808 6.077 6.26908 1.25 11.0001 1.25C15.7301 1.25 19.5391 6.076 20.6021 7.566Z" stroke=${n} stroke-width="1.5"/></svg>`
                    })(e);
                return `\n      <span style="${v(oe.svgIconWrapper)}">${i}</span>\n      <span>${t} viewed in the last 7 days</span>\n    `
            }
            static checkStyleColor(e, n) {
                return te(this, void 0, void 0, (function*() {
                    try {
                        const t = yield fetch(`${n}?style-color=${e}`);
                        return yield t.json()
                    } catch (e) {
                        throw new Error(e.message)
                    }
                }))
            }
            run({
                offer: e,
                config: n,
                context: t
            }) {
                return te(this, void 0, void 0, (function*() {
                    let i;
                    try {
                        const n = le.getStyleColor();
                        i = yield le.checkStyleColor(n, e.lambdaGatewayURL)
                    } catch (e) {
                        throw new o("fetch", e.message)
                    }
                    const {
                        thresholdConfiguration: r
                    } = e;
                    this.removeExistingOffers();
                    const a = n.action === se.VARIANT_ABOVE_ATB,
                        c = a ? ce : ae;
                    if (!le.shouldDisplayMessage(r, i)) return {};
                    t.reporter.experimentActivated();
                    const s = le.generateContent(a, i),
                        l = `\n      <div style="${v(c.main)}" data-testid="${a?"sp_variant_2":"sp_variant_1"}">\n        <span style="${v(c.wrapper)}">${s}</span>\n      </div>\n    `,
                        {
                            anchorElements: d
                        } = yield h({
                            anchorElements: [e.element]
                        });
                    return d.forEach((e => function(e, n, t) {
                        switch (n) {
                            case "innerHTML":
                                {
                                    e.innerHTML = t;
                                    const n = [];
                                    return e.childNodes.forEach((e => n.push(e))),
                                    n
                                }
                            case "outerHTML":
                                {
                                    const n = p(t);
                                    return e.replaceWith(n),
                                    [n]
                                }
                            case "textContent":
                                return e.textContent = t, [e];
                            default:
                                {
                                    const i = p(t);
                                    return e.insertAdjacentElement(n, i),
                                    [i]
                                }
                        }
                    }(e, "beforebegin", l))), {}
                }))
            }
        }
        var de = t(379),
            ue = t.n(de),
            pe = t(795),
            fe = t.n(pe),
            he = t(569),
            ve = t.n(he),
            _e = t(565),
            ge = t.n(_e),
            me = t(216),
            be = t.n(me),
            we = t(589),
            ye = t.n(we),
            ke = t(734),
            xe = {};
        xe.styleTagTransform = ye(), xe.setAttributes = ge(), xe.insert = ve().bind(null, "head"), xe.domAPI = fe(), xe.insertStyleElement = be();
        ue()(ke.Z, xe);
        const Ce = ke.Z && ke.Z.locals ? ke.Z.locals : void 0;
        var Ee = function(e, n, t, i) {
            return new(t || (t = Promise))((function(o, r) {
                function a(e) {
                    try {
                        s(i.next(e))
                    } catch (e) {
                        r(e)
                    }
                }

                function c(e) {
                    try {
                        s(i.throw(e))
                    } catch (e) {
                        r(e)
                    }
                }

                function s(e) {
                    var n;
                    e.done ? o(e.value) : (n = e.value, n instanceof t ? n : new t((function(e) {
                        e(n)
                    }))).then(a, c)
                }
                s((i = i.apply(e, n || [])).next())
            }))
        };
        class Ae {
            mboxes() {
                return ["at_cjs_debug"]
            }
            validate() {
                return Ee(this, void 0, void 0, (function*() {
                    return 0
                }))
            }
            activationControl() {
                return Ee(this, void 0, void 0, (function*() {
                    return window.location.search.includes("at_cjs_debug=true") ? Promise.resolve($e.DoNotActivate) : Promise.resolve($e.DoNotRunOrActivate)
                }))
            }
            run({
                context: e
            }) {
                return Ee(this, void 0, void 0, (function*() {
                    const n = {
                            country: e.app().appCountry,
                            language: e.app().appLanguage,
                            appName: e.app().appName,
                            browser: `${e.browser().width}x${e.browser().height}`,
                            user: `${e.user().isLoggedIn}`
                        },
                        t = document.createElement("div");
                    t.innerHTML = '<!doctype html> <html lang="en"> <head> </head> <body> <div class="at-cjs-debug-modal"> <button id="close" class="at-cjs-debug-modal-button" alt="debug modal close button">&times;</button> <h2 data-test-id="debug-div"> If you are seeing this, you are in the debug experiment! <br/> Here\'s some debug info: </h2> <table class="at-cjs-debug-modal-table"> <caption style="font-weight:700;padding:10px">Debug Info Table</caption> <thead> <tr class="at-cjs-debug-modal-table-row"> <th class="at-cjs-debug-modal-table-header">Variable</th> <th class="at-cjs-debug-modal-table-header">Value</th> </tr> </thead> <tbody> </tbody> </table> <br/> <button id="debug-button" class="at-cjs-debug-modal-button">Fire A CTA Event!</button> </div> </body> </html> ', document.body.appendChild(t);
                    const {
                        tableData: i
                    } = yield h({
                        tableData: ".at-cjs-debug-modal-table > tbody"
                    });
                    ! function(e) {
                        for (const n in e) {
                            const t = document.createElement("tr");
                            t.classList.add("at-cjs-debug-modal-table-row");
                            const o = document.createElement("td");
                            o.classList.add("at-cjs-debug-modal-table-data"), o.textContent = n;
                            const r = document.createElement("td");
                            r.classList.add("at-cjs-debug-modal-table-data"), r.textContent = e[n], t.appendChild(o), t.appendChild(r), i.appendChild(t)
                        }
                    }(n);
                    const {
                        debugButton: o,
                        closeButton: r
                    } = yield h({
                        debugButton: "#debug-button",
                        closeButton: "#close"
                    });
                    return r.addEventListener("click", (() => {
                            t.remove()
                        })), e.addAnalyticsClickListener(o, {
                            title: "Debug Button",
                            clickActivity: "Debug Button Clicked"
                        }),
                        function(e) {
                            const n = document.createElement("style");
                            n.innerHTML = e, document.head.appendChild(n)
                        }(Ce), {}
                }))
            }
        }
        var Te = function(e, n, t, i) {
            return new(t || (t = Promise))((function(o, r) {
                function a(e) {
                    try {
                        s(i.next(e))
                    } catch (e) {
                        r(e)
                    }
                }

                function c(e) {
                    try {
                        s(i.throw(e))
                    } catch (e) {
                        r(e)
                    }
                }

                function s(e) {
                    var n;
                    e.done ? o(e.value) : (n = e.value, n instanceof t ? n : new t((function(e) {
                        e(n)
                    }))).then(a, c)
                }
                s((i = i.apply(e, n || [])).next())
            }))
        };
        class Le {
            mboxes() {
                return ["at_cjs_render_template"]
            }
            validate({
                offer: e
            }) {
                return Te(this, void 0, void 0, (function*() {
                    return e
                }))
            }
            run({
                offer: e
            }) {
                return Te(this, void 0, void 0, (function*() {
                    const {
                        parent: n
                    } = yield h({
                        parent: e.element
                    }), t = yield this.loadTemplate(e.template, e.variant);
                    return this.renderTemplate(n, e, t), {
                        idElements: n.lastElementChild ? [n.lastElementChild] : []
                    }
                }))
            }
            loadTemplate(e, n = "") {
                var t;
                return Te(this, void 0, void 0, (function*() {
                    if (null === (t = window.Templates) || void 0 === t ? void 0 : t[e]) return Promise.resolve(window.Templates[e].default);
                    const i = document.createElement("script"),
                        o = "" !== n ? n + "/" : "",
                        r = new URL(Le.NikeComBaseURL);
                    return r.pathname = `${Le.CustomScriptPath}${o}templates/${e}.js`, i.id = `cjs-template-${e}`, i.src = r.toString(), document.head.appendChild(i),
                        function(e, n = 5e3) {
                            return d(this, void 0, void 0, (function*() {
                                return Promise.race([b(n), new Promise((n => {
                                    e.addEventListener("load", (() => {
                                        n()
                                    }))
                                }))])
                            }))
                        }(i).then((() => {
                            var n;
                            if (null === (n = window.Templates) || void 0 === n ? void 0 : n[e]) return window.Templates[e].default;
                            throw new Error(`Failed to load template ${e}`)
                        }))
                }))
            }
            renderTemplate(e, n, t) {
                const i = document.createElement("div");
                i.id = n.id, i.className = `template-${n.template}`, e.appendChild(i), window.ReactDOM.render(window.React.createElement(t, n.props), i)
            }
        }
        Le.NikeComBaseURL = "https://www.nike.com", Le.CustomScriptPath = "/static/experience/experimentation-eng/custom-script/";
        const je = Le;

        function Ne() {
            return [new ne, new je, new le, new Ae]
        }
        var Ie, Se = function(e, n, t, i) {
            return new(t || (t = Promise))((function(o, r) {
                function a(e) {
                    try {
                        s(i.next(e))
                    } catch (e) {
                        r(e)
                    }
                }

                function c(e) {
                    try {
                        s(i.throw(e))
                    } catch (e) {
                        r(e)
                    }
                }

                function s(e) {
                    var n;
                    e.done ? o(e.value) : (n = e.value, n instanceof t ? n : new t((function(e) {
                        e(n)
                    }))).then(a, c)
                }
                s((i = i.apply(e, n || [])).next())
            }))
        };

        function Oe(e, n) {
            if (e.action && "bau" === e.action.toLowerCase()) return new ne;
            const t = e.mbox.toLowerCase(),
                i = (null != n ? n : Ne()).find((e => e.mboxes().some((e => e.toLowerCase() === t))));
            return null != i ? i : null
        }

        function Pe(n, t, i) {
            return Se(this, void 0, void 0, (function*() {
                const o = yield Promise.allSettled(t.map((t => function(n, t, i) {
                    var o;
                    return Se(this, void 0, void 0, (function*() {
                        if (!(t instanceof Re)) throw new Error("config must be instance of ExperimentConfig");
                        const r = Oe(t, i);
                        if (!r) return;
                        const a = n.build(r, t);
                        let c;
                        try {
                            c = yield r.validate({
                                context: a,
                                offer: t.offer,
                                config: t
                            })
                        } catch (n) {
                            return void a.reporter.sendFromError(new s(e.OfferValidation, n.message))
                        }
                        const l = {
                            context: a,
                            offer: c,
                            config: t
                        };
                        let d = $e.ActivateAfterRun;
                        if (r.activationControl) try {
                            if (d = yield r.activationControl(l), d === $e.DoNotRunOrActivate) return
                        } catch (n) {
                            return void a.reporter.sendFromError(new s(e.ActivationControl, n.message))
                        }
                        const u = new G,
                            p = null === (o = r.watchUrl) || void 0 === o ? void 0 : o.call(r, c),
                            f = () => Se(this, void 0, void 0, (function*() {
                                let n;
                                try {
                                    n = yield r.run(l)
                                } catch (n) {
                                    const t = new s(e.Run, n.message);
                                    return a.reporter.sendFromError(t), void u.reset()
                                }
                                try {
                                    yield a.finalizeExperiment(n)
                                } catch (n) {
                                    a.reporter.sendFromError(new s(e.Finalization, n.message)), u.reset()
                                }
                                d === $e.ActivateAfterRun && a.reporter.experimentActivated()
                            }));
                        p ? u.addListener((() => {
                            f().catch((e => {
                                a.reporter.sendFromError(e)
                            }))
                        }), Object.assign(Object.assign({}, p), {
                            immediate: !0
                        })) : yield f()
                    }))
                }(n, t, i))));
                for (const e of o)
                    if ("rejected" === e.status) throw e.reason
            }))
        }
        class Re {
            constructor(e) {
                Object.assign(this, e)
            }
        }! function(e) {
            e[e.ActivateAfterRun = 0] = "ActivateAfterRun", e[e.DoNotRunOrActivate = 1] = "DoNotRunOrActivate", e[e.DoNotActivate = 2] = "DoNotActivate"
        }(Ie || (Ie = {}));
        const $e = Ie;
        var De = function(e, n, t, i) {
            return new(t || (t = Promise))((function(o, r) {
                function a(e) {
                    try {
                        s(i.next(e))
                    } catch (e) {
                        r(e)
                    }
                }

                function c(e) {
                    try {
                        s(i.throw(e))
                    } catch (e) {
                        r(e)
                    }
                }

                function s(e) {
                    var n;
                    e.done ? o(e.value) : (n = e.value, n instanceof t ? n : new t((function(e) {
                        e(n)
                    }))).then(a, c)
                }
                s((i = i.apply(e, n || [])).next())
            }))
        };

        function ze(e) {
            return De(this, void 0, void 0, (function*() {
                const n = [],
                    t = yield function(e) {
                        return De(this, void 0, void 0, (function*() {
                            const {
                                appName: n,
                                appCountry: t,
                                appLanguage: i
                            } = e.app, {
                                width: o
                            } = e.browser, {
                                isLoggedIn: r
                            } = e.user, a = [], c = new Set(Ne().flatMap((e => e.mboxes())));
                            for (const e of c) a.push({
                                name: e,
                                parameters: {
                                    appCountry: t,
                                    appLanguage: i,
                                    browserWidth: o,
                                    appName: n,
                                    isLoggedIn: r
                                }
                            });
                            return a
                        }))
                    }(e), i = yield function(e) {
                        var n;
                        return De(this, void 0, void 0, (function*() {
                            try {
                                return yield null === (n = window.webShellClient) || void 0 === n ? void 0 : n.optimization.getLocations({
                                    locations: e
                                }, !0)
                            } catch (e) {
                                throw new r("Optimization Client")
                            }
                        }))
                    }(t);
                if (!i) return n;
                const {
                    locations: o
                } = i;
                for (const e of o) {
                    const t = I({
                        experimentActivatedCallback: L(),
                        analytics: O(),
                        content: S({
                            id: O(),
                            action: P()
                        }),
                        responseTokens: I({
                            "activity.name": O(),
                            "experience.name": O()
                        })
                    });
                    try {
                        const i = t(e);
                        n.push(new Re({
                            mbox: e.name,
                            tntaId: i.analytics,
                            activityName: i.responseTokens["activity.name"],
                            experienceName: i.responseTokens["experience.name"],
                            id: i.content.id,
                            action: i.content.action,
                            offer: i.content,
                            activatedCallback: i.experimentActivatedCallback
                        }))
                    } catch (e) {
                        continue
                    }
                }
                return n
            }))
        }
        const Me = "2iv4Qa7rFEipAs4iE850BkBpTYQvlAFZ";
        const Ue = new Map(Object.entries({
                en_us_us: "nike",
                es_la_ar: "nike_argentina",
                en_au_au: "nike_australia",
                en_gb_au: "nike_australia",
                en_gb_at: "nike_austria",
                de_de_at: "nike_austria_german",
                en_gb_be: "nike_belgium",
                nl_nl_be: "nike_belgium_dutch",
                fr_fr_be: "nike_belgium_french",
                de_de_be: "nike_belgium_german",
                en_bg_bg: "nike_bulgaria",
                en_gb_bg: "nike_bulgaria",
                en_gb_ca: "nike_canada",
                fr_fr_ca: "nike_canada_french",
                en_ca_ca: "nike_canada",
                fr_ca_ca: "nike_canada_french",
                es_la_cl: "nike_chile",
                en_gb_hr: "nike_croatia",
                en_hr_hr: "nike_croatia",
                en_gb_cz: "nike_czech_republic",
                cs_cz_cz: "nike_czech_republic_czech",
                en_gb_dk: "nike_denmark",
                da_dk_dk: "nike_denmark_danish",
                en_gb_eg: "nike_egypt",
                en_gb_fi: "nike_finland",
                fr_fr_fr: "nike_france",
                de_de_de: "nike_germany",
                en_gb_gb: "nike_great_britain",
                el_gr_gr: "nike_greece",
                en_gb_hk: "nike_hong_kong",
                en_gb_hu: "nike_hungary",
                hu_hu_hu: "nike_hungary_hungarian",
                en_gb_in: "nike_india",
                en_in_in: "nike_india",
                en_gb_id: "nike_indonesia",
                en_id_id: "nike_indonesia",
                en_gb_ie: "nike_ireland",
                en_gb_il: "nike_israel",
                en_il_il: "nike_israel",
                it_it_it: "nike_italy",
                ja_jp_jp: "nike_japan",
                ko_kr_kr: "nike_korea",
                en_gb_lu: "nike_luxembourg",
                fr_fr_lu: "nike_luxembourg_french",
                de_de_lu: "nike_luxembourg_german",
                en_gb_my: "nike_malaysia",
                en_my_my: "nike_malaysia",
                es_la_mx: "nike_mexico",
                es_mx_mx: "nike_mexico",
                en_gb_ma: "nike_morocco",
                fr_fr_ma: "nike_morocco_french",
                en_gb_nl: "nike_netherlands",
                nl_nl_nl: "nike_netherlands_dutch",
                en_gb_nz: "nike_new_zealand",
                en_nz_nz: "nike_new_zealand",
                en_gb_no: "nike_norway",
                en_no_no: "nike_norway",
                no_no_no: "nike_norway_norwegian",
                en_gb_ph: "nike_philippines",
                en_ph_ph: "nike_philippines",
                pl_pl_pl: "nike_poland",
                en_gb_pt: "nike_portugal",
                pt_pt_pt: "nike_portugal_portuguese",
                es_la_pr: "nike_puerto_rico",
                en_gb_ro: "nike_romania",
                en_ro_ro: "nike_romania",
                ru_ru_ru: "nike_russia",
                en_gb_sa: "nike_saudi_arabia",
                en_sa_sa: "nike_saudi_arabia",
                en_gb_sg: "nike_singapore",
                en_sg_sg: "nike_singapore",
                en_gb_sk: "nike_slovakia",
                en_sk_sk: "nike_slovakia",
                en_gb_si: "nike_slovenia",
                en_gb_za: "nike_south_africa",
                en_za_za: "nike_south_africa",
                es_es_es: "nike_spain",
                ca_es_es: "nike_spain_catalan",
                en_gb_se: "nike_sweden",
                sv_se_se: "nike_sweden_swedish",
                en_gb_ch: "nike_switzerland",
                en_ch_ch: "nike_switzerland",
                fr_ch_ch: "nike_switzerland_french",
                fr_fr_ch: "nike_switzerland_french",
                de_ch_ch: "nike_switzerland_german",
                de_de_ch: "nike_switzerland_german",
                it_ch_ch: "nike_switzerland_italian",
                it_it_ch: "nike_switzerland_italian",
                zh_tw_tw: "nike_taiwan",
                th_th_th: "nike_thailand",
                tr_tr_tr: "nike_turkey",
                en_ae_ae: "nike_uae",
                en_gb_ae: "nike_uae",
                en_gb_vn: "nike_vietnam",
                en_vn_vn: "nike_vietnam"
            })),
            Be = "";
        var He = function(e, n, t, i) {
            return new(t || (t = Promise))((function(o, r) {
                function a(e) {
                    try {
                        s(i.next(e))
                    } catch (e) {
                        r(e)
                    }
                }

                function c(e) {
                    try {
                        s(i.throw(e))
                    } catch (e) {
                        r(e)
                    }
                }

                function s(e) {
                    var n;
                    e.done ? o(e.value) : (n = e.value, n instanceof t ? n : new t((function(e) {
                        e(n)
                    }))).then(a, c)
                }
                s((i = i.apply(e, n || [])).next())
            }))
        };
        const Fe = {
            allowedCountries: ["us"],
            allowedLanguages: ["en"],
            requiredPermissions: ["performance", "adtargeting_behavioralevents"]
        };

        function We() {
            ! function() {
                const e = {
                    __EventHandlers: [],
                    registerEventHandler(e) {
                        this.__EventHandlers.push(e)
                    },
                    __initEventListener() {
                        ["bluecore:views", "bluecore:clicks"].forEach((e => {
                            document.addEventListener(e, (e => {
                                var n;
                                const t = e;
                                try {
                                    const {
                                        eventName: e,
                                        campaignID: i,
                                        campaignName: o
                                    } = t.detail, r = (e => "views" === e ? "Bluecore Campaign Activated" : "clicks" === e ? "Bluecore Campaign CTA Clicked" : "")(e);
                                    null === (n = window.__Experimentation) || void 0 === n || n.bc.__EventHandlers.forEach((e => {
                                        try {
                                            e(r, i, o)
                                        } catch (e) {
                                            console.error("Error in callback:", e)
                                        }
                                    }))
                                } catch (e) {
                                    console.error("Error handling event:", e)
                                }
                            }))
                        }))
                    }
                };
                window.__Experimentation ? window.__Experimentation.bc = e : window.__Experimentation = {
                    bc: e
                }, window.__Experimentation.bc.__initEventListener(), window.__Experimentation.bc.registerEventHandler(((e, n, t) => {
                    var i;
                    const o = t.toLowerCase();
                    if (!["base", "a/b", "helper", "hidden", "adobe"].some((e => o.includes(e)))) {
                        const o = Object.assign({}, B(window));
                        o.classification = "experience event", o.abTest = {
                            experiments: [`${n}-${t}`]
                        }, o.marketing = {
                            campaignID: n,
                            campaignName: t
                        }, null === (i = window.webShellClient) || void 0 === i || i.analytics.track(e, o, {
                            writeKey: Me
                        })
                    }
                })), window.__Experimentation.bc.registerEventHandler(((e, n, t) => {
                    const i = t.toLowerCase();
                    if (!["base", "a/b", "helper", "hidden", "adobe"].some((e => i.includes(e)))) {
                        const i = {
                            campaignID: n,
                            campaignName: t
                        };
                        window.newrelic.addPageAction(e, i)
                    }
                }))
            }();
            const e = function() {
                var e, n, t;
                if (!window.webShellClient) return Be;
                const i = window.webShellClient.locale.get(),
                    o = null === (e = i.langRegion) || void 0 === e ? void 0 : e.toLowerCase(),
                    r = null === (n = i.country) || void 0 === n ? void 0 : n.toLowerCase();
                if (!o || !r) return Be;
                const a = `${o.replace(/-/,"_")}_${r}`;
                return null !== (t = Ue.get(a)) && void 0 !== t ? t : Be
            }();
            e && function(e) {
                if ("string" != typeof e || "" == e) return;
                if (void 0 !== window.triggermail) return;
                const n = document.createElement("script");
                n.type = "text/javascript", n.async = !0, n.src = "https://api.bluecore.com/triggermail.js/" + e + ".js", document.head.appendChild(n)
            }(e)
        }
        He(void 0, void 0, void 0, (function*() {
            const e = yield Z.buildReporter("1.2.0");
            if (e) try {
                We();
                const n = yield function() {
                    return He(this, void 0, void 0, (function*() {
                        const e = yield m.runAsync((() => window.webShellClient));
                        if (!e) throw new r("WebShellClient");
                        return e
                    }))
                }(), t = yield((e, n) => H(void 0, void 0, void 0, (function*() {
                    const [t, i, o] = yield Promise.all([F(e), e.identity.getIsLoggedIn(), W()]), r = {
                        appCountry: t.country,
                        appLanguage: t.language,
                        appName: o
                    }, a = {
                        width: window.innerWidth,
                        height: window.innerHeight
                    };
                    return {
                        app: r,
                        reporter: n,
                        user: {
                            isLoggedIn: i
                        },
                        browser: a
                    }
                })))(n, e);
                if (!(yield J(t, n, Fe))) return;
                yield function(e) {
                    return He(this, void 0, void 0, (function*() {
                        const n = yield ze(e);
                        if (0 === n.length) return;
                        const t = new Q(e);
                        yield Pe(t, n)
                    }))
                }(t)
            } catch (n) {
                e.sendFromError(n)
            } else y.error("Failed to initialize reporter")
        }))
    })()
})();