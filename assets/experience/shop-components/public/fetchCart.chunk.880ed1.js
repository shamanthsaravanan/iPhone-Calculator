"use strict";
(self.webpackChunk_nike_shop_components = self.webpackChunk_nike_shop_components || []).push([
    [1263], {
        2920: (e, t, n) => {
            n.r(t), n.d(t, {
                default: () => v
            });
            var r = n(1843),
                o = n(4531),
                i = n(7419),
                c = n.n(i),
                l = n(1994),
                u = n(1630),
                s = n(3714),
                a = n(9204);

            function p(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function d(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? p(Object(n), !0).forEach((function(t) {
                        (0, r.A)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : p(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            const v = function(e) {
                return function() {
                    var t = (0, o.A)(c().mark((function t(n) {
                        var r, o, i, p, v, f, y, b, h, w, O;
                        return c().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return v = (0, a.A)(), f = null == v || null === (r = v.country) || void 0 === r ? void 0 : r.toUpperCase(), y = null == v ? void 0 : v.hreflang, t.next = 5, null === (o = window) || void 0 === o || null === (o = o.webShellClient) || void 0 === o || null === (o = o.identity) || void 0 === o ? void 0 : o.getAccessToken();
                                case 5:
                                    return b = t.sent, t.next = 8, null === (i = window) || void 0 === i || null === (i = i.webShellClient) || void 0 === i || null === (i = i.identity) || void 0 === i ? void 0 : i.getVisitData();
                                case 8:
                                    return h = t.sent, w = null == v || null === (p = v.langRegion) || void 0 === p ? void 0 : p.toLowerCase().replace("-", "_"), t.next = 12, n((0, l.A)(d(d({}, e), {}, {
                                        localeForCurrency: y,
                                        langLocale: w,
                                        country: f,
                                        token: b,
                                        visitorId: h.visitorId,
                                        visitId: h.visitId,
                                        host: u.Ej
                                    })));
                                case 12:
                                    return O = t.sent, (0, s.A)("nike-shop-cart-fetched", null, {
                                        telemetryData: {
                                            country: f,
                                            langLocale: w,
                                            localeForCurrency: y,
                                            operationName: "getCart"
                                        },
                                        usePageAction: !0
                                    }), t.abrupt("return", O);
                                case 15:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })));
                    return function(e) {
                        return t.apply(this, arguments)
                    }
                }()
            }
        }
    }
]);
//# sourceMappingURL=fetchCart.chunk.880ed1.js.map