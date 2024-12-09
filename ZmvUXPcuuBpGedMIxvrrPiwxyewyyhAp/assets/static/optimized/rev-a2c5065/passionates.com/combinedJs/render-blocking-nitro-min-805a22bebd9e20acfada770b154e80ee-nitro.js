document.currentScript.setAttribute('data-nitro-for-id', 'cookie-law-info-js');
! function(e) {
    var t = {};

    function n(o) {
        if (t[o]) return t[o].exports;
        var c = t[o] = {
            i: o,
            l: !1,
            exports: {}
        };
        return e[o].call(c.exports, c, c.exports, n), c.l = !0, c.exports
    }
    n.m = e, n.c = t, n.d = function(e, t, o) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: o
        })
    }, n.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, n.t = function(e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var o = Object.create(null);
        if (n.r(o), Object.defineProperty(o, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var c in e) n.d(o, c, function(t) {
                return e[t]
            }.bind(null, c));
        return o
    }, n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "", n(n.s = 0)
}([function(e, t) {
    const n = window._ckyConfig,
        o = window._ckyStyles;
    n._backupNodes = [], n._resetConsentID = !1, n._bannerState = !1, n._preferenceOriginTag = !1, window.cookieyes = window.cookieyes || {};
    const c = window.cookieyes;
    c._ckyConsentStore = new Map, c._ckyGetCookieMap = function() {
        const e = {};
        try {
            document.cookie.split(";").map(t => {
                const [n, o] = t.split("=");
                n && (e[n.trim()] = o)
            })
        } catch (e) {}
        return e
    };
    const r = c._ckyGetCookieMap();
    c._ckyGetFromStore = function(e) {
        return c._ckyConsentStore.get(e) || ""
    }, c._ckySetInStore = function(e, t) {
        c._ckyConsentStore.set(e, t);
        let o = [];
        for (const [e, t] of c._ckyConsentStore) o.push(`${e}:${t}`);
        const r = n && n._expiry ? n._expiry : 365;
        c._ckySetCookie("cookieyes-consent", o.join(","), r)
    };
    const s = (r["cookieyes-consent"] || "").split(",").reduce((e, t) => {
        if (!t) return e;
        const [n, o] = t.split(":");
        return e[n] = o, e
    }, {});

    function i(e) {
        const t = document.querySelector("[data-cky-tag=" + e + "]");
        return t || !1
    }

    function a(e, t) {
        const n = d(e);
        n && n.addEventListener("click", t)
    }

    function u() {
        return l("remove", ...arguments)
    }

    function l(e, t, n, o = !0) {
        const c = d(t, o);
        return c && c.classList[e](n)
    }

    function d(e, t) {
        let n = e;
        switch (!0) {
            case e.startsWith("="):
                n = `[data-cky-tag="${e.substring(1)}"]`
        }
        const o = document.querySelector(n);
        return !o || t && !o.parentElement ? null : t ? o.parentElement : o
    }

    function y(e) {
        const t = new CustomEvent("cookieyes_consent_update", {
            detail: e
        });
        document.dispatchEvent(t)
    }

    function f() {
        C(), !0 === n._bannerConfig.config.revisitConsent.status && x()
    }

    function g() {
        ! function() {
            if (document.getElementById("cky-style") || !o) return;
            document.head.insertAdjacentHTML("beforeend", ` <style id="cky-style">${o.css}</style>`)
        }(),
        function() {
            const e = n._tags;
            Array.prototype.forEach.call(e, (function(e) {
                document.querySelectorAll("[data-cky-tag=" + e.tag + "]").forEach((function(t) {
                    let n = "";
                    for (const t in e.styles) n += `${t}: ${e.styles[t]};`;
                    t.style.cssText = n
                }))
            }))
        }(),
        function() {
            const e = document.getElementById("ckyBannerTemplate").innerHTML,
                t = (new DOMParser).parseFromString(e, "text/html");
            (function(e) {
                const t = e.querySelector('[data-cky-tag="detail"] .cky-footer-shadow'),
                    n = e.querySelector('[data-cky-tag="detail"]');
                if (!t) return;
                const o = n && n.style.backgroundColor || "#ffffff";
                t.style.background = `linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, ${o} 100%)`
            })(t), document.body.insertAdjacentHTML("afterbegin", t.body.innerHTML), "classic" === _() && p("=settings-button", "false");
            O(),
                function() {
                    if (!n._bannerConfig.config.auditTable.status) return;
                    const e = n._categories.map(({
                        slug: e
                    }) => e);
                    e.map(t => {
                        const n = "#ckyDetailCategory" + t,
                            o = n + "  .cky-accordion-btn";
                        p(o, "false"), a(n, ({
                            target: {
                                id: c
                            }
                        }) => {
                            c !== "ckySwitch" + t && function() {
                                return l("toggle", ...arguments)
                            }(n, "cky-accordion-active", !1) ? (p(o, "true"), e.filter(e => e !== t).map(e => {
                                u("#ckyDetailCategory" + e, "cky-accordion-active", !1), p(`#ckyDetailCategory${e} .cky-accordion-btn`, "false")
                            })) : p(o, "false")
                        })
                    })
                }(),
                function() {
                    for (const {
                            slug: e
                        } of n._categories) a("detail-category-title", () => document.getElementById("ckyCategory" + e).classList.toggle("cky-tab-active"));
                    a("=settings-button", () => j("settings-button")), a("=detail-close", () => L()), a("=optout-cancel-button", () => L()), a("=close-button", () => (c._ckySetInStore("action", "yes"), void f())), a("=donotsell-button", () => j("donotsell-button")), a("=reject-button", P("reject")), a("=accept-button", P("all")), a("=detail-accept-button", P("all")), a("=detail-save-button", P()), a("=detail-category-preview-save-button", P()), a("=optout-confirm-button", P()), a("=detail-reject-button", P("reject")), a("=revisit-consent", () => _revisitCkyConsent()), a("=optout-close", () => L())
                }(),
                function() {
                    const e = n._bannerConfig.config.optOption.toggle,
                        t = e.states.active.styles["background-color"],
                        o = e.states.inactive.styles["background-color"];
                    u("=optout-option", "cky-disabled", !1);
                    const r = n._shortCodes.find(e => "cky_optout_toggle_label" === e.key),
                        s = n._shortCodes.find(e => "cky_optout_option_title" === e.key),
                        i = r.content.replace("[cky_optout_option_title]", s.content),
                        l = "yes" === c._ckyGetFromStore("consent");
                    ! function(e, t, {
                        checked: n,
                        disabled: o,
                        addListeners: c
                    }, {
                        activeColor: r,
                        inactiveColor: s
                    }, i = !1) {
                        if (!e) return;
                        i && c && a("=optout-option-title", () => e.click());
                        if (e.checked = n, e.disabled = o, e.style.backgroundColor = n ? r : s, G(e, n, t, i), !c) return;
                        e.addEventListener("change", ({
                            currentTarget: n
                        }) => {
                            const o = n.checked;
                            n.style.backgroundColor = o ? r : s, G(e, o, t, i)
                        })
                    }(document.getElementById("ckyCCPAOptOut"), i, {
                        checked: l,
                        disabled: !1,
                        addListeners: !0
                    }, {
                        activeColor: t,
                        inactiveColor: o
                    }, !0)
                }(),
                function() {
                    const e = n._bannerConfig.config.videoPlaceholder.status,
                        t = n._bannerConfig.config.videoPlaceholder.styles;
                    if (!e) return;
                    if (!e) return;
                    const o = document.querySelectorAll('[data-cky-tag="placeholder-title"]');
                    if (o.length < 1) return;
                    Array.from(o).forEach(e => {
                        e.style.display = "block", e.addEventListener("click", () => {
                            c._ckyGetFromStore("action") && _revisitCkyConsent()
                        });
                        for (const n in t) t[n] && (e.style[n] = t[n])
                    })
                }(),
                function() {
                    const e = n._shortCodes.find(e => "cky_readmore" === e.key);
                    if (!e.status) return;
                    const t = e.content,
                        o = n._bannerConfig.config.readMore.styles,
                        c = document.querySelector('[data-cky-tag="description"]');
                    if (!c) return;
                    if (c.childNodes.length > 1) {
                        const e = document.querySelector('[data-cky-tag="description"] p:last-child');
                        e && e.insertAdjacentHTML("beforeend", "&nbsp;" + t)
                    } else c.insertAdjacentHTML("beforeend", "&nbsp;" + t);
                    const r = document.querySelectorAll('[data-cky-tag="readmore-button"]');
                    if (r.length < 1) return;
                    Array.from(r).forEach(e => {
                        for (const t in o) o[t] && (e.style[t] = o[t])
                    })
                }(),
                function() {
                    const e = document.getElementById("cky-style-inline");
                    e && e.remove()
                }(),
                function() {
                    const e = i("notice");
                    if (!e) return !1;
                    const t = e.closest(".cky-consent-container");
                    if (!t) return !1;
                    const o = n._bannerConfig.settings.type;
                    let c = n._bannerConfig.settings.position,
                        r = o;
                    "popup" === r && (c = "center");
                    r = "pushdown" === h() ? "classic" : r;
                    const s = `cky-${r}-${c}`;
                    t.classList.add(s);
                    const a = i("revisit-consent");
                    if (!a) return !1;
                    const u = "cky-revisit-" + n._bannerConfig.config.revisitConsent.position;
                    a.classList.add(u)
                }(),
                function() {
                    if (!n._rtl) return;
                    ["notice", "detail", "optout-popup", "revisit-consent", "video-placeholder"].forEach((function(e) {
                        i(e) && i(e).classList.add("cky-rtl")
                    }))
                }(), ["detail-powered-by", "optout-powered-by"].map(e => {
                    const t = document.querySelector(`[data-cky-tag="${e}"]`);
                    t && (t.style.display = "flex", t.style.justifyContent = "flex-end", t.style.alignItems = "center")
                }),
                function() {
                    const e = b(),
                        t = _();
                    if ("classic" === t) return;
                    if ("popup" === t) {
                        const [e, t] = I("notice");
                        M(e, t, !0), M(t, e)
                    }
                    const [n, o] = I("ccpa" === e ? "optout-popup" : "detail");
                    M(n, o, !0), M(o, n)
                }(),
                function() {
                    const e = "ccpa" === b() ? i("optout-popup") : i("detail");
                    if (!e) return !1;
                    const t = e.closest(".cky-modal");
                    if (!t) return !1;
                    if ("pushdown" !== h() && "popup" !== h()) {
                        const e = "cky-" + n._bannerConfig.settings.preferenceCenterType;
                        t.classList.add(e)
                    }
                }()
        }(),
        function() {
            const e = b(),
                t = n._shortCodes.find(e => "cky_show_desc" === e.key),
                o = n._shortCodes.find(e => "cky_hide_desc" === e.key);
            if (!t || !o) return;
            const c = o.content,
                r = t.content,
                s = window.innerWidth < 376 ? 150 : 300,
                i = document.querySelector(`[data-cky-tag="${"gdpr"===e?"detail":"optout"}-description"]`);
            if (i.textContent.length < s) return;
            const u = i.innerHTML,
                l = (new DOMParser).parseFromString(u, "text/html").querySelectorAll("body > p");
            if (l.length <= 1) return;
            let d = "";
            for (let e = 0; e < l.length; e++) {
                if (e === l.length - 1) return;
                const t = l[e];
                if (`${d}${t.outerHTML}`.length > s && t.insertAdjacentHTML("beforeend", "...&nbsp;" + r), d = `${d}${t.outerHTML}`, d.length > s) break
            }

            function y() {
                i.innerHTML = `${u}${c}`, a("=hide-desc-button", f)
            }

            function f() {
                i.innerHTML = d, a("=show-desc-button", y)
            }
            f()
        }(), !c._ckyGetFromStore("action") || function() {
            let e = new URL(document.location).searchParams;
            return e.get("cky_preview") && "true" === e.get("cky_preview")
        }() ? (S(), function() {
            const e = b();
            c._ckySetInStore("consent", "no");
            const t = Q(),
                o = {
                    accepted: [],
                    rejected: []
                };
            let r = "yes";
            for (const s of n._categories)("gdpr" === e && !s.isNecessary && !s.defaultConsent[e] || "ccpa" === e && t && !s.defaultConsent.ccpa) && (r = "no"), "no" === r ? o.rejected.push(s.slug) : o.accepted.push(s.slug), c._ckySetInStore("" + s.slug, r);
            F(), y(o)
        }(), function() {
            if (c._ckyGetFromStore("consentid")) return;
            const e = c._ckyRandomString(32);
            c._ckySetInStore("consentid", e), n._resetConsentID = !0
        }()) : f()
    }

    function p(e, t = null) {
        const n = d(e);
        if (!n) return;
        if (t) return n.setAttribute("aria-expanded", t);
        const o = "true" === n.getAttribute("aria-expanded") ? "false" : "true";
        n.setAttribute("aria-expanded", o)
    }
    async function k() {
        try {
            g(),
                function() {
                    for (const e of n._categories) "yes" !== c._ckyGetFromStore(e.slug) && N(e)
                }(), document.querySelector("body").addEventListener("click", e => {
                    const t = ".cky-banner-element, .cky-banner-element *";
                    (e.target.matches ? e.target.matches(t) : e.target.msMatchesSelector(t)) && _revisitCkyConsent()
                })
        } catch (e) {
            console.error(e)
        }
    }
    var m;

    function b() {
        return n._bannerConfig.settings.applicableLaw
    }

    function _() {
        return n._bannerConfig.settings.type
    }

    function h() {
        return "classic" === _() ? "pushdown" : n._bannerConfig.settings.preferenceCenterType
    }

    function v() {
        const e = i("notice"),
            t = e && e.closest(".cky-consent-container") || !1;
        return t && t || !1
    }

    function C() {
        const e = v();
        e && e.classList.add("cky-hide")
    }

    function S() {
        const e = v();
        e && e.classList.remove("cky-hide")
    }

    function w() {
        if ("classic" === _()) return v();
        let e = "ccpa" === b() ? i("optout-popup") : i("detail");
        return e && e.closest(".cky-modal") || !1
    }

    function L() {
        const e = w();
        e && e.classList.remove(A()), "classic" !== _() ? (! function() {
            const e = document.querySelector(".cky-overlay");
            e && e.classList.add("cky-hide")
        }(), c._ckyGetFromStore("action") || S()) : (p("=settings-button", "false"), u("=notice", "cky-consent-bar-expand")), c._ckyGetFromStore("action") && x();
        const t = n._preferenceOriginTag;
        t && function(e) {
            const t = i(e);
            if (!t) return;
            t.focus()
        }(t)
    }

    function E() {
        const e = w();
        e && e.classList.add(A()), "classic" !== _() ? (! function() {
            const e = document.querySelector(".cky-overlay");
            e && e.classList.remove("cky-hide")
        }(), C()) : (p("=settings-button"), function() {
            l("add", ...arguments)
        }("=notice", "cky-consent-bar-expand"))
    }

    function $() {
        const e = w();
        e && e.classList.toggle(A()), "pushdown" !== h() && function() {
            const e = document.querySelector(".cky-overlay");
            e && e.classList.toggle("cky-hide")
        }()
    }

    function A() {
        return "pushdown" === h() ? "cky-consent-bar-expand" : "cky-modal-open"
    }

    function T() {
        const e = i("revisit-consent");
        return e && e || !1
    }

    function x() {
        const e = T();
        e && e.classList.remove("cky-revisit-hide")
    }

    function j(e = !1) {
        n._preferenceOriginTag = e, "classic" === _() ? ($(), p("=settings-button")) : E()
    }

    function I(e) {
        const t = document.querySelector(`[data-cky-tag="${e}"]`);
        if (!t) return [];
        const n = Array.from(t.querySelectorAll('a:not([disabled]), button:not([disabled]), [tabindex]:not([disabled]):not([tabindex="-1"])')).filter(e => "none" !== e.style.display);
        return n.length <= 0 ? [] : [n[0], n[n.length - 1]]
    }

    function M(e, t, n = !1) {
        e && t && e.addEventListener("keydown", e => {
            9 !== e.which || n && !e.shiftKey || !n && e.shiftKey || (e.preventDefault(), t.focus())
        })
    }

    function N({
        cookies: e
    }) {
        const t = c._ckyGetCookieMap();
        for (const {
                cookieID: n,
                domain: o
            } of e) t[n] && [o, ""].map(e => c._ckySetCookie(n, "", 0, e))
    }

    function O(e = !1) {
        for (const t of n._categories) {
            const o = c._ckyGetFromStore(t.slug);
            q(t, "yes" === o || !o && t.defaultConsent[b()] || t.isNecessary, t.isNecessary, n._shortCodes.find(e => "cky_category_toggle_label" === e.key).content.replace("[cky_preference_{{category_slug}}_title]", t.name), e), D(t)
        }
    }

    function q(e, t, o, c, r = !1) {
        const s = n._bannerConfig.config.preferenceCenter.toggle,
            i = s.states.active.styles["background-color"],
            a = s.states.inactive.styles["background-color"];
        ["ckyCategoryDirect", "ckySwitch"].map(s => {
            const u = document.getElementById(`${s}${e.slug}`);
            u && (! function(e, t = {}, o = !1) {
                if (o) return;
                "detail-category-toggle" === e.parentElement.getAttribute("data-cky-tag") ? function(e, t) {
                    let o = e.closest(".cky-accordion-item");
                    if (!o) return;
                    const c = o.querySelector(".cky-switch");
                    t.isNecessary ? c && c.remove() : ("classic" === _() && n._bannerConfig.config.categoryPreview.status || t.cookies && 0 === t.cookies.length) && c && c.remove()
                }(e, t) : "detail-category-preview-toggle" === e.parentElement.getAttribute("data-cky-tag") && function(e, t) {
                    t.cookies && 0 === t.cookies.length && !t.isNecessary && e.parentElement.parentElement.remove()
                }(e, t);
                if (!t.isNecessary) {
                    const e = t.name,
                        n = document.querySelector(`[data-cky-tag="detail-category-title"][aria-label="${e}"]`);
                    if (n) {
                        const e = n.closest(".cky-accordion-item").querySelector(".cky-always-active");
                        e && e.remove()
                    }
                }
            }(u, e, r), u.checked = t, u.disabled = o, u.style.backgroundColor = t ? i : a, G(u, t, c), r || u.addEventListener("change", ({
                currentTarget: e
            }) => {
                const t = e.checked;
                e.style.backgroundColor = t ? i : a, G(u, t, c)
            }))
        })
    }

    function D(e) {
        if (!1 === n._bannerConfig.config.auditTable.status) {
            const t = document.querySelector(`#ckyDetailCategory${e.slug} [data-cky-tag="audit-table"]`);
            t && t.remove();
            const n = document.querySelector(`#ckyDetailCategory${e.slug} .cky-accordion-chevron`);
            n && n.classList.add("cky-accordion-chevron-hide")
        }
    }

    function G(e, t, o, c = !1) {
        if (!e) return;
        const r = t ? "disable" : "enable",
            s = `cky_${r}_${c?"optout":"category"}_label`,
            i = n._shortCodes.find(e => e.key === s);
        if (!i) return;
        const a = o.replace(/{{status}}/g, r).replace(`[${s}]`, i.content);
        e.setAttribute("aria-label", a)
    }

    function P(e = "custom") {
        return () => {
            ! function(e = "all") {
                const t = b(),
                    o = Q();
                c._ckySetInStore("action", "yes"), "gdpr" === t ? c._ckySetInStore("consent", "reject" === e ? "no" : "yes") : c._ckySetInStore("consent", o ? "yes" : "no");
                const r = {
                    accepted: [],
                    rejected: []
                };
                for (const s of n._categories) {
                    let n = "no";
                    n = "gdpr" === t ? s.isNecessary || "reject" !== e && ("custom" !== e || Q(s.slug)) ? "yes" : "no" : o && !s.defaultConsent.ccpa ? "no" : "yes", c._ckySetInStore("" + s.slug, n), "no" === n ? (r.rejected.push(s.slug), N(s)) : r.accepted.push(s.slug)
                }
                F(), y(r)
            }(e), f(), L(),
                function() {
                    "gdpr" === b() && O(!0);
                    !0 === n._bannerConfig.behaviours.reloadBannerOnAccept && window.location.reload()
                }()
        }
    }["consentid", "consent", "action"].concat(n._categories.map(({
        slug: e
    }) => e)).map(e => c._ckyConsentStore.set(e, s[e] || "")), c._ckyGetCookie = function(e) {
        const t = new RegExp(e + "=([^;]+)").exec(document.cookie);
        return t && Array.isArray(t) && t[1] ? unescape(t[1]) : null
    }, c._ckySetCookie = function(e, t, o = 0, c = n._rootDomain) {
        const r = new Date;
        c && (c = "domain=" + c);
        const s = 0 === o ? 0 : r.setTime(r.getTime() + 24 * o * 60 * 60 * 1e3);
        document.cookie = `${e}=${t}; expires=${new Date(s).toUTCString()}; path=/;${c}; SameSite=Strict;`
    }, _revisitCkyConsent = function() {
        "classic" === _() && S(), j(),
            function(e = !1) {
                const t = T();
                t && (!0 === e ? _ckyRevisitHide() : t.classList.toggle("cky-revisit-hide"))
            }()
    }, c._ckyRandomString = function(e, t = !0) {
        const n = (t ? "0123456789" : "") + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghiklmnopqrstuvwxyz",
            o = [];
        for (let t = 0; t < e; t++) o.push(n[Math.floor(Math.random() * n.length)]);
        return t ? btoa(o.join("")).replace(/\=+$/, "") : o.join("")
    }, m = async function() {
        try {
            await k()
        } catch (e) {
            console.error(e)
        }
    }, "undefined" != typeof document && ("complete" !== document.readyState && "interactive" !== document.readyState ? document.addEventListener("DOMContentLoaded", m) : m());
    const B = document.createElement;

    function F() {
        if (1 === navigator.doNotTrack) return;
        const e = c._ckyGetFromStore("consent");
        ("gdpr" !== b() || e && "yes" === e) && (n._backupNodes = n._backupNodes.filter(({
            position: e,
            node: t,
            uniqueID: n
        }) => {
            try {
                if (W(t.src)) return !0;
                if ("script" === t.nodeName.toLowerCase()) {
                    const n = document.createElement("script");
                    n.src = t.src, n.type = "text/javascript", document[e].appendChild(n)
                } else {
                    const e = document.getElementById(n);
                    if (!e) return !1;
                    const o = document.createElement("iframe");
                    o.src = t.src, o.width = e.offsetWidth, o.height = e.offsetHeight, e.parentNode.insertBefore(o, e), e.parentNode.removeChild(e)
                }
                return !1
            } catch (e) {
                return console.error(e), !1
            }
        }))
    }

    function H(e, t) {
        const o = e.hasAttribute("data-cookieyes") && e.getAttribute("data-cookieyes");
        if (!o) return;
        const c = o.replace("cookieyes-", "");
        for (const e of n._categories)
            if (e.isNecessary && e.slug === c) return;
        const r = n._providersToBlock.find(({
            re: e
        }) => e === t);
        r ? r.isOverridden ? r.categories.includes(c) || r.categories.push(c) : (r.categories = [c], r.isOverridden = !0) : n._providersToBlock.push({
            re: t,
            categories: [c],
            fullPath: !1
        })
    }
    document.createElement = (...e) => {
        const t = B.call(document, ...e);
        if ("script" !== t.nodeName.toLowerCase()) return t;
        const n = t.setAttribute.bind(t);
        return Object.defineProperties(t, {
            src: {
                get: function() {
                    return t.getAttribute("src")
                },
                set: function(e) {
                    return K(t, e) && n("type", "javascript/blocked"), n("src", e), !0
                }
            },
            type: {
                get: function() {
                    return t.getAttribute("type")
                },
                set: function(e) {
                    return e = K(t) ? "javascript/blocked" : e, n("type", e), !0
                }
            }
        }), t.setAttribute = (e, o) => {
            if ("type" === e || "src" === e) return t[e] = o;
            n(e, o), "data-cookieyes" !== e || K(t) || n("type", "text/javascript")
        }, t
    };
    const R = new MutationObserver((function(e) {
        for (const {
                addedNodes: t
            } of e)
            for (const e of t)
                if (e.src && e.nodeName && ["script", "iframe"].includes(e.nodeName.toLowerCase())) try {
                    const t = e.src.startsWith("//") ? `${window.location.protocol}${e.src}` : e.src,
                        {
                            hostname: o,
                            pathname: r
                        } = new URL(t),
                        s = `${o}${r}`.replace(/^www./, "");
                    if (H(e, s), !W(s)) continue;
                    const i = c._ckyRandomString(8, !1);
                    if ("iframe" === e.nodeName.toLowerCase()) Y(e, i);
                    else {
                        e.type = "javascript/blocked";
                        const t = function(n) {
                            n.preventDefault(), e.removeEventListener("beforescriptexecute", t)
                        };
                        e.addEventListener("beforescriptexecute", t)
                    }
                    const a = document.head.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_CONTAINED_BY ? "head" : "body";
                    e.remove(), n._backupNodes.push({
                        position: a,
                        node: e.cloneNode(),
                        uniqueID: i
                    })
                } catch (e) {}
    }));

    function U(e) {
        const t = c._ckyGetFromStore(e);
        return "no" === t || !t && n._categories.some(t => t.slug === e && !t.isNecessary)
    }

    function W(e) {
        const t = n._providersToBlock.find(({
            re: t
        }) => {
            return new RegExp((n = t, n.replace(/[.*+?^${}()[\]\\]/g, "\\$&"))).test(e);
            var n
        });
        return t && t.categories.some(e => U(e))
    }

    function K(e, t) {
        return e.hasAttribute("data-cookieyes") && U(e.getAttribute("data-cookieyes").replace("cookieyes-", "")) || W(t || e.src)
    }

    function Q(e = "") {
        return (e ? ["ckySwitch", "ckyCategoryDirect"] : ["ckyCCPAOptOut"]).some(t => {
            const n = document.getElementById(`${t}${e}`);
            return n && n.checked
        })
    }

    function Y(e, t) {
        const o = n._shortCodes.find(e => "cky_video_placeholder" === e.key).content,
            {
                offsetWidth: c,
                offsetHeight: r
            } = e;
        if (0 === c || 0 === r) return;
        e.insertAdjacentHTML("beforebegin", ("" + o).replace("[UNIQUEID]", t));
        const s = document.getElementById(t);
        s.style.width = c + "px", s.style.height = r + "px";
        const i = document.querySelector(`#${t} .video-placeholder-text-normal`);
        i.style.display = "none";
        const a = function(e) {
            const t = e.match(/^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/);
            return !!(t && Array.isArray(t) && t[2] && 11 === t[2].length) && t[2]
        }(e.src);
        a && (s.classList.replace("video-placeholder-normal", "video-placeholder-youtube"), s.style.backgroundImage = `linear-gradient(rgba(76,72,72,.7),rgba(76,72,72,.7)),url('https://img.youtube.com/vi/${a}/maxresdefault.jpg')`, i.classList.replace("video-placeholder-text-normal", "video-placeholder-text-youtube"))
    }
    R.observe(document.documentElement, {
        childList: !0,
        subtree: !0
    }), window.revisitCkyConsent = () => _revisitCkyConsent(), window.getCkyConsent = function() {
        const e = {
            activeLaw: "",
            categories: {},
            isUserActionCompleted: !1,
            consentID: "",
            languageCode: ""
        };
        try {
            e.activeLaw = b(), n._categories.forEach(t => {
                e.categories[t.slug] = "yes" === c._ckyGetFromStore(t.slug)
            }), e.isUserActionCompleted = "yes" === c._ckyGetFromStore("action"), e.consentID = c._ckyGetFromStore("consentid") || "", e.languageCode = n._language || ""
        } catch (e) {}
        return e
    }
}]);;