document.currentScript.setAttribute('data-nitro-for-id', '1f983bac4cda19aced7c77f1df3ad402-1');
/*! For license information please see widget.js.LICENSE.txt */
! function() {
    var e = {
            652: function(e, t) {
                var n, i, o;
                ! function(r) {
                    var a, s, d, c, u, l, f, m, g, h, w, p, b;

                    function y() {
                        return window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver
                    }

                    function v(e, t, n) {
                        e.addEventListener(t, n, !1)
                    }

                    function C(e, t, n) {
                        e.removeEventListener(t, n, !1)
                    }

                    function x(e) {
                        return h[e] ? h[e].log : s
                    }

                    function O(e, t) {
                        I("log", e, t, x(e))
                    }

                    function k(e, t) {
                        I("info", e, t, x(e))
                    }

                    function M(e, t) {
                        I("warn", e, t, !0)
                    }

                    function I(e, t, n, i) {
                        !0 === i && "object" == typeof window.console && console[e](function(e) {
                            return u + "[" + (e = "Host page: " + (t = e), (e = window.top !== window.self ? window.parentIFrame && window.parentIFrame.getId ? window.parentIFrame.getId() + ": " + t : "Nested host page: " + t : e) + "]");
                            var t
                        }(t), n)
                    }

                    function T(e) {
                        function t() {
                            n("Height"), n("Width"), W((function() {
                                L(T), R(E), g("onResized", T)
                            }), T, "init")
                        }

                        function n(e) {
                            var t = Number(h[E]["max" + e]),
                                n = Number(h[E]["min" + e]),
                                i = e.toLowerCase();
                            e = Number(T[i]);
                            O(E, "Checking " + i + " is in range " + n + "-" + t), e < n && (e = n, O(E, "Set " + i + " to min value")), t < e && (e = t, O(E, "Set " + i + " to max value")), T[i] = "" + e
                        }

                        function i(e) {
                            return I.substr(I.indexOf(":") + c + e)
                        }

                        function o(e, t) {
                            var n, i;
                            n = function() {
                                var n, i;
                                S("Send Page Info", "pageInfo:" + (n = document.body.getBoundingClientRect(), i = T.iframe.getBoundingClientRect(), JSON.stringify({
                                    iframeHeight: i.height,
                                    iframeWidth: i.width,
                                    clientHeight: Math.max(document.documentElement.clientHeight, window.innerHeight || 0),
                                    clientWidth: Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
                                    offsetTop: parseInt(i.top - n.top, 10),
                                    offsetLeft: parseInt(i.left - n.left, 10),
                                    scrollTop: window.pageYOffset,
                                    scrollLeft: window.pageXOffset,
                                    documentHeight: document.documentElement.clientHeight,
                                    documentWidth: document.documentElement.clientWidth,
                                    windowHeight: window.innerHeight,
                                    windowWidth: window.innerWidth
                                })), e, t)
                            }, b[i = t] || (b[i] = setTimeout((function() {
                                b[i] = null, n()
                            }), 32))
                        }

                        function r(e) {
                            return e = e.getBoundingClientRect(), A(E), {
                                x: Math.floor(Number(e.left) + Number(f.x)),
                                y: Math.floor(Number(e.top) + Number(f.y))
                            }
                        }

                        function a(e) {
                            var t = e ? r(T.iframe) : {
                                    x: 0,
                                    y: 0
                                },
                                n = {
                                    x: Number(T.width) + t.x,
                                    y: Number(T.height) + t.y
                                };
                            O(E, "Reposition requested from iFrame (offset x:" + t.x + " y:" + t.y + ")"), window.top !== window.self ? window.parentIFrame ? window.parentIFrame["scrollTo" + (e ? "Offset" : "")](n.x, n.y) : M(E, "Unable to scroll to requested position, window.parentIFrame not found") : (f = n, s(), O(E, "--"))
                        }

                        function s() {
                            !1 !== g("onScroll", f) ? R(E) : N()
                        }

                        function d(e) {
                            var t, n = e.split("#")[1] || "",
                                i = (e = decodeURIComponent(n), document.getElementById(e) || document.getElementsByName(e)[0]);
                            i ? (t = r(i), O(E, "Moving to in page link (#" + n + ") at x: " + t.x + " y: " + t.y), f = {
                                x: t.x,
                                y: t.y
                            }, s(), O(E, "--")) : window.top !== window.self ? window.parentIFrame ? window.parentIFrame.moveToAnchor(n) : O(E, "In page link #" + n + " not found and window.parentIFrame not found") : O(E, "In page link #" + n + " not found")
                        }

                        function m(e) {
                            var t, n;
                            n = 0 === Number(T.width) && 0 === Number(T.height) ? {
                                x: (t = i(9).split(":"))[1],
                                y: t[0]
                            } : {
                                x: T.width,
                                y: T.height
                            }, g(e, {
                                iframe: T.iframe,
                                screenX: Number(n.x),
                                screenY: Number(n.y),
                                type: T.type
                            })
                        }

                        function g(e, t) {
                            return z(E, e, t)
                        }
                        var w, p, y, x, I = e.data,
                            T = {},
                            E = null;
                        "[iFrameResizerChild]Ready" === I ? function() {
                            for (var e in h) S("iFrame requested init", j(e), h[e].iframe, e)
                        }() : u === ("" + I).substr(0, l) && I.substr(l).split(":")[0] in h ? (T = function() {
                            var e = I.substr(l).split(":"),
                                t = e[1] ? parseInt(e[1], 10) : 0,
                                n = h[e[0]] && h[e[0]].iframe,
                                i = getComputedStyle(n);
                            return {
                                iframe: n,
                                id: e[0],
                                height: t + function(e) {
                                    return "border-box" !== e.boxSizing ? 0 : (e.paddingTop ? parseInt(e.paddingTop, 10) : 0) + (e = e.paddingBottom ? parseInt(e.paddingBottom, 10) : 0)
                                }(i) + function(e) {
                                    return "border-box" !== e.boxSizing ? 0 : (e.borderTopWidth ? parseInt(e.borderTopWidth, 10) : 0) + (e = e.borderBottomWidth ? parseInt(e.borderBottomWidth, 10) : 0)
                                }(i),
                                width: e[2],
                                type: e[3]
                            }
                        }(), E = T.id, h[E] && (h[E].loaded = !0), (x = T.type in {
                            true: 1,
                            false: 1,
                            undefined: 1
                        }) && O(E, "Ignoring init message from meta parent page"), !x && (y = !0, h[p = E] || (y = !1, M(T.type + " No settings for " + p + ". Message was: " + I)), y) && (O(E, "Received: " + I), w = !0, null === T.iframe && (M(E, "IFrame (" + T.id + ") not found"), w = !1), w && function() {
                            var t = e.origin,
                                n = h[E] && h[E].checkOrigin;
                            if (n && "" + t != "null" && ! function() {
                                    return n.constructor === Array ? function() {
                                        var e = 0,
                                            i = !1;
                                        for (O(E, "Checking connection is from allowed list of origins: " + n); e < n.length; e++)
                                            if (n[e] === t) {
                                                i = !0;
                                                break
                                            }
                                        return i
                                    }() : (e = h[E] && h[E].remoteHost, O(E, "Checking connection is from: " + e), t === e);
                                    var e
                                }()) throw new Error("Unexpected message received from: " + t + " for " + T.iframe.id + ". Message was: " + e.data + ". This error can be disabled by setting the checkOrigin: false option or by providing of array of trusted domains.");
                            return 1
                        }() && function() {
                            switch (h[E] && h[E].firstRun && h[E] && (h[E].firstRun = !1), T.type) {
                                case "close":
                                    F(T.iframe);
                                    break;
                                case "message":
                                    s = i(6), O(E, "onMessage passed: {iframe: " + T.iframe.id + ", message: " + s + "}"), g("onMessage", {
                                        iframe: T.iframe,
                                        message: JSON.parse(s)
                                    }), O(E, "--");
                                    break;
                                case "mouseenter":
                                    m("onMouseEnter");
                                    break;
                                case "mouseleave":
                                    m("onMouseLeave");
                                    break;
                                case "autoResize":
                                    h[E].autoResize = JSON.parse(i(9));
                                    break;
                                case "scrollTo":
                                    a(!1);
                                    break;
                                case "scrollToOffset":
                                    a(!0);
                                    break;
                                case "pageInfo":
                                    o(h[E] && h[E].iframe, E), r = E, e("Add ", v), h[r] && (h[r].stopPageInfo = n);
                                    break;
                                case "pageInfoStop":
                                    h[E] && h[E].stopPageInfo && (h[E].stopPageInfo(), delete h[E].stopPageInfo);
                                    break;
                                case "inPageLink":
                                    d(i(9));
                                    break;
                                case "reset":
                                    H(T);
                                    break;
                                case "init":
                                    t(), g("onInit", T.iframe);
                                    break;
                                default:
                                    0 === Number(T.width) && 0 === Number(T.height) ? M("Unsupported message received (" + T.type + "), this is likely due to the iframe containing a later version of iframe-resizer than the parent page") : t()
                            }

                            function e(e, t) {
                                function i() {
                                    h[r] ? o(h[r].iframe, r) : n()
                                }["scroll", "resize"].forEach((function(n) {
                                    O(r, e + n + " listener for sendPageInfo"), t(window, n, i)
                                }))
                            }

                            function n() {
                                e("Remove ", C)
                            }
                            var r, s
                        }())) : k(E, "Ignored: " + I)
                    }

                    function z(e, t, n) {
                        var i = null,
                            o = null;
                        if (h[e]) {
                            if ("function" != typeof(i = h[e][t])) throw new TypeError(t + " on iFrame[" + e + "] is not a function");
                            o = i(n)
                        }
                        return o
                    }

                    function E(e) {
                        e = e.id, delete h[e]
                    }

                    function F(e) {
                        var t = e.id;
                        if (!1 !== z(t, "onClose", t)) {
                            O(t, "Removing iFrame: " + t);
                            try {
                                e.parentNode && e.parentNode.removeChild(e)
                            } catch (e) {
                                M(e)
                            }
                            z(t, "onClosed", t), O(t, "--"), E(e)
                        } else O(t, "Close iframe cancelled by onClose event")
                    }

                    function A(e) {
                        null === f && O(e, "Get page position: " + (f = {
                            x: window.pageXOffset !== r ? window.pageXOffset : document.documentElement.scrollLeft,
                            y: window.pageYOffset !== r ? window.pageYOffset : document.documentElement.scrollTop
                        }).x + "," + f.y)
                    }

                    function R(e) {
                        null !== f && (window.scrollTo(f.x, f.y), O(e, "Set page position: " + f.x + "," + f.y), N())
                    }

                    function N() {
                        f = null
                    }

                    function H(e) {
                        O(e.id, "Size reset requested by " + ("init" === e.type ? "host page" : "iFrame")), A(e.id), W((function() {
                            L(e), S("reset", "reset", e.iframe, e.id)
                        }), e, "reset")
                    }

                    function L(e) {
                        function t(t) {
                            var i;
                            i = t, e.id ? (e.iframe.style[i] = e[i] + "px", O(e.id, "IFrame (" + n + ") " + i + " set to " + e[i] + "px")) : O("undefined", "messageData id not set"),
                                function(t) {
                                    function i() {
                                        Object.keys(h).forEach((function(e) {
                                            function t(e) {
                                                return "0px" === (h[n] && h[n].iframe.style[e])
                                            }
                                            var n;
                                            h[n = e] && null !== h[n].iframe.offsetParent && (t("height") || t("width")) && S("Visibility change", "resize", h[n].iframe, n)
                                        }))
                                    }

                                    function o(e) {
                                        O("window", "Mutation observed: " + e[0].target + " " + e[0].type), U(i, 16)
                                    }
                                    var r;
                                    d || "0" !== e[t] || (d = !0, O(n, "Hidden iFrame detected, creating visibility listener"), (r = y()) && function() {
                                        var e = document.querySelector("body");
                                        new r(o).observe(e, {
                                            attributes: !0,
                                            attributeOldValue: !1,
                                            characterData: !0,
                                            characterDataOldValue: !1,
                                            childList: !0,
                                            subtree: !0
                                        })
                                    }())
                                }(t)
                        }
                        var n = e.iframe.id;
                        h[n] && (h[n].sizeHeight && t("height"), h[n].sizeWidth && t("width"))
                    }

                    function W(e, t, n) {
                        n !== t.type && m && !window.jasmine ? (O(t.id, "Requesting animation frame"), m(e)) : e()
                    }

                    function S(e, t, n, i, o) {
                        var r = !1;
                        i = i || n.id, h[i] && (function() {
                            var o;
                            n && "contentWindow" in n && null !== n.contentWindow ? (o = h[i] && h[i].targetOrigin, O(i, "[" + e + "] Sending msg to iframe[" + i + "] (" + t + ") targetOrigin: " + o), n.contentWindow.postMessage(u + t, o)) : M(i, "[" + e + "] IFrame(" + i + ") not found")
                        }(), o && h[i] && h[i].warningTimeout && (h[i].msgTimeout = setTimeout((function() {
                            !h[i] || h[i].loaded || r || (r = !0, M(i, "IFrame has not responded within " + h[i].warningTimeout / 1e3 + " seconds. Check iFrameResizer.contentWindow.js has been loaded in iFrame. This message can be ignored if everything is working, or you can set the warningTimeout option to a higher value or zero to suppress this warning."))
                        }), h[i].warningTimeout)))
                    }

                    function j(e) {
                        return e + ":" + h[e].bodyMarginV1 + ":" + h[e].sizeWidth + ":" + h[e].log + ":" + h[e].interval + ":" + h[e].enablePublicMethods + ":" + h[e].autoResize + ":" + h[e].bodyMargin + ":" + h[e].heightCalculationMethod + ":" + h[e].bodyBackground + ":" + h[e].bodyPadding + ":" + h[e].tolerance + ":" + h[e].inPageLinks + ":" + h[e].resizeFrom + ":" + h[e].widthCalculationMethod + ":" + h[e].mouseEvents
                    }

                    function P(e, t) {
                        function n(e) {
                            var t = e.split("Callback");
                            2 === t.length && (this[t = "on" + t[0].charAt(0).toUpperCase() + t[0].slice(1)] = this[e], delete this[e], M(d, "Deprecated: '" + e + "' has been renamed '" + t + "'. The old method will be removed in the next major version."))
                        }
                        var i, o, d = ("" === (i = e.id) && (e.id = (o = t && t.id || p.id + a++, null !== document.getElementById(o) && (o += a++), i = o), s = (t || {}).log, O(i, "Added missing iframe ID: " + i + " (" + e.src + ")")), i);

                        function c(t) {
                            var n = h[d][t];
                            1 / 0 !== n && 0 !== n && (e.style[t] = "number" == typeof n ? n + "px" : n, O(d, "Set " + t + " = " + e.style[t]))
                        }

                        function u(e) {
                            if (h[d]["min" + e] > h[d]["max" + e]) throw new Error("Value for min" + e + " can not be greater than max" + e)
                        }
                        d in h && "iFrameResizer" in e ? M(d, "Ignored iFrame, already setup.") : (function(t) {
                            t = t || {}, h[d] = {
                                    firstRun: !0,
                                    iframe: e,
                                    remoteHost: e.src && e.src.split("/").slice(0, 3).join("/")
                                },
                                function(e) {
                                    if ("object" != typeof e) throw new TypeError("Options is not an object")
                                }(t), Object.keys(t).forEach(n, t),
                                function(e) {
                                    for (var t in p) Object.prototype.hasOwnProperty.call(p, t) && (h[d][t] = (Object.prototype.hasOwnProperty.call(e, t) ? e : p)[t])
                                }(t), h[d] && (h[d].targetOrigin = !0 === h[d].checkOrigin ? "" === (t = h[d].remoteHost) || null !== t.match(/^(about:blank|javascript:|file:\/\/)/) ? "*" : t : "*")
                        }(t), function() {
                            switch (O(d, "IFrame scrolling " + (h[d] && h[d].scrolling ? "enabled" : "disabled") + " for " + d), e.style.overflow = !1 === (h[d] && h[d].scrolling) ? "hidden" : "auto", h[d] && h[d].scrolling) {
                                case "omit":
                                    break;
                                case !0:
                                    e.scrolling = "yes";
                                    break;
                                case !1:
                                    e.scrolling = "no";
                                    break;
                                default:
                                    e.scrolling = h[d] ? h[d].scrolling : "no"
                            }
                        }(), u("Height"), u("Width"), c("maxHeight"), c("minHeight"), c("maxWidth"), c("minWidth"), "number" != typeof(h[d] && h[d].bodyMargin) && "0" !== (h[d] && h[d].bodyMargin) || (h[d].bodyMarginV1 = h[d].bodyMargin, h[d].bodyMargin = h[d].bodyMargin + "px"), function(t) {
                            var n, i = y();
                            i && (n = i, e.parentNode && new n((function(t) {
                                t.forEach((function(t) {
                                    Array.prototype.slice.call(t.removedNodes).forEach((function(t) {
                                        t === e && F(e)
                                    }))
                                }))
                            })).observe(e.parentNode, {
                                childList: !0
                            })), v(e, "load", (function() {
                                var n, i;
                                S("iFrame.onload", t, e, r, !0), n = h[d] && h[d].firstRun, i = h[d] && h[d].heightCalculationMethod in g, !n && i && H({
                                    iframe: e,
                                    height: 0,
                                    width: 0,
                                    type: "init"
                                })
                            })), S("init", t, e, r, !0)
                        }(j(d)), h[d] && (h[d].iframe.iFrameResizer = {
                            close: F.bind(null, h[d].iframe),
                            removeListeners: E.bind(null, h[d].iframe),
                            resize: S.bind(null, "Window resize", "resize", h[d].iframe),
                            moveToAnchor: function(e) {
                                S("Move to anchor", "moveToAnchor:" + e, h[d].iframe, d)
                            },
                            sendMessage: function(e) {
                                S("Send Message", "message:" + (e = JSON.stringify(e)), h[d].iframe, d)
                            }
                        }))
                    }

                    function U(e, t) {
                        null === w && (w = setTimeout((function() {
                            w = null, e()
                        }), t))
                    }

                    function B() {
                        "hidden" !== document.visibilityState && (O("document", "Trigger event: Visiblity change"), U((function() {
                            _("Tab Visable", "resize")
                        }), 16))
                    }

                    function _(e, t) {
                        Object.keys(h).forEach((function(n) {
                            var i;
                            h[i = n] && "parent" === h[i].resizeFrom && h[i].autoResize && !h[i].firstRun && S(e, t, h[n].iframe, n)
                        }))
                    }

                    function q() {
                        function e(e, n) {
                            n && (function() {
                                if (!n.tagName) throw new TypeError("Object is not a valid DOM element");
                                if ("IFRAME" !== n.tagName.toUpperCase()) throw new TypeError("Expected <IFRAME> tag, found <" + n.tagName + ">")
                            }(), P(n, e), t.push(n))
                        }
                        var t;
                        return function() {
                                for (var e = ["moz", "webkit", "o", "ms"], t = 0; t < e.length && !m; t += 1) m = window[e[t] + "RequestAnimationFrame"];
                                m ? m = m.bind(window) : O("setup", "RequestAnimationFrame not supported")
                            }(), v(window, "message", T), v(window, "resize", (function() {
                                O("window", "Trigger event: resize"), U((function() {
                                    _("Window resize", "resize")
                                }), 16)
                            })), v(document, "visibilitychange", B), v(document, "-webkit-visibilitychange", B),
                            function(n, i) {
                                var o;
                                switch (t = [], (o = n) && o.enablePublicMethods && M("enablePublicMethods option has been removed, public methods are now always available in the iFrame"), typeof i) {
                                    case "undefined":
                                    case "string":
                                        Array.prototype.forEach.call(document.querySelectorAll(i || "iframe"), e.bind(r, n));
                                        break;
                                    case "object":
                                        e(n, i);
                                        break;
                                    default:
                                        throw new TypeError("Unexpected data type (" + typeof i + ")")
                                }
                                return t
                            }
                    }
                    "undefined" != typeof window && (c = 7, l = (u = "[iFrameSizer]").length, m = window.requestAnimationFrame, p = {
                        autoResize: !(w = f = null),
                        bodyBackground: null,
                        bodyMargin: null,
                        bodyMarginV1: 8,
                        bodyPadding: null,
                        checkOrigin: !(d = s = !1),
                        inPageLinks: !(h = {}),
                        enablePublicMethods: !(a = 0),
                        heightCalculationMethod: "bodyOffset",
                        id: "iFrameResizer",
                        interval: 32,
                        log: !(g = {
                            max: 1,
                            scroll: 1,
                            bodyScroll: 1,
                            documentElementScroll: 1
                        }),
                        maxHeight: 1 / 0,
                        maxWidth: 1 / 0,
                        minHeight: 0,
                        minWidth: 0,
                        mouseEvents: !0,
                        resizeFrom: "parent",
                        scrolling: !1,
                        sizeHeight: !0,
                        sizeWidth: !1,
                        warningTimeout: 5e3,
                        tolerance: 0,
                        widthCalculationMethod: "scroll",
                        onClose: function() {
                            return !0
                        },
                        onClosed: function() {},
                        onInit: function() {},
                        onMessage: function() {
                            M("onMessage function not defined")
                        },
                        onMouseEnter: function() {},
                        onMouseLeave: function() {},
                        onResized: function() {},
                        onScroll: function() {
                            return !0
                        }
                    }, b = {}, window.jQuery && function(e) {
                        e.fn ? e.fn.iFrameResize || (e.fn.iFrameResize = function(e) {
                            return this.filter("iframe").each((function(t, n) {
                                P(n, e)
                            })).end()
                        }) : k("", "Unable to bind to jQuery, it is not fully loaded.")
                    }(window.jQuery), i = [], void 0 !== (o = "function" == typeof(n = q) ? n.apply(t, i) : n) && (e.exports = o), window.iFrameResize = window.iFrameResize || q())
                }()
            }
        },
        t = {};

    function n(i) {
        var o = t[i];
        if (void 0 !== o) return o.exports;
        var r = t[i] = {
            exports: {}
        };
        return e[i](r, r.exports, n), r.exports
    }
    n.n = function(e) {
            var t = e && e.__esModule ? function() {
                return e.default
            } : function() {
                return e
            };
            return n.d(t, {
                a: t
            }), t
        }, n.d = function(e, t) {
            for (var i in t) n.o(t, i) && !n.o(e, i) && Object.defineProperty(e, i, {
                enumerable: !0,
                get: t[i]
            })
        }, n.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        },
        function() {
            "use strict";
            n(652);
            window.CLUTCHCO = window.CLUTCHCO || {
                loaded: !1
            }, window.CLUTCHCO.items = [], window.CLUTCHCO.Init = function() {
                function e(e) {
                    this.id = Math.random(), this.container = e;
                    let t = e.getAttribute("data-url"),
                        n = e.getAttribute("data-widget-type"),
                        i = e.getAttribute("data-zero-state"),
                        o = e.getAttribute("data-darkbg"),
                        r = function(e) {
                            let t = /(px|%)/i,
                                n = "";
                            return e && e.length > 0 && (n = t.test(e) ? e : e + "px"), n
                        }(e.getAttribute("data-height")),
                        a = document.createElement("iframe"),
                        s = e.getAttribute("data-scale"),
                        d = e.getAttribute("data-scale-position"),
                        c = "";
                    const u = [],
                        l = {
                            uid: e.getAttribute("data-clutchcompany-id"),
                            domain: e.getAttribute("data-clutchcompany-domain"),
                            theme: e.getAttribute("data-theme"),
                            shape: e.getAttribute("data-shape"),
                            header_color: e.getAttribute("data-header-color"),
                            header_text_color: e.getAttribute("data-header-text-color"),
                            footer_color: e.getAttribute("data-footer-color"),
                            footer_text_color: e.getAttribute("data-footer-text-color"),
                            primary_color: e.getAttribute("data-primary-color"),
                            secondary_color: e.getAttribute("data-secondary-color"),
                            background_color: e.getAttribute("data-background-color"),
                            review_card_color: e.getAttribute("data-review-card-color"),
                            rel_nofollow: e.getAttribute("data-nofollow"),
                            width: e.getAttribute("data-width"),
                            reviews: e.getAttribute("data-reviews")
                        };
                    "https://clutch.co" !== t && "http://clutch.co" !== t && "http://widget.clutch.co" !== t || (t = "https://widget.clutch.co"), a.setAttribute("id", "iframe-" + this.id), o && (c = " Dark"), window.addEventListener("message", (function(e) {
                        a.setAttribute("title", e.data + n + c)
                    })), a.style.border = "none", a.allowTransparency = !0, a.width = "100%";
                    let f = "?ref_domain=" + window.location.hostname;
                    if (Object.keys(l).forEach((e => {
                            l[e] && (f += `&${e}=` + encodeURIComponent(l[e]))
                        })), f += "&ref_path=" + window.location.pathname, o && u.push("darkbg"), i && u.push("zero"), a.src = `${t}/widgets/get/${n}${u.length?`/${u.join("-")}`:""}${f}`, "autopx" === r) switch (n) {
                        case "4":
                        case "5":
                        case "8":
                            a.height = "600px";
                            break;
                        default:
                            a.height = "auto"
                    } else a.height = r;
                    e.appendChild(a), "true" === e.getAttribute("data-expandifr") && iFrameResize({
                        log: !1,
                        checkOrigin: !1,
                        inPageLinks: !0,
                        heightCalculationMethod: "bodyOffset",
                        onResized: function(e) {
                            ! function(e) {
                                if (s) {
                                    let t = s / 100,
                                        i = (t - 1) * e,
                                        o = a.parentElement;
                                    switch (n) {
                                        case "4":
                                        case "5":
                                        case "8":
                                        case "12":
                                            window.innerWidth < 991 ? (o.style.transform = "scale(1)", o.style.marginBottom = "0") : (o.style.transform = `scale(${t})`, o.style.marginBottom = `${i}px`, o.style.transformOrigin = "center" === d ? "50% 0" : "right" === d ? "100% 0" : "0 0")
                                    }
                                }
                            }(e.height)
                        }
                    }, a), a.onload = function() {
                        a.style.display = "block"
                    }, window.CLUTCHCO.items.push(a)
                }
                let t;
                if (document.getElementsByClassName) t = document.getElementsByClassName("clutch-widget");
                else if (document.querySelectorAll) t = document.querySelectorAll(".clutch-widget");
                else {
                    let e = [],
                        n = new RegExp("(^| )clutch-widget( |$)"),
                        i = document.body.getElementsByTagName("*");
                    for (let t = 0, o = i.length; t < o; t++) n.test(i[t].className) && e.push(i[t]);
                    t = e
                }
                if (!t || t.length < 1) return;
                let n = t.length;
                for (let i = 0; i < n; i++) {
                    let n = t[i];
                    n.querySelector("iframe") || new e(n)
                }
            }, window.CLUTCHCO.Destroy = function() {
                for (let e = 0; e < window.CLUTCHCO.items.length; e++) window.CLUTCHCO.items[e].parentElement.removeChild(window.CLUTCHCO.items[e]);
                window.CLUTCHCO.items = []
            }, document.addEventListener("readystatechange", (function(e) {
                "loading" !== e.target.readyState && !1 === window.CLUTCHCO.loaded && window.CLUTCHCO.Init()
            }))
        }()
}();;
document.currentScript.setAttribute('data-nitro-for-id', '4d9c46b5a5531247a82556044ec10f6d-1');
(() => {
    var e = {
            d: (t, o) => {
                for (var n in o) e.o(o, n) && !e.o(t, n) && Object.defineProperty(t, n, {
                    enumerable: !0,
                    get: o[n]
                })
            },
            o: (e, t) => Object.prototype.hasOwnProperty.call(e, t),
            r: e => {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                    value: "Module"
                }), Object.defineProperty(e, "__esModule", {
                    value: !0
                })
            }
        },
        t = {};
    (() => {
        "use strict";
        e.r(t), e.d(t, {
            closePopupWidget: () => _,
            destroyBadgeWidget: () => U,
            initBadgeWidget: () => R,
            initInlineWidget: () => x,
            initPopupWidget: () => W,
            showPopupWidget: () => I
        });
        const o = e => {
                ["interactive", "complete"].includes(document.readyState) ? e() : document.addEventListener("DOMContentLoaded", e)
            },
            n = (e, t) => Object.fromEntries(Object.entries(e).map((([e, o]) => [t(o, e), o]))),
            i = e => e.split(/(?=[A-Z])/).join("_").toLowerCase(),
            r = (e, t) => Object.fromEntries(Object.entries(e).filter((([e]) => t.includes(e)))),
            s = e => e ? Object.fromEntries(e.substr(1).split("&").map((e => e.split("="))).map((([e, t]) => [e, decodeURIComponent(t)]))) : {};
        var l = Object.defineProperty,
            a = Object.getOwnPropertySymbols,
            d = Object.prototype.hasOwnProperty,
            c = Object.prototype.propertyIsEnumerable,
            u = (e, t, o) => t in e ? l(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: o
            }) : e[t] = o,
            p = (e, t) => {
                for (var o in t || (t = {})) d.call(t, o) && u(e, o, t[o]);
                if (a)
                    for (var o of a(t)) c.call(t, o) && u(e, o, t[o]);
                return e
            };
        class h {
            constructor(e) {
                var t, o;
                t = "isMobile", o = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent), u(this, t + "", o), this.options = e, this.parseOptions()
            }
            inject() {
                return this.build(), this.format(), "inline" === this.embedType.toLowerCase() && this.resize && this.attachResizeListener(), this.parent.appendChild(this.buildSpinner()), this.parent.appendChild(this.node)
            }
            parseOptions() {
                if (this.options = Object.assign({}, {
                        inlineStyles: !1,
                        resize: !1
                    }, this.options), this.parent = this.options.parentElement, !this.parent) throw new Error("Calendly: Parent element not set");
                if (this.parent.jquery && (this.parent = this.parent[0]), this.inlineStyles = this.options.inlineStyles, this.embedType = this.options.embedType, this.url = (this.options.url || this.getUrlFromParent()).split("#")[0], this.resize = this.options.resize, !this.url) throw new Error("Calendly: Widget URL not set")
            }
            build() {
                this.node = document.createElement("iframe"), this.node.src = this.getSource(), this.node.width = "100%", this.node.height = "100%", this.node.frameBorder = "0", this.node.title = "Select a Date & Time - Calendly"
            }
            getSource() {
                const e = new URL(this.url, window.location);
                return e.search = this.getQuery(), e.toString()
            }
            getUrlFromParent() {
                return this.parent.getAttribute("data-url")
            }
            getQuery() {
                return e = p(p(p({
                    embed_domain: this.getDomain(),
                    embed_type: this.embedType
                }, this.getUtmParamsFromHost()), this.getParamsFromUrl()), this.getParamsFromOptions()), `?${Object.entries(e).map((([e,t])=>[e,encodeURIComponent(t)].join("="))).join("&")}`;
                var e
            }
            getUtmParamsFromHost() {
                const e = s(new URL(window.location.href).search);
                return r(e, ["utm_campaign", "utm_source", "utm_medium", "utm_content", "utm_term", "salesforce_uuid"])
            }
            getParamsFromUrl() {
                return s(new URL(this.url, window.location).search)
            }
            getParamsFromOptions() {
                return p(p({}, this.getPrefillParams()), this.getUtmParams())
            }
            getUtmParams() {
                if (!this.options.utm) return [];
                const e = r(this.options.utm, ["utmCampaign", "utmSource", "utmMedium", "utmContent", "utmTerm", "salesforceUuid"]);
                return n(e, ((e, t) => i(t)))
            }
            getPrefillParams() {
                if (!this.options.prefill) return [];
                const e = r(this.options.prefill, ["name", "firstName", "lastName", "email"]),
                    t = n(e, ((e, t) => i(t)));
                if (this.options.prefill.customAnswers) {
                    const e = this.options.prefill.customAnswers;
                    Object.entries(e).forEach((([e, o]) => {
                        e.match(/^a\d{1,2}$/) && (t[e] = o)
                    }))
                }
                return t
            }
            getDomain() {
                return window.location.host
            }
            format() {
                return this.isMobile ? this.formatMobile() : this.formatDesktop()
            }
            formatDesktop() {
                this.inlineStyles && this.parent.setAttribute("style", `position: relative;${this.parent.getAttribute("style")}`)
            }
            formatMobile() {
                if (this.inlineStyles) {
                    const e = `position: relative;-webkit-overflow-scrolling:touch;${this.parent.getAttribute("style")}`;
                    this.parent.setAttribute("style", e)
                }
                this.parent.className += " calendly-mobile"
            }
            attachResizeListener() {
                const e = e => {
                    this.parent.style.height = e
                };
                window.addEventListener("message", (t => {
                    t.data.event && "calendly.page_height" === t.data.event && (e(t.data.payload.height), this.parent.getBoundingClientRect().top < 0 && this.parent.scrollIntoView(!0, {
                        behavior: "auto"
                    }))
                }))
            }
            buildSpinner() {
                const e = document.createElement("div");
                return e.className = "calendly-spinner", e.appendChild(this.buildBounce(1)), e.appendChild(this.buildBounce(2)), e.appendChild(this.buildBounce(3)), e
            }
            buildBounce(e) {
                const t = document.createElement("div");
                return t.className = `calendly-bounce${e}`, t
            }
        }
        class m {
            constructor(e) {
                this.options = e
            }
            destroy() {
                return this.widget.parentNode.removeChild(this.widget)
            }
            buildWidget() {
                return this.widget = document.createElement("div"), this.widget.className = "calendly-badge-widget", this.widget.appendChild(this.buildContent())
            }
            inject() {
                return this.buildWidget(), document.body.insertBefore(this.widget, document.body.firstChild)
            }
            buildContent() {
                const e = document.createElement("div");
                return e.className = "calendly-badge-content", "#ffffff" === this.options.color && (e.className += " calendly-white"), e.onclick = this.options.onClick, e.innerHTML = this.options.text, e.style.background = this.options.color, e.style.color = this.options.textColor, this.options.branding && e.appendChild(this.buildBranding()), e
            }
            buildBranding() {
                const e = document.createElement("span");
                return e.innerHTML = "powered by Calendly", e
            }
        }
        var y = !1;
        if ("undefined" != typeof window) {
            var b = {
                get passive() {
                    y = !0
                }
            };
            window.addEventListener("testPassive", null, b), window.removeEventListener("testPassive", null, b)
        }
        var v = "undefined" != typeof window && window.navigator && window.navigator.platform && (/iP(ad|hone|od)/.test(window.navigator.platform) || "MacIntel" === window.navigator.platform && window.navigator.maxTouchPoints > 1),
            g = [],
            f = !1,
            w = -1,
            P = void 0,
            C = void 0,
            O = void 0,
            E = function(e) {
                return g.some((function(t) {
                    return !(!t.options.allowTouchMove || !t.options.allowTouchMove(e))
                }))
            },
            S = function(e) {
                var t = e || window.event;
                return !!E(t.target) || t.touches.length > 1 || (t.preventDefault && t.preventDefault(), !1)
            };
        class j {
            constructor(e, t, o, n = {}) {
                this.close = this.close.bind(this), this.url = e, this.onClose = t, this.embedType = o, this.options = n
            }
            show() {
                return this.buildOverlay(), this.insertOverlay(), this.lockPageScroll()
            }
            close() {
                return this.unlockPageScroll(), this.destroyOverlay(), this.onClose()
            }
            buildOverlay() {
                return this.overlay = document.createElement("div"), this.overlay.className = "calendly-overlay", this.overlay.appendChild(this.buildCloseOverlay()), this.overlay.appendChild(this.buildPopup()), this.overlay.appendChild(this.buildCloseButton())
            }
            insertOverlay() {
                return document.body.appendChild(this.overlay)
            }
            buildCloseOverlay() {
                const e = document.createElement("div");
                return e.className = "calendly-close-overlay", e.onclick = this.close, e
            }
            buildPopup() {
                const e = document.createElement("div");
                return e.className = "calendly-popup", e.appendChild(this.buildPopupContent()), e
            }
            buildPopupContent() {
                const e = document.createElement("div");
                return e.className = "calendly-popup-content", e.setAttribute("data-url", this.url), this.options.parentElement = e, this.options.embedType = this.embedType, new h(this.options).inject(), e
            }
            buildCloseButton() {
                const e = document.createElement("div");
                return e.className = "calendly-popup-close", e.onclick = this.close, e
            }
            destroyOverlay() {
                return this.overlay.parentNode.removeChild(this.overlay)
            }
            lockPageScroll() {
                return function(e, t) {
                    if (e) {
                        if (!g.some((function(t) {
                                return t.targetElement === e
                            }))) {
                            var o = {
                                targetElement: e,
                                options: t || {}
                            };
                            g = [].concat(function(e) {
                                if (Array.isArray(e)) {
                                    for (var t = 0, o = Array(e.length); t < e.length; t++) o[t] = e[t];
                                    return o
                                }
                                return Array.from(e)
                            }(g), [o]), v ? window.requestAnimationFrame((function() {
                                if (void 0 === C) {
                                    C = {
                                        position: document.body.style.position,
                                        top: document.body.style.top,
                                        left: document.body.style.left
                                    };
                                    var e = window,
                                        t = e.scrollY,
                                        o = e.scrollX,
                                        n = e.innerHeight;
                                    document.body.style.position = "fixed", document.body.style.top = -t + "px", document.body.style.left = -o + "px", setTimeout((function() {
                                        return window.requestAnimationFrame((function() {
                                            var e = n - window.innerHeight;
                                            e && t >= n && (document.body.style.top = -(t + e) + "px")
                                        }))
                                    }), 300)
                                }
                            })) : function(e) {
                                if (void 0 === O) {
                                    var t = !!e && !0 === e.reserveScrollBarGap,
                                        o = window.innerWidth - document.documentElement.clientWidth;
                                    if (t && o > 0) {
                                        var n = parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right"), 10);
                                        O = document.body.style.paddingRight, document.body.style.paddingRight = n + o + "px"
                                    }
                                }
                                void 0 === P && (P = document.body.style.overflow, document.body.style.overflow = "hidden")
                            }(t), v && (e.ontouchstart = function(e) {
                                1 === e.targetTouches.length && (w = e.targetTouches[0].clientY)
                            }, e.ontouchmove = function(t) {
                                1 === t.targetTouches.length && function(e, t) {
                                    var o = e.targetTouches[0].clientY - w;
                                    !E(e.target) && (t && 0 === t.scrollTop && o > 0 || function(e) {
                                        return !!e && e.scrollHeight - e.scrollTop <= e.clientHeight
                                    }(t) && o < 0 ? S(e) : e.stopPropagation())
                                }(t, e)
                            }, f || (document.addEventListener("touchmove", S, y ? {
                                passive: !1
                            } : void 0), f = !0))
                        }
                    } else console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.")
                }(this.overlay), document.addEventListener("touchmove", this.handleLockedTouchmove, {
                    passive: !1
                })
            }
            unlockPageScroll() {
                var e;
                return (e = this.overlay) ? (g = g.filter((function(t) {
                    return t.targetElement !== e
                })), v && (e.ontouchstart = null, e.ontouchmove = null, f && 0 === g.length && (document.removeEventListener("touchmove", S, y ? {
                    passive: !1
                } : void 0), f = !1)), v ? function() {
                    if (void 0 !== C) {
                        var e = -parseInt(document.body.style.top, 10),
                            t = -parseInt(document.body.style.left, 10);
                        document.body.style.position = C.position, document.body.style.top = C.top, document.body.style.left = C.left, window.scrollTo(t, e), C = void 0
                    }
                }() : (void 0 !== O && (document.body.style.paddingRight = O, O = void 0), void 0 !== P && (document.body.style.overflow = P, P = void 0))) : console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices."), document.removeEventListener("touchmove", this.handleLockedTouchmove, {
                    passive: !1
                })
            }
            handleLockedTouchmove(e) {
                return e.preventDefault()
            }
        }
        var T = Object.defineProperty,
            A = Object.getOwnPropertySymbols,
            L = Object.prototype.hasOwnProperty,
            B = Object.prototype.propertyIsEnumerable,
            k = (e, t, o) => t in e ? T(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: o
            }) : e[t] = o;
        const M = e => "true" === e.getAttribute("data-resize"),
            N = {},
            _ = () => {
                N.popup && N.popup.close()
            },
            I = (e, t = "PopupText", o = {}) => {
                _(), N.popup = new j(e, (() => delete N.popup), t, o), N.popup.show()
            },
            U = () => {
                N.badge && (N.badge.destroy(), delete N.badge)
            },
            x = e => {
                e.url && (null != e.parentElement || (e.parentElement = document.scripts[document.scripts.length - 1].parentNode), o((() => {
                    e.embedType = "Inline", new h(e).inject()
                })))
            },
            R = e => {
                o((() => (e => {
                    U();
                    const t = (e => {
                            const t = {};
                            return ["color", "textColor", "text", "branding"].forEach((o => {
                                t[o] = e[o], delete e[o]
                            })), t
                        })(e),
                        o = ((e, t) => {
                            for (var o in t || (t = {})) L.call(t, o) && k(e, o, t[o]);
                            if (A)
                                for (var o of A(t)) B.call(t, o) && k(e, o, t[o]);
                            return e
                        })({
                            onClick: () => I(e.url, "PopupWidget", e)
                        }, t);
                    N.badge = new m(o), N.badge.inject()
                })(e)))
            },
            W = e => {
                o((() => I(e.url, "PopupText", e)))
            };
        o((() => {
            const e = document.querySelectorAll(".calendly-inline-widget");
            Array.from(e).forEach((e => {
                (e => e.getAttribute("data-processed") || "false" === e.getAttribute("data-auto-load"))(e) || (e.setAttribute("data-processed", !0), new h({
                    parentElement: e,
                    inlineStyles: !0,
                    embedType: "Inline",
                    resize: M(e)
                }).inject())
            }))
        }))
    })();
    var o = Calendly = "undefined" == typeof Calendly ? {} : Calendly;
    for (var n in t) o[n] = t[n];
    t.__esModule && Object.defineProperty(o, "__esModule", {
        value: !0
    })
})();;