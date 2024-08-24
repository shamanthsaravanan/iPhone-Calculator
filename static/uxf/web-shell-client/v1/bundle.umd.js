/*! For license information please see bundle.umd.js.LICENSE.txt */ ! function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.webShellClient = t() : e.webShellClient = t()
}(self, (() => (() => {
    var e, t, i, n, o = {
            596: (e, t) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                })
            },
            435: (e, t) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                })
            },
            986: (e, t) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                })
            },
            851: (e, t) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                })
            },
            471: (e, t) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                })
            },
            602: (e, t) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.WebShellOptimization = void 0, t.WebShellOptimization = class {
                    constructor(e) {
                        this._locations = [], e && (this._locations = e)
                    }
                }
            },
            227: (e, t) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                })
            },
            531: (e, t) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                })
            },
            864: (e, t) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                })
            },
            190: (e, t) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                })
            },
            634: function(e, t, i) {
                "use strict";
                var n = this && this.__createBinding || (Object.create ? function(e, t, i, n) {
                        void 0 === n && (n = i), Object.defineProperty(e, n, {
                            enumerable: !0,
                            get: function() {
                                return t[i]
                            }
                        })
                    } : function(e, t, i, n) {
                        void 0 === n && (n = i), e[n] = t[i]
                    }),
                    o = this && this.__exportStar || function(e, t) {
                        for (var i in e) "default" === i || Object.prototype.hasOwnProperty.call(t, i) || n(t, e, i)
                    };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), o(i(864), t), o(i(190), t)
            },
            78: function(e, t, i) {
                "use strict";
                var n = this && this.__createBinding || (Object.create ? function(e, t, i, n) {
                        void 0 === n && (n = i), Object.defineProperty(e, n, {
                            enumerable: !0,
                            get: function() {
                                return t[i]
                            }
                        })
                    } : function(e, t, i, n) {
                        void 0 === n && (n = i), e[n] = t[i]
                    }),
                    o = this && this.__exportStar || function(e, t) {
                        for (var i in e) "default" === i || Object.prototype.hasOwnProperty.call(t, i) || n(t, e, i)
                    };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), o(i(634), t), o(i(596), t), o(i(435), t), o(i(986), t), o(i(851), t), o(i(471), t), o(i(602), t), o(i(227), t), o(i(531), t)
            },
            781: (e, t, i) => {
                var n, o, a;
                void 0 === (o = "function" == typeof(n = a = function() {
                    function e() {
                        for (var e = 0, t = {}; e < arguments.length; e++) {
                            var i = arguments[e];
                            for (var n in i) t[n] = i[n]
                        }
                        return t
                    }

                    function t(e) {
                        return e.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent)
                    }
                    return function i(n) {
                        function o() {}

                        function a(t, i, a) {
                            if ("undefined" != typeof document) {
                                "number" == typeof(a = e({
                                    path: "/"
                                }, o.defaults, a)).expires && (a.expires = new Date(1 * new Date + 864e5 * a.expires)), a.expires = a.expires ? a.expires.toUTCString() : "";
                                try {
                                    var s = JSON.stringify(i);
                                    /^[\{\[]/.test(s) && (i = s)
                                } catch (e) {}
                                i = n.write ? n.write(i, t) : encodeURIComponent(String(i)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), t = encodeURIComponent(String(t)).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent).replace(/[\(\)]/g, escape);
                                var r = "";
                                for (var l in a) a[l] && (r += "; " + l, !0 !== a[l] && (r += "=" + a[l].split(";")[0]));
                                return document.cookie = t + "=" + i + r
                            }
                        }

                        function s(e, i) {
                            if ("undefined" != typeof document) {
                                for (var o = {}, a = document.cookie ? document.cookie.split("; ") : [], s = 0; s < a.length; s++) {
                                    var r = a[s].split("="),
                                        l = r.slice(1).join("=");
                                    i || '"' !== l.charAt(0) || (l = l.slice(1, -1));
                                    try {
                                        var _ = t(r[0]);
                                        if (l = (n.read || n)(l, _) || t(l), i) try {
                                            l = JSON.parse(l)
                                        } catch (e) {}
                                        if (o[_] = l, e === _) break
                                    } catch (e) {}
                                }
                                return e ? o[e] : o
                            }
                        }
                        return o.set = a, o.get = function(e) {
                            return s(e, !1)
                        }, o.getJSON = function(e) {
                            return s(e, !0)
                        }, o.remove = function(t, i) {
                            a(t, "", e(i, {
                                expires: -1
                            }))
                        }, o.defaults = {}, o.withConverter = i, o
                    }((function() {}))
                }) ? n.call(t, i, t, e) : n) || (e.exports = o), e.exports = a()
            },
            292: (e, t) => {
                "use strict";
                var i, n, o, a, s, r, l, _, d, c, E, u, I, T;
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.DISABLE_GUEST_SESSION_IFRAME = t.DEFAULT_USER_LOCATION_DATA = t.DEFAULT_LOCALE_DATA = t.DEFAULT_WEB_SHELL_CLIENT_INFO = t.ANALYTICS_SCRIPT = t.PRIVACY_CORE_SCRIPT = t.CN_GUEST_SESSION_SCRIPT = t.DATA_CAPTURE_SCRIPT = t.MODAL_ROOT_ID = t.VENDOR_SCRIPT_REACT_DOM_URL = t.VENDOR_SCRIPT_REACT_URL = t.HOST_NAME = t.V3 = t.NAV_VERSION = t.ENABLE_LEGACY_NAV_DELIVERY = t.ENABLE_ASYNC_CHAT = t.KEEPALIVE = t.PRE_FETCH_DEPENDENCIES = void 0, t.PRE_FETCH_DEPENDENCIES = {
                    REACT: "React",
                    REACT_DOM: "ReactDOM",
                    REMOTE: "Remote"
                }, t.KEEPALIVE = {
                    HTTP_KEEPALIVE_TIMEOUT: 61e3,
                    HTTP_HEADERS_TIMEOUT: 65e3
                }, t.ENABLE_ASYNC_CHAT = null !== (n = null !== (i = {
                    WEB_SHELL_CLIENT_VERSION: "2.29.2",
                    NEXT_PUBLIC_CLIENT_ID: "4fd2d5e7db76e0f85a6bb56721bd51df",
                    NEXT_PUBLIC_HOST_NAME: "www.nike.com",
                    NEXT_PUBLIC_AUTHORITY: "https://accounts.nike.com"
                }.NEXT_PUBLIC_ENABLE_ASYNC_CHAT) && void 0 !== i ? i : {
                    WEB_SHELL_CLIENT_VERSION: "2.29.2",
                    NEXT_PUBLIC_CLIENT_ID: "4fd2d5e7db76e0f85a6bb56721bd51df",
                    NEXT_PUBLIC_HOST_NAME: "www.nike.com",
                    NEXT_PUBLIC_AUTHORITY: "https://accounts.nike.com"
                }.ENABLE_ASYNC_CHAT) && void 0 !== n ? n : "false", t.ENABLE_LEGACY_NAV_DELIVERY = null !== (a = null !== (o = {
                    WEB_SHELL_CLIENT_VERSION: "2.29.2",
                    NEXT_PUBLIC_CLIENT_ID: "4fd2d5e7db76e0f85a6bb56721bd51df",
                    NEXT_PUBLIC_HOST_NAME: "www.nike.com",
                    NEXT_PUBLIC_AUTHORITY: "https://accounts.nike.com"
                }.NEXT_PUBLIC_ENABLE_LEGACY_NAV_DELIVERY) && void 0 !== o ? o : {
                    WEB_SHELL_CLIENT_VERSION: "2.29.2",
                    NEXT_PUBLIC_CLIENT_ID: "4fd2d5e7db76e0f85a6bb56721bd51df",
                    NEXT_PUBLIC_HOST_NAME: "www.nike.com",
                    NEXT_PUBLIC_AUTHORITY: "https://accounts.nike.com"
                }.ENABLE_LEGACY_NAV_DELIVERY) && void 0 !== a ? a : "false", t.NAV_VERSION = "navVersion", t.V3 = "v3", t.HOST_NAME = null !== (r = null !== (s = {
                    WEB_SHELL_CLIENT_VERSION: "2.29.2",
                    NEXT_PUBLIC_CLIENT_ID: "4fd2d5e7db76e0f85a6bb56721bd51df",
                    NEXT_PUBLIC_HOST_NAME: "www.nike.com",
                    NEXT_PUBLIC_AUTHORITY: "https://accounts.nike.com"
                }.WS_HOST_NAME) && void 0 !== s ? s : "www.nike.com") && void 0 !== r ? r : {
                    WEB_SHELL_CLIENT_VERSION: "2.29.2",
                    NEXT_PUBLIC_CLIENT_ID: "4fd2d5e7db76e0f85a6bb56721bd51df",
                    NEXT_PUBLIC_HOST_NAME: "www.nike.com",
                    NEXT_PUBLIC_AUTHORITY: "https://accounts.nike.com"
                }.HOST_NAME, t.VENDOR_SCRIPT_REACT_URL = `https://${t.HOST_NAME}/assets/vendor/react/17.0.2/react.production.min.js`, t.VENDOR_SCRIPT_REACT_DOM_URL = `https://${t.HOST_NAME}/assets/vendor/react-dom/17.0.2/react-dom.production.min.js`, t.MODAL_ROOT_ID = "modal-root", t.DATA_CAPTURE_SCRIPT = null !== (_ = null !== (l = {
                    WEB_SHELL_CLIENT_VERSION: "2.29.2",
                    NEXT_PUBLIC_CLIENT_ID: "4fd2d5e7db76e0f85a6bb56721bd51df",
                    NEXT_PUBLIC_HOST_NAME: "www.nike.com",
                    NEXT_PUBLIC_AUTHORITY: "https://accounts.nike.com"
                }.WS_DATA_CAPTURE_SCRIPT) && void 0 !== l ? l : {
                    WEB_SHELL_CLIENT_VERSION: "2.29.2",
                    NEXT_PUBLIC_CLIENT_ID: "4fd2d5e7db76e0f85a6bb56721bd51df",
                    NEXT_PUBLIC_HOST_NAME: "www.nike.com",
                    NEXT_PUBLIC_AUTHORITY: "https://accounts.nike.com"
                }.NEXT_PUBLIC_DATA_CAPTURE_SCRIPT) && void 0 !== _ ? _ : {
                    WEB_SHELL_CLIENT_VERSION: "2.29.2",
                    NEXT_PUBLIC_CLIENT_ID: "4fd2d5e7db76e0f85a6bb56721bd51df",
                    NEXT_PUBLIC_HOST_NAME: "www.nike.com",
                    NEXT_PUBLIC_AUTHORITY: "https://accounts.nike.com"
                }.DATA_CAPTURE_SCRIPT, t.CN_GUEST_SESSION_SCRIPT = null !== (d = {
                    WEB_SHELL_CLIENT_VERSION: "2.29.2",
                    NEXT_PUBLIC_CLIENT_ID: "4fd2d5e7db76e0f85a6bb56721bd51df",
                    NEXT_PUBLIC_HOST_NAME: "www.nike.com",
                    NEXT_PUBLIC_AUTHORITY: "https://accounts.nike.com"
                }.NEXT_PUBLIC_CN_GUEST_SESSION_SCRIPT) && void 0 !== d ? d : {
                    WEB_SHELL_CLIENT_VERSION: "2.29.2",
                    NEXT_PUBLIC_CLIENT_ID: "4fd2d5e7db76e0f85a6bb56721bd51df",
                    NEXT_PUBLIC_HOST_NAME: "www.nike.com",
                    NEXT_PUBLIC_AUTHORITY: "https://accounts.nike.com"
                }.CN_GUEST_SESSION_SCRIPT, t.PRIVACY_CORE_SCRIPT = null !== (c = {
                    WEB_SHELL_CLIENT_VERSION: "2.29.2",
                    NEXT_PUBLIC_CLIENT_ID: "4fd2d5e7db76e0f85a6bb56721bd51df",
                    NEXT_PUBLIC_HOST_NAME: "www.nike.com",
                    NEXT_PUBLIC_AUTHORITY: "https://accounts.nike.com"
                }.PRIVACY_CORE_SCRIPT) && void 0 !== c ? c : `https://${t.HOST_NAME}/static/privacy-core/public/privacy-core.js`, t.ANALYTICS_SCRIPT = null !== (u = null !== (E = {
                    WEB_SHELL_CLIENT_VERSION: "2.29.2",
                    NEXT_PUBLIC_CLIENT_ID: "4fd2d5e7db76e0f85a6bb56721bd51df",
                    NEXT_PUBLIC_HOST_NAME: "www.nike.com",
                    NEXT_PUBLIC_AUTHORITY: "https://accounts.nike.com"
                }.WS_ANALYTICS_SCRIPT) && void 0 !== E ? E : {
                    WEB_SHELL_CLIENT_VERSION: "2.29.2",
                    NEXT_PUBLIC_CLIENT_ID: "4fd2d5e7db76e0f85a6bb56721bd51df",
                    NEXT_PUBLIC_HOST_NAME: "www.nike.com",
                    NEXT_PUBLIC_AUTHORITY: "https://accounts.nike.com"
                }.NEXT_PUBLIC_ANALYTICS_SCRIPT) && void 0 !== u ? u : {
                    WEB_SHELL_CLIENT_VERSION: "2.29.2",
                    NEXT_PUBLIC_CLIENT_ID: "4fd2d5e7db76e0f85a6bb56721bd51df",
                    NEXT_PUBLIC_HOST_NAME: "www.nike.com",
                    NEXT_PUBLIC_AUTHORITY: "https://accounts.nike.com"
                }.ANALYTICS_SCRIPT, t.DEFAULT_WEB_SHELL_CLIENT_INFO = {
                    identityProvider: null
                }, t.DEFAULT_LOCALE_DATA = {
                    cloudUrlFragment: "",
                    country: "us",
                    countryName: "United States",
                    countryNames: {
                        en: "United States"
                    },
                    currency: "USD",
                    currencySymbol: "$",
                    default: !0,
                    hreflang: "en-US",
                    intl: "en-US",
                    langRegion: "en-US",
                    language: "en",
                    urlParam: "en",
                    translationsLanguage: "en-US"
                }, t.DEFAULT_USER_LOCATION_DATA = {
                    country: "",
                    state: "",
                    latitude: "",
                    longitude: ""
                }, t.DISABLE_GUEST_SESSION_IFRAME = null !== (T = null !== (I = {
                    WEB_SHELL_CLIENT_VERSION: "2.29.2",
                    NEXT_PUBLIC_CLIENT_ID: "4fd2d5e7db76e0f85a6bb56721bd51df",
                    NEXT_PUBLIC_HOST_NAME: "www.nike.com",
                    NEXT_PUBLIC_AUTHORITY: "https://accounts.nike.com"
                }.NEXT_PUBLIC_DISABLE_GUEST_SESSION_IFRAME) && void 0 !== I ? I : {
                    WEB_SHELL_CLIENT_VERSION: "2.29.2",
                    NEXT_PUBLIC_CLIENT_ID: "4fd2d5e7db76e0f85a6bb56721bd51df",
                    NEXT_PUBLIC_HOST_NAME: "www.nike.com",
                    NEXT_PUBLIC_AUTHORITY: "https://accounts.nike.com"
                }.DISABLE_GUEST_SESSION_IFRAME) && void 0 !== T ? T : "false"
            },
            185: function(e, t, i) {
                "use strict";
                var n = this && this.__createBinding || (Object.create ? function(e, t, i, n) {
                        void 0 === n && (n = i), Object.defineProperty(e, n, {
                            enumerable: !0,
                            get: function() {
                                return t[i]
                            }
                        })
                    } : function(e, t, i, n) {
                        void 0 === n && (n = i), e[n] = t[i]
                    }),
                    o = this && this.__exportStar || function(e, t) {
                        for (var i in e) "default" === i || Object.prototype.hasOwnProperty.call(t, i) || n(t, e, i)
                    };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), o(i(292), t)
            }
        },
        a = {};

    function s(e) {
        var t = a[e];
        if (void 0 !== t) return t.exports;
        var i = a[e] = {
            exports: {}
        };
        return o[e].call(i.exports, i, i.exports, s), i.exports
    }
    s.m = o, s.n = e => {
        var t = e && e.__esModule ? () => e.default : () => e;
        return s.d(t, {
            a: t
        }), t
    }, t = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, s.t = function(i, n) {
        if (1 & n && (i = this(i)), 8 & n) return i;
        if ("object" == typeof i && i) {
            if (4 & n && i.__esModule) return i;
            if (16 & n && "function" == typeof i.then) return i
        }
        var o = Object.create(null);
        s.r(o);
        var a = {};
        e = e || [null, t({}), t([]), t(t)];
        for (var r = 2 & n && i;
            "object" == typeof r && !~e.indexOf(r); r = t(r)) Object.getOwnPropertyNames(r).forEach((e => a[e] = () => i[e]));
        return a.default = () => i, s.d(o, a), o
    }, s.d = (e, t) => {
        for (var i in t) s.o(t, i) && !s.o(e, i) && Object.defineProperty(e, i, {
            enumerable: !0,
            get: t[i]
        })
    }, s.f = {}, s.e = e => Promise.all(Object.keys(s.f).reduce(((t, i) => (s.f[i](e, t), t)), [])), s.u = e => e + ".chunk.cc0d72.js", s.g = function() {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || new Function("return this")()
        } catch (e) {
            if ("object" == typeof window) return window
        }
    }(), s.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), i = {}, n = "webShellClient:", s.l = (e, t, o, a) => {
        if (i[e]) i[e].push(t);
        else {
            var r, l;
            if (void 0 !== o)
                for (var _ = document.getElementsByTagName("script"), d = 0; d < _.length; d++) {
                    var c = _[d];
                    if (c.getAttribute("src") == e || c.getAttribute("data-webpack") == n + o) {
                        r = c;
                        break
                    }
                }
            r || (l = !0, (r = document.createElement("script")).charset = "utf-8", r.timeout = 120, s.nc && r.setAttribute("nonce", s.nc), r.setAttribute("data-webpack", n + o), r.src = e), i[e] = [t];
            var E = (t, n) => {
                    r.onerror = r.onload = null, clearTimeout(u);
                    var o = i[e];
                    if (delete i[e], r.parentNode && r.parentNode.removeChild(r), o && o.forEach((e => e(n))), t) return t(n)
                },
                u = setTimeout(E.bind(null, void 0, {
                    type: "timeout",
                    target: r
                }), 12e4);
            r.onerror = E.bind(null, r.onerror), r.onload = E.bind(null, r.onload), l && document.head.appendChild(r)
        }
    }, s.r = e => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, s.p = "https://www.nike.com/static/uxf/web-shell-client/2.29.2/", (() => {
        var e = {
            179: 0
        };
        s.f.j = (t, i) => {
            var n = s.o(e, t) ? e[t] : void 0;
            if (0 !== n)
                if (n) i.push(n[2]);
                else {
                    var o = new Promise(((i, o) => n = e[t] = [i, o]));
                    i.push(n[2] = o);
                    var a = s.p + s.u(t),
                        r = new Error;
                    s.l(a, (i => {
                        if (s.o(e, t) && (0 !== (n = e[t]) && (e[t] = void 0), n)) {
                            var o = i && ("load" === i.type ? "missing" : i.type),
                                a = i && i.target && i.target.src;
                            r.message = "Loading chunk " + t + " failed.\n(" + o + ": " + a + ")", r.name = "ChunkLoadError", r.type = o, r.request = a, n[1](r)
                        }
                    }), "chunk-" + t, t)
                }
        };
        var t = (t, i) => {
                var n, o, [a, r, l] = i,
                    _ = 0;
                if (a.some((t => 0 !== e[t]))) {
                    for (n in r) s.o(r, n) && (s.m[n] = r[n]);
                    l && l(s)
                }
                for (t && t(i); _ < a.length; _++) o = a[_], s.o(e, o) && e[o] && e[o][0](), e[o] = 0
            },
            i = self.webpackChunkwebShellClient = self.webpackChunkwebShellClient || [];
        i.forEach(t.bind(null, 0)), i.push = t.bind(null, i.push.bind(i))
    })();
    var r, l = {};
    return (null === (r = window.newrelic) || void 0 === r ? void 0 : r.addRelease) && window.newrelic.addRelease("web-shell-client", "2.29.2"), (() => {
        "use strict";
        s.r(l), s.d(l, {
            DotcomWebShellLocale: () => t,
            DotcomWebShellUserLocation: () => c,
            GEOLOC_COOKIE_NAME: () => _,
            ModalManager: () => o,
            __VERSION__: () => q,
            __WS_INTERNAL__: () => Q,
            analytics: () => G,
            appName: () => F,
            default: () => ee,
            factory: () => X,
            identity: () => x,
            locale: () => z,
            modalManager: () => $,
            optimization: () => Z,
            translations: () => K,
            userLocation: () => J
        });
        var e = s(185);
        class t {
            constructor(t = e.DEFAULT_LOCALE_DATA) {
                this.hasTrackedInit = !1, this.get = () => {
                    var e;
                    return "undefined" == typeof window ? console.warn(["Warning! shell.locale.get() is only meant to be used on the client. We don't know what the current locale is on the server without extra info.", "Use parseRequestLocale from @nike/web-shell-server-utils to get the locale server-side.", "If you need the locale server-side in React, pass it to the LocaleProvider via the locale prop."].join("\n\n")) : this.hasTrackedInit || (null === (e = window.newrelic) || void 0 === e || e.addPageAction("WEB_SHELL_CLIENT_LOCALE_INITIALIZED", {
                        webShellClientVersion: null !== "2.29.2" ? "2.29.2" : ""
                    }), this.hasTrackedInit = !0), this.current
                }, this.current = t
            }
        }
        t.defaultLocale = e.DEFAULT_LOCALE_DATA;
        class i {
            constructor(e) {
                this.hasTrackedInit = !1, this.fetch = async (e, t = {}) => {
                    var i;
                    this.hasTrackedInit || "undefined" == typeof window || (null === (i = window.newrelic) || void 0 === i || i.addPageAction("WEB_SHELL_CLIENT_TRANSLATIONS_INITIALIZED", {
                        webShellClientVersion: null !== "2.29.2" ? "2.29.2" : ""
                    }), this.hasTrackedInit = !0);
                    const n = e => {
                        var i;
                        return `${String(null!==(i=t.urlBase)&&void 0!==i?i:"https://www.nike.com/assets/i18n")}/${e}/${String(this.locale.get().hreflang)}.json`
                    };
                    try {
                        const t = await Promise.all(e.map((async e => fetch(n(e)))));
                        return (await Promise.all(t.map((async e => await e.json())))).reduce(((t, i, n) => Object.assign(t, {
                            [e[n]]: i
                        })), {})
                    } catch (e) {
                        return console.error("Failed to fetch Translations", e), {}
                    }
                }, this.locale = e, this.formatMessage.bind(this)
            }
            formatMessage(e, t = {}) {
                return e.replace(/\{(.*?)\}/gu, ((e, i) => t[i]))
            }
        }
        const n = "#modal-root";
        class o {
            constructor(e = n) {
                this.setActiveModalID = e => {
                    this.activeModalID = e
                }, this.setReferringElement = e => {
                    this.refEl = e
                }, this.closeVanilla = () => {}, this.rootSelector = e, this.activeModalID = null
            }
        }
        var a = s(781),
            r = s.n(a);
        const _ = "geoloc",
            d = {
                cc: "country",
                rc: "state",
                la: "latitude",
                lo: "longitude"
            };
        class c {
            constructor() {
                this.readCookie = () => {
                    var t, i, n;
                    const o = Object.assign({}, e.DEFAULT_USER_LOCATION_DATA);
                    if ("undefined" == typeof document) return o;
                    const a = null !== (i = null === (t = r().get(_)) || void 0 === t ? void 0 : t.split(",").reduce(((e, t) => {
                        const [i, n] = t.split("=");
                        return e[i] = n, e
                    }), {})) && void 0 !== i ? i : {};
                    for (const [e, t] of Object.entries(d)) o[t] = null !== (n = a[e]) && void 0 !== n ? n : "";
                    return o
                }, this.get = () => this.current, this.current = this.readCookie()
            }
        }
        c.defaultUserLocation = Object.assign({}, e.DEFAULT_USER_LOCATION_DATA);
        let E = Object.assign({}, e.DEFAULT_WEB_SHELL_CLIENT_INFO);
        const u = () => E,
            I = function(e) {
                E = Object.assign(Object.assign({}, E), {
                    identityProvider: e
                })
            },
            T = (e, t = {}) => {
                var i, n;
                if ("undefined" != typeof window) {
                    const o = (e => {
                        const t = JSON.stringify(e);
                        return JSON.parse(t)
                    })(Object.assign(Object.assign({}, t), {
                        webShellClientVersion: null !== (i = window.webShellClient.__VERSION__) && void 0 !== i ? i : ""
                    }));
                    null === (n = window.newrelic) || void 0 === n || n.addPageAction(e, o)
                }
            };
        var v, L = new Uint8Array(16);

        function N() {
            if (!v && !(v = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" != typeof msCrypto && "function" == typeof msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto))) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
            return v(L)
        }
        const w = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
        for (var f = [], S = 0; S < 256; ++S) f.push((S + 256).toString(16).substr(1));
        const p = function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                    i = (f[e[t + 0]] + f[e[t + 1]] + f[e[t + 2]] + f[e[t + 3]] + "-" + f[e[t + 4]] + f[e[t + 5]] + "-" + f[e[t + 6]] + f[e[t + 7]] + "-" + f[e[t + 8]] + f[e[t + 9]] + "-" + f[e[t + 10]] + f[e[t + 11]] + f[e[t + 12]] + f[e[t + 13]] + f[e[t + 14]] + f[e[t + 15]]).toLowerCase();
                if (! function(e) {
                        return "string" == typeof e && w.test(e)
                    }(i)) throw TypeError("Stringified UUID is invalid");
                return i
            },
            h = function(e, t, i) {
                var n = (e = e || {}).random || (e.rng || N)();
                if (n[6] = 15 & n[6] | 64, n[8] = 63 & n[8] | 128, t) {
                    i = i || 0;
                    for (var o = 0; o < 16; ++o) t[i + o] = n[o];
                    return t
                }
                return p(n)
            },
            C = ["https://www.nike.com", "https://localhost.nike.com", "https://gs-checkout.nike.com", "https://gs.nike.com", "https://gs-profilemanagement.nike.com", "https://www.nike.com.cn", "https://uat.nike.com"],
            m = e => C.includes(e);
        class g {
            constructor() {
                this._visitDataIsResolved = !1, this._gsIframeElement = null, this._visitData = {
                    visitId: 0,
                    visitorId: ""
                }, this.initializeVisitData = () => {
                    window.addEventListener("message", this._handleMessageEvent), this._addResetVisitDataListener(), this._postGetVisitDataMessageToGS()
                }, this._handleMessageEvent = e => {
                    if (m(e.origin)) switch (e.data.type) {
                        case "gsIframeReady":
                            this._postGetVisitDataMessageToGS();
                            break;
                        case "setVisitData":
                            this._setVisitData(e.data.visitData);
                            break;
                        case "generateVisitData":
                            this._generateVisitData()
                    }
                }, this._postGetVisitDataMessageToGS = () => {
                    var e;
                    const t = this._guestSessionIframe;
                    t && (null === (e = t.contentWindow) || void 0 === e || e.postMessage({
                        type: "getVisitData"
                    }, "https://www.nike.com"))
                }, this._setVisitData = e => {
                    this._visitData.visitId === e.visitId && this._visitData.visitorId === e.visitorId || (T("WEB_SHELL_CLIENT_IDENTITY_GSM_SET_VISIT_DATA"), this._visitData = e, this._visitDataIsResolved || window.postMessage({
                        type: "visitDataReady",
                        visitData: e
                    }, location.origin), this._visitDataIsResolved = !0)
                }, this._generateNewVisitData = () => ({
                    visitId: 1,
                    visitorId: h()
                }), this._generateVisitData = () => {
                    var e;
                    const t = this._guestSessionIframe;
                    if (!t) return void T("WEB_SHELL_CLIENT_IDENTITY_GSM_GENERATE_IFRAME_NOT_FOUND_ERROR");
                    T("WEB_SHELL_CLIENT_IDENTITY_GSM_GENERATE_VISIT_DATA");
                    const i = this._generateNewVisitData();
                    null === (e = t.contentWindow) || void 0 === e || e.postMessage({
                        type: "setVisitData",
                        visitData: i
                    }, "https://www.nike.com"), this._setVisitData(i)
                }, this._getVisitDataError = () => {
                    if (this._guestSessionIframe) {
                        if (!m(window.location.origin)) throw T("WEB_SHELL_CLIENT_IDENTITY_GSM_GET_VISIT_DATA_UNSAFE_ORIGIN_ERROR"), Error('"getVisitData" could not resolve - origin not whitelisted.');
                        T("WEB_SHELL_CLIENT_IDENTITY_GSM_GET_VISIT_DATA_UNRESOLVED_ERROR")
                    } else console.error('"getVisitData" could not resolve - No guest session iframe found by "guest-session-iframe" id'), T("WEB_SHELL_CLIENT_IDENTITY_GSM_GET_VISIT_DATA_IFRAME_NOT_FOUND_ERROR")
                }, this.getVisitData = async () => {
                    if (T("WEB_SHELL_CLIENT_IDENTITY_GSM_GET_VISIT_DATA"), !this._visitDataIsResolved) {
                        const e = setTimeout(this._getVisitDataError, 2e3);
                        return new Promise((t => {
                            window.addEventListener("message", (i => {
                                m(i.origin) && "visitDataReady" === i.data.type && (clearTimeout(e), this._setVisitData(i.data.visitData), t({
                                    visitId: i.data.visitData.visitId,
                                    visit: i.data.visitData.visitId,
                                    visitorId: i.data.visitData.visitorId,
                                    visitor: i.data.visitData.visitorId
                                }))
                            }))
                        }))
                    }
                    return {
                        visitId: this._visitData.visitId,
                        visit: this._visitData.visitId,
                        visitor: this._visitData.visitorId,
                        visitorId: this._visitData.visitorId
                    }
                }, this.resetVisitData = () => {
                    T("WEB_SHELL_CLIENT_IDENTITY_GSM_RESET_VISIT_DATA"), this._generateVisitData(), setTimeout((() => {
                        window.localStorage.setItem("wsc_user_logged_out", "true")
                    }), 10)
                }
            }
            get _guestSessionIframe() {
                if (!this._gsIframeElement) {
                    const e = document.getElementById("guest-session-iframe");
                    this._gsIframeElement = e
                }
                return this._gsIframeElement
            }
            _addResetVisitDataListener() {
                window.addEventListener("storage", (e => {
                    "wsc_user_logged_out" === e.key && "true" === e.newValue && (this._postGetVisitDataMessageToGS(), window.localStorage.removeItem("wsc_user_logged_out"))
                }))
            }
        }
        const O = e => !("EMPLOYEE" !== (null == e ? void 0 : e.userType) && !(null == e ? void 0 : e.swoosh)),
            b = /^(?:\/auth\/(?:login|logout|silent-renew))|^(?:\/(?:[a-z]{2}\/(?:[a-z]{2}(?:-[A-z]{4})?\/)?)?(?:login|register))/,
            A = () => null === b.exec(window.location.pathname),
            R = "ni_s",
            y = e => {
                r().set(R, "1", {
                    domain: e,
                    path: "/",
                    expires: 365
                })
            },
            D = () => "1" === r().get(R);

        function U() {
            const t = new g,
                i = "www.nike.com" === e.HOST_NAME ? "nike.com" : "nike.com.cn",
                n = (async () => {
                    var e, i;
                    let n = {
                        type: null,
                        instance: null
                    };
                    const o = null !== "2.29.2" ? "2.29.2" : "",
                        a = "undefined" != typeof window;
                    try {
                        if (a) {
                            let i = D();
                            null === (e = window.newrelic) || void 0 === e || e.addPageAction("WEB_SHELL_CLIENT_IDENTITY_INITIALIZED", {
                                webShellClientVersion: o
                            });
                            const {
                                UserManager: a,
                                WebStorageStateStore: r
                            } = await s.e(549).then(s.t.bind(s, 549, 23)), l = function(e) {
                                var t, i, n;
                                return {
                                    authority: "https://accounts.nike.com",
                                    client_id: "4fd2d5e7db76e0f85a6bb56721bd51df",
                                    redirect_uri: null !== (t = {
                                        WEB_SHELL_CLIENT_VERSION: "2.29.2",
                                        NEXT_PUBLIC_CLIENT_ID: "4fd2d5e7db76e0f85a6bb56721bd51df",
                                        NEXT_PUBLIC_HOST_NAME: "www.nike.com",
                                        NEXT_PUBLIC_AUTHORITY: "https://accounts.nike.com"
                                    }.NEXT_PUBLIC_REDIRECT_URI) && void 0 !== t ? t : `${window.location.origin}/auth/login`,
                                    post_logout_redirect_uri: null !== (i = {
                                        WEB_SHELL_CLIENT_VERSION: "2.29.2",
                                        NEXT_PUBLIC_CLIENT_ID: "4fd2d5e7db76e0f85a6bb56721bd51df",
                                        NEXT_PUBLIC_HOST_NAME: "www.nike.com",
                                        NEXT_PUBLIC_AUTHORITY: "https://accounts.nike.com"
                                    }.NEXT_PUBLIC_POST_LOGOUT_REDIRECT_URI) && void 0 !== i ? i : `${window.location.origin}/auth/logout`,
                                    silent_redirect_uri: null !== (n = {
                                        WEB_SHELL_CLIENT_VERSION: "2.29.2",
                                        NEXT_PUBLIC_CLIENT_ID: "4fd2d5e7db76e0f85a6bb56721bd51df",
                                        NEXT_PUBLIC_HOST_NAME: "www.nike.com",
                                        NEXT_PUBLIC_AUTHORITY: "https://accounts.nike.com"
                                    }.NEXT_PUBLIC_SILENT_REDIRECT_URI) && void 0 !== n ? n : `${window.location.origin}/auth/silent-renew`,
                                    response_type: "code",
                                    scope: "openid nike.digital profile email phone flow country",
                                    loadUserInfo: !1,
                                    automaticSilentRenew: !0,
                                    userStore: e,
                                    monitorSession: A()
                                }
                            }(new r({
                                store: window.localStorage
                            }));
                            n = {
                                type: "oidc",
                                instance: new a(l)
                            }, i || await (async e => {
                                await e.instance.removeUser()
                            })(n);
                            (e => Boolean((document.referrer.includes("nike") && !document.referrer.includes(document.location.origin) && D() || (null == e ? void 0 : e.expired)) && A()))(await n.instance.getUser()) && await n.instance.signinSilent(), (() => {
                                const e = () => {
                                    i && !D() && (i = !1, window.dispatchEvent(new Event("nikeSignOut")))
                                };
                                window.addEventListener("focus", e), window.addEventListener("visibilitychange", (() => {
                                    "visible" === document.visibilityState && e()
                                }))
                            })(), t.initializeVisitData()
                        }
                        I("accounts")
                    } catch (e) {
                        null === (i = window.newrelic) || void 0 === i || i.addPageAction("WEB_SHELL_CLIENT_IDENTITY_INITIALIZE_ERROR", {
                            webShellClientVersion: o
                        })
                    }
                    return n
                })(),
                o = async () => {
                    var e;
                    const t = await n;
                    return await (null === (e = t.instance) || void 0 === e ? void 0 : e.getUser())
                },
                a = async () => {
                    try {
                        T("WEB_SHELL_CLIENT_IDENTITY_GET_USER_PROFILE");
                        const e = await o();
                        if (e) return (e => {
                            var t, i, n, o, a, s, r, l, _, d, c, E, u, I, T, v, L, N, w;
                            const f = {
                                avatarUrl: (null == e ? void 0 : e.picture) || (null == e ? void 0 : e.avatar_url) || (null === (i = null === (t = null == e ? void 0 : e.entity) || void 0 === t ? void 0 : t.avatar) || void 0 === i ? void 0 : i.fullUrl) || (null == e ? void 0 : e.avatarUrl),
                                firstName: (null == e ? void 0 : e.given_name) || (null === (n = null == e ? void 0 : e.entity) || void 0 === n ? void 0 : n.firstName) || (null == e ? void 0 : e.firstName),
                                altFirstName: (null === (a = null === (o = null == e ? void 0 : e.name) || void 0 === o ? void 0 : o.kana) || void 0 === a ? void 0 : a.given) || (null === (r = null === (s = null == e ? void 0 : e.name) || void 0 === s ? void 0 : s.alternate) || void 0 === r ? void 0 : r.given) || (null === (l = null == e ? void 0 : e.entity) || void 0 === l ? void 0 : l.jpFirstNameKana) || (null == e ? void 0 : e.altFirstName),
                                altLastName: (null === (d = null === (_ = null == e ? void 0 : e.name) || void 0 === _ ? void 0 : _.kana) || void 0 === d ? void 0 : d.family) || (null === (E = null === (c = null == e ? void 0 : e.name) || void 0 === c ? void 0 : c.alternate) || void 0 === E ? void 0 : E.family) || (null === (u = null == e ? void 0 : e.entity) || void 0 === u ? void 0 : u.jpLastNameKana) || (null == e ? void 0 : e.altLastName),
                                lastName: (null == e ? void 0 : e.family_name) || (null === (I = null == e ? void 0 : e.entity) || void 0 === I ? void 0 : I.lastName) || (null == e ? void 0 : e.lastName),
                                email: (null == e ? void 0 : e.email) || (null === (v = null === (T = null == e ? void 0 : e.entity) || void 0 === T ? void 0 : T.account) || void 0 === v ? void 0 : v.email),
                                mobileNumber: (null == e ? void 0 : e.phone_number) || (null === (L = null == e ? void 0 : e.entity) || void 0 === L ? void 0 : L.mobileNumber) || (null == e ? void 0 : e.mobileNumber),
                                upmId: (null == e ? void 0 : e.sub) || (null === (w = null === (N = null == e ? void 0 : e.entity) || void 0 === N ? void 0 : N.account) || void 0 === w ? void 0 : w.id) || (null == e ? void 0 : e.upmId),
                                registeredCountry: null == e ? void 0 : e.country,
                                signInFlow: null == e ? void 0 : e.flow,
                                userType: "GUEST"
                            };
                            return O(e) ? f.userType = "SWOOSH" : f.upmId && (f.userType = "MEMBER"), f
                        })(e.profile)
                    } catch (e) {
                        throw T("WEB_SHELL_CLIENT_IDENTITY_GET_USER_PROFILE_ERROR"), e
                    }
                },
                l = {
                    initialize: async () => (await n, l),
                    getAccessToken: async () => {
                        try {
                            T("WEB_SHELL_CLIENT_IDENTITY_GET_ACCESS_TOKEN");
                            const e = await o();
                            if (e) return e.access_token
                        } catch (e) {
                            throw T("WEB_SHELL_CLIENT_IDENTITY_GET_ACCESS_TOKEN_ERROR"), e
                        }
                    },
                    getInitialized: async () => {
                        try {
                            return T("WEB_SHELL_CLIENT_IDENTITY_GET_INITIALIZED"), !!await n
                        } catch (e) {
                            throw T("WEB_SHELL_CLIENT_IDENTITY_GET_INITIALIZED_ERROR"), e
                        }
                    },
                    getIsLoggedIn: async () => {
                        const e = await a();
                        return e ? "GUEST" !== e.userType : !!e
                    },
                    getIsMobileVerified: async () => {
                        var e;
                        try {
                            T("WEB_SHELL_CLIENT_IDENTITY_GET_IS_MOBILE_VERIFIED");
                            const t = await o();
                            return !0 === (null === (e = null == t ? void 0 : t.profile) || void 0 === e ? void 0 : e.phone_number_verified)
                        } catch (e) {
                            throw T("WEB_SHELL_CLIENT_IDENTITY_GET_IS_MOBILE_VERIFIED_ERROR"), e
                        }
                    },
                    getIsSwooshUser: async () => {
                        try {
                            const e = await o(),
                                t = O(null == e ? void 0 : e.profile);
                            return T("WEB_SHELL_CLIENT_IDENTITY_GET_IS_SWOOSH_USER", {
                                isSwoosh: t
                            }), t
                        } catch (e) {
                            throw T("WEB_SHELL_CLIENT_IDENTITY_GET_IS_SWOOSH_USER_ERROR"), e
                        }
                    },
                    getUser: o,
                    getUserProfile: a,
                    getVisitData: async () => {
                        var e, i;
                        try {
                            return (null === (i = null === (e = window.nike) || void 0 === e ? void 0 : e.unite) || void 0 === i ? void 0 : i.isInitialized) ? window.nike.unite.session.getVisitData() : await t.getVisitData()
                        } catch (e) {
                            throw T("WEB_SHELL_CLIENT_IDENTITY_GET_VISIT_DATA_ERROR"), e
                        }
                    },
                    processReauth: async () => {
                        try {
                            const e = await n;
                            if ("oidc" !== e.type) return;
                            const t = await e.instance.signinSilentCallback();
                            return t && y(i), t
                        } catch (e) {
                            throw T("WEB_SHELL_CLIENT_IDENTITY_PROCESS_REAUTH_ERROR"), e
                        }
                    },
                    processSignIn: async () => {
                        var e;
                        try {
                            const t = await n,
                                o = await (null === (e = t.instance) || void 0 === e ? void 0 : e.signinCallback());
                            return y(i), o
                        } catch (e) {
                            throw T("WEB_SHELL_CLIENT_IDENTITY_PROCESS_SIGN_IN_ERROR"), e
                        }
                    },
                    processSignOut: async () => {
                        var e;
                        try {
                            const t = await n,
                                i = await (null === (e = t.instance) || void 0 === e ? void 0 : e.signoutCallback());
                            return window.localStorage.removeItem("webShellClientVisitData"), window.dispatchEvent(new Event("nikeSignOut")), i
                        } catch (e) {
                            throw T("WEB_SHELL_CLIENT_IDENTITY_PROCESS_SIGN_OUT_ERROR"), e
                        }
                    },
                    signIn: async (e = {}) => {
                        var t;
                        const i = await n;
                        try {
                            const n = window.location.href,
                                o = Object.assign(Object.assign({}, e), {
                                    redirectUrl: n
                                });
                            return null === (t = i.instance) || void 0 === t ? void 0 : t.signinRedirect(Object.assign(Object.assign({}, e), {
                                state: o
                            }))
                        } catch (e) {
                            throw T("WEB_SHELL_CLIENT_IDENTITY_SIGN_IN_ERROR"), e
                        }
                    },
                    signOut: async (e = {}) => {
                        var o, a, s;
                        try {
                            (null === (a = null === (o = window.nike) || void 0 === o ? void 0 : o.unite) || void 0 === a ? void 0 : a.isInitialized) ? window.nike.unite.session.logout(): t.resetVisitData(), T("WEB_SHELL_CLIENT_IDENTITY_SIGN_OUT");
                            const l = Object.assign(Object.assign({}, e), {
                                redirectUrl: window.location.href
                            });
                            (e => {
                                r().remove(R, {
                                    domain: e,
                                    path: "/"
                                })
                            })(i);
                            const _ = await n;
                            return window.dispatchEvent(new Event("nikeSignOut")), null === (s = _.instance) || void 0 === s ? void 0 : s.signoutRedirect(Object.assign(Object.assign({}, e), {
                                state: l
                            }))
                        } catch (e) {
                            throw T("WEB_SHELL_CLIENT_IDENTITY_SIGN_OUT_ERROR"), e
                        }
                    }
                };
            return l
        }
        var P = s(78);
        class B extends P.WebShellOptimization {
            constructor(e) {
                var t;
                super(e), this.getLocations = async e => {
                    var t, i, n, o, a, s;
                    if (!(null === (t = window.adobe) || void 0 === t ? void 0 : t.target)) return void console.warn("Optimization is unable to find Adobe Target. Please check that your application is configured correctly.");
                    const r = null !== (i = null == e ? void 0 : e.locations) && void 0 !== i ? i : this._locations;
                    if (0 !== r.length) try {
                        const e = await this.getUserProfile(),
                            t = this.getOptions(r, e);
                        await window.analyticsClient.isInitialized();
                        const i = null === (n = window.NikePrivacy.permissions.get()) || void 0 === n ? void 0 : n.map((({
                            category: e,
                            isEnabled: t
                        }) => t ? e : null)).filter(Boolean);
                        if (!["adtargeting_behavioralevents", "performance"].every((e => null == i ? void 0 : i.includes(e)))) return void console.warn("Appropriate UGP permissions have not been given. Cannot fetch Adobe Target locations.");
                        const o = await window.adobe.target.getOffers(t);
                        return this.transformAdobeOffersToGetLocationsResult(o)
                    } catch (e) {
                        (null === (o = window.newrelic) || void 0 === o ? void 0 : o.noticeError) && (null === (a = window.newrelic) || void 0 === a || a.addPageAction("WEB_SHELL_CLIENT_OPTIMIZATION_ERROR", {
                            webShellClientVersion: null !== "2.29.2" ? "2.29.2" : "",
                            host: window.location.host,
                            errorName: e.name,
                            errorMessage: e.message,
                            stackTrace: null !== (s = e.stack) && void 0 !== s ? s : ""
                        })), console.error(`Failed to find locations: ${e.message}`)
                    } else console.error("Locations must be provided either via a function argument or as a part of the Optimization configuration")
                }, this.getUserProfile = async () => {
                    const e = await window.webShellClient.identity.getUserProfile();
                    return {
                        userId: null == e ? void 0 : e.upmId,
                        loggedIn: !!(null == e ? void 0 : e.upmId)
                    }
                }, this.getOptions = (e, t) => ({
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
                            token: "ae0ecea9-920a-26c9-5042-3a3aab0ff68b"
                        },
                        execute: {
                            mboxes: e.map(((e, i) => ({
                                name: e.name,
                                index: i,
                                parameters: e.parameters,
                                profileParameters: t
                            })))
                        }
                    }
                }), this.transformAdobeOffersToGetLocationsResult = e => {
                    var t;
                    const i = null === (t = e.execute) || void 0 === t ? void 0 : t.mboxes.map((e => {
                        var t, i;
                        return {
                            name: e.name,
                            content: null === (t = e.options) || void 0 === t ? void 0 : t[0].content,
                            analytics: null === (i = e.analytics) || void 0 === i ? void 0 : i.payload.tnta
                        }
                    }));
                    if (i && i.length > 0) return {
                        locations: i
                    }
                }, null === (t = window.newrelic) || void 0 === t || t.addPageAction("WEB_SHELL_CLIENT_OPTIMIZATION_INITIALIZED", {
                    webShellClientVersion: null !== "2.29.2" ? "2.29.2" : ""
                })
            }
        }
        class H extends P.WebShellOptimization {
            constructor(e) {
                super(e), this.getLocations = async () => {
                    console.warn("Optimization is either disabled or failed to initialize correctly so getLocations returns undefined")
                }, console.warn("Optimization did not initialize. If you expected optimization to be enabled please check your configuration and restart the application.")
            }
        }
        const k = {
            appName: "Web Shell Application",
            initialLocale: t.defaultLocale,
            modal: {
                rootSelector: n
            },
            isProduction: !1,
            analytics: {
                writeKey: "2iv4Qa7rFEipAs4iE850BkBpTYQvlAFZ"
            },
            optimization: {
                locations: []
            }
        };
        class V {}
        var M, W;
        V.getInstance = e => {
            var n, a, s, r, l;
            const _ = "2.29.2",
                d = new t(e.initialLocale),
                E = new c,
                I = new i(d),
                T = new o(null === (n = e.modal) || void 0 === n ? void 0 : n.rootSelector),
                v = U(),
                {
                    getLocations: L
                } = V.getDotcomWebShellOptimization(e.optimization),
                N = function(e) {
                    var t;
                    const i = function() {
                        function e(e) {
                            return (...t) => {
                                var i;
                                const n = `Web Shell Client Analytics: analytics.${e}() called but no analytics client is configured.  Please supply window.analyticsClient to use Web Shell's analytics feature`;
                                console.warn(n), console.log(`.${e}() called with: `, t), (null === (i = window.newrelic) || void 0 === i ? void 0 : i.noticeError) && window.newrelic.noticeError(n)
                            }
                        }
                        return {
                            load: e("load"),
                            debug: e("debug"),
                            track: e("track"),
                            page: e("page")
                        }
                    }();
                    return "undefined" != typeof window && window.analyticsClient ? (window.analyticsClient.load(e), null === (t = window.newrelic) || void 0 === t || t.addPageAction("WEB_SHELL_CLIENT_ANALYTICS_INITIALIZED", {
                        webShellClientVersion: "2.29.2"
                    }), window.analyticsClient) : i
                }(null !== (a = e.analytics) && void 0 !== a ? a : k.analytics);
            return "undefined" != typeof window && (null === (s = window.newrelic) || void 0 === s || s.addPageAction("WEB_SHELL_CLIENT_INITIALIZED", {
                webShellClientVersion: _
            })), {
                __VERSION__: _,
                appName: null !== (r = e.appName) && void 0 !== r ? r : "",
                analytics: N,
                identity: v,
                locale: d,
                modalManager: T,
                translations: I,
                optimization: {
                    __WS_UNSTABLE__: {
                        getLocations: L
                    }
                },
                userLocation: E,
                isProduction: null !== (l = e.isProduction) && void 0 !== l ? l : k.isProduction,
                __WS_INTERNAL__: {
                    getInfo: u
                }
            }
        }, V.getDotcomWebShellOptimization = e => {
            var t;
            return (null === (t = null == e ? void 0 : e.adobe) || void 0 === t ? void 0 : t.enabled) ? new B(e.locations) : new H(null == e ? void 0 : e.locations)
        };
        const Y = null !== (W = (null !== (M = s.g) && void 0 !== M ? M : window).__shell) && void 0 !== W ? W : k,
            X = V,
            j = V.getInstance(Y),
            {
                analytics: G,
                appName: F,
                identity: x,
                locale: z,
                modalManager: $,
                optimization: Z,
                translations: K,
                userLocation: J,
                __VERSION__: q,
                __WS_INTERNAL__: Q
            } = j,
            ee = j
    })(), l
})()));
//# sourceMappingURL=bundle.umd.js.map