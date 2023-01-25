function S() {
}
function pr(t) {
  return t && typeof t == "object" && typeof t.then == "function";
}
function Fn(t) {
  return t();
}
function mn() {
  return /* @__PURE__ */ Object.create(null);
}
function pt(t) {
  t.forEach(Fn);
}
function fe(t) {
  return typeof t == "function";
}
function Tt(t, e) {
  return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function";
}
function mr(t) {
  return Object.keys(t).length === 0;
}
function Yn(t, ...e) {
  if (t == null)
    return S;
  const n = t.subscribe(...e);
  return n.unsubscribe ? () => n.unsubscribe() : n;
}
function se(t, e, n) {
  t.$$.on_destroy.push(Yn(e, n));
}
function hn(t) {
  return t && fe(t.destroy) ? t.destroy : S;
}
function m(t, e) {
  t.appendChild(e);
}
function N(t, e, n) {
  t.insertBefore(e, n || null);
}
function L(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function hr(t, e) {
  for (let n = 0; n < t.length; n += 1)
    t[n] && t[n].d(e);
}
function _(t) {
  return document.createElement(t);
}
function V(t) {
  return document.createElementNS("http://www.w3.org/2000/svg", t);
}
function z(t) {
  return document.createTextNode(t);
}
function D() {
  return z(" ");
}
function zn() {
  return z("");
}
function ct(t, e, n, r) {
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
function A(t, e, n) {
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
const Pt = [], gt = [], re = [], vn = [], yr = Promise.resolve();
let De = !1;
function xr() {
  De || (De = !0, yr.then(Ne));
}
function Pe(t) {
  re.push(t);
}
const Oe = /* @__PURE__ */ new Set();
let ee = 0;
function Ne() {
  const t = Et;
  do {
    for (; ee < Pt.length; ) {
      const e = Pt[ee];
      ee++, ot(e), _r(e.$$);
    }
    for (ot(null), Pt.length = 0, ee = 0; gt.length; )
      gt.pop()();
    for (let e = 0; e < re.length; e += 1) {
      const n = re[e];
      Oe.has(n) || (Oe.add(n), n());
    }
    re.length = 0;
  } while (Pt.length);
  for (; vn.length; )
    vn.pop()();
  De = !1, Oe.clear(), ot(t);
}
function _r(t) {
  if (t.fragment !== null) {
    t.update(), pt(t.before_update);
    const e = t.dirty;
    t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(Pe);
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
function Fe() {
  vt.r || pt(vt.c), vt = vt.p;
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
    e.block && (e.blocks ? e.blocks.forEach((d, p) => {
      p !== a && d && (Ue(), at(d, 1, 1, () => {
        e.blocks[p] === d && (e.blocks[p] = null);
      }), Fe());
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
function Ye(t) {
  t && t.c();
}
function pe(t, e, n, r) {
  const { fragment: o, after_update: a } = t.$$;
  o && o.m(e, n), r || Pe(() => {
    const i = t.$$.on_mount.map(Fn).filter(fe);
    t.$$.on_destroy ? t.$$.on_destroy.push(...i) : pt(i), t.$$.on_mount = [];
  }), a.forEach(Pe);
}
function me(t, e) {
  const n = t.$$;
  n.fragment !== null && (pt(n.on_destroy), n.fragment && n.fragment.d(e), n.on_destroy = n.fragment = null, n.ctx = []);
}
function Or(t, e) {
  t.$$.dirty[0] === -1 && (Pt.push(t), xr(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function he(t, e, n, r, o, a, i, l = [-1]) {
  const c = Et;
  ot(t);
  const s = t.$$ = {
    fragment: null,
    ctx: [],
    props: a,
    update: S,
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
  if (s.ctx = n ? n(t, e.props || {}, (d, p, ...h) => {
    const g = h.length ? h[0] : p;
    return s.ctx && o(s.ctx[d], s.ctx[d] = g) && (!s.skip_bound && s.bound[d] && s.bound[d](g), f && Or(t, d)), p;
  }) : [], s.update(), f = !0, pt(s.before_update), s.fragment = r ? r(s.ctx) : !1, e.target) {
    if (e.hydrate) {
      const d = vr(e.target);
      s.fragment && s.fragment.l(d), d.forEach(L);
    } else
      s.fragment && s.fragment.c();
    e.intro && G(t.$$.fragment), pe(t, e.target, e.anchor, e.customElement), Ne();
  }
  ot(c);
}
class ge {
  $destroy() {
    me(this, 1), this.$destroy = S;
  }
  $on(e, n) {
    if (!fe(n))
      return S;
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
function ut(t) {
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
function j(t) {
  q(1, arguments);
  var e = Object.prototype.toString.call(t);
  return t instanceof Date || ae(t) === "object" && e === "[object Date]" ? new Date(t.getTime()) : typeof t == "number" || e === "[object Number]" ? new Date(t) : ((typeof t == "string" || e === "[object String]") && typeof console < "u" && (console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"), console.warn(new Error().stack)), new Date(NaN));
}
function Dr(t, e) {
  q(2, arguments);
  var n = j(t).getTime(), r = ut(e);
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
  var e = j(t);
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
  var e = j(t);
  return !isNaN(Number(e));
}
function Se(t, e) {
  q(2, arguments);
  var n = ut(e);
  return Dr(t, -n);
}
var Wr = 864e5;
function Lr(t) {
  q(1, arguments);
  var e = j(t), n = e.getTime();
  e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
  var r = e.getTime(), o = n - r;
  return Math.floor(o / Wr) + 1;
}
function le(t) {
  q(1, arguments);
  var e = 1, n = j(t), r = n.getUTCDay(), o = (r < e ? 7 : 0) + r - e;
  return n.setUTCDate(n.getUTCDate() - o), n.setUTCHours(0, 0, 0, 0), n;
}
function Hn(t) {
  q(1, arguments);
  var e = j(t), n = e.getUTCFullYear(), r = new Date(0);
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
function Fr(t) {
  q(1, arguments);
  var e = j(t), n = le(e).getTime() - Nr(e).getTime();
  return Math.round(n / Ur) + 1;
}
function ce(t, e) {
  var n, r, o, a, i, l, c, s;
  q(1, arguments);
  var f = Nt(), d = ut((n = (r = (o = (a = e == null ? void 0 : e.weekStartsOn) !== null && a !== void 0 ? a : e == null || (i = e.locale) === null || i === void 0 || (l = i.options) === null || l === void 0 ? void 0 : l.weekStartsOn) !== null && o !== void 0 ? o : f.weekStartsOn) !== null && r !== void 0 ? r : (c = f.locale) === null || c === void 0 || (s = c.options) === null || s === void 0 ? void 0 : s.weekStartsOn) !== null && n !== void 0 ? n : 0);
  if (!(d >= 0 && d <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var p = j(t), h = p.getUTCDay(), g = (h < d ? 7 : 0) + h - d;
  return p.setUTCDate(p.getUTCDate() - g), p.setUTCHours(0, 0, 0, 0), p;
}
function Vn(t, e) {
  var n, r, o, a, i, l, c, s;
  q(1, arguments);
  var f = j(t), d = f.getUTCFullYear(), p = Nt(), h = ut((n = (r = (o = (a = e == null ? void 0 : e.firstWeekContainsDate) !== null && a !== void 0 ? a : e == null || (i = e.locale) === null || i === void 0 || (l = i.options) === null || l === void 0 ? void 0 : l.firstWeekContainsDate) !== null && o !== void 0 ? o : p.firstWeekContainsDate) !== null && r !== void 0 ? r : (c = p.locale) === null || c === void 0 || (s = c.options) === null || s === void 0 ? void 0 : s.firstWeekContainsDate) !== null && n !== void 0 ? n : 1);
  if (!(h >= 1 && h <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var g = new Date(0);
  g.setUTCFullYear(d + 1, 0, h), g.setUTCHours(0, 0, 0, 0);
  var v = ce(g, e), w = new Date(0);
  w.setUTCFullYear(d, 0, h), w.setUTCHours(0, 0, 0, 0);
  var b = ce(w, e);
  return f.getTime() >= v.getTime() ? d + 1 : f.getTime() >= b.getTime() ? d : d - 1;
}
function Yr(t, e) {
  var n, r, o, a, i, l, c, s;
  q(1, arguments);
  var f = Nt(), d = ut((n = (r = (o = (a = e == null ? void 0 : e.firstWeekContainsDate) !== null && a !== void 0 ? a : e == null || (i = e.locale) === null || i === void 0 || (l = i.options) === null || l === void 0 ? void 0 : l.firstWeekContainsDate) !== null && o !== void 0 ? o : f.firstWeekContainsDate) !== null && r !== void 0 ? r : (c = f.locale) === null || c === void 0 || (s = c.options) === null || s === void 0 ? void 0 : s.firstWeekContainsDate) !== null && n !== void 0 ? n : 1), p = Vn(t, e), h = new Date(0);
  h.setUTCFullYear(p, 0, d), h.setUTCHours(0, 0, 0, 0);
  var g = ce(h, e);
  return g;
}
var zr = 6048e5;
function Br(t, e) {
  q(1, arguments);
  var n = j(t), r = ce(n, e).getTime() - Yr(n, e).getTime();
  return Math.round(r / zr) + 1;
}
function W(t, e) {
  for (var n = t < 0 ? "-" : "", r = Math.abs(t).toString(); r.length < e; )
    r = "0" + r;
  return n + r;
}
var Hr = {
  y: function(e, n) {
    var r = e.getUTCFullYear(), o = r > 0 ? r : 1 - r;
    return W(n === "yy" ? o % 100 : o, n.length);
  },
  M: function(e, n) {
    var r = e.getUTCMonth();
    return n === "M" ? String(r + 1) : W(r + 1, 2);
  },
  d: function(e, n) {
    return W(e.getUTCDate(), n.length);
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
    return W(e.getUTCHours() % 12 || 12, n.length);
  },
  H: function(e, n) {
    return W(e.getUTCHours(), n.length);
  },
  m: function(e, n) {
    return W(e.getUTCMinutes(), n.length);
  },
  s: function(e, n) {
    return W(e.getUTCSeconds(), n.length);
  },
  S: function(e, n) {
    var r = n.length, o = e.getUTCMilliseconds(), a = Math.floor(o * Math.pow(10, r - 3));
    return W(a, n.length);
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
      return W(l, 2);
    }
    return n === "Yo" ? r.ordinalNumber(i, {
      unit: "year"
    }) : W(i, n.length);
  },
  R: function(e, n) {
    var r = Hn(e);
    return W(r, n.length);
  },
  u: function(e, n) {
    var r = e.getUTCFullYear();
    return W(r, n.length);
  },
  Q: function(e, n, r) {
    var o = Math.ceil((e.getUTCMonth() + 1) / 3);
    switch (n) {
      case "Q":
        return String(o);
      case "QQ":
        return W(o, 2);
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
        return W(o, 2);
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
        return W(o + 1, 2);
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
    }) : W(a, n.length);
  },
  I: function(e, n, r) {
    var o = Fr(e);
    return n === "Io" ? r.ordinalNumber(o, {
      unit: "week"
    }) : W(o, n.length);
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
    }) : W(o, n.length);
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
        return W(i, 2);
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
        return W(i, n.length);
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
        return W(a, n.length);
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
    }) : W(o, n.length);
  },
  k: function(e, n, r) {
    var o = e.getUTCHours();
    return o === 0 && (o = 24), n === "ko" ? r.ordinalNumber(o, {
      unit: "hour"
    }) : W(o, n.length);
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
        return yn(i);
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
        return "GMT" + bn(i, ":");
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
        return "GMT" + bn(i, ":");
      case "zzzz":
      default:
        return "GMT" + ht(i, ":");
    }
  },
  t: function(e, n, r, o) {
    var a = o._originalDate || e, i = Math.floor(a.getTime() / 1e3);
    return W(i, n.length);
  },
  T: function(e, n, r, o) {
    var a = o._originalDate || e, i = a.getTime();
    return W(i, n.length);
  }
};
function bn(t, e) {
  var n = t > 0 ? "-" : "+", r = Math.abs(t), o = Math.floor(r / 60), a = r % 60;
  if (a === 0)
    return n + String(o);
  var i = e || "";
  return n + String(o) + i + W(a, 2);
}
function yn(t, e) {
  if (t % 60 === 0) {
    var n = t > 0 ? "-" : "+";
    return n + W(Math.abs(t) / 60, 2);
  }
  return ht(t, e);
}
function ht(t, e) {
  var n = e || "", r = t > 0 ? "-" : "+", o = Math.abs(t), a = W(Math.floor(o / 60), 2), i = W(o % 60, 2);
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
}, $r = {
  p: In,
  P: qr
};
const jr = $r;
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
function Me(t) {
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
  date: Me({
    formats: eo,
    defaultWidth: "full"
  }),
  time: Me({
    formats: no,
    defaultWidth: "full"
  }),
  dateTime: Me({
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
var Uo = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, Fo = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, Yo = /^'([^]*?)'?$/, zo = /''/g, Bo = /[a-zA-Z]/;
function Ho(t, e, n) {
  var r, o, a, i, l, c, s, f, d, p, h, g, v, w, b, y, C, M;
  q(2, arguments);
  var O = String(e), Y = Nt(), U = (r = (o = n == null ? void 0 : n.locale) !== null && o !== void 0 ? o : Y.locale) !== null && r !== void 0 ? r : qn, F = ut((a = (i = (l = (c = n == null ? void 0 : n.firstWeekContainsDate) !== null && c !== void 0 ? c : n == null || (s = n.locale) === null || s === void 0 || (f = s.options) === null || f === void 0 ? void 0 : f.firstWeekContainsDate) !== null && l !== void 0 ? l : Y.firstWeekContainsDate) !== null && i !== void 0 ? i : (d = Y.locale) === null || d === void 0 || (p = d.options) === null || p === void 0 ? void 0 : p.firstWeekContainsDate) !== null && a !== void 0 ? a : 1);
  if (!(F >= 1 && F <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var P = ut((h = (g = (v = (w = n == null ? void 0 : n.weekStartsOn) !== null && w !== void 0 ? w : n == null || (b = n.locale) === null || b === void 0 || (y = b.options) === null || y === void 0 ? void 0 : y.weekStartsOn) !== null && v !== void 0 ? v : Y.weekStartsOn) !== null && g !== void 0 ? g : (C = Y.locale) === null || C === void 0 || (M = C.options) === null || M === void 0 ? void 0 : M.weekStartsOn) !== null && h !== void 0 ? h : 0);
  if (!(P >= 0 && P <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  if (!U.localize)
    throw new RangeError("locale must contain localize property");
  if (!U.formatLong)
    throw new RangeError("locale must contain formatLong property");
  var T = j(t);
  if (!Rr(T))
    throw new RangeError("Invalid time value");
  var R = At(T), B = Se(T, R), x = {
    firstWeekContainsDate: F,
    weekStartsOn: P,
    locale: U,
    _originalDate: T
  }, I = O.match(Fo).map(function(H) {
    var $ = H[0];
    if ($ === "p" || $ === "P") {
      var J = jr[$];
      return J(H, U.formatLong);
    }
    return H;
  }).join("").match(Uo).map(function(H) {
    if (H === "''")
      return "'";
    var $ = H[0];
    if ($ === "'")
      return Vo(H);
    var J = Ir[$];
    if (J)
      return !(n != null && n.useAdditionalWeekYearTokens) && Jr(H) && _n(H, e, String(t)), !(n != null && n.useAdditionalDayOfYearTokens) && Gr(H) && _n(H, e, String(t)), J(B, H, U.localize, x);
    if ($.match(Bo))
      throw new RangeError("Format string contains an unescaped latin alphabet character `" + $ + "`");
    return H;
  }).join("");
  return I;
}
function Vo(t) {
  var e = t.match(Yo);
  return e ? e[1].replace(zo, "'") : t;
}
function Cn(t, e, n) {
  var r, o, a, i, l, c, s, f, d, p;
  q(2, arguments);
  var h = j(t), g = j(e), v = Nt(), w = (r = (o = n == null ? void 0 : n.locale) !== null && o !== void 0 ? o : v.locale) !== null && r !== void 0 ? r : qn, b = ut((a = (i = (l = (c = n == null ? void 0 : n.weekStartsOn) !== null && c !== void 0 ? c : n == null || (s = n.locale) === null || s === void 0 || (f = s.options) === null || f === void 0 ? void 0 : f.weekStartsOn) !== null && l !== void 0 ? l : v.weekStartsOn) !== null && i !== void 0 ? i : (d = v.locale) === null || d === void 0 || (p = d.options) === null || p === void 0 ? void 0 : p.weekStartsOn) !== null && a !== void 0 ? a : 0);
  if (!w.localize)
    throw new RangeError("locale must contain localize property");
  if (!w.formatLong)
    throw new RangeError("locale must contain formatLong property");
  if (!w.formatRelative)
    throw new RangeError("locale must contain formatRelative property");
  var y = Er(h, g);
  if (isNaN(y))
    throw new RangeError("Invalid time value");
  var C;
  y < -6 ? C = "other" : y < -1 ? C = "lastWeek" : y < 0 ? C = "yesterday" : y < 1 ? C = "today" : y < 2 ? C = "tomorrow" : y < 7 ? C = "nextWeek" : C = "other";
  var M = Se(h, At(h)), O = Se(g, At(g)), Y = w.formatRelative(C, M, O, {
    locale: w,
    weekStartsOn: b
  });
  return Ho(h, Y, {
    locale: w,
    weekStartsOn: b
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
function $n(t) {
  return t === "y" ? "height" : "width";
}
function kn(t, e, n) {
  let {
    reference: r,
    floating: o
  } = t;
  const a = r.x + r.width / 2 - o.width / 2, i = r.y + r.height / 2 - o.height / 2, l = Ut(e), c = $n(l), s = r[c] / 2 - o[c] / 2, f = bt(e), d = l === "x";
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
      p[l] -= s * (n && d ? -1 : 1);
      break;
    case "end":
      p[l] += s * (n && d ? -1 : 1);
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
  } = kn(s, r, c), p = r, h = {}, g = 0;
  for (let v = 0; v < l.length; v++) {
    const {
      name: w,
      fn: b
    } = l[v], {
      x: y,
      y: C,
      data: M,
      reset: O
    } = await b({
      x: f,
      y: d,
      initialPlacement: r,
      placement: p,
      strategy: o,
      middlewareData: h,
      rects: s,
      platform: i,
      elements: {
        reference: t,
        floating: e
      }
    });
    if (f = y ?? f, d = C ?? d, h = {
      ...h,
      [w]: {
        ...h[w],
        ...M
      }
    }, {}.NODE_ENV !== "production" && g > 50 && console.warn(["Floating UI: The middleware lifecycle appears to be running in an", "infinite loop. This is usually caused by a `reset` continually", "being returned without a break condition."].join(" ")), O && g <= 50) {
      g++, typeof O == "object" && (O.placement && (p = O.placement), O.rects && (s = O.rects === !0 ? await i.getElementRects({
        reference: t,
        floating: e,
        strategy: o
      }) : O.rects), {
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
function jn(t) {
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
    altBoundary: p = !1,
    padding: h = 0
  } = e, g = jn(h), w = l[p ? d === "floating" ? "reference" : "floating" : d], b = Rt(await a.getClippingRect({
    element: (n = await (a.isElement == null ? void 0 : a.isElement(w))) == null || n ? w : w.contextElement || await (a.getDocumentElement == null ? void 0 : a.getDocumentElement(l.floating)),
    boundary: s,
    rootBoundary: f,
    strategy: c
  })), y = d === "floating" ? {
    ...i.floating,
    x: r,
    y: o
  } : i.reference, C = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(l.floating)), M = await (a.isElement == null ? void 0 : a.isElement(C)) ? await (a.getScale == null ? void 0 : a.getScale(C)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, O = Rt(a.convertOffsetParentRelativeRectToViewportRelativeRect ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({
    rect: y,
    offsetParent: C,
    strategy: c
  }) : y);
  return {
    top: (b.top - O.top + g.top) / M.y,
    bottom: (O.bottom - b.bottom + g.bottom) / M.y,
    left: (b.left - O.left + g.left) / M.x,
    right: (O.right - b.right + g.right) / M.x
  };
}
const Qn = Math.min, Gn = Math.max;
function Tn(t, e, n) {
  return Gn(t, Qn(e, n));
}
const $o = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function ue(t) {
  return t.replace(/left|right|bottom|top/g, (e) => $o[e]);
}
function jo(t, e, n) {
  n === void 0 && (n = !1);
  const r = ze(t), o = Ut(t), a = $n(o);
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
const Ee = function(t) {
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
        flipAlignment: h = !0,
        ...g
      } = t, v = bt(r), b = d || (v === i || !h ? [ue(i)] : Qo(i)), y = [i, ...b], C = await Xn(e, g), M = [];
      let O = ((n = o.flip) == null ? void 0 : n.overflows) || [];
      if (s && M.push(C[v]), f) {
        const {
          main: P,
          cross: T
        } = jo(r, a, await (l.isRTL == null ? void 0 : l.isRTL(c.floating)));
        M.push(C[P], C[T]);
      }
      if (O = [...O, {
        placement: r,
        overflows: M
      }], !M.every((P) => P <= 0)) {
        var Y, U;
        const P = ((Y = (U = o.flip) == null ? void 0 : U.index) != null ? Y : 0) + 1, T = y[P];
        if (T)
          return {
            data: {
              index: P,
              overflows: O
            },
            reset: {
              placement: T
            }
          };
        let R = "bottom";
        switch (p) {
          case "bestFit": {
            var F;
            const B = (F = O.map((x) => [x, x.overflows.filter((I) => I > 0).reduce((I, H) => I + H, 0)]).sort((x, I) => x[1] - I[1])[0]) == null ? void 0 : F[0].placement;
            B && (R = B);
            break;
          }
          case "initialPlacement":
            R = i;
            break;
        }
        if (r !== R)
          return {
            reset: {
              placement: R
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
    mainAxis: p,
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
    y: p * s
  } : {
    x: p * s,
    y: h * f
  };
}
const Ae = function(t) {
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
const Re = function(t) {
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
              x: b,
              y
            } = w;
            return {
              x: b,
              y
            };
          }
        },
        ...c
      } = t, s = {
        x: n,
        y: r
      }, f = await Xn(e, c), d = Ut(bt(o)), p = Jo(d);
      let h = s[d], g = s[p];
      if (a) {
        const w = d === "y" ? "top" : "left", b = d === "y" ? "bottom" : "right", y = h + f[w], C = h - f[b];
        h = Tn(y, h, C);
      }
      if (i) {
        const w = p === "y" ? "top" : "left", b = p === "y" ? "bottom" : "right", y = g + f[w], C = g - f[b];
        g = Tn(y, g, C);
      }
      const v = l.fn({
        ...e,
        [d]: h,
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
}, We = function(t) {
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
      }) : a.reference), p = (n = await (i.getClientRects == null ? void 0 : i.getClientRects(o.reference))) != null ? n : [], h = jn(c);
      function g() {
        if (p.length === 2 && p[0].left > p[1].right && s != null && f != null) {
          var w;
          return (w = p.find((b) => s > b.left - h.left && s < b.right + h.right && f > b.top - h.top && f < b.bottom + h.bottom)) != null ? w : d;
        }
        if (p.length >= 2) {
          if (Ut(r) === "x") {
            const R = p[0], B = p[p.length - 1], x = bt(r) === "top", I = R.top, H = B.bottom, $ = x ? R.left : B.left, J = x ? R.right : B.right, yt = J - $, Ot = H - I;
            return {
              top: I,
              bottom: H,
              left: $,
              right: J,
              width: yt,
              height: Ot,
              x: $,
              y: I
            };
          }
          const b = bt(r) === "left", y = Gn(...p.map((R) => R.right)), C = Qn(...p.map((R) => R.left)), M = p.filter((R) => b ? R.left === C : R.right === y), O = M[0].top, Y = M[M.length - 1].bottom, U = C, F = y, P = F - U, T = Y - O;
          return {
            top: O,
            bottom: Y,
            left: U,
            right: F,
            width: P,
            height: T,
            x: U,
            y: O
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
function Z(t) {
  return X(t).getComputedStyle(t);
}
function dt(t) {
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
function ft(t) {
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
function ve(t) {
  const {
    overflow: e,
    overflowX: n,
    overflowY: r,
    display: o
  } = Z(t);
  return /auto|scroll|overlay|hidden|clip/.test(e + r + n) && !["inline", "contents"].includes(o);
}
function Ko(t) {
  return ["table", "td", "th"].includes(dt(t));
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
  return ["html", "body", "#document"].includes(dt(t));
}
const Dn = Math.min, St = Math.max, de = Math.round;
function tr(t) {
  const e = Z(t);
  let n = parseFloat(e.width), r = parseFloat(e.height);
  const o = t.offsetWidth, a = t.offsetHeight, i = de(n) !== o || de(r) !== a;
  return i && (n = o, r = a), {
    width: n,
    height: r,
    fallback: i
  };
}
function er(t) {
  return ft(t) ? t : t.contextElement;
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
  let i = (a ? de(n.width) : n.width) / r, l = (a ? de(n.height) : n.height) / o;
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
  e && (r ? ft(r) && (c = kt(r)) : c = kt(t));
  const s = l ? X(l) : window, f = !Zn() && n;
  let d = (i.left + (f && ((o = s.visualViewport) == null ? void 0 : o.offsetLeft) || 0)) / c.x, p = (i.top + (f && ((a = s.visualViewport) == null ? void 0 : a.offsetTop) || 0)) / c.y, h = i.width / c.x, g = i.height / c.y;
  if (l) {
    const v = X(l), w = r && ft(r) ? X(r) : r;
    let b = v.frameElement;
    for (; b && r && w !== v; ) {
      const y = kt(b), C = b.getBoundingClientRect(), M = getComputedStyle(b);
      C.x += (b.clientLeft + parseFloat(M.paddingLeft)) * y.x, C.y += (b.clientTop + parseFloat(M.paddingTop)) * y.y, d *= y.x, p *= y.y, h *= y.x, g *= y.y, d += C.x, p += C.y, b = X(b).frameElement;
    }
  }
  return {
    width: h,
    height: g,
    top: p,
    right: d + h,
    bottom: p + g,
    left: d,
    x: d,
    y: p
  };
}
function mt(t) {
  return ((Kn(t) ? t.ownerDocument : t.document) || window.document).documentElement;
}
function we(t) {
  return ft(t) ? {
    scrollLeft: t.scrollLeft,
    scrollTop: t.scrollTop
  } : {
    scrollLeft: t.pageXOffset,
    scrollTop: t.pageYOffset
  };
}
function rr(t) {
  return Wt(mt(t)).left + we(t).scrollLeft;
}
function Zo(t, e, n) {
  const r = it(e), o = mt(e), a = Wt(t, !0, n === "fixed", e);
  let i = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = {
    x: 0,
    y: 0
  };
  if (r || !r && n !== "fixed")
    if ((dt(e) !== "body" || ve(o)) && (i = we(e)), it(e)) {
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
  if (dt(t) === "html")
    return t;
  const e = t.assignedSlot || t.parentNode || (Mn(t) ? t.host : null) || mt(t);
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
  return n && (dt(n) === "html" || dt(n) === "body" && Z(n).position === "static" && !Be(n)) ? e : n || ta(t) || e;
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
  const o = it(n), a = mt(n);
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
  if ((o || !o && r !== "fixed") && ((dt(n) !== "body" || ve(a)) && (i = we(n)), it(n))) {
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
  const n = X(t), r = mt(t), o = n.visualViewport;
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
  const n = mt(t), r = we(t), o = (e = t.ownerDocument) == null ? void 0 : e.body, a = St(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), i = St(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0);
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
  return He(e) ? t.ownerDocument.body : it(e) && ve(e) ? e : or(e);
}
function ar(t, e) {
  var n;
  e === void 0 && (e = []);
  const r = or(t), o = r === ((n = t.ownerDocument) == null ? void 0 : n.body), a = X(r);
  return o ? e.concat(a, a.visualViewport || [], ve(r) ? r : []) : e.concat(r, ar(r));
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
  return e === "viewport" ? Rt(ra(t, n)) : ft(e) ? aa(e, n) : Rt(oa(mt(t)));
}
function ia(t, e) {
  const n = e.get(t);
  if (n)
    return n;
  let r = ar(t).filter((l) => ft(l) && dt(l) !== "body"), o = null;
  const a = Z(t).position === "fixed";
  let i = a ? Lt(t) : t;
  for (; ft(i) && !He(i); ) {
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
  isElement: ft,
  getDimensions: ea,
  getOffsetParent: Sn,
  getDocumentElement: mt,
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
}, Le = (t, e, n) => {
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
      e = _("button"), o.c(), u(e, "type", "button"), u(e, "class", "spd-px-3 spd-py-2 spd-transition-colors spd-space-x-1.5 spd-border spd-border-zinc-900 spd-text-zinc-500 spd-rounded-md hover:spd-text-white hover:spd-bg-zinc-900 spd-text-sm spd-flex spd-items-center spd-self-end");
    },
    m(a, i) {
      N(a, e, i), o.m(e, null);
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
      e = V("svg"), n = V("path"), u(n, "d", "M4.5 12.5C4.5 16.9183 8.08172 20.5 12.5 20.5C16.9183 20.5 20.5 16.9183 20.5 12.5C20.5 8.08172 16.9183 4.5 12.5 4.5"), u(n, "stroke", "#9CA3AF"), u(n, "stroke-width", "1.2"), u(e, "class", "spd-animate-spin spd-w-5 spd-h-5"), u(e, "viewBox", "0 0 25 25"), u(e, "fill", "none"), u(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(r, o) {
      N(r, e, o), m(e, n);
    },
    p: S,
    d(r) {
      r && L(e);
    }
  };
}
function da(t) {
  let e, n, r, o;
  return {
    c() {
      e = V("svg"), n = V("path"), r = D(), o = _("span"), o.textContent = "Resolve", u(n, "stroke-linecap", "round"), u(n, "stroke-linejoin", "round"), u(n, "stroke-width", "2"), u(n, "d", "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"), u(e, "xmlns", "http://www.w3.org/2000/svg"), u(e, "fill", "none"), u(e, "viewBox", "0 0 24 24"), u(e, "stroke", "currentColor"), u(e, "class", "spd-w-5 spd-h-5");
    },
    m(a, i) {
      N(a, e, i), m(e, n), N(a, r, i), N(a, o, i);
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
      e = V("svg"), n = V("path"), u(n, "fill-rule", "evenodd"), u(n, "d", "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"), u(n, "clip-rule", "evenodd"), u(e, "xmlns", "http://www.w3.org/2000/svg"), u(e, "viewBox", "0 0 20 20"), u(e, "fill", "currentColor"), u(e, "class", "spd-w-5 spd-h-5 spd-text-green-300");
    },
    m(r, o) {
      N(r, e, o), m(e, n);
    },
    d(r) {
      r && L(e);
    }
  };
}
function pa(t) {
  let e, n, r, o, a, i, l, c, s, f, d, p, h = Cn(new Date(t[5]), new Date()) + "", g, v, w, b, y, C, M, O, Y, U, F, P, T, R, B, x, I, H = " ", $, J, yt, Ot, Ie, tt, Ft, qe, lr = " ", $e, je, Yt, zt = t[4].userAgent + "", be, Xe, et, Bt, Qe, cr = " ", Ge, Je, Ht, Vt = t[4].platform + "", ye, Ke, nt, It, Ze, ur = " ", tn, en, xt, qt = t[4].screenWidth + "", xe, nn, $t = t[4].screenHeight + "", _e, rn, rt, jt, on, dr = " ", an, sn, Xt, Qt = t[4].devicePixelRatio + "", Ce, ln, st, Gt, cn, fr = " ", un, dn, Jt, Kt = t[4].language + "", ke, Te, fn;
  function pn(k, E) {
    return k[6] ? ua : ca;
  }
  let Zt = pn(t), K = Zt(t);
  return {
    c() {
      e = _("button"), n = V("svg"), r = V("path"), o = V("path"), a = D(), i = _("span"), l = z(t[7]), c = D(), s = _("div"), f = _("div"), d = _("div"), p = _("p"), g = z(h), v = D(), w = _("button"), w.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="spd-w-5 spd-h-5"><path fill-rule="evenodd" d="M2 4.25A2.25 2.25 0 014.25 2h11.5A2.25 2.25 0 0118 4.25v8.5A2.25 2.25 0 0115.75 15h-3.105a3.501 3.501 0 001.1 1.677A.75.75 0 0113.26 18H6.74a.75.75 0 01-.484-1.323A3.501 3.501 0 007.355 15H4.25A2.25 2.25 0 012 12.75v-8.5zm1.5 0a.75.75 0 01.75-.75h11.5a.75.75 0 01.75.75v7.5a.75.75 0 01-.75.75H4.25a.75.75 0 01-.75-.75v-7.5z" clip-rule="evenodd"></path></svg>', b = D(), y = _("button"), y.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="spd-w-5 spd-h-5"><path d="M3 10a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM8.5 10a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM15.5 8.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3z"></path></svg>', C = D(), M = _("div"), O = _("p"), Y = z(t[1]), F = D(), K.c(), P = D(), T = _("div"), R = _("dl"), B = _("div"), x = _("dt"), x.textContent = "Pathname:", I = D(), $ = z(H), J = D(), yt = _("dd"), Ot = z(t[2]), Ie = D(), tt = _("div"), Ft = _("dt"), Ft.textContent = "User Agent:", qe = D(), $e = z(lr), je = D(), Yt = _("dd"), be = z(zt), Xe = D(), et = _("div"), Bt = _("dt"), Bt.textContent = "Platform:", Qe = D(), Ge = z(cr), Je = D(), Ht = _("dd"), ye = z(Vt), Ke = D(), nt = _("div"), It = _("dt"), It.textContent = "Window size:", Ze = D(), tn = z(ur), en = D(), xt = _("dd"), xe = z(qt), nn = z(" x "), _e = z($t), rn = D(), rt = _("div"), jt = _("dt"), jt.textContent = "Device pixel ratio:", on = D(), an = z(dr), sn = D(), Xt = _("dd"), Ce = z(Qt), ln = D(), st = _("div"), Gt = _("dt"), Gt.textContent = "Language:", cn = D(), un = z(fr), dn = D(), Jt = _("dd"), ke = z(Kt), u(r, "d", "M22 44C34.1503 44 44 34.1503 44 22C44 9.84974 34.1503 0 22 0H0V22C0 34.1503 9.84974 44 22 44Z"), u(r, "fill", "black"), u(o, "fill-rule", "evenodd"), u(o, "clip-rule", "evenodd"), u(o, "d", "M22 41.25C32.6315 41.25 41.25 32.6315 41.25 22C41.25 11.3685 32.6315 2.75 22 2.75H2.75V22C2.75 32.6315 11.3685 41.25 22 41.25ZM44 22C44 34.1503 34.1503 44 22 44C9.84974 44 0 34.1503 0 22V0H22C34.1503 0 44 9.84974 44 22Z"), u(o, "fill", "white"), u(n, "class", "spd-w-8 spd-h-8"), u(n, "viewBox", "0 0 44 44"), u(n, "fill", "none"), u(n, "xmlns", "http://www.w3.org/2000/svg"), u(i, "class", "spd-absolute spd-left-1/2 spd-top-1/2 -spd-translate-x-1/2 -spd-translate-y-1/2 spd-text-xs spd-text-white"), u(e, "class", "spd-absolute spd-z-[99999] spd-transition-transform spd-origin-top-left spd-ease-out hover:spd-scale-125"), u(e, "type", "button"), A(e, "spd-scale-125", t[10]), te(e, "left", `${t[3].x * 100}%`), te(e, "top", `${t[3].y * 100}%`), u(p, "class", "spd-text-sm spd-text-zinc-500"), u(w, "type", "button"), u(w, "class", "spd-p-1.5 spd-rounded-md spd-transition-colors hover:spd-bg-zinc-900 spd-text-sm spd-flex spd-items-center spd-self-end"), u(w, "data-ignore-clickable", ""), A(w, "spd-text-zinc-500", !t[13]), A(w, "spd-text-white", t[13]), A(w, "spd-bg-zinc-900", t[13]), u(y, "type", "button"), u(y, "class", "spd-p-1.5 spd-rounded-md spd-text-zinc-500 hover:spd-bg-zinc-900 spd-transition-colors spd-text-sm spd-flex spd-items-center spd-self-end"), u(d, "class", "spd-flex spd-items-center spd-space-x-3 spd-self-end"), u(O, "class", U = "spd-text-base " + (t[0] ? "spd-text-zinc-600 spd-line-through" : "spd-text-zinc-200")), u(M, "class", "spd-pt-2 spd-pb-4 spd-pr-8"), u(f, "class", "spd-flex spd-flex-col"), u(s, "class", "spd-flex spd-flex-col spd-transition spd-delay-100 spd-duration-300 spd-ease-out spd-absolute spd-top-0 spd-left-0 spd-w-max spd-z-[999999] spd-shadow-lg spd-border spd-border-zinc-600 spd-bg-black spd-px-6 spd-py-3 spd-rounded-md spd-text-white"), u(s, "data-clickable", ""), A(s, "spd-opacity-0", !t[10]), A(s, "spd-translate-y-2", !t[10]), A(s, "spd-opacity-100", t[10]), A(s, "spd-translate-y-0", t[10]), u(x, "class", "spd-whitespace-nowrap spd-min-w-[120px]"), u(yt, "class", "spd-ml-3 spd-font-bold"), u(B, "class", "spd-flex"), u(Ft, "class", "spd-whitespace-nowrap spd-min-w-[120px]"), u(Yt, "class", "spd-ml-3 spd-font-bold"), u(tt, "class", "spd-flex"), u(Bt, "class", "spd-whitespace-nowrap spd-min-w-[120px]"), u(Ht, "class", "spd-ml-3 spd-font-bold"), u(et, "class", "spd-flex"), u(It, "class", "spd-whitespace-nowrap spd-min-w-[120px]"), u(xt, "class", "spd-ml-3 spd-font-bold"), u(nt, "class", "spd-flex"), u(jt, "class", "spd-whitespace-nowrap spd-min-w-[120px]"), u(Xt, "class", "spd-ml-3 spd-font-bold"), u(rt, "class", "spd-flex"), u(Gt, "class", "spd-whitespace-nowrap spd-min-w-[120px]"), u(Jt, "class", "spd-ml-3 spd-font-bold"), u(st, "class", "spd-flex"), u(R, "class", "spd-flex spd-flex-col spd-space-y-3 spd-text-sm spd-text-white"), u(T, "class", "spd-flex spd-max-w-sm spd-flex-col spd-transition spd-delay-200 spd-duration-300 spd-ease-out spd-absolute spd-top-0 spd-left-0 spd-w-max spd-z-[999999] spd-shadow-lg spd-border spd-border-zinc-800 spd-bg-black spd-px-5 spd-py-3 spd-rounded-md spd-text-white"), u(T, "data-clickable", ""), A(T, "spd-opacity-0", !t[13]), A(T, "spd-translate-y-2", !t[13]), A(T, "spd-opacity-100", t[13]), A(T, "spd-translate-y-0", t[13]);
    },
    m(k, E) {
      N(k, e, E), m(e, n), m(n, r), m(n, o), m(e, a), m(e, i), m(i, l), t[18](e), N(k, c, E), N(k, s, E), m(s, f), m(f, d), m(d, p), m(p, g), m(d, v), m(d, w), t[19](w), m(d, b), m(d, y), m(f, C), m(f, M), m(M, O), m(O, Y), m(s, F), K.m(s, null), t[20](s), N(k, P, E), N(k, T, E), m(T, R), m(R, B), m(B, x), m(B, I), m(B, $), m(B, J), m(B, yt), m(yt, Ot), m(B, Ie), m(R, tt), m(tt, Ft), m(tt, qe), m(tt, $e), m(tt, je), m(tt, Yt), m(Yt, be), m(tt, Xe), m(R, et), m(et, Bt), m(et, Qe), m(et, Ge), m(et, Je), m(et, Ht), m(Ht, ye), m(et, Ke), m(R, nt), m(nt, It), m(nt, Ze), m(nt, tn), m(nt, en), m(nt, xt), m(xt, xe), m(xt, nn), m(xt, _e), m(nt, rn), m(R, rt), m(rt, jt), m(rt, on), m(rt, an), m(rt, sn), m(rt, Xt), m(Xt, Ce), m(rt, ln), m(R, st), m(st, Gt), m(st, cn), m(st, un), m(st, dn), m(st, Jt), m(Jt, ke), t[21](T), Te || (fn = [
        ct(e, "click", t[15]),
        hn(An.call(null, e, t[14])),
        ct(w, "click", t[17]),
        hn(An.call(null, w, t[16]))
      ], Te = !0);
    },
    p(k, [E]) {
      E & 128 && Q(l, k[7]), E & 1024 && A(e, "spd-scale-125", k[10]), E & 8 && te(e, "left", `${k[3].x * 100}%`), E & 8 && te(e, "top", `${k[3].y * 100}%`), E & 32 && h !== (h = Cn(new Date(k[5]), new Date()) + "") && Q(g, h), E & 8192 && A(w, "spd-text-zinc-500", !k[13]), E & 8192 && A(w, "spd-text-white", k[13]), E & 8192 && A(w, "spd-bg-zinc-900", k[13]), E & 2 && Q(Y, k[1]), E & 1 && U !== (U = "spd-text-base " + (k[0] ? "spd-text-zinc-600 spd-line-through" : "spd-text-zinc-200")) && u(O, "class", U), Zt === (Zt = pn(k)) && K ? K.p(k, E) : (K.d(1), K = Zt(k), K && (K.c(), K.m(s, null))), E & 1024 && A(s, "spd-opacity-0", !k[10]), E & 1024 && A(s, "spd-translate-y-2", !k[10]), E & 1024 && A(s, "spd-opacity-100", k[10]), E & 1024 && A(s, "spd-translate-y-0", k[10]), E & 4 && Q(Ot, k[2]), E & 16 && zt !== (zt = k[4].userAgent + "") && Q(be, zt), E & 16 && Vt !== (Vt = k[4].platform + "") && Q(ye, Vt), E & 16 && qt !== (qt = k[4].screenWidth + "") && Q(xe, qt), E & 16 && $t !== ($t = k[4].screenHeight + "") && Q(_e, $t), E & 16 && Qt !== (Qt = k[4].devicePixelRatio + "") && Q(Ce, Qt), E & 16 && Kt !== (Kt = k[4].language + "") && Q(ke, Kt), E & 8192 && A(T, "spd-opacity-0", !k[13]), E & 8192 && A(T, "spd-translate-y-2", !k[13]), E & 8192 && A(T, "spd-opacity-100", k[13]), E & 8192 && A(T, "spd-translate-y-0", k[13]);
    },
    i: S,
    o: S,
    d(k) {
      k && L(e), t[18](null), k && L(c), k && L(s), t[19](null), K.d(), t[20](null), k && L(P), k && L(T), t[21](null), Te = !1, pt(fn);
    }
  };
}
const Rn = 300;
function ma(t, e, n) {
  let r, o, a = !1, i, l, c = !1, { resolved: s = !1 } = e, { text: f = "" } = e, { pathname: d = "" } = e, { position: p = { x: 0, y: 0 } } = e, { metadata: h = {} } = e, { createdAt: g = new Date() } = e, { loading: v = !1 } = e, { number: w = 1 } = e;
  const b = async () => {
    const { x, y: I } = await Le(r, o, {
      placement: "right-start",
      middleware: [We(), Ae(4), Ee(), Re({ padding: 8 })]
    });
    Object.assign(o.style, { left: `${x}px`, top: `${I}px` });
  }, y = () => {
    a || (n(9, o.style.display = "", o), n(10, a = !0), b());
  }, C = () => {
    a && (n(10, a = !1), n(13, c = !1), setTimeout(
      () => {
        n(9, o.style.display = "none", o), n(12, l.style.display = "none", l);
      },
      Rn
    ));
  }, M = () => {
    a ? C() : y();
  }, O = async () => {
    if (!i)
      return;
    const { x, y: I } = await Le(i, l, {
      placement: "top",
      middleware: [We(), Ae(20), Ee(), Re({ padding: 8 })]
    });
    Object.assign(l.style, { left: `${x}px`, top: `${I}px` });
  }, Y = () => {
    c || (n(12, l.style.display = "", l), n(13, c = !0), O());
  }, U = () => {
    c && (n(13, c = !1), setTimeout(
      () => {
        n(12, l.style.display = "none", l);
      },
      Rn
    ));
  }, F = () => {
    c ? U() : Y();
  };
  function P(x) {
    gt[x ? "unshift" : "push"](() => {
      r = x, n(8, r);
    });
  }
  function T(x) {
    gt[x ? "unshift" : "push"](() => {
      i = x, n(11, i);
    });
  }
  function R(x) {
    gt[x ? "unshift" : "push"](() => {
      o = x, n(9, o);
    });
  }
  function B(x) {
    gt[x ? "unshift" : "push"](() => {
      l = x, n(12, l);
    });
  }
  return t.$$set = (x) => {
    "resolved" in x && n(0, s = x.resolved), "text" in x && n(1, f = x.text), "pathname" in x && n(2, d = x.pathname), "position" in x && n(3, p = x.position), "metadata" in x && n(4, h = x.metadata), "createdAt" in x && n(5, g = x.createdAt), "loading" in x && n(6, v = x.loading), "number" in x && n(7, w = x.number);
  }, [
    s,
    f,
    d,
    p,
    h,
    g,
    v,
    w,
    r,
    o,
    a,
    i,
    l,
    c,
    C,
    M,
    U,
    F,
    P,
    T,
    R,
    B
  ];
}
class ha extends ge {
  constructor(e) {
    super(), he(this, e, ma, pa, Tt, {
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
function Ve(t, e = S) {
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
  function i(l, c = S) {
    const s = [l, c];
    return r.add(s), r.size === 1 && (n = e(o) || S), l(t), () => {
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
    let s = 0, f = S;
    const d = () => {
      if (s)
        return;
      f();
      const h = e(r ? c[0] : c, i);
      a ? i(h) : f = fe(h) ? h : S;
    }, p = o.map((h, g) => Yn(h, (v) => {
      c[g] = v, s &= ~(1 << g), l && d();
    }, () => {
      s |= 1 << g;
    }));
    return l = !0, d(), function() {
      pt(p), f();
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
      N(n, e, r);
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
      e = V("path"), u(e, "d", "M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z");
    },
    m(n, r) {
      N(n, e, r);
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
      e = _("span"), e.textContent = "Comment", n = D(), r = _("code"), o = z("c"), u(r, "class", ir);
    },
    m(a, i) {
      N(a, e, i), N(a, n, i), N(a, r, i), m(r, o);
    },
    p: S,
    d(a) {
      a && L(e), a && L(n), a && L(r);
    }
  };
}
function xa(t) {
  let e, n, r, o;
  return {
    c() {
      e = _("span"), e.textContent = "Close comments", n = D(), r = _("code"), o = z("esc"), u(r, "class", ir);
    },
    m(a, i) {
      N(a, e, i), N(a, n, i), N(a, r, i), m(r, o);
    },
    p: S,
    d(a) {
      a && L(e), a && L(n), a && L(r);
    }
  };
}
function _a(t) {
  let e, n, r, o, a, i, l;
  function c(g, v) {
    return g[0] ? ba : wa;
  }
  let s = c(t), f = s(t);
  function d(g, v) {
    return g[0] ? xa : ya;
  }
  let p = d(t), h = p(t);
  return {
    c() {
      e = _("button"), n = V("svg"), f.c(), r = D(), o = _("span"), h.c(), u(n, "xmlns", "http://www.w3.org/2000/svg"), u(n, "viewBox", "0 0 20 20"), u(n, "fill", "currentColor"), u(n, "class", "spd-w-5 spd-h-5 spd-mr-2 spd-flex-shrink-0"), u(o, "class", "spd-flex spd-items-center"), u(e, "class", a = "spd-flex spd-items-center spd-fixed spd-bottom-8 spd-left-1/2 spd-bg-black spd-rounded-full -spd-translate-x-1/2 spd-pl-5 spd-pr-6 spd-h-11 !spd-z-[99999] spd-shadow-md spd-border spd-border-zinc-600 spd-font-sans spd-text-base spd-transition-colors focus:spd-ring-2 focus:spd-ring-zinc-900/60 hover:spd-text-white " + (t[0] ? "spd-text-white" : "spd-text-zinc-500")), u(e, "data-ignore-cursor", "");
    },
    m(g, v) {
      N(g, e, v), m(e, n), f.m(n, null), m(e, r), m(e, o), h.m(o, null), i || (l = ct(e, "click", t[1]), i = !0);
    },
    p(g, [v]) {
      s !== (s = c(g)) && (f.d(1), f = s(g), f && (f.c(), f.m(n, null))), p === (p = d(g)) && h ? h.p(g, v) : (h.d(1), h = p(g), h && (h.c(), h.m(o, null))), v & 1 && a !== (a = "spd-flex spd-items-center spd-fixed spd-bottom-8 spd-left-1/2 spd-bg-black spd-rounded-full -spd-translate-x-1/2 spd-pl-5 spd-pr-6 spd-h-11 !spd-z-[99999] spd-shadow-md spd-border spd-border-zinc-600 spd-font-sans spd-text-base spd-transition-colors focus:spd-ring-2 focus:spd-ring-zinc-900/60 hover:spd-text-white " + (g[0] ? "spd-text-white" : "spd-text-zinc-500")) && u(e, "class", a);
    },
    i: S,
    o: S,
    d(g) {
      g && L(e), f.d(), h.d(), i = !1, l();
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
class ka extends ge {
  constructor(e) {
    super(), he(this, e, Ca, _a, Tt, {});
  }
}
const sr = Ve([]), Ta = va(sr, (t) => t.length);
function Wn(t) {
  let e, n, r, o, a, i, l, c = t[5] + 1 + "", s, f, d, p, h, g, v, w, b, y, C, M, O;
  function Y(P, T) {
    return P[0] ? Ma : Oa;
  }
  let U = Y(t), F = U(t);
  return {
    c() {
      e = _("div"), n = _("div"), r = V("svg"), o = V("path"), a = V("path"), i = D(), l = _("span"), s = z(c), f = D(), d = _("form"), p = _("textarea"), h = D(), g = _("div"), v = _("button"), v.textContent = "Cancel", w = D(), b = _("button"), y = _("span"), y.textContent = "Post", C = D(), F.c(), u(o, "d", "M22 44C34.1503 44 44 34.1503 44 22C44 9.84974 34.1503 0 22 0H0V22C0 34.1503 9.84974 44 22 44Z"), u(o, "fill", "black"), u(a, "fill-rule", "evenodd"), u(a, "clip-rule", "evenodd"), u(a, "d", "M22 41.25C32.6315 41.25 41.25 32.6315 41.25 22C41.25 11.3685 32.6315 2.75 22 2.75H2.75V22C2.75 32.6315 11.3685 41.25 22 41.25ZM44 22C44 34.1503 34.1503 44 22 44C9.84974 44 0 34.1503 0 22V0H22C34.1503 0 44 9.84974 44 22Z"), u(a, "fill", "white"), u(r, "class", "spd-w-8 spd-h-8"), u(r, "viewBox", "0 0 44 44"), u(r, "fill", "none"), u(r, "xmlns", "http://www.w3.org/2000/svg"), u(l, "class", "spd-absolute spd-left-1/2 spd-top-1/2 -spd-translate-x-1/2 -spd-translate-y-1/2 spd-text-xs spd-text-white"), u(n, "class", "spd-relative"), u(p, "class", "spd-px-5 spd-pt-4 spd-pb-3 spd-rounded-md spd-transition-colors spd-bg-black spd-resize-none spd-appearance-none placeholder:spd-text-zinc-500 focus:spd-outline-none focus:placeholder:spd-text-zinc-700 spd-text-base"), u(p, "placeholder", "Add a comment..."), u(p, "rows", "3"), u(v, "type", "button"), u(v, "class", "spd-px-3 spd-py-2 spd-transition-colors spd-space-x-1.5 spd-border spd-border-zinc-900 spd-text-zinc-500 spd-rounded-md hover:spd-text-white hover:spd-bg-zinc-900 spd-text-sm spd-flex spd-items-center"), u(b, "type", "submit"), b.disabled = t[0], u(b, "class", "spd-px-3 spd-py-2 spd-transition-colors spd-space-x-1.5 spd-border spd-border-zinc-700 spd-text-white spd-rounded-md hover:spd-bg-zinc-900 spd-text-sm spd-flex spd-items-center"), u(g, "class", "spd-flex spd-items-center spd-px-5 spd-py-3 spd-space-x-3 spd-self-end"), u(d, "class", "spd-flex spd-flex-col spd-w-full spd-max-w-xs spd-shadow-lg spd-border spd-border-zinc-600 spd-bg-black spd-rounded-md spd-text-white"), u(e, "class", "spd-absolute spd-transition !spd-cursor-auto spd-top-0 spd-left-0 spd-flex spd-items-start spd-delay-100 spd-duration-300 spd-ease-out spd-space-x-2 spd-z-[999999]"), u(e, "data-ignore-cursor", ""), A(e, "spd-opacity-0", !t[3]), A(e, "spd-translate-y-2", !t[3]), A(e, "spd-opacity-100", t[3]), A(e, "spd-translate-y-0", t[3]);
    },
    m(P, T) {
      N(P, e, T), m(e, n), m(n, r), m(r, o), m(r, a), m(n, i), m(n, l), m(l, s), m(e, f), m(e, d), m(d, p), gn(p, t[1]), m(d, h), m(d, g), m(g, v), m(g, w), m(g, b), m(b, y), m(b, C), F.m(b, null), t[10](e), M || (O = [
        ct(p, "input", t[9]),
        ct(v, "click", t[7]),
        ct(d, "submit", gr(t[8]))
      ], M = !0);
    },
    p(P, T) {
      T & 32 && c !== (c = P[5] + 1 + "") && Q(s, c), T & 2 && gn(p, P[1]), U !== (U = Y(P)) && (F.d(1), F = U(P), F && (F.c(), F.m(b, null))), T & 1 && (b.disabled = P[0]), T & 8 && A(e, "spd-opacity-0", !P[3]), T & 8 && A(e, "spd-translate-y-2", !P[3]), T & 8 && A(e, "spd-opacity-100", P[3]), T & 8 && A(e, "spd-translate-y-0", P[3]);
    },
    d(P) {
      P && L(e), F.d(), t[10](null), M = !1, pt(O);
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
      N(r, e, o), m(e, n);
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
      e = V("svg"), n = V("path"), u(n, "d", "M4.5 12.5C4.5 16.9183 8.08172 20.5 12.5 20.5C16.9183 20.5 20.5 16.9183 20.5 12.5C20.5 8.08172 16.9183 4.5 12.5 4.5"), u(n, "stroke", "#9CA3AF"), u(n, "stroke-width", "1.2"), u(e, "class", "spd-animate-spin spd-w-5 spd-h-5"), u(e, "viewBox", "0 0 25 25"), u(e, "fill", "none"), u(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(r, o) {
      N(r, e, o), m(e, n);
    },
    d(r) {
      r && L(e);
    }
  };
}
function Da(t) {
  let e, n, r, o = t[4] && Wn(t);
  return {
    c() {
      o && o.c(), e = zn();
    },
    m(a, i) {
      o && o.m(a, i), N(a, e, i), n || (r = ct(window, "click", t[6], !0), n = !0);
    },
    p(a, [i]) {
      a[4] ? o ? o.p(a, i) : (o = Wn(a), o.c(), o.m(e.parentNode, e)) : o && (o.d(1), o = null);
    },
    i: S,
    o: S,
    d(a) {
      o && o.d(a), a && L(e), n = !1, r();
    }
  };
}
const Pa = 300;
function Sa(t, e, n) {
  let r, o;
  se(t, wt, (v) => n(4, r = v)), se(t, Ta, (v) => n(5, o = v));
  let a = "", i, l = !1, { loading: c = !1 } = e;
  const s = async ({ clientX: v, clientY: w }) => {
    const b = {
      getBoundingClientRect() {
        return {
          width: 0,
          height: 0,
          x: v,
          y: w,
          top: w,
          left: v,
          right: v,
          bottom: w
        };
      },
      getClientRects() {
        return [];
      }
    }, { x: y, y: C } = await Le(b, i, {
      placement: "right-start",
      middleware: [We(), Ae(28), Ee(), Re({ padding: 8 })]
    });
    Object.assign(i.style, { left: `${y}px`, top: `${C}px` });
  }, f = (v) => {
    const w = i && i.contains(v.target);
    !r || w || (s(v), l || (n(2, i.style.display = "", i), n(3, l = !0)), v.target.closest("a, button, [role='button']") && v.preventDefault());
  }, d = () => {
    l && (n(3, l = !1), setTimeout(
      () => {
        n(2, i.style.display = "none", i);
      },
      Pa
    ));
  };
  function p(v) {
    br.call(this, t, v);
  }
  function h() {
    a = this.value, n(1, a);
  }
  function g(v) {
    gt[v ? "unshift" : "push"](() => {
      i = v, n(2, i);
    });
  }
  return t.$$set = (v) => {
    "loading" in v && n(0, c = v.loading);
  }, [
    c,
    a,
    i,
    l,
    r,
    o,
    f,
    d,
    p,
    h,
    g
  ];
}
class Ea extends ge {
  constructor(e) {
    super(), he(this, e, Sa, Da, Tt, { loading: 0 });
  }
}
const { window: Aa } = Tr;
function Ln(t, e, n) {
  const r = t.slice();
  return r[4] = e[n], r;
}
function Ra(t) {
  return {
    c: S,
    m: S,
    p: S,
    i: S,
    o: S,
    d: S
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
      N(i, e, l), n = !0;
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
      hr(o, i), i && L(e);
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
      Ye(e.$$.fragment);
    },
    m(r, o) {
      pe(e, r, o), n = !0;
    },
    p: S,
    i(r) {
      n || (G(e.$$.fragment, r), n = !0);
    },
    o(r) {
      at(e.$$.fragment, r), n = !1;
    },
    d(r) {
      me(e, r);
    }
  };
}
function La(t) {
  return {
    c: S,
    m: S,
    p: S,
    i: S,
    o: S,
    d: S
  };
}
function Un(t) {
  let e, n;
  return e = new Ea({}), {
    c() {
      Ye(e.$$.fragment);
    },
    m(r, o) {
      pe(e, r, o), n = !0;
    },
    p: S,
    i(r) {
      n || (G(e.$$.fragment, r), n = !0);
    },
    o(r) {
      at(e.$$.fragment, r), n = !1;
    },
    d(r) {
      me(e, r);
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
      c.block.c(), e = D(), s.c(), r = D(), Ye(o.$$.fragment);
    },
    m(f, d) {
      c.block.m(f, c.anchor = d), c.mount = () => e.parentNode, c.anchor = e, N(f, e, d), s.m(f, d), N(f, r, d), pe(o, f, d), a = !0, i || (l = ct(Aa, "keydown", t[2]), i = !0);
    },
    p(f, [d]) {
      t = f, kr(c, t, d), d & 1 && Tt(n, n = t[0]) ? (Ue(), at(s, 1, 1, S), Fe(), s = Un(), s.c(), G(s, 1), s.m(r.parentNode, r)) : s.p(t, d);
    },
    i(f) {
      a || (G(c.block), G(s), G(o.$$.fragment, f), a = !0);
    },
    o(f) {
      for (let d = 0; d < 3; d += 1) {
        const p = c.blocks[d];
        at(p);
      }
      at(s), at(o.$$.fragment, f), a = !1;
    },
    d(f) {
      c.block.d(f), c.token = null, c = null, f && L(e), s.d(f), f && L(r), me(o, f), i = !1, l();
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
class Fa extends ge {
  constructor(e) {
    super(), he(this, e, Ua, Na, Tt, {});
  }
}
const Ya = (t) => {
  const e = document.head, n = document.createElement("link");
  n.rel = "stylesheet", n.href = t, e.appendChild(n);
}, za = () => {
  const t = document.createElement("div");
  t.setAttribute("id", "speedback-app"), document.body.appendChild(t);
}, Ba = () => {
  new Fa({
    target: document.getElementById("speedback-app")
  });
}, Ha = async () => {
  za(), Ba(), Ya("/style.css");
};
Ha();
