"use strict";
(self.webpackChunk_nike_analytics_client = self.webpackChunk_nike_analytics_client || []).push([
    [942, 847], {
        8861: (e, t, n) => {
            n.d(t, {
                J: () => a
            });
            var r = n(9012),
                i = n(7671),
                s = n(1623);
            class a extends r.Q {
                constructor(e) {
                    super(), this.units = i.M.zero, this.nanos = i.M.zero, s.C.util.initPartial(e, this)
                }
                static fromBinary(e, t) {
                    return (new a).fromBinary(e, t)
                }
                static fromJson(e, t) {
                    return (new a).fromJson(e, t)
                }
                static fromJsonString(e, t) {
                    return (new a).fromJsonString(e, t)
                }
                static equals(e, t) {
                    return s.C.util.equals(a, e, t)
                }
            }
            a.runtime = s.C, a.typeName = "nike.clickstream.core.commerce.v1.Amount", a.fields = s.C.util.newFieldList((() => [{
                no: 1,
                name: "units",
                kind: "scalar",
                T: 4
            }, {
                no: 2,
                name: "nanos",
                kind: "scalar",
                T: 4
            }]))
        },
        8594: (e, t, n) => {
            n.d(t, {
                AN: () => u,
                Hx: () => c,
                Xh: () => m,
                Yt: () => o,
                dy: () => l
            });
            var r = n(9012),
                i = n(1623),
                s = n(1818),
                a = n(8861);
            class o extends r.Q {
                constructor(e) {
                    super(), this.productId = {
                        case: void 0
                    }, this.currency = s.Currency.UNSPECIFIED, i.C.util.initPartial(e, this)
                }
                static fromBinary(e, t) {
                    return (new o).fromBinary(e, t)
                }
                static fromJson(e, t) {
                    return (new o).fromJson(e, t)
                }
                static fromJsonString(e, t) {
                    return (new o).fromJsonString(e, t)
                }
                static equals(e, t) {
                    return i.C.util.equals(o, e, t)
                }
            }
            o.runtime = i.C, o.typeName = "nike.clickstream.core.commerce.v1.Product", o.fields = i.C.util.newFieldList((() => [{
                no: 1,
                name: "merch_product_id",
                kind: "scalar",
                T: 9,
                oneof: "product_id"
            }, {
                no: 2,
                name: "product_code",
                kind: "message",
                T: c,
                oneof: "product_id"
            }, {
                no: 3,
                name: "currency",
                kind: "enum",
                T: i.C.getEnumType(s.Currency)
            }, {
                no: 4,
                name: "full_price",
                kind: "message",
                T: a.J
            }, {
                no: 5,
                name: "current_price",
                kind: "message",
                T: a.J
            }]));
            class c extends r.Q {
                constructor(e) {
                    super(), this.value = "", i.C.util.initPartial(e, this)
                }
                static fromBinary(e, t) {
                    return (new c).fromBinary(e, t)
                }
                static fromJson(e, t) {
                    return (new c).fromJson(e, t)
                }
                static fromJsonString(e, t) {
                    return (new c).fromJsonString(e, t)
                }
                static equals(e, t) {
                    return i.C.util.equals(c, e, t)
                }
            }
            c.runtime = i.C, c.typeName = "nike.clickstream.core.commerce.v1.ProductCode", c.fields = i.C.util.newFieldList((() => [{
                no: 1,
                name: "value",
                kind: "scalar",
                T: 9
            }]));
            class m extends r.Q {
                constructor(e) {
                    super(), this.value = "", i.C.util.initPartial(e, this)
                }
                static fromBinary(e, t) {
                    return (new m).fromBinary(e, t)
                }
                static fromJson(e, t) {
                    return (new m).fromJson(e, t)
                }
                static fromJsonString(e, t) {
                    return (new m).fromJsonString(e, t)
                }
                static equals(e, t) {
                    return i.C.util.equals(m, e, t)
                }
            }
            m.runtime = i.C, m.typeName = "nike.clickstream.core.commerce.v1.Gtin", m.fields = i.C.util.newFieldList((() => [{
                no: 1,
                name: "value",
                kind: "scalar",
                T: 9
            }]));
            class u extends r.Q {
                constructor(e) {
                    super(), i.C.util.initPartial(e, this)
                }
                static fromBinary(e, t) {
                    return (new u).fromBinary(e, t)
                }
                static fromJson(e, t) {
                    return (new u).fromJson(e, t)
                }
                static fromJsonString(e, t) {
                    return (new u).fromJsonString(e, t)
                }
                static equals(e, t) {
                    return i.C.util.equals(u, e, t)
                }
            }
            u.runtime = i.C, u.typeName = "nike.clickstream.core.commerce.v1.ProductFavorited", u.fields = i.C.util.newFieldList((() => [{
                no: 1,
                name: "product",
                kind: "message",
                T: o
            }]));
            class l extends r.Q {
                constructor(e) {
                    super(), i.C.util.initPartial(e, this)
                }
                static fromBinary(e, t) {
                    return (new l).fromBinary(e, t)
                }
                static fromJson(e, t) {
                    return (new l).fromJson(e, t)
                }
                static fromJsonString(e, t) {
                    return (new l).fromJsonString(e, t)
                }
                static equals(e, t) {
                    return i.C.util.equals(l, e, t)
                }
            }
            l.runtime = i.C, l.typeName = "nike.clickstream.core.commerce.v1.ProductUnfavorited", l.fields = i.C.util.newFieldList((() => [{
                no: 1,
                name: "product",
                kind: "message",
                T: o
            }]))
        },
        3069: (e, t, n) => {
            n.d(t, {
                Q4: () => c,
                Search_SearchType: () => r,
                vm: () => o
            });
            var r, i = n(9012),
                s = n(1623);
            class a extends i.Q {
                constructor(e) {
                    super(), this.searchType = r.UNSPECIFIED, this.searchTerms = "", this.searchText = "", s.C.util.initPartial(e, this)
                }
                static fromBinary(e, t) {
                    return (new a).fromBinary(e, t)
                }
                static fromJson(e, t) {
                    return (new a).fromJson(e, t)
                }
                static fromJsonString(e, t) {
                    return (new a).fromJsonString(e, t)
                }
                static equals(e, t) {
                    return s.C.util.equals(a, e, t)
                }
            }
            a.runtime = s.C, a.typeName = "nike.clickstream.core.commerce.v1.Search", a.fields = s.C.util.newFieldList((() => [{
                    no: 1,
                    name: "search_type",
                    kind: "enum",
                    T: s.C.getEnumType(r)
                }, {
                    no: 2,
                    name: "search_terms",
                    kind: "scalar",
                    T: 9
                }, {
                    no: 3,
                    name: "search_text",
                    kind: "scalar",
                    T: 9
                }])),
                function(e) {
                    e[e.UNSPECIFIED = 0] = "UNSPECIFIED", e[e.CAMERA = 1] = "CAMERA", e[e.HOT_SEARCH_TERM = 2] = "HOT_SEARCH_TERM", e[e.PHOTO = 3] = "PHOTO", e[e.POPULAR_TERM = 4] = "POPULAR_TERM", e[e.RECENT_TERM = 5] = "RECENT_TERM", e[e.SEARCH_PREVIEW = 6] = "SEARCH_PREVIEW", e[e.TYPEAHEAD = 7] = "TYPEAHEAD", e[e.USER_TYPED = 8] = "USER_TYPED", e[e.VISUAL_SEARCH = 9] = "VISUAL_SEARCH"
                }(r || (r = {})), s.C.util.setEnumType(r, "nike.clickstream.core.commerce.v1.Search.SearchType", [{
                    no: 0,
                    name: "SEARCH_TYPE_UNSPECIFIED"
                }, {
                    no: 1,
                    name: "SEARCH_TYPE_CAMERA"
                }, {
                    no: 2,
                    name: "SEARCH_TYPE_HOT_SEARCH_TERM"
                }, {
                    no: 3,
                    name: "SEARCH_TYPE_PHOTO"
                }, {
                    no: 4,
                    name: "SEARCH_TYPE_POPULAR_TERM"
                }, {
                    no: 5,
                    name: "SEARCH_TYPE_RECENT_TERM"
                }, {
                    no: 6,
                    name: "SEARCH_TYPE_SEARCH_PREVIEW"
                }, {
                    no: 7,
                    name: "SEARCH_TYPE_TYPEAHEAD"
                }, {
                    no: 8,
                    name: "SEARCH_TYPE_USER_TYPED"
                }, {
                    no: 9,
                    name: "SEARCH_TYPE_VISUAL_SEARCH"
                }]);
            class o extends i.Q {
                constructor(e) {
                    super(), this.conceptId = "", this.name = "", s.C.util.initPartial(e, this)
                }
                static fromBinary(e, t) {
                    return (new o).fromBinary(e, t)
                }
                static fromJson(e, t) {
                    return (new o).fromJson(e, t)
                }
                static fromJsonString(e, t) {
                    return (new o).fromJsonString(e, t)
                }
                static equals(e, t) {
                    return s.C.util.equals(o, e, t)
                }
            }
            o.runtime = s.C, o.typeName = "nike.clickstream.core.commerce.v1.SearchConcept", o.fields = s.C.util.newFieldList((() => [{
                no: 1,
                name: "concept_id",
                kind: "scalar",
                T: 9
            }, {
                no: 2,
                name: "name",
                kind: "scalar",
                T: 9
            }]));
            class c extends i.Q {
                constructor(e) {
                    super(), s.C.util.initPartial(e, this)
                }
                static fromBinary(e, t) {
                    return (new c).fromBinary(e, t)
                }
                static fromJson(e, t) {
                    return (new c).fromJson(e, t)
                }
                static fromJsonString(e, t) {
                    return (new c).fromJsonString(e, t)
                }
                static equals(e, t) {
                    return s.C.util.equals(c, e, t)
                }
            }
            c.runtime = s.C, c.typeName = "nike.clickstream.core.commerce.v1.SearchSubmitted", c.fields = s.C.util.newFieldList((() => [{
                no: 1,
                name: "search",
                kind: "message",
                T: a
            }]))
        },
        1289: (e, t, n) => {
            n.d(t, {
                Bd: () => d,
                G1: () => l,
                SortFilter: () => r,
                pM: () => c
            });
            var r, i = n(1623),
                s = n(9012),
                a = n(3069),
                o = n(8594);
            ! function(e) {
                e[e.UNSPECIFIED = 0] = "UNSPECIFIED", e[e.FEATURED = 1] = "FEATURED", e[e.NEWEST = 2] = "NEWEST", e[e.PRICE_LOW_TO_HIGH = 3] = "PRICE_LOW_TO_HIGH", e[e.PRICE_HIGH_TO_LOW = 4] = "PRICE_HIGH_TO_LOW"
            }(r || (r = {})), i.C.util.setEnumType(r, "nike.clickstream.surface.commerce.product_wall.v1.SortFilter", [{
                no: 0,
                name: "SORT_FILTER_UNSPECIFIED"
            }, {
                no: 1,
                name: "SORT_FILTER_FEATURED"
            }, {
                no: 2,
                name: "SORT_FILTER_NEWEST"
            }, {
                no: 3,
                name: "SORT_FILTER_PRICE_LOW_TO_HIGH"
            }, {
                no: 4,
                name: "SORT_FILTER_PRICE_HIGH_TO_LOW"
            }]);
            class c extends s.Q {
                constructor(e) {
                    super(), this.itemCount = 0, this.filters = [], this.sortFilter = r.UNSPECIFIED, this.underlyingCollection = {
                        case: void 0
                    }, i.C.util.initPartial(e, this)
                }
                static fromBinary(e, t) {
                    return (new c).fromBinary(e, t)
                }
                static fromJson(e, t) {
                    return (new c).fromJson(e, t)
                }
                static fromJsonString(e, t) {
                    return (new c).fromJsonString(e, t)
                }
                static equals(e, t) {
                    return i.C.util.equals(c, e, t)
                }
            }
            c.runtime = i.C, c.typeName = "nike.clickstream.surface.commerce.product_wall.v1.Collection", c.fields = i.C.util.newFieldList((() => [{
                no: 1,
                name: "item_count",
                kind: "scalar",
                T: 13
            }, {
                no: 2,
                name: "filters",
                kind: "message",
                T: a.vm,
                repeated: !0
            }, {
                no: 3,
                name: "sort_filter",
                kind: "enum",
                T: i.C.getEnumType(r)
            }, {
                no: 16,
                name: "browse",
                kind: "message",
                T: m,
                oneof: "underlying_collection"
            }, {
                no: 17,
                name: "search",
                kind: "message",
                T: u,
                oneof: "underlying_collection"
            }]));
            class m extends s.Q {
                constructor(e) {
                    super(), this.concepts = [], i.C.util.initPartial(e, this)
                }
                static fromBinary(e, t) {
                    return (new m).fromBinary(e, t)
                }
                static fromJson(e, t) {
                    return (new m).fromJson(e, t)
                }
                static fromJsonString(e, t) {
                    return (new m).fromJsonString(e, t)
                }
                static equals(e, t) {
                    return i.C.util.equals(m, e, t)
                }
            }
            m.runtime = i.C, m.typeName = "nike.clickstream.surface.commerce.product_wall.v1.Collection.Browse", m.fields = i.C.util.newFieldList((() => [{
                no: 1,
                name: "concepts",
                kind: "message",
                T: a.vm,
                repeated: !0
            }]));
            class u extends s.Q {
                constructor(e) {
                    super(), this.searchTerms = "", i.C.util.initPartial(e, this)
                }
                static fromBinary(e, t) {
                    return (new u).fromBinary(e, t)
                }
                static fromJson(e, t) {
                    return (new u).fromJson(e, t)
                }
                static fromJsonString(e, t) {
                    return (new u).fromJsonString(e, t)
                }
                static equals(e, t) {
                    return i.C.util.equals(u, e, t)
                }
            }
            u.runtime = i.C, u.typeName = "nike.clickstream.surface.commerce.product_wall.v1.Collection.Search", u.fields = i.C.util.newFieldList((() => [{
                no: 1,
                name: "search_terms",
                kind: "scalar",
                T: 9
            }]));
            class l extends s.Q {
                constructor(e) {
                    super(), this.index = 0, this.underlyingItem = {
                        case: void 0
                    }, i.C.util.initPartial(e, this)
                }
                static fromBinary(e, t) {
                    return (new l).fromBinary(e, t)
                }
                static fromJson(e, t) {
                    return (new l).fromJson(e, t)
                }
                static fromJsonString(e, t) {
                    return (new l).fromJsonString(e, t)
                }
                static equals(e, t) {
                    return i.C.util.equals(l, e, t)
                }
            }
            l.runtime = i.C, l.typeName = "nike.clickstream.surface.commerce.product_wall.v1.CollectionItem", l.fields = i.C.util.newFieldList((() => [{
                no: 1,
                name: "collection",
                kind: "message",
                T: c
            }, {
                no: 2,
                name: "index",
                kind: "scalar",
                T: 13
            }, {
                no: 16,
                name: "product",
                kind: "message",
                T: o.Yt,
                oneof: "underlying_item"
            }]));
            class d extends s.Q {
                constructor(e) {
                    super(), this.placeholder = !1, i.C.util.initPartial(e, this)
                }
                static fromBinary(e, t) {
                    return (new d).fromBinary(e, t)
                }
                static fromJson(e, t) {
                    return (new d).fromJson(e, t)
                }
                static fromJsonString(e, t) {
                    return (new d).fromJsonString(e, t)
                }
                static equals(e, t) {
                    return i.C.util.equals(d, e, t)
                }
            }
            d.runtime = i.C, d.typeName = "nike.clickstream.surface.commerce.product_wall.v1.SurfaceContext", d.fields = i.C.util.newFieldList((() => [{
                no: 1,
                name: "placeholder",
                kind: "scalar",
                T: 8
            }]))
        }
    }
]);
//# sourceMappingURL=ProductWallEnums.chunk.37cc2a.js.map