/* Zepto v1.2.0 - zepto event ajax form ie - zeptojs.com/license */
!function (t, e) { "function" == typeof define && define.amd ? define(function () { return e(t) }) : e(t) }(this, function (t) { var e = function () { function $(t) { return null == t ? String(t) : S[C.call(t)] || "object" } function F(t) { return "function" == $(t) } function k(t) { return null != t && t == t.window } function M(t) { return null != t && t.nodeType == t.DOCUMENT_NODE } function R(t) { return "object" == $(t) } function Z(t) { return R(t) && !k(t) && Object.getPrototypeOf(t) == Object.prototype } function z(t) { var e = !!t && "length" in t && t.length, n = r.type(t); return "function" != n && !k(t) && ("array" == n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t) } function q(t) { return a.call(t, function (t) { return null != t }) } function H(t) { return t.length > 0 ? r.fn.concat.apply([], t) : t } function I(t) { return t.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase() } function V(t) { return t in l ? l[t] : l[t] = new RegExp("(^|\\s)" + t + "(\\s|$)") } function _(t, e) { return "number" != typeof e || h[I(t)] ? e : e + "px" } function B(t) { var e, n; return c[t] || (e = f.createElement(t), f.body.appendChild(e), n = getComputedStyle(e, "").getPropertyValue("display"), e.parentNode.removeChild(e), "none" == n && (n = "block"), c[t] = n), c[t] } function U(t) { return "children" in t ? u.call(t.children) : r.map(t.childNodes, function (t) { return 1 == t.nodeType ? t : void 0 }) } function X(t, e) { var n, r = t ? t.length : 0; for (n = 0; r > n; n++)this[n] = t[n]; this.length = r, this.selector = e || "" } function J(t, r, i) { for (n in r) i && (Z(r[n]) || L(r[n])) ? (Z(r[n]) && !Z(t[n]) && (t[n] = {}), L(r[n]) && !L(t[n]) && (t[n] = []), J(t[n], r[n], i)) : r[n] !== e && (t[n] = r[n]) } function W(t, e) { return null == e ? r(t) : r(t).filter(e) } function Y(t, e, n, r) { return F(e) ? e.call(t, n, r) : e } function G(t, e, n) { null == n ? t.removeAttribute(e) : t.setAttribute(e, n) } function K(t, n) { var r = t.className || "", i = r && r.baseVal !== e; return n === e ? i ? r.baseVal : r : void (i ? r.baseVal = n : t.className = n) } function Q(t) { try { return t ? "true" == t || ("false" == t ? !1 : "null" == t ? null : +t + "" == t ? +t : /^[\[\{]/.test(t) ? r.parseJSON(t) : t) : t } catch (e) { return t } } function tt(t, e) { e(t); for (var n = 0, r = t.childNodes.length; r > n; n++)tt(t.childNodes[n], e) } var e, n, r, i, O, P, o = [], s = o.concat, a = o.filter, u = o.slice, f = t.document, c = {}, l = {}, h = { "column-count": 1, columns: 1, "font-weight": 1, "line-height": 1, opacity: 1, "z-index": 1, zoom: 1 }, p = /^\s*<(\w+|!)[^>]*>/, d = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, m = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, g = /^(?:body|html)$/i, v = /([A-Z])/g, y = ["val", "css", "html", "text", "data", "width", "height", "offset"], x = ["after", "prepend", "before", "append"], b = f.createElement("table"), E = f.createElement("tr"), j = { tr: f.createElement("tbody"), tbody: b, thead: b, tfoot: b, td: E, th: E, "*": f.createElement("div") }, w = /complete|loaded|interactive/, T = /^[\w-]*$/, S = {}, C = S.toString, N = {}, A = f.createElement("div"), D = { tabindex: "tabIndex", readonly: "readOnly", "for": "htmlFor", "class": "className", maxlength: "maxLength", cellspacing: "cellSpacing", cellpadding: "cellPadding", rowspan: "rowSpan", colspan: "colSpan", usemap: "useMap", frameborder: "frameBorder", contenteditable: "contentEditable" }, L = Array.isArray || function (t) { return t instanceof Array }; return N.matches = function (t, e) { if (!e || !t || 1 !== t.nodeType) return !1; var n = t.matches || t.webkitMatchesSelector || t.mozMatchesSelector || t.oMatchesSelector || t.matchesSelector; if (n) return n.call(t, e); var r, i = t.parentNode, o = !i; return o && (i = A).appendChild(t), r = ~N.qsa(i, e).indexOf(t), o && A.removeChild(t), r }, O = function (t) { return t.replace(/-+(.)?/g, function (t, e) { return e ? e.toUpperCase() : "" }) }, P = function (t) { return a.call(t, function (e, n) { return t.indexOf(e) == n }) }, N.fragment = function (t, n, i) { var o, s, a; return d.test(t) && (o = r(f.createElement(RegExp.$1))), o || (t.replace && (t = t.replace(m, "<$1></$2>")), n === e && (n = p.test(t) && RegExp.$1), n in j || (n = "*"), a = j[n], a.innerHTML = "" + t, o = r.each(u.call(a.childNodes), function () { a.removeChild(this) })), Z(i) && (s = r(o), r.each(i, function (t, e) { y.indexOf(t) > -1 ? s[t](e) : s.attr(t, e) })), o }, N.Z = function (t, e) { return new X(t, e) }, N.isZ = function (t) { return t instanceof N.Z }, N.init = function (t, n) { var i; if (!t) return N.Z(); if ("string" == typeof t) if (t = t.trim(), "<" == t[0] && p.test(t)) i = N.fragment(t, RegExp.$1, n), t = null; else { if (n !== e) return r(n).find(t); i = N.qsa(f, t) } else { if (F(t)) return r(f).ready(t); if (N.isZ(t)) return t; if (L(t)) i = q(t); else if (R(t)) i = [t], t = null; else if (p.test(t)) i = N.fragment(t.trim(), RegExp.$1, n), t = null; else { if (n !== e) return r(n).find(t); i = N.qsa(f, t) } } return N.Z(i, t) }, r = function (t, e) { return N.init(t, e) }, r.extend = function (t) { var e, n = u.call(arguments, 1); return "boolean" == typeof t && (e = t, t = n.shift()), n.forEach(function (n) { J(t, n, e) }), t }, N.qsa = function (t, e) { var n, r = "#" == e[0], i = !r && "." == e[0], o = r || i ? e.slice(1) : e, s = T.test(o); return t.getElementById && s && r ? (n = t.getElementById(o)) ? [n] : [] : 1 !== t.nodeType && 9 !== t.nodeType && 11 !== t.nodeType ? [] : u.call(s && !r && t.getElementsByClassName ? i ? t.getElementsByClassName(o) : t.getElementsByTagName(e) : t.querySelectorAll(e)) }, r.contains = f.documentElement.contains ? function (t, e) { return t !== e && t.contains(e) } : function (t, e) { for (; e && (e = e.parentNode);)if (e === t) return !0; return !1 }, r.type = $, r.isFunction = F, r.isWindow = k, r.isArray = L, r.isPlainObject = Z, r.isEmptyObject = function (t) { var e; for (e in t) return !1; return !0 }, r.isNumeric = function (t) { var e = Number(t), n = typeof t; return null != t && "boolean" != n && ("string" != n || t.length) && !isNaN(e) && isFinite(e) || !1 }, r.inArray = function (t, e, n) { return o.indexOf.call(e, t, n) }, r.camelCase = O, r.trim = function (t) { return null == t ? "" : String.prototype.trim.call(t) }, r.uuid = 0, r.support = {}, r.expr = {}, r.noop = function () { }, r.map = function (t, e) { var n, i, o, r = []; if (z(t)) for (i = 0; i < t.length; i++)n = e(t[i], i), null != n && r.push(n); else for (o in t) n = e(t[o], o), null != n && r.push(n); return H(r) }, r.each = function (t, e) { var n, r; if (z(t)) { for (n = 0; n < t.length; n++)if (e.call(t[n], n, t[n]) === !1) return t } else for (r in t) if (e.call(t[r], r, t[r]) === !1) return t; return t }, r.grep = function (t, e) { return a.call(t, e) }, t.JSON && (r.parseJSON = JSON.parse), r.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (t, e) { S["[object " + e + "]"] = e.toLowerCase() }), r.fn = { constructor: N.Z, length: 0, forEach: o.forEach, reduce: o.reduce, push: o.push, sort: o.sort, splice: o.splice, indexOf: o.indexOf, concat: function () { var t, e, n = []; for (t = 0; t < arguments.length; t++)e = arguments[t], n[t] = N.isZ(e) ? e.toArray() : e; return s.apply(N.isZ(this) ? this.toArray() : this, n) }, map: function (t) { return r(r.map(this, function (e, n) { return t.call(e, n, e) })) }, slice: function () { return r(u.apply(this, arguments)) }, ready: function (t) { return w.test(f.readyState) && f.body ? t(r) : f.addEventListener("DOMContentLoaded", function () { t(r) }, !1), this }, get: function (t) { return t === e ? u.call(this) : this[t >= 0 ? t : t + this.length] }, toArray: function () { return this.get() }, size: function () { return this.length }, remove: function () { return this.each(function () { null != this.parentNode && this.parentNode.removeChild(this) }) }, each: function (t) { return o.every.call(this, function (e, n) { return t.call(e, n, e) !== !1 }), this }, filter: function (t) { return F(t) ? this.not(this.not(t)) : r(a.call(this, function (e) { return N.matches(e, t) })) }, add: function (t, e) { return r(P(this.concat(r(t, e)))) }, is: function (t) { return this.length > 0 && N.matches(this[0], t) }, not: function (t) { var n = []; if (F(t) && t.call !== e) this.each(function (e) { t.call(this, e) || n.push(this) }); else { var i = "string" == typeof t ? this.filter(t) : z(t) && F(t.item) ? u.call(t) : r(t); this.forEach(function (t) { i.indexOf(t) < 0 && n.push(t) }) } return r(n) }, has: function (t) { return this.filter(function () { return R(t) ? r.contains(this, t) : r(this).find(t).size() }) }, eq: function (t) { return -1 === t ? this.slice(t) : this.slice(t, +t + 1) }, first: function () { var t = this[0]; return t && !R(t) ? t : r(t) }, last: function () { var t = this[this.length - 1]; return t && !R(t) ? t : r(t) }, find: function (t) { var e, n = this; return e = t ? "object" == typeof t ? r(t).filter(function () { var t = this; return o.some.call(n, function (e) { return r.contains(e, t) }) }) : 1 == this.length ? r(N.qsa(this[0], t)) : this.map(function () { return N.qsa(this, t) }) : r() }, closest: function (t, e) { var n = [], i = "object" == typeof t && r(t); return this.each(function (r, o) { for (; o && !(i ? i.indexOf(o) >= 0 : N.matches(o, t));)o = o !== e && !M(o) && o.parentNode; o && n.indexOf(o) < 0 && n.push(o) }), r(n) }, parents: function (t) { for (var e = [], n = this; n.length > 0;)n = r.map(n, function (t) { return (t = t.parentNode) && !M(t) && e.indexOf(t) < 0 ? (e.push(t), t) : void 0 }); return W(e, t) }, parent: function (t) { return W(P(this.pluck("parentNode")), t) }, children: function (t) { return W(this.map(function () { return U(this) }), t) }, contents: function () { return this.map(function () { return this.contentDocument || u.call(this.childNodes) }) }, siblings: function (t) { return W(this.map(function (t, e) { return a.call(U(e.parentNode), function (t) { return t !== e }) }), t) }, empty: function () { return this.each(function () { this.innerHTML = "" }) }, pluck: function (t) { return r.map(this, function (e) { return e[t] }) }, show: function () { return this.each(function () { "none" == this.style.display && (this.style.display = ""), "none" == getComputedStyle(this, "").getPropertyValue("display") && (this.style.display = B(this.nodeName)) }) }, replaceWith: function (t) { return this.before(t).remove() }, wrap: function (t) { var e = F(t); if (this[0] && !e) var n = r(t).get(0), i = n.parentNode || this.length > 1; return this.each(function (o) { r(this).wrapAll(e ? t.call(this, o) : i ? n.cloneNode(!0) : n) }) }, wrapAll: function (t) { if (this[0]) { r(this[0]).before(t = r(t)); for (var e; (e = t.children()).length;)t = e.first(); r(t).append(this) } return this }, wrapInner: function (t) { var e = F(t); return this.each(function (n) { var i = r(this), o = i.contents(), s = e ? t.call(this, n) : t; o.length ? o.wrapAll(s) : i.append(s) }) }, unwrap: function () { return this.parent().each(function () { r(this).replaceWith(r(this).children()) }), this }, clone: function () { return this.map(function () { return this.cloneNode(!0) }) }, hide: function () { return this.css("display", "none") }, toggle: function (t) { return this.each(function () { var n = r(this); (t === e ? "none" == n.css("display") : t) ? n.show() : n.hide() }) }, prev: function (t) { return r(this.pluck("previousElementSibling")).filter(t || "*") }, next: function (t) { return r(this.pluck("nextElementSibling")).filter(t || "*") }, html: function (t) { return 0 in arguments ? this.each(function (e) { var n = this.innerHTML; r(this).empty().append(Y(this, t, e, n)) }) : 0 in this ? this[0].innerHTML : null }, text: function (t) { return 0 in arguments ? this.each(function (e) { var n = Y(this, t, e, this.textContent); this.textContent = null == n ? "" : "" + n }) : 0 in this ? this.pluck("textContent").join("") : null }, attr: function (t, r) { var i; return "string" != typeof t || 1 in arguments ? this.each(function (e) { if (1 === this.nodeType) if (R(t)) for (n in t) G(this, n, t[n]); else G(this, t, Y(this, r, e, this.getAttribute(t))) }) : 0 in this && 1 == this[0].nodeType && null != (i = this[0].getAttribute(t)) ? i : e }, removeAttr: function (t) { return this.each(function () { 1 === this.nodeType && t.split(" ").forEach(function (t) { G(this, t) }, this) }) }, prop: function (t, e) { return t = D[t] || t, 1 in arguments ? this.each(function (n) { this[t] = Y(this, e, n, this[t]) }) : this[0] && this[0][t] }, removeProp: function (t) { return t = D[t] || t, this.each(function () { delete this[t] }) }, data: function (t, n) { var r = "data-" + t.replace(v, "-$1").toLowerCase(), i = 1 in arguments ? this.attr(r, n) : this.attr(r); return null !== i ? Q(i) : e }, val: function (t) { return 0 in arguments ? (null == t && (t = ""), this.each(function (e) { this.value = Y(this, t, e, this.value) })) : this[0] && (this[0].multiple ? r(this[0]).find("option").filter(function () { return this.selected }).pluck("value") : this[0].value) }, offset: function (e) { if (e) return this.each(function (t) { var n = r(this), i = Y(this, e, t, n.offset()), o = n.offsetParent().offset(), s = { top: i.top - o.top, left: i.left - o.left }; "static" == n.css("position") && (s.position = "relative"), n.css(s) }); if (!this.length) return null; if (f.documentElement !== this[0] && !r.contains(f.documentElement, this[0])) return { top: 0, left: 0 }; var n = this[0].getBoundingClientRect(); return { left: n.left + t.pageXOffset, top: n.top + t.pageYOffset, width: Math.round(n.width), height: Math.round(n.height) } }, css: function (t, e) { if (arguments.length < 2) { var i = this[0]; if ("string" == typeof t) { if (!i) return; return i.style[O(t)] || getComputedStyle(i, "").getPropertyValue(t) } if (L(t)) { if (!i) return; var o = {}, s = getComputedStyle(i, ""); return r.each(t, function (t, e) { o[e] = i.style[O(e)] || s.getPropertyValue(e) }), o } } var a = ""; if ("string" == $(t)) e || 0 === e ? a = I(t) + ":" + _(t, e) : this.each(function () { this.style.removeProperty(I(t)) }); else for (n in t) t[n] || 0 === t[n] ? a += I(n) + ":" + _(n, t[n]) + ";" : this.each(function () { this.style.removeProperty(I(n)) }); return this.each(function () { this.style.cssText += ";" + a }) }, index: function (t) { return t ? this.indexOf(r(t)[0]) : this.parent().children().indexOf(this[0]) }, hasClass: function (t) { return t ? o.some.call(this, function (t) { return this.test(K(t)) }, V(t)) : !1 }, addClass: function (t) { return t ? this.each(function (e) { if ("className" in this) { i = []; var n = K(this), o = Y(this, t, e, n); o.split(/\s+/g).forEach(function (t) { r(this).hasClass(t) || i.push(t) }, this), i.length && K(this, n + (n ? " " : "") + i.join(" ")) } }) : this }, removeClass: function (t) { return this.each(function (n) { if ("className" in this) { if (t === e) return K(this, ""); i = K(this), Y(this, t, n, i).split(/\s+/g).forEach(function (t) { i = i.replace(V(t), " ") }), K(this, i.trim()) } }) }, toggleClass: function (t, n) { return t ? this.each(function (i) { var o = r(this), s = Y(this, t, i, K(this)); s.split(/\s+/g).forEach(function (t) { (n === e ? !o.hasClass(t) : n) ? o.addClass(t) : o.removeClass(t) }) }) : this }, scrollTop: function (t) { if (this.length) { var n = "scrollTop" in this[0]; return t === e ? n ? this[0].scrollTop : this[0].pageYOffset : this.each(n ? function () { this.scrollTop = t } : function () { this.scrollTo(this.scrollX, t) }) } }, scrollLeft: function (t) { if (this.length) { var n = "scrollLeft" in this[0]; return t === e ? n ? this[0].scrollLeft : this[0].pageXOffset : this.each(n ? function () { this.scrollLeft = t } : function () { this.scrollTo(t, this.scrollY) }) } }, position: function () { if (this.length) { var t = this[0], e = this.offsetParent(), n = this.offset(), i = g.test(e[0].nodeName) ? { top: 0, left: 0 } : e.offset(); return n.top -= parseFloat(r(t).css("margin-top")) || 0, n.left -= parseFloat(r(t).css("margin-left")) || 0, i.top += parseFloat(r(e[0]).css("border-top-width")) || 0, i.left += parseFloat(r(e[0]).css("border-left-width")) || 0, { top: n.top - i.top, left: n.left - i.left } } }, offsetParent: function () { return this.map(function () { for (var t = this.offsetParent || f.body; t && !g.test(t.nodeName) && "static" == r(t).css("position");)t = t.offsetParent; return t }) } }, r.fn.detach = r.fn.remove, ["width", "height"].forEach(function (t) { var n = t.replace(/./, function (t) { return t[0].toUpperCase() }); r.fn[t] = function (i) { var o, s = this[0]; return i === e ? k(s) ? s["inner" + n] : M(s) ? s.documentElement["scroll" + n] : (o = this.offset()) && o[t] : this.each(function (e) { s = r(this), s.css(t, Y(this, i, e, s[t]())) }) } }), x.forEach(function (n, i) { var o = i % 2; r.fn[n] = function () { var n, a, s = r.map(arguments, function (t) { var i = []; return n = $(t), "array" == n ? (t.forEach(function (t) { return t.nodeType !== e ? i.push(t) : r.zepto.isZ(t) ? i = i.concat(t.get()) : void (i = i.concat(N.fragment(t))) }), i) : "object" == n || null == t ? t : N.fragment(t) }), u = this.length > 1; return s.length < 1 ? this : this.each(function (e, n) { a = o ? n : n.parentNode, n = 0 == i ? n.nextSibling : 1 == i ? n.firstChild : 2 == i ? n : null; var c = r.contains(f.documentElement, a); s.forEach(function (e) { if (u) e = e.cloneNode(!0); else if (!a) return r(e).remove(); a.insertBefore(e, n), c && tt(e, function (e) { if (!(null == e.nodeName || "SCRIPT" !== e.nodeName.toUpperCase() || e.type && "text/javascript" !== e.type || e.src)) { var n = e.ownerDocument ? e.ownerDocument.defaultView : t; n.eval.call(n, e.innerHTML) } }) }) }) }, r.fn[o ? n + "To" : "insert" + (i ? "Before" : "After")] = function (t) { return r(t)[n](this), this } }), N.Z.prototype = X.prototype = r.fn, N.uniq = P, N.deserializeValue = Q, r.zepto = N, r }(); return t.Zepto = e, void 0 === t.$ && (t.$ = e), function (e) { function h(t) { return t._zid || (t._zid = n++) } function p(t, e, n, r) { if (e = d(e), e.ns) var i = m(e.ns); return (a[h(t)] || []).filter(function (t) { return t && (!e.e || t.e == e.e) && (!e.ns || i.test(t.ns)) && (!n || h(t.fn) === h(n)) && (!r || t.sel == r) }) } function d(t) { var e = ("" + t).split("."); return { e: e[0], ns: e.slice(1).sort().join(" ") } } function m(t) { return new RegExp("(?:^| )" + t.replace(" ", " .* ?") + "(?: |$)") } function g(t, e) { return t.del && !f && t.e in c || !!e } function v(t) { return l[t] || f && c[t] || t } function y(t, n, i, o, s, u, f) { var c = h(t), p = a[c] || (a[c] = []); n.split(/\s/).forEach(function (n) { if ("ready" == n) return e(document).ready(i); var a = d(n); a.fn = i, a.sel = s, a.e in l && (i = function (t) { var n = t.relatedTarget; return !n || n !== this && !e.contains(this, n) ? a.fn.apply(this, arguments) : void 0 }), a.del = u; var c = u || i; a.proxy = function (e) { if (e = T(e), !e.isImmediatePropagationStopped()) { e.data = o; var n = c.apply(t, e._args == r ? [e] : [e].concat(e._args)); return n === !1 && (e.preventDefault(), e.stopPropagation()), n } }, a.i = p.length, p.push(a), "addEventListener" in t && t.addEventListener(v(a.e), a.proxy, g(a, f)) }) } function x(t, e, n, r, i) { var o = h(t); (e || "").split(/\s/).forEach(function (e) { p(t, e, n, r).forEach(function (e) { delete a[o][e.i], "removeEventListener" in t && t.removeEventListener(v(e.e), e.proxy, g(e, i)) }) }) } function T(t, n) { return (n || !t.isDefaultPrevented) && (n || (n = t), e.each(w, function (e, r) { var i = n[e]; t[e] = function () { return this[r] = b, i && i.apply(n, arguments) }, t[r] = E }), t.timeStamp || (t.timeStamp = Date.now()), (n.defaultPrevented !== r ? n.defaultPrevented : "returnValue" in n ? n.returnValue === !1 : n.getPreventDefault && n.getPreventDefault()) && (t.isDefaultPrevented = b)), t } function S(t) { var e, n = { originalEvent: t }; for (e in t) j.test(e) || t[e] === r || (n[e] = t[e]); return T(n, t) } var r, n = 1, i = Array.prototype.slice, o = e.isFunction, s = function (t) { return "string" == typeof t }, a = {}, u = {}, f = "onfocusin" in t, c = { focus: "focusin", blur: "focusout" }, l = { mouseenter: "mouseover", mouseleave: "mouseout" }; u.click = u.mousedown = u.mouseup = u.mousemove = "MouseEvents", e.event = { add: y, remove: x }, e.proxy = function (t, n) { var r = 2 in arguments && i.call(arguments, 2); if (o(t)) { var a = function () { return t.apply(n, r ? r.concat(i.call(arguments)) : arguments) }; return a._zid = h(t), a } if (s(n)) return r ? (r.unshift(t[n], t), e.proxy.apply(null, r)) : e.proxy(t[n], t); throw new TypeError("expected function") }, e.fn.bind = function (t, e, n) { return this.on(t, e, n) }, e.fn.unbind = function (t, e) { return this.off(t, e) }, e.fn.one = function (t, e, n, r) { return this.on(t, e, n, r, 1) }; var b = function () { return !0 }, E = function () { return !1 }, j = /^([A-Z]|returnValue$|layer[XY]$|webkitMovement[XY]$)/, w = { preventDefault: "isDefaultPrevented", stopImmediatePropagation: "isImmediatePropagationStopped", stopPropagation: "isPropagationStopped" }; e.fn.delegate = function (t, e, n) { return this.on(e, t, n) }, e.fn.undelegate = function (t, e, n) { return this.off(e, t, n) }, e.fn.live = function (t, n) { return e(document.body).delegate(this.selector, t, n), this }, e.fn.die = function (t, n) { return e(document.body).undelegate(this.selector, t, n), this }, e.fn.on = function (t, n, a, u, f) { var c, l, h = this; return t && !s(t) ? (e.each(t, function (t, e) { h.on(t, n, a, e, f) }), h) : (s(n) || o(u) || u === !1 || (u = a, a = n, n = r), (u === r || a === !1) && (u = a, a = r), u === !1 && (u = E), h.each(function (r, o) { f && (c = function (t) { return x(o, t.type, u), u.apply(this, arguments) }), n && (l = function (t) { var r, s = e(t.target).closest(n, o).get(0); return s && s !== o ? (r = e.extend(S(t), { currentTarget: s, liveFired: o }), (c || u).apply(s, [r].concat(i.call(arguments, 1)))) : void 0 }), y(o, t, u, a, n, l || c) })) }, e.fn.off = function (t, n, i) { var a = this; return t && !s(t) ? (e.each(t, function (t, e) { a.off(t, n, e) }), a) : (s(n) || o(i) || i === !1 || (i = n, n = r), i === !1 && (i = E), a.each(function () { x(this, t, i, n) })) }, e.fn.trigger = function (t, n) { return t = s(t) || e.isPlainObject(t) ? e.Event(t) : T(t), t._args = n, this.each(function () { t.type in c && "function" == typeof this[t.type] ? this[t.type]() : "dispatchEvent" in this ? this.dispatchEvent(t) : e(this).triggerHandler(t, n) }) }, e.fn.triggerHandler = function (t, n) { var r, i; return this.each(function (o, a) { r = S(s(t) ? e.Event(t) : t), r._args = n, r.target = a, e.each(p(a, t.type || t), function (t, e) { return i = e.proxy(r), r.isImmediatePropagationStopped() ? !1 : void 0 }) }), i }, "focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function (t) { e.fn[t] = function (e) { return 0 in arguments ? this.bind(t, e) : this.trigger(t) } }), e.Event = function (t, e) { s(t) || (e = t, t = e.type); var n = document.createEvent(u[t] || "Events"), r = !0; if (e) for (var i in e) "bubbles" == i ? r = !!e[i] : n[i] = e[i]; return n.initEvent(t, r, !0), T(n) } }(e), function (e) { function p(t, n, r) { var i = e.Event(n); return e(t).trigger(i, r), !i.isDefaultPrevented() } function d(t, e, n, i) { return t.global ? p(e || r, n, i) : void 0 } function m(t) { t.global && 0 === e.active++ && d(t, null, "ajaxStart") } function g(t) { t.global && !--e.active && d(t, null, "ajaxStop") } function v(t, e) { var n = e.context; return e.beforeSend.call(n, t, e) === !1 || d(e, n, "ajaxBeforeSend", [t, e]) === !1 ? !1 : void d(e, n, "ajaxSend", [t, e]) } function y(t, e, n, r) { var i = n.context, o = "success"; n.success.call(i, t, o, e), r && r.resolveWith(i, [t, o, e]), d(n, i, "ajaxSuccess", [e, n, t]), b(o, e, n) } function x(t, e, n, r, i) { var o = r.context; r.error.call(o, n, e, t), i && i.rejectWith(o, [n, e, t]), d(r, o, "ajaxError", [n, r, t || e]), b(e, n, r) } function b(t, e, n) { var r = n.context; n.complete.call(r, e, t), d(n, r, "ajaxComplete", [e, n]), g(n) } function E(t, e, n) { if (n.dataFilter == j) return t; var r = n.context; return n.dataFilter.call(r, t, e) } function j() { } function w(t) { return t && (t = t.split(";", 2)[0]), t && (t == c ? "html" : t == f ? "json" : a.test(t) ? "script" : u.test(t) && "xml") || "text" } function T(t, e) { return "" == e ? t : (t + "&" + e).replace(/[&?]{1,2}/, "?") } function S(t) { t.processData && t.data && "string" != e.type(t.data) && (t.data = e.param(t.data, t.traditional)), !t.data || t.type && "GET" != t.type.toUpperCase() && "jsonp" != t.dataType || (t.url = T(t.url, t.data), t.data = void 0) } function C(t, n, r, i) { return e.isFunction(n) && (i = r, r = n, n = void 0), e.isFunction(r) || (i = r, r = void 0), { url: t, data: n, success: r, dataType: i } } function O(t, n, r, i) { var o, s = e.isArray(n), a = e.isPlainObject(n); e.each(n, function (n, u) { o = e.type(u), i && (n = r ? i : i + "[" + (a || "object" == o || "array" == o ? n : "") + "]"), !i && s ? t.add(u.name, u.value) : "array" == o || !r && "object" == o ? O(t, u, r, n) : t.add(n, u) }) } var i, o, n = +new Date, r = t.document, s = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, a = /^(?:text|application)\/javascript/i, u = /^(?:text|application)\/xml/i, f = "application/json", c = "text/html", l = /^\s*$/, h = r.createElement("a"); h.href = t.location.href, e.active = 0, e.ajaxJSONP = function (i, o) { if (!("type" in i)) return e.ajax(i); var c, p, s = i.jsonpCallback, a = (e.isFunction(s) ? s() : s) || "Zepto" + n++, u = r.createElement("script"), f = t[a], l = function (t) { e(u).triggerHandler("error", t || "abort") }, h = { abort: l }; return o && o.promise(h), e(u).on("load error", function (n, r) { clearTimeout(p), e(u).off().remove(), "error" != n.type && c ? y(c[0], h, i, o) : x(null, r || "error", h, i, o), t[a] = f, c && e.isFunction(f) && f(c[0]), f = c = void 0 }), v(h, i) === !1 ? (l("abort"), h) : (t[a] = function () { c = arguments }, u.src = i.url.replace(/\?(.+)=\?/, "?$1=" + a), r.head.appendChild(u), i.timeout > 0 && (p = setTimeout(function () { l("timeout") }, i.timeout)), h) }, e.ajaxSettings = { type: "GET", beforeSend: j, success: j, error: j, complete: j, context: null, global: !0, xhr: function () { return new t.XMLHttpRequest }, accepts: { script: "text/javascript, application/javascript, application/x-javascript", json: f, xml: "application/xml, text/xml", html: c, text: "text/plain" }, crossDomain: !1, timeout: 0, processData: !0, cache: !0, dataFilter: j }, e.ajax = function (n) { var u, f, s = e.extend({}, n || {}), a = e.Deferred && e.Deferred(); for (i in e.ajaxSettings) void 0 === s[i] && (s[i] = e.ajaxSettings[i]); m(s), s.crossDomain || (u = r.createElement("a"), u.href = s.url, u.href = u.href, s.crossDomain = h.protocol + "//" + h.host != u.protocol + "//" + u.host), s.url || (s.url = t.location.toString()), (f = s.url.indexOf("#")) > -1 && (s.url = s.url.slice(0, f)), S(s); var c = s.dataType, p = /\?.+=\?/.test(s.url); if (p && (c = "jsonp"), s.cache !== !1 && (n && n.cache === !0 || "script" != c && "jsonp" != c) || (s.url = T(s.url, "_=" + Date.now())), "jsonp" == c) return p || (s.url = T(s.url, s.jsonp ? s.jsonp + "=?" : s.jsonp === !1 ? "" : "callback=?")), e.ajaxJSONP(s, a); var P, d = s.accepts[c], g = {}, b = function (t, e) { g[t.toLowerCase()] = [t, e] }, C = /^([\w-]+:)\/\//.test(s.url) ? RegExp.$1 : t.location.protocol, N = s.xhr(), O = N.setRequestHeader; if (a && a.promise(N), s.crossDomain || b("X-Requested-With", "XMLHttpRequest"), b("Accept", d || "*/*"), (d = s.mimeType || d) && (d.indexOf(",") > -1 && (d = d.split(",", 2)[0]), N.overrideMimeType && N.overrideMimeType(d)), (s.contentType || s.contentType !== !1 && s.data && "GET" != s.type.toUpperCase()) && b("Content-Type", s.contentType || "application/x-www-form-urlencoded"), s.headers) for (o in s.headers) b(o, s.headers[o]); if (N.setRequestHeader = b, N.onreadystatechange = function () { if (4 == N.readyState) { N.onreadystatechange = j, clearTimeout(P); var t, n = !1; if (N.status >= 200 && N.status < 300 || 304 == N.status || 0 == N.status && "file:" == C) { if (c = c || w(s.mimeType || N.getResponseHeader("content-type")), "arraybuffer" == N.responseType || "blob" == N.responseType) t = N.response; else { t = N.responseText; try { t = E(t, c, s), "script" == c ? (1, eval)(t) : "xml" == c ? t = N.responseXML : "json" == c && (t = l.test(t) ? null : e.parseJSON(t)) } catch (r) { n = r } if (n) return x(n, "parsererror", N, s, a) } y(t, N, s, a) } else x(N.statusText || null, N.status ? "error" : "abort", N, s, a) } }, v(N, s) === !1) return N.abort(), x(null, "abort", N, s, a), N; var A = "async" in s ? s.async : !0; if (N.open(s.type, s.url, A, s.username, s.password), s.xhrFields) for (o in s.xhrFields) N[o] = s.xhrFields[o]; for (o in g) O.apply(N, g[o]); return s.timeout > 0 && (P = setTimeout(function () { N.onreadystatechange = j, N.abort(), x(null, "timeout", N, s, a) }, s.timeout)), N.send(s.data ? s.data : null), N }, e.get = function () { return e.ajax(C.apply(null, arguments)) }, e.post = function () { var t = C.apply(null, arguments); return t.type = "POST", e.ajax(t) }, e.getJSON = function () { var t = C.apply(null, arguments); return t.dataType = "json", e.ajax(t) }, e.fn.load = function (t, n, r) { if (!this.length) return this; var a, i = this, o = t.split(/\s/), u = C(t, n, r), f = u.success; return o.length > 1 && (u.url = o[0], a = o[1]), u.success = function (t) { i.html(a ? e("<div>").html(t.replace(s, "")).find(a) : t), f && f.apply(i, arguments) }, e.ajax(u), this }; var N = encodeURIComponent; e.param = function (t, n) { var r = []; return r.add = function (t, n) { e.isFunction(n) && (n = n()), null == n && (n = ""), this.push(N(t) + "=" + N(n)) }, O(r, t, n), r.join("&").replace(/%20/g, "+") } }(e), function (t) { t.fn.serializeArray = function () { var e, n, r = [], i = function (t) { return t.forEach ? t.forEach(i) : void r.push({ name: e, value: t }) }; return this[0] && t.each(this[0].elements, function (r, o) { n = o.type, e = o.name, e && "fieldset" != o.nodeName.toLowerCase() && !o.disabled && "submit" != n && "reset" != n && "button" != n && "file" != n && ("radio" != n && "checkbox" != n || o.checked) && i(t(o).val()) }), r }, t.fn.serialize = function () { var t = []; return this.serializeArray().forEach(function (e) { t.push(encodeURIComponent(e.name) + "=" + encodeURIComponent(e.value)) }), t.join("&") }, t.fn.submit = function (e) { if (0 in arguments) this.bind("submit", e); else if (this.length) { var n = t.Event("submit"); this.eq(0).trigger(n), n.isDefaultPrevented() || this.get(0).submit() } return this } }(e), function () { try { getComputedStyle(void 0) } catch (e) { var n = getComputedStyle; t.getComputedStyle = function (t, e) { try { return n(t, e) } catch (r) { return null } } } }(), e });
/*!
 * headroom.js v0.12.0 - Give your page some headroom. Hide your header until you need it
 * Copyright (c) 2020 Nick Williams - http://wicky.nillia.ms/headroom.js
 * License: MIT
 */

!function (t, n) { "object" == typeof exports && "undefined" != typeof module ? module.exports = n() : "function" == typeof define && define.amd ? define(n) : (t = t || self).Headroom = n() }(this, function () { "use strict"; function t() { return "undefined" != typeof window } function d(t) { return function (t) { return t && t.document && function (t) { return 9 === t.nodeType }(t.document) }(t) ? function (t) { var n = t.document, o = n.body, s = n.documentElement; return { scrollHeight: function () { return Math.max(o.scrollHeight, s.scrollHeight, o.offsetHeight, s.offsetHeight, o.clientHeight, s.clientHeight) }, height: function () { return t.innerHeight || s.clientHeight || o.clientHeight }, scrollY: function () { return void 0 !== t.pageYOffset ? t.pageYOffset : (s || o.parentNode || o).scrollTop } } }(t) : function (t) { return { scrollHeight: function () { return Math.max(t.scrollHeight, t.offsetHeight, t.clientHeight) }, height: function () { return Math.max(t.offsetHeight, t.clientHeight) }, scrollY: function () { return t.scrollTop } } }(t) } function n(t, s, e) { var n, o = function () { var n = !1; try { var t = { get passive() { n = !0 } }; window.addEventListener("test", t, t), window.removeEventListener("test", t, t) } catch (t) { n = !1 } return n }(), i = !1, r = d(t), l = r.scrollY(), a = {}; function c() { var t = Math.round(r.scrollY()), n = r.height(), o = r.scrollHeight(); a.scrollY = t, a.lastScrollY = l, a.direction = l < t ? "down" : "up", a.distance = Math.abs(t - l), a.isOutOfBounds = t < 0 || o < t + n, a.top = t <= s.offset[a.direction], a.bottom = o <= t + n, a.toleranceExceeded = a.distance > s.tolerance[a.direction], e(a), l = t, i = !1 } function h() { i || (i = !0, n = requestAnimationFrame(c)) } var u = !!o && { passive: !0, capture: !1 }; return t.addEventListener("scroll", h, u), c(), { destroy: function () { cancelAnimationFrame(n), t.removeEventListener("scroll", h, u) } } } function o(t) { return t === Object(t) ? t : { down: t, up: t } } function s(t, n) { n = n || {}, Object.assign(this, s.options, n), this.classes = Object.assign({}, s.options.classes, n.classes), this.elem = t, this.tolerance = o(this.tolerance), this.offset = o(this.offset), this.initialised = !1, this.frozen = !1 } return s.prototype = { constructor: s, init: function () { return s.cutsTheMustard && !this.initialised && (this.addClass("initial"), this.initialised = !0, setTimeout(function (t) { t.scrollTracker = n(t.scroller, { offset: t.offset, tolerance: t.tolerance }, t.update.bind(t)) }, 100, this)), this }, destroy: function () { this.initialised = !1, Object.keys(this.classes).forEach(this.removeClass, this), this.scrollTracker.destroy() }, unpin: function () { !this.hasClass("pinned") && this.hasClass("unpinned") || (this.addClass("unpinned"), this.removeClass("pinned"), this.onUnpin && this.onUnpin.call(this)) }, pin: function () { this.hasClass("unpinned") && (this.addClass("pinned"), this.removeClass("unpinned"), this.onPin && this.onPin.call(this)) }, freeze: function () { this.frozen = !0, this.addClass("frozen") }, unfreeze: function () { this.frozen = !1, this.removeClass("frozen") }, top: function () { this.hasClass("top") || (this.addClass("top"), this.removeClass("notTop"), this.onTop && this.onTop.call(this)) }, notTop: function () { this.hasClass("notTop") || (this.addClass("notTop"), this.removeClass("top"), this.onNotTop && this.onNotTop.call(this)) }, bottom: function () { this.hasClass("bottom") || (this.addClass("bottom"), this.removeClass("notBottom"), this.onBottom && this.onBottom.call(this)) }, notBottom: function () { this.hasClass("notBottom") || (this.addClass("notBottom"), this.removeClass("bottom"), this.onNotBottom && this.onNotBottom.call(this)) }, shouldUnpin: function (t) { return "down" === t.direction && !t.top && t.toleranceExceeded }, shouldPin: function (t) { return "up" === t.direction && t.toleranceExceeded || t.top }, addClass: function (t) { this.elem.classList.add.apply(this.elem.classList, this.classes[t].split(" ")) }, removeClass: function (t) { this.elem.classList.remove.apply(this.elem.classList, this.classes[t].split(" ")) }, hasClass: function (t) { return this.classes[t].split(" ").every(function (t) { return this.classList.contains(t) }, this.elem) }, update: function (t) { t.isOutOfBounds || !0 !== this.frozen && (t.top ? this.top() : this.notTop(), t.bottom ? this.bottom() : this.notBottom(), this.shouldUnpin(t) ? this.unpin() : this.shouldPin(t) && this.pin()) } }, s.options = { tolerance: { up: 0, down: 0 }, offset: 0, scroller: t() ? window : null, classes: { frozen: "headroom--frozen", pinned: "headroom--pinned", unpinned: "headroom--unpinned", top: "headroom--top", notTop: "headroom--not-top", bottom: "headroom--bottom", notBottom: "headroom--not-bottom", initial: "headroom" } }, s.cutsTheMustard = !!(t() && function () { }.bind && "classList" in document.documentElement && Object.assign && Object.keys && requestAnimationFrame), s });
/* Swup - CSS transitions between website pages.
 * @version https://github.com/gmrchk/swup/blob/d32c61eea1c9c14b811491de8db87155b7a58971/dist/swup.min.js
 * @link https://github.com/gmrchk/swup
 * @author Georgy Marchuk
 * @license The MIT License (MIT)
 */
(function e(t, n) { if (typeof exports === "object" && typeof module === "object") module.exports = n(); else if (typeof define === "function" && define.amd) define([], n); else if (typeof exports === "object") exports["Swup"] = n(); else t["Swup"] = n() })(window, function () { return function (e) { var t = {}; function n(r) { if (t[r]) { return t[r].exports } var o = t[r] = { i: r, l: false, exports: {} }; e[r].call(o.exports, o, o.exports, n); o.l = true; return o.exports } n.m = e; n.c = t; n.d = function (e, t, r) { if (!n.o(e, t)) { Object.defineProperty(e, t, { configurable: false, enumerable: true, get: r }) } }; n.r = function (e) { Object.defineProperty(e, "__esModule", { value: true }) }; n.n = function (e) { var t = e && e.__esModule ? function t() { return e["default"] } : function t() { return e }; n.d(t, "a", t); return t }; n.o = function (e, t) { return Object.prototype.hasOwnProperty.call(e, t) }; n.p = ""; return n(n.s = 23) }([function (e, t, n) { "use strict"; Object.defineProperty(t, "__esModule", { value: true }); var r = function () { function e(e, t) { for (var n = 0; n < t.length; n++) { var r = t[n]; r.enumerable = r.enumerable || false; r.configurable = true; if ("value" in r) r.writable = true; Object.defineProperty(e, r.key, r) } } return function (t, n, r) { if (n) e(t.prototype, n); if (r) e(t, r); return t } }(); function o(e, t) { if (!(e instanceof t)) { throw new TypeError("Cannot call a class as a function") } } var i = function () { function e() { o(this, e); this.link = document.createElement("a") } r(e, [{ key: "setPath", value: function e(t) { this.link.href = t } }, { key: "getPath", value: function e() { var t = this.link.pathname; if (t[0] != "/") { t = "/" + t } return t } }, { key: "getAddress", value: function e() { var t = this.link.pathname + this.link.search; if (t[0] != "/") { t = "/" + t } return t } }, { key: "getHash", value: function e() { return this.link.hash } }]); return e }(); t.default = i }, function (e, t, n) { "use strict"; e.exports = function (e) { if (this.options.debugMode) { console.log(e + "%c", "color: #009ACD") } } }, function (e, t, n) { "use strict"; e.exports = function (e, t) { var n = this; t = Object.assign({}, e.options, t); e.options = t; var r = function e() { var t = n.cache.getPage(window.location.pathname + window.location.search); var r = document.createElement("html"); r.innerHTML = t.originalContent; return r }; this.plugins.push(e); e.exec(t, this, r); return this.plugins } }, function (e, t, n) { "use strict"; var r = n(0); var o = i(r); function i(e) { return e && e.__esModule ? e : { default: e } } e.exports = function (e) { var t = this; if (this.options.preload) { var n = function e(n) { var r = new o.default; r.setPath(n); if (r.getAddress() != t.currentUrl && !t.cache.exists(r.getAddress()) && t.preloadPromise == null) { t.getPage({ url: r.getAddress() }, function (e) { if (e === null) { console.warn("Server error."); t.triggerEvent("serverError") } else { var n = t.getDataFromHtml(e); n.url = r.getAddress(); t.cache.cacheUrl(n, t.options.debugMode); t.triggerEvent("pagePreloaded") } }) } }; document.querySelectorAll("[data-swup-preload]").forEach(function (e) { n(e.href) }) } } }, function (e, t, n) { "use strict"; e.exports = function (e, t, n) { if (e == "/") { e = "/homepage" } if (t == "/") { t = "/homepage" } this.transition = { from: e.replace("/", ""), to: t.replace("/", "") }; if (n) { this.transition.custom = n } } }, function (e, t, n) { "use strict"; e.exports = function (e) { var t = this; var n = 0; for (var r = 0; r < this.options.elements.length; r++) { if (e.querySelector(this.options.elements[r]) == null) { console.warn("Element " + this.options.elements[r] + " is not in current page.") } else { [].forEach.call(document.body.querySelectorAll(this.options.elements[r]), function (o, i) { e.querySelectorAll(t.options.elements[r])[i].dataset.swup = n; n++ }) } } } }, function (e, t, n) { "use strict"; e.exports = function (e) { if (this.options.scroll && !e) { if (this.scrollToElement != null) { var t = this; var n = document.querySelector(t.scrollToElement); if (n != null) { var r = n.getBoundingClientRect().top + window.pageYOffset; t.scrollTo(document.body, r) } else { console.warn("Element for offset not found (" + t.scrollToElement + ")") } t.scrollToElement = null } else { this.scrollTo(document.body, 0) } } } }, function (e, t, n) { "use strict"; e.exports = function (e) { var t = e.toString().toLowerCase().replace(/\s+/g, "-").replace(/\//g, "-").replace(/[^\w\-]+/g, "").replace(/\-\-+/g, "-").replace(/^-+/, "").replace(/-+$/, ""); if (t[0] == "/") t = t.splice(1); if (t == "") t = "homepage"; return t } }, function (e, t, n) { "use strict"; e.exports = function (e, t) { var n = this; var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.options.animateScroll; var o = document.body; var i = -1; var s = 1; var a = 1 - this.options.scrollFriction; var l = this.options.scrollAcceleration; var u = 100; var c = 0; var d = 400; var f = null; function h() { return document.body.scrollTop || document.documentElement.scrollTop } var p = function e() { var t = v(); m(); if (Math.abs(t) > .1) { f = requestAnimationFrame(e) } else { n.triggerEvent("scrollDone") } }; function v() { var e = d - u; var t = e * l; g(t); c *= a; u += c; return e } var g = function e(t) { c += t }; var m = function e() { window.scrollTo(0, u) }; window.addEventListener("mousewheel", function (e) { if (f) { cancelAnimationFrame(f); f = null } }, { passive: true }); var w = function e(t, n) { u = h(); d = t; c = 0; p() }; this.triggerEvent("scrollStart"); if (r == 0) { window.scrollTo(0, t); this.triggerEvent("scrollDone") } else { w(t) } } }, function (e, t, n) { "use strict"; e.exports = function () { this.currentUrl = window.location.pathname + window.location.search } }, function (e, t, n) { "use strict"; e.exports = function (e) { if (this.options.debugMode) { console.log("%cswup:" + "%c" + e, "color: #343434", "color: #009ACD") } var t = new CustomEvent("swup:" + e, { detail: e }); document.dispatchEvent(t) } }, function (e, t, n) { "use strict"; e.exports = function (e) { window.history.pushState({ url: e || window.location.href.split(window.location.hostname)[1], random: Math.random(), source: "swup" }, document.getElementsByTagName("title")[0].innerText, e || window.location.href.split(window.location.hostname)[1]) } }, function (e, t, n) { "use strict"; e.exports = function (e, t) { setTimeout(function () { document.body.classList.remove("is-changing"); history.back() }, 100) } }, function (e, t, n) { "use strict"; var r = Array.prototype.forEach; e.exports = function (e, t) { var n = this; document.documentElement.classList.remove("is-leaving"); if (!t) { document.documentElement.classList.add("is-rendering") } this.triggerEvent("willReplaceContent"); for (var o = 0; o < e.blocks.length; o++) { document.body.querySelector('[data-swup="' + o + '"]').outerHTML = e.blocks[o] } document.title = e.title; this.triggerEvent("contentReplaced"); this.triggerEvent("pageView"); if (!this.options.cache) { this.cache.empty(this.options.debugMode) } setTimeout(function () { document.documentElement.classList.remove("is-animating") }, 10); if (this.options.pageClassPrefix !== false) { document.body.className.split(" ").forEach(function (e) { if (e != "" && e.includes(n.options.pageClassPrefix)) { document.body.classList.remove(e) } }) } if (e.pageClass != "") { e.pageClass.split(" ").forEach(function (e) { if (e != "" && e.includes(n.options.pageClassPrefix)) { document.body.classList.add(e) } }) } if (!this.options.doScrollingRightAway || this.scrollToElement) { this.doScrolling(t) } var i = document.querySelectorAll(this.options.animationSelector); var s = []; r.call(i, function (e) { var t = new Promise(function (t) { e.addEventListener(n.transitionEndEvent, function (n) { if (e == n.target) { t() } }) }); s.push(t) }); this.preloadPages(); Promise.all(s).then(function () { n.triggerEvent("animationInDone"); document.documentElement.classList.forEach(function (e) { if (e.startsWith("to-")) { document.documentElement.classList.remove(e) } }); document.documentElement.classList.remove("is-changing"); document.documentElement.classList.remove("is-rendering") }); this.getUrl() } }, function (e, t, n) { "use strict"; var r = Array.prototype.forEach; e.exports = function (e, t) { var n = this; var o = null; if (this.options.doScrollingRightAway && !this.scrollToElement) { this.doScrolling(t) } var i = []; if (!t) { document.documentElement.classList.add("is-changing"); document.documentElement.classList.add("is-leaving"); document.documentElement.classList.add("is-animating"); document.documentElement.classList.add("to-" + this.classify(e.url)); var s = document.querySelectorAll(this.options.animationSelector); r.call(s, function (e) { var t = new Promise(function (t) { e.addEventListener(n.transitionEndEvent, function (n) { if (e == n.target) { t() } }) }); i.push(t) }); Promise.all(i).then(function () { n.triggerEvent("animationOutDone") }); if (this.scrollToElement != null) { var a = e.url + this.scrollToElement } else { var a = e.url } this.createState(a) } else { this.triggerEvent("animationSkipped") } if (this.cache.exists(e.url)) { var l = new Promise(function (e) { e() }); this.triggerEvent("pageRetrievedFromCache") } else { if (!this.preloadPromise || this.preloadPromise.route != e.url) { var l = new Promise(function (t) { n.getPage(e, function (r) { if (r === null) { console.warn("Server error."); n.triggerEvent("serverError"); n.goBack() } else { var o = n.getDataFromHtml(r); o.url = e.url; n.cache.cacheUrl(o, n.options.debugMode); n.triggerEvent("pageLoaded") } t() }) }) } else { var l = this.preloadPromise } } Promise.all(i.concat([l])).then(function () { o = n.cache.getPage(e.url); n.renderPage(o, t); n.preloadPromise = null }) } }, function (e, t, n) { "use strict"; e.exports = function (e) { var t = this; var n = e.replace("<body", '<div id="swupBody"').replace("</body>", "</div>"); var r = document.createElement("div"); r.innerHTML = n; var o = []; for (var i = 0; i < this.options.elements.length; i++) { if (r.querySelector(this.options.elements[i]) == null) { console.warn("Element " + this.options.elements[i] + " is not found cached page.") } else { [].forEach.call(document.body.querySelectorAll(this.options.elements[i]), function (e, n) { r.querySelectorAll(t.options.elements[i])[n].dataset.swup = o.length; o.push(r.querySelectorAll(t.options.elements[i])[n].outerHTML) }) } } var s = { title: r.querySelector("title").innerText, pageClass: r.querySelector("#swupBody").className, originalContent: e, blocks: o }; return s } }, function (e, t, n) { "use strict"; var r = Object.assign || function (e) { for (var t = 1; t < arguments.length; t++) { var n = arguments[t]; for (var r in n) { if (Object.prototype.hasOwnProperty.call(n, r)) { e[r] = n[r] } } } return e }; e.exports = function (e) { var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false; var n = { url: window.location.pathname + window.location.search, method: "GET", data: null }; var o = r({}, n, e); var i = new XMLHttpRequest; i.onreadystatechange = function () { if (i.readyState === 4) { if (i.status !== 500) { t(i.responseText, i) } else { t(null, i) } } }; i.open(o.method, o.url, true); i.setRequestHeader("X-Requested-With", "swup"); i.send(o.data); return i } }, function (e, t, n) { "use strict"; e.exports = function e() { var t = document.createElement("div"); var n = { WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd otransitionend", transition: "transitionend" }; for (var r in n) { if (t.style[r] !== undefined) { return n[r] } } return false } }, function (e, t, n) { "use strict"; Object.defineProperty(t, "__esModule", { value: true }); var r = function () { function e(e, t) { for (var n = 0; n < t.length; n++) { var r = t[n]; r.enumerable = r.enumerable || false; r.configurable = true; if ("value" in r) r.writable = true; Object.defineProperty(e, r.key, r) } } return function (t, n, r) { if (n) e(t.prototype, n); if (r) e(t, r); return t } }(); function o(e, t) { if (!(e instanceof t)) { throw new TypeError("Cannot call a class as a function") } } var i = function () { function e() { o(this, e); this.pages = {}; this.count = 0; this.last = null } r(e, [{ key: "cacheUrl", value: function e(t, n) { this.count++; if (t.url in this.pages === false) { this.pages[t.url] = t } this.last = this.pages[t.url]; if (n) { this.displayCache() } } }, { key: "getPage", value: function e(t) { return this.pages[t] } }, { key: "displayCache", value: function e() { console.groupCollapsed("Cache (" + Object.keys(this.pages).length + ")"); for (var t in this.pages) { console.log(this.pages[t]) } console.groupEnd() } }, { key: "exists", value: function e(t) { if (t in this.pages) return true; return false } }, { key: "empty", value: function e(t) { this.pages = {}; this.count = 0; this.last = null; if (t) { console.log("Cache cleared") } } }, { key: "remove", value: function e(t) { delete this.pages[t] } }]); return e }(); t.default = i }, function (e, t) { var n = function () { var e = window.navigator.userAgent; var t = e.indexOf("MSIE "); if (t > 0) { return parseInt(e.substring(t + 5, e.indexOf(".", t)), 10) } var n = e.indexOf("Trident/"); if (n > 0) { var r = e.indexOf("rv:"); return parseInt(e.substring(r + 3, e.indexOf(".", r)), 10) } var o = e.indexOf("Edge/"); if (o > 0) { return parseInt(e.substring(o + 5, e.indexOf(".", o)), 10) } return false }; e.exports = n }, function (e, t) { var n = 9; if (typeof Element !== "undefined" && !Element.prototype.matches) { var r = Element.prototype; r.matches = r.matchesSelector || r.mozMatchesSelector || r.msMatchesSelector || r.oMatchesSelector || r.webkitMatchesSelector } function o(e, t) { while (e && e.nodeType !== n) { if (typeof e.matches === "function" && e.matches(t)) { return e } e = e.parentNode } } e.exports = o }, function (e, t, n) { var r = n(20); function o(e, t, n, r, o) { var s = i.apply(this, arguments); e.addEventListener(n, s, o); return { destroy: function () { e.removeEventListener(n, s, o) } } } function i(e, t, n, o) { return function (n) { n.delegateTarget = r(n.target, t); if (n.delegateTarget) { o.call(e, n) } } } e.exports = o }, function (e, t, n) { "use strict"; Object.defineProperty(t, "__esModule", { value: true }); var r = Object.assign || function (e) { for (var t = 1; t < arguments.length; t++) { var n = arguments[t]; for (var r in n) { if (Object.prototype.hasOwnProperty.call(n, r)) { e[r] = n[r] } } } return e }; var o = function () { function e(e, t) { for (var n = 0; n < t.length; n++) { var r = t[n]; r.enumerable = r.enumerable || false; r.configurable = true; if ("value" in r) r.writable = true; Object.defineProperty(e, r.key, r) } } return function (t, n, r) { if (n) e(t.prototype, n); if (r) e(t, r); return t } }(); var i = n(21); var s = X(i); var a = n(19); var l = X(a); var u = n(18); var c = X(u); var d = n(0); var f = X(d); var h = n(17); var p = X(h); var v = n(16); var g = X(v); var m = n(15); var w = X(m); var E = n(14); var y = X(E); var b = n(13); var P = X(b); var S = n(12); var T = X(S); var k = n(11); var x = X(k); var L = n(10); var A = X(L); var C = n(9); var O = X(C); var M = n(8); var H = X(M); var R = n(7); var q = X(R); var _ = n(6); var j = X(_); var U = n(5); var I = X(U); var D = n(4); var F = X(D); var N = n(3); var B = X(N); var K = n(2); var W = X(K); var z = n(1); var V = X(z); function X(e) { return e && e.__esModule ? e : { default: e } } function Y(e, t) { if (!(e instanceof t)) { throw new TypeError("Cannot call a class as a function") } } var G = function () { function e(t) { Y(this, e); var n = { cache: true, animationSelector: '[class^="a-"]', elements: ["#swup"], pageClassPrefix: "", debugMode: false, scroll: true, doScrollingRightAway: false, animateScroll: true, scrollFriction: .3, scrollAcceleration: .04, preload: true, support: true, disableIE: false, plugins: [], skipPopStateHandling: function e(t) { if (t.state && t.state.source == "swup") { return false } return true }, LINK_SELECTOR: 'a[href^="/"]:not([data-no-swup]), a[href^="#"]:not([data-no-swup]), a[xlink\\:href]', FORM_SELECTOR: "form[data-swup-form]" }; this.transition = {}; var o = r({}, n, t); this.mobile = false; this.scrollToElement = null; this.preloadPromise = null; this.options = o; this.plugins = []; this.getUrl = O.default; this.cache = new c.default; this.link = new f.default; this.transitionEndEvent = (0, p.default)(); this.getDataFromHtml = w.default; this.getPage = g.default; this.scrollTo = H.default; this.loadPage = y.default; this.renderPage = P.default; this.goBack = T.default; this.createState = x.default; this.triggerEvent = A.default; this.classify = q.default; this.doScrolling = j.default; this.markSwupElements = I.default; this.updateTransition = F.default; this.preloadPages = B.default; this.usePlugin = W.default; this.log = V.default; this.detectie = l.default; this.enable = this.enable; this.destroy = this.destroy; if (window.innerWidth <= 767) { this.mobile = true } if (this.options.debugMode) { window.swup = this } this.getUrl(); this.enable() } o(e, [{ key: "enable", value: function e() { var t = this; if (this.options.support) { if (!("pushState" in window.history)) { console.warn("pushState is not supported"); return } if ((0, p.default)()) { this.transitionEndEvent = (0, p.default)() } else { console.warn("transitionEnd detection is not supported"); return } if (typeof Promise === "undefined" || Promise.toString().indexOf("[native code]") === -1) { console.warn("Promise is not supported"); return } } if (this.options.disableIE && this.detectie()) { return } this.delegatedListeners = {}; this.delegatedListeners.click = (0, s.default)(document, this.options.LINK_SELECTOR, "click", this.linkClickHandler.bind(this)); this.delegatedListeners.mouseover = (0, s.default)(document.body, this.options.LINK_SELECTOR, "mouseover", this.linkMouseoverHandler.bind(this)); this.delegatedListeners.formSubmit = (0, s.default)(document, this.options.FORM_SELECTOR, "submit", this.formSubmitHandler.bind(this)); window.addEventListener("popstate", this.popStateHandler.bind(this)); var n = this.getDataFromHtml(document.documentElement.outerHTML); n.url = this.currentUrl; if (this.options.cache) { this.cache.cacheUrl(n, this.options.debugMode) } this.markSwupElements(document.documentElement); this.options.plugins.forEach(function (e) { return t.usePlugin(e) }); window.history.replaceState(Object.assign({}, window.history.state, { url: window.location.href, random: Math.random(), source: "swup" }), document.title, window.location.href); this.triggerEvent("enabled"); document.documentElement.classList.add("swup-enabled"); this.triggerEvent("pageView"); this.preloadPages() } }, { key: "destroy", value: function e() { this.delegatedListeners.click.destroy(); this.delegatedListeners.mouseover.destroy(); window.removeEventListener("popstate", this.popStateHandler.bind(this)); this.cache.empty(); document.querySelectorAll("[data-swup]").forEach(function (e) { delete e.dataset.swup }); this.triggerEvent("disabled"); document.documentElement.classList.remove("swup-enabled") } }, { key: "linkClickHandler", value: function e(t) { if (!t.metaKey) { this.triggerEvent("clickLink"); var n = new f.default; t.preventDefault(); n.setPath(t.delegateTarget.href); if (n.getAddress() == this.currentUrl || n.getAddress() == "") { if (n.getHash() != "") { this.triggerEvent("samePageWithHash"); var r = document.querySelector(n.getHash()); if (r != null) { if (this.options.scroll) { var o = r.getBoundingClientRect().top + window.pageYOffset; this.scrollTo(document.body, o) } history.replaceState(undefined, undefined, n.getHash()) } else { console.warn("Element for offset not found (" + n.getHash() + ")") } } else { this.triggerEvent("samePage"); if (this.options.scroll) { this.scrollTo(document.body, 0, 1) } } } else { if (n.getHash() != "") { this.scrollToElement = n.getHash() } var i = t.delegateTarget.dataset.swupClass; if (i != null) { this.updateTransition(window.location.pathname, n.getAddress(), t.delegateTarget.dataset.swupClass); document.documentElement.classList.add("to-" + i) } else { this.updateTransition(window.location.pathname, n.getAddress()) } this.loadPage({ url: n.getAddress() }, false) } } else { this.triggerEvent("openPageInNewTab") } } }, { key: "linkMouseoverHandler", value: function e(t) { var n = this; this.triggerEvent("hoverLink"); if (this.options.preload) { var r = new f.default; r.setPath(t.delegateTarget.href); if (r.getAddress() != this.currentUrl && !this.cache.exists(r.getAddress()) && this.preloadPromise == null) { this.preloadPromise = new Promise(function (e) { n.getPage({ url: r.getAddress() }, function (t) { if (t === null) { console.warn("Server error."); n.triggerEvent("serverError") } else { var o = n.getDataFromHtml(t); o.url = r.getAddress(); n.cache.cacheUrl(o, n.options.debugMode); n.triggerEvent("pagePreloaded") } e(); n.preloadPromise = null }) }); this.preloadPromise.route = r.getAddress() } } } }, { key: "formSubmitHandler", value: function e(t) { if (!t.metaKey) { this.triggerEvent("submitForm"); t.preventDefault(); var n = t.target; var r = new FormData(n); var o = new f.default; o.setPath(n.action); if (o.getHash() != "") { this.scrollToElement = o.getHash() } if (n.method.toLowerCase() != "get") { this.cache.remove(o.getAddress()); this.loadPage({ url: o.getAddress(), method: n.method, data: r }) } else { var i = o.getAddress() || window.location.href; var s = n.querySelectorAll("input"); if (i.indexOf("?") == -1) { i += "?" } else { i += "&" } s.forEach(function (e) { if (e.type == "checkbox" || e.type == "radio") { if (e.checked) { i += encodeURIComponent(e.name) + "=" + encodeURIComponent(e.value) + "&" } } else { i += encodeURIComponent(e.name) + "=" + encodeURIComponent(e.value) + "&" } }); i = i.slice(0, -1); this.cache.remove(i); this.loadPage({ url: i }) } } else { this.triggerEvent("openFormSubmitInNewTab") } } }, { key: "popStateHandler", value: function e(t) { var n = new f.default; if (this.options.skipPopStateHandling(t)) return; n.setPath(t.state ? t.state.url : window.location.pathname); if (n.getHash() != "") { this.scrollToElement = n.getHash() } else { t.preventDefault() } this.triggerEvent("popState"); this.loadPage({ url: n.getAddress() }, t) } }]); return e }(); t.default = G }, function (e, t, n) { "use strict"; var r = n(22); var o = i(r); function i(e) { return e && e.__esModule ? e : { default: e } } e.exports = o.default }]) });
/* Swup - swupMergeHeadPlugin */
(function e(r, t) { if (typeof exports === "object" && typeof module === "object") module.exports = t(); else if (typeof define === "function" && define.amd) define([], t); else if (typeof exports === "object") exports["swupMergeHeadPlugin"] = t(); else r["swupMergeHeadPlugin"] = t() })(window, function () { return function (e) { var r = {}; function t(n) { if (r[n]) { return r[n].exports } var o = r[n] = { i: n, l: false, exports: {} }; e[n].call(o.exports, o, o.exports, t); o.l = true; return o.exports } t.m = e; t.c = r; t.d = function (e, r, n) { if (!t.o(e, r)) { Object.defineProperty(e, r, { configurable: false, enumerable: true, get: n }) } }; t.r = function (e) { Object.defineProperty(e, "__esModule", { value: true }) }; t.n = function (e) { var r = e && e.__esModule ? function r() { return e["default"] } : function r() { return e }; t.d(r, "a", r); return r }; t.o = function (e, r) { return Object.prototype.hasOwnProperty.call(e, r) }; t.p = ""; return t(t.s = 0) }([function (e, r, t) { "use strict"; e.exports = { name: "swupMergeHeadPlugin", options: { runScripts: false }, exec: function e(r, t, n) { document.addEventListener("swup:contentReplaced", function () { var e = document.querySelector("head"); var r = n().querySelector("head"); o(e, r) }); var o = function e(n, o) { var a = n.children; var u = o.children; var i = []; var l = []; for (var c = 0; c < a.length; c++) { var d = a[c]; var f = d.outerHTML; var p = false; var s = void 0; for (var v = 0; v < u.length; v++) { s = u[v]; var h = s.outerHTML; if (h === f) { p = true; break } } if (p) { l.push(s) } else { i.push(d) } } for (var g = 0; g < l.length; g++) { o.removeChild(l[g]) } for (var m = 0; m < i.length; m++) { n.removeChild(i[m]) } var y = o.children.length; var x = i.length; var b = document.createDocumentFragment(); for (var j = 0; j < o.children.length; j++) { b.appendChild(o.children[j]) } n.appendChild(b); if (r.runScripts) { o.querySelectorAll("script").forEach(function (e) { if (e.tagName == "SCRIPT" && (e.type == null || e.type == "" || e.type == "text/javascript")) { var r = document.createElement("script"); if (e.src != null && e.src != "") { r.src = e.src } else { var t = document.createTextNode(e.innerText); r.appendChild(t) } if (e.type != null && e.type != "") { r.type = e.type } n.appendChild(r) } else { } }) } t.log("Removed " + x + " / added " + y + " tags in head") } } } }]) });
/**
 * sticky-sidebar - A JavaScript plugin for making smart and high performance.
 * @version v3.3.1
 * @link https://github.com/abouolia/sticky-sidebar
 * @author Ahmed Bouhuolia
 * @license The MIT License (MIT)
**/
!function (t, e) { "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e(t.StickySidebar = {}) }(this, function (t) { "use strict"; "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self && self; var e, i, n = (function (t, e) { (function (t) { Object.defineProperty(t, "__esModule", { value: !0 }); var l, n, e = function () { function n(t, e) { for (var i = 0; i < e.length; i++) { var n = e[i]; n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n) } } return function (t, e, i) { return e && n(t.prototype, e), i && n(t, i), t } }(), i = (l = ".stickySidebar", n = { topSpacing: 0, bottomSpacing: 0, containerSelector: !1, innerWrapperSelector: ".inner-wrapper-sticky", stickyClass: "is-affixed", resizeSensor: !0, minWidth: !1 }, function () { function c(t) { var e = this, i = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}; if (function (t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }(this, c), this.options = c.extend(n, i), this.sidebar = "string" == typeof t ? document.querySelector(t) : t, void 0 === this.sidebar) throw new Error("There is no specific sidebar element."); this.sidebarInner = !1, this.container = this.sidebar.parentElement, this.affixedType = "STATIC", this.direction = "down", this.support = { transform: !1, transform3d: !1 }, this._initialized = !1, this._reStyle = !1, this._breakpoint = !1, this.dimensions = { translateY: 0, maxTranslateY: 0, topSpacing: 0, lastTopSpacing: 0, bottomSpacing: 0, lastBottomSpacing: 0, sidebarHeight: 0, sidebarWidth: 0, containerTop: 0, containerHeight: 0, viewportHeight: 0, viewportTop: 0, lastViewportTop: 0 }, ["handleEvent"].forEach(function (t) { e[t] = e[t].bind(e) }), this.initialize() } return e(c, [{ key: "initialize", value: function () { var i = this; if (this._setSupportFeatures(), this.options.innerWrapperSelector && (this.sidebarInner = this.sidebar.querySelector(this.options.innerWrapperSelector), null === this.sidebarInner && (this.sidebarInner = !1)), !this.sidebarInner) { var t = document.createElement("div"); for (t.setAttribute("class", "inner-wrapper-sticky"), this.sidebar.appendChild(t); this.sidebar.firstChild != t;)t.appendChild(this.sidebar.firstChild); this.sidebarInner = this.sidebar.querySelector(".inner-wrapper-sticky") } if (this.options.containerSelector) { var e = document.querySelectorAll(this.options.containerSelector); if ((e = Array.prototype.slice.call(e)).forEach(function (t, e) { t.contains(i.sidebar) && (i.container = t) }), !e.length) throw new Error("The container does not contains on the sidebar.") } "function" != typeof this.options.topSpacing && (this.options.topSpacing = parseInt(this.options.topSpacing) || 0), "function" != typeof this.options.bottomSpacing && (this.options.bottomSpacing = parseInt(this.options.bottomSpacing) || 0), this._widthBreakpoint(), this.calcDimensions(), this.stickyPosition(), this.bindEvents(), this._initialized = !0 } }, { key: "bindEvents", value: function () { window.addEventListener("resize", this, { passive: !0, capture: !1 }), window.addEventListener("scroll", this, { passive: !0, capture: !1 }), this.sidebar.addEventListener("update" + l, this), this.options.resizeSensor && "undefined" != typeof ResizeSensor && (new ResizeSensor(this.sidebarInner, this.handleEvent), new ResizeSensor(this.container, this.handleEvent)) } }, { key: "handleEvent", value: function (t) { this.updateSticky(t) } }, { key: "calcDimensions", value: function () { if (!this._breakpoint) { var t = this.dimensions; t.containerTop = c.offsetRelative(this.container).top, t.containerHeight = this.container.clientHeight, t.containerBottom = t.containerTop + t.containerHeight, t.sidebarHeight = this.sidebarInner.offsetHeight, t.sidebarWidth = this.sidebarInner.offsetWidth, t.viewportHeight = window.innerHeight, t.maxTranslateY = t.containerHeight - t.sidebarHeight, this._calcDimensionsWithScroll() } } }, { key: "_calcDimensionsWithScroll", value: function () { var t = this.dimensions; t.sidebarLeft = c.offsetRelative(this.sidebar).left, t.viewportTop = document.documentElement.scrollTop || document.body.scrollTop, t.viewportBottom = t.viewportTop + t.viewportHeight, t.viewportLeft = document.documentElement.scrollLeft || document.body.scrollLeft, t.topSpacing = this.options.topSpacing, t.bottomSpacing = this.options.bottomSpacing, "function" == typeof t.topSpacing && (t.topSpacing = parseInt(t.topSpacing(this.sidebar)) || 0), "function" == typeof t.bottomSpacing && (t.bottomSpacing = parseInt(t.bottomSpacing(this.sidebar)) || 0), "VIEWPORT-TOP" === this.affixedType ? t.topSpacing < t.lastTopSpacing && (t.translateY += t.lastTopSpacing - t.topSpacing, this._reStyle = !0) : "VIEWPORT-BOTTOM" === this.affixedType && t.bottomSpacing < t.lastBottomSpacing && (t.translateY += t.lastBottomSpacing - t.bottomSpacing, this._reStyle = !0), t.lastTopSpacing = t.topSpacing, t.lastBottomSpacing = t.bottomSpacing } }, { key: "isSidebarFitsViewport", value: function () { var t = this.dimensions, e = "down" === this.scrollDirection ? t.lastBottomSpacing : t.lastTopSpacing; return this.dimensions.sidebarHeight + e < this.dimensions.viewportHeight } }, { key: "observeScrollDir", value: function () { var t = this.dimensions; if (t.lastViewportTop !== t.viewportTop) { var e = "down" === this.direction ? Math.min : Math.max; t.viewportTop === e(t.viewportTop, t.lastViewportTop) && (this.direction = "down" === this.direction ? "up" : "down") } } }, { key: "getAffixType", value: function () { this._calcDimensionsWithScroll(); var t = this.dimensions, e = t.viewportTop + t.topSpacing, i = this.affixedType; return e <= t.containerTop || t.containerHeight <= t.sidebarHeight ? (t.translateY = 0, i = "STATIC") : i = "up" === this.direction ? this._getAffixTypeScrollingUp() : this._getAffixTypeScrollingDown(), t.translateY = Math.max(0, t.translateY), t.translateY = Math.min(t.containerHeight, t.translateY), t.translateY = Math.round(t.translateY), t.lastViewportTop = t.viewportTop, i } }, { key: "_getAffixTypeScrollingDown", value: function () { var t = this.dimensions, e = t.sidebarHeight + t.containerTop, i = t.viewportTop + t.topSpacing, n = t.viewportBottom - t.bottomSpacing, o = this.affixedType; return this.isSidebarFitsViewport() ? t.sidebarHeight + i >= t.containerBottom ? (t.translateY = t.containerBottom - e, o = "CONTAINER-BOTTOM") : i >= t.containerTop && (t.translateY = i - t.containerTop, o = "VIEWPORT-TOP") : t.containerBottom <= n ? (t.translateY = t.containerBottom - e, o = "CONTAINER-BOTTOM") : e + t.translateY <= n ? (t.translateY = n - e, o = "VIEWPORT-BOTTOM") : t.containerTop + t.translateY <= i && 0 !== t.translateY && t.maxTranslateY !== t.translateY && (o = "VIEWPORT-UNBOTTOM"), o } }, { key: "_getAffixTypeScrollingUp", value: function () { var t = this.dimensions, e = t.sidebarHeight + t.containerTop, i = t.viewportTop + t.topSpacing, n = t.viewportBottom - t.bottomSpacing, o = this.affixedType; return i <= t.translateY + t.containerTop ? (t.translateY = i - t.containerTop, o = "VIEWPORT-TOP") : t.containerBottom <= n ? (t.translateY = t.containerBottom - e, o = "CONTAINER-BOTTOM") : this.isSidebarFitsViewport() || t.containerTop <= i && 0 !== t.translateY && t.maxTranslateY !== t.translateY && (o = "VIEWPORT-UNBOTTOM"), o } }, { key: "_getStyle", value: function (t) { if (void 0 !== t) { var e = { inner: {}, outer: {} }, i = this.dimensions; switch (t) { case "VIEWPORT-TOP": e.inner = { position: "fixed", top: i.topSpacing, left: i.sidebarLeft - i.viewportLeft, width: i.sidebarWidth }; break; case "VIEWPORT-BOTTOM": e.inner = { position: "fixed", top: "auto", left: i.sidebarLeft, bottom: i.bottomSpacing, width: i.sidebarWidth }; break; case "CONTAINER-BOTTOM": case "VIEWPORT-UNBOTTOM": var n = this._getTranslate(0, i.translateY + "px"); e.inner = n ? { transform: n } : { position: "absolute", top: i.translateY, width: i.sidebarWidth } }switch (t) { case "VIEWPORT-TOP": case "VIEWPORT-BOTTOM": case "VIEWPORT-UNBOTTOM": case "CONTAINER-BOTTOM": e.outer = { height: i.sidebarHeight, position: "relative" } }return e.outer = c.extend({ height: "", position: "" }, e.outer), e.inner = c.extend({ position: "relative", top: "", left: "", bottom: "", width: "", transform: "" }, e.inner), e } } }, { key: "stickyPosition", value: function (t) { if (!this._breakpoint) { t = this._reStyle || t || !1, this.options.topSpacing, this.options.bottomSpacing; var e = this.getAffixType(), i = this._getStyle(e); if ((this.affixedType != e || t) && e) { var n = "affix." + e.toLowerCase().replace("viewport-", "") + l; for (var o in c.eventTrigger(this.sidebar, n), "STATIC" === e ? c.removeClass(this.sidebar, this.options.stickyClass) : c.addClass(this.sidebar, this.options.stickyClass), i.outer) { var s = "number" == typeof i.outer[o] ? "px" : ""; this.sidebar.style[o] = i.outer[o] + s } for (var r in i.inner) { var a = "number" == typeof i.inner[r] ? "px" : ""; this.sidebarInner.style[r] = i.inner[r] + a } var p = "affixed." + e.toLowerCase().replace("viewport-", "") + l; c.eventTrigger(this.sidebar, p) } else this._initialized && (this.sidebarInner.style.left = i.inner.left); this.affixedType = e } } }, { key: "_widthBreakpoint", value: function () { window.innerWidth <= this.options.minWidth ? (this._breakpoint = !0, this.affixedType = "STATIC", this.sidebar.removeAttribute("style"), c.removeClass(this.sidebar, this.options.stickyClass), this.sidebarInner.removeAttribute("style")) : this._breakpoint = !1 } }, { key: "updateSticky", value: function () { var t, e = this, i = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}; this._running || (this._running = !0, t = i.type, requestAnimationFrame(function () { switch (t) { case "scroll": e._calcDimensionsWithScroll(), e.observeScrollDir(), e.stickyPosition(); break; case "resize": default: e._widthBreakpoint(), e.calcDimensions(), e.stickyPosition(!0) }e._running = !1 })) } }, { key: "_setSupportFeatures", value: function () { var t = this.support; t.transform = c.supportTransform(), t.transform3d = c.supportTransform(!0) } }, { key: "_getTranslate", value: function () { var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0, e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0, i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 0; return this.support.transform3d ? "translate3d(" + t + ", " + e + ", " + i + ")" : !!this.support.translate && "translate(" + t + ", " + e + ")" } }, { key: "destroy", value: function () { window.removeEventListener("resize", this, { capture: !1 }), window.removeEventListener("scroll", this, { capture: !1 }), this.sidebar.classList.remove(this.options.stickyClass), this.sidebar.style.minHeight = "", this.sidebar.removeEventListener("update" + l, this); var t = { inner: {}, outer: {} }; for (var e in t.inner = { position: "", top: "", left: "", bottom: "", width: "", transform: "" }, t.outer = { height: "", position: "" }, t.outer) this.sidebar.style[e] = t.outer[e]; for (var i in t.inner) this.sidebarInner.style[i] = t.inner[i]; this.options.resizeSensor && "undefined" != typeof ResizeSensor && (ResizeSensor.detach(this.sidebarInner, this.handleEvent), ResizeSensor.detach(this.container, this.handleEvent)) } }], [{ key: "supportTransform", value: function (t) { var i = !1, e = t ? "perspective" : "transform", n = e.charAt(0).toUpperCase() + e.slice(1), o = document.createElement("support").style; return (e + " " + ["Webkit", "Moz", "O", "ms"].join(n + " ") + n).split(" ").forEach(function (t, e) { if (void 0 !== o[t]) return i = t, !1 }), i } }, { key: "eventTrigger", value: function (t, e, i) { try { var n = new CustomEvent(e, { detail: i }) } catch (t) { (n = document.createEvent("CustomEvent")).initCustomEvent(e, !0, !0, i) } t.dispatchEvent(n) } }, { key: "extend", value: function (t, e) { var i = {}; for (var n in t) void 0 !== e[n] ? i[n] = e[n] : i[n] = t[n]; return i } }, { key: "offsetRelative", value: function (t) { var e = { left: 0, top: 0 }; do { var i = t.offsetTop, n = t.offsetLeft; isNaN(i) || (e.top += i), isNaN(n) || (e.left += n), t = "BODY" === t.tagName ? t.parentElement : t.offsetParent } while (t); return e } }, { key: "addClass", value: function (t, e) { c.hasClass(t, e) || (t.classList ? t.classList.add(e) : t.className += " " + e) } }, { key: "removeClass", value: function (t, e) { c.hasClass(t, e) && (t.classList ? t.classList.remove(e) : t.className = t.className.replace(new RegExp("(^|\\b)" + e.split(" ").join("|") + "(\\b|$)", "gi"), " ")) } }, { key: "hasClass", value: function (t, e) { return t.classList ? t.classList.contains(e) : new RegExp("(^| )" + e + "( |$)", "gi").test(t.className) } }, { key: "defaults", get: function () { return n } }]), c }()); t.default = i, window.StickySidebar = i })(e) }(e = { exports: {} }, e.exports), e.exports), o = (i = n) && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i; t.default = o, t.__moduleExports = n, Object.defineProperty(t, "__esModule", { value: !0 }) });
/*! VelocityJS.org (1.5.0). (C) 2014 Julian Shapiro. MIT @license: en.wikipedia.org/wiki/MIT_License */
/*! VelocityJS.org jQuery Shim (1.0.1). (C) 2014 The jQuery Foundation. MIT @license: en.wikipedia.org/wiki/MIT_License. */
!function (a) { "use strict"; function b(a) { var b = a.length, d = c.type(a); return "function" !== d && !c.isWindow(a) && (!(1 !== a.nodeType || !b) || ("array" === d || 0 === b || "number" == typeof b && b > 0 && b - 1 in a)) } if (!a.jQuery) { var c = function (a, b) { return new c.fn.init(a, b) }; c.isWindow = function (a) { return a && a === a.window }, c.type = function (a) { return a ? "object" == typeof a || "function" == typeof a ? e[g.call(a)] || "object" : typeof a : a + "" }, c.isArray = Array.isArray || function (a) { return "array" === c.type(a) }, c.isPlainObject = function (a) { var b; if (!a || "object" !== c.type(a) || a.nodeType || c.isWindow(a)) return !1; try { if (a.constructor && !f.call(a, "constructor") && !f.call(a.constructor.prototype, "isPrototypeOf")) return !1 } catch (d) { return !1 } for (b in a); return b === undefined || f.call(a, b) }, c.each = function (a, c, d) { var e = 0, f = a.length, g = b(a); if (d) { if (g) for (; e < f && c.apply(a[e], d) !== !1; e++); else for (e in a) if (a.hasOwnProperty(e) && c.apply(a[e], d) === !1) break } else if (g) for (; e < f && c.call(a[e], e, a[e]) !== !1; e++); else for (e in a) if (a.hasOwnProperty(e) && c.call(a[e], e, a[e]) === !1) break; return a }, c.data = function (a, b, e) { if (e === undefined) { var f = a[c.expando], g = f && d[f]; if (b === undefined) return g; if (g && b in g) return g[b] } else if (b !== undefined) { var h = a[c.expando] || (a[c.expando] = ++c.uuid); return d[h] = d[h] || {}, d[h][b] = e, e } }, c.removeData = function (a, b) { var e = a[c.expando], f = e && d[e]; f && (b ? c.each(b, function (a, b) { delete f[b] }) : delete d[e]) }, c.extend = function () { var a, b, d, e, f, g, h = arguments[0] || {}, i = 1, j = arguments.length, k = !1; for ("boolean" == typeof h && (k = h, h = arguments[i] || {}, i++), "object" != typeof h && "function" !== c.type(h) && (h = {}), i === j && (h = this, i--); i < j; i++)if (f = arguments[i]) for (e in f) f.hasOwnProperty(e) && (a = h[e], d = f[e], h !== d && (k && d && (c.isPlainObject(d) || (b = c.isArray(d))) ? (b ? (b = !1, g = a && c.isArray(a) ? a : []) : g = a && c.isPlainObject(a) ? a : {}, h[e] = c.extend(k, g, d)) : d !== undefined && (h[e] = d))); return h }, c.queue = function (a, d, e) { if (a) { d = (d || "fx") + "queue"; var f = c.data(a, d); return e ? (!f || c.isArray(e) ? f = c.data(a, d, function (a, c) { var d = c || []; return a && (b(Object(a)) ? function (a, b) { for (var c = +b.length, d = 0, e = a.length; d < c;)a[e++] = b[d++]; if (c !== c) for (; b[d] !== undefined;)a[e++] = b[d++]; a.length = e, a }(d, "string" == typeof a ? [a] : a) : [].push.call(d, a)), d }(e)) : f.push(e), f) : f || [] } }, c.dequeue = function (a, b) { c.each(a.nodeType ? [a] : a, function (a, d) { b = b || "fx"; var e = c.queue(d, b), f = e.shift(); "inprogress" === f && (f = e.shift()), f && ("fx" === b && e.unshift("inprogress"), f.call(d, function () { c.dequeue(d, b) })) }) }, c.fn = c.prototype = { init: function (a) { if (a.nodeType) return this[0] = a, this; throw new Error("Not a DOM node.") }, offset: function () { var b = this[0].getBoundingClientRect ? this[0].getBoundingClientRect() : { top: 0, left: 0 }; return { top: b.top + (a.pageYOffset || document.scrollTop || 0) - (document.clientTop || 0), left: b.left + (a.pageXOffset || document.scrollLeft || 0) - (document.clientLeft || 0) } }, position: function () { var a = this[0], b = function (a) { for (var b = a.offsetParent; b && "html" !== b.nodeName.toLowerCase() && b.style && "static" === b.style.position;)b = b.offsetParent; return b || document }(a), d = this.offset(), e = /^(?:body|html)$/i.test(b.nodeName) ? { top: 0, left: 0 } : c(b).offset(); return d.top -= parseFloat(a.style.marginTop) || 0, d.left -= parseFloat(a.style.marginLeft) || 0, b.style && (e.top += parseFloat(b.style.borderTopWidth) || 0, e.left += parseFloat(b.style.borderLeftWidth) || 0), { top: d.top - e.top, left: d.left - e.left } } }; var d = {}; c.expando = "velocity" + (new Date).getTime(), c.uuid = 0; for (var e = {}, f = e.hasOwnProperty, g = e.toString, h = "Boolean Number String Function Array Date RegExp Object Error".split(" "), i = 0; i < h.length; i++)e["[object " + h[i] + "]"] = h[i].toLowerCase(); c.fn.init.prototype = c.fn, a.Velocity = { Utilities: c } } }(window), function (a) { "use strict"; "object" == typeof module && "object" == typeof module.exports ? module.exports = a() : "function" == typeof define && define.amd ? define(a) : a() }(function () {
  "use strict"; return function (a, b, c, d) {
    function e(a) { for (var b = -1, c = a ? a.length : 0, d = []; ++b < c;) { var e = a[b]; e && d.push(e) } return d } function f(a) { return u.isWrapped(a) ? a = s.call(a) : u.isNode(a) && (a = [a]), a } function g(a) { var b = o.data(a, "velocity"); return null === b ? d : b } function h(a, b) { var c = g(a); c && c.delayTimer && !c.delayPaused && (c.delayRemaining = c.delay - b + c.delayBegin, c.delayPaused = !0, clearTimeout(c.delayTimer.setTimeout)) } function i(a, b) { var c = g(a); c && c.delayTimer && c.delayPaused && (c.delayPaused = !1, c.delayTimer.setTimeout = setTimeout(c.delayTimer.next, c.delayRemaining)) } function j(a) { return function (b) { return Math.round(b * a) * (1 / a) } } function k(a, c, d, e) { function f(a, b) { return 1 - 3 * b + 3 * a } function g(a, b) { return 3 * b - 6 * a } function h(a) { return 3 * a } function i(a, b, c) { return ((f(b, c) * a + g(b, c)) * a + h(b)) * a } function j(a, b, c) { return 3 * f(b, c) * a * a + 2 * g(b, c) * a + h(b) } function k(b, c) { for (var e = 0; e < p; ++e) { var f = j(c, a, d); if (0 === f) return c; c -= (i(c, a, d) - b) / f } return c } function l() { for (var b = 0; b < t; ++b)x[b] = i(b * u, a, d) } function m(b, c, e) { var f, g, h = 0; do { g = c + (e - c) / 2, f = i(g, a, d) - b, f > 0 ? e = g : c = g } while (Math.abs(f) > r && ++h < s); return g } function n(b) { for (var c = 0, e = 1, f = t - 1; e !== f && x[e] <= b; ++e)c += u; --e; var g = (b - x[e]) / (x[e + 1] - x[e]), h = c + g * u, i = j(h, a, d); return i >= q ? k(b, h) : 0 === i ? h : m(b, c, c + u) } function o() { y = !0, a === c && d === e || l() } var p = 4, q = .001, r = 1e-7, s = 10, t = 11, u = 1 / (t - 1), v = "Float32Array" in b; if (4 !== arguments.length) return !1; for (var w = 0; w < 4; ++w)if ("number" != typeof arguments[w] || isNaN(arguments[w]) || !isFinite(arguments[w])) return !1; a = Math.min(a, 1), d = Math.min(d, 1), a = Math.max(a, 0), d = Math.max(d, 0); var x = v ? new Float32Array(t) : new Array(t), y = !1, z = function (b) { return y || o(), a === c && d === e ? b : 0 === b ? 0 : 1 === b ? 1 : i(n(b), c, e) }; z.getControlPoints = function () { return [{ x: a, y: c }, { x: d, y: e }] }; var A = "generateBezier(" + [a, c, d, e] + ")"; return z.toString = function () { return A }, z } function l(a, b) { var c = a; return u.isString(a) ? y.Easings[a] || (c = !1) : c = u.isArray(a) && 1 === a.length ? j.apply(null, a) : u.isArray(a) && 2 === a.length ? z.apply(null, a.concat([b])) : !(!u.isArray(a) || 4 !== a.length) && k.apply(null, a), c === !1 && (c = y.Easings[y.defaults.easing] ? y.defaults.easing : x), c } function m(a) { if (a) { var b = y.timestamp && a !== !0 ? a : r.now(), c = y.State.calls.length; c > 1e4 && (y.State.calls = e(y.State.calls), c = y.State.calls.length); for (var f = 0; f < c; f++)if (y.State.calls[f]) { var h = y.State.calls[f], i = h[0], j = h[2], k = h[3], l = !!k, q = null, s = h[5], t = h[6]; if (k || (k = y.State.calls[f][3] = b - 16), s) { if (s.resume !== !0) continue; k = h[3] = Math.round(b - t - 16), h[5] = null } t = h[6] = b - k; for (var v = Math.min(t / j.duration, 1), w = 0, x = i.length; w < x; w++) { var z = i[w], B = z.element; if (g(B)) { var D = !1; if (j.display !== d && null !== j.display && "none" !== j.display) { if ("flex" === j.display) { var E = ["-webkit-box", "-moz-box", "-ms-flexbox", "-webkit-flex"]; o.each(E, function (a, b) { A.setPropertyValue(B, "display", b) }) } A.setPropertyValue(B, "display", j.display) } j.visibility !== d && "hidden" !== j.visibility && A.setPropertyValue(B, "visibility", j.visibility); for (var F in z) if (z.hasOwnProperty(F) && "element" !== F) { var G, H = z[F], I = u.isString(H.easing) ? y.Easings[H.easing] : H.easing; if (u.isString(H.pattern)) { var J = 1 === v ? function (a, b, c) { var d = H.endValue[b]; return c ? Math.round(d) : d } : function (a, b, c) { var d = H.startValue[b], e = H.endValue[b] - d, f = d + e * I(v, j, e); return c ? Math.round(f) : f }; G = H.pattern.replace(/{(\d+)(!)?}/g, J) } else if (1 === v) G = H.endValue; else { var K = H.endValue - H.startValue; G = H.startValue + K * I(v, j, K) } if (!l && G === H.currentValue) continue; if (H.currentValue = G, "tween" === F) q = G; else { var L; if (A.Hooks.registered[F]) { L = A.Hooks.getRoot(F); var M = g(B).rootPropertyValueCache[L]; M && (H.rootPropertyValue = M) } var N = A.setPropertyValue(B, F, H.currentValue + (p < 9 && 0 === parseFloat(G) ? "" : H.unitType), H.rootPropertyValue, H.scrollData); A.Hooks.registered[F] && (A.Normalizations.registered[L] ? g(B).rootPropertyValueCache[L] = A.Normalizations.registered[L]("extract", null, N[1]) : g(B).rootPropertyValueCache[L] = N[1]), "transform" === N[0] && (D = !0) } } j.mobileHA && g(B).transformCache.translate3d === d && (g(B).transformCache.translate3d = "(0px, 0px, 0px)", D = !0), D && A.flushTransformCache(B) } } j.display !== d && "none" !== j.display && (y.State.calls[f][2].display = !1), j.visibility !== d && "hidden" !== j.visibility && (y.State.calls[f][2].visibility = !1), j.progress && j.progress.call(h[1], h[1], v, Math.max(0, k + j.duration - b), k, q), 1 === v && n(f) } } y.State.isTicking && C(m) } function n(a, b) { if (!y.State.calls[a]) return !1; for (var c = y.State.calls[a][0], e = y.State.calls[a][1], f = y.State.calls[a][2], h = y.State.calls[a][4], i = !1, j = 0, k = c.length; j < k; j++) { var l = c[j].element; b || f.loop || ("none" === f.display && A.setPropertyValue(l, "display", f.display), "hidden" === f.visibility && A.setPropertyValue(l, "visibility", f.visibility)); var m = g(l); if (f.loop !== !0 && (o.queue(l)[1] === d || !/\.velocityQueueEntryFlag/i.test(o.queue(l)[1])) && m) { m.isAnimating = !1, m.rootPropertyValueCache = {}; var n = !1; o.each(A.Lists.transforms3D, function (a, b) { var c = /^scale/.test(b) ? 1 : 0, e = m.transformCache[b]; m.transformCache[b] !== d && new RegExp("^\\(" + c + "[^.]").test(e) && (n = !0, delete m.transformCache[b]) }), f.mobileHA && (n = !0, delete m.transformCache.translate3d), n && A.flushTransformCache(l), A.Values.removeClass(l, "velocity-animating") } if (!b && f.complete && !f.loop && j === k - 1) try { f.complete.call(e, e) } catch (r) { setTimeout(function () { throw r }, 1) } h && f.loop !== !0 && h(e), m && f.loop === !0 && !b && (o.each(m.tweensContainer, function (a, b) { if (/^rotate/.test(a) && (parseFloat(b.startValue) - parseFloat(b.endValue)) % 360 == 0) { var c = b.startValue; b.startValue = b.endValue, b.endValue = c } /^backgroundPosition/.test(a) && 100 === parseFloat(b.endValue) && "%" === b.unitType && (b.endValue = 0, b.startValue = 100) }), y(l, "reverse", { loop: !0, delay: f.delay })), f.queue !== !1 && o.dequeue(l, f.queue) } y.State.calls[a] = !1; for (var p = 0, q = y.State.calls.length; p < q; p++)if (y.State.calls[p] !== !1) { i = !0; break } i === !1 && (y.State.isTicking = !1, delete y.State.calls, y.State.calls = []) } var o, p = function () { if (c.documentMode) return c.documentMode; for (var a = 7; a > 4; a--) { var b = c.createElement("div"); if (b.innerHTML = "<!--[if IE " + a + "]><span></span><![endif]-->", b.getElementsByTagName("span").length) return b = null, a } return d }(), q = function () { var a = 0; return b.webkitRequestAnimationFrame || b.mozRequestAnimationFrame || function (b) { var c, d = (new Date).getTime(); return c = Math.max(0, 16 - (d - a)), a = d + c, setTimeout(function () { b(d + c) }, c) } }(), r = function () { var a = b.performance || {}; if ("function" != typeof a.now) { var c = a.timing && a.timing.navigationStart ? a.timing.navigationStart : (new Date).getTime(); a.now = function () { return (new Date).getTime() - c } } return a }(), s = function () { var a = Array.prototype.slice; try { return a.call(c.documentElement), a } catch (b) { return function (b, c) { var d = this.length; if ("number" != typeof b && (b = 0), "number" != typeof c && (c = d), this.slice) return a.call(this, b, c); var e, f = [], g = b >= 0 ? b : Math.max(0, d + b), h = c < 0 ? d + c : Math.min(c, d), i = h - g; if (i > 0) if (f = new Array(i), this.charAt) for (e = 0; e < i; e++)f[e] = this.charAt(g + e); else for (e = 0; e < i; e++)f[e] = this[g + e]; return f } } }(), t = function () { return Array.prototype.includes ? function (a, b) { return a.includes(b) } : Array.prototype.indexOf ? function (a, b) { return a.indexOf(b) >= 0 } : function (a, b) { for (var c = 0; c < a.length; c++)if (a[c] === b) return !0; return !1 } }, u = { isNumber: function (a) { return "number" == typeof a }, isString: function (a) { return "string" == typeof a }, isArray: Array.isArray || function (a) { return "[object Array]" === Object.prototype.toString.call(a) }, isFunction: function (a) { return "[object Function]" === Object.prototype.toString.call(a) }, isNode: function (a) { return a && a.nodeType }, isWrapped: function (a) { return a && a !== b && u.isNumber(a.length) && !u.isString(a) && !u.isFunction(a) && !u.isNode(a) && (0 === a.length || u.isNode(a[0])) }, isSVG: function (a) { return b.SVGElement && a instanceof b.SVGElement }, isEmptyObject: function (a) { for (var b in a) if (a.hasOwnProperty(b)) return !1; return !0 } }, v = !1; if (a.fn && a.fn.jquery ? (o = a, v = !0) : o = b.Velocity.Utilities, p <= 8 && !v) throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity."); if (p <= 7) return void (jQuery.fn.velocity = jQuery.fn.animate); var w = 400, x = "swing", y = { State: { isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent), isAndroid: /Android/i.test(navigator.userAgent), isGingerbread: /Android 2\.3\.[3-7]/i.test(navigator.userAgent), isChrome: b.chrome, isFirefox: /Firefox/i.test(navigator.userAgent), prefixElement: c.createElement("div"), prefixMatches: {}, scrollAnchor: null, scrollPropertyLeft: null, scrollPropertyTop: null, isTicking: !1, calls: [], delayedElements: { count: 0 } }, CSS: {}, Utilities: o, Redirects: {}, Easings: {}, Promise: b.Promise, defaults: { queue: "", duration: w, easing: x, begin: d, complete: d, progress: d, display: d, visibility: d, loop: !1, delay: !1, mobileHA: !0, _cacheValues: !0, promiseRejectEmpty: !0 }, init: function (a) { o.data(a, "velocity", { isSVG: u.isSVG(a), isAnimating: !1, computedStyle: null, tweensContainer: null, rootPropertyValueCache: {}, transformCache: {} }) }, hook: null, mock: !1, version: { major: 1, minor: 5, patch: 0 }, debug: !1, timestamp: !0, pauseAll: function (a) { var b = (new Date).getTime(); o.each(y.State.calls, function (b, c) { if (c) { if (a !== d && (c[2].queue !== a || c[2].queue === !1)) return !0; c[5] = { resume: !1 } } }), o.each(y.State.delayedElements, function (a, c) { c && h(c, b) }) }, resumeAll: function (a) { var b = (new Date).getTime(); o.each(y.State.calls, function (b, c) { if (c) { if (a !== d && (c[2].queue !== a || c[2].queue === !1)) return !0; c[5] && (c[5].resume = !0) } }), o.each(y.State.delayedElements, function (a, c) { c && i(c, b) }) } }; b.pageYOffset !== d ? (y.State.scrollAnchor = b, y.State.scrollPropertyLeft = "pageXOffset", y.State.scrollPropertyTop = "pageYOffset") : (y.State.scrollAnchor = c.documentElement || c.body.parentNode || c.body, y.State.scrollPropertyLeft = "scrollLeft", y.State.scrollPropertyTop = "scrollTop"); var z = function () { function a(a) { return -a.tension * a.x - a.friction * a.v } function b(b, c, d) { var e = { x: b.x + d.dx * c, v: b.v + d.dv * c, tension: b.tension, friction: b.friction }; return { dx: e.v, dv: a(e) } } function c(c, d) { var e = { dx: c.v, dv: a(c) }, f = b(c, .5 * d, e), g = b(c, .5 * d, f), h = b(c, d, g), i = 1 / 6 * (e.dx + 2 * (f.dx + g.dx) + h.dx), j = 1 / 6 * (e.dv + 2 * (f.dv + g.dv) + h.dv); return c.x = c.x + i * d, c.v = c.v + j * d, c } return function d(a, b, e) { var f, g, h, i = { x: -1, v: 0, tension: null, friction: null }, j = [0], k = 0; for (a = parseFloat(a) || 500, b = parseFloat(b) || 20, e = e || null, i.tension = a, i.friction = b, f = null !== e, f ? (k = d(a, b), g = k / e * .016) : g = .016; ;)if (h = c(h || i, g), j.push(1 + h.x), k += 16, !(Math.abs(h.x) > 1e-4 && Math.abs(h.v) > 1e-4)) break; return f ? function (a) { return j[a * (j.length - 1) | 0] } : k } }(); y.Easings = { linear: function (a) { return a }, swing: function (a) { return .5 - Math.cos(a * Math.PI) / 2 }, spring: function (a) { return 1 - Math.cos(4.5 * a * Math.PI) * Math.exp(6 * -a) } }, o.each([["ease", [.25, .1, .25, 1]], ["ease-in", [.42, 0, 1, 1]], ["ease-out", [0, 0, .58, 1]], ["ease-in-out", [.42, 0, .58, 1]], ["easeInSine", [.47, 0, .745, .715]], ["easeOutSine", [.39, .575, .565, 1]], ["easeInOutSine", [.445, .05, .55, .95]], ["easeInQuad", [.55, .085, .68, .53]], ["easeOutQuad", [.25, .46, .45, .94]], ["easeInOutQuad", [.455, .03, .515, .955]], ["easeInCubic", [.55, .055, .675, .19]], ["easeOutCubic", [.215, .61, .355, 1]], ["easeInOutCubic", [.645, .045, .355, 1]], ["easeInQuart", [.895, .03, .685, .22]], ["easeOutQuart", [.165, .84, .44, 1]], ["easeInOutQuart", [.77, 0, .175, 1]], ["easeInQuint", [.755, .05, .855, .06]], ["easeOutQuint", [.23, 1, .32, 1]], ["easeInOutQuint", [.86, 0, .07, 1]], ["easeInExpo", [.95, .05, .795, .035]], ["easeOutExpo", [.19, 1, .22, 1]], ["easeInOutExpo", [1, 0, 0, 1]], ["easeInCirc", [.6, .04, .98, .335]], ["easeOutCirc", [.075, .82, .165, 1]], ["easeInOutCirc", [.785, .135, .15, .86]]], function (a, b) { y.Easings[b[0]] = k.apply(null, b[1]) }); var A = y.CSS = { RegEx: { isHex: /^#([A-f\d]{3}){1,2}$/i, valueUnwrap: /^[A-z]+\((.*)\)$/i, wrappedValueAlreadyExtracted: /[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/, valueSplit: /([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi }, Lists: { colors: ["fill", "stroke", "stopColor", "color", "backgroundColor", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor", "outlineColor"], transformsBase: ["translateX", "translateY", "scale", "scaleX", "scaleY", "skewX", "skewY", "rotateZ"], transforms3D: ["transformPerspective", "translateZ", "scaleZ", "rotateX", "rotateY"], units: ["%", "em", "ex", "ch", "rem", "vw", "vh", "vmin", "vmax", "cm", "mm", "Q", "in", "pc", "pt", "px", "deg", "grad", "rad", "turn", "s", "ms"], colorNames: { aliceblue: "240,248,255", antiquewhite: "250,235,215", aquamarine: "127,255,212", aqua: "0,255,255", azure: "240,255,255", beige: "245,245,220", bisque: "255,228,196", black: "0,0,0", blanchedalmond: "255,235,205", blueviolet: "138,43,226", blue: "0,0,255", brown: "165,42,42", burlywood: "222,184,135", cadetblue: "95,158,160", chartreuse: "127,255,0", chocolate: "210,105,30", coral: "255,127,80", cornflowerblue: "100,149,237", cornsilk: "255,248,220", crimson: "220,20,60", cyan: "0,255,255", darkblue: "0,0,139", darkcyan: "0,139,139", darkgoldenrod: "184,134,11", darkgray: "169,169,169", darkgrey: "169,169,169", darkgreen: "0,100,0", darkkhaki: "189,183,107", darkmagenta: "139,0,139", darkolivegreen: "85,107,47", darkorange: "255,140,0", darkorchid: "153,50,204", darkred: "139,0,0", darksalmon: "233,150,122", darkseagreen: "143,188,143", darkslateblue: "72,61,139", darkslategray: "47,79,79", darkturquoise: "0,206,209", darkviolet: "148,0,211", deeppink: "255,20,147", deepskyblue: "0,191,255", dimgray: "105,105,105", dimgrey: "105,105,105", dodgerblue: "30,144,255", firebrick: "178,34,34", floralwhite: "255,250,240", forestgreen: "34,139,34", fuchsia: "255,0,255", gainsboro: "220,220,220", ghostwhite: "248,248,255", gold: "255,215,0", goldenrod: "218,165,32", gray: "128,128,128", grey: "128,128,128", greenyellow: "173,255,47", green: "0,128,0", honeydew: "240,255,240", hotpink: "255,105,180", indianred: "205,92,92", indigo: "75,0,130", ivory: "255,255,240", khaki: "240,230,140", lavenderblush: "255,240,245", lavender: "230,230,250", lawngreen: "124,252,0", lemonchiffon: "255,250,205", lightblue: "173,216,230", lightcoral: "240,128,128", lightcyan: "224,255,255", lightgoldenrodyellow: "250,250,210", lightgray: "211,211,211", lightgrey: "211,211,211", lightgreen: "144,238,144", lightpink: "255,182,193", lightsalmon: "255,160,122", lightseagreen: "32,178,170", lightskyblue: "135,206,250", lightslategray: "119,136,153", lightsteelblue: "176,196,222", lightyellow: "255,255,224", limegreen: "50,205,50", lime: "0,255,0", linen: "250,240,230", magenta: "255,0,255", maroon: "128,0,0", mediumaquamarine: "102,205,170", mediumblue: "0,0,205", mediumorchid: "186,85,211", mediumpurple: "147,112,219", mediumseagreen: "60,179,113", mediumslateblue: "123,104,238", mediumspringgreen: "0,250,154", mediumturquoise: "72,209,204", mediumvioletred: "199,21,133", midnightblue: "25,25,112", mintcream: "245,255,250", mistyrose: "255,228,225", moccasin: "255,228,181", navajowhite: "255,222,173", navy: "0,0,128", oldlace: "253,245,230", olivedrab: "107,142,35", olive: "128,128,0", orangered: "255,69,0", orange: "255,165,0", orchid: "218,112,214", palegoldenrod: "238,232,170", palegreen: "152,251,152", paleturquoise: "175,238,238", palevioletred: "219,112,147", papayawhip: "255,239,213", peachpuff: "255,218,185", peru: "205,133,63", pink: "255,192,203", plum: "221,160,221", powderblue: "176,224,230", purple: "128,0,128", red: "255,0,0", rosybrown: "188,143,143", royalblue: "65,105,225", saddlebrown: "139,69,19", salmon: "250,128,114", sandybrown: "244,164,96", seagreen: "46,139,87", seashell: "255,245,238", sienna: "160,82,45", silver: "192,192,192", skyblue: "135,206,235", slateblue: "106,90,205", slategray: "112,128,144", snow: "255,250,250", springgreen: "0,255,127", steelblue: "70,130,180", tan: "210,180,140", teal: "0,128,128", thistle: "216,191,216", tomato: "255,99,71", turquoise: "64,224,208", violet: "238,130,238", wheat: "245,222,179", whitesmoke: "245,245,245", white: "255,255,255", yellowgreen: "154,205,50", yellow: "255,255,0" } }, Hooks: { templates: { textShadow: ["Color X Y Blur", "black 0px 0px 0px"], boxShadow: ["Color X Y Blur Spread", "black 0px 0px 0px 0px"], clip: ["Top Right Bottom Left", "0px 0px 0px 0px"], backgroundPosition: ["X Y", "0% 0%"], transformOrigin: ["X Y Z", "50% 50% 0px"], perspectiveOrigin: ["X Y", "50% 50%"] }, registered: {}, register: function () { for (var a = 0; a < A.Lists.colors.length; a++) { var b = "color" === A.Lists.colors[a] ? "0 0 0 1" : "255 255 255 1"; A.Hooks.templates[A.Lists.colors[a]] = ["Red Green Blue Alpha", b] } var c, d, e; if (p) for (c in A.Hooks.templates) if (A.Hooks.templates.hasOwnProperty(c)) { d = A.Hooks.templates[c], e = d[0].split(" "); var f = d[1].match(A.RegEx.valueSplit); "Color" === e[0] && (e.push(e.shift()), f.push(f.shift()), A.Hooks.templates[c] = [e.join(" "), f.join(" ")]) } for (c in A.Hooks.templates) if (A.Hooks.templates.hasOwnProperty(c)) { d = A.Hooks.templates[c], e = d[0].split(" "); for (var g in e) if (e.hasOwnProperty(g)) { var h = c + e[g], i = g; A.Hooks.registered[h] = [c, i] } } }, getRoot: function (a) { var b = A.Hooks.registered[a]; return b ? b[0] : a }, getUnit: function (a, b) { var c = (a.substr(b || 0, 5).match(/^[a-z%]+/) || [])[0] || ""; return c && t(A.Lists.units, c) ? c : "" }, fixColors: function (a) { return a.replace(/(rgba?\(\s*)?(\b[a-z]+\b)/g, function (a, b, c) { return A.Lists.colorNames.hasOwnProperty(c) ? (b ? b : "rgba(") + A.Lists.colorNames[c] + (b ? "" : ",1)") : b + c }) }, cleanRootPropertyValue: function (a, b) { return A.RegEx.valueUnwrap.test(b) && (b = b.match(A.RegEx.valueUnwrap)[1]), A.Values.isCSSNullValue(b) && (b = A.Hooks.templates[a][1]), b }, extractValue: function (a, b) { var c = A.Hooks.registered[a]; if (c) { var d = c[0], e = c[1]; return b = A.Hooks.cleanRootPropertyValue(d, b), b.toString().match(A.RegEx.valueSplit)[e] } return b }, injectValue: function (a, b, c) { var d = A.Hooks.registered[a]; if (d) { var e, f = d[0], g = d[1]; return c = A.Hooks.cleanRootPropertyValue(f, c), e = c.toString().match(A.RegEx.valueSplit), e[g] = b, e.join(" ") } return c } }, Normalizations: { registered: { clip: function (a, b, c) { switch (a) { case "name": return "clip"; case "extract": var d; return A.RegEx.wrappedValueAlreadyExtracted.test(c) ? d = c : (d = c.toString().match(A.RegEx.valueUnwrap), d = d ? d[1].replace(/,(\s+)?/g, " ") : c), d; case "inject": return "rect(" + c + ")" } }, blur: function (a, b, c) { switch (a) { case "name": return y.State.isFirefox ? "filter" : "-webkit-filter"; case "extract": var d = parseFloat(c); if (!d && 0 !== d) { var e = c.toString().match(/blur\(([0-9]+[A-z]+)\)/i); d = e ? e[1] : 0 } return d; case "inject": return parseFloat(c) ? "blur(" + c + ")" : "none" } }, opacity: function (a, b, c) { if (p <= 8) switch (a) { case "name": return "filter"; case "extract": var d = c.toString().match(/alpha\(opacity=(.*)\)/i); return c = d ? d[1] / 100 : 1; case "inject": return b.style.zoom = 1, parseFloat(c) >= 1 ? "" : "alpha(opacity=" + parseInt(100 * parseFloat(c), 10) + ")" } else switch (a) { case "name": return "opacity"; case "extract": return c; case "inject": return c } } }, register: function () { function a(a, b, c) { if ("border-box" === A.getPropertyValue(b, "boxSizing").toString().toLowerCase() === (c || !1)) { var d, e, f = 0, g = "width" === a ? ["Left", "Right"] : ["Top", "Bottom"], h = ["padding" + g[0], "padding" + g[1], "border" + g[0] + "Width", "border" + g[1] + "Width"]; for (d = 0; d < h.length; d++)e = parseFloat(A.getPropertyValue(b, h[d])), isNaN(e) || (f += e); return c ? -f : f } return 0 } function b(b, c) { return function (d, e, f) { switch (d) { case "name": return b; case "extract": return parseFloat(f) + a(b, e, c); case "inject": return parseFloat(f) - a(b, e, c) + "px" } } } p && !(p > 9) || y.State.isGingerbread || (A.Lists.transformsBase = A.Lists.transformsBase.concat(A.Lists.transforms3D)); for (var c = 0; c < A.Lists.transformsBase.length; c++)!function () { var a = A.Lists.transformsBase[c]; A.Normalizations.registered[a] = function (b, c, e) { switch (b) { case "name": return "transform"; case "extract": return g(c) === d || g(c).transformCache[a] === d ? /^scale/i.test(a) ? 1 : 0 : g(c).transformCache[a].replace(/[()]/g, ""); case "inject": var f = !1; switch (a.substr(0, a.length - 1)) { case "translate": f = !/(%|px|em|rem|vw|vh|\d)$/i.test(e); break; case "scal": case "scale": y.State.isAndroid && g(c).transformCache[a] === d && e < 1 && (e = 1), f = !/(\d)$/i.test(e); break; case "skew": f = !/(deg|\d)$/i.test(e); break; case "rotate": f = !/(deg|\d)$/i.test(e) }return f || (g(c).transformCache[a] = "(" + e + ")"), g(c).transformCache[a] } } }(); for (var e = 0; e < A.Lists.colors.length; e++)!function () { var a = A.Lists.colors[e]; A.Normalizations.registered[a] = function (b, c, e) { switch (b) { case "name": return a; case "extract": var f; if (A.RegEx.wrappedValueAlreadyExtracted.test(e)) f = e; else { var g, h = { black: "rgb(0, 0, 0)", blue: "rgb(0, 0, 255)", gray: "rgb(128, 128, 128)", green: "rgb(0, 128, 0)", red: "rgb(255, 0, 0)", white: "rgb(255, 255, 255)" }; /^[A-z]+$/i.test(e) ? g = h[e] !== d ? h[e] : h.black : A.RegEx.isHex.test(e) ? g = "rgb(" + A.Values.hexToRgb(e).join(" ") + ")" : /^rgba?\(/i.test(e) || (g = h.black), f = (g || e).toString().match(A.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g, " ") } return (!p || p > 8) && 3 === f.split(" ").length && (f += " 1"), f; case "inject": return /^rgb/.test(e) ? e : (p <= 8 ? 4 === e.split(" ").length && (e = e.split(/\s+/).slice(0, 3).join(" ")) : 3 === e.split(" ").length && (e += " 1"), (p <= 8 ? "rgb" : "rgba") + "(" + e.replace(/\s+/g, ",").replace(/\.(\d)+(?=,)/g, "") + ")") } } }(); A.Normalizations.registered.innerWidth = b("width", !0), A.Normalizations.registered.innerHeight = b("height", !0), A.Normalizations.registered.outerWidth = b("width"), A.Normalizations.registered.outerHeight = b("height") } }, Names: { camelCase: function (a) { return a.replace(/-(\w)/g, function (a, b) { return b.toUpperCase() }) }, SVGAttribute: function (a) { var b = "width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2"; return (p || y.State.isAndroid && !y.State.isChrome) && (b += "|transform"), new RegExp("^(" + b + ")$", "i").test(a) }, prefixCheck: function (a) { if (y.State.prefixMatches[a]) return [y.State.prefixMatches[a], !0]; for (var b = ["", "Webkit", "Moz", "ms", "O"], c = 0, d = b.length; c < d; c++) { var e; if (e = 0 === c ? a : b[c] + a.replace(/^\w/, function (a) { return a.toUpperCase() }), u.isString(y.State.prefixElement.style[e])) return y.State.prefixMatches[a] = e, [e, !0] } return [a, !1] } }, Values: { hexToRgb: function (a) { var b, c = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i; return a = a.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function (a, b, c, d) { return b + b + c + c + d + d }), b = c.exec(a), b ? [parseInt(b[1], 16), parseInt(b[2], 16), parseInt(b[3], 16)] : [0, 0, 0] }, isCSSNullValue: function (a) { return !a || /^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(a) }, getUnitType: function (a) { return /^(rotate|skew)/i.test(a) ? "deg" : /(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(a) ? "" : "px" }, getDisplayType: function (a) { var b = a && a.tagName.toString().toLowerCase(); return /^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(b) ? "inline" : /^(li)$/i.test(b) ? "list-item" : /^(tr)$/i.test(b) ? "table-row" : /^(table)$/i.test(b) ? "table" : /^(tbody)$/i.test(b) ? "table-row-group" : "block" }, addClass: function (a, b) { if (a) if (a.classList) a.classList.add(b); else if (u.isString(a.className)) a.className += (a.className.length ? " " : "") + b; else { var c = a.getAttribute(p <= 7 ? "className" : "class") || ""; a.setAttribute("class", c + (c ? " " : "") + b) } }, removeClass: function (a, b) { if (a) if (a.classList) a.classList.remove(b); else if (u.isString(a.className)) a.className = a.className.toString().replace(new RegExp("(^|\\s)" + b.split(" ").join("|") + "(\\s|$)", "gi"), " "); else { var c = a.getAttribute(p <= 7 ? "className" : "class") || ""; a.setAttribute("class", c.replace(new RegExp("(^|s)" + b.split(" ").join("|") + "(s|$)", "gi"), " ")) } } }, getPropertyValue: function (a, c, e, f) { function h(a, c) { var e = 0; if (p <= 8) e = o.css(a, c); else { var i = !1; /^(width|height)$/.test(c) && 0 === A.getPropertyValue(a, "display") && (i = !0, A.setPropertyValue(a, "display", A.Values.getDisplayType(a))); var j = function () { i && A.setPropertyValue(a, "display", "none") }; if (!f) { if ("height" === c && "border-box" !== A.getPropertyValue(a, "boxSizing").toString().toLowerCase()) { var k = a.offsetHeight - (parseFloat(A.getPropertyValue(a, "borderTopWidth")) || 0) - (parseFloat(A.getPropertyValue(a, "borderBottomWidth")) || 0) - (parseFloat(A.getPropertyValue(a, "paddingTop")) || 0) - (parseFloat(A.getPropertyValue(a, "paddingBottom")) || 0); return j(), k } if ("width" === c && "border-box" !== A.getPropertyValue(a, "boxSizing").toString().toLowerCase()) { var l = a.offsetWidth - (parseFloat(A.getPropertyValue(a, "borderLeftWidth")) || 0) - (parseFloat(A.getPropertyValue(a, "borderRightWidth")) || 0) - (parseFloat(A.getPropertyValue(a, "paddingLeft")) || 0) - (parseFloat(A.getPropertyValue(a, "paddingRight")) || 0); return j(), l } } var m; m = g(a) === d ? b.getComputedStyle(a, null) : g(a).computedStyle ? g(a).computedStyle : g(a).computedStyle = b.getComputedStyle(a, null), "borderColor" === c && (c = "borderTopColor"), e = 9 === p && "filter" === c ? m.getPropertyValue(c) : m[c], "" !== e && null !== e || (e = a.style[c]), j() } if ("auto" === e && /^(top|right|bottom|left)$/i.test(c)) { var n = h(a, "position"); ("fixed" === n || "absolute" === n && /top|left/i.test(c)) && (e = o(a).position()[c] + "px") } return e } var i; if (A.Hooks.registered[c]) { var j = c, k = A.Hooks.getRoot(j); e === d && (e = A.getPropertyValue(a, A.Names.prefixCheck(k)[0])), A.Normalizations.registered[k] && (e = A.Normalizations.registered[k]("extract", a, e)), i = A.Hooks.extractValue(j, e) } else if (A.Normalizations.registered[c]) { var l, m; l = A.Normalizations.registered[c]("name", a), "transform" !== l && (m = h(a, A.Names.prefixCheck(l)[0]), A.Values.isCSSNullValue(m) && A.Hooks.templates[c] && (m = A.Hooks.templates[c][1])), i = A.Normalizations.registered[c]("extract", a, m) } if (!/^[\d-]/.test(i)) { var n = g(a); if (n && n.isSVG && A.Names.SVGAttribute(c)) if (/^(height|width)$/i.test(c)) try { i = a.getBBox()[c] } catch (q) { i = 0 } else i = a.getAttribute(c); else i = h(a, A.Names.prefixCheck(c)[0]) } return A.Values.isCSSNullValue(i) && (i = 0), y.debug >= 2 && console.log("Get " + c + ": " + i), i }, setPropertyValue: function (a, c, d, e, f) { var h = c; if ("scroll" === c) f.container ? f.container["scroll" + f.direction] = d : "Left" === f.direction ? b.scrollTo(d, f.alternateValue) : b.scrollTo(f.alternateValue, d); else if (A.Normalizations.registered[c] && "transform" === A.Normalizations.registered[c]("name", a)) A.Normalizations.registered[c]("inject", a, d), h = "transform", d = g(a).transformCache[c]; else { if (A.Hooks.registered[c]) { var i = c, j = A.Hooks.getRoot(c); e = e || A.getPropertyValue(a, j), d = A.Hooks.injectValue(i, d, e), c = j } if (A.Normalizations.registered[c] && (d = A.Normalizations.registered[c]("inject", a, d), c = A.Normalizations.registered[c]("name", a)), h = A.Names.prefixCheck(c)[0], p <= 8) try { a.style[h] = d } catch (l) { y.debug && console.log("Browser does not support [" + d + "] for [" + h + "]") } else { var k = g(a); k && k.isSVG && A.Names.SVGAttribute(c) ? a.setAttribute(c, d) : a.style[h] = d } y.debug >= 2 && console.log("Set " + c + " (" + h + "): " + d) } return [h, d] }, flushTransformCache: function (a) { var b = "", c = g(a); if ((p || y.State.isAndroid && !y.State.isChrome) && c && c.isSVG) { var d = function (b) { return parseFloat(A.getPropertyValue(a, b)) }, e = { translate: [d("translateX"), d("translateY")], skewX: [d("skewX")], skewY: [d("skewY")], scale: 1 !== d("scale") ? [d("scale"), d("scale")] : [d("scaleX"), d("scaleY")], rotate: [d("rotateZ"), 0, 0] }; o.each(g(a).transformCache, function (a) { /^translate/i.test(a) ? a = "translate" : /^scale/i.test(a) ? a = "scale" : /^rotate/i.test(a) && (a = "rotate"), e[a] && (b += a + "(" + e[a].join(" ") + ") ", delete e[a]) }) } else { var f, h; o.each(g(a).transformCache, function (c) { if (f = g(a).transformCache[c], "transformPerspective" === c) return h = f, !0; 9 === p && "rotateZ" === c && (c = "rotate"), b += c + f + " " }), h && (b = "perspective" + h + " " + b) } A.setPropertyValue(a, "transform", b) } }; A.Hooks.register(), A.Normalizations.register(), y.hook = function (a, b, c) { var e; return a = f(a), o.each(a, function (a, f) { if (g(f) === d && y.init(f), c === d) e === d && (e = A.getPropertyValue(f, b)); else { var h = A.setPropertyValue(f, b, c); "transform" === h[0] && y.CSS.flushTransformCache(f), e = h } }), e }; var B = function () {
      function a() { return k ? z.promise || null : p } function e(a, e) {
        function f(f) {
          var k, n; if (i.begin && 0 === D) try { i.begin.call(r, r) } catch (V) { setTimeout(function () { throw V }, 1) } if ("scroll" === G) { var p, q, w, x = /^x$/i.test(i.axis) ? "Left" : "Top", B = parseFloat(i.offset) || 0; i.container ? u.isWrapped(i.container) || u.isNode(i.container) ? (i.container = i.container[0] || i.container, p = i.container["scroll" + x], w = p + o(a).position()[x.toLowerCase()] + B) : i.container = null : (p = y.State.scrollAnchor[y.State["scrollProperty" + x]], q = y.State.scrollAnchor[y.State["scrollProperty" + ("Left" === x ? "Top" : "Left")]], w = o(a).offset()[x.toLowerCase()] + B), j = { scroll: { rootPropertyValue: !1, startValue: p, currentValue: p, endValue: w, unitType: "", easing: i.easing, scrollData: { container: i.container, direction: x, alternateValue: q } }, element: a }, y.debug && console.log("tweensContainer (scroll): ", j.scroll, a) } else if ("reverse" === G) { if (!(k = g(a))) return; if (!k.tweensContainer) return void o.dequeue(a, i.queue); "none" === k.opts.display && (k.opts.display = "auto"), "hidden" === k.opts.visibility && (k.opts.visibility = "visible"), k.opts.loop = !1, k.opts.begin = null, k.opts.complete = null, v.easing || delete i.easing, v.duration || delete i.duration, i = o.extend({}, k.opts, i), n = o.extend(!0, {}, k ? k.tweensContainer : null); for (var E in n) if (n.hasOwnProperty(E) && "element" !== E) { var F = n[E].startValue; n[E].startValue = n[E].currentValue = n[E].endValue, n[E].endValue = F, u.isEmptyObject(v) || (n[E].easing = i.easing), y.debug && console.log("reverse tweensContainer (" + E + "): " + JSON.stringify(n[E]), a) } j = n } else if ("start" === G) {
            k = g(a), k && k.tweensContainer && k.isAnimating === !0 && (n = k.tweensContainer); var H = function (e, f) {
              var g, l = A.Hooks.getRoot(e), m = !1, p = f[0], q = f[1], r = f[2]
                ; if (!(k && k.isSVG || "tween" === l || A.Names.prefixCheck(l)[1] !== !1 || A.Normalizations.registered[l] !== d)) return void (y.debug && console.log("Skipping [" + l + "] due to a lack of browser support.")); (i.display !== d && null !== i.display && "none" !== i.display || i.visibility !== d && "hidden" !== i.visibility) && /opacity|filter/.test(e) && !r && 0 !== p && (r = 0), i._cacheValues && n && n[e] ? (r === d && (r = n[e].endValue + n[e].unitType), m = k.rootPropertyValueCache[l]) : A.Hooks.registered[e] ? r === d ? (m = A.getPropertyValue(a, l), r = A.getPropertyValue(a, e, m)) : m = A.Hooks.templates[l][1] : r === d && (r = A.getPropertyValue(a, e)); var s, t, v, w = !1, x = function (a, b) { var c, d; return d = (b || "0").toString().toLowerCase().replace(/[%A-z]+$/, function (a) { return c = a, "" }), c || (c = A.Values.getUnitType(a)), [d, c] }; if (r !== p && u.isString(r) && u.isString(p)) { g = ""; var z = 0, B = 0, C = [], D = [], E = 0, F = 0, G = 0; for (r = A.Hooks.fixColors(r), p = A.Hooks.fixColors(p); z < r.length && B < p.length;) { var H = r[z], I = p[B]; if (/[\d\.-]/.test(H) && /[\d\.-]/.test(I)) { for (var J = H, K = I, L = ".", N = "."; ++z < r.length;) { if ((H = r[z]) === L) L = ".."; else if (!/\d/.test(H)) break; J += H } for (; ++B < p.length;) { if ((I = p[B]) === N) N = ".."; else if (!/\d/.test(I)) break; K += I } var O = A.Hooks.getUnit(r, z), P = A.Hooks.getUnit(p, B); if (z += O.length, B += P.length, O === P) J === K ? g += J + O : (g += "{" + C.length + (F ? "!" : "") + "}" + O, C.push(parseFloat(J)), D.push(parseFloat(K))); else { var Q = parseFloat(J), R = parseFloat(K); g += (E < 5 ? "calc" : "") + "(" + (Q ? "{" + C.length + (F ? "!" : "") + "}" : "0") + O + " + " + (R ? "{" + (C.length + (Q ? 1 : 0)) + (F ? "!" : "") + "}" : "0") + P + ")", Q && (C.push(Q), D.push(0)), R && (C.push(0), D.push(R)) } } else { if (H !== I) { E = 0; break } g += H, z++, B++, 0 === E && "c" === H || 1 === E && "a" === H || 2 === E && "l" === H || 3 === E && "c" === H || E >= 4 && "(" === H ? E++ : (E && E < 5 || E >= 4 && ")" === H && --E < 5) && (E = 0), 0 === F && "r" === H || 1 === F && "g" === H || 2 === F && "b" === H || 3 === F && "a" === H || F >= 3 && "(" === H ? (3 === F && "a" === H && (G = 1), F++) : G && "," === H ? ++G > 3 && (F = G = 0) : (G && F < (G ? 5 : 4) || F >= (G ? 4 : 3) && ")" === H && --F < (G ? 5 : 4)) && (F = G = 0) } } z === r.length && B === p.length || (y.debug && console.error('Trying to pattern match mis-matched strings ["' + p + '", "' + r + '"]'), g = d), g && (C.length ? (y.debug && console.log('Pattern found "' + g + '" -> ', C, D, "[" + r + "," + p + "]"), r = C, p = D, t = v = "") : g = d) } g || (s = x(e, r), r = s[0], v = s[1], s = x(e, p), p = s[0].replace(/^([+-\/*])=/, function (a, b) { return w = b, "" }), t = s[1], r = parseFloat(r) || 0, p = parseFloat(p) || 0, "%" === t && (/^(fontSize|lineHeight)$/.test(e) ? (p /= 100, t = "em") : /^scale/.test(e) ? (p /= 100, t = "") : /(Red|Green|Blue)$/i.test(e) && (p = p / 100 * 255, t = ""))); if (/[\/*]/.test(w)) t = v; else if (v !== t && 0 !== r) if (0 === p) t = v; else { h = h || function () { var d = { myParent: a.parentNode || c.body, position: A.getPropertyValue(a, "position"), fontSize: A.getPropertyValue(a, "fontSize") }, e = d.position === M.lastPosition && d.myParent === M.lastParent, f = d.fontSize === M.lastFontSize; M.lastParent = d.myParent, M.lastPosition = d.position, M.lastFontSize = d.fontSize; var g = {}; if (f && e) g.emToPx = M.lastEmToPx, g.percentToPxWidth = M.lastPercentToPxWidth, g.percentToPxHeight = M.lastPercentToPxHeight; else { var h = k && k.isSVG ? c.createElementNS("http://www.w3.org/2000/svg", "rect") : c.createElement("div"); y.init(h), d.myParent.appendChild(h), o.each(["overflow", "overflowX", "overflowY"], function (a, b) { y.CSS.setPropertyValue(h, b, "hidden") }), y.CSS.setPropertyValue(h, "position", d.position), y.CSS.setPropertyValue(h, "fontSize", d.fontSize), y.CSS.setPropertyValue(h, "boxSizing", "content-box"), o.each(["minWidth", "maxWidth", "width", "minHeight", "maxHeight", "height"], function (a, b) { y.CSS.setPropertyValue(h, b, "100%") }), y.CSS.setPropertyValue(h, "paddingLeft", "100em"), g.percentToPxWidth = M.lastPercentToPxWidth = (parseFloat(A.getPropertyValue(h, "width", null, !0)) || 1) / 100, g.percentToPxHeight = M.lastPercentToPxHeight = (parseFloat(A.getPropertyValue(h, "height", null, !0)) || 1) / 100, g.emToPx = M.lastEmToPx = (parseFloat(A.getPropertyValue(h, "paddingLeft")) || 1) / 100, d.myParent.removeChild(h) } return null === M.remToPx && (M.remToPx = parseFloat(A.getPropertyValue(c.body, "fontSize")) || 16), null === M.vwToPx && (M.vwToPx = parseFloat(b.innerWidth) / 100, M.vhToPx = parseFloat(b.innerHeight) / 100), g.remToPx = M.remToPx, g.vwToPx = M.vwToPx, g.vhToPx = M.vhToPx, y.debug >= 1 && console.log("Unit ratios: " + JSON.stringify(g), a), g }(); var S = /margin|padding|left|right|width|text|word|letter/i.test(e) || /X$/.test(e) || "x" === e ? "x" : "y"; switch (v) { case "%": r *= "x" === S ? h.percentToPxWidth : h.percentToPxHeight; break; case "px": break; default: r *= h[v + "ToPx"] }switch (t) { case "%": r *= 1 / ("x" === S ? h.percentToPxWidth : h.percentToPxHeight); break; case "px": break; default: r *= 1 / h[t + "ToPx"] } } switch (w) { case "+": p = r + p; break; case "-": p = r - p; break; case "*": p *= r; break; case "/": p = r / p }j[e] = { rootPropertyValue: m, startValue: r, currentValue: r, endValue: p, unitType: t, easing: q }, g && (j[e].pattern = g), y.debug && console.log("tweensContainer (" + e + "): " + JSON.stringify(j[e]), a)
            }; for (var I in s) if (s.hasOwnProperty(I)) { var J = A.Names.camelCase(I), K = function (b, c) { var d, f, g; return u.isFunction(b) && (b = b.call(a, e, C)), u.isArray(b) ? (d = b[0], !u.isArray(b[1]) && /^[\d-]/.test(b[1]) || u.isFunction(b[1]) || A.RegEx.isHex.test(b[1]) ? g = b[1] : u.isString(b[1]) && !A.RegEx.isHex.test(b[1]) && y.Easings[b[1]] || u.isArray(b[1]) ? (f = c ? b[1] : l(b[1], i.duration), g = b[2]) : g = b[1] || b[2]) : d = b, c || (f = f || i.easing), u.isFunction(d) && (d = d.call(a, e, C)), u.isFunction(g) && (g = g.call(a, e, C)), [d || 0, f, g] }(s[I]); if (t(A.Lists.colors, J)) { var L = K[0], O = K[1], P = K[2]; if (A.RegEx.isHex.test(L)) { for (var Q = ["Red", "Green", "Blue"], R = A.Values.hexToRgb(L), S = P ? A.Values.hexToRgb(P) : d, T = 0; T < Q.length; T++) { var U = [R[T]]; O && U.push(O), S !== d && U.push(S[T]), H(J + Q[T], U) } continue } } H(J, K) } j.element = a
          } j.element && (A.Values.addClass(a, "velocity-animating"), N.push(j), k = g(a), k && ("" === i.queue && (k.tweensContainer = j, k.opts = i), k.isAnimating = !0), D === C - 1 ? (y.State.calls.push([N, r, i, null, z.resolver, null, 0]), y.State.isTicking === !1 && (y.State.isTicking = !0, m())) : D++)
        } var h, i = o.extend({}, y.defaults, v), j = {}; switch (g(a) === d && y.init(a), parseFloat(i.delay) && i.queue !== !1 && o.queue(a, i.queue, function (b) { y.velocityQueueEntryFlag = !0; var c = y.State.delayedElements.count++; y.State.delayedElements[c] = a; var d = function (a) { return function () { y.State.delayedElements[a] = !1, b() } }(c); g(a).delayBegin = (new Date).getTime(), g(a).delay = parseFloat(i.delay), g(a).delayTimer = { setTimeout: setTimeout(b, parseFloat(i.delay)), next: d } }), i.duration.toString().toLowerCase()) { case "fast": i.duration = 200; break; case "normal": i.duration = w; break; case "slow": i.duration = 600; break; default: i.duration = parseFloat(i.duration) || 1 }if (y.mock !== !1 && (y.mock === !0 ? i.duration = i.delay = 1 : (i.duration *= parseFloat(y.mock) || 1, i.delay *= parseFloat(y.mock) || 1)), i.easing = l(i.easing, i.duration), i.begin && !u.isFunction(i.begin) && (i.begin = null), i.progress && !u.isFunction(i.progress) && (i.progress = null), i.complete && !u.isFunction(i.complete) && (i.complete = null), i.display !== d && null !== i.display && (i.display = i.display.toString().toLowerCase(), "auto" === i.display && (i.display = y.CSS.Values.getDisplayType(a))), i.visibility !== d && null !== i.visibility && (i.visibility = i.visibility.toString().toLowerCase()), i.mobileHA = i.mobileHA && y.State.isMobile && !y.State.isGingerbread, i.queue === !1) if (i.delay) { var k = y.State.delayedElements.count++; y.State.delayedElements[k] = a; var n = function (a) { return function () { y.State.delayedElements[a] = !1, f() } }(k); g(a).delayBegin = (new Date).getTime(), g(a).delay = parseFloat(i.delay), g(a).delayTimer = { setTimeout: setTimeout(f, parseFloat(i.delay)), next: n } } else f(); else o.queue(a, i.queue, function (a, b) { if (b === !0) return z.promise && z.resolver(r), !0; y.velocityQueueEntryFlag = !0, f(a) }); "" !== i.queue && "fx" !== i.queue || "inprogress" === o.queue(a)[0] || o.dequeue(a)
      } var j, k, p, q, r, s, v, x = arguments[0] && (arguments[0].p || o.isPlainObject(arguments[0].properties) && !arguments[0].properties.names || u.isString(arguments[0].properties)); u.isWrapped(this) ? (k = !1, q = 0, r = this, p = this) : (k = !0, q = 1, r = x ? arguments[0].elements || arguments[0].e : arguments[0]); var z = { promise: null, resolver: null, rejecter: null }; if (k && y.Promise && (z.promise = new y.Promise(function (a, b) { z.resolver = a, z.rejecter = b })), x ? (s = arguments[0].properties || arguments[0].p, v = arguments[0].options || arguments[0].o) : (s = arguments[q], v = arguments[q + 1]), !(r = f(r))) return void (z.promise && (s && v && v.promiseRejectEmpty === !1 ? z.resolver() : z.rejecter())); var C = r.length, D = 0; if (!/^(stop|finish|finishAll|pause|resume)$/i.test(s) && !o.isPlainObject(v)) { var E = q + 1; v = {}; for (var F = E; F < arguments.length; F++)u.isArray(arguments[F]) || !/^(fast|normal|slow)$/i.test(arguments[F]) && !/^\d/.test(arguments[F]) ? u.isString(arguments[F]) || u.isArray(arguments[F]) ? v.easing = arguments[F] : u.isFunction(arguments[F]) && (v.complete = arguments[F]) : v.duration = arguments[F] } var G; switch (s) { case "scroll": G = "scroll"; break; case "reverse": G = "reverse"; break; case "pause": var H = (new Date).getTime(); return o.each(r, function (a, b) { h(b, H) }), o.each(y.State.calls, function (a, b) { var c = !1; b && o.each(b[1], function (a, e) { var f = v === d ? "" : v; return f !== !0 && b[2].queue !== f && (v !== d || b[2].queue !== !1) || (o.each(r, function (a, d) { if (d === e) return b[5] = { resume: !1 }, c = !0, !1 }), !c && void 0) }) }), a(); case "resume": return o.each(r, function (a, b) { i(b, H) }), o.each(y.State.calls, function (a, b) { var c = !1; b && o.each(b[1], function (a, e) { var f = v === d ? "" : v; return f !== !0 && b[2].queue !== f && (v !== d || b[2].queue !== !1) || (!b[5] || (o.each(r, function (a, d) { if (d === e) return b[5].resume = !0, c = !0, !1 }), !c && void 0)) }) }), a(); case "finish": case "finishAll": case "stop": o.each(r, function (a, b) { g(b) && g(b).delayTimer && (clearTimeout(g(b).delayTimer.setTimeout), g(b).delayTimer.next && g(b).delayTimer.next(), delete g(b).delayTimer), "finishAll" !== s || v !== !0 && !u.isString(v) || (o.each(o.queue(b, u.isString(v) ? v : ""), function (a, b) { u.isFunction(b) && b() }), o.queue(b, u.isString(v) ? v : "", [])) }); var I = []; return o.each(y.State.calls, function (a, b) { b && o.each(b[1], function (c, e) { var f = v === d ? "" : v; if (f !== !0 && b[2].queue !== f && (v !== d || b[2].queue !== !1)) return !0; o.each(r, function (c, d) { if (d === e) if ((v === !0 || u.isString(v)) && (o.each(o.queue(d, u.isString(v) ? v : ""), function (a, b) { u.isFunction(b) && b(null, !0) }), o.queue(d, u.isString(v) ? v : "", [])), "stop" === s) { var h = g(d); h && h.tweensContainer && f !== !1 && o.each(h.tweensContainer, function (a, b) { b.endValue = b.currentValue }), I.push(a) } else "finish" !== s && "finishAll" !== s || (b[2].duration = 1) }) }) }), "stop" === s && (o.each(I, function (a, b) { n(b, !0) }), z.promise && z.resolver(r)), a(); default: if (!o.isPlainObject(s) || u.isEmptyObject(s)) { if (u.isString(s) && y.Redirects[s]) { j = o.extend({}, v); var J = j.duration, K = j.delay || 0; return j.backwards === !0 && (r = o.extend(!0, [], r).reverse()), o.each(r, function (a, b) { parseFloat(j.stagger) ? j.delay = K + parseFloat(j.stagger) * a : u.isFunction(j.stagger) && (j.delay = K + j.stagger.call(b, a, C)), j.drag && (j.duration = parseFloat(J) || (/^(callout|transition)/.test(s) ? 1e3 : w), j.duration = Math.max(j.duration * (j.backwards ? 1 - a / C : (a + 1) / C), .75 * j.duration, 200)), y.Redirects[s].call(b, b, j || {}, a, C, r, z.promise ? z : d) }), a() } var L = "Velocity: First argument (" + s + ") was not a property map, a known action, or a registered redirect. Aborting."; return z.promise ? z.rejecter(new Error(L)) : b.console && console.log(L), a() } G = "start" }var M = { lastParent: null, lastPosition: null, lastFontSize: null, lastPercentToPxWidth: null, lastPercentToPxHeight: null, lastEmToPx: null, remToPx: null, vwToPx: null, vhToPx: null }, N = []; o.each(r, function (a, b) { u.isNode(b) && e(b, a) }), j = o.extend({}, y.defaults, v), j.loop = parseInt(j.loop, 10); var O = 2 * j.loop - 1; if (j.loop) for (var P = 0; P < O; P++) { var Q = { delay: j.delay, progress: j.progress }; P === O - 1 && (Q.display = j.display, Q.visibility = j.visibility, Q.complete = j.complete), B(r, "reverse", Q) } return a()
    }; y = o.extend(B, y), y.animate = B; var C = b.requestAnimationFrame || q; if (!y.State.isMobile && c.hidden !== d) { var D = function () { c.hidden ? (C = function (a) { return setTimeout(function () { a(!0) }, 16) }, m()) : C = b.requestAnimationFrame || q }; D(), c.addEventListener("visibilitychange", D) } return a.Velocity = y, a !== b && (a.fn.velocity = B, a.fn.velocity.defaults = y.defaults), o.each(["Down", "Up"], function (a, b) { y.Redirects["slide" + b] = function (a, c, e, f, g, h) { var i = o.extend({}, c), j = i.begin, k = i.complete, l = {}, m = { height: "", marginTop: "", marginBottom: "", paddingTop: "", paddingBottom: "" }; i.display === d && (i.display = "Down" === b ? "inline" === y.CSS.Values.getDisplayType(a) ? "inline-block" : "block" : "none"), i.begin = function () { 0 === e && j && j.call(g, g); for (var c in m) if (m.hasOwnProperty(c)) { l[c] = a.style[c]; var d = A.getPropertyValue(a, c); m[c] = "Down" === b ? [d, 0] : [0, d] } l.overflow = a.style.overflow, a.style.overflow = "hidden" }, i.complete = function () { for (var b in l) l.hasOwnProperty(b) && (a.style[b] = l[b]); e === f - 1 && (k && k.call(g, g), h && h.resolver(g)) }, y(a, m, i) } }), o.each(["In", "Out"], function (a, b) { y.Redirects["fade" + b] = function (a, c, e, f, g, h) { var i = o.extend({}, c), j = i.complete, k = { opacity: "In" === b ? 1 : 0 }; 0 !== e && (i.begin = null), i.complete = e !== f - 1 ? null : function () { j && j.call(g, g), h && h.resolver(g) }, i.display === d && (i.display = "In" === b ? "auto" : "none"), y(this, k, i) } }), y
  }(window.jQuery || window.Zepto || window, window, window ? window.document : undefined)
});
/*
    PDFObject v2.0.201604172
    https://github.com/pipwerks/PDFObject
    Copyright (c) 2008-2016 Philip Hutchison
    MIT-style license: http://pipwerks.mit-license.org/
    UMD module pattern from https://github.com/umdjs/umd/blob/master/templates/returnExports.js
*/
(function (root, factory) { if (typeof define === "function" && define.amd) { define([], factory) } else if (typeof module === "object" && module.exports) { module.exports = factory() } else { root.PDFObject = factory() } })(this, function () { "use strict"; if (typeof window === "undefined" || typeof navigator === "undefined") { return false } var pdfobjectversion = "2.0.201604172", supportsPDFs, createAXO, isIE, supportsPdfMimeType = typeof navigator.mimeTypes["application/pdf"] !== "undefined", supportsPdfActiveX, buildFragmentString, log, embedError, embed, getTargetElement, generatePDFJSiframe, isIOS = function () { return /iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()) }(), generateEmbedElement; createAXO = function (type) { var ax; try { ax = new ActiveXObject(type) } catch (e) { ax = null } return ax }; isIE = function () { return !!(window.ActiveXObject || "ActiveXObject" in window) }; supportsPdfActiveX = function () { return !!(createAXO("AcroPDF.PDF") || createAXO("PDF.PdfCtrl")) }; supportsPDFs = supportsPdfMimeType || isIE() && supportsPdfActiveX(); buildFragmentString = function (pdfParams) { var string = "", prop; if (pdfParams) { for (prop in pdfParams) { if (pdfParams.hasOwnProperty(prop)) { string += encodeURIComponent(prop) + "=" + encodeURIComponent(pdfParams[prop]) + "&" } } if (string) { string = "#" + string; string = string.slice(0, string.length - 1) } } return string }; log = function (msg) { if (typeof console !== "undefined" && console.log) { console.log("[PDFObject] " + msg) } }; embedError = function (msg) { log(msg); return false }; getTargetElement = function (targetSelector) { var targetNode = document.body; if (typeof targetSelector === "string") { targetNode = document.querySelector(targetSelector) } else if (typeof jQuery !== "undefined" && targetSelector instanceof jQuery && targetSelector.length) { targetNode = targetSelector.get(0) } else if (typeof targetSelector.nodeType !== "undefined" && targetSelector.nodeType === 1) { targetNode = targetSelector } return targetNode }; generatePDFJSiframe = function (targetNode, url, pdfOpenFragment, PDFJS_URL, id) { var fullURL = PDFJS_URL + "?file=" + encodeURIComponent(url) + pdfOpenFragment; var scrollfix = isIOS ? "-webkit-overflow-scrolling: touch; overflow-y: scroll; " : "overflow: hidden; "; var iframe = "<div style='" + scrollfix + "position: absolute; top: 0; right: 0; bottom: 0; left: 0;'><iframe  " + id + " src='" + fullURL + "' style='border: none; width: 100%; height: 100%;' frameborder='0'></iframe></div>"; targetNode.className += " pdfobject-container"; targetNode.style.position = "relative"; targetNode.style.overflow = "auto"; targetNode.innerHTML = iframe; return targetNode.getElementsByTagName("iframe")[0] }; generateEmbedElement = function (targetNode, targetSelector, url, pdfOpenFragment, width, height, id) { var style = ""; if (targetSelector && targetSelector !== document.body) { style = "width: " + width + "; height: " + height + ";" } else { style = "position: absolute; top: 0; right: 0; bottom: 0; left: 0; width: 100%; height: 100%;" } targetNode.className += " pdfobject-container"; targetNode.innerHTML = "<embed " + id + " class='pdfobject' src='" + url + pdfOpenFragment + "' type='application/pdf' style='overflow: auto; " + style + "'/>"; return targetNode.getElementsByTagName("embed")[0] }; embed = function (url, targetSelector, options) { if (typeof url !== "string") { return embedError("URL is not valid") } targetSelector = typeof targetSelector !== "undefined" ? targetSelector : false; options = typeof options !== "undefined" ? options : {}; var id = options.id && typeof options.id === "string" ? "id='" + options.id + "'" : "", page = options.page ? options.page : false, pdfOpenParams = options.pdfOpenParams ? options.pdfOpenParams : {}, fallbackLink = typeof options.fallbackLink !== "undefined" ? options.fallbackLink : true, width = options.width ? options.width : "100%", height = options.height ? options.height : "100%", forcePDFJS = typeof options.forcePDFJS === "boolean" ? options.forcePDFJS : false, PDFJS_URL = options.PDFJS_URL ? options.PDFJS_URL : false, targetNode = getTargetElement(targetSelector), fallbackHTML = "", pdfOpenFragment = "", fallbackHTML_default = "<p>This browser does not support inline PDFs. Please download the PDF to view it: <a href='[url]'>Download PDF</a></p>"; if (!targetNode) { return embedError("Target element cannot be determined") } if (page) { pdfOpenParams.page = page } pdfOpenFragment = buildFragmentString(pdfOpenParams); if (forcePDFJS && PDFJS_URL) { return generatePDFJSiframe(targetNode, url, pdfOpenFragment, PDFJS_URL, id) } else if (supportsPDFs) { return generateEmbedElement(targetNode, targetSelector, url, pdfOpenFragment, width, height, id) } else { if (PDFJS_URL) { return generatePDFJSiframe(targetNode, url, pdfOpenFragment, PDFJS_URL, id) } else if (fallbackLink) { fallbackHTML = typeof fallbackLink === "string" ? fallbackLink : fallbackHTML_default; targetNode.innerHTML = fallbackHTML.replace(/\[url\]/g, url) } return embedError("This browser does not support embedded PDFs") } }; return { embed: function (a, b, c) { return embed(a, b, c) }, pdfobjectversion: function () { return pdfobjectversion }(), supportsPDFs: function () { return supportsPDFs }() } });
/**
 * PgwCookie - Version 1.4
 *
 * Copyright 2014, Jonathan M. Piat
 * http://pgwjs.com - http://pagawa.com
 *
 * Released under the GNU GPLv3 license - http://opensource.org/licenses/gpl-3.0
 */
(function (a) { a.pgwCookie = function (d) { if (typeof d == "undefined") { throw new Error("PgwCookie - Your parameter is not an object") } else { if (!d.name) { throw new Error("PgwCookie - Please provide a name to your cookie") } } var e = function () { if (typeof d.expires === "number") { var f = new Date(); f.setTime(f.getTime() + d.expires * 60 * 1000); var h = f.toUTCString() } else { delete d.expires } if (d.json) { d.value = JSON.stringify(d.value) } else { if (!d.raw) { d.value = encodeURIComponent(d.value) } } var g = d.name + "=" + d.value + ";" + (d.expires ? "expires=" + h + ";" : "") + (d.path ? "path=" + d.path + ";" : "") + (d.domain ? "domain=" + d.domain + ";" : "") + (d.secure ? "secure;" : ""); return (document.cookie = g) }; var c = function () { if (document.cookie.length > 0) { var h = document.cookie.split("; "); if (typeof String.prototype.trim !== "function") { String.prototype.trim = function () { return this.replace(/^\s+|\s+$/g, "") } } for (var g in h) { var k = h[g].split("="); var j = decodeURIComponent(k.shift()).trim(); var f = k.join("="); if (d.name === j) { if (d.json && f.length > 0) { f = JSON.parse(f) } else { if (!d.raw) { f = decodeURIComponent(f) } } return f } } return undefined } }; var b = function () { if (typeof c(d.name) == "undefined") { return false } var f = d.name + "=;expires=Thu, 01 Jan 1970 00:00:01 GMT;" + (d.path ? "path=" + d.path + ";" : "") + (d.domain ? "domain=" + d.domain + ";" : "") + (d.secure ? "secure;" : ""); return (document.cookie = f) }; if (typeof d.value != "undefined") { if (d.value === null) { return b() } else { return e() } } else { return c() } } })(window.Zepto || window.jQuery);


/**
 * PicoModal - Version 3.0.0
 *
 * Copyright (c) 2012 James Frasca
 * https://github.com/Nycto/PicoModal
 *
 * Released under the MIT License
 */
!function (a, b) { "use strict"; "function" == typeof define && define.amd ? define([], b) : "object" == typeof module && module.exports ? module.exports = b() : a.picoModal = b() }(this, function () { "use strict"; function a(a) { return "object" == typeof Node ? a instanceof Node : a && "object" == typeof a && "number" == typeof a.nodeType } function b(a) { return "string" == typeof a } function c() { var a = []; return { watch: a.push.bind(a), trigger: function (b, c) { for (var d = !0, e = { detail: c, preventDefault: function () { d = !1 } }, f = 0; f < a.length; f++)a[f](b, e); return d } } } function d(a) { return "none" === window.getComputedStyle(a).display } function e(a) { this.elem = a } function f(a, b) { return e.make(a("parent")).clazz("pico-overlay").clazz(a("overlayClass", "")).stylize({ display: "none", position: "fixed", top: "0px", left: "0px", height: "100%", width: "100%", zIndex: 1e4 }).stylize(a("overlayStyles", { opacity: .5, background: "#120029" })).onClick(function () { a("overlayClose", !0) && b() }) } function g(a, b) { var c = a("width", "auto"); "number" == typeof c && (c = "" + c + "px"); var d = a("modalId", "pico-" + l++), f = e.make(a("parent")).clazz("pico-content").clazz(a("modalClass", "")).stylize({ display: "none", position: "fixed", zIndex: 10001, left: "50%", top: "38.1966%", maxHeight: "90%", boxSizing: "border-box", width: c, "-ms-transform": "translate(-50%,-38.1966%)", "-moz-transform": "translate(-50%,-38.1966%)", "-webkit-transform": "translate(-50%,-38.1966%)", "-o-transform": "translate(-50%,-38.1966%)", transform: "translate(-50%,-38.1966%)" }).stylize(a("modalStyles", { overflow: "auto", backgroundColor: "white", padding: "20px", borderRadius: "5px" })).html(a("content")).attr("id", d).attr("role", "dialog").attr("aria-labelledby", a("ariaLabelledBy")).attr("aria-describedby", a("ariaDescribedBy", d)).onClick(function (a) { var c = new e(a.target).anyAncestor(function (a) { return /\bpico-close\b/.test(a.elem.className) }); c && b() }); return f } function h(a, b) { return b("closeButton", !0) ? a.child("button").html(b("closeHtml", "&#xD7;")).clazz("pico-close").clazz(b("closeClass", "")).stylize(b("closeStyles", { borderRadius: "2px", border: 0, padding: 0, cursor: "pointer", height: "15px", width: "15px", position: "absolute", top: "5px", right: "5px", fontSize: "16px", textAlign: "center", lineHeight: "15px", background: "#CCC" })).attr("aria-label", b("close-label", "Close")) : void 0 } function i(a) { return function () { return a().elem } } function j(a, b) { function c(a, b) { var c = a.msMatchesSelector || a.webkitMatchesSelector || a.matches; return c.call(a, b) } function e(a) { return d(a) || c(a, ":disabled") || a.hasAttribute("contenteditable") ? !1 : a.hasAttribute("tabindex") || c(a, "input,select,textarea,button,a[href],area[href],iframe") } function f(a) { for (var b = a.getElementsByTagName("*"), c = 0; c < b.length; c++)if (e(b[c])) return b[c] } function g(a) { for (var b = a.getElementsByTagName("*"), c = b.length; c--;)if (e(b[c])) return b[c] } var h; a.beforeShow(function () { h = document.activeElement }), a.afterShow(function () { if (b()) { var c = f(a.modalElem()); c && c.focus() } }), a.afterClose(function () { b() && h && h.focus(), h = null }), n.watch(function (c) { if (b() && a.isVisible()) { var d = f(a.modalElem()), e = g(a.modalElem()), h = c.shiftKey ? d : e; h === document.activeElement && ((c.shiftKey ? e : d).focus(), c.preventDefault()) } }) } function k(a, b) { var c, d = new e(document.body); a.beforeShow(function () { c = d.elem.style.overflow, b() && d.stylize({ overflow: "hidden" }) }), a.afterClose(function () { d.stylize({ overflow: c }) }) } e.make = function (a, b) { "string" == typeof a && (a = document.querySelector(a)); var c = document.createElement(b || "div"); return (a || document.body).appendChild(c), new e(c) }, e.prototype = { child: function (a) { return e.make(this.elem, a) }, stylize: function (a) { a = a || {}, "undefined" != typeof a.opacity && (a.filter = "alpha(opacity=" + 100 * a.opacity + ")"); for (var b in a) a.hasOwnProperty(b) && (this.elem.style[b] = a[b]); return this }, clazz: function (a) { return this.elem.className += " " + a, this }, html: function (b) { return a(b) ? this.elem.appendChild(b) : this.elem.innerHTML = b, this }, onClick: function (a) { return this.elem.addEventListener("click", a), this }, destroy: function () { this.elem.parentNode.removeChild(this.elem) }, hide: function () { this.elem.style.display = "none" }, show: function () { this.elem.style.display = "block" }, attr: function (a, b) { return void 0 !== b && this.elem.setAttribute(a, b), this }, anyAncestor: function (a) { for (var b = this.elem; b;) { if (a(new e(b))) return !0; b = b.parentNode } return !1 }, isVisible: function () { return !d(this.elem) } }; var l = 1, m = c(), n = c(); return document.documentElement.addEventListener("keydown", function (a) { var b = a.which || a.keyCode; 27 === b ? m.trigger() : 9 === b && n.trigger(a) }), function (d) { function e(a, b) { var c = d[a]; return "function" == typeof c && (c = c(b)), void 0 === c ? b : c } function l(a) { y().hide(), x().hide(), w.trigger(q, a) } function n(a) { v.trigger(q, a) && l(a) } function o(a) { return function () { return a.apply(this, arguments), q } } function p(a, b) { if (!r) { var c = g(e, n); r = { modal: c, overlay: f(e, n), close: h(c, e) }, s.trigger(q, b) } return r[a] } (b(d) || a(d)) && (d = { content: d }); var q, r, s = c(), t = c(), u = c(), v = c(), w = c(), x = p.bind(window, "modal"), y = p.bind(window, "overlay"), z = p.bind(window, "close"); return q = { modalElem: i(x), closeElem: i(z), overlayElem: i(y), buildDom: o(p.bind(null, null)), isVisible: function () { return !!(r && x && x().isVisible()) }, show: function (a) { return t.trigger(q, a) && (y().show(), z(), x().show(), u.trigger(q, a)), this }, close: o(n), forceClose: o(l), destroy: function () { x().destroy(), y().destroy(), y = x = z = void 0 }, options: function (a) { Object.keys(a).map(function (b) { d[b] = a[b] }) }, afterCreate: o(s.watch), beforeShow: o(t.watch), afterShow: o(u.watch), beforeClose: o(v.watch), afterClose: o(w.watch) }, j(q, e.bind(null, "focus", !0)), k(q, e.bind(null, "bodyOverflow", !0)), m.watch(function () { e("escCloses", !0) && q.isVisible() && q.close() }), q } });
var isTouchDevice = function () {
  var prefixes = ' -webkit- -moz- -o- -ms- '.split(' ');
  var mq = function (query) {
    return window.matchMedia(query).matches;
  }

  if (('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch) {
    return true;
  }

  // include the 'heartz' as a way to have a non matching MQ to help terminate the join
  // https://git.io/vznFH
  var query = ['(', prefixes.join('touch-enabled),('), 'heartz', ')'].join('');
  return mq(query);
};

// overlay contact form

var initContactForm = function ($, wrapperSelector, triggerSelector) {
  var $wrapper = $(wrapperSelector);
  var $triggers = $(triggerSelector);
  // console.log($wrapper,$triggers)
  // console.log('Contact overlay  form js loaded')
  if ($wrapper.length > 0 && $triggers.length > 0) {
    $triggers.click(function () {
      if ($wrapper.hasClass('opened')) {
        $wrapper.removeClass('opened');
      } else {
        $wrapper.addClass('opened');
        $wrapper.find('.close').one('click', function () {
          $wrapper.removeClass('opened');
        });
      }
    })
  }
};

// reduce font size responsively

//$(document).ready(function () {
//  var holdWidth = $(window).width();
//  var holdHeight = $(window).height();
//  var holdAverageSize = (holdWidth + holdHeight) / 2;
//  $(window).on('resize', function () {
//      newAverageSize = ($(window).width() + $(window).height()) / 2;
//      newPercentage = ((newAverageSize / holdAverageSize) * 100) + "%";
//      $("html").css("font-size", newPercentage)
//      console.log(newPercentage);
//  });
//});

// read next open after scroll design  ** need to resolve 
var initHeadroom = function ($, wrapperClass, options) {
  var main = $(wrapperClass)[0];
  if (main) {
    var hamburgerLeft = $(".main-menu-toggle.left-panel .hamburger");
    //var wrapperLeft = $(".side-panel-wrapper.left");
    var headroom = new Headroom(
      main,
      $.extend({
        tolerance: 5,
        offset: 100,
        classes: {
          initial: "animated",
          pinned: "slideDown",
          unpinned: "slideUp"
        },
      }, options || {})
    );
    headroom.init();
    $(main).data("headroom-instance", headroom);
  }
};

var initToggleButtons = function ($) {
  var hamburgerRight = $(".main-menu-toggle.right-panel .hamburger");
  var wrapperRight = $(".side-panel-wrapper.right");
  var nag = $(".next-step-nag");
  hamburgerRight.on("click", function (event) {
    hamburgerRight.toggleClass("is-active");
    wrapperRight.toggleClass("opened");
  });
  nag.on("click", function (event) {
    window.location = $(this).find("a").attr("href");
  });
};
// read next open after scroll design ** need to resolve 

var beforeInitSwup = function ($) {
  initNextDown($);
  initOverlayPopup($);
  initMenuToggle($);
  $(document).on('flock:sidebar:opened', function () {
    setupSticky($);
  });
  $(document).on('flock:sidebar:closed', function () {
    destroySticky($);
  });
}

var onLoadHook = function ($, initial) {
  initOverlayed($);
  replaceVars($);
  setTimeout(function () {
    initSidebar($);
  }, 200);
  initPdfs($);
  initNextStep($);
  initSectionVideoAndBanner($);
  initSectionSocialNetworksShare($);
  initFlockSlide($);
  //console.log('Load hooks invoked')

  initContactForm($, '.overlay-contact-form', '[data-contact-form-trigger="1"]');
  if (window.twttr) {
    twttr.widgets.load();
  }
  if (window.instgrm) {
    window.instgrm.Embeds.process();
  }
}

var replaceVarsDecode = function (s) {
  return decodeURIComponent(s.replace(/\+/g, ' '));
};
var isEmptyObject = function (obj) {
  return Object.keys(obj).length === 0 && obj.constructor === Object
};
var replaceVarsSetCookie = function (value) {
  return $.pgwCookie({
    name: 'flockVars',
    json: true,
    path: '/',
    secure: window.location.protocol === 'https:',
    value: value
  });
};
var replaceVarsGetCookie = function () {
  return $.pgwCookie({
    name: 'flockVars',
    json: true,
    path: '/',
    secure: window.location.protocol === 'https:'
  });
};

var replaceVars = function ($) {
  var assocs = {};
  var nodes = {};
  var queryString = window.location.search.substring(1);
  var keyValues = queryString.split('&');
  for (var i in keyValues) {
    var key = keyValues[i].split('=');
    if (key.length > 1) {
      assocs[replaceVarsDecode(key[0])] = replaceVarsDecode(key[1]);
    }
  }
  if (isEmptyObject(assocs)) {
    var fromCookie = replaceVarsGetCookie();
    if (fromCookie) assocs = fromCookie;
  }
  $('[data-fvar]').forEach(function (node) {
    var $node = $(node);
    var key = $node.data('fvar');
    nodes[key] = nodes[key] || [];
    nodes[key].push($node);
  });
  for (var key in nodes) {
    var $nodes = nodes[key];
    var value = assocs[key];
    $nodes.forEach(function ($node) {
      var presentValue = $node.data('fpresent');
      var missingValue = $node.data('fmissing');
      if (value) {
        if (presentValue && presentValue !== '') {
          $node.replaceWith(presentValue.replace('__value__', value));
        } else {
          $node.replaceWith(value);
        }
      } else if (missingValue && missingValue !== '') {
        $node.replaceWith(missingValue);
      }
    });
  }
  if (isEmptyObject(assocs)) {
    replaceVarsSetCookie(null);
  } else {
    replaceVarsSetCookie(assocs);
  }
}

var swup;
var initSwup = function ($) {
  swup = new Swup({
    skipPopStateHandling: function () {
      var hash = window.location.hash;
      if (hash !== '' && hash.indexOf('#/step-') === 0) {
        return true;
      }
      return false;
    },
    LINK_SELECTOR: 'a[href^="/"]:not([data-no-swup]), a[href^="#"]:not([data-no-swup]), a[xlink\\:href], body:not(.impress-path) .next-step a',
  });
  swup.usePlugin(swupMergeHeadPlugin, { runScripts: true });
  // Initialize cookie consent
  function initConsentBanner() {
    const cookiesAccepted = localStorage.getItem('cookies_accepted');
    // console.log('cookies_accepted:', cookiesAccepted);

    if (!cookiesAccepted) {
      document.getElementById('cookie-consent').style.display = 'block';
    } else {
      document.getElementById('cookie-consent').style.display = 'none';
    }

    const acceptButton = document.getElementById('accept-cookies');
    if (acceptButton) {
      acceptButton.addEventListener('click', function () {
        // console.log('Accept button clicked');
        document.getElementById('cookie-consent').style.display = 'none';
        localStorage.setItem('cookies_accepted', 'true');
        // console.log('cookies_accepted set to true');
      });
    } else {
      console.error('Accept button not found');
    }
  };

  // Initialize consent banner on page load
  $(document).ready(initConsentBanner);

  // Reinitialize consent banner after Swup content is replaced
  document.addEventListener('swup:contentReplaced', function () {
    initConsentBanner();
  });
  document.addEventListener('swup:contentReplaced', function (event) {
    var page = swup.cache.getPage(window.location.pathname + window.location.search);
    var $meta = $(page.originalContent).filter('meta[http-equiv="refresh"]');
    if ($meta.length > 0) {
      var content = $meta.prop('content');
      var url = content.replace('0; url=', '');
      window.location = url;
    }
  });
  document.addEventListener('swup:pageView', function (event) {
    if (window.dataLayer) {
      window.dataLayer.push({
        'event': 'VirtualPageview',
        'virtualPageURL': window.location.pathname,
        'virtualPageTitle': document.title
      });
    }
    if ('function' === typeof window.ga) {
      window.ga('set', 'page', window.location.pathname);
      window.ga('send', 'pageview');
    }
    onLoadHook($);
    setupYoutubeVideos($);
    var $site = $('.site');
    if ($site.length !== 0) {
      var forkEndpoint = $site.data('fork-endpoint');
      var forkId = $site.data('fork-id');
      var preview = $site.data('fork-preview') == '1';
      if ('function' === typeof window._flock_forks) {
        window._flock_forks('replace', forkEndpoint, forkId, preview);
      }
    }
  });
};

var flockSlideSimpleItemsAnimate = function ($, $slide, $header, $secondaryHeader, $items) {
  var itemDuration = 500;
  $items.each(function (index, item) {
    var $item = $(item);
    $item.velocity({
      opacity: 1,
      scaleX: 1.2,
      scaleY: 1.2,
    }, {
      duration: itemDuration,
      delay: (index * itemDuration),
    }).velocity({
      scaleX: 1,
      scaleY: 1
    });
  });
  if (isTouchDevice()) {
    $items.velocity({ scaleX: 1 }, {
      complete: function () { $slide.css('overflow-y', 'auto'); } // force repaint...
    });
  }
};
var flockSlideBulletListAfterHeaderAnimate = function ($, $slide, $header, $secondaryHeader, $items) {
  if ($secondaryHeader.length) {
    $secondaryHeader.velocity({
      translateZ: 0,
      scaleX: 1.2,
      scaleY: 1.2,
      opacity: 1,
    }).velocity({
      translateZ: 0,
      scaleX: 1,
      scaleY: 1,
    }, {
      complete: function (elements) {
        flockSlideSimpleItemsAnimate($, $slide, $header, $secondaryHeader, $items);
      }
    });
  } else {
    flockSlideSimpleItemsAnimate($, $slide, $header, $secondaryHeader, $items);
  }
};
var flockSlideBulletListAnimate = function ($, $slide, $header, $secondaryHeader, $items) {
  if ($header.length > 0) {
    $header.velocity({
      translateZ: 0,
      scaleX: 1.2,
      scaleY: 1.2,
      opacity: 1,
    }).velocity({
      translateZ: 0,
      scaleX: 1,
      scaleY: 1,
    }, {
      complete: function (elements) {
        flockSlideBulletListAfterHeaderAnimate($, $slide, $header, $secondaryHeader, $items);
      }
    });
  } else {
    flockSlideBulletListAfterHeaderAnimate($, $slide, $header, $secondaryHeader, $items);
  }
};

var flockSlideLineDotsAfterHeaderAnimate = function ($, $slide, $header, $secondaryHeader, $items) {
  if ($secondaryHeader.length) {
    $secondaryHeader.velocity({
      translateZ: 0,
      scaleX: 1.2,
      scaleY: 1.2,
      opacity: 1,
    }).velocity({
      translateZ: 0,
      scaleX: 1,
      scaleY: 1,
    }, {
      complete: function (elements) {
        flockSlideSimpleItemsAnimate($, $slide, $header, $secondaryHeader, $items);
      }
    });
  } else {
    flockSlideSimpleItemsAnimate($, $slide, $header, $secondaryHeader, $items);
  }
};
var flockSlideLineDotsAnimate = function ($, $slide, $header, $secondaryHeader, $items) {
  if ($header.length > 0) {
    $header.velocity({
      translateZ: 0,
      scaleX: 1.2,
      scaleY: 1.2,
      opacity: 1,
    }).velocity({
      translateZ: 0,
      scaleX: 1,
      scaleY: 1,
    }, {
      complete: function (elements) {
        flockSlideLineDotsAfterHeaderAnimate($, $slide, $header, $secondaryHeader, $items);
      }
    });
  } else {
    flockSlideLineDotsAfterHeaderAnimate($, $slide, $header, $secondaryHeader, $items);
  }
};
var flockSlideVennItemsAnimate = function ($, $slide, $header, $secondaryHeader, $items) {
  var itemDuration = 500;
  $items.each(function (index, item) {
    var $item = $(item);
    var $itemIcon = $item.find('.item-icon');
    $itemIcon.css({ opacity: 0 });

    $item.velocity({
      translateZ: 0,
      scaleX: 1,
      scaleY: 1,
      opacity: 1,
    }, {
      duration: itemDuration,
      delay: (index * itemDuration),
    });

    $itemIcon.velocity({
      translateZ: 0,
      scaleX: 1.2,
      scaleY: 1.2,
      opacity: 0.7,
    }, {
      duration: itemDuration,
      delay: (index * itemDuration),
    }).velocity({
      translateZ: 0,
      scaleX: 1,
      scaleY: 1
    });
  });

}
var flockSlideVennAfterHeaderAnimate = function ($, $slide, $header, $secondaryHeader, $items) {
  if ($secondaryHeader.length) {
    $secondaryHeader.velocity({
      translateZ: 0,
      scaleX: 1.2,
      scaleY: 1.2,
      opacity: 1,
    }).velocity({
      translateZ: 0,
      scaleX: 1,
      scaleY: 1,
    }, {
      complete: function (elements) {
        flockSlideVennItemsAnimate($, $slide, $header, $secondaryHeader, $items);
      }
    });
  } else {
    flockSlideVennItemsAnimate($, $slide, $header, $secondaryHeader, $items);
  }
}
var flockSlideVennAnimate = function ($, $slide, $header, $secondaryHeader, $items) {
  if ($header.length > 0) {
    $header.velocity({
      translateZ: 0,
      scaleX: 1.2,
      scaleY: 1.2,
      opacity: 1,
    }).velocity({
      translateZ: 0,
      scaleX: 1,
      scaleY: 1,
    }, {
      complete: function (elements) {
        flockSlideVennAfterHeaderAnimate($, $slide, $header, $secondaryHeader, $items);
      }
    });
  } else {
    flockSlideVennAfterHeaderAnimate($, $slide, $header, $secondaryHeader, $items);
  }
};
var flockSlideRectangleAfterHeaderAnimate = function ($, $slide, $header, $secondaryHeader, $items) {
  if ($secondaryHeader.length) {
    $secondaryHeader.velocity({
      translateZ: 0,
      scaleX: 1.2,
      scaleY: 1.2,
      opacity: 1,
    }).velocity({
      translateZ: 0,
      scaleX: 1,
      scaleY: 1,
    }, {
      complete: function (elements) {
        flockSlideSimpleItemsAnimate($, $slide, $header, $secondaryHeader, $items);
      }
    });
  } else {
    flockSlideSimpleItemsAnimate($, $slide, $header, $secondaryHeader, $items);
  }
}
var flockSlideRectangleAnimate = function ($, $slide, $header, $secondaryHeader, $items) {
  if ($header.length > 0) {
    $header.velocity({
      translateZ: 0,
      scaleX: 1.2,
      scaleY: 1.2,
      opacity: 1,
    }).velocity({
      translateZ: 0,
      scaleX: 1,
      scaleY: 1,
    }, {
      complete: function (elements) {
        flockSlideRectangleAfterHeaderAnimate($, $slide, $header, $secondaryHeader, $items);
      }
    });
  } else {
    flockSlideRectangleAfterHeaderAnimate($, $slide, $header, $secondaryHeader, $items);
  }
};

var flockSlideStartAnimation = function ($, $slide, $header, $secondaryHeader, $items) {
  if ($slide.hasClass('slide-bullet-list') || $slide.hasClass('slide-bullet-list-numbered')) {
    flockSlideBulletListAnimate($, $slide, $header, $secondaryHeader, $items);
  } else if ($slide.hasClass('slide-line-dots') || $slide.hasClass('slide-line-dots-dispatch')) {
    flockSlideLineDotsAnimate($, $slide, $header, $secondaryHeader, $items);
  } else if ($slide.hasClass('slide-venn')) {
    flockSlideVennAnimate($, $slide, $header, $secondaryHeader, $items);
  } else if ($slide.hasClass('slide-rectangle')) {
    flockSlideRectangleAnimate($, $slide, $header, $secondaryHeader, $items);
  }
}

var flockSlideHideState = function ($, $node) {
  $node.velocity({
    translateZ: 0,
    scaleX: 0,
    scaleY: 0,
    opacity: 0,
  }, { duration: 0 });
}

var initSectionVideoAndBanner = function ($) {
  var $videos = $('.section-video-and-banner .video')
  var $overlays = $videos.children('.overlay');
  $videos.each(function () {
    var $video = $(this);
    var $overlay = $video.children('.overlay');
    $overlay.on('click', function (e) {
      $overlays.show();
      $videos.removeClass('selected');
      $videos.forEach(function (v) {
        if (v !== $video[0]) {
          if (v && v.player) {
            v.player.stopVideo();
          } else {
            var videoPlayer = $(v).children('video')[0];
            if (videoPlayer) {
              videoPlayer.pause();
              videoPlayer.controls = false;
            }
          }
        }
      });
      $overlay.hide();
      $video.addClass('selected');
      if ($video[0] && $video[0].player) {
        $video[0].player.playVideo();
      } else {
        var videoPlayer = $video.children('video')[0];
        if (videoPlayer) {
          videoPlayer.play();
          videoPlayer.controls = true;
        }
      }
    });
  });
}

var initMenuToggle = function ($) {
  $(document).on('click', '.top-menu .toggle-sidebar span', function (ev) {
    var $site = $('.site');
    var $button = $(ev.target);
    ev.preventDefault();
    $site.toggleClass('nav-open');
    $button.toggleClass('is-active');
    if ($site.hasClass('nav-open')) {
      $(document).trigger('flock:sidebar:opened');
    } else {
      $(document).trigger('flock:sidebar:closed');
    }
  });
};

var stickySidebar = null;
var setupSticky = function ($) {
  if ($(window).width() > 768) {
    var bottomSpacing = 20;
    var topSpacing = 0;
    if ($('.path-steps-menu .banner').length > 0) {
      topSpacing = 65;
    }
    if ($(document.body).hasClass('flock-overlayed')) {
      topSpacing = 0;
    }
    if (!stickySidebar) {
      stickySidebar = new StickySidebar('.path-steps-menu', {
        bottomSpacing: bottomSpacing,
        containerSelector: '.path-steps-container',
        innerWrapperSelector: '.path-steps-menu-inner'
      });
    } else {
      destroySticky($);
      setupSticky($);
    }
  }
};
var destroySticky = function ($) {
  if (stickySidebar) {
    stickySidebar.destroy();
    stickySidebar = null;
  }
};

var initOverlayed = function ($) {
  var queryString = window.location.search;
  if (queryString.indexOf('flock-overlay=1') !== -1) {
    $(document.body).addClass('flock-overlayed');
    $('a[href]').forEach(function (a) {
      if (!$('a').data('overlay-popup')) {
        var href = a.href;
        if (href.indexOf('?') !== -1) {
          href = href + '&flock-overlay=1';
        } else {
          href = href + '?flock-overlay=1';
        }
        a.href = href;
      }
    })
  }
};

var initOverlayPopup = function ($) {
  $(document).on('click', 'a[href][data-overlay-popup]', function (ev) {
    var link = $(ev.target).closest('a[data-overlay-popup]');
    var src = link.prop('href');
    if (src.indexOf('/') === 0) {
      src = '://' + window.location.host + src;
    }
    if (src.indexOf('?') !== -1) {
      src = src + '&flock-overlay=1';
    } else {
      src = src + '?flock-overlay=1';
    }
    picoModal({
      content: '<div class="loading">Loading...</div><iframe src="' + src + '" style="border:0;width:100%;height:100%;"></iframe>',
      modalStyles: {
        left: '1.5vw',
        top: '1.5vh',
        width: '97vw',
        height: '97vh',
        maxHeight: '97vh',
        boxShadow: 'rgba(0, 0, 0, 0.5) 0 0 10px',
      },
      closeStyles: function (styles) {
        styles.top = '-7px';
        styles.right = '-7px';
        styles.zIndex = 2;
        return styles;
      }
    })
      .afterShow(function (modal) {
        var $modal = $(modal.modalElem())
        var $overlay = $(modal.overlayElem())
        var $iframe = $(modal.modalElem()).find('iframe');
        var $loading = $(modal.modalElem()).find('.loading');
        $loading.css({
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#fff',
          zIndex: 0,
        });
        $overlay.css('opacity', 0);
        $iframe.css({
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          opacity: 0,
          zIndex: 1
        });
        $modal.velocity({
          opacity: 0,
          translateY: '100vh'
        }, { duration: 0 });
        $overlay.velocity({
          opacity: 0.5
        }, { duration: 500 });
        $modal
          .velocity({
            opacity: 1,
            translateY: 0
          }, {
            easing: [.42, 0, .58, 1],
            duration: 500,
          });
        $iframe.on('load', function (ev) {
          $iframe.css('background-color', '#fff');
          $iframe.velocity({
            'opacity': 1
          }, {
            easing: [.42, 0, .58, 1],
            duration: 500,
          });
        });
      })
      .beforeClose(function (modal, event) {
        event.preventDefault();
        $(modal.modalElem())
          .velocity({
            opacity: 0,
            translateY: '100vh'
          }, {
            easing: [.42, 0, .58, 1],
            duration: 500,
            complete: modal.forceClose
          });
      })
      .afterClose(function (modal) {
        modal.destroy();
      })
      .show();
    ev.preventDefault();
  });
}

var initSidebar = function ($) {
  var $sidebar = $('.path-steps-menu');
  if ($sidebar.length > 0 && $('.site').hasClass('nav-open')) {
    setupSticky($);
  }
};

var initPdfs = function ($) {
  var newHost = '//' + window.location.host + '/_files/';
  $('[data-pdf]').forEach(function (pdf) {
    var $pdf = $(pdf);
    var url = $pdf.data('pdf').replace(/https?:\/\/[^/]+\/?/, newHost);
    PDFObject.embed(url, $pdf[0], {
      PDFJS_URL: "/pdfjs/web/viewer.html"
    });
  });
};


var initNextStep = function ($) {
  $('[data-next-step]').forEach(function (nextStep) {
    var $nextStep = $(nextStep);
    $nextStep.on('click', '.toggle', function (ev) {
      $nextStep.toggleClass('opened');
      ev.preventDefault();
      return false;
    });
  });
};

var initNextDown = function ($) {
  $(document).on('click', '[data-next-down]', function (ev) {
    var current = $(ev.target).parents('section');
    var nextSection = current.next('section');
    ev.preventDefault();
    nextSection.velocity('scroll', {
      duration: 1500,
      easing: [.42, 0, .58, 1]
    });
  });
};

var setupYoutubeVideos = function ($) {
  $('.section-video-and-banner .video.youtube').forEach(function (video) {
    var $video = $(video);
    var $forIframe = $video.children('.for-iframe');
    var url = $(video).data('video-url') || '';
    var splitted = url.split('?')[0].split('/');
    var id = splitted[splitted.length - 1];
    $video[0].player = new YT.Player($forIframe[0], {
      height: '100%',
      width: '100%',
      videoId: id,
      playerVars: {
        autoplay: 0,
        controls: 0,
        modestbranding: 1,
        rel: 0,
        showinfo: 0
      },
      // events: {
      //   'onReady': onPlayerReady,
      //   'onStateChange': onPlayerStateChange
      // }
    });
  })
}

var initYoutubeAPI = function ($) {
  var tag = document.createElement('script');
  tag.src = "https://www.youtube.com/iframe_api";

  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}
var onYouTubeIframeAPIReady = function () {
  setupYoutubeVideos(Zepto);
}
// var onPlayerReady = function(event) {
// }
// var onPlayerStateChange = function(event) {
// }
function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(function () {
    alert("Copied the text: " + text);
  }).catch(function (error) {
    alert("Failed to copy text: " + error);
  });
}

document.addEventListener("DOMContentLoaded", function () {
  // Attach event listener to the email icon
  document.getElementById("copyEmail").addEventListener("click", function () {
    copyToClipboard("hello@flockrush.com");
  });
});

Zepto(function ($) {
  beforeInitSwup($);
  initSwup($);
  initYoutubeAPI($);
  onLoadHook($);
  initHeadroom($, ".next-step-nag", {
    offset: 300,
    classes: {}
  });
  initToggleButtons($);
});
// console.error('End of JS reached')