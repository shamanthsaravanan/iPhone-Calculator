"use strict";
(self.webpackChunk_nike_shop_components = self.webpackChunk_nike_shop_components || []).push([
    [5518], {
        2183: (e, n, t) => {
            t.d(n, {
                A: () => o
            });
            const r = function() {
                return window && window.newrelic
            };
            const o = function(e, n) {
                try {
                    if (!e) throw new Error("Name and Start are required fields");
                    return r().addPageAction(e, n)
                } catch (e) {
                    return console.error("".concat("Error sending metrics to New Relic", " ").concat(e))
                }
            }
        },
        3392: (e, n, t) => {
            t.d(n, {
                A: () => d
            });
            var r = t(1843),
                o = t(3807),
                i = t(5599),
                c = t(1597),
                a = t(3609);

            function u(e, n) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    n && (r = r.filter((function(n) {
                        return Object.getOwnPropertyDescriptor(e, n).enumerable
                    }))), t.push.apply(t, r)
                }
                return t
            }

            function s(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {};
                    n % 2 ? u(Object(t), !0).forEach((function(n) {
                        (0, r.A)(e, n, t[n])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : u(Object(t)).forEach((function(n) {
                        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                    }))
                }
                return e
            }

            function d(e) {
                var n = e.id,
                    t = e.token,
                    r = e.visitId,
                    u = e.visitorId,
                    d = e.host,
                    l = void 0 === d ? c.NIKE_API_HOST : d,
                    f = e.country,
                    p = e.language,
                    E = e.channel,
                    _ = e.cartId,
                    T = e.currency,
                    S = e.paypalClicked,
                    O = e.items,
                    g = e.appId,
                    I = void 0 === g ? c.DOTCOM_UX_ID : g,
                    v = e.cloudStack,
                    b = void 0 === v ? a.QG : v,
                    D = e.experiments,
                    A = void 0 === D ? void 0 : D;
                return (0, o.A)("".concat(l, "/").concat(a.NA, "/").concat(n), {
                    method: "PUT",
                    credentials: "include",
                    headers: s(s({}, a.cn), (0, i.A)({
                        token: t,
                        visitId: r,
                        visitorId: u,
                        appId: I,
                        cloudStack: b
                    })),
                    body: JSON.stringify({
                        country: f,
                        language: p,
                        channel: E,
                        cartId: _,
                        currency: T,
                        paypalClicked: S,
                        items: O,
                        experiments: A
                    })
                }, "Error creating link to Partner Cart.", {
                    pageActionName: "tread-partnercart-event"
                })
            }
        },
        328: (e, n, t) => {
            t.d(n, {
                A: () => d
            });
            var r = t(1843),
                o = t(3807),
                i = t(5599),
                c = t(1597),
                a = t(3609);

            function u(e, n) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    n && (r = r.filter((function(n) {
                        return Object.getOwnPropertyDescriptor(e, n).enumerable
                    }))), t.push.apply(t, r)
                }
                return t
            }

            function s(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {};
                    n % 2 ? u(Object(t), !0).forEach((function(n) {
                        (0, r.A)(e, n, t[n])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : u(Object(t)).forEach((function(n) {
                        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                    }))
                }
                return e
            }

            function d(e) {
                var n = e.id,
                    t = e.host,
                    r = void 0 === t ? c.NIKE_API_HOST : t,
                    u = e.token,
                    d = e.visitorId,
                    l = e.visitId,
                    f = e.cloudStack,
                    p = void 0 === f ? a.QG : f,
                    E = e.appId,
                    _ = void 0 === E ? c.DOTCOM_UX_ID : E;
                return (0, o.A)("".concat(r, "/").concat(a.NA, "/").concat(n), {
                    method: "GET",
                    credentials: "include",
                    headers: s(s({}, a.x8), (0, i.A)({
                        token: u,
                        visitId: l,
                        visitorId: d,
                        appId: _,
                        cloudStack: p
                    }))
                }, "Error retrieving Partner Cart.", {
                    pageActionName: "tread-partnercart-event"
                })
            }
        },
        3609: (e, n, t) => {
            t.d(n, {
                NA: () => r,
                QG: () => a,
                cn: () => i,
                x8: () => c
            });
            var r = "buy/partner_cart_preorder/v1",
                o = "application/json; charset=UTF-8",
                i = {
                    "Content-Type": o,
                    Accept: o
                },
                c = {
                    Accept: o
                },
                a = "buy_domain"
        },
        167: (e, n, t) => {
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.ENV_DEFAULTS = n.UNITE_DEFAULTS = n.VIEW_IDS = n.VIEWS = n.ACCESS_LEVELS = n.DOTCOM_APP_ID = n.DOTCOM_TEST_ID = n.DOTCOM_CLIENT_ID = n.DEFAULT_UNITE_ID = n.DEFAULT_LOCALE = n.UNITE_TEST_CDN = n.UNITE_CDN = void 0;
            var r = t(1597),
                o = "https://s3.nikecdn.com/unite/scripts/unite.min.js";
            n.UNITE_CDN = o;
            var i = "https://s3.nikecdn.com/unite-dev/stage/scripts/unite.min.js";
            n.UNITE_TEST_CDN = i;
            var c = "en_US";
            n.DEFAULT_LOCALE = c;
            var a = "nike-unite";
            n.DEFAULT_UNITE_ID = a;
            var u = "HlHa2Cje3ctlaOqnxvgZXNaAs7T9nAuH";
            n.DOTCOM_CLIENT_ID = u;
            var s = "XgqbVPs0nNlYZv3fFxx9dummU5SBb5l2";
            n.DOTCOM_TEST_ID = s;
            n.DOTCOM_APP_ID = "i4h4OXhiRBW0kGA4ovgt4HXdwGsngNKR";
            n.ACCESS_LEVELS = {
                purchase: "A",
                edit: "B",
                shop: "C",
                unauthenticated: "D"
            };
            n.VIEWS = {
                appLanding: "appLanding",
                confirmPasswordReset: "confirmPasswordReset",
                error: "error",
                join: "join",
                link: "link",
                login: "login",
                loginContinuity: "loginContinuity",
                loginDropdown: "loginDropdown",
                mobileVerificationCode: "mobileVerificationCode",
                none: "none",
                progressive: "progressive",
                reauth: "reauth",
                resetPassword: "resetPassword",
                socialJoin: "socialJoin",
                updatePassword: "updatePassword"
            };
            n.VIEW_IDS = ["nike-unite-app-landing-view", "nike-unite-confirm-password-reset-view", "nike-unite-error-view", "nike-unite-join-view", "nike-unite-link-view", "nike-unite-link-no-email-view", "nike-unite-login-view", "nike-unite-login-continuity-view", "nike-unite-login-dropdown-view", "nike-unite-mobile-verification-code-view", "nike-unite-progressive-profile-view", "nike-unite-reauth-view", "nike-unite-reset-password-view", "nike-unite-update-password-view"];
            var d = {
                type: "text/javascript",
                async: !0,
                id: a,
                locale: c,
                allowqueryparams: !0
            };
            n.UNITE_DEFAULTS = d;
            var l = {
                dev: {
                    src: i,
                    clientid: s,
                    environment: "ci",
                    backendenvironment: "identityInt"
                },
                prod: {
                    src: o,
                    clientid: u,
                    id: a,
                    uxid: r.DOTCOM_UX_ID,
                    backendenvironment: "identity",
                    environment: "production",
                    allowqueryparams: !0,
                    locale: c
                }
            };
            n.ENV_DEFAULTS = l
        },
        1066: (e, n, t) => {
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.createUniteScriptTag = function(e) {
                var n = "";
                e.defaultview && (n = '\ndata-defaultview="'.concat(e.defaultview, '"'));
                return '<script\nsrc="'.concat(e.src || r.UNITE_CDN, '"').concat(n, '\ntype="text/javascript"\nid="nike-unite"\nasync="true"\ndata-clientid="').concat(e.clientid, '"\ndata-uxid="').concat(e.uxid, '"\ndata-locale="').concat(e.locale, '"\ndata-allowqueryparams="true"\ndata-backendenvironment="').concat(e.backendenvironment || "identity", '"\ndata-environment="').concat(e.environment || "production", '">\n<\/script>')
            }, n.createUniteScriptElem = function() {
                var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
                    n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    t = e ? "prod" : "dev",
                    o = i(i(i({}, r.UNITE_DEFAULTS), r.ENV_DEFAULTS[t]), n),
                    c = ["id", "src", "type", "async"],
                    a = document.createElement("script");
                return Object.keys(o).forEach((function(e) {
                    var n = c.includes(e) ? e : "data-".concat(e);
                    a.setAttribute(n.toLowerCase(), o[e])
                })), document.head.appendChild(a), !0
            };
            var r = t(167);

            function o(e, n) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    n && (r = r.filter((function(n) {
                        return Object.getOwnPropertyDescriptor(e, n).enumerable
                    }))), t.push.apply(t, r)
                }
                return t
            }

            function i(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {};
                    n % 2 ? o(Object(t), !0).forEach((function(n) {
                        c(e, n, t[n])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : o(Object(t)).forEach((function(n) {
                        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                    }))
                }
                return e
            }

            function c(e, n, t) {
                return n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t, e
            }
        },
        7622: (e, n, t) => {
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), Object.defineProperty(n, "VIEWS", {
                enumerable: !0,
                get: function() {
                    return r.VIEWS
                }
            }), Object.defineProperty(n, "VIEW_IDS", {
                enumerable: !0,
                get: function() {
                    return r.VIEW_IDS
                }
            }), Object.defineProperty(n, "ACCESS_LEVELS", {
                enumerable: !0,
                get: function() {
                    return r.ACCESS_LEVELS
                }
            }), Object.defineProperty(n, "UNITE_PROD_CDN", {
                enumerable: !0,
                get: function() {
                    return r.UNITE_CDN
                }
            }), Object.defineProperty(n, "UNITE_TEST_CDN", {
                enumerable: !0,
                get: function() {
                    return r.UNITE_TEST_CDN
                }
            }), Object.defineProperty(n, "DOTCOM_PROD_CLIENT_ID", {
                enumerable: !0,
                get: function() {
                    return r.DOTCOM_CLIENT_ID
                }
            }), Object.defineProperty(n, "DOTCOM_TEST_CLIENT_ID", {
                enumerable: !0,
                get: function() {
                    return r.DOTCOM_TEST_ID
                }
            }), Object.defineProperty(n, "createUniteScriptElem", {
                enumerable: !0,
                get: function() {
                    return o.createUniteScriptElem
                }
            }), Object.defineProperty(n, "createUniteScriptTag", {
                enumerable: !0,
                get: function() {
                    return o.createUniteScriptTag
                }
            }), Object.defineProperty(n, "getAccessLevel", {
                enumerable: !0,
                get: function() {
                    return i.getAccessLevel
                }
            }), Object.defineProperty(n, "getCredential", {
                enumerable: !0,
                get: function() {
                    return i.getCredential
                }
            }), Object.defineProperty(n, "getUnite", {
                enumerable: !0,
                get: function() {
                    return i.getUnite
                }
            }), Object.defineProperty(n, "getUserProfile", {
                enumerable: !0,
                get: function() {
                    return i.getUserProfile
                }
            }), Object.defineProperty(n, "getUserProfileWithForceRefresh", {
                enumerable: !0,
                get: function() {
                    return i.getUserProfileWithForceRefresh
                }
            }), Object.defineProperty(n, "getUserState", {
                enumerable: !0,
                get: function() {
                    return i.getUserState
                }
            }), Object.defineProperty(n, "getVisitData", {
                enumerable: !0,
                get: function() {
                    return i.getVisitData
                }
            }), Object.defineProperty(n, "onJoinFailure", {
                enumerable: !0,
                get: function() {
                    return i.onJoinFailure
                }
            }), Object.defineProperty(n, "onJoinSuccess", {
                enumerable: !0,
                get: function() {
                    return i.onJoinSuccess
                }
            }), Object.defineProperty(n, "onJoinSuccessRemoveHandler", {
                enumerable: !0,
                get: function() {
                    return i.onJoinSuccessRemoveHandler
                }
            }), Object.defineProperty(n, "onLoginFailure", {
                enumerable: !0,
                get: function() {
                    return i.onLoginFailure
                }
            }), Object.defineProperty(n, "onLoginSuccess", {
                enumerable: !0,
                get: function() {
                    return i.onLoginSuccess
                }
            }), Object.defineProperty(n, "onLoginSuccessRemoveHandler", {
                enumerable: !0,
                get: function() {
                    return i.onLoginSuccessRemoveHandler
                }
            }), Object.defineProperty(n, "onUniteInit", {
                enumerable: !0,
                get: function() {
                    return i.onUniteInit
                }
            }), Object.defineProperty(n, "sessionLogout", {
                enumerable: !0,
                get: function() {
                    return i.sessionLogout
                }
            });
            var r = t(167),
                o = t(1066),
                i = t(8919)
        },
        8919: (e, n) => {
            function t(e, n) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    n && (r = r.filter((function(n) {
                        return Object.getOwnPropertyDescriptor(e, n).enumerable
                    }))), t.push.apply(t, r)
                }
                return t
            }

            function r(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var r = null != arguments[n] ? arguments[n] : {};
                    n % 2 ? t(Object(r), !0).forEach((function(n) {
                        o(e, n, r[n])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : t(Object(r)).forEach((function(n) {
                        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
                    }))
                }
                return e
            }

            function o(e, n, t) {
                return n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t, e
            }

            function i(e) {
                return function(n, t) {
                    e({
                        result: n,
                        code: t
                    })
                }
            }

            function c(e) {
                return window.addEventListener("nikeUniteInit", e, !1)
            }

            function a() {
                return new Promise((function(e) {
                    return window && window.nike && window.nike.unite && window.nike.unite.isInitialized ? e(window.nike.unite) : c((function() {
                        return e(window.nike.unite)
                    }))
                }))
            }
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.rejectError = i, n.onUniteInit = c, n.getUnite = a, n.getCredential = function() {
                return new Promise((function(e, n) {
                    a().then((function(t) {
                        t.session.getCredential(e, i(n))
                    }))
                }))
            }, n.getUserProfileWithForceRefresh = function() {
                return new Promise((function(e, n) {
                    var t = function(n, t) {
                        var o = n.entity || n;
                        return e(r(r({}, o), {}, {
                            ID: o.id,
                            userType: t
                        }))
                    };
                    a().then((function(e) {
                        e.session.getUserProfileWithForceRefresh(t, i(n))
                    }))
                }))
            }, n.getVisitData = function() {
                return new Promise((function(e, n) {
                    a().then((function(t) {
                        t.session.getVisitData(e, i(n))
                    }))
                }))
            }, n.getAccessLevel = function() {
                return new Promise((function(e, n) {
                    a().then((function(t) {
                        t.session.getAccessLevel(e, i(n))
                    }))
                }))
            }, n.getUserProfile = function() {
                return new Promise((function(e, n) {
                    var t = function(n, t) {
                        var o = n.entity || n;
                        return e(r(r({}, o), {}, {
                            ID: o.upmId || o.id,
                            userType: t
                        }))
                    };
                    a().then((function(e) {
                        e.session.getUserProfile(t, i(n))
                    }))
                }))
            }, n.getUserState = function(e, n) {
                return new Promise((function(t, r) {
                    a().then((function(t) {
                        t.api.user.getState(e, n, i(r))
                    }))
                }))
            }, n.sessionLogout = function() {
                return new Promise((function(e) {
                    a().then((function(n) {
                        n.session.logout(e)
                    }))
                }))
            }, n.onLoginSuccess = function(e) {
                return new Promise((function(n) {
                    a().then((function(n) {
                        n.on.login.success.addHandler(e)
                    })).then(n)
                }))
            }, n.onLoginSuccessRemoveHandler = function(e) {
                return new Promise((function(n) {
                    a().then((function(n) {
                        n.on.login.success.removeHandler(e)
                    })).then(n)
                }))
            }, n.onLoginFailure = function(e) {
                return new Promise((function(n) {
                    a().then((function(n) {
                        n.on.login.fail.addHandler(e)
                    })).then(n)
                }))
            }, n.onJoinSuccess = function(e) {
                return new Promise((function(n) {
                    a().then((function(n) {
                        n.on.join.success.addHandler(e)
                    })).then(n)
                }))
            }, n.onJoinSuccessRemoveHandler = function(e) {
                return new Promise((function(n) {
                    a().then((function(n) {
                        n.on.join.success.removeHandler(e)
                    })).then(n)
                }))
            }, n.onJoinFailure = function(e) {
                return new Promise((function(n) {
                    a().then((function(n) {
                        n.on.join.fail.addHandler(e)
                    })).then(n)
                }))
            }
        },
        4845: (e, n, t) => {
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.onError = l, n.initUnite = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    n = e.startTime,
                    t = e.onLoadSuccess,
                    r = e.onJoinSuccess,
                    u = e.onLoginSuccess,
                    s = e.onLogoutSuccess,
                    f = e.debug;
                return function(e) {
                    return (0, o.getUnite)().then((function(o) {
                        var _ = o && o.session;
                        return e({
                            type: i.NIKE_UNITE_INIT,
                            payload: {
                                startTime: n,
                                time: Date.now()
                            }
                        }), n && (0, c.default)({
                            startTime: n,
                            endTime: Date.now(),
                            status: "Initialized",
                            debug: f
                        }), o.on.facebooksdk.load.success.fired ? e(d()) : o.on.facebooksdk.load.success.addHandler((function(n) {
                            return e(d(n))
                        })), o.api.user.getState("isSwooshUser", (function(n) {
                            return e({
                                type: i.CHECK_SWOOSH_STATUS,
                                payload: n
                            })
                        }), (function(n, t) {
                            return e(l({
                                messages: n,
                                code: t
                            }))
                        })), o.api.user.getState("isMobileVerified", (function(n) {
                            return e({
                                type: i.MOBILE_VERIFICATION,
                                payload: n
                            })
                        }), (function(n, t) {
                            return e(l({
                                messages: n,
                                code: t
                            }))
                        })), o.on.login.success.addHandler((function(n) {
                            n.access_token && (p({
                                authToken: n.access_token,
                                userId: n.user_id,
                                session: _,
                                debug: f,
                                status: "Login",
                                startTime: Date.now()
                            }, e, u), e(a()))
                        })), o.on.login.fail.addHandler((function(n) {
                            (0, c.default)({
                                status: "Login failed"
                            }), e(l(n))
                        })), o.on.join.success.addHandler((function(n) {
                            n.access_token && (p({
                                authToken: n.access_token,
                                userId: n.user_id,
                                session: _,
                                debug: f,
                                status: "Join",
                                startTime: Date.now()
                            }, e, r), e(a()))
                        })), o.on.join.fail.addHandler((function(n) {
                            (0, c.default)({
                                status: "Join failed"
                            }), e(l(n))
                        })), o.on.logout.addHandler((function() {
                            s && (s(), (0, c.default)({
                                status: "Logged out"
                            }))
                        })), e(E({
                            session: _,
                            onLoadSuccess: t,
                            startTime: n,
                            debug: f
                        }))
                    }), (function(n) {
                        return e(l(n))
                    }))
                }
            }, n.logout = n.logoutFailure = n.logoutSuccess = n.initSession = n.processCredentials = n.updateAccessLevel = n.clearUniteError = n.onFbLoadSuccess = n.setAccessLevel = n.openMobileVerificationModal = n.openUpdatePasswordModal = n.openSocialJoinModal = n.openResetPasswordModal = n.openReauthModal = n.openProgressiveModal = n.openNoneModal = n.openLoginDropdownModal = n.openLoginContinuityModal = n.openLoginModal = n.openLinkModal = n.openJoinModal = n.openErrorModal = n.openAppLandingModal = n.openModal = n.closeModal = void 0;
            var r, o = t(7622),
                i = t(7839),
                c = (r = t(448)) && r.__esModule ? r : {
                    default: r
                };
            var a = function() {
                return {
                    type: i.CLOSE_MODAL
                }
            };
            n.closeModal = a;
            var u = function(e) {
                return {
                    type: i.OPEN_MODAL,
                    payload: e
                }
            };
            n.openModal = u;
            n.openAppLandingModal = function() {
                return u(o.VIEWS.appLanding)
            };
            n.openErrorModal = function() {
                return u(o.VIEWS.error)
            };
            n.openJoinModal = function() {
                return u(o.VIEWS.join)
            };
            n.openLinkModal = function() {
                return u(o.VIEWS.link)
            };
            n.openLoginModal = function() {
                return u(o.VIEWS.login)
            };
            n.openLoginContinuityModal = function() {
                return u(o.VIEWS.loginContinuity)
            };
            n.openLoginDropdownModal = function() {
                return u(o.VIEWS.loginDropdown)
            };
            n.openNoneModal = function() {
                return u(o.VIEWS.none)
            };
            n.openProgressiveModal = function() {
                return u(o.VIEWS.progressive)
            };
            n.openReauthModal = function() {
                return u(o.VIEWS.reauth)
            };
            n.openResetPasswordModal = function() {
                return u(o.VIEWS.resetPassword)
            };
            n.openSocialJoinModal = function() {
                return u(o.VIEWS.socialJoin)
            };
            n.openUpdatePasswordModal = function() {
                return u(o.VIEWS.updatePassword)
            };
            n.openMobileVerificationModal = function() {
                return u(o.VIEWS.mobileVerificationCode)
            };
            var s = function(e) {
                return {
                    type: i.SET_ACCESS_LEVEL,
                    payload: e
                }
            };
            n.setAccessLevel = s;
            var d = function(e) {
                return {
                    type: i.FB_SDK_LOAD_SUCCESS,
                    payload: e
                }
            };

            function l(e) {
                return {
                    type: i.SET_ERROR,
                    error: !0,
                    payload: e
                }
            }
            n.onFbLoadSuccess = d;
            n.clearUniteError = function() {
                return {
                    type: i.CLEAR_UNITE_ERROR
                }
            };
            var f = function() {
                return function(e) {
                    return (0, o.getAccessLevel)().then((function(n) {
                        return e(s(n))
                    }))
                }
            };
            n.updateAccessLevel = f;
            var p = function(e, n, t) {
                var r = e.authToken,
                    a = e.userId,
                    u = e.session,
                    s = e.startTime,
                    d = e.debug,
                    p = e.status;
                return (0, o.getUserProfile)().then((function(e) {
                    return u.getVisitData((function(o) {
                        s && (0, c.default)({
                            startTime: s,
                            endTime: Date.now(),
                            status: p || "Member",
                            debug: d
                        }), n({
                            type: i.SET_USER_DATA,
                            payload: {
                                profile: e,
                                authToken: r,
                                userId: a,
                                sessionData: o,
                                isLoggedIn: !0,
                                timestamp: Date.now(),
                                endTime: Date.now()
                            }
                        }), n(f()), t && t()
                    }), (function(e) {
                        e && n(l(e))
                    }))
                }), (function() {
                    return u.getVisitData((function(e) {
                        s && (0, c.default)({
                            startTime: s,
                            endTime: Date.now(),
                            status: p || "Member",
                            debug: d
                        }), n({
                            type: i.SET_USER_DATA,
                            payload: {
                                authToken: r,
                                userId: a,
                                sessionData: e,
                                isLoggedIn: !0,
                                timestamp: Date.now(),
                                endTime: Date.now()
                            }
                        }), n(f()), t && t()
                    }), (function(e) {
                        e && n(l(e))
                    }))
                }))
            };
            n.processCredentials = p;
            var E = function(e) {
                var n = e.session,
                    t = e.onLoadSuccess,
                    r = e.startTime,
                    o = e.debug;
                return function(e) {
                    return e({
                        type: i.GET_CREDENTIAL_START,
                        payload: {
                            startTime: r,
                            time: Date.now()
                        }
                    }), n.getCredential((function(a) {
                        if (a && a.access_token) {
                            var u = a.access_token,
                                s = a.user_id;
                            return p({
                                authToken: u,
                                userId: s,
                                session: n,
                                startTime: r,
                                debug: o
                            }, e, t)
                        }
                        return n.getVisitData((function(n) {
                            r && (0, c.default)({
                                startTime: r,
                                endTime: Date.now(),
                                status: "Guest",
                                debug: o
                            }), e({
                                type: i.SET_USER_DATA,
                                payload: {
                                    sessionData: n,
                                    timestamp: Date.now(),
                                    endTime: Date.now()
                                }
                            }), e(f()), t && t()
                        }), (function(n) {
                            n && e(l(n))
                        }))
                    }), (function(n) {
                        n && e(l(n))
                    }))
                }
            };
            n.initSession = E;
            var _ = function(e) {
                return {
                    type: i.LOGOUT_SUCCESS,
                    payload: e
                }
            };
            n.logoutSuccess = _;
            n.logoutFailure = function(e) {
                return {
                    type: i.LOGOUT_FAILURE,
                    error: !0,
                    payload: e
                }
            };
            n.logout = function() {
                return function(e) {
                    return (0, o.sessionLogout)().then((function(n) {
                        e(_(n)), e(f()), (0, c.default)({
                            status: "Explicit logout"
                        })
                    }))
                }
            }
        },
        7839: (e, n, t) => {
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.INITIAL_USER_STATE = n.TREAD_UNITE_EVENT = n.CLEAR_UNITE_ERROR = n.SET_USER_DATA = n.SET_ERROR = n.SET_ACCESS_LEVEL = n.GET_CREDENTIAL_START = n.OPEN_MODAL = n.NIKE_UNITE_INIT = n.MOBILE_VERIFICATION = n.LOGOUT_SUCCESS = n.LOGOUT_FAILURE = n.FETCH_IDENTITY_DATA_SUCCESS = n.FETCH_IDENTITY_DATA_FAILURE = n.FETCH_IDENTITY_DATA = n.FB_SDK_LOAD_SUCCESS = n.CLOSE_MODAL = n.CHECK_SWOOSH_STATUS = n.USER_STATE_KEY = n.NAME = void 0;
            var r = t(7622),
                o = "@unite";
            n.NAME = o;
            var i = o;
            n.USER_STATE_KEY = i;
            var c = "".concat(o, "/CHECK_SWOOSH_STATUS");
            n.CHECK_SWOOSH_STATUS = c;
            var a = "".concat(o, "/MODAL/CLOSE");
            n.CLOSE_MODAL = a;
            var u = "".concat(o, "/FB_SDK_LOAD_SUCCESS");
            n.FB_SDK_LOAD_SUCCESS = u;
            var s = "".concat(o, "/FETCH_IDENTITY_DATA");
            n.FETCH_IDENTITY_DATA = s;
            var d = "".concat(o, "/FETCH_IDENTITY_DATA_FAILURE");
            n.FETCH_IDENTITY_DATA_FAILURE = d;
            var l = "".concat(o, "/FETCH_IDENTITY_DATA_SUCCESS");
            n.FETCH_IDENTITY_DATA_SUCCESS = l;
            var f = "".concat(o, "/LOGOUT/FAILURE");
            n.LOGOUT_FAILURE = f;
            var p = "".concat(o, "/LOGOUT/SUCCESS");
            n.LOGOUT_SUCCESS = p;
            var E = "".concat(o, "/MOBILE_VERIFICATION");
            n.MOBILE_VERIFICATION = E;
            var _ = "".concat(o, "/INIT");
            n.NIKE_UNITE_INIT = _;
            var T = "".concat(o, "/MODAL/OPEN");
            n.OPEN_MODAL = T;
            var S = "".concat(o, "/GET_CREDENTIAL_START");
            n.GET_CREDENTIAL_START = S;
            var O = "".concat(o, "/SET_ACCESS_LEVEL");
            n.SET_ACCESS_LEVEL = O;
            var g = "".concat(o, "/SET_ERROR");
            n.SET_ERROR = g;
            var I = "".concat(o, "/SET_USER_DATA");
            n.SET_USER_DATA = I;
            var v = "".concat(o, "/CLEAR_UNITE_ERROR");
            n.CLEAR_UNITE_ERROR = v;
            n.TREAD_UNITE_EVENT = "tread-unite-event";
            var b = {
                accessLevel: r.ACCESS_LEVELS.unauthenticated,
                additionalAddresses: [],
                authToken: void 0,
                billingAddressGUID: null,
                credentials: null,
                error: null,
                initialized: !1,
                profile: {},
                sessionData: {},
                shippingAddress: null,
                swooshAccess: !1,
                view: r.VIEWS.none,
                isModalOpen: !1,
                isSwooshUser: !1,
                isMobileVerified: !1,
                isLoggedIn: !1,
                facebookLoaded: !1
            };
            n.INITIAL_USER_STATE = b
        }
    }
]);
//# sourceMappingURL=npm.nike-06ba726b.chunk.1c2c37.js.map