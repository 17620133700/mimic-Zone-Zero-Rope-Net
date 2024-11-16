/*!
 * mdui 2.1.2 (https://www.mdui.org)
 * Copyright 2016-2024 zdhxiong <zdhxiong@gmail.com>
 * Licensed under MIT
 */
!function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t((e = "undefined" != typeof globalThis ? globalThis : e || self).mdui = {})
}(this, (function(e) {
    "use strict";
    function t(e) {
        return null !== e && "object" == typeof e && "constructor"in e && e.constructor === Object
    }
    function i(e={}, o={}) {
        Object.keys(o).forEach((r=>{
            void 0 === e[r] ? e[r] = o[r] : t(o[r]) && t(e[r]) && Object.keys(o[r]).length > 0 && i(e[r], o[r])
        }
        ))
    }
    const o = {
        body: {},
        addEventListener() {},
        removeEventListener() {},
        activeElement: {
            blur() {},
            nodeName: ""
        },
        querySelector: ()=>null,
        querySelectorAll: ()=>[],
        getElementById: ()=>null,
        createEvent: ()=>({
            initEvent() {}
        }),
        createElement: ()=>({
            children: [],
            childNodes: [],
            style: {},
            setAttribute() {},
            getElementsByTagName: ()=>[]
        }),
        createElementNS: ()=>({}),
        importNode: ()=>null,
        location: {
            hash: "",
            host: "",
            hostname: "",
            href: "",
            origin: "",
            pathname: "",
            protocol: "",
            search: ""
        }
    };
    function r() {
        const e = "undefined" != typeof document ? document : {};
        return i(e, o),
        e
    }
    const n = {
        document: o,
        navigator: {
            userAgent: ""
        },
        location: {
            hash: "",
            host: "",
            hostname: "",
            href: "",
            origin: "",
            pathname: "",
            protocol: "",
            search: ""
        },
        history: {
            replaceState() {},
            pushState() {},
            go() {},
            back() {}
        },
        CustomEvent: function() {
            return this
        },
        addEventListener() {},
        removeEventListener() {},
        getComputedStyle: ()=>({
            getPropertyValue: ()=>""
        }),
        Image() {},
        Date() {},
        screen: {},
        setTimeout() {},
        clearTimeout() {},
        matchMedia: ()=>({}),
        requestAnimationFrame: e=>"undefined" == typeof setTimeout ? (e(),
        null) : setTimeout(e, 0),
        cancelAnimationFrame(e) {
            "undefined" != typeof setTimeout && clearTimeout(e)
        }
    };
    function s() {
        const e = "undefined" != typeof window ? window : {};
        return i(e, n),
        e
    }
    const a = (e,t)=>e?.nodeName.toLowerCase() === t.toLowerCase()
      , l = e=>"function" == typeof e
      , c = e=>"string" == typeof e
      , d = e=>"number" == typeof e
      , h = e=>"boolean" == typeof e
      , u = e=>void 0 === e
      , p = e=>null === e
      , m = e=>"undefined" != typeof Window && e instanceof Window
      , f = e=>"undefined" != typeof Document && e instanceof Document
      , v = e=>"undefined" != typeof Element && e instanceof Element
      , g = e=>!l(e) && !m(e) && d(e.length)
      , b = e=>"object" == typeof e && null !== e
      , y = e=>f(e) ? e.documentElement : e
      , w = e=>e.replace(/-([a-z])/g, ((e,t)=>t.toUpperCase()))
      , k = e=>e ? e.replace(/^./, e[0].toLowerCase()).replace(/[A-Z]/g, (e=>"-" + e.toLowerCase())) : e
      , C = ()=>!1
      , x = ()=>!0
      , $ = (e,t)=>{
        for (let i = 0; i < e.length; i += 1)
            if (!1 === t.call(e[i], e[i], i))
                return e;
        return e
    }
      , R = (e,t)=>{
        const i = Object.keys(e);
        for (let o = 0; o < i.length; o += 1) {
            const r = i[o];
            if (!1 === t.call(e[r], r, e[r]))
                return e
        }
        return e
    }
    ;
    class I {
        constructor(e) {
            return this.length = 0,
            e ? ($(e, ((e,t)=>{
                this[t] = e
            }
            )),
            this.length = e.length,
            this) : this
        }
    }
    const S = (e=r())=>/complete|interactive/.test(e.readyState)
      , E = e=>r().createElement(e)
      , T = (e,t)=>e.appendChild(t)
      , A = e=>e.parentNode ? e.parentNode.removeChild(e) : e
      , D = (e,t)=>{
        const i = E(t);
        return i.innerHTML = e,
        [].slice.call(i.childNodes)
    }
      , M = (()=>{
        const e = function(t) {
            if (!t)
                return new I;
            if (t instanceof I)
                return t;
            if (l(t)) {
                const i = r();
                return S(i) ? t.call(i, e) : i.addEventListener("DOMContentLoaded", (()=>t.call(i, e)), {
                    once: !0
                }),
                new I([i])
            }
            if (c(t)) {
                const e = t.trim();
                if (e.startsWith("<") && e.endsWith(">")) {
                    let t = "div";
                    return R({
                        li: "ul",
                        tr: "tbody",
                        td: "tr",
                        th: "tr",
                        tbody: "table",
                        option: "select"
                    }, ((i,o)=>{
                        if (e.startsWith(`<${i}`))
                            return t = o,
                            !1
                    }
                    )),
                    new I(D(e, t))
                }
                const i = r();
                return new I(i.querySelectorAll(t))
            }
            return !g(t) || (i = t,
            "undefined" != typeof Node && i instanceof Node) ? new I([t]) : new I(t);
            var i
        };
        return e.fn = I.prototype,
        e
    }
    )()
      , P = (e,t)=>($(t, (t=>{
        e.push(t)
    }
    )),
    e)
      , L = e=>[...new Set(e)];
    M.fn.get = function(e) {
        return void 0 === e ? [].slice.call(this) : this[e >= 0 ? e : e + this.length]
    }
    ,
    M.fn.add = function(e) {
        return new I(L(P(this.get(), M(e).get())))
    }
    ;
    const _ = (e,t,i)=>{
        const o = e.getAttribute(t);
        return p(o) ? i : o
    }
      , B = (e,t)=>{
        e.removeAttribute(t)
    }
      , O = (e,t,i)=>{
        p(i) ? B(e, t) : e.setAttribute(t, i)
    }
    ;
    M.fn.each = function(e) {
        return $(this, ((t,i)=>e.call(t, i, t)))
    }
    ,
    $(["add", "remove", "toggle"], (e=>{
        M.fn[`${e}Class`] = function(t) {
            return "remove" !== e || arguments.length ? this.each(((i,o)=>{
                if (!v(o))
                    return;
                const r = (l(t) ? t.call(o, i, _(o, "class", "")) : t).split(" ").filter((e=>e));
                $(r, (t=>{
                    o.classList[e](t)
                }
                ))
            }
            )) : this.each(((e,t)=>{
                O(t, "class", "")
            }
            ))
        }
    }
    )),
    $(["insertBefore", "insertAfter"], ((e,t)=>{
        M.fn[e] = function(e) {
            const i = t ? M(this.get().reverse()) : this
              , o = M(e)
              , r = [];
            return o.each(((e,o)=>{
                o.parentNode && i.each(((i,n)=>{
                    const s = e ? n.cloneNode(!0) : n
                      , a = t ? o.nextSibling : o;
                    r.push(s),
                    o.parentNode.insertBefore(s, a)
                }
                ))
            }
            )),
            M(t ? r.reverse() : r)
        }
    }
    ));
    function z(e, t) {
        return g(e) ? $(e, ((e,i)=>t.call(e, i, e))) : R(e, t)
    }
    function N(e, t) {
        const i = s();
        let o;
        const r = [];
        return z(e, ((e,n)=>{
            o = t.call(i, n, e),
            null != o && r.push(o)
        }
        )),
        [].concat(...r)
    }
    $(["before", "after"], ((e,t)=>{
        M.fn[e] = function(...e) {
            return 1 === t && (e = e.reverse()),
            this.each(((i,o)=>{
                const r = l(e[0]) ? [e[0].call(o, i, o.innerHTML)] : e;
                $(r, (e=>{
                    let r;
                    r = (e=>c(e) && !(e.startsWith("<") && e.endsWith(">")))(e) ? M(D(e, "div")) : i && v(e) ? M(e.cloneNode(!0)) : M(e),
                    r[t ? "insertAfter" : "insertBefore"](o)
                }
                ))
            }
            ))
        }
    }
    )),
    M.fn.map = function(e) {
        return new I(N(this, ((t,i)=>e.call(t, i, t))))
    }
    ,
    M.fn.clone = function() {
        return this.map((function() {
            return this.cloneNode(!0)
        }
        ))
    }
    ,
    M.fn.is = function(e) {
        let t = !1;
        if (l(e))
            return this.each(((i,o)=>{
                e.call(o, i, o) && (t = !0)
            }
            )),
            t;
        if (c(e))
            return this.each(((i,o)=>{
                f(o) || m(o) || o.matches.call(o, e) && (t = !0)
            }
            )),
            t;
        const i = M(e);
        return this.each(((e,o)=>{
            i.each(((e,i)=>{
                o === i && (t = !0)
            }
            ))
        }
        )),
        t
    }
    ,
    M.fn.remove = function(e) {
        return this.each(((t,i)=>{
            e && !M(i).is(e) || A(i)
        }
        ))
    }
    ,
    $(["prepend", "append"], ((e,t)=>{
        M.fn[e] = function(...e) {
            return this.each(((i,o)=>{
                const r = o.childNodes
                  , n = r.length
                  , s = n ? r[t ? n - 1 : 0] : E("div");
                n || T(o, s);
                let a = l(e[0]) ? [e[0].call(o, i, o.innerHTML)] : e;
                i && (a = a.map((e=>c(e) ? e : M(e).clone()))),
                M(s)[t ? "after" : "before"](...a),
                n || A(s)
            }
            ))
        }
    }
    )),
    $(["appendTo", "prependTo"], ((e,t)=>{
        M.fn[e] = function(e) {
            const i = []
              , o = M(e).map(((e,o)=>{
                const r = o.childNodes
                  , n = r.length;
                if (n)
                    return r[t ? 0 : n - 1];
                const s = E("div");
                return T(o, s),
                i.push(s),
                s
            }
            ))
              , r = this[t ? "insertBefore" : "insertAfter"](o);
            return M(i).remove(),
            r
        }
    }
    ));
    const F = (e,t)=>s().getComputedStyle(e).getPropertyValue(k(t))
      , V = e=>"border-box" === F(e, "box-sizing")
      , H = (e,t,i)=>{
        const o = "width" === t ? ["Left", "Right"] : ["Top", "Bottom"];
        return [0, 1].reduce(((t,r,n)=>{
            let s = i + o[n];
            return "border" === i && (s += "Width"),
            t + parseFloat(F(e, s) || "0")
        }
        ), 0)
    }
      , U = (e,t)=>{
        if ("width" === t || "height" === t) {
            const i = e.getBoundingClientRect()[t];
            return V(e) ? `${i}px` : i - H(e, t, "border") - H(e, t, "padding") + "px"
        }
        return F(e, t)
    }
      , K = ["animation-iteration-count", "column-count", "fill-opacity", "flex-grow", "flex-shrink", "font-weight", "grid-area", "grid-column", "grid-column-end", "grid-column-start", "grid-row", "grid-row-end", "grid-row-start", "line-height", "opacity", "order", "orphans", "widows", "z-index", "zoom"];
    $(["attr", "prop", "css"], ((e,t)=>{
        const i = (e,i)=>0 === t ? _(e, i) : 1 === t ? e[i] : U(e, i);
        M.fn[e] = function(o, r) {
            if (b(o))
                return R(o, ((t,i)=>{
                    this[e](t, i)
                }
                )),
                this;
            if (1 === arguments.length) {
                const e = this[0];
                return v(e) ? i(e, o) : void 0
            }
            return this.each(((e,n)=>{
                ((e,i,o)=>{
                    if (u(o))
                        return;
                    if (0 === t)
                        return O(e, i, o);
                    if (1 === t)
                        return void (e[i] = o);
                    i = k(i),
                    e.style.setProperty(i, d(o) ? `${o}${i.startsWith("--") || K.includes(i) ? "" : "px"}` : o)
                }
                )(n, o, l(r) ? r.call(n, e, i(n, o)) : r)
            }
            ))
        }
    }
    )),
    M.fn.children = function(e) {
        const t = [];
        return this.each(((i,o)=>{
            $(o.childNodes, (i=>{
                v(i) && (e && !M(i).is(e) || t.push(i))
            }
            ))
        }
        )),
        new I(L(t))
    }
    ,
    M.fn.slice = function(...e) {
        return new I([].slice.apply(this, e))
    }
    ,
    M.fn.eq = function(e) {
        const t = -1 === e ? this.slice(e) : this.slice(e, +e + 1);
        return new I(t)
    }
    ;
    const q = (e,t,i,o,r)=>{
        const n = [];
        let s;
        return e.each(((e,a)=>{
            for (s = a[i]; s && v(s); ) {
                if (2 === t) {
                    if (o && M(s).is(o))
                        break;
                    r && !M(s).is(r) || n.push(s)
                } else {
                    if (0 === t) {
                        o && !M(s).is(o) || n.push(s);
                        break
                    }
                    o && !M(s).is(o) || n.push(s)
                }
                s = s[i]
            }
        }
        )),
        new I(L(n))
    }
    ;
    $(["", "s", "sUntil"], ((e,t)=>{
        M.fn[`parent${e}`] = function(e, i) {
            const o = t ? M(this.get().reverse()) : this;
            return q(o, t, "parentNode", e, i)
        }
    }
    )),
    M.fn.closest = function(e) {
        if (this.is(e))
            return this;
        const t = [];
        return this.parents().each(((i,o)=>{
            if (M(o).is(e))
                return t.push(o),
                !1
        }
        )),
        new I(t)
    }
    ;
    const j = new WeakMap
      , W = e=>j.get(e) ?? {}
      , G = (e,t)=>{
        const i = W(e)
          , o = w(t);
        return o in i ? i[o] : void 0
    }
      , Y = (e,t)=>{
        const i = W(e);
        R(t, ((e,t)=>{
            i[w(e)] = t
        }
        )),
        j.set(e, i)
    }
      , X = (e,t,i)=>{
        Y(e, {
            [t]: i
        })
    }
      , J = /^(?:{[\w\W]*\}|\[[\w\W]*\])$/
      , Z = (e,t,i)=>{
        if (u(i) && 1 === e.nodeType && (i = e.dataset[t],
        c(i)))
            try {
                i = (e=>"true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : J.test(e) ? JSON.parse(e) : e))(i)
            } catch (e) {}
        return i
    }
    ;
    M.fn.data = function(e, t) {
        if (u(e)) {
            if (!this.length)
                return;
            const e = this[0]
              , t = W(e);
            return 1 !== e.nodeType || R(e.dataset, (i=>{
                t[i] = Z(e, i, t[i])
            }
            )),
            t
        }
        return b(e) ? this.each((function() {
            Y(this, e)
        }
        )) : 2 === arguments.length && u(t) ? this : u(t) ? this.length ? Z(this[0], w(e), G(this[0], e)) : void 0 : this.each((function() {
            X(this, e, t)
        }
        ))
    }
    ,
    M.fn.empty = function() {
        return this.each(((e,t)=>{
            t.innerHTML = ""
        }
        ))
    }
    ,
    M.fn.extend = function(e) {
        return R(e, ((e,t)=>{
            M.fn[e] = t
        }
        )),
        this
    }
    ,
    M.fn.filter = function(e) {
        if (l(e))
            return this.map(((t,i)=>e.call(i, t, i) ? i : void 0));
        if (c(e))
            return this.map(((t,i)=>M(i).is(e) ? i : void 0));
        const t = M(e);
        return this.map(((e,i)=>t.get().includes(i) ? i : void 0))
    }
    ,
    M.fn.find = function(e) {
        const t = [];
        return this.each(((i,o)=>{
            P(t, M(o.querySelectorAll(e)).get())
        }
        )),
        new I(t)
    }
    ,
    M.fn.first = function() {
        return this.eq(0)
    }
    ;
    const Q = (e,t)=>e !== t && y(e).contains(t);
    M.fn.has = function(e) {
        const t = c(e) ? this.find(e) : M(e)
          , {length: i} = t;
        return this.map((function() {
            for (let e = 0; e < i; e += 1)
                if (Q(this, t[e]))
                    return this
        }
        ))
    }
    ,
    M.fn.hasClass = function(e) {
        return this[0].classList.contains(e)
    }
    ;
    const ee = (e,t,i,o,r,n)=>{
        const s = i=>H(e, t.toLowerCase(), i) * n;
        return 2 === o && r && (i += s("margin")),
        V(e) ? (0 === o && (i -= s("border")),
        1 === o && (i -= s("border"),
        i -= s("padding"))) : (0 === o && (i += s("padding")),
        2 === o && (i += s("border"),
        i += s("padding"))),
        i
    }
      , te = (e,t,i,o)=>{
        const n = r()
          , s = `client${t}`
          , a = `scroll${t}`
          , l = `offset${t}`
          , c = `inner${t}`;
        if (m(e))
            return 2 === i ? e[c] : y(n)[s];
        if (f(e)) {
            const t = y(e);
            return Math.max(e.body[a], t[a], e.body[l], t[l], t[s])
        }
        const d = parseFloat(F(e, t.toLowerCase()) || "0");
        return ee(e, t, d, i, o, 1)
    }
    ;
    $(["Width", "Height"], (e=>{
        $([`inner${e}`, e.toLowerCase(), `outer${e}`], ((t,i)=>{
            M.fn[t] = function(t, o) {
                const r = arguments.length && (i < 2 || !h(t))
                  , n = !0 === t || !0 === o;
                return r ? this.each(((o,r)=>((e,t,i,o,r,n)=>{
                    let s = l(n) ? n.call(e, t, te(e, i, o, r)) : n;
                    if (null == s)
                        return;
                    const a = M(e)
                      , d = i.toLowerCase();
                    if (c(s) && ["auto", "inherit", ""].includes(s))
                        return void a.css(d, s);
                    const h = s.toString().replace(/\b[0-9.]*/, "")
                      , u = parseFloat(s);
                    s = ee(e, i, u, o, r, -1) + (h || "px"),
                    a.css(d, s)
                }
                )(r, o, e, i, n, t))) : this.length ? te(this[0], e, i, n) : void 0
            }
        }
        ))
    }
    )),
    M.fn.hide = function() {
        return this.each(((e,t)=>{
            t.style.display = "none"
        }
        ))
    }
    ,
    $(["val", "html", "text"], ((e,t)=>{
        const i = ["value", "innerHTML", "textContent"][t]
          , o = e=>{
            if (2 === t)
                return N(e, (e=>y(e)[i])).join("");
            if (!e.length)
                return;
            const o = e[0]
              , r = M(o);
            return 0 === t && r.is("select[multiple]") ? N(r.find("option:checked"), (e=>e.value)) : o[i]
        }
        ;
        M.fn[e] = function(e) {
            return arguments.length ? this.each(((r,n)=>{
                const s = M(n)
                  , a = l(e) ? e.call(n, r, o(s)) : e;
                0 === t && Array.isArray(a) ? s.is("select[multiple]") ? N(s.find("option"), (e=>e.selected = a.includes(e.value))) : n.checked = a.includes(n.value) : ((e,o)=>{
                    if (u(o)) {
                        if (0 !== t)
                            return;
                        o = ""
                    }
                    1 === t && v(o) && (o = o.outerHTML),
                    e[i] = o
                }
                )(n, a)
            }
            )) : o(this)
        }
    }
    )),
    M.fn.index = function(e) {
        return arguments.length ? c(e) ? M(e).get().indexOf(this[0]) : this.get().indexOf(M(e)[0]) : this.eq(0).parent().children().get().indexOf(this[0])
    }
    ,
    M.fn.last = function() {
        return this.eq(-1)
    }
    ,
    $(["", "All", "Until"], ((e,t)=>{
        M.fn[`next${e}`] = function(e, i) {
            return q(this, t, "nextElementSibling", e, i)
        }
    }
    )),
    M.fn.not = function(e) {
        const t = this.filter(e);
        return this.map(((e,i)=>t.index(i) > -1 ? void 0 : i))
    }
    ;
    const ie = s().CustomEvent;
    class oe extends ie {
        constructor(e, t) {
            super(e, t),
            this.data = t.data,
            this.namespace = t.namespace
        }
    }
    const re = new WeakMap;
    let ne = 1;
    const se = e=>(re.has(e) || re.set(e, ++ne),
    re.get(e))
      , ae = new Map
      , le = e=>{
        const t = se(e);
        return ae.get(t) || ae.set(t, []).get(t)
    }
      , ce = e=>{
        const t = e.split(".");
        return {
            type: t[0],
            namespace: t.slice(1).sort().join(" ")
        }
    }
      , de = e=>new RegExp("(?:^| )" + e.replace(" ", " .* ?") + "(?: |$)")
      , he = (e,t,i,o)=>{
        const r = le(e)
          , n = t=>{
            delete r[t.id],
            e.removeEventListener(t.type, t.proxy, !1)
        }
        ;
        t ? t.split(" ").forEach((t=>{
            t && ((e,t,i,o)=>{
                const r = ce(t);
                return le(e).filter((e=>e && (!r.type || e.type === r.type) && (!r.namespace || de(r.namespace).test(e.namespace)) && (!i || se(e.func) === se(i)) && (!o || e.selector === o)))
            }
            )(e, t, i, o).forEach((e=>{
                n(e)
            }
            ))
        }
        )) : r.forEach((e=>{
            n(e)
        }
        ))
    }
    ;
    function ue(e, ...t) {
        return $(t, (t=>{
            R(t, ((t,i)=>{
                u(i) || (e[t] = i)
            }
            ))
        }
        )),
        e
    }
    M.fn.off = function(e, t, i) {
        return b(e) ? (R(e, ((e,i)=>{
            this.off(e, t, i)
        }
        )),
        this) : ((!1 === t || l(t)) && (i = t,
        t = void 0),
        !1 === i && (i = C),
        this.each((function() {
            he(this, e, i, t)
        }
        )))
    }
    ,
    M.fn.offsetParent = function() {
        const e = r();
        return this.map((function() {
            let t = this.offsetParent;
            for (; t && "static" === M(t).css("position"); )
                t = t.offsetParent;
            return t || e.documentElement
        }
        ))
    }
    ;
    const pe = (e,t)=>parseFloat(e.css(t));
    M.fn.position = function() {
        if (!this.length)
            return;
        const e = this.eq(0);
        let t, i = {
            left: 0,
            top: 0
        };
        if ("fixed" === e.css("position"))
            t = e[0].getBoundingClientRect();
        else {
            t = e.offset();
            const o = e.offsetParent();
            i = o.offset(),
            i.top += pe(o, "border-top-width"),
            i.left += pe(o, "border-left-width")
        }
        return {
            top: t.top - i.top - pe(e, "margin-top"),
            left: t.left - i.left - pe(e, "margin-left")
        }
    }
    ;
    const me = e=>{
        if (!e.getClientRects().length)
            return {
                top: 0,
                left: 0
            };
        const {top: t, left: i} = e.getBoundingClientRect()
          , {pageYOffset: o, pageXOffset: r} = e.ownerDocument.defaultView;
        return {
            top: t + o,
            left: i + r
        }
    }
    ;
    M.fn.offset = function(e) {
        if (!arguments.length) {
            if (!this.length)
                return;
            return me(this[0])
        }
        return this.each((function(t) {
            ((e,t,i)=>{
                const o = M(e)
                  , r = o.css("position");
                "static" === r && o.css("position", "relative");
                const n = me(e)
                  , s = o.css("top")
                  , a = o.css("left");
                let c, d;
                if ("absolute" !== r && "fixed" !== r || !(s + a).includes("auto"))
                    c = parseFloat(s),
                    d = parseFloat(a);
                else {
                    const e = o.position();
                    c = e.top,
                    d = e.left
                }
                const h = l(t) ? t.call(e, i, ue({}, n)) : t;
                o.css({
                    top: null != h.top ? h.top - n.top + c : void 0,
                    left: null != h.left ? h.left - n.left + d : void 0
                })
            }
            )(this, e, t)
        }
        ))
    }
    ,
    M.fn.on = function(e, t, i, o, r) {
        if (b(e))
            return c(t) || (i = i || t,
            t = void 0),
            R(e, ((e,o)=>{
                this.on(e, t, i, o, r)
            }
            )),
            this;
        if (null == i && null == o ? (o = t,
        i = t = void 0) : null == o && (c(t) ? (o = i,
        i = void 0) : (o = i,
        i = t,
        t = void 0)),
        !1 === o)
            o = C;
        else if (!o)
            return this;
        if (r) {
            const e = this
              , i = o;
            o = function(r, ...n) {
                return e.off(r.type, t, o),
                i.call(this, r, ...n)
            }
        }
        return this.each((function() {
            ((e,t,i,o,r)=>{
                let n = !1;
                b(o) && o.useCapture && (n = !0),
                t.split(" ").forEach((t=>{
                    if (!t)
                        return;
                    const s = ce(t)
                      , a = (e,t)=>{
                        !1 === i.apply(t, null === e.detail ? [e] : [e].concat(e.detail)) && (e.preventDefault(),
                        e.stopPropagation())
                    }
                      , l = t=>{
                        t.namespace && !de(t.namespace).test(s.namespace) || (t.data = o,
                        r ? M(e).find(r).get().reverse().forEach((e=>{
                            (e === t.target || Q(e, t.target)) && a(t, e)
                        }
                        )) : a(t, e))
                    }
                      , c = {
                        type: s.type,
                        namespace: s.namespace,
                        func: i,
                        selector: r,
                        id: le(e).length,
                        proxy: l
                    };
                    le(e).push(c),
                    e.addEventListener(c.type, l, n)
                }
                ))
            }
            )(this, e, o, i, t)
        }
        ))
    }
    ,
    M.fn.one = function(e, t, i, o) {
        return this.on(e, t, i, o, !0)
    }
    ,
    $(["", "All", "Until"], ((e,t)=>{
        M.fn[`prev${e}`] = function(e, i) {
            const o = t ? M(this.get().reverse()) : this;
            return q(o, t, "previousElementSibling", e, i)
        }
    }
    )),
    M.fn.removeAttr = function(e) {
        const t = e.split(" ").filter((e=>e));
        return this.each((function() {
            $(t, (e=>{
                B(this, e)
            }
            ))
        }
        ))
    }
    ;
    const fe = (e,t)=>{
        if (u(t))
            return (e=>{
                j.delete(e)
            }
            )(e);
        ((e,t)=>{
            const i = W(e);
            $(t, (e=>{
                const t = w(e);
                delete i[t]
            }
            )),
            j.set(e, i)
        }
        )(e, c(t) ? t.split(" ").filter((e=>e)) : t)
    }
    ;
    M.fn.removeData = function(e) {
        return this.each(((t,i)=>{
            fe(i, e)
        }
        ))
    }
    ,
    M.fn.removeProp = function(e) {
        return this.each(((t,i)=>{
            try {
                delete i[e]
            } catch (e) {}
        }
        ))
    }
    ,
    M.fn.replaceWith = function(e) {
        return this.each(((t,i)=>{
            let o = e;
            l(o) ? o = o.call(i, t, i.innerHTML) : t && !c(o) && (o = M(o).clone()),
            M(i).before(o)
        }
        )),
        this.remove()
    }
    ,
    M.fn.replaceAll = function(e) {
        return M(e).map(((e,t)=>(M(t).replaceWith(e ? this.clone() : this),
        this.get())))
    }
    ;
    const ve = e=>{
        if (!b(e) && !Array.isArray(e))
            return "";
        const t = []
          , i = (e,o)=>{
            let r;
            b(o) ? R(o, ((t,n)=>{
                r = Array.isArray(o) && !b(n) ? "" : t,
                i(`${e}[${r}]`, n)
            }
            )) : (r = null == o || "" === o ? "=" : `=${encodeURIComponent(o)}`,
            t.push(encodeURIComponent(e) + r))
        }
        ;
        return Array.isArray(e) ? $(e, (({name: e, value: t})=>i(e, t))) : R(e, i),
        t.join("&")
    }
      , ge = new WeakMap
      , be = e=>[...[...e.elements], ...ge.get(e) || []].sort(((e,t)=>e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1))
      , ye = e=>{
        const t = [];
        return e.each(((e,i)=>{
            const o = i instanceof HTMLFormElement ? be(i) : [i];
            M(o).each(((e,i)=>{
                const o = M(i)
                  , r = i.type
                  , n = i.nodeName.toLowerCase();
                "fieldset" === n || !i.name || i.disabled || !["input", "select", "textarea", "keygen", "mdui-checkbox", "mdui-radio-group", "mdui-switch", "mdui-text-field", "mdui-select", "mdui-slider", "mdui-range-slider", "mdui-segmented-button-group"].includes(n) || ["submit", "button", "image", "reset", "file"].includes(r) || ["radio", "checkbox"].includes(r) && !i.checked || ["mdui-checkbox", "mdui-switch"].includes(n) && !i.checked || t.push({
                    name: i.name,
                    value: o.val()
                })
            }
            ))
        }
        )),
        t
    }
    ;
    M.fn.serializeArray = function() {
        return ye(this).map((e=>Array.isArray(e.value) ? e.value.map((t=>({
            name: e.name,
            value: t
        }))) : e)).flat()
    }
    ,
    M.fn.serialize = function() {
        return ve(this.serializeArray())
    }
    ,
    M.fn.serializeObject = function() {
        const e = {};
        return ye(this).forEach((t=>{
            const {name: i, value: o} = t;
            if (e.hasOwnProperty(i)) {
                const t = e[i];
                Array.isArray(t) || (e[i] = [t]),
                Array.isArray(o) ? e[i].push(...o) : e[i].push(o)
            } else
                e[i] = o
        }
        )),
        e
    }
    ;
    const we = {};
    M.fn.show = function() {
        return this.each(((e,t)=>{
            "none" === t.style.display && (t.style.display = ""),
            "none" === U(t, "display") && (t.style.display = (e=>{
                const t = r();
                let i, o;
                return we[e] || (i = E(e),
                T(t.body, i),
                o = U(i, "display"),
                A(i),
                "none" === o && (o = "block"),
                we[e] = o),
                we[e]
            }
            )(t.nodeName))
        }
        ))
    }
    ,
    M.fn.siblings = function(e) {
        return this.prevAll(e).add(this.nextAll(e))
    }
    ,
    M.fn.toggle = function() {
        return this.each(((e,t)=>{
            "none" === U(t, "display") ? M(t).show() : M(t).hide()
        }
        ))
    }
    ,
    M.fn.trigger = function(e, t=null, i) {
        const {type: o, namespace: r} = ce(e)
          , n = new oe(o,{
            detail: t,
            data: null,
            namespace: r,
            bubbles: !0,
            cancelable: !1,
            composed: !0,
            ...i
        });
        return this.each(((e,t)=>{
            t.dispatchEvent(n)
        }
        ))
    }
    ;
    const ke = "ajaxSuccess"
      , Ce = "ajaxError"
      , xe = "ajaxComplete"
      , $e = {}
      , Re = (e,t)=>`${e}&${t}`.replace(/[&?]{1,2}/, "?")
      , Ie = e=>{
        const t = r()
          , i = s();
        let o = !1;
        const n = {}
          , a = {}
          , l = (e=>{
            const t = {
                url: "",
                method: "GET",
                data: "",
                processData: !0,
                async: !0,
                cache: !0,
                username: "",
                password: "",
                headers: {},
                xhrFields: {},
                statusCode: {},
                dataType: "",
                contentType: "application/x-www-form-urlencoded",
                timeout: 0,
                global: !0
            };
            return R($e, ((e,i)=>{
                ["beforeSend", "success", "error", "complete", "statusCode"].includes(e) || u(i) || (t[e] = i)
            }
            )),
            ue({}, t, e)
        }
        )(e)
          , d = l.method.toUpperCase();
        let {data: h, url: p} = l;
        p = p || i.location.toString();
        const {processData: m, async: f, cache: v, username: g, password: b, headers: y, xhrFields: w, statusCode: k, dataType: C, contentType: x, timeout: I, global: S} = l
          , E = (e=>["GET", "HEAD"].includes(e))(d);
        !h || !E && !m || c(h) || h instanceof ArrayBuffer || h instanceof Blob || h instanceof Document || h instanceof FormData || (h = ve(h)),
        h && E && (p = Re(p, h),
        h = null);
        const T = (e,i,...r)=>{
            let s, c;
            S && M(t).trigger(e, "success" === i ? a : n),
            i in $e && (s = $e[i](...r)),
            l[i] && (c = l[i](...r)),
            "beforeSend" === i && [s, c].includes(!1) && (o = !0)
        }
        ;
        return (()=>{
            let e;
            return new Promise(((t,r)=>{
                const c = e=>r(new Error(e));
                E && !v && (p = Re(p, `_=${Date.now()}`));
                const m = new XMLHttpRequest;
                let S;
                if (m.open(d, p, f, g, b),
                (x || h && !E && !1 !== x) && m.setRequestHeader("Content-Type", x),
                "json" === C && m.setRequestHeader("Accept", "application/json, text/javascript"),
                R(y, ((e,t)=>{
                    u(t) || m.setRequestHeader(e, t + "")
                }
                )),
                (e=>{
                    const t = s();
                    return /^([\w-]+:)?\/\/([^/]+)/.test(e) && RegExp.$2 !== t.location.host
                }
                )(p) || m.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
                R(w, ((e,t)=>{
                    m[e] = t
                }
                )),
                n.xhr = a.xhr = m,
                n.options = a.options = l,
                m.onload = ()=>{
                    S && clearTimeout(S);
                    const i = (o = m.status) >= 200 && o < 300 || [0, 304].includes(o);
                    var o;
                    let r;
                    if (i)
                        if (e = 204 === m.status || "HEAD" === d ? "nocontent" : 304 === m.status ? "notmodified" : "success",
                        "json" === C || !C && (m.getResponseHeader("content-type") || "").includes("json")) {
                            try {
                                r = "HEAD" === d ? void 0 : JSON.parse(m.responseText),
                                a.response = r
                            } catch (t) {
                                e = "parsererror",
                                T(Ce, "error", m, e),
                                c(e)
                            }
                            "parsererror" !== e && (T(ke, "success", r, e, m),
                            t(r))
                        } else
                            r = "HEAD" === d ? void 0 : "text" === m.responseType || "" === m.responseType ? m.responseText : m.response,
                            a.response = r,
                            T(ke, "success", r, e, m),
                            t(r);
                    else
                        e = "error",
                        T(Ce, "error", m, e),
                        c(e);
                    $([$e.statusCode ?? {}, k], (t=>{
                        t[m.status] && (i ? t[m.status](r, e, m) : t[m.status](m, e))
                    }
                    )),
                    T(xe, "complete", m, e)
                }
                ,
                m.onerror = ()=>{
                    S && clearTimeout(S),
                    T(Ce, "error", m, m.statusText),
                    T(xe, "complete", m, "error"),
                    c(m.statusText)
                }
                ,
                m.onabort = ()=>{
                    let e = "abort";
                    S && (e = "timeout",
                    clearTimeout(S)),
                    T(Ce, "error", m, e),
                    T(xe, "complete", m, e),
                    c(e)
                }
                ,
                T("ajaxStart", "beforeSend", m, l),
                o)
                    return c("cancel");
                I > 0 && (S = i.setTimeout((()=>m.abort()), I)),
                m.send(h)
            }
            ))
        }
        )()
    }
    ;
    M.ajax = Ie;
    function Se(e, t, i, o) {
        var r, n = arguments.length, s = n < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, i) : o;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
            s = Reflect.decorate(e, t, i, o);
        else
            for (var a = e.length - 1; a >= 0; a--)
                (r = e[a]) && (s = (n < 3 ? r(s) : n > 3 ? r(t, i, s) : r(t, i)) || s);
        return n > 3 && s && Object.defineProperty(t, i, s),
        s
    }
    M.ajaxSetup = e=>ue($e, e),
    M.contains = Q,
    M.data = function(e, t, i) {
        return b(t) ? (Y(e, t),
        t) : u(i) ? u(t) ? W(e) : G(e, t) : (X(e, t, i),
        i)
    }
    ,
    M.each = z,
    M.extend = function(e, ...t) {
        return t.length ? ue(e, ...t) : (R(e, ((e,t)=>{
            this[e] = t
        }
        )),
        this)
    }
    ,
    M.map = N,
    M.merge = P,
    M.param = ve,
    M.removeData = fe,
    M.unique = L,
    "function" == typeof SuppressedError && SuppressedError;
    const Ee = globalThis
      , Te = Ee.ShadowRoot && (void 0 === Ee.ShadyCSS || Ee.ShadyCSS.nativeShadow) && "adoptedStyleSheets"in Document.prototype && "replace"in CSSStyleSheet.prototype
      , Ae = Symbol()
      , De = new WeakMap;
    let Me = class {
        constructor(e, t, i) {
            if (this._$cssResult$ = !0,
            i !== Ae)
                throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
            this.cssText = e,
            this.t = t
        }
        get styleSheet() {
            let e = this.o;
            const t = this.t;
            if (Te && void 0 === e) {
                const i = void 0 !== t && 1 === t.length;
                i && (e = De.get(t)),
                void 0 === e && ((this.o = e = new CSSStyleSheet).replaceSync(this.cssText),
                i && De.set(t, e))
            }
            return e
        }
        toString() {
            return this.cssText
        }
    }
    ;
    const Pe = (e,...t)=>{
        const i = 1 === e.length ? e[0] : t.reduce(((t,i,o)=>t + (e=>{
            if (!0 === e._$cssResult$)
                return e.cssText;
            if ("number" == typeof e)
                return e;
            throw Error("Value passed to 'css' function must be a 'css' function result: " + e + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")
        }
        )(i) + e[o + 1]), e[0]);
        return new Me(i,e,Ae)
    }
      , Le = Te ? e=>e : e=>e instanceof CSSStyleSheet ? (e=>{
        let t = "";
        for (const i of e.cssRules)
            t += i.cssText;
        return (e=>new Me("string" == typeof e ? e : e + "",void 0,Ae))(t)
    }
    )(e) : e
      , {is: _e, defineProperty: Be, getOwnPropertyDescriptor: Oe, getOwnPropertyNames: ze, getOwnPropertySymbols: Ne, getPrototypeOf: Fe} = Object
      , Ve = globalThis
      , He = Ve.trustedTypes
      , Ue = He ? He.emptyScript : ""
      , Ke = Ve.reactiveElementPolyfillSupport
      , qe = (e,t)=>e
      , je = {
        toAttribute(e, t) {
            switch (t) {
            case Boolean:
                e = e ? Ue : null;
                break;
            case Object:
            case Array:
                e = null == e ? e : JSON.stringify(e)
            }
            return e
        },
        fromAttribute(e, t) {
            let i = e;
            switch (t) {
            case Boolean:
                i = null !== e;
                break;
            case Number:
                i = null === e ? null : Number(e);
                break;
            case Object:
            case Array:
                try {
                    i = JSON.parse(e)
                } catch (e) {
                    i = null
                }
            }
            return i
        }
    }
      , We = (e,t)=>!_e(e, t)
      , Ge = {
        attribute: !0,
        type: String,
        converter: je,
        reflect: !1,
        hasChanged: We
    };
    Symbol.metadata ??= Symbol("metadata"),
    Ve.litPropertyMetadata ??= new WeakMap;
    let Ye = class extends HTMLElement {
        static addInitializer(e) {
            this._$Ei(),
            (this.l ??= []).push(e)
        }
        static get observedAttributes() {
            return this.finalize(),
            this._$Eh && [...this._$Eh.keys()]
        }
        static createProperty(e, t=Ge) {
            if (t.state && (t.attribute = !1),
            this._$Ei(),
            this.elementProperties.set(e, t),
            !t.noAccessor) {
                const i = Symbol()
                  , o = this.getPropertyDescriptor(e, i, t);
                void 0 !== o && Be(this.prototype, e, o)
            }
        }
        static getPropertyDescriptor(e, t, i) {
            const {get: o, set: r} = Oe(this.prototype, e) ?? {
                get() {
                    return this[t]
                },
                set(e) {
                    this[t] = e
                }
            };
            return {
                get() {
                    return o?.call(this)
                },
                set(t) {
                    const n = o?.call(this);
                    r.call(this, t),
                    this.requestUpdate(e, n, i)
                },
                configurable: !0,
                enumerable: !0
            }
        }
        static getPropertyOptions(e) {
            return this.elementProperties.get(e) ?? Ge
        }
        static _$Ei() {
            if (this.hasOwnProperty(qe("elementProperties")))
                return;
            const e = Fe(this);
            e.finalize(),
            void 0 !== e.l && (this.l = [...e.l]),
            this.elementProperties = new Map(e.elementProperties)
        }
        static finalize() {
            if (this.hasOwnProperty(qe("finalized")))
                return;
            if (this.finalized = !0,
            this._$Ei(),
            this.hasOwnProperty(qe("properties"))) {
                const e = this.properties
                  , t = [...ze(e), ...Ne(e)];
                for (const i of t)
                    this.createProperty(i, e[i])
            }
            const e = this[Symbol.metadata];
            if (null !== e) {
                const t = litPropertyMetadata.get(e);
                if (void 0 !== t)
                    for (const [e,i] of t)
                        this.elementProperties.set(e, i)
            }
            this._$Eh = new Map;
            for (const [e,t] of this.elementProperties) {
                const i = this._$Eu(e, t);
                void 0 !== i && this._$Eh.set(i, e)
            }
            this.elementStyles = this.finalizeStyles(this.styles)
        }
        static finalizeStyles(e) {
            const t = [];
            if (Array.isArray(e)) {
                const i = new Set(e.flat(1 / 0).reverse());
                for (const e of i)
                    t.unshift(Le(e))
            } else
                void 0 !== e && t.push(Le(e));
            return t
        }
        static _$Eu(e, t) {
            const i = t.attribute;
            return !1 === i ? void 0 : "string" == typeof i ? i : "string" == typeof e ? e.toLowerCase() : void 0
        }
        constructor() {
            super(),
            this._$Ep = void 0,
            this.isUpdatePending = !1,
            this.hasUpdated = !1,
            this._$Em = null,
            this._$Ev()
        }
        _$Ev() {
            this._$ES = new Promise((e=>this.enableUpdating = e)),
            this._$AL = new Map,
            this._$E_(),
            this.requestUpdate(),
            this.constructor.l?.forEach((e=>e(this)))
        }
        addController(e) {
            (this._$EO ??= new Set).add(e),
            void 0 !== this.renderRoot && this.isConnected && e.hostConnected?.()
        }
        removeController(e) {
            this._$EO?.delete(e)
        }
        _$E_() {
            const e = new Map
              , t = this.constructor.elementProperties;
            for (const i of t.keys())
                this.hasOwnProperty(i) && (e.set(i, this[i]),
                delete this[i]);
            e.size > 0 && (this._$Ep = e)
        }
        createRenderRoot() {
            const e = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
            return ((e,t)=>{
                if (Te)
                    e.adoptedStyleSheets = t.map((e=>e instanceof CSSStyleSheet ? e : e.styleSheet));
                else
                    for (const i of t) {
                        const t = document.createElement("style")
                          , o = Ee.litNonce;
                        void 0 !== o && t.setAttribute("nonce", o),
                        t.textContent = i.cssText,
                        e.appendChild(t)
                    }
            }
            )(e, this.constructor.elementStyles),
            e
        }
        connectedCallback() {
            this.renderRoot ??= this.createRenderRoot(),
            this.enableUpdating(!0),
            this._$EO?.forEach((e=>e.hostConnected?.()))
        }
        enableUpdating(e) {}
        disconnectedCallback() {
            this._$EO?.forEach((e=>e.hostDisconnected?.()))
        }
        attributeChangedCallback(e, t, i) {
            this._$AK(e, i)
        }
        _$EC(e, t) {
            const i = this.constructor.elementProperties.get(e)
              , o = this.constructor._$Eu(e, i);
            if (void 0 !== o && !0 === i.reflect) {
                const r = (void 0 !== i.converter?.toAttribute ? i.converter : je).toAttribute(t, i.type);
                this._$Em = e,
                null == r ? this.removeAttribute(o) : this.setAttribute(o, r),
                this._$Em = null
            }
        }
        _$AK(e, t) {
            const i = this.constructor
              , o = i._$Eh.get(e);
            if (void 0 !== o && this._$Em !== o) {
                const e = i.getPropertyOptions(o)
                  , r = "function" == typeof e.converter ? {
                    fromAttribute: e.converter
                } : void 0 !== e.converter?.fromAttribute ? e.converter : je;
                this._$Em = o,
                this[o] = r.fromAttribute(t, e.type),
                this._$Em = null
            }
        }
        requestUpdate(e, t, i) {
            if (void 0 !== e) {
                if (i ??= this.constructor.getPropertyOptions(e),
                !(i.hasChanged ?? We)(this[e], t))
                    return;
                this.P(e, t, i)
            }
            !1 === this.isUpdatePending && (this._$ES = this._$ET())
        }
        P(e, t, i) {
            this._$AL.has(e) || this._$AL.set(e, t),
            !0 === i.reflect && this._$Em !== e && (this._$Ej ??= new Set).add(e)
        }
        async _$ET() {
            this.isUpdatePending = !0;
            try {
                await this._$ES
            } catch (e) {
                Promise.reject(e)
            }
            const e = this.scheduleUpdate();
            return null != e && await e,
            !this.isUpdatePending
        }
        scheduleUpdate() {
            return this.performUpdate()
        }
        performUpdate() {
            if (!this.isUpdatePending)
                return;
            if (!this.hasUpdated) {
                if (this.renderRoot ??= this.createRenderRoot(),
                this._$Ep) {
                    for (const [e,t] of this._$Ep)
                        this[e] = t;
                    this._$Ep = void 0
                }
                const e = this.constructor.elementProperties;
                if (e.size > 0)
                    for (const [t,i] of e)
                        !0 !== i.wrapped || this._$AL.has(t) || void 0 === this[t] || this.P(t, this[t], i)
            }
            let e = !1;
            const t = this._$AL;
            try {
                e = this.shouldUpdate(t),
                e ? (this.willUpdate(t),
                this._$EO?.forEach((e=>e.hostUpdate?.())),
                this.update(t)) : this._$EU()
            } catch (t) {
                throw e = !1,
                this._$EU(),
                t
            }
            e && this._$AE(t)
        }
        willUpdate(e) {}
        _$AE(e) {
            this._$EO?.forEach((e=>e.hostUpdated?.())),
            this.hasUpdated || (this.hasUpdated = !0,
            this.firstUpdated(e)),
            this.updated(e)
        }
        _$EU() {
            this._$AL = new Map,
            this.isUpdatePending = !1
        }
        get updateComplete() {
            return this.getUpdateComplete()
        }
        getUpdateComplete() {
            return this._$ES
        }
        shouldUpdate(e) {
            return !0
        }
        update(e) {
            this._$Ej &&= this._$Ej.forEach((e=>this._$EC(e, this[e]))),
            this._$EU()
        }
        updated(e) {}
        firstUpdated(e) {}
    }
    ;
    Ye.elementStyles = [],
    Ye.shadowRootOptions = {
        mode: "open"
    },
    Ye[qe("elementProperties")] = new Map,
    Ye[qe("finalized")] = new Map,
    Ke?.({
        ReactiveElement: Ye
    }),
    (Ve.reactiveElementVersions ??= []).push("2.0.4");
    const Xe = globalThis
      , Je = Xe.trustedTypes
      , Ze = Je ? Je.createPolicy("lit-html", {
        createHTML: e=>e
    }) : void 0
      , Qe = "$lit$"
      , et = `lit$${Math.random().toFixed(9).slice(2)}$`
      , tt = "?" + et
      , it = `<${tt}>`
      , ot = document
      , rt = ()=>ot.createComment("")
      , nt = e=>null === e || "object" != typeof e && "function" != typeof e
      , st = Array.isArray
      , at = "[ \t\n\f\r]"
      , lt = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g
      , ct = /-->/g
      , dt = />/g
      , ht = RegExp(`>|${at}(?:([^\\s"'>=/]+)(${at}*=${at}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`, "g")
      , ut = /'/g
      , pt = /"/g
      , mt = /^(?:script|style|textarea|title)$/i
      , ft = (e=>(t,...i)=>({
        _$litType$: e,
        strings: t,
        values: i
    }))(1)
      , vt = Symbol.for("lit-noChange")
      , gt = Symbol.for("lit-nothing")
      , bt = new WeakMap
      , yt = ot.createTreeWalker(ot, 129);
    function wt(e, t) {
        if (!Array.isArray(e) || !e.hasOwnProperty("raw"))
            throw Error("invalid template strings array");
        return void 0 !== Ze ? Ze.createHTML(t) : t
    }
    const kt = (e,t)=>{
        const i = e.length - 1
          , o = [];
        let r, n = 2 === t ? "<svg>" : "", s = lt;
        for (let t = 0; t < i; t++) {
            const i = e[t];
            let a, l, c = -1, d = 0;
            for (; d < i.length && (s.lastIndex = d,
            l = s.exec(i),
            null !== l); )
                d = s.lastIndex,
                s === lt ? "!--" === l[1] ? s = ct : void 0 !== l[1] ? s = dt : void 0 !== l[2] ? (mt.test(l[2]) && (r = RegExp("</" + l[2], "g")),
                s = ht) : void 0 !== l[3] && (s = ht) : s === ht ? ">" === l[0] ? (s = r ?? lt,
                c = -1) : void 0 === l[1] ? c = -2 : (c = s.lastIndex - l[2].length,
                a = l[1],
                s = void 0 === l[3] ? ht : '"' === l[3] ? pt : ut) : s === pt || s === ut ? s = ht : s === ct || s === dt ? s = lt : (s = ht,
                r = void 0);
            const h = s === ht && e[t + 1].startsWith("/>") ? " " : "";
            n += s === lt ? i + it : c >= 0 ? (o.push(a),
            i.slice(0, c) + Qe + i.slice(c) + et + h) : i + et + (-2 === c ? t : h)
        }
        return [wt(e, n + (e[i] || "<?>") + (2 === t ? "</svg>" : "")), o]
    }
    ;
    class Ct {
        constructor({strings: e, _$litType$: t}, i) {
            let o;
            this.parts = [];
            let r = 0
              , n = 0;
            const s = e.length - 1
              , a = this.parts
              , [l,c] = kt(e, t);
            if (this.el = Ct.createElement(l, i),
            yt.currentNode = this.el.content,
            2 === t) {
                const e = this.el.content.firstChild;
                e.replaceWith(...e.childNodes)
            }
            for (; null !== (o = yt.nextNode()) && a.length < s; ) {
                if (1 === o.nodeType) {
                    if (o.hasAttributes())
                        for (const e of o.getAttributeNames())
                            if (e.endsWith(Qe)) {
                                const t = c[n++]
                                  , i = o.getAttribute(e).split(et)
                                  , s = /([.?@])?(.*)/.exec(t);
                                a.push({
                                    type: 1,
                                    index: r,
                                    name: s[2],
                                    strings: i,
                                    ctor: "." === s[1] ? St : "?" === s[1] ? Et : "@" === s[1] ? Tt : It
                                }),
                                o.removeAttribute(e)
                            } else
                                e.startsWith(et) && (a.push({
                                    type: 6,
                                    index: r
                                }),
                                o.removeAttribute(e));
                    if (mt.test(o.tagName)) {
                        const e = o.textContent.split(et)
                          , t = e.length - 1;
                        if (t > 0) {
                            o.textContent = Je ? Je.emptyScript : "";
                            for (let i = 0; i < t; i++)
                                o.append(e[i], rt()),
                                yt.nextNode(),
                                a.push({
                                    type: 2,
                                    index: ++r
                                });
                            o.append(e[t], rt())
                        }
                    }
                } else if (8 === o.nodeType)
                    if (o.data === tt)
                        a.push({
                            type: 2,
                            index: r
                        });
                    else {
                        let e = -1;
                        for (; -1 !== (e = o.data.indexOf(et, e + 1)); )
                            a.push({
                                type: 7,
                                index: r
                            }),
                            e += et.length - 1
                    }
                r++
            }
        }
        static createElement(e, t) {
            const i = ot.createElement("template");
            return i.innerHTML = e,
            i
        }
    }
    function xt(e, t, i=e, o) {
        if (t === vt)
            return t;
        let r = void 0 !== o ? i._$Co?.[o] : i._$Cl;
        const n = nt(t) ? void 0 : t._$litDirective$;
        return r?.constructor !== n && (r?._$AO?.(!1),
        void 0 === n ? r = void 0 : (r = new n(e),
        r._$AT(e, i, o)),
        void 0 !== o ? (i._$Co ??= [])[o] = r : i._$Cl = r),
        void 0 !== r && (t = xt(e, r._$AS(e, t.values), r, o)),
        t
    }
    class $t {
        constructor(e, t) {
            this._$AV = [],
            this._$AN = void 0,
            this._$AD = e,
            this._$AM = t
        }
        get parentNode() {
            return this._$AM.parentNode
        }
        get _$AU() {
            return this._$AM._$AU
        }
        u(e) {
            const {el: {content: t}, parts: i} = this._$AD
              , o = (e?.creationScope ?? ot).importNode(t, !0);
            yt.currentNode = o;
            let r = yt.nextNode()
              , n = 0
              , s = 0
              , a = i[0];
            for (; void 0 !== a; ) {
                if (n === a.index) {
                    let t;
                    2 === a.type ? t = new Rt(r,r.nextSibling,this,e) : 1 === a.type ? t = new a.ctor(r,a.name,a.strings,this,e) : 6 === a.type && (t = new At(r,this,e)),
                    this._$AV.push(t),
                    a = i[++s]
                }
                n !== a?.index && (r = yt.nextNode(),
                n++)
            }
            return yt.currentNode = ot,
            o
        }
        p(e) {
            let t = 0;
            for (const i of this._$AV)
                void 0 !== i && (void 0 !== i.strings ? (i._$AI(e, i, t),
                t += i.strings.length - 2) : i._$AI(e[t])),
                t++
        }
    }
    class Rt {
        get _$AU() {
            return this._$AM?._$AU ?? this._$Cv
        }
        constructor(e, t, i, o) {
            this.type = 2,
            this._$AH = gt,
            this._$AN = void 0,
            this._$AA = e,
            this._$AB = t,
            this._$AM = i,
            this.options = o,
            this._$Cv = o?.isConnected ?? !0
        }
        get parentNode() {
            let e = this._$AA.parentNode;
            const t = this._$AM;
            return void 0 !== t && 11 === e?.nodeType && (e = t.parentNode),
            e
        }
        get startNode() {
            return this._$AA
        }
        get endNode() {
            return this._$AB
        }
        _$AI(e, t=this) {
            e = xt(this, e, t),
            nt(e) ? e === gt || null == e || "" === e ? (this._$AH !== gt && this._$AR(),
            this._$AH = gt) : e !== this._$AH && e !== vt && this._(e) : void 0 !== e._$litType$ ? this.$(e) : void 0 !== e.nodeType ? this.T(e) : (e=>st(e) || "function" == typeof e?.[Symbol.iterator])(e) ? this.k(e) : this._(e)
        }
        S(e) {
            return this._$AA.parentNode.insertBefore(e, this._$AB)
        }
        T(e) {
            this._$AH !== e && (this._$AR(),
            this._$AH = this.S(e))
        }
        _(e) {
            this._$AH !== gt && nt(this._$AH) ? this._$AA.nextSibling.data = e : this.T(ot.createTextNode(e)),
            this._$AH = e
        }
        $(e) {
            const {values: t, _$litType$: i} = e
              , o = "number" == typeof i ? this._$AC(e) : (void 0 === i.el && (i.el = Ct.createElement(wt(i.h, i.h[0]), this.options)),
            i);
            if (this._$AH?._$AD === o)
                this._$AH.p(t);
            else {
                const e = new $t(o,this)
                  , i = e.u(this.options);
                e.p(t),
                this.T(i),
                this._$AH = e
            }
        }
        _$AC(e) {
            let t = bt.get(e.strings);
            return void 0 === t && bt.set(e.strings, t = new Ct(e)),
            t
        }
        k(e) {
            st(this._$AH) || (this._$AH = [],
            this._$AR());
            const t = this._$AH;
            let i, o = 0;
            for (const r of e)
                o === t.length ? t.push(i = new Rt(this.S(rt()),this.S(rt()),this,this.options)) : i = t[o],
                i._$AI(r),
                o++;
            o < t.length && (this._$AR(i && i._$AB.nextSibling, o),
            t.length = o)
        }
        _$AR(e=this._$AA.nextSibling, t) {
            for (this._$AP?.(!1, !0, t); e && e !== this._$AB; ) {
                const t = e.nextSibling;
                e.remove(),
                e = t
            }
        }
        setConnected(e) {
            void 0 === this._$AM && (this._$Cv = e,
            this._$AP?.(e))
        }
    }
    class It {
        get tagName() {
            return this.element.tagName
        }
        get _$AU() {
            return this._$AM._$AU
        }
        constructor(e, t, i, o, r) {
            this.type = 1,
            this._$AH = gt,
            this._$AN = void 0,
            this.element = e,
            this.name = t,
            this._$AM = o,
            this.options = r,
            i.length > 2 || "" !== i[0] || "" !== i[1] ? (this._$AH = Array(i.length - 1).fill(new String),
            this.strings = i) : this._$AH = gt
        }
        _$AI(e, t=this, i, o) {
            const r = this.strings;
            let n = !1;
            if (void 0 === r)
                e = xt(this, e, t, 0),
                n = !nt(e) || e !== this._$AH && e !== vt,
                n && (this._$AH = e);
            else {
                const o = e;
                let s, a;
                for (e = r[0],
                s = 0; s < r.length - 1; s++)
                    a = xt(this, o[i + s], t, s),
                    a === vt && (a = this._$AH[s]),
                    n ||= !nt(a) || a !== this._$AH[s],
                    a === gt ? e = gt : e !== gt && (e += (a ?? "") + r[s + 1]),
                    this._$AH[s] = a
            }
            n && !o && this.j(e)
        }
        j(e) {
            e === gt ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "")
        }
    }
    class St extends It {
        constructor() {
            super(...arguments),
            this.type = 3
        }
        j(e) {
            this.element[this.name] = e === gt ? void 0 : e
        }
    }
    class Et extends It {
        constructor() {
            super(...arguments),
            this.type = 4
        }
        j(e) {
            this.element.toggleAttribute(this.name, !!e && e !== gt)
        }
    }
    class Tt extends It {
        constructor(e, t, i, o, r) {
            super(e, t, i, o, r),
            this.type = 5
        }
        _$AI(e, t=this) {
            if ((e = xt(this, e, t, 0) ?? gt) === vt)
                return;
            const i = this._$AH
              , o = e === gt && i !== gt || e.capture !== i.capture || e.once !== i.once || e.passive !== i.passive
              , r = e !== gt && (i === gt || o);
            o && this.element.removeEventListener(this.name, this, i),
            r && this.element.addEventListener(this.name, this, e),
            this._$AH = e
        }
        handleEvent(e) {
            "function" == typeof this._$AH ? this._$AH.call(this.options?.host ?? this.element, e) : this._$AH.handleEvent(e)
        }
    }
    class At {
        constructor(e, t, i) {
            this.element = e,
            this.type = 6,
            this._$AN = void 0,
            this._$AM = t,
            this.options = i
        }
        get _$AU() {
            return this._$AM._$AU
        }
        _$AI(e) {
            xt(this, e)
        }
    }
    const Dt = Xe.litHtmlPolyfillSupport;
    Dt?.(Ct, Rt),
    (Xe.litHtmlVersions ??= []).push("3.1.4");
    let Mt = class extends Ye {
        constructor() {
            super(...arguments),
            this.renderOptions = {
                host: this
            },
            this._$Do = void 0
        }
        createRenderRoot() {
            const e = super.createRenderRoot();
            return this.renderOptions.renderBefore ??= e.firstChild,
            e
        }
        update(e) {
            const t = this.render();
            this.hasUpdated || (this.renderOptions.isConnected = this.isConnected),
            super.update(e),
            this._$Do = ((e,t,i)=>{
                const o = i?.renderBefore ?? t;
                let r = o._$litPart$;
                if (void 0 === r) {
                    const e = i?.renderBefore ?? null;
                    o._$litPart$ = r = new Rt(t.insertBefore(rt(), e),e,void 0,i ?? {})
                }
                return r._$AI(e),
                r
            }
            )(t, this.renderRoot, this.renderOptions)
        }
        connectedCallback() {
            super.connectedCallback(),
            this._$Do?.setConnected(!0)
        }
        disconnectedCallback() {
            super.disconnectedCallback(),
            this._$Do?.setConnected(!1)
        }
        render() {
            return vt
        }
    }
    ;
    Mt._$litElement$ = !0,
    Mt.finalized = !0,
    globalThis.litElementHydrateSupport?.({
        LitElement: Mt
    });
    const Pt = globalThis.litElementPolyfillSupport;
    Pt?.({
        LitElement: Mt
    }),
    (globalThis.litElementVersions ??= []).push("4.0.6");
    const Lt = e=>(t,i)=>{
        void 0 !== i ? i.addInitializer((()=>{
            customElements.define(e, t)
        }
        )) : customElements.define(e, t)
    }
      , _t = {
        attribute: !0,
        type: String,
        converter: je,
        reflect: !1,
        hasChanged: We
    }
      , Bt = (e=_t,t,i)=>{
        const {kind: o, metadata: r} = i;
        let n = globalThis.litPropertyMetadata.get(r);
        if (void 0 === n && globalThis.litPropertyMetadata.set(r, n = new Map),
        n.set(i.name, e),
        "accessor" === o) {
            const {name: o} = i;
            return {
                set(i) {
                    const r = t.get.call(this);
                    t.set.call(this, i),
                    this.requestUpdate(o, r, e)
                },
                init(t) {
                    return void 0 !== t && this.P(o, void 0, e),
                    t
                }
            }
        }
        if ("setter" === o) {
            const {name: o} = i;
            return function(i) {
                const r = this[o];
                t.call(this, i),
                this.requestUpdate(o, r, e)
            }
        }
        throw Error("Unsupported decorator location: " + o)
    }
    ;
    function Ot(e) {
        return (t,i)=>"object" == typeof i ? Bt(e, t, i) : ((e,t,i)=>{
            const o = t.hasOwnProperty(i);
            return t.constructor.createProperty(i, o ? {
                ...e,
                wrapped: !0
            } : e),
            o ? Object.getOwnPropertyDescriptor(t, i) : void 0
        }
        )(e, t, i)
    }
    function zt(e) {
        return Ot({
            ...e,
            state: !0,
            attribute: !1
        })
    }
    function Nt(e) {
        return (t,i)=>{
            const {slot: o, selector: r} = e ?? {}
              , n = "slot" + (o ? `[name=${o}]` : ":not([name])");
            return ((e,t,i)=>(i.configurable = !0,
            i.enumerable = !0,
            Reflect.decorate && "object" != typeof t && Object.defineProperty(e, t, i),
            i))(t, i, {
                get() {
                    const t = this.renderRoot?.querySelector(n)
                      , i = t?.assignedElements(e) ?? [];
                    return void 0 === r ? i : i.filter((e=>e.matches(r)))
                }
            })
        }
    }
    const Ft = e=>e ?? gt
      , Vt = 1
      , Ht = 2
      , Ut = 3
      , Kt = 4
      , qt = e=>(...t)=>({
        _$litDirective$: e,
        values: t
    });
    let jt = class {
        constructor(e) {}
        get _$AU() {
            return this._$AM._$AU
        }
        _$AT(e, t, i) {
            this._$Ct = e,
            this._$AM = t,
            this._$Ci = i
        }
        _$AS(e, t) {
            return this.update(e, t)
        }
        update(e, t) {
            return this.render(...t)
        }
    }
    ;
    const Wt = "important"
      , Gt = " !" + Wt
      , Yt = qt(class extends jt {
        constructor(e) {
            if (super(e),
            e.type !== Vt || "style" !== e.name || e.strings?.length > 2)
                throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")
        }
        render(e) {
            return Object.keys(e).reduce(((t,i)=>{
                const o = e[i];
                return null == o ? t : t + `${i = i.includes("-") ? i : i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g, "-$&").toLowerCase()}:${o};`
            }
            ), "")
        }
        update(e, [t]) {
            const {style: i} = e.element;
            if (void 0 === this.ft)
                return this.ft = new Set(Object.keys(t)),
                this.render(t);
            for (const e of this.ft)
                null == t[e] && (this.ft.delete(e),
                e.includes("-") ? i.removeProperty(e) : i[e] = null);
            for (const e in t) {
                const o = t[e];
                if (null != o) {
                    this.ft.add(e);
                    const t = "string" == typeof o && o.endsWith(Gt);
                    e.includes("-") || t ? i.setProperty(e, t ? o.slice(0, -11) : o, t ? Wt : "") : i[e] = o
                }
            }
            return vt
        }
    }
    );
    class Xt extends Mt {
        emit(e, t) {
            const i = new CustomEvent(e,Object.assign({
                bubbles: !0,
                cancelable: !1,
                composed: !0,
                detail: {}
            }, t));
            return this.dispatchEvent(i)
        }
    }
    class Jt {
        constructor(e, ...t) {
            this.slotNames = [],
            (this.host = e).addController(this),
            this.slotNames = t,
            this.onSlotChange = this.onSlotChange.bind(this)
        }
        hostConnected() {
            this.host.shadowRoot.addEventListener("slotchange", this.onSlotChange),
            S() || M((()=>{
                this.host.requestUpdate()
            }
            ))
        }
        hostDisconnected() {
            this.host.shadowRoot.removeEventListener("slotchange", this.onSlotChange)
        }
        test(e) {
            return "[default]" === e ? this.hasDefaultSlot() : this.hasNamedSlot(e)
        }
        hasDefaultSlot() {
            return [...this.host.childNodes].some((e=>{
                if (e.nodeType === e.TEXT_NODE && "" !== e.textContent.trim())
                    return !0;
                if (e.nodeType === e.ELEMENT_NODE) {
                    if (!e.hasAttribute("slot"))
                        return !0
                }
                return !1
            }
            ))
        }
        hasNamedSlot(e) {
            return null !== this.host.querySelector(`:scope > [slot="${e}"]`)
        }
        onSlotChange(e) {
            const t = e.target;
            (this.slotNames.includes("[default]") && !t.name || t.name && this.slotNames.includes(t.name)) && this.host.requestUpdate()
        }
    }
    const Zt = ft`${gt}`
      , Qt = Pe`:host{box-sizing:border-box}:host *,:host ::after,:host ::before{box-sizing:inherit}:host :focus,:host :focus-visible,:host(:focus),:host(:focus-visible){outline:0}[hidden]{display:none!important}`;
    let ei = class extends jt {
        constructor(e) {
            if (super(e),
            this.it = gt,
            e.type !== Ht)
                throw Error(this.constructor.directiveName + "() can only be used in child bindings")
        }
        render(e) {
            if (e === gt || null == e)
                return this._t = void 0,
                this.it = e;
            if (e === vt)
                return e;
            if ("string" != typeof e)
                throw Error(this.constructor.directiveName + "() called with a non-string value");
            if (e === this.it)
                return this._t;
            this.it = e;
            const t = [e];
            return t.raw = t,
            this._t = {
                _$litType$: this.constructor.resultType,
                strings: t,
                values: []
            }
        }
    }
    ;
    ei.directiveName = "unsafeHTML",
    ei.resultType = 1;
    class ti extends ei {
    }
    ti.directiveName = "unsafeSVG",
    ti.resultType = 2;
    const ii = qt(ti)
      , oi = e=>void 0 === e.strings
      , ri = {}
      , ni = (e,t)=>{
        const i = e._$AN;
        if (void 0 === i)
            return !1;
        for (const e of i)
            e._$AO?.(t, !1),
            ni(e, t);
        return !0
    }
      , si = e=>{
        let t, i;
        do {
            if (void 0 === (t = e._$AM))
                break;
            i = t._$AN,
            i.delete(e),
            e = t
        } while (0 === i?.size)
    }
      , ai = e=>{
        for (let t; t = e._$AM; e = t) {
            let i = t._$AN;
            if (void 0 === i)
                t._$AN = i = new Set;
            else if (i.has(e))
                break;
            i.add(e),
            di(t)
        }
    }
    ;
    function li(e) {
        void 0 !== this._$AN ? (si(this),
        this._$AM = e,
        ai(this)) : this._$AM = e
    }
    function ci(e, t=!1, i=0) {
        const o = this._$AH
          , r = this._$AN;
        if (void 0 !== r && 0 !== r.size)
            if (t)
                if (Array.isArray(o))
                    for (let e = i; e < o.length; e++)
                        ni(o[e], !1),
                        si(o[e]);
                else
                    null != o && (ni(o, !1),
                    si(o));
            else
                ni(this, e)
    }
    const di = e=>{
        e.type == Ht && (e._$AP ??= ci,
        e._$AQ ??= li)
    }
    ;
    class hi extends jt {
        constructor() {
            super(...arguments),
            this._$AN = void 0
        }
        _$AT(e, t, i) {
            super._$AT(e, t, i),
            ai(this),
            this.isConnected = e._$AU
        }
        _$AO(e, t=!0) {
            e !== this.isConnected && (this.isConnected = e,
            e ? this.reconnected?.() : this.disconnected?.()),
            t && (ni(this, e),
            si(this))
        }
        setValue(e) {
            if (oi(this._$Ct))
                this._$Ct._$AI(e, this);
            else {
                const t = [...this._$Ct._$AH];
                t[this._$Ci] = e,
                this._$Ct._$AI(t, this, 0)
            }
        }
        disconnected() {}
        reconnected() {}
    }
    class ui {
        constructor(e) {
            this.Y = e
        }
        disconnect() {
            this.Y = void 0
        }
        reconnect(e) {
            this.Y = e
        }
        deref() {
            return this.Y
        }
    }
    let pi = class {
        constructor() {
            this.Z = void 0,
            this.q = void 0
        }
        get() {
            return this.Z
        }
        pause() {
            this.Z ??= new Promise((e=>this.q = e))
        }
        resume() {
            this.q?.(),
            this.Z = this.q = void 0
        }
    }
    ;
    const mi = e=>!(e=>null === e || "object" != typeof e && "function" != typeof e)(e) && "function" == typeof e.then
      , fi = 1073741823;
    const vi = qt(class extends hi {
        constructor() {
            super(...arguments),
            this._$Cwt = fi,
            this._$Cbt = [],
            this._$CK = new ui(this),
            this._$CX = new pi
        }
        render(...e) {
            return e.find((e=>!mi(e))) ?? vt
        }
        update(e, t) {
            const i = this._$Cbt;
            let o = i.length;
            this._$Cbt = t;
            const r = this._$CK
              , n = this._$CX;
            this.isConnected || this.disconnected();
            for (let e = 0; e < t.length && !(e > this._$Cwt); e++) {
                const s = t[e];
                if (!mi(s))
                    return this._$Cwt = e,
                    s;
                e < o && s === i[e] || (this._$Cwt = fi,
                o = 0,
                Promise.resolve(s).then((async e=>{
                    for (; n.get(); )
                        await n.get();
                    const t = r.deref();
                    if (void 0 !== t) {
                        const i = t._$Cbt.indexOf(s);
                        i > -1 && i < t._$Cwt && (t._$Cwt = i,
                        t.setValue(e))
                    }
                }
                )))
            }
            return vt
        }
        disconnected() {
            this._$CK.disconnect(),
            this._$CX.pause()
        }
        reconnected() {
            this._$CK.reconnect(this),
            this._$CX.resume()
        }
    }
    )
      , gi = Pe`:host{display:inline-block;width:1em;height:1em;font-weight:400;font-family:'Material Icons';font-display:block;font-style:normal;line-height:1;direction:ltr;letter-spacing:normal;white-space:nowrap;text-transform:none;word-wrap:normal;-webkit-font-smoothing:antialiased;text-rendering:optimizelegibility;-moz-osx-font-smoothing:grayscale;font-size:1.5rem}::slotted(svg),svg{width:100%;height:100%;fill:currentcolor}`;
    e.Icon = class extends Xt {
        constructor() {
            super(...arguments),
            this.hasSlotController = new Jt(this,"[default]")
        }
        render() {
            return this.hasSlotController.test("[default]") ? ft`<slot></slot>` : (()=>{
                if (this.name) {
                    const [e,t] = this.name.split("--")
                      , i = new Map([["outlined", "Material Icons Outlined"], ["filled", "Material Icons"], ["rounded", "Material Icons Round"], ["sharp", "Material Icons Sharp"], ["two-tone", "Material Icons Two Tone"]]);
                    return ft`<span style="${Yt({
                        fontFamily: i.get(t)
                    })}">${e}</span>`
                }
                return this.src ? ft`${vi(Ie({
                    url: this.src
                }).then(ii))}` : ft``
            }
            )()
        }
    }
    ,
    e.Icon.styles = [Qt, gi],
    Se([Ot({
        reflect: !0
    })], e.Icon.prototype, "name", void 0),
    Se([Ot({
        reflect: !0
    })], e.Icon.prototype, "src", void 0),
    e.Icon = Se([Lt("mdui-icon")], e.Icon);
    const bi = Pe`:host{--shape-corner:var(--mdui-shape-corner-full);position:relative;display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;overflow:hidden;white-space:nowrap;vertical-align:middle;border-radius:var(--shape-corner);-webkit-user-select:none;user-select:none;width:2.5rem;height:2.5rem;background-color:rgb(var(--mdui-color-primary-container));color:rgb(var(--mdui-color-on-primary-container));font-size:var(--mdui-typescale-title-medium-size);font-weight:var(--mdui-typescale-title-medium-weight);letter-spacing:var(--mdui-typescale-title-medium-tracking);line-height:var(--mdui-typescale-title-medium-line-height)}img{width:100%;height:100%}::slotted(mdui-icon),mdui-icon{font-size:1.5em}`;
    e.Avatar = class extends Xt {
        constructor() {
            super(...arguments),
            this.hasSlotController = new Jt(this,"[default]")
        }
        render() {
            return this.hasSlotController.test("[default]") ? ft`<slot></slot>` : this.src ? ft`<img part="image" alt="${Ft(this.label)}" src="${this.src}" style="${Yt({
                objectFit: this.fit
            })}">` : this.icon ? ft`<mdui-icon part="icon" name="${this.icon}"></mdui-icon>` : Zt
        }
    }
    ,
    e.Avatar.styles = [Qt, bi],
    Se([Ot({
        reflect: !0
    })], e.Avatar.prototype, "src", void 0),
    Se([Ot({
        reflect: !0
    })], e.Avatar.prototype, "fit", void 0),
    Se([Ot({
        reflect: !0
    })], e.Avatar.prototype, "icon", void 0),
    Se([Ot({
        reflect: !0
    })], e.Avatar.prototype, "label", void 0),
    e.Avatar = Se([Lt("mdui-avatar")], e.Avatar);
    const yi = Pe`:host{--shape-corner:var(--mdui-shape-corner-full);display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;border-radius:var(--shape-corner);padding-left:.25rem;padding-right:.25rem;color:rgb(var(--mdui-color-on-error));background-color:rgb(var(--mdui-color-error));height:1rem;min-width:1rem;font-size:var(--mdui-typescale-label-small-size);font-weight:var(--mdui-typescale-label-small-weight);letter-spacing:var(--mdui-typescale-label-small-tracking);line-height:var(--mdui-typescale-label-small-line-height)}:host([variant=small]){min-width:0;padding:0;width:.375rem;height:.375rem}`;
    e.Badge = class extends Xt {
        constructor() {
            super(...arguments),
            this.variant = "large"
        }
        render() {
            return "small" === this.variant ? Zt : ft`<slot></slot>`
        }
    }
    ,
    e.Badge.styles = [Qt, yi],
    Se([Ot({
        reflect: !0
    })], e.Badge.prototype, "variant", void 0),
    e.Badge = Se([Lt("mdui-badge")], e.Badge);
    const wi = e=>null !== e && "false" !== e;
    class ki {
        constructor(e, t) {
            this.defined = !1,
            (this.host = e).addController(this),
            this.relatedElements = t.relatedElements,
            this.needDomReady = t.needDomReady || !!t.relatedElements,
            this.onSlotChange = this.onSlotChange.bind(this)
        }
        hostConnected() {
            this.host.shadowRoot.addEventListener("slotchange", this.onSlotChange)
        }
        hostDisconnected() {
            this.host.shadowRoot.removeEventListener("slotchange", this.onSlotChange)
        }
        isDefined() {
            return !!this.defined || (this.defined = (!this.needDomReady || S()) && !this.getUndefinedLocalNames().length,
            this.defined)
        }
        async whenDefined() {
            if (this.defined)
                return Promise.resolve();
            const e = r();
            this.needDomReady && !S(e) && await new Promise((t=>{
                e.addEventListener("DOMContentLoaded", (()=>t()), {
                    once: !0
                })
            }
            ));
            const t = this.getUndefinedLocalNames();
            if (t.length) {
                const e = [];
                t.forEach((t=>{
                    e.push(customElements.whenDefined(t))
                }
                )),
                await Promise.all(e)
            }
            this.defined = !0
        }
        getScopeLocalNameSelector() {
            const e = this.relatedElements;
            return e ? Array.isArray(e) ? e.map((e=>`${e}:not(:defined)`)).join(",") : Object.keys(e).filter((t=>!e[t])).map((e=>`${e}:not(:defined)`)).join(",") : null
        }
        getGlobalLocalNameSelector() {
            const e = this.relatedElements;
            return !e || Array.isArray(e) ? null : Object.keys(e).filter((t=>e[t])).map((e=>`${e}:not(:defined)`)).join(",")
        }
        getUndefinedLocalNames() {
            const e = this.getScopeLocalNameSelector()
              , t = this.getGlobalLocalNameSelector()
              , i = [...e ? [...this.host.querySelectorAll(e)] : [], ...t ? [...r().querySelectorAll(t)] : []].map((e=>e.localName));
            return L(i)
        }
        onSlotChange() {
            const e = this.getScopeLocalNameSelector();
            if (e) {
                this.host.querySelectorAll(e).length && (this.defined = !1)
            }
        }
    }
    function Ci(e, t=!1) {
        return (i,o)=>{
            const {update: r} = i;
            e in i && (i.update = function(i) {
                if (i.has(e)) {
                    const r = i.get(e)
                      , n = this[e];
                    r !== n && (t && !this.hasUpdated || this[o](r, n))
                }
                r.call(this, i)
            }
            )
        }
    }
    const xi = e=>{
        class t extends e {
            constructor(...e) {
                super(...e),
                this.scrollBehaviorDefinedController = new ki(this,{
                    needDomReady: !0
                }),
                this.lastScrollTopThreshold = 0,
                this.lastScrollTopNoThreshold = 0,
                this.isParentLayout = !1,
                this.onListeningScroll = this.onListeningScroll.bind(this)
            }
            get scrollPaddingPosition() {
                throw new Error("Must implement scrollPaddingPosition getter")
            }
            async onScrollTargetChange(e, t) {
                if (await this.scrollBehaviorDefinedController.whenDefined(),
                (e && !t || !e && t) && this.updatecontainerPadding(),
                !this.scrollBehavior)
                    return;
                const i = this.getListening(e);
                i && i.removeEventListener("scroll", this.onListeningScroll);
                const o = this.getListening(t);
                o && (this.updateScrollTop(o),
                o.addEventListener("scroll", this.onListeningScroll))
            }
            async onScrollBehaviorChange(e, t) {
                await this.scrollBehaviorDefinedController.whenDefined(),
                (e && !t || !e && t) && this.updatecontainerPadding();
                const i = this.getListening(this.scrollTarget);
                i && (this.scrollBehavior ? (this.updateScrollTop(i),
                i.addEventListener("scroll", this.onListeningScroll)) : i.removeEventListener("scroll", this.onListeningScroll))
            }
            connectedCallback() {
                super.connectedCallback(),
                this.scrollBehaviorDefinedController.whenDefined().then((()=>{
                    this.isParentLayout = a(this.parentElement, "mdui-layout"),
                    this.updatecontainerPadding()
                }
                ))
            }
            disconnectedCallback() {
                super.disconnectedCallback(),
                this.scrollBehaviorDefinedController.whenDefined().then((()=>{
                    this.updatecontainerPadding(!1)
                }
                ))
            }
            hasScrollBehavior(e) {
                const t = this.scrollBehavior?.split(" ") ?? [];
                return Array.isArray(e) ? !!t.filter((t=>e.includes(t))).length : t.includes(e)
            }
            runScrollThreshold(e, t) {}
            runScrollNoThreshold(e, t) {}
            updatecontainerPadding(e=!0) {
                const t = this.getcontainer(this.scrollTarget);
                if (!t || this.isParentLayout)
                    return;
                const i = "top" === this.scrollPaddingPosition ? "paddingTop" : "paddingBottom";
                if (e) {
                    const e = this.getListening(this.scrollTarget) && ["fixed", "absolute"].includes(M(this).css("position")) ? this.offsetHeight : null;
                    M(t).css({
                        [i]: e
                    })
                } else
                    M(t).css({
                        [i]: null
                    })
            }
            onListeningScroll() {
                const e = this.getListening(this.scrollTarget);
                window.requestAnimationFrame((()=>this.onScroll(e)))
            }
            onScroll(e) {
                const t = e.scrollY ?? e.scrollTop;
                this.lastScrollTopNoThreshold !== t && (this.runScrollNoThreshold(t < this.lastScrollTopNoThreshold, t),
                this.lastScrollTopNoThreshold = t),
                Math.abs(t - this.lastScrollTopThreshold) > (this.scrollThreshold || 0) && (this.runScrollThreshold(t < this.lastScrollTopThreshold, t),
                this.lastScrollTopThreshold = t)
            }
            updateScrollTop(e) {
                this.lastScrollTopThreshold = this.lastScrollTopNoThreshold = e.scrollY ?? e.scrollTop
            }
            getListening(e) {
                return e ? M(e)[0] : window
            }
            getcontainer(e) {
                return e ? M(e)[0] : document.body
            }
        }
        return Se([Ot({
            attribute: "scroll-target"
        })], t.prototype, "scrollTarget", void 0),
        Se([Ot({
            reflect: !0,
            attribute: "scroll-behavior"
        })], t.prototype, "scrollBehavior", void 0),
        Se([Ot({
            type: Number,
            reflect: !0,
            attribute: "scroll-threshold"
        })], t.prototype, "scrollThreshold", void 0),
        Se([Ci("scrollTarget")], t.prototype, "onScrollTargetChange", null),
        Se([Ci("scrollBehavior")], t.prototype, "onScrollBehaviorChange", null),
        t
    }
    ;
    let $i = 0;
    const Ri = ()=>++$i;
    let Ii, Si;
    const Ei = (e,t)=>{
        const i = M(e)
          , o = Ri()
          , r = {
            unobserve: ()=>{
                i.each(((e,t)=>{
                    const i = Ii.get(t)
                      , r = i.coArr.findIndex((e=>e.key === o));
                    -1 !== r && i.coArr.splice(r, 1),
                    i.coArr.length ? Ii.set(t, i) : (Si.unobserve(t),
                    Ii.delete(t))
                }
                ))
            }
        };
        return Ii || (Ii = new WeakMap,
        Si = new ResizeObserver((e=>{
            e.forEach((e=>{
                const t = e.target
                  , i = Ii.get(t);
                i.entry = e,
                i.coArr.forEach((t=>{
                    t.callback.call(r, e, r)
                }
                ))
            }
            ))
        }
        ))),
        i.each(((e,i)=>{
            const n = Ii.get(i) ?? {
                coArr: []
            };
            n.coArr.length && n.entry && t.call(r, n.entry, r),
            n.coArr.push({
                callback: t,
                key: o
            }),
            Ii.set(i, n),
            Si.observe(i)
        }
        )),
        r
    }
    ;
    class Ti {
        constructor() {
            this.states = []
        }
        registerMain(e) {
            this.$main = M(e)
        }
        unregisterMain() {
            this.$main = void 0
        }
        registerItem(e) {
            const t = {
                element: e
            };
            this.states.push(t),
            t.observeResize = Ei(t.element, (()=>{
                this.updateLayout(t.element, {
                    width: this.isNoWidth(t) ? 0 : void 0
                })
            }
            )),
            this.items = void 0,
            this.resort(),
            this.updateLayout()
        }
        unregisterItem(e) {
            const t = this.states.findIndex((t=>t.element === e));
            if (t < 0)
                return;
            const i = this.states[t];
            i.observeResize?.unobserve(),
            this.items = void 0,
            this.states.splice(t, 1),
            this.states[t] && this.updateLayout(this.states[t].element)
        }
        getItems() {
            if (!this.items) {
                const e = this.states.map((e=>e.element));
                this.items = e.sort(((e,t)=>{
                    const i = e.compareDocumentPosition(t);
                    return i & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : i & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0
                }
                ))
            }
            return this.items
        }
        getMain() {
            return this.$main ? this.$main[0] : void 0
        }
        getItemsAndMain() {
            return [...this.getItems(), this.getMain()].filter((e=>e))
        }
        updateOrder() {
            this.resort(),
            this.updateLayout()
        }
        updateLayout(e, t) {
            const i = e ? {
                element: e,
                width: t?.width,
                height: t?.height
            } : void 0
              , o = i ? this.states.findIndex((e=>e.element === i.element)) : 0;
            if (o < 0)
                return;
            Object.assign(this.states[o], i),
            this.states.forEach(((e,t)=>{
                if (t < o)
                    return;
                const i = e.element.layoutPlacement
                  , r = t > 0 ? this.states[t - 1] : void 0
                  , n = r?.top ?? 0
                  , s = r?.right ?? 0
                  , a = r?.bottom ?? 0
                  , l = r?.left ?? 0;
                switch (Object.assign(e, {
                    top: n,
                    right: s,
                    bottom: a,
                    left: l
                }),
                i) {
                case "top":
                case "bottom":
                    e[i] += e.height ?? e.element.offsetHeight;
                    break;
                case "right":
                case "left":
                    e[i] += (this.isNoWidth(e) ? 0 : e.width) ?? e.element.offsetWidth
                }
                e.height = e.width = void 0,
                M(e.element).css({
                    position: "absolute",
                    top: "bottom" === i ? null : n,
                    right: "left" === i ? null : s,
                    bottom: "top" === i ? null : a,
                    left: "right" === i ? null : l
                })
            }
            ));
            const r = this.states[this.states.length - 1];
            this.$main && this.$main.css({
                paddingTop: r.top,
                paddingRight: r.right,
                paddingBottom: r.bottom,
                paddingLeft: r.left
            })
        }
        resort() {
            const e = this.getItems();
            this.states.sort(((t,i)=>{
                const o = t.element.order ?? 0
                  , r = i.element.order ?? 0;
                return o > r ? 1 : o < r ? -1 : e.indexOf(t.element) > e.indexOf(i.element) ? 1 : e.indexOf(t.element) < e.indexOf(i.element) ? -1 : 0
            }
            ))
        }
        isNoWidth(e) {
            return a(e.element, "mdui-navigation-drawer") && e.element.isModal
        }
    }
    const Ai = new WeakMap
      , Di = e=>(Ai.has(e) || Ai.set(e, new Ti),
    Ai.get(e));
    class Mi extends Xt {
        constructor() {
            super(...arguments),
            this.isParentLayout = !1
        }
        get layoutPlacement() {
            throw new Error("Must implement placement getter!")
        }
        onOrderChange() {
            this.layoutManager?.updateOrder()
        }
        connectedCallback() {
            super.connectedCallback();
            const e = this.parentElement;
            this.isParentLayout = a(e, "mdui-layout"),
            this.isParentLayout && (this.layoutManager = Di(e),
            this.layoutManager.registerItem(this))
        }
        disconnectedCallback() {
            super.disconnectedCallback(),
            this.layoutManager && this.layoutManager.unregisterItem(this)
        }
    }
    Se([Ot({
        type: Number,
        reflect: !0
    })], Mi.prototype, "order", void 0),
    Se([Ci("order", !0)], Mi.prototype, "onOrderChange", null);
    const Pi = Pe`:host{--shape-corner:var(--mdui-shape-corner-none);--z-index:2000;position:fixed;right:0;bottom:0;left:0;display:flex;flex:0 0 auto;align-items:center;justify-content:flex-start;border-radius:var(--shape-corner) var(--shape-corner) 0 0;z-index:var(--z-index);transition:bottom var(--mdui-motion-duration-long2) var(--mdui-motion-easing-emphasized);padding:0 1rem;height:5rem;background-color:rgb(var(--mdui-color-surface-container));box-shadow:var(--mdui-elevation-level2)}:host([scroll-target]:not([scroll-target=''])){position:absolute}:host([hide]){transition-duration:var(--mdui-motion-duration-short4);bottom:-5.625rem}::slotted(:not(:first-child)){margin-left:.5rem}::slotted(mdui-fab){box-shadow:var(--mdui-elevation-level0)}:host([fab-detach]) ::slotted(mdui-fab){position:absolute;transition:bottom var(--mdui-motion-duration-long2) var(--mdui-motion-easing-standard);right:1rem;bottom:.75rem}:host([fab-detach][hide][scroll-behavior~=hide]) ::slotted(mdui-fab){transition-duration:var(--mdui-motion-duration-short4);bottom:1rem;box-shadow:var(--mdui-elevation-level2)}:host([fab-detach][hide][scroll-behavior~=hide][scroll-target]:not([scroll-target=''])) ::slotted(mdui-fab){bottom:6.625rem}:host([hide]) ::slotted(:not(mdui-fab)),:host([hide]:not([fab-detach])) ::slotted(mdui-fab){transform:translateY(8.75rem);transition:transform var(--mdui-motion-duration-0) var(--mdui-motion-easing-emphasized-accelerate) var(--mdui-motion-duration-short4)}::slotted(:first-child){transition:transform var(--mdui-motion-duration-short3) var(--mdui-motion-easing-emphasized-decelerate) var(--mdui-motion-duration-short1)}::slotted(:nth-child(2)){transition:transform var(--mdui-motion-duration-short3) var(--mdui-motion-easing-emphasized-decelerate) var(--mdui-motion-duration-short3)}::slotted(:nth-child(3)){transition:transform var(--mdui-motion-duration-short3) var(--mdui-motion-easing-emphasized-decelerate) var(--mdui-motion-duration-short4)}::slotted(:nth-child(4)){transition:transform var(--mdui-motion-duration-short3) var(--mdui-motion-easing-emphasized-decelerate) var(--mdui-motion-duration-medium1)}::slotted(:nth-child(5)){transition:transform var(--mdui-motion-duration-short3) var(--mdui-motion-easing-emphasized-decelerate) var(--mdui-motion-duration-medium2)}::slotted(:nth-child(6)){transition:transform var(--mdui-motion-duration-short3) var(--mdui-motion-easing-emphasized-decelerate) var(--mdui-motion-duration-medium3)}`;
    e.BottomAppBar = class extends (xi(Mi)) {
        constructor() {
            super(...arguments),
            this.hide = !1,
            this.fabDetach = !1
        }
        get scrollPaddingPosition() {
            return "bottom"
        }
        get layoutPlacement() {
            return "bottom"
        }
        firstUpdated(e) {
            super.firstUpdated(e),
            this.addEventListener("transitionend", (e=>{
                e.target === this && this.emit(this.hide ? "hidden" : "shown")
            }
            ))
        }
        render() {
            return ft`<slot></slot>`
        }
        runScrollThreshold(e) {
            if (!e && !this.hide) {
                this.emit("hide", {
                    cancelable: !0
                }) && (this.hide = !0)
            }
            if (e && this.hide) {
                this.emit("show", {
                    cancelable: !0
                }) && (this.hide = !1)
            }
        }
    }
    ,
    e.BottomAppBar.styles = [Qt, Pi],
    Se([Ot({
        type: Boolean,
        reflect: !0,
        converter: wi
    })], e.BottomAppBar.prototype, "hide", void 0),
    Se([Ot({
        type: Boolean,
        reflect: !0,
        converter: wi,
        attribute: "fab-detach"
    })], e.BottomAppBar.prototype, "fabDetach", void 0),
    Se([Ot({
        reflect: !0,
        attribute: "scroll-behavior"
    })], e.BottomAppBar.prototype, "scrollBehavior", void 0),
    e.BottomAppBar = Se([Lt("mdui-bottom-app-bar")], e.BottomAppBar);
    const Li = ()=>new _i;
    class _i {
    }
    const Bi = new WeakMap
      , Oi = qt(class extends hi {
        render(e) {
            return gt
        }
        update(e, [t]) {
            const i = t !== this.Y;
            return i && void 0 !== this.Y && this.rt(void 0),
            (i || this.lt !== this.ct) && (this.Y = t,
            this.ht = e.options?.host,
            this.rt(this.ct = e.element)),
            gt
        }
        rt(e) {
            if (this.isConnected || (e = void 0),
            "function" == typeof this.Y) {
                const t = this.ht ?? globalThis;
                let i = Bi.get(t);
                void 0 === i && (i = new WeakMap,
                Bi.set(t, i)),
                void 0 !== i.get(this.Y) && this.Y.call(this.ht, void 0),
                i.set(this.Y, e),
                void 0 !== e && this.Y.call(this.ht, e)
            } else
                this.Y.value = e
        }
        get lt() {
            return "function" == typeof this.Y ? Bi.get(this.ht ?? globalThis)?.get(this.Y) : this.Y?.value
        }
        disconnected() {
            this.lt === this.ct && this.rt(void 0)
        }
        reconnected() {
            this.rt(this.ct)
        }
    }
    );
    function zi(e) {
        if ("string" == typeof e || "number" == typeof e)
            return "" + e;
        let t = "";
        if (Array.isArray(e))
            for (let i, o = 0; o < e.length; o++)
                "" !== (i = zi(e[o])) && (t += (t && " ") + i);
        else
            for (let i in e)
                e[i] && (t += (t && " ") + i);
        return t
    }
    const Ni = new WeakMap
      , Fi = new WeakMap;
    class Vi {
        constructor(e, t) {
            (this.host = e).addController(this),
            this.definedController = new ki(e,{
                needDomReady: !0
            }),
            this.options = {
                form: e=>{
                    const t = M(e).attr("form");
                    if (t) {
                        return e.getRootNode().getElementById(t)
                    }
                    return e.closest("form")
                }
                ,
                name: e=>e.name,
                value: e=>e.value,
                defaultValue: e=>e.defaultValue,
                setValue: (e,t)=>e.value = t,
                disabled: e=>e.disabled,
                reportValidity: e=>!l(e.reportValidity) || e.reportValidity(),
                ...t
            },
            this.onFormData = this.onFormData.bind(this),
            this.onFormSubmit = this.onFormSubmit.bind(this),
            this.onFormReset = this.onFormReset.bind(this),
            this.reportFormValidity = this.reportFormValidity.bind(this)
        }
        hostConnected() {
            this.definedController.whenDefined().then((()=>{
                this.form = this.options.form(this.host),
                this.form && this.attachForm(this.form)
            }
            ))
        }
        hostDisconnected() {
            this.detachForm()
        }
        hostUpdated() {
            this.definedController.whenDefined().then((()=>{
                const e = this.options.form(this.host);
                e || this.detachForm(),
                e && this.form !== e && (this.detachForm(),
                this.attachForm(e))
            }
            ))
        }
        getForm() {
            return this.form ?? null
        }
        reset(e) {
            this.doAction("reset", e)
        }
        submit(e) {
            this.doAction("submit", e)
        }
        attachForm(e) {
            e ? (this.form = e,
            ge.has(this.form) ? ge.get(this.form).add(this.host) : ge.set(this.form, new Set([this.host])),
            this.form.addEventListener("formdata", this.onFormData),
            this.form.addEventListener("submit", this.onFormSubmit),
            this.form.addEventListener("reset", this.onFormReset),
            Ni.has(this.form) || (Ni.set(this.form, this.form.reportValidity),
            this.form.reportValidity = ()=>this.reportFormValidity())) : this.form = void 0
        }
        detachForm() {
            this.form && (ge.get(this.form).delete(this.host),
            this.form.removeEventListener("formdata", this.onFormData),
            this.form.removeEventListener("submit", this.onFormSubmit),
            this.form.removeEventListener("reset", this.onFormReset),
            Ni.has(this.form) && !ge.get(this.form).size && (this.form.reportValidity = Ni.get(this.form),
            Ni.delete(this.form)))
        }
        doAction(e, t) {
            if (!this.form)
                return;
            const i = M(`<button type="${e}">`).css({
                position: "absolute",
                width: 0,
                height: 0,
                clipPath: "inset(50%)",
                overflow: "hidden",
                whiteSpace: "nowrap"
            })
              , o = i[0];
            t && (o.name = t.name,
            o.value = t.value,
            ["formaction", "formenctype", "formmethod", "formnovalidate", "formtarget"].forEach((e=>{
                i.attr(e, M(t).attr(e))
            }
            ))),
            this.form.append(o),
            o.click(),
            o.remove()
        }
        onFormData(e) {
            const t = this.options.disabled(this.host)
              , i = this.options.name(this.host)
              , o = this.options.value(this.host)
              , r = ["mdui-button", "mdui-button-icon", "mdui-chip", "mdui-fab", "mdui-segmented-button"].includes(this.host.tagName.toLowerCase());
            t || r || !c(i) || !i || u(o) || (Array.isArray(o) ? o.forEach((t=>{
                e.formData.append(i, t.toString())
            }
            )) : e.formData.append(i, o.toString()))
        }
        onFormSubmit(e) {
            const t = this.options.disabled(this.host)
              , i = this.options.reportValidity;
            !this.form || this.form.noValidate || t || i(this.host) || (e.preventDefault(),
            e.stopImmediatePropagation())
        }
        onFormReset() {
            this.form && (this.options.setValue(this.host, this.options.defaultValue(this.host)),
            this.host.invalid = !1,
            Fi.has(this.form) ? Fi.get(this.form).add(this.host) : Fi.set(this.form, new Set([this.host])))
        }
        reportFormValidity() {
            if (this.form && !this.form.noValidate) {
                const e = be(this.form);
                for (const t of e)
                    if (l(t.reportValidity) && !t.reportValidity())
                        return !1
            }
            return !0
        }
    }
    const Hi = e=>{
        class t extends e {
            renderAnchor({id: e, className: t, part: i, content: o=ft`<slot></slot>`, refDirective: r, tabIndex: n}) {
                return ft`<a ${r} id="${Ft(e)}" class="_a ${t || ""}" part="${Ft(i)}" href="${Ft(this.href)}" download="${Ft(this.download)}" target="${Ft(this.target)}" rel="${Ft(this.rel)}" tabindex="${Ft(n)}">${o}</a>`
            }
        }
        return Se([Ot({
            reflect: !0
        })], t.prototype, "href", void 0),
        Se([Ot({
            reflect: !0
        })], t.prototype, "download", void 0),
        Se([Ot({
            reflect: !0
        })], t.prototype, "target", void 0),
        Se([Ot({
            reflect: !0
        })], t.prototype, "rel", void 0),
        t
    }
    ;
    let Ui = !0;
    const Ki = r();
    Ki.addEventListener("pointerdown", (()=>{
        Ui = !0
    }
    )),
    Ki.addEventListener("keydown", (()=>{
        Ui = !1
    }
    ));
    const qi = e=>{
        class t extends e {
            constructor() {
                super(...arguments),
                this.autofocus = !1,
                this.focused = !1,
                this.focusVisible = !1,
                this.focusableDefinedController = new ki(this,{
                    relatedElements: [""]
                }),
                this._manipulatingTabindex = !1,
                this._tabIndex = 0
            }
            get tabIndex() {
                const e = M(this);
                if (this.focusElement === this)
                    return Number(e.attr("tabindex") || -1);
                const t = Number(e.attr("tabindex") || 0);
                return this.focusDisabled || t < 0 ? -1 : this.focusElement ? this.focusElement.tabIndex : t
            }
            set tabIndex(e) {
                if (this._manipulatingTabindex)
                    return void (this._manipulatingTabindex = !1);
                const t = M(this);
                if (this.focusElement === this)
                    return null !== e && (this._tabIndex = e),
                    void t.attr("tabindex", this.focusDisabled ? null : e);
                const i = ()=>{
                    -1 === this.tabIndex && (this.tabIndex = 0,
                    this.focus({
                        preventScroll: !0
                    }))
                }
                ;
                if (-1 === e ? this.addEventListener("pointerdown", i) : (this._manipulatingTabindex = !0,
                this.removeEventListener("pointerdown", i)),
                -1 === e || this.focusDisabled)
                    return t.attr("tabindex", -1),
                    void (-1 !== e && this.manageFocusElementTabindex(e));
                this.hasAttribute("tabindex") || (this._manipulatingTabindex = !1),
                this.manageFocusElementTabindex(e)
            }
            get focusDisabled() {
                throw new Error("Must implement focusDisabled getter!")
            }
            get focusElement() {
                throw new Error("Must implement focusElement getter!")
            }
            connectedCallback() {
                super.connectedCallback(),
                this.updateComplete.then((()=>{
                    requestAnimationFrame((()=>{
                        this.manageAutoFocus()
                    }
                    ))
                }
                ))
            }
            click() {
                this.focusDisabled || (this.focusElement !== this ? this.focusElement.click() : HTMLElement.prototype.click.apply(this))
            }
            focus(e) {
                !this.focusDisabled && this.focusElement && (this.focusElement !== this ? this.focusElement.focus(e) : HTMLElement.prototype.focus.apply(this, [e]))
            }
            blur() {
                this.focusElement !== this ? this.focusElement.blur() : HTMLElement.prototype.blur.apply(this)
            }
            firstUpdated(e) {
                super.firstUpdated(e),
                this.focusElement.addEventListener("focus", (()=>{
                    this.focused = !0,
                    this.focusVisible = !Ui
                }
                )),
                this.focusElement.addEventListener("blur", (()=>{
                    this.focused = !1,
                    this.focusVisible = !1
                }
                ))
            }
            update(e) {
                if (void 0 === this._lastFocusDisabled || this._lastFocusDisabled !== this.focusDisabled) {
                    this._lastFocusDisabled = this.focusDisabled;
                    const e = M(this);
                    this.focusDisabled ? e.removeAttr("tabindex") : this.focusElement === this ? (this._manipulatingTabindex = !0,
                    e.attr("tabindex", this._tabIndex)) : this.tabIndex > -1 && e.removeAttr("tabindex")
                }
                super.update(e)
            }
            updated(e) {
                super.updated(e),
                this.focused && this.focusDisabled && this.blur()
            }
            async manageFocusElementTabindex(e) {
                this.focusElement || await this.updateComplete,
                null === e ? this.focusElement.removeAttribute("tabindex") : this.focusElement.tabIndex = e
            }
            manageAutoFocus() {
                this.autofocus && (this.dispatchEvent(new KeyboardEvent("keydown",{
                    code: "Tab"
                })),
                this.focusElement.focus())
            }
        }
        return Se([Ot({
            type: Boolean,
            reflect: !0,
            converter: wi
        })], t.prototype, "autofocus", void 0),
        Se([Ot({
            type: Boolean,
            reflect: !0,
            converter: wi
        })], t.prototype, "focused", void 0),
        Se([Ot({
            type: Boolean,
            reflect: !0,
            converter: wi,
            attribute: "focus-visible"
        })], t.prototype, "focusVisible", void 0),
        Se([Ot({
            type: Number,
            attribute: "tabindex"
        })], t.prototype, "tabIndex", null),
        t
    }
      , ji = qt(class extends jt {
        constructor(e) {
            if (super(e),
            e.type !== Vt || "class" !== e.name || e.strings?.length > 2)
                throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")
        }
        render(e) {
            return " " + Object.keys(e).filter((t=>e[t])).join(" ") + " "
        }
        update(e, [t]) {
            if (void 0 === this.st) {
                this.st = new Set,
                void 0 !== e.strings && (this.nt = new Set(e.strings.join(" ").split(/\s/).filter((e=>"" !== e))));
                for (const e in t)
                    t[e] && !this.nt?.has(e) && this.st.add(e);
                return this.render(t)
            }
            const i = e.element.classList;
            for (const e of this.st)
                e in t || (i.remove(e),
                this.st.delete(e));
            for (const e in t) {
                const o = !!t[e];
                o === this.st.has(e) || this.nt?.has(e) || (o ? (i.add(e),
                this.st.add(e)) : (i.remove(e),
                this.st.delete(e)))
            }
            return vt
        }
    }
    )
      , Wi = Pe`:host{position:relative;display:inline-block;flex-shrink:0;width:2.5rem;height:2.5rem;stroke:rgb(var(--mdui-color-primary))}.progress{position:relative;display:inline-block;width:100%;height:100%;text-align:left;transition:opacity var(--mdui-motion-duration-medium1) var(--mdui-motion-easing-linear)}.determinate svg{transform:rotate(-90deg);fill:transparent}.determinate .track{stroke:transparent}.determinate .circle{stroke:inherit;transition:stroke-dashoffset var(--mdui-motion-duration-long2) var(--mdui-motion-easing-standard)}.indeterminate{font-size:0;letter-spacing:0;white-space:nowrap;animation:mdui-comp-circular-progress-rotate 1568ms var(--mdui-motion-easing-linear) infinite}.indeterminate .circle,.indeterminate .layer{position:absolute;width:100%;height:100%}.indeterminate .layer{animation:mdui-comp-circular-progress-layer-rotate 5332ms var(--mdui-motion-easing-standard) infinite both}.indeterminate .circle{fill:transparent;stroke:inherit}.indeterminate .gap-patch{position:absolute;top:0;left:47.5%;width:5%;height:100%;overflow:hidden}.indeterminate .gap-patch .circle{left:-900%;width:2000%;transform:rotate(180deg)}.indeterminate .clipper{position:relative;display:inline-block;width:50%;height:100%;overflow:hidden}.indeterminate .clipper .circle{width:200%}.indeterminate .clipper.left .circle{animation:mdui-comp-circular-progress-left-spin 1333ms var(--mdui-motion-easing-standard) infinite both}.indeterminate .clipper.right .circle{left:-100%;animation:mdui-comp-circular-progress-right-spin 1333ms var(--mdui-motion-easing-standard) infinite both}@keyframes mdui-comp-circular-progress-rotate{to{transform:rotate(360deg)}}@keyframes mdui-comp-circular-progress-layer-rotate{12.5%{transform:rotate(135deg)}25%{transform:rotate(270deg)}37.5%{transform:rotate(405deg)}50%{transform:rotate(540deg)}62.5%{transform:rotate(675deg)}75%{transform:rotate(810deg)}87.5%{transform:rotate(945deg)}100%{transform:rotate(1080deg)}}@keyframes mdui-comp-circular-progress-left-spin{0%{transform:rotate(265deg)}50%{transform:rotate(130deg)}100%{transform:rotate(265deg)}}@keyframes mdui-comp-circular-progress-right-spin{0%{transform:rotate(-265deg)}50%{transform:rotate(-130deg)}100%{transform:rotate(-265deg)}}`;
    e.CircularProgress = class extends Xt {
        constructor() {
            super(...arguments),
            this.max = 1
        }
        render() {
            const e = !u(this.value);
            return ft`<div class="progress ${ji({
                determinate: e,
                indeterminate: !e
            })}">${e ? this.renderDeterminate() : this.renderInDeterminate()}</div>`
        }
        renderDeterminate() {
            const e = this.value
              , t = 3.1415926
              , i = 20
              , o = 2 * t * 18
              , r = (1 - e / Math.max(this.max ?? e, e)) * o;
            return ft`<svg viewBox="0 0 ${40} ${40}"><circle class="track" cx="${i}" cy="${i}" r="${18}" stroke-width="${4}"></circle><circle class="circle" cx="${i}" cy="${i}" r="${18}" stroke-dasharray="${2 * t * 18}" stroke-dashoffset="${r}" stroke-width="${4}"></circle></svg>`
        }
        renderInDeterminate() {
            const e = 113.0973336
              , t = t=>ft`<svg class="circle" viewBox="0 0 ${40} ${40}"><circle cx="${20}" cy="${20}" r="${18}" stroke-dasharray="${e}" stroke-dashoffset="${56.5486668}" stroke-width="${t}"></circle></svg>`;
            return ft`<div class="layer"><div class="clipper left">${t(4)}</div><div class="gap-patch">${t(3.2)}</div><div class="clipper right">${t(4)}</div></div>`
        }
    }
    ,
    e.CircularProgress.styles = [Qt, Wi],
    Se([Ot({
        type: Number,
        reflect: !0
    })], e.CircularProgress.prototype, "max", void 0),
    Se([Ot({
        type: Number
    })], e.CircularProgress.prototype, "value", void 0),
    e.CircularProgress = Se([Lt("mdui-circular-progress")], e.CircularProgress);
    const Gi = Pe`:host{position:absolute;top:0;left:0;display:block;width:100%;height:100%;overflow:hidden;pointer-events:none}.surface{position:absolute;top:0;left:0;width:100%;height:100%;transition-duration:280ms;transition-property:background-color;pointer-events:none;transition-timing-function:var(--mdui-motion-easing-standard)}.hover{background-color:rgba(var(--mdui-comp-ripple-state-layer-color,var(--mdui-color-on-surface)),var(--mdui-state-layer-hover))}:host-context([focus-visible]) .focused{background-color:rgba(var(--mdui-comp-ripple-state-layer-color,var(--mdui-color-on-surface)),var(--mdui-state-layer-focus))}.dragged{background-color:rgba(var(--mdui-comp-ripple-state-layer-color,var(--mdui-color-on-surface)),var(--mdui-state-layer-dragged))}.wave{position:absolute;z-index:1;background-color:rgb(var(--mdui-comp-ripple-state-layer-color,var(--mdui-color-on-surface)));border-radius:50%;transform:translate3d(0,0,0) scale(.4);opacity:0;animation:225ms ease 0s 1 normal forwards running mdui-comp-ripple-radius-in,75ms ease 0s 1 normal forwards running mdui-comp-ripple-opacity-in;pointer-events:none}.out{transform:translate3d(var(--mdui-comp-ripple-transition-x,0),var(--mdui-comp-ripple-transition-y,0),0) scale(1);animation:150ms ease 0s 1 normal none running mdui-comp-ripple-opacity-out}@keyframes mdui-comp-ripple-radius-in{from{transform:translate3d(0,0,0) scale(.4);animation-timing-function:var(--mdui-motion-easing-standard)}to{transform:translate3d(var(--mdui-comp-ripple-transition-x,0),var(--mdui-comp-ripple-transition-y,0),0) scale(1)}}@keyframes mdui-comp-ripple-opacity-in{from{opacity:0;animation-timing-function:linear}to{opacity:var(--mdui-state-layer-pressed)}}@keyframes mdui-comp-ripple-opacity-out{from{animation-timing-function:linear;opacity:var(--mdui-state-layer-pressed)}to{opacity:0}}`;
    e.Ripple = class extends Xt {
        constructor() {
            super(...arguments),
            this.noRipple = !1,
            this.hover = !1,
            this.focused = !1,
            this.dragged = !1,
            this.surfaceRef = Li()
        }
        startPress(e) {
            if (this.noRipple)
                return;
            const t = M(this.surfaceRef.value)
              , i = t.innerHeight()
              , o = t.innerWidth();
            let r, n;
            if (e) {
                const s = "undefined" != typeof TouchEvent && e instanceof TouchEvent && e.touches.length ? e.touches[0] : e
                  , a = t.offset();
                if (s.pageX < a.left || s.pageX > a.left + o || s.pageY < a.top || s.pageY > a.top + i)
                    return;
                r = s.pageX - a.left,
                n = s.pageY - a.top
            } else
                r = o / 2,
                n = i / 2;
            const s = Math.max(Math.pow(Math.pow(i, 2) + Math.pow(o, 2), .5), 48)
              , a = o / 2 - r + "px"
              , l = i / 2 - n + "px"
              , c = `translate3d(${a}, ${l}, 0) scale(1)`;
            M('<div class="wave"></div>').css({
                width: s,
                height: s,
                marginTop: -s / 2,
                marginLeft: -s / 2,
                left: r,
                top: n
            }).each(((e,t)=>{
                t.style.setProperty("--mdui-comp-ripple-transition-x", a),
                t.style.setProperty("--mdui-comp-ripple-transition-y", l)
            }
            )).prependTo(this.surfaceRef.value).each(((e,t)=>t.clientLeft)).css("transform", c).on("animationend", (function(e) {
                "mdui-comp-ripple-radius-in" === e.animationName && M(this).data("filled", !0)
            }
            ))
        }
        endPress() {
            const e = M(this.surfaceRef.value).children().filter(((e,t)=>!M(t).data("removing"))).data("removing", !0)
              , t = e=>{
                e.addClass("out").each(((e,t)=>t.clientLeft)).on("animationend", (function() {
                    M(this).remove()
                }
                ))
            }
            ;
            e.filter(((e,t)=>!M(t).data("filled"))).on("animationend", (function(e) {
                "mdui-comp-ripple-radius-in" === e.animationName && t(M(this))
            }
            )),
            t(e.filter(((e,t)=>!!M(t).data("filled"))))
        }
        startHover() {
            this.hover = !0
        }
        endHover() {
            this.hover = !1
        }
        startFocus() {
            this.focused = !0
        }
        endFocus() {
            this.focused = !1
        }
        startDrag() {
            this.dragged = !0
        }
        endDrag() {
            this.dragged = !1
        }
        render() {
            return ft`<div ${Oi(this.surfaceRef)} class="surface ${ji({
                hover: this.hover,
                focused: this.focused,
                dragged: this.dragged
            })}"></div>`
        }
    }
    ,
    e.Ripple.styles = [Qt, Gi],
    Se([Ot({
        type: Boolean,
        reflect: !0,
        converter: wi,
        attribute: "no-ripple"
    })], e.Ripple.prototype, "noRipple", void 0),
    Se([zt()], e.Ripple.prototype, "hover", void 0),
    Se([zt()], e.Ripple.prototype, "focused", void 0),
    Se([zt()], e.Ripple.prototype, "dragged", void 0),
    e.Ripple = Se([Lt("mdui-ripple")], e.Ripple);
    const Yi = e=>{
        class t extends e {
            constructor() {
                super(...arguments),
                this.noRipple = !1,
                this.rippleIndex = void 0,
                this.getRippleIndex = ()=>this.rippleIndex
            }
            get rippleElement() {
                throw new Error("Must implement rippleElement getter!")
            }
            get rippleDisabled() {
                throw new Error("Must implement rippleDisabled getter!")
            }
            get rippleTarget() {
                return this
            }
            firstUpdated(e) {
                super.firstUpdated(e);
                const t = M(this.rippleTarget)
                  , i = e=>{
                    g(this.rippleTarget) && (this.rippleIndex = t.index(e.target))
                }
                ;
                (g(this.rippleTarget) ? this.rippleTarget : [this.rippleTarget]).forEach((e=>{
                    e.addEventListener("pointerdown", (e=>{
                        i(e),
                        this.startPress(e)
                    }
                    )),
                    e.addEventListener("pointerenter", (e=>{
                        i(e),
                        this.startHover(e)
                    }
                    )),
                    e.addEventListener("pointerleave", (e=>{
                        i(e),
                        this.endHover(e)
                    }
                    )),
                    e.addEventListener("focus", (e=>{
                        i(e),
                        this.startFocus()
                    }
                    )),
                    e.addEventListener("blur", (e=>{
                        i(e),
                        this.endFocus()
                    }
                    ))
                }
                ))
            }
            startHover(e) {
                "mouse" !== e.pointerType || this.isRippleDisabled() || (this.getRippleTarget().setAttribute("hover", ""),
                this.getRippleElement().startHover())
            }
            endHover(e) {
                "mouse" !== e.pointerType || this.isRippleDisabled() || (this.getRippleTarget().removeAttribute("hover"),
                this.getRippleElement().endHover())
            }
            isRippleDisabled() {
                const e = this.rippleDisabled;
                if (!Array.isArray(e))
                    return e;
                const t = this.getRippleIndex();
                return void 0 !== t ? e[t] : !!e.length && e[0]
            }
            getRippleElement() {
                const e = this.rippleElement;
                if (!g(e))
                    return e;
                const t = this.getRippleIndex();
                return void 0 !== t ? e[t] : e[0]
            }
            getRippleTarget() {
                const e = this.rippleTarget;
                if (!g(e))
                    return e;
                const t = this.getRippleIndex();
                return void 0 !== t ? e[t] : e[0]
            }
            startFocus() {
                this.isRippleDisabled() || this.getRippleElement().startFocus()
            }
            endFocus() {
                this.isRippleDisabled() || this.getRippleElement().endFocus()
            }
            startPress(e) {
                if (this.isRippleDisabled() || e.button)
                    return;
                const t = this.getRippleTarget();
                if (t.setAttribute("pressed", ""),
                ["touch", "pen"].includes(e.pointerType)) {
                    let i = !1
                      , o = setTimeout((()=>{
                        o = 0,
                        this.getRippleElement().startPress(e)
                    }
                    ), 70);
                    const r = ()=>{
                        o && (clearTimeout(o),
                        o = 0,
                        this.getRippleElement().startPress(e)),
                        i || (i = !0,
                        this.endPress()),
                        t.removeEventListener("pointerup", r),
                        t.removeEventListener("pointercancel", r)
                    }
                      , n = ()=>{
                        o && (clearTimeout(o),
                        o = 0),
                        t.removeEventListener("touchmove", n)
                    }
                    ;
                    t.addEventListener("touchmove", n),
                    t.addEventListener("pointerup", r),
                    t.addEventListener("pointercancel", r)
                }
                if ("mouse" === e.pointerType && 0 === e.button) {
                    const i = ()=>{
                        this.endPress(),
                        t.removeEventListener("pointerup", i),
                        t.removeEventListener("pointercancel", i),
                        t.removeEventListener("pointerleave", i)
                    }
                    ;
                    this.getRippleElement().startPress(e),
                    t.addEventListener("pointerup", i),
                    t.addEventListener("pointercancel", i),
                    t.addEventListener("pointerleave", i)
                }
            }
            endPress() {
                this.isRippleDisabled() || (this.getRippleTarget().removeAttribute("pressed"),
                this.getRippleElement().endPress())
            }
            startDrag() {
                this.isRippleDisabled() || this.getRippleElement().startDrag()
            }
            endDrag() {
                this.isRippleDisabled() || this.getRippleElement().endDrag()
            }
        }
        return Se([Ot({
            type: Boolean,
            reflect: !0,
            converter: wi,
            attribute: "no-ripple"
        })], t.prototype, "noRipple", void 0),
        t
    }
      , Xi = Pe`.button{position:relative;display:inline-flex;align-items:center;justify-content:center;height:100%;padding:0;overflow:hidden;color:inherit;font-size:inherit;font-family:inherit;font-weight:inherit;letter-spacing:inherit;white-space:nowrap;text-align:center;text-decoration:none;vertical-align:middle;background:0 0;border:none;outline:0;cursor:inherit;-webkit-user-select:none;user-select:none;touch-action:manipulation;zoom:1;-webkit-user-drag:none}`;
    class Ji extends (Hi(Yi(qi(Xt)))) {
        constructor() {
            super(...arguments),
            this.disabled = !1,
            this.loading = !1,
            this.name = "",
            this.value = "",
            this.type = "button",
            this.formNoValidate = !1,
            this.formController = new Vi(this)
        }
        get validity() {
            if (this.isButton())
                return this.focusElement.validity
        }
        get validationMessage() {
            if (this.isButton())
                return this.focusElement.validationMessage
        }
        get rippleDisabled() {
            return this.disabled || this.loading
        }
        get focusElement() {
            return this.isButton() ? this.renderRoot?.querySelector("._button") : this.focusDisabled ? this : this.renderRoot?.querySelector("._a")
        }
        get focusDisabled() {
            return this.disabled || this.loading
        }
        checkValidity() {
            if (this.isButton()) {
                const e = this.focusElement.checkValidity();
                return e || this.emit("invalid", {
                    bubbles: !1,
                    cancelable: !0,
                    composed: !1
                }),
                e
            }
            return !0
        }
        reportValidity() {
            if (this.isButton()) {
                const e = !this.focusElement.reportValidity();
                return e && this.emit("invalid", {
                    bubbles: !1,
                    cancelable: !0,
                    composed: !1
                }),
                !e
            }
            return !0
        }
        setCustomValidity(e) {
            this.isButton() && this.focusElement.setCustomValidity(e)
        }
        firstUpdated(e) {
            super.firstUpdated(e),
            this.addEventListener("click", (()=>{
                "submit" === this.type && this.formController.submit(this),
                "reset" === this.type && this.formController.reset(this)
            }
            ))
        }
        renderLoading() {
            return this.loading ? ft`<mdui-circular-progress part="loading"></mdui-circular-progress>` : Zt
        }
        renderButton({id: e, className: t, part: i, content: o=ft`<slot></slot>`}) {
            return ft`<button id="${Ft(e)}" class="${zi(["_button", t])}" part="${Ft(i)}" ?disabled="${this.rippleDisabled || this.focusDisabled}">${o}</button>`
        }
        isButton() {
            return !this.href
        }
    }
    Ji.styles = [Qt, Xi],
    Se([Ot({
        type: Boolean,
        reflect: !0,
        converter: wi
    })], Ji.prototype, "disabled", void 0),
    Se([Ot({
        type: Boolean,
        reflect: !0,
        converter: wi
    })], Ji.prototype, "loading", void 0),
    Se([Ot({
        reflect: !0
    })], Ji.prototype, "name", void 0),
    Se([Ot({
        reflect: !0
    })], Ji.prototype, "value", void 0),
    Se([Ot({
        reflect: !0
    })], Ji.prototype, "type", void 0),
    Se([Ot({
        reflect: !0
    })], Ji.prototype, "form", void 0),
    Se([Ot({
        reflect: !0,
        attribute: "formaction"
    })], Ji.prototype, "formAction", void 0),
    Se([Ot({
        reflect: !0,
        attribute: "formenctype"
    })], Ji.prototype, "formEnctype", void 0),
    Se([Ot({
        reflect: !0,
        attribute: "formmethod"
    })], Ji.prototype, "formMethod", void 0),
    Se([Ot({
        type: Boolean,
        reflect: !0,
        converter: wi,
        attribute: "formnovalidate"
    })], Ji.prototype, "formNoValidate", void 0),
    Se([Ot({
        reflect: !0,
        attribute: "formtarget"
    })], Ji.prototype, "formTarget", void 0);
    const Zi = Pe`:host{--shape-corner:var(--mdui-shape-corner-full);position:relative;display:inline-block;flex-shrink:0;overflow:hidden;text-align:center;border-radius:var(--shape-corner);cursor:pointer;-webkit-tap-highlight-color:transparent;transition:box-shadow var(--mdui-motion-duration-short4) var(--mdui-motion-easing-linear);min-width:3rem;height:2.5rem;color:rgb(var(--mdui-color-primary));font-size:var(--mdui-typescale-label-large-size);font-weight:var(--mdui-typescale-label-large-weight);letter-spacing:var(--mdui-typescale-label-large-tracking);line-height:var(--mdui-typescale-label-large-line-height)}.button{width:100%;padding:0 1rem}:host([full-width]){display:block}:host([variant=elevated]){box-shadow:var(--mdui-elevation-level1);background-color:rgb(var(--mdui-color-surface-container-low));--mdui-comp-ripple-state-layer-color:var(--mdui-color-primary)}:host([variant=filled]){color:rgb(var(--mdui-color-on-primary));background-color:rgb(var(--mdui-color-primary));--mdui-comp-ripple-state-layer-color:var(--mdui-color-on-primary)}:host([variant=tonal]){color:rgb(var(--mdui-color-on-secondary-container));background-color:rgb(var(--mdui-color-secondary-container));--mdui-comp-ripple-state-layer-color:var(
      --mdui-color-on-secondary-container
    )}:host([variant=outlined]){border:.0625rem solid rgb(var(--mdui-color-outline));--mdui-comp-ripple-state-layer-color:var(--mdui-color-primary)}:host([variant=text]){--mdui-comp-ripple-state-layer-color:var(--mdui-color-primary)}:host([variant=outlined][focus-visible]){border-color:rgb(var(--mdui-color-primary))}:host([variant=elevated][hover]){box-shadow:var(--mdui-elevation-level2)}:host([variant=filled][hover]),:host([variant=tonal][hover]){box-shadow:var(--mdui-elevation-level1)}:host([disabled]),:host([loading]){cursor:default;pointer-events:none}:host([disabled]){color:rgba(var(--mdui-color-on-surface),38%);box-shadow:var(--mdui-elevation-level0)}:host([variant=elevated][disabled]),:host([variant=filled][disabled]),:host([variant=tonal][disabled]){background-color:rgba(var(--mdui-color-on-surface),12%)}:host([variant=outlined][disabled]){border-color:rgba(var(--mdui-color-on-surface),12%)}.label{display:inline-flex;padding-right:.5rem;padding-left:.5rem}.end-icon,.icon{display:inline-flex;font-size:1.28571429em}.end-icon mdui-icon,.icon mdui-icon,::slotted([slot=end-icon]),::slotted([slot=icon]){font-size:inherit}mdui-circular-progress{display:inline-flex;width:1.125rem;height:1.125rem}:host([variant=filled]) mdui-circular-progress{stroke:rgb(var(--mdui-color-on-primary))}:host([variant=tonal]) mdui-circular-progress{stroke:rgb(var(--mdui-color-on-secondary-container))}:host([disabled]) mdui-circular-progress{stroke:rgba(var(--mdui-color-on-surface),38%)}`;
    e.Button = class extends Ji {
        constructor() {
            super(...arguments),
            this.variant = "filled",
            this.fullWidth = !1,
            this.rippleRef = Li()
        }
        get rippleElement() {
            return this.rippleRef.value
        }
        render() {
            return ft`<mdui-ripple ${Oi(this.rippleRef)} .noRipple="${this.noRipple}"></mdui-ripple>${this.isButton() ? this.renderButton({
                className: "button",
                part: "button",
                content: this.renderInner()
            }) : this.disabled || this.loading ? ft`<span part="button" class="button _a">${this.renderInner()}</span>` : this.renderAnchor({
                className: "button",
                part: "button",
                content: this.renderInner()
            })}`
        }
        renderIcon() {
            return this.loading ? this.renderLoading() : ft`<slot name="icon" part="icon" class="icon">${this.icon ? ft`<mdui-icon name="${this.icon}"></mdui-icon>` : Zt}</slot>`
        }
        renderLabel() {
            return ft`<slot part="label" class="label"></slot>`
        }
        renderEndIcon() {
            return ft`<slot name="end-icon" part="end-icon" class="end-icon">${this.endIcon ? ft`<mdui-icon name="${this.endIcon}"></mdui-icon>` : Zt}</slot>`
        }
        renderInner() {
            return [this.renderIcon(), this.renderLabel(), this.renderEndIcon()]
        }
    }
    ,
    e.Button.styles = [Ji.styles, Zi],
    Se([Ot({
        reflect: !0
    })], e.Button.prototype, "variant", void 0),
    Se([Ot({
        type: Boolean,
        reflect: !0,
        converter: wi,
        attribute: "full-width"
    })], e.Button.prototype, "fullWidth", void 0),
    Se([Ot({
        reflect: !0
    })], e.Button.prototype, "icon", void 0),
    Se([Ot({
        reflect: !0,
        attribute: "end-icon"
    })], e.Button.prototype, "endIcon", void 0),
    e.Button = Se([Lt("mdui-button")], e.Button);
    const Qi = Pe`:host{--shape-corner:var(--mdui-shape-corner-full);position:relative;display:inline-block;flex-shrink:0;overflow:hidden;text-align:center;border-radius:var(--shape-corner);cursor:pointer;-webkit-tap-highlight-color:transparent;font-size:1.5rem;width:2.5rem;height:2.5rem}:host([variant=standard]){color:rgb(var(--mdui-color-on-surface-variant));--mdui-comp-ripple-state-layer-color:var(--mdui-color-on-surface-variant)}:host([variant=filled]){color:rgb(var(--mdui-color-primary));background-color:rgb(var(--mdui-color-surface-container-highest));--mdui-comp-ripple-state-layer-color:var(--mdui-color-primary)}:host([variant=tonal]){color:rgb(var(--mdui-color-on-surface-variant));background-color:rgb(var(--mdui-color-surface-container-highest));--mdui-comp-ripple-state-layer-color:var(--mdui-color-on-surface-variant)}:host([variant=outlined]){border:.0625rem solid rgb(var(--mdui-color-outline));color:rgb(var(--mdui-color-on-surface-variant));--mdui-comp-ripple-state-layer-color:var(--mdui-color-on-surface-variant)}:host([variant=outlined][pressed]){color:rgb(var(--mdui-color-on-surface));--mdui-comp-ripple-state-layer-color:var(--mdui-color-on-surface)}:host([variant=standard][selected]){color:rgb(var(--mdui-color-primary));--mdui-comp-ripple-state-layer-color:var(--mdui-color-primary)}:host([variant=filled]:not([selectable])),:host([variant=filled][selected]){color:rgb(var(--mdui-color-on-primary));background-color:rgb(var(--mdui-color-primary));--mdui-comp-ripple-state-layer-color:var(--mdui-color-on-primary)}:host([variant=tonal]:not([selectable])),:host([variant=tonal][selected]){color:rgb(var(--mdui-color-on-secondary-container));background-color:rgb(var(--mdui-color-secondary-container));--mdui-comp-ripple-state-layer-color:var(
      --mdui-color-on-secondary-container
    )}:host([variant=outlined][selected]){border:none;color:rgb(var(--mdui-color-inverse-on-surface));background-color:rgb(var(--mdui-color-inverse-surface));--mdui-comp-ripple-state-layer-color:var(--mdui-color-inverse-on-surface)}:host([variant=filled][disabled]),:host([variant=outlined][disabled]),:host([variant=tonal][disabled]){background-color:rgba(var(--mdui-color-on-surface),.12);border-color:rgba(var(--mdui-color-on-surface),.12)}:host([disabled]),:host([loading]){cursor:default;pointer-events:none}:host([disabled]){color:rgba(var(--mdui-color-on-surface),.38)!important}:host([loading]) .button,:host([loading]) mdui-ripple{opacity:0}.button{float:left;width:100%}.icon,.selected-icon mdui-icon,::slotted(*){font-size:inherit}mdui-circular-progress{display:flex;position:absolute;top:calc(50% - 1.5rem / 2);left:calc(50% - 1.5rem / 2);width:1.5rem;height:1.5rem}:host([variant=filled]:not([disabled])) mdui-circular-progress{stroke:rgb(var(--mdui-color-on-primary))}:host([disabled]) mdui-circular-progress{stroke:rgba(var(--mdui-color-on-surface),38%)}`;
    e.ButtonIcon = class extends Ji {
        constructor() {
            super(...arguments),
            this.variant = "standard",
            this.selectable = !1,
            this.selected = !1,
            this.rippleRef = Li(),
            this.hasSlotController = new Jt(this,"[default]","selected-icon")
        }
        get rippleElement() {
            return this.rippleRef.value
        }
        onSelectedChange() {
            this.emit("change")
        }
        firstUpdated(e) {
            super.firstUpdated(e),
            this.addEventListener("click", (()=>{
                this.selectable && !this.disabled && (this.selected = !this.selected)
            }
            ))
        }
        render() {
            return ft`<mdui-ripple ${Oi(this.rippleRef)} .noRipple="${this.noRipple}"></mdui-ripple>${this.isButton() ? this.renderButton({
                className: "button",
                part: "button",
                content: this.renderIcon()
            }) : this.disabled || this.loading ? ft`<span part="button" class="button _a">${this.renderIcon()}</span>` : this.renderAnchor({
                className: "button",
                part: "button",
                content: this.renderIcon()
            })} ${this.renderLoading()}`
        }
        renderIcon() {
            const e = ()=>this.hasSlotController.test("[default]") ? ft`<slot></slot>` : this.icon ? ft`<mdui-icon part="icon" class="icon" name="${this.icon}"></mdui-icon>` : Zt;
            return this.selected ? (()=>this.hasSlotController.test("selected-icon") || this.selectedIcon ? ft`<slot name="selected-icon" part="selected-icon" class="selected-icon"><mdui-icon name="${this.selectedIcon}"></mdui-icon></slot>` : e())() : e()
        }
    }
    ,
    e.ButtonIcon.styles = [Ji.styles, Qi],
    Se([Ot({
        reflect: !0
    })], e.ButtonIcon.prototype, "variant", void 0),
    Se([Ot({
        reflect: !0
    })], e.ButtonIcon.prototype, "icon", void 0),
    Se([Ot({
        reflect: !0,
        attribute: "selected-icon"
    })], e.ButtonIcon.prototype, "selectedIcon", void 0),
    Se([Ot({
        type: Boolean,
        reflect: !0,
        converter: wi
    })], e.ButtonIcon.prototype, "selectable", void 0),
    Se([Ot({
        type: Boolean,
        reflect: !0,
        converter: wi
    })], e.ButtonIcon.prototype, "selected", void 0),
    Se([Ci("selected", !0)], e.ButtonIcon.prototype, "onSelectedChange", null),
    e.ButtonIcon = Se([Lt("mdui-button-icon")], e.ButtonIcon);
    const eo = Pe`:host{--shape-corner:var(--mdui-shape-corner-medium);position:relative;display:inline-block;overflow:hidden;border-radius:var(--shape-corner);-webkit-tap-highlight-color:transparent;transition:box-shadow var(--mdui-motion-duration-short4) var(--mdui-motion-easing-linear);--mdui-comp-ripple-state-layer-color:var(--mdui-color-on-surface)}:host([clickable]){cursor:pointer}:host([variant=elevated]){background-color:rgb(var(--mdui-color-surface-container-low));box-shadow:var(--mdui-elevation-level1)}:host([variant=filled]){background-color:rgb(var(--mdui-color-surface-container-highest))}:host([variant=outlined]){background-color:rgb(var(--mdui-color-surface));border:.0625rem solid rgb(var(--mdui-color-outline))}:host([variant=elevated][hover]){box-shadow:var(--mdui-elevation-level2)}:host([variant=filled][hover]),:host([variant=outlined][hover]){box-shadow:var(--mdui-elevation-level1)}:host([variant=elevated][dragged]),:host([variant=filled][dragged]),:host([variant=outlined][dragged]){box-shadow:var(--mdui-elevation-level3)}:host([disabled]){opacity:.38;cursor:default;-webkit-user-select:none;user-select:none}:host([variant=elevated][disabled]){background-color:rgb(var(--mdui-color-surface-variant));box-shadow:var(--mdui-elevation-level0)}:host([variant=filled][disabled]){background-color:rgb(var(--mdui-color-surface));box-shadow:var(--mdui-elevation-level1)}:host([variant=outlined][disabled]){box-shadow:var(--mdui-elevation-level0);border-color:rgba(var(--mdui-color-outline),.32)}.link{position:relative;display:inline-block;width:100%;height:100%;color:inherit;font-size:inherit;letter-spacing:inherit;text-decoration:none;touch-action:manipulation;-webkit-user-drag:none}`;
    e.Card = class extends (Hi(Yi(qi(Xt)))) {
        constructor() {
            super(...arguments),
            this.variant = "elevated",
            this.clickable = !1,
            this.disabled = !1,
            this.rippleRef = Li()
        }
        get rippleElement() {
            return this.rippleRef.value
        }
        get rippleDisabled() {
            return this.disabled || !this.href && !this.clickable
        }
        get focusElement() {
            return this.href && !this.disabled ? this.renderRoot.querySelector("._a") : this
        }
        get focusDisabled() {
            return this.rippleDisabled
        }
        render() {
            return ft`<mdui-ripple ${Oi(this.rippleRef)} .noRipple="${this.noRipple}"></mdui-ripple>${this.href && !this.disabled ? this.renderAnchor({
                className: "link",
                content: ft`<slot></slot>`
            }) : ft`<slot></slot>`}`
        }
    }
    ,
    e.Card.styles = [Qt, eo],
    Se([Ot({
        reflect: !0
    })], e.Card.prototype, "variant", void 0),
    Se([Ot({
        type: Boolean,
        reflect: !0,
        converter: wi
    })], e.Card.prototype, "clickable", void 0),
    Se([Ot({
        type: Boolean,
        reflect: !0,
        converter: wi
    })], e.Card.prototype, "disabled", void 0),
    e.Card = Se([Lt("mdui-card")], e.Card);
    const to = qt(class extends jt {
        constructor(e) {
            if (super(e),
            e.type !== Ut && e.type !== Vt && e.type !== Kt)
                throw Error("The `live` directive is not allowed on child or event bindings");
            if (!oi(e))
                throw Error("`live` bindings can only contain a single expression")
        }
        render(e) {
            return e
        }
        update(e, [t]) {
            if (t === vt || t === gt)
                return t;
            const i = e.element
              , o = e.name;
            if (e.type === Ut) {
                if (t === i[o])
                    return vt
            } else if (e.type === Kt) {
                if (!!t === i.hasAttribute(o))
                    return vt
            } else if (e.type === Vt && i.getAttribute(o) === t + "")
                return vt;
            return ((e,t=ri)=>{
                e._$AH = t
            }
            )(e),
            t
        }
    }
    );
    function io(e="value") {
        return (t,i)=>{
            const o = t.constructor
              , r = o.prototype.attributeChangedCallback;
            o.prototype.attributeChangedCallback = function(t, n, s) {
                const a = o.getPropertyOptions(e);
                if (t === (c(a.attribute) ? a.attribute : e)) {
                    const t = a.converter || je
                      , o = (l(t) ? t : t?.fromAttribute ?? je.fromAttribute)(s, a.type);
                    this[e] !== o && (this[i] = o)
                }
                r.call(this, t, n, s)
            }
        }
    }
    const oo = Pe`:host{display:inline-block;width:1em;height:1em;line-height:1;font-size:1.5rem}`
      , ro = e=>ft`<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="currentColor">${ii(e)}</svg>`;
    let no = class extends Mt {
        render() {
            return ro('<path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/>')
        }
    }
    ;
    no.styles = oo,
    no = Se([Lt("mdui-icon-check-box-outline-blank")], no);
    let so = class extends Mt {
        render() {
            return ro('<path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm-9 14-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>')
        }
    }
    ;
    so.styles = oo,
    so = Se([Lt("mdui-icon-check-box")], so);
    let ao = class extends Mt {
        render() {
            return ro('<path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"/>')
        }
    }
    ;
    ao.styles = oo,
    ao = Se([Lt("mdui-icon-indeterminate-check-box")], ao);
    const lo = Pe`:host{position:relative;display:inline-flex;cursor:pointer;-webkit-tap-highlight-color:transparent;border-radius:.125rem;font-size:var(--mdui-typescale-label-large-size);font-weight:var(--mdui-typescale-label-large-weight);letter-spacing:var(--mdui-typescale-label-large-tracking);line-height:var(--mdui-typescale-label-large-line-height)}label{display:inline-flex;align-items:center;width:100%;cursor:inherit;-webkit-user-select:none;user-select:none;touch-action:manipulation;zoom:1;-webkit-user-drag:none}input{position:absolute;padding:0;opacity:0;pointer-events:none;width:1.125rem;height:1.125rem;margin:0 0 0 .6875rem}.icon{display:flex;position:absolute;opacity:1;transform:scale(1);color:rgb(var(--mdui-color-on-surface));font-size:1.5rem;transition:color var(--mdui-motion-duration-short4) var(--mdui-motion-easing-standard)}.checked-icon,.indeterminate-icon{opacity:0;transform:scale(.5);transition-property:color,opacity,transform;transition-duration:var(--mdui-motion-duration-short4);transition-timing-function:var(--mdui-motion-easing-standard)}.icon .i,::slotted([slot=checked-icon]),::slotted([slot=indeterminate-icon]),::slotted([slot=unchecked-icon]){color:inherit;font-size:inherit}i{position:relative;display:flex;align-items:center;justify-content:center;flex-shrink:0;overflow:hidden;border-radius:50%;width:2.5rem;height:2.5rem;--mdui-comp-ripple-state-layer-color:var(--mdui-color-on-surface)}.label{display:flex;width:100%;padding-top:.625rem;padding-bottom:.625rem;color:rgb(var(--mdui-color-on-surface));transition:color var(--mdui-motion-duration-short4) var(--mdui-motion-easing-standard)}:host([checked]) i{--mdui-comp-ripple-state-layer-color:var(--mdui-color-primary)}:host([checked]) .icon{color:rgb(var(--mdui-color-primary))}:host([checked]) .indeterminate-icon{opacity:0;transform:scale(.5)}:host([checked]) .checked-icon{opacity:1;transform:scale(1)}:host([indeterminate]) i{--mdui-comp-ripple-state-layer-color:var(--mdui-color-primary)}:host([indeterminate]) .icon{color:rgb(var(--mdui-color-primary))}:host([indeterminate]) .checked-icon{opacity:0;transform:scale(.5)}:host([indeterminate]) .indeterminate-icon{opacity:1;transform:scale(1)}.invalid i{--mdui-comp-ripple-state-layer-color:var(--mdui-color-error)}.invalid .icon{color:rgb(var(--mdui-color-error))}.invalid .label{color:rgb(var(--mdui-color-error))}:host([disabled]){cursor:default;pointer-events:none}:host([disabled]) .icon{color:rgba(var(--mdui-color-on-surface),38%)}:host([disabled]) .label{color:rgba(var(--mdui-color-on-surface),38%)}:host([disabled][checked]) .unchecked-icon,:host([disabled][indeterminate]) .unchecked-icon{opacity:0}`;
    e.Checkbox = class extends (Yi(qi(Xt))) {
        constructor() {
            super(...arguments),
            this.disabled = !1,
            this.checked = !1,
            this.defaultChecked = !1,
            this.indeterminate = !1,
            this.required = !1,
            this.name = "",
            this.value = "on",
            this.invalid = !1,
            this.inputRef = Li(),
            this.rippleRef = Li(),
            this.formController = new Vi(this,{
                value: e=>e.checked ? e.value : void 0,
                defaultValue: e=>e.defaultChecked,
                setValue: (e,t)=>e.checked = t
            })
        }
        get validity() {
            return this.inputRef.value.validity
        }
        get validationMessage() {
            return this.inputRef.value.validationMessage
        }
        get rippleElement() {
            return this.rippleRef.value
        }
        get rippleDisabled() {
            return this.disabled
        }
        get focusElement() {
            return this.inputRef.value
        }
        get focusDisabled() {
            return this.disabled
        }
        async onDisabledChange() {
            await this.updateComplete,
            this.invalid = !this.inputRef.value.checkValidity()
        }
        async onCheckedChange() {
            await this.updateComplete;
            const e = this.formController.getForm();
            e && Fi.get(e)?.has(this) ? (this.invalid = !1,
            Fi.get(e).delete(this)) : this.invalid = !this.inputRef.value.checkValidity()
        }
        checkValidity() {
            const e = this.inputRef.value.checkValidity();
            return e || this.emit("invalid", {
                bubbles: !1,
                cancelable: !0,
                composed: !1
            }),
            e
        }
        reportValidity() {
            if (this.invalid = !this.inputRef.value.reportValidity(),
            this.invalid) {
                this.emit("invalid", {
                    bubbles: !1,
                    cancelable: !0,
                    composed: !1
                }) || (this.blur(),
                this.focus())
            }
            return !this.invalid
        }
        setCustomValidity(e) {
            this.inputRef.value.setCustomValidity(e),
            this.invalid = !this.inputRef.value.checkValidity()
        }
        render() {
            return ft`<label class="${ji({
                invalid: this.invalid
            })}"><input ${Oi(this.inputRef)} type="checkbox" name="${Ft(this.name)}" value="${Ft(this.value)}" .indeterminate="${to(this.indeterminate)}" .disabled="${this.disabled}" .checked="${to(this.checked)}" .required="${this.required}" @change="${this.onChange}"> <i part="control"><mdui-ripple ${Oi(this.rippleRef)} .noRipple="${this.noRipple}"></mdui-ripple><slot name="unchecked-icon" part="unchecked-icon" class="icon unchecked-icon">${this.uncheckedIcon ? ft`<mdui-icon name="${this.uncheckedIcon}" class="i"></mdui-icon>` : ft`<mdui-icon-check-box-outline-blank class="i"></mdui-icon-check-box-outline-blank>`}</slot><slot name="checked-icon" part="checked-icon" class="icon checked-icon">${this.checkedIcon ? ft`<mdui-icon name="${this.checkedIcon}" class="i"></mdui-icon>` : ft`<mdui-icon-check-box class="i"></mdui-icon-check-box>`}</slot><slot name="indeterminate-icon" part="indeterminate-icon" class="icon indeterminate-icon">${this.indeterminateIcon ? ft`<mdui-icon name="${this.indeterminateIcon}" class="i"></mdui-icon>` : ft`<mdui-icon-indeterminate-check-box class="i"></mdui-icon-indeterminate-check-box>`}</slot></i><slot part="label" class="label"></slot></label>`
        }
        onChange() {
            this.checked = this.inputRef.value.checked,
            this.indeterminate = !1,
            this.emit("change")
        }
    }
    ,
    e.Checkbox.styles = [Qt, lo],
    Se([Ot({
        type: Boolean,
        reflect: !0,
        converter: wi
    })], e.Checkbox.prototype, "disabled", void 0),
    Se([Ot({
        type: Boolean,
        reflect: !0,
        converter: wi
    })], e.Checkbox.prototype, "checked", void 0),
    Se([io("checked")], e.Checkbox.prototype, "defaultChecked", void 0),
    Se([Ot({
        type: Boolean,
        reflect: !0,
        converter: wi
    })], e.Checkbox.prototype, "indeterminate", void 0),
    Se([Ot({
        type: Boolean,
        reflect: !0,
        converter: wi
    })], e.Checkbox.prototype, "required", void 0),
    Se([Ot({
        reflect: !0
    })], e.Checkbox.prototype, "form", void 0),
    Se([Ot({
        reflect: !0
    })], e.Checkbox.prototype, "name", void 0),
    Se([Ot({
        reflect: !0
    })], e.Checkbox.prototype, "value", void 0),
    Se([Ot({
        reflect: !0,
        attribute: "unchecked-icon"
    })], e.Checkbox.prototype, "uncheckedIcon", void 0),
    Se([Ot({
        reflect: !0,
        attribute: "checked-icon"
    })], e.Checkbox.prototype, "checkedIcon", void 0),
    Se([Ot({
        reflect: !0,
        attribute: "indeterminate-icon"
    })], e.Checkbox.prototype, "indeterminateIcon", void 0),
    Se([zt()], e.Checkbox.prototype, "invalid", void 0),
    Se([Ci("disabled", !0), Ci("indeterminate", !0), Ci("required", !0)], e.Checkbox.prototype, "onDisabledChange", null),
    Se([Ci("checked", !0)], e.Checkbox.prototype, "onCheckedChange", null),
    e.Checkbox = Se([Lt("mdui-checkbox")], e.Checkbox);
    let co = class extends Mt {
        render() {
            return ro('<path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>')
        }
    }
    ;
    co.styles = oo,
    co = Se([Lt("mdui-icon-check")], co);
    let ho = class extends Mt {
        render() {
            return ro('<path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>')
        }
    }
    ;
    ho.styles = oo,
    ho = Se([Lt("mdui-icon-clear")], ho);
    const uo = Pe`:host{--shape-corner:var(--mdui-shape-corner-small);position:relative;display:inline-block;flex-shrink:0;overflow:hidden;border-radius:var(--shape-corner);cursor:pointer;-webkit-tap-highlight-color:transparent;transition:box-shadow var(--mdui-motion-duration-short4) var(--mdui-motion-easing-linear);height:2rem;background-color:rgb(var(--mdui-color-surface));border:.0625rem solid rgb(var(--mdui-color-outline));color:rgb(var(--mdui-color-on-surface-variant));font-size:var(--mdui-typescale-label-large-size);font-weight:var(--mdui-typescale-label-large-weight);letter-spacing:var(--mdui-typescale-label-large-tracking);line-height:var(--mdui-typescale-label-large-line-height);--mdui-comp-ripple-state-layer-color:var(--mdui-color-on-surface-variant)}.button{padding-right:.4375rem;padding-left:.4375rem}:host([variant=input]) .button{padding-right:.1875rem;padding-left:.1875rem}:host([selected]) .button{padding-right:.5rem;padding-left:.5rem}:host([selected][variant=input]) .button{padding-right:.25rem;padding-left:.25rem}:host([elevated]) .button{padding-right:.5rem;padding-left:.5rem}:host([variant=assist]){color:rgb(var(--mdui-color-on-surface));--mdui-comp-ripple-state-layer-color:var(--mdui-color-on-surface)}:host([elevated]){border-width:0;background-color:rgb(var(--mdui-color-surface-container-low));box-shadow:var(--mdui-elevation-level1)}:host([selected]){color:rgb(var(--mdui-color-on-secondary-container));background-color:rgb(var(--mdui-color-secondary-container));border-width:0;--mdui-comp-ripple-state-layer-color:var(
      --mdui-color-on-secondary-container
    )}:host([disabled]),:host([loading]){cursor:default;pointer-events:none}:host([disabled]){border-color:rgba(var(--mdui-color-on-surface),12%);color:rgba(var(--mdui-color-on-surface),38%);box-shadow:var(--mdui-elevation-level0)}:host([disabled][elevated]),:host([disabled][selected]){background-color:rgba(var(--mdui-color-on-surface),12%)}:host([selected][hover]){box-shadow:var(--mdui-elevation-level1)}:host([elevated][hover]){color:rgb(var(--mdui-color-on-secondary-container));box-shadow:var(--mdui-elevation-level2)}:host([variant=filter][hover]),:host([variant=input][hover]),:host([variant=suggestion][hover]){color:rgb(var(--mdui-color-on-surface-variant))}:host([variant=filter][focus-visible]),:host([variant=input][focus-visible]),:host([variant=suggestion][focus-visible]){border-color:rgb(var(--mdui-color-on-surface-variant))}:host([dragged]),:host([dragged][hover]){box-shadow:var(--mdui-elevation-level4)}.button{overflow:visible}.label{display:inline-flex;padding-right:.5rem;padding-left:.5rem}.end-icon,.icon,.selected-icon{display:inline-flex;font-size:1.28571429em;color:rgb(var(--mdui-color-on-surface-variant))}:host([variant=assist]) .end-icon,:host([variant=assist]) .icon,:host([variant=assist]) .selected-icon{color:rgb(var(--mdui-color-primary))}:host([selected]) .end-icon,:host([selected]) .icon,:host([selected]) .selected-icon{color:rgb(var(--mdui-color-on-secondary-container))}:host([disabled]) .end-icon,:host([disabled]) .icon,:host([disabled]) .selected-icon{opacity:.38;color:rgb(var(--mdui-color-on-surface))}.end-icon .i,.icon .i,.selected-icon .i,::slotted([slot=end-icon]),::slotted([slot=icon]),::slotted([slot=selected-icon]){font-size:inherit}:host([variant=input]) .has-icon .icon,:host([variant=input]) .has-icon .selected-icon,:host([variant=input]) .has-icon mdui-circular-progress{margin-left:.25rem}:host([variant=input]) .has-end-icon .end-icon{margin-right:.25rem}mdui-circular-progress{display:inline-flex;width:1.125rem;height:1.125rem}:host([disabled]) mdui-circular-progress{stroke:rgba(var(--mdui-color-on-surface),38%)}::slotted(mdui-avatar[slot=end-icon]),::slotted(mdui-avatar[slot=icon]),::slotted(mdui-avatar[slot=selected-icon]){width:1.5rem;height:1.5rem}:host([disabled]) ::slotted(mdui-avatar[slot=end-icon]),:host([disabled]) ::slotted(mdui-avatar[slot=icon]),:host([disabled]) ::slotted(mdui-avatar[slot=selected-icon]){opacity:.38}::slotted(mdui-avatar[slot=icon]),::slotted(mdui-avatar[slot=selected-icon]){margin-left:-.25rem;margin-right:-.125rem}::slotted(mdui-avatar[slot=end-icon]){margin-right:-.25rem;margin-left:-.125rem}.delete-icon{display:inline-flex;font-size:1.28571429em;transition:background-color var(--mdui-motion-duration-short4) var(--mdui-motion-easing-linear);border-radius:var(--mdui-shape-corner-full);margin-right:-.25rem;margin-left:-.25rem;padding:.25rem;color:rgb(var(--mdui-color-on-surface-variant))}.delete-icon:hover{background-color:rgba(var(--mdui-color-on-surface-variant),12%)}.has-end-icon .delete-icon{margin-left:.25rem}:host([variant=assiat]) .delete-icon{color:rgb(var(--mdui-color-primary))}:host([variant=input]) .delete-icon{margin-right:.0625rem}:host([disabled]) .delete-icon{color:rgba(var(--mdui-color-on-surface),38%)}.delete-icon .i,::slotted([slot=delete-icon]){font-size:inherit}::slotted(mdui-avatar[slot=delete-icon]){width:1.125rem;height:1.125rem}`;
    e.Chip = class extends Ji {
        constructor() {
            super(),
            this.variant = "assist",
            this.elevated = !1,
            this.selectable = !1,
            this.selected = !1,
            this.deletable = !1,
            this.rippleRef = Li(),
            this.hasSlotController = new Jt(this,"icon","selected-icon","end-icon"),
            this.onClick = this.onClick.bind(this),
            this.onKeyDown = this.onKeyDown.bind(this)
        }
        get rippleElement() {
            return this.rippleRef.value
        }
        onSelectedChange() {
            this.emit("change")
        }
        firstUpdated(e) {
            super.firstUpdated(e),
            this.addEventListener("click", this.onClick),
            this.addEventListener("keydown", this.onKeyDown)
        }
        render() {
            const e = this.icon || this.hasSlotController.test("icon")
              , t = this.endIcon || this.hasSlotController.test("end-icon")
              , i = this.selectedIcon || ["assist", "filter"].includes(this.variant) || e || this.hasSlotController.test("selected-icon")
              , o = zi({
                button: !0,
                "has-icon": this.loading || !this.selected && e || this.selected && i,
                "has-end-icon": t
            });
            return ft`<mdui-ripple ${Oi(this.rippleRef)} .noRipple="${this.noRipple}"></mdui-ripple>${this.isButton() ? this.renderButton({
                className: o,
                part: "button",
                content: this.renderInner()
            }) : this.disabled || this.loading ? ft`<span part="button" class="${o} _a">${this.renderInner()}</span>` : this.renderAnchor({
                className: o,
                part: "button",
                content: this.renderInner()
            })}`
        }
        onClick() {
            this.disabled || this.loading || this.selectable && (this.selected = !this.selected)
        }
        onKeyDown(e) {
            this.disabled || this.loading || (this.selectable && " " === e.key && (e.preventDefault(),
            this.selected = !this.selected),
            this.deletable && ["Delete", "Backspace"].includes(e.key) && this.emit("delete"))
        }
        onDelete(e) {
            e.stopPropagation(),
            this.emit("delete")
        }
        renderIcon() {
            if (this.loading)
                return this.renderLoading();
            const e = ()=>this.icon ? ft`<mdui-icon name="${this.icon}" class="i"></mdui-icon>` : Zt;
            return this.selected ? ft`<slot name="selected-icon" part="selected-icon" class="selected-icon">${(()=>this.selectedIcon ? ft`<mdui-icon name="${this.selectedIcon}" class="i"></mdui-icon>` : "assist" === this.variant || "filter" === this.variant ? ft`<mdui-icon-check class="i"></mdui-icon-check>` : e())()}</slot>` : ft`<slot name="icon" part="icon" class="icon">${e()}</slot>`
        }
        renderLabel() {
            return ft`<slot part="label" class="label"></slot>`
        }
        renderEndIcon() {
            return ft`<slot name="end-icon" part="end-icon" class="end-icon">${this.endIcon ? ft`<mdui-icon name="${this.endIcon}" class="i"></mdui-icon>` : Zt}</slot>`
        }
        renderDeleteIcon() {
            return this.deletable ? ft`<slot name="delete-icon" part="delete-icon" class="delete-icon" @click="${this.onDelete}">${this.deleteIcon ? ft`<mdui-icon name="${this.deleteIcon}" class="i"></mdui-icon>` : ft`<mdui-icon-clear class="i"></mdui-icon-clear>`}</slot>` : Zt
        }
        renderInner() {
            return [this.renderIcon(), this.renderLabel(), this.renderEndIcon(), this.renderDeleteIcon()]
        }
    }
    ,
    e.Chip.styles = [Ji.styles, uo],
    Se([Ot({
        reflect: !0
    })], e.Chip.prototype, "variant", void 0),
    Se([Ot({
        type: Boolean,
        reflect: !0,
        converter: wi
    })], e.Chip.prototype, "elevated", void 0),
    Se([Ot({
        type: Boolean,
        reflect: !0,
        converter: wi
    })], e.Chip.prototype, "selectable", void 0),
    Se([Ot({
        type: Boolean,
        reflect: !0,
        converter: wi
    })], e.Chip.prototype, "selected", void 0),
    Se([Ot({
        type: Boolean,
        reflect: !0,
        converter: wi
    })], e.Chip.prototype, "deletable", void 0),
    Se([Ot({
        reflect: !0
    })], e.Chip.prototype, "icon", void 0),
    Se([Ot({
        reflect: !0,
        attribute: "selected-icon"
    })], e.Chip.prototype, "selectedIcon", void 0),
    Se([Ot({
        reflect: !0,
        attribute: "end-icon"
    })], e.Chip.prototype, "endIcon", void 0),
    Se([Ot({
        reflect: !0,
        attribute: "delete-icon"
    })], e.Chip.prototype, "deleteIcon", void 0),
    Se([Ci("selected", !0)], e.Chip.prototype, "onSelectedChange", null),
    e.Chip = Se([Lt("mdui-chip")], e.Chip);
    const po = (e,t)=>{
        if (e.length !== t.length)
            return !1;
        const i = [...e].sort()
          , o = [...t].sort();
        return i.every(((e,t)=>e === o[t]))
    }
      , mo = Pe`:host{display:block}`;
    e.Collapse = class extends Xt {
        constructor() {
            super(...arguments),
            this.accordion = !1,
            this.disabled = !1,
            this.activeKeys = [],
            this.isInitial = !0,
            this.definedController = new ki(this,{
                relatedElements: ["mdui-collapse-item"]
            })
        }
        async onActiveKeysChange() {
            await this.definedController.whenDefined();
            const e = this.accordion ? this.items.find((e=>this.activeKeys.includes(e.key)))?.value : this.items.filter((e=>this.activeKeys.includes(e.key))).map((e=>e.value));
            this.setValue(e),
            this.isInitial || this.emit("change")
        }
        async onValueChange() {
            if (this.isInitial = !this.hasUpdated,
            await this.definedController.whenDefined(),
            this.accordion) {
                const e = this.value;
                if (e) {
                    const t = this.items.find((t=>t.value === e));
                    this.setActiveKeys(t ? [t.key] : [])
                } else
                    this.setActiveKeys([])
            } else {
                const e = this.value;
                if (e.length) {
                    const t = this.items.filter((t=>e.includes(t.value))).map((e=>e.key));
                    this.setActiveKeys(t)
                } else
                    this.setActiveKeys([])
            }
            this.updateItems()
        }
        render() {
            return ft`<slot @slotchange="${this.onSlotChange}" @click="${this.onClick}"></slot>`
        }
        setActiveKeys(e) {
            po(this.activeKeys, e) || (this.activeKeys = e)
        }
        setValue(e) {
            this.accordion || u(this.value) || u(e) ? this.value = e : po(this.value, e) || (this.value = e)
        }
        onClick(e) {
            if (this.disabled)
                return;
            if (e.button)
                return;
            const t = e.target.closest("mdui-collapse-item");
            if (!t || t.disabled)
                return;
            const i = e.composedPath();
            if ((!t.trigger || i.find((e=>v(e) && M(e).is(t.trigger)))) && i.find((e=>v(e) && e.part.contains("header")))) {
                if (this.accordion)
                    this.activeKeys.includes(t.key) ? this.setActiveKeys([]) : this.setActiveKeys([t.key]);
                else {
                    const e = [...this.activeKeys];
                    e.includes(t.key) ? e.splice(e.indexOf(t.key), 1) : e.push(t.key),
                    this.setActiveKeys(e)
                }
                this.isInitial = !1,
                this.updateItems()
            }
        }
        async onSlotChange() {
            await this.definedController.whenDefined(),
            this.updateItems()
        }
        updateItems() {
            this.items.forEach((e=>{
                e.active = this.activeKeys.includes(e.key),
                e.isInitial = this.isInitial
            }
            ))
        }
    }
    ,
    e.Collapse.styles = [Qt, mo],
    Se([Ot({
        type: Boolean,
        reflect: !0,
        converter: wi
    })], e.Collapse.prototype, "accordion", void 0),
    Se([Ot()], e.Collapse.prototype, "value", void 0),
    Se([Ot({
        type: Boolean,
        reflect: !0,
        converter: wi
    })], e.Collapse.prototype, "disabled", void 0),
    Se([zt()], e.Collapse.prototype, "activeKeys", void 0),
    Se([Nt({
        selector: "mdui-collapse-item",
        flatten: !0
    })], e.Collapse.prototype, "items", void 0),
    Se([Ci("activeKeys", !0)], e.Collapse.prototype, "onActiveKeysChange", null),
    Se([Ci("value")], e.Collapse.prototype, "onValueChange", null),
    e.Collapse = Se([Lt("mdui-collapse")], e.Collapse);
    const fo = Pe`:host{display:flex;flex-direction:column}.header{display:block}.body{display:block;overflow:hidden;transition:height var(--mdui-motion-duration-short4) var(--mdui-motion-easing-emphasized)}.body.opened{overflow:visible}.body.active{transition-duration:var(--mdui-motion-duration-medium4)}`;
    function vo(e, t, i) {
        return e ? t(e) : i?.(e)
    }
    function go(e, t, i) {
        return e ? new Promise((o=>{
            if (i.duration === 1 / 0)
                throw new Error("Promise-based animations must be finite.");
            d(i.duration) && isNaN(i.duration) && (i.duration = 0),
            "" === i.easing && (i.easing = "linear");
            const r = e.animate(t, i);
            r.addEventListener("cancel", o, {
                once: !0
            }),
            r.addEventListener("finish", o, {
                once: !0
            })
        }
        )) : Promise.resolve()
    }
    function bo(e) {
        return e ? Promise.all(e.getAnimations().map((e=>new Promise((t=>{
            const i = requestAnimationFrame(t);
            e.addEventListener("cancel", (()=>i), {
                once: !0
            }),
            e.addEventListener("finish", (()=>i), {
                once: !0
            }),
            e.cancel()
        }
        ))))) : Promise.resolve()
    }
    function yo(e) {
        const t = s()
          , i = e.localName;
        return "-1" !== e.getAttribute("tabindex") && (!e.hasAttribute("disabled") && ((!e.hasAttribute("aria-disabled") || "false" === e.getAttribute("aria-disabled")) && (!("input" === i && "radio" === e.getAttribute("type") && !e.hasAttribute("checked")) && (null !== e.offsetParent && ("hidden" !== t.getComputedStyle(e).visibility && (!("audio" !== i && "video" !== i || !e.hasAttribute("controls")) || (!!e.hasAttribute("tabindex") || (!(!e.hasAttribute("contenteditable") || "false" === e.getAttribute("contenteditable")) || ["button", "input", "select", "textarea", "a", "audio", "video", "summary"].includes(i)))))))))
    }
    e.CollapseItem = class extends Xt {
        constructor() {
            super(...arguments),
            this.disabled = !1,
            this.active = !1,
            this.state = "closed",
            this.isInitial = !0,
            this.key = Ri(),
            this.bodyRef = Li()
        }
        onActiveChange() {
            this.isInitial ? (this.state = this.active ? "opened" : "closed",
            this.hasUpdated && this.updateBodyHeight()) : (this.state = this.active ? "open" : "close",
            this.emit(this.state),
            this.updateBodyHeight())
        }
        firstUpdated(e) {
            super.firstUpdated(e),
            this.updateBodyHeight()
        }
        render() {
            return ft`<slot name="header" part="header" class="header">${this.header}</slot><slot part="body" class="body ${ji({
                opened: "opened" === this.state,
                active: this.active
            })}" ${Oi(this.bodyRef)} @transitionend="${this.onTransitionEnd}"></slot>`
        }
        onTransitionEnd(e) {
            e.target === this.bodyRef.value && (this.state = this.active ? "opened" : "closed",
            this.emit(this.state),
            this.updateBodyHeight())
        }
        updateBodyHeight() {
            const e = this.bodyRef.value.scrollHeight;
            "close" === this.state && (M(this.bodyRef.value).height(e),
            this.bodyRef.value.clientLeft),
            M(this.bodyRef.value).height("opened" === this.state ? "auto" : "open" === this.state ? e : 0)
        }
    }
    ,
    e.CollapseItem.styles = [Qt, fo],
    Se([Ot({
        reflect: !0
    })], e.CollapseItem.prototype, "value", void 0),
    Se([Ot({
        reflect: !0
    })], e.CollapseItem.prototype, "header", void 0),
    Se([Ot({
        type: Boolean,
        reflect: !0,
        converter: wi
    })], e.CollapseItem.prototype, "disabled", void 0),
    Se([Ot()], e.CollapseItem.prototype, "trigger", void 0),
    Se([zt()], e.CollapseItem.prototype, "active", void 0),
    Se([zt()], e.CollapseItem.prototype, "state", void 0),
    Se([Ci("active")], e.CollapseItem.prototype, "onActiveChange", null),
    e.CollapseItem = Se([Lt("mdui-collapse-item")], e.CollapseItem);
    let wo = [];
    class ko {
        constructor(e) {
            this.tabDirection = "forward",
            this.element = e,
            this.handleFocusIn = this.handleFocusIn.bind(this),
            this.handleKeyDown = this.handleKeyDown.bind(this),
            this.handleKeyUp = this.handleKeyUp.bind(this)
        }
        activate() {
            wo.push(this.element),
            document.addEventListener("focusin", this.handleFocusIn),
            document.addEventListener("keydown", this.handleKeyDown),
            document.addEventListener("keyup", this.handleKeyUp)
        }
        deactivate() {
            wo = wo.filter((e=>e !== this.element)),
            document.removeEventListener("focusin", this.handleFocusIn),
            document.removeEventListener("keydown", this.handleKeyDown),
            document.removeEventListener("keyup", this.handleKeyUp)
        }
        isActive() {
            return wo[wo.length - 1] === this.element
        }
        checkFocus() {
            if (this.isActive() && !this.element.matches(":focus-within")) {
                const {start: e, end: t} = function(e) {
                    const t = [];
                    return function e(i) {
                        i instanceof HTMLElement && (t.push(i),
                        null !== i.shadowRoot && "open" === i.shadowRoot.mode && e(i.shadowRoot)),
                        [...i.children].forEach((t=>e(t)))
                    }(e),
                    {
                        start: t.find((e=>yo(e))) ?? null,
                        end: t.reverse().find((e=>yo(e))) ?? null
                    }
                }(this.element)
                  , i = "forward" === this.tabDirection ? e : t;
                "function" == typeof i?.focus && i.focus({
                    preventScroll: !0
                })
            }
        }
        handleFocusIn() {
            this.checkFocus()
        }
        handleKeyDown(e) {
            "Tab" === e.key && e.shiftKey && (this.tabDirection = "backward"),
            requestAnimationFrame((()=>this.checkFocus()))
        }
        handleKeyUp() {
            this.tabDirection = "forward"
        }
    }
    const Co = (e,t)=>{
        const i = `--mdui-motion-easing-${t}`;
        return M(e).css(i).trim()
    }
      , xo = (e,t)=>{
        const i = `--mdui-motion-duration-${t}`
          , o = M(e).css(i).trim().toLowerCase();
        return o.endsWith("ms") ? parseFloat(o) : 1e3 * parseFloat(o)
    }
    ;
    let $o;
    const Ro = e=>{
        if (u(document))
            return 0;
        if (void 0 === $o) {
            const e = M("<div>").css({
                width: "100%",
                height: "200px"
            })
              , t = M("<div>").css({
                position: "absolute",
                top: "0",
                left: "0",
                pointerEvents: "none",
                visibility: "hidden",
                width: "200px",
                height: "150px",
                overflow: "hidden"
            }).append(e).appendTo(document.body)
              , i = e[0].offsetWidth;
            t.css("overflow", "scroll");
            let o = e[0].offsetWidth;
            i === o && (o = t[0].clientWidth),
            t.remove(),
            $o = i - o
        }
        return $o
    }
      , Io = new WeakMap
      , So = "mdui-lock-screen"
      , Eo = (e,t)=>{
        const i = r();
        t ??= i.documentElement,
        Io.has(t) || Io.set(t, new Set);
        Io.get(t).add(e);
        const o = M(t);
        (e=>e.scrollHeight > e.clientHeight)(t) && o.css("width", `calc(100% - ${Ro()}px)`),
        o.addClass(So)
    }
      , To = (e,t)=>{
        const i = r();
        t ??= i.documentElement;
        const o = Io.get(t);
        o && (o.delete(e),
        0 === o.size && (Io.delete(t),
        M(t).removeClass(So).width("")))
    }
      , Ao = (e,t,i)=>{
        let o = e[0];
        for (let r = 1; r < e.length; r++)
            o += t[i ? i[r - 1] : r - 1],
            o += e[r];
        return o
    }
      , Do = e=>{
        return "string" != typeof (t = e) && "strTag"in t ? Ao(e.strings, e.values) : e;
        var t
    }
      , Mo = "lit-localize-status";
    class Po {
        constructor() {
            this.settled = !1,
            this.promise = new Promise(((e,t)=>{
                this._resolve = e,
                this._reject = t
            }
            ))
        }
        resolve(e) {
            this.settled = !0,
            this._resolve(e)
        }
        reject(e) {
            this.settled = !0,
            this._reject(e)
        }
    }
    const Lo = [];
    for (let e = 0; e < 256; e++)
        Lo[e] = (e >> 4 & 15).toString(16) + (15 & e).toString(16);
    const _o = ""
      , Bo = "h"
      , Oo = "s";
    function zo(e, t) {
        return (t ? Bo : Oo) + function(e) {
            let t = 0
              , i = 8997
              , o = 0
              , r = 33826
              , n = 0
              , s = 40164
              , a = 0
              , l = 52210;
            for (let c = 0; c < e.length; c++)
                i ^= e.charCodeAt(c),
                t = 435 * i,
                o = 435 * r,
                n = 435 * s,
                a = 435 * l,
                n += i << 8,
                a += r << 8,
                o += t >>> 16,
                i = 65535 & t,
                n += o >>> 16,
                r = 65535 & o,
                l = a + (n >>> 16) & 65535,
                s = 65535 & n;
            return Lo[l >> 8] + Lo[255 & l] + Lo[s >> 8] + Lo[255 & s] + Lo[r >> 8] + Lo[255 & r] + Lo[i >> 8] + Lo[255 & i]
        }("string" == typeof e ? e : e.join(_o))
    }
    const No = new WeakMap
      , Fo = new Map;
    function Vo(e, t, i) {
        if (e) {
            const o = i?.id ?? function(e) {
                const t = "string" == typeof e ? e : e.strings;
                let i = Fo.get(t);
                void 0 === i && (i = zo(t, "string" != typeof e && !("strTag"in e)),
                Fo.set(t, i));
                return i
            }(t)
              , r = e[o];
            if (r) {
                if ("string" == typeof r)
                    return r;
                if ("strTag"in r)
                    return Ao(r.strings, t.values, r.values);
                {
                    let e = No.get(r);
                    return void 0 === e && (e = r.values,
                    No.set(r, e)),
                    {
                        ...r,
                        values: e.map((e=>t.values[e]))
                    }
                }
            }
        }
        return Do(t)
    }
    function Ho(e) {
        window.dispatchEvent(new CustomEvent(Mo,{
            detail: e
        }))
    }
    let Uo, Ko, qo, jo, Wo, Go = "", Yo = new Po;
    Yo.resolve();
    let Xo = 0;
    const Jo = e=>(function(e) {
        if (tr)
            throw new Error("lit-localize can only be configured once");
        er = e,
        tr = !0
    }(((e,t)=>Vo(Wo, e, t))),
    Go = Ko = e.sourceLocale,
    qo = new Set(e.targetLocales),
    qo.add(e.sourceLocale),
    jo = e.loadLocale,
    {
        getLocale: Zo,
        setLocale: Qo
    })
      , Zo = ()=>Go
      , Qo = e=>{
        if (e === (Uo ?? Go))
            return Yo.promise;
        if (!qo || !jo)
            throw new Error("Internal error");
        if (!qo.has(e))
            throw new Error("Invalid locale code");
        Xo++;
        const t = Xo;
        Uo = e,
        Yo.settled && (Yo = new Po),
        Ho({
            status: "loading",
            loadingLocale: e
        });
        return (e === Ko ? Promise.resolve({
            templates: void 0
        }) : jo(e)).then((i=>{
            Xo === t && (Go = e,
            Uo = void 0,
            Wo = i.templates,
            Ho({
                status: "ready",
                readyLocale: e
            }),
            Yo.resolve())
        }
        ), (i=>{
            Xo === t && (Ho({
                status: "error",
                errorLocale: e,
                errorMessage: i.toString()
            }),
            Yo.reject(i))
        }
        )),
        Yo.promise
    }
    ;
    let er = Do
      , tr = !1;
    const ir = ["ar-eg", "az-az", "be-by", "bg-bg", "bn-bd", "ca-es", "cs-cz", "da-dk", "de-de", "el-gr", "en-gb", "es-es", "et-ee", "fa-ir", "fi-fi", "fr-be", "fr-ca", "fr-fr", "ga-ie", "gl-es", "he-il", "hi-in", "hr-hr", "hu-hu", "hy-am", "id-id", "is-is", "it-it", "ja-jp", "ka-ge", "kk-kz", "km-kh", "kmr-iq", "kn-in", "ko-kr", "lt-lt", "lv-lv", "mk-mk", "ml-in", "mn-mn", "ms-my", "nb-no", "ne-np", "nl-be", "nl-nl", "pl-pl", "pt-br", "pt-pt", "ro-ro", "ru-ru", "sk-sk", "sl-si", "sr-rs", "sv-se", "ta-in", "th-th", "tr-tr", "uk-ua", "ur-pk", "vi-vn", "zh-cn", "zh-hk", "zh-tw"]
      , or = "You must call `loadLocale` first to set up the localized template.";
    let rr, nr;
    let sr = !1;
    const ar = new Map
      , lr = (e,t)=>{
        if (!sr) {
            sr = !0;
            s().addEventListener(Mo, (e=>{
                "ready" === e.detail.status && ar.forEach((e=>{
                    e.forEach((e=>e()))
                }
                ))
            }
            ))
        }
        const i = ar.get(e) || [];
        i.push(t),
        ar.set(e, i)
    }
      , cr = e=>{
        ar.delete(e)
    }
      , dr = Pe`:host{--shape-corner:var(--mdui-shape-corner-extra-large);--z-index:2300;position:fixed;z-index:var(--z-index);display:none;align-items:center;justify-content:center;inset:0;padding:3rem}::slotted(mdui-top-app-bar[slot=header]){position:absolute;border-top-left-radius:var(--mdui-shape-corner-extra-large);border-top-right-radius:var(--mdui-shape-corner-extra-large);background-color:rgb(var(--mdui-color-surface-container-high))}:host([fullscreen]){--shape-corner:var(--mdui-shape-corner-none);padding:0}:host([fullscreen]) ::slotted(mdui-top-app-bar[slot=header]){border-top-left-radius:var(--mdui-shape-corner-none);border-top-right-radius:var(--mdui-shape-corner-none)}.overlay{position:fixed;inset:0;background-color:rgba(var(--mdui-color-scrim),.4)}.panel{--mdui-color-background:var(--mdui-color-surface-container-high);position:relative;display:flex;flex-direction:column;max-height:100%;border-radius:var(--shape-corner);outline:0;transform-origin:top;min-width:17.5rem;max-width:35rem;padding:1.5rem;background-color:rgb(var(--mdui-color-surface-container-high));box-shadow:var(--mdui-elevation-level3)}:host([fullscreen]) .panel{width:100%;max-width:100%;height:100%;max-height:100%;box-shadow:var(--mdui-elevation-level0)}.header{display:flex;flex-direction:column}.has-icon .header{align-items:center}.icon{display:flex;color:rgb(var(--mdui-color-secondary));font-size:1.5rem}.icon mdui-icon,::slotted([slot=icon]){font-size:inherit}.headline{display:flex;color:rgb(var(--mdui-color-on-surface));font-size:var(--mdui-typescale-headline-small-size);font-weight:var(--mdui-typescale-headline-small-weight);letter-spacing:var(--mdui-typescale-headline-small-tracking);line-height:var(--mdui-typescale-headline-small-line-height)}.icon+.headline{padding-top:1rem}.body{overflow:auto}.header+.body{margin-top:1rem}.description{display:flex;color:rgb(var(--mdui-color-on-surface-variant));font-size:var(--mdui-typescale-body-medium-size);font-weight:var(--mdui-typescale-body-medium-weight);letter-spacing:var(--mdui-typescale-body-medium-tracking);line-height:var(--mdui-typescale-body-medium-line-height)}:host([fullscreen]) .description{color:rgb(var(--mdui-color-on-surface))}.has-description.has-default .description{margin-bottom:1rem}.action{display:flex;justify-content:flex-end;padding-top:1.5rem}.action::slotted(:not(:first-child)){margin-left:.5rem}:host([stacked-actions]) .action{flex-direction:column;align-items:end}:host([stacked-actions]) .action::slotted(:not(:first-child)){margin-left:0;margin-top:.5rem}`;
    e.Dialog = class extends Xt {
        constructor() {
            super(...arguments),
            this.open = !1,
            this.fullscreen = !1,
            this.closeOnEsc = !1,
            this.closeOnOverlayClick = !1,
            this.stackedActions = !1,
            this.overlayRef = Li(),
            this.panelRef = Li(),
            this.bodyRef = Li(),
            this.hasSlotController = new Jt(this,"header","icon","headline","description","action","[default]"),
            this.definedController = new ki(this,{
                relatedElements: ["mdui-top-app-bar"]
            })
        }
        async onOpenChange() {
            const e = this.hasUpdated;
            if (!this.open && !e)
                return;
            await this.definedController.whenDefined(),
            e || await this.updateComplete;
            const t = Array.from(this.panelRef.value.querySelectorAll(".header, .body, .actions"))
              , i = Co(this, "linear")
              , o = Co(this, "emphasized-decelerate")
              , r = Co(this, "emphasized-accelerate")
              , n = ()=>Promise.all([bo(this.overlayRef.value), bo(this.panelRef.value), ...t.map((e=>bo(e)))]);
            if (this.open) {
                if (e) {
                    if (!this.emit("open", {
                        cancelable: !0
                    }))
                        return
                }
                this.style.display = "flex";
                const r = this.topAppBarElements ?? [];
                if (r.length) {
                    const e = r[0];
                    e.scrollTarget || (e.scrollTarget = this.bodyRef.value),
                    this.bodyRef.value.style.marginTop = "0"
                }
                this.originalTrigger = document.activeElement,
                this.modalHelper.activate(),
                Eo(this),
                await n(),
                requestAnimationFrame((()=>{
                    const e = this.querySelector("[autofocus]");
                    e ? e.focus({
                        preventScroll: !0
                    }) : this.panelRef.value.focus({
                        preventScroll: !0
                    })
                }
                ));
                const s = xo(this, "medium4");
                await Promise.all([go(this.overlayRef.value, [{
                    opacity: 0
                }, {
                    opacity: 1,
                    offset: .3
                }, {
                    opacity: 1
                }], {
                    duration: e ? s : 0,
                    easing: i
                }), go(this.panelRef.value, [{
                    transform: "translateY(-1.875rem) scaleY(0)"
                }, {
                    transform: "translateY(0) scaleY(1)"
                }], {
                    duration: e ? s : 0,
                    easing: o
                }), go(this.panelRef.value, [{
                    opacity: 0
                }, {
                    opacity: 1,
                    offset: .1
                }, {
                    opacity: 1
                }], {
                    duration: e ? s : 0,
                    easing: i
                }), ...t.map((t=>go(t, [{
                    opacity: 0
                }, {
                    opacity: 0,
                    offset: .2
                }, {
                    opacity: 1,
                    offset: .8
                }, {
                    opacity: 1
                }], {
                    duration: e ? s : 0,
                    easing: i
                })))]),
                e && this.emit("opened")
            } else {
                if (!this.emit("close", {
                    cancelable: !0
                }))
                    return;
                this.modalHelper.deactivate(),
                await n();
                const e = xo(this, "short4");
                await Promise.all([go(this.overlayRef.value, [{
                    opacity: 1
                }, {
                    opacity: 0
                }], {
                    duration: e,
                    easing: i
                }), go(this.panelRef.value, [{
                    transform: "translateY(0) scaleY(1)"
                }, {
                    transform: "translateY(-1.875rem) scaleY(0.6)"
                }], {
                    duration: e,
                    easing: r
                }), go(this.panelRef.value, [{
                    opacity: 1
                }, {
                    opacity: 1,
                    offset: .75
                }, {
                    opacity: 0
                }], {
                    duration: e,
                    easing: i
                }), ...t.map((t=>go(t, [{
                    opacity: 1
                }, {
                    opacity: 0,
                    offset: .75
                }, {
                    opacity: 0
                }], {
                    duration: e,
                    easing: i
                })))]),
                this.style.display = "none",
                To(this);
                const o = this.originalTrigger;
                "function" == typeof o?.focus && setTimeout((()=>o.focus())),
                this.emit("closed")
            }
        }
        disconnectedCallback() {
            super.disconnectedCallback(),
            To(this),
            cr(this)
        }
        firstUpdated(e) {
            super.firstUpdated(e),
            this.modalHelper = new ko(this),
            this.addEventListener("keydown", (e=>{
                this.open && this.closeOnEsc && "Escape" === e.key && (e.stopPropagation(),
                this.open = !1)
            }
            ))
        }
        render() {
            const e = this.hasSlotController.test("action")
              , t = this.hasSlotController.test("[default]")
              , i = !!this.icon || this.hasSlotController.test("icon")
              , o = !!this.headline || this.hasSlotController.test("headline")
              , r = !!this.description || this.hasSlotController.test("description")
              , n = i || o || this.hasSlotController.test("header")
              , s = r || t;
            return ft`<div ${Oi(this.overlayRef)} part="overlay" class="overlay" @click="${this.onOverlayClick}" tabindex="-1"></div><div ${Oi(this.panelRef)} part="panel" class="panel ${ji({
                "has-icon": i,
                "has-description": r,
                "has-default": t
            })}" tabindex="0">${vo(n, (()=>ft`<slot name="header" part="header" class="header">${vo(i, (()=>this.renderIcon()))} ${vo(o, (()=>this.renderHeadline()))}</slot>`))} ${vo(s, (()=>ft`<div ${Oi(this.bodyRef)} part="body" class="body">${vo(r, (()=>this.renderDescription()))}<slot></slot></div>`))} ${vo(e, (()=>ft`<slot name="action" part="action" class="action"></slot>`))}</div>`
        }
        onOverlayClick() {
            this.emit("overlay-click"),
            this.closeOnOverlayClick && (this.open = !1)
        }
        renderIcon() {
            return ft`<slot name="icon" part="icon" class="icon">${this.icon ? ft`<mdui-icon name="${this.icon}"></mdui-icon>` : Zt}</slot>`
        }
        renderHeadline() {
            return ft`<slot name="headline" part="headline" class="headline">${this.headline}</slot>`
        }
        renderDescription() {
            return ft`<slot name="description" part="description" class="description">${this.description}</slot>`
        }
    }
    ,
    e.Dialog.styles = [Qt, dr],
    Se([Ot({
        reflect: !0
    })], e.Dialog.prototype, "icon", void 0),
    Se([Ot({
        reflect: !0
    })], e.Dialog.prototype, "headline", void 0),
    Se([Ot({
        reflect: !0
    })], e.Dialog.prototype, "description", void 0),
    Se([Ot({
        type: Boolean,
        reflect: !0,
        converter: wi
    })], e.Dialog.prototype, "open", void 0),
    Se([Ot({
        type: Boolean,
        reflect: !0,
        converter: wi
    })], e.Dialog.prototype, "fullscreen", void 0),
    Se([Ot({
        type: Boolean,
        reflect: !0,
        converter: wi,
        attribute: "close-on-esc"
    })], e.Dialog.prototype, "closeOnEsc", void 0),
    Se([Ot({
        type: Boolean,
        reflect: !0,
        converter: wi,
        attribute: "close-on-overlay-click"
    })], e.Dialog.prototype, "closeOnOverlayClick", void 0),
    Se([Ot({
        type: Boolean,
        reflect: !0,
        converter: wi,
        attribute: "stacked-actions"
    })], e.Dialog.prototype, "stackedActions", void 0),
    Se([Nt({
        slot: "header",
        selector: "mdui-top-app-bar",
        flatten: !0
    })], e.Dialog.prototype, "topAppBarElements", void 0),
    Se([Ci("open")], e.Dialog.prototype, "onOpenChange", null),
    e.Dialog = Se([Lt("mdui-dialog")], e.Dialog);
    const hr = Pe`:host{display:block;height:.0625rem;background-color:rgb(var(--mdui-color-surface-variant))}:host([inset]){margin-left:1rem}:host([middle]){margin-left:1rem;margin-right:1rem}:host([vertical]){height:100%;width:.0625rem}`;
    function ur(e) {
        return mr(e) ? (e.nodeName || "").toLowerCase() : "#document"
    }
    function pr(e) {
        var t;
        return (null == e || null == (t = e.ownerDocument) ? void 0 : t.defaultView) || window
    }
    function mr(e) {
        return e instanceof Node || e instanceof pr(e).Node
    }
    function fr(e) {
        return "undefined" != typeof ShadowRoot && (e instanceof ShadowRoot || e instanceof pr(e).ShadowRoot)
    }
    function vr(e) {
        const {overflow: t, overflowX: i, overflowY: o, display: r} = function(e) {
            return pr(e).getComputedStyle(e)
        }(e);
        return /auto|scroll|overlay|hidden|clip/.test(t + o + i) && !["inline", "contents"].includes(r)
    }
    function gr(e) {
        if ("html" === ur(e))
            return e;
        const t = e.assignedSlot || e.parentNode || fr(e) && e.host || function(e) {
            var t;
            return null == (t = (mr(e) ? e.ownerDocument : e.document) || window.document) ? void 0 : t.documentElement
        }(e);
        return fr(t) ? t.host : t
    }
    function br(e) {
        const t = gr(e);
        return function(e) {
            return ["html", "body", "#document"].includes(ur(e))
        }(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : ((i = t)instanceof HTMLElement || i instanceof pr(i).HTMLElement) && vr(t) ? t : br(t);
        var i
    }
    function yr(e, t, i) {
        var o;
        void 0 === t && (t = []),
        void 0 === i && (i = !0);
        const r = br(e)
          , n = r === (null == (o = e.ownerDocument) ? void 0 : o.body)
          , s = pr(r);
        return n ? t.concat(s, s.visualViewport || [], vr(r) ? r : [], s.frameElement && i ? yr(s.frameElement) : []) : t.concat(r, yr(r, [], i))
    }
    e.Divider = class extends Xt {
        constructor() {
            super(...arguments),
            this.vertical = !1,
            this.inset = !1,
            this.middle = !1
        }
        render() {
            return ft``
        }
    }
    ,
    e.Divider.styles = [Qt, hr],
    Se([Ot({
        type: Boolean,
        reflect: !0,
        converter: wi
    })], e.Divider.prototype, "vertical", void 0),
    Se([Ot({
        type: Boolean,
        reflect: !0,
        converter: wi
    })], e.Divider.prototype, "inset", void 0),
    Se([Ot({
        type: Boolean,
        reflect: !0,
        converter: wi
    })], e.Divider.prototype, "middle", void 0),
    e.Divider = Se([Lt("mdui-divider")], e.Divider);
    const wr = Pe`:host{--z-index:2100;display:contents}.panel{display:block;position:fixed;z-index:var(--z-index)}`;
    e.Dropdown = class extends Xt {
        constructor() {
            super(),
            this.open = !1,
            this.disabled = !1,
            this.trigger = "click",
            this.placement = "auto",
            this.stayOpenOnClick = !1,
            this.openDelay = 150,
            this.closeDelay = 150,
            this.openOnPointer = !1,
            this.panelRef = Li(),
            this.definedController = new ki(this,{
                relatedElements: [""]
            }),
            this.onDocumentClick = this.onDocumentClick.bind(this),
            this.onDocumentKeydown = this.onDocumentKeydown.bind(this),
            this.onWindowScroll = this.onWindowScroll.bind(this),
            this.onMouseLeave = this.onMouseLeave.bind(this),
            this.onFocus = this.onFocus.bind(this),
            this.onClick = this.onClick.bind(this),
            this.onContextMenu = this.onContextMenu.bind(this),
            this.onMouseEnter = this.onMouseEnter.bind(this),
            this.onPanelClick = this.onPanelClick.bind(this)
        }
        get triggerElement() {
            return this.triggerElements[0]
        }
        async onPositionChange() {
            this.open && (await this.definedController.whenDefined(),
            this.updatePositioner())
        }
        async onOpenChange() {
            const e = this.hasUpdated;
            if (!this.open && !e)
                return;
            await this.definedController.whenDefined(),
            e || await this.updateComplete;
            const t = Co(this, "linear")
              , i = Co(this, "emphasized-decelerate")
              , o = Co(this, "emphasized-accelerate");
            if (this.open) {
                if (e) {
                    if (!this.emit("open", {
                        cancelable: !0
                    }))
                        return
                }
                const o = this.panelElements.find((e=>l(e.focus)));
                setTimeout((()=>{
                    o?.focus()
                }
                ));
                const r = xo(this, "medium4");
                await bo(this.panelRef.value),
                this.panelRef.value.hidden = !1,
                this.updatePositioner(),
                await Promise.all([go(this.panelRef.value, [{
                    transform: `${this.getCssScaleName()}(0.45)`
                }, {
                    transform: `${this.getCssScaleName()}(1)`
                }], {
                    duration: e ? r : 0,
                    easing: i
                }), go(this.panelRef.value, [{
                    opacity: 0
                }, {
                    opacity: 1,
                    offset: .125
                }, {
                    opacity: 1
                }], {
                    duration: e ? r : 0,
                    easing: t
                })]),
                e && this.emit("opened")
            } else {
                if (!this.emit("close", {
                    cancelable: !0
                }))
                    return;
                !this.hasTrigger("focus") && l(this.triggerElement?.focus) && (this.contains(document.activeElement) || this.contains(document.activeElement?.assignedSlot ?? null)) && this.triggerElement.focus();
                const e = xo(this, "short4");
                await bo(this.panelRef.value),
                await Promise.all([go(this.panelRef.value, [{
                    transform: `${this.getCssScaleName()}(1)`
                }, {
                    transform: `${this.getCssScaleName()}(0.45)`
                }], {
                    duration: e,
                    easing: o
                }), go(this.panelRef.value, [{
                    opacity: 1
                }, {
                    opacity: 1,
                    offset: .875
                }, {
                    opacity: 0
                }], {
                    duration: e,
                    easing: t
                })]),
                this.panelRef.value && (this.panelRef.value.hidden = !0),
                this.emit("closed")
            }
        }
        connectedCallback() {
            super.connectedCallback(),
            this.definedController.whenDefined().then((()=>{
                document.addEventListener("pointerdown", this.onDocumentClick),
                document.addEventListener("keydown", this.onDocumentKeydown),
                this.overflowAncestors = yr(this.triggerElement),
                this.overflowAncestors.forEach((e=>{
                    e.addEventListener("scroll", this.onWindowScroll)
                }
                ))
            }
            ))
        }
        disconnectedCallback() {
            super.disconnectedCallback(),
            document.removeEventListener("pointerdown", this.onDocumentClick),
            document.removeEventListener("keydown", this.onDocumentKeydown),
            this.overflowAncestors?.forEach((e=>{
                e.removeEventListener("scroll", this.onWindowScroll)
            }
            )),
            this.observeResize?.unobserve()
        }
        firstUpdated(e) {
            super.firstUpdated(e),
            this.addEventListener("mouseleave", this.onMouseLeave),
            this.definedController.whenDefined().then((()=>{
                this.triggerElement.addEventListener("focus", this.onFocus),
                this.triggerElement.addEventListener("click", this.onClick),
                this.triggerElement.addEventListener("contextmenu", this.onContextMenu),
                this.triggerElement.addEventListener("mouseenter", this.onMouseEnter),
                this.observeResize = Ei(this.triggerElement, (()=>{
                    this.updatePositioner()
                }
                ))
            }
            ))
        }
        render() {
            return ft`<slot name="trigger" part="trigger" class="trigger"></slot><slot ${Oi(this.panelRef)} part="panel" class="panel" hidden @click="${this.onPanelClick}"></slot>`
        }
        getCssScaleName() {
            return "horizontal" === this.animateDirection ? "scaleX" : "scaleY"
        }
        onDocumentClick(e) {
            if (this.disabled || !this.open)
                return;
            const t = e.composedPath();
            t.includes(this) || (this.open = !1),
            this.hasTrigger("contextmenu") && !this.hasTrigger("click") && t.includes(this.triggerElement) && (this.open = !1)
        }
        onDocumentKeydown(e) {
            !this.disabled && this.open && ("Escape" !== e.key ? "Tab" === e.key && (!this.hasTrigger("focus") && l(this.triggerElement?.focus) && e.preventDefault(),
            this.open = !1) : this.open = !1)
        }
        onWindowScroll() {
            window.requestAnimationFrame((()=>this.onPositionChange()))
        }
        hasTrigger(e) {
            return this.trigger.split(" ").includes(e)
        }
        onFocus() {
            this.disabled || this.open || !this.hasTrigger("focus") || (this.open = !0)
        }
        onClick(e) {
            this.disabled || e.button || !this.hasTrigger("click") || this.open && (this.hasTrigger("hover") || this.hasTrigger("focus")) || (this.pointerOffsetX = e.offsetX,
            this.pointerOffsetY = e.offsetY,
            this.open = !this.open)
        }
        onPanelClick(e) {
            this.disabled || this.stayOpenOnClick || !M(e.target).is("mdui-menu-item") || (this.open = !1)
        }
        onContextMenu(e) {
            !this.disabled && this.hasTrigger("contextmenu") && (e.preventDefault(),
            this.pointerOffsetX = e.offsetX,
            this.pointerOffsetY = e.offsetY,
            this.open = !0)
        }
        onMouseEnter() {
            !this.disabled && this.hasTrigger("hover") && (window.clearTimeout(this.closeTimeout),
            this.openDelay ? this.openTimeout = window.setTimeout((()=>{
                this.open = !0
            }
            ), this.openDelay) : this.open = !0)
        }
        onMouseLeave() {
            !this.disabled && this.hasTrigger("hover") && (window.clearTimeout(this.openTimeout),
            this.closeTimeout = window.setTimeout((()=>{
                this.open = !1
            }
            ), this.closeDelay || 50))
        }
        updatePositioner() {
            const e = M(this.panelRef.value)
              , t = M(window)
              , i = this.panelElements
              , o = Math.max(...i?.map((e=>e.offsetWidth)) ?? [])
              , r = i?.map((e=>e.offsetHeight)).reduce(((e,t)=>e + t), 0)
              , n = this.triggerElement.getBoundingClientRect()
              , s = this.openOnPointer ? {
                top: this.pointerOffsetY + n.top,
                left: this.pointerOffsetX + n.left,
                width: 0,
                height: 0
            } : n;
            let a, l, c, d, h = this.placement;
            if ("auto" === h) {
                const e = t.width()
                  , i = t.height();
                let n, a;
                n = i - s.top - s.height > r + 8 ? "bottom" : s.top > r + 8 ? "top" : e - s.left - s.width > o + 8 ? "right" : s.left > o + 8 ? "left" : "bottom",
                a = ["top", "bottom"].includes(n) ? e - s.left > o + 8 ? "start" : s.left + s.width / 2 > o / 2 + 8 && e - s.left - s.width / 2 > o / 2 + 8 ? void 0 : s.left + s.width > o + 8 ? "end" : "start" : i - s.top > r + 8 ? "start" : s.top + s.height / 2 > r / 2 + 8 && i - s.top - s.height / 2 > r / 2 + 8 ? void 0 : s.top + s.height > r + 8 ? "end" : "start",
                h = a ? [n, a].join("-") : n
            }
            const [u,p] = h.split("-");
            switch (this.animateDirection = ["top", "bottom"].includes(u) ? "vertical" : "horizontal",
            u) {
            case "top":
                l = "bottom",
                c = s.top - r;
                break;
            case "bottom":
                l = "top",
                c = s.top + s.height;
                break;
            default:
                switch (l = "center",
                p) {
                case "start":
                    c = s.top;
                    break;
                case "end":
                    c = s.top + s.height - r;
                    break;
                default:
                    c = s.top + s.height / 2 - r / 2
                }
            }
            switch (u) {
            case "left":
                a = "right",
                d = s.left - o;
                break;
            case "right":
                a = "left",
                d = s.left + s.width;
                break;
            default:
                switch (a = "center",
                p) {
                case "start":
                    d = s.left;
                    break;
                case "end":
                    d = s.left + s.width - o;
                    break;
                default:
                    d = s.left + s.width / 2 - o / 2
                }
            }
            e.css({
                top: c,
                left: d,
                transformOrigin: [a, l].join(" ")
            })
        }
    }
    ,
    e.Dropdown.styles = [Qt, wr],
    Se([Ot({
        type: Boolean,
        reflect: !0,
        converter: wi
    })], e.Dropdown.prototype, "open", void 0),
    Se([Ot({
        type: Boolean,
        reflect: !0,
        converter: wi
    })], e.Dropdown.prototype, "disabled", void 0),
    Se([Ot({
        reflect: !0
    })], e.Dropdown.prototype, "trigger", void 0),
    Se([Ot({
        reflect: !0
    })], e.Dropdown.prototype, "placement", void 0),
    Se([Ot({
        type: Boolean,
        reflect: !0,
        converter: wi,
        attribute: "stay-open-on-click"
    })], e.Dropdown.prototype, "stayOpenOnClick", void 0),
    Se([Ot({
        type: Number,
        reflect: !0,
        attribute: "open-delay"
    })], e.Dropdown.prototype, "openDelay", void 0),
    Se([Ot({
        type: Number,
        reflect: !0,
        attribute: "close-delay"
    })], e.Dropdown.prototype, "closeDelay", void 0),
    Se([Ot({
        type: Boolean,
        reflect: !0,
        converter: wi,
        attribute: "open-on-pointer"
    })], e.Dropdown.prototype, "openOnPointer", void 0),
    Se([Nt({
        slot: "trigger",
        flatten: !0
    })], e.Dropdown.prototype, "triggerElements", void 0),
    Se([Nt({
        flatten: !0
    })], e.Dropdown.prototype, "panelElements", void 0),
    Se([Ci("placement", !0), Ci("openOnPointer", !0)], e.Dropdown.prototype, "onPositionChange", null),
    Se([Ci("open")], e.Dropdown.prototype, "onOpenChange", null),
    e.Dropdown = Se([Lt("mdui-dropdown")], e.Dropdown);
    const kr = (e=0)=>new Promise((t=>setTimeout(t, e)))
      , Cr = Pe`:host{--shape-corner-small:var(--mdui-shape-corner-small);--shape-corner-normal:var(--mdui-shape-corner-large);--shape-corner-large:var(--mdui-shape-corner-extra-large);position:relative;display:inline-block;flex-shrink:0;overflow:hidden;text-align:center;border-radius:var(--shape-corner-normal);cursor:pointer;-webkit-tap-highlight-color:transparent;transition-property:box-shadow;transition-timing-function:var(--mdui-motion-easing-emphasized);transition-duration:var(--mdui-motion-duration-medium4);width:3.5rem;height:3.5rem;box-shadow:var(--mdui-elevation-level3);font-size:var(--mdui-typescale-label-large-size);font-weight:var(--mdui-typescale-label-large-weight);letter-spacing:var(--mdui-typescale-label-large-tracking);line-height:var(--mdui-typescale-label-large-line-height)}.button{padding:0 1rem}:host([size=small]) .button{padding:0 .5rem}:host([size=large]) .button{padding:0 1.875rem}:host([lowered]){box-shadow:var(--mdui-elevation-level1)}:host([focus-visible]){box-shadow:var(--mdui-elevation-level3)}:host([lowered][focus-visible]){box-shadow:var(--mdui-elevation-level1)}:host([pressed]){box-shadow:var(--mdui-elevation-level3)}:host([lowered][pressed]){box-shadow:var(--mdui-elevation-level1)}:host([hover]){box-shadow:var(--mdui-elevation-level4)}:host([lowered][hover]){box-shadow:var(--mdui-elevation-level2)}:host([variant=primary]){color:rgb(var(--mdui-color-on-primary-container));background-color:rgb(var(--mdui-color-primary-container));--mdui-comp-ripple-state-layer-color:var(
      --mdui-color-on-primary-container
    )}:host([variant=surface]){color:rgb(var(--mdui-color-primary));background-color:rgb(var(--mdui-color-surface-container-high));--mdui-comp-ripple-state-layer-color:var(--mdui-color-primary)}:host([variant=surface][lowered]){background-color:rgb(var(--mdui-color-surface-container-low))}:host([variant=secondary]){color:rgb(var(--mdui-color-on-secondary-container));background-color:rgb(var(--mdui-color-secondary-container));--mdui-comp-ripple-state-layer-color:var(
      --mdui-color-on-secondary-container
    )}:host([variant=tertiary]){color:rgb(var(--mdui-color-on-tertiary-container));background-color:rgb(var(--mdui-color-tertiary-container));--mdui-comp-ripple-state-layer-color:var(
      --mdui-color-on-tertiary-container
    )}:host([size=small]){border-radius:var(--shape-corner-small);width:2.5rem;height:2.5rem}:host([size=large]){border-radius:var(--shape-corner-large);width:6rem;height:6rem}:host([disabled]),:host([loading]){cursor:default;pointer-events:none}:host([disabled]){color:rgba(var(--mdui-color-on-surface),38%);background-color:rgba(var(--mdui-color-on-surface),12%);box-shadow:var(--mdui-elevation-level0)}:host([extended]){width:auto}.label{display:inline-flex;transition:opacity var(--mdui-motion-duration-short2) var(--mdui-motion-easing-linear) var(--mdui-motion-duration-short2);padding-left:.25rem;padding-right:.25rem}.has-icon .label{margin-left:.5rem}:host([size=small]) .has-icon .label{margin-left:.25rem}:host([size=large]) .has-icon .label{margin-left:1rem}:host(:not([extended])) .label{opacity:0;transition-delay:0s;transition-duration:var(--mdui-motion-duration-short1)}:host([size=large]) .label{font-size:1.5em}.icon{display:inline-flex;font-size:1.71428571em}:host([size=large]) .icon{font-size:2.57142857em}.icon mdui-icon,::slotted([slot=icon]){font-size:inherit}mdui-circular-progress{display:inline-flex;width:1.5rem;height:1.5rem}:host([size=large]) mdui-circular-progress{width:2.25rem;height:2.25rem}:host([disabled]) mdui-circular-progress{stroke:rgba(var(--mdui-color-on-surface),38%)}`;
    e.Fab = class extends Ji {
        constructor() {
            super(...arguments),
            this.variant = "primary",
            this.size = "normal",
            this.extended = !1,
            this.rippleRef = Li(),
            this.hasSlotController = new Jt(this,"icon"),
            this.definedController = new ki(this,{
                relatedElements: [""]
            })
        }
        get rippleElement() {
            return this.rippleRef.value
        }
        async onExtendedChange() {
            const e = this.hasUpdated;
            this.extended ? this.style.width = `${this.scrollWidth}px` : this.style.width = "",
            await this.definedController.whenDefined(),
            await this.updateComplete,
            this.extended && !e && (this.style.width = `${this.scrollWidth}px`),
            e || (await kr(),
            this.style.transitionProperty = "box-shadow, width, bottom, transform")
        }
        render() {
            const e = zi({
                button: !0,
                "has-icon": this.icon || this.hasSlotController.test("icon")
            });
            return ft`<mdui-ripple ${Oi(this.rippleRef)} .noRipple="${this.noRipple}"></mdui-ripple>${this.isButton() ? this.renderButton({
                className: e,
                part: "button",
                content: this.renderInner()
            }) : this.disabled || this.loading ? ft`<span part="button" class="_a ${e}">${this.renderInner()}</span>` : this.renderAnchor({
                className: e,
                part: "button",
                content: this.renderInner()
            })}`
        }
        renderLabel() {
            return ft`<slot part="label" class="label"></slot>`
        }
        renderIcon() {
            return this.loading ? this.renderLoading() : ft`<slot name="icon" part="icon" class="icon">${this.icon ? ft`<mdui-icon name="${this.icon}"></mdui-icon>` : Zt}</slot>`
        }
        renderInner() {
            return [this.renderIcon(), this.renderLabel()]
        }
    }
    ,
    e.Fab.styles = [Ji.styles, Cr],
    Se([Ot({
        reflect: !0
    })], e.Fab.prototype, "variant", void 0),
    Se([Ot({
        reflect: !0
    })], e.Fab.prototype, "size", void 0),
    Se([Ot({
        reflect: !0
    })], e.Fab.prototype, "icon", void 0),
    Se([Ot({
        type: Boolean,
        reflect: !0,
        converter: wi
    })], e.Fab.prototype, "extended", void 0),
    Se([Ci("extended")], e.Fab.prototype, "onExtendedChange", null),
    e.Fab = Se([Lt("mdui-fab")], e.Fab);
    const xr = Pe`:host{position:relative;display:flex;flex:1 1 auto;overflow:hidden}:host([full-height]){height:100%}`;
    e.Layout = class extends Xt {
        constructor() {
            super(...arguments),
            this.fullHeight = !1
        }
        render() {
            return ft`<slot></slot>`
        }
    }
    ,
    e.Layout.styles = [Qt, xr],
    Se([Ot({
        type: Boolean,
        reflect: !0,
        converter: wi,
        attribute: "full-height"
    })], e.Layout.prototype, "fullHeight", void 0),
    e.Layout = Se([Lt("mdui-layout")], e.Layout);
    const $r = Pe`:host{display:flex;z-index:1}`;
    e.LayoutItem = class extends Mi {
        constructor() {
            super(...arguments),
            this.placement = "top"
        }
        get layoutPlacement() {
            return this.placement
        }
        onPlacementChange() {
            this.layoutManager?.updateLayout(this)
        }
        render() {
            return ft`<slot></slot>`
        }
    }
    ,
    e.LayoutItem.styles = [Qt, $r],
    Se([Ot({
        reflect: !0
    })], e.LayoutItem.prototype, "placement", void 0),
    Se([Ci("placement", !0)], e.LayoutItem.prototype, "onPlacementChange", null),
    e.LayoutItem = Se([Lt("mdui-layout-item")], e.LayoutItem);
    const Rr = Pe`:host{flex:1 0 auto;max-width:100%;overflow:auto}`;
    e.LayoutMain = class extends Xt {
        connectedCallback() {
            super.connectedCallback();
            const e = this.parentElement;
            a(e, "mdui-layout") && (this.layoutManager = Di(e),
            this.layoutManager.registerMain(this))
        }
        disconnectedCallback() {
            super.disconnectedCallback(),
            this.layoutManager && this.layoutManager.unregisterMain()
        }
        render() {
            return ft`<slot></slot>`
        }
    }
    ,
    e.LayoutMain.styles = [Qt, Rr],
    e.LayoutMain = Se([Lt("mdui-layout-main")], e.LayoutMain);
    const Ir = Pe`:host{--shape-corner:var(--mdui-shape-corner-none);position:relative;display:inline-block;width:100%;overflow:hidden;border-radius:var(--shape-corner);background-color:rgb(var(--mdui-color-surface-container-highest));height:.25rem}.determinate,.indeterminate{background-color:rgb(var(--mdui-color-primary))}.determinate{height:100%;transition:width var(--mdui-motion-duration-long2) var(--mdui-motion-easing-standard)}.indeterminate::before{position:absolute;top:0;bottom:0;left:0;background-color:inherit;animation:mdui-comp-progress-indeterminate 2s var(--mdui-motion-easing-linear) infinite;content:' '}.indeterminate::after{position:absolute;top:0;bottom:0;left:0;background-color:inherit;animation:mdui-comp-progress-indeterminate-short 2s var(--mdui-motion-easing-linear) infinite;content:' '}@keyframes mdui-comp-progress-indeterminate{0%{left:0;width:0}50%{left:30%;width:70%}75%{left:100%;width:0}}@keyframes mdui-comp-progress-indeterminate-short{0%{left:0;width:0}50%{left:0;width:0}75%{left:0;width:25%}100%{left:100%;width:0}}`;
    e.LinearProgress = class extends Xt {
        constructor() {
            super(...arguments),
            this.max = 1
        }
        render() {
            if (!u(this.value)) {
                const e = this.value;
                return ft`<div part="indicator" class="determinate" style="${Yt({
                    width: e / Math.max(this.max ?? e, e) * 100 + "%"
                })}"></div>`
            }
            return ft`<div part="indicator" class="indeterminate"></div>`
        }
    }
    ,
    e.LinearProgress.styles = [Qt, Ir],
    Se([Ot({
        type: Number,
        reflect: !0
    })], e.LinearProgress.prototype, "max", void 0),
    Se([Ot({
        type: Number
    })], e.LinearProgress.prototype, "value", void 0),
    e.LinearProgress = Se([Lt("mdui-linear-progress")], e.LinearProgress);
    const Sr = Pe`:host{--shape-corner:var(--mdui-shape-corner-none);--shape-corner-rounded:var(--mdui-shape-corner-extra-large);position:relative;display:block;border-radius:var(--shape-corner);--mdui-comp-ripple-state-layer-color:var(--mdui-color-on-surface)}:host([rounded]),:host([rounded]) mdui-ripple{border-radius:var(--shape-corner-rounded)}:host([active]){background-color:rgb(var(--mdui-color-secondary-container));--mdui-comp-ripple-state-layer-color:var(
      --mdui-color-on-secondary-container
    )}:host([disabled]){pointer-events:none}.container{cursor:pointer;-webkit-user-select:none;user-select:none;text-decoration:none;color:inherit;-webkit-tap-highlight-color:transparent}:host([disabled]) .container{cursor:default;opacity:.38}:host([nonclickable]:not([href])) .container{cursor:auto;-webkit-user-select:auto;user-select:auto}.preset{display:flex;align-items:center;padding:.5rem 1.5rem .5rem 1rem;min-height:3.5rem}:host([alignment=start]) .preset{align-items:flex-start}:host([alignment=end]) .preset{align-items:flex-end}.body{display:flex;flex:1 1 100%;flex-direction:column;justify-content:center;min-width:0}.headline{display:block;color:rgb(var(--mdui-color-on-surface));font-size:var(--mdui-typescale-body-large-size);font-weight:var(--mdui-typescale-body-large-weight);letter-spacing:var(--mdui-typescale-body-large-tracking);line-height:var(--mdui-typescale-body-large-line-height)}:host([active]) .headline{color:rgb(var(--mdui-color-on-secondary-container))}.description{display:none;color:rgb(var(--mdui-color-on-surface-variant));font-size:var(--mdui-typescale-body-medium-size);font-weight:var(--mdui-typescale-body-medium-weight);letter-spacing:var(--mdui-typescale-body-medium-tracking);line-height:var(--mdui-typescale-body-medium-line-height)}:host([disabled]) .description,:host([focused]) .description,:host([hover]) .description,:host([pressed]) .description{color:rgb(var(--mdui-color-on-surface))}.has-description .description{display:block}:host([description-line='1']) .description,:host([headline-line='1']) .headline{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}:host([description-line='2']) .description,:host([description-line='3']) .description,:host([headline-line='2']) .headline,:host([headline-line='3']) .headline{display:-webkit-box;overflow:hidden;text-overflow:ellipsis;-webkit-box-orient:vertical}:host([description-line='2']) .description,:host([headline-line='2']) .headline{-webkit-line-clamp:2}:host([description-line='3']) .description,:host([headline-line='3']) .headline{-webkit-line-clamp:3}.end-icon,.icon{display:flex;flex:0 0 auto;font-size:var(--mdui-typescale-label-small-size);font-weight:var(--mdui-typescale-label-small-weight);letter-spacing:var(--mdui-typescale-label-small-tracking);line-height:var(--mdui-typescale-label-small-line-height);color:rgb(var(--mdui-color-on-surface-variant))}:host([disabled]) .end-icon,:host([disabled]) .icon,:host([focused]) .end-icon,:host([focused]) .icon,:host([hover]) .end-icon,:host([hover]) .icon,:host([pressed]) .end-icon,:host([pressed]) .icon{color:rgb(var(--mdui-color-on-surface))}:host([active]) .end-icon,:host([active]) .icon{color:rgb(var(--mdui-color-on-secondary-container))}.end-icon mdui-icon,.icon mdui-icon,.is-end-icon ::slotted([slot=end-icon]),.is-icon ::slotted([slot=icon]){font-size:1.5rem}.has-icon .icon{margin-right:1rem}.has-icon ::slotted(mdui-checkbox[slot=icon]),.has-icon ::slotted(mdui-radio[slot=icon]){margin-left:-.5rem}.has-end-icon .end-icon{margin-left:1rem}.has-end-icon ::slotted(mdui-checkbox[slot=end-icon]),.has-end-icon ::slotted(mdui-radio[slot=end-icon]){margin-right:-.5rem}`;
    e.ListItem = class extends (Hi(Yi(qi(Xt)))) {
        constructor() {
            super(...arguments),
            this.disabled = !1,
            this.active = !1,
            this.nonclickable = !1,
            this.rounded = !1,
            this.alignment = "center",
            this.rippleRef = Li(),
            this.itemRef = Li(),
            this.hasSlotController = new Jt(this,"[default]","description","icon","end-icon","custom")
        }
        get rippleElement() {
            return this.rippleRef.value
        }
        get rippleDisabled() {
            return this.focusDisabled
        }
        get focusElement() {
            return this.href && !this.disabled ? this.itemRef.value : this
        }
        get focusDisabled() {
            return this.href ? this.disabled : this.disabled || this.nonclickable
        }
        render() {
            const e = zi({
                container: !0,
                preset: !this.hasSlotController.test("custom"),
                "has-icon": this.icon || this.hasSlotController.test("icon"),
                "has-end-icon": this.endIcon || this.hasSlotController.test("end-icon"),
                "has-description": this.description || this.hasSlotController.test("description"),
                "is-icon": a(this.iconElements[0], "mdui-icon"),
                "is-end-icon": (t = this.endIconElements[0],
                t?.nodeName.toLowerCase() ?? "").startsWith("mdui-icon-")
            });
            var t;
            return ft`<mdui-ripple ${Oi(this.rippleRef)} .noRipple="${this.noRipple}"></mdui-ripple>${this.href && !this.disabled ? this.renderAnchor({
                className: e,
                content: this.renderInner(),
                part: "container",
                refDirective: Oi(this.itemRef)
            }) : ft`<div part="container" class="${e}" ${Oi(this.itemRef)}>${this.renderInner()}</div>`}`
        }
        renderInner() {
            const e = this.hasSlotController.test("[default]");
            return ft`<slot name="custom"><slot name="icon" part="icon" class="icon">${this.icon ? ft`<mdui-icon name="${this.icon}"></mdui-icon>` : Zt}</slot><div part="body" class="body">${e ? ft`<slot part="headline" class="headline"></slot>` : ft`<div part="headline" class="headline">${this.headline}</div>`}<slot name="description" part="description" class="description">${this.description}</slot></div><slot name="end-icon" part="end-icon" class="end-icon">${this.endIcon ? ft`<mdui-icon name="${this.endIcon}"></mdui-icon>` : Zt}</slot></slot>`
        }
    }
    ,
    e.ListItem.styles = [Qt, Sr],
    Se([Ot({
        reflect: !0
    })], e.ListItem.prototype, "headline", void 0),
    Se([Ot({
        type: Number,
        reflect: !0,
        attribute: "headline-line"
    })], e.ListItem.prototype, "headlineLine", void 0),
    Se([Ot({
        reflect: !0
    })], e.ListItem.prototype, "description", void 0),
    Se([Ot({
        type: Number,
        reflect: !0,
        attribute: "description-line"
    })], e.ListItem.prototype, "descriptionLine", void 0),
    Se([Ot({
        reflect: !0
    })], e.ListItem.prototype, "icon", void 0),
    Se([Ot({
        reflect: !0,
        attribute: "end-icon"
    })], e.ListItem.prototype, "endIcon", void 0),
    Se([Ot({
        type: Boolean,
        reflect: !0,
        converter: wi
    })], e.ListItem.prototype, "disabled", void 0),
    Se([Ot({
        type: Boolean,
        reflect: !0,
        converter: wi
    })], e.ListItem.prototype, "active", void 0),
    Se([Ot({
        type: Boolean,
        reflect: !0,
        converter: wi
    })], e.ListItem.prototype, "nonclickable", void 0),
    Se([Ot({
        type: Boolean,
        reflect: !0,
        converter: wi
    })], e.ListItem.prototype, "rounded", void 0),
    Se([Ot({
        reflect: !0
    })], e.ListItem.prototype, "alignment", void 0),
    Se([Nt({
        slot: "icon",
        flatten: !0
    })], e.ListItem.prototype, "iconElements", void 0),
    Se([Nt({
        slot: "end-icon",
        flatten: !0
    })], e.ListItem.prototype, "endIconElements", void 0),
    e.ListItem = Se([Lt("mdui-list-item")], e.ListItem);
    const Er = Pe`:host{display:block;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;cursor:default;color:rgb(var(--mdui-color-on-surface-variant));font-size:var(--mdui-typescale-label-small-size);font-weight:var(--mdui-typescale-label-small-weight);letter-spacing:var(--mdui-typescale-label-small-tracking);line-height:var(--mdui-typescale-label-small-line-height);padding-left:1rem;padding-right:1.5rem;height:3.5rem;line-height:3.5rem}`;
    e.ListSubheader = class extends Xt {
        render() {
            return ft`<slot></slot>`
        }
    }
    ,
    e.ListSubheader.styles = [Qt, Er],
    e.ListSubheader = Se([Lt("mdui-list-subheader")], e.ListSubheader);
    const Tr = Pe`:host{display:block;padding:.5rem 0}::slotted(mdui-divider[middle]){margin-left:1rem;margin-right:1.5rem}`;
    e.List = class extends Xt {
        render() {
            return ft`<slot></slot>`
        }
    }
    ,
    e.List.styles = [Qt, Tr],
    e.List = Se([Lt("mdui-list")], e.List);
    let Ar = class extends Mt {
        render() {
            return ro('<path d="m10 17 5-5-5-5v10z"/>')
        }
    }
    ;
    Ar.styles = oo,
    Ar = Se([Lt("mdui-icon-arrow-right")], Ar);
    const Dr = Pe`:host{position:relative;display:block}:host([selected]){background-color:rgba(var(--mdui-color-primary),12%)}:host([disabled]){pointer-events:none}.container{cursor:pointer;-webkit-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent}:host([disabled]) .container{cursor:default;opacity:.38}.preset{display:flex;align-items:center;text-decoration:none;height:3rem;padding:0 .75rem}.preset.dense{height:2rem}.label-container{flex:1 1 100%;min-width:0}.label{display:block;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;color:rgb(var(--mdui-color-on-surface));font-size:var(--mdui-typescale-label-large-size);font-weight:var(--mdui-typescale-label-large-weight);letter-spacing:var(--mdui-typescale-label-large-tracking)}.end-icon,.end-text,.icon,.selected-icon{display:none;flex:0 0 auto;color:rgb(var(--mdui-color-on-surface-variant))}.has-end-icon .end-icon,.has-end-text .end-text,.has-icon .icon,.has-icon .selected-icon{display:flex}.end-icon,.icon,.selected-icon{font-size:1.5rem}.end-icon::slotted(mdui-avatar),.icon::slotted(mdui-avatar),.selected-icon::slotted(mdui-avatar){width:1.5rem;height:1.5rem}.dense .end-icon,.dense .icon,.dense .selected-icon{font-size:1.125rem}.dense .end-icon::slotted(mdui-avatar),.dense .icon::slotted(mdui-avatar),.dense .selected-icon::slotted(mdui-avatar){width:1.125rem;height:1.125rem}.end-icon .i,.icon .i,.selected-icon .i,::slotted([slot=end-icon]),::slotted([slot=icon]),::slotted([slot=selected-icon]){font-size:inherit}.end-text{font-size:var(--mdui-typescale-label-large-size);font-weight:var(--mdui-typescale-label-large-weight);letter-spacing:var(--mdui-typescale-label-large-tracking);line-height:var(--mdui-typescale-label-large-line-height)}.icon,.selected-icon{margin-right:.75rem}.end-icon,.end-text{margin-left:.75rem}.arrow-right{color:rgb(var(--mdui-color-on-surface))}.submenu{--shape-corner:var(--mdui-shape-corner-extra-small);display:block;position:absolute;z-index:1;border-radius:var(--shape-corner);background-color:rgb(var(--mdui-color-surface-container));box-shadow:var(--mdui-elevation-level2);min-width:7rem;max-width:17.5rem;padding-top:.5rem;padding-bottom:.5rem;--mdui-comp-ripple-state-layer-color:var(--mdui-color-on-surface)}.submenu::slotted(mdui-divider){margin-top:.5rem;margin-bottom:.5rem}`;
    e.MenuItem = class extends (Hi(Yi(qi(Xt)))) {
        constructor() {
            super(),
            this.disabled = !1,
            this.submenuOpen = !1,
            this.selected = !1,
            this.dense = !1,
            this.focusable = !1,
            this.key = Ri(),
            this.rippleRef = Li(),
            this.containerRef = Li(),
            this.submenuRef = Li(),
            this.hasSlotController = new Jt(this,"[default]","icon","end-icon","end-text","submenu","custom"),
            this.definedController = new ki(this,{
                relatedElements: [""]
            }),
            this.onOuterClick = this.onOuterClick.bind(this),
            this.onFocus = this.onFocus.bind(this),
            this.onBlur = this.onBlur.bind(this),
            this.onClick = this.onClick.bind(this),
            this.onKeydown = this.onKeydown.bind(this),
            this.onMouseEnter = this.onMouseEnter.bind(this),
            this.onMouseLeave = this.onMouseLeave.bind(this)
        }
        get focusDisabled() {
            return this.disabled || !this.focusable
        }
        get focusElement() {
            return this.href && !this.disabled ? this.containerRef.value : this
        }
        get rippleDisabled() {
            return this.disabled
        }
        get rippleElement() {
            return this.rippleRef.value
        }
        get hasSubmenu() {
            return this.hasSlotController.test("submenu")
        }
        async onOpenChange() {
            const e = this.hasUpdated;
            if (!this.submenuOpen && !e)
                return;
            await this.definedController.whenDefined(),
            e || await this.updateComplete;
            const t = Co(this, "linear")
              , i = Co(this, "emphasized-decelerate")
              , o = Co(this, "emphasized-accelerate");
            if (this.submenuOpen) {
                if (e) {
                    if (!this.emit("submenu-open", {
                        cancelable: !0
                    }))
                        return
                }
                const o = xo(this, "medium4");
                await bo(this.submenuRef.value),
                this.submenuRef.value.hidden = !1,
                this.updateSubmenuPositioner(),
                await Promise.all([go(this.submenuRef.value, [{
                    transform: "scaleY(0.45)"
                }, {
                    transform: "scaleY(1)"
                }], {
                    duration: e ? o : 0,
                    easing: i
                }), go(this.submenuRef.value, [{
                    opacity: 0
                }, {
                    opacity: 1,
                    offset: .125
                }, {
                    opacity: 1
                }], {
                    duration: e ? o : 0,
                    easing: t
                })]),
                e && this.emit("submenu-opened")
            } else {
                if (!this.emit("submenu-close", {
                    cancelable: !0
                }))
                    return;
                const e = xo(this, "short4");
                await bo(this.submenuRef.value),
                await Promise.all([go(this.submenuRef.value, [{
                    transform: "scaleY(1)"
                }, {
                    transform: "scaleY(0.45)"
                }], {
                    duration: e,
                    easing: o
                }), go(this.submenuRef.value, [{
                    opacity: 1
                }, {
                    opacity: 1,
                    offset: .875
                }, {
                    opacity: 0
                }], {
                    duration: e,
                    easing: t
                })]),
                this.submenuRef.value && (this.submenuRef.value.hidden = !0),
                this.emit("submenu-closed")
            }
        }
        connectedCallback() {
            super.connectedCallback(),
            this.definedController.whenDefined().then((()=>{
                document.addEventListener("pointerdown", this.onOuterClick)
            }
            ))
        }
        disconnectedCallback() {
            super.disconnectedCallback(),
            document.removeEventListener("pointerdown", this.onOuterClick)
        }
        firstUpdated(e) {
            super.firstUpdated(e),
            this.definedController.whenDefined().then((()=>{
                this.addEventListener("focus", this.onFocus),
                this.addEventListener("blur", this.onBlur),
                this.addEventListener("click", this.onClick),
                this.addEventListener("keydown", this.onKeydown),
                this.addEventListener("mouseenter", this.onMouseEnter),
                this.addEventListener("mouseleave", this.onMouseLeave)
            }
            ))
        }
        render() {
            const e = this.hasSubmenu
              , t = this.hasSlotController.test("custom")
              , i = this.hasSlotController.test("end-icon")
              , o = !this.endIcon && e && !i
              , r = this.endIcon || e || i
              , n = !u(this.icon) || "single" === this.selects || "multiple" === this.selects || this.hasSlotController.test("icon")
              , s = !!this.endText || this.hasSlotController.test("end-text")
              , a = zi({
                container: !0,
                dense: this.dense,
                preset: !t,
                "has-icon": n,
                "has-end-text": s,
                "has-end-icon": r
            });
            return ft`<mdui-ripple ${Oi(this.rippleRef)} .noRipple="${this.noRipple}"></mdui-ripple>${this.href && !this.disabled ? this.renderAnchor({
                part: "container",
                className: a,
                content: this.renderInner(o, n),
                refDirective: Oi(this.containerRef),
                tabIndex: this.focusable ? 0 : -1
            }) : ft`<div part="container" ${Oi(this.containerRef)} class="${a}">${this.renderInner(o, n)}</div>`} ${vo(e, (()=>ft`<slot name="submenu" ${Oi(this.submenuRef)} part="submenu" class="submenu" hidden></slot>`))}`
        }
        onOuterClick(e) {
            this.disabled || !this.submenuOpen || this === e.target || M.contains(this, e.target) || (this.submenuOpen = !1)
        }
        hasTrigger(e) {
            return !!this.submenuTrigger && this.submenuTrigger.split(" ").includes(e)
        }
        onFocus() {
            !this.disabled && !this.submenuOpen && this.hasTrigger("focus") && this.hasSubmenu && (this.submenuOpen = !0)
        }
        onBlur() {
            !this.disabled && this.submenuOpen && this.hasTrigger("focus") && this.hasSubmenu && (this.submenuOpen = !1)
        }
        onClick(e) {
            this.disabled || e.button || this.hasTrigger("click") && e.target === this && this.hasSubmenu && (this.submenuOpen && (this.hasTrigger("hover") || this.hasTrigger("focus")) || (this.submenuOpen = !this.submenuOpen))
        }
        onKeydown(e) {
            !this.disabled && this.hasSubmenu && (this.submenuOpen || "Enter" !== e.key || (e.stopPropagation(),
            this.submenuOpen = !0),
            this.submenuOpen && "Escape" === e.key && (e.stopPropagation(),
            this.submenuOpen = !1))
        }
        onMouseEnter() {
            !this.disabled && this.hasTrigger("hover") && this.hasSubmenu && (window.clearTimeout(this.submenuCloseTimeout),
            this.submenuOpenDelay ? this.submenuOpenTimeout = window.setTimeout((()=>{
                this.submenuOpen = !0
            }
            ), this.submenuOpenDelay) : this.submenuOpen = !0)
        }
        onMouseLeave() {
            !this.disabled && this.hasTrigger("hover") && this.hasSubmenu && (window.clearTimeout(this.submenuOpenTimeout),
            this.submenuCloseTimeout = window.setTimeout((()=>{
                this.submenuOpen = !1
            }
            ), this.submenuCloseDelay || 50))
        }
        updateSubmenuPositioner() {
            const e = M(window)
              , t = M(this.submenuRef.value)
              , i = this.getBoundingClientRect()
              , o = t.innerWidth()
              , r = t.innerHeight();
            let n = "bottom"
              , s = "right";
            e.height() - i.top > r + 8 ? n = "bottom" : i.top + i.height > r + 8 && (n = "top"),
            e.width() - i.left - i.width > o + 8 ? s = "right" : i.left > o + 8 && (s = "left"),
            M(this.submenuRef.value).css({
                top: "bottom" === n ? 0 : i.height - r,
                left: "right" === s ? i.width : -o,
                transformOrigin: ["right" === s ? 0 : "100%", "bottom" === n ? 0 : "100%"].join(" ")
            })
        }
        renderInner(e, t) {
            return ft`<slot name="custom">${this.selected ? ft`<slot name="selected-icon" part="selected-icon" class="selected-icon">${this.selectedIcon ? ft`<mdui-icon name="${this.selectedIcon}" class="i"></mdui-icon>` : ft`<mdui-icon-check class="i"></mdui-icon-check>`}</slot>` : ft`<slot name="icon" part="icon" class="icon">${t ? ft`<mdui-icon name="${this.icon}" class="i"></mdui-icon>` : Zt}</slot>`}<div class="label-container"><slot part="label" class="label"></slot></div><slot name="end-text" part="end-text" class="end-text">${this.endText}</slot>${e ? ft`<mdui-icon-arrow-right part="end-icon" class="end-icon arrow-right"></mdui-icon-arrow-right>` : ft`<slot name="end-icon" part="end-icon" class="end-icon">${this.endIcon ? ft`<mdui-icon name="${this.endIcon}"></mdui-icon>` : Zt}</slot>`}</slot>`
        }
    }
    ,
    e.MenuItem.styles = [Qt, Dr],
    Se([Ot({
        reflect: !0
    })], e.MenuItem.prototype, "value", void 0),
    Se([Ot({
        type: Boolean,
        reflect: !0,
        converter: wi
    })], e.MenuItem.prototype, "disabled", void 0),
    Se([Ot({
        reflect: !0
    })], e.MenuItem.prototype, "icon", void 0),
    Se([Ot({
        reflect: !0,
        attribute: "end-icon"
    })], e.MenuItem.prototype, "endIcon", void 0),
    Se([Ot({
        reflect: !0,
        attribute: "end-text"
    })], e.MenuItem.prototype, "endText", void 0),
    Se([Ot({
        reflect: !0,
        attribute: "selected-icon"
    })], e.MenuItem.prototype, "selectedIcon", void 0),
    Se([Ot({
        type: Boolean,
        reflect: !0,
        converter: wi,
        attribute: "submenu-open"
    })], e.MenuItem.prototype, "submenuOpen", void 0),
    Se([Ot({
        type: Boolean,
        reflect: !0,
        converter: wi
    })], e.MenuItem.prototype, "selected", void 0),
    Se([zt()], e.MenuItem.prototype, "dense", void 0),
    Se([zt()], e.MenuItem.prototype, "selects", void 0),
    Se([zt()], e.MenuItem.prototype, "submenuTrigger", void 0),
    Se([zt()], e.MenuItem.prototype, "submenuOpenDelay", void 0),
    Se([zt()], e.MenuItem.prototype, "submenuCloseDelay", void 0),
    Se([zt()], e.MenuItem.prototype, "focusable", void 0),
    Se([Ci("submenuOpen")], e.MenuItem.prototype, "onOpenChange", null),
    e.MenuItem = Se([Lt("mdui-menu-item")], e.MenuItem);
    const Mr = Pe`:host{--shape-corner:var(--mdui-shape-corner-extra-small);position:relative;display:block;border-radius:var(--shape-corner);background-color:rgb(var(--mdui-color-surface-container));box-shadow:var(--mdui-elevation-level2);min-width:7rem;max-width:17.5rem;padding-top:.5rem;padding-bottom:.5rem;--mdui-comp-ripple-state-layer-color:var(--mdui-color-on-surface)}::slotted(mdui-divider){margin-top:.5rem;margin-bottom:.5rem}`;
    e.Menu = class extends Xt {
        constructor() {
            super(...arguments),
            this.dense = !1,
            this.submenuTrigger = "click hover",
            this.submenuOpenDelay = 200,
            this.submenuCloseDelay = 200,
            this.selectedKeys = [],
            this.isInitial = !0,
            this.lastActiveItems = [],
            this.definedController = new ki(this,{
                relatedElements: ["mdui-menu-item"]
            })
        }
        get items() {
            return M(this.childrenItems).find("mdui-menu-item").add(this.childrenItems).get()
        }
        get itemsEnabled() {
            return this.items.filter((e=>!e.disabled))
        }
        get isSingle() {
            return "single" === this.selects
        }
        get isMultiple() {
            return "multiple" === this.selects
        }
        get isSelectable() {
            return this.isSingle || this.isMultiple
        }
        get isSubmenu() {
            return !M(this).parent().length
        }
        get lastActiveItem() {
            const e = this.lastActiveItems.length ? this.lastActiveItems.length - 1 : 0;
            return this.lastActiveItems[e]
        }
        set lastActiveItem(e) {
            const t = this.lastActiveItems.length ? this.lastActiveItems.length - 1 : 0;
            this.lastActiveItems[t] = e
        }
        async onSlotChange() {
            await this.definedController.whenDefined(),
            this.items.forEach((e=>{
                e.dense = this.dense,
                e.selects = this.selects,
                e.submenuTrigger = this.submenuTrigger,
                e.submenuOpenDelay = this.submenuOpenDelay,
                e.submenuCloseDelay = this.submenuCloseDelay
            }
            ))
        }
        async onSelectsChange() {
            this.isSelectable ? this.isSingle && this.setSelectedKeys(this.selectedKeys.slice(0, 1)) : this.setSelectedKeys([]),
            await this.onSelectedKeysChange()
        }
        async onSelectedKeysChange() {
            await this.definedController.whenDefined();
            const e = this.itemsEnabled.filter((e=>this.selectedKeys.includes(e.key))).map((e=>e.value))
              , t = this.isMultiple ? e : e[0] || void 0;
            this.setValue(t),
            this.isInitial || this.emit("change")
        }
        async onValueChange() {
            if (this.isInitial = !this.hasUpdated,
            await this.definedController.whenDefined(),
            !this.isSelectable)
                return void this.updateSelected();
            const e = (this.isSingle || c(this.value) ? [this.value] : this.value).filter((e=>e));
            if (e.length)
                if (this.isSingle) {
                    const t = this.itemsEnabled.find((t=>t.value === e[0]));
                    this.setSelectedKeys(t ? [t.key] : [])
                } else
                    this.isMultiple && this.setSelectedKeys(this.itemsEnabled.filter((t=>e.includes(t.value))).map((e=>e.key)));
            else
                this.setSelectedKeys([]);
            this.updateSelected(),
            this.updateFocusable()
        }
        focus(e) {
            this.lastActiveItem && this.focusOne(this.lastActiveItem, e)
        }
        blur() {
            this.lastActiveItem && this.lastActiveItem.blur()
        }
        firstUpdated(e) {
            super.firstUpdated(e),
            this.definedController.whenDefined().then((()=>{
                this.updateFocusable(),
                this.lastActiveItem = this.items.find((e=>e.focusable))
            }
            )),
            this.addEventListener("submenu-open", (e=>{
                const t = M(e.target)
                  , i = t.children("mdui-menu-item:not([disabled])").get()
                  , o = t.parents("mdui-menu-item").length + 1;
                i.length && (this.lastActiveItems[o] = i[0],
                this.updateFocusable(),
                this.focusOne(this.lastActiveItems[o]))
            }
            )),
            this.addEventListener("submenu-close", (e=>{
                const t = M(e.target).parents("mdui-menu-item").length + 1;
                this.lastActiveItems.length - 1 === t && (this.lastActiveItems.pop(),
                this.updateFocusable(),
                this.lastActiveItems[t - 1] && this.focusOne(this.lastActiveItems[t - 1]))
            }
            ))
        }
        render() {
            return ft`<slot @slotchange="${this.onSlotChange}" @click="${this.onClick}" @keydown="${this.onKeyDown}"></slot>`
        }
        setSelectedKeys(e) {
            po(this.selectedKeys, e) || (this.selectedKeys = e)
        }
        setValue(e) {
            this.isSingle || u(this.value) || u(e) ? this.value = e : po(this.value, e) || (this.value = e)
        }
        getSiblingsItems(e, t=!1) {
            return M(e).parent().children("mdui-menu-item" + (t ? ":not([disabled])" : "")).get()
        }
        updateFocusable() {
            if (this.lastActiveItem)
                this.items.forEach((e=>{
                    e.focusable = e.key === this.lastActiveItem.key
                }
                ));
            else if (this.selectedKeys.length) {
                if (this.isSingle)
                    this.items.forEach((e=>{
                        e.focusable = this.selectedKeys.includes(e.key)
                    }
                    ));
                else if (this.isMultiple) {
                    const e = this.items.find((e=>e.focusable));
                    e?.key && this.selectedKeys.includes(e.key) || this.itemsEnabled.filter((e=>this.selectedKeys.includes(e.key))).forEach(((e,t)=>e.focusable = !t))
                }
            } else
                this.itemsEnabled.forEach(((e,t)=>{
                    e.focusable = !t
                }
                ))
        }
        updateSelected() {
            this.items.forEach((e=>{
                e.selected = this.selectedKeys.includes(e.key)
            }
            ))
        }
        selectOne(e) {
            if (this.isMultiple) {
                const t = [...this.selectedKeys];
                t.includes(e.key) ? t.splice(t.indexOf(e.key), 1) : t.push(e.key),
                this.setSelectedKeys(t)
            }
            this.isSingle && (this.selectedKeys.includes(e.key) ? this.setSelectedKeys([]) : this.setSelectedKeys([e.key])),
            this.isInitial = !1,
            this.updateSelected()
        }
        async focusableOne(e) {
            this.items.forEach((t=>t.focusable = t.key === e.key)),
            await kr()
        }
        focusOne(e, t) {
            e.focus(t)
        }
        async onClick(e) {
            if (!this.definedController.isDefined())
                return;
            if (this.isSubmenu)
                return;
            if (e.button)
                return;
            const t = e.target.closest("mdui-menu-item");
            t && !t.disabled && (this.lastActiveItem = t,
            this.isSelectable && t.value && this.selectOne(t),
            await this.focusableOne(t),
            this.focusOne(t))
        }
        async onKeyDown(e) {
            if (!this.definedController.isDefined())
                return;
            if (this.isSubmenu)
                return;
            const t = e.target;
            if ("Enter" === e.key && (e.preventDefault(),
            t.click()),
            " " === e.key && (e.preventDefault(),
            this.isSelectable && t.value && (this.selectOne(t),
            await this.focusableOne(t),
            this.focusOne(t))),
            ["ArrowUp", "ArrowDown", "Home", "End"].includes(e.key)) {
                const i = this.getSiblingsItems(t, !0)
                  , o = i.find((e=>e.focusable));
                let r = o ? i.indexOf(o) : 0;
                if (i.length > 0)
                    return e.preventDefault(),
                    "ArrowDown" === e.key ? r++ : "ArrowUp" === e.key ? r-- : "Home" === e.key ? r = 0 : "End" === e.key && (r = i.length - 1),
                    r < 0 && (r = i.length - 1),
                    r > i.length - 1 && (r = 0),
                    this.lastActiveItem = i[r],
                    await this.focusableOne(i[r]),
                    void this.focusOne(i[r])
            }
        }
    }
    ,
    e.Menu.styles = [Qt, Mr],
    Se([Ot({
        reflect: !0
    })], e.Menu.prototype, "selects", void 0),
    Se([Ot()], e.Menu.prototype, "value", void 0),
    Se([Ot({
        type: Boolean,
        reflect: !0,
        converter: wi
    })], e.Menu.prototype, "dense", void 0),
    Se([Ot({
        reflect: !0,
        attribute: "submenu-trigger"
    })], e.Menu.prototype, "submenuTrigger", void 0),
    Se([Ot({
        type: Number,
        reflect: !0,
        attribute: "submenu-open-delay"
    })], e.Menu.prototype, "submenuOpenDelay", void 0),
    Se([Ot({
        type: Number,
        reflect: !0,
        attribute: "submenu-close-delay"
    })], e.Menu.prototype, "submenuCloseDelay", void 0),
    Se([zt()], e.Menu.prototype, "selectedKeys", void 0),
    Se([Nt({
        flatten: !0,
        selector: "mdui-menu-item"
    })], e.Menu.prototype, "childrenItems", void 0),
    Se([Ci("dense"), Ci("selects"), Ci("submenuTrigger"), Ci("submenuOpenDelay"), Ci("submenuCloseDelay")], e.Menu.prototype, "onSlotChange", null),
    Se([Ci("selects", !0)], e.Menu.prototype, "onSelectsChange", null),
    Se([Ci("selectedKeys", !0)], e.Menu.prototype, "onSelectedKeysChange", null),
    Se([Ci("value")], e.Menu.prototype, "onValueChange", null),
    e.Menu = Se([Lt("mdui-menu")], e.Menu);
    const Pr = Pe`:host{--shape-corner-indicator:var(--mdui-shape-corner-full);position:relative;z-index:0;flex:1;overflow:hidden;min-width:3rem;--mdui-comp-ripple-state-layer-color:var(--mdui-color-on-surface-variant)}.container{display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;text-decoration:none;cursor:pointer;-webkit-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent;padding-top:.75rem;padding-bottom:.75rem}.container:not(.initial){transition:padding var(--mdui-motion-duration-short4) var(--mdui-motion-easing-standard)}mdui-ripple{z-index:1;left:50%;transform:translateX(-50%);width:4rem;height:2rem;margin-top:.75rem;border-radius:var(--mdui-shape-corner-full)}mdui-ripple:not(.initial){transition:margin-top var(--mdui-motion-duration-short4) var(--mdui-motion-easing-standard)}.indicator{position:relative;display:flex;align-items:center;justify-content:center;background-color:transparent;border-radius:var(--shape-corner-indicator);height:2rem;width:2rem}:not(.initial) .indicator{transition:background-color var(--mdui-motion-duration-short1) var(--mdui-motion-easing-standard),width var(--mdui-motion-duration-short4) var(--mdui-motion-easing-standard)}::slotted([slot=badge]){position:absolute;transform:translate(50%,-50%)}::slotted([slot=badge][variant=small]){transform:translate(.5625rem,-.5625rem)}.active-icon,.icon{color:rgb(var(--mdui-color-on-surface-variant));font-size:1.5rem}.active-icon mdui-icon,.icon mdui-icon,::slotted([slot=active]),::slotted([slot=icon]){font-size:inherit}.icon{display:flex}.active-icon{display:none}.label{display:flex;align-items:center;height:1rem;color:rgb(var(--mdui-color-on-surface-variant));margin-top:.25rem;margin-bottom:.25rem;font-size:var(--mdui-typescale-label-medium-size);font-weight:var(--mdui-typescale-label-medium-weight);letter-spacing:var(--mdui-typescale-label-medium-tracking);line-height:var(--mdui-typescale-label-medium-line-height)}:not(.initial) .label{transition:opacity var(--mdui-motion-duration-short4) var(--mdui-motion-easing-linear)}:host(:not([active])) mdui-ripple.label-visibility-selected,mdui-ripple.label-visibility-unlabeled{margin-top:1.5rem}.container.label-visibility-unlabeled,:host(:not([active])) .container.label-visibility-selected{padding-top:1.5rem;padding-bottom:0}.container.label-visibility-unlabeled .label,:host(:not([active])) .container.label-visibility-selected .label{opacity:0}:host([active]){--mdui-comp-ripple-state-layer-color:var(--mdui-color-on-surface)}:host([active]) .indicator{width:4rem;background-color:rgb(var(--mdui-color-secondary-container))}:host([active]) .active-icon,:host([active]) .icon{color:rgb(var(--mdui-color-on-secondary-container))}:host([active]) .has-active-icon .active-icon{display:flex}:host([active]) .has-active-icon .icon{display:none}:host([active]) .label{color:rgb(var(--mdui-color-on-surface))}`;
    e.NavigationBarItem = class extends (Hi(Yi(qi(Xt)))) {
        constructor() {
            super(...arguments),
            this.isInitial = !0,
            this.active = !1,
            this.disabled = !1,
            this.key = Ri(),
            this.rippleRef = Li(),
            this.hasSlotController = new Jt(this,"active-icon")
        }
        get rippleElement() {
            return this.rippleRef.value
        }
        get rippleDisabled() {
            return this.disabled
        }
        get focusElement() {
            return this.href ? this.renderRoot?.querySelector("._a") : this
        }
        get focusDisabled() {
            return this.disabled
        }
        render() {
            const e = zi({
                "label-visibility-selected": "selected" === this.labelVisibility,
                "label-visibility-labeled": "labeled" === this.labelVisibility,
                "label-visibility-unlabeled": "unlabeled" === this.labelVisibility,
                initial: this.isInitial
            })
              , t = zi([{
                container: !0,
                "has-active-icon": this.activeIcon || this.hasSlotController.test("active-icon")
            }, e]);
            return ft`<mdui-ripple .noRipple="${!this.active || this.noRipple}" class="${e}" ${Oi(this.rippleRef)}></mdui-ripple>${this.href ? this.renderAnchor({
                part: "container",
                className: t,
                content: this.renderInner()
            }) : ft`<div part="container" class="${t}">${this.renderInner()}</div>`}`
        }
        renderInner() {
            return ft`<div part="indicator" class="indicator"><slot name="badge" part="badge" class="badge"></slot><slot name="active-icon" part="active-icon" class="active-icon">${this.activeIcon ? ft`<mdui-icon name="${this.activeIcon}"></mdui-icon>` : Zt}</slot><slot name="icon" part="icon" class="icon">${this.icon ? ft`<mdui-icon name="${this.icon}"></mdui-icon>` : Zt}</slot></div><slot part="label" class="label"></slot>`
        }
    }
    ,
    e.NavigationBarItem.styles = [Qt, Pr],
    Se([Ot({
        reflect: !0
    })], e.NavigationBarItem.prototype, "icon", void 0),
    Se([Ot({
        reflect: !0,
        attribute: "active-icon"
    })], e.NavigationBarItem.prototype, "activeIcon", void 0),
    Se([Ot({
        reflect: !0
    })], e.NavigationBarItem.prototype, "value", void 0),
    Se([zt()], e.NavigationBarItem.prototype, "labelVisibility", void 0),
    Se([zt()], e.NavigationBarItem.prototype, "isInitial", void 0),
    Se([Ot({
        type: Boolean,
        reflect: !0,
        converter: wi
    })], e.NavigationBarItem.prototype, "active", void 0),
    Se([zt()], e.NavigationBarItem.prototype, "disabled", void 0),
    e.NavigationBarItem = Se([Lt("mdui-navigation-bar-item")], e.NavigationBarItem);
    const Lr = Pe`:host{--shape-corner:var(--mdui-shape-corner-none);--z-index:2000;position:fixed;right:0;bottom:0;left:0;display:flex;flex:0 0 auto;overflow:hidden;border-radius:var(--shape-corner) var(--shape-corner) 0 0;z-index:var(--z-index);transition-property:transform;transition-duration:var(--mdui-motion-duration-long2);transition-timing-function:var(--mdui-motion-easing-emphasized);height:5rem;background-color:rgb(var(--mdui-color-surface));box-shadow:var(--mdui-elevation-level2)}:host([scroll-target]:not([scroll-target=''])){position:absolute}:host([hide]){transform:translateY(5.625rem);transition-duration:var(--mdui-motion-duration-short4)}`;
    e.NavigationBar = class extends (xi(Mi)) {
        constructor() {
            super(...arguments),
            this.hide = !1,
            this.labelVisibility = "auto",
            this.activeKey = 0,
            this.isInitial = !0,
            this.definedController = new ki(this,{
                relatedElements: ["mdui-navigation-bar-item"]
            })
        }
        get scrollPaddingPosition() {
            return "bottom"
        }
        get layoutPlacement() {
            return "bottom"
        }
        async onActiveKeyChange() {
            await this.definedController.whenDefined();
            const e = this.items.find((e=>e.key === this.activeKey));
            this.value = e?.value,
            this.isInitial || this.emit("change")
        }
        async onValueChange() {
            this.isInitial = !this.hasUpdated,
            await this.definedController.whenDefined();
            const e = this.items.find((e=>e.value === this.value));
            this.activeKey = e?.key ?? 0,
            this.updateItems()
        }
        async onLabelVisibilityChange() {
            await this.definedController.whenDefined(),
            this.updateItems()
        }
        firstUpdated(e) {
            super.firstUpdated(e),
            this.addEventListener("transitionend", (e=>{
                e.target === this && this.emit(this.hide ? "hidden" : "shown")
            }
            ))
        }
        render() {
            return ft`<slot @slotchange="${this.onSlotChange}" @click="${this.onClick}"></slot>`
        }
        runScrollThreshold(e) {
            if (!e && !this.hide) {
                this.emit("hide", {
                    cancelable: !0
                }) && (this.hide = !0)
            }
            if (e && this.hide) {
                this.emit("show", {
                    cancelable: !0
                }) && (this.hide = !1)
            }
        }
        onClick(e) {
            if (e.button)
                return;
            const t = e.target.closest("mdui-navigation-bar-item");
            t && (this.activeKey = t.key,
            this.isInitial = !1,
            this.updateItems())
        }
        updateItems() {
            const e = this.items
              , t = "auto" === this.labelVisibility ? e.length <= 3 ? "labeled" : "selected" : this.labelVisibility;
            e.forEach((e=>{
                e.active = this.activeKey === e.key,
                e.labelVisibility = t,
                e.isInitial = this.isInitial
            }
            ))
        }
        async onSlotChange() {
            await this.definedController.whenDefined(),
            this.updateItems()
        }
    }
    ,
    e.NavigationBar.styles = [Qt, Lr],
    Se([Ot({
        type: Boolean,
        reflect: !0,
        converter: wi
    })], e.NavigationBar.prototype, "hide", void 0),
    Se([Ot({
        reflect: !0,
        attribute: "label-visibility"
    })], e.NavigationBar.prototype, "labelVisibility", void 0),
    Se([Ot({
        reflect: !0
    })], e.NavigationBar.prototype, "value", void 0),
    Se([Ot({
        reflect: !0,
        attribute: "scroll-behavior"
    })], e.NavigationBar.prototype, "scrollBehavior", void 0),
    Se([zt()], e.NavigationBar.prototype, "activeKey", void 0),
    Se([Nt({
        selector: "mdui-navigation-bar-item",
        flatten: !0
    })], e.NavigationBar.prototype, "items", void 0),
    Se([Ci("activeKey", !0)], e.NavigationBar.prototype, "onActiveKeyChange", null),
    Se([Ci("value")], e.NavigationBar.prototype, "onValueChange", null),
    Se([Ci("labelVisibility", !0)], e.NavigationBar.prototype, "onLabelVisibilityChange", null),
    e.NavigationBar = Se([Lt("mdui-navigation-bar")], e.NavigationBar);
    const _r = e=>{
        const t = s()
          , i = r()
          , o = t.getComputedStyle(i.documentElement)
          , n = v(e) ? M(e).innerWidth() : d(e) ? e : M(t).innerWidth()
          , a = e=>{
            const t = o.getPropertyValue(`--mdui-breakpoint-${e}`).toLowerCase();
            return parseFloat(t)
        }
        ;
        return {
            up: e=>n >= a(e),
            down: e=>n < a(e),
            only(e) {
                return "xxl" === e ? this.up(e) : this.up(e) && this.down((e=>{
                    switch (e) {
                    case "xs":
                        return "sm";
                    case "sm":
                        return "md";
                    case "md":
                        return "lg";
                    case "lg":
                        return "xl";
                    case "xl":
                        return "xxl"
                    }
                }
                )(e))
            },
            not(e) {
                return !this.only(e)
            },
            between(e, t) {
                return this.up(e) && this.down(t)
            }
        }
    }
      , Br = Pe`:host{--shape-corner:var(--mdui-shape-corner-large);--z-index:2200;display:none;position:fixed;top:0;bottom:0;left:0;z-index:1;width:22.5rem}:host([placement=right]){left:initial;right:0}:host([mobile]),:host([modal]){top:0!important;right:0;bottom:0!important;width:initial;z-index:var(--z-index)}:host([placement=right][mobile]),:host([placement=right][modal]){left:0}:host([contained]){position:absolute}.overlay{position:absolute;inset:0;z-index:inherit;background-color:rgba(var(--mdui-color-scrim),.4)}.panel{display:block;position:absolute;top:0;bottom:0;left:0;width:100%;overflow:auto;z-index:inherit;background-color:rgb(var(--mdui-color-surface));box-shadow:var(--mdui-elevation-level0)}:host([mobile]) .panel,:host([modal]) .panel{border-radius:0 var(--shape-corner) var(--shape-corner) 0;max-width:80%;width:22.5rem;background-color:rgb(var(--mdui-color-surface-container-low));box-shadow:var(--mdui-elevation-level1)}:host([placement=right]) .panel{left:initial;right:0}:host([placement=right][mobile]) .panel,:host([placement=right][modal]) .panel{border-radius:var(--shape-corner) 0 0 var(--shape-corner)}`;
    e.NavigationDrawer = class extends Mi {
        constructor() {
            super(...arguments),
            this.open = !1,
            this.modal = !1,
            this.closeOnEsc = !1,
            this.closeOnOverlayClick = !1,
            this.placement = "left",
            this.contained = !1,
            this.mobile = !1,
            this.overlayRef = Li(),
            this.panelRef = Li(),
            this.definedController = new ki(this,{
                needDomReady: !0
            })
        }
        get layoutPlacement() {
            return this.placement
        }
        get lockTarget() {
            return this.contained || this.isParentLayout ? this.parentElement : document.documentElement
        }
        get isModal() {
            return this.mobile || this.modal
        }
        async onContainedChange() {
            await this.definedController.whenDefined(),
            this.observeResize?.unobserve(),
            this.observeResize = Ei(this.contained ? this.parentElement : document.documentElement, (()=>{
                const e = this.contained ? this.parentElement : void 0;
                this.mobile = _r(e).down("md"),
                this.isParentLayout && this.layoutManager.updateLayout(this, {
                    width: this.isModal ? 0 : void 0
                })
            }
            ))
        }
        onPlacementChange() {
            this.isParentLayout && this.layoutManager.updateLayout(this)
        }
        async onMobileChange() {
            !this.open || this.isParentLayout || this.contained || (await this.definedController.whenDefined(),
            this.isModal ? (Eo(this, this.lockTarget),
            await this.getLockTargetAnimate(!1, 0)) : (To(this, this.lockTarget),
            await this.getLockTargetAnimate(!0, 0)))
        }
        async onOpenChange() {
            let e = this.panelRef.value
              , t = this.overlayRef.value;
            const i = "right" === this.placement
              , o = Co(this, "linear")
              , r = Co(this, "emphasized")
              , n = (e,t)=>{
                M(this.layoutManager.getItemsAndMain()).css("transition", p(e) ? null : `all ${e}ms ${t}`)
            }
              , s = async()=>{
                const i = [];
                if (this.isModal ? i.push(t, e) : this.isParentLayout || i.push(this.lockTarget),
                this.isParentLayout) {
                    const e = this.layoutManager.getItemsAndMain()
                      , t = e.indexOf(this);
                    i.push(...e.slice(t))
                }
                this.isModal || i.includes(this) || i.push(this),
                await Promise.all(i.map((e=>bo(e))))
            }
            ;
            if (this.open) {
                const a = this.hasUpdated;
                if (a || (await this.updateComplete,
                e = this.panelRef.value,
                t = this.overlayRef.value),
                a) {
                    if (!this.emit("open", {
                        cancelable: !0
                    }))
                        return
                }
                await this.definedController.whenDefined(),
                this.style.display = "block",
                this.originalTrigger = document.activeElement,
                this.isModal && (this.modalHelper.activate(),
                this.contained || Eo(this, this.lockTarget)),
                await s(),
                requestAnimationFrame((()=>{
                    const t = this.querySelector("[autofocus]");
                    t ? t.focus({
                        preventScroll: !0
                    }) : e.focus({
                        preventScroll: !0
                    })
                }
                ));
                const l = xo(this, "long2")
                  , c = [];
                if (this.isModal ? c.push(go(t, [{
                    opacity: 0
                }, {
                    opacity: 1,
                    offset: .3
                }, {
                    opacity: 1
                }], {
                    duration: a ? l : 0,
                    easing: o
                })) : this.isParentLayout || c.push(this.getLockTargetAnimate(!0, a ? l : 0)),
                this.isParentLayout && a && (n(l, r),
                this.layoutManager.updateLayout(this)),
                c.push(go(this.isModal ? e : this, [{
                    transform: `translateX(${i ? "" : "-"}100%)`
                }, {
                    transform: "translateX(0)"
                }], {
                    duration: a ? l : 0,
                    easing: r
                })),
                await Promise.all(c),
                !this.open)
                    return;
                this.isParentLayout && a && n(null),
                a && this.emit("opened")
            } else if (this.hasUpdated) {
                if (!this.emit("close", {
                    cancelable: !0
                }))
                    return;
                await this.definedController.whenDefined(),
                this.isModal && this.modalHelper.deactivate(),
                await s();
                const a = xo(this, "short4")
                  , c = [];
                if (this.isModal ? c.push(go(t, [{
                    opacity: 1
                }, {
                    opacity: 0
                }], {
                    duration: a,
                    easing: o
                })) : this.isParentLayout || c.push(this.getLockTargetAnimate(!1, a)),
                this.isParentLayout && (n(a, r),
                this.layoutManager.updateLayout(this, {
                    width: 0
                })),
                c.push(go(this.isModal ? e : this, [{
                    transform: "translateX(0)"
                }, {
                    transform: `translateX(${i ? "" : "-"}100%)`
                }], {
                    duration: a,
                    easing: r
                })),
                await Promise.all(c),
                this.open)
                    return;
                this.isParentLayout && n(null),
                this.style.display = "none",
                this.isModal && !this.contained && To(this, this.lockTarget);
                const d = this.originalTrigger;
                l(d?.focus) && setTimeout((()=>d.focus())),
                this.emit("closed")
            }
        }
        connectedCallback() {
            super.connectedCallback(),
            this.modalHelper = new ko(this)
        }
        disconnectedCallback() {
            super.disconnectedCallback(),
            To(this, this.lockTarget),
            this.observeResize?.unobserve()
        }
        firstUpdated(e) {
            super.firstUpdated(e),
            this.addEventListener("keydown", (e=>{
                this.open && this.closeOnEsc && "Escape" === e.key && this.isModal && (e.stopPropagation(),
                this.open = !1)
            }
            ))
        }
        render() {
            return ft`${vo(this.isModal, (()=>ft`<div ${Oi(this.overlayRef)} part="overlay" class="overlay" @click="${this.onOverlayClick}"></div>`))}<slot ${Oi(this.panelRef)} part="panel" class="panel" tabindex="0"></slot>`
        }
        onOverlayClick() {
            this.emit("overlay-click"),
            this.closeOnOverlayClick && (this.open = !1)
        }
        getLockTargetAnimate(e, t) {
            const i = "right" === this.placement ? "paddingRight" : "paddingLeft"
              , o = M(this.panelRef.value).innerWidth() + "px";
            return go(this.lockTarget, [{
                [i]: e ? 0 : o
            }, {
                [i]: e ? o : 0
            }], {
                duration: t,
                easing: Co(this, "emphasized"),
                fill: "forwards"
            })
        }
    }
    ,
    e.NavigationDrawer.styles = [Qt, Br],
    Se([Ot({
        type: Boolean,
        reflect: !0,
        converter: wi
    })], e.NavigationDrawer.prototype, "open", void 0),
    Se([Ot({
        type: Boolean,
        reflect: !0,
        converter: wi
    })], e.NavigationDrawer.prototype, "modal", void 0),
    Se([Ot({
        type: Boolean,
        reflect: !0,
        converter: wi,
        attribute: "close-on-esc"
    })], e.NavigationDrawer.prototype, "closeOnEsc", void 0),
    Se([Ot({
        type: Boolean,
        reflect: !0,
        converter: wi,
        attribute: "close-on-overlay-click"
    })], e.NavigationDrawer.prototype, "closeOnOverlayClick", void 0),
    Se([Ot({
        reflect: !0
    })], e.NavigationDrawer.prototype, "placement", void 0),
    Se([Ot({
        type: Boolean,
        reflect: !0,
        converter: wi
    })], e.NavigationDrawer.prototype, "contained", void 0),
    Se([Ot({
        type: Boolean,
        reflect: !0,
        converter: wi
    })], e.NavigationDrawer.prototype, "mobile", void 0),
    Se([Ci("contained")], e.NavigationDrawer.prototype, "onContainedChange", null),
    Se([Ci("placement", !0)], e.NavigationDrawer.prototype, "onPlacementChange", null),
    Se([Ci("mobile", !0), Ci("modal", !0)], e.NavigationDrawer.prototype, "onMobileChange", null),
    Se([Ci("open")], e.NavigationDrawer.prototype, "onOpenChange", null),
    e.NavigationDrawer = Se([Lt("mdui-navigation-drawer")], e.NavigationDrawer);
    const Or = Pe`:host{--shape-corner:var(--mdui-shape-corner-none);--z-index:2000;position:fixed;top:0;bottom:0;left:0;display:flex;flex-direction:column;align-items:center;border-radius:0 var(--shape-corner) var(--shape-corner) 0;z-index:var(--z-index);width:5rem;background-color:rgb(var(--mdui-color-surface));padding:.375rem .75rem}:host([contained]){position:absolute}:host([divider]){border-right:.0625rem solid rgb(var(--mdui-color-surface-variant));width:5.0625rem}:host([placement=right]){left:initial;right:0;border-radius:var(--shape-corner) 0 0 var(--shape-corner)}:host([placement=right][divider]){border-right:none;border-left:.0625rem solid rgb(var(--mdui-color-surface-variant))}.bottom,.items,.top{display:flex;flex-direction:column;align-items:center;width:100%}.top{margin-bottom:1.75rem}.bottom{margin-top:1.75rem}::slotted([slot=bottom]),::slotted([slot=top]),::slotted(mdui-navigation-rail-item){margin-top:.375rem;margin-bottom:.375rem}:host([alignment=start]) .top-spacer{flex-grow:0}:host([alignment=start]) .bottom-spacer{flex-grow:1}:host([alignment=end]) .top-spacer{flex-grow:1}:host([alignment=end]) .bottom-spacer{flex-grow:0}:host([alignment=center]){justify-content:center}:host([alignment=center]) .bottom,:host([alignment=center]) .top{position:absolute}:host([alignment=center]) .top{top:.375rem}:host([alignment=center]) .bottom{bottom:.375rem}`;
    e.NavigationRail = class extends Mi {
        constructor() {
            super(...arguments),
            this.placement = "left",
            this.alignment = "start",
            this.contained = !1,
            this.divider = !1,
            this.activeKey = 0,
            this.hasSlotController = new Jt(this,"top","bottom"),
            this.definedController = new ki(this,{
                relatedElements: ["mdui-navigation-rail-item"]
            }),
            this.isInitial = !0
        }
        get layoutPlacement() {
            return this.placement
        }
        get parentTarget() {
            return this.contained || this.isParentLayout ? this.parentElement : document.body
        }
        get isRight() {
            return "right" === this.placement
        }
        get paddingValue() {
            return ["fixed", "absolute"].includes(M(this).css("position")) ? this.offsetWidth : void 0
        }
        async onActiveKeyChange() {
            await this.definedController.whenDefined();
            const e = this.items.find((e=>e.key === this.activeKey));
            this.value = e?.value,
            this.isInitial || this.emit("change")
        }
        async onValueChange() {
            this.isInitial = !this.hasUpdated,
            await this.definedController.whenDefined();
            const e = this.items.find((e=>e.value === this.value));
            this.activeKey = e?.key ?? 0,
            this.updateItems()
        }
        async onContainedChange() {
            this.isParentLayout || (await this.definedController.whenDefined(),
            M(document.body).css({
                paddingLeft: this.contained || this.isRight ? null : this.paddingValue,
                paddingRight: this.contained || !this.isRight ? null : this.paddingValue
            }),
            M(this.parentElement).css({
                paddingLeft: this.contained && !this.isRight ? this.paddingValue : null,
                paddingRight: this.contained && this.isRight ? this.paddingValue : null
            }))
        }
        async onPlacementChange() {
            await this.definedController.whenDefined(),
            this.layoutManager?.updateLayout(this),
            this.items.forEach((e=>{
                e.placement = this.placement
            }
            )),
            this.isParentLayout || M(this.parentTarget).css({
                paddingLeft: this.isRight ? null : this.paddingValue,
                paddingRight: this.isRight ? this.paddingValue : null
            })
        }
        connectedCallback() {
            super.connectedCallback(),
            this.isParentLayout || this.definedController.whenDefined().then((()=>{
                M(this.parentTarget).css({
                    paddingLeft: this.isRight ? null : this.paddingValue,
                    paddingRight: this.isRight ? this.paddingValue : null
                })
            }
            ))
        }
        disconnectedCallback() {
            super.disconnectedCallback(),
            !this.isParentLayout && this.definedController.isDefined() && M(this.parentTarget).css({
                paddingLeft: this.isRight ? void 0 : null,
                paddingRight: this.isRight ? null : void 0
            })
        }
        render() {
            const e = this.hasSlotController.test("top")
              , t = this.hasSlotController.test("bottom");
            return ft`${vo(e, (()=>ft`<slot name="top" part="top" class="top"></slot>`))} <span class="top-spacer"></span><slot part="items" class="items" @slotchange="${this.onSlotChange}" @click="${this.onClick}"></slot><span class="bottom-spacer"></span> ${vo(t, (()=>ft`<slot name="bottom" part="bottom" class="bottom"></slot>`))}`
        }
        onClick(e) {
            if (e.button)
                return;
            const t = e.target.closest("mdui-navigation-rail-item");
            t && (this.activeKey = t.key,
            this.isInitial = !1,
            this.updateItems())
        }
        updateItems() {
            this.items.forEach((e=>{
                e.active = this.activeKey === e.key,
                e.placement = this.placement,
                e.isInitial = this.isInitial
            }
            ))
        }
        async onSlotChange() {
            await this.definedController.whenDefined(),
            this.updateItems()
        }
    }
    ,
    e.NavigationRail.styles = [Qt, Or],
    Se([Ot({
        reflect: !0
    })], e.NavigationRail.prototype, "value", void 0),
    Se([Ot({
        reflect: !0
    })], e.NavigationRail.prototype, "placement", void 0),
    Se([Ot({
        reflect: !0
    })], e.NavigationRail.prototype, "alignment", void 0),
    Se([Ot({
        type: Boolean,
        reflect: !0,
        converter: wi
    })], e.NavigationRail.prototype, "contained", void 0),
    Se([Ot({
        type: Boolean,
        reflect: !0,
        converter: wi
    })], e.NavigationRail.prototype, "divider", void 0),
    Se([zt()], e.NavigationRail.prototype, "activeKey", void 0),
    Se([Nt({
        selector: "mdui-navigation-rail-item",
        flatten: !0
    })], e.NavigationRail.prototype, "items", void 0),
    Se([Ci("activeKey", !0)], e.NavigationRail.prototype, "onActiveKeyChange", null),
    Se([Ci("value")], e.NavigationRail.prototype, "onValueChange", null),
    Se([Ci("contained", !0)], e.NavigationRail.prototype, "onContainedChange", null),
    Se([Ci("placement", !0)], e.NavigationRail.prototype, "onPlacementChange", null),
    e.NavigationRail = Se([Lt("mdui-navigation-rail")], e.NavigationRail);
    const zr = Pe`:host{--shape-corner-indicator:var(--mdui-shape-corner-full);position:relative;z-index:0;width:100%;--mdui-comp-ripple-state-layer-color:var(--mdui-color-on-surface-variant)}.container{display:flex;flex-direction:column;align-items:center;justify-content:center;text-decoration:none;cursor:pointer;-webkit-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent;height:3.5rem}.container:not(.initial){transition:padding var(--mdui-motion-duration-short4) var(--mdui-motion-easing-standard)}mdui-ripple{z-index:1;width:3.5rem;height:2rem;border-radius:var(--mdui-shape-corner-full)}.container:not(.has-label)+mdui-ripple{height:3.5rem}.indicator{position:relative;display:flex;align-items:center;justify-content:center;background-color:transparent;border-radius:var(--shape-corner-indicator);height:2rem;width:2rem}:not(.initial) .indicator{transition:background-color var(--mdui-motion-duration-short1) var(--mdui-motion-easing-standard),width var(--mdui-motion-duration-short4) var(--mdui-motion-easing-standard),height var(--mdui-motion-duration-short4) var(--mdui-motion-easing-standard)}::slotted([slot=badge]){position:absolute;transform:translate(50%,-50%)}.placement-right::slotted([slot=badge]){transform:translate(-50%,-50%)}::slotted([slot=badge][variant=small]){transform:translate(.5625rem,-.5625rem)}.placement-right::slotted([slot=badge][variant=small]){transform:translate(-.5625rem,-.5625rem)}.active-icon,.icon{color:rgb(var(--mdui-color-on-surface-variant));font-size:1.5rem}.active-icon mdui-icon,.icon mdui-icon,::slotted([slot=active-icon]),::slotted([slot=icon]){font-size:inherit}.icon{display:flex}.active-icon{display:none}.label{display:flex;align-items:center;height:1rem;color:rgb(var(--mdui-color-on-surface-variant));margin-top:.25rem;margin-bottom:.25rem;font-size:var(--mdui-typescale-label-medium-size);font-weight:var(--mdui-typescale-label-medium-weight);letter-spacing:var(--mdui-typescale-label-medium-tracking);line-height:var(--mdui-typescale-label-medium-line-height)}:not(.initial) .label{transition:opacity var(--mdui-motion-duration-short4) var(--mdui-motion-easing-linear)}:host([active]){--mdui-comp-ripple-state-layer-color:var(--mdui-color-on-surface)}:host([active]) .indicator{width:3.5rem;background-color:rgb(var(--mdui-color-secondary-container))}:host([active]) :not(.has-label) .indicator{height:3.5rem}:host([active]) .active-icon,:host([active]) .icon{color:rgb(var(--mdui-color-on-secondary-container))}:host([active]) .has-active-icon .active-icon{display:flex}:host([active]) .has-active-icon .icon{display:none}:host([active]) .label{color:rgb(var(--mdui-color-on-surface))}`;
    e.NavigationRailItem = class extends (Hi(Yi(qi(Xt)))) {
        constructor() {
            super(...arguments),
            this.active = !1,
            this.isInitial = !0,
            this.placement = "left",
            this.disabled = !1,
            this.key = Ri(),
            this.rippleRef = Li(),
            this.hasSlotController = new Jt(this,"[default]","active-icon")
        }
        get rippleElement() {
            return this.rippleRef.value
        }
        get rippleDisabled() {
            return this.disabled
        }
        get focusElement() {
            return this.href ? this.renderRoot?.querySelector("._a") : this
        }
        get focusDisabled() {
            return this.disabled
        }
        render() {
            const e = this.hasSlotController.test("[default]")
              , t = zi({
                container: !0,
                "has-label": e,
                "has-active-icon": this.activeIcon || this.hasSlotController.test("active-icon"),
                initial: this.isInitial
            });
            return ft`${this.href ? this.renderAnchor({
                part: "container",
                className: t,
                content: this.renderInner(e)
            }) : ft`<div part="container" class="${t}">${this.renderInner(e)}</div>`}<mdui-ripple .noRipple="${!this.active || this.noRipple}" ${Oi(this.rippleRef)}></mdui-ripple>`
        }
        renderInner(e) {
            return ft`<div part="indicator" class="indicator"><slot name="badge" part="badge" class="${ji({
                badge: !0,
                "placement-right": "right" === this.placement
            })}"></slot><slot name="active-icon" part="active-icon" class="active-icon">${this.activeIcon ? ft`<mdui-icon name="${this.activeIcon}"></mdui-icon>` : Zt}</slot><slot name="icon" part="icon" class="icon">${this.icon ? ft`<mdui-icon name="${this.icon}"></mdui-icon>` : Zt}</slot></div>${e ? ft`<slot part="label" class="label"></slot>` : gt}`
        }
    }
    ,
    e.NavigationRailItem.styles = [Qt, zr],
    Se([Ot({
        reflect: !0
    })], e.NavigationRailItem.prototype, "icon", void 0),
    Se([Ot({
        reflect: !0,
        attribute: "active-icon"
    })], e.NavigationRailItem.prototype, "activeIcon", void 0),
    Se([Ot({
        reflect: !0
    })], e.NavigationRailItem.prototype, "value", void 0),
    Se([Ot({
        type: Boolean,
        reflect: !0,
        converter: wi
    })], e.NavigationRailItem.prototype, "active", void 0),
    Se([zt()], e.NavigationRailItem.prototype, "isInitial", void 0),
    Se([zt()], e.NavigationRailItem.prototype, "placement", void 0),
    Se([zt()], e.NavigationRailItem.prototype, "disabled", void 0),
    e.NavigationRailItem = Se([Lt("mdui-navigation-rail-item")], e.NavigationRailItem);
    let Nr = class extends Mt {
        render() {
            return ro('<path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2z"/>')
        }
    }
    ;
    Nr.styles = oo,
    Nr = Se([Lt("mdui-icon-circle")], Nr);
    let Fr = class extends Mt {
        render() {
            return ro('<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>')
        }
    }
    ;
    Fr.styles = oo,
    Fr = Se([Lt("mdui-icon-radio-button-unchecked")], Fr);
    const Vr = Pe`:host{position:relative;display:inline-flex;align-items:center;cursor:pointer;-webkit-tap-highlight-color:transparent;-webkit-user-select:none;user-select:none;touch-action:manipulation;zoom:1;-webkit-user-drag:none;border-radius:.125rem;font-size:var(--mdui-typescale-label-large-size);font-weight:var(--mdui-typescale-label-large-weight);letter-spacing:var(--mdui-typescale-label-large-tracking);line-height:var(--mdui-typescale-label-large-line-height)}.icon{display:flex;position:absolute;font-size:1.5rem}:not(.initial) .icon{transition-duration:var(--mdui-motion-duration-short4);transition-timing-function:var(--mdui-motion-easing-standard)}.unchecked-icon{transition-property:color;color:rgb(var(--mdui-color-on-surface-variant))}:host([focused]) .unchecked-icon,:host([hover]) .unchecked-icon,:host([pressed]) .unchecked-icon{color:rgb(var(--mdui-color-on-surface))}.checked-icon{opacity:0;transform:scale(.2);transition-property:color,opacity,transform;color:rgb(var(--mdui-color-primary))}.icon .i,::slotted([slot=checked-icon]),::slotted([slot=unchecked-icon]){color:inherit;font-size:inherit}i{position:relative;display:flex;align-items:center;justify-content:center;flex-shrink:0;overflow:hidden;border-radius:50%;width:2.5rem;height:2.5rem;--mdui-comp-ripple-state-layer-color:var(--mdui-color-on-surface)}.label{display:flex;width:100%;padding-top:.625rem;padding-bottom:.625rem;color:rgb(var(--mdui-color-on-surface))}.label:not(.initial){transition:color var(--mdui-motion-duration-short4) var(--mdui-motion-easing-standard)}:host([checked]) i{--mdui-comp-ripple-state-layer-color:var(--mdui-color-primary)}:host([checked]) .icon{color:rgb(var(--mdui-color-primary))}:host([checked]) .checked-icon{opacity:1;transform:scale(.5)}i.invalid{--mdui-comp-ripple-state-layer-color:var(--mdui-color-error)}i.invalid .icon{color:rgb(var(--mdui-color-error))}.label.invalid{color:rgb(var(--mdui-color-error))}:host([disabled]),:host([group-disabled]){cursor:default;pointer-events:none}:host([disabled]) .icon,:host([group-disabled]) .icon{color:rgba(var(--mdui-color-on-surface),38%)}:host([disabled]) .label,:host([group-disabled]) .label{color:rgba(var(--mdui-color-on-surface),38%)}`;
    e.Radio = class extends (Yi(qi(Xt))) {
        constructor() {
            super(...arguments),
            this.value = "",
            this.disabled = !1,
            this.checked = !1,
            this.invalid = !1,
            this.groupDisabled = !1,
            this.focusable = !0,
            this.isInitial = !0,
            this.rippleRef = Li()
        }
        get rippleElement() {
            return this.rippleRef.value
        }
        get rippleDisabled() {
            return this.isDisabled()
        }
        get focusElement() {
            return this
        }
        get focusDisabled() {
            return this.isDisabled() || !this.focusable
        }
        onCheckedChange() {
            this.emit("change")
        }
        firstUpdated(e) {
            super.firstUpdated(e),
            this.addEventListener("click", (()=>{
                this.isDisabled() || (this.checked = !0)
            }
            ))
        }
        render() {
            const e = ji({
                invalid: this.invalid,
                initial: this.isInitial
            });
            return ft`<i part="control" class="${e}"><mdui-ripple ${Oi(this.rippleRef)} .noRipple="${this.noRipple}"></mdui-ripple><slot name="unchecked-icon" part="unchecked-icon" class="icon unchecked-icon">${this.uncheckedIcon ? ft`<mdui-icon name="${this.uncheckedIcon}" class="i"></mdui-icon>` : ft`<mdui-icon-radio-button-unchecked class="i"></mdui-icon-radio-button-unchecked>`}</slot><slot name="checked-icon" part="checked-icon" class="icon checked-icon">${this.checkedIcon ? ft`<mdui-icon name="${this.checkedIcon}" class="i"></mdui-icon>` : ft`<mdui-icon-circle class="i"></mdui-icon-circle>`}</slot></i><slot part="label" class="label ${e}"></slot>`
        }
        isDisabled() {
            return this.disabled || this.groupDisabled
        }
    }
    ,
    e.Radio.styles = [Qt, Vr],
    Se([Ot({
        reflect: !0
    })], e.Radio.prototype, "value", void 0),
    Se([Ot({
        type: Boolean,
        reflect: !0,
        converter: wi
    })], e.Radio.prototype, "disabled", void 0),
    Se([Ot({
        type: Boolean,
        reflect: !0,
        converter: wi
    })], e.Radio.prototype, "checked", void 0),
    Se([Ot({
        reflect: !0,
        attribute: "unchecked-icon"
    })], e.Radio.prototype, "uncheckedIcon", void 0),
    Se([Ot({
        reflect: !0,
        attribute: "checked-icon"
    })], e.Radio.prototype, "checkedIcon", void 0),
    Se([zt()], e.Radio.prototype, "invalid", void 0),
    Se([Ot({
        type: Boolean,
        reflect: !0,
        converter: wi,
        attribute: "group-disabled"
    })], e.Radio.prototype, "groupDisabled", void 0),
    Se([zt()], e.Radio.prototype, "focusable", void 0),
    Se([zt()], e.Radio.prototype, "isInitial", void 0),
    Se([Ci("checked", !0)], e.Radio.prototype, "onCheckedChange", null),
    e.Radio = Se([Lt("mdui-radio")], e.Radio);
    const Hr = Pe`:host{display:inline-block}fieldset{border:none;padding:0;margin:0;min-width:0}input{position:absolute;padding:0;opacity:0;pointer-events:none;width:1.25rem;height:1.25rem;margin:0 0 0 .625rem}`;
    function *Ur(e, t) {
        if (void 0 !== e) {
            let i = 0;
            for (const o of e)
                yield t(o, i++)
        }
    }
    e.RadioGroup = class extends Xt {
        constructor() {
            super(...arguments),
            this.disabled = !1,
            this.name = "",
            this.value = "",
            this.defaultValue = "",
            this.required = !1,
            this.invalid = !1,
            this.isInitial = !0,
            this.inputRef = Li(),
            this.formController = new Vi(this),
            this.definedController = new ki(this,{
                relatedElements: ["mdui-radio"]
            })
        }
        get validity() {
            return this.inputRef.value.validity
        }
        get validationMessage() {
            return this.inputRef.value.validationMessage
        }
        get items() {
            return M(this).find("mdui-radio").get()
        }
        get itemsEnabled() {
            return M(this).find("mdui-radio:not([disabled])").get()
        }
        async onValueChange() {
            this.isInitial = !1,
            await this.definedController.whenDefined(),
            this.emit("input"),
            this.emit("change"),
            this.updateItems(),
            this.updateRadioFocusable(),
            await this.updateComplete;
            const e = this.formController.getForm();
            e && Fi.get(e)?.has(this) ? (this.invalid = !1,
            Fi.get(e).delete(this)) : this.invalid = !this.inputRef.value.checkValidity()
        }
        async onInvalidChange() {
            await this.definedController.whenDefined(),
            this.updateItems()
        }
        checkValidity() {
            const e = this.inputRef.value.checkValidity();
            return e || this.emit("invalid", {
                bubbles: !1,
                cancelable: !0,
                composed: !1
            }),
            e
        }
        reportValidity() {
            if (this.invalid = !this.inputRef.value.reportValidity(),
            this.invalid) {
                this.emit("invalid", {
                    bubbles: !1,
                    cancelable: !0,
                    composed: !1
                }) || (this.inputRef.value.blur(),
                this.inputRef.value.focus())
            }
            return !this.invalid
        }
        setCustomValidity(e) {
            this.inputRef.value.setCustomValidity(e),
            this.invalid = !this.inputRef.value.checkValidity()
        }
        render() {
            return ft`<fieldset><input ${Oi(this.inputRef)} type="radio" class="input" name="${Ft(this.name)}" value="${Ft(this.value)}" .checked="${!!this.value}" .required="${this.required}" tabindex="-1" @keydown="${this.onKeyDown}"><slot @click="${this.onClick}" @keydown="${this.onKeyDown}" @slotchange="${this.onSlotChange}" @change="${this.onCheckedChange}"></slot></fieldset>`
        }
        updateRadioFocusable() {
            const e = this.items
              , t = e.find((e=>e.checked));
            t ? e.forEach((e=>{
                e.focusable = e === t
            }
            )) : this.itemsEnabled.forEach(((e,t)=>{
                e.focusable = !t
            }
            ))
        }
        async onClick(e) {
            await this.definedController.whenDefined();
            const t = e.target.closest("mdui-radio");
            t && !t.disabled && (this.value = t.value,
            await this.updateComplete,
            t.focus())
        }
        async onKeyDown(e) {
            if (!["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", " "].includes(e.key))
                return;
            e.preventDefault(),
            await this.definedController.whenDefined();
            const t = this.itemsEnabled
              , i = t.find((e=>e.checked)) ?? t[0]
              , o = " " === e.key ? 0 : ["ArrowUp", "ArrowLeft"].includes(e.key) ? -1 : 1;
            let r = t.indexOf(i) + o;
            r < 0 && (r = t.length - 1),
            r > t.length - 1 && (r = 0),
            this.value = t[r].value,
            await this.updateComplete,
            t[r].focus()
        }
        async onSlotChange() {
            await this.definedController.whenDefined(),
            this.updateItems(),
            this.updateRadioFocusable()
        }
        onCheckedChange(e) {
            e.stopPropagation()
        }
        updateItems() {
            this.items.forEach((e=>{
                e.checked = e.value === this.value,
                e.invalid = this.invalid,
                e.groupDisabled = this.disabled,
                e.isInitial = this.isInitial
            }
            ))
        }
    }
    ,
    e.RadioGroup.styles = [Qt, Hr],
    Se([Ot({
        type: Boolean,
        reflect: !0,
        converter: wi
    })], e.RadioGroup.prototype, "disabled", void 0),
    Se([Ot({
        reflect: !0
    })], e.RadioGroup.prototype, "form", void 0),
    Se([Ot({
        reflect: !0
    })], e.RadioGroup.prototype, "name", void 0),
    Se([Ot({
        reflect: !0
    })], e.RadioGroup.prototype, "value", void 0),
    Se([io()], e.RadioGroup.prototype, "defaultValue", void 0),
    Se([Ot({
        type: Boolean,
        reflect: !0,
        converter: wi
    })], e.RadioGroup.prototype, "required", void 0),
    Se([zt()], e.RadioGroup.prototype, "invalid", void 0),
    Se([Ci("value", !0)], e.RadioGroup.prototype, "onValueChange", null),
    Se([Ci("invalid", !0), Ci("disabled")], e.RadioGroup.prototype, "onInvalidChange", null),
    e.RadioGroup = Se([Lt("mdui-radio-group")], e.RadioGroup);
    const Kr = Pe`:host{position:relative;display:block;width:100%;-webkit-tap-highlight-color:transparent;height:2.5rem;padding:0 1.25rem}label{position:relative;display:block;width:100%;height:100%}input[type=range]{position:absolute;inset:0;z-index:4;height:100%;cursor:pointer;opacity:0;appearance:none;width:calc(100% + 20rem * 2 / 16);margin:0 -1.25rem;padding:0 .75rem}:host([disabled]) input[type=range]{cursor:not-allowed}.track-active,.track-inactive{position:absolute;top:50%;height:.25rem;margin-top:-.125rem}.track-inactive{left:-.125rem;right:-.125rem;border-radius:var(--mdui-shape-corner-full);background-color:rgb(var(--mdui-color-surface-container-highest))}.invalid .track-inactive{background-color:rgba(var(--mdui-color-error),.12)}:host([disabled]) .track-inactive{background-color:rgba(var(--mdui-color-on-surface),.12)}.track-active{background-color:rgb(var(--mdui-color-primary))}.invalid .track-active{background-color:rgb(var(--mdui-color-error))}:host([disabled]) .track-active{background-color:rgba(var(--mdui-color-on-surface),.38)}.handle{position:absolute;top:50%;transform:translate(-50%);cursor:pointer;z-index:2;width:2.5rem;height:2.5rem;margin-top:-1.25rem;--mdui-comp-ripple-state-layer-color:var(--mdui-color-primary)}.invalid .handle{--mdui-comp-ripple-state-layer-color:var(--mdui-color-error)}.handle .elevation,.handle::before{position:absolute;display:block;content:' ';left:.625rem;top:.625rem;width:1.25rem;height:1.25rem;border-radius:var(--mdui-shape-corner-full)}.handle .elevation{background-color:rgb(var(--mdui-color-primary));box-shadow:var(--mdui-elevation-level1)}.invalid .handle .elevation{background-color:rgb(var(--mdui-color-error))}:host([disabled]) .handle .elevation{background-color:rgba(var(--mdui-color-on-surface),.38);box-shadow:var(--mdui-elevation-level0)}.handle::before{background-color:rgb(var(--mdui-color-background))}.handle mdui-ripple{border-radius:var(--mdui-shape-corner-full)}.label{position:absolute;left:50%;transform:translateX(-50%) scale(0);transform-origin:center bottom;display:flex;align-items:center;justify-content:center;cursor:default;white-space:nowrap;-webkit-user-select:none;user-select:none;pointer-events:none;transition:transform var(--mdui-motion-duration-short2) var(--mdui-motion-easing-standard);bottom:2.5rem;min-width:1.75rem;height:1.75rem;padding:.375rem .5rem;border-radius:var(--mdui-shape-corner-full);color:rgb(var(--mdui-color-on-primary));font-size:var(--mdui-typescale-label-medium-size);font-weight:var(--mdui-typescale-label-medium-weight);letter-spacing:var(--mdui-typescale-label-medium-tracking);line-height:var(--mdui-typescale-label-medium-line-height);background-color:rgb(var(--mdui-color-primary))}.invalid .label{color:rgb(var(--mdui-color-on-error));background-color:rgb(var(--mdui-color-error))}.label::after{content:' ';position:absolute;z-index:-1;transform:rotate(45deg);width:.875rem;height:.875rem;bottom:-.125rem;background-color:rgb(var(--mdui-color-primary))}.invalid .label::after{background-color:rgb(var(--mdui-color-error))}.label-visible{transform:translateX(-50%) scale(1);transition:transform var(--mdui-motion-duration-short4) var(--mdui-motion-easing-standard)}.tickmark{position:absolute;top:50%;transform:translate(-50%);width:.125rem;height:.125rem;margin-top:-.0625rem;border-radius:var(--mdui-shape-corner-full);background-color:rgba(var(--mdui-color-on-surface-variant),.38)}.invalid .tickmark{background-color:rgba(var(--mdui-color-error),.38)}.tickmark.active{background-color:rgba(var(--mdui-color-on-primary),.38)}.invalid .tickmark.active{background-color:rgba(var(--mdui-color-on-error),.38)}:host([disabled]) .tickmark{background-color:rgba(var(--mdui-color-on-surface),.38)}`;
    class qr extends (Yi(qi(Xt))) {
        constructor() {
            super(...arguments),
            this.min = 0,
            this.max = 100,
            this.step = 1,
            this.tickmarks = !1,
            this.nolabel = !1,
            this.disabled = !1,
            this.name = "",
            this.invalid = !1,
            this.labelVisible = !1,
            this.inputRef = Li(),
            this.trackActiveRef = Li(),
            this.labelFormatter = e=>e.toString()
        }
        get validity() {
            return this.inputRef.value.validity
        }
        get validationMessage() {
            return this.inputRef.value.validationMessage
        }
        get rippleDisabled() {
            return this.disabled
        }
        get focusElement() {
            return this.inputRef.value
        }
        get focusDisabled() {
            return this.disabled
        }
        onDisabledChange() {
            this.invalid = !this.inputRef.value.checkValidity()
        }
        checkValidity() {
            const e = this.inputRef.value.checkValidity();
            return e || this.emit("invalid", {
                bubbles: !1,
                cancelable: !0,
                composed: !1
            }),
            e
        }
        reportValidity() {
            if (this.invalid = !this.inputRef.value.reportValidity(),
            this.invalid) {
                this.emit("invalid", {
                    bubbles: !1,
                    cancelable: !0,
                    composed: !1
                }) || (this.blur(),
                this.focus())
            }
            return !this.invalid
        }
        setCustomValidity(e) {
            this.inputRef.value.setCustomValidity(e),
            this.invalid = !this.inputRef.value.checkValidity()
        }
        fixValue(e) {
            const {min: t, max: i, step: o} = this;
            e = Math.min(Math.max(e, t), i);
            let r = t + Math.round((e - t) / o) * o;
            return r > i && (r -= o),
            r
        }
        getCandidateValues() {
            return Array.from({
                length: this.max - this.min + 1
            }, ((e,t)=>t + this.min)).filter((e=>!((e - this.min) % this.step)))
        }
        renderLabel(e) {
            return vo(!this.nolabel, (()=>ft`<div part="label" class="label ${ji({
                "label-visible": this.labelVisible
            })}">${this.labelFormatter(e)}</div>`))
        }
        onChange() {
            this.emit("change")
        }
    }
    qr.styles = [Qt, Kr],
    Se([Ot({
        type: Number,
        reflect: !0
    })], qr.prototype, "min", void 0),
    Se([Ot({
        type: Number,
        reflect: !0
    })], qr.prototype, "max", void 0),
    Se([Ot({
        type: Number,
        reflect: !0
    })], qr.prototype, "step", void 0),
    Se([Ot({
        type: Boolean,
        reflect: !0,
        converter: wi
    })], qr.prototype, "tickmarks", void 0),
    Se([Ot({
        type: Boolean,
        reflect: !0,
        converter: wi
    })], qr.prototype, "nolabel", void 0),
    Se([Ot({
        type: Boolean,
        reflect: !0,
        converter: wi
    })], qr.prototype, "disabled", void 0),
    Se([Ot({
        reflect: !0
    })], qr.prototype, "form", void 0),
    Se([Ot({
        reflect: !0
    })], qr.prototype, "name", void 0),
    Se([zt()], qr.prototype, "invalid", void 0),
    Se([zt()], qr.prototype, "labelVisible", void 0),
    Se([Ot({
        attribute: !1
    })], qr.prototype, "labelFormatter", void 0),
    Se([Ci("disabled", !0)], qr.prototype, "onDisabledChange", null),
    e.RangeSlider = class extends qr {
        constructor() {
            super(...arguments),
            this.defaultValue = [],
            this.currentHandle = "start",
            this.rippleStartRef = Li(),
            this.rippleEndRef = Li(),
            this.handleStartRef = Li(),
            this.handleEndRef = Li(),
            this.formController = new Vi(this),
            this._value = [],
            this.getRippleIndex = ()=>this.hoverHandle ? "start" === this.hoverHandle ? 0 : 1 : "start" === this.currentHandle ? 0 : 1
        }
        get value() {
            return this._value
        }
        set value(e) {
            const t = [...this._value];
            this._value = [this.fixValue(e[0]), this.fixValue(e[1])],
            this.requestUpdate("value", t),
            this.updateComplete.then((()=>{
                this.updateStyle();
                const e = this.formController.getForm();
                e && Fi.get(e)?.has(this) ? (this.invalid = !1,
                Fi.get(e).delete(this)) : this.invalid = !this.inputRef.value.checkValidity()
            }
            ))
        }
        get rippleElement() {
            return [this.rippleStartRef.value, this.rippleEndRef.value]
        }
        connectedCallback() {
            super.connectedCallback(),
            this.value.length || (this.value = [this.min, this.max]),
            this.value[0] = this.fixValue(this.value[0]),
            this.value[1] = this.fixValue(this.value[1]),
            this.defaultValue.length || (this.defaultValue = [...this.value])
        }
        firstUpdated(e) {
            super.firstUpdated(e);
            const t = e=>{
                const t = M(this)
                  , i = parseFloat(t.css("padding-left"))
                  , o = parseFloat(t.css("padding-right"))
                  , r = (e.offsetX - i) / (this.clientWidth - i - o);
                return (this.max - this.min) * r + this.min > (this.value[1] - this.value[0]) / 2 + this.value[0] ? "end" : "start"
            }
              , i = ()=>{
                this.disabled || (this.labelVisible = !0)
            }
              , o = ()=>{
                this.disabled || (this.labelVisible = !1)
            }
            ;
            this.addEventListener("touchstart", i),
            this.addEventListener("mousedown", i),
            this.addEventListener("touchend", o),
            this.addEventListener("mouseup", o),
            this.addEventListener("pointerdown", (e=>{
                this.currentHandle = t(e)
            }
            )),
            this.addEventListener("pointermove", (e=>{
                const i = t(e);
                this.hoverHandle !== i && (this.endHover(e),
                this.hoverHandle = i,
                this.startHover(e))
            }
            )),
            this.updateStyle()
        }
        render() {
            return ft`<label class="${ji({
                invalid: this.invalid
            })}"><input ${Oi(this.inputRef)} type="range" step="${this.step}" min="${this.min}" max="${this.max}" ?disabled="${this.disabled}" @input="${this.onInput}" @change="${this.onChange}"><div part="track-inactive" class="track-inactive"></div><div ${Oi(this.trackActiveRef)} part="track-active" class="track-active"></div><div ${Oi(this.handleStartRef)} part="handle" class="handle start" style="${Yt({
                "z-index": "start" === this.currentHandle ? "2" : "1"
            })}"><div class="elevation"></div><mdui-ripple ${Oi(this.rippleStartRef)} .noRipple="${this.noRipple}"></mdui-ripple>${this.renderLabel(this.value[0])}</div><div ${Oi(this.handleEndRef)} part="handle" class="handle end" style="${Yt({
                "z-index": "end" === this.currentHandle ? "2" : "1"
            })}"><div class="elevation"></div><mdui-ripple ${Oi(this.rippleEndRef)} .noRipple="${this.noRipple}"></mdui-ripple>${this.renderLabel(this.value[1])}</div>${vo(this.tickmarks, (()=>Ur(this.getCandidateValues(), (e=>ft`<div part="tickmark" class="tickmark ${ji({
                active: e > this.value[0] && e < this.value[1]
            })}" style="${Yt({
                left: (e - this.min) / this.max * 100 + "%",
                display: e === this.value[0] || e === this.value[1] ? "none" : "block"
            })}"></div>`))))}</label>`
        }
        updateStyle() {
            const e = e=>(e - this.min) / (this.max - this.min) * 100
              , t = e(this.value[0])
              , i = e(this.value[1]);
            this.trackActiveRef.value.style.width = i - t + "%",
            this.trackActiveRef.value.style.left = `${t}%`,
            this.handleStartRef.value.style.left = `${t}%`,
            this.handleEndRef.value.style.left = `${i}%`
        }
        onInput() {
            const e = "start" === this.currentHandle
              , t = parseFloat(this.inputRef.value.value)
              , i = this.value[0]
              , o = this.value[1]
              , r = ()=>{
                this.updateStyle()
            }
            ;
            e ? t <= o ? (this.value = [t, o],
            r()) : i !== o && (this.value = [o, o],
            r()) : t >= i ? (this.value = [i, t],
            r()) : i !== o && (this.value = [i, i],
            r())
        }
    }
    ,
    e.RangeSlider.styles = [qr.styles],
    Se([io()], e.RangeSlider.prototype, "defaultValue", void 0),
    Se([zt()], e.RangeSlider.prototype, "currentHandle", void 0),
    Se([Ot({
        type: Array,
        attribute: !1
    })], e.RangeSlider.prototype, "value", null),
    e.RangeSlider = Se([Lt("mdui-range-slider")], e.RangeSlider);
    const jr = Pe`:host{position:relative;display:inline-flex;flex-grow:1;flex-shrink:0;float:left;height:100%;overflow:hidden;cursor:pointer;-webkit-tap-highlight-color:transparent;border:.0625rem solid rgb(var(--mdui-color-outline))}.button{width:100%;padding:0 .75rem}:host([invalid]){color:rgb(var(--mdui-color-error));border-color:rgb(var(--mdui-color-error))}:host([invalid]) .button{background-color:rgb(var(--mdui-color-error-container))}:host([selected]){color:rgb(var(--mdui-color-on-secondary-container));background-color:rgb(var(--mdui-color-secondary-container));--mdui-comp-ripple-state-layer-color:var(
      --mdui-color-on-secondary-container
    )}:host([disabled]),:host([group-disabled]){cursor:default;pointer-events:none;color:rgba(var(--mdui-color-on-surface),38%);border-color:rgba(var(--mdui-color-on-surface),12%)}:host([loading]){cursor:default;pointer-events:none}:host(:not(.mdui-segmented-button-first)){margin-left:-.0625rem}:host(.mdui-segmented-button-first){border-radius:var(--shape-corner) 0 0 var(--shape-corner)}:host(.mdui-segmented-button-last){border-radius:0 var(--shape-corner) var(--shape-corner) 0}.end-icon,.icon,.selected-icon{display:inline-flex;font-size:1.28571429em}.end-icon .i,.icon .i,.selected-icon .i,::slotted([slot=end-icon]),::slotted([slot=icon]),::slotted([slot=selected-icon]){font-size:inherit}mdui-circular-progress{width:1.125rem;height:1.125rem}:host([disabled]) mdui-circular-progress{opacity:.38}.label{display:inline-flex}.has-icon .label{padding-left:.5rem}.has-end-icon .label{padding-right:.5rem}`;
    e.SegmentedButton = class extends Ji {
        constructor() {
            super(...arguments),
            this.selected = !1,
            this.invalid = !1,
            this.groupDisabled = !1,
            this.key = Ri(),
            this.rippleRef = Li(),
            this.hasSlotController = new Jt(this,"[default]","icon","end-icon")
        }
        get rippleElement() {
            return this.rippleRef.value
        }
        get rippleDisabled() {
            return this.isDisabled() || this.loading
        }
        get focusDisabled() {
            return this.isDisabled() || this.loading
        }
        render() {
            const e = zi({
                button: !0,
                "has-icon": this.icon || this.selected || this.loading || this.hasSlotController.test("icon"),
                "has-end-icon": this.endIcon || this.hasSlotController.test("end-icon")
            });
            return ft`<mdui-ripple ${Oi(this.rippleRef)} .noRipple="${this.noRipple}"></mdui-ripple>${this.isButton() ? this.renderButton({
                className: e,
                part: "button",
                content: this.renderInner()
            }) : this.isDisabled() || this.loading ? ft`<span part="button" class="_a ${e}">${this.renderInner()}</span>` : this.renderAnchor({
                className: e,
                part: "button",
                content: this.renderInner()
            })}`
        }
        isDisabled() {
            return this.disabled || this.groupDisabled
        }
        renderIcon() {
            return this.loading ? this.renderLoading() : this.selected ? ft`<slot name="selected-icon" part="selected-icon" class="selected-icon">${this.selectedIcon ? ft`<mdui-icon name="${this.selectedIcon}" class="i"></mdui-icon>` : ft`<mdui-icon-check class="i"></mdui-icon-check>`}</slot>` : ft`<slot name="icon" part="icon" class="icon">${this.icon ? ft`<mdui-icon name="${this.icon}" class="i"></mdui-icon>` : Zt}</slot>`
        }
        renderLabel() {
            return this.hasSlotController.test("[default]") ? ft`<slot part="label" class="label"></slot>` : Zt
        }
        renderEndIcon() {
            return ft`<slot name="end-icon" part="end-icon" class="end-icon">${this.endIcon ? ft`<mdui-icon name="${this.endIcon}" class="i"></mdui-icon>` : Zt}</slot>`
        }
        renderInner() {
            return [this.renderIcon(), this.renderLabel(), this.renderEndIcon()]
        }
    }
    ,
    e.SegmentedButton.styles = [Ji.styles, jr],
    Se([Ot({
        reflect: !0
    })], e.SegmentedButton.prototype, "icon", void 0),
    Se([Ot({
        reflect: !0,
        attribute: "end-icon"
    })], e.SegmentedButton.prototype, "endIcon", void 0),
    Se([Ot({
        reflect: !0,
        attribute: "selected-icon"
    })], e.SegmentedButton.prototype, "selectedIcon", void 0),
    Se([Ot({
        type: Boolean,
        reflect: !0,
        converter: wi
    })], e.SegmentedButton.prototype, "selected", void 0),
    Se([Ot({
        type: Boolean,
        reflect: !0,
        converter: wi
    })], e.SegmentedButton.prototype, "invalid", void 0),
    Se([Ot({
        type: Boolean,
        reflect: !0,
        converter: wi,
        attribute: "group-disabled"
    })], e.SegmentedButton.prototype, "groupDisabled", void 0),
    e.SegmentedButton = Se([Lt("mdui-segmented-button")], e.SegmentedButton);
    const Wr = Pe`:host{--shape-corner:var(--mdui-shape-corner-full);position:relative;display:inline-flex;vertical-align:middle;height:2.5rem;font-size:var(--mdui-typescale-label-large-size);font-weight:var(--mdui-typescale-label-large-weight);letter-spacing:var(--mdui-typescale-label-large-tracking);line-height:var(--mdui-typescale-label-large-line-height);color:rgb(var(--mdui-color-on-surface));--mdui-comp-ripple-state-layer-color:var(--mdui-color-on-surface)}:host([full-width]){display:flex;flex-wrap:nowrap}input,select{position:absolute;width:100%;height:100%;padding:0;opacity:0;pointer-events:none}`;
    e.SegmentedButtonGroup = class extends Xt {
        constructor() {
            super(...arguments),
            this.fullWidth = !1,
            this.disabled = !1,
            this.required = !1,
            this.name = "",
            this.value = "",
            this.defaultValue = "",
            this.selectedKeys = [],
            this.invalid = !1,
            this.isInitial = !0,
            this.inputRef = Li(),
            this.formController = new Vi(this),
            this.definedController = new ki(this,{
                relatedElements: ["mdui-segmented-button"]
            })
        }
        get validity() {
            return this.inputRef.value.validity
        }
        get validationMessage() {
            return this.inputRef.value.validationMessage
        }
        get items() {
            return M(this).find("mdui-segmented-button").get()
        }
        get itemsEnabled() {
            return M(this).find("mdui-segmented-button:not([disabled])").get()
        }
        get isSingle() {
            return "single" === this.selects
        }
        get isMultiple() {
            return "multiple" === this.selects
        }
        get isSelectable() {
            return this.isSingle || this.isMultiple
        }
        async onSelectsChange() {
            this.isSelectable ? this.isSingle && this.setSelectedKeys(this.selectedKeys.slice(0, 1)) : this.setSelectedKeys([]),
            await this.onSelectedKeysChange()
        }
        async onSelectedKeysChange() {
            await this.definedController.whenDefined();
            const e = this.itemsEnabled.filter((e=>this.selectedKeys.includes(e.key))).map((e=>e.value))
              , t = this.isMultiple ? e : e[0] || "";
            this.setValue(t),
            this.isInitial || this.emit("change")
        }
        async onValueChange() {
            if (this.isInitial = !this.hasUpdated,
            await this.definedController.whenDefined(),
            !this.isSelectable)
                return void this.updateItems();
            const e = (this.isSingle || c(this.value) ? [this.value] : this.value).filter((e=>e));
            if (e.length)
                if (this.isSingle) {
                    const t = this.itemsEnabled.find((t=>t.value === e[0]));
                    this.setSelectedKeys(t ? [t.key] : [])
                } else
                    this.isMultiple && this.setSelectedKeys(this.itemsEnabled.filter((t=>e.includes(t.value))).map((e=>e.key)));
            else
                this.setSelectedKeys([]);
            if (this.updateItems(),
            !this.isInitial) {
                const e = this.formController.getForm();
                e && Fi.get(e)?.has(this) ? (this.invalid = !1,
                Fi.get(e).delete(this)) : this.invalid = !this.inputRef.value.checkValidity()
            }
        }
        async onInvalidChange() {
            await this.definedController.whenDefined(),
            this.updateItems()
        }
        connectedCallback() {
            super.connectedCallback(),
            this.value = this.isMultiple && c(this.value) ? this.value ? [this.value] : [] : this.value,
            this.defaultValue = "multiple" === this.selects ? [] : ""
        }
        checkValidity() {
            const e = this.inputRef.value.checkValidity();
            return e || this.emit("invalid", {
                bubbles: !1,
                cancelable: !0,
                composed: !1
            }),
            e
        }
        reportValidity() {
            if (this.invalid = !this.inputRef.value.reportValidity(),
            this.invalid) {
                this.emit("invalid", {
                    bubbles: !1,
                    cancelable: !0,
                    composed: !1
                }) || (this.inputRef.value.blur(),
                this.inputRef.value.focus())
            }
            return !this.invalid
        }
        setCustomValidity(e) {
            this.inputRef.value.setCustomValidity(e),
            this.invalid = !this.inputRef.value.checkValidity()
        }
        render() {
            return ft`${vo(this.isSelectable && this.isSingle, (()=>ft`<input ${Oi(this.inputRef)} type="radio" name="${Ft(this.name)}" value="1" .disabled="${this.disabled}" .required="${this.required}" .checked="${!!this.value}" tabindex="-1" @keydown="${this.onInputKeyDown}">`))}${vo(this.isSelectable && this.isMultiple, (()=>ft`<select ${Oi(this.inputRef)} name="${Ft(this.name)}" .disabled="${this.disabled}" .required="${this.required}" multiple="multiple" tabindex="-1" @keydown="${this.onInputKeyDown}">${Ur(this.value, (e=>ft`<option selected="selected" value="${e}"></option>`))}</select>`))}<slot @slotchange="${this.onSlotChange}" @click="${this.onClick}"></slot>`
        }
        selectOne(e) {
            if (this.isMultiple) {
                const t = [...this.selectedKeys];
                t.includes(e.key) ? t.splice(t.indexOf(e.key), 1) : t.push(e.key),
                this.setSelectedKeys(t)
            }
            this.isSingle && (this.selectedKeys.includes(e.key) ? this.setSelectedKeys([]) : this.setSelectedKeys([e.key])),
            this.isInitial = !1,
            this.updateItems()
        }
        async onClick(e) {
            if (e.button)
                return;
            await this.definedController.whenDefined();
            const t = e.target.closest("mdui-segmented-button");
            t && !t.disabled && this.isSelectable && t.value && this.selectOne(t)
        }
        async onInputKeyDown(e) {
            if (["Enter", " "].includes(e.key)) {
                if (e.preventDefault(),
                await this.definedController.whenDefined(),
                this.isSingle) {
                    const t = e.target;
                    t.checked = !t.checked,
                    this.selectOne(this.itemsEnabled[0]),
                    this.itemsEnabled[0].focus()
                }
                this.isMultiple && (this.selectOne(this.itemsEnabled[0]),
                this.itemsEnabled[0].focus())
            }
        }
        async onSlotChange() {
            await this.definedController.whenDefined(),
            this.updateItems(!0)
        }
        setSelectedKeys(e) {
            po(this.selectedKeys, e) || (this.selectedKeys = e)
        }
        setValue(e) {
            this.isSingle ? this.value = e : po(this.value, e) || (this.value = e)
        }
        updateItems(e=!1) {
            const t = this.items;
            t.forEach(((i,o)=>{
                i.invalid = this.invalid,
                i.groupDisabled = this.disabled,
                i.selected = this.selectedKeys.includes(i.key),
                e && (i.classList.toggle("mdui-segmented-button-first", 0 === o),
                i.classList.toggle("mdui-segmented-button-last", o === t.length - 1))
            }
            ))
        }
    }
    ,
    e.SegmentedButtonGroup.styles = [Qt, Wr],
    Se([Ot({
        type: Boolean,
        reflect: !0,
        converter: wi,
        attribute: "full-width"
    })], e.SegmentedButtonGroup.prototype, "fullWidth", void 0),
    Se([Ot({
        reflect: !0
    })], e.SegmentedButtonGroup.prototype, "selects", void 0),
    Se([Ot({
        type: Boolean,
        reflect: !0,
        converter: wi
    })], e.SegmentedButtonGroup.prototype, "disabled", void 0),
    Se([Ot({
        type: Boolean,
        reflect: !0,
        converter: wi
    })], e.SegmentedButtonGroup.prototype, "required", void 0),
    Se([Ot({
        reflect: !0
    })], e.SegmentedButtonGroup.prototype, "form", void 0),
    Se([Ot({
        reflect: !0
    })], e.SegmentedButtonGroup.prototype, "name", void 0),
    Se([Ot()], e.SegmentedButtonGroup.prototype, "value", void 0),
    Se([io()], e.SegmentedButtonGroup.prototype, "defaultValue", void 0),
    Se([zt()], e.SegmentedButtonGroup.prototype, "selectedKeys", void 0),
    Se([zt()], e.SegmentedButtonGroup.prototype, "invalid", void 0),
    Se([Ci("selects", !0)], e.SegmentedButtonGroup.prototype, "onSelectsChange", null),
    Se([Ci("selectedKeys", !0)], e.SegmentedButtonGroup.prototype, "onSelectedKeysChange", null),
    Se([Ci("value")], e.SegmentedButtonGroup.prototype, "onValueChange", null),
    Se([Ci("invalid", !0), Ci("disabled")], e.SegmentedButtonGroup.prototype, "onInvalidChange", null),
    e.SegmentedButtonGroup = Se([Lt("mdui-segmented-button-group")], e.SegmentedButtonGroup);
    const Gr = new WeakMap;
    let Yr = 0;
    const Xr = new Map
      , Jr = new WeakSet
      , Zr = ()=>new Promise((e=>requestAnimationFrame(e)))
      , Qr = (e,t)=>{
        const i = e - t;
        return 0 === i ? void 0 : i
    }
      , en = (e,t)=>{
        const i = e / t;
        return 1 === i ? void 0 : i
    }
      , tn = {
        left: (e,t)=>{
            const i = Qr(e, t);
            return {
                value: i,
                transform: null == i || isNaN(i) ? void 0 : `translateX(${i}px)`
            }
        }
        ,
        top: (e,t)=>{
            const i = Qr(e, t);
            return {
                value: i,
                transform: null == i || isNaN(i) ? void 0 : `translateY(${i}px)`
            }
        }
        ,
        width: (e,t)=>{
            let i;
            0 === t && (t = 1,
            i = {
                width: "1px"
            });
            const o = en(e, t);
            return {
                value: o,
                overrideFrom: i,
                transform: null == o || isNaN(o) ? void 0 : `scaleX(${o})`
            }
        }
        ,
        height: (e,t)=>{
            let i;
            0 === t && (t = 1,
            i = {
                height: "1px"
            });
            const o = en(e, t);
            return {
                value: o,
                overrideFrom: i,
                transform: null == o || isNaN(o) ? void 0 : `scaleY(${o})`
            }
        }
    }
      , on = {
        duration: 333,
        easing: "ease-in-out"
    }
      , rn = ["left", "top", "width", "height", "opacity", "color", "background"]
      , nn = new WeakMap;
    const sn = qt(class extends hi {
        constructor(e) {
            if (super(e),
            this.t = !1,
            this.i = null,
            this.o = null,
            this.h = !0,
            this.shouldLog = !1,
            e.type === Ht)
                throw Error("The `animate` directive must be used in attribute position.");
            this.createFinished()
        }
        createFinished() {
            this.resolveFinished?.(),
            this.finished = new Promise((e=>{
                this.l = e
            }
            ))
        }
        async resolveFinished() {
            this.l?.(),
            this.l = void 0
        }
        render(e) {
            return gt
        }
        getController() {
            return Gr.get(this.u)
        }
        isDisabled() {
            return this.options.disabled || this.getController()?.disabled
        }
        update(e, [t]) {
            const i = void 0 === this.u;
            return i && (this.u = e.options?.host,
            this.u.addController(this),
            this.u.updateComplete.then((e=>this.t = !0)),
            this.element = e.element,
            nn.set(this.element, this)),
            this.optionsOrCallback = t,
            (i || "function" != typeof t) && this.p(t),
            this.render(t)
        }
        p(e) {
            e = e ?? {};
            const t = this.getController();
            void 0 !== t && ((e = {
                ...t.defaultOptions,
                ...e
            }).keyframeOptions = {
                ...t.defaultOptions.keyframeOptions,
                ...e.keyframeOptions
            }),
            e.properties ??= rn,
            this.options = e
        }
        m() {
            const e = {}
              , t = this.element.getBoundingClientRect()
              , i = getComputedStyle(this.element);
            return this.options.properties.forEach((o=>{
                const r = t[o] ?? (tn[o] ? void 0 : i[o])
                  , n = Number(r);
                e[o] = isNaN(n) ? r + "" : n
            }
            )),
            e
        }
        v() {
            let e, t = !0;
            return this.options.guard && (e = this.options.guard(),
            t = ((e,t)=>{
                if (Array.isArray(e)) {
                    if (Array.isArray(t) && t.length === e.length && e.every(((e,i)=>e === t[i])))
                        return !1
                } else if (t === e)
                    return !1;
                return !0
            }
            )(e, this._)),
            this.h = this.t && !this.isDisabled() && !this.isAnimating() && t && this.element.isConnected,
            this.h && (this._ = Array.isArray(e) ? Array.from(e) : e),
            this.h
        }
        hostUpdate() {
            "function" == typeof this.optionsOrCallback && this.p(this.optionsOrCallback()),
            this.v() && (this.A = this.m(),
            this.i = this.i ?? this.element.parentNode,
            this.o = this.element.nextSibling)
        }
        async hostUpdated() {
            if (!this.h || !this.element.isConnected || this.options.skipInitial && !this.isHostRendered)
                return;
            let e;
            this.prepare(),
            await Zr;
            const t = this.O()
              , i = this.j(this.options.keyframeOptions, t)
              , o = this.m();
            if (void 0 !== this.A) {
                const {from: i, to: r} = this.N(this.A, o, t);
                this.log("measured", [this.A, o, i, r]),
                e = this.calculateKeyframes(i, r)
            } else {
                const i = Xr.get(this.options.inId);
                if (i) {
                    Xr.delete(this.options.inId);
                    const {from: r, to: n} = this.N(i, o, t);
                    e = this.calculateKeyframes(r, n),
                    e = this.options.in ? [{
                        ...this.options.in[0],
                        ...e[0]
                    }, ...this.options.in.slice(1), e[1]] : e,
                    Yr++,
                    e.forEach((e=>e.zIndex = Yr))
                } else
                    this.options.in && (e = [...this.options.in, {}])
            }
            this.animate(e, i)
        }
        resetStyles() {
            void 0 !== this.P && (this.element.setAttribute("style", this.P ?? ""),
            this.P = void 0)
        }
        commitStyles() {
            this.P = this.element.getAttribute("style"),
            this.webAnimation?.commitStyles(),
            this.webAnimation?.cancel()
        }
        reconnected() {}
        async disconnected() {
            if (!this.h)
                return;
            if (void 0 !== this.options.id && Xr.set(this.options.id, this.A),
            void 0 === this.options.out)
                return;
            if (this.prepare(),
            await Zr(),
            this.i?.isConnected) {
                const e = this.o && this.o.parentNode === this.i ? this.o : null;
                if (this.i.insertBefore(this.element, e),
                this.options.stabilizeOut) {
                    const e = this.m();
                    this.log("stabilizing out");
                    const t = this.A.left - e.left
                      , i = this.A.top - e.top;
                    !("static" === getComputedStyle(this.element).position) || 0 === t && 0 === i || (this.element.style.position = "relative"),
                    0 !== t && (this.element.style.left = t + "px"),
                    0 !== i && (this.element.style.top = i + "px")
                }
            }
            const e = this.j(this.options.keyframeOptions);
            await this.animate(this.options.out, e),
            this.element.remove()
        }
        prepare() {
            this.createFinished()
        }
        start() {
            this.options.onStart?.(this)
        }
        didFinish(e) {
            e && this.options.onComplete?.(this),
            this.A = void 0,
            this.animatingProperties = void 0,
            this.frames = void 0,
            this.resolveFinished()
        }
        O() {
            const e = [];
            for (let t = this.element.parentNode; t; t = t?.parentNode) {
                const i = nn.get(t);
                i && !i.isDisabled() && i && e.push(i)
            }
            return e
        }
        get isHostRendered() {
            const e = Jr.has(this.u);
            return e || this.u.updateComplete.then((()=>{
                Jr.add(this.u)
            }
            )),
            e
        }
        j(e, t=this.O()) {
            const i = {
                ...on
            };
            return t.forEach((e=>Object.assign(i, e.options.keyframeOptions))),
            Object.assign(i, e),
            i
        }
        N(e, t, i) {
            e = {
                ...e
            },
            t = {
                ...t
            };
            const o = i.map((e=>e.animatingProperties)).filter((e=>void 0 !== e));
            let r = 1
              , n = 1;
            return o.length > 0 && (o.forEach((e=>{
                e.width && (r /= e.width),
                e.height && (n /= e.height)
            }
            )),
            void 0 !== e.left && void 0 !== t.left && (e.left = r * e.left,
            t.left = r * t.left),
            void 0 !== e.top && void 0 !== t.top && (e.top = n * e.top,
            t.top = n * t.top)),
            {
                from: e,
                to: t
            }
        }
        calculateKeyframes(e, t, i=!1) {
            const o = {}
              , r = {};
            let n = !1;
            const s = {};
            for (const i in t) {
                const a = e[i]
                  , l = t[i];
                if (i in tn) {
                    const e = tn[i];
                    if (void 0 === a || void 0 === l)
                        continue;
                    const t = e(a, l);
                    void 0 !== t.transform && (s[i] = t.value,
                    n = !0,
                    o.transform = `${o.transform ?? ""} ${t.transform}`,
                    void 0 !== t.overrideFrom && Object.assign(o, t.overrideFrom))
                } else
                    a !== l && void 0 !== a && void 0 !== l && (n = !0,
                    o[i] = a,
                    r[i] = l)
            }
            return o.transformOrigin = r.transformOrigin = i ? "center center" : "top left",
            this.animatingProperties = s,
            n ? [o, r] : void 0
        }
        async animate(e, t=this.options.keyframeOptions) {
            this.start(),
            this.frames = e;
            let i = !1;
            if (!this.isAnimating() && !this.isDisabled() && (this.options.onFrames && (this.frames = e = this.options.onFrames(this),
            this.log("modified frames", e)),
            void 0 !== e)) {
                this.log("animate", [e, t]),
                i = !0,
                this.webAnimation = this.element.animate(e, t);
                const o = this.getController();
                o?.add(this);
                try {
                    await this.webAnimation.finished
                } catch (e) {}
                o?.remove(this)
            }
            return this.didFinish(i),
            i
        }
        isAnimating() {
            return "running" === this.webAnimation?.playState || this.webAnimation?.pending
        }
        log(e, t) {
            this.shouldLog && !this.isDisabled() && console.log(e, this.options.id, t)
        }
    }
    );
    let an = class extends Mt {
        render() {
            return ro('<path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.59-13L12 10.59 8.41 7 7 8.41 10.59 12 7 15.59 8.41 17 12 13.41 15.59 17 17 15.59 13.41 12 17 8.41z"/>')
        }
    }
    ;
    an.styles = oo,
    an = Se([Lt("mdui-icon-cancel--outlined")], an);
    let ln = class extends Mt {
        render() {
            return ro('<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>')
        }
    }
    ;
    ln.styles = oo,
    ln = Se([Lt("mdui-icon-error")], ln);
    let cn = class extends Mt {
        render() {
            return ro('<path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46A11.804 11.804 0 0 0 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78 3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"/>')
        }
    }
    ;
    cn.styles = oo,
    cn = Se([Lt("mdui-icon-visibility-off")], cn);
    let dn = class extends Mt {
        render() {
            return ro('<path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>')
        }
    }
    ;
    dn.styles = oo,
    dn = Se([Lt("mdui-icon-visibility")], dn);
    const hn = Pe`:host{display:inline-block;width:100%}:host([disabled]){pointer-events:none}:host([type=hidden]){display:none}.container{position:relative;display:flex;align-items:center;height:100%;transition:box-shadow var(--mdui-motion-duration-short4) var(--mdui-motion-easing-standard);padding:0 1rem}.container.has-icon{padding-left:.75rem}.container.has-end-icon,.container.has-error-icon{padding-right:.75rem}:host([variant=filled]) .container{box-shadow:inset 0 -.0625rem 0 0 rgb(var(--mdui-color-on-surface-variant));background-color:rgb(var(--mdui-color-surface-container-highest));border-radius:var(--mdui-shape-corner-extra-small) var(--mdui-shape-corner-extra-small) 0 0}:host([variant=filled]) .container.invalid,:host([variant=filled]) .container.invalid-style{box-shadow:inset 0 -.0625rem 0 0 rgb(var(--mdui-color-error))}:host([variant=filled]:hover) .container{box-shadow:inset 0 -.0625rem 0 0 rgb(var(--mdui-color-on-surface))}:host([variant=filled]:hover) .container.invalid,:host([variant=filled]:hover) .container.invalid-style{box-shadow:inset 0 -.0625rem 0 0 rgb(var(--mdui-color-on-error-container))}:host([variant=filled][focused-style]) .container,:host([variant=filled][focused]) .container{box-shadow:inset 0 -.125rem 0 0 rgb(var(--mdui-color-primary))}:host([variant=filled][focused-style]) .container.invalid,:host([variant=filled][focused-style]) .container.invalid-style,:host([variant=filled][focused]) .container.invalid,:host([variant=filled][focused]) .container.invalid-style{box-shadow:inset 0 -.125rem 0 0 rgb(var(--mdui-color-error))}:host([variant=filled][disabled]) .container{box-shadow:inset 0 -.0625rem 0 0 rgba(var(--mdui-color-on-surface),38%);background-color:rgba(var(--mdui-color-on-surface),4%)}:host([variant=outlined]) .container{box-shadow:inset 0 0 0 .0625rem rgb(var(--mdui-color-outline));border-radius:var(--mdui-shape-corner-extra-small)}:host([variant=outlined]) .container.invalid,:host([variant=outlined]) .container.invalid-style{box-shadow:inset 0 0 0 .0625rem rgb(var(--mdui-color-error))}:host([variant=outlined]:hover) .container{box-shadow:inset 0 0 0 .0625rem rgb(var(--mdui-color-on-surface))}:host([variant=outlined]:hover) .container.invalid,:host([variant=outlined]:hover) .container.invalid-style{box-shadow:inset 0 0 0 .0625rem rgb(var(--mdui-color-on-error-container))}:host([variant=outlined][focused-style]) .container,:host([variant=outlined][focused]) .container{box-shadow:inset 0 0 0 .125rem rgb(var(--mdui-color-primary))}:host([variant=outlined][focused-style]) .container.invalid,:host([variant=outlined][focused-style]) .container.invalid-style,:host([variant=outlined][focused]) .container.invalid,:host([variant=outlined][focused]) .container.invalid-style{box-shadow:inset 0 0 0 .125rem rgb(var(--mdui-color-error))}:host([variant=outlined][disabled]) .container{box-shadow:inset 0 0 0 .125rem rgba(var(--mdui-color-on-surface),12%)}.icon,.prefix,.right-icon,.suffix{display:flex;-webkit-user-select:none;user-select:none;color:rgb(var(--mdui-color-on-surface-variant))}:host([disabled]) .icon,:host([disabled]) .prefix,:host([disabled]) .right-icon,:host([disabled]) .suffix{color:rgba(var(--mdui-color-on-surface),38%)}.invalid .right-icon,.invalid .suffix,.invalid-style .right-icon,.invalid-style .suffix{color:rgb(var(--mdui-color-error))}:host(:hover) .invalid .right-icon,:host(:hover) .invalid .suffix,:host(:hover) .invalid-style .right-icon,:host(:hover) .invalid-style .suffix{color:rgb(var(--mdui-color-on-error-container))}:host([focused-style]) .invalid .right-icon,:host([focused-style]) .invalid .suffix,:host([focused-style]) .invalid-style .right-icon,:host([focused-style]) .invalid-style .suffix,:host([focused]) .invalid .right-icon,:host([focused]) .invalid .suffix,:host([focused]) .invalid-style .right-icon,:host([focused]) .invalid-style .suffix{color:rgb(var(--mdui-color-error))}.icon,.right-icon{font-size:1.5rem}.icon mdui-button-icon,.right-icon mdui-button-icon,::slotted(mdui-button-icon[slot]){margin-left:-.5rem;margin-right:-.5rem}.icon .i,.right-icon .i,::slotted([slot$=icon]){font-size:inherit}.has-icon .icon{margin-right:1rem}.has-end-icon .end-icon,.right-icon:not(.end-icon){margin-left:1rem}.prefix,.suffix{display:none;font-size:var(--mdui-typescale-body-large-size);font-weight:var(--mdui-typescale-body-large-weight);letter-spacing:var(--mdui-typescale-body-large-tracking);line-height:var(--mdui-typescale-body-large-line-height)}:host([variant=filled][label]) .prefix,:host([variant=filled][label]) .suffix{padding-top:1rem}.has-value .prefix,.has-value .suffix,:host([focused-style]) .prefix,:host([focused-style]) .suffix,:host([focused]) .prefix,:host([focused]) .suffix{display:flex}.has-prefix .prefix{padding-right:.125rem}.has-suffix .suffix{padding-left:.125rem}.input-container{width:100%;height:100%}.label{position:absolute;pointer-events:none;max-width:calc(100% - 1rem);display:-webkit-box;overflow:hidden;-webkit-box-orient:vertical;-webkit-line-clamp:1;top:1rem;color:rgb(var(--mdui-color-on-surface-variant));font-size:var(--mdui-typescale-body-large-size);font-weight:var(--mdui-typescale-body-large-weight);letter-spacing:var(--mdui-typescale-body-large-tracking);line-height:var(--mdui-typescale-body-large-line-height)}.invalid .label,.invalid-style .label{color:rgb(var(--mdui-color-error))}:host([variant=outlined]) .label{padding:0 .25rem;margin:0 -.25rem}:host([variant=outlined]:hover) .label{color:rgb(var(--mdui-color-on-surface))}:host([variant=filled]:hover) .invalid .label,:host([variant=filled]:hover) .invalid-style .label,:host([variant=outlined]:hover) .invalid .label,:host([variant=outlined]:hover) .invalid-style .label{color:rgb(var(--mdui-color-on-error-container))}:host([variant=filled][focused-style]) .label,:host([variant=filled][focused]) .label,:host([variant=outlined][focused-style]) .label,:host([variant=outlined][focused]) .label{color:rgb(var(--mdui-color-primary))}:host([variant=filled]) .has-value .label,:host([variant=filled][focused-style]) .label,:host([variant=filled][focused]) .label,:host([variant=filled][type=date]) .label,:host([variant=filled][type=datetime-local]) .label,:host([variant=filled][type=month]) .label,:host([variant=filled][type=time]) .label,:host([variant=filled][type=week]) .label{font-size:var(--mdui-typescale-body-small-size);font-weight:var(--mdui-typescale-body-small-weight);letter-spacing:var(--mdui-typescale-body-small-tracking);line-height:var(--mdui-typescale-body-small-line-height);top:.25rem}:host([variant=outlined]) .has-value .label,:host([variant=outlined][focused-style]) .label,:host([variant=outlined][focused]) .label,:host([variant=outlined][type=date]) .label,:host([variant=outlined][type=datetime-local]) .label,:host([variant=outlined][type=month]) .label,:host([variant=outlined][type=time]) .label,:host([variant=outlined][type=week]) .label{font-size:var(--mdui-typescale-body-small-size);font-weight:var(--mdui-typescale-body-small-weight);letter-spacing:var(--mdui-typescale-body-small-tracking);line-height:var(--mdui-typescale-body-small-line-height);top:-.5rem;left:.75rem;background-color:rgb(var(--mdui-color-background))}:host([variant=filled][focused-style]) .invalid .label,:host([variant=filled][focused-style]) .invalid-style .label,:host([variant=filled][focused]) .invalid .label,:host([variant=filled][focused]) .invalid-style .label,:host([variant=outlined][focused-style]) .invalid .label,:host([variant=outlined][focused-style]) .invalid-style .label,:host([variant=outlined][focused]) .invalid .label,:host([variant=outlined][focused]) .invalid-style .label{color:rgb(var(--mdui-color-error))}:host([variant=filled][disabled]) .label,:host([variant=outlined][disabled]) .label{color:rgba(var(--mdui-color-on-surface),38%)}.input{display:flex;flex-wrap:wrap;width:100%;height:100%;min-height:100%;border:none;outline:0;background:0 0;appearance:none;resize:none;cursor:inherit;font-family:inherit;padding:1rem 0;font-size:var(--mdui-typescale-body-large-size);font-weight:var(--mdui-typescale-body-large-weight);letter-spacing:var(--mdui-typescale-body-large-tracking);line-height:var(--mdui-typescale-body-large-line-height);color:rgb(var(--mdui-color-on-surface));caret-color:rgb(var(--mdui-color-primary))}.input.hide-input{opacity:0;height:0;min-height:0;padding:0!important;overflow:hidden}.input::placeholder{color:rgb(var(--mdui-color-on-surface-variant))}.invalid .input,.invalid-style .input{caret-color:rgb(var(--mdui-color-error))}:host([disabled]) .input{color:rgba(var(--mdui-color-on-surface),38%)}:host([end-aligned]) .input{text-align:right}:host([variant=filled]) .label+.input{padding:1.5rem 0 .5rem 0}.supporting{display:flex;justify-content:space-between;padding:.25rem 1rem;color:rgb(var(--mdui-color-on-surface-variant))}.supporting.invalid,.supporting.invalid-style{color:rgb(var(--mdui-color-error))}.helper{display:block;opacity:1;transition:opacity var(--mdui-motion-duration-short4) var(--mdui-motion-easing-linear);font-size:var(--mdui-typescale-body-small-size);font-weight:var(--mdui-typescale-body-small-weight);letter-spacing:var(--mdui-typescale-body-small-tracking);line-height:var(--mdui-typescale-body-small-line-height)}:host([disabled]) .helper{color:rgba(var(--mdui-color-on-surface),38%)}:host([helper-on-focus]) .helper{opacity:0}:host([helper-on-focus][focused-style]) .helper,:host([helper-on-focus][focused]) .helper{opacity:1}.error{font-size:var(--mdui-typescale-body-small-size);font-weight:var(--mdui-typescale-body-small-weight);letter-spacing:var(--mdui-typescale-body-small-tracking);line-height:var(--mdui-typescale-body-small-line-height)}.counter{flex-wrap:nowrap;padding-left:1rem;font-size:var(--mdui-typescale-body-small-size);font-weight:var(--mdui-typescale-body-small-weight);letter-spacing:var(--mdui-typescale-body-small-tracking);line-height:var(--mdui-typescale-body-small-line-height)}::-ms-reveal{display:none}.is-firefox .input[type=date],.is-firefox .input[type=datetime-local],.is-firefox .input[type=time]{clip-path:inset(0 2em 0 0)}.input[type=number]::-webkit-inner-spin-button,.input[type=number]::-webkit-outer-spin-button{-webkit-appearance:none;display:none}.input[type=number]{-moz-appearance:textfield}.input[type=search]::-webkit-search-cancel-button{-webkit-appearance:none}`;
    e.TextField = class extends (qi(Xt)) {
        constructor() {
            super(...arguments),
            this.variant = "filled",
            this.type = "text",
            this.name = "",
            this.value = "",
            this.defaultValue = "",
            this.helperOnFocus = !1,
            this.clearable = !1,
            this.endAligned = !1,
            this.readonly = !1,
            this.disabled = !1,
            this.required = !1,
            this.autosize = !1,
            this.counter = !1,
            this.togglePassword = !1,
            this.spellcheck = !1,
            this.invalid = !1,
            this.invalidStyle = !1,
            this.focusedStyle = !1,
            this.isPasswordVisible = !1,
            this.hasValue = !1,
            this.error = "",
            this.inputRef = Li(),
            this.formController = new Vi(this),
            this.hasSlotController = new Jt(this,"icon","end-icon","helper","input"),
            this.readonlyButClearable = !1
        }
        get validity() {
            return this.inputRef.value.validity
        }
        get validationMessage() {
            return this.inputRef.value.validationMessage
        }
        get valueAsNumber() {
            return this.inputRef.value?.valueAsNumber ?? parseFloat(this.value)
        }
        set valueAsNumber(e) {
            const t = document.createElement("input");
            t.type = "number",
            t.valueAsNumber = e,
            this.value = t.value
        }
        get focusElement() {
            return this.inputRef.value
        }
        get focusDisabled() {
            return this.disabled
        }
        get isFocusedStyle() {
            return this.focused || this.focusedStyle
        }
        get isTextarea() {
            return this.rows && this.rows > 1 || this.autosize
        }
        onDisabledChange() {
            this.inputRef.value.disabled = this.disabled,
            this.invalid = !this.inputRef.value.checkValidity()
        }
        async onValueChange() {
            if (this.hasValue = !["", null].includes(this.value),
            this.hasUpdated) {
                await this.updateComplete;
                const e = this.formController.getForm();
                e && Fi.get(e)?.has(this) ? (this.invalid = !1,
                Fi.get(e).delete(this)) : this.invalid = !this.inputRef.value.checkValidity()
            }
        }
        onRowsChange() {
            this.setTextareaHeight()
        }
        async onMaxRowsChange() {
            if (!this.autosize)
                return;
            this.hasUpdated || await this.updateComplete;
            const e = M(this.inputRef.value);
            e.css("max-height", parseFloat(e.css("line-height")) * (this.maxRows ?? 1) + parseFloat(e.css("padding-top")) + parseFloat(e.css("padding-bottom")))
        }
        async onMinRowsChange() {
            if (!this.autosize)
                return;
            this.hasUpdated || await this.updateComplete;
            const e = M(this.inputRef.value);
            e.css("min-height", parseFloat(e.css("line-height")) * (this.minRows ?? 1) + parseFloat(e.css("padding-top")) + parseFloat(e.css("padding-bottom")))
        }
        disconnectedCallback() {
            super.disconnectedCallback(),
            this.observeResize?.unobserve(),
            cr(this)
        }
        select() {
            this.inputRef.value.select()
        }
        setSelectionRange(e, t, i="none") {
            this.inputRef.value.setSelectionRange(e, t, i)
        }
        setRangeText(e, t, i, o="preserve") {
            this.inputRef.value.setRangeText(e, t, i, o),
            this.value !== this.inputRef.value.value && (this.value = this.inputRef.value.value,
            this.setTextareaHeight(),
            this.emit("input"),
            this.emit("change"))
        }
        checkValidity() {
            const e = this.inputRef.value.checkValidity();
            return e || this.emit("invalid", {
                bubbles: !1,
                cancelable: !0,
                composed: !1
            }),
            e
        }
        reportValidity() {
            return this.invalid = !this.inputRef.value.reportValidity(),
            this.invalid && (this.emit("invalid", {
                bubbles: !1,
                cancelable: !0,
                composed: !1
            }),
            this.focus()),
            !this.invalid
        }
        setCustomValidity(e) {
            this.setCustomValidityInternal(e),
            cr(this)
        }
        firstUpdated(e) {
            super.firstUpdated(e),
            this.setTextareaHeight(),
            this.observeResize = Ei(this.inputRef.value, (()=>this.setTextareaHeight()))
        }
        render() {
            const e = !!this.icon || this.hasSlotController.test("icon")
              , t = !!this.endIcon || this.hasSlotController.test("end-icon")
              , i = this.invalid || this.invalidStyle
              , o = !!this.prefix || this.hasSlotController.test("prefix")
              , r = !!this.suffix || this.hasSlotController.test("suffix")
              , n = !!this.helper || this.hasSlotController.test("helper")
              , s = i && !(!this.error && !this.inputRef.value.validationMessage)
              , a = this.counter && !!this.maxlength
              , l = this.hasSlotController.test("input")
              , c = {
                invalid: this.invalid,
                "invalid-style": this.invalidStyle
            }
              , d = ji({
                container: !0,
                "has-value": this.hasValue,
                "has-icon": e,
                "has-end-icon": t,
                "has-error-icon": i,
                "has-prefix": o,
                "has-suffix": r,
                "is-firefox": navigator.userAgent.includes("Firefox"),
                ...c
            });
            return ft`<div part="container" class="${d}">${this.renderPrefix()}<div class="input-container">${this.renderLabel()} ${this.isTextarea ? this.renderTextArea(l) : this.renderInput(l)} ${vo(l, (()=>ft`<slot name="input" class="input"></slot>`))}</div>${this.renderClearButton()}${this.renderTogglePasswordButton()} ${this.renderSuffix(i)}</div>${vo(s || n || a, (()=>ft`<div part="supporting" class="${ji({
                supporting: !0,
                ...c
            })}">${this.renderHelper(s, n)} ${this.renderCounter(a)}</div>`))}`
        }
        setCustomValidityInternal(e) {
            this.inputRef.value.setCustomValidity(e),
            this.invalid = !this.inputRef.value.checkValidity(),
            this.requestUpdate()
        }
        onChange() {
            this.value = this.inputRef.value.value,
            this.isTextarea && this.setTextareaHeight(),
            this.emit("change")
        }
        onClear(e) {
            this.value = "",
            this.emit("clear"),
            this.emit("input"),
            this.emit("change"),
            this.focus(),
            e.stopPropagation()
        }
        onInput() {
            this.value = this.inputRef.value.value,
            this.isTextarea && this.setTextareaHeight(),
            this.emit("input")
        }
        onInvalid(e) {
            e.preventDefault()
        }
        onKeyDown(e) {
            const t = e.metaKey || e.ctrlKey || e.shiftKey || e.altKey;
            "Enter" !== e.key || t || setTimeout((()=>{
                e.defaultPrevented || this.formController.submit()
            }
            ))
        }
        onTextAreaKeyUp() {
            if (this.pattern) {
                const e = new RegExp(this.pattern);
                this.value && !this.value.match(e) ? (this.setCustomValidityInternal(this.getPatternErrorMsg()),
                lr(this, (()=>{
                    this.setCustomValidityInternal(this.getPatternErrorMsg())
                }
                ))) : (this.setCustomValidityInternal(""),
                cr(this))
            }
        }
        onTogglePassword() {
            this.isPasswordVisible = !this.isPasswordVisible
        }
        getPatternErrorMsg() {
            return er("Please match the requested format.", {
                id: "components.textField.patternError"
            })
        }
        setTextareaHeight() {
            this.autosize ? (this.inputRef.value.style.height = "auto",
            this.inputRef.value.style.height = `${this.inputRef.value.scrollHeight}px`) : this.inputRef.value.style.height = void 0
        }
        renderLabel() {
            return this.label ? ft`<label part="label" class="label" ${sn({
                keyframeOptions: {
                    duration: xo(this, "short4"),
                    easing: Co(this, "standard")
                }
            })}>${this.label}</label>` : Zt
        }
        renderPrefix() {
            return ft`<slot name="icon" part="icon" class="icon">${this.icon ? ft`<mdui-icon name="${this.icon}" class="i"></mdui-icon>` : Zt}</slot><slot name="prefix" part="prefix" class="prefix">${this.prefix}</slot>`
        }
        renderSuffix(e) {
            return ft`<slot name="suffix" part="suffix" class="suffix">${this.suffix}</slot>${e ? ft`<slot name="error-icon" part="error-icon" class="right-icon">${this.errorIcon ? ft`<mdui-icon name="${this.errorIcon}" class="i"></mdui-icon>` : ft`<mdui-icon-error class="i"></mdui-icon-error>`}</slot>` : ft`<slot name="end-icon" part="end-icon" class="end-icon right-icon">${this.endIcon ? ft`<mdui-icon name="${this.endIcon}" class="i"></mdui-icon>` : Zt}</slot>`}`
        }
        renderClearButton() {
            return vo(this.clearable && !this.disabled && (!this.readonly || this.readonlyButClearable) && ("number" == typeof this.value || this.value.length > 0), (()=>ft`<slot name="clear-button" part="clear-button" class="right-icon" @click="${this.onClear}"><mdui-button-icon tabindex="-1"><slot name="clear-icon" part="clear-icon">${this.clearIcon ? ft`<mdui-icon name="${this.clearIcon}" class="i"></mdui-icon>` : ft`<mdui-icon-cancel--outlined class="i"></mdui-icon-cancel--outlined>`}</slot></mdui-button-icon></slot>`))
        }
        renderTogglePasswordButton() {
            return vo("password" === this.type && this.togglePassword && !this.disabled, (()=>ft`<slot name="toggle-password-button" part="toggle-password-button" class="right-icon" @click="${this.onTogglePassword}"><mdui-button-icon tabindex="-1">${this.isPasswordVisible ? ft`<slot name="show-password-icon" part="show-password-icon">${this.showPasswordIcon ? ft`<mdui-icon name="${this.showPasswordIcon}" class="i"></mdui-icon>` : ft`<mdui-icon-visibility-off class="i"></mdui-icon-visibility-off>`}</slot>` : ft`<slot name="hide-password-icon" part="hide-password-icon">${this.hidePasswordIcon ? ft`<mdui-icon name="${this.hidePasswordIcon}" class="i"></mdui-icon>` : ft`<mdui-icon-visibility class="i"></mdui-icon-visibility>`}</slot>`}</mdui-button-icon></slot>`))
        }
        renderInput(e) {
            return ft`<input ${Oi(this.inputRef)} part="input" class="input ${ji({
                "hide-input": e
            })}" type="${"password" === this.type && this.isPasswordVisible ? "text" : this.type}" name="${Ft(this.name)}" .value="${to(this.value)}" placeholder="${Ft(!this.label || this.isFocusedStyle || this.hasValue ? this.placeholder : void 0)}" ?readonly="${this.readonly}" ?disabled="${this.disabled}" ?required="${this.required}" minlength="${Ft(this.minlength)}" maxlength="${Ft(this.maxlength)}" min="${Ft(this.min)}" max="${Ft(this.max)}" step="${Ft(this.step)}" autocapitalize="${Ft("password" === this.type ? "off" : this.autocapitalize)}" autocomplete="${Ft("password" === this.type ? "off" : this.autocomplete)}" autocorrect="${Ft("password" === this.type ? "off" : this.autocorrect)}" spellcheck="${Ft(this.spellcheck)}" pattern="${Ft(this.pattern)}" enterkeyhint="${Ft(this.enterkeyhint)}" inputmode="${Ft(this.inputmode)}" @change="${this.onChange}" @input="${this.onInput}" @invalid="${this.onInvalid}" @keydown="${this.onKeyDown}">`
        }
        renderTextArea(e) {
            return ft`<textarea ${Oi(this.inputRef)} part="input" class="input ${ji({
                "hide-input": e
            })}" name="${Ft(this.name)}" .value="${to(this.value)}" placeholder="${Ft(!this.label || this.isFocusedStyle || this.hasValue ? this.placeholder : void 0)}" ?readonly="${this.readonly}" ?disabled="${this.disabled}" ?required="${this.required}" minlength="${Ft(this.minlength)}" maxlength="${Ft(this.maxlength)}" rows="${this.rows ?? 1}" autocapitalize="${Ft(this.autocapitalize)}" autocorrect="${Ft(this.autocorrect)}" spellcheck="${Ft(this.spellcheck)}" enterkeyhint="${Ft(this.enterkeyhint)}" inputmode="${Ft(this.inputmode)}" @change="${this.onChange}" @input="${this.onInput}" @invalid="${this.onInvalid}" @keydown="${this.onKeyDown}" @keyup="${this.onTextAreaKeyUp}"></textarea>`
        }
        renderHelper(e, t) {
            return e ? ft`<div part="error" class="error">${this.error || this.inputRef.value.validationMessage}</div>` : t ? ft`<slot name="helper" part="helper" class="helper">${this.helper}</slot>` : ft`<span></span>`
        }
        renderCounter(e) {
            return e ? ft`<div part="counter" class="counter">${this.value.length}/${this.maxlength}</div>` : Zt
        }
    }
    ,
    e.TextField.styles = [Qt, hn],
    Se([Ot({
        reflect: !0
    })], e.TextField.prototype, "variant", void 0),
    Se([Ot({
        reflect: !0
    })], e.TextField.prototype, "type", void 0),
    Se([Ot({
        reflect: !0
    })], e.TextField.prototype, "name", void 0),
    Se([Ot()], e.TextField.prototype, "value", void 0),
    Se([io()], e.TextField.prototype, "defaultValue", void 0),
    Se([Ot({
        reflect: !0
    })], e.TextField.prototype, "label", void 0),
    Se([Ot({
        reflect: !0
    })], e.TextField.prototype, "placeholder", void 0),
    Se([Ot({
        reflect: !0
    })], e.TextField.prototype, "helper", void 0),
    Se([Ot({
        type: Boolean,
        reflect: !0,
        converter: wi,
        attribute: "helper-on-focus"
    })], e.TextField.prototype, "helperOnFocus", void 0),
    Se([Ot({
        type: Boolean,
        reflect: !0,
        converter: wi
    })], e.TextField.prototype, "clearable", void 0),
    Se([Ot({
        reflect: !0,
        attribute: "clear-icon"
    })], e.TextField.prototype, "clearIcon", void 0),
    Se([Ot({
        type: Boolean,
        reflect: !0,
        converter: wi,
        attribute: "end-aligned"
    })], e.TextField.prototype, "endAligned", void 0),
    Se([Ot({
        reflect: !0
    })], e.TextField.prototype, "prefix", void 0),
    Se([Ot({
        reflect: !0
    })], e.TextField.prototype, "suffix", void 0),
    Se([Ot({
        reflect: !0
    })], e.TextField.prototype, "icon", void 0),
    Se([Ot({
        reflect: !0,
        attribute: "end-icon"
    })], e.TextField.prototype, "endIcon", void 0),
    Se([Ot({
        reflect: !0,
        attribute: "error-icon"
    })], e.TextField.prototype, "errorIcon", void 0),
    Se([Ot({
        reflect: !0
    })], e.TextField.prototype, "form", void 0),
    Se([Ot({
        type: Boolean,
        reflect: !0,
        converter: wi
    })], e.TextField.prototype, "readonly", void 0),
    Se([Ot({
        type: Boolean,
        reflect: !0,
        converter: wi
    })], e.TextField.prototype, "disabled", void 0),
    Se([Ot({
        type: Boolean,
        reflect: !0,
        converter: wi
    })], e.TextField.prototype, "required", void 0),
    Se([Ot({
        type: Number,
        reflect: !0
    })], e.TextField.prototype, "rows", void 0),
    Se([Ot({
        type: Boolean,
        reflect: !0,
        converter: wi
    })], e.TextField.prototype, "autosize", void 0),
    Se([Ot({
        type: Number,
        reflect: !0,
        attribute: "min-rows"
    })], e.TextField.prototype, "minRows", void 0),
    Se([Ot({
        type: Number,
        reflect: !0,
        attribute: "max-rows"
    })], e.TextField.prototype, "maxRows", void 0),
    Se([Ot({
        type: Number,
        reflect: !0
    })], e.TextField.prototype, "minlength", void 0),
    Se([Ot({
        type: Number,
        reflect: !0
    })], e.TextField.prototype, "maxlength", void 0),
    Se([Ot({
        type: Boolean,
        reflect: !0,
        converter: wi
    })], e.TextField.prototype, "counter", void 0),
    Se([Ot({
        type: Number,
        reflect: !0
    })], e.TextField.prototype, "min", void 0),
    Se([Ot({
        type: Number,
        reflect: !0
    })], e.TextField.prototype, "max", void 0),
    Se([Ot({
        type: Number,
        reflect: !0
    })], e.TextField.prototype, "step", void 0),
    Se([Ot({
        reflect: !0
    })], e.TextField.prototype, "pattern", void 0),
    Se([Ot({
        type: Boolean,
        reflect: !0,
        converter: wi,
        attribute: "toggle-password"
    })], e.TextField.prototype, "togglePassword", void 0),
    Se([Ot({
        reflect: !0,
        attribute: "show-password-icon"
    })], e.TextField.prototype, "showPasswordIcon", void 0),
    Se([Ot({
        reflect: !0,
        attribute: "hide-password-icon"
    })], e.TextField.prototype, "hidePasswordIcon", void 0),
    Se([Ot({
        reflect: !0
    })], e.TextField.prototype, "autocapitalize", void 0),
    Se([Ot({
        reflect: !0
    })], e.TextField.prototype, "autocorrect", void 0),
    Se([Ot({
        reflect: !0
    })], e.TextField.prototype, "autocomplete", void 0),
    Se([Ot({
        reflect: !0
    })], e.TextField.prototype, "enterkeyhint", void 0),
    Se([Ot({
        type: Boolean,
        reflect: !0,
        converter: wi
    })], e.TextField.prototype, "spellcheck", void 0),
    Se([Ot({
        reflect: !0
    })], e.TextField.prototype, "inputmode", void 0),
    Se([zt()], e.TextField.prototype, "invalid", void 0),
    Se([zt()], e.TextField.prototype, "invalidStyle", void 0),
    Se([Ot({
        type: Boolean,
        reflect: !0,
        converter: wi,
        attribute: "focused-style"
    })], e.TextField.prototype, "focusedStyle", void 0),
    Se([zt()], e.TextField.prototype, "isPasswordVisible", void 0),
    Se([zt()], e.TextField.prototype, "hasValue", void 0),
    Se([zt()], e.TextField.prototype, "error", void 0),
    Se([Ci("disabled", !0)], e.TextField.prototype, "onDisabledChange", null),
    Se([Ci("value")], e.TextField.prototype, "onValueChange", null),
    Se([Ci("rows", !0)], e.TextField.prototype, "onRowsChange", null),
    Se([Ci("maxRows")], e.TextField.prototype, "onMaxRowsChange", null),
    Se([Ci("minRows")], e.TextField.prototype, "onMinRowsChange", null),
    e.TextField = Se([Lt("mdui-text-field")], e.TextField);
    const un = Pe`:host{display:inline-block;width:100%}.hidden-input{display:none}.text-field{cursor:pointer}.chips{display:flex;flex-wrap:wrap;margin:-.5rem -.25rem;min-height:2.5rem}:host([variant=filled][label]) .chips{margin:0 -.25rem -1rem -.25rem}.chip{margin:.25rem}mdui-menu{max-width:none}`;
    e.Select = class extends (qi(Xt)) {
        constructor() {
            super(...arguments),
            this.variant = "filled",
            this.multiple = !1,
            this.name = "",
            this.value = "",
            this.defaultValue = "",
            this.clearable = !1,
            this.placement = "auto",
            this.endAligned = !1,
            this.readonly = !1,
            this.disabled = !1,
            this.required = !1,
            this.invalid = !1,
            this.menuRef = Li(),
            this.textFieldRef = Li(),
            this.hiddenInputRef = Li(),
            this.formController = new Vi(this),
            this.hasSlotController = new Jt(this,"icon","end-icon","error-icon","prefix","suffix","clear-button","clear-icon","helper"),
            this.definedController = new ki(this,{
                relatedElements: ["mdui-menu-item"]
            })
        }
        get validity() {
            return this.hiddenInputRef.value.validity
        }
        get validationMessage() {
            return this.hiddenInputRef.value.validationMessage
        }
        get focusElement() {
            return this.textFieldRef.value
        }
        get focusDisabled() {
            return this.disabled
        }
        connectedCallback() {
            super.connectedCallback(),
            this.value = this.multiple && c(this.value) ? this.value ? [this.value] : [] : this.value,
            this.defaultValue = this.multiple ? [] : "",
            this.definedController.whenDefined().then((()=>{
                this.requestUpdate()
            }
            ))
        }
        disconnectedCallback() {
            super.disconnectedCallback(),
            this.observeResize?.unobserve()
        }
        checkValidity() {
            const e = this.hiddenInputRef.value.checkValidity();
            return e || this.emit("invalid", {
                bubbles: !1,
                cancelable: !0,
                composed: !1
            }),
            e
        }
        reportValidity() {
            return this.invalid = !this.hiddenInputRef.value.reportValidity(),
            this.invalid && (this.emit("invalid", {
                bubbles: !1,
                cancelable: !0,
                composed: !1
            }),
            this.focus()),
            !this.invalid
        }
        setCustomValidity(e) {
            this.hiddenInputRef.value.setCustomValidity(e),
            this.invalid = !this.hiddenInputRef.value.checkValidity()
        }
        firstUpdated(e) {
            super.firstUpdated(e),
            this.observeResize = Ei(this.textFieldRef.value, (()=>this.resizeMenu()))
        }
        render() {
            const e = this.multiple ? !!this.value.length : !!this.value;
            return ft`${this.multiple ? ft`<select ${Oi(this.hiddenInputRef)} class="hidden-input" name="${Ft(this.name)}" value="${Ft(this.value)}" .required="${this.required}" .disabled="${this.disabled}" multiple="multiple" tabindex="-1">${Ur(this.value, (e=>ft`<option selected="selected" value="${e}"></option>`))}</select>` : ft`<input ${Oi(this.hiddenInputRef)} type="radio" class="hidden-input" name="${Ft(this.name)}" value="${Ft(this.value)}" .required="${this.required}" .disabled="${this.disabled}" .checked="${e}" tabindex="-1">`}<mdui-dropdown .stayOpenOnClick="${this.multiple}" .disabled="${this.readonly || this.disabled}" .placement="${"top" === this.placement ? "top-start" : "bottom" === this.placement ? "bottom-start" : "auto"}" @open="${this.onDropdownOpen}" @close="${this.onDropdownClose}"><mdui-text-field ${Oi(this.textFieldRef)} slot="trigger" part="text-field" class="text-field" exportparts="${["container", "icon", "end-icon", "error-icon", "prefix", "suffix", "label", "input", "clear-button", "clear-icon", "supporting", "helper", "error"].map((e=>`${e}:text-field__${e}`)).join(",")}" readonly="readonly" .readonlyButClearable="${!0}" .variant="${this.variant}" .name="${this.name}" .value="${this.multiple ? this.value.length ? " " : "" : this.getMenuItemLabelByValue(this.value)}" .label="${this.label}" .placeholder="${this.placeholder}" .helper="${this.helper}" .error="${this.hiddenInputRef.value?.validationMessage}" .clearable="${this.clearable}" .clearIcon="${this.clearIcon}" .endAligned="${this.endAligned}" .prefix="${this.prefix}" .suffix="${this.suffix}" .icon="${this.icon}" .endIcon="${this.endIcon}" .errorIcon="${this.errorIcon}" .form="${this.form}" .disabled="${this.disabled}" .required="${this.required}" .invalidStyle="${this.invalid}" @clear="${this.onClear}" @change="${e=>e.stopPropagation()}" @keydown="${this.onTextFieldKeyDown}">${Ur(["icon", "end-icon", "error-icon", "prefix", "suffix", "clear-button", "clear-icon", "helper"], (e=>this.hasSlotController.test(e) ? ft`<slot name="${e}" slot="${e}"></slot>` : gt))} ${vo(this.multiple && this.value.length, (()=>ft`<div slot="input" class="chips" part="chips">${Ur(this.value, (e=>ft`<mdui-chip class="chip" part="chip" exportparts="${["button", "label", "delete-icon"].map((e=>`${e}:chip__${e}`)).join(",")}" variant="input" deletable tabindex="-1" @delete="${()=>this.onDeleteOneValue(e)}">${this.getMenuItemLabelByValue(e)}</mdui-chip>`))}</div>`))}</mdui-text-field><mdui-menu ${Oi(this.menuRef)} part="menu" .selects="${this.multiple ? "multiple" : "single"}" .value="${this.value}" @change="${this.onValueChange}"><slot></slot></mdui-menu></mdui-dropdown>`
        }
        getMenuItemLabelByValue(e) {
            return this.menuItems.length && this.menuItems.find((t=>t.value === e))?.textContent?.trim() || e
        }
        resizeMenu() {
            this.menuRef.value.style.width = `${this.textFieldRef.value.clientWidth}px`
        }
        async onDropdownOpen() {
            this.textFieldRef.value.focusedStyle = !0
        }
        onDropdownClose() {
            this.textFieldRef.value.focusedStyle = !1,
            (this.contains(document.activeElement) || this.contains(document.activeElement?.assignedSlot ?? null)) && setTimeout((()=>{
                this.focus()
            }
            ))
        }
        async onValueChange(e) {
            const t = e.target;
            this.value = this.multiple ? t.value.map((e=>e ?? "")) : t.value ?? "",
            await this.updateComplete;
            const i = this.formController.getForm();
            i && Fi.get(i)?.has(this) ? (this.invalid = !1,
            Fi.get(i).delete(this)) : this.invalid = !this.hiddenInputRef.value.checkValidity()
        }
        onDeleteOneValue(e) {
            const t = [...this.value];
            t.includes(e) && t.splice(t.indexOf(e), 1),
            this.value = t
        }
        onClear() {
            this.value = this.multiple ? [] : ""
        }
        onTextFieldKeyDown(e) {
            "Enter" === e.key && (e.preventDefault(),
            this.textFieldRef.value.click())
        }
    }
    ,
    e.Select.styles = [Qt, un],
    Se([Ot({
        reflect: !0
    })], e.Select.prototype, "variant", void 0),
    Se([Ot({
        type: Boolean,
        reflect: !0,
        converter: wi
    })], e.Select.prototype, "multiple", void 0),
    Se([Ot({
        reflect: !0
    })], e.Select.prototype, "name", void 0),
    Se([Ot()], e.Select.prototype, "value", void 0),
    Se([io()], e.Select.prototype, "defaultValue", void 0),
    Se([Ot({
        reflect: !0
    })], e.Select.prototype, "label", void 0),
    Se([Ot({
        reflect: !0
    })], e.Select.prototype, "placeholder", void 0),
    Se([Ot({
        reflect: !0
    })], e.Select.prototype, "helper", void 0),
    Se([Ot({
        type: Boolean,
        reflect: !0,
        converter: wi
    })], e.Select.prototype, "clearable", void 0),
    Se([Ot({
        reflect: !0,
        attribute: "clear-icon"
    })], e.Select.prototype, "clearIcon", void 0),
    Se([Ot({
        reflect: !0
    })], e.Select.prototype, "placement", void 0),
    Se([Ot({
        type: Boolean,
        reflect: !0,
        converter: wi,
        attribute: "end-aligned"
    })], e.Select.prototype, "endAligned", void 0),
    Se([Ot({
        reflect: !0
    })], e.Select.prototype, "prefix", void 0),
    Se([Ot({
        reflect: !0
    })], e.Select.prototype, "suffix", void 0),
    Se([Ot({
        reflect: !0
    })], e.Select.prototype, "icon", void 0),
    Se([Ot({
        reflect: !0,
        attribute: "end-icon"
    })], e.Select.prototype, "endIcon", void 0),
    Se([Ot({
        reflect: !0,
        attribute: "error-icon"
    })], e.Select.prototype, "errorIcon", void 0),
    Se([Ot({
        reflect: !0
    })], e.Select.prototype, "form", void 0),
    Se([Ot({
        type: Boolean,
        reflect: !0,
        converter: wi
    })], e.Select.prototype, "readonly", void 0),
    Se([Ot({
        type: Boolean,
        reflect: !0,
        converter: wi
    })], e.Select.prototype, "disabled", void 0),
    Se([Ot({
        type: Boolean,
        reflect: !0,
        converter: wi
    })], e.Select.prototype, "required", void 0),
    Se([zt()], e.Select.prototype, "invalid", void 0),
    Se([Nt({
        flatten: !0,
        selector: "mdui-menu-item"
    })], e.Select.prototype, "menuItems", void 0),
    e.Select = Se([Lt("mdui-select")], e.Select);
    const pn = Pe`.track-active{left:-.125rem;border-radius:var(--mdui-shape-corner-full) 0 0 var(--mdui-shape-corner-full)}`;
    e.Slider = class extends qr {
        constructor() {
            super(...arguments),
            this.value = 0,
            this.defaultValue = 0,
            this.rippleRef = Li(),
            this.handleRef = Li(),
            this.formController = new Vi(this)
        }
        get rippleElement() {
            return this.rippleRef.value
        }
        async onValueChange() {
            this.value = this.fixValue(this.value);
            const e = this.formController.getForm();
            e && Fi.get(e)?.has(this) ? (this.invalid = !1,
            Fi.get(e).delete(this)) : (await this.updateComplete,
            this.invalid = !this.inputRef.value.checkValidity()),
            this.updateStyle()
        }
        connectedCallback() {
            super.connectedCallback(),
            this.value = this.fixValue(this.value)
        }
        firstUpdated(e) {
            super.firstUpdated(e);
            const t = ()=>{
                this.disabled || (this.labelVisible = !0)
            }
              , i = ()=>{
                this.disabled || (this.labelVisible = !1)
            }
            ;
            this.addEventListener("touchstart", t),
            this.addEventListener("mousedown", t),
            this.addEventListener("touchend", i),
            this.addEventListener("mouseup", i),
            this.updateStyle()
        }
        render() {
            return ft`<label class="${ji({
                invalid: this.invalid
            })}"><input ${Oi(this.inputRef)} type="range" step="${this.step}" min="${this.min}" max="${this.max}" ?disabled="${this.disabled}" .value="${to(this.value.toString())}" @input="${this.onInput}" @change="${this.onChange}"><div part="track-inactive" class="track-inactive"></div><div ${Oi(this.trackActiveRef)} part="track-active" class="track-active"></div><div ${Oi(this.handleRef)} part="handle" class="handle"><div class="elevation"></div><mdui-ripple ${Oi(this.rippleRef)} .noRipple="${this.noRipple}"></mdui-ripple>${this.renderLabel(this.value)}</div>${vo(this.tickmarks, (()=>Ur(this.getCandidateValues(), (e=>ft`<div part="tickmark" class="tickmark ${ji({
                active: e < this.value
            })}" style="${Yt({
                left: (e - this.min) / this.max * 100 + "%",
                display: e === this.value ? "none" : "block"
            })}"></div>`))))}</label>`
        }
        updateStyle() {
            const e = (this.value - this.min) / (this.max - this.min) * 100;
            this.trackActiveRef.value.style.width = `${e}%`,
            this.handleRef.value.style.left = `${e}%`
        }
        onInput() {
            this.value = parseFloat(this.inputRef.value.value),
            this.updateStyle()
        }
    }
    ,
    e.Slider.styles = [qr.styles, pn],
    Se([Ot({
        type: Number
    })], e.Slider.prototype, "value", void 0),
    Se([io()], e.Slider.prototype, "defaultValue", void 0),
    Se([Ci("value", !0)], e.Slider.prototype, "onValueChange", null),
    e.Slider = Se([Lt("mdui-slider")], e.Slider);
    const mn = Pe`:host{--shape-corner:var(--mdui-shape-corner-extra-small);--z-index:2400;position:fixed;z-index:var(--z-index);display:none;align-items:center;flex-wrap:wrap;border-radius:var(--shape-corner);min-width:20rem;max-width:36rem;padding:.25rem 0;box-shadow:var(--mdui-elevation-level3);background-color:rgb(var(--mdui-color-inverse-surface));color:rgb(var(--mdui-color-inverse-on-surface));font-size:var(--mdui-typescale-body-medium-size);font-weight:var(--mdui-typescale-body-medium-weight);letter-spacing:var(--mdui-typescale-body-medium-tracking);line-height:var(--mdui-typescale-body-medium-line-height)}:host([placement^=top]){transform-origin:top;top:1rem}:host([placement^=bottom]){transform-origin:bottom;bottom:1rem}:host([placement=bottom-start]),:host([placement=top-start]){left:1rem}:host([placement=bottom-end]),:host([placement=top-end]){right:1rem}.message{display:block;margin:.625rem 1rem}:host([message-line='1']) .message{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}:host([message-line='2']) .message{display:-webkit-box;overflow:hidden;text-overflow:ellipsis;-webkit-box-orient:vertical;-webkit-line-clamp:2}.action-group{display:flex;align-items:center;margin-left:auto;padding-right:.5rem}.action,.close-button{display:inline-flex;align-items:center;justify-content:center}.action{color:rgb(var(--mdui-color-inverse-primary));font-size:var(--mdui-typescale-label-large-size);font-weight:var(--mdui-typescale-label-large-weight);letter-spacing:var(--mdui-typescale-label-large-tracking)}.action mdui-button,::slotted(mdui-button[slot=action][variant=outlined]),::slotted(mdui-button[slot=action][variant=text]){color:inherit;font-size:inherit;font-weight:inherit;letter-spacing:inherit;--mdui-comp-ripple-state-layer-color:var(--mdui-color-inverse-primary)}.action mdui-button::part(button){padding:0 .5rem}.close-button{margin:0 -.25rem 0 .25rem;font-size:1.5rem;color:rgb(var(--mdui-color-inverse-on-surface))}.close-button mdui-button-icon,::slotted(mdui-button-icon[slot=close-button][variant=outlined]),::slotted(mdui-button-icon[slot=close-button][variant=standard]){font-size:inherit;color:inherit;--mdui-comp-ripple-state-layer-color:var(--mdui-color-inverse-on-surface)}.close-button .i,::slotted([slot=close-icon]){font-size:inherit}`;
    e.Snackbar = class extends Xt {
        constructor() {
            super(),
            this.open = !1,
            this.placement = "bottom",
            this.actionLoading = !1,
            this.closeable = !1,
            this.autoCloseDelay = 5e3,
            this.closeOnOutsideClick = !1,
            this.onDocumentClick = this.onDocumentClick.bind(this)
        }
        async onOpenChange() {
            const e = _r().down("sm")
              , t = ["top", "bottom"].includes(this.placement)
              , i = Co(this, "linear")
              , o = Co(this, "emphasized-decelerate")
              , r = Array.from(this.renderRoot.querySelectorAll(".message, .action-group"))
              , n = e ? {
                left: "1rem",
                right: "1rem",
                minWidth: 0
            } : t ? {
                left: "50%"
            } : {};
            if (this.open) {
                const s = this.hasUpdated;
                if (s || await this.updateComplete,
                s) {
                    if (!this.emit("open", {
                        cancelable: !0
                    }))
                        return
                }
                window.clearTimeout(this.closeTimeout),
                this.autoCloseDelay && (this.closeTimeout = window.setTimeout((()=>{
                    this.open = !1
                }
                ), this.autoCloseDelay)),
                this.style.display = "flex",
                await Promise.all([bo(this), ...r.map((e=>bo(e)))]);
                const a = xo(this, "medium4")
                  , l = i=>{
                    const o = `scaleY(${"start" === i ? 0 : 1})`;
                    return e ? {
                        transform: o
                    } : {
                        transform: [o, t ? "translateX(-50%)" : ""].filter((e=>e)).join(" ")
                    }
                }
                ;
                return await Promise.all([go(this, [{
                    ...l("start"),
                    ...n
                }, {
                    ...l("end"),
                    ...n
                }], {
                    duration: s ? a : 0,
                    easing: o,
                    fill: "forwards"
                }), go(this, [{
                    opacity: 0
                }, {
                    opacity: 1,
                    offset: .5
                }, {
                    opacity: 1
                }], {
                    duration: s ? a : 0,
                    easing: i,
                    fill: "forwards"
                }), ...r.map((e=>go(e, [{
                    opacity: 0
                }, {
                    opacity: 0,
                    offset: .2
                }, {
                    opacity: 1,
                    offset: .8
                }, {
                    opacity: 1
                }], {
                    duration: s ? a : 0,
                    easing: i
                })))]),
                void (s && this.emit("opened"))
            }
            if (!this.open && this.hasUpdated) {
                if (!this.emit("close", {
                    cancelable: !0
                }))
                    return;
                window.clearTimeout(this.closeTimeout),
                await Promise.all([bo(this), ...r.map((e=>bo(e)))]);
                const o = xo(this, "short4")
                  , s = i=>{
                    const o = {
                        opacity: "start" === i ? 1 : 0
                    };
                    return !e && t && Object.assign(o, {
                        transform: "translateX(-50%)"
                    }),
                    o
                }
                ;
                return await Promise.all([go(this, [{
                    ...s("start"),
                    ...n
                }, {
                    ...s("end"),
                    ...n
                }], {
                    duration: o,
                    easing: i,
                    fill: "forwards"
                }), ...r.map((e=>go(e, [{
                    opacity: 1
                }, {
                    opacity: 0,
                    offset: .75
                }, {
                    opacity: 0
                }], {
                    duration: o,
                    easing: i
                })))]),
                this.style.display = "none",
                void this.emit("closed")
            }
        }
        connectedCallback() {
            super.connectedCallback(),
            document.addEventListener("pointerdown", this.onDocumentClick)
        }
        disconnectedCallback() {
            super.disconnectedCallback(),
            document.removeEventListener("pointerdown", this.onDocumentClick)
        }
        render() {
            return ft`<slot part="message" class="message"></slot><div class="action-group"><slot name="action" part="action" class="action" @click="${this.onActionClick}">${this.action ? ft`<mdui-button variant="text" loading="${this.actionLoading}">${this.action}</mdui-button>` : Zt}</slot>${vo(this.closeable, (()=>ft`<slot name="close-button" part="close-button" class="close-button" @click="${this.onCloseClick}"><mdui-button-icon><slot name="close-icon" part="close-icon">${this.closeIcon ? ft`<mdui-icon name="${this.closeIcon}" class="i"></mdui-icon>` : ft`<mdui-icon-clear class="i"></mdui-icon-clear>`}</slot></mdui-button-icon></slot>`))}</div>`
        }
        onDocumentClick(e) {
            if (!this.open || !this.closeOnOutsideClick)
                return;
            const t = e.target;
            this.contains(t) || this === t || (this.open = !1)
        }
        onActionClick(e) {
            e.stopPropagation(),
            this.emit("action-click")
        }
        onCloseClick() {
            this.open = !1
        }
    }
    ,
    e.Snackbar.styles = [Qt, mn],
    Se([Ot({
        type: Boolean,
        reflect: !0,
        converter: wi
    })], e.Snackbar.prototype, "open", void 0),
    Se([Ot({
        reflect: !0
    })], e.Snackbar.prototype, "placement", void 0),
    Se([Ot({
        reflect: !0,
        attribute: "action"
    })], e.Snackbar.prototype, "action", void 0),
    Se([Ot({
        type: Boolean,
        reflect: !0,
        converter: wi,
        attribute: "action-loading"
    })], e.Snackbar.prototype, "actionLoading", void 0),
    Se([Ot({
        type: Boolean,
        reflect: !0,
        converter: wi
    })], e.Snackbar.prototype, "closeable", void 0),
    Se([Ot({
        reflect: !0,
        attribute: "close-icon"
    })], e.Snackbar.prototype, "closeIcon", void 0),
    Se([Ot({
        type: Number,
        reflect: !0,
        attribute: "message-line"
    })], e.Snackbar.prototype, "messageLine", void 0),
    Se([Ot({
        type: Number,
        reflect: !0,
        attribute: "auto-close-delay"
    })], e.Snackbar.prototype, "autoCloseDelay", void 0),
    Se([Ot({
        type: Boolean,
        reflect: !0,
        attribute: "close-on-outside-click",
        converter: wi
    })], e.Snackbar.prototype, "closeOnOutsideClick", void 0),
    Se([Ci("open")], e.Snackbar.prototype, "onOpenChange", null),
    e.Snackbar = Se([Lt("mdui-snackbar")], e.Snackbar);
    const fn = Pe`:host{--shape-corner:var(--mdui-shape-corner-full);--shape-corner-thumb:var(--mdui-shape-corner-full);position:relative;display:inline-block;cursor:pointer;-webkit-tap-highlight-color:transparent;height:2.5rem}:host([disabled]){cursor:default;pointer-events:none}label{display:inline-flex;align-items:center;width:100%;height:100%;white-space:nowrap;cursor:inherit;-webkit-user-select:none;user-select:none;touch-action:manipulation;zoom:1;-webkit-user-drag:none}.track{position:relative;display:flex;align-items:center;border-radius:var(--shape-corner);transition-property:background-color,border-width;transition-duration:var(--mdui-motion-duration-short4);transition-timing-function:var(--mdui-motion-easing-standard);height:2rem;width:3.25rem;border:.125rem solid rgb(var(--mdui-color-outline));background-color:rgb(var(--mdui-color-surface-container-highest))}:host([checked]) .track{background-color:rgb(var(--mdui-color-primary));border-width:0}.invalid .track{background-color:rgb(var(--mdui-color-error-container));border-color:rgb(var(--mdui-color-error))}:host([disabled]) .track{background-color:rgba(var(--mdui-color-surface-container-highest),.12);border-color:rgba(var(--mdui-color-on-surface),.12)}:host([disabled][checked]) .track{background-color:rgba(var(--mdui-color-on-surface),.12)}input{position:absolute;padding:0;opacity:0;pointer-events:none;width:1.25rem;height:1.25rem;margin:0 0 0 .625rem}mdui-ripple{border-radius:50%;transition-property:left,top;transition-duration:var(--mdui-motion-duration-short4);transition-timing-function:var(--mdui-motion-easing-standard);width:2.5rem;height:2.5rem}.thumb{position:absolute;display:flex;align-items:center;justify-content:center;border-radius:var(--shape-corner-thumb);transition-property:width,height,left,background-color;transition-duration:var(--mdui-motion-duration-short4);transition-timing-function:var(--mdui-motion-easing-standard);height:1rem;width:1rem;left:.375rem;background-color:rgb(var(--mdui-color-outline));--mdui-comp-ripple-state-layer-color:var(--mdui-color-on-surface)}.thumb mdui-ripple{left:-.75rem;top:-.75rem}.has-unchecked-icon .thumb{height:1.5rem;width:1.5rem;left:.125rem}.has-unchecked-icon .thumb mdui-ripple{left:-.5rem;top:-.5rem}:host([focus-visible]) .thumb,:host([hover]) .thumb,:host([pressed]) .thumb{background-color:rgb(var(--mdui-color-on-surface-variant))}:host([checked]) .thumb{height:1.5rem;width:1.5rem;left:1.5rem;background-color:rgb(var(--mdui-color-on-primary));--mdui-comp-ripple-state-layer-color:var(--mdui-color-primary)}:host([checked]) .thumb mdui-ripple{left:-.5rem;top:-.5rem}:host([pressed]) .thumb{height:1.75rem;width:1.75rem;left:0}:host([pressed]) .thumb mdui-ripple{left:-.375rem;top:-.375rem}:host([pressed][checked]) .thumb{left:1.375rem}:host([focus-visible][checked]) .thumb,:host([hover][checked]) .thumb,:host([pressed][checked]) .thumb{background-color:rgb(var(--mdui-color-primary-container))}.invalid .thumb{background-color:rgb(var(--mdui-color-error));--mdui-comp-ripple-state-layer-color:var(--mdui-color-error)}:host([focus-visible]) .invalid .thumb,:host([hover]) .invalid .thumb,:host([pressed]) .invalid .thumb{background-color:rgb(var(--mdui-color-error))}:host([disabled]) .thumb{background-color:rgba(var(--mdui-color-on-surface),.38)}:host([disabled][checked]) .thumb{background-color:rgb(var(--mdui-color-surface))}.checked-icon,.unchecked-icon{display:flex;position:absolute;transition-property:opacity,transform;font-size:1rem}.unchecked-icon{opacity:1;transform:scale(1);transition-delay:var(--mdui-motion-duration-short1);transition-duration:var(--mdui-motion-duration-short3);transition-timing-function:var(--mdui-motion-easing-linear);color:rgb(var(--mdui-color-surface-container-highest))}:host([checked]) .unchecked-icon{opacity:0;transform:scale(.92);transition-delay:0s;transition-duration:var(--mdui-motion-duration-short1)}:host([disabled]) .unchecked-icon{color:rgba(var(--mdui-color-surface-container-highest),.38)}.checked-icon{opacity:0;transform:scale(.92);transition-delay:0s;transition-duration:var(--mdui-motion-duration-short1);transition-timing-function:var(--mdui-motion-easing-linear);color:rgb(var(--mdui-color-on-primary-container))}:host([checked]) .checked-icon{opacity:1;transform:scale(1);transition-delay:var(--mdui-motion-duration-short1);transition-duration:var(--mdui-motion-duration-short3)}.invalid .checked-icon{color:rgb(var(--mdui-color-error-container))}:host([disabled]) .checked-icon{color:rgba(var(--mdui-color-on-surface),.38)}.checked-icon .i,.unchecked-icon .i,::slotted([slot=checked-icon]),::slotted([slot=unchecked-icon]){font-size:inherit;color:inherit}`;
    e.Switch = class extends (Yi(qi(Xt))) {
        constructor() {
            super(...arguments),
            this.disabled = !1,
            this.checked = !1,
            this.defaultChecked = !1,
            this.required = !1,
            this.name = "",
            this.value = "on",
            this.invalid = !1,
            this.rippleRef = Li(),
            this.inputRef = Li(),
            this.formController = new Vi(this,{
                value: e=>e.checked ? e.value : void 0,
                defaultValue: e=>e.defaultChecked,
                setValue: (e,t)=>e.checked = t
            }),
            this.hasSlotController = new Jt(this,"unchecked-icon")
        }
        get validity() {
            return this.inputRef.value.validity
        }
        get validationMessage() {
            return this.inputRef.value.validationMessage
        }
        get rippleElement() {
            return this.rippleRef.value
        }
        get rippleDisabled() {
            return this.disabled
        }
        get focusElement() {
            return this.inputRef.value
        }
        get focusDisabled() {
            return this.disabled
        }
        async onDisabledChange() {
            await this.updateComplete,
            this.invalid = !this.inputRef.value.checkValidity()
        }
        async onCheckedChange() {
            await this.updateComplete;
            const e = this.formController.getForm();
            e && Fi.get(e)?.has(this) ? (this.invalid = !1,
            Fi.get(e).delete(this)) : this.invalid = !this.inputRef.value.checkValidity()
        }
        checkValidity() {
            const e = this.inputRef.value.checkValidity();
            return e || this.emit("invalid", {
                bubbles: !1,
                cancelable: !0,
                composed: !1
            }),
            e
        }
        reportValidity() {
            if (this.invalid = !this.inputRef.value.reportValidity(),
            this.invalid) {
                this.emit("invalid", {
                    bubbles: !1,
                    cancelable: !0,
                    composed: !1
                }) || (this.blur(),
                this.focus())
            }
            return !this.invalid
        }
        setCustomValidity(e) {
            this.inputRef.value.setCustomValidity(e),
            this.invalid = !this.inputRef.value.checkValidity()
        }
        render() {
            return ft`<label class="${ji({
                invalid: this.invalid,
                "has-unchecked-icon": this.uncheckedIcon || this.hasSlotController.test("unchecked-icon")
            })}"><input ${Oi(this.inputRef)} type="checkbox" name="${Ft(this.name)}" value="${Ft(this.value)}" .disabled="${this.disabled}" .checked="${to(this.checked)}" .required="${this.required}" @change="${this.onChange}"><div part="track" class="track"><div part="thumb" class="thumb"><mdui-ripple ${Oi(this.rippleRef)} .noRipple="${this.noRipple}"></mdui-ripple><slot name="checked-icon" part="checked-icon" class="checked-icon">${this.checkedIcon ? ft`<mdui-icon name="${this.checkedIcon}" class="i"></mdui-icon>` : "" === this.checkedIcon ? Zt : ft`<mdui-icon-check class="i"></mdui-icon-check>`}</slot><slot name="unchecked-icon" part="unchecked-icon" class="unchecked-icon">${this.uncheckedIcon ? ft`<mdui-icon name="${this.uncheckedIcon}" class="i"></mdui-icon>` : Zt}</slot></div></div></label>`
        }
        onChange() {
            this.checked = this.inputRef.value.checked,
            this.emit("change")
        }
    }
    ,
    e.Switch.styles = [Qt, fn],
    Se([Ot({
        type: Boolean,
        reflect: !0,
        converter: wi
    })], e.Switch.prototype, "disabled", void 0),
    Se([Ot({
        type: Boolean,
        reflect: !0,
        converter: wi
    })], e.Switch.prototype, "checked", void 0),
    Se([io("checked")], e.Switch.prototype, "defaultChecked", void 0),
    Se([Ot({
        reflect: !0,
        attribute: "unchecked-icon"
    })], e.Switch.prototype, "uncheckedIcon", void 0),
    Se([Ot({
        reflect: !0,
        attribute: "checked-icon"
    })], e.Switch.prototype, "checkedIcon", void 0),
    Se([Ot({
        type: Boolean,
        reflect: !0,
        converter: wi
    })], e.Switch.prototype, "required", void 0),
    Se([Ot({
        reflect: !0
    })], e.Switch.prototype, "form", void 0),
    Se([Ot({
        reflect: !0
    })], e.Switch.prototype, "name", void 0),
    Se([Ot({
        reflect: !0
    })], e.Switch.prototype, "value", void 0),
    Se([zt()], e.Switch.prototype, "invalid", void 0),
    Se([Ci("disabled", !0), Ci("required", !0)], e.Switch.prototype, "onDisabledChange", null),
    Se([Ci("checked", !0)], e.Switch.prototype, "onCheckedChange", null),
    e.Switch = Se([Lt("mdui-switch")], e.Switch);
    const vn = Pe`:host{position:relative;--mdui-comp-ripple-state-layer-color:var(--mdui-color-on-surface)}:host([active]){--mdui-comp-ripple-state-layer-color:var(--mdui-color-primary)}.container{display:flex;justify-content:center;align-items:center;cursor:pointer;-webkit-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent;height:100%}.preset{flex-direction:column;min-height:3rem;padding:.625rem 1rem}:host([inline]) .preset{flex-direction:row}.icon-container,.label-container{position:relative;display:flex;align-items:center;justify-content:center}.icon-container ::slotted([slot=badge]){position:absolute;transform:translate(50%,-50%)}.icon-container ::slotted([slot=badge][variant=small]){transform:translate(.5625rem,-.5625rem)}.label-container ::slotted([slot=badge]){position:absolute;left:100%;bottom:100%;transform:translate(-.75rem,.625rem)}.label-container ::slotted([slot=badge][variant=small]){transform:translate(-.375rem,.375rem)}.icon,.label{display:flex;color:rgb(var(--mdui-color-on-surface-variant))}:host([focused]) .icon,:host([focused]) .label,:host([hover]) .icon,:host([hover]) .label,:host([pressed]) .icon,:host([pressed]) .label{color:rgb(var(--mdui-color-on-surface))}:host([active]) .icon,:host([active]) .label{color:rgb(var(--mdui-color-primary))}:host([active]) .variant-secondary .icon,:host([active]) .variant-secondary .label{color:rgb(var(--mdui-color-on-surface))}.icon{font-size:1.5rem}.label{font-size:var(--mdui-typescale-title-small-size);font-weight:var(--mdui-typescale-title-small-weight);letter-spacing:var(--mdui-typescale-title-small-tracking);line-height:var(--mdui-typescale-title-small-line-height)}.icon mdui-icon,::slotted([slot=icon]){font-size:inherit;color:inherit}`;
    e.Tab = class extends (Yi(qi(Xt))) {
        constructor() {
            super(...arguments),
            this.inline = !1,
            this.active = !1,
            this.variant = "primary",
            this.key = Ri(),
            this.rippleRef = Li(),
            this.hasSlotController = new Jt(this,"icon","custom")
        }
        get rippleElement() {
            return this.rippleRef.value
        }
        get rippleDisabled() {
            return !1
        }
        get focusElement() {
            return this
        }
        get focusDisabled() {
            return !1
        }
        render() {
            const e = this.icon || this.hasSlotController.test("icon")
              , t = this.hasSlotController.test("custom")
              , i = ()=>ft`<slot name="badge"></slot>`;
            return ft`<mdui-ripple ${Oi(this.rippleRef)} .noRipple="${this.noRipple}"></mdui-ripple><div part="container" class="${ji({
                container: !0,
                preset: !t,
                "variant-secondary": "secondary" === this.variant
            })}"><slot name="custom"><div class="icon-container">${vo(e || this.icon, i)}<slot name="icon" part="icon" class="icon">${this.icon ? ft`<mdui-icon name="${this.icon}"></mdui-icon>` : Zt}</slot></div><div class="label-container">${vo(!e, i)}<slot part="label" class="label"></slot></div></slot></div>`
        }
    }
    ,
    e.Tab.styles = [Qt, vn],
    Se([Ot({
        reflect: !0
    })], e.Tab.prototype, "value", void 0),
    Se([Ot({
        reflect: !0
    })], e.Tab.prototype, "icon", void 0),
    Se([Ot({
        type: Boolean,
        reflect: !0,
        converter: wi
    })], e.Tab.prototype, "inline", void 0),
    Se([Ot({
        type: Boolean,
        reflect: !0,
        converter: wi
    })], e.Tab.prototype, "active", void 0),
    Se([zt()], e.Tab.prototype, "variant", void 0),
    e.Tab = Se([Lt("mdui-tab")], e.Tab);
    const gn = Pe`:host{display:block;overflow-y:auto;flex:1 1 auto}:host(:not([active])){display:none}`;
    e.TabPanel = class extends Xt {
        constructor() {
            super(...arguments),
            this.active = !1
        }
        render() {
            return ft`<slot></slot>`
        }
    }
    ,
    e.TabPanel.styles = [Qt, gn],
    Se([Ot({
        reflect: !0
    })], e.TabPanel.prototype, "value", void 0),
    Se([Ot({
        type: Boolean,
        reflect: !0,
        converter: wi
    })], e.TabPanel.prototype, "active", void 0),
    e.TabPanel = Se([Lt("mdui-tab-panel")], e.TabPanel);
    const bn = Pe`:host{position:relative;display:flex}:host([placement^=top]){flex-direction:column}:host([placement^=bottom]){flex-direction:column-reverse}:host([placement^=left]){flex-direction:row}:host([placement^=right]){flex-direction:row-reverse}.container{position:relative;display:flex;flex:0 0 auto;overflow-x:auto;background-color:rgb(var(--mdui-color-surface))}:host([placement^=bottom]) .container,:host([placement^=top]) .container{flex-direction:row}:host([placement^=left]) .container,:host([placement^=right]) .container{flex-direction:column}:host([placement$='-start']) .container{justify-content:flex-start}:host([placement=bottom]) .container,:host([placement=left]) .container,:host([placement=right]) .container,:host([placement=top]) .container{justify-content:center}:host([placement$='-end']) .container{justify-content:flex-end}.container::after{content:' ';position:absolute;background-color:rgb(var(--mdui-color-surface-variant))}:host([placement^=bottom]) .container::after,:host([placement^=top]) .container::after{left:0;width:100%;height:.0625rem}:host([placement^=top]) .container::after{bottom:0}:host([placement^=bottom]) .container::after{top:0}:host([placement^=left]) .container::after,:host([placement^=right]) .container::after{top:0;height:100%;width:.0625rem}:host([placement^=left]) .container::after{right:0}:host([placement^=right]) .container::after{left:0}.indicator{position:absolute;z-index:1;background-color:rgb(var(--mdui-color-primary))}.container:not(.initial) .indicator{transition-duration:var(--mdui-motion-duration-medium2);transition-timing-function:var(--mdui-motion-easing-standard-decelerate)}:host([placement^=bottom]) .indicator,:host([placement^=top]) .indicator{transition-property:transform,left,width}:host([placement^=left]) .indicator,:host([placement^=right]) .indicator{transition-property:transform,top,height}:host([placement^=top]) .indicator{bottom:0}:host([placement^=bottom]) .indicator{top:0}:host([placement^=left]) .indicator{right:0}:host([placement^=right]) .indicator{left:0}:host([placement^=bottom][variant=primary]) .indicator,:host([placement^=top][variant=primary]) .indicator{height:.1875rem}:host([placement^=bottom][variant=secondary]) .indicator,:host([placement^=top][variant=secondary]) .indicator{height:.125rem}:host([placement^=left][variant=primary]) .indicator,:host([placement^=right][variant=primary]) .indicator{width:.1875rem}:host([placement^=left][variant=secondary]) .indicator,:host([placement^=right][variant=secondary]) .indicator{width:.125rem}:host([placement^=top][variant=primary]) .indicator{border-top-left-radius:.1875rem;border-top-right-radius:.1875rem}:host([placement^=bottom][variant=primary]) .indicator{border-bottom-right-radius:.1875rem;border-bottom-left-radius:.1875rem}:host([placement^=left][variant=primary]) .indicator{border-top-left-radius:.1875rem;border-bottom-left-radius:.1875rem}:host([placement^=right][variant=primary]) .indicator{border-top-right-radius:.1875rem;border-bottom-right-radius:.1875rem}:host([full-width]) ::slotted(mdui-tab){flex:1}`;
    e.Tabs = class extends Xt {
        constructor() {
            super(...arguments),
            this.variant = "primary",
            this.placement = "top-start",
            this.fullWidth = !1,
            this.activeKey = 0,
            this.isInitial = !0,
            this.containerRef = Li(),
            this.indicatorRef = Li(),
            this.definedController = new ki(this,{
                relatedElements: ["mdui-tab", "mdui-tab-panel"]
            })
        }
        async onActiveKeyChange() {
            await this.definedController.whenDefined(),
            this.value = this.tabs.find((e=>e.key === this.activeKey))?.value,
            this.updateActive(),
            this.isInitial || this.emit("change")
        }
        async onValueChange() {
            this.isInitial = !this.hasUpdated,
            await this.definedController.whenDefined();
            const e = this.tabs.find((e=>e.value === this.value));
            this.activeKey = e?.key ?? 0
        }
        async onIndicatorChange() {
            await this.updateComplete,
            this.updateIndicator()
        }
        disconnectedCallback() {
            super.disconnectedCallback(),
            this.observeResize?.unobserve()
        }
        firstUpdated(e) {
            super.firstUpdated(e),
            this.observeResize = Ei(this.containerRef.value, (()=>this.updateIndicator()))
        }
        render() {
            return ft`<div ${Oi(this.containerRef)} part="container" class="container ${ji({
                initial: this.isInitial
            })}"><slot @slotchange="${this.onSlotChange}" @click="${this.onClick}"></slot><div ${Oi(this.indicatorRef)} part="indicator" class="indicator"></div></div><slot name="panel" @slotchange="${this.onSlotChange}"></slot>`
        }
        async onSlotChange() {
            await this.definedController.whenDefined(),
            this.updateActive()
        }
        async onClick(e) {
            if (e.button)
                return;
            await this.definedController.whenDefined();
            const t = e.target.closest("mdui-tab");
            t && (this.activeKey = t.key,
            this.isInitial = !1,
            this.updateActive())
        }
        updateActive() {
            this.activeTab = this.tabs.map((e=>(e.active = this.activeKey === e.key,
            e))).find((e=>e.active)),
            this.panels.forEach((e=>e.active = e.value === this.activeTab?.value)),
            this.updateIndicator()
        }
        updateIndicator() {
            const e = this.activeTab
              , t = M(this.indicatorRef.value)
              , i = this.placement.startsWith("left") || this.placement.startsWith("right");
            if (!e)
                return void t.css({
                    transform: i ? "scaleY(0)" : "scaleX(0)"
                });
            const o = M(e)
              , r = e.offsetTop
              , n = e.offsetLeft
              , s = i ? {
                transform: "scaleY(1)",
                width: "",
                left: ""
            } : {
                transform: "scaleX(1)",
                height: "",
                top: ""
            };
            let a = {};
            if ("primary" === this.variant) {
                const t = o.find(':scope > [slot="custom"]')
                  , s = t.length ? t.get() : M(e.renderRoot).find('slot[name="custom"]').children().get();
                if (i) {
                    const e = Math.min(...s.map((e=>e.offsetTop))) + r;
                    a = {
                        top: e,
                        height: Math.max(...s.map((e=>e.offsetTop + e.offsetHeight))) + r - e
                    }
                } else {
                    const e = Math.min(...s.map((e=>e.offsetLeft))) + n;
                    a = {
                        left: e,
                        width: Math.max(...s.map((e=>e.offsetLeft + e.offsetWidth))) + n - e
                    }
                }
            }
            "secondary" === this.variant && (a = i ? {
                top: r,
                height: e.offsetHeight
            } : {
                left: n,
                width: e.offsetWidth
            }),
            t.css({
                ...s,
                ...a
            })
        }
    }
    ,
    e.Tabs.styles = [Qt, bn],
    Se([Ot({
        reflect: !0
    })], e.Tabs.prototype, "variant", void 0),
    Se([Ot({
        reflect: !0
    })], e.Tabs.prototype, "value", void 0),
    Se([Ot({
        reflect: !0
    })], e.Tabs.prototype, "placement", void 0),
    Se([Ot({
        type: Boolean,
        reflect: !0,
        converter: wi,
        attribute: "full-width"
    })], e.Tabs.prototype, "fullWidth", void 0),
    Se([zt()], e.Tabs.prototype, "activeKey", void 0),
    Se([zt()], e.Tabs.prototype, "isInitial", void 0),
    Se([Nt({
        selector: "mdui-tab",
        flatten: !0
    })], e.Tabs.prototype, "tabs", void 0),
    Se([Nt({
        selector: "mdui-tab-panel",
        slot: "panel",
        flatten: !0
    })], e.Tabs.prototype, "panels", void 0),
    Se([Ci("activeKey", !0)], e.Tabs.prototype, "onActiveKeyChange", null),
    Se([Ci("value")], e.Tabs.prototype, "onValueChange", null),
    Se([Ci("variant", !0), Ci("placement", !0), Ci("fullWidth", !0)], e.Tabs.prototype, "onIndicatorChange", null),
    e.Tabs = Se([Lt("mdui-tabs")], e.Tabs);
    class yn {
        constructor(e, t) {
            this.isHover = !1,
            this.uniqueID = Ri(),
            this.enterEventName = `mouseenter.${this.uniqueID}.hoverController`,
            this.leaveEventName = `mouseleave.${this.uniqueID}.hoverController`,
            this.mouseEnterItems = [],
            this.mouseLeaveItems = [],
            (this.host = e).addController(this),
            this.elementRef = t
        }
        hostConnected() {
            this.host.updateComplete.then((()=>{
                M(this.elementRef.value).on(this.enterEventName, (()=>{
                    this.isHover = !0;
                    for (let e = this.mouseEnterItems.length - 1; e >= 0; e--) {
                        const t = this.mouseEnterItems[e];
                        t.callback(),
                        t.one && this.mouseEnterItems.splice(e, 1)
                    }
                }
                )).on(this.leaveEventName, (()=>{
                    this.isHover = !1;
                    for (let e = this.mouseLeaveItems.length - 1; e >= 0; e--) {
                        const t = this.mouseLeaveItems[e];
                        t.callback(),
                        t.one && this.mouseLeaveItems.splice(e, 1)
                    }
                }
                ))
            }
            ))
        }
        hostDisconnected() {
            M(this.elementRef.value).off(this.enterEventName).off(this.leaveEventName)
        }
        onMouseEnter(e, t=!1) {
            this.mouseEnterItems.push({
                callback: e,
                one: t
            })
        }
        onMouseLeave(e, t=!1) {
            this.mouseLeaveItems.push({
                callback: e,
                one: t
            })
        }
    }
    const wn = Pe`:host{--shape-corner-plain:var(--mdui-shape-corner-extra-small);--shape-corner-rich:var(--mdui-shape-corner-medium);--z-index:2500;display:contents}.popup{position:fixed;display:flex;flex-direction:column;z-index:var(--z-index);border-radius:var(--shape-corner-plain);background-color:rgb(var(--mdui-color-inverse-surface));padding:0 .5rem;min-width:1.75rem;max-width:20rem}:host([variant=rich]) .popup{border-radius:var(--shape-corner-rich);background-color:rgb(var(--mdui-color-surface-container));box-shadow:var(--mdui-elevation-level2);padding:.75rem 1rem .5rem 1rem}.headline{display:flex;color:rgb(var(--mdui-color-on-surface-variant));font-size:var(--mdui-typescale-title-small-size);font-weight:var(--mdui-typescale-title-small-weight);letter-spacing:var(--mdui-typescale-title-small-tracking);line-height:var(--mdui-typescale-title-small-line-height)}.content{display:flex;padding:.25rem 0;color:rgb(var(--mdui-color-inverse-on-surface));font-size:var(--mdui-typescale-body-small-size);font-weight:var(--mdui-typescale-body-small-weight);letter-spacing:var(--mdui-typescale-body-small-tracking);line-height:var(--mdui-typescale-body-small-line-height)}:host([variant=rich]) .content{color:rgb(var(--mdui-color-on-surface-variant));font-size:var(--mdui-typescale-body-medium-size);font-weight:var(--mdui-typescale-body-medium-weight);letter-spacing:var(--mdui-typescale-body-medium-tracking);line-height:var(--mdui-typescale-body-medium-line-height)}.action{display:flex;justify-content:flex-start;padding-top:.5rem}.action ::slotted(:not(:last-child)){margin-right:.5rem}`;
    e.Tooltip = class extends Xt {
        constructor() {
            super(),
            this.variant = "plain",
            this.placement = "auto",
            this.openDelay = 150,
            this.closeDelay = 150,
            this.trigger = "hover focus",
            this.disabled = !1,
            this.open = !1,
            this.popupRef = Li(),
            this.hasSlotController = new Jt(this,"headline","action"),
            this.hoverController = new yn(this,this.popupRef),
            this.definedController = new ki(this,{
                needDomReady: !0
            }),
            this.onDocumentClick = this.onDocumentClick.bind(this),
            this.onWindowScroll = this.onWindowScroll.bind(this),
            this.onFocus = this.onFocus.bind(this),
            this.onBlur = this.onBlur.bind(this),
            this.onClick = this.onClick.bind(this),
            this.onKeydown = this.onKeydown.bind(this),
            this.onMouseEnter = this.onMouseEnter.bind(this),
            this.onMouseLeave = this.onMouseLeave.bind(this)
        }
        get target() {
            return [...this.children].find((e=>"style" !== e.tagName.toLowerCase() && "content" !== e.getAttribute("slot")))
        }
        async onPositionChange() {
            this.open && (await this.definedController.whenDefined(),
            this.updatePositioner())
        }
        async onOpenChange() {
            const e = this.hasUpdated
              , t = xo(this, "short4")
              , i = Co(this, "standard");
            if (this.open) {
                if (await this.definedController.whenDefined(),
                M(`mdui-tooltip[variant="${this.variant}"]`).filter(((e,t)=>t !== this)).prop("open", !1),
                e || await this.updateComplete,
                e) {
                    if (!this.emit("open", {
                        cancelable: !0
                    }))
                        return
                }
                return await bo(this.popupRef.value),
                this.popupRef.value.hidden = !1,
                this.updatePositioner(),
                await go(this.popupRef.value, [{
                    transform: "scale(0)"
                }, {
                    transform: "scale(1)"
                }], {
                    duration: e ? t : 0,
                    easing: i
                }),
                void (e && this.emit("opened"))
            }
            if (!this.open && e) {
                if (!this.emit("close", {
                    cancelable: !0
                }))
                    return;
                await bo(this.popupRef.value),
                await go(this.popupRef.value, [{
                    transform: "scale(1)"
                }, {
                    transform: "scale(0)"
                }], {
                    duration: t,
                    easing: i
                }),
                this.popupRef.value.hidden = !0,
                this.emit("closed")
            }
        }
        connectedCallback() {
            super.connectedCallback(),
            document.addEventListener("pointerdown", this.onDocumentClick),
            this.overflowAncestors = yr(this.target),
            this.overflowAncestors.forEach((e=>{
                e.addEventListener("scroll", this.onWindowScroll)
            }
            ))
        }
        disconnectedCallback() {
            super.disconnectedCallback(),
            document.removeEventListener("pointerdown", this.onDocumentClick),
            this.overflowAncestors?.forEach((e=>{
                e.removeEventListener("scroll", this.onWindowScroll)
            }
            )),
            this.observeResize?.unobserve()
        }
        firstUpdated(e) {
            super.firstUpdated(e),
            this.definedController.whenDefined().then((()=>{
                const e = this.target;
                e.addEventListener("focus", this.onFocus),
                e.addEventListener("blur", this.onBlur),
                e.addEventListener("pointerdown", this.onClick),
                e.addEventListener("keydown", this.onKeydown),
                e.addEventListener("mouseenter", this.onMouseEnter),
                e.addEventListener("mouseleave", this.onMouseLeave),
                this.observeResize = Ei(e, (()=>{
                    this.updatePositioner()
                }
                ))
            }
            ))
        }
        render() {
            const e = this.isRich() && (this.headline || this.hasSlotController.test("headline"))
              , t = this.isRich() && this.hasSlotController.test("action");
            return ft`<slot></slot><div ${Oi(this.popupRef)} part="popup" class="popup" hidden>${vo(e, (()=>ft`<slot name="headline" part="headline" class="headline">${this.headline}</slot>`))}<slot name="content" part="content" class="content">${this.content}</slot>${vo(t, (()=>ft`<slot name="action" part="action" class="action"></slot>`))}</div>`
        }
        isRich() {
            return "rich" === this.variant
        }
        requestClose() {
            this.hoverController.isHover ? this.hoverController.onMouseLeave((()=>{
                this.hasTrigger("hover") ? this.hoverTimeout = window.setTimeout((()=>{
                    this.open = !1
                }
                ), this.closeDelay || 50) : this.open = !1
            }
            ), !0) : this.open = !1
        }
        hasTrigger(e) {
            return this.trigger.split(" ").includes(e)
        }
        onFocus() {
            this.disabled || this.open || !this.hasTrigger("focus") || (this.open = !0)
        }
        onBlur() {
            !this.disabled && this.open && this.hasTrigger("focus") && this.requestClose()
        }
        onClick(e) {
            this.disabled || e.button || !this.hasTrigger("click") || this.open && (this.hasTrigger("hover") || this.hasTrigger("focus")) || (this.open = !this.open)
        }
        onKeydown(e) {
            !this.disabled && this.open && "Escape" === e.key && (e.stopPropagation(),
            this.requestClose())
        }
        onMouseEnter() {
            this.disabled || this.open || !this.hasTrigger("hover") || (this.openDelay ? (window.clearTimeout(this.hoverTimeout),
            this.hoverTimeout = window.setTimeout((()=>{
                this.open = !0
            }
            ), this.openDelay)) : this.open = !0)
        }
        onMouseLeave() {
            window.clearTimeout(this.hoverTimeout),
            !this.disabled && this.open && this.hasTrigger("hover") && (this.hoverTimeout = window.setTimeout((()=>{
                this.requestClose()
            }
            ), this.closeDelay || 50))
        }
        onDocumentClick(e) {
            if (this.disabled || !this.open)
                return;
            e.composedPath().includes(this) || this.requestClose()
        }
        onWindowScroll() {
            window.requestAnimationFrame((()=>this.updatePositioner()))
        }
        updatePositioner() {
            const e = M(this.popupRef.value)
              , t = this.isRich() ? 0 : 4
              , i = this.target.getBoundingClientRect()
              , o = i.top
              , r = i.left
              , n = i.height
              , s = i.width
              , a = this.popupRef.value.offsetHeight
              , l = this.popupRef.value.offsetWidth
              , c = l + t + 4
              , d = a + t + 4;
            let h, u, p, m, f = this.placement;
            if ("auto" === f) {
                const e = M(window)
                  , t = o > d
                  , i = e.height() - o - n > d
                  , a = r > c
                  , l = e.width() - r - s > c;
                this.isRich() ? (f = "bottom-right",
                i && l ? f = "bottom-right" : i && a ? f = "bottom-left" : t && l ? f = "top-right" : t && a ? f = "top-left" : i ? f = "bottom" : t ? f = "top" : l ? f = "right" : a && (f = "left")) : (f = "top",
                t ? f = "top" : i ? f = "bottom" : a ? f = "left" : l && (f = "right"))
            }
            const [v,g] = f.split("-");
            switch (v) {
            case "top":
                u = "bottom",
                p = o - a - t;
                break;
            case "bottom":
                u = "top",
                p = o + n + t;
                break;
            default:
                switch (u = "center",
                g) {
                case "start":
                    p = o;
                    break;
                case "end":
                    p = o + n - a;
                    break;
                default:
                    p = o + n / 2 - a / 2
                }
            }
            switch (v) {
            case "left":
                h = "right",
                m = r - l - t;
                break;
            case "right":
                h = "left",
                m = r + s + t;
                break;
            default:
                switch (h = "center",
                g) {
                case "start":
                    m = r;
                    break;
                case "end":
                    m = r + s - l;
                    break;
                case "left":
                    h = "right",
                    m = r - l - t;
                    break;
                case "right":
                    h = "left",
                    m = r + s + t;
                    break;
                default:
                    m = r + s / 2 - l / 2
                }
            }
            e.css({
                top: p,
                left: m,
                transformOrigin: [h, u].join(" ")
            })
        }
    }
    ,
    e.Tooltip.styles = [Qt, wn],
    Se([Ot({
        reflect: !0
    })], e.Tooltip.prototype, "variant", void 0),
    Se([Ot({
        reflect: !0
    })], e.Tooltip.prototype, "placement", void 0),
    Se([Ot({
        type: Number,
        reflect: !0,
        attribute: "open-delay"
    })], e.Tooltip.prototype, "openDelay", void 0),
    Se([Ot({
        type: Number,
        reflect: !0,
        attribute: "close-delay"
    })], e.Tooltip.prototype, "closeDelay", void 0),
    Se([Ot({
        reflect: !0
    })], e.Tooltip.prototype, "headline", void 0),
    Se([Ot({
        reflect: !0
    })], e.Tooltip.prototype, "content", void 0),
    Se([Ot({
        reflect: !0
    })], e.Tooltip.prototype, "trigger", void 0),
    Se([Ot({
        type: Boolean,
        reflect: !0,
        converter: wi
    })], e.Tooltip.prototype, "disabled", void 0),
    Se([Ot({
        type: Boolean,
        reflect: !0,
        converter: wi
    })], e.Tooltip.prototype, "open", void 0),
    Se([Ci("placement", !0), Ci("content", !0)], e.Tooltip.prototype, "onPositionChange", null),
    Se([Ci("open")], e.Tooltip.prototype, "onOpenChange", null),
    e.Tooltip = Se([Lt("mdui-tooltip")], e.Tooltip);
    const kn = Pe`:host{display:block;width:100%;flex-shrink:initial!important;overflow:hidden;color:rgb(var(--mdui-color-on-surface));font-size:var(--mdui-typescale-title-large-size);font-weight:var(--mdui-typescale-title-large-weight);letter-spacing:var(--mdui-typescale-title-large-tracking);line-height:var(--mdui-typescale-title-large-line-height);line-height:2.5rem}.label{display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;opacity:1;transition:opacity var(--mdui-motion-duration-short2) var(--mdui-motion-easing-linear)}.label.variant-center-aligned{text-align:center}.label.variant-large:not(.shrink),.label.variant-medium:not(.shrink){opacity:0}.label.variant-large.shrink,.label.variant-medium.shrink{transition-delay:var(--mdui-motion-duration-short2)}.label-large{display:none;position:absolute;width:100%;left:0;margin-right:0;padding:0 1rem;transition:opacity var(--mdui-motion-duration-short2) var(--mdui-motion-easing-linear)}.label-large.variant-large,.label-large.variant-medium{display:block}.label-large.variant-medium{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;bottom:.75rem;font-size:var(--mdui-typescale-headline-small-size);font-weight:var(--mdui-typescale-headline-small-weight);letter-spacing:var(--mdui-typescale-headline-small-tracking);line-height:var(--mdui-typescale-headline-small-line-height)}.label-large.variant-large{display:-webkit-box;overflow:hidden;white-space:normal;-webkit-box-orient:vertical;-webkit-line-clamp:2;bottom:1.25rem;font-size:var(--mdui-typescale-headline-medium-size);font-weight:var(--mdui-typescale-headline-medium-weight);letter-spacing:var(--mdui-typescale-headline-medium-tracking);line-height:var(--mdui-typescale-headline-medium-line-height)}.label-large.variant-large:not(.shrink),.label-large.variant-medium:not(.shrink){opacity:1;transition-delay:var(--mdui-motion-duration-short2)}.label-large.variant-large.shrink,.label-large.variant-medium.shrink{opacity:0;z-index:-1}`;
    e.TopAppBarTitle = class extends Xt {
        constructor() {
            super(...arguments),
            this.variant = "small",
            this.shrink = !1,
            this.hasSlotController = new Jt(this,"label-large"),
            this.labelLargeRef = Li(),
            this.defaultSlotRef = Li()
        }
        render() {
            const e = this.hasSlotController.test("label-large")
              , t = ji({
                shrink: this.shrink,
                "variant-center-aligned": "center-aligned" === this.variant,
                "variant-small": "small" === this.variant,
                "variant-medium": "medium" === this.variant,
                "variant-large": "large" === this.variant
            });
            return ft`<slot part="label" class="label ${t}" ${Oi(this.defaultSlotRef)} @slotchange="${()=>this.onSlotChange(e)}"></slot>${e ? ft`<slot name="label-large" part="label-large" class="label-large ${t}"></slot>` : ft`<div ${Oi(this.labelLargeRef)} part="label-large" class="label-large ${t}"></div>`}`
        }
        onSlotChange(e) {
            e || (this.labelLargeRef.value.innerHTML = (e=>{
                const t = e.assignedNodes({
                    flatten: !0
                });
                let i = "";
                return [...t].forEach((e=>{
                    e.nodeType === Node.ELEMENT_NODE && (i += e.outerHTML),
                    e.nodeType === Node.TEXT_NODE && (i += e.textContent)
                }
                )),
                i
            }
            )(this.defaultSlotRef.value))
        }
    }
    ,
    e.TopAppBarTitle.styles = [Qt, kn],
    Se([zt()], e.TopAppBarTitle.prototype, "variant", void 0),
    Se([zt()], e.TopAppBarTitle.prototype, "shrink", void 0),
    e.TopAppBarTitle = Se([Lt("mdui-top-app-bar-title")], e.TopAppBarTitle);
    const Cn = Pe`:host{--shape-corner:var(--mdui-shape-corner-none);--z-index:2000;position:fixed;top:0;right:0;left:0;display:flex;flex:0 0 auto;align-items:flex-start;justify-content:flex-start;border-bottom-left-radius:var(--shape-corner);border-bottom-right-radius:var(--shape-corner);z-index:var(--z-index);transition:top var(--mdui-motion-duration-long2) var(--mdui-motion-easing-standard),height var(--mdui-motion-duration-long2) var(--mdui-motion-easing-standard),box-shadow var(--mdui-motion-duration-short4) var(--mdui-motion-easing-linear),background-color var(--mdui-motion-duration-short4) var(--mdui-motion-easing-linear);padding:.75rem .5rem;height:4rem;background-color:rgb(var(--mdui-color-surface))}:host([scroll-target]:not([scroll-target=''])){position:absolute}:host([scroll-behavior~=shrink]){transition-duration:var(--mdui-motion-duration-short4)}:host([scrolling]){background-color:rgb(var(--mdui-color-surface-container));box-shadow:var(--mdui-elevation-level2)}::slotted(mdui-button-icon){color:rgb(var(--mdui-color-on-surface-variant));font-size:1.5rem}::slotted(mdui-button-icon:first-child){color:rgb(var(--mdui-color-on-surface))}::slotted(mdui-avatar){width:1.875rem;height:1.875rem;margin-top:.3125rem;margin-bottom:.3125rem}::slotted(*){flex-shrink:0}::slotted(:not(:last-child)){margin-right:.5rem}:host([variant=medium]){height:7rem}:host([variant=large]){height:9.5rem}:host([hide]){transition-duration:var(--mdui-motion-duration-short4);top:-4.625rem}:host([hide][variant=medium]){top:-7.625rem}:host([hide][variant=large]){top:-10.125rem}:host([shrink][variant=large]),:host([shrink][variant=medium]){transition-duration:var(--mdui-motion-duration-short4);height:4rem}`;
    function xn(e) {
        return !!e && ("object" == typeof e || "function" == typeof e) && "function" == typeof e.then
    }
    e.TopAppBar = class extends (xi(Mi)) {
        constructor() {
            super(...arguments),
            this.variant = "small",
            this.hide = !1,
            this.shrink = !1,
            this.scrolling = !1
        }
        get scrollPaddingPosition() {
            return "top"
        }
        get layoutPlacement() {
            return "top"
        }
        async onVariantChange() {
            this.hasUpdated ? this.addEventListener("transitionend", (async()=>{
                await this.scrollBehaviorDefinedController.whenDefined(),
                this.updatecontainerPadding()
            }
            ), {
                once: !0
            }) : await this.updateComplete,
            this.titleElements.forEach((e=>{
                e.variant = this.variant
            }
            ))
        }
        async onShrinkChange() {
            this.hasUpdated || await this.updateComplete,
            this.titleElements.forEach((e=>{
                e.shrink = this.shrink
            }
            ))
        }
        firstUpdated(e) {
            super.firstUpdated(e),
            this.addEventListener("transitionend", (e=>{
                e.target === this && this.emit(this.hide ? "hidden" : "shown")
            }
            ))
        }
        render() {
            return ft`<slot></slot>`
        }
        runScrollNoThreshold(e, t) {
            this.hasScrollBehavior("shrink") && e && t < 8 && (this.shrink = !1)
        }
        runScrollThreshold(e, t) {
            if (this.hasScrollBehavior("elevate") && (this.scrolling = !!t),
            this.hasScrollBehavior("shrink") && (e || (this.shrink = !0)),
            this.hasScrollBehavior("hide")) {
                if (!e && !this.hide) {
                    this.emit("hide", {
                        cancelable: !0
                    }) && (this.hide = !0)
                }
                if (e && this.hide) {
                    this.emit("show", {
                        cancelable: !0
                    }) && (this.hide = !1)
                }
            }
        }
    }
    ,
    e.TopAppBar.styles = [Qt, Cn],
    Se([Ot({
        reflect: !0
    })], e.TopAppBar.prototype, "variant", void 0),
    Se([Ot({
        type: Boolean,
        reflect: !0,
        converter: wi
    })], e.TopAppBar.prototype, "hide", void 0),
    Se([Ot({
        type: Boolean,
        reflect: !0,
        converter: wi
    })], e.TopAppBar.prototype, "shrink", void 0),
    Se([Ot({
        reflect: !0,
        attribute: "scroll-behavior"
    })], e.TopAppBar.prototype, "scrollBehavior", void 0),
    Se([Ot({
        type: Boolean,
        reflect: !0,
        converter: wi
    })], e.TopAppBar.prototype, "scrolling", void 0),
    Se([Nt({
        selector: "mdui-top-app-bar-title",
        flatten: !0
    })], e.TopAppBar.prototype, "titleElements", void 0),
    Se([Ci("variant")], e.TopAppBar.prototype, "onVariantChange", null),
    Se([Ci("shrink")], e.TopAppBar.prototype, "onShrinkChange", null),
    e.TopAppBar = Se([Lt("mdui-top-app-bar")], e.TopAppBar);
    const $n = {};
    function Rn(e, t) {
        if (u($n[e]) && ($n[e] = []),
        u(t))
            return $n[e];
        $n[e].push(t)
    }
    function In(e) {
        if (u($n[e]))
            return;
        if (!$n[e].length)
            return;
        $n[e].shift()()
    }
    const Sn = {
        onClick: x
    }
      , En = "mdui.functions.dialog.";
    let Tn;
    const An = t=>{
        const i = new e.Dialog
          , o = M(i)
          , r = ["headline", "description", "icon", "closeOnEsc", "closeOnOverlayClick", "stackedActions"]
          , n = ["onOpen", "onOpened", "onClose", "onClosed", "onOverlayClick"];
        return Object.entries(t).forEach((([e,t])=>{
            if (r.includes(e))
                i[e] = t;
            else if (n.includes(e)) {
                const r = k(e.slice(2));
                o.on(r, (()=>{
                    t.call(i, i)
                }
                ))
            }
        }
        )),
        t.body && o.append(t.body),
        t.actions && t.actions.forEach((e=>{
            const t = Object.assign({}, Sn, e);
            M(`<mdui-button\n        slot="action"\n        variant="text"\n      >${t.text}</mdui-button>`).appendTo(o).on("click", (function() {
                const e = t.onClick.call(i, i);
                xn(e) ? (this.loading = !0,
                e.then((()=>{
                    i.open = !1
                }
                )).finally((()=>{
                    this.loading = !1
                }
                ))) : !1 !== e && (i.open = !1)
            }
            ))
        }
        )),
        o.appendTo("body").on("closed", (()=>{
            o.remove(),
            t.queue && (Tn = void 0,
            In(En + t.queue))
        }
        )),
        t.queue ? Tn ? Rn(En + t.queue, (()=>{
            i.open = !0,
            Tn = i
        }
        )) : (setTimeout((()=>{
            i.open = !0
        }
        )),
        Tn = i) : setTimeout((()=>{
            i.open = !0
        }
        )),
        i
    }
      , Dn = ()=>er("OK", {
        id: "functions.alert.confirmText"
    })
      , Mn = ()=>er("OK", {
        id: "functions.confirm.confirmText"
    })
      , Pn = ()=>er("Cancel", {
        id: "functions.confirm.cancelText"
    });
    function Ln(e) {
        return e < 0 ? -1 : 0 === e ? 0 : 1
    }
    function _n(e, t, i) {
        return (1 - i) * e + i * t
    }
    function Bn(e, t, i) {
        return i < e ? e : i > t ? t : i
    }
    function On(e) {
        return (e %= 360) < 0 && (e += 360),
        e
    }
    function zn(e) {
        return (e %= 360) < 0 && (e += 360),
        e
    }
    function Nn(e, t) {
        return 180 - Math.abs(Math.abs(e - t) - 180)
    }
    function Fn(e, t) {
        return [e[0] * t[0][0] + e[1] * t[0][1] + e[2] * t[0][2], e[0] * t[1][0] + e[1] * t[1][1] + e[2] * t[1][2], e[0] * t[2][0] + e[1] * t[2][1] + e[2] * t[2][2]]
    }
    const Vn = [[.41233895, .35762064, .18051042], [.2126, .7152, .0722], [.01932141, .11916382, .95034478]]
      , Hn = [[3.2413774792388685, -1.5376652402851851, -.49885366846268053], [-.9691452513005321, 1.8758853451067872, .04156585616912061], [.05562093689691305, -.20395524564742123, 1.0571799111220335]]
      , Un = [95.047, 100, 108.883];
    function Kn(e, t, i) {
        return (255 << 24 | (255 & e) << 16 | (255 & t) << 8 | 255 & i) >>> 0
    }
    function qn(e) {
        return Kn(es(e[0]), es(e[1]), es(e[2]))
    }
    function jn(e) {
        return e >> 16 & 255
    }
    function Wn(e) {
        return e >> 8 & 255
    }
    function Gn(e) {
        return 255 & e
    }
    function Yn(e, t, i) {
        const o = Hn
          , r = o[0][0] * e + o[0][1] * t + o[0][2] * i
          , n = o[1][0] * e + o[1][1] * t + o[1][2] * i
          , s = o[2][0] * e + o[2][1] * t + o[2][2] * i;
        return Kn(es(r), es(n), es(s))
    }
    function Xn(e) {
        const t = function(e) {
            return Fn([Qn(jn(e)), Qn(Wn(e)), Qn(Gn(e))], Vn)
        }(e)[1];
        return 116 * ts(t / 100) - 16
    }
    function Jn(e) {
        return 100 * is((e + 16) / 116)
    }
    function Zn(e) {
        return 116 * ts(e / 100) - 16
    }
    function Qn(e) {
        const t = e / 255;
        return t <= .040449936 ? t / 12.92 * 100 : 100 * Math.pow((t + .055) / 1.055, 2.4)
    }
    function es(e) {
        const t = e / 100;
        let i = 0;
        return i = t <= .0031308 ? 12.92 * t : 1.055 * Math.pow(t, 1 / 2.4) - .055,
        o = 0,
        r = 255,
        (n = Math.round(255 * i)) < o ? o : n > r ? r : n;
        var o, r, n
    }
    function ts(e) {
        const t = 24389 / 27;
        return e > 216 / 24389 ? Math.pow(e, 1 / 3) : (t * e + 16) / 116
    }
    function is(e) {
        const t = e * e * e;
        return t > 216 / 24389 ? t : (116 * e - 16) / (24389 / 27)
    }
    class os {
        static make(e=function() {
            return Un
        }(), t=200 / Math.PI * Jn(50) / 100, i=50, o=2, r=!1) {
            const n = e
              , s = .401288 * n[0] + .650173 * n[1] + -.051461 * n[2]
              , a = -.250268 * n[0] + 1.204414 * n[1] + .045854 * n[2]
              , l = -.002079 * n[0] + .048952 * n[1] + .953127 * n[2]
              , c = .8 + o / 10
              , d = c >= .9 ? _n(.59, .69, 10 * (c - .9)) : _n(.525, .59, 10 * (c - .8));
            let h = r ? 1 : c * (1 - 1 / 3.6 * Math.exp((-t - 42) / 92));
            h = h > 1 ? 1 : h < 0 ? 0 : h;
            const u = c
              , p = [h * (100 / s) + 1 - h, h * (100 / a) + 1 - h, h * (100 / l) + 1 - h]
              , m = 1 / (5 * t + 1)
              , f = m * m * m * m
              , v = 1 - f
              , g = f * t + .1 * v * v * Math.cbrt(5 * t)
              , b = Jn(i) / e[1]
              , y = 1.48 + Math.sqrt(b)
              , w = .725 / Math.pow(b, .2)
              , k = w
              , C = [Math.pow(g * p[0] * s / 100, .42), Math.pow(g * p[1] * a / 100, .42), Math.pow(g * p[2] * l / 100, .42)]
              , x = [400 * C[0] / (C[0] + 27.13), 400 * C[1] / (C[1] + 27.13), 400 * C[2] / (C[2] + 27.13)];
            return new os(b,(2 * x[0] + x[1] + .05 * x[2]) * w,w,k,d,u,p,g,Math.pow(g, .25),y)
        }
        constructor(e, t, i, o, r, n, s, a, l, c) {
            this.n = e,
            this.aw = t,
            this.nbb = i,
            this.ncb = o,
            this.c = r,
            this.nc = n,
            this.rgbD = s,
            this.fl = a,
            this.fLRoot = l,
            this.z = c
        }
    }
    os.DEFAULT = os.make();
    class rs {
        constructor(e, t, i, o, r, n, s, a, l) {
            this.hue = e,
            this.chroma = t,
            this.j = i,
            this.q = o,
            this.m = r,
            this.s = n,
            this.jstar = s,
            this.astar = a,
            this.bstar = l
        }
        distance(e) {
            const t = this.jstar - e.jstar
              , i = this.astar - e.astar
              , o = this.bstar - e.bstar
              , r = Math.sqrt(t * t + i * i + o * o);
            return 1.41 * Math.pow(r, .63)
        }
        static fromInt(e) {
            return rs.fromIntInViewingConditions(e, os.DEFAULT)
        }
        static fromIntInViewingConditions(e, t) {
            const i = (65280 & e) >> 8
              , o = 255 & e
              , r = Qn((16711680 & e) >> 16)
              , n = Qn(i)
              , s = Qn(o)
              , a = .41233895 * r + .35762064 * n + .18051042 * s
              , l = .2126 * r + .7152 * n + .0722 * s
              , c = .01932141 * r + .11916382 * n + .95034478 * s
              , d = .401288 * a + .650173 * l - .051461 * c
              , h = -.250268 * a + 1.204414 * l + .045854 * c
              , u = -.002079 * a + .048952 * l + .953127 * c
              , p = t.rgbD[0] * d
              , m = t.rgbD[1] * h
              , f = t.rgbD[2] * u
              , v = Math.pow(t.fl * Math.abs(p) / 100, .42)
              , g = Math.pow(t.fl * Math.abs(m) / 100, .42)
              , b = Math.pow(t.fl * Math.abs(f) / 100, .42)
              , y = 400 * Ln(p) * v / (v + 27.13)
              , w = 400 * Ln(m) * g / (g + 27.13)
              , k = 400 * Ln(f) * b / (b + 27.13)
              , C = (11 * y + -12 * w + k) / 11
              , x = (y + w - 2 * k) / 9
              , $ = (20 * y + 20 * w + 21 * k) / 20
              , R = (40 * y + 20 * w + k) / 20
              , I = 180 * Math.atan2(x, C) / Math.PI
              , S = I < 0 ? I + 360 : I >= 360 ? I - 360 : I
              , E = S * Math.PI / 180
              , T = R * t.nbb
              , A = 100 * Math.pow(T / t.aw, t.c * t.z)
              , D = 4 / t.c * Math.sqrt(A / 100) * (t.aw + 4) * t.fLRoot
              , M = S < 20.14 ? S + 360 : S
              , P = 5e4 / 13 * (.25 * (Math.cos(M * Math.PI / 180 + 2) + 3.8)) * t.nc * t.ncb * Math.sqrt(C * C + x * x) / ($ + .305)
              , L = Math.pow(P, .9) * Math.pow(1.64 - Math.pow(.29, t.n), .73)
              , _ = L * Math.sqrt(A / 100)
              , B = _ * t.fLRoot
              , O = 50 * Math.sqrt(L * t.c / (t.aw + 4))
              , z = (1 + 100 * .007) * A / (1 + .007 * A)
              , N = 1 / .0228 * Math.log(1 + .0228 * B)
              , F = N * Math.cos(E)
              , V = N * Math.sin(E);
            return new rs(S,_,A,D,B,O,z,F,V)
        }
        static fromJch(e, t, i) {
            return rs.fromJchInViewingConditions(e, t, i, os.DEFAULT)
        }
        static fromJchInViewingConditions(e, t, i, o) {
            const r = 4 / o.c * Math.sqrt(e / 100) * (o.aw + 4) * o.fLRoot
              , n = t * o.fLRoot
              , s = t / Math.sqrt(e / 100)
              , a = 50 * Math.sqrt(s * o.c / (o.aw + 4))
              , l = i * Math.PI / 180
              , c = (1 + 100 * .007) * e / (1 + .007 * e)
              , d = 1 / .0228 * Math.log(1 + .0228 * n)
              , h = d * Math.cos(l)
              , u = d * Math.sin(l);
            return new rs(i,t,e,r,n,a,c,h,u)
        }
        static fromUcs(e, t, i) {
            return rs.fromUcsInViewingConditions(e, t, i, os.DEFAULT)
        }
        static fromUcsInViewingConditions(e, t, i, o) {
            const r = t
              , n = i
              , s = Math.sqrt(r * r + n * n)
              , a = (Math.exp(.0228 * s) - 1) / .0228 / o.fLRoot;
            let l = Math.atan2(n, r) * (180 / Math.PI);
            l < 0 && (l += 360);
            const c = e / (1 - .007 * (e - 100));
            return rs.fromJchInViewingConditions(c, a, l, o)
        }
        toInt() {
            return this.viewed(os.DEFAULT)
        }
        viewed(e) {
            const t = 0 === this.chroma || 0 === this.j ? 0 : this.chroma / Math.sqrt(this.j / 100)
              , i = Math.pow(t / Math.pow(1.64 - Math.pow(.29, e.n), .73), 1 / .9)
              , o = this.hue * Math.PI / 180
              , r = .25 * (Math.cos(o + 2) + 3.8)
              , n = e.aw * Math.pow(this.j / 100, 1 / e.c / e.z)
              , s = r * (5e4 / 13) * e.nc * e.ncb
              , a = n / e.nbb
              , l = Math.sin(o)
              , c = Math.cos(o)
              , d = 23 * (a + .305) * i / (23 * s + 11 * i * c + 108 * i * l)
              , h = d * c
              , u = d * l
              , p = (460 * a + 451 * h + 288 * u) / 1403
              , m = (460 * a - 891 * h - 261 * u) / 1403
              , f = (460 * a - 220 * h - 6300 * u) / 1403
              , v = Math.max(0, 27.13 * Math.abs(p) / (400 - Math.abs(p)))
              , g = Ln(p) * (100 / e.fl) * Math.pow(v, 1 / .42)
              , b = Math.max(0, 27.13 * Math.abs(m) / (400 - Math.abs(m)))
              , y = Ln(m) * (100 / e.fl) * Math.pow(b, 1 / .42)
              , w = Math.max(0, 27.13 * Math.abs(f) / (400 - Math.abs(f)))
              , k = Ln(f) * (100 / e.fl) * Math.pow(w, 1 / .42)
              , C = g / e.rgbD[0]
              , x = y / e.rgbD[1]
              , $ = k / e.rgbD[2];
            return Yn(1.86206786 * C - 1.01125463 * x + .14918677 * $, .38752654 * C + .62144744 * x - .00897398 * $, -.0158415 * C - .03412294 * x + 1.04996444 * $)
        }
        static fromXyzInViewingConditions(e, t, i, o) {
            const r = .401288 * e + .650173 * t - .051461 * i
              , n = -.250268 * e + 1.204414 * t + .045854 * i
              , s = -.002079 * e + .048952 * t + .953127 * i
              , a = o.rgbD[0] * r
              , l = o.rgbD[1] * n
              , c = o.rgbD[2] * s
              , d = Math.pow(o.fl * Math.abs(a) / 100, .42)
              , h = Math.pow(o.fl * Math.abs(l) / 100, .42)
              , u = Math.pow(o.fl * Math.abs(c) / 100, .42)
              , p = 400 * Ln(a) * d / (d + 27.13)
              , m = 400 * Ln(l) * h / (h + 27.13)
              , f = 400 * Ln(c) * u / (u + 27.13)
              , v = (11 * p + -12 * m + f) / 11
              , g = (p + m - 2 * f) / 9
              , b = (20 * p + 20 * m + 21 * f) / 20
              , y = (40 * p + 20 * m + f) / 20
              , w = 180 * Math.atan2(g, v) / Math.PI
              , k = w < 0 ? w + 360 : w >= 360 ? w - 360 : w
              , C = k * Math.PI / 180
              , x = y * o.nbb
              , $ = 100 * Math.pow(x / o.aw, o.c * o.z)
              , R = 4 / o.c * Math.sqrt($ / 100) * (o.aw + 4) * o.fLRoot
              , I = k < 20.14 ? k + 360 : k
              , S = 5e4 / 13 * (1 / 4 * (Math.cos(I * Math.PI / 180 + 2) + 3.8)) * o.nc * o.ncb * Math.sqrt(v * v + g * g) / (b + .305)
              , E = Math.pow(S, .9) * Math.pow(1.64 - Math.pow(.29, o.n), .73)
              , T = E * Math.sqrt($ / 100)
              , A = T * o.fLRoot
              , D = 50 * Math.sqrt(E * o.c / (o.aw + 4))
              , M = (1 + 100 * .007) * $ / (1 + .007 * $)
              , P = Math.log(1 + .0228 * A) / .0228
              , L = P * Math.cos(C)
              , _ = P * Math.sin(C);
            return new rs(k,T,$,R,A,D,M,L,_)
        }
        xyzInViewingConditions(e) {
            const t = 0 === this.chroma || 0 === this.j ? 0 : this.chroma / Math.sqrt(this.j / 100)
              , i = Math.pow(t / Math.pow(1.64 - Math.pow(.29, e.n), .73), 1 / .9)
              , o = this.hue * Math.PI / 180
              , r = .25 * (Math.cos(o + 2) + 3.8)
              , n = e.aw * Math.pow(this.j / 100, 1 / e.c / e.z)
              , s = r * (5e4 / 13) * e.nc * e.ncb
              , a = n / e.nbb
              , l = Math.sin(o)
              , c = Math.cos(o)
              , d = 23 * (a + .305) * i / (23 * s + 11 * i * c + 108 * i * l)
              , h = d * c
              , u = d * l
              , p = (460 * a + 451 * h + 288 * u) / 1403
              , m = (460 * a - 891 * h - 261 * u) / 1403
              , f = (460 * a - 220 * h - 6300 * u) / 1403
              , v = Math.max(0, 27.13 * Math.abs(p) / (400 - Math.abs(p)))
              , g = Ln(p) * (100 / e.fl) * Math.pow(v, 1 / .42)
              , b = Math.max(0, 27.13 * Math.abs(m) / (400 - Math.abs(m)))
              , y = Ln(m) * (100 / e.fl) * Math.pow(b, 1 / .42)
              , w = Math.max(0, 27.13 * Math.abs(f) / (400 - Math.abs(f)))
              , k = Ln(f) * (100 / e.fl) * Math.pow(w, 1 / .42)
              , C = g / e.rgbD[0]
              , x = y / e.rgbD[1]
              , $ = k / e.rgbD[2];
            return [1.86206786 * C - 1.01125463 * x + .14918677 * $, .38752654 * C + .62144744 * x - .00897398 * $, -.0158415 * C - .03412294 * x + 1.04996444 * $]
        }
    }
    class ns {
        static sanitizeRadians(e) {
            return (e + 8 * Math.PI) % (2 * Math.PI)
        }
        static trueDelinearized(e) {
            const t = e / 100;
            let i = 0;
            return i = t <= .0031308 ? 12.92 * t : 1.055 * Math.pow(t, 1 / 2.4) - .055,
            255 * i
        }
        static chromaticAdaptation(e) {
            const t = Math.pow(Math.abs(e), .42);
            return 400 * Ln(e) * t / (t + 27.13)
        }
        static hueOf(e) {
            const t = Fn(e, ns.SCALED_DISCOUNT_FROM_LINRGB)
              , i = ns.chromaticAdaptation(t[0])
              , o = ns.chromaticAdaptation(t[1])
              , r = ns.chromaticAdaptation(t[2])
              , n = (11 * i + -12 * o + r) / 11
              , s = (i + o - 2 * r) / 9;
            return Math.atan2(s, n)
        }
        static areInCyclicOrder(e, t, i) {
            return ns.sanitizeRadians(t - e) < ns.sanitizeRadians(i - e)
        }
        static intercept(e, t, i) {
            return (t - e) / (i - e)
        }
        static lerpPoint(e, t, i) {
            return [e[0] + (i[0] - e[0]) * t, e[1] + (i[1] - e[1]) * t, e[2] + (i[2] - e[2]) * t]
        }
        static setCoordinate(e, t, i, o) {
            const r = ns.intercept(e[o], t, i[o]);
            return ns.lerpPoint(e, r, i)
        }
        static isBounded(e) {
            return 0 <= e && e <= 100
        }
        static nthVertex(e, t) {
            const i = ns.Y_FROM_LINRGB[0]
              , o = ns.Y_FROM_LINRGB[1]
              , r = ns.Y_FROM_LINRGB[2]
              , n = t % 4 <= 1 ? 0 : 100
              , s = t % 2 == 0 ? 0 : 100;
            if (t < 4) {
                const t = n
                  , a = s
                  , l = (e - t * o - a * r) / i;
                return ns.isBounded(l) ? [l, t, a] : [-1, -1, -1]
            }
            if (t < 8) {
                const t = n
                  , a = s
                  , l = (e - a * i - t * r) / o;
                return ns.isBounded(l) ? [a, l, t] : [-1, -1, -1]
            }
            {
                const t = n
                  , a = s
                  , l = (e - t * i - a * o) / r;
                return ns.isBounded(l) ? [t, a, l] : [-1, -1, -1]
            }
        }
        static bisectToSegment(e, t) {
            let i = [-1, -1, -1]
              , o = i
              , r = 0
              , n = 0
              , s = !1
              , a = !0;
            for (let l = 0; l < 12; l++) {
                const c = ns.nthVertex(e, l);
                if (c[0] < 0)
                    continue;
                const d = ns.hueOf(c);
                s ? (a || ns.areInCyclicOrder(r, d, n)) && (a = !1,
                ns.areInCyclicOrder(r, t, d) ? (o = c,
                n = d) : (i = c,
                r = d)) : (i = c,
                o = c,
                r = d,
                n = d,
                s = !0)
            }
            return [i, o]
        }
        static midpoint(e, t) {
            return [(e[0] + t[0]) / 2, (e[1] + t[1]) / 2, (e[2] + t[2]) / 2]
        }
        static criticalPlaneBelow(e) {
            return Math.floor(e - .5)
        }
        static criticalPlaneAbove(e) {
            return Math.ceil(e - .5)
        }
        static bisectToLimit(e, t) {
            const i = ns.bisectToSegment(e, t);
            let o = i[0]
              , r = ns.hueOf(o)
              , n = i[1];
            for (let e = 0; e < 3; e++)
                if (o[e] !== n[e]) {
                    let i = -1
                      , s = 255;
                    o[e] < n[e] ? (i = ns.criticalPlaneBelow(ns.trueDelinearized(o[e])),
                    s = ns.criticalPlaneAbove(ns.trueDelinearized(n[e]))) : (i = ns.criticalPlaneAbove(ns.trueDelinearized(o[e])),
                    s = ns.criticalPlaneBelow(ns.trueDelinearized(n[e])));
                    for (let a = 0; a < 8 && !(Math.abs(s - i) <= 1); a++) {
                        const a = Math.floor((i + s) / 2)
                          , l = ns.CRITICAL_PLANES[a]
                          , c = ns.setCoordinate(o, l, n, e)
                          , d = ns.hueOf(c);
                        ns.areInCyclicOrder(r, t, d) ? (n = c,
                        s = a) : (o = c,
                        r = d,
                        i = a)
                    }
                }
            return ns.midpoint(o, n)
        }
        static inverseChromaticAdaptation(e) {
            const t = Math.abs(e)
              , i = Math.max(0, 27.13 * t / (400 - t));
            return Ln(e) * Math.pow(i, 1 / .42)
        }
        static findResultByJ(e, t, i) {
            let o = 11 * Math.sqrt(i);
            const r = os.DEFAULT
              , n = 1 / Math.pow(1.64 - Math.pow(.29, r.n), .73)
              , s = .25 * (Math.cos(e + 2) + 3.8) * (5e4 / 13) * r.nc * r.ncb
              , a = Math.sin(e)
              , l = Math.cos(e);
            for (let e = 0; e < 5; e++) {
                const c = o / 100
                  , d = 0 === t || 0 === o ? 0 : t / Math.sqrt(c)
                  , h = Math.pow(d * n, 1 / .9)
                  , u = r.aw * Math.pow(c, 1 / r.c / r.z) / r.nbb
                  , p = 23 * (u + .305) * h / (23 * s + 11 * h * l + 108 * h * a)
                  , m = p * l
                  , f = p * a
                  , v = (460 * u + 451 * m + 288 * f) / 1403
                  , g = (460 * u - 891 * m - 261 * f) / 1403
                  , b = (460 * u - 220 * m - 6300 * f) / 1403
                  , y = Fn([ns.inverseChromaticAdaptation(v), ns.inverseChromaticAdaptation(g), ns.inverseChromaticAdaptation(b)], ns.LINRGB_FROM_SCALED_DISCOUNT);
                if (y[0] < 0 || y[1] < 0 || y[2] < 0)
                    return 0;
                const w = ns.Y_FROM_LINRGB[0]
                  , k = ns.Y_FROM_LINRGB[1]
                  , C = ns.Y_FROM_LINRGB[2]
                  , x = w * y[0] + k * y[1] + C * y[2];
                if (x <= 0)
                    return 0;
                if (4 === e || Math.abs(x - i) < .002)
                    return y[0] > 100.01 || y[1] > 100.01 || y[2] > 100.01 ? 0 : qn(y);
                o -= (x - i) * o / (2 * x)
            }
            return 0
        }
        static solveToInt(e, t, i) {
            if (t < 1e-4 || i < 1e-4 || i > 99.9999)
                return function(e) {
                    const t = es(Jn(e));
                    return Kn(t, t, t)
                }(i);
            const o = (e = zn(e)) / 180 * Math.PI
              , r = Jn(i)
              , n = ns.findResultByJ(o, t, r);
            if (0 !== n)
                return n;
            return qn(ns.bisectToLimit(r, o))
        }
        static solveToCam(e, t, i) {
            return rs.fromInt(ns.solveToInt(e, t, i))
        }
    }
    ns.SCALED_DISCOUNT_FROM_LINRGB = [[.001200833568784504, .002389694492170889, .0002795742885861124], [.0005891086651375999, .0029785502573438758, .0003270666104008398], [.00010146692491640572, .0005364214359186694, .0032979401770712076]],
    ns.LINRGB_FROM_SCALED_DISCOUNT = [[1373.2198709594231, -1100.4251190754821, -7.278681089101213], [-271.815969077903, 559.6580465940733, -32.46047482791194], [1.9622899599665666, -57.173814538844006, 308.7233197812385]],
    ns.Y_FROM_LINRGB = [.2126, .7152, .0722],
    ns.CRITICAL_PLANES = [.015176349177441876, .045529047532325624, .07588174588720938, .10623444424209313, .13658714259697685, .16693984095186062, .19729253930674434, .2276452376616281, .2579979360165119, .28835063437139563, .3188300904430532, .350925934958123, .3848314933096426, .42057480301049466, .458183274052838, .4976837250274023, .5391024159806381, .5824650784040898, .6277969426914107, .6751227633498623, .7244668422128921, .775853049866786, .829304845476233, .8848452951698498, .942497089126609, 1.0022825574869039, 1.0642236851973577, 1.1283421258858297, 1.1946592148522128, 1.2631959812511864, 1.3339731595349034, 1.407011200216447, 1.4823302800086415, 1.5599503113873272, 1.6398909516233677, 1.7221716113234105, 1.8068114625156377, 1.8938294463134073, 1.9832442801866852, 2.075074464868551, 2.1693382909216234, 2.2660538449872063, 2.36523901573795, 2.4669114995532007, 2.5710888059345764, 2.6777882626779785, 2.7870270208169257, 2.898822059350997, 3.0131901897720907, 3.1301480604002863, 3.2497121605402226, 3.3718988244681087, 3.4967242352587946, 3.624204428461639, 3.754355295633311, 3.887192587735158, 4.022731918402185, 4.160988767090289, 4.301978482107941, 4.445716283538092, 4.592217266055746, 4.741496401646282, 4.893568542229298, 5.048448422192488, 5.20615066083972, 5.3666897647573375, 5.5300801301023865, 5.696336044816294, 5.865471690767354, 6.037501145825082, 6.212438385869475, 6.390297286737924, 6.571091626112461, 6.7548350853498045, 6.941541251256611, 7.131223617812143, 7.323895587840543, 7.5195704746346665, 7.7182615035334345, 7.919981813454504, 8.124744458384042, 8.332562408825165, 8.543448553206703, 8.757415699253682, 8.974476575321063, 9.194643831691977, 9.417930041841839, 9.644347703669503, 9.873909240696694, 10.106627003236781, 10.342513269534024, 10.58158024687427, 10.8238400726681, 11.069304815507364, 11.317986476196008, 11.569896988756009, 11.825048221409341, 12.083451977536606, 12.345119996613247, 12.610063955123938, 12.878295467455942, 13.149826086772048, 13.42466730586372, 13.702830557985108, 13.984327217668513, 14.269168601521828, 14.55736596900856, 14.848930523210871, 15.143873411576273, 15.44220572664832, 15.743938506781891, 16.04908273684337, 16.35764934889634, 16.66964922287304, 16.985093187232053, 17.30399201960269, 17.62635644741625, 17.95219714852476, 18.281524751807332, 18.614349837764564, 18.95068293910138, 19.290534541298456, 19.633915083172692, 19.98083495742689, 20.331304511189067, 20.685334046541502, 21.042933821039977, 21.404114048223256, 21.76888489811322, 22.137256497705877, 22.50923893145328, 22.884842241736916, 23.264076429332462, 23.6469514538663, 24.033477234264016, 24.42366364919083, 24.817520537484558, 25.21505769858089, 25.61628489293138, 26.021211842414342, 26.429848230738664, 26.842203703840827, 27.258287870275353, 27.678110301598522, 28.10168053274597, 28.529008062403893, 28.96010235337422, 29.39497283293396, 29.83362889318845, 30.276079891419332, 30.722335150426627, 31.172403958865512, 31.62629557157785, 32.08401920991837, 32.54558406207592, 33.010999283389665, 33.4802739966603, 33.953417292456834, 34.430438229418264, 34.911345834551085, 35.39614910352207, 35.88485700094671, 36.37747846067349, 36.87402238606382, 37.37449765026789, 37.87891309649659, 38.38727753828926, 38.89959975977785, 39.41588851594697, 39.93615253289054, 40.460400508064545, 40.98864111053629, 41.520882981230194, 42.05713473317016, 42.597404951718396, 43.141702194811224, 43.6900349931913, 44.24241185063697, 44.798841244188324, 45.35933162437017, 45.92389141541209, 46.49252901546552, 47.065252796817916, 47.64207110610409, 48.22299226451468, 48.808024568002054, 49.3971762874833, 49.9904556690408, 50.587870934119984, 51.189430279724725, 51.79514187861014, 52.40501387947288, 53.0190544071392, 53.637271562750364, 54.259673423945976, 54.88626804504493, 55.517063457223934, 56.15206766869424, 56.79128866487574, 57.43473440856916, 58.08241284012621, 58.734331877617365, 59.39049941699807, 60.05092333227251, 60.715611475655585, 61.38457167773311, 62.057811747619894, 62.7353394731159, 63.417162620860914, 64.10328893648692, 64.79372614476921, 65.48848194977529, 66.18756403501224, 66.89098006357258, 67.59873767827808, 68.31084450182222, 69.02730813691093, 69.74813616640164, 70.47333615344107, 71.20291564160104, 71.93688215501312, 72.67524319850172, 73.41800625771542, 74.16517879925733, 74.9167682708136, 75.67278210128072, 76.43322770089146, 77.1981124613393, 77.96744375590167, 78.74122893956174, 79.51947534912904, 80.30219030335869, 81.08938110306934, 81.88105503125999, 82.67721935322541, 83.4778813166706, 84.28304815182372, 85.09272707154808, 85.90692527145302, 86.72564993000343, 87.54890820862819, 88.3767072518277, 89.2090541872801, 90.04595612594655, 90.88742016217518, 91.73345337380438, 92.58406282226491, 93.43925555268066, 94.29903859396902, 95.16341895893969, 96.03240364439274, 96.9059996312159, 97.78421388448044, 98.6670533535366, 99.55452497210776];
    class ss {
        static from(e, t, i) {
            return new ss(ns.solveToInt(e, t, i))
        }
        static fromInt(e) {
            return new ss(e)
        }
        toInt() {
            return this.argb
        }
        get hue() {
            return this.internalHue
        }
        set hue(e) {
            this.setInternalState(ns.solveToInt(e, this.internalChroma, this.internalTone))
        }
        get chroma() {
            return this.internalChroma
        }
        set chroma(e) {
            this.setInternalState(ns.solveToInt(this.internalHue, e, this.internalTone))
        }
        get tone() {
            return this.internalTone
        }
        set tone(e) {
            this.setInternalState(ns.solveToInt(this.internalHue, this.internalChroma, e))
        }
        constructor(e) {
            this.argb = e;
            const t = rs.fromInt(e);
            this.internalHue = t.hue,
            this.internalChroma = t.chroma,
            this.internalTone = Xn(e),
            this.argb = e
        }
        setInternalState(e) {
            const t = rs.fromInt(e);
            this.internalHue = t.hue,
            this.internalChroma = t.chroma,
            this.internalTone = Xn(e),
            this.argb = e
        }
        inViewingConditions(e) {
            const t = rs.fromInt(this.toInt()).xyzInViewingConditions(e)
              , i = rs.fromXyzInViewingConditions(t[0], t[1], t[2], os.make());
            return ss.from(i.hue, i.chroma, Zn(t[1]))
        }
    }
    class as {
        static harmonize(e, t) {
            const i = ss.fromInt(e)
              , o = ss.fromInt(t)
              , r = Nn(i.hue, o.hue)
              , n = Math.min(.5 * r, 15)
              , s = zn(i.hue + n * (a = i.hue,
            zn(o.hue - a) <= 180 ? 1 : -1));
            var a;
            return ss.from(s, i.chroma, i.tone).toInt()
        }
        static hctHue(e, t, i) {
            const o = as.cam16Ucs(e, t, i)
              , r = rs.fromInt(o)
              , n = rs.fromInt(e);
            return ss.from(r.hue, n.chroma, Xn(e)).toInt()
        }
        static cam16Ucs(e, t, i) {
            const o = rs.fromInt(e)
              , r = rs.fromInt(t)
              , n = o.jstar
              , s = o.astar
              , a = o.bstar
              , l = n + (r.jstar - n) * i
              , c = s + (r.astar - s) * i
              , d = a + (r.bstar - a) * i;
            return rs.fromUcs(l, c, d).toInt()
        }
    }
    class ls {
        static ratioOfTones(e, t) {
            return e = Bn(0, 100, e),
            t = Bn(0, 100, t),
            ls.ratioOfYs(Jn(e), Jn(t))
        }
        static ratioOfYs(e, t) {
            const i = e > t ? e : t;
            return (i + 5) / ((i === t ? e : t) + 5)
        }
        static lighter(e, t) {
            if (e < 0 || e > 100)
                return -1;
            const i = Jn(e)
              , o = t * (i + 5) - 5
              , r = ls.ratioOfYs(o, i)
              , n = Math.abs(r - t);
            if (r < t && n > .04)
                return -1;
            const s = Zn(o) + .4;
            return s < 0 || s > 100 ? -1 : s
        }
        static darker(e, t) {
            if (e < 0 || e > 100)
                return -1;
            const i = Jn(e)
              , o = (i + 5) / t - 5
              , r = ls.ratioOfYs(i, o)
              , n = Math.abs(r - t);
            if (r < t && n > .04)
                return -1;
            const s = Zn(o) - .4;
            return s < 0 || s > 100 ? -1 : s
        }
        static lighterUnsafe(e, t) {
            const i = ls.lighter(e, t);
            return i < 0 ? 100 : i
        }
        static darkerUnsafe(e, t) {
            const i = ls.darker(e, t);
            return i < 0 ? 0 : i
        }
    }
    class cs {
        static isDisliked(e) {
            const t = Math.round(e.hue) >= 90 && Math.round(e.hue) <= 111
              , i = Math.round(e.chroma) > 16
              , o = Math.round(e.tone) < 65;
            return t && i && o
        }
        static fixIfDisliked(e) {
            return cs.isDisliked(e) ? ss.from(e.hue, e.chroma, 70) : e
        }
    }
    class ds {
        static fromPalette(e) {
            return new ds(e.name ?? "",e.palette,e.tone,e.isBackground ?? !1,e.background,e.secondBackground,e.contrastCurve,e.toneDeltaPair)
        }
        constructor(e, t, i, o, r, n, s, a) {
            if (this.name = e,
            this.palette = t,
            this.tone = i,
            this.isBackground = o,
            this.background = r,
            this.secondBackground = n,
            this.contrastCurve = s,
            this.toneDeltaPair = a,
            this.hctCache = new Map,
            !r && n)
                throw new Error(`Color ${e} has secondBackgrounddefined, but background is not defined.`);
            if (!r && s)
                throw new Error(`Color ${e} has contrastCurvedefined, but background is not defined.`);
            if (r && !s)
                throw new Error(`Color ${e} has backgrounddefined, but contrastCurve is not defined.`)
        }
        getArgb(e) {
            return this.getHct(e).toInt()
        }
        getHct(e) {
            const t = this.hctCache.get(e);
            if (null != t)
                return t;
            const i = this.getTone(e)
              , o = this.palette(e).getHct(i);
            return this.hctCache.size > 4 && this.hctCache.clear(),
            this.hctCache.set(e, o),
            o
        }
        getTone(e) {
            const t = e.contrastLevel < 0;
            if (this.toneDeltaPair) {
                const i = this.toneDeltaPair(e)
                  , o = i.roleA
                  , r = i.roleB
                  , n = i.delta
                  , s = i.polarity
                  , a = i.stayTogether
                  , l = this.background(e).getTone(e)
                  , c = "nearer" === s || "lighter" === s && !e.isDark || "darker" === s && e.isDark
                  , d = c ? o : r
                  , h = c ? r : o
                  , u = this.name === d.name
                  , p = e.isDark ? 1 : -1
                  , m = d.contrastCurve.get(e.contrastLevel)
                  , f = h.contrastCurve.get(e.contrastLevel)
                  , v = d.tone(e);
                let g = ls.ratioOfTones(l, v) >= m ? v : ds.foregroundTone(l, m);
                const b = h.tone(e);
                let y = ls.ratioOfTones(l, b) >= f ? b : ds.foregroundTone(l, f);
                return t && (g = ds.foregroundTone(l, m),
                y = ds.foregroundTone(l, f)),
                (y - g) * p >= n || (y = Bn(0, 100, g + n * p),
                (y - g) * p >= n || (g = Bn(0, 100, y - n * p))),
                50 <= g && g < 60 ? p > 0 ? (g = 60,
                y = Math.max(y, g + n * p)) : (g = 49,
                y = Math.min(y, g + n * p)) : 50 <= y && y < 60 && (a ? p > 0 ? (g = 60,
                y = Math.max(y, g + n * p)) : (g = 49,
                y = Math.min(y, g + n * p)) : y = p > 0 ? 60 : 49),
                u ? g : y
            }
            {
                let i = this.tone(e);
                if (null == this.background)
                    return i;
                const o = this.background(e).getTone(e)
                  , r = this.contrastCurve.get(e.contrastLevel);
                if (ls.ratioOfTones(o, i) >= r || (i = ds.foregroundTone(o, r)),
                t && (i = ds.foregroundTone(o, r)),
                this.isBackground && 50 <= i && i < 60 && (i = ls.ratioOfTones(49, o) >= r ? 49 : 60),
                this.secondBackground) {
                    const [t,o] = [this.background, this.secondBackground]
                      , [n,s] = [t(e).getTone(e), o(e).getTone(e)]
                      , [a,l] = [Math.max(n, s), Math.min(n, s)];
                    if (ls.ratioOfTones(a, i) >= r && ls.ratioOfTones(l, i) >= r)
                        return i;
                    const c = ls.lighter(a, r)
                      , d = ls.darker(l, r)
                      , h = [];
                    -1 !== c && h.push(c),
                    -1 !== d && h.push(d);
                    return ds.tonePrefersLightForeground(n) || ds.tonePrefersLightForeground(s) ? c < 0 ? 100 : c : 1 === h.length ? h[0] : d < 0 ? 0 : d
                }
                return i
            }
        }
        static foregroundTone(e, t) {
            const i = ls.lighterUnsafe(e, t)
              , o = ls.darkerUnsafe(e, t)
              , r = ls.ratioOfTones(i, e)
              , n = ls.ratioOfTones(o, e);
            if (ds.tonePrefersLightForeground(e)) {
                const e = Math.abs(r - n) < .1 && r < t && n < t;
                return r >= t || r >= n || e ? i : o
            }
            return n >= t || n >= r ? o : i
        }
        static tonePrefersLightForeground(e) {
            return Math.round(e) < 60
        }
        static toneAllowsLightForeground(e) {
            return Math.round(e) <= 49
        }
        static enableLightForeground(e) {
            return ds.tonePrefersLightForeground(e) && !ds.toneAllowsLightForeground(e) ? 49 : e
        }
    }
    class hs {
        static fromInt(e) {
            const t = ss.fromInt(e);
            return hs.fromHct(t)
        }
        static fromHct(e) {
            return new hs(e.hue,e.chroma,e)
        }
        static fromHueAndChroma(e, t) {
            const i = new us(e,t).create();
            return new hs(e,t,i)
        }
        constructor(e, t, i) {
            this.hue = e,
            this.chroma = t,
            this.keyColor = i,
            this.cache = new Map
        }
        tone(e) {
            let t = this.cache.get(e);
            return void 0 === t && (t = ss.from(this.hue, this.chroma, e).toInt(),
            this.cache.set(e, t)),
            t
        }
        getHct(e) {
            return ss.fromInt(this.tone(e))
        }
    }
    class us {
        constructor(e, t) {
            this.hue = e,
            this.requestedChroma = t,
            this.chromaCache = new Map,
            this.maxChromaValue = 200
        }
        create() {
            let e = 0
              , t = 100;
            for (; e < t; ) {
                const i = Math.floor((e + t) / 2)
                  , o = this.maxChroma(i) < this.maxChroma(i + 1);
                if (this.maxChroma(i) >= this.requestedChroma - .01)
                    if (Math.abs(e - 50) < Math.abs(t - 50))
                        t = i;
                    else {
                        if (e === i)
                            return ss.from(this.hue, this.requestedChroma, e);
                        e = i
                    }
                else
                    o ? e = i + 1 : t = i
            }
            return ss.from(this.hue, this.requestedChroma, e)
        }
        maxChroma(e) {
            if (this.chromaCache.has(e))
                return this.chromaCache.get(e);
            const t = ss.from(this.hue, this.maxChromaValue, e).chroma;
            return this.chromaCache.set(e, t),
            t
        }
    }
    class ps {
        constructor(e, t, i, o) {
            this.low = e,
            this.normal = t,
            this.medium = i,
            this.high = o
        }
        get(e) {
            return e <= -1 ? this.low : e < 0 ? _n(this.low, this.normal, (e - -1) / 1) : e < .5 ? _n(this.normal, this.medium, (e - 0) / .5) : e < 1 ? _n(this.medium, this.high, (e - .5) / .5) : this.high
        }
    }
    class ms {
        constructor(e, t, i, o, r) {
            this.roleA = e,
            this.roleB = t,
            this.delta = i,
            this.polarity = o,
            this.stayTogether = r
        }
    }
    var fs;
    function vs(e) {
        return e.variant === fs.FIDELITY || e.variant === fs.CONTENT
    }
    function gs(e) {
        return e.variant === fs.MONOCHROME
    }
    !function(e) {
        e[e.MONOCHROME = 0] = "MONOCHROME",
        e[e.NEUTRAL = 1] = "NEUTRAL",
        e[e.TONAL_SPOT = 2] = "TONAL_SPOT",
        e[e.VIBRANT = 3] = "VIBRANT",
        e[e.EXPRESSIVE = 4] = "EXPRESSIVE",
        e[e.FIDELITY = 5] = "FIDELITY",
        e[e.CONTENT = 6] = "CONTENT",
        e[e.RAINBOW = 7] = "RAINBOW",
        e[e.FRUIT_SALAD = 8] = "FRUIT_SALAD"
    }(fs || (fs = {}));
    class bs {
        static highestSurface(e) {
            return e.isDark ? bs.surfaceBright : bs.surfaceDim
        }
    }
    bs.contentAccentToneDelta = 15,
    bs.primaryPaletteKeyColor = ds.fromPalette({
        name: "primary_palette_key_color",
        palette: e=>e.primaryPalette,
        tone: e=>e.primaryPalette.keyColor.tone
    }),
    bs.secondaryPaletteKeyColor = ds.fromPalette({
        name: "secondary_palette_key_color",
        palette: e=>e.secondaryPalette,
        tone: e=>e.secondaryPalette.keyColor.tone
    }),
    bs.tertiaryPaletteKeyColor = ds.fromPalette({
        name: "tertiary_palette_key_color",
        palette: e=>e.tertiaryPalette,
        tone: e=>e.tertiaryPalette.keyColor.tone
    }),
    bs.neutralPaletteKeyColor = ds.fromPalette({
        name: "neutral_palette_key_color",
        palette: e=>e.neutralPalette,
        tone: e=>e.neutralPalette.keyColor.tone
    }),
    bs.neutralVariantPaletteKeyColor = ds.fromPalette({
        name: "neutral_variant_palette_key_color",
        palette: e=>e.neutralVariantPalette,
        tone: e=>e.neutralVariantPalette.keyColor.tone
    }),
    bs.background = ds.fromPalette({
        name: "background",
        palette: e=>e.neutralPalette,
        tone: e=>e.isDark ? 6 : 98,
        isBackground: !0
    }),
    bs.onBackground = ds.fromPalette({
        name: "on_background",
        palette: e=>e.neutralPalette,
        tone: e=>e.isDark ? 90 : 10,
        background: e=>bs.background,
        contrastCurve: new ps(3,3,4.5,7)
    }),
    bs.surface = ds.fromPalette({
        name: "surface",
        palette: e=>e.neutralPalette,
        tone: e=>e.isDark ? 6 : 98,
        isBackground: !0
    }),
    bs.surfaceDim = ds.fromPalette({
        name: "surface_dim",
        palette: e=>e.neutralPalette,
        tone: e=>e.isDark ? 6 : new ps(87,87,80,75).get(e.contrastLevel),
        isBackground: !0
    }),
    bs.surfaceBright = ds.fromPalette({
        name: "surface_bright",
        palette: e=>e.neutralPalette,
        tone: e=>e.isDark ? new ps(24,24,29,34).get(e.contrastLevel) : 98,
        isBackground: !0
    }),
    bs.surfacecontainerLowest = ds.fromPalette({
        name: "surface_container_lowest",
        palette: e=>e.neutralPalette,
        tone: e=>e.isDark ? new ps(4,4,2,0).get(e.contrastLevel) : 100,
        isBackground: !0
    }),
    bs.surfacecontainerLow = ds.fromPalette({
        name: "surface_container_low",
        palette: e=>e.neutralPalette,
        tone: e=>e.isDark ? new ps(10,10,11,12).get(e.contrastLevel) : new ps(96,96,96,95).get(e.contrastLevel),
        isBackground: !0
    }),
    bs.surfacecontainer = ds.fromPalette({
        name: "surface_container",
        palette: e=>e.neutralPalette,
        tone: e=>e.isDark ? new ps(12,12,16,20).get(e.contrastLevel) : new ps(94,94,92,90).get(e.contrastLevel),
        isBackground: !0
    }),
    bs.surfacecontainerHigh = ds.fromPalette({
        name: "surface_container_high",
        palette: e=>e.neutralPalette,
        tone: e=>e.isDark ? new ps(17,17,21,25).get(e.contrastLevel) : new ps(92,92,88,85).get(e.contrastLevel),
        isBackground: !0
    }),
    bs.surfacecontainerHighest = ds.fromPalette({
        name: "surface_container_highest",
        palette: e=>e.neutralPalette,
        tone: e=>e.isDark ? new ps(22,22,26,30).get(e.contrastLevel) : new ps(90,90,84,80).get(e.contrastLevel),
        isBackground: !0
    }),
    bs.onSurface = ds.fromPalette({
        name: "on_surface",
        palette: e=>e.neutralPalette,
        tone: e=>e.isDark ? 90 : 10,
        background: e=>bs.highestSurface(e),
        contrastCurve: new ps(4.5,7,11,21)
    }),
    bs.surfaceVariant = ds.fromPalette({
        name: "surface_variant",
        palette: e=>e.neutralVariantPalette,
        tone: e=>e.isDark ? 30 : 90,
        isBackground: !0
    }),
    bs.onSurfaceVariant = ds.fromPalette({
        name: "on_surface_variant",
        palette: e=>e.neutralVariantPalette,
        tone: e=>e.isDark ? 80 : 30,
        background: e=>bs.highestSurface(e),
        contrastCurve: new ps(3,4.5,7,11)
    }),
    bs.inverseSurface = ds.fromPalette({
        name: "inverse_surface",
        palette: e=>e.neutralPalette,
        tone: e=>e.isDark ? 90 : 20
    }),
    bs.inverseOnSurface = ds.fromPalette({
        name: "inverse_on_surface",
        palette: e=>e.neutralPalette,
        tone: e=>e.isDark ? 20 : 95,
        background: e=>bs.inverseSurface,
        contrastCurve: new ps(4.5,7,11,21)
    }),
    bs.outline = ds.fromPalette({
        name: "outline",
        palette: e=>e.neutralVariantPalette,
        tone: e=>e.isDark ? 60 : 50,
        background: e=>bs.highestSurface(e),
        contrastCurve: new ps(1.5,3,4.5,7)
    }),
    bs.outlineVariant = ds.fromPalette({
        name: "outline_variant",
        palette: e=>e.neutralVariantPalette,
        tone: e=>e.isDark ? 30 : 80,
        background: e=>bs.highestSurface(e),
        contrastCurve: new ps(1,1,3,4.5)
    }),
    bs.shadow = ds.fromPalette({
        name: "shadow",
        palette: e=>e.neutralPalette,
        tone: e=>0
    }),
    bs.scrim = ds.fromPalette({
        name: "scrim",
        palette: e=>e.neutralPalette,
        tone: e=>0
    }),
    bs.surfaceTint = ds.fromPalette({
        name: "surface_tint",
        palette: e=>e.primaryPalette,
        tone: e=>e.isDark ? 80 : 40,
        isBackground: !0
    }),
    bs.primary = ds.fromPalette({
        name: "primary",
        palette: e=>e.primaryPalette,
        tone: e=>gs(e) ? e.isDark ? 100 : 0 : e.isDark ? 80 : 40,
        isBackground: !0,
        background: e=>bs.highestSurface(e),
        contrastCurve: new ps(3,4.5,7,7),
        toneDeltaPair: e=>new ms(bs.primarycontainer,bs.primary,10,"nearer",!1)
    }),
    bs.onPrimary = ds.fromPalette({
        name: "on_primary",
        palette: e=>e.primaryPalette,
        tone: e=>gs(e) ? e.isDark ? 10 : 90 : e.isDark ? 20 : 100,
        background: e=>bs.primary,
        contrastCurve: new ps(4.5,7,11,21)
    }),
    bs.primarycontainer = ds.fromPalette({
        name: "primary_container",
        palette: e=>e.primaryPalette,
        tone: e=>vs(e) ? e.sourceColorHct.tone : gs(e) ? e.isDark ? 85 : 25 : e.isDark ? 30 : 90,
        isBackground: !0,
        background: e=>bs.highestSurface(e),
        contrastCurve: new ps(1,1,3,4.5),
        toneDeltaPair: e=>new ms(bs.primarycontainer,bs.primary,10,"nearer",!1)
    }),
    bs.onPrimarycontainer = ds.fromPalette({
        name: "on_primary_container",
        palette: e=>e.primaryPalette,
        tone: e=>vs(e) ? ds.foregroundTone(bs.primarycontainer.tone(e), 4.5) : gs(e) ? e.isDark ? 0 : 100 : e.isDark ? 90 : 30,
        background: e=>bs.primarycontainer,
        contrastCurve: new ps(3,4.5,7,11)
    }),
    bs.inversePrimary = ds.fromPalette({
        name: "inverse_primary",
        palette: e=>e.primaryPalette,
        tone: e=>e.isDark ? 40 : 80,
        background: e=>bs.inverseSurface,
        contrastCurve: new ps(3,4.5,7,7)
    }),
    bs.secondary = ds.fromPalette({
        name: "secondary",
        palette: e=>e.secondaryPalette,
        tone: e=>e.isDark ? 80 : 40,
        isBackground: !0,
        background: e=>bs.highestSurface(e),
        contrastCurve: new ps(3,4.5,7,7),
        toneDeltaPair: e=>new ms(bs.secondarycontainer,bs.secondary,10,"nearer",!1)
    }),
    bs.onSecondary = ds.fromPalette({
        name: "on_secondary",
        palette: e=>e.secondaryPalette,
        tone: e=>gs(e) ? e.isDark ? 10 : 100 : e.isDark ? 20 : 100,
        background: e=>bs.secondary,
        contrastCurve: new ps(4.5,7,11,21)
    }),
    bs.secondarycontainer = ds.fromPalette({
        name: "secondary_container",
        palette: e=>e.secondaryPalette,
        tone: e=>{
            const t = e.isDark ? 30 : 90;
            return gs(e) ? e.isDark ? 30 : 85 : vs(e) ? function(e, t, i, o) {
                let r = i
                  , n = ss.from(e, t, i);
                if (n.chroma < t) {
                    let i = n.chroma;
                    for (; n.chroma < t; ) {
                        r += o ? -1 : 1;
                        const s = ss.from(e, t, r);
                        if (i > s.chroma)
                            break;
                        if (Math.abs(s.chroma - t) < .4)
                            break;
                        Math.abs(s.chroma - t) < Math.abs(n.chroma - t) && (n = s),
                        i = Math.max(i, s.chroma)
                    }
                }
                return r
            }(e.secondaryPalette.hue, e.secondaryPalette.chroma, t, !e.isDark) : t
        }
        ,
        isBackground: !0,
        background: e=>bs.highestSurface(e),
        contrastCurve: new ps(1,1,3,4.5),
        toneDeltaPair: e=>new ms(bs.secondarycontainer,bs.secondary,10,"nearer",!1)
    }),
    bs.onSecondarycontainer = ds.fromPalette({
        name: "on_secondary_container",
        palette: e=>e.secondaryPalette,
        tone: e=>gs(e) ? e.isDark ? 90 : 10 : vs(e) ? ds.foregroundTone(bs.secondarycontainer.tone(e), 4.5) : e.isDark ? 90 : 30,
        background: e=>bs.secondarycontainer,
        contrastCurve: new ps(3,4.5,7,11)
    }),
    bs.tertiary = ds.fromPalette({
        name: "tertiary",
        palette: e=>e.tertiaryPalette,
        tone: e=>gs(e) ? e.isDark ? 90 : 25 : e.isDark ? 80 : 40,
        isBackground: !0,
        background: e=>bs.highestSurface(e),
        contrastCurve: new ps(3,4.5,7,7),
        toneDeltaPair: e=>new ms(bs.tertiarycontainer,bs.tertiary,10,"nearer",!1)
    }),
    bs.onTertiary = ds.fromPalette({
        name: "on_tertiary",
        palette: e=>e.tertiaryPalette,
        tone: e=>gs(e) ? e.isDark ? 10 : 90 : e.isDark ? 20 : 100,
        background: e=>bs.tertiary,
        contrastCurve: new ps(4.5,7,11,21)
    }),
    bs.tertiarycontainer = ds.fromPalette({
        name: "tertiary_container",
        palette: e=>e.tertiaryPalette,
        tone: e=>{
            if (gs(e))
                return e.isDark ? 60 : 49;
            if (!vs(e))
                return e.isDark ? 30 : 90;
            const t = e.tertiaryPalette.getHct(e.sourceColorHct.tone);
            return cs.fixIfDisliked(t).tone
        }
        ,
        isBackground: !0,
        background: e=>bs.highestSurface(e),
        contrastCurve: new ps(1,1,3,4.5),
        toneDeltaPair: e=>new ms(bs.tertiarycontainer,bs.tertiary,10,"nearer",!1)
    }),
    bs.onTertiarycontainer = ds.fromPalette({
        name: "on_tertiary_container",
        palette: e=>e.tertiaryPalette,
        tone: e=>gs(e) ? e.isDark ? 0 : 100 : vs(e) ? ds.foregroundTone(bs.tertiarycontainer.tone(e), 4.5) : e.isDark ? 90 : 30,
        background: e=>bs.tertiarycontainer,
        contrastCurve: new ps(3,4.5,7,11)
    }),
    bs.error = ds.fromPalette({
        name: "error",
        palette: e=>e.errorPalette,
        tone: e=>e.isDark ? 80 : 40,
        isBackground: !0,
        background: e=>bs.highestSurface(e),
        contrastCurve: new ps(3,4.5,7,7),
        toneDeltaPair: e=>new ms(bs.errorcontainer,bs.error,10,"nearer",!1)
    }),
    bs.onError = ds.fromPalette({
        name: "on_error",
        palette: e=>e.errorPalette,
        tone: e=>e.isDark ? 20 : 100,
        background: e=>bs.error,
        contrastCurve: new ps(4.5,7,11,21)
    }),
    bs.errorcontainer = ds.fromPalette({
        name: "error_container",
        palette: e=>e.errorPalette,
        tone: e=>e.isDark ? 30 : 90,
        isBackground: !0,
        background: e=>bs.highestSurface(e),
        contrastCurve: new ps(1,1,3,4.5),
        toneDeltaPair: e=>new ms(bs.errorcontainer,bs.error,10,"nearer",!1)
    }),
    bs.onErrorcontainer = ds.fromPalette({
        name: "on_error_container",
        palette: e=>e.errorPalette,
        tone: e=>gs(e) ? e.isDark ? 90 : 10 : e.isDark ? 90 : 30,
        background: e=>bs.errorcontainer,
        contrastCurve: new ps(3,4.5,7,11)
    }),
    bs.primaryFixed = ds.fromPalette({
        name: "primary_fixed",
        palette: e=>e.primaryPalette,
        tone: e=>gs(e) ? 40 : 90,
        isBackground: !0,
        background: e=>bs.highestSurface(e),
        contrastCurve: new ps(1,1,3,4.5),
        toneDeltaPair: e=>new ms(bs.primaryFixed,bs.primaryFixedDim,10,"lighter",!0)
    }),
    bs.primaryFixedDim = ds.fromPalette({
        name: "primary_fixed_dim",
        palette: e=>e.primaryPalette,
        tone: e=>gs(e) ? 30 : 80,
        isBackground: !0,
        background: e=>bs.highestSurface(e),
        contrastCurve: new ps(1,1,3,4.5),
        toneDeltaPair: e=>new ms(bs.primaryFixed,bs.primaryFixedDim,10,"lighter",!0)
    }),
    bs.onPrimaryFixed = ds.fromPalette({
        name: "on_primary_fixed",
        palette: e=>e.primaryPalette,
        tone: e=>gs(e) ? 100 : 10,
        background: e=>bs.primaryFixedDim,
        secondBackground: e=>bs.primaryFixed,
        contrastCurve: new ps(4.5,7,11,21)
    }),
    bs.onPrimaryFixedVariant = ds.fromPalette({
        name: "on_primary_fixed_variant",
        palette: e=>e.primaryPalette,
        tone: e=>gs(e) ? 90 : 30,
        background: e=>bs.primaryFixedDim,
        secondBackground: e=>bs.primaryFixed,
        contrastCurve: new ps(3,4.5,7,11)
    }),
    bs.secondaryFixed = ds.fromPalette({
        name: "secondary_fixed",
        palette: e=>e.secondaryPalette,
        tone: e=>gs(e) ? 80 : 90,
        isBackground: !0,
        background: e=>bs.highestSurface(e),
        contrastCurve: new ps(1,1,3,4.5),
        toneDeltaPair: e=>new ms(bs.secondaryFixed,bs.secondaryFixedDim,10,"lighter",!0)
    }),
    bs.secondaryFixedDim = ds.fromPalette({
        name: "secondary_fixed_dim",
        palette: e=>e.secondaryPalette,
        tone: e=>gs(e) ? 70 : 80,
        isBackground: !0,
        background: e=>bs.highestSurface(e),
        contrastCurve: new ps(1,1,3,4.5),
        toneDeltaPair: e=>new ms(bs.secondaryFixed,bs.secondaryFixedDim,10,"lighter",!0)
    }),
    bs.onSecondaryFixed = ds.fromPalette({
        name: "on_secondary_fixed",
        palette: e=>e.secondaryPalette,
        tone: e=>10,
        background: e=>bs.secondaryFixedDim,
        secondBackground: e=>bs.secondaryFixed,
        contrastCurve: new ps(4.5,7,11,21)
    }),
    bs.onSecondaryFixedVariant = ds.fromPalette({
        name: "on_secondary_fixed_variant",
        palette: e=>e.secondaryPalette,
        tone: e=>gs(e) ? 25 : 30,
        background: e=>bs.secondaryFixedDim,
        secondBackground: e=>bs.secondaryFixed,
        contrastCurve: new ps(3,4.5,7,11)
    }),
    bs.tertiaryFixed = ds.fromPalette({
        name: "tertiary_fixed",
        palette: e=>e.tertiaryPalette,
        tone: e=>gs(e) ? 40 : 90,
        isBackground: !0,
        background: e=>bs.highestSurface(e),
        contrastCurve: new ps(1,1,3,4.5),
        toneDeltaPair: e=>new ms(bs.tertiaryFixed,bs.tertiaryFixedDim,10,"lighter",!0)
    }),
    bs.tertiaryFixedDim = ds.fromPalette({
        name: "tertiary_fixed_dim",
        palette: e=>e.tertiaryPalette,
        tone: e=>gs(e) ? 30 : 80,
        isBackground: !0,
        background: e=>bs.highestSurface(e),
        contrastCurve: new ps(1,1,3,4.5),
        toneDeltaPair: e=>new ms(bs.tertiaryFixed,bs.tertiaryFixedDim,10,"lighter",!0)
    }),
    bs.onTertiaryFixed = ds.fromPalette({
        name: "on_tertiary_fixed",
        palette: e=>e.tertiaryPalette,
        tone: e=>gs(e) ? 100 : 10,
        background: e=>bs.tertiaryFixedDim,
        secondBackground: e=>bs.tertiaryFixed,
        contrastCurve: new ps(4.5,7,11,21)
    }),
    bs.onTertiaryFixedVariant = ds.fromPalette({
        name: "on_tertiary_fixed_variant",
        palette: e=>e.tertiaryPalette,
        tone: e=>gs(e) ? 90 : 30,
        background: e=>bs.tertiaryFixedDim,
        secondBackground: e=>bs.tertiaryFixed,
        contrastCurve: new ps(3,4.5,7,11)
    });
    class ys {
        static of(e) {
            return new ys(e,!1)
        }
        static contentOf(e) {
            return new ys(e,!0)
        }
        static fromColors(e) {
            return ys.createPaletteFromColors(!1, e)
        }
        static contentFromColors(e) {
            return ys.createPaletteFromColors(!0, e)
        }
        static createPaletteFromColors(e, t) {
            const i = new ys(t.primary,e);
            if (t.secondary) {
                const o = new ys(t.secondary,e);
                i.a2 = o.a1
            }
            if (t.tertiary) {
                const o = new ys(t.tertiary,e);
                i.a3 = o.a1
            }
            if (t.error) {
                const o = new ys(t.error,e);
                i.error = o.a1
            }
            if (t.neutral) {
                const o = new ys(t.neutral,e);
                i.n1 = o.n1
            }
            if (t.neutralVariant) {
                const o = new ys(t.neutralVariant,e);
                i.n2 = o.n2
            }
            return i
        }
        constructor(e, t) {
            const i = ss.fromInt(e)
              , o = i.hue
              , r = i.chroma;
            t ? (this.a1 = hs.fromHueAndChroma(o, r),
            this.a2 = hs.fromHueAndChroma(o, r / 3),
            this.a3 = hs.fromHueAndChroma(o + 60, r / 2),
            this.n1 = hs.fromHueAndChroma(o, Math.min(r / 12, 4)),
            this.n2 = hs.fromHueAndChroma(o, Math.min(r / 6, 8))) : (this.a1 = hs.fromHueAndChroma(o, Math.max(48, r)),
            this.a2 = hs.fromHueAndChroma(o, 16),
            this.a3 = hs.fromHueAndChroma(o + 60, 24),
            this.n1 = hs.fromHueAndChroma(o, 4),
            this.n2 = hs.fromHueAndChroma(o, 8)),
            this.error = hs.fromHueAndChroma(25, 84)
        }
    }
    class ws {
        fromInt(e) {
            return function(e) {
                const t = Qn(jn(e))
                  , i = Qn(Wn(e))
                  , o = Qn(Gn(e))
                  , r = Vn
                  , n = r[0][0] * t + r[0][1] * i + r[0][2] * o
                  , s = r[1][0] * t + r[1][1] * i + r[1][2] * o
                  , a = r[2][0] * t + r[2][1] * i + r[2][2] * o
                  , l = s / Un[1]
                  , c = a / Un[2]
                  , d = ts(n / Un[0])
                  , h = ts(l);
                return [116 * h - 16, 500 * (d - h), 200 * (h - ts(c))]
            }(e)
        }
        toInt(e) {
            return function(e, t, i) {
                const o = Un
                  , r = (e + 16) / 116
                  , n = r - i / 200
                  , s = is(t / 500 + r)
                  , a = is(r)
                  , l = is(n);
                return Yn(s * o[0], a * o[1], l * o[2])
            }(e[0], e[1], e[2])
        }
        distance(e, t) {
            const i = e[0] - t[0]
              , o = e[1] - t[1]
              , r = e[2] - t[2];
            return i * i + o * o + r * r
        }
    }
    class ks {
        static quantize(e, t, i) {
            const o = new Map
              , r = new Array
              , n = new Array
              , s = new ws;
            let a = 0;
            for (let t = 0; t < e.length; t++) {
                const i = e[t]
                  , l = o.get(i);
                void 0 === l ? (a++,
                r.push(s.fromInt(i)),
                n.push(i),
                o.set(i, 1)) : o.set(i, l + 1)
            }
            const l = new Array;
            for (let e = 0; e < a; e++) {
                const t = n[e]
                  , i = o.get(t);
                void 0 !== i && (l[e] = i)
            }
            let c = Math.min(i, a);
            t.length > 0 && (c = Math.min(c, t.length));
            const d = new Array;
            for (let e = 0; e < t.length; e++)
                d.push(s.fromInt(t[e]));
            const h = c - d.length;
            if (0 === t.length && h > 0)
                for (let e = 0; e < h; e++) {
                    const e = 100 * Math.random()
                      , t = 201 * Math.random() - 100
                      , i = 201 * Math.random() - 100;
                    d.push(new Array(e,t,i))
                }
            const u = new Array;
            for (let e = 0; e < a; e++)
                u.push(Math.floor(Math.random() * c));
            const p = new Array;
            for (let e = 0; e < c; e++) {
                p.push(new Array);
                for (let t = 0; t < c; t++)
                    p[e].push(0)
            }
            const m = new Array;
            for (let e = 0; e < c; e++) {
                m.push(new Array);
                for (let t = 0; t < c; t++)
                    m[e].push(new Cs)
            }
            const f = new Array;
            for (let e = 0; e < c; e++)
                f.push(0);
            for (let e = 0; e < 10; e++) {
                for (let e = 0; e < c; e++) {
                    for (let t = e + 1; t < c; t++) {
                        const i = s.distance(d[e], d[t]);
                        m[t][e].distance = i,
                        m[t][e].index = e,
                        m[e][t].distance = i,
                        m[e][t].index = t
                    }
                    m[e].sort();
                    for (let t = 0; t < c; t++)
                        p[e][t] = m[e][t].index
                }
                let t = 0;
                for (let e = 0; e < a; e++) {
                    const i = r[e]
                      , o = u[e]
                      , n = d[o]
                      , a = s.distance(i, n);
                    let l = a
                      , h = -1;
                    for (let e = 0; e < c; e++) {
                        if (m[o][e].distance >= 4 * a)
                            continue;
                        const t = s.distance(i, d[e]);
                        t < l && (l = t,
                        h = e)
                    }
                    if (-1 !== h) {
                        Math.abs(Math.sqrt(l) - Math.sqrt(a)) > 3 && (t++,
                        u[e] = h)
                    }
                }
                if (0 === t && 0 !== e)
                    break;
                const i = new Array(c).fill(0)
                  , o = new Array(c).fill(0)
                  , n = new Array(c).fill(0);
                for (let e = 0; e < c; e++)
                    f[e] = 0;
                for (let e = 0; e < a; e++) {
                    const t = u[e]
                      , s = r[e]
                      , a = l[e];
                    f[t] += a,
                    i[t] += s[0] * a,
                    o[t] += s[1] * a,
                    n[t] += s[2] * a
                }
                for (let e = 0; e < c; e++) {
                    const t = f[e];
                    if (0 === t) {
                        d[e] = [0, 0, 0];
                        continue
                    }
                    const r = i[e] / t
                      , s = o[e] / t
                      , a = n[e] / t;
                    d[e] = [r, s, a]
                }
            }
            const v = new Map;
            for (let e = 0; e < c; e++) {
                const t = f[e];
                if (0 === t)
                    continue;
                const i = s.toInt(d[e]);
                v.has(i) || v.set(i, t)
            }
            return v
        }
    }
    class Cs {
        constructor() {
            this.distance = -1,
            this.index = -1
        }
    }
    class xs {
        static quantize(e) {
            const t = new Map;
            for (let i = 0; i < e.length; i++) {
                const o = e[i];
                (o >> 24 & 255) < 255 || t.set(o, (t.get(o) ?? 0) + 1)
            }
            return t
        }
    }
    const $s = 33
      , Rs = 35937
      , Is = "red"
      , Ss = "green"
      , Es = "blue";
    class Ts {
        constructor(e=[], t=[], i=[], o=[], r=[], n=[]) {
            this.weights = e,
            this.momentsR = t,
            this.momentsG = i,
            this.momentsB = o,
            this.moments = r,
            this.cubes = n
        }
        quantize(e, t) {
            this.constructHistogram(e),
            this.computeMoments();
            const i = this.createBoxes(t);
            return this.createResult(i.resultCount)
        }
        constructHistogram(e) {
            this.weights = Array.from({
                length: Rs
            }).fill(0),
            this.momentsR = Array.from({
                length: Rs
            }).fill(0),
            this.momentsG = Array.from({
                length: Rs
            }).fill(0),
            this.momentsB = Array.from({
                length: Rs
            }).fill(0),
            this.moments = Array.from({
                length: Rs
            }).fill(0);
            const t = xs.quantize(e);
            for (const [e,i] of t.entries()) {
                const t = jn(e)
                  , o = Wn(e)
                  , r = Gn(e)
                  , n = 3
                  , s = 1 + (t >> n)
                  , a = 1 + (o >> n)
                  , l = 1 + (r >> n)
                  , c = this.getIndex(s, a, l);
                this.weights[c] = (this.weights[c] ?? 0) + i,
                this.momentsR[c] += i * t,
                this.momentsG[c] += i * o,
                this.momentsB[c] += i * r,
                this.moments[c] += i * (t * t + o * o + r * r)
            }
        }
        computeMoments() {
            for (let e = 1; e < $s; e++) {
                const t = Array.from({
                    length: $s
                }).fill(0)
                  , i = Array.from({
                    length: $s
                }).fill(0)
                  , o = Array.from({
                    length: $s
                }).fill(0)
                  , r = Array.from({
                    length: $s
                }).fill(0)
                  , n = Array.from({
                    length: $s
                }).fill(0);
                for (let s = 1; s < $s; s++) {
                    let a = 0
                      , l = 0
                      , c = 0
                      , d = 0
                      , h = 0;
                    for (let u = 1; u < $s; u++) {
                        const p = this.getIndex(e, s, u);
                        a += this.weights[p],
                        l += this.momentsR[p],
                        c += this.momentsG[p],
                        d += this.momentsB[p],
                        h += this.moments[p],
                        t[u] += a,
                        i[u] += l,
                        o[u] += c,
                        r[u] += d,
                        n[u] += h;
                        const m = this.getIndex(e - 1, s, u);
                        this.weights[p] = this.weights[m] + t[u],
                        this.momentsR[p] = this.momentsR[m] + i[u],
                        this.momentsG[p] = this.momentsG[m] + o[u],
                        this.momentsB[p] = this.momentsB[m] + r[u],
                        this.moments[p] = this.moments[m] + n[u]
                    }
                }
            }
        }
        createBoxes(e) {
            this.cubes = Array.from({
                length: e
            }).fill(0).map((()=>new As));
            const t = Array.from({
                length: e
            }).fill(0);
            this.cubes[0].r0 = 0,
            this.cubes[0].g0 = 0,
            this.cubes[0].b0 = 0,
            this.cubes[0].r1 = 32,
            this.cubes[0].g1 = 32,
            this.cubes[0].b1 = 32;
            let i = e
              , o = 0;
            for (let r = 1; r < e; r++) {
                this.cut(this.cubes[o], this.cubes[r]) ? (t[o] = this.cubes[o].vol > 1 ? this.variance(this.cubes[o]) : 0,
                t[r] = this.cubes[r].vol > 1 ? this.variance(this.cubes[r]) : 0) : (t[o] = 0,
                r--),
                o = 0;
                let e = t[0];
                for (let i = 1; i <= r; i++)
                    t[i] > e && (e = t[i],
                    o = i);
                if (e <= 0) {
                    i = r + 1;
                    break
                }
            }
            return new Ds(e,i)
        }
        createResult(e) {
            const t = [];
            for (let i = 0; i < e; ++i) {
                const e = this.cubes[i]
                  , o = this.volume(e, this.weights);
                if (o > 0) {
                    const i = 255 << 24 | (255 & Math.round(this.volume(e, this.momentsR) / o)) << 16 | (255 & Math.round(this.volume(e, this.momentsG) / o)) << 8 | 255 & Math.round(this.volume(e, this.momentsB) / o);
                    t.push(i)
                }
            }
            return t
        }
        variance(e) {
            const t = this.volume(e, this.momentsR)
              , i = this.volume(e, this.momentsG)
              , o = this.volume(e, this.momentsB);
            return this.moments[this.getIndex(e.r1, e.g1, e.b1)] - this.moments[this.getIndex(e.r1, e.g1, e.b0)] - this.moments[this.getIndex(e.r1, e.g0, e.b1)] + this.moments[this.getIndex(e.r1, e.g0, e.b0)] - this.moments[this.getIndex(e.r0, e.g1, e.b1)] + this.moments[this.getIndex(e.r0, e.g1, e.b0)] + this.moments[this.getIndex(e.r0, e.g0, e.b1)] - this.moments[this.getIndex(e.r0, e.g0, e.b0)] - (t * t + i * i + o * o) / this.volume(e, this.weights)
        }
        cut(e, t) {
            const i = this.volume(e, this.momentsR)
              , o = this.volume(e, this.momentsG)
              , r = this.volume(e, this.momentsB)
              , n = this.volume(e, this.weights)
              , s = this.maximize(e, Is, e.r0 + 1, e.r1, i, o, r, n)
              , a = this.maximize(e, Ss, e.g0 + 1, e.g1, i, o, r, n)
              , l = this.maximize(e, Es, e.b0 + 1, e.b1, i, o, r, n);
            let c;
            const d = s.maximum
              , h = a.maximum
              , u = l.maximum;
            if (d >= h && d >= u) {
                if (s.cutLocation < 0)
                    return !1;
                c = Is
            } else
                c = h >= d && h >= u ? Ss : Es;
            switch (t.r1 = e.r1,
            t.g1 = e.g1,
            t.b1 = e.b1,
            c) {
            case Is:
                e.r1 = s.cutLocation,
                t.r0 = e.r1,
                t.g0 = e.g0,
                t.b0 = e.b0;
                break;
            case Ss:
                e.g1 = a.cutLocation,
                t.r0 = e.r0,
                t.g0 = e.g1,
                t.b0 = e.b0;
                break;
            case Es:
                e.b1 = l.cutLocation,
                t.r0 = e.r0,
                t.g0 = e.g0,
                t.b0 = e.b1;
                break;
            default:
                throw new Error("unexpected direction " + c)
            }
            return e.vol = (e.r1 - e.r0) * (e.g1 - e.g0) * (e.b1 - e.b0),
            t.vol = (t.r1 - t.r0) * (t.g1 - t.g0) * (t.b1 - t.b0),
            !0
        }
        maximize(e, t, i, o, r, n, s, a) {
            const l = this.bottom(e, t, this.momentsR)
              , c = this.bottom(e, t, this.momentsG)
              , d = this.bottom(e, t, this.momentsB)
              , h = this.bottom(e, t, this.weights);
            let u = 0
              , p = -1
              , m = 0
              , f = 0
              , v = 0
              , g = 0;
            for (let b = i; b < o; b++) {
                if (m = l + this.top(e, t, b, this.momentsR),
                f = c + this.top(e, t, b, this.momentsG),
                v = d + this.top(e, t, b, this.momentsB),
                g = h + this.top(e, t, b, this.weights),
                0 === g)
                    continue;
                let i = 1 * (m * m + f * f + v * v)
                  , o = 1 * g
                  , y = i / o;
                m = r - m,
                f = n - f,
                v = s - v,
                g = a - g,
                0 !== g && (i = 1 * (m * m + f * f + v * v),
                o = 1 * g,
                y += i / o,
                y > u && (u = y,
                p = b))
            }
            return new Ms(p,u)
        }
        volume(e, t) {
            return t[this.getIndex(e.r1, e.g1, e.b1)] - t[this.getIndex(e.r1, e.g1, e.b0)] - t[this.getIndex(e.r1, e.g0, e.b1)] + t[this.getIndex(e.r1, e.g0, e.b0)] - t[this.getIndex(e.r0, e.g1, e.b1)] + t[this.getIndex(e.r0, e.g1, e.b0)] + t[this.getIndex(e.r0, e.g0, e.b1)] - t[this.getIndex(e.r0, e.g0, e.b0)]
        }
        bottom(e, t, i) {
            switch (t) {
            case Is:
                return -i[this.getIndex(e.r0, e.g1, e.b1)] + i[this.getIndex(e.r0, e.g1, e.b0)] + i[this.getIndex(e.r0, e.g0, e.b1)] - i[this.getIndex(e.r0, e.g0, e.b0)];
            case Ss:
                return -i[this.getIndex(e.r1, e.g0, e.b1)] + i[this.getIndex(e.r1, e.g0, e.b0)] + i[this.getIndex(e.r0, e.g0, e.b1)] - i[this.getIndex(e.r0, e.g0, e.b0)];
            case Es:
                return -i[this.getIndex(e.r1, e.g1, e.b0)] + i[this.getIndex(e.r1, e.g0, e.b0)] + i[this.getIndex(e.r0, e.g1, e.b0)] - i[this.getIndex(e.r0, e.g0, e.b0)];
            default:
                throw new Error("unexpected direction $direction")
            }
        }
        top(e, t, i, o) {
            switch (t) {
            case Is:
                return o[this.getIndex(i, e.g1, e.b1)] - o[this.getIndex(i, e.g1, e.b0)] - o[this.getIndex(i, e.g0, e.b1)] + o[this.getIndex(i, e.g0, e.b0)];
            case Ss:
                return o[this.getIndex(e.r1, i, e.b1)] - o[this.getIndex(e.r1, i, e.b0)] - o[this.getIndex(e.r0, i, e.b1)] + o[this.getIndex(e.r0, i, e.b0)];
            case Es:
                return o[this.getIndex(e.r1, e.g1, i)] - o[this.getIndex(e.r1, e.g0, i)] - o[this.getIndex(e.r0, e.g1, i)] + o[this.getIndex(e.r0, e.g0, i)];
            default:
                throw new Error("unexpected direction $direction")
            }
        }
        getIndex(e, t, i) {
            return (e << 10) + (e << 6) + e + (t << 5) + t + i
        }
    }
    class As {
        constructor(e=0, t=0, i=0, o=0, r=0, n=0, s=0) {
            this.r0 = e,
            this.r1 = t,
            this.g0 = i,
            this.g1 = o,
            this.b0 = r,
            this.b1 = n,
            this.vol = s
        }
    }
    class Ds {
        constructor(e, t) {
            this.requestedCount = e,
            this.resultCount = t
        }
    }
    class Ms {
        constructor(e, t) {
            this.cutLocation = e,
            this.maximum = t
        }
    }
    class Ps {
        static quantize(e, t) {
            const i = (new Ts).quantize(e, t);
            return ks.quantize(e, i, t)
        }
    }
    class Ls {
        get primary() {
            return this.props.primary
        }
        get onPrimary() {
            return this.props.onPrimary
        }
        get primarycontainer() {
            return this.props.primarycontainer
        }
        get onPrimarycontainer() {
            return this.props.onPrimarycontainer
        }
        get secondary() {
            return this.props.secondary
        }
        get onSecondary() {
            return this.props.onSecondary
        }
        get secondarycontainer() {
            return this.props.secondarycontainer
        }
        get onSecondarycontainer() {
            return this.props.onSecondarycontainer
        }
        get tertiary() {
            return this.props.tertiary
        }
        get onTertiary() {
            return this.props.onTertiary
        }
        get tertiarycontainer() {
            return this.props.tertiarycontainer
        }
        get onTertiarycontainer() {
            return this.props.onTertiarycontainer
        }
        get error() {
            return this.props.error
        }
        get onError() {
            return this.props.onError
        }
        get errorcontainer() {
            return this.props.errorcontainer
        }
        get onErrorcontainer() {
            return this.props.onErrorcontainer
        }
        get background() {
            return this.props.background
        }
        get onBackground() {
            return this.props.onBackground
        }
        get surface() {
            return this.props.surface
        }
        get onSurface() {
            return this.props.onSurface
        }
        get surfaceVariant() {
            return this.props.surfaceVariant
        }
        get onSurfaceVariant() {
            return this.props.onSurfaceVariant
        }
        get outline() {
            return this.props.outline
        }
        get outlineVariant() {
            return this.props.outlineVariant
        }
        get shadow() {
            return this.props.shadow
        }
        get scrim() {
            return this.props.scrim
        }
        get inverseSurface() {
            return this.props.inverseSurface
        }
        get inverseOnSurface() {
            return this.props.inverseOnSurface
        }
        get inversePrimary() {
            return this.props.inversePrimary
        }
        static light(e) {
            return Ls.lightFromCorePalette(ys.of(e))
        }
        static dark(e) {
            return Ls.darkFromCorePalette(ys.of(e))
        }
        static lightContent(e) {
            return Ls.lightFromCorePalette(ys.contentOf(e))
        }
        static darkContent(e) {
            return Ls.darkFromCorePalette(ys.contentOf(e))
        }
        static lightFromCorePalette(e) {
            return new Ls({
                primary: e.a1.tone(40),
                onPrimary: e.a1.tone(100),
                primarycontainer: e.a1.tone(90),
                onPrimarycontainer: e.a1.tone(10),
                secondary: e.a2.tone(40),
                onSecondary: e.a2.tone(100),
                secondarycontainer: e.a2.tone(90),
                onSecondarycontainer: e.a2.tone(10),
                tertiary: e.a3.tone(40),
                onTertiary: e.a3.tone(100),
                tertiarycontainer: e.a3.tone(90),
                onTertiarycontainer: e.a3.tone(10),
                error: e.error.tone(40),
                onError: e.error.tone(100),
                errorcontainer: e.error.tone(90),
                onErrorcontainer: e.error.tone(10),
                background: e.n1.tone(99),
                onBackground: e.n1.tone(10),
                surface: e.n1.tone(99),
                onSurface: e.n1.tone(10),
                surfaceVariant: e.n2.tone(90),
                onSurfaceVariant: e.n2.tone(30),
                outline: e.n2.tone(50),
                outlineVariant: e.n2.tone(80),
                shadow: e.n1.tone(0),
                scrim: e.n1.tone(0),
                inverseSurface: e.n1.tone(20),
                inverseOnSurface: e.n1.tone(95),
                inversePrimary: e.a1.tone(80)
            })
        }
        static darkFromCorePalette(e) {
            return new Ls({
                primary: e.a1.tone(80),
                onPrimary: e.a1.tone(20),
                primarycontainer: e.a1.tone(30),
                onPrimarycontainer: e.a1.tone(90),
                secondary: e.a2.tone(80),
                onSecondary: e.a2.tone(20),
                secondarycontainer: e.a2.tone(30),
                onSecondarycontainer: e.a2.tone(90),
                tertiary: e.a3.tone(80),
                onTertiary: e.a3.tone(20),
                tertiarycontainer: e.a3.tone(30),
                onTertiarycontainer: e.a3.tone(90),
                error: e.error.tone(80),
                onError: e.error.tone(20),
                errorcontainer: e.error.tone(30),
                onErrorcontainer: e.error.tone(80),
                background: e.n1.tone(10),
                onBackground: e.n1.tone(90),
                surface: e.n1.tone(10),
                onSurface: e.n1.tone(90),
                surfaceVariant: e.n2.tone(30),
                onSurfaceVariant: e.n2.tone(80),
                outline: e.n2.tone(60),
                outlineVariant: e.n2.tone(30),
                shadow: e.n1.tone(0),
                scrim: e.n1.tone(0),
                inverseSurface: e.n1.tone(90),
                inverseOnSurface: e.n1.tone(20),
                inversePrimary: e.a1.tone(40)
            })
        }
        constructor(e) {
            this.props = e
        }
        toJSON() {
            return {
                ...this.props
            }
        }
    }
    const _s = {
        desired: 4,
        fallbackColorARGB: 4282549748,
        filter: !0
    };
    function Bs(e, t) {
        return e.score > t.score ? -1 : e.score < t.score ? 1 : 0
    }
    class Os {
        constructor() {}
        static score(e, t) {
            const {desired: i, fallbackColorARGB: o, filter: r} = {
                ..._s,
                ...t
            }
              , n = []
              , s = new Array(360).fill(0);
            let a = 0;
            for (const [t,i] of e.entries()) {
                const e = ss.fromInt(t);
                n.push(e);
                s[Math.floor(e.hue)] += i,
                a += i
            }
            const l = new Array(360).fill(0);
            for (let e = 0; e < 360; e++) {
                const t = s[e] / a;
                for (let i = e - 14; i < e + 16; i++) {
                    l[On(i)] += t
                }
            }
            const c = new Array;
            for (const e of n) {
                const t = l[On(Math.round(e.hue))];
                if (r && (e.chroma < Os.CUTOFF_CHROMA || t <= Os.CUTOFF_EXCITED_PROPORTION))
                    continue;
                const i = 100 * t * Os.WEIGHT_PROPORTION
                  , o = e.chroma < Os.TARGET_CHROMA ? Os.WEIGHT_CHROMA_BELOW : Os.WEIGHT_CHROMA_ABOVE
                  , n = i + (e.chroma - Os.TARGET_CHROMA) * o;
                c.push({
                    hct: e,
                    score: n
                })
            }
            c.sort(Bs);
            const d = [];
            for (let e = 90; e >= 15; e--) {
                d.length = 0;
                for (const {hct: t} of c) {
                    if (d.find((i=>Nn(t.hue, i.hue) < e)) || d.push(t),
                    d.length >= i)
                        break
                }
                if (d.length >= i)
                    break
            }
            const h = [];
            0 === d.length && h.push(o);
            for (const e of d)
                h.push(e.toInt());
            return h
        }
    }
    function zs(e) {
        const t = 3 === (e = e.replace("#", "")).length
          , i = 6 === e.length
          , o = 8 === e.length;
        if (!t && !i && !o)
            throw new Error("unexpected hex " + e);
        let r = 0
          , n = 0
          , s = 0;
        return t ? (r = Ns(e.slice(0, 1).repeat(2)),
        n = Ns(e.slice(1, 2).repeat(2)),
        s = Ns(e.slice(2, 3).repeat(2))) : i ? (r = Ns(e.slice(0, 2)),
        n = Ns(e.slice(2, 4)),
        s = Ns(e.slice(4, 6))) : o && (r = Ns(e.slice(2, 4)),
        n = Ns(e.slice(4, 6)),
        s = Ns(e.slice(6, 8))),
        (255 << 24 | (255 & r) << 16 | (255 & n) << 8 | 255 & s) >>> 0
    }
    function Ns(e) {
        return parseInt(e, 16)
    }
    Os.TARGET_CHROMA = 48,
    Os.WEIGHT_PROPORTION = .7,
    Os.WEIGHT_CHROMA_ABOVE = .3,
    Os.WEIGHT_CHROMA_BELOW = .1,
    Os.CUTOFF_CHROMA = 5,
    Os.CUTOFF_EXCITED_PROPORTION = .01;
    const Fs = ()=>er("OK", {
        id: "functions.prompt.confirmText"
    })
      , Vs = ()=>er("Cancel", {
        id: "functions.prompt.cancelText"
    })
      , Hs = ["light", "dark"]
      , Us = "mdui-custom-color-scheme-";
    let Ks = 0;
    const qs = e=>{
        const t = M(e);
        let i = t.get().map((e=>Array.from(e.classList))).flat();
        i = L(i).filter((e=>e.startsWith(Us))),
        t.removeClass(i.join(" "));
        const o = i.filter((e=>0 === M(`.${e}`).length));
        M(o.map((e=>`#${e}`)).join(",")).remove()
    }
      , js = (e,t)=>{
        const i = r()
          , o = M(t?.target || i.documentElement)
          , n = {
            light: Ls.light(e).toJSON(),
            dark: Ls.dark(e).toJSON()
        }
          , s = ys.of(e);
        Object.assign(n.light, {
            "surface-dim": s.n1.tone(87),
            "surface-bright": s.n1.tone(98),
            "surface-container-lowest": s.n1.tone(100),
            "surface-container-low": s.n1.tone(96),
            "surface-container": s.n1.tone(94),
            "surface-container-high": s.n1.tone(92),
            "surface-container-highest": s.n1.tone(90),
            "surface-tint-color": n.light.primary
        }),
        Object.assign(n.dark, {
            "surface-dim": s.n1.tone(6),
            "surface-bright": s.n1.tone(24),
            "surface-container-lowest": s.n1.tone(4),
            "surface-container-low": s.n1.tone(10),
            "surface-container": s.n1.tone(12),
            "surface-container-high": s.n1.tone(17),
            "surface-container-highest": s.n1.tone(22),
            "surface-tint-color": n.dark.primary
        }),
        (t?.customColors || []).map((t=>{
            const i = k(t.name)
              , o = function(e, t) {
                let i = t.value;
                const o = i
                  , r = e;
                t.blend && (i = as.harmonize(o, r));
                const n = ys.of(i).a1;
                return {
                    color: t,
                    value: i,
                    light: {
                        color: n.tone(40),
                        onColor: n.tone(100),
                        colorcontainer: n.tone(90),
                        onColorcontainer: n.tone(10)
                    },
                    dark: {
                        color: n.tone(80),
                        onColor: n.tone(20),
                        colorcontainer: n.tone(30),
                        onColorcontainer: n.tone(90)
                    }
                }
            }(e, {
                name: i,
                value: zs(t.value),
                blend: !0
            });
            Hs.forEach((e=>{
                n[e][i] = o[e].color,
                n[e][`on-${i}`] = o[e].onColor,
                n[e][`${i}-container`] = o[e].colorcontainer,
                n[e][`on-${i}-container`] = o[e].onColorcontainer
            }
            ))
        }
        ));
        const a = (e,t)=>Object.entries(n[e]).map((([e,i])=>t(k(e), (e=>[jn(e), Wn(e), Gn(e)].join(", "))(i)))).join("")
          , l = Us + `${e}-${Ks++}`
          , c = `.${l} {\n  ${a("light", ((e,t)=>`--mdui-color-${e}-light: ${t};`))}\n  ${a("dark", ((e,t)=>`--mdui-color-${e}-dark: ${t};`))}\n  ${a("light", (e=>`--mdui-color-${e}: var(--mdui-color-${e}-light);`))}\n\n  color: rgb(var(--mdui-color-on-background));\n  background-color: rgb(var(--mdui-color-background));\n}\n\n.mdui-theme-dark .${l},\n.mdui-theme-dark.${l} {\n  ${a("dark", (e=>`--mdui-color-${e}: var(--mdui-color-${e}-dark);`))}\n}\n\n@media (prefers-color-scheme: dark) {\n  .mdui-theme-auto .${l},\n  .mdui-theme-auto.${l} {\n    ${a("dark", (e=>`--mdui-color-${e}: var(--mdui-color-${e}-dark);`))}\n  }\n}`;
        qs(o),
        M(i.head).append(`<style id="${l}">${c}</style>`),
        o.addClass(l)
    }
      , Ws = "mdui.functions.snackbar.";
    let Gs;
    e.$ = M,
    e.alert = e=>{
        const t = Object.assign({}, {
            confirmText: Dn(),
            onConfirm: x
        }, e)
          , i = ["headline", "description", "icon", "closeOnEsc", "closeOnOverlayClick", "queue", "onOpen", "onOpened", "onClose", "onClosed", "onOverlayClick"];
        return new Promise(((o,r)=>{
            let n = !1;
            const s = An({
                ...Object.fromEntries(i.filter((e=>!u(t[e]))).map((e=>[e, t[e]]))),
                actions: [{
                    text: t.confirmText,
                    onClick: e=>{
                        const i = t.onConfirm.call(e, e);
                        return xn(i) ? i.then((()=>{
                            n = !0
                        }
                        )) : !1 !== i && (n = !0),
                        i
                    }
                }]
            });
            e.confirmText || lr(s, (()=>{
                M(s).find('[slot="action"]').text(Dn())
            }
            )),
            M(s).on("close", (()=>{
                n ? o() : r(),
                cr(s)
            }
            ))
        }
        ))
    }
    ,
    e.breakpoint = _r,
    e.confirm = e=>{
        const t = Object.assign({}, {
            confirmText: Mn(),
            cancelText: Pn(),
            onConfirm: x,
            onCancel: x
        }, e)
          , i = ["headline", "description", "icon", "closeOnEsc", "closeOnOverlayClick", "stackedActions", "queue", "onOpen", "onOpened", "onClose", "onClosed", "onOverlayClick"];
        return new Promise(((o,r)=>{
            let n = !1;
            const s = An({
                ...Object.fromEntries(i.filter((e=>!u(t[e]))).map((e=>[e, t[e]]))),
                actions: [{
                    text: t.cancelText,
                    onClick: e=>t.onCancel.call(e, e)
                }, {
                    text: t.confirmText,
                    onClick: e=>{
                        const i = t.onConfirm.call(e, e);
                        return xn(i) ? i.then((()=>{
                            n = !0
                        }
                        )) : !1 !== i && (n = !0),
                        i
                    }
                }]
            });
            e.confirmText || lr(s, (()=>{
                M(s).find('[slot="action"]').last().text(Mn())
            }
            )),
            e.cancelText || lr(s, (()=>{
                M(s).find('[slot="action"]').first().text(Pn())
            }
            )),
            M(s).on("close", (()=>{
                n ? o() : r(),
                cr(s)
            }
            ))
        }
        ))
    }
    ,
    e.dialog = An,
    e.getColorFromImage = async e=>{
        const t = M(e)
          , i = await async function(e) {
            const t = await new Promise(((t,i)=>{
                const o = document.createElement("canvas")
                  , r = o.getContext("2d");
                if (!r)
                    return void i(new Error("Could not get canvas context"));
                const n = ()=>{
                    o.width = e.width,
                    o.height = e.height,
                    r.drawImage(e, 0, 0);
                    let i = [0, 0, e.width, e.height];
                    const n = e.dataset.area;
                    n && /^\d+(\s*,\s*\d+){3}$/.test(n) && (i = n.split(/\s*,\s*/).map((e=>parseInt(e, 10))));
                    const [s,a,l,c] = i;
                    t(r.getImageData(s, a, l, c).data)
                }
                  , s = ()=>{
                    i(new Error("Image load failed"))
                }
                ;
                e.complete ? n() : (e.onload = n,
                e.onerror = s)
            }
            ))
              , i = [];
            for (let e = 0; e < t.length; e += 4) {
                const o = t[e]
                  , r = t[e + 1]
                  , n = t[e + 2];
                if (t[e + 3] < 255)
                    continue;
                const s = Kn(o, r, n);
                i.push(s)
            }
            const o = Ps.quantize(i, 128);
            return Os.score(o)[0]
        }(t[0]);
        return function(e) {
            const t = jn(e)
              , i = Wn(e)
              , o = Gn(e)
              , r = [t.toString(16), i.toString(16), o.toString(16)];
            for (const [e,t] of r.entries())
                1 === t.length && (r[e] = "0" + t);
            return "#" + r.join("")
        }(i)
    }
    ,
    e.getLocale = ()=>{
        if (!rr)
            throw new Error(or);
        return rr()
    }
    ,
    e.getTheme = (e=document.documentElement)=>{
        const t = M(e)[0]
          , i = ["light", "dark", "auto"]
          , o = "mdui-theme-";
        return Array.from(t.classList).find((e=>i.map((e=>o + e)).includes(e)))?.slice(11) ?? "light"
    }
    ,
    e.loadLocale = e=>{
        (e=>{
            const t = s()
              , i = Jo({
                sourceLocale: "en-us",
                targetLocales: ir,
                loadLocale: e
            });
            rr = i.getLocale,
            nr = i.setLocale,
            t.addEventListener(Mo, (e=>{
                t.dispatchEvent(new CustomEvent("mdui-localize-status",{
                    detail: e.detail
                }))
            }
            ))
        }
        )(e)
    }
    ,
    e.observeResize = Ei,
    e.prompt = t=>{
        const i = Object.assign({}, {
            confirmText: Fs(),
            cancelText: Vs(),
            onConfirm: x,
            onCancel: x,
            validator: x,
            textFieldOptions: {}
        }, t)
          , o = ["headline", "description", "icon", "closeOnEsc", "closeOnOverlayClick", "stackedActions", "queue", "onOpen", "onOpened", "onClose", "onClosed", "onOverlayClick"]
          , r = new e.TextField;
        return Object.entries(i.textFieldOptions).forEach((([e,t])=>{
            r[e] = t
        }
        )),
        new Promise(((e,n)=>{
            let s = !1;
            const a = An({
                ...Object.fromEntries(o.filter((e=>!u(i[e]))).map((e=>[e, i[e]]))),
                body: r,
                actions: [{
                    text: i.cancelText,
                    onClick: e=>i.onCancel.call(e, r.value, e)
                }, {
                    text: i.confirmText,
                    onClick: e=>{
                        if (r.setCustomValidity(""),
                        !r.reportValidity())
                            return !1;
                        const t = i.validator.call(r, r.value);
                        return h(t) && !t ? (r.setCustomValidity(" "),
                        !1) : c(t) ? (r.setCustomValidity(t),
                        !1) : xn(t) ? new Promise(((e,i)=>{
                            t.then(e).catch((e=>{
                                r.setCustomValidity(e),
                                i(e)
                            }
                            ))
                        }
                        )) : (()=>{
                            const t = i.onConfirm.call(e, r.value, e);
                            return xn(t) ? t.then((()=>{
                                s = !0
                            }
                            )) : !1 !== t && (s = !0),
                            t
                        }
                        )()
                    }
                }]
            });
            t.confirmText || lr(a, (()=>{
                M(a).find('[slot="action"]').last().text(Fs())
            }
            )),
            t.cancelText || lr(a, (()=>{
                M(a).find('[slot="action"]').first().text(Vs())
            }
            )),
            M(a).on("close", (()=>{
                s ? e(r.value) : n(),
                cr(a)
            }
            ))
        }
        ))
    }
    ,
    e.removeColorScheme = (e=document.documentElement)=>{
        qs(e)
    }
    ,
    e.setColorScheme = (e,t)=>{
        const i = zs(e);
        js(i, t)
    }
    ,
    e.setLocale = e=>{
        if (!nr)
            throw new Error(or);
        return nr(e)
    }
    ,
    e.setTheme = (e,t=document.documentElement)=>{
        const i = M(t)
          , o = "mdui-theme-";
        i.removeClass(["light", "dark", "auto"].map((e=>o + e)).join(" ")).addClass(o + e)
    }
    ,
    e.snackbar = t=>{
        const i = new e.Snackbar
          , o = M(i);
        return Object.entries(t).forEach((([e,r])=>{
            if ("message" === e)
                i.innerHTML = r;
            else if (["onClick", "onActionClick", "onOpen", "onOpened", "onClose", "onClosed"].includes(e)) {
                const n = k(e.slice(2));
                o.on(n, (()=>{
                    if ("onActionClick" === e) {
                        const e = (t.onActionClick ?? x).call(i, i);
                        xn(e) ? (i.actionLoading = !0,
                        e.then((()=>{
                            i.open = !1
                        }
                        )).finally((()=>{
                            i.actionLoading = !1
                        }
                        ))) : !1 !== e && (i.open = !1)
                    } else
                        r.call(i, i)
                }
                ))
            } else
                i[e] = r
        }
        )),
        o.appendTo("body").on("closed", (()=>{
            o.remove(),
            t.queue && (Gs = void 0,
            In(Ws + t.queue))
        }
        )),
        t.queue ? Gs ? Rn(Ws + t.queue, (()=>{
            i.open = !0,
            Gs = i
        }
        )) : (setTimeout((()=>{
            i.open = !0
        }
        )),
        Gs = i) : setTimeout((()=>{
            i.open = !0
        }
        )),
        i
    }
    ,
    e.throttle = (e,t=0)=>{
        const i = s();
        let o, r;
        return function(...n) {
            return void 0 === o && (o = i.setTimeout((()=>{
                r = e.apply(this, n),
                o = void 0
            }
            ), t)),
            r
        }
    }
}
));
