function P() {
}
function dr(t) {
  return t && typeof t == "object" && typeof t.then == "function";
}
function Un(t) {
  return t();
}
function mn() {
  return /* @__PURE__ */ Object.create(null);
}
function bt(t) {
  t.forEach(Un);
}
function We(t) {
  return typeof t == "function";
}
function Tt(t, e) {
  return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function";
}
function fr(t) {
  return Object.keys(t).length === 0;
}
function mr(t, ...e) {
  if (t == null)
    return P;
  const n = t.subscribe(...e);
  return n.unsubscribe ? () => n.unsubscribe() : n;
}
function Le(t, e, n) {
  t.$$.on_destroy.push(mr(e, n));
}
function pn(t) {
  return t && We(t.destroy) ? t.destroy : P;
}
function h(t, e) {
  t.appendChild(e);
}
function L(t, e, n) {
  t.insertBefore(e, n || null);
}
function W(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function pr(t, e) {
  for (let n = 0; n < t.length; n += 1)
    t[n] && t[n].d(e);
}
function _(t) {
  return document.createElement(t);
}
function V(t) {
  return document.createElementNS("http://www.w3.org/2000/svg", t);
}
function N(t) {
  return document.createTextNode(t);
}
function M() {
  return N(" ");
}
function Fn() {
  return N("");
}
function ct(t, e, n, r) {
  return t.addEventListener(e, n, r), () => t.removeEventListener(e, n, r);
}
function hr(t) {
  return function(e) {
    return e.preventDefault(), t.call(this, e);
  };
}
function d(t, e, n) {
  n == null ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n);
}
function gr(t) {
  return Array.from(t.childNodes);
}
function K(t, e) {
  e = "" + e, t.wholeText !== e && (t.data = e);
}
function hn(t, e) {
  t.value = e ?? "";
}
function te(t, e, n, r) {
  n === null ? t.style.removeProperty(e) : t.style.setProperty(e, n, r ? "important" : "");
}
function D(t, e, n) {
  t.classList[n ? "add" : "remove"](e);
}
let Et;
function ot(t) {
  Et = t;
}
function Yn() {
  if (!Et)
    throw new Error("Function called outside component initialization");
  return Et;
}
function vr(t) {
  Yn().$$.on_mount.push(t);
}
function wr(t, e) {
  const n = t.$$.callbacks[e.type];
  n && n.slice().forEach((r) => r.call(this, e));
}
const Pt = [], ht = [], re = [], gn = [], br = Promise.resolve();
let Oe = !1;
function yr() {
  Oe || (Oe = !0, br.then(Ne));
}
function Me(t) {
  re.push(t);
}
const Ce = /* @__PURE__ */ new Set();
let ee = 0;
function Ne() {
  const t = Et;
  do {
    for (; ee < Pt.length; ) {
      const e = Pt[ee];
      ee++, ot(e), xr(e.$$);
    }
    for (ot(null), Pt.length = 0, ee = 0; ht.length; )
      ht.pop()();
    for (let e = 0; e < re.length; e += 1) {
      const n = re[e];
      Ce.has(n) || (Ce.add(n), n());
    }
    re.length = 0;
  } while (Pt.length);
  for (; gn.length; )
    gn.pop()();
  Oe = !1, Ce.clear(), ot(t);
}
function xr(t) {
  if (t.fragment !== null) {
    t.update(), bt(t.before_update);
    const e = t.dirty;
    t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(Me);
  }
}
const oe = /* @__PURE__ */ new Set();
let gt;
function Ue() {
  gt = {
    r: 0,
    c: [],
    p: gt
  };
}
function Fe() {
  gt.r || bt(gt.c), gt = gt.p;
}
function Q(t, e) {
  t && t.i && (oe.delete(t), t.i(e));
}
function at(t, e, n, r) {
  if (t && t.o) {
    if (oe.has(t))
      return;
    oe.add(t), gt.c.push(() => {
      oe.delete(t), r && (n && t.d(1), r());
    }), t.o(e);
  } else
    r && r();
}
function _r(t, e) {
  const n = e.token = {};
  function r(o, a, i, s) {
    if (e.token !== n)
      return;
    e.resolved = s;
    let c = e.ctx;
    i !== void 0 && (c = c.slice(), c[i] = s);
    const l = o && (e.current = o)(c);
    let f = !1;
    e.block && (e.blocks ? e.blocks.forEach((u, p) => {
      p !== a && u && (Ue(), at(u, 1, 1, () => {
        e.blocks[p] === u && (e.blocks[p] = null);
      }), Fe());
    }) : e.block.d(1), l.c(), Q(l, 1), l.m(e.mount(), e.anchor), f = !0), e.block = l, e.blocks && (e.blocks[a] = l), f && Ne();
  }
  if (dr(t)) {
    const o = Yn();
    if (t.then((a) => {
      ot(o), r(e.then, 1, e.value, a), ot(null);
    }, (a) => {
      if (ot(o), r(e.catch, 2, e.error, a), ot(null), !e.hasCatch)
        throw a;
    }), e.current !== e.pending)
      return r(e.pending, 0), !0;
  } else {
    if (e.current !== e.then)
      return r(e.then, 1, e.value, t), !0;
    e.resolved = t;
  }
}
function kr(t, e, n) {
  const r = e.slice(), { resolved: o } = t;
  t.current === t.then && (r[t.value] = o), t.current === t.catch && (r[t.error] = o), t.block.p(r, n);
}
const Cr = typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : global;
function Ye(t) {
  t && t.c();
}
function de(t, e, n, r) {
  const { fragment: o, after_update: a } = t.$$;
  o && o.m(e, n), r || Me(() => {
    const i = t.$$.on_mount.map(Un).filter(We);
    t.$$.on_destroy ? t.$$.on_destroy.push(...i) : bt(i), t.$$.on_mount = [];
  }), a.forEach(Me);
}
function fe(t, e) {
  const n = t.$$;
  n.fragment !== null && (bt(n.on_destroy), n.fragment && n.fragment.d(e), n.on_destroy = n.fragment = null, n.ctx = []);
}
function Tr(t, e) {
  t.$$.dirty[0] === -1 && (Pt.push(t), yr(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function me(t, e, n, r, o, a, i, s = [-1]) {
  const c = Et;
  ot(t);
  const l = t.$$ = {
    fragment: null,
    ctx: [],
    props: a,
    update: P,
    not_equal: o,
    bound: mn(),
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (c ? c.$$.context : [])),
    callbacks: mn(),
    dirty: s,
    skip_bound: !1,
    root: e.target || c.$$.root
  };
  i && i(l.root);
  let f = !1;
  if (l.ctx = n ? n(t, e.props || {}, (u, p, ...g) => {
    const m = g.length ? g[0] : p;
    return l.ctx && o(l.ctx[u], l.ctx[u] = m) && (!l.skip_bound && l.bound[u] && l.bound[u](m), f && Tr(t, u)), p;
  }) : [], l.update(), f = !0, bt(l.before_update), l.fragment = r ? r(l.ctx) : !1, e.target) {
    if (e.hydrate) {
      const u = gr(e.target);
      l.fragment && l.fragment.l(u), u.forEach(W);
    } else
      l.fragment && l.fragment.c();
    e.intro && Q(t.$$.fragment), de(t, e.target, e.anchor, e.customElement), Ne();
  }
  ot(c);
}
class pe {
  $destroy() {
    fe(this, 1), this.$destroy = P;
  }
  $on(e, n) {
    if (!We(n))
      return P;
    const r = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return r.push(n), () => {
      const o = r.indexOf(n);
      o !== -1 && r.splice(o, 1);
    };
  }
  $set(e) {
    this.$$set && !fr(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const Or = {
  BASE_URL: "http://localhost:3000"
};
function ut(t) {
  if (t === null || t === !0 || t === !1)
    return NaN;
  var e = Number(t);
  return isNaN(e) ? e : e < 0 ? Math.ceil(e) : Math.floor(e);
}
function I(t, e) {
  if (e.length < t)
    throw new TypeError(t + " argument" + (t > 1 ? "s" : "") + " required, but only " + e.length + " present");
}
function ae(t) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? ae = function(n) {
    return typeof n;
  } : ae = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, ae(t);
}
function j(t) {
  I(1, arguments);
  var e = Object.prototype.toString.call(t);
  return t instanceof Date || ae(t) === "object" && e === "[object Date]" ? new Date(t.getTime()) : typeof t == "number" || e === "[object Number]" ? new Date(t) : ((typeof t == "string" || e === "[object String]") && typeof console < "u" && (console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"), console.warn(new Error().stack)), new Date(NaN));
}
function Mr(t, e) {
  I(2, arguments);
  var n = j(t).getTime(), r = ut(e);
  return new Date(n + r);
}
var Dr = {};
function Nt() {
  return Dr;
}
function At(t) {
  var e = new Date(Date.UTC(t.getFullYear(), t.getMonth(), t.getDate(), t.getHours(), t.getMinutes(), t.getSeconds(), t.getMilliseconds()));
  return e.setUTCFullYear(t.getFullYear()), t.getTime() - e.getTime();
}
function vn(t) {
  I(1, arguments);
  var e = j(t);
  return e.setHours(0, 0, 0, 0), e;
}
var Pr = 864e5;
function Sr(t, e) {
  I(2, arguments);
  var n = vn(t), r = vn(e), o = n.getTime() - At(n), a = r.getTime() - At(r);
  return Math.round((o - a) / Pr);
}
function ie(t) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? ie = function(n) {
    return typeof n;
  } : ie = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, ie(t);
}
function Er(t) {
  return I(1, arguments), t instanceof Date || ie(t) === "object" && Object.prototype.toString.call(t) === "[object Date]";
}
function Ar(t) {
  if (I(1, arguments), !Er(t) && typeof t != "number")
    return !1;
  var e = j(t);
  return !isNaN(Number(e));
}
function De(t, e) {
  I(2, arguments);
  var n = ut(e);
  return Mr(t, -n);
}
var Rr = 864e5;
function Wr(t) {
  I(1, arguments);
  var e = j(t), n = e.getTime();
  e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
  var r = e.getTime(), o = n - r;
  return Math.floor(o / Rr) + 1;
}
function se(t) {
  I(1, arguments);
  var e = 1, n = j(t), r = n.getUTCDay(), o = (r < e ? 7 : 0) + r - e;
  return n.setUTCDate(n.getUTCDate() - o), n.setUTCHours(0, 0, 0, 0), n;
}
function zn(t) {
  I(1, arguments);
  var e = j(t), n = e.getUTCFullYear(), r = new Date(0);
  r.setUTCFullYear(n + 1, 0, 4), r.setUTCHours(0, 0, 0, 0);
  var o = se(r), a = new Date(0);
  a.setUTCFullYear(n, 0, 4), a.setUTCHours(0, 0, 0, 0);
  var i = se(a);
  return e.getTime() >= o.getTime() ? n + 1 : e.getTime() >= i.getTime() ? n : n - 1;
}
function Lr(t) {
  I(1, arguments);
  var e = zn(t), n = new Date(0);
  n.setUTCFullYear(e, 0, 4), n.setUTCHours(0, 0, 0, 0);
  var r = se(n);
  return r;
}
var Nr = 6048e5;
function Ur(t) {
  I(1, arguments);
  var e = j(t), n = se(e).getTime() - Lr(e).getTime();
  return Math.round(n / Nr) + 1;
}
function le(t, e) {
  var n, r, o, a, i, s, c, l;
  I(1, arguments);
  var f = Nt(), u = ut((n = (r = (o = (a = e == null ? void 0 : e.weekStartsOn) !== null && a !== void 0 ? a : e == null || (i = e.locale) === null || i === void 0 || (s = i.options) === null || s === void 0 ? void 0 : s.weekStartsOn) !== null && o !== void 0 ? o : f.weekStartsOn) !== null && r !== void 0 ? r : (c = f.locale) === null || c === void 0 || (l = c.options) === null || l === void 0 ? void 0 : l.weekStartsOn) !== null && n !== void 0 ? n : 0);
  if (!(u >= 0 && u <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var p = j(t), g = p.getUTCDay(), m = (g < u ? 7 : 0) + g - u;
  return p.setUTCDate(p.getUTCDate() - m), p.setUTCHours(0, 0, 0, 0), p;
}
function Bn(t, e) {
  var n, r, o, a, i, s, c, l;
  I(1, arguments);
  var f = j(t), u = f.getUTCFullYear(), p = Nt(), g = ut((n = (r = (o = (a = e == null ? void 0 : e.firstWeekContainsDate) !== null && a !== void 0 ? a : e == null || (i = e.locale) === null || i === void 0 || (s = i.options) === null || s === void 0 ? void 0 : s.firstWeekContainsDate) !== null && o !== void 0 ? o : p.firstWeekContainsDate) !== null && r !== void 0 ? r : (c = p.locale) === null || c === void 0 || (l = c.options) === null || l === void 0 ? void 0 : l.firstWeekContainsDate) !== null && n !== void 0 ? n : 1);
  if (!(g >= 1 && g <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var m = new Date(0);
  m.setUTCFullYear(u + 1, 0, g), m.setUTCHours(0, 0, 0, 0);
  var v = le(m, e), w = new Date(0);
  w.setUTCFullYear(u, 0, g), w.setUTCHours(0, 0, 0, 0);
  var y = le(w, e);
  return f.getTime() >= v.getTime() ? u + 1 : f.getTime() >= y.getTime() ? u : u - 1;
}
function Fr(t, e) {
  var n, r, o, a, i, s, c, l;
  I(1, arguments);
  var f = Nt(), u = ut((n = (r = (o = (a = e == null ? void 0 : e.firstWeekContainsDate) !== null && a !== void 0 ? a : e == null || (i = e.locale) === null || i === void 0 || (s = i.options) === null || s === void 0 ? void 0 : s.firstWeekContainsDate) !== null && o !== void 0 ? o : f.firstWeekContainsDate) !== null && r !== void 0 ? r : (c = f.locale) === null || c === void 0 || (l = c.options) === null || l === void 0 ? void 0 : l.firstWeekContainsDate) !== null && n !== void 0 ? n : 1), p = Bn(t, e), g = new Date(0);
  g.setUTCFullYear(p, 0, u), g.setUTCHours(0, 0, 0, 0);
  var m = le(g, e);
  return m;
}
var Yr = 6048e5;
function zr(t, e) {
  I(1, arguments);
  var n = j(t), r = le(n, e).getTime() - Fr(n, e).getTime();
  return Math.round(r / Yr) + 1;
}
function R(t, e) {
  for (var n = t < 0 ? "-" : "", r = Math.abs(t).toString(); r.length < e; )
    r = "0" + r;
  return n + r;
}
var Br = {
  y: function(e, n) {
    var r = e.getUTCFullYear(), o = r > 0 ? r : 1 - r;
    return R(n === "yy" ? o % 100 : o, n.length);
  },
  M: function(e, n) {
    var r = e.getUTCMonth();
    return n === "M" ? String(r + 1) : R(r + 1, 2);
  },
  d: function(e, n) {
    return R(e.getUTCDate(), n.length);
  },
  a: function(e, n) {
    var r = e.getUTCHours() / 12 >= 1 ? "pm" : "am";
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
  h: function(e, n) {
    return R(e.getUTCHours() % 12 || 12, n.length);
  },
  H: function(e, n) {
    return R(e.getUTCHours(), n.length);
  },
  m: function(e, n) {
    return R(e.getUTCMinutes(), n.length);
  },
  s: function(e, n) {
    return R(e.getUTCSeconds(), n.length);
  },
  S: function(e, n) {
    var r = n.length, o = e.getUTCMilliseconds(), a = Math.floor(o * Math.pow(10, r - 3));
    return R(a, n.length);
  }
};
const lt = Br;
var _t = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, Hr = {
  G: function(e, n, r) {
    var o = e.getUTCFullYear() > 0 ? 1 : 0;
    switch (n) {
      case "G":
      case "GG":
      case "GGG":
        return r.era(o, {
          width: "abbreviated"
        });
      case "GGGGG":
        return r.era(o, {
          width: "narrow"
        });
      case "GGGG":
      default:
        return r.era(o, {
          width: "wide"
        });
    }
  },
  y: function(e, n, r) {
    if (n === "yo") {
      var o = e.getUTCFullYear(), a = o > 0 ? o : 1 - o;
      return r.ordinalNumber(a, {
        unit: "year"
      });
    }
    return lt.y(e, n);
  },
  Y: function(e, n, r, o) {
    var a = Bn(e, o), i = a > 0 ? a : 1 - a;
    if (n === "YY") {
      var s = i % 100;
      return R(s, 2);
    }
    return n === "Yo" ? r.ordinalNumber(i, {
      unit: "year"
    }) : R(i, n.length);
  },
  R: function(e, n) {
    var r = zn(e);
    return R(r, n.length);
  },
  u: function(e, n) {
    var r = e.getUTCFullYear();
    return R(r, n.length);
  },
  Q: function(e, n, r) {
    var o = Math.ceil((e.getUTCMonth() + 1) / 3);
    switch (n) {
      case "Q":
        return String(o);
      case "QQ":
        return R(o, 2);
      case "Qo":
        return r.ordinalNumber(o, {
          unit: "quarter"
        });
      case "QQQ":
        return r.quarter(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "QQQQQ":
        return r.quarter(o, {
          width: "narrow",
          context: "formatting"
        });
      case "QQQQ":
      default:
        return r.quarter(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  q: function(e, n, r) {
    var o = Math.ceil((e.getUTCMonth() + 1) / 3);
    switch (n) {
      case "q":
        return String(o);
      case "qq":
        return R(o, 2);
      case "qo":
        return r.ordinalNumber(o, {
          unit: "quarter"
        });
      case "qqq":
        return r.quarter(o, {
          width: "abbreviated",
          context: "standalone"
        });
      case "qqqqq":
        return r.quarter(o, {
          width: "narrow",
          context: "standalone"
        });
      case "qqqq":
      default:
        return r.quarter(o, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  M: function(e, n, r) {
    var o = e.getUTCMonth();
    switch (n) {
      case "M":
      case "MM":
        return lt.M(e, n);
      case "Mo":
        return r.ordinalNumber(o + 1, {
          unit: "month"
        });
      case "MMM":
        return r.month(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "MMMMM":
        return r.month(o, {
          width: "narrow",
          context: "formatting"
        });
      case "MMMM":
      default:
        return r.month(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  L: function(e, n, r) {
    var o = e.getUTCMonth();
    switch (n) {
      case "L":
        return String(o + 1);
      case "LL":
        return R(o + 1, 2);
      case "Lo":
        return r.ordinalNumber(o + 1, {
          unit: "month"
        });
      case "LLL":
        return r.month(o, {
          width: "abbreviated",
          context: "standalone"
        });
      case "LLLLL":
        return r.month(o, {
          width: "narrow",
          context: "standalone"
        });
      case "LLLL":
      default:
        return r.month(o, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  w: function(e, n, r, o) {
    var a = zr(e, o);
    return n === "wo" ? r.ordinalNumber(a, {
      unit: "week"
    }) : R(a, n.length);
  },
  I: function(e, n, r) {
    var o = Ur(e);
    return n === "Io" ? r.ordinalNumber(o, {
      unit: "week"
    }) : R(o, n.length);
  },
  d: function(e, n, r) {
    return n === "do" ? r.ordinalNumber(e.getUTCDate(), {
      unit: "date"
    }) : lt.d(e, n);
  },
  D: function(e, n, r) {
    var o = Wr(e);
    return n === "Do" ? r.ordinalNumber(o, {
      unit: "dayOfYear"
    }) : R(o, n.length);
  },
  E: function(e, n, r) {
    var o = e.getUTCDay();
    switch (n) {
      case "E":
      case "EE":
      case "EEE":
        return r.day(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "EEEEE":
        return r.day(o, {
          width: "narrow",
          context: "formatting"
        });
      case "EEEEEE":
        return r.day(o, {
          width: "short",
          context: "formatting"
        });
      case "EEEE":
      default:
        return r.day(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  e: function(e, n, r, o) {
    var a = e.getUTCDay(), i = (a - o.weekStartsOn + 8) % 7 || 7;
    switch (n) {
      case "e":
        return String(i);
      case "ee":
        return R(i, 2);
      case "eo":
        return r.ordinalNumber(i, {
          unit: "day"
        });
      case "eee":
        return r.day(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "eeeee":
        return r.day(a, {
          width: "narrow",
          context: "formatting"
        });
      case "eeeeee":
        return r.day(a, {
          width: "short",
          context: "formatting"
        });
      case "eeee":
      default:
        return r.day(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  c: function(e, n, r, o) {
    var a = e.getUTCDay(), i = (a - o.weekStartsOn + 8) % 7 || 7;
    switch (n) {
      case "c":
        return String(i);
      case "cc":
        return R(i, n.length);
      case "co":
        return r.ordinalNumber(i, {
          unit: "day"
        });
      case "ccc":
        return r.day(a, {
          width: "abbreviated",
          context: "standalone"
        });
      case "ccccc":
        return r.day(a, {
          width: "narrow",
          context: "standalone"
        });
      case "cccccc":
        return r.day(a, {
          width: "short",
          context: "standalone"
        });
      case "cccc":
      default:
        return r.day(a, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  i: function(e, n, r) {
    var o = e.getUTCDay(), a = o === 0 ? 7 : o;
    switch (n) {
      case "i":
        return String(a);
      case "ii":
        return R(a, n.length);
      case "io":
        return r.ordinalNumber(a, {
          unit: "day"
        });
      case "iii":
        return r.day(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "iiiii":
        return r.day(o, {
          width: "narrow",
          context: "formatting"
        });
      case "iiiiii":
        return r.day(o, {
          width: "short",
          context: "formatting"
        });
      case "iiii":
      default:
        return r.day(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  a: function(e, n, r) {
    var o = e.getUTCHours(), a = o / 12 >= 1 ? "pm" : "am";
    switch (n) {
      case "a":
      case "aa":
        return r.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return r.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return r.dayPeriod(a, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return r.dayPeriod(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  b: function(e, n, r) {
    var o = e.getUTCHours(), a;
    switch (o === 12 ? a = _t.noon : o === 0 ? a = _t.midnight : a = o / 12 >= 1 ? "pm" : "am", n) {
      case "b":
      case "bb":
        return r.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return r.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return r.dayPeriod(a, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return r.dayPeriod(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  B: function(e, n, r) {
    var o = e.getUTCHours(), a;
    switch (o >= 17 ? a = _t.evening : o >= 12 ? a = _t.afternoon : o >= 4 ? a = _t.morning : a = _t.night, n) {
      case "B":
      case "BB":
      case "BBB":
        return r.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return r.dayPeriod(a, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return r.dayPeriod(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  h: function(e, n, r) {
    if (n === "ho") {
      var o = e.getUTCHours() % 12;
      return o === 0 && (o = 12), r.ordinalNumber(o, {
        unit: "hour"
      });
    }
    return lt.h(e, n);
  },
  H: function(e, n, r) {
    return n === "Ho" ? r.ordinalNumber(e.getUTCHours(), {
      unit: "hour"
    }) : lt.H(e, n);
  },
  K: function(e, n, r) {
    var o = e.getUTCHours() % 12;
    return n === "Ko" ? r.ordinalNumber(o, {
      unit: "hour"
    }) : R(o, n.length);
  },
  k: function(e, n, r) {
    var o = e.getUTCHours();
    return o === 0 && (o = 24), n === "ko" ? r.ordinalNumber(o, {
      unit: "hour"
    }) : R(o, n.length);
  },
  m: function(e, n, r) {
    return n === "mo" ? r.ordinalNumber(e.getUTCMinutes(), {
      unit: "minute"
    }) : lt.m(e, n);
  },
  s: function(e, n, r) {
    return n === "so" ? r.ordinalNumber(e.getUTCSeconds(), {
      unit: "second"
    }) : lt.s(e, n);
  },
  S: function(e, n) {
    return lt.S(e, n);
  },
  X: function(e, n, r, o) {
    var a = o._originalDate || e, i = a.getTimezoneOffset();
    if (i === 0)
      return "Z";
    switch (n) {
      case "X":
        return bn(i);
      case "XXXX":
      case "XX":
        return pt(i);
      case "XXXXX":
      case "XXX":
      default:
        return pt(i, ":");
    }
  },
  x: function(e, n, r, o) {
    var a = o._originalDate || e, i = a.getTimezoneOffset();
    switch (n) {
      case "x":
        return bn(i);
      case "xxxx":
      case "xx":
        return pt(i);
      case "xxxxx":
      case "xxx":
      default:
        return pt(i, ":");
    }
  },
  O: function(e, n, r, o) {
    var a = o._originalDate || e, i = a.getTimezoneOffset();
    switch (n) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + wn(i, ":");
      case "OOOO":
      default:
        return "GMT" + pt(i, ":");
    }
  },
  z: function(e, n, r, o) {
    var a = o._originalDate || e, i = a.getTimezoneOffset();
    switch (n) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + wn(i, ":");
      case "zzzz":
      default:
        return "GMT" + pt(i, ":");
    }
  },
  t: function(e, n, r, o) {
    var a = o._originalDate || e, i = Math.floor(a.getTime() / 1e3);
    return R(i, n.length);
  },
  T: function(e, n, r, o) {
    var a = o._originalDate || e, i = a.getTime();
    return R(i, n.length);
  }
};
function wn(t, e) {
  var n = t > 0 ? "-" : "+", r = Math.abs(t), o = Math.floor(r / 60), a = r % 60;
  if (a === 0)
    return n + String(o);
  var i = e || "";
  return n + String(o) + i + R(a, 2);
}
function bn(t, e) {
  if (t % 60 === 0) {
    var n = t > 0 ? "-" : "+";
    return n + R(Math.abs(t) / 60, 2);
  }
  return pt(t, e);
}
function pt(t, e) {
  var n = e || "", r = t > 0 ? "-" : "+", o = Math.abs(t), a = R(Math.floor(o / 60), 2), i = R(o % 60, 2);
  return r + a + n + i;
}
const Ir = Hr;
var yn = function(e, n) {
  switch (e) {
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
}, Hn = function(e, n) {
  switch (e) {
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
}, Vr = function(e, n) {
  var r = e.match(/(P+)(p+)?/) || [], o = r[1], a = r[2];
  if (!a)
    return yn(e, n);
  var i;
  switch (o) {
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
  return i.replace("{{date}}", yn(o, n)).replace("{{time}}", Hn(a, n));
}, qr = {
  p: Hn,
  P: Vr
};
const $r = qr;
var jr = ["D", "DD"], Xr = ["YY", "YYYY"];
function Qr(t) {
  return jr.indexOf(t) !== -1;
}
function Gr(t) {
  return Xr.indexOf(t) !== -1;
}
function xn(t, e, n) {
  if (t === "YYYY")
    throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(e, "`) for formatting years to the input `").concat(n, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (t === "YY")
    throw new RangeError("Use `yy` instead of `YY` (in `".concat(e, "`) for formatting years to the input `").concat(n, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (t === "D")
    throw new RangeError("Use `d` instead of `D` (in `".concat(e, "`) for formatting days of the month to the input `").concat(n, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (t === "DD")
    throw new RangeError("Use `dd` instead of `DD` (in `".concat(e, "`) for formatting days of the month to the input `").concat(n, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
}
var Jr = {
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
}, Kr = function(e, n, r) {
  var o, a = Jr[e];
  return typeof a == "string" ? o = a : n === 1 ? o = a.one : o = a.other.replace("{{count}}", n.toString()), r != null && r.addSuffix ? r.comparison && r.comparison > 0 ? "in " + o : o + " ago" : o;
};
const Zr = Kr;
function Te(t) {
  return function() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = e.width ? String(e.width) : t.defaultWidth, r = t.formats[n] || t.formats[t.defaultWidth];
    return r;
  };
}
var to = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, eo = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, no = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, ro = {
  date: Te({
    formats: to,
    defaultWidth: "full"
  }),
  time: Te({
    formats: eo,
    defaultWidth: "full"
  }),
  dateTime: Te({
    formats: no,
    defaultWidth: "full"
  })
};
const oo = ro;
var ao = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, io = function(e, n, r, o) {
  return ao[e];
};
const so = io;
function Mt(t) {
  return function(e, n) {
    var r = n != null && n.context ? String(n.context) : "standalone", o;
    if (r === "formatting" && t.formattingValues) {
      var a = t.defaultFormattingWidth || t.defaultWidth, i = n != null && n.width ? String(n.width) : a;
      o = t.formattingValues[i] || t.formattingValues[a];
    } else {
      var s = t.defaultWidth, c = n != null && n.width ? String(n.width) : t.defaultWidth;
      o = t.values[c] || t.values[s];
    }
    var l = t.argumentCallback ? t.argumentCallback(e) : e;
    return o[l];
  };
}
var lo = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, co = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, uo = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
}, fo = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
}, mo = {
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
}, po = {
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
}, ho = function(e, n) {
  var r = Number(e), o = r % 100;
  if (o > 20 || o < 10)
    switch (o % 10) {
      case 1:
        return r + "st";
      case 2:
        return r + "nd";
      case 3:
        return r + "rd";
    }
  return r + "th";
}, go = {
  ordinalNumber: ho,
  era: Mt({
    values: lo,
    defaultWidth: "wide"
  }),
  quarter: Mt({
    values: co,
    defaultWidth: "wide",
    argumentCallback: function(e) {
      return e - 1;
    }
  }),
  month: Mt({
    values: uo,
    defaultWidth: "wide"
  }),
  day: Mt({
    values: fo,
    defaultWidth: "wide"
  }),
  dayPeriod: Mt({
    values: mo,
    defaultWidth: "wide",
    formattingValues: po,
    defaultFormattingWidth: "wide"
  })
};
const vo = go;
function Dt(t) {
  return function(e) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = n.width, o = r && t.matchPatterns[r] || t.matchPatterns[t.defaultMatchWidth], a = e.match(o);
    if (!a)
      return null;
    var i = a[0], s = r && t.parsePatterns[r] || t.parsePatterns[t.defaultParseWidth], c = Array.isArray(s) ? bo(s, function(u) {
      return u.test(i);
    }) : wo(s, function(u) {
      return u.test(i);
    }), l;
    l = t.valueCallback ? t.valueCallback(c) : c, l = n.valueCallback ? n.valueCallback(l) : l;
    var f = e.slice(i.length);
    return {
      value: l,
      rest: f
    };
  };
}
function wo(t, e) {
  for (var n in t)
    if (t.hasOwnProperty(n) && e(t[n]))
      return n;
}
function bo(t, e) {
  for (var n = 0; n < t.length; n++)
    if (e(t[n]))
      return n;
}
function yo(t) {
  return function(e) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = e.match(t.matchPattern);
    if (!r)
      return null;
    var o = r[0], a = e.match(t.parsePattern);
    if (!a)
      return null;
    var i = t.valueCallback ? t.valueCallback(a[0]) : a[0];
    i = n.valueCallback ? n.valueCallback(i) : i;
    var s = e.slice(o.length);
    return {
      value: i,
      rest: s
    };
  };
}
var xo = /^(\d+)(th|st|nd|rd)?/i, _o = /\d+/i, ko = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, Co = {
  any: [/^b/i, /^(a|c)/i]
}, To = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, Oo = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, Mo = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, Do = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
}, Po = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, So = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, Eo = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, Ao = {
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
}, Ro = {
  ordinalNumber: yo({
    matchPattern: xo,
    parsePattern: _o,
    valueCallback: function(e) {
      return parseInt(e, 10);
    }
  }),
  era: Dt({
    matchPatterns: ko,
    defaultMatchWidth: "wide",
    parsePatterns: Co,
    defaultParseWidth: "any"
  }),
  quarter: Dt({
    matchPatterns: To,
    defaultMatchWidth: "wide",
    parsePatterns: Oo,
    defaultParseWidth: "any",
    valueCallback: function(e) {
      return e + 1;
    }
  }),
  month: Dt({
    matchPatterns: Mo,
    defaultMatchWidth: "wide",
    parsePatterns: Do,
    defaultParseWidth: "any"
  }),
  day: Dt({
    matchPatterns: Po,
    defaultMatchWidth: "wide",
    parsePatterns: So,
    defaultParseWidth: "any"
  }),
  dayPeriod: Dt({
    matchPatterns: Eo,
    defaultMatchWidth: "any",
    parsePatterns: Ao,
    defaultParseWidth: "any"
  })
};
const Wo = Ro;
var Lo = {
  code: "en-US",
  formatDistance: Zr,
  formatLong: oo,
  formatRelative: so,
  localize: vo,
  match: Wo,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
const In = Lo;
var No = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, Uo = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, Fo = /^'([^]*?)'?$/, Yo = /''/g, zo = /[a-zA-Z]/;
function Bo(t, e, n) {
  var r, o, a, i, s, c, l, f, u, p, g, m, v, w, y, x, C, S;
  I(2, arguments);
  var T = String(e), z = Nt(), U = (r = (o = n == null ? void 0 : n.locale) !== null && o !== void 0 ? o : z.locale) !== null && r !== void 0 ? r : In, $ = ut((a = (i = (s = (c = n == null ? void 0 : n.firstWeekContainsDate) !== null && c !== void 0 ? c : n == null || (l = n.locale) === null || l === void 0 || (f = l.options) === null || f === void 0 ? void 0 : f.firstWeekContainsDate) !== null && s !== void 0 ? s : z.firstWeekContainsDate) !== null && i !== void 0 ? i : (u = z.locale) === null || u === void 0 || (p = u.options) === null || p === void 0 ? void 0 : p.firstWeekContainsDate) !== null && a !== void 0 ? a : 1);
  if (!($ >= 1 && $ <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var B = ut((g = (m = (v = (w = n == null ? void 0 : n.weekStartsOn) !== null && w !== void 0 ? w : n == null || (y = n.locale) === null || y === void 0 || (x = y.options) === null || x === void 0 ? void 0 : x.weekStartsOn) !== null && v !== void 0 ? v : z.weekStartsOn) !== null && m !== void 0 ? m : (C = z.locale) === null || C === void 0 || (S = C.options) === null || S === void 0 ? void 0 : S.weekStartsOn) !== null && g !== void 0 ? g : 0);
  if (!(B >= 0 && B <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  if (!U.localize)
    throw new RangeError("locale must contain localize property");
  if (!U.formatLong)
    throw new RangeError("locale must contain formatLong property");
  var E = j(t);
  if (!Ar(E))
    throw new RangeError("Invalid time value");
  var A = At(E), F = De(E, A), b = {
    firstWeekContainsDate: $,
    weekStartsOn: B,
    locale: U,
    _originalDate: E
  }, H = T.match(Uo).map(function(Y) {
    var q = Y[0];
    if (q === "p" || q === "P") {
      var G = $r[q];
      return G(Y, U.formatLong);
    }
    return Y;
  }).join("").match(No).map(function(Y) {
    if (Y === "''")
      return "'";
    var q = Y[0];
    if (q === "'")
      return Ho(Y);
    var G = Ir[q];
    if (G)
      return !(n != null && n.useAdditionalWeekYearTokens) && Gr(Y) && xn(Y, e, String(t)), !(n != null && n.useAdditionalDayOfYearTokens) && Qr(Y) && xn(Y, e, String(t)), G(F, Y, U.localize, b);
    if (q.match(zo))
      throw new RangeError("Format string contains an unescaped latin alphabet character `" + q + "`");
    return Y;
  }).join("");
  return H;
}
function Ho(t) {
  var e = t.match(Fo);
  return e ? e[1].replace(Yo, "'") : t;
}
function _n(t, e, n) {
  var r, o, a, i, s, c, l, f, u, p;
  I(2, arguments);
  var g = j(t), m = j(e), v = Nt(), w = (r = (o = n == null ? void 0 : n.locale) !== null && o !== void 0 ? o : v.locale) !== null && r !== void 0 ? r : In, y = ut((a = (i = (s = (c = n == null ? void 0 : n.weekStartsOn) !== null && c !== void 0 ? c : n == null || (l = n.locale) === null || l === void 0 || (f = l.options) === null || f === void 0 ? void 0 : f.weekStartsOn) !== null && s !== void 0 ? s : v.weekStartsOn) !== null && i !== void 0 ? i : (u = v.locale) === null || u === void 0 || (p = u.options) === null || p === void 0 ? void 0 : p.weekStartsOn) !== null && a !== void 0 ? a : 0);
  if (!w.localize)
    throw new RangeError("locale must contain localize property");
  if (!w.formatLong)
    throw new RangeError("locale must contain formatLong property");
  if (!w.formatRelative)
    throw new RangeError("locale must contain formatRelative property");
  var x = Sr(g, m);
  if (isNaN(x))
    throw new RangeError("Invalid time value");
  var C;
  x < -6 ? C = "other" : x < -1 ? C = "lastWeek" : x < 0 ? C = "yesterday" : x < 1 ? C = "today" : x < 2 ? C = "tomorrow" : x < 7 ? C = "nextWeek" : C = "other";
  var S = De(g, At(g)), T = De(m, At(m)), z = w.formatRelative(C, S, T, {
    locale: w,
    weekStartsOn: y
  });
  return Bo(g, z, {
    locale: w,
    weekStartsOn: y
  });
}
function wt(t) {
  return t.split("-")[0];
}
function ze(t) {
  return t.split("-")[1];
}
function Ut(t) {
  return ["top", "bottom"].includes(wt(t)) ? "x" : "y";
}
function Vn(t) {
  return t === "y" ? "height" : "width";
}
function kn(t, e, n) {
  let {
    reference: r,
    floating: o
  } = t;
  const a = r.x + r.width / 2 - o.width / 2, i = r.y + r.height / 2 - o.height / 2, s = Ut(e), c = Vn(s), l = r[c] / 2 - o[c] / 2, f = wt(e), u = s === "x";
  let p;
  switch (f) {
    case "top":
      p = {
        x: a,
        y: r.y - o.height
      };
      break;
    case "bottom":
      p = {
        x: a,
        y: r.y + r.height
      };
      break;
    case "right":
      p = {
        x: r.x + r.width,
        y: i
      };
      break;
    case "left":
      p = {
        x: r.x - o.width,
        y: i
      };
      break;
    default:
      p = {
        x: r.x,
        y: r.y
      };
  }
  switch (ze(e)) {
    case "start":
      p[s] -= l * (n && u ? -1 : 1);
      break;
    case "end":
      p[s] += l * (n && u ? -1 : 1);
      break;
  }
  return p;
}
const Io = async (t, e, n) => {
  const {
    placement: r = "bottom",
    strategy: o = "absolute",
    middleware: a = [],
    platform: i
  } = n, s = a.filter(Boolean), c = await (i.isRTL == null ? void 0 : i.isRTL(e));
  if ({}.NODE_ENV !== "production") {
    if (i == null && console.error(["Floating UI: `platform` property was not passed to config. If you", "want to use Floating UI on the web, install @floating-ui/dom", "instead of the /core package. Otherwise, you can create your own", "`platform`: https://floating-ui.com/docs/platform"].join(" ")), s.filter((v) => {
      let {
        name: w
      } = v;
      return w === "autoPlacement" || w === "flip";
    }).length > 1)
      throw new Error(["Floating UI: duplicate `flip` and/or `autoPlacement` middleware", "detected. This will lead to an infinite loop. Ensure only one of", "either has been passed to the `middleware` array."].join(" "));
    (!t || !e) && console.error(["Floating UI: The reference and/or floating element was not defined", "when `computePosition()` was called. Ensure that both elements have", "been created and can be measured."].join(" "));
  }
  let l = await i.getElementRects({
    reference: t,
    floating: e,
    strategy: o
  }), {
    x: f,
    y: u
  } = kn(l, r, c), p = r, g = {}, m = 0;
  for (let v = 0; v < s.length; v++) {
    const {
      name: w,
      fn: y
    } = s[v], {
      x,
      y: C,
      data: S,
      reset: T
    } = await y({
      x: f,
      y: u,
      initialPlacement: r,
      placement: p,
      strategy: o,
      middlewareData: g,
      rects: l,
      platform: i,
      elements: {
        reference: t,
        floating: e
      }
    });
    if (f = x ?? f, u = C ?? u, g = {
      ...g,
      [w]: {
        ...g[w],
        ...S
      }
    }, {}.NODE_ENV !== "production" && m > 50 && console.warn(["Floating UI: The middleware lifecycle appears to be running in an", "infinite loop. This is usually caused by a `reset` continually", "being returned without a break condition."].join(" ")), T && m <= 50) {
      m++, typeof T == "object" && (T.placement && (p = T.placement), T.rects && (l = T.rects === !0 ? await i.getElementRects({
        reference: t,
        floating: e,
        strategy: o
      }) : T.rects), {
        x: f,
        y: u
      } = kn(l, p, c)), v = -1;
      continue;
    }
  }
  return {
    x: f,
    y: u,
    placement: p,
    strategy: o,
    middlewareData: g
  };
};
function Vo(t) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...t
  };
}
function qn(t) {
  return typeof t != "number" ? Vo(t) : {
    top: t,
    right: t,
    bottom: t,
    left: t
  };
}
function Rt(t) {
  return {
    ...t,
    top: t.y,
    left: t.x,
    right: t.x + t.width,
    bottom: t.y + t.height
  };
}
async function $n(t, e) {
  var n;
  e === void 0 && (e = {});
  const {
    x: r,
    y: o,
    platform: a,
    rects: i,
    elements: s,
    strategy: c
  } = t, {
    boundary: l = "clippingAncestors",
    rootBoundary: f = "viewport",
    elementContext: u = "floating",
    altBoundary: p = !1,
    padding: g = 0
  } = e, m = qn(g), w = s[p ? u === "floating" ? "reference" : "floating" : u], y = Rt(await a.getClippingRect({
    element: (n = await (a.isElement == null ? void 0 : a.isElement(w))) == null || n ? w : w.contextElement || await (a.getDocumentElement == null ? void 0 : a.getDocumentElement(s.floating)),
    boundary: l,
    rootBoundary: f,
    strategy: c
  })), x = u === "floating" ? {
    ...i.floating,
    x: r,
    y: o
  } : i.reference, C = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(s.floating)), S = await (a.isElement == null ? void 0 : a.isElement(C)) ? await (a.getScale == null ? void 0 : a.getScale(C)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, T = Rt(a.convertOffsetParentRelativeRectToViewportRelativeRect ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({
    rect: x,
    offsetParent: C,
    strategy: c
  }) : x);
  return {
    top: (y.top - T.top + m.top) / S.y,
    bottom: (T.bottom - y.bottom + m.bottom) / S.y,
    left: (y.left - T.left + m.left) / S.x,
    right: (T.right - y.right + m.right) / S.x
  };
}
const jn = Math.min, Xn = Math.max;
function Cn(t, e, n) {
  return Xn(t, jn(e, n));
}
const qo = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function ce(t) {
  return t.replace(/left|right|bottom|top/g, (e) => qo[e]);
}
function $o(t, e, n) {
  n === void 0 && (n = !1);
  const r = ze(t), o = Ut(t), a = Vn(o);
  let i = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return e.reference[a] > e.floating[a] && (i = ce(i)), {
    main: i,
    cross: ce(i)
  };
}
const jo = {
  start: "end",
  end: "start"
};
function Tn(t) {
  return t.replace(/start|end/g, (e) => jo[e]);
}
function Xo(t) {
  const e = ce(t);
  return [Tn(t), e, Tn(e)];
}
const Pe = function(t) {
  return t === void 0 && (t = {}), {
    name: "flip",
    options: t,
    async fn(e) {
      var n;
      const {
        placement: r,
        middlewareData: o,
        rects: a,
        initialPlacement: i,
        platform: s,
        elements: c
      } = e, {
        mainAxis: l = !0,
        crossAxis: f = !0,
        fallbackPlacements: u,
        fallbackStrategy: p = "bestFit",
        flipAlignment: g = !0,
        ...m
      } = t, v = wt(r), y = u || (v === i || !g ? [ce(i)] : Xo(i)), x = [i, ...y], C = await $n(e, m), S = [];
      let T = ((n = o.flip) == null ? void 0 : n.overflows) || [];
      if (l && S.push(C[v]), f) {
        const {
          main: B,
          cross: E
        } = $o(r, a, await (s.isRTL == null ? void 0 : s.isRTL(c.floating)));
        S.push(C[B], C[E]);
      }
      if (T = [...T, {
        placement: r,
        overflows: S
      }], !S.every((B) => B <= 0)) {
        var z, U;
        const B = ((z = (U = o.flip) == null ? void 0 : U.index) != null ? z : 0) + 1, E = x[B];
        if (E)
          return {
            data: {
              index: B,
              overflows: T
            },
            reset: {
              placement: E
            }
          };
        let A = "bottom";
        switch (p) {
          case "bestFit": {
            var $;
            const F = ($ = T.map((b) => [b, b.overflows.filter((H) => H > 0).reduce((H, Y) => H + Y, 0)]).sort((b, H) => b[1] - H[1])[0]) == null ? void 0 : $[0].placement;
            F && (A = F);
            break;
          }
          case "initialPlacement":
            A = i;
            break;
        }
        if (r !== A)
          return {
            reset: {
              placement: A
            }
          };
      }
      return {};
    }
  };
};
async function Qo(t, e) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = t, a = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), i = wt(n), s = ze(n), c = Ut(n) === "x", l = ["left", "top"].includes(i) ? -1 : 1, f = a && c ? -1 : 1, u = typeof e == "function" ? e(t) : e;
  let {
    mainAxis: p,
    crossAxis: g,
    alignmentAxis: m
  } = typeof u == "number" ? {
    mainAxis: u,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...u
  };
  return s && typeof m == "number" && (g = s === "end" ? m * -1 : m), c ? {
    x: g * f,
    y: p * l
  } : {
    x: p * l,
    y: g * f
  };
}
const Se = function(t) {
  return t === void 0 && (t = 0), {
    name: "offset",
    options: t,
    async fn(e) {
      const {
        x: n,
        y: r
      } = e, o = await Qo(e, t);
      return {
        x: n + o.x,
        y: r + o.y,
        data: o
      };
    }
  };
};
function Go(t) {
  return t === "x" ? "y" : "x";
}
const Ee = function(t) {
  return t === void 0 && (t = {}), {
    name: "shift",
    options: t,
    async fn(e) {
      const {
        x: n,
        y: r,
        placement: o
      } = e, {
        mainAxis: a = !0,
        crossAxis: i = !1,
        limiter: s = {
          fn: (w) => {
            let {
              x: y,
              y: x
            } = w;
            return {
              x: y,
              y: x
            };
          }
        },
        ...c
      } = t, l = {
        x: n,
        y: r
      }, f = await $n(e, c), u = Ut(wt(o)), p = Go(u);
      let g = l[u], m = l[p];
      if (a) {
        const w = u === "y" ? "top" : "left", y = u === "y" ? "bottom" : "right", x = g + f[w], C = g - f[y];
        g = Cn(x, g, C);
      }
      if (i) {
        const w = p === "y" ? "top" : "left", y = p === "y" ? "bottom" : "right", x = m + f[w], C = m - f[y];
        m = Cn(x, m, C);
      }
      const v = s.fn({
        ...e,
        [u]: g,
        [p]: m
      });
      return {
        ...v,
        data: {
          x: v.x - n,
          y: v.y - r
        }
      };
    }
  };
}, Ae = function(t) {
  return t === void 0 && (t = {}), {
    name: "inline",
    options: t,
    async fn(e) {
      var n;
      const {
        placement: r,
        elements: o,
        rects: a,
        platform: i,
        strategy: s
      } = e, {
        padding: c = 2,
        x: l,
        y: f
      } = t, u = Rt(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
        rect: a.reference,
        offsetParent: await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(o.floating)),
        strategy: s
      }) : a.reference), p = (n = await (i.getClientRects == null ? void 0 : i.getClientRects(o.reference))) != null ? n : [], g = qn(c);
      function m() {
        if (p.length === 2 && p[0].left > p[1].right && l != null && f != null) {
          var w;
          return (w = p.find((y) => l > y.left - g.left && l < y.right + g.right && f > y.top - g.top && f < y.bottom + g.bottom)) != null ? w : u;
        }
        if (p.length >= 2) {
          if (Ut(r) === "x") {
            const A = p[0], F = p[p.length - 1], b = wt(r) === "top", H = A.top, Y = F.bottom, q = b ? A.left : F.left, G = b ? A.right : F.right, yt = G - q, Ot = Y - H;
            return {
              top: H,
              bottom: Y,
              left: q,
              right: G,
              width: yt,
              height: Ot,
              x: q,
              y: H
            };
          }
          const y = wt(r) === "left", x = Xn(...p.map((A) => A.right)), C = jn(...p.map((A) => A.left)), S = p.filter((A) => y ? A.left === C : A.right === x), T = S[0].top, z = S[S.length - 1].bottom, U = C, $ = x, B = $ - U, E = z - T;
          return {
            top: T,
            bottom: z,
            left: U,
            right: $,
            width: B,
            height: E,
            x: U,
            y: T
          };
        }
        return u;
      }
      const v = await i.getElementRects({
        reference: {
          getBoundingClientRect: m
        },
        floating: o.floating,
        strategy: s
      });
      return a.reference.x !== v.reference.x || a.reference.y !== v.reference.y || a.reference.width !== v.reference.width || a.reference.height !== v.reference.height ? {
        reset: {
          rects: v
        }
      } : {};
    }
  };
};
function X(t) {
  var e;
  return ((e = t.ownerDocument) == null ? void 0 : e.defaultView) || window;
}
function Z(t) {
  return X(t).getComputedStyle(t);
}
function dt(t) {
  return Gn(t) ? (t.nodeName || "").toLowerCase() : "";
}
let ne;
function Qn() {
  if (ne)
    return ne;
  const t = navigator.userAgentData;
  return t && Array.isArray(t.brands) ? (ne = t.brands.map((e) => e.brand + "/" + e.version).join(" "), ne) : navigator.userAgent;
}
function it(t) {
  return t instanceof X(t).HTMLElement;
}
function ft(t) {
  return t instanceof X(t).Element;
}
function Gn(t) {
  return t instanceof X(t).Node;
}
function On(t) {
  if (typeof ShadowRoot > "u")
    return !1;
  const e = X(t).ShadowRoot;
  return t instanceof e || t instanceof ShadowRoot;
}
function he(t) {
  const {
    overflow: e,
    overflowX: n,
    overflowY: r,
    display: o
  } = Z(t);
  return /auto|scroll|overlay|hidden|clip/.test(e + r + n) && !["inline", "contents"].includes(o);
}
function Jo(t) {
  return ["table", "td", "th"].includes(dt(t));
}
function Be(t) {
  const e = /firefox/i.test(Qn()), n = Z(t), r = n.backdropFilter || n.WebkitBackdropFilter;
  return n.transform !== "none" || n.perspective !== "none" || (r ? r !== "none" : !1) || e && n.willChange === "filter" || e && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective"].some((o) => n.willChange.includes(o)) || ["paint", "layout", "strict", "content"].some(
    (o) => {
      const a = n.contain;
      return a != null ? a.includes(o) : !1;
    }
  );
}
function Jn() {
  return !/^((?!chrome|android).)*safari/i.test(Qn());
}
function He(t) {
  return ["html", "body", "#document"].includes(dt(t));
}
const Mn = Math.min, St = Math.max, ue = Math.round;
function Kn(t) {
  const e = Z(t);
  let n = parseFloat(e.width), r = parseFloat(e.height);
  const o = t.offsetWidth, a = t.offsetHeight, i = ue(n) !== o || ue(r) !== a;
  return i && (n = o, r = a), {
    width: n,
    height: r,
    fallback: i
  };
}
function Zn(t) {
  return ft(t) ? t : t.contextElement;
}
const tr = {
  x: 1,
  y: 1
};
function Ct(t) {
  const e = Zn(t);
  if (!it(e))
    return tr;
  const n = e.getBoundingClientRect(), {
    width: r,
    height: o,
    fallback: a
  } = Kn(e);
  let i = (a ? ue(n.width) : n.width) / r, s = (a ? ue(n.height) : n.height) / o;
  return (!i || !Number.isFinite(i)) && (i = 1), (!s || !Number.isFinite(s)) && (s = 1), {
    x: i,
    y: s
  };
}
function Wt(t, e, n, r) {
  var o, a;
  e === void 0 && (e = !1), n === void 0 && (n = !1);
  const i = t.getBoundingClientRect(), s = Zn(t);
  let c = tr;
  e && (r ? ft(r) && (c = Ct(r)) : c = Ct(t));
  const l = s ? X(s) : window, f = !Jn() && n;
  let u = (i.left + (f && ((o = l.visualViewport) == null ? void 0 : o.offsetLeft) || 0)) / c.x, p = (i.top + (f && ((a = l.visualViewport) == null ? void 0 : a.offsetTop) || 0)) / c.y, g = i.width / c.x, m = i.height / c.y;
  if (s) {
    const v = X(s), w = r && ft(r) ? X(r) : r;
    let y = v.frameElement;
    for (; y && r && w !== v; ) {
      const x = Ct(y), C = y.getBoundingClientRect(), S = getComputedStyle(y);
      C.x += (y.clientLeft + parseFloat(S.paddingLeft)) * x.x, C.y += (y.clientTop + parseFloat(S.paddingTop)) * x.y, u *= x.x, p *= x.y, g *= x.x, m *= x.y, u += C.x, p += C.y, y = X(y).frameElement;
    }
  }
  return {
    width: g,
    height: m,
    top: p,
    right: u + g,
    bottom: p + m,
    left: u,
    x: u,
    y: p
  };
}
function mt(t) {
  return ((Gn(t) ? t.ownerDocument : t.document) || window.document).documentElement;
}
function ge(t) {
  return ft(t) ? {
    scrollLeft: t.scrollLeft,
    scrollTop: t.scrollTop
  } : {
    scrollLeft: t.pageXOffset,
    scrollTop: t.pageYOffset
  };
}
function er(t) {
  return Wt(mt(t)).left + ge(t).scrollLeft;
}
function Ko(t, e, n) {
  const r = it(e), o = mt(e), a = Wt(t, !0, n === "fixed", e);
  let i = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const s = {
    x: 0,
    y: 0
  };
  if (r || !r && n !== "fixed")
    if ((dt(e) !== "body" || he(o)) && (i = ge(e)), it(e)) {
      const c = Wt(e, !0);
      s.x = c.x + e.clientLeft, s.y = c.y + e.clientTop;
    } else
      o && (s.x = er(o));
  return {
    x: a.left + i.scrollLeft - s.x,
    y: a.top + i.scrollTop - s.y,
    width: a.width,
    height: a.height
  };
}
function Lt(t) {
  if (dt(t) === "html")
    return t;
  const e = t.assignedSlot || t.parentNode || (On(t) ? t.host : null) || mt(t);
  return On(e) ? e.host : e;
}
function Dn(t) {
  return !it(t) || Z(t).position === "fixed" ? null : t.offsetParent;
}
function Zo(t) {
  let e = Lt(t);
  for (; it(e) && !He(e); ) {
    if (Be(e))
      return e;
    e = Lt(e);
  }
  return null;
}
function Pn(t) {
  const e = X(t);
  let n = Dn(t);
  for (; n && Jo(n) && Z(n).position === "static"; )
    n = Dn(n);
  return n && (dt(n) === "html" || dt(n) === "body" && Z(n).position === "static" && !Be(n)) ? e : n || Zo(t) || e;
}
function ta(t) {
  return Kn(t);
}
function ea(t) {
  let {
    rect: e,
    offsetParent: n,
    strategy: r
  } = t;
  const o = it(n), a = mt(n);
  if (n === a)
    return e;
  let i = {
    scrollLeft: 0,
    scrollTop: 0
  }, s = {
    x: 1,
    y: 1
  };
  const c = {
    x: 0,
    y: 0
  };
  if ((o || !o && r !== "fixed") && ((dt(n) !== "body" || he(a)) && (i = ge(n)), it(n))) {
    const l = Wt(n);
    s = Ct(n), c.x = l.x + n.clientLeft, c.y = l.y + n.clientTop;
  }
  return {
    width: e.width * s.x,
    height: e.height * s.y,
    x: e.x * s.x - i.scrollLeft * s.x + c.x,
    y: e.y * s.y - i.scrollTop * s.y + c.y
  };
}
function na(t, e) {
  const n = X(t), r = mt(t), o = n.visualViewport;
  let a = r.clientWidth, i = r.clientHeight, s = 0, c = 0;
  if (o) {
    a = o.width, i = o.height;
    const l = Jn();
    (l || !l && e === "fixed") && (s = o.offsetLeft, c = o.offsetTop);
  }
  return {
    width: a,
    height: i,
    x: s,
    y: c
  };
}
function ra(t) {
  var e;
  const n = mt(t), r = ge(t), o = (e = t.ownerDocument) == null ? void 0 : e.body, a = St(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), i = St(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0);
  let s = -r.scrollLeft + er(t);
  const c = -r.scrollTop;
  return Z(o || n).direction === "rtl" && (s += St(n.clientWidth, o ? o.clientWidth : 0) - a), {
    width: a,
    height: i,
    x: s,
    y: c
  };
}
function nr(t) {
  const e = Lt(t);
  return He(e) ? t.ownerDocument.body : it(e) && he(e) ? e : nr(e);
}
function rr(t, e) {
  var n;
  e === void 0 && (e = []);
  const r = nr(t), o = r === ((n = t.ownerDocument) == null ? void 0 : n.body), a = X(r);
  return o ? e.concat(a, a.visualViewport || [], he(r) ? r : []) : e.concat(r, rr(r));
}
function oa(t, e) {
  const n = Wt(t, !0, e === "fixed"), r = n.top + t.clientTop, o = n.left + t.clientLeft, a = it(t) ? Ct(t) : {
    x: 1,
    y: 1
  }, i = t.clientWidth * a.x, s = t.clientHeight * a.y, c = o * a.x, l = r * a.y;
  return {
    top: l,
    left: c,
    right: c + i,
    bottom: l + s,
    x: c,
    y: l,
    width: i,
    height: s
  };
}
function Sn(t, e, n) {
  return e === "viewport" ? Rt(na(t, n)) : ft(e) ? oa(e, n) : Rt(ra(mt(t)));
}
function aa(t, e) {
  const n = e.get(t);
  if (n)
    return n;
  let r = rr(t).filter((s) => ft(s) && dt(s) !== "body"), o = null;
  const a = Z(t).position === "fixed";
  let i = a ? Lt(t) : t;
  for (; ft(i) && !He(i); ) {
    const s = Z(i), c = Be(i);
    (a ? !c && !o : !c && s.position === "static" && !!o && ["absolute", "fixed"].includes(o.position)) ? r = r.filter((f) => f !== i) : o = s, i = Lt(i);
  }
  return e.set(t, r), r;
}
function ia(t) {
  let {
    element: e,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = t;
  const i = [...n === "clippingAncestors" ? aa(e, this._c) : [].concat(n), r], s = i[0], c = i.reduce((l, f) => {
    const u = Sn(e, f, o);
    return l.top = St(u.top, l.top), l.right = Mn(u.right, l.right), l.bottom = Mn(u.bottom, l.bottom), l.left = St(u.left, l.left), l;
  }, Sn(e, s, o));
  return {
    width: c.right - c.left,
    height: c.bottom - c.top,
    x: c.left,
    y: c.top
  };
}
const sa = {
  getClippingRect: ia,
  convertOffsetParentRelativeRectToViewportRelativeRect: ea,
  isElement: ft,
  getDimensions: ta,
  getOffsetParent: Pn,
  getDocumentElement: mt,
  getScale: Ct,
  async getElementRects(t) {
    let {
      reference: e,
      floating: n,
      strategy: r
    } = t;
    const o = this.getOffsetParent || Pn, a = this.getDimensions;
    return {
      reference: Ko(e, await o(n), r),
      floating: {
        x: 0,
        y: 0,
        ...await a(n)
      }
    };
  },
  getClientRects: (t) => Array.from(t.getClientRects()),
  isRTL: (t) => Z(t).direction === "rtl"
}, Re = (t, e, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: sa,
    ...n
  }, a = {
    ...o.platform,
    _c: r
  };
  return Io(t, e, {
    ...o,
    platform: a
  });
};
function En(t, e) {
  const n = (r) => {
    const o = t.hasAttribute("data-ignore-clickable"), a = document.querySelectorAll("[data-clickable]"), i = a.length && Array.from(a).some((s) => s.contains(r.target));
    !o && i || t && !t.contains(r.target) && !r.defaultPrevented && e();
  };
  return document.addEventListener("click", n, !0), {
    destroy() {
      document.removeEventListener("click", n, !0);
    }
  };
}
function la(t) {
  let e;
  function n(a, i) {
    return a[0] ? da : ua;
  }
  let r = n(t), o = r(t);
  return {
    c() {
      e = _("button"), o.c(), d(e, "type", "button"), d(e, "class", "spd-px-3 spd-py-2 spd-transition-colors spd-space-x-1.5 spd-border spd-border-zinc-900 spd-text-zinc-500 spd-rounded-md hover:spd-text-white hover:spd-bg-zinc-900 spd-text-sm spd-flex spd-items-center spd-self-end");
    },
    m(a, i) {
      L(a, e, i), o.m(e, null);
    },
    p(a, i) {
      r !== (r = n(a)) && (o.d(1), o = r(a), o && (o.c(), o.m(e, null)));
    },
    d(a) {
      a && W(e), o.d();
    }
  };
}
function ca(t) {
  let e, n;
  return {
    c() {
      e = V("svg"), n = V("path"), d(n, "d", "M4.5 12.5C4.5 16.9183 8.08172 20.5 12.5 20.5C16.9183 20.5 20.5 16.9183 20.5 12.5C20.5 8.08172 16.9183 4.5 12.5 4.5"), d(n, "stroke", "#9CA3AF"), d(n, "stroke-width", "1.2"), d(e, "class", "spd-animate-spin spd-w-5 spd-h-5"), d(e, "viewBox", "0 0 25 25"), d(e, "fill", "none"), d(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(r, o) {
      L(r, e, o), h(e, n);
    },
    p: P,
    d(r) {
      r && W(e);
    }
  };
}
function ua(t) {
  let e, n, r, o;
  return {
    c() {
      e = V("svg"), n = V("path"), r = M(), o = _("span"), o.textContent = "Resolve", d(n, "stroke-linecap", "round"), d(n, "stroke-linejoin", "round"), d(n, "stroke-width", "2"), d(n, "d", "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"), d(e, "xmlns", "http://www.w3.org/2000/svg"), d(e, "fill", "none"), d(e, "viewBox", "0 0 24 24"), d(e, "stroke", "currentColor"), d(e, "class", "spd-w-5 spd-h-5");
    },
    m(a, i) {
      L(a, e, i), h(e, n), L(a, r, i), L(a, o, i);
    },
    d(a) {
      a && W(e), a && W(r), a && W(o);
    }
  };
}
function da(t) {
  let e, n;
  return {
    c() {
      e = V("svg"), n = V("path"), d(n, "fill-rule", "evenodd"), d(n, "d", "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"), d(n, "clip-rule", "evenodd"), d(e, "xmlns", "http://www.w3.org/2000/svg"), d(e, "viewBox", "0 0 20 20"), d(e, "fill", "currentColor"), d(e, "class", "spd-w-5 spd-h-5 spd-text-green-300");
    },
    m(r, o) {
      L(r, e, o), h(e, n);
    },
    d(r) {
      r && W(e);
    }
  };
}
function fa(t) {
  let e, n, r, o, a, i, s, c, l, f, u, p, g = _n(new Date(t[5]), new Date()) + "", m, v, w, y, x, C, S, T, z, U, $, B, E, A, F, b, H, Y = " ", q, G, yt, Ot, Ie, tt, Ft, Ve, ir = " ", qe, $e, Yt, zt = t[4].userAgent + "", ve, je, et, Bt, Xe, sr = " ", Qe, Ge, Ht, It = t[4].platform + "", we, Je, nt, Vt, Ke, lr = " ", Ze, tn, xt, qt = t[4].screenWidth + "", be, en, $t = t[4].screenHeight + "", ye, nn, rt, jt, rn, cr = " ", on, an, Xt, Qt = t[4].devicePixelRatio + "", xe, sn, st, Gt, ln, ur = " ", cn, un, Jt, Kt = t[4].language + "", _e, ke, dn;
  function fn(k, O) {
    return k[6] ? ca : la;
  }
  let Zt = fn(t), J = Zt(t);
  return {
    c() {
      e = _("button"), n = V("svg"), r = V("path"), o = V("path"), a = M(), i = _("span"), s = N(t[7]), c = M(), l = _("div"), f = _("div"), u = _("div"), p = _("p"), m = N(g), v = M(), w = _("button"), w.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="spd-w-5 spd-h-5"><path fill-rule="evenodd" d="M2 4.25A2.25 2.25 0 014.25 2h11.5A2.25 2.25 0 0118 4.25v8.5A2.25 2.25 0 0115.75 15h-3.105a3.501 3.501 0 001.1 1.677A.75.75 0 0113.26 18H6.74a.75.75 0 01-.484-1.323A3.501 3.501 0 007.355 15H4.25A2.25 2.25 0 012 12.75v-8.5zm1.5 0a.75.75 0 01.75-.75h11.5a.75.75 0 01.75.75v7.5a.75.75 0 01-.75.75H4.25a.75.75 0 01-.75-.75v-7.5z" clip-rule="evenodd"></path></svg>', y = M(), x = _("button"), x.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="spd-w-5 spd-h-5"><path d="M3 10a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM8.5 10a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM15.5 8.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3z"></path></svg>', C = M(), S = _("div"), T = _("p"), z = N(t[1]), $ = M(), J.c(), B = M(), E = _("div"), A = _("dl"), F = _("div"), b = _("dt"), b.textContent = "Pathname:", H = M(), q = N(Y), G = M(), yt = _("dd"), Ot = N(t[2]), Ie = M(), tt = _("div"), Ft = _("dt"), Ft.textContent = "User Agent:", Ve = M(), qe = N(ir), $e = M(), Yt = _("dd"), ve = N(zt), je = M(), et = _("div"), Bt = _("dt"), Bt.textContent = "Platform:", Xe = M(), Qe = N(sr), Ge = M(), Ht = _("dd"), we = N(It), Je = M(), nt = _("div"), Vt = _("dt"), Vt.textContent = "Window size:", Ke = M(), Ze = N(lr), tn = M(), xt = _("dd"), be = N(qt), en = N(" x "), ye = N($t), nn = M(), rt = _("div"), jt = _("dt"), jt.textContent = "Device pixel ratio:", rn = M(), on = N(cr), an = M(), Xt = _("dd"), xe = N(Qt), sn = M(), st = _("div"), Gt = _("dt"), Gt.textContent = "Language:", ln = M(), cn = N(ur), un = M(), Jt = _("dd"), _e = N(Kt), d(r, "d", "M22 44C34.1503 44 44 34.1503 44 22C44 9.84974 34.1503 0 22 0H0V22C0 34.1503 9.84974 44 22 44Z"), d(r, "fill", "black"), d(o, "fill-rule", "evenodd"), d(o, "clip-rule", "evenodd"), d(o, "d", "M22 41.25C32.6315 41.25 41.25 32.6315 41.25 22C41.25 11.3685 32.6315 2.75 22 2.75H2.75V22C2.75 32.6315 11.3685 41.25 22 41.25ZM44 22C44 34.1503 34.1503 44 22 44C9.84974 44 0 34.1503 0 22V0H22C34.1503 0 44 9.84974 44 22Z"), d(o, "fill", "white"), d(n, "class", "spd-w-8 spd-h-8"), d(n, "viewBox", "0 0 44 44"), d(n, "fill", "none"), d(n, "xmlns", "http://www.w3.org/2000/svg"), d(i, "class", "spd-absolute spd-left-1/2 spd-top-1/2 -spd-translate-x-1/2 -spd-translate-y-1/2 spd-text-xs spd-text-white"), d(e, "class", "spd-absolute spd-z-[99999] spd-transition-transform spd-origin-top-left spd-ease-out hover:spd-scale-125"), d(e, "type", "button"), D(e, "spd-scale-125", t[10]), te(e, "left", `${t[3].x * 100}%`), te(e, "top", `${t[3].y * 100}%`), d(p, "class", "spd-text-sm spd-text-zinc-500"), d(w, "type", "button"), d(w, "class", "spd-p-1.5 spd-rounded-md spd-transition-colors hover:spd-bg-zinc-900 spd-text-sm spd-flex spd-items-center spd-self-end"), d(w, "data-ignore-clickable", ""), D(w, "spd-text-zinc-500", !t[13]), D(w, "spd-text-white", t[13]), D(w, "spd-bg-zinc-900", t[13]), d(x, "type", "button"), d(x, "class", "spd-p-1.5 spd-rounded-md spd-text-zinc-500 hover:spd-bg-zinc-900 spd-transition-colors spd-text-sm spd-flex spd-items-center spd-self-end"), d(u, "class", "spd-flex spd-items-center spd-space-x-3 spd-self-end"), d(T, "class", U = "spd-text-base " + (t[0] ? "spd-text-zinc-600 spd-line-through" : "spd-text-zinc-200")), d(S, "class", "spd-pt-2 spd-pb-4 spd-pr-8"), d(f, "class", "spd-flex spd-flex-col"), d(l, "class", "spd-flex spd-flex-col spd-transition spd-delay-100 spd-duration-300 spd-ease-out spd-absolute spd-top-0 spd-left-0 spd-w-max spd-z-[999999] spd-shadow-lg spd-border spd-border-zinc-600 spd-bg-black spd-px-6 spd-py-3 spd-rounded-md spd-text-white"), d(l, "data-clickable", ""), D(l, "spd-opacity-0", !t[10]), D(l, "spd-translate-y-2", !t[10]), D(l, "spd-opacity-100", t[10]), D(l, "spd-translate-y-0", t[10]), d(b, "class", "spd-whitespace-nowrap spd-min-w-[120px]"), d(yt, "class", "spd-ml-3 spd-font-bold"), d(F, "class", "spd-flex"), d(Ft, "class", "spd-whitespace-nowrap spd-min-w-[120px]"), d(Yt, "class", "spd-ml-3 spd-font-bold"), d(tt, "class", "spd-flex"), d(Bt, "class", "spd-whitespace-nowrap spd-min-w-[120px]"), d(Ht, "class", "spd-ml-3 spd-font-bold"), d(et, "class", "spd-flex"), d(Vt, "class", "spd-whitespace-nowrap spd-min-w-[120px]"), d(xt, "class", "spd-ml-3 spd-font-bold"), d(nt, "class", "spd-flex"), d(jt, "class", "spd-whitespace-nowrap spd-min-w-[120px]"), d(Xt, "class", "spd-ml-3 spd-font-bold"), d(rt, "class", "spd-flex"), d(Gt, "class", "spd-whitespace-nowrap spd-min-w-[120px]"), d(Jt, "class", "spd-ml-3 spd-font-bold"), d(st, "class", "spd-flex"), d(A, "class", "spd-flex spd-flex-col spd-space-y-3 spd-text-sm spd-text-white"), d(E, "class", "spd-flex spd-max-w-sm spd-flex-col spd-transition spd-delay-200 spd-duration-300 spd-ease-out spd-absolute spd-top-0 spd-left-0 spd-w-max spd-z-[999999] spd-shadow-lg spd-border spd-border-zinc-800 spd-bg-black spd-px-5 spd-py-3 spd-rounded-md spd-text-white"), d(E, "data-clickable", ""), D(E, "spd-opacity-0", !t[13]), D(E, "spd-translate-y-2", !t[13]), D(E, "spd-opacity-100", t[13]), D(E, "spd-translate-y-0", t[13]);
    },
    m(k, O) {
      L(k, e, O), h(e, n), h(n, r), h(n, o), h(e, a), h(e, i), h(i, s), t[18](e), L(k, c, O), L(k, l, O), h(l, f), h(f, u), h(u, p), h(p, m), h(u, v), h(u, w), t[19](w), h(u, y), h(u, x), h(f, C), h(f, S), h(S, T), h(T, z), h(l, $), J.m(l, null), t[20](l), L(k, B, O), L(k, E, O), h(E, A), h(A, F), h(F, b), h(F, H), h(F, q), h(F, G), h(F, yt), h(yt, Ot), h(F, Ie), h(A, tt), h(tt, Ft), h(tt, Ve), h(tt, qe), h(tt, $e), h(tt, Yt), h(Yt, ve), h(tt, je), h(A, et), h(et, Bt), h(et, Xe), h(et, Qe), h(et, Ge), h(et, Ht), h(Ht, we), h(et, Je), h(A, nt), h(nt, Vt), h(nt, Ke), h(nt, Ze), h(nt, tn), h(nt, xt), h(xt, be), h(xt, en), h(xt, ye), h(nt, nn), h(A, rt), h(rt, jt), h(rt, rn), h(rt, on), h(rt, an), h(rt, Xt), h(Xt, xe), h(rt, sn), h(A, st), h(st, Gt), h(st, ln), h(st, cn), h(st, un), h(st, Jt), h(Jt, _e), t[21](E), ke || (dn = [
        ct(e, "click", t[15]),
        pn(En.call(null, e, t[14])),
        ct(w, "click", t[17]),
        pn(En.call(null, w, t[16]))
      ], ke = !0);
    },
    p(k, [O]) {
      O & 128 && K(s, k[7]), O & 1024 && D(e, "spd-scale-125", k[10]), O & 8 && te(e, "left", `${k[3].x * 100}%`), O & 8 && te(e, "top", `${k[3].y * 100}%`), O & 32 && g !== (g = _n(new Date(k[5]), new Date()) + "") && K(m, g), O & 8192 && D(w, "spd-text-zinc-500", !k[13]), O & 8192 && D(w, "spd-text-white", k[13]), O & 8192 && D(w, "spd-bg-zinc-900", k[13]), O & 2 && K(z, k[1]), O & 1 && U !== (U = "spd-text-base " + (k[0] ? "spd-text-zinc-600 spd-line-through" : "spd-text-zinc-200")) && d(T, "class", U), Zt === (Zt = fn(k)) && J ? J.p(k, O) : (J.d(1), J = Zt(k), J && (J.c(), J.m(l, null))), O & 1024 && D(l, "spd-opacity-0", !k[10]), O & 1024 && D(l, "spd-translate-y-2", !k[10]), O & 1024 && D(l, "spd-opacity-100", k[10]), O & 1024 && D(l, "spd-translate-y-0", k[10]), O & 4 && K(Ot, k[2]), O & 16 && zt !== (zt = k[4].userAgent + "") && K(ve, zt), O & 16 && It !== (It = k[4].platform + "") && K(we, It), O & 16 && qt !== (qt = k[4].screenWidth + "") && K(be, qt), O & 16 && $t !== ($t = k[4].screenHeight + "") && K(ye, $t), O & 16 && Qt !== (Qt = k[4].devicePixelRatio + "") && K(xe, Qt), O & 16 && Kt !== (Kt = k[4].language + "") && K(_e, Kt), O & 8192 && D(E, "spd-opacity-0", !k[13]), O & 8192 && D(E, "spd-translate-y-2", !k[13]), O & 8192 && D(E, "spd-opacity-100", k[13]), O & 8192 && D(E, "spd-translate-y-0", k[13]);
    },
    i: P,
    o: P,
    d(k) {
      k && W(e), t[18](null), k && W(c), k && W(l), t[19](null), J.d(), t[20](null), k && W(B), k && W(E), t[21](null), ke = !1, bt(dn);
    }
  };
}
const An = 300;
function ma(t, e, n) {
  let r, o, a = !1, i, s, c = !1, { resolved: l = !1 } = e, { text: f = "" } = e, { pathname: u = "" } = e, { position: p = { x: 0, y: 0 } } = e, { metadata: g = {} } = e, { createdAt: m = new Date() } = e, { loading: v = !1 } = e, { number: w = 1 } = e;
  const y = async () => {
    const { x: b, y: H } = await Re(r, o, {
      placement: "right-start",
      middleware: [Ae(), Se(4), Pe(), Ee({ padding: 8 })]
    });
    Object.assign(o.style, { left: `${b}px`, top: `${H}px` });
  }, x = () => {
    a || (n(9, o.style.display = "", o), n(10, a = !0), y());
  }, C = () => {
    a && (n(10, a = !1), n(13, c = !1), setTimeout(
      () => {
        n(9, o.style.display = "none", o), n(12, s.style.display = "none", s);
      },
      An
    ));
  }, S = () => {
    a ? C() : x();
  }, T = async () => {
    if (!i)
      return;
    const { x: b, y: H } = await Re(i, s, {
      placement: "top",
      middleware: [Ae(), Se(20), Pe(), Ee({ padding: 8 })]
    });
    Object.assign(s.style, { left: `${b}px`, top: `${H}px` });
  }, z = () => {
    c || (n(12, s.style.display = "", s), n(13, c = !0), T());
  }, U = () => {
    c && (n(13, c = !1), setTimeout(
      () => {
        n(12, s.style.display = "none", s);
      },
      An
    ));
  }, $ = () => {
    c ? U() : z();
  };
  function B(b) {
    ht[b ? "unshift" : "push"](() => {
      r = b, n(8, r);
    });
  }
  function E(b) {
    ht[b ? "unshift" : "push"](() => {
      i = b, n(11, i);
    });
  }
  function A(b) {
    ht[b ? "unshift" : "push"](() => {
      o = b, n(9, o);
    });
  }
  function F(b) {
    ht[b ? "unshift" : "push"](() => {
      s = b, n(12, s);
    });
  }
  return t.$$set = (b) => {
    "resolved" in b && n(0, l = b.resolved), "text" in b && n(1, f = b.text), "pathname" in b && n(2, u = b.pathname), "position" in b && n(3, p = b.position), "metadata" in b && n(4, g = b.metadata), "createdAt" in b && n(5, m = b.createdAt), "loading" in b && n(6, v = b.loading), "number" in b && n(7, w = b.number);
  }, [
    l,
    f,
    u,
    p,
    g,
    m,
    v,
    w,
    r,
    o,
    a,
    i,
    s,
    c,
    C,
    S,
    U,
    $,
    B,
    E,
    A,
    F
  ];
}
class pa extends pe {
  constructor(e) {
    super(), me(this, e, ma, fa, Tt, {
      resolved: 0,
      text: 1,
      pathname: 2,
      position: 3,
      metadata: 4,
      createdAt: 5,
      loading: 6,
      number: 7
    });
  }
}
const kt = [];
function or(t, e = P) {
  let n;
  const r = /* @__PURE__ */ new Set();
  function o(s) {
    if (Tt(t, s) && (t = s, n)) {
      const c = !kt.length;
      for (const l of r)
        l[1](), kt.push(l, t);
      if (c) {
        for (let l = 0; l < kt.length; l += 2)
          kt[l][0](kt[l + 1]);
        kt.length = 0;
      }
    }
  }
  function a(s) {
    o(s(t));
  }
  function i(s, c = P) {
    const l = [s, c];
    return r.add(l), r.size === 1 && (n = e(o) || P), s(t), () => {
      r.delete(l), r.size === 0 && (n(), n = null);
    };
  }
  return { set: o, update: a, subscribe: i };
}
const vt = or(!1);
function ha(t) {
  let e;
  return {
    c() {
      e = V("path"), d(e, "fill-rule", "evenodd"), d(e, "d", "M2 10c0-3.967 3.69-7 8-7 4.31 0 8 3.033 8 7s-3.69 7-8 7a9.165 9.165 0 01-1.504-.123 5.976 5.976 0 01-3.935 1.107.75.75 0 01-.584-1.143 3.478 3.478 0 00.522-1.756C2.979 13.825 2 12.025 2 10z"), d(e, "clip-rule", "evenodd");
    },
    m(n, r) {
      L(n, e, r);
    },
    d(n) {
      n && W(e);
    }
  };
}
function ga(t) {
  let e;
  return {
    c() {
      e = V("path"), d(e, "d", "M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z");
    },
    m(n, r) {
      L(n, e, r);
    },
    d(n) {
      n && W(e);
    }
  };
}
function va(t) {
  let e, n, r, o;
  return {
    c() {
      e = _("span"), e.textContent = "Comment", n = M(), r = _("code"), o = N("c"), d(r, "class", ar);
    },
    m(a, i) {
      L(a, e, i), L(a, n, i), L(a, r, i), h(r, o);
    },
    p: P,
    d(a) {
      a && W(e), a && W(n), a && W(r);
    }
  };
}
function wa(t) {
  let e, n, r, o;
  return {
    c() {
      e = _("span"), e.textContent = "Close comments", n = M(), r = _("code"), o = N("esc"), d(r, "class", ar);
    },
    m(a, i) {
      L(a, e, i), L(a, n, i), L(a, r, i), h(r, o);
    },
    p: P,
    d(a) {
      a && W(e), a && W(n), a && W(r);
    }
  };
}
function ba(t) {
  let e, n, r, o, a, i, s;
  function c(m, v) {
    return m[0] ? ga : ha;
  }
  let l = c(t), f = l(t);
  function u(m, v) {
    return m[0] ? wa : va;
  }
  let p = u(t), g = p(t);
  return {
    c() {
      e = _("button"), n = V("svg"), f.c(), r = M(), o = _("span"), g.c(), d(n, "xmlns", "http://www.w3.org/2000/svg"), d(n, "viewBox", "0 0 20 20"), d(n, "fill", "currentColor"), d(n, "class", "spd-w-5 spd-h-5 spd-mr-2 spd-flex-shrink-0"), d(o, "class", "spd-flex spd-items-center"), d(e, "class", a = "spd-flex spd-items-center spd-fixed spd-bottom-8 spd-left-1/2 spd-bg-black spd-rounded-full -spd-translate-x-1/2 spd-pl-5 spd-pr-6 spd-h-11 !spd-z-[99999] spd-shadow-md spd-border spd-border-zinc-600 spd-font-sans spd-text-base spd-transition-colors focus:spd-ring-2 focus:spd-ring-zinc-900/60 hover:spd-text-white " + (t[0] ? "spd-text-white" : "spd-text-zinc-500")), d(e, "data-ignore-cursor", "");
    },
    m(m, v) {
      L(m, e, v), h(e, n), f.m(n, null), h(e, r), h(e, o), g.m(o, null), i || (s = ct(e, "click", t[1]), i = !0);
    },
    p(m, [v]) {
      l !== (l = c(m)) && (f.d(1), f = l(m), f && (f.c(), f.m(n, null))), p === (p = u(m)) && g ? g.p(m, v) : (g.d(1), g = p(m), g && (g.c(), g.m(o, null))), v & 1 && a !== (a = "spd-flex spd-items-center spd-fixed spd-bottom-8 spd-left-1/2 spd-bg-black spd-rounded-full -spd-translate-x-1/2 spd-pl-5 spd-pr-6 spd-h-11 !spd-z-[99999] spd-shadow-md spd-border spd-border-zinc-600 spd-font-sans spd-text-base spd-transition-colors focus:spd-ring-2 focus:spd-ring-zinc-900/60 hover:spd-text-white " + (m[0] ? "spd-text-white" : "spd-text-zinc-500")) && d(e, "class", a);
    },
    i: P,
    o: P,
    d(m) {
      m && W(e), f.d(), g.d(), i = !1, s();
    }
  };
}
const ar = "spd-text-xs spd-ml-3 spd-text-zinc-500 spd-rounded spd-p-1 spd-leading-none spd-shadow-sm spd-bg-zinc-900 spd-border spd-border-zinc-700";
function ya(t, e, n) {
  let r;
  return Le(t, vt, (a) => n(0, r = a)), [r, () => {
    vt.update((a) => !a);
  }];
}
class xa extends pe {
  constructor(e) {
    super(), me(this, e, ya, ba, Tt, {});
  }
}
function Rn(t) {
  let e, n, r, o, a, i, s, c, l, f, u;
  function p(v, w) {
    return v[0] ? ka : _a;
  }
  let g = p(t), m = g(t);
  return {
    c() {
      e = _("form"), n = _("textarea"), r = M(), o = _("div"), a = _("button"), a.textContent = "Cancel", i = M(), s = _("button"), c = _("span"), c.textContent = "Post", l = M(), m.c(), d(n, "class", "spd-px-5 spd-pt-4 spd-pb-3 spd-rounded-md spd-transition-colors spd-bg-black spd-resize-none spd-appearance-none placeholder:spd-text-zinc-500 focus:spd-outline-none focus:placeholder:spd-text-zinc-700 spd-text-base"), d(n, "placeholder", "Add a comment..."), d(n, "rows", "3"), d(a, "type", "button"), d(a, "class", "spd-px-3 spd-py-2 spd-transition-colors spd-space-x-1.5 spd-border spd-border-zinc-900 spd-text-zinc-500 spd-rounded-md hover:spd-text-white hover:spd-bg-zinc-900 spd-text-sm spd-flex spd-items-center"), d(s, "type", "submit"), s.disabled = t[0], d(s, "class", "spd-px-3 spd-py-2 spd-transition-colors spd-space-x-1.5 spd-border spd-border-zinc-700 spd-text-white spd-rounded-md hover:spd-bg-zinc-900 spd-text-sm spd-flex spd-items-center"), d(o, "class", "spd-flex spd-items-center spd-px-5 spd-py-3 spd-space-x-3 spd-self-end"), d(e, "class", "spd-flex spd-flex-col spd-transition !spd-cursor-auto spd-delay-100 spd-duration-300 spd-ease-out spd-absolute spd-top-0 spd-left-0 spd-w-full spd-max-w-xs spd-z-[999999] spd-shadow-lg spd-border spd-border-zinc-600 spd-bg-black spd-rounded-md spd-text-white"), d(e, "data-ignore-cursor", ""), D(e, "spd-opacity-0", !t[3]), D(e, "spd-translate-y-2", !t[3]), D(e, "spd-opacity-100", t[3]), D(e, "spd-translate-y-0", t[3]);
    },
    m(v, w) {
      L(v, e, w), h(e, n), hn(n, t[1]), h(e, r), h(e, o), h(o, a), h(o, i), h(o, s), h(s, c), h(s, l), m.m(s, null), t[9](e), f || (u = [
        ct(n, "input", t[8]),
        ct(a, "click", t[6]),
        ct(e, "submit", hr(t[7]))
      ], f = !0);
    },
    p(v, w) {
      w & 2 && hn(n, v[1]), g !== (g = p(v)) && (m.d(1), m = g(v), m && (m.c(), m.m(s, null))), w & 1 && (s.disabled = v[0]), w & 8 && D(e, "spd-opacity-0", !v[3]), w & 8 && D(e, "spd-translate-y-2", !v[3]), w & 8 && D(e, "spd-opacity-100", v[3]), w & 8 && D(e, "spd-translate-y-0", v[3]);
    },
    d(v) {
      v && W(e), m.d(), t[9](null), f = !1, bt(u);
    }
  };
}
function _a(t) {
  let e, n;
  return {
    c() {
      e = V("svg"), n = V("path"), d(n, "d", "M3.105 2.289a.75.75 0 00-.826.95l1.414 4.925A1.5 1.5 0 005.135 9.25h6.115a.75.75 0 010 1.5H5.135a1.5 1.5 0 00-1.442 1.086l-1.414 4.926a.75.75 0 00.826.95 28.896 28.896 0 0015.293-7.154.75.75 0 000-1.115A28.897 28.897 0 003.105 2.289z"), d(e, "xmlns", "http://www.w3.org/2000/svg"), d(e, "viewBox", "0 0 20 20"), d(e, "fill", "currentColor"), d(e, "class", "spd-w-4 spd-h-4");
    },
    m(r, o) {
      L(r, e, o), h(e, n);
    },
    d(r) {
      r && W(e);
    }
  };
}
function ka(t) {
  let e, n;
  return {
    c() {
      e = V("svg"), n = V("path"), d(n, "d", "M4.5 12.5C4.5 16.9183 8.08172 20.5 12.5 20.5C16.9183 20.5 20.5 16.9183 20.5 12.5C20.5 8.08172 16.9183 4.5 12.5 4.5"), d(n, "stroke", "#9CA3AF"), d(n, "stroke-width", "1.2"), d(e, "class", "spd-animate-spin spd-w-5 spd-h-5"), d(e, "viewBox", "0 0 25 25"), d(e, "fill", "none"), d(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(r, o) {
      L(r, e, o), h(e, n);
    },
    d(r) {
      r && W(e);
    }
  };
}
function Ca(t) {
  let e, n, r, o = t[4] && Rn(t);
  return {
    c() {
      o && o.c(), e = Fn();
    },
    m(a, i) {
      o && o.m(a, i), L(a, e, i), n || (r = ct(window, "click", t[5], !0), n = !0);
    },
    p(a, [i]) {
      a[4] ? o ? o.p(a, i) : (o = Rn(a), o.c(), o.m(e.parentNode, e)) : o && (o.d(1), o = null);
    },
    i: P,
    o: P,
    d(a) {
      o && o.d(a), a && W(e), n = !1, r();
    }
  };
}
const Ta = 300;
function Oa(t, e, n) {
  let r;
  Le(t, vt, (m) => n(4, r = m));
  let o = "", a, i = !1, { loading: s = !1 } = e;
  const c = async ({ clientX: m, clientY: v }) => {
    const w = {
      getBoundingClientRect() {
        return {
          width: 0,
          height: 0,
          x: m,
          y: v,
          top: v,
          left: m,
          right: m,
          bottom: v
        };
      },
      getClientRects() {
        return [];
      }
    }, { x: y, y: x } = await Re(w, a, {
      placement: "right-start",
      middleware: [Ae(), Se(28), Pe(), Ee({ padding: 8 })]
    });
    Object.assign(a.style, { left: `${y}px`, top: `${x}px` });
  }, l = (m) => {
    const v = a && a.contains(m.target);
    !r || v || (c(m), i || (n(2, a.style.display = "", a), n(3, i = !0)), m.target.closest("a, button, [role='button']") && m.preventDefault());
  }, f = () => {
    i && (n(3, i = !1), setTimeout(
      () => {
        n(2, a.style.display = "none", a);
      },
      Ta
    ));
  };
  function u(m) {
    wr.call(this, t, m);
  }
  function p() {
    o = this.value, n(1, o);
  }
  function g(m) {
    ht[m ? "unshift" : "push"](() => {
      a = m, n(2, a);
    });
  }
  return t.$$set = (m) => {
    "loading" in m && n(0, s = m.loading);
  }, [
    s,
    o,
    a,
    i,
    r,
    l,
    f,
    u,
    p,
    g
  ];
}
class Ma extends pe {
  constructor(e) {
    super(), me(this, e, Oa, Ca, Tt, { loading: 0 });
  }
}
const Da = or([]), { window: Pa } = Cr;
function Wn(t, e, n) {
  const r = t.slice();
  return r[4] = e[n], r;
}
function Sa(t) {
  return {
    c: P,
    m: P,
    p: P,
    i: P,
    o: P,
    d: P
  };
}
function Ea(t) {
  let e, n, r = t[3], o = [];
  for (let i = 0; i < r.length; i += 1)
    o[i] = Ln(Wn(t, r, i));
  const a = (i) => at(o[i], 1, 1, () => {
    o[i] = null;
  });
  return {
    c() {
      for (let i = 0; i < o.length; i += 1)
        o[i].c();
      e = Fn();
    },
    m(i, s) {
      for (let c = 0; c < o.length; c += 1)
        o[c].m(i, s);
      L(i, e, s), n = !0;
    },
    p(i, s) {
      if (s & 2) {
        r = i[3];
        let c;
        for (c = 0; c < r.length; c += 1) {
          const l = Wn(i, r, c);
          o[c] ? (o[c].p(l, s), Q(o[c], 1)) : (o[c] = Ln(l), o[c].c(), Q(o[c], 1), o[c].m(e.parentNode, e));
        }
        for (Ue(), c = r.length; c < o.length; c += 1)
          a(c);
        Fe();
      }
    },
    i(i) {
      if (!n) {
        for (let s = 0; s < r.length; s += 1)
          Q(o[s]);
        n = !0;
      }
    },
    o(i) {
      o = o.filter(Boolean);
      for (let s = 0; s < o.length; s += 1)
        at(o[s]);
      n = !1;
    },
    d(i) {
      pr(o, i), i && W(e);
    }
  };
}
function Ln(t) {
  let e, n;
  return e = new pa({
    props: {
      resolved: t[4].resolved,
      text: t[4].text,
      metadata: t[4].metadata,
      position: t[4].position,
      pathname: t[4].pathname,
      createdAt: t[4].createdAt
    }
  }), {
    c() {
      Ye(e.$$.fragment);
    },
    m(r, o) {
      de(e, r, o), n = !0;
    },
    p: P,
    i(r) {
      n || (Q(e.$$.fragment, r), n = !0);
    },
    o(r) {
      at(e.$$.fragment, r), n = !1;
    },
    d(r) {
      fe(e, r);
    }
  };
}
function Aa(t) {
  return {
    c: P,
    m: P,
    p: P,
    i: P,
    o: P,
    d: P
  };
}
function Nn(t) {
  let e, n;
  return e = new Ma({}), {
    c() {
      Ye(e.$$.fragment);
    },
    m(r, o) {
      de(e, r, o), n = !0;
    },
    p: P,
    i(r) {
      n || (Q(e.$$.fragment, r), n = !0);
    },
    o(r) {
      at(e.$$.fragment, r), n = !1;
    },
    d(r) {
      fe(e, r);
    }
  };
}
function Ra(t) {
  let e, n = t[0], r, o, a, i, s, c = {
    ctx: t,
    current: null,
    token: null,
    hasCatch: !1,
    pending: Aa,
    then: Ea,
    catch: Sa,
    value: 3,
    blocks: [, , ,]
  };
  _r(t[1](), c);
  let l = Nn();
  return o = new xa({}), {
    c() {
      c.block.c(), e = M(), l.c(), r = M(), Ye(o.$$.fragment);
    },
    m(f, u) {
      c.block.m(f, c.anchor = u), c.mount = () => e.parentNode, c.anchor = e, L(f, e, u), l.m(f, u), L(f, r, u), de(o, f, u), a = !0, i || (s = ct(Pa, "keydown", t[2]), i = !0);
    },
    p(f, [u]) {
      t = f, kr(c, t, u), u & 1 && Tt(n, n = t[0]) ? (Ue(), at(l, 1, 1, P), Fe(), l = Nn(), l.c(), Q(l, 1), l.m(r.parentNode, r)) : l.p(t, u);
    },
    i(f) {
      a || (Q(c.block), Q(l), Q(o.$$.fragment, f), a = !0);
    },
    o(f) {
      for (let u = 0; u < 3; u += 1) {
        const p = c.blocks[u];
        at(p);
      }
      at(l), at(o.$$.fragment, f), a = !1;
    },
    d(f) {
      c.block.d(f), c.token = null, c = null, f && W(e), l.d(f), f && W(r), fe(o, f), i = !1, s();
    }
  };
}
function Wa(t, e, n) {
  let r;
  Le(t, vt, (i) => n(0, r = i));
  const o = async () => {
    const s = document.currentScript.getAttribute("src").split("?id=")[1];
    try {
      const c = await fetch(`${Or.BASE_URL}/api/comments?projectId=${s}&pathname=${window.location.pathname}`), l = await c.json();
      if (console.log(l), c.ok && l)
        return Da.set(l), l;
    } catch (c) {
      throw console.log(c), new Error("Oops, couldn't fetch comments from database.");
    }
  }, a = (i) => {
    i.keyCode === 67 && !r && vt.set(!0), i.keyCode === 27 && r && vt.set(!1);
  };
  return vt.subscribe((i) => {
    i ? document.body.classList.add("spd-cursor") : document.body.classList.remove("spd-cursor");
  }), vr(() => {
    document.body.style.position = "relative";
  }), [r, o, a];
}
class La extends pe {
  constructor(e) {
    super(), me(this, e, Wa, Ra, Tt, {});
  }
}
const Na = (t) => {
  const e = document.head, n = document.createElement("link");
  n.rel = "stylesheet", n.href = t, e.appendChild(n);
}, Ua = () => {
  const t = document.createElement("div");
  t.setAttribute("id", "speedback-app"), document.body.appendChild(t);
}, Fa = () => {
  new La({
    target: document.getElementById("speedback-app")
  });
}, Ya = async () => {
  Ua(), Fa(), Na("/style.css");
};
Ya();
