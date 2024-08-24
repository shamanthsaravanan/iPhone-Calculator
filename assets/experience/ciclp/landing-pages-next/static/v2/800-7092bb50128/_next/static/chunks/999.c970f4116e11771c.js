(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [999], {
        62391: function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var s = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var i = arguments[t];
                    for (var s in i) Object.prototype.hasOwnProperty.call(i, s) && (e[s] = i[s])
                }
                return e
            };
            t.default = p;
            var n = i(37667),
                r = u(n),
                a = i(13980),
                l = u(a),
                o = i(72779),
                d = u(o);

            function u(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function p(e) {
                var t = e.children,
                    i = e.className,
                    n = (e.onActive, e.isPortaled),
                    a = function(e, t) {
                        var i = {};
                        for (var s in e) !(t.indexOf(s) >= 0) && Object.prototype.hasOwnProperty.call(e, s) && (i[s] = e[s]);
                        return i
                    }(e, ["children", "className", "onActive", "isPortaled"]);
                return void 0 !== n && n ? r.default.createElement(r.default.Fragment, null, t) : r.default.createElement("div", s({
                    className: (0, d.default)("swiper-slide", i)
                }, a), t)
            }
            p._isReactDynamicSwiperSlide = !0, p.propTypes = {
                onActive: l.default.func,
                children: l.default.node,
                className: l.default.string,
                isPortaled: l.default.bool
            }
        },
        25019: function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var s = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var i = arguments[t];
                        for (var s in i) Object.prototype.hasOwnProperty.call(i, s) && (e[s] = i[s])
                    }
                    return e
                },
                n = function() {
                    function e(e, t) {
                        for (var i = 0; i < t.length; i++) {
                            var s = t[i];
                            s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s)
                        }
                    }
                    return function(t, i, s) {
                        return i && e(t.prototype, i), s && e(t, s), t
                    }
                }(),
                r = i(37667),
                a = w(r),
                l = i(19481),
                o = i(13980),
                d = w(o),
                u = i(13185),
                p = w(u),
                h = i(72779),
                c = w(h),
                f = i(8979),
                v = w(f),
                g = i(98133),
                m = w(g),
                b = i(62391);
            w(b);
            var y = i(26394);

            function w(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function T(e, t) {
                if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t && ("object" == typeof t || "function" == typeof t) ? t : e
            }
            var S = d.default.oneOfType([d.default.func, d.default.element]),
                E = d.default.oneOfType([d.default.bool, S]),
                x = function(e) {
                    function t() {
                        ! function(e, t) {
                            if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                        }(this, t);
                        for (var e, i, s, n = arguments.length, r = Array(n), a = 0; a < n; a++) r[a] = arguments[a];
                        return i = s = T(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(r))), s._swiper = null, s._nextButton = null, s._prevButton = null, s._pagination = null, s._scrollBar = null, s._container = null, s._slidesCount = 0, s._activeIndex = 0, s.state = {
                            swiper: null,
                            duplicates: []
                        }, T(s, i)
                    }
                    return ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function, not " + typeof t);
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                    }(t, e), n(t, [{
                        key: "_initSwiper",
                        value: function() {
                            var e = this,
                                t = this.props,
                                i = t.swiperOptions,
                                n = t.navigation,
                                r = t.pagination,
                                a = t.scrollBar,
                                l = t.onInitSwiper,
                                o = t.loop,
                                d = {};
                            if (r && (d.pagination = d.pagination || {}, s(d.pagination, {
                                    el: this._pagination
                                })), a && (d.scrollbar = d.scrollbar || {}, s(d.scrollbar, {
                                    el: this._scrollBar
                                })), n && (d.navigation = d.navigation || {}, s(d.navigation, {
                                    prevEl: this._prevButton,
                                    nextEl: this._nextButton
                                })), o) d.loop = !0;
                            else if (d.loop) throw Error('react-dynamic-swiper: Do not use "loop" on the "swiperOptions", use the "loop" prop on the Swiper component directly.');
                            if (this._swiper = new m.default(this._container, s(d, i)), this._swiper.on("slideChange", function() {
                                    e._activeIndex = e._swiper.activeIndex;
                                    var t = e._getSlideChildren()[e._swiper.activeIndex];
                                    t && t.props.onActive && t.props.onActive(e._swiper)
                                }), this._activeIndex) {
                                var u = Math.min(this._activeIndex, this._getSlideChildren().length - 1);
                                this._swiper.slideTo(u, 0, !1)
                            }
                            this._delegateSwiperEvents(), this._createDuplicates(), this.setState({
                                swiper: this._swiper
                            }), l(this._swiper)
                        }
                    }, {
                        key: "_delegateSwiperEvents",
                        value: function() {
                            var e = this;
                            y.events.forEach(function(t) {
                                e._swiper.on(t, (function() {
                                    this.props[t] && "function" == typeof this.props[t] && this.props[t].apply(null, arguments)
                                }).bind(e))
                            })
                        }
                    }, {
                        key: "_getSlideChildren",
                        value: function(e) {
                            return e = e || this.props.children, r.Children.toArray(e).filter(function(e) {
                                return e.type && e.type._isReactDynamicSwiperSlide
                            })
                        }
                    }, {
                        key: "_renderOptional",
                        value: function(e, t, i, s) {
                            if (!e) return null;
                            if (s) {
                                var n = "function" == typeof s ? s(this.state.swiper) : s;
                                return a.default.cloneElement(n, {
                                    ref: i
                                })
                            }
                            return a.default.createElement("div", {
                                className: t,
                                ref: i
                            })
                        }
                    }, {
                        key: "_shouldReInitialize",
                        value: function(e) {
                            return !(0, p.default)(e.swiperOptions, this.props.swiperOptions) || e.navigation !== this.props.navigation || e.nextButton !== this.props.nextButton || e.prevButton !== this.props.prevButton || e.pagination !== this.props.pagination || e.scrollBar !== this.props.scrollBar || e.loop !== this.props.loop
                        }
                    }, {
                        key: "_getNormProps",
                        value: function(e) {
                            return (0, v.default)(e, y.events.concat(["containerClassName", "wrapperClassName", "swiperOptions", "navigation", "prevButton", "nextButton", "pagination", "scrollBar", "onInitSwiper"]))
                        }
                    }, {
                        key: "_reInit",
                        value: function() {
                            this._swiper.destroy(!0, !0), this._initSwiper()
                        }
                    }, {
                        key: "_renderDuplicates",
                        value: function() {
                            var e = this._getSlideChildren();
                            return this.state.duplicates.map(function(t) {
                                return (0, l.createPortal)((0, r.cloneElement)(e[t.index], {
                                    isPortaled: !0
                                }), t.container)
                            })
                        }
                    }, {
                        key: "_createDuplicates",
                        value: function() {
                            if (this.props.loop) {
                                var e = this._swiper.params.slideDuplicateClass,
                                    t = [].slice.call(this._container.querySelectorAll("." + e)).map(function(e) {
                                        return e.innerHTML = "", {
                                            container: e,
                                            index: parseInt(e.getAttribute("data-swiper-slide-index"), 10)
                                        }
                                    });
                                this.setState({
                                    duplicates: t
                                })
                            }
                        }
                    }, {
                        key: "swiper",
                        value: function() {
                            return this._swiper
                        }
                    }, {
                        key: "componentDidMount",
                        value: function() {
                            this._initSwiper(), this._slidesCount = this._getSlideChildren().length
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            this._swiper.destroy()
                        }
                    }, {
                        key: "componentDidUpdate",
                        value: function(e) {
                            var t = this._shouldReInitialize(e),
                                i = this._getSlideChildren().length,
                                s = this._slidesCount;
                            if (this._slidesCount = i, t) return e.loop !== this.props.loop && (this._activeIndex += this.props.loop ? 1 : -1), this._reInit();
                            if (i !== s) {
                                if (this.props.loop) return this._reInit();
                                var n = Math.min(this._swiper.activeIndex, i - 1);
                                this._swiper.update(), this._slidesCount = i, this._swiper.slideTo(n, 0, !1)
                            }
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this,
                                t = this.props,
                                i = t.pagination,
                                s = t.navigation,
                                n = t.prevButton,
                                r = t.nextButton,
                                l = t.scrollBar,
                                o = t.wrapperClassName,
                                d = t.containerClassName,
                                u = function(e, t) {
                                    var i = {};
                                    for (var s in e) !(t.indexOf(s) >= 0) && Object.prototype.hasOwnProperty.call(e, s) && (i[s] = e[s]);
                                    return i
                                }(t, ["pagination", "navigation", "prevButton", "nextButton", "scrollBar", "wrapperClassName", "containerClassName"]);
                            return a.default.createElement("div", this._getNormProps(u), a.default.createElement("div", {
                                className: (0, c.default)("swiper-container", d),
                                ref: function(t) {
                                    e._container = t
                                }
                            }, a.default.createElement("div", {
                                className: (0, c.default)("swiper-wrapper", o)
                            }, this._getSlideChildren()), this._renderOptional(i, "swiper-pagination", function(t) {
                                e._pagination = t
                            }, "boolean" != typeof i && i), this._renderOptional(s, "swiper-button-prev", function(t) {
                                e._prevButton = t
                            }, n), this._renderOptional(s, "swiper-button-next", function(t) {
                                e._nextButton = t
                            }, r), this._renderOptional(l, "swiper-scrollbar", function(t) {
                                e._scrollBar = t
                            }, "boolean" != typeof l && l), this._renderDuplicates()))
                        }
                    }]), t
                }(r.Component);
            x.propTypes = s({
                containerClassName: d.default.string,
                wrapperClassName: d.default.string,
                swiperOptions: d.default.object,
                navigation: d.default.bool,
                prevButton: S,
                nextButton: S,
                pagination: E,
                scrollBar: E,
                loop: d.default.bool,
                onInitSwiper: d.default.func
            }, y.EventPropTypes), x.defaultProps = {
                swiperOptions: {},
                navigation: !0,
                pagination: !0,
                scrollBar: !1,
                loop: !1,
                onInitSwiper: function() {}
            }, t.default = x
        },
        98133: function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                },
                n = ("undefined" == typeof window ? "undefined" : s(window)) === "object" && ("undefined" == typeof document ? "undefined" : s(document)) === "object" && ("undefined" == typeof navigator ? "undefined" : s(navigator)) === "object";
            t.default = function() {
                if (n) {
                    var e = i(88734);
                    return void 0 !== e.default ? e.default : e
                }
                return function() {}
            }()
        },
        1999: function(e, t, i) {
            "use strict";
            t.Mi = t.tq = void 0;
            var s = i(25019),
                n = l(s),
                r = i(62391),
                a = l(r);

            function l(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            t.tq = n.default, t.Mi = a.default
        },
        26394: function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.EventPropTypes = t.events = void 0;
            var s, n, r = (s = i(13980), s && s.__esModule ? s : {
                    default: s
                }),
                a = t.events = ["init", "beforeDestroy", "slideChange", "slideChangeTransitionStart", "slideChangeTransitionEnd", "slideNextTransitionStart", "slideNextTransitionEnd", "slidePrevTransitionStart", "slidePrevTransitionEnd", "transitionStart", "transitionEnd", "touchStart", "touchMove", "touchMoveOpposite", "sliderMove", "touchEnd", "click", "tap", "doubleTap", "imagesReady", "progress", "reachBeginning", "reachEnd", "fromEdge", "setTranslate", "setTransition", "resize"];
            t.EventPropTypes = a.reduce(function(e, t) {
                return e[t] = r.default.func, e
            }, {})
        },
        88734: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return _
                }
            });
            var s = "undefined" == typeof document ? {
                    body: {},
                    addEventListener: function() {},
                    removeEventListener: function() {},
                    activeElement: {
                        blur: function() {},
                        nodeName: ""
                    },
                    querySelector: function() {
                        return null
                    },
                    querySelectorAll: function() {
                        return []
                    },
                    getElementById: function() {
                        return null
                    },
                    createEvent: function() {
                        return {
                            initEvent: function() {}
                        }
                    },
                    createElement: function() {
                        return {
                            children: [],
                            childNodes: [],
                            style: {},
                            setAttribute: function() {},
                            getElementsByTagName: function() {
                                return []
                            }
                        }
                    },
                    location: {
                        hash: ""
                    }
                } : document,
                n = "undefined" == typeof window ? {
                    document: s,
                    navigator: {
                        userAgent: ""
                    },
                    location: {},
                    history: {},
                    CustomEvent: function() {
                        return this
                    },
                    addEventListener: function() {},
                    removeEventListener: function() {},
                    getComputedStyle: function() {
                        return {
                            getPropertyValue: function() {
                                return ""
                            }
                        }
                    },
                    Image: function() {},
                    Date: function() {},
                    screen: {},
                    setTimeout: function() {},
                    clearTimeout: function() {}
                } : window;
            class r {
                constructor(e) {
                    let t = this;
                    for (let i = 0; i < e.length; i += 1) t[i] = e[i];
                    return t.length = e.length, this
                }
            }

            function a(e, t) {
                let i = [],
                    a = 0;
                if (e && !t && e instanceof r) return e;
                if (e) {
                    if ("string" == typeof e) {
                        let l, o, d = e.trim();
                        if (d.indexOf("<") >= 0 && d.indexOf(">") >= 0) {
                            let u = "div";
                            for (0 === d.indexOf("<li") && (u = "ul"), 0 === d.indexOf("<tr") && (u = "tbody"), (0 === d.indexOf("<td") || 0 === d.indexOf("<th")) && (u = "tr"), 0 === d.indexOf("<tbody") && (u = "table"), 0 === d.indexOf("<option") && (u = "select"), (o = s.createElement(u)).innerHTML = d, a = 0; a < o.childNodes.length; a += 1) i.push(o.childNodes[a])
                        } else
                            for (a = 0, l = t || "#" !== e[0] || e.match(/[ .<>:~]/) ? (t || s).querySelectorAll(e.trim()) : [s.getElementById(e.trim().split("#")[1])]; a < l.length; a += 1) l[a] && i.push(l[a])
                    } else if (e.nodeType || e === n || e === s) i.push(e);
                    else if (e.length > 0 && e[0].nodeType)
                        for (a = 0; a < e.length; a += 1) i.push(e[a])
                }
                return new r(i)
            }

            function l(e) {
                let t = [];
                for (let i = 0; i < e.length; i += 1) - 1 === t.indexOf(e[i]) && t.push(e[i]);
                return t
            }
            a.fn = r.prototype, a.Class = r, a.Dom7 = r, "resize scroll".split(" ");
            let o = {
                addClass: function(e) {
                    if (void 0 === e) return this;
                    let t = e.split(" ");
                    for (let i = 0; i < t.length; i += 1)
                        for (let s = 0; s < this.length; s += 1) void 0 !== this[s] && void 0 !== this[s].classList && this[s].classList.add(t[i]);
                    return this
                },
                removeClass: function(e) {
                    let t = e.split(" ");
                    for (let i = 0; i < t.length; i += 1)
                        for (let s = 0; s < this.length; s += 1) void 0 !== this[s] && void 0 !== this[s].classList && this[s].classList.remove(t[i]);
                    return this
                },
                hasClass: function(e) {
                    return !!this[0] && this[0].classList.contains(e)
                },
                toggleClass: function(e) {
                    let t = e.split(" ");
                    for (let i = 0; i < t.length; i += 1)
                        for (let s = 0; s < this.length; s += 1) void 0 !== this[s] && void 0 !== this[s].classList && this[s].classList.toggle(t[i]);
                    return this
                },
                attr: function(e, t) {
                    if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;
                    for (let i = 0; i < this.length; i += 1)
                        if (2 === arguments.length) this[i].setAttribute(e, t);
                        else
                            for (let s in e) this[i][s] = e[s], this[i].setAttribute(s, e[s]);
                    return this
                },
                removeAttr: function(e) {
                    for (let t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
                    return this
                },
                data: function(e, t) {
                    let i;
                    if (void 0 === t) {
                        if (i = this[0]) {
                            if (i.dom7ElementDataStorage && e in i.dom7ElementDataStorage) return i.dom7ElementDataStorage[e];
                            let s = i.getAttribute(`data-${e}`);
                            if (s) return s
                        }
                        return
                    }
                    for (let n = 0; n < this.length; n += 1)(i = this[n]).dom7ElementDataStorage || (i.dom7ElementDataStorage = {}), i.dom7ElementDataStorage[e] = t;
                    return this
                },
                transform: function(e) {
                    for (let t = 0; t < this.length; t += 1) {
                        let i = this[t].style;
                        i.webkitTransform = e, i.transform = e
                    }
                    return this
                },
                transition: function(e) {
                    "string" != typeof e && (e = `${e}ms`);
                    for (let t = 0; t < this.length; t += 1) {
                        let i = this[t].style;
                        i.webkitTransitionDuration = e, i.transitionDuration = e
                    }
                    return this
                },
                on: function(...e) {
                    let [t, i, s, n] = e;

                    function r(e) {
                        let t = e.target;
                        if (!t) return;
                        let n = e.target.dom7EventData || [];
                        if (0 > n.indexOf(e) && n.unshift(e), a(t).is(i)) s.apply(t, n);
                        else {
                            let r = a(t).parents();
                            for (let l = 0; l < r.length; l += 1) a(r[l]).is(i) && s.apply(r[l], n)
                        }
                    }

                    function l(e) {
                        let t = e && e.target && e.target.dom7EventData || [];
                        0 > t.indexOf(e) && t.unshift(e), s.apply(this, t)
                    }
                    "function" == typeof e[1] && ([t, s, n] = e, i = void 0), n || (n = !1);
                    let o = t.split(" "),
                        d;
                    for (let u = 0; u < this.length; u += 1) {
                        let p = this[u];
                        if (i)
                            for (d = 0; d < o.length; d += 1) {
                                let h = o[d];
                                p.dom7LiveListeners || (p.dom7LiveListeners = {}), p.dom7LiveListeners[h] || (p.dom7LiveListeners[h] = []), p.dom7LiveListeners[h].push({
                                    listener: s,
                                    proxyListener: r
                                }), p.addEventListener(h, r, n)
                            } else
                                for (d = 0; d < o.length; d += 1) {
                                    let c = o[d];
                                    p.dom7Listeners || (p.dom7Listeners = {}), p.dom7Listeners[c] || (p.dom7Listeners[c] = []), p.dom7Listeners[c].push({
                                        listener: s,
                                        proxyListener: l
                                    }), p.addEventListener(c, l, n)
                                }
                    }
                    return this
                },
                off: function(...e) {
                    let [t, i, s, n] = e;
                    "function" == typeof e[1] && ([t, s, n] = e, i = void 0), n || (n = !1);
                    let r = t.split(" ");
                    for (let a = 0; a < r.length; a += 1) {
                        let l = r[a];
                        for (let o = 0; o < this.length; o += 1) {
                            let d = this[o],
                                u;
                            if (!i && d.dom7Listeners ? u = d.dom7Listeners[l] : i && d.dom7LiveListeners && (u = d.dom7LiveListeners[l]), u && u.length)
                                for (let p = u.length - 1; p >= 0; p -= 1) {
                                    let h = u[p];
                                    s && h.listener === s ? (d.removeEventListener(l, h.proxyListener, n), u.splice(p, 1)) : s && h.listener && h.listener.dom7proxy && h.listener.dom7proxy === s ? (d.removeEventListener(l, h.proxyListener, n), u.splice(p, 1)) : s || (d.removeEventListener(l, h.proxyListener, n), u.splice(p, 1))
                                }
                        }
                    }
                    return this
                },
                trigger: function(...e) {
                    let t = e[0].split(" "),
                        i = e[1];
                    for (let r = 0; r < t.length; r += 1) {
                        let a = t[r];
                        for (let l = 0; l < this.length; l += 1) {
                            let o = this[l],
                                d;
                            try {
                                d = new n.CustomEvent(a, {
                                    detail: i,
                                    bubbles: !0,
                                    cancelable: !0
                                })
                            } catch (u) {
                                (d = s.createEvent("Event")).initEvent(a, !0, !0), d.detail = i
                            }
                            o.dom7EventData = e.filter((e, t) => t > 0), o.dispatchEvent(d), o.dom7EventData = [], delete o.dom7EventData
                        }
                    }
                    return this
                },
                transitionEnd: function(e) {
                    let t = ["webkitTransitionEnd", "transitionend"],
                        i = this,
                        s;

                    function n(r) {
                        if (r.target === this)
                            for (e.call(this, r), s = 0; s < t.length; s += 1) i.off(t[s], n)
                    }
                    if (e)
                        for (s = 0; s < t.length; s += 1) i.on(t[s], n);
                    return this
                },
                outerWidth: function(e) {
                    if (this.length > 0) {
                        if (e) {
                            let t = this.styles();
                            return this[0].offsetWidth + parseFloat(t.getPropertyValue("margin-right")) + parseFloat(t.getPropertyValue("margin-left"))
                        }
                        return this[0].offsetWidth
                    }
                    return null
                },
                outerHeight: function(e) {
                    if (this.length > 0) {
                        if (e) {
                            let t = this.styles();
                            return this[0].offsetHeight + parseFloat(t.getPropertyValue("margin-top")) + parseFloat(t.getPropertyValue("margin-bottom"))
                        }
                        return this[0].offsetHeight
                    }
                    return null
                },
                offset: function() {
                    if (this.length > 0) {
                        let e = this[0],
                            t = e.getBoundingClientRect(),
                            i = s.body,
                            r = e.clientTop || i.clientTop || 0,
                            a = e.clientLeft || i.clientLeft || 0,
                            l = e === n ? n.scrollY : e.scrollTop,
                            o = e === n ? n.scrollX : e.scrollLeft;
                        return {
                            top: t.top + l - r,
                            left: t.left + o - a
                        }
                    }
                    return null
                },
                css: function(e, t) {
                    let i;
                    if (1 === arguments.length) {
                        if ("string" == typeof e) {
                            if (this[0]) return n.getComputedStyle(this[0], null).getPropertyValue(e)
                        } else {
                            for (i = 0; i < this.length; i += 1)
                                for (let s in e) this[i].style[s] = e[s];
                            return this
                        }
                    }
                    if (2 === arguments.length && "string" == typeof e)
                        for (i = 0; i < this.length; i += 1) this[i].style[e] = t;
                    return this
                },
                each: function(e) {
                    if (!e) return this;
                    for (let t = 0; t < this.length && !1 !== e.call(this[t], t, this[t]); t += 1);
                    return this
                },
                html: function(e) {
                    if (void 0 === e) return this[0] ? this[0].innerHTML : void 0;
                    for (let t = 0; t < this.length; t += 1) this[t].innerHTML = e;
                    return this
                },
                text: function(e) {
                    if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
                    for (let t = 0; t < this.length; t += 1) this[t].textContent = e;
                    return this
                },
                is: function(e) {
                    let t = this[0],
                        i, l;
                    if (!t || void 0 === e) return !1;
                    if ("string" == typeof e) {
                        if (t.matches) return t.matches(e);
                        if (t.webkitMatchesSelector) return t.webkitMatchesSelector(e);
                        if (t.msMatchesSelector) return t.msMatchesSelector(e);
                        for (l = 0, i = a(e); l < i.length; l += 1)
                            if (i[l] === t) return !0;
                        return !1
                    }
                    if (e === s) return t === s;
                    if (e === n) return t === n;
                    if (e.nodeType || e instanceof r) {
                        for (l = 0, i = e.nodeType ? [e] : e; l < i.length; l += 1)
                            if (i[l] === t) return !0
                    }
                    return !1
                },
                index: function() {
                    let e = this[0],
                        t;
                    if (e) {
                        for (t = 0; null !== (e = e.previousSibling);) 1 === e.nodeType && (t += 1);
                        return t
                    }
                },
                eq: function(e) {
                    if (void 0 === e) return this;
                    let t = this.length,
                        i;
                    return e > t - 1 ? new r([]) : e < 0 ? new r((i = t + e) < 0 ? [] : [this[i]]) : new r([this[e]])
                },
                append: function(...e) {
                    let t;
                    for (let i = 0; i < e.length; i += 1) {
                        t = e[i];
                        for (let n = 0; n < this.length; n += 1)
                            if ("string" == typeof t) {
                                let a = s.createElement("div");
                                for (a.innerHTML = t; a.firstChild;) this[n].appendChild(a.firstChild)
                            } else if (t instanceof r)
                            for (let l = 0; l < t.length; l += 1) this[n].appendChild(t[l]);
                        else this[n].appendChild(t)
                    }
                    return this
                },
                prepend: function(e) {
                    let t, i;
                    for (t = 0; t < this.length; t += 1)
                        if ("string" == typeof e) {
                            let n = s.createElement("div");
                            for (n.innerHTML = e, i = n.childNodes.length - 1; i >= 0; i -= 1) this[t].insertBefore(n.childNodes[i], this[t].childNodes[0])
                        } else if (e instanceof r)
                        for (i = 0; i < e.length; i += 1) this[t].insertBefore(e[i], this[t].childNodes[0]);
                    else this[t].insertBefore(e, this[t].childNodes[0]);
                    return this
                },
                next: function(e) {
                    if (this.length > 0) {
                        if (e) return new r(this[0].nextElementSibling && a(this[0].nextElementSibling).is(e) ? [this[0].nextElementSibling] : []);
                        if (this[0].nextElementSibling) return new r([this[0].nextElementSibling])
                    }
                    return new r([])
                },
                nextAll: function(e) {
                    let t = [],
                        i = this[0];
                    if (!i) return new r([]);
                    for (; i.nextElementSibling;) {
                        let s = i.nextElementSibling;
                        e ? a(s).is(e) && t.push(s) : t.push(s), i = s
                    }
                    return new r(t)
                },
                prev: function(e) {
                    if (this.length > 0) {
                        let t = this[0];
                        if (e) return new r(t.previousElementSibling && a(t.previousElementSibling).is(e) ? [t.previousElementSibling] : []);
                        if (t.previousElementSibling) return new r([t.previousElementSibling])
                    }
                    return new r([])
                },
                prevAll: function(e) {
                    let t = [],
                        i = this[0];
                    if (!i) return new r([]);
                    for (; i.previousElementSibling;) {
                        let s = i.previousElementSibling;
                        e ? a(s).is(e) && t.push(s) : t.push(s), i = s
                    }
                    return new r(t)
                },
                parent: function(e) {
                    let t = [];
                    for (let i = 0; i < this.length; i += 1) null !== this[i].parentNode && (e ? a(this[i].parentNode).is(e) && t.push(this[i].parentNode) : t.push(this[i].parentNode));
                    return a(l(t))
                },
                parents: function(e) {
                    let t = [];
                    for (let i = 0; i < this.length; i += 1) {
                        let s = this[i].parentNode;
                        for (; s;) e ? a(s).is(e) && t.push(s) : t.push(s), s = s.parentNode
                    }
                    return a(l(t))
                },
                closest: function(e) {
                    let t = this;
                    return void 0 === e ? new r([]) : (t.is(e) || (t = t.parents(e).eq(0)), t)
                },
                find: function(e) {
                    let t = [];
                    for (let i = 0; i < this.length; i += 1) {
                        let s = this[i].querySelectorAll(e);
                        for (let n = 0; n < s.length; n += 1) t.push(s[n])
                    }
                    return new r(t)
                },
                children: function(e) {
                    let t = [];
                    for (let i = 0; i < this.length; i += 1) {
                        let s = this[i].childNodes;
                        for (let n = 0; n < s.length; n += 1) e ? 1 === s[n].nodeType && a(s[n]).is(e) && t.push(s[n]) : 1 === s[n].nodeType && t.push(s[n])
                    }
                    return new r(l(t))
                },
                remove: function() {
                    for (let e = 0; e < this.length; e += 1) this[e].parentNode && this[e].parentNode.removeChild(this[e]);
                    return this
                },
                add: function(...e) {
                    let t = this,
                        i, s;
                    for (i = 0; i < e.length; i += 1) {
                        let n = a(e[i]);
                        for (s = 0; s < n.length; s += 1) t[t.length] = n[s], t.length += 1
                    }
                    return t
                },
                styles: function() {
                    return this[0] ? n.getComputedStyle(this[0], null) : {}
                }
            };
            Object.keys(o).forEach(e => {
                a.fn[e] = o[e]
            });
            let d = {
                    deleteProps(e) {
                        let t = e;
                        Object.keys(t).forEach(e => {
                            try {
                                t[e] = null
                            } catch (i) {}
                            try {
                                delete t[e]
                            } catch (s) {}
                        })
                    },
                    nextTick: (e, t = 0) => setTimeout(e, t),
                    now: () => Date.now(),
                    getTranslate(e, t = "x") {
                        let i, s, r, a = n.getComputedStyle(e, null);
                        return n.WebKitCSSMatrix ? ((s = a.transform || a.webkitTransform).split(",").length > 6 && (s = s.split(", ").map(e => e.replace(",", ".")).join(", ")), r = new n.WebKitCSSMatrix("none" === s ? "" : s)) : i = (r = a.MozTransform || a.OTransform || a.MsTransform || a.msTransform || a.transform || a.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","), "x" === t && (s = n.WebKitCSSMatrix ? r.m41 : 16 === i.length ? parseFloat(i[12]) : parseFloat(i[4])), "y" === t && (s = n.WebKitCSSMatrix ? r.m42 : 16 === i.length ? parseFloat(i[13]) : parseFloat(i[5])), s || 0
                    },
                    parseUrlQuery(e) {
                        let t = {},
                            i = e || n.location.href,
                            s, r, a, l;
                        if ("string" == typeof i && i.length)
                            for (s = 0, l = (r = (i = i.indexOf("?") > -1 ? i.replace(/\S*\?/, "") : "").split("&").filter(e => "" !== e)).length; s < l; s += 1) t[decodeURIComponent((a = r[s].replace(/#\S+/g, "").split("="))[0])] = void 0 === a[1] ? void 0 : decodeURIComponent(a[1]) || "";
                        return t
                    },
                    isObject: e => "object" == typeof e && null !== e && e.constructor && e.constructor === Object,
                    extend(...e) {
                        let t = Object(e[0]);
                        for (let i = 1; i < e.length; i += 1) {
                            let s = e[i];
                            if (null != s) {
                                let n = Object.keys(Object(s));
                                for (let r = 0, a = n.length; r < a; r += 1) {
                                    let l = n[r],
                                        o = Object.getOwnPropertyDescriptor(s, l);
                                    void 0 !== o && o.enumerable && (d.isObject(t[l]) && d.isObject(s[l]) ? d.extend(t[l], s[l]) : !d.isObject(t[l]) && d.isObject(s[l]) ? (t[l] = {}, d.extend(t[l], s[l])) : t[l] = s[l])
                                }
                            }
                        }
                        return t
                    }
                },
                u = function() {
                    let e = s.createElement("div");
                    return {
                        touch: n.Modernizr && !0 === n.Modernizr.touch || !!(n.navigator.maxTouchPoints > 0 || "ontouchstart" in n || n.DocumentTouch && s instanceof n.DocumentTouch),
                        pointerEvents: !!(n.navigator.pointerEnabled || n.PointerEvent || "maxTouchPoints" in n.navigator && n.navigator.maxTouchPoints > 0),
                        prefixedPointerEvents: !!n.navigator.msPointerEnabled,
                        transition: function() {
                            let t = e.style;
                            return "transition" in t || "webkitTransition" in t || "MozTransition" in t
                        }(),
                        transforms3d: n.Modernizr && !0 === n.Modernizr.csstransforms3d || function() {
                            let t = e.style;
                            return "webkitPerspective" in t || "MozPerspective" in t || "OPerspective" in t || "MsPerspective" in t || "perspective" in t
                        }(),
                        flexbox: function() {
                            let t = e.style,
                                i = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" ");
                            for (let s = 0; s < i.length; s += 1)
                                if (i[s] in t) return !0;
                            return !1
                        }(),
                        observer: "MutationObserver" in n || "WebkitMutationObserver" in n,
                        passiveListener: function() {
                            let e = !1;
                            try {
                                let t = Object.defineProperty({}, "passive", {
                                    get() {
                                        e = !0
                                    }
                                });
                                n.addEventListener("testPassiveListener", null, t)
                            } catch (i) {}
                            return e
                        }(),
                        gestures: "ongesturestart" in n
                    }
                }(),
                p = {
                    isIE: !!n.navigator.userAgent.match(/Trident/g) || !!n.navigator.userAgent.match(/MSIE/g),
                    isEdge: !!n.navigator.userAgent.match(/Edge/g),
                    isSafari: function() {
                        let e = n.navigator.userAgent.toLowerCase();
                        return e.indexOf("safari") >= 0 && 0 > e.indexOf("chrome") && 0 > e.indexOf("android")
                    }(),
                    isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(n.navigator.userAgent)
                };
            class h {
                constructor(e = {}) {
                    let t = this;
                    t.params = e, t.eventsListeners = {}, t.params && t.params.on && Object.keys(t.params.on).forEach(e => {
                        t.on(e, t.params.on[e])
                    })
                }
                on(e, t, i) {
                    let s = this;
                    if ("function" != typeof t) return s;
                    let n = i ? "unshift" : "push";
                    return e.split(" ").forEach(e => {
                        s.eventsListeners[e] || (s.eventsListeners[e] = []), s.eventsListeners[e][n](t)
                    }), s
                }
                once(e, t, i) {
                    let s = this;
                    if ("function" != typeof t) return s;

                    function n(...i) {
                        t.apply(s, i), s.off(e, n), n.f7proxy && delete n.f7proxy
                    }
                    return n.f7proxy = t, s.on(e, n, i)
                }
                off(e, t) {
                    let i = this;
                    return i.eventsListeners && e.split(" ").forEach(e => {
                        void 0 === t ? i.eventsListeners[e] = [] : i.eventsListeners[e] && i.eventsListeners[e].length && i.eventsListeners[e].forEach((s, n) => {
                            (s === t || s.f7proxy && s.f7proxy === t) && i.eventsListeners[e].splice(n, 1)
                        })
                    }), i
                }
                emit(...e) {
                    let t = this;
                    if (!t.eventsListeners) return t;
                    let i, s, n;
                    "string" == typeof e[0] || Array.isArray(e[0]) ? (i = e[0], s = e.slice(1, e.length), n = t) : (i = e[0].events, s = e[0].data, n = e[0].context || t);
                    let r = Array.isArray(i) ? i : i.split(" ");
                    return r.forEach(e => {
                        if (t.eventsListeners && t.eventsListeners[e]) {
                            let i = [];
                            t.eventsListeners[e].forEach(e => {
                                i.push(e)
                            }), i.forEach(e => {
                                e.apply(n, s)
                            })
                        }
                    }), t
                }
                useModulesParams(e) {
                    let t = this;
                    t.modules && Object.keys(t.modules).forEach(i => {
                        let s = t.modules[i];
                        s.params && d.extend(e, s.params)
                    })
                }
                useModules(e = {}) {
                    let t = this;
                    t.modules && Object.keys(t.modules).forEach(i => {
                        let s = t.modules[i],
                            n = e[i] || {};
                        s.instance && Object.keys(s.instance).forEach(e => {
                            let i = s.instance[e];
                            "function" == typeof i ? t[e] = i.bind(t) : t[e] = i
                        }), s.on && t.on && Object.keys(s.on).forEach(e => {
                            t.on(e, s.on[e])
                        }), s.create && s.create.bind(t)(n)
                    })
                }
                static set components(e) {
                    this.use && this.use(e)
                }
                static installModule(e, ...t) {
                    let i = this;
                    i.prototype.modules || (i.prototype.modules = {});
                    let s = e.name || `${Object.keys(i.prototype.modules).length}_${d.now()}`;
                    return i.prototype.modules[s] = e, e.proto && Object.keys(e.proto).forEach(t => {
                        i.prototype[t] = e.proto[t]
                    }), e.static && Object.keys(e.static).forEach(t => {
                        i[t] = e.static[t]
                    }), e.install && e.install.apply(i, t), i
                }
                static use(e, ...t) {
                    let i = this;
                    return Array.isArray(e) ? (e.forEach(e => i.installModule(e)), i) : i.installModule(e, ...t)
                }
            }
            let c = function() {
                let e = n.navigator.userAgent,
                    t = {
                        ios: !1,
                        android: !1,
                        androidChrome: !1,
                        desktop: !1,
                        windows: !1,
                        iphone: !1,
                        ipod: !1,
                        ipad: !1,
                        cordova: n.cordova || n.phonegap,
                        phonegap: n.cordova || n.phonegap
                    },
                    i = e.match(/(Windows Phone);?[\s\/]+([\d.]+)?/),
                    r = e.match(/(Android);?[\s\/]+([\d.]+)?/),
                    a = e.match(/(iPad).*OS\s([\d_]+)/),
                    l = e.match(/(iPod)(.*OS\s([\d_]+))?/),
                    o = !a && e.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
                if (i && (t.os = "windows", t.osVersion = i[2], t.windows = !0), r && !i && (t.os = "android", t.osVersion = r[2], t.android = !0, t.androidChrome = e.toLowerCase().indexOf("chrome") >= 0), (a || o || l) && (t.os = "ios", t.ios = !0), o && !l && (t.osVersion = o[2].replace(/_/g, "."), t.iphone = !0), a && (t.osVersion = a[2].replace(/_/g, "."), t.ipad = !0), l && (t.osVersion = l[3] ? l[3].replace(/_/g, ".") : null, t.iphone = !0), t.ios && t.osVersion && e.indexOf("Version/") >= 0 && "10" === t.osVersion.split(".")[0] && (t.osVersion = e.toLowerCase().split("version/")[1].split(" ")[0]), t.desktop = !(t.os || t.android || t.webView), t.webView = (o || a || l) && e.match(/.*AppleWebKit(?!.*Safari)/i), t.os && "ios" === t.os) {
                    let d = t.osVersion.split("."),
                        u = s.querySelector('meta[name="viewport"]');
                    t.minimalUi = !t.webView && (l || o) && (1 * d[0] == 7 ? 1 * d[1] >= 1 : 1 * d[0] > 7) && u && u.getAttribute("content").indexOf("minimal-ui") >= 0
                }
                return t.pixelRatio = n.devicePixelRatio || 1, t
            }();

            function f(e) {
                let t = this,
                    i = t.touchEventsData,
                    {
                        params: r,
                        touches: l
                    } = t;
                if (t.animating && r.preventInteractionOnTransition) return;
                let o = e;
                if (o.originalEvent && (o = o.originalEvent), i.isTouchEvent = "touchstart" === o.type, !i.isTouchEvent && "which" in o && 3 === o.which || !i.isTouchEvent && "button" in o && o.button > 0 || i.isTouched && i.isMoved) return;
                if (r.noSwiping && a(o.target).closest(r.noSwipingSelector ? r.noSwipingSelector : `.${r.noSwipingClass}`)[0]) {
                    t.allowClick = !0;
                    return
                }
                if (r.swipeHandler && !a(o).closest(r.swipeHandler)[0]) return;
                l.currentX = "touchstart" === o.type ? o.targetTouches[0].pageX : o.pageX, l.currentY = "touchstart" === o.type ? o.targetTouches[0].pageY : o.pageY;
                let u = l.currentX,
                    p = l.currentY,
                    h = r.edgeSwipeDetection || r.iOSEdgeSwipeDetection,
                    c = r.edgeSwipeThreshold || r.iOSEdgeSwipeThreshold;
                if (!h || !(u <= c) && !(u >= n.screen.width - c)) {
                    if (d.extend(i, {
                            isTouched: !0,
                            isMoved: !1,
                            allowTouchCallbacks: !0,
                            isScrolling: void 0,
                            startMoving: void 0
                        }), l.startX = u, l.startY = p, i.touchStartTime = d.now(), t.allowClick = !0, t.updateSize(), t.swipeDirection = void 0, r.threshold > 0 && (i.allowThresholdMove = !1), "touchstart" !== o.type) {
                        let f = !0;
                        a(o.target).is(i.formElements) && (f = !1), s.activeElement && a(s.activeElement).is(i.formElements) && s.activeElement !== o.target && s.activeElement.blur();
                        let v = f && t.allowTouchMove && r.touchStartPreventDefault;
                        (r.touchStartForcePreventDefault || v) && o.preventDefault()
                    }
                    t.emit("touchStart", o)
                }
            }

            function v(e) {
                let t = this,
                    i = t.touchEventsData,
                    {
                        params: n,
                        touches: r,
                        rtlTranslate: l
                    } = t,
                    o = e;
                if (o.originalEvent && (o = o.originalEvent), !i.isTouched) {
                    i.startMoving && i.isScrolling && t.emit("touchMoveOpposite", o);
                    return
                }
                if (i.isTouchEvent && "mousemove" === o.type) return;
                let u = "touchmove" === o.type ? o.targetTouches[0].pageX : o.pageX,
                    p = "touchmove" === o.type ? o.targetTouches[0].pageY : o.pageY;
                if (o.preventedByNestedSwiper) {
                    r.startX = u, r.startY = p;
                    return
                }
                if (!t.allowTouchMove) {
                    t.allowClick = !1, i.isTouched && (d.extend(r, {
                        startX: u,
                        startY: p,
                        currentX: u,
                        currentY: p
                    }), i.touchStartTime = d.now());
                    return
                }
                if (i.isTouchEvent && n.touchReleaseOnEdges && !n.loop) {
                    if (t.isVertical()) {
                        if (p < r.startY && t.translate <= t.maxTranslate() || p > r.startY && t.translate >= t.minTranslate()) {
                            i.isTouched = !1, i.isMoved = !1;
                            return
                        }
                    } else if (u < r.startX && t.translate <= t.maxTranslate() || u > r.startX && t.translate >= t.minTranslate()) return
                }
                if (i.isTouchEvent && s.activeElement && o.target === s.activeElement && a(o.target).is(i.formElements)) {
                    i.isMoved = !0, t.allowClick = !1;
                    return
                }
                if (i.allowTouchCallbacks && t.emit("touchMove", o), o.targetTouches && o.targetTouches.length > 1) return;
                r.currentX = u, r.currentY = p;
                let h = r.currentX - r.startX,
                    c = r.currentY - r.startY;
                if (t.params.threshold && Math.sqrt(h ** 2 + c ** 2) < t.params.threshold) return;
                if (void 0 === i.isScrolling) {
                    let f;
                    t.isHorizontal() && r.currentY === r.startY || t.isVertical() && r.currentX === r.startX ? i.isScrolling = !1 : h * h + c * c >= 25 && (f = 180 * Math.atan2(Math.abs(c), Math.abs(h)) / Math.PI, i.isScrolling = t.isHorizontal() ? f > n.touchAngle : 90 - f > n.touchAngle)
                }
                if (i.isScrolling && t.emit("touchMoveOpposite", o), void 0 === i.startMoving && (r.currentX !== r.startX || r.currentY !== r.startY) && (i.startMoving = !0), i.isScrolling) {
                    i.isTouched = !1;
                    return
                }
                if (!i.startMoving) return;
                t.allowClick = !1, o.preventDefault(), n.touchMoveStopPropagation && !n.nested && o.stopPropagation(), i.isMoved || (n.loop && t.loopFix(), i.startTranslate = t.getTranslate(), t.setTransition(0), t.animating && t.$wrapperEl.trigger("webkitTransitionEnd transitionend"), i.allowMomentumBounce = !1, n.grabCursor && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!0), t.emit("sliderFirstMove", o)), t.emit("sliderMove", o), i.isMoved = !0;
                let v = t.isHorizontal() ? h : c;
                r.diff = v, v *= n.touchRatio, l && (v = -v), t.swipeDirection = v > 0 ? "prev" : "next", i.currentTranslate = v + i.startTranslate;
                let g = !0,
                    m = n.resistanceRatio;
                if (n.touchReleaseOnEdges && (m = 0), v > 0 && i.currentTranslate > t.minTranslate() ? (g = !1, n.resistance && (i.currentTranslate = t.minTranslate() - 1 + (-t.minTranslate() + i.startTranslate + v) ** m)) : v < 0 && i.currentTranslate < t.maxTranslate() && (g = !1, n.resistance && (i.currentTranslate = t.maxTranslate() + 1 - (t.maxTranslate() - i.startTranslate - v) ** m)), g && (o.preventedByNestedSwiper = !0), !t.allowSlideNext && "next" === t.swipeDirection && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate), !t.allowSlidePrev && "prev" === t.swipeDirection && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate), n.threshold > 0) {
                    if (Math.abs(v) > n.threshold || i.allowThresholdMove) {
                        if (!i.allowThresholdMove) {
                            i.allowThresholdMove = !0, r.startX = r.currentX, r.startY = r.currentY, i.currentTranslate = i.startTranslate, r.diff = t.isHorizontal() ? r.currentX - r.startX : r.currentY - r.startY;
                            return
                        }
                    } else {
                        i.currentTranslate = i.startTranslate;
                        return
                    }
                }
                n.followFinger && ((n.freeMode || n.watchSlidesProgress || n.watchSlidesVisibility) && (t.updateActiveIndex(), t.updateSlidesClasses()), n.freeMode && (0 === i.velocities.length && i.velocities.push({
                    position: r[t.isHorizontal() ? "startX" : "startY"],
                    time: i.touchStartTime
                }), i.velocities.push({
                    position: r[t.isHorizontal() ? "currentX" : "currentY"],
                    time: d.now()
                })), t.updateProgress(i.currentTranslate), t.setTranslate(i.currentTranslate))
            }

            function g(e) {
                let t = this,
                    i = t.touchEventsData,
                    {
                        params: s,
                        touches: n,
                        rtlTranslate: r,
                        $wrapperEl: a,
                        slidesGrid: l,
                        snapGrid: o
                    } = t,
                    u = e;
                if (u.originalEvent && (u = u.originalEvent), i.allowTouchCallbacks && t.emit("touchEnd", u), i.allowTouchCallbacks = !1, !i.isTouched) {
                    i.isMoved && s.grabCursor && t.setGrabCursor(!1), i.isMoved = !1, i.startMoving = !1;
                    return
                }
                s.grabCursor && i.isMoved && i.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
                let p = d.now(),
                    h = p - i.touchStartTime;
                if (t.allowClick && (t.updateClickedSlide(u), t.emit("tap", u), h < 300 && p - i.lastClickTime > 300 && (i.clickTimeout && clearTimeout(i.clickTimeout), i.clickTimeout = d.nextTick(() => {
                        t && !t.destroyed && t.emit("click", u)
                    }, 300)), h < 300 && p - i.lastClickTime < 300 && (i.clickTimeout && clearTimeout(i.clickTimeout), t.emit("doubleTap", u))), i.lastClickTime = d.now(), d.nextTick(() => {
                        t.destroyed || (t.allowClick = !0)
                    }), !i.isTouched || !i.isMoved || !t.swipeDirection || 0 === n.diff || i.currentTranslate === i.startTranslate) {
                    i.isTouched = !1, i.isMoved = !1, i.startMoving = !1;
                    return
                }
                i.isTouched = !1, i.isMoved = !1, i.startMoving = !1;
                let c;
                if (c = s.followFinger ? r ? t.translate : -t.translate : -i.currentTranslate, s.freeMode) {
                    if (c < -t.minTranslate()) {
                        t.slideTo(t.activeIndex);
                        return
                    }
                    if (c > -t.maxTranslate()) {
                        t.slides.length < o.length ? t.slideTo(o.length - 1) : t.slideTo(t.slides.length - 1);
                        return
                    }
                    if (s.freeModeMomentum) {
                        if (i.velocities.length > 1) {
                            let f = i.velocities.pop(),
                                v = i.velocities.pop(),
                                g = f.position - v.position,
                                m = f.time - v.time;
                            t.velocity = g / m, t.velocity /= 2, Math.abs(t.velocity) < s.freeModeMinimumVelocity && (t.velocity = 0), (m > 150 || d.now() - f.time > 300) && (t.velocity = 0)
                        } else t.velocity = 0;
                        t.velocity *= s.freeModeMomentumVelocityRatio, i.velocities.length = 0;
                        let b = 1e3 * s.freeModeMomentumRatio,
                            y = t.velocity * b,
                            w = t.translate + y;
                        r && (w = -w);
                        let T = !1,
                            S, E = 20 * Math.abs(t.velocity) * s.freeModeMomentumBounceRatio,
                            x;
                        if (w < t.maxTranslate()) s.freeModeMomentumBounce ? (w + t.maxTranslate() < -E && (w = t.maxTranslate() - E), S = t.maxTranslate(), T = !0, i.allowMomentumBounce = !0) : w = t.maxTranslate(), s.loop && s.centeredSlides && (x = !0);
                        else if (w > t.minTranslate()) s.freeModeMomentumBounce ? (w - t.minTranslate() > E && (w = t.minTranslate() + E), S = t.minTranslate(), T = !0, i.allowMomentumBounce = !0) : w = t.minTranslate(), s.loop && s.centeredSlides && (x = !0);
                        else if (s.freeModeSticky) {
                            let C;
                            for (let M = 0; M < o.length; M += 1)
                                if (o[M] > -w) {
                                    C = M;
                                    break
                                }
                            w = -(w = Math.abs(o[C] - w) < Math.abs(o[C - 1] - w) || "next" === t.swipeDirection ? o[C] : o[C - 1])
                        }
                        if (x && t.once("transitionEnd", () => {
                                t.loopFix()
                            }), 0 !== t.velocity) b = r ? Math.abs((-w - t.translate) / t.velocity) : Math.abs((w - t.translate) / t.velocity);
                        else if (s.freeModeSticky) {
                            t.slideToClosest();
                            return
                        }
                        s.freeModeMomentumBounce && T ? (t.updateProgress(S), t.setTransition(b), t.setTranslate(w), t.transitionStart(!0, t.swipeDirection), t.animating = !0, a.transitionEnd(() => {
                            t && !t.destroyed && i.allowMomentumBounce && (t.emit("momentumBounce"), t.setTransition(s.speed), t.setTranslate(S), a.transitionEnd(() => {
                                t && !t.destroyed && t.transitionEnd()
                            }))
                        })) : t.velocity ? (t.updateProgress(w), t.setTransition(b), t.setTranslate(w), t.transitionStart(!0, t.swipeDirection), t.animating || (t.animating = !0, a.transitionEnd(() => {
                            t && !t.destroyed && t.transitionEnd()
                        }))) : t.updateProgress(w), t.updateActiveIndex(), t.updateSlidesClasses()
                    } else if (s.freeModeSticky) {
                        t.slideToClosest();
                        return
                    }(!s.freeModeMomentum || h >= s.longSwipesMs) && (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses());
                    return
                }
                let k = 0,
                    P = t.slidesSizesGrid[0];
                for (let O = 0; O < l.length; O += s.slidesPerGroup) void 0 !== l[O + s.slidesPerGroup] ? c >= l[O] && c < l[O + s.slidesPerGroup] && (k = O, P = l[O + s.slidesPerGroup] - l[O]) : c >= l[O] && (k = O, P = l[l.length - 1] - l[l.length - 2]);
                let L = (c - l[k]) / P;
                if (h > s.longSwipesMs) {
                    if (!s.longSwipes) {
                        t.slideTo(t.activeIndex);
                        return
                    }
                    "next" === t.swipeDirection && (L >= s.longSwipesRatio ? t.slideTo(k + s.slidesPerGroup) : t.slideTo(k)), "prev" === t.swipeDirection && (L > 1 - s.longSwipesRatio ? t.slideTo(k + s.slidesPerGroup) : t.slideTo(k))
                } else {
                    if (!s.shortSwipes) {
                        t.slideTo(t.activeIndex);
                        return
                    }
                    "next" === t.swipeDirection && t.slideTo(k + s.slidesPerGroup), "prev" === t.swipeDirection && t.slideTo(k)
                }
            }

            function m() {
                let e = this,
                    {
                        params: t,
                        el: i
                    } = e;
                if (i && 0 === i.offsetWidth) return;
                t.breakpoints && e.setBreakpoint();
                let {
                    allowSlideNext: s,
                    allowSlidePrev: n,
                    snapGrid: r
                } = e;
                if (e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), t.freeMode) {
                    let a = Math.min(Math.max(e.translate, e.maxTranslate()), e.minTranslate());
                    e.setTranslate(a), e.updateActiveIndex(), e.updateSlidesClasses(), t.autoHeight && e.updateAutoHeight()
                } else e.updateSlidesClasses(), ("auto" === t.slidesPerView || t.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0);
                e.allowSlidePrev = n, e.allowSlideNext = s, e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow()
            }

            function b(e) {
                !this.allowClick && (this.params.preventClicks && e.preventDefault(), this.params.preventClicksPropagation && this.animating && (e.stopPropagation(), e.stopImmediatePropagation()))
            }
            var y = {
                init: !0,
                direction: "horizontal",
                touchEventsTarget: "container",
                initialSlide: 0,
                speed: 300,
                preventInteractionOnTransition: !1,
                edgeSwipeDetection: !1,
                edgeSwipeThreshold: 20,
                freeMode: !1,
                freeModeMomentum: !0,
                freeModeMomentumRatio: 1,
                freeModeMomentumBounce: !0,
                freeModeMomentumBounceRatio: 1,
                freeModeMomentumVelocityRatio: 1,
                freeModeSticky: !1,
                freeModeMinimumVelocity: .02,
                autoHeight: !1,
                setWrapperSize: !1,
                virtualTranslate: !1,
                effect: "slide",
                breakpoints: void 0,
                breakpointsInverse: !1,
                spaceBetween: 0,
                slidesPerView: 1,
                slidesPerColumn: 1,
                slidesPerColumnFill: "column",
                slidesPerGroup: 1,
                centeredSlides: !1,
                slidesOffsetBefore: 0,
                slidesOffsetAfter: 0,
                normalizeSlideIndex: !0,
                centerInsufficientSlides: !1,
                watchOverflow: !1,
                roundLengths: !1,
                touchRatio: 1,
                touchAngle: 45,
                simulateTouch: !0,
                shortSwipes: !0,
                longSwipes: !0,
                longSwipesRatio: .5,
                longSwipesMs: 300,
                followFinger: !0,
                allowTouchMove: !0,
                threshold: 0,
                touchMoveStopPropagation: !0,
                touchStartPreventDefault: !0,
                touchStartForcePreventDefault: !1,
                touchReleaseOnEdges: !1,
                uniqueNavElements: !0,
                resistance: !0,
                resistanceRatio: .85,
                watchSlidesProgress: !1,
                watchSlidesVisibility: !1,
                grabCursor: !1,
                preventClicks: !0,
                preventClicksPropagation: !0,
                slideToClickedSlide: !1,
                preloadImages: !0,
                updateOnImagesReady: !0,
                loop: !1,
                loopAdditionalSlides: 0,
                loopedSlides: null,
                loopFillGroupWithBlank: !1,
                allowSlidePrev: !0,
                allowSlideNext: !0,
                swipeHandler: null,
                noSwiping: !0,
                noSwipingClass: "swiper-no-swiping",
                noSwipingSelector: null,
                passiveListeners: !0,
                containerModifierClass: "swiper-container-",
                slideClass: "swiper-slide",
                slideBlankClass: "swiper-slide-invisible-blank",
                slideActiveClass: "swiper-slide-active",
                slideDuplicateActiveClass: "swiper-slide-duplicate-active",
                slideVisibleClass: "swiper-slide-visible",
                slideDuplicateClass: "swiper-slide-duplicate",
                slideNextClass: "swiper-slide-next",
                slideDuplicateNextClass: "swiper-slide-duplicate-next",
                slidePrevClass: "swiper-slide-prev",
                slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
                wrapperClass: "swiper-wrapper",
                runCallbacksOnInit: !0
            };
            let w = {
                    update: {
                        updateSize: function() {
                            let e, t, i = this.$el;
                            e = void 0 !== this.params.width ? this.params.width : i[0].clientWidth, t = void 0 !== this.params.height ? this.params.height : i[0].clientHeight, !(0 === e && this.isHorizontal() || 0 === t && this.isVertical()) && (e = e - parseInt(i.css("padding-left"), 10) - parseInt(i.css("padding-right"), 10), t = t - parseInt(i.css("padding-top"), 10) - parseInt(i.css("padding-bottom"), 10), d.extend(this, {
                                width: e,
                                height: t,
                                size: this.isHorizontal() ? e : t
                            }))
                        },
                        updateSlides: function() {
                            let e = this,
                                t = e.params,
                                {
                                    $wrapperEl: i,
                                    size: s,
                                    rtlTranslate: r,
                                    wrongRTL: a
                                } = e,
                                l = e.virtual && t.virtual.enabled,
                                o = l ? e.virtual.slides.length : e.slides.length,
                                p = i.children(`.${e.params.slideClass}`),
                                h = l ? e.virtual.slides.length : p.length,
                                c = [],
                                f = [],
                                v = [],
                                g = t.slidesOffsetBefore;
                            "function" == typeof g && (g = t.slidesOffsetBefore.call(e));
                            let m = t.slidesOffsetAfter;
                            "function" == typeof m && (m = t.slidesOffsetAfter.call(e));
                            let b = e.snapGrid.length,
                                y = e.snapGrid.length,
                                w = t.spaceBetween,
                                T = -g,
                                S = 0,
                                E = 0;
                            if (void 0 === s) return;
                            "string" == typeof w && w.indexOf("%") >= 0 && (w = parseFloat(w.replace("%", "")) / 100 * s), e.virtualSize = -w, r ? p.css({
                                marginLeft: "",
                                marginTop: ""
                            }) : p.css({
                                marginRight: "",
                                marginBottom: ""
                            });
                            let x;
                            t.slidesPerColumn > 1 && (x = Math.floor(h / t.slidesPerColumn) === h / e.params.slidesPerColumn ? h : Math.ceil(h / t.slidesPerColumn) * t.slidesPerColumn, "auto" !== t.slidesPerView && "row" === t.slidesPerColumnFill && (x = Math.max(x, t.slidesPerView * t.slidesPerColumn)));
                            let C, M = t.slidesPerColumn,
                                k = x / M,
                                P = Math.floor(h / t.slidesPerColumn);
                            for (let O = 0; O < h; O += 1) {
                                C = 0;
                                let L = p.eq(O);
                                if (t.slidesPerColumn > 1) {
                                    let _, D, $;
                                    "column" === t.slidesPerColumnFill ? (D = Math.floor(O / M), $ = O - D * M, (D > P || D === P && $ === M - 1) && ($ += 1) >= M && ($ = 0, D += 1), _ = D + $ * x / M, L.css({
                                        "-webkit-box-ordinal-group": _,
                                        "-moz-box-ordinal-group": _,
                                        "-ms-flex-order": _,
                                        "-webkit-order": _,
                                        order: _
                                    })) : ($ = Math.floor(O / k), D = O - $ * k), L.css(`margin-${e.isHorizontal()?"top":"left"}`, 0 !== $ && t.spaceBetween && `${t.spaceBetween}px`).attr("data-swiper-column", D).attr("data-swiper-row", $)
                                }
                                if ("none" !== L.css("display")) {
                                    if ("auto" === t.slidesPerView) {
                                        let z = n.getComputedStyle(L[0], null),
                                            I = L[0].style.transform,
                                            A = L[0].style.webkitTransform;
                                        if (I && (L[0].style.transform = "none"), A && (L[0].style.webkitTransform = "none"), t.roundLengths) C = e.isHorizontal() ? L.outerWidth(!0) : L.outerHeight(!0);
                                        else if (e.isHorizontal()) {
                                            let B = parseFloat(z.getPropertyValue("width")),
                                                N = parseFloat(z.getPropertyValue("padding-left")),
                                                j = parseFloat(z.getPropertyValue("padding-right")),
                                                V = parseFloat(z.getPropertyValue("margin-left")),
                                                H = parseFloat(z.getPropertyValue("margin-right")),
                                                F = z.getPropertyValue("box-sizing");
                                            C = F && "border-box" === F ? B + V + H : B + N + j + V + H
                                        } else {
                                            let R = parseFloat(z.getPropertyValue("height")),
                                                G = parseFloat(z.getPropertyValue("padding-top")),
                                                X = parseFloat(z.getPropertyValue("padding-bottom")),
                                                Y = parseFloat(z.getPropertyValue("margin-top")),
                                                q = parseFloat(z.getPropertyValue("margin-bottom")),
                                                W = z.getPropertyValue("box-sizing");
                                            C = W && "border-box" === W ? R + Y + q : R + G + X + Y + q
                                        }
                                        I && (L[0].style.transform = I), A && (L[0].style.webkitTransform = A), t.roundLengths && (C = Math.floor(C))
                                    } else C = (s - (t.slidesPerView - 1) * w) / t.slidesPerView, t.roundLengths && (C = Math.floor(C)), p[O] && (e.isHorizontal() ? p[O].style.width = `${C}px` : p[O].style.height = `${C}px`);
                                    if (p[O] && (p[O].swiperSlideSize = C), v.push(C), t.centeredSlides) T = T + C / 2 + S / 2 + w, 0 === S && 0 !== O && (T = T - s / 2 - w), 0 === O && (T = T - s / 2 - w), 1 === O && (T += g), .001 > Math.abs(T) && (T = 0), t.roundLengths && (T = Math.floor(T)), E % t.slidesPerGroup == 0 && c.push(T), f.push(T);
                                    else if (t.centeredMiddleSlides) {
                                        if (t.roundLengths && (T = Math.floor(T)), 1 === O) T += g + S - s / 2 + C / 2 + w;
                                        else if (O > 1 && O < p.length - 1) T += C / 2 + S / 2 + w;
                                        else if (O === p.length - 1) {
                                            let K = v.reduce((e, t) => e + t + w, 0);
                                            T = K + g - w - s
                                        }
                                        E % t.slidesPerGroup == 0 && c.push(T), f.push(T)
                                    } else t.roundLengths && (T = Math.floor(T)), E % t.slidesPerGroup == 0 && c.push(T), f.push(T), T = T + C + w;
                                    e.virtualSize += C + w, S = C, E += 1
                                }
                            }
                            e.virtualSize = Math.max(e.virtualSize, s) + m;
                            let U;
                            if (r && a && ("slide" === t.effect || "coverflow" === t.effect) && i.css({
                                    width: `${e.virtualSize+t.spaceBetween}px`
                                }), (!u.flexbox || t.setWrapperSize) && (e.isHorizontal() ? i.css({
                                    width: `${e.virtualSize+t.spaceBetween}px`
                                }) : i.css({
                                    height: `${e.virtualSize+t.spaceBetween}px`
                                })), t.slidesPerColumn > 1 && (e.virtualSize = (C + t.spaceBetween) * x, e.virtualSize = Math.ceil(e.virtualSize / t.slidesPerColumn) - t.spaceBetween, e.isHorizontal() ? i.css({
                                    width: `${e.virtualSize+t.spaceBetween}px`
                                }) : i.css({
                                    height: `${e.virtualSize+t.spaceBetween}px`
                                }), t.centeredSlides)) {
                                U = [];
                                for (let Q = 0; Q < c.length; Q += 1) {
                                    let Z = c[Q];
                                    t.roundLengths && (Z = Math.floor(Z)), c[Q] < e.virtualSize + c[0] && U.push(Z)
                                }
                                c = U
                            }
                            if (!t.centeredSlides) {
                                U = [];
                                for (let J = 0; J < c.length; J += 1) {
                                    let ee = c[J];
                                    t.roundLengths && (ee = Math.floor(ee)), c[J] <= e.virtualSize - s && U.push(ee)
                                }
                                c = U, Math.floor(e.virtualSize - s) - Math.floor(c[c.length - 1]) > 1 && c.push(e.virtualSize - s)
                            }
                            if (0 === c.length && (c = [0]), 0 !== t.spaceBetween && (e.isHorizontal() ? r ? p.css({
                                    marginLeft: `${w}px`
                                }) : p.css({
                                    marginRight: `${w}px`
                                }) : p.css({
                                    marginBottom: `${w}px`
                                })), t.centerInsufficientSlides) {
                                let et = 0;
                                if (v.forEach(e => {
                                        et += e + (t.spaceBetween ? t.spaceBetween : 0)
                                    }), (et -= t.spaceBetween) < s) {
                                    let ei = (s - et) / 2;
                                    c.forEach((e, t) => {
                                        c[t] = e - ei
                                    }), f.forEach((e, t) => {
                                        f[t] = e + ei
                                    })
                                }
                            }
                            d.extend(e, {
                                slides: p,
                                snapGrid: c,
                                slidesGrid: f,
                                slidesSizesGrid: v
                            }), h !== o && e.emit("slidesLengthChange"), c.length !== b && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), f.length !== y && e.emit("slidesGridLengthChange"), (t.watchSlidesProgress || t.watchSlidesVisibility) && e.updateSlidesOffset()
                        },
                        updateAutoHeight: function(e) {
                            let t = [],
                                i = 0,
                                s;
                            if ("number" == typeof e ? this.setTransition(e) : !0 === e && this.setTransition(this.params.speed), "auto" !== this.params.slidesPerView && this.params.slidesPerView > 1)
                                for (s = 0; s < Math.ceil(this.params.slidesPerView); s += 1) {
                                    let n = this.activeIndex + s;
                                    if (n > this.slides.length) break;
                                    t.push(this.slides.eq(n)[0])
                                } else t.push(this.slides.eq(this.activeIndex)[0]);
                            for (s = 0; s < t.length; s += 1)
                                if (void 0 !== t[s]) {
                                    let r = t[s].offsetHeight;
                                    i = r > i ? r : i
                                }
                            i && this.$wrapperEl.css("height", `${i}px`)
                        },
                        updateSlidesOffset: function() {
                            let e = this.slides;
                            for (let t = 0; t < e.length; t += 1) e[t].swiperSlideOffset = this.isHorizontal() ? e[t].offsetLeft : e[t].offsetTop
                        },
                        updateSlidesProgress: function(e = this && this.translate || 0) {
                            let t = this,
                                i = t.params,
                                {
                                    slides: s,
                                    rtlTranslate: n
                                } = t;
                            if (0 === s.length) return;
                            void 0 === s[0].swiperSlideOffset && t.updateSlidesOffset();
                            let r = -e;
                            n && (r = e), s.removeClass(i.slideVisibleClass), t.visibleSlidesIndexes = [], t.visibleSlides = [];
                            for (let l = 0; l < s.length; l += 1) {
                                let o = s[l],
                                    d = (r + (i.centeredSlides ? t.minTranslate() : 0) - o.swiperSlideOffset) / (o.swiperSlideSize + i.spaceBetween);
                                if (i.watchSlidesVisibility) {
                                    let u = -(r - o.swiperSlideOffset),
                                        p = u + t.slidesSizesGrid[l],
                                        h = u >= 0 && u < t.size || p > 0 && p <= t.size || u <= 0 && p >= t.size;
                                    h && (t.visibleSlides.push(o), t.visibleSlidesIndexes.push(l), s.eq(l).addClass(i.slideVisibleClass))
                                }
                                o.progress = n ? -d : d
                            }
                            t.visibleSlides = a(t.visibleSlides)
                        },
                        updateProgress: function(e = this && this.translate || 0) {
                            let t = this.params,
                                i = this.maxTranslate() - this.minTranslate(),
                                {
                                    progress: s,
                                    isBeginning: n,
                                    isEnd: r
                                } = this,
                                a = n,
                                l = r;
                            0 === i ? (s = 0, n = !0, r = !0) : (n = (s = (e - this.minTranslate()) / i) <= 0, r = s >= 1), d.extend(this, {
                                progress: s,
                                isBeginning: n,
                                isEnd: r
                            }), (t.watchSlidesProgress || t.watchSlidesVisibility) && this.updateSlidesProgress(e), n && !a && this.emit("reachBeginning toEdge"), r && !l && this.emit("reachEnd toEdge"), (a && !n || l && !r) && this.emit("fromEdge"), this.emit("progress", s)
                        },
                        updateSlidesClasses: function() {
                            let {
                                slides: e,
                                params: t,
                                $wrapperEl: i,
                                activeIndex: s,
                                realIndex: n
                            } = this, r = this.virtual && t.virtual.enabled;
                            e.removeClass(`${t.slideActiveClass} ${t.slideNextClass} ${t.slidePrevClass} ${t.slideDuplicateActiveClass} ${t.slideDuplicateNextClass} ${t.slideDuplicatePrevClass}`);
                            let a;
                            (a = r ? this.$wrapperEl.find(`.${t.slideClass}[data-swiper-slide-index="${s}"]`) : e.eq(s)).addClass(t.slideActiveClass), t.loop && (a.hasClass(t.slideDuplicateClass) ? i.children(`.${t.slideClass}:not(.${t.slideDuplicateClass})[data-swiper-slide-index="${n}"]`).addClass(t.slideDuplicateActiveClass) : i.children(`.${t.slideClass}.${t.slideDuplicateClass}[data-swiper-slide-index="${n}"]`).addClass(t.slideDuplicateActiveClass));
                            let l = a.nextAll(`.${t.slideClass}`).eq(0).addClass(t.slideNextClass);
                            t.loop && 0 === l.length && (l = e.eq(0)).addClass(t.slideNextClass);
                            let o = a.prevAll(`.${t.slideClass}`).eq(0).addClass(t.slidePrevClass);
                            t.loop && 0 === o.length && (o = e.eq(-1)).addClass(t.slidePrevClass), t.loop && (l.hasClass(t.slideDuplicateClass) ? i.children(`.${t.slideClass}:not(.${t.slideDuplicateClass})[data-swiper-slide-index="${l.attr("data-swiper-slide-index")}"]`).addClass(t.slideDuplicateNextClass) : i.children(`.${t.slideClass}.${t.slideDuplicateClass}[data-swiper-slide-index="${l.attr("data-swiper-slide-index")}"]`).addClass(t.slideDuplicateNextClass), o.hasClass(t.slideDuplicateClass) ? i.children(`.${t.slideClass}:not(.${t.slideDuplicateClass})[data-swiper-slide-index="${o.attr("data-swiper-slide-index")}"]`).addClass(t.slideDuplicatePrevClass) : i.children(`.${t.slideClass}.${t.slideDuplicateClass}[data-swiper-slide-index="${o.attr("data-swiper-slide-index")}"]`).addClass(t.slideDuplicatePrevClass))
                        },
                        updateActiveIndex: function(e) {
                            let t = this,
                                i = t.rtlTranslate ? t.translate : -t.translate,
                                {
                                    slidesGrid: s,
                                    snapGrid: n,
                                    params: r,
                                    activeIndex: a,
                                    realIndex: l,
                                    snapIndex: o
                                } = t,
                                u = e,
                                p;
                            if (void 0 === u) {
                                for (let h = 0; h < s.length; h += 1) void 0 !== s[h + 1] ? i >= s[h] && i < s[h + 1] - (s[h + 1] - s[h]) / 2 ? u = h : i >= s[h] && i < s[h + 1] && (u = h + 1) : i >= s[h] && (u = h);
                                r.normalizeSlideIndex && (u < 0 || void 0 === u) && (u = 0)
                            }
                            if ((p = n.indexOf(i) >= 0 ? n.indexOf(i) : Math.floor(u / r.slidesPerGroup)) >= n.length && (p = n.length - 1), u === a) {
                                p !== o && (t.snapIndex = p, t.emit("snapIndexChange"));
                                return
                            }
                            let c = parseInt(t.slides.eq(u).attr("data-swiper-slide-index") || u, 10);
                            d.extend(t, {
                                snapIndex: p,
                                realIndex: c,
                                previousIndex: a,
                                activeIndex: u
                            }), t.emit("activeIndexChange"), t.emit("snapIndexChange"), l !== c && t.emit("realIndexChange"), t.emit("slideChange")
                        },
                        updateClickedSlide: function(e) {
                            let t = this,
                                i = t.params,
                                s = a(e.target).closest(`.${i.slideClass}`)[0],
                                n = !1;
                            if (s)
                                for (let r = 0; r < t.slides.length; r += 1) t.slides[r] === s && (n = !0);
                            if (s && n) t.clickedSlide = s, t.virtual && t.params.virtual.enabled ? t.clickedIndex = parseInt(a(s).attr("data-swiper-slide-index"), 10) : t.clickedIndex = a(s).index();
                            else {
                                t.clickedSlide = void 0, t.clickedIndex = void 0;
                                return
                            }
                            i.slideToClickedSlide && void 0 !== t.clickedIndex && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide()
                        }
                    },
                    translate: {
                        getTranslate: function(e = this.isHorizontal() ? "x" : "y") {
                            let {
                                params: t,
                                rtlTranslate: i,
                                translate: s,
                                $wrapperEl: n
                            } = this;
                            if (t.virtualTranslate) return i ? -s : s;
                            let r = d.getTranslate(n[0], e);
                            return i && (r = -r), r || 0
                        },
                        setTranslate: function(e, t) {
                            let i = this,
                                {
                                    rtlTranslate: s,
                                    params: n,
                                    $wrapperEl: r,
                                    progress: a
                                } = i,
                                l = 0,
                                o = 0;
                            i.isHorizontal() ? l = s ? -e : e : o = e, n.roundLengths && (l = Math.floor(l), o = Math.floor(o)), n.virtualTranslate || (u.transforms3d ? r.transform(`translate3d(${l}px, ${o}px, 0px)`) : r.transform(`translate(${l}px, ${o}px)`)), i.previousTranslate = i.translate, i.translate = i.isHorizontal() ? l : o;
                            let d, p = i.maxTranslate() - i.minTranslate();
                            (0 === p ? 0 : (e - i.minTranslate()) / p) !== a && i.updateProgress(e), i.emit("setTranslate", i.translate, t)
                        },
                        minTranslate: function() {
                            return -this.snapGrid[0]
                        },
                        maxTranslate: function() {
                            return -this.snapGrid[this.snapGrid.length - 1]
                        }
                    },
                    transition: {
                        setTransition: function(e, t) {
                            this.$wrapperEl.transition(e), this.emit("setTransition", e, t)
                        },
                        transitionStart: function(e = !0, t) {
                            let {
                                activeIndex: i,
                                params: s,
                                previousIndex: n
                            } = this;
                            s.autoHeight && this.updateAutoHeight();
                            let r = t;
                            if (r || (r = i > n ? "next" : i < n ? "prev" : "reset"), this.emit("transitionStart"), e && i !== n) {
                                if ("reset" === r) {
                                    this.emit("slideResetTransitionStart");
                                    return
                                }
                                this.emit("slideChangeTransitionStart"), "next" === r ? this.emit("slideNextTransitionStart") : this.emit("slidePrevTransitionStart")
                            }
                        },
                        transitionEnd: function(e = !0, t) {
                            let i = this,
                                {
                                    activeIndex: s,
                                    previousIndex: n
                                } = i;
                            i.animating = !1, i.setTransition(0);
                            let r = t;
                            if (r || (r = s > n ? "next" : s < n ? "prev" : "reset"), i.emit("transitionEnd"), e && s !== n) {
                                if ("reset" === r) {
                                    i.emit("slideResetTransitionEnd");
                                    return
                                }
                                i.emit("slideChangeTransitionEnd"), "next" === r ? i.emit("slideNextTransitionEnd") : i.emit("slidePrevTransitionEnd")
                            }
                        }
                    },
                    slide: {
                        slideTo: function(e = 0, t = this.params.speed, i = !0, s) {
                            let n = this,
                                r = e;
                            r < 0 && (r = 0);
                            let {
                                params: a,
                                snapGrid: l,
                                slidesGrid: o,
                                previousIndex: d,
                                activeIndex: p,
                                rtlTranslate: h
                            } = n;
                            if (n.animating && a.preventInteractionOnTransition) return !1;
                            let c = Math.floor(r / a.slidesPerGroup);
                            c >= l.length && (c = l.length - 1), (p || a.initialSlide || 0) === (d || 0) && i && n.emit("beforeSlideChangeStart");
                            let f = -l[c];
                            if (n.updateProgress(f), a.normalizeSlideIndex)
                                for (let v = 0; v < o.length; v += 1) - Math.floor(100 * f) >= Math.floor(100 * o[v]) && (r = v);
                            if (n.initialized && r !== p && (!n.allowSlideNext && f < n.translate && f < n.minTranslate() || !n.allowSlidePrev && f > n.translate && f > n.maxTranslate() && (p || 0) !== r)) return !1;
                            let g;
                            return (g = r > p ? "next" : r < p ? "prev" : "reset", h && -f === n.translate || !h && f === n.translate) ? (n.updateActiveIndex(r), a.autoHeight && n.updateAutoHeight(), n.updateSlidesClasses(), "slide" !== a.effect && n.setTranslate(f), "reset" !== g && (n.transitionStart(i, g), n.transitionEnd(i, g)), !1) : (0 !== t && u.transition ? (n.setTransition(t), n.setTranslate(f), n.updateActiveIndex(r), n.updateSlidesClasses(), n.emit("beforeTransitionStart", t, s), n.transitionStart(i, g), n.animating || (n.animating = !0, n.onSlideToWrapperTransitionEnd || (n.onSlideToWrapperTransitionEnd = function(e) {
                                n && !n.destroyed && e.target === this && (n.$wrapperEl[0].removeEventListener("transitionend", n.onSlideToWrapperTransitionEnd), n.$wrapperEl[0].removeEventListener("webkitTransitionEnd", n.onSlideToWrapperTransitionEnd), n.onSlideToWrapperTransitionEnd = null, delete n.onSlideToWrapperTransitionEnd, n.transitionEnd(i, g))
                            }), n.$wrapperEl[0].addEventListener("transitionend", n.onSlideToWrapperTransitionEnd), n.$wrapperEl[0].addEventListener("webkitTransitionEnd", n.onSlideToWrapperTransitionEnd))) : (n.setTransition(0), n.setTranslate(f), n.updateActiveIndex(r), n.updateSlidesClasses(), n.emit("beforeTransitionStart", t, s), n.transitionStart(i, g), n.transitionEnd(i, g)), !0)
                        },
                        slideToLoop: function(e = 0, t = this.params.speed, i = !0, s) {
                            let n = e;
                            return this.params.loop && (n += this.loopedSlides), this.slideTo(n, t, i, s)
                        },
                        slideNext: function(e = this.params.speed, t = !0, i) {
                            let s = this,
                                {
                                    params: n,
                                    animating: r
                                } = s;
                            if (n.loop) {
                                if (r) return !1;
                                s.loopFix(), s._clientLeft = s.$wrapperEl[0].clientLeft
                            }
                            return s.slideTo(s.activeIndex + n.slidesPerGroup, e, t, i)
                        },
                        slidePrev: function(e = this.params.speed, t = !0, i) {
                            let s = this,
                                {
                                    params: n,
                                    animating: r,
                                    snapGrid: a,
                                    slidesGrid: l,
                                    rtlTranslate: o
                                } = s;
                            if (n.loop) {
                                if (r) return !1;
                                s.loopFix(), s._clientLeft = s.$wrapperEl[0].clientLeft
                            }
                            let d = o ? s.translate : -s.translate;

                            function u(e) {
                                return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
                            }
                            let p = u(d),
                                h = a.map(e => u(e));
                            l.map(e => u(e)), a[h.indexOf(p)];
                            let c = a[h.indexOf(p) - 1],
                                f;
                            return void 0 !== c && (f = l.indexOf(c)) < 0 && (f = s.activeIndex - 1), s.slideTo(f, e, t, i)
                        },
                        slideReset: function(e = this.params.speed, t = !0, i) {
                            return this.slideTo(this.activeIndex, e, t, i)
                        },
                        slideToClosest: function(e = this.params.speed, t = !0, i) {
                            let s = this.activeIndex,
                                n = Math.floor(s / this.params.slidesPerGroup);
                            if (n < this.snapGrid.length - 1) {
                                let r = this.rtlTranslate ? this.translate : -this.translate,
                                    a = this.snapGrid[n],
                                    l = this.snapGrid[n + 1];
                                r - a > (l - a) / 2 && (s = this.params.slidesPerGroup)
                            }
                            return this.slideTo(s, e, t, i)
                        },
                        slideToClickedSlide: function() {
                            let e = this,
                                {
                                    params: t,
                                    $wrapperEl: i
                                } = e,
                                s = "auto" === t.slidesPerView ? e.slidesPerViewDynamic() : t.slidesPerView,
                                n = e.clickedIndex,
                                r;
                            if (t.loop) {
                                if (e.animating) return;
                                r = parseInt(a(e.clickedSlide).attr("data-swiper-slide-index"), 10), t.centeredSlides ? n < e.loopedSlides - s / 2 || n > e.slides.length - e.loopedSlides + s / 2 ? (e.loopFix(), n = i.children(`.${t.slideClass}[data-swiper-slide-index="${r}"]:not(.${t.slideDuplicateClass})`).eq(0).index(), d.nextTick(() => {
                                    e.slideTo(n)
                                })) : e.slideTo(n) : n > e.slides.length - s ? (e.loopFix(), n = i.children(`.${t.slideClass}[data-swiper-slide-index="${r}"]:not(.${t.slideDuplicateClass})`).eq(0).index(), d.nextTick(() => {
                                    e.slideTo(n)
                                })) : e.slideTo(n)
                            } else e.slideTo(n)
                        }
                    },
                    loop: {
                        loopCreate: function() {
                            let e = this,
                                {
                                    params: t,
                                    $wrapperEl: i
                                } = e;
                            i.children(`.${t.slideClass}.${t.slideDuplicateClass}`).remove();
                            let n = i.children(`.${t.slideClass}`);
                            if (t.loopFillGroupWithBlank) {
                                let r = t.slidesPerGroup - n.length % t.slidesPerGroup;
                                if (r !== t.slidesPerGroup) {
                                    for (let l = 0; l < r; l += 1) {
                                        let o = a(s.createElement("div")).addClass(`${t.slideClass} ${t.slideBlankClass}`);
                                        i.append(o)
                                    }
                                    n = i.children(`.${t.slideClass}`)
                                }
                            }
                            "auto" !== t.slidesPerView || t.loopedSlides || (t.loopedSlides = n.length), e.loopedSlides = parseInt(t.loopedSlides || t.slidesPerView, 10), e.loopedSlides += t.loopAdditionalSlides, e.loopedSlides > n.length && (e.loopedSlides = n.length);
                            let d = [],
                                u = [];
                            n.each((t, i) => {
                                let s = a(i);
                                t < e.loopedSlides && u.push(i), t < n.length && t >= n.length - e.loopedSlides && d.push(i), s.attr("data-swiper-slide-index", t)
                            });
                            for (let p = 0; p < u.length; p += 1) i.append(a(u[p].cloneNode(!0)).addClass(t.slideDuplicateClass));
                            for (let h = d.length - 1; h >= 0; h -= 1) i.prepend(a(d[h].cloneNode(!0)).addClass(t.slideDuplicateClass))
                        },
                        loopFix: function() {
                            let e = this,
                                {
                                    params: t,
                                    activeIndex: i,
                                    slides: s,
                                    loopedSlides: n,
                                    allowSlidePrev: r,
                                    allowSlideNext: a,
                                    snapGrid: l,
                                    rtlTranslate: o
                                } = e,
                                d;
                            e.allowSlidePrev = !0, e.allowSlideNext = !0;
                            let u = -l[i],
                                p = u - e.getTranslate();
                            if (i < n) {
                                d = s.length - 3 * n + i, d += n;
                                let h = e.slideTo(d, 0, !1, !0);
                                h && 0 !== p && e.setTranslate((o ? -e.translate : e.translate) - p)
                            } else if ("auto" === t.slidesPerView && i >= 2 * n || i >= s.length - n) {
                                d = -s.length + i + n, d += n;
                                let c = e.slideTo(d, 0, !1, !0);
                                c && 0 !== p && e.setTranslate((o ? -e.translate : e.translate) - p)
                            }
                            e.allowSlidePrev = r, e.allowSlideNext = a
                        },
                        loopDestroy: function() {
                            let {
                                $wrapperEl: e,
                                params: t,
                                slides: i
                            } = this;
                            e.children(`.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`).remove(), i.removeAttr("data-swiper-slide-index")
                        }
                    },
                    grabCursor: {
                        setGrabCursor: function(e) {
                            if (u.touch || !this.params.simulateTouch || this.params.watchOverflow && this.isLocked) return;
                            let t = this.el;
                            t.style.cursor = "move", t.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab", t.style.cursor = e ? "-moz-grabbin" : "-moz-grab", t.style.cursor = e ? "grabbing" : "grab"
                        },
                        unsetGrabCursor: function() {
                            let e = this;
                            u.touch || e.params.watchOverflow && e.isLocked || (e.el.style.cursor = "")
                        }
                    },
                    manipulation: {
                        appendSlide: function(e) {
                            let {
                                $wrapperEl: t,
                                params: i
                            } = this;
                            if (i.loop && this.loopDestroy(), "object" == typeof e && "length" in e)
                                for (let s = 0; s < e.length; s += 1) e[s] && t.append(e[s]);
                            else t.append(e);
                            i.loop && this.loopCreate(), i.observer && u.observer || this.update()
                        },
                        prependSlide: function(e) {
                            let {
                                params: t,
                                $wrapperEl: i,
                                activeIndex: s
                            } = this;
                            t.loop && this.loopDestroy();
                            let n = s + 1;
                            if ("object" == typeof e && "length" in e) {
                                for (let r = 0; r < e.length; r += 1) e[r] && i.prepend(e[r]);
                                n = s + e.length
                            } else i.prepend(e);
                            t.loop && this.loopCreate(), t.observer && u.observer || this.update(), this.slideTo(n, 0, !1)
                        },
                        addSlide: function(e, t) {
                            let i = this,
                                {
                                    $wrapperEl: s,
                                    params: n,
                                    activeIndex: r
                                } = i,
                                a = r;
                            n.loop && (a -= i.loopedSlides, i.loopDestroy(), i.slides = s.children(`.${n.slideClass}`));
                            let l = i.slides.length;
                            if (e <= 0) {
                                i.prependSlide(t);
                                return
                            }
                            if (e >= l) {
                                i.appendSlide(t);
                                return
                            }
                            let o = a > e ? a + 1 : a,
                                d = [];
                            for (let p = l - 1; p >= e; p -= 1) {
                                let h = i.slides.eq(p);
                                h.remove(), d.unshift(h)
                            }
                            if ("object" == typeof t && "length" in t) {
                                for (let c = 0; c < t.length; c += 1) t[c] && s.append(t[c]);
                                o = a > e ? a + t.length : a
                            } else s.append(t);
                            for (let f = 0; f < d.length; f += 1) s.append(d[f]);
                            n.loop && i.loopCreate(), n.observer && u.observer || i.update(), n.loop ? i.slideTo(o + i.loopedSlides, 0, !1) : i.slideTo(o, 0, !1)
                        },
                        removeSlide: function(e) {
                            let t = this,
                                {
                                    params: i,
                                    $wrapperEl: s,
                                    activeIndex: n
                                } = t,
                                r = n;
                            i.loop && (r -= t.loopedSlides, t.loopDestroy(), t.slides = s.children(`.${i.slideClass}`));
                            let a = r,
                                l;
                            if ("object" == typeof e && "length" in e) {
                                for (let o = 0; o < e.length; o += 1) l = e[o], t.slides[l] && t.slides.eq(l).remove(), l < a && (a -= 1);
                                a = Math.max(a, 0)
                            } else l = e, t.slides[l] && t.slides.eq(l).remove(), l < a && (a -= 1), a = Math.max(a, 0);
                            i.loop && t.loopCreate(), i.observer && u.observer || t.update(), i.loop ? t.slideTo(a + t.loopedSlides, 0, !1) : t.slideTo(a, 0, !1)
                        },
                        removeAllSlides: function() {
                            let e = [];
                            for (let t = 0; t < this.slides.length; t += 1) e.push(t);
                            this.removeSlide(e)
                        }
                    },
                    events: {
                        attachEvents: function() {
                            let e = this,
                                {
                                    params: t,
                                    touchEvents: i,
                                    el: n,
                                    wrapperEl: r
                                } = e;
                            e.onTouchStart = f.bind(e), e.onTouchMove = v.bind(e), e.onTouchEnd = g.bind(e), e.onClick = b.bind(e);
                            let a = "container" === t.touchEventsTarget ? n : r,
                                l = !!t.nested;
                            if (!u.touch && (u.pointerEvents || u.prefixedPointerEvents)) a.addEventListener(i.start, e.onTouchStart, !1), s.addEventListener(i.move, e.onTouchMove, l), s.addEventListener(i.end, e.onTouchEnd, !1);
                            else {
                                if (u.touch) {
                                    let o = "touchstart" === i.start && !!u.passiveListener && !!t.passiveListeners && {
                                        passive: !0,
                                        capture: !1
                                    };
                                    a.addEventListener(i.start, e.onTouchStart, o), a.addEventListener(i.move, e.onTouchMove, u.passiveListener ? {
                                        passive: !1,
                                        capture: l
                                    } : l), a.addEventListener(i.end, e.onTouchEnd, o)
                                }(t.simulateTouch && !c.ios && !c.android || t.simulateTouch && !u.touch && c.ios) && (a.addEventListener("mousedown", e.onTouchStart, !1), s.addEventListener("mousemove", e.onTouchMove, l), s.addEventListener("mouseup", e.onTouchEnd, !1))
                            }(t.preventClicks || t.preventClicksPropagation) && a.addEventListener("click", e.onClick, !0), e.on(c.ios || c.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", m, !0)
                        },
                        detachEvents: function() {
                            let {
                                params: e,
                                touchEvents: t,
                                el: i,
                                wrapperEl: n
                            } = this, r = "container" === e.touchEventsTarget ? i : n, a = !!e.nested;
                            if (!u.touch && (u.pointerEvents || u.prefixedPointerEvents)) r.removeEventListener(t.start, this.onTouchStart, !1), s.removeEventListener(t.move, this.onTouchMove, a), s.removeEventListener(t.end, this.onTouchEnd, !1);
                            else {
                                if (u.touch) {
                                    let l = "onTouchStart" === t.start && !!u.passiveListener && !!e.passiveListeners && {
                                        passive: !0,
                                        capture: !1
                                    };
                                    r.removeEventListener(t.start, this.onTouchStart, l), r.removeEventListener(t.move, this.onTouchMove, a), r.removeEventListener(t.end, this.onTouchEnd, l)
                                }(e.simulateTouch && !c.ios && !c.android || e.simulateTouch && !u.touch && c.ios) && (r.removeEventListener("mousedown", this.onTouchStart, !1), s.removeEventListener("mousemove", this.onTouchMove, a), s.removeEventListener("mouseup", this.onTouchEnd, !1))
                            }(e.preventClicks || e.preventClicksPropagation) && r.removeEventListener("click", this.onClick, !0), this.off(c.ios || c.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", m)
                        }
                    },
                    breakpoints: {
                        setBreakpoint: function() {
                            let e = this,
                                {
                                    activeIndex: t,
                                    initialized: i,
                                    loopedSlides: s = 0,
                                    params: n
                                } = e,
                                r = n.breakpoints;
                            if (!r || r && 0 === Object.keys(r).length) return;
                            let a = e.getBreakpoint(r);
                            if (a && e.currentBreakpoint !== a) {
                                let l = a in r ? r[a] : void 0;
                                l && ["slidesPerView", "spaceBetween", "slidesPerGroup"].forEach(e => {
                                    let t = l[e];
                                    void 0 !== t && ("slidesPerView" === e && ("AUTO" === t || "auto" === t) ? l[e] = "auto" : "slidesPerView" === e ? l[e] = parseFloat(t) : l[e] = parseInt(t, 10))
                                });
                                let o = l || e.originalParams,
                                    u = o.direction && o.direction !== n.direction,
                                    p = n.loop && (o.slidesPerView !== n.slidesPerView || u);
                                u && i && e.changeDirection(), d.extend(e.params, o), d.extend(e, {
                                    allowTouchMove: e.params.allowTouchMove,
                                    allowSlideNext: e.params.allowSlideNext,
                                    allowSlidePrev: e.params.allowSlidePrev
                                }), e.currentBreakpoint = a, p && i && (e.loopDestroy(), e.loopCreate(), e.updateSlides(), e.slideTo(t - s + e.loopedSlides, 0, !1)), e.emit("breakpoint", o)
                            }
                        },
                        getBreakpoint: function(e) {
                            if (!e) return;
                            let t = !1,
                                i = [];
                            Object.keys(e).forEach(e => {
                                i.push(e)
                            }), i.sort((e, t) => parseInt(e, 10) - parseInt(t, 10));
                            for (let s = 0; s < i.length; s += 1) {
                                let r = i[s];
                                this.params.breakpointsInverse ? r <= n.innerWidth && (t = r) : r >= n.innerWidth && !t && (t = r)
                            }
                            return t || "max"
                        }
                    },
                    checkOverflow: {
                        checkOverflow: function() {
                            let e = this,
                                t = e.isLocked;
                            e.isLocked = 1 === e.snapGrid.length, e.allowSlideNext = !e.isLocked, e.allowSlidePrev = !e.isLocked, t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock"), t && t !== e.isLocked && (e.isEnd = !1, e.navigation.update())
                        }
                    },
                    classes: {
                        addClasses: function() {
                            let {
                                classNames: e,
                                params: t,
                                rtl: i,
                                $el: s
                            } = this, n = [];
                            n.push("initialized"), n.push(t.direction), t.freeMode && n.push("free-mode"), u.flexbox || n.push("no-flexbox"), t.autoHeight && n.push("autoheight"), i && n.push("rtl"), t.slidesPerColumn > 1 && n.push("multirow"), c.android && n.push("android"), c.ios && n.push("ios"), (p.isIE || p.isEdge) && (u.pointerEvents || u.prefixedPointerEvents) && n.push(`wp8-${t.direction}`), n.forEach(i => {
                                e.push(t.containerModifierClass + i)
                            }), s.addClass(e.join(" "))
                        },
                        removeClasses: function() {
                            let {
                                $el: e,
                                classNames: t
                            } = this;
                            e.removeClass(t.join(" "))
                        }
                    },
                    images: {
                        loadImage: function(e, t, i, s, r, a) {
                            let l;

                            function o() {
                                a && a()
                            }
                            e.complete && r ? o() : t ? ((l = new n.Image).onload = o, l.onerror = o, s && (l.sizes = s), i && (l.srcset = i), t && (l.src = t)) : o()
                        },
                        preloadImages: function() {
                            let e = this;

                            function t() {
                                null != e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")))
                            }
                            e.imagesToLoad = e.$el.find("img");
                            for (let i = 0; i < e.imagesToLoad.length; i += 1) {
                                let s = e.imagesToLoad[i];
                                e.loadImage(s, s.currentSrc || s.getAttribute("src"), s.srcset || s.getAttribute("srcset"), s.sizes || s.getAttribute("sizes"), !0, t)
                            }
                        }
                    }
                },
                T = {};
            class S extends h {
                constructor(...e) {
                    let t, i;
                    1 === e.length && e[0].constructor && e[0].constructor === Object ? i = e[0] : [t, i] = e, i || (i = {}), i = d.extend({}, i), t && !i.el && (i.el = t), super(i), Object.keys(w).forEach(e => {
                        Object.keys(w[e]).forEach(t => {
                            S.prototype[t] || (S.prototype[t] = w[e][t])
                        })
                    });
                    let s = this;
                    void 0 === s.modules && (s.modules = {}), Object.keys(s.modules).forEach(e => {
                        let t = s.modules[e];
                        if (t.params) {
                            let n = Object.keys(t.params)[0],
                                r = t.params[n];
                            if ("object" != typeof r || null === r || !(n in i && "enabled" in r)) return;
                            !0 === i[n] && (i[n] = {
                                enabled: !0
                            }), "object" != typeof i[n] || "enabled" in i[n] || (i[n].enabled = !0), i[n] || (i[n] = {
                                enabled: !1
                            })
                        }
                    });
                    let n = d.extend({}, y);
                    s.useModulesParams(n), s.params = d.extend({}, n, T, i), s.originalParams = d.extend({}, s.params), s.passedParams = d.extend({}, i), s.$ = a;
                    let r = a(s.params.el);
                    if (!(t = r[0])) return;
                    if (r.length > 1) {
                        let l = [];
                        return r.each((e, t) => {
                            let s = d.extend({}, i, {
                                el: t
                            });
                            l.push(new S(s))
                        }), l
                    }
                    t.swiper = s, r.data("swiper", s);
                    let o = r.children(`.${s.params.wrapperClass}`);
                    return d.extend(s, {
                        $el: r,
                        el: t,
                        $wrapperEl: o,
                        wrapperEl: o[0],
                        classNames: [],
                        slides: a(),
                        slidesGrid: [],
                        snapGrid: [],
                        slidesSizesGrid: [],
                        isHorizontal: () => "horizontal" === s.params.direction,
                        isVertical: () => "vertical" === s.params.direction,
                        rtl: "rtl" === t.dir.toLowerCase() || "rtl" === r.css("direction"),
                        rtlTranslate: "horizontal" === s.params.direction && ("rtl" === t.dir.toLowerCase() || "rtl" === r.css("direction")),
                        wrongRTL: "-webkit-box" === o.css("display"),
                        activeIndex: 0,
                        realIndex: 0,
                        isBeginning: !0,
                        isEnd: !1,
                        translate: 0,
                        previousTranslate: 0,
                        progress: 0,
                        velocity: 0,
                        animating: !1,
                        allowSlideNext: s.params.allowSlideNext,
                        allowSlidePrev: s.params.allowSlidePrev,
                        touchEvents: function() {
                            let e = ["touchstart", "touchmove", "touchend"],
                                t = ["mousedown", "mousemove", "mouseup"];
                            return u.pointerEvents ? t = ["pointerdown", "pointermove", "pointerup"] : u.prefixedPointerEvents && (t = ["MSPointerDown", "MSPointerMove", "MSPointerUp"]), s.touchEventsTouch = {
                                start: e[0],
                                move: e[1],
                                end: e[2]
                            }, s.touchEventsDesktop = {
                                start: t[0],
                                move: t[1],
                                end: t[2]
                            }, u.touch || !s.params.simulateTouch ? s.touchEventsTouch : s.touchEventsDesktop
                        }(),
                        touchEventsData: {
                            isTouched: void 0,
                            isMoved: void 0,
                            allowTouchCallbacks: void 0,
                            touchStartTime: void 0,
                            isScrolling: void 0,
                            currentTranslate: void 0,
                            startTranslate: void 0,
                            allowThresholdMove: void 0,
                            formElements: "input, select, option, textarea, button, video",
                            lastClickTime: d.now(),
                            clickTimeout: void 0,
                            velocities: [],
                            allowMomentumBounce: void 0,
                            isTouchEvent: void 0,
                            startMoving: void 0
                        },
                        allowClick: !0,
                        allowTouchMove: s.params.allowTouchMove,
                        touches: {
                            startX: 0,
                            startY: 0,
                            currentX: 0,
                            currentY: 0,
                            diff: 0
                        },
                        imagesToLoad: [],
                        imagesLoaded: 0
                    }), s.useModules(), s.params.init && s.init(), s
                }
                slidesPerViewDynamic() {
                    let {
                        params: e,
                        slides: t,
                        slidesGrid: i,
                        size: s,
                        activeIndex: n
                    } = this, r = 1;
                    if (e.centeredSlides) {
                        let a = t[n].swiperSlideSize,
                            l;
                        for (let o = n + 1; o < t.length; o += 1) t[o] && !l && (a += t[o].swiperSlideSize, r += 1, a > s && (l = !0));
                        for (let d = n - 1; d >= 0; d -= 1) t[d] && !l && (a += t[d].swiperSlideSize, r += 1, a > s && (l = !0))
                    } else
                        for (let u = n + 1; u < t.length; u += 1) i[u] - i[n] < s && (r += 1);
                    return r
                }
                update() {
                    let e = this;
                    if (!e || e.destroyed) return;
                    let {
                        snapGrid: t,
                        params: i
                    } = e;

                    function s() {
                        let t = e.rtlTranslate ? -1 * e.translate : e.translate,
                            i = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
                        e.setTranslate(i), e.updateActiveIndex(), e.updateSlidesClasses()
                    }
                    i.breakpoints && e.setBreakpoint(), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses();
                    let n;
                    e.params.freeMode ? (s(), e.params.autoHeight && e.updateAutoHeight()) : (("auto" === e.params.slidesPerView || e.params.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0)) || s(), i.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update")
                }
                changeDirection(e, t = !0) {
                    let i = this,
                        s = i.params.direction;
                    return e || (e = "horizontal" === s ? "vertical" : "horizontal"), e === s || "horizontal" !== e && "vertical" !== e || ("vertical" === s && (i.$el.removeClass(`${i.params.containerModifierClass}vertical wp8-vertical`).addClass(`${i.params.containerModifierClass}${e}`), (p.isIE || p.isEdge) && (u.pointerEvents || u.prefixedPointerEvents) && i.$el.addClass(`${i.params.containerModifierClass}wp8-${e}`)), "horizontal" === s && (i.$el.removeClass(`${i.params.containerModifierClass}horizontal wp8-horizontal`).addClass(`${i.params.containerModifierClass}${e}`), (p.isIE || p.isEdge) && (u.pointerEvents || u.prefixedPointerEvents) && i.$el.addClass(`${i.params.containerModifierClass}wp8-${e}`)), i.params.direction = e, i.slides.each((t, i) => {
                        "vertical" === e ? i.style.width = "" : i.style.height = ""
                    }), i.emit("changeDirection"), t && i.update()), i
                }
                init() {
                    let e = this;
                    e.initialized || (e.emit("beforeInit"), e.params.breakpoints && e.setBreakpoint(), e.addClasses(), e.params.loop && e.loopCreate(), e.updateSize(), e.updateSlides(), e.params.watchOverflow && e.checkOverflow(), e.params.grabCursor && e.setGrabCursor(), e.params.preloadImages && e.preloadImages(), e.params.loop ? e.slideTo(e.params.initialSlide + e.loopedSlides, 0, e.params.runCallbacksOnInit) : e.slideTo(e.params.initialSlide, 0, e.params.runCallbacksOnInit), e.attachEvents(), e.initialized = !0, e.emit("init"))
                }
                destroy(e = !0, t = !0) {
                    let i = this,
                        {
                            params: s,
                            $el: n,
                            $wrapperEl: r,
                            slides: a
                        } = i;
                    return void 0 === i.params || i.destroyed || (i.emit("beforeDestroy"), i.initialized = !1, i.detachEvents(), s.loop && i.loopDestroy(), t && (i.removeClasses(), n.removeAttr("style"), r.removeAttr("style"), a && a.length && a.removeClass([s.slideVisibleClass, s.slideActiveClass, s.slideNextClass, s.slidePrevClass, ].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index").removeAttr("data-swiper-column").removeAttr("data-swiper-row")), i.emit("destroy"), Object.keys(i.eventsListeners).forEach(e => {
                        i.off(e)
                    }), !1 !== e && (i.$el[0].swiper = null, i.$el.data("swiper", null), d.deleteProps(i)), i.destroyed = !0), null
                }
                static extendDefaults(e) {
                    d.extend(T, e)
                }
                static get extendedDefaults() {
                    return T
                }
                static get defaults() {
                    return y
                }
                static get Class() {
                    return h
                }
                static get $() {
                    return a
                }
            }
            let E = {
                    func: n.MutationObserver || n.WebkitMutationObserver,
                    attach(e, t = {}) {
                        let i = this,
                            s = E.func,
                            r = new s(e => {
                                if (1 === e.length) {
                                    i.emit("observerUpdate", e[0]);
                                    return
                                }
                                let t = function() {
                                    i.emit("observerUpdate", e[0])
                                };
                                n.requestAnimationFrame ? n.requestAnimationFrame(t) : n.setTimeout(t, 0)
                            });
                        r.observe(e, {
                            attributes: void 0 === t.attributes || t.attributes,
                            childList: void 0 === t.childList || t.childList,
                            characterData: void 0 === t.characterData || t.characterData
                        }), i.observer.observers.push(r)
                    },
                    init() {
                        if (u.observer && this.params.observer) {
                            if (this.params.observeParents) {
                                let e = this.$el.parents();
                                for (let t = 0; t < e.length; t += 1) this.observer.attach(e[t])
                            }
                            this.observer.attach(this.$el[0], {
                                childList: this.params.observeSlideChildren
                            }), this.observer.attach(this.$wrapperEl[0], {
                                attributes: !1
                            })
                        }
                    },
                    destroy() {
                        let e = this;
                        e.observer.observers.forEach(e => {
                            e.disconnect()
                        }), e.observer.observers = []
                    }
                },
                x = {
                    lastScrollTime: d.now(),
                    event: n.navigator.userAgent.indexOf("firefox") > -1 ? "DOMMouseScroll" : ! function() {
                        let e = "onwheel",
                            t = e in s;
                        if (!t) {
                            let i = s.createElement("div");
                            i.setAttribute(e, "return;"), t = "function" == typeof i[e]
                        }
                        return !t && s.implementation && s.implementation.hasFeature && !0 !== s.implementation.hasFeature("", "") && (t = s.implementation.hasFeature("Events.wheel", "3.0")), t
                    }() ? "mousewheel" : "wheel",
                    normalize(e) {
                        let t = 0,
                            i = 0,
                            s = 0,
                            n = 0;
                        return "detail" in e && (i = e.detail), "wheelDelta" in e && (i = -e.wheelDelta / 120), "wheelDeltaY" in e && (i = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = i, i = 0), s = 10 * t, n = 10 * i, "deltaY" in e && (n = e.deltaY), "deltaX" in e && (s = e.deltaX), (s || n) && e.deltaMode && (1 === e.deltaMode ? (s *= 40, n *= 40) : (s *= 800, n *= 800)), s && !t && (t = s < 1 ? -1 : 1), n && !i && (i = n < 1 ? -1 : 1), {
                            spinX: t,
                            spinY: i,
                            pixelX: s,
                            pixelY: n
                        }
                    },
                    handleMouseEnter() {
                        let e = this;
                        e.mouseEntered = !0
                    },
                    handleMouseLeave() {
                        let e = this;
                        e.mouseEntered = !1
                    },
                    handle(e) {
                        let t = e,
                            i = this,
                            s = i.params.mousewheel;
                        if (!i.mouseEntered && !s.releaseOnEdges) return !0;
                        t.originalEvent && (t = t.originalEvent);
                        let r = 0,
                            a = i.rtlTranslate ? -1 : 1,
                            l = x.normalize(t);
                        if (s.forceToAxis) {
                            if (i.isHorizontal()) {
                                if (!(Math.abs(l.pixelX) > Math.abs(l.pixelY))) return !0;
                                r = l.pixelX * a
                            } else {
                                if (!(Math.abs(l.pixelY) > Math.abs(l.pixelX))) return !0;
                                r = l.pixelY
                            }
                        } else r = Math.abs(l.pixelX) > Math.abs(l.pixelY) ? -l.pixelX * a : -l.pixelY;
                        if (0 === r) return !0;
                        if (s.invert && (r = -r), i.params.freeMode) {
                            i.params.loop && i.loopFix();
                            let o = i.getTranslate() + r * s.sensitivity,
                                u = i.isBeginning,
                                p = i.isEnd;
                            if (o >= i.minTranslate() && (o = i.minTranslate()), o <= i.maxTranslate() && (o = i.maxTranslate()), i.setTransition(0), i.setTranslate(o), i.updateProgress(), i.updateActiveIndex(), i.updateSlidesClasses(), (!u && i.isBeginning || !p && i.isEnd) && i.updateSlidesClasses(), i.params.freeModeSticky && (clearTimeout(i.mousewheel.timeout), i.mousewheel.timeout = d.nextTick(() => {
                                    i.slideToClosest()
                                }, 300)), i.emit("scroll", t), i.params.autoplay && i.params.autoplayDisableOnInteraction && i.autoplay.stop(), o === i.minTranslate() || o === i.maxTranslate()) return !0
                        } else {
                            if (d.now() - i.mousewheel.lastScrollTime > 60) {
                                if (r < 0) {
                                    if (i.isEnd && !i.params.loop || i.animating) {
                                        if (s.releaseOnEdges) return !0
                                    } else i.slideNext(), i.emit("scroll", t)
                                } else if (i.isBeginning && !i.params.loop || i.animating) {
                                    if (s.releaseOnEdges) return !0
                                } else i.slidePrev(), i.emit("scroll", t)
                            }
                            i.mousewheel.lastScrollTime = new n.Date().getTime()
                        }
                        return t.preventDefault ? t.preventDefault() : t.returnValue = !1, !1
                    },
                    enable() {
                        let e = this;
                        if (!x.event || e.mousewheel.enabled) return !1;
                        let t = e.$el;
                        return "container" !== e.params.mousewheel.eventsTarged && (t = a(e.params.mousewheel.eventsTarged)), t.on("mouseenter", e.mousewheel.handleMouseEnter), t.on("mouseleave", e.mousewheel.handleMouseLeave), t.on(x.event, e.mousewheel.handle), e.mousewheel.enabled = !0, !0
                    },
                    disable() {
                        let e = this;
                        if (!x.event || !e.mousewheel.enabled) return !1;
                        let t = e.$el;
                        return "container" !== e.params.mousewheel.eventsTarged && (t = a(e.params.mousewheel.eventsTarged)), t.off(x.event, e.mousewheel.handle), e.mousewheel.enabled = !1, !0
                    }
                },
                C = {
                    handle(e) {
                        let {
                            rtlTranslate: t
                        } = this, i = e;
                        i.originalEvent && (i = i.originalEvent);
                        let r = i.keyCode || i.charCode;
                        if (!this.allowSlideNext && (this.isHorizontal() && 39 === r || this.isVertical() && 40 === r) || !this.allowSlidePrev && (this.isHorizontal() && 37 === r || this.isVertical() && 38 === r)) return !1;
                        if (!i.shiftKey && !i.altKey && !i.ctrlKey && !i.metaKey && (!s.activeElement || !s.activeElement.nodeName || "input" !== s.activeElement.nodeName.toLowerCase() && "textarea" !== s.activeElement.nodeName.toLowerCase())) {
                            if (this.params.keyboard.onlyInViewport && (37 === r || 39 === r || 38 === r || 40 === r)) {
                                let a = !1;
                                if (this.$el.parents(`.${this.params.slideClass}`).length > 0 && 0 === this.$el.parents(`.${this.params.slideActiveClass}`).length) return;
                                let l = n.innerWidth,
                                    o = n.innerHeight,
                                    d = this.$el.offset();
                                t && (d.left -= this.$el[0].scrollLeft);
                                let u = [
                                    [d.left, d.top],
                                    [d.left + this.width, d.top],
                                    [d.left, d.top + this.height],
                                    [d.left + this.width, d.top + this.height],
                                ];
                                for (let p = 0; p < u.length; p += 1) {
                                    let h = u[p];
                                    h[0] >= 0 && h[0] <= l && h[1] >= 0 && h[1] <= o && (a = !0)
                                }
                                if (!a) return
                            }
                            this.isHorizontal() ? ((37 === r || 39 === r) && (i.preventDefault ? i.preventDefault() : i.returnValue = !1), (39 === r && !t || 37 === r && t) && this.slideNext(), (37 === r && !t || 39 === r && t) && this.slidePrev()) : ((38 === r || 40 === r) && (i.preventDefault ? i.preventDefault() : i.returnValue = !1), 40 === r && this.slideNext(), 38 === r && this.slidePrev()), this.emit("keyPress", r)
                        }
                    },
                    enable() {
                        let e = this;
                        e.keyboard.enabled || (a(s).on("keydown", e.keyboard.handle), e.keyboard.enabled = !0)
                    },
                    disable() {
                        let e = this;
                        e.keyboard.enabled && (a(s).off("keydown", e.keyboard.handle), e.keyboard.enabled = !1)
                    }
                },
                M = {
                    update() {
                        let e = this.params.navigation;
                        if (this.params.loop) return;
                        let {
                            $nextEl: t,
                            $prevEl: i
                        } = this.navigation;
                        i && i.length > 0 && (this.isBeginning ? i.addClass(e.disabledClass) : i.removeClass(e.disabledClass), i[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](e.lockClass)), t && t.length > 0 && (this.isEnd ? t.addClass(e.disabledClass) : t.removeClass(e.disabledClass), t[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](e.lockClass))
                    },
                    onPrevClick(e) {
                        e.preventDefault(), (!this.isBeginning || this.params.loop) && this.slidePrev()
                    },
                    onNextClick(e) {
                        e.preventDefault(), (!this.isEnd || this.params.loop) && this.slideNext()
                    },
                    init() {
                        let e = this.params.navigation;
                        if (!(e.nextEl || e.prevEl)) return;
                        let t, i;
                        e.nextEl && (t = a(e.nextEl), this.params.uniqueNavElements && "string" == typeof e.nextEl && t.length > 1 && 1 === this.$el.find(e.nextEl).length && (t = this.$el.find(e.nextEl))), e.prevEl && (i = a(e.prevEl), this.params.uniqueNavElements && "string" == typeof e.prevEl && i.length > 1 && 1 === this.$el.find(e.prevEl).length && (i = this.$el.find(e.prevEl))), t && t.length > 0 && t.on("click", this.navigation.onNextClick), i && i.length > 0 && i.on("click", this.navigation.onPrevClick), d.extend(this.navigation, {
                            $nextEl: t,
                            nextEl: t && t[0],
                            $prevEl: i,
                            prevEl: i && i[0]
                        })
                    },
                    destroy() {
                        let {
                            $nextEl: e,
                            $prevEl: t
                        } = this.navigation;
                        e && e.length && (e.off("click", this.navigation.onNextClick), e.removeClass(this.params.navigation.disabledClass)), t && t.length && (t.off("click", this.navigation.onPrevClick), t.removeClass(this.params.navigation.disabledClass))
                    }
                },
                k = {
                    setTranslate() {
                        let e = this;
                        if (!e.params.scrollbar.el || !e.scrollbar.el) return;
                        let {
                            scrollbar: t,
                            rtlTranslate: i,
                            progress: s
                        } = e, {
                            dragSize: n,
                            trackSize: r,
                            $dragEl: a,
                            $el: l
                        } = t, o = e.params.scrollbar, d = n, p = (r - n) * s;
                        i ? (p = -p) > 0 ? (d = n - p, p = 0) : -p + n > r && (d = r + p) : p < 0 ? (d = n + p, p = 0) : p + n > r && (d = r - p), e.isHorizontal() ? (u.transforms3d ? a.transform(`translate3d(${p}px, 0, 0)`) : a.transform(`translateX(${p}px)`), a[0].style.width = `${d}px`) : (u.transforms3d ? a.transform(`translate3d(0px, ${p}px, 0)`) : a.transform(`translateY(${p}px)`), a[0].style.height = `${d}px`), o.hide && (clearTimeout(e.scrollbar.timeout), l[0].style.opacity = 1, e.scrollbar.timeout = setTimeout(() => {
                            l[0].style.opacity = 0, l.transition(400)
                        }, 1e3))
                    },
                    setTransition(e) {
                        this.params.scrollbar.el && this.scrollbar.el && this.scrollbar.$dragEl.transition(e)
                    },
                    updateSize() {
                        if (!this.params.scrollbar.el || !this.scrollbar.el) return;
                        let {
                            scrollbar: e
                        } = this, {
                            $dragEl: t,
                            $el: i
                        } = e;
                        t[0].style.width = "", t[0].style.height = "";
                        let s = this.isHorizontal() ? i[0].offsetWidth : i[0].offsetHeight,
                            n = this.size / this.virtualSize,
                            r = n * (s / this.size),
                            a;
                        a = "auto" === this.params.scrollbar.dragSize ? s * n : parseInt(this.params.scrollbar.dragSize, 10), this.isHorizontal() ? t[0].style.width = `${a}px` : t[0].style.height = `${a}px`, n >= 1 ? i[0].style.display = "none" : i[0].style.display = "", this.params.scrollbar.hide && (i[0].style.opacity = 0), d.extend(e, {
                            trackSize: s,
                            divider: n,
                            moveDivider: r,
                            dragSize: a
                        }), e.$el[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](this.params.scrollbar.lockClass)
                    },
                    getPointerPosition(e) {
                        return this.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX || e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY || e.clientY
                    },
                    setDragPosition(e) {
                        let {
                            scrollbar: t,
                            rtlTranslate: i
                        } = this, {
                            $el: s,
                            dragSize: n,
                            trackSize: r,
                            dragStartPos: a
                        } = t, l;
                        l = Math.max(Math.min(l = (t.getPointerPosition(e) - s.offset()[this.isHorizontal() ? "left" : "top"] - (null !== a ? a : n / 2)) / (r - n), 1), 0), i && (l = 1 - l);
                        let o = this.minTranslate() + (this.maxTranslate() - this.minTranslate()) * l;
                        this.updateProgress(o), this.setTranslate(o), this.updateActiveIndex(), this.updateSlidesClasses()
                    },
                    onDragStart(e) {
                        let t = this,
                            i = t.params.scrollbar,
                            {
                                scrollbar: s,
                                $wrapperEl: n
                            } = t,
                            {
                                $el: r,
                                $dragEl: a
                            } = s;
                        t.scrollbar.isTouched = !0, t.scrollbar.dragStartPos = e.target === a[0] || e.target === a ? s.getPointerPosition(e) - e.target.getBoundingClientRect()[t.isHorizontal() ? "left" : "top"] : null, e.preventDefault(), e.stopPropagation(), n.transition(100), a.transition(100), s.setDragPosition(e), clearTimeout(t.scrollbar.dragTimeout), r.transition(0), i.hide && r.css("opacity", 1), t.emit("scrollbarDragStart", e)
                    },
                    onDragMove(e) {
                        let {
                            scrollbar: t,
                            $wrapperEl: i
                        } = this, {
                            $el: s,
                            $dragEl: n
                        } = t;
                        this.scrollbar.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, t.setDragPosition(e), i.transition(0), s.transition(0), n.transition(0), this.emit("scrollbarDragMove", e))
                    },
                    onDragEnd(e) {
                        let t = this,
                            i = t.params.scrollbar,
                            {
                                scrollbar: s
                            } = t,
                            {
                                $el: n
                            } = s;
                        t.scrollbar.isTouched && (t.scrollbar.isTouched = !1, i.hide && (clearTimeout(t.scrollbar.dragTimeout), t.scrollbar.dragTimeout = d.nextTick(() => {
                            n.css("opacity", 0), n.transition(400)
                        }, 1e3)), t.emit("scrollbarDragEnd", e), i.snapOnRelease && t.slideToClosest())
                    },
                    enableDraggable() {
                        if (!this.params.scrollbar.el) return;
                        let {
                            scrollbar: e,
                            touchEventsTouch: t,
                            touchEventsDesktop: i,
                            params: n
                        } = this, r = e.$el, a = r[0], l = !!u.passiveListener && !!n.passiveListeners && {
                            passive: !1,
                            capture: !1
                        }, o = !!u.passiveListener && !!n.passiveListeners && {
                            passive: !0,
                            capture: !1
                        };
                        u.touch ? (a.addEventListener(t.start, this.scrollbar.onDragStart, l), a.addEventListener(t.move, this.scrollbar.onDragMove, l), a.addEventListener(t.end, this.scrollbar.onDragEnd, o)) : (a.addEventListener(i.start, this.scrollbar.onDragStart, l), s.addEventListener(i.move, this.scrollbar.onDragMove, l), s.addEventListener(i.end, this.scrollbar.onDragEnd, o))
                    },
                    disableDraggable() {
                        if (!this.params.scrollbar.el) return;
                        let {
                            scrollbar: e,
                            touchEventsTouch: t,
                            touchEventsDesktop: i,
                            params: n
                        } = this, r = e.$el, a = r[0], l = !!u.passiveListener && !!n.passiveListeners && {
                            passive: !1,
                            capture: !1
                        }, o = !!u.passiveListener && !!n.passiveListeners && {
                            passive: !0,
                            capture: !1
                        };
                        u.touch ? (a.removeEventListener(t.start, this.scrollbar.onDragStart, l), a.removeEventListener(t.move, this.scrollbar.onDragMove, l), a.removeEventListener(t.end, this.scrollbar.onDragEnd, o)) : (a.removeEventListener(i.start, this.scrollbar.onDragStart, l), s.removeEventListener(i.move, this.scrollbar.onDragMove, l), s.removeEventListener(i.end, this.scrollbar.onDragEnd, o))
                    },
                    init() {
                        if (!this.params.scrollbar.el) return;
                        let {
                            scrollbar: e,
                            $el: t
                        } = this, i = this.params.scrollbar, s = a(i.el);
                        this.params.uniqueNavElements && "string" == typeof i.el && s.length > 1 && 1 === t.find(i.el).length && (s = t.find(i.el));
                        let n = s.find(`.${this.params.scrollbar.dragClass}`);
                        0 === n.length && (n = a(`<div class="${this.params.scrollbar.dragClass}"></div>`), s.append(n)), d.extend(e, {
                            $el: s,
                            el: s[0],
                            $dragEl: n,
                            dragEl: n[0]
                        }), i.draggable && e.enableDraggable()
                    },
                    destroy() {
                        this.scrollbar.disableDraggable()
                    }
                },
                P = {
                    makeElFocusable: e => (e.attr("tabIndex", "0"), e),
                    addElRole: (e, t) => (e.attr("role", t), e),
                    addElLabel: (e, t) => (e.attr("aria-label", t), e),
                    disableEl: e => (e.attr("aria-disabled", !0), e),
                    enableEl: e => (e.attr("aria-disabled", !1), e),
                    onEnterKey(e) {
                        let t = this.params.a11y;
                        if (13 !== e.keyCode) return;
                        let i = a(e.target);
                        this.navigation && this.navigation.$nextEl && i.is(this.navigation.$nextEl) && (this.isEnd && !this.params.loop || this.slideNext(), this.isEnd ? this.a11y.notify(t.lastSlideMessage) : this.a11y.notify(t.nextSlideMessage)), this.navigation && this.navigation.$prevEl && i.is(this.navigation.$prevEl) && (this.isBeginning && !this.params.loop || this.slidePrev(), this.isBeginning ? this.a11y.notify(t.firstSlideMessage) : this.a11y.notify(t.prevSlideMessage)), this.pagination && i.is(`.${this.params.pagination.bulletClass}`) && i[0].click()
                    },
                    notify(e) {
                        let t = this.a11y.liveRegion;
                        0 !== t.length && (t.html(""), t.html(e))
                    },
                    updateNavigation() {
                        if (this.params.loop) return;
                        let {
                            $nextEl: e,
                            $prevEl: t
                        } = this.navigation;
                        t && t.length > 0 && (this.isBeginning ? this.a11y.disableEl(t) : this.a11y.enableEl(t)), e && e.length > 0 && (this.isEnd ? this.a11y.disableEl(e) : this.a11y.enableEl(e))
                    },
                    updatePagination() {
                        let e = this,
                            t = e.params.a11y;
                        e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.bullets.each((i, s) => {
                            let n = a(s);
                            e.a11y.makeElFocusable(n), e.a11y.addElRole(n, "button"), e.a11y.addElLabel(n, t.paginationBulletMessage.replace(/{{index}}/, n.index() + 1))
                        })
                    },
                    init() {
                        this.$el.append(this.a11y.liveRegion);
                        let e = this.params.a11y,
                            t, i;
                        this.navigation && this.navigation.$nextEl && (t = this.navigation.$nextEl), this.navigation && this.navigation.$prevEl && (i = this.navigation.$prevEl), t && (this.a11y.makeElFocusable(t), this.a11y.addElRole(t, "button"), this.a11y.addElLabel(t, e.nextSlideMessage), t.on("keydown", this.a11y.onEnterKey)), i && (this.a11y.makeElFocusable(i), this.a11y.addElRole(i, "button"), this.a11y.addElLabel(i, e.prevSlideMessage), i.on("keydown", this.a11y.onEnterKey)), this.pagination && this.params.pagination.clickable && this.pagination.bullets && this.pagination.bullets.length && this.pagination.$el.on("keydown", `.${this.params.pagination.bulletClass}`, this.a11y.onEnterKey)
                    },
                    destroy() {
                        this.a11y.liveRegion && this.a11y.liveRegion.length > 0 && this.a11y.liveRegion.remove();
                        let e, t;
                        this.navigation && this.navigation.$nextEl && (e = this.navigation.$nextEl), this.navigation && this.navigation.$prevEl && (t = this.navigation.$prevEl), e && e.off("keydown", this.a11y.onEnterKey), t && t.off("keydown", this.a11y.onEnterKey), this.pagination && this.params.pagination.clickable && this.pagination.bullets && this.pagination.bullets.length && this.pagination.$el.off("keydown", `.${this.params.pagination.bulletClass}`, this.a11y.onEnterKey)
                    }
                },
                O = {
                    run() {
                        let e = this,
                            t = e.slides.eq(e.activeIndex),
                            i = e.params.autoplay.delay;
                        t.attr("data-swiper-autoplay") && (i = t.attr("data-swiper-autoplay") || e.params.autoplay.delay), e.autoplay.timeout = d.nextTick(() => {
                            e.params.autoplay.reverseDirection ? e.params.loop ? (e.loopFix(), e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.isBeginning ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(e.slides.length - 1, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.params.loop ? (e.loopFix(), e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")) : e.isEnd ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(0, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slideNext(e.params.speed, !0, !0), e.emit("autoplay"))
                        }, i)
                    },
                    start() {
                        let e = this;
                        return void 0 === e.autoplay.timeout && !e.autoplay.running && (e.autoplay.running = !0, e.emit("autoplayStart"), e.autoplay.run(), !0)
                    },
                    stop() {
                        let e = this;
                        return !!e.autoplay.running && void 0 !== e.autoplay.timeout && (e.autoplay.timeout && (clearTimeout(e.autoplay.timeout), e.autoplay.timeout = void 0), e.autoplay.running = !1, e.emit("autoplayStop"), !0)
                    },
                    pause(e) {
                        let t = this;
                        t.autoplay.running && (t.autoplay.paused || (t.autoplay.timeout && clearTimeout(t.autoplay.timeout), t.autoplay.paused = !0, 0 !== e && t.params.autoplay.waitForTransition ? (t.$wrapperEl[0].addEventListener("transitionend", t.autoplay.onTransitionEnd), t.$wrapperEl[0].addEventListener("webkitTransitionEnd", t.autoplay.onTransitionEnd)) : (t.autoplay.paused = !1, t.autoplay.run())))
                    }
                },
                L = [{
                    name: "device",
                    proto: {
                        device: c
                    },
                    static: {
                        device: c
                    }
                }, {
                    name: "support",
                    proto: {
                        support: u
                    },
                    static: {
                        support: u
                    }
                }, {
                    name: "browser",
                    proto: {
                        browser: p
                    },
                    static: {
                        browser: p
                    }
                }, {
                    name: "resize",
                    create() {
                        let e = this;
                        d.extend(e, {
                            resize: {
                                resizeHandler() {
                                    e && !e.destroyed && e.initialized && (e.emit("beforeResize"), e.emit("resize"))
                                },
                                orientationChangeHandler() {
                                    e && !e.destroyed && e.initialized && e.emit("orientationchange")
                                }
                            }
                        })
                    },
                    on: {
                        init() {
                            n.addEventListener("resize", this.resize.resizeHandler), n.addEventListener("orientationchange", this.resize.orientationChangeHandler)
                        },
                        destroy() {
                            n.removeEventListener("resize", this.resize.resizeHandler), n.removeEventListener("orientationchange", this.resize.orientationChangeHandler)
                        }
                    }
                }, {
                    name: "observer",
                    params: {
                        observer: !1,
                        observeParents: !1,
                        observeSlideChildren: !1
                    },
                    create() {
                        d.extend(this, {
                            observer: {
                                init: E.init.bind(this),
                                attach: E.attach.bind(this),
                                destroy: E.destroy.bind(this),
                                observers: []
                            }
                        })
                    },
                    on: {
                        init() {
                            this.observer.init()
                        },
                        destroy() {
                            this.observer.destroy()
                        }
                    }
                }, {
                    name: "mousewheel",
                    params: {
                        mousewheel: {
                            enabled: !1,
                            releaseOnEdges: !1,
                            invert: !1,
                            forceToAxis: !1,
                            sensitivity: 1,
                            eventsTarged: "container"
                        }
                    },
                    create() {
                        d.extend(this, {
                            mousewheel: {
                                enabled: !1,
                                enable: x.enable.bind(this),
                                disable: x.disable.bind(this),
                                handle: x.handle.bind(this),
                                handleMouseEnter: x.handleMouseEnter.bind(this),
                                handleMouseLeave: x.handleMouseLeave.bind(this),
                                lastScrollTime: d.now()
                            }
                        })
                    },
                    on: {
                        init() {
                            this.params.mousewheel.enabled && this.mousewheel.enable()
                        },
                        destroy() {
                            this.mousewheel.enabled && this.mousewheel.disable()
                        }
                    }
                }, {
                    name: "keyboard",
                    params: {
                        keyboard: {
                            enabled: !1,
                            onlyInViewport: !0
                        }
                    },
                    create() {
                        d.extend(this, {
                            keyboard: {
                                enabled: !1,
                                enable: C.enable.bind(this),
                                disable: C.disable.bind(this),
                                handle: C.handle.bind(this)
                            }
                        })
                    },
                    on: {
                        init() {
                            this.params.keyboard.enabled && this.keyboard.enable()
                        },
                        destroy() {
                            this.keyboard.enabled && this.keyboard.disable()
                        }
                    }
                }, {
                    name: "navigation",
                    params: {
                        navigation: {
                            nextEl: null,
                            prevEl: null,
                            hideOnClick: !1,
                            disabledClass: "swiper-button-disabled",
                            hiddenClass: "swiper-button-hidden",
                            lockClass: "swiper-button-lock"
                        }
                    },
                    create() {
                        d.extend(this, {
                            navigation: {
                                init: M.init.bind(this),
                                update: M.update.bind(this),
                                destroy: M.destroy.bind(this),
                                onNextClick: M.onNextClick.bind(this),
                                onPrevClick: M.onPrevClick.bind(this)
                            }
                        })
                    },
                    on: {
                        init() {
                            this.navigation.init(), this.navigation.update()
                        },
                        toEdge() {
                            this.navigation.update()
                        },
                        fromEdge() {
                            this.navigation.update()
                        },
                        destroy() {
                            this.navigation.destroy()
                        },
                        click(e) {
                            let {
                                $nextEl: t,
                                $prevEl: i
                            } = this.navigation;
                            if (this.params.navigation.hideOnClick && !a(e.target).is(i) && !a(e.target).is(t)) {
                                let s;
                                t ? s = t.hasClass(this.params.navigation.hiddenClass) : i && (s = i.hasClass(this.params.navigation.hiddenClass)), !0 === s ? this.emit("navigationShow", this) : this.emit("navigationHide", this), t && t.toggleClass(this.params.navigation.hiddenClass), i && i.toggleClass(this.params.navigation.hiddenClass)
                            }
                        }
                    }
                }, {
                    name: "scrollbar",
                    params: {
                        scrollbar: {
                            el: null,
                            dragSize: "auto",
                            hide: !1,
                            draggable: !1,
                            snapOnRelease: !0,
                            lockClass: "swiper-scrollbar-lock",
                            dragClass: "swiper-scrollbar-drag"
                        }
                    },
                    create() {
                        d.extend(this, {
                            scrollbar: {
                                init: k.init.bind(this),
                                destroy: k.destroy.bind(this),
                                updateSize: k.updateSize.bind(this),
                                setTranslate: k.setTranslate.bind(this),
                                setTransition: k.setTransition.bind(this),
                                enableDraggable: k.enableDraggable.bind(this),
                                disableDraggable: k.disableDraggable.bind(this),
                                setDragPosition: k.setDragPosition.bind(this),
                                getPointerPosition: k.getPointerPosition.bind(this),
                                onDragStart: k.onDragStart.bind(this),
                                onDragMove: k.onDragMove.bind(this),
                                onDragEnd: k.onDragEnd.bind(this),
                                isTouched: !1,
                                timeout: null,
                                dragTimeout: null
                            }
                        })
                    },
                    on: {
                        init() {
                            this.scrollbar.init(), this.scrollbar.updateSize(), this.scrollbar.setTranslate()
                        },
                        update() {
                            this.scrollbar.updateSize()
                        },
                        resize() {
                            this.scrollbar.updateSize()
                        },
                        observerUpdate() {
                            this.scrollbar.updateSize()
                        },
                        setTranslate() {
                            this.scrollbar.setTranslate()
                        },
                        setTransition(e) {
                            this.scrollbar.setTransition(e)
                        },
                        destroy() {
                            this.scrollbar.destroy()
                        }
                    }
                }, {
                    name: "a11y",
                    params: {
                        a11y: {
                            enabled: !0,
                            notificationClass: "swiper-notification",
                            prevSlideMessage: "Previous slide",
                            nextSlideMessage: "Next slide",
                            firstSlideMessage: "This is the first slide",
                            lastSlideMessage: "This is the last slide",
                            paginationBulletMessage: "Go to slide {{index}}"
                        }
                    },
                    create() {
                        let e = this;
                        d.extend(e, {
                            a11y: {
                                liveRegion: a(`<span class="${e.params.a11y.notificationClass}" aria-live="assertive" aria-atomic="true"></span>`)
                            }
                        }), Object.keys(P).forEach(t => {
                            e.a11y[t] = P[t].bind(e)
                        })
                    },
                    on: {
                        init() {
                            this.params.a11y.enabled && (this.a11y.init(), this.a11y.updateNavigation())
                        },
                        toEdge() {
                            this.params.a11y.enabled && this.a11y.updateNavigation()
                        },
                        fromEdge() {
                            this.params.a11y.enabled && this.a11y.updateNavigation()
                        },
                        paginationUpdate() {
                            this.params.a11y.enabled && this.a11y.updatePagination()
                        },
                        destroy() {
                            this.params.a11y.enabled && this.a11y.destroy()
                        }
                    }
                }, {
                    name: "autoplay",
                    params: {
                        autoplay: {
                            enabled: !1,
                            delay: 3e3,
                            waitForTransition: !0,
                            disableOnInteraction: !0,
                            stopOnLastSlide: !1,
                            reverseDirection: !1
                        }
                    },
                    create() {
                        let e = this;
                        d.extend(e, {
                            autoplay: {
                                running: !1,
                                paused: !1,
                                run: O.run.bind(e),
                                start: O.start.bind(e),
                                stop: O.stop.bind(e),
                                pause: O.pause.bind(e),
                                onTransitionEnd(t) {
                                    e && !e.destroyed && e.$wrapperEl && t.target === this && (e.$wrapperEl[0].removeEventListener("transitionend", e.autoplay.onTransitionEnd), e.$wrapperEl[0].removeEventListener("webkitTransitionEnd", e.autoplay.onTransitionEnd), e.autoplay.paused = !1, e.autoplay.running ? e.autoplay.run() : e.autoplay.stop())
                                }
                            }
                        })
                    },
                    on: {
                        init() {
                            this.params.autoplay.enabled && this.autoplay.start()
                        },
                        beforeTransitionStart(e, t) {
                            this.autoplay.running && (t || !this.params.autoplay.disableOnInteraction ? this.autoplay.pause(e) : this.autoplay.stop())
                        },
                        sliderFirstMove() {
                            this.autoplay.running && (this.params.autoplay.disableOnInteraction ? this.autoplay.stop() : this.autoplay.pause())
                        },
                        destroy() {
                            this.autoplay.running && this.autoplay.stop()
                        }
                    }
                }];
            void 0 === S.use && (S.use = S.Class.use, S.installModule = S.Class.installModule), S.use(L);
            var _ = S
        },
        13185: function(e, t, i) {
            var s = Array.prototype.slice,
                n = i(52876),
                r = i(66500),
                a = e.exports = function(e, t, i) {
                    return i || (i = {}), e === t || (e instanceof Date && t instanceof Date ? e.getTime() === t.getTime() : e && t && ("object" == typeof e || "object" == typeof t) ? function(e, t, i) {
                        var d, u;
                        if (l(e) || l(t) || e.prototype !== t.prototype) return !1;
                        if (r(e)) return !!r(t) && (e = s.call(e), t = s.call(t), a(e, t, i));
                        if (o(e)) {
                            if (!o(t) || e.length !== t.length) return !1;
                            for (d = 0; d < e.length; d++)
                                if (e[d] !== t[d]) return !1;
                            return !0
                        }
                        try {
                            var p = n(e),
                                h = n(t)
                        } catch (c) {
                            return !1
                        }
                        if (p.length != h.length) return !1;
                        for (p.sort(), h.sort(), d = p.length - 1; d >= 0; d--)
                            if (p[d] != h[d]) return !1;
                        for (d = p.length - 1; d >= 0; d--)
                            if (!a(e[u = p[d]], t[u], i)) return !1;
                        return typeof e == typeof t
                    }(e, t, i) : i.strict ? e === t : e == t)
                };

            function l(e) {
                return null == e
            }

            function o(e) {
                return !!e && "object" == typeof e && "number" == typeof e.length && "function" == typeof e.copy && "function" == typeof e.slice && (!(e.length > 0) || "number" == typeof e[0])
            }
        },
        66500: function(e, t) {
            var i = "[object Arguments]" == function() {
                return Object.prototype.toString.call(arguments)
            }();

            function s(e) {
                return "[object Arguments]" == Object.prototype.toString.call(e)
            }

            function n(e) {
                return e && "object" == typeof e && "number" == typeof e.length && Object.prototype.hasOwnProperty.call(e, "callee") && !Object.prototype.propertyIsEnumerable.call(e, "callee") || !1
            }(t = e.exports = i ? s : n).supported = s, t.unsupported = n
        },
        52876: function(e, t) {
            (e.exports = "function" == typeof Object.keys ? Object.keys : i).shim = i;

            function i(e) {
                var t = [];
                for (var i in e) t.push(i);
                return t
            }
        },
        8979: function(e, t, i) {
            var s = "__lodash_hash_undefined__",
                n = 1 / 0,
                r = /^\[object .+?Constructor\]$/,
                a = /^(?:0|[1-9]\d*)$/,
                l = "object" == typeof i.g && i.g && i.g.Object === Object && i.g,
                o = "object" == typeof self && self && self.Object === Object && self,
                d = l || o || Function("return this")();

            function u(e, t) {
                return !!(e ? e.length : 0) && function(e, t, i) {
                    if (t != t) return function(e, t, i, s) {
                        for (var n = e.length, r = i + (s ? 1 : -1); s ? r-- : ++r < n;)
                            if (t(e[r], r, e)) return r;
                        return -1
                    }(e, f, i);
                    for (var s = i - 1, n = e.length; ++s < n;)
                        if (e[s] === t) return s;
                    return -1
                }(e, t, 0) > -1
            }

            function p(e, t, i) {
                for (var s = -1, n = e ? e.length : 0; ++s < n;)
                    if (i(t, e[s])) return !0;
                return !1
            }

            function h(e, t) {
                for (var i = -1, s = e ? e.length : 0, n = Array(s); ++i < s;) n[i] = t(e[i], i, e);
                return n
            }

            function c(e, t) {
                for (var i = -1, s = t.length, n = e.length; ++i < s;) e[n + i] = t[i];
                return e
            }

            function f(e) {
                return e != e
            }

            function v(e, t) {
                return e.has(t)
            }

            function g(e, t) {
                return function(i) {
                    return e(t(i))
                }
            }
            var m, b = Array.prototype,
                y = Function.prototype,
                w = Object.prototype,
                T = d["__core-js_shared__"],
                S = (m = /[^.]+$/.exec(T && T.keys && T.keys.IE_PROTO || "")) ? "Symbol(src)_1." + m : "",
                E = y.toString,
                x = w.hasOwnProperty,
                C = w.toString,
                M = RegExp("^" + E.call(x).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
                k = d.Symbol,
                P = g(Object.getPrototypeOf, Object),
                O = w.propertyIsEnumerable,
                L = b.splice,
                _ = k ? k.isConcatSpreadable : void 0,
                D = Object.getOwnPropertySymbols,
                $ = Math.max,
                z = F(d, "Map"),
                I = F(Object, "create");

            function A(e) {
                var t = -1,
                    i = e ? e.length : 0;
                for (this.clear(); ++t < i;) {
                    var s = e[t];
                    this.set(s[0], s[1])
                }
            }

            function B(e) {
                var t = -1,
                    i = e ? e.length : 0;
                for (this.clear(); ++t < i;) {
                    var s = e[t];
                    this.set(s[0], s[1])
                }
            }

            function N(e) {
                var t = -1,
                    i = e ? e.length : 0;
                for (this.clear(); ++t < i;) {
                    var s = e[t];
                    this.set(s[0], s[1])
                }
            }

            function j(e) {
                var t = -1,
                    i = e ? e.length : 0;
                for (this.__data__ = new N; ++t < i;) this.add(e[t])
            }

            function V(e, t) {
                for (var i = e.length; i--;)
                    if (W(e[i][0], t)) return i;
                return -1
            }

            function H(e, t) {
                var i, s, n = e.__data__;
                return (i = t, s = typeof i, "string" == s || "number" == s || "symbol" == s || "boolean" == s ? "__proto__" !== i : null === i) ? n["string" == typeof t ? "string" : "hash"] : n.map
            }

            function F(e, t) {
                var i, s, n, a, l = null == e ? void 0 : e[t];
                return (n = l, J(n) && (a = n, !S || !(S in a)) && (Z(n) || function(e) {
                    var t = !1;
                    if (null != e && "function" != typeof e.toString) try {
                        t = !!(e + "")
                    } catch (i) {}
                    return t
                }(n) ? M : r).test(function(e) {
                    if (null != e) {
                        try {
                            return E.call(e)
                        } catch (t) {}
                        try {
                            return e + ""
                        } catch (i) {}
                    }
                    return ""
                }(n))) ? l : void 0
            }
            A.prototype.clear = function() {
                this.__data__ = I ? I(null) : {}
            }, A.prototype.delete = function(e) {
                return this.has(e) && delete this.__data__[e]
            }, A.prototype.get = function(e) {
                var t = this.__data__;
                if (I) {
                    var i = t[e];
                    return i === s ? void 0 : i
                }
                return x.call(t, e) ? t[e] : void 0
            }, A.prototype.has = function(e) {
                var t = this.__data__;
                return I ? void 0 !== t[e] : x.call(t, e)
            }, A.prototype.set = function(e, t) {
                return this.__data__[e] = I && void 0 === t ? s : t, this
            }, B.prototype.clear = function() {
                this.__data__ = []
            }, B.prototype.delete = function(e) {
                var t = this.__data__,
                    i = V(t, e);
                return !(i < 0) && (i == t.length - 1 ? t.pop() : L.call(t, i, 1), !0)
            }, B.prototype.get = function(e) {
                var t = this.__data__,
                    i = V(t, e);
                return i < 0 ? void 0 : t[i][1]
            }, B.prototype.has = function(e) {
                return V(this.__data__, e) > -1
            }, B.prototype.set = function(e, t) {
                var i = this.__data__,
                    s = V(i, e);
                return s < 0 ? i.push([e, t]) : i[s][1] = t, this
            }, N.prototype.clear = function() {
                this.__data__ = {
                    hash: new A,
                    map: new(z || B),
                    string: new A
                }
            }, N.prototype.delete = function(e) {
                return H(this, e).delete(e)
            }, N.prototype.get = function(e) {
                return H(this, e).get(e)
            }, N.prototype.has = function(e) {
                return H(this, e).has(e)
            }, N.prototype.set = function(e, t) {
                return H(this, e).set(e, t), this
            }, j.prototype.add = j.prototype.push = function(e) {
                return this.__data__.set(e, s), this
            }, j.prototype.has = function(e) {
                return this.__data__.has(e)
            };
            var R = D ? g(D, Object) : er,
                G = D ? function(e) {
                    for (var t = []; e;) c(t, R(e)), e = P(e);
                    return t
                } : er;

            function X(e) {
                return U(e) || K(e) || !!(_ && e && e[_])
            }

            function Y(e, t) {
                return !!(t = null == t ? 9007199254740991 : t) && ("number" == typeof e || a.test(e)) && e > -1 && e % 1 == 0 && e < t
            }

            function q(e) {
                if ("string" == typeof e || (t = e, "symbol" == typeof t || ee(t) && "[object Symbol]" == C.call(t))) return e;
                var t, i = e + "";
                return "0" == i && 1 / e == -n ? "-0" : i
            }

            function W(e, t) {
                return e === t || e != e && t != t
            }

            function K(e) {
                var t;
                return t = e, ee(t) && Q(t) && x.call(e, "callee") && (!O.call(e, "callee") || "[object Arguments]" == C.call(e))
            }
            var U = Array.isArray;

            function Q(e) {
                var t;
                return null != e && (t = e.length, "number" == typeof t && t > -1 && t % 1 == 0 && t <= 9007199254740991) && !Z(e)
            }

            function Z(e) {
                var t = J(e) ? C.call(e) : "";
                return "[object Function]" == t || "[object GeneratorFunction]" == t
            }

            function J(e) {
                var t = typeof e;
                return !!e && ("object" == t || "function" == t)
            }

            function ee(e) {
                return !!e && "object" == typeof e
            }

            function et(e) {
                return Q(e) ? function(e, t) {
                    var i = U(e) || K(e) ? function(e, t) {
                            for (var i = -1, s = Array(e); ++i < e;) s[i] = t(i);
                            return s
                        }(e.length, String) : [],
                        s = i.length,
                        n = !!s;
                    for (var r in e)(t || x.call(e, r)) && !(n && ("length" == r || Y(r, s))) && i.push(r);
                    return i
                }(e, !0) : function(e) {
                    if (!J(e)) return function(e) {
                        var t = [];
                        if (null != e)
                            for (var i in Object(e)) t.push(i);
                        return t
                    }(e);
                    var t, i, s = (t = e, i = t && t.constructor, t === ("function" == typeof i && i.prototype || w)),
                        n = [];
                    for (var r in e) "constructor" == r && (s || !x.call(e, r)) || n.push(r);
                    return n
                }(e)
            }
            var ei, es, en = (ei = function(e, t) {
                var i, s, n, r, a, l, o;
                return null == e ? {} : (t = h(function e(t, i, s, n, r) {
                    var a = -1,
                        l = t.length;
                    for (s || (s = X), r || (r = []); ++a < l;) {
                        var o = t[a];
                        i > 0 && s(o) ? i > 1 ? e(o, i - 1, s, n, r) : c(r, o) : n || (r[r.length] = o)
                    }
                    return r
                }(t, 1), q), l = e, o = function(e, t, i, s) {
                    var n, r = -1,
                        a = u,
                        l = !0,
                        o = e.length,
                        d = [],
                        c = t.length;
                    if (!o) return d;
                    i && (t = h(t, (n = i, function(e) {
                        return n(e)
                    }))), s ? (a = p, l = !1) : t.length >= 200 && (a = v, l = !1, t = new j(t));
                    outer: for (; ++r < o;) {
                        var f = e[r],
                            g = i ? i(f) : f;
                        if (f = s || 0 !== f ? f : 0, l && g == g) {
                            for (var m = c; m--;)
                                if (t[m] === g) continue outer;
                            d.push(f)
                        } else a(t, g, s) || d.push(f)
                    }
                    return d
                }((a = et(e), U(e) ? a : c(a, G(e))), t), function(e, t, i) {
                    for (var s = -1, n = t.length, r = {}; ++s < n;) {
                        var a = t[s],
                            l = e[a];
                        i(l, a) && (r[a] = l)
                    }
                    return r
                }(l = Object(l), o, function(e, t) {
                    return t in l
                }))
            }, es = $(void 0 === es ? ei.length - 1 : es, 0), function() {
                for (var e = arguments, t = -1, i = $(e.length - es, 0), s = Array(i); ++t < i;) s[t] = e[es + t];
                t = -1;
                for (var n = Array(es + 1); ++t < es;) n[t] = e[t];
                return n[es] = s,
                    function(e, t, i) {
                        switch (i.length) {
                            case 0:
                                return e.call(t);
                            case 1:
                                return e.call(t, i[0]);
                            case 2:
                                return e.call(t, i[0], i[1]);
                            case 3:
                                return e.call(t, i[0], i[1], i[2])
                        }
                        return e.apply(t, i)
                    }(ei, this, n)
            });

            function er() {
                return []
            }
            e.exports = en
        }
    }
]);
//# sourceMappingURL=999.c970f4116e11771c.js.map