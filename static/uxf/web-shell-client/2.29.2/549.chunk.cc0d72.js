(self.webpackChunkwebShellClient = self.webpackChunkwebShellClient || []).push([
    [549], {
        549: function(e) {
            var t;
            t = () => (() => {
                "use strict";
                var e = {
                        d: (t, r) => {
                            for (var i in r) e.o(r, i) && !e.o(t, i) && Object.defineProperty(t, i, {
                                enumerable: !0,
                                get: r[i]
                            })
                        },
                        o: (e, t) => Object.prototype.hasOwnProperty.call(e, t)
                    },
                    t = {};
                e.d(t, {
                    default: () => Lt
                });
                let r, i, n = {
                    debug() {},
                    info() {},
                    warn() {},
                    error() {}
                };
                class s {
                    static get NONE() {
                        return 0
                    }
                    static get ERROR() {
                        return 1
                    }
                    static get WARN() {
                        return 2
                    }
                    static get INFO() {
                        return 3
                    }
                    static get DEBUG() {
                        return 4
                    }
                    static reset() {
                        i = 3, r = n
                    }
                    static get level() {
                        return i
                    }
                    static set level(e) {
                        if (!(0 <= e && e <= 4)) throw new Error("Invalid log level");
                        i = e
                    }
                    static get logger() {
                        return r
                    }
                    static set logger(e) {
                        if (!e.debug && e.info && (e.debug = e.info), !(e.debug && e.info && e.warn && e.error)) throw new Error("Invalid logger");
                        r = e
                    }
                    static debug(...e) {
                        i >= 4 && r.debug.apply(r, Array.from(e))
                    }
                    static info(...e) {
                        i >= 3 && r.info.apply(r, Array.from(e))
                    }
                    static warn(...e) {
                        i >= 2 && r.warn.apply(r, Array.from(e))
                    }
                    static error(...e) {
                        i >= 1 && r.error.apply(r, Array.from(e))
                    }
                }
                s.reset();
                class o {
                    getEpochTime() {
                        return Promise.resolve(Date.now() / 1e3 | 0)
                    }
                }
                const a = {
                    setInterval: function(e, t) {
                        return setInterval(e, t)
                    },
                    clearInterval: function(e) {
                        return clearInterval(e)
                    }
                };
                let u = !1,
                    h = null;
                class c {
                    static _testing() {
                        u = !0
                    }
                    static get location() {
                        if (!u) return location
                    }
                    static get localStorage() {
                        if (!u && "undefined" != typeof window) return localStorage
                    }
                    static get sessionStorage() {
                        if (!u && "undefined" != typeof window) return sessionStorage
                    }
                    static setXMLHttpRequest(e) {
                        h = e
                    }
                    static get XMLHttpRequest() {
                        if (!u && "undefined" != typeof window) return h || XMLHttpRequest
                    }
                    static get timer() {
                        if (!u) return a
                    }
                }
                class l {
                    constructor({
                        prefix: e = "oidc.",
                        store: t = c.localStorage
                    } = {}) {
                        this._store = t, this._prefix = e
                    }
                    set(e, t) {
                        return s.debug("WebStorageStateStore.set", e), e = this._prefix + e, this._store.setItem(e, t), Promise.resolve()
                    }
                    get(e) {
                        s.debug("WebStorageStateStore.get", e), e = this._prefix + e;
                        let t = this._store.getItem(e);
                        return Promise.resolve(t)
                    }
                    remove(e) {
                        s.debug("WebStorageStateStore.remove", e), e = this._prefix + e;
                        let t = this._store.getItem(e);
                        return this._store.removeItem(e), Promise.resolve(t)
                    }
                    getAllKeys() {
                        s.debug("WebStorageStateStore.getAllKeys");
                        var e = [];
                        for (let t = 0; t < this._store.length; t++) {
                            let r = this._store.key(t);
                            0 === r.indexOf(this._prefix) && e.push(r.substr(this._prefix.length))
                        }
                        return Promise.resolve(e)
                    }
                }
                class d {
                    constructor(e = null, t = c.XMLHttpRequest, r = null) {
                        e && Array.isArray(e) ? this._contentTypes = e.slice() : this._contentTypes = [], this._contentTypes.push("application/json"), r && this._contentTypes.push("application/jwt"), this._XMLHttpRequest = t, this._jwtHandler = r
                    }
                    getJson(e, t) {
                        if (!e) throw s.error("JsonService.getJson: No url passed"), new Error("url");
                        return s.debug("JsonService.getJson, url: ", e), new Promise(((r, i) => {
                            var n = new this._XMLHttpRequest;
                            n.open("GET", e);
                            var o = this._contentTypes,
                                a = this._jwtHandler;
                            n.onload = function() {
                                if (s.debug("JsonService.getJson: HTTP response received, status", n.status), 200 === n.status) {
                                    var t = n.getResponseHeader("Content-Type");
                                    if (t) {
                                        var u = o.find((e => {
                                            if (t.startsWith(e)) return !0
                                        }));
                                        if ("application/jwt" == u) return void a(n).then(r, i);
                                        if (u) try {
                                            return void r(JSON.parse(n.responseText))
                                        } catch (e) {
                                            return s.error("JsonService.getJson: Error parsing JSON response", e.message), void i(e)
                                        }
                                    }
                                    i(Error("Invalid response Content-Type: " + t + ", from URL: " + e))
                                } else i(Error(n.statusText + " (" + n.status + ")"))
                            }, n.onerror = function() {
                                s.error("JsonService.getJson: network error"), i(Error("Network Error"))
                            }, t && (s.debug("JsonService.getJson: token passed, setting Authorization header"), n.setRequestHeader("Authorization", "Bearer " + t)), n.send()
                        }))
                    }
                    postForm(e, t, r) {
                        if (!e) throw s.error("JsonService.postForm: No url passed"), new Error("url");
                        return s.debug("JsonService.postForm, url: ", e), new Promise(((i, n) => {
                            var o = new this._XMLHttpRequest;
                            o.open("POST", e);
                            var a = this._contentTypes;
                            o.onload = function() {
                                if (s.debug("JsonService.postForm: HTTP response received, status", o.status), 200 !== o.status) {
                                    if (400 === o.status && (r = o.getResponseHeader("Content-Type")) && a.find((e => {
                                            if (r.startsWith(e)) return !0
                                        }))) try {
                                        var t = JSON.parse(o.responseText);
                                        if (t && t.error) return s.error("JsonService.postForm: Error from server: ", t.error), void n(new Error(t.error))
                                    } catch (e) {
                                        return s.error("JsonService.postForm: Error parsing JSON response", e.message), void n(e)
                                    }
                                    n(Error(o.statusText + " (" + o.status + ")"))
                                } else {
                                    var r;
                                    if ((r = o.getResponseHeader("Content-Type")) && a.find((e => {
                                            if (r.startsWith(e)) return !0
                                        }))) try {
                                        return void i(JSON.parse(o.responseText))
                                    } catch (e) {
                                        return s.error("JsonService.postForm: Error parsing JSON response", e.message), void n(e)
                                    }
                                    n(Error("Invalid response Content-Type: " + r + ", from URL: " + e))
                                }
                            }, o.onerror = function() {
                                s.error("JsonService.postForm: network error"), n(Error("Network Error"))
                            };
                            let u = "";
                            for (let e in t) {
                                let r = t[e];
                                r && (u.length > 0 && (u += "&"), u += encodeURIComponent(e), u += "=", u += encodeURIComponent(r))
                            }
                            o.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), void 0 !== r && o.setRequestHeader("Authorization", "Basic " + btoa(r)), o.send(u)
                        }))
                    }
                }
                const g = ".well-known/openid-configuration";
                class p {
                    constructor(e, t = d) {
                        if (!e) throw s.error("MetadataService: No settings passed to MetadataService"), new Error("settings");
                        this._settings = e, this._jsonService = new t(["application/jwk-set+json"])
                    }
                    get metadataUrl() {
                        return this._metadataUrl || (this._settings.metadataUrl ? this._metadataUrl = this._settings.metadataUrl : (this._metadataUrl = this._settings.authority, this._metadataUrl && this._metadataUrl.indexOf(g) < 0 && ("/" !== this._metadataUrl[this._metadataUrl.length - 1] && (this._metadataUrl += "/"), this._metadataUrl += g))), this._metadataUrl
                    }
                    resetSigningKeys() {
                        this._settings = this._settings || {}, this._settings.signingKeys = void 0
                    }
                    getMetadata() {
                        return this._settings.metadata ? (s.debug("MetadataService.getMetadata: Returning metadata from settings"), Promise.resolve(this._settings.metadata)) : this.metadataUrl ? (s.debug("MetadataService.getMetadata: getting metadata from", this.metadataUrl), this._jsonService.getJson(this.metadataUrl).then((e => {
                            s.debug("MetadataService.getMetadata: json received");
                            var t = this._settings.metadataSeed || {};
                            return this._settings.metadata = Object.assign({}, t, e), this._settings.metadata
                        }))) : (s.error("MetadataService.getMetadata: No authority or metadataUrl configured on settings"), Promise.reject(new Error("No authority or metadataUrl configured on settings")))
                    }
                    getIssuer() {
                        return this._getMetadataProperty("issuer")
                    }
                    getAuthorizationEndpoint() {
                        return this._getMetadataProperty("authorization_endpoint")
                    }
                    getUserInfoEndpoint() {
                        return this._getMetadataProperty("userinfo_endpoint")
                    }
                    getTokenEndpoint(e = !0) {
                        return this._getMetadataProperty("token_endpoint", e)
                    }
                    getCheckSessionIframe() {
                        return this._getMetadataProperty("check_session_iframe", !0)
                    }
                    getEndSessionEndpoint() {
                        return this._getMetadataProperty("end_session_endpoint", !0)
                    }
                    getRevocationEndpoint() {
                        return this._getMetadataProperty("revocation_endpoint", !0)
                    }
                    getKeysEndpoint() {
                        return this._getMetadataProperty("jwks_uri", !0)
                    }
                    _getMetadataProperty(e, t = !1) {
                        return s.debug("MetadataService.getMetadataProperty for: " + e), this.getMetadata().then((r => {
                            if (s.debug("MetadataService.getMetadataProperty: metadata recieved"), void 0 === r[e]) {
                                if (!0 === t) return void s.warn("MetadataService.getMetadataProperty: Metadata does not contain optional property " + e);
                                throw s.error("MetadataService.getMetadataProperty: Metadata does not contain property " + e), new Error("Metadata does not contain property " + e)
                            }
                            return r[e]
                        }))
                    }
                    getSigningKeys() {
                        return this._settings.signingKeys ? (s.debug("MetadataService.getSigningKeys: Returning signingKeys from settings"), Promise.resolve(this._settings.signingKeys)) : this._getMetadataProperty("jwks_uri").then((e => (s.debug("MetadataService.getSigningKeys: jwks_uri received", e), this._jsonService.getJson(e).then((e => {
                            if (s.debug("MetadataService.getSigningKeys: key set received", e), !e.keys) throw s.error("MetadataService.getSigningKeys: Missing keys on keyset"), new Error("Missing keys on keyset");
                            return this._settings.signingKeys = e.keys, this._settings.signingKeys
                        })))))
                    }
                }
                var f, v, m, y, _, S, F, w, b, E, x, A = {
                        userAgent: !1
                    },
                    k = {},
                    P = P || (f = Math, m = (v = {}).lib = {}, y = m.Base = function() {
                        function e() {}
                        return {
                            extend: function(t) {
                                e.prototype = this;
                                var r = new e;
                                return t && r.mixIn(t), r.hasOwnProperty("init") || (r.init = function() {
                                    r.$super.init.apply(this, arguments)
                                }), r.init.prototype = r, r.$super = this, r
                            },
                            create: function() {
                                var e = this.extend();
                                return e.init.apply(e, arguments), e
                            },
                            init: function() {},
                            mixIn: function(e) {
                                for (var t in e) e.hasOwnProperty(t) && (this[t] = e[t]);
                                e.hasOwnProperty("toString") && (this.toString = e.toString)
                            },
                            clone: function() {
                                return this.init.prototype.extend(this)
                            }
                        }
                    }(), _ = m.WordArray = y.extend({
                        init: function(e, t) {
                            e = this.words = e || [], this.sigBytes = null != t ? t : 4 * e.length
                        },
                        toString: function(e) {
                            return (e || F).stringify(this)
                        },
                        concat: function(e) {
                            var t = this.words,
                                r = e.words,
                                i = this.sigBytes,
                                n = e.sigBytes;
                            if (this.clamp(), i % 4)
                                for (var s = 0; s < n; s++) {
                                    var o = r[s >>> 2] >>> 24 - s % 4 * 8 & 255;
                                    t[i + s >>> 2] |= o << 24 - (i + s) % 4 * 8
                                } else
                                    for (s = 0; s < n; s += 4) t[i + s >>> 2] = r[s >>> 2];
                            return this.sigBytes += n, this
                        },
                        clamp: function() {
                            var e = this.words,
                                t = this.sigBytes;
                            e[t >>> 2] &= 4294967295 << 32 - t % 4 * 8, e.length = f.ceil(t / 4)
                        },
                        clone: function() {
                            var e = y.clone.call(this);
                            return e.words = this.words.slice(0), e
                        },
                        random: function(e) {
                            for (var t = [], r = 0; r < e; r += 4) t.push(4294967296 * f.random() | 0);
                            return new _.init(t, e)
                        }
                    }), S = v.enc = {}, F = S.Hex = {
                        stringify: function(e) {
                            for (var t = e.words, r = e.sigBytes, i = [], n = 0; n < r; n++) {
                                var s = t[n >>> 2] >>> 24 - n % 4 * 8 & 255;
                                i.push((s >>> 4).toString(16)), i.push((15 & s).toString(16))
                            }
                            return i.join("")
                        },
                        parse: function(e) {
                            for (var t = e.length, r = [], i = 0; i < t; i += 2) r[i >>> 3] |= parseInt(e.substr(i, 2), 16) << 24 - i % 8 * 4;
                            return new _.init(r, t / 2)
                        }
                    }, w = S.Latin1 = {
                        stringify: function(e) {
                            for (var t = e.words, r = e.sigBytes, i = [], n = 0; n < r; n++) {
                                var s = t[n >>> 2] >>> 24 - n % 4 * 8 & 255;
                                i.push(String.fromCharCode(s))
                            }
                            return i.join("")
                        },
                        parse: function(e) {
                            for (var t = e.length, r = [], i = 0; i < t; i++) r[i >>> 2] |= (255 & e.charCodeAt(i)) << 24 - i % 4 * 8;
                            return new _.init(r, t)
                        }
                    }, b = S.Utf8 = {
                        stringify: function(e) {
                            try {
                                return decodeURIComponent(escape(w.stringify(e)))
                            } catch (e) {
                                throw new Error("Malformed UTF-8 data")
                            }
                        },
                        parse: function(e) {
                            return w.parse(unescape(encodeURIComponent(e)))
                        }
                    }, E = m.BufferedBlockAlgorithm = y.extend({
                        reset: function() {
                            this._data = new _.init, this._nDataBytes = 0
                        },
                        _append: function(e) {
                            "string" == typeof e && (e = b.parse(e)), this._data.concat(e), this._nDataBytes += e.sigBytes
                        },
                        _process: function(e) {
                            var t = this._data,
                                r = t.words,
                                i = t.sigBytes,
                                n = this.blockSize,
                                s = i / (4 * n),
                                o = (s = e ? f.ceil(s) : f.max((0 | s) - this._minBufferSize, 0)) * n,
                                a = f.min(4 * o, i);
                            if (o) {
                                for (var u = 0; u < o; u += n) this._doProcessBlock(r, u);
                                var h = r.splice(0, o);
                                t.sigBytes -= a
                            }
                            return new _.init(h, a)
                        },
                        clone: function() {
                            var e = y.clone.call(this);
                            return e._data = this._data.clone(), e
                        },
                        _minBufferSize: 0
                    }), m.Hasher = E.extend({
                        cfg: y.extend(),
                        init: function(e) {
                            this.cfg = this.cfg.extend(e), this.reset()
                        },
                        reset: function() {
                            E.reset.call(this), this._doReset()
                        },
                        update: function(e) {
                            return this._append(e), this._process(), this
                        },
                        finalize: function(e) {
                            return e && this._append(e), this._doFinalize()
                        },
                        blockSize: 16,
                        _createHelper: function(e) {
                            return function(t, r) {
                                return new e.init(r).finalize(t)
                            }
                        },
                        _createHmacHelper: function(e) {
                            return function(t, r) {
                                return new x.HMAC.init(e, r).finalize(t)
                            }
                        }
                    }), x = v.algo = {}, v);
                ! function(e) {
                    var t, r = (t = P).lib,
                        i = r.Base,
                        n = r.WordArray;
                    (t = t.x64 = {}).Word = i.extend({
                        init: function(e, t) {
                            this.high = e, this.low = t
                        }
                    }), t.WordArray = i.extend({
                        init: function(e, t) {
                            e = this.words = e || [], this.sigBytes = null != t ? t : 8 * e.length
                        },
                        toX32: function() {
                            for (var e = this.words, t = e.length, r = [], i = 0; i < t; i++) {
                                var s = e[i];
                                r.push(s.high), r.push(s.low)
                            }
                            return n.create(r, this.sigBytes)
                        },
                        clone: function() {
                            for (var e = i.clone.call(this), t = e.words = this.words.slice(0), r = t.length, n = 0; n < r; n++) t[n] = t[n].clone();
                            return e
                        }
                    })
                }(),
                function() {
                    var e = P,
                        t = e.lib.WordArray;
                    e.enc.Base64 = {
                        stringify: function(e) {
                            var t = e.words,
                                r = e.sigBytes,
                                i = this._map;
                            e.clamp(), e = [];
                            for (var n = 0; n < r; n += 3)
                                for (var s = (t[n >>> 2] >>> 24 - n % 4 * 8 & 255) << 16 | (t[n + 1 >>> 2] >>> 24 - (n + 1) % 4 * 8 & 255) << 8 | t[n + 2 >>> 2] >>> 24 - (n + 2) % 4 * 8 & 255, o = 0; 4 > o && n + .75 * o < r; o++) e.push(i.charAt(s >>> 6 * (3 - o) & 63));
                            if (t = i.charAt(64))
                                for (; e.length % 4;) e.push(t);
                            return e.join("")
                        },
                        parse: function(e) {
                            var r = e.length,
                                i = this._map;
                            (n = i.charAt(64)) && -1 != (n = e.indexOf(n)) && (r = n);
                            for (var n = [], s = 0, o = 0; o < r; o++)
                                if (o % 4) {
                                    var a = i.indexOf(e.charAt(o - 1)) << o % 4 * 2,
                                        u = i.indexOf(e.charAt(o)) >>> 6 - o % 4 * 2;
                                    n[s >>> 2] |= (a | u) << 24 - s % 4 * 8, s++
                                }
                            return t.create(n, s)
                        },
                        _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
                    }
                }(),
                function(e) {
                    for (var t = P, r = (n = t.lib).WordArray, i = n.Hasher, n = t.algo, s = [], o = [], a = function(e) {
                            return 4294967296 * (e - (0 | e)) | 0
                        }, u = 2, h = 0; 64 > h;) {
                        var c;
                        e: {
                            c = u;
                            for (var l = e.sqrt(c), d = 2; d <= l; d++)
                                if (!(c % d)) {
                                    c = !1;
                                    break e
                                }
                            c = !0
                        }
                        c && (8 > h && (s[h] = a(e.pow(u, .5))), o[h] = a(e.pow(u, 1 / 3)), h++), u++
                    }
                    var g = [];
                    n = n.SHA256 = i.extend({
                        _doReset: function() {
                            this._hash = new r.init(s.slice(0))
                        },
                        _doProcessBlock: function(e, t) {
                            for (var r = this._hash.words, i = r[0], n = r[1], s = r[2], a = r[3], u = r[4], h = r[5], c = r[6], l = r[7], d = 0; 64 > d; d++) {
                                if (16 > d) g[d] = 0 | e[t + d];
                                else {
                                    var p = g[d - 15],
                                        f = g[d - 2];
                                    g[d] = ((p << 25 | p >>> 7) ^ (p << 14 | p >>> 18) ^ p >>> 3) + g[d - 7] + ((f << 15 | f >>> 17) ^ (f << 13 | f >>> 19) ^ f >>> 10) + g[d - 16]
                                }
                                p = l + ((u << 26 | u >>> 6) ^ (u << 21 | u >>> 11) ^ (u << 7 | u >>> 25)) + (u & h ^ ~u & c) + o[d] + g[d], f = ((i << 30 | i >>> 2) ^ (i << 19 | i >>> 13) ^ (i << 10 | i >>> 22)) + (i & n ^ i & s ^ n & s), l = c, c = h, h = u, u = a + p | 0, a = s, s = n, n = i, i = p + f | 0
                            }
                            r[0] = r[0] + i | 0, r[1] = r[1] + n | 0, r[2] = r[2] + s | 0, r[3] = r[3] + a | 0, r[4] = r[4] + u | 0, r[5] = r[5] + h | 0, r[6] = r[6] + c | 0, r[7] = r[7] + l | 0
                        },
                        _doFinalize: function() {
                            var t = this._data,
                                r = t.words,
                                i = 8 * this._nDataBytes,
                                n = 8 * t.sigBytes;
                            return r[n >>> 5] |= 128 << 24 - n % 32, r[14 + (n + 64 >>> 9 << 4)] = e.floor(i / 4294967296), r[15 + (n + 64 >>> 9 << 4)] = i, t.sigBytes = 4 * r.length, this._process(), this._hash
                        },
                        clone: function() {
                            var e = i.clone.call(this);
                            return e._hash = this._hash.clone(), e
                        }
                    }), t.SHA256 = i._createHelper(n), t.HmacSHA256 = i._createHmacHelper(n)
                }(Math),
                function() {
                    function e() {
                        return i.create.apply(i, arguments)
                    }
                    for (var t = P, r = t.lib.Hasher, i = (s = t.x64).Word, n = s.WordArray, s = t.algo, o = [e(1116352408, 3609767458), e(1899447441, 602891725), e(3049323471, 3964484399), e(3921009573, 2173295548), e(961987163, 4081628472), e(1508970993, 3053834265), e(2453635748, 2937671579), e(2870763221, 3664609560), e(3624381080, 2734883394), e(310598401, 1164996542), e(607225278, 1323610764), e(1426881987, 3590304994), e(1925078388, 4068182383), e(2162078206, 991336113), e(2614888103, 633803317), e(3248222580, 3479774868), e(3835390401, 2666613458), e(4022224774, 944711139), e(264347078, 2341262773), e(604807628, 2007800933), e(770255983, 1495990901), e(1249150122, 1856431235), e(1555081692, 3175218132), e(1996064986, 2198950837), e(2554220882, 3999719339), e(2821834349, 766784016), e(2952996808, 2566594879), e(3210313671, 3203337956), e(3336571891, 1034457026), e(3584528711, 2466948901), e(113926993, 3758326383), e(338241895, 168717936), e(666307205, 1188179964), e(773529912, 1546045734), e(1294757372, 1522805485), e(1396182291, 2643833823), e(1695183700, 2343527390), e(1986661051, 1014477480), e(2177026350, 1206759142), e(2456956037, 344077627), e(2730485921, 1290863460), e(2820302411, 3158454273), e(3259730800, 3505952657), e(3345764771, 106217008), e(3516065817, 3606008344), e(3600352804, 1432725776), e(4094571909, 1467031594), e(275423344, 851169720), e(430227734, 3100823752), e(506948616, 1363258195), e(659060556, 3750685593), e(883997877, 3785050280), e(958139571, 3318307427), e(1322822218, 3812723403), e(1537002063, 2003034995), e(1747873779, 3602036899), e(1955562222, 1575990012), e(2024104815, 1125592928), e(2227730452, 2716904306), e(2361852424, 442776044), e(2428436474, 593698344), e(2756734187, 3733110249), e(3204031479, 2999351573), e(3329325298, 3815920427), e(3391569614, 3928383900), e(3515267271, 566280711), e(3940187606, 3454069534), e(4118630271, 4000239992), e(116418474, 1914138554), e(174292421, 2731055270), e(289380356, 3203993006), e(460393269, 320620315), e(685471733, 587496836), e(852142971, 1086792851), e(1017036298, 365543100), e(1126000580, 2618297676), e(1288033470, 3409855158), e(1501505948, 4234509866), e(1607167915, 987167468), e(1816402316, 1246189591)], a = [], u = 0; 80 > u; u++) a[u] = e();
                    s = s.SHA512 = r.extend({
                        _doReset: function() {
                            this._hash = new n.init([new i.init(1779033703, 4089235720), new i.init(3144134277, 2227873595), new i.init(1013904242, 4271175723), new i.init(2773480762, 1595750129), new i.init(1359893119, 2917565137), new i.init(2600822924, 725511199), new i.init(528734635, 4215389547), new i.init(1541459225, 327033209)])
                        },
                        _doProcessBlock: function(e, t) {
                            for (var r = (l = this._hash.words)[0], i = l[1], n = l[2], s = l[3], u = l[4], h = l[5], c = l[6], l = l[7], d = r.high, g = r.low, p = i.high, f = i.low, v = n.high, m = n.low, y = s.high, _ = s.low, S = u.high, F = u.low, w = h.high, b = h.low, E = c.high, x = c.low, A = l.high, k = l.low, P = d, C = g, T = p, I = f, R = v, D = m, N = y, B = _, H = S, U = F, O = w, j = b, M = E, V = x, K = A, q = k, L = 0; 80 > L; L++) {
                                var J = a[L];
                                if (16 > L) var W = J.high = 0 | e[t + 2 * L],
                                    z = J.low = 0 | e[t + 2 * L + 1];
                                else {
                                    W = ((z = (W = a[L - 15]).high) >>> 1 | (G = W.low) << 31) ^ (z >>> 8 | G << 24) ^ z >>> 7;
                                    var G = (G >>> 1 | z << 31) ^ (G >>> 8 | z << 24) ^ (G >>> 7 | z << 25),
                                        Y = ((z = (Y = a[L - 2]).high) >>> 19 | (X = Y.low) << 13) ^ (z << 3 | X >>> 29) ^ z >>> 6,
                                        X = (X >>> 19 | z << 13) ^ (X << 3 | z >>> 29) ^ (X >>> 6 | z << 26),
                                        Q = (z = a[L - 7]).high,
                                        $ = (Z = a[L - 16]).high,
                                        Z = Z.low;
                                    W = (W = (W = W + Q + ((z = G + z.low) >>> 0 < G >>> 0 ? 1 : 0)) + Y + ((z += X) >>> 0 < X >>> 0 ? 1 : 0)) + $ + ((z += Z) >>> 0 < Z >>> 0 ? 1 : 0), J.high = W, J.low = z
                                }
                                Q = H & O ^ ~H & M, Z = U & j ^ ~U & V, J = P & T ^ P & R ^ T & R;
                                var ee = C & I ^ C & D ^ I & D,
                                    te = (G = (P >>> 28 | C << 4) ^ (P << 30 | C >>> 2) ^ (P << 25 | C >>> 7), Y = (C >>> 28 | P << 4) ^ (C << 30 | P >>> 2) ^ (C << 25 | P >>> 7), (X = o[L]).high),
                                    re = X.low;
                                $ = K + ((H >>> 14 | U << 18) ^ (H >>> 18 | U << 14) ^ (H << 23 | U >>> 9)) + ((X = q + ((U >>> 14 | H << 18) ^ (U >>> 18 | H << 14) ^ (U << 23 | H >>> 9))) >>> 0 < q >>> 0 ? 1 : 0), K = M, q = V, M = O, V = j, O = H, j = U, H = N + ($ = ($ = ($ = $ + Q + ((X += Z) >>> 0 < Z >>> 0 ? 1 : 0)) + te + ((X += re) >>> 0 < re >>> 0 ? 1 : 0)) + W + ((X += z) >>> 0 < z >>> 0 ? 1 : 0)) + ((U = B + X | 0) >>> 0 < B >>> 0 ? 1 : 0) | 0, N = R, B = D, R = T, D = I, T = P, I = C, P = $ + (J = G + J + ((z = Y + ee) >>> 0 < Y >>> 0 ? 1 : 0)) + ((C = X + z | 0) >>> 0 < X >>> 0 ? 1 : 0) | 0
                            }
                            g = r.low = g + C, r.high = d + P + (g >>> 0 < C >>> 0 ? 1 : 0), f = i.low = f + I, i.high = p + T + (f >>> 0 < I >>> 0 ? 1 : 0), m = n.low = m + D, n.high = v + R + (m >>> 0 < D >>> 0 ? 1 : 0), _ = s.low = _ + B, s.high = y + N + (_ >>> 0 < B >>> 0 ? 1 : 0), F = u.low = F + U, u.high = S + H + (F >>> 0 < U >>> 0 ? 1 : 0), b = h.low = b + j, h.high = w + O + (b >>> 0 < j >>> 0 ? 1 : 0), x = c.low = x + V, c.high = E + M + (x >>> 0 < V >>> 0 ? 1 : 0), k = l.low = k + q, l.high = A + K + (k >>> 0 < q >>> 0 ? 1 : 0)
                        },
                        _doFinalize: function() {
                            var e = this._data,
                                t = e.words,
                                r = 8 * this._nDataBytes,
                                i = 8 * e.sigBytes;
                            return t[i >>> 5] |= 128 << 24 - i % 32, t[30 + (i + 128 >>> 10 << 5)] = Math.floor(r / 4294967296), t[31 + (i + 128 >>> 10 << 5)] = r, e.sigBytes = 4 * t.length, this._process(), this._hash.toX32()
                        },
                        clone: function() {
                            var e = r.clone.call(this);
                            return e._hash = this._hash.clone(), e
                        },
                        blockSize: 32
                    }), t.SHA512 = r._createHelper(s), t.HmacSHA512 = r._createHmacHelper(s)
                }(),
                function() {
                    var e = P,
                        t = (n = e.x64).Word,
                        r = n.WordArray,
                        i = (n = e.algo).SHA512,
                        n = n.SHA384 = i.extend({
                            _doReset: function() {
                                this._hash = new r.init([new t.init(3418070365, 3238371032), new t.init(1654270250, 914150663), new t.init(2438529370, 812702999), new t.init(355462360, 4144912697), new t.init(1731405415, 4290775857), new t.init(2394180231, 1750603025), new t.init(3675008525, 1694076839), new t.init(1203062813, 3204075428)])
                            },
                            _doFinalize: function() {
                                var e = i._doFinalize.call(this);
                                return e.sigBytes -= 16, e
                            }
                        });
                    e.SHA384 = i._createHelper(n), e.HmacSHA384 = i._createHmacHelper(n)
                }();
                var C, T = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                    I = "=";

                function R(e) {
                    var t, r, i = "";
                    for (t = 0; t + 3 <= e.length; t += 3) r = parseInt(e.substring(t, t + 3), 16), i += T.charAt(r >> 6) + T.charAt(63 & r);
                    if (t + 1 == e.length ? (r = parseInt(e.substring(t, t + 1), 16), i += T.charAt(r << 2)) : t + 2 == e.length && (r = parseInt(e.substring(t, t + 2), 16), i += T.charAt(r >> 2) + T.charAt((3 & r) << 4)), I)
                        for (;
                            (3 & i.length) > 0;) i += I;
                    return i
                }

                function D(e) {
                    var t, r, i, n = "",
                        s = 0;
                    for (t = 0; t < e.length && e.charAt(t) != I; ++t)(i = T.indexOf(e.charAt(t))) < 0 || (0 == s ? (n += M(i >> 2), r = 3 & i, s = 1) : 1 == s ? (n += M(r << 2 | i >> 4), r = 15 & i, s = 2) : 2 == s ? (n += M(r), n += M(i >> 2), r = 3 & i, s = 3) : (n += M(r << 2 | i >> 4), n += M(15 & i), s = 0));
                    return 1 == s && (n += M(r << 2)), n
                }

                function N(e, t, r) {
                    null != e && ("number" == typeof e ? this.fromNumber(e, t, r) : null == t && "string" != typeof e ? this.fromString(e, 256) : this.fromString(e, t))
                }

                function B() {
                    return new N(null)
                }
                "Microsoft Internet Explorer" == A.appName ? (N.prototype.am = function(e, t, r, i, n, s) {
                    for (var o = 32767 & t, a = t >> 15; --s >= 0;) {
                        var u = 32767 & this[e],
                            h = this[e++] >> 15,
                            c = a * u + h * o;
                        n = ((u = o * u + ((32767 & c) << 15) + r[i] + (1073741823 & n)) >>> 30) + (c >>> 15) + a * h + (n >>> 30), r[i++] = 1073741823 & u
                    }
                    return n
                }, C = 30) : "Netscape" != A.appName ? (N.prototype.am = function(e, t, r, i, n, s) {
                    for (; --s >= 0;) {
                        var o = t * this[e++] + r[i] + n;
                        n = Math.floor(o / 67108864), r[i++] = 67108863 & o
                    }
                    return n
                }, C = 26) : (N.prototype.am = function(e, t, r, i, n, s) {
                    for (var o = 16383 & t, a = t >> 14; --s >= 0;) {
                        var u = 16383 & this[e],
                            h = this[e++] >> 14,
                            c = a * u + h * o;
                        n = ((u = o * u + ((16383 & c) << 14) + r[i] + n) >> 28) + (c >> 14) + a * h, r[i++] = 268435455 & u
                    }
                    return n
                }, C = 28), N.prototype.DB = C, N.prototype.DM = (1 << C) - 1, N.prototype.DV = 1 << C, N.prototype.FV = Math.pow(2, 52), N.prototype.F1 = 52 - C, N.prototype.F2 = 2 * C - 52;
                var H, U, O = "0123456789abcdefghijklmnopqrstuvwxyz",
                    j = new Array;
                for (H = "0".charCodeAt(0), U = 0; U <= 9; ++U) j[H++] = U;
                for (H = "a".charCodeAt(0), U = 10; U < 36; ++U) j[H++] = U;
                for (H = "A".charCodeAt(0), U = 10; U < 36; ++U) j[H++] = U;

                function M(e) {
                    return O.charAt(e)
                }

                function V(e, t) {
                    var r = j[e.charCodeAt(t)];
                    return null == r ? -1 : r
                }

                function K(e) {
                    var t = B();
                    return t.fromInt(e), t
                }

                function q(e) {
                    var t, r = 1;
                    return 0 != (t = e >>> 16) && (e = t, r += 16), 0 != (t = e >> 8) && (e = t, r += 8), 0 != (t = e >> 4) && (e = t, r += 4), 0 != (t = e >> 2) && (e = t, r += 2), 0 != (t = e >> 1) && (e = t, r += 1), r
                }

                function L(e) {
                    this.m = e
                }

                function J(e) {
                    this.m = e, this.mp = e.invDigit(), this.mpl = 32767 & this.mp, this.mph = this.mp >> 15, this.um = (1 << e.DB - 15) - 1, this.mt2 = 2 * e.t
                }

                function W(e, t) {
                    return e & t
                }

                function z(e, t) {
                    return e | t
                }

                function G(e, t) {
                    return e ^ t
                }

                function Y(e, t) {
                    return e & ~t
                }

                function X(e) {
                    if (0 == e) return -1;
                    var t = 0;
                    return 0 == (65535 & e) && (e >>= 16, t += 16), 0 == (255 & e) && (e >>= 8, t += 8), 0 == (15 & e) && (e >>= 4, t += 4), 0 == (3 & e) && (e >>= 2, t += 2), 0 == (1 & e) && ++t, t
                }

                function Q(e) {
                    for (var t = 0; 0 != e;) e &= e - 1, ++t;
                    return t
                }

                function $() {}

                function Z(e) {
                    return e
                }

                function ee(e) {
                    this.r2 = B(), this.q3 = B(), N.ONE.dlShiftTo(2 * e.t, this.r2), this.mu = this.r2.divide(e), this.m = e
                }
                L.prototype.convert = function(e) {
                    return e.s < 0 || e.compareTo(this.m) >= 0 ? e.mod(this.m) : e
                }, L.prototype.revert = function(e) {
                    return e
                }, L.prototype.reduce = function(e) {
                    e.divRemTo(this.m, null, e)
                }, L.prototype.mulTo = function(e, t, r) {
                    e.multiplyTo(t, r), this.reduce(r)
                }, L.prototype.sqrTo = function(e, t) {
                    e.squareTo(t), this.reduce(t)
                }, J.prototype.convert = function(e) {
                    var t = B();
                    return e.abs().dlShiftTo(this.m.t, t), t.divRemTo(this.m, null, t), e.s < 0 && t.compareTo(N.ZERO) > 0 && this.m.subTo(t, t), t
                }, J.prototype.revert = function(e) {
                    var t = B();
                    return e.copyTo(t), this.reduce(t), t
                }, J.prototype.reduce = function(e) {
                    for (; e.t <= this.mt2;) e[e.t++] = 0;
                    for (var t = 0; t < this.m.t; ++t) {
                        var r = 32767 & e[t],
                            i = r * this.mpl + ((r * this.mph + (e[t] >> 15) * this.mpl & this.um) << 15) & e.DM;
                        for (e[r = t + this.m.t] += this.m.am(0, i, e, t, 0, this.m.t); e[r] >= e.DV;) e[r] -= e.DV, e[++r]++
                    }
                    e.clamp(), e.drShiftTo(this.m.t, e), e.compareTo(this.m) >= 0 && e.subTo(this.m, e)
                }, J.prototype.mulTo = function(e, t, r) {
                    e.multiplyTo(t, r), this.reduce(r)
                }, J.prototype.sqrTo = function(e, t) {
                    e.squareTo(t), this.reduce(t)
                }, N.prototype.copyTo = function(e) {
                    for (var t = this.t - 1; t >= 0; --t) e[t] = this[t];
                    e.t = this.t, e.s = this.s
                }, N.prototype.fromInt = function(e) {
                    this.t = 1, this.s = e < 0 ? -1 : 0, e > 0 ? this[0] = e : e < -1 ? this[0] = e + this.DV : this.t = 0
                }, N.prototype.fromString = function(e, t) {
                    var r;
                    if (16 == t) r = 4;
                    else if (8 == t) r = 3;
                    else if (256 == t) r = 8;
                    else if (2 == t) r = 1;
                    else if (32 == t) r = 5;
                    else {
                        if (4 != t) return void this.fromRadix(e, t);
                        r = 2
                    }
                    this.t = 0, this.s = 0;
                    for (var i = e.length, n = !1, s = 0; --i >= 0;) {
                        var o = 8 == r ? 255 & e[i] : V(e, i);
                        o < 0 ? "-" == e.charAt(i) && (n = !0) : (n = !1, 0 == s ? this[this.t++] = o : s + r > this.DB ? (this[this.t - 1] |= (o & (1 << this.DB - s) - 1) << s, this[this.t++] = o >> this.DB - s) : this[this.t - 1] |= o << s, (s += r) >= this.DB && (s -= this.DB))
                    }
                    8 == r && 0 != (128 & e[0]) && (this.s = -1, s > 0 && (this[this.t - 1] |= (1 << this.DB - s) - 1 << s)), this.clamp(), n && N.ZERO.subTo(this, this)
                }, N.prototype.clamp = function() {
                    for (var e = this.s & this.DM; this.t > 0 && this[this.t - 1] == e;) --this.t
                }, N.prototype.dlShiftTo = function(e, t) {
                    var r;
                    for (r = this.t - 1; r >= 0; --r) t[r + e] = this[r];
                    for (r = e - 1; r >= 0; --r) t[r] = 0;
                    t.t = this.t + e, t.s = this.s
                }, N.prototype.drShiftTo = function(e, t) {
                    for (var r = e; r < this.t; ++r) t[r - e] = this[r];
                    t.t = Math.max(this.t - e, 0), t.s = this.s
                }, N.prototype.lShiftTo = function(e, t) {
                    var r, i = e % this.DB,
                        n = this.DB - i,
                        s = (1 << n) - 1,
                        o = Math.floor(e / this.DB),
                        a = this.s << i & this.DM;
                    for (r = this.t - 1; r >= 0; --r) t[r + o + 1] = this[r] >> n | a, a = (this[r] & s) << i;
                    for (r = o - 1; r >= 0; --r) t[r] = 0;
                    t[o] = a, t.t = this.t + o + 1, t.s = this.s, t.clamp()
                }, N.prototype.rShiftTo = function(e, t) {
                    t.s = this.s;
                    var r = Math.floor(e / this.DB);
                    if (r >= this.t) t.t = 0;
                    else {
                        var i = e % this.DB,
                            n = this.DB - i,
                            s = (1 << i) - 1;
                        t[0] = this[r] >> i;
                        for (var o = r + 1; o < this.t; ++o) t[o - r - 1] |= (this[o] & s) << n, t[o - r] = this[o] >> i;
                        i > 0 && (t[this.t - r - 1] |= (this.s & s) << n), t.t = this.t - r, t.clamp()
                    }
                }, N.prototype.subTo = function(e, t) {
                    for (var r = 0, i = 0, n = Math.min(e.t, this.t); r < n;) i += this[r] - e[r], t[r++] = i & this.DM, i >>= this.DB;
                    if (e.t < this.t) {
                        for (i -= e.s; r < this.t;) i += this[r], t[r++] = i & this.DM, i >>= this.DB;
                        i += this.s
                    } else {
                        for (i += this.s; r < e.t;) i -= e[r], t[r++] = i & this.DM, i >>= this.DB;
                        i -= e.s
                    }
                    t.s = i < 0 ? -1 : 0, i < -1 ? t[r++] = this.DV + i : i > 0 && (t[r++] = i), t.t = r, t.clamp()
                }, N.prototype.multiplyTo = function(e, t) {
                    var r = this.abs(),
                        i = e.abs(),
                        n = r.t;
                    for (t.t = n + i.t; --n >= 0;) t[n] = 0;
                    for (n = 0; n < i.t; ++n) t[n + r.t] = r.am(0, i[n], t, n, 0, r.t);
                    t.s = 0, t.clamp(), this.s != e.s && N.ZERO.subTo(t, t)
                }, N.prototype.squareTo = function(e) {
                    for (var t = this.abs(), r = e.t = 2 * t.t; --r >= 0;) e[r] = 0;
                    for (r = 0; r < t.t - 1; ++r) {
                        var i = t.am(r, t[r], e, 2 * r, 0, 1);
                        (e[r + t.t] += t.am(r + 1, 2 * t[r], e, 2 * r + 1, i, t.t - r - 1)) >= t.DV && (e[r + t.t] -= t.DV, e[r + t.t + 1] = 1)
                    }
                    e.t > 0 && (e[e.t - 1] += t.am(r, t[r], e, 2 * r, 0, 1)), e.s = 0, e.clamp()
                }, N.prototype.divRemTo = function(e, t, r) {
                    var i = e.abs();
                    if (!(i.t <= 0)) {
                        var n = this.abs();
                        if (n.t < i.t) return null != t && t.fromInt(0), void(null != r && this.copyTo(r));
                        null == r && (r = B());
                        var s = B(),
                            o = this.s,
                            a = e.s,
                            u = this.DB - q(i[i.t - 1]);
                        u > 0 ? (i.lShiftTo(u, s), n.lShiftTo(u, r)) : (i.copyTo(s), n.copyTo(r));
                        var h = s.t,
                            c = s[h - 1];
                        if (0 != c) {
                            var l = c * (1 << this.F1) + (h > 1 ? s[h - 2] >> this.F2 : 0),
                                d = this.FV / l,
                                g = (1 << this.F1) / l,
                                p = 1 << this.F2,
                                f = r.t,
                                v = f - h,
                                m = null == t ? B() : t;
                            for (s.dlShiftTo(v, m), r.compareTo(m) >= 0 && (r[r.t++] = 1, r.subTo(m, r)), N.ONE.dlShiftTo(h, m), m.subTo(s, s); s.t < h;) s[s.t++] = 0;
                            for (; --v >= 0;) {
                                var y = r[--f] == c ? this.DM : Math.floor(r[f] * d + (r[f - 1] + p) * g);
                                if ((r[f] += s.am(0, y, r, v, 0, h)) < y)
                                    for (s.dlShiftTo(v, m), r.subTo(m, r); r[f] < --y;) r.subTo(m, r)
                            }
                            null != t && (r.drShiftTo(h, t), o != a && N.ZERO.subTo(t, t)), r.t = h, r.clamp(), u > 0 && r.rShiftTo(u, r), o < 0 && N.ZERO.subTo(r, r)
                        }
                    }
                }, N.prototype.invDigit = function() {
                    if (this.t < 1) return 0;
                    var e = this[0];
                    if (0 == (1 & e)) return 0;
                    var t = 3 & e;
                    return (t = (t = (t = (t = t * (2 - (15 & e) * t) & 15) * (2 - (255 & e) * t) & 255) * (2 - ((65535 & e) * t & 65535)) & 65535) * (2 - e * t % this.DV) % this.DV) > 0 ? this.DV - t : -t
                }, N.prototype.isEven = function() {
                    return 0 == (this.t > 0 ? 1 & this[0] : this.s)
                }, N.prototype.exp = function(e, t) {
                    if (e > 4294967295 || e < 1) return N.ONE;
                    var r = B(),
                        i = B(),
                        n = t.convert(this),
                        s = q(e) - 1;
                    for (n.copyTo(r); --s >= 0;)
                        if (t.sqrTo(r, i), (e & 1 << s) > 0) t.mulTo(i, n, r);
                        else {
                            var o = r;
                            r = i, i = o
                        }
                    return t.revert(r)
                }, N.prototype.toString = function(e) {
                    if (this.s < 0) return "-" + this.negate().toString(e);
                    var t;
                    if (16 == e) t = 4;
                    else if (8 == e) t = 3;
                    else if (2 == e) t = 1;
                    else if (32 == e) t = 5;
                    else {
                        if (4 != e) return this.toRadix(e);
                        t = 2
                    }
                    var r, i = (1 << t) - 1,
                        n = !1,
                        s = "",
                        o = this.t,
                        a = this.DB - o * this.DB % t;
                    if (o-- > 0)
                        for (a < this.DB && (r = this[o] >> a) > 0 && (n = !0, s = M(r)); o >= 0;) a < t ? (r = (this[o] & (1 << a) - 1) << t - a, r |= this[--o] >> (a += this.DB - t)) : (r = this[o] >> (a -= t) & i, a <= 0 && (a += this.DB, --o)), r > 0 && (n = !0), n && (s += M(r));
                    return n ? s : "0"
                }, N.prototype.negate = function() {
                    var e = B();
                    return N.ZERO.subTo(this, e), e
                }, N.prototype.abs = function() {
                    return this.s < 0 ? this.negate() : this
                }, N.prototype.compareTo = function(e) {
                    var t = this.s - e.s;
                    if (0 != t) return t;
                    var r = this.t;
                    if (0 != (t = r - e.t)) return this.s < 0 ? -t : t;
                    for (; --r >= 0;)
                        if (0 != (t = this[r] - e[r])) return t;
                    return 0
                }, N.prototype.bitLength = function() {
                    return this.t <= 0 ? 0 : this.DB * (this.t - 1) + q(this[this.t - 1] ^ this.s & this.DM)
                }, N.prototype.mod = function(e) {
                    var t = B();
                    return this.abs().divRemTo(e, null, t), this.s < 0 && t.compareTo(N.ZERO) > 0 && e.subTo(t, t), t
                }, N.prototype.modPowInt = function(e, t) {
                    var r;
                    return r = e < 256 || t.isEven() ? new L(t) : new J(t), this.exp(e, r)
                }, N.ZERO = K(0), N.ONE = K(1), $.prototype.convert = Z, $.prototype.revert = Z, $.prototype.mulTo = function(e, t, r) {
                    e.multiplyTo(t, r)
                }, $.prototype.sqrTo = function(e, t) {
                    e.squareTo(t)
                }, ee.prototype.convert = function(e) {
                    if (e.s < 0 || e.t > 2 * this.m.t) return e.mod(this.m);
                    if (e.compareTo(this.m) < 0) return e;
                    var t = B();
                    return e.copyTo(t), this.reduce(t), t
                }, ee.prototype.revert = function(e) {
                    return e
                }, ee.prototype.reduce = function(e) {
                    for (e.drShiftTo(this.m.t - 1, this.r2), e.t > this.m.t + 1 && (e.t = this.m.t + 1, e.clamp()), this.mu.multiplyUpperTo(this.r2, this.m.t + 1, this.q3), this.m.multiplyLowerTo(this.q3, this.m.t + 1, this.r2); e.compareTo(this.r2) < 0;) e.dAddOffset(1, this.m.t + 1);
                    for (e.subTo(this.r2, e); e.compareTo(this.m) >= 0;) e.subTo(this.m, e)
                }, ee.prototype.mulTo = function(e, t, r) {
                    e.multiplyTo(t, r), this.reduce(r)
                }, ee.prototype.sqrTo = function(e, t) {
                    e.squareTo(t), this.reduce(t)
                };
                var te = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 607, 613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 701, 709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797, 809, 811, 821, 823, 827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911, 919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997],
                    re = (1 << 26) / te[te.length - 1];

                function ie() {
                    this.i = 0, this.j = 0, this.S = new Array
                }
                N.prototype.chunkSize = function(e) {
                    return Math.floor(Math.LN2 * this.DB / Math.log(e))
                }, N.prototype.toRadix = function(e) {
                    if (null == e && (e = 10), 0 == this.signum() || e < 2 || e > 36) return "0";
                    var t = this.chunkSize(e),
                        r = Math.pow(e, t),
                        i = K(r),
                        n = B(),
                        s = B(),
                        o = "";
                    for (this.divRemTo(i, n, s); n.signum() > 0;) o = (r + s.intValue()).toString(e).substr(1) + o, n.divRemTo(i, n, s);
                    return s.intValue().toString(e) + o
                }, N.prototype.fromRadix = function(e, t) {
                    this.fromInt(0), null == t && (t = 10);
                    for (var r = this.chunkSize(t), i = Math.pow(t, r), n = !1, s = 0, o = 0, a = 0; a < e.length; ++a) {
                        var u = V(e, a);
                        u < 0 ? "-" == e.charAt(a) && 0 == this.signum() && (n = !0) : (o = t * o + u, ++s >= r && (this.dMultiply(i), this.dAddOffset(o, 0), s = 0, o = 0))
                    }
                    s > 0 && (this.dMultiply(Math.pow(t, s)), this.dAddOffset(o, 0)), n && N.ZERO.subTo(this, this)
                }, N.prototype.fromNumber = function(e, t, r) {
                    if ("number" == typeof t)
                        if (e < 2) this.fromInt(1);
                        else
                            for (this.fromNumber(e, r), this.testBit(e - 1) || this.bitwiseTo(N.ONE.shiftLeft(e - 1), z, this), this.isEven() && this.dAddOffset(1, 0); !this.isProbablePrime(t);) this.dAddOffset(2, 0), this.bitLength() > e && this.subTo(N.ONE.shiftLeft(e - 1), this);
                    else {
                        var i = new Array,
                            n = 7 & e;
                        i.length = 1 + (e >> 3), t.nextBytes(i), n > 0 ? i[0] &= (1 << n) - 1 : i[0] = 0, this.fromString(i, 256)
                    }
                }, N.prototype.bitwiseTo = function(e, t, r) {
                    var i, n, s = Math.min(e.t, this.t);
                    for (i = 0; i < s; ++i) r[i] = t(this[i], e[i]);
                    if (e.t < this.t) {
                        for (n = e.s & this.DM, i = s; i < this.t; ++i) r[i] = t(this[i], n);
                        r.t = this.t
                    } else {
                        for (n = this.s & this.DM, i = s; i < e.t; ++i) r[i] = t(n, e[i]);
                        r.t = e.t
                    }
                    r.s = t(this.s, e.s), r.clamp()
                }, N.prototype.changeBit = function(e, t) {
                    var r = N.ONE.shiftLeft(e);
                    return this.bitwiseTo(r, t, r), r
                }, N.prototype.addTo = function(e, t) {
                    for (var r = 0, i = 0, n = Math.min(e.t, this.t); r < n;) i += this[r] + e[r], t[r++] = i & this.DM, i >>= this.DB;
                    if (e.t < this.t) {
                        for (i += e.s; r < this.t;) i += this[r], t[r++] = i & this.DM, i >>= this.DB;
                        i += this.s
                    } else {
                        for (i += this.s; r < e.t;) i += e[r], t[r++] = i & this.DM, i >>= this.DB;
                        i += e.s
                    }
                    t.s = i < 0 ? -1 : 0, i > 0 ? t[r++] = i : i < -1 && (t[r++] = this.DV + i), t.t = r, t.clamp()
                }, N.prototype.dMultiply = function(e) {
                    this[this.t] = this.am(0, e - 1, this, 0, 0, this.t), ++this.t, this.clamp()
                }, N.prototype.dAddOffset = function(e, t) {
                    if (0 != e) {
                        for (; this.t <= t;) this[this.t++] = 0;
                        for (this[t] += e; this[t] >= this.DV;) this[t] -= this.DV, ++t >= this.t && (this[this.t++] = 0), ++this[t]
                    }
                }, N.prototype.multiplyLowerTo = function(e, t, r) {
                    var i, n = Math.min(this.t + e.t, t);
                    for (r.s = 0, r.t = n; n > 0;) r[--n] = 0;
                    for (i = r.t - this.t; n < i; ++n) r[n + this.t] = this.am(0, e[n], r, n, 0, this.t);
                    for (i = Math.min(e.t, t); n < i; ++n) this.am(0, e[n], r, n, 0, t - n);
                    r.clamp()
                }, N.prototype.multiplyUpperTo = function(e, t, r) {
                    --t;
                    var i = r.t = this.t + e.t - t;
                    for (r.s = 0; --i >= 0;) r[i] = 0;
                    for (i = Math.max(t - this.t, 0); i < e.t; ++i) r[this.t + i - t] = this.am(t - i, e[i], r, 0, 0, this.t + i - t);
                    r.clamp(), r.drShiftTo(1, r)
                }, N.prototype.modInt = function(e) {
                    if (e <= 0) return 0;
                    var t = this.DV % e,
                        r = this.s < 0 ? e - 1 : 0;
                    if (this.t > 0)
                        if (0 == t) r = this[0] % e;
                        else
                            for (var i = this.t - 1; i >= 0; --i) r = (t * r + this[i]) % e;
                    return r
                }, N.prototype.millerRabin = function(e) {
                    var t = this.subtract(N.ONE),
                        r = t.getLowestSetBit();
                    if (r <= 0) return !1;
                    var i = t.shiftRight(r);
                    (e = e + 1 >> 1) > te.length && (e = te.length);
                    for (var n = B(), s = 0; s < e; ++s) {
                        n.fromInt(te[Math.floor(Math.random() * te.length)]);
                        var o = n.modPow(i, this);
                        if (0 != o.compareTo(N.ONE) && 0 != o.compareTo(t)) {
                            for (var a = 1; a++ < r && 0 != o.compareTo(t);)
                                if (0 == (o = o.modPowInt(2, this)).compareTo(N.ONE)) return !1;
                            if (0 != o.compareTo(t)) return !1
                        }
                    }
                    return !0
                }, N.prototype.clone = function() {
                    var e = B();
                    return this.copyTo(e), e
                }, N.prototype.intValue = function() {
                    if (this.s < 0) {
                        if (1 == this.t) return this[0] - this.DV;
                        if (0 == this.t) return -1
                    } else {
                        if (1 == this.t) return this[0];
                        if (0 == this.t) return 0
                    }
                    return (this[1] & (1 << 32 - this.DB) - 1) << this.DB | this[0]
                }, N.prototype.byteValue = function() {
                    return 0 == this.t ? this.s : this[0] << 24 >> 24
                }, N.prototype.shortValue = function() {
                    return 0 == this.t ? this.s : this[0] << 16 >> 16
                }, N.prototype.signum = function() {
                    return this.s < 0 ? -1 : this.t <= 0 || 1 == this.t && this[0] <= 0 ? 0 : 1
                }, N.prototype.toByteArray = function() {
                    var e = this.t,
                        t = new Array;
                    t[0] = this.s;
                    var r, i = this.DB - e * this.DB % 8,
                        n = 0;
                    if (e-- > 0)
                        for (i < this.DB && (r = this[e] >> i) != (this.s & this.DM) >> i && (t[n++] = r | this.s << this.DB - i); e >= 0;) i < 8 ? (r = (this[e] & (1 << i) - 1) << 8 - i, r |= this[--e] >> (i += this.DB - 8)) : (r = this[e] >> (i -= 8) & 255, i <= 0 && (i += this.DB, --e)), 0 != (128 & r) && (r |= -256), 0 == n && (128 & this.s) != (128 & r) && ++n, (n > 0 || r != this.s) && (t[n++] = r);
                    return t
                }, N.prototype.equals = function(e) {
                    return 0 == this.compareTo(e)
                }, N.prototype.min = function(e) {
                    return this.compareTo(e) < 0 ? this : e
                }, N.prototype.max = function(e) {
                    return this.compareTo(e) > 0 ? this : e
                }, N.prototype.and = function(e) {
                    var t = B();
                    return this.bitwiseTo(e, W, t), t
                }, N.prototype.or = function(e) {
                    var t = B();
                    return this.bitwiseTo(e, z, t), t
                }, N.prototype.xor = function(e) {
                    var t = B();
                    return this.bitwiseTo(e, G, t), t
                }, N.prototype.andNot = function(e) {
                    var t = B();
                    return this.bitwiseTo(e, Y, t), t
                }, N.prototype.not = function() {
                    for (var e = B(), t = 0; t < this.t; ++t) e[t] = this.DM & ~this[t];
                    return e.t = this.t, e.s = ~this.s, e
                }, N.prototype.shiftLeft = function(e) {
                    var t = B();
                    return e < 0 ? this.rShiftTo(-e, t) : this.lShiftTo(e, t), t
                }, N.prototype.shiftRight = function(e) {
                    var t = B();
                    return e < 0 ? this.lShiftTo(-e, t) : this.rShiftTo(e, t), t
                }, N.prototype.getLowestSetBit = function() {
                    for (var e = 0; e < this.t; ++e)
                        if (0 != this[e]) return e * this.DB + X(this[e]);
                    return this.s < 0 ? this.t * this.DB : -1
                }, N.prototype.bitCount = function() {
                    for (var e = 0, t = this.s & this.DM, r = 0; r < this.t; ++r) e += Q(this[r] ^ t);
                    return e
                }, N.prototype.testBit = function(e) {
                    var t = Math.floor(e / this.DB);
                    return t >= this.t ? 0 != this.s : 0 != (this[t] & 1 << e % this.DB)
                }, N.prototype.setBit = function(e) {
                    return this.changeBit(e, z)
                }, N.prototype.clearBit = function(e) {
                    return this.changeBit(e, Y)
                }, N.prototype.flipBit = function(e) {
                    return this.changeBit(e, G)
                }, N.prototype.add = function(e) {
                    var t = B();
                    return this.addTo(e, t), t
                }, N.prototype.subtract = function(e) {
                    var t = B();
                    return this.subTo(e, t), t
                }, N.prototype.multiply = function(e) {
                    var t = B();
                    return this.multiplyTo(e, t), t
                }, N.prototype.divide = function(e) {
                    var t = B();
                    return this.divRemTo(e, t, null), t
                }, N.prototype.remainder = function(e) {
                    var t = B();
                    return this.divRemTo(e, null, t), t
                }, N.prototype.divideAndRemainder = function(e) {
                    var t = B(),
                        r = B();
                    return this.divRemTo(e, t, r), new Array(t, r)
                }, N.prototype.modPow = function(e, t) {
                    var r, i, n = e.bitLength(),
                        s = K(1);
                    if (n <= 0) return s;
                    r = n < 18 ? 1 : n < 48 ? 3 : n < 144 ? 4 : n < 768 ? 5 : 6, i = n < 8 ? new L(t) : t.isEven() ? new ee(t) : new J(t);
                    var o = new Array,
                        a = 3,
                        u = r - 1,
                        h = (1 << r) - 1;
                    if (o[1] = i.convert(this), r > 1) {
                        var c = B();
                        for (i.sqrTo(o[1], c); a <= h;) o[a] = B(), i.mulTo(c, o[a - 2], o[a]), a += 2
                    }
                    var l, d, g = e.t - 1,
                        p = !0,
                        f = B();
                    for (n = q(e[g]) - 1; g >= 0;) {
                        for (n >= u ? l = e[g] >> n - u & h : (l = (e[g] & (1 << n + 1) - 1) << u - n, g > 0 && (l |= e[g - 1] >> this.DB + n - u)), a = r; 0 == (1 & l);) l >>= 1, --a;
                        if ((n -= a) < 0 && (n += this.DB, --g), p) o[l].copyTo(s), p = !1;
                        else {
                            for (; a > 1;) i.sqrTo(s, f), i.sqrTo(f, s), a -= 2;
                            a > 0 ? i.sqrTo(s, f) : (d = s, s = f, f = d), i.mulTo(f, o[l], s)
                        }
                        for (; g >= 0 && 0 == (e[g] & 1 << n);) i.sqrTo(s, f), d = s, s = f, f = d, --n < 0 && (n = this.DB - 1, --g)
                    }
                    return i.revert(s)
                }, N.prototype.modInverse = function(e) {
                    var t = e.isEven();
                    if (this.isEven() && t || 0 == e.signum()) return N.ZERO;
                    for (var r = e.clone(), i = this.clone(), n = K(1), s = K(0), o = K(0), a = K(1); 0 != r.signum();) {
                        for (; r.isEven();) r.rShiftTo(1, r), t ? (n.isEven() && s.isEven() || (n.addTo(this, n), s.subTo(e, s)), n.rShiftTo(1, n)) : s.isEven() || s.subTo(e, s), s.rShiftTo(1, s);
                        for (; i.isEven();) i.rShiftTo(1, i), t ? (o.isEven() && a.isEven() || (o.addTo(this, o), a.subTo(e, a)), o.rShiftTo(1, o)) : a.isEven() || a.subTo(e, a), a.rShiftTo(1, a);
                        r.compareTo(i) >= 0 ? (r.subTo(i, r), t && n.subTo(o, n), s.subTo(a, s)) : (i.subTo(r, i), t && o.subTo(n, o), a.subTo(s, a))
                    }
                    return 0 != i.compareTo(N.ONE) ? N.ZERO : a.compareTo(e) >= 0 ? a.subtract(e) : a.signum() < 0 ? (a.addTo(e, a), a.signum() < 0 ? a.add(e) : a) : a
                }, N.prototype.pow = function(e) {
                    return this.exp(e, new $)
                }, N.prototype.gcd = function(e) {
                    var t = this.s < 0 ? this.negate() : this.clone(),
                        r = e.s < 0 ? e.negate() : e.clone();
                    if (t.compareTo(r) < 0) {
                        var i = t;
                        t = r, r = i
                    }
                    var n = t.getLowestSetBit(),
                        s = r.getLowestSetBit();
                    if (s < 0) return t;
                    for (n < s && (s = n), s > 0 && (t.rShiftTo(s, t), r.rShiftTo(s, r)); t.signum() > 0;)(n = t.getLowestSetBit()) > 0 && t.rShiftTo(n, t), (n = r.getLowestSetBit()) > 0 && r.rShiftTo(n, r), t.compareTo(r) >= 0 ? (t.subTo(r, t), t.rShiftTo(1, t)) : (r.subTo(t, r), r.rShiftTo(1, r));
                    return s > 0 && r.lShiftTo(s, r), r
                }, N.prototype.isProbablePrime = function(e) {
                    var t, r = this.abs();
                    if (1 == r.t && r[0] <= te[te.length - 1]) {
                        for (t = 0; t < te.length; ++t)
                            if (r[0] == te[t]) return !0;
                        return !1
                    }
                    if (r.isEven()) return !1;
                    for (t = 1; t < te.length;) {
                        for (var i = te[t], n = t + 1; n < te.length && i < re;) i *= te[n++];
                        for (i = r.modInt(i); t < n;)
                            if (i % te[t++] == 0) return !1
                    }
                    return r.millerRabin(e)
                }, N.prototype.square = function() {
                    var e = B();
                    return this.squareTo(e), e
                }, ie.prototype.init = function(e) {
                    var t, r, i;
                    for (t = 0; t < 256; ++t) this.S[t] = t;
                    for (r = 0, t = 0; t < 256; ++t) r = r + this.S[t] + e[t % e.length] & 255, i = this.S[t], this.S[t] = this.S[r], this.S[r] = i;
                    this.i = 0, this.j = 0
                }, ie.prototype.next = function() {
                    var e;
                    return this.i = this.i + 1 & 255, this.j = this.j + this.S[this.i] & 255, e = this.S[this.i], this.S[this.i] = this.S[this.j], this.S[this.j] = e, this.S[e + this.S[this.i] & 255]
                };
                var ne, se, oe, ae = 256;

                function ue() {
                    ! function(e) {
                        se[oe++] ^= 255 & e, se[oe++] ^= e >> 8 & 255, se[oe++] ^= e >> 16 & 255, se[oe++] ^= e >> 24 & 255, oe >= ae && (oe -= ae)
                    }((new Date).getTime())
                }
                if (null == se) {
                    var he;
                    if (se = new Array, oe = 0, void 0 !== k && (void 0 !== k.crypto || void 0 !== k.msCrypto)) {
                        var ce = k.crypto || k.msCrypto;
                        if (ce.getRandomValues) {
                            var le = new Uint8Array(32);
                            for (ce.getRandomValues(le), he = 0; he < 32; ++he) se[oe++] = le[he]
                        } else if ("Netscape" == A.appName && A.appVersion < "5") {
                            var de = k.crypto.random(32);
                            for (he = 0; he < de.length; ++he) se[oe++] = 255 & de.charCodeAt(he)
                        }
                    }
                    for (; oe < ae;) he = Math.floor(65536 * Math.random()), se[oe++] = he >>> 8, se[oe++] = 255 & he;
                    oe = 0, ue()
                }

                function ge() {
                    if (null == ne) {
                        for (ue(), (ne = new ie).init(se), oe = 0; oe < se.length; ++oe) se[oe] = 0;
                        oe = 0
                    }
                    return ne.next()
                }

                function pe() {}

                function fe(e, t) {
                    return new N(e, t)
                }

                function ve(e, t, r) {
                    for (var i = "", n = 0; i.length < t;) i += r(String.fromCharCode.apply(String, e.concat([(4278190080 & n) >> 24, (16711680 & n) >> 16, (65280 & n) >> 8, 255 & n]))), n += 1;
                    return i
                }

                function me() {
                    this.n = null, this.e = 0, this.d = null, this.p = null, this.q = null, this.dmp1 = null, this.dmq1 = null, this.coeff = null
                }

                function ye(e, t) {
                    this.x = t, this.q = e
                }

                function _e(e, t, r, i) {
                    this.curve = e, this.x = t, this.y = r, this.z = null == i ? N.ONE : i, this.zinv = null
                }

                function Se(e, t, r) {
                    this.q = e, this.a = this.fromBigInteger(t), this.b = this.fromBigInteger(r), this.infinity = new _e(this, null, null)
                }
                pe.prototype.nextBytes = function(e) {
                    var t;
                    for (t = 0; t < e.length; ++t) e[t] = ge()
                }, me.prototype.doPublic = function(e) {
                    return e.modPowInt(this.e, this.n)
                }, me.prototype.setPublic = function(e, t) {
                    if (this.isPublic = !0, this.isPrivate = !1, "string" != typeof e) this.n = e, this.e = t;
                    else {
                        if (!(null != e && null != t && e.length > 0 && t.length > 0)) throw "Invalid RSA public key";
                        this.n = fe(e, 16), this.e = parseInt(t, 16)
                    }
                }, me.prototype.encrypt = function(e) {
                    var t = function(e, t) {
                        if (t < e.length + 11) throw "Message too long for RSA";
                        for (var r = new Array, i = e.length - 1; i >= 0 && t > 0;) {
                            var n = e.charCodeAt(i--);
                            n < 128 ? r[--t] = n : n > 127 && n < 2048 ? (r[--t] = 63 & n | 128, r[--t] = n >> 6 | 192) : (r[--t] = 63 & n | 128, r[--t] = n >> 6 & 63 | 128, r[--t] = n >> 12 | 224)
                        }
                        r[--t] = 0;
                        for (var s = new pe, o = new Array; t > 2;) {
                            for (o[0] = 0; 0 == o[0];) s.nextBytes(o);
                            r[--t] = o[0]
                        }
                        return r[--t] = 2, r[--t] = 0, new N(r)
                    }(e, this.n.bitLength() + 7 >> 3);
                    if (null == t) return null;
                    var r = this.doPublic(t);
                    if (null == r) return null;
                    var i = r.toString(16);
                    return 0 == (1 & i.length) ? i : "0" + i
                }, me.prototype.encryptOAEP = function(e, t, r) {
                    var i = function(e, t, r, i) {
                        var n = we.crypto.MessageDigest,
                            s = we.crypto.Util,
                            o = null;
                        if (r || (r = "sha1"), "string" == typeof r && (o = n.getCanonicalAlgName(r), i = n.getHashLength(o), r = function(e) {
                                return Ne(s.hashHex(Be(e), o))
                            }), e.length + 2 * i + 2 > t) throw "Message too long for RSA";
                        var a, u = "";
                        for (a = 0; a < t - e.length - 2 * i - 2; a += 1) u += "\0";
                        var h = r("") + u + "" + e,
                            c = new Array(i);
                        (new pe).nextBytes(c);
                        var l = ve(c, h.length, r),
                            d = [];
                        for (a = 0; a < h.length; a += 1) d[a] = h.charCodeAt(a) ^ l.charCodeAt(a);
                        var g = ve(d, c.length, r),
                            p = [0];
                        for (a = 0; a < c.length; a += 1) p[a + 1] = c[a] ^ g.charCodeAt(a);
                        return new N(p.concat(d))
                    }(e, this.n.bitLength() + 7 >> 3, t, r);
                    if (null == i) return null;
                    var n = this.doPublic(i);
                    if (null == n) return null;
                    var s = n.toString(16);
                    return 0 == (1 & s.length) ? s : "0" + s
                }, me.prototype.type = "RSA", ye.prototype.equals = function(e) {
                    return e == this || this.q.equals(e.q) && this.x.equals(e.x)
                }, ye.prototype.toBigInteger = function() {
                    return this.x
                }, ye.prototype.negate = function() {
                    return new ye(this.q, this.x.negate().mod(this.q))
                }, ye.prototype.add = function(e) {
                    return new ye(this.q, this.x.add(e.toBigInteger()).mod(this.q))
                }, ye.prototype.subtract = function(e) {
                    return new ye(this.q, this.x.subtract(e.toBigInteger()).mod(this.q))
                }, ye.prototype.multiply = function(e) {
                    return new ye(this.q, this.x.multiply(e.toBigInteger()).mod(this.q))
                }, ye.prototype.square = function() {
                    return new ye(this.q, this.x.square().mod(this.q))
                }, ye.prototype.divide = function(e) {
                    return new ye(this.q, this.x.multiply(e.toBigInteger().modInverse(this.q)).mod(this.q))
                }, _e.prototype.getX = function() {
                    return null == this.zinv && (this.zinv = this.z.modInverse(this.curve.q)), this.curve.fromBigInteger(this.x.toBigInteger().multiply(this.zinv).mod(this.curve.q))
                }, _e.prototype.getY = function() {
                    return null == this.zinv && (this.zinv = this.z.modInverse(this.curve.q)), this.curve.fromBigInteger(this.y.toBigInteger().multiply(this.zinv).mod(this.curve.q))
                }, _e.prototype.equals = function(e) {
                    return e == this || (this.isInfinity() ? e.isInfinity() : e.isInfinity() ? this.isInfinity() : !!e.y.toBigInteger().multiply(this.z).subtract(this.y.toBigInteger().multiply(e.z)).mod(this.curve.q).equals(N.ZERO) && e.x.toBigInteger().multiply(this.z).subtract(this.x.toBigInteger().multiply(e.z)).mod(this.curve.q).equals(N.ZERO))
                }, _e.prototype.isInfinity = function() {
                    return null == this.x && null == this.y || this.z.equals(N.ZERO) && !this.y.toBigInteger().equals(N.ZERO)
                }, _e.prototype.negate = function() {
                    return new _e(this.curve, this.x, this.y.negate(), this.z)
                }, _e.prototype.add = function(e) {
                    if (this.isInfinity()) return e;
                    if (e.isInfinity()) return this;
                    var t = e.y.toBigInteger().multiply(this.z).subtract(this.y.toBigInteger().multiply(e.z)).mod(this.curve.q),
                        r = e.x.toBigInteger().multiply(this.z).subtract(this.x.toBigInteger().multiply(e.z)).mod(this.curve.q);
                    if (N.ZERO.equals(r)) return N.ZERO.equals(t) ? this.twice() : this.curve.getInfinity();
                    var i = new N("3"),
                        n = this.x.toBigInteger(),
                        s = this.y.toBigInteger(),
                        o = (e.x.toBigInteger(), e.y.toBigInteger(), r.square()),
                        a = o.multiply(r),
                        u = n.multiply(o),
                        h = t.square().multiply(this.z),
                        c = h.subtract(u.shiftLeft(1)).multiply(e.z).subtract(a).multiply(r).mod(this.curve.q),
                        l = u.multiply(i).multiply(t).subtract(s.multiply(a)).subtract(h.multiply(t)).multiply(e.z).add(t.multiply(a)).mod(this.curve.q),
                        d = a.multiply(this.z).multiply(e.z).mod(this.curve.q);
                    return new _e(this.curve, this.curve.fromBigInteger(c), this.curve.fromBigInteger(l), d)
                }, _e.prototype.twice = function() {
                    if (this.isInfinity()) return this;
                    if (0 == this.y.toBigInteger().signum()) return this.curve.getInfinity();
                    var e = new N("3"),
                        t = this.x.toBigInteger(),
                        r = this.y.toBigInteger(),
                        i = r.multiply(this.z),
                        n = i.multiply(r).mod(this.curve.q),
                        s = this.curve.a.toBigInteger(),
                        o = t.square().multiply(e);
                    N.ZERO.equals(s) || (o = o.add(this.z.square().multiply(s)));
                    var a = (o = o.mod(this.curve.q)).square().subtract(t.shiftLeft(3).multiply(n)).shiftLeft(1).multiply(i).mod(this.curve.q),
                        u = o.multiply(e).multiply(t).subtract(n.shiftLeft(1)).shiftLeft(2).multiply(n).subtract(o.square().multiply(o)).mod(this.curve.q),
                        h = i.square().multiply(i).shiftLeft(3).mod(this.curve.q);
                    return new _e(this.curve, this.curve.fromBigInteger(a), this.curve.fromBigInteger(u), h)
                }, _e.prototype.multiply = function(e) {
                    if (this.isInfinity()) return this;
                    if (0 == e.signum()) return this.curve.getInfinity();
                    var t, r = e,
                        i = r.multiply(new N("3")),
                        n = this.negate(),
                        s = this,
                        o = this.curve.q.subtract(e),
                        a = o.multiply(new N("3")),
                        u = new _e(this.curve, this.x, this.y),
                        h = u.negate();
                    for (t = i.bitLength() - 2; t > 0; --t) {
                        s = s.twice();
                        var c = i.testBit(t);
                        c != r.testBit(t) && (s = s.add(c ? this : n))
                    }
                    for (t = a.bitLength() - 2; t > 0; --t) {
                        u = u.twice();
                        var l = a.testBit(t);
                        l != o.testBit(t) && (u = u.add(l ? u : h))
                    }
                    return s
                }, _e.prototype.multiplyTwo = function(e, t, r) {
                    var i;
                    i = e.bitLength() > r.bitLength() ? e.bitLength() - 1 : r.bitLength() - 1;
                    for (var n = this.curve.getInfinity(), s = this.add(t); i >= 0;) n = n.twice(), e.testBit(i) ? n = r.testBit(i) ? n.add(s) : n.add(this) : r.testBit(i) && (n = n.add(t)), --i;
                    return n
                }, Se.prototype.getQ = function() {
                    return this.q
                }, Se.prototype.getA = function() {
                    return this.a
                }, Se.prototype.getB = function() {
                    return this.b
                }, Se.prototype.equals = function(e) {
                    return e == this || this.q.equals(e.q) && this.a.equals(e.a) && this.b.equals(e.b)
                }, Se.prototype.getInfinity = function() {
                    return this.infinity
                }, Se.prototype.fromBigInteger = function(e) {
                    return new ye(this.q, e)
                }, Se.prototype.decodePointHex = function(e) {
                    switch (parseInt(e.substr(0, 2), 16)) {
                        case 0:
                            return this.infinity;
                        case 2:
                        case 3:
                        default:
                            return null;
                        case 4:
                        case 6:
                        case 7:
                            var t = (e.length - 2) / 2,
                                r = e.substr(2, t),
                                i = e.substr(t + 2, t);
                            return new _e(this, this.fromBigInteger(new N(r, 16)), this.fromBigInteger(new N(i, 16)))
                    }
                }, ye.prototype.getByteLength = function() {
                    return Math.floor((this.toBigInteger().bitLength() + 7) / 8)
                }, _e.prototype.getEncoded = function(e) {
                    var t = function(e, t) {
                            var r = e.toByteArrayUnsigned();
                            if (t < r.length) r = r.slice(r.length - t);
                            else
                                for (; t > r.length;) r.unshift(0);
                            return r
                        },
                        r = this.getX().toBigInteger(),
                        i = this.getY().toBigInteger(),
                        n = t(r, 32);
                    return e ? i.isEven() ? n.unshift(2) : n.unshift(3) : (n.unshift(4), n = n.concat(t(i, 32))), n
                }, _e.decodeFrom = function(e, t) {
                    t[0];
                    var r = t.length - 1,
                        i = t.slice(1, 1 + r / 2),
                        n = t.slice(1 + r / 2, 1 + r);
                    i.unshift(0), n.unshift(0);
                    var s = new N(i),
                        o = new N(n);
                    return new _e(e, e.fromBigInteger(s), e.fromBigInteger(o))
                }, _e.decodeFromHex = function(e, t) {
                    t.substr(0, 2);
                    var r = t.length - 2,
                        i = t.substr(2, r / 2),
                        n = t.substr(2 + r / 2, r / 2),
                        s = new N(i, 16),
                        o = new N(n, 16);
                    return new _e(e, e.fromBigInteger(s), e.fromBigInteger(o))
                }, _e.prototype.add2D = function(e) {
                    if (this.isInfinity()) return e;
                    if (e.isInfinity()) return this;
                    if (this.x.equals(e.x)) return this.y.equals(e.y) ? this.twice() : this.curve.getInfinity();
                    var t = e.x.subtract(this.x),
                        r = e.y.subtract(this.y).divide(t),
                        i = r.square().subtract(this.x).subtract(e.x),
                        n = r.multiply(this.x.subtract(i)).subtract(this.y);
                    return new _e(this.curve, i, n)
                }, _e.prototype.twice2D = function() {
                    if (this.isInfinity()) return this;
                    if (0 == this.y.toBigInteger().signum()) return this.curve.getInfinity();
                    var e = this.curve.fromBigInteger(N.valueOf(2)),
                        t = this.curve.fromBigInteger(N.valueOf(3)),
                        r = this.x.square().multiply(t).add(this.curve.a).divide(this.y.multiply(e)),
                        i = r.square().subtract(this.x.multiply(e)),
                        n = r.multiply(this.x.subtract(i)).subtract(this.y);
                    return new _e(this.curve, i, n)
                }, _e.prototype.multiply2D = function(e) {
                    if (this.isInfinity()) return this;
                    if (0 == e.signum()) return this.curve.getInfinity();
                    var t, r = e,
                        i = r.multiply(new N("3")),
                        n = this.negate(),
                        s = this;
                    for (t = i.bitLength() - 2; t > 0; --t) {
                        s = s.twice();
                        var o = i.testBit(t);
                        o != r.testBit(t) && (s = s.add2D(o ? this : n))
                    }
                    return s
                }, _e.prototype.isOnCurve = function() {
                    var e = this.getX().toBigInteger(),
                        t = this.getY().toBigInteger(),
                        r = this.curve.getA().toBigInteger(),
                        i = this.curve.getB().toBigInteger(),
                        n = this.curve.getQ(),
                        s = t.multiply(t).mod(n),
                        o = e.multiply(e).multiply(e).add(r.multiply(e)).add(i).mod(n);
                    return s.equals(o)
                }, _e.prototype.toString = function() {
                    return "(" + this.getX().toBigInteger().toString() + "," + this.getY().toBigInteger().toString() + ")"
                }, _e.prototype.validate = function() {
                    var e = this.curve.getQ();
                    if (this.isInfinity()) throw new Error("Point is at infinity.");
                    var t = this.getX().toBigInteger(),
                        r = this.getY().toBigInteger();
                    if (t.compareTo(N.ONE) < 0 || t.compareTo(e.subtract(N.ONE)) > 0) throw new Error("x coordinate out of bounds");
                    if (r.compareTo(N.ONE) < 0 || r.compareTo(e.subtract(N.ONE)) > 0) throw new Error("y coordinate out of bounds");
                    if (!this.isOnCurve()) throw new Error("Point is not on the curve.");
                    if (this.multiply(e).isInfinity()) throw new Error("Point is not a scalar multiple of G.");
                    return !0
                };
                var Fe = function() {
                    var e = new RegExp('(?:false|true|null|[\\{\\}\\[\\]]|(?:-?\\b(?:0|[1-9][0-9]*)(?:\\.[0-9]+)?(?:[eE][+-]?[0-9]+)?\\b)|(?:"(?:[^\\0-\\x08\\x0a-\\x1f"\\\\]|\\\\(?:["/\\\\bfnrt]|u[0-9A-Fa-f]{4}))*"))', "g"),
                        t = new RegExp("\\\\(?:([^u])|u(.{4}))", "g"),
                        r = {
                            '"': '"',
                            "/": "/",
                            "\\": "\\",
                            b: "\b",
                            f: "\f",
                            n: "\n",
                            r: "\r",
                            t: "\t"
                        };

                    function i(e, t, i) {
                        return t ? r[t] : String.fromCharCode(parseInt(i, 16))
                    }
                    var n = new String(""),
                        s = Object.hasOwnProperty;
                    return function(r, o) {
                        var a, u, h = r.match(e),
                            c = h[0],
                            l = !1;
                        "{" === c ? a = {} : "[" === c ? a = [] : (a = [], l = !0);
                        for (var d = [a], g = 1 - l, p = h.length; g < p; ++g) {
                            var f;
                            switch ((c = h[g]).charCodeAt(0)) {
                                default: (f = d[0])[u || f.length] = +c,
                                u = void 0;
                                break;
                                case 34:
                                        if (-1 !== (c = c.substring(1, c.length - 1)).indexOf("\\") && (c = c.replace(t, i)), f = d[0], !u) {
                                        if (!(f instanceof Array)) {
                                            u = c || n;
                                            break
                                        }
                                        u = f.length
                                    }f[u] = c,
                                    u = void 0;
                                    break;
                                case 91:
                                        f = d[0],
                                    d.unshift(f[u || f.length] = []),
                                    u = void 0;
                                    break;
                                case 93:
                                        case 125:
                                        d.shift();
                                    break;
                                case 102:
                                        (f = d[0])[u || f.length] = !1,
                                    u = void 0;
                                    break;
                                case 110:
                                        (f = d[0])[u || f.length] = null,
                                    u = void 0;
                                    break;
                                case 116:
                                        (f = d[0])[u || f.length] = !0,
                                    u = void 0;
                                    break;
                                case 123:
                                        f = d[0],
                                    d.unshift(f[u || f.length] = {}),
                                    u = void 0
                            }
                        }
                        if (l) {
                            if (1 !== d.length) throw new Error;
                            a = a[0]
                        } else if (d.length) throw new Error;
                        if (o) {
                            var v = function(e, t) {
                                var r = e[t];
                                if (r && "object" == typeof r) {
                                    var i = null;
                                    for (var n in r)
                                        if (s.call(r, n) && r !== e) {
                                            var a = v(r, n);
                                            void 0 !== a ? r[n] = a : (i || (i = []), i.push(n))
                                        }
                                    if (i)
                                        for (var u = i.length; --u >= 0;) delete r[i[u]]
                                }
                                return o.call(e, t, r)
                            };
                            a = v({
                                "": a
                            }, "")
                        }
                        return a
                    }
                }();
                void 0 !== we && we || (we = {}), void 0 !== we.asn1 && we.asn1 || (we.asn1 = {}), we.asn1.ASN1Util = new function() {
                    this.integerToByteHex = function(e) {
                        var t = e.toString(16);
                        return t.length % 2 == 1 && (t = "0" + t), t
                    }, this.bigIntToMinTwosComplementsHex = function(e) {
                        var t = e.toString(16);
                        if ("-" != t.substr(0, 1)) t.length % 2 == 1 ? t = "0" + t : t.match(/^[0-7]/) || (t = "00" + t);
                        else {
                            var r = t.substr(1).length;
                            r % 2 == 1 ? r += 1 : t.match(/^[0-7]/) || (r += 2);
                            for (var i = "", n = 0; n < r; n++) i += "f";
                            t = new N(i, 16).xor(e).add(N.ONE).toString(16).replace(/^-/, "")
                        }
                        return t
                    }, this.getPEMStringFromHex = function(e, t) {
                        return He(e, t)
                    }, this.newObject = function(e) {
                        var t = we.asn1,
                            r = t.ASN1Object,
                            i = t.DERBoolean,
                            n = t.DERInteger,
                            s = t.DERBitString,
                            o = t.DEROctetString,
                            a = t.DERNull,
                            u = t.DERObjectIdentifier,
                            h = t.DEREnumerated,
                            c = t.DERUTF8String,
                            l = t.DERNumericString,
                            d = t.DERPrintableString,
                            g = t.DERTeletexString,
                            p = t.DERIA5String,
                            f = t.DERUTCTime,
                            v = t.DERGeneralizedTime,
                            m = t.DERVisibleString,
                            y = t.DERBMPString,
                            _ = t.DERSequence,
                            S = t.DERSet,
                            F = t.DERTaggedObject,
                            w = t.ASN1Util.newObject;
                        if (e instanceof t.ASN1Object) return e;
                        var b = Object.keys(e);
                        if (1 != b.length) throw new Error("key of param shall be only one.");
                        var E = b[0];
                        if (-1 == ":asn1:bool:int:bitstr:octstr:null:oid:enum:utf8str:numstr:prnstr:telstr:ia5str:utctime:gentime:visstr:bmpstr:seq:set:tag:".indexOf(":" + E + ":")) throw new Error("undefined key: " + E);
                        if ("bool" == E) return new i(e[E]);
                        if ("int" == E) return new n(e[E]);
                        if ("bitstr" == E) return new s(e[E]);
                        if ("octstr" == E) return new o(e[E]);
                        if ("null" == E) return new a(e[E]);
                        if ("oid" == E) return new u(e[E]);
                        if ("enum" == E) return new h(e[E]);
                        if ("utf8str" == E) return new c(e[E]);
                        if ("numstr" == E) return new l(e[E]);
                        if ("prnstr" == E) return new d(e[E]);
                        if ("telstr" == E) return new g(e[E]);
                        if ("ia5str" == E) return new p(e[E]);
                        if ("utctime" == E) return new f(e[E]);
                        if ("gentime" == E) return new v(e[E]);
                        if ("visstr" == E) return new m(e[E]);
                        if ("bmpstr" == E) return new y(e[E]);
                        if ("asn1" == E) return new r(e[E]);
                        if ("seq" == E) {
                            for (var x = e[E], A = [], k = 0; k < x.length; k++) {
                                var P = w(x[k]);
                                A.push(P)
                            }
                            return new _({
                                array: A
                            })
                        }
                        if ("set" == E) {
                            for (x = e[E], A = [], k = 0; k < x.length; k++) P = w(x[k]), A.push(P);
                            return new S({
                                array: A
                            })
                        }
                        if ("tag" == E) {
                            var C = e[E];
                            if ("[object Array]" === Object.prototype.toString.call(C) && 3 == C.length) {
                                var T = w(C[2]);
                                return new F({
                                    tag: C[0],
                                    explicit: C[1],
                                    obj: T
                                })
                            }
                            return new F(C)
                        }
                    }, this.jsonToASN1HEX = function(e) {
                        return this.newObject(e).getEncodedHex()
                    }
                }, we.asn1.ASN1Util.oidHexToInt = function(e) {
                    for (var t = "", r = parseInt(e.substr(0, 2), 16), i = (t = Math.floor(r / 40) + "." + r % 40, ""), n = 2; n < e.length; n += 2) {
                        var s = ("00000000" + parseInt(e.substr(n, 2), 16).toString(2)).slice(-8);
                        i += s.substr(1, 7), "0" == s.substr(0, 1) && (t = t + "." + new N(i, 2).toString(10), i = "")
                    }
                    return t
                }, we.asn1.ASN1Util.oidIntToHex = function(e) {
                    var t = function(e) {
                            var t = e.toString(16);
                            return 1 == t.length && (t = "0" + t), t
                        },
                        r = function(e) {
                            var r = "",
                                i = new N(e, 10).toString(2),
                                n = 7 - i.length % 7;
                            7 == n && (n = 0);
                            for (var s = "", o = 0; o < n; o++) s += "0";
                            for (i = s + i, o = 0; o < i.length - 1; o += 7) {
                                var a = i.substr(o, 7);
                                o != i.length - 7 && (a = "1" + a), r += t(parseInt(a, 2))
                            }
                            return r
                        };
                    if (!e.match(/^[0-9.]+$/)) throw "malformed oid string: " + e;
                    var i = "",
                        n = e.split("."),
                        s = 40 * parseInt(n[0]) + parseInt(n[1]);
                    i += t(s), n.splice(0, 2);
                    for (var o = 0; o < n.length; o++) i += r(n[o]);
                    return i
                }, we.asn1.ASN1Object = function(e) {
                    this.params = null, this.getLengthHexFromValue = function() {
                        if (void 0 === this.hV || null == this.hV) throw new Error("this.hV is null or undefined");
                        if (this.hV.length % 2 == 1) throw new Error("value hex must be even length: n=0,v=" + this.hV);
                        var e = this.hV.length / 2,
                            t = e.toString(16);
                        if (t.length % 2 == 1 && (t = "0" + t), e < 128) return t;
                        var r = t.length / 2;
                        if (r > 15) throw "ASN.1 length too long to represent by 8x: n = " + e.toString(16);
                        return (128 + r).toString(16) + t
                    }, this.getEncodedHex = function() {
                        return (null == this.hTLV || this.isModified) && (this.hV = this.getFreshValueHex(), this.hL = this.getLengthHexFromValue(), this.hTLV = this.hT + this.hL + this.hV, this.isModified = !1), this.hTLV
                    }, this.getValueHex = function() {
                        return this.getEncodedHex(), this.hV
                    }, this.getFreshValueHex = function() {
                        return ""
                    }, this.setByParam = function(e) {
                        this.params = e
                    }, null != e && null != e.tlv && (this.hTLV = e.tlv, this.isModified = !1)
                }, we.asn1.DERAbstractString = function(e) {
                    we.asn1.DERAbstractString.superclass.constructor.call(this), this.getString = function() {
                        return this.s
                    }, this.setString = function(e) {
                        this.hTLV = null, this.isModified = !0, this.s = e, this.hV = Re(this.s).toLowerCase()
                    }, this.setStringHex = function(e) {
                        this.hTLV = null, this.isModified = !0, this.s = null, this.hV = e
                    }, this.getFreshValueHex = function() {
                        return this.hV
                    }, void 0 !== e && ("string" == typeof e ? this.setString(e) : void 0 !== e.str ? this.setString(e.str) : void 0 !== e.hex && this.setStringHex(e.hex))
                }, We(we.asn1.DERAbstractString, we.asn1.ASN1Object), we.asn1.DERAbstractTime = function(e) {
                    we.asn1.DERAbstractTime.superclass.constructor.call(this), this.localDateToUTC = function(e) {
                        var t = e.getTime() + 6e4 * e.getTimezoneOffset();
                        return new Date(t)
                    }, this.formatDate = function(e, t, r) {
                        var i = this.zeroPadding,
                            n = this.localDateToUTC(e),
                            s = String(n.getFullYear());
                        "utc" == t && (s = s.substr(2, 2));
                        var o = s + i(String(n.getMonth() + 1), 2) + i(String(n.getDate()), 2) + i(String(n.getHours()), 2) + i(String(n.getMinutes()), 2) + i(String(n.getSeconds()), 2);
                        if (!0 === r) {
                            var a = n.getMilliseconds();
                            if (0 != a) {
                                var u = i(String(a), 3);
                                o = o + "." + (u = u.replace(/[0]+$/, ""))
                            }
                        }
                        return o + "Z"
                    }, this.zeroPadding = function(e, t) {
                        return e.length >= t ? e : new Array(t - e.length + 1).join("0") + e
                    }, this.getString = function() {
                        return this.s
                    }, this.setString = function(e) {
                        this.hTLV = null, this.isModified = !0, this.s = e, this.hV = ke(e)
                    }, this.setByDateValue = function(e, t, r, i, n, s) {
                        var o = new Date(Date.UTC(e, t - 1, r, i, n, s, 0));
                        this.setByDate(o)
                    }, this.getFreshValueHex = function() {
                        return this.hV
                    }
                }, We(we.asn1.DERAbstractTime, we.asn1.ASN1Object), we.asn1.DERAbstractStructured = function(e) {
                    we.asn1.DERAbstractString.superclass.constructor.call(this), this.setByASN1ObjectArray = function(e) {
                        this.hTLV = null, this.isModified = !0, this.asn1Array = e
                    }, this.appendASN1Object = function(e) {
                        this.hTLV = null, this.isModified = !0, this.asn1Array.push(e)
                    }, this.asn1Array = new Array, void 0 !== e && void 0 !== e.array && (this.asn1Array = e.array)
                }, We(we.asn1.DERAbstractStructured, we.asn1.ASN1Object), we.asn1.DERBoolean = function(e) {
                    we.asn1.DERBoolean.superclass.constructor.call(this), this.hT = "01", this.hTLV = 0 == e ? "010100" : "0101ff"
                }, We(we.asn1.DERBoolean, we.asn1.ASN1Object), we.asn1.DERInteger = function(e) {
                    we.asn1.DERInteger.superclass.constructor.call(this), this.hT = "02", this.setByBigInteger = function(e) {
                        this.hTLV = null, this.isModified = !0, this.hV = we.asn1.ASN1Util.bigIntToMinTwosComplementsHex(e)
                    }, this.setByInteger = function(e) {
                        var t = new N(String(e), 10);
                        this.setByBigInteger(t)
                    }, this.setValueHex = function(e) {
                        this.hV = e
                    }, this.getFreshValueHex = function() {
                        return this.hV
                    }, void 0 !== e && (void 0 !== e.bigint ? this.setByBigInteger(e.bigint) : void 0 !== e.int ? this.setByInteger(e.int) : "number" == typeof e ? this.setByInteger(e) : void 0 !== e.hex && this.setValueHex(e.hex))
                }, We(we.asn1.DERInteger, we.asn1.ASN1Object), we.asn1.DERBitString = function(e) {
                    if (void 0 !== e && void 0 !== e.obj) {
                        var t = we.asn1.ASN1Util.newObject(e.obj);
                        e.hex = "00" + t.getEncodedHex()
                    }
                    we.asn1.DERBitString.superclass.constructor.call(this), this.hT = "03", this.setHexValueIncludingUnusedBits = function(e) {
                        this.hTLV = null, this.isModified = !0, this.hV = e
                    }, this.setUnusedBitsAndHexValue = function(e, t) {
                        if (e < 0 || 7 < e) throw "unused bits shall be from 0 to 7: u = " + e;
                        var r = "0" + e;
                        this.hTLV = null, this.isModified = !0, this.hV = r + t
                    }, this.setByBinaryString = function(e) {
                        var t = 8 - (e = e.replace(/0+$/, "")).length % 8;
                        8 == t && (t = 0);
                        for (var r = 0; r <= t; r++) e += "0";
                        var i = "";
                        for (r = 0; r < e.length - 1; r += 8) {
                            var n = e.substr(r, 8),
                                s = parseInt(n, 2).toString(16);
                            1 == s.length && (s = "0" + s), i += s
                        }
                        this.hTLV = null, this.isModified = !0, this.hV = "0" + t + i
                    }, this.setByBooleanArray = function(e) {
                        for (var t = "", r = 0; r < e.length; r++) 1 == e[r] ? t += "1" : t += "0";
                        this.setByBinaryString(t)
                    }, this.newFalseArray = function(e) {
                        for (var t = new Array(e), r = 0; r < e; r++) t[r] = !1;
                        return t
                    }, this.getFreshValueHex = function() {
                        return this.hV
                    }, void 0 !== e && ("string" == typeof e && e.toLowerCase().match(/^[0-9a-f]+$/) ? this.setHexValueIncludingUnusedBits(e) : void 0 !== e.hex ? this.setHexValueIncludingUnusedBits(e.hex) : void 0 !== e.bin ? this.setByBinaryString(e.bin) : void 0 !== e.array && this.setByBooleanArray(e.array))
                }, We(we.asn1.DERBitString, we.asn1.ASN1Object), we.asn1.DEROctetString = function(e) {
                    if (void 0 !== e && void 0 !== e.obj) {
                        var t = we.asn1.ASN1Util.newObject(e.obj);
                        e.hex = t.getEncodedHex()
                    }
                    we.asn1.DEROctetString.superclass.constructor.call(this, e), this.hT = "04"
                }, We(we.asn1.DEROctetString, we.asn1.DERAbstractString), we.asn1.DERNull = function() {
                    we.asn1.DERNull.superclass.constructor.call(this), this.hT = "05", this.hTLV = "0500"
                }, We(we.asn1.DERNull, we.asn1.ASN1Object), we.asn1.DERObjectIdentifier = function(e) {
                    we.asn1.DERObjectIdentifier.superclass.constructor.call(this), this.hT = "06", this.setValueHex = function(e) {
                        this.hTLV = null, this.isModified = !0, this.s = null, this.hV = e
                    }, this.setValueOidString = function(e) {
                        var t = function(e) {
                            var t = function(e) {
                                    var t = e.toString(16);
                                    return 1 == t.length && (t = "0" + t), t
                                },
                                r = function(e) {
                                    var r = "",
                                        i = parseInt(e, 10).toString(2),
                                        n = 7 - i.length % 7;
                                    7 == n && (n = 0);
                                    for (var s = "", o = 0; o < n; o++) s += "0";
                                    for (i = s + i, o = 0; o < i.length - 1; o += 7) {
                                        var a = i.substr(o, 7);
                                        o != i.length - 7 && (a = "1" + a), r += t(parseInt(a, 2))
                                    }
                                    return r
                                };
                            try {
                                if (!e.match(/^[0-9.]+$/)) return null;
                                var i = "",
                                    n = e.split("."),
                                    s = 40 * parseInt(n[0], 10) + parseInt(n[1], 10);
                                i += t(s), n.splice(0, 2);
                                for (var o = 0; o < n.length; o++) i += r(n[o]);
                                return i
                            } catch (e) {
                                return null
                            }
                        }(e);
                        if (null == t) throw new Error("malformed oid string: " + e);
                        this.hTLV = null, this.isModified = !0, this.s = null, this.hV = t
                    }, this.setValueName = function(e) {
                        var t = we.asn1.x509.OID.name2oid(e);
                        if ("" === t) throw new Error("DERObjectIdentifier oidName undefined: " + e);
                        this.setValueOidString(t)
                    }, this.setValueNameOrOid = function(e) {
                        e.match(/^[0-2].[0-9.]+$/) ? this.setValueOidString(e) : this.setValueName(e)
                    }, this.getFreshValueHex = function() {
                        return this.hV
                    }, this.setByParam = function(e) {
                        "string" == typeof e ? this.setValueNameOrOid(e) : void 0 !== e.oid ? this.setValueNameOrOid(e.oid) : void 0 !== e.name ? this.setValueNameOrOid(e.name) : void 0 !== e.hex && this.setValueHex(e.hex)
                    }, void 0 !== e && this.setByParam(e)
                }, We(we.asn1.DERObjectIdentifier, we.asn1.ASN1Object), we.asn1.DEREnumerated = function(e) {
                    we.asn1.DEREnumerated.superclass.constructor.call(this), this.hT = "0a", this.setByBigInteger = function(e) {
                        this.hTLV = null, this.isModified = !0, this.hV = we.asn1.ASN1Util.bigIntToMinTwosComplementsHex(e)
                    }, this.setByInteger = function(e) {
                        var t = new N(String(e), 10);
                        this.setByBigInteger(t)
                    }, this.setValueHex = function(e) {
                        this.hV = e
                    }, this.getFreshValueHex = function() {
                        return this.hV
                    }, void 0 !== e && (void 0 !== e.int ? this.setByInteger(e.int) : "number" == typeof e ? this.setByInteger(e) : void 0 !== e.hex && this.setValueHex(e.hex))
                }, We(we.asn1.DEREnumerated, we.asn1.ASN1Object), we.asn1.DERUTF8String = function(e) {
                    we.asn1.DERUTF8String.superclass.constructor.call(this, e), this.hT = "0c"
                }, We(we.asn1.DERUTF8String, we.asn1.DERAbstractString), we.asn1.DERNumericString = function(e) {
                    we.asn1.DERNumericString.superclass.constructor.call(this, e), this.hT = "12"
                }, We(we.asn1.DERNumericString, we.asn1.DERAbstractString), we.asn1.DERPrintableString = function(e) {
                    we.asn1.DERPrintableString.superclass.constructor.call(this, e), this.hT = "13"
                }, We(we.asn1.DERPrintableString, we.asn1.DERAbstractString), we.asn1.DERTeletexString = function(e) {
                    we.asn1.DERTeletexString.superclass.constructor.call(this, e), this.hT = "14"
                }, We(we.asn1.DERTeletexString, we.asn1.DERAbstractString), we.asn1.DERIA5String = function(e) {
                    we.asn1.DERIA5String.superclass.constructor.call(this, e), this.hT = "16"
                }, We(we.asn1.DERIA5String, we.asn1.DERAbstractString), we.asn1.DERVisibleString = function(e) {
                    we.asn1.DERIA5String.superclass.constructor.call(this, e), this.hT = "1a"
                }, We(we.asn1.DERVisibleString, we.asn1.DERAbstractString), we.asn1.DERBMPString = function(e) {
                    we.asn1.DERBMPString.superclass.constructor.call(this, e), this.hT = "1e"
                }, We(we.asn1.DERBMPString, we.asn1.DERAbstractString), we.asn1.DERUTCTime = function(e) {
                    we.asn1.DERUTCTime.superclass.constructor.call(this, e), this.hT = "17", this.setByDate = function(e) {
                        this.hTLV = null, this.isModified = !0, this.date = e, this.s = this.formatDate(this.date, "utc"), this.hV = ke(this.s)
                    }, this.getFreshValueHex = function() {
                        return void 0 === this.date && void 0 === this.s && (this.date = new Date, this.s = this.formatDate(this.date, "utc"), this.hV = ke(this.s)), this.hV
                    }, void 0 !== e && (void 0 !== e.str ? this.setString(e.str) : "string" == typeof e && e.match(/^[0-9]{12}Z$/) ? this.setString(e) : void 0 !== e.hex ? this.setStringHex(e.hex) : void 0 !== e.date && this.setByDate(e.date))
                }, We(we.asn1.DERUTCTime, we.asn1.DERAbstractTime), we.asn1.DERGeneralizedTime = function(e) {
                    we.asn1.DERGeneralizedTime.superclass.constructor.call(this, e), this.hT = "18", this.withMillis = !1, this.setByDate = function(e) {
                        this.hTLV = null, this.isModified = !0, this.date = e, this.s = this.formatDate(this.date, "gen", this.withMillis), this.hV = ke(this.s)
                    }, this.getFreshValueHex = function() {
                        return void 0 === this.date && void 0 === this.s && (this.date = new Date, this.s = this.formatDate(this.date, "gen", this.withMillis), this.hV = ke(this.s)), this.hV
                    }, void 0 !== e && (void 0 !== e.str ? this.setString(e.str) : "string" == typeof e && e.match(/^[0-9]{14}Z$/) ? this.setString(e) : void 0 !== e.hex ? this.setStringHex(e.hex) : void 0 !== e.date && this.setByDate(e.date), !0 === e.millis && (this.withMillis = !0))
                }, We(we.asn1.DERGeneralizedTime, we.asn1.DERAbstractTime), we.asn1.DERSequence = function(e) {
                    we.asn1.DERSequence.superclass.constructor.call(this, e), this.hT = "30", this.getFreshValueHex = function() {
                        for (var e = "", t = 0; t < this.asn1Array.length; t++) e += this.asn1Array[t].getEncodedHex();
                        return this.hV = e, this.hV
                    }
                }, We(we.asn1.DERSequence, we.asn1.DERAbstractStructured), we.asn1.DERSet = function(e) {
                    we.asn1.DERSet.superclass.constructor.call(this, e), this.hT = "31", this.sortFlag = !0, this.getFreshValueHex = function() {
                        for (var e = new Array, t = 0; t < this.asn1Array.length; t++) {
                            var r = this.asn1Array[t];
                            e.push(r.getEncodedHex())
                        }
                        return 1 == this.sortFlag && e.sort(), this.hV = e.join(""), this.hV
                    }, void 0 !== e && void 0 !== e.sortflag && 0 == e.sortflag && (this.sortFlag = !1)
                }, We(we.asn1.DERSet, we.asn1.DERAbstractStructured), we.asn1.DERTaggedObject = function(e) {
                    we.asn1.DERTaggedObject.superclass.constructor.call(this);
                    var t = we.asn1;
                    this.hT = "a0", this.hV = "", this.isExplicit = !0, this.asn1Object = null, this.setASN1Object = function(e, t, r) {
                        this.hT = t, this.isExplicit = e, this.asn1Object = r, this.isExplicit ? (this.hV = this.asn1Object.getEncodedHex(), this.hTLV = null, this.isModified = !0) : (this.hV = null, this.hTLV = r.getEncodedHex(), this.hTLV = this.hTLV.replace(/^../, t), this.isModified = !1)
                    }, this.getFreshValueHex = function() {
                        return this.hV
                    }, this.setByParam = function(e) {
                        null != e.tag && (this.hT = e.tag), null != e.explicit && (this.isExplicit = e.explicit), null != e.tage && (this.hT = e.tage, this.isExplicit = !0), null != e.tagi && (this.hT = e.tagi, this.isExplicit = !1), null != e.obj && (e.obj instanceof t.ASN1Object ? (this.asn1Object = e.obj, this.setASN1Object(this.isExplicit, this.hT, this.asn1Object)) : "object" == typeof e.obj && (this.asn1Object = t.ASN1Util.newObject(e.obj), this.setASN1Object(this.isExplicit, this.hT, this.asn1Object)))
                    }, null != e && this.setByParam(e)
                }, We(we.asn1.DERTaggedObject, we.asn1.ASN1Object);
                var we, be, Ee, xe = new function() {};

                function Ae(e) {
                    for (var t = "", r = 0; r < e.length; r++) {
                        var i = e[r].toString(16);
                        1 == i.length && (i = "0" + i), t += i
                    }
                    return t
                }

                function ke(e) {
                    return Ae(function(e) {
                        for (var t = new Array, r = 0; r < e.length; r++) t[r] = e.charCodeAt(r);
                        return t
                    }(e))
                }

                function Pe(e) {
                    return (e = (e = e.replace(/\=/g, "")).replace(/\+/g, "-")).replace(/\//g, "_")
                }

                function Ce(e) {
                    return e.length % 4 == 2 ? e += "==" : e.length % 4 == 3 && (e += "="), (e = e.replace(/-/g, "+")).replace(/_/g, "/")
                }

                function Te(e) {
                    return e.length % 2 == 1 && (e = "0" + e), Pe(R(e))
                }

                function Ie(e) {
                    return D(Ce(e))
                }

                function Re(e) {
                    return Oe(Ke(e))
                }

                function De(e) {
                    return decodeURIComponent(je(e))
                }

                function Ne(e) {
                    for (var t = "", r = 0; r < e.length - 1; r += 2) t += String.fromCharCode(parseInt(e.substr(r, 2), 16));
                    return t
                }

                function Be(e) {
                    for (var t = "", r = 0; r < e.length; r++) t += ("0" + e.charCodeAt(r).toString(16)).slice(-2);
                    return t
                }

                function He(e, t) {
                    return "-----BEGIN " + t + "-----\r\n" + function(e) {
                        var t = function(e) {
                            return R(e)
                        }(e).replace(/(.{64})/g, "$1\r\n");
                        return t.replace(/\r\n$/, "")
                    }(e) + "\r\n-----END " + t + "-----\r\n"
                }

                function Ue(e, t) {
                    if (-1 == e.indexOf("-----BEGIN ")) throw "can't find PEM header: " + t;
                    return function(e) {
                        return D(e.replace(/[^0-9A-Za-z\/+=]*/g, ""))
                    }(e = void 0 !== t ? (e = e.replace(new RegExp("^[^]*-----BEGIN " + t + "-----"), "")).replace(new RegExp("-----END " + t + "-----[^]*$"), "") : (e = e.replace(/^[^]*-----BEGIN [^-]+-----/, "")).replace(/-----END [^-]+-----[^]*$/, ""))
                }

                function Oe(e) {
                    return e.replace(/%/g, "")
                }

                function je(e) {
                    return e.replace(/(..)/g, "%$1")
                }

                function Me(e) {
                    var t = "malformed hex value";
                    if (!e.match(/^([0-9A-Fa-f][0-9A-Fa-f]){1,}$/)) throw t;
                    if (8 != e.length) return 32 == e.length ? function(e) {
                        if (!e.match(/^[0-9A-Fa-f]{32}$/)) throw "malformed IPv6 address octet";
                        for (var t = (e = e.toLowerCase()).match(/.{1,4}/g), r = 0; r < 8; r++) t[r] = t[r].replace(/^0+/, ""), "" == t[r] && (t[r] = "0");
                        var i = (e = ":" + t.join(":") + ":").match(/:(0:){2,}/g);
                        if (null === i) return e.slice(1, -1);
                        var n = "";
                        for (r = 0; r < i.length; r++) i[r].length > n.length && (n = i[r]);
                        return (e = e.replace(n, "::")).slice(1, -1)
                    }(e) : e;
                    try {
                        return parseInt(e.substr(0, 2), 16) + "." + parseInt(e.substr(2, 2), 16) + "." + parseInt(e.substr(4, 2), 16) + "." + parseInt(e.substr(6, 2), 16)
                    } catch (e) {
                        throw t
                    }
                }

                function Ve(e) {
                    var t = e.match(/.{4}/g).map((function(e) {
                        var t = parseInt(e.substr(0, 2), 16),
                            r = parseInt(e.substr(2), 16);
                        if (0 == t & r < 128) return String.fromCharCode(r);
                        if (t < 8) {
                            var i = 128 | 63 & r;
                            return De((192 | (7 & t) << 3 | (192 & r) >> 6).toString(16) + i.toString(16))
                        }
                        i = 128 | (15 & t) << 2 | (192 & r) >> 6;
                        var n = 128 | 63 & r;
                        return De((224 | (240 & t) >> 4).toString(16) + i.toString(16) + n.toString(16))
                    }));
                    return t.join("")
                }

                function Ke(e) {
                    for (var t = encodeURIComponent(e), r = "", i = 0; i < t.length; i++) "%" == t[i] ? (r += t.substr(i, 3), i += 2) : r = r + "%" + ke(t[i]);
                    return r
                }

                function qe(e) {
                    return !(e.length % 2 != 0 || !e.match(/^[0-9a-f]+$/) && !e.match(/^[0-9A-F]+$/))
                }

                function Le(e) {
                    return e.length % 2 == 1 ? "0" + e : e.substr(0, 1) > "7" ? "00" + e : e
                }
                xe.getLblen = function(e, t) {
                    if ("8" != e.substr(t + 2, 1)) return 1;
                    var r = parseInt(e.substr(t + 3, 1));
                    return 0 == r ? -1 : 0 < r && r < 10 ? r + 1 : -2
                }, xe.getL = function(e, t) {
                    var r = xe.getLblen(e, t);
                    return r < 1 ? "" : e.substr(t + 2, 2 * r)
                }, xe.getVblen = function(e, t) {
                    var r;
                    return "" == (r = xe.getL(e, t)) ? -1 : ("8" === r.substr(0, 1) ? new N(r.substr(2), 16) : new N(r, 16)).intValue()
                }, xe.getVidx = function(e, t) {
                    var r = xe.getLblen(e, t);
                    return r < 0 ? r : t + 2 * (r + 1)
                }, xe.getV = function(e, t) {
                    var r = xe.getVidx(e, t),
                        i = xe.getVblen(e, t);
                    return e.substr(r, 2 * i)
                }, xe.getTLV = function(e, t) {
                    return e.substr(t, 2) + xe.getL(e, t) + xe.getV(e, t)
                }, xe.getTLVblen = function(e, t) {
                    return 2 + 2 * xe.getLblen(e, t) + 2 * xe.getVblen(e, t)
                }, xe.getNextSiblingIdx = function(e, t) {
                    return xe.getVidx(e, t) + 2 * xe.getVblen(e, t)
                }, xe.getChildIdx = function(e, t) {
                    var r, i, n, s = xe,
                        o = [];
                    r = s.getVidx(e, t), i = 2 * s.getVblen(e, t), "03" == e.substr(t, 2) && (r += 2, i -= 2), n = 0;
                    for (var a = r; n <= i;) {
                        var u = s.getTLVblen(e, a);
                        if ((n += u) <= i && o.push(a), a += u, n >= i) break
                    }
                    return o
                }, xe.getNthChildIdx = function(e, t, r) {
                    return xe.getChildIdx(e, t)[r]
                }, xe.getIdxbyList = function(e, t, r, i) {
                    var n, s, o = xe;
                    return 0 == r.length ? void 0 !== i && e.substr(t, 2) !== i ? -1 : t : (n = r.shift()) >= (s = o.getChildIdx(e, t)).length ? -1 : o.getIdxbyList(e, s[n], r, i)
                }, xe.getIdxbyListEx = function(e, t, r, i) {
                    var n, s, o = xe;
                    if (0 == r.length) return void 0 !== i && e.substr(t, 2) !== i ? -1 : t;
                    n = r.shift(), s = o.getChildIdx(e, t);
                    for (var a = 0, u = 0; u < s.length; u++) {
                        var h = e.substr(s[u], 2);
                        if ("number" == typeof n && !o.isContextTag(h) && a == n || "string" == typeof n && o.isContextTag(h, n)) return o.getIdxbyListEx(e, s[u], r, i);
                        o.isContextTag(h) || a++
                    }
                    return -1
                }, xe.getTLVbyList = function(e, t, r, i) {
                    var n = xe,
                        s = n.getIdxbyList(e, t, r, i);
                    return -1 == s || s >= e.length ? null : n.getTLV(e, s)
                }, xe.getTLVbyListEx = function(e, t, r, i) {
                    var n = xe,
                        s = n.getIdxbyListEx(e, t, r, i);
                    return -1 == s ? null : n.getTLV(e, s)
                }, xe.getVbyList = function(e, t, r, i, n) {
                    var s, o, a = xe;
                    return -1 == (s = a.getIdxbyList(e, t, r, i)) || s >= e.length ? null : (o = a.getV(e, s), !0 === n && (o = o.substr(2)), o)
                }, xe.getVbyListEx = function(e, t, r, i, n) {
                    var s, o, a = xe;
                    return -1 == (s = a.getIdxbyListEx(e, t, r, i)) ? null : (o = a.getV(e, s), "03" == e.substr(s, 2) && !1 !== n && (o = o.substr(2)), o)
                }, xe.getInt = function(e, t, r) {
                    null == r && (r = -1);
                    try {
                        var i = e.substr(t, 2);
                        if ("02" != i && "03" != i) return r;
                        var n = xe.getV(e, t);
                        return "02" == i ? parseInt(n, 16) : function(e) {
                            try {
                                var t = e.substr(0, 2);
                                if ("00" == t) return parseInt(e.substr(2), 16);
                                var r = parseInt(t, 16),
                                    i = e.substr(2),
                                    n = parseInt(i, 16).toString(2);
                                return "0" == n && (n = "00000000"), n = n.slice(0, 0 - r), parseInt(n, 2)
                            } catch (e) {
                                return -1
                            }
                        }(n)
                    } catch (e) {
                        return r
                    }
                }, xe.getOID = function(e, t, r) {
                    null == r && (r = null);
                    try {
                        return "06" != e.substr(t, 2) ? r : function(e) {
                            if (!qe(e)) return null;
                            try {
                                var t = [],
                                    r = e.substr(0, 2),
                                    i = parseInt(r, 16);
                                t[0] = new String(Math.floor(i / 40)), t[1] = new String(i % 40);
                                for (var n = e.substr(2), s = [], o = 0; o < n.length / 2; o++) s.push(parseInt(n.substr(2 * o, 2), 16));
                                var a = [],
                                    u = "";
                                for (o = 0; o < s.length; o++) 128 & s[o] ? u += Je((127 & s[o]).toString(2), 7) : (u += Je((127 & s[o]).toString(2), 7), a.push(new String(parseInt(u, 2))), u = "");
                                var h = t.join(".");
                                return a.length > 0 && (h = h + "." + a.join(".")), h
                            } catch (e) {
                                return null
                            }
                        }(xe.getV(e, t))
                    } catch (e) {
                        return r
                    }
                }, xe.getOIDName = function(e, t, r) {
                    null == r && (r = null);
                    try {
                        var i = xe.getOID(e, t, r);
                        if (i == r) return r;
                        var n = we.asn1.x509.OID.oid2name(i);
                        return "" == n ? i : n
                    } catch (e) {
                        return r
                    }
                }, xe.getString = function(e, t, r) {
                    null == r && (r = null);
                    try {
                        return Ne(xe.getV(e, t))
                    } catch (e) {
                        return r
                    }
                }, xe.hextooidstr = function(e) {
                    var t = function(e, t) {
                            return e.length >= t ? e : new Array(t - e.length + 1).join("0") + e
                        },
                        r = [],
                        i = e.substr(0, 2),
                        n = parseInt(i, 16);
                    r[0] = new String(Math.floor(n / 40)), r[1] = new String(n % 40);
                    for (var s = e.substr(2), o = [], a = 0; a < s.length / 2; a++) o.push(parseInt(s.substr(2 * a, 2), 16));
                    var u = [],
                        h = "";
                    for (a = 0; a < o.length; a++) 128 & o[a] ? h += t((127 & o[a]).toString(2), 7) : (h += t((127 & o[a]).toString(2), 7), u.push(new String(parseInt(h, 2))), h = "");
                    var c = r.join(".");
                    return u.length > 0 && (c = c + "." + u.join(".")), c
                }, xe.dump = function(e, t, r, i) {
                    var n = xe,
                        s = n.getV,
                        o = n.dump,
                        a = n.getChildIdx,
                        u = e;
                    e instanceof we.asn1.ASN1Object && (u = e.getEncodedHex());
                    var h = function(e, t) {
                        return e.length <= 2 * t ? e : e.substr(0, t) + "..(total " + e.length / 2 + "bytes).." + e.substr(e.length - t, t)
                    };
                    void 0 === t && (t = {
                        ommit_long_octet: 32
                    }), void 0 === r && (r = 0), void 0 === i && (i = "");
                    var c, l = t.ommit_long_octet;
                    if ("01" == (c = u.substr(r, 2))) return "00" == (d = s(u, r)) ? i + "BOOLEAN FALSE\n" : i + "BOOLEAN TRUE\n";
                    if ("02" == c) return i + "INTEGER " + h(d = s(u, r), l) + "\n";
                    if ("03" == c) {
                        var d = s(u, r);
                        return n.isASN1HEX(d.substr(2)) ? (F = i + "BITSTRING, encapsulates\n") + o(d.substr(2), t, 0, i + "  ") : i + "BITSTRING " + h(d, l) + "\n"
                    }
                    if ("04" == c) return d = s(u, r), n.isASN1HEX(d) ? (F = i + "OCTETSTRING, encapsulates\n") + o(d, t, 0, i + "  ") : i + "OCTETSTRING " + h(d, l) + "\n";
                    if ("05" == c) return i + "NULL\n";
                    if ("06" == c) {
                        var g = s(u, r),
                            p = we.asn1.ASN1Util.oidHexToInt(g),
                            f = we.asn1.x509.OID.oid2name(p),
                            v = p.replace(/\./g, " ");
                        return "" != f ? i + "ObjectIdentifier " + f + " (" + v + ")\n" : i + "ObjectIdentifier (" + v + ")\n"
                    }
                    if ("0a" == c) return i + "ENUMERATED " + parseInt(s(u, r)) + "\n";
                    if ("0c" == c) return i + "UTF8String '" + De(s(u, r)) + "'\n";
                    if ("13" == c) return i + "PrintableString '" + De(s(u, r)) + "'\n";
                    if ("14" == c) return i + "TeletexString '" + De(s(u, r)) + "'\n";
                    if ("16" == c) return i + "IA5String '" + De(s(u, r)) + "'\n";
                    if ("17" == c) return i + "UTCTime " + De(s(u, r)) + "\n";
                    if ("18" == c) return i + "GeneralizedTime " + De(s(u, r)) + "\n";
                    if ("1a" == c) return i + "VisualString '" + De(s(u, r)) + "'\n";
                    if ("1e" == c) return i + "BMPString '" + Ve(s(u, r)) + "'\n";
                    if ("30" == c) {
                        if ("3000" == u.substr(r, 4)) return i + "SEQUENCE {}\n";
                        F = i + "SEQUENCE\n";
                        var m = t;
                        if ((2 == (S = a(u, r)).length || 3 == S.length) && "06" == u.substr(S[0], 2) && "04" == u.substr(S[S.length - 1], 2)) {
                            f = n.oidname(s(u, S[0]));
                            var y = JSON.parse(JSON.stringify(t));
                            y.x509ExtName = f, m = y
                        }
                        for (var _ = 0; _ < S.length; _++) F += o(u, m, S[_], i + "  ");
                        return F
                    }
                    if ("31" == c) {
                        F = i + "SET\n";
                        var S = a(u, r);
                        for (_ = 0; _ < S.length; _++) F += o(u, t, S[_], i + "  ");
                        return F
                    }
                    if (0 != (128 & (c = parseInt(c, 16)))) {
                        var F, w = 31 & c;
                        if (0 != (32 & c)) {
                            for (F = i + "[" + w + "]\n", S = a(u, r), _ = 0; _ < S.length; _++) F += o(u, t, S[_], i + "  ");
                            return F
                        }
                        return d = s(u, r), xe.isASN1HEX(d) ? (F = i + "[" + w + "]\n") + o(d, t, 0, i + "  ") : (("68747470" == d.substr(0, 8) || "subjectAltName" === t.x509ExtName && 2 == w) && (d = De(d)), i + "[" + w + "] " + d + "\n")
                    }
                    return i + "UNKNOWN(" + c + ") " + s(u, r) + "\n"
                }, xe.isContextTag = function(e, t) {
                    var r, i;
                    e = e.toLowerCase();
                    try {
                        r = parseInt(e, 16)
                    } catch (e) {
                        return -1
                    }
                    if (void 0 === t) return 128 == (192 & r);
                    try {
                        return null != t.match(/^\[[0-9]+\]$/) && !((i = parseInt(t.substr(1, t.length - 1), 10)) > 31) && 128 == (192 & r) && (31 & r) == i
                    } catch (e) {
                        return !1
                    }
                }, xe.isASN1HEX = function(e) {
                    var t = xe;
                    if (e.length % 2 == 1) return !1;
                    var r = t.getVblen(e, 0),
                        i = e.substr(0, 2),
                        n = t.getL(e, 0);
                    return e.length - i.length - n.length == 2 * r
                }, xe.checkStrictDER = function(e, t, r, i, n) {
                    var s = xe;
                    if (void 0 === r) {
                        if ("string" != typeof e) throw new Error("not hex string");
                        if (e = e.toLowerCase(), !we.lang.String.isHex(e)) throw new Error("not hex string");
                        r = e.length, n = (i = e.length / 2) < 128 ? 1 : Math.ceil(i.toString(16)) + 1
                    }
                    if (s.getL(e, t).length > 2 * n) throw new Error("L of TLV too long: idx=" + t);
                    var o = s.getVblen(e, t);
                    if (o > i) throw new Error("value of L too long than hex: idx=" + t);
                    var a = s.getTLV(e, t),
                        u = a.length - 2 - s.getL(e, t).length;
                    if (u !== 2 * o) throw new Error("V string length and L's value not the same:" + u + "/" + 2 * o);
                    if (0 === t && e.length != a.length) throw new Error("total length and TLV length unmatch:" + e.length + "!=" + a.length);
                    var h = e.substr(t, 2);
                    if ("02" === h) {
                        var c = s.getVidx(e, t);
                        if ("00" == e.substr(c, 2) && e.charCodeAt(c + 2) < 56) throw new Error("not least zeros for DER INTEGER")
                    }
                    if (32 & parseInt(h, 16)) {
                        for (var l = s.getVblen(e, t), d = 0, g = s.getChildIdx(e, t), p = 0; p < g.length; p++) d += s.getTLV(e, g[p]).length, s.checkStrictDER(e, g[p], r, i, n);
                        if (2 * l != d) throw new Error("sum of children's TLV length and L unmatch: " + 2 * l + "!=" + d)
                    }
                }, xe.oidname = function(e) {
                    var t = we.asn1;
                    we.lang.String.isHex(e) && (e = t.ASN1Util.oidHexToInt(e));
                    var r = t.x509.OID.oid2name(e);
                    return "" === r && (r = e), r
                }, void 0 !== we && we || (we = {}), void 0 !== we.lang && we.lang || (we.lang = {}), we.lang.String = function() {}, "function" == typeof Buffer ? (be = function(e) {
                    return Pe(Buffer.from(e, "utf8").toString("base64"))
                }, Ee = function(e) {
                    return Buffer.from(Ce(e), "base64").toString("utf8")
                }) : (be = function(e) {
                    return Te(Oe(Ke(e)))
                }, Ee = function(e) {
                    return decodeURIComponent(je(Ie(e)))
                }), we.lang.String.isInteger = function(e) {
                    return !!e.match(/^[0-9]+$/) || !!e.match(/^-[0-9]+$/)
                }, we.lang.String.isHex = function(e) {
                    return qe(e)
                }, we.lang.String.isBase64 = function(e) {
                    return !(!(e = e.replace(/\s+/g, "")).match(/^[0-9A-Za-z+\/]+={0,3}$/) || e.length % 4 != 0)
                }, we.lang.String.isBase64URL = function(e) {
                    return !e.match(/[+/=]/) && (e = Ce(e), we.lang.String.isBase64(e))
                }, we.lang.String.isIntegerArray = function(e) {
                    return !!(e = e.replace(/\s+/g, "")).match(/^\[[0-9,]+\]$/)
                }, we.lang.String.isPrintable = function(e) {
                    return null !== e.match(/^[0-9A-Za-z '()+,-./:=?]*$/)
                }, we.lang.String.isIA5 = function(e) {
                    return null !== e.match(/^[\x20-\x21\x23-\x7f]*$/)
                }, we.lang.String.isMail = function(e) {
                    return null !== e.match(/^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/)
                };
                var Je = function(e, t, r) {
                    return null == r && (r = "0"), e.length >= t ? e : new Array(t - e.length + 1).join(r) + e
                };

                function We(e, t) {
                    var r = function() {};
                    r.prototype = t.prototype, e.prototype = new r, e.prototype.constructor = e, e.superclass = t.prototype, t.prototype.constructor == Object.prototype.constructor && (t.prototype.constructor = t)
                }
                void 0 !== we && we || (we = {}), void 0 !== we.crypto && we.crypto || (we.crypto = {}), we.crypto.Util = new function() {
                    this.DIGESTINFOHEAD = {
                        sha1: "3021300906052b0e03021a05000414",
                        sha224: "302d300d06096086480165030402040500041c",
                        sha256: "3031300d060960864801650304020105000420",
                        sha384: "3041300d060960864801650304020205000430",
                        sha512: "3051300d060960864801650304020305000440",
                        md2: "3020300c06082a864886f70d020205000410",
                        md5: "3020300c06082a864886f70d020505000410",
                        ripemd160: "3021300906052b2403020105000414"
                    }, this.DEFAULTPROVIDER = {
                        md5: "cryptojs",
                        sha1: "cryptojs",
                        sha224: "cryptojs",
                        sha256: "cryptojs",
                        sha384: "cryptojs",
                        sha512: "cryptojs",
                        ripemd160: "cryptojs",
                        hmacmd5: "cryptojs",
                        hmacsha1: "cryptojs",
                        hmacsha224: "cryptojs",
                        hmacsha256: "cryptojs",
                        hmacsha384: "cryptojs",
                        hmacsha512: "cryptojs",
                        hmacripemd160: "cryptojs",
                        MD5withRSA: "cryptojs/jsrsa",
                        SHA1withRSA: "cryptojs/jsrsa",
                        SHA224withRSA: "cryptojs/jsrsa",
                        SHA256withRSA: "cryptojs/jsrsa",
                        SHA384withRSA: "cryptojs/jsrsa",
                        SHA512withRSA: "cryptojs/jsrsa",
                        RIPEMD160withRSA: "cryptojs/jsrsa",
                        MD5withECDSA: "cryptojs/jsrsa",
                        SHA1withECDSA: "cryptojs/jsrsa",
                        SHA224withECDSA: "cryptojs/jsrsa",
                        SHA256withECDSA: "cryptojs/jsrsa",
                        SHA384withECDSA: "cryptojs/jsrsa",
                        SHA512withECDSA: "cryptojs/jsrsa",
                        RIPEMD160withECDSA: "cryptojs/jsrsa",
                        SHA1withDSA: "cryptojs/jsrsa",
                        SHA224withDSA: "cryptojs/jsrsa",
                        SHA256withDSA: "cryptojs/jsrsa",
                        MD5withRSAandMGF1: "cryptojs/jsrsa",
                        SHAwithRSAandMGF1: "cryptojs/jsrsa",
                        SHA1withRSAandMGF1: "cryptojs/jsrsa",
                        SHA224withRSAandMGF1: "cryptojs/jsrsa",
                        SHA256withRSAandMGF1: "cryptojs/jsrsa",
                        SHA384withRSAandMGF1: "cryptojs/jsrsa",
                        SHA512withRSAandMGF1: "cryptojs/jsrsa",
                        RIPEMD160withRSAandMGF1: "cryptojs/jsrsa"
                    }, this.CRYPTOJSMESSAGEDIGESTNAME = {
                        md5: P.algo.MD5,
                        sha1: P.algo.SHA1,
                        sha224: P.algo.SHA224,
                        sha256: P.algo.SHA256,
                        sha384: P.algo.SHA384,
                        sha512: P.algo.SHA512,
                        ripemd160: P.algo.RIPEMD160
                    }, this.getDigestInfoHex = function(e, t) {
                        if (void 0 === this.DIGESTINFOHEAD[t]) throw "alg not supported in Util.DIGESTINFOHEAD: " + t;
                        return this.DIGESTINFOHEAD[t] + e
                    }, this.getPaddedDigestInfoHex = function(e, t, r) {
                        var i = this.getDigestInfoHex(e, t),
                            n = r / 4;
                        if (i.length + 22 > n) throw "key is too short for SigAlg: keylen=" + r + "," + t;
                        for (var s = "00" + i, o = "", a = n - 4 - s.length, u = 0; u < a; u += 2) o += "ff";
                        return "0001" + o + s
                    }, this.hashString = function(e, t) {
                        return new we.crypto.MessageDigest({
                            alg: t
                        }).digestString(e)
                    }, this.hashHex = function(e, t) {
                        return new we.crypto.MessageDigest({
                            alg: t
                        }).digestHex(e)
                    }, this.sha1 = function(e) {
                        return this.hashString(e, "sha1")
                    }, this.sha256 = function(e) {
                        return this.hashString(e, "sha256")
                    }, this.sha256Hex = function(e) {
                        return this.hashHex(e, "sha256")
                    }, this.sha512 = function(e) {
                        return this.hashString(e, "sha512")
                    }, this.sha512Hex = function(e) {
                        return this.hashHex(e, "sha512")
                    }, this.isKey = function(e) {
                        return e instanceof me || e instanceof we.crypto.DSA || e instanceof we.crypto.ECDSA
                    }
                }, we.crypto.Util.md5 = function(e) {
                    return new we.crypto.MessageDigest({
                        alg: "md5",
                        prov: "cryptojs"
                    }).digestString(e)
                }, we.crypto.Util.ripemd160 = function(e) {
                    return new we.crypto.MessageDigest({
                        alg: "ripemd160",
                        prov: "cryptojs"
                    }).digestString(e)
                }, we.crypto.Util.SECURERANDOMGEN = new pe, we.crypto.Util.getRandomHexOfNbytes = function(e) {
                    var t = new Array(e);
                    return we.crypto.Util.SECURERANDOMGEN.nextBytes(t), Ae(t)
                }, we.crypto.Util.getRandomBigIntegerOfNbytes = function(e) {
                    return new N(we.crypto.Util.getRandomHexOfNbytes(e), 16)
                }, we.crypto.Util.getRandomHexOfNbits = function(e) {
                    var t = e % 8,
                        r = new Array((e - t) / 8 + 1);
                    return we.crypto.Util.SECURERANDOMGEN.nextBytes(r), r[0] = (255 << t & 255 ^ 255) & r[0], Ae(r)
                }, we.crypto.Util.getRandomBigIntegerOfNbits = function(e) {
                    return new N(we.crypto.Util.getRandomHexOfNbits(e), 16)
                }, we.crypto.Util.getRandomBigIntegerZeroToMax = function(e) {
                    for (var t = e.bitLength();;) {
                        var r = we.crypto.Util.getRandomBigIntegerOfNbits(t);
                        if (-1 != e.compareTo(r)) return r
                    }
                }, we.crypto.Util.getRandomBigIntegerMinToMax = function(e, t) {
                    var r = e.compareTo(t);
                    if (1 == r) throw "biMin is greater than biMax";
                    if (0 == r) return e;
                    var i = t.subtract(e);
                    return we.crypto.Util.getRandomBigIntegerZeroToMax(i).add(e)
                }, we.crypto.MessageDigest = function(e) {
                    this.setAlgAndProvider = function(e, t) {
                        if (null !== (e = we.crypto.MessageDigest.getCanonicalAlgName(e)) && void 0 === t && (t = we.crypto.Util.DEFAULTPROVIDER[e]), -1 != ":md5:sha1:sha224:sha256:sha384:sha512:ripemd160:".indexOf(e) && "cryptojs" == t) {
                            try {
                                this.md = we.crypto.Util.CRYPTOJSMESSAGEDIGESTNAME[e].create()
                            } catch (t) {
                                throw "setAlgAndProvider hash alg set fail alg=" + e + "/" + t
                            }
                            this.updateString = function(e) {
                                this.md.update(e)
                            }, this.updateHex = function(e) {
                                var t = P.enc.Hex.parse(e);
                                this.md.update(t)
                            }, this.digest = function() {
                                return this.md.finalize().toString(P.enc.Hex)
                            }, this.digestString = function(e) {
                                return this.updateString(e), this.digest()
                            }, this.digestHex = function(e) {
                                return this.updateHex(e), this.digest()
                            }
                        }
                        if (-1 != ":sha256:".indexOf(e) && "sjcl" == t) {
                            try {
                                this.md = new sjcl.hash.sha256
                            } catch (t) {
                                throw "setAlgAndProvider hash alg set fail alg=" + e + "/" + t
                            }
                            this.updateString = function(e) {
                                this.md.update(e)
                            }, this.updateHex = function(e) {
                                var t = sjcl.codec.hex.toBits(e);
                                this.md.update(t)
                            }, this.digest = function() {
                                var e = this.md.finalize();
                                return sjcl.codec.hex.fromBits(e)
                            }, this.digestString = function(e) {
                                return this.updateString(e), this.digest()
                            }, this.digestHex = function(e) {
                                return this.updateHex(e), this.digest()
                            }
                        }
                    }, this.updateString = function(e) {
                        throw "updateString(str) not supported for this alg/prov: " + this.algName + "/" + this.provName
                    }, this.updateHex = function(e) {
                        throw "updateHex(hex) not supported for this alg/prov: " + this.algName + "/" + this.provName
                    }, this.digest = function() {
                        throw "digest() not supported for this alg/prov: " + this.algName + "/" + this.provName
                    }, this.digestString = function(e) {
                        throw "digestString(str) not supported for this alg/prov: " + this.algName + "/" + this.provName
                    }, this.digestHex = function(e) {
                        throw "digestHex(hex) not supported for this alg/prov: " + this.algName + "/" + this.provName
                    }, void 0 !== e && void 0 !== e.alg && (this.algName = e.alg, void 0 === e.prov && (this.provName = we.crypto.Util.DEFAULTPROVIDER[this.algName]), this.setAlgAndProvider(this.algName, this.provName))
                }, we.crypto.MessageDigest.getCanonicalAlgName = function(e) {
                    return "string" == typeof e && (e = (e = e.toLowerCase()).replace(/-/, "")), e
                }, we.crypto.MessageDigest.getHashLength = function(e) {
                    var t = we.crypto.MessageDigest,
                        r = t.getCanonicalAlgName(e);
                    if (void 0 === t.HASHLENGTH[r]) throw "not supported algorithm: " + e;
                    return t.HASHLENGTH[r]
                }, we.crypto.MessageDigest.HASHLENGTH = {
                    md5: 16,
                    sha1: 20,
                    sha224: 28,
                    sha256: 32,
                    sha384: 48,
                    sha512: 64,
                    ripemd160: 20
                }, we.crypto.Mac = function(e) {
                    this.setAlgAndProvider = function(e, t) {
                        if (null == (e = e.toLowerCase()) && (e = "hmacsha1"), "hmac" != (e = e.toLowerCase()).substr(0, 4)) throw "setAlgAndProvider unsupported HMAC alg: " + e;
                        void 0 === t && (t = we.crypto.Util.DEFAULTPROVIDER[e]), this.algProv = e + "/" + t;
                        var r = e.substr(4);
                        if (-1 != ":md5:sha1:sha224:sha256:sha384:sha512:ripemd160:".indexOf(r) && "cryptojs" == t) {
                            try {
                                var i = we.crypto.Util.CRYPTOJSMESSAGEDIGESTNAME[r];
                                this.mac = P.algo.HMAC.create(i, this.pass)
                            } catch (e) {
                                throw "setAlgAndProvider hash alg set fail hashAlg=" + r + "/" + e
                            }
                            this.updateString = function(e) {
                                this.mac.update(e)
                            }, this.updateHex = function(e) {
                                var t = P.enc.Hex.parse(e);
                                this.mac.update(t)
                            }, this.doFinal = function() {
                                return this.mac.finalize().toString(P.enc.Hex)
                            }, this.doFinalString = function(e) {
                                return this.updateString(e), this.doFinal()
                            }, this.doFinalHex = function(e) {
                                return this.updateHex(e), this.doFinal()
                            }
                        }
                    }, this.updateString = function(e) {
                        throw "updateString(str) not supported for this alg/prov: " + this.algProv
                    }, this.updateHex = function(e) {
                        throw "updateHex(hex) not supported for this alg/prov: " + this.algProv
                    }, this.doFinal = function() {
                        throw "digest() not supported for this alg/prov: " + this.algProv
                    }, this.doFinalString = function(e) {
                        throw "digestString(str) not supported for this alg/prov: " + this.algProv
                    }, this.doFinalHex = function(e) {
                        throw "digestHex(hex) not supported for this alg/prov: " + this.algProv
                    }, this.setPassword = function(e) {
                        if ("string" == typeof e) {
                            var t = e;
                            return e.length % 2 != 1 && e.match(/^[0-9A-Fa-f]+$/) || (t = Be(e)), void(this.pass = P.enc.Hex.parse(t))
                        }
                        if ("object" != typeof e) throw "KJUR.crypto.Mac unsupported password type: " + e;
                        if (t = null, void 0 !== e.hex) {
                            if (e.hex.length % 2 != 0 || !e.hex.match(/^[0-9A-Fa-f]+$/)) throw "Mac: wrong hex password: " + e.hex;
                            t = e.hex
                        }
                        if (void 0 !== e.utf8 && (t = Re(e.utf8)), void 0 !== e.rstr && (t = Be(e.rstr)), void 0 !== e.b64 && (t = D(e.b64)), void 0 !== e.b64u && (t = Ie(e.b64u)), null == t) throw "KJUR.crypto.Mac unsupported password type: " + e;
                        this.pass = P.enc.Hex.parse(t)
                    }, void 0 !== e && (void 0 !== e.pass && this.setPassword(e.pass), void 0 !== e.alg && (this.algName = e.alg, void 0 === e.prov && (this.provName = we.crypto.Util.DEFAULTPROVIDER[this.algName]), this.setAlgAndProvider(this.algName, this.provName)))
                }, we.crypto.Signature = function(e) {
                    var t = null;
                    if (this._setAlgNames = function() {
                            var e = this.algName.match(/^(.+)with(.+)$/);
                            e && (this.mdAlgName = e[1].toLowerCase(), this.pubkeyAlgName = e[2].toLowerCase(), "rsaandmgf1" == this.pubkeyAlgName && "sha" == this.mdAlgName && (this.mdAlgName = "sha1"))
                        }, this._zeroPaddingOfSignature = function(e, t) {
                            for (var r = "", i = t / 4 - e.length, n = 0; n < i; n++) r += "0";
                            return r + e
                        }, this.setAlgAndProvider = function(e, t) {
                            if (this._setAlgNames(), "cryptojs/jsrsa" != t) throw new Error("provider not supported: " + t);
                            if (-1 != ":md5:sha1:sha224:sha256:sha384:sha512:ripemd160:".indexOf(this.mdAlgName)) {
                                try {
                                    this.md = new we.crypto.MessageDigest({
                                        alg: this.mdAlgName
                                    })
                                } catch (e) {
                                    throw new Error("setAlgAndProvider hash alg set fail alg=" + this.mdAlgName + "/" + e)
                                }
                                this.init = function(e, t) {
                                    var r = null;
                                    try {
                                        r = void 0 === t ? ze.getKey(e) : ze.getKey(e, t)
                                    } catch (e) {
                                        throw "init failed:" + e
                                    }
                                    if (!0 === r.isPrivate) this.prvKey = r, this.state = "SIGN";
                                    else {
                                        if (!0 !== r.isPublic) throw "init failed.:" + r;
                                        this.pubKey = r, this.state = "VERIFY"
                                    }
                                }, this.updateString = function(e) {
                                    this.md.updateString(e)
                                }, this.updateHex = function(e) {
                                    this.md.updateHex(e)
                                }, this.sign = function() {
                                    if (this.sHashHex = this.md.digest(), void 0 === this.prvKey && void 0 !== this.ecprvhex && void 0 !== this.eccurvename && void 0 !== we.crypto.ECDSA && (this.prvKey = new we.crypto.ECDSA({
                                            curve: this.eccurvename,
                                            prv: this.ecprvhex
                                        })), this.prvKey instanceof me && "rsaandmgf1" === this.pubkeyAlgName) this.hSign = this.prvKey.signWithMessageHashPSS(this.sHashHex, this.mdAlgName, this.pssSaltLen);
                                    else if (this.prvKey instanceof me && "rsa" === this.pubkeyAlgName) this.hSign = this.prvKey.signWithMessageHash(this.sHashHex, this.mdAlgName);
                                    else if (this.prvKey instanceof we.crypto.ECDSA) this.hSign = this.prvKey.signWithMessageHash(this.sHashHex);
                                    else {
                                        if (!(this.prvKey instanceof we.crypto.DSA)) throw "Signature: unsupported private key alg: " + this.pubkeyAlgName;
                                        this.hSign = this.prvKey.signWithMessageHash(this.sHashHex)
                                    }
                                    return this.hSign
                                }, this.signString = function(e) {
                                    return this.updateString(e), this.sign()
                                }, this.signHex = function(e) {
                                    return this.updateHex(e), this.sign()
                                }, this.verify = function(e) {
                                    if (this.sHashHex = this.md.digest(), void 0 === this.pubKey && void 0 !== this.ecpubhex && void 0 !== this.eccurvename && void 0 !== we.crypto.ECDSA && (this.pubKey = new we.crypto.ECDSA({
                                            curve: this.eccurvename,
                                            pub: this.ecpubhex
                                        })), this.pubKey instanceof me && "rsaandmgf1" === this.pubkeyAlgName) return this.pubKey.verifyWithMessageHashPSS(this.sHashHex, e, this.mdAlgName, this.pssSaltLen);
                                    if (this.pubKey instanceof me && "rsa" === this.pubkeyAlgName) return this.pubKey.verifyWithMessageHash(this.sHashHex, e);
                                    if (void 0 !== we.crypto.ECDSA && this.pubKey instanceof we.crypto.ECDSA) return this.pubKey.verifyWithMessageHash(this.sHashHex, e);
                                    if (void 0 !== we.crypto.DSA && this.pubKey instanceof we.crypto.DSA) return this.pubKey.verifyWithMessageHash(this.sHashHex, e);
                                    throw "Signature: unsupported public key alg: " + this.pubkeyAlgName
                                }
                            }
                        }, this.init = function(e, t) {
                            throw "init(key, pass) not supported for this alg:prov=" + this.algProvName
                        }, this.updateString = function(e) {
                            throw "updateString(str) not supported for this alg:prov=" + this.algProvName
                        }, this.updateHex = function(e) {
                            throw "updateHex(hex) not supported for this alg:prov=" + this.algProvName
                        }, this.sign = function() {
                            throw "sign() not supported for this alg:prov=" + this.algProvName
                        }, this.signString = function(e) {
                            throw "digestString(str) not supported for this alg:prov=" + this.algProvName
                        }, this.signHex = function(e) {
                            throw "digestHex(hex) not supported for this alg:prov=" + this.algProvName
                        }, this.verify = function(e) {
                            throw "verify(hSigVal) not supported for this alg:prov=" + this.algProvName
                        }, this.initParams = e, void 0 !== e && (void 0 !== e.alg && (this.algName = e.alg, void 0 === e.prov ? this.provName = we.crypto.Util.DEFAULTPROVIDER[this.algName] : this.provName = e.prov, this.algProvName = this.algName + ":" + this.provName, this.setAlgAndProvider(this.algName, this.provName), this._setAlgNames()), void 0 !== e.psssaltlen && (this.pssSaltLen = e.psssaltlen), void 0 !== e.prvkeypem)) {
                        if (void 0 !== e.prvkeypas) throw "both prvkeypem and prvkeypas parameters not supported";
                        try {
                            t = ze.getKey(e.prvkeypem), this.init(t)
                        } catch (e) {
                            throw "fatal error to load pem private key: " + e
                        }
                    }
                }, we.crypto.Cipher = function(e) {}, we.crypto.Cipher.encrypt = function(e, t, r) {
                    if (t instanceof me && t.isPublic) {
                        var i = we.crypto.Cipher.getAlgByKeyAndName(t, r);
                        if ("RSA" === i) return t.encrypt(e);
                        if ("RSAOAEP" === i) return t.encryptOAEP(e, "sha1");
                        var n = i.match(/^RSAOAEP(\d+)$/);
                        if (null !== n) return t.encryptOAEP(e, "sha" + n[1]);
                        throw "Cipher.encrypt: unsupported algorithm for RSAKey: " + r
                    }
                    throw "Cipher.encrypt: unsupported key or algorithm"
                }, we.crypto.Cipher.decrypt = function(e, t, r) {
                    if (t instanceof me && t.isPrivate) {
                        var i = we.crypto.Cipher.getAlgByKeyAndName(t, r);
                        if ("RSA" === i) return t.decrypt(e);
                        if ("RSAOAEP" === i) return t.decryptOAEP(e, "sha1");
                        var n = i.match(/^RSAOAEP(\d+)$/);
                        if (null !== n) return t.decryptOAEP(e, "sha" + n[1]);
                        throw "Cipher.decrypt: unsupported algorithm for RSAKey: " + r
                    }
                    throw "Cipher.decrypt: unsupported key or algorithm"
                }, we.crypto.Cipher.getAlgByKeyAndName = function(e, t) {
                    if (e instanceof me) {
                        if (-1 != ":RSA:RSAOAEP:RSAOAEP224:RSAOAEP256:RSAOAEP384:RSAOAEP512:".indexOf(t)) return t;
                        if (null == t) return "RSA";
                        throw "getAlgByKeyAndName: not supported algorithm name for RSAKey: " + t
                    }
                    throw "getAlgByKeyAndName: not supported algorithm name: " + t
                }, we.crypto.OID = new function() {
                    this.oidhex2name = {
                        "2a864886f70d010101": "rsaEncryption",
                        "2a8648ce3d0201": "ecPublicKey",
                        "2a8648ce380401": "dsa",
                        "2a8648ce3d030107": "secp256r1",
                        "2b8104001f": "secp192k1",
                        "2b81040021": "secp224r1",
                        "2b8104000a": "secp256k1",
                        "2b81040023": "secp521r1",
                        "2b81040022": "secp384r1",
                        "2a8648ce380403": "SHA1withDSA",
                        "608648016503040301": "SHA224withDSA",
                        "608648016503040302": "SHA256withDSA"
                    }
                }, void 0 !== we && we || (we = {}), void 0 !== we.crypto && we.crypto || (we.crypto = {}), we.crypto.ECDSA = function(e) {
                    var t = Error,
                        r = N,
                        i = _e,
                        n = we.crypto.ECDSA,
                        s = we.crypto.ECParameterDB,
                        o = n.getName,
                        a = xe,
                        u = a.getVbyListEx,
                        h = a.isASN1HEX,
                        c = new pe;
                    this.type = "EC", this.isPrivate = !1, this.isPublic = !1, this.getBigRandom = function(e) {
                        return new r(e.bitLength(), c).mod(e.subtract(r.ONE)).add(r.ONE)
                    }, this.setNamedCurve = function(e) {
                        this.ecparams = s.getByName(e), this.prvKeyHex = null, this.pubKeyHex = null, this.curveName = e
                    }, this.setPrivateKeyHex = function(e) {
                        this.isPrivate = !0, this.prvKeyHex = e
                    }, this.setPublicKeyHex = function(e) {
                        this.isPublic = !0, this.pubKeyHex = e
                    }, this.getPublicKeyXYHex = function() {
                        var e = this.pubKeyHex;
                        if ("04" !== e.substr(0, 2)) throw "this method supports uncompressed format(04) only";
                        var t = this.ecparams.keylen / 4;
                        if (e.length !== 2 + 2 * t) throw "malformed public key hex length";
                        var r = {};
                        return r.x = e.substr(2, t), r.y = e.substr(2 + t), r
                    }, this.getShortNISTPCurveName = function() {
                        var e = this.curveName;
                        return "secp256r1" === e || "NIST P-256" === e || "P-256" === e || "prime256v1" === e ? "P-256" : "secp384r1" === e || "NIST P-384" === e || "P-384" === e ? "P-384" : null
                    }, this.generateKeyPairHex = function() {
                        var e = this.ecparams.n,
                            t = this.getBigRandom(e),
                            r = this.ecparams.G.multiply(t),
                            i = r.getX().toBigInteger(),
                            n = r.getY().toBigInteger(),
                            s = this.ecparams.keylen / 4,
                            o = ("0000000000" + t.toString(16)).slice(-s),
                            a = "04" + ("0000000000" + i.toString(16)).slice(-s) + ("0000000000" + n.toString(16)).slice(-s);
                        return this.setPrivateKeyHex(o), this.setPublicKeyHex(a), {
                            ecprvhex: o,
                            ecpubhex: a
                        }
                    }, this.signWithMessageHash = function(e) {
                        return this.signHex(e, this.prvKeyHex)
                    }, this.signHex = function(e, t) {
                        var i = new r(t, 16),
                            s = this.ecparams.n,
                            o = new r(e.substring(0, this.ecparams.keylen / 4), 16);
                        do {
                            var a = this.getBigRandom(s),
                                u = this.ecparams.G.multiply(a).getX().toBigInteger().mod(s)
                        } while (u.compareTo(r.ZERO) <= 0);
                        var h = a.modInverse(s).multiply(o.add(i.multiply(u))).mod(s);
                        return n.biRSSigToASN1Sig(u, h)
                    }, this.sign = function(e, t) {
                        var i = t,
                            n = this.ecparams.n,
                            s = r.fromByteArrayUnsigned(e);
                        do {
                            var o = this.getBigRandom(n),
                                a = this.ecparams.G.multiply(o).getX().toBigInteger().mod(n)
                        } while (a.compareTo(N.ZERO) <= 0);
                        var u = o.modInverse(n).multiply(s.add(i.multiply(a))).mod(n);
                        return this.serializeSig(a, u)
                    }, this.verifyWithMessageHash = function(e, t) {
                        return this.verifyHex(e, t, this.pubKeyHex)
                    }, this.verifyHex = function(e, t, s) {
                        try {
                            var o, a, u = n.parseSigHex(t);
                            o = u.r, a = u.s;
                            var h = i.decodeFromHex(this.ecparams.curve, s),
                                c = new r(e.substring(0, this.ecparams.keylen / 4), 16);
                            return this.verifyRaw(c, o, a, h)
                        } catch (e) {
                            return !1
                        }
                    }, this.verify = function(e, t, n) {
                        var s, o, a;
                        if (Bitcoin.Util.isArray(t)) {
                            var u = this.parseSig(t);
                            s = u.r, o = u.s
                        } else {
                            if ("object" != typeof t || !t.r || !t.s) throw "Invalid value for signature";
                            s = t.r, o = t.s
                        }
                        if (n instanceof _e) a = n;
                        else {
                            if (!Bitcoin.Util.isArray(n)) throw "Invalid format for pubkey value, must be byte array or ECPointFp";
                            a = i.decodeFrom(this.ecparams.curve, n)
                        }
                        var h = r.fromByteArrayUnsigned(e);
                        return this.verifyRaw(h, s, o, a)
                    }, this.verifyRaw = function(e, t, i, n) {
                        var s = this.ecparams.n,
                            o = this.ecparams.G;
                        if (t.compareTo(r.ONE) < 0 || t.compareTo(s) >= 0) return !1;
                        if (i.compareTo(r.ONE) < 0 || i.compareTo(s) >= 0) return !1;
                        var a = i.modInverse(s),
                            u = e.multiply(a).mod(s),
                            h = t.multiply(a).mod(s);
                        return o.multiply(u).add(n.multiply(h)).getX().toBigInteger().mod(s).equals(t)
                    }, this.serializeSig = function(e, t) {
                        var r = e.toByteArraySigned(),
                            i = t.toByteArraySigned(),
                            n = [];
                        return n.push(2), n.push(r.length), (n = n.concat(r)).push(2), n.push(i.length), (n = n.concat(i)).unshift(n.length), n.unshift(48), n
                    }, this.parseSig = function(e) {
                        var t;
                        if (48 != e[0]) throw new Error("Signature not a valid DERSequence");
                        if (2 != e[t = 2]) throw new Error("First element in signature must be a DERInteger");
                        var i = e.slice(t + 2, t + 2 + e[t + 1]);
                        if (2 != e[t += 2 + e[t + 1]]) throw new Error("Second element in signature must be a DERInteger");
                        var n = e.slice(t + 2, t + 2 + e[t + 1]);
                        return t += 2 + e[t + 1], {
                            r: r.fromByteArrayUnsigned(i),
                            s: r.fromByteArrayUnsigned(n)
                        }
                    }, this.parseSigCompact = function(e) {
                        if (65 !== e.length) throw "Signature has the wrong length";
                        var t = e[0] - 27;
                        if (t < 0 || t > 7) throw "Invalid signature type";
                        var i = this.ecparams.n;
                        return {
                            r: r.fromByteArrayUnsigned(e.slice(1, 33)).mod(i),
                            s: r.fromByteArrayUnsigned(e.slice(33, 65)).mod(i),
                            i: t
                        }
                    }, this.readPKCS5PrvKeyHex = function(e) {
                        if (!1 === h(e)) throw new Error("not ASN.1 hex string");
                        var t, r, i;
                        try {
                            t = u(e, 0, ["[0]", 0], "06"), r = u(e, 0, [1], "04");
                            try {
                                i = u(e, 0, ["[1]", 0], "03")
                            } catch (e) {}
                        } catch (e) {
                            throw new Error("malformed PKCS#1/5 plain ECC private key")
                        }
                        if (this.curveName = o(t), void 0 === this.curveName) throw "unsupported curve name";
                        this.setNamedCurve(this.curveName), this.setPublicKeyHex(i), this.setPrivateKeyHex(r), this.isPublic = !1
                    }, this.readPKCS8PrvKeyHex = function(e) {
                        if (!1 === h(e)) throw new t("not ASN.1 hex string");
                        var r, i, n;
                        try {
                            u(e, 0, [1, 0], "06"), r = u(e, 0, [1, 1], "06"), i = u(e, 0, [2, 0, 1], "04");
                            try {
                                n = u(e, 0, [2, 0, "[1]", 0], "03")
                            } catch (e) {}
                        } catch (e) {
                            throw new t("malformed PKCS#8 plain ECC private key")
                        }
                        if (this.curveName = o(r), void 0 === this.curveName) throw new t("unsupported curve name");
                        this.setNamedCurve(this.curveName), this.setPublicKeyHex(n), this.setPrivateKeyHex(i), this.isPublic = !1
                    }, this.readPKCS8PubKeyHex = function(e) {
                        if (!1 === h(e)) throw new t("not ASN.1 hex string");
                        var r, i;
                        try {
                            u(e, 0, [0, 0], "06"), r = u(e, 0, [0, 1], "06"), i = u(e, 0, [1], "03")
                        } catch (e) {
                            throw new t("malformed PKCS#8 ECC public key")
                        }
                        if (this.curveName = o(r), null === this.curveName) throw new t("unsupported curve name");
                        this.setNamedCurve(this.curveName), this.setPublicKeyHex(i)
                    }, this.readCertPubKeyHex = function(e, r) {
                        if (!1 === h(e)) throw new t("not ASN.1 hex string");
                        var i, n;
                        try {
                            i = u(e, 0, [0, 5, 0, 1], "06"), n = u(e, 0, [0, 5, 1], "03")
                        } catch (e) {
                            throw new t("malformed X.509 certificate ECC public key")
                        }
                        if (this.curveName = o(i), null === this.curveName) throw new t("unsupported curve name");
                        this.setNamedCurve(this.curveName), this.setPublicKeyHex(n)
                    }, void 0 !== e && void 0 !== e.curve && (this.curveName = e.curve), void 0 === this.curveName && (this.curveName = "secp256r1"), this.setNamedCurve(this.curveName), void 0 !== e && (void 0 !== e.prv && this.setPrivateKeyHex(e.prv), void 0 !== e.pub && this.setPublicKeyHex(e.pub))
                }, we.crypto.ECDSA.parseSigHex = function(e) {
                    var t = we.crypto.ECDSA.parseSigHexInHexRS(e);
                    return {
                        r: new N(t.r, 16),
                        s: new N(t.s, 16)
                    }
                }, we.crypto.ECDSA.parseSigHexInHexRS = function(e) {
                    var t = xe,
                        r = t.getChildIdx,
                        i = t.getV;
                    if (t.checkStrictDER(e, 0), "30" != e.substr(0, 2)) throw new Error("signature is not a ASN.1 sequence");
                    var n = r(e, 0);
                    if (2 != n.length) throw new Error("signature shall have two elements");
                    var s = n[0],
                        o = n[1];
                    if ("02" != e.substr(s, 2)) throw new Error("1st item not ASN.1 integer");
                    if ("02" != e.substr(o, 2)) throw new Error("2nd item not ASN.1 integer");
                    return {
                        r: i(e, s),
                        s: i(e, o)
                    }
                }, we.crypto.ECDSA.asn1SigToConcatSig = function(e) {
                    var t = we.crypto.ECDSA.parseSigHexInHexRS(e),
                        r = t.r,
                        i = t.s;
                    if ("00" == r.substr(0, 2) && r.length % 32 == 2 && (r = r.substr(2)), "00" == i.substr(0, 2) && i.length % 32 == 2 && (i = i.substr(2)), r.length % 32 == 30 && (r = "00" + r), i.length % 32 == 30 && (i = "00" + i), r.length % 32 != 0) throw "unknown ECDSA sig r length error";
                    if (i.length % 32 != 0) throw "unknown ECDSA sig s length error";
                    return r + i
                }, we.crypto.ECDSA.concatSigToASN1Sig = function(e) {
                    if (e.length / 2 * 8 % 128 != 0) throw "unknown ECDSA concatinated r-s sig  length error";
                    var t = e.substr(0, e.length / 2),
                        r = e.substr(e.length / 2);
                    return we.crypto.ECDSA.hexRSSigToASN1Sig(t, r)
                }, we.crypto.ECDSA.hexRSSigToASN1Sig = function(e, t) {
                    var r = new N(e, 16),
                        i = new N(t, 16);
                    return we.crypto.ECDSA.biRSSigToASN1Sig(r, i)
                }, we.crypto.ECDSA.biRSSigToASN1Sig = function(e, t) {
                    var r = we.asn1,
                        i = new r.DERInteger({
                            bigint: e
                        }),
                        n = new r.DERInteger({
                            bigint: t
                        });
                    return new r.DERSequence({
                        array: [i, n]
                    }).getEncodedHex()
                }, we.crypto.ECDSA.getName = function(e) {
                    return "2b8104001f" === e ? "secp192k1" : "2a8648ce3d030107" === e ? "secp256r1" : "2b8104000a" === e ? "secp256k1" : "2b81040021" === e ? "secp224r1" : "2b81040022" === e ? "secp384r1" : -1 !== "|secp256r1|NIST P-256|P-256|prime256v1|".indexOf(e) ? "secp256r1" : -1 !== "|secp256k1|".indexOf(e) ? "secp256k1" : -1 !== "|secp224r1|NIST P-224|P-224|".indexOf(e) ? "secp224r1" : -1 !== "|secp384r1|NIST P-384|P-384|".indexOf(e) ? "secp384r1" : null
                }, void 0 !== we && we || (we = {}), void 0 !== we.crypto && we.crypto || (we.crypto = {}), we.crypto.ECParameterDB = new function() {
                    var e = {},
                        t = {};

                    function r(e) {
                        return new N(e, 16)
                    }
                    this.getByName = function(r) {
                        var i = r;
                        if (void 0 !== t[i] && (i = t[r]), void 0 !== e[i]) return e[i];
                        throw "unregistered EC curve name: " + i
                    }, this.regist = function(i, n, s, o, a, u, h, c, l, d, g, p) {
                        e[i] = {};
                        var f = r(s),
                            v = r(o),
                            m = r(a),
                            y = r(u),
                            _ = r(h),
                            S = new Se(f, v, m),
                            F = S.decodePointHex("04" + c + l);
                        e[i].name = i, e[i].keylen = n, e[i].curve = S, e[i].G = F, e[i].n = y, e[i].h = _, e[i].oid = g, e[i].info = p;
                        for (var w = 0; w < d.length; w++) t[d[w]] = i
                    }
                }, we.crypto.ECParameterDB.regist("secp128r1", 128, "FFFFFFFDFFFFFFFFFFFFFFFFFFFFFFFF", "FFFFFFFDFFFFFFFFFFFFFFFFFFFFFFFC", "E87579C11079F43DD824993C2CEE5ED3", "FFFFFFFE0000000075A30D1B9038A115", "1", "161FF7528B899B2D0C28607CA52C5B86", "CF5AC8395BAFEB13C02DA292DDED7A83", [], "", "secp128r1 : SECG curve over a 128 bit prime field"), we.crypto.ECParameterDB.regist("secp160k1", 160, "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFAC73", "0", "7", "0100000000000000000001B8FA16DFAB9ACA16B6B3", "1", "3B4C382CE37AA192A4019E763036F4F5DD4D7EBB", "938CF935318FDCED6BC28286531733C3F03C4FEE", [], "", "secp160k1 : SECG curve over a 160 bit prime field"), we.crypto.ECParameterDB.regist("secp160r1", 160, "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF7FFFFFFF", "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF7FFFFFFC", "1C97BEFC54BD7A8B65ACF89F81D4D4ADC565FA45", "0100000000000000000001F4C8F927AED3CA752257", "1", "4A96B5688EF573284664698968C38BB913CBFC82", "23A628553168947D59DCC912042351377AC5FB32", [], "", "secp160r1 : SECG curve over a 160 bit prime field"), we.crypto.ECParameterDB.regist("secp192k1", 192, "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFEE37", "0", "3", "FFFFFFFFFFFFFFFFFFFFFFFE26F2FC170F69466A74DEFD8D", "1", "DB4FF10EC057E9AE26B07D0280B7F4341DA5D1B1EAE06C7D", "9B2F2F6D9C5628A7844163D015BE86344082AA88D95E2F9D", []), we.crypto.ECParameterDB.regist("secp192r1", 192, "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFFFFFFFFFFFF", "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFFFFFFFFFFFC", "64210519E59C80E70FA7E9AB72243049FEB8DEECC146B9B1", "FFFFFFFFFFFFFFFFFFFFFFFF99DEF836146BC9B1B4D22831", "1", "188DA80EB03090F67CBF20EB43A18800F4FF0AFD82FF1012", "07192B95FFC8DA78631011ED6B24CDD573F977A11E794811", []), we.crypto.ECParameterDB.regist("secp224r1", 224, "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF000000000000000000000001", "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFFFFFFFFFFFFFFFFFFFE", "B4050A850C04B3ABF54132565044B0B7D7BFD8BA270B39432355FFB4", "FFFFFFFFFFFFFFFFFFFFFFFFFFFF16A2E0B8F03E13DD29455C5C2A3D", "1", "B70E0CBD6BB4BF7F321390B94A03C1D356C21122343280D6115C1D21", "BD376388B5F723FB4C22DFE6CD4375A05A07476444D5819985007E34", []), we.crypto.ECParameterDB.regist("secp256k1", 256, "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFC2F", "0", "7", "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEBAAEDCE6AF48A03BBFD25E8CD0364141", "1", "79BE667EF9DCBBAC55A06295CE870B07029BFCDB2DCE28D959F2815B16F81798", "483ADA7726A3C4655DA4FBFC0E1108A8FD17B448A68554199C47D08FFB10D4B8", []), we.crypto.ECParameterDB.regist("secp256r1", 256, "FFFFFFFF00000001000000000000000000000000FFFFFFFFFFFFFFFFFFFFFFFF", "FFFFFFFF00000001000000000000000000000000FFFFFFFFFFFFFFFFFFFFFFFC", "5AC635D8AA3A93E7B3EBBD55769886BC651D06B0CC53B0F63BCE3C3E27D2604B", "FFFFFFFF00000000FFFFFFFFFFFFFFFFBCE6FAADA7179E84F3B9CAC2FC632551", "1", "6B17D1F2E12C4247F8BCE6E563A440F277037D812DEB33A0F4A13945D898C296", "4FE342E2FE1A7F9B8EE7EB4A7C0F9E162BCE33576B315ECECBB6406837BF51F5", ["NIST P-256", "P-256", "prime256v1"]), we.crypto.ECParameterDB.regist("secp384r1", 384, "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFFFF0000000000000000FFFFFFFF", "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFFFF0000000000000000FFFFFFFC", "B3312FA7E23EE7E4988E056BE3F82D19181D9C6EFE8141120314088F5013875AC656398D8A2ED19D2A85C8EDD3EC2AEF", "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFC7634D81F4372DDF581A0DB248B0A77AECEC196ACCC52973", "1", "AA87CA22BE8B05378EB1C71EF320AD746E1D3B628BA79B9859F741E082542A385502F25DBF55296C3A545E3872760AB7", "3617de4a96262c6f5d9e98bf9292dc29f8f41dbd289a147ce9da3113b5f0b8c00a60b1ce1d7e819d7a431d7c90ea0e5f", ["NIST P-384", "P-384"]), we.crypto.ECParameterDB.regist("secp521r1", 521, "1FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF", "1FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFC", "051953EB9618E1C9A1F929A21A0B68540EEA2DA725B99B315F3B8B489918EF109E156193951EC7E937B1652C0BD3BB1BF073573DF883D2C34F1EF451FD46B503F00", "1FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFA51868783BF2F966B7FCC0148F709A5D03BB5C9B8899C47AEBB6FB71E91386409", "1", "C6858E06B70404E9CD9E3ECB662395B4429C648139053FB521F828AF606B4D3DBAA14B5E77EFE75928FE1DC127A2FFA8DE3348B3C1856A429BF97E7E31C2E5BD66", "011839296a789a3bc0045c8a5fb42c7d1bd998f54449579b446817afbd17273e662c97ee72995ef42640c550b9013fad0761353c7086a272c24088be94769fd16650", ["NIST P-521", "P-521"]);
                var ze = function() {
                    var e = function(e, r, i) {
                            return t(P.AES, e, r, i)
                        },
                        t = function(e, t, r, i) {
                            var n = P.enc.Hex.parse(t),
                                s = P.enc.Hex.parse(r),
                                o = P.enc.Hex.parse(i),
                                a = {};
                            a.key = s, a.iv = o, a.ciphertext = n;
                            var u = e.decrypt(a, s, {
                                iv: o
                            });
                            return P.enc.Hex.stringify(u)
                        },
                        r = function(e, t, r) {
                            return i(P.AES, e, t, r)
                        },
                        i = function(e, t, r, i) {
                            var n = P.enc.Hex.parse(t),
                                s = P.enc.Hex.parse(r),
                                o = P.enc.Hex.parse(i),
                                a = e.encrypt(n, s, {
                                    iv: o
                                }),
                                u = P.enc.Hex.parse(a.toString());
                            return P.enc.Base64.stringify(u)
                        },
                        n = {
                            "AES-256-CBC": {
                                proc: e,
                                eproc: r,
                                keylen: 32,
                                ivlen: 16
                            },
                            "AES-192-CBC": {
                                proc: e,
                                eproc: r,
                                keylen: 24,
                                ivlen: 16
                            },
                            "AES-128-CBC": {
                                proc: e,
                                eproc: r,
                                keylen: 16,
                                ivlen: 16
                            },
                            "DES-EDE3-CBC": {
                                proc: function(e, r, i) {
                                    return t(P.TripleDES, e, r, i)
                                },
                                eproc: function(e, t, r) {
                                    return i(P.TripleDES, e, t, r)
                                },
                                keylen: 24,
                                ivlen: 8
                            },
                            "DES-CBC": {
                                proc: function(e, r, i) {
                                    return t(P.DES, e, r, i)
                                },
                                eproc: function(e, t, r) {
                                    return i(P.DES, e, t, r)
                                },
                                keylen: 8,
                                ivlen: 8
                            }
                        },
                        s = function(e) {
                            var t = {},
                                r = e.match(new RegExp("DEK-Info: ([^,]+),([0-9A-Fa-f]+)", "m"));
                            r && (t.cipher = r[1], t.ivsalt = r[2]);
                            var i = e.match(new RegExp("-----BEGIN ([A-Z]+) PRIVATE KEY-----"));
                            i && (t.type = i[1]);
                            var n = -1,
                                s = 0; - 1 != e.indexOf("\r\n\r\n") && (n = e.indexOf("\r\n\r\n"), s = 2), -1 != e.indexOf("\n\n") && (n = e.indexOf("\n\n"), s = 1);
                            var o = e.indexOf("-----END");
                            if (-1 != n && -1 != o) {
                                var a = e.substring(n + 2 * s, o - s);
                                a = a.replace(/\s+/g, ""), t.data = a
                            }
                            return t
                        },
                        o = function(e, t, r) {
                            for (var i = r.substring(0, 16), s = P.enc.Hex.parse(i), o = P.enc.Utf8.parse(t), a = n[e].keylen + n[e].ivlen, u = "", h = null;;) {
                                var c = P.algo.MD5.create();
                                if (null != h && c.update(h), c.update(o), c.update(s), h = c.finalize(), (u += P.enc.Hex.stringify(h)).length >= 2 * a) break
                            }
                            var l = {};
                            return l.keyhex = u.substr(0, 2 * n[e].keylen), l.ivhex = u.substr(2 * n[e].keylen, 2 * n[e].ivlen), l
                        },
                        a = function(e, t, r, i) {
                            var s = P.enc.Base64.parse(e),
                                o = P.enc.Hex.stringify(s);
                            return (0, n[t].proc)(o, r, i)
                        };
                    return {
                        version: "1.0.0",
                        parsePKCS5PEM: function(e) {
                            return s(e)
                        },
                        getKeyAndUnusedIvByPasscodeAndIvsalt: function(e, t, r) {
                            return o(e, t, r)
                        },
                        decryptKeyB64: function(e, t, r, i) {
                            return a(e, t, r, i)
                        },
                        getDecryptedKeyHex: function(e, t) {
                            var r = s(e),
                                i = (r.type, r.cipher),
                                n = r.ivsalt,
                                u = r.data,
                                h = o(i, t, n).keyhex;
                            return a(u, i, h, n)
                        },
                        getEncryptedPKCS5PEMFromPrvKeyHex: function(e, t, r, i, s) {
                            var a = "";
                            if (void 0 !== i && null != i || (i = "AES-256-CBC"), void 0 === n[i]) throw new Error("KEYUTIL unsupported algorithm: " + i);
                            if (void 0 === s || null == s) {
                                var u = function(e) {
                                    var t = P.lib.WordArray.random(e);
                                    return P.enc.Hex.stringify(t)
                                }(n[i].ivlen);
                                s = u.toUpperCase()
                            }
                            var h = function(e, t, r, i) {
                                return (0, n[t].eproc)(e, r, i)
                            }(t, i, o(i, r, s).keyhex, s);
                            return a = "-----BEGIN " + e + " PRIVATE KEY-----\r\n", a += "Proc-Type: 4,ENCRYPTED\r\n", a += "DEK-Info: " + i + "," + s + "\r\n", a += "\r\n", (a += h.replace(/(.{64})/g, "$1\r\n")) + "\r\n-----END " + e + " PRIVATE KEY-----\r\n"
                        },
                        parseHexOfEncryptedPKCS8: function(e) {
                            var t = xe,
                                r = t.getChildIdx,
                                i = t.getV,
                                n = {},
                                s = r(e, 0);
                            if (2 != s.length) throw new Error("malformed format: SEQUENCE(0).items != 2: " + s.length);
                            n.ciphertext = i(e, s[1]);
                            var o = r(e, s[0]);
                            if (2 != o.length) throw new Error("malformed format: SEQUENCE(0.0).items != 2: " + o.length);
                            if ("2a864886f70d01050d" != i(e, o[0])) throw new Error("this only supports pkcs5PBES2");
                            var a = r(e, o[1]);
                            if (2 != o.length) throw new Error("malformed format: SEQUENCE(0.0.1).items != 2: " + a.length);
                            var u = r(e, a[1]);
                            if (2 != u.length) throw new Error("malformed format: SEQUENCE(0.0.1.1).items != 2: " + u.length);
                            if ("2a864886f70d0307" != i(e, u[0])) throw "this only supports TripleDES";
                            n.encryptionSchemeAlg = "TripleDES", n.encryptionSchemeIV = i(e, u[1]);
                            var h = r(e, a[0]);
                            if (2 != h.length) throw new Error("malformed format: SEQUENCE(0.0.1.0).items != 2: " + h.length);
                            if ("2a864886f70d01050c" != i(e, h[0])) throw new Error("this only supports pkcs5PBKDF2");
                            var c = r(e, h[1]);
                            if (c.length < 2) throw new Error("malformed format: SEQUENCE(0.0.1.0.1).items < 2: " + c.length);
                            n.pbkdf2Salt = i(e, c[0]);
                            var l = i(e, c[1]);
                            try {
                                n.pbkdf2Iter = parseInt(l, 16)
                            } catch (e) {
                                throw new Error("malformed format pbkdf2Iter: " + l)
                            }
                            return n
                        },
                        getPBKDF2KeyHexFromParam: function(e, t) {
                            var r = P.enc.Hex.parse(e.pbkdf2Salt),
                                i = e.pbkdf2Iter,
                                n = P.PBKDF2(t, r, {
                                    keySize: 6,
                                    iterations: i
                                });
                            return P.enc.Hex.stringify(n)
                        },
                        _getPlainPKCS8HexFromEncryptedPKCS8PEM: function(e, t) {
                            var r = Ue(e, "ENCRYPTED PRIVATE KEY"),
                                i = this.parseHexOfEncryptedPKCS8(r),
                                n = ze.getPBKDF2KeyHexFromParam(i, t),
                                s = {};
                            s.ciphertext = P.enc.Hex.parse(i.ciphertext);
                            var o = P.enc.Hex.parse(n),
                                a = P.enc.Hex.parse(i.encryptionSchemeIV),
                                u = P.TripleDES.decrypt(s, o, {
                                    iv: a
                                });
                            return P.enc.Hex.stringify(u)
                        },
                        getKeyFromEncryptedPKCS8PEM: function(e, t) {
                            var r = this._getPlainPKCS8HexFromEncryptedPKCS8PEM(e, t);
                            return this.getKeyFromPlainPrivatePKCS8Hex(r)
                        },
                        parsePlainPrivatePKCS8Hex: function(e) {
                            var t = xe,
                                r = t.getChildIdx,
                                i = t.getV,
                                n = {
                                    algparam: null
                                };
                            if ("30" != e.substr(0, 2)) throw new Error("malformed plain PKCS8 private key(code:001)");
                            var s = r(e, 0);
                            if (s.length < 3) throw new Error("malformed plain PKCS8 private key(code:002)");
                            if ("30" != e.substr(s[1], 2)) throw new Error("malformed PKCS8 private key(code:003)");
                            var o = r(e, s[1]);
                            if (2 != o.length) throw new Error("malformed PKCS8 private key(code:004)");
                            if ("06" != e.substr(o[0], 2)) throw new Error("malformed PKCS8 private key(code:005)");
                            if (n.algoid = i(e, o[0]), "06" == e.substr(o[1], 2) && (n.algparam = i(e, o[1])), "04" != e.substr(s[2], 2)) throw new Error("malformed PKCS8 private key(code:006)");
                            return n.keyidx = t.getVidx(e, s[2]), n
                        },
                        getKeyFromPlainPrivatePKCS8PEM: function(e) {
                            var t = Ue(e, "PRIVATE KEY");
                            return this.getKeyFromPlainPrivatePKCS8Hex(t)
                        },
                        getKeyFromPlainPrivatePKCS8Hex: function(e) {
                            var t, r = this.parsePlainPrivatePKCS8Hex(e);
                            if ("2a864886f70d010101" == r.algoid) t = new me;
                            else if ("2a8648ce380401" == r.algoid) t = new we.crypto.DSA;
                            else {
                                if ("2a8648ce3d0201" != r.algoid) throw new Error("unsupported private key algorithm");
                                t = new we.crypto.ECDSA
                            }
                            return t.readPKCS8PrvKeyHex(e), t
                        },
                        _getKeyFromPublicPKCS8Hex: function(e) {
                            var t, r = xe.getVbyList(e, 0, [0, 0], "06");
                            if ("2a864886f70d010101" === r) t = new me;
                            else if ("2a8648ce380401" === r) t = new we.crypto.DSA;
                            else {
                                if ("2a8648ce3d0201" !== r) throw new Error("unsupported PKCS#8 public key hex");
                                t = new we.crypto.ECDSA
                            }
                            return t.readPKCS8PubKeyHex(e), t
                        },
                        parsePublicRawRSAKeyHex: function(e) {
                            var t = xe,
                                r = t.getChildIdx,
                                i = t.getV,
                                n = {};
                            if ("30" != e.substr(0, 2)) throw new Error("malformed RSA key(code:001)");
                            var s = r(e, 0);
                            if (2 != s.length) throw new Error("malformed RSA key(code:002)");
                            if ("02" != e.substr(s[0], 2)) throw new Error("malformed RSA key(code:003)");
                            if (n.n = i(e, s[0]), "02" != e.substr(s[1], 2)) throw new Error("malformed RSA key(code:004)");
                            return n.e = i(e, s[1]), n
                        },
                        parsePublicPKCS8Hex: function(e) {
                            var t = xe,
                                r = t.getChildIdx,
                                i = t.getV,
                                n = {
                                    algparam: null
                                },
                                s = r(e, 0);
                            if (2 != s.length) throw new Error("outer DERSequence shall have 2 elements: " + s.length);
                            var o = s[0];
                            if ("30" != e.substr(o, 2)) throw new Error("malformed PKCS8 public key(code:001)");
                            var a = r(e, o);
                            if (2 != a.length) throw new Error("malformed PKCS8 public key(code:002)");
                            if ("06" != e.substr(a[0], 2)) throw new Error("malformed PKCS8 public key(code:003)");
                            if (n.algoid = i(e, a[0]), "06" == e.substr(a[1], 2) ? n.algparam = i(e, a[1]) : "30" == e.substr(a[1], 2) && (n.algparam = {}, n.algparam.p = t.getVbyList(e, a[1], [0], "02"), n.algparam.q = t.getVbyList(e, a[1], [1], "02"), n.algparam.g = t.getVbyList(e, a[1], [2], "02")), "03" != e.substr(s[1], 2)) throw new Error("malformed PKCS8 public key(code:004)");
                            return n.key = i(e, s[1]).substr(2), n
                        }
                    }
                }();

                function Ge(e, t) {
                    for (var r = "", i = t / 4 - e.length, n = 0; n < i; n++) r += "0";
                    return r + e
                }

                function Ye(e, t, r) {
                    for (var i = "", n = 0; i.length < t;) i += Ne(r(Be(e + String.fromCharCode.apply(String, [(4278190080 & n) >> 24, (16711680 & n) >> 16, (65280 & n) >> 8, 255 & n])))), n += 1;
                    return i
                }

                function Xe(e) {
                    for (var t in we.crypto.Util.DIGESTINFOHEAD) {
                        var r = we.crypto.Util.DIGESTINFOHEAD[t],
                            i = r.length;
                        if (e.substring(0, i) == r) return [t, e.substring(i)]
                    }
                    return []
                }

                function Qe(e) {
                    var t, r = xe,
                        i = r.getChildIdx,
                        n = r.getV,
                        s = r.getTLV,
                        o = r.getVbyList,
                        a = r.getVbyListEx,
                        u = r.getTLVbyList,
                        h = r.getTLVbyListEx,
                        c = r.getIdxbyList,
                        l = r.getIdxbyListEx,
                        d = r.getVidx,
                        g = r.getInt,
                        p = r.oidname,
                        f = r.hextooidstr,
                        v = Ue;
                    try {
                        t = we.asn1.x509.AlgorithmIdentifier.PSSNAME2ASN1TLV
                    } catch (e) {}
                    this.HEX2STAG = {
                        "0c": "utf8",
                        13: "prn",
                        16: "ia5",
                        "1a": "vis",
                        "1e": "bmp"
                    }, this.hex = null, this.version = 0, this.foffset = 0, this.aExtInfo = null, this.getVersion = function() {
                        if (null === this.hex || 0 !== this.version) return this.version;
                        var e = u(this.hex, 0, [0, 0]);
                        if ("a0" == e.substr(0, 2)) {
                            var t = u(e, 0, [0]),
                                r = g(t, 0);
                            if (r < 0 || 2 < r) throw new Error("malformed version field");
                            return this.version = r + 1, this.version
                        }
                        return this.version = 1, this.foffset = -1, 1
                    }, this.getSerialNumberHex = function() {
                        return a(this.hex, 0, [0, 0], "02")
                    }, this.getSignatureAlgorithmField = function() {
                        var e = h(this.hex, 0, [0, 1]);
                        return this.getAlgorithmIdentifierName(e)
                    }, this.getAlgorithmIdentifierName = function(e) {
                        for (var r in t)
                            if (e === t[r]) return r;
                        return p(a(e, 0, [0], "06"))
                    }, this.getIssuer = function() {
                        return this.getX500Name(this.getIssuerHex())
                    }, this.getIssuerHex = function() {
                        return u(this.hex, 0, [0, 3 + this.foffset], "30")
                    }, this.getIssuerString = function() {
                        return this.getIssuer().str
                    }, this.getSubject = function() {
                        return this.getX500Name(this.getSubjectHex())
                    }, this.getSubjectHex = function() {
                        return u(this.hex, 0, [0, 5 + this.foffset], "30")
                    }, this.getSubjectString = function() {
                        return this.getSubject().str
                    }, this.getNotBefore = function() {
                        var e = o(this.hex, 0, [0, 4 + this.foffset, 0]);
                        return e = e.replace(/(..)/g, "%$1"), decodeURIComponent(e)
                    }, this.getNotAfter = function() {
                        var e = o(this.hex, 0, [0, 4 + this.foffset, 1]);
                        return e = e.replace(/(..)/g, "%$1"), decodeURIComponent(e)
                    }, this.getPublicKeyHex = function() {
                        return r.getTLVbyList(this.hex, 0, [0, 6 + this.foffset], "30")
                    }, this.getPublicKeyIdx = function() {
                        return c(this.hex, 0, [0, 6 + this.foffset], "30")
                    }, this.getPublicKeyContentIdx = function() {
                        var e = this.getPublicKeyIdx();
                        return c(this.hex, e, [1, 0], "30")
                    }, this.getPublicKey = function() {
                        return ze.getKey(this.getPublicKeyHex(), null, "pkcs8pub")
                    }, this.getSignatureAlgorithmName = function() {
                        var e = u(this.hex, 0, [1], "30");
                        return this.getAlgorithmIdentifierName(e)
                    }, this.getSignatureValueHex = function() {
                        return o(this.hex, 0, [2], "03", !0)
                    }, this.verifySignature = function(e) {
                        var t = this.getSignatureAlgorithmField(),
                            r = this.getSignatureValueHex(),
                            i = u(this.hex, 0, [0], "30"),
                            n = new we.crypto.Signature({
                                alg: t
                            });
                        return n.init(e), n.updateHex(i), n.verify(r)
                    }, this.parseExt = function(e) {
                        var t, s, a;
                        if (void 0 === e) {
                            if (a = this.hex, 3 !== this.version) return -1;
                            t = c(a, 0, [0, 7, 0], "30"), s = i(a, t)
                        } else {
                            a = Ue(e);
                            var u = c(a, 0, [0, 3, 0, 0], "06");
                            if ("2a864886f70d01090e" != n(a, u)) return void(this.aExtInfo = new Array);
                            t = c(a, 0, [0, 3, 0, 1, 0], "30"), s = i(a, t), this.hex = a
                        }
                        this.aExtInfo = new Array;
                        for (var h = 0; h < s.length; h++) {
                            var l = {
                                    critical: !1
                                },
                                g = 0;
                            3 === i(a, s[h]).length && (l.critical = !0, g = 1), l.oid = r.hextooidstr(o(a, s[h], [0], "06"));
                            var p = c(a, s[h], [1 + g]);
                            l.vidx = d(a, p), this.aExtInfo.push(l)
                        }
                    }, this.getExtInfo = function(e) {
                        var t = this.aExtInfo,
                            r = e;
                        if (e.match(/^[0-9.]+$/) || (r = we.asn1.x509.OID.name2oid(e)), "" !== r)
                            for (var i = 0; i < t.length; i++)
                                if (t[i].oid === r) return t[i]
                    }, this.getExtBasicConstraints = function(e, t) {
                        if (void 0 === e && void 0 === t) {
                            var r = this.getExtInfo("basicConstraints");
                            if (void 0 === r) return;
                            e = s(this.hex, r.vidx), t = r.critical
                        }
                        var i = {
                            extname: "basicConstraints"
                        };
                        if (t && (i.critical = !0), "3000" === e) return i;
                        if ("30030101ff" === e) return i.cA = !0, i;
                        if ("30060101ff02" === e.substr(0, 12)) {
                            var o = n(e, 10),
                                a = parseInt(o, 16);
                            return i.cA = !0, i.pathLen = a, i
                        }
                        throw new Error("hExtV parse error: " + e)
                    }, this.getExtKeyUsage = function(e, t) {
                        if (void 0 === e && void 0 === t) {
                            var r = this.getExtInfo("keyUsage");
                            if (void 0 === r) return;
                            e = s(this.hex, r.vidx), t = r.critical
                        }
                        var i = {
                            extname: "keyUsage"
                        };
                        return t && (i.critical = !0), i.names = this.getExtKeyUsageString(e).split(","), i
                    }, this.getExtKeyUsageBin = function(e) {
                        if (void 0 === e) {
                            var t = this.getExtInfo("keyUsage");
                            if (void 0 === t) return "";
                            e = s(this.hex, t.vidx)
                        }
                        if (8 != e.length && 10 != e.length) throw new Error("malformed key usage value: " + e);
                        var r = "000000000000000" + parseInt(e.substr(6), 16).toString(2);
                        return 8 == e.length && (r = r.slice(-8)), 10 == e.length && (r = r.slice(-16)), "" == (r = r.replace(/0+$/, "")) && (r = "0"), r
                    }, this.getExtKeyUsageString = function(e) {
                        for (var t = this.getExtKeyUsageBin(e), r = new Array, i = 0; i < t.length; i++) "1" == t.substr(i, 1) && r.push(Qe.KEYUSAGE_NAME[i]);
                        return r.join(",")
                    }, this.getExtSubjectKeyIdentifier = function(e, t) {
                        if (void 0 === e && void 0 === t) {
                            var r = this.getExtInfo("subjectKeyIdentifier");
                            if (void 0 === r) return;
                            e = s(this.hex, r.vidx), t = r.critical
                        }
                        var i = {
                            extname: "subjectKeyIdentifier"
                        };
                        t && (i.critical = !0);
                        var o = n(e, 0);
                        return i.kid = {
                            hex: o
                        }, i
                    }, this.getExtAuthorityKeyIdentifier = function(e, t) {
                        if (void 0 === e && void 0 === t) {
                            var r = this.getExtInfo("authorityKeyIdentifier");
                            if (void 0 === r) return;
                            e = s(this.hex, r.vidx), t = r.critical
                        }
                        var o = {
                            extname: "authorityKeyIdentifier"
                        };
                        t && (o.critical = !0);
                        for (var a = i(e, 0), u = 0; u < a.length; u++) {
                            var h = e.substr(a[u], 2);
                            if ("80" === h && (o.kid = {
                                    hex: n(e, a[u])
                                }), "a1" === h) {
                                var c = s(e, a[u]),
                                    l = this.getGeneralNames(c);
                                o.issuer = l[0].dn
                            }
                            "82" === h && (o.sn = {
                                hex: n(e, a[u])
                            })
                        }
                        return o
                    }, this.getExtExtKeyUsage = function(e, t) {
                        if (void 0 === e && void 0 === t) {
                            var r = this.getExtInfo("extKeyUsage");
                            if (void 0 === r) return;
                            e = s(this.hex, r.vidx), t = r.critical
                        }
                        var o = {
                            extname: "extKeyUsage",
                            array: []
                        };
                        t && (o.critical = !0);
                        for (var a = i(e, 0), u = 0; u < a.length; u++) o.array.push(p(n(e, a[u])));
                        return o
                    }, this.getExtExtKeyUsageName = function() {
                        var e = this.getExtInfo("extKeyUsage");
                        if (void 0 === e) return e;
                        var t = new Array,
                            r = s(this.hex, e.vidx);
                        if ("" === r) return t;
                        for (var o = i(r, 0), a = 0; a < o.length; a++) t.push(p(n(r, o[a])));
                        return t
                    }, this.getExtSubjectAltName = function(e, t) {
                        if (void 0 === e && void 0 === t) {
                            var r = this.getExtInfo("subjectAltName");
                            if (void 0 === r) return;
                            e = s(this.hex, r.vidx), t = r.critical
                        }
                        var i = {
                            extname: "subjectAltName",
                            array: []
                        };
                        return t && (i.critical = !0), i.array = this.getGeneralNames(e), i
                    }, this.getExtIssuerAltName = function(e, t) {
                        if (void 0 === e && void 0 === t) {
                            var r = this.getExtInfo("issuerAltName");
                            if (void 0 === r) return;
                            e = s(this.hex, r.vidx), t = r.critical
                        }
                        var i = {
                            extname: "issuerAltName",
                            array: []
                        };
                        return t && (i.critical = !0), i.array = this.getGeneralNames(e), i
                    }, this.getGeneralNames = function(e) {
                        for (var t = i(e, 0), r = [], n = 0; n < t.length; n++) {
                            var o = this.getGeneralName(s(e, t[n]));
                            void 0 !== o && r.push(o)
                        }
                        return r
                    }, this.getGeneralName = function(e) {
                        var t = e.substr(0, 2),
                            r = n(e, 0),
                            i = Ne(r);
                        return "81" == t ? {
                            rfc822: i
                        } : "82" == t ? {
                            dns: i
                        } : "86" == t ? {
                            uri: i
                        } : "87" == t ? {
                            ip: Me(r)
                        } : "a4" == t ? {
                            dn: this.getX500Name(r)
                        } : void 0
                    }, this.getExtSubjectAltName2 = function() {
                        var e, t, r, o = this.getExtInfo("subjectAltName");
                        if (void 0 === o) return o;
                        for (var a = new Array, u = s(this.hex, o.vidx), h = i(u, 0), c = 0; c < h.length; c++) r = u.substr(h[c], 2), e = n(u, h[c]), "81" === r && (t = De(e), a.push(["MAIL", t])), "82" === r && (t = De(e), a.push(["DNS", t])), "84" === r && (t = Qe.hex2dn(e, 0), a.push(["DN", t])), "86" === r && (t = De(e), a.push(["URI", t])), "87" === r && (t = Me(e), a.push(["IP", t]));
                        return a
                    }, this.getExtCRLDistributionPoints = function(e, t) {
                        if (void 0 === e && void 0 === t) {
                            var r = this.getExtInfo("cRLDistributionPoints");
                            if (void 0 === r) return;
                            e = s(this.hex, r.vidx), t = r.critical
                        }
                        var n = {
                            extname: "cRLDistributionPoints",
                            array: []
                        };
                        t && (n.critical = !0);
                        for (var o = i(e, 0), a = 0; a < o.length; a++) {
                            var u = s(e, o[a]);
                            n.array.push(this.getDistributionPoint(u))
                        }
                        return n
                    }, this.getDistributionPoint = function(e) {
                        for (var t = {}, r = i(e, 0), n = 0; n < r.length; n++) {
                            var o = e.substr(r[n], 2),
                                a = s(e, r[n]);
                            "a0" == o && (t.dpname = this.getDistributionPointName(a))
                        }
                        return t
                    }, this.getDistributionPointName = function(e) {
                        for (var t = {}, r = i(e, 0), n = 0; n < r.length; n++) {
                            var o = e.substr(r[n], 2),
                                a = s(e, r[n]);
                            "a0" == o && (t.full = this.getGeneralNames(a))
                        }
                        return t
                    }, this.getExtCRLDistributionPointsURI = function() {
                        var e = this.getExtInfo("cRLDistributionPoints");
                        if (void 0 === e) return e;
                        for (var t = new Array, r = i(this.hex, e.vidx), n = 0; n < r.length; n++) try {
                            var s = De(o(this.hex, r[n], [0, 0, 0], "86"));
                            t.push(s)
                        } catch (e) {}
                        return t
                    }, this.getExtAIAInfo = function() {
                        var e = this.getExtInfo("authorityInfoAccess");
                        if (void 0 === e) return e;
                        for (var t = {
                                ocsp: [],
                                caissuer: []
                            }, r = i(this.hex, e.vidx), n = 0; n < r.length; n++) {
                            var s = o(this.hex, r[n], [0], "06"),
                                a = o(this.hex, r[n], [1], "86");
                            "2b06010505073001" === s && t.ocsp.push(De(a)), "2b06010505073002" === s && t.caissuer.push(De(a))
                        }
                        return t
                    }, this.getExtAuthorityInfoAccess = function(e, t) {
                        if (void 0 === e && void 0 === t) {
                            var r = this.getExtInfo("authorityInfoAccess");
                            if (void 0 === r) return;
                            e = s(this.hex, r.vidx), t = r.critical
                        }
                        var n = {
                            extname: "authorityInfoAccess",
                            array: []
                        };
                        t && (n.critical = !0);
                        for (var u = i(e, 0), h = 0; h < u.length; h++) {
                            var c = a(e, u[h], [0], "06"),
                                l = De(o(e, u[h], [1], "86"));
                            if ("2b06010505073001" == c) n.array.push({
                                ocsp: l
                            });
                            else {
                                if ("2b06010505073002" != c) throw new Error("unknown method: " + c);
                                n.array.push({
                                    caissuer: l
                                })
                            }
                        }
                        return n
                    }, this.getExtCertificatePolicies = function(e, t) {
                        if (void 0 === e && void 0 === t) {
                            var r = this.getExtInfo("certificatePolicies");
                            if (void 0 === r) return;
                            e = s(this.hex, r.vidx), t = r.critical
                        }
                        var n = {
                            extname: "certificatePolicies",
                            array: []
                        };
                        t && (n.critical = !0);
                        for (var o = i(e, 0), a = 0; a < o.length; a++) {
                            var u = s(e, o[a]),
                                h = this.getPolicyInformation(u);
                            n.array.push(h)
                        }
                        return n
                    }, this.getPolicyInformation = function(e) {
                        var t = {},
                            r = o(e, 0, [0], "06");
                        t.policyoid = p(r);
                        var n = l(e, 0, [1], "30");
                        if (-1 != n) {
                            t.array = [];
                            for (var a = i(e, n), u = 0; u < a.length; u++) {
                                var h = s(e, a[u]),
                                    c = this.getPolicyQualifierInfo(h);
                                t.array.push(c)
                            }
                        }
                        return t
                    }, this.getPolicyQualifierInfo = function(e) {
                        var t = {},
                            r = o(e, 0, [0], "06");
                        if ("2b06010505070201" === r) {
                            var i = a(e, 0, [1], "16");
                            t.cps = Ne(i)
                        } else if ("2b06010505070202" === r) {
                            var n = u(e, 0, [1], "30");
                            t.unotice = this.getUserNotice(n)
                        }
                        return t
                    }, this.getUserNotice = function(e) {
                        for (var t = {}, r = i(e, 0), n = 0; n < r.length; n++) {
                            var o = s(e, r[n]);
                            "30" != o.substr(0, 2) && (t.exptext = this.getDisplayText(o))
                        }
                        return t
                    }, this.getDisplayText = function(e) {
                        var t = {};
                        return t.type = {
                            "0c": "utf8",
                            16: "ia5",
                            "1a": "vis",
                            "1e": "bmp"
                        }[e.substr(0, 2)], t.str = Ne(n(e, 0)), t
                    }, this.getExtCRLNumber = function(e, t) {
                        var r = {
                            extname: "cRLNumber"
                        };
                        if (t && (r.critical = !0), "02" == e.substr(0, 2)) return r.num = {
                            hex: n(e, 0)
                        }, r;
                        throw new Error("hExtV parse error: " + e)
                    }, this.getExtCRLReason = function(e, t) {
                        var r = {
                            extname: "cRLReason"
                        };
                        if (t && (r.critical = !0), "0a" == e.substr(0, 2)) return r.code = parseInt(n(e, 0), 16), r;
                        throw new Error("hExtV parse error: " + e)
                    }, this.getExtOcspNonce = function(e, t) {
                        var r = {
                            extname: "ocspNonce"
                        };
                        t && (r.critical = !0);
                        var i = n(e, 0);
                        return r.hex = i, r
                    }, this.getExtOcspNoCheck = function(e, t) {
                        var r = {
                            extname: "ocspNoCheck"
                        };
                        return t && (r.critical = !0), r
                    }, this.getExtAdobeTimeStamp = function(e, t) {
                        if (void 0 === e && void 0 === t) {
                            var r = this.getExtInfo("adobeTimeStamp");
                            if (void 0 === r) return;
                            e = s(this.hex, r.vidx), t = r.critical
                        }
                        var n = {
                            extname: "adobeTimeStamp"
                        };
                        t && (n.critical = !0);
                        var o = i(e, 0);
                        if (o.length > 1) {
                            var a = s(e, o[1]),
                                u = this.getGeneralName(a);
                            null != u.uri && (n.uri = u.uri)
                        }
                        if (o.length > 2) {
                            var h = s(e, o[2]);
                            "0101ff" == h && (n.reqauth = !0), "010100" == h && (n.reqauth = !1)
                        }
                        return n
                    }, this.getX500NameRule = function(e) {
                        for (var t = null, r = [], i = 0; i < e.length; i++)
                            for (var n = e[i], s = 0; s < n.length; s++) r.push(n[s]);
                        for (i = 0; i < r.length; i++) {
                            var o = r[i],
                                a = o.ds,
                                u = o.value,
                                h = o.type;
                            if ("prn" != a && "utf8" != a && "ia5" != a) return "mixed";
                            if ("ia5" == a) {
                                if ("CN" != h) return "mixed";
                                if (we.lang.String.isMail(u)) continue;
                                return "mixed"
                            }
                            if ("C" == h) {
                                if ("prn" == a) continue;
                                return "mixed"
                            }
                            if (null == t) t = a;
                            else if (t !== a) return "mixed"
                        }
                        return null == t ? "prn" : t
                    }, this.getX500Name = function(e) {
                        var t = this.getX500NameArray(e);
                        return {
                            array: t,
                            str: this.dnarraytostr(t)
                        }
                    }, this.getX500NameArray = function(e) {
                        for (var t = [], r = i(e, 0), n = 0; n < r.length; n++) t.push(this.getRDN(s(e, r[n])));
                        return t
                    }, this.getRDN = function(e) {
                        for (var t = [], r = i(e, 0), n = 0; n < r.length; n++) t.push(this.getAttrTypeAndValue(s(e, r[n])));
                        return t
                    }, this.getAttrTypeAndValue = function(e) {
                        var t = {
                                type: null,
                                value: null,
                                ds: null
                            },
                            r = i(e, 0),
                            n = o(e, r[0], [], "06"),
                            s = o(e, r[1], []),
                            a = we.asn1.ASN1Util.oidHexToInt(n);
                        return t.type = we.asn1.x509.OID.oid2atype(a), t.ds = this.HEX2STAG[e.substr(r[1], 2)], "bmp" != t.ds ? t.value = De(s) : t.value = Ve(s), t
                    }, this.readCertPEM = function(e) {
                        this.readCertHex(v(e))
                    }, this.readCertHex = function(e) {
                        this.hex = e, this.getVersion();
                        try {
                            c(this.hex, 0, [0, 7], "a3"), this.parseExt()
                        } catch (e) {}
                    }, this.getParam = function() {
                        var e = {};
                        return e.version = this.getVersion(), e.serial = {
                            hex: this.getSerialNumberHex()
                        }, e.sigalg = this.getSignatureAlgorithmField(), e.issuer = this.getIssuer(), e.notbefore = this.getNotBefore(), e.notafter = this.getNotAfter(), e.subject = this.getSubject(), e.sbjpubkey = He(this.getPublicKeyHex(), "PUBLIC KEY"), this.aExtInfo.length > 0 && (e.ext = this.getExtParamArray()), e.sighex = this.getSignatureValueHex(), e
                    }, this.getExtParamArray = function(e) {
                        null == e && -1 != l(this.hex, 0, [0, "[3]"]) && (e = h(this.hex, 0, [0, "[3]", 0], "30"));
                        for (var t = [], r = i(e, 0), n = 0; n < r.length; n++) {
                            var o = s(e, r[n]),
                                a = this.getExtParam(o);
                            null != a && t.push(a)
                        }
                        return t
                    }, this.getExtParam = function(e) {
                        var t = i(e, 0).length;
                        if (2 != t && 3 != t) throw new Error("wrong number elements in Extension: " + t + " " + e);
                        var r = f(o(e, 0, [0], "06")),
                            n = !1;
                        3 == t && "0101ff" == u(e, 0, [1]) && (n = !0);
                        var s = u(e, 0, [t - 1, 0]),
                            a = void 0;
                        if ("2.5.29.14" == r ? a = this.getExtSubjectKeyIdentifier(s, n) : "2.5.29.15" == r ? a = this.getExtKeyUsage(s, n) : "2.5.29.17" == r ? a = this.getExtSubjectAltName(s, n) : "2.5.29.18" == r ? a = this.getExtIssuerAltName(s, n) : "2.5.29.19" == r ? a = this.getExtBasicConstraints(s, n) : "2.5.29.31" == r ? a = this.getExtCRLDistributionPoints(s, n) : "2.5.29.32" == r ? a = this.getExtCertificatePolicies(s, n) : "2.5.29.35" == r ? a = this.getExtAuthorityKeyIdentifier(s, n) : "2.5.29.37" == r ? a = this.getExtExtKeyUsage(s, n) : "1.3.6.1.5.5.7.1.1" == r ? a = this.getExtAuthorityInfoAccess(s, n) : "2.5.29.20" == r ? a = this.getExtCRLNumber(s, n) : "2.5.29.21" == r ? a = this.getExtCRLReason(s, n) : "1.3.6.1.5.5.7.48.1.2" == r ? a = this.getExtOcspNonce(s, n) : "1.3.6.1.5.5.7.48.1.5" == r ? a = this.getExtOcspNoCheck(s, n) : "1.2.840.113583.1.1.9.1" == r && (a = this.getExtAdobeTimeStamp(s, n)), null != a) return a;
                        var h = {
                            extname: r,
                            extn: s
                        };
                        return n && (h.critical = !0), h
                    }, this.findExt = function(e, t) {
                        for (var r = 0; r < e.length; r++)
                            if (e[r].extname == t) return e[r];
                        return null
                    }, this.updateExtCDPFullURI = function(e, t) {
                        var r = this.findExt(e, "cRLDistributionPoints");
                        if (null != r && null != r.array)
                            for (var i = r.array, n = 0; n < i.length; n++)
                                if (null != i[n].dpname && null != i[n].dpname.full)
                                    for (var s = i[n].dpname.full, o = 0; o < s.length; o++) {
                                        var a = s[n];
                                        null != a.uri && (a.uri = t)
                                    }
                    }, this.updateExtAIAOCSP = function(e, t) {
                        var r = this.findExt(e, "authorityInfoAccess");
                        if (null != r && null != r.array)
                            for (var i = r.array, n = 0; n < i.length; n++) null != i[n].ocsp && (i[n].ocsp = t)
                    }, this.updateExtAIACAIssuer = function(e, t) {
                        var r = this.findExt(e, "authorityInfoAccess");
                        if (null != r && null != r.array)
                            for (var i = r.array, n = 0; n < i.length; n++) null != i[n].caissuer && (i[n].caissuer = t)
                    }, this.dnarraytostr = function(e) {
                        return "/" + e.map((function(e) {
                            return function(e) {
                                return e.map((function(e) {
                                    return function(e) {
                                        return e.type + "=" + e.value
                                    }(e).replace(/\+/, "\\+")
                                })).join("+")
                            }(e).replace(/\//, "\\/")
                        })).join("/")
                    }, this.getInfo = function() {
                        var e, t, r, i, n = function(e) {
                                for (var t = "", r = e.array, i = 0; i < r.length; i++) {
                                    var n = r[i];
                                    if (t += "    policy oid: " + n.policyoid + "\n", void 0 !== n.array)
                                        for (var s = 0; s < n.array.length; s++) {
                                            var o = n.array[s];
                                            void 0 !== o.cps && (t += "    cps: " + o.cps + "\n")
                                        }
                                }
                                return t
                            },
                            s = function(e) {
                                for (var t = "", r = e.array, i = 0; i < r.length; i++) {
                                    var n = r[i];
                                    try {
                                        void 0 !== n.dpname.full[0].uri && (t += "    " + n.dpname.full[0].uri + "\n")
                                    } catch (e) {}
                                    try {
                                        void 0 !== n.dname.full[0].dn.hex && (t += "    " + Qe.hex2dn(n.dpname.full[0].dn.hex) + "\n")
                                    } catch (e) {}
                                }
                                return t
                            },
                            o = function(e) {
                                for (var t = "", r = e.array, i = 0; i < r.length; i++) {
                                    var n = r[i];
                                    void 0 !== n.caissuer && (t += "    caissuer: " + n.caissuer + "\n"), void 0 !== n.ocsp && (t += "    ocsp: " + n.ocsp + "\n")
                                }
                                return t
                            };
                        if (e = "Basic Fields\n", e += "  serial number: " + this.getSerialNumberHex() + "\n", e += "  signature algorithm: " + this.getSignatureAlgorithmField() + "\n", e += "  issuer: " + this.getIssuerString() + "\n", e += "  notBefore: " + this.getNotBefore() + "\n", e += "  notAfter: " + this.getNotAfter() + "\n", e += "  subject: " + this.getSubjectString() + "\n", e += "  subject public key info: \n", e += "    key algorithm: " + (t = this.getPublicKey()).type + "\n", "RSA" === t.type && (e += "    n=" + Le(t.n.toString(16)).substr(0, 16) + "...\n", e += "    e=" + Le(t.e.toString(16)) + "\n"), null != (r = this.aExtInfo)) {
                            e += "X509v3 Extensions:\n";
                            for (var a = 0; a < r.length; a++) {
                                var u = r[a],
                                    h = we.asn1.x509.OID.oid2name(u.oid);
                                "" === h && (h = u.oid);
                                var c = "";
                                if (!0 === u.critical && (c = "CRITICAL"), e += "  " + h + " " + c + ":\n", "basicConstraints" === h) {
                                    var l = this.getExtBasicConstraints();
                                    void 0 === l.cA ? e += "    {}\n" : (e += "    cA=true", void 0 !== l.pathLen && (e += ", pathLen=" + l.pathLen), e += "\n")
                                } else if ("keyUsage" === h) e += "    " + this.getExtKeyUsageString() + "\n";
                                else if ("subjectKeyIdentifier" === h) e += "    " + this.getExtSubjectKeyIdentifier().kid.hex + "\n";
                                else if ("authorityKeyIdentifier" === h) {
                                    var d = this.getExtAuthorityKeyIdentifier();
                                    void 0 !== d.kid && (e += "    kid=" + d.kid.hex + "\n")
                                } else "extKeyUsage" === h ? e += "    " + this.getExtExtKeyUsage().array.join(", ") + "\n" : "subjectAltName" === h ? e += "    " + (i = this.getExtSubjectAltName(), JSON.stringify(i.array).replace(/[\[\]\{\}\"]/g, "") + "\n") : "cRLDistributionPoints" === h ? e += s(this.getExtCRLDistributionPoints()) : "authorityInfoAccess" === h ? e += o(this.getExtAuthorityInfoAccess()) : "certificatePolicies" === h && (e += n(this.getExtCertificatePolicies()))
                            }
                        }
                        return (e += "signature algorithm: " + this.getSignatureAlgorithmName() + "\n") + "signature: " + this.getSignatureValueHex().substr(0, 16) + "...\n"
                    }, "string" == typeof e && (-1 != e.indexOf("-----BEGIN") ? this.readCertPEM(e) : we.lang.String.isHex(e) && this.readCertHex(e))
                }
                ze.getKey = function(e, t, r) {
                    var i, n = (m = xe).getChildIdx,
                        s = (m.getV, m.getVbyList),
                        o = we.crypto,
                        a = o.ECDSA,
                        u = o.DSA,
                        h = me,
                        c = Ue,
                        l = ze;
                    if (void 0 !== h && e instanceof h) return e;
                    if (void 0 !== a && e instanceof a) return e;
                    if (void 0 !== u && e instanceof u) return e;
                    if (void 0 !== e.curve && void 0 !== e.xy && void 0 === e.d) return new a({
                        pub: e.xy,
                        curve: e.curve
                    });
                    if (void 0 !== e.curve && void 0 !== e.d) return new a({
                        prv: e.d,
                        curve: e.curve
                    });
                    if (void 0 === e.kty && void 0 !== e.n && void 0 !== e.e && void 0 === e.d) return (P = new h).setPublic(e.n, e.e), P;
                    if (void 0 === e.kty && void 0 !== e.n && void 0 !== e.e && void 0 !== e.d && void 0 !== e.p && void 0 !== e.q && void 0 !== e.dp && void 0 !== e.dq && void 0 !== e.co && void 0 === e.qi) return (P = new h).setPrivateEx(e.n, e.e, e.d, e.p, e.q, e.dp, e.dq, e.co), P;
                    if (void 0 === e.kty && void 0 !== e.n && void 0 !== e.e && void 0 !== e.d && void 0 === e.p) return (P = new h).setPrivate(e.n, e.e, e.d), P;
                    if (void 0 !== e.p && void 0 !== e.q && void 0 !== e.g && void 0 !== e.y && void 0 === e.x) return (P = new u).setPublic(e.p, e.q, e.g, e.y), P;
                    if (void 0 !== e.p && void 0 !== e.q && void 0 !== e.g && void 0 !== e.y && void 0 !== e.x) return (P = new u).setPrivate(e.p, e.q, e.g, e.y, e.x), P;
                    if ("RSA" === e.kty && void 0 !== e.n && void 0 !== e.e && void 0 === e.d) return (P = new h).setPublic(Ie(e.n), Ie(e.e)), P;
                    if ("RSA" === e.kty && void 0 !== e.n && void 0 !== e.e && void 0 !== e.d && void 0 !== e.p && void 0 !== e.q && void 0 !== e.dp && void 0 !== e.dq && void 0 !== e.qi) return (P = new h).setPrivateEx(Ie(e.n), Ie(e.e), Ie(e.d), Ie(e.p), Ie(e.q), Ie(e.dp), Ie(e.dq), Ie(e.qi)), P;
                    if ("RSA" === e.kty && void 0 !== e.n && void 0 !== e.e && void 0 !== e.d) return (P = new h).setPrivate(Ie(e.n), Ie(e.e), Ie(e.d)), P;
                    if ("EC" === e.kty && void 0 !== e.crv && void 0 !== e.x && void 0 !== e.y && void 0 === e.d) {
                        var d = (k = new a({
                                curve: e.crv
                            })).ecparams.keylen / 4,
                            g = "04" + ("0000000000" + Ie(e.x)).slice(-d) + ("0000000000" + Ie(e.y)).slice(-d);
                        return k.setPublicKeyHex(g), k
                    }
                    if ("EC" === e.kty && void 0 !== e.crv && void 0 !== e.x && void 0 !== e.y && void 0 !== e.d) {
                        d = (k = new a({
                            curve: e.crv
                        })).ecparams.keylen / 4, g = "04" + ("0000000000" + Ie(e.x)).slice(-d) + ("0000000000" + Ie(e.y)).slice(-d);
                        var p = ("0000000000" + Ie(e.d)).slice(-d);
                        return k.setPublicKeyHex(g), k.setPrivateKeyHex(p), k
                    }
                    if ("pkcs5prv" === r) {
                        var f, v = e,
                            m = xe;
                        if (9 === (f = n(v, 0)).length)(P = new h).readPKCS5PrvKeyHex(v);
                        else if (6 === f.length)(P = new u).readPKCS5PrvKeyHex(v);
                        else {
                            if (!(f.length > 2 && "04" === v.substr(f[1], 2))) throw new Error("unsupported PKCS#1/5 hexadecimal key");
                            (P = new a).readPKCS5PrvKeyHex(v)
                        }
                        return P
                    }
                    if ("pkcs8prv" === r) return l.getKeyFromPlainPrivatePKCS8Hex(e);
                    if ("pkcs8pub" === r) return l._getKeyFromPublicPKCS8Hex(e);
                    if ("x509pub" === r) return Qe.getPublicKeyFromCertHex(e);
                    if (-1 != e.indexOf("-END CERTIFICATE-", 0) || -1 != e.indexOf("-END X509 CERTIFICATE-", 0) || -1 != e.indexOf("-END TRUSTED CERTIFICATE-", 0)) return Qe.getPublicKeyFromCertPEM(e);
                    if (-1 != e.indexOf("-END PUBLIC KEY-")) {
                        var y = Ue(e, "PUBLIC KEY");
                        return l._getKeyFromPublicPKCS8Hex(y)
                    }
                    if (-1 != e.indexOf("-END RSA PRIVATE KEY-") && -1 == e.indexOf("4,ENCRYPTED")) {
                        var _ = c(e, "RSA PRIVATE KEY");
                        return l.getKey(_, null, "pkcs5prv")
                    }
                    if (-1 != e.indexOf("-END DSA PRIVATE KEY-") && -1 == e.indexOf("4,ENCRYPTED")) {
                        var S = s(i = c(e, "DSA PRIVATE KEY"), 0, [1], "02"),
                            F = s(i, 0, [2], "02"),
                            w = s(i, 0, [3], "02"),
                            b = s(i, 0, [4], "02"),
                            E = s(i, 0, [5], "02");
                        return (P = new u).setPrivate(new N(S, 16), new N(F, 16), new N(w, 16), new N(b, 16), new N(E, 16)), P
                    }
                    if (-1 != e.indexOf("-END EC PRIVATE KEY-") && -1 == e.indexOf("4,ENCRYPTED")) return _ = c(e, "EC PRIVATE KEY"), l.getKey(_, null, "pkcs5prv");
                    if (-1 != e.indexOf("-END PRIVATE KEY-")) return l.getKeyFromPlainPrivatePKCS8PEM(e);
                    if (-1 != e.indexOf("-END RSA PRIVATE KEY-") && -1 != e.indexOf("4,ENCRYPTED")) {
                        var x = l.getDecryptedKeyHex(e, t),
                            A = new me;
                        return A.readPKCS5PrvKeyHex(x), A
                    }
                    if (-1 != e.indexOf("-END EC PRIVATE KEY-") && -1 != e.indexOf("4,ENCRYPTED")) {
                        var k, P = s(i = l.getDecryptedKeyHex(e, t), 0, [1], "04"),
                            C = s(i, 0, [2, 0], "06"),
                            T = s(i, 0, [3, 0], "03").substr(2);
                        if (void 0 === we.crypto.OID.oidhex2name[C]) throw new Error("undefined OID(hex) in KJUR.crypto.OID: " + C);
                        return (k = new a({
                            curve: we.crypto.OID.oidhex2name[C]
                        })).setPublicKeyHex(T), k.setPrivateKeyHex(P), k.isPublic = !1, k
                    }
                    if (-1 != e.indexOf("-END DSA PRIVATE KEY-") && -1 != e.indexOf("4,ENCRYPTED")) return S = s(i = l.getDecryptedKeyHex(e, t), 0, [1], "02"), F = s(i, 0, [2], "02"), w = s(i, 0, [3], "02"), b = s(i, 0, [4], "02"), E = s(i, 0, [5], "02"), (P = new u).setPrivate(new N(S, 16), new N(F, 16), new N(w, 16), new N(b, 16), new N(E, 16)), P;
                    if (-1 != e.indexOf("-END ENCRYPTED PRIVATE KEY-")) return l.getKeyFromEncryptedPKCS8PEM(e, t);
                    throw new Error("not supported argument")
                }, ze.generateKeypair = function(e, t) {
                    if ("RSA" == e) {
                        var r = t;
                        (o = new me).generate(r, "10001"), o.isPrivate = !0, o.isPublic = !0;
                        var i = new me,
                            n = o.n.toString(16),
                            s = o.e.toString(16);
                        return i.setPublic(n, s), i.isPrivate = !1, i.isPublic = !0, (a = {}).prvKeyObj = o, a.pubKeyObj = i, a
                    }
                    if ("EC" == e) {
                        var o, a, u = t,
                            h = new we.crypto.ECDSA({
                                curve: u
                            }).generateKeyPairHex();
                        return (o = new we.crypto.ECDSA({
                            curve: u
                        })).setPublicKeyHex(h.ecpubhex), o.setPrivateKeyHex(h.ecprvhex), o.isPrivate = !0, o.isPublic = !1, (i = new we.crypto.ECDSA({
                            curve: u
                        })).setPublicKeyHex(h.ecpubhex), i.isPrivate = !1, i.isPublic = !0, (a = {}).prvKeyObj = o, a.pubKeyObj = i, a
                    }
                    throw new Error("unknown algorithm: " + e)
                }, ze.getPEM = function(e, t, r, i, n, s) {
                    var o = we,
                        a = o.asn1,
                        u = a.DERObjectIdentifier,
                        h = a.DERInteger,
                        c = a.ASN1Util.newObject,
                        l = a.x509.SubjectPublicKeyInfo,
                        d = o.crypto,
                        g = d.DSA,
                        p = d.ECDSA,
                        f = me;

                    function v(e) {
                        return c({
                            seq: [{
                                int: 0
                            }, {
                                int: {
                                    bigint: e.n
                                }
                            }, {
                                int: e.e
                            }, {
                                int: {
                                    bigint: e.d
                                }
                            }, {
                                int: {
                                    bigint: e.p
                                }
                            }, {
                                int: {
                                    bigint: e.q
                                }
                            }, {
                                int: {
                                    bigint: e.dmp1
                                }
                            }, {
                                int: {
                                    bigint: e.dmq1
                                }
                            }, {
                                int: {
                                    bigint: e.coeff
                                }
                            }]
                        })
                    }

                    function m(e) {
                        return c({
                            seq: [{
                                int: 1
                            }, {
                                octstr: {
                                    hex: e.prvKeyHex
                                }
                            }, {
                                tag: ["a0", !0, {
                                    oid: {
                                        name: e.curveName
                                    }
                                }]
                            }, {
                                tag: ["a1", !0, {
                                    bitstr: {
                                        hex: "00" + e.pubKeyHex
                                    }
                                }]
                            }]
                        })
                    }

                    function y(e) {
                        return c({
                            seq: [{
                                int: 0
                            }, {
                                int: {
                                    bigint: e.p
                                }
                            }, {
                                int: {
                                    bigint: e.q
                                }
                            }, {
                                int: {
                                    bigint: e.g
                                }
                            }, {
                                int: {
                                    bigint: e.y
                                }
                            }, {
                                int: {
                                    bigint: e.x
                                }
                            }]
                        })
                    }
                    if ((void 0 !== f && e instanceof f || void 0 !== g && e instanceof g || void 0 !== p && e instanceof p) && 1 == e.isPublic && (void 0 === t || "PKCS8PUB" == t)) return He(w = new l(e).getEncodedHex(), "PUBLIC KEY");
                    if ("PKCS1PRV" == t && void 0 !== f && e instanceof f && (void 0 === r || null == r) && 1 == e.isPrivate) return He(w = v(e).getEncodedHex(), "RSA PRIVATE KEY");
                    if ("PKCS1PRV" == t && void 0 !== p && e instanceof p && (void 0 === r || null == r) && 1 == e.isPrivate) {
                        var _ = new u({
                                name: e.curveName
                            }).getEncodedHex(),
                            S = m(e).getEncodedHex(),
                            F = "";
                        return (F += He(_, "EC PARAMETERS")) + He(S, "EC PRIVATE KEY")
                    }
                    if ("PKCS1PRV" == t && void 0 !== g && e instanceof g && (void 0 === r || null == r) && 1 == e.isPrivate) return He(w = y(e).getEncodedHex(), "DSA PRIVATE KEY");
                    if ("PKCS5PRV" == t && void 0 !== f && e instanceof f && void 0 !== r && null != r && 1 == e.isPrivate) {
                        var w = v(e).getEncodedHex();
                        return void 0 === i && (i = "DES-EDE3-CBC"), this.getEncryptedPKCS5PEMFromPrvKeyHex("RSA", w, r, i, s)
                    }
                    if ("PKCS5PRV" == t && void 0 !== p && e instanceof p && void 0 !== r && null != r && 1 == e.isPrivate) return w = m(e).getEncodedHex(), void 0 === i && (i = "DES-EDE3-CBC"), this.getEncryptedPKCS5PEMFromPrvKeyHex("EC", w, r, i, s);
                    if ("PKCS5PRV" == t && void 0 !== g && e instanceof g && void 0 !== r && null != r && 1 == e.isPrivate) return w = y(e).getEncodedHex(), void 0 === i && (i = "DES-EDE3-CBC"), this.getEncryptedPKCS5PEMFromPrvKeyHex("DSA", w, r, i, s);
                    var b = function(e, t) {
                            var r = E(e, t);
                            return new c({
                                seq: [{
                                    seq: [{
                                        oid: {
                                            name: "pkcs5PBES2"
                                        }
                                    }, {
                                        seq: [{
                                            seq: [{
                                                oid: {
                                                    name: "pkcs5PBKDF2"
                                                }
                                            }, {
                                                seq: [{
                                                    octstr: {
                                                        hex: r.pbkdf2Salt
                                                    }
                                                }, {
                                                    int: r.pbkdf2Iter
                                                }]
                                            }]
                                        }, {
                                            seq: [{
                                                oid: {
                                                    name: "des-EDE3-CBC"
                                                }
                                            }, {
                                                octstr: {
                                                    hex: r.encryptionSchemeIV
                                                }
                                            }]
                                        }]
                                    }]
                                }, {
                                    octstr: {
                                        hex: r.ciphertext
                                    }
                                }]
                            }).getEncodedHex()
                        },
                        E = function(e, t) {
                            var r = P.lib.WordArray.random(8),
                                i = P.lib.WordArray.random(8),
                                n = P.PBKDF2(t, r, {
                                    keySize: 6,
                                    iterations: 100
                                }),
                                s = P.enc.Hex.parse(e),
                                o = P.TripleDES.encrypt(s, n, {
                                    iv: i
                                }) + "",
                                a = {};
                            return a.ciphertext = o, a.pbkdf2Salt = P.enc.Hex.stringify(r), a.pbkdf2Iter = 100, a.encryptionSchemeAlg = "DES-EDE3-CBC", a.encryptionSchemeIV = P.enc.Hex.stringify(i), a
                        };
                    if ("PKCS8PRV" == t && null != f && e instanceof f && 1 == e.isPrivate) {
                        var x = v(e).getEncodedHex();
                        return w = c({
                            seq: [{
                                int: 0
                            }, {
                                seq: [{
                                    oid: {
                                        name: "rsaEncryption"
                                    }
                                }, {
                                    null: !0
                                }]
                            }, {
                                octstr: {
                                    hex: x
                                }
                            }]
                        }).getEncodedHex(), void 0 === r || null == r ? He(w, "PRIVATE KEY") : He(S = b(w, r), "ENCRYPTED PRIVATE KEY")
                    }
                    if ("PKCS8PRV" == t && void 0 !== p && e instanceof p && 1 == e.isPrivate) return x = new c({
                        seq: [{
                            int: 1
                        }, {
                            octstr: {
                                hex: e.prvKeyHex
                            }
                        }, {
                            tag: ["a1", !0, {
                                bitstr: {
                                    hex: "00" + e.pubKeyHex
                                }
                            }]
                        }]
                    }).getEncodedHex(), w = c({
                        seq: [{
                            int: 0
                        }, {
                            seq: [{
                                oid: {
                                    name: "ecPublicKey"
                                }
                            }, {
                                oid: {
                                    name: e.curveName
                                }
                            }]
                        }, {
                            octstr: {
                                hex: x
                            }
                        }]
                    }).getEncodedHex(), void 0 === r || null == r ? He(w, "PRIVATE KEY") : He(S = b(w, r), "ENCRYPTED PRIVATE KEY");
                    if ("PKCS8PRV" == t && void 0 !== g && e instanceof g && 1 == e.isPrivate) return x = new h({
                        bigint: e.x
                    }).getEncodedHex(), w = c({
                        seq: [{
                            int: 0
                        }, {
                            seq: [{
                                oid: {
                                    name: "dsa"
                                }
                            }, {
                                seq: [{
                                    int: {
                                        bigint: e.p
                                    }
                                }, {
                                    int: {
                                        bigint: e.q
                                    }
                                }, {
                                    int: {
                                        bigint: e.g
                                    }
                                }]
                            }]
                        }, {
                            octstr: {
                                hex: x
                            }
                        }]
                    }).getEncodedHex(), void 0 === r || null == r ? He(w, "PRIVATE KEY") : He(S = b(w, r), "ENCRYPTED PRIVATE KEY");
                    throw new Error("unsupported object nor format")
                }, ze.getKeyFromCSRPEM = function(e) {
                    var t = Ue(e, "CERTIFICATE REQUEST");
                    return ze.getKeyFromCSRHex(t)
                }, ze.getKeyFromCSRHex = function(e) {
                    var t = ze.parseCSRHex(e);
                    return ze.getKey(t.p8pubkeyhex, null, "pkcs8pub")
                }, ze.parseCSRHex = function(e) {
                    var t = xe,
                        r = t.getChildIdx,
                        i = t.getTLV,
                        n = {},
                        s = e;
                    if ("30" != s.substr(0, 2)) throw new Error("malformed CSR(code:001)");
                    var o = r(s, 0);
                    if (o.length < 1) throw new Error("malformed CSR(code:002)");
                    if ("30" != s.substr(o[0], 2)) throw new Error("malformed CSR(code:003)");
                    var a = r(s, o[0]);
                    if (a.length < 3) throw new Error("malformed CSR(code:004)");
                    return n.p8pubkeyhex = i(s, a[2]), n
                }, ze.getKeyID = function(e) {
                    var t = ze,
                        r = xe;
                    "string" == typeof e && -1 != e.indexOf("BEGIN ") && (e = t.getKey(e));
                    var i = Ue(t.getPEM(e)),
                        n = r.getIdxbyList(i, 0, [1]),
                        s = r.getV(i, n).substring(2);
                    return we.crypto.Util.hashHex(s, "sha1")
                }, ze.getJWKFromKey = function(e) {
                    var t = {};
                    if (e instanceof me && e.isPrivate) return t.kty = "RSA", t.n = Te(e.n.toString(16)), t.e = Te(e.e.toString(16)), t.d = Te(e.d.toString(16)), t.p = Te(e.p.toString(16)), t.q = Te(e.q.toString(16)), t.dp = Te(e.dmp1.toString(16)), t.dq = Te(e.dmq1.toString(16)), t.qi = Te(e.coeff.toString(16)), t;
                    if (e instanceof me && e.isPublic) return t.kty = "RSA", t.n = Te(e.n.toString(16)), t.e = Te(e.e.toString(16)), t;
                    if (e instanceof we.crypto.ECDSA && e.isPrivate) {
                        if ("P-256" !== (i = e.getShortNISTPCurveName()) && "P-384" !== i) throw new Error("unsupported curve name for JWT: " + i);
                        var r = e.getPublicKeyXYHex();
                        return t.kty = "EC", t.crv = i, t.x = Te(r.x), t.y = Te(r.y), t.d = Te(e.prvKeyHex), t
                    }
                    if (e instanceof we.crypto.ECDSA && e.isPublic) {
                        var i;
                        if ("P-256" !== (i = e.getShortNISTPCurveName()) && "P-384" !== i) throw new Error("unsupported curve name for JWT: " + i);
                        return r = e.getPublicKeyXYHex(), t.kty = "EC", t.crv = i, t.x = Te(r.x), t.y = Te(r.y), t
                    }
                    throw new Error("not supported key object")
                }, me.getPosArrayOfChildrenFromHex = function(e) {
                    return xe.getChildIdx(e, 0)
                }, me.getHexValueArrayOfChildrenFromHex = function(e) {
                    var t, r = xe.getV,
                        i = r(e, (t = me.getPosArrayOfChildrenFromHex(e))[0]),
                        n = r(e, t[1]),
                        s = r(e, t[2]),
                        o = r(e, t[3]),
                        a = r(e, t[4]),
                        u = r(e, t[5]),
                        h = r(e, t[6]),
                        c = r(e, t[7]),
                        l = r(e, t[8]);
                    return (t = new Array).push(i, n, s, o, a, u, h, c, l), t
                }, me.prototype.readPrivateKeyFromPEMString = function(e) {
                    var t = Ue(e),
                        r = me.getHexValueArrayOfChildrenFromHex(t);
                    this.setPrivateEx(r[1], r[2], r[3], r[4], r[5], r[6], r[7], r[8])
                }, me.prototype.readPKCS5PrvKeyHex = function(e) {
                    var t = me.getHexValueArrayOfChildrenFromHex(e);
                    this.setPrivateEx(t[1], t[2], t[3], t[4], t[5], t[6], t[7], t[8])
                }, me.prototype.readPKCS8PrvKeyHex = function(e) {
                    var t, r, i, n, s, o, a, u, h = xe,
                        c = h.getVbyListEx;
                    if (!1 === h.isASN1HEX(e)) throw new Error("not ASN.1 hex string");
                    try {
                        t = c(e, 0, [2, 0, 1], "02"), r = c(e, 0, [2, 0, 2], "02"), i = c(e, 0, [2, 0, 3], "02"), n = c(e, 0, [2, 0, 4], "02"), s = c(e, 0, [2, 0, 5], "02"), o = c(e, 0, [2, 0, 6], "02"), a = c(e, 0, [2, 0, 7], "02"), u = c(e, 0, [2, 0, 8], "02")
                    } catch (e) {
                        throw new Error("malformed PKCS#8 plain RSA private key")
                    }
                    this.setPrivateEx(t, r, i, n, s, o, a, u)
                }, me.prototype.readPKCS5PubKeyHex = function(e) {
                    var t = xe,
                        r = t.getV;
                    if (!1 === t.isASN1HEX(e)) throw new Error("keyHex is not ASN.1 hex string");
                    var i = t.getChildIdx(e, 0);
                    if (2 !== i.length || "02" !== e.substr(i[0], 2) || "02" !== e.substr(i[1], 2)) throw new Error("wrong hex for PKCS#5 public key");
                    var n = r(e, i[0]),
                        s = r(e, i[1]);
                    this.setPublic(n, s)
                }, me.prototype.readPKCS8PubKeyHex = function(e) {
                    var t = xe;
                    if (!1 === t.isASN1HEX(e)) throw new Error("not ASN.1 hex string");
                    if ("06092a864886f70d010101" !== t.getTLVbyListEx(e, 0, [0, 0])) throw new Error("not PKCS8 RSA public key");
                    var r = t.getTLVbyListEx(e, 0, [1, 0]);
                    this.readPKCS5PubKeyHex(r)
                }, me.prototype.readCertPubKeyHex = function(e, t) {
                    var r, i;
                    (r = new Qe).readCertHex(e), i = r.getPublicKeyHex(), this.readPKCS8PubKeyHex(i)
                }, me.prototype.sign = function(e, t) {
                    var r = function(e) {
                        return we.crypto.Util.hashString(e, t)
                    }(e);
                    return this.signWithMessageHash(r, t)
                }, me.prototype.signWithMessageHash = function(e, t) {
                    var r = fe(we.crypto.Util.getPaddedDigestInfoHex(e, t, this.n.bitLength()), 16);
                    return Ge(this.doPrivate(r).toString(16), this.n.bitLength())
                }, me.prototype.signPSS = function(e, t, r) {
                    var i, n = (i = Be(e), we.crypto.Util.hashHex(i, t));
                    return void 0 === r && (r = -1), this.signWithMessageHashPSS(n, t, r)
                }, me.prototype.signWithMessageHashPSS = function(e, t, r) {
                    var i, n = Ne(e),
                        s = n.length,
                        o = this.n.bitLength() - 1,
                        a = Math.ceil(o / 8),
                        u = function(e) {
                            return we.crypto.Util.hashHex(e, t)
                        };
                    if (-1 === r || void 0 === r) r = s;
                    else if (-2 === r) r = a - s - 2;
                    else if (r < -2) throw new Error("invalid salt length");
                    if (a < s + r + 2) throw new Error("data too long");
                    var h = "";
                    r > 0 && (h = new Array(r), (new pe).nextBytes(h), h = String.fromCharCode.apply(String, h));
                    var c = Ne(u(Be("\0\0\0\0\0\0\0\0" + n + h))),
                        l = [];
                    for (i = 0; i < a - r - s - 2; i += 1) l[i] = 0;
                    var d = String.fromCharCode.apply(String, l) + "" + h,
                        g = Ye(c, d.length, u),
                        p = [];
                    for (i = 0; i < d.length; i += 1) p[i] = d.charCodeAt(i) ^ g.charCodeAt(i);
                    var f = 65280 >> 8 * a - o & 255;
                    for (p[0] &= ~f, i = 0; i < s; i++) p.push(c.charCodeAt(i));
                    return p.push(188), Ge(this.doPrivate(new N(p)).toString(16), this.n.bitLength())
                }, me.prototype.verify = function(e, t) {
                    if (null == (t = t.toLowerCase()).match(/^[0-9a-f]+$/)) return !1;
                    var r = fe(t, 16),
                        i = this.n.bitLength();
                    if (r.bitLength() > i) return !1;
                    var n = this.doPublic(r).toString(16);
                    if (n.length + 3 != i / 4) return !1;
                    var s = Xe(n.replace(/^1f+00/, ""));
                    if (0 == s.length) return !1;
                    var o = s[0],
                        a = s[1],
                        u = function(e) {
                            return we.crypto.Util.hashString(e, o)
                        }(e);
                    return a == u
                }, me.prototype.verifyWithMessageHash = function(e, t) {
                    if (t.length != Math.ceil(this.n.bitLength() / 4)) return !1;
                    var r = fe(t, 16);
                    if (r.bitLength() > this.n.bitLength()) return 0;
                    var i = Xe(this.doPublic(r).toString(16).replace(/^1f+00/, ""));
                    return 0 != i.length && (i[0], i[1] == e)
                }, me.prototype.verifyPSS = function(e, t, r, i) {
                    var n, s = (n = Be(e), we.crypto.Util.hashHex(n, r));
                    return void 0 === i && (i = -1), this.verifyWithMessageHashPSS(s, t, r, i)
                }, me.prototype.verifyWithMessageHashPSS = function(e, t, r, i) {
                    if (t.length != Math.ceil(this.n.bitLength() / 4)) return !1;
                    var n, s = new N(t, 16),
                        o = function(e) {
                            return we.crypto.Util.hashHex(e, r)
                        },
                        a = Ne(e),
                        u = a.length,
                        h = this.n.bitLength() - 1,
                        c = Math.ceil(h / 8);
                    if (-1 === i || void 0 === i) i = u;
                    else if (-2 === i) i = c - u - 2;
                    else if (i < -2) throw new Error("invalid salt length");
                    if (c < u + i + 2) throw new Error("data too long");
                    var l = this.doPublic(s).toByteArray();
                    for (n = 0; n < l.length; n += 1) l[n] &= 255;
                    for (; l.length < c;) l.unshift(0);
                    if (188 !== l[c - 1]) throw new Error("encoded message does not end in 0xbc");
                    var d = (l = String.fromCharCode.apply(String, l)).substr(0, c - u - 1),
                        g = l.substr(d.length, u),
                        p = 65280 >> 8 * c - h & 255;
                    if (0 != (d.charCodeAt(0) & p)) throw new Error("bits beyond keysize not zero");
                    var f = Ye(g, d.length, o),
                        v = [];
                    for (n = 0; n < d.length; n += 1) v[n] = d.charCodeAt(n) ^ f.charCodeAt(n);
                    v[0] &= ~p;
                    var m = c - u - i - 2;
                    for (n = 0; n < m; n += 1)
                        if (0 !== v[n]) throw new Error("leftmost octets not zero");
                    if (1 !== v[m]) throw new Error("0x01 marker not found");
                    return g === Ne(o(Be("\0\0\0\0\0\0\0\0" + a + String.fromCharCode.apply(String, v.slice(-i)))))
                }, me.SALT_LEN_HLEN = -1, me.SALT_LEN_MAX = -2, me.SALT_LEN_RECOVER = -2, Qe.hex2dn = function(e, t) {
                    void 0 === t && (t = 0);
                    var r = new Qe;
                    return xe.getTLV(e, t), r.getX500Name(e).str
                }, Qe.hex2rdn = function(e, t) {
                    if (void 0 === t && (t = 0), "31" !== e.substr(t, 2)) throw new Error("malformed RDN");
                    for (var r = new Array, i = xe.getChildIdx(e, t), n = 0; n < i.length; n++) r.push(Qe.hex2attrTypeValue(e, i[n]));
                    return r = r.map((function(e) {
                        return e.replace("+", "\\+")
                    })), r.join("+")
                }, Qe.hex2attrTypeValue = function(e, t) {
                    var r = xe,
                        i = r.getV;
                    if (void 0 === t && (t = 0), "30" !== e.substr(t, 2)) throw new Error("malformed attribute type and value");
                    var n = r.getChildIdx(e, t);
                    2 !== n.length || e.substr(n[0], 2);
                    var s = i(e, n[0]),
                        o = we.asn1.ASN1Util.oidHexToInt(s);
                    return we.asn1.x509.OID.oid2atype(o) + "=" + Ne(i(e, n[1]))
                }, Qe.getPublicKeyFromCertHex = function(e) {
                    var t = new Qe;
                    return t.readCertHex(e), t.getPublicKey()
                }, Qe.getPublicKeyFromCertPEM = function(e) {
                    var t = new Qe;
                    return t.readCertPEM(e), t.getPublicKey()
                }, Qe.getPublicKeyInfoPropOfCertPEM = function(e) {
                    var t, r, i = xe.getVbyList,
                        n = {
                            algparam: null
                        };
                    return (t = new Qe).readCertPEM(e), r = t.getPublicKeyHex(), n.keyhex = i(r, 0, [1], "03").substr(2), n.algoid = i(r, 0, [0, 0], "06"), "2a8648ce3d0201" === n.algoid && (n.algparam = i(r, 0, [0, 1], "06")), n
                }, Qe.KEYUSAGE_NAME = ["digitalSignature", "nonRepudiation", "keyEncipherment", "dataEncipherment", "keyAgreement", "keyCertSign", "cRLSign", "encipherOnly", "decipherOnly"], void 0 !== we && we || (we = {}), void 0 !== we.jws && we.jws || (we.jws = {}), we.jws.JWS = function() {
                    var e = we.jws.JWS.isSafeJSONString;
                    this.parseJWS = function(t, r) {
                        if (void 0 === this.parsedJWS || !r && void 0 === this.parsedJWS.sigvalH) {
                            var i = t.match(/^([^.]+)\.([^.]+)\.([^.]+)$/);
                            if (null == i) throw "JWS signature is not a form of 'Head.Payload.SigValue'.";
                            var n = i[1],
                                s = i[2],
                                o = i[3],
                                a = n + "." + s;
                            if (this.parsedJWS = {}, this.parsedJWS.headB64U = n, this.parsedJWS.payloadB64U = s, this.parsedJWS.sigvalB64U = o, this.parsedJWS.si = a, !r) {
                                var u = Ie(o),
                                    h = fe(u, 16);
                                this.parsedJWS.sigvalH = u, this.parsedJWS.sigvalBI = h
                            }
                            var c = Ee(n),
                                l = Ee(s);
                            if (this.parsedJWS.headS = c, this.parsedJWS.payloadS = l, !e(c, this.parsedJWS, "headP")) throw "malformed JSON string for JWS Head: " + c
                        }
                    }
                }, we.jws.JWS.sign = function(e, t, r, i, n) {
                    var s, o, a, u = we,
                        h = u.jws.JWS,
                        c = h.readSafeJSONString,
                        l = h.isSafeJSONString,
                        d = u.crypto,
                        g = (d.ECDSA, d.Mac),
                        p = d.Signature,
                        f = JSON;
                    if ("string" != typeof t && "object" != typeof t) throw "spHeader must be JSON string or object: " + t;
                    if ("object" == typeof t && (o = t, s = f.stringify(o)), "string" == typeof t) {
                        if (!l(s = t)) throw "JWS Head is not safe JSON string: " + s;
                        o = c(s)
                    }
                    if (a = r, "object" == typeof r && (a = f.stringify(r)), "" != e && null != e || void 0 === o.alg || (e = o.alg), "" != e && null != e && void 0 === o.alg && (o.alg = e, s = f.stringify(o)), e !== o.alg) throw "alg and sHeader.alg doesn't match: " + e + "!=" + o.alg;
                    var v = null;
                    if (void 0 === h.jwsalg2sigalg[e]) throw "unsupported alg name: " + e;
                    v = h.jwsalg2sigalg[e];
                    var m = be(s) + "." + be(a),
                        y = "";
                    if ("Hmac" == v.substr(0, 4)) {
                        if (void 0 === i) throw "mac key shall be specified for HS* alg";
                        var _ = new g({
                            alg: v,
                            prov: "cryptojs",
                            pass: i
                        });
                        _.updateString(m), y = _.doFinal()
                    } else if (-1 != v.indexOf("withECDSA")) {
                        (F = new p({
                            alg: v
                        })).init(i, n), F.updateString(m);
                        var S = F.sign();
                        y = we.crypto.ECDSA.asn1SigToConcatSig(S)
                    } else {
                        var F;
                        "none" != v && ((F = new p({
                            alg: v
                        })).init(i, n), F.updateString(m), y = F.sign())
                    }
                    return m + "." + Te(y)
                }, we.jws.JWS.verify = function(e, t, r) {
                    var i, n = we,
                        s = n.jws.JWS,
                        o = s.readSafeJSONString,
                        a = n.crypto,
                        u = a.ECDSA,
                        h = a.Mac,
                        c = a.Signature;
                    i = me;
                    var l = e.split(".");
                    if (3 !== l.length) return !1;
                    var d, g = l[0] + "." + l[1],
                        p = Ie(l[2]),
                        f = o(Ee(l[0])),
                        v = null;
                    if (void 0 === f.alg) throw "algorithm not specified in header";
                    if (d = (v = f.alg).substr(0, 2), null != r && "[object Array]" === Object.prototype.toString.call(r) && r.length > 0 && -1 == (":" + r.join(":") + ":").indexOf(":" + v + ":")) throw "algorithm '" + v + "' not accepted in the list";
                    if ("none" != v && null === t) throw "key shall be specified to verify.";
                    if ("string" == typeof t && -1 != t.indexOf("-----BEGIN ") && (t = ze.getKey(t)), !("RS" != d && "PS" != d || t instanceof i)) throw "key shall be a RSAKey obj for RS* and PS* algs";
                    if ("ES" == d && !(t instanceof u)) throw "key shall be a ECDSA obj for ES* algs";
                    var m = null;
                    if (void 0 === s.jwsalg2sigalg[f.alg]) throw "unsupported alg name: " + v;
                    if ("none" == (m = s.jwsalg2sigalg[v])) throw "not supported";
                    if ("Hmac" == m.substr(0, 4)) {
                        if (void 0 === t) throw "hexadecimal key shall be specified for HMAC";
                        var y = new h({
                            alg: m,
                            pass: t
                        });
                        return y.updateString(g), p == y.doFinal()
                    }
                    if (-1 != m.indexOf("withECDSA")) {
                        var _, S = null;
                        try {
                            S = u.concatSigToASN1Sig(p)
                        } catch (e) {
                            return !1
                        }
                        return (_ = new c({
                            alg: m
                        })).init(t), _.updateString(g), _.verify(S)
                    }
                    return (_ = new c({
                        alg: m
                    })).init(t), _.updateString(g), _.verify(p)
                }, we.jws.JWS.parse = function(e) {
                    var t, r, i, n = e.split("."),
                        s = {};
                    if (2 != n.length && 3 != n.length) throw "malformed sJWS: wrong number of '.' splitted elements";
                    return t = n[0], r = n[1], 3 == n.length && (i = n[2]), s.headerObj = we.jws.JWS.readSafeJSONString(Ee(t)), s.payloadObj = we.jws.JWS.readSafeJSONString(Ee(r)), s.headerPP = JSON.stringify(s.headerObj, null, "  "), null == s.payloadObj ? s.payloadPP = Ee(r) : s.payloadPP = JSON.stringify(s.payloadObj, null, "  "), void 0 !== i && (s.sigHex = Ie(i)), s
                }, we.jws.JWS.verifyJWT = function(e, t, r) {
                    var i = we.jws,
                        n = i.JWS,
                        s = n.readSafeJSONString,
                        o = n.inArray,
                        a = n.includedArray,
                        u = e.split("."),
                        h = u[0],
                        c = u[1],
                        l = (Ie(u[2]), s(Ee(h))),
                        d = s(Ee(c));
                    if (void 0 === l.alg) return !1;
                    if (void 0 === r.alg) throw "acceptField.alg shall be specified";
                    if (!o(l.alg, r.alg)) return !1;
                    if (void 0 !== d.iss && "object" == typeof r.iss && !o(d.iss, r.iss)) return !1;
                    if (void 0 !== d.sub && "object" == typeof r.sub && !o(d.sub, r.sub)) return !1;
                    if (void 0 !== d.aud && "object" == typeof r.aud)
                        if ("string" == typeof d.aud) {
                            if (!o(d.aud, r.aud)) return !1
                        } else if ("object" == typeof d.aud && !a(d.aud, r.aud)) return !1;
                    var g = i.IntDate.getNow();
                    return void 0 !== r.verifyAt && "number" == typeof r.verifyAt && (g = r.verifyAt), void 0 !== r.gracePeriod && "number" == typeof r.gracePeriod || (r.gracePeriod = 0), !(void 0 !== d.exp && "number" == typeof d.exp && d.exp + r.gracePeriod < g || void 0 !== d.nbf && "number" == typeof d.nbf && g < d.nbf - r.gracePeriod || void 0 !== d.iat && "number" == typeof d.iat && g < d.iat - r.gracePeriod || void 0 !== d.jti && void 0 !== r.jti && d.jti !== r.jti || !n.verify(e, t, r.alg))
                }, we.jws.JWS.includedArray = function(e, t) {
                    var r = we.jws.JWS.inArray;
                    if (null === e) return !1;
                    if ("object" != typeof e) return !1;
                    if ("number" != typeof e.length) return !1;
                    for (var i = 0; i < e.length; i++)
                        if (!r(e[i], t)) return !1;
                    return !0
                }, we.jws.JWS.inArray = function(e, t) {
                    if (null === t) return !1;
                    if ("object" != typeof t) return !1;
                    if ("number" != typeof t.length) return !1;
                    for (var r = 0; r < t.length; r++)
                        if (t[r] == e) return !0;
                    return !1
                }, we.jws.JWS.jwsalg2sigalg = {
                    HS256: "HmacSHA256",
                    HS384: "HmacSHA384",
                    HS512: "HmacSHA512",
                    RS256: "SHA256withRSA",
                    RS384: "SHA384withRSA",
                    RS512: "SHA512withRSA",
                    ES256: "SHA256withECDSA",
                    ES384: "SHA384withECDSA",
                    PS256: "SHA256withRSAandMGF1",
                    PS384: "SHA384withRSAandMGF1",
                    PS512: "SHA512withRSAandMGF1",
                    none: "none"
                }, we.jws.JWS.isSafeJSONString = function(e, t, r) {
                    var i = null;
                    try {
                        return "object" != typeof(i = Fe(e)) || i.constructor === Array ? 0 : (t && (t[r] = i), 1)
                    } catch (e) {
                        return 0
                    }
                }, we.jws.JWS.readSafeJSONString = function(e) {
                    var t = null;
                    try {
                        return "object" != typeof(t = Fe(e)) || t.constructor === Array ? null : t
                    } catch (e) {
                        return null
                    }
                }, we.jws.JWS.getEncodedSignatureValueFromJWS = function(e) {
                    var t = e.match(/^[^.]+\.[^.]+\.([^.]+)$/);
                    if (null == t) throw "JWS signature is not a form of 'Head.Payload.SigValue'.";
                    return t[1]
                }, we.jws.JWS.getJWKthumbprint = function(e) {
                    if ("RSA" !== e.kty && "EC" !== e.kty && "oct" !== e.kty) throw "unsupported algorithm for JWK Thumprint";
                    var t = "{";
                    if ("RSA" === e.kty) {
                        if ("string" != typeof e.n || "string" != typeof e.e) throw "wrong n and e value for RSA key";
                        t += '"e":"' + e.e + '",', t += '"kty":"' + e.kty + '",', t += '"n":"' + e.n + '"}'
                    } else if ("EC" === e.kty) {
                        if ("string" != typeof e.crv || "string" != typeof e.x || "string" != typeof e.y) throw "wrong crv, x and y value for EC key";
                        t += '"crv":"' + e.crv + '",', t += '"kty":"' + e.kty + '",', t += '"x":"' + e.x + '",', t += '"y":"' + e.y + '"}'
                    } else if ("oct" === e.kty) {
                        if ("string" != typeof e.k) throw "wrong k value for oct(symmetric) key";
                        t += '"kty":"' + e.kty + '",', t += '"k":"' + e.k + '"}'
                    }
                    var r = Be(t);
                    return Te(we.crypto.Util.hashHex(r, "sha256"))
                }, we.jws.IntDate = {}, we.jws.IntDate.get = function(e) {
                    var t = we.jws.IntDate,
                        r = t.getNow,
                        i = t.getZulu;
                    if ("now" == e) return r();
                    if ("now + 1hour" == e) return r() + 3600;
                    if ("now + 1day" == e) return r() + 86400;
                    if ("now + 1month" == e) return r() + 2592e3;
                    if ("now + 1year" == e) return r() + 31536e3;
                    if (e.match(/Z$/)) return i(e);
                    if (e.match(/^[0-9]+$/)) return parseInt(e);
                    throw "unsupported format: " + e
                }, we.jws.IntDate.getZulu = function(e) {
                    return function(e) {
                        return ~~(function(e) {
                            var t, r, i, n, s, o, a, u, h, c, l;
                            if (l = e.match(/^(\d{2}|\d{4})(\d\d)(\d\d)(\d\d)(\d\d)(\d\d)(|\.\d+)Z$/)) return u = l[1], t = parseInt(u), 2 === u.length && (50 <= t && t < 100 ? t = 1900 + t : 0 <= t && t < 50 && (t = 2e3 + t)), r = parseInt(l[2]) - 1, i = parseInt(l[3]), n = parseInt(l[4]), s = parseInt(l[5]), o = parseInt(l[6]), a = 0, "" !== (h = l[7]) && (c = (h.substr(1) + "00").substr(0, 3), a = parseInt(c)), Date.UTC(t, r, i, n, s, o, a);
                            throw "unsupported zulu format: " + e
                        }(e) / 1e3)
                    }(e)
                }, we.jws.IntDate.getNow = function() {
                    return ~~(new Date / 1e3)
                }, we.jws.IntDate.intDate2UTCString = function(e) {
                    return new Date(1e3 * e).toUTCString()
                }, we.jws.IntDate.intDate2Zulu = function(e) {
                    var t = new Date(1e3 * e);
                    return ("0000" + t.getUTCFullYear()).slice(-4) + ("00" + (t.getUTCMonth() + 1)).slice(-2) + ("00" + t.getUTCDate()).slice(-2) + ("00" + t.getUTCHours()).slice(-2) + ("00" + t.getUTCMinutes()).slice(-2) + ("00" + t.getUTCSeconds()).slice(-2) + "Z"
                };
                const {
                    EDSA: $e
                } = we.crypto, {
                    DSA: Ze
                } = we.crypto, {
                    Signature: et
                } = we.crypto, {
                    MessageDigest: tt
                } = we.crypto, {
                    Mac: rt
                } = we.crypto, {
                    Cipher: it
                } = we.crypto, nt = we.crypto, {
                    asn1: st
                } = we, {
                    jws: ot
                } = we, {
                    lang: at
                } = we, ut = function({
                    jws: e,
                    KeyUtil: t,
                    X509: r,
                    crypto: i,
                    hextob64u: n,
                    b64tohex: o,
                    AllowedSigningAlgs: a
                }) {
                    return class u {
                        static parseJwt(t) {
                            s.debug("JoseUtil.parseJwt");
                            try {
                                var r = e.JWS.parse(t);
                                return {
                                    header: r.headerObj,
                                    payload: r.payloadObj
                                }
                            } catch (e) {
                                s.error(e)
                            }
                        }
                        static validateJwt(e, i, n, a, h, c, l) {
                            s.debug("JoseUtil.validateJwt");
                            try {
                                if ("RSA" === i.kty)
                                    if (i.e && i.n) i = t.getKey(i);
                                    else {
                                        if (!i.x5c || !i.x5c.length) return s.error("JoseUtil.validateJwt: RSA key missing key material", i), Promise.reject(new Error("RSA key missing key material"));
                                        var d = o(i.x5c[0]);
                                        i = r.getPublicKeyFromCertHex(d)
                                    }
                                else {
                                    if ("EC" !== i.kty) return s.error("JoseUtil.validateJwt: Unsupported key type", i && i.kty), Promise.reject(new Error("Unsupported key type: " + i && i.kty));
                                    if (!(i.crv && i.x && i.y)) return s.error("JoseUtil.validateJwt: EC key missing key material", i), Promise.reject(new Error("EC key missing key material"));
                                    i = t.getKey(i)
                                }
                                return u._validateJwt(e, i, n, a, h, c, l)
                            } catch (e) {
                                return s.error(e && e.message || e), Promise.reject("JWT validation failed")
                            }
                        }
                        static validateJwtAttributes(e, t, r, i, n, o) {
                            i || (i = 0), n || (n = parseInt(Date.now() / 1e3));
                            var a = u.parseJwt(e).payload;
                            if (!a.iss) return s.error("JoseUtil._validateJwt: issuer was not provided"), Promise.reject(new Error("issuer was not provided"));
                            if (a.iss !== t) return s.error("JoseUtil._validateJwt: Invalid issuer in token", a.iss), Promise.reject(new Error("Invalid issuer in token: " + a.iss));
                            if (!a.aud) return s.error("JoseUtil._validateJwt: aud was not provided"), Promise.reject(new Error("aud was not provided"));
                            if (!(a.aud === r || Array.isArray(a.aud) && a.aud.indexOf(r) >= 0)) return s.error("JoseUtil._validateJwt: Invalid audience in token", a.aud), Promise.reject(new Error("Invalid audience in token: " + a.aud));
                            if (a.azp && a.azp !== r) return s.error("JoseUtil._validateJwt: Invalid azp in token", a.azp), Promise.reject(new Error("Invalid azp in token: " + a.azp));
                            if (!o) {
                                var h = n + i,
                                    c = n - i;
                                if (!a.iat) return s.error("JoseUtil._validateJwt: iat was not provided"), Promise.reject(new Error("iat was not provided"));
                                if (h < a.iat) return s.error("JoseUtil._validateJwt: iat is in the future", a.iat), Promise.reject(new Error("iat is in the future: " + a.iat));
                                if (a.nbf && h < a.nbf) return s.error("JoseUtil._validateJwt: nbf is in the future", a.nbf), Promise.reject(new Error("nbf is in the future: " + a.nbf));
                                if (!a.exp) return s.error("JoseUtil._validateJwt: exp was not provided"), Promise.reject(new Error("exp was not provided"));
                                if (a.exp < c) return s.error("JoseUtil._validateJwt: exp is in the past", a.exp), Promise.reject(new Error("exp is in the past:" + a.exp))
                            }
                            return Promise.resolve(a)
                        }
                        static _validateJwt(t, r, i, n, o, h, c) {
                            return u.validateJwtAttributes(t, i, n, o, h, c).then((i => {
                                try {
                                    return e.JWS.verify(t, r, a) ? i : (s.error("JoseUtil._validateJwt: signature validation failed"), Promise.reject(new Error("signature validation failed")))
                                } catch (e) {
                                    return s.error(e && e.message || e), Promise.reject(new Error("signature validation failed"))
                                }
                            }))
                        }
                        static hashString(e, t) {
                            try {
                                return i.Util.hashString(e, t)
                            } catch (e) {
                                s.error(e)
                            }
                        }
                        static hexToBase64Url(e) {
                            try {
                                return n(e)
                            } catch (e) {
                                s.error(e)
                            }
                        }
                    }
                }({
                    jws: ot,
                    KeyUtil: ze,
                    X509: Qe,
                    crypto: nt,
                    hextob64u: Te,
                    b64tohex: D,
                    AllowedSigningAlgs: ["RS256", "RS384", "RS512", "PS256", "PS384", "PS512", "ES256", "ES384", "ES512"]
                });
                class ht {
                    constructor(e, t = d, r = p, i = ut) {
                        if (!e) throw s.error("UserInfoService.ctor: No settings passed"), new Error("settings");
                        this._settings = e, this._jsonService = new t(void 0, void 0, this._getClaimsFromJwt.bind(this)), this._metadataService = new r(this._settings), this._joseUtil = i
                    }
                    getClaims(e) {
                        return e ? this._metadataService.getUserInfoEndpoint().then((t => (s.debug("UserInfoService.getClaims: received userinfo url", t), this._jsonService.getJson(t, e).then((e => (s.debug("UserInfoService.getClaims: claims received", e), e)))))) : (s.error("UserInfoService.getClaims: No token passed"), Promise.reject(new Error("A token is required")))
                    }
                    _getClaimsFromJwt(e) {
                        try {
                            let r = this._joseUtil.parseJwt(e.responseText);
                            if (!r || !r.header || !r.payload) return s.error("UserInfoService._getClaimsFromJwt: Failed to parse JWT", r), Promise.reject(new Error("Failed to parse id_token"));
                            var t = r.header.kid;
                            let i;
                            switch (this._settings.userInfoJwtIssuer) {
                                case "OP":
                                    i = this._metadataService.getIssuer();
                                    break;
                                case "ANY":
                                    i = Promise.resolve(r.payload.iss);
                                    break;
                                default:
                                    i = Promise.resolve(this._settings.userInfoJwtIssuer)
                            }
                            return i.then((i => (s.debug("UserInfoService._getClaimsFromJwt: Received issuer:" + i), this._metadataService.getSigningKeys().then((n => {
                                if (!n) return s.error("UserInfoService._getClaimsFromJwt: No signing keys from metadata"), Promise.reject(new Error("No signing keys from metadata"));
                                let o;
                                if (s.debug("UserInfoService._getClaimsFromJwt: Received signing keys"), t) o = n.filter((e => e.kid === t))[0];
                                else {
                                    if ((n = this._filterByAlg(n, r.header.alg)).length > 1) return s.error("UserInfoService._getClaimsFromJwt: No kid found in id_token and more than one key found in metadata"), Promise.reject(new Error("No kid found in id_token and more than one key found in metadata"));
                                    o = n[0]
                                }
                                if (!o) return s.error("UserInfoService._getClaimsFromJwt: No key matching kid or alg found in signing keys"), Promise.reject(new Error("No key matching kid or alg found in signing keys"));
                                let a = this._settings.client_id,
                                    u = this._settings.clockSkew;
                                return s.debug("UserInfoService._getClaimsFromJwt: Validaing JWT; using clock skew (in seconds) of: ", u), this._joseUtil.validateJwt(e.responseText, o, i, a, u, void 0, !0).then((() => (s.debug("UserInfoService._getClaimsFromJwt: JWT validation successful"), r.payload)))
                            })))))
                        } catch (e) {
                            return s.error("UserInfoService._getClaimsFromJwt: Error parsing JWT response", e.message), void reject(e)
                        }
                    }
                    _filterByAlg(e, t) {
                        var r = null;
                        if (t.startsWith("RS")) r = "RSA";
                        else if (t.startsWith("PS")) r = "PS";
                        else {
                            if (!t.startsWith("ES")) return s.debug("UserInfoService._filterByAlg: alg not supported: ", t), [];
                            r = "EC"
                        }
                        return s.debug("UserInfoService._filterByAlg: Looking for keys that match kty: ", r), e = e.filter((e => e.kty === r)), s.debug("UserInfoService._filterByAlg: Number of keys that match kty: ", r, e.length), e
                    }
                }
                class ct {
                    constructor(e, t = d, r = p) {
                        if (!e) throw s.error("TokenClient.ctor: No settings passed"), new Error("settings");
                        this._settings = e, this._jsonService = new t, this._metadataService = new r(this._settings)
                    }
                    exchangeCode(e = {}) {
                        (e = Object.assign({}, e)).grant_type = e.grant_type || "authorization_code", e.client_id = e.client_id || this._settings.client_id, e.client_secret = e.client_secret || this._settings.client_secret, e.redirect_uri = e.redirect_uri || this._settings.redirect_uri;
                        var t = void 0,
                            r = e._client_authentication || this._settings._client_authentication;
                        return delete e._client_authentication, e.code ? e.redirect_uri ? e.code_verifier ? e.client_id ? e.client_secret || "client_secret_basic" != r ? ("client_secret_basic" == r && (t = e.client_id + ":" + e.client_secret, delete e.client_id, delete e.client_secret), this._metadataService.getTokenEndpoint(!1).then((r => (s.debug("TokenClient.exchangeCode: Received token endpoint"), this._jsonService.postForm(r, e, t).then((e => (s.debug("TokenClient.exchangeCode: response received"), e))))))) : (s.error("TokenClient.exchangeCode: No client_secret passed"), Promise.reject(new Error("A client_secret is required"))) : (s.error("TokenClient.exchangeCode: No client_id passed"), Promise.reject(new Error("A client_id is required"))) : (s.error("TokenClient.exchangeCode: No code_verifier passed"), Promise.reject(new Error("A code_verifier is required"))) : (s.error("TokenClient.exchangeCode: No redirect_uri passed"), Promise.reject(new Error("A redirect_uri is required"))) : (s.error("TokenClient.exchangeCode: No code passed"), Promise.reject(new Error("A code is required")))
                    }
                    exchangeRefreshToken(e = {}) {
                        (e = Object.assign({}, e)).grant_type = e.grant_type || "refresh_token", e.client_id = e.client_id || this._settings.client_id, e.client_secret = e.client_secret || this._settings.client_secret;
                        var t = void 0,
                            r = e._client_authentication || this._settings._client_authentication;
                        return delete e._client_authentication, e.refresh_token ? e.client_id ? ("client_secret_basic" == r && (t = e.client_id + ":" + e.client_secret, delete e.client_id, delete e.client_secret), this._metadataService.getTokenEndpoint(!1).then((r => (s.debug("TokenClient.exchangeRefreshToken: Received token endpoint"), this._jsonService.postForm(r, e, t).then((e => (s.debug("TokenClient.exchangeRefreshToken: response received"), e))))))) : (s.error("TokenClient.exchangeRefreshToken: No client_id passed"), Promise.reject(new Error("A client_id is required"))) : (s.error("TokenClient.exchangeRefreshToken: No refresh_token passed"), Promise.reject(new Error("A refresh_token is required")))
                    }
                }
                class lt extends Error {
                    constructor({
                        error: e,
                        error_description: t,
                        error_uri: r,
                        state: i,
                        session_state: n
                    } = {}) {
                        if (!e) throw s.error("No error passed to ErrorResponse"), new Error("error");
                        super(t || e), this.name = "ErrorResponse", this.error = e, this.error_description = t, this.error_uri = r, this.state = i, this.session_state = n
                    }
                }
                const dt = ["nonce", "at_hash", "iat", "nbf", "exp", "aud", "iss", "c_hash"];
                class gt {
                    constructor(e, t = p, r = ht, i = ut, n = ct) {
                        if (!e) throw s.error("ResponseValidator.ctor: No settings passed to ResponseValidator"), new Error("settings");
                        this._settings = e, this._metadataService = new t(this._settings), this._userInfoService = new r(this._settings), this._joseUtil = i, this._tokenClient = new n(this._settings)
                    }
                    validateSigninResponse(e, t) {
                        return s.debug("ResponseValidator.validateSigninResponse"), this._processSigninParams(e, t).then((t => (s.debug("ResponseValidator.validateSigninResponse: state processed"), this._validateTokens(e, t).then((t => (s.debug("ResponseValidator.validateSigninResponse: tokens validated"), this._processClaims(e, t).then((e => (s.debug("ResponseValidator.validateSigninResponse: claims processed"), e)))))))))
                    }
                    validateSignoutResponse(e, t) {
                        return e.id !== t.state ? (s.error("ResponseValidator.validateSignoutResponse: State does not match"), Promise.reject(new Error("State does not match"))) : (s.debug("ResponseValidator.validateSignoutResponse: state validated"), t.state = e.data, t.error ? (s.warn("ResponseValidator.validateSignoutResponse: Response was error", t.error), Promise.reject(new lt(t))) : Promise.resolve(t))
                    }
                    _processSigninParams(e, t) {
                        if (e.id !== t.state) return s.error("ResponseValidator._processSigninParams: State does not match"), Promise.reject(new Error("State does not match"));
                        if (!e.client_id) return s.error("ResponseValidator._processSigninParams: No client_id on state"), Promise.reject(new Error("No client_id on state"));
                        if (!e.authority) return s.error("ResponseValidator._processSigninParams: No authority on state"), Promise.reject(new Error("No authority on state"));
                        if (this._settings.authority) {
                            if (this._settings.authority && this._settings.authority !== e.authority) return s.error("ResponseValidator._processSigninParams: authority mismatch on settings vs. signin state"), Promise.reject(new Error("authority mismatch on settings vs. signin state"))
                        } else this._settings.authority = e.authority;
                        if (this._settings.client_id) {
                            if (this._settings.client_id && this._settings.client_id !== e.client_id) return s.error("ResponseValidator._processSigninParams: client_id mismatch on settings vs. signin state"), Promise.reject(new Error("client_id mismatch on settings vs. signin state"))
                        } else this._settings.client_id = e.client_id;
                        return s.debug("ResponseValidator._processSigninParams: state validated"), t.state = e.data, t.error ? (s.warn("ResponseValidator._processSigninParams: Response was error", t.error), Promise.reject(new lt(t))) : e.nonce && !t.id_token ? (s.error("ResponseValidator._processSigninParams: Expecting id_token in response"), Promise.reject(new Error("No id_token in response"))) : !e.nonce && t.id_token ? (s.error("ResponseValidator._processSigninParams: Not expecting id_token in response"), Promise.reject(new Error("Unexpected id_token in response"))) : e.code_verifier && !t.code ? (s.error("ResponseValidator._processSigninParams: Expecting code in response"), Promise.reject(new Error("No code in response"))) : !e.code_verifier && t.code ? (s.error("ResponseValidator._processSigninParams: Not expecting code in response"), Promise.reject(new Error("Unexpected code in response"))) : (t.scope || (t.scope = e.scope), Promise.resolve(t))
                    }
                    _processClaims(e, t) {
                        if (t.isOpenIdConnect) {
                            if (s.debug("ResponseValidator._processClaims: response is OIDC, processing claims"), t.profile = this._filterProtocolClaims(t.profile), !0 !== e.skipUserInfo && this._settings.loadUserInfo && t.access_token) return s.debug("ResponseValidator._processClaims: loading user info"), this._userInfoService.getClaims(t.access_token).then((e => (s.debug("ResponseValidator._processClaims: user info claims received from user info endpoint"), e.sub !== t.profile.sub ? (s.error("ResponseValidator._processClaims: sub from user info endpoint does not match sub in id_token"), Promise.reject(new Error("sub from user info endpoint does not match sub in id_token"))) : (t.profile = this._mergeClaims(t.profile, e), s.debug("ResponseValidator._processClaims: user info claims received, updated profile:", t.profile), t))));
                            s.debug("ResponseValidator._processClaims: not loading user info")
                        } else s.debug("ResponseValidator._processClaims: response is not OIDC, not processing claims");
                        return Promise.resolve(t)
                    }
                    _mergeClaims(e, t) {
                        var r = Object.assign({}, e);
                        for (let e in t) {
                            var i = t[e];
                            Array.isArray(i) || (i = [i]);
                            for (let t = 0; t < i.length; t++) {
                                let n = i[t];
                                r[e] ? Array.isArray(r[e]) ? r[e].indexOf(n) < 0 && r[e].push(n) : r[e] !== n && ("object" == typeof n && this._settings.mergeClaims ? r[e] = this._mergeClaims(r[e], n) : r[e] = [r[e], n]) : r[e] = n
                            }
                        }
                        return r
                    }
                    _filterProtocolClaims(e) {
                        s.debug("ResponseValidator._filterProtocolClaims, incoming claims:", e);
                        var t = Object.assign({}, e);
                        return this._settings._filterProtocolClaims ? (dt.forEach((e => {
                            delete t[e]
                        })), s.debug("ResponseValidator._filterProtocolClaims: protocol claims filtered", t)) : s.debug("ResponseValidator._filterProtocolClaims: protocol claims not filtered"), t
                    }
                    _validateTokens(e, t) {
                        return t.code ? (s.debug("ResponseValidator._validateTokens: Validating code"), this._processCode(e, t)) : t.id_token ? t.access_token ? (s.debug("ResponseValidator._validateTokens: Validating id_token and access_token"), this._validateIdTokenAndAccessToken(e, t)) : (s.debug("ResponseValidator._validateTokens: Validating id_token"), this._validateIdToken(e, t)) : (s.debug("ResponseValidator._validateTokens: No code to process or id_token to validate"), Promise.resolve(t))
                    }
                    _processCode(e, t) {
                        var r = {
                            client_id: e.client_id,
                            client_secret: e.client_secret,
                            code: t.code,
                            redirect_uri: e.redirect_uri,
                            code_verifier: e.code_verifier
                        };
                        return e.extraTokenParams && "object" == typeof e.extraTokenParams && Object.assign(r, e.extraTokenParams), this._tokenClient.exchangeCode(r).then((r => {
                            for (var i in r) t[i] = r[i];
                            return t.id_token ? (s.debug("ResponseValidator._processCode: token response successful, processing id_token"), this._validateIdTokenAttributes(e, t)) : (s.debug("ResponseValidator._processCode: token response successful, returning response"), t)
                        }))
                    }
                    _validateIdTokenAttributes(e, t) {
                        return this._metadataService.getIssuer().then((r => {
                            let i = e.client_id,
                                n = this._settings.clockSkew;
                            return s.debug("ResponseValidator._validateIdTokenAttributes: Validaing JWT attributes; using clock skew (in seconds) of: ", n), this._settings.getEpochTime().then((o => this._joseUtil.validateJwtAttributes(t.id_token, r, i, n, o).then((r => e.nonce && e.nonce !== r.nonce ? (s.error("ResponseValidator._validateIdTokenAttributes: Invalid nonce in id_token"), Promise.reject(new Error("Invalid nonce in id_token"))) : r.sub ? (t.profile = r, t) : (s.error("ResponseValidator._validateIdTokenAttributes: No sub present in id_token"), Promise.reject(new Error("No sub present in id_token")))))))
                        }))
                    }
                    _validateIdTokenAndAccessToken(e, t) {
                        return this._validateIdToken(e, t).then((e => this._validateAccessToken(e)))
                    }
                    _getSigningKeyForJwt(e) {
                        return this._metadataService.getSigningKeys().then((t => {
                            const r = e.header.kid;
                            if (!t) return s.error("ResponseValidator._validateIdToken: No signing keys from metadata"), Promise.reject(new Error("No signing keys from metadata"));
                            let i;
                            if (s.debug("ResponseValidator._validateIdToken: Received signing keys"), r) i = t.filter((e => e.kid === r))[0];
                            else {
                                if ((t = this._filterByAlg(t, e.header.alg)).length > 1) return s.error("ResponseValidator._validateIdToken: No kid found in id_token and more than one key found in metadata"), Promise.reject(new Error("No kid found in id_token and more than one key found in metadata"));
                                i = t[0]
                            }
                            return Promise.resolve(i)
                        }))
                    }
                    _getSigningKeyForJwtWithSingleRetry(e) {
                        return this._getSigningKeyForJwt(e).then((t => t ? Promise.resolve(t) : (this._metadataService.resetSigningKeys(), this._getSigningKeyForJwt(e))))
                    }
                    _validateIdToken(e, t) {
                        if (!e.nonce) return s.error("ResponseValidator._validateIdToken: No nonce on state"), Promise.reject(new Error("No nonce on state"));
                        let r = this._joseUtil.parseJwt(t.id_token);
                        return r && r.header && r.payload ? e.nonce !== r.payload.nonce ? (s.error("ResponseValidator._validateIdToken: Invalid nonce in id_token"), Promise.reject(new Error("Invalid nonce in id_token"))) : this._metadataService.getIssuer().then((i => (s.debug("ResponseValidator._validateIdToken: Received issuer"), this._getSigningKeyForJwtWithSingleRetry(r).then((n => {
                            if (!n) return s.error("ResponseValidator._validateIdToken: No key matching kid or alg found in signing keys"), Promise.reject(new Error("No key matching kid or alg found in signing keys"));
                            let o = e.client_id,
                                a = this._settings.clockSkew;
                            return s.debug("ResponseValidator._validateIdToken: Validaing JWT; using clock skew (in seconds) of: ", a), this._joseUtil.validateJwt(t.id_token, n, i, o, a).then((() => (s.debug("ResponseValidator._validateIdToken: JWT validation successful"), r.payload.sub ? (t.profile = r.payload, t) : (s.error("ResponseValidator._validateIdToken: No sub present in id_token"), Promise.reject(new Error("No sub present in id_token"))))))
                        }))))) : (s.error("ResponseValidator._validateIdToken: Failed to parse id_token", r), Promise.reject(new Error("Failed to parse id_token")))
                    }
                    _filterByAlg(e, t) {
                        var r = null;
                        if (t.startsWith("RS")) r = "RSA";
                        else if (t.startsWith("PS")) r = "PS";
                        else {
                            if (!t.startsWith("ES")) return s.debug("ResponseValidator._filterByAlg: alg not supported: ", t), [];
                            r = "EC"
                        }
                        return s.debug("ResponseValidator._filterByAlg: Looking for keys that match kty: ", r), e = e.filter((e => e.kty === r)), s.debug("ResponseValidator._filterByAlg: Number of keys that match kty: ", r, e.length), e
                    }
                    _validateAccessToken(e) {
                        if (!e.profile) return s.error("ResponseValidator._validateAccessToken: No profile loaded from id_token"), Promise.reject(new Error("No profile loaded from id_token"));
                        if (!e.profile.at_hash) return s.error("ResponseValidator._validateAccessToken: No at_hash in id_token"), Promise.reject(new Error("No at_hash in id_token"));
                        if (!e.id_token) return s.error("ResponseValidator._validateAccessToken: No id_token"), Promise.reject(new Error("No id_token"));
                        let t = this._joseUtil.parseJwt(e.id_token);
                        if (!t || !t.header) return s.error("ResponseValidator._validateAccessToken: Failed to parse id_token", t), Promise.reject(new Error("Failed to parse id_token"));
                        var r = t.header.alg;
                        if (!r || 5 !== r.length) return s.error("ResponseValidator._validateAccessToken: Unsupported alg:", r), Promise.reject(new Error("Unsupported alg: " + r));
                        var i = r.substr(2, 3);
                        if (!i) return s.error("ResponseValidator._validateAccessToken: Unsupported alg:", r, i), Promise.reject(new Error("Unsupported alg: " + r));
                        if (256 !== (i = parseInt(i)) && 384 !== i && 512 !== i) return s.error("ResponseValidator._validateAccessToken: Unsupported alg:", r, i), Promise.reject(new Error("Unsupported alg: " + r));
                        let n = "sha" + i;
                        var o = this._joseUtil.hashString(e.access_token, n);
                        if (!o) return s.error("ResponseValidator._validateAccessToken: access_token hash failed:", n), Promise.reject(new Error("Failed to validate at_hash"));
                        var a = o.substr(0, o.length / 2),
                            u = this._joseUtil.hexToBase64Url(a);
                        return u !== e.profile.at_hash ? (s.error("ResponseValidator._validateAccessToken: Failed to validate at_hash", u, e.profile.at_hash), Promise.reject(new Error("Failed to validate at_hash"))) : (s.debug("ResponseValidator._validateAccessToken: success"), Promise.resolve(e))
                    }
                }
                const pt = ".well-known/openid-configuration";
                class ft {
                    constructor({
                        authority: e,
                        metadataUrl: t,
                        metadata: r,
                        signingKeys: i,
                        metadataSeed: n,
                        client_id: s,
                        client_secret: a,
                        response_type: u = "id_token",
                        scope: h = "openid",
                        redirect_uri: c,
                        post_logout_redirect_uri: d,
                        client_authentication: g = "client_secret_post",
                        prompt: f,
                        display: v,
                        max_age: m,
                        ui_locales: y,
                        acr_values: _,
                        resource: S,
                        response_mode: F,
                        filterProtocolClaims: w = !0,
                        loadUserInfo: b = !0,
                        staleStateAge: E = 900,
                        clockSkew: x = 300,
                        clockService: A = new o,
                        userInfoJwtIssuer: k = "OP",
                        mergeClaims: P = !1,
                        stateStore: C = new l,
                        ResponseValidatorCtor: T = gt,
                        MetadataServiceCtor: I = p,
                        extraQueryParams: R = {},
                        extraTokenParams: D = {}
                    } = {}) {
                        this._authority = e, this._metadataUrl = t, this._metadata = r, this._metadataSeed = n, this._signingKeys = i, this._client_id = s, this._client_secret = a, this._response_type = u, this._scope = h, this._redirect_uri = c, this._post_logout_redirect_uri = d, this._client_authentication = g, this._prompt = f, this._display = v, this._max_age = m, this._ui_locales = y, this._acr_values = _, this._resource = S, this._response_mode = F, this._filterProtocolClaims = !!w, this._loadUserInfo = !!b, this._staleStateAge = E, this._clockSkew = x, this._clockService = A, this._userInfoJwtIssuer = k, this._mergeClaims = !!P, this._stateStore = C, this._validator = new T(this), this._metadataService = new I(this), this._extraQueryParams = "object" == typeof R ? R : {}, this._extraTokenParams = "object" == typeof D ? D : {}
                    }
                    get client_id() {
                        return this._client_id
                    }
                    set client_id(e) {
                        if (this._client_id) throw s.error("OidcClientSettings.set_client_id: client_id has already been assigned."), new Error("client_id has already been assigned.");
                        this._client_id = e
                    }
                    get client_secret() {
                        return this._client_secret
                    }
                    get response_type() {
                        return this._response_type
                    }
                    get scope() {
                        return this._scope
                    }
                    get redirect_uri() {
                        return this._redirect_uri
                    }
                    get post_logout_redirect_uri() {
                        return this._post_logout_redirect_uri
                    }
                    get client_authentication() {
                        return this._client_authentication
                    }
                    get prompt() {
                        return this._prompt
                    }
                    get display() {
                        return this._display
                    }
                    get max_age() {
                        return this._max_age
                    }
                    get ui_locales() {
                        return this._ui_locales
                    }
                    get acr_values() {
                        return this._acr_values
                    }
                    get resource() {
                        return this._resource
                    }
                    get response_mode() {
                        return this._response_mode
                    }
                    get authority() {
                        return this._authority
                    }
                    set authority(e) {
                        if (this._authority) throw s.error("OidcClientSettings.set_authority: authority has already been assigned."), new Error("authority has already been assigned.");
                        this._authority = e
                    }
                    get metadataUrl() {
                        return this._metadataUrl || (this._metadataUrl = this.authority, this._metadataUrl && this._metadataUrl.indexOf(pt) < 0 && ("/" !== this._metadataUrl[this._metadataUrl.length - 1] && (this._metadataUrl += "/"), this._metadataUrl += pt)), this._metadataUrl
                    }
                    get metadata() {
                        return this._metadata
                    }
                    set metadata(e) {
                        this._metadata = e
                    }
                    get metadataSeed() {
                        return this._metadataSeed
                    }
                    set metadataSeed(e) {
                        this._metadataSeed = e
                    }
                    get signingKeys() {
                        return this._signingKeys
                    }
                    set signingKeys(e) {
                        this._signingKeys = e
                    }
                    get filterProtocolClaims() {
                        return this._filterProtocolClaims
                    }
                    get loadUserInfo() {
                        return this._loadUserInfo
                    }
                    get staleStateAge() {
                        return this._staleStateAge
                    }
                    get clockSkew() {
                        return this._clockSkew
                    }
                    get userInfoJwtIssuer() {
                        return this._userInfoJwtIssuer
                    }
                    get mergeClaims() {
                        return this._mergeClaims
                    }
                    get stateStore() {
                        return this._stateStore
                    }
                    get validator() {
                        return this._validator
                    }
                    get metadataService() {
                        return this._metadataService
                    }
                    get extraQueryParams() {
                        return this._extraQueryParams
                    }
                    set extraQueryParams(e) {
                        this._extraQueryParams = "object" == typeof e ? e : {}
                    }
                    get extraTokenParams() {
                        return this._extraTokenParams
                    }
                    set extraTokenParams(e) {
                        this._extraTokenParams = "object" == typeof e ? e : {}
                    }
                    getEpochTime() {
                        return this._clockService.getEpochTime()
                    }
                }
                class vt {
                    static addQueryParam(e, t, r) {
                        return e.indexOf("?") < 0 && (e += "?"), "?" !== e[e.length - 1] && (e += "&"), e += encodeURIComponent(t), (e += "=") + encodeURIComponent(r)
                    }
                    static parseUrlFragment(e, t = "#", r = c) {
                        "string" != typeof e && (e = r.location.href);
                        var i = e.lastIndexOf(t);
                        i >= 0 && (e = e.substr(i + 1)), "?" === t && (i = e.indexOf("#")) >= 0 && (e = e.substr(0, i));
                        for (var n, o = {}, a = /([^&=]+)=([^&]*)/g, u = 0; n = a.exec(e);)
                            if (o[decodeURIComponent(n[1])] = decodeURIComponent(n[2].replace(/\+/g, " ")), u++ > 50) return s.error("UrlUtility.parseUrlFragment: response exceeded expected number of parameters", e), {
                                error: "Response exceeded expected number of parameters"
                            };
                        for (var h in o) return o;
                        return {}
                    }
                }
                var mt = "undefined" != typeof window ? window.crypto || window.msCrypto : null;

                function yt() {
                    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (e => (e ^ mt.getRandomValues(new Uint8Array(1))[0] & 15 >> e / 4).toString(16)))
                }

                function _t() {
                    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (e => (e ^ 16 * Math.random() >> e / 4).toString(16)))
                }

                function St() {
                    return ("undefined" != mt && null !== mt && void 0 !== mt.getRandomValues ? yt : _t)().replace(/-/g, "")
                }
                class Ft {
                    constructor({
                        id: e,
                        data: t,
                        created: r,
                        request_type: i
                    } = {}) {
                        this._id = e || St(), this._data = t, this._created = "number" == typeof r && r > 0 ? r : parseInt(Date.now() / 1e3), this._request_type = i
                    }
                    get id() {
                        return this._id
                    }
                    get data() {
                        return this._data
                    }
                    get created() {
                        return this._created
                    }
                    get request_type() {
                        return this._request_type
                    }
                    toStorageString() {
                        return s.debug("State.toStorageString"), JSON.stringify({
                            id: this.id,
                            data: this.data,
                            created: this.created,
                            request_type: this.request_type
                        })
                    }
                    static fromStorageString(e) {
                        return s.debug("State.fromStorageString"), new Ft(JSON.parse(e))
                    }
                    static clearStaleState(e, t) {
                        var r = Date.now() / 1e3 - t;
                        return e.getAllKeys().then((t => {
                            s.debug("State.clearStaleState: got keys", t);
                            var i = [];
                            for (let o = 0; o < t.length; o++) {
                                let a = t[o];
                                var n = e.get(a).then((t => {
                                    let i = !1;
                                    if (t) try {
                                        var n = Ft.fromStorageString(t);
                                        s.debug("State.clearStaleState: got item from key: ", a, n.created), n.created <= r && (i = !0)
                                    } catch (e) {
                                        s.error("State.clearStaleState: Error parsing state for key", a, e.message), i = !0
                                    } else s.debug("State.clearStaleState: no item in storage for key: ", a), i = !0;
                                    if (i) return s.debug("State.clearStaleState: removed item for key: ", a), e.remove(a)
                                }));
                                i.push(n)
                            }
                            return s.debug("State.clearStaleState: waiting on promise count:", i.length), Promise.all(i)
                        }))
                    }
                }
                class wt extends Ft {
                    constructor({
                        nonce: e,
                        authority: t,
                        client_id: r,
                        redirect_uri: i,
                        code_verifier: n,
                        response_mode: s,
                        client_secret: o,
                        scope: a,
                        extraTokenParams: u,
                        skipUserInfo: h
                    } = {}) {
                        if (super(arguments[0]), !0 === e ? this._nonce = St() : e && (this._nonce = e), !0 === n ? this._code_verifier = St() + St() + St() : n && (this._code_verifier = n), this.code_verifier) {
                            let e = ut.hashString(this.code_verifier, "SHA256");
                            this._code_challenge = ut.hexToBase64Url(e)
                        }
                        this._redirect_uri = i, this._authority = t, this._client_id = r, this._response_mode = s, this._client_secret = o, this._scope = a, this._extraTokenParams = u, this._skipUserInfo = h
                    }
                    get nonce() {
                        return this._nonce
                    }
                    get authority() {
                        return this._authority
                    }
                    get client_id() {
                        return this._client_id
                    }
                    get redirect_uri() {
                        return this._redirect_uri
                    }
                    get code_verifier() {
                        return this._code_verifier
                    }
                    get code_challenge() {
                        return this._code_challenge
                    }
                    get response_mode() {
                        return this._response_mode
                    }
                    get client_secret() {
                        return this._client_secret
                    }
                    get scope() {
                        return this._scope
                    }
                    get extraTokenParams() {
                        return this._extraTokenParams
                    }
                    get skipUserInfo() {
                        return this._skipUserInfo
                    }
                    toStorageString() {
                        return s.debug("SigninState.toStorageString"), JSON.stringify({
                            id: this.id,
                            data: this.data,
                            created: this.created,
                            request_type: this.request_type,
                            nonce: this.nonce,
                            code_verifier: this.code_verifier,
                            redirect_uri: this.redirect_uri,
                            authority: this.authority,
                            client_id: this.client_id,
                            response_mode: this.response_mode,
                            client_secret: this.client_secret,
                            scope: this.scope,
                            extraTokenParams: this.extraTokenParams,
                            skipUserInfo: this.skipUserInfo
                        })
                    }
                    static fromStorageString(e) {
                        s.debug("SigninState.fromStorageString");
                        var t = JSON.parse(e);
                        return new wt(t)
                    }
                }
                class bt {
                    constructor({
                        url: e,
                        client_id: t,
                        redirect_uri: r,
                        response_type: i,
                        scope: n,
                        authority: o,
                        data: a,
                        prompt: u,
                        display: h,
                        max_age: c,
                        ui_locales: l,
                        id_token_hint: d,
                        login_hint: g,
                        acr_values: p,
                        resource: f,
                        response_mode: v,
                        request: m,
                        request_uri: y,
                        extraQueryParams: _,
                        request_type: S,
                        client_secret: F,
                        extraTokenParams: w,
                        skipUserInfo: b
                    }) {
                        if (!e) throw s.error("SigninRequest.ctor: No url passed"), new Error("url");
                        if (!t) throw s.error("SigninRequest.ctor: No client_id passed"), new Error("client_id");
                        if (!r) throw s.error("SigninRequest.ctor: No redirect_uri passed"), new Error("redirect_uri");
                        if (!i) throw s.error("SigninRequest.ctor: No response_type passed"), new Error("response_type");
                        if (!n) throw s.error("SigninRequest.ctor: No scope passed"), new Error("scope");
                        if (!o) throw s.error("SigninRequest.ctor: No authority passed"), new Error("authority");
                        let E = bt.isOidc(i),
                            x = bt.isCode(i);
                        v || (v = bt.isCode(i) ? "query" : null), this.state = new wt({
                            nonce: E,
                            data: a,
                            client_id: t,
                            authority: o,
                            redirect_uri: r,
                            code_verifier: x,
                            request_type: S,
                            response_mode: v,
                            client_secret: F,
                            scope: n,
                            extraTokenParams: w,
                            skipUserInfo: b
                        }), e = vt.addQueryParam(e, "client_id", t), e = vt.addQueryParam(e, "redirect_uri", r), e = vt.addQueryParam(e, "response_type", i), e = vt.addQueryParam(e, "scope", n), e = vt.addQueryParam(e, "state", this.state.id), E && (e = vt.addQueryParam(e, "nonce", this.state.nonce)), x && (e = vt.addQueryParam(e, "code_challenge", this.state.code_challenge), e = vt.addQueryParam(e, "code_challenge_method", "S256"));
                        var A = {
                            prompt: u,
                            display: h,
                            max_age: c,
                            ui_locales: l,
                            id_token_hint: d,
                            login_hint: g,
                            acr_values: p,
                            resource: f,
                            request: m,
                            request_uri: y,
                            response_mode: v
                        };
                        for (let t in A) A[t] && (e = vt.addQueryParam(e, t, A[t]));
                        for (let t in _) e = vt.addQueryParam(e, t, _[t]);
                        this.url = e
                    }
                    static isOidc(e) {
                        return !!e.split(/\s+/g).filter((function(e) {
                            return "id_token" === e
                        }))[0]
                    }
                    static isOAuth(e) {
                        return !!e.split(/\s+/g).filter((function(e) {
                            return "token" === e
                        }))[0]
                    }
                    static isCode(e) {
                        return !!e.split(/\s+/g).filter((function(e) {
                            return "code" === e
                        }))[0]
                    }
                }
                class Et {
                    constructor(e, t = "#") {
                        var r = vt.parseUrlFragment(e, t);
                        this.error = r.error, this.error_description = r.error_description, this.error_uri = r.error_uri, this.code = r.code, this.state = r.state, this.id_token = r.id_token, this.session_state = r.session_state, this.access_token = r.access_token, this.token_type = r.token_type, this.scope = r.scope, this.profile = void 0, this.expires_in = r.expires_in
                    }
                    get expires_in() {
                        if (this.expires_at) {
                            let e = parseInt(Date.now() / 1e3);
                            return this.expires_at - e
                        }
                    }
                    set expires_in(e) {
                        let t = parseInt(e);
                        if ("number" == typeof t && t > 0) {
                            let e = parseInt(Date.now() / 1e3);
                            this.expires_at = e + t
                        }
                    }
                    get expired() {
                        let e = this.expires_in;
                        if (void 0 !== e) return e <= 0
                    }
                    get scopes() {
                        return (this.scope || "").split(" ")
                    }
                    get isOpenIdConnect() {
                        return this.scopes.indexOf("openid") >= 0 || !!this.id_token
                    }
                }
                class xt {
                    constructor({
                        url: e,
                        id_token_hint: t,
                        post_logout_redirect_uri: r,
                        data: i,
                        extraQueryParams: n,
                        request_type: o
                    }) {
                        if (!e) throw s.error("SignoutRequest.ctor: No url passed"), new Error("url");
                        t && (e = vt.addQueryParam(e, "id_token_hint", t)), r && (e = vt.addQueryParam(e, "post_logout_redirect_uri", r), i && (this.state = new Ft({
                            data: i,
                            request_type: o
                        }), e = vt.addQueryParam(e, "state", this.state.id)));
                        for (let t in n) e = vt.addQueryParam(e, t, n[t]);
                        this.url = e
                    }
                }
                class At {
                    constructor(e) {
                        var t = vt.parseUrlFragment(e, "?");
                        this.error = t.error, this.error_description = t.error_description, this.error_uri = t.error_uri, this.state = t.state
                    }
                }
                class kt {
                    constructor(e = {}) {
                        this._settings = e instanceof ft ? e : new ft(e)
                    }
                    get _stateStore() {
                        return this.settings.stateStore
                    }
                    get _validator() {
                        return this.settings.validator
                    }
                    get _metadataService() {
                        return this.settings.metadataService
                    }
                    get settings() {
                        return this._settings
                    }
                    get metadataService() {
                        return this._metadataService
                    }
                    createSigninRequest({
                        response_type: e,
                        scope: t,
                        redirect_uri: r,
                        data: i,
                        state: n,
                        prompt: o,
                        display: a,
                        max_age: u,
                        ui_locales: h,
                        id_token_hint: c,
                        login_hint: l,
                        acr_values: d,
                        resource: g,
                        request: p,
                        request_uri: f,
                        response_mode: v,
                        extraQueryParams: m,
                        extraTokenParams: y,
                        request_type: _,
                        skipUserInfo: S
                    } = {}, F) {
                        s.debug("OidcClient.createSigninRequest");
                        let w = this._settings.client_id;
                        e = e || this._settings.response_type, t = t || this._settings.scope, r = r || this._settings.redirect_uri, o = o || this._settings.prompt, a = a || this._settings.display, u = u || this._settings.max_age, h = h || this._settings.ui_locales, d = d || this._settings.acr_values, g = g || this._settings.resource, v = v || this._settings.response_mode, m = m || this._settings.extraQueryParams, y = y || this._settings.extraTokenParams;
                        let b = this._settings.authority;
                        return bt.isCode(e) && "code" !== e ? Promise.reject(new Error("OpenID Connect hybrid flow is not supported")) : this._metadataService.getAuthorizationEndpoint().then((E => {
                            s.debug("OidcClient.createSigninRequest: Received authorization endpoint", E);
                            let x = new bt({
                                url: E,
                                client_id: w,
                                redirect_uri: r,
                                response_type: e,
                                scope: t,
                                data: i || n,
                                authority: b,
                                prompt: o,
                                display: a,
                                max_age: u,
                                ui_locales: h,
                                id_token_hint: c,
                                login_hint: l,
                                acr_values: d,
                                resource: g,
                                request: p,
                                request_uri: f,
                                extraQueryParams: m,
                                extraTokenParams: y,
                                request_type: _,
                                response_mode: v,
                                client_secret: this._settings.client_secret,
                                skipUserInfo: S
                            });
                            var A = x.state;
                            return (F = F || this._stateStore).set(A.id, A.toStorageString()).then((() => x))
                        }))
                    }
                    readSigninResponseState(e, t, r = !1) {
                        s.debug("OidcClient.readSigninResponseState");
                        let i = "query" === this._settings.response_mode || !this._settings.response_mode && bt.isCode(this._settings.response_type);
                        var n = new Et(e, i ? "?" : "#");
                        return n.state ? (t = t || this._stateStore, (r ? t.remove.bind(t) : t.get.bind(t))(n.state).then((e => {
                            if (!e) throw s.error("OidcClient.readSigninResponseState: No matching state found in storage"), new Error("No matching state found in storage");
                            return {
                                state: wt.fromStorageString(e),
                                response: n
                            }
                        }))) : (s.error("OidcClient.readSigninResponseState: No state in response"), Promise.reject(new Error("No state in response")))
                    }
                    processSigninResponse(e, t) {
                        return s.debug("OidcClient.processSigninResponse"), this.readSigninResponseState(e, t, !0).then((({
                            state: e,
                            response: t
                        }) => (s.debug("OidcClient.processSigninResponse: Received state from storage; validating response"), this._validator.validateSigninResponse(e, t))))
                    }
                    createSignoutRequest({
                        id_token_hint: e,
                        data: t,
                        state: r,
                        post_logout_redirect_uri: i,
                        extraQueryParams: n,
                        request_type: o
                    } = {}, a) {
                        return s.debug("OidcClient.createSignoutRequest"), i = i || this._settings.post_logout_redirect_uri, n = n || this._settings.extraQueryParams, this._metadataService.getEndSessionEndpoint().then((u => {
                            if (!u) throw s.error("OidcClient.createSignoutRequest: No end session endpoint url returned"), new Error("no end session endpoint");
                            s.debug("OidcClient.createSignoutRequest: Received end session endpoint", u);
                            let h = new xt({
                                url: u,
                                id_token_hint: e,
                                post_logout_redirect_uri: i,
                                data: t || r,
                                extraQueryParams: n,
                                request_type: o
                            });
                            var c = h.state;
                            return c && (s.debug("OidcClient.createSignoutRequest: Signout request has state to persist"), (a = a || this._stateStore).set(c.id, c.toStorageString())), h
                        }))
                    }
                    readSignoutResponseState(e, t, r = !1) {
                        s.debug("OidcClient.readSignoutResponseState");
                        var i = new At(e);
                        if (!i.state) return s.debug("OidcClient.readSignoutResponseState: No state in response"), i.error ? (s.warn("OidcClient.readSignoutResponseState: Response was error: ", i.error), Promise.reject(new lt(i))) : Promise.resolve({
                            state: void 0,
                            response: i
                        });
                        var n = i.state;
                        return t = t || this._stateStore, (r ? t.remove.bind(t) : t.get.bind(t))(n).then((e => {
                            if (!e) throw s.error("OidcClient.readSignoutResponseState: No matching state found in storage"), new Error("No matching state found in storage");
                            return {
                                state: Ft.fromStorageString(e),
                                response: i
                            }
                        }))
                    }
                    processSignoutResponse(e, t) {
                        return s.debug("OidcClient.processSignoutResponse"), this.readSignoutResponseState(e, t, !0).then((({
                            state: e,
                            response: t
                        }) => e ? (s.debug("OidcClient.processSignoutResponse: Received state from storage; validating response"), this._validator.validateSignoutResponse(e, t)) : (s.debug("OidcClient.processSignoutResponse: No state from storage; skipping validating response"), t)))
                    }
                    clearStaleState(e) {
                        return s.debug("OidcClient.clearStaleState"), e = e || this._stateStore, Ft.clearStaleState(e, this.settings.staleStateAge)
                    }
                }
                class Pt {
                    prepare() {
                        return Promise.resolve(this)
                    }
                    navigate(e) {
                        return e && e.url ? (e.useReplaceToNavigate ? window.location.replace(e.url) : window.location = e.url, Promise.resolve()) : (s.error("RedirectNavigator.navigate: No url provided"), Promise.reject(new Error("No url provided")))
                    }
                    get url() {
                        return window.location.href
                    }
                }
                class Ct {
                    constructor(e) {
                        this._promise = new Promise(((e, t) => {
                            this._resolve = e, this._reject = t
                        }));
                        let t = e.popupWindowTarget || "_blank",
                            r = e.popupWindowFeatures || "location=no,toolbar=no,width=500,height=500,left=100,top=100;";
                        this._popup = window.open("", t, r), this._popup && (s.debug("PopupWindow.ctor: popup successfully created"), this._checkForPopupClosedTimer = window.setInterval(this._checkForPopupClosed.bind(this), 500))
                    }
                    get promise() {
                        return this._promise
                    }
                    navigate(e) {
                        return this._popup ? e && e.url ? (s.debug("PopupWindow.navigate: Setting URL in popup"), this._id = e.id, this._id && (window["popupCallback_" + e.id] = this._callback.bind(this)), this._popup.focus(), this._popup.window.location = e.url) : (this._error("PopupWindow.navigate: no url provided"), this._error("No url provided")) : this._error("PopupWindow.navigate: Error opening popup window"), this.promise
                    }
                    _success(e) {
                        s.debug("PopupWindow.callback: Successful response from popup window"), this._cleanup(), this._resolve(e)
                    }
                    _error(e) {
                        s.error("PopupWindow.error: ", e), this._cleanup(), this._reject(new Error(e))
                    }
                    close() {
                        this._cleanup(!1)
                    }
                    _cleanup(e) {
                        s.debug("PopupWindow.cleanup"), window.clearInterval(this._checkForPopupClosedTimer), this._checkForPopupClosedTimer = null, delete window["popupCallback_" + this._id], this._popup && !e && this._popup.close(), this._popup = null
                    }
                    _checkForPopupClosed() {
                        this._popup && !this._popup.closed || this._error("Popup window closed")
                    }
                    _callback(e, t) {
                        this._cleanup(t), e ? (s.debug("PopupWindow.callback success"), this._success({
                            url: e
                        })) : (s.debug("PopupWindow.callback: Invalid response from popup"), this._error("Invalid response from popup"))
                    }
                    static notifyOpener(e, t, r) {
                        if (window.opener) {
                            if (e = e || window.location.href) {
                                var i = vt.parseUrlFragment(e, r);
                                if (i.state) {
                                    var n = "popupCallback_" + i.state,
                                        o = window.opener[n];
                                    o ? (s.debug("PopupWindow.notifyOpener: passing url message to opener"), o(e, t)) : s.warn("PopupWindow.notifyOpener: no matching callback found on opener")
                                } else s.warn("PopupWindow.notifyOpener: no state found in response url")
                            }
                        } else s.warn("PopupWindow.notifyOpener: no window.opener. Can't complete notification.")
                    }
                }
                class Tt {
                    prepare(e) {
                        let t = new Ct(e);
                        return Promise.resolve(t)
                    }
                    callback(e, t, r) {
                        s.debug("PopupNavigator.callback");
                        try {
                            return Ct.notifyOpener(e, t, r), Promise.resolve()
                        } catch (e) {
                            return Promise.reject(e)
                        }
                    }
                }
                class It {
                    constructor(e) {
                        this._promise = new Promise(((e, t) => {
                            this._resolve = e, this._reject = t
                        })), this._boundMessageEvent = this._message.bind(this), window.addEventListener("message", this._boundMessageEvent, !1), this._frame = window.document.createElement("iframe"), this._frame.style.visibility = "hidden", this._frame.style.position = "absolute", this._frame.width = 0, this._frame.height = 0, window.document.body.appendChild(this._frame)
                    }
                    navigate(e) {
                        if (e && e.url) {
                            let t = e.silentRequestTimeout || 1e4;
                            s.debug("IFrameWindow.navigate: Using timeout of:", t), this._timer = window.setTimeout(this._timeout.bind(this), t), this._frame.src = e.url
                        } else this._error("No url provided");
                        return this.promise
                    }
                    get promise() {
                        return this._promise
                    }
                    _success(e) {
                        this._cleanup(), s.debug("IFrameWindow: Successful response from frame window"), this._resolve(e)
                    }
                    _error(e) {
                        this._cleanup(), s.error(e), this._reject(new Error(e))
                    }
                    close() {
                        this._cleanup()
                    }
                    _cleanup() {
                        this._frame && (s.debug("IFrameWindow: cleanup"), window.removeEventListener("message", this._boundMessageEvent, !1), window.clearTimeout(this._timer), window.document.body.removeChild(this._frame), this._timer = null, this._frame = null, this._boundMessageEvent = null)
                    }
                    _timeout() {
                        s.debug("IFrameWindow.timeout"), this._error("Frame window timed out")
                    }
                    _message(e) {
                        if (s.debug("IFrameWindow.message"), this._timer && e.origin === this._origin && e.source === this._frame.contentWindow && "string" == typeof e.data && (e.data.startsWith("http://") || e.data.startsWith("https://"))) {
                            let t = e.data;
                            t ? this._success({
                                url: t
                            }) : this._error("Invalid response from frame")
                        }
                    }
                    get _origin() {
                        return location.protocol + "//" + location.host
                    }
                    static notifyParent(e) {
                        s.debug("IFrameWindow.notifyParent"), (e = e || window.location.href) && (s.debug("IFrameWindow.notifyParent: posting url message to parent"), window.parent.postMessage(e, location.protocol + "//" + location.host))
                    }
                }
                class Rt {
                    prepare(e) {
                        let t = new It(e);
                        return Promise.resolve(t)
                    }
                    callback(e) {
                        s.debug("IFrameNavigator.callback");
                        try {
                            return It.notifyParent(e), Promise.resolve()
                        } catch (e) {
                            return Promise.reject(e)
                        }
                    }
                }
                class Dt extends ft {
                    constructor({
                        popup_redirect_uri: e,
                        popup_post_logout_redirect_uri: t,
                        popupWindowFeatures: r,
                        popupWindowTarget: i,
                        silent_redirect_uri: n,
                        silentRequestTimeout: s,
                        automaticSilentRenew: o = !1,
                        validateSubOnSilentRenew: a = !1,
                        includeIdTokenInSilentRenew: u = !0,
                        monitorSession: h = !0,
                        monitorAnonymousSession: d = !1,
                        checkSessionInterval: g = 2e3,
                        stopCheckSessionOnError: p = !0,
                        query_status_response_type: f,
                        revokeAccessTokenOnSignout: v = !1,
                        accessTokenExpiringNotificationTime: m = 60,
                        redirectNavigator: y = new Pt,
                        popupNavigator: _ = new Tt,
                        iframeNavigator: S = new Rt,
                        userStore: F = new l({
                            store: c.sessionStorage
                        })
                    } = {}) {
                        super(arguments[0]), this._popup_redirect_uri = e, this._popup_post_logout_redirect_uri = t, this._popupWindowFeatures = r, this._popupWindowTarget = i, this._silent_redirect_uri = n, this._silentRequestTimeout = s, this._automaticSilentRenew = "undefined" != typeof window && "string" != typeof window.MOBILE_PLATFORM_OIDC_TARGET && o, this._validateSubOnSilentRenew = a, this._includeIdTokenInSilentRenew = u, this._accessTokenExpiringNotificationTime = m, this._monitorSession = "undefined" != typeof window && "string" != typeof window.MOBILE_PLATFORM_OIDC_TARGET && h, this._monitorAnonymousSession = d, this._checkSessionInterval = g, this._stopCheckSessionOnError = p, f ? this._query_status_response_type = f : arguments[0] && arguments[0].response_type ? this._query_status_response_type = bt.isOidc(arguments[0].response_type) ? "id_token" : "code" : this._query_status_response_type = "id_token", this._revokeAccessTokenOnSignout = v, this._redirectNavigator = y, this._popupNavigator = _, this._iframeNavigator = S, this._userStore = F
                    }
                    get popup_redirect_uri() {
                        return this._popup_redirect_uri
                    }
                    get popup_post_logout_redirect_uri() {
                        return this._popup_post_logout_redirect_uri
                    }
                    get popupWindowFeatures() {
                        return this._popupWindowFeatures
                    }
                    get popupWindowTarget() {
                        return this._popupWindowTarget
                    }
                    get silent_redirect_uri() {
                        return this._silent_redirect_uri
                    }
                    get silentRequestTimeout() {
                        return this._silentRequestTimeout
                    }
                    get automaticSilentRenew() {
                        return "undefined" != typeof window && "string" != typeof window.MOBILE_PLATFORM_OIDC_TARGET && this._automaticSilentRenew
                    }
                    get validateSubOnSilentRenew() {
                        return this._validateSubOnSilentRenew
                    }
                    get includeIdTokenInSilentRenew() {
                        return this._includeIdTokenInSilentRenew
                    }
                    get accessTokenExpiringNotificationTime() {
                        return this._accessTokenExpiringNotificationTime
                    }
                    get monitorSession() {
                        return "undefined" != typeof window && "string" != typeof window.MOBILE_PLATFORM_OIDC_TARGET && this._monitorSession
                    }
                    get monitorAnonymousSession() {
                        return this._monitorAnonymousSession
                    }
                    get checkSessionInterval() {
                        return this._checkSessionInterval
                    }
                    get stopCheckSessionOnError() {
                        return this._stopCheckSessionOnError
                    }
                    get query_status_response_type() {
                        return this._query_status_response_type
                    }
                    get revokeAccessTokenOnSignout() {
                        return this._revokeAccessTokenOnSignout
                    }
                    get redirectNavigator() {
                        return this._redirectNavigator
                    }
                    get popupNavigator() {
                        return this._popupNavigator
                    }
                    get iframeNavigator() {
                        return this._iframeNavigator
                    }
                    get userStore() {
                        return this._userStore
                    }
                }
                class Nt {
                    constructor({
                        id_token: e,
                        session_state: t,
                        access_token: r,
                        refresh_token: i,
                        token_type: n,
                        scope: s,
                        profile: o,
                        expires_at: a,
                        state: u
                    }) {
                        this.id_token = e, this.session_state = t, this.access_token = r, this.refresh_token = i, this.token_type = n, this.scope = s, this.profile = o, this.expires_at = a, this.state = u
                    }
                    get expires_in() {
                        if (this.expires_at) {
                            let e = parseInt(Date.now() / 1e3);
                            return this.expires_at - e
                        }
                    }
                    set expires_in(e) {
                        let t = parseInt(e);
                        if ("number" == typeof t && t > 0) {
                            let e = parseInt(Date.now() / 1e3);
                            this.expires_at = e + t
                        }
                    }
                    get expired() {
                        let e = this.expires_in;
                        if (void 0 !== e) return e <= 0
                    }
                    get scopes() {
                        return (this.scope || "").split(" ")
                    }
                    toStorageString() {
                        return s.debug("User.toStorageString"), JSON.stringify({
                            id_token: this.id_token,
                            session_state: this.session_state,
                            access_token: this.access_token,
                            refresh_token: this.refresh_token,
                            token_type: this.token_type,
                            scope: this.scope,
                            profile: this.profile,
                            expires_at: this.expires_at
                        })
                    }
                    static fromStorageString(e) {
                        return s.debug("User.fromStorageString"), new Nt(JSON.parse(e))
                    }
                }
                class Bt {
                    constructor(e) {
                        this._name = e, this._callbacks = []
                    }
                    addHandler(e) {
                        this._callbacks.push(e)
                    }
                    removeHandler(e) {
                        var t = this._callbacks.findIndex((t => t === e));
                        t >= 0 && this._callbacks.splice(t, 1)
                    }
                    raise(...e) {
                        s.debug("Event: Raising event: " + this._name);
                        for (let t = 0; t < this._callbacks.length; t++) this._callbacks[t](...e)
                    }
                }
                class Ht extends Bt {
                    constructor(e, t = c.timer, r) {
                        super(e), this._timer = t, this._nowFunc = r || (() => Date.now() / 1e3)
                    }
                    get now() {
                        return parseInt(this._nowFunc())
                    }
                    init(e) {
                        e <= 0 && (e = 1), e = parseInt(e);
                        var t = this.now + e;
                        if (this.expiration === t && this._timerHandle) s.debug("Timer.init timer " + this._name + " skipping initialization since already initialized for expiration:", this.expiration);
                        else {
                            this.cancel(), s.debug("Timer.init timer " + this._name + " for duration:", e), this._expiration = t;
                            var r = 5;
                            e < r && (r = e), this._timerHandle = this._timer.setInterval(this._callback.bind(this), 1e3 * r)
                        }
                    }
                    get expiration() {
                        return this._expiration
                    }
                    cancel() {
                        this._timerHandle && (s.debug("Timer.cancel: ", this._name), this._timer.clearInterval(this._timerHandle), this._timerHandle = null)
                    }
                    _callback() {
                        var e = this._expiration - this.now;
                        s.debug("Timer.callback; " + this._name + " timer expires in:", e), this._expiration <= this.now && (this.cancel(), super.raise())
                    }
                }
                class Ut {
                    constructor({
                        accessTokenExpiringNotificationTime: e = 60,
                        accessTokenExpiringTimer: t = new Ht("Access token expiring"),
                        accessTokenExpiredTimer: r = new Ht("Access token expired")
                    } = {}) {
                        this._accessTokenExpiringNotificationTime = e, this._accessTokenExpiring = t, this._accessTokenExpired = r
                    }
                    load(e) {
                        if (e.access_token && void 0 !== e.expires_in) {
                            let t = e.expires_in;
                            if (s.debug("AccessTokenEvents.load: access token present, remaining duration:", t), t > 0) {
                                let e = t - this._accessTokenExpiringNotificationTime;
                                e <= 0 && (e = 1), s.debug("AccessTokenEvents.load: registering expiring timer in:", e), this._accessTokenExpiring.init(e)
                            } else s.debug("AccessTokenEvents.load: canceling existing expiring timer becase we're past expiration."), this._accessTokenExpiring.cancel();
                            let r = t + 1;
                            s.debug("AccessTokenEvents.load: registering expired timer in:", r), this._accessTokenExpired.init(r)
                        } else this._accessTokenExpiring.cancel(), this._accessTokenExpired.cancel()
                    }
                    unload() {
                        s.debug("AccessTokenEvents.unload: canceling existing access token timers"), this._accessTokenExpiring.cancel(), this._accessTokenExpired.cancel()
                    }
                    addAccessTokenExpiring(e) {
                        this._accessTokenExpiring.addHandler(e)
                    }
                    removeAccessTokenExpiring(e) {
                        this._accessTokenExpiring.removeHandler(e)
                    }
                    addAccessTokenExpired(e) {
                        this._accessTokenExpired.addHandler(e)
                    }
                    removeAccessTokenExpired(e) {
                        this._accessTokenExpired.removeHandler(e)
                    }
                }
                class Ot extends Ut {
                    constructor(e) {
                        super(e), this._userLoaded = new Bt("User loaded"), this._userUnloaded = new Bt("User unloaded"), this._silentRenewError = new Bt("Silent renew error"), this._userSignedIn = new Bt("User signed in"), this._userSignedOut = new Bt("User signed out"), this._userSessionChanged = new Bt("User session changed")
                    }
                    load(e, t = !0) {
                        s.debug("UserManagerEvents.load"), super.load(e), t && this._userLoaded.raise(e)
                    }
                    unload() {
                        s.debug("UserManagerEvents.unload"), super.unload(), this._userUnloaded.raise()
                    }
                    addUserLoaded(e) {
                        this._userLoaded.addHandler(e)
                    }
                    removeUserLoaded(e) {
                        this._userLoaded.removeHandler(e)
                    }
                    addUserUnloaded(e) {
                        this._userUnloaded.addHandler(e)
                    }
                    removeUserUnloaded(e) {
                        this._userUnloaded.removeHandler(e)
                    }
                    addSilentRenewError(e) {
                        this._silentRenewError.addHandler(e)
                    }
                    removeSilentRenewError(e) {
                        this._silentRenewError.removeHandler(e)
                    }
                    _raiseSilentRenewError(e) {
                        s.debug("UserManagerEvents._raiseSilentRenewError", e.message), this._silentRenewError.raise(e)
                    }
                    addUserSignedIn(e) {
                        this._userSignedIn.addHandler(e)
                    }
                    removeUserSignedIn(e) {
                        this._userSignedIn.removeHandler(e)
                    }
                    _raiseUserSignedIn() {
                        s.debug("UserManagerEvents._raiseUserSignedIn"), this._userSignedIn.raise()
                    }
                    addUserSignedOut(e) {
                        this._userSignedOut.addHandler(e)
                    }
                    removeUserSignedOut(e) {
                        this._userSignedOut.removeHandler(e)
                    }
                    _raiseUserSignedOut() {
                        s.debug("UserManagerEvents._raiseUserSignedOut"), this._userSignedOut.raise()
                    }
                    addUserSessionChanged(e) {
                        this._userSessionChanged.addHandler(e)
                    }
                    removeUserSessionChanged(e) {
                        this._userSessionChanged.removeHandler(e)
                    }
                    _raiseUserSessionChanged() {
                        s.debug("UserManagerEvents._raiseUserSessionChanged"), this._userSessionChanged.raise()
                    }
                }
                class jt {
                    constructor(e) {
                        this._userManager = e
                    }
                    start() {
                        this._callback || (this._callback = this._tokenExpiring.bind(this), this._userManager.events.addAccessTokenExpiring(this._callback), this._userManager.getUser().then((e => {})).catch((e => {
                            s.error("SilentRenewService.start: Error from getUser:", e.message)
                        })))
                    }
                    stop() {
                        this._callback && (this._userManager.events.removeAccessTokenExpiring(this._callback), delete this._callback)
                    }
                    _tokenExpiring() {
                        this._userManager.signinSilent().then((e => {
                            s.debug("SilentRenewService._tokenExpiring: Silent token renewal successful")
                        }), (e => {
                            s.error("SilentRenewService._tokenExpiring: Error from signinSilent:", e.message), this._userManager.events._raiseSilentRenewError(e)
                        }))
                    }
                }
                class Mt {
                    constructor(e, t, r, i, n = !0) {
                        this._callback = e, this._client_id = t, this._url = r, this._interval = i || 2e3, this._stopOnError = n;
                        var s = r.indexOf("/", r.indexOf("//") + 2);
                        this._frame_origin = r.substr(0, s), this._frame = window.document.createElement("iframe"), this._frame.style.visibility = "hidden", this._frame.style.position = "absolute", this._frame.style.display = "none", this._frame.width = 0, this._frame.height = 0, this._frame.src = r
                    }
                    load() {
                        return new Promise((e => {
                            this._frame.onload = () => {
                                e()
                            }, window.document.body.appendChild(this._frame), this._boundMessageEvent = this._message.bind(this), window.addEventListener("message", this._boundMessageEvent, !1)
                        }))
                    }
                    _message(e) {
                        e.origin === this._frame_origin && e.source === this._frame.contentWindow && ("error" === e.data ? (s.error("CheckSessionIFrame: error message from check session op iframe"), this._stopOnError && this.stop()) : "changed" === e.data ? (s.debug("CheckSessionIFrame: changed message from check session op iframe"), this.stop(), this._callback()) : s.debug("CheckSessionIFrame: " + e.data + " message from check session op iframe"))
                    }
                    start(e) {
                        if (this._session_state !== e) {
                            s.debug("CheckSessionIFrame.start"), this.stop(), this._session_state = e;
                            let t = () => {
                                this._frame.contentWindow.postMessage(this._client_id + " " + this._session_state, this._frame_origin)
                            };
                            t(), this._timer = window.setInterval(t, this._interval)
                        }
                    }
                    stop() {
                        this._session_state = null, this._timer && (s.debug("CheckSessionIFrame.stop"), window.clearInterval(this._timer), this._timer = null)
                    }
                }
                class Vt {
                    constructor(e, t = Mt, r = c.timer) {
                        if (!e) throw s.error("SessionMonitor.ctor: No user manager passed to SessionMonitor"), new Error("userManager");
                        this._userManager = e, this._CheckSessionIFrameCtor = t, this._timer = r, this._userManager.events.addUserLoaded(this._start.bind(this)), this._userManager.events.addUserUnloaded(this._stop.bind(this)), Promise.resolve(this._userManager.getUser().then((e => {
                            e ? this._start(e) : this._settings.monitorAnonymousSession && this._userManager.querySessionStatus().then((e => {
                                let t = {
                                    session_state: e.session_state
                                };
                                e.sub && e.sid && (t.profile = {
                                    sub: e.sub,
                                    sid: e.sid
                                }), this._start(t)
                            })).catch((e => {
                                s.error("SessionMonitor ctor: error from querySessionStatus:", e.message)
                            }))
                        })).catch((e => {
                            s.error("SessionMonitor ctor: error from getUser:", e.message)
                        })))
                    }
                    get _settings() {
                        return this._userManager.settings
                    }
                    get _metadataService() {
                        return this._userManager.metadataService
                    }
                    get _client_id() {
                        return this._settings.client_id
                    }
                    get _checkSessionInterval() {
                        return this._settings.checkSessionInterval
                    }
                    get _stopCheckSessionOnError() {
                        return this._settings.stopCheckSessionOnError
                    }
                    _start(e) {
                        let t = e.session_state;
                        t && (e.profile ? (this._sub = e.profile.sub, this._sid = e.profile.sid, s.debug("SessionMonitor._start: session_state:", t, ", sub:", this._sub)) : (this._sub = void 0, this._sid = void 0, s.debug("SessionMonitor._start: session_state:", t, ", anonymous user")), this._checkSessionIFrame ? this._checkSessionIFrame.start(t) : this._metadataService.getCheckSessionIframe().then((e => {
                            if (e) {
                                s.debug("SessionMonitor._start: Initializing check session iframe");
                                let r = this._client_id,
                                    i = this._checkSessionInterval,
                                    n = this._stopCheckSessionOnError;
                                this._checkSessionIFrame = new this._CheckSessionIFrameCtor(this._callback.bind(this), r, e, i, n), this._checkSessionIFrame.load().then((() => {
                                    this._checkSessionIFrame.start(t)
                                }))
                            } else s.warn("SessionMonitor._start: No check session iframe found in the metadata")
                        })).catch((e => {
                            s.error("SessionMonitor._start: Error from getCheckSessionIframe:", e.message)
                        })))
                    }
                    _stop() {
                        if (this._sub = void 0, this._sid = void 0, this._checkSessionIFrame && (s.debug("SessionMonitor._stop"), this._checkSessionIFrame.stop()), this._settings.monitorAnonymousSession) {
                            let e = this._timer.setInterval((() => {
                                this._timer.clearInterval(e), this._userManager.querySessionStatus().then((e => {
                                    let t = {
                                        session_state: e.session_state
                                    };
                                    e.sub && e.sid && (t.profile = {
                                        sub: e.sub,
                                        sid: e.sid
                                    }), this._start(t)
                                })).catch((e => {
                                    s.error("SessionMonitor: error from querySessionStatus:", e.message)
                                }))
                            }), 1e3)
                        }
                    }
                    _callback() {
                        this._userManager.querySessionStatus().then((e => {
                            var t = !0;
                            e ? e.sub === this._sub ? (t = !1, this._checkSessionIFrame.start(e.session_state), e.sid === this._sid ? s.debug("SessionMonitor._callback: Same sub still logged in at OP, restarting check session iframe; session_state:", e.session_state) : (s.debug("SessionMonitor._callback: Same sub still logged in at OP, session state has changed, restarting check session iframe; session_state:", e.session_state), this._userManager.events._raiseUserSessionChanged())) : s.debug("SessionMonitor._callback: Different subject signed into OP:", e.sub) : s.debug("SessionMonitor._callback: Subject no longer signed into OP"), t && (this._sub ? (s.debug("SessionMonitor._callback: SessionMonitor._callback; raising signed out event"), this._userManager.events._raiseUserSignedOut()) : (s.debug("SessionMonitor._callback: SessionMonitor._callback; raising signed in event"), this._userManager.events._raiseUserSignedIn()))
                        })).catch((e => {
                            this._sub && (s.debug("SessionMonitor._callback: Error calling queryCurrentSigninSession; raising signed out event", e.message), this._userManager.events._raiseUserSignedOut())
                        }))
                    }
                }
                class Kt {
                    constructor(e, t = c.XMLHttpRequest, r = p) {
                        if (!e) throw s.error("TokenRevocationClient.ctor: No settings provided"), new Error("No settings provided.");
                        this._settings = e, this._XMLHttpRequestCtor = t, this._metadataService = new r(this._settings)
                    }
                    revoke(e, t, r = "access_token") {
                        if (!e) throw s.error("TokenRevocationClient.revoke: No token provided"), new Error("No token provided.");
                        if ("access_token" !== r && "refresh_token" != r) throw s.error("TokenRevocationClient.revoke: Invalid token type"), new Error("Invalid token type.");
                        return this._metadataService.getRevocationEndpoint().then((i => {
                            if (i) {
                                s.debug("TokenRevocationClient.revoke: Revoking " + r);
                                var n = this._settings.client_id,
                                    o = this._settings.client_secret;
                                return this._revoke(i, n, o, e, r)
                            }
                            if (t) throw s.error("TokenRevocationClient.revoke: Revocation not supported"), new Error("Revocation not supported")
                        }))
                    }
                    _revoke(e, t, r, i, n) {
                        return new Promise(((o, a) => {
                            var u = new this._XMLHttpRequestCtor;
                            u.open("POST", e), u.onload = () => {
                                s.debug("TokenRevocationClient.revoke: HTTP response received, status", u.status), 200 === u.status ? o() : a(Error(u.statusText + " (" + u.status + ")"))
                            }, u.onerror = () => {
                                s.debug("TokenRevocationClient.revoke: Network Error."), a("Network Error")
                            };
                            var h = "client_id=" + encodeURIComponent(t);
                            r && (h += "&client_secret=" + encodeURIComponent(r)), h += "&token_type_hint=" + encodeURIComponent(n), h += "&token=" + encodeURIComponent(i), u.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), u.send(h)
                        }))
                    }
                }
                class qt {
                    constructor(e) {
                        this._promise = new Promise(((e, t) => {
                            this._resolve = e, this._reject = t
                        })), this.features = e.popupWindowFeatures || "location=no,toolbar=no,zoom=no", this.target = e.popupWindowTarget || "_blank", this.redirect_uri = e.startUrl, s.debug("CordovaPopupWindow.ctor: redirect_uri: " + this.redirect_uri)
                    }
                    _isInAppBrowserInstalled(e) {
                        return ["cordova-plugin-inappbrowser", "cordova-plugin-inappbrowser.inappbrowser", "org.apache.cordova.inappbrowser"].some((function(t) {
                            return e.hasOwnProperty(t)
                        }))
                    }
                    navigate(e) {
                        if (e && e.url) {
                            if (!window.cordova) return this._error("cordova is undefined");
                            var t = window.cordova.require("cordova/plugin_list").metadata;
                            if (!1 === this._isInAppBrowserInstalled(t)) return this._error("InAppBrowser plugin not found");
                            this._popup = cordova.InAppBrowser.open(e.url, this.target, this.features), this._popup ? (s.debug("CordovaPopupWindow.navigate: popup successfully created"), this._exitCallbackEvent = this._exitCallback.bind(this), this._loadStartCallbackEvent = this._loadStartCallback.bind(this), this._popup.addEventListener("exit", this._exitCallbackEvent, !1), this._popup.addEventListener("loadstart", this._loadStartCallbackEvent, !1)) : this._error("Error opening popup window")
                        } else this._error("No url provided");
                        return this.promise
                    }
                    get promise() {
                        return this._promise
                    }
                    _loadStartCallback(e) {
                        0 === e.url.indexOf(this.redirect_uri) && this._success({
                            url: e.url
                        })
                    }
                    _exitCallback(e) {
                        this._error(e)
                    }
                    _success(e) {
                        this._cleanup(), s.debug("CordovaPopupWindow: Successful response from cordova popup window"), this._resolve(e)
                    }
                    _error(e) {
                        this._cleanup(), s.error(e), this._reject(new Error(e))
                    }
                    close() {
                        this._cleanup()
                    }
                    _cleanup() {
                        this._popup && (s.debug("CordovaPopupWindow: cleaning up popup"), this._popup.removeEventListener("exit", this._exitCallbackEvent, !1), this._popup.removeEventListener("loadstart", this._loadStartCallbackEvent, !1), this._popup.close()), this._popup = null
                    }
                }
                const Lt = {
                    Version: "1.13.0",
                    Log: s,
                    OidcClient: kt,
                    OidcClientSettings: ft,
                    WebStorageStateStore: l,
                    InMemoryWebStorage: class {
                        constructor() {
                            this._data = {}
                        }
                        getItem(e) {
                            return s.debug("InMemoryWebStorage.getItem", e), this._data[e]
                        }
                        setItem(e, t) {
                            s.debug("InMemoryWebStorage.setItem", e), this._data[e] = t
                        }
                        removeItem(e) {
                            s.debug("InMemoryWebStorage.removeItem", e), delete this._data[e]
                        }
                        get length() {
                            return Object.getOwnPropertyNames(this._data).length
                        }
                        key(e) {
                            return Object.getOwnPropertyNames(this._data)[e]
                        }
                    },
                    UserManager: class extends kt {
                        constructor(e = {}, t = jt, r = Vt, i = Kt, n = ct, o = ut) {
                            e instanceof Dt || (e = new Dt(e)), super(e), this._events = new Ot(e), this._silentRenewService = new t(this), this.settings.automaticSilentRenew && (s.debug("UserManager.ctor: automaticSilentRenew is configured, setting up silent renew"), this.startSilentRenew()), this.settings.monitorSession && (s.debug("UserManager.ctor: monitorSession is configured, setting up session monitor"), this._sessionMonitor = new r(this)), this._tokenRevocationClient = new i(this._settings), this._tokenClient = new n(this._settings), this._joseUtil = o
                        }
                        get _redirectNavigator() {
                            return this.settings.redirectNavigator
                        }
                        get _popupNavigator() {
                            return this.settings.popupNavigator
                        }
                        get _iframeNavigator() {
                            return this.settings.iframeNavigator
                        }
                        get _userStore() {
                            return this.settings.userStore
                        }
                        get events() {
                            return this._events
                        }
                        getUser() {
                            return this._loadUser().then((e => e ? (s.info("UserManager.getUser: user loaded"), this._events.load(e, !1), e) : (s.info("UserManager.getUser: user not found in storage"), null)))
                        }
                        removeUser() {
                            return this.storeUser(null).then((() => {
                                s.info("UserManager.removeUser: user removed from storage"), this._events.unload()
                            }))
                        }
                        signinRedirect(e = {}) {
                            (e = Object.assign({}, e)).request_type = "si:r";
                            let t = {
                                useReplaceToNavigate: e.useReplaceToNavigate
                            };
                            return this._signinStart(e, this._redirectNavigator, t).then((() => {
                                s.info("UserManager.signinRedirect: successful")
                            }))
                        }
                        signinRedirectCallback(e) {
                            return this._signinEnd(e || this._redirectNavigator.url).then((e => (e.profile && e.profile.sub ? s.info("UserManager.signinRedirectCallback: successful, signed in sub: ", e.profile.sub) : s.info("UserManager.signinRedirectCallback: no sub"), e)))
                        }
                        signinPopup(e = {}) {
                            (e = Object.assign({}, e)).request_type = "si:p";
                            let t = e.redirect_uri || this.settings.popup_redirect_uri || this.settings.redirect_uri;
                            return t ? (e.redirect_uri = t, e.display = "popup", this._signin(e, this._popupNavigator, {
                                startUrl: t,
                                popupWindowFeatures: e.popupWindowFeatures || this.settings.popupWindowFeatures,
                                popupWindowTarget: e.popupWindowTarget || this.settings.popupWindowTarget
                            }).then((e => (e && (e.profile && e.profile.sub ? s.info("UserManager.signinPopup: signinPopup successful, signed in sub: ", e.profile.sub) : s.info("UserManager.signinPopup: no sub")), e)))) : (s.error("UserManager.signinPopup: No popup_redirect_uri or redirect_uri configured"), Promise.reject(new Error("No popup_redirect_uri or redirect_uri configured")))
                        }
                        signinPopupCallback(e) {
                            return this._signinCallback(e, this._popupNavigator).then((e => (e && (e.profile && e.profile.sub ? s.info("UserManager.signinPopupCallback: successful, signed in sub: ", e.profile.sub) : s.info("UserManager.signinPopupCallback: no sub")), e))).catch((e => {
                                s.error("UserManager.signinPopupCallback error: " + e && e.message)
                            }))
                        }
                        signinSilent(e = {}) {
                            return e = Object.assign({}, e), this._loadUser().then((t => t && t.refresh_token ? (e.refresh_token = t.refresh_token, this._useRefreshToken(e)) : (e.request_type = "si:s", e.id_token_hint = e.id_token_hint || this.settings.includeIdTokenInSilentRenew && t && t.id_token, t && this._settings.validateSubOnSilentRenew && (s.debug("UserManager.signinSilent, subject prior to silent renew: ", t.profile.sub), e.current_sub = t.profile.sub), this._signinSilentIframe(e))))
                        }
                        _useRefreshToken(e = {}) {
                            return this._tokenClient.exchangeRefreshToken(e).then((e => e ? e.access_token ? this._loadUser().then((t => {
                                if (t) {
                                    let r = Promise.resolve();
                                    return e.id_token && (r = this._validateIdTokenFromTokenRefreshToken(t.profile, e.id_token)), r.then((() => (s.debug("UserManager._useRefreshToken: refresh token response success"), t.id_token = e.id_token || t.id_token, t.access_token = e.access_token, t.refresh_token = e.refresh_token || t.refresh_token, t.expires_in = e.expires_in, this.storeUser(t).then((() => (this._events.load(t), t))))))
                                }
                                return null
                            })) : (s.error("UserManager._useRefreshToken: No access token returned from token endpoint"), Promise.reject("No access token returned from token endpoint")) : (s.error("UserManager._useRefreshToken: No response returned from token endpoint"), Promise.reject("No response returned from token endpoint"))))
                        }
                        _validateIdTokenFromTokenRefreshToken(e, t) {
                            return this._metadataService.getIssuer().then((r => this.settings.getEpochTime().then((i => this._joseUtil.validateJwtAttributes(t, r, this._settings.client_id, this._settings.clockSkew, i).then((t => t ? t.sub !== e.sub ? (s.error("UserManager._validateIdTokenFromTokenRefreshToken: sub in id_token does not match current sub"), Promise.reject(new Error("sub in id_token does not match current sub"))) : t.auth_time && t.auth_time !== e.auth_time ? (s.error("UserManager._validateIdTokenFromTokenRefreshToken: auth_time in id_token does not match original auth_time"), Promise.reject(new Error("auth_time in id_token does not match original auth_time"))) : t.azp && t.azp !== e.azp ? (s.error("UserManager._validateIdTokenFromTokenRefreshToken: azp in id_token does not match original azp"), Promise.reject(new Error("azp in id_token does not match original azp"))) : !t.azp && e.azp ? (s.error("UserManager._validateIdTokenFromTokenRefreshToken: azp not in id_token, but present in original id_token"), Promise.reject(new Error("azp not in id_token, but present in original id_token"))) : void 0 : (s.error("UserManager._validateIdTokenFromTokenRefreshToken: Failed to validate id_token"), Promise.reject(new Error("Failed to validate id_token")))))))))
                        }
                        _signinSilentIframe(e = {}) {
                            let t = e.redirect_uri || this.settings.silent_redirect_uri || this.settings.redirect_uri;
                            return t ? (e.redirect_uri = t, e.prompt = e.prompt || "none", this._signin(e, this._iframeNavigator, {
                                startUrl: t,
                                silentRequestTimeout: e.silentRequestTimeout || this.settings.silentRequestTimeout
                            }).then((e => (e && (e.profile && e.profile.sub ? s.info("UserManager.signinSilent: successful, signed in sub: ", e.profile.sub) : s.info("UserManager.signinSilent: no sub")), e)))) : (s.error("UserManager.signinSilent: No silent_redirect_uri configured"), Promise.reject(new Error("No silent_redirect_uri configured")))
                        }
                        signinSilentCallback(e) {
                            return this._signinCallback(e, this._iframeNavigator).then((e => (e && (e.profile && e.profile.sub ? s.info("UserManager.signinSilentCallback: successful, signed in sub: ", e.profile.sub) : s.info("UserManager.signinSilentCallback: no sub")), e)))
                        }
                        signinCallback(e) {
                            return this.readSigninResponseState(e).then((({
                                state: t,
                                response: r
                            }) => "si:r" === t.request_type ? this.signinRedirectCallback(e) : "si:p" === t.request_type ? this.signinPopupCallback(e) : "si:s" === t.request_type ? this.signinSilentCallback(e) : Promise.reject(new Error("invalid response_type in state"))))
                        }
                        signoutCallback(e, t) {
                            return this.readSignoutResponseState(e).then((({
                                state: r,
                                response: i
                            }) => r ? "so:r" === r.request_type ? this.signoutRedirectCallback(e) : "so:p" === r.request_type ? this.signoutPopupCallback(e, t) : Promise.reject(new Error("invalid response_type in state")) : i))
                        }
                        querySessionStatus(e = {}) {
                            (e = Object.assign({}, e)).request_type = "si:s";
                            let t = e.redirect_uri || this.settings.silent_redirect_uri || this.settings.redirect_uri;
                            return t ? (e.redirect_uri = t, e.prompt = "none", e.response_type = e.response_type || this.settings.query_status_response_type, e.scope = e.scope || "openid", e.skipUserInfo = !0, this._signinStart(e, this._iframeNavigator, {
                                startUrl: t,
                                silentRequestTimeout: e.silentRequestTimeout || this.settings.silentRequestTimeout
                            }).then((e => this.processSigninResponse(e.url).then((e => {
                                if (s.debug("UserManager.querySessionStatus: got signin response"), e.session_state && e.profile.sub) return s.info("UserManager.querySessionStatus: querySessionStatus success for sub: ", e.profile.sub), {
                                    session_state: e.session_state,
                                    sub: e.profile.sub,
                                    sid: e.profile.sid
                                };
                                s.info("querySessionStatus successful, user not authenticated")
                            })).catch((e => {
                                if (e.session_state && this.settings.monitorAnonymousSession && ("login_required" == e.message || "consent_required" == e.message || "interaction_required" == e.message || "account_selection_required" == e.message)) return s.info("UserManager.querySessionStatus: querySessionStatus success for anonymous user"), {
                                    session_state: e.session_state
                                };
                                throw e
                            }))))) : (s.error("UserManager.querySessionStatus: No silent_redirect_uri configured"), Promise.reject(new Error("No silent_redirect_uri configured")))
                        }
                        _signin(e, t, r = {}) {
                            return this._signinStart(e, t, r).then((t => this._signinEnd(t.url, e)))
                        }
                        _signinStart(e, t, r = {}) {
                            return t.prepare(r).then((t => (s.debug("UserManager._signinStart: got navigator window handle"), this.createSigninRequest(e).then((e => (s.debug("UserManager._signinStart: got signin request"), r.url = e.url, r.id = e.state.id, t.navigate(r)))).catch((e => {
                                throw t.close && (s.debug("UserManager._signinStart: Error after preparing navigator, closing navigator window"), t.close()), e
                            })))))
                        }
                        _signinEnd(e, t = {}) {
                            return this.processSigninResponse(e).then((e => {
                                s.debug("UserManager._signinEnd: got signin response");
                                let r = new Nt(e);
                                if (t.current_sub) {
                                    if (t.current_sub !== r.profile.sub) return s.debug("UserManager._signinEnd: current user does not match user returned from signin. sub from signin: ", r.profile.sub), Promise.reject(new Error("login_required"));
                                    s.debug("UserManager._signinEnd: current user matches user returned from signin")
                                }
                                return this.storeUser(r).then((() => (s.debug("UserManager._signinEnd: user stored"), this._events.load(r), r)))
                            }))
                        }
                        _signinCallback(e, t) {
                            s.debug("UserManager._signinCallback");
                            let r = "query" === this._settings.response_mode || !this._settings.response_mode && bt.isCode(this._settings.response_type) ? "?" : "#";
                            return t.callback(e, void 0, r)
                        }
                        signoutRedirect(e = {}) {
                            (e = Object.assign({}, e)).request_type = "so:r";
                            let t = e.post_logout_redirect_uri || this.settings.post_logout_redirect_uri;
                            t && (e.post_logout_redirect_uri = t);
                            let r = {
                                useReplaceToNavigate: e.useReplaceToNavigate
                            };
                            return this._signoutStart(e, this._redirectNavigator, r).then((() => {
                                s.info("UserManager.signoutRedirect: successful")
                            }))
                        }
                        signoutRedirectCallback(e) {
                            return this._signoutEnd(e || this._redirectNavigator.url).then((e => (s.info("UserManager.signoutRedirectCallback: successful"), e)))
                        }
                        signoutPopup(e = {}) {
                            (e = Object.assign({}, e)).request_type = "so:p";
                            let t = e.post_logout_redirect_uri || this.settings.popup_post_logout_redirect_uri || this.settings.post_logout_redirect_uri;
                            return e.post_logout_redirect_uri = t, e.display = "popup", e.post_logout_redirect_uri && (e.state = e.state || {}), this._signout(e, this._popupNavigator, {
                                startUrl: t,
                                popupWindowFeatures: e.popupWindowFeatures || this.settings.popupWindowFeatures,
                                popupWindowTarget: e.popupWindowTarget || this.settings.popupWindowTarget
                            }).then((() => {
                                s.info("UserManager.signoutPopup: successful")
                            }))
                        }
                        signoutPopupCallback(e, t) {
                            return void 0 === t && "boolean" == typeof e && (t = e, e = null), this._popupNavigator.callback(e, t, "?").then((() => {
                                s.info("UserManager.signoutPopupCallback: successful")
                            }))
                        }
                        _signout(e, t, r = {}) {
                            return this._signoutStart(e, t, r).then((e => this._signoutEnd(e.url)))
                        }
                        _signoutStart(e = {}, t, r = {}) {
                            return t.prepare(r).then((t => (s.debug("UserManager._signoutStart: got navigator window handle"), this._loadUser().then((i => (s.debug("UserManager._signoutStart: loaded current user from storage"), (this._settings.revokeAccessTokenOnSignout ? this._revokeInternal(i) : Promise.resolve()).then((() => {
                                var n = e.id_token_hint || i && i.id_token;
                                return n && (s.debug("UserManager._signoutStart: Setting id_token into signout request"), e.id_token_hint = n), this.removeUser().then((() => (s.debug("UserManager._signoutStart: user removed, creating signout request"), this.createSignoutRequest(e).then((e => (s.debug("UserManager._signoutStart: got signout request"), r.url = e.url, e.state && (r.id = e.state.id), t.navigate(r)))))))
                            }))))).catch((e => {
                                throw t.close && (s.debug("UserManager._signoutStart: Error after preparing navigator, closing navigator window"), t.close()), e
                            })))))
                        }
                        _signoutEnd(e) {
                            return this.processSignoutResponse(e).then((e => (s.debug("UserManager._signoutEnd: got signout response"), e)))
                        }
                        revokeAccessToken() {
                            return this._loadUser().then((e => this._revokeInternal(e, !0).then((t => {
                                if (t) return s.debug("UserManager.revokeAccessToken: removing token properties from user and re-storing"), e.access_token = null, e.refresh_token = null, e.expires_at = null, e.token_type = null, this.storeUser(e).then((() => {
                                    s.debug("UserManager.revokeAccessToken: user stored"), this._events.load(e)
                                }))
                            })))).then((() => {
                                s.info("UserManager.revokeAccessToken: access token revoked successfully")
                            }))
                        }
                        _revokeInternal(e, t) {
                            if (e) {
                                var r = e.access_token,
                                    i = e.refresh_token;
                                return this._revokeAccessTokenInternal(r, t).then((e => this._revokeRefreshTokenInternal(i, t).then((t => (e || t || s.debug("UserManager.revokeAccessToken: no need to revoke due to no token(s), or JWT format"), e || t)))))
                            }
                            return Promise.resolve(!1)
                        }
                        _revokeAccessTokenInternal(e, t) {
                            return !e || e.indexOf(".") >= 0 ? Promise.resolve(!1) : this._tokenRevocationClient.revoke(e, t).then((() => !0))
                        }
                        _revokeRefreshTokenInternal(e, t) {
                            return e ? this._tokenRevocationClient.revoke(e, t, "refresh_token").then((() => !0)) : Promise.resolve(!1)
                        }
                        startSilentRenew() {
                            this._silentRenewService.start()
                        }
                        stopSilentRenew() {
                            this._silentRenewService.stop()
                        }
                        get _userStoreKey() {
                            return `user:${this.settings.authority}:${this.settings.client_id}`
                        }
                        _loadUser() {
                            if ("undefined" != typeof window && "ios" === window.MOBILE_PLATFORM_OIDC_TARGET) return window.webkit.messageHandlers.oidcAuthHandler.postMessage("oidc-auth");
                            if ("undefined" != typeof window && "android" === window.MOBILE_PLATFORM_OIDC_TARGET) {
                                var e = window.AndroidOIDCAuthClient.authenticate("oidc-auth");
                                try {
                                    const t = JSON.parse(e);
                                    return Promise.resolve(t)
                                } catch (e) {
                                    return console.error(e), Promise.resolve({})
                                }
                            }
                            return this._userStore.get(this._userStoreKey).then((e => e ? (s.debug("UserManager._loadUser: user storageString loaded"), Nt.fromStorageString(e)) : (s.debug("UserManager._loadUser: no user storageString"), null)))
                        }
                        storeUser(e) {
                            if (e) {
                                s.debug("UserManager.storeUser: storing user");
                                var t = e.toStorageString();
                                return this._userStore.set(this._userStoreKey, t)
                            }
                            return s.debug("storeUser.storeUser: removing user"), this._userStore.remove(this._userStoreKey)
                        }
                    },
                    AccessTokenEvents: Ut,
                    MetadataService: p,
                    CordovaPopupNavigator: class {
                        prepare(e) {
                            let t = new qt(e);
                            return Promise.resolve(t)
                        }
                    },
                    CordovaIFrameNavigator: class {
                        prepare(e) {
                            e.popupWindowFeatures = "hidden=yes";
                            let t = new qt(e);
                            return Promise.resolve(t)
                        }
                    },
                    CheckSessionIFrame: Mt,
                    TokenRevocationClient: Kt,
                    SessionMonitor: Vt,
                    Global: c,
                    User: Nt
                };
                return t.default
            })(), e.exports = t()
        }
    }
]);
//# sourceMappingURL=549.chunk.cc0d72.js.map