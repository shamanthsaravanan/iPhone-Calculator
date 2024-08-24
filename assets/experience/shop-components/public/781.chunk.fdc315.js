/*! For license information please see 781.chunk.fdc315.js.LICENSE.txt */
"use strict";
(self.webpackChunk_nike_shop_components = self.webpackChunk_nike_shop_components || []).push([
    [781, 1525, 5399], {
        3301: (e, n, t) => {
            var r = t(1594);
            var i = "function" == typeof Object.is ? Object.is : function(e, n) {
                    return e === n && (0 !== e || 1 / e == 1 / n) || e != e && n != n
                },
                o = r.useState,
                a = r.useEffect,
                l = r.useLayoutEffect,
                u = r.useDebugValue;

            function s(e) {
                var n = e.getSnapshot;
                e = e.value;
                try {
                    var t = n();
                    return !i(e, t)
                } catch (e) {
                    return !0
                }
            }
            var c = "undefined" == typeof window || void 0 === window.document || void 0 === window.document.createElement ? function(e, n) {
                return n()
            } : function(e, n) {
                var t = n(),
                    r = o({
                        inst: {
                            value: t,
                            getSnapshot: n
                        }
                    }),
                    i = r[0].inst,
                    c = r[1];
                return l((function() {
                    i.value = t, i.getSnapshot = n, s(i) && c({
                        inst: i
                    })
                }), [e, t, n]), a((function() {
                    return s(i) && c({
                        inst: i
                    }), e((function() {
                        s(i) && c({
                            inst: i
                        })
                    }))
                }), [e]), u(t), t
            };
            n.useSyncExternalStore = void 0 !== r.useSyncExternalStore ? r.useSyncExternalStore : c
        },
        3118: (e, n, t) => {
            e.exports = t(3301)
        },
        6648: (e, n, t) => {
            t.d(n, {
                A: () => A
            });
            var r = t(2806),
                i = t(4534),
                o = t(4531),
                a = t(7419),
                l = t.n(a),
                u = t(1625),
                s = t(6713);
            const c = function() {
                return (0, u.I)({
                    queryKey: (0, s.A)(["upmId-token"]),
                    queryFn: (e = (0, o.A)(l().mark((function e() {
                        var n, t, r, i, o;
                        return l().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, null === (n = window) || void 0 === n || null === (n = n.webShellClient) || void 0 === n || null === (n = n.identity) || void 0 === n ? void 0 : n.getUserProfile();
                                case 2:
                                    if (e.t0 = e.sent, e.t0) {
                                        e.next = 5;
                                        break
                                    }
                                    e.t0 = {};
                                case 5:
                                    return r = e.t0, i = r.upmId, e.next = 9, null === (t = window) || void 0 === t || null === (t = t.webShellClient) || void 0 === t || null === (t = t.identity) || void 0 === t ? void 0 : t.getAccessToken();
                                case 9:
                                    return o = e.sent, e.abrupt("return", {
                                        upmId: i,
                                        token: o
                                    });
                                case 11:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    }))), function() {
                        return e.apply(this, arguments)
                    }),
                    placeholderData: {
                        upmId: void 0,
                        token: void 0
                    },
                    staleTime: 0
                });
                var e
            };
            var d = t(3207),
                p = t(1630),
                f = t(9204);

            function g(e, n) {
                var t = e.filter((function(e) {
                    return (null == e ? void 0 : e.preferred) || "shipping" === (null == e ? void 0 : e.label)
                }))[0] || (null == e ? void 0 : e[0]);
                return (null == t ? void 0 : t.country) === n ? t : {}
            }
            const m = function() {
                var e = (0, o.A)(l().mark((function e(n) {
                    var t, r, i, o, a, u;
                    return l().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return r = n.upmId, i = n.token, e.next = 3, (0, d.S)(i, {
                                    upmId: r,
                                    host: p.Ej
                                });
                            case 3:
                                return o = e.sent, a = null === (t = (0, f.A)().country) || void 0 === t ? void 0 : t.toUpperCase(), u = g(o, a), e.abrupt("return", {
                                    city: u.locality,
                                    state: u.province,
                                    postalCode: u.code,
                                    country: u.country,
                                    address1: u.line1,
                                    address2: u.line2,
                                    address3: u.line3
                                });
                            case 7:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })));
                return function(n) {
                    return e.apply(this, arguments)
                }
            }();
            var v = t(3714);
            const y = function() {
                var e, n = c().data,
                    t = n.upmId,
                    r = n.token;
                return (0, u.I)({
                    queryKey: (0, s.A)(["profileAddress"]),
                    enabled: Boolean(r && t),
                    queryFn: (e = (0, o.A)(l().mark((function e() {
                        var n;
                        return l().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, m({
                                        upmId: t,
                                        token: r
                                    });
                                case 2:
                                    return n = e.sent, (0, v.A)("nike-shop-profile-fetched", null, {
                                        usePageAction: !0
                                    }), e.abrupt("return", n);
                                case 5:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    }))), function() {
                        return e.apply(this, arguments)
                    }),
                    staleTime: 1 / 0
                })
            };
            var h = t(6378);
            const A = function() {
                var e = (0, r.d4)(i.$v),
                    n = y().postalCode;
                return (0, h.A)({
                    userLocationPostalCode: e,
                    profileAddressPostalCode: n
                })
            }
        },
        6713: (e, n, t) => {
            t.d(n, {
                A: () => i
            });
            var r = t(290);
            const i = function(e) {
                return ["@NikeShop"].concat((0, r.A)(e))
            }
        },
        1389: (e, n, t) => {
            t.r(n), t.d(n, {
                default: () => r
            });
            const r = t(7987).Ay
        },
        4600: (e, n, t) => {
            t.r(n), t.d(n, {
                default: () => r
            });
            const r = t(2434).A
        },
        8194: (e, n, t) => {
            t.d(n, {
                AF: () => c,
                Gk: () => a,
                Ij: () => u,
                Q8: () => s,
                dE: () => l,
                qk: () => o
            });
            var r = t(1900),
                i = t(9848);
            var o = (0, r.AH)("@media only screen and (max-width:", i.A.bp("desktop") - 1, "px){margin-left:", i.A.spacing(9), ";margin-right:", i.A.spacing(9), ";}"),
                a = (0, r.AH)("margin:", i.A.spacing(6), ";", o, ""),
                l = {
                    name: "56sg73",
                    styles: "align-self:flex-end;"
                },
                u = {
                    name: "8atqhb",
                    styles: "width:100%;"
                },
                s = {
                    name: "herp1y",
                    styles: "border-radius:24px;"
                },
                c = (0, r.AH)("justify-content:center;padding:", i.A.spacing(2), " ", i.A.spacing(6), ";")
        },
        8061: (e, n, t) => {
            t.d(n, {
                A: () => D
            });
            var r = t(2806),
                i = t(6431),
                o = t(4534),
                a = t(8012),
                l = t(1843),
                u = t(1594),
                s = t.n(u),
                c = t(3810),
                d = t(4476),
                p = t(4062),
                f = t(2663),
                g = t(4525),
                m = t(9848),
                v = t(8194);
            const y = (0, g.A)("h2", {
                target: "e55fed50"
            })(v.Gk, " font:var(--podium-cds-typography-320-to-1919-title3);padding-bottom:", m.A.spacing(3), ";");
            var h = t(4600),
                A = t(6511),
                k = (0, g.A)("p", {
                    target: "e1exxtp10"
                })("margin-left:", m.A.spacing(7), ";margin-right:", m.A.spacing(7), ";@media only screen and (max-width:", m.A.bp("desktop") - 1, "px){margin-left:", m.A.spacing(9), ";margin-right:", m.A.spacing(9), ";}"),
                b = (0, g.A)("div", {
                    target: "e1exxtp11"
                })("display:block;text-align:right;padding:", m.A.spacing(7), ";"),
                I = (0, g.A)(A.A, {
                    target: "e1exxtp12"
                })(v.AF, " @media only screen and (max-width:", m.A.bp("desktop") - 1, "px){width:100%;}"),
                w = t(931),
                S = t(1900);
            const x = function(e) {
                var n = e.onClose;
                return (0, S.Y)(w.A, {
                    flexDirection: "column"
                }, (0, S.Y)(y, null, (0, S.Y)(h.default, {
                    stringKey: "pickupIneligibleModalTitle",
                    primaryValue: "Store Pickup Unavailable",
                    description: "Title for item ineligible store pickup",
                    element: null
                })), (0, S.Y)(k, null, (0, S.Y)(h.default, {
                    stringKey: "pickupIneligibleModalDetail",
                    primaryValue: "This product is not eligible for store pickup. If it is in your bag when you check out, you will not be able to choose store pickup for any items in your order.",
                    description: "Details regarding ineligible store pickup item affecting cart",
                    element: null
                })), (0, S.Y)(b, null, (0, S.Y)(I, {
                    onClick: n
                }, (0, S.Y)(h.default, {
                    stringKey: "gotItButton",
                    primaryValue: "Got It",
                    description: "Acknowledgement button for pickup unavailable modal",
                    element: null
                }))))
            };
            var C = t(1389),
                Y = s().lazy((function() {
                    return Promise.all([t.e(3215), t.e(6212), t.e(8063), t.e(948), t.e(1923), t.e(2926), t.e(1324), t.e(9052), t.e(8333), t.e(8131), t.e(3199), t.e(5344), t.e(5555), t.e(1438), t.e(5518), t.e(2963), t.e(7853), t.e(7914), t.e(7611)]).then(t.bind(t, 3797))
                })),
                P = (0, g.A)(Y, {
                    target: "e1n05w970"
                })((function(e) {
                    var n = e.showPickupIneligibleMessage;
                    return "\n  @media only screen and (max-width: ".concat(m.A.bp("desktop") - 1, n ? "px) {\n    & .modal-container {\n      will-change: transform;\n      position: absolute;\n      bottom: 0;\n      height: max-content;\n      transform: translateY(100%);\n    }\n  }\n  " : "px) {\n    & .modal-container {\n      will-change: transform;\n      top: 0;\n      transform: translateY(100%);\n    }\n  }\n  ")
                }), ""),
                O = t(6648),
                T = {
                    SHIP: (0, S.Y)(h.default, {
                        stringKey: "shippingOptions",
                        primaryValue: "Shipping Options",
                        description: "Shipping options header",
                        element: null
                    }),
                    PICKUP: (0, S.Y)(h.default, {
                        stringKey: "pickupOfferingsTitle",
                        primaryValue: "Select Pickup Location",
                        description: "Pickup offerings title to display to user",
                        element: null
                    })
                },
                L = !1;
            const M = function(e) {
                var n = e.fulfillmentType,
                    t = e.isOpen,
                    r = e.locationSearchResults,
                    i = e.storedLocationId,
                    o = e.onClose,
                    a = e.productId,
                    u = e.skuId,
                    g = e.showPickupIneligibleMessage,
                    m = e.OfferingItems;
                t && (L = !0);
                var v = (0, O.A)(),
                    A = (0, S.Y)(h.default, {
                        stringKey: "label.close",
                        primaryValue: "Close",
                        description: "Modal close button accessibility string",
                        element: null
                    });
                return (0, S.Y)(P, {
                    isOpen: t,
                    onClose: o,
                    onOverlayClick: o,
                    className: "dialog-container",
                    "data-automation": "shop-dialog",
                    showPickupIneligibleMessage: g
                }, (0, S.Y)(w.A, {
                    flexDirection: "column"
                }, (0, S.Y)(p.A, {
                    onClick: o,
                    "aria-label": A.props.primaryValue
                }), L && (0, S.Y)(c.A, {
                    shouldBlockRender: !0,
                    fetchStaticData: f.A
                }, (0, S.Y)(d.A.Consumer, null, (function(e) {
                    return e.ready && (0, S.Y)(C.default, {
                        fromLocPlatform: !1,
                        currentLanguageTag: e.language,
                        translations: (0, l.A)({}, e.language, e.translations)
                    }, g ? (0, S.Y)(x, {
                        onClose: o
                    }) : (0, S.Y)(s().Fragment, null, (0, S.Y)(y, null, T[n]), (0, S.Y)(m, {
                        fulfillmentType: n,
                        handleClose: o,
                        language: e.language,
                        postalCode: v,
                        productId: a,
                        skuId: u,
                        storedLocationId: i,
                        locationSearchResults: r
                    })))
                })))))
            };
            const D = function(e) {
                var n = e.onClose,
                    t = e.OfferingItems;
                return (0, r.Ng)((function(e) {
                    var n = (0, i.r)(e),
                        r = n.fulfillmentType,
                        l = n.isDialogOpen,
                        u = n.itemId,
                        s = n.productId,
                        c = n.showPickupIneligibleMessage,
                        d = n.skuId;
                    return {
                        fulfillmentType: r,
                        isOpen: l,
                        itemId: u,
                        locationSearchResults: (0, a.oS)(e),
                        productId: s,
                        showPickupIneligibleMessage: c,
                        skuId: d,
                        storedLocationId: (0, o.MG)(e),
                        OfferingItems: t
                    }
                }), {
                    onClose: n
                })(M)
            }
        },
        4534: (e, n, t) => {
            t.d(n, {
                $v: () => l,
                MG: () => a
            });
            var r = t(4133),
                i = t(5238),
                o = (0, r.createSelector)(i.A, (function(e) {
                    return e.location || {}
                })),
                a = (0, r.createSelector)(o, (function(e) {
                    return e.locationId || ""
                })),
                l = (0, r.createSelector)(o, (function(e) {
                    return e.postalCode || ""
                }))
        },
        8012: (e, n, t) => {
            t.d(n, {
                Vl: () => c,
                XA: () => u,
                _F: () => s,
                oS: () => l
            });
            var r = t(4133),
                i = t(1630),
                o = t(5238),
                a = (0, r.createSelector)(o.A, (function(e) {
                    return e.normalized || {}
                })),
                l = (0, r.createSelector)(a, (function(e) {
                    return e.locationSearchResults || {}
                })),
                u = (0, r.createSelector)(a, (function(e) {
                    return e.offeringItems || {}
                })),
                s = (0, r.createSelector)(a, (function(e) {
                    var n;
                    return (null == e || null === (n = e.locations) || void 0 === n || null === (n = n.SEARCH) || void 0 === n ? void 0 : n.results) || []
                })),
                c = (0, r.createSelector)(l, s, (function(e, n) {
                    return n.filter((function(n) {
                        var t = (null == e ? void 0 : e[n]) || {},
                            r = t.itemAvailability;
                        return t.type === i.cD.store && ("PARTIAL" === r || "FULL" === r)
                    }))[0] || ""
                }))
        },
        6431: (e, n, t) => {
            t.d(n, {
                r: () => o
            });
            var r = t(4133),
                i = t(5238),
                o = (0, r.createSelector)(i.A, (function(e) {
                    return e.ui || {}
                }))
        },
        6478: (e, n, t) => {
            t.d(n, {
                A: () => a
            });
            var r = t(4133),
                i = t(6431),
                o = t(8012);
            const a = (0, r.createSelector)(i.r, o.XA, (function(e, n) {
                var t;
                return (null == n || null === (t = n[e.itemId || e.skuId]) || void 0 === t ? void 0 : t.fulfillmentOfferings) || []
            }))
        }
    }
]);
//# sourceMappingURL=781.chunk.fdc315.js.map