"use strict";
(self.webpackChunk_nike_shop_components = self.webpackChunk_nike_shop_components || []).push([
    [7611], {
        3797: (e, n, t) => {
            t.r(n), t.d(n, {
                default: () => _
            });
            var o = t(1768),
                i = t(7213),
                a = t(1637),
                r = t(4805),
                s = t(3526),
                l = t(5426),
                c = t(1933),
                p = t(1594),
                d = t.n(p),
                u = t(5206),
                f = t.n(u),
                h = t(6165),
                m = t(4525),
                A = t(6756),
                x = t(9848),
                v = (0, m.A)(A.A, {
                    target: "e2gvfmo0"
                })("@media only screen and (max-width:", x.A.bp("tablet"), "px){transition:visibility 0s ease,bottom 0.5s ease;}& .modal-container{border-radius:16px;padding:24px;text-align:left;transform:translateY(50px);transition:opacity 0.6s ease 0.2s,transform 0.4s ease 0.2s,height 0.4s ease;padding:12px;@media only screen and (max-width:", x.A.bp("desktop") - 1, "px){&.modal-container{max-width:100%;position:fixed;padding:16px 0 0;bottom:0px;border-radius:0;}}}"),
                y = t(1630),
                g = t(1900),
                b = ["onClose", "children", "isOpen"];

            function k(e, n, t) {
                return n = (0, l.A)(n), (0, s.A)(e, C() ? Reflect.construct(n, t || [], (0, l.A)(e).constructor) : n.apply(e, t))
            }

            function C() {
                try {
                    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
                } catch (e) {}
                return (C = function() {
                    return !!e
                })()
            }
            const _ = function(e) {
                function n(e) {
                    var t;
                    return (0, a.A)(this, n), (t = k(this, n, [e])).el = (0, h.A)().createElement("div"), t.dialogRef = d().createRef(), t
                }
                return (0, c.A)(n, e), (0, r.A)(n, [{
                    key: "componentDidMount",
                    value: function() {
                        (0, h.A)().getElementById(y.PK).appendChild(this.el)
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        (0, h.A)().getElementById(y.PK).removeChild(this.el)
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this.props,
                            n = e.onClose,
                            t = e.children,
                            a = e.isOpen,
                            r = (0, i.A)(e, b);
                        return f().createPortal((0, g.Y)(v, (0, o.A)({
                            isOpen: a,
                            onClose: n,
                            ref: this.dialogRef
                        }, r), t), this.el)
                    }
                }])
            }(d().Component)
        }
    }
]);
//# sourceMappingURL=Dialog.chunk.b77920.js.map