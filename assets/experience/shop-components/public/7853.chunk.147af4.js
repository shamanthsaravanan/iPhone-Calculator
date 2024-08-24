/*! For license information please see 7853.chunk.147af4.js.LICENSE.txt */
"use strict";
(self.webpackChunk_nike_shop_components = self.webpackChunk_nike_shop_components || []).push([
    [7853], {
        7853: (e, t, n) => {
            n.r(t), n.d(t, {
                createFocusTrap: () => b
            });
            var a = n(6838);

            function o(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, a)
                }
                return n
            }

            function r(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? o(Object(n), !0).forEach((function(t) {
                        i(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : o(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function i(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            var c, u = (c = [], {
                    activateTrap: function(e) {
                        if (c.length > 0) {
                            var t = c[c.length - 1];
                            t !== e && t.pause()
                        }
                        var n = c.indexOf(e); - 1 === n || c.splice(n, 1), c.push(e)
                    },
                    deactivateTrap: function(e) {
                        var t = c.indexOf(e); - 1 !== t && c.splice(t, 1), c.length > 0 && c[c.length - 1].unpause()
                    }
                }),
                s = function(e) {
                    return setTimeout(e, 0)
                },
                l = function(e, t) {
                    var n = -1;
                    return e.every((function(e, a) {
                        return !t(e) || (n = a, !1)
                    })), n
                },
                f = function(e) {
                    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++) n[a - 1] = arguments[a];
                    return "function" == typeof e ? e.apply(void 0, n) : e
                },
                d = function(e) {
                    return e.target.shadowRoot && "function" == typeof e.composedPath ? e.composedPath()[0] : e.target
                },
                b = function(e, t) {
                    var n, o = (null == t ? void 0 : t.document) || document,
                        i = r({
                            returnFocusOnDeactivate: !0,
                            escapeDeactivates: !0,
                            delayInitialFocus: !0
                        }, t),
                        c = {
                            containers: [],
                            containerGroups: [],
                            tabbableGroups: [],
                            nodeFocusedBeforeActivation: null,
                            mostRecentlyFocusedNode: null,
                            active: !1,
                            paused: !1,
                            delayInitialFocusTimer: void 0
                        },
                        b = function(e, t, n) {
                            return e && void 0 !== e[t] ? e[t] : i[n || t]
                        },
                        p = function(e) {
                            return c.containerGroups.findIndex((function(t) {
                                var n = t.container,
                                    a = t.tabbableNodes;
                                return n.contains(e) || a.find((function(t) {
                                    return t === e
                                }))
                            }))
                        },
                        v = function(e) {
                            var t = i[e];
                            if ("function" == typeof t) {
                                for (var n = arguments.length, a = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++) a[r - 1] = arguments[r];
                                t = t.apply(void 0, a)
                            }
                            if (!0 === t && (t = void 0), !t) {
                                if (void 0 === t || !1 === t) return t;
                                throw new Error("`".concat(e, "` was specified but was not a node, or did not return a node"))
                            }
                            var c = t;
                            if ("string" == typeof t && !(c = o.querySelector(t))) throw new Error("`".concat(e, "` as selector refers to no known node"));
                            return c
                        },
                        h = function() {
                            var e = v("initialFocus");
                            if (!1 === e) return !1;
                            if (void 0 === e)
                                if (p(o.activeElement) >= 0) e = o.activeElement;
                                else {
                                    var t = c.tabbableGroups[0];
                                    e = t && t.firstTabbableNode || v("fallbackFocus")
                                }
                            if (!e) throw new Error("Your focus-trap needs to have at least one focusable element");
                            return e
                        },
                        m = function() {
                            if (c.containerGroups = c.containers.map((function(e) {
                                    var t = (0, a.tabbable)(e, i.tabbableOptions),
                                        n = (0, a.focusable)(e, i.tabbableOptions);
                                    return {
                                        container: e,
                                        tabbableNodes: t,
                                        focusableNodes: n,
                                        firstTabbableNode: t.length > 0 ? t[0] : null,
                                        lastTabbableNode: t.length > 0 ? t[t.length - 1] : null,
                                        nextTabbableNode: function(e) {
                                            var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                                                o = n.findIndex((function(t) {
                                                    return t === e
                                                }));
                                            if (!(o < 0)) return t ? n.slice(o + 1).find((function(e) {
                                                return (0, a.isTabbable)(e, i.tabbableOptions)
                                            })) : n.slice(0, o).reverse().find((function(e) {
                                                return (0, a.isTabbable)(e, i.tabbableOptions)
                                            }))
                                        }
                                    }
                                })), c.tabbableGroups = c.containerGroups.filter((function(e) {
                                    return e.tabbableNodes.length > 0
                                })), c.tabbableGroups.length <= 0 && !v("fallbackFocus")) throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times")
                        },
                        y = function e(t) {
                            !1 !== t && t !== o.activeElement && (t && t.focus ? (t.focus({
                                preventScroll: !!i.preventScroll
                            }), c.mostRecentlyFocusedNode = t, function(e) {
                                return e.tagName && "input" === e.tagName.toLowerCase() && "function" == typeof e.select
                            }(t) && t.select()) : e(h()))
                        },
                        g = function(e) {
                            var t = v("setReturnFocus", e);
                            return t || !1 !== t && e
                        },
                        w = function(e) {
                            var t = d(e);
                            p(t) >= 0 || (f(i.clickOutsideDeactivates, e) ? n.deactivate({
                                returnFocus: i.returnFocusOnDeactivate && !(0, a.isFocusable)(t, i.tabbableOptions)
                            }) : f(i.allowOutsideClick, e) || e.preventDefault())
                        },
                        E = function(e) {
                            var t = d(e),
                                n = p(t) >= 0;
                            n || t instanceof Document ? n && (c.mostRecentlyFocusedNode = t) : (e.stopImmediatePropagation(), y(c.mostRecentlyFocusedNode || h()))
                        },
                        O = function(e) {
                            if (function(e) {
                                    return "Escape" === e.key || "Esc" === e.key || 27 === e.keyCode
                                }(e) && !1 !== f(i.escapeDeactivates, e)) return e.preventDefault(), void n.deactivate();
                            (function(e) {
                                return "Tab" === e.key || 9 === e.keyCode
                            })(e) && function(e) {
                                var t = d(e);
                                m();
                                var n = null;
                                if (c.tabbableGroups.length > 0) {
                                    var o = p(t),
                                        r = o >= 0 ? c.containerGroups[o] : void 0;
                                    if (o < 0) n = e.shiftKey ? c.tabbableGroups[c.tabbableGroups.length - 1].lastTabbableNode : c.tabbableGroups[0].firstTabbableNode;
                                    else if (e.shiftKey) {
                                        var u = l(c.tabbableGroups, (function(e) {
                                            var n = e.firstTabbableNode;
                                            return t === n
                                        }));
                                        if (u < 0 && (r.container === t || (0, a.isFocusable)(t, i.tabbableOptions) && !(0, a.isTabbable)(t, i.tabbableOptions) && !r.nextTabbableNode(t, !1)) && (u = o), u >= 0) {
                                            var s = 0 === u ? c.tabbableGroups.length - 1 : u - 1;
                                            n = c.tabbableGroups[s].lastTabbableNode
                                        }
                                    } else {
                                        var f = l(c.tabbableGroups, (function(e) {
                                            var n = e.lastTabbableNode;
                                            return t === n
                                        }));
                                        if (f < 0 && (r.container === t || (0, a.isFocusable)(t, i.tabbableOptions) && !(0, a.isTabbable)(t, i.tabbableOptions) && !r.nextTabbableNode(t)) && (f = o), f >= 0) {
                                            var b = f === c.tabbableGroups.length - 1 ? 0 : f + 1;
                                            n = c.tabbableGroups[b].firstTabbableNode
                                        }
                                    }
                                } else n = v("fallbackFocus");
                                n && (e.preventDefault(), y(n))
                            }(e)
                        },
                        N = function(e) {
                            var t = d(e);
                            p(t) >= 0 || f(i.clickOutsideDeactivates, e) || f(i.allowOutsideClick, e) || (e.preventDefault(), e.stopImmediatePropagation())
                        },
                        T = function() {
                            if (c.active) return u.activateTrap(n), c.delayInitialFocusTimer = i.delayInitialFocus ? s((function() {
                                y(h())
                            })) : y(h()), o.addEventListener("focusin", E, !0), o.addEventListener("mousedown", w, {
                                capture: !0,
                                passive: !1
                            }), o.addEventListener("touchstart", w, {
                                capture: !0,
                                passive: !1
                            }), o.addEventListener("click", N, {
                                capture: !0,
                                passive: !1
                            }), o.addEventListener("keydown", O, {
                                capture: !0,
                                passive: !1
                            }), n
                        },
                        S = function() {
                            if (c.active) return o.removeEventListener("focusin", E, !0), o.removeEventListener("mousedown", w, !0), o.removeEventListener("touchstart", w, !0), o.removeEventListener("click", N, !0), o.removeEventListener("keydown", O, !0), n
                        };
                    return (n = {
                        get active() {
                            return c.active
                        },
                        get paused() {
                            return c.paused
                        },
                        activate: function(e) {
                            if (c.active) return this;
                            var t = b(e, "onActivate"),
                                n = b(e, "onPostActivate"),
                                a = b(e, "checkCanFocusTrap");
                            a || m(), c.active = !0, c.paused = !1, c.nodeFocusedBeforeActivation = o.activeElement, t && t();
                            var r = function() {
                                a && m(), T(), n && n()
                            };
                            return a ? (a(c.containers.concat()).then(r, r), this) : (r(), this)
                        },
                        deactivate: function(e) {
                            if (!c.active) return this;
                            var t = r({
                                onDeactivate: i.onDeactivate,
                                onPostDeactivate: i.onPostDeactivate,
                                checkCanReturnFocus: i.checkCanReturnFocus
                            }, e);
                            clearTimeout(c.delayInitialFocusTimer), c.delayInitialFocusTimer = void 0, S(), c.active = !1, c.paused = !1, u.deactivateTrap(n);
                            var a = b(t, "onDeactivate"),
                                o = b(t, "onPostDeactivate"),
                                l = b(t, "checkCanReturnFocus"),
                                f = b(t, "returnFocus", "returnFocusOnDeactivate");
                            a && a();
                            var d = function() {
                                s((function() {
                                    f && y(g(c.nodeFocusedBeforeActivation)), o && o()
                                }))
                            };
                            return f && l ? (l(g(c.nodeFocusedBeforeActivation)).then(d, d), this) : (d(), this)
                        },
                        pause: function() {
                            return c.paused || !c.active || (c.paused = !0, S()), this
                        },
                        unpause: function() {
                            return c.paused && c.active ? (c.paused = !1, m(), T(), this) : this
                        },
                        updateContainerElements: function(e) {
                            var t = [].concat(e).filter(Boolean);
                            return c.containers = t.map((function(e) {
                                return "string" == typeof e ? o.querySelector(e) : e
                            })), c.active && m(), this
                        }
                    }).updateContainerElements(e), n
                }
        },
        6838: (e, t, n) => {
            n.r(t), n.d(t, {
                focusable: () => w,
                isFocusable: () => N,
                isTabbable: () => E,
                tabbable: () => g
            });
            var a = ["input", "select", "textarea", "a[href]", "button", "[tabindex]:not(slot)", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])', "details>summary:first-of-type", "details"],
                o = a.join(","),
                r = "undefined" == typeof Element,
                i = r ? function() {} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector,
                c = !r && Element.prototype.getRootNode ? function(e) {
                    return e.getRootNode()
                } : function(e) {
                    return e.ownerDocument
                },
                u = function(e, t, n) {
                    var a = Array.prototype.slice.apply(e.querySelectorAll(o));
                    return t && i.call(e, o) && a.unshift(e), a = a.filter(n)
                },
                s = function e(t, n, a) {
                    for (var r = [], c = Array.from(t); c.length;) {
                        var u = c.shift();
                        if ("SLOT" === u.tagName) {
                            var s = u.assignedElements(),
                                l = e(s.length ? s : u.children, !0, a);
                            a.flatten ? r.push.apply(r, l) : r.push({
                                scope: u,
                                candidates: l
                            })
                        } else {
                            i.call(u, o) && a.filter(u) && (n || !t.includes(u)) && r.push(u);
                            var f = u.shadowRoot || "function" == typeof a.getShadowRoot && a.getShadowRoot(u),
                                d = !a.shadowRootFilter || a.shadowRootFilter(u);
                            if (f && d) {
                                var b = e(!0 === f ? u.children : f.children, !0, a);
                                a.flatten ? r.push.apply(r, b) : r.push({
                                    scope: u,
                                    candidates: b
                                })
                            } else c.unshift.apply(c, u.children)
                        }
                    }
                    return r
                },
                l = function(e, t) {
                    return e.tabIndex < 0 && (t || /^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName) || e.isContentEditable) && isNaN(parseInt(e.getAttribute("tabindex"), 10)) ? 0 : e.tabIndex
                },
                f = function(e, t) {
                    return e.tabIndex === t.tabIndex ? e.documentOrder - t.documentOrder : e.tabIndex - t.tabIndex
                },
                d = function(e) {
                    return "INPUT" === e.tagName
                },
                b = function(e) {
                    return function(e) {
                        return d(e) && "radio" === e.type
                    }(e) && ! function(e) {
                        if (!e.name) return !0;
                        var t, n = e.form || c(e),
                            a = function(e) {
                                return n.querySelectorAll('input[type="radio"][name="' + e + '"]')
                            };
                        if ("undefined" != typeof window && void 0 !== window.CSS && "function" == typeof window.CSS.escape) t = a(window.CSS.escape(e.name));
                        else try {
                            t = a(e.name)
                        } catch (e) {
                            return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", e.message), !1
                        }
                        var o = function(e, t) {
                            for (var n = 0; n < e.length; n++)
                                if (e[n].checked && e[n].form === t) return e[n]
                        }(t, e.form);
                        return !o || o === e
                    }(e)
                },
                p = function(e) {
                    var t = e.getBoundingClientRect(),
                        n = t.width,
                        a = t.height;
                    return 0 === n && 0 === a
                },
                v = function(e, t) {
                    return !(t.disabled || function(e) {
                        return d(e) && "hidden" === e.type
                    }(t) || function(e, t) {
                        var n = t.displayCheck,
                            a = t.getShadowRoot;
                        if ("hidden" === getComputedStyle(e).visibility) return !0;
                        var o = i.call(e, "details>summary:first-of-type") ? e.parentElement : e;
                        if (i.call(o, "details:not([open]) *")) return !0;
                        var r = c(e).host,
                            u = (null == r ? void 0 : r.ownerDocument.contains(r)) || e.ownerDocument.contains(e);
                        if (n && "full" !== n) {
                            if ("non-zero-area" === n) return p(e)
                        } else {
                            if ("function" == typeof a) {
                                for (var s = e; e;) {
                                    var l = e.parentElement,
                                        f = c(e);
                                    if (l && !l.shadowRoot && !0 === a(l)) return p(e);
                                    e = e.assignedSlot ? e.assignedSlot : l || f === e.ownerDocument ? l : f.host
                                }
                                e = s
                            }
                            if (u) return !e.getClientRects().length
                        }
                        return !1
                    }(t, e) || function(e) {
                        return "DETAILS" === e.tagName && Array.prototype.slice.apply(e.children).some((function(e) {
                            return "SUMMARY" === e.tagName
                        }))
                    }(t) || function(e) {
                        if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))
                            for (var t = e.parentElement; t;) {
                                if ("FIELDSET" === t.tagName && t.disabled) {
                                    for (var n = 0; n < t.children.length; n++) {
                                        var a = t.children.item(n);
                                        if ("LEGEND" === a.tagName) return !!i.call(t, "fieldset[disabled] *") || !a.contains(e)
                                    }
                                    return !0
                                }
                                t = t.parentElement
                            }
                        return !1
                    }(t))
                },
                h = function(e, t) {
                    return !(b(t) || l(t) < 0 || !v(e, t))
                },
                m = function(e) {
                    var t = parseInt(e.getAttribute("tabindex"), 10);
                    return !!(isNaN(t) || t >= 0)
                },
                y = function e(t) {
                    var n = [],
                        a = [];
                    return t.forEach((function(t, o) {
                        var r = !!t.scope,
                            i = r ? t.scope : t,
                            c = l(i, r),
                            u = r ? e(t.candidates) : i;
                        0 === c ? r ? n.push.apply(n, u) : n.push(i) : a.push({
                            documentOrder: o,
                            tabIndex: c,
                            item: t,
                            isScope: r,
                            content: u
                        })
                    })), a.sort(f).reduce((function(e, t) {
                        return t.isScope ? e.push.apply(e, t.content) : e.push(t.content), e
                    }), []).concat(n)
                },
                g = function(e, t) {
                    var n;
                    return n = (t = t || {}).getShadowRoot ? s([e], t.includeContainer, {
                        filter: h.bind(null, t),
                        flatten: !1,
                        getShadowRoot: t.getShadowRoot,
                        shadowRootFilter: m
                    }) : u(e, t.includeContainer, h.bind(null, t)), y(n)
                },
                w = function(e, t) {
                    return (t = t || {}).getShadowRoot ? s([e], t.includeContainer, {
                        filter: v.bind(null, t),
                        flatten: !0,
                        getShadowRoot: t.getShadowRoot
                    }) : u(e, t.includeContainer, v.bind(null, t))
                },
                E = function(e, t) {
                    if (t = t || {}, !e) throw new Error("No node provided");
                    return !1 !== i.call(e, o) && h(t, e)
                },
                O = a.concat("iframe").join(","),
                N = function(e, t) {
                    if (t = t || {}, !e) throw new Error("No node provided");
                    return !1 !== i.call(e, O) && v(t, e)
                }
        }
    }
]);
//# sourceMappingURL=7853.chunk.147af4.js.map