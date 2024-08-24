"use strict";
(self.webpackChunk_nike_shop_components = self.webpackChunk_nike_shop_components || []).push([
    [6837], {
        361: (e, t, r) => {
            r.d(t, {
                GM: () => d
            });
            "function" == typeof Symbol && Symbol.iterator, Object.assign;
            Object.assign;
            "function" == typeof Symbol && Symbol.iterator, Object.assign;
            var n = r(8940),
                o = "persist/FLUSH",
                i = "persist/REHYDRATE",
                s = "persist/PAUSE",
                u = "persist/PERSIST",
                f = "persist/PURGE",
                a = "persist/REGISTER",
                c = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                };

            function l(e) {
                if (Array.isArray(e)) {
                    for (var t = 0, r = Array(e.length); t < e.length; t++) r[t] = e[t];
                    return r
                }
                return Array.from(e)
            }
            var y = {
                    registry: [],
                    bootstrapped: !1
                },
                p = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : y,
                        t = arguments[1];
                    switch (t.type) {
                        case a:
                            return c({}, e, {
                                registry: [].concat(l(e.registry), [t.key])
                            });
                        case i:
                            var r = e.registry.indexOf(t.key),
                                n = [].concat(l(e.registry));
                            return n.splice(r, 1), c({}, e, {
                                registry: n,
                                bootstrapped: 0 === n.length
                            });
                        default:
                            return e
                    }
                };

            function d(e, t, r) {
                var l = r || !1,
                    d = (0, n.y$)(p, y, t ? t.enhancer : void 0),
                    v = function(e) {
                        d.dispatch({
                            type: a,
                            key: e
                        })
                    },
                    h = function(t, r, n) {
                        var o = {
                            type: i,
                            payload: r,
                            err: n,
                            key: t
                        };
                        e.dispatch(o), d.dispatch(o), l && m.getState().bootstrapped && (l(), l = !1)
                    },
                    m = c({}, d, {
                        purge: function() {
                            var t = [];
                            return e.dispatch({
                                type: f,
                                result: function(e) {
                                    t.push(e)
                                }
                            }), Promise.all(t)
                        },
                        flush: function() {
                            var t = [];
                            return e.dispatch({
                                type: o,
                                result: function(e) {
                                    t.push(e)
                                }
                            }), Promise.all(t)
                        },
                        pause: function() {
                            e.dispatch({
                                type: s
                            })
                        },
                        persist: function() {
                            e.dispatch({
                                type: u,
                                register: v,
                                rehydrate: h
                            })
                        }
                    });
                return m.persist(), m
            }
        },
        5655: (e, t, r) => {
            r.d(t, {
                rL: () => S
            });
            var n = "persist:",
                o = "persist/FLUSH",
                i = "persist/REHYDRATE",
                s = "persist/PAUSE",
                u = "persist/PERSIST",
                f = "persist/PURGE",
                a = -1,
                c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                },
                l = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                };

            function y(e, t, r, n) {
                n.debug;
                var o = l({}, r);
                return e && "object" === (void 0 === e ? "undefined" : c(e)) && Object.keys(e).forEach((function(n) {
                    "_persist" !== n && t[n] === r[n] && (o[n] = e[n])
                })), o
            }

            function p(e) {
                var t = e.blacklist || null,
                    r = e.whitelist || null,
                    o = e.transforms || [],
                    i = e.throttle || 0,
                    s = "" + (void 0 !== e.keyPrefix ? e.keyPrefix : n) + e.key,
                    u = e.storage,
                    f = !1 === e.serialize ? function(e) {
                        return e
                    } : d,
                    a = {},
                    c = {},
                    l = [],
                    y = null,
                    p = null;

                function v() {
                    if (0 === l.length) return y && clearInterval(y), void(y = null);
                    var e = l.shift(),
                        t = o.reduce((function(t, r) {
                            return r.in(t, e, a)
                        }), a[e]);
                    if (void 0 !== t) try {
                        c[e] = f(t)
                    } catch (e) {
                        console.error("redux-persist/createPersistoid: error serializing state", e)
                    } else delete c[e];
                    0 === l.length && (Object.keys(c).forEach((function(e) {
                        void 0 === a[e] && delete c[e]
                    })), p = u.setItem(s, f(c)).catch(h))
                }

                function h(e) {
                    0
                }
                return {
                    update: function(e) {
                        Object.keys(e).forEach((function(n) {
                            (function(e) {
                                return (!r || -1 !== r.indexOf(e) || "_persist" === e) && (!t || -1 === t.indexOf(e))
                            })(n) && a[n] !== e[n] && -1 === l.indexOf(n) && l.push(n)
                        })), Object.keys(a).forEach((function(t) {
                            void 0 === e[t] && l.push(t)
                        })), null === y && (y = setInterval(v, i)), a = e
                    },
                    flush: function() {
                        for (; 0 !== l.length;) v();
                        return p || Promise.resolve()
                    }
                }
            }

            function d(e) {
                return JSON.stringify(e)
            }

            function v(e) {
                var t = e.transforms || [],
                    r = "" + (void 0 !== e.keyPrefix ? e.keyPrefix : n) + e.key,
                    o = e.storage,
                    i = (e.debug, !1 === e.serialize ? function(e) {
                        return e
                    } : h);
                return o.getItem(r).then((function(e) {
                    if (e) try {
                        var r = {},
                            n = i(e);
                        return Object.keys(n).forEach((function(e) {
                            r[e] = t.reduceRight((function(t, r) {
                                return r.out(t, e, n)
                            }), i(n[e]))
                        })), r
                    } catch (e) {
                        throw e
                    }
                }))
            }

            function h(e) {
                return JSON.parse(e)
            }

            function m(e) {
                0
            }
            var b = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                }
                return e
            };
            var g = 5e3;

            function S(e, t) {
                var r = void 0 !== e.version ? e.version : a,
                    c = (e.debug, void 0 === e.stateReconciler ? y : e.stateReconciler),
                    l = e.getStoredState || v,
                    d = void 0 !== e.timeout ? e.timeout : g,
                    h = null,
                    S = !1,
                    k = !0,
                    O = function(e) {
                        return e._persist.rehydrated && h && !k && h.update(e), e
                    };
                return function(a, y) {
                    var v = a || {},
                        g = v._persist,
                        _ = function(e, t) {
                            var r = {};
                            for (var n in e) t.indexOf(n) >= 0 || Object.prototype.hasOwnProperty.call(e, n) && (r[n] = e[n]);
                            return r
                        }(v, ["_persist"]);
                    if (y.type === u) {
                        var P = !1,
                            j = function(t, r) {
                                P || (y.rehydrate(e.key, t, r), P = !0)
                            };
                        if (d && setTimeout((function() {
                                !P && j(void 0, new Error('redux-persist: persist timed out for persist key "' + e.key + '"'))
                            }), d), k = !1, h || (h = p(e)), g) return a;
                        if ("function" != typeof y.rehydrate || "function" != typeof y.register) throw new Error("redux-persist: either rehydrate or register is not a function on the PERSIST action. This can happen if the action is being replayed. This is an unexplored use case, please open an issue and we will figure out a resolution.");
                        return y.register(e.key), l(e).then((function(t) {
                            (e.migrate || function(e, t) {
                                return Promise.resolve(e)
                            })(t, r).then((function(e) {
                                j(e)
                            }), (function(e) {
                                j(void 0, e)
                            }))
                        }), (function(e) {
                            j(void 0, e)
                        })), b({}, t(_, y), {
                            _persist: {
                                version: r,
                                rehydrated: !1
                            }
                        })
                    }
                    if (y.type === f) return S = !0, y.result(function(e) {
                        var t = e.storage,
                            r = "" + (void 0 !== e.keyPrefix ? e.keyPrefix : n) + e.key;
                        return t.removeItem(r, m)
                    }(e)), b({}, t(_, y), {
                        _persist: g
                    });
                    if (y.type === o) return y.result(h && h.flush()), b({}, t(_, y), {
                        _persist: g
                    });
                    if (y.type === s) k = !0;
                    else if (y.type === i) {
                        if (S) return b({}, _, {
                            _persist: b({}, g, {
                                rehydrated: !0
                            })
                        });
                        if (y.key === e.key) {
                            var E = t(_, y),
                                I = y.payload,
                                w = !1 !== c && void 0 !== I ? c(I, a, E, e) : E,
                                x = b({}, w, {
                                    _persist: b({}, g, {
                                        rehydrated: !0
                                    })
                                });
                            return O(x)
                        }
                    }
                    if (!g) return t(a, y);
                    var R = t(_, y);
                    return R === _ ? a : (R._persist = g, O(R))
                }
            }
            "function" == typeof Symbol && Symbol.iterator, Object.assign;
            Object.assign
        },
        6608: (e, t) => {
            var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                },
                n = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                };
            t.A = function(e, t, o, i) {
                i.debug;
                var s = n({}, o);
                e && "object" === (void 0 === e ? "undefined" : r(e)) && Object.keys(e).forEach((function(i) {
                    var u;
                    "_persist" !== i && (t[i] === o[i] && (null === (u = o[i]) || Array.isArray(u) || "object" !== (void 0 === u ? "undefined" : r(u)) ? s[i] = e[i] : s[i] = n({}, s[i], e[i])))
                }));
                0;
                return s
            }
        },
        9440: (e, t, r) => {
            t.__esModule = !0, t.default = function(e) {
                var t = (0, i.default)(e);
                return {
                    getItem: function(e) {
                        return new Promise((function(r, n) {
                            r(t.getItem(e))
                        }))
                    },
                    setItem: function(e, r) {
                        return new Promise((function(n, o) {
                            n(t.setItem(e, r))
                        }))
                    },
                    removeItem: function(e) {
                        return new Promise((function(r, n) {
                            r(t.removeItem(e))
                        }))
                    }
                }
            };
            var n, o = r(4610),
                i = (n = o) && n.__esModule ? n : {
                    default: n
                }
        },
        4610: (e, t) => {
            t.__esModule = !0;
            var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            };

            function n() {}
            t.default = function(e) {
                var t = e + "Storage";
                return function(e) {
                    if ("object" !== ("undefined" == typeof self ? "undefined" : r(self)) || !(e in self)) return !1;
                    try {
                        var t = self[e],
                            n = "redux-persist " + e + " test";
                        t.setItem(n, "test"), t.getItem(n), t.removeItem(n)
                    } catch (e) {
                        return !1
                    }
                    return !0
                }(t) ? self[t] : o
            };
            var o = {
                getItem: n,
                setItem: n,
                removeItem: n
            }
        },
        6127: (e, t, r) => {
            var n, o = r(9440),
                i = (n = o) && n.__esModule ? n : {
                    default: n
                };
            t.A = (0, i.default)("local")
        },
        3375: (e, t, r) => {
            var n, o = r(9440),
                i = (n = o) && n.__esModule ? n : {
                    default: n
                };
            t.A = (0, i.default)("session")
        }
    }
]);
//# sourceMappingURL=npm.redux-persist.chunk.3f60eb.js.map