"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to2, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to2, key) && key !== except)
        __defProp(to2, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to2;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// node_modules/@prisma/client/runtime/library.js
var require_library = __commonJS({
  "node_modules/@prisma/client/runtime/library.js"(exports, module) {
    "use strict";
    var Ll = Object.create;
    var Mt = Object.defineProperty;
    var $l = Object.getOwnPropertyDescriptor;
    var ql = Object.getOwnPropertyNames;
    var Vl = Object.getPrototypeOf;
    var jl = Object.prototype.hasOwnProperty;
    var Bl = (e, t, r) => t in e ? Mt(e, t, { enumerable: true, configurable: true, writable: true, value: r }) : e[t] = r;
    var V = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports);
    var St = (e, t) => {
      for (var r in t)
        Mt(e, r, { get: t[r], enumerable: true });
    };
    var Xi = (e, t, r, n) => {
      if (t && typeof t == "object" || typeof t == "function")
        for (let i of ql(t))
          !jl.call(e, i) && i !== r && Mt(e, i, { get: () => t[i], enumerable: !(n = $l(t, i)) || n.enumerable });
      return e;
    };
    var S = (e, t, r) => (r = e != null ? Ll(Vl(e)) : {}, Xi(t || !e || !e.__esModule ? Mt(r, "default", { value: e, enumerable: true }) : r, e));
    var Ul = (e) => Xi(Mt({}, "__esModule", { value: true }), e);
    var eo = (e, t, r) => (Bl(e, typeof t != "symbol" ? t + "" : t, r), r);
    var co = V((xm, uo) => {
      "use strict";
      var rt = 1e3, nt = rt * 60, it = nt * 60, Qe = it * 24, Kl = Qe * 7, Ql = Qe * 365.25;
      uo.exports = function(e, t) {
        t = t || {};
        var r = typeof e;
        if (r === "string" && e.length > 0)
          return Gl(e);
        if (r === "number" && isFinite(e))
          return t.long ? Hl(e) : Jl(e);
        throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(e));
      };
      function Gl(e) {
        if (e = String(e), !(e.length > 100)) {
          var t = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(e);
          if (t) {
            var r = parseFloat(t[1]), n = (t[2] || "ms").toLowerCase();
            switch (n) {
              case "years":
              case "year":
              case "yrs":
              case "yr":
              case "y":
                return r * Ql;
              case "weeks":
              case "week":
              case "w":
                return r * Kl;
              case "days":
              case "day":
              case "d":
                return r * Qe;
              case "hours":
              case "hour":
              case "hrs":
              case "hr":
              case "h":
                return r * it;
              case "minutes":
              case "minute":
              case "mins":
              case "min":
              case "m":
                return r * nt;
              case "seconds":
              case "second":
              case "secs":
              case "sec":
              case "s":
                return r * rt;
              case "milliseconds":
              case "millisecond":
              case "msecs":
              case "msec":
              case "ms":
                return r;
              default:
                return;
            }
          }
        }
      }
      function Jl(e) {
        var t = Math.abs(e);
        return t >= Qe ? Math.round(e / Qe) + "d" : t >= it ? Math.round(e / it) + "h" : t >= nt ? Math.round(e / nt) + "m" : t >= rt ? Math.round(e / rt) + "s" : e + "ms";
      }
      function Hl(e) {
        var t = Math.abs(e);
        return t >= Qe ? br(e, t, Qe, "day") : t >= it ? br(e, t, it, "hour") : t >= nt ? br(e, t, nt, "minute") : t >= rt ? br(e, t, rt, "second") : e + " ms";
      }
      function br(e, t, r, n) {
        var i = t >= r * 1.5;
        return Math.round(e / r) + " " + n + (i ? "s" : "");
      }
    });
    var kn = V((bm, po) => {
      "use strict";
      function Wl(e) {
        r.debug = r, r.default = r, r.coerce = l, r.disable = o, r.enable = i, r.enabled = s, r.humanize = co(), r.destroy = u, Object.keys(e).forEach((c) => {
          r[c] = e[c];
        }), r.names = [], r.skips = [], r.formatters = {};
        function t(c) {
          let p = 0;
          for (let d = 0; d < c.length; d++)
            p = (p << 5) - p + c.charCodeAt(d), p |= 0;
          return r.colors[Math.abs(p) % r.colors.length];
        }
        r.selectColor = t;
        function r(c) {
          let p, d = null, f, y;
          function g(...P) {
            if (!g.enabled)
              return;
            let T = g, C = Number(/* @__PURE__ */ new Date()), x = C - (p || C);
            T.diff = x, T.prev = p, T.curr = C, p = C, P[0] = r.coerce(P[0]), typeof P[0] != "string" && P.unshift("%O");
            let R = 0;
            P[0] = P[0].replace(/%([a-zA-Z%])/g, (J, Ke) => {
              if (J === "%%")
                return "%";
              R++;
              let $ = r.formatters[Ke];
              if (typeof $ == "function") {
                let z = P[R];
                J = $.call(T, z), P.splice(R, 1), R--;
              }
              return J;
            }), r.formatArgs.call(T, P), (T.log || r.log).apply(T, P);
          }
          return g.namespace = c, g.useColors = r.useColors(), g.color = r.selectColor(c), g.extend = n, g.destroy = r.destroy, Object.defineProperty(g, "enabled", { enumerable: true, configurable: false, get: () => d !== null ? d : (f !== r.namespaces && (f = r.namespaces, y = r.enabled(c)), y), set: (P) => {
            d = P;
          } }), typeof r.init == "function" && r.init(g), g;
        }
        function n(c, p) {
          let d = r(this.namespace + (typeof p > "u" ? ":" : p) + c);
          return d.log = this.log, d;
        }
        function i(c) {
          r.save(c), r.namespaces = c, r.names = [], r.skips = [];
          let p, d = (typeof c == "string" ? c : "").split(/[\s,]+/), f = d.length;
          for (p = 0; p < f; p++)
            d[p] && (c = d[p].replace(/\*/g, ".*?"), c[0] === "-" ? r.skips.push(new RegExp("^" + c.slice(1) + "$")) : r.names.push(new RegExp("^" + c + "$")));
        }
        function o() {
          let c = [...r.names.map(a), ...r.skips.map(a).map((p) => "-" + p)].join(",");
          return r.enable(""), c;
        }
        function s(c) {
          if (c[c.length - 1] === "*")
            return true;
          let p, d;
          for (p = 0, d = r.skips.length; p < d; p++)
            if (r.skips[p].test(c))
              return false;
          for (p = 0, d = r.names.length; p < d; p++)
            if (r.names[p].test(c))
              return true;
          return false;
        }
        function a(c) {
          return c.toString().substring(2, c.toString().length - 2).replace(/\.\*\?$/, "*");
        }
        function l(c) {
          return c instanceof Error ? c.stack || c.message : c;
        }
        function u() {
          console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
        }
        return r.enable(r.load()), r;
      }
      po.exports = Wl;
    });
    var mo = V((le, Er) => {
      "use strict";
      le.formatArgs = Yl;
      le.save = Zl;
      le.load = Xl;
      le.useColors = zl;
      le.storage = eu();
      le.destroy = /* @__PURE__ */ (() => {
        let e = false;
        return () => {
          e || (e = true, console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."));
        };
      })();
      le.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"];
      function zl() {
        return typeof window < "u" && window.process && (window.process.type === "renderer" || window.process.__nwjs) ? true : typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/) ? false : typeof document < "u" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || typeof window < "u" && window.console && (window.console.firebug || window.console.exception && window.console.table) || typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
      }
      function Yl(e) {
        if (e[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + e[0] + (this.useColors ? "%c " : " ") + "+" + Er.exports.humanize(this.diff), !this.useColors)
          return;
        let t = "color: " + this.color;
        e.splice(1, 0, t, "color: inherit");
        let r = 0, n = 0;
        e[0].replace(/%[a-zA-Z%]/g, (i) => {
          i !== "%%" && (r++, i === "%c" && (n = r));
        }), e.splice(n, 0, t);
      }
      le.log = console.debug || console.log || (() => {
      });
      function Zl(e) {
        try {
          e ? le.storage.setItem("debug", e) : le.storage.removeItem("debug");
        } catch {
        }
      }
      function Xl() {
        let e;
        try {
          e = le.storage.getItem("debug");
        } catch {
        }
        return !e && typeof process < "u" && "env" in process && (e = process.env.DEBUG), e;
      }
      function eu() {
        try {
          return localStorage;
        } catch {
        }
      }
      Er.exports = kn()(le);
      var { formatters: tu } = Er.exports;
      tu.j = function(e) {
        try {
          return JSON.stringify(e);
        } catch (t) {
          return "[UnexpectedJSONParseError]: " + t.message;
        }
      };
    });
    var Fn = V((Em, fo) => {
      "use strict";
      fo.exports = (e, t = process.argv) => {
        let r = e.startsWith("-") ? "" : e.length === 1 ? "-" : "--", n = t.indexOf(r + e), i = t.indexOf("--");
        return n !== -1 && (i === -1 || n < i);
      };
    });
    var _n = V((wm, yo) => {
      "use strict";
      var ru = require("os"), go = require("tty"), de = Fn(), { env: B } = process, ke;
      de("no-color") || de("no-colors") || de("color=false") || de("color=never") ? ke = 0 : (de("color") || de("colors") || de("color=true") || de("color=always")) && (ke = 1);
      "FORCE_COLOR" in B && (B.FORCE_COLOR === "true" ? ke = 1 : B.FORCE_COLOR === "false" ? ke = 0 : ke = B.FORCE_COLOR.length === 0 ? 1 : Math.min(parseInt(B.FORCE_COLOR, 10), 3));
      function On(e) {
        return e === 0 ? false : { level: e, hasBasic: true, has256: e >= 2, has16m: e >= 3 };
      }
      function Dn(e, t) {
        if (ke === 0)
          return 0;
        if (de("color=16m") || de("color=full") || de("color=truecolor"))
          return 3;
        if (de("color=256"))
          return 2;
        if (e && !t && ke === void 0)
          return 0;
        let r = ke || 0;
        if (B.TERM === "dumb")
          return r;
        if (process.platform === "win32") {
          let n = ru.release().split(".");
          return Number(n[0]) >= 10 && Number(n[2]) >= 10586 ? Number(n[2]) >= 14931 ? 3 : 2 : 1;
        }
        if ("CI" in B)
          return ["TRAVIS", "CIRCLECI", "APPVEYOR", "GITLAB_CI", "GITHUB_ACTIONS", "BUILDKITE"].some((n) => n in B) || B.CI_NAME === "codeship" ? 1 : r;
        if ("TEAMCITY_VERSION" in B)
          return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(B.TEAMCITY_VERSION) ? 1 : 0;
        if (B.COLORTERM === "truecolor")
          return 3;
        if ("TERM_PROGRAM" in B) {
          let n = parseInt((B.TERM_PROGRAM_VERSION || "").split(".")[0], 10);
          switch (B.TERM_PROGRAM) {
            case "iTerm.app":
              return n >= 3 ? 3 : 2;
            case "Apple_Terminal":
              return 2;
          }
        }
        return /-256(color)?$/i.test(B.TERM) ? 2 : /^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(B.TERM) || "COLORTERM" in B ? 1 : r;
      }
      function nu(e) {
        let t = Dn(e, e && e.isTTY);
        return On(t);
      }
      yo.exports = { supportsColor: nu, stdout: On(Dn(true, go.isatty(1))), stderr: On(Dn(true, go.isatty(2))) };
    });
    var xo = V((H, Pr) => {
      "use strict";
      var iu = require("tty"), wr = require("util");
      H.init = pu;
      H.log = lu;
      H.formatArgs = su;
      H.save = uu;
      H.load = cu;
      H.useColors = ou;
      H.destroy = wr.deprecate(() => {
      }, "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
      H.colors = [6, 2, 3, 4, 5, 1];
      try {
        let e = _n();
        e && (e.stderr || e).level >= 2 && (H.colors = [20, 21, 26, 27, 32, 33, 38, 39, 40, 41, 42, 43, 44, 45, 56, 57, 62, 63, 68, 69, 74, 75, 76, 77, 78, 79, 80, 81, 92, 93, 98, 99, 112, 113, 128, 129, 134, 135, 148, 149, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 178, 179, 184, 185, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 214, 215, 220, 221]);
      } catch {
      }
      H.inspectOpts = Object.keys(process.env).filter((e) => /^debug_/i.test(e)).reduce((e, t) => {
        let r = t.substring(6).toLowerCase().replace(/_([a-z])/g, (i, o) => o.toUpperCase()), n = process.env[t];
        return /^(yes|on|true|enabled)$/i.test(n) ? n = true : /^(no|off|false|disabled)$/i.test(n) ? n = false : n === "null" ? n = null : n = Number(n), e[r] = n, e;
      }, {});
      function ou() {
        return "colors" in H.inspectOpts ? !!H.inspectOpts.colors : iu.isatty(process.stderr.fd);
      }
      function su(e) {
        let { namespace: t, useColors: r } = this;
        if (r) {
          let n = this.color, i = "\x1B[3" + (n < 8 ? n : "8;5;" + n), o = `  ${i};1m${t} \x1B[0m`;
          e[0] = o + e[0].split(`
`).join(`
` + o), e.push(i + "m+" + Pr.exports.humanize(this.diff) + "\x1B[0m");
        } else
          e[0] = au() + t + " " + e[0];
      }
      function au() {
        return H.inspectOpts.hideDate ? "" : (/* @__PURE__ */ new Date()).toISOString() + " ";
      }
      function lu(...e) {
        return process.stderr.write(wr.format(...e) + `
`);
      }
      function uu(e) {
        e ? process.env.DEBUG = e : delete process.env.DEBUG;
      }
      function cu() {
        return process.env.DEBUG;
      }
      function pu(e) {
        e.inspectOpts = {};
        let t = Object.keys(H.inspectOpts);
        for (let r = 0; r < t.length; r++)
          e.inspectOpts[t[r]] = H.inspectOpts[t[r]];
      }
      Pr.exports = kn()(H);
      var { formatters: ho } = Pr.exports;
      ho.o = function(e) {
        return this.inspectOpts.colors = this.useColors, wr.inspect(e, this.inspectOpts).split(`
`).map((t) => t.trim()).join(" ");
      };
      ho.O = function(e) {
        return this.inspectOpts.colors = this.useColors, wr.inspect(e, this.inspectOpts);
      };
    });
    var Ln = V((Pm, Nn) => {
      "use strict";
      typeof process > "u" || process.type === "renderer" || process.browser === true || process.__nwjs ? Nn.exports = mo() : Nn.exports = xo();
    });
    var So = V((ef, Un) => {
      "use strict";
      var A = Un.exports;
      Un.exports.default = A;
      var I = "\x1B[", kt = "\x1B]", at = "\x07", Rr = ";", Mo = process.env.TERM_PROGRAM === "Apple_Terminal";
      A.cursorTo = (e, t) => {
        if (typeof e != "number")
          throw new TypeError("The `x` argument is required");
        return typeof t != "number" ? I + (e + 1) + "G" : I + (t + 1) + ";" + (e + 1) + "H";
      };
      A.cursorMove = (e, t) => {
        if (typeof e != "number")
          throw new TypeError("The `x` argument is required");
        let r = "";
        return e < 0 ? r += I + -e + "D" : e > 0 && (r += I + e + "C"), t < 0 ? r += I + -t + "A" : t > 0 && (r += I + t + "B"), r;
      };
      A.cursorUp = (e = 1) => I + e + "A";
      A.cursorDown = (e = 1) => I + e + "B";
      A.cursorForward = (e = 1) => I + e + "C";
      A.cursorBackward = (e = 1) => I + e + "D";
      A.cursorLeft = I + "G";
      A.cursorSavePosition = Mo ? "\x1B7" : I + "s";
      A.cursorRestorePosition = Mo ? "\x1B8" : I + "u";
      A.cursorGetPosition = I + "6n";
      A.cursorNextLine = I + "E";
      A.cursorPrevLine = I + "F";
      A.cursorHide = I + "?25l";
      A.cursorShow = I + "?25h";
      A.eraseLines = (e) => {
        let t = "";
        for (let r = 0; r < e; r++)
          t += A.eraseLine + (r < e - 1 ? A.cursorUp() : "");
        return e && (t += A.cursorLeft), t;
      };
      A.eraseEndLine = I + "K";
      A.eraseStartLine = I + "1K";
      A.eraseLine = I + "2K";
      A.eraseDown = I + "J";
      A.eraseUp = I + "1J";
      A.eraseScreen = I + "2J";
      A.scrollUp = I + "S";
      A.scrollDown = I + "T";
      A.clearScreen = "\x1Bc";
      A.clearTerminal = process.platform === "win32" ? `${A.eraseScreen}${I}0f` : `${A.eraseScreen}${I}3J${I}H`;
      A.beep = at;
      A.link = (e, t) => [kt, "8", Rr, Rr, t, at, e, kt, "8", Rr, Rr, at].join("");
      A.image = (e, t = {}) => {
        let r = `${kt}1337;File=inline=1`;
        return t.width && (r += `;width=${t.width}`), t.height && (r += `;height=${t.height}`), t.preserveAspectRatio === false && (r += ";preserveAspectRatio=0"), r + ":" + e.toString("base64") + at;
      };
      A.iTerm = { setCwd: (e = process.cwd()) => `${kt}50;CurrentDir=${e}${at}`, annotation: (e, t = {}) => {
        let r = `${kt}1337;`, n = typeof t.x < "u", i = typeof t.y < "u";
        if ((n || i) && !(n && i && typeof t.length < "u"))
          throw new Error("`x`, `y` and `length` must be defined when `x` or `y` is defined");
        return e = e.replace(/\|/g, ""), r += t.isHidden ? "AddHiddenAnnotation=" : "AddAnnotation=", t.length > 0 ? r += (n ? [e, t.length, t.x, t.y] : [t.length, e]).join("|") : r += e, r + at;
      } };
    });
    var Fo = V((tf, ko) => {
      "use strict";
      var hu = _n(), lt = Fn();
      function Io(e) {
        if (/^\d{3,4}$/.test(e)) {
          let r = /(\d{1,2})(\d{2})/.exec(e);
          return { major: 0, minor: parseInt(r[1], 10), patch: parseInt(r[2], 10) };
        }
        let t = (e || "").split(".").map((r) => parseInt(r, 10));
        return { major: t[0], minor: t[1], patch: t[2] };
      }
      function Kn(e) {
        let { env: t } = process;
        if ("FORCE_HYPERLINK" in t)
          return !(t.FORCE_HYPERLINK.length > 0 && parseInt(t.FORCE_HYPERLINK, 10) === 0);
        if (lt("no-hyperlink") || lt("no-hyperlinks") || lt("hyperlink=false") || lt("hyperlink=never"))
          return false;
        if (lt("hyperlink=true") || lt("hyperlink=always") || "NETLIFY" in t)
          return true;
        if (!hu.supportsColor(e) || e && !e.isTTY || process.platform === "win32" || "CI" in t || "TEAMCITY_VERSION" in t)
          return false;
        if ("TERM_PROGRAM" in t) {
          let r = Io(t.TERM_PROGRAM_VERSION);
          switch (t.TERM_PROGRAM) {
            case "iTerm.app":
              return r.major === 3 ? r.minor >= 1 : r.major > 3;
            case "WezTerm":
              return r.major >= 20200620;
            case "vscode":
              return r.major > 1 || r.major === 1 && r.minor >= 72;
          }
        }
        if ("VTE_VERSION" in t) {
          if (t.VTE_VERSION === "0.50.0")
            return false;
          let r = Io(t.VTE_VERSION);
          return r.major > 0 || r.minor >= 50;
        }
        return false;
      }
      ko.exports = { supportsHyperlink: Kn, stdout: Kn(process.stdout), stderr: Kn(process.stderr) };
    });
    var Do = V((rf, Ft) => {
      "use strict";
      var xu = So(), Qn = Fo(), Oo = (e, t, { target: r = "stdout", ...n } = {}) => Qn[r] ? xu.link(e, t) : n.fallback === false ? e : typeof n.fallback == "function" ? n.fallback(e, t) : `${e} (\u200B${t}\u200B)`;
      Ft.exports = (e, t, r = {}) => Oo(e, t, r);
      Ft.exports.stderr = (e, t, r = {}) => Oo(e, t, { target: "stderr", ...r });
      Ft.exports.isSupported = Qn.stdout;
      Ft.exports.stderr.isSupported = Qn.stderr;
    });
    var Ko = V((wf, Ou) => {
      Ou.exports = { name: "dotenv", version: "16.0.3", description: "Loads environment variables from .env file", main: "lib/main.js", types: "lib/main.d.ts", exports: { ".": { require: "./lib/main.js", types: "./lib/main.d.ts", default: "./lib/main.js" }, "./config": "./config.js", "./config.js": "./config.js", "./lib/env-options": "./lib/env-options.js", "./lib/env-options.js": "./lib/env-options.js", "./lib/cli-options": "./lib/cli-options.js", "./lib/cli-options.js": "./lib/cli-options.js", "./package.json": "./package.json" }, scripts: { "dts-check": "tsc --project tests/types/tsconfig.json", lint: "standard", "lint-readme": "standard-markdown", pretest: "npm run lint && npm run dts-check", test: "tap tests/*.js --100 -Rspec", prerelease: "npm test", release: "standard-version" }, repository: { type: "git", url: "git://github.com/motdotla/dotenv.git" }, keywords: ["dotenv", "env", ".env", "environment", "variables", "config", "settings"], readmeFilename: "README.md", license: "BSD-2-Clause", devDependencies: { "@types/node": "^17.0.9", decache: "^4.6.1", dtslint: "^3.7.0", sinon: "^12.0.1", standard: "^16.0.4", "standard-markdown": "^7.1.0", "standard-version": "^9.3.2", tap: "^15.1.6", tar: "^6.1.11", typescript: "^4.5.4" }, engines: { node: ">=12" } };
    });
    var Go = V((Pf, Fr) => {
      "use strict";
      var Du = require("fs"), Qo = require("path"), _u = require("os"), Nu = Ko(), Lu = Nu.version, $u = /(?:^|^)\s*(?:export\s+)?([\w.-]+)(?:\s*=\s*?|:\s+?)(\s*'(?:\\'|[^'])*'|\s*"(?:\\"|[^"])*"|\s*`(?:\\`|[^`])*`|[^#\r\n]+)?\s*(?:#.*)?(?:$|$)/mg;
      function qu(e) {
        let t = {}, r = e.toString();
        r = r.replace(/\r\n?/mg, `
`);
        let n;
        for (; (n = $u.exec(r)) != null; ) {
          let i = n[1], o = n[2] || "";
          o = o.trim();
          let s = o[0];
          o = o.replace(/^(['"`])([\s\S]*)\1$/mg, "$2"), s === '"' && (o = o.replace(/\\n/g, `
`), o = o.replace(/\\r/g, "\r")), t[i] = o;
        }
        return t;
      }
      function Wn(e) {
        console.log(`[dotenv@${Lu}][DEBUG] ${e}`);
      }
      function Vu(e) {
        return e[0] === "~" ? Qo.join(_u.homedir(), e.slice(1)) : e;
      }
      function ju(e) {
        let t = Qo.resolve(process.cwd(), ".env"), r = "utf8", n = !!(e && e.debug), i = !!(e && e.override);
        e && (e.path != null && (t = Vu(e.path)), e.encoding != null && (r = e.encoding));
        try {
          let o = kr.parse(Du.readFileSync(t, { encoding: r }));
          return Object.keys(o).forEach(function(s) {
            Object.prototype.hasOwnProperty.call(process.env, s) ? (i === true && (process.env[s] = o[s]), n && Wn(i === true ? `"${s}" is already defined in \`process.env\` and WAS overwritten` : `"${s}" is already defined in \`process.env\` and was NOT overwritten`)) : process.env[s] = o[s];
          }), { parsed: o };
        } catch (o) {
          return n && Wn(`Failed to load ${t} ${o.message}`), { error: o };
        }
      }
      var kr = { config: ju, parse: qu };
      Fr.exports.config = kr.config;
      Fr.exports.parse = kr.parse;
      Fr.exports = kr;
    });
    var Zo = V((Sf, Yo) => {
      "use strict";
      Yo.exports = (e) => {
        let t = e.match(/^[ \t]*(?=\S)/gm);
        return t ? t.reduce((r, n) => Math.min(r, n.length), 1 / 0) : 0;
      };
    });
    var es = V((If, Xo) => {
      "use strict";
      var Qu = Zo();
      Xo.exports = (e) => {
        let t = Qu(e);
        if (t === 0)
          return e;
        let r = new RegExp(`^[ \\t]{${t}}`, "gm");
        return e.replace(r, "");
      };
    });
    var ts = V((kf, Gu) => {
      Gu.exports = { name: "@prisma/engines-version", version: "5.4.1-1.2f302df92bd8945e20ad4595a73def5b96afa54f", main: "index.js", types: "index.d.ts", license: "Apache-2.0", author: "Tim Suchanek <suchanek@prisma.io>", prisma: { enginesVersion: "2f302df92bd8945e20ad4595a73def5b96afa54f" }, repository: { type: "git", url: "https://github.com/prisma/engines-wrapper.git", directory: "packages/engines-version" }, devDependencies: { "@types/node": "18.17.19", typescript: "4.9.5" }, files: ["index.js", "index.d.ts"], scripts: { build: "tsc -d" } };
    });
    var Xn = V((Dr) => {
      "use strict";
      Object.defineProperty(Dr, "__esModule", { value: true });
      Dr.enginesVersion = void 0;
      Dr.enginesVersion = ts().prisma.enginesVersion;
    });
    var ii = V((Kf, is) => {
      "use strict";
      is.exports = (e, t = 1, r) => {
        if (r = { indent: " ", includeEmptyLines: false, ...r }, typeof e != "string")
          throw new TypeError(`Expected \`input\` to be a \`string\`, got \`${typeof e}\``);
        if (typeof t != "number")
          throw new TypeError(`Expected \`count\` to be a \`number\`, got \`${typeof t}\``);
        if (typeof r.indent != "string")
          throw new TypeError(`Expected \`options.indent\` to be a \`string\`, got \`${typeof r.indent}\``);
        if (t === 0)
          return e;
        let n = r.includeEmptyLines ? /^/gm : /^(?!\s*$)/gm;
        return e.replace(n, r.indent.repeat(t));
      };
    });
    var ls = V((Jf, as) => {
      "use strict";
      as.exports = ({ onlyFirst: e = false } = {}) => {
        let t = ["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)", "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))"].join("|");
        return new RegExp(t, e ? void 0 : "g");
      };
    });
    var li = V((Hf, us) => {
      "use strict";
      var rc = ls();
      us.exports = (e) => typeof e == "string" ? e.replace(rc(), "") : e;
    });
    var cs = V((Yf, Nr) => {
      "use strict";
      Nr.exports = (e = {}) => {
        let t;
        if (e.repoUrl)
          t = e.repoUrl;
        else if (e.user && e.repo)
          t = `https://github.com/${e.user}/${e.repo}`;
        else
          throw new Error("You need to specify either the `repoUrl` option or both the `user` and `repo` options");
        let r = new URL(`${t}/issues/new`), n = ["body", "title", "labels", "template", "milestone", "assignee", "projects"];
        for (let i of n) {
          let o = e[i];
          if (o !== void 0) {
            if (i === "labels" || i === "projects") {
              if (!Array.isArray(o))
                throw new TypeError(`The \`${i}\` option should be an array`);
              o = o.join(",");
            }
            r.searchParams.set(i, o);
          }
        }
        return r.toString();
      };
      Nr.exports.default = Nr.exports;
    });
    var Ui = V((CP, Ka) => {
      "use strict";
      Ka.exports = /* @__PURE__ */ function() {
        function e(t, r, n, i, o) {
          return t < r || n < r ? t > n ? n + 1 : t + 1 : i === o ? r : r + 1;
        }
        return function(t, r) {
          if (t === r)
            return 0;
          if (t.length > r.length) {
            var n = t;
            t = r, r = n;
          }
          for (var i = t.length, o = r.length; i > 0 && t.charCodeAt(i - 1) === r.charCodeAt(o - 1); )
            i--, o--;
          for (var s = 0; s < i && t.charCodeAt(s) === r.charCodeAt(s); )
            s++;
          if (i -= s, o -= s, i === 0 || o < 3)
            return o;
          var a = 0, l, u, c, p, d, f, y, g, P, T, C, x, R = [];
          for (l = 0; l < i; l++)
            R.push(l + 1), R.push(t.charCodeAt(s + l));
          for (var ce = R.length - 1; a < o - 3; )
            for (P = r.charCodeAt(s + (u = a)), T = r.charCodeAt(s + (c = a + 1)), C = r.charCodeAt(s + (p = a + 2)), x = r.charCodeAt(s + (d = a + 3)), f = a += 4, l = 0; l < ce; l += 2)
              y = R[l], g = R[l + 1], u = e(y, u, c, P, g), c = e(u, c, p, T, g), p = e(c, p, d, C, g), f = e(p, d, f, x, g), R[l] = f, d = p, p = c, c = u, u = y;
          for (; a < o; )
            for (P = r.charCodeAt(s + (u = a)), f = ++a, l = 0; l < ce; l += 2)
              y = R[l], R[l] = f = e(y, u, f, P, R[l + 1]), u = y;
          return f;
        };
      }();
    });
    var sm = {};
    St(sm, { DMMF: () => pe, DMMFClass: () => xr, Debug: () => $n, Decimal: () => Pe, Extensions: () => Rn, MetricsClient: () => dt, NotFoundError: () => Re, ObjectEnumValue: () => xe, PrismaClientInitializationError: () => F, PrismaClientKnownRequestError: () => U, PrismaClientRustPanicError: () => ue, PrismaClientUnknownRequestError: () => K, PrismaClientValidationError: () => X, Public: () => Mn, Sql: () => oe, Types: () => Sn, defineDmmfProperty: () => ms, empty: () => ys, getPrismaClient: () => Dl, itxClientDenyList: () => zi, join: () => gs, makeStrictEnum: () => _l, objectEnumNames: () => ic, objectEnumValues: () => $r, raw: () => gi, sqltag: () => yi, warnEnvConflicts: () => Nl, warnOnce: () => qt });
    module.exports = Ul(sm);
    var Rn = {};
    St(Rn, { defineExtension: () => to, getExtensionContext: () => ro });
    function to(e) {
      return typeof e == "function" ? e : (t) => t.$extends(e);
    }
    function ro(e) {
      return e;
    }
    var Mn = {};
    St(Mn, { validator: () => no });
    function no(...e) {
      return (t) => t;
    }
    var Sn = {};
    St(Sn, { Extensions: () => io, Public: () => oo, Result: () => so, Utils: () => ao });
    var io = {};
    var oo = {};
    var so = {};
    var ao = {};
    var Ie = (e, t) => {
      let r = {};
      for (let n of e) {
        let i = n[t];
        r[i] = n;
      }
      return r;
    };
    function lo(e) {
      return e.substring(0, 1).toLowerCase() + e.substring(1);
    }
    var xr = class {
      constructor(t) {
        this.document = t;
        this.compositeNames = new Set(this.datamodel.types.map((r) => r.name)), this.typeAndModelMap = this.buildTypeModelMap(), this.mappingsMap = this.buildMappingsMap(), this.outputTypeMap = this.buildMergedOutputTypeMap(), this.rootFieldMap = this.buildRootFieldMap(), this.inputTypesByName = this.buildInputTypesMap();
      }
      get datamodel() {
        return this.document.datamodel;
      }
      get mappings() {
        return this.document.mappings;
      }
      get schema() {
        return this.document.schema;
      }
      get inputObjectTypes() {
        return this.schema.inputObjectTypes;
      }
      get outputObjectTypes() {
        return this.schema.outputObjectTypes;
      }
      isComposite(t) {
        return this.compositeNames.has(t);
      }
      getOtherOperationNames() {
        return [Object.values(this.mappings.otherOperations.write), Object.values(this.mappings.otherOperations.read)].flat();
      }
      hasEnumInNamespace(t, r) {
        return this.schema.enumTypes[r]?.find((n) => n.name === t) !== void 0;
      }
      resolveInputObjectType(t) {
        return this.inputTypesByName.get(In(t.type, t.namespace));
      }
      resolveOutputObjectType(t) {
        if (t.location === "outputObjectTypes")
          return this.outputObjectTypes[t.namespace ?? "prisma"].find((r) => r.name === t.type);
      }
      buildModelMap() {
        return Ie(this.datamodel.models, "name");
      }
      buildTypeMap() {
        return Ie(this.datamodel.types, "name");
      }
      buildTypeModelMap() {
        return { ...this.buildTypeMap(), ...this.buildModelMap() };
      }
      buildMappingsMap() {
        return Ie(this.mappings.modelOperations, "model");
      }
      buildMergedOutputTypeMap() {
        return { model: Ie(this.schema.outputObjectTypes.model, "name"), prisma: Ie(this.schema.outputObjectTypes.prisma, "name") };
      }
      buildRootFieldMap() {
        return { ...Ie(this.outputTypeMap.prisma.Query.fields, "name"), ...Ie(this.outputTypeMap.prisma.Mutation.fields, "name") };
      }
      buildInputTypesMap() {
        let t = /* @__PURE__ */ new Map();
        for (let r of this.inputObjectTypes.prisma)
          t.set(In(r.name, "prisma"), r);
        if (!this.inputObjectTypes.model)
          return t;
        for (let r of this.inputObjectTypes.model)
          t.set(In(r.name, "model"), r);
        return t;
      }
    };
    function In(e, t) {
      return t ? `${t}.${e}` : e;
    }
    var pe;
    ((t) => {
      let e;
      ((x) => (x.findUnique = "findUnique", x.findUniqueOrThrow = "findUniqueOrThrow", x.findFirst = "findFirst", x.findFirstOrThrow = "findFirstOrThrow", x.findMany = "findMany", x.create = "create", x.createMany = "createMany", x.update = "update", x.updateMany = "updateMany", x.upsert = "upsert", x.delete = "delete", x.deleteMany = "deleteMany", x.groupBy = "groupBy", x.count = "count", x.aggregate = "aggregate", x.findRaw = "findRaw", x.aggregateRaw = "aggregateRaw"))(e = t.ModelAction || (t.ModelAction = {}));
    })(pe || (pe = {}));
    var vr = S(Ln());
    var du = 100;
    var It = [];
    typeof process < "u" && typeof process.stderr?.write != "function" && (vr.default.log = console.debug ?? console.log);
    function mu(e) {
      let t = (0, vr.default)(e), r = Object.assign((...n) => (t.log = r.log, n.length !== 0 && It.push([e, ...n]), It.length > du && It.shift(), t("", ...n)), t);
      return r;
    }
    var $n = Object.assign(mu, vr.default);
    function bo(e = 7500) {
      let t = It.map((r) => r.map((n) => typeof n == "string" ? n : JSON.stringify(n)).join(" ")).join(`
`);
      return t.length < e ? t : t.slice(-e);
    }
    function Eo() {
      It.length = 0;
    }
    var D = $n;
    var qn;
    var wo;
    var Po;
    var vo;
    var To = true;
    typeof process < "u" && ({ FORCE_COLOR: qn, NODE_DISABLE_COLORS: wo, NO_COLOR: Po, TERM: vo } = process.env || {}, To = process.stdout && process.stdout.isTTY);
    var fu = { enabled: !wo && Po == null && vo !== "dumb" && (qn != null && qn !== "0" || To) };
    function _(e, t) {
      let r = new RegExp(`\\x1b\\[${t}m`, "g"), n = `\x1B[${e}m`, i = `\x1B[${t}m`;
      return function(o) {
        return !fu.enabled || o == null ? o : n + (~("" + o).indexOf(i) ? o.replace(r, i + n) : o) + i;
      };
    }
    var Tm = _(0, 0);
    var ne = _(1, 22);
    var Fe = _(2, 22);
    var Cm = _(3, 23);
    var te = _(4, 24);
    var Am = _(7, 27);
    var Rm = _(8, 28);
    var Mm = _(9, 29);
    var Sm = _(30, 39);
    var me = _(31, 39);
    var Ge = _(32, 39);
    var he = _(33, 39);
    var ot = _(34, 39);
    var Im = _(35, 39);
    var Oe = _(36, 39);
    var km = _(37, 39);
    var Tr = _(90, 39);
    var Fm = _(90, 39);
    var Om = _(40, 49);
    var Dm = _(41, 49);
    var _m = _(42, 49);
    var Nm = _(43, 49);
    var Lm = _(44, 49);
    var $m = _(45, 49);
    var qm = _(46, 49);
    var Vm = _(47, 49);
    var Co = S(require("fs"));
    function Vn() {
      let e = process.env.PRISMA_QUERY_ENGINE_LIBRARY;
      if (!(e && Co.default.existsSync(e)) && process.arch === "ia32")
        throw new Error('The default query engine type (Node-API, "library") is currently not supported for 32bit Node. Please set `engineType = "binary"` in the "generator" block of your "schema.prisma" file (or use the environment variables "PRISMA_CLIENT_ENGINE_TYPE=binary" and/or "PRISMA_CLI_QUERY_ENGINE_TYPE=binary".)');
    }
    var Cr = "libquery_engine";
    function jn(e, t) {
      let r = t === "url";
      return e.includes("windows") ? r ? "query_engine.dll.node" : `query_engine-${e}.dll.node` : e.includes("darwin") ? r ? `${Cr}.dylib.node` : `${Cr}-${e}.dylib.node` : r ? `${Cr}.so.node` : `${Cr}-${e}.so.node`;
    }
    var $o = S(require("child_process"));
    var Gn = S(require("fs/promises"));
    var Sr = S(require("os"));
    var Ar = Symbol("@ts-pattern/matcher");
    var Ao = "@ts-pattern/anonymous-select-key";
    var Ro = function(e) {
      return !!(e && typeof e == "object");
    };
    var Bn = function(e) {
      return e && !!e[Ar];
    };
    var gu = function e(t, r, n) {
      if (Ro(t)) {
        if (Bn(t)) {
          var i = t[Ar]().match(r), o = i.matched, s = i.selections;
          return o && s && Object.keys(s).forEach(function(l) {
            return n(l, s[l]);
          }), o;
        }
        if (!Ro(r))
          return false;
        if (Array.isArray(t))
          return !!Array.isArray(r) && t.length === r.length && t.every(function(l, u) {
            return e(l, r[u], n);
          });
        if (t instanceof Map)
          return r instanceof Map && Array.from(t.keys()).every(function(l) {
            return e(t.get(l), r.get(l), n);
          });
        if (t instanceof Set) {
          if (!(r instanceof Set))
            return false;
          if (t.size === 0)
            return r.size === 0;
          if (t.size === 1) {
            var a = Array.from(t.values())[0];
            return Bn(a) ? Array.from(r.values()).every(function(l) {
              return e(a, l, n);
            }) : r.has(a);
          }
          return Array.from(t.values()).every(function(l) {
            return r.has(l);
          });
        }
        return Object.keys(t).every(function(l) {
          var u, c = t[l];
          return (l in r || Bn(u = c) && u[Ar]().matcherType === "optional") && e(c, r[l], n);
        });
      }
      return Object.is(r, t);
    };
    function Je(e) {
      var t;
      return (t = {})[Ar] = function() {
        return { match: function(r) {
          return { matched: !!e(r) };
        } };
      }, t;
    }
    var Gm = Je(function(e) {
      return true;
    });
    var Jm = Je(function(e) {
      return typeof e == "string";
    });
    var Hm = Je(function(e) {
      return typeof e == "number";
    });
    var Wm = Je(function(e) {
      return typeof e == "boolean";
    });
    var zm = Je(function(e) {
      return typeof e == "bigint";
    });
    var Ym = Je(function(e) {
      return typeof e == "symbol";
    });
    var Zm = Je(function(e) {
      return e == null;
    });
    function st(e) {
      return new yu(e, []);
    }
    var yu = function() {
      function e(r, n) {
        this.value = void 0, this.cases = void 0, this.value = r, this.cases = n;
      }
      var t = e.prototype;
      return t.with = function() {
        var r = [].slice.call(arguments), n = r[r.length - 1], i = [r[0]], o = [];
        return r.length === 3 && typeof r[1] == "function" ? (i.push(r[0]), o.push(r[1])) : r.length > 2 && i.push.apply(i, r.slice(1, r.length - 1)), new e(this.value, this.cases.concat([{ match: function(s) {
          var a = {}, l = !!(i.some(function(u) {
            return gu(u, s, function(c, p) {
              a[c] = p;
            });
          }) && o.every(function(u) {
            return u(s);
          }));
          return { matched: l, value: l && Object.keys(a).length ? Ao in a ? a[Ao] : a : s };
        }, handler: n }]));
      }, t.when = function(r, n) {
        return new e(this.value, this.cases.concat([{ match: function(i) {
          return { matched: !!r(i), value: i };
        }, handler: n }]));
      }, t.otherwise = function(r) {
        return new e(this.value, this.cases.concat([{ match: function(n) {
          return { matched: true, value: n };
        }, handler: r }])).run();
      }, t.exhaustive = function() {
        return this.run();
      }, t.run = function() {
        for (var r = this.value, n = void 0, i = 0; i < this.cases.length; i++) {
          var o = this.cases[i], s = o.match(this.value);
          if (s.matched) {
            r = s.value, n = o.handler;
            break;
          }
        }
        if (!n) {
          var a;
          try {
            a = JSON.stringify(this.value);
          } catch {
            a = this.value;
          }
          throw new Error("Pattern matching error: no pattern matches value " + a);
        }
        return n(r, this.value);
      }, e;
    }();
    var qo = require("util");
    var _o = S(Do());
    function Ot(e) {
      return (0, _o.default)(e, e, { fallback: te });
    }
    var bu = { warn: he("prisma:warn") };
    var Eu = { warn: () => !process.env.PRISMA_DISABLE_WARNINGS };
    function Dt(e, ...t) {
      Eu.warn() && console.warn(`${bu.warn} ${e}`, ...t);
    }
    var wu = (0, qo.promisify)($o.default.exec);
    var ie = D("prisma:get-platform");
    var Pu = ["1.0.x", "1.1.x", "3.0.x"];
    async function Vo() {
      let e = Sr.default.platform(), t = process.arch;
      if (e === "freebsd") {
        let s = await Ir("freebsd-version");
        if (s && s.trim().length > 0) {
          let l = /^(\d+)\.?/.exec(s);
          if (l)
            return { platform: "freebsd", targetDistro: `freebsd${l[1]}`, arch: t };
        }
      }
      if (e !== "linux")
        return { platform: e, arch: t };
      let r = await Tu(), n = await Fu(), i = Au({ arch: t, archFromUname: n, familyDistro: r.familyDistro }), { libssl: o } = await Ru(i);
      return { platform: "linux", libssl: o, arch: t, archFromUname: n, ...r };
    }
    function vu(e) {
      let t = /^ID="?([^"\n]*)"?$/im, r = /^ID_LIKE="?([^"\n]*)"?$/im, n = t.exec(e), i = n && n[1] && n[1].toLowerCase() || "", o = r.exec(e), s = o && o[1] && o[1].toLowerCase() || "", a = st({ id: i, idLike: s }).with({ id: "alpine" }, ({ id: l }) => ({ targetDistro: "musl", familyDistro: l, originalDistro: l })).with({ id: "raspbian" }, ({ id: l }) => ({ targetDistro: "arm", familyDistro: "debian", originalDistro: l })).with({ id: "nixos" }, ({ id: l }) => ({ targetDistro: "nixos", originalDistro: l, familyDistro: "nixos" })).with({ id: "debian" }, { id: "ubuntu" }, ({ id: l }) => ({ targetDistro: "debian", familyDistro: "debian", originalDistro: l })).with({ id: "rhel" }, { id: "centos" }, { id: "fedora" }, ({ id: l }) => ({ targetDistro: "rhel", familyDistro: "rhel", originalDistro: l })).when(({ idLike: l }) => l.includes("debian") || l.includes("ubuntu"), ({ id: l }) => ({ targetDistro: "debian", familyDistro: "debian", originalDistro: l })).when(({ idLike: l }) => i === "arch" || l.includes("arch"), ({ id: l }) => ({ targetDistro: "debian", familyDistro: "arch", originalDistro: l })).when(({ idLike: l }) => l.includes("centos") || l.includes("fedora") || l.includes("rhel") || l.includes("suse"), ({ id: l }) => ({ targetDistro: "rhel", familyDistro: "rhel", originalDistro: l })).otherwise(({ id: l }) => ({ targetDistro: void 0, familyDistro: void 0, originalDistro: l }));
      return ie(`Found distro info:
${JSON.stringify(a, null, 2)}`), a;
    }
    async function Tu() {
      let e = "/etc/os-release";
      try {
        let t = await Gn.default.readFile(e, { encoding: "utf-8" });
        return vu(t);
      } catch {
        return { targetDistro: void 0, familyDistro: void 0, originalDistro: void 0 };
      }
    }
    function Cu(e) {
      let t = /^OpenSSL\s(\d+\.\d+)\.\d+/.exec(e);
      if (t) {
        let r = `${t[1]}.x`;
        return jo(r);
      }
    }
    function No(e) {
      let t = /libssl\.so\.(\d)(\.\d)?/.exec(e);
      if (t) {
        let r = `${t[1]}${t[2] ?? ".0"}.x`;
        return jo(r);
      }
    }
    function jo(e) {
      let t = (() => {
        if (Uo(e))
          return e;
        let r = e.split(".");
        return r[1] = "0", r.join(".");
      })();
      if (Pu.includes(t))
        return t;
    }
    function Au(e) {
      return st(e).with({ familyDistro: "musl" }, () => (ie('Trying platform-specific paths for "alpine"'), ["/lib"])).with({ familyDistro: "debian" }, ({ archFromUname: t }) => (ie('Trying platform-specific paths for "debian" (and "ubuntu")'), [`/usr/lib/${t}-linux-gnu`, `/lib/${t}-linux-gnu`])).with({ familyDistro: "rhel" }, () => (ie('Trying platform-specific paths for "rhel"'), ["/lib64", "/usr/lib64"])).otherwise(({ familyDistro: t, arch: r, archFromUname: n }) => (ie(`Don't know any platform-specific paths for "${t}" on ${r} (${n})`), []));
    }
    async function Ru(e) {
      let t = 'grep -v "libssl.so.0"', r = await Lo(e);
      if (r) {
        ie(`Found libssl.so file using platform-specific paths: ${r}`);
        let o = No(r);
        if (ie(`The parsed libssl version is: ${o}`), o)
          return { libssl: o, strategy: "libssl-specific-path" };
      }
      ie('Falling back to "ldconfig" and other generic paths');
      let n = await Ir(`ldconfig -p | sed "s/.*=>s*//" | sed "s|.*/||" | grep libssl | sort | ${t}`);
      if (n || (n = await Lo(["/lib64", "/usr/lib64", "/lib"])), n) {
        ie(`Found libssl.so file using "ldconfig" or other generic paths: ${n}`);
        let o = No(n);
        if (ie(`The parsed libssl version is: ${o}`), o)
          return { libssl: o, strategy: "ldconfig" };
      }
      let i = await Ir("openssl version -v");
      if (i) {
        ie(`Found openssl binary with version: ${i}`);
        let o = Cu(i);
        if (ie(`The parsed openssl version is: ${o}`), o)
          return { libssl: o, strategy: "openssl-binary" };
      }
      return ie("Couldn't find any version of libssl or OpenSSL in the system"), {};
    }
    async function Lo(e) {
      for (let t of e) {
        let r = await Mu(t);
        if (r)
          return r;
      }
    }
    async function Mu(e) {
      try {
        return (await Gn.default.readdir(e)).find((r) => r.startsWith("libssl.so.") && !r.startsWith("libssl.so.0"));
      } catch (t) {
        if (t.code === "ENOENT")
          return;
        throw t;
      }
    }
    async function ut() {
      let { binaryTarget: e } = await Bo();
      return e;
    }
    function Su(e) {
      return e.binaryTarget !== void 0;
    }
    async function Jn() {
      let { memoized: e, ...t } = await Bo();
      return t;
    }
    var Mr = {};
    async function Bo() {
      if (Su(Mr))
        return Promise.resolve({ ...Mr, memoized: true });
      let e = await Vo(), t = Iu(e);
      return Mr = { ...e, binaryTarget: t }, { ...Mr, memoized: false };
    }
    function Iu(e) {
      let { platform: t, arch: r, archFromUname: n, libssl: i, targetDistro: o, familyDistro: s, originalDistro: a } = e;
      t === "linux" && !["x64", "arm64"].includes(r) && Dt(`Prisma only officially supports Linux on amd64 (x86_64) and arm64 (aarch64) system architectures. If you are using your own custom Prisma engines, you can ignore this warning, as long as you've compiled the engines for your system architecture "${n}".`);
      let l = "1.1.x";
      if (t === "linux" && i === void 0) {
        let c = st({ familyDistro: s }).with({ familyDistro: "debian" }, () => "Please manually install OpenSSL via `apt-get update -y && apt-get install -y openssl` and try installing Prisma again. If you're running Prisma on Docker, add this command to your Dockerfile, or switch to an image that already has OpenSSL installed.").otherwise(() => "Please manually install OpenSSL and try installing Prisma again.");
        Dt(`Prisma failed to detect the libssl/openssl version to use, and may not work as expected. Defaulting to "openssl-${l}".
${c}`);
      }
      let u = "debian";
      if (t === "linux" && o === void 0 && Dt(`Prisma doesn't know which engines to download for the Linux distro "${a}". Falling back to Prisma engines built "${u}".
Please report your experience by creating an issue at ${Ot("https://github.com/prisma/prisma/issues")} so we can add your distro to the list of known supported distros.`), t === "darwin" && r === "arm64")
        return "darwin-arm64";
      if (t === "darwin")
        return "darwin";
      if (t === "win32")
        return "windows";
      if (t === "freebsd")
        return o;
      if (t === "openbsd")
        return "openbsd";
      if (t === "netbsd")
        return "netbsd";
      if (t === "linux" && o === "nixos")
        return "linux-nixos";
      if (t === "linux" && r === "arm64")
        return `${o === "musl" ? "linux-musl-arm64" : "linux-arm64"}-openssl-${i || l}`;
      if (t === "linux" && r === "arm")
        return `linux-arm-openssl-${i || l}`;
      if (t === "linux" && o === "musl") {
        let c = "linux-musl";
        return !i || Uo(i) ? c : `${c}-openssl-${i}`;
      }
      return t === "linux" && o && i ? `${o}-openssl-${i}` : (t !== "linux" && Dt(`Prisma detected unknown OS "${t}" and may not work as expected. Defaulting to "linux".`), i ? `${u}-openssl-${i}` : o ? `${o}-openssl-${l}` : `${u}-openssl-${l}`);
    }
    async function ku(e) {
      try {
        return await e();
      } catch {
        return;
      }
    }
    function Ir(e) {
      return ku(async () => {
        let t = await wu(e);
        return ie(`Command "${e}" successfully returned "${t.stdout}"`), t.stdout;
      });
    }
    async function Fu() {
      return typeof Sr.default.machine == "function" ? Sr.default.machine() : (await Ir("uname -m"))?.trim();
    }
    function Uo(e) {
      return e.startsWith("1.");
    }
    var Hn = ["darwin", "darwin-arm64", "debian-openssl-1.0.x", "debian-openssl-1.1.x", "debian-openssl-3.0.x", "rhel-openssl-1.0.x", "rhel-openssl-1.1.x", "rhel-openssl-3.0.x", "linux-arm64-openssl-1.1.x", "linux-arm64-openssl-1.0.x", "linux-arm64-openssl-3.0.x", "linux-arm-openssl-1.1.x", "linux-arm-openssl-1.0.x", "linux-arm-openssl-3.0.x", "linux-musl", "linux-musl-openssl-3.0.x", "linux-musl-arm64-openssl-1.1.x", "linux-musl-arm64-openssl-3.0.x", "linux-nixos", "linux-static-x64", "linux-static-arm64", "windows", "freebsd11", "freebsd12", "freebsd13", "openbsd", "netbsd", "arm"];
    var Yn = S(Go());
    var Or = S(require("fs"));
    var ct = S(require("path"));
    function Jo(e) {
      let t = e.ignoreProcessEnv ? {} : process.env, r = (n) => n.match(/(.?\${(?:[a-zA-Z0-9_]+)?})/g)?.reduce(function(o, s) {
        let a = /(.?)\${([a-zA-Z0-9_]+)?}/g.exec(s);
        if (!a)
          return o;
        let l = a[1], u, c;
        if (l === "\\")
          c = a[0], u = c.replace("\\$", "$");
        else {
          let p = a[2];
          c = a[0].substring(l.length), u = Object.hasOwnProperty.call(t, p) ? t[p] : e.parsed[p] || "", u = r(u);
        }
        return o.replace(c, u);
      }, n) ?? n;
      for (let n in e.parsed) {
        let i = Object.hasOwnProperty.call(t, n) ? t[n] : e.parsed[n];
        e.parsed[n] = r(i);
      }
      for (let n in e.parsed)
        t[n] = e.parsed[n];
      return e;
    }
    var zn = D("prisma:tryLoadEnv");
    function _t({ rootEnvPath: e, schemaEnvPath: t }, r = { conflictCheck: "none" }) {
      let n = Ho(e);
      r.conflictCheck !== "none" && Bu(n, t, r.conflictCheck);
      let i = null;
      return Wo(n?.path, t) || (i = Ho(t)), !n && !i && zn("No Environment variables loaded"), i?.dotenvResult.error ? console.error(me(ne("Schema Env Error: ")) + i.dotenvResult.error) : { message: [n?.message, i?.message].filter(Boolean).join(`
`), parsed: { ...n?.dotenvResult?.parsed, ...i?.dotenvResult?.parsed } };
    }
    function Bu(e, t, r) {
      let n = e?.dotenvResult.parsed, i = !Wo(e?.path, t);
      if (n && t && i && Or.default.existsSync(t)) {
        let o = Yn.default.parse(Or.default.readFileSync(t)), s = [];
        for (let a in o)
          n[a] === o[a] && s.push(a);
        if (s.length > 0) {
          let a = ct.default.relative(process.cwd(), e.path), l = ct.default.relative(process.cwd(), t);
          if (r === "error") {
            let u = `There is a conflict between env var${s.length > 1 ? "s" : ""} in ${te(a)} and ${te(l)}
Conflicting env vars:
${s.map((c) => `  ${ne(c)}`).join(`
`)}

We suggest to move the contents of ${te(l)} to ${te(a)} to consolidate your env vars.
`;
            throw new Error(u);
          } else if (r === "warn") {
            let u = `Conflict for env var${s.length > 1 ? "s" : ""} ${s.map((c) => ne(c)).join(", ")} in ${te(a)} and ${te(l)}
Env vars from ${te(l)} overwrite the ones from ${te(a)}
      `;
            console.warn(`${he("warn(prisma)")} ${u}`);
          }
        }
      }
    }
    function Ho(e) {
      return Uu(e) ? (zn(`Environment variables loaded from ${e}`), { dotenvResult: Jo(Yn.default.config({ path: e, debug: process.env.DOTENV_CONFIG_DEBUG ? true : void 0 })), message: Fe(`Environment variables loaded from ${ct.default.relative(process.cwd(), e)}`), path: e }) : (zn(`Environment variables not found at ${e}`), null);
    }
    function Wo(e, t) {
      return e && t && ct.default.resolve(e) === ct.default.resolve(t);
    }
    function Uu(e) {
      return !!(e && Or.default.existsSync(e));
    }
    var zo = "library";
    function Zn(e) {
      let t = Ku();
      return t || (e?.config.engineType === "library" ? "library" : e?.config.engineType === "binary" ? "binary" : zo);
    }
    function Ku() {
      let e = process.env.PRISMA_CLIENT_ENGINE_TYPE;
      return e === "library" ? "library" : e === "binary" ? "binary" : void 0;
    }
    var Ju = S(Xn());
    var N = S(require("path"));
    var Hu = S(Xn());
    var Df = D("prisma:engines");
    function rs() {
      return N.default.join(__dirname, "../");
    }
    var _f = "libquery-engine";
    N.default.join(__dirname, "../query-engine-darwin");
    N.default.join(__dirname, "../query-engine-darwin-arm64");
    N.default.join(__dirname, "../query-engine-debian-openssl-1.0.x");
    N.default.join(__dirname, "../query-engine-debian-openssl-1.1.x");
    N.default.join(__dirname, "../query-engine-debian-openssl-3.0.x");
    N.default.join(__dirname, "../query-engine-linux-static-x64");
    N.default.join(__dirname, "../query-engine-linux-static-arm64");
    N.default.join(__dirname, "../query-engine-rhel-openssl-1.0.x");
    N.default.join(__dirname, "../query-engine-rhel-openssl-1.1.x");
    N.default.join(__dirname, "../query-engine-rhel-openssl-3.0.x");
    N.default.join(__dirname, "../libquery_engine-darwin.dylib.node");
    N.default.join(__dirname, "../libquery_engine-darwin-arm64.dylib.node");
    N.default.join(__dirname, "../libquery_engine-debian-openssl-1.0.x.so.node");
    N.default.join(__dirname, "../libquery_engine-debian-openssl-1.1.x.so.node");
    N.default.join(__dirname, "../libquery_engine-debian-openssl-3.0.x.so.node");
    N.default.join(__dirname, "../libquery_engine-linux-arm64-openssl-1.0.x.so.node");
    N.default.join(__dirname, "../libquery_engine-linux-arm64-openssl-1.1.x.so.node");
    N.default.join(__dirname, "../libquery_engine-linux-arm64-openssl-3.0.x.so.node");
    N.default.join(__dirname, "../libquery_engine-linux-musl.so.node");
    N.default.join(__dirname, "../libquery_engine-linux-musl-openssl-3.0.x.so.node");
    N.default.join(__dirname, "../libquery_engine-rhel-openssl-1.0.x.so.node");
    N.default.join(__dirname, "../libquery_engine-rhel-openssl-1.1.x.so.node");
    N.default.join(__dirname, "../libquery_engine-rhel-openssl-3.0.x.so.node");
    N.default.join(__dirname, "../query_engine-windows.dll.node");
    var ei = S(require("fs"));
    var ns = D("chmodPlusX");
    function ti(e) {
      if (process.platform === "win32")
        return;
      let t = ei.default.statSync(e), r = t.mode | 64 | 8 | 1;
      if (t.mode === r) {
        ns(`Execution permissions of ${e} are fine`);
        return;
      }
      let n = r.toString(8).slice(-3);
      ns(`Have to call chmodPlusX on ${e}`), ei.default.chmodSync(e, n);
    }
    function ri(e) {
      let t = e.e, r = (a) => `Prisma cannot find the required \`${a}\` system library in your system`, n = t.message.includes("cannot open shared object file"), i = `Please refer to the documentation about Prisma's system requirements: ${Ot("https://pris.ly/d/system-requirements")}`, o = `Unable to require(\`${Fe(e.id)}\`).`, s = st({ message: t.message, code: t.code }).with({ code: "ENOENT" }, () => "File does not exist.").when(({ message: a }) => n && a.includes("libz"), () => `${r("libz")}. Please install it and try again.`).when(({ message: a }) => n && a.includes("libgcc_s"), () => `${r("libgcc_s")}. Please install it and try again.`).when(({ message: a }) => n && a.includes("libssl"), () => {
        let a = e.platformInfo.libssl ? `openssl-${e.platformInfo.libssl}` : "openssl";
        return `${r("libssl")}. Please install ${a} and try again.`;
      }).when(({ message: a }) => a.includes("GLIBC"), () => `Prisma has detected an incompatible version of the \`glibc\` C standard library installed in your system. This probably means your system may be too old to run Prisma. ${i}`).when(({ message: a }) => e.platformInfo.platform === "linux" && a.includes("symbol not found"), () => `The Prisma engines are not compatible with your system ${e.platformInfo.originalDistro} on (${e.platformInfo.archFromUname}) which uses the \`${e.platformInfo.binaryTarget}\` binaryTarget by default. ${i}`).otherwise(() => `The Prisma engines do not seem to be compatible with your system. ${i}`);
      return `${o}
${s}

Details: ${t.message}`;
    }
    var Nt = S(require("path"));
    function ni(e) {
      return Nt.default.sep === Nt.default.posix.sep ? e : e.split(Nt.default.sep).join(Nt.default.posix.sep);
    }
    var os = S(ii());
    function si(e) {
      return String(new oi(e));
    }
    var oi = class {
      constructor(t) {
        this.config = t;
      }
      toString() {
        let { config: t } = this, r = t.provider.fromEnvVar ? `env("${t.provider.fromEnvVar}")` : t.provider.value, n = JSON.parse(JSON.stringify({ provider: r, binaryTargets: Wu(t.binaryTargets) }));
        return `generator ${t.name} {
${(0, os.default)(zu(n), 2)}
}`;
      }
    };
    function Wu(e) {
      let t;
      if (e.length > 0) {
        let r = e.find((n) => n.fromEnvVar !== null);
        r ? t = `env("${r.fromEnvVar}")` : t = e.map((n) => n.native ? "native" : n.value);
      } else
        t = void 0;
      return t;
    }
    function zu(e) {
      let t = Object.keys(e).reduce((r, n) => Math.max(r, n.length), 0);
      return Object.entries(e).map(([r, n]) => `${r.padEnd(t)} = ${Yu(n)}`).join(`
`);
    }
    function Yu(e) {
      return JSON.parse(JSON.stringify(e, (t, r) => Array.isArray(r) ? `[${r.map((n) => JSON.stringify(n)).join(", ")}]` : JSON.stringify(r)));
    }
    var $t = {};
    St($t, { error: () => ec, info: () => Xu, log: () => Zu, query: () => tc, should: () => ss, tags: () => Lt, warn: () => ai });
    var Lt = { error: me("prisma:error"), warn: he("prisma:warn"), info: Oe("prisma:info"), query: ot("prisma:query") };
    var ss = { warn: () => !process.env.PRISMA_DISABLE_WARNINGS };
    function Zu(...e) {
      console.log(...e);
    }
    function ai(e, ...t) {
      ss.warn() && console.warn(`${Lt.warn} ${e}`, ...t);
    }
    function Xu(e, ...t) {
      console.info(`${Lt.info} ${e}`, ...t);
    }
    function ec(e, ...t) {
      console.error(`${Lt.error} ${e}`, ...t);
    }
    function tc(e, ...t) {
      console.log(`${Lt.query} ${e}`, ...t);
    }
    function _r(e, t) {
      if (!e)
        throw new Error(`${t}. This should never happen. If you see this error, please, open an issue at https://github.com/prisma/prisma/issues/new?assignees=&labels=kind%2Fbug&projects=&template=bug_report.yml`);
    }
    function He(e, t) {
      throw new Error(t);
    }
    function ui(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }
    var ci = (e, t) => e.reduce((r, n) => (r[t(n)] = n, r), {});
    function pt(e, t) {
      let r = {};
      for (let n of Object.keys(e))
        r[n] = t(e[n], n);
      return r;
    }
    function pi(e, t) {
      if (e.length === 0)
        return;
      let r = e[0];
      for (let n = 1; n < e.length; n++)
        t(r, e[n]) < 0 && (r = e[n]);
      return r;
    }
    function E(e, t) {
      Object.defineProperty(e, "name", { value: t, configurable: true });
    }
    var ps = /* @__PURE__ */ new Set();
    var qt = (e, t, ...r) => {
      ps.has(e) || (ps.add(e), ai(t, ...r));
    };
    var U = class extends Error {
      constructor(r, { code: n, clientVersion: i, meta: o, batchRequestIdx: s }) {
        super(r);
        this.name = "PrismaClientKnownRequestError", this.code = n, this.clientVersion = i, this.meta = o, Object.defineProperty(this, "batchRequestIdx", { value: s, enumerable: false, writable: true });
      }
      get [Symbol.toStringTag]() {
        return "PrismaClientKnownRequestError";
      }
    };
    E(U, "PrismaClientKnownRequestError");
    var Re = class extends U {
      constructor(t, r) {
        super(t, { code: "P2025", clientVersion: r }), this.name = "NotFoundError";
      }
    };
    E(Re, "NotFoundError");
    var F = class e extends Error {
      constructor(r, n, i) {
        super(r);
        this.name = "PrismaClientInitializationError", this.clientVersion = n, this.errorCode = i, Error.captureStackTrace(e);
      }
      get [Symbol.toStringTag]() {
        return "PrismaClientInitializationError";
      }
    };
    E(F, "PrismaClientInitializationError");
    var ue = class extends Error {
      constructor(r, n) {
        super(r);
        this.name = "PrismaClientRustPanicError", this.clientVersion = n;
      }
      get [Symbol.toStringTag]() {
        return "PrismaClientRustPanicError";
      }
    };
    E(ue, "PrismaClientRustPanicError");
    var K = class extends Error {
      constructor(r, { clientVersion: n, batchRequestIdx: i }) {
        super(r);
        this.name = "PrismaClientUnknownRequestError", this.clientVersion = n, Object.defineProperty(this, "batchRequestIdx", { value: i, writable: true, enumerable: false });
      }
      get [Symbol.toStringTag]() {
        return "PrismaClientUnknownRequestError";
      }
    };
    E(K, "PrismaClientUnknownRequestError");
    var X = class extends Error {
      constructor(r, { clientVersion: n }) {
        super(r);
        this.name = "PrismaClientValidationError";
        this.clientVersion = n;
      }
      get [Symbol.toStringTag]() {
        return "PrismaClientValidationError";
      }
    };
    E(X, "PrismaClientValidationError");
    var dt = class {
      constructor(t) {
        this._engine = t;
      }
      prometheus(t) {
        return this._engine.metrics({ format: "prometheus", ...t });
      }
      json(t) {
        return this._engine.metrics({ format: "json", ...t });
      }
    };
    function Vt(e) {
      let t;
      return { get() {
        return t || (t = { value: e() }), t.value;
      } };
    }
    function ms(e, t) {
      let r = Vt(() => nc(t));
      Object.defineProperty(e, "dmmf", { get: () => r.get() });
    }
    function nc(e) {
      return { datamodel: { models: di(e.models), enums: di(e.enums), types: di(e.types) } };
    }
    function di(e) {
      return Object.entries(e).map(([t, r]) => ({ name: t, ...r }));
    }
    var ic = ["JsonNullValueInput", "NullableJsonNullValueInput", "JsonNullValueFilter"];
    var Lr = Symbol();
    var mi = /* @__PURE__ */ new WeakMap();
    var xe = class {
      constructor(t) {
        t === Lr ? mi.set(this, `Prisma.${this._getName()}`) : mi.set(this, `new Prisma.${this._getNamespace()}.${this._getName()}()`);
      }
      _getName() {
        return this.constructor.name;
      }
      toString() {
        return mi.get(this);
      }
    };
    var jt = class extends xe {
      _getNamespace() {
        return "NullTypes";
      }
    };
    var Bt = class extends jt {
    };
    fi(Bt, "DbNull");
    var Ut = class extends jt {
    };
    fi(Ut, "JsonNull");
    var Kt = class extends jt {
    };
    fi(Kt, "AnyNull");
    var $r = { classes: { DbNull: Bt, JsonNull: Ut, AnyNull: Kt }, instances: { DbNull: new Bt(Lr), JsonNull: new Ut(Lr), AnyNull: new Kt(Lr) } };
    function fi(e, t) {
      Object.defineProperty(e, "name", { value: t, configurable: true });
    }
    var lc = S(Ln(), 1);
    function qr(e) {
      return { ok: false, error: e, map() {
        return qr(e);
      }, flatMap() {
        return qr(e);
      } };
    }
    var oc = class {
      constructor() {
        eo(this, "registeredErrors", []);
      }
      consumeError(e) {
        return this.registeredErrors[e];
      }
      registerNewError(e) {
        let t = 0;
        for (; this.registeredErrors[t] !== void 0; )
          t++;
        return this.registeredErrors[t] = { error: e }, t;
      }
    };
    var fs = (e) => {
      let t = new oc(), r = De(t, e.startTransaction.bind(e));
      return { errorRegistry: t, queryRaw: De(t, e.queryRaw.bind(e)), executeRaw: De(t, e.executeRaw.bind(e)), flavour: e.flavour, startTransaction: async (...n) => (await r(...n)).map((o) => sc(t, o)), close: De(t, e.close.bind(e)) };
    };
    var sc = (e, t) => ({ flavour: t.flavour, options: t.options, queryRaw: De(e, t.queryRaw.bind(t)), executeRaw: De(e, t.executeRaw.bind(t)), commit: De(e, t.commit.bind(t)), rollback: De(e, t.rollback.bind(t)), dispose: ac(e, t.dispose.bind(t)) });
    function De(e, t) {
      return async (...r) => {
        try {
          return await t(...r);
        } catch (n) {
          let i = e.registerNewError(n);
          return qr({ kind: "GenericJsError", id: i });
        }
      };
    }
    function ac(e, t) {
      return (...r) => {
        try {
          return t(...r);
        } catch (n) {
          let i = e.registerNewError(n);
          return qr({ kind: "GenericJsError", id: i });
        }
      };
    }
    var kl = require("async_hooks");
    var Fl = require("events");
    var Ol = S(require("fs"));
    var yr = S(require("path"));
    var oe = class e {
      constructor(t, r) {
        if (t.length - 1 !== r.length)
          throw t.length === 0 ? new TypeError("Expected at least 1 string") : new TypeError(`Expected ${t.length} strings to have ${t.length - 1} values`);
        let n = r.reduce((s, a) => s + (a instanceof e ? a.values.length : 1), 0);
        this.values = new Array(n), this.strings = new Array(n + 1), this.strings[0] = t[0];
        let i = 0, o = 0;
        for (; i < r.length; ) {
          let s = r[i++], a = t[i];
          if (s instanceof e) {
            this.strings[o] += s.strings[0];
            let l = 0;
            for (; l < s.values.length; )
              this.values[o++] = s.values[l++], this.strings[o] = s.strings[l];
            this.strings[o] += a;
          } else
            this.values[o++] = s, this.strings[o] = a;
        }
      }
      get text() {
        let t = 1, r = this.strings[0];
        for (; t < this.strings.length; )
          r += `$${t}${this.strings[t++]}`;
        return r;
      }
      get sql() {
        let t = 1, r = this.strings[0];
        for (; t < this.strings.length; )
          r += `?${this.strings[t++]}`;
        return r;
      }
      inspect() {
        return { text: this.text, sql: this.sql, values: this.values };
      }
    };
    function gs(e, t = ",", r = "", n = "") {
      if (e.length === 0)
        throw new TypeError("Expected `join([])` to be called with an array of multiple elements, but got an empty array");
      return new oe([r, ...Array(e.length - 1).fill(t), n], e);
    }
    function gi(e) {
      return new oe([e], []);
    }
    var ys = gi("");
    function yi(e, ...t) {
      return new oe(e, t);
    }
    function Qt(e) {
      return { getKeys() {
        return Object.keys(e);
      }, getPropertyValue(t) {
        return e[t];
      } };
    }
    function re(e, t) {
      return { getKeys() {
        return [e];
      }, getPropertyValue() {
        return t();
      } };
    }
    var be = class {
      constructor() {
        this._map = /* @__PURE__ */ new Map();
      }
      get(t) {
        return this._map.get(t)?.value;
      }
      set(t, r) {
        this._map.set(t, { value: r });
      }
      getOrCreate(t, r) {
        let n = this._map.get(t);
        if (n)
          return n.value;
        let i = r();
        return this.set(t, i), i;
      }
    };
    function We(e) {
      let t = new be();
      return { getKeys() {
        return e.getKeys();
      }, getPropertyValue(r) {
        return t.getOrCreate(r, () => e.getPropertyValue(r));
      }, getPropertyDescriptor(r) {
        return e.getPropertyDescriptor?.(r);
      } };
    }
    var bs = require("util");
    var Vr = { enumerable: true, configurable: true, writable: true };
    function jr(e) {
      let t = new Set(e);
      return { getOwnPropertyDescriptor: () => Vr, has: (r, n) => t.has(n), set: (r, n, i) => t.add(n) && Reflect.set(r, n, i), ownKeys: () => [...t] };
    }
    var hs = Symbol.for("nodejs.util.inspect.custom");
    function Ee(e, t) {
      let r = uc(t), n = /* @__PURE__ */ new Set(), i = new Proxy(e, { get(o, s) {
        if (n.has(s))
          return o[s];
        let a = r.get(s);
        return a ? a.getPropertyValue(s) : o[s];
      }, has(o, s) {
        if (n.has(s))
          return true;
        let a = r.get(s);
        return a ? a.has?.(s) ?? true : Reflect.has(o, s);
      }, ownKeys(o) {
        let s = xs(Reflect.ownKeys(o), r), a = xs(Array.from(r.keys()), r);
        return [.../* @__PURE__ */ new Set([...s, ...a, ...n])];
      }, set(o, s, a) {
        return r.get(s)?.getPropertyDescriptor?.(s)?.writable === false ? false : (n.add(s), Reflect.set(o, s, a));
      }, getOwnPropertyDescriptor(o, s) {
        let a = Reflect.getOwnPropertyDescriptor(o, s);
        if (a && !a.configurable)
          return a;
        let l = r.get(s);
        return l ? l.getPropertyDescriptor ? { ...Vr, ...l?.getPropertyDescriptor(s) } : Vr : a;
      }, defineProperty(o, s, a) {
        return n.add(s), Reflect.defineProperty(o, s, a);
      } });
      return i[hs] = function(o, s, a = bs.inspect) {
        let l = { ...this };
        return delete l[hs], a(l, s);
      }, i;
    }
    function uc(e) {
      let t = /* @__PURE__ */ new Map();
      for (let r of e) {
        let n = r.getKeys();
        for (let i of n)
          t.set(i, r);
      }
      return t;
    }
    function xs(e, t) {
      return e.filter((r) => t.get(r)?.has?.(r) ?? true);
    }
    function Gt(e) {
      return { getKeys() {
        return e;
      }, has() {
        return false;
      }, getPropertyValue() {
      } };
    }
    var mt = class {
      constructor(t = 0, r) {
        this.context = r;
        this.lines = [];
        this.currentLine = "";
        this.currentIndent = 0;
        this.currentIndent = t;
      }
      write(t) {
        return typeof t == "string" ? this.currentLine += t : t.write(this), this;
      }
      writeJoined(t, r) {
        let n = r.length - 1;
        for (let i = 0; i < r.length; i++)
          this.write(r[i]), i !== n && this.write(t);
        return this;
      }
      writeLine(t) {
        return this.write(t).newLine();
      }
      newLine() {
        this.lines.push(this.indentedCurrentLine()), this.currentLine = "", this.marginSymbol = void 0;
        let t = this.afterNextNewLineCallback;
        return this.afterNextNewLineCallback = void 0, t?.(), this;
      }
      withIndent(t) {
        return this.indent(), t(this), this.unindent(), this;
      }
      afterNextNewline(t) {
        return this.afterNextNewLineCallback = t, this;
      }
      indent() {
        return this.currentIndent++, this;
      }
      unindent() {
        return this.currentIndent > 0 && this.currentIndent--, this;
      }
      addMarginSymbol(t) {
        return this.marginSymbol = t, this;
      }
      toString() {
        return this.lines.concat(this.indentedCurrentLine()).join(`
`);
      }
      getCurrentLineLength() {
        return this.currentLine.length;
      }
      indentedCurrentLine() {
        let t = this.currentLine.padStart(this.currentLine.length + 2 * this.currentIndent);
        return this.marginSymbol ? this.marginSymbol + t.slice(1) : t;
      }
    };
    function ft(e) {
      return e instanceof Date || Object.prototype.toString.call(e) === "[object Date]";
    }
    function Br(e) {
      return e.toString() !== "Invalid Date";
    }
    var gt = 9e15;
    var $e = 1e9;
    var hi = "0123456789abcdef";
    var Kr = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058";
    var Qr = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789";
    var xi = { precision: 20, rounding: 4, modulo: 1, toExpNeg: -7, toExpPos: 21, minE: -gt, maxE: gt, crypto: false };
    var vs;
    var Me;
    var w = true;
    var Jr = "[DecimalError] ";
    var Le = Jr + "Invalid argument: ";
    var Ts = Jr + "Precision limit exceeded";
    var Cs = Jr + "crypto unavailable";
    var As = "[object Decimal]";
    var ee = Math.floor;
    var j = Math.pow;
    var cc = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i;
    var pc = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i;
    var dc = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i;
    var Rs = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i;
    var ge = 1e7;
    var b = 7;
    var mc = 9007199254740991;
    var fc = Kr.length - 1;
    var bi = Qr.length - 1;
    var m = { toStringTag: As };
    m.absoluteValue = m.abs = function() {
      var e = new this.constructor(this);
      return e.s < 0 && (e.s = 1), h(e);
    };
    m.ceil = function() {
      return h(new this.constructor(this), this.e + 1, 2);
    };
    m.clampedTo = m.clamp = function(e, t) {
      var r, n = this, i = n.constructor;
      if (e = new i(e), t = new i(t), !e.s || !t.s)
        return new i(NaN);
      if (e.gt(t))
        throw Error(Le + t);
      return r = n.cmp(e), r < 0 ? e : n.cmp(t) > 0 ? t : new i(n);
    };
    m.comparedTo = m.cmp = function(e) {
      var t, r, n, i, o = this, s = o.d, a = (e = new o.constructor(e)).d, l = o.s, u = e.s;
      if (!s || !a)
        return !l || !u ? NaN : l !== u ? l : s === a ? 0 : !s ^ l < 0 ? 1 : -1;
      if (!s[0] || !a[0])
        return s[0] ? l : a[0] ? -u : 0;
      if (l !== u)
        return l;
      if (o.e !== e.e)
        return o.e > e.e ^ l < 0 ? 1 : -1;
      for (n = s.length, i = a.length, t = 0, r = n < i ? n : i; t < r; ++t)
        if (s[t] !== a[t])
          return s[t] > a[t] ^ l < 0 ? 1 : -1;
      return n === i ? 0 : n > i ^ l < 0 ? 1 : -1;
    };
    m.cosine = m.cos = function() {
      var e, t, r = this, n = r.constructor;
      return r.d ? r.d[0] ? (e = n.precision, t = n.rounding, n.precision = e + Math.max(r.e, r.sd()) + b, n.rounding = 1, r = gc(n, Fs(n, r)), n.precision = e, n.rounding = t, h(Me == 2 || Me == 3 ? r.neg() : r, e, t, true)) : new n(1) : new n(NaN);
    };
    m.cubeRoot = m.cbrt = function() {
      var e, t, r, n, i, o, s, a, l, u, c = this, p = c.constructor;
      if (!c.isFinite() || c.isZero())
        return new p(c);
      for (w = false, o = c.s * j(c.s * c, 1 / 3), !o || Math.abs(o) == 1 / 0 ? (r = W(c.d), e = c.e, (o = (e - r.length + 1) % 3) && (r += o == 1 || o == -2 ? "0" : "00"), o = j(r, 1 / 3), e = ee((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2)), o == 1 / 0 ? r = "5e" + e : (r = o.toExponential(), r = r.slice(0, r.indexOf("e") + 1) + e), n = new p(r), n.s = c.s) : n = new p(o.toString()), s = (e = p.precision) + 3; ; )
        if (a = n, l = a.times(a).times(a), u = l.plus(c), n = O(u.plus(c).times(a), u.plus(l), s + 2, 1), W(a.d).slice(0, s) === (r = W(n.d)).slice(0, s))
          if (r = r.slice(s - 3, s + 1), r == "9999" || !i && r == "4999") {
            if (!i && (h(a, e + 1, 0), a.times(a).times(a).eq(c))) {
              n = a;
              break;
            }
            s += 4, i = 1;
          } else {
            (!+r || !+r.slice(1) && r.charAt(0) == "5") && (h(n, e + 1, 1), t = !n.times(n).times(n).eq(c));
            break;
          }
      return w = true, h(n, e, p.rounding, t);
    };
    m.decimalPlaces = m.dp = function() {
      var e, t = this.d, r = NaN;
      if (t) {
        if (e = t.length - 1, r = (e - ee(this.e / b)) * b, e = t[e], e)
          for (; e % 10 == 0; e /= 10)
            r--;
        r < 0 && (r = 0);
      }
      return r;
    };
    m.dividedBy = m.div = function(e) {
      return O(this, new this.constructor(e));
    };
    m.dividedToIntegerBy = m.divToInt = function(e) {
      var t = this, r = t.constructor;
      return h(O(t, new r(e), 0, 1, 1), r.precision, r.rounding);
    };
    m.equals = m.eq = function(e) {
      return this.cmp(e) === 0;
    };
    m.floor = function() {
      return h(new this.constructor(this), this.e + 1, 3);
    };
    m.greaterThan = m.gt = function(e) {
      return this.cmp(e) > 0;
    };
    m.greaterThanOrEqualTo = m.gte = function(e) {
      var t = this.cmp(e);
      return t == 1 || t === 0;
    };
    m.hyperbolicCosine = m.cosh = function() {
      var e, t, r, n, i, o = this, s = o.constructor, a = new s(1);
      if (!o.isFinite())
        return new s(o.s ? 1 / 0 : NaN);
      if (o.isZero())
        return a;
      r = s.precision, n = s.rounding, s.precision = r + Math.max(o.e, o.sd()) + 4, s.rounding = 1, i = o.d.length, i < 32 ? (e = Math.ceil(i / 3), t = (1 / Wr(4, e)).toString()) : (e = 16, t = "2.3283064365386962890625e-10"), o = yt(s, 1, o.times(t), new s(1), true);
      for (var l, u = e, c = new s(8); u--; )
        l = o.times(o), o = a.minus(l.times(c.minus(l.times(c))));
      return h(o, s.precision = r, s.rounding = n, true);
    };
    m.hyperbolicSine = m.sinh = function() {
      var e, t, r, n, i = this, o = i.constructor;
      if (!i.isFinite() || i.isZero())
        return new o(i);
      if (t = o.precision, r = o.rounding, o.precision = t + Math.max(i.e, i.sd()) + 4, o.rounding = 1, n = i.d.length, n < 3)
        i = yt(o, 2, i, i, true);
      else {
        e = 1.4 * Math.sqrt(n), e = e > 16 ? 16 : e | 0, i = i.times(1 / Wr(5, e)), i = yt(o, 2, i, i, true);
        for (var s, a = new o(5), l = new o(16), u = new o(20); e--; )
          s = i.times(i), i = i.times(a.plus(s.times(l.times(s).plus(u))));
      }
      return o.precision = t, o.rounding = r, h(i, t, r, true);
    };
    m.hyperbolicTangent = m.tanh = function() {
      var e, t, r = this, n = r.constructor;
      return r.isFinite() ? r.isZero() ? new n(r) : (e = n.precision, t = n.rounding, n.precision = e + 7, n.rounding = 1, O(r.sinh(), r.cosh(), n.precision = e, n.rounding = t)) : new n(r.s);
    };
    m.inverseCosine = m.acos = function() {
      var e, t = this, r = t.constructor, n = t.abs().cmp(1), i = r.precision, o = r.rounding;
      return n !== -1 ? n === 0 ? t.isNeg() ? fe(r, i, o) : new r(0) : new r(NaN) : t.isZero() ? fe(r, i + 4, o).times(0.5) : (r.precision = i + 6, r.rounding = 1, t = t.asin(), e = fe(r, i + 4, o).times(0.5), r.precision = i, r.rounding = o, e.minus(t));
    };
    m.inverseHyperbolicCosine = m.acosh = function() {
      var e, t, r = this, n = r.constructor;
      return r.lte(1) ? new n(r.eq(1) ? 0 : NaN) : r.isFinite() ? (e = n.precision, t = n.rounding, n.precision = e + Math.max(Math.abs(r.e), r.sd()) + 4, n.rounding = 1, w = false, r = r.times(r).minus(1).sqrt().plus(r), w = true, n.precision = e, n.rounding = t, r.ln()) : new n(r);
    };
    m.inverseHyperbolicSine = m.asinh = function() {
      var e, t, r = this, n = r.constructor;
      return !r.isFinite() || r.isZero() ? new n(r) : (e = n.precision, t = n.rounding, n.precision = e + 2 * Math.max(Math.abs(r.e), r.sd()) + 6, n.rounding = 1, w = false, r = r.times(r).plus(1).sqrt().plus(r), w = true, n.precision = e, n.rounding = t, r.ln());
    };
    m.inverseHyperbolicTangent = m.atanh = function() {
      var e, t, r, n, i = this, o = i.constructor;
      return i.isFinite() ? i.e >= 0 ? new o(i.abs().eq(1) ? i.s / 0 : i.isZero() ? i : NaN) : (e = o.precision, t = o.rounding, n = i.sd(), Math.max(n, e) < 2 * -i.e - 1 ? h(new o(i), e, t, true) : (o.precision = r = n - i.e, i = O(i.plus(1), new o(1).minus(i), r + e, 1), o.precision = e + 4, o.rounding = 1, i = i.ln(), o.precision = e, o.rounding = t, i.times(0.5))) : new o(NaN);
    };
    m.inverseSine = m.asin = function() {
      var e, t, r, n, i = this, o = i.constructor;
      return i.isZero() ? new o(i) : (t = i.abs().cmp(1), r = o.precision, n = o.rounding, t !== -1 ? t === 0 ? (e = fe(o, r + 4, n).times(0.5), e.s = i.s, e) : new o(NaN) : (o.precision = r + 6, o.rounding = 1, i = i.div(new o(1).minus(i.times(i)).sqrt().plus(1)).atan(), o.precision = r, o.rounding = n, i.times(2)));
    };
    m.inverseTangent = m.atan = function() {
      var e, t, r, n, i, o, s, a, l, u = this, c = u.constructor, p = c.precision, d = c.rounding;
      if (u.isFinite()) {
        if (u.isZero())
          return new c(u);
        if (u.abs().eq(1) && p + 4 <= bi)
          return s = fe(c, p + 4, d).times(0.25), s.s = u.s, s;
      } else {
        if (!u.s)
          return new c(NaN);
        if (p + 4 <= bi)
          return s = fe(c, p + 4, d).times(0.5), s.s = u.s, s;
      }
      for (c.precision = a = p + 10, c.rounding = 1, r = Math.min(28, a / b + 2 | 0), e = r; e; --e)
        u = u.div(u.times(u).plus(1).sqrt().plus(1));
      for (w = false, t = Math.ceil(a / b), n = 1, l = u.times(u), s = new c(u), i = u; e !== -1; )
        if (i = i.times(l), o = s.minus(i.div(n += 2)), i = i.times(l), s = o.plus(i.div(n += 2)), s.d[t] !== void 0)
          for (e = t; s.d[e] === o.d[e] && e--; )
            ;
      return r && (s = s.times(2 << r - 1)), w = true, h(s, c.precision = p, c.rounding = d, true);
    };
    m.isFinite = function() {
      return !!this.d;
    };
    m.isInteger = m.isInt = function() {
      return !!this.d && ee(this.e / b) > this.d.length - 2;
    };
    m.isNaN = function() {
      return !this.s;
    };
    m.isNegative = m.isNeg = function() {
      return this.s < 0;
    };
    m.isPositive = m.isPos = function() {
      return this.s > 0;
    };
    m.isZero = function() {
      return !!this.d && this.d[0] === 0;
    };
    m.lessThan = m.lt = function(e) {
      return this.cmp(e) < 0;
    };
    m.lessThanOrEqualTo = m.lte = function(e) {
      return this.cmp(e) < 1;
    };
    m.logarithm = m.log = function(e) {
      var t, r, n, i, o, s, a, l, u = this, c = u.constructor, p = c.precision, d = c.rounding, f = 5;
      if (e == null)
        e = new c(10), t = true;
      else {
        if (e = new c(e), r = e.d, e.s < 0 || !r || !r[0] || e.eq(1))
          return new c(NaN);
        t = e.eq(10);
      }
      if (r = u.d, u.s < 0 || !r || !r[0] || u.eq(1))
        return new c(r && !r[0] ? -1 / 0 : u.s != 1 ? NaN : r ? 0 : 1 / 0);
      if (t)
        if (r.length > 1)
          o = true;
        else {
          for (i = r[0]; i % 10 === 0; )
            i /= 10;
          o = i !== 1;
        }
      if (w = false, a = p + f, s = Ne(u, a), n = t ? Gr(c, a + 10) : Ne(e, a), l = O(s, n, a, 1), Jt(l.d, i = p, d))
        do
          if (a += 10, s = Ne(u, a), n = t ? Gr(c, a + 10) : Ne(e, a), l = O(s, n, a, 1), !o) {
            +W(l.d).slice(i + 1, i + 15) + 1 == 1e14 && (l = h(l, p + 1, 0));
            break;
          }
        while (Jt(l.d, i += 10, d));
      return w = true, h(l, p, d);
    };
    m.minus = m.sub = function(e) {
      var t, r, n, i, o, s, a, l, u, c, p, d, f = this, y = f.constructor;
      if (e = new y(e), !f.d || !e.d)
        return !f.s || !e.s ? e = new y(NaN) : f.d ? e.s = -e.s : e = new y(e.d || f.s !== e.s ? f : NaN), e;
      if (f.s != e.s)
        return e.s = -e.s, f.plus(e);
      if (u = f.d, d = e.d, a = y.precision, l = y.rounding, !u[0] || !d[0]) {
        if (d[0])
          e.s = -e.s;
        else if (u[0])
          e = new y(f);
        else
          return new y(l === 3 ? -0 : 0);
        return w ? h(e, a, l) : e;
      }
      if (r = ee(e.e / b), c = ee(f.e / b), u = u.slice(), o = c - r, o) {
        for (p = o < 0, p ? (t = u, o = -o, s = d.length) : (t = d, r = c, s = u.length), n = Math.max(Math.ceil(a / b), s) + 2, o > n && (o = n, t.length = 1), t.reverse(), n = o; n--; )
          t.push(0);
        t.reverse();
      } else {
        for (n = u.length, s = d.length, p = n < s, p && (s = n), n = 0; n < s; n++)
          if (u[n] != d[n]) {
            p = u[n] < d[n];
            break;
          }
        o = 0;
      }
      for (p && (t = u, u = d, d = t, e.s = -e.s), s = u.length, n = d.length - s; n > 0; --n)
        u[s++] = 0;
      for (n = d.length; n > o; ) {
        if (u[--n] < d[n]) {
          for (i = n; i && u[--i] === 0; )
            u[i] = ge - 1;
          --u[i], u[n] += ge;
        }
        u[n] -= d[n];
      }
      for (; u[--s] === 0; )
        u.pop();
      for (; u[0] === 0; u.shift())
        --r;
      return u[0] ? (e.d = u, e.e = Hr(u, r), w ? h(e, a, l) : e) : new y(l === 3 ? -0 : 0);
    };
    m.modulo = m.mod = function(e) {
      var t, r = this, n = r.constructor;
      return e = new n(e), !r.d || !e.s || e.d && !e.d[0] ? new n(NaN) : !e.d || r.d && !r.d[0] ? h(new n(r), n.precision, n.rounding) : (w = false, n.modulo == 9 ? (t = O(r, e.abs(), 0, 3, 1), t.s *= e.s) : t = O(r, e, 0, n.modulo, 1), t = t.times(e), w = true, r.minus(t));
    };
    m.naturalExponential = m.exp = function() {
      return Ei(this);
    };
    m.naturalLogarithm = m.ln = function() {
      return Ne(this);
    };
    m.negated = m.neg = function() {
      var e = new this.constructor(this);
      return e.s = -e.s, h(e);
    };
    m.plus = m.add = function(e) {
      var t, r, n, i, o, s, a, l, u, c, p = this, d = p.constructor;
      if (e = new d(e), !p.d || !e.d)
        return !p.s || !e.s ? e = new d(NaN) : p.d || (e = new d(e.d || p.s === e.s ? p : NaN)), e;
      if (p.s != e.s)
        return e.s = -e.s, p.minus(e);
      if (u = p.d, c = e.d, a = d.precision, l = d.rounding, !u[0] || !c[0])
        return c[0] || (e = new d(p)), w ? h(e, a, l) : e;
      if (o = ee(p.e / b), n = ee(e.e / b), u = u.slice(), i = o - n, i) {
        for (i < 0 ? (r = u, i = -i, s = c.length) : (r = c, n = o, s = u.length), o = Math.ceil(a / b), s = o > s ? o + 1 : s + 1, i > s && (i = s, r.length = 1), r.reverse(); i--; )
          r.push(0);
        r.reverse();
      }
      for (s = u.length, i = c.length, s - i < 0 && (i = s, r = c, c = u, u = r), t = 0; i; )
        t = (u[--i] = u[i] + c[i] + t) / ge | 0, u[i] %= ge;
      for (t && (u.unshift(t), ++n), s = u.length; u[--s] == 0; )
        u.pop();
      return e.d = u, e.e = Hr(u, n), w ? h(e, a, l) : e;
    };
    m.precision = m.sd = function(e) {
      var t, r = this;
      if (e !== void 0 && e !== !!e && e !== 1 && e !== 0)
        throw Error(Le + e);
      return r.d ? (t = Ms(r.d), e && r.e + 1 > t && (t = r.e + 1)) : t = NaN, t;
    };
    m.round = function() {
      var e = this, t = e.constructor;
      return h(new t(e), e.e + 1, t.rounding);
    };
    m.sine = m.sin = function() {
      var e, t, r = this, n = r.constructor;
      return r.isFinite() ? r.isZero() ? new n(r) : (e = n.precision, t = n.rounding, n.precision = e + Math.max(r.e, r.sd()) + b, n.rounding = 1, r = hc(n, Fs(n, r)), n.precision = e, n.rounding = t, h(Me > 2 ? r.neg() : r, e, t, true)) : new n(NaN);
    };
    m.squareRoot = m.sqrt = function() {
      var e, t, r, n, i, o, s = this, a = s.d, l = s.e, u = s.s, c = s.constructor;
      if (u !== 1 || !a || !a[0])
        return new c(!u || u < 0 && (!a || a[0]) ? NaN : a ? s : 1 / 0);
      for (w = false, u = Math.sqrt(+s), u == 0 || u == 1 / 0 ? (t = W(a), (t.length + l) % 2 == 0 && (t += "0"), u = Math.sqrt(t), l = ee((l + 1) / 2) - (l < 0 || l % 2), u == 1 / 0 ? t = "5e" + l : (t = u.toExponential(), t = t.slice(0, t.indexOf("e") + 1) + l), n = new c(t)) : n = new c(u.toString()), r = (l = c.precision) + 3; ; )
        if (o = n, n = o.plus(O(s, o, r + 2, 1)).times(0.5), W(o.d).slice(0, r) === (t = W(n.d)).slice(0, r))
          if (t = t.slice(r - 3, r + 1), t == "9999" || !i && t == "4999") {
            if (!i && (h(o, l + 1, 0), o.times(o).eq(s))) {
              n = o;
              break;
            }
            r += 4, i = 1;
          } else {
            (!+t || !+t.slice(1) && t.charAt(0) == "5") && (h(n, l + 1, 1), e = !n.times(n).eq(s));
            break;
          }
      return w = true, h(n, l, c.rounding, e);
    };
    m.tangent = m.tan = function() {
      var e, t, r = this, n = r.constructor;
      return r.isFinite() ? r.isZero() ? new n(r) : (e = n.precision, t = n.rounding, n.precision = e + 10, n.rounding = 1, r = r.sin(), r.s = 1, r = O(r, new n(1).minus(r.times(r)).sqrt(), e + 10, 0), n.precision = e, n.rounding = t, h(Me == 2 || Me == 4 ? r.neg() : r, e, t, true)) : new n(NaN);
    };
    m.times = m.mul = function(e) {
      var t, r, n, i, o, s, a, l, u, c = this, p = c.constructor, d = c.d, f = (e = new p(e)).d;
      if (e.s *= c.s, !d || !d[0] || !f || !f[0])
        return new p(!e.s || d && !d[0] && !f || f && !f[0] && !d ? NaN : !d || !f ? e.s / 0 : e.s * 0);
      for (r = ee(c.e / b) + ee(e.e / b), l = d.length, u = f.length, l < u && (o = d, d = f, f = o, s = l, l = u, u = s), o = [], s = l + u, n = s; n--; )
        o.push(0);
      for (n = u; --n >= 0; ) {
        for (t = 0, i = l + n; i > n; )
          a = o[i] + f[n] * d[i - n - 1] + t, o[i--] = a % ge | 0, t = a / ge | 0;
        o[i] = (o[i] + t) % ge | 0;
      }
      for (; !o[--s]; )
        o.pop();
      return t ? ++r : o.shift(), e.d = o, e.e = Hr(o, r), w ? h(e, p.precision, p.rounding) : e;
    };
    m.toBinary = function(e, t) {
      return Pi(this, 2, e, t);
    };
    m.toDecimalPlaces = m.toDP = function(e, t) {
      var r = this, n = r.constructor;
      return r = new n(r), e === void 0 ? r : (se(e, 0, $e), t === void 0 ? t = n.rounding : se(t, 0, 8), h(r, e + r.e + 1, t));
    };
    m.toExponential = function(e, t) {
      var r, n = this, i = n.constructor;
      return e === void 0 ? r = we(n, true) : (se(e, 0, $e), t === void 0 ? t = i.rounding : se(t, 0, 8), n = h(new i(n), e + 1, t), r = we(n, true, e + 1)), n.isNeg() && !n.isZero() ? "-" + r : r;
    };
    m.toFixed = function(e, t) {
      var r, n, i = this, o = i.constructor;
      return e === void 0 ? r = we(i) : (se(e, 0, $e), t === void 0 ? t = o.rounding : se(t, 0, 8), n = h(new o(i), e + i.e + 1, t), r = we(n, false, e + n.e + 1)), i.isNeg() && !i.isZero() ? "-" + r : r;
    };
    m.toFraction = function(e) {
      var t, r, n, i, o, s, a, l, u, c, p, d, f = this, y = f.d, g = f.constructor;
      if (!y)
        return new g(f);
      if (u = r = new g(1), n = l = new g(0), t = new g(n), o = t.e = Ms(y) - f.e - 1, s = o % b, t.d[0] = j(10, s < 0 ? b + s : s), e == null)
        e = o > 0 ? t : u;
      else {
        if (a = new g(e), !a.isInt() || a.lt(u))
          throw Error(Le + a);
        e = a.gt(t) ? o > 0 ? t : u : a;
      }
      for (w = false, a = new g(W(y)), c = g.precision, g.precision = o = y.length * b * 2; p = O(a, t, 0, 1, 1), i = r.plus(p.times(n)), i.cmp(e) != 1; )
        r = n, n = i, i = u, u = l.plus(p.times(i)), l = i, i = t, t = a.minus(p.times(i)), a = i;
      return i = O(e.minus(r), n, 0, 1, 1), l = l.plus(i.times(u)), r = r.plus(i.times(n)), l.s = u.s = f.s, d = O(u, n, o, 1).minus(f).abs().cmp(O(l, r, o, 1).minus(f).abs()) < 1 ? [u, n] : [l, r], g.precision = c, w = true, d;
    };
    m.toHexadecimal = m.toHex = function(e, t) {
      return Pi(this, 16, e, t);
    };
    m.toNearest = function(e, t) {
      var r = this, n = r.constructor;
      if (r = new n(r), e == null) {
        if (!r.d)
          return r;
        e = new n(1), t = n.rounding;
      } else {
        if (e = new n(e), t === void 0 ? t = n.rounding : se(t, 0, 8), !r.d)
          return e.s ? r : e;
        if (!e.d)
          return e.s && (e.s = r.s), e;
      }
      return e.d[0] ? (w = false, r = O(r, e, 0, t, 1).times(e), w = true, h(r)) : (e.s = r.s, r = e), r;
    };
    m.toNumber = function() {
      return +this;
    };
    m.toOctal = function(e, t) {
      return Pi(this, 8, e, t);
    };
    m.toPower = m.pow = function(e) {
      var t, r, n, i, o, s, a = this, l = a.constructor, u = +(e = new l(e));
      if (!a.d || !e.d || !a.d[0] || !e.d[0])
        return new l(j(+a, u));
      if (a = new l(a), a.eq(1))
        return a;
      if (n = l.precision, o = l.rounding, e.eq(1))
        return h(a, n, o);
      if (t = ee(e.e / b), t >= e.d.length - 1 && (r = u < 0 ? -u : u) <= mc)
        return i = Ss(l, a, r, n), e.s < 0 ? new l(1).div(i) : h(i, n, o);
      if (s = a.s, s < 0) {
        if (t < e.d.length - 1)
          return new l(NaN);
        if (e.d[t] & 1 || (s = 1), a.e == 0 && a.d[0] == 1 && a.d.length == 1)
          return a.s = s, a;
      }
      return r = j(+a, u), t = r == 0 || !isFinite(r) ? ee(u * (Math.log("0." + W(a.d)) / Math.LN10 + a.e + 1)) : new l(r + "").e, t > l.maxE + 1 || t < l.minE - 1 ? new l(t > 0 ? s / 0 : 0) : (w = false, l.rounding = a.s = 1, r = Math.min(12, (t + "").length), i = Ei(e.times(Ne(a, n + r)), n), i.d && (i = h(i, n + 5, 1), Jt(i.d, n, o) && (t = n + 10, i = h(Ei(e.times(Ne(a, t + r)), t), t + 5, 1), +W(i.d).slice(n + 1, n + 15) + 1 == 1e14 && (i = h(i, n + 1, 0)))), i.s = s, w = true, l.rounding = o, h(i, n, o));
    };
    m.toPrecision = function(e, t) {
      var r, n = this, i = n.constructor;
      return e === void 0 ? r = we(n, n.e <= i.toExpNeg || n.e >= i.toExpPos) : (se(e, 1, $e), t === void 0 ? t = i.rounding : se(t, 0, 8), n = h(new i(n), e, t), r = we(n, e <= n.e || n.e <= i.toExpNeg, e)), n.isNeg() && !n.isZero() ? "-" + r : r;
    };
    m.toSignificantDigits = m.toSD = function(e, t) {
      var r = this, n = r.constructor;
      return e === void 0 ? (e = n.precision, t = n.rounding) : (se(e, 1, $e), t === void 0 ? t = n.rounding : se(t, 0, 8)), h(new n(r), e, t);
    };
    m.toString = function() {
      var e = this, t = e.constructor, r = we(e, e.e <= t.toExpNeg || e.e >= t.toExpPos);
      return e.isNeg() && !e.isZero() ? "-" + r : r;
    };
    m.truncated = m.trunc = function() {
      return h(new this.constructor(this), this.e + 1, 1);
    };
    m.valueOf = m.toJSON = function() {
      var e = this, t = e.constructor, r = we(e, e.e <= t.toExpNeg || e.e >= t.toExpPos);
      return e.isNeg() ? "-" + r : r;
    };
    function W(e) {
      var t, r, n, i = e.length - 1, o = "", s = e[0];
      if (i > 0) {
        for (o += s, t = 1; t < i; t++)
          n = e[t] + "", r = b - n.length, r && (o += _e(r)), o += n;
        s = e[t], n = s + "", r = b - n.length, r && (o += _e(r));
      } else if (s === 0)
        return "0";
      for (; s % 10 === 0; )
        s /= 10;
      return o + s;
    }
    function se(e, t, r) {
      if (e !== ~~e || e < t || e > r)
        throw Error(Le + e);
    }
    function Jt(e, t, r, n) {
      var i, o, s, a;
      for (o = e[0]; o >= 10; o /= 10)
        --t;
      return --t < 0 ? (t += b, i = 0) : (i = Math.ceil((t + 1) / b), t %= b), o = j(10, b - t), a = e[i] % o | 0, n == null ? t < 3 ? (t == 0 ? a = a / 100 | 0 : t == 1 && (a = a / 10 | 0), s = r < 4 && a == 99999 || r > 3 && a == 49999 || a == 5e4 || a == 0) : s = (r < 4 && a + 1 == o || r > 3 && a + 1 == o / 2) && (e[i + 1] / o / 100 | 0) == j(10, t - 2) - 1 || (a == o / 2 || a == 0) && (e[i + 1] / o / 100 | 0) == 0 : t < 4 ? (t == 0 ? a = a / 1e3 | 0 : t == 1 ? a = a / 100 | 0 : t == 2 && (a = a / 10 | 0), s = (n || r < 4) && a == 9999 || !n && r > 3 && a == 4999) : s = ((n || r < 4) && a + 1 == o || !n && r > 3 && a + 1 == o / 2) && (e[i + 1] / o / 1e3 | 0) == j(10, t - 3) - 1, s;
    }
    function Ur(e, t, r) {
      for (var n, i = [0], o, s = 0, a = e.length; s < a; ) {
        for (o = i.length; o--; )
          i[o] *= t;
        for (i[0] += hi.indexOf(e.charAt(s++)), n = 0; n < i.length; n++)
          i[n] > r - 1 && (i[n + 1] === void 0 && (i[n + 1] = 0), i[n + 1] += i[n] / r | 0, i[n] %= r);
      }
      return i.reverse();
    }
    function gc(e, t) {
      var r, n, i;
      if (t.isZero())
        return t;
      n = t.d.length, n < 32 ? (r = Math.ceil(n / 3), i = (1 / Wr(4, r)).toString()) : (r = 16, i = "2.3283064365386962890625e-10"), e.precision += r, t = yt(e, 1, t.times(i), new e(1));
      for (var o = r; o--; ) {
        var s = t.times(t);
        t = s.times(s).minus(s).times(8).plus(1);
      }
      return e.precision -= r, t;
    }
    var O = /* @__PURE__ */ function() {
      function e(n, i, o) {
        var s, a = 0, l = n.length;
        for (n = n.slice(); l--; )
          s = n[l] * i + a, n[l] = s % o | 0, a = s / o | 0;
        return a && n.unshift(a), n;
      }
      function t(n, i, o, s) {
        var a, l;
        if (o != s)
          l = o > s ? 1 : -1;
        else
          for (a = l = 0; a < o; a++)
            if (n[a] != i[a]) {
              l = n[a] > i[a] ? 1 : -1;
              break;
            }
        return l;
      }
      function r(n, i, o, s) {
        for (var a = 0; o--; )
          n[o] -= a, a = n[o] < i[o] ? 1 : 0, n[o] = a * s + n[o] - i[o];
        for (; !n[0] && n.length > 1; )
          n.shift();
      }
      return function(n, i, o, s, a, l) {
        var u, c, p, d, f, y, g, P, T, C, x, R, ce, J, Ke, $, z, Ae, Y, tt, hr = n.constructor, An = n.s == i.s ? 1 : -1, Z = n.d, k = i.d;
        if (!Z || !Z[0] || !k || !k[0])
          return new hr(!n.s || !i.s || (Z ? k && Z[0] == k[0] : !k) ? NaN : Z && Z[0] == 0 || !k ? An * 0 : An / 0);
        for (l ? (f = 1, c = n.e - i.e) : (l = ge, f = b, c = ee(n.e / f) - ee(i.e / f)), Y = k.length, z = Z.length, T = new hr(An), C = T.d = [], p = 0; k[p] == (Z[p] || 0); p++)
          ;
        if (k[p] > (Z[p] || 0) && c--, o == null ? (J = o = hr.precision, s = hr.rounding) : a ? J = o + (n.e - i.e) + 1 : J = o, J < 0)
          C.push(1), y = true;
        else {
          if (J = J / f + 2 | 0, p = 0, Y == 1) {
            for (d = 0, k = k[0], J++; (p < z || d) && J--; p++)
              Ke = d * l + (Z[p] || 0), C[p] = Ke / k | 0, d = Ke % k | 0;
            y = d || p < z;
          } else {
            for (d = l / (k[0] + 1) | 0, d > 1 && (k = e(k, d, l), Z = e(Z, d, l), Y = k.length, z = Z.length), $ = Y, x = Z.slice(0, Y), R = x.length; R < Y; )
              x[R++] = 0;
            tt = k.slice(), tt.unshift(0), Ae = k[0], k[1] >= l / 2 && ++Ae;
            do
              d = 0, u = t(k, x, Y, R), u < 0 ? (ce = x[0], Y != R && (ce = ce * l + (x[1] || 0)), d = ce / Ae | 0, d > 1 ? (d >= l && (d = l - 1), g = e(k, d, l), P = g.length, R = x.length, u = t(g, x, P, R), u == 1 && (d--, r(g, Y < P ? tt : k, P, l))) : (d == 0 && (u = d = 1), g = k.slice()), P = g.length, P < R && g.unshift(0), r(x, g, R, l), u == -1 && (R = x.length, u = t(k, x, Y, R), u < 1 && (d++, r(x, Y < R ? tt : k, R, l))), R = x.length) : u === 0 && (d++, x = [0]), C[p++] = d, u && x[0] ? x[R++] = Z[$] || 0 : (x = [Z[$]], R = 1);
            while (($++ < z || x[0] !== void 0) && J--);
            y = x[0] !== void 0;
          }
          C[0] || C.shift();
        }
        if (f == 1)
          T.e = c, vs = y;
        else {
          for (p = 1, d = C[0]; d >= 10; d /= 10)
            p++;
          T.e = p + c * f - 1, h(T, a ? o + T.e + 1 : o, s, y);
        }
        return T;
      };
    }();
    function h(e, t, r, n) {
      var i, o, s, a, l, u, c, p, d, f = e.constructor;
      e:
        if (t != null) {
          if (p = e.d, !p)
            return e;
          for (i = 1, a = p[0]; a >= 10; a /= 10)
            i++;
          if (o = t - i, o < 0)
            o += b, s = t, c = p[d = 0], l = c / j(10, i - s - 1) % 10 | 0;
          else if (d = Math.ceil((o + 1) / b), a = p.length, d >= a)
            if (n) {
              for (; a++ <= d; )
                p.push(0);
              c = l = 0, i = 1, o %= b, s = o - b + 1;
            } else
              break e;
          else {
            for (c = a = p[d], i = 1; a >= 10; a /= 10)
              i++;
            o %= b, s = o - b + i, l = s < 0 ? 0 : c / j(10, i - s - 1) % 10 | 0;
          }
          if (n = n || t < 0 || p[d + 1] !== void 0 || (s < 0 ? c : c % j(10, i - s - 1)), u = r < 4 ? (l || n) && (r == 0 || r == (e.s < 0 ? 3 : 2)) : l > 5 || l == 5 && (r == 4 || n || r == 6 && (o > 0 ? s > 0 ? c / j(10, i - s) : 0 : p[d - 1]) % 10 & 1 || r == (e.s < 0 ? 8 : 7)), t < 1 || !p[0])
            return p.length = 0, u ? (t -= e.e + 1, p[0] = j(10, (b - t % b) % b), e.e = -t || 0) : p[0] = e.e = 0, e;
          if (o == 0 ? (p.length = d, a = 1, d--) : (p.length = d + 1, a = j(10, b - o), p[d] = s > 0 ? (c / j(10, i - s) % j(10, s) | 0) * a : 0), u)
            for (; ; )
              if (d == 0) {
                for (o = 1, s = p[0]; s >= 10; s /= 10)
                  o++;
                for (s = p[0] += a, a = 1; s >= 10; s /= 10)
                  a++;
                o != a && (e.e++, p[0] == ge && (p[0] = 1));
                break;
              } else {
                if (p[d] += a, p[d] != ge)
                  break;
                p[d--] = 0, a = 1;
              }
          for (o = p.length; p[--o] === 0; )
            p.pop();
        }
      return w && (e.e > f.maxE ? (e.d = null, e.e = NaN) : e.e < f.minE && (e.e = 0, e.d = [0])), e;
    }
    function we(e, t, r) {
      if (!e.isFinite())
        return ks(e);
      var n, i = e.e, o = W(e.d), s = o.length;
      return t ? (r && (n = r - s) > 0 ? o = o.charAt(0) + "." + o.slice(1) + _e(n) : s > 1 && (o = o.charAt(0) + "." + o.slice(1)), o = o + (e.e < 0 ? "e" : "e+") + e.e) : i < 0 ? (o = "0." + _e(-i - 1) + o, r && (n = r - s) > 0 && (o += _e(n))) : i >= s ? (o += _e(i + 1 - s), r && (n = r - i - 1) > 0 && (o = o + "." + _e(n))) : ((n = i + 1) < s && (o = o.slice(0, n) + "." + o.slice(n)), r && (n = r - s) > 0 && (i + 1 === s && (o += "."), o += _e(n))), o;
    }
    function Hr(e, t) {
      var r = e[0];
      for (t *= b; r >= 10; r /= 10)
        t++;
      return t;
    }
    function Gr(e, t, r) {
      if (t > fc)
        throw w = true, r && (e.precision = r), Error(Ts);
      return h(new e(Kr), t, 1, true);
    }
    function fe(e, t, r) {
      if (t > bi)
        throw Error(Ts);
      return h(new e(Qr), t, r, true);
    }
    function Ms(e) {
      var t = e.length - 1, r = t * b + 1;
      if (t = e[t], t) {
        for (; t % 10 == 0; t /= 10)
          r--;
        for (t = e[0]; t >= 10; t /= 10)
          r++;
      }
      return r;
    }
    function _e(e) {
      for (var t = ""; e--; )
        t += "0";
      return t;
    }
    function Ss(e, t, r, n) {
      var i, o = new e(1), s = Math.ceil(n / b + 4);
      for (w = false; ; ) {
        if (r % 2 && (o = o.times(t), ws(o.d, s) && (i = true)), r = ee(r / 2), r === 0) {
          r = o.d.length - 1, i && o.d[r] === 0 && ++o.d[r];
          break;
        }
        t = t.times(t), ws(t.d, s);
      }
      return w = true, o;
    }
    function Es(e) {
      return e.d[e.d.length - 1] & 1;
    }
    function Is(e, t, r) {
      for (var n, i = new e(t[0]), o = 0; ++o < t.length; )
        if (n = new e(t[o]), n.s)
          i[r](n) && (i = n);
        else {
          i = n;
          break;
        }
      return i;
    }
    function Ei(e, t) {
      var r, n, i, o, s, a, l, u = 0, c = 0, p = 0, d = e.constructor, f = d.rounding, y = d.precision;
      if (!e.d || !e.d[0] || e.e > 17)
        return new d(e.d ? e.d[0] ? e.s < 0 ? 0 : 1 / 0 : 1 : e.s ? e.s < 0 ? 0 : e : 0 / 0);
      for (t == null ? (w = false, l = y) : l = t, a = new d(0.03125); e.e > -2; )
        e = e.times(a), p += 5;
      for (n = Math.log(j(2, p)) / Math.LN10 * 2 + 5 | 0, l += n, r = o = s = new d(1), d.precision = l; ; ) {
        if (o = h(o.times(e), l, 1), r = r.times(++c), a = s.plus(O(o, r, l, 1)), W(a.d).slice(0, l) === W(s.d).slice(0, l)) {
          for (i = p; i--; )
            s = h(s.times(s), l, 1);
          if (t == null)
            if (u < 3 && Jt(s.d, l - n, f, u))
              d.precision = l += 10, r = o = a = new d(1), c = 0, u++;
            else
              return h(s, d.precision = y, f, w = true);
          else
            return d.precision = y, s;
        }
        s = a;
      }
    }
    function Ne(e, t) {
      var r, n, i, o, s, a, l, u, c, p, d, f = 1, y = 10, g = e, P = g.d, T = g.constructor, C = T.rounding, x = T.precision;
      if (g.s < 0 || !P || !P[0] || !g.e && P[0] == 1 && P.length == 1)
        return new T(P && !P[0] ? -1 / 0 : g.s != 1 ? NaN : P ? 0 : g);
      if (t == null ? (w = false, c = x) : c = t, T.precision = c += y, r = W(P), n = r.charAt(0), Math.abs(o = g.e) < 15e14) {
        for (; n < 7 && n != 1 || n == 1 && r.charAt(1) > 3; )
          g = g.times(e), r = W(g.d), n = r.charAt(0), f++;
        o = g.e, n > 1 ? (g = new T("0." + r), o++) : g = new T(n + "." + r.slice(1));
      } else
        return u = Gr(T, c + 2, x).times(o + ""), g = Ne(new T(n + "." + r.slice(1)), c - y).plus(u), T.precision = x, t == null ? h(g, x, C, w = true) : g;
      for (p = g, l = s = g = O(g.minus(1), g.plus(1), c, 1), d = h(g.times(g), c, 1), i = 3; ; ) {
        if (s = h(s.times(d), c, 1), u = l.plus(O(s, new T(i), c, 1)), W(u.d).slice(0, c) === W(l.d).slice(0, c))
          if (l = l.times(2), o !== 0 && (l = l.plus(Gr(T, c + 2, x).times(o + ""))), l = O(l, new T(f), c, 1), t == null)
            if (Jt(l.d, c - y, C, a))
              T.precision = c += y, u = s = g = O(p.minus(1), p.plus(1), c, 1), d = h(g.times(g), c, 1), i = a = 1;
            else
              return h(l, T.precision = x, C, w = true);
          else
            return T.precision = x, l;
        l = u, i += 2;
      }
    }
    function ks(e) {
      return String(e.s * e.s / 0);
    }
    function wi(e, t) {
      var r, n, i;
      for ((r = t.indexOf(".")) > -1 && (t = t.replace(".", "")), (n = t.search(/e/i)) > 0 ? (r < 0 && (r = n), r += +t.slice(n + 1), t = t.substring(0, n)) : r < 0 && (r = t.length), n = 0; t.charCodeAt(n) === 48; n++)
        ;
      for (i = t.length; t.charCodeAt(i - 1) === 48; --i)
        ;
      if (t = t.slice(n, i), t) {
        if (i -= n, e.e = r = r - n - 1, e.d = [], n = (r + 1) % b, r < 0 && (n += b), n < i) {
          for (n && e.d.push(+t.slice(0, n)), i -= b; n < i; )
            e.d.push(+t.slice(n, n += b));
          t = t.slice(n), n = b - t.length;
        } else
          n -= i;
        for (; n--; )
          t += "0";
        e.d.push(+t), w && (e.e > e.constructor.maxE ? (e.d = null, e.e = NaN) : e.e < e.constructor.minE && (e.e = 0, e.d = [0]));
      } else
        e.e = 0, e.d = [0];
      return e;
    }
    function yc(e, t) {
      var r, n, i, o, s, a, l, u, c;
      if (t.indexOf("_") > -1) {
        if (t = t.replace(/(\d)_(?=\d)/g, "$1"), Rs.test(t))
          return wi(e, t);
      } else if (t === "Infinity" || t === "NaN")
        return +t || (e.s = NaN), e.e = NaN, e.d = null, e;
      if (pc.test(t))
        r = 16, t = t.toLowerCase();
      else if (cc.test(t))
        r = 2;
      else if (dc.test(t))
        r = 8;
      else
        throw Error(Le + t);
      for (o = t.search(/p/i), o > 0 ? (l = +t.slice(o + 1), t = t.substring(2, o)) : t = t.slice(2), o = t.indexOf("."), s = o >= 0, n = e.constructor, s && (t = t.replace(".", ""), a = t.length, o = a - o, i = Ss(n, new n(r), o, o * 2)), u = Ur(t, r, ge), c = u.length - 1, o = c; u[o] === 0; --o)
        u.pop();
      return o < 0 ? new n(e.s * 0) : (e.e = Hr(u, c), e.d = u, w = false, s && (e = O(e, i, a * 4)), l && (e = e.times(Math.abs(l) < 54 ? j(2, l) : ze.pow(2, l))), w = true, e);
    }
    function hc(e, t) {
      var r, n = t.d.length;
      if (n < 3)
        return t.isZero() ? t : yt(e, 2, t, t);
      r = 1.4 * Math.sqrt(n), r = r > 16 ? 16 : r | 0, t = t.times(1 / Wr(5, r)), t = yt(e, 2, t, t);
      for (var i, o = new e(5), s = new e(16), a = new e(20); r--; )
        i = t.times(t), t = t.times(o.plus(i.times(s.times(i).minus(a))));
      return t;
    }
    function yt(e, t, r, n, i) {
      var o, s, a, l, u = 1, c = e.precision, p = Math.ceil(c / b);
      for (w = false, l = r.times(r), a = new e(n); ; ) {
        if (s = O(a.times(l), new e(t++ * t++), c, 1), a = i ? n.plus(s) : n.minus(s), n = O(s.times(l), new e(t++ * t++), c, 1), s = a.plus(n), s.d[p] !== void 0) {
          for (o = p; s.d[o] === a.d[o] && o--; )
            ;
          if (o == -1)
            break;
        }
        o = a, a = n, n = s, s = o, u++;
      }
      return w = true, s.d.length = p + 1, s;
    }
    function Wr(e, t) {
      for (var r = e; --t; )
        r *= e;
      return r;
    }
    function Fs(e, t) {
      var r, n = t.s < 0, i = fe(e, e.precision, 1), o = i.times(0.5);
      if (t = t.abs(), t.lte(o))
        return Me = n ? 4 : 1, t;
      if (r = t.divToInt(i), r.isZero())
        Me = n ? 3 : 2;
      else {
        if (t = t.minus(r.times(i)), t.lte(o))
          return Me = Es(r) ? n ? 2 : 3 : n ? 4 : 1, t;
        Me = Es(r) ? n ? 1 : 4 : n ? 3 : 2;
      }
      return t.minus(i).abs();
    }
    function Pi(e, t, r, n) {
      var i, o, s, a, l, u, c, p, d, f = e.constructor, y = r !== void 0;
      if (y ? (se(r, 1, $e), n === void 0 ? n = f.rounding : se(n, 0, 8)) : (r = f.precision, n = f.rounding), !e.isFinite())
        c = ks(e);
      else {
        for (c = we(e), s = c.indexOf("."), y ? (i = 2, t == 16 ? r = r * 4 - 3 : t == 8 && (r = r * 3 - 2)) : i = t, s >= 0 && (c = c.replace(".", ""), d = new f(1), d.e = c.length - s, d.d = Ur(we(d), 10, i), d.e = d.d.length), p = Ur(c, 10, i), o = l = p.length; p[--l] == 0; )
          p.pop();
        if (!p[0])
          c = y ? "0p+0" : "0";
        else {
          if (s < 0 ? o-- : (e = new f(e), e.d = p, e.e = o, e = O(e, d, r, n, 0, i), p = e.d, o = e.e, u = vs), s = p[r], a = i / 2, u = u || p[r + 1] !== void 0, u = n < 4 ? (s !== void 0 || u) && (n === 0 || n === (e.s < 0 ? 3 : 2)) : s > a || s === a && (n === 4 || u || n === 6 && p[r - 1] & 1 || n === (e.s < 0 ? 8 : 7)), p.length = r, u)
            for (; ++p[--r] > i - 1; )
              p[r] = 0, r || (++o, p.unshift(1));
          for (l = p.length; !p[l - 1]; --l)
            ;
          for (s = 0, c = ""; s < l; s++)
            c += hi.charAt(p[s]);
          if (y) {
            if (l > 1)
              if (t == 16 || t == 8) {
                for (s = t == 16 ? 4 : 3, --l; l % s; l++)
                  c += "0";
                for (p = Ur(c, i, t), l = p.length; !p[l - 1]; --l)
                  ;
                for (s = 1, c = "1."; s < l; s++)
                  c += hi.charAt(p[s]);
              } else
                c = c.charAt(0) + "." + c.slice(1);
            c = c + (o < 0 ? "p" : "p+") + o;
          } else if (o < 0) {
            for (; ++o; )
              c = "0" + c;
            c = "0." + c;
          } else if (++o > l)
            for (o -= l; o--; )
              c += "0";
          else
            o < l && (c = c.slice(0, o) + "." + c.slice(o));
        }
        c = (t == 16 ? "0x" : t == 2 ? "0b" : t == 8 ? "0o" : "") + c;
      }
      return e.s < 0 ? "-" + c : c;
    }
    function ws(e, t) {
      if (e.length > t)
        return e.length = t, true;
    }
    function xc(e) {
      return new this(e).abs();
    }
    function bc(e) {
      return new this(e).acos();
    }
    function Ec(e) {
      return new this(e).acosh();
    }
    function wc(e, t) {
      return new this(e).plus(t);
    }
    function Pc(e) {
      return new this(e).asin();
    }
    function vc(e) {
      return new this(e).asinh();
    }
    function Tc(e) {
      return new this(e).atan();
    }
    function Cc(e) {
      return new this(e).atanh();
    }
    function Ac(e, t) {
      e = new this(e), t = new this(t);
      var r, n = this.precision, i = this.rounding, o = n + 4;
      return !e.s || !t.s ? r = new this(NaN) : !e.d && !t.d ? (r = fe(this, o, 1).times(t.s > 0 ? 0.25 : 0.75), r.s = e.s) : !t.d || e.isZero() ? (r = t.s < 0 ? fe(this, n, i) : new this(0), r.s = e.s) : !e.d || t.isZero() ? (r = fe(this, o, 1).times(0.5), r.s = e.s) : t.s < 0 ? (this.precision = o, this.rounding = 1, r = this.atan(O(e, t, o, 1)), t = fe(this, o, 1), this.precision = n, this.rounding = i, r = e.s < 0 ? r.minus(t) : r.plus(t)) : r = this.atan(O(e, t, o, 1)), r;
    }
    function Rc(e) {
      return new this(e).cbrt();
    }
    function Mc(e) {
      return h(e = new this(e), e.e + 1, 2);
    }
    function Sc(e, t, r) {
      return new this(e).clamp(t, r);
    }
    function Ic(e) {
      if (!e || typeof e != "object")
        throw Error(Jr + "Object expected");
      var t, r, n, i = e.defaults === true, o = ["precision", 1, $e, "rounding", 0, 8, "toExpNeg", -gt, 0, "toExpPos", 0, gt, "maxE", 0, gt, "minE", -gt, 0, "modulo", 0, 9];
      for (t = 0; t < o.length; t += 3)
        if (r = o[t], i && (this[r] = xi[r]), (n = e[r]) !== void 0)
          if (ee(n) === n && n >= o[t + 1] && n <= o[t + 2])
            this[r] = n;
          else
            throw Error(Le + r + ": " + n);
      if (r = "crypto", i && (this[r] = xi[r]), (n = e[r]) !== void 0)
        if (n === true || n === false || n === 0 || n === 1)
          if (n)
            if (typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes))
              this[r] = true;
            else
              throw Error(Cs);
          else
            this[r] = false;
        else
          throw Error(Le + r + ": " + n);
      return this;
    }
    function kc(e) {
      return new this(e).cos();
    }
    function Fc(e) {
      return new this(e).cosh();
    }
    function Os(e) {
      var t, r, n;
      function i(o) {
        var s, a, l, u = this;
        if (!(u instanceof i))
          return new i(o);
        if (u.constructor = i, Ps(o)) {
          u.s = o.s, w ? !o.d || o.e > i.maxE ? (u.e = NaN, u.d = null) : o.e < i.minE ? (u.e = 0, u.d = [0]) : (u.e = o.e, u.d = o.d.slice()) : (u.e = o.e, u.d = o.d ? o.d.slice() : o.d);
          return;
        }
        if (l = typeof o, l === "number") {
          if (o === 0) {
            u.s = 1 / o < 0 ? -1 : 1, u.e = 0, u.d = [0];
            return;
          }
          if (o < 0 ? (o = -o, u.s = -1) : u.s = 1, o === ~~o && o < 1e7) {
            for (s = 0, a = o; a >= 10; a /= 10)
              s++;
            w ? s > i.maxE ? (u.e = NaN, u.d = null) : s < i.minE ? (u.e = 0, u.d = [0]) : (u.e = s, u.d = [o]) : (u.e = s, u.d = [o]);
            return;
          } else if (o * 0 !== 0) {
            o || (u.s = NaN), u.e = NaN, u.d = null;
            return;
          }
          return wi(u, o.toString());
        } else if (l !== "string")
          throw Error(Le + o);
        return (a = o.charCodeAt(0)) === 45 ? (o = o.slice(1), u.s = -1) : (a === 43 && (o = o.slice(1)), u.s = 1), Rs.test(o) ? wi(u, o) : yc(u, o);
      }
      if (i.prototype = m, i.ROUND_UP = 0, i.ROUND_DOWN = 1, i.ROUND_CEIL = 2, i.ROUND_FLOOR = 3, i.ROUND_HALF_UP = 4, i.ROUND_HALF_DOWN = 5, i.ROUND_HALF_EVEN = 6, i.ROUND_HALF_CEIL = 7, i.ROUND_HALF_FLOOR = 8, i.EUCLID = 9, i.config = i.set = Ic, i.clone = Os, i.isDecimal = Ps, i.abs = xc, i.acos = bc, i.acosh = Ec, i.add = wc, i.asin = Pc, i.asinh = vc, i.atan = Tc, i.atanh = Cc, i.atan2 = Ac, i.cbrt = Rc, i.ceil = Mc, i.clamp = Sc, i.cos = kc, i.cosh = Fc, i.div = Oc, i.exp = Dc, i.floor = _c, i.hypot = Nc, i.ln = Lc, i.log = $c, i.log10 = Vc, i.log2 = qc, i.max = jc, i.min = Bc, i.mod = Uc, i.mul = Kc, i.pow = Qc, i.random = Gc, i.round = Jc, i.sign = Hc, i.sin = Wc, i.sinh = zc, i.sqrt = Yc, i.sub = Zc, i.sum = Xc, i.tan = ep, i.tanh = tp, i.trunc = rp, e === void 0 && (e = {}), e && e.defaults !== true)
        for (n = ["precision", "rounding", "toExpNeg", "toExpPos", "maxE", "minE", "modulo", "crypto"], t = 0; t < n.length; )
          e.hasOwnProperty(r = n[t++]) || (e[r] = this[r]);
      return i.config(e), i;
    }
    function Oc(e, t) {
      return new this(e).div(t);
    }
    function Dc(e) {
      return new this(e).exp();
    }
    function _c(e) {
      return h(e = new this(e), e.e + 1, 3);
    }
    function Nc() {
      var e, t, r = new this(0);
      for (w = false, e = 0; e < arguments.length; )
        if (t = new this(arguments[e++]), t.d)
          r.d && (r = r.plus(t.times(t)));
        else {
          if (t.s)
            return w = true, new this(1 / 0);
          r = t;
        }
      return w = true, r.sqrt();
    }
    function Ps(e) {
      return e instanceof ze || e && e.toStringTag === As || false;
    }
    function Lc(e) {
      return new this(e).ln();
    }
    function $c(e, t) {
      return new this(e).log(t);
    }
    function qc(e) {
      return new this(e).log(2);
    }
    function Vc(e) {
      return new this(e).log(10);
    }
    function jc() {
      return Is(this, arguments, "lt");
    }
    function Bc() {
      return Is(this, arguments, "gt");
    }
    function Uc(e, t) {
      return new this(e).mod(t);
    }
    function Kc(e, t) {
      return new this(e).mul(t);
    }
    function Qc(e, t) {
      return new this(e).pow(t);
    }
    function Gc(e) {
      var t, r, n, i, o = 0, s = new this(1), a = [];
      if (e === void 0 ? e = this.precision : se(e, 1, $e), n = Math.ceil(e / b), this.crypto)
        if (crypto.getRandomValues)
          for (t = crypto.getRandomValues(new Uint32Array(n)); o < n; )
            i = t[o], i >= 429e7 ? t[o] = crypto.getRandomValues(new Uint32Array(1))[0] : a[o++] = i % 1e7;
        else if (crypto.randomBytes) {
          for (t = crypto.randomBytes(n *= 4); o < n; )
            i = t[o] + (t[o + 1] << 8) + (t[o + 2] << 16) + ((t[o + 3] & 127) << 24), i >= 214e7 ? crypto.randomBytes(4).copy(t, o) : (a.push(i % 1e7), o += 4);
          o = n / 4;
        } else
          throw Error(Cs);
      else
        for (; o < n; )
          a[o++] = Math.random() * 1e7 | 0;
      for (n = a[--o], e %= b, n && e && (i = j(10, b - e), a[o] = (n / i | 0) * i); a[o] === 0; o--)
        a.pop();
      if (o < 0)
        r = 0, a = [0];
      else {
        for (r = -1; a[0] === 0; r -= b)
          a.shift();
        for (n = 1, i = a[0]; i >= 10; i /= 10)
          n++;
        n < b && (r -= b - n);
      }
      return s.e = r, s.d = a, s;
    }
    function Jc(e) {
      return h(e = new this(e), e.e + 1, this.rounding);
    }
    function Hc(e) {
      return e = new this(e), e.d ? e.d[0] ? e.s : 0 * e.s : e.s || NaN;
    }
    function Wc(e) {
      return new this(e).sin();
    }
    function zc(e) {
      return new this(e).sinh();
    }
    function Yc(e) {
      return new this(e).sqrt();
    }
    function Zc(e, t) {
      return new this(e).sub(t);
    }
    function Xc() {
      var e = 0, t = arguments, r = new this(t[e]);
      for (w = false; r.s && ++e < t.length; )
        r = r.plus(t[e]);
      return w = true, h(r, this.precision, this.rounding);
    }
    function ep(e) {
      return new this(e).tan();
    }
    function tp(e) {
      return new this(e).tanh();
    }
    function rp(e) {
      return h(e = new this(e), e.e + 1, 1);
    }
    m[Symbol.for("nodejs.util.inspect.custom")] = m.toString;
    m[Symbol.toStringTag] = "Decimal";
    var ze = m.constructor = Os(xi);
    Kr = new ze(Kr);
    Qr = new ze(Qr);
    var Pe = ze;
    function ht(e) {
      return ze.isDecimal(e) ? true : e !== null && typeof e == "object" && typeof e.s == "number" && typeof e.e == "number" && typeof e.toFixed == "function" && Array.isArray(e.d);
    }
    var Ht = class {
      constructor(t, r, n, i, o) {
        this.modelName = t, this.name = r, this.typeName = n, this.isList = i, this.isEnum = o;
      }
      _toGraphQLInputType() {
        let t = this.isList ? "List" : "", r = this.isEnum ? "Enum" : "";
        return `${t}${r}${this.typeName}FieldRefInput<${this.modelName}>`;
      }
    };
    function xt(e) {
      return e instanceof Ht;
    }
    var zr = class {
      constructor(t) {
        this.value = t;
      }
      write(t) {
        t.write(this.value);
      }
      markAsError() {
        this.value.markAsError();
      }
    };
    var Yr = (e) => e;
    var Zr = { bold: Yr, red: Yr, green: Yr, dim: Yr, enabled: false };
    var Ds = { bold: ne, red: me, green: Ge, dim: Fe, enabled: true };
    var bt = { write(e) {
      e.writeLine(",");
    } };
    var ve = class {
      constructor(t) {
        this.contents = t;
        this.isUnderlined = false;
        this.color = (t2) => t2;
      }
      underline() {
        return this.isUnderlined = true, this;
      }
      setColor(t) {
        return this.color = t, this;
      }
      write(t) {
        let r = t.getCurrentLineLength();
        t.write(this.color(this.contents)), this.isUnderlined && t.afterNextNewline(() => {
          t.write(" ".repeat(r)).writeLine(this.color("~".repeat(this.contents.length)));
        });
      }
    };
    var qe = class {
      constructor() {
        this.hasError = false;
      }
      markAsError() {
        return this.hasError = true, this;
      }
    };
    var Et = class extends qe {
      constructor() {
        super(...arguments);
        this.items = [];
      }
      addItem(r) {
        return this.items.push(new zr(r)), this;
      }
      getField(r) {
        return this.items[r];
      }
      getPrintWidth() {
        return this.items.length === 0 ? 2 : Math.max(...this.items.map((n) => n.value.getPrintWidth())) + 2;
      }
      write(r) {
        if (this.items.length === 0) {
          this.writeEmpty(r);
          return;
        }
        this.writeWithItems(r);
      }
      writeEmpty(r) {
        let n = new ve("[]");
        this.hasError && n.setColor(r.context.colors.red).underline(), r.write(n);
      }
      writeWithItems(r) {
        let { colors: n } = r.context;
        r.writeLine("[").withIndent(() => r.writeJoined(bt, this.items).newLine()).write("]"), this.hasError && r.afterNextNewline(() => {
          r.writeLine(n.red("~".repeat(this.getPrintWidth())));
        });
      }
    };
    var _s = ": ";
    var Xr = class {
      constructor(t, r) {
        this.name = t;
        this.value = r;
        this.hasError = false;
      }
      markAsError() {
        this.hasError = true;
      }
      getPrintWidth() {
        return this.name.length + this.value.getPrintWidth() + _s.length;
      }
      write(t) {
        let r = new ve(this.name);
        this.hasError && r.underline().setColor(t.context.colors.red), t.write(r).write(_s).write(this.value);
      }
    };
    var Q = class e extends qe {
      constructor() {
        super(...arguments);
        this.fields = {};
        this.suggestions = [];
      }
      addField(r) {
        this.fields[r.name] = r;
      }
      addSuggestion(r) {
        this.suggestions.push(r);
      }
      getField(r) {
        return this.fields[r];
      }
      getDeepField(r) {
        let [n, ...i] = r, o = this.getField(n);
        if (!o)
          return;
        let s = o;
        for (let a of i) {
          let l;
          if (s.value instanceof e ? l = s.value.getField(a) : s.value instanceof Et && (l = s.value.getField(Number(a))), !l)
            return;
          s = l;
        }
        return s;
      }
      getDeepFieldValue(r) {
        return r.length === 0 ? this : this.getDeepField(r)?.value;
      }
      hasField(r) {
        return !!this.getField(r);
      }
      removeAllFields() {
        this.fields = {};
      }
      removeField(r) {
        delete this.fields[r];
      }
      getFields() {
        return this.fields;
      }
      isEmpty() {
        return Object.keys(this.fields).length === 0;
      }
      getFieldValue(r) {
        return this.getField(r)?.value;
      }
      getDeepSubSelectionValue(r) {
        let n = this;
        for (let i of r) {
          if (!(n instanceof e))
            return;
          let o = n.getSubSelectionValue(i);
          if (!o)
            return;
          n = o;
        }
        return n;
      }
      getDeepSelectionParent(r) {
        let n = this.getSelectionParent();
        if (!n)
          return;
        let i = n;
        for (let o of r) {
          let s = i.value.getFieldValue(o);
          if (!s || !(s instanceof e))
            return;
          let a = s.getSelectionParent();
          if (!a)
            return;
          i = a;
        }
        return i;
      }
      getSelectionParent() {
        let r = this.getField("select");
        if (r?.value instanceof e)
          return { kind: "select", value: r.value };
        let n = this.getField("include");
        if (n?.value instanceof e)
          return { kind: "include", value: n.value };
      }
      getSubSelectionValue(r) {
        return this.getSelectionParent()?.value.fields[r].value;
      }
      getPrintWidth() {
        let r = Object.values(this.fields);
        return r.length == 0 ? 2 : Math.max(...r.map((i) => i.getPrintWidth())) + 2;
      }
      write(r) {
        let n = Object.values(this.fields);
        if (n.length === 0 && this.suggestions.length === 0) {
          this.writeEmpty(r);
          return;
        }
        this.writeWithContents(r, n);
      }
      writeEmpty(r) {
        let n = new ve("{}");
        this.hasError && n.setColor(r.context.colors.red).underline(), r.write(n);
      }
      writeWithContents(r, n) {
        r.writeLine("{").withIndent(() => {
          r.writeJoined(bt, [...n, ...this.suggestions]).newLine();
        }), r.write("}"), this.hasError && r.afterNextNewline(() => {
          r.writeLine(r.context.colors.red("~".repeat(this.getPrintWidth())));
        });
      }
    };
    var G = class extends qe {
      constructor(r) {
        super();
        this.text = r;
      }
      getPrintWidth() {
        return this.text.length;
      }
      write(r) {
        let n = new ve(this.text);
        this.hasError && n.underline().setColor(r.context.colors.red), r.write(n);
      }
    };
    var vi = class {
      constructor(t) {
        this.errorMessages = [];
        this.arguments = t;
      }
      write(t) {
        t.write(this.arguments);
      }
      addErrorMessage(t) {
        this.errorMessages.push(t);
      }
      renderAllMessages(t) {
        return this.errorMessages.map((r) => r(t)).join(`
`);
      }
    };
    function en(e) {
      return new vi(Ns(e));
    }
    function Ns(e) {
      let t = new Q();
      for (let [r, n] of Object.entries(e)) {
        let i = new Xr(r, Ls(n));
        t.addField(i);
      }
      return t;
    }
    function Ls(e) {
      if (typeof e == "string")
        return new G(JSON.stringify(e));
      if (typeof e == "number" || typeof e == "boolean")
        return new G(String(e));
      if (typeof e == "bigint")
        return new G(`${e}n`);
      if (e === null)
        return new G("null");
      if (e === void 0)
        return new G("undefined");
      if (ht(e))
        return new G(`new Prisma.Decimal("${e.toFixed()}")`);
      if (e instanceof Uint8Array)
        return Buffer.isBuffer(e) ? new G(`Buffer.alloc(${e.byteLength})`) : new G(`new Uint8Array(${e.byteLength})`);
      if (e instanceof Date) {
        let t = Br(e) ? e.toISOString() : "Invalid Date";
        return new G(`new Date("${t}")`);
      }
      return e instanceof xe ? new G(`Prisma.${e._getName()}`) : xt(e) ? new G(`prisma.${lo(e.modelName)}.$fields.${e.name}`) : Array.isArray(e) ? ip(e) : typeof e == "object" ? Ns(e) : new G(Object.prototype.toString.call(e));
    }
    function ip(e) {
      let t = new Et();
      for (let r of e)
        t.addItem(Ls(r));
      return t;
    }
    function $s(e) {
      if (e === void 0)
        return "";
      let t = en(e);
      return new mt(0, { colors: Zr }).write(t).toString();
    }
    var Wt = "<unknown>";
    function qs(e) {
      var t = e.split(`
`);
      return t.reduce(function(r, n) {
        var i = ap(n) || up(n) || dp(n) || yp(n) || fp(n);
        return i && r.push(i), r;
      }, []);
    }
    var op = /^\s*at (.*?) ?\(((?:file|https?|blob|chrome-extension|native|eval|webpack|<anonymous>|\/|[a-z]:\\|\\\\).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i;
    var sp = /\((\S*)(?::(\d+))(?::(\d+))\)/;
    function ap(e) {
      var t = op.exec(e);
      if (!t)
        return null;
      var r = t[2] && t[2].indexOf("native") === 0, n = t[2] && t[2].indexOf("eval") === 0, i = sp.exec(t[2]);
      return n && i != null && (t[2] = i[1], t[3] = i[2], t[4] = i[3]), { file: r ? null : t[2], methodName: t[1] || Wt, arguments: r ? [t[2]] : [], lineNumber: t[3] ? +t[3] : null, column: t[4] ? +t[4] : null };
    }
    var lp = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i;
    function up(e) {
      var t = lp.exec(e);
      return t ? { file: t[2], methodName: t[1] || Wt, arguments: [], lineNumber: +t[3], column: t[4] ? +t[4] : null } : null;
    }
    var cp = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|webpack|resource|\[native).*?|[^@]*bundle)(?::(\d+))?(?::(\d+))?\s*$/i;
    var pp = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i;
    function dp(e) {
      var t = cp.exec(e);
      if (!t)
        return null;
      var r = t[3] && t[3].indexOf(" > eval") > -1, n = pp.exec(t[3]);
      return r && n != null && (t[3] = n[1], t[4] = n[2], t[5] = null), { file: t[3], methodName: t[1] || Wt, arguments: t[2] ? t[2].split(",") : [], lineNumber: t[4] ? +t[4] : null, column: t[5] ? +t[5] : null };
    }
    var mp = /^\s*(?:([^@]*)(?:\((.*?)\))?@)?(\S.*?):(\d+)(?::(\d+))?\s*$/i;
    function fp(e) {
      var t = mp.exec(e);
      return t ? { file: t[3], methodName: t[1] || Wt, arguments: [], lineNumber: +t[4], column: t[5] ? +t[5] : null } : null;
    }
    var gp = /^\s*at (?:((?:\[object object\])?[^\\/]+(?: \[as \S+\])?) )?\(?(.*?):(\d+)(?::(\d+))?\)?\s*$/i;
    function yp(e) {
      var t = gp.exec(e);
      return t ? { file: t[2], methodName: t[1] || Wt, arguments: [], lineNumber: +t[3], column: t[4] ? +t[4] : null } : null;
    }
    var Ti = class {
      getLocation() {
        return null;
      }
    };
    var Ci = class {
      constructor() {
        this._error = new Error();
      }
      getLocation() {
        let t = this._error.stack;
        if (!t)
          return null;
        let n = qs(t).find((i) => {
          if (!i.file)
            return false;
          let o = ni(i.file);
          return o !== "<anonymous>" && !o.includes("@prisma") && !o.includes("/packages/client/src/runtime/") && !o.endsWith("/runtime/binary.js") && !o.endsWith("/runtime/library.js") && !o.endsWith("/runtime/edge.js") && !o.endsWith("/runtime/edge-esm.js") && !o.startsWith("internal/") && !i.methodName.includes("new ") && !i.methodName.includes("getCallSite") && !i.methodName.includes("Proxy.") && i.methodName.split(".").length < 4;
        });
        return !n || !n.file ? null : { fileName: n.file, lineNumber: n.lineNumber, columnNumber: n.column };
      }
    };
    function Ve(e) {
      return e === "minimal" ? new Ti() : new Ci();
    }
    var Vs = { _avg: true, _count: true, _sum: true, _min: true, _max: true };
    function wt(e = {}) {
      let t = xp(e);
      return Object.entries(t).reduce((n, [i, o]) => (Vs[i] !== void 0 ? n.select[i] = { select: o } : n[i] = o, n), { select: {} });
    }
    function xp(e = {}) {
      return typeof e._count == "boolean" ? { ...e, _count: { _all: e._count } } : e;
    }
    function tn(e = {}) {
      return (t) => (typeof e._count == "boolean" && (t._count = t._count._all), t);
    }
    function js(e, t) {
      let r = tn(e);
      return t({ action: "aggregate", unpacker: r, argsMapper: wt })(e);
    }
    function bp(e = {}) {
      let { select: t, ...r } = e;
      return typeof t == "object" ? wt({ ...r, _count: t }) : wt({ ...r, _count: { _all: true } });
    }
    function Ep(e = {}) {
      return typeof e.select == "object" ? (t) => tn(e)(t)._count : (t) => tn(e)(t)._count._all;
    }
    function Bs(e, t) {
      return t({ action: "count", unpacker: Ep(e), argsMapper: bp })(e);
    }
    function wp(e = {}) {
      let t = wt(e);
      if (Array.isArray(t.by))
        for (let r of t.by)
          typeof r == "string" && (t.select[r] = true);
      else
        typeof t.by == "string" && (t.select[t.by] = true);
      return t;
    }
    function Pp(e = {}) {
      return (t) => (typeof e?._count == "boolean" && t.forEach((r) => {
        r._count = r._count._all;
      }), t);
    }
    function Us(e, t) {
      return t({ action: "groupBy", unpacker: Pp(e), argsMapper: wp })(e);
    }
    function Ks(e, t, r) {
      if (t === "aggregate")
        return (n) => js(n, r);
      if (t === "count")
        return (n) => Bs(n, r);
      if (t === "groupBy")
        return (n) => Us(n, r);
    }
    function Qs(e, t) {
      let r = t.fields.filter((i) => !i.relationName), n = ci(r, (i) => i.name);
      return new Proxy({}, { get(i, o) {
        if (o in i || typeof o == "symbol")
          return i[o];
        let s = n[o];
        if (s)
          return new Ht(e, o, s.type, s.isList, s.kind === "enum");
      }, ...jr(Object.keys(n)) });
    }
    var Gs = (e) => Array.isArray(e) ? e : e.split(".");
    var Ai = (e, t) => Gs(t).reduce((r, n) => r && r[n], e);
    var Js = (e, t, r) => Gs(t).reduceRight((n, i, o, s) => Object.assign({}, Ai(e, s.slice(0, o)), { [i]: n }), r);
    function vp(e, t) {
      return e === void 0 || t === void 0 ? [] : [...t, "select", e];
    }
    function Tp(e, t, r) {
      return t === void 0 ? e ?? {} : Js(t, r, e || true);
    }
    function Ri(e, t, r, n, i, o) {
      let a = e._runtimeDataModel.models[t].fields.reduce((l, u) => ({ ...l, [u.name]: u }), {});
      return (l) => {
        let u = Ve(e._errorFormat), c = vp(n, i), p = Tp(l, o, c), d = r({ dataPath: c, callsite: u })(p), f = Cp(e, t);
        return new Proxy(d, { get(y, g) {
          if (!f.includes(g))
            return y[g];
          let T = [a[g].type, r, g], C = [c, p];
          return Ri(e, ...T, ...C);
        }, ...jr([...f, ...Object.getOwnPropertyNames(d)]) });
      };
    }
    function Cp(e, t) {
      return e._runtimeDataModel.models[t].fields.filter((r) => r.kind === "object").map((r) => r.name);
    }
    var Xs = S(ii());
    var Zs = S(require("fs"));
    var Hs = { keyword: Oe, entity: Oe, value: (e) => ne(ot(e)), punctuation: ot, directive: Oe, function: Oe, variable: (e) => ne(ot(e)), string: (e) => ne(Ge(e)), boolean: he, number: Oe, comment: Tr };
    var Ap = (e) => e;
    var rn = {};
    var Rp = 0;
    var v = { manual: rn.Prism && rn.Prism.manual, disableWorkerMessageHandler: rn.Prism && rn.Prism.disableWorkerMessageHandler, util: { encode: function(e) {
      if (e instanceof ye) {
        let t = e;
        return new ye(t.type, v.util.encode(t.content), t.alias);
      } else
        return Array.isArray(e) ? e.map(v.util.encode) : e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
    }, type: function(e) {
      return Object.prototype.toString.call(e).slice(8, -1);
    }, objId: function(e) {
      return e.__id || Object.defineProperty(e, "__id", { value: ++Rp }), e.__id;
    }, clone: function e(t, r) {
      let n, i, o = v.util.type(t);
      switch (r = r || {}, o) {
        case "Object":
          if (i = v.util.objId(t), r[i])
            return r[i];
          n = {}, r[i] = n;
          for (let s in t)
            t.hasOwnProperty(s) && (n[s] = e(t[s], r));
          return n;
        case "Array":
          return i = v.util.objId(t), r[i] ? r[i] : (n = [], r[i] = n, t.forEach(function(s, a) {
            n[a] = e(s, r);
          }), n);
        default:
          return t;
      }
    } }, languages: { extend: function(e, t) {
      let r = v.util.clone(v.languages[e]);
      for (let n in t)
        r[n] = t[n];
      return r;
    }, insertBefore: function(e, t, r, n) {
      n = n || v.languages;
      let i = n[e], o = {};
      for (let a in i)
        if (i.hasOwnProperty(a)) {
          if (a == t)
            for (let l in r)
              r.hasOwnProperty(l) && (o[l] = r[l]);
          r.hasOwnProperty(a) || (o[a] = i[a]);
        }
      let s = n[e];
      return n[e] = o, v.languages.DFS(v.languages, function(a, l) {
        l === s && a != e && (this[a] = o);
      }), o;
    }, DFS: function e(t, r, n, i) {
      i = i || {};
      let o = v.util.objId;
      for (let s in t)
        if (t.hasOwnProperty(s)) {
          r.call(t, s, t[s], n || s);
          let a = t[s], l = v.util.type(a);
          l === "Object" && !i[o(a)] ? (i[o(a)] = true, e(a, r, null, i)) : l === "Array" && !i[o(a)] && (i[o(a)] = true, e(a, r, s, i));
        }
    } }, plugins: {}, highlight: function(e, t, r) {
      let n = { code: e, grammar: t, language: r };
      return v.hooks.run("before-tokenize", n), n.tokens = v.tokenize(n.code, n.grammar), v.hooks.run("after-tokenize", n), ye.stringify(v.util.encode(n.tokens), n.language);
    }, matchGrammar: function(e, t, r, n, i, o, s) {
      for (let g in r) {
        if (!r.hasOwnProperty(g) || !r[g])
          continue;
        if (g == s)
          return;
        let P = r[g];
        P = v.util.type(P) === "Array" ? P : [P];
        for (let T = 0; T < P.length; ++T) {
          let C = P[T], x = C.inside, R = !!C.lookbehind, ce = !!C.greedy, J = 0, Ke = C.alias;
          if (ce && !C.pattern.global) {
            let $ = C.pattern.toString().match(/[imuy]*$/)[0];
            C.pattern = RegExp(C.pattern.source, $ + "g");
          }
          C = C.pattern || C;
          for (let $ = n, z = i; $ < t.length; z += t[$].length, ++$) {
            let Ae = t[$];
            if (t.length > e.length)
              return;
            if (Ae instanceof ye)
              continue;
            if (ce && $ != t.length - 1) {
              C.lastIndex = z;
              var p = C.exec(e);
              if (!p)
                break;
              var c = p.index + (R ? p[1].length : 0), d = p.index + p[0].length, a = $, l = z;
              for (let k = t.length; a < k && (l < d || !t[a].type && !t[a - 1].greedy); ++a)
                l += t[a].length, c >= l && (++$, z = l);
              if (t[$] instanceof ye)
                continue;
              u = a - $, Ae = e.slice(z, l), p.index -= z;
            } else {
              C.lastIndex = 0;
              var p = C.exec(Ae), u = 1;
            }
            if (!p) {
              if (o)
                break;
              continue;
            }
            R && (J = p[1] ? p[1].length : 0);
            var c = p.index + J, p = p[0].slice(J), d = c + p.length, f = Ae.slice(0, c), y = Ae.slice(d);
            let Y = [$, u];
            f && (++$, z += f.length, Y.push(f));
            let tt = new ye(g, x ? v.tokenize(p, x) : p, Ke, p, ce);
            if (Y.push(tt), y && Y.push(y), Array.prototype.splice.apply(t, Y), u != 1 && v.matchGrammar(e, t, r, $, z, true, g), o)
              break;
          }
        }
      }
    }, tokenize: function(e, t) {
      let r = [e], n = t.rest;
      if (n) {
        for (let i in n)
          t[i] = n[i];
        delete t.rest;
      }
      return v.matchGrammar(e, r, t, 0, 0, false), r;
    }, hooks: { all: {}, add: function(e, t) {
      let r = v.hooks.all;
      r[e] = r[e] || [], r[e].push(t);
    }, run: function(e, t) {
      let r = v.hooks.all[e];
      if (!(!r || !r.length))
        for (var n = 0, i; i = r[n++]; )
          i(t);
    } }, Token: ye };
    v.languages.clike = { comment: [{ pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/, lookbehind: true }, { pattern: /(^|[^\\:])\/\/.*/, lookbehind: true, greedy: true }], string: { pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/, greedy: true }, "class-name": { pattern: /((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i, lookbehind: true, inside: { punctuation: /[.\\]/ } }, keyword: /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/, boolean: /\b(?:true|false)\b/, function: /\w+(?=\()/, number: /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i, operator: /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/, punctuation: /[{}[\];(),.:]/ };
    v.languages.javascript = v.languages.extend("clike", { "class-name": [v.languages.clike["class-name"], { pattern: /(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/, lookbehind: true }], keyword: [{ pattern: /((?:^|})\s*)(?:catch|finally)\b/, lookbehind: true }, { pattern: /(^|[^.])\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/, lookbehind: true }], number: /\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/, function: /[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/, operator: /-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/ });
    v.languages.javascript["class-name"][0].pattern = /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/;
    v.languages.insertBefore("javascript", "keyword", { regex: { pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=\s*($|[\r\n,.;})\]]))/, lookbehind: true, greedy: true }, "function-variable": { pattern: /[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/, alias: "function" }, parameter: [{ pattern: /(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/, lookbehind: true, inside: v.languages.javascript }, { pattern: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i, inside: v.languages.javascript }, { pattern: /(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/, lookbehind: true, inside: v.languages.javascript }, { pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/, lookbehind: true, inside: v.languages.javascript }], constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/ });
    v.languages.markup && v.languages.markup.tag.addInlined("script", "javascript");
    v.languages.js = v.languages.javascript;
    v.languages.typescript = v.languages.extend("javascript", { keyword: /\b(?:abstract|as|async|await|break|case|catch|class|const|constructor|continue|debugger|declare|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|is|keyof|let|module|namespace|new|null|of|package|private|protected|public|readonly|return|require|set|static|super|switch|this|throw|try|type|typeof|var|void|while|with|yield)\b/, builtin: /\b(?:string|Function|any|number|boolean|Array|symbol|console|Promise|unknown|never)\b/ });
    v.languages.ts = v.languages.typescript;
    function ye(e, t, r, n, i) {
      this.type = e, this.content = t, this.alias = r, this.length = (n || "").length | 0, this.greedy = !!i;
    }
    ye.stringify = function(e, t) {
      return typeof e == "string" ? e : Array.isArray(e) ? e.map(function(r) {
        return ye.stringify(r, t);
      }).join("") : Mp(e.type)(e.content);
    };
    function Mp(e) {
      return Hs[e] || Ap;
    }
    function Ws(e) {
      return Sp(e, v.languages.javascript);
    }
    function Sp(e, t) {
      return v.tokenize(e, t).map((n) => ye.stringify(n)).join("");
    }
    var zs = S(es());
    function Ys(e) {
      return (0, zs.default)(e);
    }
    var nn = class e {
      static read(t) {
        let r;
        try {
          r = Zs.default.readFileSync(t, "utf-8");
        } catch {
          return null;
        }
        return e.fromContent(r);
      }
      static fromContent(t) {
        let r = t.split(/\r?\n/);
        return new e(1, r);
      }
      constructor(t, r) {
        this.firstLineNumber = t, this.lines = r;
      }
      get lastLineNumber() {
        return this.firstLineNumber + this.lines.length - 1;
      }
      mapLineAt(t, r) {
        if (t < this.firstLineNumber || t > this.lines.length + this.firstLineNumber)
          return this;
        let n = t - this.firstLineNumber, i = [...this.lines];
        return i[n] = r(i[n]), new e(this.firstLineNumber, i);
      }
      mapLines(t) {
        return new e(this.firstLineNumber, this.lines.map((r, n) => t(r, this.firstLineNumber + n)));
      }
      lineAt(t) {
        return this.lines[t - this.firstLineNumber];
      }
      prependSymbolAt(t, r) {
        return this.mapLines((n, i) => i === t ? `${r} ${n}` : `  ${n}`);
      }
      slice(t, r) {
        let n = this.lines.slice(t - 1, r).join(`
`);
        return new e(t, Ys(n).split(`
`));
      }
      highlight() {
        let t = Ws(this.toString());
        return new e(this.firstLineNumber, t.split(`
`));
      }
      toString() {
        return this.lines.join(`
`);
      }
    };
    var Ip = { red: me, gray: Tr, dim: Fe, bold: ne, underline: te, highlightSource: (e) => e.highlight() };
    var kp = { red: (e) => e, gray: (e) => e, dim: (e) => e, bold: (e) => e, underline: (e) => e, highlightSource: (e) => e };
    function Fp({ callsite: e, message: t, originalMethod: r, isPanic: n, callArguments: i }, o) {
      let s = { functionName: `prisma.${r}()`, message: t, isPanic: n ?? false, callArguments: i };
      if (!e || typeof window < "u" || process.env.NODE_ENV === "production")
        return s;
      let a = e.getLocation();
      if (!a || !a.lineNumber || !a.columnNumber)
        return s;
      let l = Math.max(1, a.lineNumber - 3), u = nn.read(a.fileName)?.slice(l, a.lineNumber), c = u?.lineAt(a.lineNumber);
      if (u && c) {
        let p = Dp(c), d = Op(c);
        if (!d)
          return s;
        s.functionName = `${d.code})`, s.location = a, n || (u = u.mapLineAt(a.lineNumber, (y) => y.slice(0, d.openingBraceIndex))), u = o.highlightSource(u);
        let f = String(u.lastLineNumber).length;
        if (s.contextLines = u.mapLines((y, g) => o.gray(String(g).padStart(f)) + " " + y).mapLines((y) => o.dim(y)).prependSymbolAt(a.lineNumber, o.bold(o.red("\u2192"))), i) {
          let y = p + f + 1;
          y += 2, s.callArguments = (0, Xs.default)(i, y).slice(y);
        }
      }
      return s;
    }
    function Op(e) {
      let t = Object.keys(pe.ModelAction).join("|"), n = new RegExp(String.raw`\.(${t})\(`).exec(e);
      if (n) {
        let i = n.index + n[0].length, o = e.lastIndexOf(" ", n.index) + 1;
        return { code: e.slice(o, i), openingBraceIndex: i };
      }
      return null;
    }
    function Dp(e) {
      let t = 0;
      for (let r = 0; r < e.length; r++) {
        if (e.charAt(r) !== " ")
          return t;
        t++;
      }
      return t;
    }
    function _p({ functionName: e, location: t, message: r, isPanic: n, contextLines: i, callArguments: o }, s) {
      let a = [""], l = t ? " in" : ":";
      if (n ? (a.push(s.red(`Oops, an unknown error occurred! This is ${s.bold("on us")}, you did nothing wrong.`)), a.push(s.red(`It occurred in the ${s.bold(`\`${e}\``)} invocation${l}`))) : a.push(s.red(`Invalid ${s.bold(`\`${e}\``)} invocation${l}`)), t && a.push(s.underline(Np(t))), i) {
        a.push("");
        let u = [i.toString()];
        o && (u.push(o), u.push(s.dim(")"))), a.push(u.join("")), o && a.push("");
      } else
        a.push(""), o && a.push(o), a.push("");
      return a.push(r), a.join(`
`);
    }
    function Np(e) {
      let t = [e.fileName];
      return e.lineNumber && t.push(String(e.lineNumber)), e.columnNumber && t.push(String(e.columnNumber)), t.join(":");
    }
    function Pt(e) {
      let t = e.showColors ? Ip : kp, r = Fp(e, t);
      return _p(r, t);
    }
    function ea(e, t, r, n) {
      return e === pe.ModelAction.findFirstOrThrow || e === pe.ModelAction.findUniqueOrThrow ? Lp(t, r, n) : n;
    }
    function Lp(e, t, r) {
      return async (n) => {
        if ("rejectOnNotFound" in n.args) {
          let o = Pt({ originalMethod: n.clientMethod, callsite: n.callsite, message: "'rejectOnNotFound' option is not supported" });
          throw new X(o, { clientVersion: t });
        }
        return await r(n).catch((o) => {
          throw o instanceof U && o.code === "P2025" ? new Re(`No ${e} found`, t) : o;
        });
      };
    }
    function Te(e) {
      return e.replace(/^./, (t) => t.toLowerCase());
    }
    var $p = ["findUnique", "findUniqueOrThrow", "findFirst", "findFirstOrThrow", "create", "update", "upsert", "delete"];
    var qp = ["aggregate", "count", "groupBy"];
    function Mi(e, t) {
      let r = e._extensions.getAllModelExtensions(t) ?? {}, n = [Vp(e, t), Bp(e, t), Qt(r), re("name", () => t), re("$name", () => t), re("$parent", () => e._appliedParent)];
      return Ee({}, n);
    }
    function Vp(e, t) {
      let r = Te(t), n = Object.keys(pe.ModelAction).concat("count");
      return { getKeys() {
        return n;
      }, getPropertyValue(i) {
        let o = i, s = (l) => e._request(l);
        s = ea(o, t, e._clientVersion, s);
        let a = (l) => (u) => {
          let c = Ve(e._errorFormat);
          return e._createPrismaPromise((p) => {
            let d = { args: u, dataPath: [], action: o, model: t, clientMethod: `${r}.${i}`, jsModelName: r, transaction: p, callsite: c };
            return s({ ...d, ...l });
          });
        };
        return $p.includes(o) ? Ri(e, t, a) : jp(i) ? Ks(e, i, a) : a({});
      } };
    }
    function jp(e) {
      return qp.includes(e);
    }
    function Bp(e, t) {
      return We(re("fields", () => {
        let r = e._runtimeDataModel.models[t];
        return Qs(t, r);
      }));
    }
    function ta(e) {
      return e.replace(/^./, (t) => t.toUpperCase());
    }
    var Si = Symbol();
    function zt(e) {
      let t = [Up(e), re(Si, () => e), re("$parent", () => e._appliedParent)], r = e._extensions.getAllClientExtensions();
      return r && t.push(Qt(r)), Ee(e, t);
    }
    function Up(e) {
      let t = Object.keys(e._runtimeDataModel.models), r = t.map(Te), n = [...new Set(t.concat(r))];
      return We({ getKeys() {
        return n;
      }, getPropertyValue(i) {
        let o = ta(i);
        if (e._runtimeDataModel.models[o] !== void 0)
          return Mi(e, o);
        if (e._runtimeDataModel.models[i] !== void 0)
          return Mi(e, i);
      }, getPropertyDescriptor(i) {
        if (!r.includes(i))
          return { enumerable: false };
      } });
    }
    function on(e) {
      return e[Si] ? e[Si] : e;
    }
    function ra(e) {
      if (typeof e == "function")
        return e(this);
      let t = on(this), r = Object.create(t, { _extensions: { value: this._extensions.append(e) }, _appliedParent: { value: this, configurable: true }, $use: { value: void 0 }, $on: { value: void 0 } });
      return zt(r);
    }
    function na({ result: e, modelName: t, select: r, extensions: n }) {
      let i = n.getAllComputedFields(t);
      if (!i)
        return e;
      let o = [], s = [];
      for (let a of Object.values(i)) {
        if (r) {
          if (!r[a.name])
            continue;
          let l = a.needs.filter((u) => !r[u]);
          l.length > 0 && s.push(Gt(l));
        }
        Kp(e, a.needs) && o.push(Qp(a, Ee(e, o)));
      }
      return o.length > 0 || s.length > 0 ? Ee(e, [...o, ...s]) : e;
    }
    function Kp(e, t) {
      return t.every((r) => ui(e, r));
    }
    function Qp(e, t) {
      return We(re(e.name, () => e.compute(t)));
    }
    function sn({ visitor: e, result: t, args: r, runtimeDataModel: n, modelName: i }) {
      if (Array.isArray(t)) {
        for (let s = 0; s < t.length; s++)
          t[s] = sn({ result: t[s], args: r, modelName: i, runtimeDataModel: n, visitor: e });
        return t;
      }
      let o = e(t, i, r) ?? t;
      return r.include && ia({ includeOrSelect: r.include, result: o, parentModelName: i, runtimeDataModel: n, visitor: e }), r.select && ia({ includeOrSelect: r.select, result: o, parentModelName: i, runtimeDataModel: n, visitor: e }), o;
    }
    function ia({ includeOrSelect: e, result: t, parentModelName: r, runtimeDataModel: n, visitor: i }) {
      for (let [o, s] of Object.entries(e)) {
        if (!s || t[o] == null)
          continue;
        let l = n.models[r].fields.find((c) => c.name === o);
        if (!l || l.kind !== "object" || !l.relationName)
          continue;
        let u = typeof s == "object" ? s : {};
        t[o] = sn({ visitor: i, result: t[o], args: u, modelName: l.type, runtimeDataModel: n });
      }
    }
    function oa({ result: e, modelName: t, args: r, extensions: n, runtimeDataModel: i }) {
      return n.isEmpty() || e == null || typeof e != "object" || !i.models[t] ? e : sn({ result: e, args: r ?? {}, modelName: t, runtimeDataModel: i, visitor: (s, a, l) => na({ result: s, modelName: Te(a), select: l.select, extensions: n }) });
    }
    function sa(e) {
      if (e instanceof oe)
        return Gp(e);
      if (Array.isArray(e)) {
        let r = [e[0]];
        for (let n = 1; n < e.length; n++)
          r[n] = Yt(e[n]);
        return r;
      }
      let t = {};
      for (let r in e)
        t[r] = Yt(e[r]);
      return t;
    }
    function Gp(e) {
      return new oe(e.strings, e.values);
    }
    function Yt(e) {
      if (typeof e != "object" || e == null || e instanceof xe || xt(e))
        return e;
      if (ht(e))
        return new Pe(e.toFixed());
      if (ft(e))
        return /* @__PURE__ */ new Date(+e);
      if (ArrayBuffer.isView(e))
        return e.slice(0);
      if (Array.isArray(e)) {
        let t = e.length, r;
        for (r = Array(t); t--; )
          r[t] = Yt(e[t]);
        return r;
      }
      if (typeof e == "object") {
        let t = {};
        for (let r in e)
          r === "__proto__" ? Object.defineProperty(t, r, { value: Yt(e[r]), configurable: true, enumerable: true, writable: true }) : t[r] = Yt(e[r]);
        return t;
      }
      He(e, "Unknown value");
    }
    function la(e, t, r, n = 0) {
      return e._createPrismaPromise((i) => {
        let o = t.customDataProxyFetch;
        return "transaction" in t && i !== void 0 && (t.transaction?.kind === "batch" && t.transaction.lock.then(), t.transaction = i), n === r.length ? e._executeRequest(t) : r[n]({ model: t.model, operation: t.model ? t.action : t.clientMethod, args: sa(t.args ?? {}), __internalParams: t, query: (s, a = t) => {
          let l = a.customDataProxyFetch;
          return a.customDataProxyFetch = da(o, l), a.args = s, la(e, a, r, n + 1);
        } });
      });
    }
    function ua(e, t) {
      let { jsModelName: r, action: n, clientMethod: i } = t, o = r ? n : i;
      if (e._extensions.isEmpty())
        return e._executeRequest(t);
      let s = e._extensions.getAllQueryCallbacks(r ?? "$none", o);
      return la(e, t, s);
    }
    function ca(e) {
      return (t) => {
        let r = { requests: t }, n = t[0].extensions.getAllBatchQueryCallbacks();
        return n.length ? pa(r, n, 0, e) : e(r);
      };
    }
    function pa(e, t, r, n) {
      if (r === t.length)
        return n(e);
      let i = e.customDataProxyFetch, o = e.requests[0].transaction;
      return t[r]({ args: { queries: e.requests.map((s) => ({ model: s.modelName, operation: s.action, args: s.args })), transaction: o ? { isolationLevel: o.kind === "batch" ? o.isolationLevel : void 0 } : void 0 }, __internalParams: e, query(s, a = e) {
        let l = a.customDataProxyFetch;
        return a.customDataProxyFetch = da(i, l), pa(a, t, r + 1, n);
      } });
    }
    var aa = (e) => e;
    function da(e = aa, t = aa) {
      return (r) => e(t(r));
    }
    function fa(e, t, r) {
      let n = Te(r);
      return !t.result || !(t.result.$allModels || t.result[n]) ? e : Jp({ ...e, ...ma(t.name, e, t.result.$allModels), ...ma(t.name, e, t.result[n]) });
    }
    function Jp(e) {
      let t = new be(), r = (n, i) => t.getOrCreate(n, () => i.has(n) ? [n] : (i.add(n), e[n] ? e[n].needs.flatMap((o) => r(o, i)) : [n]));
      return pt(e, (n) => ({ ...n, needs: r(n.name, /* @__PURE__ */ new Set()) }));
    }
    function ma(e, t, r) {
      return r ? pt(r, ({ needs: n, compute: i }, o) => ({ name: o, needs: n ? Object.keys(n).filter((s) => n[s]) : [], compute: Hp(t, o, i) })) : {};
    }
    function Hp(e, t, r) {
      let n = e?.[t]?.compute;
      return n ? (i) => r({ ...i, [t]: n(i) }) : r;
    }
    function ga(e, t) {
      if (!t)
        return e;
      let r = { ...e };
      for (let n of Object.values(t))
        if (e[n.name])
          for (let i of n.needs)
            r[i] = true;
      return r;
    }
    var an = class {
      constructor(t, r) {
        this.extension = t;
        this.previous = r;
        this.computedFieldsCache = new be();
        this.modelExtensionsCache = new be();
        this.queryCallbacksCache = new be();
        this.clientExtensions = Vt(() => this.extension.client ? { ...this.previous?.getAllClientExtensions(), ...this.extension.client } : this.previous?.getAllClientExtensions());
        this.batchCallbacks = Vt(() => {
          let t2 = this.previous?.getAllBatchQueryCallbacks() ?? [], r2 = this.extension.query?.$__internalBatch;
          return r2 ? t2.concat(r2) : t2;
        });
      }
      getAllComputedFields(t) {
        return this.computedFieldsCache.getOrCreate(t, () => fa(this.previous?.getAllComputedFields(t), this.extension, t));
      }
      getAllClientExtensions() {
        return this.clientExtensions.get();
      }
      getAllModelExtensions(t) {
        return this.modelExtensionsCache.getOrCreate(t, () => {
          let r = Te(t);
          return !this.extension.model || !(this.extension.model[r] || this.extension.model.$allModels) ? this.previous?.getAllModelExtensions(t) : { ...this.previous?.getAllModelExtensions(t), ...this.extension.model.$allModels, ...this.extension.model[r] };
        });
      }
      getAllQueryCallbacks(t, r) {
        return this.queryCallbacksCache.getOrCreate(`${t}:${r}`, () => {
          let n = this.previous?.getAllQueryCallbacks(t, r) ?? [], i = [], o = this.extension.query;
          return !o || !(o[t] || o.$allModels || o[r] || o.$allOperations) ? n : (o[t] !== void 0 && (o[t][r] !== void 0 && i.push(o[t][r]), o[t].$allOperations !== void 0 && i.push(o[t].$allOperations)), t !== "$none" && o.$allModels !== void 0 && (o.$allModels[r] !== void 0 && i.push(o.$allModels[r]), o.$allModels.$allOperations !== void 0 && i.push(o.$allModels.$allOperations)), o[r] !== void 0 && i.push(o[r]), o.$allOperations !== void 0 && i.push(o.$allOperations), n.concat(i));
        });
      }
      getAllBatchQueryCallbacks() {
        return this.batchCallbacks.get();
      }
    };
    var ln = class e {
      constructor(t) {
        this.head = t;
      }
      static empty() {
        return new e();
      }
      static single(t) {
        return new e(new an(t));
      }
      isEmpty() {
        return this.head === void 0;
      }
      append(t) {
        return new e(new an(t, this.head));
      }
      getAllComputedFields(t) {
        return this.head?.getAllComputedFields(t);
      }
      getAllClientExtensions() {
        return this.head?.getAllClientExtensions();
      }
      getAllModelExtensions(t) {
        return this.head?.getAllModelExtensions(t);
      }
      getAllQueryCallbacks(t, r) {
        return this.head?.getAllQueryCallbacks(t, r) ?? [];
      }
      getAllBatchQueryCallbacks() {
        return this.head?.getAllBatchQueryCallbacks() ?? [];
      }
    };
    var ya = D("prisma:client");
    var ha = { Vercel: "vercel", "Netlify CI": "netlify" };
    function xa({ postinstall: e, ciName: t, clientVersion: r }) {
      if (ya("checkPlatformCaching:postinstall", e), ya("checkPlatformCaching:ciName", t), e === true && t && t in ha) {
        let n = `Prisma has detected that this project was built on ${t}, which caches dependencies. This leads to an outdated Prisma Client because Prisma's auto-generation isn't triggered. To fix this, make sure to run the \`prisma generate\` command during the build process.

Learn how: https://pris.ly/d/${ha[t]}-build`;
        throw console.error(n), new F(n, r);
      }
    }
    function ba(e, t) {
      return e ? e.datasources ? e.datasources : e.datasourceUrl ? { [t[0]]: { url: e.datasourceUrl } } : {} : {};
    }
    function Zt({ error: e, user_facing_error: t }, r) {
      return t.error_code ? new U(t.message, { code: t.error_code, clientVersion: r, meta: t.meta, batchRequestIdx: t.batch_request_idx }) : new K(e, { clientVersion: r, batchRequestIdx: t.batch_request_idx });
    }
    var vt = class {
    };
    var Ta = S(require("fs"));
    var Xt = S(require("path"));
    function un(e) {
      let { runtimeBinaryTarget: t } = e;
      return `Add "${t}" to \`binaryTargets\` in the "schema.prisma" file and run \`prisma generate\` after saving it:

${Wp(e)}`;
    }
    function Wp(e) {
      let { generator: t, generatorBinaryTargets: r, runtimeBinaryTarget: n } = e, i = { fromEnvVar: null, value: n }, o = [...r, i];
      return si({ ...t, binaryTargets: o });
    }
    function je(e) {
      let { runtimeBinaryTarget: t } = e;
      return `Prisma Client could not locate the Query Engine for runtime "${t}".`;
    }
    function Be(e) {
      let { searchedLocations: t } = e;
      return `The following locations have been searched:
${[...new Set(t)].map((i) => `  ${i}`).join(`
`)}`;
    }
    function Ea(e) {
      let { runtimeBinaryTarget: t } = e;
      return `${je(e)}

This happened because \`binaryTargets\` have been pinned, but the actual deployment also required "${t}".
${un(e)}

${Be(e)}`;
    }
    function cn(e) {
      return `We would appreciate if you could take the time to share some information with us.
Please help us by answering a few questions: https://pris.ly/${e}`;
    }
    function wa(e) {
      let { queryEngineName: t } = e;
      return `${je(e)}

This is likely caused by a bundler that has not copied "${t}" next to the resulting bundle.
Ensure that "${t}" has been copied next to the bundle or in "${e.expectedLocation}".

${cn("engine-not-found-bundler-investigation")}

${Be(e)}`;
    }
    function Pa(e) {
      let { runtimeBinaryTarget: t, generatorBinaryTargets: r } = e, n = r.find((i) => i.native);
      return `${je(e)}

This happened because Prisma Client was generated for "${n?.value ?? "unknown"}", but the actual deployment required "${t}".
${un(e)}

${Be(e)}`;
    }
    function va(e) {
      let { queryEngineName: t } = e;
      return `${je(e)}

This is likely caused by tooling that has not copied "${t}" to the deployment folder.
Ensure that you ran \`prisma generate\` and that "${t}" has been copied to "${e.expectedLocation}".

${cn("engine-not-found-tooling-investigation")}

${Be(e)}`;
    }
    var zp = D("prisma:client:engines:resolveEnginePath");
    var Yp = () => new RegExp("runtime[\\\\/]library\\.m?js$");
    async function Ca(e, t) {
      let r = { binary: process.env.PRISMA_QUERY_ENGINE_BINARY, library: process.env.PRISMA_QUERY_ENGINE_LIBRARY }[e] ?? t.prismaPath;
      if (r !== void 0)
        return r;
      let { enginePath: n, searchedLocations: i } = await Zp(e, t);
      if (zp("enginePath", n), n !== void 0 && e === "binary" && ti(n), n !== void 0)
        return t.prismaPath = n;
      let o = await ut(), s = t.generator?.binaryTargets ?? [], a = s.some((d) => d.native), l = !s.some((d) => d.value === o), u = __filename.match(Yp()) === null, c = { searchedLocations: i, generatorBinaryTargets: s, generator: t.generator, runtimeBinaryTarget: o, queryEngineName: Aa(e, o), expectedLocation: Xt.default.relative(process.cwd(), t.dirname) }, p;
      throw a && l ? p = Pa(c) : l ? p = Ea(c) : u ? p = wa(c) : p = va(c), new F(p, t.clientVersion);
    }
    async function Zp(engineType, config) {
      let binaryTarget = await ut(), searchedLocations = [], dirname = eval("__dirname"), searchLocations = [config.dirname, Xt.default.resolve(dirname, ".."), config.generator?.output?.value ?? dirname, Xt.default.resolve(dirname, "../../../.prisma/client"), "/tmp/prisma-engines", config.cwd];
      __filename.includes("resolveEnginePath") && searchLocations.push(rs());
      for (let e of searchLocations) {
        let t = Aa(engineType, binaryTarget), r = Xt.default.join(e, t);
        if (searchedLocations.push(e), Ta.default.existsSync(r))
          return { enginePath: r, searchedLocations };
      }
      return { enginePath: void 0, searchedLocations };
    }
    function Aa(e, t) {
      return e === "library" ? jn(t, "fs") : `query-engine-${t}${t === "windows" ? ".exe" : ""}`;
    }
    function pn(e, t) {
      return { batch: e, transaction: t?.kind === "batch" ? { isolationLevel: t.options.isolationLevel } : void 0 };
    }
    var Ii = S(li());
    function Ra(e) {
      return e ? e.replace(/".*"/g, '"X"').replace(/[\s:\[]([+-]?([0-9]*[.])?[0-9]+)/g, (t) => `${t[0]}5`) : "";
    }
    function Ma(e) {
      return e.split(`
`).map((t) => t.replace(/^\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)\s*/, "").replace(/\+\d+\s*ms$/, "")).join(`
`);
    }
    var Sa = S(cs());
    function Ia({ title: e, user: t = "prisma", repo: r = "prisma", template: n = "bug_report.md", body: i }) {
      return (0, Sa.default)({ user: t, repo: r, template: n, title: e, body: i });
    }
    function ka({ version: e, platform: t, title: r, description: n, engineVersion: i, database: o, query: s }) {
      let a = bo(6e3 - (s?.length ?? 0)), l = Ma((0, Ii.default)(a)), u = n ? `# Description
\`\`\`
${n}
\`\`\`` : "", c = (0, Ii.default)(`Hi Prisma Team! My Prisma Client just crashed. This is the report:
## Versions

| Name            | Version            |
|-----------------|--------------------|
| Node            | ${process.version?.padEnd(19)}| 
| OS              | ${t?.padEnd(19)}|
| Prisma Client   | ${e?.padEnd(19)}|
| Query Engine    | ${i?.padEnd(19)}|
| Database        | ${o?.padEnd(19)}|

${u}

## Logs
\`\`\`
${l}
\`\`\`

## Client Snippet
\`\`\`ts
// PLEASE FILL YOUR CODE SNIPPET HERE
\`\`\`

## Schema
\`\`\`prisma
// PLEASE ADD YOUR SCHEMA HERE IF POSSIBLE
\`\`\`

## Prisma Engine Query
\`\`\`
${s ? Ra(s) : ""}
\`\`\`
`), p = Ia({ title: r, body: c });
      return `${r}

This is a non-recoverable error which probably happens when the Prisma Query Engine has a panic.

${te(p)}

If you want the Prisma team to look into it, please open the link above \u{1F64F}
To increase the chance of success, please post your schema and a snippet of
how you used Prisma Client in the issue. 
`;
    }
    function dn({ inlineDatasources: e, overrideDatasources: t, env: r, clientVersion: n }) {
      let i, o = Object.keys(e)[0], s = e[o]?.url, a = t[o]?.url;
      if (o === void 0 ? i = void 0 : a ? i = a : s?.value ? i = s.value : s?.fromEnvVar && (i = r[s.fromEnvVar]), s?.fromEnvVar !== void 0 && i === void 0)
        throw new F(`error: Environment variable not found: ${s.fromEnvVar}.`, n);
      if (i === void 0)
        throw new F("error: Missing URL environment variable, value, or override.", n);
      return i;
    }
    var mn = class extends Error {
      constructor(r, n) {
        super(r);
        this.clientVersion = n.clientVersion, this.cause = n.cause;
      }
      get [Symbol.toStringTag]() {
        return this.name;
      }
    };
    var ae = class extends mn {
      constructor(r, n) {
        super(r, n);
        this.isRetryable = n.isRetryable ?? true;
      }
    };
    function M(e, t) {
      return { ...e, isRetryable: t };
    }
    var Tt = class extends ae {
      constructor(r) {
        super("This request must be retried", M(r, true));
        this.name = "ForcedRetryError";
        this.code = "P5001";
      }
    };
    E(Tt, "ForcedRetryError");
    var Ye = class extends ae {
      constructor(r, n) {
        super(r, M(n, false));
        this.name = "InvalidDatasourceError";
        this.code = "P5002";
      }
    };
    E(Ye, "InvalidDatasourceError");
    var Ze = class extends ae {
      constructor(r, n) {
        super(r, M(n, false));
        this.name = "NotImplementedYetError";
        this.code = "P5004";
      }
    };
    E(Ze, "NotImplementedYetError");
    var L = class extends ae {
      constructor(r, n) {
        super(r, n);
        this.response = n.response;
        let i = this.response.headers.get("prisma-request-id");
        if (i) {
          let o = `(The request id was: ${i})`;
          this.message = this.message + " " + o;
        }
      }
    };
    var Xe = class extends L {
      constructor(r) {
        super("Schema needs to be uploaded", M(r, true));
        this.name = "SchemaMissingError";
        this.code = "P5005";
      }
    };
    E(Xe, "SchemaMissingError");
    var ki = "This request could not be understood by the server";
    var er = class extends L {
      constructor(r, n, i) {
        super(n || ki, M(r, false));
        this.name = "BadRequestError";
        this.code = "P5000";
        i && (this.code = i);
      }
    };
    E(er, "BadRequestError");
    var tr = class extends L {
      constructor(r, n) {
        super("Engine not started: healthcheck timeout", M(r, true));
        this.name = "HealthcheckTimeoutError";
        this.code = "P5013";
        this.logs = n;
      }
    };
    E(tr, "HealthcheckTimeoutError");
    var rr = class extends L {
      constructor(r, n, i) {
        super(n, M(r, true));
        this.name = "EngineStartupError";
        this.code = "P5014";
        this.logs = i;
      }
    };
    E(rr, "EngineStartupError");
    var nr = class extends L {
      constructor(r) {
        super("Engine version is not supported", M(r, false));
        this.name = "EngineVersionNotSupportedError";
        this.code = "P5012";
      }
    };
    E(nr, "EngineVersionNotSupportedError");
    var Fi = "Request timed out";
    var ir = class extends L {
      constructor(r, n = Fi) {
        super(n, M(r, false));
        this.name = "GatewayTimeoutError";
        this.code = "P5009";
      }
    };
    E(ir, "GatewayTimeoutError");
    var Xp = "Interactive transaction error";
    var or = class extends L {
      constructor(r, n = Xp) {
        super(n, M(r, false));
        this.name = "InteractiveTransactionError";
        this.code = "P5015";
      }
    };
    E(or, "InteractiveTransactionError");
    var ed = "Request parameters are invalid";
    var sr = class extends L {
      constructor(r, n = ed) {
        super(n, M(r, false));
        this.name = "InvalidRequestError";
        this.code = "P5011";
      }
    };
    E(sr, "InvalidRequestError");
    var Oi = "Requested resource does not exist";
    var ar = class extends L {
      constructor(r, n = Oi) {
        super(n, M(r, false));
        this.name = "NotFoundError";
        this.code = "P5003";
      }
    };
    E(ar, "NotFoundError");
    var Di = "Unknown server error";
    var Ct = class extends L {
      constructor(r, n, i) {
        super(n || Di, M(r, true));
        this.name = "ServerError";
        this.code = "P5006";
        this.logs = i;
      }
    };
    E(Ct, "ServerError");
    var _i = "Unauthorized, check your connection string";
    var lr = class extends L {
      constructor(r, n = _i) {
        super(n, M(r, false));
        this.name = "UnauthorizedError";
        this.code = "P5007";
      }
    };
    E(lr, "UnauthorizedError");
    var Ni = "Usage exceeded, retry again later";
    var ur = class extends L {
      constructor(r, n = Ni) {
        super(n, M(r, true));
        this.name = "UsageExceededError";
        this.code = "P5008";
      }
    };
    E(ur, "UsageExceededError");
    async function td(e) {
      let t;
      try {
        t = await e.text();
      } catch {
        return { type: "EmptyError" };
      }
      try {
        let r = JSON.parse(t);
        if (typeof r == "string")
          switch (r) {
            case "InternalDataProxyError":
              return { type: "DataProxyError", body: r };
            default:
              return { type: "UnknownTextError", body: r };
          }
        if (typeof r == "object" && r !== null) {
          if ("is_panic" in r && "message" in r && "error_code" in r)
            return { type: "QueryEngineError", body: r };
          if ("EngineNotStarted" in r || "InteractiveTransactionMisrouted" in r || "InvalidRequestError" in r) {
            let n = Object.values(r)[0].reason;
            return typeof n == "string" && !["SchemaMissing", "EngineVersionNotSupported"].includes(n) ? { type: "UnknownJsonError", body: r } : { type: "DataProxyError", body: r };
          }
        }
        return { type: "UnknownJsonError", body: r };
      } catch {
        return t === "" ? { type: "EmptyError" } : { type: "UnknownTextError", body: t };
      }
    }
    async function cr(e, t) {
      if (e.ok)
        return;
      let r = { clientVersion: t, response: e }, n = await td(e);
      if (n.type === "QueryEngineError")
        throw new U(n.body.message, { code: n.body.error_code, clientVersion: t });
      if (n.type === "DataProxyError") {
        if (n.body === "InternalDataProxyError")
          throw new Ct(r, "Internal Data Proxy error");
        if ("EngineNotStarted" in n.body) {
          if (n.body.EngineNotStarted.reason === "SchemaMissing")
            return new Xe(r);
          if (n.body.EngineNotStarted.reason === "EngineVersionNotSupported")
            throw new nr(r);
          if ("EngineStartupError" in n.body.EngineNotStarted.reason) {
            let { msg: i, logs: o } = n.body.EngineNotStarted.reason.EngineStartupError;
            throw new rr(r, i, o);
          }
          if ("KnownEngineStartupError" in n.body.EngineNotStarted.reason) {
            let { msg: i, error_code: o } = n.body.EngineNotStarted.reason.KnownEngineStartupError;
            throw new F(i, t, o);
          }
          if ("HealthcheckTimeout" in n.body.EngineNotStarted.reason) {
            let { logs: i } = n.body.EngineNotStarted.reason.HealthcheckTimeout;
            throw new tr(r, i);
          }
        }
        if ("InteractiveTransactionMisrouted" in n.body) {
          let i = { IDParseError: "Could not parse interactive transaction ID", NoQueryEngineFoundError: "Could not find Query Engine for the specified host and transaction ID", TransactionStartError: "Could not start interactive transaction" };
          throw new or(r, i[n.body.InteractiveTransactionMisrouted.reason]);
        }
        if ("InvalidRequestError" in n.body)
          throw new sr(r, n.body.InvalidRequestError.reason);
      }
      if (e.status === 401 || e.status === 403)
        throw new lr(r, At(_i, n));
      if (e.status === 404)
        return new ar(r, At(Oi, n));
      if (e.status === 429)
        throw new ur(r, At(Ni, n));
      if (e.status === 504)
        throw new ir(r, At(Fi, n));
      if (e.status >= 500)
        throw new Ct(r, At(Di, n));
      if (e.status >= 400)
        throw new er(r, At(ki, n));
    }
    function At(e, t) {
      return t.type === "EmptyError" ? e : `${e}: ${JSON.stringify(t)}`;
    }
    function Fa(e) {
      let t = Math.pow(2, e) * 50, r = Math.ceil(Math.random() * t) - Math.ceil(t / 2), n = t + r;
      return new Promise((i) => setTimeout(() => i(n), n));
    }
    function Oa(e) {
      if (!!e.generator?.previewFeatures.some((r) => r.toLowerCase().includes("metrics")))
        throw new F("The `metrics` preview feature is not yet available with Accelerate.\nPlease remove `metrics` from the `previewFeatures` in your schema.\n\nMore information about Accelerate: https://pris.ly/d/accelerate", e.clientVersion);
    }
    var Da = { "@prisma/debug": "workspace:*", "@prisma/engines-version": "5.4.1-1.2f302df92bd8945e20ad4595a73def5b96afa54f", "@prisma/fetch-engine": "workspace:*", "@prisma/get-platform": "workspace:*", "@swc/core": "1.3.75", "@swc/jest": "0.2.29", "@types/jest": "29.5.5", "@types/node": "18.18.0", execa: "5.1.1", jest: "29.7.0", typescript: "5.2.2" };
    var pr = class extends ae {
      constructor(r, n) {
        super(`Cannot fetch data from service:
${r}`, M(n, true));
        this.name = "RequestError";
        this.code = "P5010";
      }
    };
    E(pr, "RequestError");
    async function et(e, t, r = (n) => n) {
      let n = t.clientVersion;
      try {
        return typeof fetch == "function" ? await r(fetch)(e, t) : await r(Li)(e, t);
      } catch (i) {
        console.log(e);
        let o = i.message ?? "Unknown error";
        throw new pr(o, { clientVersion: n });
      }
    }
    function nd(e) {
      return { ...e.headers, "Content-Type": "application/json" };
    }
    function id(e) {
      return { method: e.method, headers: nd(e) };
    }
    function od(e, t) {
      return { text: () => Promise.resolve(Buffer.concat(e).toString()), json: () => Promise.resolve().then(() => JSON.parse(Buffer.concat(e).toString())), ok: t.statusCode >= 200 && t.statusCode <= 299, status: t.statusCode, url: t.url, headers: new $i(t.headers) };
    }
    async function Li(e, t = {}) {
      let r = sd("https"), n = id(t), i = [], { origin: o } = new URL(e);
      return new Promise((s, a) => {
        let l = r.request(e, n, (u) => {
          let { statusCode: c, headers: { location: p } } = u;
          c >= 301 && c <= 399 && p && (p.startsWith("http") === false ? s(Li(`${o}${p}`, t)) : s(Li(p, t))), u.on("data", (d) => i.push(d)), u.on("end", () => s(od(i, u))), u.on("error", a);
        });
        l.on("error", a), l.end(t.body ?? "");
      });
    }
    var sd = typeof require < "u" ? require : () => {
    };
    var $i = class {
      constructor(t = {}) {
        this.headers = /* @__PURE__ */ new Map();
        for (let [r, n] of Object.entries(t))
          if (typeof n == "string")
            this.headers.set(r, n);
          else if (Array.isArray(n))
            for (let i of n)
              this.headers.set(r, i);
      }
      append(t, r) {
        this.headers.set(t, r);
      }
      delete(t) {
        this.headers.delete(t);
      }
      get(t) {
        return this.headers.get(t) ?? null;
      }
      has(t) {
        return this.headers.has(t);
      }
      set(t, r) {
        this.headers.set(t, r);
      }
      forEach(t, r) {
        for (let [n, i] of this.headers)
          t.call(r, i, n, this);
      }
    };
    var ad = /^[1-9][0-9]*\.[0-9]+\.[0-9]+$/;
    var _a = D("prisma:client:dataproxyEngine");
    async function ld(e, t) {
      let r = Da["@prisma/engines-version"], n = t.clientVersion ?? "unknown";
      if (process.env.PRISMA_CLIENT_DATA_PROXY_CLIENT_VERSION)
        return process.env.PRISMA_CLIENT_DATA_PROXY_CLIENT_VERSION;
      if (e.includes("accelerate") && n !== "0.0.0" && n !== "in-memory")
        return n;
      let [i, o] = n?.split("-") ?? [];
      if (o === void 0 && ad.test(i))
        return i;
      if (o !== void 0 || n === "0.0.0" || n === "in-memory") {
        if (e.startsWith("localhost") || e.startsWith("127.0.0.1"))
          return "0.0.0";
        let [s] = r.split("-") ?? [], [a, l, u] = s.split("."), c = ud(`<=${a}.${l}.${u}`), p = await et(c, { clientVersion: n });
        if (!p.ok)
          throw new Error(`Failed to fetch stable Prisma version, unpkg.com status ${p.status} ${p.statusText}, response body: ${await p.text() || "<empty body>"}`);
        let d = await p.text();
        _a("length of body fetched from unpkg.com", d.length);
        let f;
        try {
          f = JSON.parse(d);
        } catch (y) {
          throw console.error("JSON.parse error: body fetched from unpkg.com: ", d), y;
        }
        return f.version;
      }
      throw new Ze("Only `major.minor.patch` versions are supported by Accelerate.", { clientVersion: n });
    }
    async function Na(e, t) {
      let r = await ld(e, t);
      return _a("version", r), r;
    }
    function ud(e) {
      return encodeURI(`https://unpkg.com/prisma@${e}/package.json`);
    }
    var La = 3;
    var qi = D("prisma:client:dataproxyEngine");
    var Vi = class {
      constructor({ apiKey: t, tracingHelper: r, logLevel: n, logQueries: i }) {
        this.apiKey = t, this.tracingHelper = r, this.logLevel = n, this.logQueries = i;
      }
      build({ traceparent: t, interactiveTransaction: r } = {}) {
        let n = { Authorization: `Bearer ${this.apiKey}` };
        this.tracingHelper.isEnabled() && (n.traceparent = t ?? this.tracingHelper.getTraceParent()), r && (n["X-transaction-id"] = r.id);
        let i = this.buildCaptureSettings();
        return i.length > 0 && (n["X-capture-telemetry"] = i.join(", ")), n;
      }
      buildCaptureSettings() {
        let t = [];
        return this.tracingHelper.isEnabled() && t.push("tracing"), this.logLevel && t.push(this.logLevel), this.logQueries && t.push("query"), t;
      }
    };
    var dr = class extends vt {
      constructor(r) {
        super();
        Oa(r), this.config = r, this.env = { ...this.config.env, ...process.env }, this.inlineSchema = r.inlineSchema ?? "", this.inlineDatasources = r.inlineDatasources ?? {}, this.inlineSchemaHash = r.inlineSchemaHash ?? "", this.clientVersion = r.clientVersion ?? "unknown", this.logEmitter = r.logEmitter, this.tracingHelper = this.config.tracingHelper;
      }
      apiKey() {
        return this.headerBuilder.apiKey;
      }
      version() {
        return "unknown";
      }
      async start() {
        this.startPromise !== void 0 && await this.startPromise, this.startPromise = (async () => {
          let [r, n] = this.extractHostAndApiKey();
          this.host = r, this.headerBuilder = new Vi({ apiKey: n, tracingHelper: this.tracingHelper, logLevel: this.config.logLevel, logQueries: this.config.logQueries }), this.remoteClientVersion = await Na(r, this.config), qi("host", this.host);
        })(), await this.startPromise;
      }
      async stop() {
      }
      propagateResponseExtensions(r) {
        r?.logs?.length && r.logs.forEach((n) => {
          switch (n.level) {
            case "debug":
            case "error":
            case "trace":
            case "warn":
            case "info":
              break;
            case "query": {
              let i = typeof n.attributes.query == "string" ? n.attributes.query : "";
              if (!this.tracingHelper.isEnabled()) {
                let [o] = i.split("/* traceparent");
                i = o;
              }
              this.logEmitter.emit("query", { query: i, timestamp: n.timestamp, duration: n.attributes.duration_ms, params: n.attributes.params, target: n.attributes.target });
            }
          }
        }), r?.traces?.length && this.tracingHelper.createEngineSpan({ span: true, spans: r.traces });
      }
      on(r, n) {
        if (r === "beforeExit")
          throw new Error('"beforeExit" hook is not applicable to the remote query engine');
        this.logEmitter.on(r, n);
      }
      async url(r) {
        return await this.start(), `https://${this.host}/${this.remoteClientVersion}/${this.inlineSchemaHash}/${r}`;
      }
      async uploadSchema() {
        let r = { name: "schemaUpload", internal: true };
        return this.tracingHelper.runInChildSpan(r, async () => {
          let n = await et(await this.url("schema"), { method: "PUT", headers: this.headerBuilder.build(), body: this.inlineSchema, clientVersion: this.clientVersion });
          n.ok || qi("schema response status", n.status);
          let i = await cr(n, this.clientVersion);
          if (i)
            throw this.logEmitter.emit("warn", { message: `Error while uploading schema: ${i.message}` }), i;
          this.logEmitter.emit("info", { message: `Schema (re)uploaded (hash: ${this.inlineSchemaHash})` });
        });
      }
      request(r, { traceparent: n, interactiveTransaction: i, customDataProxyFetch: o }) {
        return this.requestInternal({ body: r, traceparent: n, interactiveTransaction: i, customDataProxyFetch: o });
      }
      async requestBatch(r, { traceparent: n, transaction: i, customDataProxyFetch: o }) {
        let s = i?.kind === "itx" ? i.options : void 0, a = pn(r, i), { batchResult: l, elapsed: u } = await this.requestInternal({ body: a, customDataProxyFetch: o, interactiveTransaction: s, traceparent: n });
        return l.map((c) => "errors" in c && c.errors.length > 0 ? Zt(c.errors[0], this.clientVersion) : { data: c, elapsed: u });
      }
      requestInternal({ body: r, traceparent: n, customDataProxyFetch: i, interactiveTransaction: o }) {
        return this.withRetry({ actionGerund: "querying", callback: async ({ logHttpCall: s }) => {
          let a = o ? `${o.payload.endpoint}/graphql` : await this.url("graphql");
          s(a);
          let l = await et(a, { method: "POST", headers: this.headerBuilder.build({ traceparent: n, interactiveTransaction: o }), body: JSON.stringify(r), clientVersion: this.clientVersion }, i);
          l.ok || qi("graphql response status", l.status), await this.handleError(await cr(l, this.clientVersion));
          let u = await l.json(), c = u.extensions;
          if (c && this.propagateResponseExtensions(c), u.errors)
            throw u.errors.length === 1 ? Zt(u.errors[0], this.config.clientVersion) : new K(u.errors, { clientVersion: this.config.clientVersion });
          return u;
        } });
      }
      async transaction(r, n, i) {
        let o = { start: "starting", commit: "committing", rollback: "rolling back" };
        return this.withRetry({ actionGerund: `${o[r]} transaction`, callback: async ({ logHttpCall: s }) => {
          if (r === "start") {
            let a = JSON.stringify({ max_wait: i?.maxWait ?? 2e3, timeout: i?.timeout ?? 5e3, isolation_level: i?.isolationLevel }), l = await this.url("transaction/start");
            s(l);
            let u = await et(l, { method: "POST", headers: this.headerBuilder.build({ traceparent: n.traceparent }), body: a, clientVersion: this.clientVersion });
            await this.handleError(await cr(u, this.clientVersion));
            let c = await u.json(), p = c.extensions;
            p && this.propagateResponseExtensions(p);
            let d = c.id, f = c["data-proxy"].endpoint;
            return { id: d, payload: { endpoint: f } };
          } else {
            let a = `${i.payload.endpoint}/${r}`;
            s(a);
            let l = await et(a, { method: "POST", headers: this.headerBuilder.build({ traceparent: n.traceparent }), clientVersion: this.clientVersion });
            await this.handleError(await cr(l, this.clientVersion));
            let c = (await l.json()).extensions;
            c && this.propagateResponseExtensions(c);
            return;
          }
        } });
      }
      extractHostAndApiKey() {
        let r = { clientVersion: this.clientVersion }, n = Object.keys(this.inlineDatasources)[0], i = dn({ inlineDatasources: this.inlineDatasources, overrideDatasources: this.config.overrideDatasources, clientVersion: this.clientVersion, env: this.env }), o;
        try {
          o = new URL(i);
        } catch {
          throw new Ye(`Error validating datasource \`${n}\`: the URL must start with the protocol \`prisma://\``, r);
        }
        let { protocol: s, host: a, searchParams: l } = o;
        if (s !== "prisma:")
          throw new Ye(`Error validating datasource \`${n}\`: the URL must start with the protocol \`prisma://\``, r);
        let u = l.get("api_key");
        if (u === null || u.length < 1)
          throw new Ye(`Error validating datasource \`${n}\`: the URL must contain a valid API key`, r);
        return [a, u];
      }
      metrics() {
        throw new Ze("Metrics are not yet supported for Accelerate", { clientVersion: this.clientVersion });
      }
      async withRetry(r) {
        for (let n = 0; ; n++) {
          let i = (o) => {
            this.logEmitter.emit("info", { message: `Calling ${o} (n=${n})` });
          };
          try {
            return await r.callback({ logHttpCall: i });
          } catch (o) {
            if (!(o instanceof ae) || !o.isRetryable)
              throw o;
            if (n >= La)
              throw o instanceof Tt ? o.cause : o;
            this.logEmitter.emit("warn", { message: `Attempt ${n + 1}/${La} failed for ${r.actionGerund}: ${o.message ?? "(unknown)"}` });
            let s = await Fa(n);
            this.logEmitter.emit("warn", { message: `Retrying after ${s}ms` });
          }
        }
      }
      async handleError(r) {
        if (r instanceof Xe)
          throw await this.uploadSchema(), new Tt({ clientVersion: this.clientVersion, cause: r });
        if (r)
          throw r;
      }
    };
    var Ba = S(require("fs"));
    function $a(e) {
      if (e?.kind === "itx")
        return e.options.id;
    }
    var Bi = S(require("os"));
    var qa = S(require("path"));
    var ji = Symbol("PrismaLibraryEngineCache");
    function cd() {
      let e = globalThis;
      return e[ji] === void 0 && (e[ji] = {}), e[ji];
    }
    function pd(e) {
      let t = cd();
      if (t[e] !== void 0)
        return t[e];
      let r = qa.default.toNamespacedPath(e), n = { exports: {} }, i = 0;
      return process.platform !== "win32" && (i = Bi.default.constants.dlopen.RTLD_LAZY | Bi.default.constants.dlopen.RTLD_DEEPBIND), process.dlopen(n, r, i), t[e] = n.exports, n.exports;
    }
    var fn = class {
      constructor(t) {
        this.config = t;
      }
      async loadLibrary() {
        let t = await Jn(), r = await Ca("library", this.config);
        try {
          return this.config.tracingHelper.runInChildSpan({ name: "loadLibrary", internal: true }, () => pd(r));
        } catch (n) {
          let i = ri({ e: n, platformInfo: t, id: r });
          throw new F(i, this.config.clientVersion);
        }
      }
    };
    var dd = "P2036";
    var Ce = D("prisma:client:libraryEngine");
    function md(e) {
      return e.item_type === "query" && "query" in e;
    }
    function fd(e) {
      return "level" in e ? e.level === "error" && e.message === "PANIC" : false;
    }
    var Va = [...Hn, "native"];
    var ja = 0;
    var mr = class extends vt {
      constructor(r, n = new fn(r)) {
        super();
        try {
          this.datamodel = Ba.default.readFileSync(r.datamodelPath, "utf-8");
        } catch (s) {
          throw s.stack.match(/\/\.next|\/next@|\/next\//) ? new F(`Your schema.prisma could not be found, and we detected that you are using Next.js.
Find out why and learn how to fix this: https://pris.ly/d/schema-not-found-nextjs`, r.clientVersion) : r.isBundled === true ? new F("Prisma Client could not find its `schema.prisma`. This is likely caused by a bundling step, which leads to `schema.prisma` not being copied near the resulting bundle. We would appreciate if you could take the time to share some information with us.\nPlease help us by answering a few questions: https://pris.ly/bundler-investigation-error", r.clientVersion) : s;
        }
        this.config = r, this.libraryStarted = false, this.logQueries = r.logQueries ?? false, this.logLevel = r.logLevel ?? "error", this.libraryLoader = n, this.logEmitter = r.logEmitter, r.enableDebugLogs && (this.logLevel = "debug");
        let i = Object.keys(r.overrideDatasources)[0], o = r.overrideDatasources[i]?.url;
        i !== void 0 && o !== void 0 && (this.datasourceOverrides = { [i]: o }), this.libraryInstantiationPromise = this.instantiateLibrary(), this.checkForTooManyEngines();
      }
      checkForTooManyEngines() {
        ja === 10 && console.warn(`${he("warn(prisma-client)")} This is the 10th instance of Prisma Client being started. Make sure this is intentional.`);
      }
      async transaction(r, n, i) {
        await this.start();
        let o = JSON.stringify(n), s;
        if (r === "start") {
          let l = JSON.stringify({ max_wait: i?.maxWait ?? 2e3, timeout: i?.timeout ?? 5e3, isolation_level: i?.isolationLevel });
          s = await this.engine?.startTransaction(l, o);
        } else
          r === "commit" ? s = await this.engine?.commitTransaction(i.id, o) : r === "rollback" && (s = await this.engine?.rollbackTransaction(i.id, o));
        let a = this.parseEngineResponse(s);
        if (a.error_code)
          throw new U(a.message, { code: a.error_code, clientVersion: this.config.clientVersion, meta: a.meta });
        return a;
      }
      async instantiateLibrary() {
        if (Ce("internalSetup"), this.libraryInstantiationPromise)
          return this.libraryInstantiationPromise;
        Vn(), this.platform = await this.getPlatform(), await this.loadEngine(), this.version();
      }
      async getPlatform() {
        if (this.platform)
          return this.platform;
        let r = await ut();
        if (!Va.includes(r))
          throw new F(`Unknown ${me("PRISMA_QUERY_ENGINE_LIBRARY")} ${me(ne(r))}. Possible binaryTargets: ${Ge(Va.join(", "))} or a path to the query engine library.
You may have to run ${Ge("prisma generate")} for your changes to take effect.`, this.config.clientVersion);
        return r;
      }
      parseEngineResponse(r) {
        if (!r)
          throw new K("Response from the Engine was empty", { clientVersion: this.config.clientVersion });
        try {
          return JSON.parse(r);
        } catch {
          throw new K("Unable to JSON.parse response from engine", { clientVersion: this.config.clientVersion });
        }
      }
      async loadEngine() {
        if (!this.engine) {
          this.QueryEngineConstructor || (this.library = await this.libraryLoader.loadLibrary(), this.QueryEngineConstructor = this.library.QueryEngine);
          try {
            let r = new WeakRef(this), { adapter: n } = this.config;
            n && Ce("Using driver adapter: %O", n), this.engine = new this.QueryEngineConstructor({ datamodel: this.datamodel, env: process.env, logQueries: this.config.logQueries ?? false, ignoreEnvVarErrors: true, datasourceOverrides: this.datasourceOverrides ?? {}, logLevel: this.logLevel, configDir: this.config.cwd, engineProtocol: "json" }, (i) => {
              r.deref()?.logger(i);
            }, n), ja++;
          } catch (r) {
            let n = r, i = this.parseInitError(n.message);
            throw typeof i == "string" ? n : new F(i.message, this.config.clientVersion, i.error_code);
          }
        }
      }
      logger(r) {
        let n = this.parseEngineResponse(r);
        if (n) {
          if ("span" in n) {
            this.config.tracingHelper.createEngineSpan(n);
            return;
          }
          n.level = n?.level.toLowerCase() ?? "unknown", md(n) ? this.logEmitter.emit("query", { timestamp: /* @__PURE__ */ new Date(), query: n.query, params: n.params, duration: Number(n.duration_ms), target: n.module_path }) : fd(n) ? this.loggerRustPanic = new ue(this.getErrorMessageWithLink(`${n.message}: ${n.reason} in ${n.file}:${n.line}:${n.column}`), this.config.clientVersion) : this.logEmitter.emit(n.level, { timestamp: /* @__PURE__ */ new Date(), message: n.message, target: n.module_path });
        }
      }
      getErrorMessageWithLink(r) {
        return ka({ platform: this.platform, title: r, version: this.config.clientVersion, engineVersion: this.versionInfo?.commit, database: this.config.activeProvider, query: this.lastQuery });
      }
      parseInitError(r) {
        try {
          return JSON.parse(r);
        } catch {
        }
        return r;
      }
      parseRequestError(r) {
        try {
          return JSON.parse(r);
        } catch {
        }
        return r;
      }
      on(r, n) {
        if (r === "beforeExit")
          throw new Error('"beforeExit" hook is not applicable to the library engine since Prisma 5.0.0, it is only relevant and implemented for the binary engine. Please add your event listener to the `process` object directly instead.');
        this.logEmitter.on(r, n);
      }
      async start() {
        if (await this.libraryInstantiationPromise, await this.libraryStoppingPromise, this.libraryStartingPromise)
          return Ce(`library already starting, this.libraryStarted: ${this.libraryStarted}`), this.libraryStartingPromise;
        if (this.libraryStarted)
          return;
        let r = async () => {
          Ce("library starting");
          try {
            let n = { traceparent: this.config.tracingHelper.getTraceParent() };
            await this.engine?.connect(JSON.stringify(n)), this.libraryStarted = true, Ce("library started");
          } catch (n) {
            let i = this.parseInitError(n.message);
            throw typeof i == "string" ? n : new F(i.message, this.config.clientVersion, i.error_code);
          } finally {
            this.libraryStartingPromise = void 0;
          }
        };
        return this.libraryStartingPromise = this.config.tracingHelper.runInChildSpan("connect", r), this.libraryStartingPromise;
      }
      async stop() {
        if (await this.libraryStartingPromise, await this.executingQueryPromise, this.libraryStoppingPromise)
          return Ce("library is already stopping"), this.libraryStoppingPromise;
        if (!this.libraryStarted)
          return;
        let r = async () => {
          await new Promise((i) => setTimeout(i, 5)), Ce("library stopping");
          let n = { traceparent: this.config.tracingHelper.getTraceParent() };
          await this.engine?.disconnect(JSON.stringify(n)), this.libraryStarted = false, this.libraryStoppingPromise = void 0, Ce("library stopped");
        };
        return this.libraryStoppingPromise = this.config.tracingHelper.runInChildSpan("disconnect", r), this.libraryStoppingPromise;
      }
      version() {
        return this.versionInfo = this.library?.version(), this.versionInfo?.version ?? "unknown";
      }
      debugPanic(r) {
        return this.library?.debugPanic(r);
      }
      async request(r, { traceparent: n, interactiveTransaction: i }) {
        Ce(`sending request, this.libraryStarted: ${this.libraryStarted}`);
        let o = JSON.stringify({ traceparent: n }), s = JSON.stringify(r);
        try {
          await this.start(), this.executingQueryPromise = this.engine?.query(s, o, i?.id), this.lastQuery = s;
          let a = this.parseEngineResponse(await this.executingQueryPromise);
          if (a.errors)
            throw a.errors.length === 1 ? this.buildQueryError(a.errors[0]) : new K(JSON.stringify(a.errors), { clientVersion: this.config.clientVersion });
          if (this.loggerRustPanic)
            throw this.loggerRustPanic;
          return { data: a, elapsed: 0 };
        } catch (a) {
          if (a instanceof F)
            throw a;
          if (a.code === "GenericFailure" && a.message?.startsWith("PANIC:"))
            throw new ue(this.getErrorMessageWithLink(a.message), this.config.clientVersion);
          let l = this.parseRequestError(a.message);
          throw typeof l == "string" ? a : new K(`${l.message}
${l.backtrace}`, { clientVersion: this.config.clientVersion });
        }
      }
      async requestBatch(r, { transaction: n, traceparent: i }) {
        Ce("requestBatch");
        let o = pn(r, n);
        await this.start(), this.lastQuery = JSON.stringify(o), this.executingQueryPromise = this.engine.query(this.lastQuery, JSON.stringify({ traceparent: i }), $a(n));
        let s = await this.executingQueryPromise, a = this.parseEngineResponse(s);
        if (a.errors)
          throw a.errors.length === 1 ? this.buildQueryError(a.errors[0]) : new K(JSON.stringify(a.errors), { clientVersion: this.config.clientVersion });
        let { batchResult: l, errors: u } = a;
        if (Array.isArray(l))
          return l.map((c) => c.errors && c.errors.length > 0 ? this.loggerRustPanic ?? this.buildQueryError(c.errors[0]) : { data: c, elapsed: 0 });
        throw u && u.length === 1 ? new Error(u[0].error) : new Error(JSON.stringify(a));
      }
      buildQueryError(r) {
        if (r.user_facing_error.is_panic)
          return new ue(this.getErrorMessageWithLink(r.user_facing_error.message), this.config.clientVersion);
        if (r.user_facing_error.error_code === dd && this.config.adapter) {
          let n = r.user_facing_error.meta?.id;
          _r(typeof n == "number", "Malformed external JS error received from the engine");
          let i = this.config.adapter.errorRegistry.consumeError(n);
          return _r(i, "External error with reported id was not registered"), i.error;
        }
        return Zt(r, this.config.clientVersion);
      }
      async metrics(r) {
        await this.start();
        let n = await this.engine.metrics(JSON.stringify(r));
        return r.format === "prometheus" ? n : this.parseEngineResponse(n);
      }
    };
    function Ua(e, t) {
      let r;
      try {
        r = dn({ inlineDatasources: t.inlineDatasources, overrideDatasources: t.overrideDatasources, env: { ...t.env, ...process.env }, clientVersion: t.clientVersion });
      } catch {
      }
      e.noEngine !== true && r?.startsWith("prisma://") && qt("recommend--no-engine", "In production, we recommend using `prisma generate --no-engine` (See: `prisma generate --help`)");
      let n = Zn(t.generator);
      if (r?.startsWith("prisma://") || e.noEngine)
        return new dr(t);
      if (n === "library")
        return new mr(t);
      throw "binary", new X("Invalid client engine type, please use `library` or `binary`", { clientVersion: t.clientVersion });
    }
    function gn({ generator: e }) {
      return e?.previewFeatures ?? [];
    }
    var Wa = S(Ui());
    function Ja(e, t) {
      let r = Ha(e), n = gd(r), i = hd(n);
      i ? yn(i, t) : t.addErrorMessage(() => "Unknown error");
    }
    function Ha(e) {
      return e.errors.flatMap((t) => t.kind === "Union" ? Ha(t) : [t]);
    }
    function gd(e) {
      let t = /* @__PURE__ */ new Map(), r = [];
      for (let n of e) {
        if (n.kind !== "InvalidArgumentType") {
          r.push(n);
          continue;
        }
        let i = `${n.selectionPath.join(".")}:${n.argumentPath.join(".")}`, o = t.get(i);
        o ? t.set(i, { ...n, argument: { ...n.argument, typeNames: yd(o.argument.typeNames, n.argument.typeNames) } }) : t.set(i, n);
      }
      return r.push(...t.values()), r;
    }
    function yd(e, t) {
      return [...new Set(e.concat(t))];
    }
    function hd(e) {
      return pi(e, (t, r) => {
        let n = Qa(t), i = Qa(r);
        return n !== i ? n - i : Ga(t) - Ga(r);
      });
    }
    function Qa(e) {
      let t = 0;
      return Array.isArray(e.selectionPath) && (t += e.selectionPath.length), Array.isArray(e.argumentPath) && (t += e.argumentPath.length), t;
    }
    function Ga(e) {
      switch (e.kind) {
        case "InvalidArgumentValue":
        case "ValueTooLarge":
          return 20;
        case "InvalidArgumentType":
          return 10;
        case "RequiredArgumentMissing":
          return -10;
        default:
          return 0;
      }
    }
    var Se = class {
      constructor(t, r) {
        this.name = t;
        this.value = r;
        this.isRequired = false;
      }
      makeRequired() {
        return this.isRequired = true, this;
      }
      write(t) {
        let { colors: { green: r } } = t.context;
        t.addMarginSymbol(r(this.isRequired ? "+" : "?")), t.write(r(this.name)), this.isRequired || t.write(r("?")), t.write(r(": ")), typeof this.value == "string" ? t.write(r(this.value)) : t.write(this.value);
      }
    };
    var hn = class {
      constructor() {
        this.fields = [];
      }
      addField(t, r) {
        return this.fields.push({ write(n) {
          let { green: i, dim: o } = n.context.colors;
          n.write(i(o(`${t}: ${r}`))).addMarginSymbol(i(o("+")));
        } }), this;
      }
      write(t) {
        let { colors: { green: r } } = t.context;
        t.writeLine(r("{")).withIndent(() => {
          t.writeJoined(bt, this.fields).newLine();
        }).write(r("}")).addMarginSymbol(r("+"));
      }
    };
    function yn(e, t) {
      switch (e.kind) {
        case "IncludeAndSelect":
          xd(e, t);
          break;
        case "IncludeOnScalar":
          bd(e, t);
          break;
        case "EmptySelection":
          Ed(e, t);
          break;
        case "UnknownSelectionField":
          wd(e, t);
          break;
        case "UnknownArgument":
          Pd(e, t);
          break;
        case "UnknownInputField":
          vd(e, t);
          break;
        case "RequiredArgumentMissing":
          Td(e, t);
          break;
        case "InvalidArgumentType":
          Cd(e, t);
          break;
        case "InvalidArgumentValue":
          Ad(e, t);
          break;
        case "ValueTooLarge":
          Rd(e, t);
          break;
        case "SomeFieldsMissing":
          Md(e, t);
          break;
        case "TooManyFieldsGiven":
          Sd(e, t);
          break;
        case "Union":
          Ja(e, t);
          break;
        default:
          throw new Error("not implemented: " + e.kind);
      }
    }
    function xd(e, t) {
      let r = t.arguments.getDeepSubSelectionValue(e.selectionPath);
      r && r instanceof Q && (r.getField("include")?.markAsError(), r.getField("select")?.markAsError()), t.addErrorMessage((n) => `Please ${n.bold("either")} use ${n.green("`include`")} or ${n.green("`select`")}, but ${n.red("not both")} at the same time.`);
    }
    function bd(e, t) {
      let [r, n] = xn(e.selectionPath), i = e.outputType, o = t.arguments.getDeepSelectionParent(r)?.value;
      if (o && (o.getField(n)?.markAsError(), i))
        for (let s of i.fields)
          s.isRelation && o.addSuggestion(new Se(s.name, "true"));
      t.addErrorMessage((s) => {
        let a = `Invalid scalar field ${s.red(`\`${n}\``)} for ${s.bold("include")} statement`;
        return i ? a += ` on model ${s.bold(i.name)}. ${fr(s)}` : a += ".", a += `
Note that ${s.bold("include")} statements only accept relation fields.`, a;
      });
    }
    function Ed(e, t) {
      let r = e.outputType, n = t.arguments.getDeepSelectionParent(e.selectionPath)?.value, i = n?.isEmpty() ?? false;
      n && (n.removeAllFields(), Za(n, r)), t.addErrorMessage((o) => i ? `The ${o.red("`select`")} statement for type ${o.bold(r.name)} must not be empty. ${fr(o)}` : `The ${o.red("`select`")} statement for type ${o.bold(r.name)} needs ${o.bold("at least one truthy value")}.`);
    }
    function wd(e, t) {
      let [r, n] = xn(e.selectionPath), i = t.arguments.getDeepSelectionParent(r);
      i && (i.value.getField(n)?.markAsError(), Za(i.value, e.outputType)), t.addErrorMessage((o) => {
        let s = [`Unknown field ${o.red(`\`${n}\``)}`];
        return i && s.push(`for ${o.bold(i.kind)} statement`), s.push(`on model ${o.bold(`\`${e.outputType.name}\``)}.`), s.push(fr(o)), s.join(" ");
      });
    }
    function Pd(e, t) {
      let r = e.argumentPath[0], n = t.arguments.getDeepSubSelectionValue(e.selectionPath);
      n instanceof Q && (n.getField(r)?.markAsError(), Id(n, e.arguments)), t.addErrorMessage((i) => za(i, r, e.arguments.map((o) => o.name)));
    }
    function vd(e, t) {
      let [r, n] = xn(e.argumentPath), i = t.arguments.getDeepSubSelectionValue(e.selectionPath);
      if (i instanceof Q) {
        i.getDeepField(e.argumentPath)?.markAsError();
        let o = i.getDeepFieldValue(r);
        o instanceof Q && Xa(o, e.inputType);
      }
      t.addErrorMessage((o) => za(o, n, e.inputType.fields.map((s) => s.name)));
    }
    function za(e, t, r) {
      let n = [`Unknown argument \`${e.red(t)}\`.`], i = Fd(t, r);
      return i && n.push(`Did you mean \`${e.green(i)}\`?`), r.length > 0 && n.push(fr(e)), n.join(" ");
    }
    function Td(e, t) {
      let r;
      t.addErrorMessage((l) => r?.value instanceof G && r.value.text === "null" ? `Argument \`${l.green(o)}\` must not be ${l.red("null")}.` : `Argument \`${l.green(o)}\` is missing.`);
      let n = t.arguments.getDeepSubSelectionValue(e.selectionPath);
      if (!(n instanceof Q))
        return;
      let [i, o] = xn(e.argumentPath), s = new hn(), a = n.getDeepFieldValue(i);
      if (a instanceof Q)
        if (r = a.getField(o), r && a.removeField(o), e.inputTypes.length === 1 && e.inputTypes[0].kind === "object") {
          for (let l of e.inputTypes[0].fields)
            s.addField(l.name, l.typeNames.join(" | "));
          a.addSuggestion(new Se(o, s).makeRequired());
        } else {
          let l = e.inputTypes.map(Ya).join(" | ");
          a.addSuggestion(new Se(o, l).makeRequired());
        }
    }
    function Ya(e) {
      return e.kind === "list" ? `${Ya(e.elementType)}[]` : e.name;
    }
    function Cd(e, t) {
      let r = e.argument.name, n = t.arguments.getDeepSubSelectionValue(e.selectionPath);
      n instanceof Q && n.getDeepFieldValue(e.argumentPath)?.markAsError(), t.addErrorMessage((i) => {
        let o = bn("or", e.argument.typeNames.map((s) => i.green(s)));
        return `Argument \`${i.bold(r)}\`: Invalid value provided. Expected ${o}, provided ${i.red(e.inferredType)}.`;
      });
    }
    function Ad(e, t) {
      let r = e.argument.name, n = t.arguments.getDeepSubSelectionValue(e.selectionPath);
      n instanceof Q && n.getDeepFieldValue(e.argumentPath)?.markAsError(), t.addErrorMessage((i) => {
        let o = [`Invalid value for argument \`${i.bold(r)}\``];
        if (e.underlyingError && o.push(`: ${e.underlyingError}`), o.push("."), e.argument.typeNames.length > 0) {
          let s = bn("or", e.argument.typeNames.map((a) => i.green(a)));
          o.push(` Expected ${s}.`);
        }
        return o.join("");
      });
    }
    function Rd(e, t) {
      let r = e.argument.name, n = t.arguments.getDeepSubSelectionValue(e.selectionPath), i;
      if (n instanceof Q) {
        let s = n.getDeepField(e.argumentPath)?.value;
        s?.markAsError(), s instanceof G && (i = s.text);
      }
      t.addErrorMessage((o) => {
        let s = ["Unable to fit value"];
        return i && s.push(o.red(i)), s.push(`into a 64-bit signed integer for field \`${o.bold(r)}\``), s.join(" ");
      });
    }
    function Md(e, t) {
      let r = e.argumentPath[e.argumentPath.length - 1], n = t.arguments.getDeepSubSelectionValue(e.selectionPath);
      if (n instanceof Q) {
        let i = n.getDeepFieldValue(e.argumentPath);
        i instanceof Q && Xa(i, e.inputType);
      }
      t.addErrorMessage((i) => {
        let o = [`Argument \`${i.bold(r)}\` of type ${i.bold(e.inputType.name)} needs`];
        return e.constraints.minFieldCount === 1 ? e.constraints.requiredFields ? o.push(`${i.green("at least one of")} ${bn("or", e.constraints.requiredFields.map((s) => `\`${i.bold(s)}\``))} arguments.`) : o.push(`${i.green("at least one")} argument.`) : o.push(`${i.green(`at least ${e.constraints.minFieldCount}`)} arguments.`), o.push(fr(i)), o.join(" ");
      });
    }
    function Sd(e, t) {
      let r = e.argumentPath[e.argumentPath.length - 1], n = t.arguments.getDeepSubSelectionValue(e.selectionPath), i = [];
      if (n instanceof Q) {
        let o = n.getDeepFieldValue(e.argumentPath);
        o instanceof Q && (o.markAsError(), i = Object.keys(o.getFields()));
      }
      t.addErrorMessage((o) => {
        let s = [`Argument \`${o.bold(r)}\` of type ${o.bold(e.inputType.name)} needs`];
        return e.constraints.minFieldCount === 1 && e.constraints.maxFieldCount == 1 ? s.push(`${o.green("exactly one")} argument,`) : e.constraints.maxFieldCount == 1 ? s.push(`${o.green("at most one")} argument,`) : s.push(`${o.green(`at most ${e.constraints.maxFieldCount}`)} arguments,`), s.push(`but you provided ${bn("and", i.map((a) => o.red(a)))}. Please choose`), e.constraints.maxFieldCount === 1 ? s.push("one.") : s.push(`${e.constraints.maxFieldCount}.`), s.join(" ");
      });
    }
    function Za(e, t) {
      for (let r of t.fields)
        e.hasField(r.name) || e.addSuggestion(new Se(r.name, "true"));
    }
    function Id(e, t) {
      for (let r of t)
        e.hasField(r.name) || e.addSuggestion(new Se(r.name, r.typeNames.join(" | ")));
    }
    function Xa(e, t) {
      if (t.kind === "object")
        for (let r of t.fields)
          e.hasField(r.name) || e.addSuggestion(new Se(r.name, r.typeNames.join(" | ")));
    }
    function xn(e) {
      let t = [...e], r = t.pop();
      if (!r)
        throw new Error("unexpected empty path");
      return [t, r];
    }
    function fr({ green: e, enabled: t }) {
      return "Available options are " + (t ? `listed in ${e("green")}` : "marked with ?") + ".";
    }
    function bn(e, t) {
      if (t.length === 1)
        return t[0];
      let r = [...t], n = r.pop();
      return `${r.join(", ")} ${e} ${n}`;
    }
    var kd = 3;
    function Fd(e, t) {
      let r = 1 / 0, n;
      for (let i of t) {
        let o = (0, Wa.default)(e, i);
        o > kd || o < r && (r = o, n = i);
      }
      return n;
    }
    function En({ args: e, errors: t, errorFormat: r, callsite: n, originalMethod: i, clientVersion: o }) {
      let s = en(e);
      for (let p of t)
        yn(p, s);
      let a = r === "pretty" ? Ds : Zr, l = s.renderAllMessages(a), u = new mt(0, { colors: a }).write(s).toString(), c = Pt({ message: l, callsite: n, originalMethod: i, showColors: r === "pretty", callArguments: u });
      throw new X(c, { clientVersion: o });
    }
    var Od = { findUnique: "findUnique", findUniqueOrThrow: "findUniqueOrThrow", findFirst: "findFirst", findFirstOrThrow: "findFirstOrThrow", findMany: "findMany", count: "aggregate", create: "createOne", createMany: "createMany", update: "updateOne", updateMany: "updateMany", upsert: "upsertOne", delete: "deleteOne", deleteMany: "deleteMany", executeRaw: "executeRaw", queryRaw: "queryRaw", aggregate: "aggregate", groupBy: "groupBy", runCommandRaw: "runCommandRaw", findRaw: "findRaw", aggregateRaw: "aggregateRaw" };
    function el({ modelName: e, action: t, args: r, runtimeDataModel: n, extensions: i, callsite: o, clientMethod: s, errorFormat: a, clientVersion: l }) {
      let u = new Ki({ runtimeDataModel: n, modelName: e, action: t, rootArgs: r, callsite: o, extensions: i, selectionPath: [], argumentPath: [], originalMethod: s, errorFormat: a, clientVersion: l });
      return { modelName: e, action: Od[t], query: Qi(r, u) };
    }
    function Qi({ select: e, include: t, ...r } = {}, n) {
      return { arguments: rl(r, n), selection: Dd(e, t, n) };
    }
    function Dd(e, t, r) {
      return e && t && r.throwValidationError({ kind: "IncludeAndSelect", selectionPath: r.getSelectionPath() }), e ? Ld(e, r) : _d(r, t);
    }
    function _d(e, t) {
      let r = {};
      return e.model && !e.isRawAction() && (r.$composites = true, r.$scalars = true), t && Nd(r, t, e), r;
    }
    function Nd(e, t, r) {
      for (let [n, i] of Object.entries(t)) {
        let o = r.findField(n);
        o && o?.kind !== "object" && r.throwValidationError({ kind: "IncludeOnScalar", selectionPath: r.getSelectionPath().concat(n), outputType: r.getOutputTypeDescription() }), i === true ? e[n] = true : typeof i == "object" && (e[n] = Qi(i, r.nestSelection(n)));
      }
    }
    function Ld(e, t) {
      let r = {}, n = t.getComputedFields(), i = ga(e, n);
      for (let [o, s] of Object.entries(i)) {
        let a = t.findField(o);
        n?.[o] && !a || (s === true ? r[o] = true : typeof s == "object" && (r[o] = Qi(s, t.nestSelection(o))));
      }
      return r;
    }
    function tl(e, t) {
      if (e === null)
        return null;
      if (typeof e == "string" || typeof e == "number" || typeof e == "boolean")
        return e;
      if (typeof e == "bigint")
        return { $type: "BigInt", value: String(e) };
      if (ft(e)) {
        if (Br(e))
          return { $type: "DateTime", value: e.toISOString() };
        t.throwValidationError({ kind: "InvalidArgumentValue", selectionPath: t.getSelectionPath(), argumentPath: t.getArgumentPath(), argument: { name: t.getArgumentName(), typeNames: ["Date"] }, underlyingError: "Provided Date object is invalid" });
      }
      if (xt(e))
        return { $type: "FieldRef", value: { _ref: e.name, _container: e.modelName } };
      if (Array.isArray(e))
        return $d(e, t);
      if (ArrayBuffer.isView(e))
        return { $type: "Bytes", value: Buffer.from(e).toString("base64") };
      if (qd(e))
        return e.values;
      if (ht(e))
        return { $type: "Decimal", value: e.toFixed() };
      if (e instanceof xe) {
        if (e !== $r.instances[e._getName()])
          throw new Error("Invalid ObjectEnumValue");
        return { $type: "Enum", value: e._getName() };
      }
      if (Vd(e))
        return e.toJSON();
      if (typeof e == "object")
        return rl(e, t);
      t.throwValidationError({ kind: "InvalidArgumentValue", selectionPath: t.getSelectionPath(), argumentPath: t.getArgumentPath(), argument: { name: t.getArgumentName(), typeNames: [] }, underlyingError: `We could not serialize ${Object.prototype.toString.call(e)} value. Serialize the object to JSON or implement a ".toJSON()" method on it` });
    }
    function rl(e, t) {
      if (e.$type)
        return { $type: "Json", value: JSON.stringify(e) };
      let r = {};
      for (let n in e) {
        let i = e[n];
        i !== void 0 && (r[n] = tl(i, t.nestArgument(n)));
      }
      return r;
    }
    function $d(e, t) {
      let r = [];
      for (let n = 0; n < e.length; n++) {
        let i = t.nestArgument(String(n)), o = e[n];
        o === void 0 && t.throwValidationError({ kind: "InvalidArgumentValue", selectionPath: i.getSelectionPath(), argumentPath: i.getArgumentPath(), argument: { name: `${t.getArgumentName()}[${n}]`, typeNames: [] }, underlyingError: "Can not use `undefined` value within array. Use `null` or filter out `undefined` values" }), r.push(tl(o, i));
      }
      return r;
    }
    function qd(e) {
      return typeof e == "object" && e !== null && e.__prismaRawParameters__ === true;
    }
    function Vd(e) {
      return typeof e == "object" && e !== null && typeof e.toJSON == "function";
    }
    var Ki = class e {
      constructor(t) {
        this.params = t;
        this.params.modelName && (this.model = this.params.runtimeDataModel.models[this.params.modelName]);
      }
      throwValidationError(t) {
        En({ errors: [t], originalMethod: this.params.originalMethod, args: this.params.rootArgs ?? {}, callsite: this.params.callsite, errorFormat: this.params.errorFormat, clientVersion: this.params.clientVersion });
      }
      getSelectionPath() {
        return this.params.selectionPath;
      }
      getArgumentPath() {
        return this.params.argumentPath;
      }
      getArgumentName() {
        return this.params.argumentPath[this.params.argumentPath.length - 1];
      }
      getOutputTypeDescription() {
        if (!(!this.params.modelName || !this.model))
          return { name: this.params.modelName, fields: this.model.fields.map((t) => ({ name: t.name, typeName: "boolean", isRelation: t.kind === "object" })) };
      }
      isRawAction() {
        return ["executeRaw", "queryRaw", "runCommandRaw", "findRaw", "aggregateRaw"].includes(this.params.action);
      }
      getComputedFields() {
        if (this.params.modelName)
          return this.params.extensions.getAllComputedFields(this.params.modelName);
      }
      findField(t) {
        return this.model?.fields.find((r) => r.name === t);
      }
      nestSelection(t) {
        let r = this.findField(t), n = r?.kind === "object" ? r.type : void 0;
        return new e({ ...this.params, modelName: n, selectionPath: this.params.selectionPath.concat(t) });
      }
      nestArgument(t) {
        return new e({ ...this.params, argumentPath: this.params.argumentPath.concat(t) });
      }
    };
    var nl = (e) => ({ command: e });
    var il = (e) => e.strings.reduce((t, r, n) => `${t}@P${n}${r}`);
    function gr(e) {
      try {
        return ol(e, "fast");
      } catch {
        return ol(e, "slow");
      }
    }
    function ol(e, t) {
      return JSON.stringify(e.map((r) => jd(r, t)));
    }
    function jd(e, t) {
      return typeof e == "bigint" ? { prisma__type: "bigint", prisma__value: e.toString() } : ft(e) ? { prisma__type: "date", prisma__value: e.toJSON() } : Pe.isDecimal(e) ? { prisma__type: "decimal", prisma__value: e.toJSON() } : Buffer.isBuffer(e) ? { prisma__type: "bytes", prisma__value: e.toString("base64") } : Bd(e) || ArrayBuffer.isView(e) ? { prisma__type: "bytes", prisma__value: Buffer.from(e).toString("base64") } : typeof e == "object" && t === "slow" ? al(e) : e;
    }
    function Bd(e) {
      return e instanceof ArrayBuffer || e instanceof SharedArrayBuffer ? true : typeof e == "object" && e !== null ? e[Symbol.toStringTag] === "ArrayBuffer" || e[Symbol.toStringTag] === "SharedArrayBuffer" : false;
    }
    function al(e) {
      if (typeof e != "object" || e === null)
        return e;
      if (typeof e.toJSON == "function")
        return e.toJSON();
      if (Array.isArray(e))
        return e.map(sl);
      let t = {};
      for (let r of Object.keys(e))
        t[r] = sl(e[r]);
      return t;
    }
    function sl(e) {
      return typeof e == "bigint" ? e.toString() : al(e);
    }
    var Ud = /^(\s*alter\s)/i;
    var ll = D("prisma:client");
    function Gi(e, t, r, n) {
      if (!(e !== "postgresql" && e !== "cockroachdb") && r.length > 0 && Ud.exec(t))
        throw new Error(`Running ALTER using ${n} is not supported
Using the example below you can still execute your query with Prisma, but please note that it is vulnerable to SQL injection attacks and requires you to take care of input sanitization.

Example:
  await prisma.$executeRawUnsafe(\`ALTER USER prisma WITH PASSWORD '\${password}'\`)

More Information: https://pris.ly/d/execute-raw
`);
    }
    var Ji = ({ clientMethod: e, activeProvider: t, activeProviderFlavour: r }) => (n) => {
      r !== void 0 && (t = r);
      let i = "", o;
      if (Array.isArray(n)) {
        let [s, ...a] = n;
        i = s, o = { values: gr(a || []), __prismaRawParameters__: true };
      } else
        switch (t) {
          case "sqlite":
          case "mysql": {
            i = n.sql, o = { values: gr(n.values), __prismaRawParameters__: true };
            break;
          }
          case "cockroachdb":
          case "postgresql":
          case "postgres": {
            i = n.text, o = { values: gr(n.values), __prismaRawParameters__: true };
            break;
          }
          case "sqlserver": {
            i = il(n), o = { values: gr(n.values), __prismaRawParameters__: true };
            break;
          }
          default:
            throw new Error(`The ${t} provider does not support ${e}`);
        }
      return o?.values ? ll(`prisma.${e}(${i}, ${o.values})`) : ll(`prisma.${e}(${i})`), { query: i, parameters: o };
    };
    var ul = { requestArgsToMiddlewareArgs(e) {
      return [e.strings, ...e.values];
    }, middlewareArgsToRequestArgs(e) {
      let [t, ...r] = e;
      return new oe(t, r);
    } };
    var cl = { requestArgsToMiddlewareArgs(e) {
      return [e];
    }, middlewareArgsToRequestArgs(e) {
      return e[0];
    } };
    function Hi(e) {
      return function(r) {
        let n, i = (o = e) => {
          try {
            return o === void 0 || o?.kind === "itx" ? n ?? (n = pl(r(o))) : pl(r(o));
          } catch (s) {
            return Promise.reject(s);
          }
        };
        return { then(o, s) {
          return i().then(o, s);
        }, catch(o) {
          return i().catch(o);
        }, finally(o) {
          return i().finally(o);
        }, requestTransaction(o) {
          let s = i(o);
          return s.requestTransaction ? s.requestTransaction(o) : s;
        }, [Symbol.toStringTag]: "PrismaPromise" };
      };
    }
    function pl(e) {
      return typeof e.then == "function" ? e : Promise.resolve(e);
    }
    var dl = { isEnabled() {
      return false;
    }, getTraceParent() {
      return "00-10-10-00";
    }, async createEngineSpan() {
    }, getActiveContext() {
    }, runInChildSpan(e, t) {
      return t();
    } };
    var Wi = class {
      isEnabled() {
        return this.getGlobalTracingHelper().isEnabled();
      }
      getTraceParent(t) {
        return this.getGlobalTracingHelper().getTraceParent(t);
      }
      createEngineSpan(t) {
        return this.getGlobalTracingHelper().createEngineSpan(t);
      }
      getActiveContext() {
        return this.getGlobalTracingHelper().getActiveContext();
      }
      runInChildSpan(t, r) {
        return this.getGlobalTracingHelper().runInChildSpan(t, r);
      }
      getGlobalTracingHelper() {
        return globalThis.PRISMA_INSTRUMENTATION?.helper ?? dl;
      }
    };
    function ml(e) {
      return e.includes("tracing") ? new Wi() : dl;
    }
    function fl(e, t = () => {
    }) {
      let r, n = new Promise((i) => r = i);
      return { then(i) {
        return --e === 0 && r(t()), i?.(n);
      } };
    }
    var Kd = ["$connect", "$disconnect", "$on", "$transaction", "$use", "$extends"];
    var zi = Kd;
    function gl(e) {
      return typeof e == "string" ? e : e.reduce((t, r) => {
        let n = typeof r == "string" ? r : r.level;
        return n === "query" ? t : t && (r === "info" || t === "info") ? "info" : n;
      }, void 0);
    }
    var wn = class {
      constructor() {
        this._middlewares = [];
      }
      use(t) {
        this._middlewares.push(t);
      }
      get(t) {
        return this._middlewares[t];
      }
      has(t) {
        return !!this._middlewares[t];
      }
      length() {
        return this._middlewares.length;
      }
    };
    var hl = S(li());
    function Pn(e) {
      return typeof e.batchRequestIdx == "number";
    }
    function vn(e) {
      return e === null ? e : Array.isArray(e) ? e.map(vn) : typeof e == "object" ? Qd(e) ? Gd(e) : pt(e, vn) : e;
    }
    function Qd(e) {
      return e !== null && typeof e == "object" && typeof e.$type == "string";
    }
    function Gd({ $type: e, value: t }) {
      switch (e) {
        case "BigInt":
          return BigInt(t);
        case "Bytes":
          return Buffer.from(t, "base64");
        case "DateTime":
          return new Date(t);
        case "Decimal":
          return new Pe(t);
        case "Json":
          return JSON.parse(t);
        default:
          He(t, "Unknown tagged value");
      }
    }
    function yl(e) {
      if (e.action !== "findUnique" && e.action !== "findUniqueOrThrow")
        return;
      let t = [];
      return e.modelName && t.push(e.modelName), e.query.arguments && t.push(Yi(e.query.arguments)), t.push(Yi(e.query.selection)), t.join("");
    }
    function Yi(e) {
      return `(${Object.keys(e).sort().map((r) => {
        let n = e[r];
        return typeof n == "object" && n !== null ? `(${r} ${Yi(n)})` : r;
      }).join(" ")})`;
    }
    var Jd = { aggregate: false, aggregateRaw: false, createMany: true, createOne: true, deleteMany: true, deleteOne: true, executeRaw: true, findFirst: false, findFirstOrThrow: false, findMany: false, findRaw: false, findUnique: false, findUniqueOrThrow: false, groupBy: false, queryRaw: false, runCommandRaw: true, updateMany: true, updateOne: true, upsertOne: true };
    function Zi(e) {
      return Jd[e];
    }
    var Tn = class {
      constructor(t) {
        this.options = t;
        this.tickActive = false;
        this.batches = {};
      }
      request(t) {
        let r = this.options.batchBy(t);
        return r ? (this.batches[r] || (this.batches[r] = [], this.tickActive || (this.tickActive = true, process.nextTick(() => {
          this.dispatchBatches(), this.tickActive = false;
        }))), new Promise((n, i) => {
          this.batches[r].push({ request: t, resolve: n, reject: i });
        })) : this.options.singleLoader(t);
      }
      dispatchBatches() {
        for (let t in this.batches) {
          let r = this.batches[t];
          delete this.batches[t], r.length === 1 ? this.options.singleLoader(r[0].request).then((n) => {
            n instanceof Error ? r[0].reject(n) : r[0].resolve(n);
          }).catch((n) => {
            r[0].reject(n);
          }) : (r.sort((n, i) => this.options.batchOrder(n.request, i.request)), this.options.batchLoader(r.map((n) => n.request)).then((n) => {
            if (n instanceof Error)
              for (let i = 0; i < r.length; i++)
                r[i].reject(n);
            else
              for (let i = 0; i < r.length; i++) {
                let o = n[i];
                o instanceof Error ? r[i].reject(o) : r[i].resolve(o);
              }
          }).catch((n) => {
            for (let i = 0; i < r.length; i++)
              r[i].reject(n);
          }));
        }
      }
      get [Symbol.toStringTag]() {
        return "DataLoader";
      }
    };
    var Hd = D("prisma:client:request_handler");
    var Cn = class {
      constructor(t, r) {
        this.logEmitter = r, this.client = t, this.dataloader = new Tn({ batchLoader: ca(async ({ requests: n, customDataProxyFetch: i }) => {
          let { transaction: o, otelParentCtx: s } = n[0], a = n.map((p) => p.protocolQuery), l = this.client._tracingHelper.getTraceParent(s), u = n.some((p) => Zi(p.protocolQuery.action));
          return (await this.client._engine.requestBatch(a, { traceparent: l, transaction: Wd(o), containsWrite: u, customDataProxyFetch: i })).map((p, d) => {
            if (p instanceof Error)
              return p;
            try {
              return this.mapQueryEngineResult(n[d], p);
            } catch (f) {
              return f;
            }
          });
        }), singleLoader: async (n) => {
          let i = n.transaction?.kind === "itx" ? xl(n.transaction) : void 0, o = await this.client._engine.request(n.protocolQuery, { traceparent: this.client._tracingHelper.getTraceParent(), interactiveTransaction: i, isWrite: Zi(n.protocolQuery.action), customDataProxyFetch: n.customDataProxyFetch });
          return this.mapQueryEngineResult(n, o);
        }, batchBy: (n) => n.transaction?.id ? `transaction-${n.transaction.id}` : yl(n.protocolQuery), batchOrder(n, i) {
          return n.transaction?.kind === "batch" && i.transaction?.kind === "batch" ? n.transaction.index - i.transaction.index : 0;
        } });
      }
      async request(t) {
        try {
          return await this.dataloader.request(t);
        } catch (r) {
          let { clientMethod: n, callsite: i, transaction: o, args: s } = t;
          this.handleAndLogRequestError({ error: r, clientMethod: n, callsite: i, transaction: o, args: s });
        }
      }
      mapQueryEngineResult({ dataPath: t, unpacker: r }, n) {
        let i = n?.data, o = n?.elapsed, s = this.unpack(i, t, r);
        return process.env.PRISMA_CLIENT_GET_TIME ? { data: s, elapsed: o } : s;
      }
      handleAndLogRequestError(t) {
        try {
          this.handleRequestError(t);
        } catch (r) {
          throw this.logEmitter && this.logEmitter.emit("error", { message: r.message, target: t.clientMethod, timestamp: /* @__PURE__ */ new Date() }), r;
        }
      }
      handleRequestError({ error: t, clientMethod: r, callsite: n, transaction: i, args: o }) {
        if (Hd(t), zd(t, i) || t instanceof Re)
          throw t;
        if (t instanceof U && Yd(t)) {
          let a = bl(t.meta);
          En({ args: o, errors: [a], callsite: n, errorFormat: this.client._errorFormat, originalMethod: r, clientVersion: this.client._clientVersion });
        }
        let s = t.message;
        throw n && (s = Pt({ callsite: n, originalMethod: r, isPanic: t.isPanic, showColors: this.client._errorFormat === "pretty", message: s })), s = this.sanitizeMessage(s), t.code ? new U(s, { code: t.code, clientVersion: this.client._clientVersion, meta: t.meta, batchRequestIdx: t.batchRequestIdx }) : t.isPanic ? new ue(s, this.client._clientVersion) : t instanceof K ? new K(s, { clientVersion: this.client._clientVersion, batchRequestIdx: t.batchRequestIdx }) : t instanceof F ? new F(s, this.client._clientVersion) : t instanceof ue ? new ue(s, this.client._clientVersion) : (t.clientVersion = this.client._clientVersion, t);
      }
      sanitizeMessage(t) {
        return this.client._errorFormat && this.client._errorFormat !== "pretty" ? (0, hl.default)(t) : t;
      }
      unpack(t, r, n) {
        if (!t || (t.data && (t = t.data), !t))
          return t;
        let i = Object.values(t)[0], o = r.filter((a) => a !== "select" && a !== "include"), s = vn(Ai(i, o));
        return n ? n(s) : s;
      }
      get [Symbol.toStringTag]() {
        return "RequestHandler";
      }
    };
    function Wd(e) {
      if (e) {
        if (e.kind === "batch")
          return { kind: "batch", options: { isolationLevel: e.isolationLevel } };
        if (e.kind === "itx")
          return { kind: "itx", options: xl(e) };
        He(e, "Unknown transaction kind");
      }
    }
    function xl(e) {
      return { id: e.id, payload: e.payload };
    }
    function zd(e, t) {
      return Pn(e) && t?.kind === "batch" && e.batchRequestIdx !== t.index;
    }
    function Yd(e) {
      return e.code === "P2009" || e.code === "P2012";
    }
    function bl(e) {
      if (e.kind === "Union")
        return { kind: "Union", errors: e.errors.map(bl) };
      if (Array.isArray(e.selectionPath)) {
        let [, ...t] = e.selectionPath;
        return { ...e, selectionPath: t };
      }
      return e;
    }
    var El = "5.4.1";
    var wl = El;
    function Pl(e) {
      return e.map((t) => {
        let r = {};
        for (let n of Object.keys(t))
          r[n] = vl(t[n]);
        return r;
      });
    }
    function vl({ prisma__type: e, prisma__value: t }) {
      switch (e) {
        case "bigint":
          return BigInt(t);
        case "bytes":
          return Buffer.from(t, "base64");
        case "decimal":
          return new Pe(t);
        case "datetime":
        case "date":
          return new Date(t);
        case "time":
          return /* @__PURE__ */ new Date(`1970-01-01T${t}Z`);
        case "array":
          return t.map(vl);
        default:
          return t;
      }
    }
    var Rl = S(Ui());
    var q = class extends Error {
      constructor(t) {
        super(t + `
Read more at https://pris.ly/d/client-constructor`), this.name = "PrismaClientConstructorValidationError";
      }
      get [Symbol.toStringTag]() {
        return "PrismaClientConstructorValidationError";
      }
    };
    E(q, "PrismaClientConstructorValidationError");
    var Tl = ["datasources", "datasourceUrl", "errorFormat", "adapter", "log", "__internal"];
    var Cl = ["pretty", "colorless", "minimal"];
    var Al = ["info", "query", "warn", "error"];
    var Xd = { datasources: (e, { datasourceNames: t }) => {
      if (e) {
        if (typeof e != "object" || Array.isArray(e))
          throw new q(`Invalid value ${JSON.stringify(e)} for "datasources" provided to PrismaClient constructor`);
        for (let [r, n] of Object.entries(e)) {
          if (!t.includes(r)) {
            let i = Rt(r, t) || ` Available datasources: ${t.join(", ")}`;
            throw new q(`Unknown datasource ${r} provided to PrismaClient constructor.${i}`);
          }
          if (typeof n != "object" || Array.isArray(n))
            throw new q(`Invalid value ${JSON.stringify(e)} for datasource "${r}" provided to PrismaClient constructor.
It should have this form: { url: "CONNECTION_STRING" }`);
          if (n && typeof n == "object")
            for (let [i, o] of Object.entries(n)) {
              if (i !== "url")
                throw new q(`Invalid value ${JSON.stringify(e)} for datasource "${r}" provided to PrismaClient constructor.
It should have this form: { url: "CONNECTION_STRING" }`);
              if (typeof o != "string")
                throw new q(`Invalid value ${JSON.stringify(o)} for datasource "${r}" provided to PrismaClient constructor.
It should have this form: { url: "CONNECTION_STRING" }`);
            }
        }
      }
    }, adapter: (e, t) => {
      if (e === null)
        return;
      if (e === void 0)
        throw new q('"adapter" property must not be undefined, use null to conditionally disable driver adapters.');
      if (!gn(t).includes("driverAdapters"))
        throw new q('"adapter" property can only be provided to PrismaClient constructor when "driverAdapters" preview feature is enabled.');
    }, datasourceUrl: (e) => {
      if (typeof e < "u" && typeof e != "string")
        throw new q(`Invalid value ${JSON.stringify(e)} for "datasourceUrl" provided to PrismaClient constructor.
Expected string or undefined.`);
    }, errorFormat: (e) => {
      if (e) {
        if (typeof e != "string")
          throw new q(`Invalid value ${JSON.stringify(e)} for "errorFormat" provided to PrismaClient constructor.`);
        if (!Cl.includes(e)) {
          let t = Rt(e, Cl);
          throw new q(`Invalid errorFormat ${e} provided to PrismaClient constructor.${t}`);
        }
      }
    }, log: (e) => {
      if (!e)
        return;
      if (!Array.isArray(e))
        throw new q(`Invalid value ${JSON.stringify(e)} for "log" provided to PrismaClient constructor.`);
      function t(r) {
        if (typeof r == "string" && !Al.includes(r)) {
          let n = Rt(r, Al);
          throw new q(`Invalid log level "${r}" provided to PrismaClient constructor.${n}`);
        }
      }
      for (let r of e) {
        t(r);
        let n = { level: t, emit: (i) => {
          let o = ["stdout", "event"];
          if (!o.includes(i)) {
            let s = Rt(i, o);
            throw new q(`Invalid value ${JSON.stringify(i)} for "emit" in logLevel provided to PrismaClient constructor.${s}`);
          }
        } };
        if (r && typeof r == "object")
          for (let [i, o] of Object.entries(r))
            if (n[i])
              n[i](o);
            else
              throw new q(`Invalid property ${i} for "log" provided to PrismaClient constructor`);
      }
    }, __internal: (e) => {
      if (!e)
        return;
      let t = ["debug", "hooks", "engine", "measurePerformance"];
      if (typeof e != "object")
        throw new q(`Invalid value ${JSON.stringify(e)} for "__internal" to PrismaClient constructor`);
      for (let [r] of Object.entries(e))
        if (!t.includes(r)) {
          let n = Rt(r, t);
          throw new q(`Invalid property ${JSON.stringify(r)} for "__internal" provided to PrismaClient constructor.${n}`);
        }
    } };
    function Ml(e, t) {
      for (let [r, n] of Object.entries(e)) {
        if (!Tl.includes(r)) {
          let i = Rt(r, Tl);
          throw new q(`Unknown property ${r} provided to PrismaClient constructor.${i}`);
        }
        Xd[r](n, t);
      }
      if (e.datasourceUrl && e.datasources)
        throw new q('Can not use "datasourceUrl" and "datasources" options at the same time. Pick one of them');
    }
    function Rt(e, t) {
      if (t.length === 0 || typeof e != "string")
        return "";
      let r = em(e, t);
      return r ? ` Did you mean "${r}"?` : "";
    }
    function em(e, t) {
      if (t.length === 0)
        return null;
      let r = t.map((i) => ({ value: i, distance: (0, Rl.default)(e, i) }));
      r.sort((i, o) => i.distance < o.distance ? -1 : 1);
      let n = r[0];
      return n.distance < 3 ? n.value : null;
    }
    function Sl(e) {
      return e.length === 0 ? Promise.resolve([]) : new Promise((t, r) => {
        let n = new Array(e.length), i = null, o = false, s = 0, a = () => {
          o || (s++, s === e.length && (o = true, i ? r(i) : t(n)));
        }, l = (u) => {
          o || (o = true, r(u));
        };
        for (let u = 0; u < e.length; u++)
          e[u].then((c) => {
            n[u] = c, a();
          }, (c) => {
            if (!Pn(c)) {
              l(c);
              return;
            }
            c.batchRequestIdx === u ? l(c) : (i || (i = c), a());
          });
      });
    }
    var Ue = D("prisma:client");
    typeof globalThis == "object" && (globalThis.NODE_CLIENT = true);
    var tm = { requestArgsToMiddlewareArgs: (e) => e, middlewareArgsToRequestArgs: (e) => e };
    var rm = Symbol.for("prisma.client.transaction.id");
    var nm = { id: 0, nextId() {
      return ++this.id;
    } };
    function Dl(e) {
      class t {
        constructor(n) {
          this._middlewares = new wn();
          this._createPrismaPromise = Hi();
          this.$extends = ra;
          xa(e), n && Ml(n, e);
          let i = n?.adapter ? fs(n.adapter) : void 0, o = new Fl.EventEmitter().on("error", () => {
          });
          this._extensions = ln.empty(), this._previewFeatures = gn(e), this._clientVersion = e.clientVersion ?? wl, this._activeProvider = e.activeProvider, this._tracingHelper = ml(this._previewFeatures);
          let s = { rootEnvPath: e.relativeEnvPaths.rootEnvPath && yr.default.resolve(e.dirname, e.relativeEnvPaths.rootEnvPath), schemaEnvPath: e.relativeEnvPaths.schemaEnvPath && yr.default.resolve(e.dirname, e.relativeEnvPaths.schemaEnvPath) }, a = !i && _t(s, { conflictCheck: "none" }) || e.injectableEdgeEnv?.();
          try {
            let l = n ?? {}, u = l.__internal ?? {}, c = u.debug === true;
            c && D.enable("prisma:client");
            let p = yr.default.resolve(e.dirname, e.relativePath);
            Ol.default.existsSync(p) || (p = e.dirname), Ue("dirname", e.dirname), Ue("relativePath", e.relativePath), Ue("cwd", p);
            let d = u.engine || {};
            if (l.errorFormat ? this._errorFormat = l.errorFormat : process.env.NODE_ENV === "production" ? this._errorFormat = "minimal" : process.env.NO_COLOR ? this._errorFormat = "colorless" : this._errorFormat = "colorless", this._runtimeDataModel = e.runtimeDataModel, this._engineConfig = { cwd: p, dirname: e.dirname, enableDebugLogs: c, allowTriggerPanic: d.allowTriggerPanic, datamodelPath: yr.default.join(e.dirname, e.filename ?? "schema.prisma"), prismaPath: d.binaryPath ?? void 0, engineEndpoint: d.endpoint, generator: e.generator, showColors: this._errorFormat === "pretty", logLevel: l.log && gl(l.log), logQueries: l.log && !!(typeof l.log == "string" ? l.log === "query" : l.log.find((f) => typeof f == "string" ? f === "query" : f.level === "query")), env: a?.parsed ?? {}, flags: [], clientVersion: e.clientVersion, engineVersion: e.engineVersion, previewFeatures: this._previewFeatures, activeProvider: e.activeProvider, inlineSchema: e.inlineSchema, overrideDatasources: ba(l, e.datasourceNames), inlineDatasources: e.inlineDatasources, inlineSchemaHash: e.inlineSchemaHash, tracingHelper: this._tracingHelper, logEmitter: o, isBundled: e.isBundled, adapter: i }, Ue("clientVersion", e.clientVersion), this._engine = Ua(e, this._engineConfig), this._requestHandler = new Cn(this, o), l.log)
              for (let f of l.log) {
                let y = typeof f == "string" ? f : f.emit === "stdout" ? f.level : null;
                y && this.$on(y, (g) => {
                  $t.log(`${$t.tags[y] ?? ""}`, g.message || g.query);
                });
              }
            this._metrics = new dt(this._engine);
          } catch (l) {
            throw l.clientVersion = this._clientVersion, l;
          }
          return this._appliedParent = zt(this);
        }
        get [Symbol.toStringTag]() {
          return "PrismaClient";
        }
        $use(n) {
          this._middlewares.use(n);
        }
        $on(n, i) {
          n === "beforeExit" ? this._engine.on("beforeExit", i) : this._engine.on(n, (o) => {
            let s = o.fields;
            return i(n === "query" ? { timestamp: o.timestamp, query: s?.query ?? o.query, params: s?.params ?? o.params, duration: s?.duration_ms ?? o.duration, target: o.target } : { timestamp: o.timestamp, message: s?.message ?? o.message, target: o.target });
          });
        }
        $connect() {
          try {
            return this._engine.start();
          } catch (n) {
            throw n.clientVersion = this._clientVersion, n;
          }
        }
        async $disconnect() {
          try {
            await this._engine.stop();
          } catch (n) {
            throw n.clientVersion = this._clientVersion, n;
          } finally {
            Eo();
          }
        }
        $executeRawInternal(n, i, o, s) {
          let a = this._activeProvider, l = this._engineConfig.adapter?.flavour;
          return this._request({ action: "executeRaw", args: o, transaction: n, clientMethod: i, argsMapper: Ji({ clientMethod: i, activeProvider: a, activeProviderFlavour: l }), callsite: Ve(this._errorFormat), dataPath: [], middlewareArgsMapper: s });
        }
        $executeRaw(n, ...i) {
          return this._createPrismaPromise((o) => {
            if (n.raw !== void 0 || n.sql !== void 0) {
              let [s, a] = Il(n, i);
              return Gi(this._activeProvider, s.text, s.values, Array.isArray(n) ? "prisma.$executeRaw`<SQL>`" : "prisma.$executeRaw(sql`<SQL>`)"), this.$executeRawInternal(o, "$executeRaw", s, a);
            }
            throw new X("`$executeRaw` is a tag function, please use it like the following:\n```\nconst result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`\n```\n\nOr read our docs at https://www.prisma.io/docs/concepts/components/prisma-client/raw-database-access#executeraw\n", { clientVersion: this._clientVersion });
          });
        }
        $executeRawUnsafe(n, ...i) {
          return this._createPrismaPromise((o) => (Gi(this._activeProvider, n, i, "prisma.$executeRawUnsafe(<SQL>, [...values])"), this.$executeRawInternal(o, "$executeRawUnsafe", [n, ...i])));
        }
        $runCommandRaw(n) {
          if (e.activeProvider !== "mongodb")
            throw new X(`The ${e.activeProvider} provider does not support $runCommandRaw. Use the mongodb provider.`, { clientVersion: this._clientVersion });
          return this._createPrismaPromise((i) => this._request({ args: n, clientMethod: "$runCommandRaw", dataPath: [], action: "runCommandRaw", argsMapper: nl, callsite: Ve(this._errorFormat), transaction: i }));
        }
        async $queryRawInternal(n, i, o, s) {
          let a = this._activeProvider, l = this._engineConfig.adapter?.flavour;
          return this._request({ action: "queryRaw", args: o, transaction: n, clientMethod: i, argsMapper: Ji({ clientMethod: i, activeProvider: a, activeProviderFlavour: l }), callsite: Ve(this._errorFormat), dataPath: [], middlewareArgsMapper: s }).then(Pl);
        }
        $queryRaw(n, ...i) {
          return this._createPrismaPromise((o) => {
            if (n.raw !== void 0 || n.sql !== void 0)
              return this.$queryRawInternal(o, "$queryRaw", ...Il(n, i));
            throw new X("`$queryRaw` is a tag function, please use it like the following:\n```\nconst result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`\n```\n\nOr read our docs at https://www.prisma.io/docs/concepts/components/prisma-client/raw-database-access#queryraw\n", { clientVersion: this._clientVersion });
          });
        }
        $queryRawUnsafe(n, ...i) {
          return this._createPrismaPromise((o) => this.$queryRawInternal(o, "$queryRawUnsafe", [n, ...i]));
        }
        _transactionWithArray({ promises: n, options: i }) {
          let o = nm.nextId(), s = fl(n.length), a = n.map((l, u) => {
            if (l?.[Symbol.toStringTag] !== "PrismaPromise")
              throw new Error("All elements of the array need to be Prisma Client promises. Hint: Please make sure you are not awaiting the Prisma client calls you intended to pass in the $transaction function.");
            let c = i?.isolationLevel, p = { kind: "batch", id: o, index: u, isolationLevel: c, lock: s };
            return l.requestTransaction?.(p) ?? l;
          });
          return Sl(a);
        }
        async _transactionWithCallback({ callback: n, options: i }) {
          let o = { traceparent: this._tracingHelper.getTraceParent() }, s = await this._engine.transaction("start", o, i), a;
          try {
            let l = { kind: "itx", ...s };
            a = await n(this._createItxClient(l)), await this._engine.transaction("commit", o, s);
          } catch (l) {
            throw await this._engine.transaction("rollback", o, s).catch(() => {
            }), l;
          }
          return a;
        }
        _createItxClient(n) {
          return zt(Ee(on(this), [re("_appliedParent", () => this._appliedParent._createItxClient(n)), re("_createPrismaPromise", () => Hi(n)), re(rm, () => n.id), Gt(zi)]));
        }
        $transaction(n, i) {
          let o;
          typeof n == "function" ? o = () => this._transactionWithCallback({ callback: n, options: i }) : o = () => this._transactionWithArray({ promises: n, options: i });
          let s = { name: "transaction", attributes: { method: "$transaction" } };
          return this._tracingHelper.runInChildSpan(s, o);
        }
        _request(n) {
          n.otelParentCtx = this._tracingHelper.getActiveContext();
          let i = n.middlewareArgsMapper ?? tm, o = { args: i.requestArgsToMiddlewareArgs(n.args), dataPath: n.dataPath, runInTransaction: !!n.transaction, action: n.action, model: n.model }, s = { middleware: { name: "middleware", middleware: true, attributes: { method: "$use" }, active: false }, operation: { name: "operation", attributes: { method: o.action, model: o.model, name: o.model ? `${o.model}.${o.action}` : o.action } } }, a = -1, l = async (u) => {
            let c = this._middlewares.get(++a);
            if (c)
              return this._tracingHelper.runInChildSpan(s.middleware, (P) => c(u, (T) => (P?.end(), l(T))));
            let { runInTransaction: p, args: d, ...f } = u, y = { ...n, ...f };
            d && (y.args = i.middlewareArgsToRequestArgs(d)), n.transaction !== void 0 && p === false && delete y.transaction;
            let g = await ua(this, y);
            return y.model ? oa({ result: g, modelName: y.model, args: y.args, extensions: this._extensions, runtimeDataModel: this._runtimeDataModel }) : g;
          };
          return this._tracingHelper.runInChildSpan(s.operation, () => new kl.AsyncResource("prisma-client-request").runInAsyncScope(() => l(o)));
        }
        async _executeRequest({ args: n, clientMethod: i, dataPath: o, callsite: s, action: a, model: l, argsMapper: u, transaction: c, unpacker: p, otelParentCtx: d, customDataProxyFetch: f }) {
          try {
            n = u ? u(n) : n;
            let y = { name: "serialize" }, g = this._tracingHelper.runInChildSpan(y, () => el({ modelName: l, runtimeDataModel: this._runtimeDataModel, action: a, args: n, clientMethod: i, callsite: s, extensions: this._extensions, errorFormat: this._errorFormat, clientVersion: this._clientVersion }));
            return D.enabled("prisma:client") && (Ue("Prisma Client call:"), Ue(`prisma.${i}(${$s(n)})`), Ue("Generated request:"), Ue(JSON.stringify(g, null, 2) + `
`)), c?.kind === "batch" && await c.lock, this._requestHandler.request({ protocolQuery: g, modelName: l, action: a, clientMethod: i, dataPath: o, callsite: s, args: n, extensions: this._extensions, transaction: c, unpacker: p, otelParentCtx: d, otelChildCtx: this._tracingHelper.getActiveContext(), customDataProxyFetch: f });
          } catch (y) {
            throw y.clientVersion = this._clientVersion, y;
          }
        }
        get $metrics() {
          if (!this._hasPreviewFlag("metrics"))
            throw new X("`metrics` preview feature must be enabled in order to access metrics API", { clientVersion: this._clientVersion });
          return this._metrics;
        }
        _hasPreviewFlag(n) {
          return !!this._engineConfig.previewFeatures?.includes(n);
        }
      }
      return t;
    }
    function Il(e, t) {
      return im(e) ? [new oe(e, t), ul] : [e, cl];
    }
    function im(e) {
      return Array.isArray(e) && Array.isArray(e.raw);
    }
    var om = /* @__PURE__ */ new Set(["toJSON", "$$typeof", "asymmetricMatch", Symbol.iterator, Symbol.toStringTag, Symbol.isConcatSpreadable, Symbol.toPrimitive]);
    function _l(e) {
      return new Proxy(e, { get(t, r) {
        if (r in t)
          return t[r];
        if (!om.has(r))
          throw new TypeError(`Invalid enum value: ${String(r)}`);
      } });
    }
    function Nl(e) {
      _t(e, { conflictCheck: "warn" });
    }
  }
});

// node_modules/.prisma/client/index.js
var require_client = __commonJS({
  "node_modules/.prisma/client/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var {
      PrismaClientKnownRequestError: PrismaClientKnownRequestError2,
      PrismaClientUnknownRequestError: PrismaClientUnknownRequestError2,
      PrismaClientRustPanicError: PrismaClientRustPanicError2,
      PrismaClientInitializationError: PrismaClientInitializationError2,
      PrismaClientValidationError: PrismaClientValidationError2,
      NotFoundError: NotFoundError2,
      getPrismaClient: getPrismaClient2,
      sqltag: sqltag2,
      empty: empty2,
      join: join2,
      raw: raw2,
      Decimal: Decimal2,
      Debug: Debug2,
      objectEnumValues: objectEnumValues2,
      makeStrictEnum: makeStrictEnum2,
      Extensions: Extensions2,
      warnOnce: warnOnce2,
      defineDmmfProperty: defineDmmfProperty2,
      Public: Public2
    } = require_library();
    var Prisma = {};
    exports2.Prisma = Prisma;
    exports2.$Enums = {};
    Prisma.prismaVersion = {
      client: "5.4.1",
      engine: "2f302df92bd8945e20ad4595a73def5b96afa54f"
    };
    Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError2;
    Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError2;
    Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError2;
    Prisma.PrismaClientInitializationError = PrismaClientInitializationError2;
    Prisma.PrismaClientValidationError = PrismaClientValidationError2;
    Prisma.NotFoundError = NotFoundError2;
    Prisma.Decimal = Decimal2;
    Prisma.sql = sqltag2;
    Prisma.empty = empty2;
    Prisma.join = join2;
    Prisma.raw = raw2;
    Prisma.validator = Public2.validator;
    Prisma.getExtensionContext = Extensions2.getExtensionContext;
    Prisma.defineExtension = Extensions2.defineExtension;
    Prisma.DbNull = objectEnumValues2.instances.DbNull;
    Prisma.JsonNull = objectEnumValues2.instances.JsonNull;
    Prisma.AnyNull = objectEnumValues2.instances.AnyNull;
    Prisma.NullTypes = {
      DbNull: objectEnumValues2.classes.DbNull,
      JsonNull: objectEnumValues2.classes.JsonNull,
      AnyNull: objectEnumValues2.classes.AnyNull
    };
    var path = require("path");
    exports2.Prisma.ProductScalarFieldEnum = {
      id: "id",
      title: "title",
      description: "description",
      image: "image",
      category: "category",
      price: "price",
      stock: "stock",
      createdAt: "createdAt"
    };
    exports2.Prisma.SoldScalarFieldEnum = {
      id: "id",
      title: "title",
      price: "price",
      category: "category",
      createdAt: "createdAt",
      productId: "productId"
    };
    exports2.Prisma.OrderScalarFieldEnum = {
      id: "id",
      name: "name",
      email: "email",
      cep: "cep",
      address: "address",
      neighborhood: "neighborhood",
      city: "city",
      state: "state",
      done: "done",
      createdAt: "createdAt",
      soldId: "soldId"
    };
    exports2.Prisma.SortOrder = {
      asc: "asc",
      desc: "desc"
    };
    exports2.Prisma.QueryMode = {
      default: "default",
      insensitive: "insensitive"
    };
    exports2.Prisma.ModelName = {
      Product: "Product",
      Sold: "Sold",
      Order: "Order"
    };
    var config2 = {
      "generator": {
        "name": "client",
        "provider": {
          "fromEnvVar": null,
          "value": "prisma-client-js"
        },
        "output": {
          "value": "C:\\Users\\Lucas\\Documents\\Dev\\nextjs-prisma-tcc\\server\\node_modules\\@prisma\\client",
          "fromEnvVar": null
        },
        "config": {
          "engineType": "library"
        },
        "binaryTargets": [
          {
            "fromEnvVar": null,
            "value": "windows",
            "native": true
          }
        ],
        "previewFeatures": []
      },
      "relativeEnvPaths": {
        "rootEnvPath": "../../../.env",
        "schemaEnvPath": "../../../.env"
      },
      "relativePath": "../../../prisma",
      "clientVersion": "5.4.1",
      "engineVersion": "2f302df92bd8945e20ad4595a73def5b96afa54f",
      "datasourceNames": [
        "db"
      ],
      "activeProvider": "mongodb",
      "inlineDatasources": {
        "db": {
          "url": {
            "fromEnvVar": "DATABASE_URL",
            "value": null
          }
        }
      },
      "inlineSchema": "Z2VuZXJhdG9yIGNsaWVudCB7DQogIHByb3ZpZGVyID0gInByaXNtYS1jbGllbnQtanMiDQp9DQoNCmRhdGFzb3VyY2UgZGIgew0KICBwcm92aWRlciA9ICJtb25nb2RiIg0KICB1cmwgICAgICA9IGVudigiREFUQUJBU0VfVVJMIikNCn0NCg0KbW9kZWwgUHJvZHVjdCB7DQogIGlkICAgICAgICAgIFN0cmluZyAgIEBpZCBAZGVmYXVsdChhdXRvKCkpIEBtYXAoIl9pZCIpIEBkYi5PYmplY3RJZA0KICB0aXRsZSAgICAgICBTdHJpbmcNCiAgZGVzY3JpcHRpb24gU3RyaW5nDQogIGltYWdlICAgICAgIFN0cmluZw0KICBjYXRlZ29yeSAgICBTdHJpbmcNCiAgcHJpY2UgICAgICAgRmxvYXQNCiAgc3RvY2sgICAgICAgSW50DQogIGNyZWF0ZWRBdCAgIERhdGVUaW1lIEBkZWZhdWx0KG5vdygpKQ0KICBzb2xkICAgICAgICBTb2xkW10NCn0NCg0KbW9kZWwgU29sZCB7DQogIGlkICAgICAgICBTdHJpbmcgICBAaWQgQGRlZmF1bHQoYXV0bygpKSBAbWFwKCJfaWQiKSBAZGIuT2JqZWN0SWQNCiAgdGl0bGUgICAgIFN0cmluZw0KICBwcmljZSAgICAgRmxvYXQNCiAgY2F0ZWdvcnkgIFN0cmluZw0KICBjcmVhdGVkQXQgRGF0ZVRpbWUgQGRlZmF1bHQobm93KCkpDQogIHByb2R1Y3RJZCBTdHJpbmcgICBAZGIuT2JqZWN0SWQNCiAgb3JkZXIgICAgIE9yZGVyW10NCiAgcHJvZHVjdCAgIFByb2R1Y3Q/IEByZWxhdGlvbihmaWVsZHM6IFtwcm9kdWN0SWRdLCByZWZlcmVuY2VzOiBbaWRdKQ0KfQ0KDQptb2RlbCBPcmRlciB7DQogIGlkICAgICAgICAgICBTdHJpbmcgICBAaWQgQGRlZmF1bHQoYXV0bygpKSBAbWFwKCJfaWQiKSBAZGIuT2JqZWN0SWQNCiAgbmFtZSAgICAgICAgIFN0cmluZw0KICBlbWFpbCAgICAgICAgU3RyaW5nDQogIGNlcCAgICAgICAgICBTdHJpbmcNCiAgYWRkcmVzcyAgICAgIFN0cmluZw0KICBuZWlnaGJvcmhvb2QgU3RyaW5nDQogIGNpdHkgICAgICAgICBTdHJpbmcNCiAgc3RhdGUgICAgICAgIFN0cmluZw0KICBkb25lICAgICAgICAgQm9vbGVhbg0KICBjcmVhdGVkQXQgICAgRGF0ZVRpbWUgQGRlZmF1bHQobm93KCkpDQogIHNvbGRJZCAgICAgICBTdHJpbmcgICBAZGIuT2JqZWN0SWQNCiAgc29sZCAgICAgICAgIFNvbGQgICAgIEByZWxhdGlvbihmaWVsZHM6IFtzb2xkSWRdLCByZWZlcmVuY2VzOiBbaWRdKQ0KfQ0K",
      "inlineSchemaHash": "ba29185a36af1f0a2e3a48d5738ccf7e6ab4c00ce583afbf718b0dabf887d0a1"
    };
    var fs2 = require("fs");
    config2.dirname = __dirname;
    if (!fs2.existsSync(path.join(__dirname, "schema.prisma"))) {
      const alternativePaths = [
        "node_modules/.prisma/client",
        ".prisma/client"
      ];
      const alternativePath = alternativePaths.find((altPath) => {
        return fs2.existsSync(path.join(process.cwd(), altPath, "schema.prisma"));
      }) ?? alternativePaths[0];
      config2.dirname = path.join(process.cwd(), alternativePath);
      config2.isBundled = true;
    }
    config2.runtimeDataModel = JSON.parse('{"models":{"Product":{"dbName":null,"fields":[{"name":"id","dbName":"_id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"String","default":{"name":"auto","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"title","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"description","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"image","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"category","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"price","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","isGenerated":false,"isUpdatedAt":false},{"name":"stock","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Int","isGenerated":false,"isUpdatedAt":false},{"name":"createdAt","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"sold","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Sold","relationName":"ProductToSold","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"Sold":{"dbName":null,"fields":[{"name":"id","dbName":"_id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"String","default":{"name":"auto","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"title","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"price","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","isGenerated":false,"isUpdatedAt":false},{"name":"category","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"createdAt","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"productId","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"order","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Order","relationName":"OrderToSold","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false},{"name":"product","kind":"object","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Product","relationName":"ProductToSold","relationFromFields":["productId"],"relationToFields":["id"],"isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"Order":{"dbName":null,"fields":[{"name":"id","dbName":"_id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"String","default":{"name":"auto","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"name","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"email","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"cep","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"address","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"neighborhood","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"city","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"state","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"done","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Boolean","isGenerated":false,"isUpdatedAt":false},{"name":"createdAt","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"soldId","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"sold","kind":"object","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Sold","relationName":"OrderToSold","relationFromFields":["soldId"],"relationToFields":["id"],"isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false}},"enums":{},"types":{}}');
    defineDmmfProperty2(exports2.Prisma, config2.runtimeDataModel);
    var { warnEnvConflicts: warnEnvConflicts2 } = require_library();
    warnEnvConflicts2({
      rootEnvPath: config2.relativeEnvPaths.rootEnvPath && path.resolve(config2.dirname, config2.relativeEnvPaths.rootEnvPath),
      schemaEnvPath: config2.relativeEnvPaths.schemaEnvPath && path.resolve(config2.dirname, config2.relativeEnvPaths.schemaEnvPath)
    });
    var PrismaClient2 = getPrismaClient2(config2);
    exports2.PrismaClient = PrismaClient2;
    Object.assign(exports2, Prisma);
    path.join(__dirname, "query_engine-windows.dll.node");
    path.join(process.cwd(), "node_modules/.prisma/client/query_engine-windows.dll.node");
    path.join(__dirname, "schema.prisma");
    path.join(process.cwd(), "node_modules/.prisma/client/schema.prisma");
  }
});

// node_modules/@prisma/client/index.js
var require_client2 = __commonJS({
  "node_modules/@prisma/client/index.js"(exports2, module2) {
    "use strict";
    module2.exports = {
      ...require_client()
    };
  }
});

// src/lib/prisma.ts
var prisma_exports = {};
__export(prisma_exports, {
  prisma: () => prisma
});
module.exports = __toCommonJS(prisma_exports);
var import_client = __toESM(require_client2());
var prisma = new import_client.PrismaClient();
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  prisma
});
/*! Bundled license information:

@prisma/client/runtime/library.js:
  (*! Bundled license information:
  
  decimal.js/decimal.mjs:
    (*!
     *  decimal.js v10.4.3
     *  An arbitrary-precision Decimal type for JavaScript.
     *  https://github.com/MikeMcl/decimal.js
     *  Copyright (c) 2022 Michael Mclaughlin <M8ch88l@gmail.com>
     *  MIT Licence
     *)
  *)
*/
