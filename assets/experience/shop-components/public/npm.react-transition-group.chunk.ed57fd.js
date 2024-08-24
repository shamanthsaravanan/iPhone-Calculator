"use strict";
(self.webpackChunk_nike_shop_components = self.webpackChunk_nike_shop_components || []).push([
    [6877], {
        6603: (t, n, e) => {
            e.d(n, {
                A: () => S
            });
            var s = e(1768),
                o = e(6155),
                i = e(3083),
                r = e(8685),
                a = e(3496),
                p = e(1594),
                u = e.n(p),
                l = e(5206),
                c = e.n(l);
            const d = !1,
                E = u().createContext(null);
            var h = "unmounted",
                f = "exited",
                x = "entering",
                m = "entered",
                v = "exiting",
                C = function(t) {
                    function n(n, e) {
                        var s;
                        s = t.call(this, n, e) || this;
                        var o, i = e && !e.isMounting ? n.enter : n.appear;
                        return s.appearStatus = null, n.in ? i ? (o = f, s.appearStatus = x) : o = m : o = n.unmountOnExit || n.mountOnEnter ? h : f, s.state = {
                            status: o
                        }, s.nextCallback = null, s
                    }(0, i.A)(n, t), n.getDerivedStateFromProps = function(t, n) {
                        return t.in && n.status === h ? {
                            status: f
                        } : null
                    };
                    var e = n.prototype;
                    return e.componentDidMount = function() {
                        this.updateStatus(!0, this.appearStatus)
                    }, e.componentDidUpdate = function(t) {
                        var n = null;
                        if (t !== this.props) {
                            var e = this.state.status;
                            this.props.in ? e !== x && e !== m && (n = x) : e !== x && e !== m || (n = v)
                        }
                        this.updateStatus(!1, n)
                    }, e.componentWillUnmount = function() {
                        this.cancelNextCallback()
                    }, e.getTimeouts = function() {
                        var t, n, e, s = this.props.timeout;
                        return t = n = e = s, null != s && "number" != typeof s && (t = s.exit, n = s.enter, e = void 0 !== s.appear ? s.appear : n), {
                            exit: t,
                            enter: n,
                            appear: e
                        }
                    }, e.updateStatus = function(t, n) {
                        void 0 === t && (t = !1), null !== n ? (this.cancelNextCallback(), n === x ? this.performEnter(t) : this.performExit()) : this.props.unmountOnExit && this.state.status === f && this.setState({
                            status: h
                        })
                    }, e.performEnter = function(t) {
                        var n = this,
                            e = this.props.enter,
                            s = this.context ? this.context.isMounting : t,
                            o = this.props.nodeRef ? [s] : [c().findDOMNode(this), s],
                            i = o[0],
                            r = o[1],
                            a = this.getTimeouts(),
                            p = s ? a.appear : a.enter;
                        !t && !e || d ? this.safeSetState({
                            status: m
                        }, (function() {
                            n.props.onEntered(i)
                        })) : (this.props.onEnter(i, r), this.safeSetState({
                            status: x
                        }, (function() {
                            n.props.onEntering(i, r), n.onTransitionEnd(p, (function() {
                                n.safeSetState({
                                    status: m
                                }, (function() {
                                    n.props.onEntered(i, r)
                                }))
                            }))
                        })))
                    }, e.performExit = function() {
                        var t = this,
                            n = this.props.exit,
                            e = this.getTimeouts(),
                            s = this.props.nodeRef ? void 0 : c().findDOMNode(this);
                        n && !d ? (this.props.onExit(s), this.safeSetState({
                            status: v
                        }, (function() {
                            t.props.onExiting(s), t.onTransitionEnd(e.exit, (function() {
                                t.safeSetState({
                                    status: f
                                }, (function() {
                                    t.props.onExited(s)
                                }))
                            }))
                        }))) : this.safeSetState({
                            status: f
                        }, (function() {
                            t.props.onExited(s)
                        }))
                    }, e.cancelNextCallback = function() {
                        null !== this.nextCallback && (this.nextCallback.cancel(), this.nextCallback = null)
                    }, e.safeSetState = function(t, n) {
                        n = this.setNextCallback(n), this.setState(t, n)
                    }, e.setNextCallback = function(t) {
                        var n = this,
                            e = !0;
                        return this.nextCallback = function(s) {
                            e && (e = !1, n.nextCallback = null, t(s))
                        }, this.nextCallback.cancel = function() {
                            e = !1
                        }, this.nextCallback
                    }, e.onTransitionEnd = function(t, n) {
                        this.setNextCallback(n);
                        var e = this.props.nodeRef ? this.props.nodeRef.current : c().findDOMNode(this),
                            s = null == t && !this.props.addEndListener;
                        if (e && !s) {
                            if (this.props.addEndListener) {
                                var o = this.props.nodeRef ? [this.nextCallback] : [e, this.nextCallback],
                                    i = o[0],
                                    r = o[1];
                                this.props.addEndListener(i, r)
                            }
                            null != t && setTimeout(this.nextCallback, t)
                        } else setTimeout(this.nextCallback, 0)
                    }, e.render = function() {
                        var t = this.state.status;
                        if (t === h) return null;
                        var n = this.props,
                            e = n.children,
                            s = (n.in, n.mountOnEnter, n.unmountOnExit, n.appear, n.enter, n.exit, n.timeout, n.addEndListener, n.onEnter, n.onEntering, n.onEntered, n.onExit, n.onExiting, n.onExited, n.nodeRef, (0, o.A)(n, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]));
                        return u().createElement(E.Provider, {
                            value: null
                        }, "function" == typeof e ? e(t, s) : u().cloneElement(u().Children.only(e), s))
                    }, n
                }(u().Component);

            function g() {}
            C.contextType = E, C.propTypes = {}, C.defaultProps = { in: !1,
                mountOnEnter: !1,
                unmountOnExit: !1,
                appear: !1,
                enter: !0,
                exit: !0,
                onEnter: g,
                onEntering: g,
                onEntered: g,
                onExit: g,
                onExiting: g,
                onExited: g
            }, C.UNMOUNTED = h, C.EXITED = f, C.ENTERING = x, C.ENTERED = m, C.EXITING = v;
            const N = C;
            var b = function(t, n) {
                    return t && n && n.split(" ").forEach((function(n) {
                        return (0, a.A)(t, n)
                    }))
                },
                k = function(t) {
                    function n() {
                        for (var n, e = arguments.length, s = new Array(e), o = 0; o < e; o++) s[o] = arguments[o];
                        return (n = t.call.apply(t, [this].concat(s)) || this).appliedClasses = {
                            appear: {},
                            enter: {},
                            exit: {}
                        }, n.onEnter = function(t, e) {
                            var s = n.resolveArguments(t, e),
                                o = s[0],
                                i = s[1];
                            n.removeClasses(o, "exit"), n.addClass(o, i ? "appear" : "enter", "base"), n.props.onEnter && n.props.onEnter(t, e)
                        }, n.onEntering = function(t, e) {
                            var s = n.resolveArguments(t, e),
                                o = s[0],
                                i = s[1] ? "appear" : "enter";
                            n.addClass(o, i, "active"), n.props.onEntering && n.props.onEntering(t, e)
                        }, n.onEntered = function(t, e) {
                            var s = n.resolveArguments(t, e),
                                o = s[0],
                                i = s[1] ? "appear" : "enter";
                            n.removeClasses(o, i), n.addClass(o, i, "done"), n.props.onEntered && n.props.onEntered(t, e)
                        }, n.onExit = function(t) {
                            var e = n.resolveArguments(t)[0];
                            n.removeClasses(e, "appear"), n.removeClasses(e, "enter"), n.addClass(e, "exit", "base"), n.props.onExit && n.props.onExit(t)
                        }, n.onExiting = function(t) {
                            var e = n.resolveArguments(t)[0];
                            n.addClass(e, "exit", "active"), n.props.onExiting && n.props.onExiting(t)
                        }, n.onExited = function(t) {
                            var e = n.resolveArguments(t)[0];
                            n.removeClasses(e, "exit"), n.addClass(e, "exit", "done"), n.props.onExited && n.props.onExited(t)
                        }, n.resolveArguments = function(t, e) {
                            return n.props.nodeRef ? [n.props.nodeRef.current, t] : [t, e]
                        }, n.getClassNames = function(t) {
                            var e = n.props.classNames,
                                s = "string" == typeof e,
                                o = s ? "" + (s && e ? e + "-" : "") + t : e[t];
                            return {
                                baseClassName: o,
                                activeClassName: s ? o + "-active" : e[t + "Active"],
                                doneClassName: s ? o + "-done" : e[t + "Done"]
                            }
                        }, n
                    }(0, i.A)(n, t);
                    var e = n.prototype;
                    return e.addClass = function(t, n, e) {
                        var s = this.getClassNames(n)[e + "ClassName"],
                            o = this.getClassNames("enter").doneClassName;
                        "appear" === n && "done" === e && o && (s += " " + o), "active" === e && t && t.scrollTop, s && (this.appliedClasses[n][e] = s, function(t, n) {
                            t && n && n.split(" ").forEach((function(n) {
                                return (0, r.A)(t, n)
                            }))
                        }(t, s))
                    }, e.removeClasses = function(t, n) {
                        var e = this.appliedClasses[n],
                            s = e.base,
                            o = e.active,
                            i = e.done;
                        this.appliedClasses[n] = {}, s && b(t, s), o && b(t, o), i && b(t, i)
                    }, e.render = function() {
                        var t = this.props,
                            n = (t.classNames, (0, o.A)(t, ["classNames"]));
                        return u().createElement(N, (0, s.A)({}, n, {
                            onEnter: this.onEnter,
                            onEntered: this.onEntered,
                            onEntering: this.onEntering,
                            onExit: this.onExit,
                            onExiting: this.onExiting,
                            onExited: this.onExited
                        }))
                    }, n
                }(u().Component);
            k.defaultProps = {
                classNames: ""
            }, k.propTypes = {};
            const S = k
        }
    }
]);
//# sourceMappingURL=npm.react-transition-group.chunk.ed57fd.js.map