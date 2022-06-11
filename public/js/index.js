(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));

  // node_modules/gsap/dist/gsap.js
  var require_gsap = __commonJS({
    "node_modules/gsap/dist/gsap.js"(exports, module) {
      (function(global2, factory) {
        typeof exports === "object" && typeof module !== "undefined" ? factory(exports) : typeof define === "function" && define.amd ? define(["exports"], factory) : (global2 = global2 || self, factory(global2.window = global2.window || {}));
      })(exports, function(exports2) {
        "use strict";
        function _inheritsLoose(subClass, superClass) {
          subClass.prototype = Object.create(superClass.prototype);
          subClass.prototype.constructor = subClass;
          subClass.__proto__ = superClass;
        }
        function _assertThisInitialized2(self2) {
          if (self2 === void 0) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          }
          return self2;
        }
        var _config = {
          autoSleep: 120,
          force3D: "auto",
          nullTargetWarn: 1,
          units: {
            lineHeight: ""
          }
        }, _defaults = {
          duration: 0.5,
          overwrite: false,
          delay: 0
        }, _suppressOverwrites, _bigNum = 1e8, _tinyNum = 1 / _bigNum, _2PI = Math.PI * 2, _HALF_PI = _2PI / 4, _gsID = 0, _sqrt = Math.sqrt, _cos = Math.cos, _sin = Math.sin, _isString = function _isString2(value) {
          return typeof value === "string";
        }, _isFunction = function _isFunction2(value) {
          return typeof value === "function";
        }, _isNumber = function _isNumber2(value) {
          return typeof value === "number";
        }, _isUndefined = function _isUndefined2(value) {
          return typeof value === "undefined";
        }, _isObject = function _isObject2(value) {
          return typeof value === "object";
        }, _isNotFalse = function _isNotFalse2(value) {
          return value !== false;
        }, _windowExists = function _windowExists2() {
          return typeof window !== "undefined";
        }, _isFuncOrString = function _isFuncOrString2(value) {
          return _isFunction(value) || _isString(value);
        }, _isTypedArray = typeof ArrayBuffer === "function" && ArrayBuffer.isView || function() {
        }, _isArray = Array.isArray, _strictNumExp = /(?:-?\.?\d|\.)+/gi, _numExp = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, _numWithUnitExp = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, _complexStringNumExp = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, _relExp = /[+-]=-?[.\d]+/, _delimitedValueExp = /[^,'"\[\]\s]+/gi, _unitExp = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i, _globalTimeline, _win, _coreInitted, _doc, _globals = {}, _installScope = {}, _coreReady, _install = function _install2(scope) {
          return (_installScope = _merge(scope, _globals)) && gsap2;
        }, _missingPlugin = function _missingPlugin2(property, value) {
          return console.warn("Invalid property", property, "set to", value, "Missing plugin? gsap.registerPlugin()");
        }, _warn = function _warn2(message, suppress) {
          return !suppress && console.warn(message);
        }, _addGlobal = function _addGlobal2(name, obj) {
          return name && (_globals[name] = obj) && _installScope && (_installScope[name] = obj) || _globals;
        }, _emptyFunc = function _emptyFunc2() {
          return 0;
        }, _reservedProps = {}, _lazyTweens = [], _lazyLookup = {}, _lastRenderedFrame, _plugins = {}, _effects = {}, _nextGCFrame = 30, _harnessPlugins = [], _callbackNames = "", _harness = function _harness2(targets) {
          var target = targets[0], harnessPlugin, i;
          _isObject(target) || _isFunction(target) || (targets = [targets]);
          if (!(harnessPlugin = (target._gsap || {}).harness)) {
            i = _harnessPlugins.length;
            while (i-- && !_harnessPlugins[i].targetTest(target)) {
            }
            harnessPlugin = _harnessPlugins[i];
          }
          i = targets.length;
          while (i--) {
            targets[i] && (targets[i]._gsap || (targets[i]._gsap = new GSCache(targets[i], harnessPlugin))) || targets.splice(i, 1);
          }
          return targets;
        }, _getCache = function _getCache2(target) {
          return target._gsap || _harness(toArray(target))[0]._gsap;
        }, _getProperty = function _getProperty2(target, property, v) {
          return (v = target[property]) && _isFunction(v) ? target[property]() : _isUndefined(v) && target.getAttribute && target.getAttribute(property) || v;
        }, _forEachName = function _forEachName2(names, func) {
          return (names = names.split(",")).forEach(func) || names;
        }, _round = function _round2(value) {
          return Math.round(value * 1e5) / 1e5 || 0;
        }, _roundPrecise = function _roundPrecise2(value) {
          return Math.round(value * 1e7) / 1e7 || 0;
        }, _parseRelative = function _parseRelative2(start, value) {
          var operator = value.charAt(0), end = parseFloat(value.substr(2));
          start = parseFloat(start);
          return operator === "+" ? start + end : operator === "-" ? start - end : operator === "*" ? start * end : start / end;
        }, _arrayContainsAny = function _arrayContainsAny2(toSearch, toFind) {
          var l = toFind.length, i = 0;
          for (; toSearch.indexOf(toFind[i]) < 0 && ++i < l; ) {
          }
          return i < l;
        }, _lazyRender = function _lazyRender2() {
          var l = _lazyTweens.length, a = _lazyTweens.slice(0), i, tween;
          _lazyLookup = {};
          _lazyTweens.length = 0;
          for (i = 0; i < l; i++) {
            tween = a[i];
            tween && tween._lazy && (tween.render(tween._lazy[0], tween._lazy[1], true)._lazy = 0);
          }
        }, _lazySafeRender = function _lazySafeRender2(animation, time, suppressEvents, force) {
          _lazyTweens.length && _lazyRender();
          animation.render(time, suppressEvents, force);
          _lazyTweens.length && _lazyRender();
        }, _numericIfPossible = function _numericIfPossible2(value) {
          var n = parseFloat(value);
          return (n || n === 0) && (value + "").match(_delimitedValueExp).length < 2 ? n : _isString(value) ? value.trim() : value;
        }, _passThrough = function _passThrough2(p) {
          return p;
        }, _setDefaults = function _setDefaults2(obj, defaults2) {
          for (var p in defaults2) {
            p in obj || (obj[p] = defaults2[p]);
          }
          return obj;
        }, _setKeyframeDefaults = function _setKeyframeDefaults2(excludeDuration) {
          return function(obj, defaults2) {
            for (var p in defaults2) {
              p in obj || p === "duration" && excludeDuration || p === "ease" || (obj[p] = defaults2[p]);
            }
          };
        }, _merge = function _merge2(base, toMerge) {
          for (var p in toMerge) {
            base[p] = toMerge[p];
          }
          return base;
        }, _mergeDeep = function _mergeDeep2(base, toMerge) {
          for (var p in toMerge) {
            p !== "__proto__" && p !== "constructor" && p !== "prototype" && (base[p] = _isObject(toMerge[p]) ? _mergeDeep2(base[p] || (base[p] = {}), toMerge[p]) : toMerge[p]);
          }
          return base;
        }, _copyExcluding = function _copyExcluding2(obj, excluding) {
          var copy = {}, p;
          for (p in obj) {
            p in excluding || (copy[p] = obj[p]);
          }
          return copy;
        }, _inheritDefaults = function _inheritDefaults2(vars) {
          var parent = vars.parent || _globalTimeline, func = vars.keyframes ? _setKeyframeDefaults(_isArray(vars.keyframes)) : _setDefaults;
          if (_isNotFalse(vars.inherit)) {
            while (parent) {
              func(vars, parent.vars.defaults);
              parent = parent.parent || parent._dp;
            }
          }
          return vars;
        }, _arraysMatch = function _arraysMatch2(a1, a2) {
          var i = a1.length, match = i === a2.length;
          while (match && i-- && a1[i] === a2[i]) {
          }
          return i < 0;
        }, _addLinkedListItem = function _addLinkedListItem2(parent, child, firstProp, lastProp, sortBy) {
          if (firstProp === void 0) {
            firstProp = "_first";
          }
          if (lastProp === void 0) {
            lastProp = "_last";
          }
          var prev = parent[lastProp], t;
          if (sortBy) {
            t = child[sortBy];
            while (prev && prev[sortBy] > t) {
              prev = prev._prev;
            }
          }
          if (prev) {
            child._next = prev._next;
            prev._next = child;
          } else {
            child._next = parent[firstProp];
            parent[firstProp] = child;
          }
          if (child._next) {
            child._next._prev = child;
          } else {
            parent[lastProp] = child;
          }
          child._prev = prev;
          child.parent = child._dp = parent;
          return child;
        }, _removeLinkedListItem = function _removeLinkedListItem2(parent, child, firstProp, lastProp) {
          if (firstProp === void 0) {
            firstProp = "_first";
          }
          if (lastProp === void 0) {
            lastProp = "_last";
          }
          var prev = child._prev, next = child._next;
          if (prev) {
            prev._next = next;
          } else if (parent[firstProp] === child) {
            parent[firstProp] = next;
          }
          if (next) {
            next._prev = prev;
          } else if (parent[lastProp] === child) {
            parent[lastProp] = prev;
          }
          child._next = child._prev = child.parent = null;
        }, _removeFromParent = function _removeFromParent2(child, onlyIfParentHasAutoRemove) {
          child.parent && (!onlyIfParentHasAutoRemove || child.parent.autoRemoveChildren) && child.parent.remove(child);
          child._act = 0;
        }, _uncache = function _uncache2(animation, child) {
          if (animation && (!child || child._end > animation._dur || child._start < 0)) {
            var a = animation;
            while (a) {
              a._dirty = 1;
              a = a.parent;
            }
          }
          return animation;
        }, _recacheAncestors = function _recacheAncestors2(animation) {
          var parent = animation.parent;
          while (parent && parent.parent) {
            parent._dirty = 1;
            parent.totalDuration();
            parent = parent.parent;
          }
          return animation;
        }, _hasNoPausedAncestors = function _hasNoPausedAncestors2(animation) {
          return !animation || animation._ts && _hasNoPausedAncestors2(animation.parent);
        }, _elapsedCycleDuration = function _elapsedCycleDuration2(animation) {
          return animation._repeat ? _animationCycle(animation._tTime, animation = animation.duration() + animation._rDelay) * animation : 0;
        }, _animationCycle = function _animationCycle2(tTime, cycleDuration) {
          var whole = Math.floor(tTime /= cycleDuration);
          return tTime && whole === tTime ? whole - 1 : whole;
        }, _parentToChildTotalTime = function _parentToChildTotalTime2(parentTime, child) {
          return (parentTime - child._start) * child._ts + (child._ts >= 0 ? 0 : child._dirty ? child.totalDuration() : child._tDur);
        }, _setEnd = function _setEnd2(animation) {
          return animation._end = _roundPrecise(animation._start + (animation._tDur / Math.abs(animation._ts || animation._rts || _tinyNum) || 0));
        }, _alignPlayhead = function _alignPlayhead2(animation, totalTime) {
          var parent = animation._dp;
          if (parent && parent.smoothChildTiming && animation._ts) {
            animation._start = _roundPrecise(parent._time - (animation._ts > 0 ? totalTime / animation._ts : ((animation._dirty ? animation.totalDuration() : animation._tDur) - totalTime) / -animation._ts));
            _setEnd(animation);
            parent._dirty || _uncache(parent, animation);
          }
          return animation;
        }, _postAddChecks = function _postAddChecks2(timeline, child) {
          var t;
          if (child._time || child._initted && !child._dur) {
            t = _parentToChildTotalTime(timeline.rawTime(), child);
            if (!child._dur || _clamp(0, child.totalDuration(), t) - child._tTime > _tinyNum) {
              child.render(t, true);
            }
          }
          if (_uncache(timeline, child)._dp && timeline._initted && timeline._time >= timeline._dur && timeline._ts) {
            if (timeline._dur < timeline.duration()) {
              t = timeline;
              while (t._dp) {
                t.rawTime() >= 0 && t.totalTime(t._tTime);
                t = t._dp;
              }
            }
            timeline._zTime = -_tinyNum;
          }
        }, _addToTimeline = function _addToTimeline2(timeline, child, position, skipChecks) {
          child.parent && _removeFromParent(child);
          child._start = _roundPrecise((_isNumber(position) ? position : position || timeline !== _globalTimeline ? _parsePosition(timeline, position, child) : timeline._time) + child._delay);
          child._end = _roundPrecise(child._start + (child.totalDuration() / Math.abs(child.timeScale()) || 0));
          _addLinkedListItem(timeline, child, "_first", "_last", timeline._sort ? "_start" : 0);
          _isFromOrFromStart(child) || (timeline._recent = child);
          skipChecks || _postAddChecks(timeline, child);
          return timeline;
        }, _scrollTrigger = function _scrollTrigger2(animation, trigger) {
          return (_globals.ScrollTrigger || _missingPlugin("scrollTrigger", trigger)) && _globals.ScrollTrigger.create(trigger, animation);
        }, _attemptInitTween = function _attemptInitTween2(tween, totalTime, force, suppressEvents) {
          _initTween(tween, totalTime);
          if (!tween._initted) {
            return 1;
          }
          if (!force && tween._pt && (tween._dur && tween.vars.lazy !== false || !tween._dur && tween.vars.lazy) && _lastRenderedFrame !== _ticker.frame) {
            _lazyTweens.push(tween);
            tween._lazy = [totalTime, suppressEvents];
            return 1;
          }
        }, _parentPlayheadIsBeforeStart = function _parentPlayheadIsBeforeStart2(_ref) {
          var parent = _ref.parent;
          return parent && parent._ts && parent._initted && !parent._lock && (parent.rawTime() < 0 || _parentPlayheadIsBeforeStart2(parent));
        }, _isFromOrFromStart = function _isFromOrFromStart2(_ref2) {
          var data = _ref2.data;
          return data === "isFromStart" || data === "isStart";
        }, _renderZeroDurationTween = function _renderZeroDurationTween2(tween, totalTime, suppressEvents, force) {
          var prevRatio = tween.ratio, ratio = totalTime < 0 || !totalTime && (!tween._start && _parentPlayheadIsBeforeStart(tween) && !(!tween._initted && _isFromOrFromStart(tween)) || (tween._ts < 0 || tween._dp._ts < 0) && !_isFromOrFromStart(tween)) ? 0 : 1, repeatDelay = tween._rDelay, tTime = 0, pt, iteration, prevIteration;
          if (repeatDelay && tween._repeat) {
            tTime = _clamp(0, tween._tDur, totalTime);
            iteration = _animationCycle(tTime, repeatDelay);
            tween._yoyo && iteration & 1 && (ratio = 1 - ratio);
            if (iteration !== _animationCycle(tween._tTime, repeatDelay)) {
              prevRatio = 1 - ratio;
              tween.vars.repeatRefresh && tween._initted && tween.invalidate();
            }
          }
          if (ratio !== prevRatio || force || tween._zTime === _tinyNum || !totalTime && tween._zTime) {
            if (!tween._initted && _attemptInitTween(tween, totalTime, force, suppressEvents)) {
              return;
            }
            prevIteration = tween._zTime;
            tween._zTime = totalTime || (suppressEvents ? _tinyNum : 0);
            suppressEvents || (suppressEvents = totalTime && !prevIteration);
            tween.ratio = ratio;
            tween._from && (ratio = 1 - ratio);
            tween._time = 0;
            tween._tTime = tTime;
            pt = tween._pt;
            while (pt) {
              pt.r(ratio, pt.d);
              pt = pt._next;
            }
            tween._startAt && totalTime < 0 && tween._startAt.render(totalTime, true, true);
            tween._onUpdate && !suppressEvents && _callback(tween, "onUpdate");
            tTime && tween._repeat && !suppressEvents && tween.parent && _callback(tween, "onRepeat");
            if ((totalTime >= tween._tDur || totalTime < 0) && tween.ratio === ratio) {
              ratio && _removeFromParent(tween, 1);
              if (!suppressEvents) {
                _callback(tween, ratio ? "onComplete" : "onReverseComplete", true);
                tween._prom && tween._prom();
              }
            }
          } else if (!tween._zTime) {
            tween._zTime = totalTime;
          }
        }, _findNextPauseTween = function _findNextPauseTween2(animation, prevTime, time) {
          var child;
          if (time > prevTime) {
            child = animation._first;
            while (child && child._start <= time) {
              if (child.data === "isPause" && child._start > prevTime) {
                return child;
              }
              child = child._next;
            }
          } else {
            child = animation._last;
            while (child && child._start >= time) {
              if (child.data === "isPause" && child._start < prevTime) {
                return child;
              }
              child = child._prev;
            }
          }
        }, _setDuration = function _setDuration2(animation, duration, skipUncache, leavePlayhead) {
          var repeat = animation._repeat, dur = _roundPrecise(duration) || 0, totalProgress = animation._tTime / animation._tDur;
          totalProgress && !leavePlayhead && (animation._time *= dur / animation._dur);
          animation._dur = dur;
          animation._tDur = !repeat ? dur : repeat < 0 ? 1e10 : _roundPrecise(dur * (repeat + 1) + animation._rDelay * repeat);
          totalProgress > 0 && !leavePlayhead ? _alignPlayhead(animation, animation._tTime = animation._tDur * totalProgress) : animation.parent && _setEnd(animation);
          skipUncache || _uncache(animation.parent, animation);
          return animation;
        }, _onUpdateTotalDuration = function _onUpdateTotalDuration2(animation) {
          return animation instanceof Timeline ? _uncache(animation) : _setDuration(animation, animation._dur);
        }, _zeroPosition = {
          _start: 0,
          endTime: _emptyFunc,
          totalDuration: _emptyFunc
        }, _parsePosition = function _parsePosition2(animation, position, percentAnimation) {
          var labels = animation.labels, recent = animation._recent || _zeroPosition, clippedDuration = animation.duration() >= _bigNum ? recent.endTime(false) : animation._dur, i, offset, isPercent;
          if (_isString(position) && (isNaN(position) || position in labels)) {
            offset = position.charAt(0);
            isPercent = position.substr(-1) === "%";
            i = position.indexOf("=");
            if (offset === "<" || offset === ">") {
              i >= 0 && (position = position.replace(/=/, ""));
              return (offset === "<" ? recent._start : recent.endTime(recent._repeat >= 0)) + (parseFloat(position.substr(1)) || 0) * (isPercent ? (i < 0 ? recent : percentAnimation).totalDuration() / 100 : 1);
            }
            if (i < 0) {
              position in labels || (labels[position] = clippedDuration);
              return labels[position];
            }
            offset = parseFloat(position.charAt(i - 1) + position.substr(i + 1));
            if (isPercent && percentAnimation) {
              offset = offset / 100 * (_isArray(percentAnimation) ? percentAnimation[0] : percentAnimation).totalDuration();
            }
            return i > 1 ? _parsePosition2(animation, position.substr(0, i - 1), percentAnimation) + offset : clippedDuration + offset;
          }
          return position == null ? clippedDuration : +position;
        }, _createTweenType = function _createTweenType2(type, params, timeline) {
          var isLegacy = _isNumber(params[1]), varsIndex = (isLegacy ? 2 : 1) + (type < 2 ? 0 : 1), vars = params[varsIndex], irVars, parent;
          isLegacy && (vars.duration = params[1]);
          vars.parent = timeline;
          if (type) {
            irVars = vars;
            parent = timeline;
            while (parent && !("immediateRender" in irVars)) {
              irVars = parent.vars.defaults || {};
              parent = _isNotFalse(parent.vars.inherit) && parent.parent;
            }
            vars.immediateRender = _isNotFalse(irVars.immediateRender);
            type < 2 ? vars.runBackwards = 1 : vars.startAt = params[varsIndex - 1];
          }
          return new Tween(params[0], vars, params[varsIndex + 1]);
        }, _conditionalReturn = function _conditionalReturn2(value, func) {
          return value || value === 0 ? func(value) : func;
        }, _clamp = function _clamp2(min, max, value) {
          return value < min ? min : value > max ? max : value;
        }, getUnit = function getUnit2(value, v) {
          return !_isString(value) || !(v = _unitExp.exec(value)) ? "" : v[1];
        }, clamp = function clamp2(min, max, value) {
          return _conditionalReturn(value, function(v) {
            return _clamp(min, max, v);
          });
        }, _slice = [].slice, _isArrayLike = function _isArrayLike2(value, nonEmpty) {
          return value && _isObject(value) && "length" in value && (!nonEmpty && !value.length || value.length - 1 in value && _isObject(value[0])) && !value.nodeType && value !== _win;
        }, _flatten = function _flatten2(ar, leaveStrings, accumulator) {
          if (accumulator === void 0) {
            accumulator = [];
          }
          return ar.forEach(function(value) {
            var _accumulator;
            return _isString(value) && !leaveStrings || _isArrayLike(value, 1) ? (_accumulator = accumulator).push.apply(_accumulator, toArray(value)) : accumulator.push(value);
          }) || accumulator;
        }, toArray = function toArray2(value, scope, leaveStrings) {
          return _isString(value) && !leaveStrings && (_coreInitted || !_wake()) ? _slice.call((scope || _doc).querySelectorAll(value), 0) : _isArray(value) ? _flatten(value, leaveStrings) : _isArrayLike(value) ? _slice.call(value, 0) : value ? [value] : [];
        }, selector = function selector2(value) {
          value = toArray(value)[0] || _warn("Invalid scope") || {};
          return function(v) {
            var el = value.current || value.nativeElement || value;
            return toArray(v, el.querySelectorAll ? el : el === value ? _warn("Invalid scope") || _doc.createElement("div") : value);
          };
        }, shuffle = function shuffle2(a) {
          return a.sort(function() {
            return 0.5 - Math.random();
          });
        }, distribute = function distribute2(v) {
          if (_isFunction(v)) {
            return v;
          }
          var vars = _isObject(v) ? v : {
            each: v
          }, ease = _parseEase(vars.ease), from = vars.from || 0, base = parseFloat(vars.base) || 0, cache = {}, isDecimal = from > 0 && from < 1, ratios = isNaN(from) || isDecimal, axis = vars.axis, ratioX = from, ratioY = from;
          if (_isString(from)) {
            ratioX = ratioY = {
              center: 0.5,
              edges: 0.5,
              end: 1
            }[from] || 0;
          } else if (!isDecimal && ratios) {
            ratioX = from[0];
            ratioY = from[1];
          }
          return function(i, target, a) {
            var l = (a || vars).length, distances = cache[l], originX, originY, x, y, d, j, max, min, wrapAt;
            if (!distances) {
              wrapAt = vars.grid === "auto" ? 0 : (vars.grid || [1, _bigNum])[1];
              if (!wrapAt) {
                max = -_bigNum;
                while (max < (max = a[wrapAt++].getBoundingClientRect().left) && wrapAt < l) {
                }
                wrapAt--;
              }
              distances = cache[l] = [];
              originX = ratios ? Math.min(wrapAt, l) * ratioX - 0.5 : from % wrapAt;
              originY = wrapAt === _bigNum ? 0 : ratios ? l * ratioY / wrapAt - 0.5 : from / wrapAt | 0;
              max = 0;
              min = _bigNum;
              for (j = 0; j < l; j++) {
                x = j % wrapAt - originX;
                y = originY - (j / wrapAt | 0);
                distances[j] = d = !axis ? _sqrt(x * x + y * y) : Math.abs(axis === "y" ? y : x);
                d > max && (max = d);
                d < min && (min = d);
              }
              from === "random" && shuffle(distances);
              distances.max = max - min;
              distances.min = min;
              distances.v = l = (parseFloat(vars.amount) || parseFloat(vars.each) * (wrapAt > l ? l - 1 : !axis ? Math.max(wrapAt, l / wrapAt) : axis === "y" ? l / wrapAt : wrapAt) || 0) * (from === "edges" ? -1 : 1);
              distances.b = l < 0 ? base - l : base;
              distances.u = getUnit(vars.amount || vars.each) || 0;
              ease = ease && l < 0 ? _invertEase(ease) : ease;
            }
            l = (distances[i] - distances.min) / distances.max || 0;
            return _roundPrecise(distances.b + (ease ? ease(l) : l) * distances.v) + distances.u;
          };
        }, _roundModifier = function _roundModifier2(v) {
          var p = Math.pow(10, ((v + "").split(".")[1] || "").length);
          return function(raw) {
            var n = Math.round(parseFloat(raw) / v) * v * p;
            return (n - n % 1) / p + (_isNumber(raw) ? 0 : getUnit(raw));
          };
        }, snap = function snap2(snapTo, value) {
          var isArray = _isArray(snapTo), radius, is2D;
          if (!isArray && _isObject(snapTo)) {
            radius = isArray = snapTo.radius || _bigNum;
            if (snapTo.values) {
              snapTo = toArray(snapTo.values);
              if (is2D = !_isNumber(snapTo[0])) {
                radius *= radius;
              }
            } else {
              snapTo = _roundModifier(snapTo.increment);
            }
          }
          return _conditionalReturn(value, !isArray ? _roundModifier(snapTo) : _isFunction(snapTo) ? function(raw) {
            is2D = snapTo(raw);
            return Math.abs(is2D - raw) <= radius ? is2D : raw;
          } : function(raw) {
            var x = parseFloat(is2D ? raw.x : raw), y = parseFloat(is2D ? raw.y : 0), min = _bigNum, closest = 0, i = snapTo.length, dx, dy;
            while (i--) {
              if (is2D) {
                dx = snapTo[i].x - x;
                dy = snapTo[i].y - y;
                dx = dx * dx + dy * dy;
              } else {
                dx = Math.abs(snapTo[i] - x);
              }
              if (dx < min) {
                min = dx;
                closest = i;
              }
            }
            closest = !radius || min <= radius ? snapTo[closest] : raw;
            return is2D || closest === raw || _isNumber(raw) ? closest : closest + getUnit(raw);
          });
        }, random = function random2(min, max, roundingIncrement, returnFunction) {
          return _conditionalReturn(_isArray(min) ? !max : roundingIncrement === true ? !!(roundingIncrement = 0) : !returnFunction, function() {
            return _isArray(min) ? min[~~(Math.random() * min.length)] : (roundingIncrement = roundingIncrement || 1e-5) && (returnFunction = roundingIncrement < 1 ? Math.pow(10, (roundingIncrement + "").length - 2) : 1) && Math.floor(Math.round((min - roundingIncrement / 2 + Math.random() * (max - min + roundingIncrement * 0.99)) / roundingIncrement) * roundingIncrement * returnFunction) / returnFunction;
          });
        }, pipe = function pipe2() {
          for (var _len = arguments.length, functions = new Array(_len), _key = 0; _key < _len; _key++) {
            functions[_key] = arguments[_key];
          }
          return function(value) {
            return functions.reduce(function(v, f) {
              return f(v);
            }, value);
          };
        }, unitize = function unitize2(func, unit) {
          return function(value) {
            return func(parseFloat(value)) + (unit || getUnit(value));
          };
        }, normalize = function normalize2(min, max, value) {
          return mapRange(min, max, 0, 1, value);
        }, _wrapArray = function _wrapArray2(a, wrapper, value) {
          return _conditionalReturn(value, function(index) {
            return a[~~wrapper(index)];
          });
        }, wrap = function wrap2(min, max, value) {
          var range = max - min;
          return _isArray(min) ? _wrapArray(min, wrap2(0, min.length), max) : _conditionalReturn(value, function(value2) {
            return (range + (value2 - min) % range) % range + min;
          });
        }, wrapYoyo = function wrapYoyo2(min, max, value) {
          var range = max - min, total = range * 2;
          return _isArray(min) ? _wrapArray(min, wrapYoyo2(0, min.length - 1), max) : _conditionalReturn(value, function(value2) {
            value2 = (total + (value2 - min) % total) % total || 0;
            return min + (value2 > range ? total - value2 : value2);
          });
        }, _replaceRandom = function _replaceRandom2(value) {
          var prev = 0, s = "", i, nums, end, isArray;
          while (~(i = value.indexOf("random(", prev))) {
            end = value.indexOf(")", i);
            isArray = value.charAt(i + 7) === "[";
            nums = value.substr(i + 7, end - i - 7).match(isArray ? _delimitedValueExp : _strictNumExp);
            s += value.substr(prev, i - prev) + random(isArray ? nums : +nums[0], isArray ? 0 : +nums[1], +nums[2] || 1e-5);
            prev = end + 1;
          }
          return s + value.substr(prev, value.length - prev);
        }, mapRange = function mapRange2(inMin, inMax, outMin, outMax, value) {
          var inRange = inMax - inMin, outRange = outMax - outMin;
          return _conditionalReturn(value, function(value2) {
            return outMin + ((value2 - inMin) / inRange * outRange || 0);
          });
        }, interpolate = function interpolate2(start, end, progress, mutate) {
          var func = isNaN(start + end) ? 0 : function(p2) {
            return (1 - p2) * start + p2 * end;
          };
          if (!func) {
            var isString = _isString(start), master = {}, p, i, interpolators, l, il;
            progress === true && (mutate = 1) && (progress = null);
            if (isString) {
              start = {
                p: start
              };
              end = {
                p: end
              };
            } else if (_isArray(start) && !_isArray(end)) {
              interpolators = [];
              l = start.length;
              il = l - 2;
              for (i = 1; i < l; i++) {
                interpolators.push(interpolate2(start[i - 1], start[i]));
              }
              l--;
              func = function func2(p2) {
                p2 *= l;
                var i2 = Math.min(il, ~~p2);
                return interpolators[i2](p2 - i2);
              };
              progress = end;
            } else if (!mutate) {
              start = _merge(_isArray(start) ? [] : {}, start);
            }
            if (!interpolators) {
              for (p in end) {
                _addPropTween.call(master, start, p, "get", end[p]);
              }
              func = function func2(p2) {
                return _renderPropTweens(p2, master) || (isString ? start.p : start);
              };
            }
          }
          return _conditionalReturn(progress, func);
        }, _getLabelInDirection = function _getLabelInDirection2(timeline, fromTime, backward) {
          var labels = timeline.labels, min = _bigNum, p, distance, label;
          for (p in labels) {
            distance = labels[p] - fromTime;
            if (distance < 0 === !!backward && distance && min > (distance = Math.abs(distance))) {
              label = p;
              min = distance;
            }
          }
          return label;
        }, _callback = function _callback2(animation, type, executeLazyFirst) {
          var v = animation.vars, callback = v[type], params, scope;
          if (!callback) {
            return;
          }
          params = v[type + "Params"];
          scope = v.callbackScope || animation;
          executeLazyFirst && _lazyTweens.length && _lazyRender();
          return params ? callback.apply(scope, params) : callback.call(scope);
        }, _interrupt = function _interrupt2(animation) {
          _removeFromParent(animation);
          animation.scrollTrigger && animation.scrollTrigger.kill(false);
          animation.progress() < 1 && _callback(animation, "onInterrupt");
          return animation;
        }, _quickTween, _createPlugin = function _createPlugin2(config) {
          config = !config.name && config["default"] || config;
          var name = config.name, isFunc = _isFunction(config), Plugin = name && !isFunc && config.init ? function() {
            this._props = [];
          } : config, instanceDefaults = {
            init: _emptyFunc,
            render: _renderPropTweens,
            add: _addPropTween,
            kill: _killPropTweensOf,
            modifier: _addPluginModifier,
            rawVars: 0
          }, statics = {
            targetTest: 0,
            get: 0,
            getSetter: _getSetter,
            aliases: {},
            register: 0
          };
          _wake();
          if (config !== Plugin) {
            if (_plugins[name]) {
              return;
            }
            _setDefaults(Plugin, _setDefaults(_copyExcluding(config, instanceDefaults), statics));
            _merge(Plugin.prototype, _merge(instanceDefaults, _copyExcluding(config, statics)));
            _plugins[Plugin.prop = name] = Plugin;
            if (config.targetTest) {
              _harnessPlugins.push(Plugin);
              _reservedProps[name] = 1;
            }
            name = (name === "css" ? "CSS" : name.charAt(0).toUpperCase() + name.substr(1)) + "Plugin";
          }
          _addGlobal(name, Plugin);
          config.register && config.register(gsap2, Plugin, PropTween);
        }, _255 = 255, _colorLookup = {
          aqua: [0, _255, _255],
          lime: [0, _255, 0],
          silver: [192, 192, 192],
          black: [0, 0, 0],
          maroon: [128, 0, 0],
          teal: [0, 128, 128],
          blue: [0, 0, _255],
          navy: [0, 0, 128],
          white: [_255, _255, _255],
          olive: [128, 128, 0],
          yellow: [_255, _255, 0],
          orange: [_255, 165, 0],
          gray: [128, 128, 128],
          purple: [128, 0, 128],
          green: [0, 128, 0],
          red: [_255, 0, 0],
          pink: [_255, 192, 203],
          cyan: [0, _255, _255],
          transparent: [_255, _255, _255, 0]
        }, _hue = function _hue2(h, m1, m2) {
          h += h < 0 ? 1 : h > 1 ? -1 : 0;
          return (h * 6 < 1 ? m1 + (m2 - m1) * h * 6 : h < 0.5 ? m2 : h * 3 < 2 ? m1 + (m2 - m1) * (2 / 3 - h) * 6 : m1) * _255 + 0.5 | 0;
        }, splitColor = function splitColor2(v, toHSL, forceAlpha) {
          var a = !v ? _colorLookup.black : _isNumber(v) ? [v >> 16, v >> 8 & _255, v & _255] : 0, r, g, b, h, s, l, max, min, d, wasHSL;
          if (!a) {
            if (v.substr(-1) === ",") {
              v = v.substr(0, v.length - 1);
            }
            if (_colorLookup[v]) {
              a = _colorLookup[v];
            } else if (v.charAt(0) === "#") {
              if (v.length < 6) {
                r = v.charAt(1);
                g = v.charAt(2);
                b = v.charAt(3);
                v = "#" + r + r + g + g + b + b + (v.length === 5 ? v.charAt(4) + v.charAt(4) : "");
              }
              if (v.length === 9) {
                a = parseInt(v.substr(1, 6), 16);
                return [a >> 16, a >> 8 & _255, a & _255, parseInt(v.substr(7), 16) / 255];
              }
              v = parseInt(v.substr(1), 16);
              a = [v >> 16, v >> 8 & _255, v & _255];
            } else if (v.substr(0, 3) === "hsl") {
              a = wasHSL = v.match(_strictNumExp);
              if (!toHSL) {
                h = +a[0] % 360 / 360;
                s = +a[1] / 100;
                l = +a[2] / 100;
                g = l <= 0.5 ? l * (s + 1) : l + s - l * s;
                r = l * 2 - g;
                a.length > 3 && (a[3] *= 1);
                a[0] = _hue(h + 1 / 3, r, g);
                a[1] = _hue(h, r, g);
                a[2] = _hue(h - 1 / 3, r, g);
              } else if (~v.indexOf("=")) {
                a = v.match(_numExp);
                forceAlpha && a.length < 4 && (a[3] = 1);
                return a;
              }
            } else {
              a = v.match(_strictNumExp) || _colorLookup.transparent;
            }
            a = a.map(Number);
          }
          if (toHSL && !wasHSL) {
            r = a[0] / _255;
            g = a[1] / _255;
            b = a[2] / _255;
            max = Math.max(r, g, b);
            min = Math.min(r, g, b);
            l = (max + min) / 2;
            if (max === min) {
              h = s = 0;
            } else {
              d = max - min;
              s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
              h = max === r ? (g - b) / d + (g < b ? 6 : 0) : max === g ? (b - r) / d + 2 : (r - g) / d + 4;
              h *= 60;
            }
            a[0] = ~~(h + 0.5);
            a[1] = ~~(s * 100 + 0.5);
            a[2] = ~~(l * 100 + 0.5);
          }
          forceAlpha && a.length < 4 && (a[3] = 1);
          return a;
        }, _colorOrderData = function _colorOrderData2(v) {
          var values = [], c = [], i = -1;
          v.split(_colorExp).forEach(function(v2) {
            var a = v2.match(_numWithUnitExp) || [];
            values.push.apply(values, a);
            c.push(i += a.length + 1);
          });
          values.c = c;
          return values;
        }, _formatColors = function _formatColors2(s, toHSL, orderMatchData) {
          var result = "", colors = (s + result).match(_colorExp), type = toHSL ? "hsla(" : "rgba(", i = 0, c, shell, d, l;
          if (!colors) {
            return s;
          }
          colors = colors.map(function(color) {
            return (color = splitColor(color, toHSL, 1)) && type + (toHSL ? color[0] + "," + color[1] + "%," + color[2] + "%," + color[3] : color.join(",")) + ")";
          });
          if (orderMatchData) {
            d = _colorOrderData(s);
            c = orderMatchData.c;
            if (c.join(result) !== d.c.join(result)) {
              shell = s.replace(_colorExp, "1").split(_numWithUnitExp);
              l = shell.length - 1;
              for (; i < l; i++) {
                result += shell[i] + (~c.indexOf(i) ? colors.shift() || type + "0,0,0,0)" : (d.length ? d : colors.length ? colors : orderMatchData).shift());
              }
            }
          }
          if (!shell) {
            shell = s.split(_colorExp);
            l = shell.length - 1;
            for (; i < l; i++) {
              result += shell[i] + colors[i];
            }
          }
          return result + shell[l];
        }, _colorExp = function() {
          var s = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b", p;
          for (p in _colorLookup) {
            s += "|" + p + "\\b";
          }
          return new RegExp(s + ")", "gi");
        }(), _hslExp = /hsl[a]?\(/, _colorStringFilter = function _colorStringFilter2(a) {
          var combined = a.join(" "), toHSL;
          _colorExp.lastIndex = 0;
          if (_colorExp.test(combined)) {
            toHSL = _hslExp.test(combined);
            a[1] = _formatColors(a[1], toHSL);
            a[0] = _formatColors(a[0], toHSL, _colorOrderData(a[1]));
            return true;
          }
        }, _tickerActive, _ticker = function() {
          var _getTime = Date.now, _lagThreshold = 500, _adjustedLag = 33, _startTime = _getTime(), _lastUpdate = _startTime, _gap = 1e3 / 240, _nextTime = _gap, _listeners = [], _id, _req, _raf, _self, _delta, _i, _tick = function _tick2(v) {
            var elapsed = _getTime() - _lastUpdate, manual = v === true, overlap, dispatch, time, frame;
            elapsed > _lagThreshold && (_startTime += elapsed - _adjustedLag);
            _lastUpdate += elapsed;
            time = _lastUpdate - _startTime;
            overlap = time - _nextTime;
            if (overlap > 0 || manual) {
              frame = ++_self.frame;
              _delta = time - _self.time * 1e3;
              _self.time = time = time / 1e3;
              _nextTime += overlap + (overlap >= _gap ? 4 : _gap - overlap);
              dispatch = 1;
            }
            manual || (_id = _req(_tick2));
            if (dispatch) {
              for (_i = 0; _i < _listeners.length; _i++) {
                _listeners[_i](time, _delta, frame, v);
              }
            }
          };
          _self = {
            time: 0,
            frame: 0,
            tick: function tick() {
              _tick(true);
            },
            deltaRatio: function deltaRatio(fps) {
              return _delta / (1e3 / (fps || 60));
            },
            wake: function wake() {
              if (_coreReady) {
                if (!_coreInitted && _windowExists()) {
                  _win = _coreInitted = window;
                  _doc = _win.document || {};
                  _globals.gsap = gsap2;
                  (_win.gsapVersions || (_win.gsapVersions = [])).push(gsap2.version);
                  _install(_installScope || _win.GreenSockGlobals || !_win.gsap && _win || {});
                  _raf = _win.requestAnimationFrame;
                }
                _id && _self.sleep();
                _req = _raf || function(f) {
                  return setTimeout(f, _nextTime - _self.time * 1e3 + 1 | 0);
                };
                _tickerActive = 1;
                _tick(2);
              }
            },
            sleep: function sleep() {
              (_raf ? _win.cancelAnimationFrame : clearTimeout)(_id);
              _tickerActive = 0;
              _req = _emptyFunc;
            },
            lagSmoothing: function lagSmoothing(threshold, adjustedLag) {
              _lagThreshold = threshold || 1 / _tinyNum;
              _adjustedLag = Math.min(adjustedLag, _lagThreshold, 0);
            },
            fps: function fps(_fps) {
              _gap = 1e3 / (_fps || 240);
              _nextTime = _self.time * 1e3 + _gap;
            },
            add: function add(callback, once, prioritize) {
              var func = once ? function(t, d, f, v) {
                callback(t, d, f, v);
                _self.remove(func);
              } : callback;
              _self.remove(callback);
              _listeners[prioritize ? "unshift" : "push"](func);
              _wake();
              return func;
            },
            remove: function remove(callback, i) {
              ~(i = _listeners.indexOf(callback)) && _listeners.splice(i, 1) && _i >= i && _i--;
            },
            _listeners
          };
          return _self;
        }(), _wake = function _wake2() {
          return !_tickerActive && _ticker.wake();
        }, _easeMap = {}, _customEaseExp = /^[\d.\-M][\d.\-,\s]/, _quotesExp = /["']/g, _parseObjectInString = function _parseObjectInString2(value) {
          var obj = {}, split = value.substr(1, value.length - 3).split(":"), key = split[0], i = 1, l = split.length, index, val, parsedVal;
          for (; i < l; i++) {
            val = split[i];
            index = i !== l - 1 ? val.lastIndexOf(",") : val.length;
            parsedVal = val.substr(0, index);
            obj[key] = isNaN(parsedVal) ? parsedVal.replace(_quotesExp, "").trim() : +parsedVal;
            key = val.substr(index + 1).trim();
          }
          return obj;
        }, _valueInParentheses = function _valueInParentheses2(value) {
          var open = value.indexOf("(") + 1, close = value.indexOf(")"), nested = value.indexOf("(", open);
          return value.substring(open, ~nested && nested < close ? value.indexOf(")", close + 1) : close);
        }, _configEaseFromString = function _configEaseFromString2(name) {
          var split = (name + "").split("("), ease = _easeMap[split[0]];
          return ease && split.length > 1 && ease.config ? ease.config.apply(null, ~name.indexOf("{") ? [_parseObjectInString(split[1])] : _valueInParentheses(name).split(",").map(_numericIfPossible)) : _easeMap._CE && _customEaseExp.test(name) ? _easeMap._CE("", name) : ease;
        }, _invertEase = function _invertEase2(ease) {
          return function(p) {
            return 1 - ease(1 - p);
          };
        }, _propagateYoyoEase = function _propagateYoyoEase2(timeline, isYoyo) {
          var child = timeline._first, ease;
          while (child) {
            if (child instanceof Timeline) {
              _propagateYoyoEase2(child, isYoyo);
            } else if (child.vars.yoyoEase && (!child._yoyo || !child._repeat) && child._yoyo !== isYoyo) {
              if (child.timeline) {
                _propagateYoyoEase2(child.timeline, isYoyo);
              } else {
                ease = child._ease;
                child._ease = child._yEase;
                child._yEase = ease;
                child._yoyo = isYoyo;
              }
            }
            child = child._next;
          }
        }, _parseEase = function _parseEase2(ease, defaultEase) {
          return !ease ? defaultEase : (_isFunction(ease) ? ease : _easeMap[ease] || _configEaseFromString(ease)) || defaultEase;
        }, _insertEase = function _insertEase2(names, easeIn, easeOut, easeInOut) {
          if (easeOut === void 0) {
            easeOut = function easeOut2(p) {
              return 1 - easeIn(1 - p);
            };
          }
          if (easeInOut === void 0) {
            easeInOut = function easeInOut2(p) {
              return p < 0.5 ? easeIn(p * 2) / 2 : 1 - easeIn((1 - p) * 2) / 2;
            };
          }
          var ease = {
            easeIn,
            easeOut,
            easeInOut
          }, lowercaseName;
          _forEachName(names, function(name) {
            _easeMap[name] = _globals[name] = ease;
            _easeMap[lowercaseName = name.toLowerCase()] = easeOut;
            for (var p in ease) {
              _easeMap[lowercaseName + (p === "easeIn" ? ".in" : p === "easeOut" ? ".out" : ".inOut")] = _easeMap[name + "." + p] = ease[p];
            }
          });
          return ease;
        }, _easeInOutFromOut = function _easeInOutFromOut2(easeOut) {
          return function(p) {
            return p < 0.5 ? (1 - easeOut(1 - p * 2)) / 2 : 0.5 + easeOut((p - 0.5) * 2) / 2;
          };
        }, _configElastic = function _configElastic2(type, amplitude, period) {
          var p1 = amplitude >= 1 ? amplitude : 1, p2 = (period || (type ? 0.3 : 0.45)) / (amplitude < 1 ? amplitude : 1), p3 = p2 / _2PI * (Math.asin(1 / p1) || 0), easeOut = function easeOut2(p) {
            return p === 1 ? 1 : p1 * Math.pow(2, -10 * p) * _sin((p - p3) * p2) + 1;
          }, ease = type === "out" ? easeOut : type === "in" ? function(p) {
            return 1 - easeOut(1 - p);
          } : _easeInOutFromOut(easeOut);
          p2 = _2PI / p2;
          ease.config = function(amplitude2, period2) {
            return _configElastic2(type, amplitude2, period2);
          };
          return ease;
        }, _configBack = function _configBack2(type, overshoot) {
          if (overshoot === void 0) {
            overshoot = 1.70158;
          }
          var easeOut = function easeOut2(p) {
            return p ? --p * p * ((overshoot + 1) * p + overshoot) + 1 : 0;
          }, ease = type === "out" ? easeOut : type === "in" ? function(p) {
            return 1 - easeOut(1 - p);
          } : _easeInOutFromOut(easeOut);
          ease.config = function(overshoot2) {
            return _configBack2(type, overshoot2);
          };
          return ease;
        };
        _forEachName("Linear,Quad,Cubic,Quart,Quint,Strong", function(name, i) {
          var power = i < 5 ? i + 1 : i;
          _insertEase(name + ",Power" + (power - 1), i ? function(p) {
            return Math.pow(p, power);
          } : function(p) {
            return p;
          }, function(p) {
            return 1 - Math.pow(1 - p, power);
          }, function(p) {
            return p < 0.5 ? Math.pow(p * 2, power) / 2 : 1 - Math.pow((1 - p) * 2, power) / 2;
          });
        });
        _easeMap.Linear.easeNone = _easeMap.none = _easeMap.Linear.easeIn;
        _insertEase("Elastic", _configElastic("in"), _configElastic("out"), _configElastic());
        (function(n, c) {
          var n1 = 1 / c, n2 = 2 * n1, n3 = 2.5 * n1, easeOut = function easeOut2(p) {
            return p < n1 ? n * p * p : p < n2 ? n * Math.pow(p - 1.5 / c, 2) + 0.75 : p < n3 ? n * (p -= 2.25 / c) * p + 0.9375 : n * Math.pow(p - 2.625 / c, 2) + 0.984375;
          };
          _insertEase("Bounce", function(p) {
            return 1 - easeOut(1 - p);
          }, easeOut);
        })(7.5625, 2.75);
        _insertEase("Expo", function(p) {
          return p ? Math.pow(2, 10 * (p - 1)) : 0;
        });
        _insertEase("Circ", function(p) {
          return -(_sqrt(1 - p * p) - 1);
        });
        _insertEase("Sine", function(p) {
          return p === 1 ? 1 : -_cos(p * _HALF_PI) + 1;
        });
        _insertEase("Back", _configBack("in"), _configBack("out"), _configBack());
        _easeMap.SteppedEase = _easeMap.steps = _globals.SteppedEase = {
          config: function config(steps, immediateStart) {
            if (steps === void 0) {
              steps = 1;
            }
            var p1 = 1 / steps, p2 = steps + (immediateStart ? 0 : 1), p3 = immediateStart ? 1 : 0, max = 1 - _tinyNum;
            return function(p) {
              return ((p2 * _clamp(0, max, p) | 0) + p3) * p1;
            };
          }
        };
        _defaults.ease = _easeMap["quad.out"];
        _forEachName("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(name) {
          return _callbackNames += name + "," + name + "Params,";
        });
        var GSCache = function GSCache2(target, harness) {
          this.id = _gsID++;
          target._gsap = this;
          this.target = target;
          this.harness = harness;
          this.get = harness ? harness.get : _getProperty;
          this.set = harness ? harness.getSetter : _getSetter;
        };
        var Animation = function() {
          function Animation2(vars) {
            this.vars = vars;
            this._delay = +vars.delay || 0;
            if (this._repeat = vars.repeat === Infinity ? -2 : vars.repeat || 0) {
              this._rDelay = vars.repeatDelay || 0;
              this._yoyo = !!vars.yoyo || !!vars.yoyoEase;
            }
            this._ts = 1;
            _setDuration(this, +vars.duration, 1, 1);
            this.data = vars.data;
            _tickerActive || _ticker.wake();
          }
          var _proto = Animation2.prototype;
          _proto.delay = function delay(value) {
            if (value || value === 0) {
              this.parent && this.parent.smoothChildTiming && this.startTime(this._start + value - this._delay);
              this._delay = value;
              return this;
            }
            return this._delay;
          };
          _proto.duration = function duration(value) {
            return arguments.length ? this.totalDuration(this._repeat > 0 ? value + (value + this._rDelay) * this._repeat : value) : this.totalDuration() && this._dur;
          };
          _proto.totalDuration = function totalDuration(value) {
            if (!arguments.length) {
              return this._tDur;
            }
            this._dirty = 0;
            return _setDuration(this, this._repeat < 0 ? value : (value - this._repeat * this._rDelay) / (this._repeat + 1));
          };
          _proto.totalTime = function totalTime(_totalTime, suppressEvents) {
            _wake();
            if (!arguments.length) {
              return this._tTime;
            }
            var parent = this._dp;
            if (parent && parent.smoothChildTiming && this._ts) {
              _alignPlayhead(this, _totalTime);
              !parent._dp || parent.parent || _postAddChecks(parent, this);
              while (parent && parent.parent) {
                if (parent.parent._time !== parent._start + (parent._ts >= 0 ? parent._tTime / parent._ts : (parent.totalDuration() - parent._tTime) / -parent._ts)) {
                  parent.totalTime(parent._tTime, true);
                }
                parent = parent.parent;
              }
              if (!this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && _totalTime < this._tDur || this._ts < 0 && _totalTime > 0 || !this._tDur && !_totalTime)) {
                _addToTimeline(this._dp, this, this._start - this._delay);
              }
            }
            if (this._tTime !== _totalTime || !this._dur && !suppressEvents || this._initted && Math.abs(this._zTime) === _tinyNum || !_totalTime && !this._initted && (this.add || this._ptLookup)) {
              this._ts || (this._pTime = _totalTime);
              _lazySafeRender(this, _totalTime, suppressEvents);
            }
            return this;
          };
          _proto.time = function time(value, suppressEvents) {
            return arguments.length ? this.totalTime(Math.min(this.totalDuration(), value + _elapsedCycleDuration(this)) % (this._dur + this._rDelay) || (value ? this._dur : 0), suppressEvents) : this._time;
          };
          _proto.totalProgress = function totalProgress(value, suppressEvents) {
            return arguments.length ? this.totalTime(this.totalDuration() * value, suppressEvents) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio;
          };
          _proto.progress = function progress(value, suppressEvents) {
            return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - value : value) + _elapsedCycleDuration(this), suppressEvents) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio;
          };
          _proto.iteration = function iteration(value, suppressEvents) {
            var cycleDuration = this.duration() + this._rDelay;
            return arguments.length ? this.totalTime(this._time + (value - 1) * cycleDuration, suppressEvents) : this._repeat ? _animationCycle(this._tTime, cycleDuration) + 1 : 1;
          };
          _proto.timeScale = function timeScale(value) {
            if (!arguments.length) {
              return this._rts === -_tinyNum ? 0 : this._rts;
            }
            if (this._rts === value) {
              return this;
            }
            var tTime = this.parent && this._ts ? _parentToChildTotalTime(this.parent._time, this) : this._tTime;
            this._rts = +value || 0;
            this._ts = this._ps || value === -_tinyNum ? 0 : this._rts;
            this.totalTime(_clamp(-this._delay, this._tDur, tTime), true);
            _setEnd(this);
            return _recacheAncestors(this);
          };
          _proto.paused = function paused(value) {
            if (!arguments.length) {
              return this._ps;
            }
            if (this._ps !== value) {
              this._ps = value;
              if (value) {
                this._pTime = this._tTime || Math.max(-this._delay, this.rawTime());
                this._ts = this._act = 0;
              } else {
                _wake();
                this._ts = this._rts;
                this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== _tinyNum && (this._tTime -= _tinyNum));
              }
            }
            return this;
          };
          _proto.startTime = function startTime(value) {
            if (arguments.length) {
              this._start = value;
              var parent = this.parent || this._dp;
              parent && (parent._sort || !this.parent) && _addToTimeline(parent, this, value - this._delay);
              return this;
            }
            return this._start;
          };
          _proto.endTime = function endTime(includeRepeats) {
            return this._start + (_isNotFalse(includeRepeats) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
          };
          _proto.rawTime = function rawTime(wrapRepeats) {
            var parent = this.parent || this._dp;
            return !parent ? this._tTime : wrapRepeats && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : !this._ts ? this._tTime : _parentToChildTotalTime(parent.rawTime(wrapRepeats), this);
          };
          _proto.globalTime = function globalTime(rawTime) {
            var animation = this, time = arguments.length ? rawTime : animation.rawTime();
            while (animation) {
              time = animation._start + time / (animation._ts || 1);
              animation = animation._dp;
            }
            return time;
          };
          _proto.repeat = function repeat(value) {
            if (arguments.length) {
              this._repeat = value === Infinity ? -2 : value;
              return _onUpdateTotalDuration(this);
            }
            return this._repeat === -2 ? Infinity : this._repeat;
          };
          _proto.repeatDelay = function repeatDelay(value) {
            if (arguments.length) {
              var time = this._time;
              this._rDelay = value;
              _onUpdateTotalDuration(this);
              return time ? this.time(time) : this;
            }
            return this._rDelay;
          };
          _proto.yoyo = function yoyo(value) {
            if (arguments.length) {
              this._yoyo = value;
              return this;
            }
            return this._yoyo;
          };
          _proto.seek = function seek(position, suppressEvents) {
            return this.totalTime(_parsePosition(this, position), _isNotFalse(suppressEvents));
          };
          _proto.restart = function restart(includeDelay, suppressEvents) {
            return this.play().totalTime(includeDelay ? -this._delay : 0, _isNotFalse(suppressEvents));
          };
          _proto.play = function play(from, suppressEvents) {
            from != null && this.seek(from, suppressEvents);
            return this.reversed(false).paused(false);
          };
          _proto.reverse = function reverse(from, suppressEvents) {
            from != null && this.seek(from || this.totalDuration(), suppressEvents);
            return this.reversed(true).paused(false);
          };
          _proto.pause = function pause(atTime, suppressEvents) {
            atTime != null && this.seek(atTime, suppressEvents);
            return this.paused(true);
          };
          _proto.resume = function resume() {
            return this.paused(false);
          };
          _proto.reversed = function reversed(value) {
            if (arguments.length) {
              !!value !== this.reversed() && this.timeScale(-this._rts || (value ? -_tinyNum : 0));
              return this;
            }
            return this._rts < 0;
          };
          _proto.invalidate = function invalidate() {
            this._initted = this._act = 0;
            this._zTime = -_tinyNum;
            return this;
          };
          _proto.isActive = function isActive() {
            var parent = this.parent || this._dp, start = this._start, rawTime;
            return !!(!parent || this._ts && this._initted && parent.isActive() && (rawTime = parent.rawTime(true)) >= start && rawTime < this.endTime(true) - _tinyNum);
          };
          _proto.eventCallback = function eventCallback(type, callback, params) {
            var vars = this.vars;
            if (arguments.length > 1) {
              if (!callback) {
                delete vars[type];
              } else {
                vars[type] = callback;
                params && (vars[type + "Params"] = params);
                type === "onUpdate" && (this._onUpdate = callback);
              }
              return this;
            }
            return vars[type];
          };
          _proto.then = function then(onFulfilled) {
            var self2 = this;
            return new Promise(function(resolve) {
              var f = _isFunction(onFulfilled) ? onFulfilled : _passThrough, _resolve = function _resolve2() {
                var _then = self2.then;
                self2.then = null;
                _isFunction(f) && (f = f(self2)) && (f.then || f === self2) && (self2.then = _then);
                resolve(f);
                self2.then = _then;
              };
              if (self2._initted && self2.totalProgress() === 1 && self2._ts >= 0 || !self2._tTime && self2._ts < 0) {
                _resolve();
              } else {
                self2._prom = _resolve;
              }
            });
          };
          _proto.kill = function kill() {
            _interrupt(this);
          };
          return Animation2;
        }();
        _setDefaults(Animation.prototype, {
          _time: 0,
          _start: 0,
          _end: 0,
          _tTime: 0,
          _tDur: 0,
          _dirty: 0,
          _repeat: 0,
          _yoyo: false,
          parent: null,
          _initted: false,
          _rDelay: 0,
          _ts: 1,
          _dp: 0,
          ratio: 0,
          _zTime: -_tinyNum,
          _prom: 0,
          _ps: false,
          _rts: 1
        });
        var Timeline = function(_Animation) {
          _inheritsLoose(Timeline2, _Animation);
          function Timeline2(vars, position) {
            var _this;
            if (vars === void 0) {
              vars = {};
            }
            _this = _Animation.call(this, vars) || this;
            _this.labels = {};
            _this.smoothChildTiming = !!vars.smoothChildTiming;
            _this.autoRemoveChildren = !!vars.autoRemoveChildren;
            _this._sort = _isNotFalse(vars.sortChildren);
            _globalTimeline && _addToTimeline(vars.parent || _globalTimeline, _assertThisInitialized2(_this), position);
            vars.reversed && _this.reverse();
            vars.paused && _this.paused(true);
            vars.scrollTrigger && _scrollTrigger(_assertThisInitialized2(_this), vars.scrollTrigger);
            return _this;
          }
          var _proto2 = Timeline2.prototype;
          _proto2.to = function to(targets, vars, position) {
            _createTweenType(0, arguments, this);
            return this;
          };
          _proto2.from = function from(targets, vars, position) {
            _createTweenType(1, arguments, this);
            return this;
          };
          _proto2.fromTo = function fromTo(targets, fromVars, toVars, position) {
            _createTweenType(2, arguments, this);
            return this;
          };
          _proto2.set = function set(targets, vars, position) {
            vars.duration = 0;
            vars.parent = this;
            _inheritDefaults(vars).repeatDelay || (vars.repeat = 0);
            vars.immediateRender = !!vars.immediateRender;
            new Tween(targets, vars, _parsePosition(this, position), 1);
            return this;
          };
          _proto2.call = function call(callback, params, position) {
            return _addToTimeline(this, Tween.delayedCall(0, callback, params), position);
          };
          _proto2.staggerTo = function staggerTo(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams) {
            vars.duration = duration;
            vars.stagger = vars.stagger || stagger;
            vars.onComplete = onCompleteAll;
            vars.onCompleteParams = onCompleteAllParams;
            vars.parent = this;
            new Tween(targets, vars, _parsePosition(this, position));
            return this;
          };
          _proto2.staggerFrom = function staggerFrom(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams) {
            vars.runBackwards = 1;
            _inheritDefaults(vars).immediateRender = _isNotFalse(vars.immediateRender);
            return this.staggerTo(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams);
          };
          _proto2.staggerFromTo = function staggerFromTo(targets, duration, fromVars, toVars, stagger, position, onCompleteAll, onCompleteAllParams) {
            toVars.startAt = fromVars;
            _inheritDefaults(toVars).immediateRender = _isNotFalse(toVars.immediateRender);
            return this.staggerTo(targets, duration, toVars, stagger, position, onCompleteAll, onCompleteAllParams);
          };
          _proto2.render = function render(totalTime, suppressEvents, force) {
            var prevTime = this._time, tDur = this._dirty ? this.totalDuration() : this._tDur, dur = this._dur, tTime = totalTime <= 0 ? 0 : _roundPrecise(totalTime), crossingStart = this._zTime < 0 !== totalTime < 0 && (this._initted || !dur), time, child, next, iteration, cycleDuration, prevPaused, pauseTween, timeScale, prevStart, prevIteration, yoyo, isYoyo;
            this !== _globalTimeline && tTime > tDur && totalTime >= 0 && (tTime = tDur);
            if (tTime !== this._tTime || force || crossingStart) {
              if (prevTime !== this._time && dur) {
                tTime += this._time - prevTime;
                totalTime += this._time - prevTime;
              }
              time = tTime;
              prevStart = this._start;
              timeScale = this._ts;
              prevPaused = !timeScale;
              if (crossingStart) {
                dur || (prevTime = this._zTime);
                (totalTime || !suppressEvents) && (this._zTime = totalTime);
              }
              if (this._repeat) {
                yoyo = this._yoyo;
                cycleDuration = dur + this._rDelay;
                if (this._repeat < -1 && totalTime < 0) {
                  return this.totalTime(cycleDuration * 100 + totalTime, suppressEvents, force);
                }
                time = _roundPrecise(tTime % cycleDuration);
                if (tTime === tDur) {
                  iteration = this._repeat;
                  time = dur;
                } else {
                  iteration = ~~(tTime / cycleDuration);
                  if (iteration && iteration === tTime / cycleDuration) {
                    time = dur;
                    iteration--;
                  }
                  time > dur && (time = dur);
                }
                prevIteration = _animationCycle(this._tTime, cycleDuration);
                !prevTime && this._tTime && prevIteration !== iteration && (prevIteration = iteration);
                if (yoyo && iteration & 1) {
                  time = dur - time;
                  isYoyo = 1;
                }
                if (iteration !== prevIteration && !this._lock) {
                  var rewinding = yoyo && prevIteration & 1, doesWrap = rewinding === (yoyo && iteration & 1);
                  iteration < prevIteration && (rewinding = !rewinding);
                  prevTime = rewinding ? 0 : dur;
                  this._lock = 1;
                  this.render(prevTime || (isYoyo ? 0 : _roundPrecise(iteration * cycleDuration)), suppressEvents, !dur)._lock = 0;
                  this._tTime = tTime;
                  !suppressEvents && this.parent && _callback(this, "onRepeat");
                  this.vars.repeatRefresh && !isYoyo && (this.invalidate()._lock = 1);
                  if (prevTime && prevTime !== this._time || prevPaused !== !this._ts || this.vars.onRepeat && !this.parent && !this._act) {
                    return this;
                  }
                  dur = this._dur;
                  tDur = this._tDur;
                  if (doesWrap) {
                    this._lock = 2;
                    prevTime = rewinding ? dur : -1e-4;
                    this.render(prevTime, true);
                    this.vars.repeatRefresh && !isYoyo && this.invalidate();
                  }
                  this._lock = 0;
                  if (!this._ts && !prevPaused) {
                    return this;
                  }
                  _propagateYoyoEase(this, isYoyo);
                }
              }
              if (this._hasPause && !this._forcing && this._lock < 2) {
                pauseTween = _findNextPauseTween(this, _roundPrecise(prevTime), _roundPrecise(time));
                if (pauseTween) {
                  tTime -= time - (time = pauseTween._start);
                }
              }
              this._tTime = tTime;
              this._time = time;
              this._act = !timeScale;
              if (!this._initted) {
                this._onUpdate = this.vars.onUpdate;
                this._initted = 1;
                this._zTime = totalTime;
                prevTime = 0;
              }
              if (!prevTime && time && !suppressEvents) {
                _callback(this, "onStart");
                if (this._tTime !== tTime) {
                  return this;
                }
              }
              if (time >= prevTime && totalTime >= 0) {
                child = this._first;
                while (child) {
                  next = child._next;
                  if ((child._act || time >= child._start) && child._ts && pauseTween !== child) {
                    if (child.parent !== this) {
                      return this.render(totalTime, suppressEvents, force);
                    }
                    child.render(child._ts > 0 ? (time - child._start) * child._ts : (child._dirty ? child.totalDuration() : child._tDur) + (time - child._start) * child._ts, suppressEvents, force);
                    if (time !== this._time || !this._ts && !prevPaused) {
                      pauseTween = 0;
                      next && (tTime += this._zTime = -_tinyNum);
                      break;
                    }
                  }
                  child = next;
                }
              } else {
                child = this._last;
                var adjustedTime = totalTime < 0 ? totalTime : time;
                while (child) {
                  next = child._prev;
                  if ((child._act || adjustedTime <= child._end) && child._ts && pauseTween !== child) {
                    if (child.parent !== this) {
                      return this.render(totalTime, suppressEvents, force);
                    }
                    child.render(child._ts > 0 ? (adjustedTime - child._start) * child._ts : (child._dirty ? child.totalDuration() : child._tDur) + (adjustedTime - child._start) * child._ts, suppressEvents, force);
                    if (time !== this._time || !this._ts && !prevPaused) {
                      pauseTween = 0;
                      next && (tTime += this._zTime = adjustedTime ? -_tinyNum : _tinyNum);
                      break;
                    }
                  }
                  child = next;
                }
              }
              if (pauseTween && !suppressEvents) {
                this.pause();
                pauseTween.render(time >= prevTime ? 0 : -_tinyNum)._zTime = time >= prevTime ? 1 : -1;
                if (this._ts) {
                  this._start = prevStart;
                  _setEnd(this);
                  return this.render(totalTime, suppressEvents, force);
                }
              }
              this._onUpdate && !suppressEvents && _callback(this, "onUpdate", true);
              if (tTime === tDur && this._tTime >= this.totalDuration() || !tTime && prevTime) {
                if (prevStart === this._start || Math.abs(timeScale) !== Math.abs(this._ts)) {
                  if (!this._lock) {
                    (totalTime || !dur) && (tTime === tDur && this._ts > 0 || !tTime && this._ts < 0) && _removeFromParent(this, 1);
                    if (!suppressEvents && !(totalTime < 0 && !prevTime) && (tTime || prevTime || !tDur)) {
                      _callback(this, tTime === tDur && totalTime >= 0 ? "onComplete" : "onReverseComplete", true);
                      this._prom && !(tTime < tDur && this.timeScale() > 0) && this._prom();
                    }
                  }
                }
              }
            }
            return this;
          };
          _proto2.add = function add(child, position) {
            var _this2 = this;
            _isNumber(position) || (position = _parsePosition(this, position, child));
            if (!(child instanceof Animation)) {
              if (_isArray(child)) {
                child.forEach(function(obj) {
                  return _this2.add(obj, position);
                });
                return this;
              }
              if (_isString(child)) {
                return this.addLabel(child, position);
              }
              if (_isFunction(child)) {
                child = Tween.delayedCall(0, child);
              } else {
                return this;
              }
            }
            return this !== child ? _addToTimeline(this, child, position) : this;
          };
          _proto2.getChildren = function getChildren(nested, tweens, timelines, ignoreBeforeTime) {
            if (nested === void 0) {
              nested = true;
            }
            if (tweens === void 0) {
              tweens = true;
            }
            if (timelines === void 0) {
              timelines = true;
            }
            if (ignoreBeforeTime === void 0) {
              ignoreBeforeTime = -_bigNum;
            }
            var a = [], child = this._first;
            while (child) {
              if (child._start >= ignoreBeforeTime) {
                if (child instanceof Tween) {
                  tweens && a.push(child);
                } else {
                  timelines && a.push(child);
                  nested && a.push.apply(a, child.getChildren(true, tweens, timelines));
                }
              }
              child = child._next;
            }
            return a;
          };
          _proto2.getById = function getById(id) {
            var animations = this.getChildren(1, 1, 1), i = animations.length;
            while (i--) {
              if (animations[i].vars.id === id) {
                return animations[i];
              }
            }
          };
          _proto2.remove = function remove(child) {
            if (_isString(child)) {
              return this.removeLabel(child);
            }
            if (_isFunction(child)) {
              return this.killTweensOf(child);
            }
            _removeLinkedListItem(this, child);
            if (child === this._recent) {
              this._recent = this._last;
            }
            return _uncache(this);
          };
          _proto2.totalTime = function totalTime(_totalTime2, suppressEvents) {
            if (!arguments.length) {
              return this._tTime;
            }
            this._forcing = 1;
            if (!this._dp && this._ts) {
              this._start = _roundPrecise(_ticker.time - (this._ts > 0 ? _totalTime2 / this._ts : (this.totalDuration() - _totalTime2) / -this._ts));
            }
            _Animation.prototype.totalTime.call(this, _totalTime2, suppressEvents);
            this._forcing = 0;
            return this;
          };
          _proto2.addLabel = function addLabel(label, position) {
            this.labels[label] = _parsePosition(this, position);
            return this;
          };
          _proto2.removeLabel = function removeLabel(label) {
            delete this.labels[label];
            return this;
          };
          _proto2.addPause = function addPause(position, callback, params) {
            var t = Tween.delayedCall(0, callback || _emptyFunc, params);
            t.data = "isPause";
            this._hasPause = 1;
            return _addToTimeline(this, t, _parsePosition(this, position));
          };
          _proto2.removePause = function removePause(position) {
            var child = this._first;
            position = _parsePosition(this, position);
            while (child) {
              if (child._start === position && child.data === "isPause") {
                _removeFromParent(child);
              }
              child = child._next;
            }
          };
          _proto2.killTweensOf = function killTweensOf(targets, props, onlyActive) {
            var tweens = this.getTweensOf(targets, onlyActive), i = tweens.length;
            while (i--) {
              _overwritingTween !== tweens[i] && tweens[i].kill(targets, props);
            }
            return this;
          };
          _proto2.getTweensOf = function getTweensOf(targets, onlyActive) {
            var a = [], parsedTargets = toArray(targets), child = this._first, isGlobalTime = _isNumber(onlyActive), children;
            while (child) {
              if (child instanceof Tween) {
                if (_arrayContainsAny(child._targets, parsedTargets) && (isGlobalTime ? (!_overwritingTween || child._initted && child._ts) && child.globalTime(0) <= onlyActive && child.globalTime(child.totalDuration()) > onlyActive : !onlyActive || child.isActive())) {
                  a.push(child);
                }
              } else if ((children = child.getTweensOf(parsedTargets, onlyActive)).length) {
                a.push.apply(a, children);
              }
              child = child._next;
            }
            return a;
          };
          _proto2.tweenTo = function tweenTo(position, vars) {
            vars = vars || {};
            var tl2 = this, endTime = _parsePosition(tl2, position), _vars = vars, startAt = _vars.startAt, _onStart = _vars.onStart, onStartParams = _vars.onStartParams, immediateRender = _vars.immediateRender, initted, tween = Tween.to(tl2, _setDefaults({
              ease: vars.ease || "none",
              lazy: false,
              immediateRender: false,
              time: endTime,
              overwrite: "auto",
              duration: vars.duration || Math.abs((endTime - (startAt && "time" in startAt ? startAt.time : tl2._time)) / tl2.timeScale()) || _tinyNum,
              onStart: function onStart() {
                tl2.pause();
                if (!initted) {
                  var duration = vars.duration || Math.abs((endTime - (startAt && "time" in startAt ? startAt.time : tl2._time)) / tl2.timeScale());
                  tween._dur !== duration && _setDuration(tween, duration, 0, 1).render(tween._time, true, true);
                  initted = 1;
                }
                _onStart && _onStart.apply(tween, onStartParams || []);
              }
            }, vars));
            return immediateRender ? tween.render(0) : tween;
          };
          _proto2.tweenFromTo = function tweenFromTo(fromPosition, toPosition, vars) {
            return this.tweenTo(toPosition, _setDefaults({
              startAt: {
                time: _parsePosition(this, fromPosition)
              }
            }, vars));
          };
          _proto2.recent = function recent() {
            return this._recent;
          };
          _proto2.nextLabel = function nextLabel(afterTime) {
            if (afterTime === void 0) {
              afterTime = this._time;
            }
            return _getLabelInDirection(this, _parsePosition(this, afterTime));
          };
          _proto2.previousLabel = function previousLabel(beforeTime) {
            if (beforeTime === void 0) {
              beforeTime = this._time;
            }
            return _getLabelInDirection(this, _parsePosition(this, beforeTime), 1);
          };
          _proto2.currentLabel = function currentLabel(value) {
            return arguments.length ? this.seek(value, true) : this.previousLabel(this._time + _tinyNum);
          };
          _proto2.shiftChildren = function shiftChildren(amount, adjustLabels, ignoreBeforeTime) {
            if (ignoreBeforeTime === void 0) {
              ignoreBeforeTime = 0;
            }
            var child = this._first, labels = this.labels, p;
            while (child) {
              if (child._start >= ignoreBeforeTime) {
                child._start += amount;
                child._end += amount;
              }
              child = child._next;
            }
            if (adjustLabels) {
              for (p in labels) {
                if (labels[p] >= ignoreBeforeTime) {
                  labels[p] += amount;
                }
              }
            }
            return _uncache(this);
          };
          _proto2.invalidate = function invalidate() {
            var child = this._first;
            this._lock = 0;
            while (child) {
              child.invalidate();
              child = child._next;
            }
            return _Animation.prototype.invalidate.call(this);
          };
          _proto2.clear = function clear(includeLabels) {
            if (includeLabels === void 0) {
              includeLabels = true;
            }
            var child = this._first, next;
            while (child) {
              next = child._next;
              this.remove(child);
              child = next;
            }
            this._dp && (this._time = this._tTime = this._pTime = 0);
            includeLabels && (this.labels = {});
            return _uncache(this);
          };
          _proto2.totalDuration = function totalDuration(value) {
            var max = 0, self2 = this, child = self2._last, prevStart = _bigNum, prev, start, parent;
            if (arguments.length) {
              return self2.timeScale((self2._repeat < 0 ? self2.duration() : self2.totalDuration()) / (self2.reversed() ? -value : value));
            }
            if (self2._dirty) {
              parent = self2.parent;
              while (child) {
                prev = child._prev;
                child._dirty && child.totalDuration();
                start = child._start;
                if (start > prevStart && self2._sort && child._ts && !self2._lock) {
                  self2._lock = 1;
                  _addToTimeline(self2, child, start - child._delay, 1)._lock = 0;
                } else {
                  prevStart = start;
                }
                if (start < 0 && child._ts) {
                  max -= start;
                  if (!parent && !self2._dp || parent && parent.smoothChildTiming) {
                    self2._start += start / self2._ts;
                    self2._time -= start;
                    self2._tTime -= start;
                  }
                  self2.shiftChildren(-start, false, -Infinity);
                  prevStart = 0;
                }
                child._end > max && child._ts && (max = child._end);
                child = prev;
              }
              _setDuration(self2, self2 === _globalTimeline && self2._time > max ? self2._time : max, 1, 1);
              self2._dirty = 0;
            }
            return self2._tDur;
          };
          Timeline2.updateRoot = function updateRoot(time) {
            if (_globalTimeline._ts) {
              _lazySafeRender(_globalTimeline, _parentToChildTotalTime(time, _globalTimeline));
              _lastRenderedFrame = _ticker.frame;
            }
            if (_ticker.frame >= _nextGCFrame) {
              _nextGCFrame += _config.autoSleep || 120;
              var child = _globalTimeline._first;
              if (!child || !child._ts) {
                if (_config.autoSleep && _ticker._listeners.length < 2) {
                  while (child && !child._ts) {
                    child = child._next;
                  }
                  child || _ticker.sleep();
                }
              }
            }
          };
          return Timeline2;
        }(Animation);
        _setDefaults(Timeline.prototype, {
          _lock: 0,
          _hasPause: 0,
          _forcing: 0
        });
        var _addComplexStringPropTween = function _addComplexStringPropTween2(target, prop, start, end, setter, stringFilter, funcParam) {
          var pt = new PropTween(this._pt, target, prop, 0, 1, _renderComplexString, null, setter), index = 0, matchIndex = 0, result, startNums, color, endNum, chunk, startNum, hasRandom, a;
          pt.b = start;
          pt.e = end;
          start += "";
          end += "";
          if (hasRandom = ~end.indexOf("random(")) {
            end = _replaceRandom(end);
          }
          if (stringFilter) {
            a = [start, end];
            stringFilter(a, target, prop);
            start = a[0];
            end = a[1];
          }
          startNums = start.match(_complexStringNumExp) || [];
          while (result = _complexStringNumExp.exec(end)) {
            endNum = result[0];
            chunk = end.substring(index, result.index);
            if (color) {
              color = (color + 1) % 5;
            } else if (chunk.substr(-5) === "rgba(") {
              color = 1;
            }
            if (endNum !== startNums[matchIndex++]) {
              startNum = parseFloat(startNums[matchIndex - 1]) || 0;
              pt._pt = {
                _next: pt._pt,
                p: chunk || matchIndex === 1 ? chunk : ",",
                s: startNum,
                c: endNum.charAt(1) === "=" ? _parseRelative(startNum, endNum) - startNum : parseFloat(endNum) - startNum,
                m: color && color < 4 ? Math.round : 0
              };
              index = _complexStringNumExp.lastIndex;
            }
          }
          pt.c = index < end.length ? end.substring(index, end.length) : "";
          pt.fp = funcParam;
          if (_relExp.test(end) || hasRandom) {
            pt.e = 0;
          }
          this._pt = pt;
          return pt;
        }, _addPropTween = function _addPropTween2(target, prop, start, end, index, targets, modifier, stringFilter, funcParam) {
          _isFunction(end) && (end = end(index || 0, target, targets));
          var currentValue = target[prop], parsedStart = start !== "get" ? start : !_isFunction(currentValue) ? currentValue : funcParam ? target[prop.indexOf("set") || !_isFunction(target["get" + prop.substr(3)]) ? prop : "get" + prop.substr(3)](funcParam) : target[prop](), setter = !_isFunction(currentValue) ? _setterPlain : funcParam ? _setterFuncWithParam : _setterFunc, pt;
          if (_isString(end)) {
            if (~end.indexOf("random(")) {
              end = _replaceRandom(end);
            }
            if (end.charAt(1) === "=") {
              pt = _parseRelative(parsedStart, end) + (getUnit(parsedStart) || 0);
              if (pt || pt === 0) {
                end = pt;
              }
            }
          }
          if (parsedStart !== end || _forceAllPropTweens) {
            if (!isNaN(parsedStart * end) && end !== "") {
              pt = new PropTween(this._pt, target, prop, +parsedStart || 0, end - (parsedStart || 0), typeof currentValue === "boolean" ? _renderBoolean : _renderPlain, 0, setter);
              funcParam && (pt.fp = funcParam);
              modifier && pt.modifier(modifier, this, target);
              return this._pt = pt;
            }
            !currentValue && !(prop in target) && _missingPlugin(prop, end);
            return _addComplexStringPropTween.call(this, target, prop, parsedStart, end, setter, stringFilter || _config.stringFilter, funcParam);
          }
        }, _processVars = function _processVars2(vars, index, target, targets, tween) {
          _isFunction(vars) && (vars = _parseFuncOrString(vars, tween, index, target, targets));
          if (!_isObject(vars) || vars.style && vars.nodeType || _isArray(vars) || _isTypedArray(vars)) {
            return _isString(vars) ? _parseFuncOrString(vars, tween, index, target, targets) : vars;
          }
          var copy = {}, p;
          for (p in vars) {
            copy[p] = _parseFuncOrString(vars[p], tween, index, target, targets);
          }
          return copy;
        }, _checkPlugin = function _checkPlugin2(property, vars, tween, index, target, targets) {
          var plugin, pt, ptLookup, i;
          if (_plugins[property] && (plugin = new _plugins[property]()).init(target, plugin.rawVars ? vars[property] : _processVars(vars[property], index, target, targets, tween), tween, index, targets) !== false) {
            tween._pt = pt = new PropTween(tween._pt, target, property, 0, 1, plugin.render, plugin, 0, plugin.priority);
            if (tween !== _quickTween) {
              ptLookup = tween._ptLookup[tween._targets.indexOf(target)];
              i = plugin._props.length;
              while (i--) {
                ptLookup[plugin._props[i]] = pt;
              }
            }
          }
          return plugin;
        }, _overwritingTween, _forceAllPropTweens, _initTween = function _initTween2(tween, time) {
          var vars = tween.vars, ease = vars.ease, startAt = vars.startAt, immediateRender = vars.immediateRender, lazy = vars.lazy, onUpdate = vars.onUpdate, onUpdateParams = vars.onUpdateParams, callbackScope = vars.callbackScope, runBackwards = vars.runBackwards, yoyoEase = vars.yoyoEase, keyframes = vars.keyframes, autoRevert = vars.autoRevert, dur = tween._dur, prevStartAt = tween._startAt, targets = tween._targets, parent = tween.parent, fullTargets = parent && parent.data === "nested" ? parent.parent._targets : targets, autoOverwrite = tween._overwrite === "auto" && !_suppressOverwrites, tl2 = tween.timeline, cleanVars, i, p, pt, target, hasPriority, gsData, harness, plugin, ptLookup, index, harnessVars, overwritten;
          tl2 && (!keyframes || !ease) && (ease = "none");
          tween._ease = _parseEase(ease, _defaults.ease);
          tween._yEase = yoyoEase ? _invertEase(_parseEase(yoyoEase === true ? ease : yoyoEase, _defaults.ease)) : 0;
          if (yoyoEase && tween._yoyo && !tween._repeat) {
            yoyoEase = tween._yEase;
            tween._yEase = tween._ease;
            tween._ease = yoyoEase;
          }
          tween._from = !tl2 && !!vars.runBackwards;
          if (!tl2 || keyframes && !vars.stagger) {
            harness = targets[0] ? _getCache(targets[0]).harness : 0;
            harnessVars = harness && vars[harness.prop];
            cleanVars = _copyExcluding(vars, _reservedProps);
            if (prevStartAt) {
              _removeFromParent(prevStartAt.render(-1, true));
              prevStartAt._lazy = 0;
            }
            if (startAt) {
              _removeFromParent(tween._startAt = Tween.set(targets, _setDefaults({
                data: "isStart",
                overwrite: false,
                parent,
                immediateRender: true,
                lazy: _isNotFalse(lazy),
                startAt: null,
                delay: 0,
                onUpdate,
                onUpdateParams,
                callbackScope,
                stagger: 0
              }, startAt)));
              time < 0 && !immediateRender && !autoRevert && tween._startAt.render(-1, true);
              if (immediateRender) {
                time > 0 && !autoRevert && (tween._startAt = 0);
                if (dur && time <= 0) {
                  time && (tween._zTime = time);
                  return;
                }
              } else if (autoRevert === false) {
                tween._startAt = 0;
              }
            } else if (runBackwards && dur) {
              if (prevStartAt) {
                !autoRevert && (tween._startAt = 0);
              } else {
                time && (immediateRender = false);
                p = _setDefaults({
                  overwrite: false,
                  data: "isFromStart",
                  lazy: immediateRender && _isNotFalse(lazy),
                  immediateRender,
                  stagger: 0,
                  parent
                }, cleanVars);
                harnessVars && (p[harness.prop] = harnessVars);
                _removeFromParent(tween._startAt = Tween.set(targets, p));
                time < 0 && tween._startAt.render(-1, true);
                tween._zTime = time;
                if (!immediateRender) {
                  _initTween2(tween._startAt, _tinyNum);
                } else if (!time) {
                  return;
                }
              }
            }
            tween._pt = tween._ptCache = 0;
            lazy = dur && _isNotFalse(lazy) || lazy && !dur;
            for (i = 0; i < targets.length; i++) {
              target = targets[i];
              gsData = target._gsap || _harness(targets)[i]._gsap;
              tween._ptLookup[i] = ptLookup = {};
              _lazyLookup[gsData.id] && _lazyTweens.length && _lazyRender();
              index = fullTargets === targets ? i : fullTargets.indexOf(target);
              if (harness && (plugin = new harness()).init(target, harnessVars || cleanVars, tween, index, fullTargets) !== false) {
                tween._pt = pt = new PropTween(tween._pt, target, plugin.name, 0, 1, plugin.render, plugin, 0, plugin.priority);
                plugin._props.forEach(function(name) {
                  ptLookup[name] = pt;
                });
                plugin.priority && (hasPriority = 1);
              }
              if (!harness || harnessVars) {
                for (p in cleanVars) {
                  if (_plugins[p] && (plugin = _checkPlugin(p, cleanVars, tween, index, target, fullTargets))) {
                    plugin.priority && (hasPriority = 1);
                  } else {
                    ptLookup[p] = pt = _addPropTween.call(tween, target, p, "get", cleanVars[p], index, fullTargets, 0, vars.stringFilter);
                  }
                }
              }
              tween._op && tween._op[i] && tween.kill(target, tween._op[i]);
              if (autoOverwrite && tween._pt) {
                _overwritingTween = tween;
                _globalTimeline.killTweensOf(target, ptLookup, tween.globalTime(time));
                overwritten = !tween.parent;
                _overwritingTween = 0;
              }
              tween._pt && lazy && (_lazyLookup[gsData.id] = 1);
            }
            hasPriority && _sortPropTweensByPriority(tween);
            tween._onInit && tween._onInit(tween);
          }
          tween._onUpdate = onUpdate;
          tween._initted = (!tween._op || tween._pt) && !overwritten;
          keyframes && time <= 0 && tl2.render(_bigNum, true, true);
        }, _updatePropTweens = function _updatePropTweens2(tween, property, value, start, startIsRelative, ratio, time) {
          var ptCache = (tween._pt && tween._ptCache || (tween._ptCache = {}))[property], pt, lookup, i;
          if (!ptCache) {
            ptCache = tween._ptCache[property] = [];
            lookup = tween._ptLookup;
            i = tween._targets.length;
            while (i--) {
              pt = lookup[i][property];
              if (pt && pt.d && pt.d._pt) {
                pt = pt.d._pt;
                while (pt && pt.p !== property) {
                  pt = pt._next;
                }
              }
              if (!pt) {
                _forceAllPropTweens = 1;
                tween.vars[property] = "+=0";
                _initTween(tween, time);
                _forceAllPropTweens = 0;
                return 1;
              }
              ptCache.push(pt);
            }
          }
          i = ptCache.length;
          while (i--) {
            pt = ptCache[i];
            pt.s = (start || start === 0) && !startIsRelative ? start : pt.s + (start || 0) + ratio * pt.c;
            pt.c = value - pt.s;
            pt.e && (pt.e = _round(value) + getUnit(pt.e));
            pt.b && (pt.b = pt.s + getUnit(pt.b));
          }
        }, _addAliasesToVars = function _addAliasesToVars2(targets, vars) {
          var harness = targets[0] ? _getCache(targets[0]).harness : 0, propertyAliases = harness && harness.aliases, copy, p, i, aliases;
          if (!propertyAliases) {
            return vars;
          }
          copy = _merge({}, vars);
          for (p in propertyAliases) {
            if (p in copy) {
              aliases = propertyAliases[p].split(",");
              i = aliases.length;
              while (i--) {
                copy[aliases[i]] = copy[p];
              }
            }
          }
          return copy;
        }, _parseKeyframe = function _parseKeyframe2(prop, obj, allProps, easeEach) {
          var ease = obj.ease || easeEach || "power1.inOut", p, a;
          if (_isArray(obj)) {
            a = allProps[prop] || (allProps[prop] = []);
            obj.forEach(function(value, i) {
              return a.push({
                t: i / (obj.length - 1) * 100,
                v: value,
                e: ease
              });
            });
          } else {
            for (p in obj) {
              a = allProps[p] || (allProps[p] = []);
              p === "ease" || a.push({
                t: parseFloat(prop),
                v: obj[p],
                e: ease
              });
            }
          }
        }, _parseFuncOrString = function _parseFuncOrString2(value, tween, i, target, targets) {
          return _isFunction(value) ? value.call(tween, i, target, targets) : _isString(value) && ~value.indexOf("random(") ? _replaceRandom(value) : value;
        }, _staggerTweenProps = _callbackNames + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert", _staggerPropsToSkip = {};
        _forEachName(_staggerTweenProps + ",id,stagger,delay,duration,paused,scrollTrigger", function(name) {
          return _staggerPropsToSkip[name] = 1;
        });
        var Tween = function(_Animation2) {
          _inheritsLoose(Tween2, _Animation2);
          function Tween2(targets, vars, position, skipInherit) {
            var _this3;
            if (typeof vars === "number") {
              position.duration = vars;
              vars = position;
              position = null;
            }
            _this3 = _Animation2.call(this, skipInherit ? vars : _inheritDefaults(vars)) || this;
            var _this3$vars = _this3.vars, duration = _this3$vars.duration, delay = _this3$vars.delay, immediateRender = _this3$vars.immediateRender, stagger = _this3$vars.stagger, overwrite = _this3$vars.overwrite, keyframes = _this3$vars.keyframes, defaults2 = _this3$vars.defaults, scrollTrigger = _this3$vars.scrollTrigger, yoyoEase = _this3$vars.yoyoEase, parent = vars.parent || _globalTimeline, parsedTargets = (_isArray(targets) || _isTypedArray(targets) ? _isNumber(targets[0]) : "length" in vars) ? [targets] : toArray(targets), tl2, i, copy, l, p, curTarget, staggerFunc, staggerVarsToMerge;
            _this3._targets = parsedTargets.length ? _harness(parsedTargets) : _warn("GSAP target " + targets + " not found. https://greensock.com", !_config.nullTargetWarn) || [];
            _this3._ptLookup = [];
            _this3._overwrite = overwrite;
            if (keyframes || stagger || _isFuncOrString(duration) || _isFuncOrString(delay)) {
              vars = _this3.vars;
              tl2 = _this3.timeline = new Timeline({
                data: "nested",
                defaults: defaults2 || {}
              });
              tl2.kill();
              tl2.parent = tl2._dp = _assertThisInitialized2(_this3);
              tl2._start = 0;
              if (stagger || _isFuncOrString(duration) || _isFuncOrString(delay)) {
                l = parsedTargets.length;
                staggerFunc = stagger && distribute(stagger);
                if (_isObject(stagger)) {
                  for (p in stagger) {
                    if (~_staggerTweenProps.indexOf(p)) {
                      staggerVarsToMerge || (staggerVarsToMerge = {});
                      staggerVarsToMerge[p] = stagger[p];
                    }
                  }
                }
                for (i = 0; i < l; i++) {
                  copy = _copyExcluding(vars, _staggerPropsToSkip);
                  copy.stagger = 0;
                  yoyoEase && (copy.yoyoEase = yoyoEase);
                  staggerVarsToMerge && _merge(copy, staggerVarsToMerge);
                  curTarget = parsedTargets[i];
                  copy.duration = +_parseFuncOrString(duration, _assertThisInitialized2(_this3), i, curTarget, parsedTargets);
                  copy.delay = (+_parseFuncOrString(delay, _assertThisInitialized2(_this3), i, curTarget, parsedTargets) || 0) - _this3._delay;
                  if (!stagger && l === 1 && copy.delay) {
                    _this3._delay = delay = copy.delay;
                    _this3._start += delay;
                    copy.delay = 0;
                  }
                  tl2.to(curTarget, copy, staggerFunc ? staggerFunc(i, curTarget, parsedTargets) : 0);
                  tl2._ease = _easeMap.none;
                }
                tl2.duration() ? duration = delay = 0 : _this3.timeline = 0;
              } else if (keyframes) {
                _inheritDefaults(_setDefaults(tl2.vars.defaults, {
                  ease: "none"
                }));
                tl2._ease = _parseEase(keyframes.ease || vars.ease || "none");
                var time = 0, a, kf, v;
                if (_isArray(keyframes)) {
                  keyframes.forEach(function(frame) {
                    return tl2.to(parsedTargets, frame, ">");
                  });
                } else {
                  copy = {};
                  for (p in keyframes) {
                    p === "ease" || p === "easeEach" || _parseKeyframe(p, keyframes[p], copy, keyframes.easeEach);
                  }
                  for (p in copy) {
                    a = copy[p].sort(function(a2, b) {
                      return a2.t - b.t;
                    });
                    time = 0;
                    for (i = 0; i < a.length; i++) {
                      kf = a[i];
                      v = {
                        ease: kf.e,
                        duration: (kf.t - (i ? a[i - 1].t : 0)) / 100 * duration
                      };
                      v[p] = kf.v;
                      tl2.to(parsedTargets, v, time);
                      time += v.duration;
                    }
                  }
                  tl2.duration() < duration && tl2.to({}, {
                    duration: duration - tl2.duration()
                  });
                }
              }
              duration || _this3.duration(duration = tl2.duration());
            } else {
              _this3.timeline = 0;
            }
            if (overwrite === true && !_suppressOverwrites) {
              _overwritingTween = _assertThisInitialized2(_this3);
              _globalTimeline.killTweensOf(parsedTargets);
              _overwritingTween = 0;
            }
            _addToTimeline(parent, _assertThisInitialized2(_this3), position);
            vars.reversed && _this3.reverse();
            vars.paused && _this3.paused(true);
            if (immediateRender || !duration && !keyframes && _this3._start === _roundPrecise(parent._time) && _isNotFalse(immediateRender) && _hasNoPausedAncestors(_assertThisInitialized2(_this3)) && parent.data !== "nested") {
              _this3._tTime = -_tinyNum;
              _this3.render(Math.max(0, -delay));
            }
            scrollTrigger && _scrollTrigger(_assertThisInitialized2(_this3), scrollTrigger);
            return _this3;
          }
          var _proto3 = Tween2.prototype;
          _proto3.render = function render(totalTime, suppressEvents, force) {
            var prevTime = this._time, tDur = this._tDur, dur = this._dur, tTime = totalTime > tDur - _tinyNum && totalTime >= 0 ? tDur : totalTime < _tinyNum ? 0 : totalTime, time, pt, iteration, cycleDuration, prevIteration, isYoyo, ratio, timeline, yoyoEase;
            if (!dur) {
              _renderZeroDurationTween(this, totalTime, suppressEvents, force);
            } else if (tTime !== this._tTime || !totalTime || force || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== totalTime < 0) {
              time = tTime;
              timeline = this.timeline;
              if (this._repeat) {
                cycleDuration = dur + this._rDelay;
                if (this._repeat < -1 && totalTime < 0) {
                  return this.totalTime(cycleDuration * 100 + totalTime, suppressEvents, force);
                }
                time = _roundPrecise(tTime % cycleDuration);
                if (tTime === tDur) {
                  iteration = this._repeat;
                  time = dur;
                } else {
                  iteration = ~~(tTime / cycleDuration);
                  if (iteration && iteration === tTime / cycleDuration) {
                    time = dur;
                    iteration--;
                  }
                  time > dur && (time = dur);
                }
                isYoyo = this._yoyo && iteration & 1;
                if (isYoyo) {
                  yoyoEase = this._yEase;
                  time = dur - time;
                }
                prevIteration = _animationCycle(this._tTime, cycleDuration);
                if (time === prevTime && !force && this._initted) {
                  this._tTime = tTime;
                  return this;
                }
                if (iteration !== prevIteration) {
                  timeline && this._yEase && _propagateYoyoEase(timeline, isYoyo);
                  if (this.vars.repeatRefresh && !isYoyo && !this._lock) {
                    this._lock = force = 1;
                    this.render(_roundPrecise(cycleDuration * iteration), true).invalidate()._lock = 0;
                  }
                }
              }
              if (!this._initted) {
                if (_attemptInitTween(this, totalTime < 0 ? totalTime : time, force, suppressEvents)) {
                  this._tTime = 0;
                  return this;
                }
                if (prevTime !== this._time) {
                  return this;
                }
                if (dur !== this._dur) {
                  return this.render(totalTime, suppressEvents, force);
                }
              }
              this._tTime = tTime;
              this._time = time;
              if (!this._act && this._ts) {
                this._act = 1;
                this._lazy = 0;
              }
              this.ratio = ratio = (yoyoEase || this._ease)(time / dur);
              if (this._from) {
                this.ratio = ratio = 1 - ratio;
              }
              if (time && !prevTime && !suppressEvents) {
                _callback(this, "onStart");
                if (this._tTime !== tTime) {
                  return this;
                }
              }
              pt = this._pt;
              while (pt) {
                pt.r(ratio, pt.d);
                pt = pt._next;
              }
              timeline && timeline.render(totalTime < 0 ? totalTime : !time && isYoyo ? -_tinyNum : timeline._dur * timeline._ease(time / this._dur), suppressEvents, force) || this._startAt && (this._zTime = totalTime);
              if (this._onUpdate && !suppressEvents) {
                totalTime < 0 && this._startAt && this._startAt.render(totalTime, true, force);
                _callback(this, "onUpdate");
              }
              this._repeat && iteration !== prevIteration && this.vars.onRepeat && !suppressEvents && this.parent && _callback(this, "onRepeat");
              if ((tTime === this._tDur || !tTime) && this._tTime === tTime) {
                totalTime < 0 && this._startAt && !this._onUpdate && this._startAt.render(totalTime, true, true);
                (totalTime || !dur) && (tTime === this._tDur && this._ts > 0 || !tTime && this._ts < 0) && _removeFromParent(this, 1);
                if (!suppressEvents && !(totalTime < 0 && !prevTime) && (tTime || prevTime)) {
                  _callback(this, tTime === tDur ? "onComplete" : "onReverseComplete", true);
                  this._prom && !(tTime < tDur && this.timeScale() > 0) && this._prom();
                }
              }
            }
            return this;
          };
          _proto3.targets = function targets() {
            return this._targets;
          };
          _proto3.invalidate = function invalidate() {
            this._pt = this._op = this._startAt = this._onUpdate = this._lazy = this.ratio = 0;
            this._ptLookup = [];
            this.timeline && this.timeline.invalidate();
            return _Animation2.prototype.invalidate.call(this);
          };
          _proto3.resetTo = function resetTo(property, value, start, startIsRelative) {
            _tickerActive || _ticker.wake();
            this._ts || this.play();
            var time = Math.min(this._dur, (this._dp._time - this._start) * this._ts), ratio;
            this._initted || _initTween(this, time);
            ratio = this._ease(time / this._dur);
            if (_updatePropTweens(this, property, value, start, startIsRelative, ratio, time)) {
              return this.resetTo(property, value, start, startIsRelative);
            }
            _alignPlayhead(this, 0);
            this.parent || _addLinkedListItem(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0);
            return this.render(0);
          };
          _proto3.kill = function kill(targets, vars) {
            if (vars === void 0) {
              vars = "all";
            }
            if (!targets && (!vars || vars === "all")) {
              this._lazy = this._pt = 0;
              return this.parent ? _interrupt(this) : this;
            }
            if (this.timeline) {
              var tDur = this.timeline.totalDuration();
              this.timeline.killTweensOf(targets, vars, _overwritingTween && _overwritingTween.vars.overwrite !== true)._first || _interrupt(this);
              this.parent && tDur !== this.timeline.totalDuration() && _setDuration(this, this._dur * this.timeline._tDur / tDur, 0, 1);
              return this;
            }
            var parsedTargets = this._targets, killingTargets = targets ? toArray(targets) : parsedTargets, propTweenLookup = this._ptLookup, firstPT = this._pt, overwrittenProps, curLookup, curOverwriteProps, props, p, pt, i;
            if ((!vars || vars === "all") && _arraysMatch(parsedTargets, killingTargets)) {
              vars === "all" && (this._pt = 0);
              return _interrupt(this);
            }
            overwrittenProps = this._op = this._op || [];
            if (vars !== "all") {
              if (_isString(vars)) {
                p = {};
                _forEachName(vars, function(name) {
                  return p[name] = 1;
                });
                vars = p;
              }
              vars = _addAliasesToVars(parsedTargets, vars);
            }
            i = parsedTargets.length;
            while (i--) {
              if (~killingTargets.indexOf(parsedTargets[i])) {
                curLookup = propTweenLookup[i];
                if (vars === "all") {
                  overwrittenProps[i] = vars;
                  props = curLookup;
                  curOverwriteProps = {};
                } else {
                  curOverwriteProps = overwrittenProps[i] = overwrittenProps[i] || {};
                  props = vars;
                }
                for (p in props) {
                  pt = curLookup && curLookup[p];
                  if (pt) {
                    if (!("kill" in pt.d) || pt.d.kill(p) === true) {
                      _removeLinkedListItem(this, pt, "_pt");
                    }
                    delete curLookup[p];
                  }
                  if (curOverwriteProps !== "all") {
                    curOverwriteProps[p] = 1;
                  }
                }
              }
            }
            this._initted && !this._pt && firstPT && _interrupt(this);
            return this;
          };
          Tween2.to = function to(targets, vars) {
            return new Tween2(targets, vars, arguments[2]);
          };
          Tween2.from = function from(targets, vars) {
            return _createTweenType(1, arguments);
          };
          Tween2.delayedCall = function delayedCall(delay, callback, params, scope) {
            return new Tween2(callback, 0, {
              immediateRender: false,
              lazy: false,
              overwrite: false,
              delay,
              onComplete: callback,
              onReverseComplete: callback,
              onCompleteParams: params,
              onReverseCompleteParams: params,
              callbackScope: scope
            });
          };
          Tween2.fromTo = function fromTo(targets, fromVars, toVars) {
            return _createTweenType(2, arguments);
          };
          Tween2.set = function set(targets, vars) {
            vars.duration = 0;
            vars.repeatDelay || (vars.repeat = 0);
            return new Tween2(targets, vars);
          };
          Tween2.killTweensOf = function killTweensOf(targets, props, onlyActive) {
            return _globalTimeline.killTweensOf(targets, props, onlyActive);
          };
          return Tween2;
        }(Animation);
        _setDefaults(Tween.prototype, {
          _targets: [],
          _lazy: 0,
          _startAt: 0,
          _op: 0,
          _onInit: 0
        });
        _forEachName("staggerTo,staggerFrom,staggerFromTo", function(name) {
          Tween[name] = function() {
            var tl2 = new Timeline(), params = _slice.call(arguments, 0);
            params.splice(name === "staggerFromTo" ? 5 : 4, 0, 0);
            return tl2[name].apply(tl2, params);
          };
        });
        var _setterPlain = function _setterPlain2(target, property, value) {
          return target[property] = value;
        }, _setterFunc = function _setterFunc2(target, property, value) {
          return target[property](value);
        }, _setterFuncWithParam = function _setterFuncWithParam2(target, property, value, data) {
          return target[property](data.fp, value);
        }, _setterAttribute = function _setterAttribute2(target, property, value) {
          return target.setAttribute(property, value);
        }, _getSetter = function _getSetter2(target, property) {
          return _isFunction(target[property]) ? _setterFunc : _isUndefined(target[property]) && target.setAttribute ? _setterAttribute : _setterPlain;
        }, _renderPlain = function _renderPlain2(ratio, data) {
          return data.set(data.t, data.p, Math.round((data.s + data.c * ratio) * 1e6) / 1e6, data);
        }, _renderBoolean = function _renderBoolean2(ratio, data) {
          return data.set(data.t, data.p, !!(data.s + data.c * ratio), data);
        }, _renderComplexString = function _renderComplexString2(ratio, data) {
          var pt = data._pt, s = "";
          if (!ratio && data.b) {
            s = data.b;
          } else if (ratio === 1 && data.e) {
            s = data.e;
          } else {
            while (pt) {
              s = pt.p + (pt.m ? pt.m(pt.s + pt.c * ratio) : Math.round((pt.s + pt.c * ratio) * 1e4) / 1e4) + s;
              pt = pt._next;
            }
            s += data.c;
          }
          data.set(data.t, data.p, s, data);
        }, _renderPropTweens = function _renderPropTweens2(ratio, data) {
          var pt = data._pt;
          while (pt) {
            pt.r(ratio, pt.d);
            pt = pt._next;
          }
        }, _addPluginModifier = function _addPluginModifier2(modifier, tween, target, property) {
          var pt = this._pt, next;
          while (pt) {
            next = pt._next;
            pt.p === property && pt.modifier(modifier, tween, target);
            pt = next;
          }
        }, _killPropTweensOf = function _killPropTweensOf2(property) {
          var pt = this._pt, hasNonDependentRemaining, next;
          while (pt) {
            next = pt._next;
            if (pt.p === property && !pt.op || pt.op === property) {
              _removeLinkedListItem(this, pt, "_pt");
            } else if (!pt.dep) {
              hasNonDependentRemaining = 1;
            }
            pt = next;
          }
          return !hasNonDependentRemaining;
        }, _setterWithModifier = function _setterWithModifier2(target, property, value, data) {
          data.mSet(target, property, data.m.call(data.tween, value, data.mt), data);
        }, _sortPropTweensByPriority = function _sortPropTweensByPriority2(parent) {
          var pt = parent._pt, next, pt2, first, last;
          while (pt) {
            next = pt._next;
            pt2 = first;
            while (pt2 && pt2.pr > pt.pr) {
              pt2 = pt2._next;
            }
            if (pt._prev = pt2 ? pt2._prev : last) {
              pt._prev._next = pt;
            } else {
              first = pt;
            }
            if (pt._next = pt2) {
              pt2._prev = pt;
            } else {
              last = pt;
            }
            pt = next;
          }
          parent._pt = first;
        };
        var PropTween = function() {
          function PropTween2(next, target, prop, start, change, renderer, data, setter, priority) {
            this.t = target;
            this.s = start;
            this.c = change;
            this.p = prop;
            this.r = renderer || _renderPlain;
            this.d = data || this;
            this.set = setter || _setterPlain;
            this.pr = priority || 0;
            this._next = next;
            if (next) {
              next._prev = this;
            }
          }
          var _proto4 = PropTween2.prototype;
          _proto4.modifier = function modifier(func, tween, target) {
            this.mSet = this.mSet || this.set;
            this.set = _setterWithModifier;
            this.m = func;
            this.mt = target;
            this.tween = tween;
          };
          return PropTween2;
        }();
        _forEachName(_callbackNames + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(name) {
          return _reservedProps[name] = 1;
        });
        _globals.TweenMax = _globals.TweenLite = Tween;
        _globals.TimelineLite = _globals.TimelineMax = Timeline;
        _globalTimeline = new Timeline({
          sortChildren: false,
          defaults: _defaults,
          autoRemoveChildren: true,
          id: "root",
          smoothChildTiming: true
        });
        _config.stringFilter = _colorStringFilter;
        var _gsap = {
          registerPlugin: function registerPlugin() {
            for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
              args[_key2] = arguments[_key2];
            }
            args.forEach(function(config) {
              return _createPlugin(config);
            });
          },
          timeline: function timeline(vars) {
            return new Timeline(vars);
          },
          getTweensOf: function getTweensOf(targets, onlyActive) {
            return _globalTimeline.getTweensOf(targets, onlyActive);
          },
          getProperty: function getProperty(target, property, unit, uncache) {
            _isString(target) && (target = toArray(target)[0]);
            var getter = _getCache(target || {}).get, format = unit ? _passThrough : _numericIfPossible;
            unit === "native" && (unit = "");
            return !target ? target : !property ? function(property2, unit2, uncache2) {
              return format((_plugins[property2] && _plugins[property2].get || getter)(target, property2, unit2, uncache2));
            } : format((_plugins[property] && _plugins[property].get || getter)(target, property, unit, uncache));
          },
          quickSetter: function quickSetter(target, property, unit) {
            target = toArray(target);
            if (target.length > 1) {
              var setters = target.map(function(t) {
                return gsap2.quickSetter(t, property, unit);
              }), l = setters.length;
              return function(value) {
                var i = l;
                while (i--) {
                  setters[i](value);
                }
              };
            }
            target = target[0] || {};
            var Plugin = _plugins[property], cache = _getCache(target), p = cache.harness && (cache.harness.aliases || {})[property] || property, setter = Plugin ? function(value) {
              var p2 = new Plugin();
              _quickTween._pt = 0;
              p2.init(target, unit ? value + unit : value, _quickTween, 0, [target]);
              p2.render(1, p2);
              _quickTween._pt && _renderPropTweens(1, _quickTween);
            } : cache.set(target, p);
            return Plugin ? setter : function(value) {
              return setter(target, p, unit ? value + unit : value, cache, 1);
            };
          },
          quickTo: function quickTo(target, property, vars) {
            var _merge2;
            var tween = gsap2.to(target, _merge((_merge2 = {}, _merge2[property] = "+=0.1", _merge2.paused = true, _merge2), vars || {})), func = function func2(value, start, startIsRelative) {
              return tween.resetTo(property, value, start, startIsRelative);
            };
            func.tween = tween;
            return func;
          },
          isTweening: function isTweening(targets) {
            return _globalTimeline.getTweensOf(targets, true).length > 0;
          },
          defaults: function defaults2(value) {
            value && value.ease && (value.ease = _parseEase(value.ease, _defaults.ease));
            return _mergeDeep(_defaults, value || {});
          },
          config: function config(value) {
            return _mergeDeep(_config, value || {});
          },
          registerEffect: function registerEffect(_ref3) {
            var name = _ref3.name, effect = _ref3.effect, plugins = _ref3.plugins, defaults2 = _ref3.defaults, extendTimeline = _ref3.extendTimeline;
            (plugins || "").split(",").forEach(function(pluginName) {
              return pluginName && !_plugins[pluginName] && !_globals[pluginName] && _warn(name + " effect requires " + pluginName + " plugin.");
            });
            _effects[name] = function(targets, vars, tl2) {
              return effect(toArray(targets), _setDefaults(vars || {}, defaults2), tl2);
            };
            if (extendTimeline) {
              Timeline.prototype[name] = function(targets, vars, position) {
                return this.add(_effects[name](targets, _isObject(vars) ? vars : (position = vars) && {}, this), position);
              };
            }
          },
          registerEase: function registerEase(name, ease) {
            _easeMap[name] = _parseEase(ease);
          },
          parseEase: function parseEase(ease, defaultEase) {
            return arguments.length ? _parseEase(ease, defaultEase) : _easeMap;
          },
          getById: function getById(id) {
            return _globalTimeline.getById(id);
          },
          exportRoot: function exportRoot(vars, includeDelayedCalls) {
            if (vars === void 0) {
              vars = {};
            }
            var tl2 = new Timeline(vars), child, next;
            tl2.smoothChildTiming = _isNotFalse(vars.smoothChildTiming);
            _globalTimeline.remove(tl2);
            tl2._dp = 0;
            tl2._time = tl2._tTime = _globalTimeline._time;
            child = _globalTimeline._first;
            while (child) {
              next = child._next;
              if (includeDelayedCalls || !(!child._dur && child instanceof Tween && child.vars.onComplete === child._targets[0])) {
                _addToTimeline(tl2, child, child._start - child._delay);
              }
              child = next;
            }
            _addToTimeline(_globalTimeline, tl2, 0);
            return tl2;
          },
          utils: {
            wrap,
            wrapYoyo,
            distribute,
            random,
            snap,
            normalize,
            getUnit,
            clamp,
            splitColor,
            toArray,
            selector,
            mapRange,
            pipe,
            unitize,
            interpolate,
            shuffle
          },
          install: _install,
          effects: _effects,
          ticker: _ticker,
          updateRoot: Timeline.updateRoot,
          plugins: _plugins,
          globalTimeline: _globalTimeline,
          core: {
            PropTween,
            globals: _addGlobal,
            Tween,
            Timeline,
            Animation,
            getCache: _getCache,
            _removeLinkedListItem,
            suppressOverwrites: function suppressOverwrites(value) {
              return _suppressOverwrites = value;
            }
          }
        };
        _forEachName("to,from,fromTo,delayedCall,set,killTweensOf", function(name) {
          return _gsap[name] = Tween[name];
        });
        _ticker.add(Timeline.updateRoot);
        _quickTween = _gsap.to({}, {
          duration: 0
        });
        var _getPluginPropTween = function _getPluginPropTween2(plugin, prop) {
          var pt = plugin._pt;
          while (pt && pt.p !== prop && pt.op !== prop && pt.fp !== prop) {
            pt = pt._next;
          }
          return pt;
        }, _addModifiers = function _addModifiers2(tween, modifiers) {
          var targets = tween._targets, p, i, pt;
          for (p in modifiers) {
            i = targets.length;
            while (i--) {
              pt = tween._ptLookup[i][p];
              if (pt && (pt = pt.d)) {
                if (pt._pt) {
                  pt = _getPluginPropTween(pt, p);
                }
                pt && pt.modifier && pt.modifier(modifiers[p], tween, targets[i], p);
              }
            }
          }
        }, _buildModifierPlugin = function _buildModifierPlugin2(name, modifier) {
          return {
            name,
            rawVars: 1,
            init: function init(target, vars, tween) {
              tween._onInit = function(tween2) {
                var temp, p;
                if (_isString(vars)) {
                  temp = {};
                  _forEachName(vars, function(name2) {
                    return temp[name2] = 1;
                  });
                  vars = temp;
                }
                if (modifier) {
                  temp = {};
                  for (p in vars) {
                    temp[p] = modifier(vars[p]);
                  }
                  vars = temp;
                }
                _addModifiers(tween2, vars);
              };
            }
          };
        };
        var gsap2 = _gsap.registerPlugin({
          name: "attr",
          init: function init(target, vars, tween, index, targets) {
            var p, pt;
            for (p in vars) {
              pt = this.add(target, "setAttribute", (target.getAttribute(p) || 0) + "", vars[p], index, targets, 0, 0, p);
              pt && (pt.op = p);
              this._props.push(p);
            }
          }
        }, {
          name: "endArray",
          init: function init(target, value) {
            var i = value.length;
            while (i--) {
              this.add(target, i, target[i] || 0, value[i]);
            }
          }
        }, _buildModifierPlugin("roundProps", _roundModifier), _buildModifierPlugin("modifiers"), _buildModifierPlugin("snap", snap)) || _gsap;
        Tween.version = Timeline.version = gsap2.version = "3.10.4";
        _coreReady = 1;
        _windowExists() && _wake();
        var Power0 = _easeMap.Power0, Power1 = _easeMap.Power1, Power2 = _easeMap.Power2, Power3 = _easeMap.Power3, Power4 = _easeMap.Power4, Linear = _easeMap.Linear, Quad = _easeMap.Quad, Cubic = _easeMap.Cubic, Quart = _easeMap.Quart, Quint = _easeMap.Quint, Strong = _easeMap.Strong, Elastic = _easeMap.Elastic, Back = _easeMap.Back, SteppedEase = _easeMap.SteppedEase, Bounce = _easeMap.Bounce, Sine = _easeMap.Sine, Expo = _easeMap.Expo, Circ = _easeMap.Circ;
        var _win$1, _doc$1, _docElement, _pluginInitted, _tempDiv, _tempDivStyler, _recentSetterPlugin, _windowExists$1 = function _windowExists2() {
          return typeof window !== "undefined";
        }, _transformProps = {}, _RAD2DEG = 180 / Math.PI, _DEG2RAD = Math.PI / 180, _atan2 = Math.atan2, _bigNum$1 = 1e8, _capsExp = /([A-Z])/g, _horizontalExp = /(left|right|width|margin|padding|x)/i, _complexExp = /[\s,\(]\S/, _propertyAliases = {
          autoAlpha: "opacity,visibility",
          scale: "scaleX,scaleY",
          alpha: "opacity"
        }, _renderCSSProp = function _renderCSSProp2(ratio, data) {
          return data.set(data.t, data.p, Math.round((data.s + data.c * ratio) * 1e4) / 1e4 + data.u, data);
        }, _renderPropWithEnd = function _renderPropWithEnd2(ratio, data) {
          return data.set(data.t, data.p, ratio === 1 ? data.e : Math.round((data.s + data.c * ratio) * 1e4) / 1e4 + data.u, data);
        }, _renderCSSPropWithBeginning = function _renderCSSPropWithBeginning2(ratio, data) {
          return data.set(data.t, data.p, ratio ? Math.round((data.s + data.c * ratio) * 1e4) / 1e4 + data.u : data.b, data);
        }, _renderRoundedCSSProp = function _renderRoundedCSSProp2(ratio, data) {
          var value = data.s + data.c * ratio;
          data.set(data.t, data.p, ~~(value + (value < 0 ? -0.5 : 0.5)) + data.u, data);
        }, _renderNonTweeningValue = function _renderNonTweeningValue2(ratio, data) {
          return data.set(data.t, data.p, ratio ? data.e : data.b, data);
        }, _renderNonTweeningValueOnlyAtEnd = function _renderNonTweeningValueOnlyAtEnd2(ratio, data) {
          return data.set(data.t, data.p, ratio !== 1 ? data.b : data.e, data);
        }, _setterCSSStyle = function _setterCSSStyle2(target, property, value) {
          return target.style[property] = value;
        }, _setterCSSProp = function _setterCSSProp2(target, property, value) {
          return target.style.setProperty(property, value);
        }, _setterTransform = function _setterTransform2(target, property, value) {
          return target._gsap[property] = value;
        }, _setterScale = function _setterScale2(target, property, value) {
          return target._gsap.scaleX = target._gsap.scaleY = value;
        }, _setterScaleWithRender = function _setterScaleWithRender2(target, property, value, data, ratio) {
          var cache = target._gsap;
          cache.scaleX = cache.scaleY = value;
          cache.renderTransform(ratio, cache);
        }, _setterTransformWithRender = function _setterTransformWithRender2(target, property, value, data, ratio) {
          var cache = target._gsap;
          cache[property] = value;
          cache.renderTransform(ratio, cache);
        }, _transformProp = "transform", _transformOriginProp = _transformProp + "Origin", _supports3D, _createElement = function _createElement2(type, ns) {
          var e = _doc$1.createElementNS ? _doc$1.createElementNS((ns || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), type) : _doc$1.createElement(type);
          return e.style ? e : _doc$1.createElement(type);
        }, _getComputedProperty = function _getComputedProperty2(target, property, skipPrefixFallback) {
          var cs = getComputedStyle(target);
          return cs[property] || cs.getPropertyValue(property.replace(_capsExp, "-$1").toLowerCase()) || cs.getPropertyValue(property) || !skipPrefixFallback && _getComputedProperty2(target, _checkPropPrefix(property) || property, 1) || "";
        }, _prefixes = "O,Moz,ms,Ms,Webkit".split(","), _checkPropPrefix = function _checkPropPrefix2(property, element, preferPrefix) {
          var e = element || _tempDiv, s = e.style, i = 5;
          if (property in s && !preferPrefix) {
            return property;
          }
          property = property.charAt(0).toUpperCase() + property.substr(1);
          while (i-- && !(_prefixes[i] + property in s)) {
          }
          return i < 0 ? null : (i === 3 ? "ms" : i >= 0 ? _prefixes[i] : "") + property;
        }, _initCore = function _initCore2() {
          if (_windowExists$1() && window.document) {
            _win$1 = window;
            _doc$1 = _win$1.document;
            _docElement = _doc$1.documentElement;
            _tempDiv = _createElement("div") || {
              style: {}
            };
            _tempDivStyler = _createElement("div");
            _transformProp = _checkPropPrefix(_transformProp);
            _transformOriginProp = _transformProp + "Origin";
            _tempDiv.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0";
            _supports3D = !!_checkPropPrefix("perspective");
            _pluginInitted = 1;
          }
        }, _getBBoxHack = function _getBBoxHack2(swapIfPossible) {
          var svg = _createElement("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), oldParent = this.parentNode, oldSibling = this.nextSibling, oldCSS = this.style.cssText, bbox;
          _docElement.appendChild(svg);
          svg.appendChild(this);
          this.style.display = "block";
          if (swapIfPossible) {
            try {
              bbox = this.getBBox();
              this._gsapBBox = this.getBBox;
              this.getBBox = _getBBoxHack2;
            } catch (e) {
            }
          } else if (this._gsapBBox) {
            bbox = this._gsapBBox();
          }
          if (oldParent) {
            if (oldSibling) {
              oldParent.insertBefore(this, oldSibling);
            } else {
              oldParent.appendChild(this);
            }
          }
          _docElement.removeChild(svg);
          this.style.cssText = oldCSS;
          return bbox;
        }, _getAttributeFallbacks = function _getAttributeFallbacks2(target, attributesArray) {
          var i = attributesArray.length;
          while (i--) {
            if (target.hasAttribute(attributesArray[i])) {
              return target.getAttribute(attributesArray[i]);
            }
          }
        }, _getBBox = function _getBBox2(target) {
          var bounds;
          try {
            bounds = target.getBBox();
          } catch (error) {
            bounds = _getBBoxHack.call(target, true);
          }
          bounds && (bounds.width || bounds.height) || target.getBBox === _getBBoxHack || (bounds = _getBBoxHack.call(target, true));
          return bounds && !bounds.width && !bounds.x && !bounds.y ? {
            x: +_getAttributeFallbacks(target, ["x", "cx", "x1"]) || 0,
            y: +_getAttributeFallbacks(target, ["y", "cy", "y1"]) || 0,
            width: 0,
            height: 0
          } : bounds;
        }, _isSVG = function _isSVG2(e) {
          return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && _getBBox(e));
        }, _removeProperty = function _removeProperty2(target, property) {
          if (property) {
            var style = target.style;
            if (property in _transformProps && property !== _transformOriginProp) {
              property = _transformProp;
            }
            if (style.removeProperty) {
              if (property.substr(0, 2) === "ms" || property.substr(0, 6) === "webkit") {
                property = "-" + property;
              }
              style.removeProperty(property.replace(_capsExp, "-$1").toLowerCase());
            } else {
              style.removeAttribute(property);
            }
          }
        }, _addNonTweeningPT = function _addNonTweeningPT2(plugin, target, property, beginning, end, onlySetAtEnd) {
          var pt = new PropTween(plugin._pt, target, property, 0, 1, onlySetAtEnd ? _renderNonTweeningValueOnlyAtEnd : _renderNonTweeningValue);
          plugin._pt = pt;
          pt.b = beginning;
          pt.e = end;
          plugin._props.push(property);
          return pt;
        }, _nonConvertibleUnits = {
          deg: 1,
          rad: 1,
          turn: 1
        }, _convertToUnit = function _convertToUnit2(target, property, value, unit) {
          var curValue = parseFloat(value) || 0, curUnit = (value + "").trim().substr((curValue + "").length) || "px", style = _tempDiv.style, horizontal = _horizontalExp.test(property), isRootSVG = target.tagName.toLowerCase() === "svg", measureProperty = (isRootSVG ? "client" : "offset") + (horizontal ? "Width" : "Height"), amount = 100, toPixels = unit === "px", toPercent = unit === "%", px, parent, cache, isSVG;
          if (unit === curUnit || !curValue || _nonConvertibleUnits[unit] || _nonConvertibleUnits[curUnit]) {
            return curValue;
          }
          curUnit !== "px" && !toPixels && (curValue = _convertToUnit2(target, property, value, "px"));
          isSVG = target.getCTM && _isSVG(target);
          if ((toPercent || curUnit === "%") && (_transformProps[property] || ~property.indexOf("adius"))) {
            px = isSVG ? target.getBBox()[horizontal ? "width" : "height"] : target[measureProperty];
            return _round(toPercent ? curValue / px * amount : curValue / 100 * px);
          }
          style[horizontal ? "width" : "height"] = amount + (toPixels ? curUnit : unit);
          parent = ~property.indexOf("adius") || unit === "em" && target.appendChild && !isRootSVG ? target : target.parentNode;
          if (isSVG) {
            parent = (target.ownerSVGElement || {}).parentNode;
          }
          if (!parent || parent === _doc$1 || !parent.appendChild) {
            parent = _doc$1.body;
          }
          cache = parent._gsap;
          if (cache && toPercent && cache.width && horizontal && cache.time === _ticker.time) {
            return _round(curValue / cache.width * amount);
          } else {
            (toPercent || curUnit === "%") && (style.position = _getComputedProperty(target, "position"));
            parent === target && (style.position = "static");
            parent.appendChild(_tempDiv);
            px = _tempDiv[measureProperty];
            parent.removeChild(_tempDiv);
            style.position = "absolute";
            if (horizontal && toPercent) {
              cache = _getCache(parent);
              cache.time = _ticker.time;
              cache.width = parent[measureProperty];
            }
          }
          return _round(toPixels ? px * curValue / amount : px && curValue ? amount / px * curValue : 0);
        }, _get2 = function _get3(target, property, unit, uncache) {
          var value;
          _pluginInitted || _initCore();
          if (property in _propertyAliases && property !== "transform") {
            property = _propertyAliases[property];
            if (~property.indexOf(",")) {
              property = property.split(",")[0];
            }
          }
          if (_transformProps[property] && property !== "transform") {
            value = _parseTransform(target, uncache);
            value = property !== "transformOrigin" ? value[property] : value.svg ? value.origin : _firstTwoOnly(_getComputedProperty(target, _transformOriginProp)) + " " + value.zOrigin + "px";
          } else {
            value = target.style[property];
            if (!value || value === "auto" || uncache || ~(value + "").indexOf("calc(")) {
              value = _specialProps[property] && _specialProps[property](target, property, unit) || _getComputedProperty(target, property) || _getProperty(target, property) || (property === "opacity" ? 1 : 0);
            }
          }
          return unit && !~(value + "").trim().indexOf(" ") ? _convertToUnit(target, property, value, unit) + unit : value;
        }, _tweenComplexCSSString = function _tweenComplexCSSString2(target, prop, start, end) {
          if (!start || start === "none") {
            var p = _checkPropPrefix(prop, target, 1), s = p && _getComputedProperty(target, p, 1);
            if (s && s !== start) {
              prop = p;
              start = s;
            } else if (prop === "borderColor") {
              start = _getComputedProperty(target, "borderTopColor");
            }
          }
          var pt = new PropTween(this._pt, target.style, prop, 0, 1, _renderComplexString), index = 0, matchIndex = 0, a, result, startValues, startNum, color, startValue, endValue, endNum, chunk, endUnit, startUnit, endValues;
          pt.b = start;
          pt.e = end;
          start += "";
          end += "";
          if (end === "auto") {
            target.style[prop] = end;
            end = _getComputedProperty(target, prop) || end;
            target.style[prop] = start;
          }
          a = [start, end];
          _colorStringFilter(a);
          start = a[0];
          end = a[1];
          startValues = start.match(_numWithUnitExp) || [];
          endValues = end.match(_numWithUnitExp) || [];
          if (endValues.length) {
            while (result = _numWithUnitExp.exec(end)) {
              endValue = result[0];
              chunk = end.substring(index, result.index);
              if (color) {
                color = (color + 1) % 5;
              } else if (chunk.substr(-5) === "rgba(" || chunk.substr(-5) === "hsla(") {
                color = 1;
              }
              if (endValue !== (startValue = startValues[matchIndex++] || "")) {
                startNum = parseFloat(startValue) || 0;
                startUnit = startValue.substr((startNum + "").length);
                endValue.charAt(1) === "=" && (endValue = _parseRelative(startNum, endValue) + startUnit);
                endNum = parseFloat(endValue);
                endUnit = endValue.substr((endNum + "").length);
                index = _numWithUnitExp.lastIndex - endUnit.length;
                if (!endUnit) {
                  endUnit = endUnit || _config.units[prop] || startUnit;
                  if (index === end.length) {
                    end += endUnit;
                    pt.e += endUnit;
                  }
                }
                if (startUnit !== endUnit) {
                  startNum = _convertToUnit(target, prop, startValue, endUnit) || 0;
                }
                pt._pt = {
                  _next: pt._pt,
                  p: chunk || matchIndex === 1 ? chunk : ",",
                  s: startNum,
                  c: endNum - startNum,
                  m: color && color < 4 || prop === "zIndex" ? Math.round : 0
                };
              }
            }
            pt.c = index < end.length ? end.substring(index, end.length) : "";
          } else {
            pt.r = prop === "display" && end === "none" ? _renderNonTweeningValueOnlyAtEnd : _renderNonTweeningValue;
          }
          _relExp.test(end) && (pt.e = 0);
          this._pt = pt;
          return pt;
        }, _keywordToPercent = {
          top: "0%",
          bottom: "100%",
          left: "0%",
          right: "100%",
          center: "50%"
        }, _convertKeywordsToPercentages = function _convertKeywordsToPercentages2(value) {
          var split = value.split(" "), x = split[0], y = split[1] || "50%";
          if (x === "top" || x === "bottom" || y === "left" || y === "right") {
            value = x;
            x = y;
            y = value;
          }
          split[0] = _keywordToPercent[x] || x;
          split[1] = _keywordToPercent[y] || y;
          return split.join(" ");
        }, _renderClearProps = function _renderClearProps2(ratio, data) {
          if (data.tween && data.tween._time === data.tween._dur) {
            var target = data.t, style = target.style, props = data.u, cache = target._gsap, prop, clearTransforms, i;
            if (props === "all" || props === true) {
              style.cssText = "";
              clearTransforms = 1;
            } else {
              props = props.split(",");
              i = props.length;
              while (--i > -1) {
                prop = props[i];
                if (_transformProps[prop]) {
                  clearTransforms = 1;
                  prop = prop === "transformOrigin" ? _transformOriginProp : _transformProp;
                }
                _removeProperty(target, prop);
              }
            }
            if (clearTransforms) {
              _removeProperty(target, _transformProp);
              if (cache) {
                cache.svg && target.removeAttribute("transform");
                _parseTransform(target, 1);
                cache.uncache = 1;
              }
            }
          }
        }, _specialProps = {
          clearProps: function clearProps(plugin, target, property, endValue, tween) {
            if (tween.data !== "isFromStart") {
              var pt = plugin._pt = new PropTween(plugin._pt, target, property, 0, 0, _renderClearProps);
              pt.u = endValue;
              pt.pr = -10;
              pt.tween = tween;
              plugin._props.push(property);
              return 1;
            }
          }
        }, _identity2DMatrix = [1, 0, 0, 1, 0, 0], _rotationalProperties = {}, _isNullTransform = function _isNullTransform2(value) {
          return value === "matrix(1, 0, 0, 1, 0, 0)" || value === "none" || !value;
        }, _getComputedTransformMatrixAsArray = function _getComputedTransformMatrixAsArray2(target) {
          var matrixString = _getComputedProperty(target, _transformProp);
          return _isNullTransform(matrixString) ? _identity2DMatrix : matrixString.substr(7).match(_numExp).map(_round);
        }, _getMatrix = function _getMatrix2(target, force2D) {
          var cache = target._gsap || _getCache(target), style = target.style, matrix = _getComputedTransformMatrixAsArray(target), parent, nextSibling, temp, addedToDOM;
          if (cache.svg && target.getAttribute("transform")) {
            temp = target.transform.baseVal.consolidate().matrix;
            matrix = [temp.a, temp.b, temp.c, temp.d, temp.e, temp.f];
            return matrix.join(",") === "1,0,0,1,0,0" ? _identity2DMatrix : matrix;
          } else if (matrix === _identity2DMatrix && !target.offsetParent && target !== _docElement && !cache.svg) {
            temp = style.display;
            style.display = "block";
            parent = target.parentNode;
            if (!parent || !target.offsetParent) {
              addedToDOM = 1;
              nextSibling = target.nextSibling;
              _docElement.appendChild(target);
            }
            matrix = _getComputedTransformMatrixAsArray(target);
            temp ? style.display = temp : _removeProperty(target, "display");
            if (addedToDOM) {
              nextSibling ? parent.insertBefore(target, nextSibling) : parent ? parent.appendChild(target) : _docElement.removeChild(target);
            }
          }
          return force2D && matrix.length > 6 ? [matrix[0], matrix[1], matrix[4], matrix[5], matrix[12], matrix[13]] : matrix;
        }, _applySVGOrigin = function _applySVGOrigin2(target, origin, originIsAbsolute, smooth, matrixArray, pluginToAddPropTweensTo) {
          var cache = target._gsap, matrix = matrixArray || _getMatrix(target, true), xOriginOld = cache.xOrigin || 0, yOriginOld = cache.yOrigin || 0, xOffsetOld = cache.xOffset || 0, yOffsetOld = cache.yOffset || 0, a = matrix[0], b = matrix[1], c = matrix[2], d = matrix[3], tx = matrix[4], ty = matrix[5], originSplit = origin.split(" "), xOrigin = parseFloat(originSplit[0]) || 0, yOrigin = parseFloat(originSplit[1]) || 0, bounds, determinant, x, y;
          if (!originIsAbsolute) {
            bounds = _getBBox(target);
            xOrigin = bounds.x + (~originSplit[0].indexOf("%") ? xOrigin / 100 * bounds.width : xOrigin);
            yOrigin = bounds.y + (~(originSplit[1] || originSplit[0]).indexOf("%") ? yOrigin / 100 * bounds.height : yOrigin);
          } else if (matrix !== _identity2DMatrix && (determinant = a * d - b * c)) {
            x = xOrigin * (d / determinant) + yOrigin * (-c / determinant) + (c * ty - d * tx) / determinant;
            y = xOrigin * (-b / determinant) + yOrigin * (a / determinant) - (a * ty - b * tx) / determinant;
            xOrigin = x;
            yOrigin = y;
          }
          if (smooth || smooth !== false && cache.smooth) {
            tx = xOrigin - xOriginOld;
            ty = yOrigin - yOriginOld;
            cache.xOffset = xOffsetOld + (tx * a + ty * c) - tx;
            cache.yOffset = yOffsetOld + (tx * b + ty * d) - ty;
          } else {
            cache.xOffset = cache.yOffset = 0;
          }
          cache.xOrigin = xOrigin;
          cache.yOrigin = yOrigin;
          cache.smooth = !!smooth;
          cache.origin = origin;
          cache.originIsAbsolute = !!originIsAbsolute;
          target.style[_transformOriginProp] = "0px 0px";
          if (pluginToAddPropTweensTo) {
            _addNonTweeningPT(pluginToAddPropTweensTo, cache, "xOrigin", xOriginOld, xOrigin);
            _addNonTweeningPT(pluginToAddPropTweensTo, cache, "yOrigin", yOriginOld, yOrigin);
            _addNonTweeningPT(pluginToAddPropTweensTo, cache, "xOffset", xOffsetOld, cache.xOffset);
            _addNonTweeningPT(pluginToAddPropTweensTo, cache, "yOffset", yOffsetOld, cache.yOffset);
          }
          target.setAttribute("data-svg-origin", xOrigin + " " + yOrigin);
        }, _parseTransform = function _parseTransform2(target, uncache) {
          var cache = target._gsap || new GSCache(target);
          if ("x" in cache && !uncache && !cache.uncache) {
            return cache;
          }
          var style = target.style, invertedScaleX = cache.scaleX < 0, px = "px", deg = "deg", origin = _getComputedProperty(target, _transformOriginProp) || "0", x, y, z, scaleX, scaleY, rotation, rotationX, rotationY, skewX, skewY, perspective, xOrigin, yOrigin, matrix, angle, cos, sin, a, b, c, d, a12, a22, t1, t2, t3, a13, a23, a33, a42, a43, a32;
          x = y = z = rotation = rotationX = rotationY = skewX = skewY = perspective = 0;
          scaleX = scaleY = 1;
          cache.svg = !!(target.getCTM && _isSVG(target));
          matrix = _getMatrix(target, cache.svg);
          if (cache.svg) {
            t1 = (!cache.uncache || origin === "0px 0px") && !uncache && target.getAttribute("data-svg-origin");
            _applySVGOrigin(target, t1 || origin, !!t1 || cache.originIsAbsolute, cache.smooth !== false, matrix);
          }
          xOrigin = cache.xOrigin || 0;
          yOrigin = cache.yOrigin || 0;
          if (matrix !== _identity2DMatrix) {
            a = matrix[0];
            b = matrix[1];
            c = matrix[2];
            d = matrix[3];
            x = a12 = matrix[4];
            y = a22 = matrix[5];
            if (matrix.length === 6) {
              scaleX = Math.sqrt(a * a + b * b);
              scaleY = Math.sqrt(d * d + c * c);
              rotation = a || b ? _atan2(b, a) * _RAD2DEG : 0;
              skewX = c || d ? _atan2(c, d) * _RAD2DEG + rotation : 0;
              skewX && (scaleY *= Math.abs(Math.cos(skewX * _DEG2RAD)));
              if (cache.svg) {
                x -= xOrigin - (xOrigin * a + yOrigin * c);
                y -= yOrigin - (xOrigin * b + yOrigin * d);
              }
            } else {
              a32 = matrix[6];
              a42 = matrix[7];
              a13 = matrix[8];
              a23 = matrix[9];
              a33 = matrix[10];
              a43 = matrix[11];
              x = matrix[12];
              y = matrix[13];
              z = matrix[14];
              angle = _atan2(a32, a33);
              rotationX = angle * _RAD2DEG;
              if (angle) {
                cos = Math.cos(-angle);
                sin = Math.sin(-angle);
                t1 = a12 * cos + a13 * sin;
                t2 = a22 * cos + a23 * sin;
                t3 = a32 * cos + a33 * sin;
                a13 = a12 * -sin + a13 * cos;
                a23 = a22 * -sin + a23 * cos;
                a33 = a32 * -sin + a33 * cos;
                a43 = a42 * -sin + a43 * cos;
                a12 = t1;
                a22 = t2;
                a32 = t3;
              }
              angle = _atan2(-c, a33);
              rotationY = angle * _RAD2DEG;
              if (angle) {
                cos = Math.cos(-angle);
                sin = Math.sin(-angle);
                t1 = a * cos - a13 * sin;
                t2 = b * cos - a23 * sin;
                t3 = c * cos - a33 * sin;
                a43 = d * sin + a43 * cos;
                a = t1;
                b = t2;
                c = t3;
              }
              angle = _atan2(b, a);
              rotation = angle * _RAD2DEG;
              if (angle) {
                cos = Math.cos(angle);
                sin = Math.sin(angle);
                t1 = a * cos + b * sin;
                t2 = a12 * cos + a22 * sin;
                b = b * cos - a * sin;
                a22 = a22 * cos - a12 * sin;
                a = t1;
                a12 = t2;
              }
              if (rotationX && Math.abs(rotationX) + Math.abs(rotation) > 359.9) {
                rotationX = rotation = 0;
                rotationY = 180 - rotationY;
              }
              scaleX = _round(Math.sqrt(a * a + b * b + c * c));
              scaleY = _round(Math.sqrt(a22 * a22 + a32 * a32));
              angle = _atan2(a12, a22);
              skewX = Math.abs(angle) > 2e-4 ? angle * _RAD2DEG : 0;
              perspective = a43 ? 1 / (a43 < 0 ? -a43 : a43) : 0;
            }
            if (cache.svg) {
              t1 = target.getAttribute("transform");
              cache.forceCSS = target.setAttribute("transform", "") || !_isNullTransform(_getComputedProperty(target, _transformProp));
              t1 && target.setAttribute("transform", t1);
            }
          }
          if (Math.abs(skewX) > 90 && Math.abs(skewX) < 270) {
            if (invertedScaleX) {
              scaleX *= -1;
              skewX += rotation <= 0 ? 180 : -180;
              rotation += rotation <= 0 ? 180 : -180;
            } else {
              scaleY *= -1;
              skewX += skewX <= 0 ? 180 : -180;
            }
          }
          uncache = uncache || cache.uncache;
          cache.x = x - ((cache.xPercent = x && (!uncache && cache.xPercent || (Math.round(target.offsetWidth / 2) === Math.round(-x) ? -50 : 0))) ? target.offsetWidth * cache.xPercent / 100 : 0) + px;
          cache.y = y - ((cache.yPercent = y && (!uncache && cache.yPercent || (Math.round(target.offsetHeight / 2) === Math.round(-y) ? -50 : 0))) ? target.offsetHeight * cache.yPercent / 100 : 0) + px;
          cache.z = z + px;
          cache.scaleX = _round(scaleX);
          cache.scaleY = _round(scaleY);
          cache.rotation = _round(rotation) + deg;
          cache.rotationX = _round(rotationX) + deg;
          cache.rotationY = _round(rotationY) + deg;
          cache.skewX = skewX + deg;
          cache.skewY = skewY + deg;
          cache.transformPerspective = perspective + px;
          if (cache.zOrigin = parseFloat(origin.split(" ")[2]) || 0) {
            style[_transformOriginProp] = _firstTwoOnly(origin);
          }
          cache.xOffset = cache.yOffset = 0;
          cache.force3D = _config.force3D;
          cache.renderTransform = cache.svg ? _renderSVGTransforms : _supports3D ? _renderCSSTransforms : _renderNon3DTransforms;
          cache.uncache = 0;
          return cache;
        }, _firstTwoOnly = function _firstTwoOnly2(value) {
          return (value = value.split(" "))[0] + " " + value[1];
        }, _addPxTranslate = function _addPxTranslate2(target, start, value) {
          var unit = getUnit(start);
          return _round(parseFloat(start) + parseFloat(_convertToUnit(target, "x", value + "px", unit))) + unit;
        }, _renderNon3DTransforms = function _renderNon3DTransforms2(ratio, cache) {
          cache.z = "0px";
          cache.rotationY = cache.rotationX = "0deg";
          cache.force3D = 0;
          _renderCSSTransforms(ratio, cache);
        }, _zeroDeg = "0deg", _zeroPx = "0px", _endParenthesis = ") ", _renderCSSTransforms = function _renderCSSTransforms2(ratio, cache) {
          var _ref = cache || this, xPercent = _ref.xPercent, yPercent = _ref.yPercent, x = _ref.x, y = _ref.y, z = _ref.z, rotation = _ref.rotation, rotationY = _ref.rotationY, rotationX = _ref.rotationX, skewX = _ref.skewX, skewY = _ref.skewY, scaleX = _ref.scaleX, scaleY = _ref.scaleY, transformPerspective = _ref.transformPerspective, force3D = _ref.force3D, target = _ref.target, zOrigin = _ref.zOrigin, transforms = "", use3D = force3D === "auto" && ratio && ratio !== 1 || force3D === true;
          if (zOrigin && (rotationX !== _zeroDeg || rotationY !== _zeroDeg)) {
            var angle = parseFloat(rotationY) * _DEG2RAD, a13 = Math.sin(angle), a33 = Math.cos(angle), cos;
            angle = parseFloat(rotationX) * _DEG2RAD;
            cos = Math.cos(angle);
            x = _addPxTranslate(target, x, a13 * cos * -zOrigin);
            y = _addPxTranslate(target, y, -Math.sin(angle) * -zOrigin);
            z = _addPxTranslate(target, z, a33 * cos * -zOrigin + zOrigin);
          }
          if (transformPerspective !== _zeroPx) {
            transforms += "perspective(" + transformPerspective + _endParenthesis;
          }
          if (xPercent || yPercent) {
            transforms += "translate(" + xPercent + "%, " + yPercent + "%) ";
          }
          if (use3D || x !== _zeroPx || y !== _zeroPx || z !== _zeroPx) {
            transforms += z !== _zeroPx || use3D ? "translate3d(" + x + ", " + y + ", " + z + ") " : "translate(" + x + ", " + y + _endParenthesis;
          }
          if (rotation !== _zeroDeg) {
            transforms += "rotate(" + rotation + _endParenthesis;
          }
          if (rotationY !== _zeroDeg) {
            transforms += "rotateY(" + rotationY + _endParenthesis;
          }
          if (rotationX !== _zeroDeg) {
            transforms += "rotateX(" + rotationX + _endParenthesis;
          }
          if (skewX !== _zeroDeg || skewY !== _zeroDeg) {
            transforms += "skew(" + skewX + ", " + skewY + _endParenthesis;
          }
          if (scaleX !== 1 || scaleY !== 1) {
            transforms += "scale(" + scaleX + ", " + scaleY + _endParenthesis;
          }
          target.style[_transformProp] = transforms || "translate(0, 0)";
        }, _renderSVGTransforms = function _renderSVGTransforms2(ratio, cache) {
          var _ref2 = cache || this, xPercent = _ref2.xPercent, yPercent = _ref2.yPercent, x = _ref2.x, y = _ref2.y, rotation = _ref2.rotation, skewX = _ref2.skewX, skewY = _ref2.skewY, scaleX = _ref2.scaleX, scaleY = _ref2.scaleY, target = _ref2.target, xOrigin = _ref2.xOrigin, yOrigin = _ref2.yOrigin, xOffset = _ref2.xOffset, yOffset = _ref2.yOffset, forceCSS = _ref2.forceCSS, tx = parseFloat(x), ty = parseFloat(y), a11, a21, a12, a22, temp;
          rotation = parseFloat(rotation);
          skewX = parseFloat(skewX);
          skewY = parseFloat(skewY);
          if (skewY) {
            skewY = parseFloat(skewY);
            skewX += skewY;
            rotation += skewY;
          }
          if (rotation || skewX) {
            rotation *= _DEG2RAD;
            skewX *= _DEG2RAD;
            a11 = Math.cos(rotation) * scaleX;
            a21 = Math.sin(rotation) * scaleX;
            a12 = Math.sin(rotation - skewX) * -scaleY;
            a22 = Math.cos(rotation - skewX) * scaleY;
            if (skewX) {
              skewY *= _DEG2RAD;
              temp = Math.tan(skewX - skewY);
              temp = Math.sqrt(1 + temp * temp);
              a12 *= temp;
              a22 *= temp;
              if (skewY) {
                temp = Math.tan(skewY);
                temp = Math.sqrt(1 + temp * temp);
                a11 *= temp;
                a21 *= temp;
              }
            }
            a11 = _round(a11);
            a21 = _round(a21);
            a12 = _round(a12);
            a22 = _round(a22);
          } else {
            a11 = scaleX;
            a22 = scaleY;
            a21 = a12 = 0;
          }
          if (tx && !~(x + "").indexOf("px") || ty && !~(y + "").indexOf("px")) {
            tx = _convertToUnit(target, "x", x, "px");
            ty = _convertToUnit(target, "y", y, "px");
          }
          if (xOrigin || yOrigin || xOffset || yOffset) {
            tx = _round(tx + xOrigin - (xOrigin * a11 + yOrigin * a12) + xOffset);
            ty = _round(ty + yOrigin - (xOrigin * a21 + yOrigin * a22) + yOffset);
          }
          if (xPercent || yPercent) {
            temp = target.getBBox();
            tx = _round(tx + xPercent / 100 * temp.width);
            ty = _round(ty + yPercent / 100 * temp.height);
          }
          temp = "matrix(" + a11 + "," + a21 + "," + a12 + "," + a22 + "," + tx + "," + ty + ")";
          target.setAttribute("transform", temp);
          forceCSS && (target.style[_transformProp] = temp);
        }, _addRotationalPropTween = function _addRotationalPropTween2(plugin, target, property, startNum, endValue) {
          var cap = 360, isString = _isString(endValue), endNum = parseFloat(endValue) * (isString && ~endValue.indexOf("rad") ? _RAD2DEG : 1), change = endNum - startNum, finalValue = startNum + change + "deg", direction, pt;
          if (isString) {
            direction = endValue.split("_")[1];
            if (direction === "short") {
              change %= cap;
              if (change !== change % (cap / 2)) {
                change += change < 0 ? cap : -cap;
              }
            }
            if (direction === "cw" && change < 0) {
              change = (change + cap * _bigNum$1) % cap - ~~(change / cap) * cap;
            } else if (direction === "ccw" && change > 0) {
              change = (change - cap * _bigNum$1) % cap - ~~(change / cap) * cap;
            }
          }
          plugin._pt = pt = new PropTween(plugin._pt, target, property, startNum, change, _renderPropWithEnd);
          pt.e = finalValue;
          pt.u = "deg";
          plugin._props.push(property);
          return pt;
        }, _assign = function _assign2(target, source) {
          for (var p in source) {
            target[p] = source[p];
          }
          return target;
        }, _addRawTransformPTs = function _addRawTransformPTs2(plugin, transforms, target) {
          var startCache = _assign({}, target._gsap), exclude = "perspective,force3D,transformOrigin,svgOrigin", style = target.style, endCache, p, startValue, endValue, startNum, endNum, startUnit, endUnit;
          if (startCache.svg) {
            startValue = target.getAttribute("transform");
            target.setAttribute("transform", "");
            style[_transformProp] = transforms;
            endCache = _parseTransform(target, 1);
            _removeProperty(target, _transformProp);
            target.setAttribute("transform", startValue);
          } else {
            startValue = getComputedStyle(target)[_transformProp];
            style[_transformProp] = transforms;
            endCache = _parseTransform(target, 1);
            style[_transformProp] = startValue;
          }
          for (p in _transformProps) {
            startValue = startCache[p];
            endValue = endCache[p];
            if (startValue !== endValue && exclude.indexOf(p) < 0) {
              startUnit = getUnit(startValue);
              endUnit = getUnit(endValue);
              startNum = startUnit !== endUnit ? _convertToUnit(target, p, startValue, endUnit) : parseFloat(startValue);
              endNum = parseFloat(endValue);
              plugin._pt = new PropTween(plugin._pt, endCache, p, startNum, endNum - startNum, _renderCSSProp);
              plugin._pt.u = endUnit || 0;
              plugin._props.push(p);
            }
          }
          _assign(endCache, startCache);
        };
        _forEachName("padding,margin,Width,Radius", function(name, index) {
          var t = "Top", r = "Right", b = "Bottom", l = "Left", props = (index < 3 ? [t, r, b, l] : [t + l, t + r, b + r, b + l]).map(function(side) {
            return index < 2 ? name + side : "border" + side + name;
          });
          _specialProps[index > 1 ? "border" + name : name] = function(plugin, target, property, endValue, tween) {
            var a, vars;
            if (arguments.length < 4) {
              a = props.map(function(prop) {
                return _get2(plugin, prop, property);
              });
              vars = a.join(" ");
              return vars.split(a[0]).length === 5 ? a[0] : vars;
            }
            a = (endValue + "").split(" ");
            vars = {};
            props.forEach(function(prop, i) {
              return vars[prop] = a[i] = a[i] || a[(i - 1) / 2 | 0];
            });
            plugin.init(target, vars, tween);
          };
        });
        var CSSPlugin = {
          name: "css",
          register: _initCore,
          targetTest: function targetTest(target) {
            return target.style && target.nodeType;
          },
          init: function init(target, vars, tween, index, targets) {
            var props = this._props, style = target.style, startAt = tween.vars.startAt, startValue, endValue, endNum, startNum, type, specialProp, p, startUnit, endUnit, relative, isTransformRelated, transformPropTween, cache, smooth, hasPriority;
            _pluginInitted || _initCore();
            for (p in vars) {
              if (p === "autoRound") {
                continue;
              }
              endValue = vars[p];
              if (_plugins[p] && _checkPlugin(p, vars, tween, index, target, targets)) {
                continue;
              }
              type = typeof endValue;
              specialProp = _specialProps[p];
              if (type === "function") {
                endValue = endValue.call(tween, index, target, targets);
                type = typeof endValue;
              }
              if (type === "string" && ~endValue.indexOf("random(")) {
                endValue = _replaceRandom(endValue);
              }
              if (specialProp) {
                specialProp(this, target, p, endValue, tween) && (hasPriority = 1);
              } else if (p.substr(0, 2) === "--") {
                startValue = (getComputedStyle(target).getPropertyValue(p) + "").trim();
                endValue += "";
                _colorExp.lastIndex = 0;
                if (!_colorExp.test(startValue)) {
                  startUnit = getUnit(startValue);
                  endUnit = getUnit(endValue);
                }
                endUnit ? startUnit !== endUnit && (startValue = _convertToUnit(target, p, startValue, endUnit) + endUnit) : startUnit && (endValue += startUnit);
                this.add(style, "setProperty", startValue, endValue, index, targets, 0, 0, p);
                props.push(p);
              } else if (type !== "undefined") {
                if (startAt && p in startAt) {
                  startValue = typeof startAt[p] === "function" ? startAt[p].call(tween, index, target, targets) : startAt[p];
                  _isString(startValue) && ~startValue.indexOf("random(") && (startValue = _replaceRandom(startValue));
                  getUnit(startValue + "") || (startValue += _config.units[p] || getUnit(_get2(target, p)) || "");
                  (startValue + "").charAt(1) === "=" && (startValue = _get2(target, p));
                } else {
                  startValue = _get2(target, p);
                }
                startNum = parseFloat(startValue);
                relative = type === "string" && endValue.charAt(1) === "=" && endValue.substr(0, 2);
                relative && (endValue = endValue.substr(2));
                endNum = parseFloat(endValue);
                if (p in _propertyAliases) {
                  if (p === "autoAlpha") {
                    if (startNum === 1 && _get2(target, "visibility") === "hidden" && endNum) {
                      startNum = 0;
                    }
                    _addNonTweeningPT(this, style, "visibility", startNum ? "inherit" : "hidden", endNum ? "inherit" : "hidden", !endNum);
                  }
                  if (p !== "scale" && p !== "transform") {
                    p = _propertyAliases[p];
                    ~p.indexOf(",") && (p = p.split(",")[0]);
                  }
                }
                isTransformRelated = p in _transformProps;
                if (isTransformRelated) {
                  if (!transformPropTween) {
                    cache = target._gsap;
                    cache.renderTransform && !vars.parseTransform || _parseTransform(target, vars.parseTransform);
                    smooth = vars.smoothOrigin !== false && cache.smooth;
                    transformPropTween = this._pt = new PropTween(this._pt, style, _transformProp, 0, 1, cache.renderTransform, cache, 0, -1);
                    transformPropTween.dep = 1;
                  }
                  if (p === "scale") {
                    this._pt = new PropTween(this._pt, cache, "scaleY", cache.scaleY, (relative ? _parseRelative(cache.scaleY, relative + endNum) : endNum) - cache.scaleY || 0);
                    props.push("scaleY", p);
                    p += "X";
                  } else if (p === "transformOrigin") {
                    endValue = _convertKeywordsToPercentages(endValue);
                    if (cache.svg) {
                      _applySVGOrigin(target, endValue, 0, smooth, 0, this);
                    } else {
                      endUnit = parseFloat(endValue.split(" ")[2]) || 0;
                      endUnit !== cache.zOrigin && _addNonTweeningPT(this, cache, "zOrigin", cache.zOrigin, endUnit);
                      _addNonTweeningPT(this, style, p, _firstTwoOnly(startValue), _firstTwoOnly(endValue));
                    }
                    continue;
                  } else if (p === "svgOrigin") {
                    _applySVGOrigin(target, endValue, 1, smooth, 0, this);
                    continue;
                  } else if (p in _rotationalProperties) {
                    _addRotationalPropTween(this, cache, p, startNum, relative ? _parseRelative(startNum, relative + endValue) : endValue);
                    continue;
                  } else if (p === "smoothOrigin") {
                    _addNonTweeningPT(this, cache, "smooth", cache.smooth, endValue);
                    continue;
                  } else if (p === "force3D") {
                    cache[p] = endValue;
                    continue;
                  } else if (p === "transform") {
                    _addRawTransformPTs(this, endValue, target);
                    continue;
                  }
                } else if (!(p in style)) {
                  p = _checkPropPrefix(p) || p;
                }
                if (isTransformRelated || (endNum || endNum === 0) && (startNum || startNum === 0) && !_complexExp.test(endValue) && p in style) {
                  startUnit = (startValue + "").substr((startNum + "").length);
                  endNum || (endNum = 0);
                  endUnit = getUnit(endValue) || (p in _config.units ? _config.units[p] : startUnit);
                  startUnit !== endUnit && (startNum = _convertToUnit(target, p, startValue, endUnit));
                  this._pt = new PropTween(this._pt, isTransformRelated ? cache : style, p, startNum, (relative ? _parseRelative(startNum, relative + endNum) : endNum) - startNum, !isTransformRelated && (endUnit === "px" || p === "zIndex") && vars.autoRound !== false ? _renderRoundedCSSProp : _renderCSSProp);
                  this._pt.u = endUnit || 0;
                  if (startUnit !== endUnit && endUnit !== "%") {
                    this._pt.b = startValue;
                    this._pt.r = _renderCSSPropWithBeginning;
                  }
                } else if (!(p in style)) {
                  if (p in target) {
                    this.add(target, p, startValue || target[p], relative ? relative + endValue : endValue, index, targets);
                  } else {
                    _missingPlugin(p, endValue);
                    continue;
                  }
                } else {
                  _tweenComplexCSSString.call(this, target, p, startValue, relative ? relative + endValue : endValue);
                }
                props.push(p);
              }
            }
            hasPriority && _sortPropTweensByPriority(this);
          },
          get: _get2,
          aliases: _propertyAliases,
          getSetter: function getSetter(target, property, plugin) {
            var p = _propertyAliases[property];
            p && p.indexOf(",") < 0 && (property = p);
            return property in _transformProps && property !== _transformOriginProp && (target._gsap.x || _get2(target, "x")) ? plugin && _recentSetterPlugin === plugin ? property === "scale" ? _setterScale : _setterTransform : (_recentSetterPlugin = plugin || {}) && (property === "scale" ? _setterScaleWithRender : _setterTransformWithRender) : target.style && !_isUndefined(target.style[property]) ? _setterCSSStyle : ~property.indexOf("-") ? _setterCSSProp : _getSetter(target, property);
          },
          core: {
            _removeProperty,
            _getMatrix
          }
        };
        gsap2.utils.checkPrefix = _checkPropPrefix;
        (function(positionAndScale, rotation, others, aliases) {
          var all = _forEachName(positionAndScale + "," + rotation + "," + others, function(name) {
            _transformProps[name] = 1;
          });
          _forEachName(rotation, function(name) {
            _config.units[name] = "deg";
            _rotationalProperties[name] = 1;
          });
          _propertyAliases[all[13]] = positionAndScale + "," + rotation;
          _forEachName(aliases, function(name) {
            var split = name.split(":");
            _propertyAliases[split[1]] = all[split[0]];
          });
        })("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
        _forEachName("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(name) {
          _config.units[name] = "px";
        });
        gsap2.registerPlugin(CSSPlugin);
        var gsapWithCSS = gsap2.registerPlugin(CSSPlugin) || gsap2, TweenMaxWithCSS = gsapWithCSS.core.Tween;
        exports2.Back = Back;
        exports2.Bounce = Bounce;
        exports2.CSSPlugin = CSSPlugin;
        exports2.Circ = Circ;
        exports2.Cubic = Cubic;
        exports2.Elastic = Elastic;
        exports2.Expo = Expo;
        exports2.Linear = Linear;
        exports2.Power0 = Power0;
        exports2.Power1 = Power1;
        exports2.Power2 = Power2;
        exports2.Power3 = Power3;
        exports2.Power4 = Power4;
        exports2.Quad = Quad;
        exports2.Quart = Quart;
        exports2.Quint = Quint;
        exports2.Sine = Sine;
        exports2.SteppedEase = SteppedEase;
        exports2.Strong = Strong;
        exports2.TimelineLite = Timeline;
        exports2.TimelineMax = Timeline;
        exports2.TweenLite = Tween;
        exports2.TweenMax = TweenMaxWithCSS;
        exports2.default = gsapWithCSS;
        exports2.gsap = gsapWithCSS;
        if (typeof window === "undefined" || window !== exports2) {
          Object.defineProperty(exports2, "__esModule", { value: true });
        } else {
          delete window.default;
        }
      });
    }
  });

  // node_modules/gsap/dist/ScrollTrigger.js
  var require_ScrollTrigger = __commonJS({
    "node_modules/gsap/dist/ScrollTrigger.js"(exports, module) {
      (function(global2, factory) {
        typeof exports === "object" && typeof module !== "undefined" ? factory(exports) : typeof define === "function" && define.amd ? define(["exports"], factory) : (global2 = global2 || self, factory(global2.window = global2.window || {}));
      })(exports, function(exports2) {
        "use strict";
        function _defineProperties2(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor)
              descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }
        function _createClass2(Constructor, protoProps, staticProps) {
          if (protoProps)
            _defineProperties2(Constructor.prototype, protoProps);
          if (staticProps)
            _defineProperties2(Constructor, staticProps);
          return Constructor;
        }
        var gsap2, _coreInitted, _clamp, _win, _doc, _docEl, _body, _isTouch, _pointerType, ScrollTrigger2, _root, _normalizer, _eventTypes, _getGSAP = function _getGSAP2() {
          return gsap2 || typeof window !== "undefined" && (gsap2 = window.gsap) && gsap2.registerPlugin && gsap2;
        }, _startup = 1, _observers = [], _scrollers = [], _proxies = [], _getTime = Date.now, _bridge = function _bridge2(name, value) {
          return value;
        }, _integrate = function _integrate2() {
          var core = ScrollTrigger2.core, data = core.bridge || {}, scrollers = core._scrollers, proxies = core._proxies;
          scrollers.push.apply(scrollers, _scrollers);
          proxies.push.apply(proxies, _proxies);
          _scrollers = scrollers;
          _proxies = proxies;
          _bridge = function _bridge2(name, value) {
            return data[name](value);
          };
        }, _getProxyProp = function _getProxyProp2(element, property) {
          return ~_proxies.indexOf(element) && _proxies[_proxies.indexOf(element) + 1][property];
        }, _isViewport = function _isViewport2(el) {
          return !!~_root.indexOf(el);
        }, _addListener = function _addListener2(element, type, func, nonPassive, capture) {
          return element.addEventListener(type, func, {
            passive: !nonPassive,
            capture: !!capture
          });
        }, _removeListener = function _removeListener2(element, type, func, capture) {
          return element.removeEventListener(type, func, !!capture);
        }, _scrollLeft = "scrollLeft", _scrollTop = "scrollTop", _onScroll = function _onScroll2() {
          return _normalizer && _normalizer.isPressed || _scrollers.cache++;
        }, _scrollCacheFunc = function _scrollCacheFunc2(f, doNotCache) {
          var cachingFunc = function cachingFunc2(value) {
            if (value || value === 0) {
              _startup && (_win.history.scrollRestoration = "manual");
              var isNormalizing = _normalizer && _normalizer.isPressed;
              value = cachingFunc2.v = Math.round(value) || (_normalizer && _normalizer.iOS ? 1 : 0);
              f(value);
              cachingFunc2.cacheID = _scrollers.cache;
              isNormalizing && _bridge("ss", value);
            } else if (doNotCache || _scrollers.cache !== cachingFunc2.cacheID || _bridge("ref")) {
              cachingFunc2.cacheID = _scrollers.cache;
              cachingFunc2.v = f();
            }
            return cachingFunc2.v + cachingFunc2.offset;
          };
          cachingFunc.offset = 0;
          return f && cachingFunc;
        }, _horizontal = {
          s: _scrollLeft,
          p: "left",
          p2: "Left",
          os: "right",
          os2: "Right",
          d: "width",
          d2: "Width",
          a: "x",
          sc: _scrollCacheFunc(function(value) {
            return arguments.length ? _win.scrollTo(value, _vertical.sc()) : _win.pageXOffset || _doc[_scrollLeft] || _docEl[_scrollLeft] || _body[_scrollLeft] || 0;
          })
        }, _vertical = {
          s: _scrollTop,
          p: "top",
          p2: "Top",
          os: "bottom",
          os2: "Bottom",
          d: "height",
          d2: "Height",
          a: "y",
          op: _horizontal,
          sc: _scrollCacheFunc(function(value) {
            return arguments.length ? _win.scrollTo(_horizontal.sc(), value) : _win.pageYOffset || _doc[_scrollTop] || _docEl[_scrollTop] || _body[_scrollTop] || 0;
          })
        }, _getTarget = function _getTarget2(t) {
          return gsap2.utils.toArray(t)[0] || (typeof t === "string" && gsap2.config().nullTargetWarn !== false ? console.warn("Element not found:", t) : null);
        }, _getScrollFunc = function _getScrollFunc2(element, _ref) {
          var s = _ref.s, sc = _ref.sc;
          var i = _scrollers.indexOf(element), offset = sc === _vertical.sc ? 1 : 2;
          !~i && (i = _scrollers.push(element) - 1);
          return _scrollers[i + offset] || (_scrollers[i + offset] = _scrollCacheFunc(_getProxyProp(element, s), true) || (_isViewport(element) ? sc : _scrollCacheFunc(function(value) {
            return arguments.length ? element[s] = value : element[s];
          })));
        }, _getVelocityProp = function _getVelocityProp2(value, minTimeRefresh, useDelta) {
          var v1 = value, v2 = value, t1 = _getTime(), t2 = t1, min = minTimeRefresh || 50, dropToZeroTime = Math.max(500, min * 3), update = function update2(value2, force) {
            var t = _getTime();
            if (force || t - t1 > min) {
              v2 = v1;
              v1 = value2;
              t2 = t1;
              t1 = t;
            } else if (useDelta) {
              v1 += value2;
            } else {
              v1 = v2 + (value2 - v2) / (t - t2) * (t1 - t2);
            }
          }, reset = function reset2() {
            v2 = v1 = useDelta ? 0 : v1;
            t2 = t1 = 0;
          }, getVelocity = function getVelocity2(latestValue) {
            var tOld = t2, vOld = v2, t = _getTime();
            (latestValue || latestValue === 0) && latestValue !== v1 && update(latestValue);
            return t1 === t2 || t - t2 > dropToZeroTime ? 0 : (v1 + (useDelta ? vOld : -vOld)) / ((useDelta ? t : t1) - tOld) * 1e3;
          };
          return {
            update,
            reset,
            getVelocity
          };
        }, _getEvent = function _getEvent2(e, preventDefault) {
          preventDefault && !e._gsapAllow && e.preventDefault();
          return e.changedTouches ? e.changedTouches[0] : e;
        }, _getAbsoluteMax = function _getAbsoluteMax2(a) {
          var max = Math.max.apply(Math, a), min = Math.min.apply(Math, a);
          return Math.abs(max) >= Math.abs(min) ? max : min;
        }, _setScrollTrigger = function _setScrollTrigger2() {
          ScrollTrigger2 = gsap2.core.globals().ScrollTrigger;
          ScrollTrigger2 && ScrollTrigger2.core && _integrate();
        }, _initCore = function _initCore2(core) {
          gsap2 = core || _getGSAP();
          if (gsap2 && typeof document !== "undefined" && document.body) {
            _win = window;
            _doc = document;
            _docEl = _doc.documentElement;
            _body = _doc.body;
            _root = [_win, _doc, _docEl, _body];
            _clamp = gsap2.utils.clamp;
            _pointerType = "onpointerenter" in _body ? "pointer" : "mouse";
            _isTouch = Observer.isTouch = _win.matchMedia && _win.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart" in _win || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0;
            _eventTypes = Observer.eventTypes = ("ontouchstart" in _docEl ? "touchstart,touchmove,touchcancel,touchend" : !("onpointerdown" in _docEl) ? "mousedown,mousemove,mouseup,mouseup" : "pointerdown,pointermove,pointercancel,pointerup").split(",");
            setTimeout(function() {
              return _startup = 0;
            }, 500);
            _setScrollTrigger();
            _coreInitted = 1;
          }
          return _coreInitted;
        };
        _horizontal.op = _vertical;
        _scrollers.cache = 0;
        var Observer = function() {
          function Observer2(vars) {
            this.init(vars);
          }
          var _proto = Observer2.prototype;
          _proto.init = function init(vars) {
            _coreInitted || _initCore(gsap2) || console.warn("Please gsap.registerPlugin(Observer)");
            ScrollTrigger2 || _setScrollTrigger();
            var tolerance = vars.tolerance, dragMinimum = vars.dragMinimum, type = vars.type, target = vars.target, lineHeight = vars.lineHeight, debounce = vars.debounce, preventDefault = vars.preventDefault, onStop = vars.onStop, onStopDelay = vars.onStopDelay, ignore = vars.ignore, wheelSpeed = vars.wheelSpeed, event = vars.event, onDragStart = vars.onDragStart, onDragEnd = vars.onDragEnd, onDrag = vars.onDrag, onPress = vars.onPress, onRelease = vars.onRelease, onRight = vars.onRight, onLeft = vars.onLeft, onUp = vars.onUp, onDown = vars.onDown, onChangeX = vars.onChangeX, onChangeY = vars.onChangeY, onChange = vars.onChange, onToggleX = vars.onToggleX, onToggleY = vars.onToggleY, onHover = vars.onHover, onHoverEnd = vars.onHoverEnd, onMove = vars.onMove, ignoreCheck = vars.ignoreCheck, isNormalizer = vars.isNormalizer, onGestureStart = vars.onGestureStart, onGestureEnd = vars.onGestureEnd, onWheel = vars.onWheel, onEnable = vars.onEnable, onDisable = vars.onDisable, onClick = vars.onClick, scrollSpeed = vars.scrollSpeed, capture = vars.capture, allowClicks = vars.allowClicks, lockAxis = vars.lockAxis, onLockAxis = vars.onLockAxis;
            this.target = target = _getTarget(target) || _docEl;
            this.vars = vars;
            ignore && (ignore = gsap2.utils.toArray(ignore));
            tolerance = tolerance || 0;
            dragMinimum = dragMinimum || 0;
            wheelSpeed = wheelSpeed || 1;
            scrollSpeed = scrollSpeed || 1;
            type = type || "wheel,touch,pointer";
            debounce = debounce !== false;
            lineHeight || (lineHeight = parseFloat(_win.getComputedStyle(_body).lineHeight) || 22);
            var id, onStopDelayedCall, dragged, moved, wheeled, locked, axis, self2 = this, prevDeltaX = 0, prevDeltaY = 0, scrollFuncX = _getScrollFunc(target, _horizontal), scrollFuncY = _getScrollFunc(target, _vertical), scrollX = scrollFuncX(), scrollY = scrollFuncY(), limitToTouch = ~type.indexOf("touch") && !~type.indexOf("pointer") && _eventTypes[0] === "pointerdown", isViewport = _isViewport(target), ownerDoc = target.ownerDocument || _doc, deltaX = [0, 0, 0], deltaY = [0, 0, 0], onClickTime = 0, clickCapture = function clickCapture2() {
              return onClickTime = _getTime();
            }, _ignoreCheck = function _ignoreCheck2(e, isPointerOrTouch) {
              return (self2.event = e) && ignore && ~ignore.indexOf(e.target) || isPointerOrTouch && limitToTouch && e.pointerType !== "touch" || ignoreCheck && ignoreCheck(e, isPointerOrTouch);
            }, onStopFunc = function onStopFunc2() {
              self2._vx.reset();
              self2._vy.reset();
              onStopDelayedCall.pause();
              onStop && onStop(self2);
            }, update = function update2() {
              var dx = self2.deltaX = _getAbsoluteMax(deltaX), dy = self2.deltaY = _getAbsoluteMax(deltaY), changedX = Math.abs(dx) >= tolerance, changedY = Math.abs(dy) >= tolerance;
              onChange && (changedX || changedY) && onChange(self2, dx, dy, deltaX, deltaY);
              if (changedX) {
                onRight && self2.deltaX > 0 && onRight(self2);
                onLeft && self2.deltaX < 0 && onLeft(self2);
                onChangeX && onChangeX(self2);
                onToggleX && self2.deltaX < 0 !== prevDeltaX < 0 && onToggleX(self2);
                prevDeltaX = self2.deltaX;
                deltaX[0] = deltaX[1] = deltaX[2] = 0;
              }
              if (changedY) {
                onDown && self2.deltaY > 0 && onDown(self2);
                onUp && self2.deltaY < 0 && onUp(self2);
                onChangeY && onChangeY(self2);
                onToggleY && self2.deltaY < 0 !== prevDeltaY < 0 && onToggleY(self2);
                prevDeltaY = self2.deltaY;
                deltaY[0] = deltaY[1] = deltaY[2] = 0;
              }
              if (moved || dragged) {
                onMove && onMove(self2);
                onLockAxis && locked && onLockAxis(self2);
                if (dragged) {
                  onDrag(self2);
                  dragged = false;
                }
                moved = locked = false;
              }
              if (wheeled) {
                onWheel(self2);
                wheeled = false;
              }
              id = 0;
            }, onDelta = function onDelta2(x, y, index) {
              deltaX[index] += x;
              deltaY[index] += y;
              self2._vx.update(x);
              self2._vy.update(y);
              debounce ? id || (id = requestAnimationFrame(update)) : update();
            }, onTouchOrPointerDelta = function onTouchOrPointerDelta2(x, y) {
              if (axis !== "y") {
                deltaX[2] += x;
                self2._vx.update(x, true);
              }
              if (axis !== "x") {
                deltaY[2] += y;
                self2._vy.update(y, true);
              }
              if (lockAxis && !axis) {
                self2.axis = axis = Math.abs(x) > Math.abs(y) ? "x" : "y";
                locked = true;
              }
              debounce ? id || (id = requestAnimationFrame(update)) : update();
            }, _onDrag = function _onDrag2(e) {
              if (_ignoreCheck(e, 1)) {
                return;
              }
              e = _getEvent(e, preventDefault);
              var x = e.clientX, y = e.clientY, dx = x - self2.x, dy = y - self2.y, isDragging = self2.isDragging;
              self2.x = x;
              self2.y = y;
              if (isDragging || Math.abs(self2.startX - x) >= dragMinimum || Math.abs(self2.startY - y) >= dragMinimum) {
                onDrag && (dragged = true);
                isDragging || (self2.isDragging = true);
                onTouchOrPointerDelta(dx, dy);
                isDragging || onDragStart && onDragStart(self2);
              }
            }, _onPress = self2.onPress = function(e) {
              if (_ignoreCheck(e, 1)) {
                return;
              }
              self2.axis = axis = null;
              onStopDelayedCall.pause();
              self2.isPressed = true;
              e = _getEvent(e);
              prevDeltaX = prevDeltaY = 0;
              self2.startX = self2.x = e.clientX;
              self2.startY = self2.y = e.clientY;
              self2._vx.reset();
              self2._vy.reset();
              _addListener(isNormalizer ? target : ownerDoc, _eventTypes[1], _onDrag, preventDefault, true);
              self2.deltaX = self2.deltaY = 0;
              onPress && onPress(self2);
            }, _onRelease = function _onRelease2(e) {
              if (_ignoreCheck(e, 1)) {
                return;
              }
              _removeListener(isNormalizer ? target : ownerDoc, _eventTypes[1], _onDrag, true);
              var wasDragging = self2.isDragging && (Math.abs(self2.x - self2.startX) > 3 || Math.abs(self2.y - self2.startY) > 3), eventData = _getEvent(e);
              if (!wasDragging) {
                self2._vx.reset();
                self2._vy.reset();
                if (preventDefault && allowClicks) {
                  gsap2.delayedCall(0.08, function() {
                    if (_getTime() - onClickTime > 300 && !e.defaultPrevented) {
                      if (e.target.click) {
                        e.target.click();
                      } else if (ownerDoc.createEvent) {
                        var syntheticEvent = ownerDoc.createEvent("MouseEvents");
                        syntheticEvent.initMouseEvent("click", true, true, _win, 1, eventData.screenX, eventData.screenY, eventData.clientX, eventData.clientY, false, false, false, false, 0, null);
                        e.target.dispatchEvent(syntheticEvent);
                      }
                    }
                  });
                }
              }
              self2.isDragging = self2.isGesturing = self2.isPressed = false;
              onStop && !isNormalizer && onStopDelayedCall.restart(true);
              onDragEnd && wasDragging && onDragEnd(self2);
              onRelease && onRelease(self2, wasDragging);
            }, _onGestureStart = function _onGestureStart2(e) {
              return e.touches && e.touches.length > 1 && (self2.isGesturing = true) && onGestureStart(e, self2.isDragging);
            }, _onGestureEnd = function _onGestureEnd2() {
              return (self2.isGesturing = false) || onGestureEnd(self2);
            }, onScroll = function onScroll2(e) {
              if (_ignoreCheck(e)) {
                return;
              }
              var x = scrollFuncX(), y = scrollFuncY();
              onDelta((x - scrollX) * scrollSpeed, (y - scrollY) * scrollSpeed, 1);
              scrollX = x;
              scrollY = y;
              onStop && onStopDelayedCall.restart(true);
            }, _onWheel = function _onWheel2(e) {
              if (_ignoreCheck(e)) {
                return;
              }
              e = _getEvent(e, preventDefault);
              onWheel && (wheeled = true);
              var multiplier = (e.deltaMode === 1 ? lineHeight : e.deltaMode === 2 ? _win.innerHeight : 1) * wheelSpeed;
              onDelta(e.deltaX * multiplier, e.deltaY * multiplier, 0);
              onStop && !isNormalizer && onStopDelayedCall.restart(true);
            }, _onMove = function _onMove2(e) {
              if (_ignoreCheck(e)) {
                return;
              }
              var x = e.clientX, y = e.clientY, dx = x - self2.x, dy = y - self2.y;
              self2.x = x;
              self2.y = y;
              moved = true;
              (dx || dy) && onTouchOrPointerDelta(dx, dy);
            }, _onHover = function _onHover2(e) {
              self2.event = e;
              onHover(self2);
            }, _onHoverEnd = function _onHoverEnd2(e) {
              self2.event = e;
              onHoverEnd(self2);
            }, _onClick = function _onClick2(e) {
              return _ignoreCheck(e) || _getEvent(e, preventDefault) && onClick(self2);
            };
            onStopDelayedCall = self2._dc = gsap2.delayedCall(onStopDelay || 0.25, onStopFunc).pause();
            self2.deltaX = self2.deltaY = 0;
            self2._vx = _getVelocityProp(0, 50, true);
            self2._vy = _getVelocityProp(0, 50, true);
            self2.scrollX = scrollFuncX;
            self2.scrollY = scrollFuncY;
            self2.isDragging = self2.isGesturing = self2.isPressed = false;
            self2.enable = function(e) {
              if (!self2.isEnabled) {
                _addListener(isViewport ? ownerDoc : target, "scroll", _onScroll);
                type.indexOf("scroll") >= 0 && _addListener(isViewport ? ownerDoc : target, "scroll", onScroll, preventDefault, capture);
                type.indexOf("wheel") >= 0 && _addListener(target, "wheel", _onWheel, preventDefault, capture);
                if (type.indexOf("touch") >= 0 && _isTouch || type.indexOf("pointer") >= 0) {
                  _addListener(target, _eventTypes[0], _onPress, preventDefault, capture);
                  _addListener(ownerDoc, _eventTypes[2], _onRelease);
                  _addListener(ownerDoc, _eventTypes[3], _onRelease);
                  allowClicks && _addListener(target, "click", clickCapture, false, true);
                  onClick && _addListener(target, "click", _onClick);
                  onGestureStart && _addListener(ownerDoc, "gesturestart", _onGestureStart);
                  onGestureEnd && _addListener(ownerDoc, "gestureend", _onGestureEnd);
                  onHover && _addListener(target, _pointerType + "enter", _onHover);
                  onHoverEnd && _addListener(target, _pointerType + "leave", _onHoverEnd);
                  onMove && _addListener(target, _pointerType + "move", _onMove);
                }
                self2.isEnabled = true;
                e && e.type && _onPress(e);
                onEnable && onEnable(self2);
              }
              return self2;
            };
            self2.disable = function() {
              if (self2.isEnabled) {
                _observers.filter(function(o) {
                  return o !== self2 && _isViewport(o.target);
                }).length || _removeListener(isViewport ? ownerDoc : target, "scroll", _onScroll);
                if (self2.isPressed) {
                  self2._vx.reset();
                  self2._vy.reset();
                  _removeListener(isNormalizer ? target : ownerDoc, _eventTypes[1], _onDrag, true);
                }
                _removeListener(isViewport ? ownerDoc : target, "scroll", onScroll, capture);
                _removeListener(target, "wheel", _onWheel, capture);
                _removeListener(target, _eventTypes[0], _onPress, capture);
                _removeListener(ownerDoc, _eventTypes[2], _onRelease);
                _removeListener(ownerDoc, _eventTypes[3], _onRelease);
                _removeListener(target, "click", clickCapture, true);
                _removeListener(target, "click", _onClick);
                _removeListener(ownerDoc, "gesturestart", _onGestureStart);
                _removeListener(ownerDoc, "gestureend", _onGestureEnd);
                _removeListener(target, _pointerType + "enter", _onHover);
                _removeListener(target, _pointerType + "leave", _onHoverEnd);
                _removeListener(target, _pointerType + "move", _onMove);
                self2.isEnabled = self2.isPressed = self2.isDragging = false;
                onDisable && onDisable(self2);
              }
            };
            self2.kill = function() {
              self2.disable();
              var i = _observers.indexOf(self2);
              i >= 0 && _observers.splice(i, 1);
              _normalizer === self2 && (_normalizer = 0);
            };
            _observers.push(self2);
            isNormalizer && _isViewport(target) && (_normalizer = self2);
            self2.enable(event);
          };
          _createClass2(Observer2, [{
            key: "velocityX",
            get: function get() {
              return this._vx.getVelocity();
            }
          }, {
            key: "velocityY",
            get: function get() {
              return this._vy.getVelocity();
            }
          }]);
          return Observer2;
        }();
        Observer.version = "3.10.4";
        Observer.create = function(vars) {
          return new Observer(vars);
        };
        Observer.register = _initCore;
        Observer.getAll = function() {
          return _observers.slice();
        };
        Observer.getById = function(id) {
          return _observers.filter(function(o) {
            return o.vars.id === id;
          })[0];
        };
        _getGSAP() && gsap2.registerPlugin(Observer);
        var gsap$1, _coreInitted$1, _win$1, _doc$1, _docEl$1, _body$1, _root$1, _resizeDelay, _toArray, _clamp$1, _time2, _syncInterval, _refreshing, _pointerIsDown, _transformProp, _i, _prevWidth, _prevHeight, _autoRefresh, _sort, _suppressOverwrites, _ignoreResize, _normalizer$1, _ignoreMobileResize, _baseScreenHeight, _baseScreenWidth, _fixIOSBug, _limitCallbacks, _startup$1 = 1, _getTime$1 = Date.now, _time1 = _getTime$1(), _lastScrollTime = 0, _enabled = 0, _pointerDownHandler = function _pointerDownHandler2() {
          return _pointerIsDown = 1;
        }, _pointerUpHandler = function _pointerUpHandler2() {
          return _pointerIsDown = 0;
        }, _passThrough = function _passThrough2(v) {
          return v;
        }, _round = function _round2(value) {
          return Math.round(value * 1e5) / 1e5 || 0;
        }, _windowExists = function _windowExists2() {
          return typeof window !== "undefined";
        }, _getGSAP$1 = function _getGSAP2() {
          return gsap$1 || _windowExists() && (gsap$1 = window.gsap) && gsap$1.registerPlugin && gsap$1;
        }, _isViewport$1 = function _isViewport2(e) {
          return !!~_root$1.indexOf(e);
        }, _getBoundsFunc = function _getBoundsFunc2(element) {
          return _getProxyProp(element, "getBoundingClientRect") || (_isViewport$1(element) ? function() {
            _winOffsets.width = _win$1.innerWidth;
            _winOffsets.height = _win$1.innerHeight;
            return _winOffsets;
          } : function() {
            return _getBounds(element);
          });
        }, _getSizeFunc = function _getSizeFunc2(scroller, isViewport, _ref) {
          var d = _ref.d, d2 = _ref.d2, a = _ref.a;
          return (a = _getProxyProp(scroller, "getBoundingClientRect")) ? function() {
            return a()[d];
          } : function() {
            return (isViewport ? _win$1["inner" + d2] : scroller["client" + d2]) || 0;
          };
        }, _getOffsetsFunc = function _getOffsetsFunc2(element, isViewport) {
          return !isViewport || ~_proxies.indexOf(element) ? _getBoundsFunc(element) : function() {
            return _winOffsets;
          };
        }, _maxScroll = function _maxScroll2(element, _ref2) {
          var s = _ref2.s, d2 = _ref2.d2, d = _ref2.d, a = _ref2.a;
          return (s = "scroll" + d2) && (a = _getProxyProp(element, s)) ? a() - _getBoundsFunc(element)()[d] : _isViewport$1(element) ? (_docEl$1[s] || _body$1[s]) - (_win$1["inner" + d2] || _docEl$1["client" + d2] || _body$1["client" + d2]) : element[s] - element["offset" + d2];
        }, _iterateAutoRefresh = function _iterateAutoRefresh2(func, events) {
          for (var i = 0; i < _autoRefresh.length; i += 3) {
            (!events || ~events.indexOf(_autoRefresh[i + 1])) && func(_autoRefresh[i], _autoRefresh[i + 1], _autoRefresh[i + 2]);
          }
        }, _isString = function _isString2(value) {
          return typeof value === "string";
        }, _isFunction = function _isFunction2(value) {
          return typeof value === "function";
        }, _isNumber = function _isNumber2(value) {
          return typeof value === "number";
        }, _isObject = function _isObject2(value) {
          return typeof value === "object";
        }, _callIfFunc = function _callIfFunc2(value) {
          return _isFunction(value) && value();
        }, _combineFunc = function _combineFunc2(f1, f2) {
          return function() {
            var result1 = _callIfFunc(f1), result2 = _callIfFunc(f2);
            return function() {
              _callIfFunc(result1);
              _callIfFunc(result2);
            };
          };
        }, _endAnimation = function _endAnimation2(animation, reversed, pause) {
          return animation && animation.progress(reversed ? 0 : 1) && pause && animation.pause();
        }, _callback = function _callback2(self2, func) {
          if (self2.enabled) {
            var result = func(self2);
            result && result.totalTime && (self2.callbackAnimation = result);
          }
        }, _abs = Math.abs, _left = "left", _top = "top", _right = "right", _bottom = "bottom", _width = "width", _height = "height", _Right = "Right", _Left = "Left", _Top = "Top", _Bottom = "Bottom", _padding = "padding", _margin = "margin", _Width = "Width", _Height = "Height", _px = "px", _getComputedStyle = function _getComputedStyle2(element) {
          return _win$1.getComputedStyle(element);
        }, _makePositionable = function _makePositionable2(element) {
          var position = _getComputedStyle(element).position;
          element.style.position = position === "absolute" || position === "fixed" ? position : "relative";
        }, _setDefaults = function _setDefaults2(obj, defaults2) {
          for (var p in defaults2) {
            p in obj || (obj[p] = defaults2[p]);
          }
          return obj;
        }, _getBounds = function _getBounds2(element, withoutTransforms) {
          var tween = withoutTransforms && _getComputedStyle(element)[_transformProp] !== "matrix(1, 0, 0, 1, 0, 0)" && gsap$1.to(element, {
            x: 0,
            y: 0,
            xPercent: 0,
            yPercent: 0,
            rotation: 0,
            rotationX: 0,
            rotationY: 0,
            scale: 1,
            skewX: 0,
            skewY: 0
          }).progress(1), bounds = element.getBoundingClientRect();
          tween && tween.progress(0).kill();
          return bounds;
        }, _getSize = function _getSize2(element, _ref3) {
          var d2 = _ref3.d2;
          return element["offset" + d2] || element["client" + d2] || 0;
        }, _getLabelRatioArray = function _getLabelRatioArray2(timeline) {
          var a = [], labels = timeline.labels, duration = timeline.duration(), p;
          for (p in labels) {
            a.push(labels[p] / duration);
          }
          return a;
        }, _getClosestLabel = function _getClosestLabel2(animation) {
          return function(value) {
            return gsap$1.utils.snap(_getLabelRatioArray(animation), value);
          };
        }, _snapDirectional = function _snapDirectional2(snapIncrementOrArray) {
          var snap = gsap$1.utils.snap(snapIncrementOrArray), a = Array.isArray(snapIncrementOrArray) && snapIncrementOrArray.slice(0).sort(function(a2, b) {
            return a2 - b;
          });
          return a ? function(value, direction, threshold) {
            if (threshold === void 0) {
              threshold = 1e-3;
            }
            var i;
            if (!direction) {
              return snap(value);
            }
            if (direction > 0) {
              value -= threshold;
              for (i = 0; i < a.length; i++) {
                if (a[i] >= value) {
                  return a[i];
                }
              }
              return a[i - 1];
            } else {
              i = a.length;
              value += threshold;
              while (i--) {
                if (a[i] <= value) {
                  return a[i];
                }
              }
            }
            return a[0];
          } : function(value, direction, threshold) {
            if (threshold === void 0) {
              threshold = 1e-3;
            }
            var snapped = snap(value);
            return !direction || Math.abs(snapped - value) < threshold || snapped - value < 0 === direction < 0 ? snapped : snap(direction < 0 ? value - snapIncrementOrArray : value + snapIncrementOrArray);
          };
        }, _getLabelAtDirection = function _getLabelAtDirection2(timeline) {
          return function(value, st) {
            return _snapDirectional(_getLabelRatioArray(timeline))(value, st.direction);
          };
        }, _multiListener = function _multiListener2(func, element, types, callback) {
          return types.split(",").forEach(function(type) {
            return func(element, type, callback);
          });
        }, _addListener$1 = function _addListener2(element, type, func, nonPassive, capture) {
          return element.addEventListener(type, func, {
            passive: !nonPassive,
            capture: !!capture
          });
        }, _removeListener$1 = function _removeListener2(element, type, func, capture) {
          return element.removeEventListener(type, func, !!capture);
        }, _wheelListener = function _wheelListener2(func, el, scrollFunc) {
          return scrollFunc && scrollFunc.wheelHandler && func(el, "wheel", scrollFunc);
        }, _markerDefaults = {
          startColor: "green",
          endColor: "red",
          indent: 0,
          fontSize: "16px",
          fontWeight: "normal"
        }, _defaults = {
          toggleActions: "play",
          anticipatePin: 0
        }, _keywords = {
          top: 0,
          left: 0,
          center: 0.5,
          bottom: 1,
          right: 1
        }, _offsetToPx = function _offsetToPx2(value, size) {
          if (_isString(value)) {
            var eqIndex = value.indexOf("="), relative = ~eqIndex ? +(value.charAt(eqIndex - 1) + 1) * parseFloat(value.substr(eqIndex + 1)) : 0;
            if (~eqIndex) {
              value.indexOf("%") > eqIndex && (relative *= size / 100);
              value = value.substr(0, eqIndex - 1);
            }
            value = relative + (value in _keywords ? _keywords[value] * size : ~value.indexOf("%") ? parseFloat(value) * size / 100 : parseFloat(value) || 0);
          }
          return value;
        }, _createMarker = function _createMarker2(type, name, container, direction, _ref4, offset, matchWidthEl, containerAnimation) {
          var startColor = _ref4.startColor, endColor = _ref4.endColor, fontSize = _ref4.fontSize, indent = _ref4.indent, fontWeight = _ref4.fontWeight;
          var e = _doc$1.createElement("div"), useFixedPosition = _isViewport$1(container) || _getProxyProp(container, "pinType") === "fixed", isScroller = type.indexOf("scroller") !== -1, parent = useFixedPosition ? _body$1 : container, isStart = type.indexOf("start") !== -1, color = isStart ? startColor : endColor, css = "border-color:" + color + ";font-size:" + fontSize + ";color:" + color + ";font-weight:" + fontWeight + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
          css += "position:" + ((isScroller || containerAnimation) && useFixedPosition ? "fixed;" : "absolute;");
          (isScroller || containerAnimation || !useFixedPosition) && (css += (direction === _vertical ? _right : _bottom) + ":" + (offset + parseFloat(indent)) + "px;");
          matchWidthEl && (css += "box-sizing:border-box;text-align:left;width:" + matchWidthEl.offsetWidth + "px;");
          e._isStart = isStart;
          e.setAttribute("class", "gsap-marker-" + type + (name ? " marker-" + name : ""));
          e.style.cssText = css;
          e.innerText = name || name === 0 ? type + "-" + name : type;
          parent.children[0] ? parent.insertBefore(e, parent.children[0]) : parent.appendChild(e);
          e._offset = e["offset" + direction.op.d2];
          _positionMarker(e, 0, direction, isStart);
          return e;
        }, _positionMarker = function _positionMarker2(marker, start, direction, flipped) {
          var vars = {
            display: "block"
          }, side = direction[flipped ? "os2" : "p2"], oppositeSide = direction[flipped ? "p2" : "os2"];
          marker._isFlipped = flipped;
          vars[direction.a + "Percent"] = flipped ? -100 : 0;
          vars[direction.a] = flipped ? "1px" : 0;
          vars["border" + side + _Width] = 1;
          vars["border" + oppositeSide + _Width] = 0;
          vars[direction.p] = start + "px";
          gsap$1.set(marker, vars);
        }, _triggers = [], _ids = {}, _rafID, _sync = function _sync2() {
          return _getTime$1() - _lastScrollTime > 34 && _updateAll();
        }, _onScroll$1 = function _onScroll2() {
          if (!_normalizer$1 || !_normalizer$1.isPressed || _normalizer$1.startX > _body$1.clientWidth) {
            _scrollers.cache++;
            _rafID || (_rafID = requestAnimationFrame(_updateAll));
            _lastScrollTime || _dispatch("scrollStart");
            _lastScrollTime = _getTime$1();
          }
        }, _setBaseDimensions = function _setBaseDimensions2() {
          _baseScreenWidth = _win$1.innerWidth;
          _baseScreenHeight = _win$1.innerHeight;
        }, _onResize = function _onResize2() {
          _scrollers.cache++;
          !_refreshing && !_ignoreResize && !_doc$1.fullscreenElement && !_doc$1.webkitFullscreenElement && (!_ignoreMobileResize || _baseScreenWidth !== _win$1.innerWidth || Math.abs(_win$1.innerHeight - _baseScreenHeight) > _win$1.innerHeight * 0.25) && _resizeDelay.restart(true);
        }, _listeners = {}, _emptyArray = [], _media = [], _creatingMedia, _lastMediaTick, _onMediaChange = function _onMediaChange2(e) {
          var tick = gsap$1.ticker.frame, matches = [], i = 0, index;
          if (_lastMediaTick !== tick || _startup$1) {
            _revertAll();
            for (; i < _media.length; i += 4) {
              index = _win$1.matchMedia(_media[i]).matches;
              if (index !== _media[i + 3]) {
                _media[i + 3] = index;
                index ? matches.push(i) : _revertAll(1, _media[i]) || _isFunction(_media[i + 2]) && _media[i + 2]();
              }
            }
            _revertRecorded();
            for (i = 0; i < matches.length; i++) {
              index = matches[i];
              _creatingMedia = _media[index];
              _media[index + 2] = _media[index + 1](e);
            }
            _creatingMedia = 0;
            _coreInitted$1 && _refreshAll(0, 1);
            _lastMediaTick = tick;
            _dispatch("matchMedia");
          }
        }, _softRefresh = function _softRefresh2() {
          return _removeListener$1(ScrollTrigger$1, "scrollEnd", _softRefresh2) || _refreshAll(true);
        }, _dispatch = function _dispatch2(type) {
          return _listeners[type] && _listeners[type].map(function(f) {
            return f();
          }) || _emptyArray;
        }, _savedStyles = [], _revertRecorded = function _revertRecorded2(media) {
          for (var i = 0; i < _savedStyles.length; i += 5) {
            if (!media || _savedStyles[i + 4] === media) {
              _savedStyles[i].style.cssText = _savedStyles[i + 1];
              _savedStyles[i].getBBox && _savedStyles[i].setAttribute("transform", _savedStyles[i + 2] || "");
              _savedStyles[i + 3].uncache = 1;
            }
          }
        }, _revertAll = function _revertAll2(kill, media) {
          var trigger;
          for (_i = 0; _i < _triggers.length; _i++) {
            trigger = _triggers[_i];
            if (!media || trigger.media === media) {
              if (kill) {
                trigger.kill(1);
              } else {
                trigger.revert();
              }
            }
          }
          media && _revertRecorded(media);
          media || _dispatch("revert");
        }, _clearScrollMemory = function _clearScrollMemory2() {
          return _scrollers.cache++ && _scrollers.forEach(function(obj) {
            return typeof obj === "function" && (obj.rec = 0);
          });
        }, _refreshingAll, _refreshID = 0, _refreshAll = function _refreshAll2(force, skipRevert) {
          if (_lastScrollTime && !force) {
            _addListener$1(ScrollTrigger$1, "scrollEnd", _softRefresh);
            return;
          }
          _refreshingAll = true;
          var refreshInits = _dispatch("refreshInit");
          _sort && ScrollTrigger$1.sort();
          skipRevert || _revertAll();
          _triggers.slice(0).forEach(function(t) {
            return t.refresh();
          });
          _triggers.forEach(function(t) {
            return t.vars.end === "max" && t.setPositions(t.start, _maxScroll(t.scroller, t._dir));
          });
          refreshInits.forEach(function(result) {
            return result && result.render && result.render(-1);
          });
          _clearScrollMemory();
          _resizeDelay.pause();
          _refreshID++;
          _refreshingAll = false;
          _dispatch("refresh");
        }, _lastScroll = 0, _direction = 1, _primary, _updateAll = function _updateAll2() {
          if (!_refreshingAll) {
            ScrollTrigger$1.isUpdating = true;
            _primary && _primary.update(0);
            var l = _triggers.length, time = _getTime$1(), recordVelocity = time - _time1 >= 50, scroll2 = l && _triggers[0].scroll();
            _direction = _lastScroll > scroll2 ? -1 : 1;
            _lastScroll = scroll2;
            if (recordVelocity) {
              if (_lastScrollTime && !_pointerIsDown && time - _lastScrollTime > 200) {
                _lastScrollTime = 0;
                _dispatch("scrollEnd");
              }
              _time2 = _time1;
              _time1 = time;
            }
            if (_direction < 0) {
              _i = l;
              while (_i-- > 0) {
                _triggers[_i] && _triggers[_i].update(0, recordVelocity);
              }
              _direction = 1;
            } else {
              for (_i = 0; _i < l; _i++) {
                _triggers[_i] && _triggers[_i].update(0, recordVelocity);
              }
            }
            ScrollTrigger$1.isUpdating = false;
          }
          _rafID = 0;
        }, _propNamesToCopy = [_left, _top, _bottom, _right, _margin + _Bottom, _margin + _Right, _margin + _Top, _margin + _Left, "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"], _stateProps = _propNamesToCopy.concat([_width, _height, "boxSizing", "max" + _Width, "max" + _Height, "position", _margin, _padding, _padding + _Top, _padding + _Right, _padding + _Bottom, _padding + _Left]), _swapPinOut = function _swapPinOut2(pin, spacer, state) {
          _setState(state);
          var cache = pin._gsap;
          if (cache.spacerIsNative) {
            _setState(cache.spacerState);
          } else if (pin.parentNode === spacer) {
            var parent = spacer.parentNode;
            if (parent) {
              parent.insertBefore(pin, spacer);
              parent.removeChild(spacer);
            }
          }
        }, _swapPinIn = function _swapPinIn2(pin, spacer, cs, spacerState) {
          if (pin.parentNode !== spacer) {
            var i = _propNamesToCopy.length, spacerStyle = spacer.style, pinStyle = pin.style, p;
            while (i--) {
              p = _propNamesToCopy[i];
              spacerStyle[p] = cs[p];
            }
            spacerStyle.position = cs.position === "absolute" ? "absolute" : "relative";
            cs.display === "inline" && (spacerStyle.display = "inline-block");
            pinStyle[_bottom] = pinStyle[_right] = spacerStyle.flexBasis = "auto";
            spacerStyle.overflow = "visible";
            spacerStyle.boxSizing = "border-box";
            spacerStyle[_width] = _getSize(pin, _horizontal) + _px;
            spacerStyle[_height] = _getSize(pin, _vertical) + _px;
            spacerStyle[_padding] = pinStyle[_margin] = pinStyle[_top] = pinStyle[_left] = "0";
            _setState(spacerState);
            pinStyle[_width] = pinStyle["max" + _Width] = cs[_width];
            pinStyle[_height] = pinStyle["max" + _Height] = cs[_height];
            pinStyle[_padding] = cs[_padding];
            pin.parentNode.insertBefore(spacer, pin);
            spacer.appendChild(pin);
          }
        }, _capsExp = /([A-Z])/g, _setState = function _setState2(state) {
          if (state) {
            var style = state.t.style, l = state.length, i = 0, p, value;
            (state.t._gsap || gsap$1.core.getCache(state.t)).uncache = 1;
            for (; i < l; i += 2) {
              value = state[i + 1];
              p = state[i];
              if (value) {
                style[p] = value;
              } else if (style[p]) {
                style.removeProperty(p.replace(_capsExp, "-$1").toLowerCase());
              }
            }
          }
        }, _getState = function _getState2(element) {
          var l = _stateProps.length, style = element.style, state = [], i = 0;
          for (; i < l; i++) {
            state.push(_stateProps[i], style[_stateProps[i]]);
          }
          state.t = element;
          return state;
        }, _copyState = function _copyState2(state, override, omitOffsets) {
          var result = [], l = state.length, i = omitOffsets ? 8 : 0, p;
          for (; i < l; i += 2) {
            p = state[i];
            result.push(p, p in override ? override[p] : state[i + 1]);
          }
          result.t = state.t;
          return result;
        }, _winOffsets = {
          left: 0,
          top: 0
        }, _parsePosition = function _parsePosition2(value, trigger, scrollerSize, direction, scroll2, marker, markerScroller, self2, scrollerBounds, borderWidth, useFixedPosition, scrollerMax, containerAnimation) {
          _isFunction(value) && (value = value(self2));
          if (_isString(value) && value.substr(0, 3) === "max") {
            value = scrollerMax + (value.charAt(4) === "=" ? _offsetToPx("0" + value.substr(3), scrollerSize) : 0);
          }
          var time = containerAnimation ? containerAnimation.time() : 0, p1, p2, element;
          containerAnimation && containerAnimation.seek(0);
          if (!_isNumber(value)) {
            _isFunction(trigger) && (trigger = trigger(self2));
            var offsets = value.split(" "), bounds, localOffset, globalOffset, display;
            element = _getTarget(trigger) || _body$1;
            bounds = _getBounds(element) || {};
            if ((!bounds || !bounds.left && !bounds.top) && _getComputedStyle(element).display === "none") {
              display = element.style.display;
              element.style.display = "block";
              bounds = _getBounds(element);
              display ? element.style.display = display : element.style.removeProperty("display");
            }
            localOffset = _offsetToPx(offsets[0], bounds[direction.d]);
            globalOffset = _offsetToPx(offsets[1] || "0", scrollerSize);
            value = bounds[direction.p] - scrollerBounds[direction.p] - borderWidth + localOffset + scroll2 - globalOffset;
            markerScroller && _positionMarker(markerScroller, globalOffset, direction, scrollerSize - globalOffset < 20 || markerScroller._isStart && globalOffset > 20);
            scrollerSize -= scrollerSize - globalOffset;
          } else if (markerScroller) {
            _positionMarker(markerScroller, scrollerSize, direction, true);
          }
          if (marker) {
            var position = value + scrollerSize, isStart = marker._isStart;
            p1 = "scroll" + direction.d2;
            _positionMarker(marker, position, direction, isStart && position > 20 || !isStart && (useFixedPosition ? Math.max(_body$1[p1], _docEl$1[p1]) : marker.parentNode[p1]) <= position + 1);
            if (useFixedPosition) {
              scrollerBounds = _getBounds(markerScroller);
              useFixedPosition && (marker.style[direction.op.p] = scrollerBounds[direction.op.p] - direction.op.m - marker._offset + _px);
            }
          }
          if (containerAnimation && element) {
            p1 = _getBounds(element);
            containerAnimation.seek(scrollerMax);
            p2 = _getBounds(element);
            containerAnimation._caScrollDist = p1[direction.p] - p2[direction.p];
            value = value / containerAnimation._caScrollDist * scrollerMax;
          }
          containerAnimation && containerAnimation.seek(time);
          return containerAnimation ? value : Math.round(value);
        }, _prefixExp = /(webkit|moz|length|cssText|inset)/i, _reparent = function _reparent2(element, parent, top, left) {
          if (element.parentNode !== parent) {
            var style = element.style, p, cs;
            if (parent === _body$1) {
              element._stOrig = style.cssText;
              cs = _getComputedStyle(element);
              for (p in cs) {
                if (!+p && !_prefixExp.test(p) && cs[p] && typeof style[p] === "string" && p !== "0") {
                  style[p] = cs[p];
                }
              }
              style.top = top;
              style.left = left;
            } else {
              style.cssText = element._stOrig;
            }
            gsap$1.core.getCache(element).uncache = 1;
            parent.appendChild(element);
          }
        }, _getTweenCreator = function _getTweenCreator2(scroller, direction) {
          var getScroll = _getScrollFunc(scroller, direction), prop = "_scroll" + direction.p2, lastScroll1, lastScroll2, getTween = function getTween2(scrollTo, vars, initialValue, change1, change2) {
            var tween = getTween2.tween, onComplete = vars.onComplete, modifiers = {};
            initialValue = initialValue || getScroll();
            change2 = change1 && change2 || 0;
            change1 = change1 || scrollTo - initialValue;
            tween && tween.kill();
            lastScroll1 = Math.round(initialValue);
            vars[prop] = scrollTo;
            vars.modifiers = modifiers;
            modifiers[prop] = function(value) {
              value = _round(getScroll());
              if (value !== lastScroll1 && value !== lastScroll2 && Math.abs(value - lastScroll1) > 2 && Math.abs(value - lastScroll2) > 2) {
                tween.kill();
                getTween2.tween = 0;
              } else {
                value = initialValue + change1 * tween.ratio + change2 * tween.ratio * tween.ratio;
              }
              lastScroll2 = lastScroll1;
              return lastScroll1 = _round(value);
            };
            vars.onComplete = function() {
              getTween2.tween = 0;
              onComplete && onComplete.call(tween);
            };
            tween = getTween2.tween = gsap$1.to(scroller, vars);
            return tween;
          };
          scroller[prop] = getScroll;
          getScroll.wheelHandler = function() {
            return getTween.tween && getTween.tween.kill() && (getTween.tween = 0);
          };
          _addListener$1(scroller, "wheel", getScroll.wheelHandler);
          return getTween;
        };
        var ScrollTrigger$1 = function() {
          function ScrollTrigger3(vars, animation) {
            _coreInitted$1 || ScrollTrigger3.register(gsap$1) || console.warn("Please gsap.registerPlugin(ScrollTrigger)");
            this.init(vars, animation);
          }
          var _proto = ScrollTrigger3.prototype;
          _proto.init = function init(vars, animation) {
            this.progress = this.start = 0;
            this.vars && this.kill(true, true);
            if (!_enabled) {
              this.update = this.refresh = this.kill = _passThrough;
              return;
            }
            vars = _setDefaults(_isString(vars) || _isNumber(vars) || vars.nodeType ? {
              trigger: vars
            } : vars, _defaults);
            var _vars = vars, onUpdate = _vars.onUpdate, toggleClass = _vars.toggleClass, id = _vars.id, onToggle = _vars.onToggle, onRefresh = _vars.onRefresh, scrub = _vars.scrub, trigger = _vars.trigger, pin = _vars.pin, pinSpacing = _vars.pinSpacing, invalidateOnRefresh = _vars.invalidateOnRefresh, anticipatePin = _vars.anticipatePin, onScrubComplete = _vars.onScrubComplete, onSnapComplete = _vars.onSnapComplete, once = _vars.once, snap = _vars.snap, pinReparent = _vars.pinReparent, pinSpacer = _vars.pinSpacer, containerAnimation = _vars.containerAnimation, fastScrollEnd = _vars.fastScrollEnd, preventOverlaps = _vars.preventOverlaps, direction = vars.horizontal || vars.containerAnimation && vars.horizontal !== false ? _horizontal : _vertical, isToggle = !scrub && scrub !== 0, scroller = _getTarget(vars.scroller || _win$1), scrollerCache = gsap$1.core.getCache(scroller), isViewport = _isViewport$1(scroller), useFixedPosition = ("pinType" in vars ? vars.pinType : _getProxyProp(scroller, "pinType") || isViewport && "fixed") === "fixed", callbacks = [vars.onEnter, vars.onLeave, vars.onEnterBack, vars.onLeaveBack], toggleActions = isToggle && vars.toggleActions.split(" "), markers = "markers" in vars ? vars.markers : _defaults.markers, borderWidth = isViewport ? 0 : parseFloat(_getComputedStyle(scroller)["border" + direction.p2 + _Width]) || 0, self2 = this, onRefreshInit = vars.onRefreshInit && function() {
              return vars.onRefreshInit(self2);
            }, getScrollerSize = _getSizeFunc(scroller, isViewport, direction), getScrollerOffsets = _getOffsetsFunc(scroller, isViewport), lastSnap = 0, lastRefresh = 0, scrollFunc = _getScrollFunc(scroller, direction), tweenTo, pinCache, snapFunc, scroll1, scroll2, start, end, markerStart, markerEnd, markerStartTrigger, markerEndTrigger, markerVars, change, pinOriginalState, pinActiveState, pinState, spacer, offset, pinGetter, pinSetter, pinStart, pinChange, spacingStart, spacerState, markerStartSetter, markerEndSetter, cs, snap1, snap2, scrubTween, scrubSmooth, snapDurClamp, snapDelayedCall, prevProgress, prevScroll, prevAnimProgress, caMarkerSetter, customRevertReturn;
            self2.media = _creatingMedia;
            self2._dir = direction;
            anticipatePin *= 45;
            self2.scroller = scroller;
            self2.scroll = containerAnimation ? containerAnimation.time.bind(containerAnimation) : scrollFunc;
            scroll1 = scrollFunc();
            self2.vars = vars;
            animation = animation || vars.animation;
            if ("refreshPriority" in vars) {
              _sort = 1;
              vars.refreshPriority === -9999 && (_primary = self2);
            }
            scrollerCache.tweenScroll = scrollerCache.tweenScroll || {
              top: _getTweenCreator(scroller, _vertical),
              left: _getTweenCreator(scroller, _horizontal)
            };
            self2.tweenTo = tweenTo = scrollerCache.tweenScroll[direction.p];
            self2.scrubDuration = function(value) {
              scrubSmooth = _isNumber(value) && value;
              if (!scrubSmooth) {
                scrubTween && scrubTween.progress(1).kill();
                scrubTween = 0;
              } else {
                scrubTween ? scrubTween.duration(value) : scrubTween = gsap$1.to(animation, {
                  ease: "expo",
                  totalProgress: "+=0.001",
                  duration: scrubSmooth,
                  paused: true,
                  onComplete: function onComplete() {
                    return onScrubComplete && onScrubComplete(self2);
                  }
                });
              }
            };
            if (animation) {
              animation.vars.lazy = false;
              animation._initted || animation.vars.immediateRender !== false && vars.immediateRender !== false && animation.render(0, true, true);
              self2.animation = animation.pause();
              animation.scrollTrigger = self2;
              self2.scrubDuration(scrub);
              snap1 = 0;
              id || (id = animation.vars.id);
            }
            _triggers.push(self2);
            if (snap) {
              if (!_isObject(snap) || snap.push) {
                snap = {
                  snapTo: snap
                };
              }
              "scrollBehavior" in _body$1.style && gsap$1.set(isViewport ? [_body$1, _docEl$1] : scroller, {
                scrollBehavior: "auto"
              });
              snapFunc = _isFunction(snap.snapTo) ? snap.snapTo : snap.snapTo === "labels" ? _getClosestLabel(animation) : snap.snapTo === "labelsDirectional" ? _getLabelAtDirection(animation) : snap.directional !== false ? function(value, st) {
                return _snapDirectional(snap.snapTo)(value, _getTime$1() - lastRefresh < 500 ? 0 : st.direction);
              } : gsap$1.utils.snap(snap.snapTo);
              snapDurClamp = snap.duration || {
                min: 0.1,
                max: 2
              };
              snapDurClamp = _isObject(snapDurClamp) ? _clamp$1(snapDurClamp.min, snapDurClamp.max) : _clamp$1(snapDurClamp, snapDurClamp);
              snapDelayedCall = gsap$1.delayedCall(snap.delay || scrubSmooth / 2 || 0.1, function() {
                var scroll3 = scrollFunc(), refreshedRecently = _getTime$1() - lastRefresh < 500, tween = tweenTo.tween;
                if ((refreshedRecently || Math.abs(self2.getVelocity()) < 10) && !tween && !_pointerIsDown && lastSnap !== scroll3) {
                  var progress = (scroll3 - start) / change, totalProgress = animation && !isToggle ? animation.totalProgress() : progress, velocity = refreshedRecently ? 0 : (totalProgress - snap2) / (_getTime$1() - _time2) * 1e3 || 0, change1 = gsap$1.utils.clamp(-progress, 1 - progress, _abs(velocity / 2) * velocity / 0.185), naturalEnd = progress + (snap.inertia === false ? 0 : change1), endValue = _clamp$1(0, 1, snapFunc(naturalEnd, self2)), endScroll = Math.round(start + endValue * change), _snap = snap, onStart = _snap.onStart, _onInterrupt = _snap.onInterrupt, _onComplete = _snap.onComplete;
                  if (scroll3 <= end && scroll3 >= start && endScroll !== scroll3) {
                    if (tween && !tween._initted && tween.data <= _abs(endScroll - scroll3)) {
                      return;
                    }
                    if (snap.inertia === false) {
                      change1 = endValue - progress;
                    }
                    tweenTo(endScroll, {
                      duration: snapDurClamp(_abs(Math.max(_abs(naturalEnd - totalProgress), _abs(endValue - totalProgress)) * 0.185 / velocity / 0.05 || 0)),
                      ease: snap.ease || "power3",
                      data: _abs(endScroll - scroll3),
                      onInterrupt: function onInterrupt() {
                        return snapDelayedCall.restart(true) && _onInterrupt && _onInterrupt(self2);
                      },
                      onComplete: function onComplete() {
                        self2.update();
                        lastSnap = scrollFunc();
                        snap1 = snap2 = animation && !isToggle ? animation.totalProgress() : self2.progress;
                        onSnapComplete && onSnapComplete(self2);
                        _onComplete && _onComplete(self2);
                      }
                    }, scroll3, change1 * change, endScroll - scroll3 - change1 * change);
                    onStart && onStart(self2, tweenTo.tween);
                  }
                } else if (self2.isActive && lastSnap !== scroll3) {
                  snapDelayedCall.restart(true);
                }
              }).pause();
            }
            id && (_ids[id] = self2);
            trigger = self2.trigger = _getTarget(trigger || pin);
            customRevertReturn = trigger && trigger._gsap && trigger._gsap.stRevert;
            customRevertReturn && (customRevertReturn = customRevertReturn(self2));
            pin = pin === true ? trigger : _getTarget(pin);
            _isString(toggleClass) && (toggleClass = {
              targets: trigger,
              className: toggleClass
            });
            if (pin) {
              pinSpacing === false || pinSpacing === _margin || (pinSpacing = !pinSpacing && _getComputedStyle(pin.parentNode).display === "flex" ? false : _padding);
              self2.pin = pin;
              vars.force3D !== false && gsap$1.set(pin, {
                force3D: true
              });
              pinCache = gsap$1.core.getCache(pin);
              if (!pinCache.spacer) {
                if (pinSpacer) {
                  pinSpacer = _getTarget(pinSpacer);
                  pinSpacer && !pinSpacer.nodeType && (pinSpacer = pinSpacer.current || pinSpacer.nativeElement);
                  pinCache.spacerIsNative = !!pinSpacer;
                  pinSpacer && (pinCache.spacerState = _getState(pinSpacer));
                }
                pinCache.spacer = spacer = pinSpacer || _doc$1.createElement("div");
                spacer.classList.add("pin-spacer");
                id && spacer.classList.add("pin-spacer-" + id);
                pinCache.pinState = pinOriginalState = _getState(pin);
              } else {
                pinOriginalState = pinCache.pinState;
              }
              self2.spacer = spacer = pinCache.spacer;
              cs = _getComputedStyle(pin);
              spacingStart = cs[pinSpacing + direction.os2];
              pinGetter = gsap$1.getProperty(pin);
              pinSetter = gsap$1.quickSetter(pin, direction.a, _px);
              _swapPinIn(pin, spacer, cs);
              pinState = _getState(pin);
            }
            if (markers) {
              markerVars = _isObject(markers) ? _setDefaults(markers, _markerDefaults) : _markerDefaults;
              markerStartTrigger = _createMarker("scroller-start", id, scroller, direction, markerVars, 0);
              markerEndTrigger = _createMarker("scroller-end", id, scroller, direction, markerVars, 0, markerStartTrigger);
              offset = markerStartTrigger["offset" + direction.op.d2];
              var content = _getTarget(_getProxyProp(scroller, "content") || scroller);
              markerStart = this.markerStart = _createMarker("start", id, content, direction, markerVars, offset, 0, containerAnimation);
              markerEnd = this.markerEnd = _createMarker("end", id, content, direction, markerVars, offset, 0, containerAnimation);
              containerAnimation && (caMarkerSetter = gsap$1.quickSetter([markerStart, markerEnd], direction.a, _px));
              if (!useFixedPosition && !(_proxies.length && _getProxyProp(scroller, "fixedMarkers") === true)) {
                _makePositionable(isViewport ? _body$1 : scroller);
                gsap$1.set([markerStartTrigger, markerEndTrigger], {
                  force3D: true
                });
                markerStartSetter = gsap$1.quickSetter(markerStartTrigger, direction.a, _px);
                markerEndSetter = gsap$1.quickSetter(markerEndTrigger, direction.a, _px);
              }
            }
            if (containerAnimation) {
              var oldOnUpdate = containerAnimation.vars.onUpdate, oldParams = containerAnimation.vars.onUpdateParams;
              containerAnimation.eventCallback("onUpdate", function() {
                self2.update(0, 0, 1);
                oldOnUpdate && oldOnUpdate.apply(oldParams || []);
              });
            }
            self2.previous = function() {
              return _triggers[_triggers.indexOf(self2) - 1];
            };
            self2.next = function() {
              return _triggers[_triggers.indexOf(self2) + 1];
            };
            self2.revert = function(revert) {
              var r = revert !== false || !self2.enabled, prevRefreshing = _refreshing;
              if (r !== self2.isReverted) {
                if (r) {
                  self2.scroll.rec || !_refreshing || !_refreshingAll || (self2.scroll.rec = scrollFunc());
                  prevScroll = Math.max(scrollFunc(), self2.scroll.rec || 0);
                  prevProgress = self2.progress;
                  prevAnimProgress = animation && animation.progress();
                }
                markerStart && [markerStart, markerEnd, markerStartTrigger, markerEndTrigger].forEach(function(m) {
                  return m.style.display = r ? "none" : "block";
                });
                r && (_refreshing = 1);
                self2.update(r);
                _refreshing = prevRefreshing;
                pin && (r ? _swapPinOut(pin, spacer, pinOriginalState) : (!pinReparent || !self2.isActive) && _swapPinIn(pin, spacer, _getComputedStyle(pin), spacerState));
                self2.isReverted = r;
              }
            };
            self2.refresh = function(soft, force) {
              if ((_refreshing || !self2.enabled) && !force) {
                return;
              }
              if (pin && soft && _lastScrollTime) {
                _addListener$1(ScrollTrigger3, "scrollEnd", _softRefresh);
                return;
              }
              !_refreshingAll && onRefreshInit && onRefreshInit(self2);
              _refreshing = 1;
              lastRefresh = _getTime$1();
              if (tweenTo.tween) {
                tweenTo.tween.kill();
                tweenTo.tween = 0;
              }
              scrubTween && scrubTween.pause();
              invalidateOnRefresh && animation && animation.time(-0.01, true).invalidate();
              self2.isReverted || self2.revert();
              var size = getScrollerSize(), scrollerBounds = getScrollerOffsets(), max = containerAnimation ? containerAnimation.duration() : _maxScroll(scroller, direction), offset2 = 0, otherPinOffset = 0, parsedEnd = vars.end, parsedEndTrigger = vars.endTrigger || trigger, parsedStart = vars.start || (vars.start === 0 || !trigger ? 0 : pin ? "0 0" : "0 100%"), pinnedContainer = self2.pinnedContainer = vars.pinnedContainer && _getTarget(vars.pinnedContainer), triggerIndex = trigger && Math.max(0, _triggers.indexOf(self2)) || 0, i = triggerIndex, cs2, bounds, scroll3, isVertical, override, curTrigger, curPin, oppositeScroll, initted, revertedPins;
              while (i--) {
                curTrigger = _triggers[i];
                curTrigger.end || curTrigger.refresh(0, 1) || (_refreshing = 1);
                curPin = curTrigger.pin;
                if (curPin && (curPin === trigger || curPin === pin) && !curTrigger.isReverted) {
                  revertedPins || (revertedPins = []);
                  revertedPins.unshift(curTrigger);
                  curTrigger.revert();
                }
                if (curTrigger !== _triggers[i]) {
                  triggerIndex--;
                  i--;
                }
              }
              _isFunction(parsedStart) && (parsedStart = parsedStart(self2));
              start = _parsePosition(parsedStart, trigger, size, direction, scrollFunc(), markerStart, markerStartTrigger, self2, scrollerBounds, borderWidth, useFixedPosition, max, containerAnimation) || (pin ? -1e-3 : 0);
              _isFunction(parsedEnd) && (parsedEnd = parsedEnd(self2));
              if (_isString(parsedEnd) && !parsedEnd.indexOf("+=")) {
                if (~parsedEnd.indexOf(" ")) {
                  parsedEnd = (_isString(parsedStart) ? parsedStart.split(" ")[0] : "") + parsedEnd;
                } else {
                  offset2 = _offsetToPx(parsedEnd.substr(2), size);
                  parsedEnd = _isString(parsedStart) ? parsedStart : start + offset2;
                  parsedEndTrigger = trigger;
                }
              }
              end = Math.max(start, _parsePosition(parsedEnd || (parsedEndTrigger ? "100% 0" : max), parsedEndTrigger, size, direction, scrollFunc() + offset2, markerEnd, markerEndTrigger, self2, scrollerBounds, borderWidth, useFixedPosition, max, containerAnimation)) || -1e-3;
              change = end - start || (start -= 0.01) && 1e-3;
              offset2 = 0;
              i = triggerIndex;
              while (i--) {
                curTrigger = _triggers[i];
                curPin = curTrigger.pin;
                if (curPin && curTrigger.start - curTrigger._pinPush < start && !containerAnimation && curTrigger.end > 0) {
                  cs2 = curTrigger.end - curTrigger.start;
                  if ((curPin === trigger || curPin === pinnedContainer) && !_isNumber(parsedStart)) {
                    offset2 += cs2 * (1 - curTrigger.progress);
                  }
                  curPin === pin && (otherPinOffset += cs2);
                }
              }
              start += offset2;
              end += offset2;
              self2._pinPush = otherPinOffset;
              if (markerStart && offset2) {
                cs2 = {};
                cs2[direction.a] = "+=" + offset2;
                pinnedContainer && (cs2[direction.p] = "-=" + scrollFunc());
                gsap$1.set([markerStart, markerEnd], cs2);
              }
              if (pin) {
                cs2 = _getComputedStyle(pin);
                isVertical = direction === _vertical;
                scroll3 = scrollFunc();
                pinStart = parseFloat(pinGetter(direction.a)) + otherPinOffset;
                !max && end > 1 && ((isViewport ? _body$1 : scroller).style["overflow-" + direction.a] = "scroll");
                _swapPinIn(pin, spacer, cs2);
                pinState = _getState(pin);
                bounds = _getBounds(pin, true);
                oppositeScroll = useFixedPosition && _getScrollFunc(scroller, isVertical ? _horizontal : _vertical)();
                if (pinSpacing) {
                  spacerState = [pinSpacing + direction.os2, change + otherPinOffset + _px];
                  spacerState.t = spacer;
                  i = pinSpacing === _padding ? _getSize(pin, direction) + change + otherPinOffset : 0;
                  i && spacerState.push(direction.d, i + _px);
                  _setState(spacerState);
                  useFixedPosition && scrollFunc(prevScroll);
                }
                if (useFixedPosition) {
                  override = {
                    top: bounds.top + (isVertical ? scroll3 - start : oppositeScroll) + _px,
                    left: bounds.left + (isVertical ? oppositeScroll : scroll3 - start) + _px,
                    boxSizing: "border-box",
                    position: "fixed"
                  };
                  override[_width] = override["max" + _Width] = Math.ceil(bounds.width) + _px;
                  override[_height] = override["max" + _Height] = Math.ceil(bounds.height) + _px;
                  override[_margin] = override[_margin + _Top] = override[_margin + _Right] = override[_margin + _Bottom] = override[_margin + _Left] = "0";
                  override[_padding] = cs2[_padding];
                  override[_padding + _Top] = cs2[_padding + _Top];
                  override[_padding + _Right] = cs2[_padding + _Right];
                  override[_padding + _Bottom] = cs2[_padding + _Bottom];
                  override[_padding + _Left] = cs2[_padding + _Left];
                  pinActiveState = _copyState(pinOriginalState, override, pinReparent);
                }
                if (animation) {
                  initted = animation._initted;
                  _suppressOverwrites(1);
                  animation.render(animation.duration(), true, true);
                  pinChange = pinGetter(direction.a) - pinStart + change + otherPinOffset;
                  change !== pinChange && useFixedPosition && pinActiveState.splice(pinActiveState.length - 2, 2);
                  animation.render(0, true, true);
                  initted || animation.invalidate();
                  _suppressOverwrites(0);
                } else {
                  pinChange = change;
                }
              } else if (trigger && scrollFunc() && !containerAnimation) {
                bounds = trigger.parentNode;
                while (bounds && bounds !== _body$1) {
                  if (bounds._pinOffset) {
                    start -= bounds._pinOffset;
                    end -= bounds._pinOffset;
                  }
                  bounds = bounds.parentNode;
                }
              }
              revertedPins && revertedPins.forEach(function(t) {
                return t.revert(false);
              });
              self2.start = start;
              self2.end = end;
              scroll1 = scroll2 = scrollFunc();
              if (!containerAnimation) {
                scroll1 < prevScroll && scrollFunc(prevScroll);
                self2.scroll.rec = 0;
              }
              self2.revert(false);
              if (snapDelayedCall) {
                lastSnap = -1;
                self2.isActive && scrollFunc(start + change * prevProgress);
                snapDelayedCall.restart(true);
              }
              _refreshing = 0;
              animation && isToggle && (animation._initted || prevAnimProgress) && animation.progress() !== prevAnimProgress && animation.progress(prevAnimProgress, true).render(animation.time(), true, true);
              if (prevProgress !== self2.progress || containerAnimation) {
                animation && !isToggle && animation.totalProgress(prevProgress, true);
                self2.progress = prevProgress;
                self2.update(0, 0, 1);
              }
              pin && pinSpacing && (spacer._pinOffset = Math.round(self2.progress * pinChange));
              onRefresh && onRefresh(self2);
            };
            self2.getVelocity = function() {
              return (scrollFunc() - scroll2) / (_getTime$1() - _time2) * 1e3 || 0;
            };
            self2.endAnimation = function() {
              _endAnimation(self2.callbackAnimation);
              if (animation) {
                scrubTween ? scrubTween.progress(1) : !animation.paused() ? _endAnimation(animation, animation.reversed()) : isToggle || _endAnimation(animation, self2.direction < 0, 1);
              }
            };
            self2.labelToScroll = function(label) {
              return animation && animation.labels && (start || self2.refresh() || start) + animation.labels[label] / animation.duration() * change || 0;
            };
            self2.getTrailing = function(name) {
              var i = _triggers.indexOf(self2), a = self2.direction > 0 ? _triggers.slice(0, i).reverse() : _triggers.slice(i + 1);
              return (_isString(name) ? a.filter(function(t) {
                return t.vars.preventOverlaps === name;
              }) : a).filter(function(t) {
                return self2.direction > 0 ? t.end <= start : t.start >= end;
              });
            };
            self2.update = function(reset, recordVelocity, forceFake) {
              if (containerAnimation && !forceFake && !reset) {
                return;
              }
              var scroll3 = self2.scroll(), p = reset ? 0 : (scroll3 - start) / change, clipped = p < 0 ? 0 : p > 1 ? 1 : p || 0, prevProgress2 = self2.progress, isActive, wasActive, toggleState, action, stateChanged, toggled, isAtMax, isTakingAction;
              if (recordVelocity) {
                scroll2 = scroll1;
                scroll1 = containerAnimation ? scrollFunc() : scroll3;
                if (snap) {
                  snap2 = snap1;
                  snap1 = animation && !isToggle ? animation.totalProgress() : clipped;
                }
              }
              anticipatePin && !clipped && pin && !_refreshing && !_startup$1 && _lastScrollTime && start < scroll3 + (scroll3 - scroll2) / (_getTime$1() - _time2) * anticipatePin && (clipped = 1e-4);
              if (clipped !== prevProgress2 && self2.enabled) {
                isActive = self2.isActive = !!clipped && clipped < 1;
                wasActive = !!prevProgress2 && prevProgress2 < 1;
                toggled = isActive !== wasActive;
                stateChanged = toggled || !!clipped !== !!prevProgress2;
                self2.direction = clipped > prevProgress2 ? 1 : -1;
                self2.progress = clipped;
                if (stateChanged && !_refreshing) {
                  toggleState = clipped && !prevProgress2 ? 0 : clipped === 1 ? 1 : prevProgress2 === 1 ? 2 : 3;
                  if (isToggle) {
                    action = !toggled && toggleActions[toggleState + 1] !== "none" && toggleActions[toggleState + 1] || toggleActions[toggleState];
                    isTakingAction = animation && (action === "complete" || action === "reset" || action in animation);
                  }
                }
                preventOverlaps && (toggled || isTakingAction) && (isTakingAction || scrub || !animation) && (_isFunction(preventOverlaps) ? preventOverlaps(self2) : self2.getTrailing(preventOverlaps).forEach(function(t) {
                  return t.endAnimation();
                }));
                if (!isToggle) {
                  if (scrubTween && !_refreshing && !_startup$1) {
                    (containerAnimation || _primary && _primary !== self2) && scrubTween.render(scrubTween._dp._time - scrubTween._start);
                    if (scrubTween.resetTo) {
                      scrubTween.resetTo("totalProgress", clipped, animation._tTime / animation._tDur);
                    } else {
                      scrubTween.vars.totalProgress = clipped;
                      scrubTween.invalidate().restart();
                    }
                  } else if (animation) {
                    animation.totalProgress(clipped, !!_refreshing);
                  }
                }
                if (pin) {
                  reset && pinSpacing && (spacer.style[pinSpacing + direction.os2] = spacingStart);
                  if (!useFixedPosition) {
                    pinSetter(_round(pinStart + pinChange * clipped));
                  } else if (stateChanged) {
                    isAtMax = !reset && clipped > prevProgress2 && end + 1 > scroll3 && scroll3 + 1 >= _maxScroll(scroller, direction);
                    if (pinReparent) {
                      if (!reset && (isActive || isAtMax)) {
                        var bounds = _getBounds(pin, true), _offset = scroll3 - start;
                        _reparent(pin, _body$1, bounds.top + (direction === _vertical ? _offset : 0) + _px, bounds.left + (direction === _vertical ? 0 : _offset) + _px);
                      } else {
                        _reparent(pin, spacer);
                      }
                    }
                    _setState(isActive || isAtMax ? pinActiveState : pinState);
                    pinChange !== change && clipped < 1 && isActive || pinSetter(pinStart + (clipped === 1 && !isAtMax ? pinChange : 0));
                  }
                }
                snap && !tweenTo.tween && !_refreshing && !_startup$1 && snapDelayedCall.restart(true);
                toggleClass && (toggled || once && clipped && (clipped < 1 || !_limitCallbacks)) && _toArray(toggleClass.targets).forEach(function(el) {
                  return el.classList[isActive || once ? "add" : "remove"](toggleClass.className);
                });
                onUpdate && !isToggle && !reset && onUpdate(self2);
                if (stateChanged && !_refreshing) {
                  if (isToggle) {
                    if (isTakingAction) {
                      if (action === "complete") {
                        animation.pause().totalProgress(1);
                      } else if (action === "reset") {
                        animation.restart(true).pause();
                      } else if (action === "restart") {
                        animation.restart(true);
                      } else {
                        animation[action]();
                      }
                    }
                    onUpdate && onUpdate(self2);
                  }
                  if (toggled || !_limitCallbacks) {
                    onToggle && toggled && _callback(self2, onToggle);
                    callbacks[toggleState] && _callback(self2, callbacks[toggleState]);
                    once && (clipped === 1 ? self2.kill(false, 1) : callbacks[toggleState] = 0);
                    if (!toggled) {
                      toggleState = clipped === 1 ? 1 : 3;
                      callbacks[toggleState] && _callback(self2, callbacks[toggleState]);
                    }
                  }
                  if (fastScrollEnd && !isActive && Math.abs(self2.getVelocity()) > (_isNumber(fastScrollEnd) ? fastScrollEnd : 2500)) {
                    _endAnimation(self2.callbackAnimation);
                    scrubTween ? scrubTween.progress(1) : _endAnimation(animation, !clipped, 1);
                  }
                } else if (isToggle && onUpdate && !_refreshing) {
                  onUpdate(self2);
                }
              }
              if (markerEndSetter) {
                var n = containerAnimation ? scroll3 / containerAnimation.duration() * (containerAnimation._caScrollDist || 0) : scroll3;
                markerStartSetter(n + (markerStartTrigger._isFlipped ? 1 : 0));
                markerEndSetter(n);
              }
              caMarkerSetter && caMarkerSetter(-scroll3 / containerAnimation.duration() * (containerAnimation._caScrollDist || 0));
            };
            self2.enable = function(reset, refresh) {
              if (!self2.enabled) {
                self2.enabled = true;
                _addListener$1(scroller, "resize", _onResize);
                _addListener$1(isViewport ? _doc$1 : scroller, "scroll", _onScroll$1);
                onRefreshInit && _addListener$1(ScrollTrigger3, "refreshInit", onRefreshInit);
                if (reset !== false) {
                  self2.progress = prevProgress = 0;
                  scroll1 = scroll2 = lastSnap = scrollFunc();
                }
                refresh !== false && self2.refresh();
              }
            };
            self2.getTween = function(snap3) {
              return snap3 && tweenTo ? tweenTo.tween : scrubTween;
            };
            self2.setPositions = function(newStart, newEnd) {
              if (pin) {
                pinStart += newStart - start;
                pinChange += newEnd - newStart - change;
              }
              self2.start = start = newStart;
              self2.end = end = newEnd;
              change = newEnd - newStart;
              self2.update();
            };
            self2.disable = function(reset, allowAnimation) {
              if (self2.enabled) {
                reset !== false && self2.revert();
                self2.enabled = self2.isActive = false;
                allowAnimation || scrubTween && scrubTween.pause();
                prevScroll = 0;
                pinCache && (pinCache.uncache = 1);
                onRefreshInit && _removeListener$1(ScrollTrigger3, "refreshInit", onRefreshInit);
                if (snapDelayedCall) {
                  snapDelayedCall.pause();
                  tweenTo.tween && tweenTo.tween.kill() && (tweenTo.tween = 0);
                }
                if (!isViewport) {
                  var i = _triggers.length;
                  while (i--) {
                    if (_triggers[i].scroller === scroller && _triggers[i] !== self2) {
                      return;
                    }
                  }
                  _removeListener$1(scroller, "resize", _onResize);
                  _removeListener$1(scroller, "scroll", _onScroll$1);
                }
              }
            };
            self2.kill = function(revert, allowAnimation) {
              self2.disable(revert, allowAnimation);
              scrubTween && !allowAnimation && scrubTween.kill();
              id && delete _ids[id];
              var i = _triggers.indexOf(self2);
              i >= 0 && _triggers.splice(i, 1);
              i === _i && _direction > 0 && _i--;
              i = 0;
              _triggers.forEach(function(t) {
                return t.scroller === self2.scroller && (i = 1);
              });
              i || (self2.scroll.rec = 0);
              if (animation) {
                animation.scrollTrigger = null;
                revert && animation.render(-1);
                allowAnimation || animation.kill();
              }
              markerStart && [markerStart, markerEnd, markerStartTrigger, markerEndTrigger].forEach(function(m) {
                return m.parentNode && m.parentNode.removeChild(m);
              });
              _primary === self2 && (_primary = 0);
              if (pin) {
                pinCache && (pinCache.uncache = 1);
                i = 0;
                _triggers.forEach(function(t) {
                  return t.pin === pin && i++;
                });
                i || (pinCache.spacer = 0);
              }
              vars.onKill && vars.onKill(self2);
            };
            self2.enable(false, false);
            customRevertReturn && customRevertReturn(self2);
            !animation || !animation.add || change ? self2.refresh() : gsap$1.delayedCall(0.01, function() {
              return start || end || self2.refresh();
            }) && (change = 0.01) && (start = end = 0);
          };
          ScrollTrigger3.register = function register(core) {
            if (!_coreInitted$1) {
              gsap$1 = core || _getGSAP$1();
              _windowExists() && window.document && ScrollTrigger3.enable();
              _coreInitted$1 = _enabled;
            }
            return _coreInitted$1;
          };
          ScrollTrigger3.defaults = function defaults2(config) {
            if (config) {
              for (var p in config) {
                _defaults[p] = config[p];
              }
            }
            return _defaults;
          };
          ScrollTrigger3.disable = function disable(reset, kill) {
            _enabled = 0;
            _triggers.forEach(function(trigger) {
              return trigger[kill ? "kill" : "disable"](reset);
            });
            _removeListener$1(_win$1, "wheel", _onScroll$1);
            _removeListener$1(_doc$1, "scroll", _onScroll$1);
            clearInterval(_syncInterval);
            _removeListener$1(_doc$1, "touchcancel", _passThrough);
            _removeListener$1(_body$1, "touchstart", _passThrough);
            _multiListener(_removeListener$1, _doc$1, "pointerdown,touchstart,mousedown", _pointerDownHandler);
            _multiListener(_removeListener$1, _doc$1, "pointerup,touchend,mouseup", _pointerUpHandler);
            _resizeDelay.kill();
            _iterateAutoRefresh(_removeListener$1);
            for (var i = 0; i < _scrollers.length; i += 3) {
              _wheelListener(_removeListener$1, _scrollers[i], _scrollers[i + 1]);
              _wheelListener(_removeListener$1, _scrollers[i], _scrollers[i + 2]);
            }
          };
          ScrollTrigger3.enable = function enable() {
            _win$1 = window;
            _doc$1 = document;
            _docEl$1 = _doc$1.documentElement;
            _body$1 = _doc$1.body;
            if (gsap$1) {
              _toArray = gsap$1.utils.toArray;
              _clamp$1 = gsap$1.utils.clamp;
              _suppressOverwrites = gsap$1.core.suppressOverwrites || _passThrough;
              gsap$1.core.globals("ScrollTrigger", ScrollTrigger3);
              if (_body$1) {
                _enabled = 1;
                Observer.register(gsap$1);
                ScrollTrigger3.isTouch = Observer.isTouch;
                _fixIOSBug = Observer.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent);
                _addListener$1(_win$1, "wheel", _onScroll$1);
                _root$1 = [_win$1, _doc$1, _docEl$1, _body$1];
                ScrollTrigger3.matchMedia({
                  "(orientation: portrait)": function orientationPortrait() {
                    _setBaseDimensions();
                    return _setBaseDimensions;
                  }
                });
                _addListener$1(_doc$1, "scroll", _onScroll$1);
                var bodyStyle = _body$1.style, border = bodyStyle.borderTopStyle, bounds, i;
                bodyStyle.borderTopStyle = "solid";
                bounds = _getBounds(_body$1);
                _vertical.m = Math.round(bounds.top + _vertical.sc()) || 0;
                _horizontal.m = Math.round(bounds.left + _horizontal.sc()) || 0;
                border ? bodyStyle.borderTopStyle = border : bodyStyle.removeProperty("border-top-style");
                _syncInterval = setInterval(_sync, 250);
                gsap$1.delayedCall(0.5, function() {
                  return _startup$1 = 0;
                });
                _addListener$1(_doc$1, "touchcancel", _passThrough);
                _addListener$1(_body$1, "touchstart", _passThrough);
                _multiListener(_addListener$1, _doc$1, "pointerdown,touchstart,mousedown", _pointerDownHandler);
                _multiListener(_addListener$1, _doc$1, "pointerup,touchend,mouseup", _pointerUpHandler);
                _transformProp = gsap$1.utils.checkPrefix("transform");
                _stateProps.push(_transformProp);
                _coreInitted$1 = _getTime$1();
                _resizeDelay = gsap$1.delayedCall(0.2, _refreshAll).pause();
                _autoRefresh = [_doc$1, "visibilitychange", function() {
                  var w = _win$1.innerWidth, h = _win$1.innerHeight;
                  if (_doc$1.hidden) {
                    _prevWidth = w;
                    _prevHeight = h;
                  } else if (_prevWidth !== w || _prevHeight !== h) {
                    _onResize();
                  }
                }, _doc$1, "DOMContentLoaded", _refreshAll, _win$1, "load", _refreshAll, _win$1, "resize", _onResize];
                _iterateAutoRefresh(_addListener$1);
                _triggers.forEach(function(trigger) {
                  return trigger.enable(0, 1);
                });
                for (i = 0; i < _scrollers.length; i += 3) {
                  _wheelListener(_removeListener$1, _scrollers[i], _scrollers[i + 1]);
                  _wheelListener(_removeListener$1, _scrollers[i], _scrollers[i + 2]);
                }
              }
            }
          };
          ScrollTrigger3.config = function config(vars) {
            "limitCallbacks" in vars && (_limitCallbacks = !!vars.limitCallbacks);
            var ms = vars.syncInterval;
            ms && clearInterval(_syncInterval) || (_syncInterval = ms) && setInterval(_sync, ms);
            "ignoreMobileResize" in vars && (_ignoreMobileResize = ScrollTrigger3.isTouch === 1 && vars.ignoreMobileResize);
            if ("autoRefreshEvents" in vars) {
              _iterateAutoRefresh(_removeListener$1) || _iterateAutoRefresh(_addListener$1, vars.autoRefreshEvents || "none");
              _ignoreResize = (vars.autoRefreshEvents + "").indexOf("resize") === -1;
            }
          };
          ScrollTrigger3.scrollerProxy = function scrollerProxy(target, vars) {
            var t = _getTarget(target), i = _scrollers.indexOf(t), isViewport = _isViewport$1(t);
            if (~i) {
              _scrollers.splice(i, isViewport ? 6 : 2);
            }
            if (vars) {
              isViewport ? _proxies.unshift(_win$1, vars, _body$1, vars, _docEl$1, vars) : _proxies.unshift(t, vars);
            }
          };
          ScrollTrigger3.matchMedia = function matchMedia(vars) {
            var mq, p, i, func, result;
            for (p in vars) {
              i = _media.indexOf(p);
              func = vars[p];
              _creatingMedia = p;
              if (p === "all") {
                func();
              } else {
                mq = _win$1.matchMedia(p);
                if (mq) {
                  mq.matches && (result = func());
                  if (~i) {
                    _media[i + 1] = _combineFunc(_media[i + 1], func);
                    _media[i + 2] = _combineFunc(_media[i + 2], result);
                  } else {
                    i = _media.length;
                    _media.push(p, func, result);
                    mq.addListener ? mq.addListener(_onMediaChange) : mq.addEventListener("change", _onMediaChange);
                  }
                  _media[i + 3] = mq.matches;
                }
              }
              _creatingMedia = 0;
            }
            return _media;
          };
          ScrollTrigger3.clearMatchMedia = function clearMatchMedia(query) {
            query || (_media.length = 0);
            query = _media.indexOf(query);
            query >= 0 && _media.splice(query, 4);
          };
          ScrollTrigger3.isInViewport = function isInViewport(element, ratio, horizontal) {
            var bounds = (_isString(element) ? _getTarget(element) : element).getBoundingClientRect(), offset = bounds[horizontal ? _width : _height] * ratio || 0;
            return horizontal ? bounds.right - offset > 0 && bounds.left + offset < _win$1.innerWidth : bounds.bottom - offset > 0 && bounds.top + offset < _win$1.innerHeight;
          };
          ScrollTrigger3.positionInViewport = function positionInViewport(element, referencePoint, horizontal) {
            _isString(element) && (element = _getTarget(element));
            var bounds = element.getBoundingClientRect(), size = bounds[horizontal ? _width : _height], offset = referencePoint == null ? size / 2 : referencePoint in _keywords ? _keywords[referencePoint] * size : ~referencePoint.indexOf("%") ? parseFloat(referencePoint) * size / 100 : parseFloat(referencePoint) || 0;
            return horizontal ? (bounds.left + offset) / _win$1.innerWidth : (bounds.top + offset) / _win$1.innerHeight;
          };
          return ScrollTrigger3;
        }();
        ScrollTrigger$1.version = "3.10.4";
        ScrollTrigger$1.saveStyles = function(targets) {
          return targets ? _toArray(targets).forEach(function(target) {
            if (target && target.style) {
              var i = _savedStyles.indexOf(target);
              i >= 0 && _savedStyles.splice(i, 5);
              _savedStyles.push(target, target.style.cssText, target.getBBox && target.getAttribute("transform"), gsap$1.core.getCache(target), _creatingMedia);
            }
          }) : _savedStyles;
        };
        ScrollTrigger$1.revert = function(soft, media) {
          return _revertAll(!soft, media);
        };
        ScrollTrigger$1.create = function(vars, animation) {
          return new ScrollTrigger$1(vars, animation);
        };
        ScrollTrigger$1.refresh = function(safe) {
          return safe ? _onResize() : (_coreInitted$1 || ScrollTrigger$1.register()) && _refreshAll(true);
        };
        ScrollTrigger$1.update = _updateAll;
        ScrollTrigger$1.clearScrollMemory = _clearScrollMemory;
        ScrollTrigger$1.maxScroll = function(element, horizontal) {
          return _maxScroll(element, horizontal ? _horizontal : _vertical);
        };
        ScrollTrigger$1.getScrollFunc = function(element, horizontal) {
          return _getScrollFunc(_getTarget(element), horizontal ? _horizontal : _vertical);
        };
        ScrollTrigger$1.getById = function(id) {
          return _ids[id];
        };
        ScrollTrigger$1.getAll = function() {
          return _triggers.filter(function(t) {
            return t.vars.id !== "ScrollSmoother";
          });
        };
        ScrollTrigger$1.isScrolling = function() {
          return !!_lastScrollTime;
        };
        ScrollTrigger$1.snapDirectional = _snapDirectional;
        ScrollTrigger$1.addEventListener = function(type, callback) {
          var a = _listeners[type] || (_listeners[type] = []);
          ~a.indexOf(callback) || a.push(callback);
        };
        ScrollTrigger$1.removeEventListener = function(type, callback) {
          var a = _listeners[type], i = a && a.indexOf(callback);
          i >= 0 && a.splice(i, 1);
        };
        ScrollTrigger$1.batch = function(targets, vars) {
          var result = [], varsCopy = {}, interval = vars.interval || 0.016, batchMax = vars.batchMax || 1e9, proxyCallback = function proxyCallback2(type, callback) {
            var elements = [], triggers = [], delay = gsap$1.delayedCall(interval, function() {
              callback(elements, triggers);
              elements = [];
              triggers = [];
            }).pause();
            return function(self2) {
              elements.length || delay.restart(true);
              elements.push(self2.trigger);
              triggers.push(self2);
              batchMax <= elements.length && delay.progress(1);
            };
          }, p;
          for (p in vars) {
            varsCopy[p] = p.substr(0, 2) === "on" && _isFunction(vars[p]) && p !== "onRefreshInit" ? proxyCallback(p, vars[p]) : vars[p];
          }
          if (_isFunction(batchMax)) {
            batchMax = batchMax();
            _addListener$1(ScrollTrigger$1, "refresh", function() {
              return batchMax = vars.batchMax();
            });
          }
          _toArray(targets).forEach(function(target) {
            var config = {};
            for (p in varsCopy) {
              config[p] = varsCopy[p];
            }
            config.trigger = target;
            result.push(ScrollTrigger$1.create(config));
          });
          return result;
        };
        var _clampScrollAndGetDurationMultiplier = function _clampScrollAndGetDurationMultiplier2(scrollFunc, current, end, max) {
          current > max ? scrollFunc(max) : current < 0 && scrollFunc(0);
          return end > max ? (max - current) / (end - current) : end < 0 ? current / (current - end) : 1;
        }, _allowNativePanning = function _allowNativePanning2(target, direction) {
          if (direction === true) {
            target.style.removeProperty("touch-action");
          } else {
            target.style.touchAction = direction === true ? "auto" : direction ? "pan-" + direction + (Observer.isTouch ? " pinch-zoom" : "") : "none";
          }
          target === _docEl$1 && _allowNativePanning2(_body$1, direction);
        }, _overflow = {
          auto: 1,
          scroll: 1
        }, _nestedScroll = function _nestedScroll2(_ref5) {
          var event = _ref5.event, target = _ref5.target, axis = _ref5.axis;
          var node = (event.changedTouches ? event.changedTouches[0] : event).target, cache = node._gsap || gsap$1.core.getCache(node), time = _getTime$1(), cs;
          if (!cache._isScrollT || time - cache._isScrollT > 2e3) {
            while (node && node.scrollHeight <= node.clientHeight) {
              node = node.parentNode;
            }
            cache._isScroll = node && !_isViewport$1(node) && node !== target && (_overflow[(cs = _getComputedStyle(node)).overflowY] || _overflow[cs.overflowX]);
            cache._isScrollT = time;
          }
          (cache._isScroll || axis === "x") && (event._gsapAllow = true);
        }, _inputObserver = function _inputObserver2(target, type, inputs, nested) {
          return Observer.create({
            target,
            capture: true,
            debounce: false,
            lockAxis: true,
            type,
            onWheel: nested = nested && _nestedScroll,
            onPress: nested,
            onDrag: nested,
            onScroll: nested,
            onEnable: function onEnable() {
              return inputs && _addListener$1(_doc$1, Observer.eventTypes[0], _captureInputs, false, true);
            },
            onDisable: function onDisable() {
              return _removeListener$1(_doc$1, Observer.eventTypes[0], _captureInputs, true);
            }
          });
        }, _inputExp = /(input|label|select|textarea)/i, _inputIsFocused, _captureInputs = function _captureInputs2(e) {
          var isInput = _inputExp.test(e.target.tagName);
          if (isInput || _inputIsFocused) {
            e._gsapAllow = true;
            _inputIsFocused = isInput;
          }
        }, _getScrollNormalizer = function _getScrollNormalizer2(vars) {
          _isObject(vars) || (vars = {});
          vars.preventDefault = vars.isNormalizer = vars.allowClicks = true;
          vars.type || (vars.type = "wheel,touch");
          vars.debounce = !!vars.debounce;
          vars.id = vars.id || "normalizer";
          var _vars2 = vars, normalizeScrollX = _vars2.normalizeScrollX, momentum = _vars2.momentum, allowNestedScroll = _vars2.allowNestedScroll, self2, maxY, target = _getTarget(vars.target) || _docEl$1, smoother = gsap$1.core.globals().ScrollSmoother, content = _fixIOSBug && (vars.content && _getTarget(vars.content) || smoother && smoother.get() && smoother.get().content()), scrollFuncY = _getScrollFunc(target, _vertical), scrollFuncX = _getScrollFunc(target, _horizontal), scale = 1, initialScale = (Observer.isTouch && _win$1.visualViewport ? _win$1.visualViewport.scale * _win$1.visualViewport.width : _win$1.outerWidth) / _win$1.innerWidth, wheelRefresh = 0, resolveMomentumDuration = _isFunction(momentum) ? function() {
            return momentum(self2);
          } : function() {
            return momentum || 2.8;
          }, skipTouchMove, lastRefreshID, inputObserver = _inputObserver(target, vars.type, true, allowNestedScroll), resumeTouchMove = function resumeTouchMove2() {
            return skipTouchMove = false;
          }, scrollClampX = _passThrough, scrollClampY = _passThrough, updateClamps = function updateClamps2() {
            maxY = _maxScroll(target, _vertical);
            scrollClampY = _clamp$1(_fixIOSBug ? 1 : 0, maxY);
            normalizeScrollX && (scrollClampX = _clamp$1(0, _maxScroll(target, _horizontal)));
            lastRefreshID = _refreshID;
          }, ignoreDrag = function ignoreDrag2() {
            if (skipTouchMove) {
              requestAnimationFrame(resumeTouchMove);
              var offset = _round(self2.deltaY / 2), scroll2 = scrollClampY(scrollFuncY.v - offset);
              if (content && scroll2 !== scrollFuncY.v + scrollFuncY.offset) {
                scrollFuncY.offset = scroll2 - scrollFuncY.v;
                content.style.transform = "translateY(" + -scrollFuncY.offset + "px)";
                content._gsap && (content._gsap.y = -scrollFuncY.offset + "px");
                scrollFuncY.cacheID = _scrollers.cache;
                _updateAll();
              }
              return true;
            }
            if (content) {
              content.style.transform = "translateY(0px)";
              scrollFuncY.offset = scrollFuncY.cacheID = 0;
              content._gsap && (content._gsap.y = "0px");
            }
            skipTouchMove = true;
          }, tween, startScrollX, startScrollY, onStopDelayedCall, onResize = function onResize2() {
            updateClamps();
            if (tween.isActive() && tween.vars.scrollY > maxY) {
              scrollFuncY() > maxY ? tween.progress(1) && scrollFuncY(maxY) : tween.resetTo("scrollY", maxY);
            }
          };
          vars.ignoreCheck = function(e) {
            return _fixIOSBug && e.type === "touchmove" && ignoreDrag() || scale > 1.05 && e.type !== "touchstart" || self2.isGesturing || e.touches && e.touches.length > 1;
          };
          vars.onPress = function() {
            var prevScale = scale;
            scale = _round((_win$1.visualViewport && _win$1.visualViewport.scale || 1) / initialScale);
            tween.pause();
            prevScale !== scale && _allowNativePanning(target, scale > 1.01 ? true : normalizeScrollX ? false : "x");
            skipTouchMove = false;
            startScrollX = scrollFuncX();
            startScrollY = scrollFuncY();
            updateClamps();
            lastRefreshID = _refreshID;
          };
          vars.onRelease = vars.onGestureStart = function(self3, wasDragging) {
            if (content) {
              content.style.transform = "translateY(0px)";
              scrollFuncY.offset = scrollFuncY.cacheID = 0;
              content._gsap && (content._gsap.y = "0px");
            }
            if (!wasDragging) {
              onStopDelayedCall.restart(true);
            } else {
              _scrollers.cache++;
              var dur = resolveMomentumDuration(), currentScroll, endScroll;
              if (normalizeScrollX) {
                currentScroll = scrollFuncX();
                endScroll = currentScroll + dur * 0.05 * -self3.velocityX / 0.227;
                dur *= _clampScrollAndGetDurationMultiplier(scrollFuncX, currentScroll, endScroll, _maxScroll(target, _horizontal));
                tween.vars.scrollX = scrollClampX(endScroll);
              }
              currentScroll = scrollFuncY();
              endScroll = currentScroll + dur * 0.05 * -self3.velocityY / 0.227;
              dur *= _clampScrollAndGetDurationMultiplier(scrollFuncY, currentScroll, endScroll, _maxScroll(target, _vertical));
              tween.vars.scrollY = scrollClampY(endScroll);
              tween.invalidate().duration(dur).play(0.01);
              if (_fixIOSBug && tween.vars.scrollY >= maxY || currentScroll >= maxY - 1) {
                gsap$1.to({}, {
                  onUpdate: onResize,
                  duration: dur
                });
              }
            }
          };
          vars.onWheel = function() {
            tween._ts && tween.pause();
            if (_getTime$1() - wheelRefresh > 1e3) {
              lastRefreshID = 0;
              wheelRefresh = _getTime$1();
            }
          };
          vars.onChange = function(self3, dx, dy, xArray, yArray) {
            _refreshID !== lastRefreshID && updateClamps();
            dx && normalizeScrollX && scrollFuncX(scrollClampX(xArray[2] === dx ? startScrollX + (self3.startX - self3.x) : scrollFuncX() + dx - xArray[1]));
            dy && scrollFuncY(scrollClampY(yArray[2] === dy ? startScrollY + (self3.startY - self3.y) : scrollFuncY() + dy - yArray[1]));
            _updateAll();
          };
          vars.onEnable = function() {
            _allowNativePanning(target, normalizeScrollX ? false : "x");
            _addListener$1(_win$1, "resize", onResize);
            inputObserver.enable();
          };
          vars.onDisable = function() {
            _allowNativePanning(target, true);
            _removeListener$1(_win$1, "resize", onResize);
            inputObserver.kill();
          };
          self2 = new Observer(vars);
          self2.iOS = _fixIOSBug;
          _fixIOSBug && !scrollFuncY() && scrollFuncY(1);
          onStopDelayedCall = self2._dc;
          tween = gsap$1.to(self2, {
            ease: "power4",
            paused: true,
            scrollX: normalizeScrollX ? "+=0.1" : "+=0",
            scrollY: "+=0.1",
            onComplete: onStopDelayedCall.vars.onComplete
          });
          return self2;
        };
        ScrollTrigger$1.sort = function(func) {
          return _triggers.sort(func || function(a, b) {
            return (a.vars.refreshPriority || 0) * -1e6 + a.start - (b.start + (b.vars.refreshPriority || 0) * -1e6);
          });
        };
        ScrollTrigger$1.observe = function(vars) {
          return new Observer(vars);
        };
        ScrollTrigger$1.normalizeScroll = function(vars) {
          if (typeof vars === "undefined") {
            return _normalizer$1;
          }
          if (vars === true && _normalizer$1) {
            return _normalizer$1.enable();
          }
          if (vars === false) {
            return _normalizer$1 && _normalizer$1.kill();
          }
          var normalizer = vars instanceof Observer ? vars : _getScrollNormalizer(vars);
          _normalizer$1 && _normalizer$1.target === normalizer.target && _normalizer$1.kill();
          _isViewport$1(normalizer.target) && (_normalizer$1 = normalizer);
          return normalizer;
        };
        ScrollTrigger$1.core = {
          _getVelocityProp,
          _inputObserver,
          _scrollers,
          _proxies,
          bridge: {
            ss: function ss() {
              _lastScrollTime || _dispatch("scrollStart");
              _lastScrollTime = _getTime$1();
            },
            ref: function ref() {
              return _refreshing;
            }
          }
        };
        _getGSAP$1() && gsap$1.registerPlugin(ScrollTrigger$1);
        exports2.ScrollTrigger = ScrollTrigger$1;
        exports2.default = ScrollTrigger$1;
        if (typeof window === "undefined" || window !== exports2) {
          Object.defineProperty(exports2, "__esModule", { value: true });
        } else {
          delete window.default;
        }
      });
    }
  });

  // src/scripts/index.js
  var import_gsap = __toESM(require_gsap());
  var import_ScrollTrigger = __toESM(require_ScrollTrigger());

  // node_modules/locomotive-scroll/dist/locomotive-scroll.esm.js
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties(Constructor, staticProps);
    return Constructor;
  }
  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly)
        symbols = symbols.filter(function(sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
      keys.push.apply(keys, symbols);
    }
    return keys;
  }
  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};
      if (i % 2) {
        ownKeys(Object(source), true).forEach(function(key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function(key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }
    return target;
  }
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass)
      _setPrototypeOf(subClass, superClass);
  }
  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
      return o2.__proto__ || Object.getPrototypeOf(o2);
    };
    return _getPrototypeOf(o);
  }
  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
      o2.__proto__ = p2;
      return o2;
    };
    return _setPrototypeOf(o, p);
  }
  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct)
      return false;
    if (Reflect.construct.sham)
      return false;
    if (typeof Proxy === "function")
      return true;
    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function() {
      }));
      return true;
    } catch (e) {
      return false;
    }
  }
  function _assertThisInitialized(self2) {
    if (self2 === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self2;
  }
  function _possibleConstructorReturn(self2, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }
    return _assertThisInitialized(self2);
  }
  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived), result;
      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;
        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }
      return _possibleConstructorReturn(this, result);
    };
  }
  function _superPropBase(object, property) {
    while (!Object.prototype.hasOwnProperty.call(object, property)) {
      object = _getPrototypeOf(object);
      if (object === null)
        break;
    }
    return object;
  }
  function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
      _get = Reflect.get;
    } else {
      _get = function _get2(target2, property2, receiver2) {
        var base = _superPropBase(target2, property2);
        if (!base)
          return;
        var desc = Object.getOwnPropertyDescriptor(base, property2);
        if (desc.get) {
          return desc.get.call(receiver2);
        }
        return desc.value;
      };
    }
    return _get(target, property, receiver || target);
  }
  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }
  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }
  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr))
      return _arrayLikeToArray(arr);
  }
  function _arrayWithHoles(arr) {
    if (Array.isArray(arr))
      return arr;
  }
  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter))
      return Array.from(iter);
  }
  function _iterableToArrayLimit(arr, i) {
    if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr)))
      return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = void 0;
    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);
        if (i && _arr.length === i)
          break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null)
          _i["return"]();
      } finally {
        if (_d)
          throw _e;
      }
    }
    return _arr;
  }
  function _unsupportedIterableToArray(o, minLen) {
    if (!o)
      return;
    if (typeof o === "string")
      return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor)
      n = o.constructor.name;
    if (n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray(o, minLen);
  }
  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length)
      len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++)
      arr2[i] = arr[i];
    return arr2;
  }
  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var defaults = {
    el: document,
    name: "scroll",
    offset: [0, 0],
    repeat: false,
    smooth: false,
    initPosition: {
      x: 0,
      y: 0
    },
    direction: "vertical",
    gestureDirection: "vertical",
    reloadOnContextChange: false,
    lerp: 0.1,
    "class": "is-inview",
    scrollbarContainer: false,
    scrollbarClass: "c-scrollbar",
    scrollingClass: "has-scroll-scrolling",
    draggingClass: "has-scroll-dragging",
    smoothClass: "has-scroll-smooth",
    initClass: "has-scroll-init",
    getSpeed: false,
    getDirection: false,
    scrollFromAnywhere: false,
    multiplier: 1,
    firefoxMultiplier: 50,
    touchMultiplier: 2,
    resetNativeScroll: true,
    tablet: {
      smooth: false,
      direction: "vertical",
      gestureDirection: "vertical",
      breakpoint: 1024
    },
    smartphone: {
      smooth: false,
      direction: "vertical",
      gestureDirection: "vertical"
    }
  };
  var _default = /* @__PURE__ */ function() {
    function _default2() {
      var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      _classCallCheck(this, _default2);
      Object.assign(this, defaults, options);
      this.smartphone = defaults.smartphone;
      if (options.smartphone)
        Object.assign(this.smartphone, options.smartphone);
      this.tablet = defaults.tablet;
      if (options.tablet)
        Object.assign(this.tablet, options.tablet);
      this.namespace = "locomotive";
      this.html = document.documentElement;
      this.windowHeight = window.innerHeight;
      this.windowWidth = window.innerWidth;
      this.windowMiddle = {
        x: this.windowWidth / 2,
        y: this.windowHeight / 2
      };
      this.els = {};
      this.currentElements = {};
      this.listeners = {};
      this.hasScrollTicking = false;
      this.hasCallEventSet = false;
      this.checkScroll = this.checkScroll.bind(this);
      this.checkResize = this.checkResize.bind(this);
      this.checkEvent = this.checkEvent.bind(this);
      this.instance = {
        scroll: {
          x: 0,
          y: 0
        },
        limit: {
          x: this.html.offsetWidth,
          y: this.html.offsetHeight
        },
        currentElements: this.currentElements
      };
      if (this.isMobile) {
        if (this.isTablet) {
          this.context = "tablet";
        } else {
          this.context = "smartphone";
        }
      } else {
        this.context = "desktop";
      }
      if (this.isMobile)
        this.direction = this[this.context].direction;
      if (this.direction === "horizontal") {
        this.directionAxis = "x";
      } else {
        this.directionAxis = "y";
      }
      if (this.getDirection) {
        this.instance.direction = null;
      }
      if (this.getDirection) {
        this.instance.speed = 0;
      }
      this.html.classList.add(this.initClass);
      window.addEventListener("resize", this.checkResize, false);
    }
    _createClass(_default2, [{
      key: "init",
      value: function init() {
        this.initEvents();
      }
    }, {
      key: "checkScroll",
      value: function checkScroll() {
        this.dispatchScroll();
      }
    }, {
      key: "checkResize",
      value: function checkResize() {
        var _this = this;
        if (!this.resizeTick) {
          this.resizeTick = true;
          requestAnimationFrame(function() {
            _this.resize();
            _this.resizeTick = false;
          });
        }
      }
    }, {
      key: "resize",
      value: function resize() {
      }
    }, {
      key: "checkContext",
      value: function checkContext() {
        if (!this.reloadOnContextChange)
          return;
        this.isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1 || this.windowWidth < this.tablet.breakpoint;
        this.isTablet = this.isMobile && this.windowWidth >= this.tablet.breakpoint;
        var oldContext = this.context;
        if (this.isMobile) {
          if (this.isTablet) {
            this.context = "tablet";
          } else {
            this.context = "smartphone";
          }
        } else {
          this.context = "desktop";
        }
        if (oldContext != this.context) {
          var oldSmooth = oldContext == "desktop" ? this.smooth : this[oldContext].smooth;
          var newSmooth = this.context == "desktop" ? this.smooth : this[this.context].smooth;
          if (oldSmooth != newSmooth)
            window.location.reload();
        }
      }
    }, {
      key: "initEvents",
      value: function initEvents() {
        var _this2 = this;
        this.scrollToEls = this.el.querySelectorAll("[data-".concat(this.name, "-to]"));
        this.setScrollTo = this.setScrollTo.bind(this);
        this.scrollToEls.forEach(function(el) {
          el.addEventListener("click", _this2.setScrollTo, false);
        });
      }
    }, {
      key: "setScrollTo",
      value: function setScrollTo(event) {
        event.preventDefault();
        this.scrollTo(event.currentTarget.getAttribute("data-".concat(this.name, "-href")) || event.currentTarget.getAttribute("href"), {
          offset: event.currentTarget.getAttribute("data-".concat(this.name, "-offset"))
        });
      }
    }, {
      key: "addElements",
      value: function addElements() {
      }
    }, {
      key: "detectElements",
      value: function detectElements(hasCallEventSet) {
        var _this3 = this;
        var scrollTop = this.instance.scroll.y;
        var scrollBottom = scrollTop + this.windowHeight;
        var scrollLeft = this.instance.scroll.x;
        var scrollRight = scrollLeft + this.windowWidth;
        Object.entries(this.els).forEach(function(_ref) {
          var _ref2 = _slicedToArray(_ref, 2), i = _ref2[0], el = _ref2[1];
          if (el && (!el.inView || hasCallEventSet)) {
            if (_this3.direction === "horizontal") {
              if (scrollRight >= el.left && scrollLeft < el.right) {
                _this3.setInView(el, i);
              }
            } else {
              if (scrollBottom >= el.top && scrollTop < el.bottom) {
                _this3.setInView(el, i);
              }
            }
          }
          if (el && el.inView) {
            if (_this3.direction === "horizontal") {
              var width = el.right - el.left;
              el.progress = (_this3.instance.scroll.x - (el.left - _this3.windowWidth)) / (width + _this3.windowWidth);
              if (scrollRight < el.left || scrollLeft > el.right) {
                _this3.setOutOfView(el, i);
              }
            } else {
              var height = el.bottom - el.top;
              el.progress = (_this3.instance.scroll.y - (el.top - _this3.windowHeight)) / (height + _this3.windowHeight);
              if (scrollBottom < el.top || scrollTop > el.bottom) {
                _this3.setOutOfView(el, i);
              }
            }
          }
        });
        this.hasScrollTicking = false;
      }
    }, {
      key: "setInView",
      value: function setInView(current, i) {
        this.els[i].inView = true;
        current.el.classList.add(current["class"]);
        this.currentElements[i] = current;
        if (current.call && this.hasCallEventSet) {
          this.dispatchCall(current, "enter");
          if (!current.repeat) {
            this.els[i].call = false;
          }
        }
      }
    }, {
      key: "setOutOfView",
      value: function setOutOfView(current, i) {
        var _this4 = this;
        this.els[i].inView = false;
        Object.keys(this.currentElements).forEach(function(el) {
          el === i && delete _this4.currentElements[el];
        });
        if (current.call && this.hasCallEventSet) {
          this.dispatchCall(current, "exit");
        }
        if (current.repeat) {
          current.el.classList.remove(current["class"]);
        }
      }
    }, {
      key: "dispatchCall",
      value: function dispatchCall(current, way) {
        this.callWay = way;
        this.callValue = current.call.split(",").map(function(item) {
          return item.trim();
        });
        this.callObj = current;
        if (this.callValue.length == 1)
          this.callValue = this.callValue[0];
        var callEvent = new Event(this.namespace + "call");
        this.el.dispatchEvent(callEvent);
      }
    }, {
      key: "dispatchScroll",
      value: function dispatchScroll() {
        var scrollEvent = new Event(this.namespace + "scroll");
        this.el.dispatchEvent(scrollEvent);
      }
    }, {
      key: "setEvents",
      value: function setEvents(event, func) {
        if (!this.listeners[event]) {
          this.listeners[event] = [];
        }
        var list = this.listeners[event];
        list.push(func);
        if (list.length === 1) {
          this.el.addEventListener(this.namespace + event, this.checkEvent, false);
        }
        if (event === "call") {
          this.hasCallEventSet = true;
          this.detectElements(true);
        }
      }
    }, {
      key: "unsetEvents",
      value: function unsetEvents(event, func) {
        if (!this.listeners[event])
          return;
        var list = this.listeners[event];
        var index = list.indexOf(func);
        if (index < 0)
          return;
        list.splice(index, 1);
        if (list.index === 0) {
          this.el.removeEventListener(this.namespace + event, this.checkEvent, false);
        }
      }
    }, {
      key: "checkEvent",
      value: function checkEvent(event) {
        var _this5 = this;
        var name = event.type.replace(this.namespace, "");
        var list = this.listeners[name];
        if (!list || list.length === 0)
          return;
        list.forEach(function(func) {
          switch (name) {
            case "scroll":
              return func(_this5.instance);
            case "call":
              return func(_this5.callValue, _this5.callWay, _this5.callObj);
            default:
              return func();
          }
        });
      }
    }, {
      key: "startScroll",
      value: function startScroll() {
      }
    }, {
      key: "stopScroll",
      value: function stopScroll() {
      }
    }, {
      key: "setScroll",
      value: function setScroll(x, y) {
        this.instance.scroll = {
          x: 0,
          y: 0
        };
      }
    }, {
      key: "destroy",
      value: function destroy() {
        var _this6 = this;
        window.removeEventListener("resize", this.checkResize, false);
        Object.keys(this.listeners).forEach(function(event) {
          _this6.el.removeEventListener(_this6.namespace + event, _this6.checkEvent, false);
        });
        this.listeners = {};
        this.scrollToEls.forEach(function(el) {
          el.removeEventListener("click", _this6.setScrollTo, false);
        });
        this.html.classList.remove(this.initClass);
      }
    }]);
    return _default2;
  }();
  var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
  function createCommonjsModule(fn, module) {
    return module = { exports: {} }, fn(module, module.exports), module.exports;
  }
  var smoothscroll = createCommonjsModule(function(module, exports) {
    (function() {
      function polyfill() {
        var w = window;
        var d = document;
        if ("scrollBehavior" in d.documentElement.style && w.__forceSmoothScrollPolyfill__ !== true) {
          return;
        }
        var Element = w.HTMLElement || w.Element;
        var SCROLL_TIME = 468;
        var original = {
          scroll: w.scroll || w.scrollTo,
          scrollBy: w.scrollBy,
          elementScroll: Element.prototype.scroll || scrollElement,
          scrollIntoView: Element.prototype.scrollIntoView
        };
        var now = w.performance && w.performance.now ? w.performance.now.bind(w.performance) : Date.now;
        function isMicrosoftBrowser(userAgent) {
          var userAgentPatterns = ["MSIE ", "Trident/", "Edge/"];
          return new RegExp(userAgentPatterns.join("|")).test(userAgent);
        }
        var ROUNDING_TOLERANCE = isMicrosoftBrowser(w.navigator.userAgent) ? 1 : 0;
        function scrollElement(x, y) {
          this.scrollLeft = x;
          this.scrollTop = y;
        }
        function ease(k) {
          return 0.5 * (1 - Math.cos(Math.PI * k));
        }
        function shouldBailOut(firstArg) {
          if (firstArg === null || typeof firstArg !== "object" || firstArg.behavior === void 0 || firstArg.behavior === "auto" || firstArg.behavior === "instant") {
            return true;
          }
          if (typeof firstArg === "object" && firstArg.behavior === "smooth") {
            return false;
          }
          throw new TypeError("behavior member of ScrollOptions " + firstArg.behavior + " is not a valid value for enumeration ScrollBehavior.");
        }
        function hasScrollableSpace(el, axis) {
          if (axis === "Y") {
            return el.clientHeight + ROUNDING_TOLERANCE < el.scrollHeight;
          }
          if (axis === "X") {
            return el.clientWidth + ROUNDING_TOLERANCE < el.scrollWidth;
          }
        }
        function canOverflow(el, axis) {
          var overflowValue = w.getComputedStyle(el, null)["overflow" + axis];
          return overflowValue === "auto" || overflowValue === "scroll";
        }
        function isScrollable(el) {
          var isScrollableY = hasScrollableSpace(el, "Y") && canOverflow(el, "Y");
          var isScrollableX = hasScrollableSpace(el, "X") && canOverflow(el, "X");
          return isScrollableY || isScrollableX;
        }
        function findScrollableParent(el) {
          while (el !== d.body && isScrollable(el) === false) {
            el = el.parentNode || el.host;
          }
          return el;
        }
        function step(context) {
          var time = now();
          var value;
          var currentX;
          var currentY;
          var elapsed = (time - context.startTime) / SCROLL_TIME;
          elapsed = elapsed > 1 ? 1 : elapsed;
          value = ease(elapsed);
          currentX = context.startX + (context.x - context.startX) * value;
          currentY = context.startY + (context.y - context.startY) * value;
          context.method.call(context.scrollable, currentX, currentY);
          if (currentX !== context.x || currentY !== context.y) {
            w.requestAnimationFrame(step.bind(w, context));
          }
        }
        function smoothScroll(el, x, y) {
          var scrollable;
          var startX;
          var startY;
          var method;
          var startTime = now();
          if (el === d.body) {
            scrollable = w;
            startX = w.scrollX || w.pageXOffset;
            startY = w.scrollY || w.pageYOffset;
            method = original.scroll;
          } else {
            scrollable = el;
            startX = el.scrollLeft;
            startY = el.scrollTop;
            method = scrollElement;
          }
          step({
            scrollable,
            method,
            startTime,
            startX,
            startY,
            x,
            y
          });
        }
        w.scroll = w.scrollTo = function() {
          if (arguments[0] === void 0) {
            return;
          }
          if (shouldBailOut(arguments[0]) === true) {
            original.scroll.call(w, arguments[0].left !== void 0 ? arguments[0].left : typeof arguments[0] !== "object" ? arguments[0] : w.scrollX || w.pageXOffset, arguments[0].top !== void 0 ? arguments[0].top : arguments[1] !== void 0 ? arguments[1] : w.scrollY || w.pageYOffset);
            return;
          }
          smoothScroll.call(w, d.body, arguments[0].left !== void 0 ? ~~arguments[0].left : w.scrollX || w.pageXOffset, arguments[0].top !== void 0 ? ~~arguments[0].top : w.scrollY || w.pageYOffset);
        };
        w.scrollBy = function() {
          if (arguments[0] === void 0) {
            return;
          }
          if (shouldBailOut(arguments[0])) {
            original.scrollBy.call(w, arguments[0].left !== void 0 ? arguments[0].left : typeof arguments[0] !== "object" ? arguments[0] : 0, arguments[0].top !== void 0 ? arguments[0].top : arguments[1] !== void 0 ? arguments[1] : 0);
            return;
          }
          smoothScroll.call(w, d.body, ~~arguments[0].left + (w.scrollX || w.pageXOffset), ~~arguments[0].top + (w.scrollY || w.pageYOffset));
        };
        Element.prototype.scroll = Element.prototype.scrollTo = function() {
          if (arguments[0] === void 0) {
            return;
          }
          if (shouldBailOut(arguments[0]) === true) {
            if (typeof arguments[0] === "number" && arguments[1] === void 0) {
              throw new SyntaxError("Value could not be converted");
            }
            original.elementScroll.call(this, arguments[0].left !== void 0 ? ~~arguments[0].left : typeof arguments[0] !== "object" ? ~~arguments[0] : this.scrollLeft, arguments[0].top !== void 0 ? ~~arguments[0].top : arguments[1] !== void 0 ? ~~arguments[1] : this.scrollTop);
            return;
          }
          var left = arguments[0].left;
          var top = arguments[0].top;
          smoothScroll.call(this, this, typeof left === "undefined" ? this.scrollLeft : ~~left, typeof top === "undefined" ? this.scrollTop : ~~top);
        };
        Element.prototype.scrollBy = function() {
          if (arguments[0] === void 0) {
            return;
          }
          if (shouldBailOut(arguments[0]) === true) {
            original.elementScroll.call(this, arguments[0].left !== void 0 ? ~~arguments[0].left + this.scrollLeft : ~~arguments[0] + this.scrollLeft, arguments[0].top !== void 0 ? ~~arguments[0].top + this.scrollTop : ~~arguments[1] + this.scrollTop);
            return;
          }
          this.scroll({
            left: ~~arguments[0].left + this.scrollLeft,
            top: ~~arguments[0].top + this.scrollTop,
            behavior: arguments[0].behavior
          });
        };
        Element.prototype.scrollIntoView = function() {
          if (shouldBailOut(arguments[0]) === true) {
            original.scrollIntoView.call(this, arguments[0] === void 0 ? true : arguments[0]);
            return;
          }
          var scrollableParent = findScrollableParent(this);
          var parentRects = scrollableParent.getBoundingClientRect();
          var clientRects = this.getBoundingClientRect();
          if (scrollableParent !== d.body) {
            smoothScroll.call(this, scrollableParent, scrollableParent.scrollLeft + clientRects.left - parentRects.left, scrollableParent.scrollTop + clientRects.top - parentRects.top);
            if (w.getComputedStyle(scrollableParent).position !== "fixed") {
              w.scrollBy({
                left: parentRects.left,
                top: parentRects.top,
                behavior: "smooth"
              });
            }
          } else {
            w.scrollBy({
              left: clientRects.left,
              top: clientRects.top,
              behavior: "smooth"
            });
          }
        };
      }
      {
        module.exports = { polyfill };
      }
    })();
  });
  var smoothscroll_1 = smoothscroll.polyfill;
  var _default$1 = /* @__PURE__ */ function(_Core) {
    _inherits(_default2, _Core);
    var _super = _createSuper(_default2);
    function _default2() {
      var _this;
      var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      _classCallCheck(this, _default2);
      _this = _super.call(this, options);
      if (_this.resetNativeScroll) {
        if (history.scrollRestoration) {
          history.scrollRestoration = "manual";
        }
        window.scrollTo(0, 0);
      }
      window.addEventListener("scroll", _this.checkScroll, false);
      if (window.smoothscrollPolyfill === void 0) {
        window.smoothscrollPolyfill = smoothscroll;
        window.smoothscrollPolyfill.polyfill();
      }
      return _this;
    }
    _createClass(_default2, [{
      key: "init",
      value: function init() {
        this.instance.scroll.y = window.pageYOffset;
        this.addElements();
        this.detectElements();
        _get(_getPrototypeOf(_default2.prototype), "init", this).call(this);
      }
    }, {
      key: "checkScroll",
      value: function checkScroll() {
        var _this2 = this;
        _get(_getPrototypeOf(_default2.prototype), "checkScroll", this).call(this);
        if (this.getDirection) {
          this.addDirection();
        }
        if (this.getSpeed) {
          this.addSpeed();
          this.speedTs = Date.now();
        }
        this.instance.scroll.y = window.pageYOffset;
        if (Object.entries(this.els).length) {
          if (!this.hasScrollTicking) {
            requestAnimationFrame(function() {
              _this2.detectElements();
            });
            this.hasScrollTicking = true;
          }
        }
      }
    }, {
      key: "addDirection",
      value: function addDirection() {
        if (window.pageYOffset > this.instance.scroll.y) {
          if (this.instance.direction !== "down") {
            this.instance.direction = "down";
          }
        } else if (window.pageYOffset < this.instance.scroll.y) {
          if (this.instance.direction !== "up") {
            this.instance.direction = "up";
          }
        }
      }
    }, {
      key: "addSpeed",
      value: function addSpeed() {
        if (window.pageYOffset != this.instance.scroll.y) {
          this.instance.speed = (window.pageYOffset - this.instance.scroll.y) / Math.max(1, Date.now() - this.speedTs);
        } else {
          this.instance.speed = 0;
        }
      }
    }, {
      key: "resize",
      value: function resize() {
        if (Object.entries(this.els).length) {
          this.windowHeight = window.innerHeight;
          this.updateElements();
        }
      }
    }, {
      key: "addElements",
      value: function addElements() {
        var _this3 = this;
        this.els = {};
        var els = this.el.querySelectorAll("[data-" + this.name + "]");
        els.forEach(function(el, index) {
          var BCR = el.getBoundingClientRect();
          var cl = el.dataset[_this3.name + "Class"] || _this3["class"];
          var id = typeof el.dataset[_this3.name + "Id"] === "string" ? el.dataset[_this3.name + "Id"] : index;
          var top;
          var left;
          var offset = typeof el.dataset[_this3.name + "Offset"] === "string" ? el.dataset[_this3.name + "Offset"].split(",") : _this3.offset;
          var repeat = el.dataset[_this3.name + "Repeat"];
          var call = el.dataset[_this3.name + "Call"];
          var target = el.dataset[_this3.name + "Target"];
          var targetEl;
          if (target !== void 0) {
            targetEl = document.querySelector("".concat(target));
          } else {
            targetEl = el;
          }
          var targetElBCR = targetEl.getBoundingClientRect();
          top = targetElBCR.top + _this3.instance.scroll.y;
          left = targetElBCR.left + _this3.instance.scroll.x;
          var bottom = top + targetEl.offsetHeight;
          var right = left + targetEl.offsetWidth;
          if (repeat == "false") {
            repeat = false;
          } else if (repeat != void 0) {
            repeat = true;
          } else {
            repeat = _this3.repeat;
          }
          var relativeOffset = _this3.getRelativeOffset(offset);
          top = top + relativeOffset[0];
          bottom = bottom - relativeOffset[1];
          var mappedEl = {
            el,
            targetEl,
            id,
            "class": cl,
            top,
            bottom,
            left,
            right,
            offset,
            progress: 0,
            repeat,
            inView: false,
            call
          };
          _this3.els[id] = mappedEl;
          if (el.classList.contains(cl)) {
            _this3.setInView(_this3.els[id], id);
          }
        });
      }
    }, {
      key: "updateElements",
      value: function updateElements() {
        var _this4 = this;
        Object.entries(this.els).forEach(function(_ref) {
          var _ref2 = _slicedToArray(_ref, 2), i = _ref2[0], el = _ref2[1];
          var top = el.targetEl.getBoundingClientRect().top + _this4.instance.scroll.y;
          var bottom = top + el.targetEl.offsetHeight;
          var relativeOffset = _this4.getRelativeOffset(el.offset);
          _this4.els[i].top = top + relativeOffset[0];
          _this4.els[i].bottom = bottom - relativeOffset[1];
        });
        this.hasScrollTicking = false;
      }
    }, {
      key: "getRelativeOffset",
      value: function getRelativeOffset(offset) {
        var relativeOffset = [0, 0];
        if (offset) {
          for (var i = 0; i < offset.length; i++) {
            if (typeof offset[i] == "string") {
              if (offset[i].includes("%")) {
                relativeOffset[i] = parseInt(offset[i].replace("%", "") * this.windowHeight / 100);
              } else {
                relativeOffset[i] = parseInt(offset[i]);
              }
            } else {
              relativeOffset[i] = offset[i];
            }
          }
        }
        return relativeOffset;
      }
    }, {
      key: "scrollTo",
      value: function scrollTo(target) {
        var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        var offset = parseInt(options.offset) || 0;
        var callback = options.callback ? options.callback : false;
        if (typeof target === "string") {
          if (target === "top") {
            target = this.html;
          } else if (target === "bottom") {
            target = this.html.offsetHeight - window.innerHeight;
          } else {
            target = document.querySelector(target);
            if (!target) {
              return;
            }
          }
        } else if (typeof target === "number") {
          target = parseInt(target);
        } else if (target && target.tagName)
          ;
        else {
          console.warn("`target` parameter is not valid");
          return;
        }
        if (typeof target !== "number") {
          offset = target.getBoundingClientRect().top + offset + this.instance.scroll.y;
        } else {
          offset = target + offset;
        }
        var isTargetReached = function isTargetReached2() {
          return parseInt(window.pageYOffset) === parseInt(offset);
        };
        if (callback) {
          if (isTargetReached()) {
            callback();
            return;
          } else {
            var onScroll = function onScroll2() {
              if (isTargetReached()) {
                window.removeEventListener("scroll", onScroll2);
                callback();
              }
            };
            window.addEventListener("scroll", onScroll);
          }
        }
        window.scrollTo({
          top: offset,
          behavior: options.duration === 0 ? "auto" : "smooth"
        });
      }
    }, {
      key: "update",
      value: function update() {
        this.addElements();
        this.detectElements();
      }
    }, {
      key: "destroy",
      value: function destroy() {
        _get(_getPrototypeOf(_default2.prototype), "destroy", this).call(this);
        window.removeEventListener("scroll", this.checkScroll, false);
      }
    }]);
    return _default2;
  }(_default);
  var getOwnPropertySymbols = Object.getOwnPropertySymbols;
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  var propIsEnumerable = Object.prototype.propertyIsEnumerable;
  function toObject(val) {
    if (val === null || val === void 0) {
      throw new TypeError("Object.assign cannot be called with null or undefined");
    }
    return Object(val);
  }
  function shouldUseNative() {
    try {
      if (!Object.assign) {
        return false;
      }
      var test1 = new String("abc");
      test1[5] = "de";
      if (Object.getOwnPropertyNames(test1)[0] === "5") {
        return false;
      }
      var test2 = {};
      for (var i = 0; i < 10; i++) {
        test2["_" + String.fromCharCode(i)] = i;
      }
      var order2 = Object.getOwnPropertyNames(test2).map(function(n) {
        return test2[n];
      });
      if (order2.join("") !== "0123456789") {
        return false;
      }
      var test3 = {};
      "abcdefghijklmnopqrst".split("").forEach(function(letter) {
        test3[letter] = letter;
      });
      if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") {
        return false;
      }
      return true;
    } catch (err) {
      return false;
    }
  }
  var objectAssign = shouldUseNative() ? Object.assign : function(target, source) {
    var from;
    var to = toObject(target);
    var symbols;
    for (var s = 1; s < arguments.length; s++) {
      from = Object(arguments[s]);
      for (var key in from) {
        if (hasOwnProperty.call(from, key)) {
          to[key] = from[key];
        }
      }
      if (getOwnPropertySymbols) {
        symbols = getOwnPropertySymbols(from);
        for (var i = 0; i < symbols.length; i++) {
          if (propIsEnumerable.call(from, symbols[i])) {
            to[symbols[i]] = from[symbols[i]];
          }
        }
      }
    }
    return to;
  };
  function E() {
  }
  E.prototype = {
    on: function(name, callback, ctx) {
      var e = this.e || (this.e = {});
      (e[name] || (e[name] = [])).push({
        fn: callback,
        ctx
      });
      return this;
    },
    once: function(name, callback, ctx) {
      var self2 = this;
      function listener() {
        self2.off(name, listener);
        callback.apply(ctx, arguments);
      }
      listener._ = callback;
      return this.on(name, listener, ctx);
    },
    emit: function(name) {
      var data = [].slice.call(arguments, 1);
      var evtArr = ((this.e || (this.e = {}))[name] || []).slice();
      var i = 0;
      var len = evtArr.length;
      for (i; i < len; i++) {
        evtArr[i].fn.apply(evtArr[i].ctx, data);
      }
      return this;
    },
    off: function(name, callback) {
      var e = this.e || (this.e = {});
      var evts = e[name];
      var liveEvents = [];
      if (evts && callback) {
        for (var i = 0, len = evts.length; i < len; i++) {
          if (evts[i].fn !== callback && evts[i].fn._ !== callback)
            liveEvents.push(evts[i]);
        }
      }
      liveEvents.length ? e[name] = liveEvents : delete e[name];
      return this;
    }
  };
  var tinyEmitter = E;
  var lethargy = createCommonjsModule(function(module, exports) {
    (function() {
      var root;
      root = exports !== null ? exports : this;
      root.Lethargy = function() {
        function Lethargy2(stability, sensitivity, tolerance, delay) {
          this.stability = stability != null ? Math.abs(stability) : 8;
          this.sensitivity = sensitivity != null ? 1 + Math.abs(sensitivity) : 100;
          this.tolerance = tolerance != null ? 1 + Math.abs(tolerance) : 1.1;
          this.delay = delay != null ? delay : 150;
          this.lastUpDeltas = function() {
            var i, ref, results;
            results = [];
            for (i = 1, ref = this.stability * 2; 1 <= ref ? i <= ref : i >= ref; 1 <= ref ? i++ : i--) {
              results.push(null);
            }
            return results;
          }.call(this);
          this.lastDownDeltas = function() {
            var i, ref, results;
            results = [];
            for (i = 1, ref = this.stability * 2; 1 <= ref ? i <= ref : i >= ref; 1 <= ref ? i++ : i--) {
              results.push(null);
            }
            return results;
          }.call(this);
          this.deltasTimestamp = function() {
            var i, ref, results;
            results = [];
            for (i = 1, ref = this.stability * 2; 1 <= ref ? i <= ref : i >= ref; 1 <= ref ? i++ : i--) {
              results.push(null);
            }
            return results;
          }.call(this);
        }
        Lethargy2.prototype.check = function(e) {
          var lastDelta;
          e = e.originalEvent || e;
          if (e.wheelDelta != null) {
            lastDelta = e.wheelDelta;
          } else if (e.deltaY != null) {
            lastDelta = e.deltaY * -40;
          } else if (e.detail != null || e.detail === 0) {
            lastDelta = e.detail * -40;
          }
          this.deltasTimestamp.push(Date.now());
          this.deltasTimestamp.shift();
          if (lastDelta > 0) {
            this.lastUpDeltas.push(lastDelta);
            this.lastUpDeltas.shift();
            return this.isInertia(1);
          } else {
            this.lastDownDeltas.push(lastDelta);
            this.lastDownDeltas.shift();
            return this.isInertia(-1);
          }
        };
        Lethargy2.prototype.isInertia = function(direction) {
          var lastDeltas, lastDeltasNew, lastDeltasOld, newAverage, newSum, oldAverage, oldSum;
          lastDeltas = direction === -1 ? this.lastDownDeltas : this.lastUpDeltas;
          if (lastDeltas[0] === null) {
            return direction;
          }
          if (this.deltasTimestamp[this.stability * 2 - 2] + this.delay > Date.now() && lastDeltas[0] === lastDeltas[this.stability * 2 - 1]) {
            return false;
          }
          lastDeltasOld = lastDeltas.slice(0, this.stability);
          lastDeltasNew = lastDeltas.slice(this.stability, this.stability * 2);
          oldSum = lastDeltasOld.reduce(function(t, s) {
            return t + s;
          });
          newSum = lastDeltasNew.reduce(function(t, s) {
            return t + s;
          });
          oldAverage = oldSum / lastDeltasOld.length;
          newAverage = newSum / lastDeltasNew.length;
          if (Math.abs(oldAverage) < Math.abs(newAverage * this.tolerance) && this.sensitivity < Math.abs(newAverage)) {
            return direction;
          } else {
            return false;
          }
        };
        Lethargy2.prototype.showLastUpDeltas = function() {
          return this.lastUpDeltas;
        };
        Lethargy2.prototype.showLastDownDeltas = function() {
          return this.lastDownDeltas;
        };
        return Lethargy2;
      }();
    }).call(commonjsGlobal);
  });
  var support = function getSupport() {
    return {
      hasWheelEvent: "onwheel" in document,
      hasMouseWheelEvent: "onmousewheel" in document,
      hasTouch: "ontouchstart" in window || window.TouchEvent || window.DocumentTouch && document instanceof DocumentTouch,
      hasTouchWin: navigator.msMaxTouchPoints && navigator.msMaxTouchPoints > 1,
      hasPointer: !!window.navigator.msPointerEnabled,
      hasKeyDown: "onkeydown" in document,
      isFirefox: navigator.userAgent.indexOf("Firefox") > -1
    };
  }();
  var toString = Object.prototype.toString;
  var hasOwnProperty$1 = Object.prototype.hasOwnProperty;
  var bindallStandalone = function(object) {
    if (!object)
      return console.warn("bindAll requires at least one argument.");
    var functions = Array.prototype.slice.call(arguments, 1);
    if (functions.length === 0) {
      for (var method in object) {
        if (hasOwnProperty$1.call(object, method)) {
          if (typeof object[method] == "function" && toString.call(object[method]) == "[object Function]") {
            functions.push(method);
          }
        }
      }
    }
    for (var i = 0; i < functions.length; i++) {
      var f = functions[i];
      object[f] = bind(object[f], object);
    }
  };
  function bind(func, context) {
    return function() {
      return func.apply(context, arguments);
    };
  }
  var Lethargy = lethargy.Lethargy;
  var EVT_ID = "virtualscroll";
  var src = VirtualScroll;
  var keyCodes = {
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40,
    SPACE: 32
  };
  function VirtualScroll(options) {
    bindallStandalone(this, "_onWheel", "_onMouseWheel", "_onTouchStart", "_onTouchMove", "_onKeyDown");
    this.el = window;
    if (options && options.el) {
      this.el = options.el;
      delete options.el;
    }
    this.options = objectAssign({
      mouseMultiplier: 1,
      touchMultiplier: 2,
      firefoxMultiplier: 15,
      keyStep: 120,
      preventTouch: false,
      unpreventTouchClass: "vs-touchmove-allowed",
      limitInertia: false,
      useKeyboard: true,
      useTouch: true
    }, options);
    if (this.options.limitInertia)
      this._lethargy = new Lethargy();
    this._emitter = new tinyEmitter();
    this._event = {
      y: 0,
      x: 0,
      deltaX: 0,
      deltaY: 0
    };
    this.touchStartX = null;
    this.touchStartY = null;
    this.bodyTouchAction = null;
    if (this.options.passive !== void 0) {
      this.listenerOptions = { passive: this.options.passive };
    }
  }
  VirtualScroll.prototype._notify = function(e) {
    var evt = this._event;
    evt.x += evt.deltaX;
    evt.y += evt.deltaY;
    this._emitter.emit(EVT_ID, {
      x: evt.x,
      y: evt.y,
      deltaX: evt.deltaX,
      deltaY: evt.deltaY,
      originalEvent: e
    });
  };
  VirtualScroll.prototype._onWheel = function(e) {
    var options = this.options;
    if (this._lethargy && this._lethargy.check(e) === false)
      return;
    var evt = this._event;
    evt.deltaX = e.wheelDeltaX || e.deltaX * -1;
    evt.deltaY = e.wheelDeltaY || e.deltaY * -1;
    if (support.isFirefox && e.deltaMode == 1) {
      evt.deltaX *= options.firefoxMultiplier;
      evt.deltaY *= options.firefoxMultiplier;
    }
    evt.deltaX *= options.mouseMultiplier;
    evt.deltaY *= options.mouseMultiplier;
    this._notify(e);
  };
  VirtualScroll.prototype._onMouseWheel = function(e) {
    if (this.options.limitInertia && this._lethargy.check(e) === false)
      return;
    var evt = this._event;
    evt.deltaX = e.wheelDeltaX ? e.wheelDeltaX : 0;
    evt.deltaY = e.wheelDeltaY ? e.wheelDeltaY : e.wheelDelta;
    this._notify(e);
  };
  VirtualScroll.prototype._onTouchStart = function(e) {
    var t = e.targetTouches ? e.targetTouches[0] : e;
    this.touchStartX = t.pageX;
    this.touchStartY = t.pageY;
  };
  VirtualScroll.prototype._onTouchMove = function(e) {
    var options = this.options;
    if (options.preventTouch && !e.target.classList.contains(options.unpreventTouchClass)) {
      e.preventDefault();
    }
    var evt = this._event;
    var t = e.targetTouches ? e.targetTouches[0] : e;
    evt.deltaX = (t.pageX - this.touchStartX) * options.touchMultiplier;
    evt.deltaY = (t.pageY - this.touchStartY) * options.touchMultiplier;
    this.touchStartX = t.pageX;
    this.touchStartY = t.pageY;
    this._notify(e);
  };
  VirtualScroll.prototype._onKeyDown = function(e) {
    var evt = this._event;
    evt.deltaX = evt.deltaY = 0;
    var windowHeight = window.innerHeight - 40;
    switch (e.keyCode) {
      case keyCodes.LEFT:
      case keyCodes.UP:
        evt.deltaY = this.options.keyStep;
        break;
      case keyCodes.RIGHT:
      case keyCodes.DOWN:
        evt.deltaY = -this.options.keyStep;
        break;
      case e.shiftKey:
        evt.deltaY = windowHeight;
        break;
      case keyCodes.SPACE:
        evt.deltaY = -windowHeight;
        break;
      default:
        return;
    }
    this._notify(e);
  };
  VirtualScroll.prototype._bind = function() {
    if (support.hasWheelEvent)
      this.el.addEventListener("wheel", this._onWheel, this.listenerOptions);
    if (support.hasMouseWheelEvent)
      this.el.addEventListener("mousewheel", this._onMouseWheel, this.listenerOptions);
    if (support.hasTouch && this.options.useTouch) {
      this.el.addEventListener("touchstart", this._onTouchStart, this.listenerOptions);
      this.el.addEventListener("touchmove", this._onTouchMove, this.listenerOptions);
    }
    if (support.hasPointer && support.hasTouchWin) {
      this.bodyTouchAction = document.body.style.msTouchAction;
      document.body.style.msTouchAction = "none";
      this.el.addEventListener("MSPointerDown", this._onTouchStart, true);
      this.el.addEventListener("MSPointerMove", this._onTouchMove, true);
    }
    if (support.hasKeyDown && this.options.useKeyboard)
      document.addEventListener("keydown", this._onKeyDown);
  };
  VirtualScroll.prototype._unbind = function() {
    if (support.hasWheelEvent)
      this.el.removeEventListener("wheel", this._onWheel);
    if (support.hasMouseWheelEvent)
      this.el.removeEventListener("mousewheel", this._onMouseWheel);
    if (support.hasTouch) {
      this.el.removeEventListener("touchstart", this._onTouchStart);
      this.el.removeEventListener("touchmove", this._onTouchMove);
    }
    if (support.hasPointer && support.hasTouchWin) {
      document.body.style.msTouchAction = this.bodyTouchAction;
      this.el.removeEventListener("MSPointerDown", this._onTouchStart, true);
      this.el.removeEventListener("MSPointerMove", this._onTouchMove, true);
    }
    if (support.hasKeyDown && this.options.useKeyboard)
      document.removeEventListener("keydown", this._onKeyDown);
  };
  VirtualScroll.prototype.on = function(cb, ctx) {
    this._emitter.on(EVT_ID, cb, ctx);
    var events = this._emitter.e;
    if (events && events[EVT_ID] && events[EVT_ID].length === 1)
      this._bind();
  };
  VirtualScroll.prototype.off = function(cb, ctx) {
    this._emitter.off(EVT_ID, cb, ctx);
    var events = this._emitter.e;
    if (!events[EVT_ID] || events[EVT_ID].length <= 0)
      this._unbind();
  };
  VirtualScroll.prototype.reset = function() {
    var evt = this._event;
    evt.x = 0;
    evt.y = 0;
  };
  VirtualScroll.prototype.destroy = function() {
    this._emitter.off();
    this._unbind();
  };
  function lerp(start, end, amt) {
    return (1 - amt) * start + amt * end;
  }
  function getTranslate(el) {
    var translate = {};
    if (!window.getComputedStyle)
      return;
    var style = getComputedStyle(el);
    var transform = style.transform || style.webkitTransform || style.mozTransform;
    var mat = transform.match(/^matrix3d\((.+)\)$/);
    if (mat) {
      translate.x = mat ? parseFloat(mat[1].split(", ")[12]) : 0;
      translate.y = mat ? parseFloat(mat[1].split(", ")[13]) : 0;
    } else {
      mat = transform.match(/^matrix\((.+)\)$/);
      translate.x = mat ? parseFloat(mat[1].split(", ")[4]) : 0;
      translate.y = mat ? parseFloat(mat[1].split(", ")[5]) : 0;
    }
    return translate;
  }
  function getParents(elem) {
    var parents = [];
    for (; elem && elem !== document; elem = elem.parentNode) {
      parents.push(elem);
    }
    return parents;
  }
  var NEWTON_ITERATIONS = 4;
  var NEWTON_MIN_SLOPE = 1e-3;
  var SUBDIVISION_PRECISION = 1e-7;
  var SUBDIVISION_MAX_ITERATIONS = 10;
  var kSplineTableSize = 11;
  var kSampleStepSize = 1 / (kSplineTableSize - 1);
  var float32ArraySupported = typeof Float32Array === "function";
  function A(aA1, aA2) {
    return 1 - 3 * aA2 + 3 * aA1;
  }
  function B(aA1, aA2) {
    return 3 * aA2 - 6 * aA1;
  }
  function C(aA1) {
    return 3 * aA1;
  }
  function calcBezier(aT, aA1, aA2) {
    return ((A(aA1, aA2) * aT + B(aA1, aA2)) * aT + C(aA1)) * aT;
  }
  function getSlope(aT, aA1, aA2) {
    return 3 * A(aA1, aA2) * aT * aT + 2 * B(aA1, aA2) * aT + C(aA1);
  }
  function binarySubdivide(aX, aA, aB, mX1, mX2) {
    var currentX, currentT, i = 0;
    do {
      currentT = aA + (aB - aA) / 2;
      currentX = calcBezier(currentT, mX1, mX2) - aX;
      if (currentX > 0) {
        aB = currentT;
      } else {
        aA = currentT;
      }
    } while (Math.abs(currentX) > SUBDIVISION_PRECISION && ++i < SUBDIVISION_MAX_ITERATIONS);
    return currentT;
  }
  function newtonRaphsonIterate(aX, aGuessT, mX1, mX2) {
    for (var i = 0; i < NEWTON_ITERATIONS; ++i) {
      var currentSlope = getSlope(aGuessT, mX1, mX2);
      if (currentSlope === 0) {
        return aGuessT;
      }
      var currentX = calcBezier(aGuessT, mX1, mX2) - aX;
      aGuessT -= currentX / currentSlope;
    }
    return aGuessT;
  }
  function LinearEasing(x) {
    return x;
  }
  var src$1 = function bezier(mX1, mY1, mX2, mY2) {
    if (!(0 <= mX1 && mX1 <= 1 && 0 <= mX2 && mX2 <= 1)) {
      throw new Error("bezier x values must be in [0, 1] range");
    }
    if (mX1 === mY1 && mX2 === mY2) {
      return LinearEasing;
    }
    var sampleValues = float32ArraySupported ? new Float32Array(kSplineTableSize) : new Array(kSplineTableSize);
    for (var i = 0; i < kSplineTableSize; ++i) {
      sampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
    }
    function getTForX(aX) {
      var intervalStart = 0;
      var currentSample = 1;
      var lastSample = kSplineTableSize - 1;
      for (; currentSample !== lastSample && sampleValues[currentSample] <= aX; ++currentSample) {
        intervalStart += kSampleStepSize;
      }
      --currentSample;
      var dist = (aX - sampleValues[currentSample]) / (sampleValues[currentSample + 1] - sampleValues[currentSample]);
      var guessForT = intervalStart + dist * kSampleStepSize;
      var initialSlope = getSlope(guessForT, mX1, mX2);
      if (initialSlope >= NEWTON_MIN_SLOPE) {
        return newtonRaphsonIterate(aX, guessForT, mX1, mX2);
      } else if (initialSlope === 0) {
        return guessForT;
      } else {
        return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize, mX1, mX2);
      }
    }
    return function BezierEasing(x) {
      if (x === 0) {
        return 0;
      }
      if (x === 1) {
        return 1;
      }
      return calcBezier(getTForX(x), mY1, mY2);
    };
  };
  var keyCodes$1 = {
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40,
    SPACE: 32,
    TAB: 9,
    PAGEUP: 33,
    PAGEDOWN: 34,
    HOME: 36,
    END: 35
  };
  var _default$2 = /* @__PURE__ */ function(_Core) {
    _inherits(_default2, _Core);
    var _super = _createSuper(_default2);
    function _default2() {
      var _this;
      var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      _classCallCheck(this, _default2);
      if (history.scrollRestoration) {
        history.scrollRestoration = "manual";
      }
      window.scrollTo(0, 0);
      _this = _super.call(this, options);
      if (_this.inertia)
        _this.lerp = _this.inertia * 0.1;
      _this.isScrolling = false;
      _this.isDraggingScrollbar = false;
      _this.isTicking = false;
      _this.hasScrollTicking = false;
      _this.parallaxElements = {};
      _this.stop = false;
      _this.scrollbarContainer = options.scrollbarContainer;
      _this.checkKey = _this.checkKey.bind(_assertThisInitialized(_this));
      window.addEventListener("keydown", _this.checkKey, false);
      return _this;
    }
    _createClass(_default2, [{
      key: "init",
      value: function init() {
        var _this2 = this;
        this.html.classList.add(this.smoothClass);
        this.html.setAttribute("data-".concat(this.name, "-direction"), this.direction);
        this.instance = _objectSpread2({
          delta: {
            x: this.initPosition.x,
            y: this.initPosition.y
          },
          scroll: {
            x: this.initPosition.x,
            y: this.initPosition.y
          }
        }, this.instance);
        this.vs = new src({
          el: this.scrollFromAnywhere ? document : this.el,
          mouseMultiplier: navigator.platform.indexOf("Win") > -1 ? 1 : 0.4,
          firefoxMultiplier: this.firefoxMultiplier,
          touchMultiplier: this.touchMultiplier,
          useKeyboard: false,
          passive: true
        });
        this.vs.on(function(e) {
          if (_this2.stop) {
            return;
          }
          if (!_this2.isDraggingScrollbar) {
            requestAnimationFrame(function() {
              _this2.updateDelta(e);
              if (!_this2.isScrolling)
                _this2.startScrolling();
            });
          }
        });
        this.setScrollLimit();
        this.initScrollBar();
        this.addSections();
        this.addElements();
        this.checkScroll(true);
        this.transformElements(true, true);
        _get(_getPrototypeOf(_default2.prototype), "init", this).call(this);
      }
    }, {
      key: "setScrollLimit",
      value: function setScrollLimit() {
        this.instance.limit.y = this.el.offsetHeight - this.windowHeight;
        if (this.direction === "horizontal") {
          var totalWidth = 0;
          var nodes = this.el.children;
          for (var i = 0; i < nodes.length; i++) {
            totalWidth += nodes[i].offsetWidth;
          }
          this.instance.limit.x = totalWidth - this.windowWidth;
        }
      }
    }, {
      key: "startScrolling",
      value: function startScrolling() {
        this.startScrollTs = Date.now();
        this.isScrolling = true;
        this.checkScroll();
        this.html.classList.add(this.scrollingClass);
      }
    }, {
      key: "stopScrolling",
      value: function stopScrolling() {
        cancelAnimationFrame(this.checkScrollRaf);
        this.startScrollTs = void 0;
        if (this.scrollToRaf) {
          cancelAnimationFrame(this.scrollToRaf);
          this.scrollToRaf = null;
        }
        this.isScrolling = false;
        this.instance.scroll.y = Math.round(this.instance.scroll.y);
        this.html.classList.remove(this.scrollingClass);
      }
    }, {
      key: "checkKey",
      value: function checkKey(e) {
        var _this3 = this;
        if (this.stop) {
          if (e.keyCode == keyCodes$1.TAB) {
            requestAnimationFrame(function() {
              _this3.html.scrollTop = 0;
              document.body.scrollTop = 0;
              _this3.html.scrollLeft = 0;
              document.body.scrollLeft = 0;
            });
          }
          return;
        }
        switch (e.keyCode) {
          case keyCodes$1.TAB:
            requestAnimationFrame(function() {
              _this3.html.scrollTop = 0;
              document.body.scrollTop = 0;
              _this3.html.scrollLeft = 0;
              document.body.scrollLeft = 0;
              _this3.scrollTo(document.activeElement, {
                offset: -window.innerHeight / 2
              });
            });
            break;
          case keyCodes$1.UP:
            if (this.isActiveElementScrollSensitive()) {
              this.instance.delta[this.directionAxis] -= 240;
            }
            break;
          case keyCodes$1.DOWN:
            if (this.isActiveElementScrollSensitive()) {
              this.instance.delta[this.directionAxis] += 240;
            }
            break;
          case keyCodes$1.PAGEUP:
            this.instance.delta[this.directionAxis] -= window.innerHeight;
            break;
          case keyCodes$1.PAGEDOWN:
            this.instance.delta[this.directionAxis] += window.innerHeight;
            break;
          case keyCodes$1.HOME:
            this.instance.delta[this.directionAxis] -= this.instance.limit[this.directionAxis];
            break;
          case keyCodes$1.END:
            this.instance.delta[this.directionAxis] += this.instance.limit[this.directionAxis];
            break;
          case keyCodes$1.SPACE:
            if (this.isActiveElementScrollSensitive()) {
              if (e.shiftKey) {
                this.instance.delta[this.directionAxis] -= window.innerHeight;
              } else {
                this.instance.delta[this.directionAxis] += window.innerHeight;
              }
            }
            break;
          default:
            return;
        }
        if (this.instance.delta[this.directionAxis] < 0)
          this.instance.delta[this.directionAxis] = 0;
        if (this.instance.delta[this.directionAxis] > this.instance.limit[this.directionAxis])
          this.instance.delta[this.directionAxis] = this.instance.limit[this.directionAxis];
        this.stopScrolling();
        this.isScrolling = true;
        this.checkScroll();
        this.html.classList.add(this.scrollingClass);
      }
    }, {
      key: "isActiveElementScrollSensitive",
      value: function isActiveElementScrollSensitive() {
        return !(document.activeElement instanceof HTMLInputElement) && !(document.activeElement instanceof HTMLTextAreaElement) && !(document.activeElement instanceof HTMLButtonElement) && !(document.activeElement instanceof HTMLSelectElement);
      }
    }, {
      key: "checkScroll",
      value: function checkScroll() {
        var _this4 = this;
        var forced = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
        if (forced || this.isScrolling || this.isDraggingScrollbar) {
          if (!this.hasScrollTicking) {
            this.checkScrollRaf = requestAnimationFrame(function() {
              return _this4.checkScroll();
            });
            this.hasScrollTicking = true;
          }
          this.updateScroll();
          var distance = Math.abs(this.instance.delta[this.directionAxis] - this.instance.scroll[this.directionAxis]);
          var timeSinceStart = Date.now() - this.startScrollTs;
          if (!this.animatingScroll && timeSinceStart > 100 && (distance < 0.5 && this.instance.delta[this.directionAxis] != 0 || distance < 0.5 && this.instance.delta[this.directionAxis] == 0)) {
            this.stopScrolling();
          }
          Object.entries(this.sections).forEach(function(_ref) {
            var _ref2 = _slicedToArray(_ref, 2), i = _ref2[0], section = _ref2[1];
            if (section.persistent || _this4.instance.scroll[_this4.directionAxis] > section.offset[_this4.directionAxis] && _this4.instance.scroll[_this4.directionAxis] < section.limit[_this4.directionAxis]) {
              if (_this4.direction === "horizontal") {
                _this4.transform(section.el, -_this4.instance.scroll[_this4.directionAxis], 0);
              } else {
                _this4.transform(section.el, 0, -_this4.instance.scroll[_this4.directionAxis]);
              }
              if (!section.inView) {
                section.inView = true;
                section.el.style.opacity = 1;
                section.el.style.pointerEvents = "all";
                section.el.setAttribute("data-".concat(_this4.name, "-section-inview"), "");
              }
            } else {
              if (section.inView || forced) {
                section.inView = false;
                section.el.style.opacity = 0;
                section.el.style.pointerEvents = "none";
                section.el.removeAttribute("data-".concat(_this4.name, "-section-inview"));
              }
              _this4.transform(section.el, 0, 0);
            }
          });
          if (this.getDirection) {
            this.addDirection();
          }
          if (this.getSpeed) {
            this.addSpeed();
            this.speedTs = Date.now();
          }
          this.detectElements();
          this.transformElements();
          if (this.hasScrollbar) {
            var scrollBarTranslation = this.instance.scroll[this.directionAxis] / this.instance.limit[this.directionAxis] * this.scrollBarLimit[this.directionAxis];
            if (this.direction === "horizontal") {
              this.transform(this.scrollbarThumb, scrollBarTranslation, 0);
            } else {
              this.transform(this.scrollbarThumb, 0, scrollBarTranslation);
            }
          }
          _get(_getPrototypeOf(_default2.prototype), "checkScroll", this).call(this);
          this.hasScrollTicking = false;
        }
      }
    }, {
      key: "resize",
      value: function resize() {
        this.windowHeight = window.innerHeight;
        this.windowWidth = window.innerWidth;
        this.checkContext();
        this.windowMiddle = {
          x: this.windowWidth / 2,
          y: this.windowHeight / 2
        };
        this.update();
      }
    }, {
      key: "updateDelta",
      value: function updateDelta(e) {
        var delta;
        var gestureDirection = this[this.context] && this[this.context].gestureDirection ? this[this.context].gestureDirection : this.gestureDirection;
        if (gestureDirection === "both") {
          delta = e.deltaX + e.deltaY;
        } else if (gestureDirection === "vertical") {
          delta = e.deltaY;
        } else if (gestureDirection === "horizontal") {
          delta = e.deltaX;
        } else {
          delta = e.deltaY;
        }
        this.instance.delta[this.directionAxis] -= delta * this.multiplier;
        if (this.instance.delta[this.directionAxis] < 0)
          this.instance.delta[this.directionAxis] = 0;
        if (this.instance.delta[this.directionAxis] > this.instance.limit[this.directionAxis])
          this.instance.delta[this.directionAxis] = this.instance.limit[this.directionAxis];
      }
    }, {
      key: "updateScroll",
      value: function updateScroll(e) {
        if (this.isScrolling || this.isDraggingScrollbar) {
          this.instance.scroll[this.directionAxis] = lerp(this.instance.scroll[this.directionAxis], this.instance.delta[this.directionAxis], this.lerp);
        } else {
          if (this.instance.scroll[this.directionAxis] > this.instance.limit[this.directionAxis]) {
            this.setScroll(this.instance.scroll[this.directionAxis], this.instance.limit[this.directionAxis]);
          } else if (this.instance.scroll.y < 0) {
            this.setScroll(this.instance.scroll[this.directionAxis], 0);
          } else {
            this.setScroll(this.instance.scroll[this.directionAxis], this.instance.delta[this.directionAxis]);
          }
        }
      }
    }, {
      key: "addDirection",
      value: function addDirection() {
        if (this.instance.delta.y > this.instance.scroll.y) {
          if (this.instance.direction !== "down") {
            this.instance.direction = "down";
          }
        } else if (this.instance.delta.y < this.instance.scroll.y) {
          if (this.instance.direction !== "up") {
            this.instance.direction = "up";
          }
        }
        if (this.instance.delta.x > this.instance.scroll.x) {
          if (this.instance.direction !== "right") {
            this.instance.direction = "right";
          }
        } else if (this.instance.delta.x < this.instance.scroll.x) {
          if (this.instance.direction !== "left") {
            this.instance.direction = "left";
          }
        }
      }
    }, {
      key: "addSpeed",
      value: function addSpeed() {
        if (this.instance.delta[this.directionAxis] != this.instance.scroll[this.directionAxis]) {
          this.instance.speed = (this.instance.delta[this.directionAxis] - this.instance.scroll[this.directionAxis]) / Math.max(1, Date.now() - this.speedTs);
        } else {
          this.instance.speed = 0;
        }
      }
    }, {
      key: "initScrollBar",
      value: function initScrollBar() {
        this.scrollbar = document.createElement("span");
        this.scrollbarThumb = document.createElement("span");
        this.scrollbar.classList.add("".concat(this.scrollbarClass));
        this.scrollbarThumb.classList.add("".concat(this.scrollbarClass, "_thumb"));
        this.scrollbar.append(this.scrollbarThumb);
        if (this.scrollbarContainer) {
          this.scrollbarContainer.append(this.scrollbar);
        } else {
          document.body.append(this.scrollbar);
        }
        this.getScrollBar = this.getScrollBar.bind(this);
        this.releaseScrollBar = this.releaseScrollBar.bind(this);
        this.moveScrollBar = this.moveScrollBar.bind(this);
        this.scrollbarThumb.addEventListener("mousedown", this.getScrollBar);
        window.addEventListener("mouseup", this.releaseScrollBar);
        window.addEventListener("mousemove", this.moveScrollBar);
        this.hasScrollbar = false;
        if (this.direction == "horizontal") {
          if (this.instance.limit.x + this.windowWidth <= this.windowWidth) {
            return;
          }
        } else {
          if (this.instance.limit.y + this.windowHeight <= this.windowHeight) {
            return;
          }
        }
        this.hasScrollbar = true;
        this.scrollbarBCR = this.scrollbar.getBoundingClientRect();
        this.scrollbarHeight = this.scrollbarBCR.height;
        this.scrollbarWidth = this.scrollbarBCR.width;
        if (this.direction === "horizontal") {
          this.scrollbarThumb.style.width = "".concat(this.scrollbarWidth * this.scrollbarWidth / (this.instance.limit.x + this.scrollbarWidth), "px");
        } else {
          this.scrollbarThumb.style.height = "".concat(this.scrollbarHeight * this.scrollbarHeight / (this.instance.limit.y + this.scrollbarHeight), "px");
        }
        this.scrollbarThumbBCR = this.scrollbarThumb.getBoundingClientRect();
        this.scrollBarLimit = {
          x: this.scrollbarWidth - this.scrollbarThumbBCR.width,
          y: this.scrollbarHeight - this.scrollbarThumbBCR.height
        };
      }
    }, {
      key: "reinitScrollBar",
      value: function reinitScrollBar() {
        this.hasScrollbar = false;
        if (this.direction == "horizontal") {
          if (this.instance.limit.x + this.windowWidth <= this.windowWidth) {
            return;
          }
        } else {
          if (this.instance.limit.y + this.windowHeight <= this.windowHeight) {
            return;
          }
        }
        this.hasScrollbar = true;
        this.scrollbarBCR = this.scrollbar.getBoundingClientRect();
        this.scrollbarHeight = this.scrollbarBCR.height;
        this.scrollbarWidth = this.scrollbarBCR.width;
        if (this.direction === "horizontal") {
          this.scrollbarThumb.style.width = "".concat(this.scrollbarWidth * this.scrollbarWidth / (this.instance.limit.x + this.scrollbarWidth), "px");
        } else {
          this.scrollbarThumb.style.height = "".concat(this.scrollbarHeight * this.scrollbarHeight / (this.instance.limit.y + this.scrollbarHeight), "px");
        }
        this.scrollbarThumbBCR = this.scrollbarThumb.getBoundingClientRect();
        this.scrollBarLimit = {
          x: this.scrollbarWidth - this.scrollbarThumbBCR.width,
          y: this.scrollbarHeight - this.scrollbarThumbBCR.height
        };
      }
    }, {
      key: "destroyScrollBar",
      value: function destroyScrollBar() {
        this.scrollbarThumb.removeEventListener("mousedown", this.getScrollBar);
        window.removeEventListener("mouseup", this.releaseScrollBar);
        window.removeEventListener("mousemove", this.moveScrollBar);
        this.scrollbar.remove();
      }
    }, {
      key: "getScrollBar",
      value: function getScrollBar(e) {
        this.isDraggingScrollbar = true;
        this.checkScroll();
        this.html.classList.remove(this.scrollingClass);
        this.html.classList.add(this.draggingClass);
      }
    }, {
      key: "releaseScrollBar",
      value: function releaseScrollBar(e) {
        this.isDraggingScrollbar = false;
        if (this.isScrolling) {
          this.html.classList.add(this.scrollingClass);
        }
        this.html.classList.remove(this.draggingClass);
      }
    }, {
      key: "moveScrollBar",
      value: function moveScrollBar(e) {
        var _this5 = this;
        if (this.isDraggingScrollbar) {
          requestAnimationFrame(function() {
            var x = (e.clientX - _this5.scrollbarBCR.left) * 100 / _this5.scrollbarWidth * _this5.instance.limit.x / 100;
            var y = (e.clientY - _this5.scrollbarBCR.top) * 100 / _this5.scrollbarHeight * _this5.instance.limit.y / 100;
            if (y > 0 && y < _this5.instance.limit.y) {
              _this5.instance.delta.y = y;
            }
            if (x > 0 && x < _this5.instance.limit.x) {
              _this5.instance.delta.x = x;
            }
          });
        }
      }
    }, {
      key: "addElements",
      value: function addElements() {
        var _this6 = this;
        this.els = {};
        this.parallaxElements = {};
        var els = this.el.querySelectorAll("[data-".concat(this.name, "]"));
        els.forEach(function(el, index) {
          var targetParents = getParents(el);
          var section = Object.entries(_this6.sections).map(function(_ref3) {
            var _ref4 = _slicedToArray(_ref3, 2), key = _ref4[0], section2 = _ref4[1];
            return section2;
          }).find(function(section2) {
            return targetParents.includes(section2.el);
          });
          var cl = el.dataset[_this6.name + "Class"] || _this6["class"];
          var id = typeof el.dataset[_this6.name + "Id"] === "string" ? el.dataset[_this6.name + "Id"] : "el" + index;
          var top;
          var left;
          var repeat = el.dataset[_this6.name + "Repeat"];
          var call = el.dataset[_this6.name + "Call"];
          var position = el.dataset[_this6.name + "Position"];
          var delay = el.dataset[_this6.name + "Delay"];
          var direction = el.dataset[_this6.name + "Direction"];
          var sticky = typeof el.dataset[_this6.name + "Sticky"] === "string";
          var speed = el.dataset[_this6.name + "Speed"] ? parseFloat(el.dataset[_this6.name + "Speed"]) / 10 : false;
          var offset = typeof el.dataset[_this6.name + "Offset"] === "string" ? el.dataset[_this6.name + "Offset"].split(",") : _this6.offset;
          var target = el.dataset[_this6.name + "Target"];
          var targetEl;
          if (target !== void 0) {
            targetEl = document.querySelector("".concat(target));
          } else {
            targetEl = el;
          }
          var targetElBCR = targetEl.getBoundingClientRect();
          if (section === null) {
            top = targetElBCR.top + _this6.instance.scroll.y - getTranslate(targetEl).y;
            left = targetElBCR.left + _this6.instance.scroll.x - getTranslate(targetEl).x;
          } else {
            if (!section.inView) {
              top = targetElBCR.top - getTranslate(section.el).y - getTranslate(targetEl).y;
              left = targetElBCR.left - getTranslate(section.el).x - getTranslate(targetEl).x;
            } else {
              top = targetElBCR.top + _this6.instance.scroll.y - getTranslate(targetEl).y;
              left = targetElBCR.left + _this6.instance.scroll.x - getTranslate(targetEl).x;
            }
          }
          var bottom = top + targetEl.offsetHeight;
          var right = left + targetEl.offsetWidth;
          var middle = {
            x: (right - left) / 2 + left,
            y: (bottom - top) / 2 + top
          };
          if (sticky) {
            var elBCR = el.getBoundingClientRect();
            var elTop = elBCR.top;
            var elLeft = elBCR.left;
            var elDistance = {
              x: elLeft - left,
              y: elTop - top
            };
            top += window.innerHeight;
            left += window.innerWidth;
            bottom = elTop + targetEl.offsetHeight - el.offsetHeight - elDistance[_this6.directionAxis];
            right = elLeft + targetEl.offsetWidth - el.offsetWidth - elDistance[_this6.directionAxis];
            middle = {
              x: (right - left) / 2 + left,
              y: (bottom - top) / 2 + top
            };
          }
          if (repeat == "false") {
            repeat = false;
          } else if (repeat != void 0) {
            repeat = true;
          } else {
            repeat = _this6.repeat;
          }
          var relativeOffset = [0, 0];
          if (offset) {
            if (_this6.direction === "horizontal") {
              for (var i = 0; i < offset.length; i++) {
                if (typeof offset[i] == "string") {
                  if (offset[i].includes("%")) {
                    relativeOffset[i] = parseInt(offset[i].replace("%", "") * _this6.windowWidth / 100);
                  } else {
                    relativeOffset[i] = parseInt(offset[i]);
                  }
                } else {
                  relativeOffset[i] = offset[i];
                }
              }
              left = left + relativeOffset[0];
              right = right - relativeOffset[1];
            } else {
              for (var i = 0; i < offset.length; i++) {
                if (typeof offset[i] == "string") {
                  if (offset[i].includes("%")) {
                    relativeOffset[i] = parseInt(offset[i].replace("%", "") * _this6.windowHeight / 100);
                  } else {
                    relativeOffset[i] = parseInt(offset[i]);
                  }
                } else {
                  relativeOffset[i] = offset[i];
                }
              }
              top = top + relativeOffset[0];
              bottom = bottom - relativeOffset[1];
            }
          }
          var mappedEl = {
            el,
            id,
            "class": cl,
            section,
            top,
            middle,
            bottom,
            left,
            right,
            offset,
            progress: 0,
            repeat,
            inView: false,
            call,
            speed,
            delay,
            position,
            target: targetEl,
            direction,
            sticky
          };
          _this6.els[id] = mappedEl;
          if (el.classList.contains(cl)) {
            _this6.setInView(_this6.els[id], id);
          }
          if (speed !== false || sticky) {
            _this6.parallaxElements[id] = mappedEl;
          }
        });
      }
    }, {
      key: "addSections",
      value: function addSections() {
        var _this7 = this;
        this.sections = {};
        var sections = this.el.querySelectorAll("[data-".concat(this.name, "-section]"));
        if (sections.length === 0) {
          sections = [this.el];
        }
        sections.forEach(function(section, index) {
          var id = typeof section.dataset[_this7.name + "Id"] === "string" ? section.dataset[_this7.name + "Id"] : "section" + index;
          var sectionBCR = section.getBoundingClientRect();
          var offset = {
            x: sectionBCR.left - window.innerWidth * 1.5 - getTranslate(section).x,
            y: sectionBCR.top - window.innerHeight * 1.5 - getTranslate(section).y
          };
          var limit = {
            x: offset.x + sectionBCR.width + window.innerWidth * 2,
            y: offset.y + sectionBCR.height + window.innerHeight * 2
          };
          var persistent = typeof section.dataset[_this7.name + "Persistent"] === "string";
          section.setAttribute("data-scroll-section-id", id);
          var mappedSection = {
            el: section,
            offset,
            limit,
            inView: false,
            persistent,
            id
          };
          _this7.sections[id] = mappedSection;
        });
      }
    }, {
      key: "transform",
      value: function transform(element, x, y, delay) {
        var transform2;
        if (!delay) {
          transform2 = "matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,".concat(x, ",").concat(y, ",0,1)");
        } else {
          var start = getTranslate(element);
          var lerpX = lerp(start.x, x, delay);
          var lerpY = lerp(start.y, y, delay);
          transform2 = "matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,".concat(lerpX, ",").concat(lerpY, ",0,1)");
        }
        element.style.webkitTransform = transform2;
        element.style.msTransform = transform2;
        element.style.transform = transform2;
      }
    }, {
      key: "transformElements",
      value: function transformElements(isForced) {
        var _this8 = this;
        var setAllElements = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
        var scrollRight = this.instance.scroll.x + this.windowWidth;
        var scrollBottom = this.instance.scroll.y + this.windowHeight;
        var scrollMiddle = {
          x: this.instance.scroll.x + this.windowMiddle.x,
          y: this.instance.scroll.y + this.windowMiddle.y
        };
        Object.entries(this.parallaxElements).forEach(function(_ref5) {
          var _ref6 = _slicedToArray(_ref5, 2), i = _ref6[0], current = _ref6[1];
          var transformDistance = false;
          if (isForced) {
            transformDistance = 0;
          }
          if (current.inView || setAllElements) {
            switch (current.position) {
              case "top":
                transformDistance = _this8.instance.scroll[_this8.directionAxis] * -current.speed;
                break;
              case "elementTop":
                transformDistance = (scrollBottom - current.top) * -current.speed;
                break;
              case "bottom":
                transformDistance = (_this8.instance.limit[_this8.directionAxis] - scrollBottom + _this8.windowHeight) * current.speed;
                break;
              case "left":
                transformDistance = _this8.instance.scroll[_this8.directionAxis] * -current.speed;
                break;
              case "elementLeft":
                transformDistance = (scrollRight - current.left) * -current.speed;
                break;
              case "right":
                transformDistance = (_this8.instance.limit[_this8.directionAxis] - scrollRight + _this8.windowHeight) * current.speed;
                break;
              default:
                transformDistance = (scrollMiddle[_this8.directionAxis] - current.middle[_this8.directionAxis]) * -current.speed;
                break;
            }
          }
          if (current.sticky) {
            if (current.inView) {
              if (_this8.direction === "horizontal") {
                transformDistance = _this8.instance.scroll.x - current.left + window.innerWidth;
              } else {
                transformDistance = _this8.instance.scroll.y - current.top + window.innerHeight;
              }
            } else {
              if (_this8.direction === "horizontal") {
                if (_this8.instance.scroll.x < current.left - window.innerWidth && _this8.instance.scroll.x < current.left - window.innerWidth / 2) {
                  transformDistance = 0;
                } else if (_this8.instance.scroll.x > current.right && _this8.instance.scroll.x > current.right + 100) {
                  transformDistance = current.right - current.left + window.innerWidth;
                } else {
                  transformDistance = false;
                }
              } else {
                if (_this8.instance.scroll.y < current.top - window.innerHeight && _this8.instance.scroll.y < current.top - window.innerHeight / 2) {
                  transformDistance = 0;
                } else if (_this8.instance.scroll.y > current.bottom && _this8.instance.scroll.y > current.bottom + 100) {
                  transformDistance = current.bottom - current.top + window.innerHeight;
                } else {
                  transformDistance = false;
                }
              }
            }
          }
          if (transformDistance !== false) {
            if (current.direction === "horizontal" || _this8.direction === "horizontal" && current.direction !== "vertical") {
              _this8.transform(current.el, transformDistance, 0, isForced ? false : current.delay);
            } else {
              _this8.transform(current.el, 0, transformDistance, isForced ? false : current.delay);
            }
          }
        });
      }
    }, {
      key: "scrollTo",
      value: function scrollTo(target) {
        var _this9 = this;
        var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        var offset = parseInt(options.offset) || 0;
        var duration = !isNaN(parseInt(options.duration)) ? parseInt(options.duration) : 1e3;
        var easing = options.easing || [0.25, 0, 0.35, 1];
        var disableLerp = options.disableLerp ? true : false;
        var callback = options.callback ? options.callback : false;
        easing = src$1.apply(void 0, _toConsumableArray(easing));
        if (typeof target === "string") {
          if (target === "top") {
            target = 0;
          } else if (target === "bottom") {
            target = this.instance.limit.y;
          } else if (target === "left") {
            target = 0;
          } else if (target === "right") {
            target = this.instance.limit.x;
          } else {
            target = document.querySelector(target);
            if (!target) {
              return;
            }
          }
        } else if (typeof target === "number") {
          target = parseInt(target);
        } else if (target && target.tagName)
          ;
        else {
          console.warn("`target` parameter is not valid");
          return;
        }
        if (typeof target !== "number") {
          var targetInScope = getParents(target).includes(this.el);
          if (!targetInScope) {
            return;
          }
          var targetBCR = target.getBoundingClientRect();
          var offsetTop = targetBCR.top;
          var offsetLeft = targetBCR.left;
          var targetParents = getParents(target);
          var parentSection = targetParents.find(function(candidate) {
            return Object.entries(_this9.sections).map(function(_ref7) {
              var _ref8 = _slicedToArray(_ref7, 2), key = _ref8[0], section = _ref8[1];
              return section;
            }).find(function(section) {
              return section.el == candidate;
            });
          });
          var parentSectionOffset = 0;
          if (parentSection) {
            parentSectionOffset = getTranslate(parentSection)[this.directionAxis];
          } else {
            parentSectionOffset = -this.instance.scroll[this.directionAxis];
          }
          if (this.direction === "horizontal") {
            offset = offsetLeft + offset - parentSectionOffset;
          } else {
            offset = offsetTop + offset - parentSectionOffset;
          }
        } else {
          offset = target + offset;
        }
        var scrollStart = parseFloat(this.instance.delta[this.directionAxis]);
        var scrollTarget = Math.max(0, Math.min(offset, this.instance.limit[this.directionAxis]));
        var scrollDiff = scrollTarget - scrollStart;
        var render = function render2(p) {
          if (disableLerp) {
            if (_this9.direction === "horizontal") {
              _this9.setScroll(scrollStart + scrollDiff * p, _this9.instance.delta.y);
            } else {
              _this9.setScroll(_this9.instance.delta.x, scrollStart + scrollDiff * p);
            }
          } else {
            _this9.instance.delta[_this9.directionAxis] = scrollStart + scrollDiff * p;
          }
        };
        this.animatingScroll = true;
        this.stopScrolling();
        this.startScrolling();
        var start = Date.now();
        var loop = function loop2() {
          var p = (Date.now() - start) / duration;
          if (p > 1) {
            render(1);
            _this9.animatingScroll = false;
            if (duration == 0)
              _this9.update();
            if (callback)
              callback();
          } else {
            _this9.scrollToRaf = requestAnimationFrame(loop2);
            render(easing(p));
          }
        };
        loop();
      }
    }, {
      key: "update",
      value: function update() {
        this.setScrollLimit();
        this.addSections();
        this.addElements();
        this.detectElements();
        this.updateScroll();
        this.transformElements(true);
        this.reinitScrollBar();
        this.checkScroll(true);
      }
    }, {
      key: "startScroll",
      value: function startScroll() {
        this.stop = false;
      }
    }, {
      key: "stopScroll",
      value: function stopScroll() {
        this.stop = true;
      }
    }, {
      key: "setScroll",
      value: function setScroll(x, y) {
        this.instance = _objectSpread2(_objectSpread2({}, this.instance), {}, {
          scroll: {
            x,
            y
          },
          delta: {
            x,
            y
          },
          speed: 0
        });
      }
    }, {
      key: "destroy",
      value: function destroy() {
        _get(_getPrototypeOf(_default2.prototype), "destroy", this).call(this);
        this.stopScrolling();
        this.html.classList.remove(this.smoothClass);
        this.vs.destroy();
        this.destroyScrollBar();
        window.removeEventListener("keydown", this.checkKey, false);
      }
    }]);
    return _default2;
  }(_default);
  var Smooth = /* @__PURE__ */ function() {
    function Smooth2() {
      var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      _classCallCheck(this, Smooth2);
      this.options = options;
      Object.assign(this, defaults, options);
      this.smartphone = defaults.smartphone;
      if (options.smartphone)
        Object.assign(this.smartphone, options.smartphone);
      this.tablet = defaults.tablet;
      if (options.tablet)
        Object.assign(this.tablet, options.tablet);
      if (!this.smooth && this.direction == "horizontal")
        console.warn("\u{1F6A8} `smooth:false` & `horizontal` direction are not yet compatible");
      if (!this.tablet.smooth && this.tablet.direction == "horizontal")
        console.warn("\u{1F6A8} `smooth:false` & `horizontal` direction are not yet compatible (tablet)");
      if (!this.smartphone.smooth && this.smartphone.direction == "horizontal")
        console.warn("\u{1F6A8} `smooth:false` & `horizontal` direction are not yet compatible (smartphone)");
      this.init();
    }
    _createClass(Smooth2, [{
      key: "init",
      value: function init() {
        this.options.isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1 || window.innerWidth < this.tablet.breakpoint;
        this.options.isTablet = this.options.isMobile && window.innerWidth >= this.tablet.breakpoint;
        if (this.smooth && !this.options.isMobile || this.tablet.smooth && this.options.isTablet || this.smartphone.smooth && this.options.isMobile && !this.options.isTablet) {
          this.scroll = new _default$2(this.options);
        } else {
          this.scroll = new _default$1(this.options);
        }
        this.scroll.init();
        if (window.location.hash) {
          var id = window.location.hash.slice(1, window.location.hash.length);
          var target = document.getElementById(id);
          if (target)
            this.scroll.scrollTo(target);
        }
      }
    }, {
      key: "update",
      value: function update() {
        this.scroll.update();
      }
    }, {
      key: "start",
      value: function start() {
        this.scroll.startScroll();
      }
    }, {
      key: "stop",
      value: function stop() {
        this.scroll.stopScroll();
      }
    }, {
      key: "scrollTo",
      value: function scrollTo(target, options) {
        this.scroll.scrollTo(target, options);
      }
    }, {
      key: "setScroll",
      value: function setScroll(x, y) {
        this.scroll.setScroll(x, y);
      }
    }, {
      key: "on",
      value: function on(event, func) {
        this.scroll.setEvents(event, func);
      }
    }, {
      key: "off",
      value: function off(event, func) {
        this.scroll.unsetEvents(event, func);
      }
    }, {
      key: "destroy",
      value: function destroy() {
        this.scroll.destroy();
      }
    }]);
    return Smooth2;
  }();
  var locomotive_scroll_esm_default = Smooth;

  // node_modules/mouse-follower/dist/index.module.js
  var MouseFollower = /* @__PURE__ */ function() {
    MouseFollower2.registerGSAP = function registerGSAP(gsap2) {
      MouseFollower2.gsap = gsap2;
    };
    function MouseFollower2(options) {
      if (options === void 0) {
        options = {};
      }
      this.options = Object.assign({}, {
        el: null,
        container: document.body,
        className: "mf-cursor",
        innerClassName: "mf-cursor-inner",
        textClassName: "mf-cursor-text",
        mediaClassName: "mf-cursor-media",
        mediaBoxClassName: "mf-cursor-media-box",
        iconSvgClassName: "mf-svgsprite",
        iconSvgNamePrefix: "-",
        iconSvgSrc: "",
        dataAttr: "cursor",
        hiddenState: "-hidden",
        textState: "-text",
        iconState: "-icon",
        activeState: "-active",
        mediaState: "-media",
        stateDetection: {
          "-pointer": "a,button"
        },
        visible: true,
        visibleOnState: false,
        speed: 0.55,
        ease: "expo.out",
        overwrite: true,
        skewing: 0,
        skewingText: 2,
        skewingIcon: 2,
        skewingMedia: 2,
        skewingDelta: 1e-3,
        skewingDeltaMax: 0.15,
        stickDelta: 0.15,
        showTimeout: 0,
        hideOnLeave: true,
        hideTimeout: 300,
        hideMediaTimeout: 300,
        initialPos: [-window.innerWidth, -window.innerHeight]
      }, options);
      if (this.options.visible && options.stateDetection == null)
        this.options.stateDetection["-hidden"] = "iframe";
      this.gsap = MouseFollower2.gsap || window.gsap;
      this.el = typeof this.options.el === "string" ? document.querySelector(this.options.el) : this.options.el;
      this.container = typeof this.options.container === "string" ? document.querySelector(this.options.container) : this.options.container;
      this.skewing = this.options.skewing;
      this.pos = {
        x: this.options.initialPos[0],
        y: this.options.initialPos[1]
      };
      this.vel = {
        x: 0,
        y: 0
      };
      this.event = {};
      this.events = [];
      this.init();
    }
    var _proto = MouseFollower2.prototype;
    _proto.init = function init() {
      if (!this.el)
        this.create();
      this.createSetter();
      this.bind();
      this.render(true);
      this.ticker = this.render.bind(this, false);
      this.gsap.ticker.add(this.ticker);
    };
    _proto.create = function create() {
      this.el = document.createElement("div");
      this.el.className = this.options.className;
      this.el.classList.add(this.options.hiddenState);
      this.inner = document.createElement("div");
      this.inner.className = this.options.innerClassName;
      this.text = document.createElement("div");
      this.text.className = this.options.textClassName;
      this.media = document.createElement("div");
      this.media.className = this.options.mediaClassName;
      this.mediaBox = document.createElement("div");
      this.mediaBox.className = this.options.mediaBoxClassName;
      this.media.appendChild(this.mediaBox);
      this.inner.appendChild(this.media);
      this.inner.appendChild(this.text);
      this.el.appendChild(this.inner);
      this.container.appendChild(this.el);
    };
    _proto.createSetter = function createSetter() {
      this.setter = {
        x: this.gsap.quickSetter(this.el, "x", "px"),
        y: this.gsap.quickSetter(this.el, "y", "px"),
        rotation: this.gsap.quickSetter(this.el, "rotation", "deg"),
        scaleX: this.gsap.quickSetter(this.el, "scaleX"),
        scaleY: this.gsap.quickSetter(this.el, "scaleY"),
        wc: this.gsap.quickSetter(this.el, "willChange"),
        inner: {
          rotation: this.gsap.quickSetter(this.inner, "rotation", "deg")
        }
      };
    };
    _proto.bind = function bind2() {
      var _this = this;
      this.event.mouseleave = function() {
        return _this.hide();
      };
      this.event.mouseenter = function() {
        return _this.show();
      };
      this.event.mousedown = function() {
        return _this.addState(_this.options.activeState);
      };
      this.event.mouseup = function() {
        return _this.removeState(_this.options.activeState);
      };
      this.event.mousemoveOnce = function() {
        return _this.show();
      };
      this.event.mousemove = function(e) {
        _this.gsap.to(_this.pos, {
          x: _this.stick ? _this.stick.x - (_this.stick.x - e.clientX) * _this.options.stickDelta : e.clientX,
          y: _this.stick ? _this.stick.y - (_this.stick.y - e.clientY) * _this.options.stickDelta : e.clientY,
          overwrite: _this.options.overwrite,
          ease: _this.options.ease,
          duration: _this.visible ? _this.options.speed : 0,
          onUpdate: function onUpdate() {
            return _this.vel = {
              x: e.clientX - _this.pos.x,
              y: e.clientY - _this.pos.y
            };
          }
        });
      };
      this.event.mouseover = function(e) {
        for (var target = e.target; target && target !== _this.container; target = target.parentNode) {
          if (e.relatedTarget && target.contains(e.relatedTarget))
            break;
          for (var state in _this.options.stateDetection) {
            if (target.matches(_this.options.stateDetection[state]))
              _this.addState(state);
          }
          if (_this.options.dataAttr) {
            var params = _this.getFromDataset(target);
            if (params.state)
              _this.addState(params.state);
            if (params.text)
              _this.setText(params.text);
            if (params.icon)
              _this.setIcon(params.icon);
            if (params.img)
              _this.setImg(params.img);
            if (params.video)
              _this.setVideo(params.video);
            if (typeof params.show !== "undefined")
              _this.show();
            if (typeof params.stick !== "undefined")
              _this.setStick(params.stick || target);
          }
        }
      };
      this.event.mouseout = function(e) {
        for (var target = e.target; target && target !== _this.container; target = target.parentNode) {
          if (e.relatedTarget && target.contains(e.relatedTarget))
            break;
          for (var state in _this.options.stateDetection) {
            if (target.matches(_this.options.stateDetection[state]))
              _this.removeState(state);
          }
          if (_this.options.dataAttr) {
            var params = _this.getFromDataset(target);
            if (params.state)
              _this.removeState(params.state);
            if (params.text)
              _this.removeText();
            if (params.icon)
              _this.removeIcon();
            if (params.img)
              _this.removeImg();
            if (params.video)
              _this.removeVideo();
            if (typeof params.show !== "undefined")
              _this.hide();
            if (typeof params.stick !== "undefined")
              _this.removeStick();
          }
        }
      };
      if (this.options.hideOnLeave) {
        this.container.addEventListener("mouseleave", this.event.mouseleave, {
          passive: true
        });
      }
      if (this.options.visible) {
        this.container.addEventListener("mouseenter", this.event.mouseenter, {
          passive: true
        });
      }
      if (this.options.activeState) {
        this.container.addEventListener("mousedown", this.event.mousedown, {
          passive: true
        });
        this.container.addEventListener("mouseup", this.event.mouseup, {
          passive: true
        });
      }
      this.container.addEventListener("mousemove", this.event.mousemove, {
        passive: true
      });
      if (this.options.visible) {
        this.container.addEventListener("mousemove", this.event.mousemoveOnce, {
          passive: true,
          once: true
        });
      }
      if (this.options.stateDetection || this.options.dataAttr) {
        this.container.addEventListener("mouseover", this.event.mouseover, {
          passive: true
        });
        this.container.addEventListener("mouseout", this.event.mouseout, {
          passive: true
        });
      }
    };
    _proto.render = function render(force) {
      if (force !== true && (this.vel.y === 0 || this.vel.x === 0)) {
        this.setter.wc("auto");
        return;
      }
      this.trigger("render");
      this.setter.wc("transform");
      this.setter.x(this.pos.x);
      this.setter.y(this.pos.y);
      if (this.skewing) {
        var distance = Math.sqrt(Math.pow(this.vel.x, 2) + Math.pow(this.vel.y, 2));
        var scale = Math.min(distance * this.options.skewingDelta, this.options.skewingDeltaMax) * this.skewing;
        var angle = Math.atan2(this.vel.y, this.vel.x) * 180 / Math.PI;
        this.setter.rotation(angle);
        this.setter.scaleX(1 + scale);
        this.setter.scaleY(1 - scale);
        this.setter.inner.rotation(-angle);
      }
    };
    _proto.show = function show() {
      var _this2 = this;
      this.trigger("show");
      clearInterval(this.visibleInt);
      this.visibleInt = setTimeout(function() {
        _this2.el.classList.remove(_this2.options.hiddenState);
        _this2.visible = true;
        _this2.render(true);
      }, this.options.showTimeout);
    };
    _proto.hide = function hide() {
      var _this3 = this;
      this.trigger("hide");
      clearInterval(this.visibleInt);
      this.el.classList.add(this.options.hiddenState);
      this.visibleInt = setTimeout(function() {
        return _this3.visible = false;
      }, this.options.hideTimeout);
    };
    _proto.toggle = function toggle(force) {
      if (force === true || force !== false && !this.visible) {
        this.show();
      } else {
        this.hide();
      }
    };
    _proto.addState = function addState(state) {
      var _this$el$classList;
      this.trigger("addState", state);
      if (state === this.options.hiddenState)
        return this.hide();
      (_this$el$classList = this.el.classList).add.apply(_this$el$classList, state.split(" "));
      if (this.options.visibleOnState)
        this.show();
    };
    _proto.removeState = function removeState(state) {
      var _this$el$classList2;
      this.trigger("removeState", state);
      if (state === this.options.hiddenState)
        return this.show();
      (_this$el$classList2 = this.el.classList).remove.apply(_this$el$classList2, state.split(" "));
      if (this.options.visibleOnState && this.el.className === this.options.className)
        this.hide();
    };
    _proto.toggleState = function toggleState(state, force) {
      if (force === true || force !== false && !this.el.classList.contains(state)) {
        this.addState(state);
      } else {
        this.removeState(state);
      }
    };
    _proto.setSkewing = function setSkewing(value) {
      this.gsap.to(this, {
        skewing: value
      });
    };
    _proto.removeSkewing = function removeSkewing() {
      this.gsap.to(this, {
        skewing: this.options.skewing
      });
    };
    _proto.setStick = function setStick(element) {
      var el = typeof element === "string" ? document.querySelector(element) : element;
      var rect = el.getBoundingClientRect();
      this.stick = {
        y: rect.top + rect.height / 2,
        x: rect.left + rect.width / 2
      };
    };
    _proto.removeStick = function removeStick() {
      this.stick = false;
    };
    _proto.setText = function setText(text) {
      this.text.innerHTML = text;
      this.addState(this.options.textState);
      this.setSkewing(this.options.skewingText);
    };
    _proto.removeText = function removeText() {
      this.removeState(this.options.textState);
      this.removeSkewing();
    };
    _proto.setIcon = function setIcon(name, style) {
      if (style === void 0) {
        style = "";
      }
      this.text.innerHTML = "<svg class='" + this.options.iconSvgClassName + " " + this.options.iconSvgNamePrefix + name + "'" + (" style='" + style + "'><use xlink:href='" + this.options.iconSvgSrc + "#" + name + "'></use></svg>");
      this.addState(this.options.iconState);
      this.setSkewing(this.options.skewingIcon);
    };
    _proto.removeIcon = function removeIcon() {
      this.removeState(this.options.iconState);
      this.removeSkewing();
    };
    _proto.setMedia = function setMedia(element) {
      var _this4 = this;
      clearTimeout(this.mediaInt);
      if (element) {
        this.mediaBox.innerHTML = "";
        this.mediaBox.appendChild(element);
      }
      this.mediaInt = setTimeout(function() {
        return _this4.addState(_this4.options.mediaState);
      }, 20);
      this.setSkewing(this.options.skewingMedia);
    };
    _proto.removeMedia = function removeMedia() {
      var _this5 = this;
      clearTimeout(this.mediaInt);
      this.removeState(this.options.mediaState);
      this.mediaInt = setTimeout(function() {
        return _this5.mediaBox.innerHTML = "";
      }, this.options.hideMediaTimeout);
      this.removeSkewing();
    };
    _proto.setImg = function setImg(url) {
      if (!this.mediaImg)
        this.mediaImg = new Image();
      if (this.mediaImg.src !== url)
        this.mediaImg.src = url;
      this.setMedia(this.mediaImg);
    };
    _proto.removeImg = function removeImg() {
      this.removeMedia();
    };
    _proto.setVideo = function setVideo(url) {
      if (!this.mediaVideo) {
        this.mediaVideo = document.createElement("video");
        this.mediaVideo.muted = true;
        this.mediaVideo.loop = true;
        this.mediaVideo.autoplay = true;
      }
      if (this.mediaVideo.src !== url) {
        this.mediaVideo.src = url;
        this.mediaVideo.load();
      }
      this.mediaVideo.play();
      this.setMedia(this.mediaVideo);
    };
    _proto.removeVideo = function removeVideo() {
      if (this.mediaVideo && this.mediaVideo.readyState > 2)
        this.mediaVideo.pause();
      this.removeMedia();
    };
    _proto.on = function on(event, callback) {
      if (!(this.events[event] instanceof Array))
        this.off(event);
      this.events[event].push(callback);
    };
    _proto.off = function off(event, callback) {
      if (callback) {
        this.events[event] = this.events[event].filter(function(f) {
          return f !== callback;
        });
      } else {
        this.events[event] = [];
      }
    };
    _proto.trigger = function trigger(event) {
      var _arguments = arguments, _this6 = this;
      if (!this.events[event])
        return;
      this.events[event].forEach(function(f) {
        return f.call.apply(f, [_this6, _this6].concat([].slice.call(_arguments, 1)));
      });
    };
    _proto.getFromDataset = function getFromDataset(element) {
      var dataset = element.dataset;
      return {
        state: dataset[this.options.dataAttr],
        show: dataset[this.options.dataAttr + "Show"],
        text: dataset[this.options.dataAttr + "Text"],
        icon: dataset[this.options.dataAttr + "Icon"],
        img: dataset[this.options.dataAttr + "Img"],
        video: dataset[this.options.dataAttr + "Video"],
        stick: dataset[this.options.dataAttr + "Stick"]
      };
    };
    _proto.destroy = function destroy() {
      this.trigger("destroy");
      this.gsap.ticker.remove(this.ticker);
      this.container.removeEventListener("mouseleave", this.event.mouseleave);
      this.container.removeEventListener("mouseenter", this.event.mouseenter);
      this.container.removeEventListener("mousedown", this.event.mousedown);
      this.container.removeEventListener("mouseup", this.event.mouseup);
      this.container.removeEventListener("mousemove", this.event.mousemove);
      this.container.removeEventListener("mousemove", this.event.mousemoveOnce);
      this.container.removeEventListener("mouseover", this.event.mouseover);
      this.container.removeEventListener("mouseout", this.event.mouseout);
      if (this.el) {
        this.container.removeChild(this.el);
        this.el = null;
        this.mediaImg = null;
        this.mediaVideo = null;
      }
    };
    return MouseFollower2;
  }();

  // src/scripts/index.js
  import_gsap.gsap.registerPlugin(import_ScrollTrigger.ScrollTrigger);
  if (!window.matchMedia(`(pointer: coarse)`).matches) {
    MouseFollower.registerGSAP(import_gsap.gsap);
    document.getElementsByClassName(`mf-cursor`).length == 0 && new MouseFollower({
      stateDetection: {
        "-pointer": `a,button`,
        "-hidden": `iframe`
      }
    });
  }
  scroll = new locomotive_scroll_esm_default({
    el: document.querySelector("[data-scroll-container]"),
    smooth: true
  });
  window.onresize = scroll.update();
  scroll.on("scroll", () => import_ScrollTrigger.ScrollTrigger.update());
  import_ScrollTrigger.ScrollTrigger.scrollerProxy("[data-scroll-container]", {
    scrollTop(value) {
      return arguments.length ? scroll.scrollTo(value, 0, 0) : scroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight
      };
    },
    pinType: document.querySelector("[data-scroll-container]").style.transform ? "transform" : "fixed"
  });
  import_ScrollTrigger.ScrollTrigger.defaults({
    scroller: document.querySelector("[data-scroll-container]")
  });
  var scrollbar = document.querySelectorAll(".c-scrollbar");
  if (scrollbar.length > 1) {
    scrollbar[0].remove();
  }
  import_ScrollTrigger.ScrollTrigger.addEventListener("refresh", () => scroll.update());
  import_ScrollTrigger.ScrollTrigger.refresh();
  import_gsap.gsap.utils.toArray(`.scrub-section`).forEach((section, index) => {
    const w = section.querySelector(`.wrapper`);
    const [x, xEnd] = index % 2 ? [`100%`, (w.scrollWidth - section.offsetWidth) * -1] : [w.scrollWidth * -1, 0];
    import_gsap.gsap.fromTo(w, { x }, {
      x: xEnd,
      scrollTrigger: {
        scroller: document.querySelector("[data-scroll-container]"),
        trigger: "#skills-container",
        scrub: 0.5
      }
    });
  });
  import_gsap.gsap.fromTo(".fade-in", { opacity: 0, y: 50 }, { opacity: 1, y: 0 });
  import_gsap.gsap.fromTo(`#burger span`, {
    className: `burger`
  }, {
    scrollTrigger: {
      trigger: `main`,
      start: `bottom top`,
      scrub: true
    },
    className: `burger-dark`,
    ease: `none`
  });
  var spanWord = document.querySelectorAll(".span-lines");
  for (i = 0; i < spanWord.length; i++) {
    wordWrap = spanWord.item(i);
    wordWrap.innerHTML = wordWrap.innerHTML.replace(/(^|<\/?[^>]+>|\s+)([^\s<]+)/g, '$1<span class="span-line"><span class="span-line-inner">$2</span></span>');
  }
  var wordWrap;
  var i;
  var triggerElement = document.querySelector(".span-lines");
  var tl = import_gsap.gsap.timeline({
    scrollTrigger: {
      trigger: triggerElement,
      toggleActions: "play none none reset",
      start: "50% 100%"
    }
  });
  tl.from(".span-lines .span-line-inner", {
    y: "100%",
    stagger: 0.01,
    ease: "power3.out",
    duration: 1,
    delay: 0
  });
  var toggleMenu = () => {
    const menu = document.querySelector("#menu");
    const overlay2 = document.querySelector("#overlay");
    menu.classList.toggle("active");
    overlay2.classList.toggle("active");
  };
  var button = document.getElementById("nav-button");
  var overlay = document.getElementById("overlay");
  button.onclick = toggleMenu;
  overlay.onclick = toggleMenu;
  var toggleTheme = () => {
    const isDarkMode = localStorage.getItem("darkMode");
    if (isDarkMode == "true") {
      localStorage.setItem("darkMode", "false");
    } else {
      localStorage.setItem("darkMode", "true");
    }
    document.querySelector("html").classList.toggle("dark");
  };
  var themeButton = document.getElementById("theme-button");
  themeButton.onclick = toggleTheme;
  import_ScrollTrigger.ScrollTrigger.addEventListener("refresh", () => scroll.update());
  import_ScrollTrigger.ScrollTrigger.refresh();
})();
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/*!
 * Cuberto Mouse Follower
 * https://cuberto.com/
 *
 * @version 1.1.2
 * @author Cuberto, Artem Dordzhiev (Draft)
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
/*!
 * Observer 3.10.4
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
/*!
 * ScrollTrigger 3.10.4
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
//# sourceMappingURL=index.js.map
