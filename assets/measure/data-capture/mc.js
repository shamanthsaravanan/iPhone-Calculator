"use strict";
(() => {
    var Rt = Object.create;
    var le = Object.defineProperty;
    var St = Object.getOwnPropertyDescriptor;
    var Ot = Object.getOwnPropertyNames;
    var _t = Object.getPrototypeOf,
        Mt = Object.prototype.hasOwnProperty;
    var Tt = (e, t) => () => (t || e((t = {
        exports: {}
    }).exports, t), t.exports);
    var Nt = (e, t, r, o) => {
        if (t && typeof t == "object" || typeof t == "function")
            for (let n of Ot(t)) !Mt.call(e, n) && n !== r && le(e, n, {
                get: () => t[n],
                enumerable: !(o = St(t, n)) || o.enumerable
            });
        return e
    };
    var me = (e, t, r) => (r = e != null ? Rt(_t(e)) : {}, Nt(t || !e || !e.__esModule ? le(r, "default", {
        value: e,
        enumerable: !0
    }) : r, e));
    var J = Tt((be, Ee) => {
        (function(e) {
            var t;
            if (typeof define == "function" && define.amd && (define(e), t = !0), typeof be == "object" && (Ee.exports = e(), t = !0), !t) {
                var r = window.Cookies,
                    o = window.Cookies = e();
                o.noConflict = function() {
                    return window.Cookies = r, o
                }
            }
        })(function() {
            function e() {
                for (var o = 0, n = {}; o < arguments.length; o++) {
                    var i = arguments[o];
                    for (var a in i) n[a] = i[a]
                }
                return n
            }

            function t(o) {
                return o.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent)
            }

            function r(o) {
                function n() {}

                function i(c, s, l) {
                    if (!(typeof document > "u")) {
                        l = e({
                            path: "/"
                        }, n.defaults, l), typeof l.expires == "number" && (l.expires = new Date(new Date * 1 + l.expires * 864e5)), l.expires = l.expires ? l.expires.toUTCString() : "";
                        try {
                            var h = JSON.stringify(s);
                            /^[\{\[]/.test(h) && (s = h)
                        } catch {}
                        s = o.write ? o.write(s, c) : encodeURIComponent(String(s)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), c = encodeURIComponent(String(c)).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent).replace(/[\(\)]/g, escape);
                        var C = "";
                        for (var k in l) l[k] && (C += "; " + k, l[k] !== !0 && (C += "=" + l[k].split(";")[0]));
                        return document.cookie = c + "=" + s + C
                    }
                }

                function a(c, s) {
                    if (!(typeof document > "u")) {
                        for (var l = {}, h = document.cookie ? document.cookie.split("; ") : [], C = 0; C < h.length; C++) {
                            var k = h[C].split("="),
                                g = k.slice(1).join("=");
                            !s && g.charAt(0) === '"' && (g = g.slice(1, -1));
                            try {
                                var V = t(k[0]);
                                if (g = (o.read || o)(g, V) || t(g), s) try {
                                    g = JSON.parse(g)
                                } catch {}
                                if (l[V] = g, c === V) break
                            } catch {}
                        }
                        return c ? l[c] : l
                    }
                }
                return n.set = i, n.get = function(c) {
                    return a(c, !1)
                }, n.getJSON = function(c) {
                    return a(c, !0)
                }, n.remove = function(c, s) {
                    i(c, "", e(s, {
                        expires: -1
                    }))
                }, n.defaults = {}, n.withConverter = r, n
            }
            return r(function() {})
        })
    });
    var N = "3.89.0";
    var F = () => typeof localStorage !== void 0 ? localStorage.getItem("marketing_client_debug") === "true" : !1,
        Lt = () => new Date().toUTCString(),
        de = (e, t, r) => {
            if (F()) {
                let o = console[e];
                console.groupCollapsed(`MC:${N} ${Lt()} ${t}`), r.forEach(n => o(n)), console.groupEnd()
            }
        },
        m = (e, ...t) => {
            de("info", e, t)
        };

    function v(e) {
        de("error", "\u{1F6A8} mc.js internal error", [e])
    }
    var ue = e => {
        let {
            application: {
                view: t
            }
        } = e, r = window.location.pathname ? .split("/") ? .pop() || "";
        return typeof localStorage !== void 0 && t === "evo order confirmation" ? localStorage.getItem("evo-order-event") === r : !1
    };
    var pe = (e, t) => {
        let {
            event: r
        } = e;
        sessionStorage.setItem("double-firing-event", `${r}|${t}`)
    };
    var Ut = (e, t, r) => {
            let o = t.split("|"),
                n = r - parseInt(o[1], 10);
            return o[0] === e && n < 50
        },
        fe = e => {
            let {
                event: t
            } = e, r = Date.now();
            return typeof sessionStorage !== void 0 && Ut(t, sessionStorage.getItem("double-firing-event") || "", r) ? (sessionStorage.removeItem("double-firing-event"), !0) : (pe(e, r), !1)
        };
    var D = () => window.location.hostname.includes("gs-checkout") ? "Y" : "N";
    var ge = (e, t) => D() === "Y" ? "mc" : t === "onCheckoutViewed" || t === "onOrderCompleted" ? e.source ? "mc" : "dcm" : e ? .source || "";
    var ve = e => {
        let t = e.application ? .country ? .toLowerCase() ? ? "",
            r = e.application ? .device ? ? "",
            o = e.application ? .language ? ? "",
            n = window ? .navigator ? .userAgent ? ? "",
            i = e.application ? .view ? ? "";
        return {
            country: t,
            device: r,
            language: o,
            userAgent: n,
            view: i
        }
    };
    var L = e => e.find(({
        category: r
    }) => r === "adtargeting_hashedmatch") ? .isEnabled || !1;
    var _ = {
            COOKIE_NAME: "geoloc",
            COUNTRY_KEY: "cc"
        },
        z = {
            queryParam: "geolocCountry",
            ccAlias: "country"
        };

    function w(e) {
        "@babel/helpers - typeof";
        return w = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
            return typeof t
        } : function(t) {
            return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }, w(e)
    }

    function ye(e, t) {
        if (w(e) != "object" || !e) return e;
        var r = e[Symbol.toPrimitive];
        if (r !== void 0) {
            var o = r.call(e, t || "default");
            if (w(o) != "object") return o;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return (t === "string" ? String : Number)(e)
    }

    function he(e) {
        var t = ye(e, "string");
        return w(t) == "symbol" ? t : t + ""
    }

    function W(e, t, r) {
        return (t = he(t)) in e ? Object.defineProperty(e, t, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = r, e
    }
    var R = ".nike.com",
        $ = ".nikecloud.com",
        At = ".converse.com";
    var we = "https://www",
        zr = "https://store".concat(R),
        Wr = "https://secure-store".concat(R),
        $r = "https://api".concat(R),
        jt = "".concat(we).concat(R),
        Jr = "".concat(we).concat(At),
        qr = "https://uxtesting.prod.commerce".concat($),
        Yr = "https://experience.prod.commerce".concat($),
        Xr = "https://experience.test.commerce".concat($),
        Zr = "".concat(jt, "/assets");

    function Pe(e) {
        if (Array.isArray(e)) return e
    }

    function Ce(e, t) {
        var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
        if (r != null) {
            var o, n, i, a, c = [],
                s = !0,
                l = !1;
            try {
                if (i = (r = r.call(e)).next, t === 0) {
                    if (Object(r) !== r) return;
                    s = !1
                } else
                    for (; !(s = (o = i.call(r)).done) && (c.push(o.value), c.length !== t); s = !0);
            } catch (h) {
                l = !0, n = h
            } finally {
                try {
                    if (!s && r.return != null && (a = r.return(), Object(a) !== a)) return
                } finally {
                    if (l) throw n
                }
            }
            return c
        }
    }

    function q(e, t) {
        (t == null || t > e.length) && (t = e.length);
        for (var r = 0, o = Array(t); r < t; r++) o[r] = e[r];
        return o
    }

    function ke(e, t) {
        if (e) {
            if (typeof e == "string") return q(e, t);
            var r = {}.toString.call(e).slice(8, -1);
            return r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set" ? Array.from(e) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? q(e, t) : void 0
        }
    }

    function xe() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
    }

    function Ie(e, t) {
        return Pe(e) || Ce(e, t) || ke(e, t) || xe()
    }

    function Re(e) {
        return e.split(",").reduce(function(t, r) {
            var o = r.split("="),
                n = Ie(o, 2),
                i = n[0],
                a = n[1];
            return t[i] = a, t
        }, {})
    }
    var Se = me(J());
    var Ht = _.COOKIE_NAME,
        Oe = function() {
            return Se.default.get(Ht)
        };
    var _e = _.COOKIE_NAME,
        Gt = _.COUNTRY_KEY,
        ko = z.queryParam,
        Bt = z.ccAlias,
        Me = "geoloc cookie not set";

    function Te(e) {
        var t = Re(e);
        return Object.defineProperty(t, Bt, {
            configurable: !0,
            get: function() {
                return this[Gt]
            }
        }), t
    }

    function Kt(e) {
        return e && w(e.cookies) !== "object" ? console.warn("No cookies object found to parse") : e.cookies[_e] ? Te(e.cookies[_e]) : console.warn(Me)
    }

    function Y(e) {
        if (e) return Kt(e);
        var t = Oe();
        return t ? Te(t) : (console.warn(Me), t)
    }
    var X = me(J()),
        Ne = function() {
            return {
                get: function(r) {
                    return X.default.get(r)
                },
                set: function(r, o, n) {
                    X.default.set(r, o, n)
                }
            }
        },
        De = {
            createInstance: function(t) {
                return {
                    get: function(o) {
                        return Ne().get(o)
                    },
                    set: function(o, n) {
                        Ne().set(o, n, t)
                    }
                }
            }
        };

    function Le(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(e);
            t && (o = o.filter(function(n) {
                return Object.getOwnPropertyDescriptor(e, n).enumerable
            })), r.push.apply(r, o)
        }
        return r
    }

    function Vt(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t] != null ? arguments[t] : {};
            t % 2 ? Le(Object(r), !0).forEach(function(o) {
                W(e, o, r[o])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Le(Object(r)).forEach(function(o) {
                Object.defineProperty(e, o, Object.getOwnPropertyDescriptor(r, o))
            })
        }
        return e
    }
    var Ue = function() {
            var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
                r = De.createInstance(Vt({
                    domain: t.domain || R,
                    expires: new Date(new Date().getTime() + 864e5)
                }, t));
            return {
                get: function(n) {
                    return r.get(n)
                },
                set: function(n, i) {
                    r.set(n, i)
                }
            }
        },
        Ae = function(t, r, o) {
            return Ue(o).set(t, r)
        },
        Z = function(t, r) {
            return Ue(r).get(t)
        };
    var b = function(e, t) {
        return function() {
            var o, n;
            if ((o = window) !== null && o !== void 0 && (n = o.webShellClient) !== null && n !== void 0 && n.privacy && window.webShellClient.privacy[e]) {
                var i;
                return (i = window.webShellClient.privacy)[e].apply(i, arguments)
            }
            return t.apply(void 0, arguments)
        }
    };
    var Q = "sq",
        S = {
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
        Ft = {
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
        je = b("isCookieRequiredCountry", function() {
            var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
            return !!Ft[e.toUpperCase()]
        }),
        ee = [],
        E = b("getPreferences", function(e, t) {
            var r = Z(Q, t),
                o = Y() || {},
                n = o.cc || e,
                i = !!n;
            if (!r) return !i || je(n) ? S.UNSET : S[3];
            if (S[r]) return S[r];
            throw new Error("unknown value for privacy cookie: ".concat(r))
        }),
        zt = b("addInitialPreferenceListener", function(e) {
            ee.push(e)
        }),
        Wt = b("getInitialPreferenceListeners", function() {
            return ee
        }),
        $t = b("isMarketingAllowed", function(e, t) {
            return E(e, t).allowMarketing
        }),
        Jt = b("isPerformanceAllowed", function(e, t) {
            return E(e, t).allowPerformance
        }),
        He = b("isPreferenceSet", function(e) {
            return typeof Z(Q, e) < "u"
        }),
        qt = b("setPreferences", function(e, t) {
            for (var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, o = arguments.length > 3 ? arguments[3] : void 0, n = !He(r), i = 0; i <= 3; i += 1)
                if (S[i].allowPerformance === e && S[i].allowMarketing === t) {
                    Ae(Q, i, r);
                    break
                }
            return n && ee.forEach(function(a) {
                return a()
            }), E(o, r)
        });
    var p = e => {
        let t = e.find(({
            category: r
        }) => r === "adtargeting_behavioralevents");
        return t ? t.isEnabled : E().allowMarketing
    };
    var u = e => {
        let t = e.find(({
            category: r
        }) => r === "performance");
        return t ? t.isEnabled : E().allowPerformance
    };
    var Yt = async e => {
            let t = new window.Blob([e], {
                    type: "utf-8"
                }),
                r = await new Response(t).arrayBuffer();
            return new Uint8Array(r)
        },
        Xt = e => Array.from(new Uint8Array(e)).map(r => r.toString(16).padStart(2, "0")).join(""),
        P = async e => {
            if (!e) return "";
            let t = await Yt(e),
                r = await window.crypto.subtle.digest("SHA-256", t);
            return Xt(r)
        };
    var x = e => {
        if (!e) return "";
        let t = new URL(e);
        return t.search = "", t.toString()
    };
    var Zt = "714737",
        Qt = "2lrxTiTBk6-5ot3iFiVRFwzX40tQTtw7",
        er = "f6e2d580c7",
        tr = `https://insights-collector.newrelic.com/v1/accounts/${Zt}/events`;

    function U(e) {
        let {
            newrelic: t = null
        } = window;
        m("\u23E3 NewRelic Egress Data \u23E3", e), t && t.loader_config && t.loader_config.licenseKey === er && t.addPageAction("AdtechMarketingEvent", e), fetch(tr, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-Insert-Key": Qt
            },
            body: JSON.stringify({
                eventType: "AdtechMarketingClientEvent",
                ...e
            })
        })
    }

    function O(e, t = {
        event: "marketingClientErrorEvent",
        windowHREF: x(window.location.href)
    }) {
        let {
            newrelic: r = null
        } = window;
        r && r.noticeError && r.noticeError(e, t);
        let o = { ...t,
            errorMessage: e ? .message,
            errorStack: e ? .stack
        };
        F() && (console.error("Error", e), console.error("Error NR event", o)), U(o)
    }
    var Ge = () => window ? .NikePrivacy ? .isEnabled ? "nike-privacy-core" : "ux-tread-privacy";

    function I(e, t) {
        let r = {
            event: "marketingClientEvent",
            memberEvent: e,
            referer: x(document.referrer),
            signInFlow: t,
            windowHREF: x(window.location.href)
        };
        U(r)
    }

    function Be(e) {
        let {
            application: {
                country: t,
                view: r
            },
            filter: o,
            consumer: {
                allowsPerformance: n
            },
            scriptSource: i,
            event: a,
            eventId: c
        } = e, s = {
            event: "marketingClientEvent",
            eventName: a,
            country: t,
            eventId: c,
            isEVO: D(),
            privacyType: Ge(),
            scriptSource: i,
            filter: o,
            windowHREF: x(window.location.href),
            referer: x(document.referrer),
            version: N,
            view: r
        };
        n && U(s)
    }
    var y = () => window ? .NikePrivacy ? .permissions ? .get() || [];
    var A = async () => {
        let e = y();
        try {
            let t = await window ? .webShellClient ? .identity ? .getUserProfile() || {};
            return t ? .signInFlow === "JOIN" && (localStorage.setItem("adtech_member_joined", "true"), u(e) && I("webshell-sign-in-flow", t.signInFlow), localStorage.getItem("adtech_member_joined_count") || (u(e) && I("member-sign-in-flow", t.signInFlow), localStorage.setItem("adtech_member_joined_count", "1"))), {
                email: t.email || "",
                mobileNumber: t.mobileNumber || "",
                signInFlow: t.signInFlow || "",
                registeredCountry: t.registeredCountry || "",
                userType: t.userType || ""
            }
        } catch (t) {
            return v(t), t instanceof Error && u(e) && O(t), {
                email: "",
                mobileNumber: "",
                registeredCountry: "",
                signInFlow: "",
                userType: ""
            }
        }
    };
    var rr = async e => ({
            hashedEmail: await P(e.email.toLowerCase().trim()) || "",
            loggedIn: "Y",
            memberEmail: e.email,
            memberLocation: e.registeredCountry,
            mobileNumber: e.mobileNumber,
            memberType: e.userType
        }),
        Ke = async () => {
            let e = {
                    hashedEmail: "",
                    loggedIn: "N",
                    memberEmail: "",
                    memberLocation: "",
                    mobileNumber: "",
                    memberType: ""
                },
                t = await A();
            return t.email ? await rr(t) : e
        };

    function te(e) {
        return e.replace(/[^\d]/g, "")
    }
    var Ve = async e => {
        let t = await Ke(),
            r = e.consumer ? .customerEmail ? ? "",
            o = await P(r),
            n = e.consumer ? .customerPhoneNumber ? te(e.consumer ? .customerPhoneNumber) : "",
            i = t ? .mobileNumber ? te(t.mobileNumber) : "",
            a = await P(n),
            c = await P(i),
            s = y();
        return {
            allows1PA: L(s),
            allowsBehavioral: p(s),
            allowsPerformance: u(s),
            email: t.memberEmail || r,
            hashedEmail: t.hashedEmail || o,
            hashedPhoneNumber: c || a,
            loggedIn: t.loggedIn,
            memberLocation: t.memberLocation,
            memberType: t.memberType.toUpperCase()
        }
    };
    var j, or = new Uint8Array(16);

    function re() {
        if (!j && (j = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !j)) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
        return j(or)
    }
    var d = [];
    for (let e = 0; e < 256; ++e) d.push((e + 256).toString(16).slice(1));

    function Fe(e, t = 0) {
        return d[e[t + 0]] + d[e[t + 1]] + d[e[t + 2]] + d[e[t + 3]] + "-" + d[e[t + 4]] + d[e[t + 5]] + "-" + d[e[t + 6]] + d[e[t + 7]] + "-" + d[e[t + 8]] + d[e[t + 9]] + "-" + d[e[t + 10]] + d[e[t + 11]] + d[e[t + 12]] + d[e[t + 13]] + d[e[t + 14]] + d[e[t + 15]]
    }
    var nr = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto),
        oe = {
            randomUUID: nr
        };

    function ir(e, t, r) {
        if (oe.randomUUID && !t && !e) return oe.randomUUID();
        e = e || {};
        let o = e.random || (e.rng || re)();
        if (o[6] = o[6] & 15 | 64, o[8] = o[8] & 63 | 128, t) {
            r = r || 0;
            for (let n = 0; n < 16; ++n) t[r + n] = o[n];
            return t
        }
        return Fe(o)
    }
    var ne = ir;
    var H = e => {
        let t = e ? .event || e ? .eventName,
            r = "",
            o = e ? .application ? .view || "";
        return (t === "cartViewed" || o === "cart") && (r = "onCartViewed"), ["checkout", "checkout type", "order review", "payment", "shipping", "evo checkout"].includes(o) && (r = "onCheckoutViewed"), ["order confirmation", "evo order confirmation"].includes(o) && (r = "onOrderCompleted"), t === "onLoad" && o === "gridwall" && (r = "onProductListViewed"), (t === "landingPageViewed" || ["homepage", "landing page", "editorial"].includes(o)) && (r = "onLandingPageViewed"), t === "onLoad" && o === "pdp" && (r = "onProductViewed"), t === "colorChange" && (r = "onColorChange"), t === "sizeSelect" && (r = "onSizeSelect"), (t === "addToCart" || t === "productAdded") && (r = "onProductAdded"), (t === "memberJoined" || o === "memberJoined") && (r = "onMemberJoined"), t === "registrationPageViewed" && (r = "onRegistrationViewed"), r
    };
    var ze = e => {
        let t = H(e);
        return {
            eventId: ne(),
            event: t
        }
    };
    var We = e => ({
        filter: e.filters ? .sortBy ? ? ""
    });

    function $e(e) {
        return e ? Array.isArray(e) && e.length && e[0] !== void 0 ? e : Array.isArray(e) ? [] : Object.values(e).map(t => t.code) : []
    }

    function Je(e) {
        return e ? {
            ae: "AED",
            at: "EUR",
            au: "AUD",
            be: "EUR",
            bg: "BGN",
            ca: "CAD",
            ch: "CHF",
            cl: "CLP",
            cn: "CNY",
            cz: "EUR",
            de: "EUR",
            dk: "DKK",
            eg: "EGP",
            es: "EUR",
            fi: "EUR",
            fr: "EUR",
            gb: "GBP",
            gr: "EUR",
            hk: "CNY",
            hr: "EUR",
            hu: "EUR",
            id: "IDR",
            ie: "EUR",
            il: "ILS",
            in: "INR",
            it: "EUR",
            kr: "KRW",
            jp: "JPY",
            lu: "EUR",
            ma: "MAD",
            mx: "MXN",
            my: "MYR",
            nl: "EUR",
            no: "NOK",
            nz: "NZD",
            ph: "PHP",
            pl: "PLN",
            pr: "USD",
            pt: "EUR",
            ro: "RON",
            ru: "RUB",
            sa: "SAR",
            se: "SEK",
            sg: "SGD",
            si: "EUR",
            sk: "EUR",
            th: "THB",
            tr: "TRY",
            tw: "TWD",
            us: "USD",
            vn: "VND",
            za: "ZAR"
        }[e.toLowerCase()] : ""
    }
    var qe = async (e, t) => {
        let r = Je(t),
            o = e.order ? .discount ? ? 0,
            n = e.order ? .orderId ? ? "",
            i = await P(n),
            a = $e(e.order ? .promoCodeList),
            c = e.order ? .shipping ? ? 0,
            s = e.order ? .subtotal ? ? 0,
            l = e.order ? .tax ? ? 0,
            h = e.order ? .total ? ? 0;
        return {
            currencyCode: r,
            discount: o,
            hashedOrderId: i,
            orderId: n,
            promoCodeList: a,
            shipping: c,
            subtotal: s,
            tax: l,
            total: h
        }
    };
    var Ye = (e, t) => {
        let r = window.location.origin === "https://www.nike.com.cn" ? "https://product-proxy.adtech-prod.nikecloud.com.cn/products" : "https://product-proxy-v2.adtech-prod.nikecloud.com/products";
        return !e.length || t === void 0 ? Promise.resolve([]) : fetch(r, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                experienceProducts: e,
                country: t
            })
        }).then(o => o.json()).then(o => (m("\u{1F45F} Product Data", o), o.hydratedProducts ? ? [])).catch(o => (v(o), []))
    };
    var Xe = (e, t) => t.currentPrice * e.quantity;
    var Ze = (e = [], t = []) => Array.from(new Set([...Array.isArray(e) ? e : [], ...Array.isArray(t) ? t : []]));
    var Qe = (e, t) => {
        let r = t ? .skuData ? ? [],
            o = {
                size: e ? .size ? ? "",
                sku: e ? .sku ? ? "",
                gtin: e ? .gtin ? ? ""
            },
            n = {
                size: r.length ? r[0].size : "",
                sku: r.length ? r[0].sku : "",
                gtin: r.length ? r[0].gtin : ""
            };
        return r.length ? r.find(({
            size: i
        }) => i === o.size) ? ? n : o
    };
    var et = (e, t) => t.length && !e.length ? t : !t.length && !e.length ? [] : t.map(o => {
        let n = e.find(({
            cloudProductId: i
        }) => i === o.cloudProductId);
        if (n) {
            let i = { ...o,
                    ...n,
                    genders: Ze(o.genders, n.genders),
                    ...Qe(o, n),
                    currentPrice: o.currentPrice === 0 ? n.currentPrice : o.currentPrice,
                    id: o.id ? o.id : n.prodigyId,
                    fullPrice: o.fullPrice === 0 ? n.fullPrice : o.fullPrice,
                    currentPriceTotal: o.currentPriceTotal === 0 ? Xe(o, n) : o.currentPriceTotal
                },
                {
                    skuData: a,
                    prodigyId: c,
                    ...s
                } = i;
            return s
        }
        return o
    });

    function ar(e) {
        switch (e) {
            case "OOS":
                return "Fouts";
            case "LOW":
                return "Miller";
            case "MEDIUM":
                return "Dixon";
            case "HIGH":
                return "Mariota";
            default:
                return ""
        }
    }

    function cr(e) {
        let t = e.objects.map(o => o.level),
            r = {};
        return t.forEach(o => {
            r[o] = (r[o] || 0) + 1
        }), r
    }

    function sr(e) {
        let t = ["GB", "AT", "FR", "IT", "DE", "ES", "BE", "CZ", "DK", "FI", "GR", "HU", "IE", "LU", "NL", "PL", "PT", "SE", "SI"],
            r = ["AE", "AU", "BG", "CA", "CH", "CL", "EG", "HR", "IL", "MA", "NO", "ZA", "NZ", "PR", "RO", "RU", "SA", "SK", "TR"],
            o = ["ID", "IN", "MY", "PH", "SG", "TH", "TW", "VN"];
        return t.indexOf(e) > -1 ? "EU" : r.indexOf(e) > -1 ? "XP" : o.indexOf(e) > -1 ? "XA" : e.toUpperCase()
    }

    function lr(e) {
        let t = 0,
            r = "";
        for (let o in e)
            if (e[o] > t) {
                if (o === "OOS" && Object.keys(e).length > 1) return "LOW";
                t = e[o], r = o
            } else e[o] === t && (r === "HIGH" && o === "MEDIUM" ? r = "MEDIUM" : r === "HIGH" && o === "LOW" ? r = "LOW" : r === "MEDIUM" && o === "HIGH" ? r = "MEDIUM" : (r === "MEDIUM" && o === "LOW" || r === "LOW" && o === "MEDIUM" || r === "LOW" && o === "HIGH") && (r = "LOW"));
        return r
    }

    function mr(e) {
        let t = cr(e),
            r = lr(t);
        return ar(r)
    }

    function dr(e, t) {
        let r = sr(t.toUpperCase()),
            o = window.location.origin === "https://www.nike.com.cn" ? "api.nike.com.cn" : "api.nike.com",
            n = encodeURI(`https://${o}/deliver/available_gtins/v3?filter=styleColor(${e})&filter=merchGroup(${r})`);
        return fetch(n, {
            credentials: "include"
        }).then(i => i.json()).then(i => mr(i))
    }

    function tt(e, t = []) {
        let r = e ? .application ? .country || "",
            o = t.filter(i => i.cloudProductId !== null),
            n = H(e);
        if (o.length > 0) {
            let i = o.map(async a => {
                if (a ? .color && r && (n === "onProductViewed" || n === "onCartViewed")) try {
                    let c = await dr(a.color, r);
                    return { ...a,
                        inventoryLevel: c
                    }
                } catch (c) {
                    return v(c), { ...a,
                        inventoryLevel: ""
                    }
                }
                return { ...a,
                    inventoryLevel: ""
                }
            });
            return Promise.all(i)
        }
        return Promise.resolve([])
    }
    var rt = e => e ? .length ? e.map(t => ({
        brand: t ? .brand || "",
        category: t ? .category || "",
        cloudProductId: t ? .cloudProductId || "",
        color: t ? .color || "",
        currentPrice: t ? .currentPrice || 0,
        currentPriceTotal: t ? .currentPriceTotal || 0,
        fullPrice: t ? .fullPrice || 0,
        genders: t ? .genders || [],
        id: t ? .id || "",
        inventoryLevel: t ? .inventoryLevel || "",
        isNikeByYou: t ? .isNikeByYou || !1,
        isOnSale: t ? .isOnSale || !1,
        name: t ? .name || "",
        discounts: t ? .discounts || [],
        quantity: t ? .quantity || 1,
        size: t ? .size || "",
        sku: t ? .sku || "",
        gtin: t ? .gtin || "",
        subCategory: t ? .subCategory || []
    })) : [];
    var ot = async (e, t) => {
        let r = rt(e.productList),
            o = r.filter(a => !a.category.includes("GIFT_CARD")).filter(a => a ? .cloudProductId ? .includes("-")).map(a => ({
                cloudProductId: a.cloudProductId,
                currentPrice: a.currentPrice
            })) ? ? [],
            [n, i] = await Promise.all([tt(e, r), Ye(o, t)]);
        return et(i, n)
    };
    var nt = async e => {
        let t = ve(e),
            [r, o, n] = await Promise.all([Ve(e), qe(e, t.country), ot(e, t.country)]),
            {
                filter: i
            } = We(e),
            {
                event: a,
                eventId: c
            } = ze(e),
            s = ge(e, a);
        return {
            application: t,
            consumer: r,
            filter: i,
            event: a,
            eventId: c,
            order: o,
            productList: n,
            scriptSource: s
        }
    };
    var it = (e, t, r) => ({
            currencyCode: r.order.currencyCode,
            impressions: e,
            items: t
        }),
        ur = (e, t) => ({
            detail: {
                products: e
            },
            items: t
        }),
        pr = (e, t, r) => ({
            currencyCode: r.order.currencyCode,
            add: {
                products: e
            },
            items: t
        }),
        fr = (e, t) => ({
            checkout: {
                products: e
            },
            items: t
        }),
        gr = (e, t, r) => ({
            currencyCode: r.order.currencyCode,
            purchase: {
                actionField: {
                    id: r.order.orderId,
                    coupon: Array.isArray(r.order.promoCodeList) && r.order.promoCodeList.length ? r.order.promoCodeList.join("|") : "",
                    revenue: r.order.total,
                    shipping: r.order.shipping,
                    tax: r.order.tax
                },
                products: e
            },
            items: t
        });

    function at(e) {
        let t = e.productList.map(n => ({
                brand: n.brand,
                category: n.category,
                id: n.id,
                list: e.filter,
                name: n.name,
                price: n.currentPriceTotal,
                quantity: n.quantity,
                variant: n.color
            })),
            r = e.productList.map(n => ({
                item_name: n.name,
                item_id: n.id,
                price: n.currentPriceTotal,
                item_brand: n.brand,
                item_category: n.category,
                item_variant: n.color,
                item_list_name: e.filter,
                quantity: n.quantity
            }));
        return {
            onProductListViewed: it,
            onProductListFiltered: it,
            onProductViewed: ur,
            onProductAdded: pr,
            onCheckoutViewed: fr,
            onOrderCompleted: gr
        }[e.event] ? .(t, r, e) ? ? {}
    }
    var ct = e => {
        let {
            application: t,
            consumer: r,
            event: o,
            eventId: n,
            filter: i,
            order: a,
            productList: c
        } = e, s = at({
            productList: c,
            filter: i,
            event: o,
            order: a
        });
        return {
            application: t,
            consumer: r,
            ecommerce: s,
            event: o,
            eventId: n,
            filter: i,
            order: a,
            productList: c
        }
    };
    var st = e => {
        let t = ct(e);
        window.marketingClientDataLayer = window.marketingClientDataLayer || [], window.marketingClientDataLayer.push(t), m("\u{1F3F7} GTM Egress Data", t)
    };
    var vr = ["ae", "at", "au", "be", "bg", "ca", "ch", "cl", "cz", "de", "dk", "eg", "es", "fi", "fr", "gb", "gr", "hr", "hu", "id", "ie", "il", "it", "jp", "lu", "ma", "mx", "my", "nl", "no", "nz", "ph", "pl", "pr", "pt", "ro", "ru", "sa", "se", "sg", "si", "sk", "th", "tr", "us", "vn", "za"],
        lt = (e, t) => t === "us" || vr.includes(t) && p(e);
    var mt = (e, t) => {
            let r = { ...t,
                eventData: { ...t.eventData,
                    request: {
                        client: "fetch"
                    }
                }
            };
            return fetch(e, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(r),
                keepalive: !0
            })
        },
        yr = (e, t) => {
            let r = { ...t,
                eventData: { ...t.eventData,
                    request: {
                        client: "beacon"
                    }
                }
            };
            return navigator.sendBeacon(e, JSON.stringify(r))
        },
        hr = (e, t) => {
            if (!navigator.sendBeacon) return mt(e, t);
            let r = yr(e, t);
            return r || mt(e, t)
        },
        dt = e => {
            try {
                let t = "https://consumersignals.services.nike.com/consumersignals/kennedy/v1/stream",
                    r = {
                        type: "page",
                        anonymousID: e.anonymousId,
                        eventData: e
                    };
                m("\u{1F300} NMP-Utils Egress Data", e), hr(t, r)
            } catch (t) {
                v(t), t instanceof Error && O(t)
            }
        };
    var ut = e => {
        let {
            application: {
                view: t
            }
        } = e, r = window.location.pathname ? .split("/") ? .pop() || "";
        typeof localStorage !== void 0 && t === "evo order confirmation" && localStorage.setItem("evo-order-event", r)
    };
    var G = (e, t) => {
        window.marketingClientDataLayer = window.marketingClientDataLayer || [];

        function r(o, n, i) {
            window.marketingClientDataLayer && window.marketingClientDataLayer.push(arguments)
        }
        r("consent", t, {
            ad_storage: p(e) ? "granted" : "denied",
            ad_user_data: p(e) ? "granted" : "denied",
            ad_personalization: p(e) ? "granted" : "denied",
            analytics_storage: p(e) ? "granted" : "denied",
            nike_bead: p(e) ? "granted" : "denied",
            nike_1pa: L(e) ? "granted" : "denied",
            nike_performance: u(e) ? "granted" : "denied"
        })
    };

    function f(e) {
        if (!e) throw new Error("Invalid arguments passed into getCookie");
        let t = decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(e).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null;
        return t && t === "null" ? null : t
    }

    function B() {
        let e = f("NIKE_COMMERCE_COUNTRY"),
            t = "";
        if (e) t = e;
        else {
            let r = location.pathname.slice(1).split("/");
            r[0].length === 2 && (t = r[0])
        }
        return t.toLowerCase()
    }
    var M = e => B() === "us" || p(e);
    var pt = e => ({
        allows1PA: e ? .consumer ? .allows1PA || !1,
        allowsBehavioral: e ? .consumer ? .allowsBehavioral || !1,
        allowsPerformance: e ? .consumer ? .allowsPerformance || !1,
        currencyType: e ? .order ? .currencyCode || "",
        hashedEmail: e ? .consumer ? .hashedEmail || "",
        hashedPhoneNumber: e ? .consumer ? .hashedPhoneNumber || "",
        loggedIn: e ? .consumer ? .loggedIn || ""
    });
    var ft = () => window.location.href;
    var T = () => new Date;
    var gt = (e, t) => Math.floor(Math.random() * (t - e)) + e;
    var vt = e => new URLSearchParams(window.location.search).get(e) || "";
    var ie = (e, t) => {
        let r = new Date(e.getTime());
        return r.setMonth(e.getMonth() + t), r.toUTCString()
    };

    function ae(e, t, r) {
        document.cookie = `${encodeURIComponent(e)}=${encodeURIComponent(t)}; expires=${r}; domain=.nike.com; path=/; Secure`
    }
    var wr = e => {
            let t = `fb.1.${T().getTime()}.${e}`;
            return ae("_fbc", t, ie(T(), 3)), t
        },
        br = () => {
            let e = `fb.1.${T().getTime()}.${gt(1e7,1e12)}`;
            return ae("_fbp", e, ie(T(), 3)), e
        },
        yt = () => {
            let e = vt("fbclid"),
                t = f("_fbp"),
                r = f("_fbc"),
                o = e && (!r || r ? .split(".")[r.split(".").length - 1] !== e) ? wr(e) : r || "",
                n = t ? ? br();
            return {
                fbcId: o,
                fbpId: n
            }
        };
    var ht = e => {
        let t = pt(e),
            r = ft(),
            o = f("anonymousId"),
            n = f("_scid"),
            i = f("_ttp"),
            a = f("ttclid");
        return { ...e,
            consumer: t,
            anonymousId: o,
            facebook: yt(),
            tiktok: {
                ttp: i,
                ttclid: a
            },
            scId: n,
            url: r
        }
    };
    var wt = async e => {
        try {
            let t = y(),
                r = await nt(e);
            if (m("\u{1F4A7} Hydrated Marketing Client Data", r), M(t) && (G(t, "update"), st(r)), lt(t, r.application.country)) {
                let o = ht(r);
                dt(o)
            }
            ut(r), u(t) && Be(r)
        } catch (t) {
            v(t), t instanceof Error && O(t)
        }
    };
    var ce = e => {
        if (!e) {
            m("\u{1F969} Raw Marketing Client Event Empty", e);
            return
        }
        if (fe(e)) {
            m("\u{1F969} Raw Marketing Client Event Double Firing", e);
            return
        }
        if (ue(e)) {
            m("\u{1F969} Raw Marketing Client Event Stored Evo Order Event", e);
            return
        }
        if (e["@nike/mc.metadata"] ? .dispatchedAt) {
            m("\u{1F969} Raw Marketing Client Event Already dispatched", e);
            return
        }
        e["@nike/mc.metadata"] = {
            dispatchedAt: new Date().toISOString()
        }, m("\u{1F969} Raw Marketing Client Event Data", e), wt({ ...e,
            "@nike/mc.metadata": void 0
        })
    };
    var bt = e => t => r => (m(`\u{1F35D} ${e}`, r), t(r)),
        Et = () => (window.NikeConsumerSignals || (window.NikeConsumerSignals = []), window.NikeConsumerSignals),
        K = e => {
            Et().push(e)
        },
        Pt = () => {
            let e = window,
                t = Et();
            t.forEach(bt("Clearing queued events")(ce)), t.push = function(...r) {
                let {
                    length: o
                } = this;
                return Array.prototype.push.apply(this, r), this.slice(o).forEach(bt("Dispatching incoming event")(ce)), this.length
            }, e.marketing = K, dispatchEvent(new Event("@mc/marketing_available"))
        };

    function Er() {
        let e = "marketingClientGTM";
        if (document.getElementById(e)) return;
        let t = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  })(window,document,'script','marketingClientDataLayer','GTM-NTF2X45');`,
            r = document.createElement("script");
        r.setAttribute("id", e);
        let o = document.createTextNode(t);
        r.appendChild(o), document.getElementsByTagName("head")[0].appendChild(r)
    }

    function Ct(e) {
        G(e, "default"), Er()
    }

    function kt() {
        let e = f("NIKE_COMMERCE_LANG_LOCALE"),
            t = "";
        return e && (t = e.toLowerCase()), t
    }
    var Pr = e => {
            window ? .NikeConsumerSignals ? K(e) : window ? .marketing && window.marketing(e)
        },
        xt = () => {
            let e = y(),
                t = localStorage.getItem("dcm_member_joined_success"),
                r = localStorage.getItem("adtech_member_joined"),
                o = localStorage.getItem("adtech_member_joined_count"),
                n = {
                    application: {
                        view: "memberJoined",
                        country: B(),
                        language: kt()
                    },
                    eventName: "memberJoined"
                },
                i = {
                    detail: n
                };
            t === "true" && (u(e) && I("legacy-neo"), localStorage.removeItem("dcm_member_joined_success"), document.documentElement.dispatchEvent(new CustomEvent("neo", i))), r === "true" && o === "1" && (window ? .marketing || window ? .NikeConsumerSignals) && (u(e) && I("webshell-window.marketing"), localStorage.setItem("adtech_member_joined_count", "0"), Pr(n)), r === "true" && o === "1" && !window ? .marketing && (u(e) && I("webshell-neo"), localStorage.setItem("adtech_member_joined_count", "0"), document.documentElement.dispatchEvent(new CustomEvent("neo", i))), localStorage.removeItem("adtech_member_joined")
        };
    var se = y();
    M(se) && Ct(se);
    Pt();
    A().then(e => {
        e ? .signInFlow === "JOIN" && M(se) && xt()
    });
})();
/*! Bundled license information:

js-cookie/src/js.cookie.js:
  (*!
   * JavaScript Cookie v2.2.1
   * https://github.com/js-cookie/js-cookie
   *
   * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
   * Released under the MIT license
   *)
*/