;(() => {
  function mt(o) {
    if (o === void 0)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called",
      )
    return o
  }
  function Vi(o, t) {
    ;(o.prototype = Object.create(t.prototype)),
      (o.prototype.constructor = o),
      (o.__proto__ = t)
  }
  var J = {
      autoSleep: 120,
      force3D: 'auto',
      nullTargetWarn: 1,
      units: { lineHeight: '' },
    },
    $t = { duration: 0.5, overwrite: !1, delay: 0 },
    si,
    nt = 1e8,
    M = 1 / nt,
    $e = Math.PI * 2,
    sn = $e / 4,
    on = 0,
    Hi = Math.sqrt,
    an = Math.cos,
    ln = Math.sin,
    N = function (t) {
      return typeof t == 'string'
    },
    Y = function (t) {
      return typeof t == 'function'
    },
    vt = function (t) {
      return typeof t == 'number'
    },
    Re = function (t) {
      return typeof t > 'u'
    },
    wt = function (t) {
      return typeof t == 'object'
    },
    Z = function (t) {
      return t !== !1
    },
    ji = function () {
      return typeof window < 'u'
    },
    ke = function (t) {
      return Y(t) || N(t)
    },
    Ui =
      (typeof ArrayBuffer == 'function' && ArrayBuffer.isView) ||
      function () {},
    X = Array.isArray,
    Ze = /(?:-?\.?\d|\.)+/gi,
    oi = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
    Yt = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
    Ue = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
    ai = /[+-]=-?[.\d]+/,
    Xi = /[^,'"\[\]\s]+/gi,
    cn = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
    z,
    ft,
    Je,
    li,
    tt = {},
    Ee = {},
    qi,
    Gi = function (t) {
      return (Ee = Nt(t, tt)) && q
    },
    Le = function (t, e) {
      return console.warn(
        'Invalid property',
        t,
        'set to',
        e,
        'Missing plugin? gsap.registerPlugin()',
      )
    },
    Pe = function (t, e) {
      return !e && console.warn(t)
    },
    Ki = function (t, e) {
      return (t && (tt[t] = e) && Ee && (Ee[t] = e)) || tt
    },
    de = function () {
      return 0
    },
    ci = {},
    Et = [],
    ti = {},
    Qi,
    Q = {},
    Xe = {},
    Ii = 30,
    Oe = [],
    hi = '',
    ui = function (t) {
      var e = t[0],
        i,
        r
      if ((wt(e) || Y(e) || (t = [t]), !(i = (e._gsap || {}).harness))) {
        for (r = Oe.length; r-- && !Oe[r].targetTest(e); );
        i = Oe[r]
      }
      for (r = t.length; r--; )
        (t[r] && (t[r]._gsap || (t[r]._gsap = new _i(t[r], i)))) ||
          t.splice(r, 1)
      return t
    },
    Pt = function (t) {
      return t._gsap || ui(st(t))[0]._gsap
    },
    fi = function (t, e, i) {
      return (i = t[e]) && Y(i)
        ? t[e]()
        : (Re(i) && t.getAttribute && t.getAttribute(e)) || i
    },
    G = function (t, e) {
      return (t = t.split(',')).forEach(e) || t
    },
    F = function (t) {
      return Math.round(t * 1e5) / 1e5 || 0
    },
    j = function (t) {
      return Math.round(t * 1e7) / 1e7 || 0
    },
    Vt = function (t, e) {
      var i = e.charAt(0),
        r = parseFloat(e.substr(2))
      return (
        (t = parseFloat(t)),
        i === '+' ? t + r : i === '-' ? t - r : i === '*' ? t * r : t / r
      )
    },
    hn = function (t, e) {
      for (var i = e.length, r = 0; t.indexOf(e[r]) < 0 && ++r < i; );
      return r < i
    },
    Ce = function () {
      var t = Et.length,
        e = Et.slice(0),
        i,
        r
      for (ti = {}, Et.length = 0, i = 0; i < t; i++)
        (r = e[i]),
          r && r._lazy && (r.render(r._lazy[0], r._lazy[1], !0)._lazy = 0)
    },
    $i = function (t, e, i, r) {
      Et.length && Ce(), t.render(e, i, r), Et.length && Ce()
    },
    Zi = function (t) {
      var e = parseFloat(t)
      return (e || e === 0) && (t + '').match(Xi).length < 2
        ? e
        : N(t)
        ? t.trim()
        : t
    },
    Ji = function (t) {
      return t
    },
    at = function (t, e) {
      for (var i in e) i in t || (t[i] = e[i])
      return t
    },
    un = function (t) {
      return function (e, i) {
        for (var r in i)
          r in e || (r === 'duration' && t) || r === 'ease' || (e[r] = i[r])
      }
    },
    Nt = function (t, e) {
      for (var i in e) t[i] = e[i]
      return t
    },
    zi = function o(t, e) {
      for (var i in e)
        i !== '__proto__' &&
          i !== 'constructor' &&
          i !== 'prototype' &&
          (t[i] = wt(e[i]) ? o(t[i] || (t[i] = {}), e[i]) : e[i])
      return t
    },
    Ae = function (t, e) {
      var i = {},
        r
      for (r in t) r in e || (i[r] = t[r])
      return i
    },
    he = function (t) {
      var e = t.parent || z,
        i = t.keyframes ? un(X(t.keyframes)) : at
      if (Z(t.inherit))
        for (; e; ) i(t, e.vars.defaults), (e = e.parent || e._dp)
      return t
    },
    fn = function (t, e) {
      for (var i = t.length, r = i === e.length; r && i-- && t[i] === e[i]; );
      return i < 0
    },
    tr = function (t, e, i, r, n) {
      i === void 0 && (i = '_first'), r === void 0 && (r = '_last')
      var s = t[r],
        a
      if (n) for (a = e[n]; s && s[n] > a; ) s = s._prev
      return (
        s
          ? ((e._next = s._next), (s._next = e))
          : ((e._next = t[i]), (t[i] = e)),
        e._next ? (e._next._prev = e) : (t[r] = e),
        (e._prev = s),
        (e.parent = e._dp = t),
        e
      )
    },
    Be = function (t, e, i, r) {
      i === void 0 && (i = '_first'), r === void 0 && (r = '_last')
      var n = e._prev,
        s = e._next
      n ? (n._next = s) : t[i] === e && (t[i] = s),
        s ? (s._prev = n) : t[r] === e && (t[r] = n),
        (e._next = e._prev = e.parent = null)
    },
    gt = function (t, e) {
      t.parent && (!e || t.parent.autoRemoveChildren) && t.parent.remove(t),
        (t._act = 0)
    },
    Ft = function (t, e) {
      if (t && (!e || e._end > t._dur || e._start < 0))
        for (var i = t; i; ) (i._dirty = 1), (i = i.parent)
      return t
    },
    dn = function (t) {
      for (var e = t.parent; e && e.parent; )
        (e._dirty = 1), e.totalDuration(), (e = e.parent)
      return t
    },
    pn = function o(t) {
      return !t || (t._ts && o(t.parent))
    },
    Fi = function (t) {
      return t._repeat ? Zt(t._tTime, (t = t.duration() + t._rDelay)) * t : 0
    },
    Zt = function (t, e) {
      var i = Math.floor((t /= e))
      return t && i === t ? i - 1 : i
    },
    De = function (t, e) {
      return (
        (t - e._start) * e._ts +
        (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur)
      )
    },
    Ie = function (t) {
      return (t._end = j(
        t._start + (t._tDur / Math.abs(t._ts || t._rts || M) || 0),
      ))
    },
    di = function (t, e) {
      var i = t._dp
      return (
        i &&
          i.smoothChildTiming &&
          t._ts &&
          ((t._start = j(
            i._time -
              (t._ts > 0
                ? e / t._ts
                : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts),
          )),
          Ie(t),
          i._dirty || Ft(i, t)),
        t
      )
    },
    er = function (t, e) {
      var i
      if (
        ((e._time || (e._initted && !e._dur)) &&
          ((i = De(t.rawTime(), e)),
          (!e._dur || me(0, e.totalDuration(), i) - e._tTime > M) &&
            e.render(i, !0)),
        Ft(t, e)._dp && t._initted && t._time >= t._dur && t._ts)
      ) {
        if (t._dur < t.duration())
          for (i = t; i._dp; )
            i.rawTime() >= 0 && i.totalTime(i._tTime), (i = i._dp)
        t._zTime = -M
      }
    },
    dt = function (t, e, i, r) {
      return (
        e.parent && gt(e),
        (e._start = j(
          (vt(i) ? i : i || t !== z ? rt(t, i, e) : t._time) + e._delay,
        )),
        (e._end = j(
          e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0),
        )),
        tr(t, e, '_first', '_last', t._sort ? '_start' : 0),
        ei(e) || (t._recent = e),
        r || er(t, e),
        t
      )
    },
    ir = function (t, e) {
      return (
        (tt.ScrollTrigger || Le('scrollTrigger', e)) &&
        tt.ScrollTrigger.create(e, t)
      )
    },
    rr = function (t, e, i, r) {
      if ((yi(t, e), !t._initted)) return 1
      if (
        !i &&
        t._pt &&
        ((t._dur && t.vars.lazy !== !1) || (!t._dur && t.vars.lazy)) &&
        Qi !== $.frame
      )
        return Et.push(t), (t._lazy = [e, r]), 1
    },
    _n = function o(t) {
      var e = t.parent
      return e && e._ts && e._initted && !e._lock && (e.rawTime() < 0 || o(e))
    },
    ei = function (t) {
      var e = t.data
      return e === 'isFromStart' || e === 'isStart'
    },
    mn = function (t, e, i, r) {
      var n = t.ratio,
        s =
          e < 0 ||
          (!e &&
            ((!t._start && _n(t) && !(!t._initted && ei(t))) ||
              ((t._ts < 0 || t._dp._ts < 0) && !ei(t))))
            ? 0
            : 1,
        a = t._rDelay,
        c = 0,
        l,
        h,
        f
      if (
        (a &&
          t._repeat &&
          ((c = me(0, t._tDur, e)),
          (h = Zt(c, a)),
          t._yoyo && h & 1 && (s = 1 - s),
          h !== Zt(t._tTime, a) &&
            ((n = 1 - s),
            t.vars.repeatRefresh && t._initted && t.invalidate())),
        s !== n || r || t._zTime === M || (!e && t._zTime))
      ) {
        if (!t._initted && rr(t, e, r, i)) return
        for (
          f = t._zTime,
            t._zTime = e || (i ? M : 0),
            i || (i = e && !f),
            t.ratio = s,
            t._from && (s = 1 - s),
            t._time = 0,
            t._tTime = c,
            l = t._pt;
          l;

        )
          l.r(s, l.d), (l = l._next)
        t._startAt && e < 0 && t._startAt.render(e, !0, !0),
          t._onUpdate && !i && ot(t, 'onUpdate'),
          c && t._repeat && !i && t.parent && ot(t, 'onRepeat'),
          (e >= t._tDur || e < 0) &&
            t.ratio === s &&
            (s && gt(t, 1),
            i ||
              (ot(t, s ? 'onComplete' : 'onReverseComplete', !0),
              t._prom && t._prom()))
      } else t._zTime || (t._zTime = e)
    },
    gn = function (t, e, i) {
      var r
      if (i > e)
        for (r = t._first; r && r._start <= i; ) {
          if (r.data === 'isPause' && r._start > e) return r
          r = r._next
        }
      else
        for (r = t._last; r && r._start >= i; ) {
          if (r.data === 'isPause' && r._start < e) return r
          r = r._prev
        }
    },
    Jt = function (t, e, i, r) {
      var n = t._repeat,
        s = j(e) || 0,
        a = t._tTime / t._tDur
      return (
        a && !r && (t._time *= s / t._dur),
        (t._dur = s),
        (t._tDur = n ? (n < 0 ? 1e10 : j(s * (n + 1) + t._rDelay * n)) : s),
        a > 0 && !r ? di(t, (t._tTime = t._tDur * a)) : t.parent && Ie(t),
        i || Ft(t.parent, t),
        t
      )
    },
    Wi = function (t) {
      return t instanceof U ? Ft(t) : Jt(t, t._dur)
    },
    yn = { _start: 0, endTime: de, totalDuration: de },
    rt = function o(t, e, i) {
      var r = t.labels,
        n = t._recent || yn,
        s = t.duration() >= nt ? n.endTime(!1) : t._dur,
        a,
        c,
        l
      return N(e) && (isNaN(e) || e in r)
        ? ((c = e.charAt(0)),
          (l = e.substr(-1) === '%'),
          (a = e.indexOf('=')),
          c === '<' || c === '>'
            ? (a >= 0 && (e = e.replace(/=/, '')),
              (c === '<' ? n._start : n.endTime(n._repeat >= 0)) +
                (parseFloat(e.substr(1)) || 0) *
                  (l ? (a < 0 ? n : i).totalDuration() / 100 : 1))
            : a < 0
            ? (e in r || (r[e] = s), r[e])
            : ((c = parseFloat(e.charAt(a - 1) + e.substr(a + 1))),
              l && i && (c = (c / 100) * (X(i) ? i[0] : i).totalDuration()),
              a > 1 ? o(t, e.substr(0, a - 1), i) + c : s + c))
        : e == null
        ? s
        : +e
    },
    ue = function (t, e, i) {
      var r = vt(e[1]),
        n = (r ? 2 : 1) + (t < 2 ? 0 : 1),
        s = e[n],
        a,
        c
      if ((r && (s.duration = e[1]), (s.parent = i), t)) {
        for (a = s, c = i; c && !('immediateRender' in a); )
          (a = c.vars.defaults || {}), (c = Z(c.vars.inherit) && c.parent)
        ;(s.immediateRender = Z(a.immediateRender)),
          t < 2 ? (s.runBackwards = 1) : (s.startAt = e[n - 1])
      }
      return new W(e[0], s, e[n + 1])
    },
    Ct = function (t, e) {
      return t || t === 0 ? e(t) : e
    },
    me = function (t, e, i) {
      return i < t ? t : i > e ? e : i
    },
    V = function (t, e) {
      return !N(t) || !(e = cn.exec(t)) ? '' : e[1]
    },
    vn = function (t, e, i) {
      return Ct(i, function (r) {
        return me(t, e, r)
      })
    },
    ii = [].slice,
    nr = function (t, e) {
      return (
        t &&
        wt(t) &&
        'length' in t &&
        ((!e && !t.length) || (t.length - 1 in t && wt(t[0]))) &&
        !t.nodeType &&
        t !== ft
      )
    },
    wn = function (t, e, i) {
      return (
        i === void 0 && (i = []),
        t.forEach(function (r) {
          var n
          return (N(r) && !e) || nr(r, 1)
            ? (n = i).push.apply(n, st(r))
            : i.push(r)
        }) || i
      )
    },
    st = function (t, e, i) {
      return N(t) && !i && (Je || !te())
        ? ii.call((e || li).querySelectorAll(t), 0)
        : X(t)
        ? wn(t, i)
        : nr(t)
        ? ii.call(t, 0)
        : t
        ? [t]
        : []
    },
    bn = function (t) {
      return (
        (t = st(t)[0] || Pe('Invalid scope') || {}),
        function (e) {
          var i = t.current || t.nativeElement || t
          return st(
            e,
            i.querySelectorAll
              ? i
              : i === t
              ? Pe('Invalid scope') || li.createElement('div')
              : t,
          )
        }
      )
    },
    sr = function (t) {
      return t.sort(function () {
        return 0.5 - Math.random()
      })
    },
    or = function (t) {
      if (Y(t)) return t
      var e = wt(t) ? t : { each: t },
        i = Wt(e.ease),
        r = e.from || 0,
        n = parseFloat(e.base) || 0,
        s = {},
        a = r > 0 && r < 1,
        c = isNaN(r) || a,
        l = e.axis,
        h = r,
        f = r
      return (
        N(r)
          ? (h = f = { center: 0.5, edges: 0.5, end: 1 }[r] || 0)
          : !a && c && ((h = r[0]), (f = r[1])),
        function (d, u, _) {
          var p = (_ || e).length,
            y = s[p],
            v,
            T,
            b,
            m,
            g,
            w,
            S,
            k,
            x
          if (!y) {
            if (((x = e.grid === 'auto' ? 0 : (e.grid || [1, nt])[1]), !x)) {
              for (
                S = -nt;
                S < (S = _[x++].getBoundingClientRect().left) && x < p;

              );
              x--
            }
            for (
              y = s[p] = [],
                v = c ? Math.min(x, p) * h - 0.5 : r % x,
                T = x === nt ? 0 : c ? (p * f) / x - 0.5 : (r / x) | 0,
                S = 0,
                k = nt,
                w = 0;
              w < p;
              w++
            )
              (b = (w % x) - v),
                (m = T - ((w / x) | 0)),
                (y[w] = g =
                  l ? Math.abs(l === 'y' ? m : b) : Hi(b * b + m * m)),
                g > S && (S = g),
                g < k && (k = g)
            r === 'random' && sr(y),
              (y.max = S - k),
              (y.min = k),
              (y.v = p =
                (parseFloat(e.amount) ||
                  parseFloat(e.each) *
                    (x > p
                      ? p - 1
                      : l
                      ? l === 'y'
                        ? p / x
                        : x
                      : Math.max(x, p / x)) ||
                  0) * (r === 'edges' ? -1 : 1)),
              (y.b = p < 0 ? n - p : n),
              (y.u = V(e.amount || e.each) || 0),
              (i = i && p < 0 ? dr(i) : i)
          }
          return (
            (p = (y[d] - y.min) / y.max || 0),
            j(y.b + (i ? i(p) : p) * y.v) + y.u
          )
        }
      )
    },
    ri = function (t) {
      var e = Math.pow(10, ((t + '').split('.')[1] || '').length)
      return function (i) {
        var r = Math.round(parseFloat(i) / t) * t * e
        return (r - (r % 1)) / e + (vt(i) ? 0 : V(i))
      }
    },
    ar = function (t, e) {
      var i = X(t),
        r,
        n
      return (
        !i &&
          wt(t) &&
          ((r = i = t.radius || nt),
          t.values
            ? ((t = st(t.values)), (n = !vt(t[0])) && (r *= r))
            : (t = ri(t.increment))),
        Ct(
          e,
          i
            ? Y(t)
              ? function (s) {
                  return (n = t(s)), Math.abs(n - s) <= r ? n : s
                }
              : function (s) {
                  for (
                    var a = parseFloat(n ? s.x : s),
                      c = parseFloat(n ? s.y : 0),
                      l = nt,
                      h = 0,
                      f = t.length,
                      d,
                      u;
                    f--;

                  )
                    n
                      ? ((d = t[f].x - a),
                        (u = t[f].y - c),
                        (d = d * d + u * u))
                      : (d = Math.abs(t[f] - a)),
                      d < l && ((l = d), (h = f))
                  return (
                    (h = !r || l <= r ? t[h] : s),
                    n || h === s || vt(s) ? h : h + V(s)
                  )
                }
            : ri(t),
        )
      )
    },
    lr = function (t, e, i, r) {
      return Ct(X(t) ? !e : i === !0 ? !!(i = 0) : !r, function () {
        return X(t)
          ? t[~~(Math.random() * t.length)]
          : (i = i || 1e-5) &&
              (r = i < 1 ? Math.pow(10, (i + '').length - 2) : 1) &&
              Math.floor(
                Math.round(
                  (t - i / 2 + Math.random() * (e - t + i * 0.99)) / i,
                ) *
                  i *
                  r,
              ) / r
      })
    },
    xn = function () {
      for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
        e[i] = arguments[i]
      return function (r) {
        return e.reduce(function (n, s) {
          return s(n)
        }, r)
      }
    },
    Sn = function (t, e) {
      return function (i) {
        return t(parseFloat(i)) + (e || V(i))
      }
    },
    Tn = function (t, e, i) {
      return hr(t, e, 0, 1, i)
    },
    cr = function (t, e, i) {
      return Ct(i, function (r) {
        return t[~~e(r)]
      })
    },
    kn = function o(t, e, i) {
      var r = e - t
      return X(t)
        ? cr(t, o(0, t.length), e)
        : Ct(i, function (n) {
            return ((r + ((n - t) % r)) % r) + t
          })
    },
    On = function o(t, e, i) {
      var r = e - t,
        n = r * 2
      return X(t)
        ? cr(t, o(0, t.length - 1), e)
        : Ct(i, function (s) {
            return (s = (n + ((s - t) % n)) % n || 0), t + (s > r ? n - s : s)
          })
    },
    ee = function (t) {
      for (var e = 0, i = '', r, n, s, a; ~(r = t.indexOf('random(', e)); )
        (s = t.indexOf(')', r)),
          (a = t.charAt(r + 7) === '['),
          (n = t.substr(r + 7, s - r - 7).match(a ? Xi : Ze)),
          (i +=
            t.substr(e, r - e) +
            lr(a ? n : +n[0], a ? 0 : +n[1], +n[2] || 1e-5)),
          (e = s + 1)
      return i + t.substr(e, t.length - e)
    },
    hr = function (t, e, i, r, n) {
      var s = e - t,
        a = r - i
      return Ct(n, function (c) {
        return i + (((c - t) / s) * a || 0)
      })
    },
    En = function o(t, e, i, r) {
      var n = isNaN(t + e)
        ? 0
        : function (u) {
            return (1 - u) * t + u * e
          }
      if (!n) {
        var s = N(t),
          a = {},
          c,
          l,
          h,
          f,
          d
        if ((i === !0 && (r = 1) && (i = null), s))
          (t = { p: t }), (e = { p: e })
        else if (X(t) && !X(e)) {
          for (h = [], f = t.length, d = f - 2, l = 1; l < f; l++)
            h.push(o(t[l - 1], t[l]))
          f--,
            (n = function (_) {
              _ *= f
              var p = Math.min(d, ~~_)
              return h[p](_ - p)
            }),
            (i = e)
        } else r || (t = Nt(X(t) ? [] : {}, t))
        if (!h) {
          for (c in e) mi.call(a, t, c, 'get', e[c])
          n = function (_) {
            return bi(_, a) || (s ? t.p : t)
          }
        }
      }
      return Ct(i, n)
    },
    Ni = function (t, e, i) {
      var r = t.labels,
        n = nt,
        s,
        a,
        c
      for (s in r)
        (a = r[s] - e),
          a < 0 == !!i && a && n > (a = Math.abs(a)) && ((c = s), (n = a))
      return c
    },
    ot = function (t, e, i) {
      var r = t.vars,
        n = r[e],
        s,
        a
      if (!!n)
        return (
          (s = r[e + 'Params']),
          (a = r.callbackScope || t),
          i && Et.length && Ce(),
          s ? n.apply(a, s) : n.call(a)
        )
    },
    le = function (t) {
      return (
        gt(t),
        t.scrollTrigger && t.scrollTrigger.kill(!1),
        t.progress() < 1 && ot(t, 'onInterrupt'),
        t
      )
    },
    Qt,
    Pn = function (t) {
      t = (!t.name && t.default) || t
      var e = t.name,
        i = Y(t),
        r =
          e && !i && t.init
            ? function () {
                this._props = []
              }
            : t,
        n = {
          init: de,
          render: bi,
          add: mi,
          kill: jn,
          modifier: Hn,
          rawVars: 0,
        },
        s = { targetTest: 0, get: 0, getSetter: ze, aliases: {}, register: 0 }
      if ((te(), t !== r)) {
        if (Q[e]) return
        at(r, at(Ae(t, n), s)),
          Nt(r.prototype, Nt(n, Ae(t, s))),
          (Q[(r.prop = e)] = r),
          t.targetTest && (Oe.push(r), (ci[e] = 1)),
          (e =
            (e === 'css' ? 'CSS' : e.charAt(0).toUpperCase() + e.substr(1)) +
            'Plugin')
      }
      Ki(e, r), t.register && t.register(q, r, K)
    },
    D = 255,
    ce = {
      aqua: [0, D, D],
      lime: [0, D, 0],
      silver: [192, 192, 192],
      black: [0, 0, 0],
      maroon: [128, 0, 0],
      teal: [0, 128, 128],
      blue: [0, 0, D],
      navy: [0, 0, 128],
      white: [D, D, D],
      olive: [128, 128, 0],
      yellow: [D, D, 0],
      orange: [D, 165, 0],
      gray: [128, 128, 128],
      purple: [128, 0, 128],
      green: [0, 128, 0],
      red: [D, 0, 0],
      pink: [D, 192, 203],
      cyan: [0, D, D],
      transparent: [D, D, D, 0],
    },
    qe = function (t, e, i) {
      return (
        (t += t < 0 ? 1 : t > 1 ? -1 : 0),
        ((t * 6 < 1
          ? e + (i - e) * t * 6
          : t < 0.5
          ? i
          : t * 3 < 2
          ? e + (i - e) * (2 / 3 - t) * 6
          : e) *
          D +
          0.5) |
          0
      )
    },
    ur = function (t, e, i) {
      var r = t ? (vt(t) ? [t >> 16, (t >> 8) & D, t & D] : 0) : ce.black,
        n,
        s,
        a,
        c,
        l,
        h,
        f,
        d,
        u,
        _
      if (!r) {
        if ((t.substr(-1) === ',' && (t = t.substr(0, t.length - 1)), ce[t]))
          r = ce[t]
        else if (t.charAt(0) === '#') {
          if (
            (t.length < 6 &&
              ((n = t.charAt(1)),
              (s = t.charAt(2)),
              (a = t.charAt(3)),
              (t =
                '#' +
                n +
                n +
                s +
                s +
                a +
                a +
                (t.length === 5 ? t.charAt(4) + t.charAt(4) : ''))),
            t.length === 9)
          )
            return (
              (r = parseInt(t.substr(1, 6), 16)),
              [r >> 16, (r >> 8) & D, r & D, parseInt(t.substr(7), 16) / 255]
            )
          ;(t = parseInt(t.substr(1), 16)), (r = [t >> 16, (t >> 8) & D, t & D])
        } else if (t.substr(0, 3) === 'hsl') {
          if (((r = _ = t.match(Ze)), !e))
            (c = (+r[0] % 360) / 360),
              (l = +r[1] / 100),
              (h = +r[2] / 100),
              (s = h <= 0.5 ? h * (l + 1) : h + l - h * l),
              (n = h * 2 - s),
              r.length > 3 && (r[3] *= 1),
              (r[0] = qe(c + 1 / 3, n, s)),
              (r[1] = qe(c, n, s)),
              (r[2] = qe(c - 1 / 3, n, s))
          else if (~t.indexOf('='))
            return (r = t.match(oi)), i && r.length < 4 && (r[3] = 1), r
        } else r = t.match(Ze) || ce.transparent
        r = r.map(Number)
      }
      return (
        e &&
          !_ &&
          ((n = r[0] / D),
          (s = r[1] / D),
          (a = r[2] / D),
          (f = Math.max(n, s, a)),
          (d = Math.min(n, s, a)),
          (h = (f + d) / 2),
          f === d
            ? (c = l = 0)
            : ((u = f - d),
              (l = h > 0.5 ? u / (2 - f - d) : u / (f + d)),
              (c =
                f === n
                  ? (s - a) / u + (s < a ? 6 : 0)
                  : f === s
                  ? (a - n) / u + 2
                  : (n - s) / u + 4),
              (c *= 60)),
          (r[0] = ~~(c + 0.5)),
          (r[1] = ~~(l * 100 + 0.5)),
          (r[2] = ~~(h * 100 + 0.5))),
        i && r.length < 4 && (r[3] = 1),
        r
      )
    },
    fr = function (t) {
      var e = [],
        i = [],
        r = -1
      return (
        t.split(yt).forEach(function (n) {
          var s = n.match(Yt) || []
          e.push.apply(e, s), i.push((r += s.length + 1))
        }),
        (e.c = i),
        e
      )
    },
    Yi = function (t, e, i) {
      var r = '',
        n = (t + r).match(yt),
        s = e ? 'hsla(' : 'rgba(',
        a = 0,
        c,
        l,
        h,
        f
      if (!n) return t
      if (
        ((n = n.map(function (d) {
          return (
            (d = ur(d, e, 1)) &&
            s +
              (e
                ? d[0] + ',' + d[1] + '%,' + d[2] + '%,' + d[3]
                : d.join(',')) +
              ')'
          )
        })),
        i && ((h = fr(t)), (c = i.c), c.join(r) !== h.c.join(r)))
      )
        for (l = t.replace(yt, '1').split(Yt), f = l.length - 1; a < f; a++)
          r +=
            l[a] +
            (~c.indexOf(a)
              ? n.shift() || s + '0,0,0,0)'
              : (h.length ? h : n.length ? n : i).shift())
      if (!l)
        for (l = t.split(yt), f = l.length - 1; a < f; a++) r += l[a] + n[a]
      return r + l[f]
    },
    yt = (function () {
      var o =
          '(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b',
        t
      for (t in ce) o += '|' + t + '\\b'
      return new RegExp(o + ')', 'gi')
    })(),
    Cn = /hsl[a]?\(/,
    pi = function (t) {
      var e = t.join(' '),
        i
      if (((yt.lastIndex = 0), yt.test(e)))
        return (
          (i = Cn.test(e)),
          (t[1] = Yi(t[1], i)),
          (t[0] = Yi(t[0], i, fr(t[1]))),
          !0
        )
    },
    pe,
    $ = (function () {
      var o = Date.now,
        t = 500,
        e = 33,
        i = o(),
        r = i,
        n = 1e3 / 240,
        s = n,
        a = [],
        c,
        l,
        h,
        f,
        d,
        u,
        _ = function p(y) {
          var v = o() - r,
            T = y === !0,
            b,
            m,
            g,
            w
          if (
            (v > t && (i += v - e),
            (r += v),
            (g = r - i),
            (b = g - s),
            (b > 0 || T) &&
              ((w = ++f.frame),
              (d = g - f.time * 1e3),
              (f.time = g = g / 1e3),
              (s += b + (b >= n ? 4 : n - b)),
              (m = 1)),
            T || (c = l(p)),
            m)
          )
            for (u = 0; u < a.length; u++) a[u](g, d, w, y)
        }
      return (
        (f = {
          time: 0,
          frame: 0,
          tick: function () {
            _(!0)
          },
          deltaRatio: function (y) {
            return d / (1e3 / (y || 60))
          },
          wake: function () {
            qi &&
              (!Je &&
                ji() &&
                ((ft = Je = window),
                (li = ft.document || {}),
                (tt.gsap = q),
                (ft.gsapVersions || (ft.gsapVersions = [])).push(q.version),
                Gi(Ee || ft.GreenSockGlobals || (!ft.gsap && ft) || {}),
                (h = ft.requestAnimationFrame)),
              c && f.sleep(),
              (l =
                h ||
                function (y) {
                  return setTimeout(y, (s - f.time * 1e3 + 1) | 0)
                }),
              (pe = 1),
              _(2))
          },
          sleep: function () {
            ;(h ? ft.cancelAnimationFrame : clearTimeout)(c), (pe = 0), (l = de)
          },
          lagSmoothing: function (y, v) {
            ;(t = y || 1 / M), (e = Math.min(v, t, 0))
          },
          fps: function (y) {
            ;(n = 1e3 / (y || 240)), (s = f.time * 1e3 + n)
          },
          add: function (y, v, T) {
            var b = v
              ? function (m, g, w, S) {
                  y(m, g, w, S), f.remove(b)
                }
              : y
            return f.remove(y), a[T ? 'unshift' : 'push'](b), te(), b
          },
          remove: function (y, v) {
            ~(v = a.indexOf(y)) && a.splice(v, 1) && u >= v && u--
          },
          _listeners: a,
        }),
        f
      )
    })(),
    te = function () {
      return !pe && $.wake()
    },
    P = {},
    An = /^[\d.\-M][\d.\-,\s]/,
    Dn = /["']/g,
    Mn = function (t) {
      for (
        var e = {},
          i = t.substr(1, t.length - 3).split(':'),
          r = i[0],
          n = 1,
          s = i.length,
          a,
          c,
          l;
        n < s;
        n++
      )
        (c = i[n]),
          (a = n !== s - 1 ? c.lastIndexOf(',') : c.length),
          (l = c.substr(0, a)),
          (e[r] = isNaN(l) ? l.replace(Dn, '').trim() : +l),
          (r = c.substr(a + 1).trim())
      return e
    },
    Rn = function (t) {
      var e = t.indexOf('(') + 1,
        i = t.indexOf(')'),
        r = t.indexOf('(', e)
      return t.substring(e, ~r && r < i ? t.indexOf(')', i + 1) : i)
    },
    Ln = function (t) {
      var e = (t + '').split('('),
        i = P[e[0]]
      return i && e.length > 1 && i.config
        ? i.config.apply(
            null,
            ~t.indexOf('{') ? [Mn(e[1])] : Rn(t).split(',').map(Zi),
          )
        : P._CE && An.test(t)
        ? P._CE('', t)
        : i
    },
    dr = function (t) {
      return function (e) {
        return 1 - t(1 - e)
      }
    },
    pr = function o(t, e) {
      for (var i = t._first, r; i; )
        i instanceof U
          ? o(i, e)
          : i.vars.yoyoEase &&
            (!i._yoyo || !i._repeat) &&
            i._yoyo !== e &&
            (i.timeline
              ? o(i.timeline, e)
              : ((r = i._ease),
                (i._ease = i._yEase),
                (i._yEase = r),
                (i._yoyo = e))),
          (i = i._next)
    },
    Wt = function (t, e) {
      return (t && (Y(t) ? t : P[t] || Ln(t))) || e
    },
    Ht = function (t, e, i, r) {
      i === void 0 &&
        (i = function (c) {
          return 1 - e(1 - c)
        }),
        r === void 0 &&
          (r = function (c) {
            return c < 0.5 ? e(c * 2) / 2 : 1 - e((1 - c) * 2) / 2
          })
      var n = { easeIn: e, easeOut: i, easeInOut: r },
        s
      return (
        G(t, function (a) {
          ;(P[a] = tt[a] = n), (P[(s = a.toLowerCase())] = i)
          for (var c in n)
            P[
              s + (c === 'easeIn' ? '.in' : c === 'easeOut' ? '.out' : '.inOut')
            ] = P[a + '.' + c] = n[c]
        }),
        n
      )
    },
    _r = function (t) {
      return function (e) {
        return e < 0.5 ? (1 - t(1 - e * 2)) / 2 : 0.5 + t((e - 0.5) * 2) / 2
      }
    },
    Ge = function o(t, e, i) {
      var r = e >= 1 ? e : 1,
        n = (i || (t ? 0.3 : 0.45)) / (e < 1 ? e : 1),
        s = (n / $e) * (Math.asin(1 / r) || 0),
        a = function (h) {
          return h === 1 ? 1 : r * Math.pow(2, -10 * h) * ln((h - s) * n) + 1
        },
        c =
          t === 'out'
            ? a
            : t === 'in'
            ? function (l) {
                return 1 - a(1 - l)
              }
            : _r(a)
      return (
        (n = $e / n),
        (c.config = function (l, h) {
          return o(t, l, h)
        }),
        c
      )
    },
    Ke = function o(t, e) {
      e === void 0 && (e = 1.70158)
      var i = function (s) {
          return s ? --s * s * ((e + 1) * s + e) + 1 : 0
        },
        r =
          t === 'out'
            ? i
            : t === 'in'
            ? function (n) {
                return 1 - i(1 - n)
              }
            : _r(i)
      return (
        (r.config = function (n) {
          return o(t, n)
        }),
        r
      )
    }
  G('Linear,Quad,Cubic,Quart,Quint,Strong', function (o, t) {
    var e = t < 5 ? t + 1 : t
    Ht(
      o + ',Power' + (e - 1),
      t
        ? function (i) {
            return Math.pow(i, e)
          }
        : function (i) {
            return i
          },
      function (i) {
        return 1 - Math.pow(1 - i, e)
      },
      function (i) {
        return i < 0.5
          ? Math.pow(i * 2, e) / 2
          : 1 - Math.pow((1 - i) * 2, e) / 2
      },
    )
  })
  P.Linear.easeNone = P.none = P.Linear.easeIn
  Ht('Elastic', Ge('in'), Ge('out'), Ge())
  ;(function (o, t) {
    var e = 1 / t,
      i = 2 * e,
      r = 2.5 * e,
      n = function (a) {
        return a < e
          ? o * a * a
          : a < i
          ? o * Math.pow(a - 1.5 / t, 2) + 0.75
          : a < r
          ? o * (a -= 2.25 / t) * a + 0.9375
          : o * Math.pow(a - 2.625 / t, 2) + 0.984375
      }
    Ht(
      'Bounce',
      function (s) {
        return 1 - n(1 - s)
      },
      n,
    )
  })(7.5625, 2.75)
  Ht('Expo', function (o) {
    return o ? Math.pow(2, 10 * (o - 1)) : 0
  })
  Ht('Circ', function (o) {
    return -(Hi(1 - o * o) - 1)
  })
  Ht('Sine', function (o) {
    return o === 1 ? 1 : -an(o * sn) + 1
  })
  Ht('Back', Ke('in'), Ke('out'), Ke())
  P.SteppedEase =
    P.steps =
    tt.SteppedEase =
      {
        config: function (t, e) {
          t === void 0 && (t = 1)
          var i = 1 / t,
            r = t + (e ? 0 : 1),
            n = e ? 1 : 0,
            s = 1 - M
          return function (a) {
            return (((r * me(0, s, a)) | 0) + n) * i
          }
        },
      }
  $t.ease = P['quad.out']
  G(
    'onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt',
    function (o) {
      return (hi += o + ',' + o + 'Params,')
    },
  )
  var _i = function (t, e) {
      ;(this.id = on++),
        (t._gsap = this),
        (this.target = t),
        (this.harness = e),
        (this.get = e ? e.get : fi),
        (this.set = e ? e.getSetter : ze)
    },
    _e = (function () {
      function o(e) {
        ;(this.vars = e),
          (this._delay = +e.delay || 0),
          (this._repeat = e.repeat === 1 / 0 ? -2 : e.repeat || 0) &&
            ((this._rDelay = e.repeatDelay || 0),
            (this._yoyo = !!e.yoyo || !!e.yoyoEase)),
          (this._ts = 1),
          Jt(this, +e.duration, 1, 1),
          (this.data = e.data),
          pe || $.wake()
      }
      var t = o.prototype
      return (
        (t.delay = function (i) {
          return i || i === 0
            ? (this.parent &&
                this.parent.smoothChildTiming &&
                this.startTime(this._start + i - this._delay),
              (this._delay = i),
              this)
            : this._delay
        }),
        (t.duration = function (i) {
          return arguments.length
            ? this.totalDuration(
                this._repeat > 0 ? i + (i + this._rDelay) * this._repeat : i,
              )
            : this.totalDuration() && this._dur
        }),
        (t.totalDuration = function (i) {
          return arguments.length
            ? ((this._dirty = 0),
              Jt(
                this,
                this._repeat < 0
                  ? i
                  : (i - this._repeat * this._rDelay) / (this._repeat + 1),
              ))
            : this._tDur
        }),
        (t.totalTime = function (i, r) {
          if ((te(), !arguments.length)) return this._tTime
          var n = this._dp
          if (n && n.smoothChildTiming && this._ts) {
            for (
              di(this, i), !n._dp || n.parent || er(n, this);
              n && n.parent;

            )
              n.parent._time !==
                n._start +
                  (n._ts >= 0
                    ? n._tTime / n._ts
                    : (n.totalDuration() - n._tTime) / -n._ts) &&
                n.totalTime(n._tTime, !0),
                (n = n.parent)
            !this.parent &&
              this._dp.autoRemoveChildren &&
              ((this._ts > 0 && i < this._tDur) ||
                (this._ts < 0 && i > 0) ||
                (!this._tDur && !i)) &&
              dt(this._dp, this, this._start - this._delay)
          }
          return (
            (this._tTime !== i ||
              (!this._dur && !r) ||
              (this._initted && Math.abs(this._zTime) === M) ||
              (!i && !this._initted && (this.add || this._ptLookup))) &&
              (this._ts || (this._pTime = i), $i(this, i, r)),
            this
          )
        }),
        (t.time = function (i, r) {
          return arguments.length
            ? this.totalTime(
                Math.min(this.totalDuration(), i + Fi(this)) %
                  (this._dur + this._rDelay) || (i ? this._dur : 0),
                r,
              )
            : this._time
        }),
        (t.totalProgress = function (i, r) {
          return arguments.length
            ? this.totalTime(this.totalDuration() * i, r)
            : this.totalDuration()
            ? Math.min(1, this._tTime / this._tDur)
            : this.ratio
        }),
        (t.progress = function (i, r) {
          return arguments.length
            ? this.totalTime(
                this.duration() *
                  (this._yoyo && !(this.iteration() & 1) ? 1 - i : i) +
                  Fi(this),
                r,
              )
            : this.duration()
            ? Math.min(1, this._time / this._dur)
            : this.ratio
        }),
        (t.iteration = function (i, r) {
          var n = this.duration() + this._rDelay
          return arguments.length
            ? this.totalTime(this._time + (i - 1) * n, r)
            : this._repeat
            ? Zt(this._tTime, n) + 1
            : 1
        }),
        (t.timeScale = function (i) {
          if (!arguments.length) return this._rts === -M ? 0 : this._rts
          if (this._rts === i) return this
          var r =
            this.parent && this._ts ? De(this.parent._time, this) : this._tTime
          return (
            (this._rts = +i || 0),
            (this._ts = this._ps || i === -M ? 0 : this._rts),
            this.totalTime(me(-this._delay, this._tDur, r), !0),
            Ie(this),
            dn(this)
          )
        }),
        (t.paused = function (i) {
          return arguments.length
            ? (this._ps !== i &&
                ((this._ps = i),
                i
                  ? ((this._pTime =
                      this._tTime || Math.max(-this._delay, this.rawTime())),
                    (this._ts = this._act = 0))
                  : (te(),
                    (this._ts = this._rts),
                    this.totalTime(
                      this.parent && !this.parent.smoothChildTiming
                        ? this.rawTime()
                        : this._tTime || this._pTime,
                      this.progress() === 1 &&
                        Math.abs(this._zTime) !== M &&
                        (this._tTime -= M),
                    ))),
              this)
            : this._ps
        }),
        (t.startTime = function (i) {
          if (arguments.length) {
            this._start = i
            var r = this.parent || this._dp
            return (
              r && (r._sort || !this.parent) && dt(r, this, i - this._delay),
              this
            )
          }
          return this._start
        }),
        (t.endTime = function (i) {
          return (
            this._start +
            (Z(i) ? this.totalDuration() : this.duration()) /
              Math.abs(this._ts || 1)
          )
        }),
        (t.rawTime = function (i) {
          var r = this.parent || this._dp
          return r
            ? i &&
              (!this._ts ||
                (this._repeat && this._time && this.totalProgress() < 1))
              ? this._tTime % (this._dur + this._rDelay)
              : this._ts
              ? De(r.rawTime(i), this)
              : this._tTime
            : this._tTime
        }),
        (t.globalTime = function (i) {
          for (var r = this, n = arguments.length ? i : r.rawTime(); r; )
            (n = r._start + n / (r._ts || 1)), (r = r._dp)
          return n
        }),
        (t.repeat = function (i) {
          return arguments.length
            ? ((this._repeat = i === 1 / 0 ? -2 : i), Wi(this))
            : this._repeat === -2
            ? 1 / 0
            : this._repeat
        }),
        (t.repeatDelay = function (i) {
          if (arguments.length) {
            var r = this._time
            return (this._rDelay = i), Wi(this), r ? this.time(r) : this
          }
          return this._rDelay
        }),
        (t.yoyo = function (i) {
          return arguments.length ? ((this._yoyo = i), this) : this._yoyo
        }),
        (t.seek = function (i, r) {
          return this.totalTime(rt(this, i), Z(r))
        }),
        (t.restart = function (i, r) {
          return this.play().totalTime(i ? -this._delay : 0, Z(r))
        }),
        (t.play = function (i, r) {
          return i != null && this.seek(i, r), this.reversed(!1).paused(!1)
        }),
        (t.reverse = function (i, r) {
          return (
            i != null && this.seek(i || this.totalDuration(), r),
            this.reversed(!0).paused(!1)
          )
        }),
        (t.pause = function (i, r) {
          return i != null && this.seek(i, r), this.paused(!0)
        }),
        (t.resume = function () {
          return this.paused(!1)
        }),
        (t.reversed = function (i) {
          return arguments.length
            ? (!!i !== this.reversed() &&
                this.timeScale(-this._rts || (i ? -M : 0)),
              this)
            : this._rts < 0
        }),
        (t.invalidate = function () {
          return (this._initted = this._act = 0), (this._zTime = -M), this
        }),
        (t.isActive = function () {
          var i = this.parent || this._dp,
            r = this._start,
            n
          return !!(
            !i ||
            (this._ts &&
              this._initted &&
              i.isActive() &&
              (n = i.rawTime(!0)) >= r &&
              n < this.endTime(!0) - M)
          )
        }),
        (t.eventCallback = function (i, r, n) {
          var s = this.vars
          return arguments.length > 1
            ? (r
                ? ((s[i] = r),
                  n && (s[i + 'Params'] = n),
                  i === 'onUpdate' && (this._onUpdate = r))
                : delete s[i],
              this)
            : s[i]
        }),
        (t.then = function (i) {
          var r = this
          return new Promise(function (n) {
            var s = Y(i) ? i : Ji,
              a = function () {
                var l = r.then
                ;(r.then = null),
                  Y(s) && (s = s(r)) && (s.then || s === r) && (r.then = l),
                  n(s),
                  (r.then = l)
              }
            ;(r._initted && r.totalProgress() === 1 && r._ts >= 0) ||
            (!r._tTime && r._ts < 0)
              ? a()
              : (r._prom = a)
          })
        }),
        (t.kill = function () {
          le(this)
        }),
        o
      )
    })()
  at(_e.prototype, {
    _time: 0,
    _start: 0,
    _end: 0,
    _tTime: 0,
    _tDur: 0,
    _dirty: 0,
    _repeat: 0,
    _yoyo: !1,
    parent: null,
    _initted: !1,
    _rDelay: 0,
    _ts: 1,
    _dp: 0,
    ratio: 0,
    _zTime: -M,
    _prom: 0,
    _ps: !1,
    _rts: 1,
  })
  var U = (function (o) {
    Vi(t, o)
    function t(i, r) {
      var n
      return (
        i === void 0 && (i = {}),
        (n = o.call(this, i) || this),
        (n.labels = {}),
        (n.smoothChildTiming = !!i.smoothChildTiming),
        (n.autoRemoveChildren = !!i.autoRemoveChildren),
        (n._sort = Z(i.sortChildren)),
        z && dt(i.parent || z, mt(n), r),
        i.reversed && n.reverse(),
        i.paused && n.paused(!0),
        i.scrollTrigger && ir(mt(n), i.scrollTrigger),
        n
      )
    }
    var e = t.prototype
    return (
      (e.to = function (r, n, s) {
        return ue(0, arguments, this), this
      }),
      (e.from = function (r, n, s) {
        return ue(1, arguments, this), this
      }),
      (e.fromTo = function (r, n, s, a) {
        return ue(2, arguments, this), this
      }),
      (e.set = function (r, n, s) {
        return (
          (n.duration = 0),
          (n.parent = this),
          he(n).repeatDelay || (n.repeat = 0),
          (n.immediateRender = !!n.immediateRender),
          new W(r, n, rt(this, s), 1),
          this
        )
      }),
      (e.call = function (r, n, s) {
        return dt(this, W.delayedCall(0, r, n), s)
      }),
      (e.staggerTo = function (r, n, s, a, c, l, h) {
        return (
          (s.duration = n),
          (s.stagger = s.stagger || a),
          (s.onComplete = l),
          (s.onCompleteParams = h),
          (s.parent = this),
          new W(r, s, rt(this, c)),
          this
        )
      }),
      (e.staggerFrom = function (r, n, s, a, c, l, h) {
        return (
          (s.runBackwards = 1),
          (he(s).immediateRender = Z(s.immediateRender)),
          this.staggerTo(r, n, s, a, c, l, h)
        )
      }),
      (e.staggerFromTo = function (r, n, s, a, c, l, h, f) {
        return (
          (a.startAt = s),
          (he(a).immediateRender = Z(a.immediateRender)),
          this.staggerTo(r, n, a, c, l, h, f)
        )
      }),
      (e.render = function (r, n, s) {
        var a = this._time,
          c = this._dirty ? this.totalDuration() : this._tDur,
          l = this._dur,
          h = r <= 0 ? 0 : j(r),
          f = this._zTime < 0 != r < 0 && (this._initted || !l),
          d,
          u,
          _,
          p,
          y,
          v,
          T,
          b,
          m,
          g,
          w,
          S
        if (
          (this !== z && h > c && r >= 0 && (h = c),
          h !== this._tTime || s || f)
        ) {
          if (
            (a !== this._time &&
              l &&
              ((h += this._time - a), (r += this._time - a)),
            (d = h),
            (m = this._start),
            (b = this._ts),
            (v = !b),
            f && (l || (a = this._zTime), (r || !n) && (this._zTime = r)),
            this._repeat)
          ) {
            if (
              ((w = this._yoyo),
              (y = l + this._rDelay),
              this._repeat < -1 && r < 0)
            )
              return this.totalTime(y * 100 + r, n, s)
            if (
              ((d = j(h % y)),
              h === c
                ? ((p = this._repeat), (d = l))
                : ((p = ~~(h / y)),
                  p && p === h / y && ((d = l), p--),
                  d > l && (d = l)),
              (g = Zt(this._tTime, y)),
              !a && this._tTime && g !== p && (g = p),
              w && p & 1 && ((d = l - d), (S = 1)),
              p !== g && !this._lock)
            ) {
              var k = w && g & 1,
                x = k === (w && p & 1)
              if (
                (p < g && (k = !k),
                (a = k ? 0 : l),
                (this._lock = 1),
                (this.render(a || (S ? 0 : j(p * y)), n, !l)._lock = 0),
                (this._tTime = h),
                !n && this.parent && ot(this, 'onRepeat'),
                this.vars.repeatRefresh && !S && (this.invalidate()._lock = 1),
                (a && a !== this._time) ||
                  v !== !this._ts ||
                  (this.vars.onRepeat && !this.parent && !this._act))
              )
                return this
              if (
                ((l = this._dur),
                (c = this._tDur),
                x &&
                  ((this._lock = 2),
                  (a = k ? l : -1e-4),
                  this.render(a, !0),
                  this.vars.repeatRefresh && !S && this.invalidate()),
                (this._lock = 0),
                !this._ts && !v)
              )
                return this
              pr(this, S)
            }
          }
          if (
            (this._hasPause &&
              !this._forcing &&
              this._lock < 2 &&
              ((T = gn(this, j(a), j(d))), T && (h -= d - (d = T._start))),
            (this._tTime = h),
            (this._time = d),
            (this._act = !b),
            this._initted ||
              ((this._onUpdate = this.vars.onUpdate),
              (this._initted = 1),
              (this._zTime = r),
              (a = 0)),
            !a && d && !n && (ot(this, 'onStart'), this._tTime !== h))
          )
            return this
          if (d >= a && r >= 0)
            for (u = this._first; u; ) {
              if (
                ((_ = u._next), (u._act || d >= u._start) && u._ts && T !== u)
              ) {
                if (u.parent !== this) return this.render(r, n, s)
                if (
                  (u.render(
                    u._ts > 0
                      ? (d - u._start) * u._ts
                      : (u._dirty ? u.totalDuration() : u._tDur) +
                          (d - u._start) * u._ts,
                    n,
                    s,
                  ),
                  d !== this._time || (!this._ts && !v))
                ) {
                  ;(T = 0), _ && (h += this._zTime = -M)
                  break
                }
              }
              u = _
            }
          else {
            u = this._last
            for (var O = r < 0 ? r : d; u; ) {
              if (
                ((_ = u._prev), (u._act || O <= u._end) && u._ts && T !== u)
              ) {
                if (u.parent !== this) return this.render(r, n, s)
                if (
                  (u.render(
                    u._ts > 0
                      ? (O - u._start) * u._ts
                      : (u._dirty ? u.totalDuration() : u._tDur) +
                          (O - u._start) * u._ts,
                    n,
                    s,
                  ),
                  d !== this._time || (!this._ts && !v))
                ) {
                  ;(T = 0), _ && (h += this._zTime = O ? -M : M)
                  break
                }
              }
              u = _
            }
          }
          if (
            T &&
            !n &&
            (this.pause(),
            (T.render(d >= a ? 0 : -M)._zTime = d >= a ? 1 : -1),
            this._ts)
          )
            return (this._start = m), Ie(this), this.render(r, n, s)
          this._onUpdate && !n && ot(this, 'onUpdate', !0),
            ((h === c && this._tTime >= this.totalDuration()) || (!h && a)) &&
              (m === this._start || Math.abs(b) !== Math.abs(this._ts)) &&
              (this._lock ||
                ((r || !l) &&
                  ((h === c && this._ts > 0) || (!h && this._ts < 0)) &&
                  gt(this, 1),
                !n &&
                  !(r < 0 && !a) &&
                  (h || a || !c) &&
                  (ot(
                    this,
                    h === c && r >= 0 ? 'onComplete' : 'onReverseComplete',
                    !0,
                  ),
                  this._prom &&
                    !(h < c && this.timeScale() > 0) &&
                    this._prom())))
        }
        return this
      }),
      (e.add = function (r, n) {
        var s = this
        if ((vt(n) || (n = rt(this, n, r)), !(r instanceof _e))) {
          if (X(r))
            return (
              r.forEach(function (a) {
                return s.add(a, n)
              }),
              this
            )
          if (N(r)) return this.addLabel(r, n)
          if (Y(r)) r = W.delayedCall(0, r)
          else return this
        }
        return this !== r ? dt(this, r, n) : this
      }),
      (e.getChildren = function (r, n, s, a) {
        r === void 0 && (r = !0),
          n === void 0 && (n = !0),
          s === void 0 && (s = !0),
          a === void 0 && (a = -nt)
        for (var c = [], l = this._first; l; )
          l._start >= a &&
            (l instanceof W
              ? n && c.push(l)
              : (s && c.push(l),
                r && c.push.apply(c, l.getChildren(!0, n, s)))),
            (l = l._next)
        return c
      }),
      (e.getById = function (r) {
        for (var n = this.getChildren(1, 1, 1), s = n.length; s--; )
          if (n[s].vars.id === r) return n[s]
      }),
      (e.remove = function (r) {
        return N(r)
          ? this.removeLabel(r)
          : Y(r)
          ? this.killTweensOf(r)
          : (Be(this, r),
            r === this._recent && (this._recent = this._last),
            Ft(this))
      }),
      (e.totalTime = function (r, n) {
        return arguments.length
          ? ((this._forcing = 1),
            !this._dp &&
              this._ts &&
              (this._start = j(
                $.time -
                  (this._ts > 0
                    ? r / this._ts
                    : (this.totalDuration() - r) / -this._ts),
              )),
            o.prototype.totalTime.call(this, r, n),
            (this._forcing = 0),
            this)
          : this._tTime
      }),
      (e.addLabel = function (r, n) {
        return (this.labels[r] = rt(this, n)), this
      }),
      (e.removeLabel = function (r) {
        return delete this.labels[r], this
      }),
      (e.addPause = function (r, n, s) {
        var a = W.delayedCall(0, n || de, s)
        return (
          (a.data = 'isPause'), (this._hasPause = 1), dt(this, a, rt(this, r))
        )
      }),
      (e.removePause = function (r) {
        var n = this._first
        for (r = rt(this, r); n; )
          n._start === r && n.data === 'isPause' && gt(n), (n = n._next)
      }),
      (e.killTweensOf = function (r, n, s) {
        for (var a = this.getTweensOf(r, s), c = a.length; c--; )
          Ot !== a[c] && a[c].kill(r, n)
        return this
      }),
      (e.getTweensOf = function (r, n) {
        for (var s = [], a = st(r), c = this._first, l = vt(n), h; c; )
          c instanceof W
            ? hn(c._targets, a) &&
              (l
                ? (!Ot || (c._initted && c._ts)) &&
                  c.globalTime(0) <= n &&
                  c.globalTime(c.totalDuration()) > n
                : !n || c.isActive()) &&
              s.push(c)
            : (h = c.getTweensOf(a, n)).length && s.push.apply(s, h),
            (c = c._next)
        return s
      }),
      (e.tweenTo = function (r, n) {
        n = n || {}
        var s = this,
          a = rt(s, r),
          c = n,
          l = c.startAt,
          h = c.onStart,
          f = c.onStartParams,
          d = c.immediateRender,
          u,
          _ = W.to(
            s,
            at(
              {
                ease: n.ease || 'none',
                lazy: !1,
                immediateRender: !1,
                time: a,
                overwrite: 'auto',
                duration:
                  n.duration ||
                  Math.abs(
                    (a - (l && 'time' in l ? l.time : s._time)) / s.timeScale(),
                  ) ||
                  M,
                onStart: function () {
                  if ((s.pause(), !u)) {
                    var y =
                      n.duration ||
                      Math.abs(
                        (a - (l && 'time' in l ? l.time : s._time)) /
                          s.timeScale(),
                      )
                    _._dur !== y && Jt(_, y, 0, 1).render(_._time, !0, !0),
                      (u = 1)
                  }
                  h && h.apply(_, f || [])
                },
              },
              n,
            ),
          )
        return d ? _.render(0) : _
      }),
      (e.tweenFromTo = function (r, n, s) {
        return this.tweenTo(n, at({ startAt: { time: rt(this, r) } }, s))
      }),
      (e.recent = function () {
        return this._recent
      }),
      (e.nextLabel = function (r) {
        return r === void 0 && (r = this._time), Ni(this, rt(this, r))
      }),
      (e.previousLabel = function (r) {
        return r === void 0 && (r = this._time), Ni(this, rt(this, r), 1)
      }),
      (e.currentLabel = function (r) {
        return arguments.length
          ? this.seek(r, !0)
          : this.previousLabel(this._time + M)
      }),
      (e.shiftChildren = function (r, n, s) {
        s === void 0 && (s = 0)
        for (var a = this._first, c = this.labels, l; a; )
          a._start >= s && ((a._start += r), (a._end += r)), (a = a._next)
        if (n) for (l in c) c[l] >= s && (c[l] += r)
        return Ft(this)
      }),
      (e.invalidate = function () {
        var r = this._first
        for (this._lock = 0; r; ) r.invalidate(), (r = r._next)
        return o.prototype.invalidate.call(this)
      }),
      (e.clear = function (r) {
        r === void 0 && (r = !0)
        for (var n = this._first, s; n; ) (s = n._next), this.remove(n), (n = s)
        return (
          this._dp && (this._time = this._tTime = this._pTime = 0),
          r && (this.labels = {}),
          Ft(this)
        )
      }),
      (e.totalDuration = function (r) {
        var n = 0,
          s = this,
          a = s._last,
          c = nt,
          l,
          h,
          f
        if (arguments.length)
          return s.timeScale(
            (s._repeat < 0 ? s.duration() : s.totalDuration()) /
              (s.reversed() ? -r : r),
          )
        if (s._dirty) {
          for (f = s.parent; a; )
            (l = a._prev),
              a._dirty && a.totalDuration(),
              (h = a._start),
              h > c && s._sort && a._ts && !s._lock
                ? ((s._lock = 1), (dt(s, a, h - a._delay, 1)._lock = 0))
                : (c = h),
              h < 0 &&
                a._ts &&
                ((n -= h),
                ((!f && !s._dp) || (f && f.smoothChildTiming)) &&
                  ((s._start += h / s._ts), (s._time -= h), (s._tTime -= h)),
                s.shiftChildren(-h, !1, -1 / 0),
                (c = 0)),
              a._end > n && a._ts && (n = a._end),
              (a = l)
          Jt(s, s === z && s._time > n ? s._time : n, 1, 1), (s._dirty = 0)
        }
        return s._tDur
      }),
      (t.updateRoot = function (r) {
        if ((z._ts && ($i(z, De(r, z)), (Qi = $.frame)), $.frame >= Ii)) {
          Ii += J.autoSleep || 120
          var n = z._first
          if ((!n || !n._ts) && J.autoSleep && $._listeners.length < 2) {
            for (; n && !n._ts; ) n = n._next
            n || $.sleep()
          }
        }
      }),
      t
    )
  })(_e)
  at(U.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 })
  var Bn = function (t, e, i, r, n, s, a) {
      var c = new K(this._pt, t, e, 0, 1, wi, null, n),
        l = 0,
        h = 0,
        f,
        d,
        u,
        _,
        p,
        y,
        v,
        T
      for (
        c.b = i,
          c.e = r,
          i += '',
          r += '',
          (v = ~r.indexOf('random(')) && (r = ee(r)),
          s && ((T = [i, r]), s(T, t, e), (i = T[0]), (r = T[1])),
          d = i.match(Ue) || [];
        (f = Ue.exec(r));

      )
        (_ = f[0]),
          (p = r.substring(l, f.index)),
          u ? (u = (u + 1) % 5) : p.substr(-5) === 'rgba(' && (u = 1),
          _ !== d[h++] &&
            ((y = parseFloat(d[h - 1]) || 0),
            (c._pt = {
              _next: c._pt,
              p: p || h === 1 ? p : ',',
              s: y,
              c: _.charAt(1) === '=' ? Vt(y, _) - y : parseFloat(_) - y,
              m: u && u < 4 ? Math.round : 0,
            }),
            (l = Ue.lastIndex))
      return (
        (c.c = l < r.length ? r.substring(l, r.length) : ''),
        (c.fp = a),
        (ai.test(r) || v) && (c.e = 0),
        (this._pt = c),
        c
      )
    },
    mi = function (t, e, i, r, n, s, a, c, l) {
      Y(r) && (r = r(n || 0, t, s))
      var h = t[e],
        f =
          i !== 'get'
            ? i
            : Y(h)
            ? l
              ? t[
                  e.indexOf('set') || !Y(t['get' + e.substr(3)])
                    ? e
                    : 'get' + e.substr(3)
                ](l)
              : t[e]()
            : h,
        d = Y(h) ? (l ? Nn : yr) : vi,
        u
      if (
        (N(r) &&
          (~r.indexOf('random(') && (r = ee(r)),
          r.charAt(1) === '=' &&
            ((u = Vt(f, r) + (V(f) || 0)), (u || u === 0) && (r = u))),
        f !== r || ni)
      )
        return !isNaN(f * r) && r !== ''
          ? ((u = new K(
              this._pt,
              t,
              e,
              +f || 0,
              r - (f || 0),
              typeof h == 'boolean' ? Vn : vr,
              0,
              d,
            )),
            l && (u.fp = l),
            a && u.modifier(a, this, t),
            (this._pt = u))
          : (!h && !(e in t) && Le(e, r),
            Bn.call(this, t, e, f, r, d, c || J.stringFilter, l))
    },
    In = function (t, e, i, r, n) {
      if (
        (Y(t) && (t = fe(t, n, e, i, r)),
        !wt(t) || (t.style && t.nodeType) || X(t) || Ui(t))
      )
        return N(t) ? fe(t, n, e, i, r) : t
      var s = {},
        a
      for (a in t) s[a] = fe(t[a], n, e, i, r)
      return s
    },
    gi = function (t, e, i, r, n, s) {
      var a, c, l, h
      if (
        Q[t] &&
        (a = new Q[t]()).init(
          n,
          a.rawVars ? e[t] : In(e[t], r, n, s, i),
          i,
          r,
          s,
        ) !== !1 &&
        ((i._pt = c = new K(i._pt, n, t, 0, 1, a.render, a, 0, a.priority)),
        i !== Qt)
      )
        for (l = i._ptLookup[i._targets.indexOf(n)], h = a._props.length; h--; )
          l[a._props[h]] = c
      return a
    },
    Ot,
    ni,
    yi = function o(t, e) {
      var i = t.vars,
        r = i.ease,
        n = i.startAt,
        s = i.immediateRender,
        a = i.lazy,
        c = i.onUpdate,
        l = i.onUpdateParams,
        h = i.callbackScope,
        f = i.runBackwards,
        d = i.yoyoEase,
        u = i.keyframes,
        _ = i.autoRevert,
        p = t._dur,
        y = t._startAt,
        v = t._targets,
        T = t.parent,
        b = T && T.data === 'nested' ? T.parent._targets : v,
        m = t._overwrite === 'auto' && !si,
        g = t.timeline,
        w,
        S,
        k,
        x,
        O,
        C,
        B,
        L,
        R,
        I,
        A,
        E,
        ut
      if (
        (g && (!u || !r) && (r = 'none'),
        (t._ease = Wt(r, $t.ease)),
        (t._yEase = d ? dr(Wt(d === !0 ? r : d, $t.ease)) : 0),
        d &&
          t._yoyo &&
          !t._repeat &&
          ((d = t._yEase), (t._yEase = t._ease), (t._ease = d)),
        (t._from = !g && !!i.runBackwards),
        !g || (u && !i.stagger))
      ) {
        if (
          ((L = v[0] ? Pt(v[0]).harness : 0),
          (E = L && i[L.prop]),
          (w = Ae(i, ci)),
          y && (gt(y.render(-1, !0)), (y._lazy = 0)),
          n)
        )
          if (
            (gt(
              (t._startAt = W.set(
                v,
                at(
                  {
                    data: 'isStart',
                    overwrite: !1,
                    parent: T,
                    immediateRender: !0,
                    lazy: Z(a),
                    startAt: null,
                    delay: 0,
                    onUpdate: c,
                    onUpdateParams: l,
                    callbackScope: h,
                    stagger: 0,
                  },
                  n,
                ),
              )),
            ),
            e < 0 && !s && !_ && t._startAt.render(-1, !0),
            s)
          ) {
            if ((e > 0 && !_ && (t._startAt = 0), p && e <= 0)) {
              e && (t._zTime = e)
              return
            }
          } else _ === !1 && (t._startAt = 0)
        else if (f && p) {
          if (y) !_ && (t._startAt = 0)
          else if (
            (e && (s = !1),
            (k = at(
              {
                overwrite: !1,
                data: 'isFromStart',
                lazy: s && Z(a),
                immediateRender: s,
                stagger: 0,
                parent: T,
              },
              w,
            )),
            E && (k[L.prop] = E),
            gt((t._startAt = W.set(v, k))),
            e < 0 && t._startAt.render(-1, !0),
            (t._zTime = e),
            !s)
          )
            o(t._startAt, M)
          else if (!e) return
        }
        for (
          t._pt = t._ptCache = 0, a = (p && Z(a)) || (a && !p), S = 0;
          S < v.length;
          S++
        ) {
          if (
            ((O = v[S]),
            (B = O._gsap || ui(v)[S]._gsap),
            (t._ptLookup[S] = I = {}),
            ti[B.id] && Et.length && Ce(),
            (A = b === v ? S : b.indexOf(O)),
            L &&
              (R = new L()).init(O, E || w, t, A, b) !== !1 &&
              ((t._pt = x =
                new K(t._pt, O, R.name, 0, 1, R.render, R, 0, R.priority)),
              R._props.forEach(function (ct) {
                I[ct] = x
              }),
              R.priority && (C = 1)),
            !L || E)
          )
            for (k in w)
              Q[k] && (R = gi(k, w, t, A, O, b))
                ? R.priority && (C = 1)
                : (I[k] = x =
                    mi.call(t, O, k, 'get', w[k], A, b, 0, i.stringFilter))
          t._op && t._op[S] && t.kill(O, t._op[S]),
            m &&
              t._pt &&
              ((Ot = t),
              z.killTweensOf(O, I, t.globalTime(e)),
              (ut = !t.parent),
              (Ot = 0)),
            t._pt && a && (ti[B.id] = 1)
        }
        C && xi(t), t._onInit && t._onInit(t)
      }
      ;(t._onUpdate = c),
        (t._initted = (!t._op || t._pt) && !ut),
        u && e <= 0 && g.render(nt, !0, !0)
    },
    zn = function (t, e, i, r, n, s, a) {
      var c = ((t._pt && t._ptCache) || (t._ptCache = {}))[e],
        l,
        h,
        f
      if (!c)
        for (
          c = t._ptCache[e] = [], h = t._ptLookup, f = t._targets.length;
          f--;

        ) {
          if (((l = h[f][e]), l && l.d && l.d._pt))
            for (l = l.d._pt; l && l.p !== e; ) l = l._next
          if (!l) return (ni = 1), (t.vars[e] = '+=0'), yi(t, a), (ni = 0), 1
          c.push(l)
        }
      for (f = c.length; f--; )
        (l = c[f]),
          (l.s = (r || r === 0) && !n ? r : l.s + (r || 0) + s * l.c),
          (l.c = i - l.s),
          l.e && (l.e = F(i) + V(l.e)),
          l.b && (l.b = l.s + V(l.b))
    },
    Fn = function (t, e) {
      var i = t[0] ? Pt(t[0]).harness : 0,
        r = i && i.aliases,
        n,
        s,
        a,
        c
      if (!r) return e
      n = Nt({}, e)
      for (s in r)
        if (s in n)
          for (c = r[s].split(','), a = c.length; a--; ) n[c[a]] = n[s]
      return n
    },
    Wn = function (t, e, i, r) {
      var n = e.ease || r || 'power1.inOut',
        s,
        a
      if (X(e))
        (a = i[t] || (i[t] = [])),
          e.forEach(function (c, l) {
            return a.push({ t: (l / (e.length - 1)) * 100, v: c, e: n })
          })
      else
        for (s in e)
          (a = i[s] || (i[s] = [])),
            s === 'ease' || a.push({ t: parseFloat(t), v: e[s], e: n })
    },
    fe = function (t, e, i, r, n) {
      return Y(t)
        ? t.call(e, i, r, n)
        : N(t) && ~t.indexOf('random(')
        ? ee(t)
        : t
    },
    mr = hi + 'repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert',
    gr = {}
  G(mr + ',id,stagger,delay,duration,paused,scrollTrigger', function (o) {
    return (gr[o] = 1)
  })
  var W = (function (o) {
    Vi(t, o)
    function t(i, r, n, s) {
      var a
      typeof r == 'number' && ((n.duration = r), (r = n), (n = null)),
        (a = o.call(this, s ? r : he(r)) || this)
      var c = a.vars,
        l = c.duration,
        h = c.delay,
        f = c.immediateRender,
        d = c.stagger,
        u = c.overwrite,
        _ = c.keyframes,
        p = c.defaults,
        y = c.scrollTrigger,
        v = c.yoyoEase,
        T = r.parent || z,
        b = (X(i) || Ui(i) ? vt(i[0]) : 'length' in r) ? [i] : st(i),
        m,
        g,
        w,
        S,
        k,
        x,
        O,
        C
      if (
        ((a._targets = b.length
          ? ui(b)
          : Pe(
              'GSAP target ' + i + ' not found. https://greensock.com',
              !J.nullTargetWarn,
            ) || []),
        (a._ptLookup = []),
        (a._overwrite = u),
        _ || d || ke(l) || ke(h))
      ) {
        if (
          ((r = a.vars),
          (m = a.timeline = new U({ data: 'nested', defaults: p || {} })),
          m.kill(),
          (m.parent = m._dp = mt(a)),
          (m._start = 0),
          d || ke(l) || ke(h))
        ) {
          if (((S = b.length), (O = d && or(d)), wt(d)))
            for (k in d) ~mr.indexOf(k) && (C || (C = {}), (C[k] = d[k]))
          for (g = 0; g < S; g++)
            (w = Ae(r, gr)),
              (w.stagger = 0),
              v && (w.yoyoEase = v),
              C && Nt(w, C),
              (x = b[g]),
              (w.duration = +fe(l, mt(a), g, x, b)),
              (w.delay = (+fe(h, mt(a), g, x, b) || 0) - a._delay),
              !d &&
                S === 1 &&
                w.delay &&
                ((a._delay = h = w.delay), (a._start += h), (w.delay = 0)),
              m.to(x, w, O ? O(g, x, b) : 0),
              (m._ease = P.none)
          m.duration() ? (l = h = 0) : (a.timeline = 0)
        } else if (_) {
          he(at(m.vars.defaults, { ease: 'none' })),
            (m._ease = Wt(_.ease || r.ease || 'none'))
          var B = 0,
            L,
            R,
            I
          if (X(_))
            _.forEach(function (A) {
              return m.to(b, A, '>')
            })
          else {
            w = {}
            for (k in _)
              k === 'ease' || k === 'easeEach' || Wn(k, _[k], w, _.easeEach)
            for (k in w)
              for (
                L = w[k].sort(function (A, E) {
                  return A.t - E.t
                }),
                  B = 0,
                  g = 0;
                g < L.length;
                g++
              )
                (R = L[g]),
                  (I = {
                    ease: R.e,
                    duration: ((R.t - (g ? L[g - 1].t : 0)) / 100) * l,
                  }),
                  (I[k] = R.v),
                  m.to(b, I, B),
                  (B += I.duration)
            m.duration() < l && m.to({}, { duration: l - m.duration() })
          }
        }
        l || a.duration((l = m.duration()))
      } else a.timeline = 0
      return (
        u === !0 && !si && ((Ot = mt(a)), z.killTweensOf(b), (Ot = 0)),
        dt(T, mt(a), n),
        r.reversed && a.reverse(),
        r.paused && a.paused(!0),
        (f ||
          (!l &&
            !_ &&
            a._start === j(T._time) &&
            Z(f) &&
            pn(mt(a)) &&
            T.data !== 'nested')) &&
          ((a._tTime = -M), a.render(Math.max(0, -h))),
        y && ir(mt(a), y),
        a
      )
    }
    var e = t.prototype
    return (
      (e.render = function (r, n, s) {
        var a = this._time,
          c = this._tDur,
          l = this._dur,
          h = r > c - M && r >= 0 ? c : r < M ? 0 : r,
          f,
          d,
          u,
          _,
          p,
          y,
          v,
          T,
          b
        if (!l) mn(this, r, n, s)
        else if (
          h !== this._tTime ||
          !r ||
          s ||
          (!this._initted && this._tTime) ||
          (this._startAt && this._zTime < 0 != r < 0)
        ) {
          if (((f = h), (T = this.timeline), this._repeat)) {
            if (((_ = l + this._rDelay), this._repeat < -1 && r < 0))
              return this.totalTime(_ * 100 + r, n, s)
            if (
              ((f = j(h % _)),
              h === c
                ? ((u = this._repeat), (f = l))
                : ((u = ~~(h / _)),
                  u && u === h / _ && ((f = l), u--),
                  f > l && (f = l)),
              (y = this._yoyo && u & 1),
              y && ((b = this._yEase), (f = l - f)),
              (p = Zt(this._tTime, _)),
              f === a && !s && this._initted)
            )
              return (this._tTime = h), this
            u !== p &&
              (T && this._yEase && pr(T, y),
              this.vars.repeatRefresh &&
                !y &&
                !this._lock &&
                ((this._lock = s = 1),
                (this.render(j(_ * u), !0).invalidate()._lock = 0)))
          }
          if (!this._initted) {
            if (rr(this, r < 0 ? r : f, s, n)) return (this._tTime = 0), this
            if (a !== this._time) return this
            if (l !== this._dur) return this.render(r, n, s)
          }
          if (
            ((this._tTime = h),
            (this._time = f),
            !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
            (this.ratio = v = (b || this._ease)(f / l)),
            this._from && (this.ratio = v = 1 - v),
            f && !a && !n && (ot(this, 'onStart'), this._tTime !== h))
          )
            return this
          for (d = this._pt; d; ) d.r(v, d.d), (d = d._next)
          ;(T &&
            T.render(
              r < 0 ? r : !f && y ? -M : T._dur * T._ease(f / this._dur),
              n,
              s,
            )) ||
            (this._startAt && (this._zTime = r)),
            this._onUpdate &&
              !n &&
              (r < 0 && this._startAt && this._startAt.render(r, !0, s),
              ot(this, 'onUpdate')),
            this._repeat &&
              u !== p &&
              this.vars.onRepeat &&
              !n &&
              this.parent &&
              ot(this, 'onRepeat'),
            (h === this._tDur || !h) &&
              this._tTime === h &&
              (r < 0 &&
                this._startAt &&
                !this._onUpdate &&
                this._startAt.render(r, !0, !0),
              (r || !l) &&
                ((h === this._tDur && this._ts > 0) || (!h && this._ts < 0)) &&
                gt(this, 1),
              !n &&
                !(r < 0 && !a) &&
                (h || a) &&
                (ot(this, h === c ? 'onComplete' : 'onReverseComplete', !0),
                this._prom && !(h < c && this.timeScale() > 0) && this._prom()))
        }
        return this
      }),
      (e.targets = function () {
        return this._targets
      }),
      (e.invalidate = function () {
        return (
          (this._pt =
            this._op =
            this._startAt =
            this._onUpdate =
            this._lazy =
            this.ratio =
              0),
          (this._ptLookup = []),
          this.timeline && this.timeline.invalidate(),
          o.prototype.invalidate.call(this)
        )
      }),
      (e.resetTo = function (r, n, s, a) {
        pe || $.wake(), this._ts || this.play()
        var c = Math.min(this._dur, (this._dp._time - this._start) * this._ts),
          l
        return (
          this._initted || yi(this, c),
          (l = this._ease(c / this._dur)),
          zn(this, r, n, s, a, l, c)
            ? this.resetTo(r, n, s, a)
            : (di(this, 0),
              this.parent ||
                tr(
                  this._dp,
                  this,
                  '_first',
                  '_last',
                  this._dp._sort ? '_start' : 0,
                ),
              this.render(0))
        )
      }),
      (e.kill = function (r, n) {
        if ((n === void 0 && (n = 'all'), !r && (!n || n === 'all')))
          return (this._lazy = this._pt = 0), this.parent ? le(this) : this
        if (this.timeline) {
          var s = this.timeline.totalDuration()
          return (
            this.timeline.killTweensOf(r, n, Ot && Ot.vars.overwrite !== !0)
              ._first || le(this),
            this.parent &&
              s !== this.timeline.totalDuration() &&
              Jt(this, (this._dur * this.timeline._tDur) / s, 0, 1),
            this
          )
        }
        var a = this._targets,
          c = r ? st(r) : a,
          l = this._ptLookup,
          h = this._pt,
          f,
          d,
          u,
          _,
          p,
          y,
          v
        if ((!n || n === 'all') && fn(a, c))
          return n === 'all' && (this._pt = 0), le(this)
        for (
          f = this._op = this._op || [],
            n !== 'all' &&
              (N(n) &&
                ((p = {}),
                G(n, function (T) {
                  return (p[T] = 1)
                }),
                (n = p)),
              (n = Fn(a, n))),
            v = a.length;
          v--;

        )
          if (~c.indexOf(a[v])) {
            ;(d = l[v]),
              n === 'all'
                ? ((f[v] = n), (_ = d), (u = {}))
                : ((u = f[v] = f[v] || {}), (_ = n))
            for (p in _)
              (y = d && d[p]),
                y &&
                  ((!('kill' in y.d) || y.d.kill(p) === !0) &&
                    Be(this, y, '_pt'),
                  delete d[p]),
                u !== 'all' && (u[p] = 1)
          }
        return this._initted && !this._pt && h && le(this), this
      }),
      (t.to = function (r, n) {
        return new t(r, n, arguments[2])
      }),
      (t.from = function (r, n) {
        return ue(1, arguments)
      }),
      (t.delayedCall = function (r, n, s, a) {
        return new t(n, 0, {
          immediateRender: !1,
          lazy: !1,
          overwrite: !1,
          delay: r,
          onComplete: n,
          onReverseComplete: n,
          onCompleteParams: s,
          onReverseCompleteParams: s,
          callbackScope: a,
        })
      }),
      (t.fromTo = function (r, n, s) {
        return ue(2, arguments)
      }),
      (t.set = function (r, n) {
        return (n.duration = 0), n.repeatDelay || (n.repeat = 0), new t(r, n)
      }),
      (t.killTweensOf = function (r, n, s) {
        return z.killTweensOf(r, n, s)
      }),
      t
    )
  })(_e)
  at(W.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 })
  G('staggerTo,staggerFrom,staggerFromTo', function (o) {
    W[o] = function () {
      var t = new U(),
        e = ii.call(arguments, 0)
      return e.splice(o === 'staggerFromTo' ? 5 : 4, 0, 0), t[o].apply(t, e)
    }
  })
  var vi = function (t, e, i) {
      return (t[e] = i)
    },
    yr = function (t, e, i) {
      return t[e](i)
    },
    Nn = function (t, e, i, r) {
      return t[e](r.fp, i)
    },
    Yn = function (t, e, i) {
      return t.setAttribute(e, i)
    },
    ze = function (t, e) {
      return Y(t[e]) ? yr : Re(t[e]) && t.setAttribute ? Yn : vi
    },
    vr = function (t, e) {
      return e.set(e.t, e.p, Math.round((e.s + e.c * t) * 1e6) / 1e6, e)
    },
    Vn = function (t, e) {
      return e.set(e.t, e.p, !!(e.s + e.c * t), e)
    },
    wi = function (t, e) {
      var i = e._pt,
        r = ''
      if (!t && e.b) r = e.b
      else if (t === 1 && e.e) r = e.e
      else {
        for (; i; )
          (r =
            i.p +
            (i.m
              ? i.m(i.s + i.c * t)
              : Math.round((i.s + i.c * t) * 1e4) / 1e4) +
            r),
            (i = i._next)
        r += e.c
      }
      e.set(e.t, e.p, r, e)
    },
    bi = function (t, e) {
      for (var i = e._pt; i; ) i.r(t, i.d), (i = i._next)
    },
    Hn = function (t, e, i, r) {
      for (var n = this._pt, s; n; )
        (s = n._next), n.p === r && n.modifier(t, e, i), (n = s)
    },
    jn = function (t) {
      for (var e = this._pt, i, r; e; )
        (r = e._next),
          (e.p === t && !e.op) || e.op === t
            ? Be(this, e, '_pt')
            : e.dep || (i = 1),
          (e = r)
      return !i
    },
    Un = function (t, e, i, r) {
      r.mSet(t, e, r.m.call(r.tween, i, r.mt), r)
    },
    xi = function (t) {
      for (var e = t._pt, i, r, n, s; e; ) {
        for (i = e._next, r = n; r && r.pr > e.pr; ) r = r._next
        ;(e._prev = r ? r._prev : s) ? (e._prev._next = e) : (n = e),
          (e._next = r) ? (r._prev = e) : (s = e),
          (e = i)
      }
      t._pt = n
    },
    K = (function () {
      function o(e, i, r, n, s, a, c, l, h) {
        ;(this.t = i),
          (this.s = n),
          (this.c = s),
          (this.p = r),
          (this.r = a || vr),
          (this.d = c || this),
          (this.set = l || vi),
          (this.pr = h || 0),
          (this._next = e),
          e && (e._prev = this)
      }
      var t = o.prototype
      return (
        (t.modifier = function (i, r, n) {
          ;(this.mSet = this.mSet || this.set),
            (this.set = Un),
            (this.m = i),
            (this.mt = n),
            (this.tween = r)
        }),
        o
      )
    })()
  G(
    hi +
      'parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger',
    function (o) {
      return (ci[o] = 1)
    },
  )
  tt.TweenMax = tt.TweenLite = W
  tt.TimelineLite = tt.TimelineMax = U
  z = new U({
    sortChildren: !1,
    defaults: $t,
    autoRemoveChildren: !0,
    id: 'root',
    smoothChildTiming: !0,
  })
  J.stringFilter = pi
  var Me = {
    registerPlugin: function () {
      for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
        e[i] = arguments[i]
      e.forEach(function (r) {
        return Pn(r)
      })
    },
    timeline: function (t) {
      return new U(t)
    },
    getTweensOf: function (t, e) {
      return z.getTweensOf(t, e)
    },
    getProperty: function (t, e, i, r) {
      N(t) && (t = st(t)[0])
      var n = Pt(t || {}).get,
        s = i ? Ji : Zi
      return (
        i === 'native' && (i = ''),
        t &&
          (e
            ? s(((Q[e] && Q[e].get) || n)(t, e, i, r))
            : function (a, c, l) {
                return s(((Q[a] && Q[a].get) || n)(t, a, c, l))
              })
      )
    },
    quickSetter: function (t, e, i) {
      if (((t = st(t)), t.length > 1)) {
        var r = t.map(function (h) {
            return q.quickSetter(h, e, i)
          }),
          n = r.length
        return function (h) {
          for (var f = n; f--; ) r[f](h)
        }
      }
      t = t[0] || {}
      var s = Q[e],
        a = Pt(t),
        c = (a.harness && (a.harness.aliases || {})[e]) || e,
        l = s
          ? function (h) {
              var f = new s()
              ;(Qt._pt = 0),
                f.init(t, i ? h + i : h, Qt, 0, [t]),
                f.render(1, f),
                Qt._pt && bi(1, Qt)
            }
          : a.set(t, c)
      return s
        ? l
        : function (h) {
            return l(t, c, i ? h + i : h, a, 1)
          }
    },
    quickTo: function (t, e, i) {
      var r,
        n = q.to(
          t,
          Nt(((r = {}), (r[e] = '+=0.1'), (r.paused = !0), r), i || {}),
        ),
        s = function (c, l, h) {
          return n.resetTo(e, c, l, h)
        }
      return (s.tween = n), s
    },
    isTweening: function (t) {
      return z.getTweensOf(t, !0).length > 0
    },
    defaults: function (t) {
      return t && t.ease && (t.ease = Wt(t.ease, $t.ease)), zi($t, t || {})
    },
    config: function (t) {
      return zi(J, t || {})
    },
    registerEffect: function (t) {
      var e = t.name,
        i = t.effect,
        r = t.plugins,
        n = t.defaults,
        s = t.extendTimeline
      ;(r || '').split(',').forEach(function (a) {
        return (
          a && !Q[a] && !tt[a] && Pe(e + ' effect requires ' + a + ' plugin.')
        )
      }),
        (Xe[e] = function (a, c, l) {
          return i(st(a), at(c || {}, n), l)
        }),
        s &&
          (U.prototype[e] = function (a, c, l) {
            return this.add(Xe[e](a, wt(c) ? c : (l = c) && {}, this), l)
          })
    },
    registerEase: function (t, e) {
      P[t] = Wt(e)
    },
    parseEase: function (t, e) {
      return arguments.length ? Wt(t, e) : P
    },
    getById: function (t) {
      return z.getById(t)
    },
    exportRoot: function (t, e) {
      t === void 0 && (t = {})
      var i = new U(t),
        r,
        n
      for (
        i.smoothChildTiming = Z(t.smoothChildTiming),
          z.remove(i),
          i._dp = 0,
          i._time = i._tTime = z._time,
          r = z._first;
        r;

      )
        (n = r._next),
          (e ||
            !(
              !r._dur &&
              r instanceof W &&
              r.vars.onComplete === r._targets[0]
            )) &&
            dt(i, r, r._start - r._delay),
          (r = n)
      return dt(z, i, 0), i
    },
    utils: {
      wrap: kn,
      wrapYoyo: On,
      distribute: or,
      random: lr,
      snap: ar,
      normalize: Tn,
      getUnit: V,
      clamp: vn,
      splitColor: ur,
      toArray: st,
      selector: bn,
      mapRange: hr,
      pipe: xn,
      unitize: Sn,
      interpolate: En,
      shuffle: sr,
    },
    install: Gi,
    effects: Xe,
    ticker: $,
    updateRoot: U.updateRoot,
    plugins: Q,
    globalTimeline: z,
    core: {
      PropTween: K,
      globals: Ki,
      Tween: W,
      Timeline: U,
      Animation: _e,
      getCache: Pt,
      _removeLinkedListItem: Be,
      suppressOverwrites: function (t) {
        return (si = t)
      },
    },
  }
  G('to,from,fromTo,delayedCall,set,killTweensOf', function (o) {
    return (Me[o] = W[o])
  })
  $.add(U.updateRoot)
  Qt = Me.to({}, { duration: 0 })
  var Xn = function (t, e) {
      for (var i = t._pt; i && i.p !== e && i.op !== e && i.fp !== e; )
        i = i._next
      return i
    },
    qn = function (t, e) {
      var i = t._targets,
        r,
        n,
        s
      for (r in e)
        for (n = i.length; n--; )
          (s = t._ptLookup[n][r]),
            s &&
              (s = s.d) &&
              (s._pt && (s = Xn(s, r)),
              s && s.modifier && s.modifier(e[r], t, i[n], r))
    },
    Qe = function (t, e) {
      return {
        name: t,
        rawVars: 1,
        init: function (r, n, s) {
          s._onInit = function (a) {
            var c, l
            if (
              (N(n) &&
                ((c = {}),
                G(n, function (h) {
                  return (c[h] = 1)
                }),
                (n = c)),
              e)
            ) {
              c = {}
              for (l in n) c[l] = e(n[l])
              n = c
            }
            qn(a, n)
          }
        },
      }
    },
    q =
      Me.registerPlugin(
        {
          name: 'attr',
          init: function (t, e, i, r, n) {
            var s, a
            for (s in e)
              (a = this.add(
                t,
                'setAttribute',
                (t.getAttribute(s) || 0) + '',
                e[s],
                r,
                n,
                0,
                0,
                s,
              )),
                a && (a.op = s),
                this._props.push(s)
          },
        },
        {
          name: 'endArray',
          init: function (t, e) {
            for (var i = e.length; i--; ) this.add(t, i, t[i] || 0, e[i])
          },
        },
        Qe('roundProps', ri),
        Qe('modifiers'),
        Qe('snap', ar),
      ) || Me
  W.version = U.version = q.version = '3.10.4'
  qi = 1
  ji() && te()
  var Gn = P.Power0,
    Kn = P.Power1,
    Qn = P.Power2,
    $n = P.Power3,
    Zn = P.Power4,
    Jn = P.Linear,
    ts = P.Quad,
    es = P.Cubic,
    is = P.Quart,
    rs = P.Quint,
    ns = P.Strong,
    ss = P.Elastic,
    os = P.Back,
    as = P.SteppedEase,
    ls = P.Bounce,
    cs = P.Sine,
    hs = P.Expo,
    us = P.Circ
  var wr,
    At,
    re,
    Pi,
    Gt,
    fs,
    br,
    ds = function () {
      return typeof window < 'u'
    },
    Rt = {},
    Xt = 180 / Math.PI,
    ne = Math.PI / 180,
    ie = Math.atan2,
    xr = 1e8,
    Cr = /([A-Z])/g,
    ps = /(left|right|width|margin|padding|x)/i,
    _s = /[\s,\(]\S/,
    Dt = {
      autoAlpha: 'opacity,visibility',
      scale: 'scaleX,scaleY',
      alpha: 'opacity',
    },
    Ar = function (t, e) {
      return e.set(e.t, e.p, Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u, e)
    },
    ms = function (t, e) {
      return e.set(
        e.t,
        e.p,
        t === 1 ? e.e : Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u,
        e,
      )
    },
    gs = function (t, e) {
      return e.set(
        e.t,
        e.p,
        t ? Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u : e.b,
        e,
      )
    },
    ys = function (t, e) {
      var i = e.s + e.c * t
      e.set(e.t, e.p, ~~(i + (i < 0 ? -0.5 : 0.5)) + e.u, e)
    },
    Dr = function (t, e) {
      return e.set(e.t, e.p, t ? e.e : e.b, e)
    },
    Mr = function (t, e) {
      return e.set(e.t, e.p, t !== 1 ? e.b : e.e, e)
    },
    vs = function (t, e, i) {
      return (t.style[e] = i)
    },
    ws = function (t, e, i) {
      return t.style.setProperty(e, i)
    },
    bs = function (t, e, i) {
      return (t._gsap[e] = i)
    },
    xs = function (t, e, i) {
      return (t._gsap.scaleX = t._gsap.scaleY = i)
    },
    Ss = function (t, e, i, r, n) {
      var s = t._gsap
      ;(s.scaleX = s.scaleY = i), s.renderTransform(n, s)
    },
    Ts = function (t, e, i, r, n) {
      var s = t._gsap
      ;(s[e] = i), s.renderTransform(n, s)
    },
    H = 'transform',
    Lt = H + 'Origin',
    Rr,
    ki = function (t, e) {
      var i = At.createElementNS
        ? At.createElementNS(
            (e || 'http://www.w3.org/1999/xhtml').replace(/^https/, 'http'),
            t,
          )
        : At.createElement(t)
      return i.style ? i : At.createElement(t)
    },
    bt = function o(t, e, i) {
      var r = getComputedStyle(t)
      return (
        r[e] ||
        r.getPropertyValue(e.replace(Cr, '-$1').toLowerCase()) ||
        r.getPropertyValue(e) ||
        (!i && o(t, se(e) || e, 1)) ||
        ''
      )
    },
    Sr = 'O,Moz,ms,Ms,Webkit'.split(','),
    se = function (t, e, i) {
      var r = e || Gt,
        n = r.style,
        s = 5
      if (t in n && !i) return t
      for (
        t = t.charAt(0).toUpperCase() + t.substr(1);
        s-- && !(Sr[s] + t in n);

      );
      return s < 0 ? null : (s === 3 ? 'ms' : s >= 0 ? Sr[s] : '') + t
    },
    Oi = function () {
      ds() &&
        window.document &&
        ((wr = window),
        (At = wr.document),
        (re = At.documentElement),
        (Gt = ki('div') || { style: {} }),
        (fs = ki('div')),
        (H = se(H)),
        (Lt = H + 'Origin'),
        (Gt.style.cssText =
          'border-width:0;line-height:0;position:absolute;padding:0'),
        (Rr = !!se('perspective')),
        (Pi = 1))
    },
    Si = function o(t) {
      var e = ki(
          'svg',
          (this.ownerSVGElement &&
            this.ownerSVGElement.getAttribute('xmlns')) ||
            'http://www.w3.org/2000/svg',
        ),
        i = this.parentNode,
        r = this.nextSibling,
        n = this.style.cssText,
        s
      if (
        (re.appendChild(e),
        e.appendChild(this),
        (this.style.display = 'block'),
        t)
      )
        try {
          ;(s = this.getBBox()),
            (this._gsapBBox = this.getBBox),
            (this.getBBox = o)
        } catch {}
      else this._gsapBBox && (s = this._gsapBBox())
      return (
        i && (r ? i.insertBefore(this, r) : i.appendChild(this)),
        re.removeChild(e),
        (this.style.cssText = n),
        s
      )
    },
    Tr = function (t, e) {
      for (var i = e.length; i--; )
        if (t.hasAttribute(e[i])) return t.getAttribute(e[i])
    },
    Lr = function (t) {
      var e
      try {
        e = t.getBBox()
      } catch {
        e = Si.call(t, !0)
      }
      return (
        (e && (e.width || e.height)) ||
          t.getBBox === Si ||
          (e = Si.call(t, !0)),
        e && !e.width && !e.x && !e.y
          ? {
              x: +Tr(t, ['x', 'cx', 'x1']) || 0,
              y: +Tr(t, ['y', 'cy', 'y1']) || 0,
              width: 0,
              height: 0,
            }
          : e
      )
    },
    Br = function (t) {
      return !!(t.getCTM && (!t.parentNode || t.ownerSVGElement) && Lr(t))
    },
    ye = function (t, e) {
      if (e) {
        var i = t.style
        e in Rt && e !== Lt && (e = H),
          i.removeProperty
            ? ((e.substr(0, 2) === 'ms' || e.substr(0, 6) === 'webkit') &&
                (e = '-' + e),
              i.removeProperty(e.replace(Cr, '-$1').toLowerCase()))
            : i.removeAttribute(e)
      }
    },
    Mt = function (t, e, i, r, n, s) {
      var a = new K(t._pt, e, i, 0, 1, s ? Mr : Dr)
      return (t._pt = a), (a.b = r), (a.e = n), t._props.push(i), a
    },
    kr = { deg: 1, rad: 1, turn: 1 },
    Bt = function o(t, e, i, r) {
      var n = parseFloat(i) || 0,
        s = (i + '').trim().substr((n + '').length) || 'px',
        a = Gt.style,
        c = ps.test(e),
        l = t.tagName.toLowerCase() === 'svg',
        h = (l ? 'client' : 'offset') + (c ? 'Width' : 'Height'),
        f = 100,
        d = r === 'px',
        u = r === '%',
        _,
        p,
        y,
        v
      return r === s || !n || kr[r] || kr[s]
        ? n
        : (s !== 'px' && !d && (n = o(t, e, i, 'px')),
          (v = t.getCTM && Br(t)),
          (u || s === '%') && (Rt[e] || ~e.indexOf('adius'))
            ? ((_ = v ? t.getBBox()[c ? 'width' : 'height'] : t[h]),
              F(u ? (n / _) * f : (n / 100) * _))
            : ((a[c ? 'width' : 'height'] = f + (d ? s : r)),
              (p =
                ~e.indexOf('adius') || (r === 'em' && t.appendChild && !l)
                  ? t
                  : t.parentNode),
              v && (p = (t.ownerSVGElement || {}).parentNode),
              (!p || p === At || !p.appendChild) && (p = At.body),
              (y = p._gsap),
              y && u && y.width && c && y.time === $.time
                ? F((n / y.width) * f)
                : ((u || s === '%') && (a.position = bt(t, 'position')),
                  p === t && (a.position = 'static'),
                  p.appendChild(Gt),
                  (_ = Gt[h]),
                  p.removeChild(Gt),
                  (a.position = 'absolute'),
                  c && u && ((y = Pt(p)), (y.time = $.time), (y.width = p[h])),
                  F(d ? (_ * n) / f : _ && n ? (f / _) * n : 0))))
    },
    qt = function (t, e, i, r) {
      var n
      return (
        Pi || Oi(),
        e in Dt &&
          e !== 'transform' &&
          ((e = Dt[e]), ~e.indexOf(',') && (e = e.split(',')[0])),
        Rt[e] && e !== 'transform'
          ? ((n = we(t, r)),
            (n =
              e !== 'transformOrigin'
                ? n[e]
                : n.svg
                ? n.origin
                : We(bt(t, Lt)) + ' ' + n.zOrigin + 'px'))
          : ((n = t.style[e]),
            (!n || n === 'auto' || r || ~(n + '').indexOf('calc(')) &&
              (n =
                (Fe[e] && Fe[e](t, e, i)) ||
                bt(t, e) ||
                fi(t, e) ||
                (e === 'opacity' ? 1 : 0))),
        i && !~(n + '').trim().indexOf(' ') ? Bt(t, e, n, i) + i : n
      )
    },
    ks = function (t, e, i, r) {
      if (!i || i === 'none') {
        var n = se(e, t, 1),
          s = n && bt(t, n, 1)
        s && s !== i
          ? ((e = n), (i = s))
          : e === 'borderColor' && (i = bt(t, 'borderTopColor'))
      }
      var a = new K(this._pt, t.style, e, 0, 1, wi),
        c = 0,
        l = 0,
        h,
        f,
        d,
        u,
        _,
        p,
        y,
        v,
        T,
        b,
        m,
        g
      if (
        ((a.b = i),
        (a.e = r),
        (i += ''),
        (r += ''),
        r === 'auto' &&
          ((t.style[e] = r), (r = bt(t, e) || r), (t.style[e] = i)),
        (h = [i, r]),
        pi(h),
        (i = h[0]),
        (r = h[1]),
        (d = i.match(Yt) || []),
        (g = r.match(Yt) || []),
        g.length)
      ) {
        for (; (f = Yt.exec(r)); )
          (y = f[0]),
            (T = r.substring(c, f.index)),
            _
              ? (_ = (_ + 1) % 5)
              : (T.substr(-5) === 'rgba(' || T.substr(-5) === 'hsla(') &&
                (_ = 1),
            y !== (p = d[l++] || '') &&
              ((u = parseFloat(p) || 0),
              (m = p.substr((u + '').length)),
              y.charAt(1) === '=' && (y = Vt(u, y) + m),
              (v = parseFloat(y)),
              (b = y.substr((v + '').length)),
              (c = Yt.lastIndex - b.length),
              b ||
                ((b = b || J.units[e] || m),
                c === r.length && ((r += b), (a.e += b))),
              m !== b && (u = Bt(t, e, p, b) || 0),
              (a._pt = {
                _next: a._pt,
                p: T || l === 1 ? T : ',',
                s: u,
                c: v - u,
                m: (_ && _ < 4) || e === 'zIndex' ? Math.round : 0,
              }))
        a.c = c < r.length ? r.substring(c, r.length) : ''
      } else a.r = e === 'display' && r === 'none' ? Mr : Dr
      return ai.test(r) && (a.e = 0), (this._pt = a), a
    },
    Or = {
      top: '0%',
      bottom: '100%',
      left: '0%',
      right: '100%',
      center: '50%',
    },
    Os = function (t) {
      var e = t.split(' '),
        i = e[0],
        r = e[1] || '50%'
      return (
        (i === 'top' || i === 'bottom' || r === 'left' || r === 'right') &&
          ((t = i), (i = r), (r = t)),
        (e[0] = Or[i] || i),
        (e[1] = Or[r] || r),
        e.join(' ')
      )
    },
    Es = function (t, e) {
      if (e.tween && e.tween._time === e.tween._dur) {
        var i = e.t,
          r = i.style,
          n = e.u,
          s = i._gsap,
          a,
          c,
          l
        if (n === 'all' || n === !0) (r.cssText = ''), (c = 1)
        else
          for (n = n.split(','), l = n.length; --l > -1; )
            (a = n[l]),
              Rt[a] && ((c = 1), (a = a === 'transformOrigin' ? Lt : H)),
              ye(i, a)
        c &&
          (ye(i, H),
          s &&
            (s.svg && i.removeAttribute('transform'),
            we(i, 1),
            (s.uncache = 1)))
      }
    },
    Fe = {
      clearProps: function (t, e, i, r, n) {
        if (n.data !== 'isFromStart') {
          var s = (t._pt = new K(t._pt, e, i, 0, 0, Es))
          return (s.u = r), (s.pr = -10), (s.tween = n), t._props.push(i), 1
        }
      },
    },
    ve = [1, 0, 0, 1, 0, 0],
    Ir = {},
    zr = function (t) {
      return t === 'matrix(1, 0, 0, 1, 0, 0)' || t === 'none' || !t
    },
    Er = function (t) {
      var e = bt(t, H)
      return zr(e) ? ve : e.substr(7).match(oi).map(F)
    },
    Ci = function (t, e) {
      var i = t._gsap || Pt(t),
        r = t.style,
        n = Er(t),
        s,
        a,
        c,
        l
      return i.svg && t.getAttribute('transform')
        ? ((c = t.transform.baseVal.consolidate().matrix),
          (n = [c.a, c.b, c.c, c.d, c.e, c.f]),
          n.join(',') === '1,0,0,1,0,0' ? ve : n)
        : (n === ve &&
            !t.offsetParent &&
            t !== re &&
            !i.svg &&
            ((c = r.display),
            (r.display = 'block'),
            (s = t.parentNode),
            (!s || !t.offsetParent) &&
              ((l = 1), (a = t.nextSibling), re.appendChild(t)),
            (n = Er(t)),
            c ? (r.display = c) : ye(t, 'display'),
            l &&
              (a
                ? s.insertBefore(t, a)
                : s
                ? s.appendChild(t)
                : re.removeChild(t))),
          e && n.length > 6 ? [n[0], n[1], n[4], n[5], n[12], n[13]] : n)
    },
    Ei = function (t, e, i, r, n, s) {
      var a = t._gsap,
        c = n || Ci(t, !0),
        l = a.xOrigin || 0,
        h = a.yOrigin || 0,
        f = a.xOffset || 0,
        d = a.yOffset || 0,
        u = c[0],
        _ = c[1],
        p = c[2],
        y = c[3],
        v = c[4],
        T = c[5],
        b = e.split(' '),
        m = parseFloat(b[0]) || 0,
        g = parseFloat(b[1]) || 0,
        w,
        S,
        k,
        x
      i
        ? c !== ve &&
          (S = u * y - _ * p) &&
          ((k = m * (y / S) + g * (-p / S) + (p * T - y * v) / S),
          (x = m * (-_ / S) + g * (u / S) - (u * T - _ * v) / S),
          (m = k),
          (g = x))
        : ((w = Lr(t)),
          (m = w.x + (~b[0].indexOf('%') ? (m / 100) * w.width : m)),
          (g =
            w.y + (~(b[1] || b[0]).indexOf('%') ? (g / 100) * w.height : g))),
        r || (r !== !1 && a.smooth)
          ? ((v = m - l),
            (T = g - h),
            (a.xOffset = f + (v * u + T * p) - v),
            (a.yOffset = d + (v * _ + T * y) - T))
          : (a.xOffset = a.yOffset = 0),
        (a.xOrigin = m),
        (a.yOrigin = g),
        (a.smooth = !!r),
        (a.origin = e),
        (a.originIsAbsolute = !!i),
        (t.style[Lt] = '0px 0px'),
        s &&
          (Mt(s, a, 'xOrigin', l, m),
          Mt(s, a, 'yOrigin', h, g),
          Mt(s, a, 'xOffset', f, a.xOffset),
          Mt(s, a, 'yOffset', d, a.yOffset)),
        t.setAttribute('data-svg-origin', m + ' ' + g)
    },
    we = function (t, e) {
      var i = t._gsap || new _i(t)
      if ('x' in i && !e && !i.uncache) return i
      var r = t.style,
        n = i.scaleX < 0,
        s = 'px',
        a = 'deg',
        c = bt(t, Lt) || '0',
        l,
        h,
        f,
        d,
        u,
        _,
        p,
        y,
        v,
        T,
        b,
        m,
        g,
        w,
        S,
        k,
        x,
        O,
        C,
        B,
        L,
        R,
        I,
        A,
        E,
        ut,
        ct,
        Tt,
        kt,
        Te,
        _t,
        zt
      return (
        (l = h = f = _ = p = y = v = T = b = 0),
        (d = u = 1),
        (i.svg = !!(t.getCTM && Br(t))),
        (w = Ci(t, i.svg)),
        i.svg &&
          ((A =
            (!i.uncache || c === '0px 0px') &&
            !e &&
            t.getAttribute('data-svg-origin')),
          Ei(t, A || c, !!A || i.originIsAbsolute, i.smooth !== !1, w)),
        (m = i.xOrigin || 0),
        (g = i.yOrigin || 0),
        w !== ve &&
          ((O = w[0]),
          (C = w[1]),
          (B = w[2]),
          (L = w[3]),
          (l = R = w[4]),
          (h = I = w[5]),
          w.length === 6
            ? ((d = Math.sqrt(O * O + C * C)),
              (u = Math.sqrt(L * L + B * B)),
              (_ = O || C ? ie(C, O) * Xt : 0),
              (v = B || L ? ie(B, L) * Xt + _ : 0),
              v && (u *= Math.abs(Math.cos(v * ne))),
              i.svg && ((l -= m - (m * O + g * B)), (h -= g - (m * C + g * L))))
            : ((zt = w[6]),
              (Te = w[7]),
              (ct = w[8]),
              (Tt = w[9]),
              (kt = w[10]),
              (_t = w[11]),
              (l = w[12]),
              (h = w[13]),
              (f = w[14]),
              (S = ie(zt, kt)),
              (p = S * Xt),
              S &&
                ((k = Math.cos(-S)),
                (x = Math.sin(-S)),
                (A = R * k + ct * x),
                (E = I * k + Tt * x),
                (ut = zt * k + kt * x),
                (ct = R * -x + ct * k),
                (Tt = I * -x + Tt * k),
                (kt = zt * -x + kt * k),
                (_t = Te * -x + _t * k),
                (R = A),
                (I = E),
                (zt = ut)),
              (S = ie(-B, kt)),
              (y = S * Xt),
              S &&
                ((k = Math.cos(-S)),
                (x = Math.sin(-S)),
                (A = O * k - ct * x),
                (E = C * k - Tt * x),
                (ut = B * k - kt * x),
                (_t = L * x + _t * k),
                (O = A),
                (C = E),
                (B = ut)),
              (S = ie(C, O)),
              (_ = S * Xt),
              S &&
                ((k = Math.cos(S)),
                (x = Math.sin(S)),
                (A = O * k + C * x),
                (E = R * k + I * x),
                (C = C * k - O * x),
                (I = I * k - R * x),
                (O = A),
                (R = E)),
              p &&
                Math.abs(p) + Math.abs(_) > 359.9 &&
                ((p = _ = 0), (y = 180 - y)),
              (d = F(Math.sqrt(O * O + C * C + B * B))),
              (u = F(Math.sqrt(I * I + zt * zt))),
              (S = ie(R, I)),
              (v = Math.abs(S) > 2e-4 ? S * Xt : 0),
              (b = _t ? 1 / (_t < 0 ? -_t : _t) : 0)),
          i.svg &&
            ((A = t.getAttribute('transform')),
            (i.forceCSS = t.setAttribute('transform', '') || !zr(bt(t, H))),
            A && t.setAttribute('transform', A))),
        Math.abs(v) > 90 &&
          Math.abs(v) < 270 &&
          (n
            ? ((d *= -1),
              (v += _ <= 0 ? 180 : -180),
              (_ += _ <= 0 ? 180 : -180))
            : ((u *= -1), (v += v <= 0 ? 180 : -180))),
        (e = e || i.uncache),
        (i.x =
          l -
          ((i.xPercent =
            l &&
            ((!e && i.xPercent) ||
              (Math.round(t.offsetWidth / 2) === Math.round(-l) ? -50 : 0)))
            ? (t.offsetWidth * i.xPercent) / 100
            : 0) +
          s),
        (i.y =
          h -
          ((i.yPercent =
            h &&
            ((!e && i.yPercent) ||
              (Math.round(t.offsetHeight / 2) === Math.round(-h) ? -50 : 0)))
            ? (t.offsetHeight * i.yPercent) / 100
            : 0) +
          s),
        (i.z = f + s),
        (i.scaleX = F(d)),
        (i.scaleY = F(u)),
        (i.rotation = F(_) + a),
        (i.rotationX = F(p) + a),
        (i.rotationY = F(y) + a),
        (i.skewX = v + a),
        (i.skewY = T + a),
        (i.transformPerspective = b + s),
        (i.zOrigin = parseFloat(c.split(' ')[2]) || 0) && (r[Lt] = We(c)),
        (i.xOffset = i.yOffset = 0),
        (i.force3D = J.force3D),
        (i.renderTransform = i.svg ? Cs : Rr ? Fr : Ps),
        (i.uncache = 0),
        i
      )
    },
    We = function (t) {
      return (t = t.split(' '))[0] + ' ' + t[1]
    },
    Ti = function (t, e, i) {
      var r = V(e)
      return F(parseFloat(e) + parseFloat(Bt(t, 'x', i + 'px', r))) + r
    },
    Ps = function (t, e) {
      ;(e.z = '0px'),
        (e.rotationY = e.rotationX = '0deg'),
        (e.force3D = 0),
        Fr(t, e)
    },
    jt = '0deg',
    ge = '0px',
    Ut = ') ',
    Fr = function (t, e) {
      var i = e || this,
        r = i.xPercent,
        n = i.yPercent,
        s = i.x,
        a = i.y,
        c = i.z,
        l = i.rotation,
        h = i.rotationY,
        f = i.rotationX,
        d = i.skewX,
        u = i.skewY,
        _ = i.scaleX,
        p = i.scaleY,
        y = i.transformPerspective,
        v = i.force3D,
        T = i.target,
        b = i.zOrigin,
        m = '',
        g = (v === 'auto' && t && t !== 1) || v === !0
      if (b && (f !== jt || h !== jt)) {
        var w = parseFloat(h) * ne,
          S = Math.sin(w),
          k = Math.cos(w),
          x
        ;(w = parseFloat(f) * ne),
          (x = Math.cos(w)),
          (s = Ti(T, s, S * x * -b)),
          (a = Ti(T, a, -Math.sin(w) * -b)),
          (c = Ti(T, c, k * x * -b + b))
      }
      y !== ge && (m += 'perspective(' + y + Ut),
        (r || n) && (m += 'translate(' + r + '%, ' + n + '%) '),
        (g || s !== ge || a !== ge || c !== ge) &&
          (m +=
            c !== ge || g
              ? 'translate3d(' + s + ', ' + a + ', ' + c + ') '
              : 'translate(' + s + ', ' + a + Ut),
        l !== jt && (m += 'rotate(' + l + Ut),
        h !== jt && (m += 'rotateY(' + h + Ut),
        f !== jt && (m += 'rotateX(' + f + Ut),
        (d !== jt || u !== jt) && (m += 'skew(' + d + ', ' + u + Ut),
        (_ !== 1 || p !== 1) && (m += 'scale(' + _ + ', ' + p + Ut),
        (T.style[H] = m || 'translate(0, 0)')
    },
    Cs = function (t, e) {
      var i = e || this,
        r = i.xPercent,
        n = i.yPercent,
        s = i.x,
        a = i.y,
        c = i.rotation,
        l = i.skewX,
        h = i.skewY,
        f = i.scaleX,
        d = i.scaleY,
        u = i.target,
        _ = i.xOrigin,
        p = i.yOrigin,
        y = i.xOffset,
        v = i.yOffset,
        T = i.forceCSS,
        b = parseFloat(s),
        m = parseFloat(a),
        g,
        w,
        S,
        k,
        x
      ;(c = parseFloat(c)),
        (l = parseFloat(l)),
        (h = parseFloat(h)),
        h && ((h = parseFloat(h)), (l += h), (c += h)),
        c || l
          ? ((c *= ne),
            (l *= ne),
            (g = Math.cos(c) * f),
            (w = Math.sin(c) * f),
            (S = Math.sin(c - l) * -d),
            (k = Math.cos(c - l) * d),
            l &&
              ((h *= ne),
              (x = Math.tan(l - h)),
              (x = Math.sqrt(1 + x * x)),
              (S *= x),
              (k *= x),
              h &&
                ((x = Math.tan(h)),
                (x = Math.sqrt(1 + x * x)),
                (g *= x),
                (w *= x))),
            (g = F(g)),
            (w = F(w)),
            (S = F(S)),
            (k = F(k)))
          : ((g = f), (k = d), (w = S = 0)),
        ((b && !~(s + '').indexOf('px')) || (m && !~(a + '').indexOf('px'))) &&
          ((b = Bt(u, 'x', s, 'px')), (m = Bt(u, 'y', a, 'px'))),
        (_ || p || y || v) &&
          ((b = F(b + _ - (_ * g + p * S) + y)),
          (m = F(m + p - (_ * w + p * k) + v))),
        (r || n) &&
          ((x = u.getBBox()),
          (b = F(b + (r / 100) * x.width)),
          (m = F(m + (n / 100) * x.height))),
        (x =
          'matrix(' +
          g +
          ',' +
          w +
          ',' +
          S +
          ',' +
          k +
          ',' +
          b +
          ',' +
          m +
          ')'),
        u.setAttribute('transform', x),
        T && (u.style[H] = x)
    },
    As = function (t, e, i, r, n) {
      var s = 360,
        a = N(n),
        c = parseFloat(n) * (a && ~n.indexOf('rad') ? Xt : 1),
        l = c - r,
        h = r + l + 'deg',
        f,
        d
      return (
        a &&
          ((f = n.split('_')[1]),
          f === 'short' &&
            ((l %= s), l !== l % (s / 2) && (l += l < 0 ? s : -s)),
          f === 'cw' && l < 0
            ? (l = ((l + s * xr) % s) - ~~(l / s) * s)
            : f === 'ccw' && l > 0 && (l = ((l - s * xr) % s) - ~~(l / s) * s)),
        (t._pt = d = new K(t._pt, e, i, r, l, ms)),
        (d.e = h),
        (d.u = 'deg'),
        t._props.push(i),
        d
      )
    },
    Pr = function (t, e) {
      for (var i in e) t[i] = e[i]
      return t
    },
    Ds = function (t, e, i) {
      var r = Pr({}, i._gsap),
        n = 'perspective,force3D,transformOrigin,svgOrigin',
        s = i.style,
        a,
        c,
        l,
        h,
        f,
        d,
        u,
        _
      r.svg
        ? ((l = i.getAttribute('transform')),
          i.setAttribute('transform', ''),
          (s[H] = e),
          (a = we(i, 1)),
          ye(i, H),
          i.setAttribute('transform', l))
        : ((l = getComputedStyle(i)[H]), (s[H] = e), (a = we(i, 1)), (s[H] = l))
      for (c in Rt)
        (l = r[c]),
          (h = a[c]),
          l !== h &&
            n.indexOf(c) < 0 &&
            ((u = V(l)),
            (_ = V(h)),
            (f = u !== _ ? Bt(i, c, l, _) : parseFloat(l)),
            (d = parseFloat(h)),
            (t._pt = new K(t._pt, a, c, f, d - f, Ar)),
            (t._pt.u = _ || 0),
            t._props.push(c))
      Pr(a, r)
    }
  G('padding,margin,Width,Radius', function (o, t) {
    var e = 'Top',
      i = 'Right',
      r = 'Bottom',
      n = 'Left',
      s = (t < 3 ? [e, i, r, n] : [e + n, e + i, r + i, r + n]).map(function (
        a,
      ) {
        return t < 2 ? o + a : 'border' + a + o
      })
    Fe[t > 1 ? 'border' + o : o] = function (a, c, l, h, f) {
      var d, u
      if (arguments.length < 4)
        return (
          (d = s.map(function (_) {
            return qt(a, _, l)
          })),
          (u = d.join(' ')),
          u.split(d[0]).length === 5 ? d[0] : u
        )
      ;(d = (h + '').split(' ')),
        (u = {}),
        s.forEach(function (_, p) {
          return (u[_] = d[p] = d[p] || d[((p - 1) / 2) | 0])
        }),
        a.init(c, u, f)
    }
  })
  var be = {
    name: 'css',
    register: Oi,
    targetTest: function (t) {
      return t.style && t.nodeType
    },
    init: function (t, e, i, r, n) {
      var s = this._props,
        a = t.style,
        c = i.vars.startAt,
        l,
        h,
        f,
        d,
        u,
        _,
        p,
        y,
        v,
        T,
        b,
        m,
        g,
        w,
        S
      Pi || Oi()
      for (p in e)
        if (
          p !== 'autoRound' &&
          ((h = e[p]), !(Q[p] && gi(p, e, i, r, t, n)))
        ) {
          if (
            ((u = typeof h),
            (_ = Fe[p]),
            u === 'function' && ((h = h.call(i, r, t, n)), (u = typeof h)),
            u === 'string' && ~h.indexOf('random(') && (h = ee(h)),
            _)
          )
            _(this, t, p, h, i) && (S = 1)
          else if (p.substr(0, 2) === '--')
            (l = (getComputedStyle(t).getPropertyValue(p) + '').trim()),
              (h += ''),
              (yt.lastIndex = 0),
              yt.test(l) || ((y = V(l)), (v = V(h))),
              v ? y !== v && (l = Bt(t, p, l, v) + v) : y && (h += y),
              this.add(a, 'setProperty', l, h, r, n, 0, 0, p),
              s.push(p)
          else if (u !== 'undefined') {
            if (
              (c && p in c
                ? ((l =
                    typeof c[p] == 'function' ? c[p].call(i, r, t, n) : c[p]),
                  N(l) && ~l.indexOf('random(') && (l = ee(l)),
                  V(l + '') || (l += J.units[p] || V(qt(t, p)) || ''),
                  (l + '').charAt(1) === '=' && (l = qt(t, p)))
                : (l = qt(t, p)),
              (d = parseFloat(l)),
              (T = u === 'string' && h.charAt(1) === '=' && h.substr(0, 2)),
              T && (h = h.substr(2)),
              (f = parseFloat(h)),
              p in Dt &&
                (p === 'autoAlpha' &&
                  (d === 1 && qt(t, 'visibility') === 'hidden' && f && (d = 0),
                  Mt(
                    this,
                    a,
                    'visibility',
                    d ? 'inherit' : 'hidden',
                    f ? 'inherit' : 'hidden',
                    !f,
                  )),
                p !== 'scale' &&
                  p !== 'transform' &&
                  ((p = Dt[p]), ~p.indexOf(',') && (p = p.split(',')[0]))),
              (b = p in Rt),
              b)
            ) {
              if (
                (m ||
                  ((g = t._gsap),
                  (g.renderTransform && !e.parseTransform) ||
                    we(t, e.parseTransform),
                  (w = e.smoothOrigin !== !1 && g.smooth),
                  (m = this._pt =
                    new K(this._pt, a, H, 0, 1, g.renderTransform, g, 0, -1)),
                  (m.dep = 1)),
                p === 'scale')
              )
                (this._pt = new K(
                  this._pt,
                  g,
                  'scaleY',
                  g.scaleY,
                  (T ? Vt(g.scaleY, T + f) : f) - g.scaleY || 0,
                )),
                  s.push('scaleY', p),
                  (p += 'X')
              else if (p === 'transformOrigin') {
                ;(h = Os(h)),
                  g.svg
                    ? Ei(t, h, 0, w, 0, this)
                    : ((v = parseFloat(h.split(' ')[2]) || 0),
                      v !== g.zOrigin && Mt(this, g, 'zOrigin', g.zOrigin, v),
                      Mt(this, a, p, We(l), We(h)))
                continue
              } else if (p === 'svgOrigin') {
                Ei(t, h, 1, w, 0, this)
                continue
              } else if (p in Ir) {
                As(this, g, p, d, T ? Vt(d, T + h) : h)
                continue
              } else if (p === 'smoothOrigin') {
                Mt(this, g, 'smooth', g.smooth, h)
                continue
              } else if (p === 'force3D') {
                g[p] = h
                continue
              } else if (p === 'transform') {
                Ds(this, h, t)
                continue
              }
            } else p in a || (p = se(p) || p)
            if (
              b ||
              ((f || f === 0) && (d || d === 0) && !_s.test(h) && p in a)
            )
              (y = (l + '').substr((d + '').length)),
                f || (f = 0),
                (v = V(h) || (p in J.units ? J.units[p] : y)),
                y !== v && (d = Bt(t, p, l, v)),
                (this._pt = new K(
                  this._pt,
                  b ? g : a,
                  p,
                  d,
                  (T ? Vt(d, T + f) : f) - d,
                  !b && (v === 'px' || p === 'zIndex') && e.autoRound !== !1
                    ? ys
                    : Ar,
                )),
                (this._pt.u = v || 0),
                y !== v && v !== '%' && ((this._pt.b = l), (this._pt.r = gs))
            else if (p in a) ks.call(this, t, p, l, T ? T + h : h)
            else if (p in t) this.add(t, p, l || t[p], T ? T + h : h, r, n)
            else {
              Le(p, h)
              continue
            }
            s.push(p)
          }
        }
      S && xi(this)
    },
    get: qt,
    aliases: Dt,
    getSetter: function (t, e, i) {
      var r = Dt[e]
      return (
        r && r.indexOf(',') < 0 && (e = r),
        e in Rt && e !== Lt && (t._gsap.x || qt(t, 'x'))
          ? i && br === i
            ? e === 'scale'
              ? xs
              : bs
            : (br = i || {}) && (e === 'scale' ? Ss : Ts)
          : t.style && !Re(t.style[e])
          ? vs
          : ~e.indexOf('-')
          ? ws
          : ze(t, e)
      )
    },
    core: { _removeProperty: ye, _getMatrix: Ci },
  }
  q.utils.checkPrefix = se
  ;(function (o, t, e, i) {
    var r = G(o + ',' + t + ',' + e, function (n) {
      Rt[n] = 1
    })
    G(t, function (n) {
      ;(J.units[n] = 'deg'), (Ir[n] = 1)
    }),
      (Dt[r[13]] = o + ',' + t),
      G(i, function (n) {
        var s = n.split(':')
        Dt[s[1]] = r[s[0]]
      })
  })(
    'x,y,z,scale,scaleX,scaleY,xPercent,yPercent',
    'rotation,rotationX,rotationY,skewX,skewY',
    'transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective',
    '0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY',
  )
  G(
    'x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective',
    function (o) {
      J.units[o] = 'px'
    },
  )
  q.registerPlugin(be)
  var It = q.registerPlugin(be) || q,
    Co = It.core.Tween
  var pt = q.registerPlugin(be) || q,
    Ro = pt.core.Tween
  function Ve(o, t) {
    if (!(o instanceof t))
      throw new TypeError('Cannot call a class as a function')
  }
  function Wr(o, t) {
    for (var e = 0; e < t.length; e++) {
      var i = t[e]
      ;(i.enumerable = i.enumerable || !1),
        (i.configurable = !0),
        'value' in i && (i.writable = !0),
        Object.defineProperty(o, i.key, i)
    }
  }
  function He(o, t, e) {
    return t && Wr(o.prototype, t), e && Wr(o, e), o
  }
  function Ms(o, t, e) {
    return (
      t in o
        ? Object.defineProperty(o, t, {
            value: e,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (o[t] = e),
      o
    )
  }
  function Nr(o, t) {
    var e = Object.keys(o)
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(o)
      t &&
        (i = i.filter(function (r) {
          return Object.getOwnPropertyDescriptor(o, r).enumerable
        })),
        e.push.apply(e, i)
    }
    return e
  }
  function Ai(o) {
    for (var t = 1; t < arguments.length; t++) {
      var e = arguments[t] != null ? arguments[t] : {}
      t % 2
        ? Nr(Object(e), !0).forEach(function (i) {
            Ms(o, i, e[i])
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(e))
        : Nr(Object(e)).forEach(function (i) {
            Object.defineProperty(o, i, Object.getOwnPropertyDescriptor(e, i))
          })
    }
    return o
  }
  function Vr(o, t) {
    if (typeof t != 'function' && t !== null)
      throw new TypeError('Super expression must either be null or a function')
    ;(o.prototype = Object.create(t && t.prototype, {
      constructor: { value: o, writable: !0, configurable: !0 },
    })),
      t && Ri(o, t)
  }
  function ht(o) {
    return (
      (ht = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e)
          }),
      ht(o)
    )
  }
  function Ri(o, t) {
    return (
      (Ri =
        Object.setPrototypeOf ||
        function (i, r) {
          return (i.__proto__ = r), i
        }),
      Ri(o, t)
    )
  }
  function Rs() {
    if (typeof Reflect > 'u' || !Reflect.construct || Reflect.construct.sham)
      return !1
    if (typeof Proxy == 'function') return !0
    try {
      return (
        Date.prototype.toString.call(
          Reflect.construct(Date, [], function () {}),
        ),
        !0
      )
    } catch {
      return !1
    }
  }
  function Hr(o) {
    if (o === void 0)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called",
      )
    return o
  }
  function Ls(o, t) {
    return t && (typeof t == 'object' || typeof t == 'function') ? t : Hr(o)
  }
  function jr(o) {
    var t = Rs()
    return function () {
      var i = ht(o),
        r
      if (t) {
        var n = ht(this).constructor
        r = Reflect.construct(i, arguments, n)
      } else r = i.apply(this, arguments)
      return Ls(this, r)
    }
  }
  function Bs(o, t) {
    for (
      ;
      !Object.prototype.hasOwnProperty.call(o, t) && ((o = ht(o)), o !== null);

    );
    return o
  }
  function St(o, t, e) {
    return (
      typeof Reflect < 'u' && Reflect.get
        ? (St = Reflect.get)
        : (St = function (r, n, s) {
            var a = Bs(r, n)
            if (!!a) {
              var c = Object.getOwnPropertyDescriptor(a, n)
              return c.get ? c.get.call(s) : c.value
            }
          }),
      St(o, t, e || o)
    )
  }
  function oe(o, t) {
    return Fs(o) || Ns(o, t) || Ur(o, t) || Vs()
  }
  function Is(o) {
    return zs(o) || Ws(o) || Ur(o) || Ys()
  }
  function zs(o) {
    if (Array.isArray(o)) return Li(o)
  }
  function Fs(o) {
    if (Array.isArray(o)) return o
  }
  function Ws(o) {
    if (typeof Symbol < 'u' && Symbol.iterator in Object(o))
      return Array.from(o)
  }
  function Ns(o, t) {
    if (!(typeof Symbol > 'u' || !(Symbol.iterator in Object(o)))) {
      var e = [],
        i = !0,
        r = !1,
        n = void 0
      try {
        for (
          var s = o[Symbol.iterator](), a;
          !(i = (a = s.next()).done) &&
          (e.push(a.value), !(t && e.length === t));
          i = !0
        );
      } catch (c) {
        ;(r = !0), (n = c)
      } finally {
        try {
          !i && s.return != null && s.return()
        } finally {
          if (r) throw n
        }
      }
      return e
    }
  }
  function Ur(o, t) {
    if (!!o) {
      if (typeof o == 'string') return Li(o, t)
      var e = Object.prototype.toString.call(o).slice(8, -1)
      if (
        (e === 'Object' && o.constructor && (e = o.constructor.name),
        e === 'Map' || e === 'Set')
      )
        return Array.from(o)
      if (
        e === 'Arguments' ||
        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)
      )
        return Li(o, t)
    }
  }
  function Li(o, t) {
    ;(t == null || t > o.length) && (t = o.length)
    for (var e = 0, i = new Array(t); e < t; e++) i[e] = o[e]
    return i
  }
  function Ys() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
  }
  function Vs() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
  }
  var ae = {
      el: document,
      name: 'scroll',
      offset: [0, 0],
      repeat: !1,
      smooth: !1,
      initPosition: { x: 0, y: 0 },
      direction: 'vertical',
      gestureDirection: 'vertical',
      reloadOnContextChange: !1,
      lerp: 0.1,
      class: 'is-inview',
      scrollbarContainer: !1,
      scrollbarClass: 'c-scrollbar',
      scrollingClass: 'has-scroll-scrolling',
      draggingClass: 'has-scroll-dragging',
      smoothClass: 'has-scroll-smooth',
      initClass: 'has-scroll-init',
      getSpeed: !1,
      getDirection: !1,
      scrollFromAnywhere: !1,
      multiplier: 1,
      firefoxMultiplier: 50,
      touchMultiplier: 2,
      resetNativeScroll: !0,
      tablet: {
        smooth: !1,
        direction: 'vertical',
        gestureDirection: 'vertical',
        breakpoint: 1024,
      },
      smartphone: {
        smooth: !1,
        direction: 'vertical',
        gestureDirection: 'vertical',
      },
    },
    Xr = (function () {
      function o() {
        var t =
          arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}
        Ve(this, o),
          Object.assign(this, ae, t),
          (this.smartphone = ae.smartphone),
          t.smartphone && Object.assign(this.smartphone, t.smartphone),
          (this.tablet = ae.tablet),
          t.tablet && Object.assign(this.tablet, t.tablet),
          (this.namespace = 'locomotive'),
          (this.html = document.documentElement),
          (this.windowHeight = window.innerHeight),
          (this.windowWidth = window.innerWidth),
          (this.windowMiddle = {
            x: this.windowWidth / 2,
            y: this.windowHeight / 2,
          }),
          (this.els = {}),
          (this.currentElements = {}),
          (this.listeners = {}),
          (this.hasScrollTicking = !1),
          (this.hasCallEventSet = !1),
          (this.checkScroll = this.checkScroll.bind(this)),
          (this.checkResize = this.checkResize.bind(this)),
          (this.checkEvent = this.checkEvent.bind(this)),
          (this.instance = {
            scroll: { x: 0, y: 0 },
            limit: { x: this.html.offsetWidth, y: this.html.offsetHeight },
            currentElements: this.currentElements,
          }),
          this.isMobile
            ? this.isTablet
              ? (this.context = 'tablet')
              : (this.context = 'smartphone')
            : (this.context = 'desktop'),
          this.isMobile && (this.direction = this[this.context].direction),
          this.direction === 'horizontal'
            ? (this.directionAxis = 'x')
            : (this.directionAxis = 'y'),
          this.getDirection && (this.instance.direction = null),
          this.getDirection && (this.instance.speed = 0),
          this.html.classList.add(this.initClass),
          window.addEventListener('resize', this.checkResize, !1)
      }
      return (
        He(o, [
          {
            key: 'init',
            value: function () {
              this.initEvents()
            },
          },
          {
            key: 'checkScroll',
            value: function () {
              this.dispatchScroll()
            },
          },
          {
            key: 'checkResize',
            value: function () {
              var e = this
              this.resizeTick ||
                ((this.resizeTick = !0),
                requestAnimationFrame(function () {
                  e.resize(), (e.resizeTick = !1)
                }))
            },
          },
          { key: 'resize', value: function () {} },
          {
            key: 'checkContext',
            value: function () {
              if (!!this.reloadOnContextChange) {
                ;(this.isMobile =
                  /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                    navigator.userAgent,
                  ) ||
                  (navigator.platform === 'MacIntel' &&
                    navigator.maxTouchPoints > 1) ||
                  this.windowWidth < this.tablet.breakpoint),
                  (this.isTablet =
                    this.isMobile && this.windowWidth >= this.tablet.breakpoint)
                var e = this.context
                if (
                  (this.isMobile
                    ? this.isTablet
                      ? (this.context = 'tablet')
                      : (this.context = 'smartphone')
                    : (this.context = 'desktop'),
                  e != this.context)
                ) {
                  var i = e == 'desktop' ? this.smooth : this[e].smooth,
                    r =
                      this.context == 'desktop'
                        ? this.smooth
                        : this[this.context].smooth
                  i != r && window.location.reload()
                }
              }
            },
          },
          {
            key: 'initEvents',
            value: function () {
              var e = this
              ;(this.scrollToEls = this.el.querySelectorAll(
                '[data-'.concat(this.name, '-to]'),
              )),
                (this.setScrollTo = this.setScrollTo.bind(this)),
                this.scrollToEls.forEach(function (i) {
                  i.addEventListener('click', e.setScrollTo, !1)
                })
            },
          },
          {
            key: 'setScrollTo',
            value: function (e) {
              e.preventDefault(),
                this.scrollTo(
                  e.currentTarget.getAttribute(
                    'data-'.concat(this.name, '-href'),
                  ) || e.currentTarget.getAttribute('href'),
                  {
                    offset: e.currentTarget.getAttribute(
                      'data-'.concat(this.name, '-offset'),
                    ),
                  },
                )
            },
          },
          { key: 'addElements', value: function () {} },
          {
            key: 'detectElements',
            value: function (e) {
              var i = this,
                r = this.instance.scroll.y,
                n = r + this.windowHeight,
                s = this.instance.scroll.x,
                a = s + this.windowWidth
              Object.entries(this.els).forEach(function (c) {
                var l = oe(c, 2),
                  h = l[0],
                  f = l[1]
                if (
                  (f &&
                    (!f.inView || e) &&
                    (i.direction === 'horizontal'
                      ? a >= f.left && s < f.right && i.setInView(f, h)
                      : n >= f.top && r < f.bottom && i.setInView(f, h)),
                  f && f.inView)
                )
                  if (i.direction === 'horizontal') {
                    var d = f.right - f.left
                    ;(f.progress =
                      (i.instance.scroll.x - (f.left - i.windowWidth)) /
                      (d + i.windowWidth)),
                      (a < f.left || s > f.right) && i.setOutOfView(f, h)
                  } else {
                    var u = f.bottom - f.top
                    ;(f.progress =
                      (i.instance.scroll.y - (f.top - i.windowHeight)) /
                      (u + i.windowHeight)),
                      (n < f.top || r > f.bottom) && i.setOutOfView(f, h)
                  }
              }),
                (this.hasScrollTicking = !1)
            },
          },
          {
            key: 'setInView',
            value: function (e, i) {
              ;(this.els[i].inView = !0),
                e.el.classList.add(e.class),
                (this.currentElements[i] = e),
                e.call &&
                  this.hasCallEventSet &&
                  (this.dispatchCall(e, 'enter'),
                  e.repeat || (this.els[i].call = !1))
            },
          },
          {
            key: 'setOutOfView',
            value: function (e, i) {
              var r = this
              ;(this.els[i].inView = !1),
                Object.keys(this.currentElements).forEach(function (n) {
                  n === i && delete r.currentElements[n]
                }),
                e.call && this.hasCallEventSet && this.dispatchCall(e, 'exit'),
                e.repeat && e.el.classList.remove(e.class)
            },
          },
          {
            key: 'dispatchCall',
            value: function (e, i) {
              ;(this.callWay = i),
                (this.callValue = e.call.split(',').map(function (n) {
                  return n.trim()
                })),
                (this.callObj = e),
                this.callValue.length == 1 &&
                  (this.callValue = this.callValue[0])
              var r = new Event(this.namespace + 'call')
              this.el.dispatchEvent(r)
            },
          },
          {
            key: 'dispatchScroll',
            value: function () {
              var e = new Event(this.namespace + 'scroll')
              this.el.dispatchEvent(e)
            },
          },
          {
            key: 'setEvents',
            value: function (e, i) {
              this.listeners[e] || (this.listeners[e] = [])
              var r = this.listeners[e]
              r.push(i),
                r.length === 1 &&
                  this.el.addEventListener(
                    this.namespace + e,
                    this.checkEvent,
                    !1,
                  ),
                e === 'call' &&
                  ((this.hasCallEventSet = !0), this.detectElements(!0))
            },
          },
          {
            key: 'unsetEvents',
            value: function (e, i) {
              if (!!this.listeners[e]) {
                var r = this.listeners[e],
                  n = r.indexOf(i)
                n < 0 ||
                  (r.splice(n, 1),
                  r.index === 0 &&
                    this.el.removeEventListener(
                      this.namespace + e,
                      this.checkEvent,
                      !1,
                    ))
              }
            },
          },
          {
            key: 'checkEvent',
            value: function (e) {
              var i = this,
                r = e.type.replace(this.namespace, ''),
                n = this.listeners[r]
              !n ||
                n.length === 0 ||
                n.forEach(function (s) {
                  switch (r) {
                    case 'scroll':
                      return s(i.instance)
                    case 'call':
                      return s(i.callValue, i.callWay, i.callObj)
                    default:
                      return s()
                  }
                })
            },
          },
          { key: 'startScroll', value: function () {} },
          { key: 'stopScroll', value: function () {} },
          {
            key: 'setScroll',
            value: function (e, i) {
              this.instance.scroll = { x: 0, y: 0 }
            },
          },
          {
            key: 'destroy',
            value: function () {
              var e = this
              window.removeEventListener('resize', this.checkResize, !1),
                Object.keys(this.listeners).forEach(function (i) {
                  e.el.removeEventListener(e.namespace + i, e.checkEvent, !1)
                }),
                (this.listeners = {}),
                this.scrollToEls.forEach(function (i) {
                  i.removeEventListener('click', e.setScrollTo, !1)
                }),
                this.html.classList.remove(this.initClass)
            },
          },
        ]),
        o
      )
    })(),
    Hs =
      typeof globalThis < 'u'
        ? globalThis
        : typeof window < 'u'
        ? window
        : typeof global < 'u'
        ? global
        : typeof self < 'u'
        ? self
        : {}
  function qr(o, t) {
    return (t = { exports: {} }), o(t, t.exports), t.exports
  }
  var Gr = qr(function (o, t) {
      ;(function () {
        function e() {
          var i = window,
            r = document
          if (
            'scrollBehavior' in r.documentElement.style &&
            i.__forceSmoothScrollPolyfill__ !== !0
          )
            return
          var n = i.HTMLElement || i.Element,
            s = 468,
            a = {
              scroll: i.scroll || i.scrollTo,
              scrollBy: i.scrollBy,
              elementScroll: n.prototype.scroll || f,
              scrollIntoView: n.prototype.scrollIntoView,
            },
            c =
              i.performance && i.performance.now
                ? i.performance.now.bind(i.performance)
                : Date.now
          function l(m) {
            var g = ['MSIE ', 'Trident/', 'Edge/']
            return new RegExp(g.join('|')).test(m)
          }
          var h = l(i.navigator.userAgent) ? 1 : 0
          function f(m, g) {
            ;(this.scrollLeft = m), (this.scrollTop = g)
          }
          function d(m) {
            return 0.5 * (1 - Math.cos(Math.PI * m))
          }
          function u(m) {
            if (
              m === null ||
              typeof m != 'object' ||
              m.behavior === void 0 ||
              m.behavior === 'auto' ||
              m.behavior === 'instant'
            )
              return !0
            if (typeof m == 'object' && m.behavior === 'smooth') return !1
            throw new TypeError(
              'behavior member of ScrollOptions ' +
                m.behavior +
                ' is not a valid value for enumeration ScrollBehavior.',
            )
          }
          function _(m, g) {
            if (g === 'Y') return m.clientHeight + h < m.scrollHeight
            if (g === 'X') return m.clientWidth + h < m.scrollWidth
          }
          function p(m, g) {
            var w = i.getComputedStyle(m, null)['overflow' + g]
            return w === 'auto' || w === 'scroll'
          }
          function y(m) {
            var g = _(m, 'Y') && p(m, 'Y'),
              w = _(m, 'X') && p(m, 'X')
            return g || w
          }
          function v(m) {
            for (; m !== r.body && y(m) === !1; ) m = m.parentNode || m.host
            return m
          }
          function T(m) {
            var g = c(),
              w,
              S,
              k,
              x = (g - m.startTime) / s
            ;(x = x > 1 ? 1 : x),
              (w = d(x)),
              (S = m.startX + (m.x - m.startX) * w),
              (k = m.startY + (m.y - m.startY) * w),
              m.method.call(m.scrollable, S, k),
              (S !== m.x || k !== m.y) && i.requestAnimationFrame(T.bind(i, m))
          }
          function b(m, g, w) {
            var S,
              k,
              x,
              O,
              C = c()
            m === r.body
              ? ((S = i),
                (k = i.scrollX || i.pageXOffset),
                (x = i.scrollY || i.pageYOffset),
                (O = a.scroll))
              : ((S = m), (k = m.scrollLeft), (x = m.scrollTop), (O = f)),
              T({
                scrollable: S,
                method: O,
                startTime: C,
                startX: k,
                startY: x,
                x: g,
                y: w,
              })
          }
          ;(i.scroll = i.scrollTo =
            function () {
              if (arguments[0] !== void 0) {
                if (u(arguments[0]) === !0) {
                  a.scroll.call(
                    i,
                    arguments[0].left !== void 0
                      ? arguments[0].left
                      : typeof arguments[0] != 'object'
                      ? arguments[0]
                      : i.scrollX || i.pageXOffset,
                    arguments[0].top !== void 0
                      ? arguments[0].top
                      : arguments[1] !== void 0
                      ? arguments[1]
                      : i.scrollY || i.pageYOffset,
                  )
                  return
                }
                b.call(
                  i,
                  r.body,
                  arguments[0].left !== void 0
                    ? ~~arguments[0].left
                    : i.scrollX || i.pageXOffset,
                  arguments[0].top !== void 0
                    ? ~~arguments[0].top
                    : i.scrollY || i.pageYOffset,
                )
              }
            }),
            (i.scrollBy = function () {
              if (arguments[0] !== void 0) {
                if (u(arguments[0])) {
                  a.scrollBy.call(
                    i,
                    arguments[0].left !== void 0
                      ? arguments[0].left
                      : typeof arguments[0] != 'object'
                      ? arguments[0]
                      : 0,
                    arguments[0].top !== void 0
                      ? arguments[0].top
                      : arguments[1] !== void 0
                      ? arguments[1]
                      : 0,
                  )
                  return
                }
                b.call(
                  i,
                  r.body,
                  ~~arguments[0].left + (i.scrollX || i.pageXOffset),
                  ~~arguments[0].top + (i.scrollY || i.pageYOffset),
                )
              }
            }),
            (n.prototype.scroll = n.prototype.scrollTo =
              function () {
                if (arguments[0] !== void 0) {
                  if (u(arguments[0]) === !0) {
                    if (
                      typeof arguments[0] == 'number' &&
                      arguments[1] === void 0
                    )
                      throw new SyntaxError('Value could not be converted')
                    a.elementScroll.call(
                      this,
                      arguments[0].left !== void 0
                        ? ~~arguments[0].left
                        : typeof arguments[0] != 'object'
                        ? ~~arguments[0]
                        : this.scrollLeft,
                      arguments[0].top !== void 0
                        ? ~~arguments[0].top
                        : arguments[1] !== void 0
                        ? ~~arguments[1]
                        : this.scrollTop,
                    )
                    return
                  }
                  var m = arguments[0].left,
                    g = arguments[0].top
                  b.call(
                    this,
                    this,
                    typeof m > 'u' ? this.scrollLeft : ~~m,
                    typeof g > 'u' ? this.scrollTop : ~~g,
                  )
                }
              }),
            (n.prototype.scrollBy = function () {
              if (arguments[0] !== void 0) {
                if (u(arguments[0]) === !0) {
                  a.elementScroll.call(
                    this,
                    arguments[0].left !== void 0
                      ? ~~arguments[0].left + this.scrollLeft
                      : ~~arguments[0] + this.scrollLeft,
                    arguments[0].top !== void 0
                      ? ~~arguments[0].top + this.scrollTop
                      : ~~arguments[1] + this.scrollTop,
                  )
                  return
                }
                this.scroll({
                  left: ~~arguments[0].left + this.scrollLeft,
                  top: ~~arguments[0].top + this.scrollTop,
                  behavior: arguments[0].behavior,
                })
              }
            }),
            (n.prototype.scrollIntoView = function () {
              if (u(arguments[0]) === !0) {
                a.scrollIntoView.call(
                  this,
                  arguments[0] === void 0 ? !0 : arguments[0],
                )
                return
              }
              var m = v(this),
                g = m.getBoundingClientRect(),
                w = this.getBoundingClientRect()
              m !== r.body
                ? (b.call(
                    this,
                    m,
                    m.scrollLeft + w.left - g.left,
                    m.scrollTop + w.top - g.top,
                  ),
                  i.getComputedStyle(m).position !== 'fixed' &&
                    i.scrollBy({
                      left: g.left,
                      top: g.top,
                      behavior: 'smooth',
                    }))
                : i.scrollBy({ left: w.left, top: w.top, behavior: 'smooth' })
            })
        }
        o.exports = { polyfill: e }
      })()
    }),
    qo = Gr.polyfill,
    js = (function (o) {
      Vr(e, o)
      var t = jr(e)
      function e() {
        var i,
          r =
            arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}
        return (
          Ve(this, e),
          (i = t.call(this, r)),
          i.resetNativeScroll &&
            (history.scrollRestoration &&
              (history.scrollRestoration = 'manual'),
            window.scrollTo(0, 0)),
          window.addEventListener('scroll', i.checkScroll, !1),
          window.smoothscrollPolyfill === void 0 &&
            ((window.smoothscrollPolyfill = Gr),
            window.smoothscrollPolyfill.polyfill()),
          i
        )
      }
      return (
        He(e, [
          {
            key: 'init',
            value: function () {
              ;(this.instance.scroll.y = window.pageYOffset),
                this.addElements(),
                this.detectElements(),
                St(ht(e.prototype), 'init', this).call(this)
            },
          },
          {
            key: 'checkScroll',
            value: function () {
              var r = this
              St(ht(e.prototype), 'checkScroll', this).call(this),
                this.getDirection && this.addDirection(),
                this.getSpeed && (this.addSpeed(), (this.speedTs = Date.now())),
                (this.instance.scroll.y = window.pageYOffset),
                Object.entries(this.els).length &&
                  (this.hasScrollTicking ||
                    (requestAnimationFrame(function () {
                      r.detectElements()
                    }),
                    (this.hasScrollTicking = !0)))
            },
          },
          {
            key: 'addDirection',
            value: function () {
              window.pageYOffset > this.instance.scroll.y
                ? this.instance.direction !== 'down' &&
                  (this.instance.direction = 'down')
                : window.pageYOffset < this.instance.scroll.y &&
                  this.instance.direction !== 'up' &&
                  (this.instance.direction = 'up')
            },
          },
          {
            key: 'addSpeed',
            value: function () {
              window.pageYOffset != this.instance.scroll.y
                ? (this.instance.speed =
                    (window.pageYOffset - this.instance.scroll.y) /
                    Math.max(1, Date.now() - this.speedTs))
                : (this.instance.speed = 0)
            },
          },
          {
            key: 'resize',
            value: function () {
              Object.entries(this.els).length &&
                ((this.windowHeight = window.innerHeight),
                this.updateElements())
            },
          },
          {
            key: 'addElements',
            value: function () {
              var r = this
              this.els = {}
              var n = this.el.querySelectorAll('[data-' + this.name + ']')
              n.forEach(function (s, a) {
                var c = s.getBoundingClientRect(),
                  l = s.dataset[r.name + 'Class'] || r.class,
                  h =
                    typeof s.dataset[r.name + 'Id'] == 'string'
                      ? s.dataset[r.name + 'Id']
                      : a,
                  f,
                  d,
                  u =
                    typeof s.dataset[r.name + 'Offset'] == 'string'
                      ? s.dataset[r.name + 'Offset'].split(',')
                      : r.offset,
                  _ = s.dataset[r.name + 'Repeat'],
                  p = s.dataset[r.name + 'Call'],
                  y = s.dataset[r.name + 'Target'],
                  v
                y !== void 0
                  ? (v = document.querySelector(''.concat(y)))
                  : (v = s)
                var T = v.getBoundingClientRect()
                ;(f = T.top + r.instance.scroll.y),
                  (d = T.left + r.instance.scroll.x)
                var b = f + v.offsetHeight,
                  m = d + v.offsetWidth
                _ == 'false' ? (_ = !1) : _ != null ? (_ = !0) : (_ = r.repeat)
                var g = r.getRelativeOffset(u)
                ;(f = f + g[0]), (b = b - g[1])
                var w = {
                  el: s,
                  targetEl: v,
                  id: h,
                  class: l,
                  top: f,
                  bottom: b,
                  left: d,
                  right: m,
                  offset: u,
                  progress: 0,
                  repeat: _,
                  inView: !1,
                  call: p,
                }
                ;(r.els[h] = w),
                  s.classList.contains(l) && r.setInView(r.els[h], h)
              })
            },
          },
          {
            key: 'updateElements',
            value: function () {
              var r = this
              Object.entries(this.els).forEach(function (n) {
                var s = oe(n, 2),
                  a = s[0],
                  c = s[1],
                  l =
                    c.targetEl.getBoundingClientRect().top +
                    r.instance.scroll.y,
                  h = l + c.targetEl.offsetHeight,
                  f = r.getRelativeOffset(c.offset)
                ;(r.els[a].top = l + f[0]), (r.els[a].bottom = h - f[1])
              }),
                (this.hasScrollTicking = !1)
            },
          },
          {
            key: 'getRelativeOffset',
            value: function (r) {
              var n = [0, 0]
              if (r)
                for (var s = 0; s < r.length; s++)
                  typeof r[s] == 'string'
                    ? r[s].includes('%')
                      ? (n[s] = parseInt(
                          (r[s].replace('%', '') * this.windowHeight) / 100,
                        ))
                      : (n[s] = parseInt(r[s]))
                    : (n[s] = r[s])
              return n
            },
          },
          {
            key: 'scrollTo',
            value: function (r) {
              var n =
                  arguments.length > 1 && arguments[1] !== void 0
                    ? arguments[1]
                    : {},
                s = parseInt(n.offset) || 0,
                a = n.callback ? n.callback : !1
              if (typeof r == 'string') {
                if (r === 'top') r = this.html
                else if (r === 'bottom')
                  r = this.html.offsetHeight - window.innerHeight
                else if (((r = document.querySelector(r)), !r)) return
              } else if (typeof r == 'number') r = parseInt(r)
              else if (!(r && r.tagName)) {
                console.warn('`target` parameter is not valid')
                return
              }
              typeof r != 'number'
                ? (s =
                    r.getBoundingClientRect().top + s + this.instance.scroll.y)
                : (s = r + s)
              var c = function () {
                return parseInt(window.pageYOffset) === parseInt(s)
              }
              if (a)
                if (c()) {
                  a()
                  return
                } else {
                  var l = function h() {
                    c() && (window.removeEventListener('scroll', h), a())
                  }
                  window.addEventListener('scroll', l)
                }
              window.scrollTo({
                top: s,
                behavior: n.duration === 0 ? 'auto' : 'smooth',
              })
            },
          },
          {
            key: 'update',
            value: function () {
              this.addElements(), this.detectElements()
            },
          },
          {
            key: 'destroy',
            value: function () {
              St(ht(e.prototype), 'destroy', this).call(this),
                window.removeEventListener('scroll', this.checkScroll, !1)
            },
          },
        ]),
        e
      )
    })(Xr)
  var Yr = Object.getOwnPropertySymbols,
    Us = Object.prototype.hasOwnProperty,
    Xs = Object.prototype.propertyIsEnumerable
  function qs(o) {
    if (o == null)
      throw new TypeError(
        'Object.assign cannot be called with null or undefined',
      )
    return Object(o)
  }
  function Gs() {
    try {
      if (!Object.assign) return !1
      var o = new String('abc')
      if (((o[5] = 'de'), Object.getOwnPropertyNames(o)[0] === '5')) return !1
      for (var t = {}, e = 0; e < 10; e++) t['_' + String.fromCharCode(e)] = e
      var i = Object.getOwnPropertyNames(t).map(function (n) {
        return t[n]
      })
      if (i.join('') !== '0123456789') return !1
      var r = {}
      return (
        'abcdefghijklmnopqrst'.split('').forEach(function (n) {
          r[n] = n
        }),
        Object.keys(Object.assign({}, r)).join('') === 'abcdefghijklmnopqrst'
      )
    } catch {
      return !1
    }
  }
  var Ks = Gs()
    ? Object.assign
    : function (o, t) {
        for (var e, i = qs(o), r, n = 1; n < arguments.length; n++) {
          e = Object(arguments[n])
          for (var s in e) Us.call(e, s) && (i[s] = e[s])
          if (Yr) {
            r = Yr(e)
            for (var a = 0; a < r.length; a++)
              Xs.call(e, r[a]) && (i[r[a]] = e[r[a]])
          }
        }
        return i
      }
  function Kr() {}
  Kr.prototype = {
    on: function (o, t, e) {
      var i = this.e || (this.e = {})
      return (i[o] || (i[o] = [])).push({ fn: t, ctx: e }), this
    },
    once: function (o, t, e) {
      var i = this
      function r() {
        i.off(o, r), t.apply(e, arguments)
      }
      return (r._ = t), this.on(o, r, e)
    },
    emit: function (o) {
      var t = [].slice.call(arguments, 1),
        e = ((this.e || (this.e = {}))[o] || []).slice(),
        i = 0,
        r = e.length
      for (i; i < r; i++) e[i].fn.apply(e[i].ctx, t)
      return this
    },
    off: function (o, t) {
      var e = this.e || (this.e = {}),
        i = e[o],
        r = []
      if (i && t)
        for (var n = 0, s = i.length; n < s; n++)
          i[n].fn !== t && i[n].fn._ !== t && r.push(i[n])
      return r.length ? (e[o] = r) : delete e[o], this
    },
  }
  var Qs = Kr,
    $s = qr(function (o, t) {
      ;(function () {
        var e
        ;(e = t !== null ? t : this),
          (e.Lethargy = (function () {
            function i(r, n, s, a) {
              ;(this.stability = r != null ? Math.abs(r) : 8),
                (this.sensitivity = n != null ? 1 + Math.abs(n) : 100),
                (this.tolerance = s != null ? 1 + Math.abs(s) : 1.1),
                (this.delay = a ?? 150),
                (this.lastUpDeltas = function () {
                  var c, l, h
                  for (
                    h = [], c = 1, l = this.stability * 2;
                    1 <= l ? c <= l : c >= l;
                    1 <= l ? c++ : c--
                  )
                    h.push(null)
                  return h
                }.call(this)),
                (this.lastDownDeltas = function () {
                  var c, l, h
                  for (
                    h = [], c = 1, l = this.stability * 2;
                    1 <= l ? c <= l : c >= l;
                    1 <= l ? c++ : c--
                  )
                    h.push(null)
                  return h
                }.call(this)),
                (this.deltasTimestamp = function () {
                  var c, l, h
                  for (
                    h = [], c = 1, l = this.stability * 2;
                    1 <= l ? c <= l : c >= l;
                    1 <= l ? c++ : c--
                  )
                    h.push(null)
                  return h
                }.call(this))
            }
            return (
              (i.prototype.check = function (r) {
                var n
                return (
                  (r = r.originalEvent || r),
                  r.wheelDelta != null
                    ? (n = r.wheelDelta)
                    : r.deltaY != null
                    ? (n = r.deltaY * -40)
                    : (r.detail != null || r.detail === 0) &&
                      (n = r.detail * -40),
                  this.deltasTimestamp.push(Date.now()),
                  this.deltasTimestamp.shift(),
                  n > 0
                    ? (this.lastUpDeltas.push(n),
                      this.lastUpDeltas.shift(),
                      this.isInertia(1))
                    : (this.lastDownDeltas.push(n),
                      this.lastDownDeltas.shift(),
                      this.isInertia(-1))
                )
              }),
              (i.prototype.isInertia = function (r) {
                var n, s, a, c, l, h, f
                return (
                  (n = r === -1 ? this.lastDownDeltas : this.lastUpDeltas),
                  n[0] === null
                    ? r
                    : this.deltasTimestamp[this.stability * 2 - 2] +
                        this.delay >
                        Date.now() && n[0] === n[this.stability * 2 - 1]
                    ? !1
                    : ((a = n.slice(0, this.stability)),
                      (s = n.slice(this.stability, this.stability * 2)),
                      (f = a.reduce(function (d, u) {
                        return d + u
                      })),
                      (l = s.reduce(function (d, u) {
                        return d + u
                      })),
                      (h = f / a.length),
                      (c = l / s.length),
                      Math.abs(h) < Math.abs(c * this.tolerance) &&
                      this.sensitivity < Math.abs(c)
                        ? r
                        : !1)
                )
              }),
              (i.prototype.showLastUpDeltas = function () {
                return this.lastUpDeltas
              }),
              (i.prototype.showLastDownDeltas = function () {
                return this.lastDownDeltas
              }),
              i
            )
          })())
      }.call(Hs))
    }),
    et = (function () {
      return {
        hasWheelEvent: 'onwheel' in document,
        hasMouseWheelEvent: 'onmousewheel' in document,
        hasTouch:
          'ontouchstart' in window ||
          window.TouchEvent ||
          (window.DocumentTouch && document instanceof DocumentTouch),
        hasTouchWin:
          navigator.msMaxTouchPoints && navigator.msMaxTouchPoints > 1,
        hasPointer: !!window.navigator.msPointerEnabled,
        hasKeyDown: 'onkeydown' in document,
        isFirefox: navigator.userAgent.indexOf('Firefox') > -1,
      }
    })(),
    Zs = Object.prototype.toString,
    Js = Object.prototype.hasOwnProperty,
    to = function (o) {
      if (!o) return console.warn('bindAll requires at least one argument.')
      var t = Array.prototype.slice.call(arguments, 1)
      if (t.length === 0)
        for (var e in o)
          Js.call(o, e) &&
            typeof o[e] == 'function' &&
            Zs.call(o[e]) == '[object Function]' &&
            t.push(e)
      for (var i = 0; i < t.length; i++) {
        var r = t[i]
        o[r] = eo(o[r], o)
      }
    }
  function eo(o, t) {
    return function () {
      return o.apply(t, arguments)
    }
  }
  var io = $s.Lethargy,
    Kt = 'virtualscroll',
    ro = it,
    xe = { LEFT: 37, UP: 38, RIGHT: 39, DOWN: 40, SPACE: 32 }
  function it(o) {
    to(
      this,
      '_onWheel',
      '_onMouseWheel',
      '_onTouchStart',
      '_onTouchMove',
      '_onKeyDown',
    ),
      (this.el = window),
      o && o.el && ((this.el = o.el), delete o.el),
      (this.options = Ks(
        {
          mouseMultiplier: 1,
          touchMultiplier: 2,
          firefoxMultiplier: 15,
          keyStep: 120,
          preventTouch: !1,
          unpreventTouchClass: 'vs-touchmove-allowed',
          limitInertia: !1,
          useKeyboard: !0,
          useTouch: !0,
        },
        o,
      )),
      this.options.limitInertia && (this._lethargy = new io()),
      (this._emitter = new Qs()),
      (this._event = { y: 0, x: 0, deltaX: 0, deltaY: 0 }),
      (this.touchStartX = null),
      (this.touchStartY = null),
      (this.bodyTouchAction = null),
      this.options.passive !== void 0 &&
        (this.listenerOptions = { passive: this.options.passive })
  }
  it.prototype._notify = function (o) {
    var t = this._event
    ;(t.x += t.deltaX),
      (t.y += t.deltaY),
      this._emitter.emit(Kt, {
        x: t.x,
        y: t.y,
        deltaX: t.deltaX,
        deltaY: t.deltaY,
        originalEvent: o,
      })
  }
  it.prototype._onWheel = function (o) {
    var t = this.options
    if (!(this._lethargy && this._lethargy.check(o) === !1)) {
      var e = this._event
      ;(e.deltaX = o.wheelDeltaX || o.deltaX * -1),
        (e.deltaY = o.wheelDeltaY || o.deltaY * -1),
        et.isFirefox &&
          o.deltaMode == 1 &&
          ((e.deltaX *= t.firefoxMultiplier),
          (e.deltaY *= t.firefoxMultiplier)),
        (e.deltaX *= t.mouseMultiplier),
        (e.deltaY *= t.mouseMultiplier),
        this._notify(o)
    }
  }
  it.prototype._onMouseWheel = function (o) {
    if (!(this.options.limitInertia && this._lethargy.check(o) === !1)) {
      var t = this._event
      ;(t.deltaX = o.wheelDeltaX ? o.wheelDeltaX : 0),
        (t.deltaY = o.wheelDeltaY ? o.wheelDeltaY : o.wheelDelta),
        this._notify(o)
    }
  }
  it.prototype._onTouchStart = function (o) {
    var t = o.targetTouches ? o.targetTouches[0] : o
    ;(this.touchStartX = t.pageX), (this.touchStartY = t.pageY)
  }
  it.prototype._onTouchMove = function (o) {
    var t = this.options
    t.preventTouch &&
      !o.target.classList.contains(t.unpreventTouchClass) &&
      o.preventDefault()
    var e = this._event,
      i = o.targetTouches ? o.targetTouches[0] : o
    ;(e.deltaX = (i.pageX - this.touchStartX) * t.touchMultiplier),
      (e.deltaY = (i.pageY - this.touchStartY) * t.touchMultiplier),
      (this.touchStartX = i.pageX),
      (this.touchStartY = i.pageY),
      this._notify(o)
  }
  it.prototype._onKeyDown = function (o) {
    var t = this._event
    t.deltaX = t.deltaY = 0
    var e = window.innerHeight - 40
    switch (o.keyCode) {
      case xe.LEFT:
      case xe.UP:
        t.deltaY = this.options.keyStep
        break
      case xe.RIGHT:
      case xe.DOWN:
        t.deltaY = -this.options.keyStep
        break
      case o.shiftKey:
        t.deltaY = e
        break
      case xe.SPACE:
        t.deltaY = -e
        break
      default:
        return
    }
    this._notify(o)
  }
  it.prototype._bind = function () {
    et.hasWheelEvent &&
      this.el.addEventListener('wheel', this._onWheel, this.listenerOptions),
      et.hasMouseWheelEvent &&
        this.el.addEventListener(
          'mousewheel',
          this._onMouseWheel,
          this.listenerOptions,
        ),
      et.hasTouch &&
        this.options.useTouch &&
        (this.el.addEventListener(
          'touchstart',
          this._onTouchStart,
          this.listenerOptions,
        ),
        this.el.addEventListener(
          'touchmove',
          this._onTouchMove,
          this.listenerOptions,
        )),
      et.hasPointer &&
        et.hasTouchWin &&
        ((this.bodyTouchAction = document.body.style.msTouchAction),
        (document.body.style.msTouchAction = 'none'),
        this.el.addEventListener('MSPointerDown', this._onTouchStart, !0),
        this.el.addEventListener('MSPointerMove', this._onTouchMove, !0)),
      et.hasKeyDown &&
        this.options.useKeyboard &&
        document.addEventListener('keydown', this._onKeyDown)
  }
  it.prototype._unbind = function () {
    et.hasWheelEvent && this.el.removeEventListener('wheel', this._onWheel),
      et.hasMouseWheelEvent &&
        this.el.removeEventListener('mousewheel', this._onMouseWheel),
      et.hasTouch &&
        (this.el.removeEventListener('touchstart', this._onTouchStart),
        this.el.removeEventListener('touchmove', this._onTouchMove)),
      et.hasPointer &&
        et.hasTouchWin &&
        ((document.body.style.msTouchAction = this.bodyTouchAction),
        this.el.removeEventListener('MSPointerDown', this._onTouchStart, !0),
        this.el.removeEventListener('MSPointerMove', this._onTouchMove, !0)),
      et.hasKeyDown &&
        this.options.useKeyboard &&
        document.removeEventListener('keydown', this._onKeyDown)
  }
  it.prototype.on = function (o, t) {
    this._emitter.on(Kt, o, t)
    var e = this._emitter.e
    e && e[Kt] && e[Kt].length === 1 && this._bind()
  }
  it.prototype.off = function (o, t) {
    this._emitter.off(Kt, o, t)
    var e = this._emitter.e
    ;(!e[Kt] || e[Kt].length <= 0) && this._unbind()
  }
  it.prototype.reset = function () {
    var o = this._event
    ;(o.x = 0), (o.y = 0)
  }
  it.prototype.destroy = function () {
    this._emitter.off(), this._unbind()
  }
  function Di(o, t, e) {
    return (1 - e) * o + e * t
  }
  function lt(o) {
    var t = {}
    if (!!window.getComputedStyle) {
      var e = getComputedStyle(o),
        i = e.transform || e.webkitTransform || e.mozTransform,
        r = i.match(/^matrix3d\((.+)\)$/)
      return (
        r
          ? ((t.x = r ? parseFloat(r[1].split(', ')[12]) : 0),
            (t.y = r ? parseFloat(r[1].split(', ')[13]) : 0))
          : ((r = i.match(/^matrix\((.+)\)$/)),
            (t.x = r ? parseFloat(r[1].split(', ')[4]) : 0),
            (t.y = r ? parseFloat(r[1].split(', ')[5]) : 0)),
        t
      )
    }
  }
  function Mi(o) {
    for (var t = []; o && o !== document; o = o.parentNode) t.push(o)
    return t
  }
  var no = 4,
    so = 0.001,
    oo = 1e-7,
    ao = 10,
    Se = 11,
    Ne = 1 / (Se - 1),
    lo = typeof Float32Array == 'function'
  function Qr(o, t) {
    return 1 - 3 * t + 3 * o
  }
  function $r(o, t) {
    return 3 * t - 6 * o
  }
  function Zr(o) {
    return 3 * o
  }
  function Ye(o, t, e) {
    return ((Qr(t, e) * o + $r(t, e)) * o + Zr(t)) * o
  }
  function Jr(o, t, e) {
    return 3 * Qr(t, e) * o * o + 2 * $r(t, e) * o + Zr(t)
  }
  function co(o, t, e, i, r) {
    var n,
      s,
      a = 0
    do (s = t + (e - t) / 2), (n = Ye(s, i, r) - o), n > 0 ? (e = s) : (t = s)
    while (Math.abs(n) > oo && ++a < ao)
    return s
  }
  function ho(o, t, e, i) {
    for (var r = 0; r < no; ++r) {
      var n = Jr(t, e, i)
      if (n === 0) return t
      var s = Ye(t, e, i) - o
      t -= s / n
    }
    return t
  }
  function uo(o) {
    return o
  }
  var fo = function (t, e, i, r) {
      if (!(0 <= t && t <= 1 && 0 <= i && i <= 1))
        throw new Error('bezier x values must be in [0, 1] range')
      if (t === e && i === r) return uo
      for (
        var n = lo ? new Float32Array(Se) : new Array(Se), s = 0;
        s < Se;
        ++s
      )
        n[s] = Ye(s * Ne, t, i)
      function a(c) {
        for (var l = 0, h = 1, f = Se - 1; h !== f && n[h] <= c; ++h) l += Ne
        --h
        var d = (c - n[h]) / (n[h + 1] - n[h]),
          u = l + d * Ne,
          _ = Jr(u, t, i)
        return _ >= so ? ho(c, u, t, i) : _ === 0 ? u : co(c, l, l + Ne, t, i)
      }
      return function (l) {
        return l === 0 ? 0 : l === 1 ? 1 : Ye(a(l), e, r)
      }
    },
    xt = {
      LEFT: 37,
      UP: 38,
      RIGHT: 39,
      DOWN: 40,
      SPACE: 32,
      TAB: 9,
      PAGEUP: 33,
      PAGEDOWN: 34,
      HOME: 36,
      END: 35,
    },
    po = (function (o) {
      Vr(e, o)
      var t = jr(e)
      function e() {
        var i,
          r =
            arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}
        return (
          Ve(this, e),
          history.scrollRestoration && (history.scrollRestoration = 'manual'),
          window.scrollTo(0, 0),
          (i = t.call(this, r)),
          i.inertia && (i.lerp = i.inertia * 0.1),
          (i.isScrolling = !1),
          (i.isDraggingScrollbar = !1),
          (i.isTicking = !1),
          (i.hasScrollTicking = !1),
          (i.parallaxElements = {}),
          (i.stop = !1),
          (i.scrollbarContainer = r.scrollbarContainer),
          (i.checkKey = i.checkKey.bind(Hr(i))),
          window.addEventListener('keydown', i.checkKey, !1),
          i
        )
      }
      return (
        He(e, [
          {
            key: 'init',
            value: function () {
              var r = this
              this.html.classList.add(this.smoothClass),
                this.html.setAttribute(
                  'data-'.concat(this.name, '-direction'),
                  this.direction,
                ),
                (this.instance = Ai(
                  {
                    delta: { x: this.initPosition.x, y: this.initPosition.y },
                    scroll: { x: this.initPosition.x, y: this.initPosition.y },
                  },
                  this.instance,
                )),
                (this.vs = new ro({
                  el: this.scrollFromAnywhere ? document : this.el,
                  mouseMultiplier:
                    navigator.platform.indexOf('Win') > -1 ? 1 : 0.4,
                  firefoxMultiplier: this.firefoxMultiplier,
                  touchMultiplier: this.touchMultiplier,
                  useKeyboard: !1,
                  passive: !0,
                })),
                this.vs.on(function (n) {
                  r.stop ||
                    r.isDraggingScrollbar ||
                    requestAnimationFrame(function () {
                      r.updateDelta(n), r.isScrolling || r.startScrolling()
                    })
                }),
                this.setScrollLimit(),
                this.initScrollBar(),
                this.addSections(),
                this.addElements(),
                this.checkScroll(!0),
                this.transformElements(!0, !0),
                St(ht(e.prototype), 'init', this).call(this)
            },
          },
          {
            key: 'setScrollLimit',
            value: function () {
              if (
                ((this.instance.limit.y =
                  this.el.offsetHeight - this.windowHeight),
                this.direction === 'horizontal')
              ) {
                for (var r = 0, n = this.el.children, s = 0; s < n.length; s++)
                  r += n[s].offsetWidth
                this.instance.limit.x = r - this.windowWidth
              }
            },
          },
          {
            key: 'startScrolling',
            value: function () {
              ;(this.startScrollTs = Date.now()),
                (this.isScrolling = !0),
                this.checkScroll(),
                this.html.classList.add(this.scrollingClass)
            },
          },
          {
            key: 'stopScrolling',
            value: function () {
              cancelAnimationFrame(this.checkScrollRaf),
                (this.startScrollTs = void 0),
                this.scrollToRaf &&
                  (cancelAnimationFrame(this.scrollToRaf),
                  (this.scrollToRaf = null)),
                (this.isScrolling = !1),
                (this.instance.scroll.y = Math.round(this.instance.scroll.y)),
                this.html.classList.remove(this.scrollingClass)
            },
          },
          {
            key: 'checkKey',
            value: function (r) {
              var n = this
              if (this.stop) {
                r.keyCode == xt.TAB &&
                  requestAnimationFrame(function () {
                    ;(n.html.scrollTop = 0),
                      (document.body.scrollTop = 0),
                      (n.html.scrollLeft = 0),
                      (document.body.scrollLeft = 0)
                  })
                return
              }
              switch (r.keyCode) {
                case xt.TAB:
                  requestAnimationFrame(function () {
                    ;(n.html.scrollTop = 0),
                      (document.body.scrollTop = 0),
                      (n.html.scrollLeft = 0),
                      (document.body.scrollLeft = 0),
                      n.scrollTo(document.activeElement, {
                        offset: -window.innerHeight / 2,
                      })
                  })
                  break
                case xt.UP:
                  this.isActiveElementScrollSensitive() &&
                    (this.instance.delta[this.directionAxis] -= 240)
                  break
                case xt.DOWN:
                  this.isActiveElementScrollSensitive() &&
                    (this.instance.delta[this.directionAxis] += 240)
                  break
                case xt.PAGEUP:
                  this.instance.delta[this.directionAxis] -= window.innerHeight
                  break
                case xt.PAGEDOWN:
                  this.instance.delta[this.directionAxis] += window.innerHeight
                  break
                case xt.HOME:
                  this.instance.delta[this.directionAxis] -=
                    this.instance.limit[this.directionAxis]
                  break
                case xt.END:
                  this.instance.delta[this.directionAxis] +=
                    this.instance.limit[this.directionAxis]
                  break
                case xt.SPACE:
                  this.isActiveElementScrollSensitive() &&
                    (r.shiftKey
                      ? (this.instance.delta[this.directionAxis] -=
                          window.innerHeight)
                      : (this.instance.delta[this.directionAxis] +=
                          window.innerHeight))
                  break
                default:
                  return
              }
              this.instance.delta[this.directionAxis] < 0 &&
                (this.instance.delta[this.directionAxis] = 0),
                this.instance.delta[this.directionAxis] >
                  this.instance.limit[this.directionAxis] &&
                  (this.instance.delta[this.directionAxis] =
                    this.instance.limit[this.directionAxis]),
                this.stopScrolling(),
                (this.isScrolling = !0),
                this.checkScroll(),
                this.html.classList.add(this.scrollingClass)
            },
          },
          {
            key: 'isActiveElementScrollSensitive',
            value: function () {
              return (
                !(document.activeElement instanceof HTMLInputElement) &&
                !(document.activeElement instanceof HTMLTextAreaElement) &&
                !(document.activeElement instanceof HTMLButtonElement) &&
                !(document.activeElement instanceof HTMLSelectElement)
              )
            },
          },
          {
            key: 'checkScroll',
            value: function () {
              var r = this,
                n =
                  arguments.length > 0 && arguments[0] !== void 0
                    ? arguments[0]
                    : !1
              if (n || this.isScrolling || this.isDraggingScrollbar) {
                this.hasScrollTicking ||
                  ((this.checkScrollRaf = requestAnimationFrame(function () {
                    return r.checkScroll()
                  })),
                  (this.hasScrollTicking = !0)),
                  this.updateScroll()
                var s = Math.abs(
                    this.instance.delta[this.directionAxis] -
                      this.instance.scroll[this.directionAxis],
                  ),
                  a = Date.now() - this.startScrollTs
                if (
                  (!this.animatingScroll &&
                    a > 100 &&
                    ((s < 0.5 &&
                      this.instance.delta[this.directionAxis] != 0) ||
                      (s < 0.5 &&
                        this.instance.delta[this.directionAxis] == 0)) &&
                    this.stopScrolling(),
                  Object.entries(this.sections).forEach(function (l) {
                    var h = oe(l, 2),
                      f = h[0],
                      d = h[1]
                    d.persistent ||
                    (r.instance.scroll[r.directionAxis] >
                      d.offset[r.directionAxis] &&
                      r.instance.scroll[r.directionAxis] <
                        d.limit[r.directionAxis])
                      ? (r.direction === 'horizontal'
                          ? r.transform(
                              d.el,
                              -r.instance.scroll[r.directionAxis],
                              0,
                            )
                          : r.transform(
                              d.el,
                              0,
                              -r.instance.scroll[r.directionAxis],
                            ),
                        d.inView ||
                          ((d.inView = !0),
                          (d.el.style.opacity = 1),
                          (d.el.style.pointerEvents = 'all'),
                          d.el.setAttribute(
                            'data-'.concat(r.name, '-section-inview'),
                            '',
                          )))
                      : ((d.inView || n) &&
                          ((d.inView = !1),
                          (d.el.style.opacity = 0),
                          (d.el.style.pointerEvents = 'none'),
                          d.el.removeAttribute(
                            'data-'.concat(r.name, '-section-inview'),
                          )),
                        r.transform(d.el, 0, 0))
                  }),
                  this.getDirection && this.addDirection(),
                  this.getSpeed &&
                    (this.addSpeed(), (this.speedTs = Date.now())),
                  this.detectElements(),
                  this.transformElements(),
                  this.hasScrollbar)
                ) {
                  var c =
                    (this.instance.scroll[this.directionAxis] /
                      this.instance.limit[this.directionAxis]) *
                    this.scrollBarLimit[this.directionAxis]
                  this.direction === 'horizontal'
                    ? this.transform(this.scrollbarThumb, c, 0)
                    : this.transform(this.scrollbarThumb, 0, c)
                }
                St(ht(e.prototype), 'checkScroll', this).call(this),
                  (this.hasScrollTicking = !1)
              }
            },
          },
          {
            key: 'resize',
            value: function () {
              ;(this.windowHeight = window.innerHeight),
                (this.windowWidth = window.innerWidth),
                this.checkContext(),
                (this.windowMiddle = {
                  x: this.windowWidth / 2,
                  y: this.windowHeight / 2,
                }),
                this.update()
            },
          },
          {
            key: 'updateDelta',
            value: function (r) {
              var n,
                s =
                  this[this.context] && this[this.context].gestureDirection
                    ? this[this.context].gestureDirection
                    : this.gestureDirection
              s === 'both'
                ? (n = r.deltaX + r.deltaY)
                : s === 'vertical'
                ? (n = r.deltaY)
                : s === 'horizontal'
                ? (n = r.deltaX)
                : (n = r.deltaY),
                (this.instance.delta[this.directionAxis] -=
                  n * this.multiplier),
                this.instance.delta[this.directionAxis] < 0 &&
                  (this.instance.delta[this.directionAxis] = 0),
                this.instance.delta[this.directionAxis] >
                  this.instance.limit[this.directionAxis] &&
                  (this.instance.delta[this.directionAxis] =
                    this.instance.limit[this.directionAxis])
            },
          },
          {
            key: 'updateScroll',
            value: function (r) {
              this.isScrolling || this.isDraggingScrollbar
                ? (this.instance.scroll[this.directionAxis] = Di(
                    this.instance.scroll[this.directionAxis],
                    this.instance.delta[this.directionAxis],
                    this.lerp,
                  ))
                : this.instance.scroll[this.directionAxis] >
                  this.instance.limit[this.directionAxis]
                ? this.setScroll(
                    this.instance.scroll[this.directionAxis],
                    this.instance.limit[this.directionAxis],
                  )
                : this.instance.scroll.y < 0
                ? this.setScroll(this.instance.scroll[this.directionAxis], 0)
                : this.setScroll(
                    this.instance.scroll[this.directionAxis],
                    this.instance.delta[this.directionAxis],
                  )
            },
          },
          {
            key: 'addDirection',
            value: function () {
              this.instance.delta.y > this.instance.scroll.y
                ? this.instance.direction !== 'down' &&
                  (this.instance.direction = 'down')
                : this.instance.delta.y < this.instance.scroll.y &&
                  this.instance.direction !== 'up' &&
                  (this.instance.direction = 'up'),
                this.instance.delta.x > this.instance.scroll.x
                  ? this.instance.direction !== 'right' &&
                    (this.instance.direction = 'right')
                  : this.instance.delta.x < this.instance.scroll.x &&
                    this.instance.direction !== 'left' &&
                    (this.instance.direction = 'left')
            },
          },
          {
            key: 'addSpeed',
            value: function () {
              this.instance.delta[this.directionAxis] !=
              this.instance.scroll[this.directionAxis]
                ? (this.instance.speed =
                    (this.instance.delta[this.directionAxis] -
                      this.instance.scroll[this.directionAxis]) /
                    Math.max(1, Date.now() - this.speedTs))
                : (this.instance.speed = 0)
            },
          },
          {
            key: 'initScrollBar',
            value: function () {
              if (
                ((this.scrollbar = document.createElement('span')),
                (this.scrollbarThumb = document.createElement('span')),
                this.scrollbar.classList.add(''.concat(this.scrollbarClass)),
                this.scrollbarThumb.classList.add(
                  ''.concat(this.scrollbarClass, '_thumb'),
                ),
                this.scrollbar.append(this.scrollbarThumb),
                this.scrollbarContainer
                  ? this.scrollbarContainer.append(this.scrollbar)
                  : document.body.append(this.scrollbar),
                (this.getScrollBar = this.getScrollBar.bind(this)),
                (this.releaseScrollBar = this.releaseScrollBar.bind(this)),
                (this.moveScrollBar = this.moveScrollBar.bind(this)),
                this.scrollbarThumb.addEventListener(
                  'mousedown',
                  this.getScrollBar,
                ),
                window.addEventListener('mouseup', this.releaseScrollBar),
                window.addEventListener('mousemove', this.moveScrollBar),
                (this.hasScrollbar = !1),
                this.direction == 'horizontal')
              ) {
                if (
                  this.instance.limit.x + this.windowWidth <=
                  this.windowWidth
                )
                  return
              } else if (
                this.instance.limit.y + this.windowHeight <=
                this.windowHeight
              )
                return
              ;(this.hasScrollbar = !0),
                (this.scrollbarBCR = this.scrollbar.getBoundingClientRect()),
                (this.scrollbarHeight = this.scrollbarBCR.height),
                (this.scrollbarWidth = this.scrollbarBCR.width),
                this.direction === 'horizontal'
                  ? (this.scrollbarThumb.style.width = ''.concat(
                      (this.scrollbarWidth * this.scrollbarWidth) /
                        (this.instance.limit.x + this.scrollbarWidth),
                      'px',
                    ))
                  : (this.scrollbarThumb.style.height = ''.concat(
                      (this.scrollbarHeight * this.scrollbarHeight) /
                        (this.instance.limit.y + this.scrollbarHeight),
                      'px',
                    )),
                (this.scrollbarThumbBCR =
                  this.scrollbarThumb.getBoundingClientRect()),
                (this.scrollBarLimit = {
                  x: this.scrollbarWidth - this.scrollbarThumbBCR.width,
                  y: this.scrollbarHeight - this.scrollbarThumbBCR.height,
                })
            },
          },
          {
            key: 'reinitScrollBar',
            value: function () {
              if (((this.hasScrollbar = !1), this.direction == 'horizontal')) {
                if (
                  this.instance.limit.x + this.windowWidth <=
                  this.windowWidth
                )
                  return
              } else if (
                this.instance.limit.y + this.windowHeight <=
                this.windowHeight
              )
                return
              ;(this.hasScrollbar = !0),
                (this.scrollbarBCR = this.scrollbar.getBoundingClientRect()),
                (this.scrollbarHeight = this.scrollbarBCR.height),
                (this.scrollbarWidth = this.scrollbarBCR.width),
                this.direction === 'horizontal'
                  ? (this.scrollbarThumb.style.width = ''.concat(
                      (this.scrollbarWidth * this.scrollbarWidth) /
                        (this.instance.limit.x + this.scrollbarWidth),
                      'px',
                    ))
                  : (this.scrollbarThumb.style.height = ''.concat(
                      (this.scrollbarHeight * this.scrollbarHeight) /
                        (this.instance.limit.y + this.scrollbarHeight),
                      'px',
                    )),
                (this.scrollbarThumbBCR =
                  this.scrollbarThumb.getBoundingClientRect()),
                (this.scrollBarLimit = {
                  x: this.scrollbarWidth - this.scrollbarThumbBCR.width,
                  y: this.scrollbarHeight - this.scrollbarThumbBCR.height,
                })
            },
          },
          {
            key: 'destroyScrollBar',
            value: function () {
              this.scrollbarThumb.removeEventListener(
                'mousedown',
                this.getScrollBar,
              ),
                window.removeEventListener('mouseup', this.releaseScrollBar),
                window.removeEventListener('mousemove', this.moveScrollBar),
                this.scrollbar.remove()
            },
          },
          {
            key: 'getScrollBar',
            value: function (r) {
              ;(this.isDraggingScrollbar = !0),
                this.checkScroll(),
                this.html.classList.remove(this.scrollingClass),
                this.html.classList.add(this.draggingClass)
            },
          },
          {
            key: 'releaseScrollBar',
            value: function (r) {
              ;(this.isDraggingScrollbar = !1),
                this.isScrolling &&
                  this.html.classList.add(this.scrollingClass),
                this.html.classList.remove(this.draggingClass)
            },
          },
          {
            key: 'moveScrollBar',
            value: function (r) {
              var n = this
              this.isDraggingScrollbar &&
                requestAnimationFrame(function () {
                  var s =
                      ((((r.clientX - n.scrollbarBCR.left) * 100) /
                        n.scrollbarWidth) *
                        n.instance.limit.x) /
                      100,
                    a =
                      ((((r.clientY - n.scrollbarBCR.top) * 100) /
                        n.scrollbarHeight) *
                        n.instance.limit.y) /
                      100
                  a > 0 && a < n.instance.limit.y && (n.instance.delta.y = a),
                    s > 0 && s < n.instance.limit.x && (n.instance.delta.x = s)
                })
            },
          },
          {
            key: 'addElements',
            value: function () {
              var r = this
              ;(this.els = {}), (this.parallaxElements = {})
              var n = this.el.querySelectorAll('[data-'.concat(this.name, ']'))
              n.forEach(function (s, a) {
                var c = Mi(s),
                  l = Object.entries(r.sections)
                    .map(function (ct) {
                      var Tt = oe(ct, 2),
                        kt = Tt[0],
                        Te = Tt[1]
                      return Te
                    })
                    .find(function (ct) {
                      return c.includes(ct.el)
                    }),
                  h = s.dataset[r.name + 'Class'] || r.class,
                  f =
                    typeof s.dataset[r.name + 'Id'] == 'string'
                      ? s.dataset[r.name + 'Id']
                      : 'el' + a,
                  d,
                  u,
                  _ = s.dataset[r.name + 'Repeat'],
                  p = s.dataset[r.name + 'Call'],
                  y = s.dataset[r.name + 'Position'],
                  v = s.dataset[r.name + 'Delay'],
                  T = s.dataset[r.name + 'Direction'],
                  b = typeof s.dataset[r.name + 'Sticky'] == 'string',
                  m = s.dataset[r.name + 'Speed']
                    ? parseFloat(s.dataset[r.name + 'Speed']) / 10
                    : !1,
                  g =
                    typeof s.dataset[r.name + 'Offset'] == 'string'
                      ? s.dataset[r.name + 'Offset'].split(',')
                      : r.offset,
                  w = s.dataset[r.name + 'Target'],
                  S
                w !== void 0
                  ? (S = document.querySelector(''.concat(w)))
                  : (S = s)
                var k = S.getBoundingClientRect()
                l === null || l.inView
                  ? ((d = k.top + r.instance.scroll.y - lt(S).y),
                    (u = k.left + r.instance.scroll.x - lt(S).x))
                  : ((d = k.top - lt(l.el).y - lt(S).y),
                    (u = k.left - lt(l.el).x - lt(S).x))
                var x = d + S.offsetHeight,
                  O = u + S.offsetWidth,
                  C = { x: (O - u) / 2 + u, y: (x - d) / 2 + d }
                if (b) {
                  var B = s.getBoundingClientRect(),
                    L = B.top,
                    R = B.left,
                    I = { x: R - u, y: L - d }
                  ;(d += window.innerHeight),
                    (u += window.innerWidth),
                    (x =
                      L + S.offsetHeight - s.offsetHeight - I[r.directionAxis]),
                    (O =
                      R + S.offsetWidth - s.offsetWidth - I[r.directionAxis]),
                    (C = { x: (O - u) / 2 + u, y: (x - d) / 2 + d })
                }
                _ == 'false' ? (_ = !1) : _ != null ? (_ = !0) : (_ = r.repeat)
                var A = [0, 0]
                if (g)
                  if (r.direction === 'horizontal') {
                    for (var E = 0; E < g.length; E++)
                      typeof g[E] == 'string'
                        ? g[E].includes('%')
                          ? (A[E] = parseInt(
                              (g[E].replace('%', '') * r.windowWidth) / 100,
                            ))
                          : (A[E] = parseInt(g[E]))
                        : (A[E] = g[E])
                    ;(u = u + A[0]), (O = O - A[1])
                  } else {
                    for (var E = 0; E < g.length; E++)
                      typeof g[E] == 'string'
                        ? g[E].includes('%')
                          ? (A[E] = parseInt(
                              (g[E].replace('%', '') * r.windowHeight) / 100,
                            ))
                          : (A[E] = parseInt(g[E]))
                        : (A[E] = g[E])
                    ;(d = d + A[0]), (x = x - A[1])
                  }
                var ut = {
                  el: s,
                  id: f,
                  class: h,
                  section: l,
                  top: d,
                  middle: C,
                  bottom: x,
                  left: u,
                  right: O,
                  offset: g,
                  progress: 0,
                  repeat: _,
                  inView: !1,
                  call: p,
                  speed: m,
                  delay: v,
                  position: y,
                  target: S,
                  direction: T,
                  sticky: b,
                }
                ;(r.els[f] = ut),
                  s.classList.contains(h) && r.setInView(r.els[f], f),
                  (m !== !1 || b) && (r.parallaxElements[f] = ut)
              })
            },
          },
          {
            key: 'addSections',
            value: function () {
              var r = this
              this.sections = {}
              var n = this.el.querySelectorAll(
                '[data-'.concat(this.name, '-section]'),
              )
              n.length === 0 && (n = [this.el]),
                n.forEach(function (s, a) {
                  var c =
                      typeof s.dataset[r.name + 'Id'] == 'string'
                        ? s.dataset[r.name + 'Id']
                        : 'section' + a,
                    l = s.getBoundingClientRect(),
                    h = {
                      x: l.left - window.innerWidth * 1.5 - lt(s).x,
                      y: l.top - window.innerHeight * 1.5 - lt(s).y,
                    },
                    f = {
                      x: h.x + l.width + window.innerWidth * 2,
                      y: h.y + l.height + window.innerHeight * 2,
                    },
                    d = typeof s.dataset[r.name + 'Persistent'] == 'string'
                  s.setAttribute('data-scroll-section-id', c)
                  var u = {
                    el: s,
                    offset: h,
                    limit: f,
                    inView: !1,
                    persistent: d,
                    id: c,
                  }
                  r.sections[c] = u
                })
            },
          },
          {
            key: 'transform',
            value: function (r, n, s, a) {
              var c
              if (!a)
                c = 'matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,'
                  .concat(n, ',')
                  .concat(s, ',0,1)')
              else {
                var l = lt(r),
                  h = Di(l.x, n, a),
                  f = Di(l.y, s, a)
                c = 'matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,'
                  .concat(h, ',')
                  .concat(f, ',0,1)')
              }
              ;(r.style.webkitTransform = c),
                (r.style.msTransform = c),
                (r.style.transform = c)
            },
          },
          {
            key: 'transformElements',
            value: function (r) {
              var n = this,
                s =
                  arguments.length > 1 && arguments[1] !== void 0
                    ? arguments[1]
                    : !1,
                a = this.instance.scroll.x + this.windowWidth,
                c = this.instance.scroll.y + this.windowHeight,
                l = {
                  x: this.instance.scroll.x + this.windowMiddle.x,
                  y: this.instance.scroll.y + this.windowMiddle.y,
                }
              Object.entries(this.parallaxElements).forEach(function (h) {
                var f = oe(h, 2),
                  d = f[0],
                  u = f[1],
                  _ = !1
                if ((r && (_ = 0), u.inView || s))
                  switch (u.position) {
                    case 'top':
                      _ = n.instance.scroll[n.directionAxis] * -u.speed
                      break
                    case 'elementTop':
                      _ = (c - u.top) * -u.speed
                      break
                    case 'bottom':
                      _ =
                        (n.instance.limit[n.directionAxis] -
                          c +
                          n.windowHeight) *
                        u.speed
                      break
                    case 'left':
                      _ = n.instance.scroll[n.directionAxis] * -u.speed
                      break
                    case 'elementLeft':
                      _ = (a - u.left) * -u.speed
                      break
                    case 'right':
                      _ =
                        (n.instance.limit[n.directionAxis] -
                          a +
                          n.windowHeight) *
                        u.speed
                      break
                    default:
                      _ =
                        (l[n.directionAxis] - u.middle[n.directionAxis]) *
                        -u.speed
                      break
                  }
                u.sticky &&
                  (u.inView
                    ? n.direction === 'horizontal'
                      ? (_ = n.instance.scroll.x - u.left + window.innerWidth)
                      : (_ = n.instance.scroll.y - u.top + window.innerHeight)
                    : n.direction === 'horizontal'
                    ? n.instance.scroll.x < u.left - window.innerWidth &&
                      n.instance.scroll.x < u.left - window.innerWidth / 2
                      ? (_ = 0)
                      : n.instance.scroll.x > u.right &&
                        n.instance.scroll.x > u.right + 100
                      ? (_ = u.right - u.left + window.innerWidth)
                      : (_ = !1)
                    : n.instance.scroll.y < u.top - window.innerHeight &&
                      n.instance.scroll.y < u.top - window.innerHeight / 2
                    ? (_ = 0)
                    : n.instance.scroll.y > u.bottom &&
                      n.instance.scroll.y > u.bottom + 100
                    ? (_ = u.bottom - u.top + window.innerHeight)
                    : (_ = !1)),
                  _ !== !1 &&
                    (u.direction === 'horizontal' ||
                    (n.direction === 'horizontal' && u.direction !== 'vertical')
                      ? n.transform(u.el, _, 0, r ? !1 : u.delay)
                      : n.transform(u.el, 0, _, r ? !1 : u.delay))
              })
            },
          },
          {
            key: 'scrollTo',
            value: function (r) {
              var n = this,
                s =
                  arguments.length > 1 && arguments[1] !== void 0
                    ? arguments[1]
                    : {},
                a = parseInt(s.offset) || 0,
                c = isNaN(parseInt(s.duration)) ? 1e3 : parseInt(s.duration),
                l = s.easing || [0.25, 0, 0.35, 1],
                h = !!s.disableLerp,
                f = s.callback ? s.callback : !1
              if (((l = fo.apply(void 0, Is(l))), typeof r == 'string')) {
                if (r === 'top') r = 0
                else if (r === 'bottom') r = this.instance.limit.y
                else if (r === 'left') r = 0
                else if (r === 'right') r = this.instance.limit.x
                else if (((r = document.querySelector(r)), !r)) return
              } else if (typeof r == 'number') r = parseInt(r)
              else if (!(r && r.tagName)) {
                console.warn('`target` parameter is not valid')
                return
              }
              if (typeof r != 'number') {
                var d = Mi(r).includes(this.el)
                if (!d) return
                var u = r.getBoundingClientRect(),
                  _ = u.top,
                  p = u.left,
                  y = Mi(r),
                  v = y.find(function (x) {
                    return Object.entries(n.sections)
                      .map(function (O) {
                        var C = oe(O, 2),
                          B = C[0],
                          L = C[1]
                        return L
                      })
                      .find(function (O) {
                        return O.el == x
                      })
                  }),
                  T = 0
                v
                  ? (T = lt(v)[this.directionAxis])
                  : (T = -this.instance.scroll[this.directionAxis]),
                  this.direction === 'horizontal'
                    ? (a = p + a - T)
                    : (a = _ + a - T)
              } else a = r + a
              var b = parseFloat(this.instance.delta[this.directionAxis]),
                m = Math.max(
                  0,
                  Math.min(a, this.instance.limit[this.directionAxis]),
                ),
                g = m - b,
                w = function (O) {
                  h
                    ? n.direction === 'horizontal'
                      ? n.setScroll(b + g * O, n.instance.delta.y)
                      : n.setScroll(n.instance.delta.x, b + g * O)
                    : (n.instance.delta[n.directionAxis] = b + g * O)
                }
              ;(this.animatingScroll = !0),
                this.stopScrolling(),
                this.startScrolling()
              var S = Date.now(),
                k = function x() {
                  var O = (Date.now() - S) / c
                  O > 1
                    ? (w(1),
                      (n.animatingScroll = !1),
                      c == 0 && n.update(),
                      f && f())
                    : ((n.scrollToRaf = requestAnimationFrame(x)), w(l(O)))
                }
              k()
            },
          },
          {
            key: 'update',
            value: function () {
              this.setScrollLimit(),
                this.addSections(),
                this.addElements(),
                this.detectElements(),
                this.updateScroll(),
                this.transformElements(!0),
                this.reinitScrollBar(),
                this.checkScroll(!0)
            },
          },
          {
            key: 'startScroll',
            value: function () {
              this.stop = !1
            },
          },
          {
            key: 'stopScroll',
            value: function () {
              this.stop = !0
            },
          },
          {
            key: 'setScroll',
            value: function (r, n) {
              this.instance = Ai(
                Ai({}, this.instance),
                {},
                { scroll: { x: r, y: n }, delta: { x: r, y: n }, speed: 0 },
              )
            },
          },
          {
            key: 'destroy',
            value: function () {
              St(ht(e.prototype), 'destroy', this).call(this),
                this.stopScrolling(),
                this.html.classList.remove(this.smoothClass),
                this.vs.destroy(),
                this.destroyScrollBar(),
                window.removeEventListener('keydown', this.checkKey, !1)
            },
          },
        ]),
        e
      )
    })(Xr),
    _o = (function () {
      function o() {
        var t =
          arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}
        Ve(this, o),
          (this.options = t),
          Object.assign(this, ae, t),
          (this.smartphone = ae.smartphone),
          t.smartphone && Object.assign(this.smartphone, t.smartphone),
          (this.tablet = ae.tablet),
          t.tablet && Object.assign(this.tablet, t.tablet),
          !this.smooth &&
            this.direction == 'horizontal' &&
            console.warn(
              '\u{1F6A8} `smooth:false` & `horizontal` direction are not yet compatible',
            ),
          !this.tablet.smooth &&
            this.tablet.direction == 'horizontal' &&
            console.warn(
              '\u{1F6A8} `smooth:false` & `horizontal` direction are not yet compatible (tablet)',
            ),
          !this.smartphone.smooth &&
            this.smartphone.direction == 'horizontal' &&
            console.warn(
              '\u{1F6A8} `smooth:false` & `horizontal` direction are not yet compatible (smartphone)',
            ),
          this.init()
      }
      return (
        He(o, [
          {
            key: 'init',
            value: function () {
              if (
                ((this.options.isMobile =
                  /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                    navigator.userAgent,
                  ) ||
                  (navigator.platform === 'MacIntel' &&
                    navigator.maxTouchPoints > 1) ||
                  window.innerWidth < this.tablet.breakpoint),
                (this.options.isTablet =
                  this.options.isMobile &&
                  window.innerWidth >= this.tablet.breakpoint),
                (this.smooth && !this.options.isMobile) ||
                (this.tablet.smooth && this.options.isTablet) ||
                (this.smartphone.smooth &&
                  this.options.isMobile &&
                  !this.options.isTablet)
                  ? (this.scroll = new po(this.options))
                  : (this.scroll = new js(this.options)),
                this.scroll.init(),
                window.location.hash)
              ) {
                var e = window.location.hash.slice(
                    1,
                    window.location.hash.length,
                  ),
                  i = document.getElementById(e)
                i && this.scroll.scrollTo(i)
              }
            },
          },
          {
            key: 'update',
            value: function () {
              this.scroll.update()
            },
          },
          {
            key: 'start',
            value: function () {
              this.scroll.startScroll()
            },
          },
          {
            key: 'stop',
            value: function () {
              this.scroll.stopScroll()
            },
          },
          {
            key: 'scrollTo',
            value: function (e, i) {
              this.scroll.scrollTo(e, i)
            },
          },
          {
            key: 'setScroll',
            value: function (e, i) {
              this.scroll.setScroll(e, i)
            },
          },
          {
            key: 'on',
            value: function (e, i) {
              this.scroll.setEvents(e, i)
            },
          },
          {
            key: 'off',
            value: function (e, i) {
              this.scroll.unsetEvents(e, i)
            },
          },
          {
            key: 'destroy',
            value: function () {
              this.scroll.destroy()
            },
          },
        ]),
        o
      )
    })()
  var tn = _o
  It.registerPlugin(pt)
  scroll = new tn({
    el: document.querySelector('[data-scroll-container]'),
    smooth: !0,
  })
  window.onresize = scroll.update()
  scroll.on('scroll', () => pt.update())
  pt.scrollerProxy('[data-scroll-container]', {
    scrollTop(o) {
      return arguments.length
        ? scroll.scrollTo(o, 0, 0)
        : scroll.scroll.instance.scroll.y
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      }
    },
    pinType: document.querySelector('[data-scroll-container]').style.transform
      ? 'transform'
      : 'fixed',
  })
  pt.defaults({ scroller: document.querySelector('[data-scroll-container]') })
  var en = document.querySelectorAll('.c-scrollbar')
  en.length > 1 && en[0].remove()
  pt.addEventListener('refresh', () => scroll.update())
  pt.refresh()
  It.utils.toArray('.scrub-section').forEach((o, t) => {
    let e = o.querySelector('.wrapper'),
      [i, r] =
        t % 2
          ? ['100%', (e.scrollWidth - o.offsetWidth) * -1]
          : [e.scrollWidth * -1, 0]
    It.fromTo(
      e,
      { x: i },
      {
        x: r,
        scrollTrigger: {
          scroller: document.querySelector('[data-scroll-container]'),
          trigger: '#skills-container',
          scrub: 0.5,
        },
      },
    )
  })
  It.fromTo('.fade-in', { opacity: 0, y: 50 }, { opacity: 1, y: 0 })
  It.fromTo(
    '#burger span',
    { className: 'burger' },
    {
      scrollTrigger: { trigger: 'main', start: 'bottom top', scrub: !0 },
      className: 'burger-dark',
      ease: 'none',
    },
  )
  var rn = document.querySelectorAll('.span-lines')
  for (je = 0; je < rn.length; je++)
    (Bi = rn.item(je)),
      (Bi.innerHTML = Bi.innerHTML.replace(
        /(^|<\/?[^>]+>|\s+)([^\s<]+)/g,
        '$1<span class="span-line"><span class="span-line-inner">$2</span></span>',
      ))
  var Bi,
    je,
    mo = document.querySelector('.span-lines'),
    go = It.timeline({
      scrollTrigger: {
        trigger: mo,
        toggleActions: 'play none none reset',
        start: '50% 100%',
      },
    })
  go.from('.span-lines .span-line-inner', {
    y: '100%',
    stagger: 0.01,
    ease: 'power3.out',
    duration: 1,
    delay: 0,
  })
  var nn = () => {
      let o = document.querySelector('#menu'),
        t = document.querySelector('#overlay')
      o.classList.toggle('active'), t.classList.toggle('active')
    },
    yo = document.getElementById('nav-button'),
    vo = document.getElementById('overlay')
  yo.onclick = nn
  vo.onclick = nn
  var wo = () => {
      localStorage.getItem('darkMode') == 'true'
        ? localStorage.setItem('darkMode', 'false')
        : localStorage.setItem('darkMode', 'true'),
        document.querySelector('html').classList.toggle('dark')
    },
    bo = document.getElementById('theme-button')
  bo.onclick = wo
  pt.addEventListener('refresh', () => scroller.update())
  pt.refresh()
})()
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/*!
 * CSSPlugin 3.10.4
 * https://greensock.com
 *
 * Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
/*!
 * GSAP 3.10.4
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
//# sourceMappingURL=index.js.map
