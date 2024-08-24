(() => {
    "use strict";
    var e, t = {
            214: (e, t, n) => {
                n.d(t, {
                    AH: () => s.A,
                    Dx: () => d,
                    ic: () => p,
                    mL: () => m
                });
                var o = n(9140),
                    r = n(1594),
                    a = n(8089),
                    i = n(2264),
                    c = n(6283),
                    l = n(4660),
                    s = n(5712),
                    u = (0, r.createContext)("undefined" != typeof HTMLElement ? (0, a.A)() : null),
                    d = (0, r.createContext)({}),
                    p = (u.Provider, function(e) {
                        return (0, r.forwardRef)((function(t, n) {
                            return (0, r.createElement)(u.Consumer, null, (function(o) {
                                return e(t, o, n)
                            }))
                        }))
                    });
                Object.prototype.hasOwnProperty;
                var m = p((function(e, t) {
                        var n = e.styles;
                        if ("function" == typeof n) return (0, r.createElement)(d.Consumer, null, (function(e) {
                            var o = (0, c.J)([n(e)]);
                            return (0, r.createElement)(f, {
                                serialized: o,
                                cache: t
                            })
                        }));
                        var o = (0, c.J)([n]);
                        return (0, r.createElement)(f, {
                            serialized: o,
                            cache: t
                        })
                    })),
                    f = function(e) {
                        function t(t, n, o) {
                            return e.call(this, t, n, o) || this
                        }(0, o.A)(t, e);
                        var n = t.prototype;
                        return n.componentDidMount = function() {
                            this.sheet = new l.v({
                                key: this.props.cache.key + "-global",
                                nonce: this.props.cache.sheet.nonce,
                                container: this.props.cache.sheet.container
                            });
                            var e = document.querySelector("style[data-emotion-" + this.props.cache.key + '="' + this.props.serialized.name + '"]');
                            null !== e && this.sheet.tags.push(e), this.props.cache.sheet.tags.length && (this.sheet.before = this.props.cache.sheet.tags[0]), this.insertStyles()
                        }, n.componentDidUpdate = function(e) {
                            e.serialized.name !== this.props.serialized.name && this.insertStyles()
                        }, n.insertStyles = function() {
                            if (void 0 !== this.props.serialized.next && (0, i.s)(this.props.cache, this.props.serialized.next, !0), this.sheet.tags.length) {
                                var e = this.sheet.tags[this.sheet.tags.length - 1].nextElementSibling;
                                this.sheet.before = e, this.sheet.flush()
                            }
                            this.props.cache.insert("", this.props.serialized, this.sheet, !1)
                        }, n.componentWillUnmount = function() {
                            this.sheet.flush()
                        }, n.render = function() {
                            return null
                        }, t
                    }(r.Component),
                    y = function e(t) {
                        for (var n = t.length, o = 0, r = ""; o < n; o++) {
                            var a = t[o];
                            if (null != a) {
                                var i = void 0;
                                switch (typeof a) {
                                    case "boolean":
                                        break;
                                    case "object":
                                        if (Array.isArray(a)) i = e(a);
                                        else
                                            for (var c in i = "", a) a[c] && c && (i && (i += " "), i += c);
                                        break;
                                    default:
                                        i = a
                                }
                                i && (r && (r += " "), r += i)
                            }
                        }
                        return r
                    };
                p((function(e, t) {
                    return (0, r.createElement)(d.Consumer, null, (function(n) {
                        var o = function() {
                                for (var e = arguments.length, n = new Array(e), o = 0; o < e; o++) n[o] = arguments[o];
                                var r = (0, c.J)(n, t.registered);
                                return (0, i.s)(t, r, !1), t.key + "-" + r.name
                            },
                            r = {
                                css: o,
                                cx: function() {
                                    for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                                    return function(e, t, n) {
                                        var o = [],
                                            r = (0, i.R)(e, o, n);
                                        return o.length < 2 ? n : r + t(o)
                                    }(t.registered, o, y(n))
                                },
                                theme: n
                            };
                        return e.children(r)
                    }))
                }))
            },
            4927: (e, t, n) => {
                n.d(t, {
                    DV: () => r,
                    eN: () => i,
                    pH: () => c,
                    wq: () => a
                });
                var o = n(9911).f.podiumCdsBreakpointM,
                    r = "@media all and (-ms-high-contrast: none), (-ms-high-contrast: active)",
                    a = "@media not all and (min-resolution: 0.001dpcm)",
                    i = "@media (pointer: fine)",
                    c = "@media (pointer: coarse)";
                "@media (max-width: ".concat(parseInt(o) - 1, "px)")
            },
            8122: (e, t, n) => {
                n.d(t, {
                    I_: () => p
                });
                var o = n(7545),
                    r = n(1462),
                    a = n(9082),
                    i = n(700),
                    c = r.Kw.COOKIE_NAME,
                    l = r.Kw.COUNTRY_KEY,
                    s = (r.gP.queryParam, r.gP.ccAlias),
                    u = "geoloc cookie not set";

                function d(e) {
                    var t = function(e) {
                        return e.split(",").reduce((function(e, t) {
                            var n = t.split("="),
                                o = (0, a.A)(n, 2),
                                r = o[0],
                                i = o[1];
                            return e[r] = i, e
                        }), {})
                    }(e);
                    return Object.defineProperty(t, s, {
                        configurable: !0,
                        get: function() {
                            return this[l]
                        }
                    }), t
                }

                function p(e) {
                    if (e) return function(e) {
                        return e && "object" !== (0, o.A)(e.cookies) ? console.warn("No cookies object found to parse") : e.cookies[c] ? d(e.cookies[c]) : console.warn(u)
                    }(e);
                    var t = (0, i.a)();
                    return t ? d(t) : (console.warn(u), t)
                }
            },
            1462: (e, t, n) => {
                n.d(t, {
                    Kw: () => o,
                    gP: () => r
                });
                var o = {
                        COOKIE_NAME: "geoloc",
                        COUNTRY_KEY: "cc"
                    },
                    r = {
                        queryParam: "geolocCountry",
                        ccAlias: "country"
                    }
            },
            27: (e, t, n) => {
                n.d(t, {
                    AJ: () => b,
                    B9: () => r,
                    Gd: () => i,
                    Gf: () => O,
                    I3: () => A,
                    Sn: () => u,
                    U8: () => c,
                    XY: () => m,
                    Zy: () => p,
                    _h: () => d,
                    bq: () => l,
                    eN: () => s,
                    et: () => E,
                    hL: () => y,
                    k: () => h,
                    kl: () => o,
                    oj: () => _,
                    v5: () => g,
                    wL: () => f,
                    xb: () => w,
                    yr: () => v
                });
                const o = 48,
                    r = 36,
                    a = "www.nike.com",
                    i = ("https://".concat(a), "is--open"),
                    c = "is-focussed",
                    l = "my account:log out",
                    s = ("https://".concat("images.nike.com", "/is/image/DotCom"), "BOLD_PRIVACY_FOOTER_LINK"),
                    u = "PULSE_INSIGHTS",
                    d = "GLOBAL_NAV_LANGUAGE_TUNNEL",
                    p = "GLOBAL_NAV_KOREAN_FOOTER",
                    m = ("$".concat("pre"), "https://".concat(a, "/jordan"), 5e3),
                    f = {
                        MAIN_MENU: "main-menu",
                        BRAND_MENU: "brand-menu",
                        HELP_MENU: "help-menu",
                        ACCOUNT_SETTINGS_MENU: "account-settings",
                        BOTTOM_FOOTER: "bottom-footer",
                        MAIN_FOOTER: "main-footer"
                    },
                    y = {
                        HEADER: "header",
                        FOOTER: "footer"
                    },
                    v = "gen-nav-footer",
                    g = ["AR", "BR", "CO", "HK", "CL", "PE", "SA", "AE", "UY"],
                    h = {
                        ASSETS_PROD: "https://".concat("www.nike.com", "/assets"),
                        ASSETS_TEST: "https://assets.test.commerce.".concat("nikecloud.com"),
                        API_SEARCH: "https://".concat("api.nike.com", "/search"),
                        PRIVACY_POLICY: "http://agreementservice.svs.".concat("nike.com", "/:country/:language/rest/agreement?agreementType=privacyPolicy&uxId=:uxId&country=:country&language=:language&requestType=redirect"),
                        API_SEO_ANALYSIS_V2: "https://".concat("api.nike.com", "/user_navigation/urlanalysis/v2"),
                        API_SEO_GENESIS_V2: "https://".concat("api.nike.com", "/user_navigation/urlgenesis/v2"),
                        GLOBAL_CONFIG: "https://".concat("www.nike.com", "/static/dotcom/shared-config/public/:country/config.json"),
                        AR_HOMEPAGE: "https://www.nike.com.ar",
                        BR_HOMEPAGE: "https://www.nike.com.br",
                        HK_EN_HOMEPAGE: "https://www.nike.com.hk/?locale=en-gb&intpromo=language2001",
                        HK_ZH_HOMEPAGE: "https://www.nike.com.hk/?locale=zh-hk&intpromo=language1001",
                        SA_EN_HOMEPAGE: "https://www.nike.sa/en/home",
                        SA_AR_HOMEPAGE: "https://www.nike.sa/ar/home",
                        AE_EN_HOMEPAGE: "https://www.nike.ae/en/home",
                        AE_AR_HOMEPAGE: "https://www.nike.ae/ar/home",
                        CL_HOMEPAGE: "https://www.nike.cl",
                        CO_HOMEPAGE: "https://www.nike.com.co",
                        PE_HOMEPAGE: "https://www.nike.com.pe",
                        UY_HOMEPAGE: "https://www.nike.com.uy"
                    },
                    b = {
                        HOME_PAGE: "Nike Home Page",
                        ACCOUNT: "Account",
                        RESOURCES: "Resources",
                        HELP: "Help",
                        BACK_TO: "Back to {destination}",
                        CLOSE_MODAL: "Close Modal",
                        CONFIRM: "Confirm",
                        COOKIE_MODAL_ACCEPT: "Yes, I Accept",
                        COOKIE_MODAL_CHECK_FUNCTIONAL_LABEL: "Functional",
                        COOKIE_MODAL_CHECK_FUNCTIONAL_BODY: "These cookies are required for basic site functionality and are therefore always enabled. These include cookies that allow you to be remembered as you explore the site within a single session or, if you request, from session to session. They help make the shopping cart and checkout process possible as well as assist in security issues and conforming to regulations.",
                        COOKIE_MODAL_CHECK_PERFORMANCE_LABEL: "Performance",
                        COOKIE_MODAL_CHECK_PERFORMANCE_BODY: "These cookies allow us to improve the site’s functionality by tracking usage on this website. In some cases these cookies improve the speed with which we can process your request, allow us to remember site preferences you’ve selected. De-selecting these cookies may result in poorly-tailored recommendations and slow site performance.",
                        COOKIE_MODAL_CHECK_SOCIAL_AND_ADVERTISING_LABEL: "Social Media & Advertising",
                        COOKIE_MODAL_CHECK_SOCIAL_AND_ADVERTISING_BODY: "Social media cookies offer the possibility to connect you to your social networks and share content from our website through social media. Advertising cookies (of third parties) collect information to help better tailor advertising to your interests, both within and beyond Nike websites. In some cases, these cookies involve the processing of your personal data. For more information about this processing of personal data, check our {privacyAndCookiePolicyHTML}. De-selecting these cookies may result in seeing advertising that is not as relevant to you or you not being able to link effectively with Facebook, Twitter, or other social networks and/or not allowing you to share content on social media.",
                        COOKIE_MODAL_DONE: "Done",
                        COOKIE_MODAL_FOOTER: 'You can always change your preference by visiting the "Cookie Settings" at the bottom of the page. View {privacyAndCookiePolicyHTML} for full details.',
                        COOKIE_MODAL_MORE_INFO: "More Information",
                        COOKIE_MODAL_POLICY: 'Nike asks you to accept cookies for performance, social media and advertising purposes. Social media and advertising cookies of third parties are used to offer you social media functionalities and personalized ads. To get more information or amend your preferences, press the ‘more information’ button or visit "Cookie Settings" at the bottom of the website. To get more information about these cookies and the processing of your personal data, check our {privacyAndCookiePolicyHTML}. Do you accept these cookies and the processing of personal data involved?',
                        COOKIE_MODAL_PRIVACY_POLICY_LINK: "Privacy & Cookie Policy",
                        COOKIE_MODAL_REJECT: "No, I Don't Accept",
                        COOKIE_MODAL_TITLE: "Your Cookie Settings",
                        COMPANY: "Company",
                        CLOSE_MENU: "Close Menu",
                        FIND_A_STORE: "Find a store",
                        HELP_MENU: "Help Menu",
                        JOIN_US_TITLE: "Join us",
                        JOIN_US: "join us.",
                        ALL: "All",
                        FAVORITES: "Favorites",
                        BAG: "Bag Items",
                        ORDERS: "Orders",
                        LEARN_MORE: "Learn more",
                        SIGN_IN: "Sign In",
                        COPY_RIGHTS: "Nike, Inc. All Rights Reserved",
                        POPULAR_SEARCH_TERMS: "Popular Search Terms",
                        TOP_SUGGESTIONS: "Top Suggestions",
                        SEARCH: "Search",
                        SEARCH_PRODUCTS: "Search Products",
                        RESET_SEARCH: "Reset Search",
                        CANCEL: "Cancel",
                        SEARCH_PRODUCT_COUNT_RESULTS: "{filteredProductCount} search results",
                        SEARCH_EXTENDED: "Search Nike and Jordan products",
                        KOREAN_MODAL_TITLE: "Indication under the Contents Industry Promotion Act",
                        KOREAN_MODAL_TEXT_1: "Name of content: product information, event information, etc",
                        KOREAN_MODAL_TEXT_2: "Date of creation of the content: September 21, 2022 (or its update date if the content has been upgraded)",
                        KOREAN_MODAL_TEXT_3: "All content in the web page is protected for five years from the date of production or its renewal under the Content Industry Promotion Act (unauthorized copying is prohibited without consent)",
                        DONE: "Done",
                        READ_MORE: "Read More",
                        SHOW_PRODUCT_SUGGESTIONS: "Show Product Suggestions for {selectedSuggestion}",
                        MENU: "{menu} menu",
                        SELECT_YOUR_LOCATION: "Select your Location",
                        BRAND_NAVIGATION: "Brand Navigation",
                        MAIN_NAVIGATION: "Main Navigation",
                        USER_NAVIGATION: "User Navigation",
                        PLEASE_ENTER_SEARCH_QUERY: "Please enter a search query"
                    },
                    E = {
                        HEADER_HYDRATION: "v3HeaderHydration",
                        FOOTER_HYDRATION: "v3FooterHydration"
                    },
                    A = ["sa/ar", "ae/ar"],
                    O = "geoselection",
                    w = {
                        CN: "https://www.nike.com.cn/"
                    },
                    _ = ["checkout"]
            },
            9731: (e, t, n) => {
                n.d(t, {
                    Bl: () => u,
                    Ig: () => s
                });
                var o = n(1594),
                    r = n.n(o),
                    a = n(9067),
                    i = n(9002),
                    c = n(4604),
                    l = n(9189);
                const s = (0, o.createContext)({
                        engine: null,
                        newRelic: null
                    }),
                    u = e => {
                        let {
                            children: t
                        } = e;
                        const [n, a] = (0, o.useState)(null), [u, d] = (0, o.useState)(), {
                            mounted: p
                        } = (0, l.a)();
                        return (0, o.useEffect)((() => {
                            if (p) {
                                const e = window.NikeDotcomNav,
                                    t = (0, i.A)(e);
                                a(t);
                                const n = (0, c.Ay)(e);
                                d(n)
                            }
                        }), [p]), r().createElement(s.Provider, {
                            value: {
                                engine: n,
                                newRelic: u
                            }
                        }, t)
                    };
                u.propTypes = {
                    children: a.node
                }
            },
            3744: (e, t, n) => {
                var o, r = n(1594),
                    a = n.n(r),
                    i = n(5206),
                    c = n.n(i),
                    l = n(9067),
                    s = n.n(l),
                    u = n(6589),
                    d = n(1814),
                    p = n(2119),
                    m = n(3080),
                    f = n(27),
                    y = n(214),
                    v = n(4104),
                    g = n(6556);
                const {
                    podiumCdsBreakpointM: h
                } = v.f, {
                    podiumCdsColorFocusRing: b
                } = g.U, E = (0, y.AH)(o || (o = (0, p.A)(["\n  &:focus-visible {\n    box-shadow: 0 0 0 2px ", ";\n  }\n"])), b), A = "min-width: ".concat(h), O = "max-width: ".concat(parseInt(h) - 1, "px");
                var w, _, N;
                const C = "korea-legal-footer-divider",
                    x = "minimal-footer",
                    k = m.A.footer(w || (w = (0, p.A)(["\n  width: 100%;\n  background: var(--podium-cds-color-bg-primary);\n  min-height: 300px;\n  max-width: 1920px;\n  margin: auto;\n\n  @media (", ") {\n    padding: 48px 24px;\n  }\n\n  @media (", ") {\n    padding: ", "px;\n  }\n\n  .", " {\n    margin: 24px 0;\n  }\n\n  &.", " {\n    .footer-menu-column,\n    .mobile-footer-accordion {\n      display: none;\n      visibility: hidden;\n    }\n\n    .footer-spacer {\n      margin-bottom: 24px;\n    }\n\n    .language-tunnel {\n      justify-content: normal;\n    }\n  }\n"])), O, A, f.kl, C, x),
                    S = m.A.div(_ || (_ = (0, p.A)(["\n  margin-bottom: 24px;\n\n  @media (", ") {\n    margin-bottom: 72px;\n  }\n"])), A),
                    T = m.A.div(N || (N = (0, p.A)(["\n  height: 1px;\n  flex-shrink: 0;\n  background: var(--podium-cds-color-border-tertiary);\n  margin-bottom: 36px;\n  @media (", ") {\n    margin-bottom: 60px;\n    .", " {\n      margin-bottom: 24px;\n    }\n  }\n"])), A, C);
                var R, P, M, I = n(7070),
                    L = n(1558),
                    j = n(8814);
                const D = "footer-header",
                    F = "footer-link",
                    z = m.A.div(R || (R = (0, p.A)(["\n  @media (", ") {\n    display: flex;\n    align-items: flex-start;\n    gap: 12px;\n    flex-direction: row;\n  }\n\n  @media (", ") {\n    display: none;\n  }\n"])), A, O),
                    H = m.A.div(P || (P = (0, p.A)(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 12px;\n  flex: 1 0 0;\n  .", " {\n    font: var(--podium-cds-typography-body2-strong);\n    color: var(--podium-cds-color-text-primary);\n    margin-bottom: 12px;\n  }\n  .", " {\n    font: var(--podium-cds-typography-body2-strong);\n  }\n"])), D, F),
                    K = m.A.h1(M || (M = (0, p.A)(["\n  font: var(--podium-cds-typography-body2-strong);\n  color: var(--podium-cds-color-text-primary);\n  height: 32px;\n  margin-bottom: 12px;\n"])));
                var U = n(9787);

                function B(e) {
                    return B = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    }, B(e)
                }

                function G(e, t) {
                    var n, o = Object.keys(e);
                    return Object.getOwnPropertySymbols && (n = Object.getOwnPropertySymbols(e), t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), o.push.apply(o, n)), o
                }

                function Y(e) {
                    var t, n;
                    for (t = 1; t < arguments.length; t++) n = null != arguments[t] ? arguments[t] : {}, t % 2 ? G(Object(n), !0).forEach((function(t) {
                        var o, r, a;
                        o = e, r = t, a = n[t], r = function(e) {
                            var t = function(e) {
                                if ("object" != B(e) || !e) return e;
                                var t, n = e[Symbol.toPrimitive];
                                if (void 0 !== n) {
                                    if ("object" != B(t = n.call(e, "string"))) return t;
                                    throw new TypeError("@@toPrimitive must return a primitive value.")
                                }
                                return String(e)
                            }(e);
                            return "symbol" == B(t) ? t : String(t)
                        }(r), r in o ? Object.defineProperty(o, r, {
                            value: a,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : o[r] = a
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : G(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }));
                    return e
                }
                var V, J, q, W, X = {
                        s: a().createElement(a().Fragment, null, a().createElement("path", {
                            stroke: "currentColor",
                            strokeMiterlimit: "10",
                            strokeWidth: "1.5",
                            d: "M21.75 12A9.75 9.75 0 0112 21.75M21.75 12A9.75 9.75 0 0012 2.25M21.75 12c0 2.071-4.365 3.75-9.75 3.75S2.25 14.071 2.25 12m19.5 0c0-2.071-4.365-3.75-9.75-3.75S2.25 9.929 2.25 12M12 21.75A9.75 9.75 0 012.25 12M12 21.75c2.9 0 5.25-4.365 5.25-9.75S14.9 2.25 12 2.25m0 19.5c-2.9 0-5.25-4.365-5.25-9.75S9.1 2.25 12 2.25M2.25 12A9.75 9.75 0 0112 2.25"
                        })),
                        m: a().createElement(a().Fragment, null, a().createElement("path", {
                            stroke: "currentColor",
                            strokeMiterlimit: "10",
                            strokeWidth: "1.5",
                            d: "M21.75 12A9.75 9.75 0 0112 21.75M21.75 12A9.75 9.75 0 0012 2.25M21.75 12c0 2.071-4.365 3.75-9.75 3.75S2.25 14.071 2.25 12m19.5 0c0-2.071-4.365-3.75-9.75-3.75S2.25 9.929 2.25 12M12 21.75A9.75 9.75 0 012.25 12M12 21.75c2.9 0 5.25-4.365 5.25-9.75S14.9 2.25 12 2.25m0 19.5c-2.9 0-5.25-4.365-5.25-9.75S9.1 2.25 12 2.25M2.25 12A9.75 9.75 0 0112 2.25"
                        })),
                        l: a().createElement(a().Fragment, null, a().createElement("path", {
                            stroke: "currentColor",
                            strokeMiterlimit: "10",
                            strokeWidth: "3",
                            d: "M43.5 24c0 10.77-8.73 19.5-19.5 19.5M43.5 24c0-10.77-8.73-19.5-19.5-19.5M43.5 24c0 4.142-8.73 7.5-19.5 7.5S4.5 28.142 4.5 24m39 0c0-4.142-8.73-7.5-19.5-7.5S4.5 19.858 4.5 24M24 43.5C13.23 43.5 4.5 34.77 4.5 24M24 43.5c5.799 0 10.5-8.73 10.5-19.5S29.799 4.5 24 4.5m0 39c-5.799 0-10.5-8.73-10.5-19.5S18.201 4.5 24 4.5M4.5 24C4.5 13.23 13.23 4.5 24 4.5"
                        }))
                    },
                    Z = a().memo((function(e) {
                        return a().createElement(U.A, Y(Y({}, e), {}, {
                            paths: X,
                            fill: "none"
                        }))
                    }));
                const $ = m.A.div(V || (V = (0, p.A)(["\n  width: 100%;\n  display: flex;\n  height: 21px;\n  align-items: center;\n  gap: 4px;\n  flex: 1 0 0;\n  font: var(--podium-cds-typography-body2-strong);\n  color: var(--podium-cds-color-text-secondary);\n\n  @media (", ") {\n    margin-top: 24px;\n    margin-bottom: 24px;\n  }\n\n  @media (", ") {\n    justify-content: flex-end;\n  }\n"])), O, A),
                    Q = (0, y.AH)(J || (J = (0, p.A)(["\n  width: var(--podium-cds-size-icon-s);\n  height: var(--podium-cds-size-icon-s);\n"]))),
                    ee = (0, m.A)(j.A)(q || (q = (0, p.A)(["\n  font: var(--podium-cds-typography-body2-strong);\n  color: var(--podium-cds-color-text-secondary);\n  &:focus {\n    color: var(--podium-cds-color-text-secondary) !important;\n  }\n  .btn-icon-wrapper {\n    ", "\n    svg {\n      ", "\n      transform: translateY(3px);\n    }\n  }\n  &:hover:not(:disabled) {\n    color: var(--podium-cds-color-text-secondary);\n  }\n"])), Q, Q),
                    te = (0, m.A)(Z)(W || (W = (0, p.A)(["\n  ", "\n"])), Q);
                var ne, oe, re, ae = n(9575),
                    ie = n(4357),
                    ce = n(6980),
                    le = n(7201),
                    se = (0, le.A)("div", {
                        target: "e1whplt30"
                    })(ne || (oe = ["\n"], re || (re = oe.slice(0)), ne = Object.freeze(Object.defineProperties(oe, {
                        raw: {
                            value: Object.freeze(re)
                        }
                    })))),
                    ue = n(7635),
                    de = a().createContext({});

                function pe(e) {
                    return (pe = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    })(e)
                }

                function me(e, t, n) {
                    var o;
                    return o = function(e) {
                        if ("object" != pe(e) || !e) return e;
                        var t, n = e[Symbol.toPrimitive];
                        if (void 0 !== n) {
                            if ("object" != pe(t = n.call(e, "string"))) return t;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return String(e)
                    }(t), (t = "symbol" == pe(o) ? o : String(o)) in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n, e
                }

                function fe(e) {
                    return function(e) {
                        if (Array.isArray(e)) return ve(e)
                    }(e) || function(e) {
                        if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                    }(e) || ye(e) || function() {
                        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }()
                }

                function ye(e, t) {
                    if (e) {
                        if ("string" == typeof e) return ve(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? ve(e, t) : void 0
                    }
                }

                function ve(e, t) {
                    var n, o;
                    for ((null == t || t > e.length) && (t = e.length), n = 0, o = new Array(t); n < t; n++) o[n] = e[n];
                    return o
                }
                var ge = (0, r.forwardRef)((function(e, t) {
                    var n, o = e.id,
                        i = e.children,
                        c = e.classes,
                        l = void 0 === c ? {} : c,
                        s = e.animatable,
                        u = void 0 === s || s,
                        d = e.components,
                        p = void 0 === d ? {} : d,
                        m = e.open,
                        f = void 0 === m ? void 0 : m,
                        y = e.size,
                        v = void 0 === y ? "large" : y,
                        g = e.singlePanelOpenAtATime,
                        h = void 0 !== g && g,
                        b = e.singlePanelOpenAnimationDuration,
                        E = void 0 === b ? 250 : b,
                        A = e.onDetailsClick,
                        O = function(e, t) {
                            var n, o = {};
                            for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (o[r] = e[r]);
                            if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                                for (n = 0, r = Object.getOwnPropertySymbols(e); n < r.length; n++) t.indexOf(r[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[n]) && (o[r[n]] = e[r[n]]);
                            return o
                        }(e, ["id", "children", "classes", "animatable", "components", "open", "size", "singlePanelOpenAtATime", "singlePanelOpenAnimationDuration", "onDetailsClick"]),
                        w = (0, r.useRef)(null),
                        _ = function(e) {
                            return function(e) {
                                if (Array.isArray(e)) return e
                            }(e) || function(e) {
                                var t, n, o, r, a, i, c, l = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                                if (null != l) {
                                    a = [], i = !0, c = !1;
                                    try {
                                        for (o = (l = l.call(e)).next, !2; !(i = (t = o.call(l)).done) && (a.push(t.value), 2 !== a.length); i = !0);
                                    } catch (e) {
                                        c = !0, n = e
                                    } finally {
                                        try {
                                            if (!i && null != l.return && (r = l.return(), Object(r) !== r)) return
                                        } finally {
                                            if (c) throw n
                                        }
                                    }
                                    return a
                                }
                            }(e) || ye(e, 2) || function() {
                                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                            }()
                        }((0, r.useState)({})),
                        N = _[0],
                        C = _[1],
                        x = null !== (n = p.AccordionComp) && void 0 !== n ? n : "div",
                        k = function(e) {
                            var t, n, o, r, a, i;
                            if ("summary" === e.target.nodeName.toLowerCase()) switch (e.key) {
                                case "Home":
                                    null === (n = null === (t = e.target.parentNode) || void 0 === t ? void 0 : t.parentNode) || void 0 === n || n.querySelector(":scope > details > summary").focus();
                                    break;
                                case "End":
                                    null === (r = null === (o = e.target.parentNode) || void 0 === o ? void 0 : o.parentNode) || void 0 === r || r.querySelector(":scope > details:last-of-type > summary").focus();
                                    break;
                                case "ArrowUp":
                                    (null === (a = e.target.parentNode.previousElementSibling) || void 0 === a ? void 0 : a.childNodes[0]).focus();
                                    break;
                                case "ArrowDown":
                                    (null === (i = e.target.parentNode.nextElementSibling) || void 0 === i ? void 0 : i.childNodes[0]).focus()
                            }
                        };
                    (0, r.useEffect)((function() {
                        if (window.addEventListener("keyup", k), w.current) {
                            var e = fe(w.current.querySelectorAll("details")).reduce((function(e, t) {
                                return Object.assign(Object.assign({}, e), me({}, t.dataset.nrAccordionPanel, t.open))
                            }), {});
                            C(e)
                        }
                        return function() {
                            window.removeEventListener("keyup", k)
                        }
                    }), []), (0, r.useEffect)((function() {
                        var e = Object.keys(N);
                        if (e.length > 0 && f && f.length) {
                            var t = Object.assign({}, N);
                            e.forEach((function(e, n) {
                                var o = f.includes(n);
                                t[e] = o
                            })), C(t)
                        }
                    }), [f]);
                    var S = function(e) {
                        var t = Object.assign({}, N);
                        t = Object.assign(Object.assign({}, N), me({}, e.target.dataset.nrAccordionPanel, e.target.open)), C(t)
                    };
                    return a().createElement(de.Provider, {
                        value: {
                            accordionId: o,
                            panelState: N,
                            onToggle: S,
                            animatable: u,
                            setPanelState: C,
                            size: v
                        }
                    }, a().createElement("div", {
                        ref: t
                    }, a().createElement(x, Object.assign({
                        className: (0, ue.A)("nds-accordion", l.accordion)
                    }, O, {
                        "data-nr-component": "accordion",
                        ref: w
                    }), (Array.isArray(i) && i.length !== a().Children.toArray(i).length ? i : a().Children.toArray(i)).filter((function(e) {
                        return !!e
                    })).map((function(e, t) {
                        return "object" !== pe(e) || e.props && Object.keys(e.props).length > 0 ? function(e, t) {
                            var n = N[t];
                            return "function" === pe(e) ? e({
                                index: t,
                                open: n,
                                onToggle: S
                            }) : e
                        }(e, t) : void 0
                    })).map((function(e, t) {
                        var n, o = !!f && f.includes(t);
                        return a().cloneElement(e, {
                            key: "".concat(t, "-").concat(null === (n = null == e ? void 0 : e.props) || void 0 === n ? void 0 : n.id),
                            className: l.accordionChildren,
                            open: o,
                            onDetailClick: h || A ? function(t) {
                                var n;
                                return function(e, t) {
                                    if (A && A(e), h) {
                                        var n = Object.keys(N),
                                            o = Object.assign({}, N),
                                            r = n.filter((function(e) {
                                                return o[e]
                                            }))[0];
                                        n.forEach((function(e) {
                                            o[e] = !1
                                        }));
                                        var a = document.querySelector("details[data-nr-accordion-panel=".concat(t, "] .content-wrapper"));
                                        t !== r ? (o[t] = !0, a.animate([{
                                            gridTemplateRows: "0fr",
                                            opacity: "0"
                                        }, {
                                            gridTemplateRows: "1fr",
                                            opacity: "1"
                                        }], {
                                            duration: E + 200
                                        }).play(), setTimeout((function() {
                                            C(Object.assign({}, o))
                                        }), E)) : (a.animate([{
                                            gridTemplateRows: "1fr",
                                            opacity: "1"
                                        }, {
                                            gridTemplateRows: "0fr",
                                            opacity: "0"
                                        }], {
                                            duration: E + 200
                                        }).play(), setTimeout((function() {
                                            C(Object.assign({}, o))
                                        }), E))
                                    }
                                }(t, "".concat(null === (n = null == e ? void 0 : e.props) || void 0 === n ? void 0 : n.id))
                            } : null
                        })
                    })))))
                }));
                ge.displayName = "Accordion";
                var he = {
                        AccordionComp: se
                    },
                    be = (0, r.forwardRef)((function(e, t) {
                        var n = e.components,
                            o = function(e, t) {
                                var n, o = {};
                                for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (o[r] = e[r]);
                                if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                                    for (n = 0, r = Object.getOwnPropertySymbols(e); n < r.length; n++) t.indexOf(r[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[n]) && (o[r[n]] = e[r[n]]);
                                return o
                            }(e, ["components"]);
                        return a().createElement(ge, Object.assign({
                            components: Object.assign(Object.assign({}, he), n)
                        }, o, {
                            ref: t
                        }))
                    }));
                be.displayName = "AccordionStyled";
                var Ee = n(2287),
                    Ae = function() {
                        if ((0, Ee.V)()) {
                            try {
                                return function() {
                                    var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).matches;
                                    return !e || !e
                                }(window.matchMedia("(prefers-reduced-motion: reduce)"))
                            } catch (e) {
                                console.error(e)
                            }
                            return !0
                        }
                        return !0
                    };

                function Oe(e, t) {
                    return function(e) {
                        if (Array.isArray(e)) return e
                    }(e) || function(e, t) {
                        var n, o, r, a, i, c, l, s = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                        if (null != s) {
                            i = [], c = !0, l = !1;
                            try {
                                if (r = (s = s.call(e)).next, 0 === t) {
                                    if (Object(s) !== s) return;
                                    c = !1
                                } else
                                    for (; !(c = (n = r.call(s)).done) && (i.push(n.value), i.length !== t); c = !0);
                            } catch (e) {
                                l = !0, o = e
                            } finally {
                                try {
                                    if (!c && null != s.return && (a = s.return(), Object(a) !== a)) return
                                } finally {
                                    if (l) throw o
                                }
                            }
                            return i
                        }
                    }(e, t) || function(e, t) {
                        if (e) {
                            if ("string" == typeof e) return we(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? we(e, t) : void 0
                        }
                    }(e, t) || function() {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }()
                }

                function we(e, t) {
                    var n, o;
                    for ((null == t || t > e.length) && (t = e.length), n = 0, o = new Array(t); n < t; n++) o[n] = e[n];
                    return o
                }

                function _e(e) {
                    return (_e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    })(e)
                }
                var Ne = (0, r.forwardRef)((function(e, t) {
                    var n, o = e.animatable,
                        i = void 0 === o ? Ae : o,
                        c = e.children,
                        l = e.className,
                        s = e.components,
                        u = void 0 === s ? {} : s,
                        d = e.classes,
                        p = void 0 === d ? {} : d,
                        m = e.onToggle,
                        f = e.onDetailClick,
                        y = e.open,
                        v = void 0 !== y && y,
                        g = e.slots,
                        h = e.summaryProps,
                        b = function(e, t) {
                            var n, o = {};
                            for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (o[r] = e[r]);
                            if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                                for (n = 0, r = Object.getOwnPropertySymbols(e); n < r.length; n++) t.indexOf(r[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[n]) && (o[r[n]] = e[r[n]]);
                            return o
                        }(e, ["animatable", "children", "className", "components", "classes", "onToggle", "onDetailClick", "open", "slots", "summaryProps"]),
                        E = "function" === _e(i) ? i() : i,
                        A = Oe((0, r.useState)(v), 2),
                        O = A[0],
                        w = A[1],
                        _ = Oe((0, r.useState)(!1), 2),
                        N = _[0],
                        C = _[1],
                        x = Oe((0, r.useState)(0), 2),
                        k = x[0],
                        S = x[1],
                        T = null !== (n = u.DetailsComp) && void 0 !== n ? n : "details",
                        R = g.SummarySlot;
                    (0, r.useEffect)((function() {
                        w(v), k <= 2 && S(k + 1)
                    }), [v]);
                    var P = a().Children.toArray(c),
                        M = (0, ue.A)(l, "nds-details", p.details, k < 2 && "untouched", E && "is-animated", O && "is-open", N && "closing");
                    return a().createElement(T, Object.assign({
                        ref: t,
                        open: O,
                        className: M,
                        onAnimationEnd: function(e) {
                            e.stopPropagation(), "close" === e.animationName && (w(!1), C(!1))
                        },
                        onToggle: (0, r.useCallback)((function(e) {
                            m && m(e)
                        }), [m, O])
                    }, b), a().createElement("summary", Object.assign({
                        onClick: function(e) {
                            k < 2 && S(k + 1), e.preventDefault(), f ? f(e) : E && O ? C(!0) : w(!O)
                        },
                        className: p.summary
                    }, h), R), a().createElement("div", {
                        className: (0, ue.A)("content-wrapper", p.contentWrapper)
                    }, a().createElement("div", {
                        className: (0, ue.A)("children-wrapper")
                    }, P)))
                }));
                Ne.displayName = "Details";
                var Ce = function(e) {
                        var t, n, o = e.id,
                            i = e.children,
                            c = e.open,
                            l = e.components,
                            s = void 0 === l ? {} : l,
                            u = e.onDetailClick,
                            d = function(e, t) {
                                var n, o = {};
                                for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (o[r] = e[r]);
                                if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                                    for (n = 0, r = Object.getOwnPropertySymbols(e); n < r.length; n++) t.indexOf(r[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[n]) && (o[r[n]] = e[r[n]]);
                                return o
                            }(e, ["id", "children", "open", "components", "onDetailClick"]),
                            p = (0, r.useContext)(de),
                            m = p.accordionId,
                            f = p.panelState,
                            y = p.onToggle,
                            v = p.animatable,
                            g = p.size,
                            h = null !== (t = s.DetailsComp) && void 0 !== t ? t : Ne,
                            b = null !== (n = s.AccordionPanelComp) && void 0 !== n ? n : a().Fragment;
                        return a().createElement(b, null, a().createElement(h, Object.assign({
                            id: "".concat(m, "__").concat(o),
                            key: o,
                            "data-nr-accordion-panel": o,
                            onToggle: y,
                            onDetailClick: u ? function(e) {
                                return u(e)
                            } : null
                        }, d, {
                            open: void 0 !== f[o] ? f[o] : c,
                            animatable: void 0 === v ? d.animatable : v,
                            size: g
                        }), i))
                    },
                    xe = n(4388),
                    ke = n(9911),
                    Se = (0, le.A)("details", {
                        target: "e196znjh0"
                    })((function(e) {
                        var t = e.size,
                            n = void 0 === t ? "large" : t,
                            o = ke.f.podiumCdsBreakpointM,
                            r = ke.f.podiumCdsBreakpointXl;
                        return (0, y.AH)("box-shadow:inset 0 -1px 0 0 var(--podium-cds-grey-300,var(--podium-cds-color-grey-200));color:var(--podium-cds-color-text-primary);--animation-duration:var(--podium-cds-transition-duration-normal);@keyframes open{0%{grid-template-rows:0fr;opacity:0;}100%{grid-template-rows:1fr;opacity:1;padding-bottom:30px;}}@keyframes close{0%{grid-template-rows:1fr;opacity:1;}100%{grid-template-rows:0fr;opacity:0;padding-bottom:0px;}}&.is-open:not(.closing){.content-wrapper{padding-bottom:30px;}}&.is-animated{> summary{.nds-summary-control{transition:transform var(--podium-cds-transition-duration-normal) cubic-bezier(0.86,0,0.07,1);}}&.is-open:not(.closing,.untouched){.content-wrapper{animation:open var(--animation-duration);}}&.closing{&.is-open{.content-wrapper{animation:close var(--animation-duration);}}}}&.is-open{> summary{.nds-summary-control{transform:rotate(-180deg);}}}.content-wrapper{display:grid;}.children-wrapper{overflow:hidden;}summary{font:var(--podium-cds-typography-320-to-1919-title4);list-style:none;cursor:pointer;position:relative;background:transparent;padding:30px 0px;&::before{content:none;padding-right:0;font-size:inherit;cursor:inherit;}.nds-summary{&-wrapper{width:100%;display:flex;justify-content:space-between;align-items:start;}&-icons{display:flex;align-items:center;flex-shrink:0;}&-control{width:24px;height:24px;margin-left:var(--podium-cds-size-spacing-m);}}}}summary:focus:not(.focus-visible):not(:focus-visible){outline:none;}summary::-webkit-details-marker{display:none;}@media (min-width:", r, "){summary{font:var(--podium-cds-typography-1920-plus-title4);}}.children-wrapper > .nds-details{margin:0;}", "small" === n && "\n    summary {\n      font: var(--podium-cds-typography-body1-strong);\n    }\n    @media (min-width: ".concat(o, ") {\n      summary {\n        padding: 18px 0px;\n      }\n    }   \n  "))
                    })),
                    Te = {
                        DetailsComp: Se
                    },
                    Re = function(e) {
                        var t = e.slots,
                            n = e.detailsTitle,
                            o = function(e, t) {
                                var n, o = {};
                                for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (o[r] = e[r]);
                                if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                                    for (n = 0, r = Object.getOwnPropertySymbols(e); n < r.length; n++) t.indexOf(r[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[n]) && (o[r[n]] = e[r[n]]);
                                return o
                            }(e, ["slots", "detailsTitle"]),
                            r = a().createElement("span", {
                                className: "nds-summary-wrapper"
                            }, n, a().createElement("span", {
                                className: "nds-summary-icons"
                            }, null == t ? void 0 : t.IconsSlot, a().createElement(xe.a, {
                                className: "nds-summary-control",
                                size: "m"
                            })));
                        return a().createElement(Ne, Object.assign({
                            slots: Object.assign({
                                SummarySlot: r
                            }, t),
                            components: Te
                        }, o))
                    };
                Re.defaultProps = {
                    size: "large"
                }, Re.displayName = "DetailsStyled";
                var Pe = function(e) {
                    return a().createElement(Ce, Object.assign({
                        components: {
                            DetailsComp: Re
                        }
                    }, e))
                };
                Pe.displayName = "AccordionPanelStyled";
                var Me = n(4912),
                    Ie = n(1182),
                    Le = n(8554);

                function je(e) {
                    return je = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    }, je(e)
                }

                function De(e, t) {
                    var n, o = Object.keys(e);
                    return Object.getOwnPropertySymbols && (n = Object.getOwnPropertySymbols(e), t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), o.push.apply(o, n)), o
                }

                function Fe(e) {
                    var t, n;
                    for (t = 1; t < arguments.length; t++) n = null != arguments[t] ? arguments[t] : {}, t % 2 ? De(Object(n), !0).forEach((function(t) {
                        var o, r, a;
                        o = e, r = t, a = n[t], r = function(e) {
                            var t = function(e) {
                                if ("object" != je(e) || !e) return e;
                                var t, n = e[Symbol.toPrimitive];
                                if (void 0 !== n) {
                                    if ("object" != je(t = n.call(e, "string"))) return t;
                                    throw new TypeError("@@toPrimitive must return a primitive value.")
                                }
                                return String(e)
                            }(e);
                            return "symbol" == je(t) ? t : String(t)
                        }(r), r in o ? Object.defineProperty(o, r, {
                            value: a,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : o[r] = a
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : De(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }));
                    return e
                }
                var ze = {
                        s: a().createElement(a().Fragment, null, a().createElement("path", {
                            fill: "currentColor",
                            d: "M12 19.25l-.61.436a.75.75 0 001.22 0L12 19.25zm4.5-8.998c0 1.32-.854 2.947-2.006 4.577-.56.794-1.164 1.55-1.714 2.229-.54.666-1.052 1.282-1.39 1.756l1.22.872c.304-.425.77-.987 1.335-1.683a43.976 43.976 0 001.774-2.308C16.871 14.065 18 12.091 18 10.252h-1.5zm-3.89 8.562c-.338-.474-.85-1.09-1.39-1.756a42.613 42.613 0 01-1.714-2.229C8.354 13.2 7.5 11.572 7.5 10.252H6c0 1.84 1.129 3.813 2.281 5.443.591.836 1.22 1.625 1.774 2.308.565.696 1.031 1.258 1.335 1.683l1.22-.872zM7.5 10.252C7.5 7.594 9.547 5.5 12 5.5V4c-3.347 0-6 2.833-6 6.252h1.5zM12 5.5c2.453 0 4.5 2.094 4.5 4.752H18C18 6.832 15.347 4 12 4v1.5zm1.75 4.5A1.75 1.75 0 0112 11.753v1.5A3.25 3.25 0 0015.25 10h-1.5zM12 11.753A1.75 1.75 0 0110.25 10h-1.5A3.25 3.25 0 0012 13.25v-1.5zM10.25 10A1.75 1.75 0 0112 8.249v-1.5A3.25 3.25 0 008.75 10h1.5zM12 8.25c.966 0 1.75.784 1.75 1.75h1.5A3.25 3.25 0 0012 6.75v1.5z"
                        })),
                        m: a().createElement(a().Fragment, null, a().createElement("path", {
                            fill: "currentColor",
                            d: "M12 21.747l-.468.586a.75.75 0 00.936 0L12 21.747zM18 9c0 .92-.303 2.081-.824 3.362-.515 1.269-1.222 2.6-1.974 3.843a38.411 38.411 0 01-2.217 3.274c-.695.914-1.223 1.498-1.453 1.682l.936 1.172c.395-.314 1.023-1.042 1.711-1.947a39.904 39.904 0 002.306-3.404c.78-1.288 1.526-2.691 2.08-4.055.55-1.352.935-2.723.935-3.927H18zm-5.532 12.16c-.23-.183-.758-.767-1.453-1.681a38.41 38.41 0 01-2.217-3.274c-.752-1.243-1.458-2.574-1.974-3.843C6.303 11.081 6 9.921 6 9H4.5c0 1.204.385 2.575.934 3.927.555 1.364 1.302 2.767 2.08 4.055.78 1.288 1.6 2.474 2.307 3.404.688.905 1.316 1.633 1.711 1.947l.936-1.172zM6 9a6 6 0 016-6V1.5A7.5 7.5 0 004.5 9H6zm6-6a6 6 0 016 6h1.5A7.5 7.5 0 0012 1.5V3zm2.5 6a2.5 2.5 0 01-2.5 2.5V13a4 4 0 004-4h-1.5zM12 11.5A2.5 2.5 0 019.5 9H8a4 4 0 004 4v-1.5zM9.5 9A2.5 2.5 0 0112 6.5V5a4 4 0 00-4 4h1.5zM12 6.5A2.5 2.5 0 0114.5 9H16a4 4 0 00-4-4v1.5z"
                        })),
                        l: a().createElement(a().Fragment, null, a().createElement("path", {
                            fill: "currentColor",
                            d: "M24 43.5l-.936 1.173a1.5 1.5 0 001.872 0L24 43.5zm12-25.498c0 1.841-.606 4.163-1.647 6.725-1.032 2.538-2.444 5.2-3.949 7.688a76.834 76.834 0 01-4.434 6.547c-1.39 1.83-2.445 2.998-2.905 3.365l1.87 2.346c.79-.63 2.048-2.085 3.423-3.895a79.802 79.802 0 004.613-6.81c1.558-2.576 3.052-5.383 4.16-8.111C38.232 23.153 39 20.41 39 18.002h-3zM24.936 42.327c-.461-.367-1.516-1.535-2.906-3.364a76.834 76.834 0 01-4.434-6.548c-1.505-2.488-2.917-5.15-3.949-7.688C12.606 22.165 12 19.843 12 18.002H9c0 2.41.77 5.151 1.868 7.855 1.11 2.728 2.603 5.535 4.161 8.11a79.802 79.802 0 004.613 6.81c1.375 1.81 2.633 3.266 3.422 3.896l1.872-2.346zM12 18.002C12 11.373 17.373 6 24 6V3C15.715 3 9 9.717 9 18.002h3zM24 6c6.627 0 12 5.373 12 12.002h3C39 9.717 32.285 3 24 3v3zm5 12a5 5 0 01-5 5v3a8 8 0 008-8h-3zm-5 5a5 5 0 01-5-5h-3a8 8 0 008 8v-3zm-5-5a5 5 0 015-5v-3a8 8 0 00-8 8h3zm5-5a5 5 0 015 5h3a8 8 0 00-8-8v3z"
                        }))
                    },
                    He = a().memo((function(e) {
                        return a().createElement(U.A, Fe(Fe({}, e), {}, {
                            paths: ze,
                            fill: "none"
                        }))
                    }));
                const {
                    podiumCdsIconButtonColorBgPrimary: Ke,
                    podiumCdsIconButtonColorBgPrimaryHover: Ue,
                    podiumCdsIconButtonColorBgSecondary: Be,
                    podiumCdsIconButtonColorBgSecondaryHover: Ge,
                    podiumCdsIconButtonColorBgTertiaryHover: Ye
                } = g.U, Ve = ("var(--podium-cds-icon-button-color-bg-secondary, ".concat(Ke, ")"), "var(--podium-cds-icon-button-color-bg-secondary-hover, ".concat(Ue, ")"));
                var Je, qe, We, Xe, Ze, $e;
                "var(--podium-cds-icon-button-color-bg-secondary, ".concat(Be, ")"), "var(--podium-cds-icon-button-color-bg-secondary-hover, ".concat(Ge, ")"), "var(--podium-cds-icon-button-color-bg-tertiary-hover, ".concat(Ye, ")");
                const Qe = "country-link",
                    et = "accordion-panel-wrapper",
                    tt = "close-button",
                    nt = "language-modal-root",
                    ot = "hidden-focusable-accessibility-button",
                    rt = (0, m.A)(Le.R)(Je || (Je = (0, p.A)(["\n  color: var(--podium-cds-color-text-primary);\n  text-align: center;\n  .close-btn-container button:nth-of-type(1) {\n    background: var(--podium-cds-button-color-bg-primary);\n  }\n  .close-btn-container svg path {\n    color: var(--podium-cds-color-text-primary-inverse);\n  }\n  .modal-header-container h1 {\n    font: var(--podium-cds-typography-320-to-1919-title2);\n  }\n  section {\n    div:nth-of-type(2) {\n      overflow: visible;\n    }\n  }\n  .", " {\n    ", "\n  }\n  // ncss 4.2 compatibility\n  .close-btn-container > button.", " {\n    &:before {\n      border: none;\n    }\n    color: var(--podium-cds-color-text-primary-inverse);\n    ", "\n    &:hover:not(:disabled),\n    &:active {\n      background-color: ", ";\n    }\n  }\n  .", " {\n    max-height: 100vh;\n    height: 100%;\n    padding: 40px var(--podium-cds-size-spacing-l) var(--podium-cds-size-spacing-l)\n      var(--podium-cds-size-spacing-l);\n    overflow: auto;\n    scrollbar-width: none;\n    width: 100%;\n    margin-left: auto;\n    margin-right: auto;\n    .", " {\n      position: absolute;\n    }\n  }\n"])), tt, E, tt, E, Ve, nt, ot),
                    at = (0, m.A)(He)(qe || (qe = (0, p.A)(["\n  float: left;\n  padding-right: 4px;\n  height: 30px;\n  color: var(--podium-cds-color-grey-300);\n"]))),
                    it = m.A.h2(We || (We = (0, p.A)(["\n  color: var(--podium-cds-color-text-primary);\n  text-align: left;\n  font: var(--podium-cds-typography-320-to-1919-title2);\n  width: 214px;\n  padding-top: 36px;\n  list-style-type: none;\n  line-height: 120%;\n  padding-bottom: 36px;\n"]))),
                    ct = m.A.div(Xe || (Xe = (0, p.A)(["\n  width: 100%;\n  &.", " {\n    display: none;\n  }\n  @media (", ") {\n    padding: 0px 30px 80px 30px;\n    width: 100%;\n    max-width: 980px;\n    margin: 0 auto;\n  }\n"])), "is-hidden", A),
                    lt = "locale-label-container",
                    st = m.A.ul(Ze || (Ze = (0, p.A)(["\n  display: grid;\n  grid-template-rows: repeat(n, minmax(auto, 1fr));\n  gap: var(--podium-cds-size-spacing-grid-gutter-l);\n  .", " {\n    display: block;\n    text-align: left;\n    padding: 12px 12px 12px 8px;\n    border-radius: 18px;\n    border: 1px solid var(--podium-cds-color-border-disabled);\n    &:hover {\n      background: var(--podium-cds-color-grey-300);\n      svg {\n        color: var(--podium-cds-color-border-primary);\n      }\n    }\n    background: var(--podium-cds-color-bg-primary);\n  }\n  @media (", ") {\n    grid-template-columns: repeat(auto-fit, 215px);\n    .", " {\n      width: 216px;\n    }\n  }\n  .", " {\n    margin-left: 28px;\n  }\n  p,\n  h4 {\n    display: flex;\n    &.arabic {\n      font-family: ", ";\n      text-align: right;\n      justify-content: end;\n    }\n  }\n"])), Qe, A, Qe, lt, "Neue Frutiger Arabic"),
                    ut = m.A.div($e || ($e = (0, p.A)(["\n  font: var(--podium-cds-typography-320-to-1919-title3);\n  .", " {\n    width: 100%;\n  }\n"])), et);
                var dt = n(6614);
                var pt = n(9725),
                    mt = n(1705),
                    ft = n(9731),
                    yt = n(8781);
                const vt = e => {
                    let {
                        className: t,
                        children: n,
                        handleModalClose: o,
                        ...r
                    } = e;
                    return a().createElement("section", (0, ae.A)({
                        className: t
                    }, r), a().createElement("button", {
                        className: ot,
                        onFocus: o
                    }), n, a().createElement("button", {
                        onFocus: o
                    }))
                };
                vt.propTypes = {
                    className: l.string,
                    children: l.node,
                    handleModalClose: l.func
                };
                const gt = e => {
                    var t;
                    let {
                        geo: n
                    } = e;
                    return a().createElement(st, {
                        "data-testid": "".concat(n.name, "-list")
                    }, null == n || null === (t = n.countries) || void 0 === t ? void 0 : t.map((e => {
                        const {
                            countryName: t,
                            langRegion: n,
                            languageName: o,
                            urlParam: r,
                            country: i,
                            cloudUrlFragment: c
                        } = e, l = i.toUpperCase(), s = (e => !!f.I3.includes(null == e ? void 0 : e.cloudUrlFragment))(e) ? "arabic" : "", u = f.xb[l];
                        return a().createElement("li", {
                            key: "".concat(t, "-").concat(o, "-list")
                        }, a().createElement(j.A, {
                            className: (0, ie.A)(Qe, s),
                            clickEventPayload: {
                                props: {
                                    country: l,
                                    language: r
                                },
                                type: "click_navCountrySelectionSuccess"
                            },
                            href: u || (0, pt.mF)({
                                urlParam: r,
                                country: i,
                                cloudUrlFragment: c
                            }),
                            key: "".concat(t, "-").concat(o, "-wrapper"),
                            onClick: () => {
                                (0, yt.xS)(l, n.replace("-", "_"), !0)
                            }
                        }, a().createElement(at, null), a().createElement("div", {
                            className: lt
                        }, a().createElement(ce.z, {
                            appearance: "title4",
                            className: s
                        }, t), a().createElement(ce.z, {
                            appearance: "body3",
                            className: s,
                            color: "secondary"
                        }, o))))
                    })))
                };
                gt.propTypes = {
                    geo: l.object
                };
                const ht = e => {
                    let {
                        displayOnPage: t = !1
                    } = e;
                    const n = (() => {
                            const [e] = (0, r.useContext)(dt.B);
                            return (null == e ? void 0 : e.globalization) || []
                        })(),
                        o = {
                            "is-hidden": !t
                        },
                        i = (0, I.N)((0, L.d)("lt", "m"));
                    return a().createElement(ct, {
                        className: (0, ie.A)(o),
                        "data-testid": "languageContentWrapper"
                    }, i ? a().createElement(r.Fragment, {
                        key: null == n ? void 0 : n.name
                    }, a().createElement(be, {
                        animatable: !0,
                        id: "geo-accordion",
                        singlePanelOpenAtATime: !0
                    }, null == n ? void 0 : n.map(((e, t) => a().createElement(Pe, {
                        classes: {
                            summary: et
                        },
                        detailsTitle: a().createElement(ut, null, null == e ? void 0 : e.name),
                        id: "accordion-panel-".concat(t),
                        key: t
                    }, a().createElement(gt, {
                        geo: e
                    })))))) : null == n ? void 0 : n.map((e => a().createElement(r.Fragment, {
                        key: null == e ? void 0 : e.name
                    }, a().createElement(it, {
                        id: null == e ? void 0 : e.name
                    }, null == e ? void 0 : e.name), a().createElement(gt, {
                        geo: e
                    })))))
                };
                ht.propTypes = {
                    displayOnPage: l.bool
                };
                const bt = e => {
                    let {
                        shouldFocusOpenLangTunnelButton: t
                    } = e;
                    const {
                        currentModal: n,
                        closeModal: o
                    } = (0, r.useContext)(mt.Ay), i = (0, Me.A)("nav_close_modal", f.AJ.CLOSE_MODAL), {
                        engine: c
                    } = (0, r.useContext)(ft.Ig), l = (0, Ie.A)(), {
                        SELECT_YOUR_LOCATION: s
                    } = f.AJ, u = (0, r.useRef)(null), d = () => {
                        t.current = !0, null == c || c.track({
                            props: {
                                country: null == l ? void 0 : l.country
                            },
                            type: "click_navCountrySelectionDismiss"
                        }), o()
                    }, p = n === mt.T0.LANGUAGE_TUNNEL;
                    return (0, r.useEffect)((() => {
                        var e;
                        p && (null === (e = u.current) || void 0 === e || null === (e = e.getElementsByClassName("close-btn-container")) || void 0 === e || null === (e = e[0].getElementsByTagName("button")) || void 0 === e || null === (e = e[0]) || void 0 === e || e.focus())
                    }), [p]), a().createElement(a().Fragment, null, a().createElement(rt, {
                        appearance: "fullscreen",
                        classes: {
                            closeButton: tt
                        },
                        closeModal: d,
                        components: {
                            ModalContainerComp: vt
                        },
                        "data-testid": "language_modal",
                        id: "language_modal",
                        isOpen: p,
                        modalCloseAriaLabel: i,
                        modalContainerCompProps: {
                            handleModalClose: d,
                            className: nt
                        },
                        modalPortalCompProps: {
                            trapFocus: !1
                        },
                        ref: u,
                        title: (0, Me.A)("nav-geoselection-title", s)
                    }, a().createElement(ht, {
                        displayOnPage: !0
                    })))
                };
                bt.propTypes = {
                    shouldFocusOpenLangTunnelButton: (0, l.shape)({
                        current: l.bool
                    })
                };
                const Et = bt;
                var At = n(1857),
                    Ot = n(9189);
                const wt = e => {
                    let {
                        renderModal: t
                    } = e;
                    const n = (0, Ie.A)(),
                        {
                            openModal: o,
                            currentModal: i
                        } = (0, r.useContext)(mt.Ay),
                        {
                            engine: c
                        } = (0, r.useContext)(ft.Ig),
                        l = null == n ? void 0 : n.countryNames[n.language],
                        s = (0, At.A)(f._h),
                        u = (0, r.useRef)(!1),
                        d = (0, r.useRef)(!1),
                        p = "".concat((0, Me.A)("nav_header_label_selectACountry", "Selected Location"), ": ").concat(l),
                        {
                            mounted: m
                        } = (0, Ot.a)(),
                        y = i === mt.T0.LANGUAGE_TUNNEL;
                    return (0, r.useEffect)((() => {
                        var e;
                        const t = new URLSearchParams(null === (e = window.location) || void 0 === e ? void 0 : e.search);
                        m && "true" === t.get(f.Gf) && o(mt.T0.LANGUAGE_TUNNEL, 1)
                    }), [m]), (0, r.useEffect)((() => {
                        y && (null == c || c.track({
                            props: {
                                country: null == n ? void 0 : n.country
                            },
                            type: "click_navCountrySelectionOpen"
                        }))
                    }), [i]), (0, r.useEffect)((() => {
                        var e;
                        u.current && (u.current = !1, null === (e = d.current) || void 0 === e || e.focus())
                    })), a().createElement(a().Fragment, null, a().createElement($, {
                        className: "language-tunnel",
                        "data-testid": "language-tunnel"
                    }, s ? a().createElement(ee, {
                        Icon: a().createElement(te, null),
                        ariaLabel: p,
                        onClick: () => {
                            o(mt.T0.LANGUAGE_TUNNEL, 1)
                        },
                        ref: d,
                        title: p
                    }, l) : a().createElement(a().Fragment, null, a().createElement(te, null), l)), t && a().createElement(Et, {
                        shouldFocusOpenLangTunnelButton: u
                    }))
                };
                wt.propTypes = {
                    renderModal: s().bool
                };
                const _t = wt;
                var Nt = n(422);
                const Ct = e => {
                    const {
                        columns: t
                    } = e;
                    if (!t) return null;
                    const n = (0, I.N)((0, L.d)("lt", "m"));
                    return a().createElement(z, {
                        "data-testid": "desktop-footer-menu"
                    }, t.map(((e, t) => {
                        let {
                            header: n,
                            children: o
                        } = e;
                        const r = "footer-menu-col-".concat(t, "-header");
                        return a().createElement(H, {
                            className: "footer-menu-column",
                            "data-testid": "footer-menu-column-".concat(t),
                            key: t
                        }, n.label && (n.url ? a().createElement(j.A, {
                            className: D,
                            clickEventPayload: {
                                props: {
                                    path: n.path.join(":")
                                },
                                type: Nt.A.CLICK_NAV_FOOTER
                            },
                            dataTestId: r,
                            href: n.url,
                            text: n.label
                        }) : a().createElement(K, {
                            "data-testid": r
                        }, n.label)), o.map(((e, n) => {
                            const o = e.url;
                            if (!o) return null;
                            const r = "footer-menu-col-".concat(t, "-child-").concat(n);
                            return a().createElement(j.A, {
                                className: F,
                                clickEventPayload: {
                                    props: {
                                        path: e.path.join(":")
                                    },
                                    type: Nt.A.CLICK_NAV_FOOTER
                                },
                                dataTestId: r,
                                href: o,
                                key: r,
                                target: e.target,
                                text: e.label
                            })
                        })))
                    })), a().createElement(H, null, a().createElement(_t, {
                        renderModal: !n
                    })))
                };
                Ct.propTypes = {
                    columns: s().arrayOf(s().shape({
                        header: s().object,
                        children: s().arrayOf(s().object)
                    }))
                };
                const xt = Ct;
                var kt, St, Tt;
                const Rt = "footer-link",
                    Pt = "accordion-panel-wrapper",
                    Mt = "accordion-details",
                    It = m.A.div(kt || (kt = (0, p.A)(["\n  @media (", ") {\n    width: 100%;\n    .", " {\n      box-shadow: var(--podium-cds-color-border-tertiary) 0 -1px 0 0 inset;\n    }\n    .", " {\n      padding: 24px 0;\n    }\n    .", " p {\n      padding-bottom: 12px;\n    }\n  }\n\n  @media (", ") {\n    display: none;\n  }\n"])), O, Mt, Pt, Rt, A),
                    Lt = m.A.div(St || (St = (0, p.A)(["\n  @media (", ") {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    align-self: stretch;\n  }\n\n  @media (", ") {\n    display: none;\n  }\n"])), O, A),
                    jt = m.A.div(Tt || (Tt = (0, p.A)(["\n  height: 1px;\n  width: 100%;\n  flex-shrink: 0;\n  background: var(--podium-cds-color-border-tertiary);\n"]))),
                    Dt = e => {
                        const {
                            columns: t
                        } = e;
                        if (!t) return null;
                        const n = (0, I.N)((0, L.d)("lt", "m"));
                        return a().createElement(Lt, {
                            "data-testid": "mobile-footer-menu"
                        }, a().createElement(It, {
                            className: "mobile-footer-accordion"
                        }, a().createElement(be, {
                            animatable: !0,
                            id: "footer-accordion",
                            open: [0],
                            singlePanelOpenAtATime: !0
                        }, t.map(((e, t) => {
                            let {
                                children: n,
                                header: o
                            } = e;
                            return a().createElement(Pe, {
                                classes: {
                                    summary: Pt,
                                    details: Mt
                                },
                                detailsTitle: a().createElement(ce.z, {
                                    appearance: "body2Strong"
                                }, o.label),
                                id: "accordion-panel-".concat(t),
                                key: t
                            }, a().createElement(a().Fragment, null, n.map(((e, n) => {
                                const o = e.url;
                                if (!o) return null;
                                const r = "FooterColumnItem-".concat(t, "-").concat(n);
                                return a().createElement(j.A, {
                                    className: Rt,
                                    clickEventPayload: {
                                        props: {
                                            path: e.path.join(":")
                                        },
                                        type: Nt.A.CLICK_NAV_FOOTER
                                    },
                                    href: o,
                                    key: r,
                                    path: e.path,
                                    target: e.target
                                }, a().createElement(ce.z, {
                                    appearance: "body2Strong",
                                    color: "secondary"
                                }, null == e ? void 0 : e.label))
                            }))))
                        })))), a().createElement(_t, {
                            renderModal: n
                        }), a().createElement(jt, null))
                    };
                Dt.propTypes = {
                    columns: s().arrayOf(s().shape({
                        children: s().arrayOf(s().object)
                    }))
                };
                const Ft = Dt;
                var zt = n(7133),
                    Ht = n(8779);
                const Kt = e => {
                        const t = (0, At.A)(f.Sn),
                            n = (o = (0, Ht.Bq)(e.children), t ? o : null == o ? void 0 : o.filter((e => {
                                var t;
                                return !(null !== (t = e.url) && void 0 !== t && t.includes("site-feedback"))
                            })));
                        var o;
                        const [r, ...a] = n;
                        return {
                            header: r,
                            children: a
                        }
                    },
                    Ut = () => {
                        const e = (0, zt.A)(f.hL.FOOTER, f.wL.MAIN_FOOTER);
                        if (!e) return null;
                        const {
                            children: t
                        } = e;
                        if (!Array.isArray(t) || !t.length) return null;
                        const n = t.map(Kt);
                        return a().createElement(a().Fragment, null, a().createElement(Ft, {
                            columns: n
                        }), a().createElement(xt, {
                            columns: n
                        }))
                    };
                var Bt, Gt, Yt, Vt, Jt = n(8858);
                const qt = "footer-list",
                    Wt = "footer-drop-down",
                    Xt = "link-container",
                    Zt = m.A.div(Bt || (Bt = (0, p.A)(["\n  .", " {\n    margin: 0;\n    width: 100%;\n  }\n  .", " {\n    padding: 6px 12px;\n    &:hover {\n      background-color: var(--podium-cds-color-bg-hover);\n      p {\n        color: var(--podium-cds-color-text-primary);\n      }\n    }\n    & > a > p {\n      padding: 0;\n    }\n  }\n  position: relative;\n  display: flex;\n  align-items: center;\n  .", " {\n    background-color: var(--podium-cds-color-bg-primary);\n    right: auto;\n    left: -13px;\n    top: auto;\n    position: absolute;\n    transform: translateY(-100%);\n    border-radius: 8px;\n    width: 200px;\n    padding: 8px 0;\n    border: 1px solid var(--podium-cds-color-border-tertiary);\n    box-shadow: 0px 4px 8px 0px rgba(17, 17, 17, 0.06), 0px 0px 24px 4px rgba(17, 17, 17, 0.03);\n    &.is--open {\n      transform: translateY(-104%);\n    }\n    @media (", ") {\n      transform: translateY(-106%);\n      right: auto;\n      left: -13px;\n    }\n    .Column {\n      width: auto;\n    }\n  }\n"])), Xt, "dropdown__sub_list_item", Wt, O),
                    $t = (0, m.A)(j.A)(Gt || (Gt = (0, p.A)(["\n  display: flex;\n  img {\n    padding: 0 4px 0 0;\n  }\n  p {\n    color: var(--podium-cds-color-text-secondary);\n  }\n  &:hover {\n    p {\n      color: var(--podium-cds-color-text-primary);\n    }\n  }\n"]))),
                    Qt = m.A.div(Yt || (Yt = (0, p.A)(["\n  padding-bottom: 48px;\n  .", " {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    column-gap: 24px;\n    row-gap: 12px;\n    flex-wrap: wrap;\n    position: static;\n    border-top: 1px solid transparent;\n    @media (", ") {\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      align-items: flex-start;\n      gap: 10px;\n      align-self: stretch;\n      padding-bottom: 0px;\n    }\n    .", " {\n      display: flex;\n      align-items: center;\n      opacity: 1;\n      color: var(--podium-cds-color-text-secondary);\n      svg {\n        width: auto;\n      }\n    }\n\n    details[open] {\n      > summary {\n        color: var(--podium-cds-color-text-primary);\n      }\n    }\n  }\n"])), qt, O, Jt.ui),
                    en = m.A.li(Vt || (Vt = (0, p.A)(["\n  white-space: nowrap;\n"])));
                var tn = n(1431);
                const nn = e => {
                    const {
                        translationId: t,
                        values: n,
                        defaultValue: o,
                        attributes: r
                    } = e;
                    let i = (0, Me.A)(t, o);
                    return n && Object.keys(n).length > 0 && (i = ((e, t) => {
                        const n = new RegExp("[{}]", "g");
                        return e.split(n).map((e => t[e] ? t[e] : e))
                    })(i, n)), "string" == typeof i && (i = [i]), a().createElement("span", r, i)
                };
                nn.propTypes = {
                    translationId: l.string,
                    values: l.object,
                    defaultValue: l.string,
                    attributes: l.object
                };
                const on = nn;
                var rn = n(4413);

                function an(e) {
                    var t;
                    let {
                        link: n,
                        ...o
                    } = e;
                    const r = (0, At.A)(f.eN);
                    return a().createElement($t, (0, ae.A)({}, o, {
                        "aria-label": n.label,
                        clickEventPayload: {
                            props: {
                                path: n.classification
                            },
                            type: Nt.A.CLICK_NAV_FOOTER
                        },
                        href: n.url,
                        path: n.classification,
                        target: n.target
                    }), n.image && a().createElement("img", {
                        alt: "",
                        "aria-hidden": "true",
                        src: (0, Ht.hk)(n.image),
                        style: {
                            objectFit: "contain"
                        }
                    }), a().createElement(ce.z, {
                        appearance: "body2Strong",
                        bold: r && (null === (t = n.classification) || void 0 === t ? void 0 : t.includes("privacy")),
                        style: {
                            paddingLeft: "".concat(n.image ? "2px" : "0px")
                        }
                    }, n.label))
                }

                function cn(e) {
                    let {
                        link: t
                    } = e;
                    const {
                        url: n,
                        path: o,
                        analyticsEventName: i,
                        children: c,
                        label: l
                    } = t, s = { ...t,
                        content: c
                    }, [u, d] = (0, r.useState)(!1), p = {
                        props: {
                            path: o
                        },
                        type: i
                    }, m = s ? a().Fragment : j.A, f = {};
                    n && (f.clickEventPayload = p, f.href = n);
                    const y = {
                        [n ? "menuLink" : "styledSummaryText"]: a().createElement(m, f, a().createElement(ce.z, {
                            appearance: "body2Strong",
                            color: u ? "primary" : "secondary",
                            "data-testid": "desktop-user-menu-item-message-".concat(l)
                        }, l))
                    };
                    return a().createElement(tn.A, (0, ae.A)({
                        MenuContainerComponent: Zt,
                        detailsContentCustomClass: Wt,
                        isMenuOpen: u,
                        menuLabel: l,
                        setMenuOpen: d,
                        testId: "".concat(l, "-sub-footer-dropdown")
                    }, y), s && a().createElement(rn.A, {
                        containerClassName: Xt,
                        content: s,
                        textAppearance: "body2Strong"
                    }))
                }
                an.propTypes = {
                    link: (0, l.shape)({
                        url: l.string,
                        classification: l.string,
                        target: l.string,
                        image: l.string,
                        label: l.string
                    })
                }, cn.propTypes = {
                    link: (0, l.shape)({
                        url: l.string,
                        analyticsEventName: l.string,
                        path: (0, l.arrayOf)(l.string),
                        label: l.string,
                        children: (0, l.arrayOf)(l.object)
                    }),
                    itemIndex: l.number
                };
                const ln = () => {
                        var e;
                        const t = (0, zt.A)(f.hL.FOOTER, f.wL.BOTTOM_FOOTER),
                            {
                                COPY_RIGHTS: n
                            } = f.AJ;
                        if (!t) return null;
                        const o = (new Date).getFullYear();
                        return a().createElement(Qt, null, a().createElement("ul", {
                            "aria-label": "sub footer",
                            className: qt
                        }, a().createElement(en, null, a().createElement(ce.z, {
                            appearance: "body2Strong",
                            color: "secondary"
                        }, a().createElement(on, {
                            defaultValue: "© ".concat(o, " ").concat(n),
                            translationId: "nav_copyright",
                            values: {
                                current_year: o
                            }
                        }))), null == t || null === (e = t.children) || void 0 === e ? void 0 : e.map(((e, t) => {
                            const n = "SubFooterItem-".concat(t);
                            return a().createElement("li", {
                                key: n
                            }, e.children.length ? a().createElement(cn, {
                                index: t,
                                link: e
                            }) : a().createElement(an, {
                                link: e
                            }))
                        }))))
                    },
                    sn = "service@nike.co.kr",
                    un = "080-022-0182";
                var dn, pn, mn, fn;
                const {
                    podiumCdsIconButtonColorBgSecondaryHover: yn,
                    podiumCdsColorTextPrimaryOnDark: vn,
                    podiumCdsIconButtonColorBgSecondary: gn,
                    podiumCdsColorTextPrimaryOnLight: hn
                } = g.U, bn = "korea-legal-footer", En = "".concat(bn, "-section"), An = "".concat(bn, "-inline-button"), On = "".concat(bn, "-link"), wn = m.A.div(dn || (dn = (0, p.A)(["\n  color: var(--podium-cds-color-text-secondary);\n  display: flex;\n  gap: 12px;\n  font-weight: var(--podium-cds-font-weight-regular);\n  font-size: var(--podium-cds-font-size-xs);\n  font-family: Noto Sans KR;\n  @media (", ") {\n    flex-direction: column;\n  }\n  .", " {\n    width: 50%;\n    @media (", ") {\n      width: 100%;\n    }\n  }\n  .", " {\n    display: inline-block;\n    font-size: var(--podium-cds-font-size-xs);\n  }\n  .", " {\n    font-family: Noto Sans KR;\n    font-weight: var(--podium-cds-font-weight-regular);\n    text-decoration: underline;\n    text-decoration-color: var(--podium-cds-color-text-secondary);\n    color: var(--podium-cds-color-text-secondary);\n    &:hover {\n      color: var(--podium-cds-color-text-primary);\n    }\n  }\n"])), O, En, O, An, On), _n = m.A.p(pn || (pn = (0, p.A)(["\n  font-family: inherit;\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 24px;\n  text-align: left;\n  margin: 4px;\n"]))), Nn = "korea-modal-button", Cn = "korea-modal-main", xn = (0, m.A)(Le.R)(mn || (mn = (0, p.A)(["\n  .", " {\n    // ncss 4.2 compatibility\n    color: ", ";\n    ", "\n  }\n\n  // ncss 4.2 compatibility\n  .", " > .close-btn-container > button {\n    &:before {\n      border: none;\n    }\n    background-color: ", ";\n    color: ", ";\n    ", "\n    &:hover:not(:disabled),\n    &:active {\n      background-color: ", ";\n    }\n  }\n"])), Nn, vn, E, Cn, gn, hn, E, yn), kn = m.A.div(fn || (fn = (0, p.A)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n"])));
                var Sn = n(9261),
                    Tn = n(3899);
                const Rn = {
                        type: "click_navFooter",
                        path: ""
                    },
                    Pn = () => {
                        const {
                            currentModal: e,
                            openModal: t,
                            closeModal: n
                        } = (0, r.useContext)(mt.Ay), o = (0, Me.A)("nav_close_modal", f.AJ.CLOSE_MODAL), i = (0, Me.A)("nav_sub_footer_modal_title", f.AJ.KOREAN_MODAL_TITLE), c = (0, Me.A)("nav_sub_footer_modal_body_text_one", f.AJ.KOREAN_MODAL_TEXT_1), l = (0, Me.A)("nav_sub_footer_modal_body_text_two", f.AJ.KOREAN_MODAL_TEXT_2), s = (0, Me.A)("nav_sub_footer_modal_body_text_three", f.AJ.KOREAN_MODAL_TEXT_3), u = (0, Me.A)("nav_cookie_label_done", f.AJ.DONE), d = e === mt.T0.KOREAN_LEGAL, p = () => a().createElement(Sn.m, {
                            className: "modal-actions-styled"
                        }, a().createElement(Tn.A, {
                            appearance: "primary",
                            className: (0, ie.A)("responsive-btn", Nn),
                            onClick: n
                        }, u));
                        return a().createElement(a().Fragment, null, a().createElement(j.A, {
                            className: (0, ie.A)(An, On),
                            clickEventPayload: { ...Rn,
                                path: "confidential content business development act"
                            },
                            "data-var": "koreanContentProtectionBtn",
                            onClick: () => t(mt.T0.KOREAN_LEGAL, 1)
                        }, (0, Me.A)("nav_legal_info_link_text", f.AJ.READ_MORE)), a().createElement(xn, {
                            classes: {
                                main: Cn
                            },
                            closeModal: n,
                            "data-testid": "koreanModal",
                            isOpen: d,
                            modalCloseAriaLabel: o,
                            slots: {
                                FooterSlot: a().createElement(p, null)
                            },
                            title: i
                        }, a().createElement(kn, {
                            className: "pre-korean-legal-footer-modal-content"
                        }, a().createElement(_n, null, c), a().createElement(_n, null, l), a().createElement(_n, null, s))))
                    },
                    Mn = () => {
                        const e = {
                            type: "click_navFooter",
                            path: ""
                        };
                        return a().createElement(wn, {
                            "data-testid": "korean-legal-footer-container"
                        }, a().createElement("div", {
                            className: En
                        }, a().createElement(ce.z, null, a().createElement(on, {
                            defaultValue: "Business Info",
                            translationId: "nav_business_information_text",
                            values: {
                                phone: "220-88-09068 "
                            }
                        }), a().createElement(j.A, {
                            className: On,
                            clickEventPayload: { ...e,
                                path: "business information confirmation"
                            },
                            "data-var": "koreanBusinessInfoLink",
                            href: "https://www.ftc.go.kr/bizCommPop.do?wrkr_no=2208809068",
                            target: "_blank"
                        }, (0, Me.A)("nav_business_information_link_text", "Business Info Confirmation"))), a().createElement(ce.z, null, a().createElement(on, {
                            defaultValue: "Customer Service",
                            translationId: "nav_customer_service_text",
                            values: {
                                email: a().createElement(j.A, {
                                    className: On,
                                    clickEventPayload: { ...e,
                                        path: "customer service email"
                                    },
                                    "data-var": "koreanCustomerServiceEmail",
                                    href: "mailto:".concat(sn),
                                    key: "koreanCustomerServiceEmail"
                                }, sn),
                                fax: "02-6744-5880",
                                phone: a().createElement(j.A, {
                                    className: On,
                                    clickEventPayload: { ...e,
                                        path: "customer service phone"
                                    },
                                    "data-var": "koreanCustomerServicePhone",
                                    href: "tel:".concat(un),
                                    key: "koreanCustomerServicePhone",
                                    path: "customer service phone"
                                }, un)
                            }
                        }))), a().createElement("div", {
                            className: En
                        }, a().createElement(ce.z, null, a().createElement(on, {
                            defaultMessage: "Payment Text",
                            translationId: "nav_payment_information_text",
                            values: {
                                company: a().createElement(j.A, {
                                    className: (0, ie.A)(An, On),
                                    clickEventPayload: { ...e,
                                        path: "secure payment notification"
                                    },
                                    "data-var": "koreanSecurePaymentIcon",
                                    key: "koreanSecurePaymentIcon",
                                    onClick: () => {
                                        window.open("https://tnec.fpg.kr/escrow.html", "mark", "scrollbars=no,resizable=no,width=565,height=683")
                                    }
                                }, (0, Me.A)("nav_businness_company_text", "결제대금예치"))
                            }
                        }), (0, Me.A)("nav_businness_company_text", "결제대금예치") + " ", (0, Me.A)("nav_legal_info_text", "Information on Content Protection") + " ", a().createElement(Pn, null))))
                    },
                    In = () => {
                        var e;
                        const t = (0, At.A)(f.Zy),
                            {
                                opts: n
                            } = (0, Ot.a)(),
                            o = f.oj.includes(null == n || null === (e = n.appInfo) || void 0 === e ? void 0 : e.viewChannel);
                        return a().createElement(k, {
                            className: o && x,
                            role: "contentinfo"
                        }, a().createElement(T, null), a().createElement(Ut, null), a().createElement(S, {
                            className: "footer-spacer"
                        }), a().createElement(ln, null), t && a().createElement(a().Fragment, null, a().createElement(T, {
                            className: C
                        }), a().createElement(Mn, null)), a().createElement(ht, null))
                    };
                var Ln, jn = n(2893);
                const Dn = e => {
                        const {
                            children: t
                        } = e;
                        return a().createElement(jn.t, null, a().createElement(dt.B.Provider, {
                            value: [window.NAV_INITIAL_DATA]
                        }, a().createElement(Ot.f, null, a().createElement(d.WX, null, a().createElement(ft.Bl, null, a().createElement(u.Wj, null, a().createElement(mt.Zn, {
                            location: "FOOTER"
                        }, t)))))))
                    },
                    Fn = (null === (Ln = window.NikeDotcomNav) || void 0 === Ln || null === (Ln = Ln.newrelic) || void 0 === Ln ? void 0 : Ln.startTrace(f.et.FOOTER_HYDRATION)) || Ht.lQ;
                c().hydrate(a().createElement(Dn, null, a().createElement(In, null)), document.getElementById(f.yr), Fn), Dn.propTypes = {
                    children: l.node
                }
            },
            1384: (e, t, n) => {
                n.d(t, {
                    gN: () => o,
                    vZ: () => r
                });
                const o = e => "header" === (null == e ? void 0 : e.type),
                    r = e => {
                        const t = [];
                        if (Array.isArray(e) && e.length) {
                            t.push([e[0]]);
                            for (const n of e.slice(1)) o(n) ? t.push([n]) : t[t.length - 1].push(n)
                        }
                        return t
                    }
            },
            9725: (e, t, n) => {
                n.d(t, {
                    mF: () => r,
                    xS: () => a
                }), n(5157);
                var o = n(27);

                function r(e) {
                    var t;
                    let {
                        urlParam: n,
                        country: r,
                        cloudUrlFragment: a
                    } = e;
                    const i = "https://".concat("www.nike.com");
                    if ("US" === (null == r ? void 0 : r.toUpperCase()) && "en" === n) return i;
                    const c = "".concat(i, "/").concat(a && a + "/"),
                        l = null == a || null === (t = a.split("/")) || void 0 === t || null === (t = t[0]) || void 0 === t ? void 0 : t.toUpperCase();
                    if (o.v5.includes((null == r ? void 0 : r.toUpperCase()) || l)) {
                        var s, u;
                        const e = r || l;
                        return o.k[null === (s = "".concat(e, "_").concat(n.split("-")[0], "_HOMEPAGE")) || void 0 === s ? void 0 : s.toUpperCase()] || o.k[null === (u = "".concat(e, "_HOMEPAGE")) || void 0 === u ? void 0 : u.toUpperCase()]
                    }
                    return c
                }

                function a(e) {
                    return t => {
                        const n = r(t);
                        return n.endsWith("/") ? "".concat(n).concat(e) : "".concat(n, "/").concat(e)
                    }
                }
                n(6333)
            },
            4378: (e, t, n) => {
                n.d(t, {
                    g: () => o
                });
                const o = () => window.location
            },
            8781: (e, t, n) => {
                n.d(t, {
                    _m: () => b,
                    xS: () => E
                });
                var o = n(8122),
                    r = n(1979);

                function a(e, t, n) {
                    if (!t.exec(e)) throw new Error('cannot set locale: "'.concat(e, '" is not a recognized ').concat(n));
                    return e
                }
                var i = n(2259),
                    c = n(3478),
                    l = function(e, t, n) {
                        return c.A.set(e, t, n)
                    };

                function s(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var o = Object.getOwnPropertySymbols(e);
                        t && (o = o.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        }))), n.push.apply(n, o)
                    }
                    return n
                }

                function u(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? s(Object(n), !0).forEach((function(t) {
                            (0, r.A)(e, t, n[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : s(Object(n)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        }))
                    }
                    return e
                }
                var d = i.d.COUNTRY_COOKIE_KEY,
                    p = i.d.LANGUAGE_COOKIE_KEY,
                    m = i.d.COMBINED_COOKIE_KEY,
                    f = i.d.CHOICE_COOKIE_KEY,
                    y = i.d.CHOSEN_COOKIE_KEY,
                    v = i.A.countryRegex,
                    g = i.A.legacyLanguageRegex,
                    h = (i.A.combinedRegex, {
                        expires: 365
                    });

                function b() {
                    const {
                        country: e
                    } = (0, o.I_)() || {
                        country: null
                    };
                    return e ? e.toLowerCase() : null
                }

                function E(e, t, n) {
                    return function(e, t, n) {
                        var o, r, i = a(e, v, "marketplace"),
                            c = a(t, g, "language"),
                            s = u(u({}, h), {}, {
                                domain: (o = window.location.hostname, r = o.match(/[a-zA-Z0-9-]+\.com$/), r ? ".".concat(r[0]) : "")
                            }),
                            b = "".concat(i, "/").concat(c).toLowerCase();
                        return l(d, i, s), l(p, c, s), l(m, b, u(u({}, s), {}, {
                            expires: ""
                        })), !0 === n && (l(f, b, s), l(y, "t", s)), !0
                    }(e, t, n)
                }
                n(2129)
            },
            8779: (e, t, n) => {
                n.d(t, {
                    Bq: () => r,
                    hk: () => a,
                    lQ: () => o
                });
                const o = () => {};

                function r(e) {
                    const t = (e, n) => {
                        var o;
                        return e.push(n), null != n && null !== (o = n.children) && void 0 !== o && o.length ? n.children.reduce(t, e) : e
                    };
                    return e.reduce(t, [])
                }

                function a(e) {
                    return /^\/content\/dam/.test(e) ? "https://content.nike.com".concat(e) : e
                }
            },
            3142: (e, t, n) => {
                n.d(t, {
                    A: () => a
                });
                var o = n(3221),
                    r = n(8781);

                function a(e, t) {
                    return (0, o.If)(function(e, t) {
                        return (t && (0, r._m)() || e).toLowerCase()
                    }(e, t))
                }
            },
            1594: e => {
                e.exports = React
            },
            5206: e => {
                e.exports = ReactDOM
            },
            6211: (e, t, n) => {
                n.d(t, {
                    n1: () => u
                });
                var o = n(3551),
                    r = n(7789),
                    a = n(7428),
                    i = n(4235),
                    c = n(1594);
                const l = c.createContext(null);
                let s = null;

                function u(e) {
                    let {
                        children: t,
                        contain: n,
                        restoreFocus: o,
                        autoFocus: r
                    } = e, u = (0, c.useRef)(null), d = (0, c.useRef)(null), p = (0, c.useRef)([]), {
                        parentNode: m
                    } = (0, c.useContext)(l) || {}, w = (0, c.useMemo)((() => new _({
                        scopeRef: p
                    })), [p]);
                    (0, a.N)((() => {
                        let e = m || N.root;
                        if (N.getTreeNode(e.scopeRef) && s && !b(s, e.scopeRef)) {
                            let t = N.getTreeNode(s);
                            t && (e = t)
                        }
                        e.addChild(w), N.addNode(w)
                    }), [w, m]), (0, a.N)((() => {
                        let e = N.getTreeNode(p);
                        e && (e.contain = !!n)
                    }), [n]), (0, a.N)((() => {
                        var e;
                        let t = null === (e = u.current) || void 0 === e ? void 0 : e.nextSibling,
                            n = [];
                        for (; t && t !== d.current;) n.push(t), t = t.nextSibling;
                        p.current = n
                    }), [t]),
                    function(e, t, n) {
                        (0, a.N)((() => {
                            if (t || n) return;
                            let o = e.current;
                            const r = (0, i.T)(o ? o[0] : void 0);
                            let a = t => {
                                let n = t.target;
                                g(n, e.current) ? s = e : v(n) || (s = null)
                            };
                            return r.addEventListener("focusin", a, !1), null == o || o.forEach((e => e.addEventListener("focusin", a, !1))), () => {
                                r.removeEventListener("focusin", a, !1), null == o || o.forEach((e => e.removeEventListener("focusin", a, !1)))
                            }
                        }), [e, t, n])
                    }(p, o, n),
                    function(e, t) {
                        let n = (0, c.useRef)(),
                            o = (0, c.useRef)();
                        (0, a.N)((() => {
                            let r = e.current;
                            if (!t) return void(o.current && (cancelAnimationFrame(o.current), o.current = void 0));
                            const a = (0, i.T)(r ? r[0] : void 0);
                            let c = t => {
                                    if ("Tab" !== t.key || t.altKey || t.ctrlKey || t.metaKey || !y(e) || t.isComposing) return;
                                    let n = a.activeElement,
                                        o = e.current;
                                    if (!o || !g(n, o)) return;
                                    let r = O(f(o), {
                                        tabbable: !0
                                    }, o);
                                    if (!n) return;
                                    r.currentNode = n;
                                    let i = t.shiftKey ? r.previousNode() : r.nextNode();
                                    i || (r.currentNode = t.shiftKey ? o[o.length - 1].nextElementSibling : o[0].previousElementSibling, i = t.shiftKey ? r.previousNode() : r.nextNode()), t.preventDefault(), i && E(i, !0)
                                },
                                l = t => {
                                    s && !b(s, e) || !g(t.target, e.current) ? y(e) && !h(t.target, e) ? n.current ? n.current.focus() : s && s.current && A(s.current) : y(e) && (n.current = t.target) : (s = e, n.current = t.target)
                                },
                                u = t => {
                                    o.current && cancelAnimationFrame(o.current), o.current = requestAnimationFrame((() => {
                                        var o;
                                        a.activeElement && y(e) && !h(a.activeElement, e) && (s = e, a.body.contains(t.target) ? (n.current = t.target, null === (o = n.current) || void 0 === o || o.focus()) : s.current && A(s.current))
                                    }))
                                };
                            return a.addEventListener("keydown", c, !1), a.addEventListener("focusin", l, !1), null == r || r.forEach((e => e.addEventListener("focusin", l, !1))), null == r || r.forEach((e => e.addEventListener("focusout", u, !1))), () => {
                                a.removeEventListener("keydown", c, !1), a.removeEventListener("focusin", l, !1), null == r || r.forEach((e => e.removeEventListener("focusin", l, !1))), null == r || r.forEach((e => e.removeEventListener("focusout", u, !1)))
                            }
                        }), [e, t]), (0, a.N)((() => () => {
                            o.current && cancelAnimationFrame(o.current)
                        }), [o])
                    }(p, n),
                    function(e, t, n) {
                        const o = (0, c.useRef)("undefined" != typeof document ? (0, i.T)(e.current ? e.current[0] : void 0).activeElement : null);
                        (0, a.N)((() => {
                            let o = e.current;
                            const r = (0, i.T)(o ? o[0] : void 0);
                            if (!t || n) return;
                            let a = () => {
                                s && !b(s, e) || !g(r.activeElement, e.current) || (s = e)
                            };
                            return r.addEventListener("focusin", a, !1), null == o || o.forEach((e => e.addEventListener("focusin", a, !1))), () => {
                                r.removeEventListener("focusin", a, !1), null == o || o.forEach((e => e.removeEventListener("focusin", a, !1)))
                            }
                        }), [e, n]), (0, a.N)((() => {
                            const o = (0, i.T)(e.current ? e.current[0] : void 0);
                            if (!t) return;
                            let r = t => {
                                if ("Tab" !== t.key || t.altKey || t.ctrlKey || t.metaKey || !y(e) || t.isComposing) return;
                                let n = o.activeElement;
                                if (!g(n, e.current)) return;
                                let r = N.getTreeNode(e);
                                if (!r) return;
                                let a = r.nodeToRestore,
                                    i = O(o.body, {
                                        tabbable: !0
                                    });
                                i.currentNode = n;
                                let c = t.shiftKey ? i.previousNode() : i.nextNode();
                                if (a && o.body.contains(a) && a !== o.body || (a = void 0, r.nodeToRestore = void 0), (!c || !g(c, e.current)) && a) {
                                    i.currentNode = a;
                                    do {
                                        c = t.shiftKey ? i.previousNode() : i.nextNode()
                                    } while (g(c, e.current));
                                    t.preventDefault(), t.stopPropagation(), c ? E(c, !0) : v(a) ? E(a, !0) : n.blur()
                                }
                            };
                            return n || o.addEventListener("keydown", r, !0), () => {
                                n || o.removeEventListener("keydown", r, !0)
                            }
                        }), [e, t, n]), (0, a.N)((() => {
                            const n = (0, i.T)(e.current ? e.current[0] : void 0);
                            if (!t) return;
                            let r = N.getTreeNode(e);
                            var a;
                            return r ? (r.nodeToRestore = null !== (a = o.current) && void 0 !== a ? a : void 0, () => {
                                let o = N.getTreeNode(e);
                                if (!o) return;
                                let r = o.nodeToRestore;
                                if (t && r && (g(n.activeElement, e.current) || n.activeElement === n.body && function(e) {
                                        let t = N.getTreeNode(s);
                                        for (; t && t.scopeRef !== e;) {
                                            if (t.nodeToRestore) return !1;
                                            t = t.parent
                                        }
                                        return (null == t ? void 0 : t.scopeRef) === e
                                    }(e))) {
                                    let t = N.clone();
                                    requestAnimationFrame((() => {
                                        if (n.activeElement === n.body) {
                                            let n = t.getTreeNode(e);
                                            for (; n;) {
                                                if (n.nodeToRestore && n.nodeToRestore.isConnected) return void E(n.nodeToRestore);
                                                n = n.parent
                                            }
                                            for (n = t.getTreeNode(e); n;) {
                                                if (n.scopeRef && n.scopeRef.current && N.getTreeNode(n.scopeRef)) return void A(n.scopeRef.current, !0);
                                                n = n.parent
                                            }
                                        }
                                    }))
                                }
                            }) : void 0
                        }), [e, t])
                    }(p, o, n),
                    function(e, t) {
                        const n = c.useRef(t);
                        (0, c.useEffect)((() => {
                            n.current && (s = e, !g((0, i.T)(e.current ? e.current[0] : void 0).activeElement, s.current) && e.current && A(e.current)), n.current = !1
                        }), [e])
                    }(p, r), (0, c.useEffect)((() => {
                        const e = (0, i.T)(p.current ? p.current[0] : void 0).activeElement;
                        let t = null;
                        if (g(e, p.current)) {
                            for (let n of N.traverse()) n.scopeRef && g(e, n.scopeRef.current) && (t = n);
                            t === N.getTreeNode(p) && (s = t.scopeRef)
                        }
                    }), [p]), (0, a.N)((() => () => {
                        var e, t, n;
                        let o = null !== (n = null === (t = N.getTreeNode(p)) || void 0 === t || null === (e = t.parent) || void 0 === e ? void 0 : e.scopeRef) && void 0 !== n ? n : null;
                        p !== s && !b(p, s) || o && !N.getTreeNode(o) || (s = o), N.removeTreeNode(p)
                    }), [p]);
                    let C = (0, c.useMemo)((() => function(e) {
                            return {
                                focusNext(t = {}) {
                                    let n = e.current,
                                        {
                                            from: o,
                                            tabbable: r,
                                            wrap: a,
                                            accept: c
                                        } = t,
                                        l = o || (0, i.T)(n[0]).activeElement,
                                        s = n[0].previousElementSibling,
                                        u = O(f(n), {
                                            tabbable: r,
                                            accept: c
                                        }, n);
                                    u.currentNode = g(l, n) ? l : s;
                                    let d = u.nextNode();
                                    return !d && a && (u.currentNode = s, d = u.nextNode()), d && E(d, !0), d
                                },
                                focusPrevious(t = {}) {
                                    let n = e.current,
                                        {
                                            from: o,
                                            tabbable: r,
                                            wrap: a,
                                            accept: c
                                        } = t,
                                        l = o || (0, i.T)(n[0]).activeElement,
                                        s = n[n.length - 1].nextElementSibling,
                                        u = O(f(n), {
                                            tabbable: r,
                                            accept: c
                                        }, n);
                                    u.currentNode = g(l, n) ? l : s;
                                    let d = u.previousNode();
                                    return !d && a && (u.currentNode = s, d = u.previousNode()), d && E(d, !0), d
                                },
                                focusFirst(t = {}) {
                                    let n = e.current,
                                        {
                                            tabbable: o,
                                            accept: r
                                        } = t,
                                        a = O(f(n), {
                                            tabbable: o,
                                            accept: r
                                        }, n);
                                    a.currentNode = n[0].previousElementSibling;
                                    let i = a.nextNode();
                                    return i && E(i, !0), i
                                },
                                focusLast(t = {}) {
                                    let n = e.current,
                                        {
                                            tabbable: o,
                                            accept: r
                                        } = t,
                                        a = O(f(n), {
                                            tabbable: o,
                                            accept: r
                                        }, n);
                                    a.currentNode = n[n.length - 1].nextElementSibling;
                                    let i = a.previousNode();
                                    return i && E(i, !0), i
                                }
                            }
                        }(p)), []),
                        x = (0, c.useMemo)((() => ({
                            focusManager: C,
                            parentNode: w
                        })), [w, C]);
                    return c.createElement(l.Provider, {
                        value: x
                    }, c.createElement("span", {
                        "data-focus-scope-start": !0,
                        hidden: !0,
                        ref: u
                    }), t, c.createElement("span", {
                        "data-focus-scope-end": !0,
                        hidden: !0,
                        ref: d
                    }))
                }
                const d = ["input:not([disabled]):not([type=hidden])", "select:not([disabled])", "textarea:not([disabled])", "button:not([disabled])", "a[href]", "area[href]", "summary", "iframe", "object", "embed", "audio[controls]", "video[controls]", "[contenteditable]"],
                    p = d.join(":not([hidden]),") + ",[tabindex]:not([disabled]):not([hidden])";
                d.push('[tabindex]:not([tabindex="-1"]):not([disabled])');
                const m = d.join(':not([hidden]):not([tabindex="-1"]),');

                function f(e) {
                    return e[0].parentElement
                }

                function y(e) {
                    let t = N.getTreeNode(s);
                    for (; t && t.scopeRef !== e;) {
                        if (t.contain) return !1;
                        t = t.parent
                    }
                    return !0
                }

                function v(e) {
                    return h(e)
                }

                function g(e, t) {
                    return !!e && !!t && t.some((t => t.contains(e)))
                }

                function h(e, t = null) {
                    if (e instanceof Element && e.closest("[data-react-aria-top-layer]")) return !0;
                    for (let {
                            scopeRef: n
                        } of N.traverse(N.getTreeNode(t)))
                        if (n && g(e, n.current)) return !0;
                    return !1
                }

                function b(e, t) {
                    var n;
                    let o = null === (n = N.getTreeNode(t)) || void 0 === n ? void 0 : n.parent;
                    for (; o;) {
                        if (o.scopeRef === e) return !0;
                        o = o.parent
                    }
                    return !1
                }

                function E(e, t = !1) {
                    if (null == e || t) {
                        if (null != e) try {
                            e.focus()
                        } catch (e) {}
                    } else try {
                        (0, o.l)(e)
                    } catch (e) {}
                }

                function A(e, t = !0) {
                    let n = e[0].previousElementSibling,
                        o = f(e),
                        r = O(o, {
                            tabbable: t
                        }, e);
                    r.currentNode = n;
                    let a = r.nextNode();
                    t && !a && (o = f(e), r = O(o, {
                        tabbable: !1
                    }, e), r.currentNode = n, a = r.nextNode()), E(a)
                }

                function O(e, t, n) {
                    let o = (null == t ? void 0 : t.tabbable) ? m : p,
                        a = (0, i.T)(e).createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
                            acceptNode(e) {
                                var a;
                                return (null == t || null === (a = t.from) || void 0 === a ? void 0 : a.contains(e)) ? NodeFilter.FILTER_REJECT : !e.matches(o) || !(0, r.J)(e) || n && !g(e, n) || (null == t ? void 0 : t.accept) && !t.accept(e) ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT
                            }
                        });
                    return (null == t ? void 0 : t.from) && (a.currentNode = t.from), a
                }
                class w {
                    get size() {
                        return this.fastMap.size
                    }
                    getTreeNode(e) {
                        return this.fastMap.get(e)
                    }
                    addTreeNode(e, t, n) {
                        let o = this.fastMap.get(null != t ? t : null);
                        if (!o) return;
                        let r = new _({
                            scopeRef: e
                        });
                        o.addChild(r), r.parent = o, this.fastMap.set(e, r), n && (r.nodeToRestore = n)
                    }
                    addNode(e) {
                        this.fastMap.set(e.scopeRef, e)
                    }
                    removeTreeNode(e) {
                        if (null === e) return;
                        let t = this.fastMap.get(e);
                        if (!t) return;
                        let n = t.parent;
                        for (let e of this.traverse()) e !== t && t.nodeToRestore && e.nodeToRestore && t.scopeRef && t.scopeRef.current && g(e.nodeToRestore, t.scopeRef.current) && (e.nodeToRestore = t.nodeToRestore);
                        let o = t.children;
                        n && (n.removeChild(t), o.size > 0 && o.forEach((e => n && n.addChild(e)))), this.fastMap.delete(t.scopeRef)
                    }* traverse(e = this.root) {
                        if (null != e.scopeRef && (yield e), e.children.size > 0)
                            for (let t of e.children) yield* this.traverse(t)
                    }
                    clone() {
                        var e;
                        let t = new w;
                        var n;
                        for (let o of this.traverse()) t.addTreeNode(o.scopeRef, null !== (n = null === (e = o.parent) || void 0 === e ? void 0 : e.scopeRef) && void 0 !== n ? n : null, o.nodeToRestore);
                        return t
                    }
                    constructor() {
                        this.fastMap = new Map, this.root = new _({
                            scopeRef: null
                        }), this.fastMap.set(null, this.root)
                    }
                }
                class _ {
                    addChild(e) {
                        this.children.add(e), e.parent = this
                    }
                    removeChild(e) {
                        this.children.delete(e), e.parent = void 0
                    }
                    constructor(e) {
                        this.children = new Set, this.contain = !1, this.scopeRef = e.scopeRef
                    }
                }
                let N = new w
            },
            2129: e => {
                e.exports = {}
            },
            6333: e => {
                e.exports = {}
            }
        },
        n = {};

    function o(e) {
        var r = n[e];
        if (void 0 !== r) return r.exports;
        var a = n[e] = {
            exports: {}
        };
        return t[e].call(a.exports, a, a.exports, o), a.exports
    }
    o.m = t, e = [], o.O = (t, n, r, a) => {
        if (!n) {
            var i = 1 / 0;
            for (u = 0; u < e.length; u++) {
                n = e[u][0], r = e[u][1], a = e[u][2];
                for (var c = !0, l = 0; l < n.length; l++)(!1 & a || i >= a) && Object.keys(o.O).every((e => o.O[e](n[l]))) ? n.splice(l--, 1) : (c = !1, a < i && (i = a));
                if (c) {
                    e.splice(u--, 1);
                    var s = r();
                    void 0 !== s && (t = s)
                }
            }
            return t
        }
        a = a || 0;
        for (var u = e.length; u > 0 && e[u - 1][2] > a; u--) e[u] = e[u - 1];
        e[u] = [n, r, a]
    }, o.n = e => {
        var t = e && e.__esModule ? () => e.default : () => e;
        return o.d(t, {
            a: t
        }), t
    }, o.d = (e, t) => {
        for (var n in t) o.o(t, n) && !o.o(e, n) && Object.defineProperty(e, n, {
            enumerable: !0,
            get: t[n]
        })
    }, o.g = function() {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || new Function("return this")()
        } catch (e) {
            if ("object" == typeof window) return window
        }
    }(), o.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), o.r = e => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, o.j = 574, (() => {
        var e = {
            574: 0
        };
        o.O.j = t => 0 === e[t];
        var t = (t, n) => {
                var r, a, i = n[0],
                    c = n[1],
                    l = n[2],
                    s = 0;
                if (i.some((t => 0 !== e[t]))) {
                    for (r in c) o.o(c, r) && (o.m[r] = c[r]);
                    if (l) var u = l(o)
                }
                for (t && t(n); s < i.length; s++) a = i[s], o.o(e, a) && e[a] && e[a][0](), e[a] = 0;
                return o.O(u)
            },
            n = self.webpackChunkheader_footer_renderer = self.webpackChunkheader_footer_renderer || [];
        n.forEach(t.bind(null, 0)), n.push = t.bind(null, n.push.bind(n))
    })();
    var r = o.O(void 0, [223], (() => o(3744)));
    r = o.O(r)
})();