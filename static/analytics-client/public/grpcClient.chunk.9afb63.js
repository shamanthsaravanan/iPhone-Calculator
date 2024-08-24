"use strict";
(self.webpackChunk_nike_analytics_client = self.webpackChunk_nike_analytics_client || []).push([
    [826, 200], {
        4093: (e, n, t) => {
            t.d(n, {
                grpcClient: () => xn
            });
            var r, i, s, o, a = t(2971),
                c = t(4531),
                m = t(9012),
                u = t(1623),
                l = t(9684),
                f = t(991);
            class d extends m.Q {
                constructor(e) {
                    super(), this.code = "", this.script = "", this.region = "", u.C.util.initPartial(e, this)
                }
                static fromBinary(e, n) {
                    return (new d).fromBinary(e, n)
                }
                static fromJson(e, n) {
                    return (new d).fromJson(e, n)
                }
                static fromJsonString(e, n) {
                    return (new d).fromJsonString(e, n)
                }
                static equals(e, n) {
                    return u.C.util.equals(d, e, n)
                }
            }
            d.runtime = u.C, d.typeName = "nike.clickstream.spec.v1.Language", d.fields = u.C.util.newFieldList((() => [{
                no: 1,
                name: "code",
                kind: "scalar",
                T: 9
            }, {
                no: 2,
                name: "script",
                kind: "scalar",
                T: 9
            }, {
                no: 3,
                name: "region",
                kind: "scalar",
                T: 9
            }]));
            class C extends m.Q {
                constructor(e) {
                    super(), this.value = "", u.C.util.initPartial(e, this)
                }
                static fromBinary(e, n) {
                    return (new C).fromBinary(e, n)
                }
                static fromJson(e, n) {
                    return (new C).fromJson(e, n)
                }
                static fromJsonString(e, n) {
                    return (new C).fromJsonString(e, n)
                }
                static equals(e, n) {
                    return u.C.util.equals(C, e, n)
                }
            }
            C.runtime = u.C, C.typeName = "nike.clickstream.core.identity.v1.UpmId", C.fields = u.C.util.newFieldList((() => [{
                no: 1,
                name: "value",
                kind: "scalar",
                T: 9
            }]));
            class _ extends m.Q {
                constructor(e) {
                    super(), this.method = r.UNSPECIFIED, u.C.util.initPartial(e, this)
                }
                static fromBinary(e, n) {
                    return (new _).fromBinary(e, n)
                }
                static fromJson(e, n) {
                    return (new _).fromJson(e, n)
                }
                static fromJsonString(e, n) {
                    return (new _).fromJsonString(e, n)
                }
                static equals(e, n) {
                    return u.C.util.equals(_, e, n)
                }
            }
            _.runtime = u.C, _.typeName = "nike.clickstream.core.identity.v1.UserSignedIn", _.fields = u.C.util.newFieldList((() => [{
                    no: 1,
                    name: "method",
                    kind: "enum",
                    T: u.C.getEnumType(r)
                }, {
                    no: 2,
                    name: "upm_id",
                    kind: "message",
                    T: C
                }])),
                function(e) {
                    e[e.UNSPECIFIED = 0] = "UNSPECIFIED", e[e.SIGNED_IN = 1] = "SIGNED_IN", e[e.SIGNED_IN_WITH_SSO = 2] = "SIGNED_IN_WITH_SSO", e[e.REGISTERED = 3] = "REGISTERED"
                }(r || (r = {})), u.C.util.setEnumType(r, "nike.clickstream.core.identity.v1.UserSignedIn.SignInMethod", [{
                    no: 0,
                    name: "SIGN_IN_METHOD_UNSPECIFIED"
                }, {
                    no: 1,
                    name: "SIGN_IN_METHOD_SIGNED_IN"
                }, {
                    no: 2,
                    name: "SIGN_IN_METHOD_SIGNED_IN_WITH_SSO"
                }, {
                    no: 3,
                    name: "SIGN_IN_METHOD_REGISTERED"
                }]);
            class T extends m.Q {
                constructor(e) {
                    super(), this.method = i.UNSPECIFIED, u.C.util.initPartial(e, this)
                }
                static fromBinary(e, n) {
                    return (new T).fromBinary(e, n)
                }
                static fromJson(e, n) {
                    return (new T).fromJson(e, n)
                }
                static fromJsonString(e, n) {
                    return (new T).fromJsonString(e, n)
                }
                static equals(e, n) {
                    return u.C.util.equals(T, e, n)
                }
            }
            T.runtime = u.C, T.typeName = "nike.clickstream.core.identity.v1.UserSignedOut", T.fields = u.C.util.newFieldList((() => [{
                    no: 1,
                    name: "method",
                    kind: "enum",
                    T: u.C.getEnumType(i)
                }, {
                    no: 2,
                    name: "upm_id",
                    kind: "message",
                    T: C
                }])),
                function(e) {
                    e[e.UNSPECIFIED = 0] = "UNSPECIFIED", e[e.SIGNED_OUT = 1] = "SIGNED_OUT", e[e.AUTHENTICATION_FAILED = 2] = "AUTHENTICATION_FAILED"
                }(i || (i = {})), u.C.util.setEnumType(i, "nike.clickstream.core.identity.v1.UserSignedOut.SignOutMethod", [{
                    no: 0,
                    name: "SIGN_OUT_METHOD_UNSPECIFIED"
                }, {
                    no: 1,
                    name: "SIGN_OUT_METHOD_SIGNED_OUT"
                }, {
                    no: 2,
                    name: "SIGN_OUT_METHOD_AUTHENTICATION_FAILED"
                }]);
            class k extends m.Q {
                constructor(e) {
                    super(), this.visitorId = "", u.C.util.initPartial(e, this)
                }
                static fromBinary(e, n) {
                    return (new k).fromBinary(e, n)
                }
                static fromJson(e, n) {
                    return (new k).fromJson(e, n)
                }
                static fromJsonString(e, n) {
                    return (new k).fromJsonString(e, n)
                }
                static equals(e, n) {
                    return u.C.util.equals(k, e, n)
                }
            }
            k.runtime = u.C, k.typeName = "nike.clickstream.event.v1.User", k.fields = u.C.util.newFieldList((() => [{
                no: 1,
                name: "visitor_id",
                kind: "scalar",
                T: 9
            }, {
                no: 2,
                name: "member",
                kind: "message",
                T: g
            }]));
            class g extends m.Q {
                constructor(e) {
                    super(), this.country = f.T.UNSPECIFIED, this.swooshEnabled = !1, u.C.util.initPartial(e, this)
                }
                static fromBinary(e, n) {
                    return (new g).fromBinary(e, n)
                }
                static fromJson(e, n) {
                    return (new g).fromJson(e, n)
                }
                static fromJsonString(e, n) {
                    return (new g).fromJsonString(e, n)
                }
                static equals(e, n) {
                    return u.C.util.equals(g, e, n)
                }
            }
            g.runtime = u.C, g.typeName = "nike.clickstream.event.v1.User.Member", g.fields = u.C.util.newFieldList((() => [{
                no: 1,
                name: "upm_id",
                kind: "message",
                T: C
            }, {
                no: 2,
                name: "country",
                kind: "enum",
                T: u.C.getEnumType(f.T)
            }, {
                no: 3,
                name: "swoosh_enabled",
                kind: "scalar",
                T: 8
            }]));
            class w extends m.Q {
                constructor(e) {
                    super(), this.value = "", u.C.util.initPartial(e, this)
                }
                static fromBinary(e, n) {
                    return (new w).fromBinary(e, n)
                }
                static fromJson(e, n) {
                    return (new w).fromJson(e, n)
                }
                static fromJsonString(e, n) {
                    return (new w).fromJsonString(e, n)
                }
                static equals(e, n) {
                    return u.C.util.equals(w, e, n)
                }
            }
            w.runtime = u.C, w.typeName = "nike.clickstream.spec.v1.SemanticVersion", w.fields = u.C.util.newFieldList((() => [{
                no: 1,
                name: "value",
                kind: "scalar",
                T: 9
            }]));
            class y extends m.Q {
                constructor(e) {
                    super(), this.app = s.UNSPECIFIED, this.advertisingId = "", u.C.util.initPartial(e, this)
                }
                static fromBinary(e, n) {
                    return (new y).fromBinary(e, n)
                }
                static fromJson(e, n) {
                    return (new y).fromJson(e, n)
                }
                static fromJsonString(e, n) {
                    return (new y).fromJsonString(e, n)
                }
                static equals(e, n) {
                    return u.C.util.equals(y, e, n)
                }
            }
            y.runtime = u.C, y.typeName = "nike.clickstream.event.v1.Mobile", y.fields = u.C.util.newFieldList((() => [{
                    no: 1,
                    name: "app",
                    kind: "enum",
                    T: u.C.getEnumType(s)
                }, {
                    no: 2,
                    name: "app_version",
                    kind: "message",
                    T: w
                }, {
                    no: 3,
                    name: "app_language",
                    kind: "message",
                    T: d
                }, {
                    no: 4,
                    name: "device",
                    kind: "message",
                    T: p
                }, {
                    no: 6,
                    name: "advertising_id",
                    kind: "scalar",
                    T: 9
                }])),
                function(e) {
                    e[e.UNSPECIFIED = 0] = "UNSPECIFIED", e[e.NIKEAPP = 1] = "NIKEAPP", e[e.SNKRS = 2] = "SNKRS", e[e.NRC = 3] = "NRC", e[e.NTC = 4] = "NTC"
                }(s || (s = {})), u.C.util.setEnumType(s, "nike.clickstream.event.v1.Mobile.App", [{
                    no: 0,
                    name: "APP_UNSPECIFIED"
                }, {
                    no: 1,
                    name: "APP_NIKEAPP"
                }, {
                    no: 2,
                    name: "APP_SNKRS"
                }, {
                    no: 3,
                    name: "APP_NRC"
                }, {
                    no: 4,
                    name: "APP_NTC"
                }]);
            class p extends m.Q {
                constructor(e) {
                    super(), this.os = o.UNSPECIFIED, this.manufacturer = "", this.model = "", u.C.util.initPartial(e, this)
                }
                static fromBinary(e, n) {
                    return (new p).fromBinary(e, n)
                }
                static fromJson(e, n) {
                    return (new p).fromJson(e, n)
                }
                static fromJsonString(e, n) {
                    return (new p).fromJsonString(e, n)
                }
                static equals(e, n) {
                    return u.C.util.equals(p, e, n)
                }
            }
            p.runtime = u.C, p.typeName = "nike.clickstream.event.v1.Mobile.Device", p.fields = u.C.util.newFieldList((() => [{
                    no: 1,
                    name: "os",
                    kind: "enum",
                    T: u.C.getEnumType(o)
                }, {
                    no: 2,
                    name: "os_version",
                    kind: "message",
                    T: w
                }, {
                    no: 3,
                    name: "manufacturer",
                    kind: "scalar",
                    T: 9
                }, {
                    no: 4,
                    name: "model",
                    kind: "scalar",
                    T: 9
                }])),
                function(e) {
                    e[e.UNSPECIFIED = 0] = "UNSPECIFIED", e[e.IOS = 1] = "IOS", e[e.WATCHOS = 2] = "WATCHOS", e[e.ANDROID = 3] = "ANDROID", e[e.WEAR_OS = 4] = "WEAR_OS"
                }(o || (o = {})), u.C.util.setEnumType(o, "nike.clickstream.event.v1.Mobile.Device.OperatingSystem", [{
                    no: 0,
                    name: "OPERATING_SYSTEM_UNSPECIFIED"
                }, {
                    no: 1,
                    name: "OPERATING_SYSTEM_IOS"
                }, {
                    no: 2,
                    name: "OPERATING_SYSTEM_WATCHOS"
                }, {
                    no: 3,
                    name: "OPERATING_SYSTEM_ANDROID"
                }, {
                    no: 4,
                    name: "OPERATING_SYSTEM_WEAR_OS"
                }]);
            var S = t(9754);
            class E extends m.Q {
                constructor(e) {
                    super(), this.sessionId = "", this.country = f.T.UNSPECIFIED, this.deviceId = "", this.platform = {
                        case: void 0
                    }, u.C.util.initPartial(e, this)
                }
                static fromBinary(e, n) {
                    return (new E).fromBinary(e, n)
                }
                static fromJson(e, n) {
                    return (new E).fromJson(e, n)
                }
                static fromJsonString(e, n) {
                    return (new E).fromJsonString(e, n)
                }
                static equals(e, n) {
                    return u.C.util.equals(E, e, n)
                }
            }
            E.runtime = u.C, E.typeName = "nike.clickstream.event.v1.Session", E.fields = u.C.util.newFieldList((() => [{
                no: 1,
                name: "session_id",
                kind: "scalar",
                T: 9
            }, {
                no: 2,
                name: "country",
                kind: "enum",
                T: u.C.getEnumType(f.T)
            }, {
                no: 3,
                name: "language",
                kind: "message",
                T: d
            }, {
                no: 4,
                name: "device_id",
                kind: "scalar",
                T: 9
            }, {
                no: 5,
                name: "user",
                kind: "message",
                T: k
            }, {
                no: 6,
                name: "mobile",
                kind: "message",
                T: y,
                oneof: "platform"
            }, {
                no: 7,
                name: "web",
                kind: "message",
                T: S.Nc,
                oneof: "platform"
            }]));
            var J, I, N = t(453),
                h = t(8594);
            class B extends m.Q {
                constructor(e) {
                    super(), this.location = J.LOCATION_UNSPECIFIED, this.itemCount = 0, u.C.util.initPartial(e, this)
                }
                static fromBinary(e, n) {
                    return (new B).fromBinary(e, n)
                }
                static fromJson(e, n) {
                    return (new B).fromJson(e, n)
                }
                static fromJsonString(e, n) {
                    return (new B).fromJsonString(e, n)
                }
                static equals(e, n) {
                    return u.C.util.equals(B, e, n)
                }
            }
            B.runtime = u.C, B.typeName = "nike.clickstream.component.commerce.product_recommendations.v1.Collection", B.fields = u.C.util.newFieldList((() => [{
                    no: 1,
                    name: "location",
                    kind: "enum",
                    T: u.C.getEnumType(J)
                }, {
                    no: 2,
                    name: "model",
                    kind: "message",
                    T: v
                }, {
                    no: 3,
                    name: "item_count",
                    kind: "scalar",
                    T: 13
                }])),
                function(e) {
                    e[e.LOCATION_UNSPECIFIED = 0] = "LOCATION_UNSPECIFIED", e[e.LOCATION_404_MAIN = 1] = "LOCATION_404_MAIN", e[e.LOCATION_CART_MAIN = 2] = "LOCATION_CART_MAIN", e[e.LOCATION_FAVORITES_MAIN = 3] = "LOCATION_FAVORITES_MAIN", e[e.LOCATION_PDP_MAIN = 4] = "LOCATION_PDP_MAIN", e[e.LOCATION_SEARCH_EMPTY = 5] = "LOCATION_SEARCH_EMPTY", e[e.LOCATION_SHOP_HOME_MAIN = 6] = "LOCATION_SHOP_HOME_MAIN", e[e.LOCATION_STREAMS_MAIN = 7] = "LOCATION_STREAMS_MAIN"
                }(J || (J = {})), u.C.util.setEnumType(J, "nike.clickstream.component.commerce.product_recommendations.v1.Collection.Location", [{
                    no: 0,
                    name: "LOCATION_UNSPECIFIED"
                }, {
                    no: 1,
                    name: "LOCATION_404_MAIN"
                }, {
                    no: 2,
                    name: "LOCATION_CART_MAIN"
                }, {
                    no: 3,
                    name: "LOCATION_FAVORITES_MAIN"
                }, {
                    no: 4,
                    name: "LOCATION_PDP_MAIN"
                }, {
                    no: 5,
                    name: "LOCATION_SEARCH_EMPTY"
                }, {
                    no: 6,
                    name: "LOCATION_SHOP_HOME_MAIN"
                }, {
                    no: 7,
                    name: "LOCATION_STREAMS_MAIN"
                }]);
            class v extends m.Q {
                constructor(e) {
                    super(), this.id = "", this.version = "", u.C.util.initPartial(e, this)
                }
                static fromBinary(e, n) {
                    return (new v).fromBinary(e, n)
                }
                static fromJson(e, n) {
                    return (new v).fromJson(e, n)
                }
                static fromJsonString(e, n) {
                    return (new v).fromJsonString(e, n)
                }
                static equals(e, n) {
                    return u.C.util.equals(v, e, n)
                }
            }
            v.runtime = u.C, v.typeName = "nike.clickstream.component.commerce.product_recommendations.v1.Collection.Model", v.fields = u.C.util.newFieldList((() => [{
                no: 1,
                name: "id",
                kind: "scalar",
                T: 9
            }, {
                no: 2,
                name: "version",
                kind: "scalar",
                T: 9
            }]));
            class P extends m.Q {
                constructor(e) {
                    super(), this.index = 0, this.underlyingItem = {
                        case: void 0
                    }, u.C.util.initPartial(e, this)
                }
                static fromBinary(e, n) {
                    return (new P).fromBinary(e, n)
                }
                static fromJson(e, n) {
                    return (new P).fromJson(e, n)
                }
                static fromJsonString(e, n) {
                    return (new P).fromJsonString(e, n)
                }
                static equals(e, n) {
                    return u.C.util.equals(P, e, n)
                }
            }
            P.runtime = u.C, P.typeName = "nike.clickstream.component.commerce.product_recommendations.v1.CollectionItem", P.fields = u.C.util.newFieldList((() => [{
                no: 1,
                name: "collection",
                kind: "message",
                T: B
            }, {
                no: 2,
                name: "index",
                kind: "scalar",
                T: 13
            }, {
                no: 16,
                name: "product",
                kind: "message",
                T: h.Yt,
                oneof: "underlying_item"
            }]));
            class O extends m.Q {
                constructor(e) {
                    super(), this.placeholder = !1, u.C.util.initPartial(e, this)
                }
                static fromBinary(e, n) {
                    return (new O).fromBinary(e, n)
                }
                static fromJson(e, n) {
                    return (new O).fromJson(e, n)
                }
                static fromJsonString(e, n) {
                    return (new O).fromJsonString(e, n)
                }
                static equals(e, n) {
                    return u.C.util.equals(O, e, n)
                }
            }
            O.runtime = u.C, O.typeName = "nike.clickstream.component.commerce.product_recommendations.v1.ComponentContext", O.fields = u.C.util.newFieldList((() => [{
                no: 1,
                name: "placeholder",
                kind: "scalar",
                T: 8
            }]));
            class L extends m.Q {
                constructor(e) {
                    super(), u.C.util.initPartial(e, this)
                }
                static fromBinary(e, n) {
                    return (new L).fromBinary(e, n)
                }
                static fromJson(e, n) {
                    return (new L).fromJson(e, n)
                }
                static fromJsonString(e, n) {
                    return (new L).fromJsonString(e, n)
                }
                static equals(e, n) {
                    return u.C.util.equals(L, e, n)
                }
            }
            L.runtime = u.C, L.typeName = "nike.clickstream.component.commerce.product_recommendations.v1.CollectionItemClicked", L.fields = u.C.util.newFieldList((() => [{
                no: 1,
                name: "collection_item",
                kind: "message",
                T: P
            }]));
            class q extends m.Q {
                constructor(e) {
                    super(), u.C.util.initPartial(e, this)
                }
                static fromBinary(e, n) {
                    return (new q).fromBinary(e, n)
                }
                static fromJson(e, n) {
                    return (new q).fromJson(e, n)
                }
                static fromJsonString(e, n) {
                    return (new q).fromJsonString(e, n)
                }
                static equals(e, n) {
                    return u.C.util.equals(q, e, n)
                }
            }
            q.runtime = u.C, q.typeName = "nike.clickstream.component.commerce.product_recommendations.v1.CollectionItemViewed", q.fields = u.C.util.newFieldList((() => [{
                no: 1,
                name: "collection_item",
                kind: "message",
                T: P
            }]));
            class A extends m.Q {
                constructor(e) {
                    super(), u.C.util.initPartial(e, this)
                }
                static fromBinary(e, n) {
                    return (new A).fromBinary(e, n)
                }
                static fromJson(e, n) {
                    return (new A).fromJson(e, n)
                }
                static fromJsonString(e, n) {
                    return (new A).fromJsonString(e, n)
                }
                static equals(e, n) {
                    return u.C.util.equals(A, e, n)
                }
            }
            A.runtime = u.C, A.typeName = "nike.clickstream.component.commerce.product_recommendations.v1.CollectionViewed", A.fields = u.C.util.newFieldList((() => [{
                no: 1,
                name: "collection",
                kind: "message",
                T: B
            }]));
            class F extends m.Q {
                constructor(e) {
                    super(), u.C.util.initPartial(e, this)
                }
                static fromBinary(e, n) {
                    return (new F).fromBinary(e, n)
                }
                static fromJson(e, n) {
                    return (new F).fromJson(e, n)
                }
                static fromJsonString(e, n) {
                    return (new F).fromJsonString(e, n)
                }
                static equals(e, n) {
                    return u.C.util.equals(F, e, n)
                }
            }
            F.runtime = u.C, F.typeName = "nike.clickstream.component.commerce.product_recommendations.v1.ComponentViewed", F.fields = u.C.util.newFieldList((() => [{
                no: 1,
                name: "context",
                kind: "message",
                T: O
            }]));
            class U extends m.Q {
                constructor(e) {
                    super(), this.placeholder = !1, u.C.util.initPartial(e, this)
                }
                static fromBinary(e, n) {
                    return (new U).fromBinary(e, n)
                }
                static fromJson(e, n) {
                    return (new U).fromJson(e, n)
                }
                static fromJsonString(e, n) {
                    return (new U).fromJsonString(e, n)
                }
                static equals(e, n) {
                    return u.C.util.equals(U, e, n)
                }
            }
            U.runtime = u.C, U.typeName = "nike.clickstream.component.commerce.search.v1.ComponentContext", U.fields = u.C.util.newFieldList((() => [{
                no: 1,
                name: "placeholder",
                kind: "scalar",
                T: 8
            }]));
            class x extends m.Q {
                constructor(e) {
                    super(), this.itemCount = 0, this.underlyingCollection = {
                        case: void 0
                    }, u.C.util.initPartial(e, this)
                }
                static fromBinary(e, n) {
                    return (new x).fromBinary(e, n)
                }
                static fromJson(e, n) {
                    return (new x).fromJson(e, n)
                }
                static fromJsonString(e, n) {
                    return (new x).fromJsonString(e, n)
                }
                static equals(e, n) {
                    return u.C.util.equals(x, e, n)
                }
            }
            x.runtime = u.C, x.typeName = "nike.clickstream.component.commerce.search.v1.Collection", x.fields = u.C.util.newFieldList((() => [{
                no: 1,
                name: "item_count",
                kind: "scalar",
                T: 13
            }, {
                no: 16,
                name: "search_preview",
                kind: "message",
                T: D,
                oneof: "underlying_collection"
            }]));
            class D extends m.Q {
                constructor(e) {
                    super(), this.searchTerms = "", this.searchText = "", u.C.util.initPartial(e, this)
                }
                static fromBinary(e, n) {
                    return (new D).fromBinary(e, n)
                }
                static fromJson(e, n) {
                    return (new D).fromJson(e, n)
                }
                static fromJsonString(e, n) {
                    return (new D).fromJsonString(e, n)
                }
                static equals(e, n) {
                    return u.C.util.equals(D, e, n)
                }
            }
            D.runtime = u.C, D.typeName = "nike.clickstream.component.commerce.search.v1.Collection.SearchPreview", D.fields = u.C.util.newFieldList((() => [{
                no: 1,
                name: "search_terms",
                kind: "scalar",
                T: 9
            }, {
                no: 3,
                name: "search_text",
                kind: "scalar",
                T: 9
            }]));
            class M extends m.Q {
                constructor(e) {
                    super(), this.index = 0, this.underlyingItem = {
                        case: void 0
                    }, u.C.util.initPartial(e, this)
                }
                static fromBinary(e, n) {
                    return (new M).fromBinary(e, n)
                }
                static fromJson(e, n) {
                    return (new M).fromJson(e, n)
                }
                static fromJsonString(e, n) {
                    return (new M).fromJsonString(e, n)
                }
                static equals(e, n) {
                    return u.C.util.equals(M, e, n)
                }
            }
            M.runtime = u.C, M.typeName = "nike.clickstream.component.commerce.search.v1.CollectionItem", M.fields = u.C.util.newFieldList((() => [{
                no: 1,
                name: "collection",
                kind: "message",
                T: x
            }, {
                no: 2,
                name: "index",
                kind: "scalar",
                T: 13
            }, {
                no: 16,
                name: "product",
                kind: "message",
                T: h.Yt,
                oneof: "underlying_item"
            }]));
            class Q extends m.Q {
                constructor(e) {
                    super(), u.C.util.initPartial(e, this)
                }
                static fromBinary(e, n) {
                    return (new Q).fromBinary(e, n)
                }
                static fromJson(e, n) {
                    return (new Q).fromJson(e, n)
                }
                static fromJsonString(e, n) {
                    return (new Q).fromJsonString(e, n)
                }
                static equals(e, n) {
                    return u.C.util.equals(Q, e, n)
                }
            }
            Q.runtime = u.C, Q.typeName = "nike.clickstream.component.commerce.search.v1.CollectionItemClicked", Q.fields = u.C.util.newFieldList((() => [{
                no: 1,
                name: "collection_item",
                kind: "message",
                T: M
            }]));
            class R extends m.Q {
                constructor(e) {
                    super(), u.C.util.initPartial(e, this)
                }
                static fromBinary(e, n) {
                    return (new R).fromBinary(e, n)
                }
                static fromJson(e, n) {
                    return (new R).fromJson(e, n)
                }
                static fromJsonString(e, n) {
                    return (new R).fromJsonString(e, n)
                }
                static equals(e, n) {
                    return u.C.util.equals(R, e, n)
                }
            }
            R.runtime = u.C, R.typeName = "nike.clickstream.component.commerce.search.v1.CollectionItemViewed", R.fields = u.C.util.newFieldList((() => [{
                no: 1,
                name: "collection_item",
                kind: "message",
                T: M
            }]));
            class H extends m.Q {
                constructor(e) {
                    super(), u.C.util.initPartial(e, this)
                }
                static fromBinary(e, n) {
                    return (new H).fromBinary(e, n)
                }
                static fromJson(e, n) {
                    return (new H).fromJson(e, n)
                }
                static fromJsonString(e, n) {
                    return (new H).fromJsonString(e, n)
                }
                static equals(e, n) {
                    return u.C.util.equals(H, e, n)
                }
            }
            H.runtime = u.C, H.typeName = "nike.clickstream.component.commerce.search.v1.CollectionViewed", H.fields = u.C.util.newFieldList((() => [{
                no: 1,
                name: "collection",
                kind: "message",
                T: x
            }]));
            class G extends m.Q {
                constructor(e) {
                    super(), u.C.util.initPartial(e, this)
                }
                static fromBinary(e, n) {
                    return (new G).fromBinary(e, n)
                }
                static fromJson(e, n) {
                    return (new G).fromJson(e, n)
                }
                static fromJsonString(e, n) {
                    return (new G).fromJsonString(e, n)
                }
                static equals(e, n) {
                    return u.C.util.equals(G, e, n)
                }
            }
            G.runtime = u.C, G.typeName = "nike.clickstream.component.commerce.search.v1.ComponentViewed", G.fields = u.C.util.newFieldList((() => [{
                no: 1,
                name: "context",
                kind: "message",
                T: U
            }]));
            class K extends m.Q {
                constructor(e) {
                    super(), this.cpCode = "", this.commId = "", u.C.util.initPartial(e, this)
                }
                static fromBinary(e, n) {
                    return (new K).fromBinary(e, n)
                }
                static fromJson(e, n) {
                    return (new K).fromJson(e, n)
                }
                static fromJsonString(e, n) {
                    return (new K).fromJsonString(e, n)
                }
                static equals(e, n) {
                    return u.C.util.equals(K, e, n)
                }
            }
            K.runtime = u.C, K.typeName = "nike.clickstream.core.marketing.v1.Attribution", K.fields = u.C.util.newFieldList((() => [{
                no: 2,
                name: "cp_code",
                kind: "scalar",
                T: 9
            }, {
                no: 1,
                name: "comm_id",
                kind: "scalar",
                T: 9
            }]));
            class b extends m.Q {
                constructor(e) {
                    super(), this.url = "", this.referrer = "", u.C.util.initPartial(e, this)
                }
                static fromBinary(e, n) {
                    return (new b).fromBinary(e, n)
                }
                static fromJson(e, n) {
                    return (new b).fromJson(e, n)
                }
                static fromJsonString(e, n) {
                    return (new b).fromJsonString(e, n)
                }
                static equals(e, n) {
                    return u.C.util.equals(b, e, n)
                }
            }
            b.runtime = u.C, b.typeName = "nike.clickstream.core.app.v1.DeepLink", b.fields = u.C.util.newFieldList((() => [{
                no: 1,
                name: "url",
                kind: "scalar",
                T: 9
            }, {
                no: 2,
                name: "referrer",
                kind: "scalar",
                T: 9
            }, {
                no: 3,
                name: "attribution",
                kind: "message",
                T: K
            }]));
            class V extends m.Q {
                constructor(e) {
                    super(), this.content = {
                        case: void 0
                    }, u.C.util.initPartial(e, this)
                }
                static fromBinary(e, n) {
                    return (new V).fromBinary(e, n)
                }
                static fromJson(e, n) {
                    return (new V).fromJson(e, n)
                }
                static fromJsonString(e, n) {
                    return (new V).fromJsonString(e, n)
                }
                static equals(e, n) {
                    return u.C.util.equals(V, e, n)
                }
            }
            V.runtime = u.C, V.typeName = "nike.clickstream.core.app.v1.LocalNotification", V.fields = u.C.util.newFieldList((() => [{
                no: 4,
                name: "launch",
                kind: "message",
                T: Y,
                oneof: "content"
            }]));
            class Y extends m.Q {
                constructor(e) {
                    super(), this.launchId = "", u.C.util.initPartial(e, this)
                }
                static fromBinary(e, n) {
                    return (new Y).fromBinary(e, n)
                }
                static fromJson(e, n) {
                    return (new Y).fromJson(e, n)
                }
                static fromJsonString(e, n) {
                    return (new Y).fromJsonString(e, n)
                }
                static equals(e, n) {
                    return u.C.util.equals(Y, e, n)
                }
            }
            Y.runtime = u.C, Y.typeName = "nike.clickstream.core.app.v1.LocalNotification.Launch", Y.fields = u.C.util.newFieldList((() => [{
                no: 1,
                name: "launch_id",
                kind: "scalar",
                T: 9
            }, {
                no: 2,
                name: "product_code",
                kind: "message",
                T: h.Hx
            }]));
            class W extends m.Q {
                constructor(e) {
                    super(), u.C.util.initPartial(e, this)
                }
                static fromBinary(e, n) {
                    return (new W).fromBinary(e, n)
                }
                static fromJson(e, n) {
                    return (new W).fromJson(e, n)
                }
                static fromJsonString(e, n) {
                    return (new W).fromJsonString(e, n)
                }
                static equals(e, n) {
                    return u.C.util.equals(W, e, n)
                }
            }
            W.runtime = u.C, W.typeName = "nike.clickstream.core.app.v1.PushNotification", W.fields = u.C.util.newFieldList((() => [{
                no: 1,
                name: "attribution",
                kind: "message",
                T: K
            }]));
            class X extends m.Q {
                constructor(e) {
                    super(), this.state = I.UNSPECIFIED, u.C.util.initPartial(e, this)
                }
                static fromBinary(e, n) {
                    return (new X).fromBinary(e, n)
                }
                static fromJson(e, n) {
                    return (new X).fromJson(e, n)
                }
                static fromJsonString(e, n) {
                    return (new X).fromJsonString(e, n)
                }
                static equals(e, n) {
                    return u.C.util.equals(X, e, n)
                }
            }
            X.runtime = u.C, X.typeName = "nike.clickstream.core.app.v1.AppStateModified", X.fields = u.C.util.newFieldList((() => [{
                    no: 1,
                    name: "state",
                    kind: "enum",
                    T: u.C.getEnumType(I)
                }])),
                function(e) {
                    e[e.UNSPECIFIED = 0] = "UNSPECIFIED", e[e.BACKGROUNDED = 1] = "BACKGROUNDED", e[e.FOREGROUNDED = 2] = "FOREGROUNDED", e[e.LAUNCHED = 3] = "LAUNCHED"
                }(I || (I = {})), u.C.util.setEnumType(I, "nike.clickstream.core.app.v1.AppStateModified.State", [{
                    no: 0,
                    name: "STATE_UNSPECIFIED"
                }, {
                    no: 1,
                    name: "STATE_BACKGROUNDED"
                }, {
                    no: 2,
                    name: "STATE_FOREGROUNDED"
                }, {
                    no: 3,
                    name: "STATE_LAUNCHED"
                }]);
            class j extends m.Q {
                constructor(e) {
                    super(), this.launchOption = {
                        case: void 0
                    }, u.C.util.initPartial(e, this)
                }
                static fromBinary(e, n) {
                    return (new j).fromBinary(e, n)
                }
                static fromJson(e, n) {
                    return (new j).fromJson(e, n)
                }
                static fromJsonString(e, n) {
                    return (new j).fromJsonString(e, n)
                }
                static equals(e, n) {
                    return u.C.util.equals(j, e, n)
                }
            }
            j.runtime = u.C, j.typeName = "nike.clickstream.core.app.v1.LaunchOptionOpened", j.fields = u.C.util.newFieldList((() => [{
                no: 1,
                name: "deep_link",
                kind: "message",
                T: b,
                oneof: "launch_option"
            }, {
                no: 2,
                name: "local_notification",
                kind: "message",
                T: V,
                oneof: "launch_option"
            }, {
                no: 3,
                name: "push_notification",
                kind: "message",
                T: W,
                oneof: "launch_option"
            }]));
            var z = t(1831),
                Z = t(7682),
                $ = t(1818),
                ee = t(8861);
            class ne extends m.Q {
                constructor(e) {
                    super(), this.cartId = "", this.items = [], this.promoCodes = [], this.currency = $.Currency.UNSPECIFIED, u.C.util.initPartial(e, this)
                }
                static fromBinary(e, n) {
                    return (new ne).fromBinary(e, n)
                }
                static fromJson(e, n) {
                    return (new ne).fromJson(e, n)
                }
                static fromJsonString(e, n) {
                    return (new ne).fromJsonString(e, n)
                }
                static equals(e, n) {
                    return u.C.util.equals(ne, e, n)
                }
            }
            ne.runtime = u.C, ne.typeName = "nike.clickstream.core.commerce.v1.Cart", ne.fields = u.C.util.newFieldList((() => [{
                no: 1,
                name: "cart_id",
                kind: "scalar",
                T: 9
            }, {
                no: 2,
                name: "items",
                kind: "message",
                T: z.yu,
                repeated: !0
            }, {
                no: 9,
                name: "promo_codes",
                kind: "message",
                T: Z.r,
                repeated: !0
            }, {
                no: 10,
                name: "currency",
                kind: "enum",
                T: u.C.getEnumType($.Currency)
            }, {
                no: 11,
                name: "subtotal",
                kind: "message",
                T: ee.J
            }, {
                no: 12,
                name: "discount",
                kind: "message",
                T: ee.J
            }, {
                no: 13,
                name: "total",
                kind: "message",
                T: ee.J
            }]));
            class te extends m.Q {
                constructor(e) {
                    super(), this.cartId = "", this.operation = {
                        case: void 0
                    }, u.C.util.initPartial(e, this)
                }
                static fromBinary(e, n) {
                    return (new te).fromBinary(e, n)
                }
                static fromJson(e, n) {
                    return (new te).fromJson(e, n)
                }
                static fromJsonString(e, n) {
                    return (new te).fromJsonString(e, n)
                }
                static equals(e, n) {
                    return u.C.util.equals(te, e, n)
                }
            }
            te.runtime = u.C, te.typeName = "nike.clickstream.core.commerce.v1.CartModified", te.fields = u.C.util.newFieldList((() => [{
                no: 1,
                name: "cart_id",
                kind: "scalar",
                T: 9
            }, {
                no: 2,
                name: "item_added",
                kind: "message",
                T: z.yu,
                oneof: "operation"
            }, {
                no: 3,
                name: "item_removed",
                kind: "message",
                T: z.yu,
                oneof: "operation"
            }, {
                no: 4,
                name: "item_updated",
                kind: "message",
                T: z.yu,
                oneof: "operation"
            }, {
                no: 5,
                name: "promo_code_added",
                kind: "message",
                T: Z.r,
                oneof: "operation"
            }, {
                no: 6,
                name: "promo_code_removed",
                kind: "message",
                T: Z.r,
                oneof: "operation"
            }]));
            var re = t(1061);
            class ie extends m.Q {
                constructor(e) {
                    super(), this.items = [], this.payments = [], this.promoCodes = [], this.currency = $.Currency.UNSPECIFIED, u.C.util.initPartial(e, this)
                }
                static fromBinary(e, n) {
                    return (new ie).fromBinary(e, n)
                }
                static fromJson(e, n) {
                    return (new ie).fromJson(e, n)
                }
                static fromJsonString(e, n) {
                    return (new ie).fromJsonString(e, n)
                }
                static equals(e, n) {
                    return u.C.util.equals(ie, e, n)
                }
            }
            ie.runtime = u.C, ie.typeName = "nike.clickstream.core.commerce.v1.Order", ie.fields = u.C.util.newFieldList((() => [{
                no: 1,
                name: "order_id",
                kind: "message",
                T: se
            }, {
                no: 2,
                name: "items",
                kind: "message",
                T: z.yu,
                repeated: !0
            }, {
                no: 3,
                name: "payments",
                kind: "message",
                T: re.p2,
                repeated: !0
            }, {
                no: 9,
                name: "promo_codes",
                kind: "message",
                T: Z.r,
                repeated: !0
            }, {
                no: 10,
                name: "currency",
                kind: "enum",
                T: u.C.getEnumType($.Currency)
            }, {
                no: 11,
                name: "subtotal",
                kind: "message",
                T: ee.J
            }, {
                no: 12,
                name: "discount",
                kind: "message",
                T: ee.J
            }, {
                no: 13,
                name: "shipping",
                kind: "message",
                T: ee.J
            }, {
                no: 14,
                name: "tax",
                kind: "message",
                T: ee.J
            }, {
                no: 15,
                name: "total",
                kind: "message",
                T: ee.J
            }]));
            class se extends m.Q {
                constructor(e) {
                    super(), this.value = "", u.C.util.initPartial(e, this)
                }
                static fromBinary(e, n) {
                    return (new se).fromBinary(e, n)
                }
                static fromJson(e, n) {
                    return (new se).fromJson(e, n)
                }
                static fromJsonString(e, n) {
                    return (new se).fromJsonString(e, n)
                }
                static equals(e, n) {
                    return u.C.util.equals(se, e, n)
                }
            }
            se.runtime = u.C, se.typeName = "nike.clickstream.core.commerce.v1.OrderId", se.fields = u.C.util.newFieldList((() => [{
                no: 1,
                name: "value",
                kind: "scalar",
                T: 9
            }]));
            class oe extends m.Q {
                constructor(e) {
                    super(), u.C.util.initPartial(e, this)
                }
                static fromBinary(e, n) {
                    return (new oe).fromBinary(e, n)
                }
                static fromJson(e, n) {
                    return (new oe).fromJson(e, n)
                }
                static fromJsonString(e, n) {
                    return (new oe).fromJsonString(e, n)
                }
                static equals(e, n) {
                    return u.C.util.equals(oe, e, n)
                }
            }
            oe.runtime = u.C, oe.typeName = "nike.clickstream.core.commerce.v1.OrderCanceled", oe.fields = u.C.util.newFieldList((() => [{
                no: 1,
                name: "order_id",
                kind: "message",
                T: se
            }]));
            class ae extends m.Q {
                constructor(e) {
                    super(), this.checkoutId = "", u.C.util.initPartial(e, this)
                }
                static fromBinary(e, n) {
                    return (new ae).fromBinary(e, n)
                }
                static fromJson(e, n) {
                    return (new ae).fromJson(e, n)
                }
                static fromJsonString(e, n) {
                    return (new ae).fromJsonString(e, n)
                }
                static equals(e, n) {
                    return u.C.util.equals(ae, e, n)
                }
            }
            ae.runtime = u.C, ae.typeName = "nike.clickstream.core.commerce.v1.OrderCreated", ae.fields = u.C.util.newFieldList((() => [{
                no: 1,
                name: "order",
                kind: "message",
                T: ie
            }, {
                no: 2,
                name: "checkout_id",
                kind: "scalar",
                T: 9
            }]));
            var ce, me = t(3069);
            ! function(e) {
                e[e.UNSPECIFIED = 0] = "UNSPECIFIED", e[e.CHECKOUT_BUTTON = 1] = "CHECKOUT_BUTTON", e[e.GO_TO_CHECKOUT_BUTTON = 2] = "GO_TO_CHECKOUT_BUTTON", e[e.GUEST_CHECKOUT_BUTTON = 3] = "GUEST_CHECKOUT_BUTTON", e[e.MEMBER_CHECKOUT_BUTTON = 4] = "MEMBER_CHECKOUT_BUTTON", e[e.PAYPAL_BUTTON = 5] = "PAYPAL_BUTTON"
            }(ce || (ce = {})), u.C.util.setEnumType(ce, "nike.clickstream.surface.commerce.cart.v1.ClickableItem", [{
                no: 0,
                name: "CLICKABLE_ITEM_UNSPECIFIED"
            }, {
                no: 1,
                name: "CLICKABLE_ITEM_CHECKOUT_BUTTON"
            }, {
                no: 2,
                name: "CLICKABLE_ITEM_GO_TO_CHECKOUT_BUTTON"
            }, {
                no: 3,
                name: "CLICKABLE_ITEM_GUEST_CHECKOUT_BUTTON"
            }, {
                no: 4,
                name: "CLICKABLE_ITEM_MEMBER_CHECKOUT_BUTTON"
            }, {
                no: 5,
                name: "CLICKABLE_ITEM_PAYPAL_BUTTON"
            }]);
            class ue extends m.Q {
                constructor(e) {
                    super(), u.C.util.initPartial(e, this)
                }
                static fromBinary(e, n) {
                    return (new ue).fromBinary(e, n)
                }
                static fromJson(e, n) {
                    return (new ue).fromJson(e, n)
                }
                static fromJsonString(e, n) {
                    return (new ue).fromJsonString(e, n)
                }
                static equals(e, n) {
                    return u.C.util.equals(ue, e, n)
                }
            }
            ue.runtime = u.C, ue.typeName = "nike.clickstream.surface.commerce.cart.v1.SurfaceContext", ue.fields = u.C.util.newFieldList((() => [{
                no: 1,
                name: "cart",
                kind: "message",
                T: ne
            }]));
            class le extends m.Q {
                constructor(e) {
                    super(), this.item = ce.UNSPECIFIED, u.C.util.initPartial(e, this)
                }
                static fromBinary(e, n) {
                    return (new le).fromBinary(e, n)
                }
                static fromJson(e, n) {
                    return (new le).fromJson(e, n)
                }
                static fromJsonString(e, n) {
                    return (new le).fromJsonString(e, n)
                }
                static equals(e, n) {
                    return u.C.util.equals(le, e, n)
                }
            }
            le.runtime = u.C, le.typeName = "nike.clickstream.surface.commerce.cart.v1.ItemClicked", le.fields = u.C.util.newFieldList((() => [{
                no: 1,
                name: "item",
                kind: "enum",
                T: u.C.getEnumType(ce)
            }]));
            class fe extends m.Q {
                constructor(e) {
                    super(), u.C.util.initPartial(e, this)
                }
                static fromBinary(e, n) {
                    return (new fe).fromBinary(e, n)
                }
                static fromJson(e, n) {
                    return (new fe).fromJson(e, n)
                }
                static fromJsonString(e, n) {
                    return (new fe).fromJsonString(e, n)
                }
                static equals(e, n) {
                    return u.C.util.equals(fe, e, n)
                }
            }
            fe.runtime = u.C, fe.typeName = "nike.clickstream.surface.commerce.cart.v1.SurfaceViewed", fe.fields = u.C.util.newFieldList((() => [{
                no: 1,
                name: "context",
                kind: "message",
                T: ue
            }]));
            var de, Ce, _e, Te, ke, ge, we = t(5037);
            ! function(e) {
                e[e.UNSPECIFIED = 0] = "UNSPECIFIED", e[e.SUBMIT_BUTTON = 1] = "SUBMIT_BUTTON"
            }(de || (de = {})), u.C.util.setEnumType(de, "nike.clickstream.surface.commerce.checkout.v1.ClickableItem", [{
                    no: 0,
                    name: "CLICKABLE_ITEM_UNSPECIFIED"
                }, {
                    no: 1,
                    name: "CLICKABLE_ITEM_SUBMIT_BUTTON"
                }]),
                function(e) {
                    e[e.UNSPECIFIED = 0] = "UNSPECIFIED", e[e.ORDER_CONFIRMATION = 1] = "ORDER_CONFIRMATION"
                }(Ce || (Ce = {})), u.C.util.setEnumType(Ce, "nike.clickstream.surface.commerce.checkout.v1.ViewableItem", [{
                    no: 0,
                    name: "VIEWABLE_ITEM_UNSPECIFIED"
                }, {
                    no: 1,
                    name: "VIEWABLE_ITEM_ORDER_CONFIRMATION"
                }]);
            class ye extends m.Q {
                constructor(e) {
                    super(), u.C.util.initPartial(e, this)
                }
                static fromBinary(e, n) {
                    return (new ye).fromBinary(e, n)
                }
                static fromJson(e, n) {
                    return (new ye).fromJson(e, n)
                }
                static fromJsonString(e, n) {
                    return (new ye).fromJsonString(e, n)
                }
                static equals(e, n) {
                    return u.C.util.equals(ye, e, n)
                }
            }
            ye.runtime = u.C, ye.typeName = "nike.clickstream.surface.commerce.checkout.v1.SurfaceContext", ye.fields = u.C.util.newFieldList((() => [{
                no: 1,
                name: "checkout",
                kind: "message",
                T: we.R
            }]));
            class pe extends m.Q {
                constructor(e) {
                    super(), this.item = de.UNSPECIFIED, u.C.util.initPartial(e, this)
                }
                static fromBinary(e, n) {
                    return (new pe).fromBinary(e, n)
                }
                static fromJson(e, n) {
                    return (new pe).fromJson(e, n)
                }
                static fromJsonString(e, n) {
                    return (new pe).fromJsonString(e, n)
                }
                static equals(e, n) {
                    return u.C.util.equals(pe, e, n)
                }
            }
            pe.runtime = u.C, pe.typeName = "nike.clickstream.surface.commerce.checkout.v1.ItemClicked", pe.fields = u.C.util.newFieldList((() => [{
                no: 1,
                name: "item",
                kind: "enum",
                T: u.C.getEnumType(de)
            }]));
            class Se extends m.Q {
                constructor(e) {
                    super(), this.item = Ce.UNSPECIFIED, u.C.util.initPartial(e, this)
                }
                static fromBinary(e, n) {
                    return (new Se).fromBinary(e, n)
                }
                static fromJson(e, n) {
                    return (new Se).fromJson(e, n)
                }
                static fromJsonString(e, n) {
                    return (new Se).fromJsonString(e, n)
                }
                static equals(e, n) {
                    return u.C.util.equals(Se, e, n)
                }
            }
            Se.runtime = u.C, Se.typeName = "nike.clickstream.surface.commerce.checkout.v1.ItemViewed", Se.fields = u.C.util.newFieldList((() => [{
                no: 1,
                name: "item",
                kind: "enum",
                T: u.C.getEnumType(Ce)
            }]));
            class Ee extends m.Q {
                constructor(e) {
                    super(), u.C.util.initPartial(e, this)
                }
                static fromBinary(e, n) {
                    return (new Ee).fromBinary(e, n)
                }
                static fromJson(e, n) {
                    return (new Ee).fromJson(e, n)
                }
                static fromJsonString(e, n) {
                    return (new Ee).fromJsonString(e, n)
                }
                static equals(e, n) {
                    return u.C.util.equals(Ee, e, n)
                }
            }
            Ee.runtime = u.C, Ee.typeName = "nike.clickstream.surface.commerce.checkout.v1.SurfaceViewed", Ee.fields = u.C.util.newFieldList((() => [{
                no: 1,
                name: "context",
                kind: "message",
                T: ye
            }]));
            class Je extends m.Q {
                constructor(e) {
                    super(), this.itemCount = 0, this.underlyingCollection = {
                        case: void 0
                    }, u.C.util.initPartial(e, this)
                }
                static fromBinary(e, n) {
                    return (new Je).fromBinary(e, n)
                }
                static fromJson(e, n) {
                    return (new Je).fromJson(e, n)
                }
                static fromJsonString(e, n) {
                    return (new Je).fromJsonString(e, n)
                }
                static equals(e, n) {
                    return u.C.util.equals(Je, e, n)
                }
            }
            Je.runtime = u.C, Je.typeName = "nike.clickstream.surface.commerce.favorites.v1.Collection", Je.fields = u.C.util.newFieldList((() => [{
                no: 1,
                name: "item_count",
                kind: "scalar",
                T: 13
            }, {
                no: 16,
                name: "favorites",
                kind: "message",
                T: Ie,
                oneof: "underlying_collection"
            }]));
            class Ie extends m.Q {
                constructor(e) {
                    super(), this.placeholder = !1, u.C.util.initPartial(e, this)
                }
                static fromBinary(e, n) {
                    return (new Ie).fromBinary(e, n)
                }
                static fromJson(e, n) {
                    return (new Ie).fromJson(e, n)
                }
                static fromJsonString(e, n) {
                    return (new Ie).fromJsonString(e, n)
                }
                static equals(e, n) {
                    return u.C.util.equals(Ie, e, n)
                }
            }
            Ie.runtime = u.C, Ie.typeName = "nike.clickstream.surface.commerce.favorites.v1.Collection.Favorites", Ie.fields = u.C.util.newFieldList((() => [{
                no: 1,
                name: "placeholder",
                kind: "scalar",
                T: 8
            }]));
            class Ne extends m.Q {
                constructor(e) {
                    super(), this.index = 0, this.underlyingItem = {
                        case: void 0
                    }, u.C.util.initPartial(e, this)
                }
                static fromBinary(e, n) {
                    return (new Ne).fromBinary(e, n)
                }
                static fromJson(e, n) {
                    return (new Ne).fromJson(e, n)
                }
                static fromJsonString(e, n) {
                    return (new Ne).fromJsonString(e, n)
                }
                static equals(e, n) {
                    return u.C.util.equals(Ne, e, n)
                }
            }
            Ne.runtime = u.C, Ne.typeName = "nike.clickstream.surface.commerce.favorites.v1.CollectionItem", Ne.fields = u.C.util.newFieldList((() => [{
                no: 1,
                name: "collection",
                kind: "message",
                T: Je
            }, {
                no: 2,
                name: "index",
                kind: "scalar",
                T: 13
            }, {
                no: 16,
                name: "product",
                kind: "message",
                T: h.Yt,
                oneof: "underlying_item"
            }]));
            class he extends m.Q {
                constructor(e) {
                    super(), this.placeholder = !1, u.C.util.initPartial(e, this)
                }
                static fromBinary(e, n) {
                    return (new he).fromBinary(e, n)
                }
                static fromJson(e, n) {
                    return (new he).fromJson(e, n)
                }
                static fromJsonString(e, n) {
                    return (new he).fromJsonString(e, n)
                }
                static equals(e, n) {
                    return u.C.util.equals(he, e, n)
                }
            }
            he.runtime = u.C, he.typeName = "nike.clickstream.surface.commerce.favorites.v1.SurfaceContext", he.fields = u.C.util.newFieldList((() => [{
                no: 1,
                name: "placeholder",
                kind: "scalar",
                T: 8
            }]));
            class Be extends m.Q {
                constructor(e) {
                    super(), u.C.util.initPartial(e, this)
                }
                static fromBinary(e, n) {
                    return (new Be).fromBinary(e, n)
                }
                static fromJson(e, n) {
                    return (new Be).fromJson(e, n)
                }
                static fromJsonString(e, n) {
                    return (new Be).fromJsonString(e, n)
                }
                static equals(e, n) {
                    return u.C.util.equals(Be, e, n)
                }
            }
            Be.runtime = u.C, Be.typeName = "nike.clickstream.surface.commerce.favorites.v1.CollectionItemClicked", Be.fields = u.C.util.newFieldList((() => [{
                no: 1,
                name: "collection_item",
                kind: "message",
                T: Ne
            }]));
            class ve extends m.Q {
                constructor(e) {
                    super(), u.C.util.initPartial(e, this)
                }
                static fromBinary(e, n) {
                    return (new ve).fromBinary(e, n)
                }
                static fromJson(e, n) {
                    return (new ve).fromJson(e, n)
                }
                static fromJsonString(e, n) {
                    return (new ve).fromJsonString(e, n)
                }
                static equals(e, n) {
                    return u.C.util.equals(ve, e, n)
                }
            }
            ve.runtime = u.C, ve.typeName = "nike.clickstream.surface.commerce.favorites.v1.CollectionItemViewed", ve.fields = u.C.util.newFieldList((() => [{
                no: 1,
                name: "collection_item",
                kind: "message",
                T: Ne
            }]));
            class Pe extends m.Q {
                constructor(e) {
                    super(), u.C.util.initPartial(e, this)
                }
                static fromBinary(e, n) {
                    return (new Pe).fromBinary(e, n)
                }
                static fromJson(e, n) {
                    return (new Pe).fromJson(e, n)
                }
                static fromJsonString(e, n) {
                    return (new Pe).fromJsonString(e, n)
                }
                static equals(e, n) {
                    return u.C.util.equals(Pe, e, n)
                }
            }
            Pe.runtime = u.C, Pe.typeName = "nike.clickstream.surface.commerce.favorites.v1.CollectionViewed", Pe.fields = u.C.util.newFieldList((() => [{
                no: 1,
                name: "collection",
                kind: "message",
                T: Je
            }]));
            class Oe extends m.Q {
                constructor(e) {
                    super(), u.C.util.initPartial(e, this)
                }
                static fromBinary(e, n) {
                    return (new Oe).fromBinary(e, n)
                }
                static fromJson(e, n) {
                    return (new Oe).fromJson(e, n)
                }
                static fromJsonString(e, n) {
                    return (new Oe).fromJsonString(e, n)
                }
                static equals(e, n) {
                    return u.C.util.equals(Oe, e, n)
                }
            }
            Oe.runtime = u.C, Oe.typeName = "nike.clickstream.surface.commerce.favorites.v1.SurfaceViewed", Oe.fields = u.C.util.newFieldList((() => [{
                no: 1,
                name: "context",
                kind: "message",
                T: he
            }]));
            class Le extends m.Q {
                constructor(e) {
                    super(), this.placeholder = !1, u.C.util.initPartial(e, this)
                }
                static fromBinary(e, n) {
                    return (new Le).fromBinary(e, n)
                }
                static fromJson(e, n) {
                    return (new Le).fromJson(e, n)
                }
                static fromJsonString(e, n) {
                    return (new Le).fromJsonString(e, n)
                }
                static equals(e, n) {
                    return u.C.util.equals(Le, e, n)
                }
            }
            Le.runtime = u.C, Le.typeName = "nike.clickstream.surface.commerce.help.v1.SurfaceContext", Le.fields = u.C.util.newFieldList((() => [{
                no: 1,
                name: "placeholder",
                kind: "scalar",
                T: 8
            }]));
            class qe extends m.Q {
                constructor(e) {
                    super(), u.C.util.initPartial(e, this)
                }
                static fromBinary(e, n) {
                    return (new qe).fromBinary(e, n)
                }
                static fromJson(e, n) {
                    return (new qe).fromJson(e, n)
                }
                static fromJsonString(e, n) {
                    return (new qe).fromJsonString(e, n)
                }
                static equals(e, n) {
                    return u.C.util.equals(qe, e, n)
                }
            }
            qe.runtime = u.C, qe.typeName = "nike.clickstream.surface.commerce.help.v1.SurfaceViewed", qe.fields = u.C.util.newFieldList((() => [{
                no: 1,
                name: "context",
                kind: "message",
                T: Le
            }]));
            class Ae extends m.Q {
                constructor(e) {
                    super(), this.threadKey = "", u.C.util.initPartial(e, this)
                }
                static fromBinary(e, n) {
                    return (new Ae).fromBinary(e, n)
                }
                static fromJson(e, n) {
                    return (new Ae).fromJson(e, n)
                }
                static fromJsonString(e, n) {
                    return (new Ae).fromJsonString(e, n)
                }
                static equals(e, n) {
                    return u.C.util.equals(Ae, e, n)
                }
            }
            Ae.runtime = u.C, Ae.typeName = "nike.clickstream.core.marketing.v1.Content", Ae.fields = u.C.util.newFieldList((() => [{
                no: 2,
                name: "thread_key",
                kind: "scalar",
                T: 9
            }]));
            class Fe extends m.Q {
                constructor(e) {
                    super(), this.category = _e.UNSPECIFIED, this.name = "", u.C.util.initPartial(e, this)
                }
                static fromBinary(e, n) {
                    return (new Fe).fromBinary(e, n)
                }
                static fromJson(e, n) {
                    return (new Fe).fromJson(e, n)
                }
                static fromJsonString(e, n) {
                    return (new Fe).fromJsonString(e, n)
                }
                static equals(e, n) {
                    return u.C.util.equals(Fe, e, n)
                }
            }
            Fe.runtime = u.C, Fe.typeName = "nike.clickstream.surface.commerce.landing.v1.SurfaceContext", Fe.fields = u.C.util.newFieldList((() => [{
                    no: 1,
                    name: "category",
                    kind: "enum",
                    T: u.C.getEnumType(_e)
                }, {
                    no: 2,
                    name: "name",
                    kind: "scalar",
                    T: 9
                }, {
                    no: 3,
                    name: "content",
                    kind: "message",
                    T: Ae
                }])),
                function(e) {
                    e[e.UNSPECIFIED = 0] = "UNSPECIFIED", e[e.EDITORIAL = 1] = "EDITORIAL", e[e.HOMEPAGE = 2] = "HOMEPAGE", e[e.LANDING_PAGE = 3] = "LANDING_PAGE"
                }(_e || (_e = {})), u.C.util.setEnumType(_e, "nike.clickstream.surface.commerce.landing.v1.SurfaceContext.Category", [{
                    no: 0,
                    name: "CATEGORY_UNSPECIFIED"
                }, {
                    no: 1,
                    name: "CATEGORY_EDITORIAL"
                }, {
                    no: 2,
                    name: "CATEGORY_HOMEPAGE"
                }, {
                    no: 3,
                    name: "CATEGORY_LANDING_PAGE"
                }]);
            class Ue extends m.Q {
                constructor(e) {
                    super(), u.C.util.initPartial(e, this)
                }
                static fromBinary(e, n) {
                    return (new Ue).fromBinary(e, n)
                }
                static fromJson(e, n) {
                    return (new Ue).fromJson(e, n)
                }
                static fromJsonString(e, n) {
                    return (new Ue).fromJsonString(e, n)
                }
                static equals(e, n) {
                    return u.C.util.equals(Ue, e, n)
                }
            }
            Ue.runtime = u.C, Ue.typeName = "nike.clickstream.surface.commerce.landing.v1.SurfaceViewed", Ue.fields = u.C.util.newFieldList((() => [{
                    no: 1,
                    name: "context",
                    kind: "message",
                    T: Fe
                }])),
                function(e) {
                    e[e.UNSPECIFIED = 0] = "UNSPECIFIED", e[e.CONTINUE_AS_GUEST_BUTTON = 1] = "CONTINUE_AS_GUEST_BUTTON", e[e.JOIN_US_BUTTON = 2] = "JOIN_US_BUTTON", e[e.SIGN_IN_BUTTON = 3] = "SIGN_IN_BUTTON"
                }(Te || (Te = {})), u.C.util.setEnumType(Te, "nike.clickstream.surface.commerce.landing_screen.v1.ClickableItem", [{
                    no: 0,
                    name: "CLICKABLE_ITEM_UNSPECIFIED"
                }, {
                    no: 1,
                    name: "CLICKABLE_ITEM_CONTINUE_AS_GUEST_BUTTON"
                }, {
                    no: 2,
                    name: "CLICKABLE_ITEM_JOIN_US_BUTTON"
                }, {
                    no: 3,
                    name: "CLICKABLE_ITEM_SIGN_IN_BUTTON"
                }]);
            class xe extends m.Q {
                constructor(e) {
                    super(), this.placeholder = !1, u.C.util.initPartial(e, this)
                }
                static fromBinary(e, n) {
                    return (new xe).fromBinary(e, n)
                }
                static fromJson(e, n) {
                    return (new xe).fromJson(e, n)
                }
                static fromJsonString(e, n) {
                    return (new xe).fromJsonString(e, n)
                }
                static equals(e, n) {
                    return u.C.util.equals(xe, e, n)
                }
            }
            xe.runtime = u.C, xe.typeName = "nike.clickstream.surface.commerce.landing_screen.v1.SurfaceContext", xe.fields = u.C.util.newFieldList((() => [{
                no: 1,
                name: "placeholder",
                kind: "scalar",
                T: 8
            }]));
            class De extends m.Q {
                constructor(e) {
                    super(), this.item = Te.UNSPECIFIED, u.C.util.initPartial(e, this)
                }
                static fromBinary(e, n) {
                    return (new De).fromBinary(e, n)
                }
                static fromJson(e, n) {
                    return (new De).fromJson(e, n)
                }
                static fromJsonString(e, n) {
                    return (new De).fromJsonString(e, n)
                }
                static equals(e, n) {
                    return u.C.util.equals(De, e, n)
                }
            }
            De.runtime = u.C, De.typeName = "nike.clickstream.surface.commerce.landing_screen.v1.ItemClicked", De.fields = u.C.util.newFieldList((() => [{
                no: 1,
                name: "item",
                kind: "enum",
                T: u.C.getEnumType(Te)
            }]));
            class Me extends m.Q {
                constructor(e) {
                    super(), u.C.util.initPartial(e, this)
                }
                static fromBinary(e, n) {
                    return (new Me).fromBinary(e, n)
                }
                static fromJson(e, n) {
                    return (new Me).fromJson(e, n)
                }
                static fromJsonString(e, n) {
                    return (new Me).fromJsonString(e, n)
                }
                static equals(e, n) {
                    return u.C.util.equals(Me, e, n)
                }
            }
            Me.runtime = u.C, Me.typeName = "nike.clickstream.surface.commerce.landing_screen.v1.SurfaceViewed", Me.fields = u.C.util.newFieldList((() => [{
                no: 1,
                name: "context",
                kind: "message",
                T: xe
            }]));
            class Qe extends m.Q {
                constructor(e) {
                    super(), this.placeholder = !1, u.C.util.initPartial(e, this)
                }
                static fromBinary(e, n) {
                    return (new Qe).fromBinary(e, n)
                }
                static fromJson(e, n) {
                    return (new Qe).fromJson(e, n)
                }
                static fromJsonString(e, n) {
                    return (new Qe).fromJsonString(e, n)
                }
                static equals(e, n) {
                    return u.C.util.equals(Qe, e, n)
                }
            }
            Qe.runtime = u.C, Qe.typeName = "nike.clickstream.surface.commerce.onboarding.v1.SurfaceContext", Qe.fields = u.C.util.newFieldList((() => [{
                no: 1,
                name: "placeholder",
                kind: "scalar",
                T: 8
            }]));
            class Re extends m.Q {
                constructor(e) {
                    super(), u.C.util.initPartial(e, this)
                }
                static fromBinary(e, n) {
                    return (new Re).fromBinary(e, n)
                }
                static fromJson(e, n) {
                    return (new Re).fromJson(e, n)
                }
                static fromJsonString(e, n) {
                    return (new Re).fromJsonString(e, n)
                }
                static equals(e, n) {
                    return u.C.util.equals(Re, e, n)
                }
            }
            Re.runtime = u.C, Re.typeName = "nike.clickstream.surface.commerce.onboarding.v1.SurfaceViewed", Re.fields = u.C.util.newFieldList((() => [{
                    no: 1,
                    name: "context",
                    kind: "message",
                    T: Qe
                }])),
                function(e) {
                    e[e.UNSPECIFIED = 0] = "UNSPECIFIED", e[e.BUY_IT_AGAIN_BUTTON = 1] = "BUY_IT_AGAIN_BUTTON"
                }(ke || (ke = {})), u.C.util.setEnumType(ke, "nike.clickstream.surface.commerce.orders.v1.ClickableItem", [{
                    no: 0,
                    name: "CLICKABLE_ITEM_UNSPECIFIED"
                }, {
                    no: 1,
                    name: "CLICKABLE_ITEM_BUY_IT_AGAIN_BUTTON"
                }]);
            class He extends m.Q {
                constructor(e) {
                    super(), this.placeholder = !1, u.C.util.initPartial(e, this)
                }
                static fromBinary(e, n) {
                    return (new He).fromBinary(e, n)
                }
                static fromJson(e, n) {
                    return (new He).fromJson(e, n)
                }
                static fromJsonString(e, n) {
                    return (new He).fromJsonString(e, n)
                }
                static equals(e, n) {
                    return u.C.util.equals(He, e, n)
                }
            }
            He.runtime = u.C, He.typeName = "nike.clickstream.surface.commerce.orders.v1.SurfaceContext", He.fields = u.C.util.newFieldList((() => [{
                no: 1,
                name: "placeholder",
                kind: "scalar",
                T: 8
            }]));
            class Ge extends m.Q {
                constructor(e) {
                    super(), this.item = ke.UNSPECIFIED, u.C.util.initPartial(e, this)
                }
                static fromBinary(e, n) {
                    return (new Ge).fromBinary(e, n)
                }
                static fromJson(e, n) {
                    return (new Ge).fromJson(e, n)
                }
                static fromJsonString(e, n) {
                    return (new Ge).fromJsonString(e, n)
                }
                static equals(e, n) {
                    return u.C.util.equals(Ge, e, n)
                }
            }
            Ge.runtime = u.C, Ge.typeName = "nike.clickstream.surface.commerce.orders.v1.ItemClicked", Ge.fields = u.C.util.newFieldList((() => [{
                no: 1,
                name: "item",
                kind: "enum",
                T: u.C.getEnumType(ke)
            }]));
            class Ke extends m.Q {
                constructor(e) {
                    super(), u.C.util.initPartial(e, this)
                }
                static fromBinary(e, n) {
                    return (new Ke).fromBinary(e, n)
                }
                static fromJson(e, n) {
                    return (new Ke).fromJson(e, n)
                }
                static fromJsonString(e, n) {
                    return (new Ke).fromJsonString(e, n)
                }
                static equals(e, n) {
                    return u.C.util.equals(Ke, e, n)
                }
            }
            Ke.runtime = u.C, Ke.typeName = "nike.clickstream.surface.commerce.orders.v1.OrderDetailsViewed", Ke.fields = u.C.util.newFieldList((() => [{
                no: 1,
                name: "order_id",
                kind: "message",
                T: se
            }]));
            class be extends m.Q {
                constructor(e) {
                    super(), u.C.util.initPartial(e, this)
                }
                static fromBinary(e, n) {
                    return (new be).fromBinary(e, n)
                }
                static fromJson(e, n) {
                    return (new be).fromJson(e, n)
                }
                static fromJsonString(e, n) {
                    return (new be).fromJsonString(e, n)
                }
                static equals(e, n) {
                    return u.C.util.equals(be, e, n)
                }
            }
            be.runtime = u.C, be.typeName = "nike.clickstream.surface.commerce.orders.v1.SurfaceViewed", be.fields = u.C.util.newFieldList((() => [{
                    no: 1,
                    name: "context",
                    kind: "message",
                    T: He
                }])),
                function(e) {
                    e[e.UNSPECIFIED = 0] = "UNSPECIFIED", e[e.ADD_TO_CART_BUTTON = 1] = "ADD_TO_CART_BUTTON", e[e.CHAT_BUTTON = 2] = "CHAT_BUTTON", e[e.LAUNCH_DONT_NOTIFY_ME_BUTTON = 3] = "LAUNCH_DONT_NOTIFY_ME_BUTTON", e[e.LAUNCH_ENTER_BUTTON = 4] = "LAUNCH_ENTER_BUTTON", e[e.LAUNCH_NOTIFY_ME_BUTTON = 5] = "LAUNCH_NOTIFY_ME_BUTTON", e[e.SHARE_BUTTON = 6] = "SHARE_BUTTON"
                }(ge || (ge = {})), u.C.util.setEnumType(ge, "nike.clickstream.surface.commerce.pdp.v1.ClickableItem", [{
                    no: 0,
                    name: "CLICKABLE_ITEM_UNSPECIFIED"
                }, {
                    no: 1,
                    name: "CLICKABLE_ITEM_ADD_TO_CART_BUTTON"
                }, {
                    no: 2,
                    name: "CLICKABLE_ITEM_CHAT_BUTTON"
                }, {
                    no: 3,
                    name: "CLICKABLE_ITEM_LAUNCH_DONT_NOTIFY_ME_BUTTON"
                }, {
                    no: 4,
                    name: "CLICKABLE_ITEM_LAUNCH_ENTER_BUTTON"
                }, {
                    no: 5,
                    name: "CLICKABLE_ITEM_LAUNCH_NOTIFY_ME_BUTTON"
                }, {
                    no: 6,
                    name: "CLICKABLE_ITEM_SHARE_BUTTON"
                }]);
            class Ve extends m.Q {
                constructor(e) {
                    super(), this.groupKey = "", u.C.util.initPartial(e, this)
                }
                static fromBinary(e, n) {
                    return (new Ve).fromBinary(e, n)
                }
                static fromJson(e, n) {
                    return (new Ve).fromJson(e, n)
                }
                static fromJsonString(e, n) {
                    return (new Ve).fromJsonString(e, n)
                }
                static equals(e, n) {
                    return u.C.util.equals(Ve, e, n)
                }
            }
            Ve.runtime = u.C, Ve.typeName = "nike.clickstream.surface.commerce.pdp.v1.SurfaceContext", Ve.fields = u.C.util.newFieldList((() => [{
                no: 1,
                name: "group_key",
                kind: "scalar",
                T: 9
            }, {
                no: 2,
                name: "selected_colorway",
                kind: "message",
                T: h.Yt
            }]));
            class Ye extends m.Q {
                constructor(e) {
                    super(), u.C.util.initPartial(e, this)
                }
                static fromBinary(e, n) {
                    return (new Ye).fromBinary(e, n)
                }
                static fromJson(e, n) {
                    return (new Ye).fromJson(e, n)
                }
                static fromJsonString(e, n) {
                    return (new Ye).fromJsonString(e, n)
                }
                static equals(e, n) {
                    return u.C.util.equals(Ye, e, n)
                }
            }
            Ye.runtime = u.C, Ye.typeName = "nike.clickstream.surface.commerce.pdp.v1.ColorwaySelected", Ye.fields = u.C.util.newFieldList((() => [{
                no: 1,
                name: "colorway",
                kind: "message",
                T: h.Yt
            }]));
            class We extends m.Q {
                constructor(e) {
                    super(), this.item = ge.UNSPECIFIED, u.C.util.initPartial(e, this)
                }
                static fromBinary(e, n) {
                    return (new We).fromBinary(e, n)
                }
                static fromJson(e, n) {
                    return (new We).fromJson(e, n)
                }
                static fromJsonString(e, n) {
                    return (new We).fromJsonString(e, n)
                }
                static equals(e, n) {
                    return u.C.util.equals(We, e, n)
                }
            }
            We.runtime = u.C, We.typeName = "nike.clickstream.surface.commerce.pdp.v1.ItemClicked", We.fields = u.C.util.newFieldList((() => [{
                no: 1,
                name: "item",
                kind: "enum",
                T: u.C.getEnumType(ge)
            }]));
            class Xe extends m.Q {
                constructor(e) {
                    super(), u.C.util.initPartial(e, this)
                }
                static fromBinary(e, n) {
                    return (new Xe).fromBinary(e, n)
                }
                static fromJson(e, n) {
                    return (new Xe).fromJson(e, n)
                }
                static fromJsonString(e, n) {
                    return (new Xe).fromJsonString(e, n)
                }
                static equals(e, n) {
                    return u.C.util.equals(Xe, e, n)
                }
            }
            Xe.runtime = u.C, Xe.typeName = "nike.clickstream.surface.commerce.pdp.v1.SurfaceViewed", Xe.fields = u.C.util.newFieldList((() => [{
                no: 1,
                name: "context",
                kind: "message",
                T: Ve
            }]));
            var je = t(1289);
            class ze extends m.Q {
                constructor(e) {
                    super(), u.C.util.initPartial(e, this)
                }
                static fromBinary(e, n) {
                    return (new ze).fromBinary(e, n)
                }
                static fromJson(e, n) {
                    return (new ze).fromJson(e, n)
                }
                static fromJsonString(e, n) {
                    return (new ze).fromJsonString(e, n)
                }
                static equals(e, n) {
                    return u.C.util.equals(ze, e, n)
                }
            }
            ze.runtime = u.C, ze.typeName = "nike.clickstream.surface.commerce.product_wall.v1.CollectionItemClicked", ze.fields = u.C.util.newFieldList((() => [{
                no: 1,
                name: "collection_item",
                kind: "message",
                T: je.G1
            }]));
            class Ze extends m.Q {
                constructor(e) {
                    super(), u.C.util.initPartial(e, this)
                }
                static fromBinary(e, n) {
                    return (new Ze).fromBinary(e, n)
                }
                static fromJson(e, n) {
                    return (new Ze).fromJson(e, n)
                }
                static fromJsonString(e, n) {
                    return (new Ze).fromJsonString(e, n)
                }
                static equals(e, n) {
                    return u.C.util.equals(Ze, e, n)
                }
            }
            Ze.runtime = u.C, Ze.typeName = "nike.clickstream.surface.commerce.product_wall.v1.CollectionItemViewed", Ze.fields = u.C.util.newFieldList((() => [{
                no: 1,
                name: "collection_item",
                kind: "message",
                T: je.G1
            }]));
            class $e extends m.Q {
                constructor(e) {
                    super(), u.C.util.initPartial(e, this)
                }
                static fromBinary(e, n) {
                    return (new $e).fromBinary(e, n)
                }
                static fromJson(e, n) {
                    return (new $e).fromJson(e, n)
                }
                static fromJsonString(e, n) {
                    return (new $e).fromJsonString(e, n)
                }
                static equals(e, n) {
                    return u.C.util.equals($e, e, n)
                }
            }
            $e.runtime = u.C, $e.typeName = "nike.clickstream.surface.commerce.product_wall.v1.CollectionViewed", $e.fields = u.C.util.newFieldList((() => [{
                no: 1,
                name: "collection",
                kind: "message",
                T: je.pM
            }]));
            class en extends m.Q {
                constructor(e) {
                    super(), u.C.util.initPartial(e, this)
                }
                static fromBinary(e, n) {
                    return (new en).fromBinary(e, n)
                }
                static fromJson(e, n) {
                    return (new en).fromJson(e, n)
                }
                static fromJsonString(e, n) {
                    return (new en).fromJsonString(e, n)
                }
                static equals(e, n) {
                    return u.C.util.equals(en, e, n)
                }
            }
            en.runtime = u.C, en.typeName = "nike.clickstream.surface.commerce.product_wall.v1.SurfaceViewed", en.fields = u.C.util.newFieldList((() => [{
                no: 1,
                name: "context",
                kind: "message",
                T: je.Bd
            }]));
            var nn, tn = t(9033);
            class rn extends m.Q {
                constructor(e) {
                    super(), this.theme = tn.Theme.UNSPECIFIED, u.C.util.initPartial(e, this)
                }
                static fromBinary(e, n) {
                    return (new rn).fromBinary(e, n)
                }
                static fromJson(e, n) {
                    return (new rn).fromJson(e, n)
                }
                static fromJsonString(e, n) {
                    return (new rn).fromJsonString(e, n)
                }
                static equals(e, n) {
                    return u.C.util.equals(rn, e, n)
                }
            }
            rn.runtime = u.C, rn.typeName = "nike.clickstream.surface.commerce.shop_home.v1.SurfaceContext", rn.fields = u.C.util.newFieldList((() => [{
                no: 1,
                name: "tab",
                kind: "message",
                T: sn
            }, {
                no: 2,
                name: "theme",
                kind: "enum",
                T: u.C.getEnumType(tn.Theme)
            }]));
            class sn extends m.Q {
                constructor(e) {
                    super(), this.id = "", this.conceptId = "", u.C.util.initPartial(e, this)
                }
                static fromBinary(e, n) {
                    return (new sn).fromBinary(e, n)
                }
                static fromJson(e, n) {
                    return (new sn).fromJson(e, n)
                }
                static fromJsonString(e, n) {
                    return (new sn).fromJsonString(e, n)
                }
                static equals(e, n) {
                    return u.C.util.equals(sn, e, n)
                }
            }
            sn.runtime = u.C, sn.typeName = "nike.clickstream.surface.commerce.shop_home.v1.Tab", sn.fields = u.C.util.newFieldList((() => [{
                no: 1,
                name: "id",
                kind: "scalar",
                T: 9
            }, {
                no: 2,
                name: "concept_id",
                kind: "scalar",
                T: 9
            }]));
            class on extends m.Q {
                constructor(e) {
                    super(), u.C.util.initPartial(e, this)
                }
                static fromBinary(e, n) {
                    return (new on).fromBinary(e, n)
                }
                static fromJson(e, n) {
                    return (new on).fromJson(e, n)
                }
                static fromJsonString(e, n) {
                    return (new on).fromJsonString(e, n)
                }
                static equals(e, n) {
                    return u.C.util.equals(on, e, n)
                }
            }
            on.runtime = u.C, on.typeName = "nike.clickstream.surface.commerce.shop_home.v1.SurfaceViewed", on.fields = u.C.util.newFieldList((() => [{
                no: 1,
                name: "context",
                kind: "message",
                T: rn
            }]));
            class an extends m.Q {
                constructor(e) {
                    super(), u.C.util.initPartial(e, this)
                }
                static fromBinary(e, n) {
                    return (new an).fromBinary(e, n)
                }
                static fromJson(e, n) {
                    return (new an).fromJson(e, n)
                }
                static fromJsonString(e, n) {
                    return (new an).fromJsonString(e, n)
                }
                static equals(e, n) {
                    return u.C.util.equals(an, e, n)
                }
            }
            an.runtime = u.C, an.typeName = "nike.clickstream.surface.commerce.shop_home.v1.TabSelected", an.fields = u.C.util.newFieldList((() => [{
                no: 1,
                name: "tab",
                kind: "message",
                T: sn
            }]));
            class cn extends m.Q {
                constructor(e) {
                    super(), this.theme = tn.Theme.UNSPECIFIED, u.C.util.initPartial(e, this)
                }
                static fromBinary(e, n) {
                    return (new cn).fromBinary(e, n)
                }
                static fromJson(e, n) {
                    return (new cn).fromJson(e, n)
                }
                static fromJsonString(e, n) {
                    return (new cn).fromJsonString(e, n)
                }
                static equals(e, n) {
                    return u.C.util.equals(cn, e, n)
                }
            }
            cn.runtime = u.C, cn.typeName = "nike.clickstream.surface.commerce.shop_home.v1.ThemeSelected", cn.fields = u.C.util.newFieldList((() => [{
                no: 1,
                name: "theme",
                kind: "enum",
                T: u.C.getEnumType(tn.Theme)
            }]));
            class mn extends m.Q {
                constructor(e) {
                    super(), this.placeholder = !1, u.C.util.initPartial(e, this)
                }
                static fromBinary(e, n) {
                    return (new mn).fromBinary(e, n)
                }
                static fromJson(e, n) {
                    return (new mn).fromJson(e, n)
                }
                static fromJsonString(e, n) {
                    return (new mn).fromJsonString(e, n)
                }
                static equals(e, n) {
                    return u.C.util.equals(mn, e, n)
                }
            }
            mn.runtime = u.C, mn.typeName = "nike.clickstream.surface.commerce.store_finder.v1.SurfaceContext", mn.fields = u.C.util.newFieldList((() => [{
                no: 1,
                name: "placeholder",
                kind: "scalar",
                T: 8
            }]));
            class un extends m.Q {
                constructor(e) {
                    super(), u.C.util.initPartial(e, this)
                }
                static fromBinary(e, n) {
                    return (new un).fromBinary(e, n)
                }
                static fromJson(e, n) {
                    return (new un).fromJson(e, n)
                }
                static fromJsonString(e, n) {
                    return (new un).fromJsonString(e, n)
                }
                static equals(e, n) {
                    return u.C.util.equals(un, e, n)
                }
            }
            un.runtime = u.C, un.typeName = "nike.clickstream.surface.commerce.store_finder.v1.SurfaceViewed", un.fields = u.C.util.newFieldList((() => [{
                no: 1,
                name: "context",
                kind: "message",
                T: mn
            }]));
            class ln extends m.Q {
                constructor(e) {
                    super(), this.placeholder = !1, u.C.util.initPartial(e, this)
                }
                static fromBinary(e, n) {
                    return (new ln).fromBinary(e, n)
                }
                static fromJson(e, n) {
                    return (new ln).fromJson(e, n)
                }
                static fromJsonString(e, n) {
                    return (new ln).fromJsonString(e, n)
                }
                static equals(e, n) {
                    return u.C.util.equals(ln, e, n)
                }
            }
            ln.runtime = u.C, ln.typeName = "nike.clickstream.surface.identity.accounts.v1.SurfaceContext", ln.fields = u.C.util.newFieldList((() => [{
                no: 1,
                name: "placeholder",
                kind: "scalar",
                T: 8
            }]));
            class fn extends m.Q {
                constructor(e) {
                    super(), u.C.util.initPartial(e, this)
                }
                static fromBinary(e, n) {
                    return (new fn).fromBinary(e, n)
                }
                static fromJson(e, n) {
                    return (new fn).fromJson(e, n)
                }
                static fromJsonString(e, n) {
                    return (new fn).fromJsonString(e, n)
                }
                static equals(e, n) {
                    return u.C.util.equals(fn, e, n)
                }
            }
            fn.runtime = u.C, fn.typeName = "nike.clickstream.surface.identity.accounts.v1.SurfaceViewed", fn.fields = u.C.util.newFieldList((() => [{
                no: 1,
                name: "context",
                kind: "message",
                T: ln
            }]));
            class dn extends m.Q {
                constructor(e) {
                    super(), this.placeholder = !1, u.C.util.initPartial(e, this)
                }
                static fromBinary(e, n) {
                    return (new dn).fromBinary(e, n)
                }
                static fromJson(e, n) {
                    return (new dn).fromJson(e, n)
                }
                static fromJsonString(e, n) {
                    return (new dn).fromJsonString(e, n)
                }
                static equals(e, n) {
                    return u.C.util.equals(dn, e, n)
                }
            }
            dn.runtime = u.C, dn.typeName = "nike.clickstream.surface.identity.member_home.v1.SurfaceContext", dn.fields = u.C.util.newFieldList((() => [{
                no: 1,
                name: "placeholder",
                kind: "scalar",
                T: 8
            }]));
            class Cn extends m.Q {
                constructor(e) {
                    super(), u.C.util.initPartial(e, this)
                }
                static fromBinary(e, n) {
                    return (new Cn).fromBinary(e, n)
                }
                static fromJson(e, n) {
                    return (new Cn).fromJson(e, n)
                }
                static fromJsonString(e, n) {
                    return (new Cn).fromJsonString(e, n)
                }
                static equals(e, n) {
                    return u.C.util.equals(Cn, e, n)
                }
            }
            Cn.runtime = u.C, Cn.typeName = "nike.clickstream.surface.identity.member_home.v1.SurfaceViewed", Cn.fields = u.C.util.newFieldList((() => [{
                    no: 1,
                    name: "context",
                    kind: "message",
                    T: dn
                }])),
                function(e) {
                    e[e.UNSPECIFIED = 0] = "UNSPECIFIED", e[e.EVENTS = 1] = "EVENTS", e[e.FAVORITES = 2] = "FAVORITES", e[e.INBOX = 3] = "INBOX", e[e.INTERESTS = 4] = "INTERESTS", e[e.MEMBER_PASS = 5] = "MEMBER_PASS", e[e.MEMBER_REWARDS = 6] = "MEMBER_REWARDS", e[e.ORDERS = 7] = "ORDERS", e[e.SETTINGS = 8] = "SETTINGS"
                }(nn || (nn = {})), u.C.util.setEnumType(nn, "nike.clickstream.surface.identity.profile.v1.ClickableItem", [{
                    no: 0,
                    name: "CLICKABLE_ITEM_UNSPECIFIED"
                }, {
                    no: 1,
                    name: "CLICKABLE_ITEM_EVENTS"
                }, {
                    no: 2,
                    name: "CLICKABLE_ITEM_FAVORITES"
                }, {
                    no: 3,
                    name: "CLICKABLE_ITEM_INBOX"
                }, {
                    no: 4,
                    name: "CLICKABLE_ITEM_INTERESTS"
                }, {
                    no: 5,
                    name: "CLICKABLE_ITEM_MEMBER_PASS"
                }, {
                    no: 6,
                    name: "CLICKABLE_ITEM_MEMBER_REWARDS"
                }, {
                    no: 7,
                    name: "CLICKABLE_ITEM_ORDERS"
                }, {
                    no: 8,
                    name: "CLICKABLE_ITEM_SETTINGS"
                }]);
            class _n extends m.Q {
                constructor(e) {
                    super(), this.placeholder = !1, u.C.util.initPartial(e, this)
                }
                static fromBinary(e, n) {
                    return (new _n).fromBinary(e, n)
                }
                static fromJson(e, n) {
                    return (new _n).fromJson(e, n)
                }
                static fromJsonString(e, n) {
                    return (new _n).fromJsonString(e, n)
                }
                static equals(e, n) {
                    return u.C.util.equals(_n, e, n)
                }
            }
            _n.runtime = u.C, _n.typeName = "nike.clickstream.surface.identity.profile.v1.SurfaceContext", _n.fields = u.C.util.newFieldList((() => [{
                no: 1,
                name: "placeholder",
                kind: "scalar",
                T: 8
            }]));
            class Tn extends m.Q {
                constructor(e) {
                    super(), this.item = nn.UNSPECIFIED, u.C.util.initPartial(e, this)
                }
                static fromBinary(e, n) {
                    return (new Tn).fromBinary(e, n)
                }
                static fromJson(e, n) {
                    return (new Tn).fromJson(e, n)
                }
                static fromJsonString(e, n) {
                    return (new Tn).fromJsonString(e, n)
                }
                static equals(e, n) {
                    return u.C.util.equals(Tn, e, n)
                }
            }
            Tn.runtime = u.C, Tn.typeName = "nike.clickstream.surface.identity.profile.v1.ItemClicked", Tn.fields = u.C.util.newFieldList((() => [{
                no: 1,
                name: "item",
                kind: "enum",
                T: u.C.getEnumType(nn)
            }]));
            class kn extends m.Q {
                constructor(e) {
                    super(), u.C.util.initPartial(e, this)
                }
                static fromBinary(e, n) {
                    return (new kn).fromBinary(e, n)
                }
                static fromJson(e, n) {
                    return (new kn).fromJson(e, n)
                }
                static fromJsonString(e, n) {
                    return (new kn).fromJsonString(e, n)
                }
                static equals(e, n) {
                    return u.C.util.equals(kn, e, n)
                }
            }
            kn.runtime = u.C, kn.typeName = "nike.clickstream.surface.identity.profile.v1.SurfaceViewed", kn.fields = u.C.util.newFieldList((() => [{
                no: 1,
                name: "context",
                kind: "message",
                T: _n
            }]));
            class gn extends m.Q {
                constructor(e) {
                    super(), this.placeholder = !1, u.C.util.initPartial(e, this)
                }
                static fromBinary(e, n) {
                    return (new gn).fromBinary(e, n)
                }
                static fromJson(e, n) {
                    return (new gn).fromJson(e, n)
                }
                static fromJsonString(e, n) {
                    return (new gn).fromJsonString(e, n)
                }
                static equals(e, n) {
                    return u.C.util.equals(gn, e, n)
                }
            }
            gn.runtime = u.C, gn.typeName = "nike.clickstream.surface.identity.settings.v1.SurfaceContext", gn.fields = u.C.util.newFieldList((() => [{
                no: 1,
                name: "placeholder",
                kind: "scalar",
                T: 8
            }]));
            class wn extends m.Q {
                constructor(e) {
                    super(), u.C.util.initPartial(e, this)
                }
                static fromBinary(e, n) {
                    return (new wn).fromBinary(e, n)
                }
                static fromJson(e, n) {
                    return (new wn).fromJson(e, n)
                }
                static fromJsonString(e, n) {
                    return (new wn).fromJsonString(e, n)
                }
                static equals(e, n) {
                    return u.C.util.equals(wn, e, n)
                }
            }
            wn.runtime = u.C, wn.typeName = "nike.clickstream.surface.identity.settings.v1.SurfaceViewed", wn.fields = u.C.util.newFieldList((() => [{
                no: 1,
                name: "context",
                kind: "message",
                T: gn
            }]));
            class yn extends m.Q {
                constructor(e) {
                    super(), this.articleName = "", u.C.util.initPartial(e, this)
                }
                static fromBinary(e, n) {
                    return (new yn).fromBinary(e, n)
                }
                static fromJson(e, n) {
                    return (new yn).fromJson(e, n)
                }
                static fromJsonString(e, n) {
                    return (new yn).fromJsonString(e, n)
                }
                static equals(e, n) {
                    return u.C.util.equals(yn, e, n)
                }
            }
            yn.runtime = u.C, yn.typeName = "nike.clickstream.surface.marketing.article.v1.SurfaceContext", yn.fields = u.C.util.newFieldList((() => [{
                no: 1,
                name: "article_name",
                kind: "scalar",
                T: 9
            }]));
            class pn extends m.Q {
                constructor(e) {
                    super(), u.C.util.initPartial(e, this)
                }
                static fromBinary(e, n) {
                    return (new pn).fromBinary(e, n)
                }
                static fromJson(e, n) {
                    return (new pn).fromJson(e, n)
                }
                static fromJsonString(e, n) {
                    return (new pn).fromJsonString(e, n)
                }
                static equals(e, n) {
                    return u.C.util.equals(pn, e, n)
                }
            }
            pn.runtime = u.C, pn.typeName = "nike.clickstream.surface.marketing.article.v1.SurfaceViewed", pn.fields = u.C.util.newFieldList((() => [{
                no: 1,
                name: "context",
                kind: "message",
                T: yn
            }]));
            class Sn extends m.Q {
                constructor(e) {
                    super(), this.notificationId = "", this.notificationUrl = "", u.C.util.initPartial(e, this)
                }
                static fromBinary(e, n) {
                    return (new Sn).fromBinary(e, n)
                }
                static fromJson(e, n) {
                    return (new Sn).fromJson(e, n)
                }
                static fromJsonString(e, n) {
                    return (new Sn).fromJsonString(e, n)
                }
                static equals(e, n) {
                    return u.C.util.equals(Sn, e, n)
                }
            }
            Sn.runtime = u.C, Sn.typeName = "nike.clickstream.surface.marketing.inbox.v1.Message", Sn.fields = u.C.util.newFieldList((() => [{
                no: 1,
                name: "notification_id",
                kind: "scalar",
                T: 9
            }, {
                no: 2,
                name: "notification_url",
                kind: "scalar",
                T: 9
            }, {
                no: 3,
                name: "attribution",
                kind: "message",
                T: K
            }]));
            class En extends m.Q {
                constructor(e) {
                    super(), this.placeholder = !1, u.C.util.initPartial(e, this)
                }
                static fromBinary(e, n) {
                    return (new En).fromBinary(e, n)
                }
                static fromJson(e, n) {
                    return (new En).fromJson(e, n)
                }
                static fromJsonString(e, n) {
                    return (new En).fromJsonString(e, n)
                }
                static equals(e, n) {
                    return u.C.util.equals(En, e, n)
                }
            }
            En.runtime = u.C, En.typeName = "nike.clickstream.surface.marketing.inbox.v1.SurfaceContext", En.fields = u.C.util.newFieldList((() => [{
                no: 1,
                name: "placeholder",
                kind: "scalar",
                T: 8
            }]));
            class Jn extends m.Q {
                constructor(e) {
                    super(), u.C.util.initPartial(e, this)
                }
                static fromBinary(e, n) {
                    return (new Jn).fromBinary(e, n)
                }
                static fromJson(e, n) {
                    return (new Jn).fromJson(e, n)
                }
                static fromJsonString(e, n) {
                    return (new Jn).fromJsonString(e, n)
                }
                static equals(e, n) {
                    return u.C.util.equals(Jn, e, n)
                }
            }
            Jn.runtime = u.C, Jn.typeName = "nike.clickstream.surface.marketing.inbox.v1.MessageClicked", Jn.fields = u.C.util.newFieldList((() => [{
                no: 1,
                name: "message",
                kind: "message",
                T: Sn
            }]));
            class In extends m.Q {
                constructor(e) {
                    super(), u.C.util.initPartial(e, this)
                }
                static fromBinary(e, n) {
                    return (new In).fromBinary(e, n)
                }
                static fromJson(e, n) {
                    return (new In).fromJson(e, n)
                }
                static fromJsonString(e, n) {
                    return (new In).fromJsonString(e, n)
                }
                static equals(e, n) {
                    return u.C.util.equals(In, e, n)
                }
            }
            In.runtime = u.C, In.typeName = "nike.clickstream.surface.marketing.inbox.v1.MessageDeleted", In.fields = u.C.util.newFieldList((() => [{
                no: 1,
                name: "message",
                kind: "message",
                T: Sn
            }]));
            class Nn extends m.Q {
                constructor(e) {
                    super(), u.C.util.initPartial(e, this)
                }
                static fromBinary(e, n) {
                    return (new Nn).fromBinary(e, n)
                }
                static fromJson(e, n) {
                    return (new Nn).fromJson(e, n)
                }
                static fromJsonString(e, n) {
                    return (new Nn).fromJsonString(e, n)
                }
                static equals(e, n) {
                    return u.C.util.equals(Nn, e, n)
                }
            }
            Nn.runtime = u.C, Nn.typeName = "nike.clickstream.surface.marketing.inbox.v1.SurfaceViewed", Nn.fields = u.C.util.newFieldList((() => [{
                no: 1,
                name: "context",
                kind: "message",
                T: En
            }]));
            class hn extends m.Q {
                constructor(e) {
                    super(), u.C.util.initPartial(e, this)
                }
                static fromBinary(e, n) {
                    return (new hn).fromBinary(e, n)
                }
                static fromJson(e, n) {
                    return (new hn).fromJson(e, n)
                }
                static fromJsonString(e, n) {
                    return (new hn).fromJsonString(e, n)
                }
                static equals(e, n) {
                    return u.C.util.equals(hn, e, n)
                }
            }
            hn.runtime = u.C, hn.typeName = "nike.clickstream.surface.marketing.thread.v1.SurfaceContext", hn.fields = u.C.util.newFieldList((() => [{
                no: 1,
                name: "content",
                kind: "message",
                T: Ae
            }]));
            class Bn extends m.Q {
                constructor(e) {
                    super(), u.C.util.initPartial(e, this)
                }
                static fromBinary(e, n) {
                    return (new Bn).fromBinary(e, n)
                }
                static fromJson(e, n) {
                    return (new Bn).fromJson(e, n)
                }
                static fromJsonString(e, n) {
                    return (new Bn).fromJsonString(e, n)
                }
                static equals(e, n) {
                    return u.C.util.equals(Bn, e, n)
                }
            }
            Bn.runtime = u.C, Bn.typeName = "nike.clickstream.surface.marketing.thread.v1.SurfaceViewed", Bn.fields = u.C.util.newFieldList((() => [{
                no: 1,
                name: "context",
                kind: "message",
                T: hn
            }]));
            class vn extends m.Q {
                constructor(e) {
                    super(), this.underlyingAction = {
                        case: void 0
                    }, u.C.util.initPartial(e, this)
                }
                static fromBinary(e, n) {
                    return (new vn).fromBinary(e, n)
                }
                static fromJson(e, n) {
                    return (new vn).fromJson(e, n)
                }
                static fromJsonString(e, n) {
                    return (new vn).fromJsonString(e, n)
                }
                static equals(e, n) {
                    return u.C.util.equals(vn, e, n)
                }
            }
            vn.runtime = u.C, vn.typeName = "nike.clickstream.event.v1.Action", vn.fields = u.C.util.newFieldList((() => [{
                no: 1,
                name: "surface_entered",
                kind: "enum",
                T: u.C.getEnumType(N.u),
                oneof: "underlying_action"
            }, {
                no: 20,
                name: "component_commerce_product_recommendations_v1_collection_item_clicked",
                kind: "message",
                T: L,
                oneof: "underlying_action"
            }, {
                no: 21,
                name: "component_commerce_product_recommendations_v1_collection_item_viewed",
                kind: "message",
                T: q,
                oneof: "underlying_action"
            }, {
                no: 22,
                name: "component_commerce_product_recommendations_v1_collection_viewed",
                kind: "message",
                T: A,
                oneof: "underlying_action"
            }, {
                no: 23,
                name: "component_commerce_product_recommendations_v1_component_viewed",
                kind: "message",
                T: F,
                oneof: "underlying_action"
            }, {
                no: 24,
                name: "component_commerce_search_v1_collection_item_clicked",
                kind: "message",
                T: Q,
                oneof: "underlying_action"
            }, {
                no: 25,
                name: "component_commerce_search_v1_collection_item_viewed",
                kind: "message",
                T: R,
                oneof: "underlying_action"
            }, {
                no: 26,
                name: "component_commerce_search_v1_collection_viewed",
                kind: "message",
                T: H,
                oneof: "underlying_action"
            }, {
                no: 27,
                name: "component_commerce_search_v1_component_viewed",
                kind: "message",
                T: G,
                oneof: "underlying_action"
            }, {
                no: 28,
                name: "core_app_v1_app_state_modified",
                kind: "message",
                T: X,
                oneof: "underlying_action"
            }, {
                no: 29,
                name: "core_app_v1_launch_option_opened",
                kind: "message",
                T: j,
                oneof: "underlying_action"
            }, {
                no: 30,
                name: "core_commerce_v1_cart_modified",
                kind: "message",
                T: te,
                oneof: "underlying_action"
            }, {
                no: 31,
                name: "core_commerce_v1_order_canceled",
                kind: "message",
                T: oe,
                oneof: "underlying_action"
            }, {
                no: 32,
                name: "core_commerce_v1_order_created",
                kind: "message",
                T: ae,
                oneof: "underlying_action"
            }, {
                no: 33,
                name: "core_commerce_v1_payment_modified",
                kind: "message",
                T: re.Es,
                oneof: "underlying_action"
            }, {
                no: 34,
                name: "core_commerce_v1_payment_selected",
                kind: "message",
                T: re.WG,
                oneof: "underlying_action"
            }, {
                no: 35,
                name: "core_commerce_v1_product_favorited",
                kind: "message",
                T: h.AN,
                oneof: "underlying_action"
            }, {
                no: 36,
                name: "core_commerce_v1_product_unfavorited",
                kind: "message",
                T: h.dy,
                oneof: "underlying_action"
            }, {
                no: 37,
                name: "core_commerce_v1_search_submitted",
                kind: "message",
                T: me.Q4,
                oneof: "underlying_action"
            }, {
                no: 76,
                name: "core_identity_v1_user_signed_in",
                kind: "message",
                T: _,
                oneof: "underlying_action"
            }, {
                no: 77,
                name: "core_identity_v1_user_signed_out",
                kind: "message",
                T,
                oneof: "underlying_action"
            }, {
                no: 38,
                name: "surface_commerce_cart_v1_item_clicked",
                kind: "message",
                T: le,
                oneof: "underlying_action"
            }, {
                no: 39,
                name: "surface_commerce_cart_v1_surface_viewed",
                kind: "message",
                T: fe,
                oneof: "underlying_action"
            }, {
                no: 40,
                name: "surface_commerce_checkout_v1_item_clicked",
                kind: "message",
                T: pe,
                oneof: "underlying_action"
            }, {
                no: 41,
                name: "surface_commerce_checkout_v1_item_viewed",
                kind: "message",
                T: Se,
                oneof: "underlying_action"
            }, {
                no: 42,
                name: "surface_commerce_checkout_v1_surface_viewed",
                kind: "message",
                T: Ee,
                oneof: "underlying_action"
            }, {
                no: 43,
                name: "surface_commerce_favorites_v1_collection_item_clicked",
                kind: "message",
                T: Be,
                oneof: "underlying_action"
            }, {
                no: 44,
                name: "surface_commerce_favorites_v1_collection_item_viewed",
                kind: "message",
                T: ve,
                oneof: "underlying_action"
            }, {
                no: 45,
                name: "surface_commerce_favorites_v1_collection_viewed",
                kind: "message",
                T: Pe,
                oneof: "underlying_action"
            }, {
                no: 46,
                name: "surface_commerce_favorites_v1_surface_viewed",
                kind: "message",
                T: Oe,
                oneof: "underlying_action"
            }, {
                no: 47,
                name: "surface_commerce_help_v1_surface_viewed",
                kind: "message",
                T: qe,
                oneof: "underlying_action"
            }, {
                no: 48,
                name: "surface_commerce_landing_v1_surface_viewed",
                kind: "message",
                T: Ue,
                oneof: "underlying_action"
            }, {
                no: 49,
                name: "surface_commerce_landing_screen_v1_item_clicked",
                kind: "message",
                T: De,
                oneof: "underlying_action"
            }, {
                no: 50,
                name: "surface_commerce_landing_screen_v1_surface_viewed",
                kind: "message",
                T: Me,
                oneof: "underlying_action"
            }, {
                no: 51,
                name: "surface_commerce_onboarding_v1_surface_viewed",
                kind: "message",
                T: Re,
                oneof: "underlying_action"
            }, {
                no: 52,
                name: "surface_commerce_orders_v1_item_clicked",
                kind: "message",
                T: Ge,
                oneof: "underlying_action"
            }, {
                no: 53,
                name: "surface_commerce_orders_v1_order_details_viewed",
                kind: "message",
                T: Ke,
                oneof: "underlying_action"
            }, {
                no: 54,
                name: "surface_commerce_orders_v1_surface_viewed",
                kind: "message",
                T: be,
                oneof: "underlying_action"
            }, {
                no: 55,
                name: "surface_commerce_pdp_v1_colorway_selected",
                kind: "message",
                T: Ye,
                oneof: "underlying_action"
            }, {
                no: 56,
                name: "surface_commerce_pdp_v1_item_clicked",
                kind: "message",
                T: We,
                oneof: "underlying_action"
            }, {
                no: 57,
                name: "surface_commerce_pdp_v1_surface_viewed",
                kind: "message",
                T: Xe,
                oneof: "underlying_action"
            }, {
                no: 58,
                name: "surface_commerce_product_wall_v1_collection_item_clicked",
                kind: "message",
                T: ze,
                oneof: "underlying_action"
            }, {
                no: 59,
                name: "surface_commerce_product_wall_v1_collection_item_viewed",
                kind: "message",
                T: Ze,
                oneof: "underlying_action"
            }, {
                no: 60,
                name: "surface_commerce_product_wall_v1_collection_viewed",
                kind: "message",
                T: $e,
                oneof: "underlying_action"
            }, {
                no: 61,
                name: "surface_commerce_product_wall_v1_surface_viewed",
                kind: "message",
                T: en,
                oneof: "underlying_action"
            }, {
                no: 62,
                name: "surface_commerce_shop_home_v1_surface_viewed",
                kind: "message",
                T: on,
                oneof: "underlying_action"
            }, {
                no: 63,
                name: "surface_commerce_shop_home_v1_tab_selected",
                kind: "message",
                T: an,
                oneof: "underlying_action"
            }, {
                no: 64,
                name: "surface_commerce_shop_home_v1_theme_selected",
                kind: "message",
                T: cn,
                oneof: "underlying_action"
            }, {
                no: 65,
                name: "surface_commerce_store_finder_v1_surface_viewed",
                kind: "message",
                T: un,
                oneof: "underlying_action"
            }, {
                no: 66,
                name: "surface_identity_accounts_v1_surface_viewed",
                kind: "message",
                T: fn,
                oneof: "underlying_action"
            }, {
                no: 67,
                name: "surface_identity_member_home_v1_surface_viewed",
                kind: "message",
                T: Cn,
                oneof: "underlying_action"
            }, {
                no: 68,
                name: "surface_identity_profile_v1_item_clicked",
                kind: "message",
                T: Tn,
                oneof: "underlying_action"
            }, {
                no: 69,
                name: "surface_identity_profile_v1_surface_viewed",
                kind: "message",
                T: kn,
                oneof: "underlying_action"
            }, {
                no: 70,
                name: "surface_identity_settings_v1_surface_viewed",
                kind: "message",
                T: wn,
                oneof: "underlying_action"
            }, {
                no: 71,
                name: "surface_marketing_article_v1_surface_viewed",
                kind: "message",
                T: pn,
                oneof: "underlying_action"
            }, {
                no: 72,
                name: "surface_marketing_inbox_v1_message_clicked",
                kind: "message",
                T: Jn,
                oneof: "underlying_action"
            }, {
                no: 73,
                name: "surface_marketing_inbox_v1_message_deleted",
                kind: "message",
                T: In,
                oneof: "underlying_action"
            }, {
                no: 74,
                name: "surface_marketing_inbox_v1_surface_viewed",
                kind: "message",
                T: Nn,
                oneof: "underlying_action"
            }, {
                no: 75,
                name: "surface_marketing_thread_v1_surface_viewed",
                kind: "message",
                T: Bn,
                oneof: "underlying_action"
            }]));
            class Pn extends m.Q {
                constructor(e) {
                    super(), this.surface = N.u.UNSPECIFIED, u.C.util.initPartial(e, this)
                }
                static fromBinary(e, n) {
                    return (new Pn).fromBinary(e, n)
                }
                static fromJson(e, n) {
                    return (new Pn).fromJson(e, n)
                }
                static fromJsonString(e, n) {
                    return (new Pn).fromJsonString(e, n)
                }
                static equals(e, n) {
                    return u.C.util.equals(Pn, e, n)
                }
            }
            Pn.runtime = u.C, Pn.typeName = "nike.clickstream.event.v1.Event", Pn.fields = u.C.util.newFieldList((() => [{
                no: 1,
                name: "timestamp",
                kind: "message",
                T: l.D
            }, {
                no: 2,
                name: "session",
                kind: "message",
                T: E
            }, {
                no: 3,
                name: "surface",
                kind: "enum",
                T: u.C.getEnumType(N.u)
            }, {
                no: 4,
                name: "action",
                kind: "message",
                T: vn
            }]));
            class On extends m.Q {
                constructor(e) {
                    super(), u.C.util.initPartial(e, this)
                }
                static fromBinary(e, n) {
                    return (new On).fromBinary(e, n)
                }
                static fromJson(e, n) {
                    return (new On).fromJson(e, n)
                }
                static fromJsonString(e, n) {
                    return (new On).fromJsonString(e, n)
                }
                static equals(e, n) {
                    return u.C.util.equals(On, e, n)
                }
            }
            On.runtime = u.C, On.typeName = "nike.clickstream.service.v1.TrackEventRequest", On.fields = u.C.util.newFieldList((() => [{
                no: 1,
                name: "event",
                kind: "message",
                T: Pn
            }]));
            class Ln extends m.Q {
                constructor(e) {
                    super(), this.message = "", this.eventId = "", u.C.util.initPartial(e, this)
                }
                static fromBinary(e, n) {
                    return (new Ln).fromBinary(e, n)
                }
                static fromJson(e, n) {
                    return (new Ln).fromJson(e, n)
                }
                static fromJsonString(e, n) {
                    return (new Ln).fromJsonString(e, n)
                }
                static equals(e, n) {
                    return u.C.util.equals(Ln, e, n)
                }
            }
            Ln.runtime = u.C, Ln.typeName = "nike.clickstream.service.v1.TrackEventResponse", Ln.fields = u.C.util.newFieldList((() => [{
                no: 1,
                name: "message",
                kind: "scalar",
                T: 9
            }, {
                no: 2,
                name: "event_id",
                kind: "scalar",
                T: 9
            }]));
            var qn = t(6629);
            const An = {
                typeName: "nike.clickstream.service.v1.Service",
                methods: {
                    trackEvent: {
                        name: "TrackEvent",
                        I: On,
                        O: Ln,
                        kind: qn.I.Unary
                    }
                }
            };
            var Fn = t(611);
            const Un = (0, c.w)({
                    baseUrl: "https://clickstream.halfpipe.nike.com",
                    fetch: (e, n) => fetch(e, { ...n,
                        keepalive: !0
                    }),
                    useBinaryFormat: !(0, Fn.Bb)()
                }),
                xn = (0, a.t0)(An, Un)
        },
        5037: (e, n, t) => {
            t.d(n, {
                CheckoutType: () => r,
                R: () => l
            });
            var r, i = t(1623),
                s = t(9012),
                o = t(1831),
                a = t(1061),
                c = t(7682),
                m = t(1818),
                u = t(8861);
            ! function(e) {
                e[e.UNSPECIFIED = 0] = "UNSPECIFIED", e[e.NATIVE = 1] = "NATIVE", e[e.SINGLE_ITEM_BUY = 2] = "SINGLE_ITEM_BUY", e[e.LINE = 3] = "LINE", e[e.INSTANT_CHECKOUT = 4] = "INSTANT_CHECKOUT", e[e.PAYPAL = 5] = "PAYPAL"
            }(r || (r = {})), i.C.util.setEnumType(r, "nike.clickstream.core.commerce.v1.CheckoutType", [{
                no: 0,
                name: "CHECKOUT_TYPE_UNSPECIFIED"
            }, {
                no: 1,
                name: "CHECKOUT_TYPE_NATIVE"
            }, {
                no: 2,
                name: "CHECKOUT_TYPE_SINGLE_ITEM_BUY"
            }, {
                no: 3,
                name: "CHECKOUT_TYPE_LINE"
            }, {
                no: 4,
                name: "CHECKOUT_TYPE_INSTANT_CHECKOUT"
            }, {
                no: 5,
                name: "CHECKOUT_TYPE_PAYPAL"
            }]);
            class l extends s.Q {
                constructor(e) {
                    super(), this.checkoutId = "", this.checkoutType = r.UNSPECIFIED, this.items = [], this.payments = [], this.promoCodes = [], this.currency = m.Currency.UNSPECIFIED, i.C.util.initPartial(e, this)
                }
                static fromBinary(e, n) {
                    return (new l).fromBinary(e, n)
                }
                static fromJson(e, n) {
                    return (new l).fromJson(e, n)
                }
                static fromJsonString(e, n) {
                    return (new l).fromJsonString(e, n)
                }
                static equals(e, n) {
                    return i.C.util.equals(l, e, n)
                }
            }
            l.runtime = i.C, l.typeName = "nike.clickstream.core.commerce.v1.Checkout", l.fields = i.C.util.newFieldList((() => [{
                no: 1,
                name: "checkout_id",
                kind: "scalar",
                T: 9
            }, {
                no: 2,
                name: "checkout_type",
                kind: "enum",
                T: i.C.getEnumType(r)
            }, {
                no: 3,
                name: "items",
                kind: "message",
                T: o.yu,
                repeated: !0
            }, {
                no: 4,
                name: "payments",
                kind: "message",
                T: a.p2,
                repeated: !0
            }, {
                no: 9,
                name: "promo_codes",
                kind: "message",
                T: c.r,
                repeated: !0
            }, {
                no: 10,
                name: "currency",
                kind: "enum",
                T: i.C.getEnumType(m.Currency)
            }, {
                no: 11,
                name: "subtotal",
                kind: "message",
                T: u.J
            }, {
                no: 12,
                name: "discount",
                kind: "message",
                T: u.J
            }, {
                no: 13,
                name: "shipping",
                kind: "message",
                T: u.J
            }, {
                no: 14,
                name: "tax",
                kind: "message",
                T: u.J
            }, {
                no: 15,
                name: "total",
                kind: "message",
                T: u.J
            }]))
        },
        1831: (e, n, t) => {
            t.d(n, {
                yu: () => c
            });
            var r = t(9012),
                i = t(1623),
                s = t(1818),
                o = t(8861),
                a = t(8594);
            class c extends r.Q {
                constructor(e) {
                    super(), this.product = {
                        case: void 0
                    }, this.quantity = 0, this.currency = s.Currency.UNSPECIFIED, i.C.util.initPartial(e, this)
                }
                static fromBinary(e, n) {
                    return (new c).fromBinary(e, n)
                }
                static fromJson(e, n) {
                    return (new c).fromJson(e, n)
                }
                static fromJsonString(e, n) {
                    return (new c).fromJsonString(e, n)
                }
                static equals(e, n) {
                    return i.C.util.equals(c, e, n)
                }
            }
            c.runtime = i.C, c.typeName = "nike.clickstream.core.commerce.v1.LineItem", c.fields = i.C.util.newFieldList((() => [{
                no: 1,
                name: "merch_product",
                kind: "message",
                T: m,
                oneof: "product"
            }, {
                no: 2,
                name: "consumer_product",
                kind: "message",
                T: u,
                oneof: "product"
            }, {
                no: 3,
                name: "quantity",
                kind: "scalar",
                T: 13
            }, {
                no: 4,
                name: "currency",
                kind: "enum",
                T: i.C.getEnumType(s.Currency)
            }, {
                no: 5,
                name: "full_price_total",
                kind: "message",
                T: o.J
            }, {
                no: 6,
                name: "current_price_total",
                kind: "message",
                T: o.J
            }]));
            class m extends r.Q {
                constructor(e) {
                    super(), this.merchProductId = "", this.merchSkuId = "", i.C.util.initPartial(e, this)
                }
                static fromBinary(e, n) {
                    return (new m).fromBinary(e, n)
                }
                static fromJson(e, n) {
                    return (new m).fromJson(e, n)
                }
                static fromJsonString(e, n) {
                    return (new m).fromJsonString(e, n)
                }
                static equals(e, n) {
                    return i.C.util.equals(m, e, n)
                }
            }
            m.runtime = i.C, m.typeName = "nike.clickstream.core.commerce.v1.LineItem.MerchProduct", m.fields = i.C.util.newFieldList((() => [{
                no: 1,
                name: "merch_product_id",
                kind: "scalar",
                T: 9
            }, {
                no: 2,
                name: "merch_sku_id",
                kind: "scalar",
                T: 9
            }]));
            class u extends r.Q {
                constructor(e) {
                    super(), i.C.util.initPartial(e, this)
                }
                static fromBinary(e, n) {
                    return (new u).fromBinary(e, n)
                }
                static fromJson(e, n) {
                    return (new u).fromJson(e, n)
                }
                static fromJsonString(e, n) {
                    return (new u).fromJsonString(e, n)
                }
                static equals(e, n) {
                    return i.C.util.equals(u, e, n)
                }
            }
            u.runtime = i.C, u.typeName = "nike.clickstream.core.commerce.v1.LineItem.ConsumerProduct", u.fields = i.C.util.newFieldList((() => [{
                no: 1,
                name: "product_code",
                kind: "message",
                T: a.Hx
            }, {
                no: 2,
                name: "gtin",
                kind: "message",
                T: a.Xh
            }]))
        },
        7682: (e, n, t) => {
            t.d(n, {
                r: () => s
            });
            var r = t(9012),
                i = t(1623);
            class s extends r.Q {
                constructor(e) {
                    super(), this.value = "", i.C.util.initPartial(e, this)
                }
                static fromBinary(e, n) {
                    return (new s).fromBinary(e, n)
                }
                static fromJson(e, n) {
                    return (new s).fromJson(e, n)
                }
                static fromJsonString(e, n) {
                    return (new s).fromJsonString(e, n)
                }
                static equals(e, n) {
                    return i.C.util.equals(s, e, n)
                }
            }
            s.runtime = i.C, s.typeName = "nike.clickstream.core.commerce.v1.PromoCode", s.fields = i.C.util.newFieldList((() => [{
                no: 1,
                name: "value",
                kind: "scalar",
                T: 9
            }]))
        },
        9033: (e, n, t) => {
            t.d(n, {
                Theme: () => r
            });
            var r, i = t(1623);
            ! function(e) {
                e[e.UNSPECIFIED = 0] = "UNSPECIFIED", e[e.COMMERCE = 1] = "COMMERCE", e[e.JORDAN = 2] = "JORDAN"
            }(r || (r = {})), i.C.util.setEnumType(r, "nike.clickstream.core.ui.v1.Theme", [{
                no: 0,
                name: "THEME_UNSPECIFIED"
            }, {
                no: 1,
                name: "THEME_COMMERCE"
            }, {
                no: 2,
                name: "THEME_JORDAN"
            }])
        }
    }
]);
//# sourceMappingURL=grpcClient.chunk.9afb63.js.map