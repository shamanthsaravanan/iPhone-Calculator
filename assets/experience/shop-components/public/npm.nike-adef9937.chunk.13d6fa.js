"use strict";
(self.webpackChunk_nike_shop_components = self.webpackChunk_nike_shop_components || []).push([
    [2926], {
        1747: (e, t, r) => {
            r.d(t, {
                hC: () => o
            });
            var n = r(8786),
                o = function() {
                    return {
                        type: n.EX
                    }
                }
        },
        8786: (e, t, r) => {
            r.d(t, {
                BG: () => o,
                EX: () => s,
                M: () => n,
                OB: () => c,
                Wj: () => i,
                hj: () => a
            });
            var n = "@partnerCart",
                o = {
                    inFlight: !1,
                    errors: []
                },
                i = "".concat(n, "/CREATE_PREORDER_START"),
                c = ("".concat(n, "/GET_PREORDER_CALLED"), "".concat(n, "/GET_PREORDER_FAILURE")),
                a = ("".concat(n, "/GET_PREORDER_ABORT"), "".concat(n, "/GET_PREORDER_SUCCESS")),
                s = "".concat(n, "/CLEAR_PARTNER_CART_ERRORS")
        },
        2263: (e, t, r) => {
            r.d(t, {
                g: () => p
            });
            var n = r(290),
                o = r(1843),
                i = r(6046),
                c = r.n(i),
                a = r(6070),
                s = r(8786);

            function u(e, t) {
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
                    t % 2 ? u(Object(r), !0).forEach((function(t) {
                        (0, o.A)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : u(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }

            function l() {
                var e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : s.BG,
                    r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                switch (r.type) {
                    case s.Wj:
                        return d(d({}, t), {}, {
                            inFlight: !0
                        });
                    case s.hj:
                        return d(d({}, t), {}, {
                            inFlight: !1
                        });
                    case s.OB:
                        return d(d({}, t), {}, {
                            errors: (null === (e = r.payload) || void 0 === e ? void 0 : e.errors) || [],
                            inFlight: !1
                        });
                    case s.EX:
                        return d(d({}, t), {}, {
                            errors: []
                        });
                    default:
                        return t
                }
            }

            function p(e) {
                return (0, o.A)({}, s.M, c().canUseDOM && (0, a.A)(s.M, l, d({
                    blacklist: ["inFlight"].concat((0, n.A)((null == e ? void 0 : e.blacklist) || []))
                }, e)))
            }
        },
        4049: (e, t, r) => {
            r.d(t, {
                eX: () => c
            });
            var n = r(4133),
                o = r(8786),
                i = (0, n.createSelector)((function(e) {
                    return e[o.M] || {}
                }), (function(e) {
                    return e || {}
                })),
                c = ((0, n.createSelector)(i, (function(e) {
                    return e.inFlight || !1
                })), (0, n.createSelector)(i, (function(e) {
                    return e.errors || []
                })))
        },
        9649: function(e, t, r) {
            var n = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ErrorBoundary = void 0;
            const o = n(r(1594)),
                i = "undefined" != typeof window && window.React ? window.React : o.default;
            class c extends i.Component {
                constructor() {
                    super(...arguments), this.state = {}
                }
                static getDerivedStateFromError(e) {
                    return {
                        error: e
                    }
                }
                componentDidCatch(e, t) {
                    const {
                        onError: r,
                        endpoint: n
                    } = this.props;
                    if ("function" == typeof r) try {
                        r.call(this, e, t.componentStack)
                    } catch (e) {}
                    window.newrelic && window.newrelic.noticeError(e, {
                        endpoint: n
                    })
                }
                render() {
                    const {
                        children: e,
                        fallback: t = null
                    } = this.props, {
                        error: r
                    } = this.state;
                    return r ? t ? i.createElement(t, null) : null : i.createElement(i.Fragment, null, null != e ? e : null)
                }
            }
            t.ErrorBoundary = c
        },
        320: function(e, t, r) {
            var n = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.FallbackHTML = void 0;
            const o = n(r(1594)),
                i = "undefined" != typeof window && window.React ? window.React : o.default;
            t.FallbackHTML = ({
                html: e,
                container: t = "div"
            }) => e ? i.createElement(t, {
                dangerouslySetInnerHTML: {
                    __html: e
                }
            }) : null
        },
        937: function(e, t, r) {
            var n = this && this.__createBinding || (Object.create ? function(e, t, r, n) {
                    void 0 === n && (n = r), Object.defineProperty(e, n, {
                        enumerable: !0,
                        get: function() {
                            return t[r]
                        }
                    })
                } : function(e, t, r, n) {
                    void 0 === n && (n = r), e[n] = t[r]
                }),
                o = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                    Object.defineProperty(e, "default", {
                        enumerable: !0,
                        value: t
                    })
                } : function(e, t) {
                    e.default = t
                }),
                i = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var r in e) "default" !== r && Object.prototype.hasOwnProperty.call(e, r) && n(t, e, r);
                    return o(t, e), t
                },
                c = this && this.__rest || function(e, t) {
                    var r = {};
                    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
                    if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                        var o = 0;
                        for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]])
                    }
                    return r
                },
                a = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.RemoteComponent = void 0;
            const s = i(r(1594)),
                u = r(8243),
                d = r(320),
                l = r(9649),
                p = r(6995),
                f = a(r(3579)),
                m = r(5646),
                y = "undefined" != typeof window && window.React ? window.React : s.default,
                h = new Map;
            const v = s.memo((e => {
                var t, {
                        endpoint: r,
                        wrapperTagName: n = "div",
                        FallbackComponent: o = d.FallbackHTML,
                        request: i = {
                            headers: {},
                            query: {}
                        }
                    } = e,
                    a = c(e, ["endpoint", "wrapperTagName", "FallbackComponent", "request"]);
                const v = y.useContext(f.default),
                    {
                        query: O,
                        headers: b
                    } = i,
                    [w] = s.useState((() => u.v4())),
                    [g, j] = s.useState((() => function(e) {
                        if (h.has(e)) return h.get(e);
                        const t = {
                            component: "",
                            html: "",
                            initialProps: {},
                            moduleUrl: "",
                            tagName: "div"
                        };
                        if ("undefined" == typeof window) return t;
                        const r = document.getElementById(e);
                        if (!r) return p.warn("Unable to hydrate initial HTML. You may see empty content in your remote component while it is reloaded client-side."), t;
                        const n = r.querySelector('[type="text/x-remote-component-data"]'),
                            o = t;
                        return n ? Object.assign(o, JSON.parse(n.innerText)) : p.warn("Unable to provide initial data for your remote component.\nYou may see see your content refresh client-side. Avoid this and provide initial data from SSR when possible"), h.set(e, Object.assign(o, {
                            html: r.innerHTML,
                            tagName: r.tagName.toLowerCase()
                        })).get(e)
                    }(w))),
                    {
                        html: _,
                        tagName: E,
                        component: P,
                        initialProps: R
                    } = g,
                    C = "undefined" == typeof window,
                    D = y.useRef(C ? null : null === (t = window[P]) || void 0 === t ? void 0 : t.default),
                    k = s.useCallback((async () => {
                        const e = await fetch(m.formatRemoteUrl(r, O), {
                                headers: Object.assign({
                                    accept: "application/json"
                                }, b)
                            }),
                            t = await e.json(),
                            n = {
                                component: t.component,
                                moduleUrl: t.moduleUrl,
                                html: t.html,
                                initialProps: t.initialProps
                            };
                        j(n)
                    }), []);
                y.useEffect((() => {
                    void 0 === window[P] && k().catch(console.error)
                }), [k]);
                let I = R;
                if ("undefined" == typeof window) return null;
                const S = y.memo((e => y.createElement(o, Object.assign({}, Object.assign({
                    container: E,
                    html: _
                }, e)))));
                if (!document.getElementById(w) && m.isDataFetched(g)) {
                    const e = document.createElement("div");
                    e.id = w;
                    const t = document.createElement("script");
                    t.type = "text/x-remote-component-data", t.innerText = JSON.stringify(g), e.appendChild(t), document.body.appendChild(e)
                }
                if (m.isDataFetched(g) && !D.current) {
                    const e = `${g.component}-module-script-${w}`,
                        t = document.getElementById(e);
                    if (t) D.current = y.lazy((async () => new Promise(((e, r) => {
                        t.onload = () => e(window[P]), t.onerror = r
                    }))));
                    else {
                        const t = document.createElement("script");
                        t.async = !0, t.src = g.moduleUrl, t.id = e, document.body.appendChild(t), D.current = y.lazy((async () => new Promise(((e, r) => {
                            t.onload = () => e(window[P]), t.onerror = r
                        }))))
                    }
                }
                const A = Object.assign(Object.assign({}, I), a);
                return v[w] = {
                    endpoint: r,
                    id: w,
                    props: Object.assign(Object.assign({
                        wrapperTagName: n
                    }, I), a),
                    request: i
                }, m.isDataFetched(g) ? y.createElement(l.ErrorBoundary, {
                    endpoint: r,
                    fallback: S
                }, y.createElement(y.Suspense, {
                    fallback: y.createElement(S, Object.assign({}, A))
                }, y.createElement(D.current, Object.assign({}, A)))) : y.createElement(S, null)
            }));
            t.RemoteComponent = v
        },
        3579: function(e, t, r) {
            var n = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.RemoteComponentProvider = void 0;
            const o = n(r(1594)),
                i = o.default.createContext({});
            t.RemoteComponentProvider = ({
                children: e,
                remotes: t
            }) => o.default.createElement(i.Provider, {
                value: t
            }, e), t.default = i
        },
        7779: (e, t, r) => {
            t.O7 = void 0;
            var n = r(937);
            Object.defineProperty(t, "O7", {
                enumerable: !0,
                get: function() {
                    return n.RemoteComponent
                }
            });
            var o = r(3579)
        },
        6995: (e, t) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.warn = void 0, t.warn = function(e) {
                0
            }
        },
        5646: function(e, t, r) {
            var n = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.isDataFetched = t.formatRemoteUrl = void 0;
            const o = n(r(4484));
            t.formatRemoteUrl = (e, t) => {
                const r = new URL(e),
                    n = r.search.substring(1),
                    i = `${r.origin}${r.pathname}`,
                    c = o.default.stringify(t) ? `${o.default.stringify(t)}&` : "",
                    a = (e => {
                        if ("undefined" == typeof window || !e) return "";
                        const t = window.location,
                            r = new URLSearchParams(t.search).get(`nikeEnv_${e}`);
                        return r ? `nikeEnv=${r}&` : ""
                    })(r.pathname.replace("/fragments/", ""));
                return n ? `${i}?${a}${c}${n}&json=true` : `${e}?${a}${c}json=true`
            };
            t.isDataFetched = e => "" !== e.component && "" !== e.moduleUrl
        },
        6627: (e, t, r) => {
            r.d(t, {
                Jg: () => f,
                RH: () => d,
                d7: () => p,
                mc: () => u,
                sI: () => l,
                yw: () => s
            });
            var n = r(1843),
                o = r(7213),
                i = r(8578);

            function c(e, t) {
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
                    t % 2 ? c(Object(r), !0).forEach((function(t) {
                        (0, n.A)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : c(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var s = function(e) {
                    var t = e.service,
                        r = (0, o.A)(e, ["service"]);
                    return {
                        type: i.cv,
                        meta: {
                            service: t
                        },
                        payload: r
                    }
                },
                u = function(e) {
                    var t = e.appId,
                        r = e.service,
                        n = e.country,
                        c = e.merchGroup,
                        s = e.token,
                        u = (0, o.A)(e, ["appId", "service", "country", "merchGroup", "token"]);
                    return {
                        type: i._7,
                        meta: {
                            appId: t,
                            merchGroup: c,
                            service: r,
                            token: s
                        },
                        payload: a({
                            country: n
                        }, u)
                    }
                },
                d = function(e) {
                    var t = e.errors,
                        r = e.service,
                        n = e.items,
                        c = e.totals,
                        s = e.id,
                        u = e.promotionCodes,
                        d = void 0 === u ? [] : u,
                        l = e.warnings,
                        p = e.brand,
                        f = e.channel,
                        m = e.country,
                        y = e.currency,
                        h = (0, o.A)(e, ["errors", "service", "items", "totals", "id", "promotionCodes", "warnings", "brand", "channel", "country", "currency"]);
                    return {
                        type: i.BJ[r] || i.jI,
                        meta: {
                            service: r
                        },
                        payload: {
                            errors: t,
                            warnings: l,
                            data: a({
                                brand: p,
                                channel: f,
                                country: m,
                                currency: y,
                                id: s,
                                items: n,
                                totals: c,
                                promotionCodes: d
                            }, h)
                        }
                    }
                },
                l = function(e) {
                    var t = e.service,
                        r = e.error,
                        n = e.crcCode,
                        o = e.data,
                        c = e.code,
                        a = e.field,
                        s = e.itemsRemoved;
                    return {
                        type: i.kY[t] || i.Oh,
                        meta: {
                            service: t
                        },
                        error: !0,
                        payload: {
                            error: r,
                            crcCode: n,
                            data: o,
                            code: c,
                            field: a,
                            itemsRemoved: s
                        }
                    }
                },
                p = function() {
                    return {
                        type: i.Il
                    }
                },
                f = function() {
                    return {
                        type: i.tp
                    }
                }
        },
        7543: (e, t, r) => {
            r.d(t, {
                A: () => l
            });
            var n = r(1843),
                o = r(7615),
                i = r(8578),
                c = r(1597),
                a = r(9542),
                s = r(6627);

            function u(e, t) {
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
                    t % 2 ? u(Object(r), !0).forEach((function(t) {
                        (0, n.A)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : u(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }

            function l(e) {
                var t = e.appId,
                    r = void 0 === t ? c.DOTCOM_UX_ID : t,
                    n = e.brand,
                    u = void 0 === n ? c.NIKE_BRAND : n,
                    l = e.channel,
                    p = void 0 === l ? c.NIKECOM_CHANNEL : l,
                    f = e.country,
                    m = e.token,
                    y = e.promotionCode,
                    h = e.visitId,
                    v = e.visitorId,
                    O = e.cloudStack,
                    b = e.host;
                return function(e) {
                    var t = {
                            cloudStack: O,
                            token: m,
                            visitId: h,
                            visitorId: v,
                            appId: r,
                            brand: u,
                            channel: p,
                            country: f,
                            host: b,
                            items: [y]
                        },
                        n = i.qn;
                    return e((0, s.yw)(d({
                        service: n
                    }, t))), (0, o.A)(t).then((function(t) {
                        return e((0, s.RH)(d({
                            service: n
                        }, t)))
                    }), (function(r) {
                        return e((0, a.A)({
                            service: n,
                            params: t,
                            error: r
                        }))
                    }))
                }
            }
        },
        6395: (e, t, r) => {
            r.d(t, {
                A: () => d
            });
            var n = r(1843),
                o = r(8578),
                i = r(1597),
                c = r(6627),
                a = r(3013);

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

            function u(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? s(Object(r), !0).forEach((function(t) {
                        (0, n.A)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : s(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }

            function d(e) {
                var t = e.appId,
                    r = void 0 === t ? i.DOTCOM_UX_ID : t,
                    n = e.host,
                    s = e.country,
                    d = e.merchGroup,
                    l = e.designViewIds,
                    p = e.brand,
                    f = void 0 === p ? i.NIKE_BRAND : p,
                    m = e.channel,
                    y = void 0 === m ? i.NIKECOM_CHANNEL : m,
                    h = e.cloudStack,
                    v = e.itemId,
                    O = e.items,
                    b = e.token,
                    w = e.visitId,
                    g = e.visitorId,
                    j = e.amount,
                    _ = e.postalAddress1,
                    E = e.postalAddress2,
                    P = e.postalCity,
                    R = e.postalCountry,
                    C = e.postalState,
                    D = e.postalZipCode,
                    k = e.quantity,
                    I = e.recipientEmailAddress,
                    S = e.recipientFirstName,
                    A = e.recipientLastName,
                    M = e.shippingMethod;
                return function(e) {
                    if (!g && !b || !s) return Promise.resolve().then((function() {
                        return e({
                            type: o.yR,
                            payload: {
                                visitId: w,
                                visitorId: g,
                                token: b,
                                country: s
                            }
                        })
                    }));
                    var t = {
                        host: n,
                        token: b,
                        visitId: w,
                        visitorId: g,
                        brand: f,
                        channel: y,
                        designViewIds: l,
                        appId: r,
                        country: s,
                        items: O,
                        cloudStack: h,
                        id: v
                    };
                    if (j) {
                        var i = t.items && t.items[0];
                        i.giftCard = {
                            amount: j
                        }, i.shippingMethod = M, i.shippingAddress = {
                            country: s
                        }, i.recipient = {
                            firstName: S,
                            lastName: A
                        }, I ? (i.shippingAddress.email = I, i.quantity = 1) : (i.shippingAddress = u(u({}, i.shippingAddress), {}, {
                            address1: _,
                            address2: E,
                            city: P,
                            state: C,
                            postalCode: D,
                            country: R || s
                        }), i.quantity = parseInt(k, 10) || 1)
                    }
                    return e((0, c.mc)(u({
                        service: o.R2,
                        country: s,
                        merchGroup: d,
                        appId: r
                    }, t))), e((0, a.A)(t))
                }
            }
        }
    }
]);
//# sourceMappingURL=npm.nike-adef9937.chunk.13d6fa.js.map