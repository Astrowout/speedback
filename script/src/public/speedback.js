function A() {
}
function mr(t) {
  return t && typeof t == "object" && typeof t.then == "function";
}
function Fn(t) {
  return t();
}
function hn() {
  return /* @__PURE__ */ Object.create(null);
}
function mt(t) {
  t.forEach(Fn);
}
function me(t) {
  return typeof t == "function";
}
function Tt(t, e) {
  return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function";
}
function hr(t) {
  return Object.keys(t).length === 0;
}
function zn(t, ...e) {
  if (t == null)
    return A;
  const n = t.subscribe(...e);
  return n.unsubscribe ? () => n.unsubscribe() : n;
}
function se(t, e, n) {
  t.$$.on_destroy.push(zn(e, n));
}
function gn(t) {
  return t && me(t.destroy) ? t.destroy : A;
}
function p(t, e) {
  t.appendChild(e);
}
function U(t, e, n) {
  t.insertBefore(e, n || null);
}
function L(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function gr(t, e) {
  for (let n = 0; n < t.length; n += 1)
    t[n] && t[n].d(e);
}
function C(t) {
  return document.createElement(t);
}
function V(t) {
  return document.createElementNS("http://www.w3.org/2000/svg", t);
}
function F(t) {
  return document.createTextNode(t);
}
function E() {
  return F(" ");
}
function Bn() {
  return F("");
}
function ut(t, e, n, r) {
  return t.addEventListener(e, n, r), () => t.removeEventListener(e, n, r);
}
function vr(t) {
  return function(e) {
    return e.preventDefault(), t.call(this, e);
  };
}
function d(t, e, n) {
  n == null ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n);
}
function wr(t) {
  return Array.from(t.childNodes);
}
function Q(t, e) {
  e = "" + e, t.wholeText !== e && (t.data = e);
}
function vn(t, e) {
  t.value = e ?? "";
}
function te(t, e, n, r) {
  n === null ? t.style.removeProperty(e) : t.style.setProperty(e, n, r ? "important" : "");
}
function k(t, e, n) {
  t.classList[n ? "add" : "remove"](e);
}
let Et;
function ot(t) {
  Et = t;
}
function Hn() {
  if (!Et)
    throw new Error("Function called outside component initialization");
  return Et;
}
function br(t) {
  Hn().$$.on_mount.push(t);
}
const Dt = [], ct = [], re = [], wn = [], yr = Promise.resolve();
let Se = !1;
function xr() {
  Se || (Se = !0, yr.then(Ue));
}
function Ae(t) {
  re.push(t);
}
const Pe = /* @__PURE__ */ new Set();
let ee = 0;
function Ue() {
  const t = Et;
  do {
    for (; ee < Dt.length; ) {
      const e = Dt[ee];
      ee++, ot(e), _r(e.$$);
    }
    for (ot(null), Dt.length = 0, ee = 0; ct.length; )
      ct.pop()();
    for (let e = 0; e < re.length; e += 1) {
      const n = re[e];
      Pe.has(n) || (Pe.add(n), n());
    }
    re.length = 0;
  } while (Dt.length);
  for (; wn.length; )
    wn.pop()();
  Se = !1, Pe.clear(), ot(t);
}
function _r(t) {
  if (t.fragment !== null) {
    t.update(), mt(t.before_update);
    const e = t.dirty;
    t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(Ae);
  }
}
const oe = /* @__PURE__ */ new Set();
let vt;
function Ye() {
  vt = {
    r: 0,
    c: [],
    p: vt
  };
}
function Fe() {
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
    let u = !1;
    e.block && (e.blocks ? e.blocks.forEach((f, m) => {
      m !== a && f && (Ye(), at(f, 1, 1, () => {
        e.blocks[m] === f && (e.blocks[m] = null);
      }), Fe());
    }) : e.block.d(1), s.c(), G(s, 1), s.m(e.mount(), e.anchor), u = !0), e.block = s, e.blocks && (e.blocks[a] = s), u && Ue();
  }
  if (mr(t)) {
    const o = Hn();
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
function ze(t) {
  t && t.c();
}
function he(t, e, n, r) {
  const { fragment: o, after_update: a } = t.$$;
  o && o.m(e, n), r || Ae(() => {
    const i = t.$$.on_mount.map(Fn).filter(me);
    t.$$.on_destroy ? t.$$.on_destroy.push(...i) : mt(i), t.$$.on_mount = [];
  }), a.forEach(Ae);
}
function ge(t, e) {
  const n = t.$$;
  n.fragment !== null && (mt(n.on_destroy), n.fragment && n.fragment.d(e), n.on_destroy = n.fragment = null, n.ctx = []);
}
function Or(t, e) {
  t.$$.dirty[0] === -1 && (Dt.push(t), xr(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function ve(t, e, n, r, o, a, i, l = [-1]) {
  const c = Et;
  ot(t);
  const s = t.$$ = {
    fragment: null,
    ctx: [],
    props: a,
    update: A,
    not_equal: o,
    bound: hn(),
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (c ? c.$$.context : [])),
    callbacks: hn(),
    dirty: l,
    skip_bound: !1,
    root: e.target || c.$$.root
  };
  i && i(s.root);
  let u = !1;
  if (s.ctx = n ? n(t, e.props || {}, (f, m, ...h) => {
    const v = h.length ? h[0] : m;
    return s.ctx && o(s.ctx[f], s.ctx[f] = v) && (!s.skip_bound && s.bound[f] && s.bound[f](v), u && Or(t, f)), m;
  }) : [], s.update(), u = !0, mt(s.before_update), s.fragment = r ? r(s.ctx) : !1, e.target) {
    if (e.hydrate) {
      const f = wr(e.target);
      s.fragment && s.fragment.l(f), f.forEach(L);
    } else
      s.fragment && s.fragment.c();
    e.intro && G(t.$$.fragment), he(t, e.target, e.anchor, e.customElement), Ue();
  }
  ot(c);
}
class we {
  $destroy() {
    ge(this, 1), this.$destroy = A;
  }
  $on(e, n) {
    if (!me(n))
      return A;
    const r = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return r.push(n), () => {
      const o = r.indexOf(n);
      o !== -1 && r.splice(o, 1);
    };
  }
  $set(e) {
    this.$$set && !hr(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
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
function $(t) {
  I(1, arguments);
  var e = Object.prototype.toString.call(t);
  return t instanceof Date || ae(t) === "object" && e === "[object Date]" ? new Date(t.getTime()) : typeof t == "number" || e === "[object Number]" ? new Date(t) : ((typeof t == "string" || e === "[object String]") && typeof console < "u" && (console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"), console.warn(new Error().stack)), new Date(NaN));
}
function Dr(t, e) {
  I(2, arguments);
  var n = $(t).getTime(), r = dt(e);
  return new Date(n + r);
}
var Pr = {};
function Lt() {
  return Pr;
}
function St(t) {
  var e = new Date(Date.UTC(t.getFullYear(), t.getMonth(), t.getDate(), t.getHours(), t.getMinutes(), t.getSeconds(), t.getMilliseconds()));
  return e.setUTCFullYear(t.getFullYear()), t.getTime() - e.getTime();
}
function bn(t) {
  I(1, arguments);
  var e = $(t);
  return e.setHours(0, 0, 0, 0), e;
}
var Er = 864e5;
function Sr(t, e) {
  I(2, arguments);
  var n = bn(t), r = bn(e), o = n.getTime() - St(n), a = r.getTime() - St(r);
  return Math.round((o - a) / Er);
}
function ie(t) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? ie = function(n) {
    return typeof n;
  } : ie = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, ie(t);
}
function Ar(t) {
  return I(1, arguments), t instanceof Date || ie(t) === "object" && Object.prototype.toString.call(t) === "[object Date]";
}
function Rr(t) {
  if (I(1, arguments), !Ar(t) && typeof t != "number")
    return !1;
  var e = $(t);
  return !isNaN(Number(e));
}
function Re(t, e) {
  I(2, arguments);
  var n = dt(e);
  return Dr(t, -n);
}
var Wr = 864e5;
function Lr(t) {
  I(1, arguments);
  var e = $(t), n = e.getTime();
  e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
  var r = e.getTime(), o = n - r;
  return Math.floor(o / Wr) + 1;
}
function le(t) {
  I(1, arguments);
  var e = 1, n = $(t), r = n.getUTCDay(), o = (r < e ? 7 : 0) + r - e;
  return n.setUTCDate(n.getUTCDate() - o), n.setUTCHours(0, 0, 0, 0), n;
}
function Vn(t) {
  I(1, arguments);
  var e = $(t), n = e.getUTCFullYear(), r = new Date(0);
  r.setUTCFullYear(n + 1, 0, 4), r.setUTCHours(0, 0, 0, 0);
  var o = le(r), a = new Date(0);
  a.setUTCFullYear(n, 0, 4), a.setUTCHours(0, 0, 0, 0);
  var i = le(a);
  return e.getTime() >= o.getTime() ? n + 1 : e.getTime() >= i.getTime() ? n : n - 1;
}
function Nr(t) {
  I(1, arguments);
  var e = Vn(t), n = new Date(0);
  n.setUTCFullYear(e, 0, 4), n.setUTCHours(0, 0, 0, 0);
  var r = le(n);
  return r;
}
var Ur = 6048e5;
function Yr(t) {
  I(1, arguments);
  var e = $(t), n = le(e).getTime() - Nr(e).getTime();
  return Math.round(n / Ur) + 1;
}
function ce(t, e) {
  var n, r, o, a, i, l, c, s;
  I(1, arguments);
  var u = Lt(), f = dt((n = (r = (o = (a = e == null ? void 0 : e.weekStartsOn) !== null && a !== void 0 ? a : e == null || (i = e.locale) === null || i === void 0 || (l = i.options) === null || l === void 0 ? void 0 : l.weekStartsOn) !== null && o !== void 0 ? o : u.weekStartsOn) !== null && r !== void 0 ? r : (c = u.locale) === null || c === void 0 || (s = c.options) === null || s === void 0 ? void 0 : s.weekStartsOn) !== null && n !== void 0 ? n : 0);
  if (!(f >= 0 && f <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var m = $(t), h = m.getUTCDay(), v = (h < f ? 7 : 0) + h - f;
  return m.setUTCDate(m.getUTCDate() - v), m.setUTCHours(0, 0, 0, 0), m;
}
function In(t, e) {
  var n, r, o, a, i, l, c, s;
  I(1, arguments);
  var u = $(t), f = u.getUTCFullYear(), m = Lt(), h = dt((n = (r = (o = (a = e == null ? void 0 : e.firstWeekContainsDate) !== null && a !== void 0 ? a : e == null || (i = e.locale) === null || i === void 0 || (l = i.options) === null || l === void 0 ? void 0 : l.firstWeekContainsDate) !== null && o !== void 0 ? o : m.firstWeekContainsDate) !== null && r !== void 0 ? r : (c = m.locale) === null || c === void 0 || (s = c.options) === null || s === void 0 ? void 0 : s.firstWeekContainsDate) !== null && n !== void 0 ? n : 1);
  if (!(h >= 1 && h <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var v = new Date(0);
  v.setUTCFullYear(f + 1, 0, h), v.setUTCHours(0, 0, 0, 0);
  var b = ce(v, e), w = new Date(0);
  w.setUTCFullYear(f, 0, h), w.setUTCHours(0, 0, 0, 0);
  var g = ce(w, e);
  return u.getTime() >= b.getTime() ? f + 1 : u.getTime() >= g.getTime() ? f : f - 1;
}
function Fr(t, e) {
  var n, r, o, a, i, l, c, s;
  I(1, arguments);
  var u = Lt(), f = dt((n = (r = (o = (a = e == null ? void 0 : e.firstWeekContainsDate) !== null && a !== void 0 ? a : e == null || (i = e.locale) === null || i === void 0 || (l = i.options) === null || l === void 0 ? void 0 : l.firstWeekContainsDate) !== null && o !== void 0 ? o : u.firstWeekContainsDate) !== null && r !== void 0 ? r : (c = u.locale) === null || c === void 0 || (s = c.options) === null || s === void 0 ? void 0 : s.firstWeekContainsDate) !== null && n !== void 0 ? n : 1), m = In(t, e), h = new Date(0);
  h.setUTCFullYear(m, 0, f), h.setUTCHours(0, 0, 0, 0);
  var v = ce(h, e);
  return v;
}
var zr = 6048e5;
function Br(t, e) {
  I(1, arguments);
  var n = $(t), r = ce(n, e).getTime() - Fr(n, e).getTime();
  return Math.round(r / zr) + 1;
}
function N(t, e) {
  for (var n = t < 0 ? "-" : "", r = Math.abs(t).toString(); r.length < e; )
    r = "0" + r;
  return n + r;
}
var Hr = {
  y: function(e, n) {
    var r = e.getUTCFullYear(), o = r > 0 ? r : 1 - r;
    return N(n === "yy" ? o % 100 : o, n.length);
  },
  M: function(e, n) {
    var r = e.getUTCMonth();
    return n === "M" ? String(r + 1) : N(r + 1, 2);
  },
  d: function(e, n) {
    return N(e.getUTCDate(), n.length);
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
    return N(e.getUTCHours() % 12 || 12, n.length);
  },
  H: function(e, n) {
    return N(e.getUTCHours(), n.length);
  },
  m: function(e, n) {
    return N(e.getUTCMinutes(), n.length);
  },
  s: function(e, n) {
    return N(e.getUTCSeconds(), n.length);
  },
  S: function(e, n) {
    var r = n.length, o = e.getUTCMilliseconds(), a = Math.floor(o * Math.pow(10, r - 3));
    return N(a, n.length);
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
    var a = In(e, o), i = a > 0 ? a : 1 - a;
    if (n === "YY") {
      var l = i % 100;
      return N(l, 2);
    }
    return n === "Yo" ? r.ordinalNumber(i, {
      unit: "year"
    }) : N(i, n.length);
  },
  R: function(e, n) {
    var r = Vn(e);
    return N(r, n.length);
  },
  u: function(e, n) {
    var r = e.getUTCFullYear();
    return N(r, n.length);
  },
  Q: function(e, n, r) {
    var o = Math.ceil((e.getUTCMonth() + 1) / 3);
    switch (n) {
      case "Q":
        return String(o);
      case "QQ":
        return N(o, 2);
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
        return N(o, 2);
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
        return N(o + 1, 2);
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
    }) : N(a, n.length);
  },
  I: function(e, n, r) {
    var o = Yr(e);
    return n === "Io" ? r.ordinalNumber(o, {
      unit: "week"
    }) : N(o, n.length);
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
    }) : N(o, n.length);
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
        return N(i, 2);
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
        return N(i, n.length);
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
        return N(a, n.length);
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
    }) : N(o, n.length);
  },
  k: function(e, n, r) {
    var o = e.getUTCHours();
    return o === 0 && (o = 24), n === "ko" ? r.ordinalNumber(o, {
      unit: "hour"
    }) : N(o, n.length);
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
        return xn(i);
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
        return xn(i);
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
        return "GMT" + yn(i, ":");
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
        return "GMT" + yn(i, ":");
      case "zzzz":
      default:
        return "GMT" + gt(i, ":");
    }
  },
  t: function(e, n, r, o) {
    var a = o._originalDate || e, i = Math.floor(a.getTime() / 1e3);
    return N(i, n.length);
  },
  T: function(e, n, r, o) {
    var a = o._originalDate || e, i = a.getTime();
    return N(i, n.length);
  }
};
function yn(t, e) {
  var n = t > 0 ? "-" : "+", r = Math.abs(t), o = Math.floor(r / 60), a = r % 60;
  if (a === 0)
    return n + String(o);
  var i = e || "";
  return n + String(o) + i + N(a, 2);
}
function xn(t, e) {
  if (t % 60 === 0) {
    var n = t > 0 ? "-" : "+";
    return n + N(Math.abs(t) / 60, 2);
  }
  return gt(t, e);
}
function gt(t, e) {
  var n = e || "", r = t > 0 ? "-" : "+", o = Math.abs(t), a = N(Math.floor(o / 60), 2), i = N(o % 60, 2);
  return r + a + n + i;
}
const Ir = Vr;
var _n = function(e, n) {
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
}, qn = function(e, n) {
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
    return _n(e, n);
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
  return i.replace("{{date}}", _n(o, n)).replace("{{time}}", qn(a, n));
}, jr = {
  p: qn,
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
function Cn(t, e, n) {
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
function Ee(t) {
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
  date: Ee({
    formats: eo,
    defaultWidth: "full"
  }),
  time: Ee({
    formats: no,
    defaultWidth: "full"
  }),
  dateTime: Ee({
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
  era: Ot({
    values: co,
    defaultWidth: "wide"
  }),
  quarter: Ot({
    values: uo,
    defaultWidth: "wide",
    argumentCallback: function(e) {
      return e - 1;
    }
  }),
  month: Ot({
    values: fo,
    defaultWidth: "wide"
  }),
  day: Ot({
    values: po,
    defaultWidth: "wide"
  }),
  dayPeriod: Ot({
    values: mo,
    defaultWidth: "wide",
    formattingValues: ho,
    defaultFormattingWidth: "wide"
  })
};
const wo = vo;
function Mt(t) {
  return function(e) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = n.width, o = r && t.matchPatterns[r] || t.matchPatterns[t.defaultMatchWidth], a = e.match(o);
    if (!a)
      return null;
    var i = a[0], l = r && t.parsePatterns[r] || t.parsePatterns[t.defaultParseWidth], c = Array.isArray(l) ? yo(l, function(f) {
      return f.test(i);
    }) : bo(l, function(f) {
      return f.test(i);
    }), s;
    s = t.valueCallback ? t.valueCallback(c) : c, s = n.valueCallback ? n.valueCallback(s) : s;
    var u = e.slice(i.length);
    return {
      value: s,
      rest: u
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
}, Eo = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, So = {
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
  era: Mt({
    matchPatterns: ko,
    defaultMatchWidth: "wide",
    parsePatterns: To,
    defaultParseWidth: "any"
  }),
  quarter: Mt({
    matchPatterns: Oo,
    defaultMatchWidth: "wide",
    parsePatterns: Mo,
    defaultParseWidth: "any",
    valueCallback: function(e) {
      return e + 1;
    }
  }),
  month: Mt({
    matchPatterns: Do,
    defaultMatchWidth: "wide",
    parsePatterns: Po,
    defaultParseWidth: "any"
  }),
  day: Mt({
    matchPatterns: Eo,
    defaultMatchWidth: "wide",
    parsePatterns: So,
    defaultParseWidth: "any"
  }),
  dayPeriod: Mt({
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
const jn = No;
var Uo = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, Yo = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, Fo = /^'([^]*?)'?$/, zo = /''/g, Bo = /[a-zA-Z]/;
function Ho(t, e, n) {
  var r, o, a, i, l, c, s, u, f, m, h, v, b, w, g, _, x, S;
  I(2, arguments);
  var M = String(e), Y = Lt(), W = (r = (o = n == null ? void 0 : n.locale) !== null && o !== void 0 ? o : Y.locale) !== null && r !== void 0 ? r : jn, T = dt((a = (i = (l = (c = n == null ? void 0 : n.firstWeekContainsDate) !== null && c !== void 0 ? c : n == null || (s = n.locale) === null || s === void 0 || (u = s.options) === null || u === void 0 ? void 0 : u.firstWeekContainsDate) !== null && l !== void 0 ? l : Y.firstWeekContainsDate) !== null && i !== void 0 ? i : (f = Y.locale) === null || f === void 0 || (m = f.options) === null || m === void 0 ? void 0 : m.firstWeekContainsDate) !== null && a !== void 0 ? a : 1);
  if (!(T >= 1 && T <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var D = dt((h = (v = (b = (w = n == null ? void 0 : n.weekStartsOn) !== null && w !== void 0 ? w : n == null || (g = n.locale) === null || g === void 0 || (_ = g.options) === null || _ === void 0 ? void 0 : _.weekStartsOn) !== null && b !== void 0 ? b : Y.weekStartsOn) !== null && v !== void 0 ? v : (x = Y.locale) === null || x === void 0 || (S = x.options) === null || S === void 0 ? void 0 : S.weekStartsOn) !== null && h !== void 0 ? h : 0);
  if (!(D >= 0 && D <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  if (!W.localize)
    throw new RangeError("locale must contain localize property");
  if (!W.formatLong)
    throw new RangeError("locale must contain formatLong property");
  var q = $(t);
  if (!Rr(q))
    throw new RangeError("Invalid time value");
  var P = St(q), B = Re(q, P), y = {
    firstWeekContainsDate: T,
    weekStartsOn: D,
    locale: W,
    _originalDate: q
  }, H = M.match(Yo).map(function(z) {
    var j = z[0];
    if (j === "p" || j === "P") {
      var J = $r[j];
      return J(z, W.formatLong);
    }
    return z;
  }).join("").match(Uo).map(function(z) {
    if (z === "''")
      return "'";
    var j = z[0];
    if (j === "'")
      return Vo(z);
    var J = Ir[j];
    if (J)
      return !(n != null && n.useAdditionalWeekYearTokens) && Jr(z) && Cn(z, e, String(t)), !(n != null && n.useAdditionalDayOfYearTokens) && Gr(z) && Cn(z, e, String(t)), J(B, z, W.localize, y);
    if (j.match(Bo))
      throw new RangeError("Format string contains an unescaped latin alphabet character `" + j + "`");
    return z;
  }).join("");
  return H;
}
function Vo(t) {
  var e = t.match(Fo);
  return e ? e[1].replace(zo, "'") : t;
}
function kn(t, e, n) {
  var r, o, a, i, l, c, s, u, f, m;
  I(2, arguments);
  var h = $(t), v = $(e), b = Lt(), w = (r = (o = n == null ? void 0 : n.locale) !== null && o !== void 0 ? o : b.locale) !== null && r !== void 0 ? r : jn, g = dt((a = (i = (l = (c = n == null ? void 0 : n.weekStartsOn) !== null && c !== void 0 ? c : n == null || (s = n.locale) === null || s === void 0 || (u = s.options) === null || u === void 0 ? void 0 : u.weekStartsOn) !== null && l !== void 0 ? l : b.weekStartsOn) !== null && i !== void 0 ? i : (f = b.locale) === null || f === void 0 || (m = f.options) === null || m === void 0 ? void 0 : m.weekStartsOn) !== null && a !== void 0 ? a : 0);
  if (!w.localize)
    throw new RangeError("locale must contain localize property");
  if (!w.formatLong)
    throw new RangeError("locale must contain formatLong property");
  if (!w.formatRelative)
    throw new RangeError("locale must contain formatRelative property");
  var _ = Sr(h, v);
  if (isNaN(_))
    throw new RangeError("Invalid time value");
  var x;
  _ < -6 ? x = "other" : _ < -1 ? x = "lastWeek" : _ < 0 ? x = "yesterday" : _ < 1 ? x = "today" : _ < 2 ? x = "tomorrow" : _ < 7 ? x = "nextWeek" : x = "other";
  var S = Re(h, St(h)), M = Re(v, St(v)), Y = w.formatRelative(x, S, M, {
    locale: w,
    weekStartsOn: g
  });
  return Ho(h, Y, {
    locale: w,
    weekStartsOn: g
  });
}
function bt(t) {
  return t.split("-")[0];
}
function Be(t) {
  return t.split("-")[1];
}
function Nt(t) {
  return ["top", "bottom"].includes(bt(t)) ? "x" : "y";
}
function $n(t) {
  return t === "y" ? "height" : "width";
}
function Tn(t, e, n) {
  let {
    reference: r,
    floating: o
  } = t;
  const a = r.x + r.width / 2 - o.width / 2, i = r.y + r.height / 2 - o.height / 2, l = Nt(e), c = $n(l), s = r[c] / 2 - o[c] / 2, u = bt(e), f = l === "x";
  let m;
  switch (u) {
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
  switch (Be(e)) {
    case "start":
      m[l] -= s * (n && f ? -1 : 1);
      break;
    case "end":
      m[l] += s * (n && f ? -1 : 1);
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
    x: u,
    y: f
  } = Tn(s, r, c), m = r, h = {}, v = 0;
  for (let b = 0; b < l.length; b++) {
    const {
      name: w,
      fn: g
    } = l[b], {
      x: _,
      y: x,
      data: S,
      reset: M
    } = await g({
      x: u,
      y: f,
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
    if (u = _ ?? u, f = x ?? f, h = {
      ...h,
      [w]: {
        ...h[w],
        ...S
      }
    }, {}.NODE_ENV !== "production" && v > 50 && console.warn(["Floating UI: The middleware lifecycle appears to be running in an", "infinite loop. This is usually caused by a `reset` continually", "being returned without a break condition."].join(" ")), M && v <= 50) {
      v++, typeof M == "object" && (M.placement && (m = M.placement), M.rects && (s = M.rects === !0 ? await i.getElementRects({
        reference: t,
        floating: e,
        strategy: o
      }) : M.rects), {
        x: u,
        y: f
      } = Tn(s, m, c)), b = -1;
      continue;
    }
  }
  return {
    x: u,
    y: f,
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
function Xn(t) {
  return typeof t != "number" ? qo(t) : {
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
async function Qn(t, e) {
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
    rootBoundary: u = "viewport",
    elementContext: f = "floating",
    altBoundary: m = !1,
    padding: h = 0
  } = e, v = Xn(h), w = l[m ? f === "floating" ? "reference" : "floating" : f], g = At(await a.getClippingRect({
    element: (n = await (a.isElement == null ? void 0 : a.isElement(w))) == null || n ? w : w.contextElement || await (a.getDocumentElement == null ? void 0 : a.getDocumentElement(l.floating)),
    boundary: s,
    rootBoundary: u,
    strategy: c
  })), _ = f === "floating" ? {
    ...i.floating,
    x: r,
    y: o
  } : i.reference, x = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(l.floating)), S = await (a.isElement == null ? void 0 : a.isElement(x)) ? await (a.getScale == null ? void 0 : a.getScale(x)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, M = At(a.convertOffsetParentRelativeRectToViewportRelativeRect ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({
    rect: _,
    offsetParent: x,
    strategy: c
  }) : _);
  return {
    top: (g.top - M.top + v.top) / S.y,
    bottom: (M.bottom - g.bottom + v.bottom) / S.y,
    left: (g.left - M.left + v.left) / S.x,
    right: (M.right - g.right + v.right) / S.x
  };
}
const Gn = Math.min, Jn = Math.max;
function On(t, e, n) {
  return Jn(t, Gn(e, n));
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
  const r = Be(t), o = Nt(t), a = $n(o);
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
function Mn(t) {
  return t.replace(/start|end/g, (e) => Xo[e]);
}
function Qo(t) {
  const e = ue(t);
  return [Mn(t), e, Mn(e)];
}
const We = function(t) {
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
        crossAxis: u = !0,
        fallbackPlacements: f,
        fallbackStrategy: m = "bestFit",
        flipAlignment: h = !0,
        ...v
      } = t, b = bt(r), g = f || (b === i || !h ? [ue(i)] : Qo(i)), _ = [i, ...g], x = await Qn(e, v), S = [];
      let M = ((n = o.flip) == null ? void 0 : n.overflows) || [];
      if (s && S.push(x[b]), u) {
        const {
          main: D,
          cross: q
        } = $o(r, a, await (l.isRTL == null ? void 0 : l.isRTL(c.floating)));
        S.push(x[D], x[q]);
      }
      if (M = [...M, {
        placement: r,
        overflows: S
      }], !S.every((D) => D <= 0)) {
        var Y, W;
        const D = ((Y = (W = o.flip) == null ? void 0 : W.index) != null ? Y : 0) + 1, q = _[D];
        if (q)
          return {
            data: {
              index: D,
              overflows: M
            },
            reset: {
              placement: q
            }
          };
        let P = "bottom";
        switch (m) {
          case "bestFit": {
            var T;
            const B = (T = M.map((y) => [y, y.overflows.filter((H) => H > 0).reduce((H, z) => H + z, 0)]).sort((y, H) => y[1] - H[1])[0]) == null ? void 0 : T[0].placement;
            B && (P = B);
            break;
          }
          case "initialPlacement":
            P = i;
            break;
        }
        if (r !== P)
          return {
            reset: {
              placement: P
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
  } = t, a = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), i = bt(n), l = Be(n), c = Nt(n) === "x", s = ["left", "top"].includes(i) ? -1 : 1, u = a && c ? -1 : 1, f = typeof e == "function" ? e(t) : e;
  let {
    mainAxis: m,
    crossAxis: h,
    alignmentAxis: v
  } = typeof f == "number" ? {
    mainAxis: f,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...f
  };
  return l && typeof v == "number" && (h = l === "end" ? v * -1 : v), c ? {
    x: h * u,
    y: m * s
  } : {
    x: m * s,
    y: h * u
  };
}
const Le = function(t) {
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
const Ne = function(t) {
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
              x: g,
              y: _
            } = w;
            return {
              x: g,
              y: _
            };
          }
        },
        ...c
      } = t, s = {
        x: n,
        y: r
      }, u = await Qn(e, c), f = Nt(bt(o)), m = Jo(f);
      let h = s[f], v = s[m];
      if (a) {
        const w = f === "y" ? "top" : "left", g = f === "y" ? "bottom" : "right", _ = h + u[w], x = h - u[g];
        h = On(_, h, x);
      }
      if (i) {
        const w = m === "y" ? "top" : "left", g = m === "y" ? "bottom" : "right", _ = v + u[w], x = v - u[g];
        v = On(_, v, x);
      }
      const b = l.fn({
        ...e,
        [f]: h,
        [m]: v
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
        y: u
      } = t, f = At(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
        rect: a.reference,
        offsetParent: await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(o.floating)),
        strategy: l
      }) : a.reference), m = (n = await (i.getClientRects == null ? void 0 : i.getClientRects(o.reference))) != null ? n : [], h = Xn(c);
      function v() {
        if (m.length === 2 && m[0].left > m[1].right && s != null && u != null) {
          var w;
          return (w = m.find((g) => s > g.left - h.left && s < g.right + h.right && u > g.top - h.top && u < g.bottom + h.bottom)) != null ? w : f;
        }
        if (m.length >= 2) {
          if (Nt(r) === "x") {
            const P = m[0], B = m[m.length - 1], y = bt(r) === "top", H = P.top, z = B.bottom, j = y ? P.left : B.left, J = y ? P.right : B.right, Ut = J - j, yt = z - H;
            return {
              top: H,
              bottom: z,
              left: j,
              right: J,
              width: Ut,
              height: yt,
              x: j,
              y: H
            };
          }
          const g = bt(r) === "left", _ = Jn(...m.map((P) => P.right)), x = Gn(...m.map((P) => P.left)), S = m.filter((P) => g ? P.left === x : P.right === _), M = S[0].top, Y = S[S.length - 1].bottom, W = x, T = _, D = T - W, q = Y - M;
          return {
            top: M,
            bottom: Y,
            left: W,
            right: T,
            width: D,
            height: q,
            x: W,
            y: M
          };
        }
        return f;
      }
      const b = await i.getElementRects({
        reference: {
          getBoundingClientRect: v
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
  return Zn(t) ? (t.nodeName || "").toLowerCase() : "";
}
let ne;
function Kn() {
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
function Zn(t) {
  return t instanceof X(t).Node;
}
function Dn(t) {
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
function He(t) {
  const e = /firefox/i.test(Kn()), n = Z(t), r = n.backdropFilter || n.WebkitBackdropFilter;
  return n.transform !== "none" || n.perspective !== "none" || (r ? r !== "none" : !1) || e && n.willChange === "filter" || e && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective"].some((o) => n.willChange.includes(o)) || ["paint", "layout", "strict", "content"].some(
    (o) => {
      const a = n.contain;
      return a != null ? a.includes(o) : !1;
    }
  );
}
function tr() {
  return !/^((?!chrome|android).)*safari/i.test(Kn());
}
function Ve(t) {
  return ["html", "body", "#document"].includes(ft(t));
}
const Pn = Math.min, Pt = Math.max, fe = Math.round;
function er(t) {
  const e = Z(t);
  let n = parseFloat(e.width), r = parseFloat(e.height);
  const o = t.offsetWidth, a = t.offsetHeight, i = fe(n) !== o || fe(r) !== a;
  return i && (n = o, r = a), {
    width: n,
    height: r,
    fallback: i
  };
}
function nr(t) {
  return pt(t) ? t : t.contextElement;
}
const rr = {
  x: 1,
  y: 1
};
function kt(t) {
  const e = nr(t);
  if (!it(e))
    return rr;
  const n = e.getBoundingClientRect(), {
    width: r,
    height: o,
    fallback: a
  } = er(e);
  let i = (a ? fe(n.width) : n.width) / r, l = (a ? fe(n.height) : n.height) / o;
  return (!i || !Number.isFinite(i)) && (i = 1), (!l || !Number.isFinite(l)) && (l = 1), {
    x: i,
    y: l
  };
}
function Rt(t, e, n, r) {
  var o, a;
  e === void 0 && (e = !1), n === void 0 && (n = !1);
  const i = t.getBoundingClientRect(), l = nr(t);
  let c = rr;
  e && (r ? pt(r) && (c = kt(r)) : c = kt(t));
  const s = l ? X(l) : window, u = !tr() && n;
  let f = (i.left + (u && ((o = s.visualViewport) == null ? void 0 : o.offsetLeft) || 0)) / c.x, m = (i.top + (u && ((a = s.visualViewport) == null ? void 0 : a.offsetTop) || 0)) / c.y, h = i.width / c.x, v = i.height / c.y;
  if (l) {
    const b = X(l), w = r && pt(r) ? X(r) : r;
    let g = b.frameElement;
    for (; g && r && w !== b; ) {
      const _ = kt(g), x = g.getBoundingClientRect(), S = getComputedStyle(g);
      x.x += (g.clientLeft + parseFloat(S.paddingLeft)) * _.x, x.y += (g.clientTop + parseFloat(S.paddingTop)) * _.y, f *= _.x, m *= _.y, h *= _.x, v *= _.y, f += x.x, m += x.y, g = X(g).frameElement;
    }
  }
  return {
    width: h,
    height: v,
    top: m,
    right: f + h,
    bottom: m + v,
    left: f,
    x: f,
    y: m
  };
}
function ht(t) {
  return ((Zn(t) ? t.ownerDocument : t.document) || window.document).documentElement;
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
function or(t) {
  return Rt(ht(t)).left + ye(t).scrollLeft;
}
function Zo(t, e, n) {
  const r = it(e), o = ht(e), a = Rt(t, !0, n === "fixed", e);
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
      const c = Rt(e, !0);
      l.x = c.x + e.clientLeft, l.y = c.y + e.clientTop;
    } else
      o && (l.x = or(o));
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
  const e = t.assignedSlot || t.parentNode || (Dn(t) ? t.host : null) || ht(t);
  return Dn(e) ? e.host : e;
}
function En(t) {
  return !it(t) || Z(t).position === "fixed" ? null : t.offsetParent;
}
function ta(t) {
  let e = Wt(t);
  for (; it(e) && !Ve(e); ) {
    if (He(e))
      return e;
    e = Wt(e);
  }
  return null;
}
function Sn(t) {
  const e = X(t);
  let n = En(t);
  for (; n && Ko(n) && Z(n).position === "static"; )
    n = En(n);
  return n && (ft(n) === "html" || ft(n) === "body" && Z(n).position === "static" && !He(n)) ? e : n || ta(t) || e;
}
function ea(t) {
  return er(t);
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
    const s = Rt(n);
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
    const s = tr();
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
  const n = ht(t), r = ye(t), o = (e = t.ownerDocument) == null ? void 0 : e.body, a = Pt(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), i = Pt(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0);
  let l = -r.scrollLeft + or(t);
  const c = -r.scrollTop;
  return Z(o || n).direction === "rtl" && (l += Pt(n.clientWidth, o ? o.clientWidth : 0) - a), {
    width: a,
    height: i,
    x: l,
    y: c
  };
}
function ar(t) {
  const e = Wt(t);
  return Ve(e) ? t.ownerDocument.body : it(e) && be(e) ? e : ar(e);
}
function ir(t, e) {
  var n;
  e === void 0 && (e = []);
  const r = ar(t), o = r === ((n = t.ownerDocument) == null ? void 0 : n.body), a = X(r);
  return o ? e.concat(a, a.visualViewport || [], be(r) ? r : []) : e.concat(r, ir(r));
}
function aa(t, e) {
  const n = Rt(t, !0, e === "fixed"), r = n.top + t.clientTop, o = n.left + t.clientLeft, a = it(t) ? kt(t) : {
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
function An(t, e, n) {
  return e === "viewport" ? At(ra(t, n)) : pt(e) ? aa(e, n) : At(oa(ht(t)));
}
function ia(t, e) {
  const n = e.get(t);
  if (n)
    return n;
  let r = ir(t).filter((l) => pt(l) && ft(l) !== "body"), o = null;
  const a = Z(t).position === "fixed";
  let i = a ? Wt(t) : t;
  for (; pt(i) && !Ve(i); ) {
    const l = Z(i), c = He(i);
    (a ? !c && !o : !c && l.position === "static" && !!o && ["absolute", "fixed"].includes(o.position)) ? r = r.filter((u) => u !== i) : o = l, i = Wt(i);
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
  const i = [...n === "clippingAncestors" ? ia(e, this._c) : [].concat(n), r], l = i[0], c = i.reduce((s, u) => {
    const f = An(e, u, o);
    return s.top = Pt(f.top, s.top), s.right = Pn(f.right, s.right), s.bottom = Pn(f.bottom, s.bottom), s.left = Pt(f.left, s.left), s;
  }, An(e, l, o));
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
function Rn(t, e) {
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
      e = C("button"), o.c(), d(e, "type", "button"), d(e, "class", "spd-px-3 spd-py-2 spd-transition-colors spd-space-x-1.5 spd-border spd-border-zinc-800 spd-text-zinc-500 spd-rounded-md hover:spd-text-white hover:spd-bg-zinc-800 spd-text-sm spd-flex spd-items-center spd-self-end");
    },
    m(a, i) {
      U(a, e, i), o.m(e, null);
    },
    p(a, i) {
      r !== (r = n(a)) && (o.d(1), o = r(a), o && (o.c(), o.m(e, null)));
    },
    d(a) {
      a && L(e), o.d();
    }
  };
}
function ua(t) {
  let e, n;
  return {
    c() {
      e = V("svg"), n = V("path"), d(n, "d", "M4.5 12.5C4.5 16.9183 8.08172 20.5 12.5 20.5C16.9183 20.5 20.5 16.9183 20.5 12.5C20.5 8.08172 16.9183 4.5 12.5 4.5"), d(n, "stroke", "#9CA3AF"), d(n, "stroke-width", "1.2"), d(e, "class", "spd-animate-spin spd-w-5 spd-h-5"), d(e, "viewBox", "0 0 25 25"), d(e, "fill", "none"), d(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(r, o) {
      U(r, e, o), p(e, n);
    },
    p: A,
    d(r) {
      r && L(e);
    }
  };
}
function da(t) {
  let e, n, r, o;
  return {
    c() {
      e = V("svg"), n = V("path"), r = E(), o = C("span"), o.textContent = "Resolve", d(n, "stroke-linecap", "round"), d(n, "stroke-linejoin", "round"), d(n, "stroke-width", "2"), d(n, "d", "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"), d(e, "xmlns", "http://www.w3.org/2000/svg"), d(e, "fill", "none"), d(e, "viewBox", "0 0 24 24"), d(e, "stroke", "currentColor"), d(e, "class", "spd-w-5 spd-h-5");
    },
    m(a, i) {
      U(a, e, i), p(e, n), U(a, r, i), U(a, o, i);
    },
    d(a) {
      a && L(e), a && L(r), a && L(o);
    }
  };
}
function fa(t) {
  let e, n;
  return {
    c() {
      e = V("svg"), n = V("path"), d(n, "fill-rule", "evenodd"), d(n, "d", "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"), d(n, "clip-rule", "evenodd"), d(e, "xmlns", "http://www.w3.org/2000/svg"), d(e, "viewBox", "0 0 20 20"), d(e, "fill", "currentColor"), d(e, "class", "spd-w-5 spd-h-5 spd-text-green-300");
    },
    m(r, o) {
      U(r, e, o), p(e, n);
    },
    d(r) {
      r && L(e);
    }
  };
}
function pa(t) {
  let e, n, r, o, a, i, l, c, s, u, f, m, h = kn(new Date(t[5]), new Date()) + "", v, b, w, g, _, x, S, M, Y, W, T, D, q, P, B, y, H, z, j = " ", J, Ut, yt, xe, qe, tt, Yt, je, cr = " ", $e, Xe, Ft, zt = t[4].userAgent + "", _e, Qe, et, Bt, Ge, ur = " ", Je, Ke, Ht, Vt = t[4].platform + "", Ce, Ze, nt, It, tn, dr = " ", en, nn, xt, qt = t[4].screenWidth + "", ke, rn, jt = t[4].screenHeight + "", Te, on, rt, $t, an, fr = " ", sn, ln, Xt, Qt = t[4].devicePixelRatio + "", Oe, cn, st, Gt, un, pr = " ", dn, fn, Jt, Kt = t[4].language + "", Me, De, pn;
  function mn(O, R) {
    return O[6] ? ua : ca;
  }
  let Zt = mn(t), K = Zt(t);
  return {
    c() {
      e = C("button"), n = V("svg"), r = V("path"), o = V("path"), a = E(), i = C("span"), l = F(t[7]), c = E(), s = C("div"), u = C("div"), f = C("div"), m = C("p"), v = F(h), b = E(), w = C("div"), g = C("button"), g.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="spd-w-5 spd-h-5"><path fill-rule="evenodd" d="M2 4.25A2.25 2.25 0 014.25 2h11.5A2.25 2.25 0 0118 4.25v8.5A2.25 2.25 0 0115.75 15h-3.105a3.501 3.501 0 001.1 1.677A.75.75 0 0113.26 18H6.74a.75.75 0 01-.484-1.323A3.501 3.501 0 007.355 15H4.25A2.25 2.25 0 012 12.75v-8.5zm1.5 0a.75.75 0 01.75-.75h11.5a.75.75 0 01.75.75v7.5a.75.75 0 01-.75.75H4.25a.75.75 0 01-.75-.75v-7.5z" clip-rule="evenodd"></path></svg>', _ = E(), x = C("button"), x.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="spd-w-5 spd-h-5"><path d="M3 10a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM8.5 10a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM15.5 8.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3z"></path></svg>', S = E(), M = C("div"), Y = C("p"), W = F(t[1]), D = E(), K.c(), q = E(), P = C("div"), B = C("dl"), y = C("div"), H = C("dt"), H.textContent = "Pathname:", z = E(), J = F(j), Ut = E(), yt = C("dd"), xe = F(t[2]), qe = E(), tt = C("div"), Yt = C("dt"), Yt.textContent = "User Agent:", je = E(), $e = F(cr), Xe = E(), Ft = C("dd"), _e = F(zt), Qe = E(), et = C("div"), Bt = C("dt"), Bt.textContent = "Platform:", Ge = E(), Je = F(ur), Ke = E(), Ht = C("dd"), Ce = F(Vt), Ze = E(), nt = C("div"), It = C("dt"), It.textContent = "Window size:", tn = E(), en = F(dr), nn = E(), xt = C("dd"), ke = F(qt), rn = F(" x "), Te = F(jt), on = E(), rt = C("div"), $t = C("dt"), $t.textContent = "Device pixel ratio:", an = E(), sn = F(fr), ln = E(), Xt = C("dd"), Oe = F(Qt), cn = E(), st = C("div"), Gt = C("dt"), Gt.textContent = "Language:", un = E(), dn = F(pr), fn = E(), Jt = C("dd"), Me = F(Kt), d(r, "d", "M22 44C34.1503 44 44 34.1503 44 22C44 9.84974 34.1503 0 22 0H0V22C0 34.1503 9.84974 44 22 44Z"), d(r, "fill", "black"), d(o, "fill-rule", "evenodd"), d(o, "clip-rule", "evenodd"), d(o, "d", "M22 41.25C32.6315 41.25 41.25 32.6315 41.25 22C41.25 11.3685 32.6315 2.75 22 2.75H2.75V22C2.75 32.6315 11.3685 41.25 22 41.25ZM44 22C44 34.1503 34.1503 44 22 44C9.84974 44 0 34.1503 0 22V0H22C34.1503 0 44 9.84974 44 22Z"), d(o, "fill", "white"), d(n, "class", "spd-w-8 spd-h-8"), d(n, "viewBox", "0 0 44 44"), d(n, "fill", "none"), d(n, "xmlns", "http://www.w3.org/2000/svg"), d(i, "class", "spd-absolute spd-left-1/2 spd-top-1/2 -spd-translate-x-1/2 -spd-translate-y-1/2 spd-text-xs spd-text-white"), d(e, "class", "spd-absolute spd-z-[99999] spd-transition-transform spd-origin-top-left spd-ease-out hover:spd-scale-125"), d(e, "type", "button"), k(e, "spd-scale-125", t[10]), te(e, "left", `${t[3].x * 100}%`), te(e, "top", `${t[3].y * 100}%`), d(m, "class", "spd-text-sm spd-text-zinc-500"), d(g, "type", "button"), d(g, "class", "spd-p-1.5 spd-rounded-md spd-transition-colors hover:spd-bg-zinc-800 spd-text-sm spd-flex spd-items-center spd-self-end"), d(g, "data-ignore-clickable", ""), k(g, "spd-text-zinc-500", !t[13]), k(g, "spd-text-white", t[13]), k(g, "spd-bg-zinc-800", t[13]), d(x, "type", "button"), d(x, "class", "spd-p-1.5 spd-rounded-md spd-text-zinc-500 hover:spd-bg-zinc-800 spd-transition-colors spd-text-sm spd-flex spd-items-center spd-self-end"), d(w, "class", "spd-flex spd-items-center spd-space-x-3"), d(f, "class", "spd-flex spd-items-center spd-justify-between spd-space-x-3"), d(Y, "class", T = "spd-text-base " + (t[0] ? "spd-text-zinc-600 spd-line-through" : "spd-text-zinc-200")), d(M, "class", "spd-pt-1 spd-pb-6 spd-pr-8"), d(u, "class", "spd-flex spd-flex-col"), d(s, "class", "spd-flex spd-flex-col spd-transition spd-delay-100 spd-duration-300 spd-ease-out spd-absolute spd-top-0 spd-left-0 spd-w-max spd-z-[999999] spd-shadow-lg spd-border spd-border-zinc-600 spd-bg-black spd-px-6 spd-py-3 spd-rounded-md spd-text-white"), d(s, "data-clickable", ""), k(s, "spd-opacity-0", !t[10]), k(s, "spd-translate-y-2", !t[10]), k(s, "spd-opacity-100", t[10]), k(s, "spd-translate-y-0", t[10]), d(H, "class", "spd-whitespace-nowrap spd-min-w-[120px]"), d(yt, "class", "spd-ml-3 spd-font-bold"), d(y, "class", "spd-flex"), d(Yt, "class", "spd-whitespace-nowrap spd-min-w-[120px]"), d(Ft, "class", "spd-ml-3 spd-font-bold"), d(tt, "class", "spd-flex"), d(Bt, "class", "spd-whitespace-nowrap spd-min-w-[120px]"), d(Ht, "class", "spd-ml-3 spd-font-bold"), d(et, "class", "spd-flex"), d(It, "class", "spd-whitespace-nowrap spd-min-w-[120px]"), d(xt, "class", "spd-ml-3 spd-font-bold"), d(nt, "class", "spd-flex"), d($t, "class", "spd-whitespace-nowrap spd-min-w-[120px]"), d(Xt, "class", "spd-ml-3 spd-font-bold"), d(rt, "class", "spd-flex"), d(Gt, "class", "spd-whitespace-nowrap spd-min-w-[120px]"), d(Jt, "class", "spd-ml-3 spd-font-bold"), d(st, "class", "spd-flex"), d(B, "class", "spd-flex spd-flex-col spd-space-y-3 spd-text-sm spd-text-white"), d(P, "class", "spd-flex spd-max-w-sm spd-flex-col spd-transition spd-delay-200 spd-duration-300 spd-ease-out spd-absolute spd-top-0 spd-left-0 spd-w-max spd-z-[999999] spd-shadow-lg spd-border spd-border-zinc-800 spd-bg-black spd-px-5 spd-py-3 spd-rounded-md spd-text-white"), d(P, "data-clickable", ""), k(P, "spd-opacity-0", !t[13]), k(P, "spd-translate-y-2", !t[13]), k(P, "spd-opacity-100", t[13]), k(P, "spd-translate-y-0", t[13]);
    },
    m(O, R) {
      U(O, e, R), p(e, n), p(n, r), p(n, o), p(e, a), p(e, i), p(i, l), t[18](e), U(O, c, R), U(O, s, R), p(s, u), p(u, f), p(f, m), p(m, v), p(f, b), p(f, w), p(w, g), t[19](g), p(w, _), p(w, x), p(u, S), p(u, M), p(M, Y), p(Y, W), p(s, D), K.m(s, null), t[20](s), U(O, q, R), U(O, P, R), p(P, B), p(B, y), p(y, H), p(y, z), p(y, J), p(y, Ut), p(y, yt), p(yt, xe), p(y, qe), p(B, tt), p(tt, Yt), p(tt, je), p(tt, $e), p(tt, Xe), p(tt, Ft), p(Ft, _e), p(tt, Qe), p(B, et), p(et, Bt), p(et, Ge), p(et, Je), p(et, Ke), p(et, Ht), p(Ht, Ce), p(et, Ze), p(B, nt), p(nt, It), p(nt, tn), p(nt, en), p(nt, nn), p(nt, xt), p(xt, ke), p(xt, rn), p(xt, Te), p(nt, on), p(B, rt), p(rt, $t), p(rt, an), p(rt, sn), p(rt, ln), p(rt, Xt), p(Xt, Oe), p(rt, cn), p(B, st), p(st, Gt), p(st, un), p(st, dn), p(st, fn), p(st, Jt), p(Jt, Me), t[21](P), De || (pn = [
        ut(e, "click", t[15]),
        gn(Rn.call(null, e, t[14])),
        ut(g, "click", t[17]),
        gn(Rn.call(null, g, t[16]))
      ], De = !0);
    },
    p(O, [R]) {
      R & 128 && Q(l, O[7]), R & 1024 && k(e, "spd-scale-125", O[10]), R & 8 && te(e, "left", `${O[3].x * 100}%`), R & 8 && te(e, "top", `${O[3].y * 100}%`), R & 32 && h !== (h = kn(new Date(O[5]), new Date()) + "") && Q(v, h), R & 8192 && k(g, "spd-text-zinc-500", !O[13]), R & 8192 && k(g, "spd-text-white", O[13]), R & 8192 && k(g, "spd-bg-zinc-800", O[13]), R & 2 && Q(W, O[1]), R & 1 && T !== (T = "spd-text-base " + (O[0] ? "spd-text-zinc-600 spd-line-through" : "spd-text-zinc-200")) && d(Y, "class", T), Zt === (Zt = mn(O)) && K ? K.p(O, R) : (K.d(1), K = Zt(O), K && (K.c(), K.m(s, null))), R & 1024 && k(s, "spd-opacity-0", !O[10]), R & 1024 && k(s, "spd-translate-y-2", !O[10]), R & 1024 && k(s, "spd-opacity-100", O[10]), R & 1024 && k(s, "spd-translate-y-0", O[10]), R & 4 && Q(xe, O[2]), R & 16 && zt !== (zt = O[4].userAgent + "") && Q(_e, zt), R & 16 && Vt !== (Vt = O[4].platform + "") && Q(Ce, Vt), R & 16 && qt !== (qt = O[4].screenWidth + "") && Q(ke, qt), R & 16 && jt !== (jt = O[4].screenHeight + "") && Q(Te, jt), R & 16 && Qt !== (Qt = O[4].devicePixelRatio + "") && Q(Oe, Qt), R & 16 && Kt !== (Kt = O[4].language + "") && Q(Me, Kt), R & 8192 && k(P, "spd-opacity-0", !O[13]), R & 8192 && k(P, "spd-translate-y-2", !O[13]), R & 8192 && k(P, "spd-opacity-100", O[13]), R & 8192 && k(P, "spd-translate-y-0", O[13]);
    },
    i: A,
    o: A,
    d(O) {
      O && L(e), t[18](null), O && L(c), O && L(s), t[19](null), K.d(), t[20](null), O && L(q), O && L(P), t[21](null), De = !1, mt(pn);
    }
  };
}
const Wn = 300;
function ma(t, e, n) {
  let r, o, a = !1, i, l, c = !1, { resolved: s = !1 } = e, { text: u = "" } = e, { pathname: f = "" } = e, { position: m = { x: 0, y: 0 } } = e, { metadata: h = {} } = e, { createdAt: v = new Date() } = e, { loading: b = !1 } = e, { number: w = 1 } = e;
  const g = async () => {
    const { x: y, y: H } = await pe(r, o, {
      placement: "right-start",
      middleware: [de(), Le(4), We(), Ne({ padding: 8 })]
    });
    Object.assign(o.style, { left: `${y}px`, top: `${H}px` });
  }, _ = () => {
    a || (n(9, o.style.display = "", o), n(10, a = !0), g());
  }, x = () => {
    a && (n(10, a = !1), n(13, c = !1), setTimeout(
      () => {
        n(9, o.style.display = "none", o), n(12, l.style.display = "none", l);
      },
      Wn
    ));
  }, S = () => {
    a ? x() : _();
  }, M = async () => {
    if (!i)
      return;
    const { x: y, y: H } = await pe(i, l, {
      placement: "top",
      middleware: [de(), Le(20), We(), Ne({ padding: 8 })]
    });
    Object.assign(l.style, { left: `${y}px`, top: `${H}px` });
  }, Y = () => {
    c || (n(12, l.style.display = "", l), n(13, c = !0), M());
  }, W = () => {
    c && (n(13, c = !1), setTimeout(
      () => {
        n(12, l.style.display = "none", l);
      },
      Wn
    ));
  }, T = () => {
    c ? W() : Y();
  };
  function D(y) {
    ct[y ? "unshift" : "push"](() => {
      r = y, n(8, r);
    });
  }
  function q(y) {
    ct[y ? "unshift" : "push"](() => {
      i = y, n(11, i);
    });
  }
  function P(y) {
    ct[y ? "unshift" : "push"](() => {
      o = y, n(9, o);
    });
  }
  function B(y) {
    ct[y ? "unshift" : "push"](() => {
      l = y, n(12, l);
    });
  }
  return t.$$set = (y) => {
    "resolved" in y && n(0, s = y.resolved), "text" in y && n(1, u = y.text), "pathname" in y && n(2, f = y.pathname), "position" in y && n(3, m = y.position), "metadata" in y && n(4, h = y.metadata), "createdAt" in y && n(5, v = y.createdAt), "loading" in y && n(6, b = y.loading), "number" in y && n(7, w = y.number);
  }, [
    s,
    u,
    f,
    m,
    h,
    v,
    b,
    w,
    r,
    o,
    a,
    i,
    l,
    c,
    x,
    S,
    W,
    T,
    D,
    q,
    P,
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
    subscribe: Ie(t, e).subscribe
  };
}
function Ie(t, e = A) {
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
  function i(l, c = A) {
    const s = [l, c];
    return r.add(s), r.size === 1 && (n = e(o) || A), l(t), () => {
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
    let s = 0, u = A;
    const f = () => {
      if (s)
        return;
      u();
      const h = e(r ? c[0] : c, i);
      a ? i(h) : u = me(h) ? h : A;
    }, m = o.map((h, v) => zn(h, (b) => {
      c[v] = b, s &= ~(1 << v), l && f();
    }, () => {
      s |= 1 << v;
    }));
    return l = !0, f(), function() {
      mt(m), u();
    };
  });
}
const wt = Ie(!1);
function wa(t) {
  let e;
  return {
    c() {
      e = V("path"), d(e, "fill-rule", "evenodd"), d(e, "d", "M2 10c0-3.967 3.69-7 8-7 4.31 0 8 3.033 8 7s-3.69 7-8 7a9.165 9.165 0 01-1.504-.123 5.976 5.976 0 01-3.935 1.107.75.75 0 01-.584-1.143 3.478 3.478 0 00.522-1.756C2.979 13.825 2 12.025 2 10z"), d(e, "clip-rule", "evenodd");
    },
    m(n, r) {
      U(n, e, r);
    },
    d(n) {
      n && L(e);
    }
  };
}
function ba(t) {
  let e;
  return {
    c() {
      e = V("path"), d(e, "d", "M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z");
    },
    m(n, r) {
      U(n, e, r);
    },
    d(n) {
      n && L(e);
    }
  };
}
function ya(t) {
  let e, n, r, o;
  return {
    c() {
      e = C("span"), e.textContent = "Comment", n = E(), r = C("code"), o = F("c"), d(r, "class", sr);
    },
    m(a, i) {
      U(a, e, i), U(a, n, i), U(a, r, i), p(r, o);
    },
    p: A,
    d(a) {
      a && L(e), a && L(n), a && L(r);
    }
  };
}
function xa(t) {
  let e, n, r, o;
  return {
    c() {
      e = C("span"), e.textContent = "Close comments", n = E(), r = C("code"), o = F("esc"), d(r, "class", sr);
    },
    m(a, i) {
      U(a, e, i), U(a, n, i), U(a, r, i), p(r, o);
    },
    p: A,
    d(a) {
      a && L(e), a && L(n), a && L(r);
    }
  };
}
function _a(t) {
  let e, n, r, o, a, i, l;
  function c(v, b) {
    return v[0] ? ba : wa;
  }
  let s = c(t), u = s(t);
  function f(v, b) {
    return v[0] ? xa : ya;
  }
  let m = f(t), h = m(t);
  return {
    c() {
      e = C("button"), n = V("svg"), u.c(), r = E(), o = C("span"), h.c(), d(n, "xmlns", "http://www.w3.org/2000/svg"), d(n, "viewBox", "0 0 20 20"), d(n, "fill", "currentColor"), d(n, "class", "spd-w-5 spd-h-5 spd-mr-2 spd-flex-shrink-0"), d(o, "class", "spd-flex spd-items-center"), d(e, "class", a = "spd-flex spd-items-center spd-fixed spd-bottom-8 spd-left-1/2 spd-bg-black spd-rounded-full -spd-translate-x-1/2 spd-pl-5 spd-pr-6 spd-h-11 !spd-z-[99999] spd-shadow-md spd-border spd-border-zinc-600 spd-font-sans spd-text-base spd-transition-colors focus:spd-ring-2 focus:spd-ring-zinc-900/60 hover:spd-text-white " + (t[0] ? "spd-text-white" : "spd-text-zinc-500")), d(e, "data-ignore-cursor", "");
    },
    m(v, b) {
      U(v, e, b), p(e, n), u.m(n, null), p(e, r), p(e, o), h.m(o, null), i || (l = ut(e, "click", t[1]), i = !0);
    },
    p(v, [b]) {
      s !== (s = c(v)) && (u.d(1), u = s(v), u && (u.c(), u.m(n, null))), m === (m = f(v)) && h ? h.p(v, b) : (h.d(1), h = m(v), h && (h.c(), h.m(o, null))), b & 1 && a !== (a = "spd-flex spd-items-center spd-fixed spd-bottom-8 spd-left-1/2 spd-bg-black spd-rounded-full -spd-translate-x-1/2 spd-pl-5 spd-pr-6 spd-h-11 !spd-z-[99999] spd-shadow-md spd-border spd-border-zinc-600 spd-font-sans spd-text-base spd-transition-colors focus:spd-ring-2 focus:spd-ring-zinc-900/60 hover:spd-text-white " + (v[0] ? "spd-text-white" : "spd-text-zinc-500")) && d(e, "class", a);
    },
    i: A,
    o: A,
    d(v) {
      v && L(e), u.d(), h.d(), i = !1, l();
    }
  };
}
const sr = "spd-text-xs spd-ml-3 spd-text-zinc-500 spd-rounded spd-p-1 spd-leading-none spd-shadow-sm spd-bg-zinc-900 spd-border spd-border-zinc-700";
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
const lr = Ie([]), Ta = va(lr, (t) => t.length);
function Ln(t) {
  let e, n, r, o, a, i, l = t[6] + 1 + "", c, s, u, f, m, h, v, b, w, g, _, x, S;
  function M(T, D) {
    return T[4] ? Ma : Oa;
  }
  let Y = M(t), W = Y(t);
  return {
    c() {
      e = C("div"), n = V("svg"), r = V("path"), o = V("path"), a = E(), i = C("span"), c = F(l), s = E(), u = C("form"), f = C("textarea"), m = E(), h = C("div"), v = C("button"), v.textContent = "Cancel", b = E(), w = C("button"), g = C("span"), g.textContent = "Post", _ = E(), W.c(), d(r, "d", "M22 44C34.1503 44 44 34.1503 44 22C44 9.84974 34.1503 0 22 0H0V22C0 34.1503 9.84974 44 22 44Z"), d(r, "fill", "black"), d(o, "fill-rule", "evenodd"), d(o, "clip-rule", "evenodd"), d(o, "d", "M22 41.25C32.6315 41.25 41.25 32.6315 41.25 22C41.25 11.3685 32.6315 2.75 22 2.75H2.75V22C2.75 32.6315 11.3685 41.25 22 41.25ZM44 22C44 34.1503 34.1503 44 22 44C9.84974 44 0 34.1503 0 22V0H22C34.1503 0 44 9.84974 44 22Z"), d(o, "fill", "white"), d(n, "class", "spd-w-8 spd-h-8"), d(n, "viewBox", "0 0 44 44"), d(n, "fill", "none"), d(n, "xmlns", "http://www.w3.org/2000/svg"), d(i, "class", "spd-absolute spd-left-1/2 spd-top-1/2 -spd-translate-x-1/2 -spd-translate-y-1/2 spd-text-xs spd-text-white"), d(e, "class", "spd-absolute spd-top-0 spd-left-0 spd-transition !spd-cursor-auto !spd-z-[999999]"), d(e, "data-ignore-cursor", ""), k(e, "spd-opacity-0", !t[3]), k(e, "spd-scale-150", !t[3]), k(e, "spd-opacity-100", t[3]), k(e, "spd-scale-100", t[3]), d(f, "class", "spd-px-5 spd-pt-4 spd-pb-3 spd-rounded-md spd-transition-colors spd-bg-black spd-resize-none spd-appearance-none placeholder:spd-text-zinc-500 focus:spd-outline-none focus:placeholder:spd-text-zinc-700 spd-text-base"), d(f, "placeholder", "Add a comment..."), d(f, "rows", "3"), d(v, "type", "button"), d(v, "class", "spd-px-3 spd-py-2 spd-transition-colors spd-space-x-1.5 spd-border spd-border-zinc-800 spd-text-zinc-500 spd-rounded-md hover:spd-text-white hover:spd-bg-zinc-800 spd-text-sm spd-flex spd-items-center"), d(w, "type", "submit"), w.disabled = t[4], d(w, "class", "spd-px-3 spd-py-2 spd-transition-colors spd-space-x-1.5 spd-border spd-border-zinc-700 spd-text-white spd-rounded-md hover:spd-bg-zinc-800 spd-text-sm spd-flex spd-items-center"), d(h, "class", "spd-flex spd-items-center spd-px-5 spd-py-3 spd-space-x-3 spd-self-end"), d(u, "class", "spd-flex spd-flex-col spd-w-full spd-max-w-xs spd-shadow-lg spd-border spd-border-zinc-600 spd-bg-black spd-rounded-md spd-text-white spd-absolute spd-transition !spd-cursor-auto spd-top-0 spd-left-0 spd-delay-100 spd-duration-300 spd-ease-out !spd-z-[999999]"), d(u, "data-ignore-cursor", ""), k(u, "spd-pointer-events-none", !t[3]), k(u, "spd-opacity-0", !t[3]), k(u, "spd-translate-y-2", !t[3]), k(u, "spd-pointer-events-auto", t[3]), k(u, "spd-opacity-100", t[3]), k(u, "spd-translate-y-0", t[3]);
    },
    m(T, D) {
      U(T, e, D), p(e, n), p(n, r), p(n, o), p(e, a), p(e, i), p(i, c), t[10](e), U(T, s, D), U(T, u, D), p(u, f), vn(f, t[0]), p(u, m), p(u, h), p(h, v), p(h, b), p(h, w), p(w, g), p(w, _), W.m(w, null), t[12](u), x || (S = [
        ut(f, "input", t[11]),
        ut(v, "click", t[8]),
        ut(u, "submit", vr(t[9]))
      ], x = !0);
    },
    p(T, D) {
      D & 64 && l !== (l = T[6] + 1 + "") && Q(c, l), D & 8 && k(e, "spd-opacity-0", !T[3]), D & 8 && k(e, "spd-scale-150", !T[3]), D & 8 && k(e, "spd-opacity-100", T[3]), D & 8 && k(e, "spd-scale-100", T[3]), D & 1 && vn(f, T[0]), Y !== (Y = M(T)) && (W.d(1), W = Y(T), W && (W.c(), W.m(w, null))), D & 16 && (w.disabled = T[4]), D & 8 && k(u, "spd-pointer-events-none", !T[3]), D & 8 && k(u, "spd-opacity-0", !T[3]), D & 8 && k(u, "spd-translate-y-2", !T[3]), D & 8 && k(u, "spd-pointer-events-auto", T[3]), D & 8 && k(u, "spd-opacity-100", T[3]), D & 8 && k(u, "spd-translate-y-0", T[3]);
    },
    d(T) {
      T && L(e), t[10](null), T && L(s), T && L(u), W.d(), t[12](null), x = !1, mt(S);
    }
  };
}
function Oa(t) {
  let e, n;
  return {
    c() {
      e = V("svg"), n = V("path"), d(n, "d", "M3.105 2.289a.75.75 0 00-.826.95l1.414 4.925A1.5 1.5 0 005.135 9.25h6.115a.75.75 0 010 1.5H5.135a1.5 1.5 0 00-1.442 1.086l-1.414 4.926a.75.75 0 00.826.95 28.896 28.896 0 0015.293-7.154.75.75 0 000-1.115A28.897 28.897 0 003.105 2.289z"), d(e, "xmlns", "http://www.w3.org/2000/svg"), d(e, "viewBox", "0 0 20 20"), d(e, "fill", "currentColor"), d(e, "class", "spd-w-4 spd-h-4");
    },
    m(r, o) {
      U(r, e, o), p(e, n);
    },
    d(r) {
      r && L(e);
    }
  };
}
function Ma(t) {
  let e, n;
  return {
    c() {
      e = V("svg"), n = V("path"), d(n, "d", "M4.5 12.5C4.5 16.9183 8.08172 20.5 12.5 20.5C16.9183 20.5 20.5 16.9183 20.5 12.5C20.5 8.08172 16.9183 4.5 12.5 4.5"), d(n, "stroke", "#9CA3AF"), d(n, "stroke-width", "1.2"), d(e, "class", "spd-animate-spin spd-w-5 spd-h-5"), d(e, "viewBox", "0 0 25 25"), d(e, "fill", "none"), d(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(r, o) {
      U(r, e, o), p(e, n);
    },
    d(r) {
      r && L(e);
    }
  };
}
function Da(t) {
  let e, n, r, o = t[5] && Ln(t);
  return {
    c() {
      o && o.c(), e = Bn();
    },
    m(a, i) {
      o && o.m(a, i), U(a, e, i), n || (r = ut(window, "click", t[7], !0), n = !0);
    },
    p(a, [i]) {
      a[5] ? o ? o.p(a, i) : (o = Ln(a), o.c(), o.m(e.parentNode, e)) : o && (o.d(1), o = null);
    },
    i: A,
    o: A,
    d(a) {
      o && o.d(a), a && L(e), n = !1, r();
    }
  };
}
const Pa = 300;
function Ea(t, e, n) {
  let r, o;
  se(t, wt, (g) => n(5, r = g)), se(t, Ta, (g) => n(6, o = g));
  let a = "", i, l, c = !1, s = !1;
  const u = async ({ clientX: g, clientY: _ }) => {
    const x = {
      getBoundingClientRect() {
        return {
          width: 0,
          height: 0,
          x: g,
          y: _,
          top: _,
          left: g,
          right: g,
          bottom: _
        };
      },
      getClientRects() {
        return [];
      }
    }, { x: S, y: M } = await pe(x, l, {
      placement: "right-start",
      middleware: [de()]
    });
    Object.assign(l.style, { left: `${S}px`, top: `${M}px` });
    const { x: Y, y: W } = await pe(l, i, {
      placement: "right-start",
      middleware: [de(), Le(8), We(), Ne({ padding: 8 })]
    });
    Object.assign(i.style, { left: `${Y}px`, top: `${W}px` });
  }, f = (g) => {
    const _ = i && i.contains(g.target);
    !r || _ || (u(g), c || (n(1, i.style.display = "", i), n(3, c = !0)), g.target.closest("a, button, [role='button']") && g.preventDefault());
  }, m = () => {
    c && (n(3, c = !1), setTimeout(
      () => {
        n(1, i.style.display = "none", i);
      },
      Pa
    ));
  }, h = async () => {
    n(4, s = !0);
    try {
      await fetch("", { method: "POST" });
    } catch (g) {
      console.log(g);
    } finally {
      n(4, s = !1);
    }
  };
  function v(g) {
    ct[g ? "unshift" : "push"](() => {
      l = g, n(2, l);
    });
  }
  function b() {
    a = this.value, n(0, a);
  }
  function w(g) {
    ct[g ? "unshift" : "push"](() => {
      i = g, n(1, i);
    });
  }
  return [
    a,
    i,
    l,
    c,
    s,
    r,
    o,
    f,
    m,
    h,
    v,
    b,
    w
  ];
}
class Sa extends we {
  constructor(e) {
    super(), ve(this, e, Ea, Da, Tt, {});
  }
}
const { window: Aa } = Tr;
function Nn(t, e, n) {
  const r = t.slice();
  return r[4] = e[n], r;
}
function Ra(t) {
  return {
    c: A,
    m: A,
    p: A,
    i: A,
    o: A,
    d: A
  };
}
function Wa(t) {
  let e, n, r = t[3], o = [];
  for (let i = 0; i < r.length; i += 1)
    o[i] = Un(Nn(t, r, i));
  const a = (i) => at(o[i], 1, 1, () => {
    o[i] = null;
  });
  return {
    c() {
      for (let i = 0; i < o.length; i += 1)
        o[i].c();
      e = Bn();
    },
    m(i, l) {
      for (let c = 0; c < o.length; c += 1)
        o[c].m(i, l);
      U(i, e, l), n = !0;
    },
    p(i, l) {
      if (l & 2) {
        r = i[3];
        let c;
        for (c = 0; c < r.length; c += 1) {
          const s = Nn(i, r, c);
          o[c] ? (o[c].p(s, l), G(o[c], 1)) : (o[c] = Un(s), o[c].c(), G(o[c], 1), o[c].m(e.parentNode, e));
        }
        for (Ye(), c = r.length; c < o.length; c += 1)
          a(c);
        Fe();
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
      gr(o, i), i && L(e);
    }
  };
}
function Un(t) {
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
      ze(e.$$.fragment);
    },
    m(r, o) {
      he(e, r, o), n = !0;
    },
    p: A,
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
    c: A,
    m: A,
    p: A,
    i: A,
    o: A,
    d: A
  };
}
function Yn(t) {
  let e, n;
  return e = new Sa({}), {
    c() {
      ze(e.$$.fragment);
    },
    m(r, o) {
      he(e, r, o), n = !0;
    },
    p: A,
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
  let s = Yn();
  return o = new ka({}), {
    c() {
      c.block.c(), e = E(), s.c(), r = E(), ze(o.$$.fragment);
    },
    m(u, f) {
      c.block.m(u, c.anchor = f), c.mount = () => e.parentNode, c.anchor = e, U(u, e, f), s.m(u, f), U(u, r, f), he(o, u, f), a = !0, i || (l = ut(Aa, "keydown", t[2]), i = !0);
    },
    p(u, [f]) {
      t = u, kr(c, t, f), f & 1 && Tt(n, n = t[0]) ? (Ye(), at(s, 1, 1, A), Fe(), s = Yn(), s.c(), G(s, 1), s.m(r.parentNode, r)) : s.p(t, f);
    },
    i(u) {
      a || (G(c.block), G(s), G(o.$$.fragment, u), a = !0);
    },
    o(u) {
      for (let f = 0; f < 3; f += 1) {
        const m = c.blocks[f];
        at(m);
      }
      at(s), at(o.$$.fragment, u), a = !1;
    },
    d(u) {
      c.block.d(u), c.token = null, c = null, u && L(e), s.d(u), u && L(r), ge(o, u), i = !1, l();
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
        return lr.set(s), s;
    } catch (c) {
      throw console.log(c), new Error("Oops, couldn't fetch comments from database.");
    }
  }, a = (i) => {
    i.keyCode === 67 && !r && wt.set(!0), i.keyCode === 27 && r && wt.set(!1);
  };
  return wt.subscribe((i) => {
    i ? document.documentElement.classList.add("spd-cursor") : document.documentElement.classList.remove("spd-cursor");
  }), br(() => {
    document.documentElement.style.position = "relative";
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
