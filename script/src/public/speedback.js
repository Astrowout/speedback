var kt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function xi(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var to = xi, Vi = typeof kt == "object" && kt && kt.Object === Object && kt, Ti = Vi, Ii = Ti, Ci = typeof self == "object" && self && self.Object === Object && self, $i = Ii || Ci || Function("return this")(), hr = $i, ji = hr, Mi = function() {
  return ji.Date.now();
}, Si = Mi, Pi = /\s/;
function Ai(e) {
  for (var t = e.length; t-- && Pi.test(e.charAt(t)); )
    ;
  return t;
}
var Ri = Ai, Fi = Ri, Li = /^\s+/;
function Hi(e) {
  return e && e.slice(0, Fi(e) + 1).replace(Li, "");
}
var ki = Hi, Bi = hr, Ui = Bi.Symbol, mr = Ui, Co = mr, gr = Object.prototype, Wi = gr.hasOwnProperty, Ki = gr.toString, wt = Co ? Co.toStringTag : void 0;
function zi(e) {
  var t = Wi.call(e, wt), n = e[wt];
  try {
    e[wt] = void 0;
    var o = !0;
  } catch {
  }
  var r = Ki.call(e);
  return o && (t ? e[wt] = n : delete e[wt]), r;
}
var qi = zi, Ji = Object.prototype, Zi = Ji.toString;
function Yi(e) {
  return Zi.call(e);
}
var Gi = Yi, $o = mr, Qi = qi, Xi = Gi, es = "[object Null]", ts = "[object Undefined]", jo = $o ? $o.toStringTag : void 0;
function ns(e) {
  return e == null ? e === void 0 ? ts : es : jo && jo in Object(e) ? Qi(e) : Xi(e);
}
var os = ns;
function rs(e) {
  return e != null && typeof e == "object";
}
var is = rs, ss = os, ls = is, cs = "[object Symbol]";
function fs(e) {
  return typeof e == "symbol" || ls(e) && ss(e) == cs;
}
var us = fs, as = ki, Mo = to, ds = us, So = 0 / 0, ps = /^[-+]0x[0-9a-f]+$/i, hs = /^0b[01]+$/i, ms = /^0o[0-7]+$/i, gs = parseInt;
function _s(e) {
  if (typeof e == "number")
    return e;
  if (ds(e))
    return So;
  if (Mo(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = Mo(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = as(e);
  var n = hs.test(e);
  return n || ms.test(e) ? gs(e.slice(2), n ? 2 : 8) : ps.test(e) ? So : +e;
}
var Es = _s, bs = to, Tn = Si, Po = Es, Ns = "Expected a function", Os = Math.max, ys = Math.min;
function ws(e, t, n) {
  var o, r, i, s, c, f, d = 0, h = !1, a = !1, E = !0;
  if (typeof e != "function")
    throw new TypeError(Ns);
  t = Po(t) || 0, bs(n) && (h = !!n.leading, a = "maxWait" in n, i = a ? Os(Po(n.maxWait) || 0, t) : i, E = "trailing" in n ? !!n.trailing : E);
  function x(H) {
    var oe = o, le = r;
    return o = r = void 0, d = H, s = e.apply(le, oe), s;
  }
  function P(H) {
    return d = H, c = setTimeout(q, t), h ? x(H) : s;
  }
  function $(H) {
    var oe = H - f, le = H - d, ce = t - oe;
    return a ? ys(ce, i - le) : ce;
  }
  function W(H) {
    var oe = H - f, le = H - d;
    return f === void 0 || oe >= t || oe < 0 || a && le >= i;
  }
  function q() {
    var H = Tn();
    if (W(H))
      return J(H);
    c = setTimeout(q, $(H));
  }
  function J(H) {
    return c = void 0, E && o ? x(H) : (o = r = void 0, s);
  }
  function K() {
    c !== void 0 && clearTimeout(c), d = 0, o = f = r = c = void 0;
  }
  function A() {
    return c === void 0 ? s : J(Tn());
  }
  function z() {
    var H = Tn(), oe = W(H);
    if (o = arguments, r = this, f = H, oe) {
      if (c === void 0)
        return P(f);
      if (a)
        return clearTimeout(c), c = setTimeout(q, t), x(f);
    }
    return c === void 0 && (c = setTimeout(q, t)), s;
  }
  return z.cancel = K, z.flush = A, z;
}
var vs = ws, Ds = vs, xs = to, Vs = "Expected a function";
function Ts(e, t, n) {
  var o = !0, r = !0;
  if (typeof e != "function")
    throw new TypeError(Vs);
  return xs(n) && (o = "leading" in n ? !!n.leading : o, r = "trailing" in n ? !!n.trailing : r), Ds(e, t, {
    leading: o,
    maxWait: t,
    trailing: r
  });
}
var Is = Ts;
function ze(e, t) {
  const n = /* @__PURE__ */ Object.create(null), o = e.split(",");
  for (let r = 0; r < o.length; r++)
    n[o[r]] = !0;
  return t ? (r) => !!n[r.toLowerCase()] : (r) => !!n[r];
}
function no(e) {
  if (I(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const o = e[n], r = Z(o) ? Ms(o) : no(o);
      if (r)
        for (const i in r)
          t[i] = r[i];
    }
    return t;
  } else {
    if (Z(e))
      return e;
    if (U(e))
      return e;
  }
}
const Cs = /;(?![^(]*\))/g, $s = /:([^]+)/, js = /\/\*.*?\*\//gs;
function Ms(e) {
  const t = {};
  return e.replace(js, "").split(Cs).forEach((n) => {
    if (n) {
      const o = n.split($s);
      o.length > 1 && (t[o[0].trim()] = o[1].trim());
    }
  }), t;
}
function oo(e) {
  let t = "";
  if (Z(e))
    t = e;
  else if (I(e))
    for (let n = 0; n < e.length; n++) {
      const o = oo(e[n]);
      o && (t += o + " ");
    }
  else if (U(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const Ss = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", Ps = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistanceLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", As = /* @__PURE__ */ ze(Ss), Rs = /* @__PURE__ */ ze(Ps), Fs = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Ls = /* @__PURE__ */ ze(Fs);
function _r(e) {
  return !!e || e === "";
}
const Ao = (e) => Z(e) ? e : e == null ? "" : I(e) || U(e) && (e.toString === Or || !T(e.toString)) ? JSON.stringify(e, Er, 2) : String(e), Er = (e, t) => t && t.__v_isRef ? Er(e, t.value) : Qe(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce((n, [o, r]) => (n[`${o} =>`] = r, n), {})
} : Nr(t) ? {
  [`Set(${t.size})`]: [...t.values()]
} : U(t) && !I(t) && !yr(t) ? String(t) : t, B = {}.NODE_ENV !== "production" ? Object.freeze({}) : {}, _t = {}.NODE_ENV !== "production" ? Object.freeze([]) : [], Q = () => {
}, br = () => !1, Hs = /^on[^a-z]/, At = (e) => Hs.test(e), nn = (e) => e.startsWith("onUpdate:"), G = Object.assign, ro = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, ks = Object.prototype.hasOwnProperty, M = (e, t) => ks.call(e, t), I = Array.isArray, Qe = (e) => un(e) === "[object Map]", Nr = (e) => un(e) === "[object Set]", T = (e) => typeof e == "function", Z = (e) => typeof e == "string", io = (e) => typeof e == "symbol", U = (e) => e !== null && typeof e == "object", so = (e) => U(e) && T(e.then) && T(e.catch), Or = Object.prototype.toString, un = (e) => Or.call(e), lo = (e) => un(e).slice(8, -1), yr = (e) => un(e) === "[object Object]", co = (e) => Z(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Jt = /* @__PURE__ */ ze(
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Bs = /* @__PURE__ */ ze("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"), an = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, Us = /-(\w)/g, bt = an((e) => e.replace(Us, (t, n) => n ? n.toUpperCase() : "")), Ws = /\B([A-Z])/g, Ue = an((e) => e.replace(Ws, "-$1").toLowerCase()), dn = an((e) => e.charAt(0).toUpperCase() + e.slice(1)), Ze = an((e) => e ? `on${dn(e)}` : ""), on = (e, t) => !Object.is(e, t), vt = (e, t) => {
  for (let n = 0; n < e.length; n++)
    e[n](t);
}, rn = (e, t, n) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    value: n
  });
}, wr = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let Ro;
const vr = () => Ro || (Ro = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function An(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let we;
class Ks {
  constructor(t = !1) {
    this.detached = t, this.active = !0, this.effects = [], this.cleanups = [], this.parent = we, !t && we && (this.index = (we.scopes || (we.scopes = [])).push(this) - 1);
  }
  run(t) {
    if (this.active) {
      const n = we;
      try {
        return we = this, t();
      } finally {
        we = n;
      }
    } else
      ({}).NODE_ENV !== "production" && An("cannot run an inactive effect scope.");
  }
  on() {
    we = this;
  }
  off() {
    we = this.parent;
  }
  stop(t) {
    if (this.active) {
      let n, o;
      for (n = 0, o = this.effects.length; n < o; n++)
        this.effects[n].stop();
      for (n = 0, o = this.cleanups.length; n < o; n++)
        this.cleanups[n]();
      if (this.scopes)
        for (n = 0, o = this.scopes.length; n < o; n++)
          this.scopes[n].stop(!0);
      if (!this.detached && this.parent && !t) {
        const r = this.parent.scopes.pop();
        r && r !== this && (this.parent.scopes[this.index] = r, r.index = this.index);
      }
      this.parent = void 0, this.active = !1;
    }
  }
}
function zs(e, t = we) {
  t && t.active && t.effects.push(e);
}
const $t = (e) => {
  const t = new Set(e);
  return t.w = 0, t.n = 0, t;
}, Dr = (e) => (e.w & We) > 0, xr = (e) => (e.n & We) > 0, qs = ({ deps: e }) => {
  if (e.length)
    for (let t = 0; t < e.length; t++)
      e[t].w |= We;
}, Js = (e) => {
  const { deps: t } = e;
  if (t.length) {
    let n = 0;
    for (let o = 0; o < t.length; o++) {
      const r = t[o];
      Dr(r) && !xr(r) ? r.delete(e) : t[n++] = r, r.w &= ~We, r.n &= ~We;
    }
    t.length = n;
  }
}, Rn = /* @__PURE__ */ new WeakMap();
let Vt = 0, We = 1;
const Fn = 30;
let se;
const Xe = Symbol({}.NODE_ENV !== "production" ? "iterate" : ""), Ln = Symbol({}.NODE_ENV !== "production" ? "Map key iterate" : "");
class fo {
  constructor(t, n = null, o) {
    this.fn = t, this.scheduler = n, this.active = !0, this.deps = [], this.parent = void 0, zs(this, o);
  }
  run() {
    if (!this.active)
      return this.fn();
    let t = se, n = ke;
    for (; t; ) {
      if (t === this)
        return;
      t = t.parent;
    }
    try {
      return this.parent = se, se = this, ke = !0, We = 1 << ++Vt, Vt <= Fn ? qs(this) : Fo(this), this.fn();
    } finally {
      Vt <= Fn && Js(this), We = 1 << --Vt, se = this.parent, ke = n, this.parent = void 0, this.deferStop && this.stop();
    }
  }
  stop() {
    se === this ? this.deferStop = !0 : this.active && (Fo(this), this.onStop && this.onStop(), this.active = !1);
  }
}
function Fo(e) {
  const { deps: t } = e;
  if (t.length) {
    for (let n = 0; n < t.length; n++)
      t[n].delete(e);
    t.length = 0;
  }
}
let ke = !0;
const Vr = [];
function ct() {
  Vr.push(ke), ke = !1;
}
function ft() {
  const e = Vr.pop();
  ke = e === void 0 ? !0 : e;
}
function ae(e, t, n) {
  if (ke && se) {
    let o = Rn.get(e);
    o || Rn.set(e, o = /* @__PURE__ */ new Map());
    let r = o.get(n);
    r || o.set(n, r = $t());
    const i = {}.NODE_ENV !== "production" ? { effect: se, target: e, type: t, key: n } : void 0;
    Hn(r, i);
  }
}
function Hn(e, t) {
  let n = !1;
  Vt <= Fn ? xr(e) || (e.n |= We, n = !Dr(e)) : n = !e.has(se), n && (e.add(se), se.deps.push(e), {}.NODE_ENV !== "production" && se.onTrack && se.onTrack(Object.assign({ effect: se }, t)));
}
function je(e, t, n, o, r, i) {
  const s = Rn.get(e);
  if (!s)
    return;
  let c = [];
  if (t === "clear")
    c = [...s.values()];
  else if (n === "length" && I(e)) {
    const d = wr(o);
    s.forEach((h, a) => {
      (a === "length" || a >= d) && c.push(h);
    });
  } else
    switch (n !== void 0 && c.push(s.get(n)), t) {
      case "add":
        I(e) ? co(n) && c.push(s.get("length")) : (c.push(s.get(Xe)), Qe(e) && c.push(s.get(Ln)));
        break;
      case "delete":
        I(e) || (c.push(s.get(Xe)), Qe(e) && c.push(s.get(Ln)));
        break;
      case "set":
        Qe(e) && c.push(s.get(Xe));
        break;
    }
  const f = {}.NODE_ENV !== "production" ? { target: e, type: t, key: n, newValue: o, oldValue: r, oldTarget: i } : void 0;
  if (c.length === 1)
    c[0] && ({}.NODE_ENV !== "production" ? ht(c[0], f) : ht(c[0]));
  else {
    const d = [];
    for (const h of c)
      h && d.push(...h);
    ({}).NODE_ENV !== "production" ? ht($t(d), f) : ht($t(d));
  }
}
function ht(e, t) {
  const n = I(e) ? e : [...e];
  for (const o of n)
    o.computed && Lo(o, t);
  for (const o of n)
    o.computed || Lo(o, t);
}
function Lo(e, t) {
  (e !== se || e.allowRecurse) && ({}.NODE_ENV !== "production" && e.onTrigger && e.onTrigger(G({ effect: e }, t)), e.scheduler ? e.scheduler() : e.run());
}
const Zs = /* @__PURE__ */ ze("__proto__,__v_isRef,__isVue"), Tr = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(io)
), Ys = /* @__PURE__ */ pn(), Gs = /* @__PURE__ */ pn(!1, !0), Qs = /* @__PURE__ */ pn(!0), Xs = /* @__PURE__ */ pn(!0, !0), Ho = /* @__PURE__ */ el();
function el() {
  const e = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
    e[t] = function(...n) {
      const o = j(this);
      for (let i = 0, s = this.length; i < s; i++)
        ae(o, "get", i + "");
      const r = o[t](...n);
      return r === -1 || r === !1 ? o[t](...n.map(j)) : r;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
    e[t] = function(...n) {
      ct();
      const o = j(this)[t].apply(this, n);
      return ft(), o;
    };
  }), e;
}
function pn(e = !1, t = !1) {
  return function(o, r, i) {
    if (r === "__v_isReactive")
      return !e;
    if (r === "__v_isReadonly")
      return e;
    if (r === "__v_isShallow")
      return t;
    if (r === "__v_raw" && i === (e ? t ? Ar : Pr : t ? Sr : Mr).get(o))
      return o;
    const s = I(o);
    if (!e && s && M(Ho, r))
      return Reflect.get(Ho, r, i);
    const c = Reflect.get(o, r, i);
    return (io(r) ? Tr.has(r) : Zs(r)) || (e || ae(o, "get", r), t) ? c : ee(c) ? s && co(r) ? c : c.value : U(c) ? e ? Rr(c) : gn(c) : c;
  };
}
const tl = /* @__PURE__ */ Ir(), nl = /* @__PURE__ */ Ir(!0);
function Ir(e = !1) {
  return function(n, o, r, i) {
    let s = n[o];
    if (it(s) && ee(s) && !ee(r))
      return !1;
    if (!e && (!kn(r) && !it(r) && (s = j(s), r = j(r)), !I(n) && ee(s) && !ee(r)))
      return s.value = r, !0;
    const c = I(n) && co(o) ? Number(o) < n.length : M(n, o), f = Reflect.set(n, o, r, i);
    return n === j(i) && (c ? on(r, s) && je(n, "set", o, r, s) : je(n, "add", o, r)), f;
  };
}
function ol(e, t) {
  const n = M(e, t), o = e[t], r = Reflect.deleteProperty(e, t);
  return r && n && je(e, "delete", t, void 0, o), r;
}
function rl(e, t) {
  const n = Reflect.has(e, t);
  return (!io(t) || !Tr.has(t)) && ae(e, "has", t), n;
}
function il(e) {
  return ae(e, "iterate", I(e) ? "length" : Xe), Reflect.ownKeys(e);
}
const Cr = {
  get: Ys,
  set: tl,
  deleteProperty: ol,
  has: rl,
  ownKeys: il
}, $r = {
  get: Qs,
  set(e, t) {
    return {}.NODE_ENV !== "production" && An(`Set operation on key "${String(t)}" failed: target is readonly.`, e), !0;
  },
  deleteProperty(e, t) {
    return {}.NODE_ENV !== "production" && An(`Delete operation on key "${String(t)}" failed: target is readonly.`, e), !0;
  }
}, sl = /* @__PURE__ */ G({}, Cr, {
  get: Gs,
  set: nl
}), ll = /* @__PURE__ */ G({}, $r, {
  get: Xs
}), uo = (e) => e, hn = (e) => Reflect.getPrototypeOf(e);
function Bt(e, t, n = !1, o = !1) {
  e = e.__v_raw;
  const r = j(e), i = j(t);
  n || (t !== i && ae(r, "get", t), ae(r, "get", i));
  const { has: s } = hn(r), c = o ? uo : n ? po : ao;
  if (s.call(r, t))
    return c(e.get(t));
  if (s.call(r, i))
    return c(e.get(i));
  e !== r && e.get(t);
}
function Ut(e, t = !1) {
  const n = this.__v_raw, o = j(n), r = j(e);
  return t || (e !== r && ae(o, "has", e), ae(o, "has", r)), e === r ? n.has(e) : n.has(e) || n.has(r);
}
function Wt(e, t = !1) {
  return e = e.__v_raw, !t && ae(j(e), "iterate", Xe), Reflect.get(e, "size", e);
}
function ko(e) {
  e = j(e);
  const t = j(this);
  return hn(t).has.call(t, e) || (t.add(e), je(t, "add", e, e)), this;
}
function Bo(e, t) {
  t = j(t);
  const n = j(this), { has: o, get: r } = hn(n);
  let i = o.call(n, e);
  i ? {}.NODE_ENV !== "production" && jr(n, o, e) : (e = j(e), i = o.call(n, e));
  const s = r.call(n, e);
  return n.set(e, t), i ? on(t, s) && je(n, "set", e, t, s) : je(n, "add", e, t), this;
}
function Uo(e) {
  const t = j(this), { has: n, get: o } = hn(t);
  let r = n.call(t, e);
  r ? {}.NODE_ENV !== "production" && jr(t, n, e) : (e = j(e), r = n.call(t, e));
  const i = o ? o.call(t, e) : void 0, s = t.delete(e);
  return r && je(t, "delete", e, void 0, i), s;
}
function Wo() {
  const e = j(this), t = e.size !== 0, n = {}.NODE_ENV !== "production" ? Qe(e) ? new Map(e) : new Set(e) : void 0, o = e.clear();
  return t && je(e, "clear", void 0, void 0, n), o;
}
function Kt(e, t) {
  return function(o, r) {
    const i = this, s = i.__v_raw, c = j(s), f = t ? uo : e ? po : ao;
    return !e && ae(c, "iterate", Xe), s.forEach((d, h) => o.call(r, f(d), f(h), i));
  };
}
function zt(e, t, n) {
  return function(...o) {
    const r = this.__v_raw, i = j(r), s = Qe(i), c = e === "entries" || e === Symbol.iterator && s, f = e === "keys" && s, d = r[e](...o), h = n ? uo : t ? po : ao;
    return !t && ae(i, "iterate", f ? Ln : Xe), {
      next() {
        const { value: a, done: E } = d.next();
        return E ? { value: a, done: E } : {
          value: c ? [h(a[0]), h(a[1])] : h(a),
          done: E
        };
      },
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function Re(e) {
  return function(...t) {
    if ({}.NODE_ENV !== "production") {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      console.warn(`${dn(e)} operation ${n}failed: target is readonly.`, j(this));
    }
    return e === "delete" ? !1 : this;
  };
}
function cl() {
  const e = {
    get(i) {
      return Bt(this, i);
    },
    get size() {
      return Wt(this);
    },
    has: Ut,
    add: ko,
    set: Bo,
    delete: Uo,
    clear: Wo,
    forEach: Kt(!1, !1)
  }, t = {
    get(i) {
      return Bt(this, i, !1, !0);
    },
    get size() {
      return Wt(this);
    },
    has: Ut,
    add: ko,
    set: Bo,
    delete: Uo,
    clear: Wo,
    forEach: Kt(!1, !0)
  }, n = {
    get(i) {
      return Bt(this, i, !0);
    },
    get size() {
      return Wt(this, !0);
    },
    has(i) {
      return Ut.call(this, i, !0);
    },
    add: Re("add"),
    set: Re("set"),
    delete: Re("delete"),
    clear: Re("clear"),
    forEach: Kt(!0, !1)
  }, o = {
    get(i) {
      return Bt(this, i, !0, !0);
    },
    get size() {
      return Wt(this, !0);
    },
    has(i) {
      return Ut.call(this, i, !0);
    },
    add: Re("add"),
    set: Re("set"),
    delete: Re("delete"),
    clear: Re("clear"),
    forEach: Kt(!0, !0)
  };
  return ["keys", "values", "entries", Symbol.iterator].forEach((i) => {
    e[i] = zt(i, !1, !1), n[i] = zt(i, !0, !1), t[i] = zt(i, !1, !0), o[i] = zt(i, !0, !0);
  }), [
    e,
    n,
    t,
    o
  ];
}
const [fl, ul, al, dl] = /* @__PURE__ */ cl();
function mn(e, t) {
  const n = t ? e ? dl : al : e ? ul : fl;
  return (o, r, i) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? o : Reflect.get(M(n, r) && r in o ? n : o, r, i);
}
const pl = {
  get: /* @__PURE__ */ mn(!1, !1)
}, hl = {
  get: /* @__PURE__ */ mn(!1, !0)
}, ml = {
  get: /* @__PURE__ */ mn(!0, !1)
}, gl = {
  get: /* @__PURE__ */ mn(!0, !0)
};
function jr(e, t, n) {
  const o = j(n);
  if (o !== n && t.call(e, o)) {
    const r = lo(e);
    console.warn(`Reactive ${r} contains both the raw and reactive versions of the same object${r === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`);
  }
}
const Mr = /* @__PURE__ */ new WeakMap(), Sr = /* @__PURE__ */ new WeakMap(), Pr = /* @__PURE__ */ new WeakMap(), Ar = /* @__PURE__ */ new WeakMap();
function _l(e) {
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
function El(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : _l(lo(e));
}
function gn(e) {
  return it(e) ? e : _n(e, !1, Cr, pl, Mr);
}
function bl(e) {
  return _n(e, !1, sl, hl, Sr);
}
function Rr(e) {
  return _n(e, !0, $r, ml, Pr);
}
function mt(e) {
  return _n(e, !0, ll, gl, Ar);
}
function _n(e, t, n, o, r) {
  if (!U(e))
    return {}.NODE_ENV !== "production" && console.warn(`value cannot be made reactive: ${String(e)}`), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const i = r.get(e);
  if (i)
    return i;
  const s = El(e);
  if (s === 0)
    return e;
  const c = new Proxy(e, s === 2 ? o : n);
  return r.set(e, c), c;
}
function et(e) {
  return it(e) ? et(e.__v_raw) : !!(e && e.__v_isReactive);
}
function it(e) {
  return !!(e && e.__v_isReadonly);
}
function kn(e) {
  return !!(e && e.__v_isShallow);
}
function Bn(e) {
  return et(e) || it(e);
}
function j(e) {
  const t = e && e.__v_raw;
  return t ? j(t) : e;
}
function Fr(e) {
  return rn(e, "__v_skip", !0), e;
}
const ao = (e) => U(e) ? gn(e) : e, po = (e) => U(e) ? Rr(e) : e;
function Nl(e) {
  ke && se && (e = j(e), {}.NODE_ENV !== "production" ? Hn(e.dep || (e.dep = $t()), {
    target: e,
    type: "get",
    key: "value"
  }) : Hn(e.dep || (e.dep = $t())));
}
function Ol(e, t) {
  e = j(e), e.dep && ({}.NODE_ENV !== "production" ? ht(e.dep, {
    target: e,
    type: "set",
    key: "value",
    newValue: t
  }) : ht(e.dep));
}
function ee(e) {
  return !!(e && e.__v_isRef === !0);
}
function yl(e) {
  return ee(e) ? e.value : e;
}
const wl = {
  get: (e, t, n) => yl(Reflect.get(e, t, n)),
  set: (e, t, n, o) => {
    const r = e[t];
    return ee(r) && !ee(n) ? (r.value = n, !0) : Reflect.set(e, t, n, o);
  }
};
function Lr(e) {
  return et(e) ? e : new Proxy(e, wl);
}
var Hr;
class vl {
  constructor(t, n, o, r) {
    this._setter = n, this.dep = void 0, this.__v_isRef = !0, this[Hr] = !1, this._dirty = !0, this.effect = new fo(t, () => {
      this._dirty || (this._dirty = !0, Ol(this));
    }), this.effect.computed = this, this.effect.active = this._cacheable = !r, this.__v_isReadonly = o;
  }
  get value() {
    const t = j(this);
    return Nl(t), (t._dirty || !t._cacheable) && (t._dirty = !1, t._value = t.effect.run()), t._value;
  }
  set value(t) {
    this._setter(t);
  }
}
Hr = "__v_isReadonly";
function Dl(e, t, n = !1) {
  let o, r;
  const i = T(e);
  i ? (o = e, r = {}.NODE_ENV !== "production" ? () => {
    console.warn("Write operation failed: computed value is readonly");
  } : Q) : (o = e.get, r = e.set);
  const s = new vl(o, r, i || !r, n);
  return {}.NODE_ENV !== "production" && t && !n && (s.effect.onTrack = t.onTrack, s.effect.onTrigger = t.onTrigger), s;
}
const tt = [];
function Zt(e) {
  tt.push(e);
}
function Yt() {
  tt.pop();
}
function y(e, ...t) {
  if ({}.NODE_ENV === "production")
    return;
  ct();
  const n = tt.length ? tt[tt.length - 1].component : null, o = n && n.appContext.config.warnHandler, r = xl();
  if (o)
    $e(o, n, 11, [
      e + t.join(""),
      n && n.proxy,
      r.map(({ vnode: i }) => `at <${wn(n, i.type)}>`).join(`
`),
      r
    ]);
  else {
    const i = [`[Vue warn]: ${e}`, ...t];
    r.length && i.push(`
`, ...Vl(r)), console.warn(...i);
  }
  ft();
}
function xl() {
  let e = tt[tt.length - 1];
  if (!e)
    return [];
  const t = [];
  for (; e; ) {
    const n = t[0];
    n && n.vnode === e ? n.recurseCount++ : t.push({
      vnode: e,
      recurseCount: 0
    });
    const o = e.component && e.component.parent;
    e = o && o.vnode;
  }
  return t;
}
function Vl(e) {
  const t = [];
  return e.forEach((n, o) => {
    t.push(...o === 0 ? [] : [`
`], ...Tl(n));
  }), t;
}
function Tl({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", o = e.component ? e.component.parent == null : !1, r = ` at <${wn(e.component, e.type, o)}`, i = ">" + n;
  return e.props ? [r, ...Il(e.props), i] : [r + i];
}
function Il(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((o) => {
    t.push(...kr(o, e[o]));
  }), n.length > 3 && t.push(" ..."), t;
}
function kr(e, t, n) {
  return Z(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : ee(t) ? (t = kr(e, j(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : T(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = j(t), n ? t : [`${e}=`, t]);
}
const ho = {
  sp: "serverPrefetch hook",
  bc: "beforeCreate hook",
  c: "created hook",
  bm: "beforeMount hook",
  m: "mounted hook",
  bu: "beforeUpdate hook",
  u: "updated",
  bum: "beforeUnmount hook",
  um: "unmounted hook",
  a: "activated hook",
  da: "deactivated hook",
  ec: "errorCaptured hook",
  rtc: "renderTracked hook",
  rtg: "renderTriggered hook",
  [0]: "setup function",
  [1]: "render function",
  [2]: "watcher getter",
  [3]: "watcher callback",
  [4]: "watcher cleanup function",
  [5]: "native event handler",
  [6]: "component event handler",
  [7]: "vnode hook",
  [8]: "directive hook",
  [9]: "transition hook",
  [10]: "app errorHandler",
  [11]: "app warnHandler",
  [12]: "ref function",
  [13]: "async component loader",
  [14]: "scheduler flush. This is likely a Vue internals bug. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/core"
};
function $e(e, t, n, o) {
  let r;
  try {
    r = o ? e(...o) : e();
  } catch (i) {
    En(i, t, n);
  }
  return r;
}
function Ee(e, t, n, o) {
  if (T(e)) {
    const i = $e(e, t, n, o);
    return i && so(i) && i.catch((s) => {
      En(s, t, n);
    }), i;
  }
  const r = [];
  for (let i = 0; i < e.length; i++)
    r.push(Ee(e[i], t, n, o));
  return r;
}
function En(e, t, n, o = !0) {
  const r = t ? t.vnode : null;
  if (t) {
    let i = t.parent;
    const s = t.proxy, c = {}.NODE_ENV !== "production" ? ho[n] : n;
    for (; i; ) {
      const d = i.ec;
      if (d) {
        for (let h = 0; h < d.length; h++)
          if (d[h](e, s, c) === !1)
            return;
      }
      i = i.parent;
    }
    const f = t.appContext.config.errorHandler;
    if (f) {
      $e(f, null, 10, [e, s, c]);
      return;
    }
  }
  Cl(e, n, r, o);
}
function Cl(e, t, n, o = !0) {
  if ({}.NODE_ENV !== "production") {
    const r = ho[t];
    if (n && Zt(n), y(`Unhandled error${r ? ` during execution of ${r}` : ""}`), n && Yt(), o)
      throw e;
    console.error(e);
  } else
    console.error(e);
}
let jt = !1, Un = !1;
const te = [];
let De = 0;
const Et = [];
let ve = null, Fe = 0;
const Br = /* @__PURE__ */ Promise.resolve();
let mo = null;
const $l = 100;
function jl(e) {
  const t = mo || Br;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Ml(e) {
  let t = De + 1, n = te.length;
  for (; t < n; ) {
    const o = t + n >>> 1;
    Mt(te[o]) < e ? t = o + 1 : n = o;
  }
  return t;
}
function bn(e) {
  (!te.length || !te.includes(e, jt && e.allowRecurse ? De + 1 : De)) && (e.id == null ? te.push(e) : te.splice(Ml(e.id), 0, e), Ur());
}
function Ur() {
  !jt && !Un && (Un = !0, mo = Br.then(zr));
}
function Sl(e) {
  const t = te.indexOf(e);
  t > De && te.splice(t, 1);
}
function Wr(e) {
  I(e) ? Et.push(...e) : (!ve || !ve.includes(e, e.allowRecurse ? Fe + 1 : Fe)) && Et.push(e), Ur();
}
function Ko(e, t = jt ? De + 1 : 0) {
  for ({}.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()); t < te.length; t++) {
    const n = te[t];
    if (n && n.pre) {
      if ({}.NODE_ENV !== "production" && go(e, n))
        continue;
      te.splice(t, 1), t--, n();
    }
  }
}
function Kr(e) {
  if (Et.length) {
    const t = [...new Set(Et)];
    if (Et.length = 0, ve) {
      ve.push(...t);
      return;
    }
    for (ve = t, {}.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), ve.sort((n, o) => Mt(n) - Mt(o)), Fe = 0; Fe < ve.length; Fe++)
      ({}).NODE_ENV !== "production" && go(e, ve[Fe]) || ve[Fe]();
    ve = null, Fe = 0;
  }
}
const Mt = (e) => e.id == null ? 1 / 0 : e.id, Pl = (e, t) => {
  const n = Mt(e) - Mt(t);
  if (n === 0) {
    if (e.pre && !t.pre)
      return -1;
    if (t.pre && !e.pre)
      return 1;
  }
  return n;
};
function zr(e) {
  Un = !1, jt = !0, {}.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), te.sort(Pl);
  const t = {}.NODE_ENV !== "production" ? (n) => go(e, n) : Q;
  try {
    for (De = 0; De < te.length; De++) {
      const n = te[De];
      if (n && n.active !== !1) {
        if ({}.NODE_ENV !== "production" && t(n))
          continue;
        $e(n, null, 14);
      }
    }
  } finally {
    De = 0, te.length = 0, Kr(e), jt = !1, mo = null, (te.length || Et.length) && zr(e);
  }
}
function go(e, t) {
  if (!e.has(t))
    e.set(t, 1);
  else {
    const n = e.get(t);
    if (n > $l) {
      const o = t.ownerInstance, r = o && yi(o.type);
      return y(`Maximum recursive updates exceeded${r ? ` in component <${r}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`), !0;
    } else
      e.set(t, n + 1);
  }
}
let nt = !1;
const pt = /* @__PURE__ */ new Set();
({}).NODE_ENV !== "production" && (vr().__VUE_HMR_RUNTIME__ = {
  createRecord: In(qr),
  rerender: In(Fl),
  reload: In(Ll)
});
const st = /* @__PURE__ */ new Map();
function Al(e) {
  const t = e.type.__hmrId;
  let n = st.get(t);
  n || (qr(t, e.type), n = st.get(t)), n.instances.add(e);
}
function Rl(e) {
  st.get(e.type.__hmrId).instances.delete(e);
}
function qr(e, t) {
  return st.has(e) ? !1 : (st.set(e, {
    initialDef: It(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function It(e) {
  return wi(e) ? e.__vccOpts : e;
}
function Fl(e, t) {
  const n = st.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((o) => {
    t && (o.render = t, It(o.type).render = t), o.renderCache = [], nt = !0, o.update(), nt = !1;
  }));
}
function Ll(e, t) {
  const n = st.get(e);
  if (!n)
    return;
  t = It(t), zo(n.initialDef, t);
  const o = [...n.instances];
  for (const r of o) {
    const i = It(r.type);
    pt.has(i) || (i !== n.initialDef && zo(i, t), pt.add(i)), r.appContext.optionsCache.delete(r.type), r.ceReload ? (pt.add(i), r.ceReload(t.styles), pt.delete(i)) : r.parent ? bn(r.parent.update) : r.appContext.reload ? r.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn("[HMR] Root or manually mounted instance modified. Full reload required.");
  }
  Wr(() => {
    for (const r of o)
      pt.delete(It(r.type));
  });
}
function zo(e, t) {
  G(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function In(e) {
  return (t, n) => {
    try {
      return e(t, n);
    } catch (o) {
      console.error(o), console.warn("[HMR] Something went wrong during Vue component hot-reload. Full reload required.");
    }
  };
}
let xe, Tt = [], Wn = !1;
function Rt(e, ...t) {
  xe ? xe.emit(e, ...t) : Wn || Tt.push({ event: e, args: t });
}
function Jr(e, t) {
  var n, o;
  xe = e, xe ? (xe.enabled = !0, Tt.forEach(({ event: r, args: i }) => xe.emit(r, ...i)), Tt = []) : typeof window < "u" && window.HTMLElement && !(!((o = (n = window.navigator) === null || n === void 0 ? void 0 : n.userAgent) === null || o === void 0) && o.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((i) => {
    Jr(i, t);
  }), setTimeout(() => {
    xe || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, Wn = !0, Tt = []);
  }, 3e3)) : (Wn = !0, Tt = []);
}
function Hl(e, t) {
  Rt("app:init", e, t, {
    Fragment: de,
    Text: Ft,
    Comment: be,
    Static: en
  });
}
function kl(e) {
  Rt("app:unmount", e);
}
const Bl = /* @__PURE__ */ _o("component:added"), Zr = /* @__PURE__ */ _o("component:updated"), Ul = /* @__PURE__ */ _o("component:removed"), Wl = (e) => {
  xe && typeof xe.cleanupBuffer == "function" && !xe.cleanupBuffer(e) && Ul(e);
};
function _o(e) {
  return (t) => {
    Rt(e, t.appContext.app, t.uid, t.parent ? t.parent.uid : void 0, t);
  };
}
const Kl = /* @__PURE__ */ Yr("perf:start"), zl = /* @__PURE__ */ Yr("perf:end");
function Yr(e) {
  return (t, n, o) => {
    Rt(e, t.appContext.app, t.uid, t, n, o);
  };
}
function ql(e, t, n) {
  Rt("component:emit", e.appContext.app, e, t, n);
}
function Jl(e, t, ...n) {
  if (e.isUnmounted)
    return;
  const o = e.vnode.props || B;
  if ({}.NODE_ENV !== "production") {
    const { emitsOptions: h, propsOptions: [a] } = e;
    if (h)
      if (!(t in h))
        (!a || !(Ze(t) in a)) && y(`Component emitted event "${t}" but it is neither declared in the emits option nor as an "${Ze(t)}" prop.`);
      else {
        const E = h[t];
        T(E) && (E(...n) || y(`Invalid event arguments: event validation failed for event "${t}".`));
      }
  }
  let r = n;
  const i = t.startsWith("update:"), s = i && t.slice(7);
  if (s && s in o) {
    const h = `${s === "modelValue" ? "model" : s}Modifiers`, { number: a, trim: E } = o[h] || B;
    E && (r = n.map((x) => Z(x) ? x.trim() : x)), a && (r = n.map(wr));
  }
  if ({}.NODE_ENV !== "production" && ql(e, t, r), {}.NODE_ENV !== "production") {
    const h = t.toLowerCase();
    h !== t && o[Ze(h)] && y(`Event "${h}" is emitted in component ${wn(e, e.type)} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${Ue(t)}" instead of "${t}".`);
  }
  let c, f = o[c = Ze(t)] || o[c = Ze(bt(t))];
  !f && i && (f = o[c = Ze(Ue(t))]), f && Ee(f, e, 6, r);
  const d = o[c + "Once"];
  if (d) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[c])
      return;
    e.emitted[c] = !0, Ee(d, e, 6, r);
  }
}
function Gr(e, t, n = !1) {
  const o = t.emitsCache, r = o.get(e);
  if (r !== void 0)
    return r;
  const i = e.emits;
  let s = {}, c = !1;
  if (!T(e)) {
    const f = (d) => {
      const h = Gr(d, t, !0);
      h && (c = !0, G(s, h));
    };
    !n && t.mixins.length && t.mixins.forEach(f), e.extends && f(e.extends), e.mixins && e.mixins.forEach(f);
  }
  return !i && !c ? (U(e) && o.set(e, null), null) : (I(i) ? i.forEach((f) => s[f] = null) : G(s, i), U(e) && o.set(e, s), s);
}
function Nn(e, t) {
  return !e || !At(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), M(e, t[0].toLowerCase() + t.slice(1)) || M(e, Ue(t)) || M(e, t));
}
let pe = null, Qr = null;
function sn(e) {
  const t = pe;
  return pe = e, Qr = e && e.type.__scopeId || null, t;
}
function Zl(e, t = pe, n) {
  if (!t || e._n)
    return e;
  const o = (...r) => {
    o._d && nr(-1);
    const i = sn(t);
    let s;
    try {
      s = e(...r);
    } finally {
      sn(i), o._d && nr(1);
    }
    return {}.NODE_ENV !== "production" && Zr(t), s;
  };
  return o._n = !0, o._c = !0, o._d = !0, o;
}
let Kn = !1;
function ln() {
  Kn = !0;
}
function Cn(e) {
  const { type: t, vnode: n, proxy: o, withProxy: r, props: i, propsOptions: [s], slots: c, attrs: f, emit: d, render: h, renderCache: a, data: E, setupState: x, ctx: P, inheritAttrs: $ } = e;
  let W, q;
  const J = sn(e);
  ({}).NODE_ENV !== "production" && (Kn = !1);
  try {
    if (n.shapeFlag & 4) {
      const z = r || o;
      W = ge(h.call(z, z, a, i, x, E, P)), q = f;
    } else {
      const z = t;
      ({}).NODE_ENV !== "production" && f === i && ln(), W = ge(z.length > 1 ? z(i, {}.NODE_ENV !== "production" ? {
        get attrs() {
          return ln(), f;
        },
        slots: c,
        emit: d
      } : { attrs: f, slots: c, emit: d }) : z(i, null)), q = t.props ? f : Gl(f);
    }
  } catch (z) {
    Ct.length = 0, En(z, e, 1), W = Be(be);
  }
  let K = W, A;
  if ({}.NODE_ENV !== "production" && W.patchFlag > 0 && W.patchFlag & 2048 && ([K, A] = Yl(W)), q && $ !== !1) {
    const z = Object.keys(q), { shapeFlag: H } = K;
    if (z.length) {
      if (H & 7)
        s && z.some(nn) && (q = Ql(q, s)), K = Ke(K, q);
      else if ({}.NODE_ENV !== "production" && !Kn && K.type !== be) {
        const oe = Object.keys(f), le = [], ce = [];
        for (let Ve = 0, Se = oe.length; Ve < Se; Ve++) {
          const he = oe[Ve];
          At(he) ? nn(he) || le.push(he[2].toLowerCase() + he.slice(3)) : ce.push(he);
        }
        ce.length && y(`Extraneous non-props attributes (${ce.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`), le.length && y(`Extraneous non-emits event listeners (${le.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`);
      }
    }
  }
  return n.dirs && ({}.NODE_ENV !== "production" && !qo(K) && y("Runtime directive used on component with non-element root node. The directives will not function as intended."), K = Ke(K), K.dirs = K.dirs ? K.dirs.concat(n.dirs) : n.dirs), n.transition && ({}.NODE_ENV !== "production" && !qo(K) && y("Component inside <Transition> renders non-element root node that cannot be animated."), K.transition = n.transition), {}.NODE_ENV !== "production" && A ? A(K) : W = K, sn(J), W;
}
const Yl = (e) => {
  const t = e.children, n = e.dynamicChildren, o = Xr(t);
  if (!o)
    return [e, void 0];
  const r = t.indexOf(o), i = n ? n.indexOf(o) : -1, s = (c) => {
    t[r] = c, n && (i > -1 ? n[i] = c : c.patchFlag > 0 && (e.dynamicChildren = [...n, c]));
  };
  return [ge(o), s];
};
function Xr(e) {
  let t;
  for (let n = 0; n < e.length; n++) {
    const o = e[n];
    if (yo(o)) {
      if (o.type !== be || o.children === "v-if") {
        if (t)
          return;
        t = o;
      }
    } else
      return;
  }
  return t;
}
const Gl = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || At(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Ql = (e, t) => {
  const n = {};
  for (const o in e)
    (!nn(o) || !(o.slice(9) in t)) && (n[o] = e[o]);
  return n;
}, qo = (e) => e.shapeFlag & 7 || e.type === be;
function Xl(e, t, n) {
  const { props: o, children: r, component: i } = e, { props: s, children: c, patchFlag: f } = t, d = i.emitsOptions;
  if ({}.NODE_ENV !== "production" && (r || c) && nt || t.dirs || t.transition)
    return !0;
  if (n && f >= 0) {
    if (f & 1024)
      return !0;
    if (f & 16)
      return o ? Jo(o, s, d) : !!s;
    if (f & 8) {
      const h = t.dynamicProps;
      for (let a = 0; a < h.length; a++) {
        const E = h[a];
        if (s[E] !== o[E] && !Nn(d, E))
          return !0;
      }
    }
  } else
    return (r || c) && (!c || !c.$stable) ? !0 : o === s ? !1 : o ? s ? Jo(o, s, d) : !0 : !!s;
  return !1;
}
function Jo(e, t, n) {
  const o = Object.keys(t);
  if (o.length !== Object.keys(e).length)
    return !0;
  for (let r = 0; r < o.length; r++) {
    const i = o[r];
    if (t[i] !== e[i] && !Nn(n, i))
      return !0;
  }
  return !1;
}
function ec({ vnode: e, parent: t }, n) {
  for (; t && t.subTree === e; )
    (e = t.vnode).el = n, t = t.parent;
}
const tc = (e) => e.__isSuspense;
function nc(e, t) {
  t && t.pendingBranch ? I(e) ? t.effects.push(...e) : t.effects.push(e) : Wr(e);
}
function oc(e, t) {
  if (!X)
    ({}).NODE_ENV !== "production" && y("provide() can only be used inside setup().");
  else {
    let n = X.provides;
    const o = X.parent && X.parent.provides;
    o === n && (n = X.provides = Object.create(o)), n[e] = t;
  }
}
function Gt(e, t, n = !1) {
  const o = X || pe;
  if (o) {
    const r = o.parent == null ? o.vnode.appContext && o.vnode.appContext.provides : o.parent.provides;
    if (r && e in r)
      return r[e];
    if (arguments.length > 1)
      return n && T(t) ? t.call(o.proxy) : t;
    ({}).NODE_ENV !== "production" && y(`injection "${String(e)}" not found.`);
  } else
    ({}).NODE_ENV !== "production" && y("inject() can only be used inside setup() or functional components.");
}
const qt = {};
function $n(e, t, n) {
  return {}.NODE_ENV !== "production" && !T(t) && y("`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."), ei(e, t, n);
}
function ei(e, t, { immediate: n, deep: o, flush: r, onTrack: i, onTrigger: s } = B) {
  ({}).NODE_ENV !== "production" && !t && (n !== void 0 && y('watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'), o !== void 0 && y('watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'));
  const c = (A) => {
    y("Invalid watch source: ", A, "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.");
  }, f = X;
  let d, h = !1, a = !1;
  if (ee(e) ? (d = () => e.value, h = kn(e)) : et(e) ? (d = () => e, o = !0) : I(e) ? (a = !0, h = e.some((A) => et(A) || kn(A)), d = () => e.map((A) => {
    if (ee(A))
      return A.value;
    if (et(A))
      return gt(A);
    if (T(A))
      return $e(A, f, 2);
    ({}).NODE_ENV !== "production" && c(A);
  })) : T(e) ? t ? d = () => $e(e, f, 2) : d = () => {
    if (!(f && f.isUnmounted))
      return E && E(), Ee(e, f, 3, [x]);
  } : (d = Q, {}.NODE_ENV !== "production" && c(e)), t && o) {
    const A = d;
    d = () => gt(A());
  }
  let E, x = (A) => {
    E = J.onStop = () => {
      $e(A, f, 4);
    };
  }, P;
  if (Pt)
    if (x = Q, t ? n && Ee(t, f, 3, [
      d(),
      a ? [] : void 0,
      x
    ]) : d(), r === "sync") {
      const A = ff();
      P = A.__watcherHandles || (A.__watcherHandles = []);
    } else
      return Q;
  let $ = a ? new Array(e.length).fill(qt) : qt;
  const W = () => {
    if (J.active)
      if (t) {
        const A = J.run();
        (o || h || (a ? A.some((z, H) => on(z, $[H])) : on(A, $))) && (E && E(), Ee(t, f, 3, [
          A,
          $ === qt ? void 0 : a && $[0] === qt ? [] : $,
          x
        ]), $ = A);
      } else
        J.run();
  };
  W.allowRecurse = !!t;
  let q;
  r === "sync" ? q = W : r === "post" ? q = () => ue(W, f && f.suspense) : (W.pre = !0, f && (W.id = f.uid), q = () => bn(W));
  const J = new fo(d, q);
  ({}).NODE_ENV !== "production" && (J.onTrack = i, J.onTrigger = s), t ? n ? W() : $ = J.run() : r === "post" ? ue(J.run.bind(J), f && f.suspense) : J.run();
  const K = () => {
    J.stop(), f && f.scope && ro(f.scope.effects, J);
  };
  return P && P.push(K), K;
}
function rc(e, t, n) {
  const o = this.proxy, r = Z(e) ? e.includes(".") ? ti(o, e) : () => o[e] : e.bind(o, o);
  let i;
  T(t) ? i = t : (i = t.handler, n = t);
  const s = X;
  Nt(this);
  const c = ei(r, i.bind(o), n);
  return s ? Nt(s) : rt(), c;
}
function ti(e, t) {
  const n = t.split(".");
  return () => {
    let o = e;
    for (let r = 0; r < n.length && o; r++)
      o = o[n[r]];
    return o;
  };
}
function gt(e, t) {
  if (!U(e) || e.__v_skip || (t = t || /* @__PURE__ */ new Set(), t.has(e)))
    return e;
  if (t.add(e), ee(e))
    gt(e.value, t);
  else if (I(e))
    for (let n = 0; n < e.length; n++)
      gt(e[n], t);
  else if (Nr(e) || Qe(e))
    e.forEach((n) => {
      gt(n, t);
    });
  else if (yr(e))
    for (const n in e)
      gt(e[n], t);
  return e;
}
function ni(e) {
  return T(e) ? { setup: e, name: e.name } : e;
}
const Qt = (e) => !!e.type.__asyncLoader, Eo = (e) => e.type.__isKeepAlive;
function ic(e, t) {
  oi(e, "a", t);
}
function sc(e, t) {
  oi(e, "da", t);
}
function oi(e, t, n = X) {
  const o = e.__wdc || (e.__wdc = () => {
    let r = n;
    for (; r; ) {
      if (r.isDeactivated)
        return;
      r = r.parent;
    }
    return e();
  });
  if (On(t, o, n), n) {
    let r = n.parent;
    for (; r && r.parent; )
      Eo(r.parent.vnode) && lc(o, t, n, r), r = r.parent;
  }
}
function lc(e, t, n, o) {
  const r = On(t, e, o, !0);
  ri(() => {
    ro(o[t], r);
  }, n);
}
function On(e, t, n = X, o = !1) {
  if (n) {
    const r = n[e] || (n[e] = []), i = t.__weh || (t.__weh = (...s) => {
      if (n.isUnmounted)
        return;
      ct(), Nt(n);
      const c = Ee(t, n, e, s);
      return rt(), ft(), c;
    });
    return o ? r.unshift(i) : r.push(i), i;
  } else if ({}.NODE_ENV !== "production") {
    const r = Ze(ho[e].replace(/ hook$/, ""));
    y(`${r} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`);
  }
}
const Me = (e) => (t, n = X) => (!Pt || e === "sp") && On(e, (...o) => t(...o), n), cc = Me("bm"), fc = Me("m"), uc = Me("bu"), ac = Me("u"), dc = Me("bum"), ri = Me("um"), pc = Me("sp"), hc = Me("rtg"), mc = Me("rtc");
function gc(e, t = X) {
  On("ec", e, t);
}
function ii(e) {
  Bs(e) && y("Do not use built-in directive ids as custom directive id: " + e);
}
function qe(e, t, n, o) {
  const r = e.dirs, i = t && t.dirs;
  for (let s = 0; s < r.length; s++) {
    const c = r[s];
    i && (c.oldValue = i[s].value);
    let f = c.dir[o];
    f && (ct(), Ee(f, n, 8, [
      e.el,
      c,
      e,
      t
    ]), ft());
  }
}
const _c = Symbol(), zn = (e) => e ? Ni(e) ? vo(e) || e.proxy : zn(e.parent) : null, ot = /* @__PURE__ */ G(/* @__PURE__ */ Object.create(null), {
  $: (e) => e,
  $el: (e) => e.vnode.el,
  $data: (e) => e.data,
  $props: (e) => ({}).NODE_ENV !== "production" ? mt(e.props) : e.props,
  $attrs: (e) => ({}).NODE_ENV !== "production" ? mt(e.attrs) : e.attrs,
  $slots: (e) => ({}).NODE_ENV !== "production" ? mt(e.slots) : e.slots,
  $refs: (e) => ({}).NODE_ENV !== "production" ? mt(e.refs) : e.refs,
  $parent: (e) => zn(e.parent),
  $root: (e) => zn(e.root),
  $emit: (e) => e.emit,
  $options: (e) => No(e),
  $forceUpdate: (e) => e.f || (e.f = () => bn(e.update)),
  $nextTick: (e) => e.n || (e.n = jl.bind(e.proxy)),
  $watch: (e) => rc.bind(e)
}), bo = (e) => e === "_" || e === "$", jn = (e, t) => e !== B && !e.__isScriptSetup && M(e, t), si = {
  get({ _: e }, t) {
    const { ctx: n, setupState: o, data: r, props: i, accessCache: s, type: c, appContext: f } = e;
    if ({}.NODE_ENV !== "production" && t === "__isVue")
      return !0;
    let d;
    if (t[0] !== "$") {
      const x = s[t];
      if (x !== void 0)
        switch (x) {
          case 1:
            return o[t];
          case 2:
            return r[t];
          case 4:
            return n[t];
          case 3:
            return i[t];
        }
      else {
        if (jn(o, t))
          return s[t] = 1, o[t];
        if (r !== B && M(r, t))
          return s[t] = 2, r[t];
        if ((d = e.propsOptions[0]) && M(d, t))
          return s[t] = 3, i[t];
        if (n !== B && M(n, t))
          return s[t] = 4, n[t];
        qn && (s[t] = 0);
      }
    }
    const h = ot[t];
    let a, E;
    if (h)
      return t === "$attrs" && (ae(e, "get", t), {}.NODE_ENV !== "production" && ln()), h(e);
    if ((a = c.__cssModules) && (a = a[t]))
      return a;
    if (n !== B && M(n, t))
      return s[t] = 4, n[t];
    if (E = f.config.globalProperties, M(E, t))
      return E[t];
    ({}).NODE_ENV !== "production" && pe && (!Z(t) || t.indexOf("__v") !== 0) && (r !== B && bo(t[0]) && M(r, t) ? y(`Property ${JSON.stringify(t)} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`) : e === pe && y(`Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`));
  },
  set({ _: e }, t, n) {
    const { data: o, setupState: r, ctx: i } = e;
    return jn(r, t) ? (r[t] = n, !0) : {}.NODE_ENV !== "production" && r.__isScriptSetup && M(r, t) ? (y(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : o !== B && M(o, t) ? (o[t] = n, !0) : M(e.props, t) ? ({}.NODE_ENV !== "production" && y(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? ({}.NODE_ENV !== "production" && y(`Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`), !1) : ({}.NODE_ENV !== "production" && t in e.appContext.config.globalProperties ? Object.defineProperty(i, t, {
      enumerable: !0,
      configurable: !0,
      value: n
    }) : i[t] = n, !0);
  },
  has({ _: { data: e, setupState: t, accessCache: n, ctx: o, appContext: r, propsOptions: i } }, s) {
    let c;
    return !!n[s] || e !== B && M(e, s) || jn(t, s) || (c = i[0]) && M(c, s) || M(o, s) || M(ot, s) || M(r.config.globalProperties, s);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : M(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
({}).NODE_ENV !== "production" && (si.ownKeys = (e) => (y("Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."), Reflect.ownKeys(e)));
function Ec(e) {
  const t = {};
  return Object.defineProperty(t, "_", {
    configurable: !0,
    enumerable: !1,
    get: () => e
  }), Object.keys(ot).forEach((n) => {
    Object.defineProperty(t, n, {
      configurable: !0,
      enumerable: !1,
      get: () => ot[n](e),
      set: Q
    });
  }), t;
}
function bc(e) {
  const { ctx: t, propsOptions: [n] } = e;
  n && Object.keys(n).forEach((o) => {
    Object.defineProperty(t, o, {
      enumerable: !0,
      configurable: !0,
      get: () => e.props[o],
      set: Q
    });
  });
}
function Nc(e) {
  const { ctx: t, setupState: n } = e;
  Object.keys(j(n)).forEach((o) => {
    if (!n.__isScriptSetup) {
      if (bo(o[0])) {
        y(`setup() return property ${JSON.stringify(o)} should not start with "$" or "_" which are reserved prefixes for Vue internals.`);
        return;
      }
      Object.defineProperty(t, o, {
        enumerable: !0,
        configurable: !0,
        get: () => n[o],
        set: Q
      });
    }
  });
}
function Oc() {
  const e = /* @__PURE__ */ Object.create(null);
  return (t, n) => {
    e[n] ? y(`${t} property "${n}" is already defined in ${e[n]}.`) : e[n] = t;
  };
}
let qn = !0;
function yc(e) {
  const t = No(e), n = e.proxy, o = e.ctx;
  qn = !1, t.beforeCreate && Zo(t.beforeCreate, e, "bc");
  const {
    data: r,
    computed: i,
    methods: s,
    watch: c,
    provide: f,
    inject: d,
    created: h,
    beforeMount: a,
    mounted: E,
    beforeUpdate: x,
    updated: P,
    activated: $,
    deactivated: W,
    beforeDestroy: q,
    beforeUnmount: J,
    destroyed: K,
    unmounted: A,
    render: z,
    renderTracked: H,
    renderTriggered: oe,
    errorCaptured: le,
    serverPrefetch: ce,
    expose: Ve,
    inheritAttrs: Se,
    components: he,
    directives: Lt,
    filters: Do
  } = t, Pe = {}.NODE_ENV !== "production" ? Oc() : null;
  if ({}.NODE_ENV !== "production") {
    const [R] = e.propsOptions;
    if (R)
      for (const F in R)
        Pe("Props", F);
  }
  if (d && wc(d, o, Pe, e.appContext.config.unwrapInjectedRef), s)
    for (const R in s) {
      const F = s[R];
      T(F) ? ({}.NODE_ENV !== "production" ? Object.defineProperty(o, R, {
        value: F.bind(n),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }) : o[R] = F.bind(n), {}.NODE_ENV !== "production" && Pe("Methods", R)) : {}.NODE_ENV !== "production" && y(`Method "${R}" has type "${typeof F}" in the component definition. Did you reference the function correctly?`);
    }
  if (r) {
    ({}).NODE_ENV !== "production" && !T(r) && y("The data option must be a function. Plain object usage is no longer supported.");
    const R = r.call(n, n);
    if ({}.NODE_ENV !== "production" && so(R) && y("data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."), !U(R))
      ({}).NODE_ENV !== "production" && y("data() should return an object.");
    else if (e.data = gn(R), {}.NODE_ENV !== "production")
      for (const F in R)
        Pe("Data", F), bo(F[0]) || Object.defineProperty(o, F, {
          configurable: !0,
          enumerable: !0,
          get: () => R[F],
          set: Q
        });
  }
  if (qn = !0, i)
    for (const R in i) {
      const F = i[R], Ne = T(F) ? F.bind(n, n) : T(F.get) ? F.get.bind(n, n) : Q;
      ({}).NODE_ENV !== "production" && Ne === Q && y(`Computed property "${R}" has no getter.`);
      const vn = !T(F) && T(F.set) ? F.set.bind(n) : {}.NODE_ENV !== "production" ? () => {
        y(`Write operation failed: computed property "${R}" is readonly.`);
      } : Q, Ot = lf({
        get: Ne,
        set: vn
      });
      Object.defineProperty(o, R, {
        enumerable: !0,
        configurable: !0,
        get: () => Ot.value,
        set: (ut) => Ot.value = ut
      }), {}.NODE_ENV !== "production" && Pe("Computed", R);
    }
  if (c)
    for (const R in c)
      li(c[R], o, n, R);
  if (f) {
    const R = T(f) ? f.call(n) : f;
    Reflect.ownKeys(R).forEach((F) => {
      oc(F, R[F]);
    });
  }
  h && Zo(h, e, "c");
  function fe(R, F) {
    I(F) ? F.forEach((Ne) => R(Ne.bind(n))) : F && R(F.bind(n));
  }
  if (fe(cc, a), fe(fc, E), fe(uc, x), fe(ac, P), fe(ic, $), fe(sc, W), fe(gc, le), fe(mc, H), fe(hc, oe), fe(dc, J), fe(ri, A), fe(pc, ce), I(Ve))
    if (Ve.length) {
      const R = e.exposed || (e.exposed = {});
      Ve.forEach((F) => {
        Object.defineProperty(R, F, {
          get: () => n[F],
          set: (Ne) => n[F] = Ne
        });
      });
    } else
      e.exposed || (e.exposed = {});
  z && e.render === Q && (e.render = z), Se != null && (e.inheritAttrs = Se), he && (e.components = he), Lt && (e.directives = Lt);
}
function wc(e, t, n = Q, o = !1) {
  I(e) && (e = Jn(e));
  for (const r in e) {
    const i = e[r];
    let s;
    U(i) ? "default" in i ? s = Gt(i.from || r, i.default, !0) : s = Gt(i.from || r) : s = Gt(i), ee(s) ? o ? Object.defineProperty(t, r, {
      enumerable: !0,
      configurable: !0,
      get: () => s.value,
      set: (c) => s.value = c
    }) : ({}.NODE_ENV !== "production" && y(`injected property "${r}" is a ref and will be auto-unwrapped and no longer needs \`.value\` in the next minor release. To opt-in to the new behavior now, set \`app.config.unwrapInjectedRef = true\` (this config is temporary and will not be needed in the future.)`), t[r] = s) : t[r] = s, {}.NODE_ENV !== "production" && n("Inject", r);
  }
}
function Zo(e, t, n) {
  Ee(I(e) ? e.map((o) => o.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function li(e, t, n, o) {
  const r = o.includes(".") ? ti(n, o) : () => n[o];
  if (Z(e)) {
    const i = t[e];
    T(i) ? $n(r, i) : {}.NODE_ENV !== "production" && y(`Invalid watch handler specified by key "${e}"`, i);
  } else if (T(e))
    $n(r, e.bind(n));
  else if (U(e))
    if (I(e))
      e.forEach((i) => li(i, t, n, o));
    else {
      const i = T(e.handler) ? e.handler.bind(n) : t[e.handler];
      T(i) ? $n(r, i, e) : {}.NODE_ENV !== "production" && y(`Invalid watch handler specified by key "${e.handler}"`, i);
    }
  else
    ({}).NODE_ENV !== "production" && y(`Invalid watch option: "${o}"`, e);
}
function No(e) {
  const t = e.type, { mixins: n, extends: o } = t, { mixins: r, optionsCache: i, config: { optionMergeStrategies: s } } = e.appContext, c = i.get(t);
  let f;
  return c ? f = c : !r.length && !n && !o ? f = t : (f = {}, r.length && r.forEach((d) => cn(f, d, s, !0)), cn(f, t, s)), U(t) && i.set(t, f), f;
}
function cn(e, t, n, o = !1) {
  const { mixins: r, extends: i } = t;
  i && cn(e, i, n, !0), r && r.forEach((s) => cn(e, s, n, !0));
  for (const s in t)
    if (o && s === "expose")
      ({}).NODE_ENV !== "production" && y('"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.');
    else {
      const c = vc[s] || n && n[s];
      e[s] = c ? c(e[s], t[s]) : t[s];
    }
  return e;
}
const vc = {
  data: Yo,
  props: Ye,
  emits: Ye,
  methods: Ye,
  computed: Ye,
  beforeCreate: ie,
  created: ie,
  beforeMount: ie,
  mounted: ie,
  beforeUpdate: ie,
  updated: ie,
  beforeDestroy: ie,
  beforeUnmount: ie,
  destroyed: ie,
  unmounted: ie,
  activated: ie,
  deactivated: ie,
  errorCaptured: ie,
  serverPrefetch: ie,
  components: Ye,
  directives: Ye,
  watch: xc,
  provide: Yo,
  inject: Dc
};
function Yo(e, t) {
  return t ? e ? function() {
    return G(T(e) ? e.call(this, this) : e, T(t) ? t.call(this, this) : t);
  } : t : e;
}
function Dc(e, t) {
  return Ye(Jn(e), Jn(t));
}
function Jn(e) {
  if (I(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function ie(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Ye(e, t) {
  return e ? G(G(/* @__PURE__ */ Object.create(null), e), t) : t;
}
function xc(e, t) {
  if (!e)
    return t;
  if (!t)
    return e;
  const n = G(/* @__PURE__ */ Object.create(null), e);
  for (const o in t)
    n[o] = ie(e[o], t[o]);
  return n;
}
function Vc(e, t, n, o = !1) {
  const r = {}, i = {};
  rn(i, yn, 1), e.propsDefaults = /* @__PURE__ */ Object.create(null), ci(e, t, r, i);
  for (const s in e.propsOptions[0])
    s in r || (r[s] = void 0);
  ({}).NODE_ENV !== "production" && ui(t || {}, r, e), n ? e.props = o ? r : bl(r) : e.type.props ? e.props = r : e.props = i, e.attrs = i;
}
function Tc(e) {
  for (; e; ) {
    if (e.type.__hmrId)
      return !0;
    e = e.parent;
  }
}
function Ic(e, t, n, o) {
  const { props: r, attrs: i, vnode: { patchFlag: s } } = e, c = j(r), [f] = e.propsOptions;
  let d = !1;
  if (!({}.NODE_ENV !== "production" && Tc(e)) && (o || s > 0) && !(s & 16)) {
    if (s & 8) {
      const h = e.vnode.dynamicProps;
      for (let a = 0; a < h.length; a++) {
        let E = h[a];
        if (Nn(e.emitsOptions, E))
          continue;
        const x = t[E];
        if (f)
          if (M(i, E))
            x !== i[E] && (i[E] = x, d = !0);
          else {
            const P = bt(E);
            r[P] = Zn(f, c, P, x, e, !1);
          }
        else
          x !== i[E] && (i[E] = x, d = !0);
      }
    }
  } else {
    ci(e, t, r, i) && (d = !0);
    let h;
    for (const a in c)
      (!t || !M(t, a) && ((h = Ue(a)) === a || !M(t, h))) && (f ? n && (n[a] !== void 0 || n[h] !== void 0) && (r[a] = Zn(f, c, a, void 0, e, !0)) : delete r[a]);
    if (i !== c)
      for (const a in i)
        (!t || !M(t, a)) && (delete i[a], d = !0);
  }
  d && je(e, "set", "$attrs"), {}.NODE_ENV !== "production" && ui(t || {}, r, e);
}
function ci(e, t, n, o) {
  const [r, i] = e.propsOptions;
  let s = !1, c;
  if (t)
    for (let f in t) {
      if (Jt(f))
        continue;
      const d = t[f];
      let h;
      r && M(r, h = bt(f)) ? !i || !i.includes(h) ? n[h] = d : (c || (c = {}))[h] = d : Nn(e.emitsOptions, f) || (!(f in o) || d !== o[f]) && (o[f] = d, s = !0);
    }
  if (i) {
    const f = j(n), d = c || B;
    for (let h = 0; h < i.length; h++) {
      const a = i[h];
      n[a] = Zn(r, f, a, d[a], e, !M(d, a));
    }
  }
  return s;
}
function Zn(e, t, n, o, r, i) {
  const s = e[n];
  if (s != null) {
    const c = M(s, "default");
    if (c && o === void 0) {
      const f = s.default;
      if (s.type !== Function && T(f)) {
        const { propsDefaults: d } = r;
        n in d ? o = d[n] : (Nt(r), o = d[n] = f.call(null, t), rt());
      } else
        o = f;
    }
    s[0] && (i && !c ? o = !1 : s[1] && (o === "" || o === Ue(n)) && (o = !0));
  }
  return o;
}
function fi(e, t, n = !1) {
  const o = t.propsCache, r = o.get(e);
  if (r)
    return r;
  const i = e.props, s = {}, c = [];
  let f = !1;
  if (!T(e)) {
    const h = (a) => {
      f = !0;
      const [E, x] = fi(a, t, !0);
      G(s, E), x && c.push(...x);
    };
    !n && t.mixins.length && t.mixins.forEach(h), e.extends && h(e.extends), e.mixins && e.mixins.forEach(h);
  }
  if (!i && !f)
    return U(e) && o.set(e, _t), _t;
  if (I(i))
    for (let h = 0; h < i.length; h++) {
      ({}).NODE_ENV !== "production" && !Z(i[h]) && y("props must be strings when using array syntax.", i[h]);
      const a = bt(i[h]);
      Go(a) && (s[a] = B);
    }
  else if (i) {
    ({}).NODE_ENV !== "production" && !U(i) && y("invalid props options", i);
    for (const h in i) {
      const a = bt(h);
      if (Go(a)) {
        const E = i[h], x = s[a] = I(E) || T(E) ? { type: E } : Object.assign({}, E);
        if (x) {
          const P = Xo(Boolean, x.type), $ = Xo(String, x.type);
          x[0] = P > -1, x[1] = $ < 0 || P < $, (P > -1 || M(x, "default")) && c.push(a);
        }
      }
    }
  }
  const d = [s, c];
  return U(e) && o.set(e, d), d;
}
function Go(e) {
  return e[0] !== "$" ? !0 : ({}.NODE_ENV !== "production" && y(`Invalid prop name: "${e}" is a reserved property.`), !1);
}
function Yn(e) {
  const t = e && e.toString().match(/^\s*function (\w+)/);
  return t ? t[1] : e === null ? "null" : "";
}
function Qo(e, t) {
  return Yn(e) === Yn(t);
}
function Xo(e, t) {
  return I(t) ? t.findIndex((n) => Qo(n, e)) : T(t) && Qo(t, e) ? 0 : -1;
}
function ui(e, t, n) {
  const o = j(t), r = n.propsOptions[0];
  for (const i in r) {
    let s = r[i];
    s != null && Cc(i, o[i], s, !M(e, i) && !M(e, Ue(i)));
  }
}
function Cc(e, t, n, o) {
  const { type: r, required: i, validator: s } = n;
  if (i && o) {
    y('Missing required prop: "' + e + '"');
    return;
  }
  if (!(t == null && !n.required)) {
    if (r != null && r !== !0) {
      let c = !1;
      const f = I(r) ? r : [r], d = [];
      for (let h = 0; h < f.length && !c; h++) {
        const { valid: a, expectedType: E } = jc(t, f[h]);
        d.push(E || ""), c = a;
      }
      if (!c) {
        y(Mc(e, t, d));
        return;
      }
    }
    s && !s(t) && y('Invalid prop: custom validator check failed for prop "' + e + '".');
  }
}
const $c = /* @__PURE__ */ ze("String,Number,Boolean,Function,Symbol,BigInt");
function jc(e, t) {
  let n;
  const o = Yn(t);
  if ($c(o)) {
    const r = typeof e;
    n = r === o.toLowerCase(), !n && r === "object" && (n = e instanceof t);
  } else
    o === "Object" ? n = U(e) : o === "Array" ? n = I(e) : o === "null" ? n = e === null : n = e instanceof t;
  return {
    valid: n,
    expectedType: o
  };
}
function Mc(e, t, n) {
  let o = `Invalid prop: type check failed for prop "${e}". Expected ${n.map(dn).join(" | ")}`;
  const r = n[0], i = lo(t), s = er(t, r), c = er(t, i);
  return n.length === 1 && tr(r) && !Sc(r, i) && (o += ` with value ${s}`), o += `, got ${i} `, tr(i) && (o += `with value ${c}.`), o;
}
function er(e, t) {
  return t === "String" ? `"${e}"` : t === "Number" ? `${Number(e)}` : `${e}`;
}
function tr(e) {
  return ["string", "number", "boolean"].some((n) => e.toLowerCase() === n);
}
function Sc(...e) {
  return e.some((t) => t.toLowerCase() === "boolean");
}
const ai = (e) => e[0] === "_" || e === "$stable", Oo = (e) => I(e) ? e.map(ge) : [ge(e)], Pc = (e, t, n) => {
  if (t._n)
    return t;
  const o = Zl((...r) => ({}.NODE_ENV !== "production" && X && y(`Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`), Oo(t(...r))), n);
  return o._c = !1, o;
}, di = (e, t, n) => {
  const o = e._ctx;
  for (const r in e) {
    if (ai(r))
      continue;
    const i = e[r];
    if (T(i))
      t[r] = Pc(r, i, o);
    else if (i != null) {
      ({}).NODE_ENV !== "production" && y(`Non-function value encountered for slot "${r}". Prefer function slots for better performance.`);
      const s = Oo(i);
      t[r] = () => s;
    }
  }
}, pi = (e, t) => {
  ({}).NODE_ENV !== "production" && !Eo(e.vnode) && y("Non-function value encountered for default slot. Prefer function slots for better performance.");
  const n = Oo(t);
  e.slots.default = () => n;
}, Ac = (e, t) => {
  if (e.vnode.shapeFlag & 32) {
    const n = t._;
    n ? (e.slots = j(t), rn(t, "_", n)) : di(t, e.slots = {});
  } else
    e.slots = {}, t && pi(e, t);
  rn(e.slots, yn, 1);
}, Rc = (e, t, n) => {
  const { vnode: o, slots: r } = e;
  let i = !0, s = B;
  if (o.shapeFlag & 32) {
    const c = t._;
    c ? {}.NODE_ENV !== "production" && nt ? G(r, t) : n && c === 1 ? i = !1 : (G(r, t), !n && c === 1 && delete r._) : (i = !t.$stable, di(t, r)), s = t;
  } else
    t && (pi(e, t), s = { default: 1 });
  if (i)
    for (const c in r)
      !ai(c) && !(c in s) && delete r[c];
};
function hi() {
  return {
    app: null,
    config: {
      isNativeTag: br,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let Fc = 0;
function Lc(e, t) {
  return function(o, r = null) {
    T(o) || (o = Object.assign({}, o)), r != null && !U(r) && ({}.NODE_ENV !== "production" && y("root props passed to app.mount() must be an object."), r = null);
    const i = hi(), s = /* @__PURE__ */ new Set();
    let c = !1;
    const f = i.app = {
      _uid: Fc++,
      _component: o,
      _props: r,
      _container: null,
      _context: i,
      _instance: null,
      version: ir,
      get config() {
        return i.config;
      },
      set config(d) {
        ({}).NODE_ENV !== "production" && y("app.config cannot be replaced. Modify individual options instead.");
      },
      use(d, ...h) {
        return s.has(d) ? {}.NODE_ENV !== "production" && y("Plugin has already been applied to target app.") : d && T(d.install) ? (s.add(d), d.install(f, ...h)) : T(d) ? (s.add(d), d(f, ...h)) : {}.NODE_ENV !== "production" && y('A plugin must either be a function or an object with an "install" function.'), f;
      },
      mixin(d) {
        return i.mixins.includes(d) ? {}.NODE_ENV !== "production" && y("Mixin has already been applied to target app" + (d.name ? `: ${d.name}` : "")) : i.mixins.push(d), f;
      },
      component(d, h) {
        return {}.NODE_ENV !== "production" && Qn(d, i.config), h ? ({}.NODE_ENV !== "production" && i.components[d] && y(`Component "${d}" has already been registered in target app.`), i.components[d] = h, f) : i.components[d];
      },
      directive(d, h) {
        return {}.NODE_ENV !== "production" && ii(d), h ? ({}.NODE_ENV !== "production" && i.directives[d] && y(`Directive "${d}" has already been registered in target app.`), i.directives[d] = h, f) : i.directives[d];
      },
      mount(d, h, a) {
        if (c)
          ({}).NODE_ENV !== "production" && y("App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`");
        else {
          ({}).NODE_ENV !== "production" && d.__vue_app__ && y("There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first.");
          const E = Be(o, r);
          return E.appContext = i, {}.NODE_ENV !== "production" && (i.reload = () => {
            e(Ke(E), d, a);
          }), h && t ? t(E, d) : e(E, d, a), c = !0, f._container = d, d.__vue_app__ = f, {}.NODE_ENV !== "production" && (f._instance = E.component, Hl(f, ir)), vo(E.component) || E.component.proxy;
        }
      },
      unmount() {
        c ? (e(null, f._container), {}.NODE_ENV !== "production" && (f._instance = null, kl(f)), delete f._container.__vue_app__) : {}.NODE_ENV !== "production" && y("Cannot unmount an app that is not mounted.");
      },
      provide(d, h) {
        return {}.NODE_ENV !== "production" && d in i.provides && y(`App already provides property with key "${String(d)}". It will be overwritten with the new value.`), i.provides[d] = h, f;
      }
    };
    return f;
  };
}
function Gn(e, t, n, o, r = !1) {
  if (I(e)) {
    e.forEach((E, x) => Gn(E, t && (I(t) ? t[x] : t), n, o, r));
    return;
  }
  if (Qt(o) && !r)
    return;
  const i = o.shapeFlag & 4 ? vo(o.component) || o.component.proxy : o.el, s = r ? null : i, { i: c, r: f } = e;
  if ({}.NODE_ENV !== "production" && !c) {
    y("Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function.");
    return;
  }
  const d = t && t.r, h = c.refs === B ? c.refs = {} : c.refs, a = c.setupState;
  if (d != null && d !== f && (Z(d) ? (h[d] = null, M(a, d) && (a[d] = null)) : ee(d) && (d.value = null)), T(f))
    $e(f, c, 12, [s, h]);
  else {
    const E = Z(f), x = ee(f);
    if (E || x) {
      const P = () => {
        if (e.f) {
          const $ = E ? M(a, f) ? a[f] : h[f] : f.value;
          r ? I($) && ro($, i) : I($) ? $.includes(i) || $.push(i) : E ? (h[f] = [i], M(a, f) && (a[f] = h[f])) : (f.value = [i], e.k && (h[e.k] = f.value));
        } else
          E ? (h[f] = s, M(a, f) && (a[f] = s)) : x ? (f.value = s, e.k && (h[e.k] = s)) : {}.NODE_ENV !== "production" && y("Invalid template ref type:", f, `(${typeof f})`);
      };
      s ? (P.id = -1, ue(P, n)) : P();
    } else
      ({}).NODE_ENV !== "production" && y("Invalid template ref type:", f, `(${typeof f})`);
  }
}
let Dt, He;
function Ie(e, t) {
  e.appContext.config.performance && fn() && He.mark(`vue-${t}-${e.uid}`), {}.NODE_ENV !== "production" && Kl(e, t, fn() ? He.now() : Date.now());
}
function Ce(e, t) {
  if (e.appContext.config.performance && fn()) {
    const n = `vue-${t}-${e.uid}`, o = n + ":end";
    He.mark(o), He.measure(`<${wn(e, e.type)}> ${t}`, n, o), He.clearMarks(n), He.clearMarks(o);
  }
  ({}).NODE_ENV !== "production" && zl(e, t, fn() ? He.now() : Date.now());
}
function fn() {
  return Dt !== void 0 || (typeof window < "u" && window.performance ? (Dt = !0, He = window.performance) : Dt = !1), Dt;
}
function Hc() {
  const e = [];
  if ({}.NODE_ENV !== "production" && e.length) {
    const t = e.length > 1;
    console.warn(`Feature flag${t ? "s" : ""} ${e.join(", ")} ${t ? "are" : "is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`);
  }
}
const ue = nc;
function kc(e) {
  return Bc(e);
}
function Bc(e, t) {
  Hc();
  const n = vr();
  n.__VUE__ = !0, {}.NODE_ENV !== "production" && Jr(n.__VUE_DEVTOOLS_GLOBAL_HOOK__, n);
  const { insert: o, remove: r, patchProp: i, createElement: s, createText: c, createComment: f, setText: d, setElementText: h, parentNode: a, nextSibling: E, setScopeId: x = Q, insertStaticContent: P } = e, $ = (l, u, p, g = null, m = null, N = null, w = !1, b = null, O = {}.NODE_ENV !== "production" && nt ? !1 : !!u.dynamicChildren) => {
    if (l === u)
      return;
    l && !xt(l, u) && (g = Ht(l), Ae(l, m, N, !0), l = null), u.patchFlag === -2 && (O = !1, u.dynamicChildren = null);
    const { type: _, ref: D, shapeFlag: v } = u;
    switch (_) {
      case Ft:
        W(l, u, p, g);
        break;
      case be:
        q(l, u, p, g);
        break;
      case en:
        l == null ? J(u, p, g, w) : {}.NODE_ENV !== "production" && K(l, u, p, w);
        break;
      case de:
        Lt(l, u, p, g, m, N, w, b, O);
        break;
      default:
        v & 1 ? H(l, u, p, g, m, N, w, b, O) : v & 6 ? Do(l, u, p, g, m, N, w, b, O) : v & 64 || v & 128 ? _.process(l, u, p, g, m, N, w, b, O, at) : {}.NODE_ENV !== "production" && y("Invalid VNode type:", _, `(${typeof _})`);
    }
    D != null && m && Gn(D, l && l.ref, N, u || l, !u);
  }, W = (l, u, p, g) => {
    if (l == null)
      o(u.el = c(u.children), p, g);
    else {
      const m = u.el = l.el;
      u.children !== l.children && d(m, u.children);
    }
  }, q = (l, u, p, g) => {
    l == null ? o(u.el = f(u.children || ""), p, g) : u.el = l.el;
  }, J = (l, u, p, g) => {
    [l.el, l.anchor] = P(l.children, u, p, g, l.el, l.anchor);
  }, K = (l, u, p, g) => {
    if (u.children !== l.children) {
      const m = E(l.anchor);
      z(l), [u.el, u.anchor] = P(u.children, p, m, g);
    } else
      u.el = l.el, u.anchor = l.anchor;
  }, A = ({ el: l, anchor: u }, p, g) => {
    let m;
    for (; l && l !== u; )
      m = E(l), o(l, p, g), l = m;
    o(u, p, g);
  }, z = ({ el: l, anchor: u }) => {
    let p;
    for (; l && l !== u; )
      p = E(l), r(l), l = p;
    r(u);
  }, H = (l, u, p, g, m, N, w, b, O) => {
    w = w || u.type === "svg", l == null ? oe(u, p, g, m, N, w, b, O) : Ve(l, u, m, N, w, b, O);
  }, oe = (l, u, p, g, m, N, w, b) => {
    let O, _;
    const { type: D, props: v, shapeFlag: V, transition: C, dirs: S } = l;
    if (O = l.el = s(l.type, N, v && v.is, v), V & 8 ? h(O, l.children) : V & 16 && ce(l.children, O, null, g, m, N && D !== "foreignObject", w, b), S && qe(l, null, g, "created"), v) {
      for (const L in v)
        L !== "value" && !Jt(L) && i(O, L, null, v[L], N, l.children, g, m, Te);
      "value" in v && i(O, "value", null, v.value), (_ = v.onVnodeBeforeMount) && ye(_, g, l);
    }
    le(O, l, l.scopeId, w, g), {}.NODE_ENV !== "production" && (Object.defineProperty(O, "__vnode", {
      value: l,
      enumerable: !1
    }), Object.defineProperty(O, "__vueParentComponent", {
      value: g,
      enumerable: !1
    })), S && qe(l, null, g, "beforeMount");
    const k = (!m || m && !m.pendingBranch) && C && !C.persisted;
    k && C.beforeEnter(O), o(O, u, p), ((_ = v && v.onVnodeMounted) || k || S) && ue(() => {
      _ && ye(_, g, l), k && C.enter(O), S && qe(l, null, g, "mounted");
    }, m);
  }, le = (l, u, p, g, m) => {
    if (p && x(l, p), g)
      for (let N = 0; N < g.length; N++)
        x(l, g[N]);
    if (m) {
      let N = m.subTree;
      if ({}.NODE_ENV !== "production" && N.patchFlag > 0 && N.patchFlag & 2048 && (N = Xr(N.children) || N), u === N) {
        const w = m.vnode;
        le(l, w, w.scopeId, w.slotScopeIds, m.parent);
      }
    }
  }, ce = (l, u, p, g, m, N, w, b, O = 0) => {
    for (let _ = O; _ < l.length; _++) {
      const D = l[_] = b ? Le(l[_]) : ge(l[_]);
      $(null, D, u, p, g, m, N, w, b);
    }
  }, Ve = (l, u, p, g, m, N, w) => {
    const b = u.el = l.el;
    let { patchFlag: O, dynamicChildren: _, dirs: D } = u;
    O |= l.patchFlag & 16;
    const v = l.props || B, V = u.props || B;
    let C;
    p && Je(p, !1), (C = V.onVnodeBeforeUpdate) && ye(C, p, u, l), D && qe(u, l, p, "beforeUpdate"), p && Je(p, !0), {}.NODE_ENV !== "production" && nt && (O = 0, w = !1, _ = null);
    const S = m && u.type !== "foreignObject";
    if (_ ? (Se(l.dynamicChildren, _, b, p, g, S, N), {}.NODE_ENV !== "production" && p && p.type.__hmrId && Xt(l, u)) : w || Ne(l, u, b, null, p, g, S, N, !1), O > 0) {
      if (O & 16)
        he(b, u, v, V, p, g, m);
      else if (O & 2 && v.class !== V.class && i(b, "class", null, V.class, m), O & 4 && i(b, "style", v.style, V.style, m), O & 8) {
        const k = u.dynamicProps;
        for (let L = 0; L < k.length; L++) {
          const Y = k[L], me = v[Y], dt = V[Y];
          (dt !== me || Y === "value") && i(b, Y, me, dt, m, l.children, p, g, Te);
        }
      }
      O & 1 && l.children !== u.children && h(b, u.children);
    } else
      !w && _ == null && he(b, u, v, V, p, g, m);
    ((C = V.onVnodeUpdated) || D) && ue(() => {
      C && ye(C, p, u, l), D && qe(u, l, p, "updated");
    }, g);
  }, Se = (l, u, p, g, m, N, w) => {
    for (let b = 0; b < u.length; b++) {
      const O = l[b], _ = u[b], D = O.el && (O.type === de || !xt(O, _) || O.shapeFlag & 70) ? a(O.el) : p;
      $(O, _, D, null, g, m, N, w, !0);
    }
  }, he = (l, u, p, g, m, N, w) => {
    if (p !== g) {
      if (p !== B)
        for (const b in p)
          !Jt(b) && !(b in g) && i(l, b, p[b], null, w, u.children, m, N, Te);
      for (const b in g) {
        if (Jt(b))
          continue;
        const O = g[b], _ = p[b];
        O !== _ && b !== "value" && i(l, b, _, O, w, u.children, m, N, Te);
      }
      "value" in g && i(l, "value", p.value, g.value);
    }
  }, Lt = (l, u, p, g, m, N, w, b, O) => {
    const _ = u.el = l ? l.el : c(""), D = u.anchor = l ? l.anchor : c("");
    let { patchFlag: v, dynamicChildren: V, slotScopeIds: C } = u;
    ({}).NODE_ENV !== "production" && (nt || v & 2048) && (v = 0, O = !1, V = null), C && (b = b ? b.concat(C) : C), l == null ? (o(_, p, g), o(D, p, g), ce(u.children, p, D, m, N, w, b, O)) : v > 0 && v & 64 && V && l.dynamicChildren ? (Se(l.dynamicChildren, V, p, m, N, w, b), {}.NODE_ENV !== "production" && m && m.type.__hmrId ? Xt(l, u) : (u.key != null || m && u === m.subTree) && Xt(l, u, !0)) : Ne(l, u, p, D, m, N, w, b, O);
  }, Do = (l, u, p, g, m, N, w, b, O) => {
    u.slotScopeIds = b, l == null ? u.shapeFlag & 512 ? m.ctx.activate(u, p, g, w, O) : Pe(u, p, g, m, N, w, O) : fe(l, u, O);
  }, Pe = (l, u, p, g, m, N, w) => {
    const b = l.component = Qc(l, g, m);
    if ({}.NODE_ENV !== "production" && b.type.__hmrId && Al(b), {}.NODE_ENV !== "production" && (Zt(l), Ie(b, "mount")), Eo(l) && (b.ctx.renderer = at), {}.NODE_ENV !== "production" && Ie(b, "init"), ef(b), {}.NODE_ENV !== "production" && Ce(b, "init"), b.asyncDep) {
      if (m && m.registerDep(b, R), !l.el) {
        const O = b.subTree = Be(be);
        q(null, O, u, p);
      }
      return;
    }
    R(b, l, u, p, m, N, w), {}.NODE_ENV !== "production" && (Yt(), Ce(b, "mount"));
  }, fe = (l, u, p) => {
    const g = u.component = l.component;
    if (Xl(l, u, p))
      if (g.asyncDep && !g.asyncResolved) {
        ({}).NODE_ENV !== "production" && Zt(u), F(g, u, p), {}.NODE_ENV !== "production" && Yt();
        return;
      } else
        g.next = u, Sl(g.update), g.update();
    else
      u.el = l.el, g.vnode = u;
  }, R = (l, u, p, g, m, N, w) => {
    const b = () => {
      if (l.isMounted) {
        let { next: D, bu: v, u: V, parent: C, vnode: S } = l, k = D, L;
        ({}).NODE_ENV !== "production" && Zt(D || l.vnode), Je(l, !1), D ? (D.el = S.el, F(l, D, w)) : D = S, v && vt(v), (L = D.props && D.props.onVnodeBeforeUpdate) && ye(L, C, D, S), Je(l, !0), {}.NODE_ENV !== "production" && Ie(l, "render");
        const Y = Cn(l);
        ({}).NODE_ENV !== "production" && Ce(l, "render");
        const me = l.subTree;
        l.subTree = Y, {}.NODE_ENV !== "production" && Ie(l, "patch"), $(
          me,
          Y,
          a(me.el),
          Ht(me),
          l,
          m,
          N
        ), {}.NODE_ENV !== "production" && Ce(l, "patch"), D.el = Y.el, k === null && ec(l, Y.el), V && ue(V, m), (L = D.props && D.props.onVnodeUpdated) && ue(() => ye(L, C, D, S), m), {}.NODE_ENV !== "production" && Zr(l), {}.NODE_ENV !== "production" && Yt();
      } else {
        let D;
        const { el: v, props: V } = u, { bm: C, m: S, parent: k } = l, L = Qt(u);
        if (Je(l, !1), C && vt(C), !L && (D = V && V.onVnodeBeforeMount) && ye(D, k, u), Je(l, !0), v && Vn) {
          const Y = () => {
            ({}).NODE_ENV !== "production" && Ie(l, "render"), l.subTree = Cn(l), {}.NODE_ENV !== "production" && Ce(l, "render"), {}.NODE_ENV !== "production" && Ie(l, "hydrate"), Vn(v, l.subTree, l, m, null), {}.NODE_ENV !== "production" && Ce(l, "hydrate");
          };
          L ? u.type.__asyncLoader().then(
            () => !l.isUnmounted && Y()
          ) : Y();
        } else {
          ({}).NODE_ENV !== "production" && Ie(l, "render");
          const Y = l.subTree = Cn(l);
          ({}).NODE_ENV !== "production" && Ce(l, "render"), {}.NODE_ENV !== "production" && Ie(l, "patch"), $(null, Y, p, g, l, m, N), {}.NODE_ENV !== "production" && Ce(l, "patch"), u.el = Y.el;
        }
        if (S && ue(S, m), !L && (D = V && V.onVnodeMounted)) {
          const Y = u;
          ue(() => ye(D, k, Y), m);
        }
        (u.shapeFlag & 256 || k && Qt(k.vnode) && k.vnode.shapeFlag & 256) && l.a && ue(l.a, m), l.isMounted = !0, {}.NODE_ENV !== "production" && Bl(l), u = p = g = null;
      }
    }, O = l.effect = new fo(
      b,
      () => bn(_),
      l.scope
    ), _ = l.update = () => O.run();
    _.id = l.uid, Je(l, !0), {}.NODE_ENV !== "production" && (O.onTrack = l.rtc ? (D) => vt(l.rtc, D) : void 0, O.onTrigger = l.rtg ? (D) => vt(l.rtg, D) : void 0, _.ownerInstance = l), _();
  }, F = (l, u, p) => {
    u.component = l;
    const g = l.vnode.props;
    l.vnode = u, l.next = null, Ic(l, u.props, g, p), Rc(l, u.children, p), ct(), Ko(), ft();
  }, Ne = (l, u, p, g, m, N, w, b, O = !1) => {
    const _ = l && l.children, D = l ? l.shapeFlag : 0, v = u.children, { patchFlag: V, shapeFlag: C } = u;
    if (V > 0) {
      if (V & 128) {
        Ot(_, v, p, g, m, N, w, b, O);
        return;
      } else if (V & 256) {
        vn(_, v, p, g, m, N, w, b, O);
        return;
      }
    }
    C & 8 ? (D & 16 && Te(_, m, N), v !== _ && h(p, v)) : D & 16 ? C & 16 ? Ot(_, v, p, g, m, N, w, b, O) : Te(_, m, N, !0) : (D & 8 && h(p, ""), C & 16 && ce(v, p, g, m, N, w, b, O));
  }, vn = (l, u, p, g, m, N, w, b, O) => {
    l = l || _t, u = u || _t;
    const _ = l.length, D = u.length, v = Math.min(_, D);
    let V;
    for (V = 0; V < v; V++) {
      const C = u[V] = O ? Le(u[V]) : ge(u[V]);
      $(l[V], C, p, null, m, N, w, b, O);
    }
    _ > D ? Te(l, m, N, !0, !1, v) : ce(u, p, g, m, N, w, b, O, v);
  }, Ot = (l, u, p, g, m, N, w, b, O) => {
    let _ = 0;
    const D = u.length;
    let v = l.length - 1, V = D - 1;
    for (; _ <= v && _ <= V; ) {
      const C = l[_], S = u[_] = O ? Le(u[_]) : ge(u[_]);
      if (xt(C, S))
        $(C, S, p, null, m, N, w, b, O);
      else
        break;
      _++;
    }
    for (; _ <= v && _ <= V; ) {
      const C = l[v], S = u[V] = O ? Le(u[V]) : ge(u[V]);
      if (xt(C, S))
        $(C, S, p, null, m, N, w, b, O);
      else
        break;
      v--, V--;
    }
    if (_ > v) {
      if (_ <= V) {
        const C = V + 1, S = C < D ? u[C].el : g;
        for (; _ <= V; )
          $(null, u[_] = O ? Le(u[_]) : ge(u[_]), p, S, m, N, w, b, O), _++;
      }
    } else if (_ > V)
      for (; _ <= v; )
        Ae(l[_], m, N, !0), _++;
    else {
      const C = _, S = _, k = /* @__PURE__ */ new Map();
      for (_ = S; _ <= V; _++) {
        const re = u[_] = O ? Le(u[_]) : ge(u[_]);
        re.key != null && ({}.NODE_ENV !== "production" && k.has(re.key) && y("Duplicate keys found during update:", JSON.stringify(re.key), "Make sure keys are unique."), k.set(re.key, _));
      }
      let L, Y = 0;
      const me = V - S + 1;
      let dt = !1, Vo = 0;
      const yt = new Array(me);
      for (_ = 0; _ < me; _++)
        yt[_] = 0;
      for (_ = C; _ <= v; _++) {
        const re = l[_];
        if (Y >= me) {
          Ae(re, m, N, !0);
          continue;
        }
        let Oe;
        if (re.key != null)
          Oe = k.get(re.key);
        else
          for (L = S; L <= V; L++)
            if (yt[L - S] === 0 && xt(re, u[L])) {
              Oe = L;
              break;
            }
        Oe === void 0 ? Ae(re, m, N, !0) : (yt[Oe - S] = _ + 1, Oe >= Vo ? Vo = Oe : dt = !0, $(re, u[Oe], p, null, m, N, w, b, O), Y++);
      }
      const To = dt ? Uc(yt) : _t;
      for (L = To.length - 1, _ = me - 1; _ >= 0; _--) {
        const re = S + _, Oe = u[re], Io = re + 1 < D ? u[re + 1].el : g;
        yt[_] === 0 ? $(null, Oe, p, Io, m, N, w, b, O) : dt && (L < 0 || _ !== To[L] ? ut(Oe, p, Io, 2) : L--);
      }
    }
  }, ut = (l, u, p, g, m = null) => {
    const { el: N, type: w, transition: b, children: O, shapeFlag: _ } = l;
    if (_ & 6) {
      ut(l.component.subTree, u, p, g);
      return;
    }
    if (_ & 128) {
      l.suspense.move(u, p, g);
      return;
    }
    if (_ & 64) {
      w.move(l, u, p, at);
      return;
    }
    if (w === de) {
      o(N, u, p);
      for (let v = 0; v < O.length; v++)
        ut(O[v], u, p, g);
      o(l.anchor, u, p);
      return;
    }
    if (w === en) {
      A(l, u, p);
      return;
    }
    if (g !== 2 && _ & 1 && b)
      if (g === 0)
        b.beforeEnter(N), o(N, u, p), ue(() => b.enter(N), m);
      else {
        const { leave: v, delayLeave: V, afterLeave: C } = b, S = () => o(N, u, p), k = () => {
          v(N, () => {
            S(), C && C();
          });
        };
        V ? V(N, S, k) : k();
      }
    else
      o(N, u, p);
  }, Ae = (l, u, p, g = !1, m = !1) => {
    const { type: N, props: w, ref: b, children: O, dynamicChildren: _, shapeFlag: D, patchFlag: v, dirs: V } = l;
    if (b != null && Gn(b, null, p, l, !0), D & 256) {
      u.ctx.deactivate(l);
      return;
    }
    const C = D & 1 && V, S = !Qt(l);
    let k;
    if (S && (k = w && w.onVnodeBeforeUnmount) && ye(k, u, l), D & 6)
      Di(l.component, p, g);
    else {
      if (D & 128) {
        l.suspense.unmount(p, g);
        return;
      }
      C && qe(l, null, u, "beforeUnmount"), D & 64 ? l.type.remove(l, u, p, m, at, g) : _ && (N !== de || v > 0 && v & 64) ? Te(_, u, p, !1, !0) : (N === de && v & 384 || !m && D & 16) && Te(O, u, p), g && Dn(l);
    }
    (S && (k = w && w.onVnodeUnmounted) || C) && ue(() => {
      k && ye(k, u, l), C && qe(l, null, u, "unmounted");
    }, p);
  }, Dn = (l) => {
    const { type: u, el: p, anchor: g, transition: m } = l;
    if (u === de) {
      ({}).NODE_ENV !== "production" && l.patchFlag > 0 && l.patchFlag & 2048 && m && !m.persisted ? l.children.forEach((w) => {
        w.type === be ? r(w.el) : Dn(w);
      }) : vi(p, g);
      return;
    }
    if (u === en) {
      z(l);
      return;
    }
    const N = () => {
      r(p), m && !m.persisted && m.afterLeave && m.afterLeave();
    };
    if (l.shapeFlag & 1 && m && !m.persisted) {
      const { leave: w, delayLeave: b } = m, O = () => w(p, N);
      b ? b(l.el, N, O) : O();
    } else
      N();
  }, vi = (l, u) => {
    let p;
    for (; l !== u; )
      p = E(l), r(l), l = p;
    r(u);
  }, Di = (l, u, p) => {
    ({}).NODE_ENV !== "production" && l.type.__hmrId && Rl(l);
    const { bum: g, scope: m, update: N, subTree: w, um: b } = l;
    g && vt(g), m.stop(), N && (N.active = !1, Ae(w, l, u, p)), b && ue(b, u), ue(() => {
      l.isUnmounted = !0;
    }, u), u && u.pendingBranch && !u.isUnmounted && l.asyncDep && !l.asyncResolved && l.suspenseId === u.pendingId && (u.deps--, u.deps === 0 && u.resolve()), {}.NODE_ENV !== "production" && Wl(l);
  }, Te = (l, u, p, g = !1, m = !1, N = 0) => {
    for (let w = N; w < l.length; w++)
      Ae(l[w], u, p, g, m);
  }, Ht = (l) => l.shapeFlag & 6 ? Ht(l.component.subTree) : l.shapeFlag & 128 ? l.suspense.next() : E(l.anchor || l.el), xo = (l, u, p) => {
    l == null ? u._vnode && Ae(u._vnode, null, null, !0) : $(u._vnode || null, l, u, null, null, null, p), Ko(), Kr(), u._vnode = l;
  }, at = {
    p: $,
    um: Ae,
    m: ut,
    r: Dn,
    mt: Pe,
    mc: ce,
    pc: Ne,
    pbc: Se,
    n: Ht,
    o: e
  };
  let xn, Vn;
  return t && ([xn, Vn] = t(at)), {
    render: xo,
    hydrate: xn,
    createApp: Lc(xo, xn)
  };
}
function Je({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n;
}
function Xt(e, t, n = !1) {
  const o = e.children, r = t.children;
  if (I(o) && I(r))
    for (let i = 0; i < o.length; i++) {
      const s = o[i];
      let c = r[i];
      c.shapeFlag & 1 && !c.dynamicChildren && ((c.patchFlag <= 0 || c.patchFlag === 32) && (c = r[i] = Le(r[i]), c.el = s.el), n || Xt(s, c)), c.type === Ft && (c.el = s.el), {}.NODE_ENV !== "production" && c.type === be && !c.el && (c.el = s.el);
    }
}
function Uc(e) {
  const t = e.slice(), n = [0];
  let o, r, i, s, c;
  const f = e.length;
  for (o = 0; o < f; o++) {
    const d = e[o];
    if (d !== 0) {
      if (r = n[n.length - 1], e[r] < d) {
        t[o] = r, n.push(o);
        continue;
      }
      for (i = 0, s = n.length - 1; i < s; )
        c = i + s >> 1, e[n[c]] < d ? i = c + 1 : s = c;
      d < e[n[i]] && (i > 0 && (t[o] = n[i - 1]), n[i] = o);
    }
  }
  for (i = n.length, s = n[i - 1]; i-- > 0; )
    n[i] = s, s = t[s];
  return n;
}
const Wc = (e) => e.__isTeleport, de = Symbol({}.NODE_ENV !== "production" ? "Fragment" : void 0), Ft = Symbol({}.NODE_ENV !== "production" ? "Text" : void 0), be = Symbol({}.NODE_ENV !== "production" ? "Comment" : void 0), en = Symbol({}.NODE_ENV !== "production" ? "Static" : void 0), Ct = [];
let _e = null;
function mi(e = !1) {
  Ct.push(_e = e ? null : []);
}
function Kc() {
  Ct.pop(), _e = Ct[Ct.length - 1] || null;
}
let St = 1;
function nr(e) {
  St += e;
}
function zc(e) {
  return e.dynamicChildren = St > 0 ? _e || _t : null, Kc(), St > 0 && _e && _e.push(e), e;
}
function gi(e, t, n, o, r, i) {
  return zc(ne(e, t, n, o, r, i, !0));
}
function yo(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function xt(e, t) {
  return {}.NODE_ENV !== "production" && t.shapeFlag & 6 && pt.has(t.type) ? (e.shapeFlag &= -257, t.shapeFlag &= -513, !1) : e.type === t.type && e.key === t.key;
}
const qc = (...e) => Ei(...e), yn = "__vInternal", _i = ({ key: e }) => e ?? null, tn = ({ ref: e, ref_key: t, ref_for: n }) => e != null ? Z(e) || ee(e) || T(e) ? { i: pe, r: e, k: t, f: !!n } : e : null;
function ne(e, t = null, n = null, o = 0, r = null, i = e === de ? 0 : 1, s = !1, c = !1) {
  const f = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && _i(t),
    ref: t && tn(t),
    scopeId: Qr,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: i,
    patchFlag: o,
    dynamicProps: r,
    dynamicChildren: null,
    appContext: null,
    ctx: pe
  };
  return c ? (wo(f, n), i & 128 && e.normalize(f)) : n && (f.shapeFlag |= Z(n) ? 8 : 16), {}.NODE_ENV !== "production" && f.key !== f.key && y("VNode created with invalid key (NaN). VNode type:", f.type), St > 0 && !s && _e && (f.patchFlag > 0 || i & 6) && f.patchFlag !== 32 && _e.push(f), f;
}
const Be = {}.NODE_ENV !== "production" ? qc : Ei;
function Ei(e, t = null, n = null, o = 0, r = null, i = !1) {
  if ((!e || e === _c) && ({}.NODE_ENV !== "production" && !e && y(`Invalid vnode type when creating vnode: ${e}.`), e = be), yo(e)) {
    const c = Ke(e, t, !0);
    return n && wo(c, n), St > 0 && !i && _e && (c.shapeFlag & 6 ? _e[_e.indexOf(e)] = c : _e.push(c)), c.patchFlag |= -2, c;
  }
  if (wi(e) && (e = e.__vccOpts), t) {
    t = Jc(t);
    let { class: c, style: f } = t;
    c && !Z(c) && (t.class = oo(c)), U(f) && (Bn(f) && !I(f) && (f = G({}, f)), t.style = no(f));
  }
  const s = Z(e) ? 1 : tc(e) ? 128 : Wc(e) ? 64 : U(e) ? 4 : T(e) ? 2 : 0;
  return {}.NODE_ENV !== "production" && s & 4 && Bn(e) && (e = j(e), y("Vue received a Component which was made a reactive object. This can lead to unnecessary performance overhead, and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.", `
Component that was made reactive: `, e)), ne(e, t, n, o, r, s, i, !0);
}
function Jc(e) {
  return e ? Bn(e) || yn in e ? G({}, e) : e : null;
}
function Ke(e, t, n = !1) {
  const { props: o, ref: r, patchFlag: i, children: s } = e, c = t ? Zc(o || {}, t) : o;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: c,
    key: c && _i(c),
    ref: t && t.ref ? n && r ? I(r) ? r.concat(tn(t)) : [r, tn(t)] : tn(t) : r,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: {}.NODE_ENV !== "production" && i === -1 && I(s) ? s.map(bi) : s,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    patchFlag: t && e.type !== de ? i === -1 ? 16 : i | 16 : i,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: e.transition,
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && Ke(e.ssContent),
    ssFallback: e.ssFallback && Ke(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx
  };
}
function bi(e) {
  const t = Ke(e);
  return I(e.children) && (t.children = e.children.map(bi)), t;
}
function lt(e = " ", t = 0) {
  return Be(Ft, null, e, t);
}
function ge(e) {
  return e == null || typeof e == "boolean" ? Be(be) : I(e) ? Be(
    de,
    null,
    e.slice()
  ) : typeof e == "object" ? Le(e) : Be(Ft, null, String(e));
}
function Le(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Ke(e);
}
function wo(e, t) {
  let n = 0;
  const { shapeFlag: o } = e;
  if (t == null)
    t = null;
  else if (I(t))
    n = 16;
  else if (typeof t == "object")
    if (o & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), wo(e, r()), r._c && (r._d = !0));
      return;
    } else {
      n = 32;
      const r = t._;
      !r && !(yn in t) ? t._ctx = pe : r === 3 && pe && (pe.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else
    T(t) ? (t = { default: t, _ctx: pe }, n = 32) : (t = String(t), o & 64 ? (n = 16, t = [lt(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function Zc(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const o = e[n];
    for (const r in o)
      if (r === "class")
        t.class !== o.class && (t.class = oo([t.class, o.class]));
      else if (r === "style")
        t.style = no([t.style, o.style]);
      else if (At(r)) {
        const i = t[r], s = o[r];
        s && i !== s && !(I(i) && i.includes(s)) && (t[r] = i ? [].concat(i, s) : s);
      } else
        r !== "" && (t[r] = o[r]);
  }
  return t;
}
function ye(e, t, n, o = null) {
  Ee(e, t, 7, [
    n,
    o
  ]);
}
const Yc = hi();
let Gc = 0;
function Qc(e, t, n) {
  const o = e.type, r = (t ? t.appContext : e.appContext) || Yc, i = {
    uid: Gc++,
    vnode: e,
    type: o,
    parent: t,
    appContext: r,
    root: null,
    next: null,
    subTree: null,
    effect: null,
    update: null,
    scope: new Ks(!0),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(r.provides),
    accessCache: null,
    renderCache: [],
    components: null,
    directives: null,
    propsOptions: fi(o, r),
    emitsOptions: Gr(o, r),
    emit: null,
    emitted: null,
    propsDefaults: B,
    inheritAttrs: o.inheritAttrs,
    ctx: B,
    data: B,
    props: B,
    attrs: B,
    slots: B,
    refs: B,
    setupState: B,
    setupContext: null,
    suspense: n,
    suspenseId: n ? n.pendingId : 0,
    asyncDep: null,
    asyncResolved: !1,
    isMounted: !1,
    isUnmounted: !1,
    isDeactivated: !1,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  return {}.NODE_ENV !== "production" ? i.ctx = Ec(i) : i.ctx = { _: i }, i.root = t ? t.root : i, i.emit = Jl.bind(null, i), e.ce && e.ce(i), i;
}
let X = null;
const Nt = (e) => {
  X = e, e.scope.on();
}, rt = () => {
  X && X.scope.off(), X = null;
}, Xc = /* @__PURE__ */ ze("slot,component");
function Qn(e, t) {
  const n = t.isNativeTag || br;
  (Xc(e) || n(e)) && y("Do not use built-in or reserved HTML elements as component id: " + e);
}
function Ni(e) {
  return e.vnode.shapeFlag & 4;
}
let Pt = !1;
function ef(e, t = !1) {
  Pt = t;
  const { props: n, children: o } = e.vnode, r = Ni(e);
  Vc(e, n, r, t), Ac(e, o);
  const i = r ? tf(e, t) : void 0;
  return Pt = !1, i;
}
function tf(e, t) {
  var n;
  const o = e.type;
  if ({}.NODE_ENV !== "production") {
    if (o.name && Qn(o.name, e.appContext.config), o.components) {
      const i = Object.keys(o.components);
      for (let s = 0; s < i.length; s++)
        Qn(i[s], e.appContext.config);
    }
    if (o.directives) {
      const i = Object.keys(o.directives);
      for (let s = 0; s < i.length; s++)
        ii(i[s]);
    }
    o.compilerOptions && nf() && y('"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.');
  }
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = Fr(new Proxy(e.ctx, si)), {}.NODE_ENV !== "production" && bc(e);
  const { setup: r } = o;
  if (r) {
    const i = e.setupContext = r.length > 1 ? of(e) : null;
    Nt(e), ct();
    const s = $e(r, e, 0, [{}.NODE_ENV !== "production" ? mt(e.props) : e.props, i]);
    if (ft(), rt(), so(s)) {
      if (s.then(rt, rt), t)
        return s.then((c) => {
          or(e, c, t);
        }).catch((c) => {
          En(c, e, 0);
        });
      if (e.asyncDep = s, {}.NODE_ENV !== "production" && !e.suspense) {
        const c = (n = o.name) !== null && n !== void 0 ? n : "Anonymous";
        y(`Component <${c}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`);
      }
    } else
      or(e, s, t);
  } else
    Oi(e, t);
}
function or(e, t, n) {
  T(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : U(t) ? ({}.NODE_ENV !== "production" && yo(t) && y("setup() should not return VNodes directly - return a render function instead."), {}.NODE_ENV !== "production" && (e.devtoolsRawSetupState = t), e.setupState = Lr(t), {}.NODE_ENV !== "production" && Nc(e)) : {}.NODE_ENV !== "production" && t !== void 0 && y(`setup() should return an object. Received: ${t === null ? "null" : typeof t}`), Oi(e, n);
}
let Xn;
const nf = () => !Xn;
function Oi(e, t, n) {
  const o = e.type;
  if (!e.render) {
    if (!t && Xn && !o.render) {
      const r = o.template || No(e).template;
      if (r) {
        ({}).NODE_ENV !== "production" && Ie(e, "compile");
        const { isCustomElement: i, compilerOptions: s } = e.appContext.config, { delimiters: c, compilerOptions: f } = o, d = G(G({
          isCustomElement: i,
          delimiters: c
        }, s), f);
        o.render = Xn(r, d), {}.NODE_ENV !== "production" && Ce(e, "compile");
      }
    }
    e.render = o.render || Q;
  }
  Nt(e), ct(), yc(e), ft(), rt(), {}.NODE_ENV !== "production" && !o.render && e.render === Q && !t && (o.template ? y('Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".') : y("Component is missing template or render function."));
}
function rr(e) {
  return new Proxy(e.attrs, {}.NODE_ENV !== "production" ? {
    get(t, n) {
      return ln(), ae(e, "get", "$attrs"), t[n];
    },
    set() {
      return y("setupContext.attrs is readonly."), !1;
    },
    deleteProperty() {
      return y("setupContext.attrs is readonly."), !1;
    }
  } : {
    get(t, n) {
      return ae(e, "get", "$attrs"), t[n];
    }
  });
}
function of(e) {
  const t = (o) => {
    ({}).NODE_ENV !== "production" && e.exposed && y("expose() should be called only once per setup()."), e.exposed = o || {};
  };
  let n;
  return {}.NODE_ENV !== "production" ? Object.freeze({
    get attrs() {
      return n || (n = rr(e));
    },
    get slots() {
      return mt(e.slots);
    },
    get emit() {
      return (o, ...r) => e.emit(o, ...r);
    },
    expose: t
  }) : {
    get attrs() {
      return n || (n = rr(e));
    },
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function vo(e) {
  if (e.exposed)
    return e.exposeProxy || (e.exposeProxy = new Proxy(Lr(Fr(e.exposed)), {
      get(t, n) {
        if (n in t)
          return t[n];
        if (n in ot)
          return ot[n](e);
      },
      has(t, n) {
        return n in t || n in ot;
      }
    }));
}
const rf = /(?:^|[-_])(\w)/g, sf = (e) => e.replace(rf, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function yi(e, t = !0) {
  return T(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function wn(e, t, n = !1) {
  let o = yi(t);
  if (!o && t.__file) {
    const r = t.__file.match(/([^/\\]+)\.\w+$/);
    r && (o = r[1]);
  }
  if (!o && e && e.parent) {
    const r = (i) => {
      for (const s in i)
        if (i[s] === t)
          return s;
    };
    o = r(e.components || e.parent.type.components) || r(e.appContext.components);
  }
  return o ? sf(o) : n ? "App" : "Anonymous";
}
function wi(e) {
  return T(e) && "__vccOpts" in e;
}
const lf = (e, t) => Dl(e, t, Pt), cf = Symbol({}.NODE_ENV !== "production" ? "ssrContext" : ""), ff = () => {
  {
    const e = Gt(cf);
    return e || {}.NODE_ENV !== "production" && y("Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."), e;
  }
};
function Mn(e) {
  return !!(e && e.__v_isShallow);
}
function uf() {
  if ({}.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#0b1bc9" }, n = { style: "color:#b62e24" }, o = { style: "color:#9d288c" }, r = {
    header(a) {
      return U(a) ? a.__isVue ? ["div", e, "VueInstance"] : ee(a) ? [
        "div",
        {},
        ["span", e, h(a)],
        "<",
        c(a.value),
        ">"
      ] : et(a) ? [
        "div",
        {},
        ["span", e, Mn(a) ? "ShallowReactive" : "Reactive"],
        "<",
        c(a),
        `>${it(a) ? " (readonly)" : ""}`
      ] : it(a) ? [
        "div",
        {},
        ["span", e, Mn(a) ? "ShallowReadonly" : "Readonly"],
        "<",
        c(a),
        ">"
      ] : null : null;
    },
    hasBody(a) {
      return a && a.__isVue;
    },
    body(a) {
      if (a && a.__isVue)
        return [
          "div",
          {},
          ...i(a.$)
        ];
    }
  };
  function i(a) {
    const E = [];
    a.type.props && a.props && E.push(s("props", j(a.props))), a.setupState !== B && E.push(s("setup", a.setupState)), a.data !== B && E.push(s("data", j(a.data)));
    const x = f(a, "computed");
    x && E.push(s("computed", x));
    const P = f(a, "inject");
    return P && E.push(s("injected", P)), E.push([
      "div",
      {},
      [
        "span",
        {
          style: o.style + ";opacity:0.66"
        },
        "$ (internal): "
      ],
      ["object", { object: a }]
    ]), E;
  }
  function s(a, E) {
    return E = G({}, E), Object.keys(E).length ? [
      "div",
      { style: "line-height:1.25em;margin-bottom:0.6em" },
      [
        "div",
        {
          style: "color:#476582"
        },
        a
      ],
      [
        "div",
        {
          style: "padding-left:1.25em"
        },
        ...Object.keys(E).map((x) => [
          "div",
          {},
          ["span", o, x + ": "],
          c(E[x], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function c(a, E = !0) {
    return typeof a == "number" ? ["span", t, a] : typeof a == "string" ? ["span", n, JSON.stringify(a)] : typeof a == "boolean" ? ["span", o, a] : U(a) ? ["object", { object: E ? j(a) : a }] : ["span", n, String(a)];
  }
  function f(a, E) {
    const x = a.type;
    if (T(x))
      return;
    const P = {};
    for (const $ in a.ctx)
      d(x, $, E) && (P[$] = a.ctx[$]);
    return P;
  }
  function d(a, E, x) {
    const P = a[x];
    if (I(P) && P.includes(E) || U(P) && E in P || a.extends && d(a.extends, E, x) || a.mixins && a.mixins.some(($) => d($, E, x)))
      return !0;
  }
  function h(a) {
    return Mn(a) ? "ShallowRef" : a.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(r) : window.devtoolsFormatters = [r];
}
const ir = "3.2.45", af = "http://www.w3.org/2000/svg", Ge = typeof document < "u" ? document : null, sr = Ge && /* @__PURE__ */ Ge.createElement("template"), df = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, o) => {
    const r = t ? Ge.createElementNS(af, e) : Ge.createElement(e, n ? { is: n } : void 0);
    return e === "select" && o && o.multiple != null && r.setAttribute("multiple", o.multiple), r;
  },
  createText: (e) => Ge.createTextNode(e),
  createComment: (e) => Ge.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Ge.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  insertStaticContent(e, t, n, o, r, i) {
    const s = n ? n.previousSibling : t.lastChild;
    if (r && (r === i || r.nextSibling))
      for (; t.insertBefore(r.cloneNode(!0), n), !(r === i || !(r = r.nextSibling)); )
        ;
    else {
      sr.innerHTML = o ? `<svg>${e}</svg>` : e;
      const c = sr.content;
      if (o) {
        const f = c.firstChild;
        for (; f.firstChild; )
          c.appendChild(f.firstChild);
        c.removeChild(f);
      }
      t.insertBefore(c, n);
    }
    return [
      s ? s.nextSibling : t.firstChild,
      n ? n.previousSibling : t.lastChild
    ];
  }
};
function pf(e, t, n) {
  const o = e._vtc;
  o && (t = (t ? [t, ...o] : [...o]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
function hf(e, t, n) {
  const o = e.style, r = Z(n);
  if (n && !r) {
    for (const i in n)
      eo(o, i, n[i]);
    if (t && !Z(t))
      for (const i in t)
        n[i] == null && eo(o, i, "");
  } else {
    const i = o.display;
    r ? t !== n && (o.cssText = n) : t && e.removeAttribute("style"), "_vod" in e && (o.display = i);
  }
}
const mf = /[^\\];\s*$/, lr = /\s*!important$/;
function eo(e, t, n) {
  if (I(n))
    n.forEach((o) => eo(e, t, o));
  else if (n == null && (n = ""), {}.NODE_ENV !== "production" && mf.test(n) && y(`Unexpected semicolon at the end of '${t}' style value: '${n}'`), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const o = gf(e, t);
    lr.test(n) ? e.setProperty(Ue(o), n.replace(lr, ""), "important") : e[o] = n;
  }
}
const cr = ["Webkit", "Moz", "ms"], Sn = {};
function gf(e, t) {
  const n = Sn[t];
  if (n)
    return n;
  let o = bt(t);
  if (o !== "filter" && o in e)
    return Sn[t] = o;
  o = dn(o);
  for (let r = 0; r < cr.length; r++) {
    const i = cr[r] + o;
    if (i in e)
      return Sn[t] = i;
  }
  return t;
}
const fr = "http://www.w3.org/1999/xlink";
function _f(e, t, n, o, r) {
  if (o && t.startsWith("xlink:"))
    n == null ? e.removeAttributeNS(fr, t.slice(6, t.length)) : e.setAttributeNS(fr, t, n);
  else {
    const i = Ls(t);
    n == null || i && !_r(n) ? e.removeAttribute(t) : e.setAttribute(t, i ? "" : n);
  }
}
function Ef(e, t, n, o, r, i, s) {
  if (t === "innerHTML" || t === "textContent") {
    o && s(o, r, i), e[t] = n ?? "";
    return;
  }
  if (t === "value" && e.tagName !== "PROGRESS" && !e.tagName.includes("-")) {
    e._value = n;
    const f = n ?? "";
    (e.value !== f || e.tagName === "OPTION") && (e.value = f), n == null && e.removeAttribute(t);
    return;
  }
  let c = !1;
  if (n === "" || n == null) {
    const f = typeof e[t];
    f === "boolean" ? n = _r(n) : n == null && f === "string" ? (n = "", c = !0) : f === "number" && (n = 0, c = !0);
  }
  try {
    e[t] = n;
  } catch (f) {
    ({}).NODE_ENV !== "production" && !c && y(`Failed setting prop "${t}" on <${e.tagName.toLowerCase()}>: value ${n} is invalid.`, f);
  }
  c && e.removeAttribute(t);
}
function bf(e, t, n, o) {
  e.addEventListener(t, n, o);
}
function Nf(e, t, n, o) {
  e.removeEventListener(t, n, o);
}
function Of(e, t, n, o, r = null) {
  const i = e._vei || (e._vei = {}), s = i[t];
  if (o && s)
    s.value = o;
  else {
    const [c, f] = yf(t);
    if (o) {
      const d = i[t] = Df(o, r);
      bf(e, c, d, f);
    } else
      s && (Nf(e, c, s, f), i[t] = void 0);
  }
}
const ur = /(?:Once|Passive|Capture)$/;
function yf(e) {
  let t;
  if (ur.test(e)) {
    t = {};
    let o;
    for (; o = e.match(ur); )
      e = e.slice(0, e.length - o[0].length), t[o[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Ue(e.slice(2)), t];
}
let Pn = 0;
const wf = /* @__PURE__ */ Promise.resolve(), vf = () => Pn || (wf.then(() => Pn = 0), Pn = Date.now());
function Df(e, t) {
  const n = (o) => {
    if (!o._vts)
      o._vts = Date.now();
    else if (o._vts <= n.attached)
      return;
    Ee(xf(o, n.value), t, 5, [o]);
  };
  return n.value = e, n.attached = vf(), n;
}
function xf(e, t) {
  if (I(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map((o) => (r) => !r._stopped && o && o(r));
  } else
    return t;
}
const ar = /^on[a-z]/, Vf = (e, t, n, o, r = !1, i, s, c, f) => {
  t === "class" ? pf(e, o, r) : t === "style" ? hf(e, n, o) : At(t) ? nn(t) || Of(e, t, n, o, s) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Tf(e, t, o, r)) ? Ef(e, t, o, i, s, c, f) : (t === "true-value" ? e._trueValue = o : t === "false-value" && (e._falseValue = o), _f(e, t, o, r));
};
function Tf(e, t, n, o) {
  return o ? !!(t === "innerHTML" || t === "textContent" || t in e && ar.test(t) && T(n)) : t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA" || ar.test(t) && Z(n) ? !1 : t in e;
}
const If = /* @__PURE__ */ G({ patchProp: Vf }, df);
let dr;
function Cf() {
  return dr || (dr = kc(If));
}
const $f = (...e) => {
  const t = Cf().createApp(...e);
  ({}).NODE_ENV !== "production" && (jf(t), Mf(t));
  const { mount: n } = t;
  return t.mount = (o) => {
    const r = Sf(o);
    if (!r)
      return;
    const i = t._component;
    !T(i) && !i.render && !i.template && (i.template = r.innerHTML), r.innerHTML = "";
    const s = n(r, !1, r instanceof SVGElement);
    return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), s;
  }, t;
};
function jf(e) {
  Object.defineProperty(e.config, "isNativeTag", {
    value: (t) => As(t) || Rs(t),
    writable: !1
  });
}
function Mf(e) {
  {
    const t = e.config.isCustomElement;
    Object.defineProperty(e.config, "isCustomElement", {
      get() {
        return t;
      },
      set() {
        y("The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead.");
      }
    });
    const n = e.config.compilerOptions, o = 'The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-dom';
    Object.defineProperty(e.config, "compilerOptions", {
      get() {
        return y(o), n;
      },
      set() {
        y(o);
      }
    });
  }
}
function Sf(e) {
  if (Z(e)) {
    const t = document.querySelector(e);
    return {}.NODE_ENV !== "production" && !t && y(`Failed to mount app: mount target selector "${e}" returned null.`), t;
  }
  return {}.NODE_ENV !== "production" && window.ShadowRoot && e instanceof window.ShadowRoot && e.mode === "closed" && y('mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'), e;
}
function Pf() {
  uf();
}
({}).NODE_ENV !== "production" && Pf();
const Af = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBhcmlhLWhpZGRlbj0idHJ1ZSIgcm9sZT0iaW1nIiBjbGFzcz0iaWNvbmlmeSBpY29uaWZ5LS1sb2dvcyIgd2lkdGg9IjM3LjA3IiBoZWlnaHQ9IjM2IiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWlkWU1pZCBtZWV0IiB2aWV3Qm94PSIwIDAgMjU2IDE5OCI+PHBhdGggZmlsbD0iIzQxQjg4MyIgZD0iTTIwNC44IDBIMjU2TDEyOCAyMjAuOEwwIDBoOTcuOTJMMTI4IDUxLjJMMTU3LjQ0IDBoNDcuMzZaIj48L3BhdGg+PHBhdGggZmlsbD0iIzQxQjg4MyIgZD0ibTAgMGwxMjggMjIwLjhMMjU2IDBoLTUxLjJMMTI4IDEzMi40OEw1MC41NiAwSDBaIj48L3BhdGg+PHBhdGggZmlsbD0iIzM1NDk1RSIgZD0iTTUwLjU2IDBMMTI4IDEzMy4xMkwyMDQuOCAwaC00Ny4zNkwxMjggNTEuMkw5Ny45MiAwSDUwLjU2WiI+PC9wYXRoPjwvc3ZnPg==", Rf = { class: "flex flex-col spd-bg-purple-500" }, Ff = /* @__PURE__ */ ne("p", null, [
  /* @__PURE__ */ lt(" Edit "),
  /* @__PURE__ */ ne("code", null, "components/HelloWorld.vue"),
  /* @__PURE__ */ lt(" to test HMR ")
], -1), Lf = /* @__PURE__ */ ne("p", null, [
  /* @__PURE__ */ lt(" Check out "),
  /* @__PURE__ */ ne("a", {
    href: "https://vuejs.org/guide/quick-start.html#local",
    target: "_blank"
  }, "create-vue"),
  /* @__PURE__ */ lt(", the official Vue + Vite starter ")
], -1), Hf = /* @__PURE__ */ ne("p", null, [
  /* @__PURE__ */ lt(" Install "),
  /* @__PURE__ */ ne("a", {
    href: "https://github.com/johnsoncodehk/volar",
    target: "_blank"
  }, "Volar"),
  /* @__PURE__ */ lt(" in your IDE for a better DX ")
], -1), kf = /* @__PURE__ */ ne("p", { class: "read-the-docs" }, "Click on the Vite and Vue logos to learn more", -1), Bf = /* @__PURE__ */ ni({
  __name: "HelloWorld",
  props: {
    msg: null
  },
  setup(e) {
    const t = gn({
      count: 0
    });
    return (n, o) => (mi(), gi(de, null, [
      ne("h1", null, Ao(e.msg), 1),
      ne("div", Rf, [
        ne("button", {
          type: "button",
          onClick: o[0] || (o[0] = (r) => t.count++)
        }, "count is " + Ao(t.count), 1),
        Ff
      ]),
      Lf,
      Hf,
      kf
    ], 64));
  }
}), Uf = /* @__PURE__ */ ne("div", null, [
  /* @__PURE__ */ ne("a", {
    href: "https://vitejs.dev",
    target: "_blank"
  }),
  /* @__PURE__ */ ne("a", {
    href: "https://vuejs.org/",
    target: "_blank"
  }, [
    /* @__PURE__ */ ne("img", {
      src: Af,
      class: "logo vue",
      alt: "Vue logo"
    })
  ])
], -1), Wf = /* @__PURE__ */ ni({
  __name: "App",
  setup(e) {
    return (t, n) => (mi(), gi(de, null, [
      Uf,
      Be(Bf, { msg: "Vite + Vue" })
    ], 64));
  }
}), Kf = (e) => e.classList.contains("gthr-btn") || e.classList.contains("gthr-overlay"), pr = () => {
  const e = document.querySelector(".gthr-highlight");
  e && e.classList.remove("gthr-highlight");
}, zf = (e, t) => {
  let n, o = [], r = [];
  for (; n = document.elementFromPoint(e, t), !(!n || n === document.documentElement); )
    o.push(n), r.push(n.style.visibility), n.style.visibility = "hidden";
  for (let i = 0; i < o.length; i++)
    o[i].style.visibility = r[i];
  return o.reverse(), o;
}, qf = (e) => {
  let t = e;
  return (t.tagName === "IMG" || t.tagName === "svg" || t.tagName === "path") && (t = t.closest("div, span, section, main, body, aside, header, footer, nav, a")), t;
}, Jf = (e) => {
  const t = zf(e.clientX, e.clientY), n = t[t.length - 2], o = qf(n);
  if (Kf(o)) {
    pr();
    return;
  }
  pr(), o.classList.add("gthr-highlight");
}, Zf = document.createElement("button");
Zf.classList.add(
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
Is((e) => Jf(e), 100);
const Yf = () => {
  const e = document.createElement("div");
  e.setAttribute("id", "speedback-app"), document.body.appendChild(e), console.log(e);
}, Gf = () => {
  $f(Wf).mount("#speedback-app");
}, Qf = async () => {
  Yf(), Gf();
};
Qf();
