"use strict";
(self.webpackChunk_nike_analytics_client = self.webpackChunk_nike_analytics_client || []).push([
    [325], {
        4834: (e, n, t) => {
            var r;
            t.d(n, {
                    C: () => r
                }),
                function(e) {
                    e[e.Canceled = 1] = "Canceled", e[e.Unknown = 2] = "Unknown", e[e.InvalidArgument = 3] = "InvalidArgument", e[e.DeadlineExceeded = 4] = "DeadlineExceeded", e[e.NotFound = 5] = "NotFound", e[e.AlreadyExists = 6] = "AlreadyExists", e[e.PermissionDenied = 7] = "PermissionDenied", e[e.ResourceExhausted = 8] = "ResourceExhausted", e[e.FailedPrecondition = 9] = "FailedPrecondition", e[e.Aborted = 10] = "Aborted", e[e.OutOfRange = 11] = "OutOfRange", e[e.Unimplemented = 12] = "Unimplemented", e[e.Internal = 13] = "Internal", e[e.Unavailable = 14] = "Unavailable", e[e.DataLoss = 15] = "DataLoss", e[e.Unauthenticated = 16] = "Unauthenticated"
                }(r || (r = {}))
        },
        9490: (e, n, t) => {
            t.d(n, {
                T: () => a
            });
            var r = t(4834),
                o = t(9012),
                i = t(8102);
            class a extends Error {
                constructor(e, n = r.C.Unknown, t, o, a) {
                    super(function(e, n) {
                        return e.length ? `[${(0,i.s)(n)}] ${e}` : `[${(0,i.s)(n)}]`
                    }(e, n)), this.name = "ConnectError", Object.setPrototypeOf(this, new.target.prototype), this.rawMessage = e, this.code = n, this.metadata = new Headers(null != t ? t : {}), this.details = null != o ? o : [], this.cause = a
                }
                static from(e, n = r.C.Unknown) {
                    return e instanceof a ? e : e instanceof Error ? "AbortError" == e.name ? new a(e.message, r.C.Canceled) : new a(e.message, n, void 0, void 0, e) : new a(String(e), n, void 0, void 0, e)
                }
                findDetails(e) {
                    const n = "typeName" in e ? {
                            findMessage: n => n === e.typeName ? e : void 0
                        } : e,
                        t = [];
                    for (const e of this.details) {
                        if (e instanceof o.Q) {
                            n.findMessage(e.getType().typeName) && t.push(e);
                            continue
                        }
                        const r = n.findMessage(e.type);
                        if (r) try {
                            t.push(r.fromBinary(e.value))
                        } catch (e) {}
                    }
                    return t
                }
            }
        },
        2971: (e, n, t) => {
            t.d(n, {
                t0: () => y
            });
            var r = t(6629),
                o = t(9490),
                i = t(4834),
                a = function(e) {
                    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
                    var n, t = e[Symbol.asyncIterator];
                    return t ? t.call(e) : (e = "function" == typeof __values ? __values(e) : e[Symbol.iterator](), n = {}, r("next"), r("throw"), r("return"), n[Symbol.asyncIterator] = function() {
                        return this
                    }, n);

                    function r(t) {
                        n[t] = e[t] && function(n) {
                            return new Promise((function(r, o) {
                                ! function(e, n, t, r) {
                                    Promise.resolve(r).then((function(n) {
                                        e({
                                            value: n,
                                            done: t
                                        })
                                    }), n)
                                }(r, o, (n = e[t](n)).done, n.value)
                            }))
                        }
                    }
                },
                s = function(e) {
                    return this instanceof s ? (this.v = e, this) : new s(e)
                },
                c = function(e, n, t) {
                    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
                    var r, o = t.apply(e, n || []),
                        i = [];
                    return r = {}, a("next"), a("throw"), a("return"), r[Symbol.asyncIterator] = function() {
                        return this
                    }, r;

                    function a(e) {
                        o[e] && (r[e] = function(n) {
                            return new Promise((function(t, r) {
                                i.push([e, n, t, r]) > 1 || c(e, n)
                            }))
                        })
                    }

                    function c(e, n) {
                        try {
                            (t = o[e](n)).value instanceof s ? Promise.resolve(t.value.v).then(u, l) : d(i[0][2], t)
                        } catch (e) {
                            d(i[0][3], e)
                        }
                        var t
                    }

                    function u(e) {
                        c("next", e)
                    }

                    function l(e) {
                        c("throw", e)
                    }

                    function d(e, n) {
                        e(n), i.shift(), i.length && c(i[0][0], i[0][1])
                    }
                },
                u = function(e) {
                    var n, t;
                    return n = {}, r("next"), r("throw", (function(e) {
                        throw e
                    })), r("return"), n[Symbol.iterator] = function() {
                        return this
                    }, n;

                    function r(r, o) {
                        n[r] = e[r] ? function(n) {
                            return (t = !t) ? {
                                value: s(e[r](n)),
                                done: !1
                            } : o ? o(n) : n
                        } : o
                    }
                },
                l = function(e) {
                    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
                    var n, t = e[Symbol.asyncIterator];
                    return t ? t.call(e) : (e = "function" == typeof __values ? __values(e) : e[Symbol.iterator](), n = {}, r("next"), r("throw"), r("return"), n[Symbol.asyncIterator] = function() {
                        return this
                    }, n);

                    function r(t) {
                        n[t] = e[t] && function(n) {
                            return new Promise((function(r, o) {
                                ! function(e, n, t, r) {
                                    Promise.resolve(r).then((function(n) {
                                        e({
                                            value: n,
                                            done: t
                                        })
                                    }), n)
                                }(r, o, (n = e[t](n)).done, n.value)
                            }))
                        }
                    }
                },
                d = function(e) {
                    return this instanceof d ? (this.v = e, this) : new d(e)
                },
                f = function(e) {
                    var n, t;
                    return n = {}, r("next"), r("throw", (function(e) {
                        throw e
                    })), r("return"), n[Symbol.iterator] = function() {
                        return this
                    }, n;

                    function r(r, o) {
                        n[r] = e[r] ? function(n) {
                            return (t = !t) ? {
                                value: d(e[r](n)),
                                done: !1
                            } : o ? o(n) : n
                        } : o
                    }
                },
                h = function(e, n, t) {
                    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
                    var r, o = t.apply(e, n || []),
                        i = [];
                    return r = {}, a("next"), a("throw"), a("return"), r[Symbol.asyncIterator] = function() {
                        return this
                    }, r;

                    function a(e) {
                        o[e] && (r[e] = function(n) {
                            return new Promise((function(t, r) {
                                i.push([e, n, t, r]) > 1 || s(e, n)
                            }))
                        })
                    }

                    function s(e, n) {
                        try {
                            (t = o[e](n)).value instanceof d ? Promise.resolve(t.value.v).then(c, u) : l(i[0][2], t)
                        } catch (e) {
                            l(i[0][3], e)
                        }
                        var t
                    }

                    function c(e) {
                        s("next", e)
                    }

                    function u(e) {
                        s("throw", e)
                    }

                    function l(e, n) {
                        e(n), i.shift(), i.length && s(i[0][0], i[0][1])
                    }
                };

            function y(e, n) {
                return function(e, n) {
                    const t = {};
                    for (const [r, o] of Object.entries(e.methods)) {
                        const i = n(Object.assign(Object.assign({}, o), {
                            localName: r,
                            service: e
                        }));
                        null != i && (t[r] = i)
                    }
                    return t
                }(e, (t => {
                    switch (t.kind) {
                        case r.I.Unary:
                            return function(e, n, t) {
                                return async function(r, o) {
                                    var i, a;
                                    const s = await e.unary(n, t, null == o ? void 0 : o.signal, null == o ? void 0 : o.timeoutMs, null == o ? void 0 : o.headers, r, null == o ? void 0 : o.contextValues);
                                    return null === (i = null == o ? void 0 : o.onHeader) || void 0 === i || i.call(o, s.header), null === (a = null == o ? void 0 : o.onTrailer) || void 0 === a || a.call(o, s.trailer), s.message
                                }
                            }(n, e, t);
                        case r.I.ServerStreaming:
                            return function(e, n, t) {
                                return function(r, o) {
                                    return m(e.stream(n, t, null == o ? void 0 : o.signal, null == o ? void 0 : o.timeoutMs, null == o ? void 0 : o.headers, function(e) {
                                        return c(this, arguments, (function*() {
                                            yield s(yield* u(a(e)))
                                        }))
                                    }([r]), null == o ? void 0 : o.contextValues), o)
                                }
                            }(n, e, t);
                        case r.I.ClientStreaming:
                            return function(e, n, t) {
                                return async function(r, a) {
                                    var s, c, u, d, f, h;
                                    const y = await e.stream(n, t, null == a ? void 0 : a.signal, null == a ? void 0 : a.timeoutMs, null == a ? void 0 : a.headers, r, null == a ? void 0 : a.contextValues);
                                    let m;
                                    null === (f = null == a ? void 0 : a.onHeader) || void 0 === f || f.call(a, y.header);
                                    try {
                                        for (var v, g = !0, p = l(y.message); !(s = (v = await p.next()).done); g = !0) d = v.value, g = !1, m = d
                                    } catch (e) {
                                        c = {
                                            error: e
                                        }
                                    } finally {
                                        try {
                                            g || s || !(u = p.return) || await u.call(p)
                                        } finally {
                                            if (c) throw c.error
                                        }
                                    }
                                    if (!m) throw new o.T("protocol error: missing response message", i.C.Internal);
                                    return null === (h = null == a ? void 0 : a.onTrailer) || void 0 === h || h.call(a, y.trailer), m
                                }
                            }(n, e, t);
                        case r.I.BiDiStreaming:
                            return function(e, n, t) {
                                return function(r, o) {
                                    return m(e.stream(n, t, null == o ? void 0 : o.signal, null == o ? void 0 : o.timeoutMs, null == o ? void 0 : o.headers, r, null == o ? void 0 : o.contextValues), o)
                                }
                            }(n, e, t);
                        default:
                            return null
                    }
                }))
            }

            function m(e, n) {
                const t = function() {
                    var t, r;
                    return h(this, arguments, (function*() {
                        const o = yield d(e);
                        null === (t = null == n ? void 0 : n.onHeader) || void 0 === t || t.call(n, o.header), yield d(yield* f(l(o.message))), null === (r = null == n ? void 0 : n.onTrailer) || void 0 === r || r.call(n, o.trailer)
                    }))
                }()[Symbol.asyncIterator]();
                return {
                    [Symbol.asyncIterator]: () => ({
                        next: () => t.next()
                    })
                }
            }
        },
        8102: (e, n, t) => {
            t.d(n, {
                X: () => a,
                s: () => o
            });
            var r = t(4834);

            function o(e) {
                const n = r.C[e];
                return "string" != typeof n ? e.toString() : n[0].toLowerCase() + n.substring(1).replace(/[A-Z]/g, (e => "_" + e.toLowerCase()))
            }
            let i;

            function a(e) {
                if (!i) {
                    i = {};
                    for (const e of Object.values(r.C)) "string" != typeof e && (i[o(e)] = e)
                }
                return i[e]
            }
        },
        4531: (e, n, t) => {
            t.d(n, {
                w: () => V
            });
            var r = t(6629);

            function o() {
                return {
                    get(e) {
                        return e.id in this ? this[e.id] : e.defaultValue
                    },
                    set(e, n) {
                        return this[e.id] = n, this
                    },
                    delete(e) {
                        return delete this[e.id], this
                    }
                }
            }
            var i = t(9490),
                a = t(4834);

            function s(e) {
                var n;
                const t = Object.assign({}, e);
                return null !== (n = t.ignoreUnknownFields) && void 0 !== n || (t.ignoreUnknownFields = !0), t
            }

            function c(e, n, t, r) {
                const o = n ? u(e.I, r) : l(e.I, t);
                return {
                    parse: (n ? u(e.O, r) : l(e.O, t)).parse,
                    serialize: o.serialize
                }
            }

            function u(e, n) {
                return {
                    parse(t) {
                        try {
                            return e.fromBinary(t, n)
                        } catch (e) {
                            const n = e instanceof Error ? e.message : String(e);
                            throw new i.T(`parse binary: ${n}`, a.C.InvalidArgument)
                        }
                    },
                    serialize(e) {
                        try {
                            return e.toBinary(n)
                        } catch (e) {
                            const n = e instanceof Error ? e.message : String(e);
                            throw new i.T(`serialize binary: ${n}`, a.C.Internal)
                        }
                    }
                }
            }

            function l(e, n) {
                var t, r;
                const o = null !== (t = null == n ? void 0 : n.textEncoder) && void 0 !== t ? t : new TextEncoder,
                    c = null !== (r = null == n ? void 0 : n.textDecoder) && void 0 !== r ? r : new TextDecoder,
                    u = s(n);
                return {
                    parse(n) {
                        try {
                            const t = c.decode(n);
                            return e.fromJsonString(t, u)
                        } catch (e) {
                            throw i.T.from(e, a.C.InvalidArgument)
                        }
                    },
                    serialize(e) {
                        try {
                            const n = e.toJsonString(u);
                            return o.encode(n)
                        } catch (e) {
                            throw i.T.from(e, a.C.Internal)
                        }
                    }
                }
            }

            function d(e) {
                if (!e.aborted) return;
                if (void 0 !== e.reason) return e.reason;
                const n = new Error("This operation was aborted");
                return n.name = "AbortError", n
            }
            var f = t(9012);

            function h(e, n) {
                return n instanceof f.Q ? n : new e(n)
            }

            function y(e, n) {
                function t(n) {
                    return !0 === n.done ? n : {
                        done: n.done,
                        value: h(e, n.value)
                    }
                }
                return {
                    [Symbol.asyncIterator]() {
                        const e = n[Symbol.asyncIterator](),
                            r = {
                                next: () => e.next().then(t)
                            };
                        return void 0 !== e.throw && (r.throw = n => e.throw(n).then(t)), void 0 !== e.return && (r.return = n => e.return(n).then(t)), r
                    }
                }
            }

            function m(e) {
                const {
                    signal: n,
                    cleanup: t
                } = function(e) {
                    const n = new AbortController,
                        t = () => {
                            n.abort(new i.T("the operation timed out", a.C.DeadlineExceeded))
                        };
                    let r;
                    return void 0 !== e && (e <= 0 ? t() : r = setTimeout(t, e)), {
                        signal: n.signal,
                        cleanup: () => clearTimeout(r)
                    }
                }(e.timeoutMs), r = function(...e) {
                    const n = new AbortController,
                        t = e.filter((e => void 0 !== e)).concat(n.signal);
                    for (const e of t) {
                        if (e.aborted) {
                            r.apply(e);
                            break
                        }
                        e.addEventListener("abort", r)
                    }

                    function r() {
                        n.signal.aborted || n.abort(d(this));
                        for (const e of t) e.removeEventListener("abort", r)
                    }
                    return n
                }(e.signal, n);
                return [r.signal, function(e) {
                    const o = i.T.from(n.aborted ? d(n) : e);
                    return r.abort(o), t(), Promise.reject(o)
                }, function() {
                    t(), r.abort()
                }]
            }

            function v(e, n) {
                var t;
                return null !== (t = null == n ? void 0 : n.concat().reverse().reduce(((e, n) => n(e)), e)) && void 0 !== t ? t : e
            }

            function g(e, n, t) {
                const r = "string" == typeof n ? n : n.typeName,
                    o = "string" == typeof t ? t : t.name;
                return e.toString().replace(/\/?$/, `/${r}/${o}`)
            }
            const p = "Content-Type",
                w = "Content-Length",
                b = "Content-Encoding",
                S = "Accept-Encoding",
                I = "Connect-Timeout-Ms",
                C = "Connect-Protocol-Version",
                x = "User-Agent",
                E = "1",
                O = /^application\/(connect\+)?(?:(json)(?:; ?charset=utf-?8)?|(proto))$/i,
                T = "application/proto",
                j = "application/json",
                A = "application/connect+proto",
                U = "application/connect+json";

            function P(e, n, t, o) {
                const i = new Headers(null != o ? o : {});
                return void 0 !== t && i.set(I, `${t}`), i.set(p, e == r.I.Unary ? n ? T : j : n ? A : U), i.set(C, E), i.set(x, "connect-es/1.1.3"), i
            }
            var k = t(2457);
            const D = "application/";

            function _(e, n, t) {
                const o = function(e) {
                    const n = null == e ? void 0 : e.match(O);
                    if (n) return {
                        stream: !!n[1],
                        binary: !!n[3]
                    }
                }(t.get("Content-Type"));
                if (200 !== n) {
                    const s = new i.T(`HTTP ${n}`, function(e) {
                        switch (e) {
                            case 400:
                                return a.C.InvalidArgument;
                            case 401:
                                return a.C.Unauthenticated;
                            case 403:
                                return a.C.PermissionDenied;
                            case 404:
                                return a.C.Unimplemented;
                            case 408:
                                return a.C.DeadlineExceeded;
                            case 409:
                                return a.C.Aborted;
                            case 412:
                                return a.C.FailedPrecondition;
                            case 413:
                            case 431:
                                return a.C.ResourceExhausted;
                            case 415:
                                return a.C.Internal;
                            case 429:
                            case 502:
                            case 503:
                            case 504:
                                return a.C.Unavailable;
                            default:
                                return a.C.Unknown
                        }
                    }(n), t);
                    if (e == r.I.Unary && o && !o.binary) return {
                        isUnaryError: !0,
                        unaryError: s
                    };
                    throw s
                }
                return {
                    isUnaryError: !1
                }
            }
            var H = t(8102);

            function L(e, n, t) {
                if (n && new Headers(n).forEach(((e, n) => t.metadata.append(n, e))), "object" != typeof e || null == e || Array.isArray(e) || !("code" in e) || "string" != typeof e.code) throw t;
                const r = (0, H.X)(e.code);
                if (void 0 === r) throw t;
                const o = e.message;
                if (null != o && "string" != typeof o) throw t;
                const a = new i.T(null != o ? o : "", r, n);
                if ("details" in e && Array.isArray(e.details))
                    for (const n of e.details) {
                        if (null === n || "object" != typeof n || Array.isArray(n) || "string" != typeof n.type || "string" != typeof n.value || "debug" in n && "object" != typeof n.debug) throw t;
                        try {
                            a.details.push({
                                type: n.type,
                                value: k.K.dec(n.value),
                                debug: n.debug
                            })
                        } catch (e) {
                            throw t
                        }
                    }
                return a
            }

            function M(e) {
                const n = new Headers,
                    t = new Headers;
                return e.forEach(((e, r) => {
                    r.toLowerCase().startsWith("trailer-") ? t.set(r.substring(8), e) : n.set(r, e)
                })), [n, t]
            }
            const N = 2;

            function q(e) {
                const n = new i.T("invalid end stream", a.C.InvalidArgument);
                let t;
                try {
                    t = JSON.parse("string" == typeof e ? e : (new TextDecoder).decode(e))
                } catch (e) {
                    throw n
                }
                if ("object" != typeof t || null == t || Array.isArray(t)) throw n;
                const r = new Headers;
                if ("metadata" in t) {
                    if ("object" != typeof t.metadata || null == t.metadata || Array.isArray(t.metadata)) throw n;
                    for (const [e, o] of Object.entries(t.metadata)) {
                        if (!Array.isArray(o) || o.some((e => "string" != typeof e))) throw n;
                        for (const n of o) r.append(e, n)
                    }
                }
                return {
                    metadata: r,
                    error: "error" in t ? L(t.error, r, n) : void 0
                }
            }
            var $ = function(e) {
                    return this instanceof $ ? (this.v = e, this) : new $(e)
                },
                R = function(e, n, t) {
                    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
                    var r, o = t.apply(e, n || []),
                        i = [];
                    return r = {}, a("next"), a("throw"), a("return"), r[Symbol.asyncIterator] = function() {
                        return this
                    }, r;

                    function a(e) {
                        o[e] && (r[e] = function(n) {
                            return new Promise((function(t, r) {
                                i.push([e, n, t, r]) > 1 || s(e, n)
                            }))
                        })
                    }

                    function s(e, n) {
                        try {
                            (t = o[e](n)).value instanceof $ ? Promise.resolve(t.value.v).then(c, u) : l(i[0][2], t)
                        } catch (e) {
                            l(i[0][3], e)
                        }
                        var t
                    }

                    function c(e) {
                        s("next", e)
                    }

                    function u(e) {
                        s("throw", e)
                    }

                    function l(e, n) {
                        e(n), i.shift(), i.length && s(i[0][0], i[0][1])
                    }
                };

            function V(e) {
                var n;
                ! function() {
                    try {
                        new Headers
                    } catch (e) {
                        throw new Error("connect-web requires the fetch API. Are you running on an old version of Node.js? Node.js is not supported in Connect for Web - please stay tuned for Connect for Node.")
                    }
                }();
                const t = null !== (n = e.useBinaryFormat) && void 0 !== n && n;
                return {
                    async unary(n, i, a, u, l, d, f) {
                        var y;
                        const {
                            serialize: I,
                            parse: x
                        } = c(i, t, e.jsonOptions, e.binaryOptions);
                        return u = void 0 === u ? e.defaultTimeoutMs : u <= 0 ? void 0 : u, await
                        function(e) {
                            const n = v(e.next, e.interceptors),
                                [t, r, o] = m(e);
                            return n(Object.assign(Object.assign({}, e.req), {
                                message: h(e.req.method.I, e.req.message),
                                signal: t
                            })).then((e => (o(), e)), r)
                        }({
                            interceptors: e.interceptors,
                            signal: a,
                            timeoutMs: u,
                            req: {
                                stream: !1,
                                service: n,
                                method: i,
                                url: g(e.baseUrl, n, i),
                                init: {
                                    method: "POST",
                                    credentials: null !== (y = e.credentials) && void 0 !== y ? y : "same-origin",
                                    redirect: "error",
                                    mode: "cors"
                                },
                                header: P(i.kind, t, u, l),
                                contextValues: null != f ? f : o(),
                                message: d
                            },
                            next: async o => {
                                var a;
                                let c = null;
                                !0 === e.useHttpGet && i.idempotency === r.p.NoSideEffects ? o = function(e, n, t) {
                                    let r = `?connect=v${E}`;
                                    const o = e.header.get(p);
                                    0 === (null == o ? void 0 : o.indexOf(D)) && (r += "&encoding=" + encodeURIComponent(o.slice(D.length)));
                                    const i = e.header.get(b);
                                    null !== i && "identity" !== i && (r += "&compression=" + encodeURIComponent(i), t = !0), t && (r += "&base64=1"), r += "&message=" + function(e, n) {
                                        return n ? k.K.enc(e).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "") : encodeURIComponent((new TextDecoder).decode(e))
                                    }(n, t);
                                    const a = e.url + r,
                                        s = new Headers(e.header);
                                    return [C, p, w, b, S].forEach((e => s.delete(e))), Object.assign(Object.assign({}, e), {
                                        init: Object.assign(Object.assign({}, e.init), {
                                            method: "GET"
                                        }),
                                        url: a,
                                        header: s
                                    })
                                }(o, I(o.message), t) : c = I(o.message);
                                const u = null !== (a = e.fetch) && void 0 !== a ? a : globalThis.fetch,
                                    l = await u(o.url, Object.assign(Object.assign({}, o.init), {
                                        headers: o.header,
                                        signal: o.signal,
                                        body: c
                                    })),
                                    {
                                        isUnaryError: d,
                                        unaryError: f
                                    } = _(i.kind, l.status, l.headers);
                                if (d) throw L(await l.json(), function(...e) {
                                    const n = new Headers;
                                    for (const t of e) t.forEach(((e, t) => {
                                        n.append(t, e)
                                    }));
                                    return n
                                }(...M(l.headers)), f);
                                const [h, y] = M(l.headers);
                                return {
                                    stream: !1,
                                    service: n,
                                    method: i,
                                    header: h,
                                    message: t ? x(new Uint8Array(await l.arrayBuffer())) : i.O.fromJson(await l.json(), s(e.jsonOptions)),
                                    trailer: y
                                }
                            }
                        })
                    },
                    async stream(n, s, u, l, d, f, h) {
                        var p;
                        const {
                            serialize: w,
                            parse: b
                        } = c(s, t, e.jsonOptions, e.binaryOptions);

                        function S(e, n) {
                            return R(this, arguments, (function*() {
                                const t = function(e) {
                                    let n, t = new Uint8Array(0);

                                    function r(e) {
                                        const n = new Uint8Array(t.length + e.length);
                                        n.set(t), n.set(e, t.length), t = n
                                    }
                                    return new ReadableStream({
                                        start() {
                                            n = e.getReader()
                                        },
                                        async pull(e) {
                                            let o;
                                            for (;;) {
                                                if (void 0 === o && t.byteLength >= 5) {
                                                    let e = 0;
                                                    for (let n = 1; n < 5; n++) e = (e << 8) + t[n];
                                                    o = {
                                                        flags: t[0],
                                                        length: e
                                                    }
                                                }
                                                if (void 0 !== o && t.byteLength >= o.length + 5) break;
                                                const e = await n.read();
                                                if (e.done) break;
                                                r(e.value)
                                            }
                                            if (void 0 === o) return 0 == t.byteLength ? void e.close() : void e.error(new i.T("premature end of stream", a.C.DataLoss));
                                            const s = t.subarray(5, 5 + o.length);
                                            t = t.subarray(5 + o.length), e.enqueue({
                                                flags: o.flags,
                                                data: s
                                            })
                                        }
                                    })
                                }(e).getReader();
                                let r = !1;
                                for (;;) {
                                    const e = yield $(t.read());
                                    if (e.done) break;
                                    const {
                                        flags: o,
                                        data: i
                                    } = e.value;
                                    if ((o & N) !== N) yield yield $(b(i));
                                    else {
                                        r = !0;
                                        const e = q(i);
                                        if (e.error) throw e.error;
                                        e.metadata.forEach(((e, t) => n.set(t, e)))
                                    }
                                }
                                if (!r) throw "missing EndStreamResponse"
                            }))
                        }
                        async function I(e) {
                            if (s.kind != r.I.ServerStreaming) throw "The fetch API does not support streaming request bodies";
                            const n = await e[Symbol.asyncIterator]().next();
                            if (1 == n.done) throw "missing request message";
                            return function(e, n) {
                                const t = new Uint8Array(n.length + 5);
                                t.set(n, 5);
                                const r = new DataView(t.buffer, t.byteOffset, t.byteLength);
                                return r.setUint8(0, 0), r.setUint32(1, n.length), t
                            }(0, w(n.value))
                        }
                        return l = void 0 === l ? e.defaultTimeoutMs : l <= 0 ? void 0 : l, await
                        function(e) {
                            const n = v(e.next, e.interceptors),
                                [t, r, o] = m(e),
                                i = Object.assign(Object.assign({}, e.req), {
                                    message: y(e.req.method.I, e.req.message),
                                    signal: t
                                });
                            let a = !1;
                            return t.addEventListener("abort", (function() {
                                var n, t;
                                const r = e.req.message[Symbol.asyncIterator]();
                                a || null === (n = r.throw) || void 0 === n || n.call(r, this.reason).catch((() => {})), null === (t = r.return) || void 0 === t || t.call(r).catch((() => {}))
                            })), n(i).then((e => Object.assign(Object.assign({}, e), {
                                message: {
                                    [Symbol.asyncIterator]() {
                                        const n = e.message[Symbol.asyncIterator]();
                                        return {
                                            next: () => n.next().then((e => (1 == e.done && (a = !0, o()), e)), r)
                                        }
                                    }
                                }
                            })), r)
                        }({
                            interceptors: e.interceptors,
                            timeoutMs: l,
                            signal: u,
                            req: {
                                stream: !0,
                                service: n,
                                method: s,
                                url: g(e.baseUrl, n, s),
                                init: {
                                    method: "POST",
                                    credentials: null !== (p = e.credentials) && void 0 !== p ? p : "same-origin",
                                    redirect: "error",
                                    mode: "cors"
                                },
                                header: P(s.kind, t, l, d),
                                contextValues: null != h ? h : o(),
                                message: f
                            },
                            next: async n => {
                                var t;
                                const r = null !== (t = e.fetch) && void 0 !== t ? t : globalThis.fetch,
                                    o = await r(n.url, Object.assign(Object.assign({}, n.init), {
                                        headers: n.header,
                                        signal: n.signal,
                                        body: await I(n.message)
                                    }));
                                if (_(s.kind, o.status, o.headers), null === o.body) throw "missing response body";
                                const i = new Headers;
                                return Object.assign(Object.assign({}, n), {
                                    header: o.headers,
                                    trailer: i,
                                    message: S(o.body, i)
                                })
                            }
                        })
                    }
                }
            }
        },
        6629: (e, n, t) => {
            var r, o;
            t.d(n, {
                    I: () => r,
                    p: () => o
                }),
                function(e) {
                    e[e.Unary = 0] = "Unary", e[e.ServerStreaming = 1] = "ServerStreaming", e[e.ClientStreaming = 2] = "ClientStreaming", e[e.BiDiStreaming = 3] = "BiDiStreaming"
                }(r || (r = {})),
                function(e) {
                    e[e.NoSideEffects = 1] = "NoSideEffects", e[e.Idempotent = 2] = "Idempotent"
                }(o || (o = {}))
        }
    }
]);
//# sourceMappingURL=325.chunk.0bfbe8.js.map