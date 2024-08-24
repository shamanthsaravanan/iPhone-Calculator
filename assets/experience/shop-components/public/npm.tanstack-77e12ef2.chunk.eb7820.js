"use strict";
(self.webpackChunk_nike_shop_components = self.webpackChunk_nike_shop_components || []).push([
    [787], {
        7676: (t, e, s) => {
            s.d(e, {
                E: () => n
            });
            const n = function() {
                return null
            }
        },
        9196: (t, e, s) => {
            s.d(e, {
                Ht: () => u,
                jE: () => a
            });
            var n = s(1594);
            const i = n.createContext(void 0),
                o = n.createContext(!1);

            function r(t, e) {
                return t || (e && "undefined" != typeof window ? (window.ReactQueryClientContext || (window.ReactQueryClientContext = i), window.ReactQueryClientContext) : i)
            }
            const a = ({
                    context: t
                } = {}) => {
                    const e = n.useContext(r(t, n.useContext(o)));
                    if (!e) throw new Error("No QueryClient set, use QueryClientProvider to set one");
                    return e
                },
                u = ({
                    client: t,
                    children: e,
                    context: s,
                    contextSharing: i = !1
                }) => {
                    n.useEffect((() => (t.mount(), () => {
                        t.unmount()
                    })), [t]);
                    const a = r(s, i);
                    return n.createElement(o.Provider, {
                        value: !s && i
                    }, n.createElement(a.Provider, {
                        value: t
                    }, e))
                }
        },
        1625: (t, e, s) => {
            s.d(e, {
                I: () => w
            });
            var n = s(6885),
                i = s(6056),
                o = s(1594),
                r = s(4938);
            const a = s(3118).useSyncExternalStore;

            function u() {
                let t = !1;
                return {
                    clearReset: () => {
                        t = !1
                    },
                    reset: () => {
                        t = !0
                    },
                    isReset: () => t
                }
            }
            const l = o.createContext(u()),
                c = () => o.useContext(l);
            var h = s(9196);
            const d = o.createContext(!1),
                v = () => o.useContext(d);
            d.Provider;
            const p = (t, e) => {
                    (t.suspense || t.useErrorBoundary) && (e.isReset() || (t.retryOnMount = !1))
                },
                f = t => {
                    o.useEffect((() => {
                        t.clearReset()
                    }), [t])
                },
                m = ({
                    result: t,
                    errorResetBoundary: e,
                    useErrorBoundary: s,
                    query: n
                }) => {
                    return t.isError && !e.isReset() && !t.isFetching && (i = s, o = [t.error, n], "function" == typeof i ? i(...o) : !!i);
                    var i, o
                },
                y = t => {
                    t.suspense && "number" != typeof t.staleTime && (t.staleTime = 1e3)
                },
                g = (t, e, s) => (null == t ? void 0 : t.suspense) && ((t, e) => t.isLoading && t.isFetching && !e)(e, s),
                b = (t, e, s) => e.fetchOptimistic(t).then((({
                    data: e
                }) => {
                    null == t.onSuccess || t.onSuccess(e), null == t.onSettled || t.onSettled(e, null)
                })).catch((e => {
                    s.clearReset(), null == t.onError || t.onError(e), null == t.onSettled || t.onSettled(void 0, e)
                }));

            function w(t, e, s) {
                return function(t, e) {
                    const s = (0, h.jE)({
                            context: t.context
                        }),
                        n = v(),
                        i = c(),
                        u = s.defaultQueryOptions(t);
                    u._optimisticResults = n ? "isRestoring" : "optimistic", u.onError && (u.onError = r.j.batchCalls(u.onError)), u.onSuccess && (u.onSuccess = r.j.batchCalls(u.onSuccess)), u.onSettled && (u.onSettled = r.j.batchCalls(u.onSettled)), y(u), p(u, i), f(i);
                    const [l] = o.useState((() => new e(s, u))), d = l.getOptimisticResult(u);
                    if (a(o.useCallback((t => {
                            const e = n ? () => {} : l.subscribe(r.j.batchCalls(t));
                            return l.updateResult(), e
                        }), [l, n]), (() => l.getCurrentResult()), (() => l.getCurrentResult())), o.useEffect((() => {
                            l.setOptions(u, {
                                listeners: !1
                            })
                        }), [u, l]), g(u, d, n)) throw b(u, l, i);
                    if (m({
                            result: d,
                            errorResetBoundary: i,
                            useErrorBoundary: u.useErrorBoundary,
                            query: l.getCurrentQuery()
                        })) throw d.error;
                    return u.notifyOnChangeProps ? d : l.trackResult(d)
                }((0, n.vh)(t, e, s), i.$)
            }
        },
        1527: (t, e, s) => {
            s.d(e, {
                m: () => r
            });
            var n = s(8189),
                i = s(6885);
            class o extends n.Q {
                constructor() {
                    super(), this.setup = t => {
                        if (!i.S$ && window.addEventListener) {
                            const e = () => t();
                            return window.addEventListener("visibilitychange", e, !1), window.addEventListener("focus", e, !1), () => {
                                window.removeEventListener("visibilitychange", e), window.removeEventListener("focus", e)
                            }
                        }
                    }
                }
                onSubscribe() {
                    this.cleanup || this.setEventListener(this.setup)
                }
                onUnsubscribe() {
                    var t;
                    this.hasListeners() || (null == (t = this.cleanup) || t.call(this), this.cleanup = void 0)
                }
                setEventListener(t) {
                    var e;
                    this.setup = t, null == (e = this.cleanup) || e.call(this), this.cleanup = t((t => {
                        "boolean" == typeof t ? this.setFocused(t) : this.onFocus()
                    }))
                }
                setFocused(t) {
                    this.focused !== t && (this.focused = t, this.onFocus())
                }
                onFocus() {
                    this.listeners.forEach((({
                        listener: t
                    }) => {
                        t()
                    }))
                }
                isFocused() {
                    return "boolean" == typeof this.focused ? this.focused : "undefined" == typeof document || [void 0, "visible", "prerender"].includes(document.visibilityState)
                }
            }
            const r = new o
        },
        368: (t, e, s) => {
            function n() {
                return {
                    onFetch: t => {
                        t.fetchFn = () => {
                            var e, s, n, r, a, u;
                            const l = null == (e = t.fetchOptions) || null == (s = e.meta) ? void 0 : s.refetchPage,
                                c = null == (n = t.fetchOptions) || null == (r = n.meta) ? void 0 : r.fetchMore,
                                h = null == c ? void 0 : c.pageParam,
                                d = "forward" === (null == c ? void 0 : c.direction),
                                v = "backward" === (null == c ? void 0 : c.direction),
                                p = (null == (a = t.state.data) ? void 0 : a.pages) || [],
                                f = (null == (u = t.state.data) ? void 0 : u.pageParams) || [];
                            let m = f,
                                y = !1;
                            const g = t.options.queryFn || (() => Promise.reject("Missing queryFn for queryKey '" + t.options.queryHash + "'")),
                                b = (t, e, s, n) => (m = n ? [e, ...m] : [...m, e], n ? [s, ...t] : [...t, s]),
                                w = (e, s, n, i) => {
                                    if (y) return Promise.reject("Cancelled");
                                    if (void 0 === n && !s && e.length) return Promise.resolve(e);
                                    const o = {
                                        queryKey: t.queryKey,
                                        pageParam: n,
                                        meta: t.options.meta
                                    };
                                    var r;
                                    r = o, Object.defineProperty(r, "signal", {
                                        enumerable: !0,
                                        get: () => {
                                            var e, s;
                                            return null != (e = t.signal) && e.aborted ? y = !0 : null == (s = t.signal) || s.addEventListener("abort", (() => {
                                                y = !0
                                            })), t.signal
                                        }
                                    });
                                    const a = g(o);
                                    return Promise.resolve(a).then((t => b(e, n, t, i)))
                                };
                            let C;
                            if (p.length)
                                if (d) {
                                    const e = void 0 !== h,
                                        s = e ? h : i(t.options, p);
                                    C = w(p, e, s)
                                } else if (v) {
                                const e = void 0 !== h,
                                    s = e ? h : o(t.options, p);
                                C = w(p, e, s, !0)
                            } else {
                                m = [];
                                const e = void 0 === t.options.getNextPageParam;
                                C = !l || !p[0] || l(p[0], 0, p) ? w([], e, f[0]) : Promise.resolve(b([], f[0], p[0]));
                                for (let s = 1; s < p.length; s++) C = C.then((n => {
                                    if (!l || !p[s] || l(p[s], s, p)) {
                                        const o = e ? f[s] : i(t.options, n);
                                        return w(n, e, o)
                                    }
                                    return Promise.resolve(b(n, f[s], p[s]))
                                }))
                            } else C = w([]);
                            return C.then((t => ({
                                pages: t,
                                pageParams: m
                            })))
                        }
                    }
                }
            }

            function i(t, e) {
                return null == t.getNextPageParam ? void 0 : t.getNextPageParam(e[e.length - 1], e)
            }

            function o(t, e) {
                return null == t.getPreviousPageParam ? void 0 : t.getPreviousPageParam(e[0], e)
            }
            s.d(e, {
                PL: () => n
            })
        },
        7566: (t, e, s) => {
            s.d(e, {
                U: () => n
            });
            const n = console
        },
        8037: (t, e, s) => {
            s.d(e, {
                q: () => c
            });
            var n = s(4938),
                i = s(7566),
                o = s(3853),
                r = s(5677);
            class a extends o.k {
                constructor(t) {
                    super(), this.defaultOptions = t.defaultOptions, this.mutationId = t.mutationId, this.mutationCache = t.mutationCache, this.logger = t.logger || i.U, this.observers = [], this.state = t.state || {
                        context: void 0,
                        data: void 0,
                        error: null,
                        failureCount: 0,
                        failureReason: null,
                        isPaused: !1,
                        status: "idle",
                        variables: void 0
                    }, this.setOptions(t.options), this.scheduleGc()
                }
                setOptions(t) {
                    this.options = { ...this.defaultOptions,
                        ...t
                    }, this.updateCacheTime(this.options.cacheTime)
                }
                get meta() {
                    return this.options.meta
                }
                setState(t) {
                    this.dispatch({
                        type: "setState",
                        state: t
                    })
                }
                addObserver(t) {
                    this.observers.includes(t) || (this.observers.push(t), this.clearGcTimeout(), this.mutationCache.notify({
                        type: "observerAdded",
                        mutation: this,
                        observer: t
                    }))
                }
                removeObserver(t) {
                    this.observers = this.observers.filter((e => e !== t)), this.scheduleGc(), this.mutationCache.notify({
                        type: "observerRemoved",
                        mutation: this,
                        observer: t
                    })
                }
                optionalRemove() {
                    this.observers.length || ("loading" === this.state.status ? this.scheduleGc() : this.mutationCache.remove(this))
                }
                continue () {
                    var t, e;
                    return null != (t = null == (e = this.retryer) ? void 0 : e.continue()) ? t : this.execute()
                }
                async execute() {
                    const t = () => {
                            var t;
                            return this.retryer = (0, r.II)({
                                fn: () => this.options.mutationFn ? this.options.mutationFn(this.state.variables) : Promise.reject("No mutationFn found"),
                                onFail: (t, e) => {
                                    this.dispatch({
                                        type: "failed",
                                        failureCount: t,
                                        error: e
                                    })
                                },
                                onPause: () => {
                                    this.dispatch({
                                        type: "pause"
                                    })
                                },
                                onContinue: () => {
                                    this.dispatch({
                                        type: "continue"
                                    })
                                },
                                retry: null != (t = this.options.retry) ? t : 0,
                                retryDelay: this.options.retryDelay,
                                networkMode: this.options.networkMode
                            }), this.retryer.promise
                        },
                        e = "loading" === this.state.status;
                    try {
                        var s, n, i, o, a, u, l, c;
                        if (!e) {
                            var h, d, v, p;
                            this.dispatch({
                                type: "loading",
                                variables: this.options.variables
                            }), await (null == (h = (d = this.mutationCache.config).onMutate) ? void 0 : h.call(d, this.state.variables, this));
                            const t = await (null == (v = (p = this.options).onMutate) ? void 0 : v.call(p, this.state.variables));
                            t !== this.state.context && this.dispatch({
                                type: "loading",
                                context: t,
                                variables: this.state.variables
                            })
                        }
                        const r = await t();
                        return await (null == (s = (n = this.mutationCache.config).onSuccess) ? void 0 : s.call(n, r, this.state.variables, this.state.context, this)), await (null == (i = (o = this.options).onSuccess) ? void 0 : i.call(o, r, this.state.variables, this.state.context)), await (null == (a = (u = this.mutationCache.config).onSettled) ? void 0 : a.call(u, r, null, this.state.variables, this.state.context, this)), await (null == (l = (c = this.options).onSettled) ? void 0 : l.call(c, r, null, this.state.variables, this.state.context)), this.dispatch({
                            type: "success",
                            data: r
                        }), r
                    } catch (t) {
                        try {
                            var f, m, y, g, b, w, C, E;
                            throw await (null == (f = (m = this.mutationCache.config).onError) ? void 0 : f.call(m, t, this.state.variables, this.state.context, this)), await (null == (y = (g = this.options).onError) ? void 0 : y.call(g, t, this.state.variables, this.state.context)), await (null == (b = (w = this.mutationCache.config).onSettled) ? void 0 : b.call(w, void 0, t, this.state.variables, this.state.context, this)), await (null == (C = (E = this.options).onSettled) ? void 0 : C.call(E, void 0, t, this.state.variables, this.state.context)), t
                        } finally {
                            this.dispatch({
                                type: "error",
                                error: t
                            })
                        }
                    }
                }
                dispatch(t) {
                    this.state = (e => {
                        switch (t.type) {
                            case "failed":
                                return { ...e,
                                    failureCount: t.failureCount,
                                    failureReason: t.error
                                };
                            case "pause":
                                return { ...e,
                                    isPaused: !0
                                };
                            case "continue":
                                return { ...e,
                                    isPaused: !1
                                };
                            case "loading":
                                return { ...e,
                                    context: t.context,
                                    data: void 0,
                                    failureCount: 0,
                                    failureReason: null,
                                    error: null,
                                    isPaused: !(0, r.v_)(this.options.networkMode),
                                    status: "loading",
                                    variables: t.variables
                                };
                            case "success":
                                return { ...e,
                                    data: t.data,
                                    failureCount: 0,
                                    failureReason: null,
                                    error: null,
                                    status: "success",
                                    isPaused: !1
                                };
                            case "error":
                                return { ...e,
                                    data: void 0,
                                    error: t.error,
                                    failureCount: e.failureCount + 1,
                                    failureReason: t.error,
                                    isPaused: !1,
                                    status: "error"
                                };
                            case "setState":
                                return { ...e,
                                    ...t.state
                                }
                        }
                    })(this.state), n.j.batch((() => {
                        this.observers.forEach((e => {
                            e.onMutationUpdate(t)
                        })), this.mutationCache.notify({
                            mutation: this,
                            type: "updated",
                            action: t
                        })
                    }))
                }
            }
            var u = s(6885),
                l = s(8189);
            class c extends l.Q {
                constructor(t) {
                    super(), this.config = t || {}, this.mutations = [], this.mutationId = 0
                }
                build(t, e, s) {
                    const n = new a({
                        mutationCache: this,
                        logger: t.getLogger(),
                        mutationId: ++this.mutationId,
                        options: t.defaultMutationOptions(e),
                        state: s,
                        defaultOptions: e.mutationKey ? t.getMutationDefaults(e.mutationKey) : void 0
                    });
                    return this.add(n), n
                }
                add(t) {
                    this.mutations.push(t), this.notify({
                        type: "added",
                        mutation: t
                    })
                }
                remove(t) {
                    this.mutations = this.mutations.filter((e => e !== t)), this.notify({
                        type: "removed",
                        mutation: t
                    })
                }
                clear() {
                    n.j.batch((() => {
                        this.mutations.forEach((t => {
                            this.remove(t)
                        }))
                    }))
                }
                getAll() {
                    return this.mutations
                }
                find(t) {
                    return void 0 === t.exact && (t.exact = !0), this.mutations.find((e => (0, u.nJ)(t, e)))
                }
                findAll(t) {
                    return this.mutations.filter((e => (0, u.nJ)(t, e)))
                }
                notify(t) {
                    n.j.batch((() => {
                        this.listeners.forEach((({
                            listener: e
                        }) => {
                            e(t)
                        }))
                    }))
                }
                resumePausedMutations() {
                    var t;
                    return this.resuming = (null != (t = this.resuming) ? t : Promise.resolve()).then((() => {
                        const t = this.mutations.filter((t => t.state.isPaused));
                        return n.j.batch((() => t.reduce(((t, e) => t.then((() => e.continue().catch(u.lQ)))), Promise.resolve())))
                    })).then((() => {
                        this.resuming = void 0
                    })), this.resuming
                }
            }
        },
        4938: (t, e, s) => {
            s.d(e, {
                j: () => i
            });
            var n = s(6885);
            const i = function() {
                let t = [],
                    e = 0,
                    s = t => {
                        t()
                    },
                    i = t => {
                        t()
                    };
                const o = i => {
                        e ? t.push(i) : (0, n.G6)((() => {
                            s(i)
                        }))
                    },
                    r = () => {
                        const e = t;
                        t = [], e.length && (0, n.G6)((() => {
                            i((() => {
                                e.forEach((t => {
                                    s(t)
                                }))
                            }))
                        }))
                    };
                return {
                    batch: t => {
                        let s;
                        e++;
                        try {
                            s = t()
                        } finally {
                            e--, e || r()
                        }
                        return s
                    },
                    batchCalls: t => (...e) => {
                        o((() => {
                            t(...e)
                        }))
                    },
                    schedule: o,
                    setNotifyFunction: t => {
                        s = t
                    },
                    setBatchNotifyFunction: t => {
                        i = t
                    }
                }
            }()
        },
        7996: (t, e, s) => {
            s.d(e, {
                t: () => a
            });
            var n = s(8189),
                i = s(6885);
            const o = ["online", "offline"];
            class r extends n.Q {
                constructor() {
                    super(), this.setup = t => {
                        if (!i.S$ && window.addEventListener) {
                            const e = () => t();
                            return o.forEach((t => {
                                window.addEventListener(t, e, !1)
                            })), () => {
                                o.forEach((t => {
                                    window.removeEventListener(t, e)
                                }))
                            }
                        }
                    }
                }
                onSubscribe() {
                    this.cleanup || this.setEventListener(this.setup)
                }
                onUnsubscribe() {
                    var t;
                    this.hasListeners() || (null == (t = this.cleanup) || t.call(this), this.cleanup = void 0)
                }
                setEventListener(t) {
                    var e;
                    this.setup = t, null == (e = this.cleanup) || e.call(this), this.cleanup = t((t => {
                        "boolean" == typeof t ? this.setOnline(t) : this.onOnline()
                    }))
                }
                setOnline(t) {
                    this.online !== t && (this.online = t, this.onOnline())
                }
                onOnline() {
                    this.listeners.forEach((({
                        listener: t
                    }) => {
                        t()
                    }))
                }
                isOnline() {
                    return "boolean" == typeof this.online ? this.online : "undefined" == typeof navigator || void 0 === navigator.onLine || navigator.onLine
                }
            }
            const a = new r
        }
    }
]);
//# sourceMappingURL=npm.tanstack-77e12ef2.chunk.eb7820.js.map