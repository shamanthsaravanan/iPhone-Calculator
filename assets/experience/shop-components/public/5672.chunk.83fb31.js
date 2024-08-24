(self.webpackChunk_nike_shop_components = self.webpackChunk_nike_shop_components || []).push([
    [5672], {
        4476: (e, n, r) => {
            "use strict";
            r.d(n, {
                A: () => o
            });
            var t = r(1594);
            const o = r.n(t)().createContext({})
        },
        3810: (e, n, r) => {
            "use strict";
            r.d(n, {
                A: () => h
            });
            var t = r(1637),
                o = r(4805),
                i = r(3526),
                a = r(5426),
                c = r(1933),
                s = r(1843),
                u = r(1594),
                l = r.n(u),
                d = r(5861),
                f = r.n(d),
                p = r(6046),
                v = r(4476);

            function g(e, n, r) {
                return n = (0, a.A)(n), (0, i.A)(e, m() ? Reflect.construct(n, r || [], (0, a.A)(e).constructor) : n.apply(e, r))
            }

            function m() {
                try {
                    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
                } catch (e) {}
                return (m = function() {
                    return !!e
                })()
            }
            var h = function(e) {
                function n(e) {
                    var r;
                    return (0, t.A)(this, n), (r = g(this, n, [e])).state = {
                        ready: !1
                    }, r.init = r.init.bind(r), r
                }
                return (0, c.A)(n, e), (0, o.A)(n, [{
                    key: "componentDidMount",
                    value: function() {
                        p.canUseDOM && this.props.fetchStaticData && this.init()
                    }
                }, {
                    key: "init",
                    value: function() {
                        var e = this;
                        this.props.fetchStaticData().then((function(n) {
                            e.setState(n)
                        }))
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this.props.shouldBlockRender ? this.state.ready && this.props.children : this.props.children;
                        return l().createElement(v.A.Provider, {
                            value: this.state || {}
                        }, e)
                    }
                }])
            }(l().Component);
            (0, s.A)(h, "contextType", v.A), (0, s.A)(h, "propTypes", {
                children: f().node.isRequired,
                fetchStaticData: f().func,
                shouldBlockRender: f().bool
            }), (0, s.A)(h, "defaultProps", {
                shouldBlockRender: !1
            })
        },
        2663: (e, n, r) => {
            "use strict";
            r.d(n, {
                A: () => l
            });
            var t = r(4531),
                o = r(7419),
                i = r.n(o),
                a = r(8578),
                c = r(1658),
                s = r(1630),
                u = r(9204);
            const l = function() {
                var e = (0, t.A)(i().mark((function e() {
                    var n, r, t;
                    return i().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return n = (0, u.A)(), r = n.hreflang, e.prev = 1, e.next = 4, (0, c.A)({
                                    s3env: "prod",
                                    resource: a.Dx,
                                    host: s.TI + "/assets",
                                    resourcePath: "i18n",
                                    file: r
                                });
                            case 4:
                                return t = e.sent, e.abrupt("return", {
                                    ready: !0,
                                    translations: t,
                                    language: r
                                });
                            case 8:
                                return e.prev = 8, e.t0 = e.catch(1), e.abrupt("return", {
                                    ready: !0,
                                    language: r,
                                    translations: {}
                                });
                            case 11:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [1, 8]
                    ])
                })));
                return function() {
                    return e.apply(this, arguments)
                }
            }()
        },
        7136: (e, n, r) => {
            "use strict";
            r.d(n, {
                A: () => i
            });
            var t = r(4525),
                o = r(9848);
            const i = (0, t.A)("p", {
                target: "e12opqvy0"
            })("margin-bottom:", o.A.spacing(4), ";")
        },
        2706: (e, n, r) => {
            "use strict";
            r.r(n), r.d(n, {
                default: () => he
            });
            var t = r(1594),
                o = r.n(t),
                i = r(2806),
                a = r(9196),
                c = r(7676),
                s = r(1630),
                u = r(9256),
                l = r(1900),
                d = o().lazy((function() {
                    return Promise.all([r.e(3215), r.e(6212), r.e(8063), r.e(948), r.e(1923), r.e(2926), r.e(1324), r.e(9052), r.e(8333), r.e(8131), r.e(3199), r.e(5344), r.e(5555), r.e(1438), r.e(5518), r.e(2963), r.e(787), r.e(7883), r.e(781), r.e(4299)]).then(r.bind(r, 4299))
                })),
                f = o().lazy((function() {
                    return Promise.all([r.e(3215), r.e(6212), r.e(8063), r.e(948), r.e(1923), r.e(2926), r.e(1324), r.e(9052), r.e(8333), r.e(8131), r.e(3199), r.e(5344), r.e(5555), r.e(1438), r.e(5518), r.e(2963), r.e(787), r.e(7883), r.e(781), r.e(5359)]).then(r.bind(r, 5359))
                }));
            const p = function() {
                var e = u.kt ? d : f;
                return (0, l.Y)(t.Suspense, {
                    fallback: null
                }, (0, l.Y)(e, null))
            };
            var v = r(4133),
                g = r(6230);
            const m = (0, v.createSelector)(g.A, (function(e) {
                return e[0]
            }));
            var h = r(6059);
            const A = (0, v.createSelector)(m, h.Ae, (function(e, n) {
                return (null == e ? void 0 : e.message) || (null == n ? void 0 : n.message)
            }));
            const y = (0, v.createSelector)(m, h.Ae, (function(e, n) {
                return (null == e ? void 0 : e.crcCode) || (null == n ? void 0 : n.crcCode)
            }));
            const C = (0, v.createSelector)(m, h.Ae, (function(e, n) {
                return (null == e ? void 0 : e.servicePath) || (null == n ? void 0 : n.servicePath)
            }));
            var Y = r(1768),
                k = r(1843),
                x = r(3810),
                S = r(4476),
                b = r(6234),
                w = r(6511),
                P = r(4062),
                R = r(290),
                z = r(4525),
                D = r(9848),
                E = r(931);
            var I = (0, z.A)(E.A, {
                    target: "e1n1kzst0"
                })("background:white;padding:", D.A.spacing(8), ";"),
                T = (0, z.A)("h2", {
                    target: "e1n1kzst1"
                })("font:var(--podium-cds-typography-320-to-1919-title4);margin-bottom:", D.A.spacing(5), ";"),
                K = (0, z.A)("span", {
                    target: "e1n1kzst2"
                })("font:var(--podium-cds-typography-body1-strong);margin-bottom:", D.A.spacing(8), ";"),
                O = (0, z.A)("p", {
                    target: "e1n1kzst3"
                })("margin-bottom:", D.A.spacing(4), ";"),
                B = (0, z.A)("div", {
                    target: "e1n1kzst4"
                })({
                    name: "xi606m",
                    styles: "text-align:center;"
                }),
                V = r(8689),
                M = r(7213),
                _ = r(7136);
            const q = o().lazy((function() {
                return r.e(969).then(r.bind(r, 7631))
            }));
            var N = r(4829),
                W = ["crcCode"],
                j = "generic.error.message";
            const L = function(e) {
                var n, r = (0, N.A)().i18nString,
                    t = e.crcCode,
                    o = (0, M.A)(e, W);
                if (null !== (n = e.productIds) && void 0 !== n && n.length) return (0, l.Y)(q, o);
                var i = r({
                        stringKey: "".concat(t || j),
                        primaryValue: t,
                        description: "CRC Code for Error Message"
                    }),
                    a = i.indexOf("≪≪") > -1 ? r({
                        stringKey: j,
                        primaryValue: "We had an issue with your request. If you continue experiencing issues, try refreshing the page.",
                        description: "Default error message for CRC code"
                    }) : i;
                return (0, l.Y)(_.A, null, a)
            };
            const F = (0, v.createSelector)(m, (function(e) {
                return ((null == e ? void 0 : e.field) || "").replace("items/", "")
            }));
            const G = (0, v.createSelector)(m, (function(e) {
                return (null == e ? void 0 : e.items) || []
            }));
            const H = (0, i.Ng)((function(e, n) {
                var r = F(e, n),
                    t = (0, V.Qi)(e)(r),
                    o = G(e, n),
                    i = Boolean(o.length);
                return t || i ? {
                    productIds: null != t && t.productId ? [null == t ? void 0 : t.productId] : o.map((function(e) {
                        return null == e ? void 0 : e.productId
                    })),
                    itemsRemoved: i
                } : {}
            }))(L);
            var U = r(3714),
                Z = o().lazy((function() {
                    return Promise.all([r.e(3215), r.e(6212), r.e(8063), r.e(948), r.e(1923), r.e(2926), r.e(1324), r.e(9052), r.e(8333), r.e(8131), r.e(3199), r.e(5344), r.e(5555), r.e(1438), r.e(5518), r.e(2963), r.e(1525)]).then(r.bind(r, 4600))
                }));
            const Q = function(e) {
                var n = e.onClose,
                    r = e.crcCode,
                    o = e.message,
                    i = e.renderCallToAction,
                    a = e.reasons,
                    c = e.servicePath;
                (0, t.useEffect)((function() {
                    r && (0, U.A)("Error Modal Viewed", {
                        errorCode: r,
                        servicePath: c,
                        message: o
                    })
                }), [r, c, o]);
                var s = null == a ? void 0 : a.map((function(e) {
                        return e.code
                    })),
                    u = (0, R.A)(new Set(s));
                return (0, l.Y)(I, {
                    flexDirection: "column",
                    "data-automation": "error-message-container"
                }, (0, l.Y)(T, null, (0, l.Y)(Z, {
                    stringKey: "error.errorMessage.header",
                    primaryValue: "Error",
                    description: "Error",
                    element: null
                })), (0, l.Y)(H, {
                    crcCode: r
                }), null == u ? void 0 : u.map((function(e) {
                    return (0, l.Y)(Z, {
                        key: "reason-code-key-".concat(e),
                        stringKey: e,
                        primaryValue: e,
                        description: "Reason code for promotion not applied warning",
                        element: O
                    })
                })), r && (0, l.Y)(_.A, null, (0, l.Y)(K, null, "[ Code: ".concat(r, " ]"))), n && (0, l.Y)(B, null, i()))
            };
            var J = r(5254),
                X = r(2663),
                $ = o().lazy((function() {
                    return Promise.all([r.e(3215), r.e(6212), r.e(8063), r.e(948), r.e(1923), r.e(2926), r.e(1324), r.e(9052), r.e(8333), r.e(8131), r.e(3199), r.e(5344), r.e(5555), r.e(1438), r.e(5518), r.e(2963), r.e(7853), r.e(7914), r.e(7611)]).then(r.bind(r, 3797))
                })),
                ee = o().lazy((function() {
                    return Promise.all([r.e(3215), r.e(6212), r.e(8063), r.e(948), r.e(1923), r.e(2926), r.e(1324), r.e(9052), r.e(8333), r.e(8131), r.e(3199), r.e(5344), r.e(5555), r.e(1438), r.e(5518), r.e(2963), r.e(1525)]).then(r.bind(r, 4600))
                })),
                ne = o().lazy((function() {
                    return r.e(5399).then(r.bind(r, 1389))
                }));
            const re = function(e) {
                var n = e.onClose,
                    r = e.message,
                    t = e.crcCode,
                    o = e.promoDetail,
                    i = e.servicePath,
                    a = (0, J.A)(),
                    c = null != o && o.code ? function(e) {
                        window.NikeShop.removePromotionCodes([o.code]), n(e)
                    } : n,
                    s = {
                        isOpen: !(!r || !t),
                        onClose: c,
                        onOverlayClick: c
                    },
                    u = r && t && (0, l.Y)(Q, {
                        message: r,
                        crcCode: t,
                        onClose: c,
                        reasons: null == o ? void 0 : o.reasons,
                        servicePath: i,
                        renderCallToAction: function() {
                            var e;
                            return a ? (0, l.Y)(w.A, {
                                "data-automation-id": "error-close",
                                onClick: c
                            }, (0, l.Y)(ee, {
                                stringKey: "error.errorMessage.OK",
                                primaryValue: "OK",
                                description: "OK",
                                element: null
                            })) : (0, l.Y)(b.A, {
                                href: null === (e = window) || void 0 === e || null === (e = e.NikeShop) || void 0 === e || null === (e = e.get()) || void 0 === e ? void 0 : e.cartHref,
                                componentType: w.A,
                                "data-automation-id": "error-view-cart"
                            }, (0, l.Y)(ee, {
                                stringKey: "error.errorMessage.viewCart",
                                primaryValue: "View Cart",
                                description: "View Cart",
                                element: null
                            }))
                        }
                    });
                return (0, l.Y)($, (0, Y.A)({}, s, {
                    "data-automation": "cart-error-dialog"
                }), (0, l.Y)(P.A, {
                    onClick: c
                }), r && (0, l.Y)(x.A, {
                    shouldBlockRender: !0,
                    fetchStaticData: X.A
                }, (0, l.Y)(S.A.Consumer, null, (function(e) {
                    return e.ready && (0, l.Y)(ne, {
                        fromLocPlatform: !1,
                        currentLanguageTag: e.language,
                        translations: (0, k.A)({}, e.language, e.translations)
                    }, u)
                }))))
            };
            var te = r(6627),
                oe = r(1747),
                ie = r(6916);
            const ae = function() {
                    return function(e) {
                        e((0, te.d7)()), e({
                            type: ie.Uo
                        }), e((0, oe.hC)())
                    }
                },
                ce = (0, i.Ng)((function(e, n) {
                    return {
                        message: A(e, n),
                        crcCode: y(e, n),
                        servicePath: C(e, n),
                        promoDetail: (0, h.w8)(e, n)
                    }
                }), {
                    onClose: ae
                })(re);
            var se = r(5238),
                ue = (0, v.createSelector)(se.A, (function(e) {
                    return e.errors || []
                })),
                le = (0, v.createSelector)(ue, (function(e, n) {
                    return n.errorsToExclude || []
                }), (function(e, n) {
                    return e.filter((function(e) {
                        var r = e.crcCode;
                        return r && n.indexOf(r) < 0
                    }))
                })),
                de = (0, v.createSelector)(le, (function(e) {
                    return e[0]
                })),
                fe = r(8900),
                pe = "".concat(fe.Zl, "/CLEAR_ERRORS");
            const ve = function() {
                    return {
                        type: pe
                    }
                },
                ge = (0, i.Ng)((function(e, n) {
                    var r = de(e, n);
                    return {
                        message: null == r ? void 0 : r.message,
                        crcCode: null == r ? void 0 : r.crcCode,
                        servicePath: null == r ? void 0 : r.servicePath
                    }
                }), {
                    onClose: ve
                })(re);
            var me = o().lazy((function() {
                return Promise.all([r.e(3215), r.e(6212), r.e(8063), r.e(948), r.e(1923), r.e(2926), r.e(1324), r.e(9052), r.e(8333), r.e(8131), r.e(3199), r.e(5344), r.e(5555), r.e(1438), r.e(5518), r.e(2963), r.e(8085), r.e(787), r.e(7883), r.e(4648), r.e(4854), r.e(7853), r.e(7914), r.e(6877), r.e(2385)]).then(r.bind(r, 6009))
            }));
            const he = function(e) {
                var n = e.errorsToExclude,
                    r = e.shopInstance,
                    u = e.warningsToInclude,
                    d = e.queryClient;
                return (0, l.Y)(o().Fragment, null, (0, l.Y)(a.Ht, {
                    client: d
                }, (0, l.Y)(i.Kq, {
                    store: r.store
                }, (0, l.Y)(ce, {
                    errorsToExclude: n,
                    warningsToInclude: u
                })), (0, l.Y)(i.Kq, {
                    store: r.internalStore
                }, (0, l.Y)(o().Fragment, null, (0, l.Y)(p, null), (0, l.Y)(ge, {
                    errorsToExclude: n
                }), (0, l.Y)(t.Suspense, {
                    fallback: null
                }, (0, l.Y)(me, null)))), (0, l.Y)("div", {
                    "data-version": null == r ? void 0 : r.version,
                    id: s.PK
                }), (0, l.Y)(c.E, {
                    initialIsOpen: !1
                })))
            }
        },
        4829: (e, n, r) => {
            "use strict";
            r.d(n, {
                A: () => i
            });
            var t = r(1594),
                o = r(7987);

            function i() {
                return {
                    i18nString: (0, t.useContext)(o.ji).i18nString
                }
            }
        },
        5238: (e, n, r) => {
            "use strict";
            r.d(n, {
                A: () => o
            });
            var t = r(8900);
            const o = function(e) {
                return e[t.Zl] || {}
            }
        },
        931: (e, n, r) => {
            "use strict";
            r.d(n, {
                A: () => t
            });
            const t = (0, r(4525).A)("div", {
                target: "erav5ic0"
            })((function(e) {
                return {
                    display: "flex",
                    alignContent: e.alignContent,
                    alignItems: e.alignItems,
                    flexDirection: e.flexDirection,
                    flexWrap: e.flexWrap,
                    flexGrow: e.flexGrow,
                    flexBasis: e.flexBasis,
                    justifyContent: e.justifyContent,
                    flex: e.flex,
                    minWidth: e.minWidth
                }
            }), "")
        },
        5577: () => {}
    }
]);
//# sourceMappingURL=5672.chunk.83fb31.js.map