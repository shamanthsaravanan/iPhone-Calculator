"use strict";
(self.webpackChunk_nike_shop_components = self.webpackChunk_nike_shop_components || []).push([
    [2963], {
        6666: (e, t, r) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function() {
                return function(e) {
                    return e({
                        type: o.FETCH_IDENTITY_DATA
                    }), (0, n.getUserProfileWithForceRefresh)().then((function(t) {
                        return e({
                            type: o.FETCH_IDENTITY_DATA_SUCCESS,
                            payload: t
                        })
                    }), (function(t) {
                        return e({
                            type: o.FETCH_IDENTITY_DATA_FAILURE,
                            error: t
                        })
                    }))
                }
            };
            var n = r(7622),
                o = r(7839)
        },
        4889: (e, t, r) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                return function(t, r) {
                    var a = (0, o.getAuthToken)(r()),
                        l = (0, o.getUpmId)(r());
                    return a ? (t({
                        type: i.FETCH_IDENTITY_DATA
                    }), (0, n.fetchUserData)(a, c(c({}, e), {}, {
                        upmId: l
                    })).then((function(e) {
                        return t({
                            type: i.FETCH_IDENTITY_DATA_SUCCESS,
                            payload: e
                        })
                    }), (function(e) {
                        return t({
                            type: i.FETCH_IDENTITY_DATA_FAILURE,
                            error: e
                        })
                    }))) : Promise.resolve().then((function() {
                        return t({
                            type: i.FETCH_IDENTITY_DATA_FAILURE,
                            payload: "No auth token available."
                        })
                    }))
                }
            };
            var n = r(8036),
                o = r(9380),
                i = r(7839);

            function a(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function c(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? a(Object(r), !0).forEach((function(t) {
                        l(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : a(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }

            function l(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }
        },
        5406: (e, t, r) => {
            Object.defineProperty(t, "l3", {
                enumerable: !0,
                get: function() {
                    return n.LOGOUT_SUCCESS
                }
            });
            var n = r(7839),
                o = r(5650),
                i = d(r(4889)),
                a = d(r(6666)),
                c = r(8036),
                l = r(4845),
                u = r(9380),
                s = r(7622);

            function d(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
        },
        5650: (e, t, r) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.addUniteReducer = t.uniteReducer = void 0;
            var n, o = (n = r(6046)) && n.__esModule ? n : {
                    default: n
                },
                i = r(2280),
                a = r(7622),
                c = r(7839);

            function l(e) {
                return function(e) {
                    if (Array.isArray(e)) return u(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
                }(e) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return u(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(e);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return u(e, t)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function u(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function s(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function d(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? s(Object(r), !0).forEach((function(t) {
                        f(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : s(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }

            function f(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }
            var p = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c.INITIAL_USER_STATE,
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                switch (t.type) {
                    case c.SET_ACCESS_LEVEL:
                        return d(d({}, e), {}, {
                            accessLevel: t.payload
                        });
                    case c.SET_USER_DATA:
                        return d(d(d({}, e), t.payload), {}, {
                            initialized: !0
                        });
                    case c.FETCH_IDENTITY_DATA_SUCCESS:
                        var r = t.payload || [];
                        return d(d({}, e), {}, {
                            profile: d(d({}, e.profile || {}), {}, {
                                address: r
                            })
                        });
                    case c.FB_SDK_LOAD_SUCCESS:
                        return d(d({}, e), {}, {
                            facebookLoaded: !0
                        });
                    case c.CHECK_SWOOSH_STATUS:
                        return d(d({}, e), {}, {
                            isSwooshUser: t.payload
                        });
                    case c.MOBILE_VERIFICATION:
                        return d(d({}, e), {}, {
                            isMobileVerified: t.payload
                        });
                    case c.OPEN_MODAL:
                        return d(d({}, e), {}, {
                            isModalOpen: !0,
                            view: t.payload
                        });
                    case c.CLOSE_MODAL:
                        return d(d({}, e), {}, {
                            view: a.VIEWS.none,
                            isModalOpen: !1
                        });
                    case c.LOGOUT_SUCCESS:
                        return d(d({}, c.INITIAL_USER_STATE), {}, {
                            initialized: !0,
                            facebookLoaded: e.facebookLoaded
                        });
                    case c.LOGOUT_FAILURE:
                    case c.FETCH_IDENTITY_DATA_FAILURE:
                    case c.SET_ERROR:
                        return d(d({}, e), {}, {
                            error: t.payload
                        });
                    case c.CLEAR_UNITE_ERROR:
                        return d(d({}, e), {}, {
                            error: null
                        });
                    default:
                        return e
                }
            };
            t.uniteReducer = p;
            t.addUniteReducer = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return f({}, c.USER_STATE_KEY, o.default.canUseEventListeners && (0, i.persistToSessionStorage)(c.USER_STATE_KEY, p, d({
                    blacklist: ["authToken"].concat(l((null == e ? void 0 : e.blacklist) || []))
                }, e)))
            }
        },
        9380: (e, t, r) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.getIsLoggedIn = t.getInitialized = t.getProfileCountry = t.getBillingCountry = t.getBillingCode = t.getBillingProvince = t.getBillingLocality = t.getBillingAddress = t.getShippingCountry = t.getShippingCode = t.getShippingProvince = t.getShippingLocality = t.getShippingAddress = t.getPreferredAddress = t.getAllAddresses = t.getAddress = t.getAvatarUrl = t.getAvatar = t.getProfileNameLatin = t.getProfileName = t.getLastNameLatin = t.getFirstNameLatin = t.getLatinName = t.getProfileNameObject = t.getLastName = t.getFirstName = t.getAccountType = t.getUserType = t.isMobileVerified = t.isSwooshUser = t.isFBSdkLoaded = t.getUniqueVisitId = t.getNuId = t.getAppId = t.getVisitId = t.getVisitorId = t.getSessionData = t.getUpmId = t.getUserId = t.getAccountId = t.getScreenName = t.getAccount = t.getUniteModalView = t.isLoggedIn = t.getAccessLevel = t.isModalOpen = t.getEmail = t.getProfile = t.getAuthToken = t.getUser = void 0;
            var n = r(4133),
                o = r(7622),
                i = r(7839),
                a = function(e, t) {
                    return function(r) {
                        return r[e] || t
                    }
                },
                c = function(e) {
                    return a(i.USER_STATE_KEY, i.INITIAL_USER_STATE)(e)
                };
            t.getUser = c;
            var l = (0, n.createSelector)(c, (function(e) {
                return e.authToken
            }));
            t.getAuthToken = l;
            var u = (0, n.createSelector)(c, a("profile", i.INITIAL_USER_STATE.profile));
            t.getProfile = u;
            var s = (0, n.createSelector)(u, a("emails", {})),
                d = (0, n.createSelector)(s, a("primary", {})),
                f = (0, n.createSelector)(u, a("email", null)),
                p = (0, n.createSelector)(f, d, (function(e, t) {
                    var r = t.email;
                    return e || r || null
                })),
                g = (0, n.createSelector)(u, a("mspEmail", null)),
                v = (0, n.createSelector)(p, g, (function(e, t) {
                    return e || t || null
                }));
            t.getEmail = v;
            var S = (0, n.createSelector)(c, a("isModalOpen", i.INITIAL_USER_STATE.isModalOpen));
            t.isModalOpen = S;
            var I = (0, n.createSelector)(c, a("accessLevel", o.ACCESS_LEVELS.unauthenticated));
            t.getAccessLevel = I;
            var y = (0, n.createSelector)(I, u, (function(e, t) {
                return e !== o.ACCESS_LEVELS.unauthenticated && Boolean(t.id)
            }));
            t.isLoggedIn = y;
            var O = (0, n.createSelector)(c, a("view", o.VIEWS.none));
            t.getUniteModalView = O;
            var A = (0, n.createSelector)(u, a("account", {}));
            t.getAccount = A;
            var b = (0, n.createSelector)(A, (function(e) {
                return e.screenName || null
            }));
            t.getScreenName = b;
            var m = (0, n.createSelector)(A, a("id", null));
            t.getAccountId = m;
            var T = (0, n.createSelector)(c, a("userId", i.INITIAL_USER_STATE.userId));
            t.getUserId = T;
            var E = (0, n.createSelector)(u, T, m, (function(e, t, r) {
                return e.ID || r || t || e.upmId || null
            }));
            t.getUpmId = E;
            var _ = (0, n.createSelector)(c, a("sessionData", i.INITIAL_USER_STATE.sessionData));
            t.getSessionData = _;
            var h = (0, n.createSelector)(_, (function(e) {
                return e.visitor
            }));
            t.getVisitorId = h;
            var P = (0, n.createSelector)(_, (function(e) {
                return e.visit
            }));
            t.getVisitId = P;
            var j = (0, n.createSelector)(c, a("appId", i.INITIAL_USER_STATE.appId));
            t.getAppId = j;
            var L = (0, n.createSelector)(u, a("nuId", null));
            t.getNuId = L;
            var w = (0, n.createSelector)(h, L, E, (function(e, t, r) {
                return e || t || r
            }));
            t.getUniqueVisitId = w;
            var U = (0, n.createSelector)(c, a("facebookLoaded", i.INITIAL_USER_STATE.facebookLoaded));
            t.isFBSdkLoaded = U;
            var D = (0, n.createSelector)(c, a("isSwooshUser", i.INITIAL_USER_STATE.isSwooshUser));
            t.isSwooshUser = D;
            var N = (0, n.createSelector)(c, a("isMobileVerified", i.INITIAL_USER_STATE.isMobileVerified));
            t.isMobileVerified = N;
            var C = (0, n.createSelector)(u, a("userType", null));
            t.getUserType = C;
            var k = (0, n.createSelector)(A, a("type", null));
            t.getAccountType = k;
            var R = (0, n.createSelector)(u, (function(e) {
                return e.firstName || ""
            }));
            t.getFirstName = R;
            var M = (0, n.createSelector)(u, (function(e) {
                return e.lastName || ""
            }));
            t.getLastName = M;
            var F = (0, n.createSelector)(u, (function(e) {
                return e.name || {}
            }));
            t.getProfileNameObject = F;
            var V = (0, n.createSelector)(F, (function(e) {
                return e.latin || {}
            }));
            t.getLatinName = V;
            var B = (0, n.createSelector)(R, V, (function(e, t) {
                var r = t.given;
                return e || r || ""
            }));
            t.getFirstNameLatin = B;
            var H = (0, n.createSelector)(M, V, (function(e, t) {
                var r = t.family;
                return e || r || ""
            }));
            t.getLastNameLatin = H;
            var Y = (0, n.createSelector)(R, M, (function(e, t) {
                return [e, t].filter(Boolean).join(" ")
            }));
            t.getProfileName = Y;
            var K = (0, n.createSelector)(Y, B, H, (function(e, t, r) {
                return e || [t, r].filter(Boolean).join(" ")
            }));
            t.getProfileNameLatin = K;
            var z = (0, n.createSelector)(u, (function(e) {
                return e.avatar || {}
            }));
            t.getAvatar = z;
            var J = (0, n.createSelector)(z, (function(e) {
                return e.fullUrl || null
            }));
            t.getAvatarUrl = J;
            var W = (0, n.createSelector)(u, (function(e) {
                return e.address || {}
            }));
            t.getAddress = W;
            var $ = (0, n.createSelector)(u, (function(e) {
                return e.address || []
            }));
            t.getAllAddresses = $;
            var G = (0, n.createSelector)($, (function(e) {
                return e.filter((function(e) {
                    return e.preferred
                }))[0] || e[0] || {}
            }));
            t.getPreferredAddress = G;
            var X = (0, n.createSelector)($, G, (function(e, t) {
                return e.filter((function(e) {
                    return "shipping" === e.label
                }))[0] || t
            }));
            t.getShippingAddress = X;
            var q = (0, n.createSelector)(X, (function(e) {
                return e.locality || null
            }));
            t.getShippingLocality = q;
            var x = (0, n.createSelector)(X, (function(e) {
                return e.province || null
            }));
            t.getShippingProvince = x;
            var Q = (0, n.createSelector)(X, (function(e) {
                return e.code || null
            }));
            t.getShippingCode = Q;
            var Z = (0, n.createSelector)(X, (function(e) {
                return e.country || null
            }));
            t.getShippingCountry = Z;
            var ee = (0, n.createSelector)($, G, (function(e, t) {
                return e.filter((function(e) {
                    return "billing" === e.label
                }))[0] || t
            }));
            t.getBillingAddress = ee;
            var te = (0, n.createSelector)(ee, (function(e) {
                return e.locality || null
            }));
            t.getBillingLocality = te;
            var re = (0, n.createSelector)(ee, (function(e) {
                return e.province || null
            }));
            t.getBillingProvince = re;
            var ne = (0, n.createSelector)(ee, (function(e) {
                return e.code || null
            }));
            t.getBillingCode = ne;
            var oe = (0, n.createSelector)(ee, (function(e) {
                return e.country || null
            }));
            t.getBillingCountry = oe;
            var ie = (0, n.createSelector)(u, (function(e) {
                return e.country
            }));
            t.getProfileCountry = ie;
            var ae = (0, n.createSelector)(c, (function(e) {
                return e.initialized || !1
            }));
            t.getInitialized = ae;
            var ce = (0, n.createSelector)(c, (function(e) {
                return e.isLoggedIn || !1
            }));
            t.getIsLoggedIn = ce
        },
        448: (e, t, r) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = e.startTime,
                    r = e.endTime,
                    o = e.status,
                    i = e.debug,
                    a = {
                        status: o
                    };
                t && r && (a.loadTime = r - t);
                window.newrelic && window.newrelic.addPageAction(n.TREAD_UNITE_EVENT, a);
                if (i) {
                    (0, console.log)(a)
                }
            };
            var n = r(7839)
        },
        2280: (e, t, r) => {
            r.r(t), r.d(t, {
                getMinutesInMs: () => p,
                isTimestampWithinRange: () => g,
                persistToLocalStorage: () => n.A,
                persistToSessionStorage: () => o.A,
                readFromLocalStorage: () => a,
                readFromSessionStorage: () => l,
                removeLocalStorage: () => u,
                removeSessionStorage: () => s,
                writeToLocalStorage: () => d,
                writeToSessionStorage: () => f
            });
            var n = r(3712),
                o = r(6070);
            const i = r(6127).A;

            function a(e) {
                var t = e.key,
                    r = e.defaultValue;
                return i.getItem(t).then((function(e) {
                    return e ? Promise.resolve(e) : Promise.resolve()
                }), (function(e) {
                    return console.warn(e), Promise.resolve(r)
                }))
            }
            const c = r(3375).A;

            function l(e) {
                var t = e.key,
                    r = e.defaultValue;
                return c.getItem(t).then((function(e) {
                    return e ? Promise.resolve(e) : Promise.resolve()
                }), (function(e) {
                    return console.warn(e), Promise.resolve(r)
                }))
            }

            function u(e) {
                var t = e.key;
                return i.removeItem(t)
            }

            function s(e) {
                var t = e.key;
                return c.removeItem(t)
            }

            function d(e) {
                var t = e.key,
                    r = e.value,
                    n = e.defaultValue;
                return i.setItem(t, r).then((function() {
                    return Promise.resolve(r)
                }), (function(e) {
                    return console.warn(e), Promise.resolve(n || r)
                }))
            }

            function f(e) {
                var t = e.key,
                    r = e.value,
                    n = e.defaultValue;
                return c.setItem(t, r).then((function() {
                    return Promise.resolve(r)
                }), (function(e) {
                    return console.warn(e), Promise.resolve(n || r)
                }))
            }

            function p() {
                return 6e4 * (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1)
            }

            function g(e) {
                var t = e.timeRange,
                    r = e.timestamp,
                    n = Date.now();
                return Boolean(r) && t <= n - r
            }
        },
        3712: (e, t, r) => {
            r.d(t, {
                A: () => s
            });
            var n = r(1843),
                o = r(7213),
                i = r(5655),
                a = r(6127),
                c = r(6608);

            function l(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }
            var u = {
                stateReconciler: c.A,
                timeout: null
            };

            function s(e, t) {
                var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : u,
                    s = r.stateReconciler,
                    d = void 0 === s ? c.A : s,
                    f = r.timeout,
                    p = (0, o.A)(r, ["stateReconciler", "timeout"]);
                return (0, i.rL)(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? l(Object(r), !0).forEach((function(t) {
                            (0, n.A)(e, t, r[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : l(Object(r)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                        }))
                    }
                    return e
                }({
                    key: e,
                    storage: a.A,
                    stateReconciler: d,
                    timeout: f
                }, p), t)
            }
        },
        6070: (e, t, r) => {
            r.d(t, {
                A: () => s
            });
            var n = r(1843),
                o = r(7213),
                i = r(5655),
                a = r(3375);

            function c(e, t, r, n) {
                if (n.blacklist)
                    for (var o = 0; o < n.blacklist.length; o += 1) {
                        var i = n.blacklist[o];
                        n.storage.removeItem(i)
                    }
                return e
            }

            function l(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }
            var u = {
                stateReconciler: c,
                timeout: null
            };

            function s(e, t) {
                var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : u,
                    s = r.stateReconciler,
                    d = void 0 === s ? c : s,
                    f = r.timeout,
                    p = (0, o.A)(r, ["stateReconciler", "timeout"]);
                return (0, i.rL)(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? l(Object(r), !0).forEach((function(t) {
                            (0, n.A)(e, t, r[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : l(Object(r)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                        }))
                    }
                    return e
                }({
                    key: e,
                    storage: a.A,
                    stateReconciler: d,
                    timeout: f
                }, p), t)
            }
        },
        7361: (e, t, r) => {
            r.d(t, {
                A: () => i
            });
            var n = r(2796),
                o = r(5396);

            function i(e) {
                var t = e.productId,
                    r = e.country,
                    i = e.skuId,
                    a = void 0 === i ? null : i,
                    c = e.wishlistId,
                    l = e.token,
                    u = e.host,
                    s = e.appId,
                    d = e.callerId,
                    f = void 0 === d ? "CiCCart" : d;
                return (0, o.A)({
                    id: (0, n.v4)(),
                    productId: t,
                    country: r,
                    skuId: a,
                    token: l,
                    wishlistId: c,
                    host: u,
                    appId: s,
                    callerId: f
                })
            }
        },
        5396: (e, t, r) => {
            r.d(t, {
                A: () => c
            });
            var n = r(3807),
                o = r(5599),
                i = r(1597),
                a = r(6182);

            function c(e) {
                var t = e.host,
                    r = void 0 === t ? i.NIKE_API_HOST : t,
                    c = e.id,
                    l = e.productId,
                    u = e.skuId,
                    s = void 0 === u ? null : u,
                    d = e.callerId,
                    f = e.token,
                    p = e.wishlistId,
                    g = e.appId,
                    v = void 0 === g ? i.DOTCOM_UX_ID : g,
                    S = e.country,
                    I = JSON.stringify({
                        id: c,
                        productId: l,
                        skuId: s,
                        wishlistId: p,
                        country: S
                    });
                return (0, n.A)("".concat(r, "/").concat(a.JT, "/").concat(c), {
                    method: "PUT",
                    credentials: "include",
                    headers: (0, o.A)({
                        token: f,
                        appId: v,
                        callerId: d
                    }),
                    body: I
                }, "Error adding or updating a wishlist item.", {
                    pageActionName: a.$i
                })
            }
        },
        6367: (e, t, r) => {
            r.d(t, {
                A: () => c
            });
            var n = r(3807),
                o = r(5599),
                i = r(1597),
                a = r(6182);

            function c(e) {
                var t = e.token,
                    r = e.ids,
                    c = e.host,
                    l = void 0 === c ? i.NIKE_API_HOST : c,
                    u = e.callerId,
                    s = e.appId,
                    d = void 0 === s ? i.DOTCOM_UX_ID : s;
                return (0, n.A)("".concat(l, "/").concat(a.JT, "?filter=id(").concat(r.join(","), ")"), {
                    method: "DELETE",
                    headers: (0, o.A)({
                        token: t,
                        appId: d,
                        callerId: u
                    })
                }, "Error deleting items from wishlist.", {
                    pageActionName: a.$i
                })
            }
        },
        3679: (e, t, r) => {
            r.d(t, {
                A: () => f
            });
            var n = r(1843),
                o = r(7213),
                i = r(2796),
                a = r(3807),
                c = r(5599),
                l = r(1597),
                u = r(6182);
            const s = function(e) {
                var t = e.brand,
                    r = e.channel,
                    n = void 0 === r ? null : r,
                    o = e.country,
                    i = e.id,
                    s = e.isDefault,
                    d = void 0 === s ? null : s,
                    f = e.name,
                    p = e.callerId,
                    g = void 0 === p ? u.C3 : p,
                    v = e.token,
                    S = e.host,
                    I = void 0 === S ? l.NIKE_API_HOST : S,
                    y = e.appId,
                    O = void 0 === y ? l.DOTCOM_UX_ID : y,
                    A = JSON.stringify({
                        brand: t,
                        channel: n,
                        country: o,
                        isDefault: d,
                        name: f
                    });
                return (0, a.A)("".concat(I, "/").concat(u.rv, "/").concat(i), {
                    method: "PUT",
                    credentials: "include",
                    headers: (0, c.A)({
                        token: v,
                        callerId: g,
                        appId: O
                    }),
                    body: A
                }, "Error creating or updating a wishlist.")
            };

            function d(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function f(e) {
                var t = e.isDefault,
                    r = void 0 === t ? null : t,
                    a = e.name,
                    c = e.brand,
                    l = e.channel,
                    f = void 0 === l ? null : l,
                    p = e.token,
                    g = e.country,
                    v = (e.appId, e.spanName),
                    S = void 0 === v ? u.C3 : v,
                    I = (0, o.A)(e, ["isDefault", "name", "brand", "channel", "token", "country", "appId", "spanName"]);
                return s(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? d(Object(r), !0).forEach((function(t) {
                            (0, n.A)(e, t, r[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : d(Object(r)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                        }))
                    }
                    return e
                }({
                    token: p,
                    isDefault: r,
                    name: a,
                    brand: c,
                    channel: f,
                    country: g,
                    spanName: S,
                    id: (0, i.v4)()
                }, I))
            }
        },
        6182: (e, t, r) => {
            r.d(t, {
                $i: () => a,
                C3: () => i,
                JT: () => n,
                rv: () => o
            });
            var n = "buy/list_items/v1",
                o = "buy/lists/v1",
                i = "ux-tread-wishlist",
                a = "tread-wishlist-event"
        }
    }
]);
//# sourceMappingURL=npm.nike-156fdb6e.chunk.54cddc.js.map