function a() {
}
function P(t) {
  return t();
}
function B() {
  return /* @__PURE__ */ Object.create(null);
}
function w(t) {
  t.forEach(P);
}
function D(t) {
  return typeof t == "function";
}
function A(t, e) {
  return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function";
}
function R(t) {
  return Object.keys(t).length === 0;
}
function U(t, ...e) {
  if (t == null)
    return a;
  const n = t.subscribe(...e);
  return n.unsubscribe ? () => n.unsubscribe() : n;
}
function V(t, e, n) {
  t.$$.on_destroy.push(U(e, n));
}
function b(t, e) {
  t.appendChild(e);
}
function M(t, e, n) {
  t.insertBefore(e, n || null);
}
function v(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function O(t) {
  return document.createElement(t);
}
function q(t) {
  return document.createElementNS("http://www.w3.org/2000/svg", t);
}
function N(t) {
  return document.createTextNode(t);
}
function W() {
  return N(" ");
}
function X(t, e, n, r) {
  return t.addEventListener(e, n, r), () => t.removeEventListener(e, n, r);
}
function p(t, e, n) {
  n == null ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n);
}
function Y(t) {
  return Array.from(t.childNodes);
}
let S;
function g(t) {
  S = t;
}
const _ = [], L = [], y = [], T = [], Z = Promise.resolve();
let E = !1;
function tt() {
  E || (E = !0, Z.then(F));
}
function C(t) {
  y.push(t);
}
const k = /* @__PURE__ */ new Set();
let $ = 0;
function F() {
  const t = S;
  do {
    for (; $ < _.length; ) {
      const e = _[$];
      $++, g(e), et(e.$$);
    }
    for (g(null), _.length = 0, $ = 0; L.length; )
      L.pop()();
    for (let e = 0; e < y.length; e += 1) {
      const n = y[e];
      k.has(n) || (k.add(n), n());
    }
    y.length = 0;
  } while (_.length);
  for (; T.length; )
    T.pop()();
  E = !1, k.clear(), g(t);
}
function et(t) {
  if (t.fragment !== null) {
    t.update(), w(t.before_update);
    const e = t.dirty;
    t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(C);
  }
}
const x = /* @__PURE__ */ new Set();
let nt;
function G(t, e) {
  t && t.i && (x.delete(t), t.i(e));
}
function rt(t, e, n, r) {
  if (t && t.o) {
    if (x.has(t))
      return;
    x.add(t), nt.c.push(() => {
      x.delete(t), r && (n && t.d(1), r());
    }), t.o(e);
  } else
    r && r();
}
function st(t) {
  t && t.c();
}
function H(t, e, n, r) {
  const { fragment: o, after_update: u } = t.$$;
  o && o.m(e, n), r || C(() => {
    const l = t.$$.on_mount.map(P).filter(D);
    t.$$.on_destroy ? t.$$.on_destroy.push(...l) : w(l), t.$$.on_mount = [];
  }), u.forEach(C);
}
function J(t, e) {
  const n = t.$$;
  n.fragment !== null && (w(n.on_destroy), n.fragment && n.fragment.d(e), n.on_destroy = n.fragment = null, n.ctx = []);
}
function ot(t, e) {
  t.$$.dirty[0] === -1 && (_.push(t), tt(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function K(t, e, n, r, o, u, l, i = [-1]) {
  const d = S;
  g(t);
  const s = t.$$ = {
    fragment: null,
    ctx: [],
    props: u,
    update: a,
    not_equal: o,
    bound: B(),
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (d ? d.$$.context : [])),
    callbacks: B(),
    dirty: i,
    skip_bound: !1,
    root: e.target || d.$$.root
  };
  l && l(s.root);
  let f = !1;
  if (s.ctx = n ? n(t, e.props || {}, (c, m, ...j) => {
    const z = j.length ? j[0] : m;
    return s.ctx && o(s.ctx[c], s.ctx[c] = z) && (!s.skip_bound && s.bound[c] && s.bound[c](z), f && ot(t, c)), m;
  }) : [], s.update(), f = !0, w(s.before_update), s.fragment = r ? r(s.ctx) : !1, e.target) {
    if (e.hydrate) {
      const c = Y(e.target);
      s.fragment && s.fragment.l(c), c.forEach(v);
    } else
      s.fragment && s.fragment.c();
    e.intro && G(t.$$.fragment), H(t, e.target, e.anchor, e.customElement), F();
  }
  g(d);
}
class Q {
  $destroy() {
    J(this, 1), this.$destroy = a;
  }
  $on(e, n) {
    if (!D(n))
      return a;
    const r = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return r.push(n), () => {
      const o = r.indexOf(n);
      o !== -1 && r.splice(o, 1);
    };
  }
  $set(e) {
    this.$$set && !R(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const h = [];
function ct(t, e = a) {
  let n;
  const r = /* @__PURE__ */ new Set();
  function o(i) {
    if (A(t, i) && (t = i, n)) {
      const d = !h.length;
      for (const s of r)
        s[1](), h.push(s, t);
      if (d) {
        for (let s = 0; s < h.length; s += 2)
          h[s][0](h[s + 1]);
        h.length = 0;
      }
    }
  }
  function u(i) {
    o(i(t));
  }
  function l(i, d = a) {
    const s = [i, d];
    return r.add(s), r.size === 1 && (n = e(o) || a), i(t), () => {
      r.delete(s), r.size === 0 && (n(), n = null);
    };
  }
  return { set: o, update: u, subscribe: l };
}
const I = ct(!1);
function ut(t) {
  let e;
  return {
    c() {
      e = N("Comment");
    },
    m(n, r) {
      M(n, e, r);
    },
    d(n) {
      n && v(e);
    }
  };
}
function it(t) {
  let e;
  return {
    c() {
      e = N("Close comments");
    },
    m(n, r) {
      M(n, e, r);
    },
    d(n) {
      n && v(e);
    }
  };
}
function lt(t) {
  let e, n, r, o, u, l, i;
  function d(c, m) {
    return c[0] ? it : ut;
  }
  let s = d(t), f = s(t);
  return {
    c() {
      e = O("button"), n = q("svg"), r = q("path"), o = W(), u = O("span"), f.c(), p(r, "fill-rule", "evenodd"), p(r, "d", "M2 10c0-3.967 3.69-7 8-7 4.31 0 8 3.033 8 7s-3.69 7-8 7a9.165 9.165 0 01-1.504-.123 5.976 5.976 0 01-3.935 1.107.75.75 0 01-.584-1.143 3.478 3.478 0 00.522-1.756C2.979 13.825 2 12.025 2 10z"), p(r, "clip-rule", "evenodd"), p(n, "xmlns", "http://www.w3.org/2000/svg"), p(n, "viewBox", "0 0 20 20"), p(n, "fill", "currentColor"), p(n, "class", "spd-w-5 spd-h-5 spd-mr-2 spd-flex-shrink-0"), p(e, "class", "spd-flex spd-items-center spd-fixed spd-bottom-8 spd-left-1/2 spd-rounded-full -spd-translate-x-1/2 spd-px-6 spd-h-11 spd-z-[99999] spd-text-neutral-500 hover:spd-text-neutral-200 spd-bg-black spd-shadow-md hover:spd-shadow-xl spd-border spd-border-neutral-600 spd-font-sans spd-text-base spd-transition-colors");
    },
    m(c, m) {
      M(c, e, m), b(e, n), b(n, r), b(e, o), b(e, u), f.m(u, null), l || (i = X(e, "click", t[1]), l = !0);
    },
    p(c, [m]) {
      s !== (s = d(c)) && (f.d(1), f = s(c), f && (f.c(), f.m(u, null)));
    },
    i: a,
    o: a,
    d(c) {
      c && v(e), f.d(), l = !1, i();
    }
  };
}
function dt(t, e, n) {
  let r;
  return V(t, I, (u) => n(0, r = u)), [r, () => {
    I.update((u) => !u);
  }];
}
class ft extends Q {
  constructor(e) {
    super(), K(this, e, dt, lt, A, {});
  }
}
function at(t) {
  let e, n;
  return e = new ft({}), {
    c() {
      st(e.$$.fragment);
    },
    m(r, o) {
      H(e, r, o), n = !0;
    },
    p: a,
    i(r) {
      n || (G(e.$$.fragment, r), n = !0);
    },
    o(r) {
      rt(e.$$.fragment, r), n = !1;
    },
    d(r) {
      J(e, r);
    }
  };
}
class pt extends Q {
  constructor(e) {
    super(), K(this, e, null, at, A, {});
  }
}
const mt = (t) => {
  const e = document.head, n = document.createElement("link");
  n.rel = "stylesheet", n.href = t, e.appendChild(n);
}, ht = () => {
  const t = document.createElement("div");
  t.setAttribute("id", "speedback-app"), document.body.appendChild(t);
}, _t = () => {
  new pt({
    target: document.getElementById("speedback-app")
  });
}, gt = async () => {
  ht(), _t(), mt("/style.css");
};
gt();
