function P() {
}
function dr(t) {
  return t && typeof t == "object" && typeof t.then == "function";
}
function Ln(t) {
  return t();
}
function pn() {
  return /* @__PURE__ */ Object.create(null);
}
function bt(t) {
  t.forEach(Ln);
}
function Ue(t) {
  return typeof t == "function";
}
function Lt(t, e) {
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
function Fe(t, e, n) {
  t.$$.on_destroy.push(mr(e, n));
}
function Ce(t) {
  return t && Ue(t.destroy) ? t.destroy : P;
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
function pr(t, e) {
  for (let n = 0; n < t.length; n += 1)
    t[n] && t[n].d(e);
}
function _(t) {
  return document.createElement(t);
}
function I(t) {
  return document.createElementNS("http://www.w3.org/2000/svg", t);
}
function N(t) {
  return document.createTextNode(t);
}
function O() {
  return N(" ");
}
function Ye() {
  return N("");
}
function K(t, e, n, r) {
  return t.addEventListener(e, n, r), () => t.removeEventListener(e, n, r);
}
function Nn(t) {
  return function(e) {
    return e.preventDefault(), t.call(this, e);
  };
}
function u(t, e, n) {
  n == null ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n);
}
function hr(t) {
  return Array.from(t.childNodes);
}
function J(t, e) {
  e = "" + e, t.wholeText !== e && (t.data = e);
}
function hn(t, e) {
  t.value = e ?? "";
}
function te(t, e, n, r) {
  n === null ? t.style.removeProperty(e) : t.style.setProperty(e, n, r ? "important" : "");
}
function L(t, e, n) {
  t.classList[n ? "add" : "remove"](e);
}
let St;
function at(t) {
  St = t;
}
function Un() {
  if (!St)
    throw new Error("Function called outside component initialization");
  return St;
}
function gr(t) {
  Un().$$.on_mount.push(t);
}
function vr(t, e) {
  const n = t.$$.callbacks[e.type];
  n && n.slice().forEach((r) => r.call(this, e));
}
const Dt = [], gt = [], re = [], gn = [], wr = Promise.resolve();
let De = !1;
function br() {
  De || (De = !0, wr.then(ze));
}
function Pe(t) {
  re.push(t);
}
const Te = /* @__PURE__ */ new Set();
let ee = 0;
function ze() {
  const t = St;
  do {
    for (; ee < Dt.length; ) {
      const e = Dt[ee];
      ee++, at(e), yr(e.$$);
    }
    for (at(null), Dt.length = 0, ee = 0; gt.length; )
      gt.pop()();
    for (let e = 0; e < re.length; e += 1) {
      const n = re[e];
      Te.has(n) || (Te.add(n), n());
    }
    re.length = 0;
  } while (Dt.length);
  for (; gn.length; )
    gn.pop()();
  De = !1, Te.clear(), at(t);
}
function yr(t) {
  if (t.fragment !== null) {
    t.update(), bt(t.before_update);
    const e = t.dirty;
    t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(Pe);
  }
}
const oe = /* @__PURE__ */ new Set();
let vt;
function Fn() {
  vt = {
    r: 0,
    c: [],
    p: vt
  };
}
function Yn() {
  vt.r || bt(vt.c), vt = vt.p;
}
function Z(t, e) {
  t && t.i && (oe.delete(t), t.i(e));
}
function ut(t, e, n, r) {
  if (t && t.o) {
    if (oe.has(t))
      return;
    oe.add(t), vt.c.push(() => {
      oe.delete(t), r && (n && t.d(1), r());
    }), t.o(e);
  } else
    r && r();
}
function xr(t, e) {
  const n = e.token = {};
  function r(o, a, i, l) {
    if (e.token !== n)
      return;
    e.resolved = l;
    let c = e.ctx;
    i !== void 0 && (c = c.slice(), c[i] = l);
    const s = o && (e.current = o)(c);
    let f = !1;
    e.block && (e.blocks ? e.blocks.forEach((d, p) => {
      p !== a && d && (Fn(), ut(d, 1, 1, () => {
        e.blocks[p] === d && (e.blocks[p] = null);
      }), Yn());
    }) : e.block.d(1), s.c(), Z(s, 1), s.m(e.mount(), e.anchor), f = !0), e.block = s, e.blocks && (e.blocks[a] = s), f && ze();
  }
  if (dr(t)) {
    const o = Un();
    if (t.then((a) => {
      at(o), r(e.then, 1, e.value, a), at(null);
    }, (a) => {
      if (at(o), r(e.catch, 2, e.error, a), at(null), !e.hasCatch)
        throw a;
    }), e.current !== e.pending)
      return r(e.pending, 0), !0;
  } else {
    if (e.current !== e.then)
      return r(e.then, 1, e.value, t), !0;
    e.resolved = t;
  }
}
function _r(t, e, n) {
  const r = e.slice(), { resolved: o } = t;
  t.current === t.then && (r[t.value] = o), t.current === t.catch && (r[t.error] = o), t.block.p(r, n);
}
const kr = typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : global;
function Se(t) {
  t && t.c();
}
function se(t, e, n, r) {
  const { fragment: o, after_update: a } = t.$$;
  o && o.m(e, n), r || Pe(() => {
    const i = t.$$.on_mount.map(Ln).filter(Ue);
    t.$$.on_destroy ? t.$$.on_destroy.push(...i) : bt(i), t.$$.on_mount = [];
  }), a.forEach(Pe);
}
function le(t, e) {
  const n = t.$$;
  n.fragment !== null && (bt(n.on_destroy), n.fragment && n.fragment.d(e), n.on_destroy = n.fragment = null, n.ctx = []);
}
function Cr(t, e) {
  t.$$.dirty[0] === -1 && (Dt.push(t), br(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function me(t, e, n, r, o, a, i, l = [-1]) {
  const c = St;
  at(t);
  const s = t.$$ = {
    fragment: null,
    ctx: [],
    props: a,
    update: P,
    not_equal: o,
    bound: pn(),
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (c ? c.$$.context : [])),
    callbacks: pn(),
    dirty: l,
    skip_bound: !1,
    root: e.target || c.$$.root
  };
  i && i(s.root);
  let f = !1;
  if (s.ctx = n ? n(t, e.props || {}, (d, p, ...m) => {
    const g = m.length ? m[0] : p;
    return s.ctx && o(s.ctx[d], s.ctx[d] = g) && (!s.skip_bound && s.bound[d] && s.bound[d](g), f && Cr(t, d)), p;
  }) : [], s.update(), f = !0, bt(s.before_update), s.fragment = r ? r(s.ctx) : !1, e.target) {
    if (e.hydrate) {
      const d = hr(e.target);
      s.fragment && s.fragment.l(d), d.forEach(R);
    } else
      s.fragment && s.fragment.c();
    e.intro && Z(t.$$.fragment), se(t, e.target, e.anchor, e.customElement), ze();
  }
  at(c);
}
class pe {
  $destroy() {
    le(this, 1), this.$destroy = P;
  }
  $on(e, n) {
    if (!Ue(n))
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
const Tr = {
  BASE_URL: "http://localhost:3000"
};
function dt(t) {
  if (t === null || t === !0 || t === !1)
    return NaN;
  var e = Number(t);
  return isNaN(e) ? e : e < 0 ? Math.ceil(e) : Math.floor(e);
}
function V(t, e) {
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
  V(1, arguments);
  var e = Object.prototype.toString.call(t);
  return t instanceof Date || ae(t) === "object" && e === "[object Date]" ? new Date(t.getTime()) : typeof t == "number" || e === "[object Number]" ? new Date(t) : ((typeof t == "string" || e === "[object String]") && typeof console < "u" && (console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"), console.warn(new Error().stack)), new Date(NaN));
}
function Or(t, e) {
  V(2, arguments);
  var n = j(t).getTime(), r = dt(e);
  return new Date(n + r);
}
var Mr = {};
function Nt() {
  return Mr;
}
function Et(t) {
  var e = new Date(Date.UTC(t.getFullYear(), t.getMonth(), t.getDate(), t.getHours(), t.getMinutes(), t.getSeconds(), t.getMilliseconds()));
  return e.setUTCFullYear(t.getFullYear()), t.getTime() - e.getTime();
}
function vn(t) {
  V(1, arguments);
  var e = j(t);
  return e.setHours(0, 0, 0, 0), e;
}
var Dr = 864e5;
function Pr(t, e) {
  V(2, arguments);
  var n = vn(t), r = vn(e), o = n.getTime() - Et(n), a = r.getTime() - Et(r);
  return Math.round((o - a) / Dr);
}
function ie(t) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? ie = function(n) {
    return typeof n;
  } : ie = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, ie(t);
}
function Sr(t) {
  return V(1, arguments), t instanceof Date || ie(t) === "object" && Object.prototype.toString.call(t) === "[object Date]";
}
function Er(t) {
  if (V(1, arguments), !Sr(t) && typeof t != "number")
    return !1;
  var e = j(t);
  return !isNaN(Number(e));
}
function Ee(t, e) {
  V(2, arguments);
  var n = dt(e);
  return Or(t, -n);
}
var Ar = 864e5;
function Rr(t) {
  V(1, arguments);
  var e = j(t), n = e.getTime();
  e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
  var r = e.getTime(), o = n - r;
  return Math.floor(o / Ar) + 1;
}
function ce(t) {
  V(1, arguments);
  var e = 1, n = j(t), r = n.getUTCDay(), o = (r < e ? 7 : 0) + r - e;
  return n.setUTCDate(n.getUTCDate() - o), n.setUTCHours(0, 0, 0, 0), n;
}
function zn(t) {
  V(1, arguments);
  var e = j(t), n = e.getUTCFullYear(), r = new Date(0);
  r.setUTCFullYear(n + 1, 0, 4), r.setUTCHours(0, 0, 0, 0);
  var o = ce(r), a = new Date(0);
  a.setUTCFullYear(n, 0, 4), a.setUTCHours(0, 0, 0, 0);
  var i = ce(a);
  return e.getTime() >= o.getTime() ? n + 1 : e.getTime() >= i.getTime() ? n : n - 1;
}
function Wr(t) {
  V(1, arguments);
  var e = zn(t), n = new Date(0);
  n.setUTCFullYear(e, 0, 4), n.setUTCHours(0, 0, 0, 0);
  var r = ce(n);
  return r;
}
var Lr = 6048e5;
function Nr(t) {
  V(1, arguments);
  var e = j(t), n = ce(e).getTime() - Wr(e).getTime();
  return Math.round(n / Lr) + 1;
}
function ue(t, e) {
  var n, r, o, a, i, l, c, s;
  V(1, arguments);
  var f = Nt(), d = dt((n = (r = (o = (a = e == null ? void 0 : e.weekStartsOn) !== null && a !== void 0 ? a : e == null || (i = e.locale) === null || i === void 0 || (l = i.options) === null || l === void 0 ? void 0 : l.weekStartsOn) !== null && o !== void 0 ? o : f.weekStartsOn) !== null && r !== void 0 ? r : (c = f.locale) === null || c === void 0 || (s = c.options) === null || s === void 0 ? void 0 : s.weekStartsOn) !== null && n !== void 0 ? n : 0);
  if (!(d >= 0 && d <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var p = j(t), m = p.getUTCDay(), g = (m < d ? 7 : 0) + m - d;
  return p.setUTCDate(p.getUTCDate() - g), p.setUTCHours(0, 0, 0, 0), p;
}
function Bn(t, e) {
  var n, r, o, a, i, l, c, s;
  V(1, arguments);
  var f = j(t), d = f.getUTCFullYear(), p = Nt(), m = dt((n = (r = (o = (a = e == null ? void 0 : e.firstWeekContainsDate) !== null && a !== void 0 ? a : e == null || (i = e.locale) === null || i === void 0 || (l = i.options) === null || l === void 0 ? void 0 : l.firstWeekContainsDate) !== null && o !== void 0 ? o : p.firstWeekContainsDate) !== null && r !== void 0 ? r : (c = p.locale) === null || c === void 0 || (s = c.options) === null || s === void 0 ? void 0 : s.firstWeekContainsDate) !== null && n !== void 0 ? n : 1);
  if (!(m >= 1 && m <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var g = new Date(0);
  g.setUTCFullYear(d + 1, 0, m), g.setUTCHours(0, 0, 0, 0);
  var v = ue(g, e), w = new Date(0);
  w.setUTCFullYear(d, 0, m), w.setUTCHours(0, 0, 0, 0);
  var y = ue(w, e);
  return f.getTime() >= v.getTime() ? d + 1 : f.getTime() >= y.getTime() ? d : d - 1;
}
function Ur(t, e) {
  var n, r, o, a, i, l, c, s;
  V(1, arguments);
  var f = Nt(), d = dt((n = (r = (o = (a = e == null ? void 0 : e.firstWeekContainsDate) !== null && a !== void 0 ? a : e == null || (i = e.locale) === null || i === void 0 || (l = i.options) === null || l === void 0 ? void 0 : l.firstWeekContainsDate) !== null && o !== void 0 ? o : f.firstWeekContainsDate) !== null && r !== void 0 ? r : (c = f.locale) === null || c === void 0 || (s = c.options) === null || s === void 0 ? void 0 : s.firstWeekContainsDate) !== null && n !== void 0 ? n : 1), p = Bn(t, e), m = new Date(0);
  m.setUTCFullYear(p, 0, d), m.setUTCHours(0, 0, 0, 0);
  var g = ue(m, e);
  return g;
}
var Fr = 6048e5;
function Yr(t, e) {
  V(1, arguments);
  var n = j(t), r = ue(n, e).getTime() - Ur(n, e).getTime();
  return Math.round(r / Fr) + 1;
}
function A(t, e) {
  for (var n = t < 0 ? "-" : "", r = Math.abs(t).toString(); r.length < e; )
    r = "0" + r;
  return n + r;
}
var zr = {
  y: function(e, n) {
    var r = e.getUTCFullYear(), o = r > 0 ? r : 1 - r;
    return A(n === "yy" ? o % 100 : o, n.length);
  },
  M: function(e, n) {
    var r = e.getUTCMonth();
    return n === "M" ? String(r + 1) : A(r + 1, 2);
  },
  d: function(e, n) {
    return A(e.getUTCDate(), n.length);
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
    return A(e.getUTCHours() % 12 || 12, n.length);
  },
  H: function(e, n) {
    return A(e.getUTCHours(), n.length);
  },
  m: function(e, n) {
    return A(e.getUTCMinutes(), n.length);
  },
  s: function(e, n) {
    return A(e.getUTCSeconds(), n.length);
  },
  S: function(e, n) {
    var r = n.length, o = e.getUTCMilliseconds(), a = Math.floor(o * Math.pow(10, r - 3));
    return A(a, n.length);
  }
};
const ct = zr;
var _t = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, Br = {
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
    return ct.y(e, n);
  },
  Y: function(e, n, r, o) {
    var a = Bn(e, o), i = a > 0 ? a : 1 - a;
    if (n === "YY") {
      var l = i % 100;
      return A(l, 2);
    }
    return n === "Yo" ? r.ordinalNumber(i, {
      unit: "year"
    }) : A(i, n.length);
  },
  R: function(e, n) {
    var r = zn(e);
    return A(r, n.length);
  },
  u: function(e, n) {
    var r = e.getUTCFullYear();
    return A(r, n.length);
  },
  Q: function(e, n, r) {
    var o = Math.ceil((e.getUTCMonth() + 1) / 3);
    switch (n) {
      case "Q":
        return String(o);
      case "QQ":
        return A(o, 2);
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
        return A(o, 2);
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
        return ct.M(e, n);
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
        return A(o + 1, 2);
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
    var a = Yr(e, o);
    return n === "wo" ? r.ordinalNumber(a, {
      unit: "week"
    }) : A(a, n.length);
  },
  I: function(e, n, r) {
    var o = Nr(e);
    return n === "Io" ? r.ordinalNumber(o, {
      unit: "week"
    }) : A(o, n.length);
  },
  d: function(e, n, r) {
    return n === "do" ? r.ordinalNumber(e.getUTCDate(), {
      unit: "date"
    }) : ct.d(e, n);
  },
  D: function(e, n, r) {
    var o = Rr(e);
    return n === "Do" ? r.ordinalNumber(o, {
      unit: "dayOfYear"
    }) : A(o, n.length);
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
        return A(i, 2);
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
        return A(i, n.length);
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
        return A(a, n.length);
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
    return ct.h(e, n);
  },
  H: function(e, n, r) {
    return n === "Ho" ? r.ordinalNumber(e.getUTCHours(), {
      unit: "hour"
    }) : ct.H(e, n);
  },
  K: function(e, n, r) {
    var o = e.getUTCHours() % 12;
    return n === "Ko" ? r.ordinalNumber(o, {
      unit: "hour"
    }) : A(o, n.length);
  },
  k: function(e, n, r) {
    var o = e.getUTCHours();
    return o === 0 && (o = 24), n === "ko" ? r.ordinalNumber(o, {
      unit: "hour"
    }) : A(o, n.length);
  },
  m: function(e, n, r) {
    return n === "mo" ? r.ordinalNumber(e.getUTCMinutes(), {
      unit: "minute"
    }) : ct.m(e, n);
  },
  s: function(e, n, r) {
    return n === "so" ? r.ordinalNumber(e.getUTCSeconds(), {
      unit: "second"
    }) : ct.s(e, n);
  },
  S: function(e, n) {
    return ct.S(e, n);
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
        return ht(i);
      case "XXXXX":
      case "XXX":
      default:
        return ht(i, ":");
    }
  },
  x: function(e, n, r, o) {
    var a = o._originalDate || e, i = a.getTimezoneOffset();
    switch (n) {
      case "x":
        return bn(i);
      case "xxxx":
      case "xx":
        return ht(i);
      case "xxxxx":
      case "xxx":
      default:
        return ht(i, ":");
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
        return "GMT" + ht(i, ":");
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
        return "GMT" + ht(i, ":");
    }
  },
  t: function(e, n, r, o) {
    var a = o._originalDate || e, i = Math.floor(a.getTime() / 1e3);
    return A(i, n.length);
  },
  T: function(e, n, r, o) {
    var a = o._originalDate || e, i = a.getTime();
    return A(i, n.length);
  }
};
function wn(t, e) {
  var n = t > 0 ? "-" : "+", r = Math.abs(t), o = Math.floor(r / 60), a = r % 60;
  if (a === 0)
    return n + String(o);
  var i = e || "";
  return n + String(o) + i + A(a, 2);
}
function bn(t, e) {
  if (t % 60 === 0) {
    var n = t > 0 ? "-" : "+";
    return n + A(Math.abs(t) / 60, 2);
  }
  return ht(t, e);
}
function ht(t, e) {
  var n = e || "", r = t > 0 ? "-" : "+", o = Math.abs(t), a = A(Math.floor(o / 60), 2), i = A(o % 60, 2);
  return r + a + n + i;
}
const Hr = Br;
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
}, Ir = {
  p: Hn,
  P: Vr
};
const $r = Ir;
var qr = ["D", "DD"], jr = ["YY", "YYYY"];
function Xr(t) {
  return qr.indexOf(t) !== -1;
}
function Qr(t) {
  return jr.indexOf(t) !== -1;
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
var Gr = {
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
}, Jr = function(e, n, r) {
  var o, a = Gr[e];
  return typeof a == "string" ? o = a : n === 1 ? o = a.one : o = a.other.replace("{{count}}", n.toString()), r != null && r.addSuffix ? r.comparison && r.comparison > 0 ? "in " + o : o + " ago" : o;
};
const Kr = Jr;
function Oe(t) {
  return function() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = e.width ? String(e.width) : t.defaultWidth, r = t.formats[n] || t.formats[t.defaultWidth];
    return r;
  };
}
var Zr = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, to = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, eo = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, no = {
  date: Oe({
    formats: Zr,
    defaultWidth: "full"
  }),
  time: Oe({
    formats: to,
    defaultWidth: "full"
  }),
  dateTime: Oe({
    formats: eo,
    defaultWidth: "full"
  })
};
const ro = no;
var oo = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, ao = function(e, n, r, o) {
  return oo[e];
};
const io = ao;
function Ot(t) {
  return function(e, n) {
    var r = n != null && n.context ? String(n.context) : "standalone", o;
    if (r === "formatting" && t.formattingValues) {
      var a = t.defaultFormattingWidth || t.defaultWidth, i = n != null && n.width ? String(n.width) : a;
      o = t.formattingValues[i] || t.formattingValues[a];
    } else {
      var l = t.defaultWidth, c = n != null && n.width ? String(n.width) : t.defaultWidth;
      o = t.values[c] || t.values[l];
    }
    var s = t.argumentCallback ? t.argumentCallback(e) : e;
    return o[s];
  };
}
var so = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, lo = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, co = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
}, uo = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
}, fo = {
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
}, mo = {
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
}, po = function(e, n) {
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
}, ho = {
  ordinalNumber: po,
  era: Ot({
    values: so,
    defaultWidth: "wide"
  }),
  quarter: Ot({
    values: lo,
    defaultWidth: "wide",
    argumentCallback: function(e) {
      return e - 1;
    }
  }),
  month: Ot({
    values: co,
    defaultWidth: "wide"
  }),
  day: Ot({
    values: uo,
    defaultWidth: "wide"
  }),
  dayPeriod: Ot({
    values: fo,
    defaultWidth: "wide",
    formattingValues: mo,
    defaultFormattingWidth: "wide"
  })
};
const go = ho;
function Mt(t) {
  return function(e) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = n.width, o = r && t.matchPatterns[r] || t.matchPatterns[t.defaultMatchWidth], a = e.match(o);
    if (!a)
      return null;
    var i = a[0], l = r && t.parsePatterns[r] || t.parsePatterns[t.defaultParseWidth], c = Array.isArray(l) ? wo(l, function(d) {
      return d.test(i);
    }) : vo(l, function(d) {
      return d.test(i);
    }), s;
    s = t.valueCallback ? t.valueCallback(c) : c, s = n.valueCallback ? n.valueCallback(s) : s;
    var f = e.slice(i.length);
    return {
      value: s,
      rest: f
    };
  };
}
function vo(t, e) {
  for (var n in t)
    if (t.hasOwnProperty(n) && e(t[n]))
      return n;
}
function wo(t, e) {
  for (var n = 0; n < t.length; n++)
    if (e(t[n]))
      return n;
}
function bo(t) {
  return function(e) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = e.match(t.matchPattern);
    if (!r)
      return null;
    var o = r[0], a = e.match(t.parsePattern);
    if (!a)
      return null;
    var i = t.valueCallback ? t.valueCallback(a[0]) : a[0];
    i = n.valueCallback ? n.valueCallback(i) : i;
    var l = e.slice(o.length);
    return {
      value: i,
      rest: l
    };
  };
}
var yo = /^(\d+)(th|st|nd|rd)?/i, xo = /\d+/i, _o = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, ko = {
  any: [/^b/i, /^(a|c)/i]
}, Co = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, To = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, Oo = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, Mo = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
}, Do = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, Po = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, So = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, Eo = {
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
}, Ao = {
  ordinalNumber: bo({
    matchPattern: yo,
    parsePattern: xo,
    valueCallback: function(e) {
      return parseInt(e, 10);
    }
  }),
  era: Mt({
    matchPatterns: _o,
    defaultMatchWidth: "wide",
    parsePatterns: ko,
    defaultParseWidth: "any"
  }),
  quarter: Mt({
    matchPatterns: Co,
    defaultMatchWidth: "wide",
    parsePatterns: To,
    defaultParseWidth: "any",
    valueCallback: function(e) {
      return e + 1;
    }
  }),
  month: Mt({
    matchPatterns: Oo,
    defaultMatchWidth: "wide",
    parsePatterns: Mo,
    defaultParseWidth: "any"
  }),
  day: Mt({
    matchPatterns: Do,
    defaultMatchWidth: "wide",
    parsePatterns: Po,
    defaultParseWidth: "any"
  }),
  dayPeriod: Mt({
    matchPatterns: So,
    defaultMatchWidth: "any",
    parsePatterns: Eo,
    defaultParseWidth: "any"
  })
};
const Ro = Ao;
var Wo = {
  code: "en-US",
  formatDistance: Kr,
  formatLong: ro,
  formatRelative: io,
  localize: go,
  match: Ro,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
const Vn = Wo;
var Lo = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, No = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, Uo = /^'([^]*?)'?$/, Fo = /''/g, Yo = /[a-zA-Z]/;
function zo(t, e, n) {
  var r, o, a, i, l, c, s, f, d, p, m, g, v, w, y, x, k, M;
  V(2, arguments);
  var T = String(e), U = Nt(), F = (r = (o = n == null ? void 0 : n.locale) !== null && o !== void 0 ? o : U.locale) !== null && r !== void 0 ? r : Vn, q = dt((a = (i = (l = (c = n == null ? void 0 : n.firstWeekContainsDate) !== null && c !== void 0 ? c : n == null || (s = n.locale) === null || s === void 0 || (f = s.options) === null || f === void 0 ? void 0 : f.firstWeekContainsDate) !== null && l !== void 0 ? l : U.firstWeekContainsDate) !== null && i !== void 0 ? i : (d = U.locale) === null || d === void 0 || (p = d.options) === null || p === void 0 ? void 0 : p.firstWeekContainsDate) !== null && a !== void 0 ? a : 1);
  if (!(q >= 1 && q <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var B = dt((m = (g = (v = (w = n == null ? void 0 : n.weekStartsOn) !== null && w !== void 0 ? w : n == null || (y = n.locale) === null || y === void 0 || (x = y.options) === null || x === void 0 ? void 0 : x.weekStartsOn) !== null && v !== void 0 ? v : U.weekStartsOn) !== null && g !== void 0 ? g : (k = U.locale) === null || k === void 0 || (M = k.options) === null || M === void 0 ? void 0 : M.weekStartsOn) !== null && m !== void 0 ? m : 0);
  if (!(B >= 0 && B <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  if (!F.localize)
    throw new RangeError("locale must contain localize property");
  if (!F.formatLong)
    throw new RangeError("locale must contain formatLong property");
  var D = j(t);
  if (!Er(D))
    throw new RangeError("Invalid time value");
  var S = Et(D), Y = Ee(D, S), b = {
    firstWeekContainsDate: q,
    weekStartsOn: B,
    locale: F,
    _originalDate: D
  }, H = T.match(No).map(function(z) {
    var $ = z[0];
    if ($ === "p" || $ === "P") {
      var Q = $r[$];
      return Q(z, F.formatLong);
    }
    return z;
  }).join("").match(Lo).map(function(z) {
    if (z === "''")
      return "'";
    var $ = z[0];
    if ($ === "'")
      return Bo(z);
    var Q = Hr[$];
    if (Q)
      return !(n != null && n.useAdditionalWeekYearTokens) && Qr(z) && xn(z, e, String(t)), !(n != null && n.useAdditionalDayOfYearTokens) && Xr(z) && xn(z, e, String(t)), Q(Y, z, F.localize, b);
    if ($.match(Yo))
      throw new RangeError("Format string contains an unescaped latin alphabet character `" + $ + "`");
    return z;
  }).join("");
  return H;
}
function Bo(t) {
  var e = t.match(Uo);
  return e ? e[1].replace(Fo, "'") : t;
}
function _n(t, e, n) {
  var r, o, a, i, l, c, s, f, d, p;
  V(2, arguments);
  var m = j(t), g = j(e), v = Nt(), w = (r = (o = n == null ? void 0 : n.locale) !== null && o !== void 0 ? o : v.locale) !== null && r !== void 0 ? r : Vn, y = dt((a = (i = (l = (c = n == null ? void 0 : n.weekStartsOn) !== null && c !== void 0 ? c : n == null || (s = n.locale) === null || s === void 0 || (f = s.options) === null || f === void 0 ? void 0 : f.weekStartsOn) !== null && l !== void 0 ? l : v.weekStartsOn) !== null && i !== void 0 ? i : (d = v.locale) === null || d === void 0 || (p = d.options) === null || p === void 0 ? void 0 : p.weekStartsOn) !== null && a !== void 0 ? a : 0);
  if (!w.localize)
    throw new RangeError("locale must contain localize property");
  if (!w.formatLong)
    throw new RangeError("locale must contain formatLong property");
  if (!w.formatRelative)
    throw new RangeError("locale must contain formatRelative property");
  var x = Pr(m, g);
  if (isNaN(x))
    throw new RangeError("Invalid time value");
  var k;
  x < -6 ? k = "other" : x < -1 ? k = "lastWeek" : x < 0 ? k = "yesterday" : x < 1 ? k = "today" : x < 2 ? k = "tomorrow" : x < 7 ? k = "nextWeek" : k = "other";
  var M = Ee(m, Et(m)), T = Ee(g, Et(g)), U = w.formatRelative(k, M, T, {
    locale: w,
    weekStartsOn: y
  });
  return zo(m, U, {
    locale: w,
    weekStartsOn: y
  });
}
function wt(t) {
  return t.split("-")[0];
}
function Be(t) {
  return t.split("-")[1];
}
function Ut(t) {
  return ["top", "bottom"].includes(wt(t)) ? "x" : "y";
}
function In(t) {
  return t === "y" ? "height" : "width";
}
function kn(t, e, n) {
  let {
    reference: r,
    floating: o
  } = t;
  const a = r.x + r.width / 2 - o.width / 2, i = r.y + r.height / 2 - o.height / 2, l = Ut(e), c = In(l), s = r[c] / 2 - o[c] / 2, f = wt(e), d = l === "x";
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
  switch (Be(e)) {
    case "start":
      p[l] -= s * (n && d ? -1 : 1);
      break;
    case "end":
      p[l] += s * (n && d ? -1 : 1);
      break;
  }
  return p;
}
const Ho = async (t, e, n) => {
  const {
    placement: r = "bottom",
    strategy: o = "absolute",
    middleware: a = [],
    platform: i
  } = n, l = a.filter(Boolean), c = await (i.isRTL == null ? void 0 : i.isRTL(e));
  if ({}.NODE_ENV !== "production") {
    if (i == null && console.error(["Floating UI: `platform` property was not passed to config. If you", "want to use Floating UI on the web, install @floating-ui/dom", "instead of the /core package. Otherwise, you can create your own", "`platform`: https://floating-ui.com/docs/platform"].join(" ")), l.filter((v) => {
      let {
        name: w
      } = v;
      return w === "autoPlacement" || w === "flip";
    }).length > 1)
      throw new Error(["Floating UI: duplicate `flip` and/or `autoPlacement` middleware", "detected. This will lead to an infinite loop. Ensure only one of", "either has been passed to the `middleware` array."].join(" "));
    (!t || !e) && console.error(["Floating UI: The reference and/or floating element was not defined", "when `computePosition()` was called. Ensure that both elements have", "been created and can be measured."].join(" "));
  }
  let s = await i.getElementRects({
    reference: t,
    floating: e,
    strategy: o
  }), {
    x: f,
    y: d
  } = kn(s, r, c), p = r, m = {}, g = 0;
  for (let v = 0; v < l.length; v++) {
    const {
      name: w,
      fn: y
    } = l[v], {
      x,
      y: k,
      data: M,
      reset: T
    } = await y({
      x: f,
      y: d,
      initialPlacement: r,
      placement: p,
      strategy: o,
      middlewareData: m,
      rects: s,
      platform: i,
      elements: {
        reference: t,
        floating: e
      }
    });
    if (f = x ?? f, d = k ?? d, m = {
      ...m,
      [w]: {
        ...m[w],
        ...M
      }
    }, {}.NODE_ENV !== "production" && g > 50 && console.warn(["Floating UI: The middleware lifecycle appears to be running in an", "infinite loop. This is usually caused by a `reset` continually", "being returned without a break condition."].join(" ")), T && g <= 50) {
      g++, typeof T == "object" && (T.placement && (p = T.placement), T.rects && (s = T.rects === !0 ? await i.getElementRects({
        reference: t,
        floating: e,
        strategy: o
      }) : T.rects), {
        x: f,
        y: d
      } = kn(s, p, c)), v = -1;
      continue;
    }
  }
  return {
    x: f,
    y: d,
    placement: p,
    strategy: o,
    middlewareData: m
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
function $n(t) {
  return typeof t != "number" ? Vo(t) : {
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
async function qn(t, e) {
  var n;
  e === void 0 && (e = {});
  const {
    x: r,
    y: o,
    platform: a,
    rects: i,
    elements: l,
    strategy: c
  } = t, {
    boundary: s = "clippingAncestors",
    rootBoundary: f = "viewport",
    elementContext: d = "floating",
    altBoundary: p = !1,
    padding: m = 0
  } = e, g = $n(m), w = l[p ? d === "floating" ? "reference" : "floating" : d], y = At(await a.getClippingRect({
    element: (n = await (a.isElement == null ? void 0 : a.isElement(w))) == null || n ? w : w.contextElement || await (a.getDocumentElement == null ? void 0 : a.getDocumentElement(l.floating)),
    boundary: s,
    rootBoundary: f,
    strategy: c
  })), x = d === "floating" ? {
    ...i.floating,
    x: r,
    y: o
  } : i.reference, k = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(l.floating)), M = await (a.isElement == null ? void 0 : a.isElement(k)) ? await (a.getScale == null ? void 0 : a.getScale(k)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, T = At(a.convertOffsetParentRelativeRectToViewportRelativeRect ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({
    rect: x,
    offsetParent: k,
    strategy: c
  }) : x);
  return {
    top: (y.top - T.top + g.top) / M.y,
    bottom: (T.bottom - y.bottom + g.bottom) / M.y,
    left: (y.left - T.left + g.left) / M.x,
    right: (T.right - y.right + g.right) / M.x
  };
}
const jn = Math.min, Xn = Math.max;
function Cn(t, e, n) {
  return Xn(t, jn(e, n));
}
const Io = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function de(t) {
  return t.replace(/left|right|bottom|top/g, (e) => Io[e]);
}
function $o(t, e, n) {
  n === void 0 && (n = !1);
  const r = Be(t), o = Ut(t), a = In(o);
  let i = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return e.reference[a] > e.floating[a] && (i = de(i)), {
    main: i,
    cross: de(i)
  };
}
const qo = {
  start: "end",
  end: "start"
};
function Tn(t) {
  return t.replace(/start|end/g, (e) => qo[e]);
}
function jo(t) {
  const e = de(t);
  return [Tn(t), e, Tn(e)];
}
const Ae = function(t) {
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
        platform: l,
        elements: c
      } = e, {
        mainAxis: s = !0,
        crossAxis: f = !0,
        fallbackPlacements: d,
        fallbackStrategy: p = "bestFit",
        flipAlignment: m = !0,
        ...g
      } = t, v = wt(r), y = d || (v === i || !m ? [de(i)] : jo(i)), x = [i, ...y], k = await qn(e, g), M = [];
      let T = ((n = o.flip) == null ? void 0 : n.overflows) || [];
      if (s && M.push(k[v]), f) {
        const {
          main: B,
          cross: D
        } = $o(r, a, await (l.isRTL == null ? void 0 : l.isRTL(c.floating)));
        M.push(k[B], k[D]);
      }
      if (T = [...T, {
        placement: r,
        overflows: M
      }], !M.every((B) => B <= 0)) {
        var U, F;
        const B = ((U = (F = o.flip) == null ? void 0 : F.index) != null ? U : 0) + 1, D = x[B];
        if (D)
          return {
            data: {
              index: B,
              overflows: T
            },
            reset: {
              placement: D
            }
          };
        let S = "bottom";
        switch (p) {
          case "bestFit": {
            var q;
            const Y = (q = T.map((b) => [b, b.overflows.filter((H) => H > 0).reduce((H, z) => H + z, 0)]).sort((b, H) => b[1] - H[1])[0]) == null ? void 0 : q[0].placement;
            Y && (S = Y);
            break;
          }
          case "initialPlacement":
            S = i;
            break;
        }
        if (r !== S)
          return {
            reset: {
              placement: S
            }
          };
      }
      return {};
    }
  };
};
async function Xo(t, e) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = t, a = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), i = wt(n), l = Be(n), c = Ut(n) === "x", s = ["left", "top"].includes(i) ? -1 : 1, f = a && c ? -1 : 1, d = typeof e == "function" ? e(t) : e;
  let {
    mainAxis: p,
    crossAxis: m,
    alignmentAxis: g
  } = typeof d == "number" ? {
    mainAxis: d,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...d
  };
  return l && typeof g == "number" && (m = l === "end" ? g * -1 : g), c ? {
    x: m * f,
    y: p * s
  } : {
    x: p * s,
    y: m * f
  };
}
const Re = function(t) {
  return t === void 0 && (t = 0), {
    name: "offset",
    options: t,
    async fn(e) {
      const {
        x: n,
        y: r
      } = e, o = await Xo(e, t);
      return {
        x: n + o.x,
        y: r + o.y,
        data: o
      };
    }
  };
};
function Qo(t) {
  return t === "x" ? "y" : "x";
}
const We = function(t) {
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
        limiter: l = {
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
      } = t, s = {
        x: n,
        y: r
      }, f = await qn(e, c), d = Ut(wt(o)), p = Qo(d);
      let m = s[d], g = s[p];
      if (a) {
        const w = d === "y" ? "top" : "left", y = d === "y" ? "bottom" : "right", x = m + f[w], k = m - f[y];
        m = Cn(x, m, k);
      }
      if (i) {
        const w = p === "y" ? "top" : "left", y = p === "y" ? "bottom" : "right", x = g + f[w], k = g - f[y];
        g = Cn(x, g, k);
      }
      const v = l.fn({
        ...e,
        [d]: m,
        [p]: g
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
}, Le = function(t) {
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
        strategy: l
      } = e, {
        padding: c = 2,
        x: s,
        y: f
      } = t, d = At(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
        rect: a.reference,
        offsetParent: await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(o.floating)),
        strategy: l
      }) : a.reference), p = (n = await (i.getClientRects == null ? void 0 : i.getClientRects(o.reference))) != null ? n : [], m = $n(c);
      function g() {
        if (p.length === 2 && p[0].left > p[1].right && s != null && f != null) {
          var w;
          return (w = p.find((y) => s > y.left - m.left && s < y.right + m.right && f > y.top - m.top && f < y.bottom + m.bottom)) != null ? w : d;
        }
        if (p.length >= 2) {
          if (Ut(r) === "x") {
            const S = p[0], Y = p[p.length - 1], b = wt(r) === "top", H = S.top, z = Y.bottom, $ = b ? S.left : Y.left, Q = b ? S.right : Y.right, yt = Q - $, Tt = z - H;
            return {
              top: H,
              bottom: z,
              left: $,
              right: Q,
              width: yt,
              height: Tt,
              x: $,
              y: H
            };
          }
          const y = wt(r) === "left", x = Xn(...p.map((S) => S.right)), k = jn(...p.map((S) => S.left)), M = p.filter((S) => y ? S.left === k : S.right === x), T = M[0].top, U = M[M.length - 1].bottom, F = k, q = x, B = q - F, D = U - T;
          return {
            top: T,
            bottom: U,
            left: F,
            right: q,
            width: B,
            height: D,
            x: F,
            y: T
          };
        }
        return d;
      }
      const v = await i.getElementRects({
        reference: {
          getBoundingClientRect: g
        },
        floating: o.floating,
        strategy: l
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
function tt(t) {
  return X(t).getComputedStyle(t);
}
function ft(t) {
  return Gn(t) ? (t.nodeName || "").toLowerCase() : "";
}
let ne;
function Qn() {
  if (ne)
    return ne;
  const t = navigator.userAgentData;
  return t && Array.isArray(t.brands) ? (ne = t.brands.map((e) => e.brand + "/" + e.version).join(" "), ne) : navigator.userAgent;
}
function st(t) {
  return t instanceof X(t).HTMLElement;
}
function mt(t) {
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
  } = tt(t);
  return /auto|scroll|overlay|hidden|clip/.test(e + r + n) && !["inline", "contents"].includes(o);
}
function Go(t) {
  return ["table", "td", "th"].includes(ft(t));
}
function He(t) {
  const e = /firefox/i.test(Qn()), n = tt(t), r = n.backdropFilter || n.WebkitBackdropFilter;
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
function Ve(t) {
  return ["html", "body", "#document"].includes(ft(t));
}
const Mn = Math.min, Pt = Math.max, fe = Math.round;
function Kn(t) {
  const e = tt(t);
  let n = parseFloat(e.width), r = parseFloat(e.height);
  const o = t.offsetWidth, a = t.offsetHeight, i = fe(n) !== o || fe(r) !== a;
  return i && (n = o, r = a), {
    width: n,
    height: r,
    fallback: i
  };
}
function Zn(t) {
  return mt(t) ? t : t.contextElement;
}
const tr = {
  x: 1,
  y: 1
};
function Ct(t) {
  const e = Zn(t);
  if (!st(e))
    return tr;
  const n = e.getBoundingClientRect(), {
    width: r,
    height: o,
    fallback: a
  } = Kn(e);
  let i = (a ? fe(n.width) : n.width) / r, l = (a ? fe(n.height) : n.height) / o;
  return (!i || !Number.isFinite(i)) && (i = 1), (!l || !Number.isFinite(l)) && (l = 1), {
    x: i,
    y: l
  };
}
function Rt(t, e, n, r) {
  var o, a;
  e === void 0 && (e = !1), n === void 0 && (n = !1);
  const i = t.getBoundingClientRect(), l = Zn(t);
  let c = tr;
  e && (r ? mt(r) && (c = Ct(r)) : c = Ct(t));
  const s = l ? X(l) : window, f = !Jn() && n;
  let d = (i.left + (f && ((o = s.visualViewport) == null ? void 0 : o.offsetLeft) || 0)) / c.x, p = (i.top + (f && ((a = s.visualViewport) == null ? void 0 : a.offsetTop) || 0)) / c.y, m = i.width / c.x, g = i.height / c.y;
  if (l) {
    const v = X(l), w = r && mt(r) ? X(r) : r;
    let y = v.frameElement;
    for (; y && r && w !== v; ) {
      const x = Ct(y), k = y.getBoundingClientRect(), M = getComputedStyle(y);
      k.x += (y.clientLeft + parseFloat(M.paddingLeft)) * x.x, k.y += (y.clientTop + parseFloat(M.paddingTop)) * x.y, d *= x.x, p *= x.y, m *= x.x, g *= x.y, d += k.x, p += k.y, y = X(y).frameElement;
    }
  }
  return {
    width: m,
    height: g,
    top: p,
    right: d + m,
    bottom: p + g,
    left: d,
    x: d,
    y: p
  };
}
function pt(t) {
  return ((Gn(t) ? t.ownerDocument : t.document) || window.document).documentElement;
}
function ge(t) {
  return mt(t) ? {
    scrollLeft: t.scrollLeft,
    scrollTop: t.scrollTop
  } : {
    scrollLeft: t.pageXOffset,
    scrollTop: t.pageYOffset
  };
}
function er(t) {
  return Rt(pt(t)).left + ge(t).scrollLeft;
}
function Jo(t, e, n) {
  const r = st(e), o = pt(e), a = Rt(t, !0, n === "fixed", e);
  let i = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = {
    x: 0,
    y: 0
  };
  if (r || !r && n !== "fixed")
    if ((ft(e) !== "body" || he(o)) && (i = ge(e)), st(e)) {
      const c = Rt(e, !0);
      l.x = c.x + e.clientLeft, l.y = c.y + e.clientTop;
    } else
      o && (l.x = er(o));
  return {
    x: a.left + i.scrollLeft - l.x,
    y: a.top + i.scrollTop - l.y,
    width: a.width,
    height: a.height
  };
}
function Wt(t) {
  if (ft(t) === "html")
    return t;
  const e = t.assignedSlot || t.parentNode || (On(t) ? t.host : null) || pt(t);
  return On(e) ? e.host : e;
}
function Dn(t) {
  return !st(t) || tt(t).position === "fixed" ? null : t.offsetParent;
}
function Ko(t) {
  let e = Wt(t);
  for (; st(e) && !Ve(e); ) {
    if (He(e))
      return e;
    e = Wt(e);
  }
  return null;
}
function Pn(t) {
  const e = X(t);
  let n = Dn(t);
  for (; n && Go(n) && tt(n).position === "static"; )
    n = Dn(n);
  return n && (ft(n) === "html" || ft(n) === "body" && tt(n).position === "static" && !He(n)) ? e : n || Ko(t) || e;
}
function Zo(t) {
  return Kn(t);
}
function ta(t) {
  let {
    rect: e,
    offsetParent: n,
    strategy: r
  } = t;
  const o = st(n), a = pt(n);
  if (n === a)
    return e;
  let i = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = {
    x: 1,
    y: 1
  };
  const c = {
    x: 0,
    y: 0
  };
  if ((o || !o && r !== "fixed") && ((ft(n) !== "body" || he(a)) && (i = ge(n)), st(n))) {
    const s = Rt(n);
    l = Ct(n), c.x = s.x + n.clientLeft, c.y = s.y + n.clientTop;
  }
  return {
    width: e.width * l.x,
    height: e.height * l.y,
    x: e.x * l.x - i.scrollLeft * l.x + c.x,
    y: e.y * l.y - i.scrollTop * l.y + c.y
  };
}
function ea(t, e) {
  const n = X(t), r = pt(t), o = n.visualViewport;
  let a = r.clientWidth, i = r.clientHeight, l = 0, c = 0;
  if (o) {
    a = o.width, i = o.height;
    const s = Jn();
    (s || !s && e === "fixed") && (l = o.offsetLeft, c = o.offsetTop);
  }
  return {
    width: a,
    height: i,
    x: l,
    y: c
  };
}
function na(t) {
  var e;
  const n = pt(t), r = ge(t), o = (e = t.ownerDocument) == null ? void 0 : e.body, a = Pt(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), i = Pt(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0);
  let l = -r.scrollLeft + er(t);
  const c = -r.scrollTop;
  return tt(o || n).direction === "rtl" && (l += Pt(n.clientWidth, o ? o.clientWidth : 0) - a), {
    width: a,
    height: i,
    x: l,
    y: c
  };
}
function nr(t) {
  const e = Wt(t);
  return Ve(e) ? t.ownerDocument.body : st(e) && he(e) ? e : nr(e);
}
function rr(t, e) {
  var n;
  e === void 0 && (e = []);
  const r = nr(t), o = r === ((n = t.ownerDocument) == null ? void 0 : n.body), a = X(r);
  return o ? e.concat(a, a.visualViewport || [], he(r) ? r : []) : e.concat(r, rr(r));
}
function ra(t, e) {
  const n = Rt(t, !0, e === "fixed"), r = n.top + t.clientTop, o = n.left + t.clientLeft, a = st(t) ? Ct(t) : {
    x: 1,
    y: 1
  }, i = t.clientWidth * a.x, l = t.clientHeight * a.y, c = o * a.x, s = r * a.y;
  return {
    top: s,
    left: c,
    right: c + i,
    bottom: s + l,
    x: c,
    y: s,
    width: i,
    height: l
  };
}
function Sn(t, e, n) {
  return e === "viewport" ? At(ea(t, n)) : mt(e) ? ra(e, n) : At(na(pt(t)));
}
function oa(t, e) {
  const n = e.get(t);
  if (n)
    return n;
  let r = rr(t).filter((l) => mt(l) && ft(l) !== "body"), o = null;
  const a = tt(t).position === "fixed";
  let i = a ? Wt(t) : t;
  for (; mt(i) && !Ve(i); ) {
    const l = tt(i), c = He(i);
    (a ? !c && !o : !c && l.position === "static" && !!o && ["absolute", "fixed"].includes(o.position)) ? r = r.filter((f) => f !== i) : o = l, i = Wt(i);
  }
  return e.set(t, r), r;
}
function aa(t) {
  let {
    element: e,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = t;
  const i = [...n === "clippingAncestors" ? oa(e, this._c) : [].concat(n), r], l = i[0], c = i.reduce((s, f) => {
    const d = Sn(e, f, o);
    return s.top = Pt(d.top, s.top), s.right = Mn(d.right, s.right), s.bottom = Mn(d.bottom, s.bottom), s.left = Pt(d.left, s.left), s;
  }, Sn(e, l, o));
  return {
    width: c.right - c.left,
    height: c.bottom - c.top,
    x: c.left,
    y: c.top
  };
}
const ia = {
  getClippingRect: aa,
  convertOffsetParentRelativeRectToViewportRelativeRect: ta,
  isElement: mt,
  getDimensions: Zo,
  getOffsetParent: Pn,
  getDocumentElement: pt,
  getScale: Ct,
  async getElementRects(t) {
    let {
      reference: e,
      floating: n,
      strategy: r
    } = t;
    const o = this.getOffsetParent || Pn, a = this.getDimensions;
    return {
      reference: Jo(e, await o(n), r),
      floating: {
        x: 0,
        y: 0,
        ...await a(n)
      }
    };
  },
  getClientRects: (t) => Array.from(t.getClientRects()),
  isRTL: (t) => tt(t).direction === "rtl"
}, Ne = (t, e, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: ia,
    ...n
  }, a = {
    ...o.platform,
    _c: r
  };
  return Ho(t, e, {
    ...o,
    platform: a
  });
};
function Me(t, e) {
  const n = (r) => {
    const o = t.hasAttribute("data-ignore-clickable"), a = document.querySelectorAll("[data-clickable]"), i = a.length && Array.from(a).some((l) => l.contains(r.target));
    !o && i || t && !t.contains(r.target) && !r.defaultPrevented && e();
  };
  return document.addEventListener("click", n, !0), {
    destroy() {
      document.removeEventListener("click", n, !0);
    }
  };
}
function sa(t) {
  let e;
  function n(a, i) {
    return a[0] ? ua : ca;
  }
  let r = n(t), o = r(t);
  return {
    c() {
      e = _("button"), o.c(), u(e, "type", "button"), u(e, "class", "spd-px-3 spd-py-2 spd-transition-colors spd-space-x-1.5 spd-border spd-border-zinc-900 spd-text-zinc-500 spd-rounded-md hover:spd-text-white hover:spd-bg-zinc-900 spd-text-sm spd-flex spd-items-center spd-self-end");
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
function la(t) {
  let e, n;
  return {
    c() {
      e = I("svg"), n = I("path"), u(n, "d", "M4.5 12.5C4.5 16.9183 8.08172 20.5 12.5 20.5C16.9183 20.5 20.5 16.9183 20.5 12.5C20.5 8.08172 16.9183 4.5 12.5 4.5"), u(n, "stroke", "#9CA3AF"), u(n, "stroke-width", "1.2"), u(e, "class", "spd-animate-spin spd-w-5 spd-h-5"), u(e, "viewBox", "0 0 25 25"), u(e, "fill", "none"), u(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(r, o) {
      W(r, e, o), h(e, n);
    },
    p: P,
    d(r) {
      r && R(e);
    }
  };
}
function ca(t) {
  let e, n, r, o;
  return {
    c() {
      e = I("svg"), n = I("path"), r = O(), o = _("span"), o.textContent = "Resolve", u(n, "stroke-linecap", "round"), u(n, "stroke-linejoin", "round"), u(n, "stroke-width", "2"), u(n, "d", "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"), u(e, "xmlns", "http://www.w3.org/2000/svg"), u(e, "fill", "none"), u(e, "viewBox", "0 0 24 24"), u(e, "stroke", "currentColor"), u(e, "class", "spd-w-5 spd-h-5");
    },
    m(a, i) {
      W(a, e, i), h(e, n), W(a, r, i), W(a, o, i);
    },
    d(a) {
      a && R(e), a && R(r), a && R(o);
    }
  };
}
function ua(t) {
  let e, n;
  return {
    c() {
      e = I("svg"), n = I("path"), u(n, "fill-rule", "evenodd"), u(n, "d", "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"), u(n, "clip-rule", "evenodd"), u(e, "xmlns", "http://www.w3.org/2000/svg"), u(e, "viewBox", "0 0 20 20"), u(e, "fill", "currentColor"), u(e, "class", "spd-w-5 spd-h-5 spd-text-green-300");
    },
    m(r, o) {
      W(r, e, o), h(e, n);
    },
    d(r) {
      r && R(e);
    }
  };
}
function da(t) {
  let e, n, r, o, a, i, l, c, s, f, d, p, m = _n(new Date(t[5]), new Date()) + "", g, v, w, y, x, k, M, T, U, F, q, B, D, S, Y, b, H, z = " ", $, Q, yt, Tt, Ie, et, Ft, $e, ir = " ", qe, je, Yt, zt = t[4].userAgent + "", ve, Xe, nt, Bt, Qe, sr = " ", Ge, Je, Ht, Vt = t[4].platform + "", we, Ke, rt, It, Ze, lr = " ", tn, en, xt, $t = t[4].screenWidth + "", be, nn, qt = t[4].screenHeight + "", ye, rn, ot, jt, on, cr = " ", an, sn, Xt, Qt = t[4].devicePixelRatio + "", xe, ln, lt, Gt, cn, ur = " ", un, dn, Jt, Kt = t[4].language + "", _e, ke, fn;
  function mn(C, E) {
    return C[6] ? la : sa;
  }
  let Zt = mn(t), G = Zt(t);
  return {
    c() {
      e = _("button"), n = I("svg"), r = I("path"), o = I("path"), a = O(), i = _("span"), l = N(t[7]), c = O(), s = _("div"), f = _("div"), d = _("div"), p = _("p"), g = N(m), v = O(), w = _("button"), w.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="spd-w-5 spd-h-5"><path fill-rule="evenodd" d="M2 4.25A2.25 2.25 0 014.25 2h11.5A2.25 2.25 0 0118 4.25v8.5A2.25 2.25 0 0115.75 15h-3.105a3.501 3.501 0 001.1 1.677A.75.75 0 0113.26 18H6.74a.75.75 0 01-.484-1.323A3.501 3.501 0 007.355 15H4.25A2.25 2.25 0 012 12.75v-8.5zm1.5 0a.75.75 0 01.75-.75h11.5a.75.75 0 01.75.75v7.5a.75.75 0 01-.75.75H4.25a.75.75 0 01-.75-.75v-7.5z" clip-rule="evenodd"></path></svg>', y = O(), x = _("button"), x.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="spd-w-5 spd-h-5"><path d="M3 10a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM8.5 10a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM15.5 8.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3z"></path></svg>', k = O(), M = _("div"), T = _("p"), U = N(t[1]), q = O(), G.c(), B = O(), D = _("div"), S = _("dl"), Y = _("div"), b = _("dt"), b.textContent = "Pathname:", H = O(), $ = N(z), Q = O(), yt = _("dd"), Tt = N(t[2]), Ie = O(), et = _("div"), Ft = _("dt"), Ft.textContent = "User Agent:", $e = O(), qe = N(ir), je = O(), Yt = _("dd"), ve = N(zt), Xe = O(), nt = _("div"), Bt = _("dt"), Bt.textContent = "Platform:", Qe = O(), Ge = N(sr), Je = O(), Ht = _("dd"), we = N(Vt), Ke = O(), rt = _("div"), It = _("dt"), It.textContent = "Window size:", Ze = O(), tn = N(lr), en = O(), xt = _("dd"), be = N($t), nn = N(" x "), ye = N(qt), rn = O(), ot = _("div"), jt = _("dt"), jt.textContent = "Device pixel ratio:", on = O(), an = N(cr), sn = O(), Xt = _("dd"), xe = N(Qt), ln = O(), lt = _("div"), Gt = _("dt"), Gt.textContent = "Language:", cn = O(), un = N(ur), dn = O(), Jt = _("dd"), _e = N(Kt), u(r, "d", "M22 44C34.1503 44 44 34.1503 44 22C44 9.84974 34.1503 0 22 0H0V22C0 34.1503 9.84974 44 22 44Z"), u(r, "fill", "black"), u(o, "fill-rule", "evenodd"), u(o, "clip-rule", "evenodd"), u(o, "d", "M22 41.25C32.6315 41.25 41.25 32.6315 41.25 22C41.25 11.3685 32.6315 2.75 22 2.75H2.75V22C2.75 32.6315 11.3685 41.25 22 41.25ZM44 22C44 34.1503 34.1503 44 22 44C9.84974 44 0 34.1503 0 22V0H22C34.1503 0 44 9.84974 44 22Z"), u(o, "fill", "white"), u(n, "class", "spd-w-8 spd-h-8"), u(n, "viewBox", "0 0 44 44"), u(n, "fill", "none"), u(n, "xmlns", "http://www.w3.org/2000/svg"), u(i, "class", "spd-absolute spd-left-1/2 spd-top-1/2 -spd-translate-x-1/2 -spd-translate-y-1/2 spd-text-xs spd-text-white"), u(e, "class", "spd-absolute spd-z-[999999]"), u(e, "type", "button"), te(e, "left", `${t[3].x * 100}%`), te(e, "top", `${t[3].y * 100}%`), u(p, "class", "spd-text-sm spd-text-zinc-500"), u(w, "type", "button"), u(w, "class", "spd-p-1.5 spd-rounded-md spd-text-zinc-500 hover:spd-bg-zinc-900 spd-text-sm spd-flex spd-items-center spd-self-end"), u(w, "data-ignore-clickable", ""), u(x, "type", "button"), u(x, "class", "spd-p-1.5 spd-rounded-md spd-text-zinc-500 hover:spd-bg-zinc-900 spd-text-sm spd-flex spd-items-center spd-self-end"), u(d, "class", "spd-flex spd-items-center spd-space-x-3 spd-self-end"), u(T, "class", F = "spd-text-base " + (t[0] ? "spd-text-zinc-600 spd-line-through" : "spd-text-zinc-200")), u(M, "class", "spd-pt-2 spd-pb-4 spd-pr-8"), u(f, "class", "spd-flex spd-flex-col"), u(s, "class", "spd-flex spd-flex-col spd-transition spd-delay-100 spd-duration-300 spd-ease-out spd-absolute spd-top-0 spd-left-0 spd-w-max spd-z-[999999] spd-shadow-lg spd-border spd-border-zinc-600 spd-bg-black spd-px-6 spd-py-3 spd-rounded-md spd-text-white"), u(s, "data-clickable", ""), L(s, "spd-opacity-0", !t[10]), L(s, "spd-translate-y-2", !t[10]), L(s, "spd-opacity-100", t[10]), L(s, "spd-translate-y-0", t[10]), u(b, "class", "spd-whitespace-nowrap spd-min-w-[120px]"), u(yt, "class", "spd-ml-3 spd-font-bold"), u(Y, "class", "spd-flex"), u(Ft, "class", "spd-whitespace-nowrap spd-min-w-[120px]"), u(Yt, "class", "spd-ml-3 spd-font-bold"), u(et, "class", "spd-flex"), u(Bt, "class", "spd-whitespace-nowrap spd-min-w-[120px]"), u(Ht, "class", "spd-ml-3 spd-font-bold"), u(nt, "class", "spd-flex"), u(It, "class", "spd-whitespace-nowrap spd-min-w-[120px]"), u(xt, "class", "spd-ml-3 spd-font-bold"), u(rt, "class", "spd-flex"), u(jt, "class", "spd-whitespace-nowrap spd-min-w-[120px]"), u(Xt, "class", "spd-ml-3 spd-font-bold"), u(ot, "class", "spd-flex"), u(Gt, "class", "spd-whitespace-nowrap spd-min-w-[120px]"), u(Jt, "class", "spd-ml-3 spd-font-bold"), u(lt, "class", "spd-flex"), u(S, "class", "spd-flex spd-flex-col spd-space-y-3 spd-text-sm spd-text-white"), u(D, "class", "spd-flex spd-max-w-sm spd-flex-col spd-transition spd-delay-200 spd-duration-300 spd-ease-out spd-absolute spd-top-0 spd-left-0 spd-w-max spd-z-[999999] spd-shadow-lg spd-border spd-border-zinc-800 spd-bg-black spd-px-6 spd-py-3 spd-rounded-md spd-text-white"), u(D, "data-clickable", ""), L(D, "spd-opacity-0", !t[13]), L(D, "spd-translate-y-2", !t[13]), L(D, "spd-opacity-100", t[13]), L(D, "spd-translate-y-0", t[13]);
    },
    m(C, E) {
      W(C, e, E), h(e, n), h(n, r), h(n, o), h(e, a), h(e, i), h(i, l), t[20](e), W(C, c, E), W(C, s, E), h(s, f), h(f, d), h(d, p), h(p, g), h(d, v), h(d, w), t[21](w), h(d, y), h(d, x), h(f, k), h(f, M), h(M, T), h(T, U), h(s, q), G.m(s, null), t[22](s), W(C, B, E), W(C, D, E), h(D, S), h(S, Y), h(Y, b), h(Y, H), h(Y, $), h(Y, Q), h(Y, yt), h(yt, Tt), h(Y, Ie), h(S, et), h(et, Ft), h(et, $e), h(et, qe), h(et, je), h(et, Yt), h(Yt, ve), h(et, Xe), h(S, nt), h(nt, Bt), h(nt, Qe), h(nt, Ge), h(nt, Je), h(nt, Ht), h(Ht, we), h(nt, Ke), h(S, rt), h(rt, It), h(rt, Ze), h(rt, tn), h(rt, en), h(rt, xt), h(xt, be), h(xt, nn), h(xt, ye), h(rt, rn), h(S, ot), h(ot, jt), h(ot, on), h(ot, an), h(ot, sn), h(ot, Xt), h(Xt, xe), h(ot, ln), h(S, lt), h(lt, Gt), h(lt, cn), h(lt, un), h(lt, dn), h(lt, Jt), h(Jt, _e), t[23](D), ke || (fn = [
        K(e, "mouseenter", t[14]),
        K(e, "click", t[16]),
        Ce(Me.call(null, e, t[15])),
        K(w, "click", t[19]),
        K(w, "mouseenter", t[17]),
        Ce(Me.call(null, w, t[18])),
        K(s, "mouseleave", t[15]),
        Ce(Me.call(null, D, t[18]))
      ], ke = !0);
    },
    p(C, [E]) {
      E & 128 && J(l, C[7]), E & 8 && te(e, "left", `${C[3].x * 100}%`), E & 8 && te(e, "top", `${C[3].y * 100}%`), E & 32 && m !== (m = _n(new Date(C[5]), new Date()) + "") && J(g, m), E & 2 && J(U, C[1]), E & 1 && F !== (F = "spd-text-base " + (C[0] ? "spd-text-zinc-600 spd-line-through" : "spd-text-zinc-200")) && u(T, "class", F), Zt === (Zt = mn(C)) && G ? G.p(C, E) : (G.d(1), G = Zt(C), G && (G.c(), G.m(s, null))), E & 1024 && L(s, "spd-opacity-0", !C[10]), E & 1024 && L(s, "spd-translate-y-2", !C[10]), E & 1024 && L(s, "spd-opacity-100", C[10]), E & 1024 && L(s, "spd-translate-y-0", C[10]), E & 4 && J(Tt, C[2]), E & 16 && zt !== (zt = C[4].userAgent + "") && J(ve, zt), E & 16 && Vt !== (Vt = C[4].platform + "") && J(we, Vt), E & 16 && $t !== ($t = C[4].screenWidth + "") && J(be, $t), E & 16 && qt !== (qt = C[4].screenHeight + "") && J(ye, qt), E & 16 && Qt !== (Qt = C[4].devicePixelRatio + "") && J(xe, Qt), E & 16 && Kt !== (Kt = C[4].language + "") && J(_e, Kt), E & 8192 && L(D, "spd-opacity-0", !C[13]), E & 8192 && L(D, "spd-translate-y-2", !C[13]), E & 8192 && L(D, "spd-opacity-100", C[13]), E & 8192 && L(D, "spd-translate-y-0", C[13]);
    },
    i: P,
    o: P,
    d(C) {
      C && R(e), t[20](null), C && R(c), C && R(s), t[21](null), G.d(), t[22](null), C && R(B), C && R(D), t[23](null), ke = !1, bt(fn);
    }
  };
}
const En = 300;
function fa(t, e, n) {
  let r, o, a = !1, i, l, c = !1, { resolved: s = !1 } = e, { text: f = "" } = e, { pathname: d = "" } = e, { position: p = { x: 0, y: 0 } } = e, { metadata: m = {} } = e, { createdAt: g = new Date() } = e, { loading: v = !1 } = e, { number: w = 1 } = e;
  const y = async () => {
    const { x: b, y: H } = await Ne(r, o, {
      placement: "right-start",
      middleware: [Le(), Re(4), Ae(), We({ padding: 8 })]
    });
    Object.assign(o.style, { left: `${b}px`, top: `${H}px` });
  }, x = () => {
    a || (n(9, o.style.display = "", o), n(10, a = !0), y());
  }, k = () => {
    a && (n(10, a = !1), n(13, c = !1), setTimeout(
      () => {
        n(9, o.style.display = "none", o), n(12, l.style.display = "none", l);
      },
      En
    ));
  }, M = () => {
    a ? k() : x();
  }, T = async () => {
    if (!i)
      return;
    const { x: b, y: H } = await Ne(i, l, {
      placement: "top",
      middleware: [Le(), Re(20), Ae(), We({ padding: 8 })]
    });
    Object.assign(l.style, { left: `${b}px`, top: `${H}px` });
  }, U = () => {
    c || (n(12, l.style.display = "", l), n(13, c = !0), T());
  }, F = () => {
    c && (n(13, c = !1), setTimeout(
      () => {
        n(12, l.style.display = "none", l);
      },
      En
    ));
  }, q = () => {
    c ? F() : U();
  };
  function B(b) {
    gt[b ? "unshift" : "push"](() => {
      r = b, n(8, r);
    });
  }
  function D(b) {
    gt[b ? "unshift" : "push"](() => {
      i = b, n(11, i);
    });
  }
  function S(b) {
    gt[b ? "unshift" : "push"](() => {
      o = b, n(9, o);
    });
  }
  function Y(b) {
    gt[b ? "unshift" : "push"](() => {
      l = b, n(12, l);
    });
  }
  return t.$$set = (b) => {
    "resolved" in b && n(0, s = b.resolved), "text" in b && n(1, f = b.text), "pathname" in b && n(2, d = b.pathname), "position" in b && n(3, p = b.position), "metadata" in b && n(4, m = b.metadata), "createdAt" in b && n(5, g = b.createdAt), "loading" in b && n(6, v = b.loading), "number" in b && n(7, w = b.number);
  }, [
    s,
    f,
    d,
    p,
    m,
    g,
    v,
    w,
    r,
    o,
    a,
    i,
    l,
    c,
    x,
    k,
    M,
    U,
    F,
    q,
    B,
    D,
    S,
    Y
  ];
}
class ma extends pe {
  constructor(e) {
    super(), me(this, e, fa, da, Lt, {
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
  function o(l) {
    if (Lt(t, l) && (t = l, n)) {
      const c = !kt.length;
      for (const s of r)
        s[1](), kt.push(s, t);
      if (c) {
        for (let s = 0; s < kt.length; s += 2)
          kt[s][0](kt[s + 1]);
        kt.length = 0;
      }
    }
  }
  function a(l) {
    o(l(t));
  }
  function i(l, c = P) {
    const s = [l, c];
    return r.add(s), r.size === 1 && (n = e(o) || P), l(t), () => {
      r.delete(s), r.size === 0 && (n(), n = null);
    };
  }
  return { set: o, update: a, subscribe: i };
}
const it = or(!1);
function pa(t) {
  let e;
  return {
    c() {
      e = I("path"), u(e, "fill-rule", "evenodd"), u(e, "d", "M2 10c0-3.967 3.69-7 8-7 4.31 0 8 3.033 8 7s-3.69 7-8 7a9.165 9.165 0 01-1.504-.123 5.976 5.976 0 01-3.935 1.107.75.75 0 01-.584-1.143 3.478 3.478 0 00.522-1.756C2.979 13.825 2 12.025 2 10z"), u(e, "clip-rule", "evenodd");
    },
    m(n, r) {
      W(n, e, r);
    },
    d(n) {
      n && R(e);
    }
  };
}
function ha(t) {
  let e;
  return {
    c() {
      e = I("path"), u(e, "d", "M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z");
    },
    m(n, r) {
      W(n, e, r);
    },
    d(n) {
      n && R(e);
    }
  };
}
function ga(t) {
  let e, n, r, o;
  return {
    c() {
      e = _("span"), e.textContent = "Comment", n = O(), r = _("code"), o = N("c"), u(r, "class", ar);
    },
    m(a, i) {
      W(a, e, i), W(a, n, i), W(a, r, i), h(r, o);
    },
    p: P,
    d(a) {
      a && R(e), a && R(n), a && R(r);
    }
  };
}
function va(t) {
  let e, n, r, o;
  return {
    c() {
      e = _("span"), e.textContent = "Close comments", n = O(), r = _("code"), o = N("esc"), u(r, "class", ar);
    },
    m(a, i) {
      W(a, e, i), W(a, n, i), W(a, r, i), h(r, o);
    },
    p: P,
    d(a) {
      a && R(e), a && R(n), a && R(r);
    }
  };
}
function wa(t) {
  let e, n, r, o, a, i, l;
  function c(g, v) {
    return g[0] ? ha : pa;
  }
  let s = c(t), f = s(t);
  function d(g, v) {
    return g[0] ? va : ga;
  }
  let p = d(t), m = p(t);
  return {
    c() {
      e = _("button"), n = I("svg"), f.c(), r = O(), o = _("span"), m.c(), u(n, "xmlns", "http://www.w3.org/2000/svg"), u(n, "viewBox", "0 0 20 20"), u(n, "fill", "currentColor"), u(n, "class", "spd-w-5 spd-h-5 spd-mr-2 spd-flex-shrink-0"), u(o, "class", "spd-flex spd-items-center"), u(e, "class", a = "spd-toggle spd-flex spd-items-center spd-fixed spd-bottom-8 spd-left-1/2 spd-bg-black spd-rounded-full -spd-translate-x-1/2 spd-pl-5 spd-pr-6 spd-h-11 !spd-z-[99999] spd-shadow-md spd-border spd-border-zinc-600 spd-font-sans spd-text-base spd-transition-colors " + (t[0] ? "spd-text-zinc-400 hover:spd-text-zinc-50 spd-outline spd-outline-2 spd-outline-zinc-900/60" : "spd-text-zinc-500 hover:spd-text-zinc-50"));
    },
    m(g, v) {
      W(g, e, v), h(e, n), f.m(n, null), h(e, r), h(e, o), m.m(o, null), i || (l = K(e, "click", t[1]), i = !0);
    },
    p(g, [v]) {
      s !== (s = c(g)) && (f.d(1), f = s(g), f && (f.c(), f.m(n, null))), p === (p = d(g)) && m ? m.p(g, v) : (m.d(1), m = p(g), m && (m.c(), m.m(o, null))), v & 1 && a !== (a = "spd-toggle spd-flex spd-items-center spd-fixed spd-bottom-8 spd-left-1/2 spd-bg-black spd-rounded-full -spd-translate-x-1/2 spd-pl-5 spd-pr-6 spd-h-11 !spd-z-[99999] spd-shadow-md spd-border spd-border-zinc-600 spd-font-sans spd-text-base spd-transition-colors " + (g[0] ? "spd-text-zinc-400 hover:spd-text-zinc-50 spd-outline spd-outline-2 spd-outline-zinc-900/60" : "spd-text-zinc-500 hover:spd-text-zinc-50")) && u(e, "class", a);
    },
    i: P,
    o: P,
    d(g) {
      g && R(e), f.d(), m.d(), i = !1, l();
    }
  };
}
const ar = "spd-text-xs spd-ml-3 spd-text-zinc-500 spd-rounded spd-p-1 spd-leading-none spd-shadow-sm spd-bg-zinc-900 spd-border spd-border-zinc-700";
function ba(t, e, n) {
  let r;
  return Fe(t, it, (a) => n(0, r = a)), [r, () => {
    it.update((a) => !a);
  }];
}
class ya extends pe {
  constructor(e) {
    super(), me(this, e, ba, wa, Lt, {});
  }
}
function An(t) {
  let e, n, r, o, a, i, l, c, s, f, d;
  function p(v, w) {
    return v[0] ? _a : xa;
  }
  let m = p(t), g = m(t);
  return {
    c() {
      e = _("form"), n = _("textarea"), r = O(), o = _("div"), a = _("button"), a.textContent = "Cancel", i = O(), l = _("button"), c = _("span"), c.textContent = "Post", s = O(), g.c(), u(n, "class", "spd-px-5 spd-py-3 spd-rounded-md spd-bg-black spd-resize-none spd-appearance-none placeholder:spd-text-zinc-500 focus:spd-outline-none focus:placeholder:spd-text-zinc-700 hover:spd-text-zinc-200 spd-text-base"), u(n, "placeholder", "Add a comment"), u(a, "type", "button"), u(a, "class", "spd-px-3 spd-py-2 spd-transition-colors spd-space-x-1.5 spd-border spd-border-zinc-900 spd-text-zinc-500 spd-rounded-md hover:spd-text-white hover:spd-bg-zinc-900 spd-text-sm spd-flex spd-items-center"), u(l, "type", "submit"), l.disabled = t[0], u(l, "class", "spd-px-3 spd-py-2 spd-transition-colors spd-space-x-1.5 spd-border spd-border-zinc-900 spd-text-zinc-500 spd-rounded-md hover:spd-text-white hover:spd-bg-zinc-900 spd-text-sm spd-flex spd-items-center"), u(o, "class", "spd-flex spd-items-center spd-px-5 spd-py-3 spd-space-x-3 spd-self-end"), u(e, "class", "spd-flex spd-flex-col spd-transition spd-delay-100 spd-duration-300 spd-ease-out spd-absolute spd-top-0 spd-left-0 spd-w-max spd-z-[999999] spd-shadow-lg spd-border spd-border-zinc-600 spd-bg-black spd-rounded-md spd-text-white"), L(e, "spd-opacity-0", !t[3]), L(e, "spd-translate-y-2", !t[3]), L(e, "spd-opacity-100", t[3]), L(e, "spd-translate-y-0", t[3]);
    },
    m(v, w) {
      W(v, e, w), h(e, n), hn(n, t[1]), h(e, r), h(e, o), h(o, a), h(o, i), h(o, l), h(l, c), h(l, s), g.m(l, null), t[8](e), f || (d = [
        K(n, "input", t[7]),
        K(e, "submit", Nn(t[6]))
      ], f = !0);
    },
    p(v, w) {
      w & 2 && hn(n, v[1]), m !== (m = p(v)) && (g.d(1), g = m(v), g && (g.c(), g.m(l, null))), w & 1 && (l.disabled = v[0]), w & 8 && L(e, "spd-opacity-0", !v[3]), w & 8 && L(e, "spd-translate-y-2", !v[3]), w & 8 && L(e, "spd-opacity-100", v[3]), w & 8 && L(e, "spd-translate-y-0", v[3]);
    },
    d(v) {
      v && R(e), g.d(), t[8](null), f = !1, bt(d);
    }
  };
}
function xa(t) {
  let e, n;
  return {
    c() {
      e = I("svg"), n = I("path"), u(n, "d", "M3.105 2.289a.75.75 0 00-.826.95l1.414 4.925A1.5 1.5 0 005.135 9.25h6.115a.75.75 0 010 1.5H5.135a1.5 1.5 0 00-1.442 1.086l-1.414 4.926a.75.75 0 00.826.95 28.896 28.896 0 0015.293-7.154.75.75 0 000-1.115A28.897 28.897 0 003.105 2.289z"), u(e, "xmlns", "http://www.w3.org/2000/svg"), u(e, "viewBox", "0 0 20 20"), u(e, "fill", "currentColor"), u(e, "class", "spd-w-4 spd-h-4");
    },
    m(r, o) {
      W(r, e, o), h(e, n);
    },
    d(r) {
      r && R(e);
    }
  };
}
function _a(t) {
  let e, n;
  return {
    c() {
      e = I("svg"), n = I("path"), u(n, "d", "M4.5 12.5C4.5 16.9183 8.08172 20.5 12.5 20.5C16.9183 20.5 20.5 16.9183 20.5 12.5C20.5 8.08172 16.9183 4.5 12.5 4.5"), u(n, "stroke", "#9CA3AF"), u(n, "stroke-width", "1.2"), u(e, "class", "spd-animate-spin spd-w-5 spd-h-5"), u(e, "viewBox", "0 0 25 25"), u(e, "fill", "none"), u(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(r, o) {
      W(r, e, o), h(e, n);
    },
    d(r) {
      r && R(e);
    }
  };
}
function ka(t) {
  let e, n, r, o = t[4] && An(t);
  return {
    c() {
      o && o.c(), e = Ye();
    },
    m(a, i) {
      o && o.m(a, i), W(a, e, i), n || (r = K(window, "click", t[5]), n = !0);
    },
    p(a, [i]) {
      a[4] ? o ? o.p(a, i) : (o = An(a), o.c(), o.m(e.parentNode, e)) : o && (o.d(1), o = null);
    },
    i: P,
    o: P,
    d(a) {
      o && o.d(a), a && R(e), n = !1, r();
    }
  };
}
function Ca(t, e, n) {
  let r;
  Fe(t, it, (m) => n(4, r = m));
  let o = "", a, i = !1, { loading: l = !1 } = e;
  const c = async ({ clientX: m, clientY: g }) => {
    const v = {
      getBoundingClientRect() {
        return {
          width: 0,
          height: 0,
          x: m,
          y: g,
          top: g,
          left: m,
          right: m,
          bottom: g
        };
      },
      getClientRects() {
        return [];
      }
    };
    console.log(a);
    const { x: w, y } = await Ne(v, a, {
      placement: "right-start",
      middleware: [Le(), Re(28), Ae(), We({ padding: 8 })]
    });
    Object.assign(a.style, { left: `${w}px`, top: `${y}px` });
  }, s = (m) => {
    r && (n(2, a.style.display = "", a), n(3, i = !0), c(m));
  };
  function f(m) {
    vr.call(this, t, m);
  }
  function d() {
    o = this.value, n(1, o);
  }
  function p(m) {
    gt[m ? "unshift" : "push"](() => {
      a = m, n(2, a);
    });
  }
  return t.$$set = (m) => {
    "loading" in m && n(0, l = m.loading);
  }, [
    l,
    o,
    a,
    i,
    r,
    s,
    f,
    d,
    p
  ];
}
class Ta extends pe {
  constructor(e) {
    super(), me(this, e, Ca, ka, Lt, { loading: 0 });
  }
}
const Oa = or([]), { window: Ma } = kr;
function Rn(t, e, n) {
  const r = t.slice();
  return r[4] = e[n], r;
}
function Da(t) {
  return {
    c: P,
    m: P,
    p: P,
    i: P,
    o: P,
    d: P
  };
}
function Pa(t) {
  let e, n, r = it && Sa(t);
  return {
    c() {
      r && r.c(), e = Ye();
    },
    m(o, a) {
      r && r.m(o, a), W(o, e, a), n = !0;
    },
    p(o, a) {
      it && r.p(o, a);
    },
    i(o) {
      n || (Z(r), n = !0);
    },
    o(o) {
      ut(r), n = !1;
    },
    d(o) {
      r && r.d(o), o && R(e);
    }
  };
}
function Sa(t) {
  let e, n, r = t[3], o = [];
  for (let i = 0; i < r.length; i += 1)
    o[i] = Wn(Rn(t, r, i));
  const a = (i) => ut(o[i], 1, 1, () => {
    o[i] = null;
  });
  return {
    c() {
      for (let i = 0; i < o.length; i += 1)
        o[i].c();
      e = Ye();
    },
    m(i, l) {
      for (let c = 0; c < o.length; c += 1)
        o[c].m(i, l);
      W(i, e, l), n = !0;
    },
    p(i, l) {
      if (l & 1) {
        r = i[3];
        let c;
        for (c = 0; c < r.length; c += 1) {
          const s = Rn(i, r, c);
          o[c] ? (o[c].p(s, l), Z(o[c], 1)) : (o[c] = Wn(s), o[c].c(), Z(o[c], 1), o[c].m(e.parentNode, e));
        }
        for (Fn(), c = r.length; c < o.length; c += 1)
          a(c);
        Yn();
      }
    },
    i(i) {
      if (!n) {
        for (let l = 0; l < r.length; l += 1)
          Z(o[l]);
        n = !0;
      }
    },
    o(i) {
      o = o.filter(Boolean);
      for (let l = 0; l < o.length; l += 1)
        ut(o[l]);
      n = !1;
    },
    d(i) {
      pr(o, i), i && R(e);
    }
  };
}
function Wn(t) {
  let e, n;
  return e = new ma({
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
      Se(e.$$.fragment);
    },
    m(r, o) {
      se(e, r, o), n = !0;
    },
    p: P,
    i(r) {
      n || (Z(e.$$.fragment, r), n = !0);
    },
    o(r) {
      ut(e.$$.fragment, r), n = !1;
    },
    d(r) {
      le(e, r);
    }
  };
}
function Ea(t) {
  return {
    c: P,
    m: P,
    p: P,
    i: P,
    o: P,
    d: P
  };
}
function Aa(t) {
  let e, n, r, o, a, i, l;
  e = new ya({});
  let c = {
    ctx: t,
    current: null,
    token: null,
    hasCatch: !1,
    pending: Ea,
    then: Pa,
    catch: Da,
    value: 3,
    blocks: [, , ,]
  };
  return xr(t[0](), c), o = new Ta({}), {
    c() {
      Se(e.$$.fragment), n = O(), c.block.c(), r = O(), Se(o.$$.fragment);
    },
    m(s, f) {
      se(e, s, f), W(s, n, f), c.block.m(s, c.anchor = f), c.mount = () => r.parentNode, c.anchor = r, W(s, r, f), se(o, s, f), a = !0, i || (l = K(Ma, "keydown", Nn(t[1])), i = !0);
    },
    p(s, [f]) {
      t = s, _r(c, t, f);
    },
    i(s) {
      a || (Z(e.$$.fragment, s), Z(c.block), Z(o.$$.fragment, s), a = !0);
    },
    o(s) {
      ut(e.$$.fragment, s);
      for (let f = 0; f < 3; f += 1) {
        const d = c.blocks[f];
        ut(d);
      }
      ut(o.$$.fragment, s), a = !1;
    },
    d(s) {
      le(e, s), s && R(n), c.block.d(s), c.token = null, c = null, s && R(r), le(o, s), i = !1, l();
    }
  };
}
function Ra(t, e, n) {
  let r;
  Fe(t, it, (i) => n(2, r = i));
  const o = async () => {
    const l = document.currentScript.getAttribute("src").split("?id=")[1];
    try {
      const c = await fetch(`${Tr.BASE_URL}/api/comments?projectId=${l}&pathname=${window.location.pathname}`), s = await c.json();
      if (console.log(s), c.ok && s)
        return Oa.set(s), s;
    } catch (c) {
      throw console.log(c), new Error("Oops, couldn't fetch comments from database.");
    }
  }, a = (i) => {
    i.keyCode === 67 && !r && it.set(!0), i.keyCode === 27 && r && it.set(!1);
  };
  return it.subscribe((i) => {
    i ? document.body.classList.add("spd-cursor") : document.body.classList.remove("spd-cursor");
  }), gr(() => {
    document.body.style.position = "relative";
  }), [o, a];
}
class Wa extends pe {
  constructor(e) {
    super(), me(this, e, Ra, Aa, Lt, {});
  }
}
const La = (t) => {
  const e = document.head, n = document.createElement("link");
  n.rel = "stylesheet", n.href = t, e.appendChild(n);
}, Na = () => {
  const t = document.createElement("div");
  t.setAttribute("id", "speedback-app"), document.body.appendChild(t);
}, Ua = () => {
  new Wa({
    target: document.getElementById("speedback-app")
  });
}, Fa = async () => {
  Na(), Ua(), La("/style.css");
};
Fa();
