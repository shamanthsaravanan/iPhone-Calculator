"use strict";
(self.webpackChunk_nike_shop_components = self.webpackChunk_nike_shop_components || []).push([
    [7883], {
        2942: (t, e, s) => {
            s.d(e, {
                E: () => y
            });
            var r = s(6885),
                i = s(7566),
                n = s(4938),
                u = s(5677),
                a = s(3853);
            class o extends a.k {
                constructor(t) {
                    super(), this.abortSignalConsumed = !1, this.defaultOptions = t.defaultOptions, this.setOptions(t.options), this.observers = [], this.cache = t.cache, this.logger = t.logger || i.U, this.queryKey = t.queryKey, this.queryHash = t.queryHash, this.initialState = t.state || function(t) {
                        const e = "function" == typeof t.initialData ? t.initialData() : t.initialData,
                            s = void 0 !== e,
                            r = s ? "function" == typeof t.initialDataUpdatedAt ? t.initialDataUpdatedAt() : t.initialDataUpdatedAt : 0;
                        return {
                            data: e,
                            dataUpdateCount: 0,
                            dataUpdatedAt: s ? null != r ? r : Date.now() : 0,
                            error: null,
                            errorUpdateCount: 0,
                            errorUpdatedAt: 0,
                            fetchFailureCount: 0,
                            fetchFailureReason: null,
                            fetchMeta: null,
                            isInvalidated: !1,
                            status: s ? "success" : "loading",
                            fetchStatus: "idle"
                        }
                    }(this.options), this.state = this.initialState, this.scheduleGc()
                }
                get meta() {
                    return this.options.meta
                }
                setOptions(t) {
                    this.options = { ...this.defaultOptions,
                        ...t
                    }, this.updateCacheTime(this.options.cacheTime)
                }
                optionalRemove() {
                    this.observers.length || "idle" !== this.state.fetchStatus || this.cache.remove(this)
                }
                setData(t, e) {
                    const s = (0, r.pl)(this.state.data, t, this.options);
                    return this.dispatch({
                        data: s,
                        type: "success",
                        dataUpdatedAt: null == e ? void 0 : e.updatedAt,
                        manual: null == e ? void 0 : e.manual
                    }), s
                }
                setState(t, e) {
                    this.dispatch({
                        type: "setState",
                        state: t,
                        setStateOptions: e
                    })
                }
                cancel(t) {
                    var e;
                    const s = this.promise;
                    return null == (e = this.retryer) || e.cancel(t), s ? s.then(r.lQ).catch(r.lQ) : Promise.resolve()
                }
                destroy() {
                    super.destroy(), this.cancel({
                        silent: !0
                    })
                }
                reset() {
                    this.destroy(), this.setState(this.initialState)
                }
                isActive() {
                    return this.observers.some((t => !1 !== t.options.enabled))
                }
                isDisabled() {
                    return this.getObserversCount() > 0 && !this.isActive()
                }
                isStale() {
                    return this.state.isInvalidated || !this.state.dataUpdatedAt || this.observers.some((t => t.getCurrentResult().isStale))
                }
                isStaleByTime(t = 0) {
                    return this.state.isInvalidated || !this.state.dataUpdatedAt || !(0, r.j3)(this.state.dataUpdatedAt, t)
                }
                onFocus() {
                    var t;
                    const e = this.observers.find((t => t.shouldFetchOnWindowFocus()));
                    e && e.refetch({
                        cancelRefetch: !1
                    }), null == (t = this.retryer) || t.continue()
                }
                onOnline() {
                    var t;
                    const e = this.observers.find((t => t.shouldFetchOnReconnect()));
                    e && e.refetch({
                        cancelRefetch: !1
                    }), null == (t = this.retryer) || t.continue()
                }
                addObserver(t) {
                    this.observers.includes(t) || (this.observers.push(t), this.clearGcTimeout(), this.cache.notify({
                        type: "observerAdded",
                        query: this,
                        observer: t
                    }))
                }
                removeObserver(t) {
                    this.observers.includes(t) && (this.observers = this.observers.filter((e => e !== t)), this.observers.length || (this.retryer && (this.abortSignalConsumed ? this.retryer.cancel({
                        revert: !0
                    }) : this.retryer.cancelRetry()), this.scheduleGc()), this.cache.notify({
                        type: "observerRemoved",
                        query: this,
                        observer: t
                    }))
                }
                getObserversCount() {
                    return this.observers.length
                }
                invalidate() {
                    this.state.isInvalidated || this.dispatch({
                        type: "invalidate"
                    })
                }
                fetch(t, e) {
                    var s, i;
                    if ("idle" !== this.state.fetchStatus)
                        if (this.state.dataUpdatedAt && null != e && e.cancelRefetch) this.cancel({
                            silent: !0
                        });
                        else if (this.promise) {
                        var n;
                        return null == (n = this.retryer) || n.continueRetry(), this.promise
                    }
                    if (t && this.setOptions(t), !this.options.queryFn) {
                        const t = this.observers.find((t => t.options.queryFn));
                        t && this.setOptions(t.options)
                    }
                    const a = (0, r.jY)(),
                        o = {
                            queryKey: this.queryKey,
                            pageParam: void 0,
                            meta: this.meta
                        },
                        h = t => {
                            Object.defineProperty(t, "signal", {
                                enumerable: !0,
                                get: () => {
                                    if (a) return this.abortSignalConsumed = !0, a.signal
                                }
                            })
                        };
                    h(o);
                    const c = {
                        fetchOptions: e,
                        options: this.options,
                        queryKey: this.queryKey,
                        state: this.state,
                        fetchFn: () => this.options.queryFn ? (this.abortSignalConsumed = !1, this.options.queryFn(o)) : Promise.reject("Missing queryFn for queryKey '" + this.options.queryHash + "'")
                    };
                    var l;
                    (h(c), null == (s = this.options.behavior) || s.onFetch(c), this.revertState = this.state, "idle" === this.state.fetchStatus || this.state.fetchMeta !== (null == (i = c.fetchOptions) ? void 0 : i.meta)) && this.dispatch({
                        type: "fetch",
                        meta: null == (l = c.fetchOptions) ? void 0 : l.meta
                    });
                    const d = t => {
                        var e, s, r, i;
                        ((0, u.wm)(t) && t.silent || this.dispatch({
                            type: "error",
                            error: t
                        }), (0, u.wm)(t)) || (null == (e = (s = this.cache.config).onError) || e.call(s, t, this), null == (r = (i = this.cache.config).onSettled) || r.call(i, this.state.data, t, this));
                        this.isFetchingOptimistic || this.scheduleGc(), this.isFetchingOptimistic = !1
                    };
                    return this.retryer = (0, u.II)({
                        fn: c.fetchFn,
                        abort: null == a ? void 0 : a.abort.bind(a),
                        onSuccess: t => {
                            var e, s, r, i;
                            void 0 !== t ? (this.setData(t), null == (e = (s = this.cache.config).onSuccess) || e.call(s, t, this), null == (r = (i = this.cache.config).onSettled) || r.call(i, t, this.state.error, this), this.isFetchingOptimistic || this.scheduleGc(), this.isFetchingOptimistic = !1) : d(new Error(this.queryHash + " data is undefined"))
                        },
                        onError: d,
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
                        retry: c.options.retry,
                        retryDelay: c.options.retryDelay,
                        networkMode: c.options.networkMode
                    }), this.promise = this.retryer.promise, this.promise
                }
                dispatch(t) {
                    this.state = (e => {
                        var s, r;
                        switch (t.type) {
                            case "failed":
                                return { ...e,
                                    fetchFailureCount: t.failureCount,
                                    fetchFailureReason: t.error
                                };
                            case "pause":
                                return { ...e,
                                    fetchStatus: "paused"
                                };
                            case "continue":
                                return { ...e,
                                    fetchStatus: "fetching"
                                };
                            case "fetch":
                                return { ...e,
                                    fetchFailureCount: 0,
                                    fetchFailureReason: null,
                                    fetchMeta: null != (s = t.meta) ? s : null,
                                    fetchStatus: (0, u.v_)(this.options.networkMode) ? "fetching" : "paused",
                                    ...!e.dataUpdatedAt && {
                                        error: null,
                                        status: "loading"
                                    }
                                };
                            case "success":
                                return { ...e,
                                    data: t.data,
                                    dataUpdateCount: e.dataUpdateCount + 1,
                                    dataUpdatedAt: null != (r = t.dataUpdatedAt) ? r : Date.now(),
                                    error: null,
                                    isInvalidated: !1,
                                    status: "success",
                                    ...!t.manual && {
                                        fetchStatus: "idle",
                                        fetchFailureCount: 0,
                                        fetchFailureReason: null
                                    }
                                };
                            case "error":
                                const i = t.error;
                                return (0, u.wm)(i) && i.revert && this.revertState ? { ...this.revertState,
                                    fetchStatus: "idle"
                                } : { ...e,
                                    error: i,
                                    errorUpdateCount: e.errorUpdateCount + 1,
                                    errorUpdatedAt: Date.now(),
                                    fetchFailureCount: e.fetchFailureCount + 1,
                                    fetchFailureReason: i,
                                    fetchStatus: "idle",
                                    status: "error"
                                };
                            case "invalidate":
                                return { ...e,
                                    isInvalidated: !0
                                };
                            case "setState":
                                return { ...e,
                                    ...t.state
                                }
                        }
                    })(this.state), n.j.batch((() => {
                        this.observers.forEach((e => {
                            e.onQueryUpdate(t)
                        })), this.cache.notify({
                            query: this,
                            type: "updated",
                            action: t
                        })
                    }))
                }
            }
            var h = s(8189);
            class c extends h.Q {
                constructor(t) {
                    super(), this.config = t || {}, this.queries = [], this.queriesMap = {}
                }
                build(t, e, s) {
                    var i;
                    const n = e.queryKey,
                        u = null != (i = e.queryHash) ? i : (0, r.F$)(n, e);
                    let a = this.get(u);
                    return a || (a = new o({
                        cache: this,
                        logger: t.getLogger(),
                        queryKey: n,
                        queryHash: u,
                        options: t.defaultQueryOptions(e),
                        state: s,
                        defaultOptions: t.getQueryDefaults(n)
                    }), this.add(a)), a
                }
                add(t) {
                    this.queriesMap[t.queryHash] || (this.queriesMap[t.queryHash] = t, this.queries.push(t), this.notify({
                        type: "added",
                        query: t
                    }))
                }
                remove(t) {
                    const e = this.queriesMap[t.queryHash];
                    e && (t.destroy(), this.queries = this.queries.filter((e => e !== t)), e === t && delete this.queriesMap[t.queryHash], this.notify({
                        type: "removed",
                        query: t
                    }))
                }
                clear() {
                    n.j.batch((() => {
                        this.queries.forEach((t => {
                            this.remove(t)
                        }))
                    }))
                }
                get(t) {
                    return this.queriesMap[t]
                }
                getAll() {
                    return this.queries
                }
                find(t, e) {
                    const [s] = (0, r.b_)(t, e);
                    return void 0 === s.exact && (s.exact = !0), this.queries.find((t => (0, r.MK)(s, t)))
                }
                findAll(t, e) {
                    const [s] = (0, r.b_)(t, e);
                    return Object.keys(s).length > 0 ? this.queries.filter((t => (0, r.MK)(s, t))) : this.queries
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
                onFocus() {
                    n.j.batch((() => {
                        this.queries.forEach((t => {
                            t.onFocus()
                        }))
                    }))
                }
                onOnline() {
                    n.j.batch((() => {
                        this.queries.forEach((t => {
                            t.onOnline()
                        }))
                    }))
                }
            }
            var l = s(8037),
                d = s(1527),
                f = s(7996),
                p = s(368);
            class y {
                constructor(t = {}) {
                    this.queryCache = t.queryCache || new c, this.mutationCache = t.mutationCache || new l.q, this.logger = t.logger || i.U, this.defaultOptions = t.defaultOptions || {}, this.queryDefaults = [], this.mutationDefaults = [], this.mountCount = 0
                }
                mount() {
                    this.mountCount++, 1 === this.mountCount && (this.unsubscribeFocus = d.m.subscribe((() => {
                        d.m.isFocused() && (this.resumePausedMutations(), this.queryCache.onFocus())
                    })), this.unsubscribeOnline = f.t.subscribe((() => {
                        f.t.isOnline() && (this.resumePausedMutations(), this.queryCache.onOnline())
                    })))
                }
                unmount() {
                    var t, e;
                    this.mountCount--, 0 === this.mountCount && (null == (t = this.unsubscribeFocus) || t.call(this), this.unsubscribeFocus = void 0, null == (e = this.unsubscribeOnline) || e.call(this), this.unsubscribeOnline = void 0)
                }
                isFetching(t, e) {
                    const [s] = (0, r.b_)(t, e);
                    return s.fetchStatus = "fetching", this.queryCache.findAll(s).length
                }
                isMutating(t) {
                    return this.mutationCache.findAll({ ...t,
                        fetching: !0
                    }).length
                }
                getQueryData(t, e) {
                    var s;
                    return null == (s = this.queryCache.find(t, e)) ? void 0 : s.state.data
                }
                ensureQueryData(t, e, s) {
                    const i = (0, r.vh)(t, e, s),
                        n = this.getQueryData(i.queryKey);
                    return n ? Promise.resolve(n) : this.fetchQuery(i)
                }
                getQueriesData(t) {
                    return this.getQueryCache().findAll(t).map((({
                        queryKey: t,
                        state: e
                    }) => [t, e.data]))
                }
                setQueryData(t, e, s) {
                    const i = this.queryCache.find(t),
                        n = null == i ? void 0 : i.state.data,
                        u = (0, r.Zw)(e, n);
                    if (void 0 === u) return;
                    const a = (0, r.vh)(t),
                        o = this.defaultQueryOptions(a);
                    return this.queryCache.build(this, o).setData(u, { ...s,
                        manual: !0
                    })
                }
                setQueriesData(t, e, s) {
                    return n.j.batch((() => this.getQueryCache().findAll(t).map((({
                        queryKey: t
                    }) => [t, this.setQueryData(t, e, s)]))))
                }
                getQueryState(t, e) {
                    var s;
                    return null == (s = this.queryCache.find(t, e)) ? void 0 : s.state
                }
                removeQueries(t, e) {
                    const [s] = (0, r.b_)(t, e), i = this.queryCache;
                    n.j.batch((() => {
                        i.findAll(s).forEach((t => {
                            i.remove(t)
                        }))
                    }))
                }
                resetQueries(t, e, s) {
                    const [i, u] = (0, r.b_)(t, e, s), a = this.queryCache, o = {
                        type: "active",
                        ...i
                    };
                    return n.j.batch((() => (a.findAll(i).forEach((t => {
                        t.reset()
                    })), this.refetchQueries(o, u))))
                }
                cancelQueries(t, e, s) {
                    const [i, u = {}] = (0, r.b_)(t, e, s);
                    void 0 === u.revert && (u.revert = !0);
                    const a = n.j.batch((() => this.queryCache.findAll(i).map((t => t.cancel(u)))));
                    return Promise.all(a).then(r.lQ).catch(r.lQ)
                }
                invalidateQueries(t, e, s) {
                    const [i, u] = (0, r.b_)(t, e, s);
                    return n.j.batch((() => {
                        var t, e;
                        if (this.queryCache.findAll(i).forEach((t => {
                                t.invalidate()
                            })), "none" === i.refetchType) return Promise.resolve();
                        const s = { ...i,
                            type: null != (t = null != (e = i.refetchType) ? e : i.type) ? t : "active"
                        };
                        return this.refetchQueries(s, u)
                    }))
                }
                refetchQueries(t, e, s) {
                    const [i, u] = (0, r.b_)(t, e, s), a = n.j.batch((() => this.queryCache.findAll(i).filter((t => !t.isDisabled())).map((t => {
                        var e;
                        return t.fetch(void 0, { ...u,
                            cancelRefetch: null == (e = null == u ? void 0 : u.cancelRefetch) || e,
                            meta: {
                                refetchPage: i.refetchPage
                            }
                        })
                    }))));
                    let o = Promise.all(a).then(r.lQ);
                    return null != u && u.throwOnError || (o = o.catch(r.lQ)), o
                }
                fetchQuery(t, e, s) {
                    const i = (0, r.vh)(t, e, s),
                        n = this.defaultQueryOptions(i);
                    void 0 === n.retry && (n.retry = !1);
                    const u = this.queryCache.build(this, n);
                    return u.isStaleByTime(n.staleTime) ? u.fetch(n) : Promise.resolve(u.state.data)
                }
                prefetchQuery(t, e, s) {
                    return this.fetchQuery(t, e, s).then(r.lQ).catch(r.lQ)
                }
                fetchInfiniteQuery(t, e, s) {
                    const i = (0, r.vh)(t, e, s);
                    return i.behavior = (0, p.PL)(), this.fetchQuery(i)
                }
                prefetchInfiniteQuery(t, e, s) {
                    return this.fetchInfiniteQuery(t, e, s).then(r.lQ).catch(r.lQ)
                }
                resumePausedMutations() {
                    return this.mutationCache.resumePausedMutations()
                }
                getQueryCache() {
                    return this.queryCache
                }
                getMutationCache() {
                    return this.mutationCache
                }
                getLogger() {
                    return this.logger
                }
                getDefaultOptions() {
                    return this.defaultOptions
                }
                setDefaultOptions(t) {
                    this.defaultOptions = t
                }
                setQueryDefaults(t, e) {
                    const s = this.queryDefaults.find((e => (0, r.Od)(t) === (0, r.Od)(e.queryKey)));
                    s ? s.defaultOptions = e : this.queryDefaults.push({
                        queryKey: t,
                        defaultOptions: e
                    })
                }
                getQueryDefaults(t) {
                    if (!t) return;
                    const e = this.queryDefaults.find((e => (0, r.Cp)(t, e.queryKey)));
                    return null == e ? void 0 : e.defaultOptions
                }
                setMutationDefaults(t, e) {
                    const s = this.mutationDefaults.find((e => (0, r.Od)(t) === (0, r.Od)(e.mutationKey)));
                    s ? s.defaultOptions = e : this.mutationDefaults.push({
                        mutationKey: t,
                        defaultOptions: e
                    })
                }
                getMutationDefaults(t) {
                    if (!t) return;
                    const e = this.mutationDefaults.find((e => (0, r.Cp)(t, e.mutationKey)));
                    return null == e ? void 0 : e.defaultOptions
                }
                defaultQueryOptions(t) {
                    if (null != t && t._defaulted) return t;
                    const e = { ...this.defaultOptions.queries,
                        ...this.getQueryDefaults(null == t ? void 0 : t.queryKey),
                        ...t,
                        _defaulted: !0
                    };
                    return !e.queryHash && e.queryKey && (e.queryHash = (0, r.F$)(e.queryKey, e)), void 0 === e.refetchOnReconnect && (e.refetchOnReconnect = "always" !== e.networkMode), void 0 === e.useErrorBoundary && (e.useErrorBoundary = !!e.suspense), e
                }
                defaultMutationOptions(t) {
                    return null != t && t._defaulted ? t : { ...this.defaultOptions.mutations,
                        ...this.getMutationDefaults(null == t ? void 0 : t.mutationKey),
                        ...t,
                        _defaulted: !0
                    }
                }
                clear() {
                    this.queryCache.clear(), this.mutationCache.clear()
                }
            }
        },
        6056: (t, e, s) => {
            s.d(e, {
                $: () => o
            });
            var r = s(6885),
                i = s(4938),
                n = s(1527),
                u = s(8189),
                a = s(5677);
            class o extends u.Q {
                constructor(t, e) {
                    super(), this.client = t, this.options = e, this.trackedProps = new Set, this.selectError = null, this.bindMethods(), this.setOptions(e)
                }
                bindMethods() {
                    this.remove = this.remove.bind(this), this.refetch = this.refetch.bind(this)
                }
                onSubscribe() {
                    1 === this.listeners.size && (this.currentQuery.addObserver(this), h(this.currentQuery, this.options) && this.executeFetch(), this.updateTimers())
                }
                onUnsubscribe() {
                    this.hasListeners() || this.destroy()
                }
                shouldFetchOnReconnect() {
                    return c(this.currentQuery, this.options, this.options.refetchOnReconnect)
                }
                shouldFetchOnWindowFocus() {
                    return c(this.currentQuery, this.options, this.options.refetchOnWindowFocus)
                }
                destroy() {
                    this.listeners = new Set, this.clearStaleTimeout(), this.clearRefetchInterval(), this.currentQuery.removeObserver(this)
                }
                setOptions(t, e) {
                    const s = this.options,
                        i = this.currentQuery;
                    if (this.options = this.client.defaultQueryOptions(t), (0, r.f8)(s, this.options) || this.client.getQueryCache().notify({
                            type: "observerOptionsUpdated",
                            query: this.currentQuery,
                            observer: this
                        }), void 0 !== this.options.enabled && "boolean" != typeof this.options.enabled) throw new Error("Expected enabled to be a boolean");
                    this.options.queryKey || (this.options.queryKey = s.queryKey), this.updateQuery();
                    const n = this.hasListeners();
                    n && l(this.currentQuery, i, this.options, s) && this.executeFetch(), this.updateResult(e), !n || this.currentQuery === i && this.options.enabled === s.enabled && this.options.staleTime === s.staleTime || this.updateStaleTimeout();
                    const u = this.computeRefetchInterval();
                    !n || this.currentQuery === i && this.options.enabled === s.enabled && u === this.currentRefetchInterval || this.updateRefetchInterval(u)
                }
                getOptimisticResult(t) {
                    const e = this.client.getQueryCache().build(this.client, t),
                        s = this.createResult(e, t);
                    return function(t, e, s) {
                        if (s.keepPreviousData) return !1;
                        if (void 0 !== s.placeholderData) return e.isPlaceholderData;
                        if (!(0, r.f8)(t.getCurrentResult(), e)) return !0;
                        return !1
                    }(this, s, t) && (this.currentResult = s, this.currentResultOptions = this.options, this.currentResultState = this.currentQuery.state), s
                }
                getCurrentResult() {
                    return this.currentResult
                }
                trackResult(t) {
                    const e = {};
                    return Object.keys(t).forEach((s => {
                        Object.defineProperty(e, s, {
                            configurable: !1,
                            enumerable: !0,
                            get: () => (this.trackedProps.add(s), t[s])
                        })
                    })), e
                }
                getCurrentQuery() {
                    return this.currentQuery
                }
                remove() {
                    this.client.getQueryCache().remove(this.currentQuery)
                }
                refetch({
                    refetchPage: t,
                    ...e
                } = {}) {
                    return this.fetch({ ...e,
                        meta: {
                            refetchPage: t
                        }
                    })
                }
                fetchOptimistic(t) {
                    const e = this.client.defaultQueryOptions(t),
                        s = this.client.getQueryCache().build(this.client, e);
                    return s.isFetchingOptimistic = !0, s.fetch().then((() => this.createResult(s, e)))
                }
                fetch(t) {
                    var e;
                    return this.executeFetch({ ...t,
                        cancelRefetch: null == (e = t.cancelRefetch) || e
                    }).then((() => (this.updateResult(), this.currentResult)))
                }
                executeFetch(t) {
                    this.updateQuery();
                    let e = this.currentQuery.fetch(this.options, t);
                    return null != t && t.throwOnError || (e = e.catch(r.lQ)), e
                }
                updateStaleTimeout() {
                    if (this.clearStaleTimeout(), r.S$ || this.currentResult.isStale || !(0, r.gn)(this.options.staleTime)) return;
                    const t = (0, r.j3)(this.currentResult.dataUpdatedAt, this.options.staleTime) + 1;
                    this.staleTimeoutId = setTimeout((() => {
                        this.currentResult.isStale || this.updateResult()
                    }), t)
                }
                computeRefetchInterval() {
                    var t;
                    return "function" == typeof this.options.refetchInterval ? this.options.refetchInterval(this.currentResult.data, this.currentQuery) : null != (t = this.options.refetchInterval) && t
                }
                updateRefetchInterval(t) {
                    this.clearRefetchInterval(), this.currentRefetchInterval = t, !r.S$ && !1 !== this.options.enabled && (0, r.gn)(this.currentRefetchInterval) && 0 !== this.currentRefetchInterval && (this.refetchIntervalId = setInterval((() => {
                        (this.options.refetchIntervalInBackground || n.m.isFocused()) && this.executeFetch()
                    }), this.currentRefetchInterval))
                }
                updateTimers() {
                    this.updateStaleTimeout(), this.updateRefetchInterval(this.computeRefetchInterval())
                }
                clearStaleTimeout() {
                    this.staleTimeoutId && (clearTimeout(this.staleTimeoutId), this.staleTimeoutId = void 0)
                }
                clearRefetchInterval() {
                    this.refetchIntervalId && (clearInterval(this.refetchIntervalId), this.refetchIntervalId = void 0)
                }
                createResult(t, e) {
                    const s = this.currentQuery,
                        i = this.options,
                        n = this.currentResult,
                        u = this.currentResultState,
                        o = this.currentResultOptions,
                        c = t !== s,
                        f = c ? t.state : this.currentQueryInitialState,
                        p = c ? this.currentResult : this.previousQueryResult,
                        {
                            state: y
                        } = t;
                    let v, {
                            dataUpdatedAt: m,
                            error: b,
                            errorUpdatedAt: g,
                            fetchStatus: O,
                            status: q
                        } = y,
                        R = !1,
                        Q = !1;
                    if (e._optimisticResults) {
                        const r = this.hasListeners(),
                            n = !r && h(t, e),
                            u = r && l(t, s, e, i);
                        (n || u) && (O = (0, a.v_)(t.options.networkMode) ? "fetching" : "paused", m || (q = "loading")), "isRestoring" === e._optimisticResults && (O = "idle")
                    }
                    if (e.keepPreviousData && !y.dataUpdatedAt && null != p && p.isSuccess && "error" !== q) v = p.data, m = p.dataUpdatedAt, q = p.status, R = !0;
                    else if (e.select && void 0 !== y.data)
                        if (n && y.data === (null == u ? void 0 : u.data) && e.select === this.selectFn) v = this.selectResult;
                        else try {
                            this.selectFn = e.select, v = e.select(y.data), v = (0, r.pl)(null == n ? void 0 : n.data, v, e), this.selectResult = v, this.selectError = null
                        } catch (t) {
                            0,
                            this.selectError = t
                        }
                    else v = y.data;
                    if (void 0 !== e.placeholderData && void 0 === v && "loading" === q) {
                        let t;
                        if (null != n && n.isPlaceholderData && e.placeholderData === (null == o ? void 0 : o.placeholderData)) t = n.data;
                        else if (t = "function" == typeof e.placeholderData ? e.placeholderData() : e.placeholderData, e.select && void 0 !== t) try {
                            t = e.select(t), this.selectError = null
                        } catch (t) {
                            0,
                            this.selectError = t
                        }
                        void 0 !== t && (q = "success", v = (0, r.pl)(null == n ? void 0 : n.data, t, e), Q = !0)
                    }
                    this.selectError && (b = this.selectError, v = this.selectResult, g = Date.now(), q = "error");
                    const C = "fetching" === O,
                        S = "loading" === q,
                        F = "error" === q;
                    return {
                        status: q,
                        fetchStatus: O,
                        isLoading: S,
                        isSuccess: "success" === q,
                        isError: F,
                        isInitialLoading: S && C,
                        data: v,
                        dataUpdatedAt: m,
                        error: b,
                        errorUpdatedAt: g,
                        failureCount: y.fetchFailureCount,
                        failureReason: y.fetchFailureReason,
                        errorUpdateCount: y.errorUpdateCount,
                        isFetched: y.dataUpdateCount > 0 || y.errorUpdateCount > 0,
                        isFetchedAfterMount: y.dataUpdateCount > f.dataUpdateCount || y.errorUpdateCount > f.errorUpdateCount,
                        isFetching: C,
                        isRefetching: C && !S,
                        isLoadingError: F && 0 === y.dataUpdatedAt,
                        isPaused: "paused" === O,
                        isPlaceholderData: Q,
                        isPreviousData: R,
                        isRefetchError: F && 0 !== y.dataUpdatedAt,
                        isStale: d(t, e),
                        refetch: this.refetch,
                        remove: this.remove
                    }
                }
                updateResult(t) {
                    const e = this.currentResult,
                        s = this.createResult(this.currentQuery, this.options);
                    if (this.currentResultState = this.currentQuery.state, this.currentResultOptions = this.options, (0, r.f8)(s, e)) return;
                    this.currentResult = s;
                    const i = {
                        cache: !0
                    };
                    !1 !== (null == t ? void 0 : t.listeners) && (() => {
                        if (!e) return !0;
                        const {
                            notifyOnChangeProps: t
                        } = this.options, s = "function" == typeof t ? t() : t;
                        if ("all" === s || !s && !this.trackedProps.size) return !0;
                        const r = new Set(null != s ? s : this.trackedProps);
                        return this.options.useErrorBoundary && r.add("error"), Object.keys(this.currentResult).some((t => {
                            const s = t;
                            return this.currentResult[s] !== e[s] && r.has(s)
                        }))
                    })() && (i.listeners = !0), this.notify({ ...i,
                        ...t
                    })
                }
                updateQuery() {
                    const t = this.client.getQueryCache().build(this.client, this.options);
                    if (t === this.currentQuery) return;
                    const e = this.currentQuery;
                    this.currentQuery = t, this.currentQueryInitialState = t.state, this.previousQueryResult = this.currentResult, this.hasListeners() && (null == e || e.removeObserver(this), t.addObserver(this))
                }
                onQueryUpdate(t) {
                    const e = {};
                    "success" === t.type ? e.onSuccess = !t.manual : "error" !== t.type || (0, a.wm)(t.error) || (e.onError = !0), this.updateResult(e), this.hasListeners() && this.updateTimers()
                }
                notify(t) {
                    i.j.batch((() => {
                        var e, s, r, i;
                        if (t.onSuccess) null == (e = (s = this.options).onSuccess) || e.call(s, this.currentResult.data), null == (r = (i = this.options).onSettled) || r.call(i, this.currentResult.data, null);
                        else if (t.onError) {
                            var n, u, a, o;
                            null == (n = (u = this.options).onError) || n.call(u, this.currentResult.error), null == (a = (o = this.options).onSettled) || a.call(o, void 0, this.currentResult.error)
                        }
                        t.listeners && this.listeners.forEach((({
                            listener: t
                        }) => {
                            t(this.currentResult)
                        })), t.cache && this.client.getQueryCache().notify({
                            query: this.currentQuery,
                            type: "observerResultsUpdated"
                        })
                    }))
                }
            }

            function h(t, e) {
                return function(t, e) {
                    return !(!1 === e.enabled || t.state.dataUpdatedAt || "error" === t.state.status && !1 === e.retryOnMount)
                }(t, e) || t.state.dataUpdatedAt > 0 && c(t, e, e.refetchOnMount)
            }

            function c(t, e, s) {
                if (!1 !== e.enabled) {
                    const r = "function" == typeof s ? s(t) : s;
                    return "always" === r || !1 !== r && d(t, e)
                }
                return !1
            }

            function l(t, e, s, r) {
                return !1 !== s.enabled && (t !== e || !1 === r.enabled) && (!s.suspense || "error" !== t.state.status) && d(t, s)
            }

            function d(t, e) {
                return t.isStaleByTime(e.staleTime)
            }
        },
        3853: (t, e, s) => {
            s.d(e, {
                k: () => i
            });
            var r = s(6885);
            class i {
                destroy() {
                    this.clearGcTimeout()
                }
                scheduleGc() {
                    this.clearGcTimeout(), (0, r.gn)(this.cacheTime) && (this.gcTimeout = setTimeout((() => {
                        this.optionalRemove()
                    }), this.cacheTime))
                }
                updateCacheTime(t) {
                    this.cacheTime = Math.max(this.cacheTime || 0, null != t ? t : r.S$ ? 1 / 0 : 3e5)
                }
                clearGcTimeout() {
                    this.gcTimeout && (clearTimeout(this.gcTimeout), this.gcTimeout = void 0)
                }
            }
        },
        5677: (t, e, s) => {
            s.d(e, {
                II: () => c,
                v_: () => a,
                wm: () => h
            });
            var r = s(1527),
                i = s(7996),
                n = s(6885);

            function u(t) {
                return Math.min(1e3 * 2 ** t, 3e4)
            }

            function a(t) {
                return "online" !== (null != t ? t : "online") || i.t.isOnline()
            }
            class o {
                constructor(t) {
                    this.revert = null == t ? void 0 : t.revert, this.silent = null == t ? void 0 : t.silent
                }
            }

            function h(t) {
                return t instanceof o
            }

            function c(t) {
                let e, s, h, c = !1,
                    l = 0,
                    d = !1;
                const f = new Promise(((t, e) => {
                        s = t, h = e
                    })),
                    p = () => !r.m.isFocused() || "always" !== t.networkMode && !i.t.isOnline(),
                    y = r => {
                        d || (d = !0, null == t.onSuccess || t.onSuccess(r), null == e || e(), s(r))
                    },
                    v = s => {
                        d || (d = !0, null == t.onError || t.onError(s), null == e || e(), h(s))
                    },
                    m = () => new Promise((s => {
                        e = t => {
                            const e = d || !p();
                            return e && s(t), e
                        }, null == t.onPause || t.onPause()
                    })).then((() => {
                        e = void 0, d || null == t.onContinue || t.onContinue()
                    })),
                    b = () => {
                        if (d) return;
                        let e;
                        try {
                            e = t.fn()
                        } catch (t) {
                            e = Promise.reject(t)
                        }
                        Promise.resolve(e).then(y).catch((e => {
                            var s, r;
                            if (d) return;
                            const i = null != (s = t.retry) ? s : 3,
                                a = null != (r = t.retryDelay) ? r : u,
                                o = "function" == typeof a ? a(l, e) : a,
                                h = !0 === i || "number" == typeof i && l < i || "function" == typeof i && i(l, e);
                            !c && h ? (l++, null == t.onFail || t.onFail(l, e), (0, n.yy)(o).then((() => {
                                if (p()) return m()
                            })).then((() => {
                                c ? v(e) : b()
                            }))) : v(e)
                        }))
                    };
                return a(t.networkMode) ? b() : m().then(b), {
                    promise: f,
                    cancel: e => {
                        d || (v(new o(e)), null == t.abort || t.abort())
                    },
                    continue: () => (null == e ? void 0 : e()) ? f : Promise.resolve(),
                    cancelRetry: () => {
                        c = !0
                    },
                    continueRetry: () => {
                        c = !1
                    }
                }
            }
        },
        8189: (t, e, s) => {
            s.d(e, {
                Q: () => r
            });
            class r {
                constructor() {
                    this.listeners = new Set, this.subscribe = this.subscribe.bind(this)
                }
                subscribe(t) {
                    const e = {
                        listener: t
                    };
                    return this.listeners.add(e), this.onSubscribe(), () => {
                        this.listeners.delete(e), this.onUnsubscribe()
                    }
                }
                hasListeners() {
                    return this.listeners.size > 0
                }
                onSubscribe() {}
                onUnsubscribe() {}
            }
        },
        6885: (t, e, s) => {
            s.d(e, {
                Cp: () => p,
                F$: () => d,
                G6: () => Q,
                MK: () => c,
                Od: () => f,
                S$: () => r,
                Zw: () => n,
                b_: () => h,
                f8: () => m,
                gn: () => u,
                j3: () => a,
                jY: () => C,
                lQ: () => i,
                nJ: () => l,
                pl: () => S,
                vh: () => o,
                yy: () => R
            });
            const r = "undefined" == typeof window || "Deno" in window;

            function i() {}

            function n(t, e) {
                return "function" == typeof t ? t(e) : t
            }

            function u(t) {
                return "number" == typeof t && t >= 0 && t !== 1 / 0
            }

            function a(t, e) {
                return Math.max(t + (e || 0) - Date.now(), 0)
            }

            function o(t, e, s) {
                return q(t) ? "function" == typeof e ? { ...s,
                    queryKey: t,
                    queryFn: e
                } : { ...e,
                    queryKey: t
                } : t
            }

            function h(t, e, s) {
                return q(t) ? [{ ...e,
                    queryKey: t
                }, s] : [t || {}, e]
            }

            function c(t, e) {
                const {
                    type: s = "all",
                    exact: r,
                    fetchStatus: i,
                    predicate: n,
                    queryKey: u,
                    stale: a
                } = t;
                if (q(u))
                    if (r) {
                        if (e.queryHash !== d(u, e.options)) return !1
                    } else if (!p(e.queryKey, u)) return !1;
                if ("all" !== s) {
                    const t = e.isActive();
                    if ("active" === s && !t) return !1;
                    if ("inactive" === s && t) return !1
                }
                return ("boolean" != typeof a || e.isStale() === a) && ((void 0 === i || i === e.state.fetchStatus) && !(n && !n(e)))
            }

            function l(t, e) {
                const {
                    exact: s,
                    fetching: r,
                    predicate: i,
                    mutationKey: n
                } = t;
                if (q(n)) {
                    if (!e.options.mutationKey) return !1;
                    if (s) {
                        if (f(e.options.mutationKey) !== f(n)) return !1
                    } else if (!p(e.options.mutationKey, n)) return !1
                }
                return ("boolean" != typeof r || "loading" === e.state.status === r) && !(i && !i(e))
            }

            function d(t, e) {
                return ((null == e ? void 0 : e.queryKeyHashFn) || f)(t)
            }

            function f(t) {
                return JSON.stringify(t, ((t, e) => g(e) ? Object.keys(e).sort().reduce(((t, s) => (t[s] = e[s], t)), {}) : e))
            }

            function p(t, e) {
                return y(t, e)
            }

            function y(t, e) {
                return t === e || typeof t == typeof e && (!(!t || !e || "object" != typeof t || "object" != typeof e) && !Object.keys(e).some((s => !y(t[s], e[s]))))
            }

            function v(t, e) {
                if (t === e) return t;
                const s = b(t) && b(e);
                if (s || g(t) && g(e)) {
                    const r = s ? t.length : Object.keys(t).length,
                        i = s ? e : Object.keys(e),
                        n = i.length,
                        u = s ? [] : {};
                    let a = 0;
                    for (let r = 0; r < n; r++) {
                        const n = s ? r : i[r];
                        u[n] = v(t[n], e[n]), u[n] === t[n] && a++
                    }
                    return r === n && a === r ? t : u
                }
                return e
            }

            function m(t, e) {
                if (t && !e || e && !t) return !1;
                for (const s in t)
                    if (t[s] !== e[s]) return !1;
                return !0
            }

            function b(t) {
                return Array.isArray(t) && t.length === Object.keys(t).length
            }

            function g(t) {
                if (!O(t)) return !1;
                const e = t.constructor;
                if (void 0 === e) return !0;
                const s = e.prototype;
                return !!O(s) && !!s.hasOwnProperty("isPrototypeOf")
            }

            function O(t) {
                return "[object Object]" === Object.prototype.toString.call(t)
            }

            function q(t) {
                return Array.isArray(t)
            }

            function R(t) {
                return new Promise((e => {
                    setTimeout(e, t)
                }))
            }

            function Q(t) {
                R(0).then(t)
            }

            function C() {
                if ("function" == typeof AbortController) return new AbortController
            }

            function S(t, e, s) {
                return null != s.isDataEqual && s.isDataEqual(t, e) ? t : "function" == typeof s.structuralSharing ? s.structuralSharing(t, e) : !1 !== s.structuralSharing ? v(t, e) : e
            }
        }
    }
]);
//# sourceMappingURL=npm.tanstack-bf8c2a9d.chunk.c17d0b.js.map