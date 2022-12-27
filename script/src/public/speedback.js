function s() {
}
function b(t) {
  return t();
}
function O() {
  return /* @__PURE__ */ Object.create(null);
}
function C(t) {
  t.forEach(b);
}
function U(t) {
  return typeof t == "function";
}
function W(t, e) {
  return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function";
}
let y;
function Z(t, e) {
  return y || (y = document.createElement("a")), y.href = e, t === y.href;
}
function G(t) {
  return Object.keys(t).length === 0;
}
function u(t, e) {
  t.appendChild(e);
}
function B(t, e, n) {
  t.insertBefore(e, n || null);
}
function v(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function l(t) {
  return document.createElement(t);
}
function R(t) {
  return document.createTextNode(t);
}
function f() {
  return R(" ");
}
function o(t, e, n) {
  n == null ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n);
}
function H(t) {
  return Array.from(t.childNodes);
}
let k;
function T(t) {
  k = t;
}
const d = [], _ = [], x = [], Y = [], P = Promise.resolve();
let m = !1;
function X() {
  m || (m = !0, P.then($));
}
function p(t) {
  x.push(t);
}
const z = /* @__PURE__ */ new Set();
let h = 0;
function $() {
  const t = k;
  do {
    for (; h < d.length; ) {
      const e = d[h];
      h++, T(e), V(e.$$);
    }
    for (T(null), d.length = 0, h = 0; _.length; )
      _.pop()();
    for (let e = 0; e < x.length; e += 1) {
      const n = x[e];
      z.has(n) || (z.add(n), n());
    }
    x.length = 0;
  } while (d.length);
  for (; Y.length; )
    Y.pop()();
  m = !1, z.clear(), T(t);
}
function V(t) {
  if (t.fragment !== null) {
    t.update(), C(t.before_update);
    const e = t.dirty;
    t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(p);
  }
}
const F = /* @__PURE__ */ new Set();
function J(t, e) {
  t && t.i && (F.delete(t), t.i(e));
}
function q(t, e, n, i) {
  const { fragment: c, after_update: g } = t.$$;
  c && c.m(e, n), i || p(() => {
    const r = t.$$.on_mount.map(b).filter(U);
    t.$$.on_destroy ? t.$$.on_destroy.push(...r) : C(r), t.$$.on_mount = [];
  }), g.forEach(p);
}
function K(t, e) {
  const n = t.$$;
  n.fragment !== null && (C(n.on_destroy), n.fragment && n.fragment.d(e), n.on_destroy = n.fragment = null, n.ctx = []);
}
function tt(t, e) {
  t.$$.dirty[0] === -1 && (d.push(t), X(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function et(t, e, n, i, c, g, r, L = [-1]) {
  const A = k;
  T(t);
  const M = t.$$ = {
    fragment: null,
    ctx: [],
    props: g,
    update: s,
    not_equal: c,
    bound: O(),
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (A ? A.$$.context : [])),
    callbacks: O(),
    dirty: L,
    skip_bound: !1,
    root: e.target || A.$$.root
  };
  r && r(M.root);
  let D = !1;
  if (M.ctx = n ? n(t, e.props || {}, (N, j, ...a) => {
    const I = a.length ? a[0] : j;
    return M.ctx && c(M.ctx[N], M.ctx[N] = I) && (!M.skip_bound && M.bound[N] && M.bound[N](I), D && tt(t, N)), j;
  }) : [], M.update(), D = !0, C(M.before_update), M.fragment = i ? i(M.ctx) : !1, e.target) {
    if (e.hydrate) {
      const N = H(e.target);
      M.fragment && M.fragment.l(N), N.forEach(v);
    } else
      M.fragment && M.fragment.c();
    e.intro && J(t.$$.fragment), q(t, e.target, e.anchor, e.customElement), $();
  }
  T(A);
}
class nt {
  $destroy() {
    K(this, 1), this.$destroy = s;
  }
  $on(e, n) {
    if (!U(n))
      return s;
    const i = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return i.push(n), () => {
      const c = i.indexOf(n);
      c !== -1 && i.splice(c, 1);
    };
  }
  $set(e) {
    this.$$set && !G(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const Mt = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBhcmlhLWhpZGRlbj0idHJ1ZSIgcm9sZT0iaW1nIiBjbGFzcz0iaWNvbmlmeSBpY29uaWZ5LS1sb2dvcyIgd2lkdGg9IjI2LjYiIGhlaWdodD0iMzIiIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIG1lZXQiIHZpZXdCb3g9IjAgMCAyNTYgMzA4Ij48cGF0aCBmaWxsPSIjRkYzRTAwIiBkPSJNMjM5LjY4MiA0MC43MDdDMjExLjExMy0uMTgyIDE1NC42OS0xMi4zMDEgMTEzLjg5NSAxMy42OUw0Mi4yNDcgNTkuMzU2YTgyLjE5OCA4Mi4xOTggMCAwIDAtMzcuMTM1IDU1LjA1NmE4Ni41NjYgODYuNTY2IDAgMCAwIDguNTM2IDU1LjU3NmE4Mi40MjUgODIuNDI1IDAgMCAwLTEyLjI5NiAzMC43MTlhODcuNTk2IDg3LjU5NiAwIDAgMCAxNC45NjQgNjYuMjQ0YzI4LjU3NCA0MC44OTMgODQuOTk3IDUzLjAwNyAxMjUuNzg3IDI3LjAxNmw3MS42NDgtNDUuNjY0YTgyLjE4MiA4Mi4xODIgMCAwIDAgMzcuMTM1LTU1LjA1N2E4Ni42MDEgODYuNjAxIDAgMCAwLTguNTMtNTUuNTc3YTgyLjQwOSA4Mi40MDkgMCAwIDAgMTIuMjktMzAuNzE4YTg3LjU3MyA4Ny41NzMgMCAwIDAtMTQuOTYzLTY2LjI0NCI+PC9wYXRoPjxwYXRoIGZpbGw9IiNGRkYiIGQ9Ik0xMDYuODg5IDI3MC44NDFjLTIzLjEwMiA2LjAwNy00Ny40OTctMy4wMzYtNjEuMTAzLTIyLjY0OGE1Mi42ODUgNTIuNjg1IDAgMCAxLTkuMDAzLTM5Ljg1YTQ5Ljk3OCA0OS45NzggMCAwIDEgMS43MTMtNi42OTNsMS4zNS00LjExNWwzLjY3MSAyLjY5N2E5Mi40NDcgOTIuNDQ3IDAgMCAwIDI4LjAzNiAxNC4wMDdsMi42NjMuODA4bC0uMjQ1IDIuNjU5YTE2LjA2NyAxNi4wNjcgMCAwIDAgMi44OSAxMC42NTZhMTcuMTQzIDE3LjE0MyAwIDAgMCAxOC4zOTcgNi44MjhhMTUuNzg2IDE1Ljc4NiAwIDAgMCA0LjQwMy0xLjkzNWw3MS42Ny00NS42NzJhMTQuOTIyIDE0LjkyMiAwIDAgMCA2LjczNC05Ljk3N2ExNS45MjMgMTUuOTIzIDAgMCAwLTIuNzEzLTEyLjAxMWExNy4xNTYgMTcuMTU2IDAgMCAwLTE4LjQwNC02LjgzMmExNS43OCAxNS43OCAwIDAgMC00LjM5NiAxLjkzM2wtMjcuMzUgMTcuNDM0YTUyLjI5OCA1Mi4yOTggMCAwIDEtMTQuNTUzIDYuMzkxYy0yMy4xMDEgNi4wMDctNDcuNDk3LTMuMDM2LTYxLjEwMS0yMi42NDlhNTIuNjgxIDUyLjY4MSAwIDAgMS05LjAwNC0zOS44NDlhNDkuNDI4IDQ5LjQyOCAwIDAgMSAyMi4zNC0zMy4xMTRsNzEuNjY0LTQ1LjY3N2E1Mi4yMTggNTIuMjE4IDAgMCAxIDE0LjU2My02LjM5OGMyMy4xMDEtNi4wMDcgNDcuNDk3IDMuMDM2IDYxLjEwMSAyMi42NDhhNTIuNjg1IDUyLjY4NSAwIDAgMSA5LjAwNCAzOS44NWE1MC41NTkgNTAuNTU5IDAgMCAxLTEuNzEzIDYuNjkybC0xLjM1IDQuMTE2bC0zLjY3LTIuNjkzYTkyLjM3MyA5Mi4zNzMgMCAwIDAtMjguMDM3LTE0LjAxM2wtMi42NjQtLjgwOWwuMjQ2LTIuNjU4YTE2LjA5OSAxNi4wOTkgMCAwIDAtMi44OS0xMC42NTZhMTcuMTQzIDE3LjE0MyAwIDAgMC0xOC4zOTgtNi44MjhhMTUuNzg2IDE1Ljc4NiAwIDAgMC00LjQwMiAxLjkzNWwtNzEuNjcgNDUuNjc0YTE0Ljg5OCAxNC44OTggMCAwIDAtNi43MyA5Ljk3NWExNS45IDE1LjkgMCAwIDAgMi43MDkgMTIuMDEyYTE3LjE1NiAxNy4xNTYgMCAwIDAgMTguNDA0IDYuODMyYTE1Ljg0MSAxNS44NDEgMCAwIDAgNC40MDItMS45MzVsMjcuMzQ1LTE3LjQyN2E1Mi4xNDcgNTIuMTQ3IDAgMCAxIDE0LjU1Mi02LjM5N2MyMy4xMDEtNi4wMDYgNDcuNDk3IDMuMDM3IDYxLjEwMiAyMi42NWE1Mi42ODEgNTIuNjgxIDAgMCAxIDkuMDAzIDM5Ljg0OGE0OS40NTMgNDkuNDUzIDAgMCAxLTIyLjM0IDMzLjEybC03MS42NjQgNDUuNjczYTUyLjIxOCA1Mi4yMTggMCAwIDEtMTQuNTYzIDYuMzk4Ij48L3BhdGg+PC9zdmc+";
function it(t) {
  let e, n, i, c, g, r, L, A, M, D, N, j, a, I, E;
  return {
    c() {
      e = l("main"), n = l("div"), i = l("a"), i.innerHTML = '<img src="/vite.svg" alt="Vite Logo"/>', c = f(), g = l("a"), r = l("img"), A = f(), M = l("h1"), M.textContent = "Vite + Svelte", D = f(), N = l("div"), j = f(), a = l("p"), a.innerHTML = 'Check out <a href="https://github.com/sveltejs/kit#readme" target="_blank" rel="noreferrer">SvelteKit</a>, the official Svelte app framework powered by Vite!', I = f(), E = l("p"), E.textContent = "Click on the Vite and Svelte logos to learn more", o(i, "href", "https://vitejs.dev"), o(i, "target", "_blank"), o(i, "rel", "noreferrer"), Z(r.src, L = Mt) || o(r, "src", L), o(r, "alt", "Svelte Logo"), o(g, "href", "https://svelte.dev"), o(g, "target", "_blank"), o(g, "rel", "noreferrer"), o(n, "class", "flex flex-col");
    },
    m(w, Q) {
      B(w, e, Q), u(e, n), u(n, i), u(n, c), u(n, g), u(g, r), u(e, A), u(e, M), u(e, D), u(e, N), u(e, j), u(e, a), u(e, I), u(e, E);
    },
    p: s,
    i: s,
    o: s,
    d(w) {
      w && v(e);
    }
  };
}
class ut extends nt {
  constructor(e) {
    super(), et(this, e, null, it, W, {});
  }
}
let S = null;
const ct = () => {
  const t = document.createElement("div");
  t.setAttribute("id", "speedback-app"), document.body.appendChild(t), console.log(t);
}, rt = () => {
  S = new ut({
    target: document.getElementById("speedback-app")
  }), console.log(S);
}, Nt = async () => {
  ct(), rt();
};
Nt();
