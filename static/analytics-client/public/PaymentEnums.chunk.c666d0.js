"use strict";
(self.webpackChunk_nike_analytics_client = self.webpackChunk_nike_analytics_client || []).push([
    [103], {
        1061: (n, A, E) => {
            E.d(A, {
                CreditCard: () => e,
                Es: () => I,
                PaymentMethod: () => _,
                PaymentModified_Operation: () => T,
                WG: () => R,
                p2: () => N
            });
            var _, e, T, D = E(1623),
                C = E(9012);
            ! function(n) {
                n[n.UNSPECIFIED = 0] = "UNSPECIFIED", n[n.UNKNOWN = 1] = "UNKNOWN", n[n.ALIPAY = 2] = "ALIPAY", n[n.APPLE_PAY = 3] = "APPLE_PAY", n[n.BANK_TRANSFER = 4] = "BANK_TRANSFER", n[n.COD = 5] = "COD", n[n.CREDIT_CARD = 6] = "CREDIT_CARD", n[n.FPX = 7] = "FPX", n[n.GCASH = 8] = "GCASH", n[n.GIFT_CARD = 9] = "GIFT_CARD", n[n.GOOGLE_PAY = 10] = "GOOGLE_PAY", n[n.GRAB_PAY = 11] = "GRAB_PAY", n[n.IDEAL = 12] = "IDEAL", n[n.KAKAO_PAY = 13] = "KAKAO_PAY", n[n.KLARNA = 14] = "KLARNA", n[n.KONBINI = 15] = "KONBINI", n[n.NAVER_PAY = 16] = "NAVER_PAY", n[n.OXXO = 17] = "OXXO", n[n.PAY_WITH_IYZICO = 18] = "PAY_WITH_IYZICO", n[n.PAYCO = 19] = "PAYCO", n[n.PAY_PAL_EXPRESS = 20] = "PAY_PAL_EXPRESS", n[n.PAY_PAL_STANDARD = 21] = "PAY_PAL_STANDARD", n[n.PROMOTION = 22] = "PROMOTION", n[n.SHINSEGAE = 23] = "SHINSEGAE", n[n.SINGLE_USE_CARD = 24] = "SINGLE_USE_CARD", n[n.SOFORT = 25] = "SOFORT", n[n.STITCH = 26] = "STITCH", n[n.TENPAY = 27] = "TENPAY", n[n.UNION_PAY = 28] = "UNION_PAY", n[n.VIPPS = 29] = "VIPPS", n[n.WE_CHAT = 30] = "WE_CHAT"
            }(_ || (_ = {})), D.C.util.setEnumType(_, "nike.clickstream.core.commerce.v1.PaymentMethod", [{
                    no: 0,
                    name: "PAYMENT_METHOD_UNSPECIFIED"
                }, {
                    no: 1,
                    name: "PAYMENT_METHOD_UNKNOWN"
                }, {
                    no: 2,
                    name: "PAYMENT_METHOD_ALIPAY"
                }, {
                    no: 3,
                    name: "PAYMENT_METHOD_APPLE_PAY"
                }, {
                    no: 4,
                    name: "PAYMENT_METHOD_BANK_TRANSFER"
                }, {
                    no: 5,
                    name: "PAYMENT_METHOD_COD"
                }, {
                    no: 6,
                    name: "PAYMENT_METHOD_CREDIT_CARD"
                }, {
                    no: 7,
                    name: "PAYMENT_METHOD_FPX"
                }, {
                    no: 8,
                    name: "PAYMENT_METHOD_GCASH"
                }, {
                    no: 9,
                    name: "PAYMENT_METHOD_GIFT_CARD"
                }, {
                    no: 10,
                    name: "PAYMENT_METHOD_GOOGLE_PAY"
                }, {
                    no: 11,
                    name: "PAYMENT_METHOD_GRAB_PAY"
                }, {
                    no: 12,
                    name: "PAYMENT_METHOD_IDEAL"
                }, {
                    no: 13,
                    name: "PAYMENT_METHOD_KAKAO_PAY"
                }, {
                    no: 14,
                    name: "PAYMENT_METHOD_KLARNA"
                }, {
                    no: 15,
                    name: "PAYMENT_METHOD_KONBINI"
                }, {
                    no: 16,
                    name: "PAYMENT_METHOD_NAVER_PAY"
                }, {
                    no: 17,
                    name: "PAYMENT_METHOD_OXXO"
                }, {
                    no: 18,
                    name: "PAYMENT_METHOD_PAY_WITH_IYZICO"
                }, {
                    no: 19,
                    name: "PAYMENT_METHOD_PAYCO"
                }, {
                    no: 20,
                    name: "PAYMENT_METHOD_PAY_PAL_EXPRESS"
                }, {
                    no: 21,
                    name: "PAYMENT_METHOD_PAY_PAL_STANDARD"
                }, {
                    no: 22,
                    name: "PAYMENT_METHOD_PROMOTION"
                }, {
                    no: 23,
                    name: "PAYMENT_METHOD_SHINSEGAE"
                }, {
                    no: 24,
                    name: "PAYMENT_METHOD_SINGLE_USE_CARD"
                }, {
                    no: 25,
                    name: "PAYMENT_METHOD_SOFORT"
                }, {
                    no: 26,
                    name: "PAYMENT_METHOD_STITCH"
                }, {
                    no: 27,
                    name: "PAYMENT_METHOD_TENPAY"
                }, {
                    no: 28,
                    name: "PAYMENT_METHOD_UNION_PAY"
                }, {
                    no: 29,
                    name: "PAYMENT_METHOD_VIPPS"
                }, {
                    no: 30,
                    name: "PAYMENT_METHOD_WE_CHAT"
                }]),
                function(n) {
                    n[n.UNSPECIFIED = 0] = "UNSPECIFIED", n[n.UNKNOWN = 1] = "UNKNOWN", n[n.AMERICAN_EXPRESS = 2] = "AMERICAN_EXPRESS", n[n.BC = 3] = "BC", n[n.CARTA_SI = 4] = "CARTA_SI", n[n.CARTE_BLANCHE = 5] = "CARTE_BLANCHE", n[n.CARTE_BLEUE = 6] = "CARTE_BLEUE", n[n.CITI = 7] = "CITI", n[n.CITIOLD = 8] = "CITIOLD", n[n.DANKORT = 9] = "DANKORT", n[n.DINERS = 10] = "DINERS", n[n.DISCOVER = 11] = "DISCOVER", n[n.HANA = 12] = "HANA", n[n.HANAOLD = 13] = "HANAOLD", n[n.HYUNDAI = 14] = "HYUNDAI", n[n.INTERNATIONAL_CARDS = 15] = "INTERNATIONAL_CARDS", n[n.INTERNATIONAL_MAESTRO = 16] = "INTERNATIONAL_MAESTRO", n[n.JCB = 17] = "JCB", n[n.JEJU = 18] = "JEJU", n[n.JEONBOK = 19] = "JEONBOK", n[n.KB = 20] = "KB", n[n.KWANG_JU = 21] = "KWANG_JU", n[n.LOTTE = 22] = "LOTTE", n[n.MAESTRO = 23] = "MAESTRO", n[n.MASTERCARD = 24] = "MASTERCARD", n[n.NH = 25] = "NH", n[n.SAMSUNG = 26] = "SAMSUNG", n[n.SHINHAN = 27] = "SHINHAN", n[n.SHINHYUP = 28] = "SHINHYUP", n[n.SUHYUP = 29] = "SUHYUP", n[n.TROY = 30] = "TROY", n[n.UNION_PAY = 31] = "UNION_PAY", n[n.VISA = 32] = "VISA", n[n.VISA_DEBIT = 33] = "VISA_DEBIT", n[n.VISA_ELECTRON = 34] = "VISA_ELECTRON", n[n.WOORI = 35] = "WOORI"
                }(e || (e = {})), D.C.util.setEnumType(e, "nike.clickstream.core.commerce.v1.CreditCard", [{
                    no: 0,
                    name: "CREDIT_CARD_UNSPECIFIED"
                }, {
                    no: 1,
                    name: "CREDIT_CARD_UNKNOWN"
                }, {
                    no: 2,
                    name: "CREDIT_CARD_AMERICAN_EXPRESS"
                }, {
                    no: 3,
                    name: "CREDIT_CARD_BC"
                }, {
                    no: 4,
                    name: "CREDIT_CARD_CARTA_SI"
                }, {
                    no: 5,
                    name: "CREDIT_CARD_CARTE_BLANCHE"
                }, {
                    no: 6,
                    name: "CREDIT_CARD_CARTE_BLEUE"
                }, {
                    no: 7,
                    name: "CREDIT_CARD_CITI"
                }, {
                    no: 8,
                    name: "CREDIT_CARD_CITIOLD"
                }, {
                    no: 9,
                    name: "CREDIT_CARD_DANKORT"
                }, {
                    no: 10,
                    name: "CREDIT_CARD_DINERS"
                }, {
                    no: 11,
                    name: "CREDIT_CARD_DISCOVER"
                }, {
                    no: 12,
                    name: "CREDIT_CARD_HANA"
                }, {
                    no: 13,
                    name: "CREDIT_CARD_HANAOLD"
                }, {
                    no: 14,
                    name: "CREDIT_CARD_HYUNDAI"
                }, {
                    no: 15,
                    name: "CREDIT_CARD_INTERNATIONAL_CARDS"
                }, {
                    no: 16,
                    name: "CREDIT_CARD_INTERNATIONAL_MAESTRO"
                }, {
                    no: 17,
                    name: "CREDIT_CARD_JCB"
                }, {
                    no: 18,
                    name: "CREDIT_CARD_JEJU"
                }, {
                    no: 19,
                    name: "CREDIT_CARD_JEONBOK"
                }, {
                    no: 20,
                    name: "CREDIT_CARD_KB"
                }, {
                    no: 21,
                    name: "CREDIT_CARD_KWANG_JU"
                }, {
                    no: 22,
                    name: "CREDIT_CARD_LOTTE"
                }, {
                    no: 23,
                    name: "CREDIT_CARD_MAESTRO"
                }, {
                    no: 24,
                    name: "CREDIT_CARD_MASTERCARD"
                }, {
                    no: 25,
                    name: "CREDIT_CARD_NH"
                }, {
                    no: 26,
                    name: "CREDIT_CARD_SAMSUNG"
                }, {
                    no: 27,
                    name: "CREDIT_CARD_SHINHAN"
                }, {
                    no: 28,
                    name: "CREDIT_CARD_SHINHYUP"
                }, {
                    no: 29,
                    name: "CREDIT_CARD_SUHYUP"
                }, {
                    no: 30,
                    name: "CREDIT_CARD_TROY"
                }, {
                    no: 31,
                    name: "CREDIT_CARD_UNION_PAY"
                }, {
                    no: 32,
                    name: "CREDIT_CARD_VISA"
                }, {
                    no: 33,
                    name: "CREDIT_CARD_VISA_DEBIT"
                }, {
                    no: 34,
                    name: "CREDIT_CARD_VISA_ELECTRON"
                }, {
                    no: 35,
                    name: "CREDIT_CARD_WOORI"
                }]);
            class N extends C.Q {
                constructor(n) {
                    super(), this.paymentMethod = _.UNSPECIFIED, this.creditCard = e.UNSPECIFIED, this.stored = !1, D.C.util.initPartial(n, this)
                }
                static fromBinary(n, A) {
                    return (new N).fromBinary(n, A)
                }
                static fromJson(n, A) {
                    return (new N).fromJson(n, A)
                }
                static fromJsonString(n, A) {
                    return (new N).fromJsonString(n, A)
                }
                static equals(n, A) {
                    return D.C.util.equals(N, n, A)
                }
            }
            N.runtime = D.C, N.typeName = "nike.clickstream.core.commerce.v1.Payment", N.fields = D.C.util.newFieldList((() => [{
                no: 1,
                name: "payment_method",
                kind: "enum",
                T: D.C.getEnumType(_)
            }, {
                no: 2,
                name: "credit_card",
                kind: "enum",
                T: D.C.getEnumType(e)
            }, {
                no: 3,
                name: "stored",
                kind: "scalar",
                T: 8
            }]));
            class I extends C.Q {
                constructor(n) {
                    super(), this.operation = T.UNSPECIFIED, D.C.util.initPartial(n, this)
                }
                static fromBinary(n, A) {
                    return (new I).fromBinary(n, A)
                }
                static fromJson(n, A) {
                    return (new I).fromJson(n, A)
                }
                static fromJsonString(n, A) {
                    return (new I).fromJsonString(n, A)
                }
                static equals(n, A) {
                    return D.C.util.equals(I, n, A)
                }
            }
            I.runtime = D.C, I.typeName = "nike.clickstream.core.commerce.v1.PaymentModified", I.fields = D.C.util.newFieldList((() => [{
                    no: 1,
                    name: "payment",
                    kind: "message",
                    T: N
                }, {
                    no: 2,
                    name: "operation",
                    kind: "enum",
                    T: D.C.getEnumType(T)
                }])),
                function(n) {
                    n[n.UNSPECIFIED = 0] = "UNSPECIFIED", n[n.ADDED = 1] = "ADDED", n[n.REMOVED = 2] = "REMOVED", n[n.UPDATED = 3] = "UPDATED"
                }(T || (T = {})), D.C.util.setEnumType(T, "nike.clickstream.core.commerce.v1.PaymentModified.Operation", [{
                    no: 0,
                    name: "OPERATION_UNSPECIFIED"
                }, {
                    no: 1,
                    name: "OPERATION_ADDED"
                }, {
                    no: 2,
                    name: "OPERATION_REMOVED"
                }, {
                    no: 3,
                    name: "OPERATION_UPDATED"
                }]);
            class R extends C.Q {
                constructor(n) {
                    super(), D.C.util.initPartial(n, this)
                }
                static fromBinary(n, A) {
                    return (new R).fromBinary(n, A)
                }
                static fromJson(n, A) {
                    return (new R).fromJson(n, A)
                }
                static fromJsonString(n, A) {
                    return (new R).fromJsonString(n, A)
                }
                static equals(n, A) {
                    return D.C.util.equals(R, n, A)
                }
            }
            R.runtime = D.C, R.typeName = "nike.clickstream.core.commerce.v1.PaymentSelected", R.fields = D.C.util.newFieldList((() => [{
                no: 1,
                name: "payment",
                kind: "message",
                T: N
            }]))
        }
    }
]);
//# sourceMappingURL=PaymentEnums.chunk.c666d0.js.map