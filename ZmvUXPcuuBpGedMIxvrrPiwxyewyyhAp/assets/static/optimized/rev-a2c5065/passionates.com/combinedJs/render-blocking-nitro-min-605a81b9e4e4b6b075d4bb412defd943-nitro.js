document.currentScript.setAttribute('data-nitro-for-id', 'woocommerce-js');

function focus_populate_live_region() {
    var e = ["woocommerce-message", "woocommerce-error", "wc-block-components-notice-banner"].map(function(e) {
            return "." + e + '[role="alert"]'
        }).join(", "),
        o = document.querySelectorAll(e);
    if (0 !== o.length) {
        var t = o[0];
        t.setAttribute("tabindex", "-1");
        var n = setTimeout(function() {
            t.focus(), clearTimeout(n)
        }, 500)
    }
}

function refresh_sorted_by_live_region() {
    var e = document.querySelector('.woocommerce-result-count[data-is-sorted-by="true"]');
    if (e) var o = e.innerHTML,
        t = setTimeout(function() {
            e.innerHTML = "", e.innerHTML = o, clearTimeout(t)
        }, 1e3)
}

function on_document_ready() {
    focus_populate_live_region(), refresh_sorted_by_live_region()
}
jQuery(function(e) {
    e(".woocommerce-ordering").on("change", "select.orderby", function() {
        e(this).closest("form").trigger("submit")
    }), e("input.qty:not(.product-quantity input.qty)").each(function() {
        var o = parseFloat(e(this).attr("min"));
        o >= 0 && parseFloat(e(this).val()) < o && e(this).val(o)
    });
    var o = "store_notice" + (e(".woocommerce-store-notice").data("noticeId") || "");
    "hidden" === Cookies.get(o) ? e(".woocommerce-store-notice").hide() : e(".woocommerce-store-notice").show(), e(".woocommerce-store-notice__dismiss-link").on("click", function(t) {
        Cookies.set(o, "hidden", {
            path: "/"
        }), e(".woocommerce-store-notice").hide(), t.preventDefault()
    }), e(".woocommerce-input-wrapper span.description").length && e(document.body).on("click", function() {
        e(".woocommerce-input-wrapper span.description:visible").prop("aria-hidden", !0).slideUp(250)
    }), e(".woocommerce-input-wrapper").on("click", function(e) {
        e.stopPropagation()
    }), e(".woocommerce-input-wrapper :input").on("keydown", function(o) {
        var t = e(this).parent().find("span.description");
        if (27 === o.which && t.length && t.is(":visible")) return t.prop("aria-hidden", !0).slideUp(250), o.preventDefault(), !1
    }).on("click focus", function() {
        var o = e(this).parent(),
            t = o.find("span.description");
        o.addClass("currentTarget"), e(".woocommerce-input-wrapper:not(.currentTarget) span.description:visible").prop("aria-hidden", !0).slideUp(250), t.length && t.is(":hidden") && t.prop("aria-hidden", !1).slideDown(250), o.removeClass("currentTarget")
    }), e.scroll_to_notices = function(o) {
        o.length && e("html, body").animate({
            scrollTop: o.offset().top - 100
        }, 1e3)
    }, e('.woocommerce form .woocommerce-Input[type="password"]').wrap('<span class="password-input"></span>'), e(".woocommerce form input").filter(":password").parent("span").addClass("password-input"), e(".password-input").append('<span class="show-password-input"></span>'), e(".show-password-input").on("click", function() {
        e(this).hasClass("display-password") ? e(this).removeClass("display-password") : e(this).addClass("display-password"), e(this).hasClass("display-password") ? e(this).siblings(['input[type="password"]']).prop("type", "text") : e(this).siblings('input[type="text"]').prop("type", "password")
    }), e("a.coming-soon-footer-banner-dismiss").on("click", function(o) {
        var t = e(o.target);
        e.ajax({
            type: "post",
            url: t.data("rest-url"),
            data: {
                woocommerce_meta: {
                    coming_soon_banner_dismissed: "yes"
                }
            },
            beforeSend: function(e) {
                e.setRequestHeader("X-WP-Nonce", t.data("rest-nonce"))
            },
            complete: function() {
                e("#coming-soon-footer-banner").hide()
            }
        })
    })
}), document.addEventListener("DOMContentLoaded", on_document_ready);;