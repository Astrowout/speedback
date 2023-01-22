function w() {
}
function rt(n) {
  return n && typeof n == "object" && typeof n.then == "function";
}
function Be(n) {
  return n();
}
function Pe() {
  return /* @__PURE__ */ Object.create(null);
}
function ue(n) {
  n.forEach(Be);
}
function He(n) {
  return typeof n == "function";
}
function be(n, e) {
  return n != n ? e == e : n !== e || n && typeof n == "object" || typeof n == "function";
}
function at(n) {
  return Object.keys(n).length === 0;
}
function ot(n, ...e) {
  if (n == null)
    return w;
  const t = n.subscribe(...e);
  return t.unsubscribe ? () => t.unsubscribe() : t;
}
function Ie(n, e, t) {
  n.$$.on_destroy.push(ot(e, t));
}
function v(n, e) {
  n.appendChild(e);
}
function C(n, e, t) {
  n.insertBefore(e, t || null);
}
function _(n) {
  n.parentNode && n.parentNode.removeChild(n);
}
function it(n, e) {
  for (let t = 0; t < n.length; t += 1)
    n[t] && n[t].d(e);
}
function T(n) {
  return document.createElement(n);
}
function z(n) {
  return document.createElementNS("http://www.w3.org/2000/svg", n);
}
function k(n) {
  return document.createTextNode(n);
}
function F() {
  return k(" ");
}
function Qe() {
  return k("");
}
function Xe(n, e, t, r) {
  return n.addEventListener(e, t, r), () => n.removeEventListener(e, t, r);
}
function lt(n) {
  return function(e) {
    return e.preventDefault(), n.call(this, e);
  };
}
function c(n, e, t) {
  t == null ? n.removeAttribute(e) : n.getAttribute(e) !== t && n.setAttribute(e, t);
}
function ut(n) {
  return Array.from(n.childNodes);
}
function ne(n, e) {
  e = "" + e, n.wholeText !== e && (n.data = e);
}
function $e(n, e, t) {
  n.classList[t ? "add" : "remove"](e);
}
let ie;
function q(n) {
  ie = n;
}
function st() {
  if (!ie)
    throw new Error("Function called outside component initialization");
  return ie;
}
const oe = [], Ee = [], me = [], We = [], ct = Promise.resolve();
let ke = !1;
function dt() {
  ke || (ke = !0, ct.then(Oe));
}
function Te(n) {
  me.push(n);
}
const _e = /* @__PURE__ */ new Set();
let fe = 0;
function Oe() {
  const n = ie;
  do {
    for (; fe < oe.length; ) {
      const e = oe[fe];
      fe++, q(e), ft(e.$$);
    }
    for (q(null), oe.length = 0, fe = 0; Ee.length; )
      Ee.pop()();
    for (let e = 0; e < me.length; e += 1) {
      const t = me[e];
      _e.has(t) || (_e.add(t), t());
    }
    me.length = 0;
  } while (oe.length);
  for (; We.length; )
    We.pop()();
  ke = !1, _e.clear(), q(n);
}
function ft(n) {
  if (n.fragment !== null) {
    n.update(), ue(n.before_update);
    const e = n.dirty;
    n.dirty = [-1], n.fragment && n.fragment.p(n.ctx, e), n.after_update.forEach(Te);
  }
}
const he = /* @__PURE__ */ new Set();
let V;
function je() {
  V = {
    r: 0,
    c: [],
    p: V
  };
}
function Ge() {
  V.r || ue(V.c), V = V.p;
}
function R(n, e) {
  n && n.i && (he.delete(n), n.i(e));
}
function J(n, e, t, r) {
  if (n && n.o) {
    if (he.has(n))
      return;
    he.add(n), V.c.push(() => {
      he.delete(n), r && (t && n.d(1), r());
    }), n.o(e);
  } else
    r && r();
}
function mt(n, e) {
  const t = e.token = {};
  function r(a, o, i, s) {
    if (e.token !== t)
      return;
    e.resolved = s;
    let l = e.ctx;
    i !== void 0 && (l = l.slice(), l[i] = s);
    const u = a && (e.current = a)(l);
    let f = !1;
    e.block && (e.blocks ? e.blocks.forEach((d, g) => {
      g !== o && d && (je(), J(d, 1, 1, () => {
        e.blocks[g] === d && (e.blocks[g] = null);
      }), Ge());
    }) : e.block.d(1), u.c(), R(u, 1), u.m(e.mount(), e.anchor), f = !0), e.block = u, e.blocks && (e.blocks[o] = u), f && Oe();
  }
  if (rt(n)) {
    const a = st();
    if (n.then((o) => {
      q(a), r(e.then, 1, e.value, o), q(null);
    }, (o) => {
      if (q(a), r(e.catch, 2, e.error, o), q(null), !e.hasCatch)
        throw o;
    }), e.current !== e.pending)
      return r(e.pending, 0), !0;
  } else {
    if (e.current !== e.then)
      return r(e.then, 1, e.value, n), !0;
    e.resolved = n;
  }
}
function ht(n, e, t) {
  const r = e.slice(), { resolved: a } = n;
  n.current === n.then && (r[n.value] = a), n.current === n.catch && (r[n.error] = a), n.block.p(r, t);
}
const vt = typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : global;
function Ve(n) {
  n && n.c();
}
function De(n, e, t, r) {
  const { fragment: a, after_update: o } = n.$$;
  a && a.m(e, t), r || Te(() => {
    const i = n.$$.on_mount.map(Be).filter(He);
    n.$$.on_destroy ? n.$$.on_destroy.push(...i) : ue(i), n.$$.on_mount = [];
  }), o.forEach(Te);
}
function Me(n, e) {
  const t = n.$$;
  t.fragment !== null && (ue(t.on_destroy), t.fragment && t.fragment.d(e), t.on_destroy = t.fragment = null, t.ctx = []);
}
function gt(n, e) {
  n.$$.dirty[0] === -1 && (oe.push(n), dt(), n.$$.dirty.fill(0)), n.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function Se(n, e, t, r, a, o, i, s = [-1]) {
  const l = ie;
  q(n);
  const u = n.$$ = {
    fragment: null,
    ctx: [],
    props: o,
    update: w,
    not_equal: a,
    bound: Pe(),
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (l ? l.$$.context : [])),
    callbacks: Pe(),
    dirty: s,
    skip_bound: !1,
    root: e.target || l.$$.root
  };
  i && i(u.root);
  let f = !1;
  if (u.ctx = t ? t(n, e.props || {}, (d, g, ...m) => {
    const h = m.length ? m[0] : g;
    return u.ctx && a(u.ctx[d], u.ctx[d] = h) && (!u.skip_bound && u.bound[d] && u.bound[d](h), f && gt(n, d)), g;
  }) : [], u.update(), f = !0, ue(u.before_update), u.fragment = r ? r(u.ctx) : !1, e.target) {
    if (e.hydrate) {
      const d = ut(e.target);
      u.fragment && u.fragment.l(d), d.forEach(_);
    } else
      u.fragment && u.fragment.c();
    e.intro && R(n.$$.fragment), De(n, e.target, e.anchor, e.customElement), Oe();
  }
  q(l);
}
class xe {
  $destroy() {
    Me(this, 1), this.$destroy = w;
  }
  $on(e, t) {
    if (!He(t))
      return w;
    const r = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return r.push(t), () => {
      const a = r.indexOf(t);
      a !== -1 && r.splice(a, 1);
    };
  }
  $set(e) {
    this.$$set && !at(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const pt = {
  BASE_URL: "http://localhost:3000"
};
function j(n) {
  if (n === null || n === !0 || n === !1)
    return NaN;
  var e = Number(n);
  return isNaN(e) ? e : e < 0 ? Math.ceil(e) : Math.floor(e);
}
function D(n, e) {
  if (e.length < n)
    throw new TypeError(n + " argument" + (n > 1 ? "s" : "") + " required, but only " + e.length + " present");
}
function ve(n) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? ve = function(t) {
    return typeof t;
  } : ve = function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ve(n);
}
function W(n) {
  D(1, arguments);
  var e = Object.prototype.toString.call(n);
  return n instanceof Date || ve(n) === "object" && e === "[object Date]" ? new Date(n.getTime()) : typeof n == "number" || e === "[object Number]" ? new Date(n) : ((typeof n == "string" || e === "[object String]") && typeof console < "u" && (console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"), console.warn(new Error().stack)), new Date(NaN));
}
function wt(n, e) {
  D(2, arguments);
  var t = W(n).getTime(), r = j(e);
  return new Date(t + r);
}
var bt = {};
function se() {
  return bt;
}
function le(n) {
  var e = new Date(Date.UTC(n.getFullYear(), n.getMonth(), n.getDate(), n.getHours(), n.getMinutes(), n.getSeconds(), n.getMilliseconds()));
  return e.setUTCFullYear(n.getFullYear()), n.getTime() - e.getTime();
}
function Ue(n) {
  D(1, arguments);
  var e = W(n);
  return e.setHours(0, 0, 0, 0), e;
}
var _t = 864e5;
function yt(n, e) {
  D(2, arguments);
  var t = Ue(n), r = Ue(e), a = t.getTime() - le(t), o = r.getTime() - le(r);
  return Math.round((a - o) / _t);
}
function ge(n) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? ge = function(t) {
    return typeof t;
  } : ge = function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ge(n);
}
function kt(n) {
  return D(1, arguments), n instanceof Date || ge(n) === "object" && Object.prototype.toString.call(n) === "[object Date]";
}
function Tt(n) {
  if (D(1, arguments), !kt(n) && typeof n != "number")
    return !1;
  var e = W(n);
  return !isNaN(Number(e));
}
function Ce(n, e) {
  D(2, arguments);
  var t = j(e);
  return wt(n, -t);
}
var Ct = 864e5;
function Ot(n) {
  D(1, arguments);
  var e = W(n), t = e.getTime();
  e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
  var r = e.getTime(), a = t - r;
  return Math.floor(a / Ct) + 1;
}
function pe(n) {
  D(1, arguments);
  var e = 1, t = W(n), r = t.getUTCDay(), a = (r < e ? 7 : 0) + r - e;
  return t.setUTCDate(t.getUTCDate() - a), t.setUTCHours(0, 0, 0, 0), t;
}
function Je(n) {
  D(1, arguments);
  var e = W(n), t = e.getUTCFullYear(), r = new Date(0);
  r.setUTCFullYear(t + 1, 0, 4), r.setUTCHours(0, 0, 0, 0);
  var a = pe(r), o = new Date(0);
  o.setUTCFullYear(t, 0, 4), o.setUTCHours(0, 0, 0, 0);
  var i = pe(o);
  return e.getTime() >= a.getTime() ? t + 1 : e.getTime() >= i.getTime() ? t : t - 1;
}
function Dt(n) {
  D(1, arguments);
  var e = Je(n), t = new Date(0);
  t.setUTCFullYear(e, 0, 4), t.setUTCHours(0, 0, 0, 0);
  var r = pe(t);
  return r;
}
var Mt = 6048e5;
function St(n) {
  D(1, arguments);
  var e = W(n), t = pe(e).getTime() - Dt(e).getTime();
  return Math.round(t / Mt) + 1;
}
function we(n, e) {
  var t, r, a, o, i, s, l, u;
  D(1, arguments);
  var f = se(), d = j((t = (r = (a = (o = e == null ? void 0 : e.weekStartsOn) !== null && o !== void 0 ? o : e == null || (i = e.locale) === null || i === void 0 || (s = i.options) === null || s === void 0 ? void 0 : s.weekStartsOn) !== null && a !== void 0 ? a : f.weekStartsOn) !== null && r !== void 0 ? r : (l = f.locale) === null || l === void 0 || (u = l.options) === null || u === void 0 ? void 0 : u.weekStartsOn) !== null && t !== void 0 ? t : 0);
  if (!(d >= 0 && d <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var g = W(n), m = g.getUTCDay(), h = (m < d ? 7 : 0) + m - d;
  return g.setUTCDate(g.getUTCDate() - h), g.setUTCHours(0, 0, 0, 0), g;
}
function Ke(n, e) {
  var t, r, a, o, i, s, l, u;
  D(1, arguments);
  var f = W(n), d = f.getUTCFullYear(), g = se(), m = j((t = (r = (a = (o = e == null ? void 0 : e.firstWeekContainsDate) !== null && o !== void 0 ? o : e == null || (i = e.locale) === null || i === void 0 || (s = i.options) === null || s === void 0 ? void 0 : s.firstWeekContainsDate) !== null && a !== void 0 ? a : g.firstWeekContainsDate) !== null && r !== void 0 ? r : (l = g.locale) === null || l === void 0 || (u = l.options) === null || u === void 0 ? void 0 : u.firstWeekContainsDate) !== null && t !== void 0 ? t : 1);
  if (!(m >= 1 && m <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var h = new Date(0);
  h.setUTCFullYear(d + 1, 0, m), h.setUTCHours(0, 0, 0, 0);
  var b = we(h, e), y = new Date(0);
  y.setUTCFullYear(d, 0, m), y.setUTCHours(0, 0, 0, 0);
  var U = we(y, e);
  return f.getTime() >= b.getTime() ? d + 1 : f.getTime() >= U.getTime() ? d : d - 1;
}
function xt(n, e) {
  var t, r, a, o, i, s, l, u;
  D(1, arguments);
  var f = se(), d = j((t = (r = (a = (o = e == null ? void 0 : e.firstWeekContainsDate) !== null && o !== void 0 ? o : e == null || (i = e.locale) === null || i === void 0 || (s = i.options) === null || s === void 0 ? void 0 : s.firstWeekContainsDate) !== null && a !== void 0 ? a : f.firstWeekContainsDate) !== null && r !== void 0 ? r : (l = f.locale) === null || l === void 0 || (u = l.options) === null || u === void 0 ? void 0 : u.firstWeekContainsDate) !== null && t !== void 0 ? t : 1), g = Ke(n, e), m = new Date(0);
  m.setUTCFullYear(g, 0, d), m.setUTCHours(0, 0, 0, 0);
  var h = we(m, e);
  return h;
}
var Pt = 6048e5;
function $t(n, e) {
  D(1, arguments);
  var t = W(n), r = we(t, e).getTime() - xt(t, e).getTime();
  return Math.round(r / Pt) + 1;
}
function p(n, e) {
  for (var t = n < 0 ? "-" : "", r = Math.abs(n).toString(); r.length < e; )
    r = "0" + r;
  return t + r;
}
var Et = {
  y: function(e, t) {
    var r = e.getUTCFullYear(), a = r > 0 ? r : 1 - r;
    return p(t === "yy" ? a % 100 : a, t.length);
  },
  M: function(e, t) {
    var r = e.getUTCMonth();
    return t === "M" ? String(r + 1) : p(r + 1, 2);
  },
  d: function(e, t) {
    return p(e.getUTCDate(), t.length);
  },
  a: function(e, t) {
    var r = e.getUTCHours() / 12 >= 1 ? "pm" : "am";
    switch (t) {
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
  h: function(e, t) {
    return p(e.getUTCHours() % 12 || 12, t.length);
  },
  H: function(e, t) {
    return p(e.getUTCHours(), t.length);
  },
  m: function(e, t) {
    return p(e.getUTCMinutes(), t.length);
  },
  s: function(e, t) {
    return p(e.getUTCSeconds(), t.length);
  },
  S: function(e, t) {
    var r = t.length, a = e.getUTCMilliseconds(), o = Math.floor(a * Math.pow(10, r - 3));
    return p(o, t.length);
  }
};
const Q = Et;
var ee = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, Wt = {
  G: function(e, t, r) {
    var a = e.getUTCFullYear() > 0 ? 1 : 0;
    switch (t) {
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
  y: function(e, t, r) {
    if (t === "yo") {
      var a = e.getUTCFullYear(), o = a > 0 ? a : 1 - a;
      return r.ordinalNumber(o, {
        unit: "year"
      });
    }
    return Q.y(e, t);
  },
  Y: function(e, t, r, a) {
    var o = Ke(e, a), i = o > 0 ? o : 1 - o;
    if (t === "YY") {
      var s = i % 100;
      return p(s, 2);
    }
    return t === "Yo" ? r.ordinalNumber(i, {
      unit: "year"
    }) : p(i, t.length);
  },
  R: function(e, t) {
    var r = Je(e);
    return p(r, t.length);
  },
  u: function(e, t) {
    var r = e.getUTCFullYear();
    return p(r, t.length);
  },
  Q: function(e, t, r) {
    var a = Math.ceil((e.getUTCMonth() + 1) / 3);
    switch (t) {
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
  q: function(e, t, r) {
    var a = Math.ceil((e.getUTCMonth() + 1) / 3);
    switch (t) {
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
  M: function(e, t, r) {
    var a = e.getUTCMonth();
    switch (t) {
      case "M":
      case "MM":
        return Q.M(e, t);
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
  L: function(e, t, r) {
    var a = e.getUTCMonth();
    switch (t) {
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
  w: function(e, t, r, a) {
    var o = $t(e, a);
    return t === "wo" ? r.ordinalNumber(o, {
      unit: "week"
    }) : p(o, t.length);
  },
  I: function(e, t, r) {
    var a = St(e);
    return t === "Io" ? r.ordinalNumber(a, {
      unit: "week"
    }) : p(a, t.length);
  },
  d: function(e, t, r) {
    return t === "do" ? r.ordinalNumber(e.getUTCDate(), {
      unit: "date"
    }) : Q.d(e, t);
  },
  D: function(e, t, r) {
    var a = Ot(e);
    return t === "Do" ? r.ordinalNumber(a, {
      unit: "dayOfYear"
    }) : p(a, t.length);
  },
  E: function(e, t, r) {
    var a = e.getUTCDay();
    switch (t) {
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
  e: function(e, t, r, a) {
    var o = e.getUTCDay(), i = (o - a.weekStartsOn + 8) % 7 || 7;
    switch (t) {
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
  c: function(e, t, r, a) {
    var o = e.getUTCDay(), i = (o - a.weekStartsOn + 8) % 7 || 7;
    switch (t) {
      case "c":
        return String(i);
      case "cc":
        return p(i, t.length);
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
  i: function(e, t, r) {
    var a = e.getUTCDay(), o = a === 0 ? 7 : a;
    switch (t) {
      case "i":
        return String(o);
      case "ii":
        return p(o, t.length);
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
  a: function(e, t, r) {
    var a = e.getUTCHours(), o = a / 12 >= 1 ? "pm" : "am";
    switch (t) {
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
  b: function(e, t, r) {
    var a = e.getUTCHours(), o;
    switch (a === 12 ? o = ee.noon : a === 0 ? o = ee.midnight : o = a / 12 >= 1 ? "pm" : "am", t) {
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
  B: function(e, t, r) {
    var a = e.getUTCHours(), o;
    switch (a >= 17 ? o = ee.evening : a >= 12 ? o = ee.afternoon : a >= 4 ? o = ee.morning : o = ee.night, t) {
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
  h: function(e, t, r) {
    if (t === "ho") {
      var a = e.getUTCHours() % 12;
      return a === 0 && (a = 12), r.ordinalNumber(a, {
        unit: "hour"
      });
    }
    return Q.h(e, t);
  },
  H: function(e, t, r) {
    return t === "Ho" ? r.ordinalNumber(e.getUTCHours(), {
      unit: "hour"
    }) : Q.H(e, t);
  },
  K: function(e, t, r) {
    var a = e.getUTCHours() % 12;
    return t === "Ko" ? r.ordinalNumber(a, {
      unit: "hour"
    }) : p(a, t.length);
  },
  k: function(e, t, r) {
    var a = e.getUTCHours();
    return a === 0 && (a = 24), t === "ko" ? r.ordinalNumber(a, {
      unit: "hour"
    }) : p(a, t.length);
  },
  m: function(e, t, r) {
    return t === "mo" ? r.ordinalNumber(e.getUTCMinutes(), {
      unit: "minute"
    }) : Q.m(e, t);
  },
  s: function(e, t, r) {
    return t === "so" ? r.ordinalNumber(e.getUTCSeconds(), {
      unit: "second"
    }) : Q.s(e, t);
  },
  S: function(e, t) {
    return Q.S(e, t);
  },
  X: function(e, t, r, a) {
    var o = a._originalDate || e, i = o.getTimezoneOffset();
    if (i === 0)
      return "Z";
    switch (t) {
      case "X":
        return Ne(i);
      case "XXXX":
      case "XX":
        return G(i);
      case "XXXXX":
      case "XXX":
      default:
        return G(i, ":");
    }
  },
  x: function(e, t, r, a) {
    var o = a._originalDate || e, i = o.getTimezoneOffset();
    switch (t) {
      case "x":
        return Ne(i);
      case "xxxx":
      case "xx":
        return G(i);
      case "xxxxx":
      case "xxx":
      default:
        return G(i, ":");
    }
  },
  O: function(e, t, r, a) {
    var o = a._originalDate || e, i = o.getTimezoneOffset();
    switch (t) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + Ye(i, ":");
      case "OOOO":
      default:
        return "GMT" + G(i, ":");
    }
  },
  z: function(e, t, r, a) {
    var o = a._originalDate || e, i = o.getTimezoneOffset();
    switch (t) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + Ye(i, ":");
      case "zzzz":
      default:
        return "GMT" + G(i, ":");
    }
  },
  t: function(e, t, r, a) {
    var o = a._originalDate || e, i = Math.floor(o.getTime() / 1e3);
    return p(i, t.length);
  },
  T: function(e, t, r, a) {
    var o = a._originalDate || e, i = o.getTime();
    return p(i, t.length);
  }
};
function Ye(n, e) {
  var t = n > 0 ? "-" : "+", r = Math.abs(n), a = Math.floor(r / 60), o = r % 60;
  if (o === 0)
    return t + String(a);
  var i = e || "";
  return t + String(a) + i + p(o, 2);
}
function Ne(n, e) {
  if (n % 60 === 0) {
    var t = n > 0 ? "-" : "+";
    return t + p(Math.abs(n) / 60, 2);
  }
  return G(n, e);
}
function G(n, e) {
  var t = e || "", r = n > 0 ? "-" : "+", a = Math.abs(n), o = p(Math.floor(a / 60), 2), i = p(a % 60, 2);
  return r + o + t + i;
}
const Ut = Wt;
var Le = function(e, t) {
  switch (e) {
    case "P":
      return t.date({
        width: "short"
      });
    case "PP":
      return t.date({
        width: "medium"
      });
    case "PPP":
      return t.date({
        width: "long"
      });
    case "PPPP":
    default:
      return t.date({
        width: "full"
      });
  }
}, Ze = function(e, t) {
  switch (e) {
    case "p":
      return t.time({
        width: "short"
      });
    case "pp":
      return t.time({
        width: "medium"
      });
    case "ppp":
      return t.time({
        width: "long"
      });
    case "pppp":
    default:
      return t.time({
        width: "full"
      });
  }
}, Yt = function(e, t) {
  var r = e.match(/(P+)(p+)?/) || [], a = r[1], o = r[2];
  if (!o)
    return Le(e, t);
  var i;
  switch (a) {
    case "P":
      i = t.dateTime({
        width: "short"
      });
      break;
    case "PP":
      i = t.dateTime({
        width: "medium"
      });
      break;
    case "PPP":
      i = t.dateTime({
        width: "long"
      });
      break;
    case "PPPP":
    default:
      i = t.dateTime({
        width: "full"
      });
      break;
  }
  return i.replace("{{date}}", Le(a, t)).replace("{{time}}", Ze(o, t));
}, Nt = {
  p: Ze,
  P: Yt
};
const Lt = Nt;
var At = ["D", "DD"], Ft = ["YY", "YYYY"];
function qt(n) {
  return At.indexOf(n) !== -1;
}
function Rt(n) {
  return Ft.indexOf(n) !== -1;
}
function Ae(n, e, t) {
  if (n === "YYYY")
    throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(e, "`) for formatting years to the input `").concat(t, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (n === "YY")
    throw new RangeError("Use `yy` instead of `YY` (in `".concat(e, "`) for formatting years to the input `").concat(t, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (n === "D")
    throw new RangeError("Use `d` instead of `D` (in `".concat(e, "`) for formatting days of the month to the input `").concat(t, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (n === "DD")
    throw new RangeError("Use `dd` instead of `DD` (in `".concat(e, "`) for formatting days of the month to the input `").concat(t, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
}
var zt = {
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
}, Bt = function(e, t, r) {
  var a, o = zt[e];
  return typeof o == "string" ? a = o : t === 1 ? a = o.one : a = o.other.replace("{{count}}", t.toString()), r != null && r.addSuffix ? r.comparison && r.comparison > 0 ? "in " + a : a + " ago" : a;
};
const Ht = Bt;
function ye(n) {
  return function() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = e.width ? String(e.width) : n.defaultWidth, r = n.formats[t] || n.formats[n.defaultWidth];
    return r;
  };
}
var It = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, Qt = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, Xt = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, jt = {
  date: ye({
    formats: It,
    defaultWidth: "full"
  }),
  time: ye({
    formats: Qt,
    defaultWidth: "full"
  }),
  dateTime: ye({
    formats: Xt,
    defaultWidth: "full"
  })
};
const Gt = jt;
var Vt = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, Jt = function(e, t, r, a) {
  return Vt[e];
};
const Kt = Jt;
function re(n) {
  return function(e, t) {
    var r = t != null && t.context ? String(t.context) : "standalone", a;
    if (r === "formatting" && n.formattingValues) {
      var o = n.defaultFormattingWidth || n.defaultWidth, i = t != null && t.width ? String(t.width) : o;
      a = n.formattingValues[i] || n.formattingValues[o];
    } else {
      var s = n.defaultWidth, l = t != null && t.width ? String(t.width) : n.defaultWidth;
      a = n.values[l] || n.values[s];
    }
    var u = n.argumentCallback ? n.argumentCallback(e) : e;
    return a[u];
  };
}
var Zt = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, en = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, tn = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
}, nn = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
}, rn = {
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
}, an = {
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
}, on = function(e, t) {
  var r = Number(e), a = r % 100;
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
}, ln = {
  ordinalNumber: on,
  era: re({
    values: Zt,
    defaultWidth: "wide"
  }),
  quarter: re({
    values: en,
    defaultWidth: "wide",
    argumentCallback: function(e) {
      return e - 1;
    }
  }),
  month: re({
    values: tn,
    defaultWidth: "wide"
  }),
  day: re({
    values: nn,
    defaultWidth: "wide"
  }),
  dayPeriod: re({
    values: rn,
    defaultWidth: "wide",
    formattingValues: an,
    defaultFormattingWidth: "wide"
  })
};
const un = ln;
function ae(n) {
  return function(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = t.width, a = r && n.matchPatterns[r] || n.matchPatterns[n.defaultMatchWidth], o = e.match(a);
    if (!o)
      return null;
    var i = o[0], s = r && n.parsePatterns[r] || n.parsePatterns[n.defaultParseWidth], l = Array.isArray(s) ? cn(s, function(d) {
      return d.test(i);
    }) : sn(s, function(d) {
      return d.test(i);
    }), u;
    u = n.valueCallback ? n.valueCallback(l) : l, u = t.valueCallback ? t.valueCallback(u) : u;
    var f = e.slice(i.length);
    return {
      value: u,
      rest: f
    };
  };
}
function sn(n, e) {
  for (var t in n)
    if (n.hasOwnProperty(t) && e(n[t]))
      return t;
}
function cn(n, e) {
  for (var t = 0; t < n.length; t++)
    if (e(n[t]))
      return t;
}
function dn(n) {
  return function(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = e.match(n.matchPattern);
    if (!r)
      return null;
    var a = r[0], o = e.match(n.parsePattern);
    if (!o)
      return null;
    var i = n.valueCallback ? n.valueCallback(o[0]) : o[0];
    i = t.valueCallback ? t.valueCallback(i) : i;
    var s = e.slice(a.length);
    return {
      value: i,
      rest: s
    };
  };
}
var fn = /^(\d+)(th|st|nd|rd)?/i, mn = /\d+/i, hn = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, vn = {
  any: [/^b/i, /^(a|c)/i]
}, gn = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, pn = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, wn = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, bn = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
}, _n = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, yn = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, kn = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, Tn = {
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
}, Cn = {
  ordinalNumber: dn({
    matchPattern: fn,
    parsePattern: mn,
    valueCallback: function(e) {
      return parseInt(e, 10);
    }
  }),
  era: ae({
    matchPatterns: hn,
    defaultMatchWidth: "wide",
    parsePatterns: vn,
    defaultParseWidth: "any"
  }),
  quarter: ae({
    matchPatterns: gn,
    defaultMatchWidth: "wide",
    parsePatterns: pn,
    defaultParseWidth: "any",
    valueCallback: function(e) {
      return e + 1;
    }
  }),
  month: ae({
    matchPatterns: wn,
    defaultMatchWidth: "wide",
    parsePatterns: bn,
    defaultParseWidth: "any"
  }),
  day: ae({
    matchPatterns: _n,
    defaultMatchWidth: "wide",
    parsePatterns: yn,
    defaultParseWidth: "any"
  }),
  dayPeriod: ae({
    matchPatterns: kn,
    defaultMatchWidth: "any",
    parsePatterns: Tn,
    defaultParseWidth: "any"
  })
};
const On = Cn;
var Dn = {
  code: "en-US",
  formatDistance: Ht,
  formatLong: Gt,
  formatRelative: Kt,
  localize: un,
  match: On,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
const et = Dn;
var Mn = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, Sn = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, xn = /^'([^]*?)'?$/, Pn = /''/g, $n = /[a-zA-Z]/;
function En(n, e, t) {
  var r, a, o, i, s, l, u, f, d, g, m, h, b, y, U, M, S, B;
  D(2, arguments);
  var A = String(e), N = se(), L = (r = (a = t == null ? void 0 : t.locale) !== null && a !== void 0 ? a : N.locale) !== null && r !== void 0 ? r : et, K = j((o = (i = (s = (l = t == null ? void 0 : t.firstWeekContainsDate) !== null && l !== void 0 ? l : t == null || (u = t.locale) === null || u === void 0 || (f = u.options) === null || f === void 0 ? void 0 : f.firstWeekContainsDate) !== null && s !== void 0 ? s : N.firstWeekContainsDate) !== null && i !== void 0 ? i : (d = N.locale) === null || d === void 0 || (g = d.options) === null || g === void 0 ? void 0 : g.firstWeekContainsDate) !== null && o !== void 0 ? o : 1);
  if (!(K >= 1 && K <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var H = j((m = (h = (b = (y = t == null ? void 0 : t.weekStartsOn) !== null && y !== void 0 ? y : t == null || (U = t.locale) === null || U === void 0 || (M = U.options) === null || M === void 0 ? void 0 : M.weekStartsOn) !== null && b !== void 0 ? b : N.weekStartsOn) !== null && h !== void 0 ? h : (S = N.locale) === null || S === void 0 || (B = S.options) === null || B === void 0 ? void 0 : B.weekStartsOn) !== null && m !== void 0 ? m : 0);
  if (!(H >= 0 && H <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  if (!L.localize)
    throw new RangeError("locale must contain localize property");
  if (!L.formatLong)
    throw new RangeError("locale must contain formatLong property");
  var I = W(n);
  if (!Tt(I))
    throw new RangeError("Invalid time value");
  var ce = le(I), Z = Ce(I, ce), de = {
    firstWeekContainsDate: K,
    weekStartsOn: H,
    locale: L,
    _originalDate: I
  }, x = A.match(Sn).map(function(P) {
    var E = P[0];
    if (E === "p" || E === "P") {
      var $ = Lt[E];
      return $(P, L.formatLong);
    }
    return P;
  }).join("").match(Mn).map(function(P) {
    if (P === "''")
      return "'";
    var E = P[0];
    if (E === "'")
      return Wn(P);
    var $ = Ut[E];
    if ($)
      return !(t != null && t.useAdditionalWeekYearTokens) && Rt(P) && Ae(P, e, String(n)), !(t != null && t.useAdditionalDayOfYearTokens) && qt(P) && Ae(P, e, String(n)), $(Z, P, L.localize, de);
    if (E.match($n))
      throw new RangeError("Format string contains an unescaped latin alphabet character `" + E + "`");
    return P;
  }).join("");
  return x;
}
function Wn(n) {
  var e = n.match(xn);
  return e ? e[1].replace(Pn, "'") : n;
}
function Fe(n, e, t) {
  var r, a, o, i, s, l, u, f, d, g;
  D(2, arguments);
  var m = W(n), h = W(e), b = se(), y = (r = (a = t == null ? void 0 : t.locale) !== null && a !== void 0 ? a : b.locale) !== null && r !== void 0 ? r : et, U = j((o = (i = (s = (l = t == null ? void 0 : t.weekStartsOn) !== null && l !== void 0 ? l : t == null || (u = t.locale) === null || u === void 0 || (f = u.options) === null || f === void 0 ? void 0 : f.weekStartsOn) !== null && s !== void 0 ? s : b.weekStartsOn) !== null && i !== void 0 ? i : (d = b.locale) === null || d === void 0 || (g = d.options) === null || g === void 0 ? void 0 : g.weekStartsOn) !== null && o !== void 0 ? o : 0);
  if (!y.localize)
    throw new RangeError("locale must contain localize property");
  if (!y.formatLong)
    throw new RangeError("locale must contain formatLong property");
  if (!y.formatRelative)
    throw new RangeError("locale must contain formatRelative property");
  var M = yt(m, h);
  if (isNaN(M))
    throw new RangeError("Invalid time value");
  var S;
  M < -6 ? S = "other" : M < -1 ? S = "lastWeek" : M < 0 ? S = "yesterday" : M < 1 ? S = "today" : M < 2 ? S = "tomorrow" : M < 7 ? S = "nextWeek" : S = "other";
  var B = Ce(m, le(m)), A = Ce(h, le(h)), N = y.formatRelative(S, B, A, {
    locale: y,
    weekStartsOn: U
  });
  return En(m, N, {
    locale: y,
    weekStartsOn: U
  });
}
function qe(n) {
  let e, t, r, a, o = n[2].viewport.x + "", i, s, l = n[2].viewport.y + "", u;
  return {
    c() {
      e = T("li"), t = k(`Viewport:
						`), r = T("b"), a = k("$"), i = k(o), s = k(" x $"), u = k(l), c(e, "class", "gthr-tooltip__metainfo-line");
    },
    m(f, d) {
      C(f, e, d), v(e, t), v(e, r), v(r, a), v(r, i), v(r, s), v(r, u);
    },
    p(f, d) {
      d & 4 && o !== (o = f[2].viewport.x + "") && ne(i, o), d & 4 && l !== (l = f[2].viewport.y + "") && ne(u, l);
    },
    d(f) {
      f && _(e);
    }
  };
}
function Un(n) {
  let e;
  function t(o, i) {
    return o[0] ? Ln : Nn;
  }
  let r = t(n), a = r(n);
  return {
    c() {
      e = T("button"), a.c(), c(e, "type", "button"), c(e, "id", "gthr-action-resolve");
    },
    m(o, i) {
      C(o, e, i), a.m(e, null);
    },
    p(o, i) {
      r !== (r = t(o)) && (a.d(1), a = r(o), a && (a.c(), a.m(e, null)));
    },
    d(o) {
      o && _(e), a.d();
    }
  };
}
function Yn(n) {
  let e, t;
  return {
    c() {
      e = z("svg"), t = z("path"), c(t, "d", "M4.5 12.5C4.5 16.9183 8.08172 20.5 12.5 20.5C16.9183 20.5 20.5 16.9183 20.5 12.5C20.5 8.08172 16.9183 4.5 12.5 4.5"), c(t, "stroke", "#9CA3AF"), c(t, "stroke-width", "1.2"), c(e, "width", "28"), c(e, "class", "gthr-tooltip__spinner"), c(e, "viewBox", "0 0 25 25"), c(e, "fill", "none"), c(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(r, a) {
      C(r, e, a), v(e, t);
    },
    p: w,
    d(r) {
      r && _(e);
    }
  };
}
function Nn(n) {
  let e, t;
  return {
    c() {
      e = z("svg"), t = z("path"), c(t, "stroke-linecap", "round"), c(t, "stroke-linejoin", "round"), c(t, "stroke-width", "2"), c(t, "d", "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"), c(e, "xmlns", "http://www.w3.org/2000/svg"), c(e, "width", "24"), c(e, "height", "24"), c(e, "fill", "none"), c(e, "viewBox", "0 0 24 24"), c(e, "stroke", "#9CA3AF");
    },
    m(r, a) {
      C(r, e, a), v(e, t);
    },
    d(r) {
      r && _(e);
    }
  };
}
function Ln(n) {
  let e, t;
  return {
    c() {
      e = z("svg"), t = z("path"), c(t, "fill-rule", "evenodd"), c(t, "d", "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"), c(t, "clip-rule", "evenodd"), c(e, "xmlns", "http://www.w3.org/2000/svg"), c(e, "width", "24"), c(e, "height", "24"), c(e, "viewBox", "0 0 20 20"), c(e, "fill", "#10B981");
    },
    m(r, a) {
      C(r, e, a), v(e, t);
    },
    d(r) {
      r && _(e);
    }
  };
}
function An(n) {
  let e, t, r, a, o, i, s, l, u, f = Fe(new Date(n[3]), new Date()) + "", d, g, m, h, b, y, U, M = n[2].platform.type + "", S, B, A, N, L, K, H = n[2].browser.name + "", I, ce, Z, de, x = n[2].viewport && qe(n);
  function P(O, Y) {
    return O[4] ? Yn : Un;
  }
  let E = P(n), $ = E(n);
  return {
    c() {
      e = T("div"), t = T("div"), r = T("p"), a = k("$"), o = k(n[1]), s = F(), l = T("p"), u = k("$"), d = k(f), g = F(), m = T("ul"), h = T("li"), b = k(`Platform:
					`), y = T("b"), U = k("$"), S = k(M), B = F(), A = T("li"), N = k(`Browser:
					`), L = T("b"), K = k("$"), I = k(H), ce = F(), x && x.c(), de = F(), $.c(), c(r, "class", i = "gthr-tooltip__comment $" + (n[0] ? "gthr-tooltip__comment--resolved" : "")), c(l, "class", "gthr-tooltip__date"), c(h, "class", "gthr-tooltip__metainfo-line"), c(A, "class", "gthr-tooltip__metainfo-line"), c(m, "class", "gthr-tooltip__metainfo"), c(t, "class", Z = "gthr-tooltip__info $" + (n[0] ? "gthr-tooltip__info--resolved" : "")), c(e, "class", "spd-tooltip");
    },
    m(O, Y) {
      C(O, e, Y), v(e, t), v(t, r), v(r, a), v(r, o), v(t, s), v(t, l), v(l, u), v(l, d), v(t, g), v(t, m), v(m, h), v(h, b), v(h, y), v(y, U), v(y, S), v(m, B), v(m, A), v(A, N), v(A, L), v(L, K), v(L, I), v(m, ce), x && x.m(m, null), v(e, de), $.m(e, null);
    },
    p(O, [Y]) {
      Y & 2 && ne(o, O[1]), Y & 1 && i !== (i = "gthr-tooltip__comment $" + (O[0] ? "gthr-tooltip__comment--resolved" : "")) && c(r, "class", i), Y & 8 && f !== (f = Fe(new Date(O[3]), new Date()) + "") && ne(d, f), Y & 4 && M !== (M = O[2].platform.type + "") && ne(S, M), Y & 4 && H !== (H = O[2].browser.name + "") && ne(I, H), O[2].viewport ? x ? x.p(O, Y) : (x = qe(O), x.c(), x.m(m, null)) : x && (x.d(1), x = null), Y & 1 && Z !== (Z = "gthr-tooltip__info $" + (O[0] ? "gthr-tooltip__info--resolved" : "")) && c(t, "class", Z), E === (E = P(O)) && $ ? $.p(O, Y) : ($.d(1), $ = E(O), $ && ($.c(), $.m(e, null)));
    },
    i: w,
    o: w,
    d(O) {
      O && _(e), x && x.d(), $.d();
    }
  };
}
function Fn(n, e, t) {
  let { resolved: r = !1 } = e, { text: a = "" } = e, { metadata: o = {} } = e, { createdAt: i = new Date() } = e, { loading: s = !1 } = e;
  return n.$$set = (l) => {
    "resolved" in l && t(0, r = l.resolved), "text" in l && t(1, a = l.text), "metadata" in l && t(2, o = l.metadata), "createdAt" in l && t(3, i = l.createdAt), "loading" in l && t(4, s = l.loading);
  }, [r, a, o, i, s];
}
class qn extends xe {
  constructor(e) {
    super(), Se(this, e, Fn, An, be, {
      resolved: 0,
      text: 1,
      metadata: 2,
      createdAt: 3,
      loading: 4
    });
  }
}
const te = [];
function tt(n, e = w) {
  let t;
  const r = /* @__PURE__ */ new Set();
  function a(s) {
    if (be(n, s) && (n = s, t)) {
      const l = !te.length;
      for (const u of r)
        u[1](), te.push(u, n);
      if (l) {
        for (let u = 0; u < te.length; u += 2)
          te[u][0](te[u + 1]);
        te.length = 0;
      }
    }
  }
  function o(s) {
    a(s(n));
  }
  function i(s, l = w) {
    const u = [s, l];
    return r.add(u), r.size === 1 && (t = e(a) || w), s(n), () => {
      r.delete(u), r.size === 0 && (t(), t = null);
    };
  }
  return { set: a, update: o, subscribe: i };
}
const X = tt(!1);
function Rn(n) {
  let e;
  return {
    c() {
      e = z("path"), c(e, "fill-rule", "evenodd"), c(e, "d", "M2 10c0-3.967 3.69-7 8-7 4.31 0 8 3.033 8 7s-3.69 7-8 7a9.165 9.165 0 01-1.504-.123 5.976 5.976 0 01-3.935 1.107.75.75 0 01-.584-1.143 3.478 3.478 0 00.522-1.756C2.979 13.825 2 12.025 2 10z"), c(e, "clip-rule", "evenodd");
    },
    m(t, r) {
      C(t, e, r);
    },
    d(t) {
      t && _(e);
    }
  };
}
function zn(n) {
  let e;
  return {
    c() {
      e = z("path"), c(e, "d", "M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z");
    },
    m(t, r) {
      C(t, e, r);
    },
    d(t) {
      t && _(e);
    }
  };
}
function Bn(n) {
  let e, t, r, a;
  return {
    c() {
      e = T("span"), e.textContent = "Comment", t = F(), r = T("code"), a = k("c"), c(r, "class", nt);
    },
    m(o, i) {
      C(o, e, i), C(o, t, i), C(o, r, i), v(r, a);
    },
    p: w,
    d(o) {
      o && _(e), o && _(t), o && _(r);
    }
  };
}
function Hn(n) {
  let e, t, r, a;
  return {
    c() {
      e = T("span"), e.textContent = "Close comments", t = F(), r = T("code"), a = k("esc"), c(r, "class", nt);
    },
    m(o, i) {
      C(o, e, i), C(o, t, i), C(o, r, i), v(r, a);
    },
    p: w,
    d(o) {
      o && _(e), o && _(t), o && _(r);
    }
  };
}
function In(n) {
  let e, t, r, a, o, i, s;
  function l(h, b) {
    return h[0] ? zn : Rn;
  }
  let u = l(n), f = u(n);
  function d(h, b) {
    return h[0] ? Hn : Bn;
  }
  let g = d(n), m = g(n);
  return {
    c() {
      e = T("button"), t = z("svg"), f.c(), r = F(), a = T("span"), m.c(), c(t, "xmlns", "http://www.w3.org/2000/svg"), c(t, "viewBox", "0 0 20 20"), c(t, "fill", "currentColor"), c(t, "class", "spd-w-5 spd-h-5 spd-mr-2 spd-flex-shrink-0"), c(a, "class", "spd-flex spd-items-center"), c(e, "class", o = "spd-flex spd-items-center spd-fixed spd-bottom-8 spd-left-1/2 spd-bg-black spd-rounded-full -spd-translate-x-1/2 spd-pl-5 spd-pr-6 spd-h-11 !spd-z-[99999] spd-shadow-md spd-border spd-border-zinc-600 spd-font-sans spd-text-base spd-transition-colors " + (n[0] ? "spd-text-zinc-400 hover:spd-text-zinc-50 spd-outline spd-outline-2 spd-outline-zinc-600" : "spd-text-zinc-500 hover:spd-text-zinc-50")), $e(e, "spd-toggle", n[0]);
    },
    m(h, b) {
      C(h, e, b), v(e, t), f.m(t, null), v(e, r), v(e, a), m.m(a, null), i || (s = Xe(e, "click", n[1]), i = !0);
    },
    p(h, [b]) {
      u !== (u = l(h)) && (f.d(1), f = u(h), f && (f.c(), f.m(t, null))), g === (g = d(h)) && m ? m.p(h, b) : (m.d(1), m = g(h), m && (m.c(), m.m(a, null))), b & 1 && o !== (o = "spd-flex spd-items-center spd-fixed spd-bottom-8 spd-left-1/2 spd-bg-black spd-rounded-full -spd-translate-x-1/2 spd-pl-5 spd-pr-6 spd-h-11 !spd-z-[99999] spd-shadow-md spd-border spd-border-zinc-600 spd-font-sans spd-text-base spd-transition-colors " + (h[0] ? "spd-text-zinc-400 hover:spd-text-zinc-50 spd-outline spd-outline-2 spd-outline-zinc-600" : "spd-text-zinc-500 hover:spd-text-zinc-50")) && c(e, "class", o), b & 1 && $e(e, "spd-toggle", h[0]);
    },
    i: w,
    o: w,
    d(h) {
      h && _(e), f.d(), m.d(), i = !1, s();
    }
  };
}
const nt = "spd-text-xs spd-ml-3 spd-text-zinc-500 spd-rounded spd-p-1 spd-leading-none spd-shadow-sm spd-bg-zinc-900 spd-border spd-border-zinc-700";
function Qn(n, e, t) {
  let r;
  return Ie(n, X, (o) => t(0, r = o)), [r, () => {
    X.update((o) => !o);
  }];
}
class Xn extends xe {
  constructor(e) {
    super(), Se(this, e, Qn, In, be, {});
  }
}
const jn = tt([]), { window: Gn } = vt;
function Re(n, e, t) {
  const r = n.slice();
  return r[4] = e[t], r;
}
function Vn(n) {
  return {
    c: w,
    m: w,
    p: w,
    i: w,
    o: w,
    d: w
  };
}
function Jn(n) {
  let e, t, r = X && Kn(n);
  return {
    c() {
      r && r.c(), e = Qe();
    },
    m(a, o) {
      r && r.m(a, o), C(a, e, o), t = !0;
    },
    p(a, o) {
      X && r.p(a, o);
    },
    i(a) {
      t || (R(r), t = !0);
    },
    o(a) {
      J(r), t = !1;
    },
    d(a) {
      r && r.d(a), a && _(e);
    }
  };
}
function Kn(n) {
  let e, t, r = n[3], a = [];
  for (let i = 0; i < r.length; i += 1)
    a[i] = ze(Re(n, r, i));
  const o = (i) => J(a[i], 1, 1, () => {
    a[i] = null;
  });
  return {
    c() {
      e = T("div");
      for (let i = 0; i < a.length; i += 1)
        a[i].c();
    },
    m(i, s) {
      C(i, e, s);
      for (let l = 0; l < a.length; l += 1)
        a[l].m(e, null);
      t = !0;
    },
    p(i, s) {
      if (s & 1) {
        r = i[3];
        let l;
        for (l = 0; l < r.length; l += 1) {
          const u = Re(i, r, l);
          a[l] ? (a[l].p(u, s), R(a[l], 1)) : (a[l] = ze(u), a[l].c(), R(a[l], 1), a[l].m(e, null));
        }
        for (je(), l = r.length; l < a.length; l += 1)
          o(l);
        Ge();
      }
    },
    i(i) {
      if (!t) {
        for (let s = 0; s < r.length; s += 1)
          R(a[s]);
        t = !0;
      }
    },
    o(i) {
      a = a.filter(Boolean);
      for (let s = 0; s < a.length; s += 1)
        J(a[s]);
      t = !1;
    },
    d(i) {
      i && _(e), it(a, i);
    }
  };
}
function ze(n) {
  let e, t;
  return e = new qn({
    props: {
      resolved: n[4].resolved,
      text: n[4].text,
      metadata: n[4].metadata,
      createdAt: n[4].createdAt
    }
  }), {
    c() {
      Ve(e.$$.fragment);
    },
    m(r, a) {
      De(e, r, a), t = !0;
    },
    p: w,
    i(r) {
      t || (R(e.$$.fragment, r), t = !0);
    },
    o(r) {
      J(e.$$.fragment, r), t = !1;
    },
    d(r) {
      Me(e, r);
    }
  };
}
function Zn(n) {
  return {
    c: w,
    m: w,
    p: w,
    i: w,
    o: w,
    d: w
  };
}
function er(n) {
  let e, t, r, a, o, i;
  e = new Xn({});
  let s = {
    ctx: n,
    current: null,
    token: null,
    hasCatch: !1,
    pending: Zn,
    then: Jn,
    catch: Vn,
    value: 3,
    blocks: [, , ,]
  };
  return mt(n[0](), s), {
    c() {
      Ve(e.$$.fragment), t = F(), r = Qe(), s.block.c();
    },
    m(l, u) {
      De(e, l, u), C(l, t, u), C(l, r, u), s.block.m(l, s.anchor = u), s.mount = () => r.parentNode, s.anchor = r, a = !0, o || (i = Xe(Gn, "keydown", lt(n[1])), o = !0);
    },
    p(l, [u]) {
      n = l, ht(s, n, u);
    },
    i(l) {
      a || (R(e.$$.fragment, l), R(s.block), a = !0);
    },
    o(l) {
      J(e.$$.fragment, l);
      for (let u = 0; u < 3; u += 1) {
        const f = s.blocks[u];
        J(f);
      }
      a = !1;
    },
    d(l) {
      Me(e, l), l && _(t), l && _(r), s.block.d(l), s.token = null, s = null, o = !1, i();
    }
  };
}
function tr(n, e, t) {
  let r;
  Ie(n, X, (i) => t(2, r = i));
  const a = async () => {
    const s = document.currentScript.getAttribute("src").split("?id=")[1];
    try {
      const l = await fetch(`${pt.BASE_URL}/api/comments?projectId=${s}&pathname=${window.location.pathname}`), u = await l.json();
      if (console.log(u), l.ok && u)
        return jn.set(u), u;
    } catch (l) {
      throw console.log(l), new Error("Oops, couldn't fetch comments from database.");
    }
  }, o = (i) => {
    i.keyCode === 67 && !r && X.set(!0), i.keyCode === 27 && r && X.set(!1);
  };
  return X.subscribe((i) => {
    i ? document.body.classList.add("spd-cursor") : document.body.classList.remove("spd-cursor");
  }), [a, o];
}
class nr extends xe {
  constructor(e) {
    super(), Se(this, e, tr, er, be, {});
  }
}
const rr = (n) => {
  const e = document.head, t = document.createElement("link");
  t.rel = "stylesheet", t.href = n, e.appendChild(t);
}, ar = () => {
  const n = document.createElement("div");
  n.setAttribute("id", "speedback-app"), document.body.appendChild(n);
}, or = () => {
  new nr({
    target: document.getElementById("speedback-app")
  });
}, ir = async () => {
  ar(), or(), rr("/style.css");
};
ir();
