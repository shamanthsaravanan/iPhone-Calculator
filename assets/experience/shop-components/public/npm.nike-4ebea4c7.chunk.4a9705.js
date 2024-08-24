(self.webpackChunk_nike_shop_components = self.webpackChunk_nike_shop_components || []).push([
    [8131], {
        8578: (e, t, r) => {
            "use strict";
            r.d(t, {
                BJ: () => U,
                Bk: () => E,
                Bz: () => m,
                CN: () => b,
                CT: () => x,
                Dx: () => i,
                Gv: () => g,
                Il: () => T,
                N_: () => p,
                Oh: () => j,
                R2: () => h,
                Rw: () => u,
                Sp: () => s,
                Wd: () => d,
                Wq: () => l,
                _7: () => C,
                cv: () => P,
                dZ: () => R,
                dq: () => A,
                e4: () => N,
                fE: () => w,
                jI: () => k,
                kY: () => z,
                ln: () => D,
                nw: () => O,
                qn: () => y,
                tp: () => _,
                u7: () => I,
                vp: () => c,
                we: () => v,
                xi: () => f,
                y3: () => F,
                yR: () => S
            });
            var n, o, a = r(1843),
                c = "@carts",
                i = "dotcom-cart",
                s = "buy/carts/v2",
                l = {
                    quantity: 0,
                    total: 0,
                    subtotal: 0
                },
                u = {
                    brand: "NIKE",
                    channel: "NIKECOM",
                    country: "US",
                    currency: "USD",
                    id: null,
                    items: [],
                    totals: l,
                    links: {
                        self: {
                            ref: ""
                        }
                    },
                    resourceType: "cart"
                },
                d = {
                    appId: null
                },
                p = {
                    meta: d,
                    cart: u,
                    totals: l,
                    locale: {},
                    inFlight: [],
                    errors: [],
                    itemIds: []
                },
                v = "customization/nike_id",
                m = "customization/jersey_id",
                f = "buy/warranty",
                g = {
                    FULL_CUSTOMIZATION: v,
                    JERSEY_ID: m,
                    WARRANTY: f
                },
                h = "CARTS/addItemsByParams",
                b = "CARTS/getCartsByParams",
                A = "CARTS/removeItemsByParams",
                y = "CARTS/promotions/add",
                O = "CARTS/promotions/remove",
                x = "CARTS/replaceItemsByParams",
                w = ("".concat(x, "/add/warranty"), "".concat(x, "/remove/warranty"), "CARTS/mergeCartsByParams"),
                C = "".concat(c, "/ON_INIT_CART"),
                S = "".concat(c, "/MISSING_VALUES"),
                P = "".concat(c, "/ON_FETCH_START"),
                k = "".concat(c, "/ON_FETCH_SUCCESS"),
                j = "".concat(c, "/ON_FETCH_FAILURE"),
                T = "".concat(c, "/CLEAR_ERRORS"),
                _ = "".concat(c, "/CLEAR_CART_STATE"),
                N = ("".concat(c, "/NO_LOCAL_STORAGE"), "".concat(c, "/ADD_TO_CARTS_SUCCESS")),
                E = "".concat(j, "/").concat(h),
                D = "".concat(k, "/").concat(w),
                I = "".concat(j, "/").concat(w),
                R = "".concat(k, "/").concat(b),
                F = "".concat(j, "/").concat(b),
                z = (n = {}, (0, a.A)(n, h, E), (0, a.A)(n, b, F), (0, a.A)(n, w, I), n),
                U = (o = {}, (0, a.A)(o, w, D), (0, a.A)(o, b, R), o)
        },
        3089: (e, t, r) => {
            "use strict";
            r.d(t, {
                ZQ: () => a,
                mb: () => i,
                uD: () => o,
                xy: () => c
            });
            var n = "@nikeCustomEvent",
                o = "".concat(n, "/cartCountUpdated"),
                a = ("".concat(n, "/cartUpdated"), "".concat(n, "/locationUpdated")),
                c = "".concat(n, "/updatedSharedShopData"),
                i = "".concat(n, "/mergedCarts")
        },
        5831: e => {
            e.exports = {
                type: {
                    baseFontSize: "16px",
                    sizes: {
                        xs: "14px",
                        sm: "20px",
                        baseline: "16px",
                        md: "22px",
                        lg: "26px",
                        xl: "30px"
                    },
                    size: {
                        brandMarketing: {
                            xs: "14px",
                            sm: "20px",
                            baseline: "16px",
                            md: "60px",
                            lg: "80px",
                            xl: "120px"
                        },
                        desktop: {
                            xs: "14px",
                            sm: "20px",
                            baseline: "16px",
                            md: "24px",
                            lg: "28px",
                            xl: "36px"
                        }
                    },
                    fontFamily: {
                        base: '"Helvetica Neue", Helvetica, Arial, sans-serif',
                        brand: '"Nike TG", "Helvetica Neue", Helvetica, Arial, sans-serif',
                        marketing: '"Nike Futura", "Helvetica Neue", Helvetica, Arial, sans-serif'
                    },
                    lineHeight: {
                        mobile: {
                            14: 1.7142857142857142,
                            16: 1.75,
                            20: 1.5,
                            22: 1.4545454545454546,
                            24: 1.5,
                            26: 1.3076923076923077,
                            28: 1.4285714285714286,
                            30: 1.3333333333333333,
                            36: 1.3333333333333333,
                            40: .9,
                            60: .8333333333333334,
                            80: .875,
                            120: .8333333333333334
                        },
                        tablet: {
                            20: 1.6,
                            60: .9333333333333333
                        }
                    },
                    fontWeight: {
                        regular: 400,
                        medium: 500
                    }
                },
                colors: {
                    colorPalette: {
                        black: {
                            base: "#111111",
                            light: "rgba(0, 0, 0, 0.75)",
                            dark: "#0D0D0D"
                        },
                        white: {
                            base: "#ffffff",
                            light: "rgba(255, 255, 255, 0.75)",
                            dark: "#BFBFBF"
                        },
                        grey: {
                            base: "#757575",
                            light: "rgba(117, 117, 117, 0.75)",
                            dark: "#585858"
                        },
                        orange: {
                            base: "#FA5400",
                            light: "rgba(250, 84, 0, 0.75)",
                            dark: "#BC3F00"
                        },
                        red: {
                            base: "#d43f21"
                        },
                        green: {
                            base: "#128a09"
                        }
                    },
                    brand: {
                        black: "#111111",
                        white: "#ffffff",
                        grey: "#757575",
                        orange: "#FA5400",
                        red: "#d43f21",
                        green: "#128a09",
                        inactiveGrey: "#CCCCCC",
                        borderGrey: "#E5E5E5",
                        primaryGrey: "#F5F5F5",
                        secondaryGrey: "#FAFAFA",
                        accent: "#FA5400",
                        error: "#d43f21",
                        success: "#128a09"
                    }
                },
                breakpoints: {
                    mobile: 0,
                    tablet: 600,
                    desktop: 960,
                    largeDesktop: 1440,
                    extraLargeDesktop: 1920
                },
                mediaQueries: {
                    mobile: "only screen and (min-width: 0px)",
                    sm: "(max-width: 599px)",
                    md: "(min-width: 600px) and (max-width: 959px)",
                    lg: "(min-width: 960px) and (max-width: 1439px)",
                    xl: "(min-width: 1440px) and (max-width: 1919px)",
                    xxl: "(min-width: 1920px)",
                    tablet: "only screen and (min-width: 600px)",
                    desktop: "only screen and (min-width: 960px)",
                    largeDesktop: "only screen and (min-width: 1440px)",
                    extraLargeDesktop: "only screen and (min-width: 1920px)"
                },
                zIndex: {
                    z0: 0,
                    z1: 1,
                    z2: 2,
                    z3: 3,
                    z4: 4,
                    z5: 5,
                    z6: 6,
                    z7: 7,
                    z8: 8,
                    z9: 9,
                    z10: 10,
                    low: 0,
                    mid: 5,
                    high: 10
                },
                scaleIncrement: 4,
                spacing: {
                    baseline: 16,
                    padding: "4px",
                    scale: [0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 68, 72, 76, 80, 84, 88, 92, 96, 100, 104, 108, 112, 116]
                },
                layout: {
                    gutter: 16,
                    maxWidth: 1808,
                    grid: {
                        columnCount: 12,
                        columnWidth: {
                            1: "8.333333333333334%",
                            2: "16.666666666666668%",
                            3: "25%",
                            4: "33.333333333333336%",
                            5: "41.66666666666667%",
                            6: "50%",
                            7: "58.333333333333336%",
                            8: "66.66666666666667%",
                            9: "75%",
                            10: "83.33333333333334%",
                            11: "91.66666666666667%",
                            12: "100%"
                        }
                    }
                },
                transition: {
                    default: {
                        duration: "250ms",
                        timing: "cubic-bezier(0.77, 0, 0.175, 1)",
                        transition: "all 250ms cubic-bezier(0.77, 0, 0.175, 1)"
                    }
                },
                borderRadius: 24
            }
        },
        9848: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => c
            });
            var n = r(8151),
                o = r(5831),
                a = r.n(o);
            const c = new n.Ay(a(), {
                fontSizeUnit: "px"
            })
        },
        3807: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => j
            });
            var n = r(3720),
                o = r.n(n),
                a = r(1597),
                c = r(2183),
                i = r(294),
                s = r(1637),
                l = r(1933),
                u = r(3526),
                d = r(5426),
                p = r(1414),
                v = r(1308),
                m = r(1843),
                f = r(290),
                g = r(7213),
                h = r(5342);

            function b(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function A(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? b(Object(r), !0).forEach((function(t) {
                        (0, m.A)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : b(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var y = function e(t, r, n) {
                return t.reduce((function(t, o) {
                    var a, c = o || {},
                        i = c.body,
                        s = c.errors,
                        l = (0, g.A)(c, ["body", "errors"]);
                    if (null != s && s.length) return e([].concat((0, f.A)(t), (0, f.A)(s)), r, null == l ? void 0 : l.servicePath);
                    var u = [].concat((0, f.A)(t), [A(A({}, l), {}, {
                        crcCode: (null == l ? void 0 : l.crcCode) || (0, h.A)({
                            url: r,
                            code: null == l ? void 0 : l.code,
                            status: null == l ? void 0 : l.status,
                            message: null == l ? void 0 : l.message
                        }),
                        servicePath: (null == l ? void 0 : l.servicePath) || n
                    })]);
                    return null != i && null !== (a = i.errors) && void 0 !== a && a.length ? e([].concat((0, f.A)(u), (0, f.A)((null == i ? void 0 : i.errors) || [])), r, null == l ? void 0 : l.servicePath) : u.filter((function(e) {
                        return e.servicePath
                    }))
                }), [])
            };

            function O(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var r, n = (0, d.A)(e);
                    if (t) {
                        var o = (0, d.A)(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return (0, u.A)(this, r)
                }
            }
            const x = function(e) {
                (0, l.A)(r, e);
                var t = O(r);

                function r(e) {
                    var n, o = e.url,
                        a = e.response,
                        l = void 0 === a ? {} : a,
                        u = e.data,
                        d = void 0 === u ? {} : u,
                        p = e.options,
                        m = e.message,
                        g = e.pageActionName;
                    (0, s.A)(this, r);
                    var b = (p || {}).headers,
                        O = void 0 === b ? {} : b;
                    n = t.call(this, m);
                    var x = O["x-b3-traceid"] || O["X-B3-TraceId"];
                    return (d.error && d.error.errors || d.error_id || d.errors || l && !l.ok) && (n.errors = function(e) {
                        var t, r, n = e.data,
                            o = e.response,
                            a = e.traceId,
                            s = e.url,
                            l = e.pageActionName,
                            u = void 0 === l ? "fetch-client-pageAction" : l,
                            d = null == n ? void 0 : n.errors,
                            p = null == n || null === (t = n.error) || void 0 === t ? void 0 : t.errors,
                            m = (null == n ? void 0 : n.data) || {},
                            g = d || p,
                            b = (null == o ? void 0 : o.message) || (null == n ? void 0 : n.message) || "No message",
                            O = (0, i.A)(s) || "Unknown",
                            x = [A(A({}, n), {}, {
                                message: b,
                                status: null == o ? void 0 : o.status,
                                statusText: null == o ? void 0 : o.statusText,
                                crcCode: (null == n ? void 0 : n.crcCode) || (0, h.A)({
                                    url: s,
                                    code: null == n ? void 0 : n.code,
                                    status: null == o ? void 0 : o.status,
                                    message: b
                                })
                            })],
                            w = null == n ? void 0 : n.error,
                            C = w && "string" == typeof w.code;
                        if (Object.keys(m).forEach((function(e) {
                                var t;
                                null !== (t = m[e]) && void 0 !== t && t.error && x.push(m[e].error)
                            })), g && g.length) x = y([].concat((0, f.A)(g), (0, f.A)(x)), s, O);
                        else if (C) {
                            var S = null == n ? void 0 : n.error;
                            x = y([A(A({}, S), {}, {
                                crcCode: (null == S ? void 0 : S.crcCode) || (0, h.A)({
                                    url: s,
                                    code: S.code
                                })
                            })], s, O)
                        }
                        for (var P = x.filter((function(e) {
                                return e.crcCode
                            })), k = 1 !== P.length || null != P && null !== (r = P[0]) && void 0 !== r && r.servicePath ? P : P.map((function(e) {
                                return A(A({}, e), {}, {
                                    servicePath: O
                                })
                            })), j = {}, T = 0; T < k.length; T += 1) {
                            var _ = k[T];
                            if (_ && "object" === (0, v.A)(_)) {
                                var N = _.servicePath || O,
                                    E = _.servicePath && _.servicePath !== O && O,
                                    D = A(A({
                                        traceId: a
                                    }, _), {}, {
                                        servicePath: N
                                    });
                                E && (D.parentServicePath = E), null != D && D.crcCode && !j["".concat(D.crcCode).concat(D.servicePath)] && (j["".concat(D.crcCode).concat(D.servicePath)] = !0, (0, c.A)(u, D))
                            }
                        }
                        return k
                    }({
                        url: o,
                        data: d,
                        response: l,
                        traceId: x,
                        pageActionName: g
                    })), n.message = l.ok ? "Successful response with errors" : d.message || m, n.data = d, n.response = l, n.traceId = x, n.visitId = O["x-nike-visitid"], n.visitorId = O["x-nike-visitorid"], n
                }
                return r
            }((0, p.A)(Error));

            function w(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function C(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? w(Object(r), !0).forEach((function(t) {
                        (0, m.A)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : w(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var S = r(5065);
            const P = function(e, t) {
                var r, n, o = (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}).appName,
                    c = void 0 === o ? a.DOTCOM_UX_ID : o,
                    s = new S.sh({
                        ctxImpl: new S.Y1,
                        recorder: {
                            record: function() {},
                            toString: function() {}
                        },
                        localServiceName: c
                    });
                return {
                    tracer: s,
                    options: new S.r5.HttpClient({
                        tracer: s,
                        serviceName: c,
                        remoteServiceName: (0, i.A)(e)
                    }).recordRequest(t = null !== (r = t) && void 0 !== r ? r : {}, e, (null === (n = t) || void 0 === n ? void 0 : n.method) || "GET")
                }
            };
            var k = {
                pageActionName: "fetch-client-pageAction"
            };
            const j = function(e, t) {
                var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "Fetch response error",
                    n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : k,
                    s = n.pageActionName,
                    l = n.appName,
                    u = void 0 === l ? a.DOTCOM_UX_ID : l,
                    d = P(e, t, {
                        appName: u
                    }),
                    p = d.tracer,
                    v = d.options;
                return new Promise((function(t, n) {
                    return p.scoped((function() {
                        return o()(e, v).then((function(o) {
                            if (204 === o.status) return t({});
                            if (428 === o.status) {
                                var a = (0, i.A)(e);
                                return (0, c.A)(s, {
                                    url: e,
                                    servicePath: a,
                                    message: "recaptcha"
                                }), t({})
                            }
                            return o.text().then((function(a) {
                                var c = {};
                                try {
                                    ((c = JSON.parse(a)).message || c.error || c.errors && c.errors.length) && n(new x({
                                        url: e,
                                        data: c,
                                        options: v,
                                        response: o,
                                        message: c.message || r,
                                        pageActionName: s
                                    })), t(function(e) {
                                        var t, r = e.data,
                                            n = e.url;
                                        return Array.isArray(null == r ? void 0 : r.warnings) && null != r && null !== (t = r.warnings) && void 0 !== t && t.length ? C(C({}, r), {}, {
                                            warnings: r.warnings.map((function(e) {
                                                return C(C({}, e), {}, {
                                                    crcCode: (0, h.A)({
                                                        url: n,
                                                        code: null == e ? void 0 : e.code,
                                                        message: null == r ? void 0 : r.message
                                                    })
                                                })
                                            }))
                                        }) : r
                                    }({
                                        data: c,
                                        url: e
                                    }))
                                } catch (t) {
                                    n(new x({
                                        url: e,
                                        data: {
                                            error: {
                                                message: "Error parsing response data."
                                            }
                                        },
                                        options: v,
                                        response: o,
                                        message: r,
                                        pageActionName: s
                                    }))
                                }
                            }))
                        }))
                    }))
                }))
            }
        },
        5599: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => c
            });
            var n = r(1843);

            function o(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function a(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? o(Object(r), !0).forEach((function(t) {
                        (0, n.A)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : o(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }

            function c(e) {
                var t = e.token,
                    r = e.visitId,
                    n = e.visitorId,
                    o = e.appId,
                    c = e.appName,
                    i = e.spanName,
                    s = e.cloudStack,
                    l = {
                        "Content-Type": "application/json; charset=UTF-8",
                        accept: "application/json",
                        "X-B3-SpanName": c || i,
                        appid: o
                    };
                return s && (l.cloud_stack = s), t ? a(a({}, l), {}, {
                    Authorization: "Bearer ".concat(t)
                }) : n && r ? a(a({}, l), {}, {
                    "x-nike-visitid": r,
                    "x-nike-visitorid": n
                }) : l
            }
        },
        3041: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => d
            });
            var n = r(1913),
                o = r(1681),
                a = r(1547),
                c = r(6514),
                i = "commerce",
                s = "cloud",
                l = "view",
                u = {
                    version: "1.0.0"
                };

            function d() {
                var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : u).version,
                    t = (0, n.A)().NODE_ENV,
                    r = (0, o.A)(),
                    d = r.host,
                    p = r.pathname,
                    v = (0, a.A)((0, c.A)(p));
                return {
                    name: v,
                    environment: t,
                    domain: d,
                    division: i,
                    platform: s,
                    version: e,
                    viewChannel: v,
                    viewName: l
                }
            }
        },
        1658: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => a
            });
            var n = r(1597),
                o = r(3807);

            function a(e) {
                var t = e.s3env,
                    r = void 0 === t ? "prod" : t,
                    a = e.host,
                    c = e.resourcePath,
                    i = e.resource,
                    s = e.file,
                    l = "test" === r ? n.TEST_ASSETS_HOST : n.PROD_ASSETS_HOST;
                return a && (l = "https://".concat(a)), (0, o.A)("".concat(l, "/").concat(c, "/").concat(i, "/").concat(s, ".json"))
            }
        }
    }
]);
//# sourceMappingURL=npm.nike-4ebea4c7.chunk.4a9705.js.map