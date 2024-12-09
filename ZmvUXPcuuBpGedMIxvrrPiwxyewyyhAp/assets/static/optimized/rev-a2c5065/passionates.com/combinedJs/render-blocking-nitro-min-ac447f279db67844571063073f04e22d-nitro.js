document.currentScript.setAttribute('data-nitro-for-id', 'enr-frontend-js');
jQuery(function(e) {
    "use strict";
    var r = function(e) {
        return e.is(".processing") || e.parents(".processing").length
    };
    var n = function(n) {
        e.blockUI.defaults.overlayCSS.cursor = "wait";
        if (!r(n)) {
            n.addClass("processing").block({
                message: null,
                overlayCSS: {
                    background: "#fff",
                    opacity: .6
                }
            })
        }
    };
    var t = function(e) {
        e.removeClass("processing").unblock()
    };
    if ("yes" === enr_frontend_params.hide_variable_limited_notice && e("form.variations_form").length && e("form.variations_form").find(".limited-subscription-notice").length) {
        e("form.variations_form").find(".limited-subscription-notice").hide()
    }

    function i() {
        if (window.location.href.indexOf("switch-subscription") != -1 && window.location.href.indexOf("item") != -1) {
            e(".product form.cart").prop("action", "")
        }
    }
    var o = {
        variationForm: e(".variations_form"),
        cartForm: e("form.cart"),
        init: function() {
            e(document).on("found_variation.wc-variation-form", this.onFoundVariation);
            e(document).on("reset_data", this.onResetVariation)
        },
        onFoundVariation: function(e, r) {
            o.onResetVariation();
            if (r.enr_limited_subscription_notice) {
                o.variationForm.find(".woocommerce-variation-add-to-cart").after(r.enr_limited_subscription_notice)
            }
            if (r.enr_resubscribe_link) {
                o.variationForm.find(".woocommerce-variation-add-to-cart").after(r.enr_resubscribe_link)
            }
            if (r.enr_subscribe_now_form) {
                o.variationForm.find(".woocommerce-variation-add-to-cart").before(r.enr_subscribe_now_form);
                o.variationForm.find(".single_add_to_cart_button").text(r.enr_single_add_to_cart_text);
                o.variationForm.find(".enr-subscribe-now-wrapper #enr_subscribe_now").change()
            }
            i()
        },
        onResetVariation: function() {
            if (o.variationForm.find(".enr-variation-wrapper").length) {
                o.variationForm.find(".enr-variation-wrapper").remove()
            }
            if (o.variationForm.find(".enr-subscribe-now-wrapper").length) {
                o.variationForm.find(".enr-subscribe-now-wrapper").parent().remove()
            }
            o.variationForm.find(".single_add_to_cart_button").removeClass("enr_single_subscribe_button").text(enr_frontend_params.single_add_to_cart_text)
        }
    };
    var a = {
        wrapper: e(".enr-subscribe-now-wrapper"),
        init: function() {
            e(document).on("change", "#enr_subscribe_now,#enr_subscribe_plans,#enr_subscribe_period,#enr_subscribe_period_interval,#enr_subscribe_length", this.updateAction);
            e(document).on("updated_wc_div, updated_cart_totals", this.mayBeShowForm);
            if (this.wrapper.length > 0) {
                this.wrapper.find("#enr_subscribe_now").change();
                i()
            }
        },
        showForm: function(e) {
            var r = e;
            r = e.closest(".enr-subscribe-now-wrapper");
            if (r.length > 0) {
                if (r.find("#enr_subscribe_now").is(":checked")) {
                    r.find("tr:gt(0)").slideDown()
                } else {
                    r.find("tr:gt(0)").slideUp()
                }
            }
        },
        mayBeShowForm: function() {
            a.showForm(a.wrapper)
        },
        updateAction: function(r, i) {
            r.preventDefault();
            var o = e(r.currentTarget);
            i = i || false;
            a.showForm(o);
            n(a.getNode());
            e.ajax({
                type: "POST",
                url: enr_frontend_params.ajax_url,
                data: {
                    action: "_enr_subscribe_now",
                    security: enr_frontend_params.subscribe_now_nonce,
                    is_switch_request: enr_frontend_params.is_switch_request,
                    data: o.closest(".enr-subscribe-now-wrapper").find(":input[name]").serialize()
                },
                success: function(r) {
                    if (r.success) {
                        o.closest(r.data.subscribe_wrapper_class).empty().append(r.data.html);
                        a.showForm(o);
                        if (e(".single_add_to_cart_button").length) {
                            if ("1" !== enr_frontend_params.is_switch_request && o.closest(".enr-subscribe-now-wrapper").find("#enr_subscribe_now").is(":checked")) {
                                e(".single_add_to_cart_button").addClass("enr_single_subscribe_button").text(enr_frontend_params.subscribe_now_button_text)
                            } else {
                                e(".single_add_to_cart_button").removeClass("enr_single_subscribe_button").text(enr_frontend_params.single_add_to_cart_text)
                            }
                        }
                        if (false === r.data.refresh || true === i) {
                            e(document.body).trigger("update_checkout");
                            if (e(".woocommerce-cart-form").length) {
                                e(document.body).trigger("wc_update_cart")
                            }
                        } else {
                            e("#enr_subscribe_now").trigger("change", [true])
                        }
                        e(document.body).trigger("enr_subscribe_form_submitted_success")
                    }
                },
                complete: function() {
                    t(a.getNode())
                }
            });
            return false
        },
        getNode: function() {
            if (e(".woocommerce-cart-form").length) {
                return e("div.cart_totals")
            } else if (e(".woocommerce-checkout").length) {
                return e(".woocommerce-checkout-payment, .woocommerce-checkout-review-order-table").closest("form")
            } else {
                return e(".enr-subscribe-now-wrapper")
            }
        }
    };
    o.init();
    a.init()
});;