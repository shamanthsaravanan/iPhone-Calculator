"use strict";
(self.webpackChunk_nike_shop_components = self.webpackChunk_nike_shop_components || []).push([
    [7866], {
        5025: (t, e, r) => {
            (e = t.exports = r(2251).default).default = e
        },
        2251: (t, e) => {
            e.default = function() {
                function t(e, r, n, i) {
                    this.message = e, this.expected = r, this.found = n, this.location = i, this.name = "SyntaxError", "function" == typeof Error.captureStackTrace && Error.captureStackTrace(this, t)
                }
                return function(t, e) {
                    function r() {
                        this.constructor = t
                    }
                    r.prototype = e.prototype, t.prototype = new r
                }(t, Error), {
                    SyntaxError: t,
                    parse: function(e) {
                        var r, n = arguments.length > 1 ? arguments[1] : {},
                            i = {},
                            o = {
                                start: Tt
                            },
                            u = Tt,
                            a = function(t) {
                                return {
                                    type: "messageFormatPattern",
                                    elements: t,
                                    location: Et()
                                }
                            },
                            c = function(t) {
                                var e, r, n, i, o, u = "";
                                for (e = 0, n = t.length; e < n; e += 1)
                                    for (r = 0, o = (i = t[e]).length; r < o; r += 1) u += i[r];
                                return u
                            },
                            s = function(t) {
                                return {
                                    type: "messageTextElement",
                                    value: t,
                                    location: Et()
                                }
                            },
                            l = /^[^ \t\n\r,.+={}#]/,
                            f = {
                                type: "class",
                                value: "[^ \\t\\n\\r,.+={}#]",
                                description: "[^ \\t\\n\\r,.+={}#]"
                            },
                            p = "{",
                            h = {
                                type: "literal",
                                value: "{",
                                description: '"{"'
                            },
                            d = ",",
                            v = {
                                type: "literal",
                                value: ",",
                                description: '","'
                            },
                            y = "}",
                            g = {
                                type: "literal",
                                value: "}",
                                description: '"}"'
                            },
                            m = function(t, e) {
                                return {
                                    type: "argumentElement",
                                    id: t,
                                    format: e && e[2],
                                    location: Et()
                                }
                            },
                            A = "number",
                            b = {
                                type: "literal",
                                value: "number",
                                description: '"number"'
                            },
                            C = "date",
                            x = {
                                type: "literal",
                                value: "date",
                                description: '"date"'
                            },
                            F = "time",
                            R = {
                                type: "literal",
                                value: "time",
                                description: '"time"'
                            },
                            E = function(t, e) {
                                return {
                                    type: t + "Format",
                                    style: e && e[2],
                                    location: Et()
                                }
                            },
                            w = "plural",
                            k = {
                                type: "literal",
                                value: "plural",
                                description: '"plural"'
                            },
                            S = function(t) {
                                return {
                                    type: t.type,
                                    ordinal: !1,
                                    offset: t.offset || 0,
                                    options: t.options,
                                    location: Et()
                                }
                            },
                            _ = "selectordinal",
                            T = {
                                type: "literal",
                                value: "selectordinal",
                                description: '"selectordinal"'
                            },
                            j = function(t) {
                                return {
                                    type: t.type,
                                    ordinal: !0,
                                    offset: t.offset || 0,
                                    options: t.options,
                                    location: Et()
                                }
                            },
                            I = "select",
                            P = {
                                type: "literal",
                                value: "select",
                                description: '"select"'
                            },
                            B = function(t) {
                                return {
                                    type: "selectFormat",
                                    options: t,
                                    location: Et()
                                }
                            },
                            U = "=",
                            W = {
                                type: "literal",
                                value: "=",
                                description: '"="'
                            },
                            q = function(t, e) {
                                return {
                                    type: "optionalFormatPattern",
                                    selector: t,
                                    value: e,
                                    location: Et()
                                }
                            },
                            z = "offset:",
                            D = {
                                type: "literal",
                                value: "offset:",
                                description: '"offset:"'
                            },
                            G = function(t) {
                                return t
                            },
                            H = function(t, e) {
                                return {
                                    type: "pluralFormat",
                                    offset: t,
                                    options: e,
                                    location: Et()
                                }
                            },
                            J = {
                                type: "other",
                                description: "whitespace"
                            },
                            K = /^[ \t\n\r]/,
                            L = {
                                type: "class",
                                value: "[ \\t\\n\\r]",
                                description: "[ \\t\\n\\r]"
                            },
                            M = {
                                type: "other",
                                description: "optionalWhitespace"
                            },
                            N = /^[0-9]/,
                            O = {
                                type: "class",
                                value: "[0-9]",
                                description: "[0-9]"
                            },
                            Q = /^[0-9a-f]/i,
                            V = {
                                type: "class",
                                value: "[0-9a-f]i",
                                description: "[0-9a-f]i"
                            },
                            X = "0",
                            Y = {
                                type: "literal",
                                value: "0",
                                description: '"0"'
                            },
                            Z = /^[1-9]/,
                            $ = {
                                type: "class",
                                value: "[1-9]",
                                description: "[1-9]"
                            },
                            tt = function(t) {
                                return parseInt(t, 10)
                            },
                            et = /^[^{}\\\0-\x1F \t\n\r]/,
                            rt = {
                                type: "class",
                                value: "[^{}\\\\\\0-\\x1F\\x7f \\t\\n\\r]",
                                description: "[^{}\\\\\\0-\\x1F\\x7f \\t\\n\\r]"
                            },
                            nt = "\\\\",
                            it = {
                                type: "literal",
                                value: "\\\\",
                                description: '"\\\\\\\\"'
                            },
                            ot = function() {
                                return "\\"
                            },
                            ut = "\\#",
                            at = {
                                type: "literal",
                                value: "\\#",
                                description: '"\\\\#"'
                            },
                            ct = function() {
                                return "\\#"
                            },
                            st = "\\{",
                            lt = {
                                type: "literal",
                                value: "\\{",
                                description: '"\\\\{"'
                            },
                            ft = function() {
                                return "{"
                            },
                            pt = "\\}",
                            ht = {
                                type: "literal",
                                value: "\\}",
                                description: '"\\\\}"'
                            },
                            dt = function() {
                                return "}"
                            },
                            vt = "\\u",
                            yt = {
                                type: "literal",
                                value: "\\u",
                                description: '"\\\\u"'
                            },
                            gt = function(t) {
                                return String.fromCharCode(parseInt(t, 16))
                            },
                            mt = function(t) {
                                return t.join("")
                            },
                            At = 0,
                            bt = 0,
                            Ct = [{
                                line: 1,
                                column: 1,
                                seenCR: !1
                            }],
                            xt = 0,
                            Ft = [],
                            Rt = 0;
                        if ("startRule" in n) {
                            if (!(n.startRule in o)) throw new Error("Can't start parsing from rule \"" + n.startRule + '".');
                            u = o[n.startRule]
                        }

                        function Et() {
                            return kt(bt, At)
                        }

                        function wt(t) {
                            var r, n, i = Ct[t];
                            if (i) return i;
                            for (r = t - 1; !Ct[r];) r--;
                            for (i = {
                                    line: (i = Ct[r]).line,
                                    column: i.column,
                                    seenCR: i.seenCR
                                }; r < t;) "\n" === (n = e.charAt(r)) ? (i.seenCR || i.line++, i.column = 1, i.seenCR = !1) : "\r" === n || "\u2028" === n || "\u2029" === n ? (i.line++, i.column = 1, i.seenCR = !0) : (i.column++, i.seenCR = !1), r++;
                            return Ct[t] = i, i
                        }

                        function kt(t, e) {
                            var r = wt(t),
                                n = wt(e);
                            return {
                                start: {
                                    offset: t,
                                    line: r.line,
                                    column: r.column
                                },
                                end: {
                                    offset: e,
                                    line: n.line,
                                    column: n.column
                                }
                            }
                        }

                        function St(t) {
                            At < xt || (At > xt && (xt = At, Ft = []), Ft.push(t))
                        }

                        function _t(e, r, n, i) {
                            return null !== r && function(t) {
                                var e = 1;
                                for (t.sort((function(t, e) {
                                        return t.description < e.description ? -1 : t.description > e.description ? 1 : 0
                                    })); e < t.length;) t[e - 1] === t[e] ? t.splice(e, 1) : e++
                            }(r), new t(null !== e ? e : function(t, e) {
                                var r, n = new Array(t.length);
                                for (r = 0; r < t.length; r++) n[r] = t[r].description;
                                return "Expected " + (t.length > 1 ? n.slice(0, -1).join(", ") + " or " + n[t.length - 1] : n[0]) + " but " + (e ? '"' + function(t) {
                                    function e(t) {
                                        return t.charCodeAt(0).toString(16).toUpperCase()
                                    }
                                    return t.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\x08/g, "\\b").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\f/g, "\\f").replace(/\r/g, "\\r").replace(/[\x00-\x07\x0B\x0E\x0F]/g, (function(t) {
                                        return "\\x0" + e(t)
                                    })).replace(/[\x10-\x1F\x80-\xFF]/g, (function(t) {
                                        return "\\x" + e(t)
                                    })).replace(/[\u0100-\u0FFF]/g, (function(t) {
                                        return "\\u0" + e(t)
                                    })).replace(/[\u1000-\uFFFF]/g, (function(t) {
                                        return "\\u" + e(t)
                                    }))
                                }(e) + '"' : "end of input") + " found."
                            }(r, n), r, n, i)
                        }

                        function Tt() {
                            return jt()
                        }

                        function jt() {
                            var t, e, r;
                            for (t = At, e = [], r = It(); r !== i;) e.push(r), r = It();
                            return e !== i && (bt = t, e = a(e)), t = e
                        }

                        function It() {
                            var t;
                            return (t = function() {
                                var t, r;
                                t = At, r = function() {
                                    var t, r, n, o, u, a;
                                    t = At, r = [], n = At, (o = Wt()) !== i && (u = Ht()) !== i && (a = Wt()) !== i ? n = o = [o, u, a] : (At = n, n = i);
                                    if (n !== i)
                                        for (; n !== i;) r.push(n), n = At, (o = Wt()) !== i && (u = Ht()) !== i && (a = Wt()) !== i ? n = o = [o, u, a] : (At = n, n = i);
                                    else r = i;
                                    r !== i && (bt = t, r = c(r));
                                    t = r, t === i && (t = At, t = (r = Ut()) !== i ? e.substring(t, At) : r);
                                    return t
                                }(), r !== i && (bt = t, r = s(r));
                                return t = r, t
                            }()) === i && (t = function() {
                                var t, r, n, o, u, a, c;
                                t = At, 123 === e.charCodeAt(At) ? (r = p, At++) : (r = i, 0 === Rt && St(h));
                                r !== i && Wt() !== i ? (n = function() {
                                    var t, r, n;
                                    if (t = Dt(), t === i) {
                                        if (t = At, r = [], l.test(e.charAt(At)) ? (n = e.charAt(At), At++) : (n = i, 0 === Rt && St(f)), n !== i)
                                            for (; n !== i;) r.push(n), l.test(e.charAt(At)) ? (n = e.charAt(At), At++) : (n = i, 0 === Rt && St(f));
                                        else r = i;
                                        t = r !== i ? e.substring(t, At) : r
                                    }
                                    return t
                                }(), n !== i && Wt() !== i ? (o = At, 44 === e.charCodeAt(At) ? (u = d, At++) : (u = i, 0 === Rt && St(v)), u !== i && (a = Wt()) !== i ? (c = function() {
                                    var t;
                                    t = function() {
                                        var t, r, n, o, u, a;
                                        t = At, e.substr(At, 6) === A ? (r = A, At += 6) : (r = i, 0 === Rt && St(b));
                                        r === i && (e.substr(At, 4) === C ? (r = C, At += 4) : (r = i, 0 === Rt && St(x)), r === i && (e.substr(At, 4) === F ? (r = F, At += 4) : (r = i, 0 === Rt && St(R))));
                                        r !== i && Wt() !== i ? (n = At, 44 === e.charCodeAt(At) ? (o = d, At++) : (o = i, 0 === Rt && St(v)), o !== i && (u = Wt()) !== i && (a = Ht()) !== i ? n = o = [o, u, a] : (At = n, n = i), n === i && (n = null), n !== i ? (bt = t, t = r = E(r, n)) : (At = t, t = i)) : (At = t, t = i);
                                        return t
                                    }(), t === i && (t = function() {
                                        var t, r, n, o;
                                        t = At, e.substr(At, 6) === w ? (r = w, At += 6) : (r = i, 0 === Rt && St(k));
                                        r !== i && Wt() !== i ? (44 === e.charCodeAt(At) ? (n = d, At++) : (n = i, 0 === Rt && St(v)), n !== i && Wt() !== i && (o = Bt()) !== i ? (bt = t, t = r = S(o)) : (At = t, t = i)) : (At = t, t = i);
                                        return t
                                    }(), t === i && (t = function() {
                                        var t, r, n, o;
                                        t = At, e.substr(At, 13) === _ ? (r = _, At += 13) : (r = i, 0 === Rt && St(T));
                                        r !== i && Wt() !== i ? (44 === e.charCodeAt(At) ? (n = d, At++) : (n = i, 0 === Rt && St(v)), n !== i && Wt() !== i && (o = Bt()) !== i ? (bt = t, t = r = j(o)) : (At = t, t = i)) : (At = t, t = i);
                                        return t
                                    }(), t === i && (t = function() {
                                        var t, r, n, o, u;
                                        t = At, e.substr(At, 6) === I ? (r = I, At += 6) : (r = i, 0 === Rt && St(P));
                                        if (r !== i)
                                            if (Wt() !== i)
                                                if (44 === e.charCodeAt(At) ? (n = d, At++) : (n = i, 0 === Rt && St(v)), n !== i)
                                                    if (Wt() !== i) {
                                                        if (o = [], (u = Pt()) !== i)
                                                            for (; u !== i;) o.push(u), u = Pt();
                                                        else o = i;
                                                        o !== i ? (bt = t, t = r = B(o)) : (At = t, t = i)
                                                    } else At = t, t = i;
                                        else At = t, t = i;
                                        else At = t, t = i;
                                        else At = t, t = i;
                                        return t
                                    }())));
                                    return t
                                }(), c !== i ? o = u = [u, a, c] : (At = o, o = i)) : (At = o, o = i), o === i && (o = null), o !== i && (u = Wt()) !== i ? (125 === e.charCodeAt(At) ? (a = y, At++) : (a = i, 0 === Rt && St(g)), a !== i ? (bt = t, t = r = m(n, o)) : (At = t, t = i)) : (At = t, t = i)) : (At = t, t = i)) : (At = t, t = i);
                                return t
                            }()), t
                        }

                        function Pt() {
                            var t, r, n, o, u;
                            return t = At, Wt() !== i ? (r = function() {
                                var t, r, n, o;
                                return t = At, r = At, 61 === e.charCodeAt(At) ? (n = U, At++) : (n = i, 0 === Rt && St(W)), n !== i && (o = Dt()) !== i ? r = n = [n, o] : (At = r, r = i), (t = r !== i ? e.substring(t, At) : r) === i && (t = Ht()), t
                            }(), r !== i && Wt() !== i ? (123 === e.charCodeAt(At) ? (n = p, At++) : (n = i, 0 === Rt && St(h)), n !== i && Wt() !== i && (o = jt()) !== i && Wt() !== i ? (125 === e.charCodeAt(At) ? (u = y, At++) : (u = i, 0 === Rt && St(g)), u !== i ? (bt = t, t = q(r, o)) : (At = t, t = i)) : (At = t, t = i)) : (At = t, t = i)) : (At = t, t = i), t
                        }

                        function Bt() {
                            var t, r, n, o;
                            if (t = At, r = function() {
                                    var t, r, n;
                                    return t = At, e.substr(At, 7) === z ? (r = z, At += 7) : (r = i, 0 === Rt && St(D)), r !== i && Wt() !== i && (n = Dt()) !== i ? (bt = t, t = r = G(n)) : (At = t, t = i), t
                                }(), r === i && (r = null), r !== i)
                                if (Wt() !== i) {
                                    if (n = [], (o = Pt()) !== i)
                                        for (; o !== i;) n.push(o), o = Pt();
                                    else n = i;
                                    n !== i ? (bt = t, t = r = H(r, n)) : (At = t, t = i)
                                } else At = t, t = i;
                            else At = t, t = i;
                            return t
                        }

                        function Ut() {
                            var t, r;
                            if (Rt++, t = [], K.test(e.charAt(At)) ? (r = e.charAt(At), At++) : (r = i, 0 === Rt && St(L)), r !== i)
                                for (; r !== i;) t.push(r), K.test(e.charAt(At)) ? (r = e.charAt(At), At++) : (r = i, 0 === Rt && St(L));
                            else t = i;
                            return Rt--, t === i && (r = i, 0 === Rt && St(J)), t
                        }

                        function Wt() {
                            var t, r, n;
                            for (Rt++, t = At, r = [], n = Ut(); n !== i;) r.push(n), n = Ut();
                            return t = r !== i ? e.substring(t, At) : r, Rt--, t === i && (r = i, 0 === Rt && St(M)), t
                        }

                        function qt() {
                            var t;
                            return N.test(e.charAt(At)) ? (t = e.charAt(At), At++) : (t = i, 0 === Rt && St(O)), t
                        }

                        function zt() {
                            var t;
                            return Q.test(e.charAt(At)) ? (t = e.charAt(At), At++) : (t = i, 0 === Rt && St(V)), t
                        }

                        function Dt() {
                            var t, r, n, o, u, a;
                            if (t = At, 48 === e.charCodeAt(At) ? (r = X, At++) : (r = i, 0 === Rt && St(Y)), r === i) {
                                if (r = At, n = At, Z.test(e.charAt(At)) ? (o = e.charAt(At), At++) : (o = i, 0 === Rt && St($)), o !== i) {
                                    for (u = [], a = qt(); a !== i;) u.push(a), a = qt();
                                    u !== i ? n = o = [o, u] : (At = n, n = i)
                                } else At = n, n = i;
                                r = n !== i ? e.substring(r, At) : n
                            }
                            return r !== i && (bt = t, r = tt(r)), t = r
                        }

                        function Gt() {
                            var t, r, n, o, u, a, c, s;
                            return et.test(e.charAt(At)) ? (t = e.charAt(At), At++) : (t = i, 0 === Rt && St(rt)), t === i && (t = At, e.substr(At, 2) === nt ? (r = nt, At += 2) : (r = i, 0 === Rt && St(it)), r !== i && (bt = t, r = ot()), (t = r) === i && (t = At, e.substr(At, 2) === ut ? (r = ut, At += 2) : (r = i, 0 === Rt && St(at)), r !== i && (bt = t, r = ct()), (t = r) === i && (t = At, e.substr(At, 2) === st ? (r = st, At += 2) : (r = i, 0 === Rt && St(lt)), r !== i && (bt = t, r = ft()), (t = r) === i && (t = At, e.substr(At, 2) === pt ? (r = pt, At += 2) : (r = i, 0 === Rt && St(ht)), r !== i && (bt = t, r = dt()), (t = r) === i && (t = At, e.substr(At, 2) === vt ? (r = vt, At += 2) : (r = i, 0 === Rt && St(yt)), r !== i ? (n = At, o = At, (u = zt()) !== i && (a = zt()) !== i && (c = zt()) !== i && (s = zt()) !== i ? o = u = [u, a, c, s] : (At = o, o = i), (n = o !== i ? e.substring(n, At) : o) !== i ? (bt = t, t = r = gt(n)) : (At = t, t = i)) : (At = t, t = i)))))), t
                        }

                        function Ht() {
                            var t, e, r;
                            if (t = At, e = [], (r = Gt()) !== i)
                                for (; r !== i;) e.push(r), r = Gt();
                            else e = i;
                            return e !== i && (bt = t, e = mt(e)), t = e
                        }
                        if ((r = u()) !== i && At === e.length) return r;
                        throw r !== i && At < e.length && St({
                            type: "end",
                            description: "end of input"
                        }), _t(null, Ft, xt < e.length ? e.charAt(xt) : null, xt < e.length ? kt(xt, xt + 1) : kt(xt, xt))
                    }
                }
            }()
        }
    }
]);
//# sourceMappingURL=npm.intl-messageformat-parser.chunk.377c7b.js.map