"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [686], {
        24686: function(e, i, n) {
            n.r(i), n.d(i, {
                Slideshow: function() {
                    return $
                }
            });
            var t, a, s, l, o, r, d = n(24022),
                c = n(4670),
                u = n(52322),
                p = n(37667),
                _ = n.n(p),
                v = n(26490),
                E = n(13980),
                L = n.n(E),
                h = n(83286),
                A = n(1999),
                T = n(22383),
                f = n(36386),
                S = {
                    carousel: "SKI5MWQX",
                    strip: "_2KjbHP1q",
                    carouselSmall: "_1SdOS-Fq"
                },
                I = function(e, i) {
                    e && e.setAttribute("style", "height: ".concat(i, "px"))
                },
                D = function(e) {
                    var i, n, t, a, s = null === (n = null == e ? void 0 : null === (i = e.wrapperEl) || void 0 === i ? void 0 : i.querySelector(".product-slide-img, .media-container")) || void 0 === n ? void 0 : n.clientHeight;
                    I(null == e ? void 0 : null === (t = e.navigation) || void 0 === t ? void 0 : t.nextEl, s), I(null == e ? void 0 : null === (a = e.navigation) || void 0 === a ? void 0 : a.prevEl, s)
                },
                m = function(e) {
                    var i = e.wrapperEl,
                        n = e.params;
                    i.querySelectorAll(".".concat(n.slideClass, ".").concat(n.slideDuplicateClass)).forEach(function(e) {
                        var t = e.getAttribute("data-swiper-slide-index");
                        e.innerHTML = i.querySelector(".".concat(n.slideClass, '[data-swiper-slide-index="').concat(t, '"]:not(.').concat(n.slideDuplicateClass, ")")).innerHTML
                    })
                },
                g = function(e) {
                    e.slideToLoop(e.realIndex, 0, !1)
                },
                M = function(e, i) {
                    "function" == typeof e.onSlideIndexChange && (e.onSlideIndexChange(i.realIndex), i.on("slideChange", function() {
                        e.onSlideIndexChange(i.realIndex)
                    })), i.on("touchMove", function() {
                        var e, n;
                        null == i || null === (e = i.wrapperEl) || void 0 === e || null === (n = e.classList) || void 0 === n || n.add("swiper-transition-in-progress")
                    }), i.on("touchEnd", function() {
                        var e, n;
                        null == i || null === (e = i.wrapperEl) || void 0 === e || null === (n = e.classList) || void 0 === n || n.remove("swiper-transition-in-progress")
                    }), i.passedParams.loop && i.on("slideChangeTransitionEnd", function() {
                        return g(i)
                    }), i.on("observerUpdate", function() {
                        i.passedParams.loop && m(i), i.updateSlides()
                    });
                    var n = (0, f.debounce)(function() {
                        D(i)
                    }, 200);
                    i.on("resize", n);
                    var t = setTimeout(function() {
                        window.dispatchEvent(new Event("resize"))
                    }, 200);
                    i.on("beforeDestroy", function() {
                        return clearTimeout(t)
                    })
                },
                x = function(e) {
                    var i = e.onSlideActive,
                        n = e.onSlideIndexChange,
                        t = (0, h._)(e, ["onSlideActive", "onSlideIndexChange"]);
                    return (0, u.jsx)(A.tq, (0, c._)((0, d._)({
                        onInitSwiper: function(e) {
                            return M({
                                onSlideIndexChange: n
                            }, e)
                        }
                    }, t), {
                        className: (0, v.Z)(S.carousel, t.className),
                        children: _().Children.map(t.children, function(e) {
                            return (0, u.jsx)(A.Mi, {
                                onActive: i,
                                children: e
                            })
                        })
                    }))
                };
            x.propTypes = {
                children: L().node.isRequired,
                className: L().string,
                onSlideActive: L().func,
                onSlideIndexChange: L().func
            }, x.defaultProps = {
                onSlideActive: T.Z,
                swiperOptions: {
                    slidesToShow: 1
                }
            };
            var y = n(52743),
                O = n(8224),
                R = n(7269),
                w = n(20606),
                b = {
                    EXTRA_LARGE: 1100,
                    EXTRA_LARGE_WIDE: 1300,
                    EXTRA_SMALL: 300,
                    LARGE: 900,
                    MEDIUM: 700,
                    SMALL: 500
                },
                P = n(53788),
                C = (r = {}, (0, w._)(r, y.t_.EXTRA_SMALL, (t = {}, (0, w._)(t, P.Dv.MOBILE, b.EXTRA_SMALL), (0, w._)(t, P.Dv.TABLET, b.EXTRA_SMALL), (0, w._)(t, P.Dv.DESKTOP, b.EXTRA_SMALL), (0, w._)(t, P.Dv.DESKTOP_LARGE, b.EXTRA_SMALL), (0, w._)(t, P.Dv.DESKTOP_WIDE, b.SMALL), t)), (0, w._)(r, y.t_.SMALL, (a = {}, (0, w._)(a, P.Dv.MOBILE, b.SMALL), (0, w._)(a, P.Dv.TABLET, b.SMALL), (0, w._)(a, P.Dv.DESKTOP, b.SMALL), (0, w._)(a, P.Dv.DESKTOP_LARGE, b.SMALL), (0, w._)(a, P.Dv.DESKTOP_WIDE, b.MEDIUM), a)), (0, w._)(r, y.t_.MEDIUM, (s = {}, (0, w._)(s, P.Dv.MOBILE, b.SMALL), (0, w._)(s, P.Dv.TABLET, b.SMALL), (0, w._)(s, P.Dv.DESKTOP, b.MEDIUM), (0, w._)(s, P.Dv.DESKTOP_LARGE, b.MEDIUM), (0, w._)(s, P.Dv.DESKTOP_WIDE, b.LARGE), s)), (0, w._)(r, y.t_.LARGE, (l = {}, (0, w._)(l, P.Dv.MOBILE, b.SMALL), (0, w._)(l, P.Dv.TABLET, b.MEDIUM), (0, w._)(l, P.Dv.DESKTOP, b.LARGE), (0, w._)(l, P.Dv.DESKTOP_LARGE, b.LARGE), (0, w._)(l, P.Dv.DESKTOP_WIDE, b.EXTRA_LARGE), l)), (0, w._)(r, y.t_.EXTRA_LARGE, (o = {}, (0, w._)(o, P.Dv.MOBILE, b.SMALL), (0, w._)(o, P.Dv.TABLET, b.MEDIUM), (0, w._)(o, P.Dv.DESKTOP, b.EXTRA_LARGE), (0, w._)(o, P.Dv.DESKTOP_LARGE, b.EXTRA_LARGE), (0, w._)(o, P.Dv.DESKTOP_WIDE, b.EXTRA_LARGE_WIDE), o)), r),
                j = function(e) {
                    var i, n, t = e.imageHeight,
                        a = e.dimensionType;
                    return null !== (n = null === (i = C[t]) || void 0 === i ? void 0 : i[a]) && void 0 !== n ? n : b.MEDIUM
                },
                K = function(e) {
                    var i = e.assetsAspectRatios,
                        n = e.isPortrait,
                        t = i.portrait || i.landscape,
                        a = i.landscape || i.portrait;
                    return (n ? t : a) || 1
                },
                B = n(44991),
                G = n(49528),
                H = n(16946),
                U = function(e) {
                    var i = e.caption,
                        n = (0, h._)(e, ["caption"]),
                        t = (0, H.Z8)(),
                        a = t.isPortrait,
                        s = t.dimensionType,
                        l = K({
                            assetsAspectRatios: n.assetsAspectRatios,
                            isPortrait: a
                        }),
                        o = Math.min(j({
                            dimensionType: s,
                            imageHeight: n.imageHeight
                        }) * l, 1328);
                    return (0, u.jsxs)("div", {
                        "data-width": o,
                        "data-aspect-ratio": l,
                        children: [(0, u.jsx)(R.Z, (0, c._)((0, d._)({}, n), {
                            draggable: !1,
                            customClass: n.imageHeight && B.Z[n.imageHeight]
                        })), i]
                    })
                };
            U.propTypes = (0, d._)({
                caption: L().element,
                loop: L().bool
            }, G.zA);
            var W = n(31852),
                Z = function(e) {
                    var i = e.caption,
                        n = (0, h._)(e, ["caption"]);
                    return (0, u.jsxs)(u.Fragment, {
                        children: [(0, u.jsx)(W.PZ, (0, c._)((0, d._)({}, n), {
                            loop: !1,
                            autoPlay: !1,
                            showPlayButton: !0,
                            pauseOnLeave: !0,
                            watchButtonText: n.watchCtaButtonText,
                            customClass: n.imageHeight && B.Z[n.imageHeight]
                        })), i]
                    })
                };
            Z.propTypes = (0, d._)({
                caption: L().element
            }, G.zA);
            var N = n(26366),
                X = {
                    slideTextWrapper: "_8cq6rEUX",
                    showAllLabels: "_30bqPsH6"
                },
                k = n(42975),
                q = function(e) {
                    switch (null == e ? void 0 : e.containerType) {
                        case y.QU.VIDEO:
                            return Z;
                        case y.QU.IMAGE:
                        default:
                            return U
                    }
                },
                V = function(e) {
                    var i, n, t, a = e.analyticsItemId,
                        s = (e.sectionHeadlineTitle, e.cardId, e.isVideoCard, e.cardLinkMemberOnly),
                        l = (0, h._)(e, ["analyticsItemId", "sectionHeadlineTitle", "cardId", "isVideoCard", "cardLinkMemberOnly"]),
                        o = q(l),
                        r = (0, u.jsx)("figcaption", {
                            className: X.slideTextWrapper,
                            children: (null === (i = l.titleProps) || void 0 === i ? void 0 : i.text) && (0, u.jsx)(O.i, {
                                Component: "h3",
                                "data-qa": "title",
                                appearance: "body2",
                                className: X.slideTitle,
                                dangerouslySetInnerHTML: (0, k.K)(null === (n = l.titleProps) || void 0 === n ? void 0 : n.text),
                                color: l.titleProps.isTextColorSet ? l.titleProps.textColor : "secondary"
                            })
                        });
                    return (0, u.jsxs)("figure", {
                        "data-analytics-placement-id": a,
                        "data-analytics-has-landmark": "true",
                        "data-qa": "carousel-slideshow-item",
                        children: [l.counter, (0, u.jsx)(o, (0, c._)((0, d._)({}, l), {
                            caption: r
                        })), (null == l ? void 0 : l.cardLinkUrl) && (0, u.jsx)(N.Y, {
                            memberOnly: s,
                            draggable: !1,
                            actionId: l.cardLinkId,
                            destinationUrl: l.cardLinkUrl,
                            openInNewTab: l.openInNewTab,
                            renderAs: "a",
                            ariaLabel: null === (t = l.titleProps) || void 0 === t ? void 0 : t.text
                        })]
                    })
                };
            V.propTypes = G.zA;
            var z = n(43887),
                Q = {
                    fullWidthColumn: "_3bNK7AG1",
                    carouselWrapper: "_1RPurZLJ",
                    variableWidthSlider: "_3UYJwthZ",
                    videoSlide: "_2_Kj0zJZ",
                    slideCounter: "_3fZ6vnj_",
                    hideCounters: "_3ErrQVw0",
                    headline: "_2T8O9KJQ"
                },
                J = n(62649),
                F = {
                    slidesPerView: 1,
                    spaceBetween: 0,
                    threshold: 15,
                    touchStartPreventDefault: !1
                },
                Y = (0, c._)((0, d._)({}, {
                    breakpoints: {
                        959: {
                            slidesOffsetAfter: 24,
                            slidesOffsetBefore: 24
                        },
                        1919: {
                            slidesOffsetAfter: 48,
                            slidesOffsetBefore: 48
                        }
                    },
                    freeMode: !0,
                    freeModeMomentumBounce: !1,
                    keyboard: {
                        enabled: !0,
                        onlyInViewport: !0
                    },
                    mousewheel: {
                        forceToAxis: !0
                    },
                    scrollbar: {
                        draggable: !0,
                        el: ".swiper-scrollbar",
                        snapOnRelease: !1
                    },
                    slidesOffsetAfter: 0,
                    slidesOffsetBefore: 0,
                    slidesPerView: "auto",
                    threshold: 15,
                    updateOnImagesReady: !1
                }, F), {
                    slidesPerView: "auto",
                    spaceBetween: 16
                });
            delete Y.freeMode, delete Y.mousewheel, delete Y.updateOnImagesReady, delete Y.scrollbar;
            var $ = function(e) {
                var i, n, t = e.analyticsItemId,
                    a = e.slides,
                    s = e.cardId,
                    l = e.sectionHeadline,
                    o = e.pageType,
                    r = e.loop && a.length > 3,
                    _ = (0, p.useState)(0),
                    E = _[0],
                    L = _[1],
                    h = (0, p.useRef)(null),
                    A = Boolean(null === (i = h.current) || void 0 === i ? void 0 : i.closest(J.Z.INSET_COLUMN_SELECTOR)),
                    T = (0, H.Z8)(),
                    f = T.isMobile,
                    S = T.isDesktop,
                    I = T.isDesktopWide,
                    D = !f && !A,
                    m = (null == (n = a[E]) ? void 0 : n.containerType) === y.QU.VIDEO,
                    g = D && 3 === a.length && (S || I),
                    M = (0, c._)((0, d._)({}, D ? Y : F), {
                        centerInsufficientSlides: g,
                        centeredMiddleSlides: !r && D,
                        centeredSlides: r,
                        freeMode: g,
                        loop: r,
                        normalizeSlideIndex: !0,
                        observeSlideChildren: !0,
                        observer: !0
                    });
                return a.length >= 3 && (0, u.jsxs)("div", {
                    "data-qa": "carousel-slideshow",
                    id: t,
                    ref: h,
                    children: [(0, u.jsx)("div", {
                        className: Q.headline,
                        children: (0, u.jsx)(z.Z, (0, c._)((0, d._)({}, l), {
                            cardId: s,
                            analyticsItemId: "".concat(t, "_0")
                        }))
                    }), (0, u.jsx)("div", {
                        className: (0, v.Z)([Q.carouselWrapper, D && Q.variableWidthSlider, m && Q.videoSlide, !A && Q.fullWidthColumn, g && [Q.hideCounters, X.showAllLabels, ], ]),
                        children: (0, u.jsx)(x, {
                            pagination: !1,
                            swiperOptions: M,
                            onSlideIndexChange: L,
                            children: a.map(function(e, i) {
                                return (0, u.jsx)(V, (0, c._)((0, d._)({}, e), {
                                    counter: (0, u.jsxs)("span", {
                                        className: (0, v.Z)(["responsive-body-3-2", Q.slideCounter]),
                                        children: [i + 1, "/", a.length]
                                    }),
                                    useVisibilitySensor: !r,
                                    pageType: o,
                                    slideIndex: i,
                                    totalSlides: a.length,
                                    cardId: s,
                                    sectionHeadlineTitle: l.title,
                                    analyticsItemId: "".concat(t, "_").concat(i + 1)
                                }), e.id)
                            })
                        })
                    })]
                })
            };
            $.defaultProps = {
                slides: []
            }, $.propTypes = {
                analyticsItemId: L().string.isRequired,
                cardId: L().string,
                loop: L().bool,
                pageType: L().string,
                sectionHeadline: G.qJ,
                slides: L().arrayOf(L().shape(G.zA))
            }
        }
    }
]);
//# sourceMappingURL=686.2f3b95ec3bb1d079.js.map