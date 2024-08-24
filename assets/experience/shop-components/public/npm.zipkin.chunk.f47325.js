"use strict";
(self.webpackChunk_nike_shop_components = self.webpackChunk_nike_shop_components || []).push([
    [4165], {
        5065: (t, e, n) => {
            n.d(e, {
                Y1: () => bt,
                r5: () => Dt,
                sh: () => Nt
            });
            var r = n(1766),
                o = n(9316);

            function i(t) {
                return i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, i(t)
            }

            function a(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function c(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }

            function s(t, e, n) {
                return e && c(t.prototype, e), n && c(t, n), t
            }

            function u(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), e && d(t, e)
            }

            function p(t) {
                return p = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }, p(t)
            }

            function d(t, e) {
                return d = Object.setPrototypeOf || function(t, e) {
                    return t.__proto__ = e, t
                }, d(t, e)
            }

            function h(t, e) {
                return !e || "object" != typeof e && "function" != typeof e ? function(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }(t) : e
            }

            function l(t) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = p(t);
                    if (e) {
                        var o = p(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return h(this, n)
                }
            }
            var f = {
                    get type() {
                        return "None"
                    },
                    get present() {
                        return !1
                    },
                    map: function() {
                        return this
                    },
                    ifPresent: function() {},
                    flatMap: function() {
                        return this
                    },
                    getOrElse: function(t) {
                        return t instanceof Function ? t() : t
                    },
                    equals: function(t) {
                        return t === this
                    },
                    toString: function() {
                        return "None"
                    }
                },
                v = function() {
                    function t(e) {
                        a(this, t), this.value = e
                    }
                    return s(t, [{
                        key: "map",
                        value: function(e) {
                            return new t(e(this.value))
                        }
                    }, {
                        key: "ifPresent",
                        value: function(t) {
                            t(this.value)
                        }
                    }, {
                        key: "flatMap",
                        value: function(t) {
                            return t(this.value)
                        }
                    }, {
                        key: "getOrElse",
                        value: function() {
                            return this.value
                        }
                    }, {
                        key: "equals",
                        value: function(e) {
                            return e instanceof t && e.value === this.value
                        }
                    }, {
                        key: "toString",
                        value: function() {
                            return "Some(".concat(this.value, ")")
                        }
                    }, {
                        key: "type",
                        get: function() {
                            return "Some"
                        }
                    }, {
                        key: "present",
                        get: function() {
                            return !0
                        }
                    }]), t
                }();

            function m(t) {
                return t instanceof v || f.equals(t)
            }
            var y = {
                Some: v,
                None: f,
                isOptional: m,
                verifyIsOptional: function(t) {
                    if (null == t) throw new Error("Error: data is not Optional - it's null");
                    if (!m(t)) throw new Error("Error: data (".concat(t, ") is not an Option!"));
                    if (m(t.value)) throw new Error("Error: data (".concat(t.value, ") is wrapped in Option twice"))
                },
                verifyIsNotOptional: function(t) {
                    if (m(t)) throw new Error("Error: data (".concat(t, ") is an Option!"))
                },
                fromNullable: function(t) {
                    return null == t ? f : new v(t)
                }
            };

            function g(t, e) {
                for (var n in t)
                    for (var r = t[n].length - 1; r >= 0; r -= 1) {
                        var o = t[n][r],
                            i = "IPv4" === e || 0 === o.scopeid;
                        if (!o.internal && o.family === e && i) return o.address
                    }
                return "IPv4" === e ? "127.0.0.1" : "::1"
            }

            function S(t, e) {
                var n = {};
                for (var r in t) r === e && (n[r] = t[r]);
                return n
            }

            function I(t) {
                var e = r.networkInterfaces();
                return t && (e = S(e, t)), g(e, "IPv4")
            }
            I.ipv4 = I, I.ipv6 = function(t) {
                var e = r.networkInterfaces();
                return t && (e = S(e, t)), g(e, "IPv6")
            };
            var w = I,
                k = function() {
                    function t(e) {
                        a(this, t), this.addr = e
                    }
                    return s(t, [{
                        key: "ipv4",
                        value: function() {
                            var t = this.toInt();
                            if (t && 0 !== t) return this.addr
                        }
                    }, {
                        key: "toInt",
                        value: function() {
                            var t = this.addr.split(".");
                            return t[0] << 24 | t[1] << 16 | t[2] << 8 | t[3]
                        }
                    }, {
                        key: "toString",
                        value: function() {
                            return "InetAddress(".concat(this.addr, ")")
                        }
                    }]), t
                }();
            var _ = "object" === ("undefined" == typeof process ? "undefined" : i(process)) && "function" == typeof process.on ? new k(w.ipv4()) : new k("127.0.0.1");
            k.getLocalAddress = function() {
                return _
            };
            var E = k,
                N = function() {
                    function t() {
                        a(this, t)
                    }
                    return s(t, [{
                        key: "toString",
                        value: function() {
                            return "".concat(this.annotationType, "()")
                        }
                    }]), t
                }(),
                b = function(t) {
                    u(n, t);
                    var e = l(n);

                    function n() {
                        return a(this, n), e.apply(this, arguments)
                    }
                    return n
                }(N),
                A = function(t) {
                    u(n, t);
                    var e = l(n);

                    function n() {
                        return a(this, n), e.apply(this, arguments)
                    }
                    return n
                }(N),
                O = function(t) {
                    u(n, t);
                    var e = l(n);

                    function n() {
                        return a(this, n), e.apply(this, arguments)
                    }
                    return n
                }(N),
                C = function(t) {
                    u(n, t);
                    var e = l(n);

                    function n() {
                        return a(this, n), e.apply(this, arguments)
                    }
                    return n
                }(N),
                R = function(t) {
                    u(n, t);
                    var e = l(n);

                    function n() {
                        return a(this, n), e.apply(this, arguments)
                    }
                    return n
                }(N),
                x = function(t) {
                    u(n, t);
                    var e = l(n);

                    function n() {
                        return a(this, n), e.apply(this, arguments)
                    }
                    return n
                }(N),
                T = function(t) {
                    u(n, t);
                    var e = l(n);

                    function n() {
                        return a(this, n), e.apply(this, arguments)
                    }
                    return n
                }(N),
                P = function(t) {
                    u(n, t);
                    var e = l(n);

                    function n() {
                        return a(this, n), e.apply(this, arguments)
                    }
                    return n
                }(N);

            function B(t) {
                this.name = t
            }
            B.prototype.toString = function() {
                return 'LocalOperationStart("'.concat(this.name, '")')
            };
            var L = function(t) {
                u(n, t);
                var e = l(n);

                function n() {
                    return a(this, n), e.apply(this, arguments)
                }
                return n
            }(N);

            function M(t) {
                this.message = t
            }

            function j(t) {
                this.serviceName = t
            }

            function D(t) {
                this.name = t
            }

            function F(t) {
                var e = t.host,
                    n = t.port;
                this.host = e, this.port = n
            }

            function q(t) {
                var e = t.serviceName,
                    n = t.host,
                    r = t.port;
                this.serviceName = e, this.host = n || void 0, this.port = r || 0
            }

            function H(t) {
                var e = t.host,
                    n = t.port;
                this.host = e || E.getLocalAddress(), this.port = n || 0
            }

            function X(t) {
                var e = t.serviceName,
                    n = t.host,
                    r = t.port;
                this.serviceName = e, this.host = n, this.port = r
            }

            function J(t, e) {
                this.key = t, this.value = e
            }
            M.prototype.toString = function() {
                return 'Message("'.concat(this.message, '")')
            }, j.prototype.toString = function() {
                return 'ServiceName("'.concat(this.serviceName, '")')
            }, D.prototype.toString = function() {
                return 'Rpc("'.concat(this.name, '")')
            }, F.prototype.toString = function() {
                return 'ClientAddr(host="'.concat(this.host, '", port=').concat(this.port, ")")
            }, q.prototype.toString = function() {
                return 'ServerAddr(serviceName="'.concat(this.serviceName, '", host="').concat(this.host, '", port=').concat(this.port, ")")
            }, H.prototype.toString = function() {
                return 'LocalAddr(host="'.concat(this.host.toString(), '", port=').concat(this.port, ")")
            }, X.prototype.toString = function() {
                return 'MessageAddr(serviceName="'.concat(this.serviceName, '", host="').concat(this.host, '", port=').concat(this.port, ")")
            }, J.prototype.toString = function() {
                return "BinaryAnnotation(".concat(this.key, '="').concat(this.value, '")')
            };
            var U = {
                ClientSend: b,
                ClientRecv: A,
                ServerSend: O,
                ServerRecv: C,
                ProducerStart: R,
                ProducerStop: x,
                ConsumerStart: T,
                ConsumerStop: P,
                MessageAddr: X,
                Message: M,
                ServiceName: j,
                Rpc: D,
                ClientAddr: F,
                ServerAddr: q,
                LocalAddr: H,
                BinaryAnnotation: J,
                LocalOperationStart: B,
                LocalOperationStop: L
            };
            Object.keys(U).forEach((function(t) {
                U[t].prototype.annotationType = t
            }));
            var Z = U,
                K = z,
                Y = z;

            function z(t) {
                return !!t && ("object" == typeof t || "function" == typeof t) && "function" == typeof t.then
            }
            K.default = Y;
            var G = y.Some,
                Q = function() {
                    function t(e) {
                        a(this, t), this.evaluator = e
                    }
                    return s(t, [{
                        key: "shouldSample",
                        value: function(t) {
                            var e = this,
                                n = t.sampled.getOrElse((function() {
                                    return e.evaluator(t)
                                }));
                            return new G(n)
                        }
                    }, {
                        key: "toString",
                        value: function() {
                            return "Sampler(".concat(this.evaluator.toString(), ")")
                        }
                    }]), t
                }();

            function V(t) {
                return !1
            }

            function W(t) {
                return !0
            }
            V.toString = function() {
                return "never sample"
            }, W.toString = function() {
                return "always sample"
            };
            var $ = {
                    Sampler: Q,
                    CountingSampler: function(t) {
                        u(n, t);
                        var e = l(n);

                        function n() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
                            return a(this, n), e.call(this, function(t) {
                                if (t <= 0) return V;
                                if (t >= 1) return W;
                                var e = 0,
                                    n = parseInt(1 / t),
                                    r = function(t) {
                                        var r = 0 == (e %= n);
                                        return e += 1, r
                                    };
                                return r.toString = function() {
                                    return "countingSampler: sampleRate=".concat(t)
                                }, r
                            }(t < 1 ? t : 1))
                        }
                        return n
                    }(Q),
                    neverSample: V,
                    alwaysSample: W
                },
                tt = function() {
                    function t(e) {
                        var n = e.traceId,
                            r = e.timestamp,
                            o = e.annotation;
                        a(this, t), this.traceId = n, this.timestamp = r, this.annotation = o
                    }
                    return s(t, [{
                        key: "toString",
                        value: function() {
                            return "Record(traceId=".concat(this.traceId.toString(), ", annotation=").concat(this.annotation.toString(), ")")
                        }
                    }]), t
                }(),
                et = tt,
                nt = y.None,
                rt = y.verifyIsOptional,
                ot = y.verifyIsNotOptional,
                it = y.isOptional,
                at = new(0, y.Some)(!0),
                ct = function() {
                    function t(e) {
                        a(this, t);
                        var n = e.spanId,
                            r = e.traceId,
                            o = void 0 === r ? n : r,
                            i = e.parentId,
                            c = void 0 === i ? nt : i,
                            s = e.flags,
                            u = void 0 === s ? 0 : s,
                            p = e.debug,
                            d = void 0 === p ? 1 === u : p,
                            h = e.sampled,
                            l = void 0 === h ? nt : h,
                            f = e.shared,
                            v = void 0 !== f && f;
                        ot(n), rt(c), rt(l), it(o) ? this._traceId = o.getOrElse(n) : this._traceId = null == o ? n : o, this._parentId = c, this._spanId = n, this._sampled = d ? at : l, this._debug = d, this._shared = v
                    }
                    return s(t, [{
                        key: "isDebug",
                        value: function() {
                            return this._debug
                        }
                    }, {
                        key: "isShared",
                        value: function() {
                            return this._shared
                        }
                    }, {
                        key: "toString",
                        value: function() {
                            return "TraceId(spanId=".concat(this.spanId.toString()) + ", parentSpanId=".concat(this.parentSpanId.toString()) + ", traceId=".concat(this.traceId.toString(), ")")
                        }
                    }, {
                        key: "traceId",
                        get: function() {
                            return this._traceId
                        }
                    }, {
                        key: "parentSpanId",
                        get: function() {
                            return this._parentId
                        }
                    }, {
                        key: "parentId",
                        get: function() {
                            return this._parentId.getOrElse(this._spanId)
                        }
                    }, {
                        key: "spanId",
                        get: function() {
                            return this._spanId
                        }
                    }, {
                        key: "sampled",
                        get: function() {
                            return this._sampled
                        }
                    }, {
                        key: "flags",
                        get: function() {
                            return this._debug ? 1 : 0
                        }
                    }]), t
                }();
            var st = function() {
                    for (var t = "", e = 0; e < 16; e += 1) {
                        t += "0123456789abcdef" [Math.floor(16 * Math.random())]
                    }
                    return t
                },
                ut = "undefined" != typeof process && process.hrtime;
            var pt = {
                now: ut ? function(t, e) {
                    if (t && e) {
                        var n = process.hrtime(e);
                        return t + Math.floor(1e6 * n[0] + n[1] / 1e3)
                    }
                    return 1e3 * Date.now()
                } : function() {
                    return 1e3 * Date.now()
                },
                hrtime: ut ? function() {
                    return process.hrtime()
                } : function() {}
            };

            function dt(t) {
                var e = t.serviceName,
                    n = t.ipv4,
                    r = t.port;
                this.setServiceName(e), this.setIpv4(n), this.setPort(r)
            }

            function ht(t, e) {
                this.timestamp = t, this.value = e.toString()
            }

            function lt(t) {
                var e = this;
                this.traceId = t.traceId, t.parentSpanId.ifPresent((function(t) {
                    e.parentId = t
                })), this.id = t.spanId, this.name = void 0, this.kind = void 0, this.timestamp = void 0, this.duration = void 0, this.localEndpoint = void 0, this.remoteEndpoint = void 0, this.annotations = [], this.tags = {}, this.debug = t.isDebug(), this.shared = t.isShared()
            }
            dt.prototype.setServiceName = function(t) {
                this.serviceName = t ? t.toLocaleLowerCase() : void 0
            }, dt.prototype.setIpv4 = function(t) {
                this.ipv4 = t
            }, dt.prototype.setPort = function(t) {
                this.port = t || void 0
            }, dt.prototype.isEmpty = function() {
                return void 0 === this.serviceName && void 0 === this.ipv4 && void 0 === this.port
            }, ht.prototype.toString = function() {
                return 'Annotation(value="'.concat(this.value, '")')
            }, lt.prototype.setName = function(t) {
                this.name = t ? t.toLocaleLowerCase() : void 0
            }, lt.prototype.setKind = function(t) {
                this.kind = t
            }, lt.prototype.setTimestamp = function(t) {
                this.timestamp = t
            }, lt.prototype.setDuration = function(t) {
                void 0 !== t && (this.duration = Math.max(t, 1))
            }, lt.prototype.setLocalEndpoint = function(t) {
                t && !t.isEmpty() ? this.localEndpoint = t : this.localEndpoint = void 0
            }, lt.prototype.setRemoteEndpoint = function(t) {
                t && !t.isEmpty() ? this.remoteEndpoint = t : this.remoteEndpoint = void 0
            }, lt.prototype.addAnnotation = function(t, e) {
                this.annotations.push(new ht(t, e))
            }, lt.prototype.putTag = function(t, e) {
                this.tags[t] = e.toString()
            }, lt.prototype.setDebug = function(t) {
                this.debug = t
            }, lt.prototype.setShared = function(t) {
                this.shared = t
            }, lt.prototype.toString = function() {
                var t = this.annotations.map((function(t) {
                    return t.toString()
                })).join(", ");
                return "Span(id=".concat(this.traceId, ", annotations=[").concat(t, "])")
            };
            var ft = {
                    Endpoint: dt,
                    Span: lt
                },
                vt = y.None,
                mt = y.Some,
                yt = $.Sampler,
                gt = $.alwaysSample,
                St = pt.now,
                It = pt.hrtime,
                wt = ft.Endpoint;

            function kt(t) {
                throw new Error("Tracer: Missing required argument ".concat(t, "."))
            }

            function _t(t) {
                return null == t
            }
            var Et = function() {
                    function t(e) {
                        var n = e.ctxImpl,
                            r = void 0 === n ? kt("ctxImpl") : n,
                            o = e.recorder,
                            i = void 0 === o ? kt("recorder") : o,
                            c = e.sampler,
                            s = void 0 === c ? new yt(gt) : c,
                            u = e.traceId128Bit,
                            p = void 0 !== u && u,
                            d = e.supportsJoin,
                            h = void 0 === d || d,
                            l = e.localServiceName,
                            f = e.localEndpoint,
                            v = e.log,
                            m = void 0 === v ? console : v,
                            y = e.defaultTags;
                        a(this, t), this.log = m, this.recorder = i, this.sampler = s, this.traceId128Bit = p, this.supportsJoin = h, this._localEndpoint = f || new wt({
                            serviceName: l || "unknown"
                        }), this._ctxImpl = r, this._sentinelTraceId = this.createRootId(), this._startTimestamp = St(), this._startTick = It(), this.recorder.setDefaultTags && this.recorder.setDefaultTags(y)
                    }
                    return s(t, [{
                        key: "scoped",
                        value: function(t) {
                            return this._ctxImpl.scoped(t)
                        }
                    }, {
                        key: "letId",
                        value: function(t, e) {
                            return this._ctxImpl.letContext(t, e)
                        }
                    }, {
                        key: "createRootId",
                        value: function() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : vt,
                                e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                                n = st(),
                                r = this.traceId128Bit ? st() + n : n,
                                o = new ct({
                                    traceId: r,
                                    parentId: vt,
                                    spanId: n,
                                    sampled: t,
                                    flags: e ? 1 : 0
                                });
                            return t === vt && (o._sampled = this.sampler.shouldSample(o)), o
                        }
                    }, {
                        key: "createChildId",
                        value: function(t) {
                            if (_t(t) && (t = this._ctxImpl.getContext()), t === this._sentinelTraceId || _t(t)) return this.createRootId();
                            var e = new ct({
                                traceId: t.traceId,
                                parentId: new mt(t.spanId),
                                spanId: st(),
                                debug: t.isDebug(),
                                sampled: t.sampled
                            });
                            return !1 === e.sampled.present && (e._sampled = this.sampler.shouldSample(e)), e
                        }
                    }, {
                        key: "_explicitRecord",
                        value: function(t, e) {
                            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : St(this._startTimestamp, this._startTick);
                            this.recorder.record(new et({
                                traceId: t,
                                timestamp: n,
                                annotation: e
                            }))
                        }
                    }, {
                        key: "local",
                        value: function(t, e) {
                            var n = this;
                            if ("function" != typeof e) throw new Error("you must pass a function");
                            return this.scoped((function() {
                                var r, o = n.createChildId();
                                n.setId(o), n.recordServiceName(n._localEndpoint.serviceName), n.recordAnnotation(new Z.LocalOperationStart(t));
                                try {
                                    r = e()
                                } catch (t) {
                                    throw n.recordBinary("error", t.message ? t.message : t.toString()), n.recordAnnotation(new Z.LocalOperationStop), t
                                }
                                return K(r) ? o.sampled.getOrElse(!1) ? r.then((function(t) {
                                    return n._explicitRecord(o, new Z.LocalOperationStop), t
                                })).catch((function(t) {
                                    var e = t.message ? t.message : t.toString();
                                    throw n._explicitRecord(o, new Z.BinaryAnnotation("error", e)), n._explicitRecord(o, new Z.LocalOperationStop), t
                                })) : r : (n.recordAnnotation(new Z.LocalOperationStop), r)
                            }))
                        }
                    }, {
                        key: "join",
                        value: function(t) {
                            if (_t(t)) throw new Error("traceId is a required arg");
                            if (_t(t._spanId)) throw new Error("Must be valid TraceId instance");
                            return this.supportsJoin ? (t.sampled === vt ? t._sampled = this.sampler.shouldSample(t) : t._shared = !0, t) : this.createChildId(t)
                        }
                    }, {
                        key: "setId",
                        value: function(t) {
                            this._ctxImpl.setContext(t)
                        }
                    }, {
                        key: "recordAnnotation",
                        value: function(t, e) {
                            this.id.sampled.getOrElse(!1) && this._explicitRecord(this.id, t, e)
                        }
                    }, {
                        key: "recordMessage",
                        value: function(t) {
                            this.recordAnnotation(new Z.Message(t))
                        }
                    }, {
                        key: "recordServiceName",
                        value: function(t) {
                            this.recordAnnotation(new Z.ServiceName(t))
                        }
                    }, {
                        key: "recordRpc",
                        value: function(t) {
                            this.recordAnnotation(new Z.Rpc(t))
                        }
                    }, {
                        key: "recordClientAddr",
                        value: function(t) {
                            this.recordAnnotation(new Z.ClientAddr(t))
                        }
                    }, {
                        key: "recordServerAddr",
                        value: function(t) {
                            this.recordAnnotation(new Z.ServerAddr(t))
                        }
                    }, {
                        key: "recordLocalAddr",
                        value: function(t) {
                            this.recordAnnotation(new Z.LocalAddr(t))
                        }
                    }, {
                        key: "recordBinary",
                        value: function(t, e) {
                            this.recordAnnotation(new Z.BinaryAnnotation(t, e))
                        }
                    }, {
                        key: "writeIdToConsole",
                        value: function(t) {
                            this.log.info("".concat(t, ": ").concat(this.id.toString()))
                        }
                    }, {
                        key: "setTags",
                        value: function() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            for (var e in t) Object.prototype.hasOwnProperty.call(t, e) && this.recordBinary(e, t[e])
                        }
                    }, {
                        key: "id",
                        get: function() {
                            return this._ctxImpl.getContext() || this._sentinelTraceId
                        }
                    }, {
                        key: "localEndpoint",
                        get: function() {
                            return this._localEndpoint
                        }
                    }]), t
                }(),
                Nt = Et,
                bt = function() {
                    function t() {
                        a(this, t), this.currentCtx = null
                    }
                    return s(t, [{
                        key: "setContext",
                        value: function(t) {
                            this.currentCtx = t
                        }
                    }, {
                        key: "getContext",
                        value: function() {
                            return this.currentCtx
                        }
                    }, {
                        key: "scoped",
                        value: function(t) {
                            var e = this.getContext();
                            try {
                                return t()
                            } finally {
                                this.setContext(e)
                            }
                        }
                    }, {
                        key: "letContext",
                        value: function(t, e) {
                            var n = this;
                            return this.scoped((function() {
                                return n.setContext(t), e()
                            }))
                        }
                    }]), t
                }(),
                At = {
                    TraceId: "X-B3-TraceId",
                    SpanId: "X-B3-SpanId",
                    ParentSpanId: "X-B3-ParentSpanId",
                    Sampled: "X-B3-Sampled",
                    Flags: "X-B3-Flags"
                };
            Symbol("defaultTags");
            var Ot = function(t) {
                    var e = o.parse(t);
                    return {
                        host: e.hostname,
                        path: e.pathname
                    }
                },
                Ct = y.Some,
                Rt = y.None;

            function xt(t) {
                return "1" === t || "true" === t
            }

            function Tt(t) {
                try {
                    return new Ct(parseInt(t))
                } catch (t) {
                    return Rt
                }
            }

            function Pt(t) {
                throw new Error("HttpServerInstrumentation: Missing required argument ".concat(t, "."))
            }
            var Bt = function() {
                    function t(e) {
                        var n = e.tracer,
                            r = void 0 === n ? Pt("tracer") : n,
                            o = e.serviceName,
                            i = void 0 === o ? r.localEndpoint.serviceName : o,
                            c = e.host,
                            s = e.port,
                            u = void 0 === s ? Pt("port") : s;
                        a(this, t), this.tracer = r, this.serviceName = i, this.host = c && new E(c), this.port = u
                    }
                    return s(t, [{
                        key: "_createIdFromHeaders",
                        value: function(t) {
                            if (function(t) {
                                    return t(At.TraceId) !== Rt && t(At.SpanId) !== Rt
                                }(t)) {
                                var e = t(At.SpanId).map((function(e) {
                                    var n = t(At.TraceId),
                                        r = t(At.ParentSpanId),
                                        o = t(At.Sampled),
                                        i = t(At.Flags).flatMap(Tt).getOrElse(0);
                                    return new ct({
                                        traceId: n.getOrElse(),
                                        parentId: r,
                                        spanId: e,
                                        debug: 1 === i,
                                        sampled: o.map(xt)
                                    })
                                }));
                                return new Ct(this.tracer.join(e.getOrElse()))
                            }
                            if (t(At.Flags) !== Rt || t(At.Sampled) !== Rt) {
                                var n = t(At.Sampled) === Rt ? Rt : t(At.Sampled).map(xt),
                                    r = t(At.Flags).flatMap(Tt).getOrElse(0);
                                return new Ct(this.tracer.createRootId(n, 1 === r))
                            }
                            return new Ct(this.tracer.createRootId())
                        }
                    }, {
                        key: "spanNameFromRoute",
                        value: function(t, e, n) {
                            return n > 299 && n < 400 ? "".concat(t, " redirected") : 404 === n ? "".concat(t, " not_found") : e && "" !== e ? "".concat(t, " ").concat(e) : t
                        }
                    }, {
                        key: "recordRequest",
                        value: function(t, e, n) {
                            var r = this;
                            this._createIdFromHeaders(n).ifPresent((function(t) {
                                return r.tracer.setId(t)
                            }));
                            var o = this.tracer.id,
                                i = Ot(e).path;
                            return this.tracer.recordServiceName(this.serviceName), this.tracer.recordRpc(t.toUpperCase()), this.tracer.recordBinary("http.path", i), this.tracer.recordAnnotation(new Z.ServerRecv), this.tracer.recordAnnotation(new Z.LocalAddr({
                                host: this.host,
                                port: this.port
                            })), o
                        }
                    }, {
                        key: "recordResponse",
                        value: function(t, e, n) {
                            this.tracer.setId(t), this.tracer.recordBinary("http.status_code", e.toString()), n ? this.tracer.recordBinary("error", n.toString()) : (e < 200 || e > 399) && this.tracer.recordBinary("error", e.toString()), this.tracer.recordAnnotation(new Z.ServerSend)
                        }
                    }]), t
                }(),
                Lt = Bt;
            var Mt = {
                addZipkinHeaders: function(t, e) {
                    var n = function(t, e) {
                        var n = t.headers || {};
                        return n[At.TraceId] = e.traceId, n[At.SpanId] = e.spanId, e.parentSpanId.ifPresent((function(t) {
                            n[At.ParentSpanId] = t
                        })), e.sampled.ifPresent((function(t) {
                            n[At.Sampled] = t ? "1" : "0"
                        })), e.isDebug() && (n[At.Flags] = "1"), n
                    }(t, e);
                    return Object.assign({}, t, {
                        headers: n
                    })
                }
            };
            var jt = function() {
                    function t(e) {
                        var n = e.tracer,
                            r = void 0 === n ? function(t) {
                                throw new Error("HttpClientInstrumentation: Missing required argument ".concat(t, "."))
                            }("tracer") : n,
                            o = e.serviceName,
                            i = void 0 === o ? r.localEndpoint.serviceName : o,
                            c = e.remoteServiceName;
                        a(this, t), this.tracer = r, this.serviceName = i, this.remoteServiceName = c
                    }
                    return s(t, [{
                        key: "recordRequest",
                        value: function(t, e, n) {
                            this.tracer.setId(this.tracer.createChildId());
                            var r = this.tracer.id,
                                o = Ot(e).path;
                            return this.tracer.recordServiceName(this.serviceName), this.tracer.recordRpc(n.toUpperCase()), this.tracer.recordBinary("http.path", o), this.tracer.recordAnnotation(new Z.ClientSend), this.remoteServiceName && this.tracer.recordAnnotation(new Z.ServerAddr({
                                serviceName: this.remoteServiceName
                            })), Mt.addZipkinHeaders(t, r)
                        }
                    }, {
                        key: "recordResponse",
                        value: function(t, e) {
                            this.tracer.setId(t), this.tracer.recordBinary("http.status_code", e.toString()), (e < 200 || e > 399) && this.tracer.recordBinary("error", e.toString()), this.tracer.recordAnnotation(new Z.ClientRecv)
                        }
                    }, {
                        key: "recordError",
                        value: function(t, e) {
                            this.tracer.setId(t), this.tracer.recordBinary("error", e.toString()), this.tracer.recordAnnotation(new Z.ClientRecv)
                        }
                    }]), t
                }(),
                Dt = {
                    HttpServer: Lt,
                    HttpClient: jt
                }
        }
    }
]);
//# sourceMappingURL=npm.zipkin.chunk.f47325.js.map