var se = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function tn(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Ye = tn, nn = typeof se == "object" && se && se.Object === Object && se, rn = nn, an = rn, on = typeof self == "object" && self && self.Object === Object && self, sn = an || on || Function("return this")(), pt = sn, ln = pt, cn = function() {
  return ln.Date.now();
}, un = cn, dn = /\s/;
function fn(e) {
  for (var t = e.length; t-- && dn.test(e.charAt(t)); )
    ;
  return t;
}
var mn = fn, hn = mn, vn = /^\s+/;
function gn(e) {
  return e && e.slice(0, hn(e) + 1).replace(vn, "");
}
var pn = gn, yn = pt, bn = yn.Symbol, yt = bn, He = yt, bt = Object.prototype, wn = bt.hasOwnProperty, Tn = bt.toString, K = He ? He.toStringTag : void 0;
function _n(e) {
  var t = wn.call(e, K), n = e[K];
  try {
    e[K] = void 0;
    var r = !0;
  } catch {
  }
  var a = Tn.call(e);
  return r && (t ? e[K] = n : delete e[K]), a;
}
var On = _n, xn = Object.prototype, kn = xn.toString;
function Sn(e) {
  return kn.call(e);
}
var Cn = Sn, Ge = yt, En = On, $n = Cn, Mn = "[object Null]", Pn = "[object Undefined]", Xe = Ge ? Ge.toStringTag : void 0;
function Dn(e) {
  return e == null ? e === void 0 ? Pn : Mn : Xe && Xe in Object(e) ? En(e) : $n(e);
}
var Wn = Dn;
function Ln(e) {
  return e != null && typeof e == "object";
}
var Nn = Ln, Un = Wn, jn = Nn, Rn = "[object Symbol]";
function Yn(e) {
  return typeof e == "symbol" || jn(e) && Un(e) == Rn;
}
var An = Yn, Fn = pn, Qe = Ye, In = An, Ve = 0 / 0, Bn = /^[-+]0x[0-9a-f]+$/i, qn = /^0b[01]+$/i, Hn = /^0o[0-7]+$/i, Gn = parseInt;
function Xn(e) {
  if (typeof e == "number")
    return e;
  if (In(e))
    return Ve;
  if (Qe(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = Qe(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = Fn(e);
  var n = qn.test(e);
  return n || Hn.test(e) ? Gn(e.slice(2), n ? 2 : 8) : Bn.test(e) ? Ve : +e;
}
var Qn = Xn, Vn = Ye, Te = un, ze = Qn, zn = "Expected a function", Jn = Math.max, Kn = Math.min;
function Zn(e, t, n) {
  var r, a, o, i, s, c, l = 0, u = !1, d = !1, f = !0;
  if (typeof e != "function")
    throw new TypeError(zn);
  t = ze(t) || 0, Vn(n) && (u = !!n.leading, d = "maxWait" in n, o = d ? Jn(ze(n.maxWait) || 0, t) : o, f = "trailing" in n ? !!n.trailing : f);
  function m(g) {
    var v = r, O = a;
    return r = a = void 0, l = g, i = e.apply(O, v), i;
  }
  function h(g) {
    return l = g, s = setTimeout(_, t), u ? m(g) : i;
  }
  function b(g) {
    var v = g - c, O = g - l, y = t - v;
    return d ? Kn(y, o - O) : y;
  }
  function x(g) {
    var v = g - c, O = g - l;
    return c === void 0 || v >= t || v < 0 || d && O >= o;
  }
  function _() {
    var g = Te();
    if (x(g))
      return k(g);
    s = setTimeout(_, b(g));
  }
  function k(g) {
    return s = void 0, f && r ? m(g) : (r = a = void 0, i);
  }
  function C() {
    s !== void 0 && clearTimeout(s), l = 0, r = c = a = s = void 0;
  }
  function W() {
    return s === void 0 ? i : k(Te());
  }
  function D() {
    var g = Te(), v = x(g);
    if (r = arguments, a = this, c = g, v) {
      if (s === void 0)
        return h(c);
      if (d)
        return clearTimeout(s), s = setTimeout(_, t), m(c);
    }
    return s === void 0 && (s = setTimeout(_, t)), i;
  }
  return D.cancel = C, D.flush = W, D;
}
var er = Zn, tr = er, nr = Ye, rr = "Expected a function";
function ar(e, t, n) {
  var r = !0, a = !0;
  if (typeof e != "function")
    throw new TypeError(rr);
  return nr(n) && (r = "leading" in n ? !!n.leading : r, a = "trailing" in n ? !!n.trailing : a), tr(e, t, {
    leading: r,
    maxWait: t,
    trailing: a
  });
}
var or = ar, ir = Object.defineProperty, sr = (e, t, n) => t in e ? ir(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, q = (e, t, n) => (sr(e, typeof t != "symbol" ? t + "" : t, n), n);
function lr(e, t) {
  const n = /* @__PURE__ */ Object.create(null), r = e.split(",");
  for (let a = 0; a < r.length; a++)
    n[r[a]] = !0;
  return t ? (a) => !!n[a.toLowerCase()] : (a) => !!n[a];
}
function wt(e) {
  if ($(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n], a = z(r) ? dr(r) : wt(r);
      if (a)
        for (const o in a)
          t[o] = a[o];
    }
    return t;
  } else if (z(e) || F(e))
    return e;
}
const cr = /;(?![^(]*\))/g, ur = /:(.+)/;
function dr(e) {
  const t = {};
  return e.split(cr).forEach((n) => {
    if (n) {
      const r = n.split(ur);
      r.length > 1 && (t[r[0].trim()] = r[1].trim());
    }
  }), t;
}
function Tt(e) {
  let t = "";
  if (z(e))
    t = e;
  else if ($(e))
    for (let n = 0; n < e.length; n++) {
      const r = Tt(e[n]);
      r && (t += r + " ");
    }
  else if (F(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
function fr(e, t) {
  if (e.length !== t.length)
    return !1;
  let n = !0;
  for (let r = 0; n && r < e.length; r++)
    n = V(e[r], t[r]);
  return n;
}
function V(e, t) {
  if (e === t)
    return !0;
  let n = Je(e), r = Je(t);
  if (n || r)
    return n && r ? e.getTime() === t.getTime() : !1;
  if (n = $(e), r = $(t), n || r)
    return n && r ? fr(e, t) : !1;
  if (n = F(e), r = F(t), n || r) {
    if (!n || !r)
      return !1;
    const a = Object.keys(e).length, o = Object.keys(t).length;
    if (a !== o)
      return !1;
    for (const i in e) {
      const s = e.hasOwnProperty(i), c = t.hasOwnProperty(i);
      if (s && !c || !s && c || !V(e[i], t[i]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function _e(e, t) {
  return e.findIndex((n) => V(n, t));
}
const mr = Object.assign, hr = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, vr = Object.prototype.hasOwnProperty, Ae = (e, t) => vr.call(e, t), $ = Array.isArray, Oe = (e) => _t(e) === "[object Map]", Je = (e) => e instanceof Date, z = (e) => typeof e == "string", Fe = (e) => typeof e == "symbol", F = (e) => e !== null && typeof e == "object", gr = Object.prototype.toString, _t = (e) => gr.call(e), pr = (e) => _t(e).slice(8, -1), Ie = (e) => z(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Ot = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, yr = /-(\w)/g, br = Ot((e) => e.replace(yr, (t, n) => n ? n.toUpperCase() : "")), wr = /\B([A-Z])/g, xt = Ot((e) => e.replace(wr, "-$1").toLowerCase()), Tr = (e, t) => !Object.is(e, t), Ke = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let _r;
function kt(e, t) {
  t = t || _r, t && t.active && t.effects.push(e);
}
const St = (e) => {
  const t = new Set(e);
  return t.w = 0, t.n = 0, t;
}, Ct = (e) => (e.w & I) > 0, Et = (e) => (e.n & I) > 0, Or = ({ deps: e }) => {
  if (e.length)
    for (let t = 0; t < e.length; t++)
      e[t].w |= I;
}, xr = (e) => {
  const { deps: t } = e;
  if (t.length) {
    let n = 0;
    for (let r = 0; r < t.length; r++) {
      const a = t[r];
      Ct(a) && !Et(a) ? a.delete(e) : t[n++] = a, a.w &= ~I, a.n &= ~I;
    }
    t.length = n;
  }
}, Ce = /* @__PURE__ */ new WeakMap();
let ne = 0, I = 1;
const Ee = 30, Z = [];
let G;
const le = Symbol(""), Ze = Symbol("");
class kr {
  constructor(t, n = null, r) {
    this.fn = t, this.scheduler = n, this.active = !0, this.deps = [], kt(this, r);
  }
  run() {
    if (!this.active)
      return this.fn();
    if (!Z.includes(this))
      try {
        return Z.push(G = this), $r(), I = 1 << ++ne, ne <= Ee ? Or(this) : et(this), this.fn();
      } finally {
        ne <= Ee && xr(this), I = 1 << --ne, $t(), Z.pop();
        const t = Z.length;
        G = t > 0 ? Z[t - 1] : void 0;
      }
  }
  stop() {
    this.active && (et(this), this.onStop && this.onStop(), this.active = !1);
  }
}
function et(e) {
  const { deps: t } = e;
  if (t.length) {
    for (let n = 0; n < t.length; n++)
      t[n].delete(e);
    t.length = 0;
  }
}
function Sr(e, t) {
  e.effect && (e = e.effect.fn);
  const n = new kr(e);
  t && (mr(n, t), t.scope && kt(n, t.scope)), (!t || !t.lazy) && n.run();
  const r = n.run.bind(n);
  return r.effect = n, r;
}
function Cr(e) {
  e.effect.stop();
}
let J = !0;
const Be = [];
function Er() {
  Be.push(J), J = !1;
}
function $r() {
  Be.push(J), J = !0;
}
function $t() {
  const e = Be.pop();
  J = e === void 0 ? !0 : e;
}
function ge(e, t, n) {
  if (!Mr())
    return;
  let r = Ce.get(e);
  r || Ce.set(e, r = /* @__PURE__ */ new Map());
  let a = r.get(n);
  a || r.set(n, a = St()), Pr(a);
}
function Mr() {
  return J && G !== void 0;
}
function Pr(e, t) {
  let n = !1;
  ne <= Ee ? Et(e) || (e.n |= I, n = !Ct(e)) : n = !e.has(G), n && (e.add(G), G.deps.push(e));
}
function $e(e, t, n, r, a, o) {
  const i = Ce.get(e);
  if (!i)
    return;
  let s = [];
  if (t === "clear")
    s = [...i.values()];
  else if (n === "length" && $(e))
    i.forEach((c, l) => {
      (l === "length" || l >= r) && s.push(c);
    });
  else
    switch (n !== void 0 && s.push(i.get(n)), t) {
      case "add":
        $(e) ? Ie(n) && s.push(i.get("length")) : (s.push(i.get(le)), Oe(e) && s.push(i.get(Ze)));
        break;
      case "delete":
        $(e) || (s.push(i.get(le)), Oe(e) && s.push(i.get(Ze)));
        break;
      case "set":
        Oe(e) && s.push(i.get(le));
        break;
    }
  if (s.length === 1)
    s[0] && tt(s[0]);
  else {
    const c = [];
    for (const l of s)
      l && c.push(...l);
    tt(St(c));
  }
}
function tt(e, t) {
  for (const n of $(e) ? e : [...e])
    (n !== G || n.allowRecurse) && (n.scheduler ? n.scheduler() : n.run());
}
const Dr = lr("__proto__,__v_isRef,__isVue"), Mt = new Set(Object.getOwnPropertyNames(Symbol).map((e) => Symbol[e]).filter(Fe)), Wr = Pt(), Lr = Pt(!0), nt = Nr();
function Nr() {
  const e = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
    e[t] = function(...n) {
      const r = X(this);
      for (let o = 0, i = this.length; o < i; o++)
        ge(r, "get", o + "");
      const a = r[t](...n);
      return a === -1 || a === !1 ? r[t](...n.map(X)) : a;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
    e[t] = function(...n) {
      Er();
      const r = X(this)[t].apply(this, n);
      return $t(), r;
    };
  }), e;
}
function Pt(e = !1, t = !1) {
  return function(n, r, a) {
    if (r === "__v_isReactive")
      return !e;
    if (r === "__v_isReadonly")
      return e;
    if (r === "__v_raw" && a === (e ? t ? qr : Wt : t ? Br : Dt).get(n))
      return n;
    const o = $(n);
    if (!e && o && Ae(nt, r))
      return Reflect.get(nt, r, a);
    const i = Reflect.get(n, r, a);
    return (Fe(r) ? Mt.has(r) : Dr(r)) || (e || ge(n, "get", r), t) ? i : Me(i) ? !o || !Ie(r) ? i.value : i : F(i) ? e ? Xr(i) : pe(i) : i;
  };
}
const Ur = jr();
function jr(e = !1) {
  return function(t, n, r, a) {
    let o = t[n];
    if (!e && !Qr(r) && (r = X(r), o = X(o), !$(t) && Me(o) && !Me(r)))
      return o.value = r, !0;
    const i = $(t) && Ie(n) ? Number(n) < t.length : Ae(t, n), s = Reflect.set(t, n, r, a);
    return t === X(a) && (i ? Tr(r, o) && $e(t, "set", n, r) : $e(t, "add", n, r)), s;
  };
}
function Rr(e, t) {
  const n = Ae(e, t);
  e[t];
  const r = Reflect.deleteProperty(e, t);
  return r && n && $e(e, "delete", t, void 0), r;
}
function Yr(e, t) {
  const n = Reflect.has(e, t);
  return (!Fe(t) || !Mt.has(t)) && ge(e, "has", t), n;
}
function Ar(e) {
  return ge(e, "iterate", $(e) ? "length" : le), Reflect.ownKeys(e);
}
const Fr = { get: Wr, set: Ur, deleteProperty: Rr, has: Yr, ownKeys: Ar }, Ir = { get: Lr, set(e, t) {
  return !0;
}, deleteProperty(e, t) {
  return !0;
} }, Dt = /* @__PURE__ */ new WeakMap(), Br = /* @__PURE__ */ new WeakMap(), Wt = /* @__PURE__ */ new WeakMap(), qr = /* @__PURE__ */ new WeakMap();
function Hr(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function Gr(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Hr(pr(e));
}
function pe(e) {
  return e && e.__v_isReadonly ? e : Lt(e, !1, Fr, null, Dt);
}
function Xr(e) {
  return Lt(e, !0, Ir, null, Wt);
}
function Lt(e, t, n, r, a) {
  if (!F(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const o = a.get(e);
  if (o)
    return o;
  const i = Gr(e);
  if (i === 0)
    return e;
  const s = new Proxy(e, i === 2 ? r : n);
  return a.set(e, s), s;
}
function Qr(e) {
  return !!(e && e.__v_isReadonly);
}
function X(e) {
  const t = e && e.__v_raw;
  return t ? X(t) : e;
}
function Me(e) {
  return Boolean(e && e.__v_isRef === !0);
}
Promise.resolve();
let Pe = !1;
const de = [], Vr = Promise.resolve(), ye = (e) => Vr.then(e), rt = (e) => {
  de.includes(e) || de.push(e), Pe || (Pe = !0, ye(zr));
}, zr = () => {
  for (const e of de)
    e();
  de.length = 0, Pe = !1;
}, Jr = /^(spellcheck|draggable|form|list|type)$/, De = ({ el: e, get: t, effect: n, arg: r, modifiers: a }) => {
  let o;
  r === "class" && (e._class = e.className), n(() => {
    let i = t();
    if (r)
      a != null && a.camel && (r = br(r)), xe(e, r, i, o);
    else {
      for (const s in i)
        xe(e, s, i[s], o && o[s]);
      for (const s in o)
        (!i || !(s in i)) && xe(e, s, null);
    }
    o = i;
  });
}, xe = (e, t, n, r) => {
  if (t === "class")
    e.setAttribute("class", Tt(e._class ? [e._class, n] : n) || "");
  else if (t === "style") {
    n = wt(n);
    const { style: a } = e;
    if (!n)
      e.removeAttribute("style");
    else if (z(n))
      n !== r && (a.cssText = n);
    else {
      for (const o in n)
        We(a, o, n[o]);
      if (r && !z(r))
        for (const o in r)
          n[o] == null && We(a, o, "");
    }
  } else
    !(e instanceof SVGElement) && t in e && !Jr.test(t) ? (e[t] = n, t === "value" && (e._value = n)) : t === "true-value" ? e._trueValue = n : t === "false-value" ? e._falseValue = n : n != null ? e.setAttribute(t, n) : e.removeAttribute(t);
}, at = /\s*!important$/, We = (e, t, n) => {
  $(n) ? n.forEach((r) => We(e, t, r)) : t.startsWith("--") ? e.setProperty(t, n) : at.test(n) ? e.setProperty(xt(t), n.replace(at, ""), "important") : e[t] = n;
}, A = (e, t) => {
  const n = e.getAttribute(t);
  return n != null && e.removeAttribute(t), n;
}, Y = (e, t, n, r) => {
  e.addEventListener(t, n, r);
}, Kr = /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['[^']*?']|\["[^"]*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*$/, Zr = ["ctrl", "shift", "alt", "meta"], ea = { stop: (e) => e.stopPropagation(), prevent: (e) => e.preventDefault(), self: (e) => e.target !== e.currentTarget, ctrl: (e) => !e.ctrlKey, shift: (e) => !e.shiftKey, alt: (e) => !e.altKey, meta: (e) => !e.metaKey, left: (e) => "button" in e && e.button !== 0, middle: (e) => "button" in e && e.button !== 1, right: (e) => "button" in e && e.button !== 2, exact: (e, t) => Zr.some((n) => e[`${n}Key`] && !t[n]) }, Nt = ({ el: e, get: t, exp: n, arg: r, modifiers: a }) => {
  if (!r)
    return;
  let o = Kr.test(n) ? t(`(e => ${n}(e))`) : t(`($event => { ${n} })`);
  if (r === "vue:mounted") {
    ye(o);
    return;
  } else if (r === "vue:unmounted")
    return () => o();
  if (a) {
    r === "click" && (a.right && (r = "contextmenu"), a.middle && (r = "mouseup"));
    const i = o;
    o = (s) => {
      if (!("key" in s && !(xt(s.key) in a))) {
        for (const c in a) {
          const l = ea[c];
          if (l && l(s, a))
            return;
        }
        return i(s);
      }
    };
  }
  Y(e, r, o, a);
}, ta = ({ el: e, get: t, effect: n }) => {
  const r = e.style.display;
  n(() => {
    e.style.display = t() ? r : "none";
  });
}, Ut = ({ el: e, get: t, effect: n }) => {
  n(() => {
    e.textContent = jt(t());
  });
}, jt = (e) => e == null ? "" : F(e) ? JSON.stringify(e, null, 2) : String(e), na = ({ el: e, get: t, effect: n }) => {
  n(() => {
    e.innerHTML = t();
  });
}, ra = ({ el: e, exp: t, get: n, effect: r, modifiers: a }) => {
  const o = e.type, i = n(`(val) => { ${t} = val }`), { trim: s, number: c = o === "number" } = a || {};
  if (e.tagName === "SELECT") {
    const l = e;
    Y(e, "change", () => {
      const u = Array.prototype.filter.call(l.options, (d) => d.selected).map((d) => c ? Ke(j(d)) : j(d));
      i(l.multiple ? u : u[0]);
    }), r(() => {
      const u = n(), d = l.multiple;
      for (let f = 0, m = l.options.length; f < m; f++) {
        const h = l.options[f], b = j(h);
        if (d)
          $(u) ? h.selected = _e(u, b) > -1 : h.selected = u.has(b);
        else if (V(j(h), u)) {
          l.selectedIndex !== f && (l.selectedIndex = f);
          return;
        }
      }
      !d && l.selectedIndex !== -1 && (l.selectedIndex = -1);
    });
  } else if (o === "checkbox") {
    Y(e, "change", () => {
      const u = n(), d = e.checked;
      if ($(u)) {
        const f = j(e), m = _e(u, f), h = m !== -1;
        if (d && !h)
          i(u.concat(f));
        else if (!d && h) {
          const b = [...u];
          b.splice(m, 1), i(b);
        }
      } else
        i(ot(e, d));
    });
    let l;
    r(() => {
      const u = n();
      $(u) ? e.checked = _e(u, j(e)) > -1 : u !== l && (e.checked = V(u, ot(e, !0))), l = u;
    });
  } else if (o === "radio") {
    Y(e, "change", () => {
      i(j(e));
    });
    let l;
    r(() => {
      const u = n();
      u !== l && (e.checked = V(u, j(e)));
    });
  } else {
    const l = (u) => s ? u.trim() : c ? Ke(u) : u;
    Y(e, "compositionstart", aa), Y(e, "compositionend", oa), Y(e, a != null && a.lazy ? "change" : "input", () => {
      e.composing || i(l(e.value));
    }), s && Y(e, "change", () => {
      e.value = e.value.trim();
    }), r(() => {
      if (e.composing)
        return;
      const u = e.value, d = n();
      document.activeElement === e && l(u) === d || u !== d && (e.value = d);
    });
  }
}, j = (e) => "_value" in e ? e._value : e.value, ot = (e, t) => {
  const n = t ? "_trueValue" : "_falseValue";
  return n in e ? e[n] : t;
}, aa = (e) => {
  e.target.composing = !0;
}, oa = (e) => {
  const t = e.target;
  t.composing && (t.composing = !1, ia(t, "input"));
}, ia = (e, t) => {
  const n = document.createEvent("HTMLEvents");
  n.initEvent(t, !0, !0), e.dispatchEvent(n);
}, it = /* @__PURE__ */ Object.create(null), re = (e, t, n) => Rt(e, `return(${t})`, n), Rt = (e, t, n) => {
  const r = it[t] || (it[t] = sa(t));
  try {
    return r(e, n);
  } catch (a) {
    console.error(a);
  }
}, sa = (e) => {
  try {
    return new Function("$data", "$el", `with($data){${e}}`);
  } catch (t) {
    return console.error(`${t.message} in expression: ${e}`), () => {
    };
  }
}, la = ({ el: e, ctx: t, exp: n, effect: r }) => {
  ye(() => r(() => Rt(t.scope, n, e)));
}, ca = { bind: De, on: Nt, show: ta, text: Ut, html: na, model: ra, effect: la }, ua = (e, t, n) => {
  const r = e.parentElement, a = new Comment("v-if");
  r.insertBefore(a, e);
  const o = [{ exp: t, el: e }];
  let i, s;
  for (; (i = e.nextElementSibling) && (s = null, A(i, "v-else") === "" || (s = A(i, "v-else-if"))); )
    r.removeChild(i), o.push({ exp: s, el: i });
  const c = e.nextSibling;
  r.removeChild(e);
  let l, u = -1;
  const d = () => {
    l && (r.insertBefore(a, l.el), l.remove(), l = void 0);
  };
  return n.effect(() => {
    for (let f = 0; f < o.length; f++) {
      const { exp: m, el: h } = o[f];
      if (!m || re(n.scope, m)) {
        f !== u && (d(), l = new qe(h, n), l.insert(r, a), r.removeChild(a), u = f);
        return;
      }
    }
    u = -1, d();
  }), c;
}, da = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/, st = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/, fa = /^\(|\)$/g, ma = /^[{[]\s*((?:[\w_$]+\s*,?\s*)+)[\]}]$/, ha = (e, t, n) => {
  const r = t.match(da);
  if (!r)
    return;
  const a = e.nextSibling, o = e.parentElement, i = new Text("");
  o.insertBefore(i, e), o.removeChild(e);
  const s = r[2].trim();
  let c = r[1].trim().replace(fa, "").trim(), l, u = !1, d, f, m = "key", h = e.getAttribute(m) || e.getAttribute(m = ":key") || e.getAttribute(m = "v-bind:key");
  h && (e.removeAttribute(m), m === "key" && (h = JSON.stringify(h)));
  let b;
  (b = c.match(st)) && (c = c.replace(st, "").trim(), d = b[1].trim(), b[2] && (f = b[2].trim())), (b = c.match(ma)) && (l = b[1].split(",").map((v) => v.trim()), u = c[0] === "[");
  let x = !1, _, k, C;
  const W = (v) => {
    const O = /* @__PURE__ */ new Map(), y = [];
    if ($(v))
      for (let w = 0; w < v.length; w++)
        y.push(D(O, v[w], w));
    else if (typeof v == "number")
      for (let w = 0; w < v; w++)
        y.push(D(O, w + 1, w));
    else if (F(v)) {
      let w = 0;
      for (const S in v)
        y.push(D(O, v[S], w++, S));
    }
    return [y, O];
  }, D = (v, O, y, w) => {
    const S = {};
    l ? l.forEach((L, T) => S[L] = O[u ? T : L]) : S[c] = O, w ? (d && (S[d] = w), f && (S[f] = y)) : d && (S[d] = y);
    const N = It(n, S), M = h ? re(N.scope, h) : y;
    return v.set(M, y), N.key = M, N;
  }, g = (v, O) => {
    const y = new qe(e, v);
    return y.key = v.key, y.insert(o, O), y;
  };
  return n.effect(() => {
    const v = re(n.scope, s), O = C;
    if ([k, C] = W(v), !x)
      _ = k.map((y) => g(y, i)), x = !0;
    else {
      for (let M = 0; M < _.length; M++)
        C.has(_[M].key) || _[M].remove();
      const y = [];
      let w = k.length, S, N;
      for (; w--; ) {
        const M = k[w], L = O.get(M.key);
        let T;
        L == null ? T = g(M, S ? S.el : i) : (T = _[L], Object.assign(T.ctx.scope, M.scope), L !== w && (_[L + 1] !== S || N === S) && (N = T, T.insert(o, S ? S.el : i))), y.unshift(S = T);
      }
      _ = y;
    }
  }), a;
}, Yt = ({ el: e, ctx: { scope: { $refs: t } }, get: n, effect: r }) => {
  let a;
  return r(() => {
    const o = n();
    t[o] = e, a && o !== a && delete t[a], a = o;
  }), () => {
    a && delete t[a];
  };
}, va = /^(?:v-|:|@)/, ga = /\.([\w-]+)/g;
let Le = !1;
const At = (e, t) => {
  const n = e.nodeType;
  if (n === 1) {
    const r = e;
    if (r.hasAttribute("v-pre"))
      return;
    A(r, "v-cloak");
    let a;
    if (a = A(r, "v-if"))
      return ua(r, a, t);
    if (a = A(r, "v-for"))
      return ha(r, a, t);
    if ((a = A(r, "v-scope")) || a === "") {
      const s = a ? re(t.scope, a) : {};
      t = It(t, s), s.$template && pa(r, s.$template);
    }
    const o = A(r, "v-once") != null;
    o && (Le = !0), (a = A(r, "ref")) && Ne(r, Yt, `"${a}"`, t), lt(r, t);
    const i = [];
    for (const { name: s, value: c } of [...r.attributes])
      va.test(s) && s !== "v-cloak" && (s === "v-model" ? i.unshift([s, c]) : s[0] === "@" || /^v-on\b/.test(s) ? i.push([s, c]) : ct(r, s, c, t));
    for (const [s, c] of i)
      ct(r, s, c, t);
    o && (Le = !1);
  } else if (n === 3) {
    const r = e.data;
    if (r.includes(t.delimiters[0])) {
      let a = [], o = 0, i;
      for (; i = t.delimitersRE.exec(r); ) {
        const s = r.slice(o, i.index);
        s && a.push(JSON.stringify(s)), a.push(`$s(${i[1]})`), o = i.index + i[0].length;
      }
      o < r.length && a.push(JSON.stringify(r.slice(o))), Ne(e, Ut, a.join("+"), t);
    }
  } else
    n === 11 && lt(e, t);
}, lt = (e, t) => {
  let n = e.firstChild;
  for (; n; )
    n = At(n, t) || n.nextSibling;
}, ct = (e, t, n, r) => {
  let a, o, i;
  if (t = t.replace(ga, (s, c) => ((i || (i = {}))[c] = !0, "")), t[0] === ":")
    a = De, o = t.slice(1);
  else if (t[0] === "@")
    a = Nt, o = t.slice(1);
  else {
    const s = t.indexOf(":"), c = s > 0 ? t.slice(2, s) : t.slice(2);
    a = ca[c] || r.dirs[c], o = s > 0 ? t.slice(s + 1) : void 0;
  }
  a && (a === De && o === "ref" && (a = Yt), Ne(e, a, n, r, o, i), e.removeAttribute(t));
}, Ne = (e, t, n, r, a, o) => {
  const i = t({ el: e, get: (s = n) => re(r.scope, s, e), effect: r.effect, ctx: r, exp: n, arg: a, modifiers: o });
  i && r.cleanups.push(i);
}, pa = (e, t) => {
  if (t[0] === "#") {
    const n = document.querySelector(t);
    e.appendChild(n.content.cloneNode(!0));
    return;
  }
  e.innerHTML = t;
}, Ft = (e) => {
  const t = { delimiters: ["{{", "}}"], delimitersRE: /\{\{([^]+?)\}\}/g, ...e, scope: e ? e.scope : pe({}), dirs: e ? e.dirs : {}, effects: [], blocks: [], cleanups: [], effect: (n) => {
    if (Le)
      return rt(n), n;
    const r = Sr(n, { scheduler: () => rt(r) });
    return t.effects.push(r), r;
  } };
  return t;
}, It = (e, t = {}) => {
  const n = e.scope, r = Object.create(n);
  Object.defineProperties(r, Object.getOwnPropertyDescriptors(t)), r.$refs = Object.create(n.$refs);
  const a = pe(new Proxy(r, { set(o, i, s, c) {
    return c === a && !o.hasOwnProperty(i) ? Reflect.set(n, i, s) : Reflect.set(o, i, s, c);
  } }));
  return Bt(a), { ...e, scope: a };
}, Bt = (e) => {
  for (const t of Object.keys(e))
    typeof e[t] == "function" && (e[t] = e[t].bind(e));
};
class qe {
  constructor(t, n, r = !1) {
    q(this, "template"), q(this, "ctx"), q(this, "key"), q(this, "parentCtx"), q(this, "isFragment"), q(this, "start"), q(this, "end"), this.isFragment = t instanceof HTMLTemplateElement, r ? this.template = t : this.isFragment ? this.template = t.content.cloneNode(!0) : this.template = t.cloneNode(!0), r ? this.ctx = n : (this.parentCtx = n, n.blocks.push(this), this.ctx = Ft(n)), At(this.template, this.ctx);
  }
  get el() {
    return this.start || this.template;
  }
  insert(t, n = null) {
    if (this.isFragment)
      if (this.start) {
        let r = this.start, a;
        for (; r && (a = r.nextSibling, t.insertBefore(r, n), r !== this.end); )
          r = a;
      } else
        this.start = new Text(""), this.end = new Text(""), t.insertBefore(this.end, n), t.insertBefore(this.start, this.end), t.insertBefore(this.template, this.end);
    else
      t.insertBefore(this.template, n);
  }
  remove() {
    if (this.parentCtx && hr(this.parentCtx.blocks, this), this.start) {
      const t = this.start.parentNode;
      let n = this.start, r;
      for (; n && (r = n.nextSibling, t.removeChild(n), n !== this.end); )
        n = r;
    } else
      this.template.parentNode.removeChild(this.template);
    this.teardown();
  }
  teardown() {
    this.ctx.blocks.forEach((t) => {
      t.teardown();
    }), this.ctx.effects.forEach(Cr), this.ctx.cleanups.forEach((t) => t());
  }
}
const ut = (e) => e.replace(/[-.*+?^${}()|[\]\/\\]/g, "\\$&"), qt = (e) => {
  const t = Ft();
  if (e && (t.scope = pe(e), Bt(t.scope), e.$delimiters)) {
    const [r, a] = t.delimiters = e.$delimiters;
    t.delimitersRE = new RegExp(ut(r) + "([^]+?)" + ut(a), "g");
  }
  t.scope.$s = jt, t.scope.$nextTick = ye, t.scope.$refs = /* @__PURE__ */ Object.create(null);
  let n;
  return { directive(r, a) {
    return a ? (t.dirs[r] = a, this) : t.dirs[r];
  }, mount(r) {
    if (typeof r == "string" && (r = document.querySelector(r), !r))
      return;
    r = r || document.documentElement;
    let a;
    return r.hasAttribute("v-scope") ? a = [r] : a = [...r.querySelectorAll("[v-scope]")].filter((o) => !o.matches("[v-scope] [v-scope]")), a.length || (a = [r]), n = a.map((o) => new qe(o, t, !0)), this;
  }, unmount() {
    n.forEach((r) => r.teardown());
  } };
}, dt = document.currentScript;
dt && dt.hasAttribute("init") && qt().mount();
const Ht = {
  BASE_URL: "http://localhost:3000"
}, ya = `
	<div class="gthr-tooltip">
		<div
			contenteditable
			role="textbox"
			class="gthr-tooltip__input"
			id="gthr-action-input"
		></div>
		<p class="gthr-tooltip__placeholder">Add a comment</p>

		<div class="gthr-tooltip__actions">
			<button type="button" id="gthr-action-cancel" class="gthr-tooltip__action gthr-tooltip__action--secondary">
				Cancel
			</button>

			<button type="button" id="gthr-action-post" class="gthr-tooltip__action gthr-tooltip__action--primary">
				Post
			</button>
		</div>
	</div>
`;
var ba = {};
function oe() {
  return ba;
}
function ae(e) {
  var t = new Date(Date.UTC(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()));
  return t.setUTCFullYear(e.getFullYear()), e.getTime() - t.getTime();
}
function E(e, t) {
  if (t.length < e)
    throw new TypeError(e + " argument" + (e > 1 ? "s" : "") + " required, but only " + t.length + " present");
}
function ce(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? ce = function(n) {
    return typeof n;
  } : ce = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, ce(e);
}
function P(e) {
  E(1, arguments);
  var t = Object.prototype.toString.call(e);
  return e instanceof Date || ce(e) === "object" && t === "[object Date]" ? new Date(e.getTime()) : typeof e == "number" || t === "[object Number]" ? new Date(e) : ((typeof e == "string" || t === "[object String]") && typeof console < "u" && (console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"), console.warn(new Error().stack)), new Date(NaN));
}
function ft(e) {
  E(1, arguments);
  var t = P(e);
  return t.setHours(0, 0, 0, 0), t;
}
var wa = 864e5;
function Ta(e, t) {
  E(2, arguments);
  var n = ft(e), r = ft(t), a = n.getTime() - ae(n), o = r.getTime() - ae(r);
  return Math.round((a - o) / wa);
}
function ue(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? ue = function(n) {
    return typeof n;
  } : ue = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, ue(e);
}
function _a(e) {
  return E(1, arguments), e instanceof Date || ue(e) === "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function Oa(e) {
  if (E(1, arguments), !_a(e) && typeof e != "number")
    return !1;
  var t = P(e);
  return !isNaN(Number(t));
}
function B(e) {
  if (e === null || e === !0 || e === !1)
    return NaN;
  var t = Number(e);
  return isNaN(t) ? t : t < 0 ? Math.ceil(t) : Math.floor(t);
}
function xa(e, t) {
  E(2, arguments);
  var n = P(e).getTime(), r = B(t);
  return new Date(n + r);
}
function Ue(e, t) {
  E(2, arguments);
  var n = B(t);
  return xa(e, -n);
}
var ka = 864e5;
function Sa(e) {
  E(1, arguments);
  var t = P(e), n = t.getTime();
  t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
  var r = t.getTime(), a = n - r;
  return Math.floor(a / ka) + 1;
}
function fe(e) {
  E(1, arguments);
  var t = 1, n = P(e), r = n.getUTCDay(), a = (r < t ? 7 : 0) + r - t;
  return n.setUTCDate(n.getUTCDate() - a), n.setUTCHours(0, 0, 0, 0), n;
}
function Gt(e) {
  E(1, arguments);
  var t = P(e), n = t.getUTCFullYear(), r = new Date(0);
  r.setUTCFullYear(n + 1, 0, 4), r.setUTCHours(0, 0, 0, 0);
  var a = fe(r), o = new Date(0);
  o.setUTCFullYear(n, 0, 4), o.setUTCHours(0, 0, 0, 0);
  var i = fe(o);
  return t.getTime() >= a.getTime() ? n + 1 : t.getTime() >= i.getTime() ? n : n - 1;
}
function Ca(e) {
  E(1, arguments);
  var t = Gt(e), n = new Date(0);
  n.setUTCFullYear(t, 0, 4), n.setUTCHours(0, 0, 0, 0);
  var r = fe(n);
  return r;
}
var Ea = 6048e5;
function $a(e) {
  E(1, arguments);
  var t = P(e), n = fe(t).getTime() - Ca(t).getTime();
  return Math.round(n / Ea) + 1;
}
function me(e, t) {
  var n, r, a, o, i, s, c, l;
  E(1, arguments);
  var u = oe(), d = B((n = (r = (a = (o = t == null ? void 0 : t.weekStartsOn) !== null && o !== void 0 ? o : t == null || (i = t.locale) === null || i === void 0 || (s = i.options) === null || s === void 0 ? void 0 : s.weekStartsOn) !== null && a !== void 0 ? a : u.weekStartsOn) !== null && r !== void 0 ? r : (c = u.locale) === null || c === void 0 || (l = c.options) === null || l === void 0 ? void 0 : l.weekStartsOn) !== null && n !== void 0 ? n : 0);
  if (!(d >= 0 && d <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var f = P(e), m = f.getUTCDay(), h = (m < d ? 7 : 0) + m - d;
  return f.setUTCDate(f.getUTCDate() - h), f.setUTCHours(0, 0, 0, 0), f;
}
function Xt(e, t) {
  var n, r, a, o, i, s, c, l;
  E(1, arguments);
  var u = P(e), d = u.getUTCFullYear(), f = oe(), m = B((n = (r = (a = (o = t == null ? void 0 : t.firstWeekContainsDate) !== null && o !== void 0 ? o : t == null || (i = t.locale) === null || i === void 0 || (s = i.options) === null || s === void 0 ? void 0 : s.firstWeekContainsDate) !== null && a !== void 0 ? a : f.firstWeekContainsDate) !== null && r !== void 0 ? r : (c = f.locale) === null || c === void 0 || (l = c.options) === null || l === void 0 ? void 0 : l.firstWeekContainsDate) !== null && n !== void 0 ? n : 1);
  if (!(m >= 1 && m <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var h = new Date(0);
  h.setUTCFullYear(d + 1, 0, m), h.setUTCHours(0, 0, 0, 0);
  var b = me(h, t), x = new Date(0);
  x.setUTCFullYear(d, 0, m), x.setUTCHours(0, 0, 0, 0);
  var _ = me(x, t);
  return u.getTime() >= b.getTime() ? d + 1 : u.getTime() >= _.getTime() ? d : d - 1;
}
function Ma(e, t) {
  var n, r, a, o, i, s, c, l;
  E(1, arguments);
  var u = oe(), d = B((n = (r = (a = (o = t == null ? void 0 : t.firstWeekContainsDate) !== null && o !== void 0 ? o : t == null || (i = t.locale) === null || i === void 0 || (s = i.options) === null || s === void 0 ? void 0 : s.firstWeekContainsDate) !== null && a !== void 0 ? a : u.firstWeekContainsDate) !== null && r !== void 0 ? r : (c = u.locale) === null || c === void 0 || (l = c.options) === null || l === void 0 ? void 0 : l.firstWeekContainsDate) !== null && n !== void 0 ? n : 1), f = Xt(e, t), m = new Date(0);
  m.setUTCFullYear(f, 0, d), m.setUTCHours(0, 0, 0, 0);
  var h = me(m, t);
  return h;
}
var Pa = 6048e5;
function Da(e, t) {
  E(1, arguments);
  var n = P(e), r = me(n, t).getTime() - Ma(n, t).getTime();
  return Math.round(r / Pa) + 1;
}
function p(e, t) {
  for (var n = e < 0 ? "-" : "", r = Math.abs(e).toString(); r.length < t; )
    r = "0" + r;
  return n + r;
}
var Wa = {
  y: function(t, n) {
    var r = t.getUTCFullYear(), a = r > 0 ? r : 1 - r;
    return p(n === "yy" ? a % 100 : a, n.length);
  },
  M: function(t, n) {
    var r = t.getUTCMonth();
    return n === "M" ? String(r + 1) : p(r + 1, 2);
  },
  d: function(t, n) {
    return p(t.getUTCDate(), n.length);
  },
  a: function(t, n) {
    var r = t.getUTCHours() / 12 >= 1 ? "pm" : "am";
    switch (n) {
      case "a":
      case "aa":
        return r.toUpperCase();
      case "aaa":
        return r;
      case "aaaaa":
        return r[0];
      case "aaaa":
      default:
        return r === "am" ? "a.m." : "p.m.";
    }
  },
  h: function(t, n) {
    return p(t.getUTCHours() % 12 || 12, n.length);
  },
  H: function(t, n) {
    return p(t.getUTCHours(), n.length);
  },
  m: function(t, n) {
    return p(t.getUTCMinutes(), n.length);
  },
  s: function(t, n) {
    return p(t.getUTCSeconds(), n.length);
  },
  S: function(t, n) {
    var r = n.length, a = t.getUTCMilliseconds(), o = Math.floor(a * Math.pow(10, r - 3));
    return p(o, n.length);
  }
};
const R = Wa;
var Q = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, La = {
  G: function(t, n, r) {
    var a = t.getUTCFullYear() > 0 ? 1 : 0;
    switch (n) {
      case "G":
      case "GG":
      case "GGG":
        return r.era(a, {
          width: "abbreviated"
        });
      case "GGGGG":
        return r.era(a, {
          width: "narrow"
        });
      case "GGGG":
      default:
        return r.era(a, {
          width: "wide"
        });
    }
  },
  y: function(t, n, r) {
    if (n === "yo") {
      var a = t.getUTCFullYear(), o = a > 0 ? a : 1 - a;
      return r.ordinalNumber(o, {
        unit: "year"
      });
    }
    return R.y(t, n);
  },
  Y: function(t, n, r, a) {
    var o = Xt(t, a), i = o > 0 ? o : 1 - o;
    if (n === "YY") {
      var s = i % 100;
      return p(s, 2);
    }
    return n === "Yo" ? r.ordinalNumber(i, {
      unit: "year"
    }) : p(i, n.length);
  },
  R: function(t, n) {
    var r = Gt(t);
    return p(r, n.length);
  },
  u: function(t, n) {
    var r = t.getUTCFullYear();
    return p(r, n.length);
  },
  Q: function(t, n, r) {
    var a = Math.ceil((t.getUTCMonth() + 1) / 3);
    switch (n) {
      case "Q":
        return String(a);
      case "QQ":
        return p(a, 2);
      case "Qo":
        return r.ordinalNumber(a, {
          unit: "quarter"
        });
      case "QQQ":
        return r.quarter(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "QQQQQ":
        return r.quarter(a, {
          width: "narrow",
          context: "formatting"
        });
      case "QQQQ":
      default:
        return r.quarter(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  q: function(t, n, r) {
    var a = Math.ceil((t.getUTCMonth() + 1) / 3);
    switch (n) {
      case "q":
        return String(a);
      case "qq":
        return p(a, 2);
      case "qo":
        return r.ordinalNumber(a, {
          unit: "quarter"
        });
      case "qqq":
        return r.quarter(a, {
          width: "abbreviated",
          context: "standalone"
        });
      case "qqqqq":
        return r.quarter(a, {
          width: "narrow",
          context: "standalone"
        });
      case "qqqq":
      default:
        return r.quarter(a, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  M: function(t, n, r) {
    var a = t.getUTCMonth();
    switch (n) {
      case "M":
      case "MM":
        return R.M(t, n);
      case "Mo":
        return r.ordinalNumber(a + 1, {
          unit: "month"
        });
      case "MMM":
        return r.month(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "MMMMM":
        return r.month(a, {
          width: "narrow",
          context: "formatting"
        });
      case "MMMM":
      default:
        return r.month(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  L: function(t, n, r) {
    var a = t.getUTCMonth();
    switch (n) {
      case "L":
        return String(a + 1);
      case "LL":
        return p(a + 1, 2);
      case "Lo":
        return r.ordinalNumber(a + 1, {
          unit: "month"
        });
      case "LLL":
        return r.month(a, {
          width: "abbreviated",
          context: "standalone"
        });
      case "LLLLL":
        return r.month(a, {
          width: "narrow",
          context: "standalone"
        });
      case "LLLL":
      default:
        return r.month(a, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  w: function(t, n, r, a) {
    var o = Da(t, a);
    return n === "wo" ? r.ordinalNumber(o, {
      unit: "week"
    }) : p(o, n.length);
  },
  I: function(t, n, r) {
    var a = $a(t);
    return n === "Io" ? r.ordinalNumber(a, {
      unit: "week"
    }) : p(a, n.length);
  },
  d: function(t, n, r) {
    return n === "do" ? r.ordinalNumber(t.getUTCDate(), {
      unit: "date"
    }) : R.d(t, n);
  },
  D: function(t, n, r) {
    var a = Sa(t);
    return n === "Do" ? r.ordinalNumber(a, {
      unit: "dayOfYear"
    }) : p(a, n.length);
  },
  E: function(t, n, r) {
    var a = t.getUTCDay();
    switch (n) {
      case "E":
      case "EE":
      case "EEE":
        return r.day(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "EEEEE":
        return r.day(a, {
          width: "narrow",
          context: "formatting"
        });
      case "EEEEEE":
        return r.day(a, {
          width: "short",
          context: "formatting"
        });
      case "EEEE":
      default:
        return r.day(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  e: function(t, n, r, a) {
    var o = t.getUTCDay(), i = (o - a.weekStartsOn + 8) % 7 || 7;
    switch (n) {
      case "e":
        return String(i);
      case "ee":
        return p(i, 2);
      case "eo":
        return r.ordinalNumber(i, {
          unit: "day"
        });
      case "eee":
        return r.day(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "eeeee":
        return r.day(o, {
          width: "narrow",
          context: "formatting"
        });
      case "eeeeee":
        return r.day(o, {
          width: "short",
          context: "formatting"
        });
      case "eeee":
      default:
        return r.day(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  c: function(t, n, r, a) {
    var o = t.getUTCDay(), i = (o - a.weekStartsOn + 8) % 7 || 7;
    switch (n) {
      case "c":
        return String(i);
      case "cc":
        return p(i, n.length);
      case "co":
        return r.ordinalNumber(i, {
          unit: "day"
        });
      case "ccc":
        return r.day(o, {
          width: "abbreviated",
          context: "standalone"
        });
      case "ccccc":
        return r.day(o, {
          width: "narrow",
          context: "standalone"
        });
      case "cccccc":
        return r.day(o, {
          width: "short",
          context: "standalone"
        });
      case "cccc":
      default:
        return r.day(o, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  i: function(t, n, r) {
    var a = t.getUTCDay(), o = a === 0 ? 7 : a;
    switch (n) {
      case "i":
        return String(o);
      case "ii":
        return p(o, n.length);
      case "io":
        return r.ordinalNumber(o, {
          unit: "day"
        });
      case "iii":
        return r.day(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "iiiii":
        return r.day(a, {
          width: "narrow",
          context: "formatting"
        });
      case "iiiiii":
        return r.day(a, {
          width: "short",
          context: "formatting"
        });
      case "iiii":
      default:
        return r.day(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  a: function(t, n, r) {
    var a = t.getUTCHours(), o = a / 12 >= 1 ? "pm" : "am";
    switch (n) {
      case "a":
      case "aa":
        return r.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return r.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return r.dayPeriod(o, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return r.dayPeriod(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  b: function(t, n, r) {
    var a = t.getUTCHours(), o;
    switch (a === 12 ? o = Q.noon : a === 0 ? o = Q.midnight : o = a / 12 >= 1 ? "pm" : "am", n) {
      case "b":
      case "bb":
        return r.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return r.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return r.dayPeriod(o, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return r.dayPeriod(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  B: function(t, n, r) {
    var a = t.getUTCHours(), o;
    switch (a >= 17 ? o = Q.evening : a >= 12 ? o = Q.afternoon : a >= 4 ? o = Q.morning : o = Q.night, n) {
      case "B":
      case "BB":
      case "BBB":
        return r.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return r.dayPeriod(o, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return r.dayPeriod(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  h: function(t, n, r) {
    if (n === "ho") {
      var a = t.getUTCHours() % 12;
      return a === 0 && (a = 12), r.ordinalNumber(a, {
        unit: "hour"
      });
    }
    return R.h(t, n);
  },
  H: function(t, n, r) {
    return n === "Ho" ? r.ordinalNumber(t.getUTCHours(), {
      unit: "hour"
    }) : R.H(t, n);
  },
  K: function(t, n, r) {
    var a = t.getUTCHours() % 12;
    return n === "Ko" ? r.ordinalNumber(a, {
      unit: "hour"
    }) : p(a, n.length);
  },
  k: function(t, n, r) {
    var a = t.getUTCHours();
    return a === 0 && (a = 24), n === "ko" ? r.ordinalNumber(a, {
      unit: "hour"
    }) : p(a, n.length);
  },
  m: function(t, n, r) {
    return n === "mo" ? r.ordinalNumber(t.getUTCMinutes(), {
      unit: "minute"
    }) : R.m(t, n);
  },
  s: function(t, n, r) {
    return n === "so" ? r.ordinalNumber(t.getUTCSeconds(), {
      unit: "second"
    }) : R.s(t, n);
  },
  S: function(t, n) {
    return R.S(t, n);
  },
  X: function(t, n, r, a) {
    var o = a._originalDate || t, i = o.getTimezoneOffset();
    if (i === 0)
      return "Z";
    switch (n) {
      case "X":
        return ht(i);
      case "XXXX":
      case "XX":
        return H(i);
      case "XXXXX":
      case "XXX":
      default:
        return H(i, ":");
    }
  },
  x: function(t, n, r, a) {
    var o = a._originalDate || t, i = o.getTimezoneOffset();
    switch (n) {
      case "x":
        return ht(i);
      case "xxxx":
      case "xx":
        return H(i);
      case "xxxxx":
      case "xxx":
      default:
        return H(i, ":");
    }
  },
  O: function(t, n, r, a) {
    var o = a._originalDate || t, i = o.getTimezoneOffset();
    switch (n) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + mt(i, ":");
      case "OOOO":
      default:
        return "GMT" + H(i, ":");
    }
  },
  z: function(t, n, r, a) {
    var o = a._originalDate || t, i = o.getTimezoneOffset();
    switch (n) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + mt(i, ":");
      case "zzzz":
      default:
        return "GMT" + H(i, ":");
    }
  },
  t: function(t, n, r, a) {
    var o = a._originalDate || t, i = Math.floor(o.getTime() / 1e3);
    return p(i, n.length);
  },
  T: function(t, n, r, a) {
    var o = a._originalDate || t, i = o.getTime();
    return p(i, n.length);
  }
};
function mt(e, t) {
  var n = e > 0 ? "-" : "+", r = Math.abs(e), a = Math.floor(r / 60), o = r % 60;
  if (o === 0)
    return n + String(a);
  var i = t || "";
  return n + String(a) + i + p(o, 2);
}
function ht(e, t) {
  if (e % 60 === 0) {
    var n = e > 0 ? "-" : "+";
    return n + p(Math.abs(e) / 60, 2);
  }
  return H(e, t);
}
function H(e, t) {
  var n = t || "", r = e > 0 ? "-" : "+", a = Math.abs(e), o = p(Math.floor(a / 60), 2), i = p(a % 60, 2);
  return r + o + n + i;
}
const Na = La;
var vt = function(t, n) {
  switch (t) {
    case "P":
      return n.date({
        width: "short"
      });
    case "PP":
      return n.date({
        width: "medium"
      });
    case "PPP":
      return n.date({
        width: "long"
      });
    case "PPPP":
    default:
      return n.date({
        width: "full"
      });
  }
}, Qt = function(t, n) {
  switch (t) {
    case "p":
      return n.time({
        width: "short"
      });
    case "pp":
      return n.time({
        width: "medium"
      });
    case "ppp":
      return n.time({
        width: "long"
      });
    case "pppp":
    default:
      return n.time({
        width: "full"
      });
  }
}, Ua = function(t, n) {
  var r = t.match(/(P+)(p+)?/) || [], a = r[1], o = r[2];
  if (!o)
    return vt(t, n);
  var i;
  switch (a) {
    case "P":
      i = n.dateTime({
        width: "short"
      });
      break;
    case "PP":
      i = n.dateTime({
        width: "medium"
      });
      break;
    case "PPP":
      i = n.dateTime({
        width: "long"
      });
      break;
    case "PPPP":
    default:
      i = n.dateTime({
        width: "full"
      });
      break;
  }
  return i.replace("{{date}}", vt(a, n)).replace("{{time}}", Qt(o, n));
}, ja = {
  p: Qt,
  P: Ua
};
const Ra = ja;
var Ya = ["D", "DD"], Aa = ["YY", "YYYY"];
function Fa(e) {
  return Ya.indexOf(e) !== -1;
}
function Ia(e) {
  return Aa.indexOf(e) !== -1;
}
function gt(e, t, n) {
  if (e === "YYYY")
    throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(t, "`) for formatting years to the input `").concat(n, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (e === "YY")
    throw new RangeError("Use `yy` instead of `YY` (in `".concat(t, "`) for formatting years to the input `").concat(n, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (e === "D")
    throw new RangeError("Use `d` instead of `D` (in `".concat(t, "`) for formatting days of the month to the input `").concat(n, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (e === "DD")
    throw new RangeError("Use `dd` instead of `DD` (in `".concat(t, "`) for formatting days of the month to the input `").concat(n, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
}
var Ba = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds"
  },
  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds"
  },
  halfAMinute: "half a minute",
  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes"
  },
  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes"
  },
  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours"
  },
  xHours: {
    one: "1 hour",
    other: "{{count}} hours"
  },
  xDays: {
    one: "1 day",
    other: "{{count}} days"
  },
  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks"
  },
  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks"
  },
  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months"
  },
  xMonths: {
    one: "1 month",
    other: "{{count}} months"
  },
  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years"
  },
  xYears: {
    one: "1 year",
    other: "{{count}} years"
  },
  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years"
  },
  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years"
  }
}, qa = function(t, n, r) {
  var a, o = Ba[t];
  return typeof o == "string" ? a = o : n === 1 ? a = o.one : a = o.other.replace("{{count}}", n.toString()), r != null && r.addSuffix ? r.comparison && r.comparison > 0 ? "in " + a : a + " ago" : a;
};
const Ha = qa;
function ke(e) {
  return function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = t.width ? String(t.width) : e.defaultWidth, r = e.formats[n] || e.formats[e.defaultWidth];
    return r;
  };
}
var Ga = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, Xa = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, Qa = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, Va = {
  date: ke({
    formats: Ga,
    defaultWidth: "full"
  }),
  time: ke({
    formats: Xa,
    defaultWidth: "full"
  }),
  dateTime: ke({
    formats: Qa,
    defaultWidth: "full"
  })
};
const za = Va;
var Ja = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, Ka = function(t, n, r, a) {
  return Ja[t];
};
const Za = Ka;
function ee(e) {
  return function(t, n) {
    var r = n != null && n.context ? String(n.context) : "standalone", a;
    if (r === "formatting" && e.formattingValues) {
      var o = e.defaultFormattingWidth || e.defaultWidth, i = n != null && n.width ? String(n.width) : o;
      a = e.formattingValues[i] || e.formattingValues[o];
    } else {
      var s = e.defaultWidth, c = n != null && n.width ? String(n.width) : e.defaultWidth;
      a = e.values[c] || e.values[s];
    }
    var l = e.argumentCallback ? e.argumentCallback(t) : t;
    return a[l];
  };
}
var eo = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, to = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, no = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
}, ro = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
}, ao = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  }
}, oo = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  }
}, io = function(t, n) {
  var r = Number(t), a = r % 100;
  if (a > 20 || a < 10)
    switch (a % 10) {
      case 1:
        return r + "st";
      case 2:
        return r + "nd";
      case 3:
        return r + "rd";
    }
  return r + "th";
}, so = {
  ordinalNumber: io,
  era: ee({
    values: eo,
    defaultWidth: "wide"
  }),
  quarter: ee({
    values: to,
    defaultWidth: "wide",
    argumentCallback: function(t) {
      return t - 1;
    }
  }),
  month: ee({
    values: no,
    defaultWidth: "wide"
  }),
  day: ee({
    values: ro,
    defaultWidth: "wide"
  }),
  dayPeriod: ee({
    values: ao,
    defaultWidth: "wide",
    formattingValues: oo,
    defaultFormattingWidth: "wide"
  })
};
const lo = so;
function te(e) {
  return function(t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = n.width, a = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], o = t.match(a);
    if (!o)
      return null;
    var i = o[0], s = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], c = Array.isArray(s) ? uo(s, function(d) {
      return d.test(i);
    }) : co(s, function(d) {
      return d.test(i);
    }), l;
    l = e.valueCallback ? e.valueCallback(c) : c, l = n.valueCallback ? n.valueCallback(l) : l;
    var u = t.slice(i.length);
    return {
      value: l,
      rest: u
    };
  };
}
function co(e, t) {
  for (var n in e)
    if (e.hasOwnProperty(n) && t(e[n]))
      return n;
}
function uo(e, t) {
  for (var n = 0; n < e.length; n++)
    if (t(e[n]))
      return n;
}
function fo(e) {
  return function(t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = t.match(e.matchPattern);
    if (!r)
      return null;
    var a = r[0], o = t.match(e.parsePattern);
    if (!o)
      return null;
    var i = e.valueCallback ? e.valueCallback(o[0]) : o[0];
    i = n.valueCallback ? n.valueCallback(i) : i;
    var s = t.slice(a.length);
    return {
      value: i,
      rest: s
    };
  };
}
var mo = /^(\d+)(th|st|nd|rd)?/i, ho = /\d+/i, vo = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, go = {
  any: [/^b/i, /^(a|c)/i]
}, po = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, yo = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, bo = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, wo = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
}, To = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, _o = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, Oo = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, xo = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
}, ko = {
  ordinalNumber: fo({
    matchPattern: mo,
    parsePattern: ho,
    valueCallback: function(t) {
      return parseInt(t, 10);
    }
  }),
  era: te({
    matchPatterns: vo,
    defaultMatchWidth: "wide",
    parsePatterns: go,
    defaultParseWidth: "any"
  }),
  quarter: te({
    matchPatterns: po,
    defaultMatchWidth: "wide",
    parsePatterns: yo,
    defaultParseWidth: "any",
    valueCallback: function(t) {
      return t + 1;
    }
  }),
  month: te({
    matchPatterns: bo,
    defaultMatchWidth: "wide",
    parsePatterns: wo,
    defaultParseWidth: "any"
  }),
  day: te({
    matchPatterns: To,
    defaultMatchWidth: "wide",
    parsePatterns: _o,
    defaultParseWidth: "any"
  }),
  dayPeriod: te({
    matchPatterns: Oo,
    defaultMatchWidth: "any",
    parsePatterns: xo,
    defaultParseWidth: "any"
  })
};
const So = ko;
var Co = {
  code: "en-US",
  formatDistance: Ha,
  formatLong: za,
  formatRelative: Za,
  localize: lo,
  match: So,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
const Vt = Co;
var Eo = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, $o = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, Mo = /^'([^]*?)'?$/, Po = /''/g, Do = /[a-zA-Z]/;
function Wo(e, t, n) {
  var r, a, o, i, s, c, l, u, d, f, m, h, b, x, _, k, C, W;
  E(2, arguments);
  var D = String(t), g = oe(), v = (r = (a = n == null ? void 0 : n.locale) !== null && a !== void 0 ? a : g.locale) !== null && r !== void 0 ? r : Vt, O = B((o = (i = (s = (c = n == null ? void 0 : n.firstWeekContainsDate) !== null && c !== void 0 ? c : n == null || (l = n.locale) === null || l === void 0 || (u = l.options) === null || u === void 0 ? void 0 : u.firstWeekContainsDate) !== null && s !== void 0 ? s : g.firstWeekContainsDate) !== null && i !== void 0 ? i : (d = g.locale) === null || d === void 0 || (f = d.options) === null || f === void 0 ? void 0 : f.firstWeekContainsDate) !== null && o !== void 0 ? o : 1);
  if (!(O >= 1 && O <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var y = B((m = (h = (b = (x = n == null ? void 0 : n.weekStartsOn) !== null && x !== void 0 ? x : n == null || (_ = n.locale) === null || _ === void 0 || (k = _.options) === null || k === void 0 ? void 0 : k.weekStartsOn) !== null && b !== void 0 ? b : g.weekStartsOn) !== null && h !== void 0 ? h : (C = g.locale) === null || C === void 0 || (W = C.options) === null || W === void 0 ? void 0 : W.weekStartsOn) !== null && m !== void 0 ? m : 0);
  if (!(y >= 0 && y <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  if (!v.localize)
    throw new RangeError("locale must contain localize property");
  if (!v.formatLong)
    throw new RangeError("locale must contain formatLong property");
  var w = P(e);
  if (!Oa(w))
    throw new RangeError("Invalid time value");
  var S = ae(w), N = Ue(w, S), M = {
    firstWeekContainsDate: O,
    weekStartsOn: y,
    locale: v,
    _originalDate: w
  }, L = D.match($o).map(function(T) {
    var U = T[0];
    if (U === "p" || U === "P") {
      var ie = Ra[U];
      return ie(T, v.formatLong);
    }
    return T;
  }).join("").match(Eo).map(function(T) {
    if (T === "''")
      return "'";
    var U = T[0];
    if (U === "'")
      return Lo(T);
    var ie = Na[U];
    if (ie)
      return !(n != null && n.useAdditionalWeekYearTokens) && Ia(T) && gt(T, t, String(e)), !(n != null && n.useAdditionalDayOfYearTokens) && Fa(T) && gt(T, t, String(e)), ie(N, T, v.localize, M);
    if (U.match(Do))
      throw new RangeError("Format string contains an unescaped latin alphabet character `" + U + "`");
    return T;
  }).join("");
  return L;
}
function Lo(e) {
  var t = e.match(Mo);
  return t ? t[1].replace(Po, "'") : e;
}
function No(e, t, n) {
  var r, a, o, i, s, c, l, u, d, f;
  E(2, arguments);
  var m = P(e), h = P(t), b = oe(), x = (r = (a = n == null ? void 0 : n.locale) !== null && a !== void 0 ? a : b.locale) !== null && r !== void 0 ? r : Vt, _ = B((o = (i = (s = (c = n == null ? void 0 : n.weekStartsOn) !== null && c !== void 0 ? c : n == null || (l = n.locale) === null || l === void 0 || (u = l.options) === null || u === void 0 ? void 0 : u.weekStartsOn) !== null && s !== void 0 ? s : b.weekStartsOn) !== null && i !== void 0 ? i : (d = b.locale) === null || d === void 0 || (f = d.options) === null || f === void 0 ? void 0 : f.weekStartsOn) !== null && o !== void 0 ? o : 0);
  if (!x.localize)
    throw new RangeError("locale must contain localize property");
  if (!x.formatLong)
    throw new RangeError("locale must contain formatLong property");
  if (!x.formatRelative)
    throw new RangeError("locale must contain formatRelative property");
  var k = Ta(m, h);
  if (isNaN(k))
    throw new RangeError("Invalid time value");
  var C;
  k < -6 ? C = "other" : k < -1 ? C = "lastWeek" : k < 0 ? C = "yesterday" : k < 1 ? C = "today" : k < 2 ? C = "tomorrow" : k < 7 ? C = "nextWeek" : C = "other";
  var W = Ue(m, ae(m)), D = Ue(h, ae(h)), g = x.formatRelative(C, W, D, {
    locale: x,
    weekStartsOn: _
  });
  return Wo(m, g, {
    locale: x,
    weekStartsOn: _
  });
}
const je = ({ text: e, resolved: t, metadata: n, createdAt: r, loading: a = !1 }) => `
	<div class="gthr-tooltip">
		<div class="gthr-tooltip__content">
			<div class="gthr-tooltip__info ${t ? "gthr-tooltip__info--resolved" : ""}">
				<p
					class="gthr-tooltip__comment ${t ? "gthr-tooltip__comment--resolved" : ""}"
				>
					${e}
				</p>
			
				<p
					class="gthr-tooltip__date"
				>
					${No(new Date(r), new Date())}
				</p>

				<ul class="gthr-tooltip__metainfo">
					<li
						class="gthr-tooltip__metainfo-line"
					>
						Platform:
						<b>${n.platform.type}</b>
					</li>
					<li
						class="gthr-tooltip__metainfo-line"
					>
						Browser:
						<b>${n.browser.name}</b>
					</li>

					${n.viewport ? `
						<li
							class="gthr-tooltip__metainfo-line"
						>
							Viewport:
							<b>${n.viewport.x} x ${n.viewport.y}</b>
						</li>
					` : ""}
				</ul>
			</div>

			${a ? `
				<svg width="28" class="gthr-tooltip__spinner" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M4.5 12.5C4.5 16.9183 8.08172 20.5 12.5 20.5C16.9183 20.5 20.5 16.9183 20.5 12.5C20.5 8.08172 16.9183 4.5 12.5 4.5" stroke="#9CA3AF" stroke-width="1.2"/>
				</svg>
			` : `
				<button type="button" id="gthr-action-resolve">
					${t ? `
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 20 20" fill="#10B981">
							<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
						</svg>
					` : `
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="#9CA3AF">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
						</svg>
					`}
				</button>
			`}
		</div>
	</div>
`, zt = (e) => e.classList.contains("gthr-btn") || e.classList.contains("gthr-overlay"), Re = () => {
  const e = document.querySelector(".gthr-highlight");
  e && e.classList.remove("gthr-highlight");
}, Uo = (e) => {
  const t = document.head, n = document.createElement("link");
  n.rel = "stylesheet", n.href = e, t.appendChild(n);
}, Jt = (e, t) => {
  let n, r = [], a = [];
  for (; n = document.elementFromPoint(e, t), !(!n || n === document.documentElement); )
    r.push(n), a.push(n.style.visibility), n.style.visibility = "hidden";
  for (let o = 0; o < r.length; o++)
    r[o].style.visibility = a[o];
  return r.reverse(), r;
}, Kt = (e) => {
  let t = e;
  return (t.tagName === "IMG" || t.tagName === "svg" || t.tagName === "path") && (t = t.closest("div, span, section, main, body, aside, header, footer, nav, a")), t;
}, jo = (e) => {
  const t = Jt(e.clientX, e.clientY), n = t[t.length - 2], r = Kt(n);
  if (zt(r)) {
    Re();
    return;
  }
  Re(), r.classList.add("gthr-highlight");
}, Ro = (e, t) => {
  e.preventDefault();
  const n = Jt(e.clientX, e.clientY), r = n[n.length - 2], a = Kt(r);
  zt(a) || t(a);
}, he = document.createElement("button");
he.classList.add(
  "spd-fixed",
  "spd-bottom-8",
  "spd-left-1/2",
  "-spd-translate-x-1/2",
  "spd-z-[99999999]",
  "spd-flex",
  "spd-items-center",
  "spd-py-3",
  "spd-px-6",
  "spd-rounded-full",
  "spd-text-neutral-400",
  "spd-shadow-md",
  "spd-border",
  "spd-border-neutral-500",
  "spd-text-white",
  "spd-bg-black"
);
const be = or((e) => jo(e), 100);
let Se = !1, Yo = null, ve = [];
const Zt = () => {
  he.innerHTML = `
		<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="spd-mr-2 spd-w-5 spd-h-5" stroke-width="1.5" stroke="currentColor">
			<path stroke-linecap="round" stroke-linejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z" />
		</svg><span class="spd-text-sm">Comment</span>
	`;
}, Ao = () => {
  document.body.appendChild(he), he.addEventListener("click", Qo);
}, Fo = (e) => {
  const t = document.querySelector(".gthr-tooltip__placeholder");
  e.target.innerText ? t.style.visibility = "hidden" : t.style.visibility = "visible";
}, Io = async ({ comment: e, el: t }) => {
  t._tippy.setContent(je({
    text: e.text,
    resolved: e.resolved,
    metadata: e.metaInfo,
    createdAt: e.createdAt,
    loading: !0
  }));
  const n = {
    id: e.id
  }, a = await (await fetch(`${Ht.BASE_URL}/api/comments/resolve`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(n)
  })).json();
  t._tippy.setContent(je({
    text: a.text,
    resolved: a.resolved,
    metadata: a.metaInfo,
    createdAt: a.createdAt
  })), t._tippy.hide();
}, Bo = (e) => {
  e._tippy.hide();
}, qo = (e) => {
  const t = document.createElement("span");
  t.classList.add("gthr-dot", "gthr-dot--input"), t.textContent = ve.length + 1, e.appendChild(t);
  const n = (o) => {
    console.log(o, e);
  }, r = () => Bo(t), a = (o) => Fo(o);
  t._tippy ? t._tippy.show() : tippy(t, {
    content: ya,
    showOnCreate: !0,
    onShown() {
      const o = document.getElementById("gthr-action-post"), i = document.getElementById("gthr-action-cancel"), s = document.getElementById("gthr-action-input");
      o.addEventListener("click", n), i.addEventListener("click", r), s.addEventListener("input", a), en();
    },
    onHide() {
      const o = document.getElementById("gthr-action-post"), i = document.getElementById("gthr-action-cancel"), s = document.getElementById("gthr-action-input");
      o.removeEventListener("click", n), i.removeEventListener("click", r), s.removeEventListener("input", a);
    },
    onHidden() {
      t.remove(), setTimeout(cleanupCommentMode, 200);
    }
  });
}, we = (e) => {
  Ro(e, qo);
}, Ho = () => {
  document.body.addEventListener("click", we), document.body.addEventListener("mousemove", be, !1);
}, Go = () => {
  document.body.removeEventListener("click", we), document.body.removeEventListener("mousemove", be, !1), Jo(), Re();
}, en = () => {
  document.body.removeEventListener("click", we), document.body.removeEventListener("mousemove", be, !1);
}, Xo = () => {
  document.body.addEventListener("click", we), document.body.addEventListener("mousemove", be, !1);
}, Qo = async (e) => {
  e.stopPropagation(), Se = !Se, Zt(), Se ? (await zo(), setTimeout(Ho, 200)) : Go();
}, Vo = () => {
  for (let e = 0; e < ve.length; e++) {
    const t = ve[e], n = document.querySelector(t.elementSelector);
    if (!n)
      continue;
    const r = document.createElement("span");
    r.classList.add("gthr-dot"), r.textContent = e + 1, r.style.top = `${n.offsetTop}px`, r.style.left = `${n.offsetLeft + n.offsetWidth / 2}px`, document.body.appendChild(r);
    const a = () => Io({
      comment: t,
      el: r
    });
    tippy(r, {
      content: je({
        text: t.text,
        resolved: t.resolved,
        metadata: t.metaInfo,
        createdAt: t.createdAt
      }),
      onShown() {
        document.getElementById("gthr-action-resolve").addEventListener("click", a);
      },
      onShow() {
        en();
      },
      onHidden() {
        setTimeout(Xo, 200);
      }
    });
  }
}, zo = async () => {
  ve = await (await fetch(`${Ht.BASE_URL}/api/comments?projectId=${Yo}&pathname=${window.location.pathname}`)).json(), Vo();
}, Jo = () => {
  document.querySelectorAll(".gthr-dot").forEach((t) => {
    t.remove();
  });
}, Ko = async () => {
  qt().mount(), Uo("/style.css"), Zt(), Ao();
};
Ko();
