"use strict";
(self.webpackChunk_nike_shop_components = self.webpackChunk_nike_shop_components || []).push([
    [1324], {
        1994: (e, r, t) => {
            t.d(r, {
                A: () => f
            });
            var n = t(1843),
                o = t(7371),
                i = t(8578),
                c = t(1597),
                u = t(9542),
                d = t(6627);

            function s(e, r) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    r && (n = n.filter((function(r) {
                        return Object.getOwnPropertyDescriptor(e, r).enumerable
                    }))), t.push.apply(t, n)
                }
                return t
            }

            function a(e) {
                for (var r = 1; r < arguments.length; r++) {
                    var t = null != arguments[r] ? arguments[r] : {};
                    r % 2 ? s(Object(t), !0).forEach((function(r) {
                        (0, n.A)(e, r, t[r])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : s(Object(t)).forEach((function(r) {
                        Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
                    }))
                }
                return e
            }

            function f() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    r = e.appId,
                    t = void 0 === r ? c.DOTCOM_UX_ID : r,
                    n = e.country,
                    s = e.brand,
                    f = void 0 === s ? c.NIKE_BRAND : s,
                    v = e.channel,
                    l = void 0 === v ? c.NIKECOM_CHANNEL : v,
                    p = e.cloudStack,
                    O = e.merchGroup,
                    y = e.token,
                    b = e.visitId,
                    h = e.visitorId,
                    m = e.host;
                return function(e) {
                    if (!h && !y || !n) return Promise.resolve().then((function() {
                        return e({
                            type: i.yR,
                            payload: {
                                visitId: b,
                                visitorId: h,
                                token: y,
                                country: n
                            }
                        })
                    }));
                    var r = i.CN,
                        c = {
                            host: m,
                            cloudStack: p,
                            brand: f,
                            channel: l,
                            appId: t,
                            token: y,
                            visitId: b,
                            visitorId: h,
                            country: n
                        };
                    return e((0, d.mc)(a({
                        service: r,
                        country: n,
                        merchGroup: O,
                        appId: t,
                        cloudStack: p
                    }, c))), (0, o.A)(c).then((function(t) {
                        return e((0, d.RH)(a({
                            service: r
                        }, t)))
                    }), (function(t) {
                        return e((0, u.A)({
                            service: r,
                            params: c,
                            error: t
                        }))
                    }))
                }
            }
        },
        9542: (e, r, t) => {
            t.d(r, {
                A: () => b
            });
            var n = t(290),
                o = t(1843),
                i = t(7316),
                c = t.n(i),
                u = t(9600),
                d = t(6627),
                s = t(5789),
                a = t(7325),
                f = t(8689);

            function v(e, r) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    r && (n = n.filter((function(r) {
                        return Object.getOwnPropertyDescriptor(e, r).enumerable
                    }))), t.push.apply(t, n)
                }
                return t
            }

            function l(e) {
                for (var r = 1; r < arguments.length; r++) {
                    var t = null != arguments[r] ? arguments[r] : {};
                    r % 2 ? v(Object(t), !0).forEach((function(r) {
                        (0, o.A)(e, r, t[r])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : v(Object(t)).forEach((function(r) {
                        Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
                    }))
                }
                return e
            }
            var p = {
                    PRODUCT_NOT_BUYABLE: !0,
                    OUT_OF_STOCK: !0
                },
                O = {
                    ITEM_QUANTITY_LIMIT: !0
                },
                y = {
                    PROMOTION_INVALID: !0,
                    PROMOTION_EXPIRED: !0
                };

            function b(e) {
                var r = e.service,
                    t = e.error,
                    i = e.params;
                return function(e, v) {
                    var b = t.errors,
                        h = t.data;
                    if (b && b.length) {
                        var m, I, g = b.filter((function(e) {
                                return e.field
                            })).reduce((function(e, r) {
                                var t = p[r.code] || O[r.code] || y[r.code],
                                    i = c()(h, r.field.split("/").filter((function(e) {
                                        return e
                                    })).join("."));
                                if (!isNaN(i)) {
                                    var u = r.field.split("/").filter((function(e) {
                                            return e
                                        })).join(".").replace("quantity", "id"),
                                        d = c()(h, u);
                                    return t ? l(l({}, e), {}, {
                                        reduceQuantity: l(l({}, e.reduceQuantity), {}, (0, o.A)({}, d, !0))
                                    }) : e
                                }
                                return t ? y[r.code] ? l(l({}, e), {}, {
                                    invalidPromoCodes: [].concat((0, n.A)(e.invalidPromoCodes), [i])
                                }) : l(l({}, e), {}, {
                                    notBuyableSkus: l(l({}, e.notBuyableSkus), {}, (0, o.A)({}, i, !0))
                                }) : e
                            }), {
                                invalidPromoCodes: [],
                                notBuyableSkus: {},
                                reduceQuantity: {}
                            }),
                            j = Object.keys(g.reduceQuantity).length > 0,
                            P = Object.keys(g.notBuyableSkus).length > 0,
                            A = g.invalidPromoCodes.length > 0;
                        if (A && !P && !j) return e((0, s.A)(l(l({}, i), {}, {
                            promotionCodes: g.invalidPromoCodes
                        }))).then((function() {
                            return b.map((function(t) {
                                var n = t.message,
                                    o = t.crcCode,
                                    i = t.code,
                                    c = t.field;
                                return e((0, d.sI)({
                                    service: r,
                                    error: new Error(n),
                                    code: i,
                                    crcCode: o,
                                    data: h,
                                    field: c
                                }))
                            }))
                        }));
                        if (j && !P && !A) return e((0, a.A)(l(l({}, i), {}, {
                            validateOnly: !0
                        }))).then((function() {
                            return b.forEach((function(t) {
                                var n = t.message,
                                    o = t.crcCode,
                                    i = t.code,
                                    c = t.field;
                                return e((0, d.sI)({
                                    service: r,
                                    error: new Error(n),
                                    code: i,
                                    crcCode: o,
                                    data: h,
                                    field: c
                                }))
                            }))
                        }));
                        if (P && !j && !A) {
                            var w = c()(h, "items", []).filter((function(e) {
                                return g.notBuyableSkus[e.skuId]
                            }));
                            if (w.length) return e((0, u.A)(l(l({}, i), {}, {
                                items: w
                            }))).then((function() {
                                return b.forEach((function(t) {
                                    var n = t.message,
                                        o = t.crcCode,
                                        i = t.code,
                                        c = t.field;
                                    return e((0, d.sI)({
                                        service: r,
                                        error: new Error(n),
                                        code: i,
                                        crcCode: o,
                                        data: h,
                                        field: c,
                                        itemsRemoved: w
                                    }))
                                }))
                            }))
                        }
                        if (P && j && !A) {
                            var k = c()(h, "items", []).filter((function(e) {
                                return g.notBuyableSkus[e.skuId]
                            }));
                            return e((0, u.A)(l(l({}, i), {}, {
                                items: k
                            }))).then((function() {
                                return e((0, a.A)(l(l({}, i), {}, {
                                    validateOnly: !0
                                }))).then((function() {
                                    return b.forEach((function(t) {
                                        var n = t.message,
                                            o = t.crcCode,
                                            i = t.code,
                                            c = t.field;
                                        return e((0, d.sI)({
                                            service: r,
                                            error: new Error(n),
                                            code: i,
                                            crcCode: o,
                                            data: h,
                                            field: c,
                                            itemsRemoved: k
                                        }))
                                    }))
                                }))
                            }))
                        }
                        if (P && !j && A) {
                            var C = c()(h, "items", []).filter((function(e) {
                                return g.notBuyableSkus[e.skuId]
                            }));
                            return e((0, u.A)(l(l({}, i), {}, {
                                items: C
                            }))).then((function() {
                                return e((0, s.A)(l(l({}, i), {}, {
                                    promotionCodes: g.invalidPromoCodes
                                }))).then((function() {
                                    return b.forEach((function(t) {
                                        var n = t.message,
                                            o = t.crcCode,
                                            i = t.code,
                                            c = t.field;
                                        return e((0, d.sI)({
                                            service: r,
                                            error: new Error(n),
                                            code: i,
                                            crcCode: o,
                                            data: h,
                                            field: c,
                                            itemsRemoved: C
                                        }))
                                    }))
                                }))
                            }))
                        }
                        if (!P && j && A) return e((0, a.A)(l(l({}, i), {}, {
                            validateOnly: !0
                        }))).then((function() {
                            return e((0, s.A)(l(l({}, i), {}, {
                                promotionCodes: g.invalidPromoCodes
                            }))).then((function() {
                                return b.forEach((function(t) {
                                    var n = t.message,
                                        o = t.crcCode,
                                        i = t.code,
                                        c = t.field;
                                    return e((0, d.sI)({
                                        service: r,
                                        error: new Error(n),
                                        code: i,
                                        crcCode: o,
                                        data: h,
                                        field: c
                                    }))
                                }))
                            }))
                        }));
                        if (P && j && A) {
                            var E = c()(h, "items", []).filter((function(e) {
                                return g.notBuyableSkus[e.skuId]
                            }));
                            return e((0, u.A)(l(l({}, i), {}, {
                                items: E
                            }))).then((function() {
                                return e((0, a.A)(l(l({}, i), {}, {
                                    validateOnly: !0
                                }))).then((function() {
                                    return e((0, s.A)(l(l({}, i), {}, {
                                        promotionCodes: g.invalidPromoCodes
                                    })))
                                })).then((function() {
                                    return b.forEach((function(t) {
                                        var n = t.message,
                                            o = t.crcCode,
                                            i = t.code,
                                            c = t.field;
                                        return e((0, d.sI)({
                                            service: r,
                                            error: new Error(n),
                                            crcCode: o,
                                            code: i,
                                            data: h,
                                            field: c,
                                            itemsRemoved: E
                                        }))
                                    }))
                                }))
                            }))
                        }
                        return 404 === (null == b || null === (m = b[0]) || void 0 === m ? void 0 : m.status) && (null === (I = (0, f.je)(v())) || void 0 === I ? void 0 : I.length) > 0 && e((0, d.Jg)()), b.forEach((function(t) {
                            var n = t.message,
                                o = t.crcCode,
                                i = t.code,
                                c = t.field;
                            return e((0, d.sI)({
                                service: r,
                                error: new Error(n),
                                code: i,
                                crcCode: o,
                                data: h,
                                field: c
                            }))
                        }))
                    }
                    return e((0, d.sI)({
                        service: r,
                        error: t,
                        data: h
                    }))
                }
            }
        },
        7325: (e, r, t) => {
            t.d(r, {
                A: () => a
            });
            var n = t(1843),
                o = t(215),
                i = t(8578),
                c = t(1597),
                u = t(9542),
                d = t(6627);

            function s(e, r) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    r && (n = n.filter((function(r) {
                        return Object.getOwnPropertyDescriptor(e, r).enumerable
                    }))), t.push.apply(t, n)
                }
                return t
            }

            function a(e) {
                var r = e.brand,
                    t = void 0 === r ? c.NIKE_BRAND : r,
                    a = e.channel,
                    f = void 0 === a ? c.NIKECOM_CHANNEL : a,
                    v = e.country,
                    l = e.cloudStack,
                    p = e.host,
                    O = e.token,
                    y = e.visitId,
                    b = e.visitorId,
                    h = e.validateOnly,
                    m = e.quantityOnly,
                    I = e.appId,
                    g = void 0 === I ? c.DOTCOM_UX_ID : I;
                return function(e) {
                    var r = i.fE,
                        c = {
                            appId: g,
                            brand: t,
                            channel: f,
                            country: v,
                            token: O,
                            visitId: y,
                            visitorId: b,
                            validateOnly: h,
                            cloudStack: l,
                            host: p
                        };
                    return m && (c.fields = "totals.quantity,errors,warnings"), e((0, d.yw)({
                        service: r,
                        country: v,
                        token: O,
                        visitorId: b,
                        visitId: y
                    })), (0, o.A)(c).then((function(t) {
                        return e((0, d.RH)(function(e) {
                            for (var r = 1; r < arguments.length; r++) {
                                var t = null != arguments[r] ? arguments[r] : {};
                                r % 2 ? s(Object(t), !0).forEach((function(r) {
                                    (0, n.A)(e, r, t[r])
                                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : s(Object(t)).forEach((function(r) {
                                    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
                                }))
                            }
                            return e
                        }({
                            service: r
                        }, t)))
                    }), (function(t) {
                        return e((0, u.A)({
                            service: r,
                            params: c,
                            error: t
                        }))
                    }))
                }
            }
        },
        9600: (e, r, t) => {
            t.d(r, {
                A: () => f
            });
            var n = t(1843),
                o = t(5818),
                i = t(8578),
                c = t(1597),
                u = t(9542),
                d = t(6627);

            function s(e, r) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    r && (n = n.filter((function(r) {
                        return Object.getOwnPropertyDescriptor(e, r).enumerable
                    }))), t.push.apply(t, n)
                }
                return t
            }

            function a(e) {
                for (var r = 1; r < arguments.length; r++) {
                    var t = null != arguments[r] ? arguments[r] : {};
                    r % 2 ? s(Object(t), !0).forEach((function(r) {
                        (0, n.A)(e, r, t[r])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : s(Object(t)).forEach((function(r) {
                        Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
                    }))
                }
                return e
            }

            function f(e) {
                var r = e.appId,
                    t = void 0 === r ? c.DOTCOM_UX_ID : r,
                    n = e.brand,
                    s = void 0 === n ? c.NIKE_BRAND : n,
                    f = e.channel,
                    v = void 0 === f ? c.NIKECOM_CHANNEL : f,
                    l = e.country,
                    p = e.cloudStack,
                    O = e.host,
                    y = e.items,
                    b = e.id,
                    h = e.token,
                    m = e.visitId,
                    I = e.visitorId;
                return function(e) {
                    var r = {
                            host: O,
                            cloudStack: p,
                            token: h,
                            visitId: m,
                            visitorId: I,
                            appId: t,
                            brand: s,
                            channel: v,
                            country: l,
                            items: y ? y.map((function(e) {
                                return {
                                    id: e.id
                                }
                            })) : [{
                                id: b
                            }]
                        },
                        n = i.dq;
                    return e((0, d.yw)(a({
                        service: n
                    }, r))), (0, o.A)(r).then((function(r) {
                        return e((0, d.RH)(a({
                            service: n
                        }, r)))
                    }), (function(t) {
                        return e((0, u.A)({
                            service: n,
                            params: r,
                            error: t
                        }))
                    }))
                }
            }
        },
        5789: (e, r, t) => {
            t.d(r, {
                A: () => f
            });
            var n = t(1843),
                o = t(256),
                i = t(8578),
                c = t(1597),
                u = t(6627),
                d = t(9542);

            function s(e, r) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    r && (n = n.filter((function(r) {
                        return Object.getOwnPropertyDescriptor(e, r).enumerable
                    }))), t.push.apply(t, n)
                }
                return t
            }

            function a(e) {
                for (var r = 1; r < arguments.length; r++) {
                    var t = null != arguments[r] ? arguments[r] : {};
                    r % 2 ? s(Object(t), !0).forEach((function(r) {
                        (0, n.A)(e, r, t[r])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : s(Object(t)).forEach((function(r) {
                        Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
                    }))
                }
                return e
            }

            function f(e) {
                var r = e.appId,
                    t = void 0 === r ? c.DOTCOM_UX_ID : r,
                    n = e.brand,
                    s = void 0 === n ? c.NIKE_BRAND : n,
                    f = e.channel,
                    v = void 0 === f ? c.NIKECOM_CHANNEL : f,
                    l = e.country,
                    p = e.cloudStack,
                    O = e.host,
                    y = e.token,
                    b = e.promotionCodes,
                    h = void 0 === b ? [] : b,
                    m = e.visitId,
                    I = e.visitorId;
                return function(e) {
                    var r = {
                            host: O,
                            cloudStack: p,
                            token: y,
                            visitId: m,
                            visitorId: I,
                            appId: t,
                            brand: s,
                            channel: v,
                            country: l,
                            items: h
                        },
                        n = i.nw;
                    return e((0, u.yw)(a({
                        service: n
                    }, r))), (0, o.A)(r).then((function(r) {
                        return e((0, u.RH)(a({
                            service: n
                        }, r)))
                    }), (function(t) {
                        return e((0, d.A)({
                            service: n,
                            params: r,
                            error: t
                        }))
                    }))
                }
            }
        },
        4593: (e, r, t) => {
            t.d(r, {
                A: () => v
            });
            var n = t(1843),
                o = t(9924),
                i = t(8578),
                c = t(1597),
                u = t(6627),
                d = t(9542),
                s = t(1434);

            function a(e, r) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    r && (n = n.filter((function(r) {
                        return Object.getOwnPropertyDescriptor(e, r).enumerable
                    }))), t.push.apply(t, n)
                }
                return t
            }

            function f(e) {
                for (var r = 1; r < arguments.length; r++) {
                    var t = null != arguments[r] ? arguments[r] : {};
                    r % 2 ? a(Object(t), !0).forEach((function(r) {
                        (0, n.A)(e, r, t[r])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : a(Object(t)).forEach((function(r) {
                        Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
                    }))
                }
                return e
            }

            function v(e) {
                var r = e.appId,
                    t = void 0 === r ? c.DOTCOM_UX_ID : r,
                    n = e.brand,
                    a = void 0 === n ? c.NIKE_BRAND : n,
                    v = e.channel,
                    l = void 0 === v ? c.NIKECOM_CHANNEL : v,
                    p = e.cloudStack,
                    O = e.country,
                    y = e.giftCard,
                    b = e.host,
                    h = e.id,
                    m = e.items,
                    I = e.offer,
                    g = e.offers,
                    j = e.quantity,
                    P = e.recipient,
                    A = e.shippingAddress,
                    w = e.shippingMethod,
                    k = e.skuId,
                    C = e.token,
                    E = e.valueAddedServices,
                    D = e.visitId,
                    S = e.visitorId;
                return function(e) {
                    var r = i.CT,
                        n = (0, s.K5)(),
                        c = {
                            host: b,
                            cloudStack: p,
                            token: C,
                            visitId: D,
                            visitorId: S,
                            appId: t,
                            brand: a,
                            channel: l,
                            country: O,
                            items: m ? m.map((function(e) {
                                return f(f({}, n), e)
                            })) : [f({
                                giftCard: y,
                                id: h,
                                offer: I,
                                offers: g,
                                quantity: j,
                                recipient: P,
                                shippingAddress: A,
                                shippingMethod: w,
                                skuId: k,
                                valueAddedServices: E
                            }, n)]
                        };
                    return e((0, u.yw)(f({
                        service: r
                    }, c))), (0, o.A)(c).then((function(t) {
                        return e((0, u.RH)(f({
                            service: r
                        }, t)))
                    }), (function(t) {
                        return e((0, d.A)({
                            service: r,
                            params: c,
                            error: t
                        }))
                    }))
                }
            }
        },
        3013: (e, r, t) => {
            t.d(r, {
                A: () => y
            });
            var n = t(1843),
                o = t(9924),
                i = t(8887),
                c = t(8578),
                u = t(1597),
                d = t(3807),
                s = t(408),
                a = t(9542),
                f = t(6627),
                v = t(8689),
                l = t(1434);

            function p(e, r) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    r && (n = n.filter((function(r) {
                        return Object.getOwnPropertyDescriptor(e, r).enumerable
                    }))), t.push.apply(t, n)
                }
                return t
            }

            function O(e) {
                for (var r = 1; r < arguments.length; r++) {
                    var t = null != arguments[r] ? arguments[r] : {};
                    r % 2 ? p(Object(t), !0).forEach((function(r) {
                        (0, n.A)(e, r, t[r])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : p(Object(t)).forEach((function(r) {
                        Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
                    }))
                }
                return e
            }

            function y(e) {
                var r = e.offer,
                    t = e.offers,
                    n = e.token,
                    p = e.visitId,
                    y = e.visitorId,
                    b = e.brand,
                    h = void 0 === b ? u.NIKE_BRAND : b,
                    m = e.channel,
                    I = void 0 === m ? u.NIKECOM_CHANNEL : m,
                    g = e.country,
                    j = e.cloudStack,
                    P = e.host,
                    A = e.id,
                    w = e.items,
                    k = void 0 === w ? [] : w,
                    C = e.appId,
                    E = void 0 === C ? u.DOTCOM_UX_ID : C,
                    D = e.promotionCodes,
                    S = void 0 === D ? [] : D,
                    N = e.designViewIds;
                return function(e, u) {
                    var b = (0, l.K5)(),
                        m = {
                            host: P,
                            cloudStack: j,
                            token: n,
                            visitId: p,
                            visitorId: y,
                            appId: E,
                            brand: h,
                            channel: I,
                            country: g,
                            items: k.map((function(e) {
                                return O(O({}, b), e)
                            }))
                        },
                        w = c.R2;
                    if (S.length && (m.promotionCodes = S), e((0, f.yw)(O({
                            service: w
                        }, m))), null != N && N.length) {
                        var C = A ? o.A : i.A;
                        return (0, s.Ay)({
                            appId: E,
                            fetchClient: d.A,
                            cloudStack: j,
                            versionedQuery: "getskudesignviewids/v1",
                            variables: {
                                designViewIds: N,
                                country: g
                            }
                        }).then((function(n) {
                            var o, i = (null === (o = n.data) || void 0 === o ? void 0 : o.designViews) || [],
                                u = N.reduce((function(e, r, t) {
                                    return e.push(O({
                                        designViewId: String(r)
                                    }, i[t])), e
                                }), []);
                            return m.items = u.map((function(e) {
                                var n, o, i, u, d = null == e || null === (n = e.product) || void 0 === n || null === (o = n.valueAddedServices) || void 0 === o || null === (i = o[0]) || void 0 === i ? void 0 : i.vasType;
                                return O(O({}, b), {}, {
                                    id: A,
                                    offer: r,
                                    offers: t,
                                    skuId: e.skuId,
                                    quantity: 1,
                                    valueAddedServices: [{
                                        id: null == e || null === (u = e.designVasIds) || void 0 === u ? void 0 : u[0],
                                        instruction: {
                                            id: e.designViewId,
                                            type: c.Gv[d]
                                        }
                                    }]
                                })
                            })), C(m).then((function(r) {
                                return e({
                                    type: c.e4,
                                    meta: {
                                        service: w
                                    },
                                    payload: {
                                        data: r
                                    }
                                })
                            }), (function(r) {
                                return e((0, a.A)({
                                    service: w,
                                    params: m,
                                    error: r
                                }))
                            }))
                        }))
                    }
                    return (0, i.A)(m).then((function(r) {
                        return e({
                            type: c.e4,
                            meta: {
                                service: w
                            },
                            payload: {
                                data: r
                            }
                        })
                    }), (function(r) {
                        var t, n = (null == r ? void 0 : r.data) || {};
                        return null != r && null !== (t = r.data) && void 0 !== t && t.items || (n = O(O({}, (null == r ? void 0 : r.data) || {}), {}, {
                            items: (0, v.je)(u())
                        })), e((0, a.A)({
                            service: w,
                            params: m,
                            error: O(O({}, r), {}, {
                                data: n
                            })
                        }))
                    }))
                }
            }
        }
    }
]);
//# sourceMappingURL=npm.nike-2d074c0f.chunk.b2b024.js.map