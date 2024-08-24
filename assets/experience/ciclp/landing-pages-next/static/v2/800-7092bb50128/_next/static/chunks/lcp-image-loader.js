(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [275], {
        49389: function(n, t, e) {
            "use strict";
            e.d(t, {
                CT: function() {
                    return a
                },
                J7: function() {
                    return g
                },
                LJ: function() {
                    return h
                },
                MF: function() {
                    return u
                },
                Mu: function() {
                    return s
                },
                Ul: function() {
                    return d
                },
                aU: function() {
                    return i
                },
                bx: function() {
                    return v
                },
                cH: function() {
                    return E
                },
                cd: function() {
                    return w
                },
                dH: function() {
                    return L
                },
                gm: function() {
                    return r
                },
                nM: function() {
                    return l
                },
                qp: function() {
                    return m
                },
                sL: function() {
                    return c
                },
                uB: function() {
                    return p
                },
                vC: function() {
                    return b
                },
                y8: function() {
                    return o
                },
                zX: function() {
                    return f
                },
                zr: function() {
                    return A
                }
            });
            let i = {
                    JORDAN: "jordan",
                    NIKE: "nike",
                    NIKE_JOURNAL: "nikeJournal"
                },
                c = {
                    ARTICLE: "article",
                    PAGE: "page",
                    SIZE_CHART: "size_chart"
                },
                o = {
                    DISABLE_ANALYTICS_CLIENT: "x-disable-analytics-client",
                    DISABLE_APPS_FLYER: "x-disable-appsflyer",
                    DISABLE_GLOBAL_NAV: "x-disable-global-nav",
                    DISABLE_MC: "x-disable-mc",
                    DISABLE_SHOP_CART: "x-disable-shop-cart",
                    DISABLE_UI_EXPERIMENTS: "x-disable-ui-experiments",
                    ENABLE_CONSOLE_LOGGING: "x-enable-console-logging",
                    WITH_MOCKS: "clp-with-mocks"
                },
                r = "https://www.nike.com",
                a = "https://api.nike.com",
                u = {
                    BANNER: "8fac54d0-ed4f-4cf5-b829-e04d3d6008f8",
                    DEFAULT: "d9a5bc42-4b9c-4976-858a-f159cf99c647",
                    SNKRS: "010794e5-35fe-4e32-aaff-cd2c74f89d61"
                },
                d = {
                    howTo: {
                        collectionId: "fe94947a-f05b-4a2b-a438-e4ddf24477eb"
                    },
                    nikeJournal: {
                        collectionId: "a169eb4b-d643-419b-aa03-988d18535d25",
                        taxonomyTag: "36d163a1-fa45-45c0-bfbb-3d174015d851"
                    },
                    sizeCharts: {
                        collectionId: "32c0681c-e627-4f6d-9390-ce83e7fba02c"
                    }
                },
                l = "2iv4Qa7rFEipAs4iE850BkBpTYQvlAFZ",
                f = "eh46CSMEgCao5Y3uW7Jh1bBTAA34vEfU",
                s = /^(\/[a-z]{2})?(\/[a-z]{2})?(\/clp)?\/thread/i,
                h = {
                    homepage: "nike:dotcom.browse.homepage:client:1.0",
                    landingpage: "nike:dotcom.browse.landingpage:client:1.0",
                    product_recommender: "com.nike.commerce.nikedotcom.web"
                },
                m = {
                    [i.JORDAN]: {
                        collectionId: "4b69f63c5e87c687f251bdea1f82121b32018ae5"
                    }
                },
                p = "ciclp-app",
                E = "nike-shop-root",
                w = "at_lp_exp",
                b = "landingpage_layout",
                g = "landingpage_abovethefoldLayout",
                v = "IMPERIAL/METRIC",
                L = {
                    IMPERIAL: "IMPERIAL",
                    METRIC: "METRIC"
                },
                A = ["US", "GB", "CA"]
        },
        20427: function(n, t, e) {
            "use strict";
            e.r(t), e.d(t, {
                handleDocumentLoad: function() {
                    return u
                }
            });
            var i = e(49389),
                c = e(8552),
                o = e(53788),
                r = function(n) {
                    var t, e, i = (0, c.eI)(n);
                    i && (i.dataset.lcpLoaded = !0, i.src = (0, c.Gr)(null === (t = i.dataset) || void 0 === t ? void 0 : t.portraitUrl, null === (e = i.dataset) || void 0 === e ? void 0 : e.landscapeUrl, n.clientWidth, n.clientHeight, (0, o.x4)()), i.onload = function() {
                        i.classList.add(i.dataset.imageLoadedClass)
                    })
                },
                a = function(n) {
                    var t = n.getBoundingClientRect();
                    return t.width > 0 && t.height > 0 && t.top >= 0 && t.left >= 0 && t.bottom <= (window.innerHeight || document.documentElement.clientHeight) && t.right <= (window.innerWidth || document.documentElement.clientWidth)
                },
                u = function() {
                    Array.from(document.querySelectorAll("#".concat(i.uB, ' [data-container-type="image"] [data-qa="image-wrapper"]'))).filter(a).forEach(r)
                };
            document.addEventListener("DOMContentLoaded", u)
        },
        8552: function(n, t, e) {
            "use strict";

            function i(n, t, e, i, c) {
                var o, r = "w",
                    a = e;
                return i >= e && (r = "h", a = i),
                    function(n, t, e) {
                        if (!n) return "";
                        var i = n.indexOf("w_"),
                            c = n.indexOf(",", i),
                            o = n.slice(i, c),
                            r = n.split(o);
                        return "".concat(r[0]).concat(e, "_").concat(t).concat(r[1])
                    }(function(n) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                            e = "f_auto";
                        if (t.includes(e)) {
                            var i = t.split(e);
                            return "".concat(i[0]).concat(e, "/dpr_").concat(n).concat(i[1])
                        }
                        return t
                    }(null !== (o = window.devicePixelRatio.toFixed(1)) && void 0 !== o ? o : "1", c ? n : t), a, r)
            }
            e.d(t, {
                Gr: function() {
                    return i
                },
                eI: function() {
                    return o
                },
                sG: function() {
                    return a
                }
            });
            var c, o = function(n) {
                    return null !== (c = null == n ? void 0 : n.firstChild) && void 0 !== c ? c : null
                },
                r = function(n) {
                    var t, e;
                    return (null === (t = o(n)) || void 0 === t ? void 0 : null === (e = t.dataset) || void 0 === e ? void 0 : e.lcpLoaded) !== "true"
                },
                a = function(n) {
                    var t, e = n.imageRef,
                        c = n.portraitURL,
                        a = n.landscapeURL,
                        u = n.width,
                        d = n.height,
                        l = n.dimensionType;
                    return r(e.current) ? i(c, a, u, d, null == l ? void 0 : l.isPortrait) : null === (t = o(e.current)) || void 0 === t ? void 0 : t.src
                }
        },
        53788: function(n, t, e) {
            "use strict";
            e.d(t, {
                BA: function() {
                    return c
                },
                Dv: function() {
                    return u
                },
                EV: function() {
                    return r
                },
                Ib: function() {
                    return s
                },
                JS: function() {
                    return o
                },
                Jq: function() {
                    return a
                },
                Kl: function() {
                    return l
                },
                Pg: function() {
                    return f
                },
                jd: function() {
                    return d
                },
                q5: function() {
                    return i
                },
                x4: function() {
                    return h
                }
            });
            var i = "desktop",
                c = "desktop-large",
                o = "desktop-wide",
                r = "tablet",
                a = "mobile",
                u = {
                    DESKTOP: i,
                    DESKTOP_LARGE: c,
                    DESKTOP_WIDE: o,
                    MOBILE: a,
                    TABLET: r
                },
                d = 600,
                l = function(n) {
                    return document.querySelector(n)
                },
                f = function() {
                    return l(".pre-l-header-container")
                },
                s = function() {
                    return window.matchMedia("(min-width: ".concat(1920, "px)")).matches ? o : window.matchMedia("(min-width: ".concat(1440, "px)")).matches ? c : window.matchMedia("(min-width: ".concat(960, "px)")).matches ? i : window.matchMedia("(min-width: ".concat(d, "px) and (max-width: ").concat(959, "px)")).matches ? r : window.matchMedia("(max-width: ".concat(d - 1, "px)")).matches ? a : r
                },
                h = function() {
                    return !e.g.window || !e.g.window.matchMedia || e.g.window.matchMedia("(max-width: ".concat(960, "px) and (orientation:portrait)")).matches
                }
        }
    },
    function(n) {
        n.O(0, [179], function() {
            return n(n.s = 20427)
        }), _N_E = n.O()
    }
]);
//# sourceMappingURL=lcp-image-loader.js.map