document.currentScript.setAttribute('data-nitro-for-id', 'woo-ml-public-script-js');
jQuery(document).ready(function(e) {
    const t = ["billing_email", "billing_first_name", "billing_last_name", "woo_ml_subscribe"];
    l();
    var o;
    if (jQuery("#woo_ml_preselect_enabled") ? .val() == "yes") {
        jQuery("#woo_ml_subscribe").prop("checked", true)
    }

    function l() {
        const t = document.querySelector("#billing_email");
        const o = document.querySelector("#billing_first_name");
        const i = document.querySelector("#billing_last_name");
        const c = document.querySelector("#woo_ml_subscribe");
        if (t !== null && !t.form ? .querySelector("#woo_ml_subscribe")) {
            if (document.getElementById("woo_ml_subscribe") || woo_ml_public_post.checkbox_settings ? .enabled === "no") {
                return false
            }
            const e = document.createElement("input");
            const o = document.createElement("label");
            e.setAttribute("type", woo_ml_public_post.checkbox_settings ? .hidden === "no" ? "checkbox" : "hidden");
            e.setAttribute("id", "woo_ml_subscribe");
            e.setAttribute("value", 1);
            e.checked = !(woo_ml_public_post.checkbox_settings ? .preselect === "no");
            if (woo_ml_public_post.checkbox_settings ? .hidden === "no") {
                o.appendChild(e);
                o.appendChild(document.createTextNode(woo_ml_public_post.checkbox_settings.label));
                t.insertAdjacentElement("afterend", o)
            }
            t.insertAdjacentElement("afterend", e);
            l()
        }
        if (t !== null) {
            t.addEventListener("change", e => {
                n(e)
            })
        }
        if (o !== null) {
            o.addEventListener("change", e => {
                if (o.value.length > 0) {
                    n(e)
                }
            })
        }
        if (i !== null) {
            i.addEventListener("change", e => {
                if (i.value.length > 0) {
                    n(e)
                }
            })
        }
        if (c !== null) {
            e(document).on("change", c, function(e) {
                if (e.target.id == "woo_ml_subscribe") {
                    n(e)
                }
            })
        }
    }

    function n(e) {
        if (document.querySelector("#billing_email") !== null && document.querySelector("#billing_email").value.length > 0) {
            i(e)
        }
    }

    function i(e) {
        clearTimeout(o);
        o = setTimeout(() => {
            if (!t.includes(e.target.id)) {
                return false
            }
            if (!getCookie("mailerlite_checkout_token")) {
                var o = new Date;
                o.setTime(o.getTime() + 48 * 3600 * 1e3);
                document.cookie = `mailerlite_checkout_token=${(+new Date).toString()}; expires=${o.toUTCString()}; path=/`
            }
            const l = document.querySelector("#woo_ml_subscribe").checked;
            let n = document.querySelector("#billing_first_name") ? .value ? ? "";
            let i = document.querySelector("#billing_last_name") ? .value ? ? "";
            const c = document.querySelector("#billing_email") ? .value;
            jQuery.ajax({
                url: woo_ml_public_post.ajax_url,
                type: "post",
                data: {
                    action: "post_woo_ml_email_cookie",
                    email: c,
                    signup: l,
                    language: woo_ml_public_post.language,
                    first_name: n,
                    last_name: i,
                    cookie_mailerlite_checkout_token: getCookie("mailerlite_checkout_token")
                }
            })
        }, 2)
    }
});

function getCookie(e) {
    const t = `; ${document.cookie}`;
    const o = t.split(`; ${e}=`);
    if (o.length === 2) {
        return o.pop().split(";").shift()
    }
    return null
};