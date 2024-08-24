"use strict";
(self.webpackChunk_nike_analytics_client = self.webpackChunk_nike_analytics_client || []).push([
    [623], {
        1797: (e, t, n) => {
            function r() {
                let e = 0,
                    t = 0;
                for (let n = 0; n < 28; n += 7) {
                    let r = this.buf[this.pos++];
                    if (e |= (127 & r) << n, !(128 & r)) return this.assertBounds(), [e, t]
                }
                let n = this.buf[this.pos++];
                if (e |= (15 & n) << 28, t = (112 & n) >> 4, !(128 & n)) return this.assertBounds(), [e, t];
                for (let n = 3; n <= 31; n += 7) {
                    let r = this.buf[this.pos++];
                    if (t |= (127 & r) << n, !(128 & r)) return this.assertBounds(), [e, t]
                }
                throw new Error("invalid varint")
            }

            function s(e, t, n) {
                for (let r = 0; r < 28; r += 7) {
                    const s = e >>> r,
                        i = !(s >>> 7 == 0 && 0 == t),
                        o = 255 & (i ? 128 | s : s);
                    if (n.push(o), !i) return
                }
                const r = e >>> 28 & 15 | (7 & t) << 4,
                    s = !!(t >> 3);
                if (n.push(255 & (s ? 128 | r : r)), s) {
                    for (let e = 3; e < 31; e += 7) {
                        const r = t >>> e,
                            s = !(r >>> 7 == 0),
                            i = 255 & (s ? 128 | r : r);
                        if (n.push(i), !s) return
                    }
                    n.push(t >>> 31 & 1)
                }
            }
            n.d(t, {
                Gn: () => h,
                Hc: () => c,
                LJ: () => o,
                _Q: () => a,
                cV: () => s,
                f7: () => d,
                ls: () => r
            });
            const i = 4294967296;

            function o(e) {
                const t = "-" === e[0];
                t && (e = e.slice(1));
                const n = 1e6;
                let r = 0,
                    s = 0;

                function o(t, o) {
                    const a = Number(e.slice(t, o));
                    s *= n, r = r * n + a, r >= i && (s += r / i | 0, r %= i)
                }
                return o(-24, -18), o(-18, -12), o(-12, -6), o(-6), t ? l(r, s) : u(r, s)
            }

            function a(e, t) {
                let n = u(e, t);
                const r = 2147483648 & n.hi;
                r && (n = l(n.lo, n.hi));
                const s = c(n.lo, n.hi);
                return r ? "-" + s : s
            }

            function c(e, t) {
                if (({
                        lo: e,
                        hi: t
                    } = function(e, t) {
                        return {
                            lo: e >>> 0,
                            hi: t >>> 0
                        }
                    }(e, t)), t <= 2097151) return String(i * t + e);
                const n = 16777215 & (e >>> 24 | t << 8),
                    r = t >> 16 & 65535;
                let s = (16777215 & e) + 6777216 * n + 6710656 * r,
                    o = n + 8147497 * r,
                    a = 2 * r;
                const c = 1e7;
                return s >= c && (o += Math.floor(s / c), s %= c), o >= c && (a += Math.floor(o / c), o %= c), a.toString() + f(o) + f(s)
            }

            function u(e, t) {
                return {
                    lo: 0 | e,
                    hi: 0 | t
                }
            }

            function l(e, t) {
                return t = ~t, e ? e = 1 + ~e : t += 1, u(e, t)
            }
            const f = e => {
                const t = String(e);
                return "0000000".slice(t.length) + t
            };

            function d(e, t) {
                if (e >= 0) {
                    for (; e > 127;) t.push(127 & e | 128), e >>>= 7;
                    t.push(e)
                } else {
                    for (let n = 0; n < 9; n++) t.push(127 & e | 128), e >>= 7;
                    t.push(1)
                }
            }

            function h() {
                let e = this.buf[this.pos++],
                    t = 127 & e;
                if (!(128 & e)) return this.assertBounds(), t;
                if (e = this.buf[this.pos++], t |= (127 & e) << 7, !(128 & e)) return this.assertBounds(), t;
                if (e = this.buf[this.pos++], t |= (127 & e) << 14, !(128 & e)) return this.assertBounds(), t;
                if (e = this.buf[this.pos++], t |= (127 & e) << 21, !(128 & e)) return this.assertBounds(), t;
                e = this.buf[this.pos++], t |= (15 & e) << 28;
                for (let t = 5; 128 & e && t < 10; t++) e = this.buf[this.pos++];
                if (128 & e) throw new Error("invalid varint");
                return this.assertBounds(), t >>> 0
            }
        },
        9012: (e, t, n) => {
            n.d(t, {
                Q: () => r
            });
            class r {
                equals(e) {
                    return this.getType().runtime.util.equals(this.getType(), this, e)
                }
                clone() {
                    return this.getType().runtime.util.clone(this)
                }
                fromBinary(e, t) {
                    const n = this.getType().runtime.bin,
                        r = n.makeReadOptions(t);
                    return n.readMessage(this, r.readerFactory(e), e.byteLength, r), this
                }
                fromJson(e, t) {
                    const n = this.getType(),
                        r = n.runtime.json,
                        s = r.makeReadOptions(t);
                    return r.readMessage(n, e, s, this), this
                }
                fromJsonString(e, t) {
                    let n;
                    try {
                        n = JSON.parse(e)
                    } catch (e) {
                        throw new Error(`cannot decode ${this.getType().typeName} from JSON: ${e instanceof Error?e.message:String(e)}`)
                    }
                    return this.fromJson(n, t)
                }
                toBinary(e) {
                    const t = this.getType().runtime.bin,
                        n = t.makeWriteOptions(e),
                        r = n.writerFactory();
                    return t.writeMessage(this, r, n), r.finish()
                }
                toJson(e) {
                    const t = this.getType().runtime.json,
                        n = t.makeWriteOptions(e);
                    return t.writeMessage(this, n)
                }
                toJsonString(e) {
                    var t;
                    const n = this.toJson(e);
                    return JSON.stringify(n, null, null !== (t = null == e ? void 0 : e.prettySpaces) && void 0 !== t ? t : 0)
                }
                toJSON() {
                    return this.toJson({
                        emitDefaultValues: !0
                    })
                }
                getType() {
                    return Object.getPrototypeOf(this).constructor
                }
            }
        },
        8097: (e, t, n) => {
            function r(e, t) {
                if (!e) throw new Error(t)
            }
            n.d(t, {
                bn: () => u,
                e1: () => l,
                vA: () => r,
                wO: () => f
            });
            const s = 34028234663852886e22,
                i = -34028234663852886e22,
                o = 4294967295,
                a = 2147483647,
                c = -2147483648;

            function u(e) {
                if ("number" != typeof e) throw new Error("invalid int 32: " + typeof e);
                if (!Number.isInteger(e) || e > a || e < c) throw new Error("invalid int 32: " + e)
            }

            function l(e) {
                if ("number" != typeof e) throw new Error("invalid uint 32: " + typeof e);
                if (!Number.isInteger(e) || e > o || e < 0) throw new Error("invalid uint 32: " + e)
            }

            function f(e) {
                if ("number" != typeof e) throw new Error("invalid float 32: " + typeof e);
                if (Number.isFinite(e) && (e > s || e < i)) throw new Error("invalid float 32: " + e)
            }
        },
        2457: (e, t, n) => {
            n.d(t, {
                K: () => i
            });
            let r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""),
                s = [];
            for (let e = 0; e < r.length; e++) s[r[e].charCodeAt(0)] = e;
            s["-".charCodeAt(0)] = r.indexOf("+"), s["_".charCodeAt(0)] = r.indexOf("/");
            const i = {
                dec(e) {
                    let t = 3 * e.length / 4;
                    "=" == e[e.length - 2] ? t -= 2 : "=" == e[e.length - 1] && (t -= 1);
                    let n, r = new Uint8Array(t),
                        i = 0,
                        o = 0,
                        a = 0;
                    for (let t = 0; t < e.length; t++) {
                        if (n = s[e.charCodeAt(t)], void 0 === n) switch (e[t]) {
                            case "=":
                                o = 0;
                            case "\n":
                            case "\r":
                            case "\t":
                            case " ":
                                continue;
                            default:
                                throw Error("invalid base64 string.")
                        }
                        switch (o) {
                            case 0:
                                a = n, o = 1;
                                break;
                            case 1:
                                r[i++] = a << 2 | (48 & n) >> 4, a = n, o = 2;
                                break;
                            case 2:
                                r[i++] = (15 & a) << 4 | (60 & n) >> 2, a = n, o = 3;
                                break;
                            case 3:
                                r[i++] = (3 & a) << 6 | n, o = 0
                        }
                    }
                    if (1 == o) throw Error("invalid base64 string.");
                    return r.subarray(0, i)
                },
                enc(e) {
                    let t, n = "",
                        s = 0,
                        i = 0;
                    for (let o = 0; o < e.length; o++) switch (t = e[o], s) {
                        case 0:
                            n += r[t >> 2], i = (3 & t) << 4, s = 1;
                            break;
                        case 1:
                            n += r[i | t >> 4], i = (15 & t) << 2, s = 2;
                            break;
                        case 2:
                            n += r[i | t >> 6], n += r[63 & t], s = 0
                    }
                    return s && (n += r[i], n += "=", 1 == s && (n += "=")), n
                }
            }
        },
        7671: (e, t, n) => {
            n.d(t, {
                M: () => i
            });
            var r = n(8097),
                s = n(1797);
            const i = function() {
                const e = new DataView(new ArrayBuffer(8));
                if ("function" == typeof BigInt && "function" == typeof e.getBigInt64 && "function" == typeof e.getBigUint64 && "function" == typeof e.setBigInt64 && "function" == typeof e.setBigUint64 && ("object" != typeof process || "object" != typeof process.env || "1" !== process.env.BUF_BIGINT_DISABLE)) {
                    const t = BigInt("-9223372036854775808"),
                        n = BigInt("9223372036854775807"),
                        r = BigInt("0"),
                        s = BigInt("18446744073709551615");
                    return {
                        zero: BigInt(0),
                        supported: !0,
                        parse(e) {
                            const r = "bigint" == typeof e ? e : BigInt(e);
                            if (r > n || r < t) throw new Error(`int64 invalid: ${e}`);
                            return r
                        },
                        uParse(e) {
                            const t = "bigint" == typeof e ? e : BigInt(e);
                            if (t > s || t < r) throw new Error(`uint64 invalid: ${e}`);
                            return t
                        },
                        enc(t) {
                            return e.setBigInt64(0, this.parse(t), !0), {
                                lo: e.getInt32(0, !0),
                                hi: e.getInt32(4, !0)
                            }
                        },
                        uEnc(t) {
                            return e.setBigInt64(0, this.uParse(t), !0), {
                                lo: e.getInt32(0, !0),
                                hi: e.getInt32(4, !0)
                            }
                        },
                        dec: (t, n) => (e.setInt32(0, t, !0), e.setInt32(4, n, !0), e.getBigInt64(0, !0)),
                        uDec: (t, n) => (e.setInt32(0, t, !0), e.setInt32(4, n, !0), e.getBigUint64(0, !0))
                    }
                }
                const t = e => (0, r.vA)(/^-?[0-9]+$/.test(e), `int64 invalid: ${e}`),
                    n = e => (0, r.vA)(/^[0-9]+$/.test(e), `uint64 invalid: ${e}`);
                return {
                    zero: "0",
                    supported: !1,
                    parse: e => ("string" != typeof e && (e = e.toString()), t(e), e),
                    uParse: e => ("string" != typeof e && (e = e.toString()), n(e), e),
                    enc: e => ("string" != typeof e && (e = e.toString()), t(e), (0, s.LJ)(e)),
                    uEnc: e => ("string" != typeof e && (e = e.toString()), n(e), (0, s.LJ)(e)),
                    dec: (e, t) => (0, s._Q)(e, t),
                    uDec: (e, t) => (0, s.Hc)(e, t)
                }
            }()
        },
        1623: (e, t, n) => {
            n.d(t, {
                C: () => de
            });
            var r = n(8097);
            const s = Symbol("@bufbuild/protobuf/enum-type");

            function i(e, t, n, r) {
                e[s] = o(t, n.map((t => ({
                    no: t.no,
                    name: t.name,
                    localName: e[t.no]
                }))))
            }

            function o(e, t, n) {
                const r = Object.create(null),
                    s = Object.create(null),
                    i = [];
                for (const e of t) {
                    const t = a(e);
                    i.push(t), r[e.name] = t, s[e.no] = t
                }
                return {
                    typeName: e,
                    values: i,
                    findName: e => r[e],
                    findNumber: e => s[e]
                }
            }

            function a(e) {
                return "localName" in e ? e : Object.assign(Object.assign({}, e), {
                    localName: e.name
                })
            }
            var c, u, l = n(9012),
                f = n(7671);

            function d(e, t, n) {
                if (t === n) return !0;
                if (e == c.BYTES) {
                    if (!(t instanceof Uint8Array && n instanceof Uint8Array)) return !1;
                    if (t.length !== n.length) return !1;
                    for (let e = 0; e < t.length; e++)
                        if (t[e] !== n[e]) return !1;
                    return !0
                }
                switch (e) {
                    case c.UINT64:
                    case c.FIXED64:
                    case c.INT64:
                    case c.SFIXED64:
                    case c.SINT64:
                        return t == n
                }
                return !1
            }

            function h(e, t) {
                switch (e) {
                    case c.BOOL:
                        return !1;
                    case c.UINT64:
                    case c.FIXED64:
                    case c.INT64:
                    case c.SFIXED64:
                    case c.SINT64:
                        return 0 == t ? f.M.zero : "0";
                    case c.DOUBLE:
                    case c.FLOAT:
                        return 0;
                    case c.BYTES:
                        return new Uint8Array(0);
                    case c.STRING:
                        return "";
                    default:
                        return 0
                }
            }

            function p(e, t) {
                switch (e) {
                    case c.BOOL:
                        return !1 === t;
                    case c.STRING:
                        return "" === t;
                    case c.BYTES:
                        return t instanceof Uint8Array && !t.byteLength;
                    default:
                        return 0 == t
                }
            }

            function m(e) {
                const t = e.field.localName,
                    n = Object.create(null);
                return n[t] = function(e) {
                    const t = e.field;
                    if (t.repeated) return [];
                    if (void 0 !== t.default) return t.default;
                    switch (t.kind) {
                        case "enum":
                            return t.T.values[0].no;
                        case "scalar":
                            return h(t.T, t.L);
                        case "message":
                            const e = t.T,
                                n = new e;
                            return e.fieldWrapper ? e.fieldWrapper.unwrapField(n) : n;
                        case "map":
                            throw "map fields are not allowed to be extensions"
                    }
                }(e), [n, () => n[t]]
            }! function(e) {
                e[e.DOUBLE = 1] = "DOUBLE", e[e.FLOAT = 2] = "FLOAT", e[e.INT64 = 3] = "INT64", e[e.UINT64 = 4] = "UINT64", e[e.INT32 = 5] = "INT32", e[e.FIXED64 = 6] = "FIXED64", e[e.FIXED32 = 7] = "FIXED32", e[e.BOOL = 8] = "BOOL", e[e.STRING = 9] = "STRING", e[e.BYTES = 12] = "BYTES", e[e.UINT32 = 13] = "UINT32", e[e.SFIXED32 = 15] = "SFIXED32", e[e.SFIXED64 = 16] = "SFIXED64", e[e.SINT32 = 17] = "SINT32", e[e.SINT64 = 18] = "SINT64"
            }(c || (c = {})),
            function(e) {
                e[e.BIGINT = 0] = "BIGINT", e[e.STRING = 1] = "STRING"
            }(u || (u = {}));
            var g = n(2457);

            function b(e, t, n) {
                N(t, e);
                const r = t.runtime.bin.makeReadOptions(n),
                    s = function(e, t) {
                        if (!t.repeated && ("enum" == t.kind || "scalar" == t.kind)) {
                            for (let n = e.length - 1; n >= 0; --n)
                                if (e[n].no == t.no) return [e[n]];
                            return []
                        }
                        return e.filter((e => e.no === t.no))
                    }(e.getType().runtime.bin.listUnknownFields(e), t.field),
                    [i, o] = m(t);
                for (const e of s) t.runtime.bin.readField(i, r.readerFactory(e.data), t.field, e.wireType, r);
                return o()
            }

            function y(e, t, n, r) {
                N(t, e);
                const s = t.runtime.bin.makeReadOptions(r),
                    i = t.runtime.bin.makeWriteOptions(r);
                if (w(e, t)) {
                    const n = e.getType().runtime.bin.listUnknownFields(e).filter((e => e.no != t.field.no));
                    e.getType().runtime.bin.discardUnknownFields(e);
                    for (const t of n) e.getType().runtime.bin.onUnknownField(e, t.no, t.wireType, t.data)
                }
                const o = i.writerFactory();
                let a = t.field;
                a.opt || a.repeated || "enum" != a.kind && "scalar" != a.kind || (a = Object.assign(Object.assign({}, t.field), {
                    opt: !0
                })), t.runtime.bin.writeField(a, n, o, i);
                const c = s.readerFactory(o.finish());
                for (; c.pos < c.len;) {
                    const [t, n] = c.tag(), r = c.skip(n);
                    e.getType().runtime.bin.onUnknownField(e, t, n, r)
                }
            }

            function w(e, t) {
                const n = e.getType();
                return t.extendee.typeName === n.typeName && !!n.runtime.bin.listUnknownFields(e).find((e => e.no == t.field.no))
            }

            function N(e, t) {
                (0, r.vA)(e.extendee.typeName == t.getType().typeName, `extension ${e.typeName} can only be applied to message ${e.extendee.typeName}`)
            }

            function k(e, t) {
                const n = e.localName;
                if (e.repeated) return t[n].length > 0;
                if (e.oneof) return t[e.oneof.localName].case === n;
                switch (e.kind) {
                    case "enum":
                    case "scalar":
                        return e.opt || e.req ? void 0 !== t[n] : "enum" == e.kind ? t[n] !== e.T.values[0].no : !p(e.T, t[n]);
                    case "message":
                        return void 0 !== t[n];
                    case "map":
                        return Object.keys(t[n]).length > 0
                }
            }

            function T(e, t) {
                const n = e.localName,
                    r = !e.opt && !e.req;
                if (e.repeated) t[n] = [];
                else if (e.oneof) t[e.oneof.localName] = {
                    case: void 0
                };
                else switch (e.kind) {
                    case "map":
                        t[n] = {};
                        break;
                    case "enum":
                        t[n] = r ? e.T.values[0].no : void 0;
                        break;
                    case "scalar":
                        t[n] = r ? h(e.T, e.L) : void 0;
                        break;
                    case "message":
                        t[n] = void 0
                }
            }

            function I(e, t) {
                if (null === e || "object" != typeof e) return !1;
                if (!Object.getOwnPropertyNames(l.Q.prototype).every((t => t in e && "function" == typeof e[t]))) return !1;
                const n = e.getType();
                return null !== n && "function" == typeof n && "typeName" in n && "string" == typeof n.typeName && (void 0 === t || n.typeName == t.typeName)
            }

            function v(e, t) {
                return I(t) || !e.fieldWrapper ? t : e.fieldWrapper.wrapField(t)
            }
            c.DOUBLE, c.FLOAT, c.INT64, c.UINT64, c.INT32, c.UINT32, c.BOOL, c.STRING, c.BYTES;
            const E = {
                    ignoreUnknownFields: !1
                },
                S = {
                    emitDefaultValues: !1,
                    enumAsInteger: !1,
                    useProtoFieldName: !1,
                    prettySpaces: 0
                };
            const O = Symbol(),
                F = Symbol();

            function B(e) {
                if (null === e) return "null";
                switch (typeof e) {
                    case "object":
                        return Array.isArray(e) ? "array" : "object";
                    case "string":
                        return e.length > 100 ? "string" : `"${e.split('"').join('\\"')}"`;
                    default:
                        return String(e)
                }
            }

            function A(e, t, n, s, i) {
                let o = n.localName;
                if (n.repeated) {
                    if ((0, r.vA)("map" != n.kind), null === t) return;
                    if (!Array.isArray(t)) throw new Error(`cannot decode field ${i.typeName}.${n.name} from JSON: ${B(t)}`);
                    const a = e[o];
                    for (const e of t) {
                        if (null === e) throw new Error(`cannot decode field ${i.typeName}.${n.name} from JSON: ${B(e)}`);
                        switch (n.kind) {
                            case "message":
                                a.push(n.T.fromJson(e, s));
                                break;
                            case "enum":
                                const t = j(n.T, e, s.ignoreUnknownFields, !0);
                                t !== F && a.push(t);
                                break;
                            case "scalar":
                                try {
                                    a.push(D(n.T, e, n.L, !0))
                                } catch (t) {
                                    let r = `cannot decode field ${i.typeName}.${n.name} from JSON: ${B(e)}`;
                                    throw t instanceof Error && t.message.length > 0 && (r += `: ${t.message}`), new Error(r)
                                }
                        }
                    }
                } else if ("map" == n.kind) {
                    if (null === t) return;
                    if ("object" != typeof t || Array.isArray(t)) throw new Error(`cannot decode field ${i.typeName}.${n.name} from JSON: ${B(t)}`);
                    const r = e[o];
                    for (const [e, o] of Object.entries(t)) {
                        if (null === o) throw new Error(`cannot decode field ${i.typeName}.${n.name} from JSON: map value null`);
                        let a;
                        try {
                            a = U(n.K, e)
                        } catch (e) {
                            let r = `cannot decode map key for field ${i.typeName}.${n.name} from JSON: ${B(t)}`;
                            throw e instanceof Error && e.message.length > 0 && (r += `: ${e.message}`), new Error(r)
                        }
                        switch (n.V.kind) {
                            case "message":
                                r[a] = n.V.T.fromJson(o, s);
                                break;
                            case "enum":
                                const e = j(n.V.T, o, s.ignoreUnknownFields, !0);
                                e !== F && (r[a] = e);
                                break;
                            case "scalar":
                                try {
                                    r[a] = D(n.V.T, o, u.BIGINT, !0)
                                } catch (e) {
                                    let r = `cannot decode map value for field ${i.typeName}.${n.name} from JSON: ${B(t)}`;
                                    throw e instanceof Error && e.message.length > 0 && (r += `: ${e.message}`), new Error(r)
                                }
                        }
                    }
                } else switch (n.oneof && (e = e[n.oneof.localName] = {
                    case: o
                }, o = "value"), n.kind) {
                    case "message":
                        const r = n.T;
                        if (null === t && "google.protobuf.Value" != r.typeName) return;
                        let a = e[o];
                        I(a) ? a.fromJson(t, s) : (e[o] = a = r.fromJson(t, s), r.fieldWrapper && !n.oneof && (e[o] = r.fieldWrapper.unwrapField(a)));
                        break;
                    case "enum":
                        const c = j(n.T, t, s.ignoreUnknownFields, !1);
                        switch (c) {
                            case O:
                                T(n, e);
                                break;
                            case F:
                                break;
                            default:
                                e[o] = c
                        }
                        break;
                    case "scalar":
                        try {
                            const r = D(n.T, t, n.L, !1);
                            r === O ? T(n, e) : e[o] = r
                        } catch (e) {
                            let r = `cannot decode field ${i.typeName}.${n.name} from JSON: ${B(t)}`;
                            throw e instanceof Error && e.message.length > 0 && (r += `: ${e.message}`), new Error(r)
                        }
                }
            }

            function U(e, t) {
                if (e === c.BOOL) switch (t) {
                    case "true":
                        t = !0;
                        break;
                    case "false":
                        t = !1
                }
                return D(e, t, u.BIGINT, !0).toString()
            }

            function D(e, t, n, s) {
                if (null === t) return s ? h(e, n) : O;
                switch (e) {
                    case c.DOUBLE:
                    case c.FLOAT:
                        if ("NaN" === t) return Number.NaN;
                        if ("Infinity" === t) return Number.POSITIVE_INFINITY;
                        if ("-Infinity" === t) return Number.NEGATIVE_INFINITY;
                        if ("" === t) break;
                        if ("string" == typeof t && t.trim().length !== t.length) break;
                        if ("string" != typeof t && "number" != typeof t) break;
                        const s = Number(t);
                        if (Number.isNaN(s)) break;
                        if (!Number.isFinite(s)) break;
                        return e == c.FLOAT && (0, r.wO)(s), s;
                    case c.INT32:
                    case c.FIXED32:
                    case c.SFIXED32:
                    case c.SINT32:
                    case c.UINT32:
                        let i;
                        if ("number" == typeof t ? i = t : "string" == typeof t && t.length > 0 && t.trim().length === t.length && (i = Number(t)), void 0 === i) break;
                        return e == c.UINT32 || e == c.FIXED32 ? (0, r.e1)(i) : (0, r.bn)(i), i;
                    case c.INT64:
                    case c.SFIXED64:
                    case c.SINT64:
                        if ("number" != typeof t && "string" != typeof t) break;
                        const o = f.M.parse(t);
                        return n ? o.toString() : o;
                    case c.FIXED64:
                    case c.UINT64:
                        if ("number" != typeof t && "string" != typeof t) break;
                        const a = f.M.uParse(t);
                        return n ? a.toString() : a;
                    case c.BOOL:
                        if ("boolean" != typeof t) break;
                        return t;
                    case c.STRING:
                        if ("string" != typeof t) break;
                        try {
                            encodeURIComponent(t)
                        } catch (e) {
                            throw new Error("invalid UTF8")
                        }
                        return t;
                    case c.BYTES:
                        if ("" === t) return new Uint8Array(0);
                        if ("string" != typeof t) break;
                        return g.K.dec(t)
                }
                throw new Error
            }

            function j(e, t, n, r) {
                if (null === t) return "google.protobuf.NullValue" == e.typeName ? 0 : r ? e.values[0].no : O;
                switch (typeof t) {
                    case "number":
                        if (Number.isInteger(t)) return t;
                        break;
                    case "string":
                        const r = e.findName(t);
                        if (void 0 !== r) return r.no;
                        if (n) return F
                }
                throw new Error(`cannot decode enum ${e.typeName} from JSON: ${B(t)}`)
            }

            function $(e) {
                return !(!e.repeated && "map" != e.kind && (e.oneof || "message" == e.kind || e.opt || e.req))
            }

            function L(e, t, n) {
                if ("map" == e.kind) {
                    (0, r.vA)("object" == typeof t && null != t);
                    const s = {},
                        i = Object.entries(t);
                    switch (e.V.kind) {
                        case "scalar":
                            for (const [t, n] of i) s[t.toString()] = J(e.V.T, n);
                            break;
                        case "message":
                            for (const [e, t] of i) s[e.toString()] = t.toJson(n);
                            break;
                        case "enum":
                            const t = e.V.T;
                            for (const [e, r] of i) s[e.toString()] = V(t, r, n.enumAsInteger)
                    }
                    return n.emitDefaultValues || i.length > 0 ? s : void 0
                }
                if (e.repeated) {
                    (0, r.vA)(Array.isArray(t));
                    const s = [];
                    switch (e.kind) {
                        case "scalar":
                            for (let n = 0; n < t.length; n++) s.push(J(e.T, t[n]));
                            break;
                        case "enum":
                            for (let r = 0; r < t.length; r++) s.push(V(e.T, t[r], n.enumAsInteger));
                            break;
                        case "message":
                            for (let e = 0; e < t.length; e++) s.push(t[e].toJson(n))
                    }
                    return n.emitDefaultValues || s.length > 0 ? s : void 0
                }
                switch (e.kind) {
                    case "scalar":
                        return J(e.T, t);
                    case "enum":
                        return V(e.T, t, n.enumAsInteger);
                    case "message":
                        return v(e.T, t).toJson(n)
                }
            }

            function V(e, t, n) {
                var s;
                if ((0, r.vA)("number" == typeof t), "google.protobuf.NullValue" == e.typeName) return null;
                if (n) return t;
                const i = e.findNumber(t);
                return null !== (s = null == i ? void 0 : i.name) && void 0 !== s ? s : t
            }

            function J(e, t) {
                switch (e) {
                    case c.INT32:
                    case c.SFIXED32:
                    case c.SINT32:
                    case c.FIXED32:
                    case c.UINT32:
                        return (0, r.vA)("number" == typeof t), t;
                    case c.FLOAT:
                    case c.DOUBLE:
                        return (0, r.vA)("number" == typeof t), Number.isNaN(t) ? "NaN" : t === Number.POSITIVE_INFINITY ? "Infinity" : t === Number.NEGATIVE_INFINITY ? "-Infinity" : t;
                    case c.STRING:
                        return (0, r.vA)("string" == typeof t), t;
                    case c.BOOL:
                        return (0, r.vA)("boolean" == typeof t), t;
                    case c.UINT64:
                    case c.FIXED64:
                    case c.INT64:
                    case c.SFIXED64:
                    case c.SINT64:
                        return (0, r.vA)("bigint" == typeof t || "string" == typeof t || "number" == typeof t), t.toString();
                    case c.BYTES:
                        return (0, r.vA)(t instanceof Uint8Array), g.K.enc(t)
                }
            }
            var x, G = n(1797);
            ! function(e) {
                e[e.Varint = 0] = "Varint", e[e.Bit64 = 1] = "Bit64", e[e.LengthDelimited = 2] = "LengthDelimited", e[e.StartGroup = 3] = "StartGroup", e[e.EndGroup = 4] = "EndGroup", e[e.Bit32 = 5] = "Bit32"
            }(x || (x = {}));
            class M {
                constructor(e) {
                    this.stack = [], this.textEncoder = null != e ? e : new TextEncoder, this.chunks = [], this.buf = []
                }
                finish() {
                    this.chunks.push(new Uint8Array(this.buf));
                    let e = 0;
                    for (let t = 0; t < this.chunks.length; t++) e += this.chunks[t].length;
                    let t = new Uint8Array(e),
                        n = 0;
                    for (let e = 0; e < this.chunks.length; e++) t.set(this.chunks[e], n), n += this.chunks[e].length;
                    return this.chunks = [], t
                }
                fork() {
                    return this.stack.push({
                        chunks: this.chunks,
                        buf: this.buf
                    }), this.chunks = [], this.buf = [], this
                }
                join() {
                    let e = this.finish(),
                        t = this.stack.pop();
                    if (!t) throw new Error("invalid state, fork stack empty");
                    return this.chunks = t.chunks, this.buf = t.buf, this.uint32(e.byteLength), this.raw(e)
                }
                tag(e, t) {
                    return this.uint32((e << 3 | t) >>> 0)
                }
                raw(e) {
                    return this.buf.length && (this.chunks.push(new Uint8Array(this.buf)), this.buf = []), this.chunks.push(e), this
                }
                uint32(e) {
                    for ((0, r.e1)(e); e > 127;) this.buf.push(127 & e | 128), e >>>= 7;
                    return this.buf.push(e), this
                }
                int32(e) {
                    return (0, r.bn)(e), (0, G.f7)(e, this.buf), this
                }
                bool(e) {
                    return this.buf.push(e ? 1 : 0), this
                }
                bytes(e) {
                    return this.uint32(e.byteLength), this.raw(e)
                }
                string(e) {
                    let t = this.textEncoder.encode(e);
                    return this.uint32(t.byteLength), this.raw(t)
                }
                float(e) {
                    (0, r.wO)(e);
                    let t = new Uint8Array(4);
                    return new DataView(t.buffer).setFloat32(0, e, !0), this.raw(t)
                }
                double(e) {
                    let t = new Uint8Array(8);
                    return new DataView(t.buffer).setFloat64(0, e, !0), this.raw(t)
                }
                fixed32(e) {
                    (0, r.e1)(e);
                    let t = new Uint8Array(4);
                    return new DataView(t.buffer).setUint32(0, e, !0), this.raw(t)
                }
                sfixed32(e) {
                    (0, r.bn)(e);
                    let t = new Uint8Array(4);
                    return new DataView(t.buffer).setInt32(0, e, !0), this.raw(t)
                }
                sint32(e) {
                    return (0, r.bn)(e), e = (e << 1 ^ e >> 31) >>> 0, (0, G.f7)(e, this.buf), this
                }
                sfixed64(e) {
                    let t = new Uint8Array(8),
                        n = new DataView(t.buffer),
                        r = f.M.enc(e);
                    return n.setInt32(0, r.lo, !0), n.setInt32(4, r.hi, !0), this.raw(t)
                }
                fixed64(e) {
                    let t = new Uint8Array(8),
                        n = new DataView(t.buffer),
                        r = f.M.uEnc(e);
                    return n.setInt32(0, r.lo, !0), n.setInt32(4, r.hi, !0), this.raw(t)
                }
                int64(e) {
                    let t = f.M.enc(e);
                    return (0, G.cV)(t.lo, t.hi, this.buf), this
                }
                sint64(e) {
                    let t = f.M.enc(e),
                        n = t.hi >> 31,
                        r = t.lo << 1 ^ n,
                        s = (t.hi << 1 | t.lo >>> 31) ^ n;
                    return (0, G.cV)(r, s, this.buf), this
                }
                uint64(e) {
                    let t = f.M.uEnc(e);
                    return (0, G.cV)(t.lo, t.hi, this.buf), this
                }
            }
            class X {
                constructor(e, t) {
                    this.varint64 = G.ls, this.uint32 = G.Gn, this.buf = e, this.len = e.length, this.pos = 0, this.view = new DataView(e.buffer, e.byteOffset, e.byteLength), this.textDecoder = null != t ? t : new TextDecoder
                }
                tag() {
                    let e = this.uint32(),
                        t = e >>> 3,
                        n = 7 & e;
                    if (t <= 0 || n < 0 || n > 5) throw new Error("illegal tag: field no " + t + " wire type " + n);
                    return [t, n]
                }
                skip(e) {
                    let t = this.pos;
                    switch (e) {
                        case x.Varint:
                            for (; 128 & this.buf[this.pos++];);
                            break;
                        case x.Bit64:
                            this.pos += 4;
                        case x.Bit32:
                            this.pos += 4;
                            break;
                        case x.LengthDelimited:
                            let t = this.uint32();
                            this.pos += t;
                            break;
                        case x.StartGroup:
                            let n;
                            for (;
                                (n = this.tag()[1]) !== x.EndGroup;) this.skip(n);
                            break;
                        default:
                            throw new Error("cant skip wire type " + e)
                    }
                    return this.assertBounds(), this.buf.subarray(t, this.pos)
                }
                assertBounds() {
                    if (this.pos > this.len) throw new RangeError("premature EOF")
                }
                int32() {
                    return 0 | this.uint32()
                }
                sint32() {
                    let e = this.uint32();
                    return e >>> 1 ^ -(1 & e)
                }
                int64() {
                    return f.M.dec(...this.varint64())
                }
                uint64() {
                    return f.M.uDec(...this.varint64())
                }
                sint64() {
                    let [e, t] = this.varint64(), n = -(1 & e);
                    return e = (e >>> 1 | (1 & t) << 31) ^ n, t = t >>> 1 ^ n, f.M.dec(e, t)
                }
                bool() {
                    let [e, t] = this.varint64();
                    return 0 !== e || 0 !== t
                }
                fixed32() {
                    return this.view.getUint32((this.pos += 4) - 4, !0)
                }
                sfixed32() {
                    return this.view.getInt32((this.pos += 4) - 4, !0)
                }
                fixed64() {
                    return f.M.uDec(this.sfixed32(), this.sfixed32())
                }
                sfixed64() {
                    return f.M.dec(this.sfixed32(), this.sfixed32())
                }
                float() {
                    return this.view.getFloat32((this.pos += 4) - 4, !0)
                }
                double() {
                    return this.view.getFloat64((this.pos += 8) - 8, !0)
                }
                bytes() {
                    let e = this.uint32(),
                        t = this.pos;
                    return this.pos += e, this.assertBounds(), this.buf.subarray(t, t + e)
                }
                string() {
                    return this.textDecoder.decode(this.bytes())
                }
            }
            const R = Symbol("@bufbuild/protobuf/unknown-fields"),
                _ = {
                    readUnknownFields: !0,
                    readerFactory: e => new X(e)
                },
                q = {
                    writeUnknownFields: !0,
                    writerFactory: () => new M
                };

            function Y(e, t, n, r, s) {
                let {
                    repeated: i,
                    localName: o
                } = n;
                switch (n.oneof && ((e = e[n.oneof.localName]).case != o && delete e.value, e.case = o, o = "value"), n.kind) {
                    case "scalar":
                    case "enum":
                        const a = "enum" == n.kind ? c.INT32 : n.T;
                        let l = C;
                        if ("scalar" == n.kind && n.L > 0 && (l = P), i) {
                            let n = e[o];
                            if (r == x.LengthDelimited && a != c.STRING && a != c.BYTES) {
                                let e = t.uint32() + t.pos;
                                for (; t.pos < e;) n.push(l(t, a))
                            } else n.push(l(t, a))
                        } else e[o] = l(t, a);
                        break;
                    case "message":
                        const f = n.T;
                        i ? e[o].push(W(t, new f, s, n)) : I(e[o]) ? W(t, e[o], s, n) : (e[o] = W(t, new f, s, n), !f.fieldWrapper || n.oneof || n.repeated || (e[o] = f.fieldWrapper.unwrapField(e[o])));
                        break;
                    case "map":
                        let [d, p] = function(e, t, n) {
                            const r = t.uint32(),
                                s = t.pos + r;
                            let i, o;
                            for (; t.pos < s;) {
                                const [r] = t.tag();
                                switch (r) {
                                    case 1:
                                        i = C(t, e.K);
                                        break;
                                    case 2:
                                        switch (e.V.kind) {
                                            case "scalar":
                                                o = C(t, e.V.T);
                                                break;
                                            case "enum":
                                                o = t.int32();
                                                break;
                                            case "message":
                                                o = W(t, new e.V.T, n, void 0)
                                        }
                                }
                            }
                            if (void 0 === i && (i = h(e.K, u.BIGINT)), "string" != typeof i && "number" != typeof i && (i = i.toString()), void 0 === o) switch (e.V.kind) {
                                case "scalar":
                                    o = h(e.V.T, u.BIGINT);
                                    break;
                                case "enum":
                                    o = e.V.T.values[0].no;
                                    break;
                                case "message":
                                    o = new e.V.T
                            }
                            return [i, o]
                        }(n, t, s);
                        e[o][d] = p
                }
            }

            function W(e, t, n, r) {
                const s = t.getType().runtime.bin,
                    i = null == r ? void 0 : r.delimited;
                return s.readMessage(t, e, i ? r.no : e.uint32(), n, i), t
            }

            function P(e, t) {
                const n = C(e, t);
                return "bigint" == typeof n ? n.toString() : n
            }

            function C(e, t) {
                switch (t) {
                    case c.STRING:
                        return e.string();
                    case c.BOOL:
                        return e.bool();
                    case c.DOUBLE:
                        return e.double();
                    case c.FLOAT:
                        return e.float();
                    case c.INT32:
                        return e.int32();
                    case c.INT64:
                        return e.int64();
                    case c.UINT64:
                        return e.uint64();
                    case c.FIXED64:
                        return e.fixed64();
                    case c.BYTES:
                        return e.bytes();
                    case c.FIXED32:
                        return e.fixed32();
                    case c.SFIXED32:
                        return e.sfixed32();
                    case c.SFIXED64:
                        return e.sfixed64();
                    case c.SINT64:
                        return e.sint64();
                    case c.UINT32:
                        return e.uint32();
                    case c.SINT32:
                        return e.sint32()
                }
            }

            function K(e, t, n, s) {
                (0, r.vA)(void 0 !== t);
                const i = e.repeated;
                switch (e.kind) {
                    case "scalar":
                    case "enum":
                        let o = "enum" == e.kind ? c.INT32 : e.T;
                        if (i)
                            if ((0, r.vA)(Array.isArray(t)), e.packed) ! function(e, t, n, r) {
                                if (!r.length) return;
                                e.tag(n, x.LengthDelimited).fork();
                                let [, s] = Z(t);
                                for (let t = 0; t < r.length; t++) e[s](r[t]);
                                e.join()
                            }(n, o, e.no, t);
                            else
                                for (const r of t) H(n, o, e.no, r);
                        else H(n, o, e.no, t);
                        break;
                    case "message":
                        if (i) {
                            (0, r.vA)(Array.isArray(t));
                            for (const r of t) Q(n, s, e, r)
                        } else Q(n, s, e, t);
                        break;
                    case "map":
                        (0, r.vA)("object" == typeof t && null != t);
                        for (const [r, i] of Object.entries(t)) z(n, s, e, r, i)
                }
            }

            function z(e, t, n, s, i) {
                e.tag(n.no, x.LengthDelimited), e.fork();
                let o = s;
                switch (n.K) {
                    case c.INT32:
                    case c.FIXED32:
                    case c.UINT32:
                    case c.SFIXED32:
                    case c.SINT32:
                        o = Number.parseInt(s);
                        break;
                    case c.BOOL:
                        (0, r.vA)("true" == s || "false" == s), o = "true" == s
                }
                switch (H(e, n.K, 1, o), n.V.kind) {
                    case "scalar":
                        H(e, n.V.T, 2, i);
                        break;
                    case "enum":
                        H(e, c.INT32, 2, i);
                        break;
                    case "message":
                        (0, r.vA)(void 0 !== i), e.tag(2, x.LengthDelimited).bytes(i.toBinary(t))
                }
                e.join()
            }

            function Q(e, t, n, r) {
                const s = v(n.T, r);
                n.delimited ? e.tag(n.no, x.StartGroup).raw(s.toBinary(t)).tag(n.no, x.EndGroup) : e.tag(n.no, x.LengthDelimited).bytes(s.toBinary(t))
            }

            function H(e, t, n, s) {
                (0, r.vA)(void 0 !== s);
                let [i, o] = Z(t);
                e.tag(n, i)[o](s)
            }

            function Z(e) {
                let t = x.Varint;
                switch (e) {
                    case c.BYTES:
                    case c.STRING:
                        t = x.LengthDelimited;
                        break;
                    case c.DOUBLE:
                    case c.FIXED64:
                    case c.SFIXED64:
                        t = x.Bit64;
                        break;
                    case c.FIXED32:
                    case c.SFIXED32:
                    case c.FLOAT:
                        t = x.Bit32
                }
                return [t, c[e].toLowerCase()]
            }

            function ee(e) {
                if (void 0 === e) return e;
                if (I(e)) return e.clone();
                if (e instanceof Uint8Array) {
                    const t = new Uint8Array(e.byteLength);
                    return t.set(e), t
                }
                return e
            }

            function te(e) {
                return e instanceof Uint8Array ? e : new Uint8Array(e)
            }
            class ne {
                constructor(e, t) {
                    this._fields = e, this._normalizer = t
                }
                findJsonName(e) {
                    if (!this.jsonNames) {
                        const e = {};
                        for (const t of this.list()) e[t.jsonName] = e[t.name] = t;
                        this.jsonNames = e
                    }
                    return this.jsonNames[e]
                }
                find(e) {
                    if (!this.numbers) {
                        const e = {};
                        for (const t of this.list()) e[t.no] = t;
                        this.numbers = e
                    }
                    return this.numbers[e]
                }
                list() {
                    return this.all || (this.all = this._normalizer(this._fields)), this.all
                }
                byNumber() {
                    return this.numbersAsc || (this.numbersAsc = this.list().concat().sort(((e, t) => e.no - t.no))), this.numbersAsc
                }
                byMember() {
                    if (!this.members) {
                        this.members = [];
                        const e = this.members;
                        let t;
                        for (const n of this.list()) n.oneof ? n.oneof !== t && (t = n.oneof, e.push(t)) : e.push(n)
                    }
                    return this.members
                }
            }

            function re(e, t) {
                const n = ie(e);
                return t ? n : le(ue(n))
            }
            const se = ie;

            function ie(e) {
                let t = !1;
                const n = [];
                for (let r = 0; r < e.length; r++) {
                    let s = e.charAt(r);
                    switch (s) {
                        case "_":
                            t = !0;
                            break;
                        case "0":
                        case "1":
                        case "2":
                        case "3":
                        case "4":
                        case "5":
                        case "6":
                        case "7":
                        case "8":
                        case "9":
                            n.push(s), t = !1;
                            break;
                        default:
                            t && (t = !1, s = s.toUpperCase()), n.push(s)
                    }
                }
                return n.join("")
            }
            new Set(["break", "case", "catch", "class", "const", "continue", "debugger", "default", "delete", "do", "else", "export", "extends", "false", "finally", "for", "function", "if", "import", "in", "instanceof", "new", "null", "return", "super", "switch", "this", "throw", "true", "try", "typeof", "var", "void", "while", "with", "yield", "enum", "implements", "interface", "let", "package", "private", "protected", "public", "static", "Object", "bigint", "number", "boolean", "string", "object", "globalThis", "Uint8Array", "Partial"]);
            const oe = new Set(["constructor", "toString", "toJSON", "valueOf"]),
                ae = new Set(["getType", "clone", "equals", "fromBinary", "fromJson", "fromJsonString", "toBinary", "toJson", "toJsonString", "toObject"]),
                ce = e => `${e}$`,
                ue = e => ae.has(e) ? ce(e) : e,
                le = e => oe.has(e) ? ce(e) : e;
            class fe {
                constructor(e) {
                    this.kind = "oneof", this.repeated = !1, this.packed = !1, this.opt = !1, this.req = !1, this.default = void 0, this.fields = [], this.name = e, this.localName = re(e, !1)
                }
                addField(e) {
                    (0, r.vA)(e.oneof === this, `field ${e.name} not one of ${this.name}`), this.fields.push(e)
                }
                findField(e) {
                    if (!this._lookup) {
                        this._lookup = Object.create(null);
                        for (let e = 0; e < this.fields.length; e++) this._lookup[this.fields[e].localName] = this.fields[e]
                    }
                    return this._lookup[e]
                }
            }
            const de = (he = e => new ne(e, (e => function(e) {
                var t, n, r, s, i, o;
                const a = [];
                let l;
                for (const f of "function" == typeof e ? e() : e) {
                    const e = f;
                    if (e.localName = re(f.name, void 0 !== f.oneof), e.jsonName = null !== (t = f.jsonName) && void 0 !== t ? t : se(f.name), e.repeated = null !== (n = f.repeated) && void 0 !== n && n, "scalar" == f.kind && (e.L = null !== (r = f.L) && void 0 !== r ? r : u.BIGINT), e.delimited = null !== (s = f.delimited) && void 0 !== s && s, e.req = null !== (i = f.req) && void 0 !== i && i, e.opt = null !== (o = f.opt) && void 0 !== o && o, void 0 === f.packed && (e.packed = "enum" == f.kind || "scalar" == f.kind && f.T != c.BYTES && f.T != c.STRING), void 0 !== f.oneof) {
                        const t = "string" == typeof f.oneof ? f.oneof : f.oneof.name;
                        l && l.name == t || (l = new fe(t)), e.oneof = l, l.addField(e)
                    }
                    a.push(e)
                }
                return a
            }(e))), pe = e => {
                for (const t of e.getType().fields.byMember()) {
                    if (t.opt) continue;
                    const n = t.localName,
                        r = e;
                    if (t.repeated) r[n] = [];
                    else switch (t.kind) {
                        case "oneof":
                            r[n] = {
                                case: void 0
                            };
                            break;
                        case "enum":
                            r[n] = 0;
                            break;
                        case "map":
                            r[n] = {};
                            break;
                        case "scalar":
                            r[n] = h(t.T, t.L)
                    }
                }
            }, {
                syntax: "proto3",
                json: {
                    makeReadOptions: function(e) {
                        return e ? Object.assign(Object.assign({}, E), e) : E
                    },
                    makeWriteOptions: function(e) {
                        return e ? Object.assign(Object.assign({}, S), e) : S
                    },
                    readMessage(e, t, n, r) {
                        if (null == t || Array.isArray(t) || "object" != typeof t) throw new Error(`cannot decode message ${e.typeName} from JSON: ${B(t)}`);
                        r = null != r ? r : new e;
                        const s = new Map,
                            i = n.typeRegistry;
                        for (const [o, a] of Object.entries(t)) {
                            const t = e.fields.findJsonName(o);
                            if (t) {
                                if (t.oneof) {
                                    if (null === a && "scalar" == t.kind) continue;
                                    const n = s.get(t.oneof);
                                    if (void 0 !== n) throw new Error(`cannot decode message ${e.typeName} from JSON: multiple keys for oneof "${t.oneof.name}" present: "${n}", "${o}"`);
                                    s.set(t.oneof, o)
                                }
                                A(r, a, t, n, e)
                            } else {
                                let t = !1;
                                if ((null == i ? void 0 : i.findExtension) && o.startsWith("[") && o.endsWith("]")) {
                                    const s = i.findExtension(o.substring(1, o.length - 1));
                                    if (s && s.extendee.typeName == e.typeName) {
                                        t = !0;
                                        const [e, i] = m(s);
                                        A(e, a, s.field, n, s), y(r, s, i(), n)
                                    }
                                }
                                if (!t && !n.ignoreUnknownFields) throw new Error(`cannot decode message ${e.typeName} from JSON: key "${o}" is unknown`)
                            }
                        }
                        return r
                    },
                    writeMessage(e, t) {
                        const n = e.getType(),
                            r = {};
                        let s;
                        try {
                            for (s of n.fields.byNumber()) {
                                if (!k(s, e)) {
                                    if (s.req) throw "required field not set";
                                    if (!t.emitDefaultValues) continue;
                                    if (!$(s)) continue
                                }
                                const n = L(s, s.oneof ? e[s.oneof.localName].value : e[s.localName], t);
                                void 0 !== n && (r[t.useProtoFieldName ? s.name : s.jsonName] = n)
                            }
                            const i = t.typeRegistry;
                            if (null == i ? void 0 : i.findExtensionFor)
                                for (const s of n.runtime.bin.listUnknownFields(e)) {
                                    const o = i.findExtensionFor(n.typeName, s.no);
                                    if (o && w(e, o)) {
                                        const n = b(e, o, t),
                                            s = L(o.field, n, t);
                                        void 0 !== s && (r[o.field.jsonName] = s)
                                    }
                                }
                        } catch (e) {
                            const t = s ? `cannot encode field ${n.typeName}.${s.name} to JSON` : `cannot encode message ${n.typeName} to JSON`,
                                r = e instanceof Error ? e.message : String(e);
                            throw new Error(t + (r.length > 0 ? `: ${r}` : ""))
                        }
                        return r
                    },
                    readScalar: (e, t, n) => D(e, t, null != n ? n : u.BIGINT, !0),
                    writeScalar(e, t, n) {
                        if (void 0 !== t) return n || p(e, t) ? J(e, t) : void 0
                    },
                    debug: B
                },
                bin: {
                    makeReadOptions: function(e) {
                        return e ? Object.assign(Object.assign({}, _), e) : _
                    },
                    makeWriteOptions: function(e) {
                        return e ? Object.assign(Object.assign({}, q), e) : q
                    },
                    listUnknownFields(e) {
                        var t;
                        return null !== (t = e[R]) && void 0 !== t ? t : []
                    },
                    discardUnknownFields(e) {
                        delete e[R]
                    },
                    writeUnknownFields(e, t) {
                        const n = e[R];
                        if (n)
                            for (const e of n) t.tag(e.no, e.wireType).raw(e.data)
                    },
                    onUnknownField(e, t, n, r) {
                        const s = e;
                        Array.isArray(s[R]) || (s[R] = []), s[R].push({
                            no: t,
                            wireType: n,
                            data: r
                        })
                    },
                    readMessage(e, t, n, r, s) {
                        const i = e.getType(),
                            o = s ? t.len : t.pos + n;
                        let a, c;
                        for (; t.pos < o && ([a, c] = t.tag(), c != x.EndGroup);) {
                            const n = i.fields.find(a);
                            if (n) Y(e, t, n, c, r);
                            else {
                                const n = t.skip(c);
                                r.readUnknownFields && this.onUnknownField(e, a, c, n)
                            }
                        }
                        if (s && (c != x.EndGroup || a !== n)) throw new Error("invalid end group tag")
                    },
                    readField: Y,
                    writeMessage(e, t, n) {
                        const r = e.getType();
                        for (const s of r.fields.byNumber())
                            if (k(s, e)) K(s, s.oneof ? e[s.oneof.localName].value : e[s.localName], t, n);
                            else if (s.req) throw new Error(`cannot encode field ${r.typeName}.${s.name} to binary: required field not set`);
                        return n.writeUnknownFields && this.writeUnknownFields(e, t), t
                    },
                    writeField(e, t, n, r) {
                        void 0 !== t && K(e, t, n, r)
                    }
                },
                util: Object.assign(Object.assign({}, {
                    setEnumType: i,
                    initPartial(e, t) {
                        if (void 0 === e) return;
                        const n = t.getType();
                        for (const r of n.fields.byMember()) {
                            const n = r.localName,
                                s = t,
                                i = e;
                            if (void 0 !== i[n]) switch (r.kind) {
                                case "oneof":
                                    const e = i[n].case;
                                    if (void 0 === e) continue;
                                    const t = r.findField(e);
                                    let o = i[n].value;
                                    t && "message" == t.kind && !I(o, t.T) ? o = new t.T(o) : t && "scalar" === t.kind && t.T === c.BYTES && (o = te(o)), s[n] = {
                                        case: e,
                                        value: o
                                    };
                                    break;
                                case "scalar":
                                case "enum":
                                    let a = i[n];
                                    r.T === c.BYTES && (a = r.repeated ? a.map(te) : te(a)), s[n] = a;
                                    break;
                                case "map":
                                    switch (r.V.kind) {
                                        case "scalar":
                                        case "enum":
                                            if (r.V.T === c.BYTES)
                                                for (const [e, t] of Object.entries(i[n])) s[n][e] = te(t);
                                            else Object.assign(s[n], i[n]);
                                            break;
                                        case "message":
                                            const e = r.V.T;
                                            for (const t of Object.keys(i[n])) {
                                                let r = i[n][t];
                                                e.fieldWrapper || (r = new e(r)), s[n][t] = r
                                            }
                                    }
                                    break;
                                case "message":
                                    const u = r.T;
                                    if (r.repeated) s[n] = i[n].map((e => I(e, u) ? e : new u(e)));
                                    else {
                                        const e = i[n];
                                        u.fieldWrapper ? "google.protobuf.BytesValue" === u.typeName ? s[n] = te(e) : s[n] = e : s[n] = I(e, u) ? e : new u(e)
                                    }
                            }
                        }
                    },
                    equals: (e, t, n) => t === n || !(!t || !n) && e.fields.byMember().every((e => {
                        const r = t[e.localName],
                            s = n[e.localName];
                        if (e.repeated) {
                            if (r.length !== s.length) return !1;
                            switch (e.kind) {
                                case "message":
                                    return r.every(((t, n) => e.T.equals(t, s[n])));
                                case "scalar":
                                    return r.every(((t, n) => d(e.T, t, s[n])));
                                case "enum":
                                    return r.every(((e, t) => d(c.INT32, e, s[t])))
                            }
                            throw new Error(`repeated cannot contain ${e.kind}`)
                        }
                        switch (e.kind) {
                            case "message":
                                return e.T.equals(r, s);
                            case "enum":
                                return d(c.INT32, r, s);
                            case "scalar":
                                return d(e.T, r, s);
                            case "oneof":
                                if (r.case !== s.case) return !1;
                                const t = e.findField(r.case);
                                if (void 0 === t) return !0;
                                switch (t.kind) {
                                    case "message":
                                        return t.T.equals(r.value, s.value);
                                    case "enum":
                                        return d(c.INT32, r.value, s.value);
                                    case "scalar":
                                        return d(t.T, r.value, s.value)
                                }
                                throw new Error(`oneof cannot contain ${t.kind}`);
                            case "map":
                                const n = Object.keys(r).concat(Object.keys(s));
                                switch (e.V.kind) {
                                    case "message":
                                        const t = e.V.T;
                                        return n.every((e => t.equals(r[e], s[e])));
                                    case "enum":
                                        return n.every((e => d(c.INT32, r[e], s[e])));
                                    case "scalar":
                                        const i = e.V.T;
                                        return n.every((e => d(i, r[e], s[e])))
                                }
                        }
                    })),
                    clone(e) {
                        const t = e.getType(),
                            n = new t,
                            r = n;
                        for (const n of t.fields.byMember()) {
                            const t = e[n.localName];
                            let s;
                            if (n.repeated) s = t.map(ee);
                            else if ("map" == n.kind) {
                                s = r[n.localName];
                                for (const [e, n] of Object.entries(t)) s[e] = ee(n)
                            } else s = "oneof" == n.kind ? n.findField(t.case) ? {
                                case: t.case,
                                value: ee(t.value)
                            } : {
                                case: void 0
                            } : ee(t);
                            r[n.localName] = s
                        }
                        for (const n of t.runtime.bin.listUnknownFields(e)) t.runtime.bin.onUnknownField(r, n.no, n.wireType, n.data);
                        return n
                    }
                }), {
                    newFieldList: he,
                    initFields: pe
                }),
                makeMessageType(e, t, n) {
                    return function(e, t, n, r) {
                        var s;
                        const i = null !== (s = null == r ? void 0 : r.localName) && void 0 !== s ? s : t.substring(t.lastIndexOf(".") + 1),
                            o = {
                                [i]: function(t) {
                                    e.util.initFields(this), e.util.initPartial(t, this)
                                }
                            }[i];
                        return Object.setPrototypeOf(o.prototype, new l.Q), Object.assign(o, {
                            runtime: e,
                            typeName: t,
                            fields: e.util.newFieldList(n),
                            fromBinary: (e, t) => (new o).fromBinary(e, t),
                            fromJson: (e, t) => (new o).fromJson(e, t),
                            fromJsonString: (e, t) => (new o).fromJsonString(e, t),
                            equals: (t, n) => e.util.equals(o, t, n)
                        }), o
                    }(this, e, t, n)
                },
                makeEnum: function(e, t, n) {
                    const r = {};
                    for (const e of t) {
                        const t = a(e);
                        r[t.localName] = t.no, r[t.no] = t.localName
                    }
                    return i(r, e, t), r
                },
                makeEnumType: o,
                getEnumType: function(e) {
                    const t = e[s];
                    return (0, r.vA)(t, "missing enum type on enum object"), t
                },
                makeExtension(e, t, n) {
                    return function(e, t, n, r) {
                        let s;
                        return {
                            typeName: t,
                            extendee: n,
                            get field() {
                                if (!s) {
                                    const n = "function" == typeof r ? r() : r;
                                    n.name = t.split(".").pop(), n.jsonName = `[${t}]`, s = e.util.newFieldList([n]).list()[0]
                                }
                                return s
                            },
                            runtime: e
                        }
                    }(this, e, t, n)
                }
            });
            var he, pe
        }
    }
]);
//# sourceMappingURL=623.chunk.f40e92.js.map