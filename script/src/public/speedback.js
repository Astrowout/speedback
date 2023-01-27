function E() {
}
function pr(t) {
  return t && typeof t == "object" && typeof t.then == "function";
}
function Yn(t) {
  return t();
}
function mn() {
  return /* @__PURE__ */ Object.create(null);
}
function mt(t) {
  t.forEach(Yn);
}
function me(t) {
  return typeof t == "function";
}
function Tt(t, e) {
  return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function";
}
function mr(t) {
  return Object.keys(t).length === 0;
}
function Fn(t, ...e) {
  if (t == null)
    return E;
  const n = t.subscribe(...e);
  return n.unsubscribe ? () => n.unsubscribe() : n;
}
function se(t, e, n) {
  t.$$.on_destroy.push(Fn(e, n));
}
function hn(t) {
  return t && me(t.destroy) ? t.destroy : E;
}
function p(t, e) {
  t.appendChild(e);
}
function Y(t, e, n) {
  t.insertBefore(e, n || null);
}
function W(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function hr(t, e) {
  for (let n = 0; n < t.length; n += 1)
    t[n] && t[n].d(e);
}
function C(t) {
  return document.createElement(t);
}
function V(t) {
  return document.createElementNS("http://www.w3.org/2000/svg", t);
}
function z(t) {
  return document.createTextNode(t);
}
function S() {
  return z(" ");
}
function zn() {
  return z("");
}
function ut(t, e, n, r) {
  return t.addEventListener(e, n, r), () => t.removeEventListener(e, n, r);
}
function gr(t) {
  return function(e) {
    return e.preventDefault(), t.call(this, e);
  };
}
function u(t, e, n) {
  n == null ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n);
}
function vr(t) {
  return Array.from(t.childNodes);
}
function Q(t, e) {
  e = "" + e, t.wholeText !== e && (t.data = e);
}
function gn(t, e) {
  t.value = e ?? "";
}
function te(t, e, n, r) {
  n === null ? t.style.removeProperty(e) : t.style.setProperty(e, n, r ? "important" : "");
}
function T(t, e, n) {
  t.classList[n ? "add" : "remove"](e);
}
let Et;
function ot(t) {
  Et = t;
}
function Bn() {
  if (!Et)
    throw new Error("Function called outside component initialization");
  return Et;
}
function wr(t) {
  Bn().$$.on_mount.push(t);
}
function br(t, e) {
  const n = t.$$.callbacks[e.type];
  n && n.slice().forEach((r) => r.call(this, e));
}
const Pt = [], ct = [], re = [], vn = [], yr = Promise.resolve();
let Se = !1;
function xr() {
  Se || (Se = !0, yr.then(Ne));
}
function Ee(t) {
  re.push(t);
}
const De = /* @__PURE__ */ new Set();
let ee = 0;
function Ne() {
  const t = Et;
  do {
    for (; ee < Pt.length; ) {
      const e = Pt[ee];
      ee++, ot(e), _r(e.$$);
    }
    for (ot(null), Pt.length = 0, ee = 0; ct.length; )
      ct.pop()();
    for (let e = 0; e < re.length; e += 1) {
      const n = re[e];
      De.has(n) || (De.add(n), n());
    }
    re.length = 0;
  } while (Pt.length);
  for (; vn.length; )
    vn.pop()();
  Se = !1, De.clear(), ot(t);
}
function _r(t) {
  if (t.fragment !== null) {
    t.update(), mt(t.before_update);
    const e = t.dirty;
    t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(Ee);
  }
}
const oe = /* @__PURE__ */ new Set();
let vt;
function Ue() {
  vt = {
    r: 0,
    c: [],
    p: vt
  };
}
function Ye() {
  vt.r || mt(vt.c), vt = vt.p;
}
function G(t, e) {
  t && t.i && (oe.delete(t), t.i(e));
}
function at(t, e, n, r) {
  if (t && t.o) {
    if (oe.has(t))
      return;
    oe.add(t), vt.c.push(() => {
      oe.delete(t), r && (n && t.d(1), r());
    }), t.o(e);
  } else
    r && r();
}
function Cr(t, e) {
  const n = e.token = {};
  function r(o, a, i, l) {
    if (e.token !== n)
      return;
    e.resolved = l;
    let c = e.ctx;
    i !== void 0 && (c = c.slice(), c[i] = l);
    const s = o && (e.current = o)(c);
    let f = !1;
    e.block && (e.blocks ? e.blocks.forEach((d, m) => {
      m !== a && d && (Ue(), at(d, 1, 1, () => {
        e.blocks[m] === d && (e.blocks[m] = null);
      }), Ye());
    }) : e.block.d(1), s.c(), G(s, 1), s.m(e.mount(), e.anchor), f = !0), e.block = s, e.blocks && (e.blocks[a] = s), f && Ne();
  }
  if (pr(t)) {
    const o = Bn();
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
const Tr = typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : global;
function Fe(t) {
  t && t.c();
}
function he(t, e, n, r) {
  const { fragment: o, after_update: a } = t.$$;
  o && o.m(e, n), r || Ee(() => {
    const i = t.$$.on_mount.map(Yn).filter(me);
    t.$$.on_destroy ? t.$$.on_destroy.push(...i) : mt(i), t.$$.on_mount = [];
  }), a.forEach(Ee);
}
function ge(t, e) {
  const n = t.$$;
  n.fragment !== null && (mt(n.on_destroy), n.fragment && n.fragment.d(e), n.on_destroy = n.fragment = null, n.ctx = []);
}
function Or(t, e) {
  t.$$.dirty[0] === -1 && (Pt.push(t), xr(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function ve(t, e, n, r, o, a, i, l = [-1]) {
  const c = Et;
  ot(t);
  const s = t.$$ = {
    fragment: null,
    ctx: [],
    props: a,
    update: E,
    not_equal: o,
    bound: mn(),
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (c ? c.$$.context : [])),
    callbacks: mn(),
    dirty: l,
    skip_bound: !1,
    root: e.target || c.$$.root
  };
  i && i(s.root);
  let f = !1;
  if (s.ctx = n ? n(t, e.props || {}, (d, m, ...h) => {
    const g = h.length ? h[0] : m;
    return s.ctx && o(s.ctx[d], s.ctx[d] = g) && (!s.skip_bound && s.bound[d] && s.bound[d](g), f && Or(t, d)), m;
  }) : [], s.update(), f = !0, mt(s.before_update), s.fragment = r ? r(s.ctx) : !1, e.target) {
    if (e.hydrate) {
      const d = vr(e.target);
      s.fragment && s.fragment.l(d), d.forEach(W);
    } else
      s.fragment && s.fragment.c();
    e.intro && G(t.$$.fragment), he(t, e.target, e.anchor, e.customElement), Ne();
  }
  ot(c);
}
class we {
  $destroy() {
    ge(this, 1), this.$destroy = E;
  }
  $on(e, n) {
    if (!me(n))
      return E;
    const r = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return r.push(n), () => {
      const o = r.indexOf(n);
      o !== -1 && r.splice(o, 1);
    };
  }
  $set(e) {
    this.$$set && !mr(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const Mr = {
  BASE_URL: "http://localhost:3000"
};
function dt(t) {
  if (t === null || t === !0 || t === !1)
    return NaN;
  var e = Number(t);
  return isNaN(e) ? e : e < 0 ? Math.ceil(e) : Math.floor(e);
}
function q(t, e) {
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
function $(t) {
  q(1, arguments);
  var e = Object.prototype.toString.call(t);
  return t instanceof Date || ae(t) === "object" && e === "[object Date]" ? new Date(t.getTime()) : typeof t == "number" || e === "[object Number]" ? new Date(t) : ((typeof t == "string" || e === "[object String]") && typeof console < "u" && (console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"), console.warn(new Error().stack)), new Date(NaN));
}
function Dr(t, e) {
  q(2, arguments);
  var n = $(t).getTime(), r = dt(e);
  return new Date(n + r);
}
var Pr = {};
function Nt() {
  return Pr;
}
function At(t) {
  var e = new Date(Date.UTC(t.getFullYear(), t.getMonth(), t.getDate(), t.getHours(), t.getMinutes(), t.getSeconds(), t.getMilliseconds()));
  return e.setUTCFullYear(t.getFullYear()), t.getTime() - e.getTime();
}
function wn(t) {
  q(1, arguments);
  var e = $(t);
  return e.setHours(0, 0, 0, 0), e;
}
var Sr = 864e5;
function Er(t, e) {
  q(2, arguments);
  var n = wn(t), r = wn(e), o = n.getTime() - At(n), a = r.getTime() - At(r);
  return Math.round((o - a) / Sr);
}
function ie(t) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? ie = function(n) {
    return typeof n;
  } : ie = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, ie(t);
}
function Ar(t) {
  return q(1, arguments), t instanceof Date || ie(t) === "object" && Object.prototype.toString.call(t) === "[object Date]";
}
function Rr(t) {
  if (q(1, arguments), !Ar(t) && typeof t != "number")
    return !1;
  var e = $(t);
  return !isNaN(Number(e));
}
function Ae(t, e) {
  q(2, arguments);
  var n = dt(e);
  return Dr(t, -n);
}
var Wr = 864e5;
function Lr(t) {
  q(1, arguments);
  var e = $(t), n = e.getTime();
  e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
  var r = e.getTime(), o = n - r;
  return Math.floor(o / Wr) + 1;
}
function le(t) {
  q(1, arguments);
  var e = 1, n = $(t), r = n.getUTCDay(), o = (r < e ? 7 : 0) + r - e;
  return n.setUTCDate(n.getUTCDate() - o), n.setUTCHours(0, 0, 0, 0), n;
}
function Hn(t) {
  q(1, arguments);
  var e = $(t), n = e.getUTCFullYear(), r = new Date(0);
  r.setUTCFullYear(n + 1, 0, 4), r.setUTCHours(0, 0, 0, 0);
  var o = le(r), a = new Date(0);
  a.setUTCFullYear(n, 0, 4), a.setUTCHours(0, 0, 0, 0);
  var i = le(a);
  return e.getTime() >= o.getTime() ? n + 1 : e.getTime() >= i.getTime() ? n : n - 1;
}
function Nr(t) {
  q(1, arguments);
  var e = Hn(t), n = new Date(0);
  n.setUTCFullYear(e, 0, 4), n.setUTCHours(0, 0, 0, 0);
  var r = le(n);
  return r;
}
var Ur = 6048e5;
function Yr(t) {
  q(1, arguments);
  var e = $(t), n = le(e).getTime() - Nr(e).getTime();
  return Math.round(n / Ur) + 1;
}
function ce(t, e) {
  var n, r, o, a, i, l, c, s;
  q(1, arguments);
  var f = Nt(), d = dt((n = (r = (o = (a = e == null ? void 0 : e.weekStartsOn) !== null && a !== void 0 ? a : e == null || (i = e.locale) === null || i === void 0 || (l = i.options) === null || l === void 0 ? void 0 : l.weekStartsOn) !== null && o !== void 0 ? o : f.weekStartsOn) !== null && r !== void 0 ? r : (c = f.locale) === null || c === void 0 || (s = c.options) === null || s === void 0 ? void 0 : s.weekStartsOn) !== null && n !== void 0 ? n : 0);
  if (!(d >= 0 && d <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var m = $(t), h = m.getUTCDay(), g = (h < d ? 7 : 0) + h - d;
  return m.setUTCDate(m.getUTCDate() - g), m.setUTCHours(0, 0, 0, 0), m;
}
function Vn(t, e) {
  var n, r, o, a, i, l, c, s;
  q(1, arguments);
  var f = $(t), d = f.getUTCFullYear(), m = Nt(), h = dt((n = (r = (o = (a = e == null ? void 0 : e.firstWeekContainsDate) !== null && a !== void 0 ? a : e == null || (i = e.locale) === null || i === void 0 || (l = i.options) === null || l === void 0 ? void 0 : l.firstWeekContainsDate) !== null && o !== void 0 ? o : m.firstWeekContainsDate) !== null && r !== void 0 ? r : (c = m.locale) === null || c === void 0 || (s = c.options) === null || s === void 0 ? void 0 : s.firstWeekContainsDate) !== null && n !== void 0 ? n : 1);
  if (!(h >= 1 && h <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var g = new Date(0);
  g.setUTCFullYear(d + 1, 0, h), g.setUTCHours(0, 0, 0, 0);
  var b = ce(g, e), w = new Date(0);
  w.setUTCFullYear(d, 0, h), w.setUTCHours(0, 0, 0, 0);
  var v = ce(w, e);
  return f.getTime() >= b.getTime() ? d + 1 : f.getTime() >= v.getTime() ? d : d - 1;
}
function Fr(t, e) {
  var n, r, o, a, i, l, c, s;
  q(1, arguments);
  var f = Nt(), d = dt((n = (r = (o = (a = e == null ? void 0 : e.firstWeekContainsDate) !== null && a !== void 0 ? a : e == null || (i = e.locale) === null || i === void 0 || (l = i.options) === null || l === void 0 ? void 0 : l.firstWeekContainsDate) !== null && o !== void 0 ? o : f.firstWeekContainsDate) !== null && r !== void 0 ? r : (c = f.locale) === null || c === void 0 || (s = c.options) === null || s === void 0 ? void 0 : s.firstWeekContainsDate) !== null && n !== void 0 ? n : 1), m = Vn(t, e), h = new Date(0);
  h.setUTCFullYear(m, 0, d), h.setUTCHours(0, 0, 0, 0);
  var g = ce(h, e);
  return g;
}
var zr = 6048e5;
function Br(t, e) {
  q(1, arguments);
  var n = $(t), r = ce(n, e).getTime() - Fr(n, e).getTime();
  return Math.round(r / zr) + 1;
}
function U(t, e) {
  for (var n = t < 0 ? "-" : "", r = Math.abs(t).toString(); r.length < e; )
    r = "0" + r;
  return n + r;
}
var Hr = {
  y: function(e, n) {
    var r = e.getUTCFullYear(), o = r > 0 ? r : 1 - r;
    return U(n === "yy" ? o % 100 : o, n.length);
  },
  M: function(e, n) {
    var r = e.getUTCMonth();
    return n === "M" ? String(r + 1) : U(r + 1, 2);
  },
  d: function(e, n) {
    return U(e.getUTCDate(), n.length);
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
    return U(e.getUTCHours() % 12 || 12, n.length);
  },
  H: function(e, n) {
    return U(e.getUTCHours(), n.length);
  },
  m: function(e, n) {
    return U(e.getUTCMinutes(), n.length);
  },
  s: function(e, n) {
    return U(e.getUTCSeconds(), n.length);
  },
  S: function(e, n) {
    var r = n.length, o = e.getUTCMilliseconds(), a = Math.floor(o * Math.pow(10, r - 3));
    return U(a, n.length);
  }
};
const lt = Hr;
var _t = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, Vr = {
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
    var a = Vn(e, o), i = a > 0 ? a : 1 - a;
    if (n === "YY") {
      var l = i % 100;
      return U(l, 2);
    }
    return n === "Yo" ? r.ordinalNumber(i, {
      unit: "year"
    }) : U(i, n.length);
  },
  R: function(e, n) {
    var r = Hn(e);
    return U(r, n.length);
  },
  u: function(e, n) {
    var r = e.getUTCFullYear();
    return U(r, n.length);
  },
  Q: function(e, n, r) {
    var o = Math.ceil((e.getUTCMonth() + 1) / 3);
    switch (n) {
      case "Q":
        return String(o);
      case "QQ":
        return U(o, 2);
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
        return U(o, 2);
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
        return U(o + 1, 2);
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
    var a = Br(e, o);
    return n === "wo" ? r.ordinalNumber(a, {
      unit: "week"
    }) : U(a, n.length);
  },
  I: function(e, n, r) {
    var o = Yr(e);
    return n === "Io" ? r.ordinalNumber(o, {
      unit: "week"
    }) : U(o, n.length);
  },
  d: function(e, n, r) {
    return n === "do" ? r.ordinalNumber(e.getUTCDate(), {
      unit: "date"
    }) : lt.d(e, n);
  },
  D: function(e, n, r) {
    var o = Lr(e);
    return n === "Do" ? r.ordinalNumber(o, {
      unit: "dayOfYear"
    }) : U(o, n.length);
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
        return U(i, 2);
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
        return U(i, n.length);
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
        return U(a, n.length);
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
    }) : U(o, n.length);
  },
  k: function(e, n, r) {
    var o = e.getUTCHours();
    return o === 0 && (o = 24), n === "ko" ? r.ordinalNumber(o, {
      unit: "hour"
    }) : U(o, n.length);
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
        return yn(i);
      case "XXXX":
      case "XX":
        return gt(i);
      case "XXXXX":
      case "XXX":
      default:
        return gt(i, ":");
    }
  },
  x: function(e, n, r, o) {
    var a = o._originalDate || e, i = a.getTimezoneOffset();
    switch (n) {
      case "x":
        return yn(i);
      case "xxxx":
      case "xx":
        return gt(i);
      case "xxxxx":
      case "xxx":
      default:
        return gt(i, ":");
    }
  },
  O: function(e, n, r, o) {
    var a = o._originalDate || e, i = a.getTimezoneOffset();
    switch (n) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + bn(i, ":");
      case "OOOO":
      default:
        return "GMT" + gt(i, ":");
    }
  },
  z: function(e, n, r, o) {
    var a = o._originalDate || e, i = a.getTimezoneOffset();
    switch (n) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + bn(i, ":");
      case "zzzz":
      default:
        return "GMT" + gt(i, ":");
    }
  },
  t: function(e, n, r, o) {
    var a = o._originalDate || e, i = Math.floor(a.getTime() / 1e3);
    return U(i, n.length);
  },
  T: function(e, n, r, o) {
    var a = o._originalDate || e, i = a.getTime();
    return U(i, n.length);
  }
};
function bn(t, e) {
  var n = t > 0 ? "-" : "+", r = Math.abs(t), o = Math.floor(r / 60), a = r % 60;
  if (a === 0)
    return n + String(o);
  var i = e || "";
  return n + String(o) + i + U(a, 2);
}
function yn(t, e) {
  if (t % 60 === 0) {
    var n = t > 0 ? "-" : "+";
    return n + U(Math.abs(t) / 60, 2);
  }
  return gt(t, e);
}
function gt(t, e) {
  var n = e || "", r = t > 0 ? "-" : "+", o = Math.abs(t), a = U(Math.floor(o / 60), 2), i = U(o % 60, 2);
  return r + a + n + i;
}
const Ir = Vr;
var xn = function(e, n) {
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
}, In = function(e, n) {
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
}, qr = function(e, n) {
  var r = e.match(/(P+)(p+)?/) || [], o = r[1], a = r[2];
  if (!a)
    return xn(e, n);
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
  return i.replace("{{date}}", xn(o, n)).replace("{{time}}", In(a, n));
}, jr = {
  p: In,
  P: qr
};
const $r = jr;
var Xr = ["D", "DD"], Qr = ["YY", "YYYY"];
function Gr(t) {
  return Xr.indexOf(t) !== -1;
}
function Jr(t) {
  return Qr.indexOf(t) !== -1;
}
function _n(t, e, n) {
  if (t === "YYYY")
    throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(e, "`) for formatting years to the input `").concat(n, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (t === "YY")
    throw new RangeError("Use `yy` instead of `YY` (in `".concat(e, "`) for formatting years to the input `").concat(n, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (t === "D")
    throw new RangeError("Use `d` instead of `D` (in `".concat(e, "`) for formatting days of the month to the input `").concat(n, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (t === "DD")
    throw new RangeError("Use `dd` instead of `DD` (in `".concat(e, "`) for formatting days of the month to the input `").concat(n, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
}
var Kr = {
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
}, Zr = function(e, n, r) {
  var o, a = Kr[e];
  return typeof a == "string" ? o = a : n === 1 ? o = a.one : o = a.other.replace("{{count}}", n.toString()), r != null && r.addSuffix ? r.comparison && r.comparison > 0 ? "in " + o : o + " ago" : o;
};
const to = Zr;
function Pe(t) {
  return function() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = e.width ? String(e.width) : t.defaultWidth, r = t.formats[n] || t.formats[t.defaultWidth];
    return r;
  };
}
var eo = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, no = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, ro = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, oo = {
  date: Pe({
    formats: eo,
    defaultWidth: "full"
  }),
  time: Pe({
    formats: no,
    defaultWidth: "full"
  }),
  dateTime: Pe({
    formats: ro,
    defaultWidth: "full"
  })
};
const ao = oo;
var io = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, so = function(e, n, r, o) {
  return io[e];
};
const lo = so;
function Mt(t) {
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
var co = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, uo = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, fo = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
}, po = {
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
}, ho = {
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
}, go = function(e, n) {
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
}, vo = {
  ordinalNumber: go,
  era: Mt({
    values: co,
    defaultWidth: "wide"
  }),
  quarter: Mt({
    values: uo,
    defaultWidth: "wide",
    argumentCallback: function(e) {
      return e - 1;
    }
  }),
  month: Mt({
    values: fo,
    defaultWidth: "wide"
  }),
  day: Mt({
    values: po,
    defaultWidth: "wide"
  }),
  dayPeriod: Mt({
    values: mo,
    defaultWidth: "wide",
    formattingValues: ho,
    defaultFormattingWidth: "wide"
  })
};
const wo = vo;
function Dt(t) {
  return function(e) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = n.width, o = r && t.matchPatterns[r] || t.matchPatterns[t.defaultMatchWidth], a = e.match(o);
    if (!a)
      return null;
    var i = a[0], l = r && t.parsePatterns[r] || t.parsePatterns[t.defaultParseWidth], c = Array.isArray(l) ? yo(l, function(d) {
      return d.test(i);
    }) : bo(l, function(d) {
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
function bo(t, e) {
  for (var n in t)
    if (t.hasOwnProperty(n) && e(t[n]))
      return n;
}
function yo(t, e) {
  for (var n = 0; n < t.length; n++)
    if (e(t[n]))
      return n;
}
function xo(t) {
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
var _o = /^(\d+)(th|st|nd|rd)?/i, Co = /\d+/i, ko = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, To = {
  any: [/^b/i, /^(a|c)/i]
}, Oo = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, Mo = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, Do = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, Po = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
}, So = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, Eo = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, Ao = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, Ro = {
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
}, Wo = {
  ordinalNumber: xo({
    matchPattern: _o,
    parsePattern: Co,
    valueCallback: function(e) {
      return parseInt(e, 10);
    }
  }),
  era: Dt({
    matchPatterns: ko,
    defaultMatchWidth: "wide",
    parsePatterns: To,
    defaultParseWidth: "any"
  }),
  quarter: Dt({
    matchPatterns: Oo,
    defaultMatchWidth: "wide",
    parsePatterns: Mo,
    defaultParseWidth: "any",
    valueCallback: function(e) {
      return e + 1;
    }
  }),
  month: Dt({
    matchPatterns: Do,
    defaultMatchWidth: "wide",
    parsePatterns: Po,
    defaultParseWidth: "any"
  }),
  day: Dt({
    matchPatterns: So,
    defaultMatchWidth: "wide",
    parsePatterns: Eo,
    defaultParseWidth: "any"
  }),
  dayPeriod: Dt({
    matchPatterns: Ao,
    defaultMatchWidth: "any",
    parsePatterns: Ro,
    defaultParseWidth: "any"
  })
};
const Lo = Wo;
var No = {
  code: "en-US",
  formatDistance: to,
  formatLong: ao,
  formatRelative: lo,
  localize: wo,
  match: Lo,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
const qn = No;
var Uo = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, Yo = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, Fo = /^'([^]*?)'?$/, zo = /''/g, Bo = /[a-zA-Z]/;
function Ho(t, e, n) {
  var r, o, a, i, l, c, s, f, d, m, h, g, b, w, v, y, x, D;
  q(2, arguments);
  var O = String(e), F = Nt(), R = (r = (o = n == null ? void 0 : n.locale) !== null && o !== void 0 ? o : F.locale) !== null && r !== void 0 ? r : qn, M = dt((a = (i = (l = (c = n == null ? void 0 : n.firstWeekContainsDate) !== null && c !== void 0 ? c : n == null || (s = n.locale) === null || s === void 0 || (f = s.options) === null || f === void 0 ? void 0 : f.firstWeekContainsDate) !== null && l !== void 0 ? l : F.firstWeekContainsDate) !== null && i !== void 0 ? i : (d = F.locale) === null || d === void 0 || (m = d.options) === null || m === void 0 ? void 0 : m.firstWeekContainsDate) !== null && a !== void 0 ? a : 1);
  if (!(M >= 1 && M <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var P = dt((h = (g = (b = (w = n == null ? void 0 : n.weekStartsOn) !== null && w !== void 0 ? w : n == null || (v = n.locale) === null || v === void 0 || (y = v.options) === null || y === void 0 ? void 0 : y.weekStartsOn) !== null && b !== void 0 ? b : F.weekStartsOn) !== null && g !== void 0 ? g : (x = F.locale) === null || x === void 0 || (D = x.options) === null || D === void 0 ? void 0 : D.weekStartsOn) !== null && h !== void 0 ? h : 0);
  if (!(P >= 0 && P <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  if (!R.localize)
    throw new RangeError("locale must contain localize property");
  if (!R.formatLong)
    throw new RangeError("locale must contain formatLong property");
  var L = $(t);
  if (!Rr(L))
    throw new RangeError("Invalid time value");
  var N = At(L), B = Ae(L, N), _ = {
    firstWeekContainsDate: M,
    weekStartsOn: P,
    locale: R,
    _originalDate: L
  }, I = O.match(Yo).map(function(H) {
    var j = H[0];
    if (j === "p" || j === "P") {
      var J = $r[j];
      return J(H, R.formatLong);
    }
    return H;
  }).join("").match(Uo).map(function(H) {
    if (H === "''")
      return "'";
    var j = H[0];
    if (j === "'")
      return Vo(H);
    var J = Ir[j];
    if (J)
      return !(n != null && n.useAdditionalWeekYearTokens) && Jr(H) && _n(H, e, String(t)), !(n != null && n.useAdditionalDayOfYearTokens) && Gr(H) && _n(H, e, String(t)), J(B, H, R.localize, _);
    if (j.match(Bo))
      throw new RangeError("Format string contains an unescaped latin alphabet character `" + j + "`");
    return H;
  }).join("");
  return I;
}
function Vo(t) {
  var e = t.match(Fo);
  return e ? e[1].replace(zo, "'") : t;
}
function Cn(t, e, n) {
  var r, o, a, i, l, c, s, f, d, m;
  q(2, arguments);
  var h = $(t), g = $(e), b = Nt(), w = (r = (o = n == null ? void 0 : n.locale) !== null && o !== void 0 ? o : b.locale) !== null && r !== void 0 ? r : qn, v = dt((a = (i = (l = (c = n == null ? void 0 : n.weekStartsOn) !== null && c !== void 0 ? c : n == null || (s = n.locale) === null || s === void 0 || (f = s.options) === null || f === void 0 ? void 0 : f.weekStartsOn) !== null && l !== void 0 ? l : b.weekStartsOn) !== null && i !== void 0 ? i : (d = b.locale) === null || d === void 0 || (m = d.options) === null || m === void 0 ? void 0 : m.weekStartsOn) !== null && a !== void 0 ? a : 0);
  if (!w.localize)
    throw new RangeError("locale must contain localize property");
  if (!w.formatLong)
    throw new RangeError("locale must contain formatLong property");
  if (!w.formatRelative)
    throw new RangeError("locale must contain formatRelative property");
  var y = Er(h, g);
  if (isNaN(y))
    throw new RangeError("Invalid time value");
  var x;
  y < -6 ? x = "other" : y < -1 ? x = "lastWeek" : y < 0 ? x = "yesterday" : y < 1 ? x = "today" : y < 2 ? x = "tomorrow" : y < 7 ? x = "nextWeek" : x = "other";
  var D = Ae(h, At(h)), O = Ae(g, At(g)), F = w.formatRelative(x, D, O, {
    locale: w,
    weekStartsOn: v
  });
  return Ho(h, F, {
    locale: w,
    weekStartsOn: v
  });
}
function bt(t) {
  return t.split("-")[0];
}
function ze(t) {
  return t.split("-")[1];
}
function Ut(t) {
  return ["top", "bottom"].includes(bt(t)) ? "x" : "y";
}
function jn(t) {
  return t === "y" ? "height" : "width";
}
function kn(t, e, n) {
  let {
    reference: r,
    floating: o
  } = t;
  const a = r.x + r.width / 2 - o.width / 2, i = r.y + r.height / 2 - o.height / 2, l = Ut(e), c = jn(l), s = r[c] / 2 - o[c] / 2, f = bt(e), d = l === "x";
  let m;
  switch (f) {
    case "top":
      m = {
        x: a,
        y: r.y - o.height
      };
      break;
    case "bottom":
      m = {
        x: a,
        y: r.y + r.height
      };
      break;
    case "right":
      m = {
        x: r.x + r.width,
        y: i
      };
      break;
    case "left":
      m = {
        x: r.x - o.width,
        y: i
      };
      break;
    default:
      m = {
        x: r.x,
        y: r.y
      };
  }
  switch (ze(e)) {
    case "start":
      m[l] -= s * (n && d ? -1 : 1);
      break;
    case "end":
      m[l] += s * (n && d ? -1 : 1);
      break;
  }
  return m;
}
const Io = async (t, e, n) => {
  const {
    placement: r = "bottom",
    strategy: o = "absolute",
    middleware: a = [],
    platform: i
  } = n, l = a.filter(Boolean), c = await (i.isRTL == null ? void 0 : i.isRTL(e));
  if ({}.NODE_ENV !== "production") {
    if (i == null && console.error(["Floating UI: `platform` property was not passed to config. If you", "want to use Floating UI on the web, install @floating-ui/dom", "instead of the /core package. Otherwise, you can create your own", "`platform`: https://floating-ui.com/docs/platform"].join(" ")), l.filter((b) => {
      let {
        name: w
      } = b;
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
  } = kn(s, r, c), m = r, h = {}, g = 0;
  for (let b = 0; b < l.length; b++) {
    const {
      name: w,
      fn: v
    } = l[b], {
      x: y,
      y: x,
      data: D,
      reset: O
    } = await v({
      x: f,
      y: d,
      initialPlacement: r,
      placement: m,
      strategy: o,
      middlewareData: h,
      rects: s,
      platform: i,
      elements: {
        reference: t,
        floating: e
      }
    });
    if (f = y ?? f, d = x ?? d, h = {
      ...h,
      [w]: {
        ...h[w],
        ...D
      }
    }, {}.NODE_ENV !== "production" && g > 50 && console.warn(["Floating UI: The middleware lifecycle appears to be running in an", "infinite loop. This is usually caused by a `reset` continually", "being returned without a break condition."].join(" ")), O && g <= 50) {
      g++, typeof O == "object" && (O.placement && (m = O.placement), O.rects && (s = O.rects === !0 ? await i.getElementRects({
        reference: t,
        floating: e,
        strategy: o
      }) : O.rects), {
        x: f,
        y: d
      } = kn(s, m, c)), b = -1;
      continue;
    }
  }
  return {
    x: f,
    y: d,
    placement: m,
    strategy: o,
    middlewareData: h
  };
};
function qo(t) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...t
  };
}
function $n(t) {
  return typeof t != "number" ? qo(t) : {
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
async function Xn(t, e) {
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
    altBoundary: m = !1,
    padding: h = 0
  } = e, g = $n(h), w = l[m ? d === "floating" ? "reference" : "floating" : d], v = Rt(await a.getClippingRect({
    element: (n = await (a.isElement == null ? void 0 : a.isElement(w))) == null || n ? w : w.contextElement || await (a.getDocumentElement == null ? void 0 : a.getDocumentElement(l.floating)),
    boundary: s,
    rootBoundary: f,
    strategy: c
  })), y = d === "floating" ? {
    ...i.floating,
    x: r,
    y: o
  } : i.reference, x = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(l.floating)), D = await (a.isElement == null ? void 0 : a.isElement(x)) ? await (a.getScale == null ? void 0 : a.getScale(x)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, O = Rt(a.convertOffsetParentRelativeRectToViewportRelativeRect ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({
    rect: y,
    offsetParent: x,
    strategy: c
  }) : y);
  return {
    top: (v.top - O.top + g.top) / D.y,
    bottom: (O.bottom - v.bottom + g.bottom) / D.y,
    left: (v.left - O.left + g.left) / D.x,
    right: (O.right - v.right + g.right) / D.x
  };
}
const Qn = Math.min, Gn = Math.max;
function Tn(t, e, n) {
  return Gn(t, Qn(e, n));
}
const jo = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function ue(t) {
  return t.replace(/left|right|bottom|top/g, (e) => jo[e]);
}
function $o(t, e, n) {
  n === void 0 && (n = !1);
  const r = ze(t), o = Ut(t), a = jn(o);
  let i = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return e.reference[a] > e.floating[a] && (i = ue(i)), {
    main: i,
    cross: ue(i)
  };
}
const Xo = {
  start: "end",
  end: "start"
};
function On(t) {
  return t.replace(/start|end/g, (e) => Xo[e]);
}
function Qo(t) {
  const e = ue(t);
  return [On(t), e, On(e)];
}
const Re = function(t) {
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
        fallbackStrategy: m = "bestFit",
        flipAlignment: h = !0,
        ...g
      } = t, b = bt(r), v = d || (b === i || !h ? [ue(i)] : Qo(i)), y = [i, ...v], x = await Xn(e, g), D = [];
      let O = ((n = o.flip) == null ? void 0 : n.overflows) || [];
      if (s && D.push(x[b]), f) {
        const {
          main: P,
          cross: L
        } = $o(r, a, await (l.isRTL == null ? void 0 : l.isRTL(c.floating)));
        D.push(x[P], x[L]);
      }
      if (O = [...O, {
        placement: r,
        overflows: D
      }], !D.every((P) => P <= 0)) {
        var F, R;
        const P = ((F = (R = o.flip) == null ? void 0 : R.index) != null ? F : 0) + 1, L = y[P];
        if (L)
          return {
            data: {
              index: P,
              overflows: O
            },
            reset: {
              placement: L
            }
          };
        let N = "bottom";
        switch (m) {
          case "bestFit": {
            var M;
            const B = (M = O.map((_) => [_, _.overflows.filter((I) => I > 0).reduce((I, H) => I + H, 0)]).sort((_, I) => _[1] - I[1])[0]) == null ? void 0 : M[0].placement;
            B && (N = B);
            break;
          }
          case "initialPlacement":
            N = i;
            break;
        }
        if (r !== N)
          return {
            reset: {
              placement: N
            }
          };
      }
      return {};
    }
  };
};
async function Go(t, e) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = t, a = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), i = bt(n), l = ze(n), c = Ut(n) === "x", s = ["left", "top"].includes(i) ? -1 : 1, f = a && c ? -1 : 1, d = typeof e == "function" ? e(t) : e;
  let {
    mainAxis: m,
    crossAxis: h,
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
  return l && typeof g == "number" && (h = l === "end" ? g * -1 : g), c ? {
    x: h * f,
    y: m * s
  } : {
    x: m * s,
    y: h * f
  };
}
const We = function(t) {
  return t === void 0 && (t = 0), {
    name: "offset",
    options: t,
    async fn(e) {
      const {
        x: n,
        y: r
      } = e, o = await Go(e, t);
      return {
        x: n + o.x,
        y: r + o.y,
        data: o
      };
    }
  };
};
function Jo(t) {
  return t === "x" ? "y" : "x";
}
const Le = function(t) {
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
              x: v,
              y
            } = w;
            return {
              x: v,
              y
            };
          }
        },
        ...c
      } = t, s = {
        x: n,
        y: r
      }, f = await Xn(e, c), d = Ut(bt(o)), m = Jo(d);
      let h = s[d], g = s[m];
      if (a) {
        const w = d === "y" ? "top" : "left", v = d === "y" ? "bottom" : "right", y = h + f[w], x = h - f[v];
        h = Tn(y, h, x);
      }
      if (i) {
        const w = m === "y" ? "top" : "left", v = m === "y" ? "bottom" : "right", y = g + f[w], x = g - f[v];
        g = Tn(y, g, x);
      }
      const b = l.fn({
        ...e,
        [d]: h,
        [m]: g
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
}, de = function(t) {
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
      } = t, d = Rt(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
        rect: a.reference,
        offsetParent: await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(o.floating)),
        strategy: l
      }) : a.reference), m = (n = await (i.getClientRects == null ? void 0 : i.getClientRects(o.reference))) != null ? n : [], h = $n(c);
      function g() {
        if (m.length === 2 && m[0].left > m[1].right && s != null && f != null) {
          var w;
          return (w = m.find((v) => s > v.left - h.left && s < v.right + h.right && f > v.top - h.top && f < v.bottom + h.bottom)) != null ? w : d;
        }
        if (m.length >= 2) {
          if (Ut(r) === "x") {
            const N = m[0], B = m[m.length - 1], _ = bt(r) === "top", I = N.top, H = B.bottom, j = _ ? N.left : B.left, J = _ ? N.right : B.right, yt = J - j, Ot = H - I;
            return {
              top: I,
              bottom: H,
              left: j,
              right: J,
              width: yt,
              height: Ot,
              x: j,
              y: I
            };
          }
          const v = bt(r) === "left", y = Gn(...m.map((N) => N.right)), x = Qn(...m.map((N) => N.left)), D = m.filter((N) => v ? N.left === x : N.right === y), O = D[0].top, F = D[D.length - 1].bottom, R = x, M = y, P = M - R, L = F - O;
          return {
            top: O,
            bottom: F,
            left: R,
            right: M,
            width: P,
            height: L,
            x: R,
            y: O
          };
        }
        return d;
      }
      const b = await i.getElementRects({
        reference: {
          getBoundingClientRect: g
        },
        floating: o.floating,
        strategy: l
      });
      return a.reference.x !== b.reference.x || a.reference.y !== b.reference.y || a.reference.width !== b.reference.width || a.reference.height !== b.reference.height ? {
        reset: {
          rects: b
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
function ft(t) {
  return Kn(t) ? (t.nodeName || "").toLowerCase() : "";
}
let ne;
function Jn() {
  if (ne)
    return ne;
  const t = navigator.userAgentData;
  return t && Array.isArray(t.brands) ? (ne = t.brands.map((e) => e.brand + "/" + e.version).join(" "), ne) : navigator.userAgent;
}
function it(t) {
  return t instanceof X(t).HTMLElement;
}
function pt(t) {
  return t instanceof X(t).Element;
}
function Kn(t) {
  return t instanceof X(t).Node;
}
function Mn(t) {
  if (typeof ShadowRoot > "u")
    return !1;
  const e = X(t).ShadowRoot;
  return t instanceof e || t instanceof ShadowRoot;
}
function be(t) {
  const {
    overflow: e,
    overflowX: n,
    overflowY: r,
    display: o
  } = Z(t);
  return /auto|scroll|overlay|hidden|clip/.test(e + r + n) && !["inline", "contents"].includes(o);
}
function Ko(t) {
  return ["table", "td", "th"].includes(ft(t));
}
function Be(t) {
  const e = /firefox/i.test(Jn()), n = Z(t), r = n.backdropFilter || n.WebkitBackdropFilter;
  return n.transform !== "none" || n.perspective !== "none" || (r ? r !== "none" : !1) || e && n.willChange === "filter" || e && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective"].some((o) => n.willChange.includes(o)) || ["paint", "layout", "strict", "content"].some(
    (o) => {
      const a = n.contain;
      return a != null ? a.includes(o) : !1;
    }
  );
}
function Zn() {
  return !/^((?!chrome|android).)*safari/i.test(Jn());
}
function He(t) {
  return ["html", "body", "#document"].includes(ft(t));
}
const Dn = Math.min, St = Math.max, fe = Math.round;
function tr(t) {
  const e = Z(t);
  let n = parseFloat(e.width), r = parseFloat(e.height);
  const o = t.offsetWidth, a = t.offsetHeight, i = fe(n) !== o || fe(r) !== a;
  return i && (n = o, r = a), {
    width: n,
    height: r,
    fallback: i
  };
}
function er(t) {
  return pt(t) ? t : t.contextElement;
}
const nr = {
  x: 1,
  y: 1
};
function kt(t) {
  const e = er(t);
  if (!it(e))
    return nr;
  const n = e.getBoundingClientRect(), {
    width: r,
    height: o,
    fallback: a
  } = tr(e);
  let i = (a ? fe(n.width) : n.width) / r, l = (a ? fe(n.height) : n.height) / o;
  return (!i || !Number.isFinite(i)) && (i = 1), (!l || !Number.isFinite(l)) && (l = 1), {
    x: i,
    y: l
  };
}
function Wt(t, e, n, r) {
  var o, a;
  e === void 0 && (e = !1), n === void 0 && (n = !1);
  const i = t.getBoundingClientRect(), l = er(t);
  let c = nr;
  e && (r ? pt(r) && (c = kt(r)) : c = kt(t));
  const s = l ? X(l) : window, f = !Zn() && n;
  let d = (i.left + (f && ((o = s.visualViewport) == null ? void 0 : o.offsetLeft) || 0)) / c.x, m = (i.top + (f && ((a = s.visualViewport) == null ? void 0 : a.offsetTop) || 0)) / c.y, h = i.width / c.x, g = i.height / c.y;
  if (l) {
    const b = X(l), w = r && pt(r) ? X(r) : r;
    let v = b.frameElement;
    for (; v && r && w !== b; ) {
      const y = kt(v), x = v.getBoundingClientRect(), D = getComputedStyle(v);
      x.x += (v.clientLeft + parseFloat(D.paddingLeft)) * y.x, x.y += (v.clientTop + parseFloat(D.paddingTop)) * y.y, d *= y.x, m *= y.y, h *= y.x, g *= y.y, d += x.x, m += x.y, v = X(v).frameElement;
    }
  }
  return {
    width: h,
    height: g,
    top: m,
    right: d + h,
    bottom: m + g,
    left: d,
    x: d,
    y: m
  };
}
function ht(t) {
  return ((Kn(t) ? t.ownerDocument : t.document) || window.document).documentElement;
}
function ye(t) {
  return pt(t) ? {
    scrollLeft: t.scrollLeft,
    scrollTop: t.scrollTop
  } : {
    scrollLeft: t.pageXOffset,
    scrollTop: t.pageYOffset
  };
}
function rr(t) {
  return Wt(ht(t)).left + ye(t).scrollLeft;
}
function Zo(t, e, n) {
  const r = it(e), o = ht(e), a = Wt(t, !0, n === "fixed", e);
  let i = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = {
    x: 0,
    y: 0
  };
  if (r || !r && n !== "fixed")
    if ((ft(e) !== "body" || be(o)) && (i = ye(e)), it(e)) {
      const c = Wt(e, !0);
      l.x = c.x + e.clientLeft, l.y = c.y + e.clientTop;
    } else
      o && (l.x = rr(o));
  return {
    x: a.left + i.scrollLeft - l.x,
    y: a.top + i.scrollTop - l.y,
    width: a.width,
    height: a.height
  };
}
function Lt(t) {
  if (ft(t) === "html")
    return t;
  const e = t.assignedSlot || t.parentNode || (Mn(t) ? t.host : null) || ht(t);
  return Mn(e) ? e.host : e;
}
function Pn(t) {
  return !it(t) || Z(t).position === "fixed" ? null : t.offsetParent;
}
function ta(t) {
  let e = Lt(t);
  for (; it(e) && !He(e); ) {
    if (Be(e))
      return e;
    e = Lt(e);
  }
  return null;
}
function Sn(t) {
  const e = X(t);
  let n = Pn(t);
  for (; n && Ko(n) && Z(n).position === "static"; )
    n = Pn(n);
  return n && (ft(n) === "html" || ft(n) === "body" && Z(n).position === "static" && !Be(n)) ? e : n || ta(t) || e;
}
function ea(t) {
  return tr(t);
}
function na(t) {
  let {
    rect: e,
    offsetParent: n,
    strategy: r
  } = t;
  const o = it(n), a = ht(n);
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
  if ((o || !o && r !== "fixed") && ((ft(n) !== "body" || be(a)) && (i = ye(n)), it(n))) {
    const s = Wt(n);
    l = kt(n), c.x = s.x + n.clientLeft, c.y = s.y + n.clientTop;
  }
  return {
    width: e.width * l.x,
    height: e.height * l.y,
    x: e.x * l.x - i.scrollLeft * l.x + c.x,
    y: e.y * l.y - i.scrollTop * l.y + c.y
  };
}
function ra(t, e) {
  const n = X(t), r = ht(t), o = n.visualViewport;
  let a = r.clientWidth, i = r.clientHeight, l = 0, c = 0;
  if (o) {
    a = o.width, i = o.height;
    const s = Zn();
    (s || !s && e === "fixed") && (l = o.offsetLeft, c = o.offsetTop);
  }
  return {
    width: a,
    height: i,
    x: l,
    y: c
  };
}
function oa(t) {
  var e;
  const n = ht(t), r = ye(t), o = (e = t.ownerDocument) == null ? void 0 : e.body, a = St(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), i = St(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0);
  let l = -r.scrollLeft + rr(t);
  const c = -r.scrollTop;
  return Z(o || n).direction === "rtl" && (l += St(n.clientWidth, o ? o.clientWidth : 0) - a), {
    width: a,
    height: i,
    x: l,
    y: c
  };
}
function or(t) {
  const e = Lt(t);
  return He(e) ? t.ownerDocument.body : it(e) && be(e) ? e : or(e);
}
function ar(t, e) {
  var n;
  e === void 0 && (e = []);
  const r = or(t), o = r === ((n = t.ownerDocument) == null ? void 0 : n.body), a = X(r);
  return o ? e.concat(a, a.visualViewport || [], be(r) ? r : []) : e.concat(r, ar(r));
}
function aa(t, e) {
  const n = Wt(t, !0, e === "fixed"), r = n.top + t.clientTop, o = n.left + t.clientLeft, a = it(t) ? kt(t) : {
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
function En(t, e, n) {
  return e === "viewport" ? Rt(ra(t, n)) : pt(e) ? aa(e, n) : Rt(oa(ht(t)));
}
function ia(t, e) {
  const n = e.get(t);
  if (n)
    return n;
  let r = ar(t).filter((l) => pt(l) && ft(l) !== "body"), o = null;
  const a = Z(t).position === "fixed";
  let i = a ? Lt(t) : t;
  for (; pt(i) && !He(i); ) {
    const l = Z(i), c = Be(i);
    (a ? !c && !o : !c && l.position === "static" && !!o && ["absolute", "fixed"].includes(o.position)) ? r = r.filter((f) => f !== i) : o = l, i = Lt(i);
  }
  return e.set(t, r), r;
}
function sa(t) {
  let {
    element: e,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = t;
  const i = [...n === "clippingAncestors" ? ia(e, this._c) : [].concat(n), r], l = i[0], c = i.reduce((s, f) => {
    const d = En(e, f, o);
    return s.top = St(d.top, s.top), s.right = Dn(d.right, s.right), s.bottom = Dn(d.bottom, s.bottom), s.left = St(d.left, s.left), s;
  }, En(e, l, o));
  return {
    width: c.right - c.left,
    height: c.bottom - c.top,
    x: c.left,
    y: c.top
  };
}
const la = {
  getClippingRect: sa,
  convertOffsetParentRelativeRectToViewportRelativeRect: na,
  isElement: pt,
  getDimensions: ea,
  getOffsetParent: Sn,
  getDocumentElement: ht,
  getScale: kt,
  async getElementRects(t) {
    let {
      reference: e,
      floating: n,
      strategy: r
    } = t;
    const o = this.getOffsetParent || Sn, a = this.getDimensions;
    return {
      reference: Zo(e, await o(n), r),
      floating: {
        x: 0,
        y: 0,
        ...await a(n)
      }
    };
  },
  getClientRects: (t) => Array.from(t.getClientRects()),
  isRTL: (t) => Z(t).direction === "rtl"
}, pe = (t, e, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: la,
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
function An(t, e) {
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
function ca(t) {
  let e;
  function n(a, i) {
    return a[0] ? fa : da;
  }
  let r = n(t), o = r(t);
  return {
    c() {
      e = C("button"), o.c(), u(e, "type", "button"), u(e, "class", "spd-px-3 spd-py-2 spd-transition-colors spd-space-x-1.5 spd-border spd-border-zinc-900 spd-text-zinc-500 spd-rounded-md hover:spd-text-white hover:spd-bg-zinc-900 spd-text-sm spd-flex spd-items-center spd-self-end");
    },
    m(a, i) {
      Y(a, e, i), o.m(e, null);
    },
    p(a, i) {
      r !== (r = n(a)) && (o.d(1), o = r(a), o && (o.c(), o.m(e, null)));
    },
    d(a) {
      a && W(e), o.d();
    }
  };
}
function ua(t) {
  let e, n;
  return {
    c() {
      e = V("svg"), n = V("path"), u(n, "d", "M4.5 12.5C4.5 16.9183 8.08172 20.5 12.5 20.5C16.9183 20.5 20.5 16.9183 20.5 12.5C20.5 8.08172 16.9183 4.5 12.5 4.5"), u(n, "stroke", "#9CA3AF"), u(n, "stroke-width", "1.2"), u(e, "class", "spd-animate-spin spd-w-5 spd-h-5"), u(e, "viewBox", "0 0 25 25"), u(e, "fill", "none"), u(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(r, o) {
      Y(r, e, o), p(e, n);
    },
    p: E,
    d(r) {
      r && W(e);
    }
  };
}
function da(t) {
  let e, n, r, o;
  return {
    c() {
      e = V("svg"), n = V("path"), r = S(), o = C("span"), o.textContent = "Resolve", u(n, "stroke-linecap", "round"), u(n, "stroke-linejoin", "round"), u(n, "stroke-width", "2"), u(n, "d", "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"), u(e, "xmlns", "http://www.w3.org/2000/svg"), u(e, "fill", "none"), u(e, "viewBox", "0 0 24 24"), u(e, "stroke", "currentColor"), u(e, "class", "spd-w-5 spd-h-5");
    },
    m(a, i) {
      Y(a, e, i), p(e, n), Y(a, r, i), Y(a, o, i);
    },
    d(a) {
      a && W(e), a && W(r), a && W(o);
    }
  };
}
function fa(t) {
  let e, n;
  return {
    c() {
      e = V("svg"), n = V("path"), u(n, "fill-rule", "evenodd"), u(n, "d", "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"), u(n, "clip-rule", "evenodd"), u(e, "xmlns", "http://www.w3.org/2000/svg"), u(e, "viewBox", "0 0 20 20"), u(e, "fill", "currentColor"), u(e, "class", "spd-w-5 spd-h-5 spd-text-green-300");
    },
    m(r, o) {
      Y(r, e, o), p(e, n);
    },
    d(r) {
      r && W(e);
    }
  };
}
function pa(t) {
  let e, n, r, o, a, i, l, c, s, f, d, m, h = Cn(new Date(t[5]), new Date()) + "", g, b, w, v, y, x, D, O, F, R, M, P, L, N, B, _, I, H = " ", j, J, yt, Ot, Ie, tt, Yt, qe, lr = " ", je, $e, Ft, zt = t[4].userAgent + "", xe, Xe, et, Bt, Qe, cr = " ", Ge, Je, Ht, Vt = t[4].platform + "", _e, Ke, nt, It, Ze, ur = " ", tn, en, xt, qt = t[4].screenWidth + "", Ce, nn, jt = t[4].screenHeight + "", ke, rn, rt, $t, on, dr = " ", an, sn, Xt, Qt = t[4].devicePixelRatio + "", Te, ln, st, Gt, cn, fr = " ", un, dn, Jt, Kt = t[4].language + "", Oe, Me, fn;
  function pn(k, A) {
    return k[6] ? ua : ca;
  }
  let Zt = pn(t), K = Zt(t);
  return {
    c() {
      e = C("button"), n = V("svg"), r = V("path"), o = V("path"), a = S(), i = C("span"), l = z(t[7]), c = S(), s = C("div"), f = C("div"), d = C("div"), m = C("p"), g = z(h), b = S(), w = C("button"), w.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="spd-w-5 spd-h-5"><path fill-rule="evenodd" d="M2 4.25A2.25 2.25 0 014.25 2h11.5A2.25 2.25 0 0118 4.25v8.5A2.25 2.25 0 0115.75 15h-3.105a3.501 3.501 0 001.1 1.677A.75.75 0 0113.26 18H6.74a.75.75 0 01-.484-1.323A3.501 3.501 0 007.355 15H4.25A2.25 2.25 0 012 12.75v-8.5zm1.5 0a.75.75 0 01.75-.75h11.5a.75.75 0 01.75.75v7.5a.75.75 0 01-.75.75H4.25a.75.75 0 01-.75-.75v-7.5z" clip-rule="evenodd"></path></svg>', v = S(), y = C("button"), y.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="spd-w-5 spd-h-5"><path d="M3 10a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM8.5 10a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM15.5 8.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3z"></path></svg>', x = S(), D = C("div"), O = C("p"), F = z(t[1]), M = S(), K.c(), P = S(), L = C("div"), N = C("dl"), B = C("div"), _ = C("dt"), _.textContent = "Pathname:", I = S(), j = z(H), J = S(), yt = C("dd"), Ot = z(t[2]), Ie = S(), tt = C("div"), Yt = C("dt"), Yt.textContent = "User Agent:", qe = S(), je = z(lr), $e = S(), Ft = C("dd"), xe = z(zt), Xe = S(), et = C("div"), Bt = C("dt"), Bt.textContent = "Platform:", Qe = S(), Ge = z(cr), Je = S(), Ht = C("dd"), _e = z(Vt), Ke = S(), nt = C("div"), It = C("dt"), It.textContent = "Window size:", Ze = S(), tn = z(ur), en = S(), xt = C("dd"), Ce = z(qt), nn = z(" x "), ke = z(jt), rn = S(), rt = C("div"), $t = C("dt"), $t.textContent = "Device pixel ratio:", on = S(), an = z(dr), sn = S(), Xt = C("dd"), Te = z(Qt), ln = S(), st = C("div"), Gt = C("dt"), Gt.textContent = "Language:", cn = S(), un = z(fr), dn = S(), Jt = C("dd"), Oe = z(Kt), u(r, "d", "M22 44C34.1503 44 44 34.1503 44 22C44 9.84974 34.1503 0 22 0H0V22C0 34.1503 9.84974 44 22 44Z"), u(r, "fill", "black"), u(o, "fill-rule", "evenodd"), u(o, "clip-rule", "evenodd"), u(o, "d", "M22 41.25C32.6315 41.25 41.25 32.6315 41.25 22C41.25 11.3685 32.6315 2.75 22 2.75H2.75V22C2.75 32.6315 11.3685 41.25 22 41.25ZM44 22C44 34.1503 34.1503 44 22 44C9.84974 44 0 34.1503 0 22V0H22C34.1503 0 44 9.84974 44 22Z"), u(o, "fill", "white"), u(n, "class", "spd-w-8 spd-h-8"), u(n, "viewBox", "0 0 44 44"), u(n, "fill", "none"), u(n, "xmlns", "http://www.w3.org/2000/svg"), u(i, "class", "spd-absolute spd-left-1/2 spd-top-1/2 -spd-translate-x-1/2 -spd-translate-y-1/2 spd-text-xs spd-text-white"), u(e, "class", "spd-absolute spd-z-[99999] spd-transition-transform spd-origin-top-left spd-ease-out hover:spd-scale-125"), u(e, "type", "button"), T(e, "spd-scale-125", t[10]), te(e, "left", `${t[3].x * 100}%`), te(e, "top", `${t[3].y * 100}%`), u(m, "class", "spd-text-sm spd-text-zinc-500"), u(w, "type", "button"), u(w, "class", "spd-p-1.5 spd-rounded-md spd-transition-colors hover:spd-bg-zinc-900 spd-text-sm spd-flex spd-items-center spd-self-end"), u(w, "data-ignore-clickable", ""), T(w, "spd-text-zinc-500", !t[13]), T(w, "spd-text-white", t[13]), T(w, "spd-bg-zinc-900", t[13]), u(y, "type", "button"), u(y, "class", "spd-p-1.5 spd-rounded-md spd-text-zinc-500 hover:spd-bg-zinc-900 spd-transition-colors spd-text-sm spd-flex spd-items-center spd-self-end"), u(d, "class", "spd-flex spd-items-center spd-space-x-3 spd-self-end"), u(O, "class", R = "spd-text-base " + (t[0] ? "spd-text-zinc-600 spd-line-through" : "spd-text-zinc-200")), u(D, "class", "spd-pt-2 spd-pb-4 spd-pr-8"), u(f, "class", "spd-flex spd-flex-col"), u(s, "class", "spd-flex spd-flex-col spd-transition spd-delay-100 spd-duration-300 spd-ease-out spd-absolute spd-top-0 spd-left-0 spd-w-max spd-z-[999999] spd-shadow-lg spd-border spd-border-zinc-600 spd-bg-black spd-px-6 spd-py-3 spd-rounded-md spd-text-white"), u(s, "data-clickable", ""), T(s, "spd-opacity-0", !t[10]), T(s, "spd-translate-y-2", !t[10]), T(s, "spd-opacity-100", t[10]), T(s, "spd-translate-y-0", t[10]), u(_, "class", "spd-whitespace-nowrap spd-min-w-[120px]"), u(yt, "class", "spd-ml-3 spd-font-bold"), u(B, "class", "spd-flex"), u(Yt, "class", "spd-whitespace-nowrap spd-min-w-[120px]"), u(Ft, "class", "spd-ml-3 spd-font-bold"), u(tt, "class", "spd-flex"), u(Bt, "class", "spd-whitespace-nowrap spd-min-w-[120px]"), u(Ht, "class", "spd-ml-3 spd-font-bold"), u(et, "class", "spd-flex"), u(It, "class", "spd-whitespace-nowrap spd-min-w-[120px]"), u(xt, "class", "spd-ml-3 spd-font-bold"), u(nt, "class", "spd-flex"), u($t, "class", "spd-whitespace-nowrap spd-min-w-[120px]"), u(Xt, "class", "spd-ml-3 spd-font-bold"), u(rt, "class", "spd-flex"), u(Gt, "class", "spd-whitespace-nowrap spd-min-w-[120px]"), u(Jt, "class", "spd-ml-3 spd-font-bold"), u(st, "class", "spd-flex"), u(N, "class", "spd-flex spd-flex-col spd-space-y-3 spd-text-sm spd-text-white"), u(L, "class", "spd-flex spd-max-w-sm spd-flex-col spd-transition spd-delay-200 spd-duration-300 spd-ease-out spd-absolute spd-top-0 spd-left-0 spd-w-max spd-z-[999999] spd-shadow-lg spd-border spd-border-zinc-800 spd-bg-black spd-px-5 spd-py-3 spd-rounded-md spd-text-white"), u(L, "data-clickable", ""), T(L, "spd-opacity-0", !t[13]), T(L, "spd-translate-y-2", !t[13]), T(L, "spd-opacity-100", t[13]), T(L, "spd-translate-y-0", t[13]);
    },
    m(k, A) {
      Y(k, e, A), p(e, n), p(n, r), p(n, o), p(e, a), p(e, i), p(i, l), t[18](e), Y(k, c, A), Y(k, s, A), p(s, f), p(f, d), p(d, m), p(m, g), p(d, b), p(d, w), t[19](w), p(d, v), p(d, y), p(f, x), p(f, D), p(D, O), p(O, F), p(s, M), K.m(s, null), t[20](s), Y(k, P, A), Y(k, L, A), p(L, N), p(N, B), p(B, _), p(B, I), p(B, j), p(B, J), p(B, yt), p(yt, Ot), p(B, Ie), p(N, tt), p(tt, Yt), p(tt, qe), p(tt, je), p(tt, $e), p(tt, Ft), p(Ft, xe), p(tt, Xe), p(N, et), p(et, Bt), p(et, Qe), p(et, Ge), p(et, Je), p(et, Ht), p(Ht, _e), p(et, Ke), p(N, nt), p(nt, It), p(nt, Ze), p(nt, tn), p(nt, en), p(nt, xt), p(xt, Ce), p(xt, nn), p(xt, ke), p(nt, rn), p(N, rt), p(rt, $t), p(rt, on), p(rt, an), p(rt, sn), p(rt, Xt), p(Xt, Te), p(rt, ln), p(N, st), p(st, Gt), p(st, cn), p(st, un), p(st, dn), p(st, Jt), p(Jt, Oe), t[21](L), Me || (fn = [
        ut(e, "click", t[15]),
        hn(An.call(null, e, t[14])),
        ut(w, "click", t[17]),
        hn(An.call(null, w, t[16]))
      ], Me = !0);
    },
    p(k, [A]) {
      A & 128 && Q(l, k[7]), A & 1024 && T(e, "spd-scale-125", k[10]), A & 8 && te(e, "left", `${k[3].x * 100}%`), A & 8 && te(e, "top", `${k[3].y * 100}%`), A & 32 && h !== (h = Cn(new Date(k[5]), new Date()) + "") && Q(g, h), A & 8192 && T(w, "spd-text-zinc-500", !k[13]), A & 8192 && T(w, "spd-text-white", k[13]), A & 8192 && T(w, "spd-bg-zinc-900", k[13]), A & 2 && Q(F, k[1]), A & 1 && R !== (R = "spd-text-base " + (k[0] ? "spd-text-zinc-600 spd-line-through" : "spd-text-zinc-200")) && u(O, "class", R), Zt === (Zt = pn(k)) && K ? K.p(k, A) : (K.d(1), K = Zt(k), K && (K.c(), K.m(s, null))), A & 1024 && T(s, "spd-opacity-0", !k[10]), A & 1024 && T(s, "spd-translate-y-2", !k[10]), A & 1024 && T(s, "spd-opacity-100", k[10]), A & 1024 && T(s, "spd-translate-y-0", k[10]), A & 4 && Q(Ot, k[2]), A & 16 && zt !== (zt = k[4].userAgent + "") && Q(xe, zt), A & 16 && Vt !== (Vt = k[4].platform + "") && Q(_e, Vt), A & 16 && qt !== (qt = k[4].screenWidth + "") && Q(Ce, qt), A & 16 && jt !== (jt = k[4].screenHeight + "") && Q(ke, jt), A & 16 && Qt !== (Qt = k[4].devicePixelRatio + "") && Q(Te, Qt), A & 16 && Kt !== (Kt = k[4].language + "") && Q(Oe, Kt), A & 8192 && T(L, "spd-opacity-0", !k[13]), A & 8192 && T(L, "spd-translate-y-2", !k[13]), A & 8192 && T(L, "spd-opacity-100", k[13]), A & 8192 && T(L, "spd-translate-y-0", k[13]);
    },
    i: E,
    o: E,
    d(k) {
      k && W(e), t[18](null), k && W(c), k && W(s), t[19](null), K.d(), t[20](null), k && W(P), k && W(L), t[21](null), Me = !1, mt(fn);
    }
  };
}
const Rn = 300;
function ma(t, e, n) {
  let r, o, a = !1, i, l, c = !1, { resolved: s = !1 } = e, { text: f = "" } = e, { pathname: d = "" } = e, { position: m = { x: 0, y: 0 } } = e, { metadata: h = {} } = e, { createdAt: g = new Date() } = e, { loading: b = !1 } = e, { number: w = 1 } = e;
  const v = async () => {
    const { x: _, y: I } = await pe(r, o, {
      placement: "right-start",
      middleware: [de(), We(4), Re(), Le({ padding: 8 })]
    });
    Object.assign(o.style, { left: `${_}px`, top: `${I}px` });
  }, y = () => {
    a || (n(9, o.style.display = "", o), n(10, a = !0), v());
  }, x = () => {
    a && (n(10, a = !1), n(13, c = !1), setTimeout(
      () => {
        n(9, o.style.display = "none", o), n(12, l.style.display = "none", l);
      },
      Rn
    ));
  }, D = () => {
    a ? x() : y();
  }, O = async () => {
    if (!i)
      return;
    const { x: _, y: I } = await pe(i, l, {
      placement: "top",
      middleware: [de(), We(20), Re(), Le({ padding: 8 })]
    });
    Object.assign(l.style, { left: `${_}px`, top: `${I}px` });
  }, F = () => {
    c || (n(12, l.style.display = "", l), n(13, c = !0), O());
  }, R = () => {
    c && (n(13, c = !1), setTimeout(
      () => {
        n(12, l.style.display = "none", l);
      },
      Rn
    ));
  }, M = () => {
    c ? R() : F();
  };
  function P(_) {
    ct[_ ? "unshift" : "push"](() => {
      r = _, n(8, r);
    });
  }
  function L(_) {
    ct[_ ? "unshift" : "push"](() => {
      i = _, n(11, i);
    });
  }
  function N(_) {
    ct[_ ? "unshift" : "push"](() => {
      o = _, n(9, o);
    });
  }
  function B(_) {
    ct[_ ? "unshift" : "push"](() => {
      l = _, n(12, l);
    });
  }
  return t.$$set = (_) => {
    "resolved" in _ && n(0, s = _.resolved), "text" in _ && n(1, f = _.text), "pathname" in _ && n(2, d = _.pathname), "position" in _ && n(3, m = _.position), "metadata" in _ && n(4, h = _.metadata), "createdAt" in _ && n(5, g = _.createdAt), "loading" in _ && n(6, b = _.loading), "number" in _ && n(7, w = _.number);
  }, [
    s,
    f,
    d,
    m,
    h,
    g,
    b,
    w,
    r,
    o,
    a,
    i,
    l,
    c,
    x,
    D,
    R,
    M,
    P,
    L,
    N,
    B
  ];
}
class ha extends we {
  constructor(e) {
    super(), ve(this, e, ma, pa, Tt, {
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
const Ct = [];
function ga(t, e) {
  return {
    subscribe: Ve(t, e).subscribe
  };
}
function Ve(t, e = E) {
  let n;
  const r = /* @__PURE__ */ new Set();
  function o(l) {
    if (Tt(t, l) && (t = l, n)) {
      const c = !Ct.length;
      for (const s of r)
        s[1](), Ct.push(s, t);
      if (c) {
        for (let s = 0; s < Ct.length; s += 2)
          Ct[s][0](Ct[s + 1]);
        Ct.length = 0;
      }
    }
  }
  function a(l) {
    o(l(t));
  }
  function i(l, c = E) {
    const s = [l, c];
    return r.add(s), r.size === 1 && (n = e(o) || E), l(t), () => {
      r.delete(s), r.size === 0 && (n(), n = null);
    };
  }
  return { set: o, update: a, subscribe: i };
}
function va(t, e, n) {
  const r = !Array.isArray(t), o = r ? [t] : t, a = e.length < 2;
  return ga(n, (i) => {
    let l = !1;
    const c = [];
    let s = 0, f = E;
    const d = () => {
      if (s)
        return;
      f();
      const h = e(r ? c[0] : c, i);
      a ? i(h) : f = me(h) ? h : E;
    }, m = o.map((h, g) => Fn(h, (b) => {
      c[g] = b, s &= ~(1 << g), l && d();
    }, () => {
      s |= 1 << g;
    }));
    return l = !0, d(), function() {
      mt(m), f();
    };
  });
}
const wt = Ve(!1);
function wa(t) {
  let e;
  return {
    c() {
      e = V("path"), u(e, "fill-rule", "evenodd"), u(e, "d", "M2 10c0-3.967 3.69-7 8-7 4.31 0 8 3.033 8 7s-3.69 7-8 7a9.165 9.165 0 01-1.504-.123 5.976 5.976 0 01-3.935 1.107.75.75 0 01-.584-1.143 3.478 3.478 0 00.522-1.756C2.979 13.825 2 12.025 2 10z"), u(e, "clip-rule", "evenodd");
    },
    m(n, r) {
      Y(n, e, r);
    },
    d(n) {
      n && W(e);
    }
  };
}
function ba(t) {
  let e;
  return {
    c() {
      e = V("path"), u(e, "d", "M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z");
    },
    m(n, r) {
      Y(n, e, r);
    },
    d(n) {
      n && W(e);
    }
  };
}
function ya(t) {
  let e, n, r, o;
  return {
    c() {
      e = C("span"), e.textContent = "Comment", n = S(), r = C("code"), o = z("c"), u(r, "class", ir);
    },
    m(a, i) {
      Y(a, e, i), Y(a, n, i), Y(a, r, i), p(r, o);
    },
    p: E,
    d(a) {
      a && W(e), a && W(n), a && W(r);
    }
  };
}
function xa(t) {
  let e, n, r, o;
  return {
    c() {
      e = C("span"), e.textContent = "Close comments", n = S(), r = C("code"), o = z("esc"), u(r, "class", ir);
    },
    m(a, i) {
      Y(a, e, i), Y(a, n, i), Y(a, r, i), p(r, o);
    },
    p: E,
    d(a) {
      a && W(e), a && W(n), a && W(r);
    }
  };
}
function _a(t) {
  let e, n, r, o, a, i, l;
  function c(g, b) {
    return g[0] ? ba : wa;
  }
  let s = c(t), f = s(t);
  function d(g, b) {
    return g[0] ? xa : ya;
  }
  let m = d(t), h = m(t);
  return {
    c() {
      e = C("button"), n = V("svg"), f.c(), r = S(), o = C("span"), h.c(), u(n, "xmlns", "http://www.w3.org/2000/svg"), u(n, "viewBox", "0 0 20 20"), u(n, "fill", "currentColor"), u(n, "class", "spd-w-5 spd-h-5 spd-mr-2 spd-flex-shrink-0"), u(o, "class", "spd-flex spd-items-center"), u(e, "class", a = "spd-flex spd-items-center spd-fixed spd-bottom-8 spd-left-1/2 spd-bg-black spd-rounded-full -spd-translate-x-1/2 spd-pl-5 spd-pr-6 spd-h-11 !spd-z-[99999] spd-shadow-md spd-border spd-border-zinc-600 spd-font-sans spd-text-base spd-transition-colors focus:spd-ring-2 focus:spd-ring-zinc-900/60 hover:spd-text-white " + (t[0] ? "spd-text-white" : "spd-text-zinc-500")), u(e, "data-ignore-cursor", "");
    },
    m(g, b) {
      Y(g, e, b), p(e, n), f.m(n, null), p(e, r), p(e, o), h.m(o, null), i || (l = ut(e, "click", t[1]), i = !0);
    },
    p(g, [b]) {
      s !== (s = c(g)) && (f.d(1), f = s(g), f && (f.c(), f.m(n, null))), m === (m = d(g)) && h ? h.p(g, b) : (h.d(1), h = m(g), h && (h.c(), h.m(o, null))), b & 1 && a !== (a = "spd-flex spd-items-center spd-fixed spd-bottom-8 spd-left-1/2 spd-bg-black spd-rounded-full -spd-translate-x-1/2 spd-pl-5 spd-pr-6 spd-h-11 !spd-z-[99999] spd-shadow-md spd-border spd-border-zinc-600 spd-font-sans spd-text-base spd-transition-colors focus:spd-ring-2 focus:spd-ring-zinc-900/60 hover:spd-text-white " + (g[0] ? "spd-text-white" : "spd-text-zinc-500")) && u(e, "class", a);
    },
    i: E,
    o: E,
    d(g) {
      g && W(e), f.d(), h.d(), i = !1, l();
    }
  };
}
const ir = "spd-text-xs spd-ml-3 spd-text-zinc-500 spd-rounded spd-p-1 spd-leading-none spd-shadow-sm spd-bg-zinc-900 spd-border spd-border-zinc-700";
function Ca(t, e, n) {
  let r;
  return se(t, wt, (a) => n(0, r = a)), [r, () => {
    wt.update((a) => !a);
  }];
}
class ka extends we {
  constructor(e) {
    super(), ve(this, e, Ca, _a, Tt, {});
  }
}
const sr = Ve([]), Ta = va(sr, (t) => t.length);
function Wn(t) {
  let e, n, r, o, a, i, l = t[6] + 1 + "", c, s, f, d, m, h, g, b, w, v, y, x, D;
  function O(M, P) {
    return M[0] ? Ma : Oa;
  }
  let F = O(t), R = F(t);
  return {
    c() {
      e = C("div"), n = V("svg"), r = V("path"), o = V("path"), a = S(), i = C("span"), c = z(l), s = S(), f = C("form"), d = C("textarea"), m = S(), h = C("div"), g = C("button"), g.textContent = "Cancel", b = S(), w = C("button"), v = C("span"), v.textContent = "Post", y = S(), R.c(), u(r, "d", "M22 44C34.1503 44 44 34.1503 44 22C44 9.84974 34.1503 0 22 0H0V22C0 34.1503 9.84974 44 22 44Z"), u(r, "fill", "black"), u(o, "fill-rule", "evenodd"), u(o, "clip-rule", "evenodd"), u(o, "d", "M22 41.25C32.6315 41.25 41.25 32.6315 41.25 22C41.25 11.3685 32.6315 2.75 22 2.75H2.75V22C2.75 32.6315 11.3685 41.25 22 41.25ZM44 22C44 34.1503 34.1503 44 22 44C9.84974 44 0 34.1503 0 22V0H22C34.1503 0 44 9.84974 44 22Z"), u(o, "fill", "white"), u(n, "class", "spd-w-8 spd-h-8"), u(n, "viewBox", "0 0 44 44"), u(n, "fill", "none"), u(n, "xmlns", "http://www.w3.org/2000/svg"), u(i, "class", "spd-absolute spd-left-1/2 spd-top-1/2 -spd-translate-x-1/2 -spd-translate-y-1/2 spd-text-xs spd-text-white"), u(e, "class", "spd-absolute spd-top-0 spd-left-0 spd-transition !spd-cursor-auto !spd-z-[999999]"), u(e, "data-ignore-cursor", ""), T(e, "spd-opacity-0", !t[4]), T(e, "spd-scale-150", !t[4]), T(e, "spd-opacity-100", t[4]), T(e, "spd-scale-100", t[4]), u(d, "class", "spd-px-5 spd-pt-4 spd-pb-3 spd-rounded-md spd-transition-colors spd-bg-black spd-resize-none spd-appearance-none placeholder:spd-text-zinc-500 focus:spd-outline-none focus:placeholder:spd-text-zinc-700 spd-text-base"), u(d, "placeholder", "Add a comment..."), u(d, "rows", "3"), u(g, "type", "button"), u(g, "class", "spd-px-3 spd-py-2 spd-transition-colors spd-space-x-1.5 spd-border spd-border-zinc-900 spd-text-zinc-500 spd-rounded-md hover:spd-text-white hover:spd-bg-zinc-900 spd-text-sm spd-flex spd-items-center"), u(w, "type", "submit"), w.disabled = t[0], u(w, "class", "spd-px-3 spd-py-2 spd-transition-colors spd-space-x-1.5 spd-border spd-border-zinc-700 spd-text-white spd-rounded-md hover:spd-bg-zinc-900 spd-text-sm spd-flex spd-items-center"), u(h, "class", "spd-flex spd-items-center spd-px-5 spd-py-3 spd-space-x-3 spd-self-end"), u(f, "class", "spd-flex spd-flex-col spd-w-full spd-max-w-xs spd-shadow-lg spd-border spd-border-zinc-600 spd-bg-black spd-rounded-md spd-text-white spd-absolute spd-transition !spd-cursor-auto spd-top-0 spd-left-0 spd-delay-100 spd-duration-300 spd-ease-out !spd-z-[999999]"), u(f, "data-ignore-cursor", ""), T(f, "spd-opacity-0", !t[4]), T(f, "spd-translate-y-2", !t[4]), T(f, "spd-opacity-100", t[4]), T(f, "spd-translate-y-0", t[4]);
    },
    m(M, P) {
      Y(M, e, P), p(e, n), p(n, r), p(n, o), p(e, a), p(e, i), p(i, c), t[10](e), Y(M, s, P), Y(M, f, P), p(f, d), gn(d, t[1]), p(f, m), p(f, h), p(h, g), p(h, b), p(h, w), p(w, v), p(w, y), R.m(w, null), t[12](f), x || (D = [
        ut(d, "input", t[11]),
        ut(g, "click", t[8]),
        ut(f, "submit", gr(t[9]))
      ], x = !0);
    },
    p(M, P) {
      P & 64 && l !== (l = M[6] + 1 + "") && Q(c, l), P & 16 && T(e, "spd-opacity-0", !M[4]), P & 16 && T(e, "spd-scale-150", !M[4]), P & 16 && T(e, "spd-opacity-100", M[4]), P & 16 && T(e, "spd-scale-100", M[4]), P & 2 && gn(d, M[1]), F !== (F = O(M)) && (R.d(1), R = F(M), R && (R.c(), R.m(w, null))), P & 1 && (w.disabled = M[0]), P & 16 && T(f, "spd-opacity-0", !M[4]), P & 16 && T(f, "spd-translate-y-2", !M[4]), P & 16 && T(f, "spd-opacity-100", M[4]), P & 16 && T(f, "spd-translate-y-0", M[4]);
    },
    d(M) {
      M && W(e), t[10](null), M && W(s), M && W(f), R.d(), t[12](null), x = !1, mt(D);
    }
  };
}
function Oa(t) {
  let e, n;
  return {
    c() {
      e = V("svg"), n = V("path"), u(n, "d", "M3.105 2.289a.75.75 0 00-.826.95l1.414 4.925A1.5 1.5 0 005.135 9.25h6.115a.75.75 0 010 1.5H5.135a1.5 1.5 0 00-1.442 1.086l-1.414 4.926a.75.75 0 00.826.95 28.896 28.896 0 0015.293-7.154.75.75 0 000-1.115A28.897 28.897 0 003.105 2.289z"), u(e, "xmlns", "http://www.w3.org/2000/svg"), u(e, "viewBox", "0 0 20 20"), u(e, "fill", "currentColor"), u(e, "class", "spd-w-4 spd-h-4");
    },
    m(r, o) {
      Y(r, e, o), p(e, n);
    },
    d(r) {
      r && W(e);
    }
  };
}
function Ma(t) {
  let e, n;
  return {
    c() {
      e = V("svg"), n = V("path"), u(n, "d", "M4.5 12.5C4.5 16.9183 8.08172 20.5 12.5 20.5C16.9183 20.5 20.5 16.9183 20.5 12.5C20.5 8.08172 16.9183 4.5 12.5 4.5"), u(n, "stroke", "#9CA3AF"), u(n, "stroke-width", "1.2"), u(e, "class", "spd-animate-spin spd-w-5 spd-h-5"), u(e, "viewBox", "0 0 25 25"), u(e, "fill", "none"), u(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(r, o) {
      Y(r, e, o), p(e, n);
    },
    d(r) {
      r && W(e);
    }
  };
}
function Da(t) {
  let e, n, r, o = t[5] && Wn(t);
  return {
    c() {
      o && o.c(), e = zn();
    },
    m(a, i) {
      o && o.m(a, i), Y(a, e, i), n || (r = ut(window, "click", t[7], !0), n = !0);
    },
    p(a, [i]) {
      a[5] ? o ? o.p(a, i) : (o = Wn(a), o.c(), o.m(e.parentNode, e)) : o && (o.d(1), o = null);
    },
    i: E,
    o: E,
    d(a) {
      o && o.d(a), a && W(e), n = !1, r();
    }
  };
}
const Pa = 300;
function Sa(t, e, n) {
  let r, o;
  se(t, wt, (v) => n(5, r = v)), se(t, Ta, (v) => n(6, o = v));
  let a = "", i, l, c = !1, { loading: s = !1 } = e;
  const f = async ({ clientX: v, clientY: y }) => {
    const x = {
      getBoundingClientRect() {
        return {
          width: 0,
          height: 0,
          x: v,
          y,
          top: y,
          left: v,
          right: v,
          bottom: y
        };
      },
      getClientRects() {
        return [];
      }
    }, { x: D, y: O } = await pe(x, l, {
      placement: "right-start",
      middleware: [de()]
    });
    Object.assign(l.style, { left: `${D}px`, top: `${O}px` });
    const { x: F, y: R } = await pe(l, i, {
      placement: "right-start",
      middleware: [de(), We(8), Re(), Le({ padding: 8 })]
    });
    Object.assign(i.style, { left: `${F}px`, top: `${R}px` });
  }, d = (v) => {
    const y = i && i.contains(v.target);
    !r || y || (f(v), c || (n(2, i.style.display = "", i), n(4, c = !0)), v.target.closest("a, button, [role='button']") && v.preventDefault());
  }, m = () => {
    c && (n(4, c = !1), setTimeout(
      () => {
        n(2, i.style.display = "none", i);
      },
      Pa
    ));
  };
  function h(v) {
    br.call(this, t, v);
  }
  function g(v) {
    ct[v ? "unshift" : "push"](() => {
      l = v, n(3, l);
    });
  }
  function b() {
    a = this.value, n(1, a);
  }
  function w(v) {
    ct[v ? "unshift" : "push"](() => {
      i = v, n(2, i);
    });
  }
  return t.$$set = (v) => {
    "loading" in v && n(0, s = v.loading);
  }, [
    s,
    a,
    i,
    l,
    c,
    r,
    o,
    d,
    m,
    h,
    g,
    b,
    w
  ];
}
class Ea extends we {
  constructor(e) {
    super(), ve(this, e, Sa, Da, Tt, { loading: 0 });
  }
}
const { window: Aa } = Tr;
function Ln(t, e, n) {
  const r = t.slice();
  return r[4] = e[n], r;
}
function Ra(t) {
  return {
    c: E,
    m: E,
    p: E,
    i: E,
    o: E,
    d: E
  };
}
function Wa(t) {
  let e, n, r = t[3], o = [];
  for (let i = 0; i < r.length; i += 1)
    o[i] = Nn(Ln(t, r, i));
  const a = (i) => at(o[i], 1, 1, () => {
    o[i] = null;
  });
  return {
    c() {
      for (let i = 0; i < o.length; i += 1)
        o[i].c();
      e = zn();
    },
    m(i, l) {
      for (let c = 0; c < o.length; c += 1)
        o[c].m(i, l);
      Y(i, e, l), n = !0;
    },
    p(i, l) {
      if (l & 2) {
        r = i[3];
        let c;
        for (c = 0; c < r.length; c += 1) {
          const s = Ln(i, r, c);
          o[c] ? (o[c].p(s, l), G(o[c], 1)) : (o[c] = Nn(s), o[c].c(), G(o[c], 1), o[c].m(e.parentNode, e));
        }
        for (Ue(), c = r.length; c < o.length; c += 1)
          a(c);
        Ye();
      }
    },
    i(i) {
      if (!n) {
        for (let l = 0; l < r.length; l += 1)
          G(o[l]);
        n = !0;
      }
    },
    o(i) {
      o = o.filter(Boolean);
      for (let l = 0; l < o.length; l += 1)
        at(o[l]);
      n = !1;
    },
    d(i) {
      hr(o, i), i && W(e);
    }
  };
}
function Nn(t) {
  let e, n;
  return e = new ha({
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
      Fe(e.$$.fragment);
    },
    m(r, o) {
      he(e, r, o), n = !0;
    },
    p: E,
    i(r) {
      n || (G(e.$$.fragment, r), n = !0);
    },
    o(r) {
      at(e.$$.fragment, r), n = !1;
    },
    d(r) {
      ge(e, r);
    }
  };
}
function La(t) {
  return {
    c: E,
    m: E,
    p: E,
    i: E,
    o: E,
    d: E
  };
}
function Un(t) {
  let e, n;
  return e = new Ea({}), {
    c() {
      Fe(e.$$.fragment);
    },
    m(r, o) {
      he(e, r, o), n = !0;
    },
    p: E,
    i(r) {
      n || (G(e.$$.fragment, r), n = !0);
    },
    o(r) {
      at(e.$$.fragment, r), n = !1;
    },
    d(r) {
      ge(e, r);
    }
  };
}
function Na(t) {
  let e, n = t[0], r, o, a, i, l, c = {
    ctx: t,
    current: null,
    token: null,
    hasCatch: !1,
    pending: La,
    then: Wa,
    catch: Ra,
    value: 3,
    blocks: [, , ,]
  };
  Cr(t[1](), c);
  let s = Un();
  return o = new ka({}), {
    c() {
      c.block.c(), e = S(), s.c(), r = S(), Fe(o.$$.fragment);
    },
    m(f, d) {
      c.block.m(f, c.anchor = d), c.mount = () => e.parentNode, c.anchor = e, Y(f, e, d), s.m(f, d), Y(f, r, d), he(o, f, d), a = !0, i || (l = ut(Aa, "keydown", t[2]), i = !0);
    },
    p(f, [d]) {
      t = f, kr(c, t, d), d & 1 && Tt(n, n = t[0]) ? (Ue(), at(s, 1, 1, E), Ye(), s = Un(), s.c(), G(s, 1), s.m(r.parentNode, r)) : s.p(t, d);
    },
    i(f) {
      a || (G(c.block), G(s), G(o.$$.fragment, f), a = !0);
    },
    o(f) {
      for (let d = 0; d < 3; d += 1) {
        const m = c.blocks[d];
        at(m);
      }
      at(s), at(o.$$.fragment, f), a = !1;
    },
    d(f) {
      c.block.d(f), c.token = null, c = null, f && W(e), s.d(f), f && W(r), ge(o, f), i = !1, l();
    }
  };
}
function Ua(t, e, n) {
  let r;
  se(t, wt, (i) => n(0, r = i));
  const o = async () => {
    const l = document.currentScript.getAttribute("src").split("?id=")[1];
    try {
      const c = await fetch(`${Mr.BASE_URL}/api/comments?projectId=${l}&pathname=${window.location.pathname}`), s = await c.json();
      if (console.log(s), c.ok && s)
        return sr.set(s), s;
    } catch (c) {
      throw console.log(c), new Error("Oops, couldn't fetch comments from database.");
    }
  }, a = (i) => {
    i.keyCode === 67 && !r && wt.set(!0), i.keyCode === 27 && r && wt.set(!1);
  };
  return wt.subscribe((i) => {
    i ? document.body.classList.add("spd-cursor") : document.body.classList.remove("spd-cursor");
  }), wr(() => {
    document.body.style.position = "relative";
  }), [r, o, a];
}
class Ya extends we {
  constructor(e) {
    super(), ve(this, e, Ua, Na, Tt, {});
  }
}
const Fa = (t) => {
  const e = document.head, n = document.createElement("link");
  n.rel = "stylesheet", n.href = t, e.appendChild(n);
}, za = () => {
  const t = document.createElement("div");
  t.setAttribute("id", "speedback-app"), document.body.appendChild(t);
}, Ba = () => {
  new Ya({
    target: document.getElementById("speedback-app")
  });
}, Ha = async () => {
  za(), Ba(), Fa("/style.css");
};
Ha();
