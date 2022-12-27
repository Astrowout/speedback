function d() {
}
function v(t) {
  return t();
}
function S() {
  return /* @__PURE__ */ Object.create(null);
}
function w(t) {
  t.forEach(v);
}
function Q(t) {
  return typeof t == "function";
}
function W(t, e) {
  return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function";
}
let h;
function J(t, e) {
  return h || (h = document.createElement("a")), h.href = e, t === h.href;
}
function V(t) {
  return Object.keys(t).length === 0;
}
function c(t, e) {
  t.appendChild(e);
}
function Z(t, e, n) {
  t.insertBefore(e, n || null);
}
function Y(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function g(t) {
  return document.createElement(t);
}
function p(t) {
  return document.createTextNode(t);
}
function C() {
  return p(" ");
}
function q(t, e, n, i) {
  return t.addEventListener(e, n, i), () => t.removeEventListener(e, n, i);
}
function j(t, e, n) {
  n == null ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n);
}
function K(t) {
  return Array.from(t.childNodes);
}
function tt(t, e) {
  e = "" + e, t.wholeText !== e && (t.data = e);
}
let k;
function L(t) {
  k = t;
}
const T = [], $ = [], m = [], b = [], et = Promise.resolve();
let _ = !1;
function nt() {
  _ || (_ = !0, et.then(G));
}
function O(t) {
  m.push(t);
}
const z = /* @__PURE__ */ new Set();
let E = 0;
function G() {
  const t = k;
  do {
    for (; E < T.length; ) {
      const e = T[E];
      E++, L(e), it(e.$$);
    }
    for (L(null), T.length = 0, E = 0; $.length; )
      $.pop()();
    for (let e = 0; e < m.length; e += 1) {
      const n = m[e];
      z.has(n) || (z.add(n), n());
    }
    m.length = 0;
  } while (T.length);
  for (; b.length; )
    b.pop()();
  _ = !1, z.clear(), L(t);
}
function it(t) {
  if (t.fragment !== null) {
    t.update(), w(t.before_update);
    const e = t.dirty;
    t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(O);
  }
}
const x = /* @__PURE__ */ new Set();
let Mt;
function B(t, e) {
  t && t.i && (x.delete(t), t.i(e));
}
function ut(t, e, n, i) {
  if (t && t.o) {
    if (x.has(t))
      return;
    x.add(t), Mt.c.push(() => {
      x.delete(t), i && (n && t.d(1), i());
    }), t.o(e);
  } else
    i && i();
}
function rt(t) {
  t && t.c();
}
function R(t, e, n, i) {
  const { fragment: u, after_update: l } = t.$$;
  u && u.m(e, n), i || O(() => {
    const r = t.$$.on_mount.map(v).filter(Q);
    t.$$.on_destroy ? t.$$.on_destroy.push(...r) : w(r), t.$$.on_mount = [];
  }), l.forEach(O);
}
function H(t, e) {
  const n = t.$$;
  n.fragment !== null && (w(n.on_destroy), n.fragment && n.fragment.d(e), n.on_destroy = n.fragment = null, n.ctx = []);
}
function ct(t, e) {
  t.$$.dirty[0] === -1 && (T.push(t), nt(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function P(t, e, n, i, u, l, r, s = [-1]) {
  const a = k;
  L(t);
  const M = t.$$ = {
    fragment: null,
    ctx: [],
    props: l,
    update: d,
    not_equal: u,
    bound: S(),
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (a ? a.$$.context : [])),
    callbacks: S(),
    dirty: s,
    skip_bound: !1,
    root: e.target || a.$$.root
  };
  r && r(M.root);
  let N = !1;
  if (M.ctx = n ? n(t, e.props || {}, (o, f, ...I) => {
    const D = I.length ? I[0] : f;
    return M.ctx && u(M.ctx[o], M.ctx[o] = D) && (!M.skip_bound && M.bound[o] && M.bound[o](D), N && ct(t, o)), f;
  }) : [], M.update(), N = !0, w(M.before_update), M.fragment = i ? i(M.ctx) : !1, e.target) {
    if (e.hydrate) {
      const o = K(e.target);
      M.fragment && M.fragment.l(o), o.forEach(Y);
    } else
      M.fragment && M.fragment.c();
    e.intro && B(t.$$.fragment), R(t, e.target, e.anchor, e.customElement), G();
  }
  L(a);
}
class X {
  $destroy() {
    H(this, 1), this.$destroy = d;
  }
  $on(e, n) {
    if (!Q(n))
      return d;
    const i = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return i.push(n), () => {
      const u = i.indexOf(n);
      u !== -1 && i.splice(u, 1);
    };
  }
  $set(e) {
    this.$$set && !V(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const ot = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBhcmlhLWhpZGRlbj0idHJ1ZSIgcm9sZT0iaW1nIiBjbGFzcz0iaWNvbmlmeSBpY29uaWZ5LS1sb2dvcyIgd2lkdGg9IjI2LjYiIGhlaWdodD0iMzIiIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIG1lZXQiIHZpZXdCb3g9IjAgMCAyNTYgMzA4Ij48cGF0aCBmaWxsPSIjRkYzRTAwIiBkPSJNMjM5LjY4MiA0MC43MDdDMjExLjExMy0uMTgyIDE1NC42OS0xMi4zMDEgMTEzLjg5NSAxMy42OUw0Mi4yNDcgNTkuMzU2YTgyLjE5OCA4Mi4xOTggMCAwIDAtMzcuMTM1IDU1LjA1NmE4Ni41NjYgODYuNTY2IDAgMCAwIDguNTM2IDU1LjU3NmE4Mi40MjUgODIuNDI1IDAgMCAwLTEyLjI5NiAzMC43MTlhODcuNTk2IDg3LjU5NiAwIDAgMCAxNC45NjQgNjYuMjQ0YzI4LjU3NCA0MC44OTMgODQuOTk3IDUzLjAwNyAxMjUuNzg3IDI3LjAxNmw3MS42NDgtNDUuNjY0YTgyLjE4MiA4Mi4xODIgMCAwIDAgMzcuMTM1LTU1LjA1N2E4Ni42MDEgODYuNjAxIDAgMCAwLTguNTMtNTUuNTc3YTgyLjQwOSA4Mi40MDkgMCAwIDAgMTIuMjktMzAuNzE4YTg3LjU3MyA4Ny41NzMgMCAwIDAtMTQuOTYzLTY2LjI0NCI+PC9wYXRoPjxwYXRoIGZpbGw9IiNGRkYiIGQ9Ik0xMDYuODg5IDI3MC44NDFjLTIzLjEwMiA2LjAwNy00Ny40OTctMy4wMzYtNjEuMTAzLTIyLjY0OGE1Mi42ODUgNTIuNjg1IDAgMCAxLTkuMDAzLTM5Ljg1YTQ5Ljk3OCA0OS45NzggMCAwIDEgMS43MTMtNi42OTNsMS4zNS00LjExNWwzLjY3MSAyLjY5N2E5Mi40NDcgOTIuNDQ3IDAgMCAwIDI4LjAzNiAxNC4wMDdsMi42NjMuODA4bC0uMjQ1IDIuNjU5YTE2LjA2NyAxNi4wNjcgMCAwIDAgMi44OSAxMC42NTZhMTcuMTQzIDE3LjE0MyAwIDAgMCAxOC4zOTcgNi44MjhhMTUuNzg2IDE1Ljc4NiAwIDAgMCA0LjQwMy0xLjkzNWw3MS42Ny00NS42NzJhMTQuOTIyIDE0LjkyMiAwIDAgMCA2LjczNC05Ljk3N2ExNS45MjMgMTUuOTIzIDAgMCAwLTIuNzEzLTEyLjAxMWExNy4xNTYgMTcuMTU2IDAgMCAwLTE4LjQwNC02LjgzMmExNS43OCAxNS43OCAwIDAgMC00LjM5NiAxLjkzM2wtMjcuMzUgMTcuNDM0YTUyLjI5OCA1Mi4yOTggMCAwIDEtMTQuNTUzIDYuMzkxYy0yMy4xMDEgNi4wMDctNDcuNDk3LTMuMDM2LTYxLjEwMS0yMi42NDlhNTIuNjgxIDUyLjY4MSAwIDAgMS05LjAwNC0zOS44NDlhNDkuNDI4IDQ5LjQyOCAwIDAgMSAyMi4zNC0zMy4xMTRsNzEuNjY0LTQ1LjY3N2E1Mi4yMTggNTIuMjE4IDAgMCAxIDE0LjU2My02LjM5OGMyMy4xMDEtNi4wMDcgNDcuNDk3IDMuMDM2IDYxLjEwMSAyMi42NDhhNTIuNjg1IDUyLjY4NSAwIDAgMSA5LjAwNCAzOS44NWE1MC41NTkgNTAuNTU5IDAgMCAxLTEuNzEzIDYuNjkybC0xLjM1IDQuMTE2bC0zLjY3LTIuNjkzYTkyLjM3MyA5Mi4zNzMgMCAwIDAtMjguMDM3LTE0LjAxM2wtMi42NjQtLjgwOWwuMjQ2LTIuNjU4YTE2LjA5OSAxNi4wOTkgMCAwIDAtMi44OS0xMC42NTZhMTcuMTQzIDE3LjE0MyAwIDAgMC0xOC4zOTgtNi44MjhhMTUuNzg2IDE1Ljc4NiAwIDAgMC00LjQwMiAxLjkzNWwtNzEuNjcgNDUuNjc0YTE0Ljg5OCAxNC44OTggMCAwIDAtNi43MyA5Ljk3NWExNS45IDE1LjkgMCAwIDAgMi43MDkgMTIuMDEyYTE3LjE1NiAxNy4xNTYgMCAwIDAgMTguNDA0IDYuODMyYTE1Ljg0MSAxNS44NDEgMCAwIDAgNC40MDItMS45MzVsMjcuMzQ1LTE3LjQyN2E1Mi4xNDcgNTIuMTQ3IDAgMCAxIDE0LjU1Mi02LjM5N2MyMy4xMDEtNi4wMDYgNDcuNDk3IDMuMDM3IDYxLjEwMiAyMi42NWE1Mi42ODEgNTIuNjgxIDAgMCAxIDkuMDAzIDM5Ljg0OGE0OS40NTMgNDkuNDUzIDAgMCAxLTIyLjM0IDMzLjEybC03MS42NjQgNDUuNjczYTUyLjIxOCA1Mi4yMTggMCAwIDEtMTQuNTYzIDYuMzk4Ij48L3BhdGg+PC9zdmc+";
function lt(t) {
  let e, n, i, u, l;
  return {
    c() {
      e = g("button"), n = p("count is "), i = p(t[0]);
    },
    m(r, s) {
      Z(r, e, s), c(e, n), c(e, i), u || (l = q(e, "click", t[1]), u = !0);
    },
    p(r, [s]) {
      s & 1 && tt(i, r[0]);
    },
    i: d,
    o: d,
    d(r) {
      r && Y(e), u = !1, l();
    }
  };
}
function st(t, e, n) {
  let i = 0;
  return [i, () => {
    n(0, i += 1);
  }];
}
class Nt extends X {
  constructor(e) {
    super(), P(this, e, st, lt, W, {});
  }
}
function gt(t) {
  let e, n, i, u, l, r, s, a, M, N, o, f, I, D, y;
  return N = new Nt({}), {
    c() {
      e = g("main"), n = g("div"), i = g("a"), u = g("img"), r = C(), s = g("h1"), s.textContent = "Vite + Svelte", a = C(), M = g("div"), rt(N.$$.fragment), o = C(), f = g("p"), f.innerHTML = 'Check out <a href="https://github.com/sveltejs/kit#readme" target="_blank" rel="noreferrer">SvelteKit</a>, the official Svelte app framework powered by Vite!', I = C(), D = g("p"), D.textContent = "Click on the Vite and Svelte logos to learn more", J(u.src, l = ot) || j(u, "src", l), j(u, "alt", "Svelte Logo"), j(i, "href", "https://svelte.dev"), j(i, "target", "_blank"), j(i, "rel", "noreferrer"), j(n, "class", "spd-flex spd-bg-amber-600");
    },
    m(A, F) {
      Z(A, e, F), c(e, n), c(n, i), c(i, u), c(e, r), c(e, s), c(e, a), c(e, M), R(N, M, null), c(e, o), c(e, f), c(e, I), c(e, D), y = !0;
    },
    p: d,
    i(A) {
      y || (B(N.$$.fragment, A), y = !0);
    },
    o(A) {
      ut(N.$$.fragment, A), y = !1;
    },
    d(A) {
      A && Y(e), H(N);
    }
  };
}
class at extends X {
  constructor(e) {
    super(), P(this, e, null, gt, W, {});
  }
}
const At = (t) => {
  const e = document.head, n = document.createElement("link");
  n.rel = "stylesheet", n.href = t, e.appendChild(n);
};
let U = null;
const ft = () => {
  const t = document.createElement("div");
  t.setAttribute("id", "speedback-app"), document.body.appendChild(t), console.log(t);
}, Dt = () => {
  U = new at({
    target: document.getElementById("speedback-app")
  }), console.log(U);
}, jt = async () => {
  ft(), Dt(), At("/style.css");
};
jt();
