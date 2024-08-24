"use strict";
(self.webpackChunk_nike_shop_components = self.webpackChunk_nike_shop_components || []).push([
    [7914], {
        1776: (e, t, n) => {
            function o(e) {
                return o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, o(e)
            }

            function i(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
            }

            function a(e, t) {
                return a = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return e.__proto__ = t, e
                }, a(e, t)
            }

            function r(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, i = s(e);
                    if (t) {
                        var a = s(this).constructor;
                        n = Reflect.construct(i, arguments, a)
                    } else n = i.apply(this, arguments);
                    return function(e, t) {
                        if (t && ("object" === o(t) || "function" == typeof t)) return t;
                        if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                        return c(e)
                    }(this, n)
                }
            }

            function c(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function s(e) {
                return s = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }, s(e)
            }
            var u = n(1594),
                l = n(5206),
                p = n(5861),
                f = n(7853).createFocusTrap,
                v = n(6838).isFocusable,
                h = function(e) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }), Object.defineProperty(e, "prototype", {
                            writable: !1
                        }), t && a(e, t)
                    }(p, e);
                    var t, n, o, s = r(p);

                    function p(e) {
                        var t, n, o, i;
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, p), t = s.call(this, e), n = c(t), i = function(e) {
                            var t, n = null !== (t = this.internalOptions[e]) && void 0 !== t ? t : this.originalOptions[e];
                            if ("function" == typeof n) {
                                for (var o = arguments.length, i = new Array(o > 1 ? o - 1 : 0), a = 1; a < o; a++) i[a - 1] = arguments[a];
                                n = n.apply(void 0, i)
                            }
                            if (!0 === n && (n = void 0), !n) {
                                if (void 0 === n || !1 === n) return n;
                                throw new Error("`".concat(e, "` was specified but was not a node, or did not return a node"))
                            }
                            var r, c = n;
                            if ("string" == typeof n && !(c = null === (r = this.getDocument()) || void 0 === r ? void 0 : r.querySelector(n))) throw new Error("`".concat(e, "` as selector refers to no known node"));
                            return c
                        }, (o = "getNodeForOption") in n ? Object.defineProperty(n, o, {
                            value: i,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : n[o] = i, t.handleDeactivate = t.handleDeactivate.bind(c(t)), t.handlePostDeactivate = t.handlePostDeactivate.bind(c(t)), t.handleClickOutsideDeactivates = t.handleClickOutsideDeactivates.bind(c(t)), t.internalOptions = {
                            returnFocusOnDeactivate: !1,
                            checkCanReturnFocus: null,
                            onDeactivate: t.handleDeactivate,
                            onPostDeactivate: t.handlePostDeactivate,
                            clickOutsideDeactivates: t.handleClickOutsideDeactivates
                        }, t.originalOptions = {
                            returnFocusOnDeactivate: !0,
                            onDeactivate: null,
                            onPostDeactivate: null,
                            checkCanReturnFocus: null,
                            clickOutsideDeactivates: !1
                        };
                        var a = e.focusTrapOptions;
                        for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && ("returnFocusOnDeactivate" !== r && "onDeactivate" !== r && "onPostDeactivate" !== r && "checkCanReturnFocus" !== r && "clickOutsideDeactivates" !== r ? t.internalOptions[r] = a[r] : t.originalOptions[r] = a[r]);
                        return t.outsideClick = null, t.focusTrapElements = e.containerElements || [], t.updatePreviousElement(), t
                    }
                    return t = p, (n = [{
                        key: "getDocument",
                        value: function() {
                            return this.props.focusTrapOptions.document || ("undefined" != typeof document ? document : void 0)
                        }
                    }, {
                        key: "getReturnFocusNode",
                        value: function() {
                            var e = this.getNodeForOption("setReturnFocus", this.previouslyFocusedElement);
                            return e || !1 !== e && this.previouslyFocusedElement
                        }
                    }, {
                        key: "updatePreviousElement",
                        value: function() {
                            var e = this.getDocument();
                            e && (this.previouslyFocusedElement = e.activeElement)
                        }
                    }, {
                        key: "deactivateTrap",
                        value: function() {
                            this.focusTrap && this.focusTrap.active && this.focusTrap.deactivate({
                                returnFocus: !1,
                                checkCanReturnFocus: null,
                                onDeactivate: this.originalOptions.onDeactivate
                            })
                        }
                    }, {
                        key: "handleClickOutsideDeactivates",
                        value: function(e) {
                            var t = "function" == typeof this.originalOptions.clickOutsideDeactivates ? this.originalOptions.clickOutsideDeactivates.call(null, e) : this.originalOptions.clickOutsideDeactivates;
                            return t && (this.outsideClick = {
                                target: e.target,
                                allowDeactivation: t
                            }), t
                        }
                    }, {
                        key: "handleDeactivate",
                        value: function() {
                            this.originalOptions.onDeactivate && this.originalOptions.onDeactivate.call(null), this.deactivateTrap()
                        }
                    }, {
                        key: "handlePostDeactivate",
                        value: function() {
                            var e = this,
                                t = function() {
                                    var t = e.getReturnFocusNode(),
                                        n = !(!e.originalOptions.returnFocusOnDeactivate || null == t || !t.focus || e.outsideClick && (!e.outsideClick.allowDeactivation || v(e.outsideClick.target, e.internalOptions.tabbableOptions))),
                                        o = e.internalOptions.preventScroll,
                                        i = void 0 !== o && o;
                                    n && t.focus({
                                        preventScroll: i
                                    }), e.originalOptions.onPostDeactivate && e.originalOptions.onPostDeactivate.call(null), e.outsideClick = null
                                };
                            this.originalOptions.checkCanReturnFocus ? this.originalOptions.checkCanReturnFocus.call(null, this.getReturnFocusNode()).then(t, t) : t()
                        }
                    }, {
                        key: "setupFocusTrap",
                        value: function() {
                            if (!this.focusTrap) {
                                var e = this.focusTrapElements.map(l.findDOMNode);
                                e.some(Boolean) && (this.focusTrap = this.props._createFocusTrap(e, this.internalOptions), this.props.active && this.focusTrap.activate(), this.props.paused && this.focusTrap.pause())
                            }
                        }
                    }, {
                        key: "componentDidMount",
                        value: function() {
                            this.props.active && this.setupFocusTrap()
                        }
                    }, {
                        key: "componentDidUpdate",
                        value: function(e) {
                            if (this.focusTrap) {
                                e.containerElements !== this.props.containerElements && this.focusTrap.updateContainerElements(this.props.containerElements);
                                var t = !e.active && this.props.active,
                                    n = e.active && !this.props.active,
                                    o = !e.paused && this.props.paused,
                                    i = e.paused && !this.props.paused;
                                if (t && (this.updatePreviousElement(), this.focusTrap.activate()), n) return void this.deactivateTrap();
                                o && this.focusTrap.pause(), i && this.focusTrap.unpause()
                            } else e.containerElements !== this.props.containerElements && (this.focusTrapElements = this.props.containerElements), this.props.active && (this.updatePreviousElement(), this.setupFocusTrap())
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            this.deactivateTrap()
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this,
                                t = this.props.children ? u.Children.only(this.props.children) : void 0;
                            if (t) {
                                if (t.type && t.type === u.Fragment) throw new Error("A focus-trap cannot use a Fragment as its child container. Try replacing it with a <div> element.");
                                return u.cloneElement(t, {
                                    ref: function(n) {
                                        var o = e.props.containerElements;
                                        t && ("function" == typeof t.ref ? t.ref(n) : t.ref && (t.ref.current = n)), e.focusTrapElements = o || [n]
                                    }
                                })
                            }
                            return null
                        }
                    }]) && i(t.prototype, n), o && i(t, o), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), p
                }(u.Component),
                d = "undefined" == typeof Element ? Function : Element;
            h.propTypes = {
                active: p.bool,
                paused: p.bool,
                focusTrapOptions: p.shape({
                    document: p.object,
                    onActivate: p.func,
                    onPostActivate: p.func,
                    checkCanFocusTrap: p.func,
                    onDeactivate: p.func,
                    onPostDeactivate: p.func,
                    checkCanReturnFocus: p.func,
                    initialFocus: p.oneOfType([p.instanceOf(d), p.string, p.bool, p.func]),
                    fallbackFocus: p.oneOfType([p.instanceOf(d), p.string, p.func]),
                    escapeDeactivates: p.oneOfType([p.bool, p.func]),
                    clickOutsideDeactivates: p.oneOfType([p.bool, p.func]),
                    returnFocusOnDeactivate: p.bool,
                    setReturnFocus: p.oneOfType([p.instanceOf(d), p.string, p.bool, p.func]),
                    allowOutsideClick: p.oneOfType([p.bool, p.func]),
                    preventScroll: p.bool,
                    tabbableOptions: p.shape({
                        displayCheck: p.oneOf(["full", "non-zero-area", "none"]),
                        getShadowRoot: p.oneOfType([p.bool, p.func])
                    })
                }),
                containerElements: p.arrayOf(p.instanceOf(d)),
                children: p.oneOfType([p.element, p.instanceOf(d)])
            }, h.defaultProps = {
                active: !0,
                paused: !1,
                focusTrapOptions: {},
                _createFocusTrap: f
            }, e.exports = h
        },
        6903: (e, t, n) => {
            function o(e) {
                return o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, o(e)
            }

            function i(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
            }

            function a(e, t) {
                return a = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return e.__proto__ = t, e
                }, a(e, t)
            }

            function r(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, i = s(e);
                    if (t) {
                        var a = s(this).constructor;
                        n = Reflect.construct(i, arguments, a)
                    } else n = i.apply(this, arguments);
                    return function(e, t) {
                        if (t && ("object" === o(t) || "function" == typeof t)) return t;
                        if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                        return c(e)
                    }(this, n)
                }
            }

            function c(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function s(e) {
                return s = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }, s(e)
            }
            var u = n(1594),
                l = n(5206),
                p = n(5861),
                f = n(7853).createFocusTrap,
                v = n(6838).isFocusable,
                h = function(e) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }), Object.defineProperty(e, "prototype", {
                            writable: !1
                        }), t && a(e, t)
                    }(p, e);
                    var t, n, o, s = r(p);

                    function p(e) {
                        var t, n, o, i;
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, p), t = s.call(this, e), n = c(t), i = function(e) {
                            var t, n = null !== (t = this.internalOptions[e]) && void 0 !== t ? t : this.originalOptions[e];
                            if ("function" == typeof n) {
                                for (var o = arguments.length, i = new Array(o > 1 ? o - 1 : 0), a = 1; a < o; a++) i[a - 1] = arguments[a];
                                n = n.apply(void 0, i)
                            }
                            if (!0 === n && (n = void 0), !n) {
                                if (void 0 === n || !1 === n) return n;
                                throw new Error("`".concat(e, "` was specified but was not a node, or did not return a node"))
                            }
                            var r, c = n;
                            if ("string" == typeof n && !(c = null === (r = this.getDocument()) || void 0 === r ? void 0 : r.querySelector(n))) throw new Error("`".concat(e, "` as selector refers to no known node"));
                            return c
                        }, (o = "getNodeForOption") in n ? Object.defineProperty(n, o, {
                            value: i,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : n[o] = i, t.handleDeactivate = t.handleDeactivate.bind(c(t)), t.handlePostDeactivate = t.handlePostDeactivate.bind(c(t)), t.handleClickOutsideDeactivates = t.handleClickOutsideDeactivates.bind(c(t)), t.internalOptions = {
                            returnFocusOnDeactivate: !1,
                            checkCanReturnFocus: null,
                            onDeactivate: t.handleDeactivate,
                            onPostDeactivate: t.handlePostDeactivate,
                            clickOutsideDeactivates: t.handleClickOutsideDeactivates
                        }, t.originalOptions = {
                            returnFocusOnDeactivate: !0,
                            onDeactivate: null,
                            onPostDeactivate: null,
                            checkCanReturnFocus: null,
                            clickOutsideDeactivates: !1
                        };
                        var a = e.focusTrapOptions;
                        for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && ("returnFocusOnDeactivate" !== r && "onDeactivate" !== r && "onPostDeactivate" !== r && "checkCanReturnFocus" !== r && "clickOutsideDeactivates" !== r ? t.internalOptions[r] = a[r] : t.originalOptions[r] = a[r]);
                        return t.outsideClick = null, t.focusTrapElements = e.containerElements || [], t.updatePreviousElement(), t
                    }
                    return t = p, (n = [{
                        key: "getDocument",
                        value: function() {
                            return this.props.focusTrapOptions.document || ("undefined" != typeof document ? document : void 0)
                        }
                    }, {
                        key: "getReturnFocusNode",
                        value: function() {
                            var e = this.getNodeForOption("setReturnFocus", this.previouslyFocusedElement);
                            return e || !1 !== e && this.previouslyFocusedElement
                        }
                    }, {
                        key: "updatePreviousElement",
                        value: function() {
                            var e = this.getDocument();
                            e && (this.previouslyFocusedElement = e.activeElement)
                        }
                    }, {
                        key: "deactivateTrap",
                        value: function() {
                            this.focusTrap && this.focusTrap.active && this.focusTrap.deactivate({
                                returnFocus: !1,
                                checkCanReturnFocus: null,
                                onDeactivate: this.originalOptions.onDeactivate
                            })
                        }
                    }, {
                        key: "handleClickOutsideDeactivates",
                        value: function(e) {
                            var t = "function" == typeof this.originalOptions.clickOutsideDeactivates ? this.originalOptions.clickOutsideDeactivates.call(null, e) : this.originalOptions.clickOutsideDeactivates;
                            return t && (this.outsideClick = {
                                target: e.target,
                                allowDeactivation: t
                            }), t
                        }
                    }, {
                        key: "handleDeactivate",
                        value: function() {
                            this.originalOptions.onDeactivate && this.originalOptions.onDeactivate.call(null), this.deactivateTrap()
                        }
                    }, {
                        key: "handlePostDeactivate",
                        value: function() {
                            var e = this,
                                t = function() {
                                    var t = e.getReturnFocusNode(),
                                        n = !(!e.originalOptions.returnFocusOnDeactivate || null == t || !t.focus || e.outsideClick && (!e.outsideClick.allowDeactivation || v(e.outsideClick.target, e.internalOptions.tabbableOptions))),
                                        o = e.internalOptions.preventScroll,
                                        i = void 0 !== o && o;
                                    n && t.focus({
                                        preventScroll: i
                                    }), e.originalOptions.onPostDeactivate && e.originalOptions.onPostDeactivate.call(null), e.outsideClick = null
                                };
                            this.originalOptions.checkCanReturnFocus ? this.originalOptions.checkCanReturnFocus.call(null, this.getReturnFocusNode()).then(t, t) : t()
                        }
                    }, {
                        key: "setupFocusTrap",
                        value: function() {
                            if (!this.focusTrap) {
                                var e = this.focusTrapElements.map(l.findDOMNode);
                                e.some(Boolean) && (this.focusTrap = this.props._createFocusTrap(e, this.internalOptions), this.props.active && this.focusTrap.activate(), this.props.paused && this.focusTrap.pause())
                            }
                        }
                    }, {
                        key: "componentDidMount",
                        value: function() {
                            this.props.active && this.setupFocusTrap()
                        }
                    }, {
                        key: "componentDidUpdate",
                        value: function(e) {
                            if (this.focusTrap) {
                                e.containerElements !== this.props.containerElements && this.focusTrap.updateContainerElements(this.props.containerElements);
                                var t = !e.active && this.props.active,
                                    n = e.active && !this.props.active,
                                    o = !e.paused && this.props.paused,
                                    i = e.paused && !this.props.paused;
                                if (t && (this.updatePreviousElement(), this.focusTrap.activate()), n) return void this.deactivateTrap();
                                o && this.focusTrap.pause(), i && this.focusTrap.unpause()
                            } else e.containerElements !== this.props.containerElements && (this.focusTrapElements = this.props.containerElements), this.props.active && (this.updatePreviousElement(), this.setupFocusTrap())
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            this.deactivateTrap()
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this,
                                t = this.props.children ? u.Children.only(this.props.children) : void 0;
                            if (t) {
                                if (t.type && t.type === u.Fragment) throw new Error("A focus-trap cannot use a Fragment as its child container. Try replacing it with a <div> element.");
                                return u.cloneElement(t, {
                                    ref: function(n) {
                                        var o = e.props.containerElements;
                                        t && ("function" == typeof t.ref ? t.ref(n) : t.ref && (t.ref.current = n)), e.focusTrapElements = o || [n]
                                    }
                                })
                            }
                            return null
                        }
                    }]) && i(t.prototype, n), o && i(t, o), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), p
                }(u.Component),
                d = "undefined" == typeof Element ? Function : Element;
            h.propTypes = {
                active: p.bool,
                paused: p.bool,
                focusTrapOptions: p.shape({
                    document: p.object,
                    onActivate: p.func,
                    onPostActivate: p.func,
                    checkCanFocusTrap: p.func,
                    onDeactivate: p.func,
                    onPostDeactivate: p.func,
                    checkCanReturnFocus: p.func,
                    initialFocus: p.oneOfType([p.instanceOf(d), p.string, p.bool, p.func]),
                    fallbackFocus: p.oneOfType([p.instanceOf(d), p.string, p.func]),
                    escapeDeactivates: p.oneOfType([p.bool, p.func]),
                    clickOutsideDeactivates: p.oneOfType([p.bool, p.func]),
                    returnFocusOnDeactivate: p.bool,
                    setReturnFocus: p.oneOfType([p.instanceOf(d), p.string, p.bool, p.func]),
                    allowOutsideClick: p.oneOfType([p.bool, p.func]),
                    preventScroll: p.bool,
                    tabbableOptions: p.shape({
                        displayCheck: p.oneOf(["full", "non-zero-area", "none"]),
                        getShadowRoot: p.oneOfType([p.bool, p.func])
                    })
                }),
                containerElements: p.arrayOf(p.instanceOf(d)),
                children: p.oneOfType([p.element, p.instanceOf(d)])
            }, h.defaultProps = {
                active: !0,
                paused: !1,
                focusTrapOptions: {},
                _createFocusTrap: f
            }, e.exports = h
        }
    }
]);
//# sourceMappingURL=npm.focus-trap-react.chunk.716940.js.map