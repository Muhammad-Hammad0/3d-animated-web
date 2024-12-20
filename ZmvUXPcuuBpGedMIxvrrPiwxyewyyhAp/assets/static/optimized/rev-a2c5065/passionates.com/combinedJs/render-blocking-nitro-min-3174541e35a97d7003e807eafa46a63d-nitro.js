document.currentScript.setAttribute('data-nitro-for-id', 'affwp-tracking-js');
"use strict";
jQuery(document).ready(function($) {
    function affwp_track_visit(affiliate_id, url_campaign) {
        affwp_set_cookie(affwp_debug_vars.ref_cookie, affiliate_id), $.ajax({
            type: "POST",
            data: {
                action: "affwp_track_visit",
                affiliate: affiliate_id,
                campaign: url_campaign,
                url: document.URL,
                referrer: document.referrer
            },
            url: affwp_scripts.ajaxurl,
            success: function(response) {
                affwp_set_cookie(affwp_debug_vars.visit_cookie, response), affwp_set_cookie(affwp_debug_vars.campaign_cookie, url_campaign)
            }
        }).fail(function(response) {
            window.console && window.console.log && console.log(response)
        })
    }

    function affwp_set_cookie(name, value) {
        "cookie_domain" in AFFWP ? $.cookie(name, value, {
            expires: AFFWP.expiration,
            path: "/",
            domain: AFFWP.cookie_domain
        }) : $.cookie(name, value, {
            expires: AFFWP.expiration,
            path: "/"
        })
    }

    function affwp_get_query_vars() {
        for (var hash, vars = [], hashes = window.location.href.slice(window.location.href.indexOf("?") + 1).split("&"), i = 0; i < hashes.length; i++) {
            hash = hashes[i].split("="), vars.push(hash[0]);
            var key = "undefined" == typeof hash[1] ? 0 : 1,
                n = hash[key].indexOf("#");
            hash[key] = hash[key].substring(0, n != -1 ? n : hash[key].length), vars[hash[0]] = hash[key]
        }
        return vars
    }
    var ref_cookie = $.cookie(affwp_debug_vars.ref_cookie),
        credit_last = ($.cookie(affwp_debug_vars.visit_cookie), $.cookie(affwp_debug_vars.campaign_cookie), AFFWP.referral_credit_last);
    if (1 === AFFWP.debug) {
        var affwp_get_cookie_item = function(item) {
                var re = new RegExp(item + "=([^;]+)"),
                    value = re.exec(document.cookie);
                return null != value && unescape(value[1])
            },
            affwp_debug_inline_vars = function() {
                var vars = {
                    ajax_url: affwp_scripts.ajaxurl.length ? JSON.stringify(affwp_scripts.ajaxurl) : "unavailable",
                    ref: JSON.stringify(AFFWP.referral_var ? AFFWP.referral_var : affwp_get_cookie_item(affwp_debug_vars.ref_cookie)),
                    visit_cookie: affwp_get_cookie_item(affwp_debug_vars.visit_cookie) ? JSON.stringify(affwp_get_cookie_item(affwp_debug_vars.visit_cookie)) : "unavailable",
                    credit_last: AFFWP.referral_credit_last ? JSON.stringify(AFFWP.referral_credit_last) : "unavailable",
                    campaign: JSON.stringify(affwp_get_query_vars().campaign ? affwp_get_query_vars().campaign : affwp_get_cookie_item(affwp_debug_vars.campaign_cookie)),
                    currency: affwp_debug_vars.currency.length ? JSON.stringify(affwp_debug_vars.currency) : "unavailable",
                    version: affwp_debug_vars.version.length ? JSON.stringify(affwp_debug_vars.version) : "unavailable"
                };
                return vars
            },
            affwp_debug_get_integrations = function() {
                return "undefined" != typeof affwp_debug_vars && affwp_debug_vars.integrations
            },
            affwp_debug_output = function() {
                console.affwp("The following data is provided from AffiliateWP debug mode. To disable this information, please deactivate debug mode in AffiliateWP."), console.affwp("Available debug data: \n" + JSON.stringify(Object(affwp_debug_inline_vars()))), console.affwp("Integrations\n" + JSON.stringify(Object(affwp_debug_get_integrations())))
            },
            affwpConsoleStyles = ["background: transparent", "border-bottom: 2px solid #E34F43", "color: black", "display: block", "line-height: 18px", "text-align: left", "margin: 4px", "font-weight: bold"].join(";");
        console.affwp = function() {
            Array.prototype.unshift.call(arguments, "%c * AffiliateWP: ", affwpConsoleStyles + " *"), console.log.apply(console, arguments)
        }, affwp_debug_output()
    }
    if ("1" == credit_last || !ref_cookie) {
        var ref = affwp_get_query_vars()[AFFWP.referral_var],
            campaign = affwp_get_query_vars().campaign;
        if ("undefined" == typeof ref || $.isFunction(ref)) {
            var path = window.location.pathname.split("/");
            $.each(path, function(key, value) {
                AFFWP.referral_var == value && (ref = path[key + 1])
            })
        }
        $.isFunction(ref) || ("undefined" == typeof ref || $.isNumeric(ref) ? ref && !ref_cookie ? affwp_track_visit(ref, campaign) : "1" == credit_last && ref && ref_cookie && ref !== ref_cookie && ($.removeCookie(affwp_debug_vars.ref_cookie), affwp_track_visit(ref, campaign)) : $.ajax({
            type: "POST",
            data: {
                action: "affwp_get_affiliate_id",
                affiliate: ref
            },
            url: affwp_scripts.ajaxurl,
            success: function(response) {
                "1" == response.data.success && ("1" == credit_last && ref_cookie && ref_cookie != response.data.affiliate_id && $.removeCookie(affwp_debug_vars.ref_cookie), ("1" == credit_last && ref_cookie && ref_cookie != response.data.affiliate_id || !ref_cookie) && affwp_track_visit(response.data.affiliate_id, campaign))
            }
        }).fail(function(response) {
            window.console && window.console.log && console.log(response)
        }))
    }
});;