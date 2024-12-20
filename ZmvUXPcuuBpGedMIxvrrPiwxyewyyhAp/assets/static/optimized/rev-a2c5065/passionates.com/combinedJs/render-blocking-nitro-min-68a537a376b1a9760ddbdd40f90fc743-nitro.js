document.currentScript.setAttribute('data-nitro-for-id', 'jquery-cookie-js');
/*!
 * jQuery Cookie Plugin v1.4.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
! function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? e(require("jquery")) : e(jQuery)
}(function(e) {
    var n = /\+/g;

    function o(e) {
        return r.raw ? e : encodeURIComponent(e)
    }

    function i(e, o) {
        var i = r.raw ? e : function(e) {
            0 === e.indexOf('"') && (e = e.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
            try {
                return e = decodeURIComponent(e.replace(n, " ")), r.json ? JSON.parse(e) : e
            } catch (o) {}
        }(e);
        return "function" == typeof o ? o(i) : i
    }
    var r = e.cookie = function(n, t, u) {
        if (t !== undefined && "function" != typeof t) {
            if ("number" == typeof(u = e.extend({}, r.defaults, u)).expires) {
                var c = u.expires,
                    f = u.expires = new Date;
                f.setTime(+f + 864e5 * c)
            }
            return document.cookie = [o(n), "=", function(e) {
                return o(r.json ? JSON.stringify(e) : String(e))
            }(t), u.expires ? "; expires=" + u.expires.toUTCString() : "", u.path ? "; path=" + u.path : "", u.domain ? "; domain=" + u.domain : "", u.secure ? "; secure" : ""].join("")
        }
        for (var d, a = n ? undefined : {}, p = document.cookie ? document.cookie.split("; ") : [], s = 0, m = p.length; s < m; s++) {
            var x = p[s].split("="),
                y = (d = x.shift(), r.raw ? d : decodeURIComponent(d)),
                k = x.join("=");
            if (n && n === y) {
                a = i(k, t);
                break
            }
            n || (k = i(k)) === undefined || (a[y] = k)
        }
        return a
    };
    r.defaults = {}, e.removeCookie = function(n, o) {
        return e.cookie(n) !== undefined && (e.cookie(n, "", e.extend({}, o, {
            expires: -1
        })), !e.cookie(n))
    }
});;