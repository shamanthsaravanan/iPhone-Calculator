(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [186], {
        77482: function(e, t) {
            "use strict";
            t.Z = {
                addTopSpacing: "Yjk73vve",
                ctaItem: "dz_xjzja",
                ctaTextOnDark: "_4EfJ5rYM",
                ctaTextOnLight: "_3p27lmat",
                ctaButton: "_2minRfAM",
                rotatingIcon: "JSW6WTlz",
                rotating: "Qrke3I-M",
                special: "HOP81Bid",
                us: "bihGx79a"
            }
        },
        68714: function(e, t) {
            "use strict";
            t.Z = {
                overlay: "JP66kT9q",
                cursorPointer: "_1ECpLrrn",
                fullHeight: "_3v1GaHyH",
                overlayPlayBtn: "_1Vw9tLhx"
            }
        },
        44991: function(e, t) {
            "use strict";
            t.Z = {
                extra_small: "_1ul-JSjS",
                small: "_3bTr7xkm",
                medium: "_2vrtOptK",
                large: "_2XLzI9KC",
                extra_large: "_2licY9xi",
                maintain: "_3-GXPD9b"
            }
        },
        96979: function(e, t, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/[[...page]]", function() {
                return n(4165)
            }])
        },
        57002: function(e) {
            "use strict";
            e.exports = {
                HP_NOT_FOUND_RESPONSE_STATUS: 500,
                NCSS_GLYPHS_VERSION: "2.6",
                NCSS_VERSION: "5.0",
                TITLE_TEMPLATE_TRANSLATION_KEYS: {
                    GB: "GB.NikeCom_Suffix",
                    JP: "JP.NikeCom_Suffix",
                    KR: "KR.NikeCom_Suffix",
                    default: "metatag_title_appendix"
                }
            }
        },
        4165: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                LandingPage: function() {
                    return iX
                },
                __N_SSP: function() {
                    return iY
                },
                default: function() {
                    return i$
                }
            });
            var a, i, r, o, s, l, c = n(20606),
                d = n(52322),
                u = n(37667),
                p = n.n(u),
                m = n(13980),
                h = n.n(m),
                g = n(6277),
                v = n(17635),
                f = n(2715),
                y = n(16),
                _ = n(43612),
                b = n(57393),
                x = n(72979),
                T = n(24022),
                I = n(61628),
                C = n(29979),
                N = n(52743);
            n(46529);
            var w = n(49389),
                S = n(4670),
                P = n(56503),
                L = n(26490),
                E = n(34415),
                k = n(96730),
                O = n(55892),
                j = n(39158),
                A = n(44065),
                R = n(99472),
                U = n(62649),
                M = function(e, t, n) {
                    return Object.prototype.hasOwnProperty.call(e, "items") && e.items.reduce(function(e, t) {
                        return e[t] = n[t], e = M(e[t], e, n)
                    }, t), t
                },
                B = (0, j.P1)(N.wl.dataSelector, N.wl.layoutItemSelector, function(e, t) {
                    return M(t, {}, e.layoutItems)
                }),
                Z = (0, j.P1)(B, function(e) {
                    return Object.values(e).filter(function(e) {
                        return "block" === e.mode
                    })
                }),
                H = (0, j.P1)(A.Z, Z, function(e, t) {
                    return t.map(function(t) {
                        return (0, R.cardDataSelector)(e, {
                            cardId: t.data
                        })
                    })
                }),
                D = (0, j.P1)(H, function(e) {
                    var t, n, a, i = e.find(function(e) {
                        return null == e ? void 0 : e.containerType
                    });
                    switch (null == i ? void 0 : i.containerType) {
                        case N.QU.EXTERNAL_COLLECTION:
                            return !(null == i ? void 0 : null === (t = i.slides) || void 0 === t ? void 0 : t.length);
                        case N.QU.PRODUCT_RECOMMENDER:
                            return !i.isLoading && (!(null == i ? void 0 : null === (n = i.slides) || void 0 === n ? void 0 : n.length) || (null == i ? void 0 : null === (a = i.slides) || void 0 === a ? void 0 : a.length) < U.Z.MIN_PRODUCT_LIST_LENGTH);
                        default:
                            return !1
                    }
                }),
                q = (0, j.P1)(H, function(e) {
                    var t;
                    return null !== (a = null == e ? void 0 : null === (t = e[0]) || void 0 === t ? void 0 : t.containerType) && void 0 !== a ? a : "empty"
                }),
                W = n(7269),
                F = {
                    overlay: "_13xDDA0A",
                    h_end: "_2p2-DY4s",
                    h_start: "_2n345FhB",
                    v_after: "_1s-A3PtI",
                    h_center: "o0L_Z0WU",
                    v_start: "_1s5Pr4ak",
                    v_center: "_1bZ3CnEY",
                    v_end: "_1uUVQf9l",
                    content: "_3T7SP3hk",
                    "subtitle-text": "_1RVNgSrK",
                    "headline-3": "qdX1Bchs",
                    "text-color-primary-light": "_2bgpkVD3",
                    "mb1-sm": "_3FZG1p08"
                },
                z = n(49528),
                V = function(e) {
                    var t = e.horizontal,
                        n = e.vertical;
                    return (0, L.Z)([F["h_".concat("before" === t ? "start" : t)], F["v_".concat(n)]])
                },
                G = function(e) {
                    var t = e.children,
                        n = e.position,
                        a = e.renderAs,
                        i = e.overlayClassName;
                    return (0, d.jsx)(a, {
                        className: (0, L.Z)([F.overlay, V(n)]),
                        "data-qa": "card-overlay",
                        children: (0, d.jsx)("div", {
                            className: (0, L.Z)(F.content, i),
                            "data-qa": "card-overlay-content",
                            children: t
                        })
                    })
                };
            G.displayName = "CardOverlay", G.propTypes = {
                children: h().node.isRequired,
                overlayClassName: h().string,
                position: z.yj,
                renderAs: h().oneOf(["div", "figcaption"])
            }, G.defaultProps = {
                position: {
                    horizontal: "start",
                    vertical: "start"
                },
                renderAs: "div"
            };
            var K = n(26366),
                Q = function(e) {
                    return Boolean(e)
                },
                J = function(e, t, n) {
                    return Q(e) && "<p></p>" !== e || Q(t) || Q(n)
                },
                Y = function(e) {
                    var t = e.titleProps,
                        n = e.subtitleProps,
                        a = e.bodyProps,
                        i = e.actionButtons,
                        r = J(null == a ? void 0 : a.text, null == n ? void 0 : n.text, null == t ? void 0 : t.text),
                        o = (null == i ? void 0 : i.length) !== 0;
                    return r || o
                },
                X = function(e) {
                    return (null == e ? void 0 : e.vertical) === "after"
                },
                $ = n(51179),
                ee = n(32822),
                et = {
                    imageCard: "_3l8ZuNi4",
                    imageWrapper: "_12NrIYxy",
                    loadedImageWrapper: "_3gD-bTqH"
                },
                en = function(e) {
                    var t = e.altText,
                        n = e.withH1,
                        a = e.bodyProps,
                        i = e.actionButtons,
                        r = e.cardLinkId,
                        o = e.cardLinkUrl,
                        s = e.destinationType,
                        l = e.cardLinkCollectionId,
                        c = e.openInNewTab,
                        u = e.colorTheme,
                        p = e.landscapeURL,
                        m = e.portraitURL,
                        h = e.subtitleProps,
                        g = e.textLocation,
                        v = e.titleProps,
                        f = e.customClass,
                        y = e.loadedImageClassNames,
                        _ = e.landscapeFocalPoint,
                        b = e.portraitFocalPoint,
                        x = e.analyticsItemId,
                        I = e.cardId,
                        C = e.cardLinkMemberOnly,
                        w = e.captionProps,
                        S = e.isTextBelowImage,
                        P = e.assetsAspectRatios,
                        E = e.imageHeight,
                        k = e.cardOverlayElement,
                        O = (null == i ? void 0 : i.length) !== 0,
                        j = J(null == a ? void 0 : a.text, null == h ? void 0 : h.text, null == v ? void 0 : v.text),
                        A = (null == h ? void 0 : h.text) || (null == v ? void 0 : v.text) ? "".concat((null == h ? void 0 : h.text) || "", " ").concat((null == v ? void 0 : v.text) || "").trim() : t,
                        R = k || (0, d.jsxs)(G, {
                            renderAs: "figcaption",
                            position: g,
                            children: [(null == h ? void 0 : h.text) !== "" && (0, d.jsx)($.tt, (0, T._)({}, h)), (null == v ? void 0 : v.text) !== "" && (0, d.jsx)($.eN, (0, T._)({}, v, n && {
                                renderAs: "h1"
                            })), (null == a ? void 0 : a.text) !== "" && (0, d.jsx)($.Ac, (0, T._)({}, a)), O && (0, d.jsx)(ee.Z, {
                                dataQa: I,
                                analyticsItemId: x,
                                actionButtons: i,
                                colorTheme: u,
                                addTopSpacing: j
                            })]
                        });
                    return (0, d.jsxs)(d.Fragment, {
                        children: [(0, d.jsxs)("figure", {
                            "data-analytics-placement-id": x,
                            "data-analytics-has-landmark": "true",
                            "data-qa": "image-card",
                            className: (0, L.Z)(["image-card", et.imageCard]),
                            children: [(0, d.jsx)(W.Z, {
                                altText: t,
                                landscapeURL: p,
                                portraitURL: m,
                                customClass: (0, L.Z)([f, et.imageWrapper]),
                                loadedImageClassNames: [y, et.loadedImageWrapper, ],
                                landscapeFocalPoint: _,
                                portraitFocalPoint: b,
                                assetsAspectRatios: P,
                                imageHeight: E,
                                captionProps: w,
                                hasBelowLayout: "after" === g.vertical || S
                            }), (null == w ? void 0 : w.text) !== "" && (null == w ? void 0 : w.position) === N.KZ.BELOW && (null == g ? void 0 : g.vertical) === "after" && (0, d.jsx)($.HB, (0, T._)({}, w)), (j || O) && R, r && (0, d.jsx)(K.Y, {
                                dataQa: I,
                                memberOnly: C,
                                destinationUrl: o,
                                destinationType: s,
                                analyticsItemId: x,
                                collectionId: l,
                                actionId: r,
                                openInNewTab: c,
                                tabbable: !O,
                                ariaLabel: A
                            })]
                        }), (null == w ? void 0 : w.text) !== "" && (null == w ? void 0 : w.position) === N.KZ.BELOW && (null == g ? void 0 : g.vertical) !== "after" && (0, d.jsx)($.HB, (0, T._)({}, w))]
                    })
                };
            en.propTypes = {
                actionButtons: z.a6,
                altText: h().string.isRequired,
                analyticsItemId: h().string,
                assetsAspectRatios: z.LD,
                bodyProps: z.IJ,
                captionProps: z.IJ,
                cardId: h().string,
                cardLinkCollectionId: h().string,
                cardLinkId: h().string,
                cardLinkMemberOnly: h().bool,
                cardLinkUrl: h().string,
                cardOverlayElement: h().element,
                colorTheme: z.Pg,
                customClass: h().string,
                destinationType: h().string,
                imageHeight: h().oneOf(z.eM),
                isTextBelowImage: h().bool,
                landscapeFocalPoint: z.j1,
                landscapeURL: h().string.isRequired,
                loadedImageClassNames: h().arrayOf(h().string),
                openInNewTab: h().bool,
                portraitFocalPoint: z.j1,
                portraitURL: h().string.isRequired,
                subtitleProps: z.IJ,
                textLocation: z.oL,
                titleProps: z.IJ,
                withH1: h().bool
            };
            var ea = n(83286),
                ei = n(31852),
                er = {
                    videoCardContainer: "_3w5yTWne",
                    isTextPositionAfter: "E5X3EFEx",
                    isOverlayHidden: "ayZVQtGy",
                    defaultBody: "_3NvMlQNP",
                    defaultSubtitle: "vhvB5rLN",
                    defaultTitle: "_3WMdeFzy",
                    overlay: "_1ajCauMN",
                    showCursor: "IOZ7RHp8"
                },
                eo = function(e) {
                    var t = e.bodyProps,
                        n = e.withH1,
                        a = e.actionButtons,
                        i = e.cardLinkId,
                        r = e.cardLinkUrl,
                        o = e.openInNewTab,
                        s = e.colorTheme,
                        l = e.subtitleProps,
                        u = e.textLocation,
                        p = e.titleProps,
                        m = e.analyticsItemId,
                        h = e.loop,
                        g = e.videoId,
                        v = e.portraitVideoId,
                        f = e.controlOptions,
                        y = e.autoPlay,
                        _ = e.portraitPosterUrl,
                        b = e.landscapePosterUrl,
                        x = e.watchCtaButtonText,
                        I = e.destinationType,
                        C = e.locale,
                        N = e.customClass,
                        w = e.cardLinkMemberOnly,
                        S = e.cardLinkCollectionId,
                        P = e.assetsAspectRatios,
                        E = Y({
                            actionButtons: a,
                            bodyProps: t,
                            subtitleProps: l,
                            titleProps: p
                        }),
                        k = X(u);
                    return (0, d.jsx)("div", {
                        "data-analytics-placement-id": m,
                        "data-analytics-has-landmark": "true",
                        "data-qa": "video-card",
                        className: (0, L.Z)(er.videoCardContainer, (0, c._)({}, er.isTextPositionAfter, k)),
                        children: (0, d.jsx)(ei.PZ, {
                            loop: h,
                            videoId: g,
                            portraitVideoId: v,
                            controlOptions: f,
                            autoPlay: y,
                            portraitPosterUrl: _,
                            landscapePosterUrl: b,
                            locale: C,
                            previewOnHover: !0,
                            customClass: N,
                            isCardOverlayExist: E,
                            isTextPositionAfter: k,
                            pauseOnLeave: !y,
                            watchCtaButtonText: x,
                            assetsAspectRatios: P,
                            children: function(e) {
                                var c = e.buttonProps;
                                return (0, d.jsxs)(d.Fragment, {
                                    children: [(0, d.jsxs)(G, {
                                        renderAs: "div",
                                        position: u,
                                        children: [(null == l ? void 0 : l.text) !== "" && (0, d.jsx)($.tt, (0, T._)({}, l)), (null == p ? void 0 : p.text) !== "" && (0, d.jsx)($.eN, (0, T._)({}, p, n && {
                                            renderAs: "h1"
                                        })), (null == t ? void 0 : t.text) !== "" && (0, d.jsx)($.Ac, (0, T._)({}, t)), (0, d.jsx)(ee.Z, {
                                            actionButtons: (0, ei.T2)(a, c),
                                            colorTheme: s,
                                            addTopSpacing: J(t.text, l.text, p.text)
                                        })]
                                    }), i && (0, d.jsx)(K.Y, {
                                        actionId: i,
                                        memberOnly: w,
                                        collectionId: S,
                                        destinationType: I,
                                        destinationUrl: r,
                                        openInNewTab: o,
                                        ariaLabel: "".concat(null == l ? void 0 : l.text, " ").concat(null == p ? void 0 : p.text),
                                        tabbable: !(null == a ? void 0 : a.length)
                                    })]
                                })
                            }
                        })
                    })
                };
            eo.propTypes = (0, T._)({}, z.cQ);
            var es = n(68714),
                el = function(e, t, n) {
                    return (0, T._)({}, e, !e.fontSize && !e.fontFamily && {
                        customClassName: (0, L.Z)(e.customClassName, t, n)
                    })
                },
                ec = function(e) {
                    var t, n = e.bodyProps,
                        a = e.withH1,
                        i = e.subtitleProps,
                        r = e.textLocation,
                        o = e.titleProps,
                        s = e.playButtonElement;
                    return (0, d.jsxs)(G, {
                        renderAs: "div",
                        position: r,
                        children: [(0, d.jsx)($.tt, (0, S._)((0, T._)({}, el(i, er.defaultSubtitle, "body-3")), {
                            textColor: null !== (t = i.textColor) && void 0 !== t ? t : "#ccc"
                        })), (0, d.jsx)($.eN, (0, T._)({}, el(o, er.defaultTitle, "headline-5"), a && {
                            renderAs: "h1"
                        })), (0, d.jsx)($.Ac, (0, T._)({}, el(n, er.defaultBody, "headline-5"))), s]
                    })
                };
            ec.propTypes = {
                bodyProps: z.IJ,
                playButtonElement: h().node,
                subtitleProps: z.IJ,
                textLocation: z.oL,
                titleProps: z.IJ,
                withH1: h().bool
            };
            var ed = function(e) {
                var t = e.bodyProps,
                    n = e.withH1,
                    a = e.subtitleProps,
                    i = e.textLocation,
                    r = e.titleProps,
                    o = e.analyticsItemId,
                    s = e.loop,
                    l = e.videoId,
                    u = e.portraitVideoId,
                    p = e.controlOptions,
                    m = e.autoPlay,
                    h = e.portraitPosterUrl,
                    g = e.landscapePosterUrl,
                    v = e.watchCtaButtonText,
                    f = e.locale,
                    y = e.language,
                    _ = e.customClass,
                    b = e.assetsAspectRatios,
                    x = !!((null == r ? void 0 : r.text) || (null == a ? void 0 : a.text) || (null == t ? void 0 : t.text)),
                    T = X(i);
                return (0, d.jsxs)("div", {
                    "data-analytics-placement-id": o,
                    "data-analytics-has-landmark": "true",
                    "data-qa": "video-card",
                    className: (0, L.Z)(er.videoCardContainer, er.isEditorial, (0, c._)({}, er.isTextPositionAfter, T)),
                    children: [(0, d.jsx)(ei.PZ, {
                        autoPlay: m,
                        loop: s,
                        pauseOnLeave: !m,
                        videoId: l,
                        portraitVideoId: u,
                        controlOptions: p,
                        portraitPosterUrl: h,
                        landscapePosterUrl: g,
                        locale: f,
                        language: y,
                        previewOnHover: !0,
                        customClass: _,
                        isCardOverlayExist: x,
                        watchCtaButtonText: v,
                        watchCtaButtonStyle: (0, L.Z)(T && [er.watchButton, es.Z.overlayPlayBtn, ]),
                        isTextPositionAfter: T,
                        assetsAspectRatios: b,
                        children: !T && function(e) {
                            var o = e.playButtonElement;
                            return (0, d.jsx)(ec, {
                                titleProps: r,
                                textLocation: i,
                                subtitleProps: a,
                                bodyProps: t,
                                withH1: n,
                                playButtonElement: o
                            })
                        }
                    }), T && (0, d.jsx)(ec, {
                        titleProps: r,
                        textLocation: i,
                        subtitleProps: a,
                        bodyProps: t,
                        withH1: n
                    })]
                })
            };
            ed.propTypes = z.cQ;
            var eu = n(32434),
                ep = function(e) {
                    var t = e.pageType,
                        n = (e.imageHeight, (0, ea._)(e, ["pageType", "imageHeight"])),
                        a = (0, eu.T5)(n),
                        i = t === w.sL.ARTICLE ? ed : eo;
                    return (0, d.jsx)(i, (0, S._)((0, T._)({}, n), {
                        textLocation: a
                    }))
                };
            ep.propTypes = (0, S._)((0, T._)({}, z.cQ), {
                pageType: h().oneOf((0, C.Z)(w.sL))
            });
            var em = n(25237),
                eh = n.n(em),
                eg = eh()(function() {
                    return Promise.all([n.e(999), n.e(686)]).then(n.bind(n, 24686)).then(function(e) {
                        return e.Slideshow
                    })
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [24686]
                        }
                    }
                }),
                ev = function(e) {
                    return (0, d.jsx)(eg, (0, T._)({}, e))
                },
                ef = n(98782),
                ey = n(21315),
                e_ = n(46477),
                eb = n(74616),
                ex = {
                    slide: "_2FHRgMdp",
                    slideTextWrapper: "_18MIH4bN",
                    slideSubTitle: "_3d4pWfUg",
                    slideBodyText: "_3NlICoeN",
                    slideTitle: "_1Ke1o_Jj",
                    imageWrapper: "Bjx9Yj4a",
                    imageIsLoaded: "_2-o_f_Wg"
                },
                eT = function(e) {
                    var t, n, a, i, r, o, s = e.cardLinkMemberOnly,
                        l = e.textLocation,
                        c = e.analyticsItemId,
                        u = e.cardLinkCollectionId,
                        p = e.destinationType,
                        m = e.filmstripId,
                        h = e.cardLinkVariations,
                        g = e.colorTheme,
                        v = (0, ea._)(e, ["cardLinkMemberOnly", "textLocation", "analyticsItemId", "cardLinkCollectionId", "destinationType", "filmstripId", "cardLinkVariations", "colorTheme"]);
                    if ((null === (t = v.actionButtons) || void 0 === t ? void 0 : t.length) > 0 || v.bodyProps.text || v.subtitleProps.text || v.titleProps.text) {
                        var f = (0, d.jsx)(ee.Z, {
                            dataQa: v.id,
                            actionButtons: v.actionButtons,
                            isMenuOnTop: v.isTextBelowImage,
                            filmstripId: m,
                            colorTheme: g,
                            addTopSpacing: J(v.bodyProps.text, v.subtitleProps.text, v.titleProps.text)
                        });
                        o = v.isTextBelowImage ? (0, d.jsxs)("div", {
                            className: ex.slideTextWrapper,
                            "data-qa": "fig-caption",
                            children: [v.subtitleProps.text && (0, d.jsx)($.tt, (0, T._)({}, v.subtitleProps)), v.titleProps.text && (0, d.jsx)($.eN, (0, S._)((0, T._)({}, v.titleProps), {
                                appearance: "title4"
                            })), v.bodyProps.text && (0, d.jsx)($.Ac, (0, T._)({}, v.bodyProps)), f]
                        }) : (0, d.jsxs)(G, {
                            renderAs: "div",
                            position: l,
                            children: [(0, d.jsx)($.tt, (0, T._)({}, v.subtitleProps)), (0, d.jsx)($.eN, (0, T._)({}, v.titleProps)), (0, d.jsx)($.Ac, (0, T._)({}, v.bodyProps)), f]
                        })
                    }
                    return (0, d.jsxs)(d.Fragment, {
                        children: [(null == v ? void 0 : null === (n = v.captionProps) || void 0 === n ? void 0 : n.position) === N.KZ.BELOW && (0, d.jsx)($.HB, {
                            colorTheme: g
                        }), o, v.cardLinkId && (0, d.jsx)(K.Y, {
                            actionId: v.cardLinkId,
                            analyticsItemId: c,
                            collectionId: u,
                            destinationType: p,
                            filmstripId: m,
                            memberOnly: s,
                            destinationUrl: v.cardLinkUrl,
                            openInNewTab: v.openInNewTab,
                            cardLinkVariations: h,
                            renderAs: "a",
                            ariaLabel: "".concat(null === (a = v.subtitleProps) || void 0 === a ? void 0 : a.text, " ").concat(null === (i = v.titleProps) || void 0 === i ? void 0 : i.text),
                            tabbable: !(null === (r = v.actionButtons) || void 0 === r ? void 0 : r.length)
                        })]
                    })
                };
            eT.propTypes = z.zA;
            var eI = n(44991),
                eC = function(e) {
                    var t, n = e.id,
                        a = e.cardLinkMemberOnly,
                        i = e.cardLinkUrl,
                        r = e.cardLinkId,
                        o = e.colorTheme,
                        s = e.openInNewTab,
                        l = e.subtitleProps,
                        c = e.titleProps,
                        d = e.bodyProps,
                        u = e.textLocation,
                        p = e.isTextBelowImage,
                        m = e.destinationType,
                        h = e.sectionHeadlineTitle,
                        g = e.filmstripId;
                    return {
                        analyticsItemId: e.analyticsItemId,
                        bodyProps: d,
                        cardLinkCollectionId: e.cardLinkCollectionId,
                        cardLinkId: r,
                        cardLinkMemberOnly: a,
                        cardLinkUrl: i,
                        colorTheme: o,
                        destinationType: m,
                        filmstripId: g,
                        id: n,
                        isTextBelowImage: p,
                        openInNewTab: s,
                        sectionHeadlineTitle: h,
                        subtitleProps: l,
                        textLocation: u,
                        titleProps: c
                    }
                },
                eN = function(e) {
                    var t = X(e.textLocation),
                        n = !t && Y(e),
                        a = (0, ei.x3)(e),
                        i = eC(e);
                    return (0, d.jsxs)(d.Fragment, {
                        children: [(0, d.jsx)(ei.PZ, (0, S._)((0, T._)({}, a), {
                            isTextPositionAfter: t,
                            isCardOverlayExist: n,
                            watchCtaButtonStyle: t && es.Z.overlayPlayBtn,
                            customClass: (0, L.Z)(e.imageHeight && eI.Z[e.imageHeight]),
                            children: !t && function(t) {
                                var n = t.buttonProps;
                                return (0, d.jsx)(eT, (0, S._)((0, T._)({}, i), {
                                    actionButtons: (0, ei.T2)(e.actionButtons, n)
                                }))
                            }
                        })), t && (0, d.jsx)(eT, (0, T._)({}, e))]
                    })
                };
            eN.propTypes = z.zA;
            var ew = function(e) {
                return (0, d.jsxs)(d.Fragment, {
                    children: [(0, d.jsx)(W.Z, (0, S._)((0, T._)({}, e), {
                        customClass: (0, L.Z)([e.imageHeight && eI.Z[e.imageHeight], e.imageWrapper, ]),
                        assetsAspectRatios: e.assetsAspectRatios,
                        loadedImageClassNames: [ex.imageIsLoaded]
                    })), (0, d.jsx)(eT, (0, T._)({}, e))]
                })
            };
            ew.propTypes = z.zA;
            var eS = function(e) {
                var t = e.analyticsItemId,
                    n = (0, ea._)(e, ["analyticsItemId"]),
                    a = n.containerType === N.QU.VIDEO,
                    i = (0, ei.T5)(n),
                    r = a ? eN : ew;
                return (0, d.jsx)("figure", {
                    "data-analytics-placement-id": t,
                    "data-analytics-has-landmark": "true",
                    "data-qa": "filmstrip-card",
                    className: (0, L.Z)(ex.slide, (0, c._)({}, ex.withVideoCard, a)),
                    children: (0, d.jsx)(r, (0, T._)({
                        analyticsItemId: t,
                        textLocation: i
                    }, n))
                })
            };
            eS.propTypes = z.zA;
            var eP = {
                    filmstrip: "_2R2A28H4",
                    headline: "_30aP5Ziq"
                },
                eL = {
                    carousel: "_37j5pXS8",
                    container: "_2g6qfCnF",
                    navigation: "_3Vj6whUs"
                },
                eE = n(43887),
                ek = function(e) {
                    var t = e.analyticsItemId,
                        n = e.sectionHeadline,
                        a = e.slides,
                        i = (0, ef.Z)(U.Z.MAX_PRODUCT_LIST_LENGTH, a),
                        r = i.length < U.Z.MIN_PRODUCT_LIST_LENGTH,
                        o = (0, ey.G)("lt", "s"),
                        s = !(0, e_.a)(o) && i.length > U.Z.MIN_PRODUCT_LIST_LENGTH ? U.Z.CAROUSEL_NAVIGATION_MODE.buttonAbove : U.Z.CAROUSEL_NAVIGATION_MODE.scroll;
                    return r ? null : (0, d.jsx)("div", {
                        "data-qa": "carousel-filmstrip",
                        className: (0, L.Z)(eP.filmstrip),
                        children: (0, d.jsx)(eb.m, {
                            childContentFocusable: !0,
                            conditionallyHideNavButtons: !1,
                            navigationMode: s,
                            slidesToShow: {
                                xs: U.Z.MIN_PRODUCT_LIST_LENGTH
                            },
                            alignToGrid: !0,
                            className: eL.carousel,
                            classes: {
                                listContainer: eL.container,
                                navBtnWrapper: eL.navigation
                            },
                            slots: {
                                TitleSlot: (0, d.jsx)(eE.Z, (0, S._)((0, T._)({}, n), {
                                    analyticsItemId: "".concat(t, "_0"),
                                    containerClassName: eP.headline
                                }))
                            },
                            titleProps: {
                                id: t
                            },
                            children: i.map(function(e, a) {
                                var i = "".concat(t, "_").concat(a + 1);
                                return (0, d.jsx)(eS, (0, S._)((0, T._)({}, e), {
                                    sectionHeadlineTitle: n.title,
                                    analyticsItemId: i
                                }), i)
                            })
                        })
                    })
                };
            ek.propTypes = {
                analyticsItemId: h().string,
                sectionHeadline: z.qJ,
                slides: h().arrayOf(h().shape(z.zA))
            };
            var eO = {
                    grid: "_38k5i7op",
                    gridFreeContainer: "_1S1YLSiZ",
                    hideSmall: "ZI3gBq7A",
                    hideMedium: "_2siH33rH",
                    hideLarge: "_3DCn1Jug",
                    isEmpty: "_26KL2949",
                    localNavigationContainer: "_3jOBH81e",
                    teamSelectorContainer: "_3MZclmo0 ncss-container",
                    sizeChartsContainer: "_1kUgXRPe",
                    filmstrip: "_3u4xhpEG",
                    headline: "WQuqDr6X",
                    headlineText: "_3c3lfQW6",
                    mobileContainer: "sBXYFpOe",
                    mobileSlides: "_2oPuyRLr",
                    mobileHeadline: "_3v73CJtf",
                    twoInRowWrapper: "VMPZVI7t",
                    twoInRow: "_24z-1Mk8"
                },
                ej = n(45852),
                eA = n(8224),
                eR = {
                    slide: "T5mxZUHE",
                    filmstripCard: "_3rKbMmiJ",
                    cardLink: "_16E2ew4x",
                    imageMedia: "_3sJM-jDQ",
                    slideTextWrapper: "_1YX--Dd-",
                    slideTitle: "_2XUUjNVi",
                    slideBodyText: "_2dAzJamX",
                    imageWrapper: "_1FyvC8QD",
                    imageIsLoaded: "_1OrIWzAD"
                },
                eU = n(16946),
                eM = n(42975),
                eB = function(e) {
                    var t;
                    return null !== (i = (t = {}, (0, c._)(t, N.QU.IMAGE, (0, d.jsx)(W.Z, (0, S._)((0, T._)({}, e), {
                        loadedImageClassNames: [eR.imageIsLoaded],
                        customClass: (0, L.Z)([eR.imageMedia, eR.imageWrapper])
                    }))), (0, c._)(t, N.QU.VIDEO, (0, d.jsx)(ei.PZ, (0, S._)((0, T._)({}, e), {
                        loop: !1,
                        autoPlay: !1,
                        showPlayButton: !0,
                        alwaysMobile: !0,
                        watchButtonText: e.watchCtaButtonText,
                        customClass: eR.imageMedia,
                        timestampWithPlay: !0
                    }))), t)[e.containerType]) && void 0 !== i ? i : null
                },
                eZ = function(e) {
                    var t = e.analyticsItemId,
                        n = e.cardLinkMemberOnly,
                        a = (0, ea._)(e, ["analyticsItemId", "cardLinkMemberOnly"]);
                    return (0, d.jsxs)("figure", {
                        "data-analytics-placement-id": t,
                        "data-analytics-has-landmark": "true",
                        "data-qa": "related-item-card",
                        className: (0, L.Z)([eR.slide, eR.filmstripCard]),
                        children: [eB(a), (0, d.jsx)(K.Y, {
                            actionId: a.cardLinkId,
                            memberOnly: n,
                            destinationUrl: a.cardLinkUrl,
                            openInNewTab: a.openInNewTab,
                            renderAs: "a",
                            classNames: [eR.cardLink],
                            ariaLabel: [a.subtitleProps.text, a.titleProps.text].join(" ")
                        }), (0, d.jsxs)("figcaption", {
                            className: eR.slideTextWrapper,
                            children: [a.subtitleProps.text && (0, d.jsx)(eA.i, {
                                Component: "h4",
                                "data-qa": "title",
                                appearance: "body2",
                                className: eR.slideTitle,
                                color: a.subtitleProps.isTextColorSet ? a.subtitleProps.textColor : "secondary",
                                dangerouslySetInnerHTML: (0, eM.K)(a.subtitleProps.text)
                            }), (0, d.jsx)(eU.l3.Consumer, {
                                children: function(e) {
                                    return (0, d.jsx)(eA.i, {
                                        Component: "h3",
                                        appearance: "title4",
                                        className: eR.slideBodyText,
                                        color: a.titleProps.textColor,
                                        dangerouslySetInnerHTML: (0, eM.K)((0, ej.PI)(a.titleProps.text, e.isDesktop ? 160 : 100))
                                    })
                                }
                            })]
                        })]
                    })
                };
            eZ.propTypes = z.zA;
            var eH = function(e) {
                var t = e.sectionHeadline,
                    n = e.analyticsItemId,
                    a = e.headlineAnalyticsId,
                    i = e.filmstripSlides,
                    r = (0, ey.G)("lt", "s"),
                    o = !(0, e_.a)(r) && i.length > U.Z.MIN_PRODUCT_LIST_LENGTH ? U.Z.CAROUSEL_NAVIGATION_MODE.buttonAbove : U.Z.CAROUSEL_NAVIGATION_MODE.scroll;
                return (0, d.jsx)(eb.m, {
                    childContentFocusable: !0,
                    conditionallyHideNavButtons: !1,
                    navigationMode: o,
                    slidesToShow: {
                        xs: U.Z.MIN_PRODUCT_LIST_LENGTH
                    },
                    alignToGrid: !0,
                    className: eL.carousel,
                    classes: {
                        listContainer: eL.container,
                        mavBtnWrapper: eL.navigation
                    },
                    slots: {
                        TitleSlot: (0, d.jsx)(eE.Z, (0, S._)((0, T._)({}, t), {
                            analyticsItemId: a,
                            containerClassName: eO.headline,
                            className: eO.headlineText
                        }))
                    },
                    titleProps: {
                        id: n
                    },
                    children: i
                })
            };
            eH.propTypes = {
                analyticsItemId: h().string,
                filmstripSlides: h().arrayOf(h().node),
                headlineAnalyticsId: h().string,
                sectionHeadline: z.qJ
            };
            var eD = function(e) {
                var t = e.sectionHeadline,
                    n = e.headlineAnalyticsId,
                    a = e.filmstripSlides;
                return (0, d.jsxs)("div", {
                    className: eO.mobileContainer,
                    children: [(0, d.jsx)(eE.Z, (0, S._)((0, T._)({}, t), {
                        analyticsItemId: n,
                        containerClassName: eO.mobileHeadline,
                        className: eO.headlineText
                    })), (0, d.jsx)("div", {
                        className: eO.mobileSlides,
                        children: a
                    })]
                })
            };
            eD.propTypes = {
                analyticsItemId: h().string,
                filmstripSlides: h().arrayOf(h().node),
                headlineAnalyticsId: h().string,
                sectionHeadline: z.qJ
            };
            var eq = function(e) {
                var t = e.sectionHeadline,
                    n = e.headlineAnalyticsId,
                    a = e.filmstripSlides;
                return (0, d.jsxs)("div", {
                    className: eO.twoInRowWrapper,
                    children: [(0, d.jsx)(eE.Z, (0, S._)((0, T._)({}, t), {
                        analyticsItemId: n,
                        containerClassName: eO.mobileHeadline,
                        className: eO.headlineText
                    })), (0, d.jsx)("div", {
                        className: eO.twoInRow,
                        children: a
                    })]
                })
            };
            eq.propTypes = {
                analyticsItemId: h().string,
                filmstripSlides: h().arrayOf(h().node),
                headlineAnalyticsId: h().string,
                sectionHeadline: z.qJ
            };
            var eW = function(e) {
                var t, n, a, i, r = e.analyticsItemId,
                    o = e.sectionHeadline,
                    s = e.slides,
                    l = (0, eU.Z8)().isMobile,
                    c = s.slice(0, U.Z.MAX_PRODUCT_LIST_LENGTH),
                    u = c.length < U.Z.MIN_PRODUCT_LIST_LENGTH,
                    p = c.map(function(e, t) {
                        var n = "".concat(r, "_").concat(t + 1);
                        return (0, d.jsx)(eZ, (0, T._)({
                            analyticsItemId: n
                        }, e), n)
                    }),
                    m = l ? eD : u ? eq : eH,
                    h = "".concat(r, "_0");
                return (0, d.jsx)("div", {
                    "data-qa": "related-filmstrip",
                    className: eO.filmstrip,
                    children: (0, d.jsx)(m, {
                        analyticsItemId: r,
                        headlineAnalyticsId: h,
                        sectionHeadline: o,
                        filmstripSlides: p
                    })
                })
            };
            eW.propTypes = {
                analyticsItemId: h().string,
                sectionHeadline: z.qJ,
                slides: h().arrayOf(h().shape(z.zA))
            };
            var eF = {
                    grid: "_3K_kcqUX",
                    gridFreeContainer: "_1rXFZMzf",
                    hideSmall: "LhVzRDbs",
                    hideMedium: "_2L2M6q6u",
                    hideLarge: "_9an7dcZR",
                    isEmpty: "_2TNEZLtb",
                    localNavigationContainer: "_3iCNu8XU",
                    teamSelectorContainer: "vzxsDPeY ncss-container",
                    sizeChartsContainer: "_2eNjWkex",
                    dynamicContent: "N5MleJpG",
                    headline: "_27o9RMV6",
                    headlineText: "_1myzCUYb",
                    twoInRowWrapper: "_1KmZze0_",
                    twoInRow: "XchKI_jD",
                    featuredWrapper: "_1zHoZR3r"
                },
                ez = {
                    slideContainer: "_1ZbLN4p_",
                    videoCardLink: "_3JvhgN8H",
                    imageMedia: "_18wCGKzC",
                    imageIsLoaded: "bcYUp_3m",
                    slideTextWrapper: "_36IlEUYY",
                    slideSubTitle: "iPl5E40z"
                },
                eV = function(e) {
                    var t;
                    return null !== (r = (t = {}, (0, c._)(t, N.QU.IMAGE, (0, d.jsx)(W.Z, (0, S._)((0, T._)({}, e), {
                        loadedImageClassNames: [ez.imageIsLoaded],
                        imageHeight: "medium",
                        assetsAspectRatios: {
                            landscape: 1.5,
                            portrait: 1.5
                        },
                        customClass: [ez.imageMedia]
                    }))), (0, c._)(t, N.QU.VIDEO, (0, d.jsx)(ei.PZ, (0, S._)((0, T._)({}, e), {
                        loop: !1,
                        autoPlay: !1,
                        showPlayButton: !0,
                        alwaysMobile: !0,
                        watchButtonText: e.watchCtaButtonText,
                        customClass: ez.imageMedia,
                        timestampWithPlay: !0
                    }))), t)[e.containerType]) && void 0 !== r ? r : null
                },
                eG = function(e) {
                    var t, n = e.analyticsItemId,
                        a = e.cardLinkMemberOnly,
                        i = (0, ea._)(e, ["analyticsItemId", "cardLinkMemberOnly"]);
                    return (0, d.jsxs)("figure", {
                        "data-analytics-placement-id": n,
                        "data-analytics-has-landmark": "true",
                        "data-qa": "content-slide",
                        className: ez.slideContainer,
                        children: [eV(i), (0, d.jsx)(K.Y, {
                            actionId: i.cardLinkId,
                            memberOnly: a,
                            destinationUrl: i.cardLinkUrl,
                            openInNewTab: i.openInNewTab,
                            renderAs: "a",
                            ariaLabel: [i.subtitleProps.text, i.titleProps.text].join(" "),
                            classNames: [ez.videoCardLink]
                        }), (0, d.jsxs)("figcaption", {
                            className: ez.slideTextWrapper,
                            children: [i.subtitleProps.text && (0, d.jsx)(eA.i, {
                                "data-qa": "subtitle",
                                appearance: "body2",
                                className: ez.slideSubTitle,
                                color: i.subtitleProps.isTextColorSet ? i.subtitleProps.textColor : "secondary",
                                dangerouslySetInnerHTML: (0, eM.K)(i.subtitleProps.text)
                            }), (0, d.jsx)(eU.Fh.Consumer, {
                                children: function(e) {
                                    return (0, d.jsx)(eA.i, {
                                        Component: "h4",
                                        appearance: "title4",
                                        "data-qa": "title",
                                        role: "heading",
                                        weight: e === w.aU.NIKE_JOURNAL ? "medium" : "regular",
                                        color: i.titleProps.textColor,
                                        dangerouslySetInnerHTML: (0, eM.K)((0, ej.PI)(i.titleProps.text, 160))
                                    })
                                }
                            }), (null == i ? void 0 : null === (t = i.bodyProps) || void 0 === t ? void 0 : t.text) && (0, d.jsx)(eA.i, {
                                appearance: "body2",
                                className: "mt2-sm",
                                color: i.bodyProps.textColor,
                                dangerouslySetInnerHTML: (0, eM.K)((0, ej.PI)(i.bodyProps.text, 200))
                            })]
                        })]
                    })
                };
            eG.propTypes = z.zA;
            var eK = {
                    featuredWrapper: "_2YIwVArV",
                    imageMedia: "bcZC_-XM",
                    overlay: "_327lXsOA"
                },
                eQ = function(e) {
                    var t = (0, eU.Z8)().isPortrait,
                        n = e.withH1 ? "h1" : "h4",
                        a = e.withH1 ? "h2" : "h5",
                        i = (0, d.jsxs)(G, {
                            renderAs: "figcaption",
                            position: {
                                horizontal: "center",
                                vertical: "after"
                            },
                            overlayClassName: eK.overlay,
                            children: ["" !== e.titleProps.text && (0, d.jsx)(n, {
                                "data-qa": "title",
                                className: "u-text-transform-unset u-futura-line-height u-futura-font-size marketing-font",
                                children: e.titleProps.text
                            }), "" !== e.subtitleProps.text && (0, d.jsx)(a, {
                                "data-qa": "subtitle",
                                className: "body-3 text-color-secondary",
                                children: e.subtitleProps.text
                            }), "" !== e.bodyProps.text && (0, d.jsx)("p", {
                                "data-qa": "body",
                                className: t ? "body-3" : "body-1",
                                children: e.bodyProps.text
                            })]
                        });
                    return (0, d.jsx)("div", {
                        className: eK.featuredWrapper,
                        "data-qa-content": "editorial-featured-content",
                        children: (0, d.jsx)(en, (0, S._)((0, T._)({}, e), {
                            customClass: (0, L.Z)(eI.Z.maintain, eK.imageMedia),
                            textLocation: {
                                horizontal: "center",
                                vertical: "after"
                            },
                            cardOverlayElement: i
                        }))
                    })
                };
            eQ.propTypes = {
                bodyProps: z.IJ,
                imageHeight: z.ZB,
                subtitleProps: z.IJ,
                titleProps: z.IJ,
                withH1: h().bool
            };
            var eJ = function(e) {
                var t = e.sectionHeadline,
                    n = e.analyticsItemId,
                    a = e.headlineAnalyticsId,
                    i = e.filmstripSlides,
                    r = e.hasFeaturedCard,
                    o = (0, ey.G)("lt", "s"),
                    s = !(0, e_.a)(o) && i.length > U.Z.MIN_PRODUCT_LIST_LENGTH ? U.Z.CAROUSEL_NAVIGATION_MODE.buttonAbove : U.Z.CAROUSEL_NAVIGATION_MODE.scroll;
                return (0, d.jsx)(eb.m, {
                    childContentFocusable: !0,
                    conditionallyHideNavButtons: !1,
                    navigationMode: s,
                    slidesToShow: {
                        xs: U.Z.MIN_PRODUCT_LIST_LENGTH
                    },
                    alignToGrid: !0,
                    className: eL.carousel,
                    classes: {
                        listContainer: eL.container,
                        navBtnWrapper: eL.navigation
                    },
                    slots: r ? {} : {
                        TitleSlot: (0, d.jsx)(eE.Z, (0, S._)((0, T._)({}, t), {
                            analyticsItemId: a,
                            containerClassName: eF.headline,
                            className: eF.headlineText
                        }))
                    },
                    titleProps: {
                        id: n
                    },
                    children: i
                })
            };
            eJ.propTypes = {
                analyticsItemId: h().string,
                filmstripSlides: h().arrayOf(h().node),
                hasFeaturedCard: h().bool,
                headlineAnalyticsId: h().string,
                sectionHeadline: z.qJ
            };
            var eY = function(e) {
                var t = e.sectionHeadline,
                    n = e.headlineAnalyticsId,
                    a = e.filmstripSlides,
                    i = e.hasFeaturedCard;
                return (0, d.jsxs)("div", {
                    className: eF.twoInRowWrapper,
                    children: [!i && (0, d.jsx)(eE.Z, (0, S._)((0, T._)({}, t), {
                        analyticsItemId: n,
                        className: eF.headlineText
                    })), (0, d.jsx)("div", {
                        className: eF.twoInRow,
                        children: a
                    })]
                })
            };
            eY.propTypes = {
                analyticsItemId: h().string,
                filmstripSlides: h().arrayOf(h().node),
                hasFeaturedCard: h().bool,
                headlineAnalyticsId: h().string,
                sectionHeadline: z.qJ
            };
            var eX = function(e) {
                var t, n, a, i, r, o = e.analyticsItemId,
                    s = e.sectionHeadline,
                    l = e.slides,
                    u = e.featuredCard,
                    p = l.slice(0, U.Z.MAX_PRODUCT_LIST_LENGTH),
                    m = "".concat(o, "_0"),
                    h = p.length < U.Z.MIN_PRODUCT_LIST_LENGTH,
                    g = h ? eY : eJ,
                    v = !!u,
                    f = p.map(function(e, t) {
                        var n = "".concat(o, "_").concat(t + (v ? 2 : 1));
                        return (0, d.jsx)(eG, (0, S._)((0, T._)({}, e), {
                            analyticsItemId: n
                        }), e.id)
                    });
                return (0, d.jsxs)("div", {
                    "data-qa": "dynamic-carousel",
                    className: eF.dynamicContent,
                    children: [v && (0, d.jsxs)("div", {
                        className: (0, L.Z)((t = {}, (0, c._)(t, eF.featuredWrapper, !h), (0, c._)(t, eF.twoInRowWrapper, h), t)),
                        children: [(0, d.jsx)(eE.Z, (0, S._)((0, T._)({}, s), {
                            analyticsItemId: m
                        })), (0, d.jsx)(eQ, (0, S._)((0, T._)({}, u), {
                            analyticsItemId: "".concat(o, "_1")
                        }))]
                    }), (0, d.jsx)("div", {
                        "data-qa": "dynamic-carousel-slides",
                        children: (0, d.jsx)(g, {
                            analyticsItemId: o,
                            sectionHeadline: s,
                            filmstripSlides: f,
                            hasFeaturedCard: v,
                            headlineAnalyticsId: m
                        })
                    })]
                })
            };
            eX.propTypes = {
                analyticsItemId: h().string,
                featuredCard: h().shape(z.zA),
                sectionHeadline: z.qJ,
                slides: h().arrayOf(h().shape(z.zA))
            };
            var e$ = {
                    productSlide: "_1Baike-z",
                    fade: "_2qDSHYT7"
                },
                e0 = n(26101),
                e1 = n(99702),
                e2 = {
                    productCardImg: "_1Tmlp2Sd"
                },
                e3 = function(e) {
                    var t = e.aspectRatio,
                        n = e.detailsClass,
                        a = e.url,
                        i = e.imgUrl,
                        r = e.altText,
                        o = e.title,
                        s = e.subtitle,
                        l = e.formattedListPrice,
                        c = e.formattedSalePrice,
                        u = e.isOnSale,
                        p = e.isMemberExclusive,
                        m = e.isNikeByYou,
                        h = e.overlayText,
                        g = e.country,
                        v = e.translations,
                        f = e.textBadge,
                        y = e.TextBadgeComponent,
                        _ = (0, e1.es)({
                            discountPrice: c,
                            isTaxable: !0,
                            listPrice: l,
                            locale: null == g ? void 0 : g.toLowerCase(),
                            onSale: u
                        }),
                        b = _.addendum1,
                        x = _.addendum2,
                        T = _.price,
                        I = _.discountPrice;
                    return (0, d.jsx)(e0.I, {
                        imageAspectRatio: t,
                        components: {
                            ImageComp: W.x,
                            OverlayComp: void 0 === h ? null : void 0
                        },
                        imageCompProps: {
                            altText: r,
                            assetsAspectRatios: {
                                landscape: t,
                                portrait: t
                            },
                            customClass: (0, L.Z)(["product-slide-img", e2.productCardImg]),
                            landscapeURL: i,
                            portraitURL: i
                        },
                        classes: {
                            details: n
                        },
                        products: [{
                            details: {
                                addendum1: v[b],
                                addendum2: v[x],
                                category: s,
                                components: {
                                    CategoryComp: "h5",
                                    TextBadgeComp: y,
                                    TitleComp: "h4"
                                },
                                discountPrice: I,
                                isMemberExclusive: p,
                                isNikeByYou: m,
                                overlayText: h,
                                price: T,
                                textBadge: null != f ? f : Boolean(y),
                                title: o
                            },
                            hero: {
                                image: {
                                    alt: r,
                                    src: i
                                }
                            },
                            link: {
                                href: a,
                                title: o
                            }
                        }, ]
                    })
                };
            e3.defaultProps = {
                translations: {}
            }, e3.propTypes = (0, T._)({}, z.MF);
            var e6 = {
                    rainbowText: "_2miAdSLe"
                },
                e5 = function(e) {
                    var t = e.children;
                    return (0, d.jsx)("span", {
                        className: e6.rainbowText,
                        children: t
                    })
                };
            e5.propTypes = {
                children: h().node
            };
            var e4 = {
                    memberExclusive: "_3V3M9CYj"
                },
                e8 = function() {
                    var e = (0, v.v9)(N.wl.productCardLabelsSelector, v.wU).labels,
                        t = (0, e_.a)((0, ey.G)("gte", "m")) ? "body1Strong" : "body2Strong";
                    return (0, d.jsxs)(d.Fragment, {
                        children: [(0, d.jsx)(eA.i, {
                            appearance: t,
                            className: e4.memberExclusive,
                            children: e.memberAccessLabel
                        }), (0, d.jsx)(eA.i, {
                            appearance: t,
                            children: (0, d.jsx)(e5, {
                                children: e.nikeByYouLabel
                            })
                        })]
                    })
                },
                e7 = function(e) {
                    var t, n, a = e.analyticsItemId,
                        i = e.isNikeByYou,
                        r = e.isMemberExclusive,
                        o = e.labels,
                        s = (0, ea._)(e, ["analyticsItemId", "isNikeByYou", "isMemberExclusive", "labels"]),
                        l = i ? o.nikeByYouText : "";
                    return i && r ? n = e8 : i ? t = o.nikeByYouLabel : r && (t = o.memberAccessLabel), (0, d.jsx)("div", {
                        "data-qa": "product-slide",
                        "data-analytics-placement-id": a,
                        "data-analytics-has-landmark": "true",
                        className: e$.productSlide,
                        children: (0, d.jsx)(e3, (0, T._)({
                            isNikeByYou: i,
                            isMemberExclusive: r,
                            labels: o,
                            overlayText: i || !r ? l : void 0,
                            textBadge: t,
                            TextBadgeComponent: n
                        }, s))
                    })
                };
            e7.defaultProps = {
                labels: {}
            }, e7.propTypes = (0, T._)({}, z.Mw);
            var e9 = {
                    containerMinHeight: "_2q-fbaxy",
                    snkrsIcon: "_3c9CFrxg",
                    headline: "_17h9XxkG"
                },
                te = n(81753),
                tt = n.n(te),
                tn = n(73453),
                ta = {
                    blankFeedContainer: "firiWhFg",
                    blankFeedList: "_1m023uHX",
                    rectShape: "_2X5yXwZW"
                },
                ti = function(e) {
                    var t = e.className;
                    return (0, d.jsxs)("div", {
                        className: (0, L.Z)(ta.blankFeedContainer, t),
                        children: [(0, d.jsx)(tn.O, {
                            width: "70%",
                            height: "28px"
                        }), (0, d.jsxs)("div", {
                            className: ta.blankFeedList,
                            children: [(0, d.jsx)(tn.O, {
                                className: ta.rectShape
                            }), (0, d.jsx)(tn.O, {
                                className: ta.rectShape
                            }), (0, d.jsx)(tn.O, {
                                className: ta.rectShape
                            }), (0, d.jsx)(tn.O, {
                                className: ta.rectShape
                            })]
                        })]
                    })
                };
            ti.propTypes = {
                className: h().string
            }, tt()(ti)(function(e) {
                var t = e.slideAspectRatio;
                return "\n  .".concat(ta.rectShape, " {\n    height: auto !important;\n    width: calc(((100% - 5px) / 3)) !important;\n    &::before {\n      content: '';\n      display: block;\n      padding-top: ").concat(100 * Math.pow(t, -1), "%;\n    }\n  }\n")
            });
            var tr = function(e) {
                var t = e.sectionHeadline,
                    n = e.ToggleComponent;
                return (0, d.jsx)(d.Fragment, {
                    children: (0, d.jsx)(eE.Z, (0, S._)((0, T._)({}, t), {
                        containerClassName: e9.headline,
                        ToggleComponent: n
                    }))
                })
            };
            tr.propTypes = {
                ToggleComponent: h().element,
                id: h().string,
                sectionHeadline: z.Kd.sectionHeadline
            };
            var to = function(e) {
                var t = e.containerType;
                return (0, d.jsx)(d.Fragment, {
                    children: t === N.QU.SNKRS_DROPS && (0, d.jsx)("span", {
                        className: e9.snkrsIcon
                    })
                })
            };
            to.propTypes = {
                containerType: z.Kd.containerType
            };
            var ts = function(e, t, n) {
                    var a = e.actions,
                        i = null == a ? void 0 : a[0];
                    if (!i) return null;
                    var r = N._V[t] || "";
                    return {
                        "aria-describedby": "title-".concat(n),
                        "data-analytics-action-id": i.id,
                        href: "".concat(i.destinationId).concat(r),
                        target: i.openInNewTab ? "_blank" : "_self",
                        text: i.actionText
                    }
                },
                tl = function(e) {
                    var t = e.slides,
                        n = e.labels,
                        a = e.sectionHeadline,
                        i = e.analyticsItemId,
                        r = e.isLoading,
                        o = e.dataQa,
                        s = e.containerType,
                        l = e.SlideComponent,
                        c = e.ToggleComponent,
                        u = e.placementGroupIndex,
                        p = e.activeSnkrsTab,
                        m = (null == t ? void 0 : t.length) < U.Z.MIN_PRODUCT_LIST_LENGTH,
                        h = (0, ey.G)("lt", "s"),
                        g = !(0, e_.a)(h) && t.length > U.Z.MIN_PRODUCT_LIST_LENGTH,
                        v = g ? U.Z.CAROUSEL_NAVIGATION_MODE.buttonAbove : U.Z.CAROUSEL_NAVIGATION_MODE.scroll;
                    return r ? (0, d.jsx)(ti, {
                        className: e9.containerMinHeight
                    }) : m ? null : (0, d.jsxs)("div", {
                        "data-qa": "product-container",
                        "data-qa-container": o,
                        className: (0, L.Z)(g && e9.containerMinHeight),
                        children: [(0, d.jsx)(to, {
                            containerType: s
                        }), (0, d.jsx)(eb.m, {
                            childContentFocusable: !0,
                            conditionallyHideNavButtons: !1,
                            navigationMode: v,
                            slidesToShow: {
                                xs: U.Z.MIN_PRODUCT_LIST_LENGTH
                            },
                            alignToGrid: !0,
                            className: eL.carousel,
                            classes: {
                                listContainer: eL.container,
                                navBtnWrapper: eL.navigation
                            },
                            headerProps: {
                                "data-analytics-placement-id": "".concat(i, "_0")
                            },
                            slots: {
                                TitleSlot: (0, d.jsx)(tr, {
                                    ToggleComponent: c,
                                    sectionHeadline: (0, S._)((0, T._)({}, a), {
                                        actions: [],
                                        analyticsItemId: i
                                    }),
                                    id: i
                                })
                            },
                            titleProps: {
                                id: i
                            },
                            viewAllButtonProps: ts(a, p, i),
                            children: null == t ? void 0 : t.map(function(e, t) {
                                return (0, d.jsx)(l, (0, T._)({
                                    analyticsItemId: "".concat((0, N.JJ)({
                                        hasSeveralPlacements: !0,
                                        id: i,
                                        index: t + 1,
                                        tabIndex: u
                                    })),
                                    labels: n
                                }, e), "".concat(e.productId, "-").concat(e.productThreadId))
                            })
                        })]
                    })
                };
            tl.propTypes = (0, S._)((0, T._)({}, z.Kd), {
                SlideComponent: h().elementType,
                analyticsItemId: h().string,
                containerType: h().string
            }), tl.defaultProps = {
                SlideComponent: e7,
                slides: []
            };
            var tc = n(9271),
                td = n.n(tc),
                tu = {
                    merchMenu: "_1KxhZKCc",
                    "ellipsis-interaction": "PDTHp9yE",
                    merchMenuWrapper: "_3vlxrJ7S",
                    "ellipsis-interaction-rev": "_3FGhfyw3",
                    merchMenuWrapperCol2: "O1TTq6RG",
                    merchMenuWrapperCol3: "lspFZqy1",
                    merchMenuWrapperCol4: "_3cmYugQ4",
                    merchMenuWrapperCol5: "_2GuodCUo",
                    merchMenuWrapperCol6: "_2RURFwr1",
                    merchMenuWrapperCol7: "_2PhimHwX",
                    merchMenuWrapperCol8: "_19R-HgPk",
                    merchMenuWrapperCol9: "_3cOGj6HH",
                    merchMenuWrapperCol10: "_2r1O9lrT",
                    merchMenuWrapperCol1: "_1b1WKZzh",
                    active: "_126H4JW4"
                },
                tp = n(77670),
                tm = function(e) {
                    var t = e.element,
                        n = e.shouldExpand,
                        a = e.isMouseOver,
                        i = e.isMobile,
                        r = e.itemsCount,
                        o = "0";
                    return i && t && n && a && (o = "".concat(t.offsetHeight, "px")), i || (o = a ? "".concat(10 * r, "em") : "9em"), o
                },
                th = function(e) {
                    (0, x._)(n, e);
                    var t = (0, I._)(n);

                    function n(e) {
                        var a;
                        return (0, _._)(this, n), (a = t.call(this, e)).state = {
                            mouseover: !1,
                            selectedRadio: null
                        }, a.onMouseOver = a.onMouseOver.bind((0, y._)(a)), a.onMouseOut = a.onMouseOut.bind((0, y._)(a)), a
                    }
                    return (0, b._)(n, [{
                        key: "onMouseOver",
                        value: function() {
                            this.setState({
                                mouseover: !0
                            })
                        }
                    }, {
                        key: "onMouseOut",
                        value: function() {
                            this.setState({
                                mouseover: !1
                            })
                        }
                    }, {
                        key: "toggleCheckbox",
                        value: function(e) {
                            this.setState(function(t) {
                                return {
                                    selectedRadio: e === t.selectedRadio ? null : e
                                }
                            })
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this,
                                t = this.props,
                                n = t.items,
                                a = t.className,
                                i = t.analyticsItemId,
                                r = this.context.isMobile;
                            return (0, d.jsx)("div", {
                                id: i,
                                className: (0, L.Z)(["ncss-container merchMenu", tu.merchMenu, a, ]),
                                "data-qa": "merch-menu",
                                onFocus: this.onMouseOver,
                                onBlur: this.onMouseOut,
                                children: (0, d.jsx)(td(), {
                                    onMouseOver: this.onMouseOver,
                                    onMouseOut: this.onMouseOut,
                                    sensitivity: 10,
                                    interval: 100,
                                    timeout: 350,
                                    children: (0, d.jsx)("div", {
                                        className: (0, L.Z)(["merchMenuWrapper", tu.merchMenuWrapper, tu["merchMenuWrapperCol".concat(n.length)], (0, c._)({}, tu.active, this.state.mouseover), ]),
                                        onChange: function(t) {
                                            e.toggleCheckbox(t.target.id)
                                        },
                                        children: n.map(function(t, n) {
                                            return (0, d.jsxs)(p().Fragment, {
                                                children: [(0, d.jsx)("input", {
                                                    type: "checkbox",
                                                    defaultValue: n,
                                                    id: "toggle".concat(n),
                                                    checked: e.state.selectedRadio === "toggle".concat(n),
                                                    readOnly: !0
                                                }), (0, d.jsx)("h4", {
                                                    children: (0, d.jsx)(eA.i, {
                                                        Component: "label",
                                                        appearance: "title4",
                                                        role: "button",
                                                        htmlFor: "toggle".concat(n),
                                                        "aria-expanded": r ? e.state.selectedRadio === "toggle".concat(n) : e.state.mouseover,
                                                        onKeyUp: function(t) {
                                                            return "Enter" !== t.key && " " !== t.key && "Spacebar" !== t.key || e.toggleCheckbox(t.target.htmlFor)
                                                        },
                                                        tabIndex: r ? "0" : "-1",
                                                        children: t.label
                                                    })
                                                }), t.links && (0, d.jsx)("div", {
                                                    style: {
                                                        maxHeight: tm({
                                                            element: e["toggle".concat(n)],
                                                            isMobile: r,
                                                            isMouseOver: e.state.mouseover,
                                                            itemsCount: t.links.length,
                                                            shouldExpand: e.state.selectedRadio === "toggle".concat(n)
                                                        })
                                                    },
                                                    children: (0, d.jsx)("ul", {
                                                        ref: function(t) {
                                                            e["toggle".concat(n)] = t
                                                        },
                                                        children: t.links.map(function(t) {
                                                            var a, i, o = r ? e.state.selectedRadio !== "toggle".concat(n) : !e.state.mouseover;
                                                            return (0, d.jsx)("li", {
                                                                children: (0, d.jsx)(tp.Z, {
                                                                    "data-analytics-action-id": t.id,
                                                                    "aria-hidden": o,
                                                                    href: t.url,
                                                                    children: (0, d.jsx)(eA.i, {
                                                                        Component: "span",
                                                                        appearance: "body1Strong",
                                                                        children: t.label
                                                                    })
                                                                })
                                                            }, t.id)
                                                        })
                                                    })
                                                })]
                                            }, t.id)
                                        })
                                    })
                                })
                            })
                        }
                    }]), n
                }(p().Component);
            (0, c._)(th, "contextType", eU.l3);
            var tg = {
                destinationType: h().string,
                id: h().string.isRequired,
                label: h().string.isRequired,
                openInNewTab: h().bool
            };
            th.propTypes = {
                analyticsItemId: h().string,
                className: h().string,
                items: h().arrayOf(h().shape((0, S._)((0, T._)({}, tg), {
                    links: h().arrayOf(h().shape((0, S._)((0, T._)({}, tg), {
                        url: h().string.isRequired
                    })))
                }))).isRequired
            };
            var tv = n(58588),
                tf = n(89068),
                ty = function(e, t) {
                    (0, u.useEffect)(function() {
                        return window.addEventListener(e, t),
                            function() {
                                return window.removeEventListener(e, t)
                            }
                    }, [e, t])
                },
                t_ = n(67862),
                tb = n(86023),
                tx = n(14586),
                tT = function(e) {
                    var t = e.text,
                        n = e.renderAs,
                        a = e.className,
                        i = (0, ea._)(e, ["text", "renderAs", "className"]);
                    return (0, d.jsx)(eA.i, (0, S._)((0, T._)({
                        className: a,
                        appearance: "body1Strong",
                        Component: n,
                        color: "primary",
                        weight: "medium"
                    }, i), {
                        children: t
                    }))
                };
            tT.propTypes = {
                className: h().string,
                renderAs: h().oneOfType([h().element, h().string]),
                text: h().string
            }, tT.defaultProps = {
                renderAs: "h2"
            };
            var tI = function(e) {
                var t = e.text,
                    n = e.appearance,
                    a = e.renderAs,
                    i = e.className,
                    r = (0, ea._)(e, ["text", "appearance", "renderAs", "className"]);
                return (0, d.jsx)(eA.i, (0, S._)((0, T._)({
                    className: i,
                    appearance: n,
                    Component: a || ((null == r ? void 0 : r.href) ? "a" : "span"),
                    color: "primary",
                    weight: "medium"
                }, r), {
                    children: t
                }))
            };
            tI.propTypes = {
                appearance: h().string,
                className: h().string,
                href: h().string,
                renderAs: h().element,
                text: h().string.isRequired
            }, tI.defaultProps = {
                appearance: "heading5"
            };
            var tC = {
                    downArrow: 40,
                    enter: 13,
                    esc: 27,
                    space: 32,
                    upArrow: 38
                },
                tN = function(e) {
                    var t, n = (0, u.useRef)(null),
                        a = !!(null == e ? void 0 : null === (t = e.items) || void 0 === t ? void 0 : t.length),
                        i = (0, u.useRef)(null),
                        r = (0, u.useState)(!1),
                        o = r[0],
                        s = r[1],
                        l = (0, u.useState)(!1),
                        c = l[0],
                        p = l[1],
                        m = e.titleProps,
                        h = e.items,
                        g = e.TitleComponent,
                        v = e.LinkComponent,
                        f = e.className,
                        y = e.DropdownItem,
                        _ = e.prefix,
                        b = e.isSticky,
                        x = e.customClassName,
                        I = e.placeHolderClass,
                        C = function(e) {
                            s(e);
                            var t, a = e && b && (null === (t = n.current) || void 0 === t ? void 0 : t.getBoundingClientRect().bottom) < 250 ? "hidden" : "auto";
                            e && p(!b), document.body.style.overflow = a
                        };
                    ty("scroll", function() {
                        var e;
                        b && o && (null === (e = n.current) || void 0 === e ? void 0 : e.getBoundingClientRect().bottom) < 250 && C(!1)
                    });
                    var N = function(e) {
                            var t, n;
                            !o && [tC.enter, tC.space].includes(null == e ? void 0 : e.keyCode) ? (C(!0), null === (t = i.current.querySelector("li:first-child a")) || void 0 === t || t.focus()) : o && tC.esc === (null == e ? void 0 : e.keyCode) && (C(!1), null === (n = i.current.querySelector(".local-nav-dropdown-title")) || void 0 === n || n.focus())
                        },
                        w = function(e) {
                            switch (e.keyCode) {
                                case tC.upArrow:
                                    var t, n = e.target.parentNode.previousElementSibling;
                                    n ? n.firstElementChild.focus() : null === (t = i.current.querySelector("li:last-of-type a")) || void 0 === t || t.focus();
                                    break;
                                case tC.downArrow:
                                case tC.tab:
                                    var a, r, o = e.target.parentNode.nextElementSibling;
                                    o ? null === (a = o.firstElementChild) || void 0 === a || a.focus() : null === (r = i.current.querySelector("li:first-of-type a")) || void 0 === r || r.focus()
                            }
                        };
                    return (null == m ? void 0 : m.text) || (null == h ? void 0 : h.length) ? (0, d.jsxs)("div", {
                        className: (0, L.Z)([f, x, c && "local-nav-opened-static", o && "local-nav-dropdown-opened", !o && "local-nav-dropdown-hidden", ]),
                        ref: i,
                        children: [(0, d.jsxs)("div", (0, S._)((0, T._)({
                            id: "".concat(_, "menu-title"),
                            className: (0, L.Z)(["local-nav-dropdown-title", !c && b && I, ])
                        }, a && {
                            "aria-controls": "".concat(_, "menu-list"),
                            "aria-expanded": o,
                            "aria-haspopup": !0,
                            onClick: function() {
                                return C(!o)
                            },
                            onKeyDown: N,
                            role: "button",
                            tabIndex: 0
                        }), {
                            children: [(0, d.jsx)(g, (0, S._)((0, T._)({}, m), {
                                className: (0, L.Z)(["local-nav-title", null == m ? void 0 : m.className])
                            })), a && (0, d.jsx)("div", {
                                className: "local-nav-dropdown-icon"
                            })]
                        })), a && (0, d.jsxs)("nav", {
                            className: "local-nav-dropdown-nav",
                            children: [(0, d.jsx)(tx.q, {
                                closeModal: function() {
                                    return C(!1)
                                },
                                shouldCloseOnBackgroundClick: !0,
                                className: "local-nav-dropdown-backdrop"
                            }), (0, d.jsx)("ul", {
                                ref: n,
                                id: "".concat(_, "menu-list"),
                                role: "menu",
                                "aria-labelledby": "".concat(_, "menu-title"),
                                className: "local-nav-dropdown-list",
                                tabIndex: -1,
                                onKeyDown: N,
                                children: h.map(function(e, t) {
                                    var n = e.id,
                                        a = (0, ea._)(e, ["id"]);
                                    return (0, d.jsx)(y, {
                                        role: "none",
                                        className: "local-nav-dropdown-item",
                                        index: t,
                                        length: h.length,
                                        children: (0, d.jsx)(v, (0, S._)((0, T._)({
                                            role: "menuitem",
                                            appearance: "title4",
                                            tabIndex: o ? 0 : -1
                                        }, a), {
                                            onKeyDown: w
                                        }))
                                    }, n)
                                })
                            })]
                        })]
                    }) : null
                };
            tN.propTypes = {
                DropdownItem: h().elementType,
                LinkComponent: h().elementType,
                TitleComponent: h().elementType,
                className: h().string,
                customClassName: h().string,
                isSticky: h().bool,
                items: h().arrayOf(h().shape({
                    className: h().string,
                    href: h().string,
                    id: h().string.isRequired,
                    text: h().string.isRequired
                })),
                placeHolderClass: h().string,
                prefix: h().string,
                titleProps: h().shape({
                    className: h().string,
                    text: h().string
                })
            }, tN.defaultProps = {
                DropdownItem: "li",
                LinkComponent: tI,
                TitleComponent: tT,
                prefix: ""
            };
            var tw = function(e) {
                    var t = parseInt(e.replace(/[^a-f0-9]+/i, ""), 16);
                    return {
                        b: 255 & t,
                        g: t >> 8 & 255,
                        r: t >> 16 & 255
                    }
                },
                tS = function(e, t) {
                    var n = tw(e),
                        a = n.r,
                        i = n.g,
                        r = n.b;
                    return "rgba(".concat(a, ", ").concat(i, ", ").concat(r, ", ").concat(t, ")")
                };

            function tP() {
                var e = (0, t_._)(["\n    outline: none;\n\n    a {\n      text-decoration: none;\n    }\n\n    .local-nav-dropdown-icon {\n      width: 16px;\n      height: 14px;\n      position: relative;\n\n      &:after,\n      &:before {\n        content: '';\n        width: 10px;\n        height: 2px;\n        background: rgb(0, 0, 0);\n        display: block;\n        position: absolute;\n        top: 50%;\n        transition: transform 300ms cubic-bezier(0.25, 0.1, 0.25, 1);\n        animation: none;\n      }\n\n      &:before {\n        border-top-left-radius: 1px;\n        border-bottom-left-radius: 1px;\n        left: 0px;\n        transform: rotate(45deg);\n      }\n\n      &:after {\n        border-top-right-radius: 1px;\n        border-bottom-right-radius: 1px;\n        right: 0px;\n        transform: rotate(-45deg);\n      }\n    }\n\n    @keyframes arrow-width-down ", "\n\n    @keyframes arrow-width-up ", "\n\n    &.local-nav-dropdown-opened .local-nav-dropdown-icon {\n      &:before {\n        transform: rotate(-45deg);\n        animation: arrow-width-down 300ms cubic-bezier(0.25, 0.1, 0.25, 1);\n      }\n\n      &:after {\n        transform: rotate(45deg);\n        animation: arrow-width-down 300ms cubic-bezier(0.25, 0.1, 0.25, 1);\n      }\n    }\n\n    &.local-nav-dropdown-hidden .local-nav-dropdown-icon {\n      &:before {\n        animation: arrow-width-up 300ms cubic-bezier(0.25, 0.1, 0.25, 1);\n      }\n\n      &:after {\n        animation: arrow-width-up 300ms cubic-bezier(0.25, 0.1, 0.25, 1);\n      }\n    }\n\n    .local-nav-dropdown-title {\n      padding: 18px 20px;\n      position: absolute;\n      width: 100%;\n      background: ", ";\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n      cursor: pointer;\n      z-index: 2;\n      outline: none;\n\n      .local-nav-title {\n        flex: 1;\n        white-space: nowrap;\n        text-overflow: ellipsis;\n        overflow: hidden;\n      }\n    }\n\n    .local-nav-dropdown-nav {\n      padding-top: 60px;\n    }\n\n    // ToDo:CICLP-3096\n    .local-nav-title {\n      ", "\n      text-align: ", ";\n    }\n\n    .local-nav-dropdown-backdrop {\n      opacity: 1;\n      transition: opacity 300ms 150ms;\n      z-index: 1;\n    }\n\n    &:not(.local-nav-dropdown-opened) .local-nav-dropdown-backdrop,\n    &.local-nav-opened-static .local-nav-dropdown-backdrop {\n      background: ", ";\n      height: 0;\n      opacity: 0;\n      transition: opacity 300ms 100ms, height 0ms 400ms;\n      backdrop-filter: saturate(180%) blur(4px);\n    }\n\n    .local-nav-dropdown-item a {\n      width: 100%;\n      display: inline-block;\n      padding: 12px 20px;\n      text-align: ", ";\n    }\n\n    .local-nav-dropdown-list {\n      max-height: ", "px;\n      height: 100vh;\n      background: ", ";\n      position: absolute;\n      width: 100%;\n      top: 0;\n      z-index: 1;\n      transition: max-height 300ms cubic-bezier(0.25, 0.1, 0.25, 1);\n      overflow: auto;\n    }\n\n    &.local-nav-opened-static .local-nav-dropdown-list,\n    &.local-nav-opened-static.is-sticky {\n      position: static;\n      max-height: ", "px;\n      height: auto;\n    }\n\n    &.local-nav-opened-static.is-sticky {\n      max-height: ", "px;\n    }\n\n    &.local-nav-opened-static.is-sticky .local-nav-dropdown-title {\n      position: fixed;\n      width: 100%;\n      top: 0;\n      background: ", ";\n    }\n\n    &:not(.local-nav-dropdown-opened) .local-nav-dropdown-list {\n      transition-delay: 100ms;\n      max-height: 0;\n    }\n\n    .local-nav-dropdown-item {\n      opacity: 1;\n      position: relative;\n      z-index: 1;\n\n      &:first-of-type {\n        padding-top: 78px;\n      }\n\n      &:last-of-type {\n        padding-bottom: 36px;\n      }\n    }\n\n    &.local-nav-opened-static .local-nav-dropdown-item:first-of-type {\n      padding-top: 32px;\n    }\n\n    &:not(.local-nav-dropdown-opened) .local-nav-dropdown-item {\n      opacity: 0;\n    }\n  "]);
                return tP = function() {
                    return e
                }, e
            }

            function tL() {
                var e = (0, t_._)(["\n  transition: opacity 200ms ", "ms\n    cubic-bezier(0.25, 0.1, 0.25, 1);\n\n  .sticky-container:not(.local-nav-dropdown-opened) & {\n    transition-duration: 100ms;\n    transition-delay: ", "ms;\n  }\n"]);
                return tL = function() {
                    return e
                }, e
            }

            function tE() {
                var e = (0, t_._)(["\n  ", "\n"]);
                return tE = function() {
                    return e
                }, e
            }

            function tk() {
                var e = (0, t_._)(["\n  ", "\n"]);
                return tk = function() {
                    return e
                }, e
            }
            var tO = "\n  {\n    11% {\n      max-width: 10px;\n    }\n    11.5% {\n      max-width: 9px;\n    }\n    61.5% {\n      max-width: 9px;\n    }\n    62% {\n      max-width: 10px;\n    }\n  }",
                tj = function(e) {
                    var t = e.theme,
                        n = t.colorBackgroundAlwaysLight,
                        a = void 0 === n ? "#fff" : n,
                        i = t.colorBackgroundAlwaysDark,
                        r = e.alignment,
                        o = e.items,
                        s = e.itemsHeight,
                        l = void 0 === s ? 48 : s;
                    return (0, tb.css)(tP(), tO, tO, a, "center" === r ? "padding-left: 24px;" : "", r, tS(void 0 === i ? "#111" : i, .4), r, l * o.length + 114, a, l * o.length + 50, l * o.length + 80, a)
                },
                tA = function(e) {
                    var t = e.index,
                        n = void 0 === t ? 0 : t,
                        a = e.length;
                    return (0, tb.css)(tL(), 50 * n + 150, 20 * ((void 0 === a ? 0 : a) - n - 1))
                },
                tR = tt()("li")(tE(), tA),
                tU = function(e) {
                    return (0, d.jsx)(tN, (0, S._)((0, T._)({}, e), {
                        DropdownItem: tR
                    }))
                };
            tU.defaultProps = (0, T._)({}, tN.defaultProps);
            var tM = tt()(tU)(tk(), tj),
                tB = function(e) {
                    var t = e.titleProps,
                        n = e.items,
                        a = e.TitleComponent,
                        i = e.LinkComponent,
                        r = e.className,
                        o = e.customClassName,
                        s = e.placeHolderClass;
                    return (null == t ? void 0 : t.text) || (null == n ? void 0 : n.length) ? (0, d.jsx)("div", {
                        className: (0, L.Z)([r, o, s]),
                        children: (0, d.jsxs)("div", {
                            className: "local-nav-wrapper",
                            children: [(null == t ? void 0 : t.text) && (0, d.jsx)(a, (0, S._)((0, T._)({}, t), {
                                className: (0, L.Z)(["local-nav-title", t.className])
                            })), !!(null == n ? void 0 : n.length) && (0, d.jsx)("ul", {
                                className: "local-nav-list",
                                children: n.map(function(e) {
                                    return (0, d.jsx)("li", {
                                        className: "local-nav-menu-item",
                                        children: (0, d.jsx)(i, (0, T._)({}, e))
                                    }, e.id)
                                })
                            }), (null == t ? void 0 : t.text) && (0, d.jsx)(a, (0, S._)((0, T._)({}, t), {
                                className: (0, L.Z)(["local-nav-title local-nav-title_hidden", t.className, ]),
                                renderAs: "div"
                            }))]
                        })
                    }) : null
                };

            function tZ() {
                var e = (0, t_._)(["\n    background: ", ";\n    padding: 18px 0;\n\n    .local-nav-wrapper {\n      display: flex;\n      flex-wrap: wrap;\n    }\n\n    a {\n      text-decoration: none;\n    }\n\n    .local-nav-title {\n      &:first-child {\n        margin-right: auto;\n      }\n      &:last-child {\n        margin-left: auto;\n      }\n      flex: 1;\n      display: flex;\n    }\n\n    .local-nav-title_hidden {\n      opacity: 0;\n      height: 0;\n      visibility: hidden;\n      line-height: 0;\n      padding: 0;\n    }\n\n    .local-nav-menu-item:not(:last-of-type) {\n      padding-right: calc(2 * ", ");\n    }\n\n    .local-nav-list {\n      padding: 0;\n      flex-flow: wrap;\n      display: flex;\n    }\n  "]);
                return tZ = function() {
                    return e
                }, e
            }

            function tH() {
                var e = (0, t_._)(["\n  ", "\n"]);
                return tH = function() {
                    return e
                }, e
            }
            tB.propTypes = {
                LinkComponent: h().elementType,
                TitleComponent: h().elementType,
                className: h().string,
                customClassName: h().string,
                items: h().arrayOf(h().shape({
                    className: h().string,
                    href: h().string,
                    id: h().string.isRequired,
                    text: h().string.isRequired
                })),
                placeHolderClass: h().string,
                titleProps: h().shape({
                    className: h().string,
                    text: h().string
                })
            }, tB.defaultProps = {
                LinkComponent: tI,
                TitleComponent: tT
            };
            var tD = function(e) {
                    var t = e.theme,
                        n = t.colorBackgroundAlwaysLight,
                        a = t.sizeSpacingGridGutterL;
                    return (0, tb.css)(tZ(), void 0 === n ? "#fff" : n, void 0 === a ? "12px" : a)
                },
                tq = function(e) {
                    return (0, d.jsx)(tB, (0, T._)({}, e))
                };
            tq.defaultProps = (0, T._)({}, tB.defaultProps);
            var tW = tt()(tq)(tH(), tD),
                tF = function(e) {
                    var t = e.TitleComponent,
                        n = e.LinkComponent,
                        a = e.items,
                        i = e.titleProps,
                        r = e.className,
                        o = e.withSticky,
                        s = e.showOnlySticky,
                        l = e.switchBreakpoint,
                        c = e.containerClassName,
                        p = e.alignment,
                        m = e.stickyParam,
                        h = (0, u.useRef)(null),
                        g = (0, tv._)((0, tf.f)(!1), 2),
                        v = g[0],
                        f = g[1],
                        y = (0, tv._)((0, tf.f)("auto"), 2),
                        _ = y[0],
                        b = y[1],
                        x = (0, e_.a)((0, ey.G)("lte", l)),
                        T = (0, u.useState)(!0),
                        I = T[0],
                        C = T[1],
                        N = (0, u.useCallback)(function() {
                            var e;
                            s || b("".concat(null === (e = h.current.querySelector(".sticky-placeholder")) || void 0 === e ? void 0 : e.getBoundingClientRect().height, "px"))
                        }, [b, s]);
                    ty("scroll", function() {
                        o && h.current.getBoundingClientRect()[m] < 0 !== v && (f(h.current.getBoundingClientRect()[m] < 0), N())
                    }), ty("resize", N), (0, u.useEffect)(function() {
                        C(x), f(o && h.current.getBoundingClientRect()[m] < 0), N()
                    }, [C, x, f, o, h, m, N, ]);
                    var w = I ? (0, d.jsx)(tM, {
                        TitleComponent: t,
                        LinkComponent: n,
                        items: a,
                        titleProps: i,
                        isSticky: v,
                        customClassName: (0, L.Z)(["sticky-container", c, v && "is-sticky", s && !v && "sticky-container-hidden", (s || "bottom" === m) && "sticky-container-animation", ]),
                        placeHolderClass: "sticky-placeholder",
                        alignment: p
                    }) : (0, d.jsx)(tW, {
                        items: a,
                        titleProps: i,
                        LinkComponent: n,
                        TitleComponent: t,
                        containerClassName: c,
                        customClassName: (0, L.Z)(["sticky-container", c, v && "is-sticky", s && !v && "sticky-container-hidden", (s || "bottom" === m) && "sticky-container-animation", ]),
                        placeHolderClass: "sticky-placeholder"
                    });
                    return (0, d.jsx)("div", {
                        className: r,
                        ref: h,
                        style: {
                            minHeight: _
                        },
                        children: w
                    })
                };

            function tz() {
                var e = (0, t_._)(["\n    .sticky-container-animation {\n      position: fixed;\n      z-index: 5;\n      top: -65px;\n      width: 100%;\n      transition: top 300ms ease-in-out;\n    }\n\n    .sticky-container-hidden {\n      overflow: hidden;\n    }\n\n    .is-sticky {\n      position: fixed;\n      z-index: 5;\n      width: 100%;\n      top: 0;\n    }\n  "]);
                return tz = function() {
                    return e
                }, e
            }
            tF.propTypes = {
                LinkComponent: h().elementType,
                TitleComponent: h().elementType,
                alignment: h().string,
                className: h().string,
                containerClassName: h().string,
                items: h().arrayOf(h().shape({
                    href: h().string,
                    text: h().string.isRequired
                })),
                showOnlySticky: h().bool,
                stickyParam: h().string,
                switchBreakpoint: h().oneOf(["xs", "s", "m", "l", "xl"]),
                titleProps: h().shape({
                    text: h().string
                }),
                withSticky: h().bool
            }, tF.defaultProps = {
                stickyParam: "top",
                switchBreakpoint: "m",
                withSticky: !1
            };
            var tV = function() {
                return (0, tb.css)(tz())
            };

            function tG() {
                var e = (0, t_._)(["\n  ", "\n"]);
                return tG = function() {
                    return e
                }, e
            }
            var tK = function(e) {
                    return (0, d.jsx)(tF, (0, T._)({}, e))
                },
                tQ = tt()(tK)(tG(), tV),
                tJ = n(39399),
                tY = n.n(tJ),
                tX = n(84644),
                t$ = {
                    localNavWrapper: "_1gSEALx7",
                    title: "_1ZsY6zh2",
                    localNavContainer: "_1uZt26F-",
                    localNav: "_AKr_3ox",
                    localNavItem: "JSftBPEZ",
                    withSubMenu: "_5Lc8LAgK",
                    dropdown: "_3ppZ5qDH",
                    right: "_3J5ra1ji",
                    isFocusedOrHovered: "_1Y-1RHwA",
                    brand: "b2YkJ4XC",
                    logoImage: "_2eprOjqm",
                    stickyWrapperBrandActive: "_3VLs22cl",
                    jordan: "p6wO8-wo",
                    stickyWrapper: "_150uLfzq",
                    stickyWrapperJordan: "_1_61uC7y"
                },
                t0 = n(77561),
                t1 = function(e) {
                    if ((0, t0.$L)() && e) {
                        var t, n = e.getBoundingClientRect(),
                            a = document.body,
                            i = document.documentElement,
                            r = window.pageXOffset || i.getBoundingClientRect().left + (null !== (t = window.scrollX) && void 0 !== t ? t : 0),
                            o = i.clientLeft || a.clientLeft || 0;
                        return Math.round(n.left + r - o)
                    }
                },
                t2 = function(e) {
                    (0, x._)(n, e);
                    var t = (0, I._)(n);

                    function n() {
                        var e;
                        return (0, _._)(this, n), e = t.apply(this, arguments), (0, c._)((0, y._)(e), "subMenu", p().createRef()), (0, c._)((0, y._)(e), "container", p().createRef()), (0, c._)((0, y._)(e), "state", {
                            isFocusedOrHovered: !1,
                            isTapped: !1
                        }), (0, c._)((0, y._)(e), "isFitToScreen", function() {
                            var t = e.subMenu.current,
                                n = e.container.current;
                            return window.innerWidth - (n.getBoundingClientRect().left + t.clientWidth) > 0
                        }), (0, c._)((0, y._)(e), "handleFitToScreen", function() {
                            var t = e.subMenu.current;
                            e.isFitToScreen() ? t.classList.remove(t$.right) : t.classList.add(t$.right)
                        }), (0, c._)((0, y._)(e), "handleTouchStart", function(t) {
                            e.swipe = {
                                x: t.touches[0].clientX
                            }
                        }), (0, c._)((0, y._)(e), "handleTouchMove", function(t) {
                            var n;
                            (null === (n = t.changedTouches) || void 0 === n ? void 0 : n.length) && (e.swipe.swiping = !0)
                        }), (0, c._)((0, y._)(e), "handleTouchEnd", function(t) {
                            var n = Math.abs(t.changedTouches[0].clientX - e.swipe.x);
                            (!e.swipe.swiping || n <= 10) && e.setState(function(e) {
                                return {
                                    isFocusedOrHovered: !e.isFocusedOrHovered
                                }
                            }), e.swipe = {}
                        }), (0, c._)((0, y._)(e), "setSubMenuPosition", function() {
                            if (!e.context.isMobile) {
                                var t = t1(e.container.current);
                                if (t) {
                                    var n = e.subMenu.current;
                                    e.isFitToScreen() ? (n.style.left = "".concat(t, "px"), n.style.textAlign = "left") : (n.style.textAlign = "right", n.style.left = "auto", n.style.right = "10px")
                                }
                            }
                        }), (0, c._)((0, y._)(e), "handleMouseOver", function() {
                            e.setState({
                                isFocusedOrHovered: !0
                            }), e.setSubMenuPosition()
                        }), (0, c._)((0, y._)(e), "handleMouseOut", function() {
                            e.setState({
                                isFocusedOrHovered: !1,
                                isTapped: !1
                            })
                        }), (0, c._)((0, y._)(e), "handleFocus", function() {
                            e.setState({
                                isFocusedOrHovered: !0
                            }), e.setSubMenuPosition()
                        }), (0, c._)((0, y._)(e), "handleBlur", function() {
                            e.setState({
                                isFocusedOrHovered: !1,
                                isTapped: !1
                            })
                        }), (0, c._)((0, y._)(e), "handleOutsideEvent", function(t) {
                            !e.container.current.closest(".ncss-container").contains(t.target) && e.setState({
                                isFocusedOrHovered: !1
                            })
                        }), (0, c._)((0, y._)(e), "handleClick", function(t) {
                            var n = e.context.isTouchDevice;
                            !e.state.isTapped && n && (t.preventDefault(), e.setState({
                                isTapped: !0
                            }))
                        }), e
                    }
                    return (0, b._)(n, [{
                        key: "componentDidMount",
                        value: function() {
                            window.addEventListener("touchstart", this.handleOutsideEvent)
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            window.removeEventListener("touchstart", this.handleOutsideEvent)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this,
                                t = this.props.content,
                                n = this.state,
                                a = n.isFocusedOrHovered,
                                i = n.isTapped,
                                r = this.context,
                                o = r.isTablet,
                                s = r.isDesktop,
                                l = r.isDesktopWide,
                                u = !!(a || i);
                            return (0, d.jsxs)("div", (0, S._)((0, T._)({
                                className: (0, L.Z)(t$.withSubMenu, (0, c._)({}, t$.isFocusedOrHovered, a)),
                                ref: this.container
                            }, (o || s || l) && {
                                onMouseEnter: function() {
                                    return e.handleFitToScreen()
                                }
                            }), {
                                onMouseOver: this.handleMouseOver,
                                onMouseOut: this.handleMouseOut,
                                children: [t.url ? (0, d.jsx)(tp.Z, {
                                    href: t.url,
                                    "data-analytics-action-id": t.id,
                                    className: t$.localNavItem,
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    "aria-expanded": u,
                                    onClick: this.handleClick,
                                    children: t.label
                                }) : (0, d.jsx)(eA.i, {
                                    appearance: "body1Strong",
                                    Component: "span",
                                    tabIndex: "0",
                                    "aria-haspopup": "true",
                                    role: "menuitem",
                                    className: t$.localNavItem,
                                    onTouchStart: this.handleTouchStart,
                                    onTouchMove: this.handleTouchMove,
                                    onTouchEnd: this.handleTouchEnd,
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    "aria-expanded": u,
                                    children: t.label
                                }), (0, d.jsx)("ul", {
                                    className: t$.dropdown,
                                    ref: this.subMenu,
                                    children: t.links.map(function(t) {
                                        return (0, d.jsx)("li", {
                                            children: (0, d.jsx)(tp.Z, {
                                                href: t.url,
                                                "data-analytics-action-id": t.id,
                                                className: t$.localNavItem,
                                                onFocus: e.handleFocus,
                                                onBlur: e.handleBlur,
                                                children: t.label
                                            })
                                        }, t.id)
                                    })
                                })]
                            }))
                        }
                    }]), n
                }(u.Component);
            (0, c._)(t2, "contextType", eU.l3), t2.propTypes = {
                content: h().shape({
                    id: h().string,
                    label: h().string,
                    links: h().array,
                    url: h().string
                }).isRequired,
                index: h().number.isRequired
            };
            var t3 = function(e, t, n) {
                    return t ? (0, d.jsx)(tX.U, {
                        className: t$.logoImage,
                        title: n ? void 0 : w.aU.JORDAN,
                        viewBox: "4 2.5 16 17",
                        width: "91px",
                        height: "84px"
                    }) : e
                },
                t6 = function(e) {
                    var t, n = e.title,
                        a = e.items,
                        i = e.containerClass,
                        r = e.withH1,
                        o = e.landmarkLabel,
                        s = (0, u.useContext)(eU.Fh) === w.aU.JORDAN;
                    return (0, d.jsx)(tY(), {
                        enableTransforms: !1,
                        className: (0, L.Z)(t$.stickyWrapper, (0, c._)({}, t$.stickyWrapperJordan, s)),
                        activeClass: (0, L.Z)("active", (0, c._)({}, t$.stickyWrapperBrandActive, s)),
                        children: (0, d.jsxs)("nav", {
                            "aria-label": o,
                            className: (0, L.Z)("ncss-container", "fixed-fluid", t$.localNavWrapper, (t = {}, (0, c._)(t, t$.brand, s), (0, c._)(t, t$.jordan, s), t), i),
                            children: [n && (0, d.jsx)(eA.i, {
                                Component: r ? "h1" : "div",
                                appearance: "title3",
                                className: t$.title,
                                children: t3(n, s, !1)
                            }), (0, d.jsx)("div", {
                                className: t$.localNavContainer,
                                children: (0, d.jsx)("ul", {
                                    className: t$.localNav,
                                    children: a.map(function(e, t) {
                                        var n;
                                        return (0, d.jsx)("li", {
                                            children: (null === (n = e.links) || void 0 === n ? void 0 : n.length) > 0 ? (0, d.jsx)(t2, {
                                                content: e,
                                                index: t + 1
                                            }) : (0, d.jsx)(tp.Z, {
                                                href: e.url,
                                                "data-analytics-action-id": e.id,
                                                className: (0, L.Z)(t$.localNavItem),
                                                "aria-label": e.label,
                                                children: e.label
                                            })
                                        }, e.id)
                                    })
                                })
                            }), n && (0, d.jsx)("div", {
                                className: t$.title,
                                hidden: !0,
                                "aria-hidden": "true",
                                children: t3(n, s, !0)
                            })]
                        })
                    })
                };
            t6.propTypes = {
                containerClass: h().string,
                items: h().arrayOf(h().shape({
                    destinationType: h().string,
                    id: h().string,
                    label: h().string,
                    openInNewTab: h().bool,
                    url: h().string
                })).isRequired,
                landmarkLabel: h().string,
                title: h().string.isRequired,
                withH1: h().bool
            };
            var t5 = n(53788),
                t4 = {
                    static: "_2q6dEXXq",
                    selected: "_1RZ3DM0A",
                    localNavContainer: "knHZVB-n",
                    titleClassName: "_10MK39VY",
                    menuLink: "_1PsD92Mj"
                },
                t8 = function(e) {
                    return (0, d.jsx)(tp.Z, {
                        href: e.href,
                        className: (0, L.Z)([t4.menuLink, e.isSelected && t4.selected]),
                        "data-analytics-action-id": e.id,
                        children: e.text
                    })
                };
            t8.propTypes = {
                href: h().string,
                id: h().string,
                isSelected: h().bool,
                text: h().string.isRequired
            };
            var t7 = function(e, t) {
                    return e.map(function(e) {
                        return {
                            href: e.url,
                            id: e.id,
                            isSelected: t === e.url,
                            text: e.label
                        }
                    })
                },
                t9 = function(e) {
                    var t = (0, u.useState)(t7(e.items, "")),
                        n = t[0],
                        a = t[1];
                    (0, u.useEffect)(function() {
                        var e = (0, t5.Kl)('div[data-container-type="'.concat(N.QU.LOCAL_NAV, '"]'));
                        return window.NikeDotcomNavReady && window.NikeDotcomNavReady(function() {
                                var t = (0, t5.Pg)();
                                t && e && t.classList.add(t4.static)
                            }),
                            function() {
                                var e = (0, t5.Pg)();
                                e && e.classList.remove(t4.static)
                            }
                    }, []), (0, u.useEffect)(function() {
                        a(t7(e.items, window.location.href))
                    }, [e.items]), e.items;
                    var i, r = (0, ea._)(e, ["items"]),
                        o = {
                            className: !e.isNikeJournal && t4.titleClassName,
                            renderAs: e.withH1 ? "h1" : "h2",
                            text: e.title
                        };
                    return e.isNikeJournal ? (0, d.jsx)(tQ, (0, T._)({
                        titleProps: (0, T._)({}, o),
                        items: n,
                        LinkComponent: t8,
                        withSticky: !0,
                        showOnlySticky: !0,
                        alignment: "center",
                        containerClassName: t4.localNavContainer
                    }, r)) : (0, d.jsx)(t6, (0, T._)({}, e))
                };
            t9.propTypes = {
                className: h().string,
                isNikeJournal: h().bool,
                items: h().arrayOf(h().shape({
                    label: h().string.isRequired,
                    url: h().string
                }))
            };
            var ne = {
                    withBody: "_38689zM8",
                    h_center: "_15UrorU4",
                    textCard: "vmLDU1wi",
                    body: "_3zSzF4hL",
                    h_start: "_1TqATgCW",
                    h_end: "_14ICxaif",
                    title: "-dzJvCiA",
                    bodyLarge: "FaRDqXgS"
                },
                nt = function(e) {
                    var t = e.horizontal;
                    return ne["h_".concat("before" === t ? "start" : t)]
                },
                nn = function(e) {
                    var t = e.bodyProps,
                        n = e.analyticsItemId,
                        a = e.titleProps,
                        i = e.subtitleProps,
                        r = e.backgroundColor,
                        o = e.withH1,
                        s = e.textLocation,
                        l = e.cardLinkId,
                        c = e.cardLinkUrl,
                        u = e.openInNewTab,
                        p = e.actionButtons,
                        m = e.cardLinkMemberOnly,
                        h = e.colorTheme,
                        g = e.destinationType,
                        v = e.cardLinkCollectionId,
                        f = e.originallyPublished,
                        y = e.originallyPublishedTemplate,
                        _ = (0, eM.N)(null == t ? void 0 : t.text),
                        b = !(null == t ? void 0 : t.fontSizeSet),
                        x = null == a ? void 0 : a.text,
                        I = null == i ? void 0 : i.text;
                    if (!x && !_ && !f) return null;
                    var C = !!f && (null == y ? void 0 : y.replace("[date]", f));
                    return (0, d.jsxs)("div", {
                        "data-analytics-placement-id": n,
                        "data-analytics-has-landmark": "true",
                        className: (0, L.Z)([ne.textCard, _ && ne.withBody, nt(null != s ? s : {}), ]),
                        "data-qa": "text-card",
                        style: {
                            backgroundColor: r
                        },
                        children: [l && (0, d.jsx)(K.Y, {
                            actionId: l,
                            destinationType: g,
                            analyticsItemId: n,
                            collectionId: v,
                            memberOnly: m,
                            destinationUrl: c,
                            openInNewTab: u,
                            tabbable: !(null == p ? void 0 : p.length),
                            ariaLabel: "".concat(null == i ? void 0 : i.text, " ").concat(null == a ? void 0 : a.text)
                        }), I && (0, d.jsx)($.tt, (0, S._)((0, T._)({}, i), {
                            customClassName: ne.subtitle
                        })), x && (0, d.jsx)($.eN, (0, T._)((0, S._)((0, T._)({}, a), {
                            customClassName: ne.title
                        }), o && {
                            renderAs: "h1"
                        })), _ && (0, d.jsx)($.Ac, (0, S._)((0, T._)({}, t), {
                            customClassName: b ? ne.bodyLarge : ne.body,
                            renderAs: "div"
                        })), !!C && (0, d.jsx)(eA.i, {
                            "data-qa": "publish-date",
                            appearance: "body1",
                            color: "secondary",
                            className: "mt6-sm",
                            children: C
                        }), (null == p ? void 0 : p.length) ? (0, d.jsx)(ee.Z, {
                            actionButtons: p,
                            colorTheme: h,
                            analyticsItemId: n,
                            addTopSpacing: J(t.text, i.text, a.text)
                        }) : null]
                    })
                };
            nn.propTypes = {
                actionButtons: z.kK,
                analyticsItemId: h().string,
                backgroundColor: h().string,
                bodyProps: z.IJ,
                cardLinkCollectionId: h().string,
                cardLinkId: h().string,
                cardLinkMemberOnly: h().bool,
                cardLinkUrl: h().string,
                colorTheme: z.Pg,
                destinationType: h().string,
                openInNewTab: h().bool,
                originallyPublished: h().string,
                originallyPublishedTemplate: h().string,
                properties: z.Iv,
                subtitleProps: z.IJ,
                textLocation: z.oL,
                titleProps: z.IJ,
                withH1: h().bool
            };
            var na, ni = eh()(function() {
                    return Promise.all([n.e(259), n.e(356)]).then(n.bind(n, 70356)).then(function(e) {
                        return e.TeamSelector
                    })
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [70356]
                        }
                    }
                }),
                nr = function(e) {
                    return (0, d.jsx)(ni, (0, T._)({}, e))
                },
                no = n(76056),
                ns = {
                    fadeIn: "_2qSFnDhL",
                    fadeOut: "_3llywjmY"
                },
                nl = n(91107),
                nc = function(e) {
                    var t = e.carouselId,
                        n = e.title,
                        a = e.taxonomies,
                        i = e.clearance,
                        r = e.maxResults,
                        o = (0, v.v9)(N.wl.analyticsPageTypeSelector),
                        s = (0, v.v9)(N.wl.pageNameSelector),
                        l = (0, v.v9)(N.wl.pageDetailSelector),
                        c = {
                            experienceType: N.zn.SITE,
                            pageDetail: l,
                            pageName: s,
                            pageType: o
                        };
                    return (0, d.jsx)(nl.yx, {
                        endpoint: "".concat(w.gm, "/fragments/recommendations-carousel"),
                        carouselId: t,
                        options: {
                            includeClearance: i,
                            numberOfProducts: r,
                            taxonomyIds: a
                        },
                        title: null != n ? n : "",
                        analyticsConfig: c
                    })
                };
            nc.propTypes = {
                carouselId: h().string,
                clearance: h().bool,
                maxResults: h().number,
                taxonomies: h().arrayOf(h().string),
                title: h().string
            }, nc.defaultProps = {
                carouselId: "ciclp.main",
                clearance: !1
            };
            var nd = (na = tl, function(e) {
                    var t = e.isActive,
                        n = e.animationDelay,
                        a = e.observePropertyPath,
                        i = e.animateOnce,
                        r = (0, ea._)(e, ["isActive", "animationDelay", "observePropertyPath", "animateOnce"]),
                        o = (0, u.useRef)(r),
                        s = (0, u.useRef)(null),
                        l = (0, u.useState)(r),
                        c = l[0],
                        p = l[1],
                        m = (0, u.useState)(""),
                        h = m[0],
                        g = m[1];
                    return (0, u.useEffect)(function() {
                        var e, l, c = (e = o.current, Object.entries(r).reduce(function(t, n) {
                                var a = (0, tv._)(n, 2),
                                    i = a[0],
                                    r = a[1];
                                return (0, O.Z)(e[i], r) || (t[i] = [e[i], r]), t
                            }, {})),
                            d = Object.values(c).length > 0;
                        if (o.current = r, d) {
                            var u = (0, no.Z)(a, c);
                            if (t && u) {
                                if (clearTimeout(s.current), i && h === ns.fadeIn) {
                                    p(r);
                                    return
                                }
                                g(ns.fadeOut), setTimeout(function() {
                                    p(r)
                                }, 100), s.current = setTimeout(function() {
                                    g(ns.fadeIn)
                                }, n)
                            } else p(r)
                        }
                    }, [r, t]), (0, d.jsx)("div", {
                        className: h,
                        children: (0, d.jsx)(na, (0, T._)({}, c))
                    })
                }),
                nu = function(e) {
                    var t = e.fallbacks,
                        n = e.useFallback,
                        a = e.analyticsItemId,
                        i = e.canRunAnimation,
                        r = e.taxonomies,
                        o = e.topTrendingTitle,
                        s = e.clearance,
                        l = (0, ea._)(e, ["fallbacks", "useFallback", "analyticsItemId", "canRunAnimation", "taxonomies", "topTrendingTitle", "clearance"]),
                        c = (0, v.v9)(function(e) {
                            return N.wl.getFallbackDataSelector(e, t)
                        }, v.wU),
                        u = null == c ? void 0 : c.find(function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                t = e.slides;
                            return (void 0 === t ? [] : t).length >= U.Z.MIN_PRODUCT_LIST_LENGTH
                        });
                    if (n && !u) {
                        var p, m, h = null !== (m = null == l ? void 0 : null === (p = l.sectionHeadline) || void 0 === p ? void 0 : p.title) && void 0 !== m ? m : o;
                        return (0, d.jsx)(nc, {
                            carouselId: "ciclp.top-trending",
                            title: h,
                            clearance: s,
                            maxResults: l.maxResults,
                            taxonomies: r
                        })
                    }
                    return (0, d.jsx)(nd, (0, T._)({
                        animateOnce: !0,
                        isActive: i,
                        observePropertyPath: ["slides"],
                        animationDelay: 500,
                        analyticsItemId: a
                    }, n ? u : l))
                };
            nu.defaultProps = {
                clearance: !1,
                fallbacks: [],
                useFallback: !1
            }, nu.propTypes = (0, S._)((0, T._)({}, z.Kd), {
                analyticsItemId: h().string,
                canRunAnimation: h().bool,
                clearance: h().bool,
                fallbacks: h().array,
                taxonomies: h().arrayOf(h().string),
                topTrendingTitle: h().string,
                useFallback: h().bool
            });
            var np = eh()(function() {
                    return n.e(922).then(n.bind(n, 17922)).then(function(e) {
                        return e.FAQ
                    })
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [17922]
                        }
                    }
                }),
                nm = function(e) {
                    return (0, d.jsx)(np, (0, T._)({}, e))
                },
                nh = n(1837),
                ng = {
                    sizeChartContainer: "_24tWe8Zt",
                    sizeChartsTitle: "PVY81kJt",
                    sizeChartToggle: "f1z2nqX0"
                },
                nv = n(18403),
                nf = function(e) {
                    var t, n, a = (0, v.v9)(N.wl.measurementSelector, v.wU);
                    return (null === (t = e.sizeCharts) || void 0 === t ? void 0 : t.length) ? (0, d.jsx)("div", {
                        className: "fixed-fluid",
                        "data-analytics-placement-id": e.analyticsItemId,
                        children: null == e ? void 0 : null === (n = e.sizeCharts) || void 0 === n ? void 0 : n.map(function(t) {
                            var n, i, r, o, s = t.id,
                                l = t.data,
                                c = t.measurements;
                            return (0, d.jsx)("div", {
                                className: ng.sizeChartContainer,
                                children: (0, d.jsx)(nh.V, {
                                    className: ng.sizeChartsWrapper,
                                    caption: (n = e.title, c ? (0, d.jsxs)("div", {
                                        className: ng.sizeChartsTitle,
                                        children: [n, (0, d.jsx)(nv.E, {
                                            unitsType: c.systemToggle,
                                            values: c.values
                                        })]
                                    }) : n),
                                    data: (r = void 0 === l ? [
                                        []
                                    ] : l, o = c.systemToggle, r.filter(function(e) {
                                        return e.filter(function(e) {
                                            return !e.system || e.system === a[o]
                                        }).length > 0
                                    }))
                                })
                            }, s)
                        })
                    }) : null
                };
            nf.defaultProps = {
                sizeCharts: []
            }, nf.propTypes = {
                analyticsItemId: h().string,
                sizeCharts: h().arrayOf({
                    data: h().arrayOf(h().arrayOf(h().shape({
                        key: h().string,
                        value: h().string
                    }))),
                    id: h().string
                }),
                title: h().string
            };
            var ny = n(43374),
                n_ = {
                    withBody: "_3oDkXGqI",
                    h_center: "_2FEKfcY7",
                    pullQuoteCard: "Bu0K8swa",
                    body: "RhE1KLOf",
                    h_start: "qLrtpnfa",
                    h_end: "_2teAkNBQ",
                    textBody: "_1EwWkdph"
                },
                nb = function(e) {
                    var t = e.horizontal;
                    return n_["h_".concat("before" === t ? "start" : t)]
                },
                nx = function(e) {
                    var t = e.bodyProps,
                        n = e.analyticsItemId,
                        a = e.titleProps,
                        i = e.subtitleProps,
                        r = e.backgroundColor,
                        o = e.textLocation,
                        s = e.cardLinkId,
                        l = e.cardLinkUrl,
                        c = e.openInNewTab,
                        u = e.actionButtons,
                        p = e.cardLinkMemberOnly,
                        m = e.colorTheme,
                        h = e.destinationType,
                        g = e.cardLinkCollectionId,
                        v = !(0, eM.N)(null == t ? void 0 : t.text),
                        f = null == a ? void 0 : a.text;
                    return !f && v ? null : (0, d.jsxs)("div", {
                        "data-analytics-placement-id": n,
                        "data-analytics-has-landmark": "true",
                        className: (0, L.Z)([n_.pullQuoteCard, !v && n_.withBody, nb(null != o ? o : {}), ]),
                        "data-qa": "pull-quote-card",
                        style: {
                            backgroundColor: r
                        },
                        children: [s && (0, d.jsx)(K.Y, {
                            actionId: s,
                            destinationType: h,
                            analyticsItemId: n,
                            collectionId: g,
                            memberOnly: p,
                            destinationUrl: l,
                            openInNewTab: c,
                            tabbable: !(null == u ? void 0 : u.length),
                            ariaLabel: "".concat(null == i ? void 0 : i.text, " ").concat(null == a ? void 0 : a.text)
                        }), (0, d.jsx)(ny.N, {
                            headerText: f,
                            slots: {
                                TextSlot: (0, d.jsx)(eA.i, {
                                    "data-qa": "body",
                                    className: n_.textBody,
                                    Component: "div",
                                    appearance: "editorialBody1",
                                    dangerouslySetInnerHTML: (0, eM.K)(t.text)
                                })
                            }
                        }), (null == u ? void 0 : u.length) ? (0, d.jsx)(ee.Z, {
                            actionButtons: u,
                            colorTheme: m,
                            analyticsItemId: n,
                            addTopSpacing: J(t.text, i.text, a.text)
                        }) : null]
                    })
                };
            nx.propTypes = {
                actionButtons: z.kK,
                analyticsItemId: h().string,
                backgroundColor: h().string,
                bodyProps: z.IJ,
                cardLinkCollectionId: h().string,
                cardLinkId: h().string,
                cardLinkMemberOnly: h().bool,
                cardLinkUrl: h().string,
                colorTheme: z.Pg,
                destinationType: h().string,
                openInNewTab: h().bool,
                properties: z.Iv,
                subtitleProps: z.IJ,
                templateType: h().string,
                textLocation: z.oL,
                titleProps: z.IJ
            };
            var nT = function(e) {
                var t = e.templateType,
                    n = (0, ea._)(e, ["templateType"]);
                return t === N.Vq.PULL_QUOTE ? (0, d.jsx)(nx, (0, T._)({}, n)) : (0, d.jsx)(nn, (0, T._)({}, n))
            };
            nT.propTypes = {
                actionButtons: z.kK,
                analyticsItemId: h().string,
                backgroundColor: h().string,
                bodyProps: z.IJ,
                cardLinkCollectionId: h().string,
                cardLinkId: h().string,
                cardLinkMemberOnly: h().bool,
                cardLinkUrl: h().string,
                colorTheme: z.Pg,
                destinationType: h().string,
                openInNewTab: h().bool,
                properties: z.Iv,
                subtitleProps: z.IJ,
                templateType: h().string,
                textLocation: z.oL,
                titleProps: z.IJ
            };
            var nI = function(e) {
                var t = e.title,
                    n = e.subtitle,
                    a = e.maxResults,
                    i = (0, v.v9)(N.wl.analyticsPageTypeSelector),
                    r = (0, v.v9)(N.wl.pageNameSelector),
                    o = (0, v.v9)(N.wl.pageDetailSelector),
                    s = {
                        experienceType: N.zn.SITE,
                        pageDetail: o,
                        pageName: r,
                        pageType: i
                    };
                return (0, d.jsx)(nl.yx, {
                    analyticsConfig: s,
                    endpoint: "https://".concat("www.nike.com", "/fragments/dotcom-interests"),
                    title: t,
                    subtitle: n,
                    maxResults: a,
                    type: "carousel"
                })
            };
            nI.propTypes = {
                maxResults: h().number,
                subtitle: h().string,
                title: h().string
            };
            var nC = n(59972),
                nN = n(36826),
                nw = {
                    headline: "_1Pa2F-dr",
                    headlineText: "_3LM1E3Kq",
                    anchorPoint: "juyontBg",
                    gridContainer: "_1zp292L-"
                },
                nS = n(78311),
                nP = {
                    paginationContainer: "vT5eW3JB",
                    paginationItem: "_35DmvTUl",
                    visibleOnMobile: "_2SyoStyW",
                    paginationItemActive: "_3ROPJFM-",
                    paginationItemNext: "_3YbmEFtw",
                    paginationItemPrev: "_1on_G8A_"
                },
                nL = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
                        a = t.replace(/[?&]p=(\d+)/, function(e) {
                            return "?" === e[0] ? "?" : ""
                        }),
                        i = n ? "#".concat(n) : "";
                    return 1 === e ? "".concat(a).concat(i) : [a, a.match(/[\\?]/g) ? "&p=".concat(e) : "?p=".concat(e), i, ].join("")
                },
                nE = function(e, t) {
                    if (t <= 5) return (0, nS.Z)(1, t + 1);
                    var n = [t - e >= 2 ? 2 : 4 - t + e, e <= 2 ? 5 - e : 2, ],
                        a = e <= 2 ? 1 : e - n[0],
                        i = t - e >= 2 ? e + n[1] : t;
                    return (0, nS.Z)(a, i + 1)
                },
                nk = function(e) {
                    var t = e.totalPages,
                        n = e.pageNumber,
                        a = e.currentUrl,
                        i = e.anchor,
                        r = e.translations,
                        o = nE(n, t),
                        s = r.paginationNext,
                        l = r.paginationPrevious,
                        u = r.paginationCurrent,
                        p = r.paginationTitle,
                        m = r.paginationItem;
                    return (0, d.jsxs)("nav", {
                        className: nP.paginationContainer,
                        "data-qa": "pagination",
                        role: "navigation",
                        "aria-label": p,
                        children: [1 !== n && (0, d.jsx)("a", {
                            "data-qa-prev": !0,
                            "data-analytics-action-id": "pagination_".concat(n - 1),
                            href: nL(n - 1, a, i),
                            "aria-label": l,
                            className: (0, L.Z)([nP.paginationItem, nP.paginationItemPrev])
                        }), o.map(function(e) {
                            var r = null == m ? void 0 : m.replace("[pageNumber]", e);
                            return n === e ? (0, d.jsx)("span", {
                                "data-qa-current-page": e,
                                className: (0, L.Z)(nP.paginationItem, nP.paginationItemActive),
                                "aria-current": "true",
                                "aria-label": "".concat(u, ", ").concat(r),
                                children: e
                            }, e) : (0, d.jsx)("a", {
                                href: nL(e, a, i),
                                "data-analytics-action-id": "pagination_".concat(e),
                                className: (0, L.Z)(nP.paginationItem, (0, c._)({}, nP.visibleOnMobile, e === n + 1 || n === t && e === t - 1)),
                                "aria-label": r,
                                children: e
                            }, e)
                        }), n !== t && (0, d.jsx)("a", {
                            "data-qa-next": !0,
                            "aria-label": s,
                            "data-analytics-action-id": "pagination_".concat(n + 1),
                            href: nL(n + 1, a, i),
                            className: (0, L.Z)([nP.paginationItem, nP.paginationItemNext])
                        })]
                    })
                };
            nk.propTypes = (0, S._)((0, T._)({}, z.uk), {
                currentUrl: h().string
            }), nk.defaultProps = {
                translations: {
                    paginationCurrent: "Current Page",
                    paginationItem: "Page [pageNumber]",
                    paginationNext: "Next Page",
                    paginationPrevious: "Previous Page",
                    paginationTitle: "Pagination Navigation"
                }
            };
            var nO = function(e) {
                var t = (0, v.v9)(N.wl.urlSelector);
                return (0, d.jsx)(nk, (0, S._)((0, T._)({}, e), {
                    currentUrl: t
                }))
            };
            nO.propTypes = z.uk;
            var nj = function(e) {
                var t = e.featuredCard,
                    n = e.slides,
                    a = void 0 === n ? [] : n,
                    i = e.sectionHeadline,
                    r = e.analyticsItemId,
                    o = e.pagination,
                    s = e.translations;
                return (a.length >= 3 || (null == o ? void 0 : o.totalPages) > 1) && (0, d.jsxs)("div", {
                    "data-qa": "dynamic-grid",
                    children: [(null == o ? void 0 : o.totalPages) !== 1 && (0, d.jsx)("div", {
                        className: nw.anchorPoint,
                        id: "content-grid-".concat(r)
                    }), !!i && (0, d.jsx)(eE.Z, (0, S._)((0, T._)({}, i), {
                        analyticsItemId: "".concat(r, "_0"),
                        containerClassName: nw.headline,
                        className: nw.headlineText
                    })), !!t && (0, d.jsx)(eQ, (0, S._)((0, T._)({}, t), {
                        analyticsItemId: "".concat(r, "_1")
                    })), (0, d.jsx)(nC.rj, {
                        xs: {
                            columnGap: "0px",
                            rowGap: "60px"
                        },
                        s: {
                            columnGap: "16px",
                            rowGap: "84px"
                        },
                        m: {
                            columnGap: "16px"
                        },
                        className: nw.gridContainer,
                        children: null == a ? void 0 : a.map(function(e, n) {
                            return (0, d.jsx)(nN.P, {
                                xs: 12,
                                s: 6,
                                m: 4,
                                children: (0, d.jsx)(eG, (0, S._)((0, T._)({}, e), {
                                    analyticsItemId: "".concat(r, "_").concat(n + (t ? 2 : 1))
                                }))
                            }, e.id)
                        })
                    }), (null == o ? void 0 : o.totalPages) !== 1 && (0, d.jsx)(nO, (0, S._)((0, T._)({}, o), {
                        anchor: "content-grid-".concat(r),
                        translations: s
                    }))]
                })
            };
            nj.defaultProps = {
                pagination: {
                    pageNumber: 1,
                    totalPages: 1
                },
                slides: [],
                translations: {}
            }, nj.propTypes = {
                analyticsItemId: h().string,
                featuredCard: z.zA,
                pagination: h().shape(z.uk),
                sectionHeadline: z.qJ,
                slides: h().arrayOf(h().shape(z.zA)),
                translations: h().shape({})
            };
            var nA = n(78019),
                nR = {
                    titleWrapper: "_2qCwjCQM",
                    withLogo: "_2r2Hfyxb",
                    greyLabel: "_2fUH2xeV",
                    byline: "Z-Cl-H0g",
                    title: "e3YNGUB1",
                    noGlyphSubtitle: "_1lehZUNp",
                    metadataWrapper: "_3XGAJo1_",
                    metadataLine: "_1i23qN_3",
                    metadata: "_31XKa7CV"
                },
                nU = {
                    logo: "oa4DFxqK",
                    extra_small: "_1Iq5Mpwl",
                    medium: "_2l0ZX4Ce",
                    small: "_1N7zdUVc",
                    large: "_36oEIg41",
                    extra_large: "vEQyAURA",
                    wrapper: "_2t2CIz2f"
                },
                nM = "https://".concat("www.nike.com", "/static/icons/logos/"),
                nB = function(e, t) {
                    var n;
                    return "".concat(t ? "-" : "").concat(e.toLowerCase())
                },
                nZ = function(e) {
                    var t, n = e.glyph,
                        a = e.size,
                        i = e.title;
                    return (0, d.jsx)("h1", {
                        className: (0, L.Z)(["mb3-md", "mb1-sm", nU.wrapper]),
                        children: (0, d.jsx)("img", {
                            src: "".concat(nM).concat(n.replace(/[A-Z]/g, nB), ".svg"),
                            className: (0, L.Z)([nU.logo, nU[a] || nU.medium]),
                            alt: i
                        })
                    })
                };
            nZ.propTypes = {
                glyph: h().string.isRequired,
                size: h().string,
                title: h().string
            };
            var nH = function(e) {
                var t = e.authors,
                    n = e.lastUpdated,
                    a = e.lastUpdatedTemplate,
                    i = e.lastUpdatedStamp,
                    r = e.readTime,
                    o = e.readTimeTemplate,
                    s = !!(t && t.roleTitle),
                    l = !!n && (null == a ? void 0 : a.replace("[date]", n)),
                    c = !!r && (null == o ? void 0 : o.replace("[durationInMinutes]", r));
                return (0, d.jsxs)(d.Fragment, {
                    children: [(!!n || !!r) && (0, d.jsx)("div", {
                        className: nR.metadataWrapper,
                        children: (0, d.jsxs)(eA.i, {
                            Component: "div",
                            appearance: "body1",
                            color: "secondary",
                            className: (0, L.Z)("mt6-sm", nR.metadataLine),
                            children: [!!l && (0, d.jsxs)("div", {
                                className: nR.metadata,
                                "data-qa": "lastUpdated",
                                children: [l, (0, d.jsx)("meta", {
                                    itemProp: "dateModified",
                                    content: i
                                })]
                            }), c && (0, d.jsx)("div", {
                                className: nR.metadata,
                                "data-qa": "readTime",
                                children: c
                            })]
                        })
                    }), s && (0, d.jsx)(eA.i, {
                        "data-qa": "authors",
                        Component: "div",
                        appearance: "body1",
                        className: (0, L.Z)("mt6-sm", nR.byline),
                        children: "".concat(t.roleTitle, ": ").concat(t.profiles.map(function(e) {
                            return e.fullName
                        }).join(", "))
                    })]
                })
            };

            function nD() {
                var e = (0, t_._)(["\n    margin-top: var(--podium-cds-size-spacing-xxl);\n    margin-bottom: var(--podium-cds-size-spacing-", ");\n    @media only screen and (min-width: ", ") {\n      margin-top: var(--podium-cds-size-spacing-xxxl);\n    }\n  "]);
                return nD = function() {
                    return e
                }, e
            }
            nH.propTypes = {
                authors: h().shape({
                    profiles: h().arrayOf(h().shape({
                        fullName: h().string
                    })),
                    roleTitle: h().string
                }),
                lastUpdated: h().string,
                lastUpdatedStamp: h().string,
                lastUpdatedTemplate: h().string,
                readTime: h().number,
                readTimeTemplate: h().string
            };
            var nq = nA.A.podiumCdsBreakpointM,
                nW = function(e) {
                    var t = e.bottomMargin;
                    return (0, tb.css)(nD(), t, nq)
                },
                nF = tt().div(nW),
                nz = function(e) {
                    var t = e.title,
                        n = e.glyph,
                        a = e.glyphSize,
                        i = e.isArticle,
                        r = e.lastUpdated,
                        o = e.lastUpdatedStamp,
                        s = e.lastUpdatedTemplate,
                        l = e.readTime,
                        u = e.readTimeTemplate,
                        p = e.subTitle,
                        m = e.body,
                        h = e.bottomMargin,
                        g = e.withH1,
                        v = e.authors;
                    return (0, d.jsxs)(nF, (0, S._)((0, T._)({
                        bottomMargin: h,
                        className: (0, L.Z)(nR.titleWrapper, (0, c._)({}, nR.withLogo, !!n)),
                        "data-container": "title"
                    }, i ? {
                        itemScope: !0,
                        itemType: "https://schema.org/Article"
                    } : {}), {
                        children: [n ? (0, d.jsx)(nZ, {
                            glyph: n,
                            size: a,
                            title: t
                        }) : (0, d.jsx)(eA.i, {
                            "data-qa": "title",
                            itemProp: "headline",
                            className: nR.title,
                            Component: g ? "h1" : "div",
                            appearance: "title2",
                            children: t
                        }), !!p && (0, d.jsx)(eA.i, {
                            Component: "h5",
                            appearance: n ? "title4" : "body1",
                            "data-qa": "subtitle",
                            className: (0, L.Z)((0, c._)({
                                "pb1-sm": !!n
                            }, nR.noGlyphSubtitle, !n)),
                            color: !n && "secondary",
                            children: p
                        }), !!m && (0, d.jsx)(eA.i, {
                            appearance: i ? "editorialBody1" : "body1",
                            className: "mt6-sm",
                            children: m
                        }), i && (0, d.jsx)(nH, {
                            authors: v,
                            lastUpdated: r,
                            lastUpdatedStamp: o,
                            lastUpdatedTemplate: s,
                            readTime: l,
                            readTimeTemplate: u
                        })]
                    }))
                };
            nz.propTypes = {
                authors: h().shape({
                    profiles: h().array,
                    roleTitle: h().string
                }),
                body: h().string,
                bottomMargin: z.E0,
                glyph: h().string,
                glyphSize: h().string,
                isArticle: h().bool,
                lastUpdated: h().string,
                lastUpdatedStamp: h().string,
                lastUpdatedTemplate: h().string,
                readTime: h().number,
                readTimeTemplate: h().string,
                subTitle: h().string,
                title: h().string.isRequired,
                withH1: h().bool
            }, nz.defaultProps = {
                bottomMargin: "xl",
                isArticle: !1,
                withH1: !1
            };
            var nV = {
                    metaBoxWrapper: "_21lZEGh_",
                    column: "_1hrwE08l",
                    columnTitle: "_3vyfXFd_",
                    columnContent: "AdvY6tGR"
                },
                nG = n(83336),
                nK = function(e) {
                    var t = e.title,
                        n = e.children;
                    return (0, d.jsxs)("div", {
                        className: nV.column,
                        children: [(0, d.jsx)("div", {
                            className: (0, L.Z)(nV.columnTitle, "body-3"),
                            children: t
                        }), (0, d.jsx)("div", {
                            className: nV.columnContent,
                            children: n
                        })]
                    })
                };
            nK.propTypes = {
                children: h().node || h().string,
                title: h().string
            };
            var nQ = function(e) {
                var t = e.cardId,
                    n = e.timeRequired,
                    a = e.estimatedCost;
                return (0, d.jsxs)("div", {
                    className: nV.metaBoxWrapper,
                    id: t,
                    children: [(0, d.jsx)(nK, {
                        title: null == n ? void 0 : n.title,
                        children: null == n ? void 0 : n.value
                    }), a && (0, d.jsx)(nK, {
                        title: a.title,
                        children: (0, d.jsx)(nG.t, {
                            listPrice: a.value
                        })
                    })]
                })
            };
            nQ.propTypes = {
                cardId: h().string,
                estimatedCost: h().shape({
                    title: h().string,
                    value: h().any
                }),
                timeRequired: h().shape({
                    title: h().string,
                    value: h().any
                })
            };
            var nJ = {
                    sectionWrapper: "_3O5PYlXy",
                    listTitle: "_2Af_b8vF",
                    listWrapper: "_1AHRxeiN",
                    itemsList: "_30v3FivE",
                    listItem: "_1KZs4nbG",
                    listLink: "_1QGvOJCN"
                },
                nY = function(e) {
                    var t = e.title,
                        n = e.list;
                    return (0, d.jsxs)("div", {
                        className: nJ.listWrapper,
                        children: [(0, d.jsx)($.eN, {
                            customClassName: nJ.listTitle,
                            fontFamily: "base",
                            fontSize: "large",
                            renderAs: "h4",
                            text: t
                        }), (0, d.jsx)("ul", {
                            className: nJ.itemsList,
                            children: (void 0 === n ? [] : n).map(function(e) {
                                var t, n = e.url,
                                    a = e.text,
                                    i = e.openInNewTab,
                                    r = e.analyticActionId,
                                    o = e.id;
                                return (0, d.jsx)("li", {
                                    className: (0, L.Z)(nJ.listItem, "responsive-body-2-1"),
                                    children: n ? (0, d.jsx)(tp.Z, {
                                        "data-analytics-action-id": r,
                                        className: nJ.listLink,
                                        href: n,
                                        "aria-label": "Visit ".concat(n),
                                        target: i ? "_blank" : "_self",
                                        children: a
                                    }) : a
                                }, o)
                            })
                        })]
                    })
                };
            nY.propTypes = {
                list: h().arrayOf(h().shape({
                    analyticActionId: h().string,
                    id: h().string,
                    openInNewTab: h().bool,
                    text: h().string,
                    url: h().string
                })),
                title: h().string
            };
            var nX = function(e) {
                var t = e.tools,
                    n = e.supplies,
                    a = e.toolsLabel,
                    i = e.suppliesLabel,
                    r = e.analyticsItemId;
                return (null == n ? void 0 : n.length) || (null == t ? void 0 : t.length) ? (0, d.jsxs)("div", {
                    className: (0, L.Z)([nJ.sectionWrapper]),
                    "data-analytics-placement-id": r,
                    "data-analytics-has-landmark": "true",
                    children: [!!(null == n ? void 0 : n.length) && (0, d.jsx)(nY, {
                        list: n,
                        title: i
                    }), !!(null == t ? void 0 : t.length) && (0, d.jsx)(nY, {
                        list: t,
                        title: a
                    })]
                }) : null
            };
            nX.propTypes = {
                analyticsItemId: h().string,
                supplies: h().array,
                suppliesLabel: h().string,
                tools: h().array,
                toolsLabel: h().string
            };
            var n$ = n(50021),
                n0 = {
                    listicle: "_2VNONXQW",
                    listicleItem: "_25TM0El4",
                    listicleItemContent: "_2IF7kUxC",
                    isTextCard: "w6YXNlhh",
                    counter: "_2hC0XS4a",
                    isImage: "_3B33jJka"
                },
                n1 = function(e) {
                    var t = e.slides,
                        n = e.analyticsItemId,
                        a = e.sectionHeadline,
                        i = (0, n$.Z)(function(e, t) {
                            return !t.isListicleHeadline
                        }, t),
                        r = 0;
                    return (0, d.jsxs)(d.Fragment, {
                        children: [(0, d.jsx)(eE.Z, (0, S._)((0, T._)({}, a), {
                            analyticsItemId: "".concat(n, "_0"),
                            className: "headline-2"
                        })), (0, d.jsx)("ol", {
                            className: n0.listicle,
                            children: i.map(function(e) {
                                var t = (0, tv._)(e, 1)[0];
                                return (0, d.jsx)("li", {
                                    className: n0.listicleItem,
                                    children: e.map(function(e) {
                                        var t;
                                        return (0, d.jsx)("div", {
                                            className: (0, L.Z)(n0.listicleItemContent, (t = {}, (0, c._)(t, n0.isTextCard, e.containerType === N.QU.TEXT), (0, c._)(t, n0.isImage, e.containerType === N.QU.IMAGE), t)),
                                            children: e.isListicleHeadline ? (0, d.jsxs)("h3", {
                                                className: "headline-3",
                                                children: [(0, d.jsxs)("span", {
                                                    className: n0.counter,
                                                    children: [e.counter, "."]
                                                }), e.title]
                                            }) : (0, d.jsx)(aa, {
                                                cardId: e.id,
                                                cardData: e,
                                                analyticsItemId: "".concat(n, "_").concat(++r)
                                            })
                                        }, e.id)
                                    })
                                }, t.id)
                            })
                        })]
                    })
                };
            n1.propTypes = {
                analyticsItemId: h().string,
                sectionHeadline: z.qJ,
                slides: h().arrayOf(h().oneOf([h().shape({
                    counter: h().number.isRequired,
                    id: h().string.isRequired,
                    isListicleHeadline: h().bool.isRequired,
                    title: h().string.isRequired
                }), h().shape(z.zA), ]).isRequired)
            };
            var n2 = n(40903),
                n3 = n(94721),
                n6 = {
                    soldOutContainer: "_2awfxlgT"
                },
                n5 = function(e) {
                    var t = e.analyticsItemId,
                        n = e.statusText,
                        a = e.isSoldOut,
                        i = (0, ea._)(e, ["analyticsItemId", "statusText", "isSoldOut"]);
                    return (0, d.jsx)("div", {
                        "data-qa": "product-snkrs-slide",
                        "data-analytics-placement-id": t,
                        "data-analytics-has-landmark": "true",
                        children: (0, d.jsx)(e3, (0, T._)({
                            detailsClass: (0, L.Z)(a && n6.soldOutContainer),
                            textBadge: n
                        }, i))
                    })
                };
            n5.propTypes = (0, S._)((0, T._)({}, z.MF), {
                isSoldOut: h().bool,
                statusText: h().string
            });
            var n4 = (o = {}, (0, c._)(o, N.wB.IN_STOCK, "slides"), (0, c._)(o, N.wB.UPCOMING, "slidesUpcoming"), o),
                n8 = function(e) {
                    var t, n = (0, u.useState)(N.wB.IN_STOCK),
                        a = n[0],
                        i = n[1],
                        r = (0, v.I0)();
                    (0, u.useEffect)(function() {
                        r(N.Nw.impressionObserverActions.init())
                    }, [a, r]);
                    var o = (null === (t = e.slidesUpcoming) || void 0 === t ? void 0 : t.length) > 0,
                        s = function(e, t) {
                            i(t)
                        },
                        l = o ? N.qR[a] : void 0,
                        c = o ? (0, d.jsxs)(n2.m, {
                            onClick: s,
                            name: "snkrs-switch",
                            a11ySwitchDescription: e.labels.snkrs_drops_a11y_switch_desc,
                            children: [(0, d.jsx)(n3.O, {
                                id: N.wB.IN_STOCK,
                                value: N.wB.IN_STOCK,
                                label: e.labels.in_stock
                            }), (0, d.jsx)(n3.O, {
                                id: N.wB.UPCOMING,
                                value: N.wB.UPCOMING,
                                label: e.labels.upcoming
                            })]
                        }) : null;
                    return (0, d.jsx)(tl, (0, S._)((0, T._)({
                        SlideComponent: n5
                    }, e), {
                        ToggleComponent: c,
                        slides: e[n4[a]],
                        placementGroupIndex: l,
                        activeSnkrsTab: a
                    }))
                };
            n8.propTypes = (0, S._)((0, T._)({}, z.Kd), {
                analyticsItemId: h().string,
                localeForCurrency: h().string
            }), n8.defaultProps = {
                slides: [],
                slidesUpcoming: []
            };
            var n7 = eh()(function() {
                    return Promise.all([n.e(787), n.e(705)]).then(n.bind(n, 84705)).then(function(e) {
                        return e.BraSizeFinder
                    })
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [84705]
                        }
                    }
                }),
                n9 = function(e) {
                    var t = e.slides,
                        n = e.urls,
                        a = e.sectionHeadline,
                        i = e.translations,
                        r = e.analyticsItemId,
                        o = e.countryCode,
                        s = (0, v.v9)(N.wl.measurementSelector, v.wU);
                    return (0, d.jsx)(n7, {
                        slides: t,
                        urls: n,
                        title: null == a ? void 0 : a.title,
                        subtitle: null == a ? void 0 : a.subtitle,
                        translations: void 0 === i ? {} : i,
                        selectedUnits: null == s ? void 0 : s[w.bx],
                        analyticsItemId: r,
                        countryCode: o
                    })
                };
            n9.propTypes = {
                analyticsItemId: h().string,
                countryCode: h().string,
                sectionHeadline: h().shape({
                    subtitle: h().string,
                    title: h().string
                }),
                slides: h().arrayOf(h().shape({
                    subtitleProps: h().shape({
                        text: h().string
                    }),
                    titleProps: h().shape({
                        text: h().string
                    })
                })),
                translations: h().shape({
                    bra_size_finder_alpha_caption: h().string,
                    bra_size_finder_hybrid_caption: h().string,
                    bra_size_finder_restart: h().string,
                    bra_size_finder_shop_link: h().string,
                    bra_size_finder_underbust_input_caption: h().string,
                    next: h().string,
                    units_cm: h().string,
                    units_inch: h().string
                }),
                urls: h().objectOf(h().string)
            };
            var ae = n(52249),
                at = function(e) {
                    (0, x._)(n, e);
                    var t = (0, I._)(n);

                    function n(e) {
                        var a;
                        return (0, _._)(this, n), (a = t.call(this, e)).state = {
                            hasError: !1
                        }, a
                    }
                    return (0, b._)(n, [{
                        key: "componentDidCatch",
                        value: function(e, t) {
                            ae.ZP.warn({
                                details: {
                                    componentStack: t.componentStack,
                                    errorStack: e.stack
                                },
                                message: e.message,
                                name: "[CLP]: Component is broken during rendering"
                            })
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.props.children;
                            return this.state.hasError ? null : (0, d.jsx)(d.Fragment, {
                                children: e
                            })
                        }
                    }], [{
                        key: "getDerivedStateFromError",
                        value: function() {
                            return {
                                hasError: !0
                            }
                        }
                    }]), n
                }(p().Component);
            at.propTypes = {
                children: (0, m.oneOfType)([(0, m.arrayOf)(m.node), m.node]).isRequired
            };
            var an = (s = {}, (0, c._)(s, N.QU.IMAGE, en), (0, c._)(s, N.QU.VIDEO, ep), (0, c._)(s, N.QU.TEXT, nT), (0, c._)(s, N.QU.SECTION_HEADLINE, eE.Z), (0, c._)(s, N.QU.TITLE, nz), (0, c._)(s, N.QU.EXTERNAL_COLLECTION, tl), (0, c._)(s, N.QU.PRODUCT_RECOMMENDER, nu), (0, c._)(s, N.QU.PRODUCT_RECOMMENDER_TAXONOMY, nu), (0, c._)(s, N.QU.SNKRS_DROPS, n8), (0, c._)(s, N.QU.MERCH_MENU, th), (0, c._)(s, N.QU.LOCAL_NAV, t9), (0, c._)(s, N.QU.SLIDESHOW, ev), (0, c._)(s, N.QU.RELATED_FILMSTRIP, eW), (0, c._)(s, N.QU.DYNAMIC_RELATED_FILMSTRIP, eW), (0, c._)(s, N.QU.FILMSTRIP, ek), (0, c._)(s, N.QU.DYNAMIC_CAROUSEL, eX), (0, c._)(s, N.QU.DYNAMIC_GRID, nj), (0, c._)(s, N.QU.TEAM_SELECTOR, nr), (0, c._)(s, N.QU.PRODUCT_WALL, tl), (0, c._)(s, N.QU.SIZE_CHARTS, nf), (0, c._)(s, N.QU.ARTICLE_FOOTER, nn), (0, c._)(s, N.QU.FAQ, nm), (0, c._)(s, N.QU.LISTICLE, n1), (0, c._)(s, N.QU.META_BOX, nQ), (0, c._)(s, N.QU.TOOLS_AND_SUPPLIES, nX), (0, c._)(s, N.QU.BRA_SIZE_FINDER, n9), (0, c._)(s, N.QU.INTERESTS, nI), s),
                aa = function(e) {
                    var t = e.analyticsItemId,
                        n = e.cardData,
                        a = e.withH1,
                        i = e.cardId,
                        r = (0, v.v9)(function(e) {
                            return N.wl.getCardDataSelector(e, i)
                        }, v.wU),
                        o = n || r,
                        s = an[o.containerType];
                    return s ? (0, d.jsx)(at, {
                        children: (0, d.jsx)(s, (0, S._)((0, T._)({
                            className: "card"
                        }, o), {
                            analyticsItemId: t,
                            withH1: a,
                            cardId: i,
                            customClass: (0, L.Z)(o.imageHeight && eI.Z[o.imageHeight])
                        }))
                    }) : (0, d.jsx)("div", {
                        "data-qa": "card"
                    })
                };
            aa.propTypes = {
                analyticsItemId: h().string.isRequired,
                cardData: h().shape({
                    containerType: z.tP.isRequired,
                    imageHeight: z.ZB
                }),
                cardId: h().string.isRequired,
                withH1: h().bool
            };
            var ai = {
                    fourUp: "_1ViJ0HGj",
                    card: "_3GGi_opV"
                },
                ar = function(e) {
                    return (0, d.jsx)("div", {
                        className: ai.card,
                        children: (0, d.jsx)(aa, {
                            analyticsItemId: e.id,
                            cardId: e.data,
                            withH1: e.withH1
                        }, e.id)
                    })
                },
                ao = function(e) {
                    var t = e.blocks;
                    return (0, d.jsxs)("div", {
                        className: ai.fourUp,
                        children: [t[0] && ar(t[0]), t[2] && ar(t[2]), t[1] && ar(t[1]), t[3] && ar(t[3])]
                    })
                };
            ao.propTypes = {
                blocks: h().arrayOf(h().shape({
                    data: h().string,
                    id: h().string
                })).isRequired
            };
            var as = function(e, t) {
                    return {
                        blocks: Z(e, {
                            itemId: t.parentId
                        })
                    }
                },
                al = (0, v.$j)(as, null, null, {
                    areStatesEqual: O.Z
                })(ao),
                ac = n(24228),
                ad = {
                    grid: "Z25uR9U5",
                    gridFreeContainer: "_2IK2ad9n",
                    hideSmall: "_1WKaQgke",
                    hideMedium: "_1gYnKOgX",
                    hideLarge: "_2OZV8M5x",
                    isEmpty: "yttdzVno",
                    localNavigationContainer: "_3cz-03q-",
                    teamSelectorContainer: "I6h42sZM ncss-container",
                    sizeChartsContainer: "_37dDqBwg"
                },
                au = function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    if (!e) throw Error("Unexpected invalid parameters.");
                    return function(a) {
                        if (!a) throw Error("Unexpected invalid parameters.");
                        var i = e[a];
                        if (!i) throw Error("Unexpected child item data not found error.");
                        switch (i.mode) {
                            case "row":
                                return (0, d.jsx)(ah, {
                                    data: (0, T._)({}, i, n),
                                    childrenData: e
                                }, a);
                            case "col":
                                return (0, d.jsx)(ap, {
                                    data: (0, T._)({}, i, n),
                                    childrenData: e
                                }, a);
                            case "block":
                                return !i.data && t && t("No card id for layout item", {
                                    itemId: i.id
                                }), i.data ? (0, d.jsx)(aa, {
                                    analyticsItemId: i.id,
                                    cardId: i.data,
                                    withH1: i.withH1
                                }, a) : null;
                            default:
                                throw Error("Unexpected grid element mode")
                        }
                    }
                },
                ap = function(e) {
                    var t = e.data,
                        n = e.childrenData;
                    return (0, d.jsx)("div", {
                        id: t.id,
                        "data-qa": "grid-col",
                        className: (0, L.Z)(["grid-col", "va-sm-t", "ncss-col-lg-".concat(t.span.large), "ncss-col-md-".concat(t.span.medium), "ncss-col-sm-".concat(t.span.small), "ncss-col-lg-offset-".concat(t.offset.large), "ncss-col-md-offset-".concat(t.offset.medium), "ncss-col-sm-offset-".concat(t.offset.small), ]),
                        children: t.items.map(au(n))
                    })
                };
            ap.propTypes = {
                childrenData: h().any,
                data: h().shape({
                    gutter: h().bool,
                    id: h().string.isRequired,
                    items: h().arrayOf(h().string).isRequired,
                    mode: h().oneOf(["col"]).isRequired,
                    offset: h().shape({
                        large: h().number.isRequired,
                        medium: h().number.isRequired,
                        small: h().number.isRequired
                    }).isRequired,
                    span: h().shape({
                        large: h().number.isRequired,
                        medium: h().number.isRequired,
                        small: h().number.isRequired
                    }).isRequired
                }).isRequired,
                position: h().shape({
                    large: h().oneOfType([h().number, h().bool]),
                    medium: h().oneOfType([h().number, h().bool]),
                    small: h().oneOfType([h().number, h().bool])
                })
            };
            var am = function(e, t, n, a) {
                    if (!e || !t || !e.items || 2 !== e.items.length) return !1;
                    var i, r, o, s, l = t[e.items[0]],
                        c = t[e.items[1]],
                        d = null !== (o = null == l ? void 0 : null === (i = l.items) || void 0 === i ? void 0 : i.length) && void 0 !== o ? o : 0,
                        u = null !== (s = null == c ? void 0 : null === (r = c.items) || void 0 === r ? void 0 : r.length) && void 0 !== s ? s : 0;
                    return d === n && u === a
                },
                ah = function(e) {
                    var t = e.data,
                        n = e.data.attributes.gutter,
                        a = e.childrenData;
                    return (0, d.jsx)("div", {
                        id: t.id,
                        "data-qa": "grid-row",
                        className: (0, L.Z)(["ncss-row", "grid-row", {
                            "mt4-sm": t.attributes.gutter && t.topMargin
                        }, {
                            triptych: am(t, a, 1, 2)
                        }, {
                            fourUp: am(t, a, 2, 2)
                        }, n ? "" : "withDisabledGutter", ]),
                        children: am(t, a, 2, 2) ? (0, d.jsx)(al, {
                            parentId: t.id
                        }) : t.items.map(au(a, void 0, {
                            gutter: n
                        }))
                    })
                };
            ah.propTypes = {
                childrenData: h().any,
                data: h().shape({
                    attributes: h().shape({
                        gutter: h().bool.isRequired,
                        header: h().bool
                    }).isRequired,
                    id: h().string.isRequired,
                    items: h().arrayOf(h().string).isRequired,
                    mode: h().oneOf(["row"]).isRequired,
                    topMargin: h().bool
                }).isRequired,
                position: h().shape({
                    large: h().oneOfType([h().number, h().bool]),
                    medium: h().oneOfType([h().number, h().bool]),
                    small: h().oneOfType([h().number, h().bool])
                })
            };
            var ag = function(e) {
                    var t, n, a = (t = {}, (0, c._)(t, N.QU.LOCAL_NAV, ad.localNavigationContainer), (0, c._)(t, N.QU.TEAM_SELECTOR, ad.teamSelectorContainer), (0, c._)(t, N.QU.SIZE_CHARTS, ad.sizeChartsContainer), t);
                    return null !== (n = null == a ? void 0 : a[e]) && void 0 !== n ? n : ""
                },
                av = function(e) {
                    var t, a, i, r, o, s, l = e.itemId,
                        u = e.gridData,
                        p = e.childrenData,
                        m = e.isEmpty,
                        h = e.hasScrollableContent,
                        g = e.containerType,
                        v = e.marginTop,
                        f = e.dispatchError,
                        y = (0, ac.j)(null === (t = n.g.webShellClient) || void 0 === t ? void 0 : t.identity.getIsLoggedIn);
                    if (u.renderCondition) {
                        var _ = u.renderCondition.loggedIn || u.renderCondition.fallback,
                            b = u.renderCondition.loggedOut || u.renderCondition.fallback;
                        if (!y && !b || y && !_) return null
                    }
                    var x = function(e, t) {
                        f({
                            details: t,
                            message: e,
                            name: "Grid rendering error"
                        })
                    };
                    return (0, d.jsx)("div", (0, S._)((0, T._)({
                        id: l,
                        "data-qa": "grid",
                        "data-container-type": g,
                        "data-fluid-grid": u.attributes.fluid,
                        className: (0, L.Z)(["grid", ad.grid, "".concat(u.attributes.fluid ? "" : "fixed-", "fluid"), ag(g), (s = {
                            "ncss-container": !h
                        }, (0, c._)(s, ad.gridFreeContainer, h), (0, c._)(s, ad.hideLarge, !u.display.large), (0, c._)(s, ad.hideMedium, !u.display.medium), (0, c._)(s, ad.hideSmall, !u.display.small), (0, c._)(s, ad.isEmpty, m), s), (0, k.Z)(Number, null === (a = u.attributes.margin) || void 0 === a ? void 0 : null === (i = a.top) || void 0 === i ? void 0 : i.mobile) && (0, E.iv)({
                            "@media (max-width: 639px)": {
                                marginTop: v || u.attributes.margin.top.mobile
                            },
                            marginTop: u.attributes.margin.top.mobile
                        }), (0, k.Z)(Number, null === (r = u.attributes.margin) || void 0 === r ? void 0 : null === (o = r.top) || void 0 === o ? void 0 : o.desktop) && (0, E.iv)({
                            "@media (min-width: 640px)": {
                                marginTop: u.attributes.margin.top.desktop
                            }
                        }), ]),
                        style: {
                            position: "relative"
                        }
                    }, {}), {
                        children: u.items.map(au(p, x))
                    }))
                };
            av.propTypes = {
                childrenData: h().any,
                containMoreThanOneChildInRow: h().bool,
                containerType: h().oneOf((0, P._)(Object.values(N.QU)).concat(["empty"])),
                dispatchError: h().func,
                gridData: h().shape({
                    attributes: h().shape({
                        fluid: h().bool.isRequired,
                        margin: h().shape({
                            top: h().shape({
                                desktop: h().number,
                                mobile: h().number
                            })
                        })
                    }).isRequired,
                    display: h().shape({
                        large: h().bool.isRequired,
                        medium: h().bool.isRequired,
                        small: h().bool.isRequired
                    }).isRequired,
                    id: h().string.isRequired,
                    items: h().arrayOf(h().string).isRequired,
                    mode: h().oneOf(["grid"]).isRequired,
                    position: h().shape({
                        large: h().oneOfType([h().number, h().bool]),
                        medium: h().oneOfType([h().number, h().bool]),
                        small: h().oneOfType([h().number, h().bool])
                    }),
                    renderCondition: h().shape({
                        fallback: h().bool,
                        loggedIn: h().bool,
                        loggedOut: h().bool
                    })
                }).isRequired,
                hasScrollableContent: h().bool,
                isEmpty: h().bool,
                itemId: h().string.isRequired,
                marginTop: h().number
            }, av.defaultProps = {
                hasScrollableContent: !1
            };
            var af = function(e, t) {
                    return {
                        childrenData: B(e, t),
                        containerType: q(e, t),
                        gridData: N.wl.layoutItemSelector(e, t),
                        hasScrollableContent: N.wl.hasGridScrollableContentSelector(e, t),
                        isEmpty: D(e, t)
                    }
                },
                ay = {
                    dispatchError: N.Nw.logActions.warn
                },
                a_ = (0, v.$j)(af, ay, null, {
                    areStatePropsEqual: O.Z
                })(av),
                ab = function(e) {
                    var t = e.layoutData;
                    return (0, d.jsx)(p().Fragment, {
                        children: t.items.map(function(e) {
                            return (0, d.jsx)(a_, {
                                itemId: e
                            }, e)
                        })
                    })
                };
            ab.propTypes = {
                layoutData: h().shape({
                    id: h().string.isRequired,
                    items: h().arrayOf(h().string).isRequired
                }).isRequired
            };
            var ax = function(e, t) {
                    return {
                        layoutData: N.wl.currentLayoutSelector(e, t)
                    }
                },
                aT = (0, v.$j)(ax)(ab),
                aI = function() {
                    return (0, d.jsx)(aT, {})
                },
                aC = {
                    errorLayout: "_1aWPUELV",
                    mainMessage: "_19KH5nJO"
                },
                aN = function(e) {
                    var t = (0, v.v9)(function(e) {
                            return N.wl.translationSelector(e, "errorPage_legend_1")
                        }),
                        n = (0, v.v9)(function(e) {
                            return N.wl.translationSelector(e, "errorPage_legend_2")
                        });
                    return (0, d.jsxs)("div", {
                        children: [(0, d.jsx)("div", {
                            "data-qa": "error-page",
                            className: (0, L.Z)("ncss-container", aC.errorLayout),
                            children: (0, d.jsxs)("div", {
                                className: aC.mainMessage,
                                children: [(0, d.jsx)("p", {
                                    "data-qa": "error-layout-legend-1",
                                    className: "headline-3",
                                    children: e.legend1 || t
                                }), (0, d.jsx)("p", {
                                    "data-qa": "error-layout-legend-2",
                                    className: "headline-3",
                                    children: e.legend2 || n
                                })]
                            })
                        }), (0, d.jsx)(nc, {
                            carouselId: "ciclp.404"
                        })]
                    })
                };
            aN.propTypes = {
                legend1: h().string,
                legend2: h().string
            };
            var aw = function() {
                    return (0, d.jsx)(aN, {})
                },
                aS = function() {
                    return (0, d.jsx)(aN, {})
                },
                aP = function() {
                    return (0, d.jsx)(aN, {
                        legend1: "Authentication token has expired.",
                        legend2: "Please generate a new preview link from IRIS."
                    })
                },
                aL = (l = {}, (0, c._)(l, N.kr.PREVIEW, (0, d.jsx)(aI, {})), (0, c._)(l, N.kr.PREVIEW_V2, (0, d.jsx)(aI, {})), (0, c._)(l, N.kr.PAGE_VIEW, (0, d.jsx)(aI, {})), (0, c._)(l, N.kr.NOT_FOUND, (0, d.jsx)(aw, {})), (0, c._)(l, N.kr.SERVER_ERROR, (0, d.jsx)(aS, {})), (0, c._)(l, N.kr.AUTH_EXPIRED, (0, d.jsx)(aP, {})), (0, c._)(l, "default", (0, d.jsx)(aw, {})), l),
                aE = function(e) {
                    var t;
                    return t = e.routeName, Object.prototype.hasOwnProperty.call(aL, t) ? aL[t] : aL.default
                };
            aE.propTypes = {
                routeName: h().string
            }, aE.defaultProps = {
                routeName: "default"
            };
            var ak = function(e) {
                    return {
                        routeName: N.wl.routeNameSelector(e)
                    }
                },
                aO = (0, v.$j)(ak)(aE),
                aj = n(68332),
                aA = {
                    wrapper: "dTDs_QsT",
                    banner: "_9-9nOZqd",
                    bannerSlide: "_2CVsKbIX",
                    bannerTitle: "_2vXfoh-O",
                    bannerSubtitle: "_8gPPHhHw",
                    bannerLink: "_2trpWJ_I"
                },
                aR = function(e) {
                    var t = e.title,
                        n = e.msg,
                        a = e.actions,
                        i = e.onSlideFocus,
                        r = e.onSlideBlur,
                        o = e.isHidden;
                    return (0, d.jsxs)("div", {
                        className: aA.bannerSlide,
                        onFocus: i,
                        onBlur: r,
                        "aria-hidden": o,
                        children: [(0, d.jsx)("span", {
                            className: aA.bannerTitle,
                            children: t
                        }), (0, d.jsx)("div", {
                            className: aA.bannerSubtitle,
                            dangerouslySetInnerHTML: {
                                __html: null == n ? void 0 : n.replace(/<a\s/g, '<a class="'.concat(aA.bannerLink, '" tabindex="').concat(o ? -1 : 0, '" '))
                            }
                        }), a ? a.map(function(e) {
                            return (0, d.jsx)("a", {
                                href: e.url,
                                className: (0, L.Z)(aA.bannerLink, e.className),
                                style: e.style,
                                tabIndex: o ? -1 : 0,
                                children: e.text
                            }, e.id)
                        }) : null]
                    })
                };
            aR.propTypes = {
                actions: h().arrayOf(h().shape({
                    id: h().string,
                    text: h().string,
                    type: h().string,
                    url: h().string
                })),
                isHidden: h().bool,
                msg: h().string,
                onSlideBlur: h().func,
                onSlideFocus: h().func,
                title: h().string
            };
            var aU = function() {
                    var e, t = (0, u.useState)(0),
                        a = t[0],
                        i = t[1],
                        r = (0, u.useState)(!1),
                        o = r[0],
                        s = r[1],
                        l = (0, v.v9)(N.wl.bannerNodesSelector, v.wU),
                        c = (0, ac.j)(null === (e = n.g.webShellClient) || void 0 === e ? void 0 : e.identity.getIsSwooshUser),
                        p = Boolean(null == l ? void 0 : l.length),
                        m = function() {
                            s(!0)
                        },
                        h = function() {
                            s(!1)
                        },
                        g = function() {
                            var e = a + 1;
                            e === (null == l ? void 0 : l.length) && (e = 0), i(e)
                        };
                    return ((0, aj.Y)(g, !o && p ? 6e3 : null), c) ? null : (0, d.jsx)("div", {
                        className: aA.wrapper,
                        "data-qa": "banner",
                        children: (0, d.jsx)("div", {
                            className: aA.banner,
                            style: {
                                transform: "translateX(-".concat(100 * a, "%)")
                            },
                            onMouseEnter: m,
                            onMouseLeave: h,
                            children: null == l ? void 0 : l.map(function(e, t) {
                                return (0, d.jsx)(aR, (0, S._)((0, T._)({}, e), {
                                    onSlideFocus: m,
                                    onSlideBlur: h,
                                    isHidden: a !== t
                                }), e.id)
                            })
                        })
                    })
                },
                aM = n(83628),
                aB = n(60244),
                aZ = function(e) {
                    var t = Math.floor(e / 1440),
                        n = e - 1440 * t,
                        a = Math.floor(n / 60),
                        i = n - 60 * a;
                    if (t || a || i) {
                        var r = t ? "".concat(t, "D") : "",
                            o = a ? "".concat(a, "H") : "",
                            s = i ? "".concat(i, "M") : "";
                        return "P".concat(r).concat(a || i ? "T" : "").concat(o).concat(s)
                    }
                },
                aH = function(e) {
                    return Object.values(e)[0]
                },
                aD = function(e) {
                    return {
                        "@type": "ImageObject",
                        url: e
                    }
                },
                aq = function(e) {
                    var t, n = e.name,
                        a = e.imageURL,
                        i = e.text;
                    return (0, T._)({
                        "@type": "HowToStep",
                        name: n
                    }, a && {
                        image: aD(a)
                    }, i && {
                        itemListElement: [{
                            "@type": "HowToDirection",
                            text: i
                        }]
                    })
                },
                aW = function(e) {
                    var t = e.currency,
                        n = e.cost;
                    return {
                        "@type": "MonetaryAmount",
                        currency: t,
                        value: null == n ? void 0 : n.toString()
                    }
                },
                aF = function(e) {
                    var t, n = e.type,
                        a = e.data;
                    return a ? '<script type="application/ld+json" data-qa="'.concat(n, 'Script">\n    ').concat(JSON.stringify((0, T._)({}, {
                        "@context": "http://schema.org",
                        "@type": n
                    }, a)), "\n  </script>") : ""
                },
                az = function(e) {
                    var t = aH(e),
                        n = aZ(null == t ? void 0 : t.timeRequired),
                        a = null == t ? void 0 : t.estimatedCostCurrency,
                        i = null == t ? void 0 : t.estimatedCost;
                    return {
                        estimatedCost: a && i ? aW({
                            cost: i,
                            currency: a
                        }) : void 0,
                        totalTime: n
                    }
                },
                aV = function(e) {
                    var t, n = null !== (t = aH(e)) && void 0 !== t ? t : {},
                        a = n.tools,
                        i = n.supplies,
                        r = (void 0 === a ? [] : a).map(function(e) {
                            var t;
                            return {
                                "@type": "HowToTool",
                                name: t = e.text
                            }
                        });
                    return {
                        supply: (void 0 === i ? [] : i).map(function(e) {
                            var t;
                            return {
                                "@type": "HowToSupply",
                                name: t = e.text
                            }
                        }),
                        tool: r
                    }
                },
                aG = function(e) {
                    var t, n = (null !== (t = aH(e)) && void 0 !== t ? t : {}).slides;
                    return (void 0 === n ? [] : n).filter(function(e) {
                        return e.isListicleHeadline
                    }).map(function(e) {
                        var t = e.seo,
                            n = t.title,
                            a = t.text;
                        return aq({
                            imageURL: t.imageURL,
                            name: n,
                            text: a
                        })
                    })
                },
                aK = function(e, t, n, a) {
                    var i;
                    return (0, S._)((0, T._)({}, (0, T._)({
                        description: null == e ? void 0 : e.body,
                        name: null == e ? void 0 : e.title
                    }, (null == e ? void 0 : e.imageURL) && {
                        image: aD(null == e ? void 0 : e.imageURL)
                    }), az(t), aV(n)), {
                        step: aG(a)
                    })
                },
                aQ = function(e) {
                    var t = e.countryCode,
                        n = e.countryName;
                    return "us" !== t ? " (".concat(n, ")") : ""
                },
                aJ = function(e) {
                    var t = e.basename,
                        n = e.countryCode,
                        a = e.countryName;
                    return {
                        "@id": "https://".concat("www.nike.com").concat(t, "#webpage"),
                        name: "".concat(w.aU.NIKE).concat(aQ({
                            countryCode: n,
                            countryName: a
                        })),
                        url: "https://".concat("www.nike.com").concat(t)
                    }
                },
                aY = {
                    "@id": "https://www.nike.com/#organization",
                    contactPoint: [{
                        "@type": "ContactPoint",
                        areaServed: "US",
                        availableLanguage: "English",
                        contactType: "customer support",
                        telephone: "+1-800-806-6453"
                    }, {
                        "@type": "ContactPoint",
                        areaServed: "AT",
                        availableLanguage: ["English", "German"],
                        contactType: "customer support",
                        telephone: "+43 (0) 13602773720"
                    }, {
                        "@type": "ContactPoint",
                        areaServed: "BE",
                        availableLanguage: ["English", "Dutch", "French", "German"],
                        contactType: "customer support",
                        telephone: "+32 (0) 26200166"
                    }, {
                        "@type": "ContactPoint",
                        areaServed: "CN",
                        availableLanguage: "Simplified Chinese",
                        contactOption: "Mobile",
                        contactType: "customer support",
                        telephone: "+86 400-880-6453"
                    }, {
                        "@type": "ContactPoint",
                        areaServed: "CN",
                        availableLanguage: "Simplified Chinese",
                        contactOption: "Landline",
                        contactType: "customer support",
                        telephone: "+86 800-820-8865"
                    }, {
                        "@type": "ContactPoint",
                        areaServed: "CZ",
                        availableLanguage: ["English", "Czech"],
                        contactType: "customer support",
                        telephone: "+420 225376453"
                    }, {
                        "@type": "ContactPoint",
                        areaServed: "DK",
                        availableLanguage: ["English", "Danish"],
                        contactType: "customer support",
                        telephone: "+45 82333183"
                    }, {
                        "@type": "ContactPoint",
                        areaServed: "FI",
                        availableLanguage: "English",
                        contactType: "customer support",
                        telephone: "+358 (0) 981710428"
                    }, {
                        "@type": "ContactPoint",
                        areaServed: "FR",
                        availableLanguage: "French",
                        contactType: "customer support",
                        telephone: "+33 (0) 170489073"
                    }, {
                        "@type": "ContactPoint",
                        areaServed: "DE",
                        availableLanguage: "German",
                        contactType: "customer support",
                        telephone: "+49 (0) 6995206453"
                    }, {
                        "@type": "ContactPoint",
                        areaServed: "GR",
                        availableLanguage: "Greek",
                        contactType: "customer support",
                        telephone: "+30 2111813851"
                    }, {
                        "@type": "ContactPoint",
                        areaServed: "HU",
                        availableLanguage: ["English", "Hungarian"],
                        contactType: "customer support",
                        telephone: "+36 13285338"
                    }, {
                        "@type": "ContactPoint",
                        areaServed: "IE",
                        availableLanguage: "English",
                        contactType: "customer support",
                        telephone: "+353 (0) 15251800"
                    }, {
                        "@type": "ContactPoint",
                        areaServed: "IT",
                        availableLanguage: "Italian",
                        contactType: "customer support",
                        telephone: "+39 0 238591453"
                    }, {
                        "@type": "ContactPoint",
                        areaServed: "JP",
                        availableLanguage: "Japanese",
                        contactType: "customer support",
                        telephone: "+81 0120-6453-77"
                    }, {
                        "@type": "ContactPoint",
                        areaServed: "LU",
                        availableLanguage: ["English", "French", "German"],
                        contactType: "customer support",
                        telephone: "+352 27302076"
                    }, {
                        "@type": "ContactPoint",
                        areaServed: "NL",
                        availableLanguage: ["English", "Dutch"],
                        contactType: "customer support",
                        telephone: "+31 (0) 207219453"
                    }, {
                        "@type": "ContactPoint",
                        areaServed: "PL",
                        availableLanguage: "Polish",
                        contactType: "customer support",
                        telephone: "+48 (0) 225844279"
                    }, {
                        "@type": "ContactPoint",
                        areaServed: "PT",
                        availableLanguage: ["English", "Portuguese"],
                        contactType: "customer support",
                        telephone: "+351 213180051"
                    }, {
                        "@type": "ContactPoint",
                        areaServed: "SI",
                        availableLanguage: "English",
                        contactType: "customer support",
                        telephone: "+386 (0) 1600 1436"
                    }, {
                        "@type": "ContactPoint",
                        areaServed: "ES",
                        availableLanguage: ["Spanish", "Catalan"],
                        contactType: "customer support",
                        telephone: "+34 913753366"
                    }, {
                        "@type": "ContactPoint",
                        areaServed: "SE",
                        availableLanguage: ["English", "Swedish"],
                        contactType: "customer support",
                        telephone: "+46 (0) 851992310"
                    }, {
                        "@type": "ContactPoint",
                        areaServed: "GB",
                        availableLanguage: "English",
                        contactType: "customer support",
                        telephone: "+44 (0) 2076604453"
                    }, {
                        "@type": "ContactPoint",
                        areaServed: "AU",
                        availableLanguage: "English",
                        contactType: "customer support",
                        telephone: "+61 1300 656 453"
                    }, {
                        "@type": "ContactPoint",
                        areaServed: "BG",
                        availableLanguage: "English",
                        contactType: "customer support",
                        telephone: "+35929358236"
                    }, {
                        "@type": "ContactPoint",
                        areaServed: "CA",
                        availableLanguage: ["English", "French"],
                        contactType: "customer support",
                        telephone: "+1-844-430-6453"
                    }, {
                        "@type": "ContactPoint",
                        areaServed: "CL",
                        availableLanguage: "Spanish",
                        contactType: "customer support",
                        telephone: "+56 800-395-180"
                    }, {
                        "@type": "ContactPoint",
                        areaServed: "HR",
                        availableLanguage: "English",
                        contactType: "customer support",
                        telephone: "+38517776390"
                    }, {
                        "@type": "ContactPoint",
                        areaServed: "EG",
                        availableLanguage: "English",
                        contactType: "customer support",
                        telephone: "+20 08000009360"
                    }, {
                        "@type": "ContactPoint",
                        areaServed: "IN",
                        availableLanguage: "English",
                        contactType: "customer support",
                        telephone: "+91 000 800 100 9538"
                    }, {
                        "@type": "ContactPoint",
                        areaServed: "ID",
                        availableLanguage: "English",
                        contactType: "customer support",
                        telephone: "+62 001-803-65-6453"
                    }, {
                        "@type": "ContactPoint",
                        areaServed: "IL",
                        availableLanguage: "English",
                        contactType: "customer support",
                        telephone: "+972 09-9720922"
                    }, {
                        "@type": "ContactPoint",
                        areaServed: "MY",
                        availableLanguage: "English",
                        contactType: "customer support",
                        telephone: "+1-800-80-6453"
                    }, {
                        "@type": "ContactPoint",
                        areaServed: "MX",
                        availableLanguage: "Spanish",
                        contactType: "customer support",
                        telephone: "+52 01-800-062-3550"
                    }, {
                        "@type": "ContactPoint",
                        areaServed: "MA",
                        availableLanguage: ["English", "French"],
                        contactType: "customer support",
                        telephone: "+212 520 480072"
                    }, {
                        "@type": "ContactPoint",
                        areaServed: "NZ",
                        availableLanguage: "English",
                        contactType: "customer support",
                        telephone: "+64 0800 113 661"
                    }, {
                        "@type": "ContactPoint",
                        areaServed: "NO",
                        availableLanguage: ["English", "Norwegian"],
                        contactType: "customer support",
                        telephone: "+47 (0) 23500397"
                    }, {
                        "@type": "ContactPoint",
                        areaServed: "PR",
                        availableLanguage: "Spanish",
                        contactType: "customer support",
                        telephone: "+1 844-301-7028"
                    }, {
                        "@type": "ContactPoint",
                        areaServed: "RO",
                        availableLanguage: "English",
                        contactType: "customer support",
                        telephone: "+40311305016"
                    }, {
                        "@type": "ContactPoint",
                        areaServed: "RU",
                        availableLanguage: "Russian",
                        contactType: "customer support",
                        telephone: "+7 8 (495) 926-72-53"
                    }, {
                        "@type": "ContactPoint",
                        areaServed: "SA",
                        availableLanguage: "English",
                        contactType: "customer support",
                        telephone: "+966 8008140085"
                    }, {
                        "@type": "ContactPoint",
                        areaServed: "SG",
                        availableLanguage: "English",
                        contactType: "customer support",
                        telephone: "+65 1800 811 6453"
                    }, {
                        "@type": "ContactPoint",
                        areaServed: "SK",
                        availableLanguage: "English",
                        contactType: "customer support",
                        telephone: "+421250112158"
                    }, {
                        "@type": "ContactPoint",
                        areaServed: "ZA",
                        availableLanguage: "English",
                        contactType: "customer support",
                        telephone: "+27 011 256 0701"
                    }, {
                        "@type": "ContactPoint",
                        areaServed: "CH",
                        availableLanguage: ["English", "German", "French", "Italian"],
                        contactType: "customer support",
                        telephone: "+41 (0) 225675466"
                    }, {
                        "@type": "ContactPoint",
                        areaServed: "TW",
                        availableLanguage: "Traditional Chinese",
                        contactType: "customer support",
                        telephone: "+886 0800-886-453"
                    }, {
                        "@type": "ContactPoint",
                        areaServed: "TH",
                        availableLanguage: "Thai",
                        contactType: "customer support",
                        telephone: "+66 001-800-65-6453"
                    }, {
                        "@type": "ContactPoint",
                        areaServed: "TR",
                        availableLanguage: "Turkish",
                        contactType: "customer support",
                        telephone: "+90 (212) 365 04 90"
                    }, {
                        "@type": "ContactPoint",
                        areaServed: "AE",
                        availableLanguage: "English",
                        contactType: "customer support",
                        telephone: "+971 800035703048"
                    }, {
                        "@type": "ContactPoint",
                        areaServed: "VN",
                        availableLanguage: "English",
                        contactOption: "Viettel",
                        contactType: "customer support",
                        telephone: "+84 12032484"
                    }, {
                        "@type": "ContactPoint",
                        areaServed: "VN",
                        availableLanguage: "English",
                        contactOption: "VTI",
                        contactType: "customer support",
                        telephone: "+84 12032487"
                    }, ],
                    logo: "https://static.nike.com/a/images/f_jpg,q_auto:eco/61b4738b-e1e1-4786-8f6c-26aa0008e80b/swoosh-logo-black.png",
                    name: "Nike",
                    sameAs: ["https://www.wikidata.org/wiki/Q483915", "https://en.wikipedia.org/wiki/Nike,_Inc.", "https://www.youtube.com/user/nike", "https://www.linkedin.com/company/nike", "https://www.facebook.com/nike", "https://twitter.com/nike", "https://www.instagram.com/nike/", ],
                    subOrganization: [{
                        "@type": "Organization",
                        name: "Converse",
                        sameAs: ["https://www.wikidata.org/wiki/Q319515", "https://en.wikipedia.org/wiki/Converse_(shoe_company)", "https://www.youtube.com/channel/UCfigptVgX1LGgUKZkQ2BZMQ", "https://www.linkedin.com/company/converse", "https://www.facebook.com/converse/", "https://twitter.com/converse", "https://www.instagram.com/converse/", ],
                        url: "https://www.converse.com/"
                    }, {
                        "@type": "Organization",
                        name: "Jordan Brand",
                        sameAs: ["https://www.wikidata.org/wiki/Q420953", "https://en.wikipedia.org/wiki/Air_Jordan", "https://www.youtube.com/channel/UCqnGgTN0ajGp0LaoKkyxAxA", "https://www.linkedin.com/company/jumpman23", "https://www.facebook.com/jumpman23/", "https://twitter.com/jumpman23", "https://www.instagram.com/jumpman23/", ],
                        url: "https://www.nike.com/us/en_us/c/jordan"
                    }, ],
                    url: "https://www.nike.com/"
                },
                aX = {
                    "@id": "https://www.nike.com/#website",
                    name: "Nike",
                    potentialAction: {
                        "@type": "SearchAction",
                        "query-input": "required name=search_term_string",
                        target: "https://www.nike.com/w?q={search_term_string}&vst={search_term_string}&cp=91120261542_sea_"
                    },
                    url: "https://www.nike.com/"
                },
                a$ = function() {
                    var e = (0, v.v9)(N.wl.isHowToPage),
                        t = (0, v.v9)(N.wl.isHomepageSelector),
                        n = (0, v.v9)(N.wl.coverCardSelector),
                        a = (0, v.v9)(N.wl.listicleCardSelector, v.wU),
                        i = (0, v.v9)(N.wl.basenameSelector),
                        r = (0, v.v9)(N.wl.countryCodeSelector),
                        o = (0, v.v9)(N.wl.countryNameSelector),
                        s = (0, v.v9)(function(e) {
                            return N.wl.containerTypeCardSelector(e, {
                                containerType: N.QU.TOOLS_AND_SUPPLIES
                            })
                        }, v.wU),
                        l = (0, v.v9)(function(e) {
                            return N.wl.containerTypeCardSelector(e, {
                                containerType: N.QU.META_BOX
                            })
                        }, v.wU),
                        c = [{
                            data: e && aK(n, l, s, a),
                            type: "HowTo"
                        }, {
                            data: t && aJ({
                                basename: i,
                                countryCode: r,
                                countryName: o
                            }),
                            type: "WebPage"
                        }, ].concat((0, P._)("us" === r && t ? [{
                            data: aY,
                            type: "Organization"
                        }, {
                            data: aX,
                            type: "WebSite"
                        }, ] : [])).map(aF).filter(Boolean).join("");
                    return (0, d.jsx)("div", {
                        dangerouslySetInnerHTML: {
                            __html: c
                        }
                    })
                },
                a0 = N.Nw.analyticsActions,
                a1 = N.Nw.bootstrapActions,
                a2 = U.Z.ANALYTICS_ACTION_SELECTOR,
                a3 = U.Z.ANALYTICS_PLACEMENT_SELECTOR,
                a6 = U.Z.ANALYTICS_ALLOWED_ELEMENTS_SELECTOR,
                a5 = function(e) {
                    (0, x._)(n, e);
                    var t = (0, I._)(n);

                    function n() {
                        var e;
                        return (0, _._)(this, n), e = t.apply(this, arguments), (0, c._)((0, y._)(e), "handleClick", function(t) {
                            var n, a, i, r = t.target,
                                o = r.matches(a6) ? r : r.closest(a6);
                            if (o) {
                                var s = r.matches(a2) ? r : r.closest(a2),
                                    l = r.closest(a3),
                                    c = null == s ? void 0 : null === (n = s.dataset) || void 0 === n ? void 0 : n.analyticsActionId,
                                    d = null == s ? void 0 : null === (a = s.dataset) || void 0 === a ? void 0 : a.analyticsClickActivityText,
                                    u = null == l ? void 0 : null === (i = l.dataset) || void 0 === i ? void 0 : i.analyticsPlacementId;
                                if (c || u) {
                                    var p = (0, T._)({
                                        actionId: c,
                                        placementId: u
                                    }, d && {
                                        clickContentLabel: d
                                    });
                                    e.props.analyticsTrack(p), (null == o ? void 0 : o.href) && (0, aB.r)(t, o.href, o.target)
                                }
                            }
                        }), e
                    }
                    return (0, b._)(n, [{
                        key: "componentDidMount",
                        value: function() {
                            var e = this.props,
                                t = e.bootstrapInit,
                                n = e.analyticsTrack;
                            t(), window.addEventListener(aM.Aw, function(e) {
                                return n(e.detail)
                            })
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e, t = this.props,
                                n = (t.routeName, t.error, t.isBootstrapped),
                                a = t.brand,
                                i = t.showPromoBanner;
                            return n ? (0, d.jsxs)(eU.iz, {
                                brand: a,
                                children: [(0, d.jsx)(a$, {}), (0, d.jsxs)("div", {
                                    role: "main",
                                    onClick: this.handleClick,
                                    children: [i && (0, d.jsx)(aU, {}), (0, d.jsx)(aO, {}), e]
                                })]
                            }) : null
                        }
                    }]), n
                }(p().PureComponent);
            (0, c._)(a5, "propTypes", {
                analyticsTrack: h().func.isRequired,
                bootstrapInit: h().func.isRequired,
                brand: h().oneOf((0, C.Z)(w.aU)),
                error: h().object,
                isBootstrapped: h().bool,
                routeName: h().string,
                showPromoBanner: h().bool
            });
            var a4 = function(e) {
                    return {
                        brand: N.wl.brandNameSelector(e),
                        error: N.wl.errorSelector(e),
                        isBootstrapped: N.wl.isBootstrappedSelector(e),
                        routeName: N.wl.routeNameSelector(e),
                        showPromoBanner: N.wl.showPromoBannerSelector(e)
                    }
                },
                a8 = {
                    analyticsTrack: a0.track,
                    bootstrapInit: a1.request
                },
                a7 = (0, v.$j)(a4, a8)(a5),
                a9 = function(e, t) {
                    var n;
                    return null === (n = e.events.find(function(e) {
                        return e.experimentIds.includes(t)
                    })) || void 0 === n ? void 0 : n.key
                },
                ie = function(e, t, n, a) {
                    if (!n) return {
                        activeVariation: a,
                        experimentName: t,
                        isFallbackVariation: !0
                    };
                    var i = e.experimentsMap[t],
                        r = i.id,
                        o = i.variationsMap,
                        s = a9(e, r);
                    return {
                        activeVariation: n,
                        analyticsKey: "".concat(r, ":").concat(o[n].id),
                        eventKey: s,
                        experimentName: t
                    }
                },
                it = function(e) {
                    var t = e.optimizely,
                        n = e.experimentName,
                        a = e.userId,
                        i = e.attributes,
                        r = e.isAbleToPersonalize,
                        o = e.forcedVariations,
                        s = null == o ? void 0 : o[n];
                    return s ? t.setForcedVariation(n, a, s) ? s : null : r ? t.activate(n, a, i) : null
                },
                ia = function(e) {
                    var t = e.experiment;
                    return e.isReadyForExperimentation && !(null == t ? void 0 : t.isFallbackVariation)
                },
                ii = n(41962),
                ir = function() {
                    var e = (0, u.useRef)({});
                    return {
                        addExperimentToQueue: function(t) {
                            e.current[t.experimentName] = t
                        },
                        getExperimentsToActivate: function() {
                            return Object.values(e.current)
                        },
                        removeExperimentFromQueue: function(t) {
                            delete e.current[t]
                        }
                    }
                },
                io = function(e) {
                    var t = (0, u.useRef)(null),
                        n = (0, u.useState)(!1),
                        a = n[0],
                        i = n[1];
                    return (0, u.useEffect)(function() {
                        var n = ii.ZP.createInstance({
                            datafile: e
                        });
                        n.onReady().then(function() {
                            i(!0)
                        }), t.current = n
                    }, [e]), {
                        isOptimizelyReady: a,
                        optimizelyInstanceRef: t
                    }
                },
                is = p().createContext({}),
                il = function(e) {
                    var t = e.children,
                        n = e.datafile,
                        a = e.forcedVariations,
                        i = (0, v.I0)(),
                        r = io(n),
                        o = r.isOptimizelyReady,
                        s = r.optimizelyInstanceRef,
                        l = (0, v.v9)(N.wl.optimizelyActiveExperimentsSelector),
                        c = (0, v.v9)(N.wl.isPrivacySet),
                        p = (0, v.v9)(N.wl.canRunOptimizationSelector),
                        m = (0, v.v9)(N.wl.analyticsUserIdSelector),
                        h = c && o,
                        g = ir(),
                        f = g.addExperimentToQueue,
                        y = g.removeExperimentFromQueue,
                        _ = g.getExperimentsToActivate,
                        b = function(e) {
                            var t = e.experimentName,
                                n = e.attributes,
                                r = e.fallbackVariation;
                            if (y(t), !l[t]) {
                                var o = it({
                                    attributes: n,
                                    experimentName: t,
                                    forcedVariations: a,
                                    isAbleToPersonalize: p,
                                    optimizely: s.current,
                                    userId: m
                                });
                                i(N.Nw.optimizelyActions.activateExperiment(ie(s.current.getOptimizelyConfig(), t, o, r)))
                            }
                        },
                        x = function(e) {
                            if (h) {
                                b(e);
                                return
                            }
                            f(e)
                        };
                    (0, u.useEffect)(function() {
                        var e = _();
                        e.length && h && e.forEach(b)
                    }, [h]);
                    var T = function(e, t) {
                        ia({
                            experiment: l[e],
                            isReadyForExperimentation: h
                        }) && s.current.track(l[e].eventKey, m, t)
                    };
                    return (0, d.jsx)(is.Provider, {
                        value: {
                            activateExperiment: x,
                            activeExperiments: l,
                            trackEvent: T
                        },
                        children: t
                    })
                };
            il.propTypes = {
                children: h().node,
                datafile: h().object,
                forcedVariations: h().object
            };
            var ic = function(e) {
                var t = e.children,
                    n = e.datafile,
                    a = e.forcedVariations;
                return n ? (0, d.jsx)(il, {
                    datafile: n,
                    forcedVariations: a,
                    children: t
                }) : t
            };
            ic.propTypes = {
                children: h().node,
                datafile: h().object,
                forcedVariations: h().object
            }, n(38166);
            var id = N.wl.translationSelector,
                iu = N.wl.brandNameSelector,
                ip = function(e) {
                    return {
                        description: id(e, "socialCard_description"),
                        imageUrl: "https://c.static-".concat("nike.com", "/a/images/w_1200,c_limit/bzl2wmsfh7kgdkufrrjq/seo-title.jpg"),
                        locale: "en_US",
                        siteName: "Nike.com",
                        title: "Nike. Just Do It. Nike.com",
                        type: "website",
                        url: "https://".concat("www.nike.com")
                    }
                },
                im = function(e) {
                    var t;
                    return t = {}, (0, c._)(t, w.aU.NIKE, ip(e)), (0, c._)(t, w.aU.JORDAN, ip(e)), t
                },
                ih = function(e) {
                    var t;
                    return null === (t = im(e)) || void 0 === t ? void 0 : t[iu(e)]
                },
                ig = N.wl.translationSelector,
                iv = N.wl.brandNameSelector,
                iy = function(e) {
                    return {
                        card: "summary_large_image",
                        creator: "@nike",
                        description: ig(e, "socialCard_description"),
                        imageUrl: "https://c.static-".concat("nike.com", "/a/images/w_1200,c_limit/bzl2wmsfh7kgdkufrrjq/seo-title.jpg"),
                        site: "@nike",
                        title: "Nike. Just Do It. Nike.com"
                    }
                },
                i_ = function(e) {
                    var t;
                    return t = {}, (0, c._)(t, w.aU.NIKE, iy(e)), (0, c._)(t, w.aU.JORDAN, iy(e)), t
                },
                ib = function(e) {
                    var t;
                    return null === (t = i_(e)) || void 0 === t ? void 0 : t[iv(e)]
                },
                ix = function() {
                    var e = "https://".concat("www.nike.com");
                    return [{
                        href: "".concat(e, "/favicon.ico?v=1"),
                        rel: "icon",
                        type: "image/x-icon"
                    }, {
                        href: "".concat(e, "/android-icon-192x192.png"),
                        rel: "icon",
                        sizes: "192x192",
                        type: "image/png"
                    }, {
                        href: "".concat(e, "/android-icon-128x128.png"),
                        rel: "icon",
                        sizes: "128x128",
                        type: "image/png"
                    }, {
                        href: "".concat(e, "/apple-touch-icon.png"),
                        rel: "apple-touch-icon",
                        type: "image/png"
                    }, {
                        href: "".concat(e, "/apple-touch-icon-76x76-precomposed.png"),
                        rel: "apple-touch-icon",
                        sizes: "76x76",
                        type: "image/png"
                    }, {
                        href: "".concat(e, "/apple-touch-icon-120x120-precomposed.png"),
                        rel: "apple-touch-icon",
                        sizes: "120x120",
                        type: "image/png"
                    }, {
                        href: "".concat(e, "/apple-touch-icon-152x152-precomposed.png"),
                        rel: "apple-touch-icon",
                        sizes: "152x152",
                        type: "image/png"
                    }, ]
                },
                iT = n(57002),
                iI = n(34406).env.NCSS_VERSION,
                iC = [{
                    href: "https://insights-collector.newrelic.com/",
                    rel: "dns-prefetch"
                }, {
                    href: "https://c.static-".concat("nike.com", "/"),
                    rel: "dns-prefetch"
                }, {
                    href: "https://cdnjs.cloudflare.com/",
                    rel: "dns-prefetch"
                }, {
                    href: "https://secure-store.".concat("nike.com", "/"),
                    rel: "dns-prefetch"
                }, {
                    href: "https://web.".concat("nike.com", "/"),
                    rel: "dns-prefetch"
                }, {
                    href: "https://static.".concat("nike.com", "/"),
                    rel: "dns-prefetch"
                }, {
                    href: "https://api.segment.io/",
                    rel: "dns-prefetch"
                }, {
                    href: "https://".concat("api.nike.com"),
                    rel: "dns-prefetch"
                }, {
                    href: "https://connect.facebook.net/",
                    rel: "dns-prefetch"
                }, {
                    href: "https://analytics.".concat("nike.com", "/"),
                    rel: "dns-prefetch"
                }, {
                    as: "font",
                    crossOrigin: "crossorigin",
                    href: "https://".concat("www.nike.com", "/static/ncss/").concat(iT.NCSS_VERSION, "/dotcom/fonts/Nike-Futura.woff2"),
                    rel: "preload",
                    type: "font/woff2"
                }, ],
                iN = [{
                    href: "https://insights-collector.newrelic.com/",
                    rel: "dns-prefetch"
                }, {
                    href: "https://c.static-".concat("nike.com", "/"),
                    rel: "dns-prefetch"
                }, {
                    href: "https://g.alicdn.com/",
                    rel: "dns-prefetch"
                }, {
                    href: "https://aeu.alicdn.com/",
                    rel: "dns-prefetch"
                }, {
                    href: "https://secure-store.".concat("nike.com", "/"),
                    rel: "dns-prefetch"
                }, {
                    href: "https://web.".concat("nike.com", "/"),
                    rel: "dns-prefetch"
                }, {
                    href: "https://static.".concat("nike.com", "/"),
                    rel: "dns-prefetch"
                }, {
                    href: "https://unite.".concat("nike.com", "/"),
                    rel: "dns-prefetch"
                }, {
                    href: "https://api.nike.com/",
                    rel: "dns-prefetch"
                }, {
                    href: "https://api.nike.com.cn/",
                    rel: "dns-prefetch"
                }, {
                    href: "https://manifest.prod.boltdns.net/",
                    rel: "dns-prefetch"
                }, {
                    href: "https://analytics.".concat("nike.com", "/"),
                    rel: "dns-prefetch"
                }, {
                    as: "font",
                    crossOrigin: "crossorigin",
                    href: "https://".concat("www.nike.com", "/static/ncss/").concat(iI, "/dotcom/fonts/Nike-Futura.woff2"),
                    rel: "preload",
                    type: "font/woff2"
                }, ],
                iw = N.wl.marketplaceSelector,
                iS = N.wl.routeNameSelector,
                iP = N.wl.languageRegionSelector,
                iL = N.wl.urlSelector,
                iE = N.wl.canonicalUrlSelector,
                ik = N.wl.translationSelector,
                iO = N.wl.pageDataPropertiesSelector,
                ij = N.wl.pageNumberSelector,
                iA = N.wl.countryCodeSelector,
                iR = function() {
                    var e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                    return "".concat(null === (e = t[0]) || void 0 === e ? void 0 : e.toUpperCase()).concat(null == t ? void 0 : t.slice(1))
                },
                iU = ["US", "CN"],
                iM = function(e, t, n) {
                    var a = !iU.includes(n),
                        i = w.aU.NIKE,
                        r = "CN" === n ? i.toUpperCase() : iR(i),
                        o = t.replace("[country]", a ? "".concat(n) : "").replace("[brand]", r).trimRight();
                    return "".concat(e).concat(o)
                },
                iB = function() {
                    function e() {
                        (0, _._)(this, e), this.tags = []
                    }
                    return (0, b._)(e, [{
                        key: "push",
                        value: function(e, t) {
                            var n;
                            t && this.tags.push((n = {}, (0, c._)(n, e.label, e.value), (0, c._)(n, "content", t), n))
                        }
                    }]), e
                }(),
                iZ = function() {},
                iH = {
                    AUTH_EXPIRED: iZ,
                    NOT_FOUND: iZ,
                    PAGE_VIEW: function(e) {
                        return {
                            link: (0, P._)(ix()).concat((0, P._)("cn" === iA(e) ? iN : iC), [{
                                href: iE(e),
                                rel: "canonical"
                            }, ])
                        }
                    },
                    PREVIEW: iZ,
                    PREVIEW_V2: iZ,
                    SERVER_ERROR: iZ
                },
                iD = {
                    description: "og:description",
                    imageUrl: "og:image",
                    locale: "og:locale",
                    siteName: "og:site_name",
                    title: "og:title",
                    type: "og:type",
                    url: "og:url"
                },
                iq = {
                    card: "twitter:card",
                    creator: "twitter:creator",
                    description: "twitter:description",
                    imageUrl: "twitter:image",
                    site: "twitter:site",
                    title: "twitter:title"
                },
                iW = function(e) {
                    return iT.TITLE_TEMPLATE_TRANSLATION_KEYS[e] ? iT.TITLE_TEMPLATE_TRANSLATION_KEYS[e] : iT.TITLE_TEMPLATE_TRANSLATION_KEYS.default
                },
                iF = function(e) {
                    var t, n, a, i, r, o, s, l, c, d, u, p, m = new iB,
                        h = iO(e),
                        g = iP(e),
                        v = iL(e),
                        f = iw(e),
                        y = w.aU.NIKE,
                        _ = ik(e, iW(f)),
                        b = (null == h ? void 0 : h.seoProperties) || {},
                        x = b.keywords,
                        I = b.description,
                        C = b.title,
                        N = b.doNotIndex;
                    return m.push({
                        label: "name",
                        value: "keywords"
                    }, x), m.push({
                        label: "name",
                        value: "robots"
                    }, N ? "noindex, nofollow" : "index, follow"), m.push({
                        label: "name",
                        value: "description"
                    }, I), m.push({
                        label: "httpEquiv",
                        value: "content-language"
                    }, "".concat(g)), m.push({
                        label: "name",
                        value: "application-name"
                    }, "".concat(iR(y), ".com")), t = m.push.bind(m), n = h.openGraph, o = (0, S._)((0, T._)({}, n), {
                        url: "https://".concat("www.nike.com").concat(v)
                    }), g && (o.locale = g), Object.keys(s = (0, T._)({}, ih(e), o)).map(function(e) {
                        return {
                            content: s[e],
                            name: {
                                label: "property",
                                value: iD[e]
                            }
                        }
                    }).forEach(function(e) {
                        t(e.name, e.content)
                    }), c = m.push.bind(m), d = h.openGraph, u = (0, T._)({}, d), Object.keys(p = (0, T._)({}, ib(e), u)).map(function(e) {
                        return {
                            content: p[e],
                            name: {
                                label: "name",
                                value: iq[e]
                            }
                        }
                    }).forEach(function(e) {
                        c(e.name, e.content)
                    }), {
                        meta: m.tags,
                        title: C,
                        titleTemplate: function(e) {
                            return iM(e, _, f)
                        }
                    }
                },
                iz = {
                    AUTH_EXPIRED: function() {
                        return {
                            title: "Token has expired"
                        }
                    },
                    NOT_FOUND: function() {
                        return {
                            title: "Page not found"
                        }
                    },
                    PAGE_VIEW: iF,
                    PREVIEW: iF,
                    PREVIEW_V2: iF,
                    SERVER_ERROR: function() {
                        return {
                            title: "Internal error"
                        }
                    }
                },
                iV = function(e) {
                    var t = iS(e),
                        n = iw(e),
                        a = ik(e, iW(n)),
                        i = ik(e, "title_page_number_postfix"),
                        r = ij(e),
                        o = r && r > 1 && i ? i.replace("[X]", r) : "";
                    if (t) {
                        if (!Object.prototype.hasOwnProperty.call(iz, t)) throw Error("No metadatagetter defined for route '".concat(t, "'"));
                        var s = iz[t](e),
                            l = iH[t](e);
                        return (0, S._)((0, T._)({}, s, l), {
                            titleTemplate: function(e) {
                                return iM(e, "".concat(a).concat(o), n)
                            }
                        })
                    }
                },
                iG = n(97729),
                iK = n.n(iG),
                iQ = function(e) {
                    var t, n, a = e.metaTags;
                    return (0, d.jsxs)(iK(), {
                        children: [(null == a ? void 0 : null === (t = a.meta) || void 0 === t ? void 0 : t.length) && a.meta.map(function(e) {
                            var t = e.name || e.property || e.httpEquiv;
                            return (0, u.createElement)("meta", (0, S._)((0, T._)({}, e), {
                                key: "meta-tag-".concat(t)
                            }))
                        }), (null == a ? void 0 : null === (n = a.link) || void 0 === n ? void 0 : n.length) && a.link.map(function(e) {
                            return (0, u.createElement)("link", (0, S._)((0, T._)({}, e), {
                                key: "link-tag-".concat(e.href)
                            }))
                        }), (0, d.jsx)("title", {
                            children: "function" == typeof(null == a ? void 0 : a.titleTemplate) ? a.titleTemplate((null == a ? void 0 : a.title) || "") : (null == a ? void 0 : a.title) || ""
                        })]
                    })
                };
            iQ.propTypes = {
                metaTags: h().shape({
                    link: h().arrayOf(h().object),
                    meta: h().arrayOf(h().object),
                    title: h().string,
                    titleTemplate: h().func
                })
            };
            var iJ = n(35650);
            (0, f.Zl)() || (0, f.$t)(),
            function() {
                if (!(0, t0.$L)()) return !1;
                var e = navigator.userAgent.toLowerCase();
                return !e.includes("chrome") && !!e.includes("safari")
            }() && (window.ResizeObserver || (0, iJ.N9)());
            var iY = !0,
                iX = function(e) {
                    var t = e.optimizely,
                        n = (0, v.oR)(),
                        a = iV(n.getState()),
                        i = N.wl.brandNameSelector(n.getState());
                    return (0, d.jsxs)(d.Fragment, {
                        children: [(0, d.jsx)(iQ, {
                            metaTags: a
                        }), (0, d.jsxs)("div", {
                            id: w.uB,
                            className: (0, g.Z)((0, c._)({}, "".concat(i, " u-full-width u-full-height"), i !== w.aU.NIKE)),
                            children: [(0, d.jsx)(v.zt, {
                                store: n,
                                children: (0, d.jsx)(ic, {
                                    datafile: null == t ? void 0 : t.datafile,
                                    forcedVariations: null == t ? void 0 : t.forcedVariations,
                                    children: (0, d.jsx)(a7, {})
                                })
                            }), (0, d.jsx)("div", {
                                id: w.cH
                            })]
                        })]
                    })
                };
            iX.propTypes = {
                optimizely: h().shape({
                    children: h().node,
                    datafile: h().object,
                    forcedVariations: h().object,
                    isDisabled: h().bool
                })
            };
            var i$ = iX
        },
        65620: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return u
                }
            });
            var a = n(67862),
                i = n(81753),
                r = n.n(i);

            function o() {
                var e = (0, a._)(["\n  aspect-ratio: ", ";\n  @supports not (aspect-ratio: auto) {\n    &::before {\n      content: '';\n      width: 1px;\n      margin-left: -1px;\n      float: left;\n      padding-top: ", ";\n    }\n    &::after {\n      content: '';\n      display: table;\n      clear: both;\n    }\n  }\n"]);
                return o = function() {
                    return e
                }, e
            }
            var s = "auto",
                l = function(e) {
                    var t = e.aspectRatios,
                        n = e.orientation;
                    return t ? t[n] : s
                },
                c = function(e) {
                    var t = l(e);
                    return t === s ? "0" : "".concat(100 / t, "%")
                },
                d = r().div(o(), l, c);
            d.displayName = "AspectRatioWrapper";
            var u = d
        },
        26366: function(e, t, n) {
            "use strict";
            n.d(t, {
                Y: function() {
                    return b
                }
            });
            var a = n(24022),
                i = n(4670),
                r = n(52322);
            n(37667);
            var o = n(25237),
                s = n.n(o),
                l = n(52743),
                c = n(56503),
                d = n(13980),
                u = n.n(d),
                p = n(26490),
                m = {
                    cardLink: "_1GPQ9HJJ"
                },
                h = n(77670),
                g = n(22757),
                v = function(e) {
                    var t = e.actionId,
                        n = e.destinationUrl,
                        o = e.openInNewTab,
                        s = e.dataQa,
                        l = e.renderAs,
                        d = e.title,
                        u = e.ariaLabel,
                        g = e.draggable,
                        v = e.getUrl,
                        f = e.getActionText,
                        y = e.handleClick,
                        _ = e.allowAnalytics,
                        b = e.memberOnly,
                        x = e.classNames,
                        T = e.tabbable,
                        I = "a" === l || l === h.Z,
                        C = (null == v ? void 0 : v(n)) || n,
                        N = f(u || "", !0);
                    return (0, r.jsx)(l, (0, a._)((0, i._)((0, a._)((0, i._)((0, a._)({
                        "data-qa": "card-link",
                        "data-analytics-action-id": t
                    }, b && {
                        "data-analytics-click-activity-text": N
                    }), {
                        "data-analytics-allow": _,
                        title: d,
                        draggable: g,
                        className: p.Z.apply(void 0, [m.cardLink].concat((0, c._)(x))),
                        onClick: y
                    }), s && {
                        "data-qa-card-id": s
                    }), {
                        "aria-label": N || void 0,
                        tabIndex: T ? void 0 : "-1"
                    }), I && {
                        href: C,
                        rel: o ? "noopener" : null,
                        target: o ? "_blank" : "_self"
                    }))
                },
                f = (0, a._)({
                    actionId: u().string,
                    ariaLabel: u().string,
                    classNames: u().arrayOf(u().string),
                    dataQa: u().string,
                    destinationType: u().string,
                    destinationUrl: u().string,
                    draggable: u().bool,
                    openInNewTab: u().bool,
                    renderAs: u().oneOf(["button", "a", h.Z]),
                    tabbable: u().bool,
                    title: u().string
                }, g.z);
            v.propTypes = f, v.defaultProps = {
                actions: [],
                classNames: [],
                getActionText: function(e) {
                    return e
                },
                getUrl: function(e) {
                    return e || "#"
                },
                renderAs: h.Z,
                tabbable: !0
            }, (0, g.Z)(v);
            var y = s()(function() {
                    return Promise.all([n.e(259), n.e(388)]).then(n.bind(n, 50388)).then(function(e) {
                        return e.ShopTheLook
                    })
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [50388]
                        }
                    }
                }),
                _ = s()(function() {
                    return Promise.all([n.e(259), n.e(0)]).then(n.bind(n, 64e3)).then(function(e) {
                        return e.IframeModal
                    })
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [64e3]
                        }
                    }
                }),
                b = function(e) {
                    return e.destinationType === l.tG.POPUP ? (0, r.jsx)(_, {
                        src: e.destinationUrl,
                        actionId: e.actionId,
                        children: function(t) {
                            var n = t.onClick;
                            return (0, r.jsx)(v, (0, i._)((0, a._)({}, e), {
                                handleClick: n,
                                renderAs: "button",
                                allowAnalytics: !0
                            }))
                        }
                    }) : e.destinationType === l.tG.PRODUCT_COLLECTION ? (0, r.jsx)(y, {
                        analyticsItemId: e.analyticsItemId,
                        actionText: e.actionText,
                        id: e.actionId,
                        children: function(t) {
                            var n = t.handleOpenModal;
                            return (0, r.jsx)(v, (0, i._)((0, a._)({}, e), {
                                renderAs: "button",
                                handleClick: n,
                                allowAnalytics: !0
                            }))
                        }
                    }) : (0, r.jsx)(v, (0, a._)({}, e))
                };
            b.propTypes = f
        },
        8552: function(e, t, n) {
            "use strict";

            function a(e, t, n, a, i) {
                var r, o = "w",
                    s = n;
                return a >= n && (o = "h", s = a),
                    function(e, t, n) {
                        if (!e) return "";
                        var a = e.indexOf("w_"),
                            i = e.indexOf(",", a),
                            r = e.slice(a, i),
                            o = e.split(r);
                        return "".concat(o[0]).concat(n, "_").concat(t).concat(o[1])
                    }(function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                            n = "f_auto";
                        if (t.includes(n)) {
                            var a = t.split(n);
                            return "".concat(a[0]).concat(n, "/dpr_").concat(e).concat(a[1])
                        }
                        return t
                    }(null !== (r = window.devicePixelRatio.toFixed(1)) && void 0 !== r ? r : "1", i ? e : t), s, o)
            }
            n.d(t, {
                Gr: function() {
                    return a
                },
                eI: function() {
                    return r
                },
                sG: function() {
                    return s
                }
            });
            var i, r = function(e) {
                    return null !== (i = null == e ? void 0 : e.firstChild) && void 0 !== i ? i : null
                },
                o = function(e) {
                    var t, n;
                    return (null === (t = r(e)) || void 0 === t ? void 0 : null === (n = t.dataset) || void 0 === n ? void 0 : n.lcpLoaded) !== "true"
                },
                s = function(e) {
                    var t, n = e.imageRef,
                        i = e.portraitURL,
                        s = e.landscapeURL,
                        l = e.width,
                        c = e.height,
                        d = e.dimensionType;
                    return o(n.current) ? a(i, s, l, c, null == d ? void 0 : d.isPortrait) : null === (t = r(n.current)) || void 0 === t ? void 0 : t.src
                }
        },
        55265: function(e, t, n) {
            "use strict";
            n.d(t, {
                d: function() {
                    return T
                },
                e: function() {
                    return x
                }
            });
            var a = n(24022),
                i = n(4670),
                r = n(56503),
                o = n(52322);
            n(37667);
            var s = n(13980),
                l = n.n(s),
                c = n(26490),
                d = n(52743),
                u = n(20074),
                p = n(20462),
                m = n(5192),
                h = n(27447),
                g = n(22757),
                v = n(49528),
                f = n(77670),
                y = n(77482),
                _ = function(e, t) {
                    var n = e.Icon,
                        a = e.memberOnly,
                        i = e.isMemberOnlyNotLogged;
                    return a ? t ? (0, o.jsx)(p.g, {
                        className: y.Z.rotatingIcon
                    }) : i ? (0, o.jsx)(m.H, {}) : (0, o.jsx)(h.S, {}) : n
                },
                b = function(e) {
                    var t = e.renderAs,
                        n = e.getUrl,
                        i = e.destinationId,
                        r = e.openInNewTab;
                    if ("button" === t) return {};
                    var o = n(i);
                    return (0, a._)({
                        href: o,
                        target: r ? "_blank" : "_self"
                    }, r && {
                        rel: "noopener"
                    })
                },
                x = function(e) {
                    var t = e.id,
                        n = e.appearance,
                        s = e.actionText,
                        l = e.actionType,
                        p = e.allowAnalytics,
                        m = e.ariaExpanded,
                        h = e.ariaLabel,
                        g = e.className,
                        v = e.colorTheme,
                        f = e.dataQa,
                        x = e.disabled,
                        T = e.renderAs,
                        I = e.handleClick,
                        C = e.getActionText,
                        N = e.memberOnly,
                        w = e.buttonStyle,
                        S = e.countryCode,
                        P = e.dataButtonType,
                        L = e.children,
                        E = e.iconPlacement,
                        k = e.isButtonType,
                        O = e.showPlaceholder,
                        j = e.type,
                        A = l === d.vc.LINK,
                        R = A ? [y.Z.ctaTextLink] : [y.Z.ctaButton],
                        U = C(s, k),
                        M = k && O,
                        B = _(e, M),
                        Z = b(e);
                    return (0, o.jsx)(u.O, (0, i._)((0, a._)((0, i._)((0, a._)((0, i._)((0, a._)({
                        appearance: !n && A ? "textUnderline" : n,
                        "aria-expanded": m,
                        ariaLabel: h || U,
                        background: "light" === v ? "dark" : "light",
                        className: c.Z.apply(void 0, ["inline-flx-btn", y.Z.ctaItem, ].concat((0, r._)(R), [g, w && y.Z[w], y.Z[S], "light" === v || A ? y.Z.ctaTextOnLight : y.Z.ctaTextOnDark, ])),
                        Component: T,
                        "data-actiontext": U,
                        "data-analytics-action-id": t
                    }, N && {
                        "data-analytics-click-activity-text": U
                    }), {
                        "data-analytics-allow": p,
                        "data-button-type": P || l,
                        "data-qa": A ? "cta-text-link" : "cta-button"
                    }), f && {
                        "data-qa-card-id": f
                    }), {
                        disabled: Boolean(x || M),
                        Icon: B,
                        iconPlacement: N ? "start" : E,
                        onClick: I,
                        size: A ? "large" : "small",
                        tabIndex: "0",
                        type: j
                    }), Z), {
                        children: L || U
                    }))
                };
            x.propTypes = (0, i._)((0, a._)({}, g.z), {
                Icon: l().oneOf([l().string, l().element]),
                actionText: l().oneOfType([l().string, l().node]).isRequired,
                actionType: l().oneOf(Object.values(d.vc)),
                allowAnalytics: l().bool,
                appearance: l().oneOf(["primary", "secondary", "text", "textUnderline", ]),
                ariaExpanded: l().bool,
                ariaLabel: l().string,
                buttonStyle: l().string,
                children: l().node,
                className: l().string,
                colorTheme: v.Pg,
                countryCode: l().string,
                dataButtonType: l().string,
                dataQa: l().string,
                destinationId: l().string,
                disabled: l().bool,
                handleClick: l().func,
                iconPlacement: l().oneOf(["start", "end"]),
                id: l().string,
                openInNewTab: l().bool,
                renderAs: l().oneOf(["a", "button", f.Z]),
                type: l().oneOf(["submit", "button", "reset"])
            }), x.defaultProps = {
                actionType: d.vc.BUTTON,
                allowAnalytics: !1,
                colorTheme: "dark",
                disabled: !1,
                getActionText: function(e) {
                    return e
                },
                getUrl: function(e) {
                    return e || "#"
                },
                openInNewTab: !1,
                renderAs: f.Z,
                type: "button"
            };
            var T = (0, g.Z)(x);
            T.displayName = "CtaButton", T.propTypes = x.propTypes
        },
        32822: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return D
                }
            });
            var a, i, r = n(20606),
                o = n(24022),
                s = n(4670),
                l = n(83286),
                c = n(52322),
                d = n(37667),
                u = n.n(d),
                p = n(25237),
                m = n.n(p),
                h = n(13980),
                g = n.n(h),
                v = n(26490),
                f = n(52743),
                y = n(49528),
                _ = n(16),
                b = n(43612),
                x = n(57393),
                T = n(72979),
                I = n(61628),
                C = n(55265),
                N = {
                    stackedCta: "_148ocmyq",
                    stackedCtaMenu: "_3-eYpc7E",
                    stackedCtaMenuItem: "_1jJYzv3D",
                    "stackedCtaMenu-h_start": "_3U4-14XY",
                    "stackedCtaMenu-h_center": "_2R1JeD2F",
                    "stackedCtaMenu-h_end": "_2y1zvSGq",
                    "stackedCtaMenu-v_center": "_35gjrEU4",
                    "stackedCtaMenu-v_start": "_15gSJh6g",
                    "stackedCtaMenu-v_before": "_2cu26-Zv",
                    "stackedCtaMenu-v_end": "PZEBa9mq",
                    "stackedCtaMenu-v_after": "ZRGVfJ4H",
                    stackedCtaMenuVisible: "_1kDFP0Qg",
                    stackedCtaMenuList: "_8UTWh0HQ",
                    textLink: "_2rSiVp6P",
                    light: "qq6Id_p4",
                    dark: "_1s8aY_fH",
                    ctaTextOnDark: "_3YjJI-Gv",
                    ctaTextOnLight: "_3Ax-yJXK",
                    stackedCtaMenuNarrow: "_1FrAvpgc"
                },
                w = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = t.horizontal,
                        a = t.vertical;
                    return (0, v.Z)([N["stackedCtaMenu-h_".concat(n)], N["stackedCtaMenu-v_".concat(e ? "before" : a)], ])
                },
                S = function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 25;
                    return e + t * n
                },
                P = function(e) {
                    var t = e.cssProp,
                        n = e.duration,
                        a = e.timingFunc,
                        i = e.delay;
                    return "".concat(t, " ").concat(n, "ms ").concat(a, " ").concat(i, "ms")
                },
                L = function(e, t) {
                    return P({
                        cssProp: "transform",
                        delay: t,
                        duration: e,
                        timingFunc: "ease"
                    })
                },
                E = function(e, t) {
                    return P({
                        cssProp: "opacity",
                        delay: t,
                        duration: e,
                        timingFunc: "ease"
                    })
                },
                k = function(e, t) {
                    var n = e.horizontal,
                        a = "".concat(E(800, S(100, t)), ", ").concat(L(2e3, S(200, t)));
                    switch (n) {
                        case "start":
                            return {
                                opacity: 0,
                                transform: "translateX(-300%)",
                                transition: a
                            };
                        case "end":
                            return {
                                opacity: 0,
                                transform: "translateX(300%)",
                                transition: a
                            };
                        case "center":
                            return {
                                opacity: 0,
                                transition: E(200, S(100, t))
                            };
                        default:
                            return {}
                    }
                },
                O = function(e, t) {
                    var n = e.horizontal;
                    switch (n) {
                        case "start":
                        case "end":
                            return {
                                opacity: 1,
                                transform: "translateX(0)",
                                transition: "".concat(L(600, S(200, t)), ", ").concat(E(950, S(400, t)))
                            };
                        case "center":
                            return {
                                opacity: 1,
                                transition: E(2e3, S(100, t))
                            };
                        default:
                            return {}
                    }
                },
                j = n(16946),
                A = function(e) {
                    (0, T._)(n, e);
                    var t = (0, I._)(n);

                    function n() {
                        var e;
                        return (0, b._)(this, n), e = t.apply(this, arguments), (0, r._)((0, _._)(e), "state", {
                            menuEndState: {
                                height: 0,
                                width: 0
                            },
                            menuInitState: {
                                height: 0,
                                width: 0
                            },
                            showStackedCta: !1
                        }), (0, r._)((0, _._)(e), "stackedCtaRef", u().createRef()), (0, r._)((0, _._)(e), "stackedCtaMenuRef", u().createRef()), (0, r._)((0, _._)(e), "outsideClickEvents", ["click", "mousedown", "touchend", "scroll"]), (0, r._)((0, _._)(e), "showStackedCtaMenu", function(t) {
                            return function() {
                                t.filter(function(e) {
                                    return e.actionText
                                }).length > 0 && (e.setState({
                                    showStackedCta: !0
                                }), e.outsideClickEvents.forEach(function(t) {
                                    document.addEventListener(t, e.handleOutsideClick)
                                }))
                            }
                        }), (0, r._)((0, _._)(e), "handleOutsideClick", function(t) {
                            !(t && e.stackedCtaRef.current.contains(t.target)) && (e.setState({
                                showStackedCta: !1
                            }), e.outsideClickEvents.forEach(function(t) {
                                document.removeEventListener(t, e.handleOutsideClick)
                            }))
                        }), e
                    }
                    return (0, x._)(n, [{
                        key: "componentDidMount",
                        value: function() {
                            var e = this.stackedCtaRef.current,
                                t = this.stackedCtaMenuRef.current;
                            e && t && this.setState({
                                isMenuNarrow: e.firstChild.clientWidth > t.offsetWidth,
                                menuEndState: {
                                    height: t.offsetHeight,
                                    width: Math.max(e.firstChild.clientWidth, t.offsetWidth + 1)
                                },
                                menuInitState: {
                                    height: e.firstChild.clientHeight,
                                    width: e.firstChild.clientWidth
                                }
                            })
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            var e = this;
                            this.outsideClickEvents.forEach(function(t) {
                                document.removeEventListener(t, e.handleOutsideClick)
                            })
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this,
                                t = this.props,
                                n = t.actionButton,
                                a = t.index,
                                i = t.colorTheme,
                                r = t.dataQa,
                                l = t.isMenuOnTop,
                                d = n.actions,
                                u = n.textLocation,
                                p = this.state,
                                m = p.showStackedCta,
                                h = p.menuInitState,
                                g = p.menuEndState,
                                f = p.isMenuNarrow;
                            return (0, c.jsxs)("div", {
                                className: N.stackedCta,
                                ref: this.stackedCtaRef,
                                children: [(0, c.jsx)(C.d, (0, s._)((0, o._)({
                                    dataQa: r,
                                    index: a
                                }, n), {
                                    colorTheme: i,
                                    handleClick: this.showStackedCtaMenu(d),
                                    renderAs: "button"
                                })), (0, c.jsx)("div", {
                                    style: {
                                        height: "".concat(m ? g.height : h.height, "px"),
                                        width: "".concat(m ? g.width : h.width, "px")
                                    },
                                    className: (0, v.Z)(N.stackedCtaMenu, N[i], w(l, u), m ? N.stackedCtaMenuVisible : ""),
                                    children: (0, c.jsx)("ul", {
                                        ref: this.stackedCtaMenuRef,
                                        className: (0, v.Z)(N.stackedCtaMenuList, N[i], f && N.stackedCtaMenuNarrow),
                                        tabIndex: m ? 0 : -1,
                                        children: d.map(function(t, n) {
                                            var l = e.context.isMobile ? {
                                                    horizontal: "start"
                                                } : u,
                                                d = m ? O(l, n) : k(l, n);
                                            return (0, c.jsx)("li", {
                                                className: N.stackedCtaMenuItem,
                                                style: (0, o._)({}, d),
                                                children: (0, c.jsx)(C.d, (0, s._)((0, o._)({
                                                    dataQa: r,
                                                    index: a + n
                                                }, t), {
                                                    colorTheme: !0,
                                                    className: (0, v.Z)(N.textLink, "light" === i ? N.ctaTextOnLight : N.ctaTextOnDark)
                                                }))
                                            }, "cta-button-".concat(a + n))
                                        })
                                    })
                                })]
                            })
                        }
                    }]), n
                }(d.Component);
            (0, r._)(A, "contextType", j.l3), A.propTypes = {
                actionButton: g().shape({
                    actionType: y.WP,
                    actions: y.kK,
                    textLocation: g().shape(y.yj)
                }),
                colorTheme: g().oneOf(["dark", "light"]),
                dataQa: g().string,
                index: g().number,
                isMenuOnTop: g().bool
            }, A.defaultProps = {
                colorTheme: "dark"
            };
            var R = n(77482),
                U = m()(function() {
                    return Promise.all([n.e(259), n.e(388)]).then(n.bind(n, 50388)).then(function(e) {
                        return e.ShopTheLook
                    })
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [50388]
                        }
                    }
                }),
                M = m()(function() {
                    return Promise.all([n.e(259), n.e(388)]).then(n.bind(n, 50388)).then(function(e) {
                        return e.ShopTheLookButton
                    })
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [50388]
                        }
                    }
                }),
                B = m()(function() {
                    return Promise.all([n.e(259), n.e(9)]).then(n.bind(n, 95009)).then(function(e) {
                        return e.NotifyMeButtonContainer
                    })
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [95009]
                        }
                    }
                }),
                Z = m()(function() {
                    return Promise.all([n.e(259), n.e(0)]).then(n.bind(n, 64e3)).then(function(e) {
                        return e.IframeModal
                    })
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [64e3]
                        }
                    }
                }),
                H = (a = {}, (0, r._)(a, f.vc.BUTTON, !0), (0, r._)(a, f.vc.LINK, !0), (0, r._)(a, f.vc.BUYING_TOOLS, !0), a),
                D = function(e) {
                    var t = e.actionButtons,
                        n = e.colorTheme,
                        a = e.handleClick,
                        r = e.addTopSpacing,
                        u = e.className,
                        p = e.dataQa,
                        m = e.analyticsItemId,
                        h = (0, l._)(e, ["actionButtons", "colorTheme", "handleClick", "addTopSpacing", "className", "dataQa", "analyticsItemId"]);
                    return t && 0 !== t.length ? (0, c.jsx)("div", {
                        className: (0, v.Z)(r && R.Z.addTopSpacing, u),
                        "data-qa": "cta-container",
                        children: t.map(function(e, r) {
                            var l, u, g = t.slice(0, r).reduce(function(e, t) {
                                var n;
                                return H[t.actionType] ? e + 1 : e + (null !== (i = null === (n = t.actions) || void 0 === n ? void 0 : n.length) && void 0 !== i ? i : 0)
                            }, 0);
                            return e.destinationType === f.tG.PRODUCT_COLLECTION ? (0, c.jsx)(U, {
                                analyticsItemId: m,
                                actionText: e.actionText,
                                id: e.id,
                                children: function(t) {
                                    var a = t.handleOpenModal;
                                    return (0, c.jsx)(M, (0, s._)((0, o._)({
                                        handleClick: a,
                                        actionText: e.actionText,
                                        renderAs: "button",
                                        type: "button",
                                        colorTheme: n,
                                        id: e.id,
                                        allowAnalytics: !0
                                    }, h), {
                                        children: e.actionText
                                    }))
                                }
                            }, "stl-button-".concat(g)) : e.actionType === f.vc.STACKED_CTA ? (0, c.jsx)(A, (0, o._)({
                                dataQa: p,
                                index: g,
                                actionButton: e,
                                colorTheme: n
                            }, h), "cta-button-".concat(g)) : e.actionType === f.vc.BUYING_TOOLS ? (0, d.createElement)(B, (0, o._)((0, s._)((0, o._)({}, e), {
                                key: "cta-buying-tools-".concat(g),
                                dataQa: p,
                                index: g,
                                colorTheme: n,
                                handleClick: e.handleClick || a
                            }), h)) : e.destinationType === f.tG.POPUP ? (0, c.jsx)(Z, {
                                src: e.destinationId,
                                title: e.actionText,
                                actionId: e.id,
                                children: function(t) {
                                    var a = t.onClick;
                                    return (0, c.jsx)(C.d, (0, s._)((0, o._)({
                                        handleClick: a,
                                        actionText: e.actionText,
                                        renderAs: "button",
                                        type: "button",
                                        colorTheme: n,
                                        id: e.id,
                                        allowAnalytics: !0
                                    }, h), {
                                        children: e.actionText
                                    }))
                                }
                            }, "iframe-modal-".concat(g)) : (0, d.createElement)(C.d, (0, o._)((0, s._)((0, o._)({}, e), {
                                key: "cta-".concat(e.actionType === f.vc.BUTTON ? "button" : "text-link", "-").concat(g),
                                dataQa: p,
                                colorTheme: n,
                                handleClick: e.handleClick || a
                            }), h))
                        })
                    }) : null
                };
            D.propTypes = {
                actionButtons: y.a6,
                addTopSpacing: g().bool,
                analyticsItemId: g().string,
                className: g().string,
                colorTheme: y.Pg,
                dataQa: g().string,
                handleClick: g().func
            }, D.defaultProps = {
                colorTheme: "dark"
            }
        },
        22757: function(e, t, n) {
            "use strict";
            n.d(t, {
                z: function() {
                    return f
                }
            });
            var a = n(24022),
                i = n(4670),
                r = n(52322),
                o = n(37667),
                s = n(13980),
                l = n.n(s),
                c = n(17635),
                d = n(52743),
                u = n(77670),
                p = n(24228),
                m = n(51539),
                h = function(e, t) {
                    var n = (0, o.useState)(e),
                        a = n[0],
                        i = n[1];
                    return (0, o.useEffect)(function() {
                        setTimeout(function() {
                            i(e)
                        }, t)
                    }, [e, t]), a
                },
                g = function(e) {
                    var t, a, i = (0, p.j)(null === (t = n.g.webShellClient) || void 0 === t ? void 0 : t.identity.getIsLoggedIn),
                        r = (0, p.j)(null === (a = n.g.webShellClient) || void 0 === a ? void 0 : a.identity.getInitialized),
                        o = (0, c.v9)(function(e) {
                            return d.wl.translationSelector(e, "member_only_login_label")
                        }),
                        s = h(!r, 100);
                    if (!e.memberOnly) return {};
                    var l = !i,
                        u = e.actionType === d.vc.BUTTON,
                        g = l || s ? "button" : e.renderAs,
                        v = "#interests" === e.destinationId;
                    return {
                        allowAnalytics: !0,
                        handleClick: function(t) {
                            var n;
                            l && (v && ((0, m.s)("smi_welcome", "true"), (0, m.s)("smi_scrollPosition", document.documentElement.scrollTop)), window.webShellClient.identity.signIn()), null == e || null === (n = e.handleClick) || void 0 === n || n.call(e, t)
                        },
                        isButtonType: u,
                        isMemberOnlyNotLogged: l,
                        isShopMyInterestsAction: v,
                        loginLabel: o,
                        renderAs: g,
                        showPlaceholder: s
                    }
                },
                v = function(e) {
                    return function(t) {
                        var n = g(t),
                            o = function(e) {
                                return !n.isMemberOnlyNotLogged && (e || "#") || void 0
                            },
                            s = function(e, t) {
                                return n.isMemberOnlyNotLogged && t && !n.isShopMyInterestsAction ? "".concat(n.loginLabel, " ").concat(e) : e
                            };
                        return (0, r.jsx)(e, (0, a._)((0, i._)((0, a._)({}, t), {
                            getUrl: o,
                            getActionText: s
                        }), n))
                    }
                };
            t.Z = v;
            var f = {
                getActionText: l().func,
                getUrl: l().func,
                isButtonType: l().bool,
                loginLabel: l().string,
                memberOnly: l().bool,
                renderAs: l().oneOf(["button", "a", u.Z]),
                showPlaceholder: l().bool
            }
        },
        24228: function(e, t, n) {
            "use strict";
            n.d(t, {
                j: function() {
                    return c
                }
            });
            var a = n(32670),
                i = n(56503),
                r = n(99267),
                o = n(37667),
                s = n(17635),
                l = n(52743),
                c = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                        n = (0, s.v9)(l.wl.identityStateSelector, s.wU),
                        c = (0, o.useState)(null),
                        d = c[0],
                        u = c[1];
                    return (0, o.useEffect)(function() {
                        var o;
                        (o = (0, a._)(function() {
                            var a;
                            return (0, r.Jh)(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        if (!n.initialized || !e) return [3, 2];
                                        return [4, e.apply(void 0, (0, i._)(t))];
                                    case 1:
                                        u(a.sent()), a.label = 2;
                                    case 2:
                                        return [2]
                                }
                            })
                        }), function() {
                            return o.apply(this, arguments)
                        })()
                    }, [n, e, t]), d
                }
        },
        7269: function(e, t, n) {
            "use strict";
            n.d(t, {
                x: function() {
                    return R
                },
                Z: function() {
                    return U
                }
            });
            var a, i, r, o, s = n(24022),
                l = n(52322),
                c = n(37667),
                d = n(13980),
                u = n.n(d),
                p = n(26490),
                m = n(52743),
                h = n(49528),
                g = n(16946),
                v = n(65620),
                f = n(4670),
                y = n(83286),
                _ = n(36386),
                b = n.n(_),
                x = n(53788),
                T = n(8552),
                I = function(e) {
                    var t = e.portraitURL,
                        n = e.landscapeURL,
                        a = e.setResolvedUrl;
                    return function(e, i) {
                        var r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                        e.forEach(function(e) {
                            if (e.contentRect.width) {
                                var i, o = (0, x.x4)(),
                                    s = Math.floor(e.contentRect.width),
                                    l = Math.floor(e.contentRect.height),
                                    c = Number(e.target.dataset.requestedWidth) || 0,
                                    d = "true" === e.target.dataset.isPortraitImageRequested;
                                if (s / c > 1.15 || d !== o || r) {
                                    var u = (0, T.eI)(e.target);
                                    (null == u ? void 0 : u.hasAttributes("data-landscape-url", "data-portrait-url")) && (null === (i = u.dataset) || void 0 === i ? void 0 : i.lcpLoaded) && (u.dataset.lcpLoaded = "false"), e.target.dataset.requestedWidth = "".concat(s), e.target.dataset.requestedHeight = "".concat(l), e.target.dataset.isPortraitImageRequested = "".concat(o), a((0, T.sG)({
                                        dimensionType: {
                                            isPortrait: o
                                        },
                                        height: l,
                                        imageRef: e.target,
                                        landscapeURL: n,
                                        portraitURL: t,
                                        width: s
                                    }))
                                }
                            }
                        })
                    }
                },
                C = function(e) {
                    var t = e.children,
                        n = e.portraitURL,
                        a = e.landscapeURL,
                        i = (0, y._)(e, ["children", "portraitURL", "landscapeURL"]),
                        r = (0, c.useState)(null),
                        o = r[0],
                        d = r[1],
                        u = (0, c.useRef)(null);
                    return (0, c.useEffect)(function() {
                        var e = I({
                                landscapeURL: a,
                                portraitURL: n,
                                setResolvedUrl: d
                            }),
                            t = b()(e, 100),
                            i = new ResizeObserver(t);
                        return i.observe(u.current), e([{
                                contentRect: {
                                    height: u.current.clientHeight,
                                    width: u.current.clientWidth
                                },
                                target: u.current
                            }], i, !0),
                            function() {
                                i.disconnect()
                            }
                    }, [n, a]), (0, l.jsx)("div", (0, f._)((0, s._)({
                        style: {
                            height: "100%",
                            width: "100%"
                        }
                    }, i.dataAttrs), {
                        ref: u,
                        children: t(o)
                    }))
                };
            C.propTypes = {
                children: u().func.isRequired,
                dataAttrs: u().shape({
                    "data-qa": u().string
                }),
                landscapeURL: u().string.isRequired,
                portraitURL: u().string.isRequired
            };
            var N = n(48245),
                w = "-200%",
                S = {
                    "2g": w,
                    "3g": "-150%",
                    "4g": "-100%",
                    "slow-2g": w
                },
                P = function() {
                    var e, t = window.navigator,
                        n = t.connection || t.mozConnection || t.webkitConnection;
                    return null !== (e = S[null == n ? void 0 : n.effectiveType]) && void 0 !== e ? e : w
                },
                L = function(e) {
                    var t = e.onLoad,
                        n = e.children,
                        a = e.bottomOffset,
                        i = (0, c.useState)(!1),
                        r = i[0],
                        o = i[1],
                        s = (0, c.useState)(a),
                        d = s[0],
                        u = s[1];
                    (0, c.useEffect)(function() {
                        u(P())
                    }, []);
                    var p = function() {
                            r || o(!0)
                        },
                        m = function() {
                            null == t || t()
                        };
                    return (0, l.jsx)(N.h, {
                        onEnter: p,
                        bottomOffset: d,
                        children: n({
                            isVisible: r,
                            onLoad: m
                        })
                    })
                };
            L.propTypes = {
                bottomOffset: u().oneOfType([u().string, u().number]),
                children: u().func,
                onLoad: u().func
            }, L.defaultProps = {
                bottomOffset: "0px"
            };
            var E = n(20606),
                k = {
                    "v-top": "_35xLuE3O",
                    "h-left": "_1Qt5anZU",
                    withHardCrop: "_1DI42-I8",
                    "h-center": "_3jm9Bm_E",
                    "h-right": "_33DgqET6",
                    "v-middle": "_32IPZERI",
                    "v-bottom": "_2u0Qo1xj",
                    imageMedia: "_1J1k7Sv3",
                    imageWithoutSensor: "_2cKlr7_w",
                    loadedImage: "guL_1FMX",
                    overlayedMaintainImage: "_2TUCh3j2"
                },
                O = function(e) {
                    var t = e.draggable,
                        n = e.onLoad,
                        r = e.focalPoint,
                        o = e.altText,
                        s = e.url,
                        c = e.isImageLoaded,
                        d = e.innerRef,
                        u = e.className,
                        m = e.portraitURL,
                        h = e.landscapeURL;
                    return (0, l.jsx)("img", {
                        ref: d,
                        draggable: t,
                        "data-qa": "image-media-img",
                        alt: o,
                        className: (0, p.Z)(u, k["v-".concat(null !== (a = null == r ? void 0 : r.vertical) && void 0 !== a ? a : "center")], k["h-".concat(null !== (i = null == r ? void 0 : r.horizontal) && void 0 !== i ? i : "center")], (0, E._)({}, k.withHardCrop, null == r ? void 0 : r.hardCrop), c && k.loadedImage),
                        src: s,
                        "data-landscape-url": h,
                        "data-portrait-url": m,
                        "data-image-loaded-class": k.loadedImage,
                        onLoad: n
                    })
                };
            O.propTypes = {
                altText: u().string,
                className: u().string,
                draggable: u().bool,
                focalPoint: h.j1,
                innerRef: u().func,
                isImageLoaded: u().bool,
                landscapeURL: u().string,
                onLoad: u().func,
                portraitURL: u().string,
                url: u().string
            };
            var j = function(e) {
                var t = e.onLoad,
                    n = e.focalPoint,
                    a = e.url,
                    i = e.isImageLoaded,
                    s = e.innerRef;
                return (0, l.jsx)("video", {
                    onCanPlayThrough: t,
                    autoPlay: !0,
                    loop: !0,
                    playsInline: !0,
                    muted: !0,
                    ref: s,
                    src: a,
                    className: (0, p.Z)(k["v-".concat(null !== (r = null == n ? void 0 : n.vertical) && void 0 !== r ? r : "center")], k["h-".concat(null !== (o = null == n ? void 0 : n.horizontal) && void 0 !== o ? o : "center")], (0, E._)({}, k.withHardCrop, null == n ? void 0 : n.hardCrop), i && k.loadedImage)
                })
            };
            j.propTypes = {
                focalPoint: h.j1,
                innerRef: u().func,
                isImageLoaded: u().bool,
                onLoad: u().func,
                url: u().string
            };
            var A = n(51179),
                R = function(e) {
                    var t = (0, c.useState)(!1),
                        n = t[0],
                        a = t[1],
                        i = (0, g.Z8)(),
                        r = i.isPortrait,
                        o = i.orientation,
                        d = e.altText,
                        u = e.portraitURL,
                        h = e.landscapeURL,
                        f = e.customClass,
                        y = e.landscapeFocalPoint,
                        _ = e.portraitFocalPoint,
                        b = e.draggable,
                        x = e.assetsAspectRatios,
                        T = e.loadedImageClassNames,
                        I = e.imageHeight,
                        N = e.useVisibilitySensor,
                        w = void 0 === N || N,
                        S = e.onImageLoad,
                        P = e.captionProps,
                        E = void 0 === P ? {} : P,
                        R = e.hasBelowLayout,
                        U = (0, c.useCallback)(function() {
                            a(!0), null == S || S()
                        }, [S]);
                    (0, c.useEffect)(function() {
                        (u || h) && a(!1)
                    }, [u, h]);
                    var M = r || !h ? _ : y,
                        B = function(e, t) {
                            return e ? t : ""
                        };
                    return (0, l.jsxs)(v.Z, {
                        aspectRatios: x,
                        orientation: o,
                        "data-qa": "image-wrapper",
                        className: (0, p.Z)(f, k.imageMedia, "media-container", n && T, I === m.t_.MAINTAIN && !R && k.overlayedMaintainImage),
                        children: [(0, l.jsx)(C, {
                            dataAttrs: {
                                "data-qa": "image-media"
                            },
                            portraitURL: u,
                            landscapeURL: h,
                            children: function(e) {
                                return w ? (0, l.jsx)(L, {
                                    onLoad: U,
                                    children: function(t) {
                                        var a = t.isVisible,
                                            i = void 0 === a || a,
                                            r = t.onLoad;
                                        return (null == e ? void 0 : e.includes(".gif")) ? (0, l.jsx)(j, {
                                            isImageLoaded: n,
                                            focalPoint: M,
                                            url: B(i, e),
                                            onLoad: r
                                        }) : (0, l.jsx)(O, {
                                            draggable: b,
                                            altText: d,
                                            isImageLoaded: n,
                                            focalPoint: M,
                                            url: B(i, e),
                                            onLoad: r,
                                            portraitURL: u,
                                            landscapeURL: h
                                        })
                                    }
                                }) : (0, l.jsx)(O, {
                                    url: e,
                                    className: k.imageWithoutSensor,
                                    draggable: b,
                                    altText: d,
                                    focalPoint: M,
                                    onLoad: U,
                                    isImageLoaded: n,
                                    portraitURL: u,
                                    landscapeURL: h
                                })
                            }
                        }), "" !== E.text && E.position === m.KZ.OVERLAY && (0, l.jsx)(A.HB, (0, s._)({}, E))]
                    })
                };
            R.displayName = "ImageMedia", R.propTypes = {
                altText: u().string.isRequired,
                assetsAspectRatios: h.LD,
                captionProps: h.LF,
                customClass: u().string,
                draggable: u().bool,
                hasBelowLayout: u().bool,
                imageHeight: u().oneOf(h.eM),
                landscape: h.BW,
                landscapeFocalPoint: h.j1,
                landscapeURL: u().string.isRequired,
                loadedImageClassNames: u().arrayOf(u().string),
                onImageLoad: u().func,
                portrait: h.BW,
                portraitFocalPoint: h.j1,
                portraitURL: u().string.isRequired,
                useVisibilitySensor: u().bool
            }, R.defaultProps = {
                assetsAspectRatios: {},
                landscape: null,
                loadedImageClassNames: [],
                portrait: null
            };
            var U = R
        },
        77670: function(e, t, n) {
            "use strict";
            var a = n(24022),
                i = n(4670),
                r = n(83286),
                o = n(52322);
            n(37667);
            var s = n(13980),
                l = n.n(s),
                c = function(e) {
                    var t = e.href,
                        n = e.label,
                        s = e.target,
                        l = e.children,
                        c = (0, r._)(e, ["href", "label", "target", "children"]);
                    return (0, o.jsx)("a", (0, i._)((0, a._)({
                        href: t,
                        target: s
                    }, "_blank" === s && {
                        rel: "noopener"
                    }, c), {
                        children: l || n
                    }))
                };
            c.propTypes = {
                children: l().node,
                href: l().string,
                label: l().string,
                onClick: l().func,
                target: l().string
            }, t.Z = c
        },
        83336: function(e, t, n) {
            "use strict";
            n.d(t, {
                t: function() {
                    return p
                }
            });
            var a = n(52322);
            n(37667);
            var i = n(13980),
                r = n.n(i),
                o = n(8224),
                s = n(67862),
                l = n(81753),
                c = n.n(l);

            function d() {
                var e = (0, s._)(["\n  text-align: right;\n  display: inline-block;\n\n  ", " {\n    white-space: nowrap;\n  }\n\n  ", " + ", " {\n    padding-left: 4px;\n  }\n"]);
                return d = function() {
                    return e
                }, e
            }
            var u = c().span(d(), o.i, o.i, o.i),
                p = function(e) {
                    var t = e.listPrice,
                        n = e.salePrice,
                        i = e.isOnSale;
                    return (0, a.jsxs)(u, {
                        "data-qa": "price-wrapper",
                        className: "price-wrapper",
                        children: [(0, a.jsx)(o.i, {
                            Component: "span",
                            className: i ? "original-price" : "price",
                            display: "inline",
                            appearance: "body2",
                            bold: !0,
                            color: i ? "secondary" : "primary",
                            strikethrough: i,
                            children: t
                        }), i && (0, a.jsx)(o.i, {
                            Component: "span",
                            className: "sale-price",
                            bold: !0,
                            display: "inline",
                            appearance: "body2",
                            children: n
                        })]
                    })
                };
            p.propTypes = {
                isOnSale: r().bool,
                listPrice: r().string,
                salePrice: r().string
            }
        },
        43887: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return m
                }
            });
            var a = n(20606),
                i = n(52322);
            n(37667);
            var r = n(13980),
                o = n.n(r),
                s = n(26490),
                l = n(8224),
                c = n(77670),
                d = n(51179),
                u = {
                    headline: "_355YWnGn mb6-sm",
                    sectionHeadlineContent: "_17O3hgwI",
                    sectionHeadlineContentWithActions: "_3C5UmoRu",
                    sectionHeadlineTitle: "_30s4ARyE",
                    toggleWrapper: "_16Zkze1y",
                    copy: "_2PzKMD0A",
                    link: "_1rRiR9Xx ncss-cta-primary-dark",
                    "title-align-center": "_24uJ05su",
                    "title-align-start": "_zLh0ZOZ",
                    "title-align-end": "_6I2bi06o"
                },
                p = function(e) {
                    var t = e.analyticsItemId,
                        n = e.actions,
                        r = e.title,
                        o = e.subtitle,
                        p = e.withH1,
                        m = e.className,
                        h = e.containerClassName,
                        g = e.textLocation,
                        v = e.titleProps,
                        f = e.ToggleComponent;
                    if (!r) return null;
                    var y, _, b, x = v.fontFamily,
                        T = v.fontSize,
                        I = v.fontStyle,
                        C = v.textColor,
                        N = n && 0 !== n.length && n[0].destinationId ? n[0] : null,
                        w = !!f,
                        S = u["title-align-".concat(g.horizontal)],
                        P = "title-".concat(t);
                    return (0, i.jsxs)(i.Fragment, {
                        children: [o && (0, i.jsx)(l.i, {
                            Component: "p",
                            appearance: "title4",
                            className: "mb1-sm",
                            children: o
                        }), (0, i.jsxs)("div", {
                            "data-analytics-placement-id": t,
                            "data-qa": "section-headline",
                            className: (0, s.Z)(u.headline, h),
                            children: [(0, i.jsxs)("div", {
                                className: (0, s.Z)(u.sectionHeadlineContent, (0, a._)({}, u.sectionHeadlineContentWithActions, w || N)),
                                children: [(0, i.jsx)(d.eN, {
                                    text: r,
                                    customClassName: (0, s.Z)((0, a._)({}, u.sectionHeadlineTitle, w), S, u.copy, m),
                                    fontFamily: void 0 === x ? "base" : x,
                                    fontSize: T,
                                    textColor: C,
                                    fontStyle: I,
                                    renderAs: p ? "h1" : "h2",
                                    id: P
                                }), N && (0, i.jsx)(c.Z, {
                                    "data-analytics-action-id": N.id,
                                    className: (0, s.Z)("btn-lg", u.link),
                                    href: N.destinationId,
                                    target: (null == N ? void 0 : N.openInNewTab) ? "_blank" : "_self",
                                    "aria-describedby": P,
                                    children: N.actionText
                                })]
                            }), w && (0, i.jsx)("div", {
                                className: u.toggleWrapper,
                                children: f
                            })]
                        })]
                    })
                };
            p.propTypes = {
                ToggleComponent: o().element,
                actions: o().arrayOf(o().shape({
                    actionText: o().string.isRequired,
                    actionType: o().string.isRequired,
                    destinationId: o().string.isRequired,
                    destinationType: o().string
                })),
                analyticsItemId: o().string,
                className: o().string,
                containerClassName: o().string,
                subtitle: o().string,
                textLocation: o().shape({
                    horizontal: o().string,
                    vertical: o().string
                }),
                title: o().string.isRequired,
                titleProps: o().shape({
                    colorTheme: o().string,
                    fontFamily: o().string,
                    fontSize: o().string,
                    fontStyle: o().string,
                    textColor: o().string
                }),
                withH1: o().bool
            }, p.defaultProps = {
                actions: [],
                textLocation: {},
                titleProps: {}
            };
            var m = p
        },
        51179: function(e, t, n) {
            "use strict";
            n.d(t, {
                Ac: function() {
                    return N
                },
                HB: function() {
                    return w
                },
                tt: function() {
                    return P
                },
                eN: function() {
                    return S
                }
            });
            var a, i = n(24022),
                r = n(83286),
                o = n(52322),
                s = n(37667),
                l = n(49389),
                c = n(26490),
                d = n(46477),
                u = n(21315),
                p = n(8224),
                m = n(49528),
                h = n(16946),
                g = n(42975),
                v = n(20606),
                f = {
                    subtitle: "vVtA7wL6",
                    fontStyle_oblique: "_2caYxkYp",
                    fontStyle_medium: "_1MF91zHG",
                    caption: "_2JgqWhO4"
                },
                y = function(e) {
                    return {
                        extra_large: e,
                        extra_small: e,
                        large: e,
                        medium: e,
                        small: e
                    }
                },
                _ = function(e) {
                    return {
                        base: e,
                        brand: e,
                        marketing: e
                    }
                },
                b = (a = {}, (0, v._)(a, l.aU.NIKE, {
                    body: _({
                        extra_large: "editorialBody1",
                        extra_small: "body1",
                        large: "editorialBody1",
                        medium: "editorialBody1",
                        small: {
                            large: "editorialBody1",
                            small: "body1"
                        }
                    }),
                    subtitle: _(y("body1Strong")),
                    title: {
                        base: {
                            extra_large: "title2",
                            extra_small: "body1Strong",
                            large: "title3",
                            medium: "title3",
                            small: "title4"
                        },
                        brand: y("display2"),
                        marketing: {
                            extra_large: "display2",
                            extra_small: {
                                large: "display4",
                                small: "display2"
                            },
                            large: "display2",
                            medium: "display2",
                            small: {
                                large: "display4",
                                small: "display2"
                            }
                        }
                    }
                }), (0, v._)(a, l.aU.NIKE_JOURNAL, {
                    body: _({
                        extra_large: "editorialBody1",
                        extra_small: "body1",
                        large: "editorialBody1",
                        medium: "editorialBody1",
                        small: {
                            large: "editorialBody1",
                            small: "body1"
                        }
                    }),
                    subtitle: _(y("body1Strong")),
                    title: {
                        base: {
                            extra_large: "title2",
                            extra_small: "title4",
                            large: "title3",
                            medium: "title3",
                            small: "title4"
                        },
                        brand: {
                            extra_large: "display1",
                            extra_small: "display4",
                            large: "display2",
                            medium: "display2",
                            small: "display4"
                        },
                        marketing: {
                            extra_large: "display1",
                            extra_small: "display4",
                            large: "display2",
                            medium: "display2",
                            small: "display4"
                        }
                    }
                }), (0, v._)(a, l.aU.JORDAN, {
                    body: _({
                        extra_large: "editorialBody1",
                        extra_small: "body1Strong",
                        large: "editorialBody1",
                        medium: "editorialBody1",
                        small: {
                            large: "editorialBody1",
                            small: "body1Strong"
                        }
                    }),
                    subtitle: _(y("body1Strong")),
                    title: {
                        base: {
                            extra_large: "title2",
                            extra_small: "body1Strong",
                            large: "title2",
                            medium: "title3",
                            small: "title4"
                        },
                        brand: {
                            extra_large: "display2",
                            extra_small: "display3",
                            large: "display2",
                            medium: "display2",
                            small: "display3"
                        },
                        marketing: y({
                            large: "display4",
                            small: "display2"
                        })
                    }
                }), a),
                x = function(e, t, n, a, i) {
                    var r, o, s, c, d = null !== (c = null === (r = (null !== (s = b[t]) && void 0 !== s ? s : b[t][l.aU.NIKE])[e]) || void 0 === r ? void 0 : null === (o = r[n]) || void 0 === o ? void 0 : o[a]) && void 0 !== c ? c : "";
                    return "object" == typeof d ? i ? d.large : d.small : d
                },
                T = function(e) {
                    return "string" == typeof e && !e.trim()
                },
                I = {
                    medium: f.fontStyle_medium,
                    oblique: f.fontStyle_oblique
                },
                C = function(e, t) {
                    var n = t === l.aU.JORDAN,
                        a = t === l.aU.NIKE,
                        i = e.startsWith("display"),
                        r = e.startsWith("title");
                    return n && (i || r) || a && i
                },
                N = function(e) {
                    var t = e.appearance,
                        n = e.text,
                        a = (e.colorTheme, e.fontFamily),
                        m = e.fontSize,
                        v = e.fontStyle,
                        f = e.textColor,
                        y = e.customClassName,
                        _ = e.renderAs,
                        b = (e.fontSizeSet, (0, r._)(e, ["appearance", "text", "colorTheme", "fontFamily", "fontSize", "fontStyle", "textColor", "customClassName", "renderAs", "fontSizeSet"])),
                        C = (0, s.useContext)(h.Fh),
                        N = (0, d.a)((0, u.G)("gte", "m")),
                        w = null != t ? t : x("body", C, a, m, N),
                        S = [y];
                    return (C === l.aU.NIKE_JOURNAL && S.push("mt3-sm"), C === l.aU.NIKE && S.push("mt6-sm"), T(n)) ? null : (0, o.jsx)(p.i, (0, i._)({
                        "data-qa": "body",
                        Component: _,
                        appearance: w,
                        className: (0, c.Z)(y, "mt2-sm", I[v]),
                        bold: "medium" === v,
                        color: f,
                        dangerouslySetInnerHTML: (0, g.K)(n)
                    }, b))
                };
            N.displayName = "BodyText", N.propTypes = m.SH, N.defaultProps = {
                colorTheme: "dark",
                fontFamily: "base",
                fontSize: "extra_small",
                fontStyle: "regular",
                renderAs: "p",
                text: null,
                textColor: null
            };
            var w = function(e) {
                var t = e.text,
                    n = e.position,
                    a = e.textColor,
                    i = (0, s.useContext)(h.Fh) === l.aU.JORDAN ? "body3" : "body3Strong";
                return T(t) ? null : (0, o.jsx)("div", {
                    "data-qa": "caption",
                    className: (0, c.Z)([f.caption, n]),
                    children: (0, o.jsx)(p.i, {
                        Component: "p",
                        appearance: i,
                        color: a,
                        dangerouslySetInnerHTML: (0, g.K)(t)
                    })
                })
            };
            w.displayName = "CaptionText", w.propTypes = m.SH, w.defaultProps = {
                colorTheme: "dark",
                text: null,
                textColor: null
            };
            var S = function(e) {
                var t = e.appearance,
                    n = e.text,
                    a = e.fontFamily,
                    i = e.fontSize,
                    r = e.fontStyle,
                    l = e.textColor,
                    m = e.customClassName,
                    v = e.renderAs,
                    f = (0, s.useContext)(h.Fh),
                    y = (0, d.a)((0, u.G)("gte", "m"));
                if (T(n)) return null;
                var _ = [m, I[r]],
                    b = null != t ? t : x("title", f, a, i, y),
                    N = C(b, f);
                return (0, o.jsx)(p.i, {
                    "data-qa": "title",
                    Component: v,
                    appearance: b,
                    className: (0, c.Z)(_),
                    weight: r,
                    uppercase: N,
                    color: l,
                    dangerouslySetInnerHTML: (0, g.K)(n)
                })
            };
            S.displayName = "TitleText", S.propTypes = m.SH, S.defaultProps = {
                colorTheme: "dark",
                fontFamily: "marketing",
                fontSize: "medium",
                fontStyle: "regular",
                renderAs: "h3",
                text: null,
                textColor: null
            };
            var P = function(e) {
                var t = e.appearance,
                    n = e.text,
                    a = e.fontFamily,
                    i = e.fontSize,
                    r = e.fontStyle,
                    l = e.textColor,
                    d = e.customClassName,
                    u = e.renderAs,
                    m = (0, s.useContext)(h.Fh),
                    v = null != t ? t : x("subtitle", m, a, i);
                return T(n) ? null : (0, o.jsx)(p.i, {
                    Component: u,
                    "data-qa": "subtitle",
                    appearance: v,
                    className: (0, c.Z)(d, I[r], f.subtitle),
                    color: l,
                    dangerouslySetInnerHTML: (0, g.K)(n)
                })
            };
            P.displayName = "Subtitle", P.propTypes = m.SH, P.defaultProps = {
                colorTheme: "dark",
                fontFamily: "base",
                fontSize: "extra_small",
                fontStyle: "regular",
                renderAs: "p",
                text: null,
                textColor: null
            }
        },
        83628: function(e, t, n) {
            "use strict";
            n.d(t, {
                Aw: function() {
                    return a
                },
                NP: function() {
                    return o
                },
                NW: function() {
                    return r
                },
                Ob: function() {
                    return i
                }
            });
            var a = "videoAnalyticsLpEvent",
                i = 2,
                r = {
                    CANPLAY: "canplay",
                    DISPOSE: "dispose",
                    ENDED: "ended",
                    FULLSCREENCHANGE: "fullscreenchange",
                    LOADEDDATA: "loadeddata",
                    LOADEDMETADATA: "loadedmetadata",
                    LOADSTART: "loadstart",
                    PAUSE: "pause",
                    PLAY: "play",
                    PLAYERRESIZE: "playerresize",
                    PREVIEW_STARTED: "previewstarted",
                    PREVIEW_STOPPED: "previewstopped",
                    SEEKING: "seeking",
                    STATECHANGED: "statechanged",
                    TEXT_TRACK_CHANGE: "texttrackschange",
                    VOLUMECHANGE: "volumechange"
                },
                o = {
                    HIDDEN: "vjs-hidden",
                    INITIATED_BY_USER: "vjs-initiated-by-user",
                    POSTER_INACTIVE: "vjs-poster-inactive"
                }
        },
        32434: function(e, t, n) {
            "use strict";
            n.d(t, {
                DG: function() {
                    return f
                },
                HJ: function() {
                    return u
                },
                Jv: function() {
                    return g
                },
                KB: function() {
                    return m
                },
                T2: function() {
                    return s
                },
                T5: function() {
                    return v
                },
                be: function() {
                    return h
                },
                mr: function() {
                    return d
                },
                oN: function() {
                    return p
                },
                vD: function() {
                    return c
                },
                x3: function() {
                    return y
                }
            });
            var a = n(56503),
                i = n(4022),
                r = n(52743),
                o = n(62649),
                s = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return (null == t ? void 0 : t.actionType) ? (0, a._)(e).concat([t]) : e
                },
                l = function(e) {
                    var t;
                    return e.mozHasAudio || !!e.webkitAudioDecodedByteCount || (null == e ? void 0 : null === (t = e.audioTracks) || void 0 === t ? void 0 : t.length) > 0
                },
                c = function(e) {
                    var t = l(e.tech().el()),
                        n = e.options();
                    switch (!0) {
                        case t && e.autoplay() && !n.customProperties.isCardOverlayExist && !n.customProperties.controlOptionsFromCMS:
                            return i.Preset.audioOnlyControls;
                        case e.autoplay() && (!t || !n.customProperties.controlOptionsFromCMS):
                            return i.Preset.noControls;
                        default:
                            return i.Preset.fullControls
                    }
                },
                d = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                    if (!Number.isFinite(e)) return "";
                    var t, n = +e.toFixed(),
                        a = n % 60;
                    return [(n - a) / 60, a < 10 ? "0".concat(a) : "".concat(a)].join(":")
                },
                u = function(e) {
                    var t = e.videoState,
                        n = e.isCardOverlayExist,
                        a = t.preset === i.Preset.fullControls,
                        r = !t.isInitiatedByUser;
                    return t.hasEnded || t.previewStarted || (a || n) && r
                },
                p = function(e, t) {
                    return !e.preset && !t.autoplay || e.preset === i.Preset.fullControls && !e.isInitiatedByUser || !t.autoplay
                },
                m = function(e, t) {
                    return function(n) {
                        var a = n.target,
                            i = (void 0 === a ? {} : a).player;
                        i ? e(i) : t(n)
                    }
                },
                h = function(e) {
                    var t, n, a;
                    return null !== (a = null === (n = null === (t = null == e ? void 0 : e.closest(o.Z.ANALYTICS_PLACEMENT_SELECTOR)) || void 0 === t ? void 0 : t.querySelector("[data-vjs-player]")) || void 0 === n ? void 0 : n.player) && void 0 !== a ? a : null
                },
                g = function(e) {
                    for (var t = e; t;) {
                        if ("none" === window.getComputedStyle(t).display) return !1;
                        t = t.parentElement
                    }
                    return !0
                },
                v = function(e) {
                    var t;
                    return (null == e ? void 0 : e.containerType) !== r.QU.VIDEO ? null == e ? void 0 : e.textLocation : e.controlOptions !== o.Z.FULL_CONTROL_OPTIONS && e.autoPlay || (null == e ? void 0 : null === (t = e.textLocation) || void 0 === t ? void 0 : t.vertical) === "after" ? null == e ? void 0 : e.textLocation : r.cO
                },
                f = function(e) {
                    return (null == e ? void 0 : e.dataset.buttonType) === "play-button" || !["button", "a"].includes(null == e ? void 0 : e.tagName.toLowerCase()) || (null == e ? void 0 : e.role) === "button"
                },
                y = function(e) {
                    var t, n = e.videoId,
                        a = e.portraitVideoId,
                        i = e.controlOptions,
                        r = e.locale,
                        o = e.imageHeight,
                        s = e.assetsAspectRatios,
                        l = e.portraitPosterUrl;
                    return {
                        assetsAspectRatios: s,
                        autoPlay: !1,
                        controlOptions: i,
                        forceFullscreenOnStart: !0,
                        imageHeight: o,
                        landscapePosterUrl: e.landscapePosterUrl,
                        locale: r,
                        loop: !1,
                        portraitPosterUrl: l,
                        portraitVideoId: a,
                        previewOnHover: !1,
                        videoId: n,
                        watchCtaButtonText: e.watchCtaButtonText
                    }
                }
        },
        31852: function(e, t, n) {
            "use strict";
            n.d(t, {
                PZ: function() {
                    return el
                },
                x3: function() {
                    return B.x3
                },
                T5: function() {
                    return B.T5
                },
                T2: function() {
                    return B.T2
                }
            });
            var a, i, r = n(24022),
                o = n(4670),
                s = n(58588),
                l = n(52322),
                c = n(37667),
                d = n.n(c),
                u = n(13980),
                p = n.n(u),
                m = n(26490),
                h = n(4022),
                g = n.n(h),
                v = n(16),
                f = n(43612),
                y = n(57393),
                _ = n(20606),
                b = n(72979),
                x = n(61628),
                T = n(83628),
                I = n(62649),
                C = "vjs-preview-stopped",
                N = "[data-preview-wrapper]",
                w = g().getPlugin("plugin"),
                S = function(e) {
                    var t;
                    return (null === (t = null == e ? void 0 : e.closest(I.Z.ANALYTICS_PLACEMENT_SELECTOR)) || void 0 === t ? void 0 : t.querySelector(N)) || (null == e ? void 0 : e.closest(N)) || e
                },
                P = function(e) {
                    (0, b._)(n, e);
                    var t = (0, x._)(n);

                    function n(e, a) {
                        var i;
                        return (0, f._)(this, n), i = t.call(this, e, a), (0, _._)((0, v._)(i), "timerId", 0), (0, _._)((0, v._)(i), "isPreviewStarted", !1), (0, _._)((0, v._)(i), "isPreviewDisabled", !1), (0, _._)((0, v._)(i), "getPreviewWrapper", function() {
                            return S(i.player.el())
                        }), (0, _._)((0, v._)(i), "enable", function() {
                            i.player.autoplay() || (i.isPreviewDisabled = !1, i.addListeners())
                        }), (0, _._)((0, v._)(i), "disable", function() {
                            i.isPreviewDisabled = !0, i.removeListeners()
                        }), (0, _._)((0, v._)(i), "canStartPreview", function(e) {
                            return !e.closest("button, a") && i.player.paused() && !i.player.isFullscreen() && !i.isPreviewDisabled
                        }), (0, _._)((0, v._)(i), "handleTouchStart", function(e) {
                            i.start(e)
                        }), (0, _._)((0, v._)(i), "handleTouchEnd", function() {
                            i.stop()
                        }), (0, _._)((0, v._)(i), "handleMouseEnter", function(e) {
                            i.start(e), i.getPreviewWrapper().addEventListener("mousemove", i.start)
                        }), (0, _._)((0, v._)(i), "handleMouseLeave", function() {
                            i.getPreviewWrapper().removeEventListener("mousemove", i.start), i.stop()
                        }), (0, _._)((0, v._)(i), "start", function(e) {
                            var t = e.target;
                            if (!i.canStartPreview(t)) {
                                i.stop();
                                return
                            }
                            var n = setTimeout(function() {
                                var e = i.getPreviewWrapper();
                                i.player.setState({
                                    previewStarted: !0
                                }), e.removeEventListener("mousemove", i.start), document.body.classList.add(i.options.disableClass), i.isPreviewStarted = !0, i.triggerEvent(!0), i.player.muted(!0), i.player.controls(!1), i.player.currentTime(0), i.player.play()
                            }, 500);
                            i.setTimerId(n)
                        }), i.options = a, i.options.enable && !i.player.options().autoplay && (i.player.on(T.NW.PLAY, function() {
                            i.resetTimer(), i.player.removeClass(C)
                        }), i.player.on(T.NW.DISPOSE, i.disable), i.enable()), i
                    }
                    return (0, y._)(n, [{
                        key: "addListeners",
                        value: function() {
                            var e = this.getPreviewWrapper();
                            e && (e.addEventListener("touchstart", this.handleTouchStart), e.addEventListener("touchend", this.handleTouchEnd), e.addEventListener("mouseenter", this.handleMouseEnter), e.addEventListener("mouseleave", this.handleMouseLeave))
                        }
                    }, {
                        key: "removeListeners",
                        value: function() {
                            var e = this.getPreviewWrapper();
                            e && (e.removeEventListener("touchstart", this.handleTouchStart), e.removeEventListener("touchend", this.handleTouchEnd), e.removeEventListener("mouseenter", this.handleMouseEnter), e.removeEventListener("mouseleave", this.handleMouseLeave))
                        }
                    }, {
                        key: "setTimerId",
                        value: function(e) {
                            this.resetTimer(), this.timerId = e
                        }
                    }, {
                        key: "resetTimer",
                        value: function() {
                            clearTimeout(this.timerId)
                        }
                    }, {
                        key: "triggerEvent",
                        value: function(e) {
                            var t = e ? T.NW.PREVIEW_STARTED : T.NW.PREVIEW_STOPPED;
                            this.player.trigger(t)
                        }
                    }, {
                        key: "stop",
                        value: function() {
                            var e = this;
                            this.resetTimer(), this.isPreviewStarted && (this.isPreviewStarted = !1, this.player.pause(), this.player.currentTime(0), this.player.addClass(C), document.body.classList.remove(this.options.disableClass), setTimeout(function() {
                                e.player.setState({
                                    previewStarted: !1
                                }), e.triggerEvent(!1)
                            }))
                        }
                    }]), n
                }(w),
                L = function(e) {
                    (0, b._)(n, e);
                    var t = (0, x._)(n);

                    function n(e, a) {
                        var i;
                        return (0, f._)(this, n), i = t.call(this, e, a), (0, _._)((0, v._)(i), "observerCallback", function(e) {
                            var t = (0, s._)(e, 1)[0];
                            !i.player.isFullscreen() && (i.isAutoplay ? t.isIntersecting && !i.player.state.isInitiatedByUser ? i.player.autoplay("muted") : t.isIntersecting && i.player.state.isInitiatedByUser ? i.player.autoplay() : i.player.pause() : !t.isIntersecting && i.player.state.isInitiatedByUser && i.options.enabled && i.player.pause())
                        }), (0, _._)((0, v._)(i), "enable", function() {
                            i.observer = new IntersectionObserver(i.observerCallback, {
                                threshold: i.options.threshold || 0
                            }), i.observer.observe(i.player.el())
                        }), (0, _._)((0, v._)(i), "disable", function() {
                            var e, t;
                            null === (e = i.observer) || void 0 === e || e.disconnect(), null === (t = i.player) || void 0 === t || t.off(T.NW.CANPLAY, i.enable)
                        }), i.options = a, i.isAutoplay = i.player.autoplay(), i.player.on(T.NW.DISPOSE, i.disable), i.player.on(T.NW.CANPLAY, i.enable), i
                    }
                    return n
                }(g().getPlugin("plugin")),
                E = g().getPlugin("plugin"),
                k = function() {
                    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    return function(e) {
                        return t.forEach(function(t) {
                            return t(e)
                        })
                    }
                },
                O = function(e) {
                    (0, b._)(n, e);
                    var t = (0, x._)(n);

                    function n(e, a) {
                        var i;
                        return (0, f._)(this, n), i = t.call(this, e, a), (0, _._)((0, v._)(i), "assignListeners", function() {
                            i.options.eventsToObserve.forEach(function(e) {
                                var t = i.options.callbacks[e];
                                i.player.on(e, t ? k(i.options.dispatchFn, t) : i.options.dispatchFn)
                            }), Object.keys(i.options.callbacks).forEach(function(e) {
                                i.options.eventsToObserve.includes(e) || i.player.on(e, i.options.callbacks[e])
                            })
                        }), i.options = a, i.assignListeners(), i
                    }
                    return n
                }(E),
                j = function(e) {
                    (0, b._)(n, e);
                    var t = (0, x._)(n);

                    function n(e, a) {
                        var i;
                        return (0, f._)(this, n), i = t.call(this, e, a), (0, _._)((0, v._)(i), "handlePlayerResize", function() {
                            var e;
                            (null === (e = i.player) || void 0 === e ? void 0 : e.isFullscreen()) && i.setState({
                                duration: i.player.duration(),
                                timestamp: i.player.currentTime()
                            })
                        }), (0, _._)((0, v._)(i), "handlePlayerCanPlay", function() {
                            var e = i.state.timestamp,
                                t = i.player.tech(!0);
                            if (e) {
                                i.isTheSameVideoDuration() && !i.isTheSameVideoSrc() && i.player.currentTime(i.state.timestamp), i.player.muted(!1), i.player.play(), i.setState({
                                    currentTime: null,
                                    duration: null,
                                    src: t.currentSrc()
                                });
                                return
                            }
                            i.setState({
                                src: t.currentSrc()
                            })
                        }), (0, _._)((0, v._)(i), "removeListeners", function() {
                            var e, t;
                            null === (e = i.player) || void 0 === e || e.off(T.NW.PLAYERRESIZE, i.handlePlayerResize), null === (t = i.player) || void 0 === t || t.off(T.NW.CANPLAY, i.handlePlayerCanPlay)
                        }), i.options = a, i.options.enable && i.addListeners(), i
                    }
                    return (0, y._)(n, [{
                        key: "isTheSameVideoDuration",
                        value: function() {
                            return Math.abs(this.state.duration - this.player.duration()) <= T.Ob
                        }
                    }, {
                        key: "isTheSameVideoSrc",
                        value: function() {
                            return this.player.tech(!0).currentSrc() === this.state.src
                        }
                    }, {
                        key: "addListeners",
                        value: function() {
                            this.player.on(T.NW.PLAYERRESIZE, this.handlePlayerResize), this.player.on(T.NW.CANPLAY, this.handlePlayerCanPlay), this.player.on(T.NW.DISPOSE, this.removeListeners)
                        }
                    }]), n
                }(g().getPlugin("plugin")),
                A = n(40174),
                R = n(68714),
                U = {
                    timestamp: "_1HmegpaM"
                },
                M = function(e) {
                    var t = e.duration,
                        n = e.action,
                        a = e.className,
                        i = e.timestampWithPlay;
                    return (0, l.jsxs)("div", {
                        onClick: n,
                        className: (0, m.Z)([U.timestamp, a]),
                        children: [i && (0, l.jsx)(A.E, {
                            fillColor: "#ffffff",
                            width: "11",
                            height: "12",
                            viewBox: "5 0 20 20"
                        }), t]
                    })
                };
            M.propTypes = {
                action: p().func,
                className: p().string,
                duration: p().string,
                timestampWithPlay: p().bool
            };
            var B = n(32434),
                Z = n(55265),
                H = function(e) {
                    e && e.tech().el().focus()
                },
                D = function(e) {
                    var t = e.onClick,
                        n = e.watchCtaButtonText,
                        a = e.watchCtaButtonStyle;
                    return {
                        Icon: (0, l.jsx)(A.E, {
                            size: "s"
                        }),
                        actionText: n,
                        actionType: "button",
                        appearance: "primary",
                        ariaLabel: n,
                        className: (0, m.Z)([a]),
                        dataButtonType: "play-button",
                        handleClick: t,
                        iconPlacement: "end",
                        renderAs: "button"
                    }
                },
                q = function(e) {
                    H((0, B.be)(e.target))
                },
                W = function(e) {
                    var t, n = e.children,
                        a = e.showPlayButton,
                        i = e.duration,
                        o = e.showTimestamp,
                        s = e.isTextPositionAfter,
                        c = e.showPlayerOverlay,
                        d = e.imageHeightClass,
                        u = e.watchCtaButtonText,
                        p = e.watchCtaButtonStyle,
                        h = e.timestampWithPlay,
                        g = e.forceFullscreenOnStart,
                        v = a ? function(e) {
                            if ((0, B.DG)(e.target)) {
                                e.preventDefault();
                                var t = (0, B.be)(e.target),
                                    n = t.preview();
                                n && (n.stop(), n.disable()), g && t.requestFullscreen(), t.muted(!1), t.controls(!0), t.currentTime() && t.currentTime(0), t.setState({
                                    isInitiatedByUser: !0
                                }), t.play().then(function() {
                                    H(t)
                                })
                            }
                        } : q,
                        f = a ? D({
                            onClick: v,
                            watchCtaButtonStyle: p,
                            watchCtaButtonText: u
                        }) : {},
                        y = a && !h ? (0, l.jsx)(Z.e, (0, r._)({}, f)) : null,
                        _ = o ? (0, l.jsx)(M, {
                            duration: i,
                            action: v,
                            timestampWithPlay: h
                        }) : null,
                        b = n ? n({
                            buttonProps: f,
                            playButtonElement: y
                        }) : y,
                        x = Boolean(_) || Boolean(!s && b);
                    return (0, l.jsxs)(l.Fragment, {
                        children: [c && (0, l.jsxs)("div", {
                            "data-preview-wrapper": !0,
                            role: x ? "button" : void 0,
                            className: (0, m.Z)(R.Z.overlay, s ? d : R.Z.fullHeight, a && R.Z.cursorPointer),
                            "data-qa": "play-overlay",
                            onClick: v,
                            children: [_, !s && b]
                        }), s && b]
                    })
                };
            W.propTypes = {
                children: p().oneOfType([p().func, p().node]),
                duration: p().string,
                forceFullscreenOnStart: p().bool,
                imageHeightClass: p().string,
                isTextPositionAfter: p().bool,
                showPlayButton: p().bool,
                showPlayerOverlay: p().bool,
                showTimestamp: p().bool,
                timestampWithPlay: p().bool,
                watchCtaButtonStyle: p().string,
                watchCtaButtonText: p().string
            };
            var F = n(16946),
                z = {
                    videoPlaceholder: "o9oV_gDe",
                    videoContainer: "_3gp3Wlmq"
                },
                V = {
                    duration: 0,
                    fullScreen: !1,
                    hasEnded: !1,
                    isInitiatedByUser: !1,
                    playing: !1,
                    previewStarted: !1
                },
                G = function(e, t) {
                    var n = t.target,
                        a = t.type,
                        i = n.player;
                    switch (a) {
                        case T.NW.PLAY:
                            return (0, o._)((0, r._)({}, e), {
                                hasEnded: !1,
                                playing: !i.paused()
                            });
                        case T.NW.PAUSE:
                            return (0, o._)((0, r._)({}, e), {
                                playing: !i.paused()
                            });
                        case T.NW.ENDED:
                            return (0, o._)((0, r._)({}, e), {
                                hasEnded: !0,
                                playing: !i.paused()
                            });
                        case T.NW.FULLSCREENCHANGE:
                            return i.options().customProperties.forceFullscreenOnStart ? (0, o._)((0, r._)({}, e), {
                                hasEnded: !0,
                                playing: !i.paused()
                            }) : e;
                        case T.NW.CANPLAY:
                        case T.NW.LOADEDMETADATA:
                            return (0, o._)((0, r._)({}, e), {
                                duration: (0, B.mr)(i.duration())
                            });
                        case T.NW.STATECHANGED:
                            var s = i.state,
                                l = s.preset,
                                c = s.isInitiatedByUser,
                                d = s.previewStarted;
                            return (0, o._)((0, r._)({}, e), {
                                isInitiatedByUser: !!c,
                                preset: l,
                                previewStarted: !!d
                            });
                        default:
                            return e
                    }
                },
                K = function(e) {
                    var t = e.isMobile,
                        n = e.isInitedOnClient,
                        a = (0, c.useRef)(null),
                        i = (0, c.useState)(!1),
                        r = i[0],
                        o = i[1];
                    return (0, c.useEffect)(function() {
                        a.current && n && o((0, B.Jv)(a.current))
                    }, [t, n]), [a, r]
                },
                Q = function(e) {
                    var t = e.isPortrait,
                        n = e.portraitPosterUrl,
                        a = e.landscapePosterUrl,
                        i = e.portraitVideoId,
                        r = e.videoId,
                        o = (0, c.useState)(""),
                        s = o[0],
                        l = o[1],
                        d = (0, c.useState)(""),
                        u = d[0],
                        p = d[1];
                    return (0, c.useEffect)(function() {
                        l(t && n ? n : a), p(t && i ? i : r)
                    }, [t, n, a, i, r, ]), [s, u]
                },
                J = function(e) {
                    e.currentTime(0), e.controls(!1), e.setState({
                        hasEnded: !1,
                        isInitiatedByUser: !1
                    })
                },
                Y = (a = {}, (0, _._)(a, h.Preset.noControls, function(e) {
                    e.controlBar.dispose()
                }), (0, _._)(a, h.Preset.audioOnlyControls, function(e) {
                    e.controlBar.fullscreenToggle.hide(), e.controlBar.remainingTimeDisplay.hide(), e.controlBar.progressControl.hide(), e.controlBar.playToggle.hide()
                }), a),
                X = function(e) {
                    var t = (0, B.vD)(e);
                    e.removeClass(h.Preset.fullControls), e.addClass(t), e.setState({
                        preset: t
                    })
                },
                $ = (i = {}, (0, _._)(i, T.NW.LOADEDMETADATA, (0, B.KB)(function(e) {
                    X(e)
                })), (0, _._)(i, T.NW.LOADEDDATA, (0, B.KB)(function(e) {
                    var t;
                    X(e), null === (t = Y[e.state.preset]) || void 0 === t || t.call(Y, e)
                })), (0, _._)(i, T.NW.STATECHANGED, (0, B.KB)(function(e) {
                    (e.state.isInitiatedByUser ? e.addClass : e.removeClass).call(e, T.NP.INITIATED_BY_USER)
                })), (0, _._)(i, T.NW.PREVIEW_STOPPED, (0, B.KB)(function(e) {
                    e.paused() && e.removeClass(T.NP.POSTER_INACTIVE)
                })), (0, _._)(i, T.NW.FULLSCREENCHANGE, (0, B.KB)(function(e) {
                    !e.isFullscreen() && e.options().customProperties.forceFullscreenOnStart && (e.pause(), J(e), e.removeClass(T.NP.POSTER_INACTIVE))
                })), (0, _._)(i, T.NW.ENDED, (0, B.KB)(function(e) {
                    e.isFullscreen() && e.exitFullscreen(), e.state.isInitiatedByUser && J(e), e.removeClass(T.NP.POSTER_INACTIVE), !e.autoplay() && e.preview() && e.preview().enable(), e.setState({
                        hasEnded: !0
                    })
                })), (0, _._)(i, T.NW.PLAY, (0, B.KB)(function(e) {
                    e.addClass(T.NP.POSTER_INACTIVE), e.setState({
                        hasEnded: !1
                    })
                })), i),
                ee = n(1575),
                et = n(8290),
                en = g().getPlugin("plugin"),
                ea = function(e) {
                    return (null == e ? void 0 : e.mode) === "showing"
                },
                ei = function(e) {
                    return (0, ee.Z)(ea, e)
                },
                er = function(e) {
                    (0, b._)(n, e);
                    var t = (0, x._)(n);

                    function n(e, a) {
                        (0, f._)(this, n), i = t.call(this, e, a), (0, _._)((0, v._)(i), "handleAnalyticsEvent", function(e) {
                            if (!i.skipEvent(e.type)) {
                                var t = i.prepareVideoAnalyticsEventDetail(e),
                                    n = new CustomEvent(i.options.analyticsEventName || T.Aw, {
                                        detail: t
                                    });
                                window.dispatchEvent(n)
                            }
                        }), i.options = a, i.playerOptions = i.player.options();
                        var i, r = i.options.eventsToObserve || [T.NW.VOLUMECHANGE, T.NW.PLAY, T.NW.PAUSE, T.NW.SEEKING, T.NW.FULLSCREENCHANGE, T.NW.PREVIEW_STARTED, T.NW.PREVIEW_STOPPED, ];
                        return i.player.on(r, i.handleAnalyticsEvent), i.player.textTracks().addEventListener(T.NW.TEXT_TRACK_CHANGE, i.handleAnalyticsEvent), i
                    }
                    return (0, y._)(n, [{
                        key: "getVideoAnalyticsData",
                        value: function() {
                            var e = this.player,
                                t = this.playerOptions,
                                n = !!e.autoplay() || !!t.apiAutoplay,
                                a = ei(this.player.textTracks());
                            return {
                                autoplay: n,
                                currentTime: e.currentTime(),
                                duration: e.duration(),
                                fullScreen: e.isFullscreen(),
                                loop: !!e.loop(),
                                sound: !e.muted(),
                                subtitleLanguage: (null == a ? void 0 : a.language) || void 0,
                                subtitles: ea(a)
                            }
                        }
                    }, {
                        key: "getAnalyticsEventName",
                        value: function(e) {
                            var t = this.player;
                            switch (e.type) {
                                case T.NW.VOLUMECHANGE:
                                    return t.muted() ? h.VideoAnalyticsEventName.mute : h.VideoAnalyticsEventName.unmute;
                                case T.NW.PLAY:
                                    if (t.state.hasEnded) return h.VideoAnalyticsEventName.restart;
                                    return .5 > t.currentTime() ? h.VideoAnalyticsEventName.start : h.VideoAnalyticsEventName.played;
                                case T.NW.PAUSE:
                                    return t.currentTime() === t.duration() ? h.VideoAnalyticsEventName.ended : h.VideoAnalyticsEventName.paused;
                                case T.NW.SEEKING:
                                    return !t.loop() && h.VideoAnalyticsEventName.rewound;
                                case T.NW.FULLSCREENCHANGE:
                                    return t.isFullscreen() ? h.VideoAnalyticsEventName.enteredFullscreen : h.VideoAnalyticsEventName.exitedFullscreen;
                                case T.NW.TEXT_TRACK_CHANGE:
                                    var n = ei(t.textTracks());
                                    return ea(n) ? h.VideoAnalyticsEventName.subtitlesOn : h.VideoAnalyticsEventName.subtitlesOff;
                                case T.NW.PREVIEW_STARTED:
                                    return et.fL.PREVIEW_STARTED;
                                case T.NW.PREVIEW_STOPPED:
                                    return et.fL.PREVIEW_STOPPED;
                                default:
                                    return !1
                            }
                        }
                    }, {
                        key: "prepareVideoAnalyticsEventDetail",
                        value: function(e) {
                            var t, n = this.getVideoAnalyticsData();
                            return {
                                eventName: this.getAnalyticsEventName(e),
                                placementId: this.player.el().closest(I.Z.ANALYTICS_PLACEMENT_SELECTOR).dataset.analyticsPlacementId,
                                videoData: n
                            }
                        }
                    }, {
                        key: "skipEvent",
                        value: function(e) {
                            var t = this.player,
                                n = this.playerOptions,
                                a = !!t.autoplay() || !!n.apiAutoplay,
                                i = t.state.previewStarted && ![T.NW.PREVIEW_STARTED, T.NW.PREVIEW_STOPPED].includes(e),
                                r = e === T.NW.SEEKING && t.loop(),
                                o = e === T.NW.PLAY && a && t.state.preset !== h.Preset.fullControls,
                                s = e === T.NW.PAUSE && a && t.state.preset !== h.Preset.fullControls,
                                l = e === T.NW.VOLUMECHANGE && 0 === t.currentTime(),
                                c = e === T.NW.SEEKING && 0 === t.currentTime(),
                                d = T.NW.TEXT_TRACK_CHANGE && 0 === t.currentTime() && !t.hasStarted();
                            return i || r || o || s || l || c || d
                        }
                    }]), n
                }(en),
                eo = n(65620);
            g() && (g().registerPlugin("preview", P), g().registerPlugin("pauseOnLeave", L), g().registerPlugin("reactAdapter", O), g().registerPlugin("currentTimeSetter", j), g().registerPlugin("analyticsHandler", er));
            var es = function(e) {
                var t, n = e.videoId,
                    a = e.autoPlay,
                    i = e.portraitVideoId,
                    d = e.loop,
                    u = e.controlOptions,
                    p = e.locale,
                    v = e.isCardOverlayExist,
                    f = e.isTextPositionAfter,
                    y = e.children,
                    _ = e.portraitPosterUrl,
                    b = e.landscapePosterUrl,
                    x = e.timestampWithPlay,
                    I = e.previewOnHover,
                    C = e.watchCtaButtonText,
                    N = e.forceFullscreenOnStart,
                    w = e.customAttrs,
                    S = e.customClass,
                    P = e.watchCtaButtonStyle,
                    L = e.assetsAspectRatios,
                    E = e.pauseOnLeave,
                    k = (0, c.useReducer)(G, V),
                    O = k[0],
                    j = k[1],
                    A = (0, F.Z8)(),
                    R = A.isPortrait,
                    U = A.isMobile,
                    M = A.isInitedOnClient,
                    Z = A.orientation,
                    H = (0, s._)(K({
                        isInitedOnClient: M,
                        isMobile: N || U
                    }), 2),
                    D = H[0],
                    q = H[1],
                    J = (0, s._)(Q({
                        isPortrait: R,
                        landscapePosterUrl: b,
                        portraitPosterUrl: _,
                        portraitVideoId: i,
                        videoId: n
                    }), 2),
                    Y = J[0],
                    X = J[1];
                return (0, l.jsxs)("div", (0, o._)((0, r._)({
                    className: z.videoContainer
                }, w), {
                    children: [(0, l.jsx)(eo.Z, {
                        ref: D,
                        aspectRatios: L,
                        orientation: Z,
                        "data-video-id": X,
                        "data-autoplay-video": a,
                        "data-preview-started": O.previewStarted,
                        className: (0, m.Z)("media-container", S, z.videoPlaceholder),
                        children: q && (0, l.jsx)(g(), {
                            videoId: X,
                            preset: h.Preset.fullControls,
                            locale: p,
                            poster: Y,
                            playerOptions: {
                                aspectRatio: "16:9",
                                autoplay: a,
                                bigPlayButton: !1,
                                customProperties: {
                                    controlOptionsFromCMS: "full" === u,
                                    forceFullscreenOnStart: N,
                                    isCardOverlayExist: v
                                },
                                loadingSpinner: !1,
                                loop: d,
                                muted: !0,
                                plugins: {
                                    analyticsHandler: !0,
                                    currentTimeSetter: {
                                        enable: i !== n && U
                                    },
                                    pauseOnLeave: {
                                        enabled: E,
                                        threshold: .1
                                    },
                                    preview: {
                                        disableClass: z.disableUserSelect,
                                        enable: I,
                                        previewWrapperSelector: "[data-preview-wrapper]"
                                    },
                                    reactAdapter: {
                                        callbacks: $,
                                        dispatchFn: j,
                                        eventsToObserve: [T.NW.PLAY, T.NW.PAUSE, T.NW.ENDED, T.NW.FULLSCREENCHANGE, T.NW.LOADEDMETADATA, T.NW.STATECHANGED, ]
                                    }
                                }
                            }
                        })
                    }), (0, l.jsx)(W, {
                        watchCtaButtonStyle: P,
                        imageHeightClass: S,
                        duration: null === (t = O.duration) || void 0 === t ? void 0 : t.toString(),
                        showTimestamp: Boolean(O.duration && !a),
                        timestampWithPlay: x,
                        isTextPositionAfter: f,
                        showPlayButton: (0, B.oN)(O, {
                            autoplay: a
                        }),
                        forceFullscreenOnStart: N,
                        watchCtaButtonText: C,
                        showPlayerOverlay: (0, B.HJ)({
                            isCardOverlayExist: v,
                            videoState: O
                        }),
                        children: y
                    })]
                }))
            };
            es.propTypes = {
                assetsAspectRatios: p().shape({
                    landscape: p().number,
                    portrait: p().number
                }),
                autoPlay: p().bool,
                children: p().oneOfType([p().func, p().node]),
                controlOptions: p().string,
                customAttrs: p().object,
                customClass: p().string,
                forceFullscreenOnStart: p().bool,
                isCardOverlayExist: p().bool,
                isTextPositionAfter: p().bool,
                landscapePosterUrl: p().string,
                locale: p().string,
                loop: p().bool,
                pauseOnLeave: p().bool,
                portraitPosterUrl: p().string,
                portraitVideoId: p().string,
                previewOnHover: p().bool,
                timestampWithPlay: p().bool,
                videoId: p().string.isRequired,
                watchCtaButtonStyle: p().string,
                watchCtaButtonText: p().string
            };
            var el = d().memo(es)
        },
        18403: function(e, t, n) {
            "use strict";
            n.d(t, {
                E: function() {
                    return m
                }
            });
            var a = n(20606),
                i = n(52322);
            n(37667);
            var r = n(17635),
                o = n(13980),
                s = n.n(o),
                l = n(52743),
                c = n(24022),
                d = n(40903),
                u = n(94721),
                p = function(e) {
                    var t = e.onUnitsToggleClick,
                        n = e.className,
                        a = e.values,
                        r = e.selectedValue;
                    return (0, i.jsx)(d.m, {
                        className: n,
                        onClick: t,
                        selectedValue: r,
                        name: "units-toggle",
                        children: a.map(function(e) {
                            return (0, i.jsx)(u.O, (0, c._)({}, e), e.id)
                        })
                    })
                };
            p.propTypes = {
                className: s().string,
                onUnitsToggleClick: s().func,
                selectedValue: s().string,
                unitsType: s().string,
                values: s().arrayOf(s().shape({
                    id: s().string,
                    label: s().string,
                    value: s().string
                }))
            }, p.defaultValues = {
                values: []
            };
            var m = function(e) {
                var t = e.className,
                    n = e.unitsType,
                    o = e.values,
                    s = (0, r.v9)(l.wl.measurementSelector, r.wU),
                    c = (0, r.I0)(),
                    d = function(e, t) {
                        c(l.Nw.measurementActions.set((0, a._)({}, n, t)))
                    };
                return (0, i.jsx)(p, {
                    className: t,
                    selectedValue: s[n],
                    onUnitsToggleClick: d,
                    values: o
                })
            };
            m.propTypes = {
                className: s().string,
                unitsType: s().string,
                values: s().arrayOf(s().shape({
                    id: s().string,
                    label: s().string,
                    value: s().string
                }))
            }
        },
        16946: function(e, t, n) {
            "use strict";
            n.d(t, {
                Fh: function() {
                    return m
                },
                Z8: function() {
                    return v
                },
                iz: function() {
                    return y
                },
                l3: function() {
                    return g
                }
            });
            var a = n(52322),
                i = n(37667),
                r = n.n(i),
                o = n(13980),
                s = n.n(o),
                l = n(49389),
                c = n(36386),
                d = n.n(c),
                u = n(61639),
                p = n(53788),
                m = r().createContext(l.aU.NIKE),
                h = {
                    dimensionType: p.Jq,
                    isDesktop: !1,
                    isDesktopLarge: !1,
                    isDesktopWide: !1,
                    isInitedOnClient: !1,
                    isMobile: !0,
                    isPortrait: !1,
                    isTablet: !1,
                    isTouchDevice: !1
                },
                g = r().createContext(h),
                v = function() {
                    return (0, i.useContext)(g)
                },
                f = function() {
                    var e = (0, i.useState)(p.Jq),
                        t = e[0],
                        n = e[1],
                        a = (0, i.useState)(!0),
                        r = a[0],
                        o = a[1],
                        s = (0, i.useState)(),
                        l = s[0],
                        c = s[1],
                        u = (0, i.useState)(!1),
                        m = u[0],
                        h = u[1];
                    return (0, i.useEffect)(function() {
                        var e = function() {
                                n((0, p.Ib)()), o((0, p.x4)()), h(!0), c("ontouchstart" in window)
                            },
                            t = d()(e, 100);
                        return e(), window.addEventListener("resize", t),
                            function() {
                                window.removeEventListener("resize", t)
                            }
                    }, []), {
                        dimensionType: t,
                        isDesktop: t === p.q5,
                        isDesktopLarge: t === p.BA,
                        isDesktopWide: t === p.JS,
                        isInitedOnClient: m,
                        isMobile: t === p.Jq,
                        isPortrait: r,
                        isTablet: t === p.EV,
                        isTouchDevice: l,
                        orientation: r ? "portrait" : "landscape"
                    }
                },
                y = function(e) {
                    var t = f();
                    return (0, a.jsx)(g.Provider, {
                        value: t,
                        children: (0, a.jsx)(m.Provider, {
                            value: e.brand,
                            children: (0, a.jsx)(u.p$, {
                                children: e.children
                            })
                        })
                    })
                };
            y.propTypes = {
                brand: s().string,
                children: s().any
            }
        },
        73748: function(e, t, n) {
            "use strict";
            n.d(t, {
                H: function() {
                    return a
                }
            });
            var a = function(e, t, n) {
                try {
                    var a = new URL(e);
                    if (t) {
                        var i = new URLSearchParams(a.search);
                        i.set(t, n), a.search = i.toString()
                    }
                    return a.toString()
                } catch (r) {
                    return ""
                }
            }
        },
        60244: function(e, t, n) {
            "use strict";
            n.d(t, {
                r: function() {
                    return a
                }
            });
            var a = function(e, t, n, a) {
                var i, r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 300;
                if (!e.defaultPrevented) "function" == typeof a && a(), !e.altKey && !e.ctrlKey && !e.shiftKey && !e.metaKey && 2 !== e.button && "_blank" !== n && (null === (i = e.preventDefault) || void 0 === i || i.call(e), setTimeout(function() {
                    window.location.href = t
                }, r))
            }
        },
        51539: function(e, t, n) {
            "use strict";
            n.d(t, {
                s: function() {
                    return r
                }
            });
            var a = n(77561),
                i = n(73748),
                r = function(e, t) {
                    if ((0, a.$L)() && e) {
                        var n = (0, i.H)(window.location.href, e, t);
                        window.history.replaceState({
                            path: n
                        }, "", n)
                    }
                }
        },
        42975: function(e, t, n) {
            "use strict";
            n.d(t, {
                K: function() {
                    return o
                },
                N: function() {
                    return r
                }
            });
            var a = n(61429),
                i = n.n(a),
                r = function(e) {
                    return i()(e).trim().length > 1
                },
                o = function(e) {
                    return {
                        __html: e
                    }
                }
        },
        49528: function(e, t, n) {
            "use strict";
            n.d(t, {
                BW: function() {
                    return g
                },
                E0: function() {
                    return Z
                },
                IJ: function() {
                    return y
                },
                Iv: function() {
                    return x
                },
                Kd: function() {
                    return O
                },
                LD: function() {
                    return U
                },
                LF: function() {
                    return M
                },
                MF: function() {
                    return L
                },
                Mw: function() {
                    return E
                },
                Pg: function() {
                    return T
                },
                SH: function() {
                    return f
                },
                WP: function() {
                    return p
                },
                ZB: function() {
                    return I
                },
                a6: function() {
                    return h
                },
                cQ: function() {
                    return j
                },
                eM: function() {
                    return u
                },
                iS: function() {
                    return N
                },
                j1: function() {
                    return C
                },
                kK: function() {
                    return m
                },
                oL: function() {
                    return v
                },
                qJ: function() {
                    return S
                },
                tP: function() {
                    return w
                },
                uA: function() {
                    return A
                },
                uk: function() {
                    return B
                },
                yj: function() {
                    return _
                },
                zA: function() {
                    return P
                },
                zE: function() {
                    return R
                }
            });
            var a = n(24022),
                i = n(4670),
                r = n(56503),
                o = n(13980),
                s = n.n(o),
                l = n(52743),
                c = n(62649),
                d = s().oneOf([c.Z.NONE_CONTROL_OPTIONS, c.Z.FULL_CONTROL_OPTIONS, ]),
                u = ["extra_small", "small", "medium", "large", "extra_large", "maintain", ],
                p = s().oneOf(["cta_buying_tools", "button", "link", "card_link", "promo", "share", "stacked_cta", ]).isRequired,
                m = s().arrayOf(s().shape({
                    actionText: s().string,
                    actionType: p,
                    destinationId: s().string,
                    destinationType: s().string,
                    id: s().string,
                    openInNewTab: s().bool
                })),
                h = s().arrayOf(s().shape({
                    actionType: p
                })).isRequired,
                g = s().shape({
                    aspectRatio: s().number,
                    id: s().string.isRequired,
                    type: s().string,
                    url: s().string.isRequired
                }),
                v = s().shape({
                    horizontal: s().string.isRequired,
                    vertical: s().string.isRequired
                }),
                f = {
                    appearance: s().string,
                    fontFamily: s().oneOf(["marketing", "brand", "base"]),
                    fontSize: s().oneOf(["extra_small", "small", "medium", "large", "extra_large", ]),
                    fontStyle: s().oneOf(["regular", "medium"]),
                    id: s().string,
                    renderAs: s().oneOf(["p", "div", "h1", "h2", "h3", "h4", "h5", "h6"]),
                    text: s().string,
                    textColor: s().string
                },
                y = s().shape(f),
                _ = s().shape({
                    horizontal: s().oneOf(["start", "center", "end"]),
                    vertical: s().oneOf(["start", "center", "end", "after"])
                }),
                b = {
                    body: s().string,
                    colorTheme: s().string.isRequired,
                    style: s().shape({
                        defaultStyle: s().shape({
                            textColor: s().string,
                            textLocation: v
                        })
                    }),
                    subtitle: s().string.isRequired,
                    title: s().string.isRequired
                },
                x = s().shape(b),
                T = s().oneOf(["dark", "light"]),
                I = s().oneOf((0, r._)(u).concat([void 0])),
                C = s().shape({
                    hardCrop: s().bool,
                    horizontal: s().oneOf(["left", "center", "right"]),
                    vertical: s().oneOf(["top", "middle", "bottom"])
                }),
                N = s().arrayOf(s().shape({
                    destinationType: s().string,
                    id: s().string,
                    image: s().string.required,
                    label: s().string.required,
                    openInNewTab: s().bool,
                    url: s().string
                })),
                w = s().oneOf(["image", "video", "text", "section_headline", "external_collection", "product_wall", "product_recommender", "merch_menu", "local_menu", "team_selector_menu", "filmstrip", "stacked", "related_content", "slideshow", ]),
                S = s().shape({
                    actions: m,
                    id: s().string,
                    textColor: s().string,
                    title: s().string
                }),
                P = {
                    analyticsItemId: s().string,
                    bodyProps: y,
                    cardLinkCollectionId: s().string,
                    cardLinkId: s().string,
                    cardLinkMemberOnly: s().bool,
                    cardLinkUrl: s().string,
                    colorTheme: T,
                    destinationType: s().string,
                    filmstripId: s().string,
                    id: s().string.isRequired,
                    isTextBelowImage: s().bool,
                    openInNewTab: s().bool,
                    sectionHeadlineTitle: s().string,
                    subtitleProps: y,
                    textLocation: v,
                    titleProps: y
                },
                L = {
                    TextBadgeComponent: s().elementType,
                    altText: s().string,
                    aspectRatio: s().string,
                    country: s().string,
                    detailsClass: s().string,
                    formattedListPrice: s().string,
                    formattedSalePrice: s().string,
                    imgUrl: s().string,
                    isMemberExclusive: s().bool,
                    isNikeByYou: s().bool,
                    isOnSale: s().bool,
                    overlayText: s().string,
                    productId: s().string.isRequired,
                    productThreadId: s().string.isRequired,
                    subtitle: s().string,
                    textBadge: s().string,
                    title: s().string,
                    translations: s().objectOf(s().string),
                    url: s().string
                },
                E = (0, i._)((0, a._)({}, L), {
                    labels: s().shape({
                        memberAccessLabel: s().string,
                        nikeByYouLabel: s().string,
                        nikeByYouText: s().string
                    })
                }),
                k = {
                    memberAccessLabel: s().string,
                    memberExclusiveText: s().string,
                    nikeByYouLabel: s().string,
                    nikeByYouText: s().string
                },
                O = {
                    containerType: s().oneOf([l.QU.EXTERNAL_COLLECTION, l.QU.PRODUCT_WALL, l.QU.PRODUCT_RECOMMENDER, l.QU.PRODUCT_RECOMMENDER_TAXONOMY, l.QU.SNKRS_DROPS, ]),
                    dataQa: s().string,
                    isLoading: s().bool,
                    labels: s().shape(k),
                    maxResults: s().number,
                    sectionHeadline: S,
                    slides: s().arrayOf(s().shape(E)),
                    slidesUpcoming: s().arrayOf(s().shape(E))
                },
                j = {
                    actionButtons: m,
                    actionText: s().node,
                    analyticsItemId: s().string,
                    autoPlay: s().bool.isRequired,
                    bodyProps: y,
                    cardLinkId: s().string,
                    cardLinkMemberOnly: s().bool,
                    cardLinkUrl: s().string,
                    colorTheme: T,
                    controlOptions: d,
                    customClass: s().string,
                    destinationType: s().string,
                    landscapePosterUrl: s().string,
                    language: s().string,
                    locale: s().string,
                    loop: s().bool.isRequired,
                    openInNewTab: s().bool,
                    portraitPosterUrl: s().string,
                    portraitVideoId: s().string,
                    subtitleProps: y,
                    textLocation: v,
                    titleProps: y,
                    translationsOffText: s().string,
                    videoId: s().string.isRequired,
                    watchCtaButtonText: s().string,
                    withH1: s().bool
                },
                A = {
                    productId: s().string.isRequired,
                    productName: s().string,
                    status: s().oneOf([l.dS.SOLD_OUT, l.dS.COMING_SOON, l.dS.AVAILABLE, ]).isRequired,
                    styleColor: s().string.isRequired
                },
                R = {
                    cancelLabel: s().string,
                    closeLabel: s().string,
                    dialogText: s().string,
                    dialogTitle: s().string,
                    emailLabel: s().string,
                    formError: s().string,
                    notifyMeLabel: s().string,
                    postSubmitDialogText: s().string,
                    postSubmitDialogTitle: s().string,
                    shopLabel: s().string,
                    soldOutLabel: s().string,
                    submitLabel: s().string
                },
                U = s().shape({
                    landscape: s().oneOfType([s().string, s().number]),
                    portrait: s().oneOfType([s().string, s().number])
                }),
                M = s().shape({
                    colorTheme: s().oneOf(["light", "dark"]),
                    position: s().oneOf(["overlay", "below"]),
                    text: s().string
                }),
                B = {
                    anchor: s().string,
                    pageNumber: s().number,
                    totalPages: s().number,
                    translations: s().shape({
                        paginationCurrent: s().string,
                        paginationNext: s().string,
                        paginationPrevious: s().string
                    })
                },
                Z = s().oneOf(["xs", "s", "m", "l", "xl", "xxl", "xxxl", "xxxxl", ])
        },
        4022: function(e) {
            "use strict";
            e.exports = NikeOneVideoPlayer
        },
        86023: function(e) {
            "use strict";
            e.exports = emotionCore
        },
        81753: function(e) {
            "use strict";
            e.exports = emotionStyled
        },
        40773: function(e) {
            "use strict";
            e.exports = emotionStyledBase
        }
    },
    function(e) {
        e.O(0, [561, 774, 888, 179], function() {
            return e(e.s = 96979)
        }), _N_E = e.O()
    }
]);
//# sourceMappingURL=[[...page]]-5b7350c1259f5465.js.map