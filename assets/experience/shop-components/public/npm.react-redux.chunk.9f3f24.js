"use strict";
(self.webpackChunk_nike_shop_components = self.webpackChunk_nike_shop_components || []).push([
    [2671], {
        2806: (n, e, r) => {
            r.d(e, {
                Kq: () => p,
                Ng: () => F,
                wA: () => G,
                d4: () => X
            });
            var t = r(1594),
                o = r.n(t),
                u = o().createContext(null);
            var i = function(n) {
                    n()
                },
                a = function() {
                    return i
                },
                s = {
                    notify: function() {}
                };
            var c = function() {
                function n(n, e) {
                    this.store = n, this.parentSub = e, this.unsubscribe = null, this.listeners = s, this.handleChangeWrapper = this.handleChangeWrapper.bind(this)
                }
                var e = n.prototype;
                return e.addNestedSub = function(n) {
                    return this.trySubscribe(), this.listeners.subscribe(n)
                }, e.notifyNestedSubs = function() {
                    this.listeners.notify()
                }, e.handleChangeWrapper = function() {
                    this.onStateChange && this.onStateChange()
                }, e.isSubscribed = function() {
                    return Boolean(this.unsubscribe)
                }, e.trySubscribe = function() {
                    this.unsubscribe || (this.unsubscribe = this.parentSub ? this.parentSub.addNestedSub(this.handleChangeWrapper) : this.store.subscribe(this.handleChangeWrapper), this.listeners = function() {
                        var n = a(),
                            e = null,
                            r = null;
                        return {
                            clear: function() {
                                e = null, r = null
                            },
                            notify: function() {
                                n((function() {
                                    for (var n = e; n;) n.callback(), n = n.next
                                }))
                            },
                            get: function() {
                                for (var n = [], r = e; r;) n.push(r), r = r.next;
                                return n
                            },
                            subscribe: function(n) {
                                var t = !0,
                                    o = r = {
                                        callback: n,
                                        next: null,
                                        prev: r
                                    };
                                return o.prev ? o.prev.next = o : e = o,
                                    function() {
                                        t && null !== e && (t = !1, o.next ? o.next.prev = o.prev : r = o.prev, o.prev ? o.prev.next = o.next : e = o.next)
                                    }
                            }
                        }
                    }())
                }, e.tryUnsubscribe = function() {
                    this.unsubscribe && (this.unsubscribe(), this.unsubscribe = null, this.listeners.clear(), this.listeners = s)
                }, n
            }();
            const p = function(n) {
                var e = n.store,
                    r = n.context,
                    i = n.children,
                    a = (0, t.useMemo)((function() {
                        var n = new c(e);
                        return n.onStateChange = n.notifyNestedSubs, {
                            store: e,
                            subscription: n
                        }
                    }), [e]),
                    s = (0, t.useMemo)((function() {
                        return e.getState()
                    }), [e]);
                (0, t.useEffect)((function() {
                    var n = a.subscription;
                    return n.trySubscribe(), s !== e.getState() && n.notifyNestedSubs(),
                        function() {
                            n.tryUnsubscribe(), n.onStateChange = null
                        }
                }), [a, s]);
                var p = r || u;
                return o().createElement(p.Provider, {
                    value: a
                }, i)
            };
            var f = r(1768),
                d = r(6155),
                l = r(1108),
                v = r.n(l),
                h = r(2173),
                b = "undefined" != typeof window && void 0 !== window.document && void 0 !== window.document.createElement ? t.useLayoutEffect : t.useEffect,
                m = [],
                y = [null, null];

            function P(n, e) {
                var r = n[1];
                return [e.payload, r + 1]
            }

            function S(n, e, r) {
                b((function() {
                    return n.apply(void 0, e)
                }), r)
            }

            function g(n, e, r, t, o, u, i) {
                n.current = t, e.current = o, r.current = !1, u.current && (u.current = null, i())
            }

            function w(n, e, r, t, o, u, i, a, s, c) {
                if (n) {
                    var p = !1,
                        f = null,
                        d = function() {
                            if (!p) {
                                var n, r, d = e.getState();
                                try {
                                    n = t(d, o.current)
                                } catch (n) {
                                    r = n, f = n
                                }
                                r || (f = null), n === u.current ? i.current || s() : (u.current = n, a.current = n, i.current = !0, c({
                                    type: "STORE_UPDATED",
                                    payload: {
                                        error: r
                                    }
                                }))
                            }
                        };
                    r.onStateChange = d, r.trySubscribe(), d();
                    return function() {
                        if (p = !0, r.tryUnsubscribe(), r.onStateChange = null, f) throw f
                    }
                }
            }
            var C = function() {
                return [null, 0]
            };

            function O(n, e) {
                void 0 === e && (e = {});
                var r = e,
                    i = r.getDisplayName,
                    a = void 0 === i ? function(n) {
                        return "ConnectAdvanced(" + n + ")"
                    } : i,
                    s = r.methodName,
                    p = void 0 === s ? "connectAdvanced" : s,
                    l = r.renderCountProp,
                    b = void 0 === l ? void 0 : l,
                    O = r.shouldHandleStateChanges,
                    E = void 0 === O || O,
                    M = r.storeKey,
                    N = void 0 === M ? "store" : M,
                    x = (r.withRef, r.forwardRef),
                    R = void 0 !== x && x,
                    T = r.context,
                    q = void 0 === T ? u : T,
                    A = (0, d.A)(r, ["getDisplayName", "methodName", "renderCountProp", "shouldHandleStateChanges", "storeKey", "withRef", "forwardRef", "context"]),
                    k = q;
                return function(e) {
                    var r = e.displayName || e.name || "Component",
                        u = a(r),
                        i = (0, f.A)({}, A, {
                            getDisplayName: a,
                            methodName: p,
                            renderCountProp: b,
                            shouldHandleStateChanges: E,
                            storeKey: N,
                            displayName: u,
                            wrappedComponentName: r,
                            WrappedComponent: e
                        }),
                        s = A.pure;
                    var l = s ? t.useMemo : function(n) {
                        return n()
                    };

                    function O(r) {
                        var u = (0, t.useMemo)((function() {
                                var n = r.forwardedRef,
                                    e = (0, d.A)(r, ["forwardedRef"]);
                                return [r.context, n, e]
                            }), [r]),
                            a = u[0],
                            s = u[1],
                            p = u[2],
                            v = (0, t.useMemo)((function() {
                                return a && a.Consumer && (0, h.isContextConsumer)(o().createElement(a.Consumer, null)) ? a : k
                            }), [a, k]),
                            b = (0, t.useContext)(v),
                            O = Boolean(r.store) && Boolean(r.store.getState) && Boolean(r.store.dispatch);
                        Boolean(b) && Boolean(b.store);
                        var M = O ? r.store : b.store,
                            N = (0, t.useMemo)((function() {
                                return function(e) {
                                    return n(e.dispatch, i)
                                }(M)
                            }), [M]),
                            x = (0, t.useMemo)((function() {
                                if (!E) return y;
                                var n = new c(M, O ? null : b.subscription),
                                    e = n.notifyNestedSubs.bind(n);
                                return [n, e]
                            }), [M, O, b]),
                            R = x[0],
                            T = x[1],
                            q = (0, t.useMemo)((function() {
                                return O ? b : (0, f.A)({}, b, {
                                    subscription: R
                                })
                            }), [O, b, R]),
                            A = (0, t.useReducer)(P, m, C),
                            D = A[0][0],
                            B = A[1];
                        if (D && D.error) throw D.error;
                        var W = (0, t.useRef)(),
                            _ = (0, t.useRef)(p),
                            j = (0, t.useRef)(),
                            H = (0, t.useRef)(!1),
                            U = l((function() {
                                return j.current && p === _.current ? j.current : N(M.getState(), p)
                            }), [M, D, p]);
                        S(g, [_, W, H, p, U, j, T]), S(w, [E, M, R, N, _, W, H, j, T, B], [M, R, N]);
                        var F = (0, t.useMemo)((function() {
                            return o().createElement(e, (0, f.A)({}, U, {
                                ref: s
                            }))
                        }), [s, e, U]);
                        return (0, t.useMemo)((function() {
                            return E ? o().createElement(v.Provider, {
                                value: q
                            }, F) : F
                        }), [v, F, q])
                    }
                    var M = s ? o().memo(O) : O;
                    if (M.WrappedComponent = e, M.displayName = u, R) {
                        var x = o().forwardRef((function(n, e) {
                            return o().createElement(M, (0, f.A)({}, n, {
                                forwardedRef: e
                            }))
                        }));
                        return x.displayName = u, x.WrappedComponent = e, v()(x, e)
                    }
                    return v()(M, e)
                }
            }

            function E(n, e) {
                return n === e ? 0 !== n || 0 !== e || 1 / n == 1 / e : n != n && e != e
            }

            function M(n, e) {
                if (E(n, e)) return !0;
                if ("object" != typeof n || null === n || "object" != typeof e || null === e) return !1;
                var r = Object.keys(n),
                    t = Object.keys(e);
                if (r.length !== t.length) return !1;
                for (var o = 0; o < r.length; o++)
                    if (!Object.prototype.hasOwnProperty.call(e, r[o]) || !E(n[r[o]], e[r[o]])) return !1;
                return !0
            }
            var N = r(8940);

            function x(n) {
                return function(e, r) {
                    var t = n(e, r);

                    function o() {
                        return t
                    }
                    return o.dependsOnOwnProps = !1, o
                }
            }

            function R(n) {
                return null !== n.dependsOnOwnProps && void 0 !== n.dependsOnOwnProps ? Boolean(n.dependsOnOwnProps) : 1 !== n.length
            }

            function T(n, e) {
                return function(e, r) {
                    r.displayName;
                    var t = function(n, e) {
                        return t.dependsOnOwnProps ? t.mapToProps(n, e) : t.mapToProps(n)
                    };
                    return t.dependsOnOwnProps = !0, t.mapToProps = function(e, r) {
                        t.mapToProps = n, t.dependsOnOwnProps = R(n);
                        var o = t(e, r);
                        return "function" == typeof o && (t.mapToProps = o, t.dependsOnOwnProps = R(o), o = t(e, r)), o
                    }, t
                }
            }
            const q = [function(n) {
                return "function" == typeof n ? T(n) : void 0
            }, function(n) {
                return n ? void 0 : x((function(n) {
                    return {
                        dispatch: n
                    }
                }))
            }, function(n) {
                return n && "object" == typeof n ? x((function(e) {
                    return (0, N.zH)(n, e)
                })) : void 0
            }];
            const A = [function(n) {
                return "function" == typeof n ? T(n) : void 0
            }, function(n) {
                return n ? void 0 : x((function() {
                    return {}
                }))
            }];

            function k(n, e, r) {
                return (0, f.A)({}, r, {}, n, {}, e)
            }
            const D = [function(n) {
                return "function" == typeof n ? function(n) {
                    return function(e, r) {
                        r.displayName;
                        var t, o = r.pure,
                            u = r.areMergedPropsEqual,
                            i = !1;
                        return function(e, r, a) {
                            var s = n(e, r, a);
                            return i ? o && u(s, t) || (t = s) : (i = !0, t = s), t
                        }
                    }
                }(n) : void 0
            }, function(n) {
                return n ? void 0 : function() {
                    return k
                }
            }];

            function B(n, e, r, t) {
                return function(o, u) {
                    return r(n(o, u), e(t, u), u)
                }
            }

            function W(n, e, r, t, o) {
                var u, i, a, s, c, p = o.areStatesEqual,
                    f = o.areOwnPropsEqual,
                    d = o.areStatePropsEqual,
                    l = !1;

                function v(o, l) {
                    var v, h, b = !f(l, i),
                        m = !p(o, u);
                    return u = o, i = l, b && m ? (a = n(u, i), e.dependsOnOwnProps && (s = e(t, i)), c = r(a, s, i)) : b ? (n.dependsOnOwnProps && (a = n(u, i)), e.dependsOnOwnProps && (s = e(t, i)), c = r(a, s, i)) : m ? (v = n(u, i), h = !d(v, a), a = v, h && (c = r(a, s, i)), c) : c
                }
                return function(o, p) {
                    return l ? v(o, p) : (a = n(u = o, i = p), s = e(t, i), c = r(a, s, i), l = !0, c)
                }
            }

            function _(n, e) {
                var r = e.initMapStateToProps,
                    t = e.initMapDispatchToProps,
                    o = e.initMergeProps,
                    u = (0, d.A)(e, ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"]),
                    i = r(n, u),
                    a = t(n, u),
                    s = o(n, u);
                return (u.pure ? W : B)(i, a, s, n, u)
            }

            function j(n, e, r) {
                for (var t = e.length - 1; t >= 0; t--) {
                    var o = e[t](n);
                    if (o) return o
                }
                return function(e, t) {
                    throw new Error("Invalid value of type " + typeof n + " for " + r + " argument when connecting component " + t.wrappedComponentName + ".")
                }
            }

            function H(n, e) {
                return n === e
            }

            function U(n) {
                var e = void 0 === n ? {} : n,
                    r = e.connectHOC,
                    t = void 0 === r ? O : r,
                    o = e.mapStateToPropsFactories,
                    u = void 0 === o ? A : o,
                    i = e.mapDispatchToPropsFactories,
                    a = void 0 === i ? q : i,
                    s = e.mergePropsFactories,
                    c = void 0 === s ? D : s,
                    p = e.selectorFactory,
                    l = void 0 === p ? _ : p;
                return function(n, e, r, o) {
                    void 0 === o && (o = {});
                    var i = o,
                        s = i.pure,
                        p = void 0 === s || s,
                        v = i.areStatesEqual,
                        h = void 0 === v ? H : v,
                        b = i.areOwnPropsEqual,
                        m = void 0 === b ? M : b,
                        y = i.areStatePropsEqual,
                        P = void 0 === y ? M : y,
                        S = i.areMergedPropsEqual,
                        g = void 0 === S ? M : S,
                        w = (0, d.A)(i, ["pure", "areStatesEqual", "areOwnPropsEqual", "areStatePropsEqual", "areMergedPropsEqual"]),
                        C = j(n, u, "mapStateToProps"),
                        O = j(e, a, "mapDispatchToProps"),
                        E = j(r, c, "mergeProps");
                    return t(l, (0, f.A)({
                        methodName: "connect",
                        getDisplayName: function(n) {
                            return "Connect(" + n + ")"
                        },
                        shouldHandleStateChanges: Boolean(n),
                        initMapStateToProps: C,
                        initMapDispatchToProps: O,
                        initMergeProps: E,
                        pure: p,
                        areStatesEqual: h,
                        areOwnPropsEqual: m,
                        areStatePropsEqual: P,
                        areMergedPropsEqual: g
                    }, w))
                }
            }
            const F = U();

            function K() {
                return (0, t.useContext)(u)
            }

            function z(n) {
                void 0 === n && (n = u);
                var e = n === u ? K : function() {
                    return (0, t.useContext)(n)
                };
                return function() {
                    return e().store
                }
            }
            var I = z();

            function L(n) {
                void 0 === n && (n = u);
                var e = n === u ? I : z(n);
                return function() {
                    return e().dispatch
                }
            }
            var G = L(),
                J = function(n, e) {
                    return n === e
                };

            function Q(n) {
                void 0 === n && (n = u);
                var e = n === u ? K : function() {
                    return (0, t.useContext)(n)
                };
                return function(n, r) {
                    void 0 === r && (r = J);
                    var o = e();
                    return function(n, e, r, o) {
                        var u, i = (0, t.useReducer)((function(n) {
                                return n + 1
                            }), 0)[1],
                            a = (0, t.useMemo)((function() {
                                return new c(r, o)
                            }), [r, o]),
                            s = (0, t.useRef)(),
                            p = (0, t.useRef)(),
                            f = (0, t.useRef)();
                        try {
                            u = n !== p.current || s.current ? n(r.getState()) : f.current
                        } catch (n) {
                            throw s.current && (n.message += "\nThe error may be correlated with this previous error:\n" + s.current.stack + "\n\n"), n
                        }
                        return b((function() {
                            p.current = n, f.current = u, s.current = void 0
                        })), b((function() {
                            function n() {
                                try {
                                    var n = p.current(r.getState());
                                    if (e(n, f.current)) return;
                                    f.current = n
                                } catch (n) {
                                    s.current = n
                                }
                                i({})
                            }
                            return a.onStateChange = n, a.trySubscribe(), n(),
                                function() {
                                    return a.tryUnsubscribe()
                                }
                        }), [r, a]), u
                    }(n, r, o.store, o.subscription)
                }
            }
            var V, X = Q(),
                Y = r(5206);
            V = Y.unstable_batchedUpdates, i = V
        }
    }
]);
//# sourceMappingURL=npm.react-redux.chunk.9f3f24.js.map