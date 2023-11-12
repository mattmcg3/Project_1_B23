(function () {
  var n = this,
    aa = function (a) {
      var b = typeof a;
      if ("object" == b)
        if (a) {
          if (a instanceof Array) return "array";
          if (a instanceof Object) return b;
          var c = Object.prototype.toString.call(a);
          if ("[object Window]" == c) return "object";
          if (
            "[object Array]" == c ||
            ("number" == typeof a.length &&
              "undefined" != typeof a.splice &&
              "undefined" != typeof a.propertyIsEnumerable &&
              !a.propertyIsEnumerable("splice"))
          )
            return "array";
          if (
            "[object Function]" == c ||
            ("undefined" != typeof a.call &&
              "undefined" != typeof a.propertyIsEnumerable &&
              !a.propertyIsEnumerable("call"))
          )
            return "function";
        } else return "null";
      else if ("function" == b && "undefined" == typeof a.call) return "object";
      return b;
    },
    ba = function (a, b, c) {
      return a.call.apply(a.bind, arguments);
    },
    ca = function (a, b, c) {
      if (!a) throw Error();
      if (2 < arguments.length) {
        var e = Array.prototype.slice.call(arguments, 2);
        return function () {
          var c = Array.prototype.slice.call(arguments);
          Array.prototype.unshift.apply(c, e);
          return a.apply(b, c);
        };
      }
      return function () {
        return a.apply(b, arguments);
      };
    },
    q = function (a, b, c) {
      q =
        Function.prototype.bind &&
        -1 != Function.prototype.bind.toString().indexOf("native code")
          ? ba
          : ca;
      return q.apply(null, arguments);
    };
  var u = new Date().getTime();
  var w = function (a) {
      a = parseFloat(a);
      return isNaN(a) || 1 < a || 0 > a ? 0 : a;
    },
    y = function (a, b) {
      return /^true$/.test(a) ? !0 : /^false$/.test(a) ? !1 : b;
    },
    da = /^([\w-]+\.)*([\w-]{2,})(\:[0-9]+)?$/,
    ea = function (a, b) {
      if (!a) return b;
      var c = a.match(da);
      return c ? c[0] : b;
    };
  var fa = w("0.15"),
    ga = w("0.01"),
    ha = w("0.001"),
    ia = w("0.001"),
    ja = w("0.2"),
    ka = y("true", !0);
  var la = y("false", !1),
    ma = y("false", !1);
  var z = function (a) {
    z[" "](a);
    return a;
  };
  z[" "] = function () {};
  var A = function (a) {
    try {
      var b;
      if ((b = !!a && null != a.location.href))
        o: {
          try {
            z(a.foo);
            b = !0;
            break o;
          } catch (c) {}
          b = !1;
        }
      return b;
    } catch (e) {
      return !1;
    }
  };
  var na = function (a) {
    var b = a.toString();
    a.name && -1 == b.indexOf(a.name) && (b += ": " + a.name);
    a.message && -1 == b.indexOf(a.message) && (b += ": " + a.message);
    if (a.stack) {
      a = a.stack;
      var c = b;
      try {
        -1 == a.indexOf(c) && (a = c + "\n" + a);
        for (var e; a != e; )
          (e = a),
            (a = a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/, "$1"));
        b = a.replace(/\n */g, "\n");
      } catch (d) {
        b = c;
      }
    }
    return b;
  };
  var C = document,
    D = window,
    E,
    oa = null,
    F = C.getElementsByTagName("script");
  F && F.length && (oa = F[F.length - 1]);
  E = oa;
  var pa = String.prototype.trim
      ? function (a) {
          return a.trim();
        }
      : function (a) {
          return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "");
        },
    qa = /&/g,
    ra = /</g,
    sa = />/g,
    ta = /"/g,
    ua = /'/g,
    va = /\x00/g,
    G = {
      "\x00": "\\0",
      "\b": "\\b",
      "\f": "\\f",
      "\n": "\\n",
      "\r": "\\r",
      "\t": "\\t",
      "\x0B": "\\x0B",
      '"': '\\"',
      "\\": "\\\\",
    },
    H = { "'": "\\'" },
    I = function (a, b) {
      return a < b ? -1 : a > b ? 1 : 0;
    };
  var J = function (a, b) {
      for (var c in a)
        Object.prototype.hasOwnProperty.call(a, c) && b.call(null, a[c], c, a);
    },
    K = function (a) {
      return !!a && "function" == typeof a && !!a.call;
    },
    wa = function (a, b) {
      if (!(2 > arguments.length))
        for (var c = 1, e = arguments.length; c < e; ++c) a.push(arguments[c]);
    };
  function xa(a, b) {
    a.addEventListener
      ? a.addEventListener("load", b, !1)
      : a.attachEvent && a.attachEvent("onload", b);
  }
  var ya = function (a) {
      "google_onload_fired" in a ||
        ((a.google_onload_fired = !1),
        xa(a, function () {
          a.google_onload_fired = !0;
        }));
    },
    L = function (a, b) {
      if (!(1e-4 > Math.random())) {
        var c = Math.random();
        if (c < b) {
          try {
            var e = new Uint16Array(1);
            window.crypto.getRandomValues(e);
            c = e[0] / 65536;
          } catch (d) {
            c = Math.random();
          }
          return a[Math.floor(c * a.length)];
        }
      }
      return null;
    },
    za = function () {
      var a = D.google_unique_id;
      return "number" == typeof a ? a : 0;
    },
    Aa = function (a) {
      var b = a.length;
      if (0 == b) return 0;
      for (var c = 305419896, e = 0; e < b; e++)
        c ^= ((c << 5) + (c >> 2) + a.charCodeAt(e)) & 4294967295;
      return 0 < c ? c : 4294967296 + c;
    };
  var M = !0,
    Ba = {},
    Ea = function (a, b, c, e) {
      var d = Ca,
        f,
        h = M;
      try {
        f = b();
      } catch (g) {
        try {
          var k = na(g);
          b = "";
          g.fileName && (b = g.fileName);
          var p = -1;
          g.lineNumber && (p = g.lineNumber);
          h = d(a, k, b, p, c);
        } catch (l) {
          try {
            var m = na(l);
            a = "";
            l.fileName && (a = l.fileName);
            c = -1;
            l.lineNumber && (c = l.lineNumber);
            Ca("pAR", m, a, c, void 0, void 0);
          } catch (s) {
            Da(
              { context: "mRE", msg: s.toString() + "\n" + (s.stack || "") },
              void 0
            );
          }
        }
        if (!h) throw g;
      } finally {
        if (e)
          try {
            e();
          } catch (x) {}
      }
      return f;
    },
    Ca = function (a, b, c, e, d, f) {
      var h = {};
      if (d)
        try {
          d(h);
        } catch (g) {}
      h.context = a;
      h.msg = b.substring(0, 512);
      c && (h.file = c);
      0 < e && (h.line = e.toString());
      h.url = C.URL.substring(0, 512);
      h.ref = C.referrer.substring(0, 512);
      Fa(h);
      Da(h, f);
      return M;
    },
    Da = function (a, b) {
      try {
        if (Math.random() < (b || 0.01)) {
          var c = "/pagead/gen_204?id=jserror" + Ga(a),
            e =
              "http" +
              ("http:" == D.location.protocol ? "" : "s") +
              "://pagead2.googlesyndication.com" +
              c,
            c = (e = e.substring(0, 2e3));
          D.google_image_requests || (D.google_image_requests = []);
          var d = D.document.createElement("img");
          d.src = c;
          D.google_image_requests.push(d);
        }
      } catch (f) {}
    },
    Fa = function (a) {
      var b = a || {};
      J(Ba, function (a, e) {
        b[e] = D[a];
      });
    },
    Ha = function (a, b) {
      return function () {
        var c = arguments;
        return Ea(
          a,
          function () {
            return b.apply(void 0, c);
          },
          void 0,
          void 0
        );
      };
    },
    N = function (a, b) {
      return Ha(a, b);
    },
    Ga = function (a) {
      var b = "";
      J(a, function (a, e) {
        if (0 === a || a)
          b +=
            "&" +
            e +
            "=" +
            ("function" == typeof encodeURIComponent
              ? encodeURIComponent(a)
              : escape(a));
      });
      return b;
    };
  M = !la;
  Ba = {
    client: "google_ad_client",
    format: "google_ad_format",
    slotname: "google_ad_slot",
    output: "google_ad_output",
    ad_type: "google_ad_type",
    async_oa: "google_async_for_oa_experiment",
    dimpr: "google_always_use_delayed_impressions_experiment",
    peri: "google_top_experiment",
    pse: "google_pstate_expt",
  };
  var Ia = { F: 1, G: 8, H: 16, D: 24 };
  var O = !!window.google_async_iframe_id,
    P = (O && window.parent) || window,
    Ja = /MSIE [2-7]|PlayStation|Gecko\/20090226|Android 2\.|Opera/i,
    Ka = /Android/;
  var Q = null,
    La = function () {
      if (!Q) {
        for (var a = window, b = a, c = 0; a != a.parent; )
          if (((a = a.parent), c++, A(a))) b = a;
          else break;
        Q = b;
      }
      return Q;
    };
  var R = function (a, b, c) {
    c || (c = ma ? "https" : "http");
    return [c, "://", a, b].join("");
  };
  var Ma = function () {},
    Oa = function (a, b, c) {
      switch (typeof b) {
        case "string":
          Na(b, c);
          break;
        case "number":
          c.push(isFinite(b) && !isNaN(b) ? b : "null");
          break;
        case "boolean":
          c.push(b);
          break;
        case "undefined":
          c.push("null");
          break;
        case "object":
          if (null == b) {
            c.push("null");
            break;
          }
          if (b instanceof Array) {
            var e = b.length;
            c.push("[");
            for (var d = "", f = 0; f < e; f++)
              c.push(d), Oa(a, b[f], c), (d = ",");
            c.push("]");
            break;
          }
          c.push("{");
          e = "";
          for (d in b)
            b.hasOwnProperty(d) &&
              ((f = b[d]),
              "function" != typeof f &&
                (c.push(e), Na(d, c), c.push(":"), Oa(a, f, c), (e = ",")));
          c.push("}");
          break;
        case "function":
          break;
        default:
          throw Error("Unknown type: " + typeof b);
      }
    },
    Pa = {
      '"': '\\"',
      "\\": "\\\\",
      "/": "\\/",
      "\b": "\\b",
      "\f": "\\f",
      "\n": "\\n",
      "\r": "\\r",
      "\t": "\\t",
      "\x0B": "\\u000b",
    },
    Qa = /\uffff/.test("\uffff")
      ? /[\\\"\x00-\x1f\x7f-\uffff]/g
      : /[\\\"\x00-\x1f\x7f-\xff]/g,
    Na = function (a, b) {
      b.push('"');
      b.push(
        a.replace(Qa, function (a) {
          if (a in Pa) return Pa[a];
          var b = a.charCodeAt(0),
            d = "\\u";
          16 > b
            ? (d += "000")
            : 256 > b
            ? (d += "00")
            : 4096 > b && (d += "0");
          return (Pa[a] = d + b.toString(16));
        })
      );
      b.push('"');
    };
  var S =
      "google_ad_block google_ad_channel google_ad_client google_ad_format google_ad_height google_ad_host google_ad_host_channel google_ad_host_tier_id google_ad_output google_ad_override google_ad_region google_ad_section google_ad_slot google_ad_type google_ad_unit_key google_ad_unit_key_2 google_ad_width google_adtest google_allow_expandable_ads google_alternate_ad_url google_alternate_color google_analytics_domain_name google_analytics_uacct google_analytics_url_parameters google_available_width google_bid google_captcha_token google_city google_color_bg google_color_border google_color_line google_color_link google_color_text google_color_url google_container_id google_content_recommendation_ui_type google_contents google_country google_cpm google_ctr_threshold google_cust_age google_cust_ch google_cust_criteria google_cust_gender google_cust_id google_cust_interests google_cust_job google_cust_l google_cust_lh google_cust_u_url google_disable_video_autoplay google_ed google_eids google_enable_content_recommendations google_enable_ose google_enable_ose_periscope google_encoding google_floating_ad_position google_font_face google_font_size google_frame_id google_gl google_hints google_image_size google_kw google_kw_type google_lact google_language google_loeid google_max_num_ads google_max_radlink_len google_mtl google_num_radlinks google_num_radlinks_per_unit google_only_ads_with_video google_only_pyv_ads google_only_userchoice_ads google_original_width google_override_format google_page_url google_pgb_reactive google_previous_watch google_previous_searches google_referrer_url google_region google_responsive_formats google_reuse_colors google_rl_dest_url google_rl_filtering google_rl_mode google_rt google_safe google_sc_id google_scs google_source_type google_sui google_skip google_tag_for_child_directed_treatment google_tag_info google_targeting google_tdsma google_tfs google_tl google_ui_features google_ui_version google_video_doc_id google_video_product_type google_video_url_to_fetch google_with_pyv_ads google_yt_pt google_yt_up".split(
        " "
      ),
    Ra = { google_analytics_domain_name: !0, google_analytics_uacct: !0 },
    Sa = function (a) {
      a.google_page_url && (a.google_page_url = String(a.google_page_url));
      var b = [];
      J(a, function (a, e) {
        if (null != a) {
          var d;
          try {
            var f = [];
            Oa(new Ma(), a, f);
            d = f.join("");
          } catch (h) {}
          d && wa(b, e, "=", d, ";");
        }
      });
      return b.join("");
    };
  var T = null;
  var Ta = {
    "120x90": !0,
    "160x90": !0,
    "180x90": !0,
    "200x90": !0,
    "468x15": !0,
    "728x15": !0,
  };
  var Ua = /^([0-9.]+)px$/,
    Va = function (a) {
      return (a = Ua.exec(a)) ? Number(a[1]) : null;
    };
  var U;
  o: {
    var Wa = n.navigator;
    if (Wa) {
      var Xa = Wa.userAgent;
      if (Xa) {
        U = Xa;
        break o;
      }
    }
    U = "";
  }
  var V = function (a) {
    return -1 != U.indexOf(a);
  };
  var Ya = V("Opera") || V("OPR"),
    W = V("Trident") || V("MSIE"),
    Za =
      V("Gecko") &&
      -1 == U.toLowerCase().indexOf("webkit") &&
      !(V("Trident") || V("MSIE")),
    $a = -1 != U.toLowerCase().indexOf("webkit"),
    ab = function () {
      var a = n.document;
      return a ? a.documentMode : void 0;
    },
    bb = (function () {
      var a = "",
        b;
      if (Ya && n.opera)
        return (a = n.opera.version), "function" == aa(a) ? a() : a;
      Za
        ? (b = /rv\:([^\);]+)(\)|;)/)
        : W
        ? (b = /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/)
        : $a && (b = /WebKit\/(\S+)/);
      b && (a = (a = b.exec(U)) ? a[1] : "");
      return W && ((b = ab()), b > parseFloat(a)) ? String(b) : a;
    })(),
    cb = {},
    db = function (a) {
      if (!cb[a]) {
        for (
          var b = 0,
            c = pa(String(bb)).split("."),
            e = pa(String(a)).split("."),
            d = Math.max(c.length, e.length),
            f = 0;
          0 == b && f < d;
          f++
        ) {
          var h = c[f] || "",
            g = e[f] || "",
            k = RegExp("(\\d*)(\\D*)", "g"),
            p = RegExp("(\\d*)(\\D*)", "g");
          do {
            var l = k.exec(h) || ["", "", ""],
              m = p.exec(g) || ["", "", ""];
            if (0 == l[0].length && 0 == m[0].length) break;
            b =
              I(
                0 == l[1].length ? 0 : parseInt(l[1], 10),
                0 == m[1].length ? 0 : parseInt(m[1], 10)
              ) ||
              I(0 == l[2].length, 0 == m[2].length) ||
              I(l[2], m[2]);
          } while (0 == b);
        }
        cb[a] = 0 <= b;
      }
    },
    eb = n.document,
    fb =
      eb && W
        ? ab() || ("CSS1Compat" == eb.compatMode ? parseInt(bb, 10) : 5)
        : void 0;
  var gb;
  if (!(gb = !Za && !W)) {
    var hb;
    if ((hb = W)) hb = W && 9 <= fb;
    gb = hb;
  }
  gb || (Za && db("1.9.1"));
  W && db("9");
  var ib = function (a, b) {
    var c = E;
    if (!c || !a || !b) return "XS";
    var e;
    if (O && !A(P)) {
      for (e = "." + C.domain; 2 < e.split(".").length && !A(P); )
        (C.domain = e = e.substr(e.indexOf(".") + 1)), (P = window.parent);
      A(P) || (P = window);
    }
    e = P;
    for (c = c.parentElement; c; ) {
      try {
        var d = c.style;
      } catch (f) {}
      var h = c.parentElement;
      if (d) {
        var g = Va(d.width),
          k = Va(d.height),
          p = h && 1 == h.childNodes.length;
        if (k && (p || (g && a >= g)) && b < k) return "NS";
        if (g && (p || (k && b >= k))) {
          if (a < g) return "NS";
        } else if (g || k) return "NS";
      }
      if (
        (c = e.getComputedStyle
          ? e.getComputedStyle(c, null)
          : c.currentStyle) &&
        ("absolute" == c.position || "fixed" == c.position)
      )
        return "absolute" == c.position ? "CA" : "CF";
      c = h;
      if (!c)
        try {
          var c = e.frameElement,
            l = e.parent;
          l && l != e && (e = l);
        } catch (m) {
          return "XS";
        }
    }
    return "CS";
  };
  var X = function (a) {
      this.j = a;
      a.google_iframe_oncopy ||
        (a.google_iframe_oncopy = { handlers: {}, upd: q(this.u, this) });
      this.r = a.google_iframe_oncopy;
    },
    jb;
  var Y =
    "var i=this.id,s=window.google_iframe_oncopy,H=s&&s.handlers,h=H&&H[i],w=this.contentWindow,d;try{d=w.document}catch(e){}if(h&&d&&(!d.body||!d.body.firstChild)){if(h.call){setTimeout(h,0)}else if(h.match){try{h=s.upd(h,i)}catch(e){}w.location.replace(h)}}";
  /[\x00&<>"']/.test(Y) &&
    (-1 != Y.indexOf("&") && (Y = Y.replace(qa, "&amp;")),
    -1 != Y.indexOf("<") && (Y = Y.replace(ra, "&lt;")),
    -1 != Y.indexOf(">") && (Y = Y.replace(sa, "&gt;")),
    -1 != Y.indexOf('"') && (Y = Y.replace(ta, "&quot;")),
    -1 != Y.indexOf("'") && (Y = Y.replace(ua, "&#39;")),
    -1 != Y.indexOf("\x00") && (Y = Y.replace(va, "&#0;")));
  jb = Y;
  X.prototype.set = function (a, b) {
    this.r.handlers[a] = b;
    this.j.addEventListener &&
      this.j.addEventListener("load", q(this.s, this, a), !1);
  };
  X.prototype.s = function (a) {
    a = this.j.document.getElementById(a);
    try {
      var b = a.contentWindow.document;
      if (a.onload && b && (!b.body || !b.body.firstChild)) a.onload();
    } catch (c) {}
  };
  X.prototype.u = function (a, b) {
    var c = kb("rx", a),
      e;
    o: {
      if (a && (e = a.match("dt=([^&]+)")) && 2 == e.length) {
        e = e[1];
        break o;
      }
      e = "";
    }
    e = new Date().getTime() - e;
    c = c.replace(/&dtd=(\d+|M)/, "&dtd=" + (1e4 > e ? e + "" : "M"));
    this.set(b, c);
    return c;
  };
  var kb = function (a, b) {
    var c = new RegExp("\\b" + a + "=(\\d+)"),
      e = c.exec(b);
    e && (b = b.replace(c, a + "=" + (+e[1] + 1 || 1)));
    return b;
  };
  var Z,
    $ = function (a) {
      this.k = [];
      this.j = a || window;
      this.i = 0;
      this.l = null;
      this.m = 0;
    },
    lb = function (a, b) {
      this.t = a;
      this.q = b;
    };
  $.prototype.w = function (a, b) {
    0 != this.i || 0 != this.k.length || (b && b != window)
      ? this.p(a, b)
      : ((this.i = 2), this.o(new lb(a, window)));
  };
  $.prototype.p = function (a, b) {
    this.k.push(new lb(a, b || this.j));
    mb(this);
  };
  $.prototype.A = function (a) {
    this.i = 1;
    if (a) {
      var b = N("sjr::timeout", q(this.n, this, !0));
      this.l = this.j.setTimeout(b, a);
    }
  };
  $.prototype.n = function (a) {
    a && ++this.m;
    1 == this.i &&
      (null != this.l && (this.j.clearTimeout(this.l), (this.l = null)),
      (this.i = 0));
    mb(this);
  };
  $.prototype.B = function () {
    return !(!window || !Array);
  };
  $.prototype.C = function () {
    return this.m;
  };
  $.prototype.nq = $.prototype.w;
  $.prototype.nqa = $.prototype.p;
  $.prototype.al = $.prototype.A;
  $.prototype.rl = $.prototype.n;
  $.prototype.sz = $.prototype.B;
  $.prototype.tc = $.prototype.C;
  var mb = function (a) {
    var b = N("sjr::tryrun", q(a.v, a));
    a.j.setTimeout(b, 0);
  };
  $.prototype.v = function () {
    if (0 == this.i && this.k.length) {
      var a = this.k.shift();
      this.i = 2;
      var b = N("sjr::run", q(this.o, this, a));
      a.q.setTimeout(b, 0);
      mb(this);
    }
  };
  $.prototype.o = function (a) {
    this.i = 0;
    a.t();
  };
  var nb = function (a) {
      try {
        return a.sz();
      } catch (b) {
        return !1;
      }
    },
    ob = function (a) {
      return (
        !!a &&
        ("object" == typeof a || "function" == typeof a) &&
        nb(a) &&
        K(a.nq) &&
        K(a.nqa) &&
        K(a.al) &&
        K(a.rl)
      );
    },
    pb = function () {
      if (Z && nb(Z)) return Z;
      var a = La(),
        b = a.google_jobrunner;
      return ob(b) ? (Z = b) : (a.google_jobrunner = Z = new $(a));
    },
    qb = function (a, b) {
      pb().nq(a, b);
    },
    rb = function (a, b) {
      pb().nqa(a, b);
    };
  var sb = O ? 1 == za() : !za(),
    tb = function () {
      var a = z("script"),
        b;
      b = ea("", "pagead2.googlesyndication.com");
      return [
        "<",
        a,
        ' src="',
        R(b, "/pagead/js/r20140909/r20140417/show_ads_impl.js", ""),
        '"></',
        a,
        ">",
      ].join("");
    },
    ub = function (a, b, c, e) {
      return function () {
        var d = !1;
        e && pb().al(3e4);
        var f = a.document.getElementById(b);
        f &&
          !A(f.contentWindow) &&
          3 == a.google_top_js_status &&
          (a.google_top_js_status = 6);
        try {
          if (A(a.document.getElementById(b).contentWindow)) {
            var h = a.document.getElementById(b).contentWindow,
              g = h.document;
            (g.body && g.body.firstChild) ||
              (g.open(), (h.google_async_iframe_close = !0), g.write(c));
          } else {
            var k = a.document.getElementById(b).contentWindow,
              p;
            f = c;
            f = String(f);
            if (f.quote) p = f.quote();
            else {
              h = ['"'];
              for (g = 0; g < f.length; g++) {
                var l = f.charAt(g),
                  m = l.charCodeAt(0),
                  s = g + 1,
                  x;
                if (!(x = G[l])) {
                  var r;
                  if (31 < m && 127 > m) r = l;
                  else {
                    var v = l;
                    if (v in H) r = H[v];
                    else if (v in G) r = H[v] = G[v];
                    else {
                      var t = v,
                        B = v.charCodeAt(0);
                      if (31 < B && 127 > B) t = v;
                      else {
                        if (256 > B) {
                          if (((t = "\\x"), 16 > B || 256 < B)) t += "0";
                        } else (t = "\\u"), 4096 > B && (t += "0");
                        t += B.toString(16).toUpperCase();
                      }
                      r = H[v] = t;
                    }
                  }
                  x = r;
                }
                h[s] = x;
              }
              h.push('"');
              p = h.join("");
            }
            k.location.replace("javascript:" + p);
          }
          d = !0;
        } catch (Bb) {
          (k = La().google_jobrunner), ob(k) && k.rl();
        }
        d &&
          ((d = kb("google_async_rrc", c)), new X(a).set(b, ub(a, b, d, !1)));
      };
    },
    vb = function (a) {
      var b = ["<iframe"];
      J(a, function (a, e) {
        null != a && b.push(" " + e + '="' + a + '"');
      });
      b.push("></iframe>");
      return b.join("");
    },
    wb = function (a, b, c, e) {
      e = e ? '"' : "";
      var d = e + "0" + e;
      a.width = e + b + e;
      a.height = e + c + e;
      a.frameborder = d;
      a.marginwidth = d;
      a.marginheight = d;
      a.vspace = d;
      a.hspace = d;
      a.allowtransparency = e + "true" + e;
      a.scrolling = e + "no" + e;
      a.allowfullscreen = e + "true" + e;
    },
    xb = function () {
      var a;
      if ((a = sb)) {
        if (!T)
          o: {
            var b = [D.top];
            a = [];
            for (var c = 0, e; (e = b[c++]); ) {
              a.push(e);
              try {
                if (e.frames)
                  for (
                    var d = e.frames.length, f = 0;
                    f < d && 1024 > b.length;
                    ++f
                  )
                    b.push(e.frames[f]);
              } catch (h) {}
            }
            for (d = 0; d < a.length; d++)
              try {
                var g = a[d].frames.google_esf;
                if (g) {
                  T = g;
                  break o;
                }
              } catch (k) {}
            T = null;
          }
        a = !T;
      }
      return a
        ? ((g = {}),
          wb(g, 0, 0, !1),
          (g.style = "display:none"),
          (g.id = "google_esf"),
          (g.name = "google_esf"),
          (a = R(
            ea("", "googleads.g.doubleclick.net"),
            "/pagead/html/r20140909/r20140417/zrt_lookup.html"
          )),
          (g.src = a),
          vb(g))
        : "";
    },
    yb = function (a, b, c) {
      var e = b.google_ad_output,
        d = b.google_ad_format;
      d ||
        ("html" != e && null != e) ||
        ((d = b.google_ad_width + "x" + b.google_ad_height), c && (d += "_as"));
      c =
        !b.google_ad_slot ||
        b.google_override_format ||
        (!Ta[b.google_ad_width + "x" + b.google_ad_height] &&
          "aa" == b.google_loader_used);
      d = d && c ? d.toLowerCase() : "";
      b.google_ad_format = d;
      d = [
        b.google_ad_slot,
        b.google_ad_format,
        b.google_ad_type,
        b.google_ad_width,
        b.google_ad_height,
      ];
      c = [];
      for (var e = 0, f = E.parentElement; f && 25 > e; f = f.parentNode, ++e)
        c.push((9 != f.nodeType && f.id) || "");
      (c = c.join()) && d.push(c);
      b.google_ad_unit_key = Aa(d.join(":")).toString();
      d = a.google_adk2_experiment =
        a.google_adk2_experiment || L(["C", "E"], ia) || "N";
      if ("E" == d) {
        d = E;
        c = [];
        for (e = 0; d && 25 > e; ++e) {
          var f = (f = 9 != d.nodeType && d.id) ? "/" + f : "",
            h;
          o: {
            var g = d.parentElement;
            h = d.nodeName.toLowerCase();
            if (g)
              for (var g = g.childNodes, k = 0, p = 0; p < g.length; ++p) {
                var l = g[p];
                if (l.nodeName && l.nodeName.toLowerCase() == h) {
                  if (d == l) {
                    h = "." + k;
                    break o;
                  }
                  ++k;
                }
              }
            h = "";
          }
          c.push((d.nodeName && d.nodeName.toLowerCase()) + f + h);
          d = d.parentElement;
        }
        d = c.join() + ":";
        c = a;
        e = [];
        if (c)
          try {
            for (var m = c.parent, f = 0; m && m != c && 25 > f; ++f) {
              var s = m.frames;
              for (h = 0; h < s.length; ++h)
                if (c == s[h]) {
                  e.push(h);
                  break;
                }
              c = m;
              m = c.parent;
            }
          } catch (x) {}
        b.google_ad_unit_key_2 = Aa(d + e.join()).toString();
      } else "C" == d && (b.google_ad_unit_key_2 = "ctrl");
      var r;
      if ((m = a)) m = A(a.top) ? a.top : null;
      if ((a = m)) {
        a = b.google_reactive_ad_format;
        o: {
          for (r in Ia)
            if (Ia[r] == a) {
              r = !0;
              break o;
            }
          r = !1;
        }
        a = !(r && "" + a);
      }
      r = a ? ib(b.google_ad_width, b.google_ad_height) : "XS";
      b.google_ablation_signals = r;
    },
    zb = Math.floor(1e6 * Math.random()),
    Ab = function (a) {
      for (var b = a.data.split("\n"), c = {}, e = 0; e < b.length; e++) {
        var d = b[e].indexOf("=");
        -1 != d && (c[b[e].substr(0, d)] = b[e].substr(d + 1));
      }
      b = c[3];
      if (
        c[1] == zb &&
        ((window.google_top_js_status = 4),
        a.source == top &&
          0 == b.indexOf(a.origin) &&
          ((window.google_top_values = c), (window.google_top_js_status = 5)),
        window.google_top_js_callbacks)
      ) {
        for (a = 0; a < window.google_top_js_callbacks.length; a++)
          window.google_top_js_callbacks[a]();
        window.google_top_js_callbacks.length = 0;
      }
    };
  Ea("sa::main", function () {
    var a = window;
    ya(a);
    if (!window.google_top_experiment && !window.google_top_js_status) {
      var b = window;
      if (2 !== (b.top == b ? 0 : A(b.top) ? 1 : 2))
        window.google_top_js_status = 0;
      else if (top.postMessage) {
        var c;
        try {
          c = D.top.frames.google_top_static_frame ? !0 : !1;
        } catch (e) {
          c = !1;
        }
        if (c) {
          if (
            ((window.google_top_experiment = L(
              ["jp_c", "jp_zl", "jp_wfpmr", "jp_zlt", "jp_wnt"],
              fa
            )),
            "jp_c" !== window.google_top_experiment)
          ) {
            b = window;
            b.addEventListener
              ? b.addEventListener("message", Ab, !1)
              : b.attachEvent && b.attachEvent("onmessage", Ab);
            window.google_top_js_status = 3;
            b = { 0: "google_loc_request", 1: zb };
            c = [];
            for (var d in b) c.push(d + "=" + b[d]);
            top.postMessage(c.join("\n"), "*");
          }
        } else window.google_top_js_status = 2;
      } else window.google_top_js_status = 1;
    }
    d = window.google_ad_output;
    void 0 !== window.google_always_use_delayed_impressions_experiment ||
      (d && "html" != d) ||
      (window.google_always_use_delayed_impressions_experiment = L(
        ["C", "E"],
        ha
      ));
    (d = !1 === window.google_enable_async) ||
      ((d = navigator.userAgent),
      Ja.test(d)
        ? (d = !1)
        : (void 0 !== window.google_async_for_oa_experiment ||
            !Ka.test(navigator.userAgent) ||
            Ja.test(navigator.userAgent) ||
            (window.google_async_for_oa_experiment = L(["E", "C"], ga)),
          (d = Ka.test(d)
            ? "E" === window.google_async_for_oa_experiment
            : !0)),
      (d =
        !d ||
        window.google_container_id ||
        (window.google_ad_output && "html" != window.google_ad_output)));
    if (d)
      (a.google_loader_used = "sb"),
        (a.google_start_time = u),
        yb(a, a),
        document.write(xb() + tb());
    else {
      sb &&
        ((c = a.google_ad_client),
        (d = navigator),
        ka &&
          a &&
          c &&
          d &&
          ((b = a.document),
          (d = b.createElement("script")),
          c
            ? (c = c.toLowerCase()) &&
              "ca-" != c.substring(0, 3) &&
              (c = "ca-" + c)
            : (c = ""),
          (d.async = !0),
          (d.type = "text/javascript"),
          (d.src = R("www.gstatic.com", "/pub-config/" + c + ".js")),
          (b = b.getElementsByTagName("script")[0]),
          b.parentNode.insertBefore(d, b)));
      a.google_unique_id ? ++a.google_unique_id : (a.google_unique_id = 1);
      b = {};
      d = 0;
      for (c = S.length; d < c; d++) {
        var f = S[d];
        null != a[f] && (b[f] = a[f]);
      }
      b.google_loader_used = "sa";
      d = 0;
      for (c = S.length; d < c; d++) (f = S[d]), Ra[f] || (a[f] = null);
      d = z("script");
      c = {};
      wb(c, b.google_ad_width, b.google_ad_height, !0);
      c.onload = '"' + jb + '"';
      for (var h, f = a.document, g = c.id, k = 0; !g || f.getElementById(g); )
        g = "aswift_" + k++;
      c.id = g;
      c.name = g;
      var k = b.google_ad_width,
        p = b.google_ad_height,
        g = ["<iframe"];
      for (h in c) c.hasOwnProperty(h) && wa(g, h + "=" + c[h]);
      g.push('style="left:0;position:absolute;top:0;"');
      g.push("></iframe>");
      h = c.id;
      k =
        "border:none;height:" +
        p +
        "px;margin:0;padding:0;position:relative;visibility:visible;width:" +
        k +
        "px;background-color:transparent";
      f.write(
        [
          '<ins id="',
          h + "_expand",
          '" style="display:inline-table;',
          k,
          '"><ins id="',
          h + "_anchor",
          '" style="display:block;',
          k,
          '">',
          g.join(" "),
          "</ins></ins>",
        ].join("")
      );
      h = c.id;
      c =
        b.google_override_format ||
        (!Ta[b.google_ad_width + "x" + b.google_ad_height] &&
          "aa" == b.google_loader_used)
          ? L(["c", "e"], ja)
          : null;
      yb(a, b, "e" == c);
      b = Sa(b);
      f = xb();
      g = new Date().getTime();
      k = a.google_top_experiment;
      if ((p = a.google_async_for_oa_experiment))
        a.google_async_for_oa_experiment = void 0;
      var l = a.google_always_use_delayed_impressions_experiment,
        m = a.google_auto_width_experiment,
        s = a.google_responsive_optimization_experiment,
        x = a.google_floating_ads_js_experiment;
      d = [
        "<!doctype html><html><body>",
        f,
        "<",
        d,
        ">",
        b,
        "google_show_ads_impl=true;google_unique_id=",
        a.google_unique_id,
        ';google_async_iframe_id="',
        h,
        '";google_start_time=',
        u,
        ";",
        k ? 'google_top_experiment="' + k + '";' : "",
        p ? 'google_async_for_oa_experiment="' + p + '";' : "",
        l
          ? 'google_always_use_delayed_impressions_experiment="' + l + '";'
          : "",
        c ? 'google_append_as_for_format_override="' + c + '";' : "",
        m ? 'google_auto_width_experiment="' + m + '";' : "",
        s ? 'google_responsive_optimization_experiment="' + s + '";' : "",
        x ? 'google_floating_ads_js_experiment="' + x + '";' : "",
        "google_bpp=",
        g > u ? g - u : 1,
        ";google_async_rrc=0;</",
        d,
        ">",
        tb(),
        "</body></html>",
      ].join("");
      (a.document.getElementById(h) ? qb : rb)(ub(a, h, d, !0));
    }
  });
})();
