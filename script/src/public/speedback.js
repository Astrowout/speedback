function A() {
}
function lr(t) {
  return t && typeof t == "object" && typeof t.then == "function";
}
function En(t) {
  return t();
}
function sn() {
  return /* @__PURE__ */ Object.create(null);
}
function Ct(t) {
  t.forEach(En);
}
function De(t) {
  return typeof t == "function";
}
function ue(t, e) {
  return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function";
}
function cr(t) {
  return Object.keys(t).length === 0;
}
function ur(t, ...e) {
  if (t == null)
    return A;
  const n = t.subscribe(...e);
  return n.unsubscribe ? () => n.unsubscribe() : n;
}
function An(t, e, n) {
  t.$$.on_destroy.push(ur(e, n));
}
function ye(t) {
  return t && De(t.destroy) ? t.destroy : A;
}
function h(t, e) {
  t.appendChild(e);
}
function W(t, e, n) {
  t.insertBefore(e, n || null);
}
function R(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function dr(t, e) {
  for (let n = 0; n < t.length; n += 1)
    t[n] && t[n].d(e);
}
function C(t) {
  return document.createElement(t);
}
function X(t) {
  return document.createElementNS("http://www.w3.org/2000/svg", t);
}
function L(t) {
  return document.createTextNode(t);
}
function P() {
  return L(" ");
}
function Me() {
  return L("");
}
function ht(t, e, n, r) {
  return t.addEventListener(e, n, r), () => t.removeEventListener(e, n, r);
}
function fr(t) {
  return function(e) {
    return e.preventDefault(), t.call(this, e);
  };
}
function d(t, e, n) {
  n == null ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n);
}
function mr(t) {
  return Array.from(t.childNodes);
}
function J(t, e) {
  e = "" + e, t.wholeText !== e && (t.data = e);
}
function Zt(t, e, n, r) {
  n === null ? t.style.removeProperty(e) : t.style.setProperty(e, n, r ? "important" : "");
}
function V(t, e, n) {
  t.classList[n ? "add" : "remove"](e);
}
let Pt;
function rt(t) {
  Pt = t;
}
function Rn() {
  if (!Pt)
    throw new Error("Function called outside component initialization");
  return Pt;
}
function hr(t) {
  Rn().$$.on_mount.push(t);
}
const Mt = [], _t = [], ne = [], ln = [], pr = Promise.resolve();
let Ce = !1;
function gr() {
  Ce || (Ce = !0, pr.then(Se));
}
function Te(t) {
  ne.push(t);
}
const xe = /* @__PURE__ */ new Set();
let te = 0;
function Se() {
  const t = Pt;
  do {
    for (; te < Mt.length; ) {
      const e = Mt[te];
      te++, rt(e), vr(e.$$);
    }
    for (rt(null), Mt.length = 0, te = 0; _t.length; )
      _t.pop()();
    for (let e = 0; e < ne.length; e += 1) {
      const n = ne[e];
      xe.has(n) || (xe.add(n), n());
    }
    ne.length = 0;
  } while (Mt.length);
  for (; ln.length; )
    ln.pop()();
  Ce = !1, xe.clear(), rt(t);
}
function vr(t) {
  if (t.fragment !== null) {
    t.update(), Ct(t.before_update);
    const e = t.dirty;
    t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(Te);
  }
}
const re = /* @__PURE__ */ new Set();
let pt;
function Wn() {
  pt = {
    r: 0,
    c: [],
    p: pt
  };
}
function Ln() {
  pt.r || Ct(pt.c), pt = pt.p;
}
function ot(t, e) {
  t && t.i && (re.delete(t), t.i(e));
}
function gt(t, e, n, r) {
  if (t && t.o) {
    if (re.has(t))
      return;
    re.add(t), pt.c.push(() => {
      re.delete(t), r && (n && t.d(1), r());
    }), t.o(e);
  } else
    r && r();
}
function wr(t, e) {
  const n = e.token = {};
  function r(o, a, i, s) {
    if (e.token !== n)
      return;
    e.resolved = s;
    let c = e.ctx;
    i !== void 0 && (c = c.slice(), c[i] = s);
    const l = o && (e.current = o)(c);
    let m = !1;
    e.block && (e.blocks ? e.blocks.forEach((u, f) => {
      f !== a && u && (Wn(), gt(u, 1, 1, () => {
        e.blocks[f] === u && (e.blocks[f] = null);
      }), Ln());
    }) : e.block.d(1), l.c(), ot(l, 1), l.m(e.mount(), e.anchor), m = !0), e.block = l, e.blocks && (e.blocks[a] = l), m && Se();
  }
  if (lr(t)) {
    const o = Rn();
    if (t.then((a) => {
      rt(o), r(e.then, 1, e.value, a), rt(null);
    }, (a) => {
      if (rt(o), r(e.catch, 2, e.error, a), rt(null), !e.hasCatch)
        throw a;
    }), e.current !== e.pending)
      return r(e.pending, 0), !0;
  } else {
    if (e.current !== e.then)
      return r(e.then, 1, e.value, t), !0;
    e.resolved = t;
  }
}
function br(t, e, n) {
  const r = e.slice(), { resolved: o } = t;
  t.current === t.then && (r[t.value] = o), t.current === t.catch && (r[t.error] = o), t.block.p(r, n);
}
const yr = typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : global;
function Nn(t) {
  t && t.c();
}
function Pe(t, e, n, r) {
  const { fragment: o, after_update: a } = t.$$;
  o && o.m(e, n), r || Te(() => {
    const i = t.$$.on_mount.map(En).filter(De);
    t.$$.on_destroy ? t.$$.on_destroy.push(...i) : Ct(i), t.$$.on_mount = [];
  }), a.forEach(Te);
}
function Ee(t, e) {
  const n = t.$$;
  n.fragment !== null && (Ct(n.on_destroy), n.fragment && n.fragment.d(e), n.on_destroy = n.fragment = null, n.ctx = []);
}
function xr(t, e) {
  t.$$.dirty[0] === -1 && (Mt.push(t), gr(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function Ae(t, e, n, r, o, a, i, s = [-1]) {
  const c = Pt;
  rt(t);
  const l = t.$$ = {
    fragment: null,
    ctx: [],
    props: a,
    update: A,
    not_equal: o,
    bound: sn(),
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (c ? c.$$.context : [])),
    callbacks: sn(),
    dirty: s,
    skip_bound: !1,
    root: e.target || c.$$.root
  };
  i && i(l.root);
  let m = !1;
  if (l.ctx = n ? n(t, e.props || {}, (u, f, ...p) => {
    const g = p.length ? p[0] : f;
    return l.ctx && o(l.ctx[u], l.ctx[u] = g) && (!l.skip_bound && l.bound[u] && l.bound[u](g), m && xr(t, u)), f;
  }) : [], l.update(), m = !0, Ct(l.before_update), l.fragment = r ? r(l.ctx) : !1, e.target) {
    if (e.hydrate) {
      const u = mr(e.target);
      l.fragment && l.fragment.l(u), u.forEach(R);
    } else
      l.fragment && l.fragment.c();
    e.intro && ot(t.$$.fragment), Pe(t, e.target, e.anchor, e.customElement), Se();
  }
  rt(c);
}
class Re {
  $destroy() {
    Ee(this, 1), this.$destroy = A;
  }
  $on(e, n) {
    if (!De(n))
      return A;
    const r = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return r.push(n), () => {
      const o = r.indexOf(n);
      o !== -1 && r.splice(o, 1);
    };
  }
  $set(e) {
    this.$$set && !cr(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const _r = {
  BASE_URL: "http://localhost:3000"
};
function ct(t) {
  if (t === null || t === !0 || t === !1)
    return NaN;
  var e = Number(t);
  return isNaN(e) ? e : e < 0 ? Math.ceil(e) : Math.floor(e);
}
function H(t, e) {
  if (e.length < t)
    throw new TypeError(t + " argument" + (t > 1 ? "s" : "") + " required, but only " + e.length + " present");
}
function oe(t) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? oe = function(n) {
    return typeof n;
  } : oe = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, oe(t);
}
function I(t) {
  H(1, arguments);
  var e = Object.prototype.toString.call(t);
  return t instanceof Date || oe(t) === "object" && e === "[object Date]" ? new Date(t.getTime()) : typeof t == "number" || e === "[object Number]" ? new Date(t) : ((typeof t == "string" || e === "[object String]") && typeof console < "u" && (console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"), console.warn(new Error().stack)), new Date(NaN));
}
function kr(t, e) {
  H(2, arguments);
  var n = I(t).getTime(), r = ct(e);
  return new Date(n + r);
}
var Cr = {};
function Lt() {
  return Cr;
}
function Et(t) {
  var e = new Date(Date.UTC(t.getFullYear(), t.getMonth(), t.getDate(), t.getHours(), t.getMinutes(), t.getSeconds(), t.getMilliseconds()));
  return e.setUTCFullYear(t.getFullYear()), t.getTime() - e.getTime();
}
function cn(t) {
  H(1, arguments);
  var e = I(t);
  return e.setHours(0, 0, 0, 0), e;
}
var Tr = 864e5;
function Or(t, e) {
  H(2, arguments);
  var n = cn(t), r = cn(e), o = n.getTime() - Et(n), a = r.getTime() - Et(r);
  return Math.round((o - a) / Tr);
}
function ae(t) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? ae = function(n) {
    return typeof n;
  } : ae = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, ae(t);
}
function Dr(t) {
  return H(1, arguments), t instanceof Date || ae(t) === "object" && Object.prototype.toString.call(t) === "[object Date]";
}
function Mr(t) {
  if (H(1, arguments), !Dr(t) && typeof t != "number")
    return !1;
  var e = I(t);
  return !isNaN(Number(e));
}
function Oe(t, e) {
  H(2, arguments);
  var n = ct(e);
  return kr(t, -n);
}
var Sr = 864e5;
function Pr(t) {
  H(1, arguments);
  var e = I(t), n = e.getTime();
  e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
  var r = e.getTime(), o = n - r;
  return Math.floor(o / Sr) + 1;
}
function ie(t) {
  H(1, arguments);
  var e = 1, n = I(t), r = n.getUTCDay(), o = (r < e ? 7 : 0) + r - e;
  return n.setUTCDate(n.getUTCDate() - o), n.setUTCHours(0, 0, 0, 0), n;
}
function Un(t) {
  H(1, arguments);
  var e = I(t), n = e.getUTCFullYear(), r = new Date(0);
  r.setUTCFullYear(n + 1, 0, 4), r.setUTCHours(0, 0, 0, 0);
  var o = ie(r), a = new Date(0);
  a.setUTCFullYear(n, 0, 4), a.setUTCHours(0, 0, 0, 0);
  var i = ie(a);
  return e.getTime() >= o.getTime() ? n + 1 : e.getTime() >= i.getTime() ? n : n - 1;
}
function Er(t) {
  H(1, arguments);
  var e = Un(t), n = new Date(0);
  n.setUTCFullYear(e, 0, 4), n.setUTCHours(0, 0, 0, 0);
  var r = ie(n);
  return r;
}
var Ar = 6048e5;
function Rr(t) {
  H(1, arguments);
  var e = I(t), n = ie(e).getTime() - Er(e).getTime();
  return Math.round(n / Ar) + 1;
}
function se(t, e) {
  var n, r, o, a, i, s, c, l;
  H(1, arguments);
  var m = Lt(), u = ct((n = (r = (o = (a = e == null ? void 0 : e.weekStartsOn) !== null && a !== void 0 ? a : e == null || (i = e.locale) === null || i === void 0 || (s = i.options) === null || s === void 0 ? void 0 : s.weekStartsOn) !== null && o !== void 0 ? o : m.weekStartsOn) !== null && r !== void 0 ? r : (c = m.locale) === null || c === void 0 || (l = c.options) === null || l === void 0 ? void 0 : l.weekStartsOn) !== null && n !== void 0 ? n : 0);
  if (!(u >= 0 && u <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var f = I(t), p = f.getUTCDay(), g = (p < u ? 7 : 0) + p - u;
  return f.setUTCDate(f.getUTCDate() - g), f.setUTCHours(0, 0, 0, 0), f;
}
function Yn(t, e) {
  var n, r, o, a, i, s, c, l;
  H(1, arguments);
  var m = I(t), u = m.getUTCFullYear(), f = Lt(), p = ct((n = (r = (o = (a = e == null ? void 0 : e.firstWeekContainsDate) !== null && a !== void 0 ? a : e == null || (i = e.locale) === null || i === void 0 || (s = i.options) === null || s === void 0 ? void 0 : s.firstWeekContainsDate) !== null && o !== void 0 ? o : f.firstWeekContainsDate) !== null && r !== void 0 ? r : (c = f.locale) === null || c === void 0 || (l = c.options) === null || l === void 0 ? void 0 : l.firstWeekContainsDate) !== null && n !== void 0 ? n : 1);
  if (!(p >= 1 && p <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var g = new Date(0);
  g.setUTCFullYear(u + 1, 0, p), g.setUTCHours(0, 0, 0, 0);
  var b = se(g, e), v = new Date(0);
  v.setUTCFullYear(u, 0, p), v.setUTCHours(0, 0, 0, 0);
  var y = se(v, e);
  return m.getTime() >= b.getTime() ? u + 1 : m.getTime() >= y.getTime() ? u : u - 1;
}
function Wr(t, e) {
  var n, r, o, a, i, s, c, l;
  H(1, arguments);
  var m = Lt(), u = ct((n = (r = (o = (a = e == null ? void 0 : e.firstWeekContainsDate) !== null && a !== void 0 ? a : e == null || (i = e.locale) === null || i === void 0 || (s = i.options) === null || s === void 0 ? void 0 : s.firstWeekContainsDate) !== null && o !== void 0 ? o : m.firstWeekContainsDate) !== null && r !== void 0 ? r : (c = m.locale) === null || c === void 0 || (l = c.options) === null || l === void 0 ? void 0 : l.firstWeekContainsDate) !== null && n !== void 0 ? n : 1), f = Yn(t, e), p = new Date(0);
  p.setUTCFullYear(f, 0, u), p.setUTCHours(0, 0, 0, 0);
  var g = se(p, e);
  return g;
}
var Lr = 6048e5;
function Nr(t, e) {
  H(1, arguments);
  var n = I(t), r = se(n, e).getTime() - Wr(n, e).getTime();
  return Math.round(r / Lr) + 1;
}
function E(t, e) {
  for (var n = t < 0 ? "-" : "", r = Math.abs(t).toString(); r.length < e; )
    r = "0" + r;
  return n + r;
}
var Ur = {
  y: function(e, n) {
    var r = e.getUTCFullYear(), o = r > 0 ? r : 1 - r;
    return E(n === "yy" ? o % 100 : o, n.length);
  },
  M: function(e, n) {
    var r = e.getUTCMonth();
    return n === "M" ? String(r + 1) : E(r + 1, 2);
  },
  d: function(e, n) {
    return E(e.getUTCDate(), n.length);
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
    return E(e.getUTCHours() % 12 || 12, n.length);
  },
  H: function(e, n) {
    return E(e.getUTCHours(), n.length);
  },
  m: function(e, n) {
    return E(e.getUTCMinutes(), n.length);
  },
  s: function(e, n) {
    return E(e.getUTCSeconds(), n.length);
  },
  S: function(e, n) {
    var r = n.length, o = e.getUTCMilliseconds(), a = Math.floor(o * Math.pow(10, r - 3));
    return E(a, n.length);
  }
};
const st = Ur;
var yt = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, Yr = {
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
    return st.y(e, n);
  },
  Y: function(e, n, r, o) {
    var a = Yn(e, o), i = a > 0 ? a : 1 - a;
    if (n === "YY") {
      var s = i % 100;
      return E(s, 2);
    }
    return n === "Yo" ? r.ordinalNumber(i, {
      unit: "year"
    }) : E(i, n.length);
  },
  R: function(e, n) {
    var r = Un(e);
    return E(r, n.length);
  },
  u: function(e, n) {
    var r = e.getUTCFullYear();
    return E(r, n.length);
  },
  Q: function(e, n, r) {
    var o = Math.ceil((e.getUTCMonth() + 1) / 3);
    switch (n) {
      case "Q":
        return String(o);
      case "QQ":
        return E(o, 2);
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
        return E(o, 2);
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
        return st.M(e, n);
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
        return E(o + 1, 2);
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
    var a = Nr(e, o);
    return n === "wo" ? r.ordinalNumber(a, {
      unit: "week"
    }) : E(a, n.length);
  },
  I: function(e, n, r) {
    var o = Rr(e);
    return n === "Io" ? r.ordinalNumber(o, {
      unit: "week"
    }) : E(o, n.length);
  },
  d: function(e, n, r) {
    return n === "do" ? r.ordinalNumber(e.getUTCDate(), {
      unit: "date"
    }) : st.d(e, n);
  },
  D: function(e, n, r) {
    var o = Pr(e);
    return n === "Do" ? r.ordinalNumber(o, {
      unit: "dayOfYear"
    }) : E(o, n.length);
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
        return E(i, 2);
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
        return E(i, n.length);
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
        return E(a, n.length);
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
    switch (o === 12 ? a = yt.noon : o === 0 ? a = yt.midnight : a = o / 12 >= 1 ? "pm" : "am", n) {
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
    switch (o >= 17 ? a = yt.evening : o >= 12 ? a = yt.afternoon : o >= 4 ? a = yt.morning : a = yt.night, n) {
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
    return st.h(e, n);
  },
  H: function(e, n, r) {
    return n === "Ho" ? r.ordinalNumber(e.getUTCHours(), {
      unit: "hour"
    }) : st.H(e, n);
  },
  K: function(e, n, r) {
    var o = e.getUTCHours() % 12;
    return n === "Ko" ? r.ordinalNumber(o, {
      unit: "hour"
    }) : E(o, n.length);
  },
  k: function(e, n, r) {
    var o = e.getUTCHours();
    return o === 0 && (o = 24), n === "ko" ? r.ordinalNumber(o, {
      unit: "hour"
    }) : E(o, n.length);
  },
  m: function(e, n, r) {
    return n === "mo" ? r.ordinalNumber(e.getUTCMinutes(), {
      unit: "minute"
    }) : st.m(e, n);
  },
  s: function(e, n, r) {
    return n === "so" ? r.ordinalNumber(e.getUTCSeconds(), {
      unit: "second"
    }) : st.s(e, n);
  },
  S: function(e, n) {
    return st.S(e, n);
  },
  X: function(e, n, r, o) {
    var a = o._originalDate || e, i = a.getTimezoneOffset();
    if (i === 0)
      return "Z";
    switch (n) {
      case "X":
        return dn(i);
      case "XXXX":
      case "XX":
        return mt(i);
      case "XXXXX":
      case "XXX":
      default:
        return mt(i, ":");
    }
  },
  x: function(e, n, r, o) {
    var a = o._originalDate || e, i = a.getTimezoneOffset();
    switch (n) {
      case "x":
        return dn(i);
      case "xxxx":
      case "xx":
        return mt(i);
      case "xxxxx":
      case "xxx":
      default:
        return mt(i, ":");
    }
  },
  O: function(e, n, r, o) {
    var a = o._originalDate || e, i = a.getTimezoneOffset();
    switch (n) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + un(i, ":");
      case "OOOO":
      default:
        return "GMT" + mt(i, ":");
    }
  },
  z: function(e, n, r, o) {
    var a = o._originalDate || e, i = a.getTimezoneOffset();
    switch (n) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + un(i, ":");
      case "zzzz":
      default:
        return "GMT" + mt(i, ":");
    }
  },
  t: function(e, n, r, o) {
    var a = o._originalDate || e, i = Math.floor(a.getTime() / 1e3);
    return E(i, n.length);
  },
  T: function(e, n, r, o) {
    var a = o._originalDate || e, i = a.getTime();
    return E(i, n.length);
  }
};
function un(t, e) {
  var n = t > 0 ? "-" : "+", r = Math.abs(t), o = Math.floor(r / 60), a = r % 60;
  if (a === 0)
    return n + String(o);
  var i = e || "";
  return n + String(o) + i + E(a, 2);
}
function dn(t, e) {
  if (t % 60 === 0) {
    var n = t > 0 ? "-" : "+";
    return n + E(Math.abs(t) / 60, 2);
  }
  return mt(t, e);
}
function mt(t, e) {
  var n = e || "", r = t > 0 ? "-" : "+", o = Math.abs(t), a = E(Math.floor(o / 60), 2), i = E(o % 60, 2);
  return r + a + n + i;
}
const Fr = Yr;
var fn = function(e, n) {
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
}, Fn = function(e, n) {
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
}, zr = function(e, n) {
  var r = e.match(/(P+)(p+)?/) || [], o = r[1], a = r[2];
  if (!a)
    return fn(e, n);
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
  return i.replace("{{date}}", fn(o, n)).replace("{{time}}", Fn(a, n));
}, Br = {
  p: Fn,
  P: zr
};
const Hr = Br;
var Vr = ["D", "DD"], $r = ["YY", "YYYY"];
function qr(t) {
  return Vr.indexOf(t) !== -1;
}
function Ir(t) {
  return $r.indexOf(t) !== -1;
}
function mn(t, e, n) {
  if (t === "YYYY")
    throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(e, "`) for formatting years to the input `").concat(n, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (t === "YY")
    throw new RangeError("Use `yy` instead of `YY` (in `".concat(e, "`) for formatting years to the input `").concat(n, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (t === "D")
    throw new RangeError("Use `d` instead of `D` (in `".concat(e, "`) for formatting days of the month to the input `").concat(n, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (t === "DD")
    throw new RangeError("Use `dd` instead of `DD` (in `".concat(e, "`) for formatting days of the month to the input `").concat(n, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
}
var jr = {
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
}, Xr = function(e, n, r) {
  var o, a = jr[e];
  return typeof a == "string" ? o = a : n === 1 ? o = a.one : o = a.other.replace("{{count}}", n.toString()), r != null && r.addSuffix ? r.comparison && r.comparison > 0 ? "in " + o : o + " ago" : o;
};
const Qr = Xr;
function _e(t) {
  return function() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = e.width ? String(e.width) : t.defaultWidth, r = t.formats[n] || t.formats[t.defaultWidth];
    return r;
  };
}
var Gr = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, Jr = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, Kr = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, Zr = {
  date: _e({
    formats: Gr,
    defaultWidth: "full"
  }),
  time: _e({
    formats: Jr,
    defaultWidth: "full"
  }),
  dateTime: _e({
    formats: Kr,
    defaultWidth: "full"
  })
};
const to = Zr;
var eo = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, no = function(e, n, r, o) {
  return eo[e];
};
const ro = no;
function Ot(t) {
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
var oo = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, ao = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, io = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
}, so = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
}, lo = {
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
}, co = {
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
}, uo = function(e, n) {
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
}, fo = {
  ordinalNumber: uo,
  era: Ot({
    values: oo,
    defaultWidth: "wide"
  }),
  quarter: Ot({
    values: ao,
    defaultWidth: "wide",
    argumentCallback: function(e) {
      return e - 1;
    }
  }),
  month: Ot({
    values: io,
    defaultWidth: "wide"
  }),
  day: Ot({
    values: so,
    defaultWidth: "wide"
  }),
  dayPeriod: Ot({
    values: lo,
    defaultWidth: "wide",
    formattingValues: co,
    defaultFormattingWidth: "wide"
  })
};
const mo = fo;
function Dt(t) {
  return function(e) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = n.width, o = r && t.matchPatterns[r] || t.matchPatterns[t.defaultMatchWidth], a = e.match(o);
    if (!a)
      return null;
    var i = a[0], s = r && t.parsePatterns[r] || t.parsePatterns[t.defaultParseWidth], c = Array.isArray(s) ? po(s, function(u) {
      return u.test(i);
    }) : ho(s, function(u) {
      return u.test(i);
    }), l;
    l = t.valueCallback ? t.valueCallback(c) : c, l = n.valueCallback ? n.valueCallback(l) : l;
    var m = e.slice(i.length);
    return {
      value: l,
      rest: m
    };
  };
}
function ho(t, e) {
  for (var n in t)
    if (t.hasOwnProperty(n) && e(t[n]))
      return n;
}
function po(t, e) {
  for (var n = 0; n < t.length; n++)
    if (e(t[n]))
      return n;
}
function go(t) {
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
var vo = /^(\d+)(th|st|nd|rd)?/i, wo = /\d+/i, bo = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, yo = {
  any: [/^b/i, /^(a|c)/i]
}, xo = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, _o = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, ko = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, Co = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
}, To = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, Oo = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, Do = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, Mo = {
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
}, So = {
  ordinalNumber: go({
    matchPattern: vo,
    parsePattern: wo,
    valueCallback: function(e) {
      return parseInt(e, 10);
    }
  }),
  era: Dt({
    matchPatterns: bo,
    defaultMatchWidth: "wide",
    parsePatterns: yo,
    defaultParseWidth: "any"
  }),
  quarter: Dt({
    matchPatterns: xo,
    defaultMatchWidth: "wide",
    parsePatterns: _o,
    defaultParseWidth: "any",
    valueCallback: function(e) {
      return e + 1;
    }
  }),
  month: Dt({
    matchPatterns: ko,
    defaultMatchWidth: "wide",
    parsePatterns: Co,
    defaultParseWidth: "any"
  }),
  day: Dt({
    matchPatterns: To,
    defaultMatchWidth: "wide",
    parsePatterns: Oo,
    defaultParseWidth: "any"
  }),
  dayPeriod: Dt({
    matchPatterns: Do,
    defaultMatchWidth: "any",
    parsePatterns: Mo,
    defaultParseWidth: "any"
  })
};
const Po = So;
var Eo = {
  code: "en-US",
  formatDistance: Qr,
  formatLong: to,
  formatRelative: ro,
  localize: mo,
  match: Po,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
const zn = Eo;
var Ao = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, Ro = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, Wo = /^'([^]*?)'?$/, Lo = /''/g, No = /[a-zA-Z]/;
function Uo(t, e, n) {
  var r, o, a, i, s, c, l, m, u, f, p, g, b, v, y, x, _, O;
  H(2, arguments);
  var T = String(e), N = Lt(), U = (r = (o = n == null ? void 0 : n.locale) !== null && o !== void 0 ? o : N.locale) !== null && r !== void 0 ? r : zn, q = ct((a = (i = (s = (c = n == null ? void 0 : n.firstWeekContainsDate) !== null && c !== void 0 ? c : n == null || (l = n.locale) === null || l === void 0 || (m = l.options) === null || m === void 0 ? void 0 : m.firstWeekContainsDate) !== null && s !== void 0 ? s : N.firstWeekContainsDate) !== null && i !== void 0 ? i : (u = N.locale) === null || u === void 0 || (f = u.options) === null || f === void 0 ? void 0 : f.firstWeekContainsDate) !== null && a !== void 0 ? a : 1);
  if (!(q >= 1 && q <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var z = ct((p = (g = (b = (v = n == null ? void 0 : n.weekStartsOn) !== null && v !== void 0 ? v : n == null || (y = n.locale) === null || y === void 0 || (x = y.options) === null || x === void 0 ? void 0 : x.weekStartsOn) !== null && b !== void 0 ? b : N.weekStartsOn) !== null && g !== void 0 ? g : (_ = N.locale) === null || _ === void 0 || (O = _.options) === null || O === void 0 ? void 0 : O.weekStartsOn) !== null && p !== void 0 ? p : 0);
  if (!(z >= 0 && z <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  if (!U.localize)
    throw new RangeError("locale must contain localize property");
  if (!U.formatLong)
    throw new RangeError("locale must contain formatLong property");
  var D = I(t);
  if (!Mr(D))
    throw new RangeError("Invalid time value");
  var M = Et(D), Y = Oe(D, M), w = {
    firstWeekContainsDate: q,
    weekStartsOn: z,
    locale: U,
    _originalDate: D
  }, B = T.match(Ro).map(function(F) {
    var $ = F[0];
    if ($ === "p" || $ === "P") {
      var Q = Hr[$];
      return Q(F, U.formatLong);
    }
    return F;
  }).join("").match(Ao).map(function(F) {
    if (F === "''")
      return "'";
    var $ = F[0];
    if ($ === "'")
      return Yo(F);
    var Q = Fr[$];
    if (Q)
      return !(n != null && n.useAdditionalWeekYearTokens) && Ir(F) && mn(F, e, String(t)), !(n != null && n.useAdditionalDayOfYearTokens) && qr(F) && mn(F, e, String(t)), Q(Y, F, U.localize, w);
    if ($.match(No))
      throw new RangeError("Format string contains an unescaped latin alphabet character `" + $ + "`");
    return F;
  }).join("");
  return B;
}
function Yo(t) {
  var e = t.match(Wo);
  return e ? e[1].replace(Lo, "'") : t;
}
function hn(t, e, n) {
  var r, o, a, i, s, c, l, m, u, f;
  H(2, arguments);
  var p = I(t), g = I(e), b = Lt(), v = (r = (o = n == null ? void 0 : n.locale) !== null && o !== void 0 ? o : b.locale) !== null && r !== void 0 ? r : zn, y = ct((a = (i = (s = (c = n == null ? void 0 : n.weekStartsOn) !== null && c !== void 0 ? c : n == null || (l = n.locale) === null || l === void 0 || (m = l.options) === null || m === void 0 ? void 0 : m.weekStartsOn) !== null && s !== void 0 ? s : b.weekStartsOn) !== null && i !== void 0 ? i : (u = b.locale) === null || u === void 0 || (f = u.options) === null || f === void 0 ? void 0 : f.weekStartsOn) !== null && a !== void 0 ? a : 0);
  if (!v.localize)
    throw new RangeError("locale must contain localize property");
  if (!v.formatLong)
    throw new RangeError("locale must contain formatLong property");
  if (!v.formatRelative)
    throw new RangeError("locale must contain formatRelative property");
  var x = Or(p, g);
  if (isNaN(x))
    throw new RangeError("Invalid time value");
  var _;
  x < -6 ? _ = "other" : x < -1 ? _ = "lastWeek" : x < 0 ? _ = "yesterday" : x < 1 ? _ = "today" : x < 2 ? _ = "tomorrow" : x < 7 ? _ = "nextWeek" : _ = "other";
  var O = Oe(p, Et(p)), T = Oe(g, Et(g)), N = v.formatRelative(_, O, T, {
    locale: v,
    weekStartsOn: y
  });
  return Uo(p, N, {
    locale: v,
    weekStartsOn: y
  });
}
function vt(t) {
  return t.split("-")[0];
}
function We(t) {
  return t.split("-")[1];
}
function Nt(t) {
  return ["top", "bottom"].includes(vt(t)) ? "x" : "y";
}
function Bn(t) {
  return t === "y" ? "height" : "width";
}
function pn(t, e, n) {
  let {
    reference: r,
    floating: o
  } = t;
  const a = r.x + r.width / 2 - o.width / 2, i = r.y + r.height / 2 - o.height / 2, s = Nt(e), c = Bn(s), l = r[c] / 2 - o[c] / 2, m = vt(e), u = s === "x";
  let f;
  switch (m) {
    case "top":
      f = {
        x: a,
        y: r.y - o.height
      };
      break;
    case "bottom":
      f = {
        x: a,
        y: r.y + r.height
      };
      break;
    case "right":
      f = {
        x: r.x + r.width,
        y: i
      };
      break;
    case "left":
      f = {
        x: r.x - o.width,
        y: i
      };
      break;
    default:
      f = {
        x: r.x,
        y: r.y
      };
  }
  switch (We(e)) {
    case "start":
      f[s] -= l * (n && u ? -1 : 1);
      break;
    case "end":
      f[s] += l * (n && u ? -1 : 1);
      break;
  }
  return f;
}
const Fo = async (t, e, n) => {
  const {
    placement: r = "bottom",
    strategy: o = "absolute",
    middleware: a = [],
    platform: i
  } = n, s = a.filter(Boolean), c = await (i.isRTL == null ? void 0 : i.isRTL(e));
  if ({}.NODE_ENV !== "production") {
    if (i == null && console.error(["Floating UI: `platform` property was not passed to config. If you", "want to use Floating UI on the web, install @floating-ui/dom", "instead of the /core package. Otherwise, you can create your own", "`platform`: https://floating-ui.com/docs/platform"].join(" ")), s.filter((b) => {
      let {
        name: v
      } = b;
      return v === "autoPlacement" || v === "flip";
    }).length > 1)
      throw new Error(["Floating UI: duplicate `flip` and/or `autoPlacement` middleware", "detected. This will lead to an infinite loop. Ensure only one of", "either has been passed to the `middleware` array."].join(" "));
    (!t || !e) && console.error(["Floating UI: The reference and/or floating element was not defined", "when `computePosition()` was called. Ensure that both elements have", "been created and can be measured."].join(" "));
  }
  let l = await i.getElementRects({
    reference: t,
    floating: e,
    strategy: o
  }), {
    x: m,
    y: u
  } = pn(l, r, c), f = r, p = {}, g = 0;
  for (let b = 0; b < s.length; b++) {
    const {
      name: v,
      fn: y
    } = s[b], {
      x,
      y: _,
      data: O,
      reset: T
    } = await y({
      x: m,
      y: u,
      initialPlacement: r,
      placement: f,
      strategy: o,
      middlewareData: p,
      rects: l,
      platform: i,
      elements: {
        reference: t,
        floating: e
      }
    });
    if (m = x ?? m, u = _ ?? u, p = {
      ...p,
      [v]: {
        ...p[v],
        ...O
      }
    }, {}.NODE_ENV !== "production" && g > 50 && console.warn(["Floating UI: The middleware lifecycle appears to be running in an", "infinite loop. This is usually caused by a `reset` continually", "being returned without a break condition."].join(" ")), T && g <= 50) {
      g++, typeof T == "object" && (T.placement && (f = T.placement), T.rects && (l = T.rects === !0 ? await i.getElementRects({
        reference: t,
        floating: e,
        strategy: o
      }) : T.rects), {
        x: m,
        y: u
      } = pn(l, f, c)), b = -1;
      continue;
    }
  }
  return {
    x: m,
    y: u,
    placement: f,
    strategy: o,
    middlewareData: p
  };
};
function zo(t) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...t
  };
}
function Hn(t) {
  return typeof t != "number" ? zo(t) : {
    top: t,
    right: t,
    bottom: t,
    left: t
  };
}
function At(t) {
  return {
    ...t,
    top: t.y,
    left: t.x,
    right: t.x + t.width,
    bottom: t.y + t.height
  };
}
async function Vn(t, e) {
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
    rootBoundary: m = "viewport",
    elementContext: u = "floating",
    altBoundary: f = !1,
    padding: p = 0
  } = e, g = Hn(p), v = s[f ? u === "floating" ? "reference" : "floating" : u], y = At(await a.getClippingRect({
    element: (n = await (a.isElement == null ? void 0 : a.isElement(v))) == null || n ? v : v.contextElement || await (a.getDocumentElement == null ? void 0 : a.getDocumentElement(s.floating)),
    boundary: l,
    rootBoundary: m,
    strategy: c
  })), x = u === "floating" ? {
    ...i.floating,
    x: r,
    y: o
  } : i.reference, _ = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(s.floating)), O = await (a.isElement == null ? void 0 : a.isElement(_)) ? await (a.getScale == null ? void 0 : a.getScale(_)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, T = At(a.convertOffsetParentRelativeRectToViewportRelativeRect ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({
    rect: x,
    offsetParent: _,
    strategy: c
  }) : x);
  return {
    top: (y.top - T.top + g.top) / O.y,
    bottom: (T.bottom - y.bottom + g.bottom) / O.y,
    left: (y.left - T.left + g.left) / O.x,
    right: (T.right - y.right + g.right) / O.x
  };
}
const $n = Math.min, qn = Math.max;
function gn(t, e, n) {
  return qn(t, $n(e, n));
}
const Bo = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function le(t) {
  return t.replace(/left|right|bottom|top/g, (e) => Bo[e]);
}
function Ho(t, e, n) {
  n === void 0 && (n = !1);
  const r = We(t), o = Nt(t), a = Bn(o);
  let i = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return e.reference[a] > e.floating[a] && (i = le(i)), {
    main: i,
    cross: le(i)
  };
}
const Vo = {
  start: "end",
  end: "start"
};
function vn(t) {
  return t.replace(/start|end/g, (e) => Vo[e]);
}
function $o(t) {
  const e = le(t);
  return [vn(t), e, vn(e)];
}
const wn = function(t) {
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
        crossAxis: m = !0,
        fallbackPlacements: u,
        fallbackStrategy: f = "bestFit",
        flipAlignment: p = !0,
        ...g
      } = t, b = vt(r), y = u || (b === i || !p ? [le(i)] : $o(i)), x = [i, ...y], _ = await Vn(e, g), O = [];
      let T = ((n = o.flip) == null ? void 0 : n.overflows) || [];
      if (l && O.push(_[b]), m) {
        const {
          main: z,
          cross: D
        } = Ho(r, a, await (s.isRTL == null ? void 0 : s.isRTL(c.floating)));
        O.push(_[z], _[D]);
      }
      if (T = [...T, {
        placement: r,
        overflows: O
      }], !O.every((z) => z <= 0)) {
        var N, U;
        const z = ((N = (U = o.flip) == null ? void 0 : U.index) != null ? N : 0) + 1, D = x[z];
        if (D)
          return {
            data: {
              index: z,
              overflows: T
            },
            reset: {
              placement: D
            }
          };
        let M = "bottom";
        switch (f) {
          case "bestFit": {
            var q;
            const Y = (q = T.map((w) => [w, w.overflows.filter((B) => B > 0).reduce((B, F) => B + F, 0)]).sort((w, B) => w[1] - B[1])[0]) == null ? void 0 : q[0].placement;
            Y && (M = Y);
            break;
          }
          case "initialPlacement":
            M = i;
            break;
        }
        if (r !== M)
          return {
            reset: {
              placement: M
            }
          };
      }
      return {};
    }
  };
};
async function qo(t, e) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = t, a = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), i = vt(n), s = We(n), c = Nt(n) === "x", l = ["left", "top"].includes(i) ? -1 : 1, m = a && c ? -1 : 1, u = typeof e == "function" ? e(t) : e;
  let {
    mainAxis: f,
    crossAxis: p,
    alignmentAxis: g
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
  return s && typeof g == "number" && (p = s === "end" ? g * -1 : g), c ? {
    x: p * m,
    y: f * l
  } : {
    x: f * l,
    y: p * m
  };
}
const bn = function(t) {
  return t === void 0 && (t = 0), {
    name: "offset",
    options: t,
    async fn(e) {
      const {
        x: n,
        y: r
      } = e, o = await qo(e, t);
      return {
        x: n + o.x,
        y: r + o.y,
        data: o
      };
    }
  };
};
function Io(t) {
  return t === "x" ? "y" : "x";
}
const yn = function(t) {
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
          fn: (v) => {
            let {
              x: y,
              y: x
            } = v;
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
      }, m = await Vn(e, c), u = Nt(vt(o)), f = Io(u);
      let p = l[u], g = l[f];
      if (a) {
        const v = u === "y" ? "top" : "left", y = u === "y" ? "bottom" : "right", x = p + m[v], _ = p - m[y];
        p = gn(x, p, _);
      }
      if (i) {
        const v = f === "y" ? "top" : "left", y = f === "y" ? "bottom" : "right", x = g + m[v], _ = g - m[y];
        g = gn(x, g, _);
      }
      const b = s.fn({
        ...e,
        [u]: p,
        [f]: g
      });
      return {
        ...b,
        data: {
          x: b.x - n,
          y: b.y - r
        }
      };
    }
  };
}, xn = function(t) {
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
        y: m
      } = t, u = At(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
        rect: a.reference,
        offsetParent: await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(o.floating)),
        strategy: s
      }) : a.reference), f = (n = await (i.getClientRects == null ? void 0 : i.getClientRects(o.reference))) != null ? n : [], p = Hn(c);
      function g() {
        if (f.length === 2 && f[0].left > f[1].right && l != null && m != null) {
          var v;
          return (v = f.find((y) => l > y.left - p.left && l < y.right + p.right && m > y.top - p.top && m < y.bottom + p.bottom)) != null ? v : u;
        }
        if (f.length >= 2) {
          if (Nt(r) === "x") {
            const M = f[0], Y = f[f.length - 1], w = vt(r) === "top", B = M.top, F = Y.bottom, $ = w ? M.left : Y.left, Q = w ? M.right : Y.right, wt = Q - $, Tt = F - B;
            return {
              top: B,
              bottom: F,
              left: $,
              right: Q,
              width: wt,
              height: Tt,
              x: $,
              y: B
            };
          }
          const y = vt(r) === "left", x = qn(...f.map((M) => M.right)), _ = $n(...f.map((M) => M.left)), O = f.filter((M) => y ? M.left === _ : M.right === x), T = O[0].top, N = O[O.length - 1].bottom, U = _, q = x, z = q - U, D = N - T;
          return {
            top: T,
            bottom: N,
            left: U,
            right: q,
            width: z,
            height: D,
            x: U,
            y: T
          };
        }
        return u;
      }
      const b = await i.getElementRects({
        reference: {
          getBoundingClientRect: g
        },
        floating: o.floating,
        strategy: s
      });
      return a.reference.x !== b.reference.x || a.reference.y !== b.reference.y || a.reference.width !== b.reference.width || a.reference.height !== b.reference.height ? {
        reset: {
          rects: b
        }
      } : {};
    }
  };
};
function j(t) {
  var e;
  return ((e = t.ownerDocument) == null ? void 0 : e.defaultView) || window;
}
function K(t) {
  return j(t).getComputedStyle(t);
}
function ut(t) {
  return jn(t) ? (t.nodeName || "").toLowerCase() : "";
}
let ee;
function In() {
  if (ee)
    return ee;
  const t = navigator.userAgentData;
  return t && Array.isArray(t.brands) ? (ee = t.brands.map((e) => e.brand + "/" + e.version).join(" "), ee) : navigator.userAgent;
}
function at(t) {
  return t instanceof j(t).HTMLElement;
}
function dt(t) {
  return t instanceof j(t).Element;
}
function jn(t) {
  return t instanceof j(t).Node;
}
function _n(t) {
  if (typeof ShadowRoot > "u")
    return !1;
  const e = j(t).ShadowRoot;
  return t instanceof e || t instanceof ShadowRoot;
}
function de(t) {
  const {
    overflow: e,
    overflowX: n,
    overflowY: r,
    display: o
  } = K(t);
  return /auto|scroll|overlay|hidden|clip/.test(e + r + n) && !["inline", "contents"].includes(o);
}
function jo(t) {
  return ["table", "td", "th"].includes(ut(t));
}
function Le(t) {
  const e = /firefox/i.test(In()), n = K(t), r = n.backdropFilter || n.WebkitBackdropFilter;
  return n.transform !== "none" || n.perspective !== "none" || (r ? r !== "none" : !1) || e && n.willChange === "filter" || e && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective"].some((o) => n.willChange.includes(o)) || ["paint", "layout", "strict", "content"].some(
    (o) => {
      const a = n.contain;
      return a != null ? a.includes(o) : !1;
    }
  );
}
function Xn() {
  return !/^((?!chrome|android).)*safari/i.test(In());
}
function Ne(t) {
  return ["html", "body", "#document"].includes(ut(t));
}
const kn = Math.min, St = Math.max, ce = Math.round;
function Qn(t) {
  const e = K(t);
  let n = parseFloat(e.width), r = parseFloat(e.height);
  const o = t.offsetWidth, a = t.offsetHeight, i = ce(n) !== o || ce(r) !== a;
  return i && (n = o, r = a), {
    width: n,
    height: r,
    fallback: i
  };
}
function Gn(t) {
  return dt(t) ? t : t.contextElement;
}
const Jn = {
  x: 1,
  y: 1
};
function kt(t) {
  const e = Gn(t);
  if (!at(e))
    return Jn;
  const n = e.getBoundingClientRect(), {
    width: r,
    height: o,
    fallback: a
  } = Qn(e);
  let i = (a ? ce(n.width) : n.width) / r, s = (a ? ce(n.height) : n.height) / o;
  return (!i || !Number.isFinite(i)) && (i = 1), (!s || !Number.isFinite(s)) && (s = 1), {
    x: i,
    y: s
  };
}
function Rt(t, e, n, r) {
  var o, a;
  e === void 0 && (e = !1), n === void 0 && (n = !1);
  const i = t.getBoundingClientRect(), s = Gn(t);
  let c = Jn;
  e && (r ? dt(r) && (c = kt(r)) : c = kt(t));
  const l = s ? j(s) : window, m = !Xn() && n;
  let u = (i.left + (m && ((o = l.visualViewport) == null ? void 0 : o.offsetLeft) || 0)) / c.x, f = (i.top + (m && ((a = l.visualViewport) == null ? void 0 : a.offsetTop) || 0)) / c.y, p = i.width / c.x, g = i.height / c.y;
  if (s) {
    const b = j(s), v = r && dt(r) ? j(r) : r;
    let y = b.frameElement;
    for (; y && r && v !== b; ) {
      const x = kt(y), _ = y.getBoundingClientRect(), O = getComputedStyle(y);
      _.x += (y.clientLeft + parseFloat(O.paddingLeft)) * x.x, _.y += (y.clientTop + parseFloat(O.paddingTop)) * x.y, u *= x.x, f *= x.y, p *= x.x, g *= x.y, u += _.x, f += _.y, y = j(y).frameElement;
    }
  }
  return {
    width: p,
    height: g,
    top: f,
    right: u + p,
    bottom: f + g,
    left: u,
    x: u,
    y: f
  };
}
function ft(t) {
  return ((jn(t) ? t.ownerDocument : t.document) || window.document).documentElement;
}
function fe(t) {
  return dt(t) ? {
    scrollLeft: t.scrollLeft,
    scrollTop: t.scrollTop
  } : {
    scrollLeft: t.pageXOffset,
    scrollTop: t.pageYOffset
  };
}
function Kn(t) {
  return Rt(ft(t)).left + fe(t).scrollLeft;
}
function Xo(t, e, n) {
  const r = at(e), o = ft(e), a = Rt(t, !0, n === "fixed", e);
  let i = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const s = {
    x: 0,
    y: 0
  };
  if (r || !r && n !== "fixed")
    if ((ut(e) !== "body" || de(o)) && (i = fe(e)), at(e)) {
      const c = Rt(e, !0);
      s.x = c.x + e.clientLeft, s.y = c.y + e.clientTop;
    } else
      o && (s.x = Kn(o));
  return {
    x: a.left + i.scrollLeft - s.x,
    y: a.top + i.scrollTop - s.y,
    width: a.width,
    height: a.height
  };
}
function Wt(t) {
  if (ut(t) === "html")
    return t;
  const e = t.assignedSlot || t.parentNode || (_n(t) ? t.host : null) || ft(t);
  return _n(e) ? e.host : e;
}
function Cn(t) {
  return !at(t) || K(t).position === "fixed" ? null : t.offsetParent;
}
function Qo(t) {
  let e = Wt(t);
  for (; at(e) && !Ne(e); ) {
    if (Le(e))
      return e;
    e = Wt(e);
  }
  return null;
}
function Tn(t) {
  const e = j(t);
  let n = Cn(t);
  for (; n && jo(n) && K(n).position === "static"; )
    n = Cn(n);
  return n && (ut(n) === "html" || ut(n) === "body" && K(n).position === "static" && !Le(n)) ? e : n || Qo(t) || e;
}
function Go(t) {
  return Qn(t);
}
function Jo(t) {
  let {
    rect: e,
    offsetParent: n,
    strategy: r
  } = t;
  const o = at(n), a = ft(n);
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
  if ((o || !o && r !== "fixed") && ((ut(n) !== "body" || de(a)) && (i = fe(n)), at(n))) {
    const l = Rt(n);
    s = kt(n), c.x = l.x + n.clientLeft, c.y = l.y + n.clientTop;
  }
  return {
    width: e.width * s.x,
    height: e.height * s.y,
    x: e.x * s.x - i.scrollLeft * s.x + c.x,
    y: e.y * s.y - i.scrollTop * s.y + c.y
  };
}
function Ko(t, e) {
  const n = j(t), r = ft(t), o = n.visualViewport;
  let a = r.clientWidth, i = r.clientHeight, s = 0, c = 0;
  if (o) {
    a = o.width, i = o.height;
    const l = Xn();
    (l || !l && e === "fixed") && (s = o.offsetLeft, c = o.offsetTop);
  }
  return {
    width: a,
    height: i,
    x: s,
    y: c
  };
}
function Zo(t) {
  var e;
  const n = ft(t), r = fe(t), o = (e = t.ownerDocument) == null ? void 0 : e.body, a = St(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), i = St(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0);
  let s = -r.scrollLeft + Kn(t);
  const c = -r.scrollTop;
  return K(o || n).direction === "rtl" && (s += St(n.clientWidth, o ? o.clientWidth : 0) - a), {
    width: a,
    height: i,
    x: s,
    y: c
  };
}
function Zn(t) {
  const e = Wt(t);
  return Ne(e) ? t.ownerDocument.body : at(e) && de(e) ? e : Zn(e);
}
function tr(t, e) {
  var n;
  e === void 0 && (e = []);
  const r = Zn(t), o = r === ((n = t.ownerDocument) == null ? void 0 : n.body), a = j(r);
  return o ? e.concat(a, a.visualViewport || [], de(r) ? r : []) : e.concat(r, tr(r));
}
function ta(t, e) {
  const n = Rt(t, !0, e === "fixed"), r = n.top + t.clientTop, o = n.left + t.clientLeft, a = at(t) ? kt(t) : {
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
function On(t, e, n) {
  return e === "viewport" ? At(Ko(t, n)) : dt(e) ? ta(e, n) : At(Zo(ft(t)));
}
function ea(t, e) {
  const n = e.get(t);
  if (n)
    return n;
  let r = tr(t).filter((s) => dt(s) && ut(s) !== "body"), o = null;
  const a = K(t).position === "fixed";
  let i = a ? Wt(t) : t;
  for (; dt(i) && !Ne(i); ) {
    const s = K(i), c = Le(i);
    (a ? !c && !o : !c && s.position === "static" && !!o && ["absolute", "fixed"].includes(o.position)) ? r = r.filter((m) => m !== i) : o = s, i = Wt(i);
  }
  return e.set(t, r), r;
}
function na(t) {
  let {
    element: e,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = t;
  const i = [...n === "clippingAncestors" ? ea(e, this._c) : [].concat(n), r], s = i[0], c = i.reduce((l, m) => {
    const u = On(e, m, o);
    return l.top = St(u.top, l.top), l.right = kn(u.right, l.right), l.bottom = kn(u.bottom, l.bottom), l.left = St(u.left, l.left), l;
  }, On(e, s, o));
  return {
    width: c.right - c.left,
    height: c.bottom - c.top,
    x: c.left,
    y: c.top
  };
}
const ra = {
  getClippingRect: na,
  convertOffsetParentRelativeRectToViewportRelativeRect: Jo,
  isElement: dt,
  getDimensions: Go,
  getOffsetParent: Tn,
  getDocumentElement: ft,
  getScale: kt,
  async getElementRects(t) {
    let {
      reference: e,
      floating: n,
      strategy: r
    } = t;
    const o = this.getOffsetParent || Tn, a = this.getDimensions;
    return {
      reference: Xo(e, await o(n), r),
      floating: {
        x: 0,
        y: 0,
        ...await a(n)
      }
    };
  },
  getClientRects: (t) => Array.from(t.getClientRects()),
  isRTL: (t) => K(t).direction === "rtl"
}, Dn = (t, e, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: ra,
    ...n
  }, a = {
    ...o.platform,
    _c: r
  };
  return Fo(t, e, {
    ...o,
    platform: a
  });
};
function ke(t, e) {
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
function oa(t) {
  let e;
  function n(a, i) {
    return a[0] ? sa : ia;
  }
  let r = n(t), o = r(t);
  return {
    c() {
      e = C("button"), o.c(), d(e, "type", "button"), d(e, "class", "spd-px-3 spd-py-2 spd-transition-colors spd-space-x-1.5 spd-border spd-border-zinc-900 spd-text-zinc-500 spd-rounded-md hover:spd-text-white hover:spd-bg-zinc-900 spd-text-sm spd-flex spd-items-center spd-self-end");
    },
    m(a, i) {
      W(a, e, i), o.m(e, null);
    },
    p(a, i) {
      r !== (r = n(a)) && (o.d(1), o = r(a), o && (o.c(), o.m(e, null)));
    },
    d(a) {
      a && R(e), o.d();
    }
  };
}
function aa(t) {
  let e, n;
  return {
    c() {
      e = X("svg"), n = X("path"), d(n, "d", "M4.5 12.5C4.5 16.9183 8.08172 20.5 12.5 20.5C16.9183 20.5 20.5 16.9183 20.5 12.5C20.5 8.08172 16.9183 4.5 12.5 4.5"), d(n, "stroke", "#9CA3AF"), d(n, "stroke-width", "1.2"), d(e, "width", "28"), d(e, "class", "gthr-tooltip__spinner"), d(e, "viewBox", "0 0 25 25"), d(e, "fill", "none"), d(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(r, o) {
      W(r, e, o), h(e, n);
    },
    p: A,
    d(r) {
      r && R(e);
    }
  };
}
function ia(t) {
  let e, n, r, o;
  return {
    c() {
      e = X("svg"), n = X("path"), r = P(), o = C("span"), o.textContent = "Resolve", d(n, "stroke-linecap", "round"), d(n, "stroke-linejoin", "round"), d(n, "stroke-width", "2"), d(n, "d", "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"), d(e, "xmlns", "http://www.w3.org/2000/svg"), d(e, "fill", "none"), d(e, "viewBox", "0 0 24 24"), d(e, "stroke", "currentColor"), d(e, "class", "spd-w-5 spd-h-5");
    },
    m(a, i) {
      W(a, e, i), h(e, n), W(a, r, i), W(a, o, i);
    },
    d(a) {
      a && R(e), a && R(r), a && R(o);
    }
  };
}
function sa(t) {
  let e, n;
  return {
    c() {
      e = X("svg"), n = X("path"), d(n, "fill-rule", "evenodd"), d(n, "d", "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"), d(n, "clip-rule", "evenodd"), d(e, "xmlns", "http://www.w3.org/2000/svg"), d(e, "viewBox", "0 0 20 20"), d(e, "fill", "currentColor"), d(e, "class", "spd-w-5 spd-h-5 spd-text-green-300");
    },
    m(r, o) {
      W(r, e, o), h(e, n);
    },
    d(r) {
      r && R(e);
    }
  };
}
function la(t) {
  let e, n, r, o, a, i, s, c, l, m, u, f, p = hn(new Date(t[5]), new Date()) + "", g, b, v, y, x, _, O, T, N, U, q, z, D, M, Y, w, B, F = " ", $, Q, wt, Tt, Ue, Z, Ut, Ye, rr = " ", Fe, ze, Yt, Ft = t[4].userAgent + "", me, Be, tt, zt, He, or = " ", Ve, $e, Bt, Ht = t[4].platform + "", he, qe, et, Vt, Ie, ar = " ", je, Xe, bt, $t = t[4].screenWidth + "", pe, Qe, qt = t[4].screenHeight + "", ge, Ge, nt, It, Je, ir = " ", Ke, Ze, jt, Xt = t[4].devicePixelRatio + "", ve, tn, it, Qt, en, sr = " ", nn, rn, Gt, Jt = t[4].language + "", we, be, on;
  function an(k, S) {
    return k[6] ? aa : oa;
  }
  let Kt = an(t), G = Kt(t);
  return {
    c() {
      e = C("button"), n = X("svg"), r = X("path"), o = X("path"), a = P(), i = C("span"), s = L(t[7]), c = P(), l = C("div"), m = C("div"), u = C("div"), f = C("p"), g = L(p), b = P(), v = C("button"), v.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="spd-w-5 spd-h-5"><path fill-rule="evenodd" d="M2 4.25A2.25 2.25 0 014.25 2h11.5A2.25 2.25 0 0118 4.25v8.5A2.25 2.25 0 0115.75 15h-3.105a3.501 3.501 0 001.1 1.677A.75.75 0 0113.26 18H6.74a.75.75 0 01-.484-1.323A3.501 3.501 0 007.355 15H4.25A2.25 2.25 0 012 12.75v-8.5zm1.5 0a.75.75 0 01.75-.75h11.5a.75.75 0 01.75.75v7.5a.75.75 0 01-.75.75H4.25a.75.75 0 01-.75-.75v-7.5z" clip-rule="evenodd"></path></svg>', y = P(), x = C("button"), x.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="spd-w-5 spd-h-5"><path d="M3 10a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM8.5 10a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM15.5 8.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3z"></path></svg>', _ = P(), O = C("div"), T = C("p"), N = L(t[1]), q = P(), G.c(), z = P(), D = C("div"), M = C("dl"), Y = C("div"), w = C("dt"), w.textContent = "Pathname:", B = P(), $ = L(F), Q = P(), wt = C("dd"), Tt = L(t[2]), Ue = P(), Z = C("div"), Ut = C("dt"), Ut.textContent = "User Agent:", Ye = P(), Fe = L(rr), ze = P(), Yt = C("dd"), me = L(Ft), Be = P(), tt = C("div"), zt = C("dt"), zt.textContent = "Platform:", He = P(), Ve = L(or), $e = P(), Bt = C("dd"), he = L(Ht), qe = P(), et = C("div"), Vt = C("dt"), Vt.textContent = "Window size:", Ie = P(), je = L(ar), Xe = P(), bt = C("dd"), pe = L($t), Qe = L(" x "), ge = L(qt), Ge = P(), nt = C("div"), It = C("dt"), It.textContent = "Device pixel ratio:", Je = P(), Ke = L(ir), Ze = P(), jt = C("dd"), ve = L(Xt), tn = P(), it = C("div"), Qt = C("dt"), Qt.textContent = "Language:", en = P(), nn = L(sr), rn = P(), Gt = C("dd"), we = L(Jt), d(r, "d", "M22 44C34.1503 44 44 34.1503 44 22C44 9.84974 34.1503 0 22 0H0V22C0 34.1503 9.84974 44 22 44Z"), d(r, "fill", "black"), d(o, "fill-rule", "evenodd"), d(o, "clip-rule", "evenodd"), d(o, "d", "M22 41.25C32.6315 41.25 41.25 32.6315 41.25 22C41.25 11.3685 32.6315 2.75 22 2.75H2.75V22C2.75 32.6315 11.3685 41.25 22 41.25ZM44 22C44 34.1503 34.1503 44 22 44C9.84974 44 0 34.1503 0 22V0H22C34.1503 0 44 9.84974 44 22Z"), d(o, "fill", "white"), d(n, "class", "spd-w-8 spd-h-8"), d(n, "viewBox", "0 0 44 44"), d(n, "fill", "none"), d(n, "xmlns", "http://www.w3.org/2000/svg"), d(i, "class", "spd-absolute spd-left-1/2 spd-top-1/2 -spd-translate-x-1/2 -spd-translate-y-1/2 spd-text-xs spd-text-white"), d(e, "class", "spd-absolute spd-z-[999999]"), d(e, "type", "button"), Zt(e, "left", `${t[3].x * 100}%`), Zt(e, "top", `${t[3].y * 100}%`), d(f, "class", "spd-text-sm spd-text-zinc-500"), d(v, "type", "button"), d(v, "class", "spd-p-1.5 spd-rounded-md spd-text-zinc-500 hover:spd-bg-zinc-900 spd-text-sm spd-flex spd-items-center spd-self-end"), d(v, "data-ignore-clickable", ""), d(x, "type", "button"), d(x, "class", "spd-p-1.5 spd-rounded-md spd-text-zinc-500 hover:spd-bg-zinc-900 spd-text-sm spd-flex spd-items-center spd-self-end"), d(u, "class", "spd-flex spd-items-center spd-space-x-3 spd-self-end"), d(T, "class", U = "spd-text-base " + (t[0] ? "spd-text-zinc-600 spd-line-through" : "spd-text-zinc-200")), d(O, "class", "spd-pt-2 spd-pb-4 spd-pr-8"), d(m, "class", "spd-flex spd-flex-col"), d(l, "class", "spd-flex spd-flex-col spd-transition spd-delay-100 spd-duration-300 spd-ease-out spd-absolute spd-top-0 spd-left-0 spd-w-max spd-z-[999999] spd-shadow-lg spd-border spd-border-zinc-600 spd-bg-black spd-px-6 spd-py-3 spd-rounded-md spd-text-white"), d(l, "data-clickable", ""), V(l, "spd-opacity-0", !t[10]), V(l, "spd-translate-y-2", !t[10]), V(l, "spd-opacity-100", t[10]), V(l, "spd-translate-y-0", t[10]), d(w, "class", "spd-whitespace-nowrap spd-min-w-[120px]"), d(wt, "class", "spd-ml-3 spd-font-bold"), d(Y, "class", "spd-flex"), d(Ut, "class", "spd-whitespace-nowrap spd-min-w-[120px]"), d(Yt, "class", "spd-ml-3 spd-font-bold"), d(Z, "class", "spd-flex"), d(zt, "class", "spd-whitespace-nowrap spd-min-w-[120px]"), d(Bt, "class", "spd-ml-3 spd-font-bold"), d(tt, "class", "spd-flex"), d(Vt, "class", "spd-whitespace-nowrap spd-min-w-[120px]"), d(bt, "class", "spd-ml-3 spd-font-bold"), d(et, "class", "spd-flex"), d(It, "class", "spd-whitespace-nowrap spd-min-w-[120px]"), d(jt, "class", "spd-ml-3 spd-font-bold"), d(nt, "class", "spd-flex"), d(Qt, "class", "spd-whitespace-nowrap spd-min-w-[120px]"), d(Gt, "class", "spd-ml-3 spd-font-bold"), d(it, "class", "spd-flex"), d(M, "class", "spd-flex spd-flex-col spd-space-y-3 spd-text-sm spd-text-white"), d(D, "class", "spd-flex spd-max-w-sm spd-flex-col spd-transition spd-delay-200 spd-duration-300 spd-ease-out spd-absolute spd-top-0 spd-left-0 spd-w-max spd-z-[999999] spd-shadow-lg spd-border spd-border-zinc-800 spd-bg-black spd-px-6 spd-py-3 spd-rounded-md spd-text-white"), d(D, "data-clickable", ""), V(D, "spd-opacity-0", !t[13]), V(D, "spd-translate-y-2", !t[13]), V(D, "spd-opacity-100", t[13]), V(D, "spd-translate-y-0", t[13]);
    },
    m(k, S) {
      W(k, e, S), h(e, n), h(n, r), h(n, o), h(e, a), h(e, i), h(i, s), t[20](e), W(k, c, S), W(k, l, S), h(l, m), h(m, u), h(u, f), h(f, g), h(u, b), h(u, v), t[21](v), h(u, y), h(u, x), h(m, _), h(m, O), h(O, T), h(T, N), h(l, q), G.m(l, null), t[22](l), W(k, z, S), W(k, D, S), h(D, M), h(M, Y), h(Y, w), h(Y, B), h(Y, $), h(Y, Q), h(Y, wt), h(wt, Tt), h(Y, Ue), h(M, Z), h(Z, Ut), h(Z, Ye), h(Z, Fe), h(Z, ze), h(Z, Yt), h(Yt, me), h(Z, Be), h(M, tt), h(tt, zt), h(tt, He), h(tt, Ve), h(tt, $e), h(tt, Bt), h(Bt, he), h(tt, qe), h(M, et), h(et, Vt), h(et, Ie), h(et, je), h(et, Xe), h(et, bt), h(bt, pe), h(bt, Qe), h(bt, ge), h(et, Ge), h(M, nt), h(nt, It), h(nt, Je), h(nt, Ke), h(nt, Ze), h(nt, jt), h(jt, ve), h(nt, tn), h(M, it), h(it, Qt), h(it, en), h(it, nn), h(it, rn), h(it, Gt), h(Gt, we), t[23](D), be || (on = [
        ht(e, "mouseenter", t[14]),
        ht(e, "click", t[16]),
        ye(ke.call(null, e, t[15])),
        ht(v, "click", t[19]),
        ht(v, "mouseenter", t[17]),
        ye(ke.call(null, v, t[18])),
        ht(l, "mouseleave", t[15]),
        ye(ke.call(null, D, t[18]))
      ], be = !0);
    },
    p(k, [S]) {
      S & 128 && J(s, k[7]), S & 8 && Zt(e, "left", `${k[3].x * 100}%`), S & 8 && Zt(e, "top", `${k[3].y * 100}%`), S & 32 && p !== (p = hn(new Date(k[5]), new Date()) + "") && J(g, p), S & 2 && J(N, k[1]), S & 1 && U !== (U = "spd-text-base " + (k[0] ? "spd-text-zinc-600 spd-line-through" : "spd-text-zinc-200")) && d(T, "class", U), Kt === (Kt = an(k)) && G ? G.p(k, S) : (G.d(1), G = Kt(k), G && (G.c(), G.m(l, null))), S & 1024 && V(l, "spd-opacity-0", !k[10]), S & 1024 && V(l, "spd-translate-y-2", !k[10]), S & 1024 && V(l, "spd-opacity-100", k[10]), S & 1024 && V(l, "spd-translate-y-0", k[10]), S & 4 && J(Tt, k[2]), S & 16 && Ft !== (Ft = k[4].userAgent + "") && J(me, Ft), S & 16 && Ht !== (Ht = k[4].platform + "") && J(he, Ht), S & 16 && $t !== ($t = k[4].screenWidth + "") && J(pe, $t), S & 16 && qt !== (qt = k[4].screenHeight + "") && J(ge, qt), S & 16 && Xt !== (Xt = k[4].devicePixelRatio + "") && J(ve, Xt), S & 16 && Jt !== (Jt = k[4].language + "") && J(we, Jt), S & 8192 && V(D, "spd-opacity-0", !k[13]), S & 8192 && V(D, "spd-translate-y-2", !k[13]), S & 8192 && V(D, "spd-opacity-100", k[13]), S & 8192 && V(D, "spd-translate-y-0", k[13]);
    },
    i: A,
    o: A,
    d(k) {
      k && R(e), t[20](null), k && R(c), k && R(l), t[21](null), G.d(), t[22](null), k && R(z), k && R(D), t[23](null), be = !1, Ct(on);
    }
  };
}
const Mn = 300;
function ca(t, e, n) {
  let r, o, a = !1, i, s, c = !1, { resolved: l = !1 } = e, { text: m = "" } = e, { pathname: u = "" } = e, { position: f = { x: 0, y: 0 } } = e, { metadata: p = {} } = e, { createdAt: g = new Date() } = e, { loading: b = !1 } = e, { number: v = 1 } = e;
  const y = async () => {
    const { x: w, y: B } = await Dn(r, o, {
      placement: "right-start",
      middleware: [xn(), bn(4), wn(), yn({ padding: 8 })]
    });
    Object.assign(o.style, { left: `${w}px`, top: `${B}px` });
  }, x = () => {
    a || (n(9, o.style.display = "", o), n(10, a = !0), y());
  }, _ = () => {
    a && (n(10, a = !1), n(13, c = !1), setTimeout(
      () => {
        n(9, o.style.display = "none", o), n(12, s.style.display = "none", s);
      },
      Mn
    ));
  }, O = () => {
    a ? _() : x();
  }, T = async () => {
    if (!i)
      return;
    const { x: w, y: B } = await Dn(i, s, {
      placement: "top",
      middleware: [xn(), bn(20), wn(), yn({ padding: 8 })]
    });
    Object.assign(s.style, { left: `${w}px`, top: `${B}px` });
  }, N = () => {
    c || (n(12, s.style.display = "", s), n(13, c = !0), T());
  }, U = () => {
    c && (n(13, c = !1), setTimeout(
      () => {
        n(12, s.style.display = "none", s);
      },
      Mn
    ));
  }, q = () => {
    c ? U() : N();
  };
  function z(w) {
    _t[w ? "unshift" : "push"](() => {
      r = w, n(8, r);
    });
  }
  function D(w) {
    _t[w ? "unshift" : "push"](() => {
      i = w, n(11, i);
    });
  }
  function M(w) {
    _t[w ? "unshift" : "push"](() => {
      o = w, n(9, o);
    });
  }
  function Y(w) {
    _t[w ? "unshift" : "push"](() => {
      s = w, n(12, s);
    });
  }
  return t.$$set = (w) => {
    "resolved" in w && n(0, l = w.resolved), "text" in w && n(1, m = w.text), "pathname" in w && n(2, u = w.pathname), "position" in w && n(3, f = w.position), "metadata" in w && n(4, p = w.metadata), "createdAt" in w && n(5, g = w.createdAt), "loading" in w && n(6, b = w.loading), "number" in w && n(7, v = w.number);
  }, [
    l,
    m,
    u,
    f,
    p,
    g,
    b,
    v,
    r,
    o,
    a,
    i,
    s,
    c,
    x,
    _,
    O,
    N,
    U,
    q,
    z,
    D,
    M,
    Y
  ];
}
class ua extends Re {
  constructor(e) {
    super(), Ae(this, e, ca, la, ue, {
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
const xt = [];
function er(t, e = A) {
  let n;
  const r = /* @__PURE__ */ new Set();
  function o(s) {
    if (ue(t, s) && (t = s, n)) {
      const c = !xt.length;
      for (const l of r)
        l[1](), xt.push(l, t);
      if (c) {
        for (let l = 0; l < xt.length; l += 2)
          xt[l][0](xt[l + 1]);
        xt.length = 0;
      }
    }
  }
  function a(s) {
    o(s(t));
  }
  function i(s, c = A) {
    const l = [s, c];
    return r.add(l), r.size === 1 && (n = e(o) || A), s(t), () => {
      r.delete(l), r.size === 0 && (n(), n = null);
    };
  }
  return { set: o, update: a, subscribe: i };
}
const lt = er(!1);
function da(t) {
  let e;
  return {
    c() {
      e = X("path"), d(e, "fill-rule", "evenodd"), d(e, "d", "M2 10c0-3.967 3.69-7 8-7 4.31 0 8 3.033 8 7s-3.69 7-8 7a9.165 9.165 0 01-1.504-.123 5.976 5.976 0 01-3.935 1.107.75.75 0 01-.584-1.143 3.478 3.478 0 00.522-1.756C2.979 13.825 2 12.025 2 10z"), d(e, "clip-rule", "evenodd");
    },
    m(n, r) {
      W(n, e, r);
    },
    d(n) {
      n && R(e);
    }
  };
}
function fa(t) {
  let e;
  return {
    c() {
      e = X("path"), d(e, "d", "M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z");
    },
    m(n, r) {
      W(n, e, r);
    },
    d(n) {
      n && R(e);
    }
  };
}
function ma(t) {
  let e, n, r, o;
  return {
    c() {
      e = C("span"), e.textContent = "Comment", n = P(), r = C("code"), o = L("c"), d(r, "class", nr);
    },
    m(a, i) {
      W(a, e, i), W(a, n, i), W(a, r, i), h(r, o);
    },
    p: A,
    d(a) {
      a && R(e), a && R(n), a && R(r);
    }
  };
}
function ha(t) {
  let e, n, r, o;
  return {
    c() {
      e = C("span"), e.textContent = "Close comments", n = P(), r = C("code"), o = L("esc"), d(r, "class", nr);
    },
    m(a, i) {
      W(a, e, i), W(a, n, i), W(a, r, i), h(r, o);
    },
    p: A,
    d(a) {
      a && R(e), a && R(n), a && R(r);
    }
  };
}
function pa(t) {
  let e, n, r, o, a, i, s;
  function c(g, b) {
    return g[0] ? fa : da;
  }
  let l = c(t), m = l(t);
  function u(g, b) {
    return g[0] ? ha : ma;
  }
  let f = u(t), p = f(t);
  return {
    c() {
      e = C("button"), n = X("svg"), m.c(), r = P(), o = C("span"), p.c(), d(n, "xmlns", "http://www.w3.org/2000/svg"), d(n, "viewBox", "0 0 20 20"), d(n, "fill", "currentColor"), d(n, "class", "spd-w-5 spd-h-5 spd-mr-2 spd-flex-shrink-0"), d(o, "class", "spd-flex spd-items-center"), d(e, "class", a = "spd-toggle spd-flex spd-items-center spd-fixed spd-bottom-8 spd-left-1/2 spd-bg-black spd-rounded-full -spd-translate-x-1/2 spd-pl-5 spd-pr-6 spd-h-11 !spd-z-[99999] spd-shadow-md spd-border spd-border-zinc-600 spd-font-sans spd-text-base spd-transition-colors " + (t[0] ? "spd-text-zinc-400 hover:spd-text-zinc-50 spd-outline spd-outline-2 spd-outline-zinc-900/60" : "spd-text-zinc-500 hover:spd-text-zinc-50"));
    },
    m(g, b) {
      W(g, e, b), h(e, n), m.m(n, null), h(e, r), h(e, o), p.m(o, null), i || (s = ht(e, "click", t[1]), i = !0);
    },
    p(g, [b]) {
      l !== (l = c(g)) && (m.d(1), m = l(g), m && (m.c(), m.m(n, null))), f === (f = u(g)) && p ? p.p(g, b) : (p.d(1), p = f(g), p && (p.c(), p.m(o, null))), b & 1 && a !== (a = "spd-toggle spd-flex spd-items-center spd-fixed spd-bottom-8 spd-left-1/2 spd-bg-black spd-rounded-full -spd-translate-x-1/2 spd-pl-5 spd-pr-6 spd-h-11 !spd-z-[99999] spd-shadow-md spd-border spd-border-zinc-600 spd-font-sans spd-text-base spd-transition-colors " + (g[0] ? "spd-text-zinc-400 hover:spd-text-zinc-50 spd-outline spd-outline-2 spd-outline-zinc-900/60" : "spd-text-zinc-500 hover:spd-text-zinc-50")) && d(e, "class", a);
    },
    i: A,
    o: A,
    d(g) {
      g && R(e), m.d(), p.d(), i = !1, s();
    }
  };
}
const nr = "spd-text-xs spd-ml-3 spd-text-zinc-500 spd-rounded spd-p-1 spd-leading-none spd-shadow-sm spd-bg-zinc-900 spd-border spd-border-zinc-700";
function ga(t, e, n) {
  let r;
  return An(t, lt, (a) => n(0, r = a)), [r, () => {
    lt.update((a) => !a);
  }];
}
class va extends Re {
  constructor(e) {
    super(), Ae(this, e, ga, pa, ue, {});
  }
}
const wa = er([]), { window: ba } = yr;
function Sn(t, e, n) {
  const r = t.slice();
  return r[4] = e[n], r;
}
function ya(t) {
  return {
    c: A,
    m: A,
    p: A,
    i: A,
    o: A,
    d: A
  };
}
function xa(t) {
  let e, n, r = lt && _a(t);
  return {
    c() {
      r && r.c(), e = Me();
    },
    m(o, a) {
      r && r.m(o, a), W(o, e, a), n = !0;
    },
    p(o, a) {
      lt && r.p(o, a);
    },
    i(o) {
      n || (ot(r), n = !0);
    },
    o(o) {
      gt(r), n = !1;
    },
    d(o) {
      r && r.d(o), o && R(e);
    }
  };
}
function _a(t) {
  let e, n, r = t[3], o = [];
  for (let i = 0; i < r.length; i += 1)
    o[i] = Pn(Sn(t, r, i));
  const a = (i) => gt(o[i], 1, 1, () => {
    o[i] = null;
  });
  return {
    c() {
      for (let i = 0; i < o.length; i += 1)
        o[i].c();
      e = Me();
    },
    m(i, s) {
      for (let c = 0; c < o.length; c += 1)
        o[c].m(i, s);
      W(i, e, s), n = !0;
    },
    p(i, s) {
      if (s & 1) {
        r = i[3];
        let c;
        for (c = 0; c < r.length; c += 1) {
          const l = Sn(i, r, c);
          o[c] ? (o[c].p(l, s), ot(o[c], 1)) : (o[c] = Pn(l), o[c].c(), ot(o[c], 1), o[c].m(e.parentNode, e));
        }
        for (Wn(), c = r.length; c < o.length; c += 1)
          a(c);
        Ln();
      }
    },
    i(i) {
      if (!n) {
        for (let s = 0; s < r.length; s += 1)
          ot(o[s]);
        n = !0;
      }
    },
    o(i) {
      o = o.filter(Boolean);
      for (let s = 0; s < o.length; s += 1)
        gt(o[s]);
      n = !1;
    },
    d(i) {
      dr(o, i), i && R(e);
    }
  };
}
function Pn(t) {
  let e, n;
  return e = new ua({
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
      Nn(e.$$.fragment);
    },
    m(r, o) {
      Pe(e, r, o), n = !0;
    },
    p: A,
    i(r) {
      n || (ot(e.$$.fragment, r), n = !0);
    },
    o(r) {
      gt(e.$$.fragment, r), n = !1;
    },
    d(r) {
      Ee(e, r);
    }
  };
}
function ka(t) {
  return {
    c: A,
    m: A,
    p: A,
    i: A,
    o: A,
    d: A
  };
}
function Ca(t) {
  let e, n, r, o, a, i;
  e = new va({});
  let s = {
    ctx: t,
    current: null,
    token: null,
    hasCatch: !1,
    pending: ka,
    then: xa,
    catch: ya,
    value: 3,
    blocks: [, , ,]
  };
  return wr(t[0](), s), {
    c() {
      Nn(e.$$.fragment), n = P(), r = Me(), s.block.c();
    },
    m(c, l) {
      Pe(e, c, l), W(c, n, l), W(c, r, l), s.block.m(c, s.anchor = l), s.mount = () => r.parentNode, s.anchor = r, o = !0, a || (i = ht(ba, "keydown", fr(t[1])), a = !0);
    },
    p(c, [l]) {
      t = c, br(s, t, l);
    },
    i(c) {
      o || (ot(e.$$.fragment, c), ot(s.block), o = !0);
    },
    o(c) {
      gt(e.$$.fragment, c);
      for (let l = 0; l < 3; l += 1) {
        const m = s.blocks[l];
        gt(m);
      }
      o = !1;
    },
    d(c) {
      Ee(e, c), c && R(n), c && R(r), s.block.d(c), s.token = null, s = null, a = !1, i();
    }
  };
}
function Ta(t, e, n) {
  let r;
  An(t, lt, (i) => n(2, r = i));
  const o = async () => {
    const s = document.currentScript.getAttribute("src").split("?id=")[1];
    try {
      const c = await fetch(`${_r.BASE_URL}/api/comments?projectId=${s}&pathname=${window.location.pathname}`), l = await c.json();
      if (console.log(l), c.ok && l)
        return wa.set(l), l;
    } catch (c) {
      throw console.log(c), new Error("Oops, couldn't fetch comments from database.");
    }
  }, a = (i) => {
    i.keyCode === 67 && !r && lt.set(!0), i.keyCode === 27 && r && lt.set(!1);
  };
  return lt.subscribe((i) => {
    i ? document.body.classList.add("spd-cursor") : document.body.classList.remove("spd-cursor");
  }), hr(() => {
    document.body.style.position = "relative";
  }), [o, a];
}
class Oa extends Re {
  constructor(e) {
    super(), Ae(this, e, Ta, Ca, ue, {});
  }
}
const Da = (t) => {
  const e = document.head, n = document.createElement("link");
  n.rel = "stylesheet", n.href = t, e.appendChild(n);
}, Ma = () => {
  const t = document.createElement("div");
  t.setAttribute("id", "speedback-app"), document.body.appendChild(t);
}, Sa = () => {
  new Oa({
    target: document.getElementById("speedback-app")
  });
}, Pa = async () => {
  Ma(), Sa(), Da("/style.css");
};
Pa();
