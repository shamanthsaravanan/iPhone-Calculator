/* Nike -- marketing-automation.optimization-client -- 1.1.6 */
(() => {
    "use strict";
    var n = function(n) {
            this._locations = [], n && (this._locations = n)
        },
        e = function(n) {
            this._locations = [], n && (this._locations = n)
        },
        t = function(n, e, t, o) {
            return new(t || (t = Promise))((function(i, r) {
                function a(n) {
                    try {
                        c(o.next(n))
                    } catch (n) {
                        r(n)
                    }
                }

                function l(n) {
                    try {
                        c(o.throw(n))
                    } catch (n) {
                        r(n)
                    }
                }

                function c(n) {
                    var e;
                    n.done ? i(n.value) : (e = n.value, e instanceof t ? e : new t((function(n) {
                        n(e)
                    }))).then(a, l)
                }
                c((o = o.apply(n, e || [])).next())
            }))
        },
        o = function(n, e) {
            var t, o, i, r, a = {
                label: 0,
                sent: function() {
                    if (1 & i[0]) throw i[1];
                    return i[1]
                },
                trys: [],
                ops: []
            };
            return r = {
                next: l(0),
                throw: l(1),
                return: l(2)
            }, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
                return this
            }), r;

            function l(l) {
                return function(c) {
                    return function(l) {
                        if (t) throw new TypeError("Generator is already executing.");
                        for (; r && (r = 0, l[0] && (a = 0)), a;) try {
                            if (t = 1, o && (i = 2 & l[0] ? o.return : l[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) && !(i = i.call(o, l[1])).done) return i;
                            switch (o = 0, i && (l = [2 & l[0], i.value]), l[0]) {
                                case 0:
                                case 1:
                                    i = l;
                                    break;
                                case 4:
                                    return a.label++, {
                                        value: l[1],
                                        done: !1
                                    };
                                case 5:
                                    a.label++, o = l[1], l = [0];
                                    continue;
                                case 7:
                                    l = a.ops.pop(), a.trys.pop();
                                    continue;
                                default:
                                    if (!(i = a.trys, (i = i.length > 0 && i[i.length - 1]) || 6 !== l[0] && 2 !== l[0])) {
                                        a = 0;
                                        continue
                                    }
                                    if (3 === l[0] && (!i || l[1] > i[0] && l[1] < i[3])) {
                                        a.label = l[1];
                                        break
                                    }
                                    if (6 === l[0] && a.label < i[1]) {
                                        a.label = i[1], i = l;
                                        break
                                    }
                                    if (i && a.label < i[2]) {
                                        a.label = i[2], a.ops.push(l);
                                        break
                                    }
                                    i[2] && a.ops.pop(), a.trys.pop();
                                    continue
                            }
                            l = e.call(n, a)
                        } catch (n) {
                            l = [6, n], o = 0
                        } finally {
                            t = i = 0
                        }
                        if (5 & l[0]) throw l[1];
                        return {
                            value: l[0] ? l[1] : void 0,
                            done: !0
                        }
                    }([l, c])
                }
            }
        },
        i = "Experiment Activated",
        r = function() {
            return t(void 0, void 0, void 0, (function() {
                var n, e;
                return o(this, (function(t) {
                    switch (t.label) {
                        case 0:
                            return [4, null === (e = window.webShellClient) || void 0 === e ? void 0 : e.identity.getUserProfile()];
                        case 1:
                            return [2, {
                                userId: null == (n = t.sent()) ? void 0 : n.upmId,
                                loggedIn: !!(null == n ? void 0 : n.upmId)
                            }]
                    }
                }))
            }))
        },
        a = function() {
            return a = Object.assign || function(n) {
                for (var e, t = 1, o = arguments.length; t < o; t++)
                    for (var i in e = arguments[t]) Object.prototype.hasOwnProperty.call(e, i) && (n[i] = e[i]);
                return n
            }, a.apply(this, arguments)
        },
        l = "nikecom";
    var c, u = function(n) {
            var e, t, o, i, r, c, u, s, d, v;
            try {
                var p = function(n) {
                        var e, t, o, i, r, a = n.location.href,
                            l = {
                                "/t/": "pdp",
                                "/t-dark/": "pdp",
                                "/u-dark/": "pdp",
                                "/u/": "pdp",
                                "/w/": "pw",
                                "/w-dark/": "pw",
                                "/cart": "cart",
                                "/checkout": "checkout",
                                "/member": "member",
                                "/help": "help",
                                "/w?q": "onsite search"
                            };
                        if (a) {
                            var c = !1;
                            Object.keys(l).forEach((function(n) {
                                !c && a.includes(n) && (c = !0, r = l[n])
                            }))
                        }
                        if (!r) try {
                            r = null === (i = null === (o = null === (t = null === (e = n.__NEXT_DATA__) || void 0 === e ? void 0 : e.props) || void 0 === t ? void 0 : t.pageProps) || void 0 === o ? void 0 : o.navConfig) || void 0 === i ? void 0 : i.analyticsPageType
                        } catch (n) {}
                        return r
                    }(n),
                    f = function(n, e) {
                        var t, o, i, r, a, l, c, u, s, d, v, p, f, w, h, g, y, b, m, _, A, T, I, O, P, E, N, k, C = (null === (t = n.location) || void 0 === t ? void 0 : t.pathname) || "";
                        switch (e) {
                            case "pdp":
                                k = null === (o = document.querySelector("#pdp_product_title")) || void 0 === o ? void 0 : o.innerText.toLowerCase();
                                break;
                            case "pw":
                                k = null === (s = null === (u = null === (c = null === (l = null === (a = null === (r = null === (i = n.__NEXT_DATA__) || void 0 === i ? void 0 : i.props) || void 0 === r ? void 0 : r.pageProps) || void 0 === a ? void 0 : a.initialState) || void 0 === l ? void 0 : l.Wall) || void 0 === c ? void 0 : c.facetNav) || void 0 === u ? void 0 : u.analytics) || void 0 === s ? void 0 : s.legacyPageName.toLowerCase();
                                break;
                            case "homepage":
                                k = N = null === (f = null === (p = null === (v = null === (d = n.__NEXT_DATA__) || void 0 === d ? void 0 : d.props) || void 0 === v ? void 0 : v.pageProps) || void 0 === p ? void 0 : p.navConfig) || void 0 === f ? void 0 : f.pageDetail;
                                break;
                            case "landing page":
                                N = null === (y = null === (g = null === (h = null === (w = n.__NEXT_DATA__) || void 0 === w ? void 0 : w.props) || void 0 === h ? void 0 : h.pageProps) || void 0 === g ? void 0 : g.navConfig) || void 0 === y ? void 0 : y.globalNavPageName, k = null === (A = null === (_ = null === (m = null === (b = n.__NEXT_DATA__) || void 0 === b ? void 0 : b.props) || void 0 === m ? void 0 : m.pageProps) || void 0 === _ ? void 0 : _.navConfig) || void 0 === A ? void 0 : A.pageDetail;
                                break;
                            case "cart":
                                N = "cart", k = "view";
                                break;
                            case "help":
                                N = "help";
                                var S = C.split("/");
                                2 === S.length ? k = "home" : C.includes("/search/") ? k = "search" : C.includes("/a/") && (k = "article>".concat(S[S.length - 1]));
                                break;
                            case "checkout":
                                k = "shipping";
                                break;
                            case "onsite search":
                                k = (null === (E = null === (P = null === (O = null === (I = null === (T = n.__NEXT_DATA__) || void 0 === T ? void 0 : T.props) || void 0 === I ? void 0 : I.pageProps) || void 0 === O ? void 0 : O.initialState) || void 0 === P ? void 0 : P.Wall) || void 0 === E ? void 0 : E.products.length) ? "results found" : "no search results";
                                break;
                            case "member":
                                N = "member", k = ["inbox", "profile", "settings"].find((function(n) {
                                    return C.includes(n)
                                }))
                        }
                        return {
                            pageName: N,
                            pageDetail: k
                        }
                    }(n, p),
                    w = f.pageName,
                    h = f.pageDetail,
                    g = function(n) {
                        var e;
                        switch (n) {
                            case "pdp":
                            case "homepage":
                            case "landing page":
                            case "cart":
                            case "checkout":
                                e = n;
                                break;
                            case "pw":
                                e = "product wall"
                        }
                        return e
                    }(p),
                    y = null === (o = null === (t = null === (e = null == n ? void 0 : n.webShellClient) || void 0 === e ? void 0 : e.locale) || void 0 === t ? void 0 : t.get()) || void 0 === o ? void 0 : o.currency,
                    b = a({
                        domain: "www.nike.com",
                        backendPlatform: "cloud"
                    }, (v = g) && {
                        name: v
                    }),
                    m = function(n, e, t) {
                        var o = a(a({
                            experienceType: l
                        }, e && {
                            pageType: e
                        }), t && {
                            pageDetail: t
                        });
                        return a(a({}, o), "landing page" === e || "homepage" === e ? n && {
                            pageName: "".concat(l, ">").concat(n)
                        } : t && {
                            pageName: "".concat(l, ">").concat(e, ">").concat(t)
                        })
                    }(w, p, h),
                    _ = function(n) {
                        return {
                            language: (null == n ? void 0 : n.language) || "en",
                            country: (null == n ? void 0 : n.country) || "us"
                        }
                    }(null === (r = null === (i = n.webShellClient) || void 0 === i ? void 0 : i.locale) || void 0 === r ? void 0 : r.get());
                return a(a({
                    app: b,
                    view: m
                }, y && {
                    currency: y
                }), {
                    language: (null === (s = null === (u = null === (c = n.webShellClient) || void 0 === c ? void 0 : c.locale) || void 0 === u ? void 0 : u.get()) || void 0 === s ? void 0 : s.langRegion) || "en_US",
                    locale: _
                })
            } catch (e) {
                return n.newrelic && n.newrelic.addPageAction("OPTIMIZATION_CLIENT_COMMON_PROPERTIES_ERROR", {
                    host: n.location.host,
                    errorName: e.name,
                    errorMessage: e.message,
                    stackTrace: null !== (d = e.stack) && void 0 !== d ? d : ""
                }), console.error("Failed to get common properties: ".concat(e.message)), {
                    app: {
                        backendPlatform: "",
                        domain: "",
                        name: "",
                        version: ""
                    },
                    view: {
                        experienceType: "",
                        pageName: "",
                        pageType: "",
                        pageDetail: ""
                    },
                    language: "",
                    locale: {
                        country: "",
                        language: ""
                    },
                    currency: ""
                }
            }
        },
        s = function() {
            return s = Object.assign || function(n) {
                for (var e, t = 1, o = arguments.length; t < o; t++)
                    for (var i in e = arguments[t]) Object.prototype.hasOwnProperty.call(e, i) && (n[i] = e[i]);
                return n
            }, s.apply(this, arguments)
        };
    ! function(n) {
        n[n.CONTINUE = 0] = "CONTINUE", n[n.STOP = 1] = "STOP"
    }(c || (c = {}));
    var d, v = function() {
            function n() {
                this.maxAttempts = 10, this.interval = 50, this.exponentRate = 1.5
            }
            return n.run = function(n) {
                var e = function(t) {
                    if (void 0 === t && (t = 0), function(e) {
                            try {
                                return n.onTick(e)
                            } catch (e) {
                                return n.onError(e), c.STOP
                            }
                        }(t) !== c.STOP)
                        if (t + 1 >= n.maxAttempts) n.onTimeout();
                        else {
                            var o = n.interval * Math.pow(t + 1, n.exponentRate);
                            setTimeout((function() {
                                return e(t + 1)
                            }), o)
                        }
                };
                return e(), n
            }, n.runAsync = function(e) {
                return new Promise((function(t, o) {
                    n.run(s(s({}, new n), {
                        onTick: function() {
                            var n = e();
                            return n ? (t(n), c.STOP) : c.CONTINUE
                        },
                        onError: o,
                        onTimeout: function() {
                            return t(null)
                        }
                    }))
                }))
            }, n
        }(),
        p = (d = function(n, e) {
            return d = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(n, e) {
                n.__proto__ = e
            } || function(n, e) {
                for (var t in e) Object.prototype.hasOwnProperty.call(e, t) && (n[t] = e[t])
            }, d(n, e)
        }, function(n, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");

            function t() {
                this.constructor = n
            }
            d(n, e), n.prototype = null === e ? Object.create(e) : (t.prototype = e.prototype, new t)
        }),
        f = function() {
            return f = Object.assign || function(n) {
                for (var e, t = 1, o = arguments.length; t < o; t++)
                    for (var i in e = arguments[t]) Object.prototype.hasOwnProperty.call(e, i) && (n[i] = e[i]);
                return n
            }, f.apply(this, arguments)
        },
        w = function(n, e, t, o) {
            return new(t || (t = Promise))((function(i, r) {
                function a(n) {
                    try {
                        c(o.next(n))
                    } catch (n) {
                        r(n)
                    }
                }

                function l(n) {
                    try {
                        c(o.throw(n))
                    } catch (n) {
                        r(n)
                    }
                }

                function c(n) {
                    var e;
                    n.done ? i(n.value) : (e = n.value, e instanceof t ? e : new t((function(n) {
                        n(e)
                    }))).then(a, l)
                }
                c((o = o.apply(n, e || [])).next())
            }))
        },
        h = function(n, e) {
            var t, o, i, r, a = {
                label: 0,
                sent: function() {
                    if (1 & i[0]) throw i[1];
                    return i[1]
                },
                trys: [],
                ops: []
            };
            return r = {
                next: l(0),
                throw: l(1),
                return: l(2)
            }, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
                return this
            }), r;

            function l(l) {
                return function(c) {
                    return function(l) {
                        if (t) throw new TypeError("Generator is already executing.");
                        for (; r && (r = 0, l[0] && (a = 0)), a;) try {
                            if (t = 1, o && (i = 2 & l[0] ? o.return : l[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) && !(i = i.call(o, l[1])).done) return i;
                            switch (o = 0, i && (l = [2 & l[0], i.value]), l[0]) {
                                case 0:
                                case 1:
                                    i = l;
                                    break;
                                case 4:
                                    return a.label++, {
                                        value: l[1],
                                        done: !1
                                    };
                                case 5:
                                    a.label++, o = l[1], l = [0];
                                    continue;
                                case 7:
                                    l = a.ops.pop(), a.trys.pop();
                                    continue;
                                default:
                                    if (!(i = a.trys, (i = i.length > 0 && i[i.length - 1]) || 6 !== l[0] && 2 !== l[0])) {
                                        a = 0;
                                        continue
                                    }
                                    if (3 === l[0] && (!i || l[1] > i[0] && l[1] < i[3])) {
                                        a.label = l[1];
                                        break
                                    }
                                    if (6 === l[0] && a.label < i[1]) {
                                        a.label = i[1], i = l;
                                        break
                                    }
                                    if (i && a.label < i[2]) {
                                        a.label = i[2], a.ops.push(l);
                                        break
                                    }
                                    i[2] && a.ops.pop(), a.trys.pop();
                                    continue
                            }
                            l = e.call(n, a)
                        } catch (n) {
                            l = [6, n], o = 0
                        } finally {
                            t = i = 0
                        }
                        if (5 & l[0]) throw l[1];
                        return {
                            value: l[0] ? l[1] : void 0,
                            done: !0
                        }
                    }([l, c])
                }
            }
        },
        g = function(n, e, t) {
            if (t || 2 === arguments.length)
                for (var o, i = 0, r = e.length; i < r; i++) !o && i in e || (o || (o = Array.prototype.slice.call(e, 0, i)), o[i] = e[i]);
            return n.concat(o || Array.prototype.slice.call(e))
        },
        y = "adtargeting_behavioralevents",
        b = "performance",
        m = function(n) {
            function e(e) {
                var t, o = n.call(this, e) || this;
                return o.getLocations = function(n) {
                    for (var e = [], t = 1; t < arguments.length; t++) e[t - 1] = arguments[t];
                    return w(o, g([n], e, !0), void 0, (function(n, e) {
                        var t, o, i, a, l, c, u, s, d, v, p, f, w, g, m, _, A;
                        return void 0 === e && (e = !1), h(this, (function(h) {
                            switch (h.label) {
                                case 0:
                                    return t = null !== (s = null == n ? void 0 : n.locations) && void 0 !== s ? s : this._locations, [4, this.getAdobeATSdk()];
                                case 1:
                                    if (!(null == (o = h.sent()) ? void 0 : o.target)) return console.warn("Optimization client is unable to find Adobe Target. Please check that your application is configured correctly."), [2];
                                    if (0 === t.length) return console.error("Locations must be provided either via a function argument or as a part of the Optimization configuration"), null === (d = window.newrelic) || void 0 === d || d.addPageAction("EXP_OPTIMIZATION_CLIENT_NO_LOCATIONS", {
                                        errorMessage: "Locations must be provided."
                                    }), [2];
                                    I = t, (O = new URL(window.location.href).searchParams.get("atLocation")) && (I[0].name = O), T = t, new URL(window.location.href).searchParams.forEach((function(n, e) {
                                        if (e.indexOf("mbox:") >= 0) {
                                            var t = e.split(":")[1];
                                            T[0].parameters[t] = n
                                        }
                                    })), h.label = 2;
                                case 2:
                                    return h.trys.push([2, 6, , 7]), [4, r()];
                                case 3:
                                    return i = h.sent(), a = this.getOptions(t), [4, null === (v = window.analyticsClient) || void 0 === v ? void 0 : v.isInitialized()];
                                case 4:
                                    return h.sent(), l = null === (f = null === (p = null === window || void 0 === window ? void 0 : window.NikePrivacy) || void 0 === p ? void 0 : p.permissions.get()) || void 0 === f ? void 0 : f.map((function(n) {
                                        var e = n.category;
                                        return n.isEnabled ? e : null
                                    })).filter(Boolean), [y, b].every((function(n) {
                                        return null == l ? void 0 : l.includes(n)
                                    })) ? (window.Visitor && this.setCustomerIDs(i), [4, window.adobe.target.getOffers(a)]) : (console.warn("Appropriate UGP permissions have not been given. Cannot fetch Adobe Target locations."), null === (w = window.newrelic) || void 0 === w || w.addPageAction("EXP_OPTIMIZATION_CLIENT_NO_UGP_PERMISSION", {
                                        errorMessage: "Appropriate UGP permissions have not been given.",
                                        locations: t
                                    }), [2]);
                                case 5:
                                    return c = h.sent(), null === (g = window.newrelic) || void 0 === g || g.addPageAction("EXP_OPTIMIZATION_CLIENT_SUCCESS", {
                                        locations: t
                                    }), [2, this.transformAdobeOffersToGetLocationsResult(c, e)];
                                case 6:
                                    return u = h.sent(), (null === (m = window.newrelic) || void 0 === m ? void 0 : m.noticeError) && (null === (_ = window.newrelic) || void 0 === _ || _.addPageAction("EXP_OPTIMIZATION_CLIENT_ERROR", {
                                        host: window.location.host,
                                        errorName: u.name,
                                        errorMessage: u.message,
                                        stackTrace: null !== (A = u.stack) && void 0 !== A ? A : "",
                                        locations: t.length ? t : null
                                    })), console.error("Failed to find locations: ".concat(u.message)), [3, 7];
                                case 7:
                                    return [2]
                            }
                            var T, I, O
                        }))
                    }))
                }, o.getOptions = function(n) {
                    return {
                        request: {
                            context: {
                                channel: "web"
                            },
                            experienceCloud: {
                                analytics: {
                                    logging: "client_side"
                                }
                            },
                            property: {
                                token: (e = new URL(window.location.href).searchParams.get("atProperty"), e || "ae0ecea9-920a-26c9-5042-3a3aab0ff68b")
                            },
                            execute: {
                                mboxes: n.map((function(n, e) {
                                    return {
                                        name: n.name,
                                        index: e,
                                        parameters: n.parameters
                                    }
                                }))
                            }
                        }
                    };
                    var e
                }, o.transformAdobeOffersToGetLocationsResult = function(n, e) {
                    for (var t, i, r, a, l, c = [], u = function(n) {
                            var u = {
                                name: n.name,
                                analytics: null === (t = n.analytics) || void 0 === t ? void 0 : t.payload.tnta,
                                content: null === (r = null === (i = null == n ? void 0 : n.options) || void 0 === i ? void 0 : i[0]) || void 0 === r ? void 0 : r.content,
                                responseTokens: null === (l = null === (a = null == n ? void 0 : n.options) || void 0 === a ? void 0 : a[0]) || void 0 === l ? void 0 : l.responseTokens,
                                experimentActivatedCallback: function() {}
                            };
                            if (u.analytics) {
                                var s = function() {
                                    var e;
                                    try {
                                        return o.sendAdobeAnalyticsEvent(n), !0
                                    } catch (n) {
                                        return window.newrelic && window.newrelic.addPageAction("OPTIMIZATION_CLIENT_ANALTICS_SEND_ERROR", {
                                            host: window.location.host,
                                            errorName: n.name,
                                            errorMessage: n.message,
                                            stackTrace: null !== (e = n.stack) && void 0 !== e ? e : ""
                                        }), console.error("Failed to send Analytics: ".concat(n.message)), !1
                                    } finally {
                                        u.experimentActivatedCallback = function() {}
                                    }
                                };
                                e ? u.experimentActivatedCallback = s : s()
                            }
                            c.push(u)
                        }, s = 0, d = n.execute.mboxes; s < d.length; s++) {
                        u(d[s])
                    }
                    if (c && c.length > 0) return {
                        locations: c
                    }
                }, null === (t = window.newrelic) || void 0 === t || t.addPageAction("EXP_OPTIMIZATION_CLIENT_INITIALIZED", {}), o
            }
            return p(e, n), e.prototype.setCustomerIDs = function(n) {
                var e = window.Visitor.getInstance("F0935E09512D2C270A490D4D@AdobeOrg");
                e.setCustomerIDs({
                    customerecid: {
                        id: e.getMarketingCloudVisitorID(),
                        authState: n.loggedIn ? window.Visitor.AuthState.AUTHENTICATED : window.Visitor.AuthState.UNKNOWN
                    }
                })
            }, e.prototype.validExperiment = function(n) {
                return void 0 !== n.content
            }, e.prototype.sendAdobeAnalyticsEvent = function(n) {
                var e, t, o, r, a, l = u(window);
                window.webShellClient.analytics.track(i, f({
                    "experience.name": null === (t = null === (e = null == n ? void 0 : n.options) || void 0 === e ? void 0 : e[0]) || void 0 === t ? void 0 : t.responseTokens["experience.name"],
                    "activity.name": null === (r = null === (o = null == n ? void 0 : n.options) || void 0 === o ? void 0 : o[0]) || void 0 === r ? void 0 : r.responseTokens["activity.name"],
                    abTest: {
                        analytics: null === (a = n.analytics) || void 0 === a ? void 0 : a.payload.tnta
                    }
                }, l), {
                    writeKey: "2iv4Qa7rFEipAs4iE850BkBpTYQvlAFZ"
                })
            }, e.prototype.getAdobeATSdk = function() {
                return w(this, void 0, void 0, (function() {
                    return h(this, (function(n) {
                        return [2, v.runAsync((function() {
                            return window.adobe
                        }))]
                    }))
                }))
            }, e
        }(n),
        _ = function() {
            var n = function(e, t) {
                return n = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(n, e) {
                    n.__proto__ = e
                } || function(n, e) {
                    for (var t in e) Object.prototype.hasOwnProperty.call(e, t) && (n[t] = e[t])
                }, n(e, t)
            };
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

                function o() {
                    this.constructor = e
                }
                n(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
            }
        }(),
        A = function() {
            return A = Object.assign || function(n) {
                for (var e, t = 1, o = arguments.length; t < o; t++)
                    for (var i in e = arguments[t]) Object.prototype.hasOwnProperty.call(e, i) && (n[i] = e[i]);
                return n
            }, A.apply(this, arguments)
        },
        T = function(n, e, t, o) {
            return new(t || (t = Promise))((function(i, r) {
                function a(n) {
                    try {
                        c(o.next(n))
                    } catch (n) {
                        r(n)
                    }
                }

                function l(n) {
                    try {
                        c(o.throw(n))
                    } catch (n) {
                        r(n)
                    }
                }

                function c(n) {
                    var e;
                    n.done ? i(n.value) : (e = n.value, e instanceof t ? e : new t((function(n) {
                        n(e)
                    }))).then(a, l)
                }
                c((o = o.apply(n, e || [])).next())
            }))
        },
        I = function(n, e) {
            var t, o, i, r, a = {
                label: 0,
                sent: function() {
                    if (1 & i[0]) throw i[1];
                    return i[1]
                },
                trys: [],
                ops: []
            };
            return r = {
                next: l(0),
                throw: l(1),
                return: l(2)
            }, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
                return this
            }), r;

            function l(l) {
                return function(c) {
                    return function(l) {
                        if (t) throw new TypeError("Generator is already executing.");
                        for (; r && (r = 0, l[0] && (a = 0)), a;) try {
                            if (t = 1, o && (i = 2 & l[0] ? o.return : l[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) && !(i = i.call(o, l[1])).done) return i;
                            switch (o = 0, i && (l = [2 & l[0], i.value]), l[0]) {
                                case 0:
                                case 1:
                                    i = l;
                                    break;
                                case 4:
                                    return a.label++, {
                                        value: l[1],
                                        done: !1
                                    };
                                case 5:
                                    a.label++, o = l[1], l = [0];
                                    continue;
                                case 7:
                                    l = a.ops.pop(), a.trys.pop();
                                    continue;
                                default:
                                    if (!(i = a.trys, (i = i.length > 0 && i[i.length - 1]) || 6 !== l[0] && 2 !== l[0])) {
                                        a = 0;
                                        continue
                                    }
                                    if (3 === l[0] && (!i || l[1] > i[0] && l[1] < i[3])) {
                                        a.label = l[1];
                                        break
                                    }
                                    if (6 === l[0] && a.label < i[1]) {
                                        a.label = i[1], i = l;
                                        break
                                    }
                                    if (i && a.label < i[2]) {
                                        a.label = i[2], a.ops.push(l);
                                        break
                                    }
                                    i[2] && a.ops.pop(), a.trys.pop();
                                    continue
                            }
                            l = e.call(n, a)
                        } catch (n) {
                            l = [6, n], o = 0
                        } finally {
                            t = i = 0
                        }
                        if (5 & l[0]) throw l[1];
                        return {
                            value: l[0] ? l[1] : void 0,
                            done: !0
                        }
                    }([l, c])
                }
            }
        },
        O = function(n, e, t) {
            if (t || 2 === arguments.length)
                for (var o, i = 0, r = e.length; i < r; i++) !o && i in e || (o || (o = Array.prototype.slice.call(e, 0, i)), o[i] = e[i]);
            return n.concat(o || Array.prototype.slice.call(e))
        },
        P = "adtargeting_behavioralevents",
        E = "performance",
        N = function(n) {
            function e(e) {
                var t, o = n.call(this, e) || this;
                return o.getAlloyLocations = function(n) {
                    for (var e = [], t = 1; t < arguments.length; t++) e[t - 1] = arguments[t];
                    return T(o, O([n], e, !0), void 0, (function(n, e) {
                        var t, o, i, r, a, l, c, u, s, d, v, p, f, w, h;
                        return void 0 === e && (e = !1), I(this, (function(g) {
                            switch (g.label) {
                                case 0:
                                    return t = null !== (l = null == n ? void 0 : n.locations) && void 0 !== l ? l : this._locations, [4, this.getAdobeAlloySdk()];
                                case 1:
                                    if (!g.sent()) return console.warn("Optimization client is unable to find Adobe Web SDK(AlloyJS). Please check that your application is configured correctly."), [2];
                                    if (0 === t.length) return console.error("Location must be provided to fetch activity details via Adobe Web SDK(AlloyJS)."), null === (c = window.newrelic) || void 0 === c || c.addPageAction("EXP_OPTIMIZATION_CLIENT_ALLOY_NO_LOCATIONS", {
                                        errorMessage: "Location must be provided to fetch activity details via Adobe Web SDK(AlloyJS)."
                                    }), [2];
                                    g.label = 2;
                                case 2:
                                    return g.trys.push([2, 5, , 6]), [4, null === (u = window.analyticsClient) || void 0 === u ? void 0 : u.isInitialized()];
                                case 3:
                                    return g.sent(), o = null === (d = null === (s = null === window || void 0 === window ? void 0 : window.NikePrivacy) || void 0 === s ? void 0 : s.permissions.get()) || void 0 === d ? void 0 : d.map((function(n) {
                                        var e = n.category;
                                        return n.isEnabled ? e : null
                                    })).filter(Boolean), [P, E].every((function(n) {
                                        return null == o ? void 0 : o.includes(n)
                                    })) ? (i = this.getSendEventObject(t), [4, window.alloy("sendEvent", i)]) : (console.warn("No UGP permissions. Cannot fetch Adobe Alloy-Target locations."), null === (v = window.newrelic) || void 0 === v || v.addPageAction("EXP_OPTIMIZATION_CLIENT_ALLOY_NO_UGP_PERMISSION", {
                                        errorMessage: "No UGP permissions. Cannot fetch Adobe Alloy-Target locations.",
                                        locations: t
                                    }), [2]);
                                case 4:
                                    return r = g.sent(), null === (p = window.newrelic) || void 0 === p || p.addPageAction("EXP_OPTIMIZATION_CLIENT_ALLOY_SUCCESS", {
                                        locations: t
                                    }), [2, this.transformAlloyOffer(null == r ? void 0 : r.decisions, e)];
                                case 5:
                                    return a = g.sent(), (null === (f = window.newrelic) || void 0 === f ? void 0 : f.noticeError) && (null === (w = window.newrelic) || void 0 === w || w.addPageAction("EXP_OPTIMIZATION_CLIENT_ALLOY_ERROR", {
                                        host: window.location.host,
                                        errorName: a.name,
                                        errorMessage: a.message,
                                        stackTrace: null !== (h = a.stack) && void 0 !== h ? h : "",
                                        locations: t.length ? t : null
                                    })), console.error("Failed to find locations: ".concat(a.message)), [3, 6];
                                case 6:
                                    return [2]
                            }
                        }))
                    }))
                }, o.getLocationName = function(n) {
                    var e = [];
                    return n.map((function(n) {
                        e.push(n.name)
                    })), e
                }, o.getLocationParameters = function(n) {
                    var e = {};
                    return n.map((function(n) {
                        e = A(A({}, e), n.parameters)
                    })), e
                }, o.transformAlloyOffer = function(n, e) {
                    var t = [];
                    if (n.forEach((function(n) {
                            var i, r, a, l, c, u, s, d = {
                                name: null === (i = null == n ? void 0 : n.items[0]) || void 0 === i ? void 0 : i.meta["activity.name"],
                                analytics: null === (a = null === (r = null == n ? void 0 : n.scopeDetails) || void 0 === r ? void 0 : r.characteristics) || void 0 === a ? void 0 : a.analyticsToken,
                                content: null === (c = null === (l = null == n ? void 0 : n.items[0]) || void 0 === l ? void 0 : l.data) || void 0 === c ? void 0 : c.content,
                                responseTokens: {
                                    "experience.name": null === (u = null == n ? void 0 : n.items[0]) || void 0 === u ? void 0 : u.meta["experience.name"],
                                    "activity.name": null === (s = null == n ? void 0 : n.items[0]) || void 0 === s ? void 0 : s.meta["activity.name"]
                                },
                                experimentActivatedCallback: function() {}
                            };
                            if (d.analytics) {
                                var v = function() {
                                    var n;
                                    try {
                                        return o.sendAdobeAnalyticsEvent(d), !0
                                    } catch (e) {
                                        return window.newrelic && window.newrelic.addPageAction("OPTIMIZATION_CLIENT_ANALTICS_SEND_ERROR", {
                                            host: window.location.host,
                                            errorName: e.name,
                                            errorMessage: e.message,
                                            stackTrace: null !== (n = e.stack) && void 0 !== n ? n : ""
                                        }), console.error("Failed to send Analytics: ".concat(e.message)), !1
                                    } finally {
                                        d.experimentActivatedCallback = function() {}
                                    }
                                };
                                e ? d.experimentActivatedCallback = v : v()
                            }
                            t.push(d)
                        })), t && t.length > 0) return {
                        locations: t
                    }
                }, o.getSendEventObject = function(n) {
                    return {
                        renderDecisions: !0,
                        decisionScopes: o.getLocationName(n),
                        data: {
                            __adobe: {
                                target: o.getLocationParameters(n)
                            }
                        }
                    }
                }, null === (t = window.newrelic) || void 0 === t || t.addPageAction("EXP_OPTIMIZATION_CLIENT_INITIALIZED", {}), o
            }
            return _(e, n), e.prototype.sendAdobeAnalyticsEvent = function(n) {
                var e, t, o, r, a, l = u(window);
                window.webShellClient.analytics.track(i, A({
                    "experience.name": null === (t = null === (e = null == n ? void 0 : n.options) || void 0 === e ? void 0 : e[0]) || void 0 === t ? void 0 : t.responseTokens["experience.name"],
                    "activity.name": null === (r = null === (o = null == n ? void 0 : n.options) || void 0 === o ? void 0 : o[0]) || void 0 === r ? void 0 : r.responseTokens["activity.name"],
                    abTest: {
                        analytics: null === (a = n.analytics) || void 0 === a ? void 0 : a.payload.tnta
                    }
                }, l), {
                    writeKey: "2iv4Qa7rFEipAs4iE850BkBpTYQvlAFZ"
                })
            }, e.prototype.getAdobeAlloySdk = function() {
                return T(this, void 0, void 0, (function() {
                    return I(this, (function(n) {
                        return [2, v.runAsync((function() {
                            return window.alloy
                        }))]
                    }))
                }))
            }, e
        }(e),
        k = function() {
            function n(n) {
                var e = this;
                this.generateGlobalMbox = function() {
                    r().then((function(n) {
                        var t, o, i, r = n.loggedIn,
                            a = n.userId,
                            l = {
                                appCountry: null === (o = null === (t = e._window.webShellClient) || void 0 === t ? void 0 : t.locale.get().country) || void 0 === o ? void 0 : o.toUpperCase(),
                                appLanguage: null === (i = e._window.webShellClient) || void 0 === i ? void 0 : i.locale.get().language,
                                browserWidth: e._window.innerWidth
                            };
                        e._window.targetPageParamsAll = function() {
                            return l.profile = {
                                loggedIn: r,
                                userId: a
                            }, l
                        }
                    })).catch((function(n) {
                        var t;
                        console.warn({
                            error: n,
                            cmsg: "Global mbox param init is failed.."
                        }), null === (t = e._window.newrelic) || void 0 === t || t.addPageAction("EXP_OPTIMIZATION_CLIENT_ERROR", {
                            errorMessage: "Global mbox param init is failed."
                        })
                    }))
                }, this._window = n
            }
            return n.prototype.init = function() {
                this.generateGlobalMbox()
            }, n
        }(),
        C = function(n, e, t, o) {
            return new(t || (t = Promise))((function(i, r) {
                function a(n) {
                    try {
                        c(o.next(n))
                    } catch (n) {
                        r(n)
                    }
                }

                function l(n) {
                    try {
                        c(o.throw(n))
                    } catch (n) {
                        r(n)
                    }
                }

                function c(n) {
                    var e;
                    n.done ? i(n.value) : (e = n.value, e instanceof t ? e : new t((function(n) {
                        n(e)
                    }))).then(a, l)
                }
                c((o = o.apply(n, e || [])).next())
            }))
        },
        S = function(n, e) {
            var t, o, i, r, a = {
                label: 0,
                sent: function() {
                    if (1 & i[0]) throw i[1];
                    return i[1]
                },
                trys: [],
                ops: []
            };
            return r = {
                next: l(0),
                throw: l(1),
                return: l(2)
            }, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
                return this
            }), r;

            function l(l) {
                return function(c) {
                    return function(l) {
                        if (t) throw new TypeError("Generator is already executing.");
                        for (; r && (r = 0, l[0] && (a = 0)), a;) try {
                            if (t = 1, o && (i = 2 & l[0] ? o.return : l[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) && !(i = i.call(o, l[1])).done) return i;
                            switch (o = 0, i && (l = [2 & l[0], i.value]), l[0]) {
                                case 0:
                                case 1:
                                    i = l;
                                    break;
                                case 4:
                                    return a.label++, {
                                        value: l[1],
                                        done: !1
                                    };
                                case 5:
                                    a.label++, o = l[1], l = [0];
                                    continue;
                                case 7:
                                    l = a.ops.pop(), a.trys.pop();
                                    continue;
                                default:
                                    if (!(i = a.trys, (i = i.length > 0 && i[i.length - 1]) || 6 !== l[0] && 2 !== l[0])) {
                                        a = 0;
                                        continue
                                    }
                                    if (3 === l[0] && (!i || l[1] > i[0] && l[1] < i[3])) {
                                        a.label = l[1];
                                        break
                                    }
                                    if (6 === l[0] && a.label < i[1]) {
                                        a.label = i[1], i = l;
                                        break
                                    }
                                    if (i && a.label < i[2]) {
                                        a.label = i[2], a.ops.push(l);
                                        break
                                    }
                                    i[2] && a.ops.pop(), a.trys.pop();
                                    continue
                            }
                            l = e.call(n, a)
                        } catch (n) {
                            l = [6, n], o = 0
                        } finally {
                            t = i = 0
                        }
                        if (5 & l[0]) throw l[1];
                        return {
                            value: l[0] ? l[1] : void 0,
                            done: !0
                        }
                    }([l, c])
                }
            }
        };

    function x(n) {
        return C(this, void 0, void 0, (function() {
            function e() {
                return C(this, void 0, void 0, (function() {
                    return S(this, (function(n) {
                        return i.optimization.getLocations = t, i.optimization.__WS_UNSTABLE__.getLocations = t, i.optimization.getAlloyLocations = o, [2]
                    }))
                }))
            }
            var t, o, i, r;
            return S(this, (function(a) {
                switch (a.label) {
                    case 0:
                        return t = new m([]).getLocations, o = new N([]).getAlloyLocations, new k(n).init(), i = n.webShellClient, void 0 !== n && (null === (r = n.newrelic) || void 0 === r || r.addPageAction("OPTIMIZATION_CLIENT_INITIALIZED", {})), [4, e()];
                    case 1:
                        return a.sent(), [2]
                }
            }))
        }))
    }! function(n) {
        C(this, void 0, void 0, (function() {
            return S(this, (function(e) {
                switch (e.label) {
                    case 0:
                        return n.webShellClient ? [4, x(n)] : [3, 2];
                    case 1:
                        e.sent(), e.label = 2;
                    case 2:
                        return [2]
                }
            }))
        }))
    }(window)
})();