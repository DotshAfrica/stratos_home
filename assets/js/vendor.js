! function(t, e) { "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function(t) { if (!t.document) throw new Error("jQuery requires a window with a document"); return e(t) } : e(t) }("undefined" != typeof window ? window : this, function(t, e) {
    function n(t) { var e = !!t && "length" in t && t.length,
            n = rt.type(t); return "function" !== n && !rt.isWindow(t) && ("array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t) }

    function i(t, e, n) { if (rt.isFunction(e)) return rt.grep(t, function(t, i) { return !!e.call(t, i, t) !== n }); if (e.nodeType) return rt.grep(t, function(t) { return t === e !== n }); if ("string" == typeof e) { if (ft.test(e)) return rt.filter(e, t, n);
            e = rt.filter(e, t) } return rt.grep(t, function(t) { return J.call(e, t) > -1 !== n }) }

    function r(t, e) { for (;
            (t = t[e]) && 1 !== t.nodeType;); return t }

    function s(t) { var e = {}; return rt.each(t.match(_t) || [], function(t, n) { e[n] = !0 }), e }

    function o() { G.removeEventListener("DOMContentLoaded", o), t.removeEventListener("load", o), rt.ready() }

    function a() { this.expando = rt.expando + a.uid++ }

    function l(t, e, n) { var i; if (void 0 === n && 1 === t.nodeType)
            if (i = "data-" + e.replace(kt, "-$&").toLowerCase(), "string" == typeof(n = t.getAttribute(i))) { try { n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : St.test(n) ? rt.parseJSON(n) : n) } catch (t) {}
                Ct.set(t, e, n) } else n = void 0;
        return n }

    function u(t, e, n, i) { var r, s = 1,
            o = 20,
            a = i ? function() { return i.cur() } : function() { return rt.css(t, e, "") },
            l = a(),
            u = n && n[3] || (rt.cssNumber[e] ? "" : "px"),
            c = (rt.cssNumber[e] || "px" !== u && +l) && Et.exec(rt.css(t, e)); if (c && c[3] !== u) { u = u || c[3], n = n || [], c = +l || 1;
            do { s = s || ".5", c /= s, rt.style(t, e, c + u) } while (s !== (s = a() / l) && 1 !== s && --o) } return n && (c = +c || +l || 0, r = n[1] ? c + (n[1] + 1) * n[2] : +n[2], i && (i.unit = u, i.start = c, i.end = r)), r }

    function c(t, e) { var n = void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e || "*") : void 0 !== t.querySelectorAll ? t.querySelectorAll(e || "*") : []; return void 0 === e || e && rt.nodeName(t, e) ? rt.merge([t], n) : n }

    function h(t, e) { for (var n = 0, i = t.length; n < i; n++) Tt.set(t[n], "globalEval", !e || Tt.get(e[n], "globalEval")) }

    function p(t, e, n, i, r) { for (var s, o, a, l, u, p, d = e.createDocumentFragment(), f = [], g = 0, m = t.length; g < m; g++)
            if ((s = t[g]) || 0 === s)
                if ("object" === rt.type(s)) rt.merge(f, s.nodeType ? [s] : s);
                else if ($t.test(s)) { for (o = o || d.appendChild(e.createElement("div")), a = (Ft.exec(s) || ["", ""])[1].toLowerCase(), l = Nt[a] || Nt._default, o.innerHTML = l[1] + rt.htmlPrefilter(s) + l[2], p = l[0]; p--;) o = o.lastChild;
            rt.merge(f, o.childNodes), o = d.firstChild, o.textContent = "" } else f.push(e.createTextNode(s)); for (d.textContent = "", g = 0; s = f[g++];)
            if (i && rt.inArray(s, i) > -1) r && r.push(s);
            else if (u = rt.contains(s.ownerDocument, s), o = c(d.appendChild(s), "script"), u && h(o), n)
            for (p = 0; s = o[p++];) Mt.test(s.type || "") && n.push(s); return d }

    function d() { return !0 }

    function f() { return !1 }

    function g() { try { return G.activeElement } catch (t) {} }

    function m(t, e, n, i, r, s) { var o, a; if ("object" == typeof e) { "string" != typeof n && (i = i || n, n = void 0); for (a in e) m(t, a, n, i, e[a], s); return t } if (null == i && null == r ? (r = n, i = n = void 0) : null == r && ("string" == typeof n ? (r = i, i = void 0) : (r = i, i = n, n = void 0)), !1 === r) r = f;
        else if (!r) return t; return 1 === s && (o = r, r = function(t) { return rt().off(t), o.apply(this, arguments) }, r.guid = o.guid || (o.guid = rt.guid++)), t.each(function() { rt.event.add(this, e, r, i, n) }) }

    function v(t, e) { return rt.nodeName(t, "table") && rt.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t }

    function y(t) { return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t }

    function _(t) { var e = It.exec(t.type); return e ? t.type = e[1] : t.removeAttribute("type"), t }

    function x(t, e) { var n, i, r, s, o, a, l, u; if (1 === e.nodeType) { if (Tt.hasData(t) && (s = Tt.access(t), o = Tt.set(e, s), u = s.events)) { delete o.handle, o.events = {}; for (r in u)
                    for (n = 0, i = u[r].length; n < i; n++) rt.event.add(e, r, u[r][n]) }
            Ct.hasData(t) && (a = Ct.access(t), l = rt.extend({}, a), Ct.set(e, l)) } }

    function b(t, e) { var n = e.nodeName.toLowerCase(); "input" === n && Ot.test(t.type) ? e.checked = t.checked : "input" !== n && "textarea" !== n || (e.defaultValue = t.defaultValue) }

    function w(t, e, n, i) { e = Z.apply([], e); var r, s, o, a, l, u, h = 0,
            d = t.length,
            f = d - 1,
            g = e[0],
            m = rt.isFunction(g); if (m || d > 1 && "string" == typeof g && !it.checkClone && qt.test(g)) return t.each(function(r) { var s = t.eq(r);
            m && (e[0] = g.call(this, r, s.html())), w(s, e, n, i) }); if (d && (r = p(e, t[0].ownerDocument, !1, t, i), s = r.firstChild, 1 === r.childNodes.length && (r = s), s || i)) { for (o = rt.map(c(r, "script"), y), a = o.length; h < d; h++) l = r, h !== f && (l = rt.clone(l, !0, !0), a && rt.merge(o, c(l, "script"))), n.call(t[h], l, h); if (a)
                for (u = o[o.length - 1].ownerDocument, rt.map(o, _), h = 0; h < a; h++) l = o[h], Mt.test(l.type || "") && !Tt.access(l, "globalEval") && rt.contains(u, l) && (l.src ? rt._evalUrl && rt._evalUrl(l.src) : rt.globalEval(l.textContent.replace(Ht, ""))) } return t }

    function T(t, e, n) { for (var i, r = e ? rt.filter(e, t) : t, s = 0; null != (i = r[s]); s++) n || 1 !== i.nodeType || rt.cleanData(c(i)), i.parentNode && (n && rt.contains(i.ownerDocument, i) && h(c(i, "script")), i.parentNode.removeChild(i)); return t }

    function C(t, e) { var n = rt(e.createElement(t)).appendTo(e.body),
            i = rt.css(n[0], "display"); return n.detach(), i }

    function S(t) { var e = G,
            n = Xt[t]; return n || (n = C(t, e), "none" !== n && n || (Wt = (Wt || rt("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement), e = Wt[0].contentDocument, e.write(), e.close(), n = C(t, e), Wt.detach()), Xt[t] = n), n }

    function k(t, e, n) { var i, r, s, o, a = t.style; return n = n || Yt(t), o = n ? n.getPropertyValue(e) || n[e] : void 0, "" !== o && void 0 !== o || rt.contains(t.ownerDocument, t) || (o = rt.style(t, e)), n && !it.pixelMarginRight() && Vt.test(o) && Ut.test(e) && (i = a.width, r = a.minWidth, s = a.maxWidth, a.minWidth = a.maxWidth = a.width = o, o = n.width, a.width = i, a.minWidth = r, a.maxWidth = s), void 0 !== o ? o + "" : o }

    function A(t, e) { return { get: function() { return t() ? void delete this.get : (this.get = e).apply(this, arguments) } } }

    function E(t) { if (t in ee) return t; for (var e = t[0].toUpperCase() + t.slice(1), n = te.length; n--;)
            if ((t = te[n] + e) in ee) return t }

    function P(t, e, n) { var i = Et.exec(e); return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : e }

    function D(t, e, n, i, r) { for (var s = n === (i ? "border" : "content") ? 4 : "width" === e ? 1 : 0, o = 0; s < 4; s += 2) "margin" === n && (o += rt.css(t, n + Pt[s], !0, r)), i ? ("content" === n && (o -= rt.css(t, "padding" + Pt[s], !0, r)), "margin" !== n && (o -= rt.css(t, "border" + Pt[s] + "Width", !0, r))) : (o += rt.css(t, "padding" + Pt[s], !0, r), "padding" !== n && (o += rt.css(t, "border" + Pt[s] + "Width", !0, r))); return o }

    function O(t, e, n) { var i = !0,
            r = "width" === e ? t.offsetWidth : t.offsetHeight,
            s = Yt(t),
            o = "border-box" === rt.css(t, "boxSizing", !1, s); if (r <= 0 || null == r) { if (r = k(t, e, s), (r < 0 || null == r) && (r = t.style[e]), Vt.test(r)) return r;
            i = o && (it.boxSizingReliable() || r === t.style[e]), r = parseFloat(r) || 0 } return r + D(t, e, n || (o ? "border" : "content"), i, s) + "px" }

    function F(t, e) { for (var n, i, r, s = [], o = 0, a = t.length; o < a; o++) i = t[o], i.style && (s[o] = Tt.get(i, "olddisplay"), n = i.style.display, e ? (s[o] || "none" !== n || (i.style.display = ""), "" === i.style.display && Dt(i) && (s[o] = Tt.access(i, "olddisplay", S(i.nodeName)))) : (r = Dt(i), "none" === n && r || Tt.set(i, "olddisplay", r ? n : rt.css(i, "display")))); for (o = 0; o < a; o++) i = t[o], i.style && (e && "none" !== i.style.display && "" !== i.style.display || (i.style.display = e ? s[o] || "" : "none")); return t }

    function M(t, e, n, i, r) { return new M.prototype.init(t, e, n, i, r) }

    function N() { return t.setTimeout(function() { ne = void 0 }), ne = rt.now() }

    function $(t, e) { var n, i = 0,
            r = { height: t }; for (e = e ? 1 : 0; i < 4; i += 2 - e) n = Pt[i], r["margin" + n] = r["padding" + n] = t; return e && (r.opacity = r.width = t), r }

    function R(t, e, n) { for (var i, r = (z.tweeners[e] || []).concat(z.tweeners["*"]), s = 0, o = r.length; s < o; s++)
            if (i = r[s].call(n, e, t)) return i }

    function j(t, e, n) { var i, r, s, o, a, l, u, c = this,
            h = {},
            p = t.style,
            d = t.nodeType && Dt(t),
            f = Tt.get(t, "fxshow");
        n.queue || (a = rt._queueHooks(t, "fx"), null == a.unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function() { a.unqueued || l() }), a.unqueued++, c.always(function() { c.always(function() { a.unqueued--, rt.queue(t, "fx").length || a.empty.fire() }) })), 1 === t.nodeType && ("height" in e || "width" in e) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], u = rt.css(t, "display"), "inline" === ("none" === u ? Tt.get(t, "olddisplay") || S(t.nodeName) : u) && "none" === rt.css(t, "float") && (p.display = "inline-block")), n.overflow && (p.overflow = "hidden", c.always(function() { p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2] })); for (i in e)
            if (r = e[i], re.exec(r)) { if (delete e[i], s = s || "toggle" === r, r === (d ? "hide" : "show")) { if ("show" !== r || !f || void 0 === f[i]) continue;
                    d = !0 }
                h[i] = f && f[i] || rt.style(t, i) } else u = void 0;
        if (rt.isEmptyObject(h)) "inline" === ("none" === u ? S(t.nodeName) : u) && (p.display = u);
        else { f ? "hidden" in f && (d = f.hidden) : f = Tt.access(t, "fxshow", {}), s && (f.hidden = !d), d ? rt(t).show() : c.done(function() { rt(t).hide() }), c.done(function() { var e;
                Tt.remove(t, "fxshow"); for (e in h) rt.style(t, e, h[e]) }); for (i in h) o = R(d ? f[i] : 0, i, c), i in f || (f[i] = o.start, d && (o.end = o.start, o.start = "width" === i || "height" === i ? 1 : 0)) } }

    function L(t, e) { var n, i, r, s, o; for (n in t)
            if (i = rt.camelCase(n), r = e[i], s = t[n], rt.isArray(s) && (r = s[1], s = t[n] = s[0]), n !== i && (t[i] = s, delete t[n]), (o = rt.cssHooks[i]) && "expand" in o) { s = o.expand(s), delete t[i]; for (n in s) n in t || (t[n] = s[n], e[n] = r) } else e[i] = r }

    function z(t, e, n) { var i, r, s = 0,
            o = z.prefilters.length,
            a = rt.Deferred().always(function() { delete l.elem }),
            l = function() { if (r) return !1; for (var e = ne || N(), n = Math.max(0, u.startTime + u.duration - e), i = n / u.duration || 0, s = 1 - i, o = 0, l = u.tweens.length; o < l; o++) u.tweens[o].run(s); return a.notifyWith(t, [u, s, n]), s < 1 && l ? n : (a.resolveWith(t, [u]), !1) },
            u = a.promise({ elem: t, props: rt.extend({}, e), opts: rt.extend(!0, { specialEasing: {}, easing: rt.easing._default }, n), originalProperties: e, originalOptions: n, startTime: ne || N(), duration: n.duration, tweens: [], createTween: function(e, n) { var i = rt.Tween(t, u.opts, e, n, u.opts.specialEasing[e] || u.opts.easing); return u.tweens.push(i), i }, stop: function(e) { var n = 0,
                        i = e ? u.tweens.length : 0; if (r) return this; for (r = !0; n < i; n++) u.tweens[n].run(1); return e ? (a.notifyWith(t, [u, 1, 0]), a.resolveWith(t, [u, e])) : a.rejectWith(t, [u, e]), this } }),
            c = u.props; for (L(c, u.opts.specialEasing); s < o; s++)
            if (i = z.prefilters[s].call(u, t, c, u.opts)) return rt.isFunction(i.stop) && (rt._queueHooks(u.elem, u.opts.queue).stop = rt.proxy(i.stop, i)), i;
        return rt.map(c, R, u), rt.isFunction(u.opts.start) && u.opts.start.call(t, u), rt.fx.timer(rt.extend(l, { elem: t, anim: u, queue: u.opts.queue })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always) }

    function B(t) { return t.getAttribute && t.getAttribute("class") || "" }

    function q(t) { return function(e, n) { "string" != typeof e && (n = e, e = "*"); var i, r = 0,
                s = e.toLowerCase().match(_t) || []; if (rt.isFunction(n))
                for (; i = s[r++];) "+" === i[0] ? (i = i.slice(1) || "*", (t[i] = t[i] || []).unshift(n)) : (t[i] = t[i] || []).push(n) } }

    function I(t, e, n, i) {
        function r(a) { var l; return s[a] = !0, rt.each(t[a] || [], function(t, a) { var u = a(e, n, i); return "string" != typeof u || o || s[u] ? o ? !(l = u) : void 0 : (e.dataTypes.unshift(u), r(u), !1) }), l } var s = {},
            o = t === Ce; return r(e.dataTypes[0]) || !s["*"] && r("*") }

    function H(t, e) { var n, i, r = rt.ajaxSettings.flatOptions || {}; for (n in e) void 0 !== e[n] && ((r[n] ? t : i || (i = {}))[n] = e[n]); return i && rt.extend(!0, t, i), t }

    function W(t, e, n) { for (var i, r, s, o, a = t.contents, l = t.dataTypes;
            "*" === l[0];) l.shift(), void 0 === i && (i = t.mimeType || e.getResponseHeader("Content-Type")); if (i)
            for (r in a)
                if (a[r] && a[r].test(i)) { l.unshift(r); break }
        if (l[0] in n) s = l[0];
        else { for (r in n) { if (!l[0] || t.converters[r + " " + l[0]]) { s = r; break }
                o || (o = r) }
            s = s || o } if (s) return s !== l[0] && l.unshift(s), n[s] }

    function X(t, e, n, i) { var r, s, o, a, l, u = {},
            c = t.dataTypes.slice(); if (c[1])
            for (o in t.converters) u[o.toLowerCase()] = t.converters[o]; for (s = c.shift(); s;)
            if (t.responseFields[s] && (n[t.responseFields[s]] = e), !l && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = s, s = c.shift())
                if ("*" === s) s = l;
                else if ("*" !== l && l !== s) { if (!(o = u[l + " " + s] || u["* " + s]))
                for (r in u)
                    if (a = r.split(" "), a[1] === s && (o = u[l + " " + a[0]] || u["* " + a[0]])) {!0 === o ? o = u[r] : !0 !== u[r] && (s = a[0], c.unshift(a[1])); break }
            if (!0 !== o)
                if (o && t.throws) e = o(e);
                else try { e = o(e) } catch (t) { return { state: "parsererror", error: o ? t : "No conversion from " + l + " to " + s } } } return { state: "success", data: e } }

    function U(t, e, n, i) { var r; if (rt.isArray(e)) rt.each(e, function(e, r) { n || Ee.test(t) ? i(t, r) : U(t + "[" + ("object" == typeof r && null != r ? e : "") + "]", r, n, i) });
        else if (n || "object" !== rt.type(e)) i(t, e);
        else
            for (r in e) U(t + "[" + r + "]", e[r], n, i) }

    function V(t) { return rt.isWindow(t) ? t : 9 === t.nodeType && t.defaultView }
    var Y = [],
        G = t.document,
        Q = Y.slice,
        Z = Y.concat,
        K = Y.push,
        J = Y.indexOf,
        tt = {},
        et = tt.toString,
        nt = tt.hasOwnProperty,
        it = {},
        rt = function(t, e) { return new rt.fn.init(t, e) },
        st = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        ot = /^-ms-/,
        at = /-([\da-z])/gi,
        lt = function(t, e) { return e.toUpperCase() };
    rt.fn = rt.prototype = { jquery: "2.2.4", constructor: rt, selector: "", length: 0, toArray: function() { return Q.call(this) }, get: function(t) { return null != t ? t < 0 ? this[t + this.length] : this[t] : Q.call(this) }, pushStack: function(t) { var e = rt.merge(this.constructor(), t); return e.prevObject = this, e.context = this.context, e }, each: function(t) { return rt.each(this, t) }, map: function(t) { return this.pushStack(rt.map(this, function(e, n) { return t.call(e, n, e) })) }, slice: function() { return this.pushStack(Q.apply(this, arguments)) }, first: function() { return this.eq(0) }, last: function() { return this.eq(-1) }, eq: function(t) { var e = this.length,
                n = +t + (t < 0 ? e : 0); return this.pushStack(n >= 0 && n < e ? [this[n]] : []) }, end: function() { return this.prevObject || this.constructor() }, push: K, sort: Y.sort, splice: Y.splice }, rt.extend = rt.fn.extend = function() { var t, e, n, i, r, s, o = arguments[0] || {},
            a = 1,
            l = arguments.length,
            u = !1; for ("boolean" == typeof o && (u = o, o = arguments[a] || {}, a++), "object" == typeof o || rt.isFunction(o) || (o = {}), a === l && (o = this, a--); a < l; a++)
            if (null != (t = arguments[a]))
                for (e in t) n = o[e], i = t[e], o !== i && (u && i && (rt.isPlainObject(i) || (r = rt.isArray(i))) ? (r ? (r = !1, s = n && rt.isArray(n) ? n : []) : s = n && rt.isPlainObject(n) ? n : {}, o[e] = rt.extend(u, s, i)) : void 0 !== i && (o[e] = i));
        return o }, rt.extend({ expando: "jQuery" + ("2.2.4" + Math.random()).replace(/\D/g, ""), isReady: !0, error: function(t) { throw new Error(t) }, noop: function() {}, isFunction: function(t) { return "function" === rt.type(t) }, isArray: Array.isArray, isWindow: function(t) { return null != t && t === t.window }, isNumeric: function(t) { var e = t && t.toString(); return !rt.isArray(t) && e - parseFloat(e) + 1 >= 0 }, isPlainObject: function(t) { var e; if ("object" !== rt.type(t) || t.nodeType || rt.isWindow(t)) return !1; if (t.constructor && !nt.call(t, "constructor") && !nt.call(t.constructor.prototype || {}, "isPrototypeOf")) return !1; for (e in t); return void 0 === e || nt.call(t, e) }, isEmptyObject: function(t) { var e; for (e in t) return !1; return !0 }, type: function(t) { return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? tt[et.call(t)] || "object" : typeof t }, globalEval: function(t) { var e, n = eval;
            (t = rt.trim(t)) && (1 === t.indexOf("use strict") ? (e = G.createElement("script"), e.text = t, G.head.appendChild(e).parentNode.removeChild(e)) : n(t)) }, camelCase: function(t) { return t.replace(ot, "ms-").replace(at, lt) }, nodeName: function(t, e) { return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase() }, each: function(t, e) { var i, r = 0; if (n(t))
                for (i = t.length; r < i && !1 !== e.call(t[r], r, t[r]); r++);
            else
                for (r in t)
                    if (!1 === e.call(t[r], r, t[r])) break; return t }, trim: function(t) { return null == t ? "" : (t + "").replace(st, "") }, makeArray: function(t, e) { var i = e || []; return null != t && (n(Object(t)) ? rt.merge(i, "string" == typeof t ? [t] : t) : K.call(i, t)), i }, inArray: function(t, e, n) { return null == e ? -1 : J.call(e, t, n) }, merge: function(t, e) { for (var n = +e.length, i = 0, r = t.length; i < n; i++) t[r++] = e[i]; return t.length = r, t }, grep: function(t, e, n) { for (var i = [], r = 0, s = t.length, o = !n; r < s; r++) !e(t[r], r) !== o && i.push(t[r]); return i }, map: function(t, e, i) { var r, s, o = 0,
                a = []; if (n(t))
                for (r = t.length; o < r; o++) null != (s = e(t[o], o, i)) && a.push(s);
            else
                for (o in t) null != (s = e(t[o], o, i)) && a.push(s); return Z.apply([], a) }, guid: 1, proxy: function(t, e) { var n, i, r; if ("string" == typeof e && (n = t[e], e = t, t = n), rt.isFunction(t)) return i = Q.call(arguments, 2), r = function() { return t.apply(e || this, i.concat(Q.call(arguments))) }, r.guid = t.guid = t.guid || rt.guid++, r }, now: Date.now, support: it }), "function" == typeof Symbol && (rt.fn[Symbol.iterator] = Y[Symbol.iterator]), rt.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(t, e) { tt["[object " + e + "]"] = e.toLowerCase() });
    var ut =
        /*!
         * Sizzle CSS Selector Engine v2.2.1
         * http://sizzlejs.com/
         *
         * Copyright jQuery Foundation and other contributors
         * Released under the MIT license
         * http://jquery.org/license
         *
         * Date: 2015-10-17
         */
        function(t) {
            function e(t, e, n, i) { var r, s, o, a, u, h, p, d, f = e && e.ownerDocument,
                    g = e ? e.nodeType : 9; if (n = n || [], "string" != typeof t || !t || 1 !== g && 9 !== g && 11 !== g) return n; if (!i && ((e ? e.ownerDocument || e : L) !== D && P(e), e = e || D, F)) { if (11 !== g && (h = gt.exec(t)))
                        if (r = h[1]) { if (9 === g) { if (!(o = e.getElementById(r))) return n; if (o.id === r) return n.push(o), n } else if (f && (o = f.getElementById(r)) && R(e, o) && o.id === r) return n.push(o), n } else { if (h[2]) return Q.apply(n, e.getElementsByTagName(t)), n; if ((r = h[3]) && _.getElementsByClassName && e.getElementsByClassName) return Q.apply(n, e.getElementsByClassName(r)), n }
                    if (_.qsa && !H[t + " "] && (!M || !M.test(t))) { if (1 !== g) f = e, d = t;
                        else if ("object" !== e.nodeName.toLowerCase()) { for ((a = e.getAttribute("id")) ? a = a.replace(vt, "\\$&") : e.setAttribute("id", a = j), p = T(t), s = p.length, u = ct.test(a) ? "#" + a : "[id='" + a + "']"; s--;) p[s] = u + " " + c(p[s]);
                            d = p.join(","), f = mt.test(t) && l(e.parentNode) || e } if (d) try { return Q.apply(n, f.querySelectorAll(d)), n } catch (t) {} finally { a === j && e.removeAttribute("id") } } } return S(t.replace(st, "$1"), e, n, i) }

            function n() {
                function t(n, i) { return e.push(n + " ") > x.cacheLength && delete t[e.shift()], t[n + " "] = i } var e = []; return t }

            function i(t) { return t[j] = !0, t }

            function r(t) { var e = D.createElement("div"); try { return !!t(e) } catch (t) { return !1 } finally { e.parentNode && e.parentNode.removeChild(e), e = null } }

            function s(t, e) { for (var n = t.split("|"), i = n.length; i--;) x.attrHandle[n[i]] = e }

            function o(t, e) { var n = e && t,
                    i = n && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || X) - (~t.sourceIndex || X); if (i) return i; if (n)
                    for (; n = n.nextSibling;)
                        if (n === e) return -1;
                return t ? 1 : -1 }

            function a(t) { return i(function(e) { return e = +e, i(function(n, i) { for (var r, s = t([], n.length, e), o = s.length; o--;) n[r = s[o]] && (n[r] = !(i[r] = n[r])) }) }) }

            function l(t) { return t && void 0 !== t.getElementsByTagName && t }

            function u() {}

            function c(t) { for (var e = 0, n = t.length, i = ""; e < n; e++) i += t[e].value; return i }

            function h(t, e, n) { var i = e.dir,
                    r = n && "parentNode" === i,
                    s = B++; return e.first ? function(e, n, s) { for (; e = e[i];)
                        if (1 === e.nodeType || r) return t(e, n, s) } : function(e, n, o) { var a, l, u, c = [z, s]; if (o) { for (; e = e[i];)
                            if ((1 === e.nodeType || r) && t(e, n, o)) return !0 } else
                        for (; e = e[i];)
                            if (1 === e.nodeType || r) { if (u = e[j] || (e[j] = {}), l = u[e.uniqueID] || (u[e.uniqueID] = {}), (a = l[i]) && a[0] === z && a[1] === s) return c[2] = a[2]; if (l[i] = c, c[2] = t(e, n, o)) return !0 } } }

            function p(t) { return t.length > 1 ? function(e, n, i) { for (var r = t.length; r--;)
                        if (!t[r](e, n, i)) return !1;
                    return !0 } : t[0] }

            function d(t, n, i) { for (var r = 0, s = n.length; r < s; r++) e(t, n[r], i); return i }

            function f(t, e, n, i, r) { for (var s, o = [], a = 0, l = t.length, u = null != e; a < l; a++)(s = t[a]) && (n && !n(s, i, r) || (o.push(s), u && e.push(a))); return o }

            function g(t, e, n, r, s, o) { return r && !r[j] && (r = g(r)), s && !s[j] && (s = g(s, o)), i(function(i, o, a, l) { var u, c, h, p = [],
                        g = [],
                        m = o.length,
                        v = i || d(e || "*", a.nodeType ? [a] : a, []),
                        y = !t || !i && e ? v : f(v, p, t, a, l),
                        _ = n ? s || (i ? t : m || r) ? [] : o : y; if (n && n(y, _, a, l), r)
                        for (u = f(_, g), r(u, [], a, l), c = u.length; c--;)(h = u[c]) && (_[g[c]] = !(y[g[c]] = h)); if (i) { if (s || t) { if (s) { for (u = [], c = _.length; c--;)(h = _[c]) && u.push(y[c] = h);
                                s(null, _ = [], u, l) } for (c = _.length; c--;)(h = _[c]) && (u = s ? K(i, h) : p[c]) > -1 && (i[u] = !(o[u] = h)) } } else _ = f(_ === o ? _.splice(m, _.length) : _), s ? s(null, o, _, l) : Q.apply(o, _) }) }

            function m(t) { for (var e, n, i, r = t.length, s = x.relative[t[0].type], o = s || x.relative[" "], a = s ? 1 : 0, l = h(function(t) { return t === e }, o, !0), u = h(function(t) { return K(e, t) > -1 }, o, !0), d = [function(t, n, i) { var r = !s && (i || n !== k) || ((e = n).nodeType ? l(t, n, i) : u(t, n, i)); return e = null, r }]; a < r; a++)
                    if (n = x.relative[t[a].type]) d = [h(p(d), n)];
                    else { if (n = x.filter[t[a].type].apply(null, t[a].matches), n[j]) { for (i = ++a; i < r && !x.relative[t[i].type]; i++); return g(a > 1 && p(d), a > 1 && c(t.slice(0, a - 1).concat({ value: " " === t[a - 2].type ? "*" : "" })).replace(st, "$1"), n, a < i && m(t.slice(a, i)), i < r && m(t = t.slice(i)), i < r && c(t)) }
                        d.push(n) }
                return p(d) }

            function v(t, n) { var r = n.length > 0,
                    s = t.length > 0,
                    o = function(i, o, a, l, u) { var c, h, p, d = 0,
                            g = "0",
                            m = i && [],
                            v = [],
                            y = k,
                            _ = i || s && x.find.TAG("*", u),
                            b = z += null == y ? 1 : Math.random() || .1,
                            w = _.length; for (u && (k = o === D || o || u); g !== w && null != (c = _[g]); g++) { if (s && c) { for (h = 0, o || c.ownerDocument === D || (P(c), a = !F); p = t[h++];)
                                    if (p(c, o || D, a)) { l.push(c); break }
                                u && (z = b) }
                            r && ((c = !p && c) && d--, i && m.push(c)) } if (d += g, r && g !== d) { for (h = 0; p = n[h++];) p(m, v, o, a); if (i) { if (d > 0)
                                    for (; g--;) m[g] || v[g] || (v[g] = Y.call(l));
                                v = f(v) }
                            Q.apply(l, v), u && !i && v.length > 0 && d + n.length > 1 && e.uniqueSort(l) } return u && (z = b, k = y), m }; return r ? i(o) : o } var y, _, x, b, w, T, C, S, k, A, E, P, D, O, F, M, N, $, R, j = "sizzle" + 1 * new Date,
                L = t.document,
                z = 0,
                B = 0,
                q = n(),
                I = n(),
                H = n(),
                W = function(t, e) { return t === e && (E = !0), 0 },
                X = 1 << 31,
                U = {}.hasOwnProperty,
                V = [],
                Y = V.pop,
                G = V.push,
                Q = V.push,
                Z = V.slice,
                K = function(t, e) { for (var n = 0, i = t.length; n < i; n++)
                        if (t[n] === e) return n;
                    return -1 },
                J = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                tt = "[\\x20\\t\\r\\n\\f]",
                et = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                nt = "\\[" + tt + "*(" + et + ")(?:" + tt + "*([*^$|!~]?=)" + tt + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + et + "))|)" + tt + "*\\]",
                it = ":(" + et + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + nt + ")*)|.*)\\)|)",
                rt = new RegExp(tt + "+", "g"),
                st = new RegExp("^" + tt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + tt + "+$", "g"),
                ot = new RegExp("^" + tt + "*," + tt + "*"),
                at = new RegExp("^" + tt + "*([>+~]|" + tt + ")" + tt + "*"),
                lt = new RegExp("=" + tt + "*([^\\]'\"]*?)" + tt + "*\\]", "g"),
                ut = new RegExp(it),
                ct = new RegExp("^" + et + "$"),
                ht = { ID: new RegExp("^#(" + et + ")"), CLASS: new RegExp("^\\.(" + et + ")"), TAG: new RegExp("^(" + et + "|[*])"), ATTR: new RegExp("^" + nt), PSEUDO: new RegExp("^" + it), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + tt + "*(even|odd|(([+-]|)(\\d*)n|)" + tt + "*(?:([+-]|)" + tt + "*(\\d+)|))" + tt + "*\\)|)", "i"), bool: new RegExp("^(?:" + J + ")$", "i"), needsContext: new RegExp("^" + tt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + tt + "*((?:-\\d)?\\d*)" + tt + "*\\)|)(?=[^-]|$)", "i") },
                pt = /^(?:input|select|textarea|button)$/i,
                dt = /^h\d$/i,
                ft = /^[^{]+\{\s*\[native \w/,
                gt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                mt = /[+~]/,
                vt = /'|\\/g,
                yt = new RegExp("\\\\([\\da-f]{1,6}" + tt + "?|(" + tt + ")|.)", "ig"),
                _t = function(t, e, n) { var i = "0x" + e - 65536; return i !== i || n ? e : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320) },
                xt = function() { P() }; try { Q.apply(V = Z.call(L.childNodes), L.childNodes), V[L.childNodes.length].nodeType } catch (t) { Q = { apply: V.length ? function(t, e) { G.apply(t, Z.call(e)) } : function(t, e) { for (var n = t.length, i = 0; t[n++] = e[i++];);
                        t.length = n - 1 } } }
            _ = e.support = {}, w = e.isXML = function(t) { var e = t && (t.ownerDocument || t).documentElement; return !!e && "HTML" !== e.nodeName }, P = e.setDocument = function(t) { var e, n, i = t ? t.ownerDocument || t : L; return i !== D && 9 === i.nodeType && i.documentElement ? (D = i, O = D.documentElement, F = !w(D), (n = D.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", xt, !1) : n.attachEvent && n.attachEvent("onunload", xt)), _.attributes = r(function(t) { return t.className = "i", !t.getAttribute("className") }), _.getElementsByTagName = r(function(t) { return t.appendChild(D.createComment("")), !t.getElementsByTagName("*").length }), _.getElementsByClassName = ft.test(D.getElementsByClassName), _.getById = r(function(t) { return O.appendChild(t).id = j, !D.getElementsByName || !D.getElementsByName(j).length }), _.getById ? (x.find.ID = function(t, e) { if (void 0 !== e.getElementById && F) { var n = e.getElementById(t); return n ? [n] : [] } }, x.filter.ID = function(t) { var e = t.replace(yt, _t); return function(t) { return t.getAttribute("id") === e } }) : (delete x.find.ID, x.filter.ID = function(t) { var e = t.replace(yt, _t); return function(t) { var n = void 0 !== t.getAttributeNode && t.getAttributeNode("id"); return n && n.value === e } }), x.find.TAG = _.getElementsByTagName ? function(t, e) { return void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t) : _.qsa ? e.querySelectorAll(t) : void 0 } : function(t, e) { var n, i = [],
                        r = 0,
                        s = e.getElementsByTagName(t); if ("*" === t) { for (; n = s[r++];) 1 === n.nodeType && i.push(n); return i } return s }, x.find.CLASS = _.getElementsByClassName && function(t, e) { if (void 0 !== e.getElementsByClassName && F) return e.getElementsByClassName(t) }, N = [], M = [], (_.qsa = ft.test(D.querySelectorAll)) && (r(function(t) { O.appendChild(t).innerHTML = "<a id='" + j + "'></a><select id='" + j + "-\r\\' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && M.push("[*^$]=" + tt + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || M.push("\\[" + tt + "*(?:value|" + J + ")"), t.querySelectorAll("[id~=" + j + "-]").length || M.push("~="), t.querySelectorAll(":checked").length || M.push(":checked"), t.querySelectorAll("a#" + j + "+*").length || M.push(".#.+[+~]") }), r(function(t) { var e = D.createElement("input");
                    e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && M.push("name" + tt + "*[*^$|!~]?="), t.querySelectorAll(":enabled").length || M.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), M.push(",.*:") })), (_.matchesSelector = ft.test($ = O.matches || O.webkitMatchesSelector || O.mozMatchesSelector || O.oMatchesSelector || O.msMatchesSelector)) && r(function(t) { _.disconnectedMatch = $.call(t, "div"), $.call(t, "[s!='']:x"), N.push("!=", it) }), M = M.length && new RegExp(M.join("|")), N = N.length && new RegExp(N.join("|")), e = ft.test(O.compareDocumentPosition), R = e || ft.test(O.contains) ? function(t, e) { var n = 9 === t.nodeType ? t.documentElement : t,
                        i = e && e.parentNode; return t === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i))) } : function(t, e) { if (e)
                        for (; e = e.parentNode;)
                            if (e === t) return !0;
                    return !1 }, W = e ? function(t, e) { if (t === e) return E = !0, 0; var n = !t.compareDocumentPosition - !e.compareDocumentPosition; return n || (n = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1, 1 & n || !_.sortDetached && e.compareDocumentPosition(t) === n ? t === D || t.ownerDocument === L && R(L, t) ? -1 : e === D || e.ownerDocument === L && R(L, e) ? 1 : A ? K(A, t) - K(A, e) : 0 : 4 & n ? -1 : 1) } : function(t, e) { if (t === e) return E = !0, 0; var n, i = 0,
                        r = t.parentNode,
                        s = e.parentNode,
                        a = [t],
                        l = [e]; if (!r || !s) return t === D ? -1 : e === D ? 1 : r ? -1 : s ? 1 : A ? K(A, t) - K(A, e) : 0; if (r === s) return o(t, e); for (n = t; n = n.parentNode;) a.unshift(n); for (n = e; n = n.parentNode;) l.unshift(n); for (; a[i] === l[i];) i++; return i ? o(a[i], l[i]) : a[i] === L ? -1 : l[i] === L ? 1 : 0 }, D) : D }, e.matches = function(t, n) { return e(t, null, null, n) }, e.matchesSelector = function(t, n) { if ((t.ownerDocument || t) !== D && P(t), n = n.replace(lt, "='$1']"), _.matchesSelector && F && !H[n + " "] && (!N || !N.test(n)) && (!M || !M.test(n))) try { var i = $.call(t, n); if (i || _.disconnectedMatch || t.document && 11 !== t.document.nodeType) return i } catch (t) {}
                return e(n, D, null, [t]).length > 0 }, e.contains = function(t, e) { return (t.ownerDocument || t) !== D && P(t), R(t, e) }, e.attr = function(t, e) {
                (t.ownerDocument || t) !== D && P(t); var n = x.attrHandle[e.toLowerCase()],
                    i = n && U.call(x.attrHandle, e.toLowerCase()) ? n(t, e, !F) : void 0; return void 0 !== i ? i : _.attributes || !F ? t.getAttribute(e) : (i = t.getAttributeNode(e)) && i.specified ? i.value : null }, e.error = function(t) { throw new Error("Syntax error, unrecognized expression: " + t) }, e.uniqueSort = function(t) { var e, n = [],
                    i = 0,
                    r = 0; if (E = !_.detectDuplicates, A = !_.sortStable && t.slice(0), t.sort(W), E) { for (; e = t[r++];) e === t[r] && (i = n.push(r)); for (; i--;) t.splice(n[i], 1) } return A = null, t }, b = e.getText = function(t) { var e, n = "",
                    i = 0,
                    r = t.nodeType; if (r) { if (1 === r || 9 === r || 11 === r) { if ("string" == typeof t.textContent) return t.textContent; for (t = t.firstChild; t; t = t.nextSibling) n += b(t) } else if (3 === r || 4 === r) return t.nodeValue } else
                    for (; e = t[i++];) n += b(e); return n }, x = e.selectors = { cacheLength: 50, createPseudo: i, match: ht, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function(t) { return t[1] = t[1].replace(yt, _t), t[3] = (t[3] || t[4] || t[5] || "").replace(yt, _t), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4) }, CHILD: function(t) { return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]), t }, PSEUDO: function(t) { var e, n = !t[6] && t[2]; return ht.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && ut.test(n) && (e = T(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e), t[2] = n.slice(0, e)), t.slice(0, 3)) } }, filter: { TAG: function(t) { var e = t.replace(yt, _t).toLowerCase(); return "*" === t ? function() { return !0 } : function(t) { return t.nodeName && t.nodeName.toLowerCase() === e } }, CLASS: function(t) { var e = q[t + " "]; return e || (e = new RegExp("(^|" + tt + ")" + t + "(" + tt + "|$)")) && q(t, function(t) { return e.test("string" == typeof t.className && t.className || void 0 !== t.getAttribute && t.getAttribute("class") || "") }) }, ATTR: function(t, n, i) { return function(r) { var s = e.attr(r, t); return null == s ? "!=" === n : !n || (s += "", "=" === n ? s === i : "!=" === n ? s !== i : "^=" === n ? i && 0 === s.indexOf(i) : "*=" === n ? i && s.indexOf(i) > -1 : "$=" === n ? i && s.slice(-i.length) === i : "~=" === n ? (" " + s.replace(rt, " ") + " ").indexOf(i) > -1 : "|=" === n && (s === i || s.slice(0, i.length + 1) === i + "-")) } }, CHILD: function(t, e, n, i, r) { var s = "nth" !== t.slice(0, 3),
                            o = "last" !== t.slice(-4),
                            a = "of-type" === e; return 1 === i && 0 === r ? function(t) { return !!t.parentNode } : function(e, n, l) { var u, c, h, p, d, f, g = s !== o ? "nextSibling" : "previousSibling",
                                m = e.parentNode,
                                v = a && e.nodeName.toLowerCase(),
                                y = !l && !a,
                                _ = !1; if (m) { if (s) { for (; g;) { for (p = e; p = p[g];)
                                            if (a ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) return !1;
                                        f = g = "only" === t && !f && "nextSibling" } return !0 } if (f = [o ? m.firstChild : m.lastChild], o && y) { for (p = m, h = p[j] || (p[j] = {}), c = h[p.uniqueID] || (h[p.uniqueID] = {}), u = c[t] || [], d = u[0] === z && u[1], _ = d && u[2], p = d && m.childNodes[d]; p = ++d && p && p[g] || (_ = d = 0) || f.pop();)
                                        if (1 === p.nodeType && ++_ && p === e) { c[t] = [z, d, _]; break } } else if (y && (p = e, h = p[j] || (p[j] = {}), c = h[p.uniqueID] || (h[p.uniqueID] = {}), u = c[t] || [], d = u[0] === z && u[1], _ = d), !1 === _)
                                    for (;
                                        (p = ++d && p && p[g] || (_ = d = 0) || f.pop()) && ((a ? p.nodeName.toLowerCase() !== v : 1 !== p.nodeType) || !++_ || (y && (h = p[j] || (p[j] = {}), c = h[p.uniqueID] || (h[p.uniqueID] = {}), c[t] = [z, _]), p !== e));); return (_ -= r) === i || _ % i == 0 && _ / i >= 0 } } }, PSEUDO: function(t, n) { var r, s = x.pseudos[t] || x.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t); return s[j] ? s(n) : s.length > 1 ? (r = [t, t, "", n], x.setFilters.hasOwnProperty(t.toLowerCase()) ? i(function(t, e) { for (var i, r = s(t, n), o = r.length; o--;) i = K(t, r[o]), t[i] = !(e[i] = r[o]) }) : function(t) { return s(t, 0, r) }) : s } }, pseudos: { not: i(function(t) { var e = [],
                            n = [],
                            r = C(t.replace(st, "$1")); return r[j] ? i(function(t, e, n, i) { for (var s, o = r(t, null, i, []), a = t.length; a--;)(s = o[a]) && (t[a] = !(e[a] = s)) }) : function(t, i, s) { return e[0] = t, r(e, null, s, n), e[0] = null, !n.pop() } }), has: i(function(t) { return function(n) { return e(t, n).length > 0 } }), contains: i(function(t) { return t = t.replace(yt, _t),
                            function(e) { return (e.textContent || e.innerText || b(e)).indexOf(t) > -1 } }), lang: i(function(t) { return ct.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(yt, _t).toLowerCase(),
                            function(e) { var n;
                                do { if (n = F ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (n = n.toLowerCase()) === t || 0 === n.indexOf(t + "-") } while ((e = e.parentNode) && 1 === e.nodeType); return !1 } }), target: function(e) { var n = t.location && t.location.hash; return n && n.slice(1) === e.id }, root: function(t) { return t === O }, focus: function(t) { return t === D.activeElement && (!D.hasFocus || D.hasFocus()) && !!(t.type || t.href || ~t.tabIndex) }, enabled: function(t) { return !1 === t.disabled }, disabled: function(t) { return !0 === t.disabled }, checked: function(t) { var e = t.nodeName.toLowerCase(); return "input" === e && !!t.checked || "option" === e && !!t.selected }, selected: function(t) { return t.parentNode && t.parentNode.selectedIndex, !0 === t.selected }, empty: function(t) { for (t = t.firstChild; t; t = t.nextSibling)
                            if (t.nodeType < 6) return !1;
                        return !0 }, parent: function(t) { return !x.pseudos.empty(t) }, header: function(t) { return dt.test(t.nodeName) }, input: function(t) { return pt.test(t.nodeName) }, button: function(t) { var e = t.nodeName.toLowerCase(); return "input" === e && "button" === t.type || "button" === e }, text: function(t) { var e; return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase()) }, first: a(function() { return [0] }), last: a(function(t, e) { return [e - 1] }), eq: a(function(t, e, n) { return [n < 0 ? n + e : n] }), even: a(function(t, e) { for (var n = 0; n < e; n += 2) t.push(n); return t }), odd: a(function(t, e) { for (var n = 1; n < e; n += 2) t.push(n); return t }), lt: a(function(t, e, n) { for (var i = n < 0 ? n + e : n; --i >= 0;) t.push(i); return t }), gt: a(function(t, e, n) { for (var i = n < 0 ? n + e : n; ++i < e;) t.push(i); return t }) } }, x.pseudos.nth = x.pseudos.eq; for (y in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) x.pseudos[y] = function(t) { return function(e) { return "input" === e.nodeName.toLowerCase() && e.type === t } }(y); for (y in { submit: !0, reset: !0 }) x.pseudos[y] = function(t) { return function(e) { var n = e.nodeName.toLowerCase(); return ("input" === n || "button" === n) && e.type === t } }(y); return u.prototype = x.filters = x.pseudos, x.setFilters = new u, T = e.tokenize = function(t, n) { var i, r, s, o, a, l, u, c = I[t + " "]; if (c) return n ? 0 : c.slice(0); for (a = t, l = [], u = x.preFilter; a;) { i && !(r = ot.exec(a)) || (r && (a = a.slice(r[0].length) || a), l.push(s = [])), i = !1, (r = at.exec(a)) && (i = r.shift(), s.push({ value: i, type: r[0].replace(st, " ") }), a = a.slice(i.length)); for (o in x.filter) !(r = ht[o].exec(a)) || u[o] && !(r = u[o](r)) || (i = r.shift(), s.push({ value: i, type: o, matches: r }), a = a.slice(i.length)); if (!i) break } return n ? a.length : a ? e.error(t) : I(t, l).slice(0) }, C = e.compile = function(t, e) { var n, i = [],
                    r = [],
                    s = H[t + " "]; if (!s) { for (e || (e = T(t)), n = e.length; n--;) s = m(e[n]), s[j] ? i.push(s) : r.push(s);
                    s = H(t, v(r, i)), s.selector = t } return s }, S = e.select = function(t, e, n, i) { var r, s, o, a, u, h = "function" == typeof t && t,
                    p = !i && T(t = h.selector || t); if (n = n || [], 1 === p.length) { if (s = p[0] = p[0].slice(0), s.length > 2 && "ID" === (o = s[0]).type && _.getById && 9 === e.nodeType && F && x.relative[s[1].type]) { if (!(e = (x.find.ID(o.matches[0].replace(yt, _t), e) || [])[0])) return n;
                        h && (e = e.parentNode), t = t.slice(s.shift().value.length) } for (r = ht.needsContext.test(t) ? 0 : s.length; r-- && (o = s[r], !x.relative[a = o.type]);)
                        if ((u = x.find[a]) && (i = u(o.matches[0].replace(yt, _t), mt.test(s[0].type) && l(e.parentNode) || e))) { if (s.splice(r, 1), !(t = i.length && c(s))) return Q.apply(n, i), n; break } } return (h || C(t, p))(i, e, !F, n, !e || mt.test(t) && l(e.parentNode) || e), n }, _.sortStable = j.split("").sort(W).join("") === j, _.detectDuplicates = !!E, P(), _.sortDetached = r(function(t) { return 1 & t.compareDocumentPosition(D.createElement("div")) }), r(function(t) { return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href") }) || s("type|href|height|width", function(t, e, n) { if (!n) return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2) }), _.attributes && r(function(t) { return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value") }) || s("value", function(t, e, n) { if (!n && "input" === t.nodeName.toLowerCase()) return t.defaultValue }), r(function(t) { return null == t.getAttribute("disabled") }) || s(J, function(t, e, n) { var i; if (!n) return !0 === t[e] ? e.toLowerCase() : (i = t.getAttributeNode(e)) && i.specified ? i.value : null }), e }(t);
    rt.find = ut, rt.expr = ut.selectors, rt.expr[":"] = rt.expr.pseudos, rt.uniqueSort = rt.unique = ut.uniqueSort, rt.text = ut.getText, rt.isXMLDoc = ut.isXML, rt.contains = ut.contains;
    var ct = function(t, e, n) { for (var i = [], r = void 0 !== n;
                (t = t[e]) && 9 !== t.nodeType;)
                if (1 === t.nodeType) { if (r && rt(t).is(n)) break;
                    i.push(t) }
            return i },
        ht = function(t, e) { for (var n = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && n.push(t); return n },
        pt = rt.expr.match.needsContext,
        dt = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
        ft = /^.[^:#\[\.,]*$/;
    rt.filter = function(t, e, n) { var i = e[0]; return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === i.nodeType ? rt.find.matchesSelector(i, t) ? [i] : [] : rt.find.matches(t, rt.grep(e, function(t) { return 1 === t.nodeType })) }, rt.fn.extend({ find: function(t) { var e, n = this.length,
                i = [],
                r = this; if ("string" != typeof t) return this.pushStack(rt(t).filter(function() { for (e = 0; e < n; e++)
                    if (rt.contains(r[e], this)) return !0 })); for (e = 0; e < n; e++) rt.find(t, r[e], i); return i = this.pushStack(n > 1 ? rt.unique(i) : i), i.selector = this.selector ? this.selector + " " + t : t, i }, filter: function(t) { return this.pushStack(i(this, t || [], !1)) }, not: function(t) { return this.pushStack(i(this, t || [], !0)) }, is: function(t) { return !!i(this, "string" == typeof t && pt.test(t) ? rt(t) : t || [], !1).length } });
    var gt, mt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    (rt.fn.init = function(t, e, n) { var i, r; if (!t) return this; if (n = n || gt, "string" == typeof t) { if (!(i = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [null, t, null] : mt.exec(t)) || !i[1] && e) return !e || e.jquery ? (e || n).find(t) : this.constructor(e).find(t); if (i[1]) { if (e = e instanceof rt ? e[0] : e, rt.merge(this, rt.parseHTML(i[1], e && e.nodeType ? e.ownerDocument || e : G, !0)), dt.test(i[1]) && rt.isPlainObject(e))
                    for (i in e) rt.isFunction(this[i]) ? this[i](e[i]) : this.attr(i, e[i]); return this } return r = G.getElementById(i[2]), r && r.parentNode && (this.length = 1, this[0] = r), this.context = G, this.selector = t, this } return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : rt.isFunction(t) ? void 0 !== n.ready ? n.ready(t) : t(rt) : (void 0 !== t.selector && (this.selector = t.selector, this.context = t.context), rt.makeArray(t, this)) }).prototype = rt.fn, gt = rt(G);
    var vt = /^(?:parents|prev(?:Until|All))/,
        yt = { children: !0, contents: !0, next: !0, prev: !0 };
    rt.fn.extend({ has: function(t) { var e = rt(t, this),
                n = e.length; return this.filter(function() { for (var t = 0; t < n; t++)
                    if (rt.contains(this, e[t])) return !0 }) }, closest: function(t, e) { for (var n, i = 0, r = this.length, s = [], o = pt.test(t) || "string" != typeof t ? rt(t, e || this.context) : 0; i < r; i++)
                for (n = this[i]; n && n !== e; n = n.parentNode)
                    if (n.nodeType < 11 && (o ? o.index(n) > -1 : 1 === n.nodeType && rt.find.matchesSelector(n, t))) { s.push(n); break }
            return this.pushStack(s.length > 1 ? rt.uniqueSort(s) : s) }, index: function(t) { return t ? "string" == typeof t ? J.call(rt(t), this[0]) : J.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1 }, add: function(t, e) { return this.pushStack(rt.uniqueSort(rt.merge(this.get(), rt(t, e)))) }, addBack: function(t) { return this.add(null == t ? this.prevObject : this.prevObject.filter(t)) } }), rt.each({ parent: function(t) { var e = t.parentNode; return e && 11 !== e.nodeType ? e : null }, parents: function(t) { return ct(t, "parentNode") }, parentsUntil: function(t, e, n) { return ct(t, "parentNode", n) }, next: function(t) { return r(t, "nextSibling") }, prev: function(t) { return r(t, "previousSibling") }, nextAll: function(t) { return ct(t, "nextSibling") }, prevAll: function(t) { return ct(t, "previousSibling") }, nextUntil: function(t, e, n) { return ct(t, "nextSibling", n) }, prevUntil: function(t, e, n) { return ct(t, "previousSibling", n) }, siblings: function(t) { return ht((t.parentNode || {}).firstChild, t) }, children: function(t) { return ht(t.firstChild) }, contents: function(t) { return t.contentDocument || rt.merge([], t.childNodes) } }, function(t, e) { rt.fn[t] = function(n, i) { var r = rt.map(this, e, n); return "Until" !== t.slice(-5) && (i = n), i && "string" == typeof i && (r = rt.filter(i, r)), this.length > 1 && (yt[t] || rt.uniqueSort(r), vt.test(t) && r.reverse()), this.pushStack(r) } });
    var _t = /\S+/g;
    rt.Callbacks = function(t) { t = "string" == typeof t ? s(t) : rt.extend({}, t); var e, n, i, r, o = [],
            a = [],
            l = -1,
            u = function() { for (r = t.once, i = e = !0; a.length; l = -1)
                    for (n = a.shift(); ++l < o.length;) !1 === o[l].apply(n[0], n[1]) && t.stopOnFalse && (l = o.length, n = !1);
                t.memory || (n = !1), e = !1, r && (o = n ? [] : "") },
            c = { add: function() { return o && (n && !e && (l = o.length - 1, a.push(n)), function e(n) { rt.each(n, function(n, i) { rt.isFunction(i) ? t.unique && c.has(i) || o.push(i) : i && i.length && "string" !== rt.type(i) && e(i) }) }(arguments), n && !e && u()), this }, remove: function() { return rt.each(arguments, function(t, e) { for (var n;
                            (n = rt.inArray(e, o, n)) > -1;) o.splice(n, 1), n <= l && l-- }), this }, has: function(t) { return t ? rt.inArray(t, o) > -1 : o.length > 0 }, empty: function() { return o && (o = []), this }, disable: function() { return r = a = [], o = n = "", this }, disabled: function() { return !o }, lock: function() { return r = a = [], n || (o = n = ""), this }, locked: function() { return !!r }, fireWith: function(t, n) { return r || (n = n || [], n = [t, n.slice ? n.slice() : n], a.push(n), e || u()), this }, fire: function() { return c.fireWith(this, arguments), this }, fired: function() { return !!i } }; return c }, rt.extend({ Deferred: function(t) { var e = [
                    ["resolve", "done", rt.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", rt.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", rt.Callbacks("memory")]
                ],
                n = "pending",
                i = { state: function() { return n }, always: function() { return r.done(arguments).fail(arguments), this }, then: function() { var t = arguments; return rt.Deferred(function(n) { rt.each(e, function(e, s) { var o = rt.isFunction(t[e]) && t[e];
                                r[s[1]](function() { var t = o && o.apply(this, arguments);
                                    t && rt.isFunction(t.promise) ? t.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[s[0] + "With"](this === i ? n.promise() : this, o ? [t] : arguments) }) }), t = null }).promise() }, promise: function(t) { return null != t ? rt.extend(t, i) : i } },
                r = {}; return i.pipe = i.then, rt.each(e, function(t, s) { var o = s[2],
                    a = s[3];
                i[s[1]] = o.add, a && o.add(function() { n = a }, e[1 ^ t][2].disable, e[2][2].lock), r[s[0]] = function() { return r[s[0] + "With"](this === r ? i : this, arguments), this }, r[s[0] + "With"] = o.fireWith }), i.promise(r), t && t.call(r, r), r }, when: function(t) { var e, n, i, r = 0,
                s = Q.call(arguments),
                o = s.length,
                a = 1 !== o || t && rt.isFunction(t.promise) ? o : 0,
                l = 1 === a ? t : rt.Deferred(),
                u = function(t, n, i) { return function(r) { n[t] = this, i[t] = arguments.length > 1 ? Q.call(arguments) : r, i === e ? l.notifyWith(n, i) : --a || l.resolveWith(n, i) } }; if (o > 1)
                for (e = new Array(o), n = new Array(o), i = new Array(o); r < o; r++) s[r] && rt.isFunction(s[r].promise) ? s[r].promise().progress(u(r, n, e)).done(u(r, i, s)).fail(l.reject) : --a; return a || l.resolveWith(i, s), l.promise() } });
    var xt;
    rt.fn.ready = function(t) { return rt.ready.promise().done(t), this }, rt.extend({ isReady: !1, readyWait: 1, holdReady: function(t) { t ? rt.readyWait++ : rt.ready(!0) }, ready: function(t) {
            (!0 === t ? --rt.readyWait : rt.isReady) || (rt.isReady = !0, !0 !== t && --rt.readyWait > 0 || (xt.resolveWith(G, [rt]), rt.fn.triggerHandler && (rt(G).triggerHandler("ready"), rt(G).off("ready")))) } }), rt.ready.promise = function(e) { return xt || (xt = rt.Deferred(), "complete" === G.readyState || "loading" !== G.readyState && !G.documentElement.doScroll ? t.setTimeout(rt.ready) : (G.addEventListener("DOMContentLoaded", o), t.addEventListener("load", o))), xt.promise(e) }, rt.ready.promise();
    var bt = function(t, e, n, i, r, s, o) { var a = 0,
                l = t.length,
                u = null == n; if ("object" === rt.type(n)) { r = !0; for (a in n) bt(t, e, a, n[a], !0, s, o) } else if (void 0 !== i && (r = !0, rt.isFunction(i) || (o = !0), u && (o ? (e.call(t, i), e = null) : (u = e, e = function(t, e, n) { return u.call(rt(t), n) })), e))
                for (; a < l; a++) e(t[a], n, o ? i : i.call(t[a], a, e(t[a], n))); return r ? t : u ? e.call(t) : l ? e(t[0], n) : s },
        wt = function(t) { return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType };
    a.uid = 1, a.prototype = { register: function(t, e) { var n = e || {}; return t.nodeType ? t[this.expando] = n : Object.defineProperty(t, this.expando, { value: n, writable: !0, configurable: !0 }), t[this.expando] }, cache: function(t) { if (!wt(t)) return {}; var e = t[this.expando]; return e || (e = {}, wt(t) && (t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando, { value: e, configurable: !0 }))), e }, set: function(t, e, n) { var i, r = this.cache(t); if ("string" == typeof e) r[e] = n;
            else
                for (i in e) r[i] = e[i]; return r }, get: function(t, e) { return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][e] }, access: function(t, e, n) { var i; return void 0 === e || e && "string" == typeof e && void 0 === n ? (i = this.get(t, e), void 0 !== i ? i : this.get(t, rt.camelCase(e))) : (this.set(t, e, n), void 0 !== n ? n : e) }, remove: function(t, e) { var n, i, r, s = t[this.expando]; if (void 0 !== s) { if (void 0 === e) this.register(t);
                else { rt.isArray(e) ? i = e.concat(e.map(rt.camelCase)) : (r = rt.camelCase(e), e in s ? i = [e, r] : (i = r, i = i in s ? [i] : i.match(_t) || [])), n = i.length; for (; n--;) delete s[i[n]] }(void 0 === e || rt.isEmptyObject(s)) && (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando]) } }, hasData: function(t) { var e = t[this.expando]; return void 0 !== e && !rt.isEmptyObject(e) } };
    var Tt = new a,
        Ct = new a,
        St = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        kt = /[A-Z]/g;
    rt.extend({ hasData: function(t) { return Ct.hasData(t) || Tt.hasData(t) }, data: function(t, e, n) { return Ct.access(t, e, n) }, removeData: function(t, e) { Ct.remove(t, e) }, _data: function(t, e, n) { return Tt.access(t, e, n) }, _removeData: function(t, e) { Tt.remove(t, e) } }), rt.fn.extend({ data: function(t, e) { var n, i, r, s = this[0],
                o = s && s.attributes; if (void 0 === t) { if (this.length && (r = Ct.get(s), 1 === s.nodeType && !Tt.get(s, "hasDataAttrs"))) { for (n = o.length; n--;) o[n] && (i = o[n].name, 0 === i.indexOf("data-") && (i = rt.camelCase(i.slice(5)), l(s, i, r[i])));
                    Tt.set(s, "hasDataAttrs", !0) } return r } return "object" == typeof t ? this.each(function() { Ct.set(this, t) }) : bt(this, function(e) { var n, i; if (s && void 0 === e) { if (void 0 !== (n = Ct.get(s, t) || Ct.get(s, t.replace(kt, "-$&").toLowerCase()))) return n; if (i = rt.camelCase(t), void 0 !== (n = Ct.get(s, i))) return n; if (void 0 !== (n = l(s, i, void 0))) return n } else i = rt.camelCase(t), this.each(function() { var n = Ct.get(this, i);
                    Ct.set(this, i, e), t.indexOf("-") > -1 && void 0 !== n && Ct.set(this, t, e) }) }, null, e, arguments.length > 1, null, !0) }, removeData: function(t) { return this.each(function() { Ct.remove(this, t) }) } }), rt.extend({ queue: function(t, e, n) { var i; if (t) return e = (e || "fx") + "queue", i = Tt.get(t, e), n && (!i || rt.isArray(n) ? i = Tt.access(t, e, rt.makeArray(n)) : i.push(n)), i || [] }, dequeue: function(t, e) { e = e || "fx"; var n = rt.queue(t, e),
                i = n.length,
                r = n.shift(),
                s = rt._queueHooks(t, e),
                o = function() { rt.dequeue(t, e) }; "inprogress" === r && (r = n.shift(), i--), r && ("fx" === e && n.unshift("inprogress"), delete s.stop, r.call(t, o, s)), !i && s && s.empty.fire() }, _queueHooks: function(t, e) { var n = e + "queueHooks"; return Tt.get(t, n) || Tt.access(t, n, { empty: rt.Callbacks("once memory").add(function() { Tt.remove(t, [e + "queue", n]) }) }) } }), rt.fn.extend({ queue: function(t, e) { var n = 2; return "string" != typeof t && (e = t, t = "fx", n--), arguments.length < n ? rt.queue(this[0], t) : void 0 === e ? this : this.each(function() { var n = rt.queue(this, t, e);
                rt._queueHooks(this, t), "fx" === t && "inprogress" !== n[0] && rt.dequeue(this, t) }) }, dequeue: function(t) { return this.each(function() { rt.dequeue(this, t) }) }, clearQueue: function(t) { return this.queue(t || "fx", []) }, promise: function(t, e) { var n, i = 1,
                r = rt.Deferred(),
                s = this,
                o = this.length,
                a = function() {--i || r.resolveWith(s, [s]) }; for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; o--;)(n = Tt.get(s[o], t + "queueHooks")) && n.empty && (i++, n.empty.add(a)); return a(), r.promise(e) } });
    var At = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        Et = new RegExp("^(?:([+-])=|)(" + At + ")([a-z%]*)$", "i"),
        Pt = ["Top", "Right", "Bottom", "Left"],
        Dt = function(t, e) { return t = e || t, "none" === rt.css(t, "display") || !rt.contains(t.ownerDocument, t) },
        Ot = /^(?:checkbox|radio)$/i,
        Ft = /<([\w:-]+)/,
        Mt = /^$|\/(?:java|ecma)script/i,
        Nt = { option: [1, "<select multiple='multiple'>", "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };
    Nt.optgroup = Nt.option, Nt.tbody = Nt.tfoot = Nt.colgroup = Nt.caption = Nt.thead, Nt.th = Nt.td;
    var $t = /<|&#?\w+;/;
    ! function() { var t = G.createDocumentFragment(),
            e = t.appendChild(G.createElement("div")),
            n = G.createElement("input");
        n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), e.appendChild(n), it.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", it.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue }();
    var Rt = /^key/,
        jt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Lt = /^([^.]*)(?:\.(.+)|)/;
    rt.event = {
        global: {},
        add: function(t, e, n, i, r) { var s, o, a, l, u, c, h, p, d, f, g, m = Tt.get(t); if (m)
                for (n.handler && (s = n, n = s.handler, r = s.selector), n.guid || (n.guid = rt.guid++), (l = m.events) || (l = m.events = {}), (o = m.handle) || (o = m.handle = function(e) { return void 0 !== rt && rt.event.triggered !== e.type ? rt.event.dispatch.apply(t, arguments) : void 0 }), e = (e || "").match(_t) || [""], u = e.length; u--;) a = Lt.exec(e[u]) || [], d = g = a[1], f = (a[2] || "").split(".").sort(), d && (h = rt.event.special[d] || {}, d = (r ? h.delegateType : h.bindType) || d, h = rt.event.special[d] || {}, c = rt.extend({ type: d, origType: g, data: i, handler: n, guid: n.guid, selector: r, needsContext: r && rt.expr.match.needsContext.test(r), namespace: f.join(".") }, s), (p = l[d]) || (p = l[d] = [], p.delegateCount = 0, h.setup && !1 !== h.setup.call(t, i, f, o) || t.addEventListener && t.addEventListener(d, o)), h.add && (h.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), r ? p.splice(p.delegateCount++, 0, c) : p.push(c), rt.event.global[d] = !0) },
        remove: function(t, e, n, i, r) {
            var s, o, a, l, u, c, h, p, d, f, g, m = Tt.hasData(t) && Tt.get(t);
            if (m && (l = m.events)) {
                for (e = (e || "").match(_t) || [""], u = e.length; u--;)
                    if (a = Lt.exec(e[u]) || [], d = g = a[1], f = (a[2] || "").split(".").sort(), d) {
                        for (h = rt.event.special[d] || {}, d = (i ? h.delegateType : h.bindType) || d, p = l[d] || [], a = a[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), o = s = p.length; s--;) c = p[s], !r && g !== c.origType || n && n.guid !== c.guid || a && !a.test(c.namespace) || i && i !== c.selector && ("**" !== i || !c.selector) || (p.splice(s, 1), c.selector && p.delegateCount--, h.remove && h.remove.call(t, c));
                        o && !p.length && (h.teardown && !1 !== h.teardown.call(t, f, m.handle) || rt.removeEvent(t, d, m.handle), delete l[d])
                    } else
                        for (d in l) rt.event.remove(t, d + e[u], n, i, !0);
                rt.isEmptyObject(l) && Tt.remove(t, "handle events")
            }
        },
        dispatch: function(t) { t = rt.event.fix(t); var e, n, i, r, s, o = [],
                a = Q.call(arguments),
                l = (Tt.get(this, "events") || {})[t.type] || [],
                u = rt.event.special[t.type] || {}; if (a[0] = t, t.delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, t)) { for (o = rt.event.handlers.call(this, t, l), e = 0;
                    (r = o[e++]) && !t.isPropagationStopped();)
                    for (t.currentTarget = r.elem, n = 0;
                        (s = r.handlers[n++]) && !t.isImmediatePropagationStopped();) t.rnamespace && !t.rnamespace.test(s.namespace) || (t.handleObj = s, t.data = s.data, void 0 !== (i = ((rt.event.special[s.origType] || {}).handle || s.handler).apply(r.elem, a)) && !1 === (t.result = i) && (t.preventDefault(), t.stopPropagation())); return u.postDispatch && u.postDispatch.call(this, t), t.result } },
        handlers: function(t, e) { var n, i, r, s, o = [],
                a = e.delegateCount,
                l = t.target; if (a && l.nodeType && ("click" !== t.type || isNaN(t.button) || t.button < 1))
                for (; l !== this; l = l.parentNode || this)
                    if (1 === l.nodeType && (!0 !== l.disabled || "click" !== t.type)) { for (i = [], n = 0; n < a; n++) s = e[n], r = s.selector + " ", void 0 === i[r] && (i[r] = s.needsContext ? rt(r, this).index(l) > -1 : rt.find(r, this, null, [l]).length), i[r] && i.push(s);
                        i.length && o.push({ elem: l, handlers: i }) }
            return a < e.length && o.push({ elem: this, handlers: e.slice(a) }), o },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: { props: "char charCode key keyCode".split(" "), filter: function(t, e) { return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t } },
        mouseHooks: { props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "), filter: function(t, e) { var n, i, r, s = e.button; return null == t.pageX && null != e.clientX && (n = t.target.ownerDocument || G, i = n.documentElement, r = n.body, t.pageX = e.clientX + (i && i.scrollLeft || r && r.scrollLeft || 0) - (i && i.clientLeft || r && r.clientLeft || 0), t.pageY = e.clientY + (i && i.scrollTop || r && r.scrollTop || 0) - (i && i.clientTop || r && r.clientTop || 0)), t.which || void 0 === s || (t.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), t } },
        fix: function(t) { if (t[rt.expando]) return t; var e, n, i, r = t.type,
                s = t,
                o = this.fixHooks[r]; for (o || (this.fixHooks[r] = o = jt.test(r) ? this.mouseHooks : Rt.test(r) ? this.keyHooks : {}), i = o.props ? this.props.concat(o.props) : this.props, t = new rt.Event(s), e = i.length; e--;) n = i[e], t[n] = s[n]; return t.target || (t.target = G), 3 === t.target.nodeType && (t.target = t.target.parentNode), o.filter ? o.filter(t, s) : t },
        special: { load: { noBubble: !0 }, focus: { trigger: function() { if (this !== g() && this.focus) return this.focus(), !1 }, delegateType: "focusin" }, blur: { trigger: function() { if (this === g() && this.blur) return this.blur(), !1 }, delegateType: "focusout" }, click: { trigger: function() { if ("checkbox" === this.type && this.click && rt.nodeName(this, "input")) return this.click(), !1 }, _default: function(t) { return rt.nodeName(t.target, "a") } }, beforeunload: { postDispatch: function(t) { void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result) } } }
    }, rt.removeEvent = function(t, e, n) { t.removeEventListener && t.removeEventListener(e, n) }, rt.Event = function(t, e) { if (!(this instanceof rt.Event)) return new rt.Event(t, e);
        t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && !1 === t.returnValue ? d : f) : this.type = t, e && rt.extend(this, e), this.timeStamp = t && t.timeStamp || rt.now(), this[rt.expando] = !0 }, rt.Event.prototype = { constructor: rt.Event, isDefaultPrevented: f, isPropagationStopped: f, isImmediatePropagationStopped: f, isSimulated: !1, preventDefault: function() { var t = this.originalEvent;
            this.isDefaultPrevented = d, t && !this.isSimulated && t.preventDefault() }, stopPropagation: function() { var t = this.originalEvent;
            this.isPropagationStopped = d, t && !this.isSimulated && t.stopPropagation() }, stopImmediatePropagation: function() { var t = this.originalEvent;
            this.isImmediatePropagationStopped = d, t && !this.isSimulated && t.stopImmediatePropagation(), this.stopPropagation() } }, rt.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function(t, e) { rt.event.special[t] = { delegateType: e, bindType: e, handle: function(t) { var n, i = this,
                    r = t.relatedTarget,
                    s = t.handleObj; return r && (r === i || rt.contains(i, r)) || (t.type = s.origType, n = s.handler.apply(this, arguments), t.type = e), n } } }), rt.fn.extend({ on: function(t, e, n, i) { return m(this, t, e, n, i) }, one: function(t, e, n, i) { return m(this, t, e, n, i, 1) }, off: function(t, e, n) { var i, r; if (t && t.preventDefault && t.handleObj) return i = t.handleObj, rt(t.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this; if ("object" == typeof t) { for (r in t) this.off(r, e, t[r]); return this } return !1 !== e && "function" != typeof e || (n = e, e = void 0), !1 === n && (n = f), this.each(function() { rt.event.remove(this, t, n, e) }) } });
    var zt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
        Bt = /<script|<style|<link/i,
        qt = /checked\s*(?:[^=]|=\s*.checked.)/i,
        It = /^true\/(.*)/,
        Ht = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    rt.extend({ htmlPrefilter: function(t) { return t.replace(zt, "<$1></$2>") }, clone: function(t, e, n) { var i, r, s, o, a = t.cloneNode(!0),
                l = rt.contains(t.ownerDocument, t); if (!(it.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || rt.isXMLDoc(t)))
                for (o = c(a), s = c(t), i = 0, r = s.length; i < r; i++) b(s[i], o[i]); if (e)
                if (n)
                    for (s = s || c(t), o = o || c(a), i = 0, r = s.length; i < r; i++) x(s[i], o[i]);
                else x(t, a);
            return o = c(a, "script"), o.length > 0 && h(o, !l && c(t, "script")), a }, cleanData: function(t) { for (var e, n, i, r = rt.event.special, s = 0; void 0 !== (n = t[s]); s++)
                if (wt(n)) { if (e = n[Tt.expando]) { if (e.events)
                            for (i in e.events) r[i] ? rt.event.remove(n, i) : rt.removeEvent(n, i, e.handle);
                        n[Tt.expando] = void 0 }
                    n[Ct.expando] && (n[Ct.expando] = void 0) } } }), rt.fn.extend({ domManip: w, detach: function(t) { return T(this, t, !0) }, remove: function(t) { return T(this, t) }, text: function(t) { return bt(this, function(t) { return void 0 === t ? rt.text(this) : this.empty().each(function() { 1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t) }) }, null, t, arguments.length) }, append: function() { return w(this, arguments, function(t) { if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) { v(this, t).appendChild(t) } }) }, prepend: function() { return w(this, arguments, function(t) { if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) { var e = v(this, t);
                    e.insertBefore(t, e.firstChild) } }) }, before: function() { return w(this, arguments, function(t) { this.parentNode && this.parentNode.insertBefore(t, this) }) }, after: function() { return w(this, arguments, function(t) { this.parentNode && this.parentNode.insertBefore(t, this.nextSibling) }) }, empty: function() { for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (rt.cleanData(c(t, !1)), t.textContent = ""); return this }, clone: function(t, e) { return t = null != t && t, e = null == e ? t : e, this.map(function() { return rt.clone(this, t, e) }) }, html: function(t) { return bt(this, function(t) { var e = this[0] || {},
                    n = 0,
                    i = this.length; if (void 0 === t && 1 === e.nodeType) return e.innerHTML; if ("string" == typeof t && !Bt.test(t) && !Nt[(Ft.exec(t) || ["", ""])[1].toLowerCase()]) { t = rt.htmlPrefilter(t); try { for (; n < i; n++) e = this[n] || {}, 1 === e.nodeType && (rt.cleanData(c(e, !1)), e.innerHTML = t);
                        e = 0 } catch (t) {} }
                e && this.empty().append(t) }, null, t, arguments.length) }, replaceWith: function() { var t = []; return w(this, arguments, function(e) { var n = this.parentNode;
                rt.inArray(this, t) < 0 && (rt.cleanData(c(this)), n && n.replaceChild(e, this)) }, t) } }), rt.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function(t, e) { rt.fn[t] = function(t) { for (var n, i = [], r = rt(t), s = r.length - 1, o = 0; o <= s; o++) n = o === s ? this : this.clone(!0), rt(r[o])[e](n), K.apply(i, n.get()); return this.pushStack(i) } });
    var Wt, Xt = { HTML: "block", BODY: "block" },
        Ut = /^margin/,
        Vt = new RegExp("^(" + At + ")(?!px)[a-z%]+$", "i"),
        Yt = function(e) { var n = e.ownerDocument.defaultView; return n && n.opener || (n = t), n.getComputedStyle(e) },
        Gt = function(t, e, n, i) { var r, s, o = {}; for (s in e) o[s] = t.style[s], t.style[s] = e[s];
            r = n.apply(t, i || []); for (s in e) t.style[s] = o[s]; return r },
        Qt = G.documentElement;
    ! function() {
        function e() { a.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", a.innerHTML = "", Qt.appendChild(o); var e = t.getComputedStyle(a);
            n = "1%" !== e.top, s = "2px" === e.marginLeft, i = "4px" === e.width, a.style.marginRight = "50%", r = "4px" === e.marginRight, Qt.removeChild(o) } var n, i, r, s, o = G.createElement("div"),
            a = G.createElement("div");
        a.style && (a.style.backgroundClip = "content-box", a.cloneNode(!0).style.backgroundClip = "", it.clearCloneStyle = "content-box" === a.style.backgroundClip, o.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", o.appendChild(a), rt.extend(it, { pixelPosition: function() { return e(), n }, boxSizingReliable: function() { return null == i && e(), i }, pixelMarginRight: function() { return null == i && e(), r }, reliableMarginLeft: function() { return null == i && e(), s }, reliableMarginRight: function() { var e, n = a.appendChild(G.createElement("div")); return n.style.cssText = a.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", n.style.marginRight = n.style.width = "0", a.style.width = "1px", Qt.appendChild(o), e = !parseFloat(t.getComputedStyle(n).marginRight), Qt.removeChild(o), a.removeChild(n), e } })) }();
    var Zt = /^(none|table(?!-c[ea]).+)/,
        Kt = { position: "absolute", visibility: "hidden", display: "block" },
        Jt = { letterSpacing: "0", fontWeight: "400" },
        te = ["Webkit", "O", "Moz", "ms"],
        ee = G.createElement("div").style;
    rt.extend({ cssHooks: { opacity: { get: function(t, e) { if (e) { var n = k(t, "opacity"); return "" === n ? "1" : n } } } }, cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: { float: "cssFloat" }, style: function(t, e, n, i) { if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) { var r, s, o, a = rt.camelCase(e),
                    l = t.style; if (e = rt.cssProps[a] || (rt.cssProps[a] = E(a) || a), o = rt.cssHooks[e] || rt.cssHooks[a], void 0 === n) return o && "get" in o && void 0 !== (r = o.get(t, !1, i)) ? r : l[e];
                s = typeof n, "string" === s && (r = Et.exec(n)) && r[1] && (n = u(t, e, r), s = "number"), null != n && n === n && ("number" === s && (n += r && r[3] || (rt.cssNumber[a] ? "" : "px")), it.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (l[e] = "inherit"), o && "set" in o && void 0 === (n = o.set(t, n, i)) || (l[e] = n)) } }, css: function(t, e, n, i) { var r, s, o, a = rt.camelCase(e); return e = rt.cssProps[a] || (rt.cssProps[a] = E(a) || a), o = rt.cssHooks[e] || rt.cssHooks[a], o && "get" in o && (r = o.get(t, !0, n)), void 0 === r && (r = k(t, e, i)), "normal" === r && e in Jt && (r = Jt[e]), "" === n || n ? (s = parseFloat(r), !0 === n || isFinite(s) ? s || 0 : r) : r } }), rt.each(["height", "width"], function(t, e) { rt.cssHooks[e] = { get: function(t, n, i) { if (n) return Zt.test(rt.css(t, "display")) && 0 === t.offsetWidth ? Gt(t, Kt, function() { return O(t, e, i) }) : O(t, e, i) }, set: function(t, n, i) { var r, s = i && Yt(t),
                    o = i && D(t, e, i, "border-box" === rt.css(t, "boxSizing", !1, s), s); return o && (r = Et.exec(n)) && "px" !== (r[3] || "px") && (t.style[e] = n, n = rt.css(t, e)), P(t, n, o) } } }), rt.cssHooks.marginLeft = A(it.reliableMarginLeft, function(t, e) { if (e) return (parseFloat(k(t, "marginLeft")) || t.getBoundingClientRect().left - Gt(t, { marginLeft: 0 }, function() { return t.getBoundingClientRect().left })) + "px" }), rt.cssHooks.marginRight = A(it.reliableMarginRight, function(t, e) { if (e) return Gt(t, { display: "inline-block" }, k, [t, "marginRight"]) }), rt.each({ margin: "", padding: "", border: "Width" }, function(t, e) { rt.cssHooks[t + e] = { expand: function(n) { for (var i = 0, r = {}, s = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) r[t + Pt[i] + e] = s[i] || s[i - 2] || s[0]; return r } }, Ut.test(t) || (rt.cssHooks[t + e].set = P) }), rt.fn.extend({ css: function(t, e) { return bt(this, function(t, e, n) { var i, r, s = {},
                    o = 0; if (rt.isArray(e)) { for (i = Yt(t), r = e.length; o < r; o++) s[e[o]] = rt.css(t, e[o], !1, i); return s } return void 0 !== n ? rt.style(t, e, n) : rt.css(t, e) }, t, e, arguments.length > 1) }, show: function() { return F(this, !0) }, hide: function() { return F(this) }, toggle: function(t) { return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() { Dt(this) ? rt(this).show() : rt(this).hide() }) } }), rt.Tween = M, M.prototype = { constructor: M, init: function(t, e, n, i, r, s) { this.elem = t, this.prop = n, this.easing = r || rt.easing._default, this.options = e, this.start = this.now = this.cur(), this.end = i, this.unit = s || (rt.cssNumber[n] ? "" : "px") }, cur: function() { var t = M.propHooks[this.prop]; return t && t.get ? t.get(this) : M.propHooks._default.get(this) }, run: function(t) { var e, n = M.propHooks[this.prop]; return this.options.duration ? this.pos = e = rt.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : M.propHooks._default.set(this), this } }, M.prototype.init.prototype = M.prototype, M.propHooks = { _default: { get: function(t) { var e; return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = rt.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0) }, set: function(t) { rt.fx.step[t.prop] ? rt.fx.step[t.prop](t) : 1 !== t.elem.nodeType || null == t.elem.style[rt.cssProps[t.prop]] && !rt.cssHooks[t.prop] ? t.elem[t.prop] = t.now : rt.style(t.elem, t.prop, t.now + t.unit) } } }, M.propHooks.scrollTop = M.propHooks.scrollLeft = { set: function(t) { t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now) } }, rt.easing = { linear: function(t) { return t }, swing: function(t) { return .5 - Math.cos(t * Math.PI) / 2 }, _default: "swing" }, rt.fx = M.prototype.init, rt.fx.step = {};
    var ne, ie, re = /^(?:toggle|show|hide)$/,
        se = /queueHooks$/;
    rt.Animation = rt.extend(z, { tweeners: { "*": [function(t, e) { var n = this.createTween(t, e); return u(n.elem, t, Et.exec(e), n), n }] }, tweener: function(t, e) { rt.isFunction(t) ? (e = t, t = ["*"]) : t = t.match(_t); for (var n, i = 0, r = t.length; i < r; i++) n = t[i], z.tweeners[n] = z.tweeners[n] || [], z.tweeners[n].unshift(e) }, prefilters: [j], prefilter: function(t, e) { e ? z.prefilters.unshift(t) : z.prefilters.push(t) } }), rt.speed = function(t, e, n) { var i = t && "object" == typeof t ? rt.extend({}, t) : { complete: n || !n && e || rt.isFunction(t) && t, duration: t, easing: n && e || e && !rt.isFunction(e) && e }; return i.duration = rt.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in rt.fx.speeds ? rt.fx.speeds[i.duration] : rt.fx.speeds._default, null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function() { rt.isFunction(i.old) && i.old.call(this), i.queue && rt.dequeue(this, i.queue) }, i }, rt.fn.extend({ fadeTo: function(t, e, n, i) { return this.filter(Dt).css("opacity", 0).show().end().animate({ opacity: e }, t, n, i) }, animate: function(t, e, n, i) { var r = rt.isEmptyObject(t),
                    s = rt.speed(e, n, i),
                    o = function() { var e = z(this, rt.extend({}, t), s);
                        (r || Tt.get(this, "finish")) && e.stop(!0) }; return o.finish = o, r || !1 === s.queue ? this.each(o) : this.queue(s.queue, o) }, stop: function(t, e, n) { var i = function(t) { var e = t.stop;
                    delete t.stop, e(n) }; return "string" != typeof t && (n = e, e = t, t = void 0), e && !1 !== t && this.queue(t || "fx", []), this.each(function() { var e = !0,
                        r = null != t && t + "queueHooks",
                        s = rt.timers,
                        o = Tt.get(this); if (r) o[r] && o[r].stop && i(o[r]);
                    else
                        for (r in o) o[r] && o[r].stop && se.test(r) && i(o[r]); for (r = s.length; r--;) s[r].elem !== this || null != t && s[r].queue !== t || (s[r].anim.stop(n), e = !1, s.splice(r, 1));!e && n || rt.dequeue(this, t) }) }, finish: function(t) { return !1 !== t && (t = t || "fx"), this.each(function() { var e, n = Tt.get(this),
                        i = n[t + "queue"],
                        r = n[t + "queueHooks"],
                        s = rt.timers,
                        o = i ? i.length : 0; for (n.finish = !0, rt.queue(this, t, []), r && r.stop && r.stop.call(this, !0), e = s.length; e--;) s[e].elem === this && s[e].queue === t && (s[e].anim.stop(!0), s.splice(e, 1)); for (e = 0; e < o; e++) i[e] && i[e].finish && i[e].finish.call(this);
                    delete n.finish }) } }), rt.each(["toggle", "show", "hide"], function(t, e) { var n = rt.fn[e];
            rt.fn[e] = function(t, i, r) { return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate($(e, !0), t, i, r) } }), rt.each({ slideDown: $("show"), slideUp: $("hide"), slideToggle: $("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function(t, e) { rt.fn[t] = function(t, n, i) { return this.animate(e, t, n, i) } }), rt.timers = [], rt.fx.tick = function() { var t, e = 0,
                n = rt.timers; for (ne = rt.now(); e < n.length; e++)(t = n[e])() || n[e] !== t || n.splice(e--, 1);
            n.length || rt.fx.stop(), ne = void 0 }, rt.fx.timer = function(t) { rt.timers.push(t), t() ? rt.fx.start() : rt.timers.pop() }, rt.fx.interval = 13, rt.fx.start = function() { ie || (ie = t.setInterval(rt.fx.tick, rt.fx.interval)) }, rt.fx.stop = function() { t.clearInterval(ie), ie = null }, rt.fx.speeds = { slow: 600, fast: 200, _default: 400 }, rt.fn.delay = function(e, n) { return e = rt.fx ? rt.fx.speeds[e] || e : e, n = n || "fx", this.queue(n, function(n, i) { var r = t.setTimeout(n, e);
                i.stop = function() { t.clearTimeout(r) } }) },
        function() { var t = G.createElement("input"),
                e = G.createElement("select"),
                n = e.appendChild(G.createElement("option"));
            t.type = "checkbox", it.checkOn = "" !== t.value, it.optSelected = n.selected, e.disabled = !0, it.optDisabled = !n.disabled, t = G.createElement("input"), t.value = "t", t.type = "radio", it.radioValue = "t" === t.value }();
    var oe, ae = rt.expr.attrHandle;
    rt.fn.extend({ attr: function(t, e) { return bt(this, rt.attr, t, e, arguments.length > 1) }, removeAttr: function(t) { return this.each(function() { rt.removeAttr(this, t) }) } }), rt.extend({ attr: function(t, e, n) { var i, r, s = t.nodeType; if (3 !== s && 8 !== s && 2 !== s) return void 0 === t.getAttribute ? rt.prop(t, e, n) : (1 === s && rt.isXMLDoc(t) || (e = e.toLowerCase(), r = rt.attrHooks[e] || (rt.expr.match.bool.test(e) ? oe : void 0)), void 0 !== n ? null === n ? void rt.removeAttr(t, e) : r && "set" in r && void 0 !== (i = r.set(t, n, e)) ? i : (t.setAttribute(e, n + ""), n) : r && "get" in r && null !== (i = r.get(t, e)) ? i : (i = rt.find.attr(t, e), null == i ? void 0 : i)) }, attrHooks: { type: { set: function(t, e) { if (!it.radioValue && "radio" === e && rt.nodeName(t, "input")) { var n = t.value; return t.setAttribute("type", e), n && (t.value = n), e } } } }, removeAttr: function(t, e) { var n, i, r = 0,
                s = e && e.match(_t); if (s && 1 === t.nodeType)
                for (; n = s[r++];) i = rt.propFix[n] || n, rt.expr.match.bool.test(n) && (t[i] = !1), t.removeAttribute(n) } }), oe = { set: function(t, e, n) { return !1 === e ? rt.removeAttr(t, n) : t.setAttribute(n, n), n } }, rt.each(rt.expr.match.bool.source.match(/\w+/g), function(t, e) { var n = ae[e] || rt.find.attr;
        ae[e] = function(t, e, i) { var r, s; return i || (s = ae[e], ae[e] = r, r = null != n(t, e, i) ? e.toLowerCase() : null, ae[e] = s), r } });
    var le = /^(?:input|select|textarea|button)$/i,
        ue = /^(?:a|area)$/i;
    rt.fn.extend({ prop: function(t, e) { return bt(this, rt.prop, t, e, arguments.length > 1) }, removeProp: function(t) { return this.each(function() { delete this[rt.propFix[t] || t] }) } }), rt.extend({ prop: function(t, e, n) { var i, r, s = t.nodeType; if (3 !== s && 8 !== s && 2 !== s) return 1 === s && rt.isXMLDoc(t) || (e = rt.propFix[e] || e, r = rt.propHooks[e]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(t, n, e)) ? i : t[e] = n : r && "get" in r && null !== (i = r.get(t, e)) ? i : t[e] }, propHooks: { tabIndex: { get: function(t) { var e = rt.find.attr(t, "tabindex"); return e ? parseInt(e, 10) : le.test(t.nodeName) || ue.test(t.nodeName) && t.href ? 0 : -1 } } }, propFix: { for: "htmlFor", class: "className" } }), it.optSelected || (rt.propHooks.selected = { get: function(t) { var e = t.parentNode; return e && e.parentNode && e.parentNode.selectedIndex, null }, set: function(t) { var e = t.parentNode;
            e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex) } }), rt.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() { rt.propFix[this.toLowerCase()] = this });
    var ce = /[\t\r\n\f]/g;
    rt.fn.extend({ addClass: function(t) { var e, n, i, r, s, o, a, l = 0; if (rt.isFunction(t)) return this.each(function(e) { rt(this).addClass(t.call(this, e, B(this))) }); if ("string" == typeof t && t)
                for (e = t.match(_t) || []; n = this[l++];)
                    if (r = B(n), i = 1 === n.nodeType && (" " + r + " ").replace(ce, " ")) { for (o = 0; s = e[o++];) i.indexOf(" " + s + " ") < 0 && (i += s + " ");
                        a = rt.trim(i), r !== a && n.setAttribute("class", a) }
            return this }, removeClass: function(t) { var e, n, i, r, s, o, a, l = 0; if (rt.isFunction(t)) return this.each(function(e) { rt(this).removeClass(t.call(this, e, B(this))) }); if (!arguments.length) return this.attr("class", ""); if ("string" == typeof t && t)
                for (e = t.match(_t) || []; n = this[l++];)
                    if (r = B(n), i = 1 === n.nodeType && (" " + r + " ").replace(ce, " ")) { for (o = 0; s = e[o++];)
                            for (; i.indexOf(" " + s + " ") > -1;) i = i.replace(" " + s + " ", " ");
                        a = rt.trim(i), r !== a && n.setAttribute("class", a) }
            return this }, toggleClass: function(t, e) { var n = typeof t; return "boolean" == typeof e && "string" === n ? e ? this.addClass(t) : this.removeClass(t) : rt.isFunction(t) ? this.each(function(n) { rt(this).toggleClass(t.call(this, n, B(this), e), e) }) : this.each(function() { var e, i, r, s; if ("string" === n)
                    for (i = 0, r = rt(this), s = t.match(_t) || []; e = s[i++];) r.hasClass(e) ? r.removeClass(e) : r.addClass(e);
                else void 0 !== t && "boolean" !== n || (e = B(this), e && Tt.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === t ? "" : Tt.get(this, "__className__") || "")) }) }, hasClass: function(t) { var e, n, i = 0; for (e = " " + t + " "; n = this[i++];)
                if (1 === n.nodeType && (" " + B(n) + " ").replace(ce, " ").indexOf(e) > -1) return !0;
            return !1 } });
    var he = /\r/g,
        pe = /[\x20\t\r\n\f]+/g;
    rt.fn.extend({ val: function(t) { var e, n, i, r = this[0]; { if (arguments.length) return i = rt.isFunction(t), this.each(function(n) { var r;
                    1 === this.nodeType && (r = i ? t.call(this, n, rt(this).val()) : t, null == r ? r = "" : "number" == typeof r ? r += "" : rt.isArray(r) && (r = rt.map(r, function(t) { return null == t ? "" : t + "" })), (e = rt.valHooks[this.type] || rt.valHooks[this.nodeName.toLowerCase()]) && "set" in e && void 0 !== e.set(this, r, "value") || (this.value = r)) }); if (r) return (e = rt.valHooks[r.type] || rt.valHooks[r.nodeName.toLowerCase()]) && "get" in e && void 0 !== (n = e.get(r, "value")) ? n : (n = r.value, "string" == typeof n ? n.replace(he, "") : null == n ? "" : n) } } }), rt.extend({ valHooks: { option: { get: function(t) { var e = rt.find.attr(t, "value"); return null != e ? e : rt.trim(rt.text(t)).replace(pe, " ") } }, select: { get: function(t) { for (var e, n, i = t.options, r = t.selectedIndex, s = "select-one" === t.type || r < 0, o = s ? null : [], a = s ? r + 1 : i.length, l = r < 0 ? a : s ? r : 0; l < a; l++)
                        if (n = i[l], (n.selected || l === r) && (it.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !rt.nodeName(n.parentNode, "optgroup"))) { if (e = rt(n).val(), s) return e;
                            o.push(e) }
                    return o }, set: function(t, e) { for (var n, i, r = t.options, s = rt.makeArray(e), o = r.length; o--;) i = r[o], (i.selected = rt.inArray(rt.valHooks.option.get(i), s) > -1) && (n = !0); return n || (t.selectedIndex = -1), s } } } }), rt.each(["radio", "checkbox"], function() { rt.valHooks[this] = { set: function(t, e) { if (rt.isArray(e)) return t.checked = rt.inArray(rt(t).val(), e) > -1 } }, it.checkOn || (rt.valHooks[this].get = function(t) { return null === t.getAttribute("value") ? "on" : t.value }) });
    var de = /^(?:focusinfocus|focusoutblur)$/;
    rt.extend(rt.event, { trigger: function(e, n, i, r) { var s, o, a, l, u, c, h, p = [i || G],
                d = nt.call(e, "type") ? e.type : e,
                f = nt.call(e, "namespace") ? e.namespace.split(".") : []; if (o = a = i = i || G, 3 !== i.nodeType && 8 !== i.nodeType && !de.test(d + rt.event.triggered) && (d.indexOf(".") > -1 && (f = d.split("."), d = f.shift(), f.sort()), u = d.indexOf(":") < 0 && "on" + d, e = e[rt.expando] ? e : new rt.Event(d, "object" == typeof e && e), e.isTrigger = r ? 2 : 3, e.namespace = f.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = i), n = null == n ? [e] : rt.makeArray(n, [e]), h = rt.event.special[d] || {}, r || !h.trigger || !1 !== h.trigger.apply(i, n))) { if (!r && !h.noBubble && !rt.isWindow(i)) { for (l = h.delegateType || d, de.test(l + d) || (o = o.parentNode); o; o = o.parentNode) p.push(o), a = o;
                    a === (i.ownerDocument || G) && p.push(a.defaultView || a.parentWindow || t) } for (s = 0;
                    (o = p[s++]) && !e.isPropagationStopped();) e.type = s > 1 ? l : h.bindType || d, c = (Tt.get(o, "events") || {})[e.type] && Tt.get(o, "handle"), c && c.apply(o, n), (c = u && o[u]) && c.apply && wt(o) && (e.result = c.apply(o, n), !1 === e.result && e.preventDefault()); return e.type = d, r || e.isDefaultPrevented() || h._default && !1 !== h._default.apply(p.pop(), n) || !wt(i) || u && rt.isFunction(i[d]) && !rt.isWindow(i) && (a = i[u], a && (i[u] = null), rt.event.triggered = d, i[d](), rt.event.triggered = void 0, a && (i[u] = a)), e.result } }, simulate: function(t, e, n) { var i = rt.extend(new rt.Event, n, { type: t, isSimulated: !0 });
            rt.event.trigger(i, null, e) } }), rt.fn.extend({ trigger: function(t, e) { return this.each(function() { rt.event.trigger(t, e, this) }) }, triggerHandler: function(t, e) { var n = this[0]; if (n) return rt.event.trigger(t, e, n, !0) } }), rt.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(t, e) { rt.fn[e] = function(t, n) { return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e) } }), rt.fn.extend({ hover: function(t, e) { return this.mouseenter(t).mouseleave(e || t) } }), it.focusin = "onfocusin" in t, it.focusin || rt.each({ focus: "focusin", blur: "focusout" }, function(t, e) { var n = function(t) { rt.event.simulate(e, t.target, rt.event.fix(t)) };
        rt.event.special[e] = { setup: function() { var i = this.ownerDocument || this,
                    r = Tt.access(i, e);
                r || i.addEventListener(t, n, !0), Tt.access(i, e, (r || 0) + 1) }, teardown: function() { var i = this.ownerDocument || this,
                    r = Tt.access(i, e) - 1;
                r ? Tt.access(i, e, r) : (i.removeEventListener(t, n, !0), Tt.remove(i, e)) } } });
    var fe = t.location,
        ge = rt.now(),
        me = /\?/;
    rt.parseJSON = function(t) { return JSON.parse(t + "") }, rt.parseXML = function(e) { var n; if (!e || "string" != typeof e) return null; try { n = (new t.DOMParser).parseFromString(e, "text/xml") } catch (t) { n = void 0 } return n && !n.getElementsByTagName("parsererror").length || rt.error("Invalid XML: " + e), n };
    var ve = /#.*$/,
        ye = /([?&])_=[^&]*/,
        _e = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        xe = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        be = /^(?:GET|HEAD)$/,
        we = /^\/\//,
        Te = {},
        Ce = {},
        Se = "*/".concat("*"),
        ke = G.createElement("a");
    ke.href = fe.href, rt.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: fe.href, type: "GET", isLocal: xe.test(fe.protocol), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": Se, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": rt.parseJSON, "text xml": rt.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function(t, e) { return e ? H(H(t, rt.ajaxSettings), e) : H(rt.ajaxSettings, t) }, ajaxPrefilter: q(Te), ajaxTransport: q(Ce), ajax: function(e, n) {
            function i(e, n, i, a) { var u, h, y, _, b, T = n;
                2 !== x && (x = 2, l && t.clearTimeout(l), r = void 0, o = a || "", w.readyState = e > 0 ? 4 : 0, u = e >= 200 && e < 300 || 304 === e, i && (_ = W(p, w, i)), _ = X(p, _, w, u), u ? (p.ifModified && (b = w.getResponseHeader("Last-Modified"), b && (rt.lastModified[s] = b), (b = w.getResponseHeader("etag")) && (rt.etag[s] = b)), 204 === e || "HEAD" === p.type ? T = "nocontent" : 304 === e ? T = "notmodified" : (T = _.state, h = _.data, y = _.error, u = !y)) : (y = T, !e && T || (T = "error", e < 0 && (e = 0))), w.status = e, w.statusText = (n || T) + "", u ? g.resolveWith(d, [h, T, w]) : g.rejectWith(d, [w, T, y]), w.statusCode(v), v = void 0, c && f.trigger(u ? "ajaxSuccess" : "ajaxError", [w, p, u ? h : y]), m.fireWith(d, [w, T]), c && (f.trigger("ajaxComplete", [w, p]), --rt.active || rt.event.trigger("ajaxStop"))) } "object" == typeof e && (n = e, e = void 0), n = n || {}; var r, s, o, a, l, u, c, h, p = rt.ajaxSetup({}, n),
                d = p.context || p,
                f = p.context && (d.nodeType || d.jquery) ? rt(d) : rt.event,
                g = rt.Deferred(),
                m = rt.Callbacks("once memory"),
                v = p.statusCode || {},
                y = {},
                _ = {},
                x = 0,
                b = "canceled",
                w = { readyState: 0, getResponseHeader: function(t) { var e; if (2 === x) { if (!a)
                                for (a = {}; e = _e.exec(o);) a[e[1].toLowerCase()] = e[2];
                            e = a[t.toLowerCase()] } return null == e ? null : e }, getAllResponseHeaders: function() { return 2 === x ? o : null }, setRequestHeader: function(t, e) { var n = t.toLowerCase(); return x || (t = _[n] = _[n] || t, y[t] = e), this }, overrideMimeType: function(t) { return x || (p.mimeType = t), this }, statusCode: function(t) { var e; if (t)
                            if (x < 2)
                                for (e in t) v[e] = [v[e], t[e]];
                            else w.always(t[w.status]);
                        return this }, abort: function(t) { var e = t || b; return r && r.abort(e), i(0, e), this } }; if (g.promise(w).complete = m.add, w.success = w.done, w.error = w.fail, p.url = ((e || p.url || fe.href) + "").replace(ve, "").replace(we, fe.protocol + "//"), p.type = n.method || n.type || p.method || p.type, p.dataTypes = rt.trim(p.dataType || "*").toLowerCase().match(_t) || [""], null == p.crossDomain) { u = G.createElement("a"); try { u.href = p.url, u.href = u.href, p.crossDomain = ke.protocol + "//" + ke.host != u.protocol + "//" + u.host } catch (t) { p.crossDomain = !0 } } if (p.data && p.processData && "string" != typeof p.data && (p.data = rt.param(p.data, p.traditional)), I(Te, p, n, w), 2 === x) return w;
            c = rt.event && p.global, c && 0 == rt.active++ && rt.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !be.test(p.type), s = p.url, p.hasContent || (p.data && (s = p.url += (me.test(s) ? "&" : "?") + p.data, delete p.data), !1 === p.cache && (p.url = ye.test(s) ? s.replace(ye, "$1_=" + ge++) : s + (me.test(s) ? "&" : "?") + "_=" + ge++)), p.ifModified && (rt.lastModified[s] && w.setRequestHeader("If-Modified-Since", rt.lastModified[s]), rt.etag[s] && w.setRequestHeader("If-None-Match", rt.etag[s])), (p.data && p.hasContent && !1 !== p.contentType || n.contentType) && w.setRequestHeader("Content-Type", p.contentType), w.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Se + "; q=0.01" : "") : p.accepts["*"]); for (h in p.headers) w.setRequestHeader(h, p.headers[h]); if (p.beforeSend && (!1 === p.beforeSend.call(d, w, p) || 2 === x)) return w.abort();
            b = "abort"; for (h in { success: 1, error: 1, complete: 1 }) w[h](p[h]); if (r = I(Ce, p, n, w)) { if (w.readyState = 1, c && f.trigger("ajaxSend", [w, p]), 2 === x) return w;
                p.async && p.timeout > 0 && (l = t.setTimeout(function() { w.abort("timeout") }, p.timeout)); try { x = 1, r.send(y, i) } catch (t) { if (!(x < 2)) throw t;
                    i(-1, t) } } else i(-1, "No Transport"); return w }, getJSON: function(t, e, n) { return rt.get(t, e, n, "json") }, getScript: function(t, e) { return rt.get(t, void 0, e, "script") } }), rt.each(["get", "post"], function(t, e) { rt[e] = function(t, n, i, r) { return rt.isFunction(n) && (r = r || i, i = n, n = void 0), rt.ajax(rt.extend({ url: t, type: e, dataType: r, data: n, success: i }, rt.isPlainObject(t) && t)) } }), rt._evalUrl = function(t) { return rt.ajax({ url: t, type: "GET", dataType: "script", async: !1, global: !1, throws: !0 }) }, rt.fn.extend({ wrapAll: function(t) { var e; return rt.isFunction(t) ? this.each(function(e) { rt(this).wrapAll(t.call(this, e)) }) : (this[0] && (e = rt(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function() { for (var t = this; t.firstElementChild;) t = t.firstElementChild; return t }).append(this)), this) }, wrapInner: function(t) { return rt.isFunction(t) ? this.each(function(e) { rt(this).wrapInner(t.call(this, e)) }) : this.each(function() { var e = rt(this),
                    n = e.contents();
                n.length ? n.wrapAll(t) : e.append(t) }) }, wrap: function(t) { var e = rt.isFunction(t); return this.each(function(n) { rt(this).wrapAll(e ? t.call(this, n) : t) }) }, unwrap: function() { return this.parent().each(function() { rt.nodeName(this, "body") || rt(this).replaceWith(this.childNodes) }).end() } }), rt.expr.filters.hidden = function(t) { return !rt.expr.filters.visible(t) }, rt.expr.filters.visible = function(t) { return t.offsetWidth > 0 || t.offsetHeight > 0 || t.getClientRects().length > 0 };
    var Ae = /%20/g,
        Ee = /\[\]$/,
        Pe = /\r?\n/g,
        De = /^(?:submit|button|image|reset|file)$/i,
        Oe = /^(?:input|select|textarea|keygen)/i;
    rt.param = function(t, e) { var n, i = [],
            r = function(t, e) { e = rt.isFunction(e) ? e() : null == e ? "" : e, i[i.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e) }; if (void 0 === e && (e = rt.ajaxSettings && rt.ajaxSettings.traditional), rt.isArray(t) || t.jquery && !rt.isPlainObject(t)) rt.each(t, function() { r(this.name, this.value) });
        else
            for (n in t) U(n, t[n], e, r); return i.join("&").replace(Ae, "+") }, rt.fn.extend({ serialize: function() { return rt.param(this.serializeArray()) }, serializeArray: function() { return this.map(function() { var t = rt.prop(this, "elements"); return t ? rt.makeArray(t) : this }).filter(function() { var t = this.type; return this.name && !rt(this).is(":disabled") && Oe.test(this.nodeName) && !De.test(t) && (this.checked || !Ot.test(t)) }).map(function(t, e) { var n = rt(this).val(); return null == n ? null : rt.isArray(n) ? rt.map(n, function(t) { return { name: e.name, value: t.replace(Pe, "\r\n") } }) : { name: e.name, value: n.replace(Pe, "\r\n") } }).get() } }), rt.ajaxSettings.xhr = function() { try { return new t.XMLHttpRequest } catch (t) {} };
    var Fe = { 0: 200, 1223: 204 },
        Me = rt.ajaxSettings.xhr();
    it.cors = !!Me && "withCredentials" in Me, it.ajax = Me = !!Me, rt.ajaxTransport(function(e) {
        var n, i;
        if (it.cors || Me && !e.crossDomain) return {
            send: function(r, s) {
                var o, a = e.xhr();
                if (a.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                    for (o in e.xhrFields) a[o] = e.xhrFields[o];
                e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType), e.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest");
                for (o in r) a.setRequestHeader(o, r[o]);
                n = function(t) {
                    return function() { n && (n = i = a.onload = a.onerror = a.onabort = a.onreadystatechange = null, "abort" === t ? a.abort() : "error" === t ? "number" != typeof a.status ? s(0, "error") : s(a.status, a.statusText) : s(Fe[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? { binary: a.response } : { text: a.responseText }, a.getAllResponseHeaders())) }
                }, a.onload = n(), i = a.onerror = n("error"), void 0 !== a.onabort ? a.onabort = i : a.onreadystatechange = function() { 4 === a.readyState && t.setTimeout(function() { n && i() }) }, n = n("abort");
                try { a.send(e.hasContent && e.data || null) } catch (t) { if (n) throw t }
            },
            abort: function() { n && n() }
        }
    }), rt.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function(t) { return rt.globalEval(t), t } } }), rt.ajaxPrefilter("script", function(t) { void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET") }), rt.ajaxTransport("script", function(t) { if (t.crossDomain) { var e, n; return { send: function(i, r) { e = rt("<script>").prop({ charset: t.scriptCharset, src: t.url }).on("load error", n = function(t) { e.remove(), n = null, t && r("error" === t.type ? 404 : 200, t.type) }), G.head.appendChild(e[0]) }, abort: function() { n && n() } } } });
    var Ne = [],
        $e = /(=)\?(?=&|$)|\?\?/;
    rt.ajaxSetup({ jsonp: "callback", jsonpCallback: function() { var t = Ne.pop() || rt.expando + "_" + ge++; return this[t] = !0, t } }), rt.ajaxPrefilter("json jsonp", function(e, n, i) { var r, s, o, a = !1 !== e.jsonp && ($e.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && $e.test(e.data) && "data"); if (a || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = rt.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace($e, "$1" + r) : !1 !== e.jsonp && (e.url += (me.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function() { return o || rt.error(r + " was not called"), o[0] }, e.dataTypes[0] = "json", s = t[r], t[r] = function() { o = arguments }, i.always(function() { void 0 === s ? rt(t).removeProp(r) : t[r] = s, e[r] && (e.jsonpCallback = n.jsonpCallback, Ne.push(r)), o && rt.isFunction(s) && s(o[0]), o = s = void 0 }), "script" }), rt.parseHTML = function(t, e, n) { if (!t || "string" != typeof t) return null; "boolean" == typeof e && (n = e, e = !1), e = e || G; var i = dt.exec(t),
            r = !n && []; return i ? [e.createElement(i[1])] : (i = p([t], e, r), r && r.length && rt(r).remove(), rt.merge([], i.childNodes)) };
    var Re = rt.fn.load;
    rt.fn.load = function(t, e, n) { if ("string" != typeof t && Re) return Re.apply(this, arguments); var i, r, s, o = this,
            a = t.indexOf(" "); return a > -1 && (i = rt.trim(t.slice(a)), t = t.slice(0, a)), rt.isFunction(e) ? (n = e, e = void 0) : e && "object" == typeof e && (r = "POST"), o.length > 0 && rt.ajax({ url: t, type: r || "GET", dataType: "html", data: e }).done(function(t) { s = arguments, o.html(i ? rt("<div>").append(rt.parseHTML(t)).find(i) : t) }).always(n && function(t, e) { o.each(function() { n.apply(this, s || [t.responseText, e, t]) }) }), this }, rt.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) { rt.fn[e] = function(t) { return this.on(e, t) } }), rt.expr.filters.animated = function(t) { return rt.grep(rt.timers, function(e) { return t === e.elem }).length }, rt.offset = { setOffset: function(t, e, n) { var i, r, s, o, a, l, u, c = rt.css(t, "position"),
                h = rt(t),
                p = {}; "static" === c && (t.style.position = "relative"), a = h.offset(), s = rt.css(t, "top"), l = rt.css(t, "left"), u = ("absolute" === c || "fixed" === c) && (s + l).indexOf("auto") > -1, u ? (i = h.position(), o = i.top, r = i.left) : (o = parseFloat(s) || 0, r = parseFloat(l) || 0), rt.isFunction(e) && (e = e.call(t, n, rt.extend({}, a))), null != e.top && (p.top = e.top - a.top + o), null != e.left && (p.left = e.left - a.left + r), "using" in e ? e.using.call(t, p) : h.css(p) } }, rt.fn.extend({ offset: function(t) { if (arguments.length) return void 0 === t ? this : this.each(function(e) { rt.offset.setOffset(this, t, e) }); var e, n, i = this[0],
                r = { top: 0, left: 0 },
                s = i && i.ownerDocument; if (s) return e = s.documentElement, rt.contains(e, i) ? (r = i.getBoundingClientRect(), n = V(s), { top: r.top + n.pageYOffset - e.clientTop, left: r.left + n.pageXOffset - e.clientLeft }) : r }, position: function() { if (this[0]) { var t, e, n = this[0],
                    i = { top: 0, left: 0 }; return "fixed" === rt.css(n, "position") ? e = n.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), rt.nodeName(t[0], "html") || (i = t.offset()), i.top += rt.css(t[0], "borderTopWidth", !0), i.left += rt.css(t[0], "borderLeftWidth", !0)), { top: e.top - i.top - rt.css(n, "marginTop", !0), left: e.left - i.left - rt.css(n, "marginLeft", !0) } } }, offsetParent: function() { return this.map(function() { for (var t = this.offsetParent; t && "static" === rt.css(t, "position");) t = t.offsetParent; return t || Qt }) } }), rt.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(t, e) { var n = "pageYOffset" === e;
        rt.fn[t] = function(i) { return bt(this, function(t, i, r) { var s = V(t); if (void 0 === r) return s ? s[e] : t[i];
                s ? s.scrollTo(n ? s.pageXOffset : r, n ? r : s.pageYOffset) : t[i] = r }, t, i, arguments.length) } }), rt.each(["top", "left"], function(t, e) { rt.cssHooks[e] = A(it.pixelPosition, function(t, n) { if (n) return n = k(t, e), Vt.test(n) ? rt(t).position()[e] + "px" : n }) }), rt.each({ Height: "height", Width: "width" }, function(t, e) { rt.each({ padding: "inner" + t, content: e, "": "outer" + t }, function(n, i) { rt.fn[i] = function(i, r) { var s = arguments.length && (n || "boolean" != typeof i),
                    o = n || (!0 === i || !0 === r ? "margin" : "border"); return bt(this, function(e, n, i) { var r; return rt.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + t], r["scroll" + t], e.body["offset" + t], r["offset" + t], r["client" + t])) : void 0 === i ? rt.css(e, n, o) : rt.style(e, n, i, o) }, e, s ? i : void 0, s, null) } }) }), rt.fn.extend({ bind: function(t, e, n) { return this.on(t, null, e, n) }, unbind: function(t, e) { return this.off(t, null, e) }, delegate: function(t, e, n, i) { return this.on(e, t, n, i) }, undelegate: function(t, e, n) { return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n) }, size: function() { return this.length } }), rt.fn.andSelf = rt.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() { return rt });
    var je = t.jQuery,
        Le = t.$;
    return rt.noConflict = function(e) { return t.$ === rt && (t.$ = Le), e && t.jQuery === rt && (t.jQuery = je), rt }, e || (t.jQuery = t.$ = rt), rt
}),
/*!
 * Modernizr v2.8.3
 * www.modernizr.com
 *
 * Copyright (c) Faruk Ates, Paul Irish, Alex Sexton
 * Available under the BSD and MIT licenses: www.modernizr.com/license/
 */
window.Modernizr = function(t, e, n) {
        function i(t) { m.cssText = t }

        function r(t, e) { return i(x.join(t + ";") + (e || "")) }

        function s(t, e) { return typeof t === e }

        function o(t, e) { return !!~("" + t).indexOf(e) }

        function a(t, e) { for (var i in t) { var r = t[i]; if (!o(r, "-") && m[r] !== n) return "pfx" != e || r } return !1 }

        function l(t, e, i) { for (var r in t) { var o = e[t[r]]; if (o !== n) return !1 === i ? t[r] : s(o, "function") ? o.bind(i || e) : o } return !1 }

        function u(t, e, n) { var i = t.charAt(0).toUpperCase() + t.slice(1),
                r = (t + " " + w.join(i + " ") + i).split(" "); return s(e, "string") || s(e, "undefined") ? a(r, e) : (r = (t + " " + T.join(i + " ") + i).split(" "), l(r, e, n)) } var c, h, p = {},
            d = e.documentElement,
            f = "modernizr",
            g = e.createElement(f),
            m = g.style,
            v = e.createElement("input"),
            y = ":)",
            _ = {}.toString,
            x = " -webkit- -moz- -o- -ms- ".split(" "),
            b = "Webkit Moz O ms",
            w = b.split(" "),
            T = b.toLowerCase().split(" "),
            C = { svg: "http://www.w3.org/2000/svg" },
            S = {},
            k = {},
            A = {},
            E = [],
            P = E.slice,
            D = function(t, n, i, r) { var s, o, a, l, u = e.createElement("div"),
                    c = e.body,
                    h = c || e.createElement("body"); if (parseInt(i, 10))
                    for (; i--;) a = e.createElement("div"), a.id = r ? r[i] : f + (i + 1), u.appendChild(a); return s = ["&#173;", '<style id="s', f, '">', t, "</style>"].join(""), u.id = f, (c ? u : h).innerHTML += s, h.appendChild(u), c || (h.style.background = "", h.style.overflow = "hidden", l = d.style.overflow, d.style.overflow = "hidden", d.appendChild(h)), o = n(u, t), c ? u.parentNode.removeChild(u) : (h.parentNode.removeChild(h), d.style.overflow = l), !!o },
            O = function(e) { var n = t.matchMedia || t.msMatchMedia; if (n) return n(e) && n(e).matches || !1; var i; return D("@media " + e + " { #" + f + " { position: absolute; } }", function(e) { i = "absolute" == (t.getComputedStyle ? getComputedStyle(e, null) : e.currentStyle).position }), i },
            F = function() {
                function t(t, r) { r = r || e.createElement(i[t] || "div"), t = "on" + t; var o = t in r; return o || (r.setAttribute || (r = e.createElement("div")), r.setAttribute && r.removeAttribute && (r.setAttribute(t, ""), o = s(r[t], "function"), s(r[t], "undefined") || (r[t] = n), r.removeAttribute(t))), r = null, o } var i = { select: "input", change: "input", submit: "form", reset: "form", error: "img", load: "img", abort: "img" }; return t }(),
            M = {}.hasOwnProperty;
        h = s(M, "undefined") || s(M.call, "undefined") ? function(t, e) { return e in t && s(t.constructor.prototype[e], "undefined") } : function(t, e) { return M.call(t, e) }, Function.prototype.bind || (Function.prototype.bind = function(t) { var e = this; if ("function" != typeof e) throw new TypeError; var n = P.call(arguments, 1),
                i = function() { if (this instanceof i) { var r = function() {};
                        r.prototype = e.prototype; var s = new r,
                            o = e.apply(s, n.concat(P.call(arguments))); return Object(o) === o ? o : s } return e.apply(t, n.concat(P.call(arguments))) }; return i }), S.flexbox = function() { return u("flexWrap") }, S.flexboxlegacy = function() { return u("boxDirection") }, S.canvas = function() { var t = e.createElement("canvas"); return !(!t.getContext || !t.getContext("2d")) }, S.canvastext = function() { return !(!p.canvas || !s(e.createElement("canvas").getContext("2d").fillText, "function")) }, S.webgl = function() { return !!t.WebGLRenderingContext }, S.touch = function() { var n; return "ontouchstart" in t || t.DocumentTouch && e instanceof DocumentTouch ? n = !0 : D(["@media (", x.join("touch-enabled),("), f, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function(t) { n = 9 === t.offsetTop }), n }, S.geolocation = function() { return "geolocation" in navigator }, S.postmessage = function() { return !!t.postMessage }, S.websqldatabase = function() { return !!t.openDatabase }, S.indexedDB = function() { return !!u("indexedDB", t) }, S.hashchange = function() { return F("hashchange", t) && (e.documentMode === n || e.documentMode > 7) }, S.history = function() { return !(!t.history || !history.pushState) }, S.draganddrop = function() { var t = e.createElement("div"); return "draggable" in t || "ondragstart" in t && "ondrop" in t }, S.websockets = function() { return "WebSocket" in t || "MozWebSocket" in t }, S.rgba = function() { return i("background-color:rgba(150,255,150,.5)"), o(m.backgroundColor, "rgba") }, S.hsla = function() { return i("background-color:hsla(120,40%,100%,.5)"), o(m.backgroundColor, "rgba") || o(m.backgroundColor, "hsla") }, S.multiplebgs = function() { return i("background:url(https://),url(https://),red url(https://)"), /(url\s*\(.*?){3}/.test(m.background) }, S.backgroundsize = function() { return u("backgroundSize") }, S.borderimage = function() { return u("borderImage") }, S.borderradius = function() { return u("borderRadius") }, S.boxshadow = function() { return u("boxShadow") }, S.textshadow = function() { return "" === e.createElement("div").style.textShadow }, S.opacity = function() { return r("opacity:.55"), /^0.55$/.test(m.opacity) }, S.cssanimations = function() { return u("animationName") }, S.csscolumns = function() { return u("columnCount") }, S.cssgradients = function() { var t = "background-image:"; return i((t + "-webkit- ".split(" ").join("gradient(linear,left top,right bottom,from(#9f9),to(white));" + t) + x.join("linear-gradient(left top,#9f9, white);" + t)).slice(0, -t.length)), o(m.backgroundImage, "gradient") }, S.cssreflections = function() { return u("boxReflect") }, S.csstransforms = function() { return !!u("transform") }, S.csstransforms3d = function() { var t = !!u("perspective"); return t && "webkitPerspective" in d.style && D("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function(e, n) { t = 9 === e.offsetLeft && 3 === e.offsetHeight }), t }, S.csstransitions = function() { return u("transition") }, S.fontface = function() { var t; return D('@font-face {font-family:"font";src:url("https://")}', function(n, i) { var r = e.getElementById("smodernizr"),
                    s = r.sheet || r.styleSheet,
                    o = s ? s.cssRules && s.cssRules[0] ? s.cssRules[0].cssText : s.cssText || "" : "";
                t = /src/i.test(o) && 0 === o.indexOf(i.split(" ")[0]) }), t }, S.generatedcontent = function() { var t; return D(["#", f, "{font:0/0 a}#", f, ':after{content:"', y, '";visibility:hidden;font:3px/1 a}'].join(""), function(e) { t = e.offsetHeight >= 3 }), t }, S.video = function() { var t = e.createElement("video"),
                n = !1; try {
                (n = !!t.canPlayType) && (n = new Boolean(n), n.ogg = t.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), n.h264 = t.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), n.webm = t.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, "")) } catch (t) {} return n }, S.audio = function() { var t = e.createElement("audio"),
                n = !1; try {
                (n = !!t.canPlayType) && (n = new Boolean(n), n.ogg = t.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""), n.mp3 = t.canPlayType("audio/mpeg;").replace(/^no$/, ""), n.wav = t.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""), n.m4a = (t.canPlayType("audio/x-m4a;") || t.canPlayType("audio/aac;")).replace(/^no$/, "")) } catch (t) {} return n }, S.localstorage = function() { try { return localStorage.setItem(f, f), localStorage.removeItem(f), !0 } catch (t) { return !1 } }, S.sessionstorage = function() { try { return sessionStorage.setItem(f, f), sessionStorage.removeItem(f), !0 } catch (t) { return !1 } }, S.webworkers = function() { return !!t.Worker }, S.applicationcache = function() { return !!t.applicationCache }, S.svg = function() { return !!e.createElementNS && !!e.createElementNS(C.svg, "svg").createSVGRect }, S.inlinesvg = function() { var t = e.createElement("div"); return t.innerHTML = "<svg/>", (t.firstChild && t.firstChild.namespaceURI) == C.svg }, S.smil = function() { return !!e.createElementNS && /SVGAnimate/.test(_.call(e.createElementNS(C.svg, "animate"))) }, S.svgclippaths = function() { return !!e.createElementNS && /SVGClipPath/.test(_.call(e.createElementNS(C.svg, "clipPath"))) }; for (var N in S) h(S, N) && (c = N.toLowerCase(), p[c] = S[N](), E.push((p[c] ? "" : "no-") + c)); return p.input || function() { p.input = function(n) { for (var i = 0, r = n.length; i < r; i++) A[n[i]] = !!(n[i] in v); return A.list && (A.list = !(!e.createElement("datalist") || !t.HTMLDataListElement)), A }("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")), p.inputtypes = function(t) { for (var i, r, s, o = 0, a = t.length; o < a; o++) v.setAttribute("type", r = t[o]), i = "text" !== v.type, i && (v.value = y, v.style.cssText = "position:absolute;visibility:hidden;", /^range$/.test(r) && v.style.WebkitAppearance !== n ? (d.appendChild(v), s = e.defaultView, i = s.getComputedStyle && "textfield" !== s.getComputedStyle(v, null).WebkitAppearance && 0 !== v.offsetHeight, d.removeChild(v)) : /^(search|tel)$/.test(r) || (i = /^(url|email)$/.test(r) ? v.checkValidity && !1 === v.checkValidity() : v.value != y)), k[t[o]] = !!i; return k }("search tel url email datetime date month week time datetime-local number range color".split(" ")) }(), p.addTest = function(t, e) { if ("object" == typeof t)
                    for (var i in t) h(t, i) && p.addTest(i, t[i]);
                else { if (t = t.toLowerCase(), p[t] !== n) return p;
                    e = "function" == typeof e ? e() : e, d.className += " " + (e ? "" : "no-") + t, p[t] = e } return p }, i(""), g = v = null,
            function(t, e) {
                function n(t, e) { var n = t.createElement("p"),
                        i = t.getElementsByTagName("head")[0] || t.documentElement; return n.innerHTML = "x<style>" + e + "</style>", i.insertBefore(n.lastChild, i.firstChild) }

                function i() { var t = v.elements; return "string" == typeof t ? t.split(" ") : t }

                function r(t) { var e = m[t[f]]; return e || (e = {}, g++, t[f] = g, m[g] = e), e }

                function s(t, n, i) { if (n || (n = e), c) return n.createElement(t);
                    i || (i = r(n)); var s; return s = i.cache[t] ? i.cache[t].cloneNode() : d.test(t) ? (i.cache[t] = i.createElem(t)).cloneNode() : i.createElem(t), !s.canHaveChildren || p.test(t) || s.tagUrn ? s : i.frag.appendChild(s) }

                function o(t, n) { if (t || (t = e), c) return t.createDocumentFragment();
                    n = n || r(t); for (var s = n.frag.cloneNode(), o = 0, a = i(), l = a.length; o < l; o++) s.createElement(a[o]); return s }

                function a(t, e) { e.cache || (e.cache = {}, e.createElem = t.createElement, e.createFrag = t.createDocumentFragment, e.frag = e.createFrag()), t.createElement = function(n) { return v.shivMethods ? s(n, t, e) : e.createElem(n) }, t.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + i().join().replace(/[\w\-]+/g, function(t) { return e.createElem(t), e.frag.createElement(t), 'c("' + t + '")' }) + ");return n}")(v, e.frag) }

                function l(t) { t || (t = e); var i = r(t); return !v.shivCSS || u || i.hasCSS || (i.hasCSS = !!n(t, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), c || a(t, i), t } var u, c, h = t.html5 || {},
                    p = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
                    d = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
                    f = "_html5shiv",
                    g = 0,
                    m = {};! function() { try { var t = e.createElement("a");
                        t.innerHTML = "<xyz></xyz>", u = "hidden" in t, c = 1 == t.childNodes.length || function() { e.createElement("a"); var t = e.createDocumentFragment(); return void 0 === t.cloneNode || void 0 === t.createDocumentFragment || void 0 === t.createElement }() } catch (t) { u = !0, c = !0 } }(); var v = { elements: h.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video", version: "3.7.0", shivCSS: !1 !== h.shivCSS, supportsUnknownElements: c, shivMethods: !1 !== h.shivMethods, type: "default", shivDocument: l, createElement: s, createDocumentFragment: o };
                t.html5 = v, l(e) }(this, e), p._version = "2.8.3", p._prefixes = x, p._domPrefixes = T, p._cssomPrefixes = w, p.mq = O, p.hasEvent = F, p.testProp = function(t) { return a([t]) }, p.testAllProps = u, p.testStyles = D, p.prefixed = function(t, e, n) { return e ? u(t, e, n) : u(t, "pfx") }, d.className = d.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + " js " + E.join(" "), p }(this, this.document),
    /*!
     * Detectizr v2.2.0
     * http://barisaydinoglu.github.com/Detectizr/
     *
     * Written by Baris Aydinoglu (http://baris.aydinoglu.info) - Copyright 2012
     * Released under the MIT license
     *
     * Date: 2015-09-28T21:37Z
     */
    window.Detectizr = function(t, e, n, i) {
        function r(t, e) { var n, i, s; if (arguments.length > 2)
                for (n = 1, i = arguments.length; n < i; n += 1) r(t, arguments[n]);
            else
                for (s in e) e.hasOwnProperty(s) && (t[s] = e[s]); return t }

        function s(t) { return x.browser.userAgent.indexOf(t) > -1 }

        function o(t) { return t.test(x.browser.userAgent) }

        function a(t) { return t.exec(x.browser.userAgent) }

        function l(t) { return t.replace(/^\s+|\s+$/g, "") }

        function u(t) { return null === t || t === i ? "" : String(t).replace(/((\s|\-|\.)+[a-z0-9])/g, function(t) { return t.toUpperCase().replace(/(\s|\-|\.)/g, "") }) }

        function c(t, e) { var n = e || "",
                i = 1 === t.nodeType && (t.className ? (" " + t.className + " ").replace(S, " ") : ""); if (i) { for (; i.indexOf(" " + n + " ") >= 0;) i = i.replace(" " + n + " ", " ");
                t.className = e ? l(i) : "" } }

        function h(t, e, n) { t && (t = u(t), e && (e = u(e), p(t + e, !0), n && p(t + e + "_" + n, !0))) }

        function p(t, e) { t && b && (T.addAllFeaturesAsClass ? b.addTest(t, e) : (e = "function" == typeof e ? e() : e, e ? b.addTest(t, !0) : (delete b[t], c(k, t)))) }

        function d(t, e) { t.version = e; var n = e.split(".");
            n.length > 0 ? (n = n.reverse(), t.major = n.pop(), n.length > 0 ? (t.minor = n.pop(), n.length > 0 ? (n = n.reverse(), t.patch = n.join(".")) : t.patch = "0") : t.minor = "0") : t.major = "0" }

        function f() { t.clearTimeout(y), y = t.setTimeout(function() { _ = x.device.orientation, t.innerHeight > t.innerWidth ? x.device.orientation = "portrait" : x.device.orientation = "landscape", p(x.device.orientation, !0), _ !== x.device.orientation && p(_, !1) }, 10) }

        function g(t) { var n, i, r, s, o, a = e.plugins; for (s = a.length - 1; s >= 0; s--) { for (n = a[s], i = n.name + n.description, r = 0, o = t.length; o >= 0; o--) - 1 !== i.indexOf(t[o]) && (r += 1); if (r === t.length) return !0 } return !1 }

        function m(t) { var e; for (e = t.length - 1; e >= 0; e--) try { new ActiveXObject(t[e]) } catch (t) {}
            return !1 }

        function v(i) {
            var l, c, v, y, _, S, k;
            if (T = r({}, T, i || {}), T.detectDevice) {
                for (x.device = { type: "", model: "", orientation: "" }, v = x.device, o(/googletv|smarttv|smart-tv|internet.tv|netcast|nettv|appletv|boxee|kylo|roku|dlnadoc|roku|pov_tv|hbbtv|ce\-html/) ? (v.type = w[0], v.model = "smartTv") : o(/xbox|playstation.3|wii/) ? (v.type = w[0], v.model = "gameConsole") : o(/ip(a|ro)d/) ? (v.type = w[1], v.model = "ipad") : o(/tablet/) && !o(/rx-34/) || o(/folio/) ? (v.type = w[1], v.model = String(a(/playbook/) || "")) : o(/linux/) && o(/android/) && !o(/fennec|mobi|htc.magic|htcX06ht|nexus.one|sc-02b|fone.945/) ? (v.type = w[1], v.model = "android") : o(/kindle/) || o(/mac.os/) && o(/silk/) ? (v.type = w[1], v.model = "kindle") : o(/gt-p10|sc-01c|shw-m180s|sgh-t849|sch-i800|shw-m180l|sph-p100|sgh-i987|zt180|htc(.flyer|\_flyer)|sprint.atp51|viewpad7|pandigital(sprnova|nova)|ideos.s7|dell.streak.7|advent.vega|a101it|a70bht|mid7015|next2|nook/) || o(/mb511/) && o(/rutem/) ? (v.type = w[1], v.model = "android") : o(/bb10/) ? (v.type = w[1], v.model = "blackberry") : (v.model = a(/iphone|ipod|android|blackberry|opera mini|opera mobi|skyfire|maemo|windows phone|palm|iemobile|symbian|symbianos|fennec|j2me/), null !== v.model ? (v.type = w[2], v.model = String(v.model)) : (v.model = "", o(/bolt|fennec|iris|maemo|minimo|mobi|mowser|netfront|novarra|prism|rx-34|skyfire|tear|xv6875|xv6975|google.wireless.transcoder/) ? v.type = w[2] : o(/opera/) && o(/windows.nt.5/) && o(/htc|xda|mini|vario|samsung\-gt\-i8000|samsung\-sgh\-i9/) ? v.type = w[2] : o(/windows.(nt|xp|me|9)/) && !o(/phone/) || o(/win(9|.9|nt)/) || o(/\(windows 8\)/) ? v.type = w[3] : o(/macintosh|powerpc/) && !o(/silk/) ? (v.type = w[3], v.model = "mac") : o(/linux/) && o(/x11/) ? v.type = w[3] : o(/solaris|sunos|bsd/) ?
                        // Check if user agent is a Solaris, SunOS, BSD Desktop
                        v.type = w[3] : o(/cros/) ? v.type = w[3] : o(/bot|crawler|spider|yahoo|ia_archiver|covario-ids|findlinks|dataparksearch|larbin|mediapartners-google|ng-search|snappy|teoma|jeeves|tineye/) && !o(/mobile/) ? (v.type = w[3], v.model = "crawler") : v.type = w[2])), l = 0, c = w.length; l < c; l += 1) p(w[l], v.type === w[l]);
                T.detectDeviceModel && p(u(v.model), !0)
            }
            if (T.detectScreen && (v.screen = {}, b && b.mq && (b.mq("only screen and (max-width: 240px)") ? (v.screen.size = "veryVerySmall", p("veryVerySmallScreen", !0)) : b.mq("only screen and (max-width: 320px)") ? (v.screen.size = "verySmall", p("verySmallScreen", !0)) : b.mq("only screen and (max-width: 480px)") && (v.screen.size = "small", p("smallScreen", !0)), v.type !== w[1] && v.type !== w[2] || b.mq("only screen and (-moz-min-device-pixel-ratio: 1.3), only screen and (-o-min-device-pixel-ratio: 2.6/2), only screen and (-webkit-min-device-pixel-ratio: 1.3), only screen  and (min-device-pixel-ratio: 1.3), only screen and (min-resolution: 1.3dppx)") && (v.screen.resolution = "high", p("highresolution", !0))), v.type === w[1] || v.type === w[2] ? (t.onresize = function(t) { f(t) }, f()) : (v.orientation = "landscape", p(v.orientation, !0))), T.detectOS && (x.os = {}, y = x.os, "" !== v.model && ("ipad" === v.model || "iphone" === v.model || "ipod" === v.model ? (y.name = "ios", d(y, (o(/os\s([\d_]+)/) ? RegExp.$1 : "").replace(/_/g, "."))) : "android" === v.model ? (y.name = "android", d(y, o(/android\s([\d\.]+)/) ? RegExp.$1 : "")) : "blackberry" === v.model ? (y.name = "blackberry", d(y, o(/version\/([^\s]+)/) ? RegExp.$1 : "")) : "playbook" === v.model && (y.name = "blackberry", d(y, o(/os ([^\s]+)/) ? RegExp.$1.replace(";", "") : ""))), y.name || (s("win") || s("16bit") ? (y.name = "windows", s("windows nt 10") ? d(y, "10") : s("windows nt 6.3") ? d(y, "8.1") : s("windows nt 6.2") || o(/\(windows 8\)/) ? d(y, "8") : s("windows nt 6.1") ? d(y, "7") : s("windows nt 6.0") ? d(y, "vista") : s("windows nt 5.2") || s("windows nt 5.1") || s("windows xp") ? d(y, "xp") : s("windows nt 5.0") || s("windows 2000") ? d(y, "2k") : s("winnt") || s("windows nt") ? d(y, "nt") : s("win98") || s("windows 98") ? d(y, "98") : (s("win95") || s("windows 95")) && d(y, "95")) : s("mac") || s("darwin") ? (y.name = "mac os", s("68k") || s("68000") ? d(y, "68k") : s("ppc") || s("powerpc") ? d(y, "ppc") : s("os x") && d(y, (o(/os\sx\s([\d_]+)/) ? RegExp.$1 : "os x").replace(/_/g, "."))) : s("webtv") ? y.name = "webtv" : s("x11") || s("inux") ? y.name = "linux" : s("sunos") ? y.name = "sun" : s("irix") ? y.name = "irix" : s("freebsd") ? y.name = "freebsd" : s("bsd") && (y.name = "bsd")), y.name && (p(y.name, !0), y.major && (h(y.name, y.major), y.minor && h(y.name, y.major, y.minor))), o(/\sx64|\sx86|\swin64|\swow64|\samd64/) ? y.addressRegisterSize = "64bit" : y.addressRegisterSize = "32bit", p(y.addressRegisterSize, !0)), T.detectBrowser && (_ = x.browser, o(/opera|webtv/) || !o(/msie\s([\d\w\.]+)/) && !s("trident") ? s("firefox") ? (_.engine = "gecko", _.name = "firefox", d(_, o(/firefox\/([\d\w\.]+)/) ? RegExp.$1 : "")) : s("gecko/") ? _.engine = "gecko" : s("opera") ? (_.name = "opera", _.engine = "presto", d(_, o(/version\/([\d\.]+)/) ? RegExp.$1 : o(/opera(\s|\/)([\d\.]+)/) ? RegExp.$2 : "")) : s("konqueror") ? _.name = "konqueror" : s("edge") ? (_.engine = "webkit", _.name = "edge", d(_, o(/edge\/([\d\.]+)/) ? RegExp.$1 : "")) : s("chrome") ? (_.engine = "webkit", _.name = "chrome", d(_, o(/chrome\/([\d\.]+)/) ? RegExp.$1 : "")) : s("iron") ? (_.engine = "webkit", _.name = "iron") : s("crios") ? (_.name = "chrome", _.engine = "webkit", d(_, o(/crios\/([\d\.]+)/) ? RegExp.$1 : "")) : s("applewebkit/") ? (_.name = "safari", _.engine = "webkit", d(_, o(/version\/([\d\.]+)/) ? RegExp.$1 : "")) : s("mozilla/") && (_.engine = "gecko") : (_.engine = "trident", _.name = "ie", !t.addEventListener && n.documentMode && 7 === n.documentMode ? d(_, "8.compat") : o(/trident.*rv[ :](\d+)\./) ? d(_, RegExp.$1) : d(_, o(/trident\/4\.0/) ? "8" : RegExp.$1)), _.name && (p(_.name, !0), _.major && (h(_.name, _.major), _.minor && h(_.name, _.major, _.minor))), p(_.engine, !0), _.language = e.userLanguage || e.language, p(_.language, !0)), T.detectPlugins) { for (_.plugins = [], l = C.length - 1; l >= 0; l--) S = C[l], k = !1, t.ActiveXObject ? k = m(S.progIds) : e.plugins && (k = g(S.substrs)), k && (_.plugins.push(S.name), p(S.name, !0));
                e.javaEnabled() && (_.plugins.push("java"), p("java", !0)) }
        }
        var y, _, x = {},
            b = t.Modernizr,
            w = ["tv", "tablet", "mobile", "desktop"],
            T = { addAllFeaturesAsClass: !1, detectDevice: !0, detectDeviceModel: !0, detectScreen: !0, detectOS: !0, detectBrowser: !0, detectPlugins: !0 },
            C = [{ name: "adobereader", substrs: ["Adobe", "Acrobat"], progIds: ["AcroPDF.PDF", "PDF.PDFCtrl.5"] }, { name: "flash", substrs: ["Shockwave Flash"], progIds: ["ShockwaveFlash.ShockwaveFlash.1"] }, { name: "wmplayer", substrs: ["Windows Media"], progIds: ["wmplayer.ocx"] }, { name: "silverlight", substrs: ["Silverlight"], progIds: ["AgControl.AgControl"] }, { name: "quicktime", substrs: ["QuickTime"], progIds: ["QuickTime.QuickTime"] }],
            S = /[\t\r\n]/g,
            k = n.documentElement;
        return x.detect = function(t) { return v(t) }, x.init = function() { x !== i && (x.browser = { userAgent: (e.userAgent || e.vendor || t.opera).toLowerCase() }, x.detect()) }, x.init(), x
    }(this, this.navigator, this.document),
    /*!
     * jQuery throttle / debounce - v1.1 - 3/7/2010
     * http://benalman.com/projects/jquery-throttle-debounce-plugin/
     * 
     * Copyright (c) 2010 "Cowboy" Ben Alman
     * Dual licensed under the MIT and GPL licenses.
     * http://benalman.com/about/license/
     */
    // About: License
    // 
    // Copyright (c) 2010 "Cowboy" Ben Alman,
    // Dual licensed under the MIT and GPL licenses.
    // http://benalman.com/about/license/
    // 
    // About: Examples
    // 
    // These working examples, complete with fully commented code, illustrate a few
    // ways in which this plugin can be used.
    // 
    // Throttle - http://benalman.com/code/projects/jquery-throttle-debounce/examples/throttle/
    // Debounce - http://benalman.com/code/projects/jquery-throttle-debounce/examples/debounce/
    // 
    // About: Support and Testing
    // 
    // Information about what version or versions of jQuery this plugin has been
    // tested with, what browsers it has been tested in, and where the unit tests
    // reside (so you can test it yourself).
    // 
    // jQuery Versions - none, 1.3.2, 1.4.2
    // Browsers Tested - Internet Explorer 6-8, Firefox 2-3.6, Safari 3-4, Chrome 4-5, Opera 9.6-10.1.
    // Unit Tests      - http://benalman.com/code/projects/jquery-throttle-debounce/unit/
    // 
    // About: Release History
    // 
    // 1.1 - (3/7/2010) Fixed a bug in <jQuery.throttle> where trailing callbacks
    //       executed later than they should. Reworked a fair amount of internal
    //       logic as well.
    // 1.0 - (3/6/2010) Initial release as a stand-alone project. Migrated over
    //       from jquery-misc repo v0.4 to jquery-throttle repo v1.0, added the
    //       no_trailing throttle parameter and debounce functionality.
    // 
    // Topic: Note for non-jQuery users
    // 
    // jQuery isn't actually required for this plugin, because nothing internal
    // uses any jQuery methods or properties. jQuery is just used as a namespace
    // under which these methods can exist.
    // 
    // Since jQuery isn't actually required for this plugin, if jQuery doesn't exist
    // when this plugin is loaded, the method described below will be created in
    // the `Cowboy` namespace. Usage will be exactly the same, but instead of
    // $.method() or jQuery.method(), you'll need to use Cowboy.method().
    function(t, e) { "$:nomunge"; var n, i = t.jQuery || t.Cowboy || (t.Cowboy = {});
        i.throttle = n = function(t, n, r, s) {
            function o() {
                function i() { l = +new Date, r.apply(u, h) }

                function o() { a = e } var u = this,
                    c = +new Date - l,
                    h = arguments;
                s && !a && i(), a && clearTimeout(a), s === e && c > t ? i() : !0 !== n && (a = setTimeout(s ? o : i, s === e ? t - c : t)) } var a, l = 0; return "boolean" != typeof n && (s = r, r = n, n = e), i.guid && (o.guid = r.guid = r.guid || i.guid++), o }, i.debounce = function(t, i, r) { return r === e ? n(t, i, !1) : n(t, r, !1 !== i) } }(this),
    // Copyright (c) 2013 – 2017 Adobe Systems Incorporated. All rights reserved.
    //
    // Licensed under the Apache License, Version 2.0 (the "License");
    // you may not use this file except in compliance with the License.
    // You may obtain a copy of the License at
    //
    // http://www.apache.org/licenses/LICENSE-2.0
    //
    // Unless required by applicable law or agreed to in writing, software
    // distributed under the License is distributed on an "AS IS" BASIS,
    // WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    // See the License for the specific language governing permissions and
    // limitations under the License.
    //
    // build: 2017-02-07
    function(t) { var e, n, i = "0.5.0",
            r = "hasOwnProperty",
            s = /[\.\/]/,
            o = /\s*,\s*/,
            a = function(t, e) { return t - e },
            l = { n: {} },
            u = function() { for (var t = 0, e = this.length; e > t; t++)
                    if (void 0 !== this[t]) return this[t] },
            c = function() { for (var t = this.length; --t;)
                    if (void 0 !== this[t]) return this[t] },
            h = Object.prototype.toString,
            p = String,
            d = Array.isArray || function(t) { return t instanceof Array || "[object Array]" == h.call(t) };
        eve = function(t, i) { var r, s = n,
                o = Array.prototype.slice.call(arguments, 2),
                l = eve.listeners(t),
                h = 0,
                p = [],
                d = {},
                f = [],
                g = e;
            f.firstDefined = u, f.lastDefined = c, e = t, n = 0; for (var m = 0, v = l.length; v > m; m++) "zIndex" in l[m] && (p.push(l[m].zIndex), l[m].zIndex < 0 && (d[l[m].zIndex] = l[m])); for (p.sort(a); p[h] < 0;)
                if (r = d[p[h++]], f.push(r.apply(i, o)), n) return n = s, f;
            for (m = 0; v > m; m++)
                if ("zIndex" in (r = l[m]))
                    if (r.zIndex == p[h]) { if (f.push(r.apply(i, o)), n) break;
                        do { if (h++, r = d[p[h]], r && f.push(r.apply(i, o)), n) break } while (r) } else d[r.zIndex] = r;
            else if (f.push(r.apply(i, o)), n) break; return n = s, e = g, f }, eve._events = l, eve.listeners = function(t) { var e, n, i, r, o, a, u, c, h = d(t) ? t : t.split(s),
                p = l,
                f = [p],
                g = []; for (r = 0, o = h.length; o > r; r++) { for (c = [], a = 0, u = f.length; u > a; a++)
                    for (p = f[a].n, n = [p[h[r]], p["*"]], i = 2; i--;)(e = n[i]) && (c.push(e), g = g.concat(e.f || []));
                f = c } return g }, eve.separator = function(t) { t ? (t = p(t).replace(/(?=[\.\^\]\[\-])/g, "\\"), t = "[" + t + "]", s = new RegExp(t)) : s = /[\.\/]/ }, eve.on = function(t, e) { if ("function" != typeof e) return function() {}; for (var n = d(t) ? d(t[0]) ? t : [t] : p(t).split(o), i = 0, r = n.length; r > i; i++) ! function(t) { for (var n, i = d(t) ? t : p(t).split(s), r = l, o = 0, a = i.length; a > o; o++) r = r.n, r = r.hasOwnProperty(i[o]) && r[i[o]] || (r[i[o]] = { n: {} }); for (r.f = r.f || [], o = 0, a = r.f.length; a > o; o++)
                    if (r.f[o] == e) { n = !0; break }!n && r.f.push(e) }(n[i]); return function(t) {+t == +t && (e.zIndex = +t) } }, eve.f = function(t) { var e = [].slice.call(arguments, 1); return function() { eve.apply(null, [t, null].concat(e).concat([].slice.call(arguments, 0))) } }, eve.stop = function() { n = 1 }, eve.nt = function(t) { var n = d(e) ? e.join(".") : e; return t ? new RegExp("(?:\\.|\\/|^)" + t + "(?:\\.|\\/|$)").test(n) : n }, eve.nts = function() { return d(e) ? e : e.split(s) }, eve.off = eve.unbind = function(t, e) { if (!t) return void(eve._events = l = { n: {} }); var n = d(t) ? d(t[0]) ? t : [t] : p(t).split(o); if (n.length > 1)
                for (var i = 0, a = n.length; a > i; i++) eve.off(n[i], e);
            else { n = d(t) ? t : p(t).split(s); var u, c, h, i, a, f, g, m = [l],
                    v = []; for (i = 0, a = n.length; a > i; i++)
                    for (f = 0; f < m.length; f += h.length - 2) { if (h = [f, 1], u = m[f].n, "*" != n[i]) u[n[i]] && (h.push(u[n[i]]), v.unshift({ n: u, name: n[i] }));
                        else
                            for (c in u) u[r](c) && (h.push(u[c]), v.unshift({ n: u, name: c }));
                        m.splice.apply(m, h) }
                for (i = 0, a = m.length; a > i; i++)
                    for (u = m[i]; u.n;) { if (e) { if (u.f) { for (f = 0, g = u.f.length; g > f; f++)
                                    if (u.f[f] == e) { u.f.splice(f, 1); break }!u.f.length && delete u.f } for (c in u.n)
                                if (u.n[r](c) && u.n[c].f) { var y = u.n[c].f; for (f = 0, g = y.length; g > f; f++)
                                        if (y[f] == e) { y.splice(f, 1); break }!y.length && delete u.n[c].f } } else { delete u.f; for (c in u.n) u.n[r](c) && u.n[c].f && delete u.n[c].f }
                        u = u.n }
                t: for (i = 0, a = v.length; a > i; i++) { u = v[i]; for (c in u.n[u.name].f) continue t; for (c in u.n[u.name].n) continue t;
                    delete u.n[u.name] } } }, eve.once = function(t, e) { var n = function() { return eve.off(t, n), e.apply(this, arguments) }; return eve.on(t, n) }, eve.version = i, eve.toString = function() { return "You are running Eve " + i }, "undefined" != typeof module && module.exports ? module.exports = eve : "function" == typeof define && define.amd ? define("eve", [], function() { return eve }) : t.eve = eve }(this),
    function(t, e) { if ("function" == typeof define && define.amd) define(["eve"], function(n) { return e(t, n) });
        else if ("undefined" != typeof exports) { var n = require("eve");
            module.exports = e(t, n) } else e(t, t.eve) }(window || this, function(t, e) {
        var n = function(e) { var n, i = {},
                    r = t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || t.msRequestAnimationFrame || function(t) { return setTimeout(t, 16, (new Date).getTime()), !0 },
                    s = Array.isArray || function(t) { return t instanceof Array || "[object Array]" == Object.prototype.toString.call(t) },
                    o = 0,
                    a = "M" + (+new Date).toString(36),
                    l = function() { return a + (o++).toString(36) },
                    u = Date.now || function() { return +new Date },
                    c = function(t) { var e = this; if (null == t) return e.s; var n = e.s - t;
                        e.b += e.dur * n, e.B += e.dur * n, e.s = t },
                    h = function(t) { var e = this; return null == t ? e.spd : void(e.spd = t) },
                    p = function(t) { var e = this; return null == t ? e.dur : (e.s = e.s * t / e.dur, void(e.dur = t)) },
                    d = function() { var t = this;
                        delete i[t.id], t.update(), e("mina.stop." + t.id, t) },
                    f = function() { var t = this;
                        t.pdif || (delete i[t.id], t.update(), t.pdif = t.get() - t.b) },
                    g = function() { var t = this;
                        t.pdif && (t.b = t.get() - t.pdif, delete t.pdif, i[t.id] = t, v()) },
                    m = function() { var t, e = this; if (s(e.start)) { t = []; for (var n = 0, i = e.start.length; i > n; n++) t[n] = +e.start[n] + (e.end[n] - e.start[n]) * e.easing(e.s) } else t = +e.start + (e.end - e.start) * e.easing(e.s);
                        e.set(t) },
                    v = function(t) { if (!t) return void(n || (n = r(v))); var s = 0; for (var o in i)
                            if (i.hasOwnProperty(o)) { var a = i[o],
                                    l = a.get();
                                s++, a.s = (l - a.b) / (a.dur / a.spd), a.s >= 1 && (delete i[o], a.s = 1, s--, function(t) { setTimeout(function() { e("mina.finish." + t.id, t) }) }(a)), a.update() }
                        n = !!s && r(v) },
                    y = function(t, e, n, r, s, o, a) { var u = { id: l(), start: t, end: e, b: n, s: 0, dur: r - n, spd: 1, get: s, set: o, easing: a || y.linear, status: c, speed: h, duration: p, stop: d, pause: f, resume: g, update: m };
                        i[u.id] = u; var _, x = 0; for (_ in i)
                            if (i.hasOwnProperty(_) && 2 == ++x) break;
                        return 1 == x && v(), u }; return y.time = u, y.getById = function(t) { return i[t] || null }, y.linear = function(t) { return t }, y.easeout = function(t) { return Math.pow(t, 1.7) }, y.easein = function(t) { return Math.pow(t, .48) }, y.easeinout = function(t) { if (1 == t) return 1; if (0 == t) return 0; var e = .48 - t / 1.04,
                        n = Math.sqrt(.1734 + e * e),
                        i = n - e,
                        r = Math.pow(Math.abs(i), 1 / 3) * (0 > i ? -1 : 1),
                        s = -n - e,
                        o = Math.pow(Math.abs(s), 1 / 3) * (0 > s ? -1 : 1),
                        a = r + o + .5; return 3 * (1 - a) * a * a + a * a * a }, y.backin = function(t) { if (1 == t) return 1; var e = 1.70158; return t * t * ((e + 1) * t - e) }, y.backout = function(t) { if (0 == t) return 0;
                    t -= 1; var e = 1.70158; return t * t * ((e + 1) * t + e) + 1 }, y.elastic = function(t) { return t == !!t ? t : Math.pow(2, -10 * t) * Math.sin((t - .075) * (2 * Math.PI) / .3) + 1 }, y.bounce = function(t) { var e, n = 7.5625,
                        i = 2.75; return 1 / i > t ? e = n * t * t : 2 / i > t ? (t -= 1.5 / i, e = n * t * t + .75) : 2.5 / i > t ? (t -= 2.25 / i, e = n * t * t + .9375) : (t -= 2.625 / i, e = n * t * t + .984375), e }, t.mina = y, y }(void 0 === e ? function() {} : e),
            i = function(t) {
                function n(t, e) { if (t) { if (t.nodeType) return w(t); if (r(t, "array") && n.set) return n.set.apply(n, t); if (t instanceof y) return t; if (null == e) try { return t = C.doc.querySelector(String(t)), w(t) } catch (t) { return null } } return t = null == t ? "100%" : t, e = null == e ? "100%" : e, new b(t, e) }

                function i(t, e) { if (e) { if ("#text" == t && (t = C.doc.createTextNode(e.text || e["#text"] || "")), "#comment" == t && (t = C.doc.createComment(e.text || e["#text"] || "")), "string" == typeof t && (t = i(t)), "string" == typeof e) return 1 == t.nodeType ? "xlink:" == e.substring(0, 6) ? t.getAttributeNS(X, e.substring(6)) : "xml:" == e.substring(0, 4) ? t.getAttributeNS(U, e.substring(4)) : t.getAttribute(e) : "text" == e ? t.nodeValue : null; if (1 == t.nodeType) { for (var n in e)
                                if (e[S](n)) { var r = k(e[n]);
                                    r ? "xlink:" == n.substring(0, 6) ? t.setAttributeNS(X, n.substring(6), r) : "xml:" == n.substring(0, 4) ? t.setAttributeNS(U, n.substring(4), r) : t.setAttribute(n, r) : t.removeAttribute(n) } } else "text" in e && (t.nodeValue = e.text) } else t = C.doc.createElementNS(U, t); return t }

                function r(t, e) { return e = k.prototype.toLowerCase.call(e), "finite" == e ? isFinite(t) : !("array" != e || !(t instanceof Array || Array.isArray && Array.isArray(t))) || ("null" == e && null === t || e == typeof t && null !== t || "object" == e && t === Object(t) || $.call(t).slice(8, -1).toLowerCase() == e) }

                function s(t) { if ("function" == typeof t || Object(t) !== t) return t; var e = new t.constructor; for (var n in t) t[S](n) && (e[n] = s(t[n])); return e }

                function o(t, e) { for (var n = 0, i = t.length; i > n; n++)
                        if (t[n] === e) return t.push(t.splice(n, 1)[0]) }

                function a(t, e, n) {
                    function i() { var r = Array.prototype.slice.call(arguments, 0),
                            s = r.join("␀"),
                            a = i.cache = i.cache || {},
                            l = i.count = i.count || []; return a[S](s) ? (o(l, s), n ? n(a[s]) : a[s]) : (l.length >= 1e3 && delete a[l.shift()], l.push(s), a[s] = t.apply(e, r), n ? n(a[s]) : a[s]) } return i }

                function l(t, e, n, i, r, s) { if (null == r) { var o = t - n,
                            a = e - i; return o || a ? (180 + 180 * P.atan2(-a, -o) / M + 360) % 360 : 0 } return l(t, e, r, s) - l(n, i, r, s) }

                function u(t) { return t % 360 * M / 180 }

                function c(t) { return 180 * t / M % 360 }

                function h(t) { var e = []; return t = t.replace(/(?:^|\s)(\w+)\(([^)]+)\)/g, function(t, n, i) { return i = i.split(/\s*,\s*|\s+/), "rotate" == n && 1 == i.length && i.push(0, 0), "scale" == n && (i.length > 2 ? i = i.slice(0, 2) : 2 == i.length && i.push(0, 0), 1 == i.length && i.push(i[0], 0, 0)), "skewX" == n ? e.push(["m", 1, 0, P.tan(u(i[0])), 1, 0, 0]) : "skewY" == n ? e.push(["m", 1, P.tan(u(i[0])), 0, 1, 0, 0]) : e.push([n.charAt(0)].concat(i)), t }), e }

                function p(t, e) { var i = tt(t),
                        r = new n.Matrix; if (i)
                        for (var s = 0, o = i.length; o > s; s++) { var a, l, u, c, h, p = i[s],
                                d = p.length,
                                f = k(p[0]).toLowerCase(),
                                g = p[0] != f,
                                m = g ? r.invert() : 0; "t" == f && 2 == d ? r.translate(p[1], 0) : "t" == f && 3 == d ? g ? (a = m.x(0, 0), l = m.y(0, 0), u = m.x(p[1], p[2]), c = m.y(p[1], p[2]), r.translate(u - a, c - l)) : r.translate(p[1], p[2]) : "r" == f ? 2 == d ? (h = h || e, r.rotate(p[1], h.x + h.width / 2, h.y + h.height / 2)) : 4 == d && (g ? (u = m.x(p[2], p[3]), c = m.y(p[2], p[3]), r.rotate(p[1], u, c)) : r.rotate(p[1], p[2], p[3])) : "s" == f ? 2 == d || 3 == d ? (h = h || e, r.scale(p[1], p[d - 1], h.x + h.width / 2, h.y + h.height / 2)) : 4 == d ? g ? (u = m.x(p[2], p[3]), c = m.y(p[2], p[3]), r.scale(p[1], p[1], u, c)) : r.scale(p[1], p[1], p[2], p[3]) : 5 == d && (g ? (u = m.x(p[3], p[4]), c = m.y(p[3], p[4]), r.scale(p[1], p[2], u, c)) : r.scale(p[1], p[2], p[3], p[4])) : "m" == f && 7 == d && r.add(p[1], p[2], p[3], p[4], p[5], p[6]) }
                    return r }

                function d(t) { var e = t.node.ownerSVGElement && w(t.node.ownerSVGElement) || t.node.parentNode && w(t.node.parentNode) || n.select("svg") || n(0, 0),
                        i = e.select("defs"),
                        r = null != i && i.node; return r || (r = x("defs", e.node).node), r }

                function f(t) { return t.node.ownerSVGElement && w(t.node.ownerSVGElement) || n.select("svg") }

                function m(t, e, n) {
                    function r(t) { if (null == t) return N; if (t == +t) return t;
                        i(u, { width: t }); try { return u.getBBox().width } catch (t) { return 0 } }

                    function s(t) { if (null == t) return N; if (t == +t) return t;
                        i(u, { height: t }); try { return u.getBBox().height } catch (t) { return 0 } }

                    function o(i, r) { null == e ? l[i] = r(t.attr(i) || 0) : i == e && (l = r(null == n ? t.attr(i) || 0 : n)) } var a = f(t).node,
                        l = {},
                        u = a.querySelector(".svg---mgr"); switch (u || (u = i("rect"), i(u, { x: -9e9, y: -9e9, width: 10, height: 10, class: "svg---mgr", fill: "none" }), a.appendChild(u)), t.type) {
                        case "rect":
                            o("rx", r), o("ry", s);
                        case "image":
                            o("width", r), o("height", s);
                        case "text":
                            o("x", r), o("y", s); break;
                        case "circle":
                            o("cx", r), o("cy", s), o("r", r); break;
                        case "ellipse":
                            o("cx", r), o("cy", s), o("rx", r), o("ry", s); break;
                        case "line":
                            o("x1", r), o("x2", r), o("y1", s), o("y2", s); break;
                        case "marker":
                            o("refX", r), o("markerWidth", r), o("refY", s), o("markerHeight", s); break;
                        case "radialGradient":
                            o("fx", r), o("fy", s); break;
                        case "tspan":
                            o("dx", r), o("dy", s); break;
                        default:
                            o(e, r) } return a.removeChild(u), l }

                function v(t) { r(t, "array") || (t = Array.prototype.slice.call(arguments, 0)); for (var e = 0, n = 0, i = this.node; this[e];) delete this[e++]; for (e = 0; e < t.length; e++) "set" == t[e].type ? t[e].forEach(function(t) { i.appendChild(t.node) }) : i.appendChild(t[e].node); var s = i.childNodes; for (e = 0; e < s.length; e++) this[n++] = w(s[e]); return this }

                function y(t) { if (t.snap in V) return V[t.snap]; var e; try { e = t.ownerSVGElement } catch (t) {}
                    this.node = t, e && (this.paper = new b(e)), this.type = t.tagName || t.nodeName; var n = this.id = W(this); if (this.anims = {}, this._ = { transform: [] }, t.snap = n, V[n] = this, "g" == this.type && (this.add = v), this.type in { g: 1, mask: 1, pattern: 1, symbol: 1 })
                        for (var i in b.prototype) b.prototype[S](i) && (this[i] = b.prototype[i]) }

                function _(t) { this.node = t }

                function x(t, e) { var n = i(t); return e.appendChild(n), w(n) }

                function b(t, e) { var n, r, s, o = b.prototype; if (t && t.tagName && "svg" == t.tagName.toLowerCase()) { if (t.snap in V) return V[t.snap]; var a = t.ownerDocument;
                        n = new y(t), r = t.getElementsByTagName("desc")[0], s = t.getElementsByTagName("defs")[0], r || (r = i("desc"), r.appendChild(a.createTextNode("Created with Snap")), n.node.appendChild(r)), s || (s = i("defs"), n.node.appendChild(s)), n.defs = s; for (var l in o) o[S](l) && (n[l] = o[l]);
                        n.paper = n.root = n } else n = x("svg", C.doc.body), i(n.node, { height: e, version: 1.1, width: t, xmlns: U }); return n }

                function w(t) { return t ? t instanceof y || t instanceof _ ? t : t.tagName && "svg" == t.tagName.toLowerCase() ? new b(t) : t.tagName && "object" == t.tagName.toLowerCase() && "image/svg+xml" == t.type ? new b(t.contentDocument.getElementsByTagName("svg")[0]) : new y(t) : t }

                function T(t, e) { for (var n = 0, i = t.length; i > n; n++) { var r = { type: t[n].type, attr: t[n].attr() },
                            s = t[n].children();
                        e.push(r), s.length && T(s, r.childNodes = []) } }
                n.version = "0.5.1", n.toString = function() { return "Snap v" + this.version }, n._ = {}; var C = { win: t.window, doc: t.window.document };
                n._.glob = C; var S = "hasOwnProperty",
                    k = String,
                    A = parseFloat,
                    E = parseInt,
                    P = Math,
                    D = P.max,
                    O = P.min,
                    F = P.abs,
                    M = (P.pow, P.PI),
                    N = (P.round, ""),
                    $ = Object.prototype.toString,
                    R = /^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?%?)\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?%?)\s*\))\s*$/i,
                    j = (n._.separator = /[,\s]+/, /[\s]*,[\s]*/),
                    L = { hs: 1, rg: 1 },
                    z = /([a-z])[\s,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\s]*,?[\s]*)+)/gi,
                    B = /([rstm])[\s,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\s]*,?[\s]*)+)/gi,
                    q = /(-?\d*\.?\d*(?:e[\-+]?\d+)?)[\s]*,?[\s]*/gi,
                    I = 0,
                    H = "S" + (+new Date).toString(36),
                    W = function(t) { return (t && t.type ? t.type : N) + H + (I++).toString(36) },
                    X = "http://www.w3.org/1999/xlink",
                    U = "http://www.w3.org/2000/svg",
                    V = {};
                n.url = function(t) { return "url('#" + t + "')" }, n._.$ = i, n._.id = W, n.format = function() { var t = /\{([^\}]+)\}/g,
                        e = /(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g,
                        n = function(t, n, i) { var r = i; return n.replace(e, function(t, e, n, i, s) { e = e || i, r && (e in r && (r = r[e]), "function" == typeof r && s && (r = r())) }), r = (null == r || r == i ? t : r) + "" }; return function(e, i) { return k(e).replace(t, function(t, e) { return n(t, e, i) }) } }(), n._.clone = s, n._.cacher = a, n.rad = u, n.deg = c, n.sin = function(t) { return P.sin(n.rad(t)) }, n.tan = function(t) { return P.tan(n.rad(t)) }, n.cos = function(t) { return P.cos(n.rad(t)) }, n.asin = function(t) { return n.deg(P.asin(t)) }, n.acos = function(t) { return n.deg(P.acos(t)) }, n.atan = function(t) { return n.deg(P.atan(t)) }, n.atan2 = function(t) { return n.deg(P.atan2(t)) }, n.angle = l, n.len = function(t, e, i, r) { return Math.sqrt(n.len2(t, e, i, r)) }, n.len2 = function(t, e, n, i) { return (t - n) * (t - n) + (e - i) * (e - i) }, n.closestPoint = function(t, e, n) {
                    function i(t) { var i = t.x - e,
                            r = t.y - n; return i * i + r * r } for (var r, s, o, a, l = t.node, u = l.getTotalLength(), c = u / l.pathSegList.numberOfItems * .125, h = 1 / 0, p = 0; u >= p; p += c)(a = i(o = l.getPointAtLength(p))) < h && (r = o, s = p, h = a); for (c *= .5; c > .5;) { var d, f, g, m, v, y;
                        (g = s - c) >= 0 && (v = i(d = l.getPointAtLength(g))) < h ? (r = d, s = g, h = v) : (m = s + c) <= u && (y = i(f = l.getPointAtLength(m))) < h ? (r = f, s = m, h = y) : c *= .5 } return r = { x: r.x, y: r.y, length: s, distance: Math.sqrt(h) } }, n.is = r, n.snapTo = function(t, e, n) { if (n = r(n, "finite") ? n : 10, r(t, "array")) { for (var i = t.length; i--;)
                            if (F(t[i] - e) <= n) return t[i] } else { t = +t; var s = e % t; if (n > s) return e - s; if (s > t - n) return e - s + t } return e }, n.getRGB = a(function(t) { if (!t || (t = k(t)).indexOf("-") + 1) return { r: -1, g: -1, b: -1, hex: "none", error: 1, toString: Z }; if ("none" == t) return { r: -1, g: -1, b: -1, hex: "none", toString: Z }; if (!(L[S](t.toLowerCase().substring(0, 2)) || "#" == t.charAt()) && (t = Y(t)), !t) return { r: -1, g: -1, b: -1, hex: "none", error: 1, toString: Z }; var e, i, s, o, a, l, u = t.match(R); return u ? (u[2] && (s = E(u[2].substring(5), 16), i = E(u[2].substring(3, 5), 16), e = E(u[2].substring(1, 3), 16)), u[3] && (s = E((a = u[3].charAt(3)) + a, 16), i = E((a = u[3].charAt(2)) + a, 16), e = E((a = u[3].charAt(1)) + a, 16)), u[4] && (l = u[4].split(j), e = A(l[0]), "%" == l[0].slice(-1) && (e *= 2.55), i = A(l[1]), "%" == l[1].slice(-1) && (i *= 2.55), s = A(l[2]), "%" == l[2].slice(-1) && (s *= 2.55), "rgba" == u[1].toLowerCase().slice(0, 4) && (o = A(l[3])), l[3] && "%" == l[3].slice(-1) && (o /= 100)), u[5] ? (l = u[5].split(j), e = A(l[0]), "%" == l[0].slice(-1) && (e /= 100), i = A(l[1]), "%" == l[1].slice(-1) && (i /= 100), s = A(l[2]), "%" == l[2].slice(-1) && (s /= 100), ("deg" == l[0].slice(-3) || "°" == l[0].slice(-1)) && (e /= 360), "hsba" == u[1].toLowerCase().slice(0, 4) && (o = A(l[3])), l[3] && "%" == l[3].slice(-1) && (o /= 100), n.hsb2rgb(e, i, s, o)) : u[6] ? (l = u[6].split(j), e = A(l[0]), "%" == l[0].slice(-1) && (e /= 100), i = A(l[1]), "%" == l[1].slice(-1) && (i /= 100), s = A(l[2]), "%" == l[2].slice(-1) && (s /= 100), ("deg" == l[0].slice(-3) || "°" == l[0].slice(-1)) && (e /= 360), "hsla" == u[1].toLowerCase().slice(0, 4) && (o = A(l[3])), l[3] && "%" == l[3].slice(-1) && (o /= 100), n.hsl2rgb(e, i, s, o)) : (e = O(P.round(e), 255), i = O(P.round(i), 255), s = O(P.round(s), 255), o = O(D(o, 0), 1), u = { r: e, g: i, b: s, toString: Z }, u.hex = "#" + (16777216 | s | i << 8 | e << 16).toString(16).slice(1), u.opacity = r(o, "finite") ? o : 1, u)) : { r: -1, g: -1, b: -1, hex: "none", error: 1, toString: Z } }, n), n.hsb = a(function(t, e, i) { return n.hsb2rgb(t, e, i).hex }), n.hsl = a(function(t, e, i) { return n.hsl2rgb(t, e, i).hex }), n.rgb = a(function(t, e, n, i) { if (r(i, "finite")) { var s = P.round; return "rgba(" + [s(t), s(e), s(n), +i.toFixed(2)] + ")" } return "#" + (16777216 | n | e << 8 | t << 16).toString(16).slice(1) }); var Y = function(t) { var e = C.doc.getElementsByTagName("head")[0] || C.doc.getElementsByTagName("svg")[0],
                            n = "rgb(255, 0, 0)"; return (Y = a(function(t) { if ("red" == t.toLowerCase()) return n;
                            e.style.color = n, e.style.color = t; var i = C.doc.defaultView.getComputedStyle(e, N).getPropertyValue("color"); return i == n ? null : i }))(t) },
                    G = function() { return "hsb(" + [this.h, this.s, this.b] + ")" },
                    Q = function() { return "hsl(" + [this.h, this.s, this.l] + ")" },
                    Z = function() { return 1 == this.opacity || null == this.opacity ? this.hex : "rgba(" + [this.r, this.g, this.b, this.opacity] + ")" },
                    K = function(t, e, i) { if (null == e && r(t, "object") && "r" in t && "g" in t && "b" in t && (i = t.b, e = t.g, t = t.r), null == e && r(t, string)) { var s = n.getRGB(t);
                            t = s.r, e = s.g, i = s.b } return (t > 1 || e > 1 || i > 1) && (t /= 255, e /= 255, i /= 255), [t, e, i] },
                    J = function(t, e, i, s) { t = P.round(255 * t), e = P.round(255 * e), i = P.round(255 * i); var o = { r: t, g: e, b: i, opacity: r(s, "finite") ? s : 1, hex: n.rgb(t, e, i), toString: Z }; return r(s, "finite") && (o.opacity = s), o };
                n.color = function(t) { var e; return r(t, "object") && "h" in t && "s" in t && "b" in t ? (e = n.hsb2rgb(t), t.r = e.r, t.g = e.g, t.b = e.b, t.opacity = 1, t.hex = e.hex) : r(t, "object") && "h" in t && "s" in t && "l" in t ? (e = n.hsl2rgb(t), t.r = e.r, t.g = e.g, t.b = e.b, t.opacity = 1, t.hex = e.hex) : (r(t, "string") && (t = n.getRGB(t)), r(t, "object") && "r" in t && "g" in t && "b" in t && !("error" in t) ? (e = n.rgb2hsl(t), t.h = e.h, t.s = e.s, t.l = e.l, e = n.rgb2hsb(t), t.v = e.b) : (t = { hex: "none" }, t.r = t.g = t.b = t.h = t.s = t.v = t.l = -1, t.error = 1)), t.toString = Z, t }, n.hsb2rgb = function(t, e, n, i) { r(t, "object") && "h" in t && "s" in t && "b" in t && (n = t.b, e = t.s, i = t.o, t = t.h), t *= 360; var s, o, a, l, u; return t = t % 360 / 60, u = n * e, l = u * (1 - F(t % 2 - 1)), s = o = a = n - u, t = ~~t, s += [u, l, 0, 0, l, u][t], o += [l, u, u, l, 0, 0][t], a += [0, 0, l, u, u, l][t], J(s, o, a, i) }, n.hsl2rgb = function(t, e, n, i) { r(t, "object") && "h" in t && "s" in t && "l" in t && (n = t.l, e = t.s, t = t.h), (t > 1 || e > 1 || n > 1) && (t /= 360, e /= 100, n /= 100), t *= 360; var s, o, a, l, u; return t = t % 360 / 60, u = 2 * e * (.5 > n ? n : 1 - n), l = u * (1 - F(t % 2 - 1)), s = o = a = n - u / 2, t = ~~t, s += [u, l, 0, 0, l, u][t], o += [l, u, u, l, 0, 0][t], a += [0, 0, l, u, u, l][t], J(s, o, a, i) }, n.rgb2hsb = function(t, e, n) { n = K(t, e, n), t = n[0], e = n[1], n = n[2]; var i, r, s, o; return s = D(t, e, n), o = s - O(t, e, n), i = 0 == o ? null : s == t ? (e - n) / o : s == e ? (n - t) / o + 2 : (t - e) / o + 4, i = (i + 360) % 6 * 60 / 360, r = 0 == o ? 0 : o / s, { h: i, s: r, b: s, toString: G } }, n.rgb2hsl = function(t, e, n) { n = K(t, e, n), t = n[0], e = n[1], n = n[2]; var i, r, s, o, a, l; return o = D(t, e, n), a = O(t, e, n), l = o - a, i = 0 == l ? null : o == t ? (e - n) / l : o == e ? (n - t) / l + 2 : (t - e) / l + 4, i = (i + 360) % 6 * 60 / 360, s = (o + a) / 2, r = 0 == l ? 0 : .5 > s ? l / (2 * s) : l / (2 - 2 * s), { h: i, s: r, l: s, toString: Q } }, n.parsePathString = function(t) { if (!t) return null; var e = n.path(t); if (e.arr) return n.path.clone(e.arr); var i = { a: 7, c: 6, o: 2, h: 1, l: 2, m: 2, r: 4, q: 4, s: 4, t: 2, v: 1, u: 3, z: 0 },
                        s = []; return r(t, "array") && r(t[0], "array") && (s = n.path.clone(t)), s.length || k(t).replace(z, function(t, e, n) { var r = [],
                            o = e.toLowerCase(); if (n.replace(q, function(t, e) { e && r.push(+e) }), "m" == o && r.length > 2 && (s.push([e].concat(r.splice(0, 2))), o = "l", e = "m" == e ? "l" : "L"), "o" == o && 1 == r.length && s.push([e, r[0]]), "r" == o) s.push([e].concat(r));
                        else
                            for (; r.length >= i[o] && (s.push([e].concat(r.splice(0, i[o]))), i[o]);); }), s.toString = n.path.toString, e.arr = n.path.clone(s), s }; var tt = n.parseTransformString = function(t) { if (!t) return null; var e = []; return r(t, "array") && r(t[0], "array") && (e = n.path.clone(t)), e.length || k(t).replace(B, function(t, n, i) { var r = [];
                        n.toLowerCase(), i.replace(q, function(t, e) { e && r.push(+e) }), e.push([n].concat(r)) }), e.toString = n.path.toString, e };
                n._.svgTransform2string = h, n._.rgTransform = /^[a-z][\s]*-?\.?\d/i, n._.transform2matrix = p, n._unit2px = m, C.doc.contains || C.doc.compareDocumentPosition, n._.getSomeDefs = d, n._.getSomeSVG = f, n.select = function(t) { return t = k(t).replace(/([^\\]):/g, "$1\\:"), w(C.doc.querySelector(t)) }, n.selectAll = function(t) { for (var e = C.doc.querySelectorAll(t), i = (n.set || Array)(), r = 0; r < e.length; r++) i.push(w(e[r])); return i }, setInterval(function() { for (var t in V)
                        if (V[S](t)) { var e = V[t],
                                n = e.node;
                            ("svg" != e.type && !n.ownerSVGElement || "svg" == e.type && (!n.parentNode || "ownerSVGElement" in n.parentNode && !n.ownerSVGElement)) && delete V[t] } }, 1e4), y.prototype.attr = function(t, n) { var i = this,
                        s = i.node; if (!t) { if (1 != s.nodeType) return { text: s.nodeValue }; for (var o = s.attributes, a = {}, l = 0, u = o.length; u > l; l++) a[o[l].nodeName] = o[l].nodeValue; return a } if (r(t, "string")) { if (!(arguments.length > 1)) return e("snap.util.getattr." + t, i).firstDefined(); var c = {};
                        c[t] = n, t = c } for (var h in t) t[S](h) && e("snap.util.attr." + h, i, t[h]); return i }, n.parse = function(t) { var e = C.doc.createDocumentFragment(),
                        n = !0,
                        i = C.doc.createElement("div"); if (t = k(t), t.match(/^\s*<\s*svg(?:\s|>)/) || (t = "<svg>" + t + "</svg>", n = !1), i.innerHTML = t, t = i.getElementsByTagName("svg")[0])
                        if (n) e = t;
                        else
                            for (; t.firstChild;) e.appendChild(t.firstChild);
                    return new _(e) }, n.fragment = function() { for (var t = Array.prototype.slice.call(arguments, 0), e = C.doc.createDocumentFragment(), i = 0, r = t.length; r > i; i++) { var s = t[i];
                        s.node && s.node.nodeType && e.appendChild(s.node), s.nodeType && e.appendChild(s), "string" == typeof s && e.appendChild(n.parse(s).node) } return new _(e) }, n._.make = x, n._.wrap = w, b.prototype.el = function(t, e) { var n = x(t, this.node); return e && n.attr(e), n }, y.prototype.children = function() { for (var t = [], e = this.node.childNodes, i = 0, r = e.length; r > i; i++) t[i] = n(e[i]); return t }, y.prototype.toJSON = function() { var t = []; return T([this], t), t[0] }, e.on("snap.util.getattr", function() { var t = e.nt();
                    t = t.substring(t.lastIndexOf(".") + 1); var n = t.replace(/[A-Z]/g, function(t) { return "-" + t.toLowerCase() }); return et[S](n) ? this.node.ownerDocument.defaultView.getComputedStyle(this.node, null).getPropertyValue(n) : i(this.node, t) }); var et = { "alignment-baseline": 0, "baseline-shift": 0, clip: 0, "clip-path": 0, "clip-rule": 0, color: 0, "color-interpolation": 0, "color-interpolation-filters": 0, "color-profile": 0, "color-rendering": 0, cursor: 0, direction: 0, display: 0, "dominant-baseline": 0, "enable-background": 0, fill: 0, "fill-opacity": 0, "fill-rule": 0, filter: 0, "flood-color": 0, "flood-opacity": 0, font: 0, "font-family": 0, "font-size": 0, "font-size-adjust": 0, "font-stretch": 0, "font-style": 0, "font-variant": 0, "font-weight": 0, "glyph-orientation-horizontal": 0, "glyph-orientation-vertical": 0, "image-rendering": 0, kerning: 0, "letter-spacing": 0, "lighting-color": 0, marker: 0, "marker-end": 0, "marker-mid": 0, "marker-start": 0, mask: 0, opacity: 0, overflow: 0, "pointer-events": 0, "shape-rendering": 0, "stop-color": 0, "stop-opacity": 0, stroke: 0, "stroke-dasharray": 0, "stroke-dashoffset": 0, "stroke-linecap": 0, "stroke-linejoin": 0, "stroke-miterlimit": 0, "stroke-opacity": 0, "stroke-width": 0, "text-anchor": 0, "text-decoration": 0, "text-rendering": 0, "unicode-bidi": 0, visibility: 0, "word-spacing": 0, "writing-mode": 0 };
                e.on("snap.util.attr", function(t) { var n = e.nt(),
                        r = {};
                    n = n.substring(n.lastIndexOf(".") + 1), r[n] = t; var s = n.replace(/-(\w)/gi, function(t, e) { return e.toUpperCase() }),
                        o = n.replace(/[A-Z]/g, function(t) { return "-" + t.toLowerCase() });
                    et[S](o) ? this.node.style[s] = null == t ? N : t : i(this.node, r) }), b.prototype, n.ajax = function(t, n, i, s) { var o = new XMLHttpRequest,
                        a = W(); if (o) { if (r(n, "function")) s = i, i = n, n = null;
                        else if (r(n, "object")) { var l = []; for (var u in n) n.hasOwnProperty(u) && l.push(encodeURIComponent(u) + "=" + encodeURIComponent(n[u]));
                            n = l.join("&") } return o.open(n ? "POST" : "GET", t, !0), n && (o.setRequestHeader("X-Requested-With", "XMLHttpRequest"), o.setRequestHeader("Content-type", "application/x-www-form-urlencoded")), i && (e.once("snap.ajax." + a + ".0", i), e.once("snap.ajax." + a + ".200", i), e.once("snap.ajax." + a + ".304", i)), o.onreadystatechange = function() { 4 == o.readyState && e("snap.ajax." + a + "." + o.status, s, o) }, 4 == o.readyState ? o : (o.send(n), o) } }, n.load = function(t, e, i) { n.ajax(t, function(t) { var r = n.parse(t.responseText);
                        i ? e.call(i, r) : e(r) }) }; var nt = function(t) { var e = t.getBoundingClientRect(),
                        n = t.ownerDocument,
                        i = n.body,
                        r = n.documentElement,
                        s = r.clientTop || i.clientTop || 0,
                        o = r.clientLeft || i.clientLeft || 0; return { y: e.top + (g.win.pageYOffset || r.scrollTop || i.scrollTop) - s, x: e.left + (g.win.pageXOffset || r.scrollLeft || i.scrollLeft) - o } }; return n.getElementByPoint = function(t, e) { var n = this,
                        i = (n.canvas, C.doc.elementFromPoint(t, e)); if (C.win.opera && "svg" == i.tagName) { var r = nt(i),
                            s = i.createSVGRect();
                        s.x = t - r.x, s.y = e - r.y, s.width = s.height = 1; var o = i.getIntersectionList(s, null);
                        o.length && (i = o[o.length - 1]) } return i ? w(i) : null }, n.plugin = function(t) { t(n, y, b, C, _) }, C.win.Snap = n, n }(t || this);
        return i.plugin(function(n, i, r, s, o) {
            function a(t, e) { if (null == e) { var i = !0; if (!(e = "linearGradient" == t.type || "radialGradient" == t.type ? t.node.getAttribute("gradientTransform") : "pattern" == t.type ? t.node.getAttribute("patternTransform") : t.node.getAttribute("transform"))) return new n.Matrix;
                    e = n._.svgTransform2string(e) } else e = n._.rgTransform.test(e) ? p(e).replace(/\.{3}|\u2026/g, t._.transform || "") : n._.svgTransform2string(e), h(e, "array") && (e = n.path ? n.path.toString.call(e) : p(e)), t._.transform = e; var r = n._.transform2matrix(e, t.getBBox(1)); return i ? r : void(t.matrix = r) }

            function l(t) {
                function e(t, e) { var i = f(t.node, e);
                    i = i && i.match(s), (i = i && i[2]) && "#" == i.charAt() && (i = i.substring(1)) && (a[i] = (a[i] || []).concat(function(i) { var r = {};
                        r[e] = n.url(i), f(t.node, r) })) } for (var i, r = t.selectAll("*"), s = /^\s*url\(("|'|)(.*)\1\)\s*$/, o = [], a = {}, l = 0, u = r.length; u > l; l++) { i = r[l], e(i, "fill"), e(i, "stroke"), e(i, "filter"), e(i, "mask"), e(i, "clip-path"),
                        function(t) { var e = f(t.node, "xlink:href");
                            e && "#" == e.charAt() && (e = e.substring(1)) && (a[e] = (a[e] || []).concat(function(e) { t.attr("xlink:href", "#" + e) })) }(i); var c = f(i.node, "id");
                    c && (f(i.node, { id: i.id }), o.push({ old: c, id: i.id })) } for (l = 0, u = o.length; u > l; l++) { var h = a[o[l].old]; if (h)
                        for (var p = 0, d = h.length; d > p; p++) h[p](o[l].id) } }

            function u(t) { return function() { var e = t ? "<" + this.type : "",
                        n = this.node.attributes,
                        i = this.node.childNodes; if (t)
                        for (var r = 0, s = n.length; s > r; r++) e += " " + n[r].name + '="' + n[r].value.replace(/"/g, '\\"') + '"'; if (i.length) { for (t && (e += ">"), r = 0, s = i.length; s > r; r++) 3 == i[r].nodeType ? e += i[r].nodeValue : 1 == i[r].nodeType && (e += v(i[r]).toString());
                        t && (e += "</" + this.type + ">") } else t && (e += "/>"); return e } } var c = i.prototype,
                h = n.is,
                p = String,
                d = n._unit2px,
                f = n._.$,
                g = n._.make,
                m = n._.getSomeDefs,
                v = n._.wrap;
            c.getBBox = function(t) { if ("tspan" == this.type) return n._.box(this.node.getClientRects().item(0)); if (!n.Matrix || !n.path) return this.node.getBBox(); var e = this,
                    i = new n.Matrix; if (e.removed) return n._.box(); for (;
                    "use" == e.type;)
                    if (t || (i = i.add(e.transform().localMatrix.translate(e.attr("x") || 0, e.attr("y") || 0))), e.original) e = e.original;
                    else { var r = e.attr("xlink:href");
                        e = e.original = e.node.ownerDocument.getElementById(r.substring(r.indexOf("#") + 1)) }
                var s = e._,
                    o = n.path.get[e.type] || n.path.get.deflt; try { return t ? (s.bboxwt = o ? n.path.getBBox(e.realPath = o(e)) : n._.box(e.node.getBBox()), n._.box(s.bboxwt)) : (e.realPath = o(e), e.matrix = e.transform().localMatrix, s.bbox = n.path.getBBox(n.path.map(e.realPath, i.add(e.matrix))), n._.box(s.bbox)) } catch (t) { return n._.box() } }; var y = function() { return this.string };
            c.transform = function(t) { var e = this._; if (null == t) { for (var i, r = this, s = new n.Matrix(this.node.getCTM()), o = a(this), l = [o], u = new n.Matrix, c = o.toTransformString(), h = p(o) == p(this.matrix) ? p(e.transform) : c;
                        "svg" != r.type && (r = r.parent());) l.push(a(r)); for (i = l.length; i--;) u.add(l[i]); return { string: h, globalMatrix: s, totalMatrix: u, localMatrix: o, diffMatrix: s.clone().add(o.invert()), global: s.toTransformString(), total: u.toTransformString(), local: c, toString: y } } return t instanceof n.Matrix ? (this.matrix = t, this._.transform = t.toTransformString()) : a(this, t), this.node && ("linearGradient" == this.type || "radialGradient" == this.type ? f(this.node, { gradientTransform: this.matrix }) : "pattern" == this.type ? f(this.node, { patternTransform: this.matrix }) : f(this.node, { transform: this.matrix })), this }, c.parent = function() { return v(this.node.parentNode) }, c.append = c.add = function(t) { if (t) { if ("set" == t.type) { var e = this; return t.forEach(function(t) { e.add(t) }), this }
                    t = v(t), this.node.appendChild(t.node), t.paper = this.paper } return this }, c.appendTo = function(t) { return t && (t = v(t), t.append(this)), this }, c.prepend = function(t) { if (t) { if ("set" == t.type) { var e, n = this; return t.forEach(function(t) { e ? e.after(t) : n.prepend(t), e = t }), this }
                    t = v(t); var i = t.parent();
                    this.node.insertBefore(t.node, this.node.firstChild), this.add && this.add(), t.paper = this.paper, this.parent() && this.parent().add(), i && i.add() } return this }, c.prependTo = function(t) { return t = v(t), t.prepend(this), this }, c.before = function(t) { if ("set" == t.type) { var e = this; return t.forEach(function(t) { var n = t.parent();
                        e.node.parentNode.insertBefore(t.node, e.node), n && n.add() }), this.parent().add(), this }
                t = v(t); var n = t.parent(); return this.node.parentNode.insertBefore(t.node, this.node), this.parent() && this.parent().add(), n && n.add(), t.paper = this.paper, this }, c.after = function(t) { t = v(t); var e = t.parent(); return this.node.nextSibling ? this.node.parentNode.insertBefore(t.node, this.node.nextSibling) : this.node.parentNode.appendChild(t.node), this.parent() && this.parent().add(), e && e.add(), t.paper = this.paper, this }, c.insertBefore = function(t) { t = v(t); var e = this.parent(); return t.node.parentNode.insertBefore(this.node, t.node), this.paper = t.paper, e && e.add(), t.parent() && t.parent().add(), this }, c.insertAfter = function(t) { t = v(t); var e = this.parent(); return t.node.parentNode.insertBefore(this.node, t.node.nextSibling), this.paper = t.paper, e && e.add(), t.parent() && t.parent().add(), this }, c.remove = function() { var t = this.parent(); return this.node.parentNode && this.node.parentNode.removeChild(this.node), delete this.paper, this.removed = !0, t && t.add(), this }, c.select = function(t) { return v(this.node.querySelector(t)) }, c.selectAll = function(t) { for (var e = this.node.querySelectorAll(t), i = (n.set || Array)(), r = 0; r < e.length; r++) i.push(v(e[r])); return i }, c.asPX = function(t, e) { return null == e && (e = this.attr(t)), +d(this, t, e) }, c.use = function() { var t, e = this.node.id; return e || (e = this.id, f(this.node, { id: e })), t = "linearGradient" == this.type || "radialGradient" == this.type || "pattern" == this.type ? g(this.type, this.node.parentNode) : g("use", this.node.parentNode), f(t.node, { "xlink:href": "#" + e }), t.original = this, t }, c.clone = function() { var t = v(this.node.cloneNode(!0)); return f(t.node, "id") && f(t.node, { id: t.id }), l(t), t.insertAfter(this), t }, c.toDefs = function() { return m(this).appendChild(this.node), this }, c.pattern = c.toPattern = function(t, e, n, i) { var r = g("pattern", m(this)); return null == t && (t = this.getBBox()), h(t, "object") && "x" in t && (e = t.y, n = t.width, i = t.height, t = t.x), f(r.node, { x: t, y: e, width: n, height: i, patternUnits: "userSpaceOnUse", id: r.id, viewBox: [t, e, n, i].join(" ") }), r.node.appendChild(this.node), r }, c.marker = function(t, e, n, i, r, s) { var o = g("marker", m(this)); return null == t && (t = this.getBBox()), h(t, "object") && "x" in t && (e = t.y, n = t.width, i = t.height, r = t.refX || t.cx, s = t.refY || t.cy, t = t.x), f(o.node, { viewBox: [t, e, n, i].join(" "), markerWidth: n, markerHeight: i, orient: "auto", refX: r || 0, refY: s || 0, id: o.id }), o.node.appendChild(this.node), o }; var _ = {};
            c.data = function(t, i) { var r = _[this.id] = _[this.id] || {}; if (0 == arguments.length) return e("snap.data.get." + this.id, this, r, null), r; if (1 == arguments.length) { if (n.is(t, "object")) { for (var s in t) t.hasOwnProperty(s) && this.data(s, t[s]); return this } return e("snap.data.get." + this.id, this, r[t], t), r[t] } return r[t] = i, e("snap.data.set." + this.id, this, i, t), this }, c.removeData = function(t) { return null == t ? _[this.id] = {} : _[this.id] && delete _[this.id][t], this }, c.outerSVG = c.toString = u(1), c.innerSVG = u(), c.toDataURL = function() { if (t && t.btoa) { var e = this.getBBox(),
                        i = n.format('<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="{width}" height="{height}" viewBox="{x} {y} {width} {height}">{contents}</svg>', { x: +e.x.toFixed(3), y: +e.y.toFixed(3), width: +e.width.toFixed(3), height: +e.height.toFixed(3), contents: this.outerSVG() }); return "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(i))) } }, o.prototype.select = c.select, o.prototype.selectAll = c.selectAll }), i.plugin(function(t, i, r, s, o) {
            function a(t, e, n) { return function(i) { var r = i.slice(t, e); return 1 == r.length && (r = r[0]), n ? n(r) : r } }
            var l = i.prototype,
                u = t.is,
                c = String,
                h = "hasOwnProperty",
                p = function(t, e, i, r) { "function" != typeof i || i.length || (r = i, i = n.linear), this.attr = t, this.dur = e, i && (this.easing = i), r && (this.callback = r) };
            t._.Animation = p, t.animation = function(t, e, n, i) { return new p(t, e, n, i) }, l.inAnim = function() { var t = this,
                    e = []; for (var n in t.anims) t.anims[h](n) && function(t) { e.push({ anim: new p(t._attrs, t.dur, t.easing, t._callback), mina: t, curStatus: t.status(), status: function(e) { return t.status(e) }, stop: function() { t.stop() } }) }(t.anims[n]); return e }, t.animate = function(t, i, r, s, o, a) { "function" != typeof o || o.length || (a = o, o = n.linear); var l = n.time(),
                    u = n(t, i, l, l + s, n.time, r, o); return a && e.once("mina.finish." + u.id, a), u }, l.stop = function() { for (var t = this.inAnim(), e = 0, n = t.length; n > e; e++) t[e].stop(); return this }, l.animate = function(t, i, r, s) { "function" != typeof r || r.length || (s = r, r = n.linear), t instanceof p && (s = t.callback, r = t.easing, i = t.dur, t = t.attr); var o, l, d, f, g = [],
                    m = [],
                    v = {},
                    y = this; for (var _ in t)
                    if (t[h](_)) { y.equal ? (f = y.equal(_, c(t[_])), o = f.from, l = f.to, d = f.f) : (o = +y.attr(_), l = +t[_]); var x = u(o, "array") ? o.length : 1;
                        v[_] = a(g.length, g.length + x, d), g = g.concat(o), m = m.concat(l) }
                var b = n.time(),
                    w = n(g, m, b, b + i, n.time, function(t) { var e = {}; for (var n in v) v[h](n) && (e[n] = v[n](t));
                        y.attr(e) }, r); return y.anims[w.id] = w, w._attrs = t, w._callback = s, e("snap.animcreated." + y.id, w), e.once("mina.finish." + w.id, function() { e.off("mina.*." + w.id), delete y.anims[w.id], s && s.call(y) }), e.once("mina.stop." + w.id, function() { e.off("mina.*." + w.id), delete y.anims[w.id] }), y }
        }), i.plugin(function(t, e, n, i, r) {
            function s(t, e, n, i, r, s) { return null == e && "[object SVGMatrix]" == o.call(t) ? (this.a = t.a, this.b = t.b, this.c = t.c, this.d = t.d, this.e = t.e, void(this.f = t.f)) : void(null != t ? (this.a = +t, this.b = +e, this.c = +n, this.d = +i, this.e = +r, this.f = +s) : (this.a = 1, this.b = 0, this.c = 0, this.d = 1, this.e = 0, this.f = 0)) } var o = Object.prototype.toString,
                a = String,
                l = Math;! function(e) {
                function n(t) { return t[0] * t[0] + t[1] * t[1] }

                function i(t) { var e = l.sqrt(n(t));
                    t[0] && (t[0] /= e), t[1] && (t[1] /= e) }
                e.add = function(t, e, n, i, r, o) { if (t && t instanceof s) return this.add(t.a, t.b, t.c, t.d, t.e, t.f); var a = t * this.a + e * this.c,
                        l = t * this.b + e * this.d; return this.e += r * this.a + o * this.c, this.f += r * this.b + o * this.d, this.c = n * this.a + i * this.c, this.d = n * this.b + i * this.d, this.a = a, this.b = l, this }, s.prototype.multLeft = function(t, e, n, i, r, o) { if (t && t instanceof s) return this.multLeft(t.a, t.b, t.c, t.d, t.e, t.f); var a = t * this.a + n * this.b,
                        l = t * this.c + n * this.d,
                        u = t * this.e + n * this.f + r; return this.b = e * this.a + i * this.b, this.d = e * this.c + i * this.d, this.f = e * this.e + i * this.f + o, this.a = a, this.c = l, this.e = u, this }, e.invert = function() { var t = this,
                        e = t.a * t.d - t.b * t.c; return new s(t.d / e, -t.b / e, -t.c / e, t.a / e, (t.c * t.f - t.d * t.e) / e, (t.b * t.e - t.a * t.f) / e) }, e.clone = function() { return new s(this.a, this.b, this.c, this.d, this.e, this.f) }, e.translate = function(t, e) { return this.e += t * this.a + e * this.c, this.f += t * this.b + e * this.d, this }, e.scale = function(t, e, n, i) { return null == e && (e = t), (n || i) && this.translate(n, i), this.a *= t, this.b *= t, this.c *= e, this.d *= e, (n || i) && this.translate(-n, -i), this }, e.rotate = function(e, n, i) { e = t.rad(e), n = n || 0, i = i || 0; var r = +l.cos(e).toFixed(9),
                        s = +l.sin(e).toFixed(9); return this.add(r, s, -s, r, n, i), this.add(1, 0, 0, 1, -n, -i) }, e.skewX = function(t) { return this.skew(t, 0) }, e.skewY = function(t) { return this.skew(0, t) }, e.skew = function(e, n) { e = e || 0, n = n || 0, e = t.rad(e), n = t.rad(n); var i = l.tan(e).toFixed(9),
                        r = l.tan(n).toFixed(9); return this.add(1, r, i, 1, 0, 0) }, e.x = function(t, e) { return t * this.a + e * this.c + this.e }, e.y = function(t, e) { return t * this.b + e * this.d + this.f }, e.get = function(t) { return +this[a.fromCharCode(97 + t)].toFixed(4) }, e.toString = function() { return "matrix(" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)].join() + ")" }, e.offset = function() { return [this.e.toFixed(4), this.f.toFixed(4)] }, e.determinant = function() { return this.a * this.d - this.b * this.c }, e.split = function() { var e = {};
                    e.dx = this.e, e.dy = this.f; var r = [
                        [this.a, this.b],
                        [this.c, this.d]
                    ];
                    e.scalex = l.sqrt(n(r[0])), i(r[0]), e.shear = r[0][0] * r[1][0] + r[0][1] * r[1][1], r[1] = [r[1][0] - r[0][0] * e.shear, r[1][1] - r[0][1] * e.shear], e.scaley = l.sqrt(n(r[1])), i(r[1]), e.shear /= e.scaley, this.determinant() < 0 && (e.scalex = -e.scalex); var s = r[0][1],
                        o = r[1][1]; return 0 > o ? (e.rotate = t.deg(l.acos(o)), 0 > s && (e.rotate = 360 - e.rotate)) : e.rotate = t.deg(l.asin(s)), e.isSimple = !(+e.shear.toFixed(9) || e.scalex.toFixed(9) != e.scaley.toFixed(9) && e.rotate), e.isSuperSimple = !+e.shear.toFixed(9) && e.scalex.toFixed(9) == e.scaley.toFixed(9) && !e.rotate, e.noRotation = !+e.shear.toFixed(9) && !e.rotate, e }, e.toTransformString = function(t) { var e = t || this.split(); return +e.shear.toFixed(9) ? "m" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)] : (e.scalex = +e.scalex.toFixed(4), e.scaley = +e.scaley.toFixed(4), e.rotate = +e.rotate.toFixed(4), (e.dx || e.dy ? "t" + [+e.dx.toFixed(4), +e.dy.toFixed(4)] : "") + (e.rotate ? "r" + [+e.rotate.toFixed(4), 0, 0] : "") + (1 != e.scalex || 1 != e.scaley ? "s" + [e.scalex, e.scaley, 0, 0] : "")) } }(s.prototype), t.Matrix = s, t.matrix = function(t, e, n, i, r, o) { return new s(t, e, n, i, r, o) } }), i.plugin(function(t, n, i, r, s) {
            function o(i) { return function(r) { if (e.stop(), r instanceof s && 1 == r.node.childNodes.length && ("radialGradient" == r.node.firstChild.tagName || "linearGradient" == r.node.firstChild.tagName || "pattern" == r.node.firstChild.tagName) && (r = r.node.firstChild, d(this).appendChild(r), r = h(r)), r instanceof n)
                        if ("radialGradient" == r.type || "linearGradient" == r.type || "pattern" == r.type) { r.node.id || g(r.node, { id: r.id }); var o = m(r.node.id) } else o = r.attr(i);
                    else if (o = t.color(r), o.error) { var a = t(d(this).ownerSVGElement).gradient(r);
                        a ? (a.node.id || g(a.node, { id: a.id }), o = m(a.node.id)) : o = r } else o = v(o); var l = {};
                    l[i] = o, g(this.node, l), this.node.style[i] = _ } }

            function a(t) { e.stop(), t == +t && (t += "px"), this.node.style.fontSize = t }

            function l(t) { for (var e = [], n = t.childNodes, i = 0, r = n.length; r > i; i++) { var s = n[i];
                    3 == s.nodeType && e.push(s.nodeValue), "tspan" == s.tagName && (1 == s.childNodes.length && 3 == s.firstChild.nodeType ? e.push(s.firstChild.nodeValue) : e.push(l(s))) } return e }

            function u() { return e.stop(), this.node.style.fontSize } var c = t._.make,
                h = t._.wrap,
                p = t.is,
                d = t._.getSomeDefs,
                f = /^url\((['"]?)([^)]+)\1\)$/,
                g = t._.$,
                m = t.url,
                v = String,
                y = t._.separator,
                _ = "";
            t.deurl = function(t) { var e = String(t).match(f); return e ? e[2] : t }, e.on("snap.util.attr.mask", function(t) { if (t instanceof n || t instanceof s) { if (e.stop(), t instanceof s && 1 == t.node.childNodes.length && (t = t.node.firstChild, d(this).appendChild(t), t = h(t)), "mask" == t.type) var i = t;
                        else i = c("mask", d(this)), i.node.appendChild(t.node);!i.node.id && g(i.node, { id: i.id }), g(this.node, { mask: m(i.id) }) } }),
                function(t) { e.on("snap.util.attr.clip", t), e.on("snap.util.attr.clip-path", t), e.on("snap.util.attr.clipPath", t) }(function(t) { if (t instanceof n || t instanceof s) { e.stop(); for (var i, r = t.node; r;) { if ("clipPath" === r.nodeName) { i = new n(r); break } if ("svg" === r.nodeName) { i = void 0; break }
                            r = r.parentNode }
                        i || (i = c("clipPath", d(this)), i.node.appendChild(t.node), !i.node.id && g(i.node, { id: i.id })), g(this.node, { "clip-path": m(i.node.id || i.id) }) } }), e.on("snap.util.attr.fill", o("fill")), e.on("snap.util.attr.stroke", o("stroke")); var x = /^([lr])(?:\(([^)]*)\))?(.*)$/i;
            e.on("snap.util.grad.parse", function(t) {
                    function e(t, e) { for (var n = (e - a) / (t - l), i = l; t > i; i++) s[i].offset = +(+a + n * (i - l)).toFixed(2);
                        l = t, a = e }
                    t = v(t); var n = t.match(x); if (!n) return null; var i = n[1],
                        r = n[2],
                        s = n[3];
                    r = r.split(/\s*,\s*/).map(function(t) { return +t == t ? +t : t }), 1 == r.length && 0 == r[0] && (r = []), s = s.split("-"), s = s.map(function(t) { t = t.split(":"); var e = { color: t[0] }; return t[1] && (e.offset = parseFloat(t[1])), e }); var o = s.length,
                        a = 0,
                        l = 0;
                    o--; for (var u = 0; o > u; u++) "offset" in s[u] && e(u, s[u].offset); return s[o].offset = s[o].offset || 100, e(o, s[o].offset), { type: i, params: r, stops: s } }), e.on("snap.util.attr.d", function(n) { e.stop(), p(n, "array") && p(n[0], "array") && (n = t.path.toString.call(n)), n = v(n), n.match(/[ruo]/i) && (n = t.path.toAbsolute(n)), g(this.node, { d: n }) })(-1), e.on("snap.util.attr.#text", function(t) { e.stop(), t = v(t); for (var n = r.doc.createTextNode(t); this.node.firstChild;) this.node.removeChild(this.node.firstChild);
                    this.node.appendChild(n) })(-1), e.on("snap.util.attr.path", function(t) { e.stop(), this.attr({ d: t }) })(-1), e.on("snap.util.attr.class", function(t) { e.stop(), this.node.className.baseVal = t })(-1), e.on("snap.util.attr.viewBox", function(t) { var n;
                    n = p(t, "object") && "x" in t ? [t.x, t.y, t.width, t.height].join(" ") : p(t, "array") ? t.join(" ") : t, g(this.node, { viewBox: n }), e.stop() })(-1), e.on("snap.util.attr.transform", function(t) { this.transform(t), e.stop() })(-1), e.on("snap.util.attr.r", function(t) { "rect" == this.type && (e.stop(), g(this.node, { rx: t, ry: t })) })(-1), e.on("snap.util.attr.textpath", function(t) { if (e.stop(), "text" == this.type) { var i, r, s; if (!t && this.textPath) { for (r = this.textPath; r.node.firstChild;) this.node.appendChild(r.node.firstChild); return r.remove(), void delete this.textPath } if (p(t, "string")) { var o = d(this),
                                a = h(o.parentNode).path(t);
                            o.appendChild(a.node), i = a.id, a.attr({ id: i }) } else(t = h(t)) instanceof n && ((i = t.attr("id")) || (i = t.id, t.attr({ id: i }))); if (i)
                            if (r = this.textPath, s = this.node, r) r.attr({ "xlink:href": "#" + i });
                            else { for (r = g("textPath", { "xlink:href": "#" + i }); s.firstChild;) r.appendChild(s.firstChild);
                                s.appendChild(r), this.textPath = h(r) } } })(-1), e.on("snap.util.attr.text", function(t) { if ("text" == this.type) { for (var n = this.node, i = function(t) { var e = g("tspan"); if (p(t, "array"))
                                    for (var n = 0; n < t.length; n++) e.appendChild(i(t[n]));
                                else e.appendChild(r.doc.createTextNode(t)); return e.normalize && e.normalize(), e }; n.firstChild;) n.removeChild(n.firstChild); for (var s = i(t); s.firstChild;) n.appendChild(s.firstChild) }
                    e.stop() })(-1), e.on("snap.util.attr.fontSize", a)(-1), e.on("snap.util.attr.font-size", a)(-1), e.on("snap.util.getattr.transform", function() { return e.stop(), this.transform() })(-1), e.on("snap.util.getattr.textpath", function() { return e.stop(), this.textPath })(-1),
                function() {
                    function n(n) { return function() { e.stop(); var i = r.doc.defaultView.getComputedStyle(this.node, null).getPropertyValue("marker-" + n); return "none" == i ? i : t(r.doc.getElementById(i.match(f)[1])) } }

                    function i(t) { return function(n) { e.stop(); var i = "marker" + t.charAt(0).toUpperCase() + t.substring(1); if ("" == n || !n) return void(this.node.style[i] = "none"); if ("marker" == n.type) { var r = n.node.id; return r || g(n.node, { id: n.id }), void(this.node.style[i] = m(r)) } } }
                    e.on("snap.util.getattr.marker-end", n("end"))(-1), e.on("snap.util.getattr.markerEnd", n("end"))(-1), e.on("snap.util.getattr.marker-start", n("start"))(-1), e.on("snap.util.getattr.markerStart", n("start"))(-1), e.on("snap.util.getattr.marker-mid", n("mid"))(-1), e.on("snap.util.getattr.markerMid", n("mid"))(-1), e.on("snap.util.attr.marker-end", i("end"))(-1), e.on("snap.util.attr.markerEnd", i("end"))(-1), e.on("snap.util.attr.marker-start", i("start"))(-1), e.on("snap.util.attr.markerStart", i("start"))(-1), e.on("snap.util.attr.marker-mid", i("mid"))(-1), e.on("snap.util.attr.markerMid", i("mid"))(-1) }(), e.on("snap.util.getattr.r", function() { return "rect" == this.type && g(this.node, "rx") == g(this.node, "ry") ? (e.stop(), g(this.node, "rx")) : void 0 })(-1), e.on("snap.util.getattr.text", function() { if ("text" == this.type || "tspan" == this.type) { e.stop(); var t = l(this.node); return 1 == t.length ? t[0] : t } })(-1), e.on("snap.util.getattr.#text", function() { return this.node.textContent })(-1), e.on("snap.util.getattr.fill", function(n) { if (!n) { e.stop(); var i = e("snap.util.getattr.fill", this, !0).firstDefined(); return t(t.deurl(i)) || i } })(-1), e.on("snap.util.getattr.stroke", function(n) { if (!n) { e.stop(); var i = e("snap.util.getattr.stroke", this, !0).firstDefined(); return t(t.deurl(i)) || i } })(-1), e.on("snap.util.getattr.viewBox", function() { e.stop(); var n = g(this.node, "viewBox"); return n ? (n = n.split(y), t._.box(+n[0], +n[1], +n[2], +n[3])) : void 0 })(-1), e.on("snap.util.getattr.points", function() { var t = g(this.node, "points"); return e.stop(), t ? t.split(y) : void 0 })(-1), e.on("snap.util.getattr.path", function() { var t = g(this.node, "d"); return e.stop(), t })(-1), e.on("snap.util.getattr.class", function() { return this.node.className.baseVal })(-1), e.on("snap.util.getattr.fontSize", u)(-1), e.on("snap.util.getattr.font-size", u)(-1) }), i.plugin(function(t, e, n, i, r) { var s = /\S+/g,
                o = String,
                a = e.prototype;
            a.addClass = function(t) { var e, n, i, r = o(t || "").match(s) || [],
                    a = this.node,
                    l = a.className.baseVal,
                    u = l.match(s) || []; if (r.length) { for (e = 0; n = r[e++];) ~u.indexOf(n) || u.push(n);
                    i = u.join(" "), l != i && (a.className.baseVal = i) } return this }, a.removeClass = function(t) { var e, n, i, r, a = o(t || "").match(s) || [],
                    l = this.node,
                    u = l.className.baseVal,
                    c = u.match(s) || []; if (c.length) { for (e = 0; i = a[e++];) ~(n = c.indexOf(i)) && c.splice(n, 1);
                    r = c.join(" "), u != r && (l.className.baseVal = r) } return this }, a.hasClass = function(t) { return !!~(this.node.className.baseVal.match(s) || []).indexOf(t) }, a.toggleClass = function(t, e) { if (null != e) return e ? this.addClass(t) : this.removeClass(t); var n, i, r, o, a = (t || "").match(s) || [],
                    l = this.node,
                    u = l.className.baseVal,
                    c = u.match(s) || []; for (n = 0; r = a[n++];) i = c.indexOf(r), ~i ? c.splice(i, 1) : c.push(r); return o = c.join(" "), u != o && (l.className.baseVal = o), this } }), i.plugin(function(t, n, i, r, s) {
            function o(t) { return t }

            function a(t) { return function(e) { return +e.toFixed(3) + t } } var l = { "+": function(t, e) { return t + e }, "-": function(t, e) { return t - e }, "/": function(t, e) { return t / e }, "*": function(t, e) { return t * e } },
                u = String,
                c = /[a-z]+$/i,
                h = /^\s*([+\-\/*])\s*=\s*([\d.eE+\-]+)\s*([^\d\s]+)?\s*$/;
            e.on("snap.util.attr", function(t) { var n = u(t).match(h); if (n) { var i = e.nt(),
                        r = i.substring(i.lastIndexOf(".") + 1),
                        s = this.attr(r),
                        o = {};
                    e.stop(); var a = n[3] || "",
                        p = s.match(c),
                        d = l[n[1]]; if (p && p == a ? t = d(parseFloat(s), +n[2]) : (s = this.asPX(r), t = d(this.asPX(r), this.asPX(r, n[2] + a))), isNaN(s) || isNaN(t)) return;
                    o[r] = t, this.attr(o) } })(-10), e.on("snap.util.equal", function(t, n) { var i = u(this.attr(t) || ""),
                    r = u(n).match(h); if (r) { e.stop(); var s = r[3] || "",
                        p = i.match(c),
                        d = l[r[1]]; return p && p == s ? { from: parseFloat(i), to: d(parseFloat(i), +r[2]), f: a(p) } : (i = this.asPX(t), { from: i, to: d(i, this.asPX(t, r[2] + s)), f: o }) } })(-10) }), i.plugin(function(n, i, r, s, o) { var a = r.prototype,
                l = n.is;
            a.rect = function(t, e, n, i, r, s) { var o; return null == s && (s = r), l(t, "object") && "[object Object]" == t ? o = t : null != t && (o = { x: t, y: e, width: n, height: i }, null != r && (o.rx = r, o.ry = s)), this.el("rect", o) }, a.circle = function(t, e, n) { var i; return l(t, "object") && "[object Object]" == t ? i = t : null != t && (i = { cx: t, cy: e, r: n }), this.el("circle", i) }; var u = function() {
                function t() { this.parentNode.removeChild(this) } return function(e, n) { var i = s.doc.createElement("img"),
                        r = s.doc.body;
                    i.style.cssText = "position:absolute;left:-9999em;top:-9999em", i.onload = function() { n.call(i), i.onload = i.onerror = null, r.removeChild(i) }, i.onerror = t, r.appendChild(i), i.src = e } }();
            a.image = function(t, e, i, r, s) { var o = this.el("image"); if (l(t, "object") && "src" in t) o.attr(t);
                    else if (null != t) { var a = { "xlink:href": t, preserveAspectRatio: "none" };
                        null != e && null != i && (a.x = e, a.y = i), null != r && null != s ? (a.width = r, a.height = s) : u(t, function() { n._.$(o.node, { width: this.offsetWidth, height: this.offsetHeight }) }), n._.$(o.node, a) } return o }, a.ellipse = function(t, e, n, i) { var r; return l(t, "object") && "[object Object]" == t ? r = t : null != t && (r = { cx: t, cy: e, rx: n, ry: i }), this.el("ellipse", r) }, a.path = function(t) { var e; return l(t, "object") && !l(t, "array") ? e = t : t && (e = { d: t }), this.el("path", e) }, a.group = a.g = function(t) { var e = this.el("g"); return 1 == arguments.length && t && !t.type ? e.attr(t) : arguments.length && e.add(Array.prototype.slice.call(arguments, 0)), e }, a.svg = function(t, e, n, i, r, s, o, a) { var u = {}; return l(t, "object") && null == e ? u = t : (null != t && (u.x = t), null != e && (u.y = e), null != n && (u.width = n), null != i && (u.height = i), null != r && null != s && null != o && null != a && (u.viewBox = [r, s, o, a])), this.el("svg", u) }, a.mask = function(t) { var e = this.el("mask"); return 1 == arguments.length && t && !t.type ? e.attr(t) : arguments.length && e.add(Array.prototype.slice.call(arguments, 0)), e }, a.ptrn = function(t, e, n, i, r, s, o, a) { if (l(t, "object")) var u = t;
                    else u = { patternUnits: "userSpaceOnUse" }, t && (u.x = t), e && (u.y = e), null != n && (u.width = n), null != i && (u.height = i), u.viewBox = null != r && null != s && null != o && null != a ? [r, s, o, a] : [t || 0, e || 0, n || 0, i || 0]; return this.el("pattern", u) }, a.use = function(t) { return null != t ? (t instanceof i && (t.attr("id") || t.attr({ id: n._.id(t) }), t = t.attr("id")), "#" == String(t).charAt() && (t = t.substring(1)), this.el("use", { "xlink:href": "#" + t })) : i.prototype.use.call(this) }, a.symbol = function(t, e, n, i) { var r = {}; return null != t && null != e && null != n && null != i && (r.viewBox = [t, e, n, i]), this.el("symbol", r) }, a.text = function(t, e, n) { var i = {}; return l(t, "object") ? i = t : null != t && (i = { x: t, y: e, text: n || "" }), this.el("text", i) }, a.line = function(t, e, n, i) { var r = {}; return l(t, "object") ? r = t : null != t && (r = { x1: t, x2: n, y1: e, y2: i }), this.el("line", r) }, a.polyline = function(t) { arguments.length > 1 && (t = Array.prototype.slice.call(arguments, 0)); var e = {}; return l(t, "object") && !l(t, "array") ? e = t : null != t && (e = { points: t }), this.el("polyline", e) }, a.polygon = function(t) { arguments.length > 1 && (t = Array.prototype.slice.call(arguments, 0)); var e = {}; return l(t, "object") && !l(t, "array") ? e = t : null != t && (e = { points: t }), this.el("polygon", e) },
                function() {
                    function i() { return this.selectAll("stop") }

                    function r(t, e) { var i = h("stop"),
                            r = { offset: +e + "%" };
                        t = n.color(t), r["stop-color"] = t.hex, t.opacity < 1 && (r["stop-opacity"] = t.opacity), h(i, r); for (var s, o = this.stops(), a = 0; a < o.length; a++) { if (parseFloat(o[a].attr("offset")) > e) { this.node.insertBefore(i, o[a].node), s = !0; break } } return s || this.node.appendChild(i), this }

                    function s() { if ("linearGradient" == this.type) { var t = h(this.node, "x1") || 0,
                                e = h(this.node, "x2") || 1,
                                i = h(this.node, "y1") || 0,
                                r = h(this.node, "y2") || 0; return n._.box(t, i, math.abs(e - t), math.abs(r - i)) } var s = this.node.cx || .5,
                            o = this.node.cy || .5,
                            a = this.node.r || 0; return n._.box(s - a, o - a, 2 * a, 2 * a) }

                    function o(t) { var i = t,
                            r = this.stops(); if ("string" == typeof t && (i = e("snap.util.grad.parse", null, "l(0,0,0,1)" + t).firstDefined().stops), n.is(i, "array")) { for (var s = 0; s < r.length; s++)
                                if (i[s]) { var o = n.color(i[s].color),
                                        a = { offset: i[s].offset + "%" };
                                    a["stop-color"] = o.hex, o.opacity < 1 && (a["stop-opacity"] = o.opacity), r[s].attr(a) } else r[s].remove();
                            for (s = r.length; s < i.length; s++) this.addStop(i[s].color, i[s].offset); return this } }

                    function l(t, n) { var i, r = e("snap.util.grad.parse", null, n).firstDefined(); if (!r) return null;
                        r.params.unshift(t), i = "l" == r.type.toLowerCase() ? u.apply(0, r.params) : c.apply(0, r.params), r.type != r.type.toLowerCase() && h(i.node, { gradientUnits: "userSpaceOnUse" }); for (var s = r.stops, o = s.length, a = 0; o > a; a++) { var l = s[a];
                            i.addStop(l.color, l.offset) } return i }

                    function u(t, e, a, l, u) { var c = n._.make("linearGradient", t); return c.stops = i, c.addStop = r, c.getBBox = s, c.setStops = o, null != e && h(c.node, { x1: e, y1: a, x2: l, y2: u }), c }

                    function c(t, e, o, a, l, u) { var c = n._.make("radialGradient", t); return c.stops = i, c.addStop = r, c.getBBox = s, null != e && h(c.node, { cx: e, cy: o, r: a }), null != l && null != u && h(c.node, { fx: l, fy: u }), c } var h = n._.$;
                    a.gradient = function(t) { return l(this.defs, t) }, a.gradientLinear = function(t, e, n, i) { return u(this.defs, t, e, n, i) }, a.gradientRadial = function(t, e, n, i, r) { return c(this.defs, t, e, n, i, r) }, a.toString = function() { var t, e = this.node.ownerDocument,
                            i = e.createDocumentFragment(),
                            r = e.createElement("div"),
                            s = this.node.cloneNode(!0); return i.appendChild(r), r.appendChild(s), n._.$(s, { xmlns: "http://www.w3.org/2000/svg" }), t = r.innerHTML, i.removeChild(i.firstChild), t }, a.toDataURL = function() { return t && t.btoa ? "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(this))) : void 0 }, a.clear = function() { for (var t, e = this.node.firstChild; e;) t = e.nextSibling, "defs" != e.tagName ? e.parentNode.removeChild(e) : a.clear.call({ node: e }), e = t } }() }), i.plugin(function(t, e, n, i) {
            function r(t) { var e = r.ps = r.ps || {}; return e[t] ? e[t].sleep = 100 : e[t] = { sleep: 100 }, setTimeout(function() { for (var n in e) e[L](n) && n != t && !--e[n].sleep && delete e[n] }), e[t] }

            function s(t, e, n, i) { return null == t && (t = e = n = i = 0), null == e && (e = t.y, n = t.width, i = t.height, t = t.x), { x: t, y: e, width: n, w: n, height: i, h: i, x2: t + n, y2: e + i, cx: t + n / 2, cy: e + i / 2, r1: q.min(n, i) / 2, r2: q.max(n, i) / 2, r0: q.sqrt(n * n + i * i) / 2, path: C(t, e, n, i), vb: [t, e, n, i].join(" ") } }

            function o() { return this.join(",").replace(z, "$1") }

            function a(t) { var e = j(t); return e.toString = o, e }

            function l(t, e, n, i, r, s, o, a, l) { return null == l ? g(t, e, n, i, r, s, o, a) : c(t, e, n, i, r, s, o, a, m(t, e, n, i, r, s, o, a, l)) }

            function u(n, i) {
                function r(t) { return +(+t).toFixed(3) } return t._.cacher(function(t, s, o) { t instanceof e && (t = t.attr("d")), t = F(t); for (var a, u, h, p, d, f = "", g = {}, m = 0, v = 0, y = t.length; y > v; v++) { if (h = t[v], "M" == h[0]) a = +h[1], u = +h[2];
                        else { if (p = l(a, u, h[1], h[2], h[3], h[4], h[5], h[6]), m + p > s) { if (i && !g.start) { if (d = l(a, u, h[1], h[2], h[3], h[4], h[5], h[6], s - m), f += ["C" + r(d.start.x), r(d.start.y), r(d.m.x), r(d.m.y), r(d.x), r(d.y)], o) return f;
                                    g.start = f, f = ["M" + r(d.x), r(d.y) + "C" + r(d.n.x), r(d.n.y), r(d.end.x), r(d.end.y), r(h[5]), r(h[6])].join(), m += p, a = +h[5], u = +h[6]; continue } if (!n && !i) return d = l(a, u, h[1], h[2], h[3], h[4], h[5], h[6], s - m) }
                            m += p, a = +h[5], u = +h[6] }
                        f += h.shift() + h } return g.end = f, d = n ? m : i ? g : c(a, u, h[0], h[1], h[2], h[3], h[4], h[5], 1) }, null, t._.clone) }

            function c(t, e, n, i, r, s, o, a, l) { var u = 1 - l,
                    c = X(u, 3),
                    h = X(u, 2),
                    p = l * l,
                    d = p * l,
                    f = c * t + 3 * h * l * n + 3 * u * l * l * r + d * o,
                    g = c * e + 3 * h * l * i + 3 * u * l * l * s + d * a,
                    m = t + 2 * l * (n - t) + p * (r - 2 * n + t),
                    v = e + 2 * l * (i - e) + p * (s - 2 * i + e),
                    y = n + 2 * l * (r - n) + p * (o - 2 * r + n),
                    _ = i + 2 * l * (s - i) + p * (a - 2 * s + i); return { x: f, y: g, m: { x: m, y: v }, n: { x: y, y: _ }, start: { x: u * t + l * n, y: u * e + l * i }, end: { x: u * r + l * o, y: u * s + l * a }, alpha: 90 - 180 * q.atan2(m - y, v - _) / I } }

            function h(e, n, i, r, o, a, l, u) { t.is(e, "array") || (e = [e, n, i, r, o, a, l, u]); var c = O.apply(null, e); return s(c.min.x, c.min.y, c.max.x - c.min.x, c.max.y - c.min.y) }

            function p(t, e, n) { return e >= t.x && e <= t.x + t.width && n >= t.y && n <= t.y + t.height }

            function d(t, e) { return t = s(t), e = s(e), p(e, t.x, t.y) || p(e, t.x2, t.y) || p(e, t.x, t.y2) || p(e, t.x2, t.y2) || p(t, e.x, e.y) || p(t, e.x2, e.y) || p(t, e.x, e.y2) || p(t, e.x2, e.y2) || (t.x < e.x2 && t.x > e.x || e.x < t.x2 && e.x > t.x) && (t.y < e.y2 && t.y > e.y || e.y < t.y2 && e.y > t.y) }

            function f(t, e, n, i, r) { return t * (t * (-3 * e + 9 * n - 9 * i + 3 * r) + 6 * e - 12 * n + 6 * i) - 3 * e + 3 * n }

            function g(t, e, n, i, r, s, o, a, l) { null == l && (l = 1), l = l > 1 ? 1 : 0 > l ? 0 : l; for (var u = l / 2, c = [-.1252, .1252, -.3678, .3678, -.5873, .5873, -.7699, .7699, -.9041, .9041, -.9816, .9816], h = [.2491, .2491, .2335, .2335, .2032, .2032, .1601, .1601, .1069, .1069, .0472, .0472], p = 0, d = 0; 12 > d; d++) { var g = u * c[d] + u,
                        m = f(g, t, n, r, o),
                        v = f(g, e, i, s, a),
                        y = m * m + v * v;
                    p += h[d] * q.sqrt(y) } return u * p }

            function m(t, e, n, i, r, s, o, a, l) { if (!(0 > l || g(t, e, n, i, r, s, o, a) < l)) { var u, c = .5,
                        h = 1 - c; for (u = g(t, e, n, i, r, s, o, a, h); U(u - l) > .01;) c /= 2, h += (l > u ? 1 : -1) * c, u = g(t, e, n, i, r, s, o, a, h); return h } }

            function v(t, e, n, i, r, s, o, a) { if (!(W(t, n) < H(r, o) || H(t, n) > W(r, o) || W(e, i) < H(s, a) || H(e, i) > W(s, a))) { var l = (t * i - e * n) * (r - o) - (t - n) * (r * a - s * o),
                        u = (t * i - e * n) * (s - a) - (e - i) * (r * a - s * o),
                        c = (t - n) * (s - a) - (e - i) * (r - o); if (c) { var h = l / c,
                            p = u / c,
                            d = +h.toFixed(2),
                            f = +p.toFixed(2); if (!(d < +H(t, n).toFixed(2) || d > +W(t, n).toFixed(2) || d < +H(r, o).toFixed(2) || d > +W(r, o).toFixed(2) || f < +H(e, i).toFixed(2) || f > +W(e, i).toFixed(2) || f < +H(s, a).toFixed(2) || f > +W(s, a).toFixed(2))) return { x: h, y: p } } } }

            function y(t, e, n) { if (!d(h(t), h(e))) return n ? 0 : []; for (var i = g.apply(0, t), r = g.apply(0, e), s = ~~(i / 8), o = ~~(r / 8), a = [], l = [], u = {}, p = n ? 0 : [], f = 0; s + 1 > f; f++) { var m = c.apply(0, t.concat(f / s));
                    a.push({ x: m.x, y: m.y, t: f / s }) } for (f = 0; o + 1 > f; f++) m = c.apply(0, e.concat(f / o)), l.push({ x: m.x, y: m.y, t: f / o }); for (f = 0; s > f; f++)
                    for (var y = 0; o > y; y++) { var _ = a[f],
                            x = a[f + 1],
                            b = l[y],
                            w = l[y + 1],
                            T = U(x.x - _.x) < .001 ? "y" : "x",
                            C = U(w.x - b.x) < .001 ? "y" : "x",
                            S = v(_.x, _.y, x.x, x.y, b.x, b.y, w.x, w.y); if (S) { if (u[S.x.toFixed(4)] == S.y.toFixed(4)) continue;
                            u[S.x.toFixed(4)] = S.y.toFixed(4); var k = _.t + U((S[T] - _[T]) / (x[T] - _[T])) * (x.t - _.t),
                                A = b.t + U((S[C] - b[C]) / (w[C] - b[C])) * (w.t - b.t);
                            k >= 0 && 1 >= k && A >= 0 && 1 >= A && (n ? p++ : p.push({ x: S.x, y: S.y, t1: k, t2: A })) } }
                return p }

            function _(t, e) { return b(t, e) }

            function x(t, e) { return b(t, e, 1) }

            function b(t, e, n) { t = F(t), e = F(e); for (var i, r, s, o, a, l, u, c, h, p, d = n ? 0 : [], f = 0, g = t.length; g > f; f++) { var m = t[f]; if ("M" == m[0]) i = a = m[1], r = l = m[2];
                    else { "C" == m[0] ? (h = [i, r].concat(m.slice(1)), i = h[6], r = h[7]) : (h = [i, r, i, r, a, l, a, l], i = a, r = l); for (var v = 0, _ = e.length; _ > v; v++) { var x = e[v]; if ("M" == x[0]) s = u = x[1], o = c = x[2];
                            else { "C" == x[0] ? (p = [s, o].concat(x.slice(1)), s = p[6], o = p[7]) : (p = [s, o, s, o, u, c, u, c], s = u, o = c); var b = y(h, p, n); if (n) d += b;
                                else { for (var w = 0, T = b.length; T > w; w++) b[w].segment1 = f, b[w].segment2 = v, b[w].bez1 = h, b[w].bez2 = p;
                                    d = d.concat(b) } } } } } return d }

            function w(t, e, n) { var i = T(t); return p(i, e, n) && b(t, [
                    ["M", e, n],
                    ["H", i.x2 + 10]
                ], 1) % 2 == 1 }

            function T(t) { var e = r(t); if (e.bbox) return j(e.bbox); if (!t) return s();
                t = F(t); for (var n, i = 0, o = 0, a = [], l = [], u = 0, c = t.length; c > u; u++)
                    if (n = t[u], "M" == n[0]) i = n[1], o = n[2], a.push(i), l.push(o);
                    else { var h = O(i, o, n[1], n[2], n[3], n[4], n[5], n[6]);
                        a = a.concat(h.min.x, h.max.x), l = l.concat(h.min.y, h.max.y), i = n[5], o = n[6] }
                var p = H.apply(0, a),
                    d = H.apply(0, l),
                    f = W.apply(0, a),
                    g = W.apply(0, l),
                    m = s(p, d, f - p, g - d); return e.bbox = j(m), m }

            function C(t, e, n, i, r) { if (r) return [
                    ["M", +t + +r, e],
                    ["l", n - 2 * r, 0],
                    ["a", r, r, 0, 0, 1, r, r],
                    ["l", 0, i - 2 * r],
                    ["a", r, r, 0, 0, 1, -r, r],
                    ["l", 2 * r - n, 0],
                    ["a", r, r, 0, 0, 1, -r, -r],
                    ["l", 0, 2 * r - i],
                    ["a", r, r, 0, 0, 1, r, -r],
                    ["z"]
                ]; var s = [
                    ["M", t, e],
                    ["l", n, 0],
                    ["l", 0, i],
                    ["l", -n, 0],
                    ["z"]
                ]; return s.toString = o, s }

            function S(t, e, n, i, r) { if (null == r && null == i && (i = n), t = +t, e = +e, n = +n, i = +i, null != r) var s = Math.PI / 180,
                    a = t + n * Math.cos(-i * s),
                    l = t + n * Math.cos(-r * s),
                    u = e + n * Math.sin(-i * s),
                    c = e + n * Math.sin(-r * s),
                    h = [
                        ["M", a, u],
                        ["A", n, n, 0, +(r - i > 180), 0, l, c]
                    ];
                else h = [
                    ["M", t, e],
                    ["m", 0, -i],
                    ["a", n, i, 0, 1, 1, 0, 2 * i],
                    ["a", n, i, 0, 1, 1, 0, -2 * i],
                    ["z"]
                ]; return h.toString = o, h }

            function k(e) { var n = r(e),
                    i = String.prototype.toLowerCase; if (n.rel) return a(n.rel);
                t.is(e, "array") && t.is(e && e[0], "array") || (e = t.parsePathString(e)); var s = [],
                    l = 0,
                    u = 0,
                    c = 0,
                    h = 0,
                    p = 0; "M" == e[0][0] && (l = e[0][1], u = e[0][2], c = l, h = u, p++, s.push(["M", l, u])); for (var d = p, f = e.length; f > d; d++) { var g = s[d] = [],
                        m = e[d]; if (m[0] != i.call(m[0])) switch (g[0] = i.call(m[0]), g[0]) {
                        case "a":
                            g[1] = m[1], g[2] = m[2], g[3] = m[3], g[4] = m[4], g[5] = m[5], g[6] = +(m[6] - l).toFixed(3), g[7] = +(m[7] - u).toFixed(3); break;
                        case "v":
                            g[1] = +(m[1] - u).toFixed(3); break;
                        case "m":
                            c = m[1], h = m[2];
                        default:
                            for (var v = 1, y = m.length; y > v; v++) g[v] = +(m[v] - (v % 2 ? l : u)).toFixed(3) } else { g = s[d] = [], "m" == m[0] && (c = m[1] + l, h = m[2] + u); for (var _ = 0, x = m.length; x > _; _++) s[d][_] = m[_] }
                    var b = s[d].length; switch (s[d][0]) {
                        case "z":
                            l = c, u = h; break;
                        case "h":
                            l += +s[d][b - 1]; break;
                        case "v":
                            u += +s[d][b - 1]; break;
                        default:
                            l += +s[d][b - 2], u += +s[d][b - 1] } } return s.toString = o, n.rel = a(s), s }

            function A(e) { var n = r(e); if (n.abs) return a(n.abs); if (R(e, "array") && R(e && e[0], "array") || (e = t.parsePathString(e)), !e || !e.length) return [
                    ["M", 0, 0]
                ]; var i, s = [],
                    l = 0,
                    u = 0,
                    c = 0,
                    h = 0,
                    p = 0; "M" == e[0][0] && (l = +e[0][1], u = +e[0][2], c = l, h = u, p++, s[0] = ["M", l, u]); for (var d, f, g = 3 == e.length && "M" == e[0][0] && "R" == e[1][0].toUpperCase() && "Z" == e[2][0].toUpperCase(), m = p, v = e.length; v > m; m++) { if (s.push(d = []), f = e[m], (i = f[0]) != i.toUpperCase()) switch (d[0] = i.toUpperCase(), d[0]) {
                            case "A":
                                d[1] = f[1], d[2] = f[2], d[3] = f[3], d[4] = f[4], d[5] = f[5], d[6] = +f[6] + l, d[7] = +f[7] + u; break;
                            case "V":
                                d[1] = +f[1] + u; break;
                            case "H":
                                d[1] = +f[1] + l; break;
                            case "R":
                                for (var y = [l, u].concat(f.slice(1)), _ = 2, x = y.length; x > _; _++) y[_] = +y[_] + l, y[++_] = +y[_] + u;
                                s.pop(), s = s.concat(N(y, g)); break;
                            case "O":
                                s.pop(), y = S(l, u, f[1], f[2]), y.push(y[0]), s = s.concat(y); break;
                            case "U":
                                s.pop(), s = s.concat(S(l, u, f[1], f[2], f[3])), d = ["U"].concat(s[s.length - 1].slice(-2)); break;
                            case "M":
                                c = +f[1] + l, h = +f[2] + u;
                            default:
                                for (_ = 1, x = f.length; x > _; _++) d[_] = +f[_] + (_ % 2 ? l : u) } else if ("R" == i) y = [l, u].concat(f.slice(1)), s.pop(), s = s.concat(N(y, g)), d = ["R"].concat(f.slice(-2));
                        else if ("O" == i) s.pop(), y = S(l, u, f[1], f[2]), y.push(y[0]), s = s.concat(y);
                    else if ("U" == i) s.pop(), s = s.concat(S(l, u, f[1], f[2], f[3])), d = ["U"].concat(s[s.length - 1].slice(-2));
                    else
                        for (var b = 0, w = f.length; w > b; b++) d[b] = f[b]; if ("O" != (i = i.toUpperCase())) switch (d[0]) {
                        case "Z":
                            l = +c, u = +h; break;
                        case "H":
                            l = d[1]; break;
                        case "V":
                            u = d[1]; break;
                        case "M":
                            c = d[d.length - 2], h = d[d.length - 1];
                        default:
                            l = d[d.length - 2], u = d[d.length - 1] } } return s.toString = o, n.abs = a(s), s }

            function E(t, e, n, i) { return [t, e, n, i, n, i] }

            function P(t, e, n, i, r, s) { var o = 1 / 3,
                    a = 2 / 3; return [o * t + a * n, o * e + a * i, o * r + a * n, o * s + a * i, r, s] }

            function D(e, n, i, r, s, o, a, l, u, c) { var h, p = 120 * I / 180,
                    d = I / 180 * (+s || 0),
                    f = [],
                    g = t._.cacher(function(t, e, n) { return { x: t * q.cos(n) - e * q.sin(n), y: t * q.sin(n) + e * q.cos(n) } }); if (!i || !r) return [e, n, l, u, l, u]; if (c) C = c[0], S = c[1], w = c[2], T = c[3];
                else { h = g(e, n, -d), e = h.x, n = h.y, h = g(l, u, -d), l = h.x, u = h.y; var m = (q.cos(I / 180 * s), q.sin(I / 180 * s), (e - l) / 2),
                        v = (n - u) / 2,
                        y = m * m / (i * i) + v * v / (r * r);
                    y > 1 && (y = q.sqrt(y), i *= y, r *= y); var _ = i * i,
                        x = r * r,
                        b = (o == a ? -1 : 1) * q.sqrt(U((_ * x - _ * v * v - x * m * m) / (_ * v * v + x * m * m))),
                        w = b * i * v / r + (e + l) / 2,
                        T = b * -r * m / i + (n + u) / 2,
                        C = q.asin(((n - T) / r).toFixed(9)),
                        S = q.asin(((u - T) / r).toFixed(9));
                    C = w > e ? I - C : C, S = w > l ? I - S : S, 0 > C && (C = 2 * I + C), 0 > S && (S = 2 * I + S), a && C > S && (C -= 2 * I), !a && S > C && (S -= 2 * I) } var k = S - C; if (U(k) > p) { var A = S,
                        E = l,
                        P = u;
                    S = C + p * (a && S > C ? 1 : -1), l = w + i * q.cos(S), u = T + r * q.sin(S), f = D(l, u, i, r, s, 0, a, E, P, [S, A, w, T]) }
                k = S - C; var O = q.cos(C),
                    F = q.sin(C),
                    M = q.cos(S),
                    N = q.sin(S),
                    $ = q.tan(k / 4),
                    R = 4 / 3 * i * $,
                    j = 4 / 3 * r * $,
                    L = [e, n],
                    z = [e + R * F, n - j * O],
                    B = [l + R * N, u - j * M],
                    H = [l, u]; if (z[0] = 2 * L[0] - z[0], z[1] = 2 * L[1] - z[1], c) return [z, B, H].concat(f);
                f = [z, B, H].concat(f).join().split(","); for (var W = [], X = 0, V = f.length; V > X; X++) W[X] = X % 2 ? g(f[X - 1], f[X], d).y : g(f[X], f[X + 1], d).x; return W }

            function O(t, e, n, i, r, s, o, a) { for (var l, u, c, h, p, d, f, g, m = [], v = [
                        [],
                        []
                    ], y = 0; 2 > y; ++y)
                    if (0 == y ? (u = 6 * t - 12 * n + 6 * r, l = -3 * t + 9 * n - 9 * r + 3 * o, c = 3 * n - 3 * t) : (u = 6 * e - 12 * i + 6 * s, l = -3 * e + 9 * i - 9 * s + 3 * a, c = 3 * i - 3 * e), U(l) < 1e-12) { if (U(u) < 1e-12) continue;
                        (h = -c / u) > 0 && 1 > h && m.push(h) } else f = u * u - 4 * c * l, g = q.sqrt(f), 0 > f || (p = (-u + g) / (2 * l), p > 0 && 1 > p && m.push(p), (d = (-u - g) / (2 * l)) > 0 && 1 > d && m.push(d));
                for (var _, x = m.length, b = x; x--;) h = m[x], _ = 1 - h, v[0][x] = _ * _ * _ * t + 3 * _ * _ * h * n + 3 * _ * h * h * r + h * h * h * o, v[1][x] = _ * _ * _ * e + 3 * _ * _ * h * i + 3 * _ * h * h * s + h * h * h * a; return v[0][b] = t, v[1][b] = e, v[0][b + 1] = o, v[1][b + 1] = a, v[0].length = v[1].length = b + 2, { min: { x: H.apply(0, v[0]), y: H.apply(0, v[1]) }, max: { x: W.apply(0, v[0]), y: W.apply(0, v[1]) } } }

            function F(t, e) { var n = !e && r(t); if (!e && n.curve) return a(n.curve); for (var i = A(t), s = e && A(e), o = { x: 0, y: 0, bx: 0, by: 0, X: 0, Y: 0, qx: null, qy: null }, l = { x: 0, y: 0, bx: 0, by: 0, X: 0, Y: 0, qx: null, qy: null }, u = (function(t, e, n) { var i, r; if (!t) return ["C", e.x, e.y, e.x, e.y, e.x, e.y]; switch (!(t[0] in { T: 1, Q: 1 }) && (e.qx = e.qy = null), t[0]) {
                            case "M":
                                e.X = t[1], e.Y = t[2]; break;
                            case "A":
                                t = ["C"].concat(D.apply(0, [e.x, e.y].concat(t.slice(1)))); break;
                            case "S":
                                "C" == n || "S" == n ? (i = 2 * e.x - e.bx, r = 2 * e.y - e.by) : (i = e.x, r = e.y), t = ["C", i, r].concat(t.slice(1)); break;
                            case "T":
                                "Q" == n || "T" == n ? (e.qx = 2 * e.x - e.qx, e.qy = 2 * e.y - e.qy) : (e.qx = e.x, e.qy = e.y), t = ["C"].concat(P(e.x, e.y, e.qx, e.qy, t[1], t[2])); break;
                            case "Q":
                                e.qx = t[1], e.qy = t[2], t = ["C"].concat(P(e.x, e.y, t[1], t[2], t[3], t[4])); break;
                            case "L":
                                t = ["C"].concat(E(e.x, e.y, t[1], t[2])); break;
                            case "H":
                                t = ["C"].concat(E(e.x, e.y, t[1], e.y)); break;
                            case "V":
                                t = ["C"].concat(E(e.x, e.y, e.x, t[1])); break;
                            case "Z":
                                t = ["C"].concat(E(e.x, e.y, e.X, e.Y)) } return t }), c = function(t, e) { if (t[e].length > 7) { t[e].shift(); for (var n = t[e]; n.length;) p[e] = "A", s && (d[e] = "A"), t.splice(e++, 0, ["C"].concat(n.splice(0, 6)));
                            t.splice(e, 1), v = W(i.length, s && s.length || 0) } }, h = function(t, e, n, r, o) { t && e && "M" == t[o][0] && "M" != e[o][0] && (e.splice(o, 0, ["M", r.x, r.y]), n.bx = 0, n.by = 0, n.x = t[o][1], n.y = t[o][2], v = W(i.length, s && s.length || 0)) }, p = [], d = [], f = "", g = "", m = 0, v = W(i.length, s && s.length || 0); v > m; m++) { i[m] && (f = i[m][0]), "C" != f && (p[m] = f, m && (g = p[m - 1])), i[m] = u(i[m], o, g), "A" != p[m] && "C" == f && (p[m] = "C"), c(i, m), s && (s[m] && (f = s[m][0]), "C" != f && (d[m] = f, m && (g = d[m - 1])), s[m] = u(s[m], l, g), "A" != d[m] && "C" == f && (d[m] = "C"), c(s, m)), h(i, s, o, l, m), h(s, i, l, o, m); var y = i[m],
                        _ = s && s[m],
                        x = y.length,
                        b = s && _.length;
                    o.x = y[x - 2], o.y = y[x - 1], o.bx = B(y[x - 4]) || o.x, o.by = B(y[x - 3]) || o.y, l.bx = s && (B(_[b - 4]) || l.x), l.by = s && (B(_[b - 3]) || l.y), l.x = s && _[b - 2], l.y = s && _[b - 1] } return s || (n.curve = a(i)), s ? [i, s] : i }

            function M(t, e) { if (!e) return t; var n, i, r, s, o, a, l; for (t = F(t), r = 0, o = t.length; o > r; r++)
                    for (l = t[r], s = 1, a = l.length; a > s; s += 2) n = e.x(l[s], l[s + 1]), i = e.y(l[s], l[s + 1]), l[s] = n, l[s + 1] = i; return t }

            function N(t, e) { for (var n = [], i = 0, r = t.length; r - 2 * !e > i; i += 2) { var s = [{ x: +t[i - 2], y: +t[i - 1] }, { x: +t[i], y: +t[i + 1] }, { x: +t[i + 2], y: +t[i + 3] }, { x: +t[i + 4], y: +t[i + 5] }];
                    e ? i ? r - 4 == i ? s[3] = { x: +t[0], y: +t[1] } : r - 2 == i && (s[2] = { x: +t[0], y: +t[1] }, s[3] = { x: +t[2], y: +t[3] }) : s[0] = { x: +t[r - 2], y: +t[r - 1] } : r - 4 == i ? s[3] = s[2] : i || (s[0] = { x: +t[i], y: +t[i + 1] }), n.push(["C", (-s[0].x + 6 * s[1].x + s[2].x) / 6, (-s[0].y + 6 * s[1].y + s[2].y) / 6, (s[1].x + 6 * s[2].x - s[3].x) / 6, (s[1].y + 6 * s[2].y - s[3].y) / 6, s[2].x, s[2].y]) } return n }
            var $ = e.prototype,
                R = t.is,
                j = t._.clone,
                L = "hasOwnProperty",
                z = /,?([a-z]),?/gi,
                B = parseFloat,
                q = Math,
                I = q.PI,
                H = q.min,
                W = q.max,
                X = q.pow,
                U = q.abs,
                V = u(1),
                Y = u(),
                G = u(0, 1),
                Q = t._unit2px,
                Z = {
                    path: function(t) { return t.attr("path") },
                    circle: function(t) { var e = Q(t); return S(e.cx, e.cy, e.r) },
                    ellipse: function(t) { var e = Q(t); return S(e.cx || 0, e.cy || 0, e.rx, e.ry) },
                    rect: function(t) { var e = Q(t); return C(e.x || 0, e.y || 0, e.width, e.height, e.rx, e.ry) },
                    image: function(t) { var e = Q(t); return C(e.x || 0, e.y || 0, e.width, e.height) },
                    line: function(t) { return "M" + [t.attr("x1") || 0, t.attr("y1") || 0, t.attr("x2"), t.attr("y2")] },
                    polyline: function(t) { return "M" + t.attr("points") },
                    polygon: function(t) { return "M" + t.attr("points") + "z" },
                    deflt: function(t) {
                        var e = t.node.getBBox();
                        return C(e.x, e.y, e.width, e.height)
                    }
                };
            t.path = r, t.path.getTotalLength = V, t.path.getPointAtLength = Y, t.path.getSubpath = function(t, e, n) { if (this.getTotalLength(t) - n < 1e-6) return G(t, e).end; var i = G(t, n, 1); return e ? G(i, e).end : i }, $.getTotalLength = function() { return this.node.getTotalLength ? this.node.getTotalLength() : void 0 }, $.getPointAtLength = function(t) { return Y(this.attr("d"), t) }, $.getSubpath = function(e, n) { return t.path.getSubpath(this.attr("d"), e, n) }, t._.box = s, t.path.findDotsAtSegment = c, t.path.bezierBBox = h, t.path.isPointInsideBBox = p, t.closest = function(e, n, i, r) { for (var o = 100, a = s(e - o / 2, n - o / 2, o, o), l = [], u = i[0].hasOwnProperty("x") ? function(t) { return { x: i[t].x, y: i[t].y } } : function(t) { return { x: i[t], y: r[t] } }, c = 0; 1e6 >= o && !c;) { for (var h = 0, d = i.length; d > h; h++) { var f = u(h); if (p(a, f.x, f.y)) { c++, l.push(f); break } }
                    c || (o *= 2, a = s(e - o / 2, n - o / 2, o, o)) } if (1e6 != o) { var g, m = 1 / 0; for (h = 0, d = l.length; d > h; h++) { var v = t.len(e, n, l[h].x, l[h].y);
                        m > v && (m = v, l[h].len = v, g = l[h]) } return g } }, t.path.isBBoxIntersect = d, t.path.intersection = _, t.path.intersectionNumber = x, t.path.isPointInside = w, t.path.getBBox = T, t.path.get = Z, t.path.toRelative = k, t.path.toAbsolute = A, t.path.toCubic = F, t.path.map = M, t.path.toString = o, t.path.clone = a
        }), i.plugin(function(t, i, r, s) { var o = Math.max,
                a = Math.min,
                l = function(t) { if (this.items = [], this.bindings = {}, this.length = 0, this.type = "set", t)
                        for (var e = 0, n = t.length; n > e; e++) t[e] && (this[this.items.length] = this.items[this.items.length] = t[e], this.length++) },
                u = l.prototype;
            u.push = function() { for (var t, e, n = 0, i = arguments.length; i > n; n++)(t = arguments[n]) && (e = this.items.length, this[e] = this.items[e] = t, this.length++); return this }, u.pop = function() { return this.length && delete this[this.length--], this.items.pop() }, u.forEach = function(t, e) { for (var n = 0, i = this.items.length; i > n; n++)
                    if (!1 === t.call(e, this.items[n], n)) return this;
                return this }, u.animate = function(i, r, s, o) { "function" != typeof s || s.length || (o = s, s = n.linear), i instanceof t._.Animation && (o = i.callback, s = i.easing, r = s.dur, i = i.attr); var a = arguments; if (t.is(i, "array") && t.is(a[a.length - 1], "array")) var l = !0; var u, c = function() { u ? this.b = u : u = this.b },
                    h = 0,
                    p = this,
                    d = o && function() {++h == p.length && o.call(this) }; return this.forEach(function(t, n) { e.once("snap.animcreated." + t.id, c), l ? a[n] && t.animate.apply(t, a[n]) : t.animate(i, r, s, d) }) }, u.remove = function() { for (; this.length;) this.pop().remove(); return this }, u.bind = function(t, e, n) { var i = {}; if ("function" == typeof e) this.bindings[t] = e;
                else { var r = n || t;
                    this.bindings[t] = function(t) { i[r] = t, e.attr(i) } } return this }, u.attr = function(t) { var e = {}; for (var n in t) this.bindings[n] ? this.bindings[n](t[n]) : e[n] = t[n]; for (var i = 0, r = this.items.length; r > i; i++) this.items[i].attr(e); return this }, u.clear = function() { for (; this.length;) this.pop() }, u.splice = function(t, e, n) { t = 0 > t ? o(this.length + t, 0) : t, e = o(0, a(this.length - t, e)); var i, r = [],
                    s = [],
                    u = []; for (i = 2; i < arguments.length; i++) u.push(arguments[i]); for (i = 0; e > i; i++) s.push(this[t + i]); for (; i < this.length - t; i++) r.push(this[t + i]); var c = u.length; for (i = 0; i < c + r.length; i++) this.items[t + i] = this[t + i] = c > i ? u[i] : r[i - c]; for (i = this.items.length = this.length -= e - c; this[i];) delete this[i++]; return new l(s) }, u.exclude = function(t) { for (var e = 0, n = this.length; n > e; e++)
                    if (this[e] == t) return this.splice(e, 1), !0;
                return !1 }, u.insertAfter = function(t) { for (var e = this.items.length; e--;) this.items[e].insertAfter(t); return this }, u.getBBox = function() { for (var t = [], e = [], n = [], i = [], r = this.items.length; r--;)
                    if (!this.items[r].removed) { var s = this.items[r].getBBox();
                        t.push(s.x), e.push(s.y), n.push(s.x + s.width), i.push(s.y + s.height) }
                return t = a.apply(0, t), e = a.apply(0, e), n = o.apply(0, n), i = o.apply(0, i), { x: t, y: e, x2: n, y2: i, width: n - t, height: i - e, cx: t + (n - t) / 2, cy: e + (i - e) / 2 } }, u.clone = function(t) { t = new l; for (var e = 0, n = this.items.length; n > e; e++) t.push(this.items[e].clone()); return t }, u.toString = function() { return "Snap‘s set" }, u.type = "set", t.Set = l, t.set = function() { var t = new l; return arguments.length && t.push.apply(t, Array.prototype.slice.call(arguments, 0)), t } }), i.plugin(function(t, n, i, r) {
            function s(t) { var e = t[0]; switch (e.toLowerCase()) {
                    case "t":
                        return [e, 0, 0];
                    case "m":
                        return [e, 1, 0, 0, 1, 0, 0];
                    case "r":
                        return 4 == t.length ? [e, 0, t[2], t[3]] : [e, 0];
                    case "s":
                        return 5 == t.length ? [e, 1, 1, t[3], t[4]] : 3 == t.length ? [e, 1, 1] : [e, 1] } }

            function o(e, n, i) { e = e || new t.Matrix, n = n || new t.Matrix, e = t.parseTransformString(e.toTransformString()) || [], n = t.parseTransformString(n.toTransformString()) || []; for (var r, o, a, l, u = Math.max(e.length, n.length), c = [], d = [], f = 0; u > f; f++) { if (a = e[f] || s(n[f]), l = n[f] || s(a), a[0] != l[0] || "r" == a[0].toLowerCase() && (a[2] != l[2] || a[3] != l[3]) || "s" == a[0].toLowerCase() && (a[3] != l[3] || a[4] != l[4])) { e = t._.transform2matrix(e, i()), n = t._.transform2matrix(n, i()), c = [
                            ["m", e.a, e.b, e.c, e.d, e.e, e.f]
                        ], d = [
                            ["m", n.a, n.b, n.c, n.d, n.e, n.f]
                        ]; break } for (c[f] = [], d[f] = [], r = 0, o = Math.max(a.length, l.length); o > r; r++) r in a && (c[f][r] = a[r]), r in l && (d[f][r] = l[r]) } return { from: p(c), to: p(d), f: h(c) } }

            function a(t) { return t }

            function l(t) { return function(e) { return +e.toFixed(3) + t } }

            function u(t) { return t.join(" ") }

            function c(e) { return t.rgb(e[0], e[1], e[2], e[3]) }

            function h(t) { var e, n, i, r, s, o, a = 0,
                    l = []; for (e = 0, n = t.length; n > e; e++) { for (s = "[", o = ['"' + t[e][0] + '"'], i = 1, r = t[e].length; r > i; i++) o[i] = "val[" + a++ + "]";
                    s += o + "]", l[e] = s } return Function("val", "return Snap.path.toString.call([" + l + "])") }

            function p(t) { for (var e = [], n = 0, i = t.length; i > n; n++)
                    for (var r = 1, s = t[n].length; s > r; r++) e.push(t[n][r]); return e }

            function d(t) { return isFinite(t) }

            function f(e, n) { return !(!t.is(e, "array") || !t.is(n, "array")) && e.toString() == n.toString() } var g = {},
                m = /[%a-z]+$/i,
                v = String;
            g.stroke = g.fill = "colour", n.prototype.equal = function(t, n) { return e("snap.util.equal", this, t, n).firstDefined() }, e.on("snap.util.equal", function(e, n) { var i, r, s = v(this.attr(e) || ""),
                    y = this; if ("colour" == g[e]) return i = t.color(s), r = t.color(n), { from: [i.r, i.g, i.b, i.opacity], to: [r.r, r.g, r.b, r.opacity], f: c }; if ("viewBox" == e) return i = this.attr(e).vb.split(" ").map(Number), r = n.split(" ").map(Number), { from: i, to: r, f: u }; if ("transform" == e || "gradientTransform" == e || "patternTransform" == e) return "string" == typeof n && (n = v(n).replace(/\.{3}|\u2026/g, s)), s = this.matrix, n = t._.rgTransform.test(n) ? t._.transform2matrix(n, this.getBBox()) : t._.transform2matrix(t._.svgTransform2string(n), this.getBBox()), o(s, n, function() { return y.getBBox(1) }); if ("d" == e || "path" == e) return i = t.path.toCubic(s, n), { from: p(i[0]), to: p(i[1]), f: h(i[0]) }; if ("points" == e) return i = v(s).split(t._.separator), r = v(n).split(t._.separator), { from: i, to: r, f: function(t) { return t } }; if (d(s) && d(n)) return { from: parseFloat(s), to: parseFloat(n), f: a }; var _ = s.match(m),
                    x = v(n).match(m); return _ && f(_, x) ? { from: parseFloat(s), to: parseFloat(n), f: l(_) } : { from: this.asPX(e), to: this.asPX(e, n), f: a } }) }), i.plugin(function(t, n, i, r) { for (var s = n.prototype, o = ("createTouch" in r.doc), a = ["click", "dblclick", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "touchstart", "touchmove", "touchend", "touchcancel"], l = { mousedown: "touchstart", mousemove: "touchmove", mouseup: "touchend" }, u = (function(t, e) { var n = "y" == t ? "scrollTop" : "scrollLeft",
                        i = e && e.node ? e.node.ownerDocument : r.doc; return i[n in i.documentElement ? "documentElement" : "body"][n] }), c = function() { return this.originalEvent.preventDefault() }, h = function() { return this.originalEvent.stopPropagation() }, p = function(t, e, n, i) { var r = o && l[e] ? l[e] : e,
                        s = function(r) { var s = u("y", i),
                                a = u("x", i); if (o && l.hasOwnProperty(e))
                                for (var p = 0, d = r.targetTouches && r.targetTouches.length; d > p; p++)
                                    if (r.targetTouches[p].target == t || t.contains(r.targetTouches[p].target)) { var f = r;
                                        r = r.targetTouches[p], r.originalEvent = f, r.preventDefault = c, r.stopPropagation = h; break }
                            var g = r.clientX + a,
                                m = r.clientY + s; return n.call(i, r, g, m) }; return e !== r && t.addEventListener(e, s, !1), t.addEventListener(r, s, !1),
                        function() { return e !== r && t.removeEventListener(e, s, !1), t.removeEventListener(r, s, !1), !0 } }, d = [], f = function(t) { for (var n, i = t.clientX, r = t.clientY, s = u("y"), a = u("x"), l = d.length; l--;) { if (n = d[l], o) { for (var c, h = t.touches && t.touches.length; h--;)
                                if (c = t.touches[h], c.identifier == n.el._drag.id || n.el.node.contains(c.target)) { i = c.clientX, r = c.clientY, (t.originalEvent ? t.originalEvent : t).preventDefault(); break } } else t.preventDefault(); var p = n.el.node;
                        p.nextSibling, p.parentNode, p.style.display, i += a, r += s, e("snap.drag.move." + n.el.id, n.move_scope || n.el, i - n.el._drag.x, r - n.el._drag.y, i, r, t) } }, g = function(n) { t.unmousemove(f).unmouseup(g); for (var i, r = d.length; r--;) i = d[r], i.el._drag = {}, e("snap.drag.end." + i.el.id, i.end_scope || i.start_scope || i.move_scope || i.el, n), e.off("snap.drag.*." + i.el.id);
                    d = [] }, m = a.length; m--;) ! function(e) { t[e] = s[e] = function(n, i) { if (t.is(n, "function")) this.events = this.events || [], this.events.push({ name: e, f: n, unbind: p(this.node || document, e, n, i || this) });
                    else
                        for (var r = 0, s = this.events.length; s > r; r++)
                            if (this.events[r].name == e) try { this.events[r].f.call(this) } catch (t) {}
                            return this }, t["un" + e] = s["un" + e] = function(t) { for (var n = this.events || [], i = n.length; i--;)
                        if (n[i].name == e && (n[i].f == t || !t)) return n[i].unbind(), n.splice(i, 1), !n.length && delete this.events, this;
                    return this } }(a[m]);
            s.hover = function(t, e, n, i) { return this.mouseover(t, n).mouseout(e, i || n) }, s.unhover = function(t, e) { return this.unmouseover(t).unmouseout(e) }; var v = [];
            s.drag = function(n, i, r, s, o, a) {
                function l(l, u, h) {
                    (l.originalEvent || l).preventDefault(), c._drag.x = u, c._drag.y = h, c._drag.id = l.identifier, !d.length && t.mousemove(f).mouseup(g), d.push({ el: c, move_scope: s, start_scope: o, end_scope: a }), i && e.on("snap.drag.start." + c.id, i), n && e.on("snap.drag.move." + c.id, n), r && e.on("snap.drag.end." + c.id, r), e("snap.drag.start." + c.id, o || s || c, u, h, l) }

                function u(t, n, i) { e("snap.draginit." + c.id, c, t, n, i) } var c = this; if (!arguments.length) { var h; return c.drag(function(t, e) { this.attr({ transform: h + (h ? "T" : "t") + [t, e] }) }, function() { h = this.transform().local }) } return e.on("snap.draginit." + c.id, l), c._drag = {}, v.push({ el: c, start: l, init: u }), c.mousedown(u), c }, s.undrag = function() { for (var n = v.length; n--;) v[n].el == this && (this.unmousedown(v[n].init), v.splice(n, 1), e.unbind("snap.drag.*." + this.id), e.unbind("snap.draginit." + this.id)); return !v.length && t.unmousemove(f).unmouseup(g), this } }), i.plugin(function(t, n, i, r) { var s = (n.prototype, i.prototype),
                o = /^\s*url\((.+)\)/,
                a = String,
                l = t._.$;
            t.filter = {}, s.filter = function(e) { var i = this; "svg" != i.type && (i = i.paper); var r = t.parse(a(e)),
                    s = t._.id(),
                    o = (i.node.offsetWidth, i.node.offsetHeight, l("filter")); return l(o, { id: s, filterUnits: "userSpaceOnUse" }), o.appendChild(r.node), i.defs.appendChild(o), new n(o) }, e.on("snap.util.getattr.filter", function() { e.stop(); var n = l(this.node, "filter"); if (n) { var i = a(n).match(o); return i && t.select(i[1]) } }), e.on("snap.util.attr.filter", function(i) { if (i instanceof n && "filter" == i.type) { e.stop(); var r = i.node.id;
                    r || (l(i.node, { id: i.id }), r = i.id), l(this.node, { filter: t.url(r) }) }
                i && "none" != i || (e.stop(), this.node.removeAttribute("filter")) }), t.filter.blur = function(e, n) { null == e && (e = 2); var i = null == n ? e : [e, n]; return t.format('<feGaussianBlur stdDeviation="{def}"/>', { def: i }) }, t.filter.blur.toString = function() { return this() }, t.filter.shadow = function(e, n, i, r, s) { return null == s && (null == r ? (s = i, i = 4, r = "#000") : (s = r, r = i, i = 4)), null == i && (i = 4), null == s && (s = 1), null == e && (e = 0, n = 2), null == n && (n = e), r = t.color(r), t.format('<feGaussianBlur in="SourceAlpha" stdDeviation="{blur}"/><feOffset dx="{dx}" dy="{dy}" result="offsetblur"/><feFlood flood-color="{color}"/><feComposite in2="offsetblur" operator="in"/><feComponentTransfer><feFuncA type="linear" slope="{opacity}"/></feComponentTransfer><feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge>', { color: r, dx: e, dy: n, blur: i, opacity: s }) }, t.filter.shadow.toString = function() { return this() }, t.filter.grayscale = function(e) { return null == e && (e = 1), t.format('<feColorMatrix type="matrix" values="{a} {b} {c} 0 0 {d} {e} {f} 0 0 {g} {b} {h} 0 0 0 0 0 1 0"/>', { a: .2126 + .7874 * (1 - e), b: .7152 - .7152 * (1 - e), c: .0722 - .0722 * (1 - e), d: .2126 - .2126 * (1 - e), e: .7152 + .2848 * (1 - e), f: .0722 - .0722 * (1 - e), g: .2126 - .2126 * (1 - e), h: .0722 + .9278 * (1 - e) }) }, t.filter.grayscale.toString = function() { return this() }, t.filter.sepia = function(e) { return null == e && (e = 1), t.format('<feColorMatrix type="matrix" values="{a} {b} {c} 0 0 {d} {e} {f} 0 0 {g} {h} {i} 0 0 0 0 0 1 0"/>', { a: .393 + .607 * (1 - e), b: .769 - .769 * (1 - e), c: .189 - .189 * (1 - e), d: .349 - .349 * (1 - e), e: .686 + .314 * (1 - e), f: .168 - .168 * (1 - e), g: .272 - .272 * (1 - e), h: .534 - .534 * (1 - e), i: .131 + .869 * (1 - e) }) }, t.filter.sepia.toString = function() { return this() }, t.filter.saturate = function(e) { return null == e && (e = 1), t.format('<feColorMatrix type="saturate" values="{amount}"/>', { amount: 1 - e }) }, t.filter.saturate.toString = function() { return this() }, t.filter.hueRotate = function(e) { return e = e || 0, t.format('<feColorMatrix type="hueRotate" values="{angle}"/>', { angle: e }) }, t.filter.hueRotate.toString = function() { return this() }, t.filter.invert = function(e) { return null == e && (e = 1), t.format('<feComponentTransfer><feFuncR type="table" tableValues="{amount} {amount2}"/><feFuncG type="table" tableValues="{amount} {amount2}"/><feFuncB type="table" tableValues="{amount} {amount2}"/></feComponentTransfer>', { amount: e, amount2: 1 - e }) }, t.filter.invert.toString = function() { return this() }, t.filter.brightness = function(e) { return null == e && (e = 1), t.format('<feComponentTransfer><feFuncR type="linear" slope="{amount}"/><feFuncG type="linear" slope="{amount}"/><feFuncB type="linear" slope="{amount}"/></feComponentTransfer>', { amount: e }) }, t.filter.brightness.toString = function() { return this() }, t.filter.contrast = function(e) { return null == e && (e = 1), t.format('<feComponentTransfer><feFuncR type="linear" slope="{amount}" intercept="{amount2}"/><feFuncG type="linear" slope="{amount}" intercept="{amount2}"/><feFuncB type="linear" slope="{amount}" intercept="{amount2}"/></feComponentTransfer>', { amount: e, amount2: .5 - e / 2 }) }, t.filter.contrast.toString = function() { return this() } }), i.plugin(function(t, e, n, i, r) { var s = t._.box,
                o = t.is,
                a = /^[^a-z]*([tbmlrc])/i,
                l = function() { return "T" + this.dx + "," + this.dy };
            e.prototype.getAlign = function(t, e) { null == e && o(t, "string") && (e = t, t = null), t = t || this.paper; var n = t.getBBox ? t.getBBox() : s(t),
                    i = this.getBBox(),
                    r = {}; switch (e = e && e.match(a), e = e ? e[1].toLowerCase() : "c") {
                    case "t":
                        r.dx = 0, r.dy = n.y - i.y; break;
                    case "b":
                        r.dx = 0, r.dy = n.y2 - i.y2; break;
                    case "m":
                        r.dx = 0, r.dy = n.cy - i.cy; break;
                    case "l":
                        r.dx = n.x - i.x, r.dy = 0; break;
                    case "r":
                        r.dx = n.x2 - i.x2, r.dy = 0; break;
                    default:
                        r.dx = n.cx - i.cx, r.dy = 0 } return r.toString = l, r }, e.prototype.align = function(t, e) { return this.transform("..." + this.getAlign(t, e)) } }), i.plugin(function(e, n, i, r) {
            function s(t) { t = t.split(/(?=#)/); var e = new String(t[5]); return e[50] = t[0], e[100] = t[1], e[200] = t[2], e[300] = t[3], e[400] = t[4], e[500] = t[5], e[600] = t[6], e[700] = t[7], e[800] = t[8], e[900] = t[9], t[10] && (e.A100 = t[10], e.A200 = t[11], e.A400 = t[12], e.A700 = t[13]), e }
            e.mui = {}, e.flat = {}, e.mui.red = s("#ffebee#ffcdd2#ef9a9a#e57373#ef5350#f44336#e53935#d32f2f#c62828#b71c1c#ff8a80#ff5252#ff1744#d50000"), e.mui.pink = s("#FCE4EC#F8BBD0#F48FB1#F06292#EC407A#E91E63#D81B60#C2185B#AD1457#880E4F#FF80AB#FF4081#F50057#C51162"), e.mui.purple = s("#F3E5F5#E1BEE7#CE93D8#BA68C8#AB47BC#9C27B0#8E24AA#7B1FA2#6A1B9A#4A148C#EA80FC#E040FB#D500F9#AA00FF"), e.mui.deeppurple = s("#EDE7F6#D1C4E9#B39DDB#9575CD#7E57C2#673AB7#5E35B1#512DA8#4527A0#311B92#B388FF#7C4DFF#651FFF#6200EA"), e.mui.indigo = s("#E8EAF6#C5CAE9#9FA8DA#7986CB#5C6BC0#3F51B5#3949AB#303F9F#283593#1A237E#8C9EFF#536DFE#3D5AFE#304FFE"), e.mui.blue = s("#E3F2FD#BBDEFB#90CAF9#64B5F6#64B5F6#2196F3#1E88E5#1976D2#1565C0#0D47A1#82B1FF#448AFF#2979FF#2962FF"), e.mui.lightblue = s("#E1F5FE#B3E5FC#81D4FA#4FC3F7#29B6F6#03A9F4#039BE5#0288D1#0277BD#01579B#80D8FF#40C4FF#00B0FF#0091EA"), e.mui.cyan = s("#E0F7FA#B2EBF2#80DEEA#4DD0E1#26C6DA#00BCD4#00ACC1#0097A7#00838F#006064#84FFFF#18FFFF#00E5FF#00B8D4"), e.mui.teal = s("#E0F2F1#B2DFDB#80CBC4#4DB6AC#26A69A#009688#00897B#00796B#00695C#004D40#A7FFEB#64FFDA#1DE9B6#00BFA5"), e.mui.green = s("#E8F5E9#C8E6C9#A5D6A7#81C784#66BB6A#4CAF50#43A047#388E3C#2E7D32#1B5E20#B9F6CA#69F0AE#00E676#00C853"), e.mui.lightgreen = s("#F1F8E9#DCEDC8#C5E1A5#AED581#9CCC65#8BC34A#7CB342#689F38#558B2F#33691E#CCFF90#B2FF59#76FF03#64DD17"), e.mui.lime = s("#F9FBE7#F0F4C3#E6EE9C#DCE775#D4E157#CDDC39#C0CA33#AFB42B#9E9D24#827717#F4FF81#EEFF41#C6FF00#AEEA00"), e.mui.yellow = s("#FFFDE7#FFF9C4#FFF59D#FFF176#FFEE58#FFEB3B#FDD835#FBC02D#F9A825#F57F17#FFFF8D#FFFF00#FFEA00#FFD600"), e.mui.amber = s("#FFF8E1#FFECB3#FFE082#FFD54F#FFCA28#FFC107#FFB300#FFA000#FF8F00#FF6F00#FFE57F#FFD740#FFC400#FFAB00"), e.mui.orange = s("#FFF3E0#FFE0B2#FFCC80#FFB74D#FFA726#FF9800#FB8C00#F57C00#EF6C00#E65100#FFD180#FFAB40#FF9100#FF6D00"), e.mui.deeporange = s("#FBE9E7#FFCCBC#FFAB91#FF8A65#FF7043#FF5722#F4511E#E64A19#D84315#BF360C#FF9E80#FF6E40#FF3D00#DD2C00"), e.mui.brown = s("#EFEBE9#D7CCC8#BCAAA4#A1887F#8D6E63#795548#6D4C41#5D4037#4E342E#3E2723"), e.mui.grey = s("#FAFAFA#F5F5F5#EEEEEE#E0E0E0#BDBDBD#9E9E9E#757575#616161#424242#212121"), e.mui.bluegrey = s("#ECEFF1#CFD8DC#B0BEC5#90A4AE#78909C#607D8B#546E7A#455A64#37474F#263238"), e.flat.turquoise = "#1abc9c", e.flat.greensea = "#16a085", e.flat.sunflower = "#f1c40f", e.flat.orange = "#f39c12", e.flat.emerland = "#2ecc71", e.flat.nephritis = "#27ae60", e.flat.carrot = "#e67e22", e.flat.pumpkin = "#d35400", e.flat.peterriver = "#3498db", e.flat.belizehole = "#2980b9", e.flat.alizarin = "#e74c3c", e.flat.pomegranate = "#c0392b", e.flat.amethyst = "#9b59b6", e.flat.wisteria = "#8e44ad", e.flat.clouds = "#ecf0f1", e.flat.silver = "#bdc3c7", e.flat.wetasphalt = "#34495e", e.flat.midnightblue = "#2c3e50", e.flat.concrete = "#95a5a6", e.flat.asbestos = "#7f8c8d", e.importMUIColors = function() { for (var n in e.mui) e.mui.hasOwnProperty(n) && (t[n] = e.mui[n]) } }), i
    }),
    function(t, e) { "function" == typeof define && define.amd ? define([], function() { return t.svg4everybody = e() }) : "object" == typeof module && module.exports ? module.exports = e() : t.svg4everybody = e() }(this, function() { /*! svg4everybody v2.1.9 | github.com/jonathantneal/svg4everybody */
        function t(t, e, n) { if (n) { var i = document.createDocumentFragment(),
                    r = !e.hasAttribute("viewBox") && n.getAttribute("viewBox");
                r && e.setAttribute("viewBox", r); for (var s = n.cloneNode(!0); s.childNodes.length;) i.appendChild(s.firstChild);
                t.appendChild(i) } }

        function e(e) { e.onreadystatechange = function() { if (4 === e.readyState) { var n = e._cachedDocument;
                    n || (n = e._cachedDocument = document.implementation.createHTMLDocument(""), n.body.innerHTML = e.responseText, e._cachedTarget = {}), e._embeds.splice(0).map(function(i) { var r = e._cachedTarget[i.id];
                        r || (r = e._cachedTarget[i.id] = n.getElementById(i.id)), t(i.parent, i.svg, r) }) } }, e.onreadystatechange() }

        function n(n) {
            function r() { for (var n = 0; n < f.length;) { var a = f[n],
                        l = a.parentNode,
                        u = i(l),
                        c = a.getAttribute("xlink:href") || a.getAttribute("href"); if (!c && o.attributeName && (c = a.getAttribute(o.attributeName)), u && c) { if (s)
                            if (!o.validate || o.validate(c, u, a)) { l.removeChild(a); var h = c.split("#"),
                                    m = h.shift(),
                                    v = h.join("#"); if (m.length) { var y = p[m];
                                    y || (y = p[m] = new XMLHttpRequest, y.open("GET", m), y.send(), y._embeds = []), y._embeds.push({ parent: l, svg: u, id: v }), e(y) } else t(l, u, document.getElementById(v)) } else ++n, ++g } else ++n }(!f.length || f.length - g > 0) && d(r, 67) } var s, o = Object(n),
                a = /\bTrident\/[567]\b|\bMSIE (?:9|10)\.0\b/,
                l = /\bAppleWebKit\/(\d+)\b/,
                u = /\bEdge\/12\.(\d+)\b/,
                c = /\bEdge\/.(\d+)\b/,
                h = window.top !== window.self;
            s = "polyfill" in o ? o.polyfill : a.test(navigator.userAgent) || (navigator.userAgent.match(u) || [])[1] < 10547 || (navigator.userAgent.match(l) || [])[1] < 537 || c.test(navigator.userAgent) && h; var p = {},
                d = window.requestAnimationFrame || setTimeout,
                f = document.getElementsByTagName("use"),
                g = 0;
            s && r() }

        function i(t) { for (var e = t;
                "svg" !== e.nodeName.toLowerCase() && (e = e.parentNode);); return e }
        return n
    }),
    function() {
        "use strict";
        /**
         * @preserve FastClick: polyfill to remove click delays on browsers with touch UIs.
         *
         * @codingstandard ftlabs-jsv2
         * @copyright The Financial Times Limited [All Rights Reserved]
         * @license MIT License (see LICENSE.txt)
         */
        function t(e, i) { var r; if (i = i || {}, this.trackingClick = !1, this.trackingClickStart = 0, this.targetElement = null, this.touchStartX = 0, this.touchStartY = 0, this.lastTouchIdentifier = 0, this.touchBoundary = i.touchBoundary || 10, this.layer = e, this.tapDelay = i.tapDelay || 200, this.tapTimeout = i.tapTimeout || 700, !t.notNeeded(e)) { for (var s = ["onMouse", "onClick", "onTouchStart", "onTouchMove", "onTouchEnd", "onTouchCancel"], o = this, a = 0, l = s.length; a < l; a++) o[s[a]] = function(t, e) { return function() { return t.apply(e, arguments) } }(o[s[a]], o);
                n && (e.addEventListener("mouseover", this.onMouse, !0), e.addEventListener("mousedown", this.onMouse, !0), e.addEventListener("mouseup", this.onMouse, !0)), e.addEventListener("click", this.onClick, !0), e.addEventListener("touchstart", this.onTouchStart, !1), e.addEventListener("touchmove", this.onTouchMove, !1), e.addEventListener("touchend", this.onTouchEnd, !1), e.addEventListener("touchcancel", this.onTouchCancel, !1), Event.prototype.stopImmediatePropagation || (e.removeEventListener = function(t, n, i) { var r = Node.prototype.removeEventListener; "click" === t ? r.call(e, t, n.hijacked || n, i) : r.call(e, t, n, i) }, e.addEventListener = function(t, n, i) { var r = Node.prototype.addEventListener; "click" === t ? r.call(e, t, n.hijacked || (n.hijacked = function(t) { t.propagationStopped || n(t) }), i) : r.call(e, t, n, i) }), "function" == typeof e.onclick && (r = e.onclick, e.addEventListener("click", function(t) { r(t) }, !1), e.onclick = null) } }
        var e = navigator.userAgent.indexOf("Windows Phone") >= 0,
            n = navigator.userAgent.indexOf("Android") > 0 && !e,
            i = /iP(ad|hone|od)/.test(navigator.userAgent) && !e,
            r = i && /OS 4_\d(_\d)?/.test(navigator.userAgent),
            s = i && /OS [6-7]_\d/.test(navigator.userAgent),
            o = navigator.userAgent.indexOf("BB10") > 0;
        t.prototype.needsClick = function(t) { switch (t.nodeName.toLowerCase()) {
                case "button":
                case "select":
                case "textarea":
                    if (t.disabled) return !0; break;
                case "input":
                    if (i && "file" === t.type || t.disabled) return !0; break;
                case "label":
                case "iframe":
                case "video":
                    return !0 } return /\bneedsclick\b/.test(t.className) }, t.prototype.needsFocus = function(t) { switch (t.nodeName.toLowerCase()) {
                case "textarea":
                    return !0;
                case "select":
                    return !n;
                case "input":
                    switch (t.type) {
                        case "button":
                        case "checkbox":
                        case "file":
                        case "image":
                        case "radio":
                        case "submit":
                            return !1 } return !t.disabled && !t.readOnly;
                default:
                    return /\bneedsfocus\b/.test(t.className) } }, t.prototype.sendClick = function(t, e) { var n, i;
            document.activeElement && document.activeElement !== t && document.activeElement.blur(), i = e.changedTouches[0], n = document.createEvent("MouseEvents"), n.initMouseEvent(this.determineEventType(t), !0, !0, window, 1, i.screenX, i.screenY, i.clientX, i.clientY, !1, !1, !1, !1, 0, null), n.forwardedTouchEvent = !0, t.dispatchEvent(n) }, t.prototype.determineEventType = function(t) { return n && "select" === t.tagName.toLowerCase() ? "mousedown" : "click" }, t.prototype.focus = function(t) { var e;
            i && t.setSelectionRange && 0 !== t.type.indexOf("date") && "time" !== t.type && "month" !== t.type ? (e = t.value.length, t.setSelectionRange(e, e)) : t.focus() }, t.prototype.updateScrollParent = function(t) { var e, n; if (!(e = t.fastClickScrollParent) || !e.contains(t)) { n = t;
                do { if (n.scrollHeight > n.offsetHeight) { e = n, t.fastClickScrollParent = n; break }
                    n = n.parentElement } while (n) }
            e && (e.fastClickLastScrollTop = e.scrollTop) }, t.prototype.getTargetElementFromEventTarget = function(t) { return t.nodeType === Node.TEXT_NODE ? t.parentNode : t }, t.prototype.onTouchStart = function(t) { var e, n, s; if (t.targetTouches.length > 1) return !0; if (e = this.getTargetElementFromEventTarget(t.target), n = t.targetTouches[0], i) { if (s = window.getSelection(), s.rangeCount && !s.isCollapsed) return !0; if (!r) { if (n.identifier && n.identifier === this.lastTouchIdentifier) return t.preventDefault(), !1;
                    this.lastTouchIdentifier = n.identifier, this.updateScrollParent(e) } } return this.trackingClick = !0, this.trackingClickStart = t.timeStamp, this.targetElement = e, this.touchStartX = n.pageX, this.touchStartY = n.pageY, t.timeStamp - this.lastClickTime < this.tapDelay && t.preventDefault(), !0 }, t.prototype.touchHasMoved = function(t) { var e = t.changedTouches[0],
                n = this.touchBoundary; return Math.abs(e.pageX - this.touchStartX) > n || Math.abs(e.pageY - this.touchStartY) > n }, t.prototype.onTouchMove = function(t) { return !this.trackingClick || ((this.targetElement !== this.getTargetElementFromEventTarget(t.target) || this.touchHasMoved(t)) && (this.trackingClick = !1, this.targetElement = null), !0) }, t.prototype.findControl = function(t) { return void 0 !== t.control ? t.control : t.htmlFor ? document.getElementById(t.htmlFor) : t.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea") }, t.prototype.onTouchEnd = function(t) { var e, o, a, l, u, c = this.targetElement; if (!this.trackingClick) return !0; if (t.timeStamp - this.lastClickTime < this.tapDelay) return this.cancelNextClick = !0, !0; if (t.timeStamp - this.trackingClickStart > this.tapTimeout) return !0; if (this.cancelNextClick = !1, this.lastClickTime = t.timeStamp, o = this.trackingClickStart, this.trackingClick = !1, this.trackingClickStart = 0, s && (u = t.changedTouches[0], c = document.elementFromPoint(u.pageX - window.pageXOffset, u.pageY - window.pageYOffset) || c, c.fastClickScrollParent = this.targetElement.fastClickScrollParent), "label" === (a = c.tagName.toLowerCase())) { if (e = this.findControl(c)) { if (this.focus(c), n) return !1;
                    c = e } } else if (this.needsFocus(c)) return t.timeStamp - o > 100 || i && window.top !== window && "input" === a ? (this.targetElement = null, !1) : (this.focus(c), this.sendClick(c, t), i && "select" === a || (this.targetElement = null, t.preventDefault()), !1); return !(!i || r || !(l = c.fastClickScrollParent) || l.fastClickLastScrollTop === l.scrollTop) || (this.needsClick(c) || (t.preventDefault(), this.sendClick(c, t)), !1) }, t.prototype.onTouchCancel = function() { this.trackingClick = !1, this.targetElement = null }, t.prototype.onMouse = function(t) { return !this.targetElement || (!!t.forwardedTouchEvent || (!t.cancelable || (!(!this.needsClick(this.targetElement) || this.cancelNextClick) || (t.stopImmediatePropagation ? t.stopImmediatePropagation() : t.propagationStopped = !0, t.stopPropagation(), t.preventDefault(), !1)))) }, t.prototype.onClick = function(t) { var e; return this.trackingClick ? (this.targetElement = null, this.trackingClick = !1, !0) : "submit" === t.target.type && 0 === t.detail || (e = this.onMouse(t), e || (this.targetElement = null), e) }, t.prototype.destroy = function() { var t = this.layer;
            n && (t.removeEventListener("mouseover", this.onMouse, !0), t.removeEventListener("mousedown", this.onMouse, !0), t.removeEventListener("mouseup", this.onMouse, !0)), t.removeEventListener("click", this.onClick, !0), t.removeEventListener("touchstart", this.onTouchStart, !1), t.removeEventListener("touchmove", this.onTouchMove, !1), t.removeEventListener("touchend", this.onTouchEnd, !1), t.removeEventListener("touchcancel", this.onTouchCancel, !1) }, t.notNeeded = function(t) { var e, i, r; if (void 0 === window.ontouchstart) return !0; if (i = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1]) { if (!n) return !0; if (e = document.querySelector("meta[name=viewport]")) { if (-1 !== e.content.indexOf("user-scalable=no")) return !0; if (i > 31 && document.documentElement.scrollWidth <= window.outerWidth) return !0 } } if (o && (r = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/), r[1] >= 10 && r[2] >= 3 && (e = document.querySelector("meta[name=viewport]")))) { if (-1 !== e.content.indexOf("user-scalable=no")) return !0; if (document.documentElement.scrollWidth <= window.outerWidth) return !0 } return "none" === t.style.msTouchAction || "manipulation" === t.style.touchAction || (!!(+(/Firefox\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1] >= 27 && (e = document.querySelector("meta[name=viewport]")) && (-1 !== e.content.indexOf("user-scalable=no") || document.documentElement.scrollWidth <= window.outerWidth)) || ("none" === t.style.touchAction || "manipulation" === t.style.touchAction)) }, t.attach = function(e, n) { return new t(e, n) }, "function" == typeof define && "object" == typeof define.amd && define.amd ? define(function() { return t }) : "undefined" != typeof module && module.exports ? (module.exports = t.attach, module.exports.FastClick = t) : window.FastClick = t
    }();
/**
 * Generates event when user makes new movement (like a swipe on a touchscreen).
 * @version 1.1.4
 * @link https://github.com/Promo/wheel-indicator
 * @license MIT
 */
var WheelIndicator = function(t, e) {
    function n(t) { this._options = u(h, t), this._deltaArray = [0, 0, 0], this._isAcceleration = !1, this._isStopped = !0, this._direction = "", this._timer = "", this._isWorking = !0; var e = this;
        this._wheelHandler = function(t) { e._isWorking && (s.call(e, t), e._options.preventMouse && r(t)) }, a(this._options.elem, c, this._wheelHandler) }

    function i(t) { t.direction = this._direction, this._options.callback.call(this, t) }

    function r(e) { e = e || t.event, e.preventDefault ? e.preventDefault() : e.returnValue = !1 }

    function s(t) { var e = this,
            n = p(t); if (0 !== n) { var r, s = n > 0 ? "down" : "up",
                a = e._deltaArray.length,
                l = !1,
                u = 0; for (clearTimeout(e._timer), e._timer = setTimeout(function() { e._deltaArray = [0, 0, 0], e._isStopped = !0, e._direction = s }, 150), r = 0; r < a; r++) 0 !== e._deltaArray[r] && (e._deltaArray[r] > 0 ? ++u : --u);
            Math.abs(u) === a && (u > 0 ? "down" : "up") !== e._direction && (l = !0, e._direction = s), e._isStopped || (l ? (e._isAcceleration = !0, i.call(this, t)) : Math.abs(u) === a && o.call(this, t)), e._isStopped && (e._isStopped = !1, e._isAcceleration = !0, e._direction = s, i.call(this, t)), e._deltaArray.shift(), e._deltaArray.push(n) } }

    function o(t) { var e = Math.abs(this._deltaArray[0]),
            n = Math.abs(this._deltaArray[1]),
            r = Math.abs(this._deltaArray[2]),
            s = Math.abs(p(t));
        s > r && r > n && n > e && (this._isAcceleration || (i.call(this, t), this._isAcceleration = !0)), s < r && r <= n && (this._isAcceleration = !1) }

    function a(t, e, n) { t.addEventListener ? t.addEventListener(e, n, !1) : t.attachEvent && t.attachEvent("on" + e, n) }

    function l(t, e, n) { t.removeEventListener ? t.removeEventListener(e, n, !1) : t.detachEvent && t.detachEvent("on" + e, n) }

    function u(t, e) { var n, i = {}; for (n in t) Object.prototype.hasOwnProperty.call(t, n) && (i[n] = t[n]); for (n in e) Object.prototype.hasOwnProperty.call(e, n) && (i[n] = e[n]); return i } var c = "onwheel" in e ? "wheel" : "mousewheel",
        h = { callback: function() {}, elem: e, preventMouse: !0 };
    n.prototype = { constructor: n, turnOn: function() { return this._isWorking = !0, this }, turnOff: function() { return this._isWorking = !1, this }, setOptions: function(t) { return this._options = u(this._options, t), this }, getOption: function(t) { var e = this._options[t]; if (void 0 !== e) return e; throw new Error("Unknown option") }, destroy: function() { return l(this._options.elem, c, this._wheelHandler), this } }; var p = function(t) { return (p = t.wheelDelta && !t.deltaY ? function(t) { return -1 * t.wheelDelta } : function(t) { return t.deltaY })(t) }; return n }(window, document);
"object" == typeof exports && (module.exports = WheelIndicator);
/*!
 * VERSION: 1.20.5
 * DATE: 2018-05-21
 * UPDATES AND DOCS AT: http://greensock.com
 * 
 * Includes all of the following: TweenLite, TweenMax, TimelineLite, TimelineMax, EasePack, CSSPlugin, RoundPropsPlugin, BezierPlugin, AttrPlugin, DirectionalRotationPlugin
 *
 * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
        "use strict";
        _gsScope._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(t, e, n) { var i = function(t) { var e, n = [],
                            i = t.length; for (e = 0; e !== i; n.push(t[e++])); return n },
                    r = function(t, e, n) { var i, r, s = t.cycle; for (i in s) r = s[i], t[i] = "function" == typeof r ? r(n, e[n]) : r[n % r.length];
                        delete t.cycle },
                    s = function(t, e, i) { n.call(this, t, e, i), this._cycle = 0, this._yoyo = !0 === this.vars.yoyo || !!this.vars.yoyoEase, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._repeat && this._uncache(!0), this.render = s.prototype.render },
                    o = n._internals,
                    a = o.isSelector,
                    l = o.isArray,
                    u = s.prototype = n.to({}, .1, {}),
                    c = [];
                s.version = "1.20.5", u.constructor = s, u.kill()._gc = !1, s.killTweensOf = s.killDelayedCallsTo = n.killTweensOf, s.getTweensOf = n.getTweensOf, s.lagSmoothing = n.lagSmoothing, s.ticker = n.ticker, s.render = n.render, u.invalidate = function() { return this._yoyo = !0 === this.vars.yoyo || !!this.vars.yoyoEase, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._yoyoEase = null, this._uncache(!0), n.prototype.invalidate.call(this) }, u.updateTo = function(t, e) { var i, r = this.ratio,
                        s = this.vars.immediateRender || t.immediateRender;
                    e && this._startTime < this._timeline._time && (this._startTime = this._timeline._time, this._uncache(!1), this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay)); for (i in t) this.vars[i] = t[i]; if (this._initted || s)
                        if (e) this._initted = !1, s && this.render(0, !0, !0);
                        else if (this._gc && this._enabled(!0, !1), this._notifyPluginsOfEnabled && this._firstPT && n._onPluginEvent("_onDisable", this), this._time / this._duration > .998) { var o = this._totalTime;
                        this.render(0, !0, !1), this._initted = !1, this.render(o, !0, !1) } else if (this._initted = !1, this._init(), this._time > 0 || s)
                        for (var a, l = 1 / (1 - r), u = this._firstPT; u;) a = u.s + u.c, u.c *= l, u.s = a - u.c, u = u._next; return this }, u.render = function(t, e, i) { this._initted || 0 === this._duration && this.vars.repeat && this.invalidate(); var r, s, a, l, u, c, h, p, d, f = this._dirty ? this.totalDuration() : this._totalDuration,
                        g = this._time,
                        m = this._totalTime,
                        v = this._cycle,
                        y = this._duration,
                        _ = this._rawPrevTime; if (t >= f - 1e-7 && t >= 0 ? (this._totalTime = f, this._cycle = this._repeat, this._yoyo && 0 != (1 & this._cycle) ? (this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0) : (this._time = y, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1), this._reversed || (r = !0, s = "onComplete", i = i || this._timeline.autoRemoveChildren), 0 === y && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (_ < 0 || t <= 0 && t >= -1e-7 || 1e-10 === _ && "isPause" !== this.data) && _ !== t && (i = !0, _ > 1e-10 && (s = "onReverseComplete")), this._rawPrevTime = p = !e || t || _ === t ? t : 1e-10)) : t < 1e-7 ? (this._totalTime = this._time = this._cycle = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== m || 0 === y && _ > 0) && (s = "onReverseComplete", r = this._reversed), t < 0 && (this._active = !1, 0 === y && (this._initted || !this.vars.lazy || i) && (_ >= 0 && (i = !0), this._rawPrevTime = p = !e || t || _ === t ? t : 1e-10)), this._initted || (i = !0)) : (this._totalTime = this._time = t, 0 !== this._repeat && (l = y + this._repeatDelay, this._cycle = this._totalTime / l >> 0, 0 !== this._cycle && this._cycle === this._totalTime / l && m <= t && this._cycle--, this._time = this._totalTime - this._cycle * l, this._yoyo && 0 != (1 & this._cycle) && (this._time = y - this._time, (d = this._yoyoEase || this.vars.yoyoEase) && (this._yoyoEase || (!0 !== d || this._initted ? this._yoyoEase = d = !0 === d ? this._ease : d instanceof Ease ? d : Ease.map[d] : (d = this.vars.ease, this._yoyoEase = d = d ? d instanceof Ease ? d : "function" == typeof d ? new Ease(d, this.vars.easeParams) : Ease.map[d] || n.defaultEase : n.defaultEase)), this.ratio = d ? 1 - d.getRatio((y - this._time) / y) : 0)), this._time > y ? this._time = y : this._time < 0 && (this._time = 0)), this._easeType && !d ? (u = this._time / y, c = this._easeType, h = this._easePower, (1 === c || 3 === c && u >= .5) && (u = 1 - u), 3 === c && (u *= 2), 1 === h ? u *= u : 2 === h ? u *= u * u : 3 === h ? u *= u * u * u : 4 === h && (u *= u * u * u * u), 1 === c ? this.ratio = 1 - u : 2 === c ? this.ratio = u : this._time / y < .5 ? this.ratio = u / 2 : this.ratio = 1 - u / 2) : d || (this.ratio = this._ease.getRatio(this._time / y))), g === this._time && !i && v === this._cycle) return void(m !== this._totalTime && this._onUpdate && (e || this._callback("onUpdate"))); if (!this._initted) { if (this._init(), !this._initted || this._gc) return; if (!i && this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration)) return this._time = g, this._totalTime = m, this._rawPrevTime = _, this._cycle = v, o.lazyTweens.push(this), void(this._lazy = [t, e]);!this._time || r || d ? r && this._ease._calcEnd && !d && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1)) : this.ratio = this._ease.getRatio(this._time / y) } for (!1 !== this._lazy && (this._lazy = !1), this._active || !this._paused && this._time !== g && t >= 0 && (this._active = !0), 0 === m && (2 === this._initted && t > 0 && this._init(), this._startAt && (t >= 0 ? this._startAt.render(t, !0, i) : s || (s = "_dummyGS")), this.vars.onStart && (0 === this._totalTime && 0 !== y || e || this._callback("onStart"))), a = this._firstPT; a;) a.f ? a.t[a.p](a.c * this.ratio + a.s) : a.t[a.p] = a.c * this.ratio + a.s, a = a._next;
                    this._onUpdate && (t < 0 && this._startAt && this._startTime && this._startAt.render(t, !0, i), e || (this._totalTime !== m || s) && this._callback("onUpdate")), this._cycle !== v && (e || this._gc || this.vars.onRepeat && this._callback("onRepeat")), s && (this._gc && !i || (t < 0 && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(t, !0, i), r && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[s] && this._callback(s), 0 === y && 1e-10 === this._rawPrevTime && 1e-10 !== p && (this._rawPrevTime = 0))) }, s.to = function(t, e, n) { return new s(t, e, n) }, s.from = function(t, e, n) { return n.runBackwards = !0, n.immediateRender = 0 != n.immediateRender, new s(t, e, n) }, s.fromTo = function(t, e, n, i) { return i.startAt = n, i.immediateRender = 0 != i.immediateRender && 0 != n.immediateRender, new s(t, e, i) }, s.staggerTo = s.allTo = function(t, e, o, u, h, p, d) { u = u || 0; var f, g, m, v, y = 0,
                        _ = [],
                        x = function() { o.onComplete && o.onComplete.apply(o.onCompleteScope || this, arguments), h.apply(d || o.callbackScope || this, p || c) },
                        b = o.cycle,
                        w = o.startAt && o.startAt.cycle; for (l(t) || ("string" == typeof t && (t = n.selector(t) || t), a(t) && (t = i(t))), t = t || [], u < 0 && (t = i(t), t.reverse(), u *= -1), f = t.length - 1, m = 0; m <= f; m++) { g = {}; for (v in o) g[v] = o[v]; if (b && (r(g, t, m), null != g.duration && (e = g.duration, delete g.duration)), w) { w = g.startAt = {}; for (v in o.startAt) w[v] = o.startAt[v];
                            r(g.startAt, t, m) }
                        g.delay = y + (g.delay || 0), m === f && h && (g.onComplete = x), _[m] = new s(t[m], e, g), y += u } return _ }, s.staggerFrom = s.allFrom = function(t, e, n, i, r, o, a) { return n.runBackwards = !0, n.immediateRender = 0 != n.immediateRender, s.staggerTo(t, e, n, i, r, o, a) }, s.staggerFromTo = s.allFromTo = function(t, e, n, i, r, o, a, l) { return i.startAt = n, i.immediateRender = 0 != i.immediateRender && 0 != n.immediateRender, s.staggerTo(t, e, i, r, o, a, l) }, s.delayedCall = function(t, e, n, i, r) { return new s(e, 0, { delay: t, onComplete: e, onCompleteParams: n, callbackScope: i, onReverseComplete: e, onReverseCompleteParams: n, immediateRender: !1, useFrames: r, overwrite: 0 }) }, s.set = function(t, e) { return new s(t, 0, e) }, s.isTweening = function(t) { return n.getTweensOf(t, !0).length > 0 }; var h = function(t, e) { for (var i = [], r = 0, s = t._first; s;) s instanceof n ? i[r++] = s : (e && (i[r++] = s), i = i.concat(h(s, e)), r = i.length), s = s._next; return i },
                    p = s.getAllTweens = function(e) { return h(t._rootTimeline, e).concat(h(t._rootFramesTimeline, e)) };
                s.killAll = function(t, n, i, r) { null == n && (n = !0), null == i && (i = !0); var s, o, a, l = p(0 != r),
                        u = l.length,
                        c = n && i && r; for (a = 0; a < u; a++) o = l[a], (c || o instanceof e || (s = o.target === o.vars.onComplete) && i || n && !s) && (t ? o.totalTime(o._reversed ? 0 : o.totalDuration()) : o._enabled(!1, !1)) }, s.killChildTweensOf = function(t, e) { if (null != t) { var r, u, c, h, p, d = o.tweenLookup; if ("string" == typeof t && (t = n.selector(t) || t), a(t) && (t = i(t)), l(t))
                            for (h = t.length; --h > -1;) s.killChildTweensOf(t[h], e);
                        else { r = []; for (c in d)
                                for (u = d[c].target.parentNode; u;) u === t && (r = r.concat(d[c].tweens)), u = u.parentNode; for (p = r.length, h = 0; h < p; h++) e && r[h].totalTime(r[h].totalDuration()), r[h]._enabled(!1, !1) } } }; var d = function(t, n, i, r) { n = !1 !== n, i = !1 !== i, r = !1 !== r; for (var s, o, a = p(r), l = n && i && r, u = a.length; --u > -1;) o = a[u], (l || o instanceof e || (s = o.target === o.vars.onComplete) && i || n && !s) && o.paused(t) }; return s.pauseAll = function(t, e, n) { d(!0, t, e, n) }, s.resumeAll = function(t, e, n) { d(!1, t, e, n) }, s.globalTimeScale = function(e) { var i = t._rootTimeline,
                        r = n.ticker.time; return arguments.length ? (e = e || 1e-10, i._startTime = r - (r - i._startTime) * i._timeScale / e, i = t._rootFramesTimeline, r = n.ticker.frame, i._startTime = r - (r - i._startTime) * i._timeScale / e, i._timeScale = t._rootTimeline._timeScale = e, e) : i._timeScale }, u.progress = function(t, e) { return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this._time / this.duration() }, u.totalProgress = function(t, e) { return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration() }, u.time = function(t, e) { return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 != (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time }, u.duration = function(e) { return arguments.length ? t.prototype.duration.call(this, e) : this._duration }, u.totalDuration = function(t) { return arguments.length ? -1 === this._repeat ? this : this.duration((t - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat, this._dirty = !1), this._totalDuration) }, u.repeat = function(t) { return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat }, u.repeatDelay = function(t) { return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay }, u.yoyo = function(t) { return arguments.length ? (this._yoyo = t, this) : this._yoyo }, s }, !0), _gsScope._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(t, e, n) { var i = function(t) { e.call(this, t), this._labels = {}, this.autoRemoveChildren = !0 === this.vars.autoRemoveChildren, this.smoothChildTiming = !0 === this.vars.smoothChildTiming, this._sortChildren = !0, this._onUpdate = this.vars.onUpdate; var n, i, r = this.vars; for (i in r) n = r[i], a(n) && -1 !== n.join("").indexOf("{self}") && (r[i] = this._swapSelfInParams(n));
                        a(r.tweens) && this.add(r.tweens, 0, r.align, r.stagger) },
                    r = n._internals,
                    s = i._internals = {},
                    o = r.isSelector,
                    a = r.isArray,
                    l = r.lazyTweens,
                    u = r.lazyRender,
                    c = _gsScope._gsDefine.globals,
                    h = function(t) { var e, n = {}; for (e in t) n[e] = t[e]; return n },
                    p = function(t, e, n) { var i, r, s = t.cycle; for (i in s) r = s[i], t[i] = "function" == typeof r ? r(n, e[n]) : r[n % r.length];
                        delete t.cycle },
                    d = s.pauseCallback = function() {},
                    f = function(t) { var e, n = [],
                            i = t.length; for (e = 0; e !== i; n.push(t[e++])); return n },
                    g = i.prototype = new e; return i.version = "1.20.4", g.constructor = i, g.kill()._gc = g._forcingPlayhead = g._hasPause = !1, g.to = function(t, e, i, r) { var s = i.repeat && c.TweenMax || n; return e ? this.add(new s(t, e, i), r) : this.set(t, i, r) }, g.from = function(t, e, i, r) { return this.add((i.repeat && c.TweenMax || n).from(t, e, i), r) }, g.fromTo = function(t, e, i, r, s) { var o = r.repeat && c.TweenMax || n; return e ? this.add(o.fromTo(t, e, i, r), s) : this.set(t, r, s) }, g.staggerTo = function(t, e, r, s, a, l, u, c) { var d, g, m = new i({ onComplete: l, onCompleteParams: u, callbackScope: c, smoothChildTiming: this.smoothChildTiming }),
                        v = r.cycle; for ("string" == typeof t && (t = n.selector(t) || t), t = t || [], o(t) && (t = f(t)), s = s || 0, s < 0 && (t = f(t), t.reverse(), s *= -1), g = 0; g < t.length; g++) d = h(r), d.startAt && (d.startAt = h(d.startAt), d.startAt.cycle && p(d.startAt, t, g)), v && (p(d, t, g), null != d.duration && (e = d.duration, delete d.duration)), m.to(t[g], e, d, g * s); return this.add(m, a) }, g.staggerFrom = function(t, e, n, i, r, s, o, a) { return n.immediateRender = 0 != n.immediateRender, n.runBackwards = !0, this.staggerTo(t, e, n, i, r, s, o, a) }, g.staggerFromTo = function(t, e, n, i, r, s, o, a, l) { return i.startAt = n, i.immediateRender = 0 != i.immediateRender && 0 != n.immediateRender, this.staggerTo(t, e, i, r, s, o, a, l) }, g.call = function(t, e, i, r) { return this.add(n.delayedCall(0, t, e, i), r) }, g.set = function(t, e, i) { return i = this._parseTimeOrLabel(i, 0, !0), null == e.immediateRender && (e.immediateRender = i === this._time && !this._paused), this.add(new n(t, 0, e), i) }, i.exportRoot = function(t, e) { t = t || {}, null == t.smoothChildTiming && (t.smoothChildTiming = !0); var r, s, o, a, l = new i(t),
                        u = l._timeline; for (null == e && (e = !0), u._remove(l, !0), l._startTime = 0, l._rawPrevTime = l._time = l._totalTime = u._time, o = u._first; o;) a = o._next, e && o instanceof n && o.target === o.vars.onComplete || (s = o._startTime - o._delay, s < 0 && (r = 1), l.add(o, s)), o = a; return u.add(l, 0), r && l.totalDuration(), l }, g.add = function(r, s, o, l) { var u, c, h, p, d, f; if ("number" != typeof s && (s = this._parseTimeOrLabel(s, 0, !0, r)), !(r instanceof t)) { if (r instanceof Array || r && r.push && a(r)) { for (o = o || "normal", l = l || 0, u = s, c = r.length, h = 0; h < c; h++) a(p = r[h]) && (p = new i({ tweens: p })), this.add(p, u), "string" != typeof p && "function" != typeof p && ("sequence" === o ? u = p._startTime + p.totalDuration() / p._timeScale : "start" === o && (p._startTime -= p.delay())), u += l; return this._uncache(!0) } if ("string" == typeof r) return this.addLabel(r, s); if ("function" != typeof r) throw "Cannot add " + r + " into the timeline; it is not a tween, timeline, function, or string.";
                        r = n.delayedCall(0, r) } if (e.prototype.add.call(this, r, s), r._time && r.render((this.rawTime() - r._startTime) * r._timeScale, !1, !1), (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration())
                        for (d = this, f = d.rawTime() > r._startTime; d._timeline;) f && d._timeline.smoothChildTiming ? d.totalTime(d._totalTime, !0) : d._gc && d._enabled(!0, !1), d = d._timeline; return this }, g.remove = function(e) { if (e instanceof t) { this._remove(e, !1); var n = e._timeline = e.vars.useFrames ? t._rootFramesTimeline : t._rootTimeline; return e._startTime = (e._paused ? e._pauseTime : n._time) - (e._reversed ? e.totalDuration() - e._totalTime : e._totalTime) / e._timeScale, this } if (e instanceof Array || e && e.push && a(e)) { for (var i = e.length; --i > -1;) this.remove(e[i]); return this } return "string" == typeof e ? this.removeLabel(e) : this.kill(null, e) }, g._remove = function(t, n) { return e.prototype._remove.call(this, t, n), this._last ? this._time > this.duration() && (this._time = this._duration, this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0, this }, g.append = function(t, e) { return this.add(t, this._parseTimeOrLabel(null, e, !0, t)) }, g.insert = g.insertMultiple = function(t, e, n, i) { return this.add(t, e || 0, n, i) }, g.appendMultiple = function(t, e, n, i) { return this.add(t, this._parseTimeOrLabel(null, e, !0, t), n, i) }, g.addLabel = function(t, e) { return this._labels[t] = this._parseTimeOrLabel(e), this }, g.addPause = function(t, e, i, r) { var s = n.delayedCall(0, d, i, r || this); return s.vars.onComplete = s.vars.onReverseComplete = e, s.data = "isPause", this._hasPause = !0, this.add(s, t) }, g.removeLabel = function(t) { return delete this._labels[t], this }, g.getLabelTime = function(t) { return null != this._labels[t] ? this._labels[t] : -1 }, g._parseTimeOrLabel = function(e, n, i, r) { var s, o; if (r instanceof t && r.timeline === this) this.remove(r);
                    else if (r && (r instanceof Array || r.push && a(r)))
                        for (o = r.length; --o > -1;) r[o] instanceof t && r[o].timeline === this && this.remove(r[o]); if (s = "number" != typeof e || n ? this.duration() > 99999999999 ? this.recent().endTime(!1) : this._duration : 0, "string" == typeof n) return this._parseTimeOrLabel(n, i && "number" == typeof e && null == this._labels[n] ? e - s : 0, i); if (n = n || 0, "string" != typeof e || !isNaN(e) && null == this._labels[e]) null == e && (e = s);
                    else { if (-1 === (o = e.indexOf("="))) return null == this._labels[e] ? i ? this._labels[e] = s + n : n : this._labels[e] + n;
                        n = parseInt(e.charAt(o - 1) + "1", 10) * Number(e.substr(o + 1)), e = o > 1 ? this._parseTimeOrLabel(e.substr(0, o - 1), 0, i) : s } return Number(e) + n }, g.seek = function(t, e) { return this.totalTime("number" == typeof t ? t : this._parseTimeOrLabel(t), !1 !== e) }, g.stop = function() { return this.paused(!0) }, g.gotoAndPlay = function(t, e) { return this.play(t, e) }, g.gotoAndStop = function(t, e) { return this.pause(t, e) }, g.render = function(t, e, n) { this._gc && this._enabled(!0, !1); var i, r, s, o, a, c, h, p = this._time,
                        d = this._dirty ? this.totalDuration() : this._totalDuration,
                        f = this._startTime,
                        g = this._timeScale,
                        m = this._paused; if (p !== this._time && (t += this._time - p), t >= d - 1e-7 && t >= 0) this._totalTime = this._time = d, this._reversed || this._hasPausedChild() || (r = !0, o = "onComplete", a = !!this._timeline.autoRemoveChildren, 0 === this._duration && (t <= 0 && t >= -1e-7 || this._rawPrevTime < 0 || 1e-10 === this._rawPrevTime) && this._rawPrevTime !== t && this._first && (a = !0, this._rawPrevTime > 1e-10 && (o = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : 1e-10, t = d + 1e-4;
                    else if (t < 1e-7)
                        if (this._totalTime = this._time = 0, (0 !== p || 0 === this._duration && 1e-10 !== this._rawPrevTime && (this._rawPrevTime > 0 || t < 0 && this._rawPrevTime >= 0)) && (o = "onReverseComplete", r = this._reversed), t < 0) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (a = r = !0, o = "onReverseComplete") : this._rawPrevTime >= 0 && this._first && (a = !0), this._rawPrevTime = t;
                        else { if (this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : 1e-10, 0 === t && r)
                                for (i = this._first; i && 0 === i._startTime;) i._duration || (r = !1), i = i._next;
                            t = 0, this._initted || (a = !0) }
                    else { if (this._hasPause && !this._forcingPlayhead && !e) { if (t >= p)
                                for (i = this._first; i && i._startTime <= t && !c;) i._duration || "isPause" !== i.data || i.ratio || 0 === i._startTime && 0 === this._rawPrevTime || (c = i), i = i._next;
                            else
                                for (i = this._last; i && i._startTime >= t && !c;) i._duration || "isPause" === i.data && i._rawPrevTime > 0 && (c = i), i = i._prev;
                            c && (this._time = t = c._startTime, this._totalTime = t + this._cycle * (this._totalDuration + this._repeatDelay)) }
                        this._totalTime = this._time = this._rawPrevTime = t } if (this._time !== p && this._first || n || a || c) { if (this._initted || (this._initted = !0), this._active || !this._paused && this._time !== p && t > 0 && (this._active = !0), 0 === p && this.vars.onStart && (0 === this._time && this._duration || e || this._callback("onStart")), (h = this._time) >= p)
                            for (i = this._first; i && (s = i._next, h === this._time && (!this._paused || m));)(i._active || i._startTime <= h && !i._paused && !i._gc) && (c === i && this.pause(), i._reversed ? i.render((i._dirty ? i.totalDuration() : i._totalDuration) - (t - i._startTime) * i._timeScale, e, n) : i.render((t - i._startTime) * i._timeScale, e, n)), i = s;
                        else
                            for (i = this._last; i && (s = i._prev, h === this._time && (!this._paused || m));) { if (i._active || i._startTime <= p && !i._paused && !i._gc) { if (c === i) { for (c = i._prev; c && c.endTime() > this._time;) c.render(c._reversed ? c.totalDuration() - (t - c._startTime) * c._timeScale : (t - c._startTime) * c._timeScale, e, n), c = c._prev;
                                        c = null, this.pause() }
                                    i._reversed ? i.render((i._dirty ? i.totalDuration() : i._totalDuration) - (t - i._startTime) * i._timeScale, e, n) : i.render((t - i._startTime) * i._timeScale, e, n) }
                                i = s }
                        this._onUpdate && (e || (l.length && u(), this._callback("onUpdate"))), o && (this._gc || f !== this._startTime && g === this._timeScale || (0 === this._time || d >= this.totalDuration()) && (r && (l.length && u(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[o] && this._callback(o))) } }, g._hasPausedChild = function() { for (var t = this._first; t;) { if (t._paused || t instanceof i && t._hasPausedChild()) return !0;
                        t = t._next } return !1 }, g.getChildren = function(t, e, i, r) { r = r || -9999999999; for (var s = [], o = this._first, a = 0; o;) o._startTime < r || (o instanceof n ? !1 !== e && (s[a++] = o) : (!1 !== i && (s[a++] = o), !1 !== t && (s = s.concat(o.getChildren(!0, e, i)), a = s.length))), o = o._next; return s }, g.getTweensOf = function(t, e) { var i, r, s = this._gc,
                        o = [],
                        a = 0; for (s && this._enabled(!0, !0), i = n.getTweensOf(t), r = i.length; --r > -1;)(i[r].timeline === this || e && this._contains(i[r])) && (o[a++] = i[r]); return s && this._enabled(!1, !0), o }, g.recent = function() { return this._recent }, g._contains = function(t) { for (var e = t.timeline; e;) { if (e === this) return !0;
                        e = e.timeline } return !1 }, g.shiftChildren = function(t, e, n) { n = n || 0; for (var i, r = this._first, s = this._labels; r;) r._startTime >= n && (r._startTime += t), r = r._next; if (e)
                        for (i in s) s[i] >= n && (s[i] += t); return this._uncache(!0) }, g._kill = function(t, e) { if (!t && !e) return this._enabled(!1, !1); for (var n = e ? this.getTweensOf(e) : this.getChildren(!0, !0, !1), i = n.length, r = !1; --i > -1;) n[i]._kill(t, e) && (r = !0); return r }, g.clear = function(t) { var e = this.getChildren(!1, !0, !0),
                        n = e.length; for (this._time = this._totalTime = 0; --n > -1;) e[n]._enabled(!1, !1); return !1 !== t && (this._labels = {}), this._uncache(!0) }, g.invalidate = function() { for (var e = this._first; e;) e.invalidate(), e = e._next; return t.prototype.invalidate.call(this) }, g._enabled = function(t, n) { if (t === this._gc)
                        for (var i = this._first; i;) i._enabled(t, !0), i = i._next; return e.prototype._enabled.call(this, t, n) }, g.totalTime = function(e, n, i) { this._forcingPlayhead = !0; var r = t.prototype.totalTime.apply(this, arguments); return this._forcingPlayhead = !1, r }, g.duration = function(t) { return arguments.length ? (0 !== this.duration() && 0 !== t && this.timeScale(this._duration / t), this) : (this._dirty && this.totalDuration(), this._duration) }, g.totalDuration = function(t) { if (!arguments.length) { if (this._dirty) { for (var e, n, i = 0, r = this._last, s = 999999999999; r;) e = r._prev, r._dirty && r.totalDuration(), r._startTime > s && this._sortChildren && !r._paused && !this._calculatingDuration ? (this._calculatingDuration = 1, this.add(r, r._startTime - r._delay), this._calculatingDuration = 0) : s = r._startTime, r._startTime < 0 && !r._paused && (i -= r._startTime, this._timeline.smoothChildTiming && (this._startTime += r._startTime / this._timeScale, this._time -= r._startTime, this._totalTime -= r._startTime, this._rawPrevTime -= r._startTime), this.shiftChildren(-r._startTime, !1, -9999999999), s = 0), n = r._startTime + r._totalDuration / r._timeScale, n > i && (i = n), r = e;
                            this._duration = this._totalDuration = i, this._dirty = !1 } return this._totalDuration } return t && this.totalDuration() ? this.timeScale(this._totalDuration / t) : this }, g.paused = function(e) { if (!e)
                        for (var n = this._first, i = this._time; n;) n._startTime === i && "isPause" === n.data && (n._rawPrevTime = 0), n = n._next; return t.prototype.paused.apply(this, arguments) }, g.usesFrames = function() { for (var e = this._timeline; e._timeline;) e = e._timeline; return e === t._rootFramesTimeline }, g.rawTime = function(t) { return t && (this._paused || this._repeat && this.time() > 0 && this.totalProgress() < 1) ? this._totalTime % (this._duration + this._repeatDelay) : this._paused ? this._totalTime : (this._timeline.rawTime(t) - this._startTime) * this._timeScale }, i }, !0), _gsScope._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function(t, e, n) { var i = function(e) { t.call(this, e), this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._cycle = 0, this._yoyo = !0 === this.vars.yoyo, this._dirty = !0 },
                    r = e._internals,
                    s = r.lazyTweens,
                    o = r.lazyRender,
                    a = _gsScope._gsDefine.globals,
                    l = new n(null, null, 1, 0),
                    u = i.prototype = new t; return u.constructor = i, u.kill()._gc = !1, i.version = "1.20.4", u.invalidate = function() { return this._yoyo = !0 === this.vars.yoyo, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), t.prototype.invalidate.call(this) }, u.addCallback = function(t, n, i, r) { return this.add(e.delayedCall(0, t, i, r), n) }, u.removeCallback = function(t, e) { if (t)
                        if (null == e) this._kill(null, t);
                        else
                            for (var n = this.getTweensOf(t, !1), i = n.length, r = this._parseTimeOrLabel(e); --i > -1;) n[i]._startTime === r && n[i]._enabled(!1, !1);
                    return this }, u.removePause = function(e) { return this.removeCallback(t._internals.pauseCallback, e) }, u.tweenTo = function(t, n) { n = n || {}; var i, r, s, o = { ease: l, useFrames: this.usesFrames(), immediateRender: !1, lazy: !1 },
                        u = n.repeat && a.TweenMax || e; for (r in n) o[r] = n[r]; return o.time = this._parseTimeOrLabel(t), i = Math.abs(Number(o.time) - this._time) / this._timeScale || .001, s = new u(this, i, o), o.onStart = function() { s.target.paused(!0), s.vars.time === s.target.time() || i !== s.duration() || s.isFromTo || s.duration(Math.abs(s.vars.time - s.target.time()) / s.target._timeScale).render(s.time(), !0, !0), n.onStart && n.onStart.apply(n.onStartScope || n.callbackScope || s, n.onStartParams || []) }, s }, u.tweenFromTo = function(t, e, n) { n = n || {}, t = this._parseTimeOrLabel(t), n.startAt = { onComplete: this.seek, onCompleteParams: [t], callbackScope: this }, n.immediateRender = !1 !== n.immediateRender; var i = this.tweenTo(e, n); return i.isFromTo = 1, i.duration(Math.abs(i.vars.time - t) / this._timeScale || .001) }, u.render = function(t, e, n) { this._gc && this._enabled(!0, !1); var i, r, a, l, u, c, h, p, d = this._time,
                        f = this._dirty ? this.totalDuration() : this._totalDuration,
                        g = this._duration,
                        m = this._totalTime,
                        v = this._startTime,
                        y = this._timeScale,
                        _ = this._rawPrevTime,
                        x = this._paused,
                        b = this._cycle; if (d !== this._time && (t += this._time - d), t >= f - 1e-7 && t >= 0) this._locked || (this._totalTime = f, this._cycle = this._repeat), this._reversed || this._hasPausedChild() || (r = !0, l = "onComplete", u = !!this._timeline.autoRemoveChildren, 0 === this._duration && (t <= 0 && t >= -1e-7 || _ < 0 || 1e-10 === _) && _ !== t && this._first && (u = !0, _ > 1e-10 && (l = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : 1e-10, this._yoyo && 0 != (1 & this._cycle) ? this._time = t = 0 : (this._time = g, t = g + 1e-4);
                    else if (t < 1e-7)
                        if (this._locked || (this._totalTime = this._cycle = 0), this._time = 0, (0 !== d || 0 === g && 1e-10 !== _ && (_ > 0 || t < 0 && _ >= 0) && !this._locked) && (l = "onReverseComplete", r = this._reversed), t < 0) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (u = r = !0, l = "onReverseComplete") : _ >= 0 && this._first && (u = !0), this._rawPrevTime = t;
                        else { if (this._rawPrevTime = g || !e || t || this._rawPrevTime === t ? t : 1e-10, 0 === t && r)
                                for (i = this._first; i && 0 === i._startTime;) i._duration || (r = !1), i = i._next;
                            t = 0, this._initted || (u = !0) }
                    else if (0 === g && _ < 0 && (u = !0), this._time = this._rawPrevTime = t, this._locked || (this._totalTime = t, 0 !== this._repeat && (c = g + this._repeatDelay, this._cycle = this._totalTime / c >> 0, 0 !== this._cycle && this._cycle === this._totalTime / c && m <= t && this._cycle--, this._time = this._totalTime - this._cycle * c, this._yoyo && 0 != (1 & this._cycle) && (this._time = g - this._time), this._time > g ? (this._time = g, t = g + 1e-4) : this._time < 0 ? this._time = t = 0 : t = this._time)), this._hasPause && !this._forcingPlayhead && !e) { if ((t = this._time) >= d || this._repeat && b !== this._cycle)
                            for (i = this._first; i && i._startTime <= t && !h;) i._duration || "isPause" !== i.data || i.ratio || 0 === i._startTime && 0 === this._rawPrevTime || (h = i), i = i._next;
                        else
                            for (i = this._last; i && i._startTime >= t && !h;) i._duration || "isPause" === i.data && i._rawPrevTime > 0 && (h = i), i = i._prev;
                        h && h._startTime < g && (this._time = t = h._startTime, this._totalTime = t + this._cycle * (this._totalDuration + this._repeatDelay)) } if (this._cycle !== b && !this._locked) { var w = this._yoyo && 0 != (1 & b),
                            T = w === (this._yoyo && 0 != (1 & this._cycle)),
                            C = this._totalTime,
                            S = this._cycle,
                            k = this._rawPrevTime,
                            A = this._time; if (this._totalTime = b * g, this._cycle < b ? w = !w : this._totalTime += g, this._time = d, this._rawPrevTime = 0 === g ? _ - 1e-4 : _, this._cycle = b, this._locked = !0, d = w ? 0 : g, this.render(d, e, 0 === g), e || this._gc || this.vars.onRepeat && (this._cycle = S, this._locked = !1, this._callback("onRepeat")), d !== this._time) return; if (T && (this._cycle = b, this._locked = !0, d = w ? g + 1e-4 : -1e-4, this.render(d, !0, !1)), this._locked = !1, this._paused && !x) return;
                        this._time = A, this._totalTime = C, this._cycle = S, this._rawPrevTime = k } if (!(this._time !== d && this._first || n || u || h)) return void(m !== this._totalTime && this._onUpdate && (e || this._callback("onUpdate"))); if (this._initted || (this._initted = !0), this._active || !this._paused && this._totalTime !== m && t > 0 && (this._active = !0), 0 === m && this.vars.onStart && (0 === this._totalTime && this._totalDuration || e || this._callback("onStart")), (p = this._time) >= d)
                        for (i = this._first; i && (a = i._next, p === this._time && (!this._paused || x));)(i._active || i._startTime <= this._time && !i._paused && !i._gc) && (h === i && this.pause(), i._reversed ? i.render((i._dirty ? i.totalDuration() : i._totalDuration) - (t - i._startTime) * i._timeScale, e, n) : i.render((t - i._startTime) * i._timeScale, e, n)), i = a;
                    else
                        for (i = this._last; i && (a = i._prev, p === this._time && (!this._paused || x));) { if (i._active || i._startTime <= d && !i._paused && !i._gc) { if (h === i) { for (h = i._prev; h && h.endTime() > this._time;) h.render(h._reversed ? h.totalDuration() - (t - h._startTime) * h._timeScale : (t - h._startTime) * h._timeScale, e, n), h = h._prev;
                                    h = null, this.pause() }
                                i._reversed ? i.render((i._dirty ? i.totalDuration() : i._totalDuration) - (t - i._startTime) * i._timeScale, e, n) : i.render((t - i._startTime) * i._timeScale, e, n) }
                            i = a }
                    this._onUpdate && (e || (s.length && o(), this._callback("onUpdate"))), l && (this._locked || this._gc || v !== this._startTime && y === this._timeScale || (0 === this._time || f >= this.totalDuration()) && (r && (s.length && o(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[l] && this._callback(l))) }, u.getActive = function(t, e, n) { null == t && (t = !0), null == e && (e = !0), null == n && (n = !1); var i, r, s = [],
                        o = this.getChildren(t, e, n),
                        a = 0,
                        l = o.length; for (i = 0; i < l; i++) r = o[i], r.isActive() && (s[a++] = r); return s }, u.getLabelAfter = function(t) { t || 0 !== t && (t = this._time); var e, n = this.getLabelsArray(),
                        i = n.length; for (e = 0; e < i; e++)
                        if (n[e].time > t) return n[e].name;
                    return null }, u.getLabelBefore = function(t) { null == t && (t = this._time); for (var e = this.getLabelsArray(), n = e.length; --n > -1;)
                        if (e[n].time < t) return e[n].name;
                    return null }, u.getLabelsArray = function() { var t, e = [],
                        n = 0; for (t in this._labels) e[n++] = { time: this._labels[t], name: t }; return e.sort(function(t, e) { return t.time - e.time }), e }, u.invalidate = function() { return this._locked = !1, t.prototype.invalidate.call(this) }, u.progress = function(t, e) { return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this._time / this.duration() || 0 }, u.totalProgress = function(t, e) { return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration() || 0 }, u.totalDuration = function(e) { return arguments.length ? -1 !== this._repeat && e ? this.timeScale(this.totalDuration() / e) : this : (this._dirty && (t.prototype.totalDuration.call(this), this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), this._totalDuration) }, u.time = function(t, e) { return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 != (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time }, u.repeat = function(t) { return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat }, u.repeatDelay = function(t) { return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay }, u.yoyo = function(t) { return arguments.length ? (this._yoyo = t, this) : this._yoyo }, u.currentLabel = function(t) { return arguments.length ? this.seek(t, !0) : this.getLabelBefore(this._time + 1e-8) }, i }, !0),
            function() {
                var t = 180 / Math.PI,
                    e = [],
                    n = [],
                    i = [],
                    r = {},
                    s = _gsScope._gsDefine.globals,
                    o = function(t, e, n, i) { n === i && (n = i - (i - e) / 1e6), t === e && (e = t + (n - t) / 1e6), this.a = t, this.b = e, this.c = n, this.d = i, this.da = i - t, this.ca = n - t, this.ba = e - t },
                    a = function(t, e, n, i) { var r = { a: t },
                            s = {},
                            o = {},
                            a = { c: i },
                            l = (t + e) / 2,
                            u = (e + n) / 2,
                            c = (n + i) / 2,
                            h = (l + u) / 2,
                            p = (u + c) / 2,
                            d = (p - h) / 8; return r.b = l + (t - l) / 4, s.b = h + d, r.c = s.a = (r.b + s.b) / 2, s.c = o.a = (h + p) / 2, o.b = p - d, a.b = c + (i - c) / 4, o.c = a.a = (o.b + a.b) / 2, [r, s, o, a] },
                    l = function(t, r, s, o, l) { var u, c, h, p, d, f, g, m, v, y, _, x, b, w = t.length - 1,
                            T = 0,
                            C = t[0].a; for (u = 0; u < w; u++) d = t[T], c = d.a, h = d.d, p = t[T + 1].d, l ? (_ = e[u], x = n[u], b = (x + _) * r * .25 / (o ? .5 : i[u] || .5), f = h - (h - c) * (o ? .5 * r : 0 !== _ ? b / _ : 0), g = h + (p - h) * (o ? .5 * r : 0 !== x ? b / x : 0), m = h - (f + ((g - f) * (3 * _ / (_ + x) + .5) / 4 || 0))) : (f = h - (h - c) * r * .5, g = h + (p - h) * r * .5, m = h - (f + g) / 2), f += m, g += m, d.c = v = f, d.b = 0 !== u ? C : C = d.a + .6 * (d.c - d.a), d.da = h - c, d.ca = v - c, d.ba = C - c, s ? (y = a(c, C, v, h), t.splice(T, 1, y[0], y[1], y[2], y[3]), T += 4) : T++, C = g;
                        d = t[T], d.b = C, d.c = C + .4 * (d.d - C), d.da = d.d - d.a, d.ca = d.c - d.a, d.ba = C - d.a, s && (y = a(d.a, C, d.c, d.d), t.splice(T, 1, y[0], y[1], y[2], y[3])) },
                    u = function(t, i, r, s) { var a, l, u, c, h, p, d = []; if (s)
                            for (t = [s].concat(t), l = t.length; --l > -1;) "string" == typeof(p = t[l][i]) && "=" === p.charAt(1) && (t[l][i] = s[i] + Number(p.charAt(0) + p.substr(2))); if ((a = t.length - 2) < 0) return d[0] = new o(t[0][i], 0, 0, t[0][i]), d; for (l = 0; l < a; l++) u = t[l][i], c = t[l + 1][i], d[l] = new o(u, 0, 0, c), r && (h = t[l + 2][i], e[l] = (e[l] || 0) + (c - u) * (c - u), n[l] = (n[l] || 0) + (h - c) * (h - c)); return d[l] = new o(t[l][i], 0, 0, t[l + 1][i]), d },
                    c = function(t, s, o, a, c, h) {
                        var p, d, f, g, m, v, y, _, x = {},
                            b = [],
                            w = h || t[0];
                        c = "string" == typeof c ? "," + c + "," : ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,", null == s && (s = 1);
                        for (d in t[0]) b.push(d);
                        if (t.length > 1) { for (_ = t[t.length - 1], y = !0, p = b.length; --p > -1;)
                                if (d = b[p], Math.abs(w[d] - _[d]) > .05) { y = !1; break }
                            y && (t = t.concat(), h && t.unshift(h), t.push(t[1]), h = t[t.length - 3]) }
                        for (e.length = n.length = i.length = 0, p = b.length; --p > -1;) d = b[p], r[d] = -1 !== c.indexOf("," + d + ","), x[d] = u(t, d, r[d], h);
                        for (p = e.length; --p > -1;) e[p] = Math.sqrt(e[p]), n[p] = Math.sqrt(n[p]);
                        if (!a) {
                            for (p = b.length; --p > -1;)
                                if (r[d])
                                    for (f = x[b[p]], v = f.length - 1, g = 0; g < v; g++) m = f[g + 1].da / n[g] + f[g].da / e[g] || 0, i[g] = (i[g] || 0) + m * m;
                            for (p = i.length; --p > -1;) i[p] = Math.sqrt(i[p])
                        }
                        for (p = b.length, g = o ? 4 : 1; --p > -1;) d = b[p], f = x[d], l(f, s, o, a, r[d]), y && (f.splice(0, g), f.splice(f.length - g, g));
                        return x
                    },
                    h = function(t, e, n) { e = e || "soft"; var i, r, s, a, l, u, c, h, p, d, f, g = {},
                            m = "cubic" === e ? 3 : 2,
                            v = "soft" === e,
                            y = []; if (v && n && (t = [n].concat(t)), null == t || t.length < m + 1) throw "invalid Bezier data"; for (p in t[0]) y.push(p); for (u = y.length; --u > -1;) { for (p = y[u], g[p] = l = [], d = 0, h = t.length, c = 0; c < h; c++) i = null == n ? t[c][p] : "string" == typeof(f = t[c][p]) && "=" === f.charAt(1) ? n[p] + Number(f.charAt(0) + f.substr(2)) : Number(f), v && c > 1 && c < h - 1 && (l[d++] = (i + l[d - 2]) / 2), l[d++] = i; for (h = d - m + 1, d = 0, c = 0; c < h; c += m) i = l[c], r = l[c + 1], s = l[c + 2], a = 2 === m ? 0 : l[c + 3], l[d++] = f = 3 === m ? new o(i, r, s, a) : new o(i, (2 * r + i) / 3, (2 * r + s) / 3, s);
                            l.length = d } return g },
                    p = function(t, e, n) { for (var i, r, s, o, a, l, u, c, h, p, d, f = 1 / n, g = t.length; --g > -1;)
                            for (p = t[g], s = p.a, o = p.d - s, a = p.c - s, l = p.b - s, i = r = 0, c = 1; c <= n; c++) u = f * c, h = 1 - u, i = r - (r = (u * u * o + 3 * h * (u * a + h * l)) * u), d = g * n + c - 1, e[d] = (e[d] || 0) + i * i },
                    d = function(t, e) { e = e >> 0 || 6; var n, i, r, s, o = [],
                            a = [],
                            l = 0,
                            u = 0,
                            c = e - 1,
                            h = [],
                            d = []; for (n in t) p(t[n], o, e); for (r = o.length, i = 0; i < r; i++) l += Math.sqrt(o[i]), s = i % e, d[s] = l, s === c && (u += l, s = i / e >> 0, h[s] = d, a[s] = u, l = 0, d = []); return { length: u, lengths: a, segments: h } },
                    f = _gsScope._gsDefine.plugin({ propName: "bezier", priority: -1, version: "1.3.8", API: 2, global: !0, init: function(t, e, n) { this._target = t, e instanceof Array && (e = { values: e }), this._func = {}, this._mod = {}, this._props = [], this._timeRes = null == e.timeResolution ? 6 : parseInt(e.timeResolution, 10); var i, r, s, o, a, l = e.values || [],
                                u = {},
                                p = l[0],
                                f = e.autoRotate || n.vars.orientToBezier;
                            this._autoRotate = f ? f instanceof Array ? f : [
                                ["x", "y", "rotation", !0 === f ? 0 : Number(f) || 0]
                            ] : null; for (i in p) this._props.push(i); for (s = this._props.length; --s > -1;) i = this._props[s], this._overwriteProps.push(i), r = this._func[i] = "function" == typeof t[i], u[i] = r ? t[i.indexOf("set") || "function" != typeof t["get" + i.substr(3)] ? i : "get" + i.substr(3)]() : parseFloat(t[i]), a || u[i] !== l[0][i] && (a = u); if (this._beziers = "cubic" !== e.type && "quadratic" !== e.type && "soft" !== e.type ? c(l, isNaN(e.curviness) ? 1 : e.curviness, !1, "thruBasic" === e.type, e.correlate, a) : h(l, e.type, u), this._segCount = this._beziers[i].length, this._timeRes) { var g = d(this._beziers, this._timeRes);
                                this._length = g.length, this._lengths = g.lengths, this._segments = g.segments, this._l1 = this._li = this._s1 = this._si = 0, this._l2 = this._lengths[0], this._curSeg = this._segments[0], this._s2 = this._curSeg[0], this._prec = 1 / this._curSeg.length } if (f = this._autoRotate)
                                for (this._initialRotations = [], f[0] instanceof Array || (this._autoRotate = f = [f]), s = f.length; --s > -1;) { for (o = 0; o < 3; o++) i = f[s][o], this._func[i] = "function" == typeof t[i] && t[i.indexOf("set") || "function" != typeof t["get" + i.substr(3)] ? i : "get" + i.substr(3)];
                                    i = f[s][2], this._initialRotations[s] = (this._func[i] ? this._func[i].call(this._target) : this._target[i]) || 0, this._overwriteProps.push(i) }
                            return this._startRatio = n.vars.runBackwards ? 1 : 0, !0 }, set: function(e) { var n, i, r, s, o, a, l, u, c, h, p = this._segCount,
                                d = this._func,
                                f = this._target,
                                g = e !== this._startRatio; if (this._timeRes) { if (c = this._lengths, h = this._curSeg, e *= this._length, r = this._li, e > this._l2 && r < p - 1) { for (u = p - 1; r < u && (this._l2 = c[++r]) <= e;);
                                    this._l1 = c[r - 1], this._li = r, this._curSeg = h = this._segments[r], this._s2 = h[this._s1 = this._si = 0] } else if (e < this._l1 && r > 0) { for (; r > 0 && (this._l1 = c[--r]) >= e;);
                                    0 === r && e < this._l1 ? this._l1 = 0 : r++, this._l2 = c[r], this._li = r, this._curSeg = h = this._segments[r], this._s1 = h[(this._si = h.length - 1) - 1] || 0, this._s2 = h[this._si] } if (n = r, e -= this._l1, r = this._si, e > this._s2 && r < h.length - 1) { for (u = h.length - 1; r < u && (this._s2 = h[++r]) <= e;);
                                    this._s1 = h[r - 1], this._si = r } else if (e < this._s1 && r > 0) { for (; r > 0 && (this._s1 = h[--r]) >= e;);
                                    0 === r && e < this._s1 ? this._s1 = 0 : r++, this._s2 = h[r], this._si = r }
                                a = (r + (e - this._s1) / (this._s2 - this._s1)) * this._prec || 0 } else n = e < 0 ? 0 : e >= 1 ? p - 1 : p * e >> 0, a = (e - n * (1 / p)) * p; for (i = 1 - a, r = this._props.length; --r > -1;) s = this._props[r], o = this._beziers[s][n], l = (a * a * o.da + 3 * i * (a * o.ca + i * o.ba)) * a + o.a, this._mod[s] && (l = this._mod[s](l, f)), d[s] ? f[s](l) : f[s] = l; if (this._autoRotate) { var m, v, y, _, x, b, w, T = this._autoRotate; for (r = T.length; --r > -1;) s = T[r][2], b = T[r][3] || 0, w = !0 === T[r][4] ? 1 : t, o = this._beziers[T[r][0]], m = this._beziers[T[r][1]], o && m && (o = o[n], m = m[n], v = o.a + (o.b - o.a) * a, _ = o.b + (o.c - o.b) * a, v += (_ - v) * a, _ += (o.c + (o.d - o.c) * a - _) * a, y = m.a + (m.b - m.a) * a, x = m.b + (m.c - m.b) * a, y += (x - y) * a, x += (m.c + (m.d - m.c) * a - x) * a, l = g ? Math.atan2(x - y, _ - v) * w + b : this._initialRotations[r], this._mod[s] && (l = this._mod[s](l, f)), d[s] ? f[s](l) : f[s] = l) } } }),
                    g = f.prototype;
                f.bezierThrough = c, f.cubicToQuadratic = a, f._autoCSS = !0, f.quadraticToCubic = function(t, e, n) { return new o(t, (2 * e + t) / 3, (2 * e + n) / 3, n) }, f._cssRegister = function() { var t = s.CSSPlugin; if (t) { var e = t._internals,
                            n = e._parseToProxy,
                            i = e._setPluginRatio,
                            r = e.CSSPropTween;
                        e._registerComplexSpecialProp("bezier", { parser: function(t, e, s, o, a, l) { e instanceof Array && (e = { values: e }), l = new f; var u, c, h, p = e.values,
                                    d = p.length - 1,
                                    g = [],
                                    m = {}; if (d < 0) return a; for (u = 0; u <= d; u++) h = n(t, p[u], o, a, l, d !== u), g[u] = h.end; for (c in e) m[c] = e[c]; return m.values = g, a = new r(t, "bezier", 0, 0, h.pt, 2), a.data = h, a.plugin = l, a.setRatio = i, 0 === m.autoRotate && (m.autoRotate = !0), !m.autoRotate || m.autoRotate instanceof Array || (u = !0 === m.autoRotate ? 0 : Number(m.autoRotate), m.autoRotate = null != h.end.left ? [
                                    ["left", "top", "rotation", u, !1]
                                ] : null != h.end.x && [
                                    ["x", "y", "rotation", u, !1]
                                ]), m.autoRotate && (o._transform || o._enableTransforms(!1), h.autoRotate = o._target._gsTransform, h.proxy.rotation = h.autoRotate.rotation || 0, o._overwriteProps.push("rotation")), l._onInitTween(h.proxy, m, o._tween), a } }) } }, g._mod = function(t) { for (var e, n = this._overwriteProps, i = n.length; --i > -1;)(e = t[n[i]]) && "function" == typeof e && (this._mod[n[i]] = e) }, g._kill = function(t) { var e, n, i = this._props; for (e in this._beziers)
                        if (e in t)
                            for (delete this._beziers[e], delete this._func[e], n = i.length; --n > -1;) i[n] === e && i.splice(n, 1);
                    if (i = this._autoRotate)
                        for (n = i.length; --n > -1;) t[i[n][2]] && i.splice(n, 1); return this._super._kill.call(this, t) }
            }(), _gsScope._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function(t, e) {
                var n, i, r, s, o = function() { t.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = o.prototype.setRatio },
                    a = _gsScope._gsDefine.globals,
                    l = {},
                    u = o.prototype = new t("css");
                u.constructor = o, o.version = "1.20.5", o.API = 2, o.defaultTransformPerspective = 0, o.defaultSkewType = "compensated", o.defaultSmoothOrigin = !0, u = "px", o.suffixMap = { top: u, right: u, bottom: u, left: u, width: u, height: u, fontSize: u, padding: u, margin: u, perspective: u, lineHeight: "" };
                var c, h, p, d, f, g, m, v, y = /(?:\-|\.|\b)(\d|\.|e\-)+/g,
                    _ = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
                    x = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
                    b = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
                    w = /(?:\d|\-|\+|=|#|\.)*/g,
                    T = /opacity *= *([^)]*)/i,
                    C = /opacity:([^;]*)/i,
                    S = /alpha\(opacity *=.+?\)/i,
                    k = /^(rgb|hsl)/,
                    A = /([A-Z])/g,
                    E = /-([a-z])/gi,
                    P = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
                    D = function(t, e) { return e.toUpperCase() },
                    O = /(?:Left|Right|Width)/i,
                    F = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
                    M = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
                    N = /,(?=[^\)]*(?:\(|$))/gi,
                    $ = /[\s,\(]/i,
                    R = Math.PI / 180,
                    j = 180 / Math.PI,
                    L = {},
                    z = { style: {} },
                    B = _gsScope.document || { createElement: function() { return z } },
                    q = function(t, e) { return B.createElementNS ? B.createElementNS(e || "http://www.w3.org/1999/xhtml", t) : B.createElement(t) },
                    I = q("div"),
                    H = q("img"),
                    W = o._internals = { _specialProps: l },
                    X = (_gsScope.navigator || {}).userAgent || "",
                    U = function() { var t = X.indexOf("Android"),
                            e = q("a"); return p = -1 !== X.indexOf("Safari") && -1 === X.indexOf("Chrome") && (-1 === t || parseFloat(X.substr(t + 8, 2)) > 3), f = p && parseFloat(X.substr(X.indexOf("Version/") + 8, 2)) < 6, d = -1 !== X.indexOf("Firefox"), (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(X) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(X)) && (g = parseFloat(RegExp.$1)), !!e && (e.style.cssText = "top:1px;opacity:.55;", /^0.55/.test(e.style.opacity)) }(),
                    V = function(t) { return T.test("string" == typeof t ? t : (t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1 },
                    Y = function(t) { _gsScope.console && console.log(t) },
                    G = "",
                    Q = "",
                    Z = function(t, e) { e = e || I; var n, i, r = e.style; if (void 0 !== r[t]) return t; for (t = t.charAt(0).toUpperCase() + t.substr(1), n = ["O", "Moz", "ms", "Ms", "Webkit"], i = 5; --i > -1 && void 0 === r[n[i] + t];); return i >= 0 ? (Q = 3 === i ? "ms" : n[i], G = "-" + Q.toLowerCase() + "-", Q + t) : null },
                    K = ("undefined" != typeof window ? window : B.defaultView || { getComputedStyle: function() {} }).getComputedStyle,
                    J = o.getStyle = function(t, e, n, i, r) { var s; return U || "opacity" !== e ? (!i && t.style[e] ? s = t.style[e] : (n = n || K(t)) ? s = n[e] || n.getPropertyValue(e) || n.getPropertyValue(e.replace(A, "-$1").toLowerCase()) : t.currentStyle && (s = t.currentStyle[e]), null == r || s && "none" !== s && "auto" !== s && "auto auto" !== s ? s : r) : V(t) },
                    tt = W.convertToPixels = function(t, n, i, r, s) { if ("px" === r || !r && "lineHeight" !== n) return i; if ("auto" === r || !i) return 0; var a, l, u, c = O.test(n),
                            h = t,
                            p = I.style,
                            d = i < 0,
                            f = 1 === i; if (d && (i = -i), f && (i *= 100), "lineHeight" !== n || r)
                            if ("%" === r && -1 !== n.indexOf("border")) a = i / 100 * (c ? t.clientWidth : t.clientHeight);
                            else { if (p.cssText = "border:0 solid red;position:" + J(t, "position") + ";line-height:0;", "%" !== r && h.appendChild && "v" !== r.charAt(0) && "rem" !== r) p[c ? "borderLeftWidth" : "borderTopWidth"] = i + r;
                                else { if (h = t.parentNode || B.body, -1 !== J(h, "display").indexOf("flex") && (p.position = "absolute"), l = h._gsCache, u = e.ticker.frame, l && c && l.time === u) return l.width * i / 100;
                                    p[c ? "width" : "height"] = i + r }
                                h.appendChild(I), a = parseFloat(I[c ? "offsetWidth" : "offsetHeight"]), h.removeChild(I), c && "%" === r && !1 !== o.cacheWidths && (l = h._gsCache = h._gsCache || {}, l.time = u, l.width = a / i * 100), 0 !== a || s || (a = tt(t, n, i, r, !0)) }
                        else l = K(t).lineHeight, t.style.lineHeight = i, a = parseFloat(K(t).lineHeight), t.style.lineHeight = l; return f && (a /= 100), d ? -a : a },
                    et = W.calculateOffset = function(t, e, n) { if ("absolute" !== J(t, "position", n)) return 0; var i = "left" === e ? "Left" : "Top",
                            r = J(t, "margin" + i, n); return t["offset" + i] - (tt(t, e, parseFloat(r), r.replace(w, "")) || 0) },
                    nt = function(t, e) { var n, i, r, s = {}; if (e = e || K(t, null))
                            if (n = e.length)
                                for (; --n > -1;) r = e[n], -1 !== r.indexOf("-transform") && Pt !== r || (s[r.replace(E, D)] = e.getPropertyValue(r));
                            else
                                for (n in e) - 1 !== n.indexOf("Transform") && Et !== n || (s[n] = e[n]);
                        else if (e = t.currentStyle || t.style)
                            for (n in e) "string" == typeof n && void 0 === s[n] && (s[n.replace(E, D)] = e[n]); return U || (s.opacity = V(t)), i = Ht(t, e, !1), s.rotation = i.rotation, s.skewX = i.skewX, s.scaleX = i.scaleX, s.scaleY = i.scaleY, s.x = i.x, s.y = i.y, Ot && (s.z = i.z, s.rotationX = i.rotationX, s.rotationY = i.rotationY, s.scaleZ = i.scaleZ), s.filters && delete s.filters, s },
                    it = function(t, e, n, i, r) { var s, o, a, l = {},
                            u = t.style; for (o in n) "cssText" !== o && "length" !== o && isNaN(o) && (e[o] !== (s = n[o]) || r && r[o]) && -1 === o.indexOf("Origin") && ("number" != typeof s && "string" != typeof s || (l[o] = "auto" !== s || "left" !== o && "top" !== o ? "" !== s && "auto" !== s && "none" !== s || "string" != typeof e[o] || "" === e[o].replace(b, "") ? s : 0 : et(t, o), void 0 !== u[o] && (a = new yt(u, o, u[o], a)))); if (i)
                            for (o in i) "className" !== o && (l[o] = i[o]); return { difs: l, firstMPT: a } },
                    rt = { width: ["Left", "Right"], height: ["Top", "Bottom"] },
                    st = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
                    ot = function(t, e, n) { if ("svg" === (t.nodeName + "").toLowerCase()) return (n || K(t))[e] || 0; if (t.getCTM && Bt(t)) return t.getBBox()[e] || 0; var i = parseFloat("width" === e ? t.offsetWidth : t.offsetHeight),
                            r = rt[e],
                            s = r.length; for (n = n || K(t, null); --s > -1;) i -= parseFloat(J(t, "padding" + r[s], n, !0)) || 0, i -= parseFloat(J(t, "border" + r[s] + "Width", n, !0)) || 0; return i },
                    at = function(t, e) { if ("contain" === t || "auto" === t || "auto auto" === t) return t + " ";
                        null != t && "" !== t || (t = "0 0"); var n, i = t.split(" "),
                            r = -1 !== t.indexOf("left") ? "0%" : -1 !== t.indexOf("right") ? "100%" : i[0],
                            s = -1 !== t.indexOf("top") ? "0%" : -1 !== t.indexOf("bottom") ? "100%" : i[1]; if (i.length > 3 && !e) { for (i = t.split(", ").join(",").split(","), t = [], n = 0; n < i.length; n++) t.push(at(i[n])); return t.join(",") } return null == s ? s = "center" === r ? "50%" : "0" : "center" === s && (s = "50%"), ("center" === r || isNaN(parseFloat(r)) && -1 === (r + "").indexOf("=")) && (r = "50%"), t = r + " " + s + (i.length > 2 ? " " + i[2] : ""), e && (e.oxp = -1 !== r.indexOf("%"), e.oyp = -1 !== s.indexOf("%"), e.oxr = "=" === r.charAt(1), e.oyr = "=" === s.charAt(1), e.ox = parseFloat(r.replace(b, "")), e.oy = parseFloat(s.replace(b, "")), e.v = t), e || t },
                    lt = function(t, e) { return "function" == typeof t && (t = t(v, m)), "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) : parseFloat(t) - parseFloat(e) || 0 },
                    ut = function(t, e) { return "function" == typeof t && (t = t(v, m)), null == t ? e : "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) + e : parseFloat(t) || 0 },
                    ct = function(t, e, n, i) { var r, s, o, a, l; return "function" == typeof t && (t = t(v, m)), null == t ? a = e : "number" == typeof t ? a = t : (r = 360, s = t.split("_"), l = "=" === t.charAt(1), o = (l ? parseInt(t.charAt(0) + "1", 10) * parseFloat(s[0].substr(2)) : parseFloat(s[0])) * (-1 === t.indexOf("rad") ? 1 : j) - (l ? 0 : e), s.length && (i && (i[n] = e + o), -1 !== t.indexOf("short") && (o %= r) !== o % (r / 2) && (o = o < 0 ? o + r : o - r), -1 !== t.indexOf("_cw") && o < 0 ? o = (o + 9999999999 * r) % r - (o / r | 0) * r : -1 !== t.indexOf("ccw") && o > 0 && (o = (o - 9999999999 * r) % r - (o / r | 0) * r)), a = e + o), a < 1e-6 && a > -1e-6 && (a = 0), a },
                    ht = { aqua: [0, 255, 255], lime: [0, 255, 0], silver: [192, 192, 192], black: [0, 0, 0], maroon: [128, 0, 0], teal: [0, 128, 128], blue: [0, 0, 255], navy: [0, 0, 128], white: [255, 255, 255], fuchsia: [255, 0, 255], olive: [128, 128, 0], yellow: [255, 255, 0], orange: [255, 165, 0], gray: [128, 128, 128], purple: [128, 0, 128], green: [0, 128, 0], red: [255, 0, 0], pink: [255, 192, 203], cyan: [0, 255, 255], transparent: [255, 255, 255, 0] },
                    pt = function(t, e, n) { return t = t < 0 ? t + 1 : t > 1 ? t - 1 : t, 255 * (6 * t < 1 ? e + (n - e) * t * 6 : t < .5 ? n : 3 * t < 2 ? e + (n - e) * (2 / 3 - t) * 6 : e) + .5 | 0 },
                    dt = o.parseColor = function(t, e) { var n, i, r, s, o, a, l, u, c, h, p; if (t)
                            if ("number" == typeof t) n = [t >> 16, t >> 8 & 255, 255 & t];
                            else { if ("," === t.charAt(t.length - 1) && (t = t.substr(0, t.length - 1)), ht[t]) n = ht[t];
                                else if ("#" === t.charAt(0)) 4 === t.length && (i = t.charAt(1), r = t.charAt(2), s = t.charAt(3), t = "#" + i + i + r + r + s + s), t = parseInt(t.substr(1), 16), n = [t >> 16, t >> 8 & 255, 255 & t];
                                else if ("hsl" === t.substr(0, 3))
                                    if (n = p = t.match(y), e) { if (-1 !== t.indexOf("=")) return t.match(_) } else o = Number(n[0]) % 360 / 360, a = Number(n[1]) / 100, l = Number(n[2]) / 100, r = l <= .5 ? l * (a + 1) : l + a - l * a, i = 2 * l - r, n.length > 3 && (n[3] = Number(n[3])), n[0] = pt(o + 1 / 3, i, r), n[1] = pt(o, i, r), n[2] = pt(o - 1 / 3, i, r);
                                else n = t.match(y) || ht.transparent;
                                n[0] = Number(n[0]), n[1] = Number(n[1]), n[2] = Number(n[2]), n.length > 3 && (n[3] = Number(n[3])) }
                        else n = ht.black; return e && !p && (i = n[0] / 255, r = n[1] / 255, s = n[2] / 255, u = Math.max(i, r, s), c = Math.min(i, r, s), l = (u + c) / 2, u === c ? o = a = 0 : (h = u - c, a = l > .5 ? h / (2 - u - c) : h / (u + c), o = u === i ? (r - s) / h + (r < s ? 6 : 0) : u === r ? (s - i) / h + 2 : (i - r) / h + 4, o *= 60), n[0] = o + .5 | 0, n[1] = 100 * a + .5 | 0, n[2] = 100 * l + .5 | 0), n },
                    ft = function(t, e) { var n, i, r, s = t.match(gt) || [],
                            o = 0,
                            a = ""; if (!s.length) return t; for (n = 0; n < s.length; n++) i = s[n], r = t.substr(o, t.indexOf(i, o) - o), o += r.length + i.length, i = dt(i, e), 3 === i.length && i.push(1), a += r + (e ? "hsla(" + i[0] + "," + i[1] + "%," + i[2] + "%," + i[3] : "rgba(" + i.join(",")) + ")"; return a + t.substr(o) },
                    gt = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
                for (u in ht) gt += "|" + u + "\\b";
                gt = new RegExp(gt + ")", "gi"), o.colorStringFilter = function(t) { var e, n = t[0] + " " + t[1];
                    gt.test(n) && (e = -1 !== n.indexOf("hsl(") || -1 !== n.indexOf("hsla("), t[0] = ft(t[0], e), t[1] = ft(t[1], e)), gt.lastIndex = 0 }, e.defaultStringFilter || (e.defaultStringFilter = o.colorStringFilter);
                var mt = function(t, e, n, i) { if (null == t) return function(t) { return t }; var r, s = e ? (t.match(gt) || [""])[0] : "",
                            o = t.split(s).join("").match(x) || [],
                            a = t.substr(0, t.indexOf(o[0])),
                            l = ")" === t.charAt(t.length - 1) ? ")" : "",
                            u = -1 !== t.indexOf(" ") ? " " : ",",
                            c = o.length,
                            h = c > 0 ? o[0].replace(y, "") : ""; return c ? r = e ? function(t) { var e, p, d, f; if ("number" == typeof t) t += h;
                            else if (i && N.test(t)) { for (f = t.replace(N, "|").split("|"), d = 0; d < f.length; d++) f[d] = r(f[d]); return f.join(",") } if (e = (t.match(gt) || [s])[0], p = t.split(e).join("").match(x) || [], d = p.length, c > d--)
                                for (; ++d < c;) p[d] = n ? p[(d - 1) / 2 | 0] : o[d]; return a + p.join(u) + u + e + l + (-1 !== t.indexOf("inset") ? " inset" : "") } : function(t) { var e, s, p; if ("number" == typeof t) t += h;
                            else if (i && N.test(t)) { for (s = t.replace(N, "|").split("|"), p = 0; p < s.length; p++) s[p] = r(s[p]); return s.join(",") } if (e = t.match(x) || [], p = e.length, c > p--)
                                for (; ++p < c;) e[p] = n ? e[(p - 1) / 2 | 0] : o[p]; return a + e.join(u) + l } : function(t) { return t } },
                    vt = function(t) { return t = t.split(","),
                            function(e, n, i, r, s, o, a) { var l, u = (n + "").split(" "); for (a = {}, l = 0; l < 4; l++) a[t[l]] = u[l] = u[l] || u[(l - 1) / 2 >> 0]; return r.parse(e, a, s, o) } },
                    yt = (W._setPluginRatio = function(t) { this.plugin.setRatio(t); for (var e, n, i, r, s, o = this.data, a = o.proxy, l = o.firstMPT; l;) e = a[l.v], l.r ? e = l.r(e) : e < 1e-6 && e > -1e-6 && (e = 0), l.t[l.p] = e, l = l._next; if (o.autoRotate && (o.autoRotate.rotation = o.mod ? o.mod.call(this._tween, a.rotation, this.t, this._tween) : a.rotation), 1 === t || 0 === t)
                            for (l = o.firstMPT, s = 1 === t ? "e" : "b"; l;) { if (n = l.t, n.type) { if (1 === n.type) { for (r = n.xs0 + n.s + n.xs1, i = 1; i < n.l; i++) r += n["xn" + i] + n["xs" + (i + 1)];
                                        n[s] = r } } else n[s] = n.s + n.xs0;
                                l = l._next } }, function(t, e, n, i, r) { this.t = t, this.p = e, this.v = n, this.r = r, i && (i._prev = this, this._next = i) }),
                    _t = (W._parseToProxy = function(t, e, n, i, r, s) { var o, a, l, u, c, h = i,
                            p = {},
                            d = {},
                            f = n._transform,
                            g = L; for (n._transform = null, L = e, i = c = n.parse(t, e, i, r), L = g, s && (n._transform = f, h && (h._prev = null, h._prev && (h._prev._next = null))); i && i !== h;) { if (i.type <= 1 && (a = i.p, d[a] = i.s + i.c, p[a] = i.s, s || (u = new yt(i, "s", a, u, i.r), i.c = 0), 1 === i.type))
                                for (o = i.l; --o > 0;) l = "xn" + o, a = i.p + "_" + l, d[a] = i.data[l], p[a] = i[l], s || (u = new yt(i, l, a, u, i.rxp[l]));
                            i = i._next } return { proxy: p, end: d, firstMPT: u, pt: c } }, W.CSSPropTween = function(t, e, i, r, o, a, l, u, c, h, p) { this.t = t, this.p = e, this.s = i, this.c = r, this.n = l || e, t instanceof _t || s.push(this.n), this.r = u ? "function" == typeof u ? u : Math.round : u, this.type = a || 0, c && (this.pr = c, n = !0), this.b = void 0 === h ? i : h, this.e = void 0 === p ? i + r : p, o && (this._next = o, o._prev = this) }),
                    xt = function(t, e, n, i, r, s) { var o = new _t(t, e, n, i - n, r, -1, s); return o.b = n, o.e = o.xs0 = i, o },
                    bt = o.parseComplex = function(t, e, n, i, r, s, a, l, u, h) { n = n || s || "", "function" == typeof i && (i = i(v, m)), a = new _t(t, e, 0, 0, a, h ? 2 : 1, null, !1, l, n, i), i += "", r && gt.test(i + n) && (i = [n, i], o.colorStringFilter(i), n = i[0], i = i[1]); var p, d, f, g, x, b, w, T, C, S, k, A, E, P = n.split(", ").join(",").split(" "),
                            D = i.split(", ").join(",").split(" "),
                            O = P.length,
                            F = !1 !== c; for (-1 === i.indexOf(",") && -1 === n.indexOf(",") || (-1 !== (i + n).indexOf("rgb") || -1 !== (i + n).indexOf("hsl") ? (P = P.join(" ").replace(N, ", ").split(" "), D = D.join(" ").replace(N, ", ").split(" ")) : (P = P.join(" ").split(",").join(", ").split(" "), D = D.join(" ").split(",").join(", ").split(" ")), O = P.length), O !== D.length && (P = (s || "").split(" "), O = P.length), a.plugin = u, a.setRatio = h, gt.lastIndex = 0, p = 0; p < O; p++)
                            if (g = P[p], x = D[p] + "", (T = parseFloat(g)) || 0 === T) a.appendXtra("", T, lt(x, T), x.replace(_, ""), !(!F || -1 === x.indexOf("px")) && Math.round, !0);
                            else if (r && gt.test(g)) A = x.indexOf(")") + 1, A = ")" + (A ? x.substr(A) : ""), E = -1 !== x.indexOf("hsl") && U, S = x, g = dt(g, E), x = dt(x, E), C = g.length + x.length > 6, C && !U && 0 === x[3] ? (a["xs" + a.l] += a.l ? " transparent" : "transparent", a.e = a.e.split(D[p]).join("transparent")) : (U || (C = !1), E ? a.appendXtra(S.substr(0, S.indexOf("hsl")) + (C ? "hsla(" : "hsl("), g[0], lt(x[0], g[0]), ",", !1, !0).appendXtra("", g[1], lt(x[1], g[1]), "%,", !1).appendXtra("", g[2], lt(x[2], g[2]), C ? "%," : "%" + A, !1) : a.appendXtra(S.substr(0, S.indexOf("rgb")) + (C ? "rgba(" : "rgb("), g[0], x[0] - g[0], ",", Math.round, !0).appendXtra("", g[1], x[1] - g[1], ",", Math.round).appendXtra("", g[2], x[2] - g[2], C ? "," : A, Math.round), C && (g = g.length < 4 ? 1 : g[3], a.appendXtra("", g, (x.length < 4 ? 1 : x[3]) - g, A, !1))), gt.lastIndex = 0;
                        else if (b = g.match(y)) { if (!(w = x.match(_)) || w.length !== b.length) return a; for (f = 0, d = 0; d < b.length; d++) k = b[d], S = g.indexOf(k, f), a.appendXtra(g.substr(f, S - f), Number(k), lt(w[d], k), "", !(!F || "px" !== g.substr(S + k.length, 2)) && Math.round, 0 === d), f = S + k.length;
                            a["xs" + a.l] += g.substr(f) } else a["xs" + a.l] += a.l || a["xs" + a.l] ? " " + x : x; if (-1 !== i.indexOf("=") && a.data) { for (A = a.xs0 + a.data.s, p = 1; p < a.l; p++) A += a["xs" + p] + a.data["xn" + p];
                            a.e = A + a["xs" + p] } return a.l || (a.type = -1, a.xs0 = a.e), a.xfirst || a },
                    wt = 9;
                for (u = _t.prototype, u.l = u.pr = 0; --wt > 0;) u["xn" + wt] = 0, u["xs" + wt] = "";
                u.xs0 = "", u._next = u._prev = u.xfirst = u.data = u.plugin = u.setRatio = u.rxp = null, u.appendXtra = function(t, e, n, i, r, s) { var o = this,
                        a = o.l; return o["xs" + a] += s && (a || o["xs" + a]) ? " " + t : t || "", n || 0 === a || o.plugin ? (o.l++, o.type = o.setRatio ? 2 : 1, o["xs" + o.l] = i || "", a > 0 ? (o.data["xn" + a] = e + n, o.rxp["xn" + a] = r, o["xn" + a] = e, o.plugin || (o.xfirst = new _t(o, "xn" + a, e, n, o.xfirst || o, 0, o.n, r, o.pr), o.xfirst.xs0 = 0), o) : (o.data = { s: e + n }, o.rxp = {}, o.s = e, o.c = n, o.r = r, o)) : (o["xs" + a] += e + (i || ""), o) };
                var Tt = function(t, e) { e = e || {}, this.p = e.prefix ? Z(t) || t : t, l[t] = l[this.p] = this, this.format = e.formatter || mt(e.defaultValue, e.color, e.collapsible, e.multi), e.parser && (this.parse = e.parser), this.clrs = e.color, this.multi = e.multi, this.keyword = e.keyword, this.dflt = e.defaultValue, this.pr = e.priority || 0 },
                    Ct = W._registerComplexSpecialProp = function(t, e, n) { "object" != typeof e && (e = { parser: n }); var i, r = t.split(","),
                            s = e.defaultValue; for (n = n || [s], i = 0; i < r.length; i++) e.prefix = 0 === i && e.prefix, e.defaultValue = n[i] || s, new Tt(r[i], e) },
                    St = W._registerPluginProp = function(t) { if (!l[t]) { var e = t.charAt(0).toUpperCase() + t.substr(1) + "Plugin";
                            Ct(t, { parser: function(t, n, i, r, s, o, u) { var c = a.com.greensock.plugins[e]; return c ? (c._cssRegister(), l[i].parse(t, n, i, r, s, o, u)) : (Y("Error: " + e + " js file not loaded."), s) } }) } };
                u = Tt.prototype, u.parseComplex = function(t, e, n, i, r, s) { var o, a, l, u, c, h, p = this.keyword; if (this.multi && (N.test(n) || N.test(e) ? (a = e.replace(N, "|").split("|"), l = n.replace(N, "|").split("|")) : p && (a = [e], l = [n])), l) { for (u = l.length > a.length ? l.length : a.length, o = 0; o < u; o++) e = a[o] = a[o] || this.dflt, n = l[o] = l[o] || this.dflt, p && (c = e.indexOf(p), h = n.indexOf(p), c !== h && (-1 === h ? a[o] = a[o].split(p).join("") : -1 === c && (a[o] += " " + p)));
                        e = a.join(", "), n = l.join(", ") } return bt(t, this.p, e, n, this.clrs, this.dflt, i, this.pr, r, s) }, u.parse = function(t, e, n, i, s, o, a) { return this.parseComplex(t.style, this.format(J(t, this.p, r, !1, this.dflt)), this.format(e), s, o) }, o.registerSpecialProp = function(t, e, n) { Ct(t, { parser: function(t, i, r, s, o, a, l) { var u = new _t(t, r, 0, 0, o, 2, r, !1, n); return u.plugin = a, u.setRatio = e(t, i, s._tween, r), u }, priority: n }) }, o.useSVGTransformAttr = !0;
                var kt, At = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),
                    Et = Z("transform"),
                    Pt = G + "transform",
                    Dt = Z("transformOrigin"),
                    Ot = null !== Z("perspective"),
                    Ft = W.Transform = function() { this.perspective = parseFloat(o.defaultTransformPerspective) || 0, this.force3D = !(!1 === o.defaultForce3D || !Ot) && (o.defaultForce3D || "auto") },
                    Mt = _gsScope.SVGElement,
                    Nt = function(t, e, n) { var i, r = B.createElementNS("http://www.w3.org/2000/svg", t),
                            s = /([a-z])([A-Z])/g; for (i in n) r.setAttributeNS(null, i.replace(s, "$1-$2").toLowerCase(), n[i]); return e.appendChild(r), r },
                    $t = B.documentElement || {},
                    Rt = function() { var t, e, n, i = g || /Android/i.test(X) && !_gsScope.chrome; return B.createElementNS && !i && (t = Nt("svg", $t), e = Nt("rect", t, { width: 100, height: 50, x: 100 }), n = e.getBoundingClientRect().width, e.style[Dt] = "50% 50%", e.style[Et] = "scaleX(0.5)", i = n === e.getBoundingClientRect().width && !(d && Ot), $t.removeChild(t)), i }(),
                    jt = function(t, e, n, i, r, s) { var a, l, u, c, h, p, d, f, g, m, v, y, _, x, b = t._gsTransform,
                            w = It(t, !0);
                        b && (_ = b.xOrigin, x = b.yOrigin), (!i || (a = i.split(" ")).length < 2) && (d = t.getBBox(), 0 === d.x && 0 === d.y && d.width + d.height === 0 && (d = { x: parseFloat(t.hasAttribute("x") ? t.getAttribute("x") : t.hasAttribute("cx") ? t.getAttribute("cx") : 0) || 0, y: parseFloat(t.hasAttribute("y") ? t.getAttribute("y") : t.hasAttribute("cy") ? t.getAttribute("cy") : 0) || 0, width: 0, height: 0 }), e = at(e).split(" "), a = [(-1 !== e[0].indexOf("%") ? parseFloat(e[0]) / 100 * d.width : parseFloat(e[0])) + d.x, (-1 !== e[1].indexOf("%") ? parseFloat(e[1]) / 100 * d.height : parseFloat(e[1])) + d.y]), n.xOrigin = c = parseFloat(a[0]), n.yOrigin = h = parseFloat(a[1]), i && w !== qt && (p = w[0], d = w[1], f = w[2], g = w[3], m = w[4], v = w[5], (y = p * g - d * f) && (l = c * (g / y) + h * (-f / y) + (f * v - g * m) / y, u = c * (-d / y) + h * (p / y) - (p * v - d * m) / y, c = n.xOrigin = a[0] = l, h = n.yOrigin = a[1] = u)), b && (s && (n.xOffset = b.xOffset, n.yOffset = b.yOffset, b = n), r || !1 !== r && !1 !== o.defaultSmoothOrigin ? (l = c - _, u = h - x, b.xOffset += l * w[0] + u * w[2] - l, b.yOffset += l * w[1] + u * w[3] - u) : b.xOffset = b.yOffset = 0), s || t.setAttribute("data-svg-origin", a.join(" ")) },
                    Lt = function(t) { var e, n = q("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
                            i = this.parentNode,
                            r = this.nextSibling,
                            s = this.style.cssText; if ($t.appendChild(n), n.appendChild(this), this.style.display = "block", t) try { e = this.getBBox(), this._originalGetBBox = this.getBBox, this.getBBox = Lt } catch (t) {} else this._originalGetBBox && (e = this._originalGetBBox()); return r ? i.insertBefore(this, r) : i.appendChild(this), $t.removeChild(n), this.style.cssText = s, e },
                    zt = function(t) { try { return t.getBBox() } catch (e) { return Lt.call(t, !0) } },
                    Bt = function(t) { return !(!Mt || !t.getCTM || t.parentNode && !t.ownerSVGElement || !zt(t)) },
                    qt = [1, 0, 0, 1, 0, 0],
                    It = function(t, e) { var n, i, r, s, o, a, l = t._gsTransform || new Ft,
                            u = t.style; if (Et ? i = J(t, Pt, null, !0) : t.currentStyle && (i = t.currentStyle.filter.match(F), i = i && 4 === i.length ? [i[0].substr(4), Number(i[2].substr(4)), Number(i[1].substr(4)), i[3].substr(4), l.x || 0, l.y || 0].join(",") : ""), n = !i || "none" === i || "matrix(1, 0, 0, 1, 0, 0)" === i, !Et || !(a = !K(t) || "none" === K(t).display) && t.parentNode || (a && (s = u.display, u.display = "block"), t.parentNode || (o = 1, $t.appendChild(t)), i = J(t, Pt, null, !0), n = !i || "none" === i || "matrix(1, 0, 0, 1, 0, 0)" === i, s ? u.display = s : a && Vt(u, "display"), o && $t.removeChild(t)), (l.svg || t.getCTM && Bt(t)) && (n && -1 !== (u[Et] + "").indexOf("matrix") && (i = u[Et], n = 0), r = t.getAttribute("transform"), n && r && (r = t.transform.baseVal.consolidate().matrix, i = "matrix(" + r.a + "," + r.b + "," + r.c + "," + r.d + "," + r.e + "," + r.f + ")", n = 0)), n) return qt; for (r = (i || "").match(y) || [], wt = r.length; --wt > -1;) s = Number(r[wt]), r[wt] = (o = s - (s |= 0)) ? (1e5 * o + (o < 0 ? -.5 : .5) | 0) / 1e5 + s : s; return e && r.length > 6 ? [r[0], r[1], r[4], r[5], r[12], r[13]] : r },
                    Ht = W.getTransform = function(t, n, i, r) { if (t._gsTransform && i && !r) return t._gsTransform; var s, a, l, u, c, h, p = i ? t._gsTransform || new Ft : new Ft,
                            d = p.scaleX < 0,
                            f = Ot ? parseFloat(J(t, Dt, n, !1, "0 0 0").split(" ")[2]) || p.zOrigin || 0 : 0,
                            g = parseFloat(o.defaultTransformPerspective) || 0; if (p.svg = !(!t.getCTM || !Bt(t)), p.svg && (jt(t, J(t, Dt, n, !1, "50% 50%") + "", p, t.getAttribute("data-svg-origin")), kt = o.useSVGTransformAttr || Rt), (s = It(t)) !== qt) { if (16 === s.length) { var m, v, y, _, x, b = s[0],
                                    w = s[1],
                                    T = s[2],
                                    C = s[3],
                                    S = s[4],
                                    k = s[5],
                                    A = s[6],
                                    E = s[7],
                                    P = s[8],
                                    D = s[9],
                                    O = s[10],
                                    F = s[12],
                                    M = s[13],
                                    N = s[14],
                                    $ = s[11],
                                    R = Math.atan2(A, O);
                                p.zOrigin && (N = -p.zOrigin, F = P * N - s[12], M = D * N - s[13], N = O * N + p.zOrigin - s[14]), p.rotationX = R * j, R && (_ = Math.cos(-R), x = Math.sin(-R), m = S * _ + P * x, v = k * _ + D * x, y = A * _ + O * x, P = S * -x + P * _, D = k * -x + D * _, O = A * -x + O * _, $ = E * -x + $ * _, S = m, k = v, A = y), R = Math.atan2(-T, O), p.rotationY = R * j, R && (_ = Math.cos(-R), x = Math.sin(-R), m = b * _ - P * x, v = w * _ - D * x, y = T * _ - O * x, D = w * x + D * _, O = T * x + O * _, $ = C * x + $ * _, b = m, w = v, T = y), R = Math.atan2(w, b), p.rotation = R * j, R && (_ = Math.cos(R), x = Math.sin(R), m = b * _ + w * x, v = S * _ + k * x, y = P * _ + D * x, w = w * _ - b * x, k = k * _ - S * x, D = D * _ - P * x, b = m, S = v, P = y), p.rotationX && Math.abs(p.rotationX) + Math.abs(p.rotation) > 359.9 && (p.rotationX = p.rotation = 0, p.rotationY = 180 - p.rotationY), R = Math.atan2(S, k), p.scaleX = (1e5 * Math.sqrt(b * b + w * w + T * T) + .5 | 0) / 1e5, p.scaleY = (1e5 * Math.sqrt(k * k + A * A) + .5 | 0) / 1e5, p.scaleZ = (1e5 * Math.sqrt(P * P + D * D + O * O) + .5 | 0) / 1e5, b /= p.scaleX, S /= p.scaleY, w /= p.scaleX, k /= p.scaleY, Math.abs(R) > 2e-5 ? (p.skewX = R * j, S = 0, "simple" !== p.skewType && (p.scaleY *= 1 / Math.cos(R))) : p.skewX = 0, p.perspective = $ ? 1 / ($ < 0 ? -$ : $) : 0, p.x = F, p.y = M, p.z = N, p.svg && (p.x -= p.xOrigin - (p.xOrigin * b - p.yOrigin * S), p.y -= p.yOrigin - (p.yOrigin * w - p.xOrigin * k)) } else if (!Ot || r || !s.length || p.x !== s[4] || p.y !== s[5] || !p.rotationX && !p.rotationY) { var L = s.length >= 6,
                                    z = L ? s[0] : 1,
                                    B = s[1] || 0,
                                    q = s[2] || 0,
                                    I = L ? s[3] : 1;
                                p.x = s[4] || 0, p.y = s[5] || 0, l = Math.sqrt(z * z + B * B), u = Math.sqrt(I * I + q * q), c = z || B ? Math.atan2(B, z) * j : p.rotation || 0, h = q || I ? Math.atan2(q, I) * j + c : p.skewX || 0, p.scaleX = l, p.scaleY = u, p.rotation = c, p.skewX = h, Ot && (p.rotationX = p.rotationY = p.z = 0, p.perspective = g, p.scaleZ = 1), p.svg && (p.x -= p.xOrigin - (p.xOrigin * z + p.yOrigin * q), p.y -= p.yOrigin - (p.xOrigin * B + p.yOrigin * I)) }
                            Math.abs(p.skewX) > 90 && Math.abs(p.skewX) < 270 && (d ? (p.scaleX *= -1, p.skewX += p.rotation <= 0 ? 180 : -180, p.rotation += p.rotation <= 0 ? 180 : -180) : (p.scaleY *= -1, p.skewX += p.skewX <= 0 ? 180 : -180)), p.zOrigin = f; for (a in p) p[a] < 2e-5 && p[a] > -2e-5 && (p[a] = 0) } return i && (t._gsTransform = p, p.svg && (kt && t.style[Et] ? e.delayedCall(.001, function() { Vt(t.style, Et) }) : !kt && t.getAttribute("transform") && e.delayedCall(.001, function() { t.removeAttribute("transform") }))), p },
                    Wt = function(t) { var e, n, i = this.data,
                            r = -i.rotation * R,
                            s = r + i.skewX * R,
                            o = (Math.cos(r) * i.scaleX * 1e5 | 0) / 1e5,
                            a = (Math.sin(r) * i.scaleX * 1e5 | 0) / 1e5,
                            l = (Math.sin(s) * -i.scaleY * 1e5 | 0) / 1e5,
                            u = (Math.cos(s) * i.scaleY * 1e5 | 0) / 1e5,
                            c = this.t.style,
                            h = this.t.currentStyle; if (h) { n = a, a = -l, l = -n, e = h.filter, c.filter = ""; var p, d, f = this.t.offsetWidth,
                                m = this.t.offsetHeight,
                                v = "absolute" !== h.position,
                                y = "progid:DXImageTransform.Microsoft.Matrix(M11=" + o + ", M12=" + a + ", M21=" + l + ", M22=" + u,
                                _ = i.x + f * i.xPercent / 100,
                                x = i.y + m * i.yPercent / 100; if (null != i.ox && (p = (i.oxp ? f * i.ox * .01 : i.ox) - f / 2, d = (i.oyp ? m * i.oy * .01 : i.oy) - m / 2, _ += p - (p * o + d * a), x += d - (p * l + d * u)), v ? (p = f / 2, d = m / 2, y += ", Dx=" + (p - (p * o + d * a) + _) + ", Dy=" + (d - (p * l + d * u) + x) + ")") : y += ", sizingMethod='auto expand')", -1 !== e.indexOf("DXImageTransform.Microsoft.Matrix(") ? c.filter = e.replace(M, y) : c.filter = y + " " + e, 0 !== t && 1 !== t || 1 === o && 0 === a && 0 === l && 1 === u && (v && -1 === y.indexOf("Dx=0, Dy=0") || T.test(e) && 100 !== parseFloat(RegExp.$1) || -1 === e.indexOf(e.indexOf("Alpha")) && c.removeAttribute("filter")), !v) { var b, C, S, k = g < 8 ? 1 : -1; for (p = i.ieOffsetX || 0, d = i.ieOffsetY || 0, i.ieOffsetX = Math.round((f - ((o < 0 ? -o : o) * f + (a < 0 ? -a : a) * m)) / 2 + _), i.ieOffsetY = Math.round((m - ((u < 0 ? -u : u) * m + (l < 0 ? -l : l) * f)) / 2 + x), wt = 0; wt < 4; wt++) C = st[wt], b = h[C], n = -1 !== b.indexOf("px") ? parseFloat(b) : tt(this.t, C, parseFloat(b), b.replace(w, "")) || 0, S = n !== i[C] ? wt < 2 ? -i.ieOffsetX : -i.ieOffsetY : wt < 2 ? p - i.ieOffsetX : d - i.ieOffsetY, c[C] = (i[C] = Math.round(n - S * (0 === wt || 2 === wt ? 1 : k))) + "px" } } },
                    Xt = W.set3DTransformRatio = W.setTransformRatio = function(t) { var e, n, i, r, s, o, a, l, u, c, h, p, f, g, m, v, y, _, x, b, w, T, C, S = this.data,
                            k = this.t.style,
                            A = S.rotation,
                            E = S.rotationX,
                            P = S.rotationY,
                            D = S.scaleX,
                            O = S.scaleY,
                            F = S.scaleZ,
                            M = S.x,
                            N = S.y,
                            $ = S.z,
                            j = S.svg,
                            L = S.perspective,
                            z = S.force3D,
                            B = S.skewY,
                            q = S.skewX; if (B && (q += B, A += B), ((1 === t || 0 === t) && "auto" === z && (this.tween._totalTime === this.tween._totalDuration || !this.tween._totalTime) || !z) && !$ && !L && !P && !E && 1 === F || kt && j || !Ot) return void(A || q || j ? (A *= R, T = q * R, C = 1e5, n = Math.cos(A) * D, s = Math.sin(A) * D, i = Math.sin(A - T) * -O, o = Math.cos(A - T) * O, T && "simple" === S.skewType && (e = Math.tan(T - B * R), e = Math.sqrt(1 + e * e), i *= e, o *= e, B && (e = Math.tan(B * R), e = Math.sqrt(1 + e * e), n *= e, s *= e)), j && (M += S.xOrigin - (S.xOrigin * n + S.yOrigin * i) + S.xOffset, N += S.yOrigin - (S.xOrigin * s + S.yOrigin * o) + S.yOffset, kt && (S.xPercent || S.yPercent) && (m = this.t.getBBox(), M += .01 * S.xPercent * m.width, N += .01 * S.yPercent * m.height), m = 1e-6, M < m && M > -m && (M = 0), N < m && N > -m && (N = 0)), x = (n * C | 0) / C + "," + (s * C | 0) / C + "," + (i * C | 0) / C + "," + (o * C | 0) / C + "," + M + "," + N + ")", j && kt ? this.t.setAttribute("transform", "matrix(" + x) : k[Et] = (S.xPercent || S.yPercent ? "translate(" + S.xPercent + "%," + S.yPercent + "%) matrix(" : "matrix(") + x) : k[Et] = (S.xPercent || S.yPercent ? "translate(" + S.xPercent + "%," + S.yPercent + "%) matrix(" : "matrix(") + D + ",0,0," + O + "," + M + "," + N + ")"); if (d && (m = 1e-4, D < m && D > -m && (D = F = 2e-5), O < m && O > -m && (O = F = 2e-5), !L || S.z || S.rotationX || S.rotationY || (L = 0)), A || q) A *= R, v = n = Math.cos(A), y = s = Math.sin(A), q && (A -= q * R, v = Math.cos(A), y = Math.sin(A), "simple" === S.skewType && (e = Math.tan((q - B) * R), e = Math.sqrt(1 + e * e), v *= e, y *= e, S.skewY && (e = Math.tan(B * R), e = Math.sqrt(1 + e * e), n *= e, s *= e))), i = -y, o = v;
                        else { if (!(P || E || 1 !== F || L || j)) return void(k[Et] = (S.xPercent || S.yPercent ? "translate(" + S.xPercent + "%," + S.yPercent + "%) translate3d(" : "translate3d(") + M + "px," + N + "px," + $ + "px)" + (1 !== D || 1 !== O ? " scale(" + D + "," + O + ")" : ""));
                            n = o = 1, i = s = 0 }
                        c = 1, r = a = l = u = h = p = 0, f = L ? -1 / L : 0, g = S.zOrigin, m = 1e-6, b = ",", w = "0", A = P * R, A && (v = Math.cos(A), y = Math.sin(A), l = -y, h = f * -y, r = n * y, a = s * y, c = v, f *= v, n *= v, s *= v), A = E * R, A && (v = Math.cos(A), y = Math.sin(A), e = i * v + r * y, _ = o * v + a * y, u = c * y, p = f * y, r = i * -y + r * v, a = o * -y + a * v, c *= v, f *= v, i = e, o = _), 1 !== F && (r *= F, a *= F, c *= F, f *= F), 1 !== O && (i *= O, o *= O, u *= O, p *= O), 1 !== D && (n *= D, s *= D, l *= D, h *= D), (g || j) && (g && (M += r * -g, N += a * -g, $ += c * -g + g), j && (M += S.xOrigin - (S.xOrigin * n + S.yOrigin * i) + S.xOffset, N += S.yOrigin - (S.xOrigin * s + S.yOrigin * o) + S.yOffset), M < m && M > -m && (M = w), N < m && N > -m && (N = w), $ < m && $ > -m && ($ = 0)), x = S.xPercent || S.yPercent ? "translate(" + S.xPercent + "%," + S.yPercent + "%) matrix3d(" : "matrix3d(", x += (n < m && n > -m ? w : n) + b + (s < m && s > -m ? w : s) + b + (l < m && l > -m ? w : l), x += b + (h < m && h > -m ? w : h) + b + (i < m && i > -m ? w : i) + b + (o < m && o > -m ? w : o), E || P || 1 !== F ? (x += b + (u < m && u > -m ? w : u) + b + (p < m && p > -m ? w : p) + b + (r < m && r > -m ? w : r), x += b + (a < m && a > -m ? w : a) + b + (c < m && c > -m ? w : c) + b + (f < m && f > -m ? w : f) + b) : x += ",0,0,0,0,1,0,", x += M + b + N + b + $ + b + (L ? 1 + -$ / L : 1) + ")", k[Et] = x };
                u = Ft.prototype, u.x = u.y = u.z = u.skewX = u.skewY = u.rotation = u.rotationX = u.rotationY = u.zOrigin = u.xPercent = u.yPercent = u.xOffset = u.yOffset = 0, u.scaleX = u.scaleY = u.scaleZ = 1,
                    Ct("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", { parser: function(t, e, n, i, s, a, l) { if (i._lastParsedTransform === l) return s;
                            i._lastParsedTransform = l; var u, c = l.scale && "function" == typeof l.scale ? l.scale : 0; "function" == typeof l[n] && (u = l[n], l[n] = e), c && (l.scale = c(v, t)); var h, p, d, f, g, y, _, x, b, w = t._gsTransform,
                                T = t.style,
                                C = At.length,
                                S = l,
                                k = {},
                                A = Ht(t, r, !0, S.parseTransform),
                                E = S.transform && ("function" == typeof S.transform ? S.transform(v, m) : S.transform); if (A.skewType = S.skewType || A.skewType || o.defaultSkewType, i._transform = A, E && "string" == typeof E && Et) p = I.style, p[Et] = E, p.display = "block", p.position = "absolute", -1 !== E.indexOf("%") && (p.width = J(t, "width"), p.height = J(t, "height")), B.body.appendChild(I), h = Ht(I, null, !1), "simple" === A.skewType && (h.scaleY *= Math.cos(h.skewX * R)), A.svg && (y = A.xOrigin, _ = A.yOrigin, h.x -= A.xOffset, h.y -= A.yOffset, (S.transformOrigin || S.svgOrigin) && (E = {}, jt(t, at(S.transformOrigin), E, S.svgOrigin, S.smoothOrigin, !0), y = E.xOrigin, _ = E.yOrigin, h.x -= E.xOffset - A.xOffset, h.y -= E.yOffset - A.yOffset), (y || _) && (x = It(I, !0), h.x -= y - (y * x[0] + _ * x[2]), h.y -= _ - (y * x[1] + _ * x[3]))), B.body.removeChild(I), h.perspective || (h.perspective = A.perspective), null != S.xPercent && (h.xPercent = ut(S.xPercent, A.xPercent)), null != S.yPercent && (h.yPercent = ut(S.yPercent, A.yPercent));
                            else if ("object" == typeof S) { if (h = { scaleX: ut(null != S.scaleX ? S.scaleX : S.scale, A.scaleX), scaleY: ut(null != S.scaleY ? S.scaleY : S.scale, A.scaleY), scaleZ: ut(S.scaleZ, A.scaleZ), x: ut(S.x, A.x), y: ut(S.y, A.y), z: ut(S.z, A.z), xPercent: ut(S.xPercent, A.xPercent), yPercent: ut(S.yPercent, A.yPercent), perspective: ut(S.transformPerspective, A.perspective) }, null != (g = S.directionalRotation))
                                    if ("object" == typeof g)
                                        for (p in g) S[p] = g[p];
                                    else S.rotation = g;
                                    "string" == typeof S.x && -1 !== S.x.indexOf("%") && (h.x = 0, h.xPercent = ut(S.x, A.xPercent)), "string" == typeof S.y && -1 !== S.y.indexOf("%") && (h.y = 0, h.yPercent = ut(S.y, A.yPercent)), h.rotation = ct("rotation" in S ? S.rotation : "shortRotation" in S ? S.shortRotation + "_short" : "rotationZ" in S ? S.rotationZ : A.rotation, A.rotation, "rotation", k), Ot && (h.rotationX = ct("rotationX" in S ? S.rotationX : "shortRotationX" in S ? S.shortRotationX + "_short" : A.rotationX || 0, A.rotationX, "rotationX", k), h.rotationY = ct("rotationY" in S ? S.rotationY : "shortRotationY" in S ? S.shortRotationY + "_short" : A.rotationY || 0, A.rotationY, "rotationY", k)), h.skewX = ct(S.skewX, A.skewX), h.skewY = ct(S.skewY, A.skewY) } for (Ot && null != S.force3D && (A.force3D = S.force3D, f = !0), d = A.force3D || A.z || A.rotationX || A.rotationY || h.z || h.rotationX || h.rotationY || h.perspective, d || null == S.scale || (h.scaleZ = 1); --C > -1;) b = At[C], ((E = h[b] - A[b]) > 1e-6 || E < -1e-6 || null != S[b] || null != L[b]) && (f = !0, s = new _t(A, b, A[b], E, s), b in k && (s.e = k[b]), s.xs0 = 0, s.plugin = a, i._overwriteProps.push(s.n)); return E = S.transformOrigin, A.svg && (E || S.svgOrigin) && (y = A.xOffset, _ = A.yOffset, jt(t, at(E), h, S.svgOrigin, S.smoothOrigin), s = xt(A, "xOrigin", (w ? A : h).xOrigin, h.xOrigin, s, "transformOrigin"), s = xt(A, "yOrigin", (w ? A : h).yOrigin, h.yOrigin, s, "transformOrigin"), y === A.xOffset && _ === A.yOffset || (s = xt(A, "xOffset", w ? y : A.xOffset, A.xOffset, s, "transformOrigin"), s = xt(A, "yOffset", w ? _ : A.yOffset, A.yOffset, s, "transformOrigin")), E = "0px 0px"), (E || Ot && d && A.zOrigin) && (Et ? (f = !0, b = Dt, E = (E || J(t, b, r, !1, "50% 50%")) + "", s = new _t(T, b, 0, 0, s, -1, "transformOrigin"), s.b = T[b], s.plugin = a, Ot ? (p = A.zOrigin, E = E.split(" "), A.zOrigin = (E.length > 2 && (0 === p || "0px" !== E[2]) ? parseFloat(E[2]) : p) || 0, s.xs0 = s.e = E[0] + " " + (E[1] || "50%") + " 0px", s = new _t(A, "zOrigin", 0, 0, s, -1, s.n), s.b = p, s.xs0 = s.e = A.zOrigin) : s.xs0 = s.e = E) : at(E + "", A)), f && (i._transformType = A.svg && kt || !d && 3 !== this._transformType ? 2 : 3), u && (l[n] = u), c && (l.scale = c), s }, prefix: !0 }), Ct("boxShadow", { defaultValue: "0px 0px 0px 0px #999", prefix: !0, color: !0, multi: !0, keyword: "inset" }), Ct("borderRadius", { defaultValue: "0px", parser: function(t, e, n, s, o, a) { e = this.format(e); var l, u, c, h, p, d, f, g, m, v, y, _, x, b, w, T, C = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
                                S = t.style; for (m = parseFloat(t.offsetWidth), v = parseFloat(t.offsetHeight), l = e.split(" "), u = 0; u < C.length; u++) this.p.indexOf("border") && (C[u] = Z(C[u])), p = h = J(t, C[u], r, !1, "0px"), -1 !== p.indexOf(" ") && (h = p.split(" "), p = h[0], h = h[1]), d = c = l[u], f = parseFloat(p), _ = p.substr((f + "").length), x = "=" === d.charAt(1), x ? (g = parseInt(d.charAt(0) + "1", 10), d = d.substr(2), g *= parseFloat(d), y = d.substr((g + "").length - (g < 0 ? 1 : 0)) || "") : (g = parseFloat(d), y = d.substr((g + "").length)), "" === y && (y = i[n] || _), y !== _ && (b = tt(t, "borderLeft", f, _), w = tt(t, "borderTop", f, _), "%" === y ? (p = b / m * 100 + "%", h = w / v * 100 + "%") : "em" === y ? (T = tt(t, "borderLeft", 1, "em"), p = b / T + "em", h = w / T + "em") : (p = b + "px", h = w + "px"), x && (d = parseFloat(p) + g + y, c = parseFloat(h) + g + y)), o = bt(S, C[u], p + " " + h, d + " " + c, !1, "0px", o); return o }, prefix: !0, formatter: mt("0px 0px 0px 0px", !1, !0) }), Ct("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius", { defaultValue: "0px", parser: function(t, e, n, i, s, o) { return bt(t.style, n, this.format(J(t, n, r, !1, "0px 0px")), this.format(e), !1, "0px", s) }, prefix: !0, formatter: mt("0px 0px", !1, !0) }), Ct("backgroundPosition", { defaultValue: "0 0", parser: function(t, e, n, i, s, o) { var a, l, u, c, h, p, d = "background-position",
                                f = r || K(t, null),
                                m = this.format((f ? g ? f.getPropertyValue(d + "-x") + " " + f.getPropertyValue(d + "-y") : f.getPropertyValue(d) : t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0"),
                                v = this.format(e); if (-1 !== m.indexOf("%") != (-1 !== v.indexOf("%")) && v.split(",").length < 2 && (p = J(t, "backgroundImage").replace(P, "")) && "none" !== p) { for (a = m.split(" "), l = v.split(" "), H.setAttribute("src", p), u = 2; --u > -1;) m = a[u], (c = -1 !== m.indexOf("%")) !== (-1 !== l[u].indexOf("%")) && (h = 0 === u ? t.offsetWidth - H.width : t.offsetHeight - H.height, a[u] = c ? parseFloat(m) / 100 * h + "px" : parseFloat(m) / h * 100 + "%");
                                m = a.join(" ") } return this.parseComplex(t.style, m, v, s, o) }, formatter: at }), Ct("backgroundSize", { defaultValue: "0 0", formatter: function(t) { return t += "", "co" === t.substr(0, 2) ? t : at(-1 === t.indexOf(" ") ? t + " " + t : t) } }), Ct("perspective", { defaultValue: "0px", prefix: !0 }), Ct("perspectiveOrigin", { defaultValue: "50% 50%", prefix: !0 }), Ct("transformStyle", { prefix: !0 }), Ct("backfaceVisibility", { prefix: !0 }), Ct("userSelect", { prefix: !0 }), Ct("margin", { parser: vt("marginTop,marginRight,marginBottom,marginLeft") }), Ct("padding", { parser: vt("paddingTop,paddingRight,paddingBottom,paddingLeft") }), Ct("clip", { defaultValue: "rect(0px,0px,0px,0px)", parser: function(t, e, n, i, s, o) { var a, l, u; return g < 9 ? (l = t.currentStyle, u = g < 8 ? " " : ",", a = "rect(" + l.clipTop + u + l.clipRight + u + l.clipBottom + u + l.clipLeft + ")", e = this.format(e).split(",").join(u)) : (a = this.format(J(t, this.p, r, !1, this.dflt)), e = this.format(e)), this.parseComplex(t.style, a, e, s, o) } }), Ct("textShadow", { defaultValue: "0px 0px 0px #999", color: !0, multi: !0 }), Ct("autoRound,strictUnits", { parser: function(t, e, n, i, r) { return r } }), Ct("border", { defaultValue: "0px solid #000", parser: function(t, e, n, i, s, o) { var a = J(t, "borderTopWidth", r, !1, "0px"),
                                l = this.format(e).split(" "),
                                u = l[0].replace(w, ""); return "px" !== u && (a = parseFloat(a) / tt(t, "borderTopWidth", 1, u) + u), this.parseComplex(t.style, this.format(a + " " + J(t, "borderTopStyle", r, !1, "solid") + " " + J(t, "borderTopColor", r, !1, "#000")), l.join(" "), s, o) }, color: !0, formatter: function(t) { var e = t.split(" "); return e[0] + " " + (e[1] || "solid") + " " + (t.match(gt) || ["#000"])[0] } }), Ct("borderWidth", { parser: vt("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth") }), Ct("float,cssFloat,styleFloat", { parser: function(t, e, n, i, r, s) { var o = t.style,
                                a = "cssFloat" in o ? "cssFloat" : "styleFloat"; return new _t(o, a, 0, 0, r, -1, n, !1, 0, o[a], e) } });
                var Ut = function(t) { var e, n = this.t,
                        i = n.filter || J(this.data, "filter") || "",
                        r = this.s + this.c * t | 0;
                    100 === r && (-1 === i.indexOf("atrix(") && -1 === i.indexOf("radient(") && -1 === i.indexOf("oader(") ? (n.removeAttribute("filter"), e = !J(this.data, "filter")) : (n.filter = i.replace(S, ""), e = !0)), e || (this.xn1 && (n.filter = i = i || "alpha(opacity=" + r + ")"), -1 === i.indexOf("pacity") ? 0 === r && this.xn1 || (n.filter = i + " alpha(opacity=" + r + ")") : n.filter = i.replace(T, "opacity=" + r)) };
                Ct("opacity,alpha,autoAlpha", { defaultValue: "1", parser: function(t, e, n, i, s, o) { var a = parseFloat(J(t, "opacity", r, !1, "1")),
                            l = t.style,
                            u = "autoAlpha" === n; return "string" == typeof e && "=" === e.charAt(1) && (e = ("-" === e.charAt(0) ? -1 : 1) * parseFloat(e.substr(2)) + a), u && 1 === a && "hidden" === J(t, "visibility", r) && 0 !== e && (a = 0), U ? s = new _t(l, "opacity", a, e - a, s) : (s = new _t(l, "opacity", 100 * a, 100 * (e - a), s), s.xn1 = u ? 1 : 0, l.zoom = 1, s.type = 2, s.b = "alpha(opacity=" + s.s + ")", s.e = "alpha(opacity=" + (s.s + s.c) + ")", s.data = t, s.plugin = o, s.setRatio = Ut), u && (s = new _t(l, "visibility", 0, 0, s, -1, null, !1, 0, 0 !== a ? "inherit" : "hidden", 0 === e ? "hidden" : "inherit"), s.xs0 = "inherit", i._overwriteProps.push(s.n), i._overwriteProps.push(n)), s } });
                var Vt = function(t, e) { e && (t.removeProperty ? ("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6) || (e = "-" + e), t.removeProperty(e.replace(A, "-$1").toLowerCase())) : t.removeAttribute(e)) },
                    Yt = function(t) { if (this.t._gsClassPT = this, 1 === t || 0 === t) { this.t.setAttribute("class", 0 === t ? this.b : this.e); for (var e = this.data, n = this.t.style; e;) e.v ? n[e.p] = e.v : Vt(n, e.p), e = e._next;
                            1 === t && this.t._gsClassPT === this && (this.t._gsClassPT = null) } else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e) };
                Ct("className", { parser: function(t, e, i, s, o, a, l) { var u, c, h, p, d, f = t.getAttribute("class") || "",
                            g = t.style.cssText; if (o = s._classNamePT = new _t(t, i, 0, 0, o, 2), o.setRatio = Yt, o.pr = -11, n = !0, o.b = f, c = nt(t, r), h = t._gsClassPT) { for (p = {}, d = h.data; d;) p[d.p] = 1, d = d._next;
                            h.setRatio(1) } return t._gsClassPT = o, o.e = "=" !== e.charAt(1) ? e : f.replace(new RegExp("(?:\\s|^)" + e.substr(2) + "(?![\\w-])"), "") + ("+" === e.charAt(0) ? " " + e.substr(2) : ""), t.setAttribute("class", o.e), u = it(t, c, nt(t), l, p), t.setAttribute("class", f), o.data = u.firstMPT, t.style.cssText = g, o = o.xfirst = s.parse(t, u.difs, o, a) } });
                var Gt = function(t) { if ((1 === t || 0 === t) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) { var e, n, i, r, s, o = this.t.style,
                            a = l.transform.parse; if ("all" === this.e) o.cssText = "", r = !0;
                        else
                            for (e = this.e.split(" ").join("").split(","), i = e.length; --i > -1;) n = e[i], l[n] && (l[n].parse === a ? r = !0 : n = "transformOrigin" === n ? Dt : l[n].p), Vt(o, n);
                        r && (Vt(o, Et), (s = this.t._gsTransform) && (s.svg && (this.t.removeAttribute("data-svg-origin"), this.t.removeAttribute("transform")), delete this.t._gsTransform)) } };
                for (Ct("clearProps", { parser: function(t, e, i, r, s) { return s = new _t(t, i, 0, 0, s, 2), s.setRatio = Gt, s.e = e, s.pr = -10, s.data = r._tween, n = !0, s } }), u = "bezier,throwProps,physicsProps,physics2D".split(","), wt = u.length; wt--;) St(u[wt]);
                u = o.prototype, u._firstPT = u._lastParsedTransform = u._transform = null, u._onInitTween = function(t, e, a, u) { if (!t.nodeType) return !1;
                    this._target = m = t, this._tween = a, this._vars = e, v = u, c = e.autoRound, n = !1, i = e.suffixMap || o.suffixMap, r = K(t, ""), s = this._overwriteProps; var d, g, y, _, x, b, w, T, S, k = t.style; if (h && "" === k.zIndex && ("auto" !== (d = J(t, "zIndex", r)) && "" !== d || this._addLazySet(k, "zIndex", 0)), "string" == typeof e && (_ = k.cssText, d = nt(t, r), k.cssText = _ + ";" + e, d = it(t, d, nt(t)).difs, !U && C.test(e) && (d.opacity = parseFloat(RegExp.$1)), e = d, k.cssText = _), e.className ? this._firstPT = g = l.className.parse(t, e.className, "className", this, null, null, e) : this._firstPT = g = this.parse(t, e, null), this._transformType) { for (S = 3 === this._transformType, Et ? p && (h = !0, "" === k.zIndex && ("auto" !== (w = J(t, "zIndex", r)) && "" !== w || this._addLazySet(k, "zIndex", 0)), f && this._addLazySet(k, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (S ? "visible" : "hidden"))) : k.zoom = 1, y = g; y && y._next;) y = y._next;
                        T = new _t(t, "transform", 0, 0, null, 2), this._linkCSSP(T, null, y), T.setRatio = Et ? Xt : Wt, T.data = this._transform || Ht(t, r, !0), T.tween = a, T.pr = -1, s.pop() } if (n) { for (; g;) { for (b = g._next, y = _; y && y.pr > g.pr;) y = y._next;
                            (g._prev = y ? y._prev : x) ? g._prev._next = g: _ = g, (g._next = y) ? y._prev = g : x = g, g = b }
                        this._firstPT = _ } return !0 }, u.parse = function(t, e, n, s) { var o, a, u, h, p, d, f, g, y, _, x = t.style; for (o in e) { if (d = e[o], "function" == typeof d && (d = d(v, m)), a = l[o]) n = a.parse(t, d, o, this, n, s, e);
                        else { if ("--" === o.substr(0, 2)) { this._tween._propLookup[o] = this._addTween.call(this._tween, t.style, "setProperty", K(t).getPropertyValue(o) + "", d + "", o, !1, o); continue }
                            p = J(t, o, r) + "", y = "string" == typeof d, "color" === o || "fill" === o || "stroke" === o || -1 !== o.indexOf("Color") || y && k.test(d) ? (y || (d = dt(d), d = (d.length > 3 ? "rgba(" : "rgb(") + d.join(",") + ")"), n = bt(x, o, p, d, !0, "transparent", n, 0, s)) : y && $.test(d) ? n = bt(x, o, p, d, !0, null, n, 0, s) : (u = parseFloat(p), f = u || 0 === u ? p.substr((u + "").length) : "", "" !== p && "auto" !== p || ("width" === o || "height" === o ? (u = ot(t, o, r), f = "px") : "left" === o || "top" === o ? (u = et(t, o, r), f = "px") : (u = "opacity" !== o ? 0 : 1, f = "")), _ = y && "=" === d.charAt(1), _ ? (h = parseInt(d.charAt(0) + "1", 10), d = d.substr(2), h *= parseFloat(d), g = d.replace(w, "")) : (h = parseFloat(d), g = y ? d.replace(w, "") : ""), "" === g && (g = o in i ? i[o] : f), d = h || 0 === h ? (_ ? h + u : h) + g : e[o], f !== g && ("" === g && "lineHeight" !== o || (h || 0 === h) && u && (u = tt(t, o, u, f), "%" === g ? (u /= tt(t, o, 100, "%") / 100, !0 !== e.strictUnits && (p = u + "%")) : "em" === g || "rem" === g || "vw" === g || "vh" === g ? u /= tt(t, o, 1, g) : "px" !== g && (h = tt(t, o, h, g), g = "px"), _ && (h || 0 === h) && (d = h + u + g))), _ && (h += u), !u && 0 !== u || !h && 0 !== h ? void 0 !== x[o] && (d || d + "" != "NaN" && null != d) ? (n = new _t(x, o, h || u || 0, 0, n, -1, o, !1, 0, p, d), n.xs0 = "none" !== d || "display" !== o && -1 === o.indexOf("Style") ? d : p) : Y("invalid " + o + " tween value: " + e[o]) : (n = new _t(x, o, u, h - u, n, 0, o, !1 !== c && ("px" === g || "zIndex" === o), 0, p, d), n.xs0 = g)) }
                        s && n && !n.plugin && (n.plugin = s) } return n }, u.setRatio = function(t) { var e, n, i, r = this._firstPT; if (1 !== t || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
                        if (t || this._tween._time !== this._tween._duration && 0 !== this._tween._time || -1e-6 === this._tween._rawPrevTime)
                            for (; r;) { if (e = r.c * t + r.s, r.r ? e = r.r(e) : e < 1e-6 && e > -1e-6 && (e = 0), r.type)
                                    if (1 === r.type)
                                        if (2 === (i = r.l)) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2;
                                        else if (3 === i) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3;
                                else if (4 === i) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4;
                                else if (5 === i) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4 + r.xn4 + r.xs5;
                                else { for (n = r.xs0 + e + r.xs1, i = 1; i < r.l; i++) n += r["xn" + i] + r["xs" + (i + 1)];
                                    r.t[r.p] = n } else -1 === r.type ? r.t[r.p] = r.xs0 : r.setRatio && r.setRatio(t);
                                else r.t[r.p] = e + r.xs0;
                                r = r._next } else
                                for (; r;) 2 !== r.type ? r.t[r.p] = r.b : r.setRatio(t), r = r._next;
                        else
                            for (; r;) { if (2 !== r.type)
                                    if (r.r && -1 !== r.type)
                                        if (e = r.r(r.s + r.c), r.type) { if (1 === r.type) { for (i = r.l, n = r.xs0 + e + r.xs1, i = 1; i < r.l; i++) n += r["xn" + i] + r["xs" + (i + 1)];
                                                r.t[r.p] = n } } else r.t[r.p] = e + r.xs0;
                                else r.t[r.p] = r.e;
                                else r.setRatio(t);
                                r = r._next } }, u._enableTransforms = function(t) { this._transform = this._transform || Ht(this._target, r, !0), this._transformType = this._transform.svg && kt || !t && 3 !== this._transformType ? 2 : 3 };
                var Qt = function(t) { this.t[this.p] = this.e, this.data._linkCSSP(this, this._next, null, !0) };
                u._addLazySet = function(t, e, n) { var i = this._firstPT = new _t(t, e, 0, 0, this._firstPT, 2);
                    i.e = n, i.setRatio = Qt, i.data = this }, u._linkCSSP = function(t, e, n, i) { return t && (e && (e._prev = t), t._next && (t._next._prev = t._prev), t._prev ? t._prev._next = t._next : this._firstPT === t && (this._firstPT = t._next, i = !0), n ? n._next = t : i || null !== this._firstPT || (this._firstPT = t), t._next = e, t._prev = n), t }, u._mod = function(t) { for (var e = this._firstPT; e;) "function" == typeof t[e.p] && (e.r = t[e.p]), e = e._next }, u._kill = function(e) { var n, i, r, s = e; if (e.autoAlpha || e.alpha) { s = {}; for (i in e) s[i] = e[i];
                        s.opacity = 1, s.autoAlpha && (s.visibility = 1) } for (e.className && (n = this._classNamePT) && (r = n.xfirst, r && r._prev ? this._linkCSSP(r._prev, n._next, r._prev._prev) : r === this._firstPT && (this._firstPT = n._next), n._next && this._linkCSSP(n._next, n._next._next, r._prev), this._classNamePT = null), n = this._firstPT; n;) n.plugin && n.plugin !== i && n.plugin._kill && (n.plugin._kill(e), i = n.plugin), n = n._next; return t.prototype._kill.call(this, s) };
                var Zt = function(t, e, n) { var i, r, s, o; if (t.slice)
                        for (r = t.length; --r > -1;) Zt(t[r], e, n);
                    else
                        for (i = t.childNodes, r = i.length; --r > -1;) s = i[r], o = s.type, s.style && (e.push(nt(s)), n && n.push(s)), 1 !== o && 9 !== o && 11 !== o || !s.childNodes.length || Zt(s, e, n) };
                return o.cascadeTo = function(t, n, i) { var r, s, o, a, l = e.to(t, n, i),
                        u = [l],
                        c = [],
                        h = [],
                        p = [],
                        d = e._internals.reservedProps; for (t = l._targets || l.target, Zt(t, c, p), l.render(n, !0, !0), Zt(t, h), l.render(0, !0, !0), l._enabled(!0), r = p.length; --r > -1;)
                        if (s = it(p[r], c[r], h[r]), s.firstMPT) { s = s.difs; for (o in i) d[o] && (s[o] = i[o]);
                            a = {}; for (o in s) a[o] = c[r][o];
                            u.push(e.fromTo(p[r], n, a, s)) }
                    return u }, t.activate([o]), o
            }, !0),
            function() { var t = _gsScope._gsDefine.plugin({ propName: "roundProps", version: "1.7.0", priority: -1, API: 2, init: function(t, e, n) { return this._tween = n, !0 } }),
                    e = function(t) { var e = t < 1 ? Math.pow(10, (t + "").length - 2) : 1; return function(n) { return (Math.round(n / t) * t * e | 0) / e } },
                    n = function(t, e) { for (; t;) t.f || t.blob || (t.m = e || Math.round), t = t._next },
                    i = t.prototype;
                i._onInitAllProps = function() { var t, i, r, s, o = this._tween,
                        a = o.vars.roundProps,
                        l = {},
                        u = o._propLookup.roundProps; if ("object" != typeof a || a.push)
                        for ("string" == typeof a && (a = a.split(",")), r = a.length; --r > -1;) l[a[r]] = Math.round;
                    else
                        for (s in a) l[s] = e(a[s]); for (s in l)
                        for (t = o._firstPT; t;) i = t._next, t.pg ? t.t._mod(l) : t.n === s && (2 === t.f && t.t ? n(t.t._firstPT, l[s]) : (this._add(t.t, s, t.s, t.c, l[s]), i && (i._prev = t._prev), t._prev ? t._prev._next = i : o._firstPT === t && (o._firstPT = i), t._next = t._prev = null, o._propLookup[s] = u)), t = i; return !1 }, i._add = function(t, e, n, i, r) { this._addTween(t, e, n, n + i, e, r || Math.round), this._overwriteProps.push(e) } }(),
            function() { _gsScope._gsDefine.plugin({ propName: "attr", API: 2, version: "0.6.1", init: function(t, e, n, i) { var r, s; if ("function" != typeof t.setAttribute) return !1; for (r in e) s = e[r], "function" == typeof s && (s = s(i, t)), this._addTween(t, "setAttribute", t.getAttribute(r) + "", s + "", r, !1, r), this._overwriteProps.push(r); return !0 } }) }(), _gsScope._gsDefine.plugin({ propName: "directionalRotation", version: "0.3.1", API: 2, init: function(t, e, n, i) { "object" != typeof e && (e = { rotation: e }), this.finals = {}; var r, s, o, a, l, u, c = !0 === e.useRadians ? 2 * Math.PI : 360; for (r in e) "useRadians" !== r && (a = e[r], "function" == typeof a && (a = a(i, t)), u = (a + "").split("_"), s = u[0], o = parseFloat("function" != typeof t[r] ? t[r] : t[r.indexOf("set") || "function" != typeof t["get" + r.substr(3)] ? r : "get" + r.substr(3)]()), a = this.finals[r] = "string" == typeof s && "=" === s.charAt(1) ? o + parseInt(s.charAt(0) + "1", 10) * Number(s.substr(2)) : Number(s) || 0, l = a - o, u.length && (s = u.join("_"), -1 !== s.indexOf("short") && (l %= c) !== l % (c / 2) && (l = l < 0 ? l + c : l - c), -1 !== s.indexOf("_cw") && l < 0 ? l = (l + 9999999999 * c) % c - (l / c | 0) * c : -1 !== s.indexOf("ccw") && l > 0 && (l = (l - 9999999999 * c) % c - (l / c | 0) * c)), (l > 1e-6 || l < -1e-6) && (this._addTween(t, r, o, o + l, r), this._overwriteProps.push(r))); return !0 }, set: function(t) { var e; if (1 !== t) this._super.setRatio.call(this, t);
                    else
                        for (e = this._firstPT; e;) e.f ? e.t[e.p](this.finals[e.p]) : e.t[e.p] = this.finals[e.p], e = e._next } })._autoCSS = !0, _gsScope._gsDefine("easing.Back", ["easing.Ease"], function(t) { var e, n, i, r, s = _gsScope.GreenSockGlobals || _gsScope,
                    o = s.com.greensock,
                    a = 2 * Math.PI,
                    l = Math.PI / 2,
                    u = o._class,
                    c = function(e, n) { var i = u("easing." + e, function() {}, !0),
                            r = i.prototype = new t; return r.constructor = i, r.getRatio = n, i },
                    h = t.register || function() {},
                    p = function(t, e, n, i, r) { var s = u("easing." + t, { easeOut: new e, easeIn: new n, easeInOut: new i }, !0); return h(s, t), s },
                    d = function(t, e, n) { this.t = t, this.v = e, n && (this.next = n, n.prev = this, this.c = n.v - e, this.gap = n.t - t) },
                    f = function(e, n) { var i = u("easing." + e, function(t) { this._p1 = t || 0 === t ? t : 1.70158, this._p2 = 1.525 * this._p1 }, !0),
                            r = i.prototype = new t; return r.constructor = i, r.getRatio = n, r.config = function(t) { return new i(t) }, i },
                    g = p("Back", f("BackOut", function(t) { return (t -= 1) * t * ((this._p1 + 1) * t + this._p1) + 1 }), f("BackIn", function(t) { return t * t * ((this._p1 + 1) * t - this._p1) }), f("BackInOut", function(t) { return (t *= 2) < 1 ? .5 * t * t * ((this._p2 + 1) * t - this._p2) : .5 * ((t -= 2) * t * ((this._p2 + 1) * t + this._p2) + 2) })),
                    m = u("easing.SlowMo", function(t, e, n) { e = e || 0 === e ? e : .7, null == t ? t = .7 : t > 1 && (t = 1), this._p = 1 !== t ? e : 0, this._p1 = (1 - t) / 2, this._p2 = t, this._p3 = this._p1 + this._p2, this._calcEnd = !0 === n }, !0),
                    v = m.prototype = new t; return v.constructor = m, v.getRatio = function(t) { var e = t + (.5 - t) * this._p; return t < this._p1 ? this._calcEnd ? 1 - (t = 1 - t / this._p1) * t : e - (t = 1 - t / this._p1) * t * t * t * e : t > this._p3 ? this._calcEnd ? 1 === t ? 0 : 1 - (t = (t - this._p3) / this._p1) * t : e + (t - e) * (t = (t - this._p3) / this._p1) * t * t * t : this._calcEnd ? 1 : e }, m.ease = new m(.7, .7), v.config = m.config = function(t, e, n) { return new m(t, e, n) }, e = u("easing.SteppedEase", function(t, e) { t = t || 1, this._p1 = 1 / t, this._p2 = t + (e ? 0 : 1), this._p3 = e ? 1 : 0 }, !0), v = e.prototype = new t, v.constructor = e, v.getRatio = function(t) { return t < 0 ? t = 0 : t >= 1 && (t = .999999999), ((this._p2 * t | 0) + this._p3) * this._p1 }, v.config = e.config = function(t, n) { return new e(t, n) }, n = u("easing.ExpoScaleEase", function(t, e, n) { this._p1 = Math.log(e / t), this._p2 = e - t, this._p3 = t, this._ease = n }, !0), v = n.prototype = new t, v.constructor = n, v.getRatio = function(t) { return this._ease && (t = this._ease.getRatio(t)), (this._p3 * Math.exp(this._p1 * t) - this._p3) / this._p2 }, v.config = n.config = function(t, e, i) { return new n(t, e, i) }, i = u("easing.RoughEase", function(e) { e = e || {}; for (var n, i, r, s, o, a, l = e.taper || "none", u = [], c = 0, h = 0 | (e.points || 20), p = h, f = !1 !== e.randomize, g = !0 === e.clamp, m = e.template instanceof t ? e.template : null, v = "number" == typeof e.strength ? .4 * e.strength : .4; --p > -1;) n = f ? Math.random() : 1 / h * p, i = m ? m.getRatio(n) : n, "none" === l ? r = v : "out" === l ? (s = 1 - n, r = s * s * v) : "in" === l ? r = n * n * v : n < .5 ? (s = 2 * n, r = s * s * .5 * v) : (s = 2 * (1 - n), r = s * s * .5 * v), f ? i += Math.random() * r - .5 * r : p % 2 ? i += .5 * r : i -= .5 * r, g && (i > 1 ? i = 1 : i < 0 && (i = 0)), u[c++] = { x: n, y: i }; for (u.sort(function(t, e) { return t.x - e.x }), a = new d(1, 1, null), p = h; --p > -1;) o = u[p], a = new d(o.x, o.y, a);
                    this._prev = new d(0, 0, 0 !== a.t ? a : a.next) }, !0), v = i.prototype = new t, v.constructor = i, v.getRatio = function(t) { var e = this._prev; if (t > e.t) { for (; e.next && t >= e.t;) e = e.next;
                        e = e.prev } else
                        for (; e.prev && t <= e.t;) e = e.prev; return this._prev = e, e.v + (t - e.t) / e.gap * e.c }, v.config = function(t) { return new i(t) }, i.ease = new i, p("Bounce", c("BounceOut", function(t) { return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375 }), c("BounceIn", function(t) { return (t = 1 - t) < 1 / 2.75 ? 1 - 7.5625 * t * t : t < 2 / 2.75 ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : t < 2.5 / 2.75 ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375) }), c("BounceInOut", function(t) { var e = t < .5; return t = e ? 1 - 2 * t : 2 * t - 1, t < 1 / 2.75 ? t *= 7.5625 * t : t = t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375, e ? .5 * (1 - t) : .5 * t + .5 })), p("Circ", c("CircOut", function(t) { return Math.sqrt(1 - (t -= 1) * t) }), c("CircIn", function(t) { return -(Math.sqrt(1 - t * t) - 1) }), c("CircInOut", function(t) { return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1) })), r = function(e, n, i) { var r = u("easing." + e, function(t, e) { this._p1 = t >= 1 ? t : 1, this._p2 = (e || i) / (t < 1 ? t : 1), this._p3 = this._p2 / a * (Math.asin(1 / this._p1) || 0), this._p2 = a / this._p2 }, !0),
                        s = r.prototype = new t; return s.constructor = r, s.getRatio = n, s.config = function(t, e) { return new r(t, e) }, r }, p("Elastic", r("ElasticOut", function(t) { return this._p1 * Math.pow(2, -10 * t) * Math.sin((t - this._p3) * this._p2) + 1 }, .3), r("ElasticIn", function(t) { return -this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) }, .3), r("ElasticInOut", function(t) { return (t *= 2) < 1 ? this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) * -.5 : this._p1 * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) * .5 + 1 }, .45)), p("Expo", c("ExpoOut", function(t) { return 1 - Math.pow(2, -10 * t) }), c("ExpoIn", function(t) { return Math.pow(2, 10 * (t - 1)) - .001 }), c("ExpoInOut", function(t) { return (t *= 2) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * (t - 1))) })), p("Sine", c("SineOut", function(t) { return Math.sin(t * l) }), c("SineIn", function(t) { return 1 - Math.cos(t * l) }), c("SineInOut", function(t) { return -.5 * (Math.cos(Math.PI * t) - 1) })), u("easing.EaseLookup", { find: function(e) { return t.map[e] } }, !0), h(s.SlowMo, "SlowMo", "ease,"), h(i, "RoughEase", "ease,"), h(e, "SteppedEase", "ease,"), g }, !0)
    }), _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
    function(t, e) {
        "use strict";
        var n = {},
            i = t.document,
            r = t.GreenSockGlobals = t.GreenSockGlobals || t;
        if (r.TweenLite) return r.TweenLite;
        var s, o, a, l, u, c = function(t) { var e, n = t.split("."),
                    i = r; for (e = 0; e < n.length; e++) i[n[e]] = i = i[n[e]] || {}; return i },
            h = c("com.greensock"),
            p = function(t) { var e, n = [],
                    i = t.length; for (e = 0; e !== i; n.push(t[e++])); return n },
            d = function() {},
            f = function() { var t = Object.prototype.toString,
                    e = t.call([]); return function(n) { return null != n && (n instanceof Array || "object" == typeof n && !!n.push && t.call(n) === e) } }(),
            g = {},
            m = function(e, i, s, o) { this.sc = g[e] ? g[e].sc : [], g[e] = this, this.gsClass = null, this.func = s; var a = [];
                this.check = function(l) { for (var u, h, p, d, f = i.length, v = f; --f > -1;)(u = g[i[f]] || new m(i[f], [])).gsClass ? (a[f] = u.gsClass, v--) : l && u.sc.push(this); if (0 === v && s) { if (h = ("com.greensock." + e).split("."), p = h.pop(), d = c(h.join("."))[p] = this.gsClass = s.apply(s, a), o)
                            if (r[p] = n[p] = d, "undefined" != typeof module && module.exports)
                                if ("TweenMax" === e) { module.exports = n.TweenMax = d; for (f in n) d[f] = n[f] } else n.TweenMax && (n.TweenMax[p] = d);
                        else "function" == typeof define && define.amd && define((t.GreenSockAMDPath ? t.GreenSockAMDPath + "/" : "") + e.split(".").pop(), [], function() { return d }); for (f = 0; f < this.sc.length; f++) this.sc[f].check() } }, this.check(!0) },
            v = t._gsDefine = function(t, e, n, i) { return new m(t, e, n, i) },
            y = h._class = function(t, e, n) { return e = e || function() {}, v(t, [], function() { return e }, n), e };
        v.globals = r;
        var _ = [0, 0, 1, 1],
            x = y("easing.Ease", function(t, e, n, i) { this._func = t, this._type = n || 0, this._power = i || 0, this._params = e ? _.concat(e) : _ }, !0),
            b = x.map = {},
            w = x.register = function(t, e, n, i) { for (var r, s, o, a, l = e.split(","), u = l.length, c = (n || "easeIn,easeOut,easeInOut").split(","); --u > -1;)
                    for (s = l[u], r = i ? y("easing." + s, null, !0) : h.easing[s] || {}, o = c.length; --o > -1;) a = c[o], b[s + "." + a] = b[a + s] = r[a] = t.getRatio ? t : t[a] || new t };
        for (a = x.prototype, a._calcEnd = !1, a.getRatio = function(t) { if (this._func) return this._params[0] = t, this._func.apply(null, this._params); var e = this._type,
                    n = this._power,
                    i = 1 === e ? 1 - t : 2 === e ? t : t < .5 ? 2 * t : 2 * (1 - t); return 1 === n ? i *= i : 2 === n ? i *= i * i : 3 === n ? i *= i * i * i : 4 === n && (i *= i * i * i * i), 1 === e ? 1 - i : 2 === e ? i : t < .5 ? i / 2 : 1 - i / 2 }, s = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"], o = s.length; --o > -1;) a = s[o] + ",Power" + o, w(new x(null, null, 1, o), a, "easeOut", !0), w(new x(null, null, 2, o), a, "easeIn" + (0 === o ? ",easeNone" : "")), w(new x(null, null, 3, o), a, "easeInOut");
        b.linear = h.easing.Linear.easeIn, b.swing = h.easing.Quad.easeInOut;
        var T = y("events.EventDispatcher", function(t) { this._listeners = {}, this._eventTarget = t || this });
        a = T.prototype, a.addEventListener = function(t, e, n, i, r) { r = r || 0; var s, o, a = this._listeners[t],
                c = 0; for (this !== l || u || l.wake(), null == a && (this._listeners[t] = a = []), o = a.length; --o > -1;) s = a[o], s.c === e && s.s === n ? a.splice(o, 1) : 0 === c && s.pr < r && (c = o + 1);
            a.splice(c, 0, { c: e, s: n, up: i, pr: r }) }, a.removeEventListener = function(t, e) { var n, i = this._listeners[t]; if (i)
                for (n = i.length; --n > -1;)
                    if (i[n].c === e) return void i.splice(n, 1) }, a.dispatchEvent = function(t) { var e, n, i, r = this._listeners[t]; if (r)
                for (e = r.length, e > 1 && (r = r.slice(0)), n = this._eventTarget; --e > -1;)(i = r[e]) && (i.up ? i.c.call(i.s || n, { type: t, target: n }) : i.c.call(i.s || n)) };
        var C = t.requestAnimationFrame,
            S = t.cancelAnimationFrame,
            k = Date.now || function() { return (new Date).getTime() },
            A = k();
        for (s = ["ms", "moz", "webkit", "o"], o = s.length; --o > -1 && !C;) C = t[s[o] + "RequestAnimationFrame"], S = t[s[o] + "CancelAnimationFrame"] || t[s[o] + "CancelRequestAnimationFrame"];
        y("Ticker", function(t, e) { var n, r, s, o, a, c = this,
                h = k(),
                p = !(!1 === e || !C) && "auto",
                f = 500,
                g = 33,
                m = function(t) { var e, i, l = k() - A;
                    l > f && (h += l - g), A += l, c.time = (A - h) / 1e3, e = c.time - a, (!n || e > 0 || !0 === t) && (c.frame++, a += e + (e >= o ? .004 : o - e), i = !0), !0 !== t && (s = r(m)), i && c.dispatchEvent("tick") };
            T.call(c), c.time = c.frame = 0, c.tick = function() { m(!0) }, c.lagSmoothing = function(t, e) { if (!arguments.length) return f < 1e10;
                f = t || 1e10, g = Math.min(e, f, 0) }, c.sleep = function() { null != s && (p && S ? S(s) : clearTimeout(s), r = d, s = null, c === l && (u = !1)) }, c.wake = function(t) { null !== s ? c.sleep() : t ? h += -A + (A = k()) : c.frame > 10 && (A = k() - f + 5), r = 0 === n ? d : p && C ? C : function(t) { return setTimeout(t, 1e3 * (a - c.time) + 1 | 0) }, c === l && (u = !0), m(2) }, c.fps = function(t) { if (!arguments.length) return n;
                n = t, o = 1 / (n || 60), a = this.time + o, c.wake() }, c.useRAF = function(t) { if (!arguments.length) return p;
                c.sleep(), p = t, c.fps(n) }, c.fps(t), setTimeout(function() { "auto" === p && c.frame < 5 && "hidden" !== (i || {}).visibilityState && c.useRAF(!1) }, 1500) }), a = h.Ticker.prototype = new h.events.EventDispatcher, a.constructor = h.Ticker;
        var E = y("core.Animation", function(t, e) { if (this.vars = e = e || {}, this._duration = this._totalDuration = t || 0, this._delay = Number(e.delay) || 0, this._timeScale = 1, this._active = !0 === e.immediateRender, this.data = e.data, this._reversed = !0 === e.reversed, Y) { u || l.wake(); var n = this.vars.useFrames ? V : Y;
                n.add(this, n._time), this.vars.paused && this.paused(!0) } });
        l = E.ticker = new h.Ticker, a = E.prototype, a._dirty = a._gc = a._initted = a._paused = !1, a._totalTime = a._time = 0, a._rawPrevTime = -1, a._next = a._last = a._onUpdate = a._timeline = a.timeline = null, a._paused = !1;
        var P = function() { u && k() - A > 2e3 && ("hidden" !== (i || {}).visibilityState || !l.lagSmoothing()) && l.wake(); var t = setTimeout(P, 2e3);
            t.unref && t.unref() };
        P(), a.play = function(t, e) { return null != t && this.seek(t, e), this.reversed(!1).paused(!1) }, a.pause = function(t, e) { return null != t && this.seek(t, e), this.paused(!0) }, a.resume = function(t, e) { return null != t && this.seek(t, e), this.paused(!1) }, a.seek = function(t, e) { return this.totalTime(Number(t), !1 !== e) }, a.restart = function(t, e) { return this.reversed(!1).paused(!1).totalTime(t ? -this._delay : 0, !1 !== e, !0) }, a.reverse = function(t, e) { return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1) }, a.render = function(t, e, n) {}, a.invalidate = function() { return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, !this._gc && this.timeline || this._enabled(!0), this }, a.isActive = function() { var t, e = this._timeline,
                n = this._startTime; return !e || !this._gc && !this._paused && e.isActive() && (t = e.rawTime(!0)) >= n && t < n + this.totalDuration() / this._timeScale - 1e-7 }, a._enabled = function(t, e) { return u || l.wake(), this._gc = !t, this._active = this.isActive(), !0 !== e && (t && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !t && this.timeline && this._timeline._remove(this, !0)), !1 }, a._kill = function(t, e) { return this._enabled(!1, !1) }, a.kill = function(t, e) { return this._kill(t, e), this }, a._uncache = function(t) { for (var e = t ? this : this.timeline; e;) e._dirty = !0, e = e.timeline; return this }, a._swapSelfInParams = function(t) { for (var e = t.length, n = t.concat(); --e > -1;) "{self}" === t[e] && (n[e] = this); return n }, a._callback = function(t) { var e = this.vars,
                n = e[t],
                i = e[t + "Params"],
                r = e[t + "Scope"] || e.callbackScope || this; switch (i ? i.length : 0) {
                case 0:
                    n.call(r); break;
                case 1:
                    n.call(r, i[0]); break;
                case 2:
                    n.call(r, i[0], i[1]); break;
                default:
                    n.apply(r, i) } }, a.eventCallback = function(t, e, n, i) { if ("on" === (t || "").substr(0, 2)) { var r = this.vars; if (1 === arguments.length) return r[t];
                null == e ? delete r[t] : (r[t] = e, r[t + "Params"] = f(n) && -1 !== n.join("").indexOf("{self}") ? this._swapSelfInParams(n) : n, r[t + "Scope"] = i), "onUpdate" === t && (this._onUpdate = e) } return this }, a.delay = function(t) { return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + t - this._delay), this._delay = t, this) : this._delay }, a.duration = function(t) { return arguments.length ? (this._duration = this._totalDuration = t, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== t && this.totalTime(this._totalTime * (t / this._duration), !0), this) : (this._dirty = !1, this._duration) }, a.totalDuration = function(t) { return this._dirty = !1, arguments.length ? this.duration(t) : this._totalDuration }, a.time = function(t, e) { return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(t > this._duration ? this._duration : t, e)) : this._time }, a.totalTime = function(t, e, n) { if (u || l.wake(), !arguments.length) return this._totalTime; if (this._timeline) { if (t < 0 && !n && (t += this.totalDuration()), this._timeline.smoothChildTiming) { this._dirty && this.totalDuration(); var i = this._totalDuration,
                        r = this._timeline; if (t > i && !n && (t = i), this._startTime = (this._paused ? this._pauseTime : r._time) - (this._reversed ? i - t : t) / this._timeScale, r._dirty || this._uncache(!1), r._timeline)
                        for (; r._timeline;) r._timeline._time !== (r._startTime + r._totalTime) / r._timeScale && r.totalTime(r._totalTime, !0), r = r._timeline }
                this._gc && this._enabled(!0, !1), this._totalTime === t && 0 !== this._duration || (N.length && Q(), this.render(t, e, !1), N.length && Q()) } return this }, a.progress = a.totalProgress = function(t, e) { var n = this.duration(); return arguments.length ? this.totalTime(n * t, e) : n ? this._time / n : this.ratio }, a.startTime = function(t) {
            return arguments.length ? (t !== this._startTime && (this._startTime = t, this.timeline && this.timeline._sortChildren && this.timeline.add(this, t - this._delay)),
                this) : this._startTime
        }, a.endTime = function(t) { return this._startTime + (0 != t ? this.totalDuration() : this.duration()) / this._timeScale }, a.timeScale = function(t) { if (!arguments.length) return this._timeScale; var e, n; for (t = t || 1e-10, this._timeline && this._timeline.smoothChildTiming && (e = this._pauseTime, n = e || 0 === e ? e : this._timeline.totalTime(), this._startTime = n - (n - this._startTime) * this._timeScale / t), this._timeScale = t, n = this.timeline; n && n.timeline;) n._dirty = !0, n.totalDuration(), n = n.timeline; return this }, a.reversed = function(t) { return arguments.length ? (t != this._reversed && (this._reversed = t, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed }, a.paused = function(t) { if (!arguments.length) return this._paused; var e, n, i = this._timeline; return t != this._paused && i && (u || t || l.wake(), e = i.rawTime(), n = e - this._pauseTime, !t && i.smoothChildTiming && (this._startTime += n, this._uncache(!1)), this._pauseTime = t ? e : null, this._paused = t, this._active = this.isActive(), !t && 0 !== n && this._initted && this.duration() && (e = i.smoothChildTiming ? this._totalTime : (e - this._startTime) / this._timeScale, this.render(e, e === this._totalTime, !0))), this._gc && !t && this._enabled(!0, !1), this };
        var D = y("core.SimpleTimeline", function(t) { E.call(this, 0, t), this.autoRemoveChildren = this.smoothChildTiming = !0 });
        a = D.prototype = new E, a.constructor = D, a.kill()._gc = !1, a._first = a._last = a._recent = null, a._sortChildren = !1, a.add = a.insert = function(t, e, n, i) { var r, s; if (t._startTime = Number(e || 0) + t._delay, t._paused && this !== t._timeline && (t._pauseTime = this.rawTime() - (t._timeline.rawTime() - t._pauseTime)), t.timeline && t.timeline._remove(t, !0), t.timeline = t._timeline = this, t._gc && t._enabled(!0, !0), r = this._last, this._sortChildren)
                for (s = t._startTime; r && r._startTime > s;) r = r._prev; return r ? (t._next = r._next, r._next = t) : (t._next = this._first, this._first = t), t._next ? t._next._prev = t : this._last = t, t._prev = r, this._recent = t, this._timeline && this._uncache(!0), this }, a._remove = function(t, e) { return t.timeline === this && (e || t._enabled(!1, !0), t._prev ? t._prev._next = t._next : this._first === t && (this._first = t._next), t._next ? t._next._prev = t._prev : this._last === t && (this._last = t._prev), t._next = t._prev = t.timeline = null, t === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this }, a.render = function(t, e, n) { var i, r = this._first; for (this._totalTime = this._time = this._rawPrevTime = t; r;) i = r._next, (r._active || t >= r._startTime && !r._paused && !r._gc) && (r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (t - r._startTime) * r._timeScale, e, n) : r.render((t - r._startTime) * r._timeScale, e, n)), r = i }, a.rawTime = function() { return u || l.wake(), this._totalTime };
        var O = y("TweenLite", function(e, n, i) { if (E.call(this, n, i), this.render = O.prototype.render, null == e) throw "Cannot tween a null target.";
                this.target = e = "string" != typeof e ? e : O.selector(e) || e; var r, s, o, a = e.jquery || e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType),
                    l = this.vars.overwrite; if (this._overwrite = l = null == l ? U[O.defaultOverwrite] : "number" == typeof l ? l >> 0 : U[l], (a || e instanceof Array || e.push && f(e)) && "number" != typeof e[0])
                    for (this._targets = o = p(e), this._propLookup = [], this._siblings = [], r = 0; r < o.length; r++) s = o[r], s ? "string" != typeof s ? s.length && s !== t && s[0] && (s[0] === t || s[0].nodeType && s[0].style && !s.nodeType) ? (o.splice(r--, 1), this._targets = o = o.concat(p(s))) : (this._siblings[r] = Z(s, this, !1), 1 === l && this._siblings[r].length > 1 && J(s, this, null, 1, this._siblings[r])) : "string" == typeof(s = o[r--] = O.selector(s)) && o.splice(r + 1, 1) : o.splice(r--, 1);
                else this._propLookup = {}, this._siblings = Z(e, this, !1), 1 === l && this._siblings.length > 1 && J(e, this, null, 1, this._siblings);
                (this.vars.immediateRender || 0 === n && 0 === this._delay && !1 !== this.vars.immediateRender) && (this._time = -1e-10, this.render(Math.min(0, -this._delay))) }, !0),
            F = function(e) { return e && e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType) },
            M = function(t, e) { var n, i = {}; for (n in t) X[n] || n in e && "transform" !== n && "x" !== n && "y" !== n && "width" !== n && "height" !== n && "className" !== n && "border" !== n || !(!I[n] || I[n] && I[n]._autoCSS) || (i[n] = t[n], delete t[n]);
                t.css = i };
        a = O.prototype = new E, a.constructor = O, a.kill()._gc = !1, a.ratio = 0, a._firstPT = a._targets = a._overwrittenProps = a._startAt = null, a._notifyPluginsOfEnabled = a._lazy = !1, O.version = "1.20.5", O.defaultEase = a._ease = new x(null, null, 1, 1), O.defaultOverwrite = "auto", O.ticker = l, O.autoSleep = 120, O.lagSmoothing = function(t, e) { l.lagSmoothing(t, e) }, O.selector = t.$ || t.jQuery || function(e) { var n = t.$ || t.jQuery; return n ? (O.selector = n, n(e)) : (i || (i = t.document), i ? i.querySelectorAll ? i.querySelectorAll(e) : i.getElementById("#" === e.charAt(0) ? e.substr(1) : e) : e) };
        var N = [],
            $ = {},
            R = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
            j = /[\+-]=-?[\.\d]/,
            L = function(t) { for (var e, n = this._firstPT; n;) e = n.blob ? 1 === t && null != this.end ? this.end : t ? this.join("") : this.start : n.c * t + n.s, n.m ? e = n.m.call(this._tween, e, this._target || n.t, this._tween) : e < 1e-6 && e > -1e-6 && !n.blob && (e = 0), n.f ? n.fp ? n.t[n.p](n.fp, e) : n.t[n.p](e) : n.t[n.p] = e, n = n._next },
            z = function(t, e, n, i) { var r, s, o, a, l, u, c, h = [],
                    p = 0,
                    d = "",
                    f = 0; for (h.start = t, h.end = e, t = h[0] = t + "", e = h[1] = e + "", n && (n(h), t = h[0], e = h[1]), h.length = 0, r = t.match(R) || [], s = e.match(R) || [], i && (i._next = null, i.blob = 1, h._firstPT = h._applyPT = i), l = s.length, a = 0; a < l; a++) c = s[a], u = e.substr(p, e.indexOf(c, p) - p), d += u || !a ? u : ",", p += u.length, f ? f = (f + 1) % 5 : "rgba(" === u.substr(-5) && (f = 1), c === r[a] || r.length <= a ? d += c : (d && (h.push(d), d = ""), o = parseFloat(r[a]), h.push(o), h._firstPT = { _next: h._firstPT, t: h, p: h.length - 1, s: o, c: ("=" === c.charAt(1) ? parseInt(c.charAt(0) + "1", 10) * parseFloat(c.substr(2)) : parseFloat(c) - o) || 0, f: 0, m: f && f < 4 ? Math.round : 0 }), p += c.length; return d += e.substr(p), d && h.push(d), h.setRatio = L, j.test(e) && (h.end = null), h },
            B = function(t, e, n, i, r, s, o, a, l) { "function" == typeof i && (i = i(l || 0, t)); var u, c = typeof t[e],
                    h = "function" !== c ? "" : e.indexOf("set") || "function" != typeof t["get" + e.substr(3)] ? e : "get" + e.substr(3),
                    p = "get" !== n ? n : h ? o ? t[h](o) : t[h]() : t[e],
                    d = "string" == typeof i && "=" === i.charAt(1),
                    f = { t: t, p: e, s: p, f: "function" === c, pg: 0, n: r || e, m: s ? "function" == typeof s ? s : Math.round : 0, pr: 0, c: d ? parseInt(i.charAt(0) + "1", 10) * parseFloat(i.substr(2)) : parseFloat(i) - p || 0 }; if (("number" != typeof p || "number" != typeof i && !d) && (o || isNaN(p) || !d && isNaN(i) || "boolean" == typeof p || "boolean" == typeof i ? (f.fp = o, u = z(p, d ? parseFloat(f.s) + f.c + (f.s + "").replace(/[0-9\-\.]/g, "") : i, a || O.defaultStringFilter, f), f = { t: u, p: "setRatio", s: 0, c: 1, f: 2, pg: 0, n: r || e, pr: 0, m: 0 }) : (f.s = parseFloat(p), d || (f.c = parseFloat(i) - f.s || 0))), f.c) return (f._next = this._firstPT) && (f._next._prev = f), this._firstPT = f, f },
            q = O._internals = { isArray: f, isSelector: F, lazyTweens: N, blobDif: z },
            I = O._plugins = {},
            H = q.tweenLookup = {},
            W = 0,
            X = q.reservedProps = { ease: 1, delay: 1, overwrite: 1, onComplete: 1, onCompleteParams: 1, onCompleteScope: 1, useFrames: 1, runBackwards: 1, startAt: 1, onUpdate: 1, onUpdateParams: 1, onUpdateScope: 1, onStart: 1, onStartParams: 1, onStartScope: 1, onReverseComplete: 1, onReverseCompleteParams: 1, onReverseCompleteScope: 1, onRepeat: 1, onRepeatParams: 1, onRepeatScope: 1, easeParams: 1, yoyo: 1, immediateRender: 1, repeat: 1, repeatDelay: 1, data: 1, paused: 1, reversed: 1, autoCSS: 1, lazy: 1, onOverwrite: 1, callbackScope: 1, stringFilter: 1, id: 1, yoyoEase: 1 },
            U = { none: 0, all: 1, auto: 2, concurrent: 3, allOnStart: 4, preexisting: 5, true: 1, false: 0 },
            V = E._rootFramesTimeline = new D,
            Y = E._rootTimeline = new D,
            G = 30,
            Q = q.lazyRender = function() { var t, e = N.length; for ($ = {}; --e > -1;)(t = N[e]) && !1 !== t._lazy && (t.render(t._lazy[0], t._lazy[1], !0), t._lazy = !1);
                N.length = 0 };
        Y._startTime = l.time, V._startTime = l.frame, Y._active = V._active = !0, setTimeout(Q, 1), E._updateRoot = O.render = function() { var t, e, n; if (N.length && Q(), Y.render((l.time - Y._startTime) * Y._timeScale, !1, !1), V.render((l.frame - V._startTime) * V._timeScale, !1, !1), N.length && Q(), l.frame >= G) { G = l.frame + (parseInt(O.autoSleep, 10) || 120); for (n in H) { for (e = H[n].tweens, t = e.length; --t > -1;) e[t]._gc && e.splice(t, 1);
                    0 === e.length && delete H[n] } if ((!(n = Y._first) || n._paused) && O.autoSleep && !V._first && 1 === l._listeners.tick.length) { for (; n && n._paused;) n = n._next;
                    n || l.sleep() } } }, l.addEventListener("tick", E._updateRoot);
        var Z = function(t, e, n) { var i, r, s = t._gsTweenID; if (H[s || (t._gsTweenID = s = "t" + W++)] || (H[s] = { target: t, tweens: [] }), e && (i = H[s].tweens, i[r = i.length] = e, n))
                    for (; --r > -1;) i[r] === e && i.splice(r, 1); return H[s].tweens },
            K = function(t, e, n, i) { var r, s, o = t.vars.onOverwrite; return o && (r = o(t, e, n, i)), o = O.onOverwrite, o && (s = o(t, e, n, i)), !1 !== r && !1 !== s },
            J = function(t, e, n, i, r) { var s, o, a, l; if (1 === i || i >= 4) { for (l = r.length, s = 0; s < l; s++)
                        if ((a = r[s]) !== e) a._gc || a._kill(null, t, e) && (o = !0);
                        else if (5 === i) break; return o } var u, c = e._startTime + 1e-10,
                    h = [],
                    p = 0,
                    d = 0 === e._duration; for (s = r.length; --s > -1;)(a = r[s]) === e || a._gc || a._paused || (a._timeline !== e._timeline ? (u = u || tt(e, 0, d), 0 === tt(a, u, d) && (h[p++] = a)) : a._startTime <= c && a._startTime + a.totalDuration() / a._timeScale > c && ((d || !a._initted) && c - a._startTime <= 2e-10 || (h[p++] = a))); for (s = p; --s > -1;)
                    if (a = h[s], 2 === i && a._kill(n, t, e) && (o = !0), 2 !== i || !a._firstPT && a._initted) { if (2 !== i && !K(a, e)) continue;
                        a._enabled(!1, !1) && (o = !0) }
                return o },
            tt = function(t, e, n) { for (var i = t._timeline, r = i._timeScale, s = t._startTime; i._timeline;) { if (s += i._startTime, r *= i._timeScale, i._paused) return -100;
                    i = i._timeline } return s /= r, s > e ? s - e : n && s === e || !t._initted && s - e < 2e-10 ? 1e-10 : (s += t.totalDuration() / t._timeScale / r) > e + 1e-10 ? 0 : s - e - 1e-10 };
        a._init = function() { var t, e, n, i, r, s, o = this.vars,
                a = this._overwrittenProps,
                l = this._duration,
                u = !!o.immediateRender,
                c = o.ease; if (o.startAt) { this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), r = {}; for (i in o.startAt) r[i] = o.startAt[i]; if (r.data = "isStart", r.overwrite = !1, r.immediateRender = !0, r.lazy = u && !1 !== o.lazy, r.startAt = r.delay = null, r.onUpdate = o.onUpdate, r.onUpdateParams = o.onUpdateParams, r.onUpdateScope = o.onUpdateScope || o.callbackScope || this, this._startAt = O.to(this.target || {}, 0, r), u)
                    if (this._time > 0) this._startAt = null;
                    else if (0 !== l) return } else if (o.runBackwards && 0 !== l)
                if (this._startAt) this._startAt.render(-1, !0), this._startAt.kill(), this._startAt = null;
                else { 0 !== this._time && (u = !1), n = {}; for (i in o) X[i] && "autoCSS" !== i || (n[i] = o[i]); if (n.overwrite = 0, n.data = "isFromStart", n.lazy = u && !1 !== o.lazy, n.immediateRender = u, this._startAt = O.to(this.target, 0, n), u) { if (0 === this._time) return } else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null) }
            if (this._ease = c = c ? c instanceof x ? c : "function" == typeof c ? new x(c, o.easeParams) : b[c] || O.defaultEase : O.defaultEase, o.easeParams instanceof Array && c.config && (this._ease = c.config.apply(c, o.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
                for (s = this._targets.length, t = 0; t < s; t++) this._initProps(this._targets[t], this._propLookup[t] = {}, this._siblings[t], a ? a[t] : null, t) && (e = !0);
            else e = this._initProps(this.target, this._propLookup, this._siblings, a, 0); if (e && O._onPluginEvent("_onInitAllProps", this), a && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), o.runBackwards)
                for (n = this._firstPT; n;) n.s += n.c, n.c = -n.c, n = n._next;
            this._onUpdate = o.onUpdate, this._initted = !0 }, a._initProps = function(e, n, i, r, s) { var o, a, l, u, c, h; if (null == e) return !1;
            $[e._gsTweenID] && Q(), this.vars.css || e.style && e !== t && e.nodeType && I.css && !1 !== this.vars.autoCSS && M(this.vars, e); for (o in this.vars)
                if (h = this.vars[o], X[o]) h && (h instanceof Array || h.push && f(h)) && -1 !== h.join("").indexOf("{self}") && (this.vars[o] = h = this._swapSelfInParams(h, this));
                else if (I[o] && (u = new I[o])._onInitTween(e, this.vars[o], this, s)) { for (this._firstPT = c = { _next: this._firstPT, t: u, p: "setRatio", s: 0, c: 1, f: 1, n: o, pg: 1, pr: u._priority, m: 0 }, a = u._overwriteProps.length; --a > -1;) n[u._overwriteProps[a]] = this._firstPT;
                (u._priority || u._onInitAllProps) && (l = !0), (u._onDisable || u._onEnable) && (this._notifyPluginsOfEnabled = !0), c._next && (c._next._prev = c) } else n[o] = B.call(this, e, o, "get", h, o, 0, null, this.vars.stringFilter, s); return r && this._kill(r, e) ? this._initProps(e, n, i, r, s) : this._overwrite > 1 && this._firstPT && i.length > 1 && J(e, this, n, this._overwrite, i) ? (this._kill(n, e), this._initProps(e, n, i, r, s)) : (this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration) && ($[e._gsTweenID] = !0), l) }, a.render = function(t, e, n) { var i, r, s, o, a = this._time,
                l = this._duration,
                u = this._rawPrevTime; if (t >= l - 1e-7 && t >= 0) this._totalTime = this._time = l, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (i = !0, r = "onComplete", n = n || this._timeline.autoRemoveChildren), 0 === l && (this._initted || !this.vars.lazy || n) && (this._startTime === this._timeline._duration && (t = 0), (u < 0 || t <= 0 && t >= -1e-7 || 1e-10 === u && "isPause" !== this.data) && u !== t && (n = !0, u > 1e-10 && (r = "onReverseComplete")), this._rawPrevTime = o = !e || t || u === t ? t : 1e-10);
            else if (t < 1e-7) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== a || 0 === l && u > 0) && (r = "onReverseComplete", i = this._reversed), t < 0 && (this._active = !1, 0 === l && (this._initted || !this.vars.lazy || n) && (u >= 0 && (1e-10 !== u || "isPause" !== this.data) && (n = !0), this._rawPrevTime = o = !e || t || u === t ? t : 1e-10)), (!this._initted || this._startAt && this._startAt.progress()) && (n = !0);
            else if (this._totalTime = this._time = t, this._easeType) { var c = t / l,
                    h = this._easeType,
                    p = this._easePower;
                (1 === h || 3 === h && c >= .5) && (c = 1 - c), 3 === h && (c *= 2), 1 === p ? c *= c : 2 === p ? c *= c * c : 3 === p ? c *= c * c * c : 4 === p && (c *= c * c * c * c), this.ratio = 1 === h ? 1 - c : 2 === h ? c : t / l < .5 ? c / 2 : 1 - c / 2 } else this.ratio = this._ease.getRatio(t / l); if (this._time !== a || n) { if (!this._initted) { if (this._init(), !this._initted || this._gc) return; if (!n && this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration)) return this._time = this._totalTime = a, this._rawPrevTime = u, N.push(this), void(this._lazy = [t, e]);
                    this._time && !i ? this.ratio = this._ease.getRatio(this._time / l) : i && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1)) } for (!1 !== this._lazy && (this._lazy = !1), this._active || !this._paused && this._time !== a && t >= 0 && (this._active = !0), 0 === a && (this._startAt && (t >= 0 ? this._startAt.render(t, !0, n) : r || (r = "_dummyGS")), this.vars.onStart && (0 === this._time && 0 !== l || e || this._callback("onStart"))), s = this._firstPT; s;) s.f ? s.t[s.p](s.c * this.ratio + s.s) : s.t[s.p] = s.c * this.ratio + s.s, s = s._next;
                this._onUpdate && (t < 0 && this._startAt && -1e-4 !== t && this._startAt.render(t, !0, n), e || (this._time !== a || i || n) && this._callback("onUpdate")), r && (this._gc && !n || (t < 0 && this._startAt && !this._onUpdate && -1e-4 !== t && this._startAt.render(t, !0, n), i && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[r] && this._callback(r), 0 === l && 1e-10 === this._rawPrevTime && 1e-10 !== o && (this._rawPrevTime = 0))) } }, a._kill = function(t, e, n) { if ("all" === t && (t = null), null == t && (null == e || e === this.target)) return this._lazy = !1, this._enabled(!1, !1);
            e = "string" != typeof e ? e || this._targets || this.target : O.selector(e) || e; var i, r, s, o, a, l, u, c, h, p = n && this._time && n._startTime === this._startTime && this._timeline === n._timeline; if ((f(e) || F(e)) && "number" != typeof e[0])
                for (i = e.length; --i > -1;) this._kill(t, e[i], n) && (l = !0);
            else { if (this._targets) { for (i = this._targets.length; --i > -1;)
                        if (e === this._targets[i]) { a = this._propLookup[i] || {}, this._overwrittenProps = this._overwrittenProps || [], r = this._overwrittenProps[i] = t ? this._overwrittenProps[i] || {} : "all"; break } } else { if (e !== this.target) return !1;
                    a = this._propLookup, r = this._overwrittenProps = t ? this._overwrittenProps || {} : "all" } if (a) { if (u = t || a, c = t !== r && "all" !== r && t !== a && ("object" != typeof t || !t._tempKill), n && (O.onOverwrite || this.vars.onOverwrite)) { for (s in u) a[s] && (h || (h = []), h.push(s)); if ((h || !t) && !K(this, n, e, h)) return !1 } for (s in u)(o = a[s]) && (p && (o.f ? o.t[o.p](o.s) : o.t[o.p] = o.s, l = !0), o.pg && o.t._kill(u) && (l = !0), o.pg && 0 !== o.t._overwriteProps.length || (o._prev ? o._prev._next = o._next : o === this._firstPT && (this._firstPT = o._next), o._next && (o._next._prev = o._prev), o._next = o._prev = null), delete a[s]), c && (r[s] = 1);!this._firstPT && this._initted && this._enabled(!1, !1) } } return l }, a.invalidate = function() { return this._notifyPluginsOfEnabled && O._onPluginEvent("_onDisable", this), this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], E.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -1e-10, this.render(Math.min(0, -this._delay))), this }, a._enabled = function(t, e) { if (u || l.wake(), t && this._gc) { var n, i = this._targets; if (i)
                    for (n = i.length; --n > -1;) this._siblings[n] = Z(i[n], this, !0);
                else this._siblings = Z(this.target, this, !0) } return E.prototype._enabled.call(this, t, e), !(!this._notifyPluginsOfEnabled || !this._firstPT) && O._onPluginEvent(t ? "_onEnable" : "_onDisable", this) }, O.to = function(t, e, n) { return new O(t, e, n) }, O.from = function(t, e, n) { return n.runBackwards = !0, n.immediateRender = 0 != n.immediateRender, new O(t, e, n) }, O.fromTo = function(t, e, n, i) { return i.startAt = n, i.immediateRender = 0 != i.immediateRender && 0 != n.immediateRender, new O(t, e, i) }, O.delayedCall = function(t, e, n, i, r) { return new O(e, 0, { delay: t, onComplete: e, onCompleteParams: n, callbackScope: i, onReverseComplete: e, onReverseCompleteParams: n, immediateRender: !1, lazy: !1, useFrames: r, overwrite: 0 }) }, O.set = function(t, e) { return new O(t, 0, e) }, O.getTweensOf = function(t, e) { if (null == t) return [];
            t = "string" != typeof t ? t : O.selector(t) || t; var n, i, r, s; if ((f(t) || F(t)) && "number" != typeof t[0]) { for (n = t.length, i = []; --n > -1;) i = i.concat(O.getTweensOf(t[n], e)); for (n = i.length; --n > -1;)
                    for (s = i[n], r = n; --r > -1;) s === i[r] && i.splice(n, 1) } else if (t._gsTweenID)
                for (i = Z(t).concat(), n = i.length; --n > -1;)(i[n]._gc || e && !i[n].isActive()) && i.splice(n, 1); return i || [] }, O.killTweensOf = O.killDelayedCallsTo = function(t, e, n) { "object" == typeof e && (n = e, e = !1); for (var i = O.getTweensOf(t, e), r = i.length; --r > -1;) i[r]._kill(n, t) };
        var et = y("plugins.TweenPlugin", function(t, e) { this._overwriteProps = (t || "").split(","), this._propName = this._overwriteProps[0], this._priority = e || 0, this._super = et.prototype }, !0);
        if (a = et.prototype, et.version = "1.19.0", et.API = 2, a._firstPT = null, a._addTween = B, a.setRatio = L, a._kill = function(t) { var e, n = this._overwriteProps,
                    i = this._firstPT; if (null != t[this._propName]) this._overwriteProps = [];
                else
                    for (e = n.length; --e > -1;) null != t[n[e]] && n.splice(e, 1); for (; i;) null != t[i.n] && (i._next && (i._next._prev = i._prev), i._prev ? (i._prev._next = i._next, i._prev = null) : this._firstPT === i && (this._firstPT = i._next)), i = i._next; return !1 }, a._mod = a._roundProps = function(t) { for (var e, n = this._firstPT; n;) e = t[this._propName] || null != n.n && t[n.n.split(this._propName + "_").join("")], e && "function" == typeof e && (2 === n.f ? n.t._applyPT.m = e : n.m = e), n = n._next }, O._onPluginEvent = function(t, e) { var n, i, r, s, o, a = e._firstPT; if ("_onInitAllProps" === t) { for (; a;) { for (o = a._next, i = r; i && i.pr > a.pr;) i = i._next;
                        (a._prev = i ? i._prev : s) ? a._prev._next = a: r = a, (a._next = i) ? i._prev = a : s = a, a = o }
                    a = e._firstPT = r } for (; a;) a.pg && "function" == typeof a.t[t] && a.t[t]() && (n = !0), a = a._next; return n }, et.activate = function(t) { for (var e = t.length; --e > -1;) t[e].API === et.API && (I[(new t[e])._propName] = t[e]); return !0 }, v.plugin = function(t) { if (!(t && t.propName && t.init && t.API)) throw "illegal plugin definition."; var e, n = t.propName,
                    i = t.priority || 0,
                    r = t.overwriteProps,
                    s = { init: "_onInitTween", set: "setRatio", kill: "_kill", round: "_mod", mod: "_mod", initAll: "_onInitAllProps" },
                    o = y("plugins." + n.charAt(0).toUpperCase() + n.substr(1) + "Plugin", function() { et.call(this, n, i), this._overwriteProps = r || [] }, !0 === t.global),
                    a = o.prototype = new et(n);
                a.constructor = o, o.API = t.API; for (e in s) "function" == typeof t[e] && (a[s[e]] = t[e]); return o.version = t.version, et.activate([o]), o }, s = t._gsQueue) { for (o = 0; o < s.length; o++) s[o](); for (a in g) g[a].func || t.console.log("GSAP encountered missing dependency: " + a) }
        u = !1
    }("undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window),
    function(t, e, n, i) {
        function r(e, n) { this.settings = null, this.options = t.extend({}, r.Defaults, n), this.$element = t(e), this._handlers = {}, this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._widths = [], this._invalidated = {}, this._pipe = [], this._drag = { time: null, target: null, pointer: null, stage: { start: null, current: null }, direction: null }, this._states = { current: {}, tags: { initializing: ["busy"], animating: ["busy"], dragging: ["interacting"] } }, t.each(["onResize", "onThrottledResize"], t.proxy(function(e, n) { this._handlers[n] = t.proxy(this[n], this) }, this)), t.each(r.Plugins, t.proxy(function(t, e) { this._plugins[t.charAt(0).toLowerCase() + t.slice(1)] = new e(this) }, this)), t.each(r.Workers, t.proxy(function(e, n) { this._pipe.push({ filter: n.filter, run: t.proxy(n.run, this) }) }, this)), this.setup(), this.initialize() }
        r.Defaults = { items: 3, loop: !1, center: !1, rewind: !1, checkVisibility: !0, mouseDrag: !0, touchDrag: !0, pullDrag: !0, freeDrag: !1, margin: 0, stagePadding: 0, merge: !1, mergeFit: !0, autoWidth: !1, startPosition: 0, rtl: !1, smartSpeed: 250, fluidSpeed: !1, dragEndSpeed: !1, responsive: {}, responsiveRefreshRate: 200, responsiveBaseElement: e, fallbackEasing: "swing", slideTransition: "", info: !1, nestedItemSelector: !1, itemElement: "div", stageElement: "div", refreshClass: "owl-refresh", loadedClass: "owl-loaded", loadingClass: "owl-loading", rtlClass: "owl-rtl", responsiveClass: "owl-responsive", dragClass: "owl-drag", itemClass: "owl-item", stageClass: "owl-stage", stageOuterClass: "owl-stage-outer", grabClass: "owl-grab" }, r.Width = { Default: "default", Inner: "inner", Outer: "outer" }, r.Type = { Event: "event", State: "state" }, r.Plugins = {}, r.Workers = [{ filter: ["width", "settings"], run: function() { this._width = this.$element.width() } }, { filter: ["width", "items", "settings"], run: function(t) { t.current = this._items && this._items[this.relative(this._current)] } }, { filter: ["items", "settings"], run: function() { this.$stage.children(".cloned").remove() } }, { filter: ["width", "items", "settings"], run: function(t) { var e = this.settings.margin || "",
                    n = !this.settings.autoWidth,
                    i = this.settings.rtl,
                    r = { width: "auto", "margin-left": i ? e : "", "margin-right": i ? "" : e };!n && this.$stage.children().css(r), t.css = r } }, { filter: ["width", "items", "settings"], run: function(t) { var e = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
                    n = null,
                    i = this._items.length,
                    r = !this.settings.autoWidth,
                    s = []; for (t.items = { merge: !1, width: e }; i--;) n = this._mergers[i], n = this.settings.mergeFit && Math.min(n, this.settings.items) || n, t.items.merge = n > 1 || t.items.merge, s[i] = r ? e * n : this._items[i].width();
                this._widths = s } }, { filter: ["items", "settings"], run: function() { var e = [],
                    n = this._items,
                    i = this.settings,
                    r = Math.max(2 * i.items, 4),
                    s = 2 * Math.ceil(n.length / 2),
                    o = i.loop && n.length ? i.rewind ? r : Math.max(r, s) : 0,
                    a = "",
                    l = ""; for (o /= 2; o > 0;) e.push(this.normalize(e.length / 2, !0)), a += n[e[e.length - 1]][0].outerHTML, e.push(this.normalize(n.length - 1 - (e.length - 1) / 2, !0)), l = n[e[e.length - 1]][0].outerHTML + l, o -= 1;
                this._clones = e, t(a).addClass("cloned").appendTo(this.$stage), t(l).addClass("cloned").prependTo(this.$stage) } }, { filter: ["width", "items", "settings"], run: function() { for (var t = this.settings.rtl ? 1 : -1, e = this._clones.length + this._items.length, n = -1, i = 0, r = 0, s = []; ++n < e;) i = s[n - 1] || 0, r = this._widths[this.relative(n)] + this.settings.margin, s.push(i + r * t);
                this._coordinates = s } }, { filter: ["width", "items", "settings"], run: function() { var t = this.settings.stagePadding,
                    e = this._coordinates,
                    n = { width: Math.ceil(Math.abs(e[e.length - 1])) + 2 * t, "padding-left": t || "", "padding-right": t || "" };
                this.$stage.css(n) } }, { filter: ["width", "items", "settings"], run: function(t) { var e = this._coordinates.length,
                    n = !this.settings.autoWidth,
                    i = this.$stage.children(); if (n && t.items.merge)
                    for (; e--;) t.css.width = this._widths[this.relative(e)], i.eq(e).css(t.css);
                else n && (t.css.width = t.items.width, i.css(t.css)) } }, { filter: ["items"], run: function() { this._coordinates.length < 1 && this.$stage.removeAttr("style") } }, { filter: ["width", "items", "settings"], run: function(t) { t.current = t.current ? this.$stage.children().index(t.current) : 0, t.current = Math.max(this.minimum(), Math.min(this.maximum(), t.current)), this.reset(t.current) } }, { filter: ["position"], run: function() { this.animate(this.coordinates(this._current)) } }, { filter: ["width", "position", "items", "settings"], run: function() { var t, e, n, i, r = this.settings.rtl ? 1 : -1,
                    s = 2 * this.settings.stagePadding,
                    o = this.coordinates(this.current()) + s,
                    a = o + this.width() * r,
                    l = []; for (n = 0, i = this._coordinates.length; n < i; n++) t = this._coordinates[n - 1] || 0, e = Math.abs(this._coordinates[n]) + s * r, (this.op(t, "<=", o) && this.op(t, ">", a) || this.op(e, "<", o) && this.op(e, ">", a)) && l.push(n);
                this.$stage.children(".active").removeClass("active"), this.$stage.children(":eq(" + l.join("), :eq(") + ")").addClass("active"), this.$stage.children(".center").removeClass("center"), this.settings.center && this.$stage.children().eq(this.current()).addClass("center") } }], r.prototype.initializeStage = function() { this.$stage = this.$element.find("." + this.settings.stageClass), this.$stage.length || (this.$element.addClass(this.options.loadingClass), this.$stage = t("<" + this.settings.stageElement + ">", { class: this.settings.stageClass }).wrap(t("<div/>", { class: this.settings.stageOuterClass })), this.$element.append(this.$stage.parent())) }, r.prototype.initializeItems = function() { var e = this.$element.find(".owl-item"); if (e.length) return this._items = e.get().map(function(e) { return t(e) }), this._mergers = this._items.map(function() { return 1 }), void this.refresh();
            this.replace(this.$element.children().not(this.$stage.parent())), this.isVisible() ? this.refresh() : this.invalidate("width"), this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass) }, r.prototype.initialize = function() { if (this.enter("initializing"), this.trigger("initialize"), this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl), this.settings.autoWidth && !this.is("pre-loading")) { var t, e, n;
                t = this.$element.find("img"), e = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : void 0, n = this.$element.children(e).width(), t.length && n <= 0 && this.preloadAutoWidthImages(t) }
            this.initializeStage(), this.initializeItems(), this.registerEventHandlers(), this.leave("initializing"), this.trigger("initialized") }, r.prototype.isVisible = function() { return !this.settings.checkVisibility || this.$element.is(":visible") }, r.prototype.setup = function() { var e = this.viewport(),
                n = this.options.responsive,
                i = -1,
                r = null;
            n ? (t.each(n, function(t) { t <= e && t > i && (i = Number(t)) }), r = t.extend({}, this.options, n[i]), "function" == typeof r.stagePadding && (r.stagePadding = r.stagePadding()), delete r.responsive, r.responsiveClass && this.$element.attr("class", this.$element.attr("class").replace(new RegExp("(" + this.options.responsiveClass + "-)\\S+\\s", "g"), "$1" + i))) : r = t.extend({}, this.options), this.trigger("change", { property: { name: "settings", value: r } }), this._breakpoint = i, this.settings = r, this.invalidate("settings"), this.trigger("changed", { property: { name: "settings", value: this.settings } }) }, r.prototype.optionsLogic = function() { this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1) }, r.prototype.prepare = function(e) { var n = this.trigger("prepare", { content: e }); return n.data || (n.data = t("<" + this.settings.itemElement + "/>").addClass(this.options.itemClass).append(e)), this.trigger("prepared", { content: n.data }), n.data }, r.prototype.update = function() { for (var e = 0, n = this._pipe.length, i = t.proxy(function(t) { return this[t] }, this._invalidated), r = {}; e < n;)(this._invalidated.all || t.grep(this._pipe[e].filter, i).length > 0) && this._pipe[e].run(r), e++;
            this._invalidated = {}, !this.is("valid") && this.enter("valid") }, r.prototype.width = function(t) { switch (t = t || r.Width.Default) {
                case r.Width.Inner:
                case r.Width.Outer:
                    return this._width;
                default:
                    return this._width - 2 * this.settings.stagePadding + this.settings.margin } }, r.prototype.refresh = function() { this.enter("refreshing"), this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$element.addClass(this.options.refreshClass), this.update(), this.$element.removeClass(this.options.refreshClass), this.leave("refreshing"), this.trigger("refreshed") }, r.prototype.onThrottledResize = function() { e.clearTimeout(this.resizeTimer), this.resizeTimer = e.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate) }, r.prototype.onResize = function() { return !!this._items.length && (this._width !== this.$element.width() && (!!this.isVisible() && (this.enter("resizing"), this.trigger("resize").isDefaultPrevented() ? (this.leave("resizing"), !1) : (this.invalidate("width"), this.refresh(), this.leave("resizing"), void this.trigger("resized"))))) }, r.prototype.registerEventHandlers = function() { t.support.transition && this.$stage.on(t.support.transition.end + ".owl.core", t.proxy(this.onTransitionEnd, this)), !1 !== this.settings.responsive && this.on(e, "resize", this._handlers.onThrottledResize), this.settings.mouseDrag && (this.$element.addClass(this.options.dragClass), this.$stage.on("mousedown.owl.core", t.proxy(this.onDragStart, this)), this.$stage.on("dragstart.owl.core selectstart.owl.core", function() { return !1 })), this.settings.touchDrag && (this.$stage.on("touchstart.owl.core", t.proxy(this.onDragStart, this)), this.$stage.on("touchcancel.owl.core", t.proxy(this.onDragEnd, this))) }, r.prototype.onDragStart = function(e) { var i = null;
            3 !== e.which && (t.support.transform ? (i = this.$stage.css("transform").replace(/.*\(|\)| /g, "").split(","), i = { x: i[16 === i.length ? 12 : 4], y: i[16 === i.length ? 13 : 5] }) : (i = this.$stage.position(), i = { x: this.settings.rtl ? i.left + this.$stage.width() - this.width() + this.settings.margin : i.left, y: i.top }), this.is("animating") && (t.support.transform ? this.animate(i.x) : this.$stage.stop(), this.invalidate("position")), this.$element.toggleClass(this.options.grabClass, "mousedown" === e.type), this.speed(0), this._drag.time = (new Date).getTime(), this._drag.target = t(e.target), this._drag.stage.start = i, this._drag.stage.current = i, this._drag.pointer = this.pointer(e), t(n).on("mouseup.owl.core touchend.owl.core", t.proxy(this.onDragEnd, this)), t(n).one("mousemove.owl.core touchmove.owl.core", t.proxy(function(e) { var i = this.difference(this._drag.pointer, this.pointer(e));
                t(n).on("mousemove.owl.core touchmove.owl.core", t.proxy(this.onDragMove, this)), Math.abs(i.x) < Math.abs(i.y) && this.is("valid") || (e.preventDefault(), this.enter("dragging"), this.trigger("drag")) }, this))) }, r.prototype.onDragMove = function(t) { var e = null,
                n = null,
                i = null,
                r = this.difference(this._drag.pointer, this.pointer(t)),
                s = this.difference(this._drag.stage.start, r);
            this.is("dragging") && (t.preventDefault(), this.settings.loop ? (e = this.coordinates(this.minimum()), n = this.coordinates(this.maximum() + 1) - e, s.x = ((s.x - e) % n + n) % n + e) : (e = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum()), n = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum()), i = this.settings.pullDrag ? -1 * r.x / 5 : 0, s.x = Math.max(Math.min(s.x, e + i), n + i)), this._drag.stage.current = s, this.animate(s.x)) }, r.prototype.onDragEnd = function(e) { var i = this.difference(this._drag.pointer, this.pointer(e)),
                r = this._drag.stage.current,
                s = i.x > 0 ^ this.settings.rtl ? "left" : "right";
            t(n).off(".owl.core"), this.$element.removeClass(this.options.grabClass), (0 !== i.x && this.is("dragging") || !this.is("valid")) && (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(this.closest(r.x, 0 !== i.x ? s : this._drag.direction)), this.invalidate("position"), this.update(), this._drag.direction = s, (Math.abs(i.x) > 3 || (new Date).getTime() - this._drag.time > 300) && this._drag.target.one("click.owl.core", function() { return !1 })), this.is("dragging") && (this.leave("dragging"), this.trigger("dragged")) }, r.prototype.closest = function(e, n) { var i = -1,
                r = this.width(),
                s = this.coordinates(); return this.settings.freeDrag || t.each(s, t.proxy(function(t, o) { return "left" === n && e > o - 30 && e < o + 30 ? i = t : "right" === n && e > o - r - 30 && e < o - r + 30 ? i = t + 1 : this.op(e, "<", o) && this.op(e, ">", void 0 !== s[t + 1] ? s[t + 1] : o - r) && (i = "left" === n ? t + 1 : t), -1 === i }, this)), this.settings.loop || (this.op(e, ">", s[this.minimum()]) ? i = e = this.minimum() : this.op(e, "<", s[this.maximum()]) && (i = e = this.maximum())), i }, r.prototype.animate = function(e) { var n = this.speed() > 0;
            this.is("animating") && this.onTransitionEnd(), n && (this.enter("animating"), this.trigger("translate")), t.support.transform3d && t.support.transition ? this.$stage.css({ transform: "translate3d(" + e + "px,0px,0px)", transition: this.speed() / 1e3 + "s" + (this.settings.slideTransition ? " " + this.settings.slideTransition : "") }) : n ? this.$stage.animate({ left: e + "px" }, this.speed(), this.settings.fallbackEasing, t.proxy(this.onTransitionEnd, this)) : this.$stage.css({ left: e + "px" }) }, r.prototype.is = function(t) { return this._states.current[t] && this._states.current[t] > 0 }, r.prototype.current = function(t) {
            if (void 0 === t) return this._current;
            if (0 !== this._items.length) {
                if (t = this.normalize(t), this._current !== t) {
                    var e = this.trigger("change", {
                        property: {
                            name: "position",
                            value: t
                        }
                    });
                    void 0 !== e.data && (t = this.normalize(e.data)), this._current = t, this.invalidate("position"), this.trigger("changed", { property: { name: "position", value: this._current } })
                }
                return this._current
            }
        }, r.prototype.invalidate = function(e) { return "string" === t.type(e) && (this._invalidated[e] = !0, this.is("valid") && this.leave("valid")), t.map(this._invalidated, function(t, e) { return e }) }, r.prototype.reset = function(t) { void 0 !== (t = this.normalize(t)) && (this._speed = 0, this._current = t, this.suppress(["translate", "translated"]), this.animate(this.coordinates(t)), this.release(["translate", "translated"])) }, r.prototype.normalize = function(t, e) { var n = this._items.length,
                i = e ? 0 : this._clones.length; return !this.isNumeric(t) || n < 1 ? t = void 0 : (t < 0 || t >= n + i) && (t = ((t - i / 2) % n + n) % n + i / 2), t }, r.prototype.relative = function(t) { return t -= this._clones.length / 2, this.normalize(t, !0) }, r.prototype.maximum = function(t) { var e, n, i, r = this.settings,
                s = this._coordinates.length; if (r.loop) s = this._clones.length / 2 + this._items.length - 1;
            else if (r.autoWidth || r.merge) { if (e = this._items.length)
                    for (n = this._items[--e].width(), i = this.$element.width(); e-- && !((n += this._items[e].width() + this.settings.margin) > i););
                s = e + 1 } else s = r.center ? this._items.length - 1 : this._items.length - r.items; return t && (s -= this._clones.length / 2), Math.max(s, 0) }, r.prototype.minimum = function(t) { return t ? 0 : this._clones.length / 2 }, r.prototype.items = function(t) { return void 0 === t ? this._items.slice() : (t = this.normalize(t, !0), this._items[t]) }, r.prototype.mergers = function(t) { return void 0 === t ? this._mergers.slice() : (t = this.normalize(t, !0), this._mergers[t]) }, r.prototype.clones = function(e) { var n = this._clones.length / 2,
                i = n + this._items.length,
                r = function(t) { return t % 2 == 0 ? i + t / 2 : n - (t + 1) / 2 }; return void 0 === e ? t.map(this._clones, function(t, e) { return r(e) }) : t.map(this._clones, function(t, n) { return t === e ? r(n) : null }) }, r.prototype.speed = function(t) { return void 0 !== t && (this._speed = t), this._speed }, r.prototype.coordinates = function(e) { var n, i = 1,
                r = e - 1; return void 0 === e ? t.map(this._coordinates, t.proxy(function(t, e) { return this.coordinates(e) }, this)) : (this.settings.center ? (this.settings.rtl && (i = -1, r = e + 1), n = this._coordinates[e], n += (this.width() - n + (this._coordinates[r] || 0)) / 2 * i) : n = this._coordinates[r] || 0, n = Math.ceil(n)) }, r.prototype.duration = function(t, e, n) { return 0 === n ? 0 : Math.min(Math.max(Math.abs(e - t), 1), 6) * Math.abs(n || this.settings.smartSpeed) }, r.prototype.to = function(t, e) { var n = this.current(),
                i = null,
                r = t - this.relative(n),
                s = (r > 0) - (r < 0),
                o = this._items.length,
                a = this.minimum(),
                l = this.maximum();
            this.settings.loop ? (!this.settings.rewind && Math.abs(r) > o / 2 && (r += -1 * s * o), t = n + r, (i = ((t - a) % o + o) % o + a) !== t && i - r <= l && i - r > 0 && (n = i - r, t = i, this.reset(n))) : this.settings.rewind ? (l += 1, t = (t % l + l) % l) : t = Math.max(a, Math.min(l, t)), this.speed(this.duration(n, t, e)), this.current(t), this.isVisible() && this.update() }, r.prototype.next = function(t) { t = t || !1, this.to(this.relative(this.current()) + 1, t) }, r.prototype.prev = function(t) { t = t || !1, this.to(this.relative(this.current()) - 1, t) }, r.prototype.onTransitionEnd = function(t) { if (void 0 !== t && (t.stopPropagation(), (t.target || t.srcElement || t.originalTarget) !== this.$stage.get(0))) return !1;
            this.leave("animating"), this.trigger("translated") }, r.prototype.viewport = function() { var i; return this.options.responsiveBaseElement !== e ? i = t(this.options.responsiveBaseElement).width() : e.innerWidth ? i = e.innerWidth : n.documentElement && n.documentElement.clientWidth ? i = n.documentElement.clientWidth : console.warn("Can not detect viewport width."), i }, r.prototype.replace = function(e) { this.$stage.empty(), this._items = [], e && (e = e instanceof jQuery ? e : t(e)), this.settings.nestedItemSelector && (e = e.find("." + this.settings.nestedItemSelector)), e.filter(function() { return 1 === this.nodeType }).each(t.proxy(function(t, e) { e = this.prepare(e), this.$stage.append(e), this._items.push(e), this._mergers.push(1 * e.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1) }, this)), this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items") }, r.prototype.add = function(e, n) { var i = this.relative(this._current);
            n = void 0 === n ? this._items.length : this.normalize(n, !0), e = e instanceof jQuery ? e : t(e), this.trigger("add", { content: e, position: n }), e = this.prepare(e), 0 === this._items.length || n === this._items.length ? (0 === this._items.length && this.$stage.append(e), 0 !== this._items.length && this._items[n - 1].after(e), this._items.push(e), this._mergers.push(1 * e.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)) : (this._items[n].before(e), this._items.splice(n, 0, e), this._mergers.splice(n, 0, 1 * e.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)), this._items[i] && this.reset(this._items[i].index()), this.invalidate("items"), this.trigger("added", { content: e, position: n }) }, r.prototype.remove = function(t) { void 0 !== (t = this.normalize(t, !0)) && (this.trigger("remove", { content: this._items[t], position: t }), this._items[t].remove(), this._items.splice(t, 1), this._mergers.splice(t, 1), this.invalidate("items"), this.trigger("removed", { content: null, position: t })) }, r.prototype.preloadAutoWidthImages = function(e) { e.each(t.proxy(function(e, n) { this.enter("pre-loading"), n = t(n), t(new Image).one("load", t.proxy(function(t) { n.attr("src", t.target.src), n.css("opacity", 1), this.leave("pre-loading"), !this.is("pre-loading") && !this.is("initializing") && this.refresh() }, this)).attr("src", n.attr("src") || n.attr("data-src") || n.attr("data-src-retina")) }, this)) }, r.prototype.destroy = function() { this.$element.off(".owl.core"), this.$stage.off(".owl.core"), t(n).off(".owl.core"), !1 !== this.settings.responsive && (e.clearTimeout(this.resizeTimer), this.off(e, "resize", this._handlers.onThrottledResize)); for (var i in this._plugins) this._plugins[i].destroy();
            this.$stage.children(".cloned").remove(), this.$stage.unwrap(), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$stage.remove(), this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class", this.$element.attr("class").replace(new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"), "")).removeData("owl.carousel") }, r.prototype.op = function(t, e, n) { var i = this.settings.rtl; switch (e) {
                case "<":
                    return i ? t > n : t < n;
                case ">":
                    return i ? t < n : t > n;
                case ">=":
                    return i ? t <= n : t >= n;
                case "<=":
                    return i ? t >= n : t <= n } }, r.prototype.on = function(t, e, n, i) { t.addEventListener ? t.addEventListener(e, n, i) : t.attachEvent && t.attachEvent("on" + e, n) }, r.prototype.off = function(t, e, n, i) { t.removeEventListener ? t.removeEventListener(e, n, i) : t.detachEvent && t.detachEvent("on" + e, n) }, r.prototype.trigger = function(e, n, i, s, o) { var a = { item: { count: this._items.length, index: this.current() } },
                l = t.camelCase(t.grep(["on", e, i], function(t) { return t }).join("-").toLowerCase()),
                u = t.Event([e, "owl", i || "carousel"].join(".").toLowerCase(), t.extend({ relatedTarget: this }, a, n)); return this._supress[e] || (t.each(this._plugins, function(t, e) { e.onTrigger && e.onTrigger(u) }), this.register({ type: r.Type.Event, name: e }), this.$element.trigger(u), this.settings && "function" == typeof this.settings[l] && this.settings[l].call(this, u)), u }, r.prototype.enter = function(e) { t.each([e].concat(this._states.tags[e] || []), t.proxy(function(t, e) { void 0 === this._states.current[e] && (this._states.current[e] = 0), this._states.current[e]++ }, this)) }, r.prototype.leave = function(e) { t.each([e].concat(this._states.tags[e] || []), t.proxy(function(t, e) { this._states.current[e]-- }, this)) }, r.prototype.register = function(e) { if (e.type === r.Type.Event) { if (t.event.special[e.name] || (t.event.special[e.name] = {}), !t.event.special[e.name].owl) { var n = t.event.special[e.name]._default;
                    t.event.special[e.name]._default = function(t) { return !n || !n.apply || t.namespace && -1 !== t.namespace.indexOf("owl") ? t.namespace && t.namespace.indexOf("owl") > -1 : n.apply(this, arguments) }, t.event.special[e.name].owl = !0 } } else e.type === r.Type.State && (this._states.tags[e.name] ? this._states.tags[e.name] = this._states.tags[e.name].concat(e.tags) : this._states.tags[e.name] = e.tags, this._states.tags[e.name] = t.grep(this._states.tags[e.name], t.proxy(function(n, i) { return t.inArray(n, this._states.tags[e.name]) === i }, this))) }, r.prototype.suppress = function(e) { t.each(e, t.proxy(function(t, e) { this._supress[e] = !0 }, this)) }, r.prototype.release = function(e) { t.each(e, t.proxy(function(t, e) { delete this._supress[e] }, this)) }, r.prototype.pointer = function(t) { var n = { x: null, y: null }; return t = t.originalEvent || t || e.event, t = t.touches && t.touches.length ? t.touches[0] : t.changedTouches && t.changedTouches.length ? t.changedTouches[0] : t, t.pageX ? (n.x = t.pageX, n.y = t.pageY) : (n.x = t.clientX, n.y = t.clientY), n }, r.prototype.isNumeric = function(t) { return !isNaN(parseFloat(t)) }, r.prototype.difference = function(t, e) { return { x: t.x - e.x, y: t.y - e.y } }, t.fn.owlCarousel = function(e) { var n = Array.prototype.slice.call(arguments, 1); return this.each(function() { var i = t(this),
                    s = i.data("owl.carousel");
                s || (s = new r(this, "object" == typeof e && e), i.data("owl.carousel", s), t.each(["next", "prev", "to", "destroy", "refresh", "replace", "add", "remove"], function(e, n) { s.register({ type: r.Type.Event, name: n }), s.$element.on(n + ".owl.carousel.core", t.proxy(function(t) { t.namespace && t.relatedTarget !== this && (this.suppress([n]), s[n].apply(this, [].slice.call(arguments, 1)), this.release([n])) }, s)) })), "string" == typeof e && "_" !== e.charAt(0) && s[e].apply(s, n) }) }, t.fn.owlCarousel.Constructor = r
    }(window.Zepto || window.jQuery, window, document),
    function(t, e, n, i) { var r = function(e) { this._core = e, this._interval = null, this._visible = null, this._handlers = { "initialized.owl.carousel": t.proxy(function(t) { t.namespace && this._core.settings.autoRefresh && this.watch() }, this) }, this._core.options = t.extend({}, r.Defaults, this._core.options), this._core.$element.on(this._handlers) };
        r.Defaults = { autoRefresh: !0, autoRefreshInterval: 500 }, r.prototype.watch = function() { this._interval || (this._visible = this._core.isVisible(), this._interval = e.setInterval(t.proxy(this.refresh, this), this._core.settings.autoRefreshInterval)) }, r.prototype.refresh = function() { this._core.isVisible() !== this._visible && (this._visible = !this._visible, this._core.$element.toggleClass("owl-hidden", !this._visible), this._visible && this._core.invalidate("width") && this._core.refresh()) }, r.prototype.destroy = function() { var t, n;
            e.clearInterval(this._interval); for (t in this._handlers) this._core.$element.off(t, this._handlers[t]); for (n in Object.getOwnPropertyNames(this)) "function" != typeof this[n] && (this[n] = null) }, t.fn.owlCarousel.Constructor.Plugins.AutoRefresh = r }(window.Zepto || window.jQuery, window, document),
    function(t, e, n, i) { var r = function(e) { this._core = e, this._loaded = [], this._handlers = { "initialized.owl.carousel change.owl.carousel resized.owl.carousel": t.proxy(function(e) { if (e.namespace && this._core.settings && this._core.settings.lazyLoad && (e.property && "position" == e.property.name || "initialized" == e.type)) { var n = this._core.settings,
                            i = n.center && Math.ceil(n.items / 2) || n.items,
                            r = n.center && -1 * i || 0,
                            s = (e.property && void 0 !== e.property.value ? e.property.value : this._core.current()) + r,
                            o = this._core.clones().length,
                            a = t.proxy(function(t, e) { this.load(e) }, this); for (n.lazyLoadEager > 0 && (i += n.lazyLoadEager, n.loop && (s -= n.lazyLoadEager, i++)); r++ < i;) this.load(o / 2 + this._core.relative(s)), o && t.each(this._core.clones(this._core.relative(s)), a), s++ } }, this) }, this._core.options = t.extend({}, r.Defaults, this._core.options), this._core.$element.on(this._handlers) };
        r.Defaults = { lazyLoad: !1, lazyLoadEager: 0 }, r.prototype.load = function(n) { var i = this._core.$stage.children().eq(n),
                r = i && i.find(".owl-lazy");!r || t.inArray(i.get(0), this._loaded) > -1 || (r.each(t.proxy(function(n, i) { var r, s = t(i),
                    o = e.devicePixelRatio > 1 && s.attr("data-src-retina") || s.attr("data-src") || s.attr("data-srcset");
                this._core.trigger("load", { element: s, url: o }, "lazy"), s.is("img") ? s.one("load.owl.lazy", t.proxy(function() { s.css("opacity", 1), this._core.trigger("loaded", { element: s, url: o }, "lazy") }, this)).attr("src", o) : s.is("source") ? s.one("load.owl.lazy", t.proxy(function() { this._core.trigger("loaded", { element: s, url: o }, "lazy") }, this)).attr("srcset", o) : (r = new Image, r.onload = t.proxy(function() { s.css({ "background-image": 'url("' + o + '")', opacity: "1" }), this._core.trigger("loaded", { element: s, url: o }, "lazy") }, this), r.src = o) }, this)), this._loaded.push(i.get(0))) }, r.prototype.destroy = function() { var t, e; for (t in this.handlers) this._core.$element.off(t, this.handlers[t]); for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null) }, t.fn.owlCarousel.Constructor.Plugins.Lazy = r }(window.Zepto || window.jQuery, window, document),
    function(t, e, n, i) { var r = function(n) { this._core = n, this._previousHeight = null, this._handlers = { "initialized.owl.carousel refreshed.owl.carousel": t.proxy(function(t) { t.namespace && this._core.settings.autoHeight && this.update() }, this), "changed.owl.carousel": t.proxy(function(t) { t.namespace && this._core.settings.autoHeight && "position" === t.property.name && this.update() }, this), "loaded.owl.lazy": t.proxy(function(t) { t.namespace && this._core.settings.autoHeight && t.element.closest("." + this._core.settings.itemClass).index() === this._core.current() && this.update() }, this) }, this._core.options = t.extend({}, r.Defaults, this._core.options), this._core.$element.on(this._handlers), this._intervalId = null; var i = this;
            t(e).on("load", function() { i._core.settings.autoHeight && i.update() }), t(e).resize(function() { i._core.settings.autoHeight && (null != i._intervalId && clearTimeout(i._intervalId), i._intervalId = setTimeout(function() { i.update() }, 250)) }) };
        r.Defaults = { autoHeight: !1, autoHeightClass: "owl-height" }, r.prototype.update = function() { var e = this._core._current,
                n = e + this._core.settings.items,
                i = this._core.settings.lazyLoad,
                r = this._core.$stage.children().toArray().slice(e, n),
                s = [],
                o = 0;
            t.each(r, function(e, n) { s.push(t(n).height()) }), o = Math.max.apply(null, s), o <= 1 && i && this._previousHeight && (o = this._previousHeight), this._previousHeight = o, this._core.$stage.parent().height(o).addClass(this._core.settings.autoHeightClass) }, r.prototype.destroy = function() { var t, e; for (t in this._handlers) this._core.$element.off(t, this._handlers[t]); for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null) }, t.fn.owlCarousel.Constructor.Plugins.AutoHeight = r }(window.Zepto || window.jQuery, window, document),
    function(t, e, n, i) { var r = function(e) { this._core = e, this._videos = {}, this._playing = null, this._handlers = { "initialized.owl.carousel": t.proxy(function(t) { t.namespace && this._core.register({ type: "state", name: "playing", tags: ["interacting"] }) }, this), "resize.owl.carousel": t.proxy(function(t) { t.namespace && this._core.settings.video && this.isInFullScreen() && t.preventDefault() }, this), "refreshed.owl.carousel": t.proxy(function(t) { t.namespace && this._core.is("resizing") && this._core.$stage.find(".cloned .owl-video-frame").remove() }, this), "changed.owl.carousel": t.proxy(function(t) { t.namespace && "position" === t.property.name && this._playing && this.stop() }, this), "prepared.owl.carousel": t.proxy(function(e) { if (e.namespace) { var n = t(e.content).find(".owl-video");
                        n.length && (n.css("display", "none"), this.fetch(n, t(e.content))) } }, this) }, this._core.options = t.extend({}, r.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", t.proxy(function(t) { this.play(t) }, this)) };
        r.Defaults = { video: !1, videoHeight: !1, videoWidth: !1 }, r.prototype.fetch = function(t, e) { var n = function() { return t.attr("data-vimeo-id") ? "vimeo" : t.attr("data-vzaar-id") ? "vzaar" : "youtube" }(),
                i = t.attr("data-vimeo-id") || t.attr("data-youtube-id") || t.attr("data-vzaar-id"),
                r = t.attr("data-width") || this._core.settings.videoWidth,
                s = t.attr("data-height") || this._core.settings.videoHeight,
                o = t.attr("href"); if (!o) throw new Error("Missing video URL."); if (i = o.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com|be\-nocookie\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/), i[3].indexOf("youtu") > -1) n = "youtube";
            else if (i[3].indexOf("vimeo") > -1) n = "vimeo";
            else { if (!(i[3].indexOf("vzaar") > -1)) throw new Error("Video URL not supported.");
                n = "vzaar" }
            i = i[6], this._videos[o] = { type: n, id: i, width: r, height: s }, e.attr("data-video", o), this.thumbnail(t, this._videos[o]) }, r.prototype.thumbnail = function(e, n) { var i, r, s, o = n.width && n.height ? "width:" + n.width + "px;height:" + n.height + "px;" : "",
                a = e.find("img"),
                l = "src",
                u = "",
                c = this._core.settings,
                h = function(n) { r = '<div class="owl-video-play-icon"></div>', i = c.lazyLoad ? t("<div/>", { class: "owl-video-tn " + u, srcType: n }) : t("<div/>", { class: "owl-video-tn", style: "opacity:1;background-image:url(" + n + ")" }), e.after(i), e.after(r) }; if (e.wrap(t("<div/>", { class: "owl-video-wrapper", style: o })), this._core.settings.lazyLoad && (l = "data-src", u = "owl-lazy"), a.length) return h(a.attr(l)), a.remove(), !1; "youtube" === n.type ? (s = "//img.youtube.com/vi/" + n.id + "/hqdefault.jpg", h(s)) : "vimeo" === n.type ? t.ajax({ type: "GET", url: "//vimeo.com/api/v2/video/" + n.id + ".json", jsonp: "callback", dataType: "jsonp", success: function(t) { s = t[0].thumbnail_large, h(s) } }) : "vzaar" === n.type && t.ajax({ type: "GET", url: "//vzaar.com/api/videos/" + n.id + ".json", jsonp: "callback", dataType: "jsonp", success: function(t) { s = t.framegrab_url, h(s) } }) }, r.prototype.stop = function() { this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null, this._core.leave("playing"), this._core.trigger("stopped", null, "video") }, r.prototype.play = function(e) { var n, i = t(e.target),
                r = i.closest("." + this._core.settings.itemClass),
                s = this._videos[r.attr("data-video")],
                o = s.width || "100%",
                a = s.height || this._core.$stage.height();
            this._playing || (this._core.enter("playing"), this._core.trigger("play", null, "video"), r = this._core.items(this._core.relative(r.index())), this._core.reset(r.index()), n = t('<iframe frameborder="0" allowfullscreen mozallowfullscreen webkitAllowFullScreen ></iframe>'), n.attr("height", a), n.attr("width", o), "youtube" === s.type ? n.attr("src", "//www.youtube.com/embed/" + s.id + "?autoplay=1&rel=0&v=" + s.id) : "vimeo" === s.type ? n.attr("src", "//player.vimeo.com/video/" + s.id + "?autoplay=1") : "vzaar" === s.type && n.attr("src", "//view.vzaar.com/" + s.id + "/player?autoplay=true"), t(n).wrap('<div class="owl-video-frame" />').insertAfter(r.find(".owl-video")), this._playing = r.addClass("owl-video-playing")) }, r.prototype.isInFullScreen = function() { var e = n.fullscreenElement || n.mozFullScreenElement || n.webkitFullscreenElement; return e && t(e).parent().hasClass("owl-video-frame") }, r.prototype.destroy = function() { var t, e;
            this._core.$element.off("click.owl.video"); for (t in this._handlers) this._core.$element.off(t, this._handlers[t]); for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null) }, t.fn.owlCarousel.Constructor.Plugins.Video = r }(window.Zepto || window.jQuery, window, document),
    function(t, e, n, i) { var r = function(e) { this.core = e, this.core.options = t.extend({}, r.Defaults, this.core.options), this.swapping = !0, this.previous = void 0, this.next = void 0, this.handlers = { "change.owl.carousel": t.proxy(function(t) { t.namespace && "position" == t.property.name && (this.previous = this.core.current(), this.next = t.property.value) }, this), "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": t.proxy(function(t) { t.namespace && (this.swapping = "translated" == t.type) }, this), "translate.owl.carousel": t.proxy(function(t) { t.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap() }, this) }, this.core.$element.on(this.handlers) };
        r.Defaults = { animateOut: !1, animateIn: !1 }, r.prototype.swap = function() { if (1 === this.core.settings.items && t.support.animation && t.support.transition) { this.core.speed(0); var e, n = t.proxy(this.clear, this),
                    i = this.core.$stage.children().eq(this.previous),
                    r = this.core.$stage.children().eq(this.next),
                    s = this.core.settings.animateIn,
                    o = this.core.settings.animateOut;
                this.core.current() !== this.previous && (o && (e = this.core.coordinates(this.previous) - this.core.coordinates(this.next), i.one(t.support.animation.end, n).css({ left: e + "px" }).addClass("animated owl-animated-out").addClass(o)), s && r.one(t.support.animation.end, n).addClass("animated owl-animated-in").addClass(s)) } }, r.prototype.clear = function(e) { t(e.target).css({ left: "" }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.onTransitionEnd() }, r.prototype.destroy = function() { var t, e; for (t in this.handlers) this.core.$element.off(t, this.handlers[t]); for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null) }, t.fn.owlCarousel.Constructor.Plugins.Animate = r }(window.Zepto || window.jQuery, window, document),
    function(t, e, n, i) { var r = function(e) { this._core = e, this._call = null, this._time = 0, this._timeout = 0, this._paused = !0, this._handlers = { "changed.owl.carousel": t.proxy(function(t) { t.namespace && "settings" === t.property.name ? this._core.settings.autoplay ? this.play() : this.stop() : t.namespace && "position" === t.property.name && this._paused && (this._time = 0) }, this), "initialized.owl.carousel": t.proxy(function(t) { t.namespace && this._core.settings.autoplay && this.play() }, this), "play.owl.autoplay": t.proxy(function(t, e, n) { t.namespace && this.play(e, n) }, this), "stop.owl.autoplay": t.proxy(function(t) { t.namespace && this.stop() }, this), "mouseover.owl.autoplay": t.proxy(function() { this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause() }, this), "mouseleave.owl.autoplay": t.proxy(function() { this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.play() }, this), "touchstart.owl.core": t.proxy(function() { this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause() }, this), "touchend.owl.core": t.proxy(function() { this._core.settings.autoplayHoverPause && this.play() }, this) }, this._core.$element.on(this._handlers), this._core.options = t.extend({}, r.Defaults, this._core.options) };
        r.Defaults = { autoplay: !1, autoplayTimeout: 5e3, autoplayHoverPause: !1, autoplaySpeed: !1 }, r.prototype._next = function(i) { this._call = e.setTimeout(t.proxy(this._next, this, i), this._timeout * (Math.round(this.read() / this._timeout) + 1) - this.read()), this._core.is("interacting") || n.hidden || this._core.next(i || this._core.settings.autoplaySpeed) }, r.prototype.read = function() { return (new Date).getTime() - this._time }, r.prototype.play = function(n, i) { var r;
            this._core.is("rotating") || this._core.enter("rotating"), n = n || this._core.settings.autoplayTimeout, r = Math.min(this._time % (this._timeout || n), n), this._paused ? (this._time = this.read(), this._paused = !1) : e.clearTimeout(this._call), this._time += this.read() % n - r, this._timeout = n, this._call = e.setTimeout(t.proxy(this._next, this, i), n - r) }, r.prototype.stop = function() { this._core.is("rotating") && (this._time = 0, this._paused = !0, e.clearTimeout(this._call), this._core.leave("rotating")) }, r.prototype.pause = function() { this._core.is("rotating") && !this._paused && (this._time = this.read(), this._paused = !0, e.clearTimeout(this._call)) }, r.prototype.destroy = function() { var t, e;
            this.stop(); for (t in this._handlers) this._core.$element.off(t, this._handlers[t]); for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null) }, t.fn.owlCarousel.Constructor.Plugins.autoplay = r }(window.Zepto || window.jQuery, window, document),
    function(t, e, n, i) { "use strict"; var r = function(e) { this._core = e, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = { next: this._core.next, prev: this._core.prev, to: this._core.to }, this._handlers = { "prepared.owl.carousel": t.proxy(function(e) { e.namespace && this._core.settings.dotsData && this._templates.push('<div class="' + this._core.settings.dotClass + '">' + t(e.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot") + "</div>") }, this), "added.owl.carousel": t.proxy(function(t) { t.namespace && this._core.settings.dotsData && this._templates.splice(t.position, 0, this._templates.pop()) }, this), "remove.owl.carousel": t.proxy(function(t) { t.namespace && this._core.settings.dotsData && this._templates.splice(t.position, 1) }, this), "changed.owl.carousel": t.proxy(function(t) { t.namespace && "position" == t.property.name && this.draw() }, this), "initialized.owl.carousel": t.proxy(function(t) { t.namespace && !this._initialized && (this._core.trigger("initialize", null, "navigation"), this.initialize(), this.update(), this.draw(), this._initialized = !0, this._core.trigger("initialized", null, "navigation")) }, this), "refreshed.owl.carousel": t.proxy(function(t) { t.namespace && this._initialized && (this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation")) }, this) }, this._core.options = t.extend({}, r.Defaults, this._core.options), this.$element.on(this._handlers) };
        r.Defaults = { nav: !1, navText: ['<span aria-label="Previous">&#x2039;</span>', '<span aria-label="Next">&#x203a;</span>'], navSpeed: !1, navElement: 'button type="button" role="presentation"', navContainer: !1, navContainerClass: "owl-nav", navClass: ["owl-prev", "owl-next"], slideBy: 1, dotClass: "owl-dot", dotsClass: "owl-dots", dots: !0, dotsEach: !1, dotsData: !1, dotsSpeed: !1, dotsContainer: !1 }, r.prototype.initialize = function() { var e, n = this._core.settings;
            this._controls.$relative = (n.navContainer ? t(n.navContainer) : t("<div>").addClass(n.navContainerClass).appendTo(this.$element)).addClass("disabled"), this._controls.$previous = t("<" + n.navElement + ">").addClass(n.navClass[0]).html(n.navText[0]).prependTo(this._controls.$relative).on("click", t.proxy(function(t) { this.prev(n.navSpeed) }, this)), this._controls.$next = t("<" + n.navElement + ">").addClass(n.navClass[1]).html(n.navText[1]).appendTo(this._controls.$relative).on("click", t.proxy(function(t) { this.next(n.navSpeed) }, this)), n.dotsData || (this._templates = [t('<button role="button">').addClass(n.dotClass).append(t("<span>")).prop("outerHTML")]), this._controls.$absolute = (n.dotsContainer ? t(n.dotsContainer) : t("<div>").addClass(n.dotsClass).appendTo(this.$element)).addClass("disabled"), this._controls.$absolute.on("click", "button", t.proxy(function(e) { var i = t(e.target).parent().is(this._controls.$absolute) ? t(e.target).index() : t(e.target).parent().index();
                e.preventDefault(), this.to(i, n.dotsSpeed) }, this)); for (e in this._overrides) this._core[e] = t.proxy(this[e], this) }, r.prototype.destroy = function() { var t, e, n, i, r;
            r = this._core.settings; for (t in this._handlers) this.$element.off(t, this._handlers[t]); for (e in this._controls) "$relative" === e && r.navContainer ? this._controls[e].html("") : this._controls[e].remove(); for (i in this.overides) this._core[i] = this._overrides[i]; for (n in Object.getOwnPropertyNames(this)) "function" != typeof this[n] && (this[n] = null) }, r.prototype.update = function() { var t, e, n, i = this._core.clones().length / 2,
                r = i + this._core.items().length,
                s = this._core.maximum(!0),
                o = this._core.settings,
                a = o.center || o.autoWidth || o.dotsData ? 1 : o.dotsEach || o.items; if ("page" !== o.slideBy && (o.slideBy = Math.min(o.slideBy, o.items)), o.dots || "page" == o.slideBy)
                for (this._pages = [], t = i, e = 0, n = 0; t < r; t++) { if (e >= a || 0 === e) { if (this._pages.push({ start: Math.min(s, t - i), end: t - i + a - 1 }), Math.min(s, t - i) === s) break;
                        e = 0, ++n }
                    e += this._core.mergers(this._core.relative(t)) } }, r.prototype.draw = function() { var e, n = this._core.settings,
                i = this._core.items().length <= n.items,
                r = this._core.relative(this._core.current()),
                s = n.loop || n.rewind;
            this._controls.$relative.toggleClass("disabled", !n.nav || i), n.nav && (this._controls.$previous.toggleClass("disabled", !s && r <= this._core.minimum(!0)), this._controls.$next.toggleClass("disabled", !s && r >= this._core.maximum(!0))), this._controls.$absolute.toggleClass("disabled", !n.dots || i), n.dots && (e = this._pages.length - this._controls.$absolute.children().length, n.dotsData && 0 !== e ? this._controls.$absolute.html(this._templates.join("")) : e > 0 ? this._controls.$absolute.append(new Array(e + 1).join(this._templates[0])) : e < 0 && this._controls.$absolute.children().slice(e).remove(), this._controls.$absolute.find(".active").removeClass("active"), this._controls.$absolute.children().eq(t.inArray(this.current(), this._pages)).addClass("active")) }, r.prototype.onTrigger = function(e) { var n = this._core.settings;
            e.page = { index: t.inArray(this.current(), this._pages), count: this._pages.length, size: n && (n.center || n.autoWidth || n.dotsData ? 1 : n.dotsEach || n.items) } }, r.prototype.current = function() { var e = this._core.relative(this._core.current()); return t.grep(this._pages, t.proxy(function(t, n) { return t.start <= e && t.end >= e }, this)).pop() }, r.prototype.getPosition = function(e) { var n, i, r = this._core.settings; return "page" == r.slideBy ? (n = t.inArray(this.current(), this._pages), i = this._pages.length, e ? ++n : --n, n = this._pages[(n % i + i) % i].start) : (n = this._core.relative(this._core.current()), i = this._core.items().length, e ? n += r.slideBy : n -= r.slideBy), n }, r.prototype.next = function(e) { t.proxy(this._overrides.to, this._core)(this.getPosition(!0), e) }, r.prototype.prev = function(e) { t.proxy(this._overrides.to, this._core)(this.getPosition(!1), e) }, r.prototype.to = function(e, n, i) { var r;!i && this._pages.length ? (r = this._pages.length, t.proxy(this._overrides.to, this._core)(this._pages[(e % r + r) % r].start, n)) : t.proxy(this._overrides.to, this._core)(e, n) }, t.fn.owlCarousel.Constructor.Plugins.Navigation = r }(window.Zepto || window.jQuery, window, document),
    function(t, e, n, i) { "use strict"; var r = function(n) { this._core = n, this._hashes = {}, this.$element = this._core.$element, this._handlers = { "initialized.owl.carousel": t.proxy(function(n) { n.namespace && "URLHash" === this._core.settings.startPosition && t(e).trigger("hashchange.owl.navigation") }, this), "prepared.owl.carousel": t.proxy(function(e) { if (e.namespace) { var n = t(e.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash"); if (!n) return;
                        this._hashes[n] = e.content } }, this), "changed.owl.carousel": t.proxy(function(n) { if (n.namespace && "position" === n.property.name) { var i = this._core.items(this._core.relative(this._core.current())),
                            r = t.map(this._hashes, function(t, e) { return t === i ? e : null }).join(); if (!r || e.location.hash.slice(1) === r) return;
                        e.location.hash = r } }, this) }, this._core.options = t.extend({}, r.Defaults, this._core.options), this.$element.on(this._handlers), t(e).on("hashchange.owl.navigation", t.proxy(function(t) { var n = e.location.hash.substring(1),
                    i = this._core.$stage.children(),
                    r = this._hashes[n] && i.index(this._hashes[n]);
                void 0 !== r && r !== this._core.current() && this._core.to(this._core.relative(r), !1, !0) }, this)) };
        r.Defaults = { URLhashListener: !1 }, r.prototype.destroy = function() { var n, i;
            t(e).off("hashchange.owl.navigation"); for (n in this._handlers) this._core.$element.off(n, this._handlers[n]); for (i in Object.getOwnPropertyNames(this)) "function" != typeof this[i] && (this[i] = null) }, t.fn.owlCarousel.Constructor.Plugins.Hash = r }(window.Zepto || window.jQuery, window, document),
    function(t, e, n, i) {
        function r(e, n) { var r = !1,
                s = e.charAt(0).toUpperCase() + e.slice(1); return t.each((e + " " + a.join(s + " ") + s).split(" "), function(t, e) { if (o[e] !== i) return r = !n || e, !1 }), r }

        function s(t) { return r(t, !0) } var o = t("<support>").get(0).style,
            a = "Webkit Moz O ms".split(" "),
            l = { transition: { end: { WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd", transition: "transitionend" } }, animation: { end: { WebkitAnimation: "webkitAnimationEnd", MozAnimation: "animationend", OAnimation: "oAnimationEnd", animation: "animationend" } } },
            u = { csstransforms: function() { return !!r("transform") }, csstransforms3d: function() { return !!r("perspective") }, csstransitions: function() { return !!r("transition") }, cssanimations: function() { return !!r("animation") } };
        u.csstransitions() && (t.support.transition = new String(s("transition")), t.support.transition.end = l.transition.end[t.support.transition]), u.cssanimations() && (t.support.animation = new String(s("animation")), t.support.animation.end = l.animation.end[t.support.animation]), u.csstransforms() && (t.support.transform = new String(s("transform")), t.support.transform3d = u.csstransforms3d()) }(window.Zepto || window.jQuery, window, document),
    /*!
     * Select2 4.0.5
     * https://select2.github.io
     *
     * Released under the MIT license
     * https://github.com/select2/select2/blob/master/LICENSE.md
     */
    function(t) { "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof module && module.exports ? module.exports = function(e, n) { return void 0 === n && (n = "undefined" != typeof window ? require("jquery") : require("jquery")(e)), t(n), n } : t(jQuery) }(function(t) {
        var e = function() {
                if (t && t.fn && t.fn.select2 && t.fn.select2.amd) var e = t.fn.select2.amd;
                var e;
                return function() {
                        if (!e || !e.requirejs) {
                            e ? n = e : e = {};
                            /**
                             * @license almond 0.3.3 Copyright jQuery Foundation and other contributors.
                             * Released under MIT license, http://github.com/requirejs/almond/LICENSE
                             */
                            var t, n, i;
                            ! function(e) {
                                function r(t, e) { return b.call(t, e) }

                                function s(t, e) { var n, i, r, s, o, a, l, u, c, h, p, d, f = e && e.split("/"),
                                        g = _.map,
                                        m = g && g["*"] || {}; if (t) { for (t = t.split("/"), o = t.length - 1, _.nodeIdCompat && T.test(t[o]) && (t[o] = t[o].replace(T, "")), "." === t[0].charAt(0) && f && (d = f.slice(0, f.length - 1), t = d.concat(t)), c = 0; c < t.length; c++)
                                            if ("." === (p = t[c])) t.splice(c, 1), c -= 1;
                                            else if (".." === p) { if (0 === c || 1 === c && ".." === t[2] || ".." === t[c - 1]) continue;
                                            c > 0 && (t.splice(c - 1, 2), c -= 2) }
                                        t = t.join("/") } if ((f || m) && g) { for (n = t.split("/"), c = n.length; c > 0; c -= 1) { if (i = n.slice(0, c).join("/"), f)
                                                for (h = f.length; h > 0; h -= 1)
                                                    if ((r = g[f.slice(0, h).join("/")]) && (r = r[i])) { s = r, a = c; break }
                                            if (s) break;!l && m && m[i] && (l = m[i], u = c) }!s && l && (s = l, a = u), s && (n.splice(0, a, s), t = n.join("/")) } return t }

                                function o(t, n) { return function() { var i = w.call(arguments, 0); return "string" != typeof i[0] && 1 === i.length && i.push(null), f.apply(e, i.concat([t, n])) } }

                                function a(t) { return function(e) { return s(e, t) } }

                                function l(t) { return function(e) { v[t] = e } }

                                function u(t) { if (r(y, t)) { var n = y[t];
                                        delete y[t], x[t] = !0, d.apply(e, n) } if (!r(v, t) && !r(x, t)) throw new Error("No " + t); return v[t] }

                                function c(t) { var e, n = t ? t.indexOf("!") : -1; return n > -1 && (e = t.substring(0, n), t = t.substring(n + 1, t.length)), [e, t] }

                                function h(t) { return t ? c(t) : [] }

                                function p(t) { return function() { return _ && _.config && _.config[t] || {} } } var d, f, g, m, v = {},
                                    y = {},
                                    _ = {},
                                    x = {},
                                    b = Object.prototype.hasOwnProperty,
                                    w = [].slice,
                                    T = /\.js$/;
                                g = function(t, e) { var n, i = c(t),
                                        r = i[0],
                                        o = e[1]; return t = i[1], r && (r = s(r, o), n = u(r)), r ? t = n && n.normalize ? n.normalize(t, a(o)) : s(t, o) : (t = s(t, o), i = c(t), r = i[0], t = i[1], r && (n = u(r))), { f: r ? r + "!" + t : t, n: t, pr: r, p: n } }, m = { require: function(t) { return o(t) }, exports: function(t) { var e = v[t]; return void 0 !== e ? e : v[t] = {} }, module: function(t) { return { id: t, uri: "", exports: v[t], config: p(t) } } }, d = function(t, n, i, s) { var a, c, p, d, f, _, b, w = [],
                                        T = typeof i; if (s = s || t, _ = h(s), "undefined" === T || "function" === T) { for (n = !n.length && i.length ? ["require", "exports", "module"] : n, f = 0; f < n.length; f += 1)
                                            if (d = g(n[f], _), "require" === (c = d.f)) w[f] = m.require(t);
                                            else if ("exports" === c) w[f] = m.exports(t), b = !0;
                                        else if ("module" === c) a = w[f] = m.module(t);
                                        else if (r(v, c) || r(y, c) || r(x, c)) w[f] = u(c);
                                        else { if (!d.p) throw new Error(t + " missing " + c);
                                            d.p.load(d.n, o(s, !0), l(c), {}), w[f] = v[c] }
                                        p = i ? i.apply(v[t], w) : void 0, t && (a && a.exports !== e && a.exports !== v[t] ? v[t] = a.exports : p === e && b || (v[t] = p)) } else t && (v[t] = i) }, t = n = f = function(t, n, i, r, s) { if ("string" == typeof t) return m[t] ? m[t](n) : u(g(t, h(n)).f); if (!t.splice) { if (_ = t, _.deps && f(_.deps, _.callback), !n) return;
                                        n.splice ? (t = n, n = i, i = null) : t = e } return n = n || function() {}, "function" == typeof i && (i = r, r = s), r ? d(e, t, n, i) : setTimeout(function() { d(e, t, n, i) }, 4), f }, f.config = function(t) { return f(t) }, t._defined = v, i = function(t, e, n) { if ("string" != typeof t) throw new Error("See almond README: incorrect module build, no module name");
                                    e.splice || (n = e, e = []), r(v, t) || r(y, t) || (y[t] = [t, e, n]) }, i.amd = { jQuery: !0 } }(), e.requirejs = t, e.require = n, e.define = i
                        }
                    }(), e.define("almond", function() {}), e.define("jquery", [], function() { var e = t || $; return null == e && console && console.error && console.error("Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page."), e }), e.define("select2/utils", ["jquery"], function(t) {
                        function e(t) { var e = t.prototype,
                                n = []; for (var i in e) { "function" == typeof e[i] && ("constructor" !== i && n.push(i)) } return n } var n = {};
                        n.Extend = function(t, e) {
                            function n() { this.constructor = t } var i = {}.hasOwnProperty; for (var r in e) i.call(e, r) && (t[r] = e[r]); return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t }, n.Decorate = function(t, n) {
                            function i() { var e = Array.prototype.unshift,
                                    i = n.prototype.constructor.length,
                                    r = t.prototype.constructor;
                                i > 0 && (e.call(arguments, t.prototype.constructor), r = n.prototype.constructor), r.apply(this, arguments) }

                            function r() { this.constructor = i } var s = e(n),
                                o = e(t);
                            n.displayName = t.displayName, i.prototype = new r; for (var a = 0; a < o.length; a++) { var l = o[a];
                                i.prototype[l] = t.prototype[l] } for (var u = 0; u < s.length; u++) { var c = s[u];
                                i.prototype[c] = function(t) { var e = function() {};
                                    t in i.prototype && (e = i.prototype[t]); var r = n.prototype[t]; return function() { return Array.prototype.unshift.call(arguments, e), r.apply(this, arguments) } }(c) } return i }; var i = function() { this.listeners = {} }; return i.prototype.on = function(t, e) { this.listeners = this.listeners || {}, t in this.listeners ? this.listeners[t].push(e) : this.listeners[t] = [e] }, i.prototype.trigger = function(t) { var e = Array.prototype.slice,
                                n = e.call(arguments, 1);
                            this.listeners = this.listeners || {}, null == n && (n = []), 0 === n.length && n.push({}), n[0]._type = t, t in this.listeners && this.invoke(this.listeners[t], e.call(arguments, 1)), "*" in this.listeners && this.invoke(this.listeners["*"], arguments) }, i.prototype.invoke = function(t, e) { for (var n = 0, i = t.length; n < i; n++) t[n].apply(this, e) }, n.Observable = i, n.generateChars = function(t) { for (var e = "", n = 0; n < t; n++) { e += Math.floor(36 * Math.random()).toString(36) } return e }, n.bind = function(t, e) { return function() { t.apply(e, arguments) } }, n._convertData = function(t) { for (var e in t) { var n = e.split("-"),
                                    i = t; if (1 !== n.length) { for (var r = 0; r < n.length; r++) { var s = n[r];
                                        s = s.substring(0, 1).toLowerCase() + s.substring(1), s in i || (i[s] = {}), r == n.length - 1 && (i[s] = t[e]), i = i[s] }
                                    delete t[e] } } return t }, n.hasScroll = function(e, n) { var i = t(n),
                                r = n.style.overflowX,
                                s = n.style.overflowY; return (r !== s || "hidden" !== s && "visible" !== s) && ("scroll" === r || "scroll" === s || (i.innerHeight() < n.scrollHeight || i.innerWidth() < n.scrollWidth)) }, n.escapeMarkup = function(t) { var e = { "\\": "&#92;", "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;", "/": "&#47;" }; return "string" != typeof t ? t : String(t).replace(/[&<>"'\/\\]/g, function(t) { return e[t] }) }, n.appendMany = function(e, n) { if ("1.7" === t.fn.jquery.substr(0, 3)) { var i = t();
                                t.map(n, function(t) { i = i.add(t) }), n = i }
                            e.append(n) }, n }), e.define("select2/results", ["jquery", "./utils"], function(t, e) {
                        function n(t, e, i) { this.$element = t, this.data = i, this.options = e, n.__super__.constructor.call(this) } return e.Extend(n, e.Observable), n.prototype.render = function() { var e = t('<ul class="select2-results__options" role="tree"></ul>'); return this.options.get("multiple") && e.attr("aria-multiselectable", "true"), this.$results = e, e }, n.prototype.clear = function() { this.$results.empty() }, n.prototype.displayMessage = function(e) { var n = this.options.get("escapeMarkup");
                            this.clear(), this.hideLoading(); var i = t('<li role="treeitem" aria-live="assertive" class="select2-results__option"></li>'),
                                r = this.options.get("translations").get(e.message);
                            i.append(n(r(e.args))), i[0].className += " select2-results__message", this.$results.append(i) }, n.prototype.hideMessages = function() { this.$results.find(".select2-results__message").remove() }, n.prototype.append = function(t) { this.hideLoading(); var e = []; if (null == t.results || 0 === t.results.length) return void(0 === this.$results.children().length && this.trigger("results:message", { message: "noResults" }));
                            t.results = this.sort(t.results); for (var n = 0; n < t.results.length; n++) { var i = t.results[n],
                                    r = this.option(i);
                                e.push(r) }
                            this.$results.append(e) }, n.prototype.position = function(t, e) { e.find(".select2-results").append(t) }, n.prototype.sort = function(t) { return this.options.get("sorter")(t) }, n.prototype.highlightFirstItem = function() { var t = this.$results.find(".select2-results__option[aria-selected]"),
                                e = t.filter("[aria-selected=true]");
                            e.length > 0 ? e.first().trigger("mouseenter") : t.first().trigger("mouseenter"), this.ensureHighlightVisible() }, n.prototype.setClasses = function() { var e = this;
                            this.data.current(function(n) { var i = t.map(n, function(t) { return t.id.toString() });
                                e.$results.find(".select2-results__option[aria-selected]").each(function() { var e = t(this),
                                        n = t.data(this, "data"),
                                        r = "" + n.id;
                                    null != n.element && n.element.selected || null == n.element && t.inArray(r, i) > -1 ? e.attr("aria-selected", "true") : e.attr("aria-selected", "false") }) }) }, n.prototype.showLoading = function(t) { this.hideLoading(); var e = this.options.get("translations").get("searching"),
                                n = { disabled: !0, loading: !0, text: e(t) },
                                i = this.option(n);
                            i.className += " loading-results", this.$results.prepend(i) }, n.prototype.hideLoading = function() { this.$results.find(".loading-results").remove() }, n.prototype.option = function(e) { var n = document.createElement("li");
                            n.className = "select2-results__option"; var i = { role: "treeitem", "aria-selected": "false" };
                            e.disabled && (delete i["aria-selected"], i["aria-disabled"] = "true"), null == e.id && delete i["aria-selected"], null != e._resultId && (n.id = e._resultId), e.title && (n.title = e.title), e.children && (i.role = "group", i["aria-label"] = e.text, delete i["aria-selected"]); for (var r in i) { var s = i[r];
                                n.setAttribute(r, s) } if (e.children) { var o = t(n),
                                    a = document.createElement("strong");
                                a.className = "select2-results__group";
                                t(a);
                                this.template(e, a); for (var l = [], u = 0; u < e.children.length; u++) { var c = e.children[u],
                                        h = this.option(c);
                                    l.push(h) } var p = t("<ul></ul>", { class: "select2-results__options select2-results__options--nested" });
                                p.append(l), o.append(a), o.append(p) } else this.template(e, n); return t.data(n, "data", e), n }, n.prototype.bind = function(e, n) { var i = this,
                                r = e.id + "-results";
                            this.$results.attr("id", r), e.on("results:all", function(t) { i.clear(), i.append(t.data), e.isOpen() && (i.setClasses(), i.highlightFirstItem()) }), e.on("results:append", function(t) { i.append(t.data), e.isOpen() && i.setClasses() }), e.on("query", function(t) { i.hideMessages(), i.showLoading(t) }), e.on("select", function() { e.isOpen() && (i.setClasses(), i.highlightFirstItem()) }), e.on("unselect", function() { e.isOpen() && (i.setClasses(), i.highlightFirstItem()) }), e.on("open", function() { i.$results.attr("aria-expanded", "true"), i.$results.attr("aria-hidden", "false"), i.setClasses(), i.ensureHighlightVisible() }), e.on("close", function() { i.$results.attr("aria-expanded", "false"), i.$results.attr("aria-hidden", "true"), i.$results.removeAttr("aria-activedescendant") }), e.on("results:toggle", function() { var t = i.getHighlightedResults();
                                0 !== t.length && t.trigger("mouseup") }), e.on("results:select", function() { var t = i.getHighlightedResults(); if (0 !== t.length) { var e = t.data("data"); "true" == t.attr("aria-selected") ? i.trigger("close", {}) : i.trigger("select", { data: e }) } }), e.on("results:previous", function() { var t = i.getHighlightedResults(),
                                    e = i.$results.find("[aria-selected]"),
                                    n = e.index(t); if (0 !== n) { var r = n - 1;
                                    0 === t.length && (r = 0); var s = e.eq(r);
                                    s.trigger("mouseenter"); var o = i.$results.offset().top,
                                        a = s.offset().top,
                                        l = i.$results.scrollTop() + (a - o);
                                    0 === r ? i.$results.scrollTop(0) : a - o < 0 && i.$results.scrollTop(l) } }), e.on("results:next", function() { var t = i.getHighlightedResults(),
                                    e = i.$results.find("[aria-selected]"),
                                    n = e.index(t),
                                    r = n + 1; if (!(r >= e.length)) { var s = e.eq(r);
                                    s.trigger("mouseenter"); var o = i.$results.offset().top + i.$results.outerHeight(!1),
                                        a = s.offset().top + s.outerHeight(!1),
                                        l = i.$results.scrollTop() + a - o;
                                    0 === r ? i.$results.scrollTop(0) : a > o && i.$results.scrollTop(l) } }), e.on("results:focus", function(t) { t.element.addClass("select2-results__option--highlighted") }), e.on("results:message", function(t) { i.displayMessage(t) }), t.fn.mousewheel && this.$results.on("mousewheel", function(t) { var e = i.$results.scrollTop(),
                                    n = i.$results.get(0).scrollHeight - e + t.deltaY,
                                    r = t.deltaY > 0 && e - t.deltaY <= 0,
                                    s = t.deltaY < 0 && n <= i.$results.height();
                                r ? (i.$results.scrollTop(0), t.preventDefault(), t.stopPropagation()) : s && (i.$results.scrollTop(i.$results.get(0).scrollHeight - i.$results.height()), t.preventDefault(), t.stopPropagation()) }), this.$results.on("mouseup", ".select2-results__option[aria-selected]", function(e) { var n = t(this),
                                    r = n.data("data"); if ("true" === n.attr("aria-selected")) return void(i.options.get("multiple") ? i.trigger("unselect", { originalEvent: e, data: r }) : i.trigger("close", {}));
                                i.trigger("select", { originalEvent: e, data: r }) }), this.$results.on("mouseenter", ".select2-results__option[aria-selected]", function(e) { var n = t(this).data("data");
                                i.getHighlightedResults().removeClass("select2-results__option--highlighted"), i.trigger("results:focus", { data: n, element: t(this) }) }) }, n.prototype.getHighlightedResults = function() { return this.$results.find(".select2-results__option--highlighted") }, n.prototype.destroy = function() { this.$results.remove() }, n.prototype.ensureHighlightVisible = function() { var t = this.getHighlightedResults(); if (0 !== t.length) { var e = this.$results.find("[aria-selected]"),
                                    n = e.index(t),
                                    i = this.$results.offset().top,
                                    r = t.offset().top,
                                    s = this.$results.scrollTop() + (r - i),
                                    o = r - i;
                                s -= 2 * t.outerHeight(!1), n <= 2 ? this.$results.scrollTop(0) : (o > this.$results.outerHeight() || o < 0) && this.$results.scrollTop(s) } }, n.prototype.template = function(e, n) { var i = this.options.get("templateResult"),
                                r = this.options.get("escapeMarkup"),
                                s = i(e, n);
                            null == s ? n.style.display = "none" : "string" == typeof s ? n.innerHTML = r(s) : t(n).append(s) }, n }), e.define("select2/keys", [], function() { return { BACKSPACE: 8, TAB: 9, ENTER: 13, SHIFT: 16, CTRL: 17, ALT: 18, ESC: 27, SPACE: 32, PAGE_UP: 33, PAGE_DOWN: 34, END: 35, HOME: 36, LEFT: 37, UP: 38, RIGHT: 39, DOWN: 40, DELETE: 46 } }), e.define("select2/selection/base", ["jquery", "../utils", "../keys"], function(t, e, n) {
                        function i(t, e) { this.$element = t, this.options = e, i.__super__.constructor.call(this) } return e.Extend(i, e.Observable), i.prototype.render = function() { var e = t('<span class="select2-selection" role="combobox"  aria-haspopup="true" aria-expanded="false"></span>'); return this._tabindex = 0, null != this.$element.data("old-tabindex") ? this._tabindex = this.$element.data("old-tabindex") : null != this.$element.attr("tabindex") && (this._tabindex = this.$element.attr("tabindex")), e.attr("title", this.$element.attr("title")), e.attr("tabindex", this._tabindex), this.$selection = e, e }, i.prototype.bind = function(t, e) { var i = this,
                                r = (t.id, t.id + "-results");
                            this.container = t, this.$selection.on("focus", function(t) { i.trigger("focus", t) }), this.$selection.on("blur", function(t) { i._handleBlur(t) }), this.$selection.on("keydown", function(t) { i.trigger("keypress", t), t.which === n.SPACE && t.preventDefault() }), t.on("results:focus", function(t) { i.$selection.attr("aria-activedescendant", t.data._resultId) }), t.on("selection:update", function(t) { i.update(t.data) }), t.on("open", function() { i.$selection.attr("aria-expanded", "true"), i.$selection.attr("aria-owns", r), i._attachCloseHandler(t) }), t.on("close", function() { i.$selection.attr("aria-expanded", "false"), i.$selection.removeAttr("aria-activedescendant"), i.$selection.removeAttr("aria-owns"), i.$selection.focus(), i._detachCloseHandler(t) }), t.on("enable", function() { i.$selection.attr("tabindex", i._tabindex) }), t.on("disable", function() { i.$selection.attr("tabindex", "-1") }) }, i.prototype._handleBlur = function(e) { var n = this;
                            window.setTimeout(function() { document.activeElement == n.$selection[0] || t.contains(n.$selection[0], document.activeElement) || n.trigger("blur", e) }, 1) }, i.prototype._attachCloseHandler = function(e) { t(document.body).on("mousedown.select2." + e.id, function(e) { var n = t(e.target),
                                    i = n.closest(".select2");
                                t(".select2.select2-container--open").each(function() { var e = t(this);
                                    this != i[0] && e.data("element").select2("close") }) }) }, i.prototype._detachCloseHandler = function(e) { t(document.body).off("mousedown.select2." + e.id) }, i.prototype.position = function(t, e) { e.find(".selection").append(t) }, i.prototype.destroy = function() { this._detachCloseHandler(this.container) }, i.prototype.update = function(t) { throw new Error("The `update` method must be defined in child classes.") }, i }), e.define("select2/selection/single", ["jquery", "./base", "../utils", "../keys"], function(t, e, n, i) {
                        function r() { r.__super__.constructor.apply(this, arguments) } return n.Extend(r, e), r.prototype.render = function() { var t = r.__super__.render.call(this); return t.addClass("select2-selection--single"), t.html('<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'), t }, r.prototype.bind = function(t, e) { var n = this;
                            r.__super__.bind.apply(this, arguments); var i = t.id + "-container";
                            this.$selection.find(".select2-selection__rendered").attr("id", i), this.$selection.attr("aria-labelledby", i), this.$selection.on("mousedown", function(t) { 1 === t.which && n.trigger("toggle", { originalEvent: t }) }), this.$selection.on("focus", function(t) {}), this.$selection.on("blur", function(t) {}), t.on("focus", function(e) { t.isOpen() || n.$selection.focus() }), t.on("selection:update", function(t) { n.update(t.data) }) }, r.prototype.clear = function() { this.$selection.find(".select2-selection__rendered").empty() }, r.prototype.display = function(t, e) { var n = this.options.get("templateSelection"); return this.options.get("escapeMarkup")(n(t, e)) }, r.prototype.selectionContainer = function() { return t("<span></span>") }, r.prototype.update = function(t) { if (0 === t.length) return void this.clear(); var e = t[0],
                                n = this.$selection.find(".select2-selection__rendered"),
                                i = this.display(e, n);
                            n.empty().append(i), n.prop("title", e.title || e.text) }, r }), e.define("select2/selection/multiple", ["jquery", "./base", "../utils"], function(t, e, n) {
                        function i(t, e) { i.__super__.constructor.apply(this, arguments) } return n.Extend(i, e), i.prototype.render = function() { var t = i.__super__.render.call(this); return t.addClass("select2-selection--multiple"), t.html('<ul class="select2-selection__rendered"></ul>'), t }, i.prototype.bind = function(e, n) { var r = this;
                            i.__super__.bind.apply(this, arguments), this.$selection.on("click", function(t) { r.trigger("toggle", { originalEvent: t }) }), this.$selection.on("click", ".select2-selection__choice__remove", function(e) { if (!r.options.get("disabled")) { var n = t(this),
                                        i = n.parent(),
                                        s = i.data("data");
                                    r.trigger("unselect", { originalEvent: e, data: s }) } }) }, i.prototype.clear = function() { this.$selection.find(".select2-selection__rendered").empty() }, i.prototype.display = function(t, e) { var n = this.options.get("templateSelection"); return this.options.get("escapeMarkup")(n(t, e)) }, i.prototype.selectionContainer = function() { return t('<li class="select2-selection__choice"><span class="select2-selection__choice__remove" role="presentation">&times;</span></li>') }, i.prototype.update = function(t) { if (this.clear(), 0 !== t.length) { for (var e = [], i = 0; i < t.length; i++) { var r = t[i],
                                        s = this.selectionContainer(),
                                        o = this.display(r, s);
                                    s.append(o), s.prop("title", r.title || r.text), s.data("data", r), e.push(s) } var a = this.$selection.find(".select2-selection__rendered");
                                n.appendMany(a, e) } }, i }), e.define("select2/selection/placeholder", ["../utils"], function(t) {
                        function e(t, e, n) { this.placeholder = this.normalizePlaceholder(n.get("placeholder")), t.call(this, e, n) } return e.prototype.normalizePlaceholder = function(t, e) { return "string" == typeof e && (e = { id: "", text: e }), e }, e.prototype.createPlaceholder = function(t, e) { var n = this.selectionContainer(); return n.html(this.display(e)), n.addClass("select2-selection__placeholder").removeClass("select2-selection__choice"), n }, e.prototype.update = function(t, e) { var n = 1 == e.length && e[0].id != this.placeholder.id; if (e.length > 1 || n) return t.call(this, e);
                            this.clear(); var i = this.createPlaceholder(this.placeholder);
                            this.$selection.find(".select2-selection__rendered").append(i) }, e }), e.define("select2/selection/allowClear", ["jquery", "../keys"], function(t, e) {
                        function n() {} return n.prototype.bind = function(t, e, n) { var i = this;
                            t.call(this, e, n), null == this.placeholder && this.options.get("debug") && window.console && console.error && console.error("Select2: The `allowClear` option should be used in combination with the `placeholder` option."), this.$selection.on("mousedown", ".select2-selection__clear", function(t) { i._handleClear(t) }), e.on("keypress", function(t) { i._handleKeyboardClear(t, e) }) }, n.prototype._handleClear = function(t, e) { if (!this.options.get("disabled")) { var n = this.$selection.find(".select2-selection__clear"); if (0 !== n.length) { e.stopPropagation(); for (var i = n.data("data"), r = 0; r < i.length; r++) { var s = { data: i[r] }; if (this.trigger("unselect", s), s.prevented) return }
                                    this.$element.val(this.placeholder.id).trigger("change"), this.trigger("toggle", {}) } } }, n.prototype._handleKeyboardClear = function(t, n, i) { i.isOpen() || n.which != e.DELETE && n.which != e.BACKSPACE || this._handleClear(n) }, n.prototype.update = function(e, n) { if (e.call(this, n), !(this.$selection.find(".select2-selection__placeholder").length > 0 || 0 === n.length)) { var i = t('<span class="select2-selection__clear">&times;</span>');
                                i.data("data", n), this.$selection.find(".select2-selection__rendered").prepend(i) } }, n }), e.define("select2/selection/search", ["jquery", "../utils", "../keys"], function(t, e, n) {
                        function i(t, e, n) { t.call(this, e, n) } return i.prototype.render = function(e) { var n = t('<li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="textbox" aria-autocomplete="list" /></li>');
                            this.$searchContainer = n, this.$search = n.find("input"); var i = e.call(this); return this._transferTabIndex(), i }, i.prototype.bind = function(t, e, i) { var r = this;
                            t.call(this, e, i), e.on("open", function() { r.$search.trigger("focus") }), e.on("close", function() { r.$search.val(""), r.$search.removeAttr("aria-activedescendant"), r.$search.trigger("focus") }), e.on("enable", function() { r.$search.prop("disabled", !1), r._transferTabIndex() }), e.on("disable", function() { r.$search.prop("disabled", !0) }), e.on("focus", function(t) { r.$search.trigger("focus") }), e.on("results:focus", function(t) { r.$search.attr("aria-activedescendant", t.id) }), this.$selection.on("focusin", ".select2-search--inline", function(t) { r.trigger("focus", t) }), this.$selection.on("focusout", ".select2-search--inline", function(t) { r._handleBlur(t) }), this.$selection.on("keydown", ".select2-search--inline", function(t) { if (t.stopPropagation(), r.trigger("keypress", t), r._keyUpPrevented = t.isDefaultPrevented(), t.which === n.BACKSPACE && "" === r.$search.val()) { var e = r.$searchContainer.prev(".select2-selection__choice"); if (e.length > 0) { var i = e.data("data");
                                        r.searchRemoveChoice(i), t.preventDefault() } } }); var s = document.documentMode,
                                o = s && s <= 11;
                            this.$selection.on("input.searchcheck", ".select2-search--inline", function(t) { if (o) return void r.$selection.off("input.search input.searchcheck");
                                r.$selection.off("keyup.search") }), this.$selection.on("keyup.search input.search", ".select2-search--inline", function(t) { if (o && "input" === t.type) return void r.$selection.off("input.search input.searchcheck"); var e = t.which;
                                e != n.SHIFT && e != n.CTRL && e != n.ALT && e != n.TAB && r.handleSearch(t) }) }, i.prototype._transferTabIndex = function(t) { this.$search.attr("tabindex", this.$selection.attr("tabindex")), this.$selection.attr("tabindex", "-1") }, i.prototype.createPlaceholder = function(t, e) { this.$search.attr("placeholder", e.text) }, i.prototype.update = function(t, e) { var n = this.$search[0] == document.activeElement;
                            this.$search.attr("placeholder", ""), t.call(this, e), this.$selection.find(".select2-selection__rendered").append(this.$searchContainer), this.resizeSearch(), n && this.$search.focus() }, i.prototype.handleSearch = function() { if (this.resizeSearch(), !this._keyUpPrevented) { var t = this.$search.val();
                                this.trigger("query", { term: t }) }
                            this._keyUpPrevented = !1 }, i.prototype.searchRemoveChoice = function(t, e) { this.trigger("unselect", { data: e }), this.$search.val(e.text), this.handleSearch() }, i.prototype.resizeSearch = function() { this.$search.css("width", "25px"); var t = ""; if ("" !== this.$search.attr("placeholder")) t = this.$selection.find(".select2-selection__rendered").innerWidth();
                            else { t = .75 * (this.$search.val().length + 1) + "em" }
                            this.$search.css("width", t) }, i }), e.define("select2/selection/eventRelay", ["jquery"], function(t) {
                        function e() {} return e.prototype.bind = function(e, n, i) { var r = this,
                                s = ["open", "opening", "close", "closing", "select", "selecting", "unselect", "unselecting"],
                                o = ["opening", "closing", "selecting", "unselecting"];
                            e.call(this, n, i), n.on("*", function(e, n) { if (-1 !== t.inArray(e, s)) { n = n || {}; var i = t.Event("select2:" + e, { params: n });
                                    r.$element.trigger(i), -1 !== t.inArray(e, o) && (n.prevented = i.isDefaultPrevented()) } }) }, e }), e.define("select2/translation", ["jquery", "require"], function(t, e) {
                        function n(t) { this.dict = t || {} } return n.prototype.all = function() { return this.dict }, n.prototype.get = function(t) { return this.dict[t] }, n.prototype.extend = function(e) { this.dict = t.extend({}, e.all(), this.dict) }, n._cache = {}, n.loadPath = function(t) { if (!(t in n._cache)) { var i = e(t);
                                n._cache[t] = i } return new n(n._cache[t]) }, n }), e.define("select2/diacritics", [], function() { return { "Ⓐ": "A", "Ａ": "A", "À": "A", "Á": "A", "Â": "A", "Ầ": "A", "Ấ": "A", "Ẫ": "A", "Ẩ": "A", "Ã": "A", "Ā": "A", "Ă": "A", "Ằ": "A", "Ắ": "A", "Ẵ": "A", "Ẳ": "A", "Ȧ": "A", "Ǡ": "A", "Ä": "A", "Ǟ": "A", "Ả": "A", "Å": "A", "Ǻ": "A", "Ǎ": "A", "Ȁ": "A", "Ȃ": "A", "Ạ": "A", "Ậ": "A", "Ặ": "A", "Ḁ": "A", "Ą": "A", "Ⱥ": "A", "Ɐ": "A", "Ꜳ": "AA", "Æ": "AE", "Ǽ": "AE", "Ǣ": "AE", "Ꜵ": "AO", "Ꜷ": "AU", "Ꜹ": "AV", "Ꜻ": "AV", "Ꜽ": "AY", "Ⓑ": "B", "Ｂ": "B", "Ḃ": "B", "Ḅ": "B", "Ḇ": "B", "Ƀ": "B", "Ƃ": "B", "Ɓ": "B", "Ⓒ": "C", "Ｃ": "C", "Ć": "C", "Ĉ": "C", "Ċ": "C", "Č": "C", "Ç": "C", "Ḉ": "C", "Ƈ": "C", "Ȼ": "C", "Ꜿ": "C", "Ⓓ": "D", "Ｄ": "D", "Ḋ": "D", "Ď": "D", "Ḍ": "D", "Ḑ": "D", "Ḓ": "D", "Ḏ": "D", "Đ": "D", "Ƌ": "D", "Ɗ": "D", "Ɖ": "D", "Ꝺ": "D", "Ǳ": "DZ", "Ǆ": "DZ", "ǲ": "Dz", "ǅ": "Dz", "Ⓔ": "E", "Ｅ": "E", "È": "E", "É": "E", "Ê": "E", "Ề": "E", "Ế": "E", "Ễ": "E", "Ể": "E", "Ẽ": "E", "Ē": "E", "Ḕ": "E", "Ḗ": "E", "Ĕ": "E", "Ė": "E", "Ë": "E", "Ẻ": "E", "Ě": "E", "Ȅ": "E", "Ȇ": "E", "Ẹ": "E", "Ệ": "E", "Ȩ": "E", "Ḝ": "E", "Ę": "E", "Ḙ": "E", "Ḛ": "E", "Ɛ": "E", "Ǝ": "E", "Ⓕ": "F", "Ｆ": "F", "Ḟ": "F", "Ƒ": "F", "Ꝼ": "F", "Ⓖ": "G", "Ｇ": "G", "Ǵ": "G", "Ĝ": "G", "Ḡ": "G", "Ğ": "G", "Ġ": "G", "Ǧ": "G", "Ģ": "G", "Ǥ": "G", "Ɠ": "G", "Ꞡ": "G", "Ᵹ": "G", "Ꝿ": "G", "Ⓗ": "H", "Ｈ": "H", "Ĥ": "H", "Ḣ": "H", "Ḧ": "H", "Ȟ": "H", "Ḥ": "H", "Ḩ": "H", "Ḫ": "H", "Ħ": "H", "Ⱨ": "H", "Ⱶ": "H", "Ɥ": "H", "Ⓘ": "I", "Ｉ": "I", "Ì": "I", "Í": "I", "Î": "I", "Ĩ": "I", "Ī": "I", "Ĭ": "I", "İ": "I", "Ï": "I", "Ḯ": "I", "Ỉ": "I", "Ǐ": "I", "Ȉ": "I", "Ȋ": "I", "Ị": "I", "Į": "I", "Ḭ": "I", "Ɨ": "I", "Ⓙ": "J", "Ｊ": "J", "Ĵ": "J", "Ɉ": "J", "Ⓚ": "K", "Ｋ": "K", "Ḱ": "K", "Ǩ": "K", "Ḳ": "K", "Ķ": "K", "Ḵ": "K", "Ƙ": "K", "Ⱪ": "K", "Ꝁ": "K", "Ꝃ": "K", "Ꝅ": "K", "Ꞣ": "K", "Ⓛ": "L", "Ｌ": "L", "Ŀ": "L", "Ĺ": "L", "Ľ": "L", "Ḷ": "L", "Ḹ": "L", "Ļ": "L", "Ḽ": "L", "Ḻ": "L", "Ł": "L", "Ƚ": "L", "Ɫ": "L", "Ⱡ": "L", "Ꝉ": "L", "Ꝇ": "L", "Ꞁ": "L", "Ǉ": "LJ", "ǈ": "Lj", "Ⓜ": "M", "Ｍ": "M", "Ḿ": "M", "Ṁ": "M", "Ṃ": "M", "Ɱ": "M", "Ɯ": "M", "Ⓝ": "N", "Ｎ": "N", "Ǹ": "N", "Ń": "N", "Ñ": "N", "Ṅ": "N", "Ň": "N", "Ṇ": "N", "Ņ": "N", "Ṋ": "N", "Ṉ": "N", "Ƞ": "N", "Ɲ": "N", "Ꞑ": "N", "Ꞥ": "N", "Ǌ": "NJ", "ǋ": "Nj", "Ⓞ": "O", "Ｏ": "O", "Ò": "O", "Ó": "O", "Ô": "O", "Ồ": "O", "Ố": "O", "Ỗ": "O", "Ổ": "O", "Õ": "O", "Ṍ": "O", "Ȭ": "O", "Ṏ": "O", "Ō": "O", "Ṑ": "O", "Ṓ": "O", "Ŏ": "O", "Ȯ": "O", "Ȱ": "O", "Ö": "O", "Ȫ": "O", "Ỏ": "O", "Ő": "O", "Ǒ": "O", "Ȍ": "O", "Ȏ": "O", "Ơ": "O", "Ờ": "O", "Ớ": "O", "Ỡ": "O", "Ở": "O", "Ợ": "O", "Ọ": "O", "Ộ": "O", "Ǫ": "O", "Ǭ": "O", "Ø": "O", "Ǿ": "O", "Ɔ": "O", "Ɵ": "O", "Ꝋ": "O", "Ꝍ": "O", "Ƣ": "OI", "Ꝏ": "OO", "Ȣ": "OU", "Ⓟ": "P", "Ｐ": "P", "Ṕ": "P", "Ṗ": "P", "Ƥ": "P", "Ᵽ": "P", "Ꝑ": "P", "Ꝓ": "P", "Ꝕ": "P", "Ⓠ": "Q", "Ｑ": "Q", "Ꝗ": "Q", "Ꝙ": "Q", "Ɋ": "Q", "Ⓡ": "R", "Ｒ": "R", "Ŕ": "R", "Ṙ": "R", "Ř": "R", "Ȑ": "R", "Ȓ": "R", "Ṛ": "R", "Ṝ": "R", "Ŗ": "R", "Ṟ": "R", "Ɍ": "R", "Ɽ": "R", "Ꝛ": "R", "Ꞧ": "R", "Ꞃ": "R", "Ⓢ": "S", "Ｓ": "S", "ẞ": "S", "Ś": "S", "Ṥ": "S", "Ŝ": "S", "Ṡ": "S", "Š": "S", "Ṧ": "S", "Ṣ": "S", "Ṩ": "S", "Ș": "S", "Ş": "S", "Ȿ": "S", "Ꞩ": "S", "Ꞅ": "S", "Ⓣ": "T", "Ｔ": "T", "Ṫ": "T", "Ť": "T", "Ṭ": "T", "Ț": "T", "Ţ": "T", "Ṱ": "T", "Ṯ": "T", "Ŧ": "T", "Ƭ": "T", "Ʈ": "T", "Ⱦ": "T", "Ꞇ": "T", "Ꜩ": "TZ", "Ⓤ": "U", "Ｕ": "U", "Ù": "U", "Ú": "U", "Û": "U", "Ũ": "U", "Ṹ": "U", "Ū": "U", "Ṻ": "U", "Ŭ": "U", "Ü": "U", "Ǜ": "U", "Ǘ": "U", "Ǖ": "U", "Ǚ": "U", "Ủ": "U", "Ů": "U", "Ű": "U", "Ǔ": "U", "Ȕ": "U", "Ȗ": "U", "Ư": "U", "Ừ": "U", "Ứ": "U", "Ữ": "U", "Ử": "U", "Ự": "U", "Ụ": "U", "Ṳ": "U", "Ų": "U", "Ṷ": "U", "Ṵ": "U", "Ʉ": "U", "Ⓥ": "V", "Ｖ": "V", "Ṽ": "V", "Ṿ": "V", "Ʋ": "V", "Ꝟ": "V", "Ʌ": "V", "Ꝡ": "VY", "Ⓦ": "W", "Ｗ": "W", "Ẁ": "W", "Ẃ": "W", "Ŵ": "W", "Ẇ": "W", "Ẅ": "W", "Ẉ": "W", "Ⱳ": "W", "Ⓧ": "X", "Ｘ": "X", "Ẋ": "X", "Ẍ": "X", "Ⓨ": "Y", "Ｙ": "Y", "Ỳ": "Y", "Ý": "Y", "Ŷ": "Y", "Ỹ": "Y", "Ȳ": "Y", "Ẏ": "Y", "Ÿ": "Y", "Ỷ": "Y", "Ỵ": "Y", "Ƴ": "Y", "Ɏ": "Y", "Ỿ": "Y", "Ⓩ": "Z", "Ｚ": "Z", "Ź": "Z", "Ẑ": "Z", "Ż": "Z", "Ž": "Z", "Ẓ": "Z", "Ẕ": "Z", "Ƶ": "Z", "Ȥ": "Z", "Ɀ": "Z", "Ⱬ": "Z", "Ꝣ": "Z", "ⓐ": "a", "ａ": "a", "ẚ": "a", "à": "a", "á": "a", "â": "a", "ầ": "a", "ấ": "a", "ẫ": "a", "ẩ": "a", "ã": "a", "ā": "a", "ă": "a", "ằ": "a", "ắ": "a", "ẵ": "a", "ẳ": "a", "ȧ": "a", "ǡ": "a", "ä": "a", "ǟ": "a", "ả": "a", "å": "a", "ǻ": "a", "ǎ": "a", "ȁ": "a", "ȃ": "a", "ạ": "a", "ậ": "a", "ặ": "a", "ḁ": "a", "ą": "a", "ⱥ": "a", "ɐ": "a", "ꜳ": "aa", "æ": "ae", "ǽ": "ae", "ǣ": "ae", "ꜵ": "ao", "ꜷ": "au", "ꜹ": "av", "ꜻ": "av", "ꜽ": "ay", "ⓑ": "b", "ｂ": "b", "ḃ": "b", "ḅ": "b", "ḇ": "b", "ƀ": "b", "ƃ": "b", "ɓ": "b", "ⓒ": "c", "ｃ": "c", "ć": "c", "ĉ": "c", "ċ": "c", "č": "c", "ç": "c", "ḉ": "c", "ƈ": "c", "ȼ": "c", "ꜿ": "c", "ↄ": "c", "ⓓ": "d", "ｄ": "d", "ḋ": "d", "ď": "d", "ḍ": "d", "ḑ": "d", "ḓ": "d", "ḏ": "d", "đ": "d", "ƌ": "d", "ɖ": "d", "ɗ": "d", "ꝺ": "d", "ǳ": "dz", "ǆ": "dz", "ⓔ": "e", "ｅ": "e", "è": "e", "é": "e", "ê": "e", "ề": "e", "ế": "e", "ễ": "e", "ể": "e", "ẽ": "e", "ē": "e", "ḕ": "e", "ḗ": "e", "ĕ": "e", "ė": "e", "ë": "e", "ẻ": "e", "ě": "e", "ȅ": "e", "ȇ": "e", "ẹ": "e", "ệ": "e", "ȩ": "e", "ḝ": "e", "ę": "e", "ḙ": "e", "ḛ": "e", "ɇ": "e", "ɛ": "e", "ǝ": "e", "ⓕ": "f", "ｆ": "f", "ḟ": "f", "ƒ": "f", "ꝼ": "f", "ⓖ": "g", "ｇ": "g", "ǵ": "g", "ĝ": "g", "ḡ": "g", "ğ": "g", "ġ": "g", "ǧ": "g", "ģ": "g", "ǥ": "g", "ɠ": "g", "ꞡ": "g", "ᵹ": "g", "ꝿ": "g", "ⓗ": "h", "ｈ": "h", "ĥ": "h", "ḣ": "h", "ḧ": "h", "ȟ": "h", "ḥ": "h", "ḩ": "h", "ḫ": "h", "ẖ": "h", "ħ": "h", "ⱨ": "h", "ⱶ": "h", "ɥ": "h", "ƕ": "hv", "ⓘ": "i", "ｉ": "i", "ì": "i", "í": "i", "î": "i", "ĩ": "i", "ī": "i", "ĭ": "i", "ï": "i", "ḯ": "i", "ỉ": "i", "ǐ": "i", "ȉ": "i", "ȋ": "i", "ị": "i", "į": "i", "ḭ": "i", "ɨ": "i", "ı": "i", "ⓙ": "j", "ｊ": "j", "ĵ": "j", "ǰ": "j", "ɉ": "j", "ⓚ": "k", "ｋ": "k", "ḱ": "k", "ǩ": "k", "ḳ": "k", "ķ": "k", "ḵ": "k", "ƙ": "k", "ⱪ": "k", "ꝁ": "k", "ꝃ": "k", "ꝅ": "k", "ꞣ": "k", "ⓛ": "l", "ｌ": "l", "ŀ": "l", "ĺ": "l", "ľ": "l", "ḷ": "l", "ḹ": "l", "ļ": "l", "ḽ": "l", "ḻ": "l", "ſ": "l", "ł": "l", "ƚ": "l", "ɫ": "l", "ⱡ": "l", "ꝉ": "l", "ꞁ": "l", "ꝇ": "l", "ǉ": "lj", "ⓜ": "m", "ｍ": "m", "ḿ": "m", "ṁ": "m", "ṃ": "m", "ɱ": "m", "ɯ": "m", "ⓝ": "n", "ｎ": "n", "ǹ": "n", "ń": "n", "ñ": "n", "ṅ": "n", "ň": "n", "ṇ": "n", "ņ": "n", "ṋ": "n", "ṉ": "n", "ƞ": "n", "ɲ": "n", "ŉ": "n", "ꞑ": "n", "ꞥ": "n", "ǌ": "nj", "ⓞ": "o", "ｏ": "o", "ò": "o", "ó": "o", "ô": "o", "ồ": "o", "ố": "o", "ỗ": "o", "ổ": "o", "õ": "o", "ṍ": "o", "ȭ": "o", "ṏ": "o", "ō": "o", "ṑ": "o", "ṓ": "o", "ŏ": "o", "ȯ": "o", "ȱ": "o", "ö": "o", "ȫ": "o", "ỏ": "o", "ő": "o", "ǒ": "o", "ȍ": "o", "ȏ": "o", "ơ": "o", "ờ": "o", "ớ": "o", "ỡ": "o", "ở": "o", "ợ": "o", "ọ": "o", "ộ": "o", "ǫ": "o", "ǭ": "o", "ø": "o", "ǿ": "o", "ɔ": "o", "ꝋ": "o", "ꝍ": "o", "ɵ": "o", "ƣ": "oi", "ȣ": "ou", "ꝏ": "oo", "ⓟ": "p", "ｐ": "p", "ṕ": "p", "ṗ": "p", "ƥ": "p", "ᵽ": "p", "ꝑ": "p", "ꝓ": "p", "ꝕ": "p", "ⓠ": "q", "ｑ": "q", "ɋ": "q", "ꝗ": "q", "ꝙ": "q", "ⓡ": "r", "ｒ": "r", "ŕ": "r", "ṙ": "r", "ř": "r", "ȑ": "r", "ȓ": "r", "ṛ": "r", "ṝ": "r", "ŗ": "r", "ṟ": "r", "ɍ": "r", "ɽ": "r", "ꝛ": "r", "ꞧ": "r", "ꞃ": "r", "ⓢ": "s", "ｓ": "s", "ß": "s", "ś": "s", "ṥ": "s", "ŝ": "s", "ṡ": "s", "š": "s", "ṧ": "s", "ṣ": "s", "ṩ": "s", "ș": "s", "ş": "s", "ȿ": "s", "ꞩ": "s", "ꞅ": "s", "ẛ": "s", "ⓣ": "t", "ｔ": "t", "ṫ": "t", "ẗ": "t", "ť": "t", "ṭ": "t", "ț": "t", "ţ": "t", "ṱ": "t", "ṯ": "t", "ŧ": "t", "ƭ": "t", "ʈ": "t", "ⱦ": "t", "ꞇ": "t", "ꜩ": "tz", "ⓤ": "u", "ｕ": "u", "ù": "u", "ú": "u", "û": "u", "ũ": "u", "ṹ": "u", "ū": "u", "ṻ": "u", "ŭ": "u", "ü": "u", "ǜ": "u", "ǘ": "u", "ǖ": "u", "ǚ": "u", "ủ": "u", "ů": "u", "ű": "u", "ǔ": "u", "ȕ": "u", "ȗ": "u", "ư": "u", "ừ": "u", "ứ": "u", "ữ": "u", "ử": "u", "ự": "u", "ụ": "u", "ṳ": "u", "ų": "u", "ṷ": "u", "ṵ": "u", "ʉ": "u", "ⓥ": "v", "ｖ": "v", "ṽ": "v", "ṿ": "v", "ʋ": "v", "ꝟ": "v", "ʌ": "v", "ꝡ": "vy", "ⓦ": "w", "ｗ": "w", "ẁ": "w", "ẃ": "w", "ŵ": "w", "ẇ": "w", "ẅ": "w", "ẘ": "w", "ẉ": "w", "ⱳ": "w", "ⓧ": "x", "ｘ": "x", "ẋ": "x", "ẍ": "x", "ⓨ": "y", "ｙ": "y", "ỳ": "y", "ý": "y", "ŷ": "y", "ỹ": "y", "ȳ": "y", "ẏ": "y", "ÿ": "y", "ỷ": "y", "ẙ": "y", "ỵ": "y", "ƴ": "y", "ɏ": "y", "ỿ": "y", "ⓩ": "z", "ｚ": "z", "ź": "z", "ẑ": "z", "ż": "z", "ž": "z", "ẓ": "z", "ẕ": "z", "ƶ": "z", "ȥ": "z", "ɀ": "z", "ⱬ": "z", "ꝣ": "z", "Ά": "Α", "Έ": "Ε", "Ή": "Η", "Ί": "Ι", "Ϊ": "Ι", "Ό": "Ο", "Ύ": "Υ", "Ϋ": "Υ", "Ώ": "Ω", "ά": "α", "έ": "ε", "ή": "η", "ί": "ι", "ϊ": "ι", "ΐ": "ι", "ό": "ο", "ύ": "υ", "ϋ": "υ", "ΰ": "υ", "ω": "ω", "ς": "σ" } }), e.define("select2/data/base", ["../utils"], function(t) {
                        function e(t, n) { e.__super__.constructor.call(this) } return t.Extend(e, t.Observable), e.prototype.current = function(t) { throw new Error("The `current` method must be defined in child classes.") }, e.prototype.query = function(t, e) { throw new Error("The `query` method must be defined in child classes.") }, e.prototype.bind = function(t, e) {}, e.prototype.destroy = function() {}, e.prototype.generateResultId = function(e, n) { var i = e.id + "-result-"; return i += t.generateChars(4), null != n.id ? i += "-" + n.id.toString() : i += "-" + t.generateChars(4), i }, e }), e.define("select2/data/select", ["./base", "../utils", "jquery"], function(t, e, n) {
                        function i(t, e) { this.$element = t, this.options = e, i.__super__.constructor.call(this) }
                        return e.Extend(i, t), i.prototype.current = function(t) { var e = [],
                                i = this;
                            this.$element.find(":selected").each(function() { var t = n(this),
                                    r = i.item(t);
                                e.push(r) }), t(e) }, i.prototype.select = function(t) { var e = this; if (t.selected = !0, n(t.element).is("option")) return t.element.selected = !0, void this.$element.trigger("change"); if (this.$element.prop("multiple")) this.current(function(i) { var r = [];
                                t = [t], t.push.apply(t, i); for (var s = 0; s < t.length; s++) { var o = t[s].id; - 1 === n.inArray(o, r) && r.push(o) }
                                e.$element.val(r), e.$element.trigger("change") });
                            else { var i = t.id;
                                this.$element.val(i), this.$element.trigger("change") } }, i.prototype.unselect = function(t) {
                            var e = this;
                            if (this.$element.prop("multiple")) {
                                if (t.selected = !1,
                                    n(t.element).is("option")) return t.element.selected = !1, void this.$element.trigger("change");
                                this.current(function(i) { for (var r = [], s = 0; s < i.length; s++) { var o = i[s].id;
                                        o !== t.id && -1 === n.inArray(o, r) && r.push(o) }
                                    e.$element.val(r), e.$element.trigger("change") })
                            }
                        }, i.prototype.bind = function(t, e) { var n = this;
                            this.container = t, t.on("select", function(t) { n.select(t.data) }), t.on("unselect", function(t) { n.unselect(t.data) }) }, i.prototype.destroy = function() { this.$element.find("*").each(function() { n.removeData(this, "data") }) }, i.prototype.query = function(t, e) { var i = [],
                                r = this;
                            this.$element.children().each(function() { var e = n(this); if (e.is("option") || e.is("optgroup")) { var s = r.item(e),
                                        o = r.matches(t, s);
                                    null !== o && i.push(o) } }), e({ results: i }) }, i.prototype.addOptions = function(t) { e.appendMany(this.$element, t) }, i.prototype.option = function(t) { var e;
                            t.children ? (e = document.createElement("optgroup"), e.label = t.text) : (e = document.createElement("option"), void 0 !== e.textContent ? e.textContent = t.text : e.innerText = t.text), void 0 !== t.id && (e.value = t.id), t.disabled && (e.disabled = !0), t.selected && (e.selected = !0), t.title && (e.title = t.title); var i = n(e),
                                r = this._normalizeItem(t); return r.element = e, n.data(e, "data", r), i }, i.prototype.item = function(t) { var e = {}; if (null != (e = n.data(t[0], "data"))) return e; if (t.is("option")) e = { id: t.val(), text: t.text(), disabled: t.prop("disabled"), selected: t.prop("selected"), title: t.prop("title") };
                            else if (t.is("optgroup")) { e = { text: t.prop("label"), children: [], title: t.prop("title") }; for (var i = t.children("option"), r = [], s = 0; s < i.length; s++) { var o = n(i[s]),
                                        a = this.item(o);
                                    r.push(a) }
                                e.children = r } return e = this._normalizeItem(e), e.element = t[0], n.data(t[0], "data", e), e }, i.prototype._normalizeItem = function(t) { n.isPlainObject(t) || (t = { id: t, text: t }), t = n.extend({}, { text: "" }, t); var e = { selected: !1, disabled: !1 }; return null != t.id && (t.id = t.id.toString()), null != t.text && (t.text = t.text.toString()), null == t._resultId && t.id && null != this.container && (t._resultId = this.generateResultId(this.container, t)), n.extend({}, e, t) }, i.prototype.matches = function(t, e) { return this.options.get("matcher")(t, e) }, i
                    }), e.define("select2/data/array", ["./select", "../utils", "jquery"], function(t, e, n) {
                        function i(t, e) { var n = e.get("data") || [];
                            i.__super__.constructor.call(this, t, e), this.addOptions(this.convertToOptions(n)) } return e.Extend(i, t), i.prototype.select = function(t) { var e = this.$element.find("option").filter(function(e, n) { return n.value == t.id.toString() });
                            0 === e.length && (e = this.option(t), this.addOptions(e)), i.__super__.select.call(this, t) }, i.prototype.convertToOptions = function(t) { for (var i = this, r = this.$element.find("option"), s = r.map(function() { return i.item(n(this)).id }).get(), o = [], a = 0; a < t.length; a++) { var l = this._normalizeItem(t[a]); if (n.inArray(l.id, s) >= 0) { var u = r.filter(function(t) { return function() { return n(this).val() == t.id } }(l)),
                                        c = this.item(u),
                                        h = n.extend(!0, {}, l, c),
                                        p = this.option(h);
                                    u.replaceWith(p) } else { var d = this.option(l); if (l.children) { var f = this.convertToOptions(l.children);
                                        e.appendMany(d, f) }
                                    o.push(d) } } return o }, i }), e.define("select2/data/ajax", ["./array", "../utils", "jquery"], function(t, e, n) {
                        function i(t, e) { this.ajaxOptions = this._applyDefaults(e.get("ajax")), null != this.ajaxOptions.processResults && (this.processResults = this.ajaxOptions.processResults), i.__super__.constructor.call(this, t, e) } return e.Extend(i, t), i.prototype._applyDefaults = function(t) { var e = { data: function(t) { return n.extend({}, t, { q: t.term }) }, transport: function(t, e, i) { var r = n.ajax(t); return r.then(e), r.fail(i), r } }; return n.extend({}, e, t, !0) }, i.prototype.processResults = function(t) { return t }, i.prototype.query = function(t, e) {
                            function i() { var i = s.transport(s, function(i) { var s = r.processResults(i, t);
                                    r.options.get("debug") && window.console && console.error && (s && s.results && n.isArray(s.results) || console.error("Select2: The AJAX results did not return an array in the `results` key of the response.")), e(s) }, function() { i.status && "0" === i.status || r.trigger("results:message", { message: "errorLoading" }) });
                                r._request = i } var r = this;
                            null != this._request && (n.isFunction(this._request.abort) && this._request.abort(), this._request = null); var s = n.extend({ type: "GET" }, this.ajaxOptions); "function" == typeof s.url && (s.url = s.url.call(this.$element, t)), "function" == typeof s.data && (s.data = s.data.call(this.$element, t)), this.ajaxOptions.delay && null != t.term ? (this._queryTimeout && window.clearTimeout(this._queryTimeout), this._queryTimeout = window.setTimeout(i, this.ajaxOptions.delay)) : i() }, i }), e.define("select2/data/tags", ["jquery"], function(t) {
                        function e(e, n, i) { var r = i.get("tags"),
                                s = i.get("createTag");
                            void 0 !== s && (this.createTag = s); var o = i.get("insertTag"); if (void 0 !== o && (this.insertTag = o), e.call(this, n, i), t.isArray(r))
                                for (var a = 0; a < r.length; a++) { var l = r[a],
                                        u = this._normalizeItem(l),
                                        c = this.option(u);
                                    this.$element.append(c) } } return e.prototype.query = function(t, e, n) {
                            function i(t, s) { for (var o = t.results, a = 0; a < o.length; a++) { var l = o[a],
                                        u = null != l.children && !i({ results: l.children }, !0); if ((l.text || "").toUpperCase() === (e.term || "").toUpperCase() || u) return !s && (t.data = o, void n(t)) } if (s) return !0; var c = r.createTag(e); if (null != c) { var h = r.option(c);
                                    h.attr("data-select2-tag", !0), r.addOptions([h]), r.insertTag(o, c) }
                                t.results = o, n(t) } var r = this; if (this._removeOldTags(), null == e.term || null != e.page) return void t.call(this, e, n);
                            t.call(this, e, i) }, e.prototype.createTag = function(e, n) { var i = t.trim(n.term); return "" === i ? null : { id: i, text: i } }, e.prototype.insertTag = function(t, e, n) { e.unshift(n) }, e.prototype._removeOldTags = function(e) { this._lastTag;
                            this.$element.find("option[data-select2-tag]").each(function() { this.selected || t(this).remove() }) }, e }), e.define("select2/data/tokenizer", ["jquery"], function(t) {
                        function e(t, e, n) { var i = n.get("tokenizer");
                            void 0 !== i && (this.tokenizer = i), t.call(this, e, n) } return e.prototype.bind = function(t, e, n) { t.call(this, e, n), this.$search = e.dropdown.$search || e.selection.$search || n.find(".select2-search__field") }, e.prototype.query = function(e, n, i) {
                            function r(e) { var n = o._normalizeItem(e); if (!o.$element.find("option").filter(function() { return t(this).val() === n.id }).length) { var i = o.option(n);
                                    i.attr("data-select2-tag", !0), o._removeOldTags(), o.addOptions([i]) }
                                s(n) }

                            function s(t) { o.trigger("select", { data: t }) } var o = this;
                            n.term = n.term || ""; var a = this.tokenizer(n, this.options, r);
                            a.term !== n.term && (this.$search.length && (this.$search.val(a.term), this.$search.focus()), n.term = a.term), e.call(this, n, i) }, e.prototype.tokenizer = function(e, n, i, r) { for (var s = i.get("tokenSeparators") || [], o = n.term, a = 0, l = this.createTag || function(t) { return { id: t.term, text: t.term } }; a < o.length;) { var u = o[a]; if (-1 !== t.inArray(u, s)) { var c = o.substr(0, a),
                                        h = t.extend({}, n, { term: c }),
                                        p = l(h);
                                    null != p ? (r(p), o = o.substr(a + 1) || "", a = 0) : a++ } else a++ } return { term: o } }, e }), e.define("select2/data/minimumInputLength", [], function() {
                        function t(t, e, n) { this.minimumInputLength = n.get("minimumInputLength"), t.call(this, e, n) } return t.prototype.query = function(t, e, n) { if (e.term = e.term || "", e.term.length < this.minimumInputLength) return void this.trigger("results:message", { message: "inputTooShort", args: { minimum: this.minimumInputLength, input: e.term, params: e } });
                            t.call(this, e, n) }, t }), e.define("select2/data/maximumInputLength", [], function() {
                        function t(t, e, n) { this.maximumInputLength = n.get("maximumInputLength"), t.call(this, e, n) } return t.prototype.query = function(t, e, n) { if (e.term = e.term || "", this.maximumInputLength > 0 && e.term.length > this.maximumInputLength) return void this.trigger("results:message", { message: "inputTooLong", args: { maximum: this.maximumInputLength, input: e.term, params: e } });
                            t.call(this, e, n) }, t }), e.define("select2/data/maximumSelectionLength", [], function() {
                        function t(t, e, n) { this.maximumSelectionLength = n.get("maximumSelectionLength"), t.call(this, e, n) } return t.prototype.query = function(t, e, n) { var i = this;
                            this.current(function(r) { var s = null != r ? r.length : 0; if (i.maximumSelectionLength > 0 && s >= i.maximumSelectionLength) return void i.trigger("results:message", { message: "maximumSelected", args: { maximum: i.maximumSelectionLength } });
                                t.call(i, e, n) }) }, t }), e.define("select2/dropdown", ["jquery", "./utils"], function(t, e) {
                        function n(t, e) { this.$element = t, this.options = e, n.__super__.constructor.call(this) } return e.Extend(n, e.Observable), n.prototype.render = function() { var e = t('<span class="select2-dropdown"><span class="select2-results"></span></span>'); return e.attr("dir", this.options.get("dir")), this.$dropdown = e, e }, n.prototype.bind = function() {}, n.prototype.position = function(t, e) {}, n.prototype.destroy = function() { this.$dropdown.remove() }, n }), e.define("select2/dropdown/search", ["jquery", "../utils"], function(t, e) {
                        function n() {} return n.prototype.render = function(e) { var n = e.call(this),
                                i = t('<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="textbox" /></span>'); return this.$searchContainer = i, this.$search = i.find("input"), n.prepend(i), n }, n.prototype.bind = function(e, n, i) { var r = this;
                            e.call(this, n, i), this.$search.on("keydown", function(t) { r.trigger("keypress", t), r._keyUpPrevented = t.isDefaultPrevented() }), this.$search.on("input", function(e) { t(this).off("keyup") }), this.$search.on("keyup input", function(t) { r.handleSearch(t) }), n.on("open", function() { r.$search.attr("tabindex", 0), r.$search.focus(), window.setTimeout(function() { r.$search.focus() }, 0) }), n.on("close", function() { r.$search.attr("tabindex", -1), r.$search.val("") }), n.on("focus", function() { n.isOpen() || r.$search.focus() }), n.on("results:all", function(t) { if (null == t.query.term || "" === t.query.term) { r.showSearch(t) ? r.$searchContainer.removeClass("select2-search--hide") : r.$searchContainer.addClass("select2-search--hide") } }) }, n.prototype.handleSearch = function(t) { if (!this._keyUpPrevented) { var e = this.$search.val();
                                this.trigger("query", { term: e }) }
                            this._keyUpPrevented = !1 }, n.prototype.showSearch = function(t, e) { return !0 }, n }), e.define("select2/dropdown/hidePlaceholder", [], function() {
                        function t(t, e, n, i) { this.placeholder = this.normalizePlaceholder(n.get("placeholder")), t.call(this, e, n, i) } return t.prototype.append = function(t, e) { e.results = this.removePlaceholder(e.results), t.call(this, e) }, t.prototype.normalizePlaceholder = function(t, e) { return "string" == typeof e && (e = { id: "", text: e }), e }, t.prototype.removePlaceholder = function(t, e) { for (var n = e.slice(0), i = e.length - 1; i >= 0; i--) { var r = e[i];
                                this.placeholder.id === r.id && n.splice(i, 1) } return n }, t }), e.define("select2/dropdown/infiniteScroll", ["jquery"], function(t) {
                        function e(t, e, n, i) { this.lastParams = {}, t.call(this, e, n, i), this.$loadingMore = this.createLoadingMore(), this.loading = !1 } return e.prototype.append = function(t, e) { this.$loadingMore.remove(), this.loading = !1, t.call(this, e), this.showLoadingMore(e) && this.$results.append(this.$loadingMore) }, e.prototype.bind = function(e, n, i) { var r = this;
                            e.call(this, n, i), n.on("query", function(t) { r.lastParams = t, r.loading = !0 }), n.on("query:append", function(t) { r.lastParams = t, r.loading = !0 }), this.$results.on("scroll", function() { var e = t.contains(document.documentElement, r.$loadingMore[0]); if (!r.loading && e) { r.$results.offset().top + r.$results.outerHeight(!1) + 50 >= r.$loadingMore.offset().top + r.$loadingMore.outerHeight(!1) && r.loadMore() } }) }, e.prototype.loadMore = function() { this.loading = !0; var e = t.extend({}, { page: 1 }, this.lastParams);
                            e.page++, this.trigger("query:append", e) }, e.prototype.showLoadingMore = function(t, e) { return e.pagination && e.pagination.more }, e.prototype.createLoadingMore = function() { var e = t('<li class="select2-results__option select2-results__option--load-more"role="treeitem" aria-disabled="true"></li>'),
                                n = this.options.get("translations").get("loadingMore"); return e.html(n(this.lastParams)), e }, e }), e.define("select2/dropdown/attachBody", ["jquery", "../utils"], function(t, e) {
                        function n(e, n, i) { this.$dropdownParent = i.get("dropdownParent") || t(document.body), e.call(this, n, i) } return n.prototype.bind = function(t, e, n) { var i = this,
                                r = !1;
                            t.call(this, e, n), e.on("open", function() { i._showDropdown(), i._attachPositioningHandler(e), r || (r = !0, e.on("results:all", function() { i._positionDropdown(), i._resizeDropdown() }), e.on("results:append", function() { i._positionDropdown(), i._resizeDropdown() })) }), e.on("close", function() { i._hideDropdown(), i._detachPositioningHandler(e) }), this.$dropdownContainer.on("mousedown", function(t) { t.stopPropagation() }) }, n.prototype.destroy = function(t) { t.call(this), this.$dropdownContainer.remove() }, n.prototype.position = function(t, e, n) { e.attr("class", n.attr("class")), e.removeClass("select2"), e.addClass("select2-container--open"), e.css({ position: "absolute", top: -999999 }), this.$container = n }, n.prototype.render = function(e) { var n = t("<span></span>"),
                                i = e.call(this); return n.append(i), this.$dropdownContainer = n, n }, n.prototype._hideDropdown = function(t) { this.$dropdownContainer.detach() }, n.prototype._attachPositioningHandler = function(n, i) { var r = this,
                                s = "scroll.select2." + i.id,
                                o = "resize.select2." + i.id,
                                a = "orientationchange.select2." + i.id,
                                l = this.$container.parents().filter(e.hasScroll);
                            l.each(function() { t(this).data("select2-scroll-position", { x: t(this).scrollLeft(), y: t(this).scrollTop() }) }), l.on(s, function(e) { var n = t(this).data("select2-scroll-position");
                                t(this).scrollTop(n.y) }), t(window).on(s + " " + o + " " + a, function(t) { r._positionDropdown(), r._resizeDropdown() }) }, n.prototype._detachPositioningHandler = function(n, i) { var r = "scroll.select2." + i.id,
                                s = "resize.select2." + i.id,
                                o = "orientationchange.select2." + i.id;
                            this.$container.parents().filter(e.hasScroll).off(r), t(window).off(r + " " + s + " " + o) }, n.prototype._positionDropdown = function() { var e = t(window),
                                n = this.$dropdown.hasClass("select2-dropdown--above"),
                                i = this.$dropdown.hasClass("select2-dropdown--below"),
                                r = null,
                                s = this.$container.offset();
                            s.bottom = s.top + this.$container.outerHeight(!1); var o = { height: this.$container.outerHeight(!1) };
                            o.top = s.top, o.bottom = s.top + o.height; var a = { height: this.$dropdown.outerHeight(!1) },
                                l = { top: e.scrollTop(), bottom: e.scrollTop() + e.height() },
                                u = l.top < s.top - a.height,
                                c = l.bottom > s.bottom + a.height,
                                h = { left: s.left, top: o.bottom },
                                p = this.$dropdownParent; "static" === p.css("position") && (p = p.offsetParent()); var d = p.offset();
                            h.top -= d.top, h.left -= d.left, n || i || (r = "below"), c || !u || n ? !u && c && n && (r = "below") : r = "above", ("above" == r || n && "below" !== r) && (h.top = o.top - d.top - a.height), null != r && (this.$dropdown.removeClass("select2-dropdown--below select2-dropdown--above").addClass("select2-dropdown--" + r), this.$container.removeClass("select2-container--below select2-container--above").addClass("select2-container--" + r)), this.$dropdownContainer.css(h) }, n.prototype._resizeDropdown = function() { var t = { width: this.$container.outerWidth(!1) + "px" };
                            this.options.get("dropdownAutoWidth") && (t.minWidth = t.width, t.position = "relative", t.width = "auto"), this.$dropdown.css(t) }, n.prototype._showDropdown = function(t) { this.$dropdownContainer.appendTo(this.$dropdownParent), this._positionDropdown(), this._resizeDropdown() }, n }), e.define("select2/dropdown/minimumResultsForSearch", [], function() {
                        function t(e) { for (var n = 0, i = 0; i < e.length; i++) { var r = e[i];
                                r.children ? n += t(r.children) : n++ } return n }

                        function e(t, e, n, i) { this.minimumResultsForSearch = n.get("minimumResultsForSearch"), this.minimumResultsForSearch < 0 && (this.minimumResultsForSearch = 1 / 0), t.call(this, e, n, i) } return e.prototype.showSearch = function(e, n) { return !(t(n.data.results) < this.minimumResultsForSearch) && e.call(this, n) }, e }), e.define("select2/dropdown/selectOnClose", [], function() {
                        function t() {} return t.prototype.bind = function(t, e, n) { var i = this;
                            t.call(this, e, n), e.on("close", function(t) { i._handleSelectOnClose(t) }) }, t.prototype._handleSelectOnClose = function(t, e) { if (e && null != e.originalSelect2Event) { var n = e.originalSelect2Event; if ("select" === n._type || "unselect" === n._type) return } var i = this.getHighlightedResults(); if (!(i.length < 1)) { var r = i.data("data");
                                null != r.element && r.element.selected || null == r.element && r.selected || this.trigger("select", { data: r }) } }, t }), e.define("select2/dropdown/closeOnSelect", [], function() {
                        function t() {} return t.prototype.bind = function(t, e, n) { var i = this;
                            t.call(this, e, n), e.on("select", function(t) { i._selectTriggered(t) }), e.on("unselect", function(t) { i._selectTriggered(t) }) }, t.prototype._selectTriggered = function(t, e) { var n = e.originalEvent;
                            n && n.ctrlKey || this.trigger("close", { originalEvent: n, originalSelect2Event: e }) }, t }), e.define("select2/i18n/en", [], function() { return { errorLoading: function() { return "The results could not be loaded." }, inputTooLong: function(t) { var e = t.input.length - t.maximum,
                                    n = "Please delete " + e + " character"; return 1 != e && (n += "s"), n }, inputTooShort: function(t) { return "Please enter " + (t.minimum - t.input.length) + " or more characters" }, loadingMore: function() { return "Loading more results…" }, maximumSelected: function(t) { var e = "You can only select " + t.maximum + " item"; return 1 != t.maximum && (e += "s"), e }, noResults: function() { return "No results found" }, searching: function() { return "Searching…" } } }), e.define("select2/defaults", ["jquery", "require", "./results", "./selection/single", "./selection/multiple", "./selection/placeholder", "./selection/allowClear", "./selection/search", "./selection/eventRelay", "./utils", "./translation", "./diacritics", "./data/select", "./data/array", "./data/ajax", "./data/tags", "./data/tokenizer", "./data/minimumInputLength", "./data/maximumInputLength", "./data/maximumSelectionLength", "./dropdown", "./dropdown/search", "./dropdown/hidePlaceholder", "./dropdown/infiniteScroll", "./dropdown/attachBody", "./dropdown/minimumResultsForSearch", "./dropdown/selectOnClose", "./dropdown/closeOnSelect", "./i18n/en"], function(t, e, n, i, r, s, o, a, l, u, c, h, p, d, f, g, m, v, y, _, x, b, w, T, C, S, k, A, E) {
                        function P() { this.reset() } return P.prototype.apply = function(h) { if (h = t.extend(!0, {}, this.defaults, h), null == h.dataAdapter) { if (null != h.ajax ? h.dataAdapter = f : null != h.data ? h.dataAdapter = d : h.dataAdapter = p, h.minimumInputLength > 0 && (h.dataAdapter = u.Decorate(h.dataAdapter, v)), h.maximumInputLength > 0 && (h.dataAdapter = u.Decorate(h.dataAdapter, y)), h.maximumSelectionLength > 0 && (h.dataAdapter = u.Decorate(h.dataAdapter, _)), h.tags && (h.dataAdapter = u.Decorate(h.dataAdapter, g)), null == h.tokenSeparators && null == h.tokenizer || (h.dataAdapter = u.Decorate(h.dataAdapter, m)), null != h.query) { var E = e(h.amdBase + "compat/query");
                                    h.dataAdapter = u.Decorate(h.dataAdapter, E) } if (null != h.initSelection) { var P = e(h.amdBase + "compat/initSelection");
                                    h.dataAdapter = u.Decorate(h.dataAdapter, P) } } if (null == h.resultsAdapter && (h.resultsAdapter = n, null != h.ajax && (h.resultsAdapter = u.Decorate(h.resultsAdapter, T)), null != h.placeholder && (h.resultsAdapter = u.Decorate(h.resultsAdapter, w)), h.selectOnClose && (h.resultsAdapter = u.Decorate(h.resultsAdapter, k))), null == h.dropdownAdapter) { if (h.multiple) h.dropdownAdapter = x;
                                else { var D = u.Decorate(x, b);
                                    h.dropdownAdapter = D } if (0 !== h.minimumResultsForSearch && (h.dropdownAdapter = u.Decorate(h.dropdownAdapter, S)), h.closeOnSelect && (h.dropdownAdapter = u.Decorate(h.dropdownAdapter, A)), null != h.dropdownCssClass || null != h.dropdownCss || null != h.adaptDropdownCssClass) { var O = e(h.amdBase + "compat/dropdownCss");
                                    h.dropdownAdapter = u.Decorate(h.dropdownAdapter, O) }
                                h.dropdownAdapter = u.Decorate(h.dropdownAdapter, C) } if (null == h.selectionAdapter) { if (h.multiple ? h.selectionAdapter = r : h.selectionAdapter = i, null != h.placeholder && (h.selectionAdapter = u.Decorate(h.selectionAdapter, s)), h.allowClear && (h.selectionAdapter = u.Decorate(h.selectionAdapter, o)), h.multiple && (h.selectionAdapter = u.Decorate(h.selectionAdapter, a)), null != h.containerCssClass || null != h.containerCss || null != h.adaptContainerCssClass) { var F = e(h.amdBase + "compat/containerCss");
                                    h.selectionAdapter = u.Decorate(h.selectionAdapter, F) }
                                h.selectionAdapter = u.Decorate(h.selectionAdapter, l) } if ("string" == typeof h.language)
                                if (h.language.indexOf("-") > 0) { var M = h.language.split("-"),
                                        N = M[0];
                                    h.language = [h.language, N] } else h.language = [h.language];
                            if (t.isArray(h.language)) { var $ = new c;
                                h.language.push("en"); for (var R = h.language, j = 0; j < R.length; j++) { var L = R[j],
                                        z = {}; try { z = c.loadPath(L) } catch (t) { try { L = this.defaults.amdLanguageBase + L, z = c.loadPath(L) } catch (t) { h.debug && window.console && console.warn && console.warn('Select2: The language file for "' + L + '" could not be automatically loaded. A fallback will be used instead.'); continue } }
                                    $.extend(z) }
                                h.translations = $ } else { var B = c.loadPath(this.defaults.amdLanguageBase + "en"),
                                    q = new c(h.language);
                                q.extend(B), h.translations = q } return h }, P.prototype.reset = function() {
                            function e(t) {
                                function e(t) { return h[t] || t } return t.replace(/[^\u0000-\u007E]/g, e) }

                            function n(i, r) { if ("" === t.trim(i.term)) return r; if (r.children && r.children.length > 0) { for (var s = t.extend(!0, {}, r), o = r.children.length - 1; o >= 0; o--) { null == n(i, r.children[o]) && s.children.splice(o, 1) } return s.children.length > 0 ? s : n(i, s) } var a = e(r.text).toUpperCase(),
                                    l = e(i.term).toUpperCase(); return a.indexOf(l) > -1 ? r : null }
                            this.defaults = { amdBase: "./", amdLanguageBase: "./i18n/", closeOnSelect: !0, debug: !1, dropdownAutoWidth: !1, escapeMarkup: u.escapeMarkup, language: E, matcher: n, minimumInputLength: 0, maximumInputLength: 0, maximumSelectionLength: 0, minimumResultsForSearch: 0, selectOnClose: !1, sorter: function(t) { return t }, templateResult: function(t) { return t.text }, templateSelection: function(t) { return t.text }, theme: "default", width: "resolve" } }, P.prototype.set = function(e, n) { var i = t.camelCase(e),
                                r = {};
                            r[i] = n; var s = u._convertData(r);
                            t.extend(this.defaults, s) }, new P }), e.define("select2/options", ["require", "jquery", "./defaults", "./utils"], function(t, e, n, i) {
                        function r(e, r) { if (this.options = e, null != r && this.fromElement(r), this.options = n.apply(this.options), r && r.is("input")) { var s = t(this.get("amdBase") + "compat/inputData");
                                this.options.dataAdapter = i.Decorate(this.options.dataAdapter, s) } } return r.prototype.fromElement = function(t) { var n = ["select2"];
                            null == this.options.multiple && (this.options.multiple = t.prop("multiple")), null == this.options.disabled && (this.options.disabled = t.prop("disabled")), null == this.options.language && (t.prop("lang") ? this.options.language = t.prop("lang").toLowerCase() : t.closest("[lang]").prop("lang") && (this.options.language = t.closest("[lang]").prop("lang"))), null == this.options.dir && (t.prop("dir") ? this.options.dir = t.prop("dir") : t.closest("[dir]").prop("dir") ? this.options.dir = t.closest("[dir]").prop("dir") : this.options.dir = "ltr"), t.prop("disabled", this.options.disabled), t.prop("multiple", this.options.multiple), t.data("select2Tags") && (this.options.debug && window.console && console.warn && console.warn('Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'), t.data("data", t.data("select2Tags")), t.data("tags", !0)), t.data("ajaxUrl") && (this.options.debug && window.console && console.warn && console.warn("Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."), t.attr("ajax--url", t.data("ajaxUrl")), t.data("ajax--url", t.data("ajaxUrl"))); var r = {};
                            r = e.fn.jquery && "1." == e.fn.jquery.substr(0, 2) && t[0].dataset ? e.extend(!0, {}, t[0].dataset, t.data()) : t.data(); var s = e.extend(!0, {}, r);
                            s = i._convertData(s); for (var o in s) e.inArray(o, n) > -1 || (e.isPlainObject(this.options[o]) ? e.extend(this.options[o], s[o]) : this.options[o] = s[o]); return this }, r.prototype.get = function(t) { return this.options[t] }, r.prototype.set = function(t, e) { this.options[t] = e }, r }), e.define("select2/core", ["jquery", "./options", "./utils", "./keys"], function(t, e, n, i) { var r = function(t, n) { null != t.data("select2") && t.data("select2").destroy(), this.$element = t, this.id = this._generateId(t), n = n || {}, this.options = new e(n, t), r.__super__.constructor.call(this); var i = t.attr("tabindex") || 0;
                            t.data("old-tabindex", i), t.attr("tabindex", "-1"); var s = this.options.get("dataAdapter");
                            this.dataAdapter = new s(t, this.options); var o = this.render();
                            this._placeContainer(o); var a = this.options.get("selectionAdapter");
                            this.selection = new a(t, this.options), this.$selection = this.selection.render(), this.selection.position(this.$selection, o); var l = this.options.get("dropdownAdapter");
                            this.dropdown = new l(t, this.options), this.$dropdown = this.dropdown.render(), this.dropdown.position(this.$dropdown, o); var u = this.options.get("resultsAdapter");
                            this.results = new u(t, this.options, this.dataAdapter), this.$results = this.results.render(), this.results.position(this.$results, this.$dropdown); var c = this;
                            this._bindAdapters(), this._registerDomEvents(), this._registerDataEvents(), this._registerSelectionEvents(), this._registerDropdownEvents(), this._registerResultsEvents(), this._registerEvents(), this.dataAdapter.current(function(t) { c.trigger("selection:update", { data: t }) }), t.addClass("select2-hidden-accessible"), t.attr("aria-hidden", "true"), this._syncAttributes(), t.data("select2", this) }; return n.Extend(r, n.Observable), r.prototype._generateId = function(t) { var e = ""; return e = null != t.attr("id") ? t.attr("id") : null != t.attr("name") ? t.attr("name") + "-" + n.generateChars(2) : n.generateChars(4), e = e.replace(/(:|\.|\[|\]|,)/g, ""), e = "select2-" + e }, r.prototype._placeContainer = function(t) { t.insertAfter(this.$element); var e = this._resolveWidth(this.$element, this.options.get("width"));
                            null != e && t.css("width", e) }, r.prototype._resolveWidth = function(t, e) { var n = /^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i; if ("resolve" == e) { var i = this._resolveWidth(t, "style"); return null != i ? i : this._resolveWidth(t, "element") } if ("element" == e) { var r = t.outerWidth(!1); return r <= 0 ? "auto" : r + "px" } if ("style" == e) { var s = t.attr("style"); if ("string" != typeof s) return null; for (var o = s.split(";"), a = 0, l = o.length; a < l; a += 1) { var u = o[a].replace(/\s/g, ""),
                                        c = u.match(n); if (null !== c && c.length >= 1) return c[1] } return null } return e }, r.prototype._bindAdapters = function() { this.dataAdapter.bind(this, this.$container), this.selection.bind(this, this.$container), this.dropdown.bind(this, this.$container), this.results.bind(this, this.$container) }, r.prototype._registerDomEvents = function() { var e = this;
                            this.$element.on("change.select2", function() { e.dataAdapter.current(function(t) { e.trigger("selection:update", { data: t }) }) }), this.$element.on("focus.select2", function(t) { e.trigger("focus", t) }), this._syncA = n.bind(this._syncAttributes, this), this._syncS = n.bind(this._syncSubtree, this), this.$element[0].attachEvent && this.$element[0].attachEvent("onpropertychange", this._syncA); var i = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
                            null != i ? (this._observer = new i(function(n) { t.each(n, e._syncA), t.each(n, e._syncS) }), this._observer.observe(this.$element[0], { attributes: !0, childList: !0, subtree: !1 })) : this.$element[0].addEventListener && (this.$element[0].addEventListener("DOMAttrModified", e._syncA, !1), this.$element[0].addEventListener("DOMNodeInserted", e._syncS, !1), this.$element[0].addEventListener("DOMNodeRemoved", e._syncS, !1)) }, r.prototype._registerDataEvents = function() { var t = this;
                            this.dataAdapter.on("*", function(e, n) { t.trigger(e, n) }) }, r.prototype._registerSelectionEvents = function() { var e = this,
                                n = ["toggle", "focus"];
                            this.selection.on("toggle", function() { e.toggleDropdown() }), this.selection.on("focus", function(t) { e.focus(t) }), this.selection.on("*", function(i, r) {-1 === t.inArray(i, n) && e.trigger(i, r) }) }, r.prototype._registerDropdownEvents = function() { var t = this;
                            this.dropdown.on("*", function(e, n) { t.trigger(e, n) }) }, r.prototype._registerResultsEvents = function() { var t = this;
                            this.results.on("*", function(e, n) { t.trigger(e, n) }) }, r.prototype._registerEvents = function() { var t = this;
                            this.on("open", function() { t.$container.addClass("select2-container--open") }), this.on("close", function() { t.$container.removeClass("select2-container--open") }), this.on("enable", function() { t.$container.removeClass("select2-container--disabled") }), this.on("disable", function() { t.$container.addClass("select2-container--disabled") }), this.on("blur", function() { t.$container.removeClass("select2-container--focus") }), this.on("query", function(e) { t.isOpen() || t.trigger("open", {}), this.dataAdapter.query(e, function(n) { t.trigger("results:all", { data: n, query: e }) }) }), this.on("query:append", function(e) { this.dataAdapter.query(e, function(n) { t.trigger("results:append", { data: n, query: e }) }) }), this.on("keypress", function(e) { var n = e.which;
                                t.isOpen() ? n === i.ESC || n === i.TAB || n === i.UP && e.altKey ? (t.close(), e.preventDefault()) : n === i.ENTER ? (t.trigger("results:select", {}), e.preventDefault()) : n === i.SPACE && e.ctrlKey ? (t.trigger("results:toggle", {}), e.preventDefault()) : n === i.UP ? (t.trigger("results:previous", {}), e.preventDefault()) : n === i.DOWN && (t.trigger("results:next", {}), e.preventDefault()) : (n === i.ENTER || n === i.SPACE || n === i.DOWN && e.altKey) && (t.open(), e.preventDefault()) }) }, r.prototype._syncAttributes = function() { this.options.set("disabled", this.$element.prop("disabled")), this.options.get("disabled") ? (this.isOpen() && this.close(), this.trigger("disable", {})) : this.trigger("enable", {}) }, r.prototype._syncSubtree = function(t, e) { var n = !1,
                                i = this; if (!t || !t.target || "OPTION" === t.target.nodeName || "OPTGROUP" === t.target.nodeName) { if (e)
                                    if (e.addedNodes && e.addedNodes.length > 0)
                                        for (var r = 0; r < e.addedNodes.length; r++) { var s = e.addedNodes[r];
                                            s.selected && (n = !0) } else e.removedNodes && e.removedNodes.length > 0 && (n = !0);
                                    else n = !0;
                                n && this.dataAdapter.current(function(t) { i.trigger("selection:update", { data: t }) }) } }, r.prototype.trigger = function(t, e) { var n = r.__super__.trigger,
                                i = { open: "opening", close: "closing", select: "selecting", unselect: "unselecting" }; if (void 0 === e && (e = {}), t in i) { var s = i[t],
                                    o = { prevented: !1, name: t, args: e }; if (n.call(this, s, o), o.prevented) return void(e.prevented = !0) }
                            n.call(this, t, e) }, r.prototype.toggleDropdown = function() { this.options.get("disabled") || (this.isOpen() ? this.close() : this.open()) }, r.prototype.open = function() { this.isOpen() || this.trigger("query", {}) }, r.prototype.close = function() { this.isOpen() && this.trigger("close", {}) }, r.prototype.isOpen = function() { return this.$container.hasClass("select2-container--open") }, r.prototype.hasFocus = function() { return this.$container.hasClass("select2-container--focus") }, r.prototype.focus = function(t) { this.hasFocus() || (this.$container.addClass("select2-container--focus"), this.trigger("focus", {})) }, r.prototype.enable = function(t) { this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.'), null != t && 0 !== t.length || (t = [!0]); var e = !t[0];
                            this.$element.prop("disabled", e) }, r.prototype.data = function() { this.options.get("debug") && arguments.length > 0 && window.console && console.warn && console.warn('Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.'); var t = []; return this.dataAdapter.current(function(e) { t = e }), t }, r.prototype.val = function(e) { if (this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'), null == e || 0 === e.length) return this.$element.val(); var n = e[0];
                            t.isArray(n) && (n = t.map(n, function(t) { return t.toString() })), this.$element.val(n).trigger("change") }, r.prototype.destroy = function() { this.$container.remove(), this.$element[0].detachEvent && this.$element[0].detachEvent("onpropertychange", this._syncA), null != this._observer ? (this._observer.disconnect(), this._observer = null) : this.$element[0].removeEventListener && (this.$element[0].removeEventListener("DOMAttrModified", this._syncA, !1), this.$element[0].removeEventListener("DOMNodeInserted", this._syncS, !1), this.$element[0].removeEventListener("DOMNodeRemoved", this._syncS, !1)), this._syncA = null, this._syncS = null, this.$element.off(".select2"), this.$element.attr("tabindex", this.$element.data("old-tabindex")), this.$element.removeClass("select2-hidden-accessible"), this.$element.attr("aria-hidden", "false"), this.$element.removeData("select2"), this.dataAdapter.destroy(), this.selection.destroy(), this.dropdown.destroy(), this.results.destroy(), this.dataAdapter = null, this.selection = null, this.dropdown = null, this.results = null }, r.prototype.render = function() { var e = t('<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>'); return e.attr("dir", this.options.get("dir")), this.$container = e, this.$container.addClass("select2-container--" + this.options.get("theme")), e.data("element", this.$element), e }, r }), e.define("jquery-mousewheel", ["jquery"], function(t) { return t }),
                    e.define("jquery.select2", ["jquery", "jquery-mousewheel", "./select2/core", "./select2/defaults"], function(t, e, n, i) { if (null == t.fn.select2) { var r = ["open", "close", "destroy"];
                            t.fn.select2 = function(e) { if ("object" == typeof(e = e || {})) return this.each(function() { var i = t.extend(!0, {}, e);
                                    new n(t(this), i) }), this; if ("string" == typeof e) { var i, s = Array.prototype.slice.call(arguments, 1); return this.each(function() { var n = t(this).data("select2");
                                        null == n && window.console && console.error && console.error("The select2('" + e + "') method was called on an element that is not using Select2."), i = n[e].apply(n, s) }), t.inArray(e, r) > -1 ? this : i } throw new Error("Invalid arguments for Select2: " + e) } } return null == t.fn.select2.defaults && (t.fn.select2.defaults = i), n }), { define: e.define, require: e.require }
            }(),
            n = e.require("jquery.select2");
        return t.fn.select2.amd = e, n
    }),
    function(t, e) { "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.AOS = e() : t.AOS = e() }(this, function() { return function(t) {
            function e(i) { if (n[i]) return n[i].exports; var r = n[i] = { exports: {}, id: i, loaded: !1 }; return t[i].call(r.exports, r, r.exports, e), r.loaded = !0, r.exports } var n = {}; return e.m = t, e.c = n, e.p = "dist/", e(0) }([function(t, e, n) { "use strict";

            function i(t) { return t && t.__esModule ? t : { default: t } } var r = Object.assign || function(t) { for (var e = 1; e < arguments.length; e++) { var n = arguments[e]; for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]) } return t },
                s = n(1),
                o = (i(s), n(5)),
                a = i(o),
                l = n(6),
                u = i(l),
                c = n(7),
                h = i(c),
                p = n(8),
                d = i(p),
                f = n(9),
                g = i(f),
                m = n(10),
                v = i(m),
                y = n(13),
                _ = i(y),
                x = [],
                b = !1,
                w = document.all && !window.atob,
                T = { offset: 120, delay: 0, easing: "ease", duration: 400, disable: !1, once: !1, startEvent: "DOMContentLoaded" },
                C = function() { return !(arguments.length <= 0 || void 0 === arguments[0]) && arguments[0] && (b = !0), b ? (x = (0, v.default)(x, T), (0, g.default)(x, T.once), x) : void 0 },
                S = function() { x = (0, _.default)(), C() },
                k = function() { x.forEach(function(t, e) { t.node.removeAttribute("data-aos"), t.node.removeAttribute("data-aos-easing"), t.node.removeAttribute("data-aos-duration"), t.node.removeAttribute("data-aos-delay") }) },
                A = function(t) { return !0 === t || "mobile" === t && d.default.mobile() || "phone" === t && d.default.phone() || "tablet" === t && d.default.tablet() || "function" == typeof t && !0 === t() },
                E = function(t) { return T = r(T, t), x = (0, _.default)(), A(T.disable) || w ? k() : (document.querySelector("body").setAttribute("data-aos-easing", T.easing), document.querySelector("body").setAttribute("data-aos-duration", T.duration), document.querySelector("body").setAttribute("data-aos-delay", T.delay), "DOMContentLoaded" === T.startEvent && ["complete", "interactive"].indexOf(document.readyState) > -1 ? C(!0) : "load" === T.startEvent ? window.addEventListener(T.startEvent, function() { C(!0) }) : document.addEventListener(T.startEvent, function() { C(!0) }), window.addEventListener("resize", (0, u.default)(C, 50, !0)), window.addEventListener("orientationchange", (0, u.default)(C, 50, !0)), window.addEventListener("scroll", (0, a.default)(function() {
                        (0, g.default)(x, T.once) }, 99)), document.addEventListener("DOMNodeRemoved", function(t) { var e = t.target;
                        e && 1 === e.nodeType && e.hasAttribute && e.hasAttribute("data-aos") && (0, u.default)(S, 50, !0) }), (0, h.default)("[data-aos]", S), x) };
            t.exports = { init: E, refresh: C, refreshHard: S } }, function(t, e) {}, , , , function(t, e, n) { "use strict";

            function i(t, e, n) { var i = !0,
                    s = !0; if ("function" != typeof t) throw new TypeError(a); return r(n) && (i = "leading" in n ? !!n.leading : i, s = "trailing" in n ? !!n.trailing : s), o(t, e, { leading: i, maxWait: e, trailing: s }) }

            function r(t) { var e = void 0 === t ? "undefined" : s(t); return !!t && ("object" == e || "function" == e) } var s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) { return typeof t } : function(t) { return t && "function" == typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t },
                o = n(6),
                a = "Expected a function";
            t.exports = i }, function(t, e) { "use strict";

            function n(t, e, n) {
                function i(e) { var n = g,
                        i = m; return g = m = void 0, C = e, y = t.apply(i, n) }

                function s(t) { return C = t, _ = setTimeout(c, e), S ? i(t) : y }

                function o(t) { var n = t - x,
                        i = t - C,
                        r = e - n; return k ? w(r, v - i) : r }

                function l(t) { var n = t - x,
                        i = t - C; return !x || n >= e || 0 > n || k && i >= v }

                function c() { var t = T(); return l(t) ? h(t) : void(_ = setTimeout(c, o(t))) }

                function h(t) { return clearTimeout(_), _ = void 0, A && g ? i(t) : (g = m = void 0, y) }

                function p() { void 0 !== _ && clearTimeout(_), x = C = 0, g = m = _ = void 0 }

                function d() { return void 0 === _ ? y : h(T()) }

                function f() { var t = T(),
                        n = l(t); if (g = arguments, m = this, x = t, n) { if (void 0 === _) return s(x); if (k) return clearTimeout(_), _ = setTimeout(c, e), i(x) } return void 0 === _ && (_ = setTimeout(c, e)), y } var g, m, v, y, _, x = 0,
                    C = 0,
                    S = !1,
                    k = !1,
                    A = !0; if ("function" != typeof t) throw new TypeError(u); return e = a(e) || 0, r(n) && (S = !!n.leading, k = "maxWait" in n, v = k ? b(a(n.maxWait) || 0, e) : v, A = "trailing" in n ? !!n.trailing : A), f.cancel = p, f.flush = d, f }

            function i(t) { var e = r(t) ? x.call(t) : ""; return e == h || e == p }

            function r(t) { var e = void 0 === t ? "undefined" : l(t); return !!t && ("object" == e || "function" == e) }

            function s(t) { return !!t && "object" == (void 0 === t ? "undefined" : l(t)) }

            function o(t) { return "symbol" == (void 0 === t ? "undefined" : l(t)) || s(t) && x.call(t) == d }

            function a(t) { if ("number" == typeof t) return t; if (o(t)) return c; if (r(t)) { var e = i(t.valueOf) ? t.valueOf() : t;
                    t = r(e) ? e + "" : e } if ("string" != typeof t) return 0 === t ? t : +t;
                t = t.replace(f, ""); var n = m.test(t); return n || v.test(t) ? y(t.slice(2), n ? 2 : 8) : g.test(t) ? c : +t } var l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) { return typeof t } : function(t) { return t && "function" == typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t },
                u = "Expected a function",
                c = NaN,
                h = "[object Function]",
                p = "[object GeneratorFunction]",
                d = "[object Symbol]",
                f = /^\s+|\s+$/g,
                g = /^[-+]0x[0-9a-f]+$/i,
                m = /^0b[01]+$/i,
                v = /^0o[0-7]+$/i,
                y = parseInt,
                _ = Object.prototype,
                x = _.toString,
                b = Math.max,
                w = Math.min,
                T = Date.now;
            t.exports = n }, function(t, e) { "use strict";

            function n(t, e) { o.push({ selector: t, fn: e }), !a && s && (a = new s(i), a.observe(r.documentElement, { childList: !0, subtree: !0, removedNodes: !0 })), i() }

            function i() { for (var t, e, n = 0, i = o.length; i > n; n++) { t = o[n], e = r.querySelectorAll(t.selector); for (var s, a = 0, l = e.length; l > a; a++) s = e[a], s.ready || (s.ready = !0, t.fn.call(s, s)) } }
            Object.defineProperty(e, "__esModule", { value: !0 }); var r = window.document,
                s = window.MutationObserver || window.WebKitMutationObserver,
                o = [],
                a = void 0;
            e.default = n }, function(t, e) { "use strict";

            function n(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }
            Object.defineProperty(e, "__esModule", { value: !0 }); var i = function() {
                    function t(t, e) { for (var n = 0; n < e.length; n++) { var i = e[n];
                            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i) } } return function(e, n, i) { return n && t(e.prototype, n), i && t(e, i), e } }(),
                r = function() {
                    function t() { n(this, t) } return i(t, [{ key: "phone", value: function() { var t = !1; return function(e) {
                                (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(e) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0, 4))) && (t = !0) }(navigator.userAgent || navigator.vendor || window.opera), t } }, { key: "mobile", value: function() { var t = !1; return function(e) {
                                (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(e) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0, 4))) && (t = !0) }(navigator.userAgent || navigator.vendor || window.opera), t } }, { key: "tablet", value: function() { return this.mobile() && !this.phone() } }]), t }();
            e.default = new r }, function(t, e) { "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 }); var n = function(t, e, n) { var i = t.node.getAttribute("data-aos-once");
                    e > t.position ? t.node.classList.add("aos-animate") : void 0 !== i && ("false" === i || !n && "true" !== i) && t.node.classList.remove("aos-animate") },
                i = function(t, e) { var i = window.pageYOffset,
                        r = window.innerHeight;
                    t.forEach(function(t, s) { n(t, r + i, e) }) };
            e.default = i }, function(t, e, n) { "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 }); var i = n(11),
                r = function(t) { return t && t.__esModule ? t : { default: t } }(i),
                s = function(t, e) { return t.forEach(function(t, n) { t.node.classList.add("aos-init"), t.position = (0, r.default)(t.node, e.offset) }), t };
            e.default = s }, function(t, e, n) { "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 }); var i = n(12),
                r = function(t) { return t && t.__esModule ? t : { default: t } }(i),
                s = function(t, e) { var n = 0,
                        i = 0,
                        s = window.innerHeight,
                        o = { offset: t.getAttribute("data-aos-offset"), anchor: t.getAttribute("data-aos-anchor"), anchorPlacement: t.getAttribute("data-aos-anchor-placement") }; switch (o.offset && !isNaN(o.offset) && (i = parseInt(o.offset)), o.anchor && document.querySelectorAll(o.anchor) && (t = document.querySelectorAll(o.anchor)[0]), n = (0, r.default)(t).top, o.anchorPlacement) {
                        case "top-bottom":
                            break;
                        case "center-bottom":
                            n += t.offsetHeight / 2; break;
                        case "bottom-bottom":
                            n += t.offsetHeight; break;
                        case "top-center":
                            n += s / 2; break;
                        case "bottom-center":
                            n += s / 2 + t.offsetHeight; break;
                        case "center-center":
                            n += s / 2 + t.offsetHeight / 2; break;
                        case "top-top":
                            n += s; break;
                        case "bottom-top":
                            n += t.offsetHeight + s; break;
                        case "center-top":
                            n += t.offsetHeight / 2 + s } return o.anchorPlacement || o.offset || isNaN(e) || (i = e), n + i };
            e.default = s }, function(t, e) { "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 }); var n = function(t) { for (var e = 0, n = 0; t && !isNaN(t.offsetLeft) && !isNaN(t.offsetTop);) e += t.offsetLeft - ("BODY" != t.tagName ? t.scrollLeft : 0), n += t.offsetTop - ("BODY" != t.tagName ? t.scrollTop : 0), t = t.offsetParent; return { top: n, left: e } };
            e.default = n }, function(t, e) { "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 }); var n = function(t) { t = t || document.querySelectorAll("[data-aos]"); var e = []; return [].forEach.call(t, function(t, n) { e.push({ node: t }) }), e };
            e.default = n }]) }),
    function(t, e) { "object" == typeof exports && "undefined" != typeof module ? e(require("jquery"), require("window")) : "function" == typeof define && define.amd ? define("isInViewport", ["jquery", "window"], e) : e(t.$, t.window) }(this, function(t, e) {
        "use strict";

        function n(e) { var n = this; if (1 === arguments.length && "function" == typeof e && (e = [e]), !(e instanceof Array)) throw new SyntaxError("isInViewport: Argument(s) passed to .do/.run should be a function or an array of functions"); return e.forEach(function(e) { "function" != typeof e ? (console.warn("isInViewport: Argument(s) passed to .do/.run should be a function or an array of functions"), console.warn("isInViewport: Ignoring non-function values in array and moving on")) : [].slice.call(n).forEach(function(n) { return e.call(t(n)) }) }), this }

        function i(e) { var n = t("<div></div>").css({ width: "100%" });
            e.append(n); var i = e.width() - n.width(); return n.remove(), i }

        function r(n, s) { var o = n.getBoundingClientRect(),
                a = o.top,
                l = o.bottom,
                u = o.left,
                c = o.right,
                h = t.extend({ tolerance: 0, viewport: e }, s),
                p = !1,
                d = h.viewport.jquery ? h.viewport : t(h.viewport);
            d.length || (console.warn("isInViewport: The viewport selector you have provided matches no element on page."), console.warn("isInViewport: Defaulting to viewport as window"), d = t(e)); var f = d.height(),
                g = d.width(),
                m = d[0].toString(); if (d[0] !== e && "[object Window]" !== m && "[object DOMWindow]" !== m) { var v = d[0].getBoundingClientRect();
                a -= v.top, l -= v.top, u -= v.left, c -= v.left, r.scrollBarWidth = r.scrollBarWidth || i(d), g -= r.scrollBarWidth } return h.tolerance = ~~Math.round(parseFloat(h.tolerance)), h.tolerance < 0 && (h.tolerance = f + h.tolerance), c <= 0 || u >= g ? p : p = h.tolerance ? a <= h.tolerance && l >= h.tolerance : l > 0 && a <= f }

        function s(e) { if (e) { var n = e.split(","); return 1 === n.length && isNaN(n[0]) && (n[1] = n[0], n[0] = void 0), { tolerance: n[0] ? n[0].trim() : void 0, viewport: n[1] ? t(n[1].trim()) : void 0 } } return {} }
        t = "default" in t ? t.default : t, e = "default" in e ? e.default : e,
            /**
             * @author  Mudit Ameta
             * @license https://github.com/zeusdeux/isInViewport/blob/master/license.md MIT
             */
            t.extend(t.expr[":"], { "in-viewport": t.expr.createPseudo ? t.expr.createPseudo(function(t) { return function(e) { return r(e, s(t)) } }) : function(t, e, n) { return r(t, s(n[3])) } }), t.fn.isInViewport = function(t) { return this.filter(function(e, n) { return r(n, t) }) }, t.fn.run = n
    });
/*!
 * VERSION: 0.8.11
 * DATE: 2018-02-15
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
 * MorphSVGPlugin is a Club GreenSock membership benefit; You must have a valid membership to use
 * this code without violating the terms of use. Visit http://greensock.com/club/ to sign up or get more details.
 * This work is subject to the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() { "use strict"; var t = Math.PI / 180,
            e = 180 / Math.PI,
            n = /[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
            i = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
            r = /(^[#\.][a-z]|[a-y][a-z])/gi,
            s = /[achlmqstvz]/gi,
            o = /[\+\-]?\d*\.?\d+e[\+\-]?\d+/gi,
            a = _gsScope._gsDefine.globals.TweenLite,
            l = function(t) { _gsScope.console && console.log(t) },
            u = function(e, n) { var i, r, s, o, a, l, u = Math.ceil(Math.abs(n) / 90),
                    c = 0,
                    h = []; for (e *= t, n *= t, i = n / u, r = 4 / 3 * Math.sin(i / 2) / (1 + Math.cos(i / 2)), l = 0; l < u; l++) s = e + l * i, o = Math.cos(s), a = Math.sin(s), h[c++] = o - r * a, h[c++] = a + r * o, s += i, o = Math.cos(s), a = Math.sin(s), h[c++] = o + r * a, h[c++] = a - r * o, h[c++] = o, h[c++] = a; return h },
            c = function(n, i, r, s, o, a, l, c, h) { if (n !== c || i !== h) { r = Math.abs(r), s = Math.abs(s); var p = o % 360 * t,
                        d = Math.cos(p),
                        f = Math.sin(p),
                        g = (n - c) / 2,
                        m = (i - h) / 2,
                        v = d * g + f * m,
                        y = -f * g + d * m,
                        _ = r * r,
                        x = s * s,
                        b = v * v,
                        w = y * y,
                        T = b / _ + w / x;
                    T > 1 && (r = Math.sqrt(T) * r, s = Math.sqrt(T) * s, _ = r * r, x = s * s); var C = a === l ? -1 : 1,
                        S = (_ * x - _ * w - x * b) / (_ * w + x * b);
                    S < 0 && (S = 0); var k = C * Math.sqrt(S),
                        A = k * (r * y / s),
                        E = k * (-s * v / r),
                        P = (n + c) / 2,
                        D = (i + h) / 2,
                        O = P + (d * A - f * E),
                        F = D + (f * A + d * E),
                        M = (v - A) / r,
                        N = (y - E) / s,
                        $ = (-v - A) / r,
                        R = (-y - E) / s,
                        j = Math.sqrt(M * M + N * N),
                        L = M;
                    C = N < 0 ? -1 : 1; var z = C * Math.acos(L / j) * e;
                    j = Math.sqrt((M * M + N * N) * ($ * $ + R * R)), L = M * $ + N * R, C = M * R - N * $ < 0 ? -1 : 1; var B = C * Math.acos(L / j) * e;!l && B > 0 ? B -= 360 : l && B < 0 && (B += 360), B %= 360, z %= 360; var q, I, H, W = u(z, B),
                        X = d * r,
                        U = f * r,
                        V = f * -s,
                        Y = d * s,
                        G = W.length - 2; for (q = 0; q < G; q += 2) I = W[q], H = W[q + 1], W[q] = I * X + H * V + O, W[q + 1] = I * U + H * Y + F; return W[W.length - 2] = c, W[W.length - 1] = h, W } },
            h = function(t) { var e, i, r, s, a, u, h, p, d, f, g, m, v, y = (t + "").replace(o, function(t) { var e = +t; return e < 1e-4 && e > -1e-4 ? 0 : e }).match(n) || [],
                    _ = [],
                    x = 0,
                    b = 0,
                    w = y.length,
                    T = 2,
                    C = 0; if (!t || !isNaN(y[0]) || isNaN(y[1])) return l("ERROR: malformed path data: " + t), _; for (e = 0; e < w; e++)
                    if (v = a, isNaN(y[e]) ? (a = y[e].toUpperCase(), u = a !== y[e]) : e--, r = +y[e + 1], s = +y[e + 2], u && (r += x, s += b), 0 === e && (p = r, d = s), "M" === a) h && h.length < 8 && (_.length -= 1, T = 0), x = p = r, b = d = s, h = [r, s], C += T, T = 2, _.push(h), e += 2, a = "L";
                    else if ("C" === a) h || (h = [0, 0]), h[T++] = r, h[T++] = s, u || (x = b = 0), h[T++] = x + 1 * y[e + 3], h[T++] = b + 1 * y[e + 4], h[T++] = x += 1 * y[e + 5], h[T++] = b += 1 * y[e + 6], e += 6;
                else if ("S" === a) "C" === v || "S" === v ? (f = x - h[T - 4], g = b - h[T - 3], h[T++] = x + f, h[T++] = b + g) : (h[T++] = x, h[T++] = b), h[T++] = r, h[T++] = s, u || (x = b = 0), h[T++] = x += 1 * y[e + 3], h[T++] = b += 1 * y[e + 4], e += 4;
                else if ("Q" === a) f = r - x, g = s - b, h[T++] = x + 2 * f / 3, h[T++] = b + 2 * g / 3, u || (x = b = 0), x += 1 * y[e + 3], b += 1 * y[e + 4], f = r - x, g = s - b, h[T++] = x + 2 * f / 3, h[T++] = b + 2 * g / 3, h[T++] = x, h[T++] = b, e += 4;
                else if ("T" === a) f = x - h[T - 4], g = b - h[T - 3], h[T++] = x + f, h[T++] = b + g, f = x + 1.5 * f - r, g = b + 1.5 * g - s, h[T++] = r + 2 * f / 3, h[T++] = s + 2 * g / 3, h[T++] = x = r, h[T++] = b = s, e += 2;
                else if ("H" === a) s = b, h[T++] = x + (r - x) / 3, h[T++] = b + (s - b) / 3, h[T++] = x + 2 * (r - x) / 3, h[T++] = b + 2 * (s - b) / 3, h[T++] = x = r, h[T++] = s, e += 1;
                else if ("V" === a) s = r, r = x, u && (s += b - x), h[T++] = r, h[T++] = b + (s - b) / 3, h[T++] = r, h[T++] = b + 2 * (s - b) / 3, h[T++] = r, h[T++] = b = s, e += 1;
                else if ("L" === a || "Z" === a) "Z" === a && (r = p, s = d, h.closed = !0), ("L" === a || Math.abs(x - r) > .5 || Math.abs(b - s) > .5) && (h[T++] = x + (r - x) / 3, h[T++] = b + (s - b) / 3, h[T++] = x + 2 * (r - x) / 3, h[T++] = b + 2 * (s - b) / 3, h[T++] = r, h[T++] = s, "L" === a && (e += 2)), x = r, b = s;
                else if ("A" === a) { if (m = c(x, b, 1 * y[e + 1], 1 * y[e + 2], 1 * y[e + 3], 1 * y[e + 4], 1 * y[e + 5], (u ? x : 0) + 1 * y[e + 6], (u ? b : 0) + 1 * y[e + 7]))
                        for (i = 0; i < m.length; i++) h[T++] = m[i];
                    x = h[T - 2], b = h[T - 1], e += 7 } else l("Error: malformed path data: " + t); return _.totalPoints = C + T, _ },
            p = function(t, e) { var n, i, r, s, o, a, l, u, c, h, p, d, f, g, m = 0,
                    v = t.length,
                    y = e / ((v - 2) / 6); for (f = 2; f < v; f += 6)
                    for (m += y; m > .999999;) n = t[f - 2], i = t[f - 1], r = t[f], s = t[f + 1], o = t[f + 2], a = t[f + 3], l = t[f + 4], u = t[f + 5], g = 1 / (Math.floor(m) + 1), c = n + (r - n) * g, p = r + (o - r) * g, c += (p - c) * g, p += (o + (l - o) * g - p) * g, h = i + (s - i) * g, d = s + (a - s) * g, h += (d - h) * g, d += (a + (u - a) * g - d) * g, t.splice(f, 4, n + (r - n) * g, i + (s - i) * g, c, h, c + (p - c) * g, h + (d - h) * g, p, d, o + (l - o) * g, a + (u - a) * g), f += 6, v += 6, m--; return t },
            d = function(t) { var e, n, i, r, s = "",
                    o = t.length; for (n = 0; n < o; n++) { for (r = t[n], s += "M" + r[0] + "," + r[1] + " C", e = r.length, i = 2; i < e; i++) s += (100 * r[i++] | 0) / 100 + "," + (100 * r[i++] | 0) / 100 + " " + (100 * r[i++] | 0) / 100 + "," + (100 * r[i++] | 0) / 100 + " " + (100 * r[i++] | 0) / 100 + "," + (100 * r[i] | 0) / 100 + " ";
                    r.closed && (s += "z") } return s },
            f = function(t) { for (var e = [], n = t.length - 1, i = 0; --n > -1;) e[i++] = t[n], e[i++] = t[n + 1], n--; for (n = 0; n < i; n++) t[n] = e[n];
                t.reversed = !t.reversed },
            g = function(t) { var e, n = t.length,
                    i = 0,
                    r = 0; for (e = 0; e < n; e++) i += t[e++], r += t[e]; return [i / (n / 2), r / (n / 2)] },
            m = function(t) { var e, n, i, r = t.length,
                    s = t[0],
                    o = s,
                    a = t[1],
                    l = a; for (i = 6; i < r; i += 6) e = t[i], n = t[i + 1], e > s ? s = e : e < o && (o = e), n > a ? a = n : n < l && (l = n); return t.centerX = (s + o) / 2, t.centerY = (a + l) / 2, t.size = (s - o) * (a - l) },
            v = function(t) { for (var e, n, i, r, s, o = t.length, a = t[0][0], l = a, u = t[0][1], c = u; --o > -1;)
                    for (s = t[o], e = s.length, r = 6; r < e; r += 6) n = s[r], i = s[r + 1], n > a ? a = n : n < l && (l = n), i > u ? u = i : i < c && (c = i); return t.centerX = (a + l) / 2, t.centerY = (u + c) / 2, t.size = (a - l) * (u - c) },
            y = function(t, e) { return e.length - t.length },
            _ = function(t, e) { var n = t.size || m(t),
                    i = e.size || m(e); return Math.abs(i - n) < (n + i) / 20 ? e.centerX - t.centerX || e.centerY - t.centerY : i - n },
            x = function(t, e) { var n, i, r = t.slice(0),
                    s = t.length,
                    o = s - 2; for (e |= 0, n = 0; n < s; n++) i = (n + e) % o, t[n++] = r[i], t[n] = r[i + 1] },
            b = function(t, e, n, i, r) { var s, o, a, l, u = t.length,
                    c = 0,
                    h = u - 2; for (n *= 6, o = 0; o < u; o += 6) s = (o + n) % h, l = t[s] - (e[o] - i), a = t[s + 1] - (e[o + 1] - r), c += Math.sqrt(a * a + l * l); return c },
            w = function(t, e, n) { var i, r, s, o = t.length,
                    a = g(t),
                    l = g(e),
                    u = l[0] - a[0],
                    c = l[1] - a[1],
                    h = b(t, e, 0, u, c),
                    p = 0; for (s = 6; s < o; s += 6)(r = b(t, e, s / 6, u, c)) < h && (h = r, p = s); if (n)
                    for (i = t.slice(0), f(i), s = 6; s < o; s += 6)(r = b(i, e, s / 6, u, c)) < h && (h = r, p = -s); return p / 6 },
            T = function(t, e, n) { for (var i, r, s, o, a, l, u = t.length, c = 99999999999, h = 0, p = 0; --u > -1;)
                    for (i = t[u], l = i.length, a = 0; a < l; a += 6) r = i[a] - e, s = i[a + 1] - n, (o = Math.sqrt(r * r + s * s)) < c && (c = o, h = i[a], p = i[a + 1]); return [h, p] },
            C = function(t, e, n, i, r, s) { var o, a, l, u, c = e.length,
                    h = 0,
                    p = Math.min(t.size || m(t), e[n].size || m(e[n])) * i,
                    d = 999999999999,
                    f = t.centerX + r,
                    g = t.centerY + s; for (o = n; o < c && !((e[o].size || m(e[o])) < p); o++) a = e[o].centerX - f, l = e[o].centerY - g, (u = Math.sqrt(a * a + l * l)) < d && (h = o, d = u); return u = e[h], e.splice(h, 1), u },
            S = function(t, e, n, i) { var r, s, o, a, u, c, h, d = e.length - t.length,
                    g = d > 0 ? e : t,
                    b = d > 0 ? t : e,
                    S = 0,
                    k = "complexity" === i ? y : _,
                    A = "position" === i ? 0 : "number" == typeof i ? i : .8,
                    E = b.length,
                    P = "object" == typeof n && n.push ? n.slice(0) : [n],
                    D = "reverse" === P[0] || P[0] < 0,
                    O = "log" === n; if (b[0]) { if (g.length > 1 && (t.sort(k), e.sort(k), c = g.size || v(g), c = b.size || v(b), c = g.centerX - b.centerX, h = g.centerY - b.centerY, k === _))
                        for (E = 0; E < b.length; E++) g.splice(E, 0, C(b[E], g, E, A, c, h)); if (d)
                        for (d < 0 && (d = -d), g[0].length > b[0].length && p(b[0], (g[0].length - b[0].length) / 6 | 0), E = b.length; S < d;) a = g[E].size || m(g[E]), o = T(b, g[E].centerX, g[E].centerY), a = o[0], u = o[1], b[E++] = [a, u, a, u, a, u, a, u], b.totalPoints += 8, S++; for (E = 0; E < t.length; E++) r = e[E], s = t[E], d = r.length - s.length, d < 0 ? p(r, -d / 6 | 0) : d > 0 && p(s, d / 6 | 0), D && !s.reversed && f(s), (n = P[E] || 0 === P[E] ? P[E] : "auto") && (s.closed || Math.abs(s[0] - s[s.length - 2]) < .5 && Math.abs(s[1] - s[s.length - 1]) < .5 ? "auto" === n || "log" === n ? (P[E] = n = w(s, r, 0 === E), n < 0 && (D = !0, f(s), n = -n), x(s, 6 * n)) : "reverse" !== n && (E && n < 0 && f(s), x(s, 6 * (n < 0 ? -n : n))) : !D && ("auto" === n && Math.abs(r[0] - s[0]) + Math.abs(r[1] - s[1]) + Math.abs(r[r.length - 2] - s[s.length - 2]) + Math.abs(r[r.length - 1] - s[s.length - 1]) > Math.abs(r[0] - s[s.length - 2]) + Math.abs(r[1] - s[s.length - 1]) + Math.abs(r[r.length - 2] - s[0]) + Math.abs(r[r.length - 1] - s[1]) || n % 2) ? (f(s), P[E] = -1, D = !0) : "auto" === n ? P[E] = 0 : "reverse" === n && (P[E] = -1), s.closed !== r.closed && (s.closed = r.closed = !1)); return O && l("shapeIndex:[" + P.join(",") + "]"), P } },
            k = function(t, e, n, i) { var r = h(t[0]),
                    s = h(t[1]);
                S(r, s, e || 0 === e ? e : "auto", n) && (t[0] = d(r), t[1] = d(s), "log" !== i && !0 !== i || l('precompile:["' + t[0] + '","' + t[1] + '"]')) },
            A = function(t, e, n) { return e || n || t || 0 === t ? function(i) { k(i, t, e, n) } : k },
            E = function(t, e) { if (!e) return t; var n, r, s, o = t.match(i) || [],
                    a = o.length,
                    l = ""; for ("reverse" === e ? (r = a - 1, n = -2) : (r = (2 * (parseInt(e, 10) || 0) + 1 + 100 * a) % a, n = 2), s = 0; s < a; s += 2) l += o[r - 1] + "," + o[r] + " ", r = (r + n) % a; return l },
            P = function(t, e) { var n, i, r, s, o, a, l, u = 0,
                    c = parseFloat(t[0]),
                    h = parseFloat(t[1]),
                    p = c + "," + h + " "; for (r = t.length, n = .5 * e / (.5 * r - 1), i = 0; i < r - 2; i += 2) { if (u += n, a = parseFloat(t[i + 2]), l = parseFloat(t[i + 3]), u > .999999)
                        for (o = 1 / (Math.floor(u) + 1), s = 1; u > .999999;) p += (c + (a - c) * o * s).toFixed(2) + "," + (h + (l - h) * o * s).toFixed(2) + " ", u--, s++;
                    p += a + "," + l + " ", c = a, h = l } return p },
            D = function(t) { var e = t[0].match(i) || [],
                    n = t[1].match(i) || [],
                    r = n.length - e.length;
                r > 0 ? t[0] = P(e, r) : t[1] = P(n, -r) },
            O = function(t) { return isNaN(t) ? D : function(e) { D(e), e[1] = E(e[1], parseInt(t, 10)) } },
            F = function(t, e) { var n, i = _gsScope.document.createElementNS("http://www.w3.org/2000/svg", "path"),
                    r = Array.prototype.slice.call(t.attributes),
                    s = r.length; for (e = "," + e + ","; --s > -1;) n = r[s].nodeName.toLowerCase(), -1 === e.indexOf("," + n + ",") && i.setAttributeNS(null, n, r[s].nodeValue); return i },
            M = function(t, e) { var n, r, s, o, a, l, u, c, p, f, g, m, v, y, _, x, b, w, T, C, S, k = t.tagName.toLowerCase(),
                    A = .552284749831; return "path" !== k && t.getBBox ? (l = F(t, "x,y,width,height,cx,cy,rx,ry,r,x1,x2,y1,y2,points"), "rect" === k ? (o = +t.getAttribute("rx") || 0, a = +t.getAttribute("ry") || 0, r = +t.getAttribute("x") || 0, s = +t.getAttribute("y") || 0, f = (+t.getAttribute("width") || 0) - 2 * o, g = (+t.getAttribute("height") || 0) - 2 * a, o || a ? (m = r + o * (1 - A), v = r + o, y = v + f, _ = y + o * A, x = y + o, b = s + a * (1 - A), w = s + a, T = w + g, C = T + a * A, S = T + a, n = "M" + x + "," + w + " V" + T + " C" + [x, C, _, S, y, S, y - (y - v) / 3, S, v + (y - v) / 3, S, v, S, m, S, r, C, r, T, r, T - (T - w) / 3, r, w + (T - w) / 3, r, w, r, b, m, s, v, s, v + (y - v) / 3, s, y - (y - v) / 3, s, y, s, _, s, x, b, x, w].join(",") + "z") : n = "M" + (r + f) + "," + s + " v" + g + " h" + -f + " v" + -g + " h" + f + "z") : "circle" === k || "ellipse" === k ? ("circle" === k ? (o = a = +t.getAttribute("r") || 0, c = o * A) : (o = +t.getAttribute("rx") || 0, a = +t.getAttribute("ry") || 0, c = a * A), r = +t.getAttribute("cx") || 0, s = +t.getAttribute("cy") || 0, u = o * A, n = "M" + (r + o) + "," + s + " C" + [r + o, s + c, r + u, s + a, r, s + a, r - u, s + a, r - o, s + c, r - o, s, r - o, s - c, r - u, s - a, r, s - a, r + u, s - a, r + o, s - c, r + o, s].join(",") + "z") : "line" === k ? n = d(h("M" + (t.getAttribute("x1") || 0) + "," + (t.getAttribute("y1") || 0) + " L" + (t.getAttribute("x2") || 0) + "," + (t.getAttribute("y2") || 0))) : "polyline" !== k && "polygon" !== k || (p = (t.getAttribute("points") + "").match(i) || [], r = p.shift(), s = p.shift(), n = "M" + r + "," + s + " L" + p.join(","), "polygon" === k && (n += "," + r + "," + s + "z")), l.setAttribute("d", n), e && t.parentNode && (t.parentNode.insertBefore(l, t), t.parentNode.removeChild(t)), l) : t },
            N = function(t, e, n) { var s, o, u = "string" == typeof t; return (!u || r.test(t) || (t.match(i) || []).length < 3) && (s = u ? a.selector(t) : t && t[0] ? t : [t], s && s[0] ? (s = s[0], o = s.nodeName.toUpperCase(), e && "PATH" !== o && (s = M(s, !1), o = "PATH"), t = s.getAttribute("PATH" === o ? "d" : "points") || "", s === n && (t = s.getAttributeNS(null, "data-original") || t)) : (l("WARNING: invalid morph to: " + t), t = !1)), t },
            $ = "Use MorphSVGPlugin.convertToPath(elementOrSelectorText) to convert to a path before morphing.",
            R = _gsScope._gsDefine.plugin({ propName: "morphSVG", API: 2, global: !0, version: "0.8.11", init: function(t, e, n, i) { var r, o, a, u, c; return "function" == typeof t.setAttribute && ("function" == typeof e && (e = e(i, t)), r = t.nodeName.toUpperCase(), c = "POLYLINE" === r || "POLYGON" === r, "PATH" === r || c ? (o = "PATH" === r ? "d" : "points", ("string" == typeof e || e.getBBox || e[0]) && (e = { shape: e }), u = N(e.shape || e.d || e.points || "", "d" === o, t), c && s.test(u) ? (l("WARNING: a <" + r + "> cannot accept path data. " + $), !1) : (u && (this._target = t, t.getAttributeNS(null, "data-original") || t.setAttributeNS(null, "data-original", t.getAttribute(o)), (a = this._addTween(t, "setAttribute", t.getAttribute(o) + "", u + "", "morphSVG", !1, o, "object" == typeof e.precompile ? function(t) { t[0] = e.precompile[0], t[1] = e.precompile[1] } : "d" === o ? A(e.shapeIndex, e.map || R.defaultMap, e.precompile) : O(e.shapeIndex))) && (this._overwriteProps.push("morphSVG"), a.end = u, a.endProp = o)), !0)) : (l("WARNING: cannot morph a <" + r + "> SVG element. " + $), !1)) }, set: function(t) { var e; if (this._super.setRatio.call(this, t), 1 === t)
                        for (e = this._firstPT; e;) e.end && this._target.setAttribute(e.endProp, e.end), e = e._next } });
        R.pathFilter = k, R.pointsFilter = D, R.subdivideRawBezier = p, R.defaultMap = "size", R.pathDataToRawBezier = function(t) { return h(N(t, !0)) }, R.equalizeSegmentQuantity = S, R.convertToPath = function(t, e) { "string" == typeof t && (t = a.selector(t)); for (var n = t && 0 !== t.length ? t.length && t[0] && t[0].nodeType ? Array.prototype.slice.call(t, 0) : [t] : [], i = n.length; --i > -1;) n[i] = M(n[i], !1 !== e); return n }, R.pathDataToBezier = function(t, e) { var n, i, r, s, o, l, u, c, p = h(N(t, !0))[0] || [],
                d = 0; if (e = e || {}, c = e.align || e.relative, s = e.matrix || [1, 0, 0, 1, 0, 0], o = e.offsetX || 0, l = e.offsetY || 0, "relative" === c || !0 === c ? (o -= p[0] * s[0] + p[1] * s[2], l -= p[0] * s[1] + p[1] * s[3], d = "+=") : (o += s[4], l += s[5], c && (c = "string" == typeof c ? a.selector(c) : c && c[0] ? c : [c]) && c[0] && (u = c[0].getBBox() || { x: 0, y: 0 }, o -= u.x, l -= u.y)), n = [], r = p.length, s && "1,0,0,1,0,0" !== s.join(","))
                for (i = 0; i < r; i += 2) n.push({ x: d + (p[i] * s[0] + p[i + 1] * s[2] + o), y: d + (p[i] * s[1] + p[i + 1] * s[3] + l) });
            else
                for (i = 0; i < r; i += 2) n.push({ x: d + (p[i] + o), y: d + (p[i + 1] + l) }); return n } }), _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
    function(t) { "use strict"; var e = function() { return (_gsScope.GreenSockGlobals || _gsScope).MorphSVGPlugin }; "undefined" != typeof module && module.exports ? (require("../TweenLite.js"), module.exports = e()) : "function" == typeof define && define.amd && define(["TweenLite"], e) }();
/*!
 * VERSION: 1.9.0
 * DATE: 2018-02-15
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() { "use strict"; var t = (_gsScope.document || {}).documentElement,
            e = _gsScope,
            n = function(n, i) { var r = "x" === i ? "Width" : "Height",
                    s = "scroll" + r,
                    o = "client" + r,
                    a = document.body; return n === e || n === t || n === a ? Math.max(t[s], a[s]) - (e["inner" + r] || t[o] || a[o]) : n[s] - n["offset" + r] },
            i = function(t) { return "string" == typeof t && (t = TweenLite.selector(t)), t.length && t !== e && t[0] && t[0].style && !t.nodeType && (t = t[0]), t === e || t.nodeType && t.style ? t : null },
            r = function(n, i) { var r = "scroll" + ("x" === i ? "Left" : "Top"); return n === e && (null != n.pageXOffset ? r = "page" + i.toUpperCase() + "Offset" : n = null != t[r] ? t : document.body),
                    function() { return n[r] } },
            s = function(n, s) { var o = i(n).getBoundingClientRect(),
                    a = !s || s === e || s === document.body,
                    l = (a ? t : s).getBoundingClientRect(),
                    u = { x: o.left - l.left, y: o.top - l.top }; return !a && s && (u.x += r(s, "x")(), u.y += r(s, "y")()), u },
            o = function(t, e, i) { var r = typeof t; return isNaN(t) ? "number" === r || "string" === r && "=" === t.charAt(1) ? t : "max" === t ? n(e, i) : Math.min(n(e, i), s(t, e)[i]) : parseFloat(t) },
            a = _gsScope._gsDefine.plugin({ propName: "scrollTo", API: 2, global: !0, version: "1.9.0", init: function(t, n, i) { return this._wdw = t === e, this._target = t, this._tween = i, "object" != typeof n ? (n = { y: n }, "string" == typeof n.y && "max" !== n.y && "=" !== n.y.charAt(1) && (n.x = n.y)) : n.nodeType && (n = { y: n, x: n }), this.vars = n, this._autoKill = !1 !== n.autoKill, this.getX = r(t, "x"), this.getY = r(t, "y"), this.x = this.xPrev = this.getX(), this.y = this.yPrev = this.getY(), null != n.x ? (this._addTween(this, "x", this.x, o(n.x, t, "x") - (n.offsetX || 0), "scrollTo_x", !0), this._overwriteProps.push("scrollTo_x")) : this.skipX = !0, null != n.y ? (this._addTween(this, "y", this.y, o(n.y, t, "y") - (n.offsetY || 0), "scrollTo_y", !0), this._overwriteProps.push("scrollTo_y")) : this.skipY = !0, !0 }, set: function(t) { this._super.setRatio.call(this, t); var i = this._wdw || !this.skipX ? this.getX() : this.xPrev,
                        r = this._wdw || !this.skipY ? this.getY() : this.yPrev,
                        s = r - this.yPrev,
                        o = i - this.xPrev,
                        l = a.autoKillThreshold;
                    this.x < 0 && (this.x = 0), this.y < 0 && (this.y = 0), this._autoKill && (!this.skipX && (o > l || o < -l) && i < n(this._target, "x") && (this.skipX = !0), !this.skipY && (s > l || s < -l) && r < n(this._target, "y") && (this.skipY = !0), this.skipX && this.skipY && (this._tween.kill(), this.vars.onAutoKill && this.vars.onAutoKill.apply(this.vars.onAutoKillScope || this._tween, this.vars.onAutoKillParams || []))), this._wdw ? e.scrollTo(this.skipX ? i : this.x, this.skipY ? r : this.y) : (this.skipY || (this._target.scrollTop = this.y), this.skipX || (this._target.scrollLeft = this.x)), this.xPrev = this.x, this.yPrev = this.y } }),
            l = a.prototype;
        a.max = n, a.getOffset = s, a.buildGetter = r, a.autoKillThreshold = 7, l._kill = function(t) { return t.scrollTo_x && (this.skipX = !0), t.scrollTo_y && (this.skipY = !0), this._super._kill.call(this, t) } }), _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
    function(t) { "use strict"; var e = function() { return (_gsScope.GreenSockGlobals || _gsScope).ScrollToPlugin }; "undefined" != typeof module && module.exports ? (require("../TweenLite.js"), module.exports = e()) : "function" == typeof define && define.amd && define(["TweenLite"], e) }();
/*!
 * VERSION: 0.5.8
 * DATE: 2018-02-15
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
 * SplitText is a Club GreenSock membership benefit; You must have a valid membership to use
 * this code without violating the terms of use. Visit http://greensock.com/club/ to sign up or get more details.
 * This work is subject to the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
! function(t) { "use strict"; var e = t.GreenSockGlobals || t,
        n = function(t) { var n, i = t.split("."),
                r = e; for (n = 0; n < i.length; n++) r[i[n]] = r = r[i[n]] || {}; return r }("com.greensock.utils"),
        i = function(t) { var e = t.nodeType,
                n = ""; if (1 === e || 9 === e || 11 === e) { if ("string" == typeof t.textContent) return t.textContent; for (t = t.firstChild; t; t = t.nextSibling) n += i(t) } else if (3 === e || 4 === e) return t.nodeValue; return n },
        r = document,
        s = r.defaultView ? r.defaultView.getComputedStyle : function() {},
        o = /([A-Z])/g,
        a = function(t, e, n, i) { var r; return (n = n || s(t, null)) ? (t = n.getPropertyValue(e.replace(o, "-$1").toLowerCase()), r = t || n.length ? t : n[e]) : t.currentStyle && (n = t.currentStyle, r = n[e]), i ? r : parseInt(r, 10) || 0 },
        l = function(t) { return !!(t.length && t[0] && (t[0].nodeType && t[0].style && !t.nodeType || t[0].length && t[0][0])) },
        u = function(t) { var e, n, i, r = [],
                s = t.length; for (e = 0; e < s; e++)
                if (n = t[e], l(n))
                    for (i = n.length, i = 0; i < n.length; i++) r.push(n[i]);
                else r.push(n);
            return r },
        c = /(?:\r|\n|\t\t)/g,
        h = /(?:\s\s+)/g,
        p = function(t) { return (t.charCodeAt(0) - 55296 << 10) + (t.charCodeAt(1) - 56320) + 65536 },
        d = r.all && !r.addEventListener,
        f = " style='position:relative;display:inline-block;" + (d ? "*display:inline;*zoom:1;'" : "'"),
        g = function(t, e) { t = t || ""; var n = -1 !== t.indexOf("++"),
                i = 1; return n && (t = t.split("++").join("")),
                function() { return "<" + e + f + (t ? " class='" + t + (n ? i++ : "") + "'>" : ">") } },
        m = n.SplitText = e.SplitText = function(t, e) { if ("string" == typeof t && (t = m.selector(t)), !t) throw "cannot split a null element.";
            this.elements = l(t) ? u(t) : [t], this.chars = [], this.words = [], this.lines = [], this._originals = [], this.vars = e || {}, this.split(e) },
        v = function(t, e, n) { var i = t.nodeType; if (1 === i || 9 === i || 11 === i)
                for (t = t.firstChild; t; t = t.nextSibling) v(t, e, n);
            else 3 !== i && 4 !== i || (t.nodeValue = t.nodeValue.split(e).join(n)) },
        y = function(t, e) { for (var n = e.length; --n > -1;) t.push(e[n]) },
        _ = function(t) { var e, n = [],
                i = t.length; for (e = 0; e !== i; n.push(t[e++])); return n },
        x = function(t, e, n) { for (var i; t && t !== e;) { if (i = t._next || t.nextSibling) return i.textContent.charAt(0) === n;
                t = t.parentNode || t._parent } return !1 },
        b = function(t) { var e, n, i = _(t.childNodes),
                r = i.length; for (e = 0; e < r; e++) n = i[e], n._isSplit ? b(n) : (e && 3 === n.previousSibling.nodeType ? n.previousSibling.nodeValue += 3 === n.nodeType ? n.nodeValue : n.firstChild.nodeValue : 3 !== n.nodeType && t.insertBefore(n.firstChild, n), t.removeChild(n)) },
        w = function(t, e, n, i, o, l, u) { var c, h, p, d, f, g, m, _, w, T, C, S, k = s(t),
                A = a(t, "paddingLeft", k),
                E = -999,
                P = a(t, "borderBottomWidth", k) + a(t, "borderTopWidth", k),
                D = a(t, "borderLeftWidth", k) + a(t, "borderRightWidth", k),
                O = a(t, "paddingTop", k) + a(t, "paddingBottom", k),
                F = a(t, "paddingLeft", k) + a(t, "paddingRight", k),
                M = .2 * a(t, "fontSize"),
                N = a(t, "textAlign", k, !0),
                $ = [],
                R = [],
                j = [],
                L = e.wordDelimiter || " ",
                z = e.span ? "span" : "div",
                B = e.type || e.split || "chars,words,lines",
                q = o && -1 !== B.indexOf("lines") ? [] : null,
                I = -1 !== B.indexOf("words"),
                H = -1 !== B.indexOf("chars"),
                W = "absolute" === e.position || !0 === e.absolute,
                X = e.linesClass,
                U = -1 !== (X || "").indexOf("++"),
                V = []; for (q && 1 === t.children.length && t.children[0]._isSplit && (t = t.children[0]), U && (X = X.split("++").join("")), h = t.getElementsByTagName("*"), p = h.length, f = [], c = 0; c < p; c++) f[c] = h[c]; if (q || W)
                for (c = 0; c < p; c++) d = f[c], ((g = d.parentNode === t) || W || H && !I) && (S = d.offsetTop, q && g && Math.abs(S - E) > M && ("BR" !== d.nodeName || 0 === c) && (m = [], q.push(m), E = S), W && (d._x = d.offsetLeft, d._y = S, d._w = d.offsetWidth, d._h = d.offsetHeight), q && ((d._isSplit && g || !H && g || I && g || !I && d.parentNode.parentNode === t && !d.parentNode._isSplit) && (m.push(d), d._x -= A, x(d, t, L) && (d._wordEnd = !0)), "BR" === d.nodeName && (d.nextSibling && "BR" === d.nextSibling.nodeName || 0 === c) && q.push([]))); for (c = 0; c < p; c++) d = f[c], g = d.parentNode === t, "BR" !== d.nodeName ? (W && (w = d.style, I || g || (d._x += d.parentNode._x, d._y += d.parentNode._y), w.left = d._x + "px", w.top = d._y + "px", w.position = "absolute", w.display = "block", w.width = d._w + 1 + "px", w.height = d._h + "px"), !I && H ? d._isSplit ? (d._next = d.nextSibling, d.parentNode.appendChild(d)) : d.parentNode._isSplit ? (d._parent = d.parentNode, !d.previousSibling && d.firstChild && (d.firstChild._isFirst = !0), d.nextSibling && " " === d.nextSibling.textContent && !d.nextSibling.nextSibling && V.push(d.nextSibling), d._next = d.nextSibling && d.nextSibling._isFirst ? null : d.nextSibling, d.parentNode.removeChild(d), f.splice(c--, 1), p--) : g || (S = !d.nextSibling && x(d.parentNode, t, L), d.parentNode._parent && d.parentNode._parent.appendChild(d), S && d.parentNode.appendChild(r.createTextNode(" ")), e.span && (d.style.display = "inline"), $.push(d)) : d.parentNode._isSplit && !d._isSplit && "" !== d.innerHTML ? R.push(d) : H && !d._isSplit && (e.span && (d.style.display = "inline"), $.push(d))) : q || W ? (d.parentNode && d.parentNode.removeChild(d), f.splice(c--, 1), p--) : I || t.appendChild(d); for (c = V.length; --c > -1;) V[c].parentNode.removeChild(V[c]); if (q) { for (W && (T = r.createElement(z), t.appendChild(T), C = T.offsetWidth + "px", S = T.offsetParent === t ? 0 : t.offsetLeft, t.removeChild(T)), w = t.style.cssText, t.style.cssText = "display:none;"; t.firstChild;) t.removeChild(t.firstChild); for (_ = " " === L && (!W || !I && !H), c = 0; c < q.length; c++) { for (m = q[c], T = r.createElement(z), T.style.cssText = "display:block;text-align:" + N + ";position:" + (W ? "absolute;" : "relative;"), X && (T.className = X + (U ? c + 1 : "")), j.push(T), p = m.length, h = 0; h < p; h++) "BR" !== m[h].nodeName && (d = m[h], T.appendChild(d), _ && d._wordEnd && T.appendChild(r.createTextNode(" ")), W && (0 === h && (T.style.top = d._y + "px", T.style.left = A + S + "px"), d.style.top = "0px", S && (d.style.left = d._x - S + "px")));
                    0 === p ? T.innerHTML = "&nbsp;" : I || H || (b(T), v(T, String.fromCharCode(160), " ")), W && (T.style.width = C, T.style.height = d._h + "px"), t.appendChild(T) }
                t.style.cssText = w }
            W && (u > t.clientHeight && (t.style.height = u - O + "px", t.clientHeight < u && (t.style.height = u + P + "px")), l > t.clientWidth && (t.style.width = l - F + "px", t.clientWidth < l && (t.style.width = l + D + "px"))), y(n, $), y(i, R), y(o, j) },
        T = function(t, e, n, s) { var o, a, l, u, d, f, g, m, y, _ = e.span ? "span" : "div",
                x = e.type || e.split || "chars,words,lines",
                b = -1 !== x.indexOf("chars"),
                w = "absolute" === e.position || !0 === e.absolute,
                T = e.wordDelimiter || " ",
                C = " " !== T ? "" : w ? "&#173; " : " ",
                S = e.span ? "</span>" : "</div>",
                k = !0,
                A = r.createElement("div"),
                E = t.parentNode; for (E.insertBefore(A, t), A.textContent = t.nodeValue, E.removeChild(t), t = A, o = i(t), g = -1 !== o.indexOf("<"), !1 !== e.reduceWhiteSpace && (o = o.replace(h, " ").replace(c, "")), g && (o = o.split("<").join("{{LT}}")), d = o.length, a = (" " === o.charAt(0) ? C : "") + n(), l = 0; l < d; l++)
                if ((f = o.charAt(l)) === T && o.charAt(l - 1) !== T && l) { for (a += k ? S : "", k = !1; o.charAt(l + 1) === T;) a += C, l++;
                    l === d - 1 ? a += C : ")" !== o.charAt(l + 1) && (a += C + n(), k = !0) } else "{" === f && "{{LT}}" === o.substr(l, 6) ? (a += b ? s() + "{{LT}}</" + _ + ">" : "{{LT}}", l += 5) : f.charCodeAt(0) >= 55296 && f.charCodeAt(0) <= 56319 || o.charCodeAt(l + 1) >= 65024 && o.charCodeAt(l + 1) <= 65039 ? (m = p(o.substr(l, 2)), y = p(o.substr(l + 2, 2)), u = m >= 127462 && m <= 127487 && y >= 127462 && y <= 127487 || y >= 127995 && y <= 127999 ? 4 : 2, a += b && " " !== f ? s() + o.substr(l, u) + "</" + _ + ">" : o.substr(l, u), l += u - 1) : a += b && " " !== f ? s() + f + "</" + _ + ">" : f;
            t.outerHTML = a + (k ? S : ""), g && v(E, "{{LT}}", "<") },
        C = function(t, e, n, i) { var r, s, o = _(t.childNodes),
                l = o.length,
                u = "absolute" === e.position || !0 === e.absolute; if (3 !== t.nodeType || l > 1) { for (e.absolute = !1, r = 0; r < l; r++) s = o[r], (3 !== s.nodeType || /\S+/.test(s.nodeValue)) && (u && 3 !== s.nodeType && "inline" === a(s, "display", null, !0) && (s.style.display = "inline-block", s.style.position = "relative"), s._isSplit = !0, C(s, e, n, i)); return e.absolute = u, void(t._isSplit = !0) }
            T(t, e, n, i) },
        S = m.prototype;
    S.split = function(t) { this.isSplit && this.revert(), this.vars = t = t || this.vars, this._originals.length = this.chars.length = this.words.length = this.lines.length = 0; for (var e, n, i, r = this.elements.length, s = t.span ? "span" : "div", o = g(t.wordsClass, s), a = g(t.charsClass, s); --r > -1;) i = this.elements[r], this._originals[r] = i.innerHTML, e = i.clientHeight, n = i.clientWidth, C(i, t, o, a), w(i, t, this.chars, this.words, this.lines, n, e); return this.chars.reverse(), this.words.reverse(), this.lines.reverse(), this.isSplit = !0, this }, S.revert = function() { if (!this._originals) throw "revert() call wasn't scoped properly."; for (var t = this._originals.length; --t > -1;) this.elements[t].innerHTML = this._originals[t]; return this.chars = [], this.words = [], this.lines = [], this.isSplit = !1, this }, m.selector = t.$ || t.jQuery || function(e) { var n = t.$ || t.jQuery; return n ? (m.selector = n, n(e)) : "undefined" == typeof document ? e : document.querySelectorAll ? document.querySelectorAll(e) : document.getElementById("#" === e.charAt(0) ? e.substr(1) : e) }, m.version = "0.5.8" }(_gsScope),
function(t) { "use strict"; var e = function() { return (_gsScope.GreenSockGlobals || _gsScope).SplitText }; "undefined" != typeof module && module.exports ? module.exports = e() : "function" == typeof define && define.amd && define([], e) }();