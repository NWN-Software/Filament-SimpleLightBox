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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// node_modules/fslightbox/index.js
var require_fslightbox = __commonJS({
  "node_modules/fslightbox/index.js"(exports, module) {
    !function(e, t) {
      if ("object" == typeof exports && "object" == typeof module)
        module.exports = t();
      else if ("function" == typeof define && define.amd)
        define([], t);
      else {
        var n = t();
        for (var o in n)
          ("object" == typeof exports ? exports : e)[o] = n[o];
      }
    }(window, function() {
      return function(e) {
        var t = {};
        function n(o) {
          if (t[o])
            return t[o].exports;
          var i = t[o] = { i: o, l: false, exports: {} };
          return e[o].call(i.exports, i, i.exports, n), i.l = true, i.exports;
        }
        return n.m = e, n.c = t, n.d = function(e2, t2, o) {
          n.o(e2, t2) || Object.defineProperty(e2, t2, { enumerable: true, get: o });
        }, n.r = function(e2) {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e2, "__esModule", { value: true });
        }, n.t = function(e2, t2) {
          if (1 & t2 && (e2 = n(e2)), 8 & t2)
            return e2;
          if (4 & t2 && "object" == typeof e2 && e2 && e2.__esModule)
            return e2;
          var o = /* @__PURE__ */ Object.create(null);
          if (n.r(o), Object.defineProperty(o, "default", { enumerable: true, value: e2 }), 2 & t2 && "string" != typeof e2)
            for (var i in e2)
              n.d(o, i, function(t3) {
                return e2[t3];
              }.bind(null, i));
          return o;
        }, n.n = function(e2) {
          var t2 = e2 && e2.__esModule ? function() {
            return e2.default;
          } : function() {
            return e2;
          };
          return n.d(t2, "a", t2), t2;
        }, n.o = function(e2, t2) {
          return Object.prototype.hasOwnProperty.call(e2, t2);
        }, n.p = "", n(n.s = 0);
      }([function(e, t, n) {
        "use strict";
        n.r(t);
        var o, i = "fslightbox-", r = "".concat(i, "styles"), s = "".concat(i, "cursor-grabbing"), a = "".concat(i, "full-dimension"), c = "".concat(i, "flex-centered"), l = "".concat(i, "open"), u = "".concat(i, "transform-transition"), d = "".concat(i, "absoluted"), f = "".concat(i, "slide-btn"), p = "".concat(f, "-container"), h = "".concat(i, "fade-in"), m = "".concat(i, "fade-out"), g = h + "-strong", v = m + "-strong", b = "".concat(i, "opacity-"), x = "".concat(b, "1"), y = "".concat(i, "source");
        function w(e2) {
          return (w = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e3) {
            return typeof e3;
          } : function(e3) {
            return e3 && "function" == typeof Symbol && e3.constructor === Symbol && e3 !== Symbol.prototype ? "symbol" : typeof e3;
          })(e2);
        }
        function S(e2) {
          var t2 = e2.stageIndexes, n2 = e2.core.stageManager, o2 = e2.props.sources.length - 1;
          n2.getPreviousSlideIndex = function() {
            return 0 === t2.current ? o2 : t2.current - 1;
          }, n2.getNextSlideIndex = function() {
            return t2.current === o2 ? 0 : t2.current + 1;
          }, n2.updateStageIndexes = 0 === o2 ? function() {
          } : 1 === o2 ? function() {
            0 === t2.current ? (t2.next = 1, delete t2.previous) : (t2.previous = 0, delete t2.next);
          } : function() {
            t2.previous = n2.getPreviousSlideIndex(), t2.next = n2.getNextSlideIndex();
          }, n2.i = o2 <= 2 ? function() {
            return true;
          } : function(e3) {
            var n3 = t2.current;
            if (0 === n3 && e3 === o2 || n3 === o2 && 0 === e3)
              return true;
            var i2 = n3 - e3;
            return -1 === i2 || 0 === i2 || 1 === i2;
          };
        }
        "object" === ("undefined" == typeof document ? "undefined" : w(document)) && ((o = document.createElement("style")).className = r, o.appendChild(document.createTextNode(".fslightbox-absoluted{position:absolute;top:0;left:0}.fslightbox-fade-in{animation:fslightbox-fade-in .3s cubic-bezier(0,0,.7,1)}.fslightbox-fade-out{animation:fslightbox-fade-out .3s ease}.fslightbox-fade-in-strong{animation:fslightbox-fade-in-strong .3s cubic-bezier(0,0,.7,1)}.fslightbox-fade-out-strong{animation:fslightbox-fade-out-strong .3s ease}@keyframes fslightbox-fade-in{from{opacity:.65}to{opacity:1}}@keyframes fslightbox-fade-out{from{opacity:.35}to{opacity:0}}@keyframes fslightbox-fade-in-strong{from{opacity:.3}to{opacity:1}}@keyframes fslightbox-fade-out-strong{from{opacity:1}to{opacity:0}}.fslightbox-cursor-grabbing{cursor:grabbing}.fslightbox-full-dimension{width:100%;height:100%}.fslightbox-open{overflow:hidden;height:100%}.fslightbox-flex-centered{display:flex;justify-content:center;align-items:center}.fslightbox-opacity-0{opacity:0!important}.fslightbox-opacity-1{opacity:1!important}.fslightbox-scrollbarfix{padding-right:17px}.fslightbox-transform-transition{transition:transform .3s}.fslightbox-container{font-family:Arial,sans-serif;position:fixed;top:0;left:0;background:linear-gradient(rgba(30,30,30,.9),#000 1810%);touch-action:pinch-zoom;z-index:1000000000;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent}.fslightbox-container *{box-sizing:border-box}.fslightbox-svg-path{transition:fill .15s ease;fill:#ddd}.fslightbox-nav{height:45px;width:100%;position:absolute;top:0;left:0}.fslightbox-slide-number-container{display:flex;justify-content:center;align-items:center;position:relative;height:100%;font-size:15px;color:#d7d7d7;z-index:0;max-width:55px;text-align:left}.fslightbox-slide-number-container .fslightbox-flex-centered{height:100%}.fslightbox-slash{display:block;margin:0 5px;width:1px;height:12px;transform:rotate(15deg);background:#fff}.fslightbox-toolbar{position:absolute;z-index:3;right:0;top:0;height:100%;display:flex;background:rgba(35,35,35,.65)}.fslightbox-toolbar-button{height:100%;width:45px;cursor:pointer}.fslightbox-toolbar-button:hover .fslightbox-svg-path{fill:#fff}.fslightbox-slide-btn-container{display:flex;align-items:center;padding:12px 12px 12px 6px;position:absolute;top:50%;cursor:pointer;z-index:3;transform:translateY(-50%)}@media (min-width:476px){.fslightbox-slide-btn-container{padding:22px 22px 22px 6px}}@media (min-width:768px){.fslightbox-slide-btn-container{padding:30px 30px 30px 6px}}.fslightbox-slide-btn-container:hover .fslightbox-svg-path{fill:#f1f1f1}.fslightbox-slide-btn{padding:9px;font-size:26px;background:rgba(35,35,35,.65)}@media (min-width:768px){.fslightbox-slide-btn{padding:10px}}@media (min-width:1600px){.fslightbox-slide-btn{padding:11px}}.fslightbox-slide-btn-container-previous{left:0}@media (max-width:475.99px){.fslightbox-slide-btn-container-previous{padding-left:3px}}.fslightbox-slide-btn-container-next{right:0;padding-left:12px;padding-right:3px}@media (min-width:476px){.fslightbox-slide-btn-container-next{padding-left:22px}}@media (min-width:768px){.fslightbox-slide-btn-container-next{padding-left:30px}}@media (min-width:476px){.fslightbox-slide-btn-container-next{padding-right:6px}}.fslightbox-down-event-detector{position:absolute;z-index:1}.fslightbox-slide-swiping-hoverer{z-index:4}.fslightbox-invalid-file-wrapper{font-size:22px;color:#eaebeb;margin:auto}.fslightbox-video{object-fit:cover}.fslightbox-youtube-iframe{border:0}.fslightboxl{display:block;margin:auto;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:67px;height:67px}.fslightboxl div{box-sizing:border-box;display:block;position:absolute;width:54px;height:54px;margin:6px;border:5px solid;border-color:#999 transparent transparent transparent;border-radius:50%;animation:fslightboxl 1.2s cubic-bezier(.5,0,.5,1) infinite}.fslightboxl div:nth-child(1){animation-delay:-.45s}.fslightboxl div:nth-child(2){animation-delay:-.3s}.fslightboxl div:nth-child(3){animation-delay:-.15s}@keyframes fslightboxl{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}.fslightbox-source{position:relative;z-index:2;opacity:0}")), document.head.appendChild(o));
        function L(e2) {
          var t2, n2 = e2.props, o2 = 0, i2 = {};
          this.getSourceTypeFromLocalStorageByUrl = function(e3) {
            return t2[e3] ? t2[e3] : r2(e3);
          }, this.handleReceivedSourceTypeForUrl = function(e3, n3) {
            if (false === i2[n3] && (o2--, "invalid" !== e3 ? i2[n3] = e3 : delete i2[n3], 0 === o2)) {
              !function(e4, t3) {
                for (var n4 in t3)
                  e4[n4] = t3[n4];
              }(t2, i2);
              try {
                localStorage.setItem("fslightbox-types", JSON.stringify(t2));
              } catch (e4) {
              }
            }
          };
          var r2 = function(e3) {
            o2++, i2[e3] = false;
          };
          if (n2.disableLocalStorage)
            this.getSourceTypeFromLocalStorageByUrl = function() {
            }, this.handleReceivedSourceTypeForUrl = function() {
            };
          else {
            try {
              t2 = JSON.parse(localStorage.getItem("fslightbox-types"));
            } catch (e3) {
            }
            t2 || (t2 = {}, this.getSourceTypeFromLocalStorageByUrl = r2);
          }
        }
        function A(e2, t2, n2, o2) {
          var i2 = e2.data, r2 = e2.elements.sources, s2 = n2 / o2, a2 = 0;
          this.adjustSize = function() {
            if ((a2 = i2.maxSourceWidth / s2) < i2.maxSourceHeight)
              return n2 < i2.maxSourceWidth && (a2 = o2), c2();
            a2 = o2 > i2.maxSourceHeight ? i2.maxSourceHeight : o2, c2();
          };
          var c2 = function() {
            r2[t2].style.width = a2 * s2 + "px", r2[t2].style.height = a2 + "px";
          };
        }
        function C(e2, t2) {
          var n2 = this, o2 = e2.collections.sourceSizers, i2 = e2.elements, r2 = i2.sourceAnimationWrappers, s2 = i2.sources, a2 = e2.isl, c2 = e2.resolve;
          function l2(e3, n3) {
            o2[t2] = c2(A, [t2, e3, n3]), o2[t2].adjustSize();
          }
          this.runActions = function(e3, o3) {
            a2[t2] = true, s2[t2].classList.add(x), r2[t2].classList.add(g), r2[t2].removeChild(r2[t2].firstChild), l2(e3, o3), n2.runActions = l2;
          };
        }
        function E(e2, t2) {
          var n2, o2 = this, i2 = e2.elements.sources, r2 = e2.props, s2 = (0, e2.resolve)(C, [t2]);
          this.handleImageLoad = function(e3) {
            var t3 = e3.target, n3 = t3.naturalWidth, o3 = t3.naturalHeight;
            s2.runActions(n3, o3);
          }, this.handleVideoLoad = function(e3) {
            var t3 = e3.target, o3 = t3.videoWidth, i3 = t3.videoHeight;
            n2 = true, s2.runActions(o3, i3);
          }, this.handleNotMetaDatedVideoLoad = function() {
            n2 || o2.handleYoutubeLoad();
          }, this.handleYoutubeLoad = function() {
            var e3 = 1920, t3 = 1080;
            r2.maxYoutubeDimensions && (e3 = r2.maxYoutubeDimensions.width, t3 = r2.maxYoutubeDimensions.height), s2.runActions(e3, t3);
          }, this.handleCustomLoad = function() {
            var e3 = i2[t2], n3 = e3.offsetWidth, r3 = e3.offsetHeight;
            n3 && r3 ? s2.runActions(n3, r3) : setTimeout(o2.handleCustomLoad);
          };
        }
        function F(e2, t2, n2) {
          var o2 = e2.elements.sources, i2 = e2.props.customClasses, r2 = i2[t2] ? i2[t2] : "";
          o2[t2].className = n2 + " " + r2;
        }
        function I(e2, t2) {
          var n2 = e2.elements.sources, o2 = e2.props.customAttributes;
          for (var i2 in o2[t2])
            n2[t2].setAttribute(i2, o2[t2][i2]);
        }
        function T(e2, t2) {
          var n2 = e2.collections.sourceLoadHandlers, o2 = e2.elements, i2 = o2.sources, r2 = o2.sourceAnimationWrappers, s2 = e2.props.sources;
          i2[t2] = document.createElement("img"), F(e2, t2, y), i2[t2].src = s2[t2], i2[t2].onload = n2[t2].handleImageLoad, I(e2, t2), r2[t2].appendChild(i2[t2]);
        }
        function N(e2, t2) {
          var n2 = e2.collections.sourceLoadHandlers, o2 = e2.elements, i2 = o2.sources, r2 = o2.sourceAnimationWrappers, s2 = e2.props, a2 = s2.sources, c2 = s2.videosPosters;
          i2[t2] = document.createElement("video"), F(e2, t2, y), i2[t2].src = a2[t2], i2[t2].onloadedmetadata = function(e3) {
            n2[t2].handleVideoLoad(e3);
          }, i2[t2].controls = true, I(e2, t2), c2[t2] && (i2[t2].poster = c2[t2]);
          var l2 = document.createElement("source");
          l2.src = a2[t2], i2[t2].appendChild(l2), setTimeout(n2[t2].handleNotMetaDatedVideoLoad, 3e3), r2[t2].appendChild(i2[t2]);
        }
        function z(e2, t2) {
          var n2 = e2.collections.sourceLoadHandlers, o2 = e2.elements, r2 = o2.sources, s2 = o2.sourceAnimationWrappers, a2 = e2.props.sources;
          r2[t2] = document.createElement("iframe"), F(e2, t2, "".concat(y, " ").concat(i, "youtube-iframe"));
          var c2 = a2[t2], l2 = c2.split("?")[1];
          r2[t2].src = "https://www.youtube.com/embed/".concat(c2.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/)[2], "?").concat(l2 || ""), r2[t2].allowFullscreen = true, I(e2, t2), s2[t2].appendChild(r2[t2]), n2[t2].handleYoutubeLoad();
        }
        function P(e2, t2) {
          var n2 = e2.collections.sourceLoadHandlers, o2 = e2.elements, i2 = o2.sources, r2 = o2.sourceAnimationWrappers, s2 = e2.props.sources;
          i2[t2] = s2[t2], F(e2, t2, "".concat(i2[t2].className, " ").concat(y)), r2[t2].appendChild(i2[t2]), n2[t2].handleCustomLoad();
        }
        function k(e2, t2) {
          var n2 = e2.elements, o2 = n2.sources, r2 = n2.sourceAnimationWrappers;
          e2.props.sources;
          o2[t2] = document.createElement("div"), o2[t2].className = "".concat(i, "invalid-file-wrapper ").concat(c), o2[t2].innerHTML = "Invalid source", r2[t2].classList.add(g), r2[t2].removeChild(r2[t2].firstChild), r2[t2].appendChild(o2[t2]);
        }
        function H(e2) {
          var t2 = e2.collections, n2 = t2.sourceLoadHandlers, o2 = t2.sourcesRenderFunctions, i2 = e2.core.sourceDisplayFacade, r2 = e2.resolve;
          this.runActionsForSourceTypeAndIndex = function(t3, s2) {
            var a2;
            switch ("invalid" !== t3 && (n2[s2] = r2(E, [s2])), t3) {
              case "image":
                a2 = T;
                break;
              case "video":
                a2 = N;
                break;
              case "youtube":
                a2 = z;
                break;
              case "custom":
                a2 = P;
                break;
              default:
                a2 = k;
            }
            o2[s2] = function() {
              return a2(e2, s2);
            }, i2.displaySourcesWhichShouldBeDisplayed();
          };
        }
        function W() {
          var e2, t2, n2, o2 = { isUrlYoutubeOne: function(e3) {
            var t3 = document.createElement("a");
            return t3.href = e3, "www.youtube.com" === t3.hostname || "youtu.be" === t3.hostname;
          }, getTypeFromResponseContentType: function(e3) {
            return e3.slice(0, e3.indexOf("/"));
          } };
          function i2() {
            if (4 !== n2.readyState) {
              if (2 === n2.readyState) {
                var e3;
                switch (o2.getTypeFromResponseContentType(n2.getResponseHeader("content-type"))) {
                  case "image":
                    e3 = "image";
                    break;
                  case "video":
                    e3 = "video";
                    break;
                  default:
                    e3 = "invalid";
                }
                n2.onreadystatechange = null, n2.abort(), t2(e3);
              }
            } else
              t2("invalid");
          }
          this.setUrlToCheck = function(t3) {
            e2 = t3;
          }, this.getSourceType = function(r2) {
            if (o2.isUrlYoutubeOne(e2))
              return r2("youtube");
            t2 = r2, (n2 = new XMLHttpRequest()).onreadystatechange = i2, n2.open("GET", e2, true), n2.send();
          };
        }
        function R(e2, t2, n2) {
          var o2 = e2.props, i2 = o2.types, r2 = o2.type, s2 = o2.sources, a2 = e2.resolve;
          this.getTypeSetByClientForIndex = function(e3) {
            var t3;
            return i2 && i2[e3] ? t3 = i2[e3] : r2 && (t3 = r2), t3;
          }, this.retrieveTypeWithXhrForIndex = function(e3) {
            var o3 = a2(W);
            o3.setUrlToCheck(s2[e3]), o3.getSourceType(function(o4) {
              t2.handleReceivedSourceTypeForUrl(o4, s2[e3]), n2.runActionsForSourceTypeAndIndex(o4, e3);
            });
          };
        }
        function D(e2, t2) {
          var n2 = e2.core.stageManager, o2 = e2.elements, i2 = o2.smw, r2 = o2.sourceWrappersContainer, s2 = e2.props, l2 = 0, f2 = document.createElement("div");
          function p2(e3) {
            f2.style.transform = "translateX(".concat(e3 + l2, "px)"), l2 = 0;
          }
          function h2() {
            return (1 + s2.slideDistance) * innerWidth;
          }
          f2.className = "".concat(d, " ").concat(a, " ").concat(c), f2.s = function() {
            f2.style.display = "flex";
          }, f2.h = function() {
            f2.style.display = "none";
          }, f2.a = function() {
            f2.classList.add(u);
          }, f2.d = function() {
            f2.classList.remove(u);
          }, f2.n = function() {
            f2.style.removeProperty("transform");
          }, f2.v = function(e3) {
            return l2 = e3, f2;
          }, f2.ne = function() {
            p2(-h2());
          }, f2.z = function() {
            p2(0);
          }, f2.p = function() {
            p2(h2());
          }, n2.i(t2) || f2.h(), i2[t2] = f2, r2.appendChild(f2), function(e3, t3) {
            var n3 = e3.elements, o3 = n3.smw, i3 = n3.sourceAnimationWrappers, r3 = document.createElement("div"), s3 = document.createElement("div");
            s3.className = "fslightboxl";
            for (var a2 = 0; a2 < 3; a2++) {
              var c2 = document.createElement("div");
              s3.appendChild(c2);
            }
            r3.appendChild(s3), o3[t3].appendChild(r3), i3[t3] = r3;
          }(e2, t2);
        }
        function O(e2, t2, n2, o2) {
          var r2 = document.createElementNS("http://www.w3.org/2000/svg", "svg");
          r2.setAttributeNS(null, "width", t2), r2.setAttributeNS(null, "height", t2), r2.setAttributeNS(null, "viewBox", n2);
          var s2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
          return s2.setAttributeNS(null, "class", "".concat(i, "svg-path")), s2.setAttributeNS(null, "d", o2), r2.appendChild(s2), e2.appendChild(r2), r2;
        }
        function M(e2, t2) {
          var n2 = document.createElement("div");
          return n2.className = "".concat(i, "toolbar-button ").concat(c), n2.title = t2, e2.appendChild(n2), n2;
        }
        function j(e2, t2) {
          var n2 = document.createElement("div");
          n2.className = "".concat(i, "toolbar"), t2.appendChild(n2), function(e3, t3) {
            var n3 = e3.componentsServices, o2 = e3.data, i2 = e3.fs, r2 = "M4.5 11H3v4h4v-1.5H4.5V11zM3 7h1.5V4.5H7V3H3v4zm10.5 6.5H11V15h4v-4h-1.5v2.5zM11 3v1.5h2.5V7H15V3h-4z", s2 = M(t3);
            s2.title = "Enter fullscreen";
            var a2 = O(s2, "20px", "0 0 18 18", r2);
            n3.ofs = function() {
              o2.ifs = true, s2.title = "Exit fullscreen", a2.setAttributeNS(null, "width", "24px"), a2.setAttributeNS(null, "height", "24px"), a2.setAttributeNS(null, "viewBox", "0 0 950 1024"), a2.firstChild.setAttributeNS(null, "d", "M682 342h128v84h-212v-212h84v128zM598 810v-212h212v84h-128v128h-84zM342 342v-128h84v212h-212v-84h128zM214 682v-84h212v212h-84v-128h-128z");
            }, n3.xfs = function() {
              o2.ifs = false, s2.title = "Enter fullscreen", a2.setAttributeNS(null, "width", "20px"), a2.setAttributeNS(null, "height", "20px"), a2.setAttributeNS(null, "viewBox", "0 0 18 18"), a2.firstChild.setAttributeNS(null, "d", r2);
            }, s2.onclick = i2.t;
          }(e2, n2), function(e3, t3) {
            var n3 = M(t3, "Close");
            n3.onclick = e3.core.lightboxCloser.closeLightbox, O(n3, "20px", "0 0 24 24", "M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z");
          }(e2, n2);
        }
        function X(e2) {
          var t2 = e2.props.sources, n2 = e2.elements.container, o2 = document.createElement("div");
          o2.className = "".concat(i, "nav"), n2.appendChild(o2), j(e2, o2), t2.length > 1 && function(e3, t3) {
            var n3 = e3.componentsServices, o3 = e3.props.sources, r2 = (e3.stageIndexes, document.createElement("div"));
            r2.className = "".concat(i, "slide-number-container");
            var s2 = document.createElement("div");
            s2.className = c;
            var a2 = document.createElement("span");
            n3.setSlideNumber = function(e4) {
              return a2.innerHTML = e4;
            };
            var l2 = document.createElement("span");
            l2.className = "".concat(i, "slash");
            var u2 = document.createElement("div");
            u2.innerHTML = o3.length, r2.appendChild(s2), s2.appendChild(a2), s2.appendChild(l2), s2.appendChild(u2), t3.appendChild(r2), setTimeout(function() {
              s2.offsetWidth > 55 && (r2.style.justifyContent = "flex-start");
            });
          }(e2, o2);
        }
        function B(e2, t2, n2, o2) {
          var i2 = e2.elements.container, r2 = n2.charAt(0).toUpperCase() + n2.slice(1), s2 = document.createElement("div");
          s2.className = "".concat(p, " ").concat(p, "-").concat(n2), s2.title = "".concat(r2, " slide"), s2.onclick = t2, function(e3, t3) {
            var n3 = document.createElement("div");
            n3.className = "".concat(f, " ").concat(c), O(n3, "20px", "0 0 20 20", t3), e3.appendChild(n3);
          }(s2, o2), i2.appendChild(s2);
        }
        function U(e2) {
          var t2 = e2.core, n2 = t2.lightboxCloser, o2 = t2.slideChangeFacade, i2 = e2.fs;
          this.listener = function(e3) {
            switch (e3.key) {
              case "Escape":
                n2.closeLightbox();
                break;
              case "ArrowLeft":
                o2.changeToPrevious();
                break;
              case "ArrowRight":
                o2.changeToNext();
                break;
              case "F11":
                e3.preventDefault(), i2.t();
            }
          };
        }
        function q(e2) {
          var t2 = e2.elements, n2 = e2.sourcePointerProps, o2 = e2.stageIndexes;
          function i2(e3, o3) {
            t2.smw[e3].v(n2.swipedX)[o3]();
          }
          this.runActionsForEvent = function(e3) {
            var r2, a2, c2;
            t2.container.contains(t2.slideSwipingHoverer) || t2.container.appendChild(t2.slideSwipingHoverer), r2 = t2.container, a2 = s, (c2 = r2.classList).contains(a2) || c2.add(a2), n2.swipedX = e3.screenX - n2.downScreenX;
            var l2 = o2.previous, u2 = o2.next;
            i2(o2.current, "z"), void 0 !== l2 && n2.swipedX > 0 ? i2(l2, "ne") : void 0 !== u2 && n2.swipedX < 0 && i2(u2, "p");
          };
        }
        function V(e2) {
          var t2 = e2.props.sources, n2 = e2.resolve, o2 = e2.sourcePointerProps, i2 = n2(q);
          1 === t2.length ? this.listener = function() {
            o2.swipedX = 1;
          } : this.listener = function(e3) {
            o2.isPointering && i2.runActionsForEvent(e3);
          };
        }
        function _(e2) {
          var t2 = e2.core.slideIndexChanger, n2 = e2.elements.smw, o2 = e2.stageIndexes, i2 = e2.sws;
          function r2(e3) {
            var t3 = n2[o2.current];
            t3.a(), t3[e3]();
          }
          function s2(e3, t3) {
            void 0 !== e3 && (n2[e3].s(), n2[e3][t3]());
          }
          this.runPositiveSwipedXActions = function() {
            var e3 = o2.previous;
            if (void 0 === e3)
              r2("z");
            else {
              r2("p");
              var n3 = o2.next;
              t2.changeTo(e3);
              var a2 = o2.previous;
              i2.d(a2), i2.b(n3), r2("z"), s2(a2, "ne");
            }
          }, this.runNegativeSwipedXActions = function() {
            var e3 = o2.next;
            if (void 0 === e3)
              r2("z");
            else {
              r2("ne");
              var n3 = o2.previous;
              t2.changeTo(e3);
              var a2 = o2.next;
              i2.d(a2), i2.b(n3), r2("z"), s2(a2, "p");
            }
          };
        }
        function Y(e2, t2) {
          e2.contains(t2) && e2.removeChild(t2);
        }
        function J(e2) {
          var t2 = e2.core.lightboxCloser, n2 = e2.elements, o2 = e2.resolve, i2 = e2.sourcePointerProps, r2 = o2(_);
          this.runNoSwipeActions = function() {
            Y(n2.container, n2.slideSwipingHoverer), i2.isSourceDownEventTarget || t2.closeLightbox(), i2.isPointering = false;
          }, this.runActions = function() {
            i2.swipedX > 0 ? r2.runPositiveSwipedXActions() : r2.runNegativeSwipedXActions(), Y(n2.container, n2.slideSwipingHoverer), n2.container.classList.remove(s), i2.isPointering = false;
          };
        }
        function G(e2) {
          var t2 = e2.resolve, n2 = e2.sourcePointerProps, o2 = t2(J);
          this.listener = function() {
            n2.isPointering && (n2.swipedX ? o2.runActions() : o2.runNoSwipeActions());
          };
        }
        function $(e2) {
          var t2 = this, n2 = e2.core, o2 = n2.eventsDispatcher, i2 = n2.globalEventsController, r2 = n2.scrollbarRecompensor, s2 = e2.data, a2 = e2.elements, c2 = e2.fs, u2 = e2.props, d2 = e2.sourcePointerProps;
          this.isLightboxFadingOut = false, this.runActions = function() {
            t2.isLightboxFadingOut = true, a2.container.classList.add(v), i2.removeListeners(), u2.exitFullscreenOnClose && s2.ifs && c2.x(), setTimeout(function() {
              t2.isLightboxFadingOut = false, d2.isPointering = false, a2.container.classList.remove(v), document.documentElement.classList.remove(l), r2.removeRecompense(), document.body.removeChild(a2.container), o2.dispatch("onClose");
            }, 270);
          };
        }
        function K(e2, t2) {
          var n2 = e2.classList;
          n2.contains(t2) && n2.remove(t2);
        }
        function Q(e2) {
          var t2, n2, o2;
          n2 = (t2 = e2).core.eventsDispatcher, o2 = t2.props, n2.dispatch = function(e3) {
            o2[e3] && o2[e3]();
          }, function(e3) {
            var t3 = e3.componentsServices, n3 = e3.data, o3 = e3.fs, i2 = ["fullscreenchange", "webkitfullscreenchange", "mozfullscreenchange", "MSFullscreenChange"];
            function r2(e4) {
              for (var t4 = 0; t4 < i2.length; t4++)
                document[e4](i2[t4], s2);
            }
            function s2() {
              document.fullscreenElement || document.webkitIsFullScreen || document.mozFullScreen || document.msFullscreenElement ? t3.ofs() : t3.xfs();
            }
            o3.o = function() {
              t3.ofs();
              var e4 = document.documentElement;
              e4.requestFullscreen ? e4.requestFullscreen() : e4.mozRequestFullScreen ? e4.mozRequestFullScreen() : e4.webkitRequestFullscreen ? e4.webkitRequestFullscreen() : e4.msRequestFullscreen && e4.msRequestFullscreen();
            }, o3.x = function() {
              t3.xfs(), document.exitFullscreen ? document.exitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitExitFullscreen ? document.webkitExitFullscreen() : document.msExitFullscreen && document.msExitFullscreen();
            }, o3.t = function() {
              n3.ifs ? o3.x() : o3.o();
            }, o3.l = function() {
              r2("addEventListener");
            }, o3.q = function() {
              r2("removeEventListener");
            };
          }(e2), function(e3) {
            var t3 = e3.core, n3 = t3.globalEventsController, o3 = t3.windowResizeActioner, i2 = e3.fs, r2 = e3.resolve, s2 = r2(U), a2 = r2(V), c2 = r2(G);
            n3.attachListeners = function() {
              document.addEventListener("pointermove", a2.listener), document.addEventListener("pointerup", c2.listener), addEventListener("resize", o3.runActions), document.addEventListener("keydown", s2.listener), i2.l();
            }, n3.removeListeners = function() {
              document.removeEventListener("pointermove", a2.listener), document.removeEventListener("pointerup", c2.listener), removeEventListener("resize", o3.runActions), document.removeEventListener("keydown", s2.listener), i2.q();
            };
          }(e2), function(e3) {
            var t3 = e3.core.lightboxCloser, n3 = (0, e3.resolve)($);
            t3.closeLightbox = function() {
              n3.isLightboxFadingOut || n3.runActions();
            };
          }(e2), function(e3) {
            var t3 = e3.data, n3 = e3.core.scrollbarRecompensor;
            function o3() {
              document.body.offsetHeight > innerHeight && (document.body.style.marginRight = t3.scrollbarWidth + "px");
            }
            n3.addRecompense = function() {
              "complete" === document.readyState ? o3() : addEventListener("load", function() {
                o3(), n3.addRecompense = o3;
              });
            }, n3.removeRecompense = function() {
              document.body.style.removeProperty("margin-right");
            };
          }(e2), function(e3) {
            var t3 = e3.core, n3 = t3.slideChangeFacade, o3 = t3.slideIndexChanger, i2 = t3.stageManager;
            e3.props.sources.length > 1 ? (n3.changeToPrevious = function() {
              o3.jumpTo(i2.getPreviousSlideIndex());
            }, n3.changeToNext = function() {
              o3.jumpTo(i2.getNextSlideIndex());
            }) : (n3.changeToPrevious = function() {
            }, n3.changeToNext = function() {
            });
          }(e2), function(e3) {
            var t3 = e3.componentsServices, n3 = e3.core, o3 = n3.slideIndexChanger, i2 = n3.sourceDisplayFacade, r2 = n3.stageManager, s2 = e3.elements, a2 = s2.smw, c2 = s2.sourceAnimationWrappers, l2 = e3.isl, u2 = e3.stageIndexes, d2 = e3.sws;
            o3.changeTo = function(e4) {
              u2.current = e4, r2.updateStageIndexes(), t3.setSlideNumber(e4 + 1), i2.displaySourcesWhichShouldBeDisplayed();
            }, o3.jumpTo = function(e4) {
              var t4 = u2.previous, n4 = u2.current, i3 = u2.next, s3 = l2[n4], f2 = l2[e4];
              o3.changeTo(e4);
              for (var p2 = 0; p2 < a2.length; p2++)
                a2[p2].d();
              d2.d(n4), d2.c(), requestAnimationFrame(function() {
                requestAnimationFrame(function() {
                  var e5 = u2.previous, o4 = u2.next;
                  function p3() {
                    r2.i(n4) ? n4 === u2.previous ? a2[n4].ne() : n4 === u2.next && a2[n4].p() : (a2[n4].h(), a2[n4].n());
                  }
                  s3 && c2[n4].classList.add(m), f2 && c2[u2.current].classList.add(h), d2.a(), void 0 !== e5 && e5 !== n4 && a2[e5].ne(), a2[u2.current].n(), void 0 !== o4 && o4 !== n4 && a2[o4].p(), d2.b(t4), d2.b(i3), l2[n4] ? setTimeout(p3, 260) : p3();
                });
              });
            };
          }(e2), function(e3) {
            var t3 = e3.core.sourcesPointerDown, n3 = e3.elements, o3 = n3.smw, i2 = n3.sources, r2 = e3.sourcePointerProps, s2 = e3.stageIndexes;
            t3.listener = function(e4) {
              "VIDEO" !== e4.target.tagName && e4.preventDefault(), r2.isPointering = true, r2.downScreenX = e4.screenX, r2.swipedX = 0;
              var t4 = i2[s2.current];
              t4 && t4.contains(e4.target) ? r2.isSourceDownEventTarget = true : r2.isSourceDownEventTarget = false;
              for (var n4 = 0; n4 < o3.length; n4++)
                o3[n4].d();
            };
          }(e2), function(e3) {
            var t3 = e3.collections.sourcesRenderFunctions, n3 = e3.core.sourceDisplayFacade, o3 = e3.props, i2 = e3.stageIndexes;
            function r2(e4) {
              t3[e4] && (t3[e4](), delete t3[e4]);
            }
            n3.displaySourcesWhichShouldBeDisplayed = function() {
              if (o3.loadOnlyCurrentSource)
                r2(i2.current);
              else
                for (var e4 in i2)
                  r2(i2[e4]);
            };
          }(e2), function(e3) {
            var t3 = e3.core.stageManager, n3 = e3.elements, o3 = n3.smw, i2 = n3.sourceAnimationWrappers, r2 = e3.isl, s2 = e3.stageIndexes, a2 = e3.sws;
            a2.a = function() {
              for (var e4 in s2)
                o3[s2[e4]].s();
            }, a2.b = function(e4) {
              void 0 === e4 || t3.i(e4) || (o3[e4].h(), o3[e4].n());
            }, a2.c = function() {
              for (var e4 in s2)
                a2.d(s2[e4]);
            }, a2.d = function(e4) {
              if (r2[e4]) {
                var t4 = i2[e4];
                K(t4, g), K(t4, h), K(t4, m);
              }
            };
          }(e2), function(e3) {
            var t3 = e3.collections.sourceSizers, n3 = e3.core.windowResizeActioner, o3 = e3.data, i2 = e3.elements.smw, r2 = e3.stageIndexes;
            n3.runActions = function() {
              innerWidth < 992 ? o3.maxSourceWidth = innerWidth : o3.maxSourceWidth = 0.9 * innerWidth, o3.maxSourceHeight = 0.9 * innerHeight;
              for (var e4 = 0; e4 < i2.length; e4++)
                i2[e4].d(), t3[e4] && t3[e4].adjustSize();
              var n4 = r2.previous, s2 = r2.next;
              void 0 !== n4 && i2[n4].ne(), void 0 !== s2 && i2[s2].p();
            };
          }(e2);
        }
        function Z(e2) {
          var t2 = e2.componentsServices, n2 = e2.core, o2 = n2.eventsDispatcher, r2 = n2.globalEventsController, s2 = n2.scrollbarRecompensor, c2 = n2.sourceDisplayFacade, u2 = n2.stageManager, f2 = n2.windowResizeActioner, p2 = e2.data, h2 = e2.elements, m2 = (e2.props, e2.stageIndexes), v2 = e2.sws;
          function b2() {
            var t3, n3;
            p2.i = true, p2.scrollbarWidth = function() {
              var e3 = document.createElement("div"), t4 = e3.style, n4 = document.createElement("div");
              t4.visibility = "hidden", t4.width = "100px", t4.msOverflowStyle = "scrollbar", t4.overflow = "scroll", n4.style.width = "100%", document.body.appendChild(e3);
              var o3 = e3.offsetWidth;
              e3.appendChild(n4);
              var i2 = n4.offsetWidth;
              return document.body.removeChild(e3), o3 - i2;
            }(), Q(e2), h2.container = document.createElement("div"), h2.container.className = "".concat(i, "container ").concat(a, " ").concat(g), function(e3) {
              var t4 = e3.elements;
              t4.slideSwipingHoverer = document.createElement("div"), t4.slideSwipingHoverer.className = "".concat(i, "slide-swiping-hoverer ").concat(a, " ").concat(d);
            }(e2), X(e2), function(e3) {
              var t4 = e3.core.sourcesPointerDown, n4 = e3.elements, o3 = e3.props.sources, i2 = document.createElement("div");
              i2.className = "".concat(d, " ").concat(a), n4.container.appendChild(i2), i2.addEventListener("pointerdown", t4.listener), n4.sourceWrappersContainer = i2;
              for (var r3 = 0; r3 < o3.length; r3++)
                D(e3, r3);
            }(e2), e2.props.sources.length > 1 && (n3 = (t3 = e2).core.slideChangeFacade, B(t3, n3.changeToPrevious, "previous", "M18.271,9.212H3.615l4.184-4.184c0.306-0.306,0.306-0.801,0-1.107c-0.306-0.306-0.801-0.306-1.107,0L1.21,9.403C1.194,9.417,1.174,9.421,1.158,9.437c-0.181,0.181-0.242,0.425-0.209,0.66c0.005,0.038,0.012,0.071,0.022,0.109c0.028,0.098,0.075,0.188,0.142,0.271c0.021,0.026,0.021,0.061,0.045,0.085c0.015,0.016,0.034,0.02,0.05,0.033l5.484,5.483c0.306,0.307,0.801,0.307,1.107,0c0.306-0.305,0.306-0.801,0-1.105l-4.184-4.185h14.656c0.436,0,0.788-0.353,0.788-0.788S18.707,9.212,18.271,9.212z"), B(t3, n3.changeToNext, "next", "M1.729,9.212h14.656l-4.184-4.184c-0.307-0.306-0.307-0.801,0-1.107c0.305-0.306,0.801-0.306,1.106,0l5.481,5.482c0.018,0.014,0.037,0.019,0.053,0.034c0.181,0.181,0.242,0.425,0.209,0.66c-0.004,0.038-0.012,0.071-0.021,0.109c-0.028,0.098-0.075,0.188-0.143,0.271c-0.021,0.026-0.021,0.061-0.045,0.085c-0.015,0.016-0.034,0.02-0.051,0.033l-5.483,5.483c-0.306,0.307-0.802,0.307-1.106,0c-0.307-0.305-0.307-0.801,0-1.105l4.184-4.185H1.729c-0.436,0-0.788-0.353-0.788-0.788S1.293,9.212,1.729,9.212z")), function(e3) {
              for (var t4 = e3.props.sources, n4 = e3.resolve, o3 = n4(L), i2 = n4(H), r3 = n4(R, [o3, i2]), s3 = 0; s3 < t4.length; s3++)
                if ("string" == typeof t4[s3]) {
                  var a2 = r3.getTypeSetByClientForIndex(s3);
                  if (a2)
                    i2.runActionsForSourceTypeAndIndex(a2, s3);
                  else {
                    var c3 = o3.getSourceTypeFromLocalStorageByUrl(t4[s3]);
                    c3 ? i2.runActionsForSourceTypeAndIndex(c3, s3) : r3.retrieveTypeWithXhrForIndex(s3);
                  }
                } else
                  i2.runActionsForSourceTypeAndIndex("custom", s3);
            }(e2), o2.dispatch("onInit");
          }
          e2.open = function() {
            var n3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, i2 = m2.previous, a2 = m2.current, d2 = m2.next;
            m2.current = n3, p2.i || S(e2), u2.updateStageIndexes(), p2.i ? (v2.c(), v2.a(), v2.b(i2), v2.b(a2), v2.b(d2), o2.dispatch("onShow")) : b2(), c2.displaySourcesWhichShouldBeDisplayed(), t2.setSlideNumber(n3 + 1), document.body.appendChild(h2.container), document.documentElement.classList.add(l), s2.addRecompense(), r2.attachListeners(), f2.runActions(), h2.smw[m2.current].n(), o2.dispatch("onOpen");
          };
        }
        function ee(e2, t2, n2) {
          return (ee = te() ? Reflect.construct.bind() : function(e3, t3, n3) {
            var o2 = [null];
            o2.push.apply(o2, t3);
            var i2 = new (Function.bind.apply(e3, o2))();
            return n3 && ne(i2, n3.prototype), i2;
          }).apply(null, arguments);
        }
        function te() {
          if ("undefined" == typeof Reflect || !Reflect.construct)
            return false;
          if (Reflect.construct.sham)
            return false;
          if ("function" == typeof Proxy)
            return true;
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
            })), true;
          } catch (e2) {
            return false;
          }
        }
        function ne(e2, t2) {
          return (ne = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e3, t3) {
            return e3.__proto__ = t3, e3;
          })(e2, t2);
        }
        function oe(e2) {
          return function(e3) {
            if (Array.isArray(e3))
              return ie(e3);
          }(e2) || function(e3) {
            if ("undefined" != typeof Symbol && null != e3[Symbol.iterator] || null != e3["@@iterator"])
              return Array.from(e3);
          }(e2) || function(e3, t2) {
            if (!e3)
              return;
            if ("string" == typeof e3)
              return ie(e3, t2);
            var n2 = Object.prototype.toString.call(e3).slice(8, -1);
            "Object" === n2 && e3.constructor && (n2 = e3.constructor.name);
            if ("Map" === n2 || "Set" === n2)
              return Array.from(e3);
            if ("Arguments" === n2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
              return ie(e3, t2);
          }(e2) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
          }();
        }
        function ie(e2, t2) {
          (null == t2 || t2 > e2.length) && (t2 = e2.length);
          for (var n2 = 0, o2 = new Array(t2); n2 < t2; n2++)
            o2[n2] = e2[n2];
          return o2;
        }
        function re() {
          for (var e2 = document.getElementsByTagName("a"), t2 = function(t3) {
            if (!e2[t3].hasAttribute("data-fslightbox"))
              return "continue";
            var n3 = e2[t3].hasAttribute("data-href") ? e2[t3].getAttribute("data-href") : e2[t3].getAttribute("href");
            if (!n3)
              return console.warn('The "data-fslightbox" attribute was set without the "href" attribute.'), "continue";
            var o3 = e2[t3].getAttribute("data-fslightbox");
            fsLightboxInstances[o3] || (fsLightboxInstances[o3] = new FsLightbox());
            var i2 = null;
            "#" === n3.charAt(0) ? (i2 = document.getElementById(n3.substring(1)).cloneNode(true)).removeAttribute("id") : i2 = n3, fsLightboxInstances[o3].props.sources.push(i2), fsLightboxInstances[o3].elements.a.push(e2[t3]);
            var r2 = fsLightboxInstances[o3].props.sources.length - 1;
            e2[t3].onclick = function(e3) {
              e3.preventDefault(), fsLightboxInstances[o3].open(r2);
            }, d2("types", "data-type"), d2("videosPosters", "data-video-poster"), d2("customClasses", "data-class"), d2("customClasses", "data-custom-class");
            for (var s2 = ["href", "data-fslightbox", "data-href", "data-type", "data-video-poster", "data-class", "data-custom-class"], a2 = e2[t3].attributes, c2 = fsLightboxInstances[o3].props.customAttributes, l2 = 0; l2 < a2.length; l2++)
              if (-1 === s2.indexOf(a2[l2].name) && "data-" === a2[l2].name.substr(0, 5)) {
                c2[r2] || (c2[r2] = {});
                var u2 = a2[l2].name.substr(5);
                c2[r2][u2] = a2[l2].value;
              }
            function d2(n4, i3) {
              e2[t3].hasAttribute(i3) && (fsLightboxInstances[o3].props[n4][r2] = e2[t3].getAttribute(i3));
            }
          }, n2 = 0; n2 < e2.length; n2++)
            t2(n2);
          var o2 = Object.keys(fsLightboxInstances);
          window.fsLightbox = fsLightboxInstances[o2[o2.length - 1]];
        }
        window.FsLightbox = function() {
          var e2 = this;
          this.props = { sources: [], customAttributes: [], customClasses: [], types: [], videosPosters: [], slideDistance: 0.3 }, this.data = { isFullscreenOpen: false, maxSourceWidth: 0, maxSourceHeight: 0, scrollbarWidth: 0 }, this.isl = [], this.sourcePointerProps = { downScreenX: null, isPointering: false, isSourceDownEventTarget: false, swipedX: 0 }, this.stageIndexes = {}, this.elements = { a: [], container: null, slideSwipingHoverer: null, smw: [], sourceWrappersContainer: null, sources: [], sourceAnimationWrappers: [] }, this.componentsServices = { setSlideNumber: function() {
          } }, this.resolve = function(t2) {
            var n2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
            return n2.unshift(e2), ee(t2, oe(n2));
          }, this.collections = { sourceLoadHandlers: [], sourcesRenderFunctions: [], sourceSizers: [] }, this.core = { eventsDispatcher: {}, globalEventsController: {}, lightboxCloser: {}, lightboxUpdater: {}, scrollbarRecompensor: {}, slideChangeFacade: {}, slideIndexChanger: {}, sourcesPointerDown: {}, sourceDisplayFacade: {}, stageManager: {}, windowResizeActioner: {} }, this.fs = {}, this.sws = {}, Z(this), this.close = function() {
            return e2.core.lightboxCloser.closeLightbox();
          };
        }, window.fsLightboxInstances = {}, re(), window.refreshFsLightbox = function() {
          for (var e2 in fsLightboxInstances) {
            var t2 = fsLightboxInstances[e2].props;
            fsLightboxInstances[e2] = new FsLightbox(), fsLightboxInstances[e2].props = t2, fsLightboxInstances[e2].props.sources = [], fsLightboxInstances[e2].elements.a = [];
          }
          re();
        };
      }]);
    });
  }
});

// resources/js/index.js
var import_fslightbox = __toESM(require_fslightbox(), 1);
window.fslightbox = import_fslightbox.default;
window.SimpleLightBox = {
  getViewerURL(url, extension = null) {
    if (!extension) {
      extension = url.split(".").pop();
    }
    switch (extension) {
      case "pdf":
        return `https://docs.google.com/a/bouwflow.be/viewer?url=${url}&embedded=true`;
      case "doc":
      case "docx":
      case "xls":
      case "xlsx":
      case "ppt":
      case "pptx":
        return `https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(url)}`;
      default:
        return url;
    }
  },
  getMultipleImgURL(element) {
    try {
      if (element != void 0 && element != null) {
        let imgArr = element?.closest("div")?.querySelectorAll("img.simple-light-box-img-indicator");
        if (imgArr != void 0 && Array.from(imgArr).length > 0) {
          return Array.from(imgArr, (imgElm) => imgElm.getAttribute("src"));
        }
      }
    } catch (error) {
    }
    return null;
  },
  createIframe(url, extension) {
    document.getElementById("tmp-iframe")?.remove();
    let iframe = document.createElement("iframe");
    iframe.src = this.getViewerURL(url, extension);
    iframe.id = "tmp-iframe";
    iframe.className = "fslightbox-source";
    iframe.frameBorder = "0";
    iframe.allow = "autoplay; fullscreen";
    iframe.style = "width: 80vw; height: 80vh;";
    iframe.setAttribute("allowFullScreen", "");
    document.body.appendChild(iframe);
  },
  open(url, extension = null) {
    const lightbox = new FsLightbox();
    if (url !== void 0) {
      this.createIframe(url, extension);
      lightbox.props.sources = [document.getElementById("tmp-iframe")];
      lightbox.props.onClose = function(instance) {
        document.getElementById("tmp-iframe")?.remove();
      };
      lightbox.open();
      return;
    }
  }
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vbm9kZV9tb2R1bGVzL2ZzbGlnaHRib3gvaW5kZXguanMiLCAiLi4vanMvaW5kZXguanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIiFmdW5jdGlvbihlLHQpe2lmKFwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcIm9iamVjdFwiPT10eXBlb2YgbW9kdWxlKW1vZHVsZS5leHBvcnRzPXQoKTtlbHNlIGlmKFwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZClkZWZpbmUoW10sdCk7ZWxzZXt2YXIgbj10KCk7Zm9yKHZhciBvIGluIG4pKFwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzP2V4cG9ydHM6ZSlbb109bltvXX19KHdpbmRvdywoZnVuY3Rpb24oKXtyZXR1cm4gZnVuY3Rpb24oZSl7dmFyIHQ9e307ZnVuY3Rpb24gbihvKXtpZih0W29dKXJldHVybiB0W29dLmV4cG9ydHM7dmFyIGk9dFtvXT17aTpvLGw6ITEsZXhwb3J0czp7fX07cmV0dXJuIGVbb10uY2FsbChpLmV4cG9ydHMsaSxpLmV4cG9ydHMsbiksaS5sPSEwLGkuZXhwb3J0c31yZXR1cm4gbi5tPWUsbi5jPXQsbi5kPWZ1bmN0aW9uKGUsdCxvKXtuLm8oZSx0KXx8T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsdCx7ZW51bWVyYWJsZTohMCxnZXQ6b30pfSxuLnI9ZnVuY3Rpb24oZSl7XCJ1bmRlZmluZWRcIiE9dHlwZW9mIFN5bWJvbCYmU3ltYm9sLnRvU3RyaW5nVGFnJiZPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxTeW1ib2wudG9TdHJpbmdUYWcse3ZhbHVlOlwiTW9kdWxlXCJ9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KX0sbi50PWZ1bmN0aW9uKGUsdCl7aWYoMSZ0JiYoZT1uKGUpKSw4JnQpcmV0dXJuIGU7aWYoNCZ0JiZcIm9iamVjdFwiPT10eXBlb2YgZSYmZSYmZS5fX2VzTW9kdWxlKXJldHVybiBlO3ZhciBvPU9iamVjdC5jcmVhdGUobnVsbCk7aWYobi5yKG8pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLFwiZGVmYXVsdFwiLHtlbnVtZXJhYmxlOiEwLHZhbHVlOmV9KSwyJnQmJlwic3RyaW5nXCIhPXR5cGVvZiBlKWZvcih2YXIgaSBpbiBlKW4uZChvLGksZnVuY3Rpb24odCl7cmV0dXJuIGVbdF19LmJpbmQobnVsbCxpKSk7cmV0dXJuIG99LG4ubj1mdW5jdGlvbihlKXt2YXIgdD1lJiZlLl9fZXNNb2R1bGU/ZnVuY3Rpb24oKXtyZXR1cm4gZS5kZWZhdWx0fTpmdW5jdGlvbigpe3JldHVybiBlfTtyZXR1cm4gbi5kKHQsXCJhXCIsdCksdH0sbi5vPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChlLHQpfSxuLnA9XCJcIixuKG4ucz0wKX0oW2Z1bmN0aW9uKGUsdCxuKXtcInVzZSBzdHJpY3RcIjtuLnIodCk7dmFyIG8saT1cImZzbGlnaHRib3gtXCIscj1cIlwiLmNvbmNhdChpLFwic3R5bGVzXCIpLHM9XCJcIi5jb25jYXQoaSxcImN1cnNvci1ncmFiYmluZ1wiKSxhPVwiXCIuY29uY2F0KGksXCJmdWxsLWRpbWVuc2lvblwiKSxjPVwiXCIuY29uY2F0KGksXCJmbGV4LWNlbnRlcmVkXCIpLGw9XCJcIi5jb25jYXQoaSxcIm9wZW5cIiksdT1cIlwiLmNvbmNhdChpLFwidHJhbnNmb3JtLXRyYW5zaXRpb25cIiksZD1cIlwiLmNvbmNhdChpLFwiYWJzb2x1dGVkXCIpLGY9XCJcIi5jb25jYXQoaSxcInNsaWRlLWJ0blwiKSxwPVwiXCIuY29uY2F0KGYsXCItY29udGFpbmVyXCIpLGg9XCJcIi5jb25jYXQoaSxcImZhZGUtaW5cIiksbT1cIlwiLmNvbmNhdChpLFwiZmFkZS1vdXRcIiksZz1oK1wiLXN0cm9uZ1wiLHY9bStcIi1zdHJvbmdcIixiPVwiXCIuY29uY2F0KGksXCJvcGFjaXR5LVwiKSx4PVwiXCIuY29uY2F0KGIsXCIxXCIpLHk9XCJcIi5jb25jYXQoaSxcInNvdXJjZVwiKTtmdW5jdGlvbiB3KGUpe3JldHVybih3PVwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmXCJzeW1ib2xcIj09dHlwZW9mIFN5bWJvbC5pdGVyYXRvcj9mdW5jdGlvbihlKXtyZXR1cm4gdHlwZW9mIGV9OmZ1bmN0aW9uKGUpe3JldHVybiBlJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJmUuY29uc3RydWN0b3I9PT1TeW1ib2wmJmUhPT1TeW1ib2wucHJvdG90eXBlP1wic3ltYm9sXCI6dHlwZW9mIGV9KShlKX1mdW5jdGlvbiBTKGUpe3ZhciB0PWUuc3RhZ2VJbmRleGVzLG49ZS5jb3JlLnN0YWdlTWFuYWdlcixvPWUucHJvcHMuc291cmNlcy5sZW5ndGgtMTtuLmdldFByZXZpb3VzU2xpZGVJbmRleD1mdW5jdGlvbigpe3JldHVybiAwPT09dC5jdXJyZW50P286dC5jdXJyZW50LTF9LG4uZ2V0TmV4dFNsaWRlSW5kZXg9ZnVuY3Rpb24oKXtyZXR1cm4gdC5jdXJyZW50PT09bz8wOnQuY3VycmVudCsxfSxuLnVwZGF0ZVN0YWdlSW5kZXhlcz0wPT09bz9mdW5jdGlvbigpe306MT09PW8/ZnVuY3Rpb24oKXswPT09dC5jdXJyZW50Pyh0Lm5leHQ9MSxkZWxldGUgdC5wcmV2aW91cyk6KHQucHJldmlvdXM9MCxkZWxldGUgdC5uZXh0KX06ZnVuY3Rpb24oKXt0LnByZXZpb3VzPW4uZ2V0UHJldmlvdXNTbGlkZUluZGV4KCksdC5uZXh0PW4uZ2V0TmV4dFNsaWRlSW5kZXgoKX0sbi5pPW88PTI/ZnVuY3Rpb24oKXtyZXR1cm4hMH06ZnVuY3Rpb24oZSl7dmFyIG49dC5jdXJyZW50O2lmKDA9PT1uJiZlPT09b3x8bj09PW8mJjA9PT1lKXJldHVybiEwO3ZhciBpPW4tZTtyZXR1cm4tMT09PWl8fDA9PT1pfHwxPT09aX19XCJvYmplY3RcIj09PShcInVuZGVmaW5lZFwiPT10eXBlb2YgZG9jdW1lbnQ/XCJ1bmRlZmluZWRcIjp3KGRvY3VtZW50KSkmJigobz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIikpLmNsYXNzTmFtZT1yLG8uYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCIuZnNsaWdodGJveC1hYnNvbHV0ZWR7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7bGVmdDowfS5mc2xpZ2h0Ym94LWZhZGUtaW57YW5pbWF0aW9uOmZzbGlnaHRib3gtZmFkZS1pbiAuM3MgY3ViaWMtYmV6aWVyKDAsMCwuNywxKX0uZnNsaWdodGJveC1mYWRlLW91dHthbmltYXRpb246ZnNsaWdodGJveC1mYWRlLW91dCAuM3MgZWFzZX0uZnNsaWdodGJveC1mYWRlLWluLXN0cm9uZ3thbmltYXRpb246ZnNsaWdodGJveC1mYWRlLWluLXN0cm9uZyAuM3MgY3ViaWMtYmV6aWVyKDAsMCwuNywxKX0uZnNsaWdodGJveC1mYWRlLW91dC1zdHJvbmd7YW5pbWF0aW9uOmZzbGlnaHRib3gtZmFkZS1vdXQtc3Ryb25nIC4zcyBlYXNlfUBrZXlmcmFtZXMgZnNsaWdodGJveC1mYWRlLWlue2Zyb217b3BhY2l0eTouNjV9dG97b3BhY2l0eToxfX1Aa2V5ZnJhbWVzIGZzbGlnaHRib3gtZmFkZS1vdXR7ZnJvbXtvcGFjaXR5Oi4zNX10b3tvcGFjaXR5OjB9fUBrZXlmcmFtZXMgZnNsaWdodGJveC1mYWRlLWluLXN0cm9uZ3tmcm9te29wYWNpdHk6LjN9dG97b3BhY2l0eToxfX1Aa2V5ZnJhbWVzIGZzbGlnaHRib3gtZmFkZS1vdXQtc3Ryb25ne2Zyb217b3BhY2l0eToxfXRve29wYWNpdHk6MH19LmZzbGlnaHRib3gtY3Vyc29yLWdyYWJiaW5ne2N1cnNvcjpncmFiYmluZ30uZnNsaWdodGJveC1mdWxsLWRpbWVuc2lvbnt3aWR0aDoxMDAlO2hlaWdodDoxMDAlfS5mc2xpZ2h0Ym94LW9wZW57b3ZlcmZsb3c6aGlkZGVuO2hlaWdodDoxMDAlfS5mc2xpZ2h0Ym94LWZsZXgtY2VudGVyZWR7ZGlzcGxheTpmbGV4O2p1c3RpZnktY29udGVudDpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyfS5mc2xpZ2h0Ym94LW9wYWNpdHktMHtvcGFjaXR5OjAhaW1wb3J0YW50fS5mc2xpZ2h0Ym94LW9wYWNpdHktMXtvcGFjaXR5OjEhaW1wb3J0YW50fS5mc2xpZ2h0Ym94LXNjcm9sbGJhcmZpeHtwYWRkaW5nLXJpZ2h0OjE3cHh9LmZzbGlnaHRib3gtdHJhbnNmb3JtLXRyYW5zaXRpb257dHJhbnNpdGlvbjp0cmFuc2Zvcm0gLjNzfS5mc2xpZ2h0Ym94LWNvbnRhaW5lcntmb250LWZhbWlseTpBcmlhbCxzYW5zLXNlcmlmO3Bvc2l0aW9uOmZpeGVkO3RvcDowO2xlZnQ6MDtiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudChyZ2JhKDMwLDMwLDMwLC45KSwjMDAwIDE4MTAlKTt0b3VjaC1hY3Rpb246cGluY2gtem9vbTt6LWluZGV4OjEwMDAwMDAwMDA7LXdlYmtpdC11c2VyLXNlbGVjdDpub25lOy1tb3otdXNlci1zZWxlY3Q6bm9uZTstbXMtdXNlci1zZWxlY3Q6bm9uZTt1c2VyLXNlbGVjdDpub25lOy13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjp0cmFuc3BhcmVudH0uZnNsaWdodGJveC1jb250YWluZXIgKntib3gtc2l6aW5nOmJvcmRlci1ib3h9LmZzbGlnaHRib3gtc3ZnLXBhdGh7dHJhbnNpdGlvbjpmaWxsIC4xNXMgZWFzZTtmaWxsOiNkZGR9LmZzbGlnaHRib3gtbmF2e2hlaWdodDo0NXB4O3dpZHRoOjEwMCU7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7bGVmdDowfS5mc2xpZ2h0Ym94LXNsaWRlLW51bWJlci1jb250YWluZXJ7ZGlzcGxheTpmbGV4O2p1c3RpZnktY29udGVudDpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyO3Bvc2l0aW9uOnJlbGF0aXZlO2hlaWdodDoxMDAlO2ZvbnQtc2l6ZToxNXB4O2NvbG9yOiNkN2Q3ZDc7ei1pbmRleDowO21heC13aWR0aDo1NXB4O3RleHQtYWxpZ246bGVmdH0uZnNsaWdodGJveC1zbGlkZS1udW1iZXItY29udGFpbmVyIC5mc2xpZ2h0Ym94LWZsZXgtY2VudGVyZWR7aGVpZ2h0OjEwMCV9LmZzbGlnaHRib3gtc2xhc2h7ZGlzcGxheTpibG9jazttYXJnaW46MCA1cHg7d2lkdGg6MXB4O2hlaWdodDoxMnB4O3RyYW5zZm9ybTpyb3RhdGUoMTVkZWcpO2JhY2tncm91bmQ6I2ZmZn0uZnNsaWdodGJveC10b29sYmFye3Bvc2l0aW9uOmFic29sdXRlO3otaW5kZXg6MztyaWdodDowO3RvcDowO2hlaWdodDoxMDAlO2Rpc3BsYXk6ZmxleDtiYWNrZ3JvdW5kOnJnYmEoMzUsMzUsMzUsLjY1KX0uZnNsaWdodGJveC10b29sYmFyLWJ1dHRvbntoZWlnaHQ6MTAwJTt3aWR0aDo0NXB4O2N1cnNvcjpwb2ludGVyfS5mc2xpZ2h0Ym94LXRvb2xiYXItYnV0dG9uOmhvdmVyIC5mc2xpZ2h0Ym94LXN2Zy1wYXRoe2ZpbGw6I2ZmZn0uZnNsaWdodGJveC1zbGlkZS1idG4tY29udGFpbmVye2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7cGFkZGluZzoxMnB4IDEycHggMTJweCA2cHg7cG9zaXRpb246YWJzb2x1dGU7dG9wOjUwJTtjdXJzb3I6cG9pbnRlcjt6LWluZGV4OjM7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTUwJSl9QG1lZGlhIChtaW4td2lkdGg6NDc2cHgpey5mc2xpZ2h0Ym94LXNsaWRlLWJ0bi1jb250YWluZXJ7cGFkZGluZzoyMnB4IDIycHggMjJweCA2cHh9fUBtZWRpYSAobWluLXdpZHRoOjc2OHB4KXsuZnNsaWdodGJveC1zbGlkZS1idG4tY29udGFpbmVye3BhZGRpbmc6MzBweCAzMHB4IDMwcHggNnB4fX0uZnNsaWdodGJveC1zbGlkZS1idG4tY29udGFpbmVyOmhvdmVyIC5mc2xpZ2h0Ym94LXN2Zy1wYXRoe2ZpbGw6I2YxZjFmMX0uZnNsaWdodGJveC1zbGlkZS1idG57cGFkZGluZzo5cHg7Zm9udC1zaXplOjI2cHg7YmFja2dyb3VuZDpyZ2JhKDM1LDM1LDM1LC42NSl9QG1lZGlhIChtaW4td2lkdGg6NzY4cHgpey5mc2xpZ2h0Ym94LXNsaWRlLWJ0bntwYWRkaW5nOjEwcHh9fUBtZWRpYSAobWluLXdpZHRoOjE2MDBweCl7LmZzbGlnaHRib3gtc2xpZGUtYnRue3BhZGRpbmc6MTFweH19LmZzbGlnaHRib3gtc2xpZGUtYnRuLWNvbnRhaW5lci1wcmV2aW91c3tsZWZ0OjB9QG1lZGlhIChtYXgtd2lkdGg6NDc1Ljk5cHgpey5mc2xpZ2h0Ym94LXNsaWRlLWJ0bi1jb250YWluZXItcHJldmlvdXN7cGFkZGluZy1sZWZ0OjNweH19LmZzbGlnaHRib3gtc2xpZGUtYnRuLWNvbnRhaW5lci1uZXh0e3JpZ2h0OjA7cGFkZGluZy1sZWZ0OjEycHg7cGFkZGluZy1yaWdodDozcHh9QG1lZGlhIChtaW4td2lkdGg6NDc2cHgpey5mc2xpZ2h0Ym94LXNsaWRlLWJ0bi1jb250YWluZXItbmV4dHtwYWRkaW5nLWxlZnQ6MjJweH19QG1lZGlhIChtaW4td2lkdGg6NzY4cHgpey5mc2xpZ2h0Ym94LXNsaWRlLWJ0bi1jb250YWluZXItbmV4dHtwYWRkaW5nLWxlZnQ6MzBweH19QG1lZGlhIChtaW4td2lkdGg6NDc2cHgpey5mc2xpZ2h0Ym94LXNsaWRlLWJ0bi1jb250YWluZXItbmV4dHtwYWRkaW5nLXJpZ2h0OjZweH19LmZzbGlnaHRib3gtZG93bi1ldmVudC1kZXRlY3Rvcntwb3NpdGlvbjphYnNvbHV0ZTt6LWluZGV4OjF9LmZzbGlnaHRib3gtc2xpZGUtc3dpcGluZy1ob3ZlcmVye3otaW5kZXg6NH0uZnNsaWdodGJveC1pbnZhbGlkLWZpbGUtd3JhcHBlcntmb250LXNpemU6MjJweDtjb2xvcjojZWFlYmViO21hcmdpbjphdXRvfS5mc2xpZ2h0Ym94LXZpZGVve29iamVjdC1maXQ6Y292ZXJ9LmZzbGlnaHRib3gteW91dHViZS1pZnJhbWV7Ym9yZGVyOjB9LmZzbGlnaHRib3hse2Rpc3BsYXk6YmxvY2s7bWFyZ2luOmF1dG87cG9zaXRpb246YWJzb2x1dGU7dG9wOjUwJTtsZWZ0OjUwJTt0cmFuc2Zvcm06dHJhbnNsYXRlKC01MCUsLTUwJSk7d2lkdGg6NjdweDtoZWlnaHQ6NjdweH0uZnNsaWdodGJveGwgZGl2e2JveC1zaXppbmc6Ym9yZGVyLWJveDtkaXNwbGF5OmJsb2NrO3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOjU0cHg7aGVpZ2h0OjU0cHg7bWFyZ2luOjZweDtib3JkZXI6NXB4IHNvbGlkO2JvcmRlci1jb2xvcjojOTk5IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O2JvcmRlci1yYWRpdXM6NTAlO2FuaW1hdGlvbjpmc2xpZ2h0Ym94bCAxLjJzIGN1YmljLWJlemllciguNSwwLC41LDEpIGluZmluaXRlfS5mc2xpZ2h0Ym94bCBkaXY6bnRoLWNoaWxkKDEpe2FuaW1hdGlvbi1kZWxheTotLjQ1c30uZnNsaWdodGJveGwgZGl2Om50aC1jaGlsZCgyKXthbmltYXRpb24tZGVsYXk6LS4zc30uZnNsaWdodGJveGwgZGl2Om50aC1jaGlsZCgzKXthbmltYXRpb24tZGVsYXk6LS4xNXN9QGtleWZyYW1lcyBmc2xpZ2h0Ym94bHswJXt0cmFuc2Zvcm06cm90YXRlKDApfTEwMCV7dHJhbnNmb3JtOnJvdGF0ZSgzNjBkZWcpfX0uZnNsaWdodGJveC1zb3VyY2V7cG9zaXRpb246cmVsYXRpdmU7ei1pbmRleDoyO29wYWNpdHk6MH1cIikpLGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQobykpO2Z1bmN0aW9uIEwoZSl7dmFyIHQsbj1lLnByb3BzLG89MCxpPXt9O3RoaXMuZ2V0U291cmNlVHlwZUZyb21Mb2NhbFN0b3JhZ2VCeVVybD1mdW5jdGlvbihlKXtyZXR1cm4gdFtlXT90W2VdOnIoZSl9LHRoaXMuaGFuZGxlUmVjZWl2ZWRTb3VyY2VUeXBlRm9yVXJsPWZ1bmN0aW9uKGUsbil7aWYoITE9PT1pW25dJiYoby0tLFwiaW52YWxpZFwiIT09ZT9pW25dPWU6ZGVsZXRlIGlbbl0sMD09PW8pKXshZnVuY3Rpb24oZSx0KXtmb3IodmFyIG4gaW4gdCllW25dPXRbbl19KHQsaSk7dHJ5e2xvY2FsU3RvcmFnZS5zZXRJdGVtKFwiZnNsaWdodGJveC10eXBlc1wiLEpTT04uc3RyaW5naWZ5KHQpKX1jYXRjaChlKXt9fX07dmFyIHI9ZnVuY3Rpb24oZSl7bysrLGlbZV09ITF9O2lmKG4uZGlzYWJsZUxvY2FsU3RvcmFnZSl0aGlzLmdldFNvdXJjZVR5cGVGcm9tTG9jYWxTdG9yYWdlQnlVcmw9ZnVuY3Rpb24oKXt9LHRoaXMuaGFuZGxlUmVjZWl2ZWRTb3VyY2VUeXBlRm9yVXJsPWZ1bmN0aW9uKCl7fTtlbHNle3RyeXt0PUpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJmc2xpZ2h0Ym94LXR5cGVzXCIpKX1jYXRjaChlKXt9dHx8KHQ9e30sdGhpcy5nZXRTb3VyY2VUeXBlRnJvbUxvY2FsU3RvcmFnZUJ5VXJsPXIpfX1mdW5jdGlvbiBBKGUsdCxuLG8pe3ZhciBpPWUuZGF0YSxyPWUuZWxlbWVudHMuc291cmNlcyxzPW4vbyxhPTA7dGhpcy5hZGp1c3RTaXplPWZ1bmN0aW9uKCl7aWYoKGE9aS5tYXhTb3VyY2VXaWR0aC9zKTxpLm1heFNvdXJjZUhlaWdodClyZXR1cm4gbjxpLm1heFNvdXJjZVdpZHRoJiYoYT1vKSxjKCk7YT1vPmkubWF4U291cmNlSGVpZ2h0P2kubWF4U291cmNlSGVpZ2h0Om8sYygpfTt2YXIgYz1mdW5jdGlvbigpe3JbdF0uc3R5bGUud2lkdGg9YSpzK1wicHhcIixyW3RdLnN0eWxlLmhlaWdodD1hK1wicHhcIn19ZnVuY3Rpb24gQyhlLHQpe3ZhciBuPXRoaXMsbz1lLmNvbGxlY3Rpb25zLnNvdXJjZVNpemVycyxpPWUuZWxlbWVudHMscj1pLnNvdXJjZUFuaW1hdGlvbldyYXBwZXJzLHM9aS5zb3VyY2VzLGE9ZS5pc2wsYz1lLnJlc29sdmU7ZnVuY3Rpb24gbChlLG4pe29bdF09YyhBLFt0LGUsbl0pLG9bdF0uYWRqdXN0U2l6ZSgpfXRoaXMucnVuQWN0aW9ucz1mdW5jdGlvbihlLG8pe2FbdF09ITAsc1t0XS5jbGFzc0xpc3QuYWRkKHgpLHJbdF0uY2xhc3NMaXN0LmFkZChnKSxyW3RdLnJlbW92ZUNoaWxkKHJbdF0uZmlyc3RDaGlsZCksbChlLG8pLG4ucnVuQWN0aW9ucz1sfX1mdW5jdGlvbiBFKGUsdCl7dmFyIG4sbz10aGlzLGk9ZS5lbGVtZW50cy5zb3VyY2VzLHI9ZS5wcm9wcyxzPSgwLGUucmVzb2x2ZSkoQyxbdF0pO3RoaXMuaGFuZGxlSW1hZ2VMb2FkPWZ1bmN0aW9uKGUpe3ZhciB0PWUudGFyZ2V0LG49dC5uYXR1cmFsV2lkdGgsbz10Lm5hdHVyYWxIZWlnaHQ7cy5ydW5BY3Rpb25zKG4sbyl9LHRoaXMuaGFuZGxlVmlkZW9Mb2FkPWZ1bmN0aW9uKGUpe3ZhciB0PWUudGFyZ2V0LG89dC52aWRlb1dpZHRoLGk9dC52aWRlb0hlaWdodDtuPSEwLHMucnVuQWN0aW9ucyhvLGkpfSx0aGlzLmhhbmRsZU5vdE1ldGFEYXRlZFZpZGVvTG9hZD1mdW5jdGlvbigpe258fG8uaGFuZGxlWW91dHViZUxvYWQoKX0sdGhpcy5oYW5kbGVZb3V0dWJlTG9hZD1mdW5jdGlvbigpe3ZhciBlPTE5MjAsdD0xMDgwO3IubWF4WW91dHViZURpbWVuc2lvbnMmJihlPXIubWF4WW91dHViZURpbWVuc2lvbnMud2lkdGgsdD1yLm1heFlvdXR1YmVEaW1lbnNpb25zLmhlaWdodCkscy5ydW5BY3Rpb25zKGUsdCl9LHRoaXMuaGFuZGxlQ3VzdG9tTG9hZD1mdW5jdGlvbigpe3ZhciBlPWlbdF0sbj1lLm9mZnNldFdpZHRoLHI9ZS5vZmZzZXRIZWlnaHQ7biYmcj9zLnJ1bkFjdGlvbnMobixyKTpzZXRUaW1lb3V0KG8uaGFuZGxlQ3VzdG9tTG9hZCl9fWZ1bmN0aW9uIEYoZSx0LG4pe3ZhciBvPWUuZWxlbWVudHMuc291cmNlcyxpPWUucHJvcHMuY3VzdG9tQ2xhc3NlcyxyPWlbdF0/aVt0XTpcIlwiO29bdF0uY2xhc3NOYW1lPW4rXCIgXCIrcn1mdW5jdGlvbiBJKGUsdCl7dmFyIG49ZS5lbGVtZW50cy5zb3VyY2VzLG89ZS5wcm9wcy5jdXN0b21BdHRyaWJ1dGVzO2Zvcih2YXIgaSBpbiBvW3RdKW5bdF0uc2V0QXR0cmlidXRlKGksb1t0XVtpXSl9ZnVuY3Rpb24gVChlLHQpe3ZhciBuPWUuY29sbGVjdGlvbnMuc291cmNlTG9hZEhhbmRsZXJzLG89ZS5lbGVtZW50cyxpPW8uc291cmNlcyxyPW8uc291cmNlQW5pbWF0aW9uV3JhcHBlcnMscz1lLnByb3BzLnNvdXJjZXM7aVt0XT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpLEYoZSx0LHkpLGlbdF0uc3JjPXNbdF0saVt0XS5vbmxvYWQ9blt0XS5oYW5kbGVJbWFnZUxvYWQsSShlLHQpLHJbdF0uYXBwZW5kQ2hpbGQoaVt0XSl9ZnVuY3Rpb24gTihlLHQpe3ZhciBuPWUuY29sbGVjdGlvbnMuc291cmNlTG9hZEhhbmRsZXJzLG89ZS5lbGVtZW50cyxpPW8uc291cmNlcyxyPW8uc291cmNlQW5pbWF0aW9uV3JhcHBlcnMscz1lLnByb3BzLGE9cy5zb3VyY2VzLGM9cy52aWRlb3NQb3N0ZXJzO2lbdF09ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInZpZGVvXCIpLEYoZSx0LHkpLGlbdF0uc3JjPWFbdF0saVt0XS5vbmxvYWRlZG1ldGFkYXRhPWZ1bmN0aW9uKGUpe25bdF0uaGFuZGxlVmlkZW9Mb2FkKGUpfSxpW3RdLmNvbnRyb2xzPSEwLEkoZSx0KSxjW3RdJiYoaVt0XS5wb3N0ZXI9Y1t0XSk7dmFyIGw9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNvdXJjZVwiKTtsLnNyYz1hW3RdLGlbdF0uYXBwZW5kQ2hpbGQobCksc2V0VGltZW91dChuW3RdLmhhbmRsZU5vdE1ldGFEYXRlZFZpZGVvTG9hZCwzZTMpLHJbdF0uYXBwZW5kQ2hpbGQoaVt0XSl9ZnVuY3Rpb24geihlLHQpe3ZhciBuPWUuY29sbGVjdGlvbnMuc291cmNlTG9hZEhhbmRsZXJzLG89ZS5lbGVtZW50cyxyPW8uc291cmNlcyxzPW8uc291cmNlQW5pbWF0aW9uV3JhcHBlcnMsYT1lLnByb3BzLnNvdXJjZXM7clt0XT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaWZyYW1lXCIpLEYoZSx0LFwiXCIuY29uY2F0KHksXCIgXCIpLmNvbmNhdChpLFwieW91dHViZS1pZnJhbWVcIikpO3ZhciBjPWFbdF0sbD1jLnNwbGl0KFwiP1wiKVsxXTtyW3RdLnNyYz1cImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkL1wiLmNvbmNhdChjLm1hdGNoKC9eLiooeW91dHUuYmVcXC98dlxcL3x1XFwvXFx3XFwvfGVtYmVkXFwvfHdhdGNoXFw/dj18XFwmdj0pKFteI1xcJlxcP10qKS4qLylbMl0sXCI/XCIpLmNvbmNhdChsfHxcIlwiKSxyW3RdLmFsbG93RnVsbHNjcmVlbj0hMCxJKGUsdCksc1t0XS5hcHBlbmRDaGlsZChyW3RdKSxuW3RdLmhhbmRsZVlvdXR1YmVMb2FkKCl9ZnVuY3Rpb24gUChlLHQpe3ZhciBuPWUuY29sbGVjdGlvbnMuc291cmNlTG9hZEhhbmRsZXJzLG89ZS5lbGVtZW50cyxpPW8uc291cmNlcyxyPW8uc291cmNlQW5pbWF0aW9uV3JhcHBlcnMscz1lLnByb3BzLnNvdXJjZXM7aVt0XT1zW3RdLEYoZSx0LFwiXCIuY29uY2F0KGlbdF0uY2xhc3NOYW1lLFwiIFwiKS5jb25jYXQoeSkpLHJbdF0uYXBwZW5kQ2hpbGQoaVt0XSksblt0XS5oYW5kbGVDdXN0b21Mb2FkKCl9ZnVuY3Rpb24gayhlLHQpe3ZhciBuPWUuZWxlbWVudHMsbz1uLnNvdXJjZXMscj1uLnNvdXJjZUFuaW1hdGlvbldyYXBwZXJzO2UucHJvcHMuc291cmNlcztvW3RdPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksb1t0XS5jbGFzc05hbWU9XCJcIi5jb25jYXQoaSxcImludmFsaWQtZmlsZS13cmFwcGVyIFwiKS5jb25jYXQoYyksb1t0XS5pbm5lckhUTUw9XCJJbnZhbGlkIHNvdXJjZVwiLHJbdF0uY2xhc3NMaXN0LmFkZChnKSxyW3RdLnJlbW92ZUNoaWxkKHJbdF0uZmlyc3RDaGlsZCksclt0XS5hcHBlbmRDaGlsZChvW3RdKX1mdW5jdGlvbiBIKGUpe3ZhciB0PWUuY29sbGVjdGlvbnMsbj10LnNvdXJjZUxvYWRIYW5kbGVycyxvPXQuc291cmNlc1JlbmRlckZ1bmN0aW9ucyxpPWUuY29yZS5zb3VyY2VEaXNwbGF5RmFjYWRlLHI9ZS5yZXNvbHZlO3RoaXMucnVuQWN0aW9uc0ZvclNvdXJjZVR5cGVBbmRJbmRleD1mdW5jdGlvbih0LHMpe3ZhciBhO3N3aXRjaChcImludmFsaWRcIiE9PXQmJihuW3NdPXIoRSxbc10pKSx0KXtjYXNlXCJpbWFnZVwiOmE9VDticmVhaztjYXNlXCJ2aWRlb1wiOmE9TjticmVhaztjYXNlXCJ5b3V0dWJlXCI6YT16O2JyZWFrO2Nhc2VcImN1c3RvbVwiOmE9UDticmVhaztkZWZhdWx0OmE9a31vW3NdPWZ1bmN0aW9uKCl7cmV0dXJuIGEoZSxzKX0saS5kaXNwbGF5U291cmNlc1doaWNoU2hvdWxkQmVEaXNwbGF5ZWQoKX19ZnVuY3Rpb24gVygpe3ZhciBlLHQsbixvPXtpc1VybFlvdXR1YmVPbmU6ZnVuY3Rpb24oZSl7dmFyIHQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7cmV0dXJuIHQuaHJlZj1lLFwid3d3LnlvdXR1YmUuY29tXCI9PT10Lmhvc3RuYW1lfHxcInlvdXR1LmJlXCI9PT10Lmhvc3RuYW1lfSxnZXRUeXBlRnJvbVJlc3BvbnNlQ29udGVudFR5cGU6ZnVuY3Rpb24oZSl7cmV0dXJuIGUuc2xpY2UoMCxlLmluZGV4T2YoXCIvXCIpKX19O2Z1bmN0aW9uIGkoKXtpZig0IT09bi5yZWFkeVN0YXRlKXtpZigyPT09bi5yZWFkeVN0YXRlKXt2YXIgZTtzd2l0Y2goby5nZXRUeXBlRnJvbVJlc3BvbnNlQ29udGVudFR5cGUobi5nZXRSZXNwb25zZUhlYWRlcihcImNvbnRlbnQtdHlwZVwiKSkpe2Nhc2VcImltYWdlXCI6ZT1cImltYWdlXCI7YnJlYWs7Y2FzZVwidmlkZW9cIjplPVwidmlkZW9cIjticmVhaztkZWZhdWx0OmU9XCJpbnZhbGlkXCJ9bi5vbnJlYWR5c3RhdGVjaGFuZ2U9bnVsbCxuLmFib3J0KCksdChlKX19ZWxzZSB0KFwiaW52YWxpZFwiKX10aGlzLnNldFVybFRvQ2hlY2s9ZnVuY3Rpb24odCl7ZT10fSx0aGlzLmdldFNvdXJjZVR5cGU9ZnVuY3Rpb24ocil7aWYoby5pc1VybFlvdXR1YmVPbmUoZSkpcmV0dXJuIHIoXCJ5b3V0dWJlXCIpO3Q9ciwobj1uZXcgWE1MSHR0cFJlcXVlc3QpLm9ucmVhZHlzdGF0ZWNoYW5nZT1pLG4ub3BlbihcIkdFVFwiLGUsITApLG4uc2VuZCgpfX1mdW5jdGlvbiBSKGUsdCxuKXt2YXIgbz1lLnByb3BzLGk9by50eXBlcyxyPW8udHlwZSxzPW8uc291cmNlcyxhPWUucmVzb2x2ZTt0aGlzLmdldFR5cGVTZXRCeUNsaWVudEZvckluZGV4PWZ1bmN0aW9uKGUpe3ZhciB0O3JldHVybiBpJiZpW2VdP3Q9aVtlXTpyJiYodD1yKSx0fSx0aGlzLnJldHJpZXZlVHlwZVdpdGhYaHJGb3JJbmRleD1mdW5jdGlvbihlKXt2YXIgbz1hKFcpO28uc2V0VXJsVG9DaGVjayhzW2VdKSxvLmdldFNvdXJjZVR5cGUoKGZ1bmN0aW9uKG8pe3QuaGFuZGxlUmVjZWl2ZWRTb3VyY2VUeXBlRm9yVXJsKG8sc1tlXSksbi5ydW5BY3Rpb25zRm9yU291cmNlVHlwZUFuZEluZGV4KG8sZSl9KSl9fWZ1bmN0aW9uIEQoZSx0KXt2YXIgbj1lLmNvcmUuc3RhZ2VNYW5hZ2VyLG89ZS5lbGVtZW50cyxpPW8uc213LHI9by5zb3VyY2VXcmFwcGVyc0NvbnRhaW5lcixzPWUucHJvcHMsbD0wLGY9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtmdW5jdGlvbiBwKGUpe2Yuc3R5bGUudHJhbnNmb3JtPVwidHJhbnNsYXRlWChcIi5jb25jYXQoZStsLFwicHgpXCIpLGw9MH1mdW5jdGlvbiBoKCl7cmV0dXJuKDErcy5zbGlkZURpc3RhbmNlKSppbm5lcldpZHRofWYuY2xhc3NOYW1lPVwiXCIuY29uY2F0KGQsXCIgXCIpLmNvbmNhdChhLFwiIFwiKS5jb25jYXQoYyksZi5zPWZ1bmN0aW9uKCl7Zi5zdHlsZS5kaXNwbGF5PVwiZmxleFwifSxmLmg9ZnVuY3Rpb24oKXtmLnN0eWxlLmRpc3BsYXk9XCJub25lXCJ9LGYuYT1mdW5jdGlvbigpe2YuY2xhc3NMaXN0LmFkZCh1KX0sZi5kPWZ1bmN0aW9uKCl7Zi5jbGFzc0xpc3QucmVtb3ZlKHUpfSxmLm49ZnVuY3Rpb24oKXtmLnN0eWxlLnJlbW92ZVByb3BlcnR5KFwidHJhbnNmb3JtXCIpfSxmLnY9ZnVuY3Rpb24oZSl7cmV0dXJuIGw9ZSxmfSxmLm5lPWZ1bmN0aW9uKCl7cCgtaCgpKX0sZi56PWZ1bmN0aW9uKCl7cCgwKX0sZi5wPWZ1bmN0aW9uKCl7cChoKCkpfSxuLmkodCl8fGYuaCgpLGlbdF09ZixyLmFwcGVuZENoaWxkKGYpLGZ1bmN0aW9uKGUsdCl7dmFyIG49ZS5lbGVtZW50cyxvPW4uc213LGk9bi5zb3VyY2VBbmltYXRpb25XcmFwcGVycyxyPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikscz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO3MuY2xhc3NOYW1lPVwiZnNsaWdodGJveGxcIjtmb3IodmFyIGE9MDthPDM7YSsrKXt2YXIgYz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO3MuYXBwZW5kQ2hpbGQoYyl9ci5hcHBlbmRDaGlsZChzKSxvW3RdLmFwcGVuZENoaWxkKHIpLGlbdF09cn0oZSx0KX1mdW5jdGlvbiBPKGUsdCxuLG8pe3ZhciByPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXCJzdmdcIik7ci5zZXRBdHRyaWJ1dGVOUyhudWxsLFwid2lkdGhcIix0KSxyLnNldEF0dHJpYnV0ZU5TKG51bGwsXCJoZWlnaHRcIix0KSxyLnNldEF0dHJpYnV0ZU5TKG51bGwsXCJ2aWV3Qm94XCIsbik7dmFyIHM9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcInBhdGhcIik7cmV0dXJuIHMuc2V0QXR0cmlidXRlTlMobnVsbCxcImNsYXNzXCIsXCJcIi5jb25jYXQoaSxcInN2Zy1wYXRoXCIpKSxzLnNldEF0dHJpYnV0ZU5TKG51bGwsXCJkXCIsbyksci5hcHBlbmRDaGlsZChzKSxlLmFwcGVuZENoaWxkKHIpLHJ9ZnVuY3Rpb24gTShlLHQpe3ZhciBuPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7cmV0dXJuIG4uY2xhc3NOYW1lPVwiXCIuY29uY2F0KGksXCJ0b29sYmFyLWJ1dHRvbiBcIikuY29uY2F0KGMpLG4udGl0bGU9dCxlLmFwcGVuZENoaWxkKG4pLG59ZnVuY3Rpb24gaihlLHQpe3ZhciBuPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7bi5jbGFzc05hbWU9XCJcIi5jb25jYXQoaSxcInRvb2xiYXJcIiksdC5hcHBlbmRDaGlsZChuKSxmdW5jdGlvbihlLHQpe3ZhciBuPWUuY29tcG9uZW50c1NlcnZpY2VzLG89ZS5kYXRhLGk9ZS5mcyxyPVwiTTQuNSAxMUgzdjRoNHYtMS41SDQuNVYxMXpNMyA3aDEuNVY0LjVIN1YzSDN2NHptMTAuNSA2LjVIMTFWMTVoNHYtNGgtMS41djIuNXpNMTEgM3YxLjVoMi41VjdIMTVWM2gtNHpcIixzPU0odCk7cy50aXRsZT1cIkVudGVyIGZ1bGxzY3JlZW5cIjt2YXIgYT1PKHMsXCIyMHB4XCIsXCIwIDAgMTggMThcIixyKTtuLm9mcz1mdW5jdGlvbigpe28uaWZzPSEwLHMudGl0bGU9XCJFeGl0IGZ1bGxzY3JlZW5cIixhLnNldEF0dHJpYnV0ZU5TKG51bGwsXCJ3aWR0aFwiLFwiMjRweFwiKSxhLnNldEF0dHJpYnV0ZU5TKG51bGwsXCJoZWlnaHRcIixcIjI0cHhcIiksYS5zZXRBdHRyaWJ1dGVOUyhudWxsLFwidmlld0JveFwiLFwiMCAwIDk1MCAxMDI0XCIpLGEuZmlyc3RDaGlsZC5zZXRBdHRyaWJ1dGVOUyhudWxsLFwiZFwiLFwiTTY4MiAzNDJoMTI4djg0aC0yMTJ2LTIxMmg4NHYxMjh6TTU5OCA4MTB2LTIxMmgyMTJ2ODRoLTEyOHYxMjhoLTg0ek0zNDIgMzQydi0xMjhoODR2MjEyaC0yMTJ2LTg0aDEyOHpNMjE0IDY4MnYtODRoMjEydjIxMmgtODR2LTEyOGgtMTI4elwiKX0sbi54ZnM9ZnVuY3Rpb24oKXtvLmlmcz0hMSxzLnRpdGxlPVwiRW50ZXIgZnVsbHNjcmVlblwiLGEuc2V0QXR0cmlidXRlTlMobnVsbCxcIndpZHRoXCIsXCIyMHB4XCIpLGEuc2V0QXR0cmlidXRlTlMobnVsbCxcImhlaWdodFwiLFwiMjBweFwiKSxhLnNldEF0dHJpYnV0ZU5TKG51bGwsXCJ2aWV3Qm94XCIsXCIwIDAgMTggMThcIiksYS5maXJzdENoaWxkLnNldEF0dHJpYnV0ZU5TKG51bGwsXCJkXCIscil9LHMub25jbGljaz1pLnR9KGUsbiksZnVuY3Rpb24oZSx0KXt2YXIgbj1NKHQsXCJDbG9zZVwiKTtuLm9uY2xpY2s9ZS5jb3JlLmxpZ2h0Ym94Q2xvc2VyLmNsb3NlTGlnaHRib3gsTyhuLFwiMjBweFwiLFwiMCAwIDI0IDI0XCIsXCJNIDQuNzA3MDMxMiAzLjI5Mjk2ODggTCAzLjI5Mjk2ODggNC43MDcwMzEyIEwgMTAuNTg1OTM4IDEyIEwgMy4yOTI5Njg4IDE5LjI5Mjk2OSBMIDQuNzA3MDMxMiAyMC43MDcwMzEgTCAxMiAxMy40MTQwNjIgTCAxOS4yOTI5NjkgMjAuNzA3MDMxIEwgMjAuNzA3MDMxIDE5LjI5Mjk2OSBMIDEzLjQxNDA2MiAxMiBMIDIwLjcwNzAzMSA0LjcwNzAzMTIgTCAxOS4yOTI5NjkgMy4yOTI5Njg4IEwgMTIgMTAuNTg1OTM4IEwgNC43MDcwMzEyIDMuMjkyOTY4OCB6XCIpfShlLG4pfWZ1bmN0aW9uIFgoZSl7dmFyIHQ9ZS5wcm9wcy5zb3VyY2VzLG49ZS5lbGVtZW50cy5jb250YWluZXIsbz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO28uY2xhc3NOYW1lPVwiXCIuY29uY2F0KGksXCJuYXZcIiksbi5hcHBlbmRDaGlsZChvKSxqKGUsbyksdC5sZW5ndGg+MSYmZnVuY3Rpb24oZSx0KXt2YXIgbj1lLmNvbXBvbmVudHNTZXJ2aWNlcyxvPWUucHJvcHMuc291cmNlcyxyPShlLnN0YWdlSW5kZXhlcyxkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpKTtyLmNsYXNzTmFtZT1cIlwiLmNvbmNhdChpLFwic2xpZGUtbnVtYmVyLWNvbnRhaW5lclwiKTt2YXIgcz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO3MuY2xhc3NOYW1lPWM7dmFyIGE9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7bi5zZXRTbGlkZU51bWJlcj1mdW5jdGlvbihlKXtyZXR1cm4gYS5pbm5lckhUTUw9ZX07dmFyIGw9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7bC5jbGFzc05hbWU9XCJcIi5jb25jYXQoaSxcInNsYXNoXCIpO3ZhciB1PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7dS5pbm5lckhUTUw9by5sZW5ndGgsci5hcHBlbmRDaGlsZChzKSxzLmFwcGVuZENoaWxkKGEpLHMuYXBwZW5kQ2hpbGQobCkscy5hcHBlbmRDaGlsZCh1KSx0LmFwcGVuZENoaWxkKHIpLHNldFRpbWVvdXQoKGZ1bmN0aW9uKCl7cy5vZmZzZXRXaWR0aD41NSYmKHIuc3R5bGUuanVzdGlmeUNvbnRlbnQ9XCJmbGV4LXN0YXJ0XCIpfSkpfShlLG8pfWZ1bmN0aW9uIEIoZSx0LG4sbyl7dmFyIGk9ZS5lbGVtZW50cy5jb250YWluZXIscj1uLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpK24uc2xpY2UoMSkscz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO3MuY2xhc3NOYW1lPVwiXCIuY29uY2F0KHAsXCIgXCIpLmNvbmNhdChwLFwiLVwiKS5jb25jYXQobikscy50aXRsZT1cIlwiLmNvbmNhdChyLFwiIHNsaWRlXCIpLHMub25jbGljaz10LGZ1bmN0aW9uKGUsdCl7dmFyIG49ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtuLmNsYXNzTmFtZT1cIlwiLmNvbmNhdChmLFwiIFwiKS5jb25jYXQoYyksTyhuLFwiMjBweFwiLFwiMCAwIDIwIDIwXCIsdCksZS5hcHBlbmRDaGlsZChuKX0ocyxvKSxpLmFwcGVuZENoaWxkKHMpfWZ1bmN0aW9uIFUoZSl7dmFyIHQ9ZS5jb3JlLG49dC5saWdodGJveENsb3NlcixvPXQuc2xpZGVDaGFuZ2VGYWNhZGUsaT1lLmZzO3RoaXMubGlzdGVuZXI9ZnVuY3Rpb24oZSl7c3dpdGNoKGUua2V5KXtjYXNlXCJFc2NhcGVcIjpuLmNsb3NlTGlnaHRib3goKTticmVhaztjYXNlXCJBcnJvd0xlZnRcIjpvLmNoYW5nZVRvUHJldmlvdXMoKTticmVhaztjYXNlXCJBcnJvd1JpZ2h0XCI6by5jaGFuZ2VUb05leHQoKTticmVhaztjYXNlXCJGMTFcIjplLnByZXZlbnREZWZhdWx0KCksaS50KCl9fX1mdW5jdGlvbiBxKGUpe3ZhciB0PWUuZWxlbWVudHMsbj1lLnNvdXJjZVBvaW50ZXJQcm9wcyxvPWUuc3RhZ2VJbmRleGVzO2Z1bmN0aW9uIGkoZSxvKXt0LnNtd1tlXS52KG4uc3dpcGVkWClbb10oKX10aGlzLnJ1bkFjdGlvbnNGb3JFdmVudD1mdW5jdGlvbihlKXt2YXIgcixhLGM7dC5jb250YWluZXIuY29udGFpbnModC5zbGlkZVN3aXBpbmdIb3ZlcmVyKXx8dC5jb250YWluZXIuYXBwZW5kQ2hpbGQodC5zbGlkZVN3aXBpbmdIb3ZlcmVyKSxyPXQuY29udGFpbmVyLGE9cywoYz1yLmNsYXNzTGlzdCkuY29udGFpbnMoYSl8fGMuYWRkKGEpLG4uc3dpcGVkWD1lLnNjcmVlblgtbi5kb3duU2NyZWVuWDt2YXIgbD1vLnByZXZpb3VzLHU9by5uZXh0O2koby5jdXJyZW50LFwielwiKSx2b2lkIDAhPT1sJiZuLnN3aXBlZFg+MD9pKGwsXCJuZVwiKTp2b2lkIDAhPT11JiZuLnN3aXBlZFg8MCYmaSh1LFwicFwiKX19ZnVuY3Rpb24gVihlKXt2YXIgdD1lLnByb3BzLnNvdXJjZXMsbj1lLnJlc29sdmUsbz1lLnNvdXJjZVBvaW50ZXJQcm9wcyxpPW4ocSk7MT09PXQubGVuZ3RoP3RoaXMubGlzdGVuZXI9ZnVuY3Rpb24oKXtvLnN3aXBlZFg9MX06dGhpcy5saXN0ZW5lcj1mdW5jdGlvbihlKXtvLmlzUG9pbnRlcmluZyYmaS5ydW5BY3Rpb25zRm9yRXZlbnQoZSl9fWZ1bmN0aW9uIF8oZSl7dmFyIHQ9ZS5jb3JlLnNsaWRlSW5kZXhDaGFuZ2VyLG49ZS5lbGVtZW50cy5zbXcsbz1lLnN0YWdlSW5kZXhlcyxpPWUuc3dzO2Z1bmN0aW9uIHIoZSl7dmFyIHQ9bltvLmN1cnJlbnRdO3QuYSgpLHRbZV0oKX1mdW5jdGlvbiBzKGUsdCl7dm9pZCAwIT09ZSYmKG5bZV0ucygpLG5bZV1bdF0oKSl9dGhpcy5ydW5Qb3NpdGl2ZVN3aXBlZFhBY3Rpb25zPWZ1bmN0aW9uKCl7dmFyIGU9by5wcmV2aW91cztpZih2b2lkIDA9PT1lKXIoXCJ6XCIpO2Vsc2V7cihcInBcIik7dmFyIG49by5uZXh0O3QuY2hhbmdlVG8oZSk7dmFyIGE9by5wcmV2aW91cztpLmQoYSksaS5iKG4pLHIoXCJ6XCIpLHMoYSxcIm5lXCIpfX0sdGhpcy5ydW5OZWdhdGl2ZVN3aXBlZFhBY3Rpb25zPWZ1bmN0aW9uKCl7dmFyIGU9by5uZXh0O2lmKHZvaWQgMD09PWUpcihcInpcIik7ZWxzZXtyKFwibmVcIik7dmFyIG49by5wcmV2aW91czt0LmNoYW5nZVRvKGUpO3ZhciBhPW8ubmV4dDtpLmQoYSksaS5iKG4pLHIoXCJ6XCIpLHMoYSxcInBcIil9fX1mdW5jdGlvbiBZKGUsdCl7ZS5jb250YWlucyh0KSYmZS5yZW1vdmVDaGlsZCh0KX1mdW5jdGlvbiBKKGUpe3ZhciB0PWUuY29yZS5saWdodGJveENsb3NlcixuPWUuZWxlbWVudHMsbz1lLnJlc29sdmUsaT1lLnNvdXJjZVBvaW50ZXJQcm9wcyxyPW8oXyk7dGhpcy5ydW5Ob1N3aXBlQWN0aW9ucz1mdW5jdGlvbigpe1kobi5jb250YWluZXIsbi5zbGlkZVN3aXBpbmdIb3ZlcmVyKSxpLmlzU291cmNlRG93bkV2ZW50VGFyZ2V0fHx0LmNsb3NlTGlnaHRib3goKSxpLmlzUG9pbnRlcmluZz0hMX0sdGhpcy5ydW5BY3Rpb25zPWZ1bmN0aW9uKCl7aS5zd2lwZWRYPjA/ci5ydW5Qb3NpdGl2ZVN3aXBlZFhBY3Rpb25zKCk6ci5ydW5OZWdhdGl2ZVN3aXBlZFhBY3Rpb25zKCksWShuLmNvbnRhaW5lcixuLnNsaWRlU3dpcGluZ0hvdmVyZXIpLG4uY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUocyksaS5pc1BvaW50ZXJpbmc9ITF9fWZ1bmN0aW9uIEcoZSl7dmFyIHQ9ZS5yZXNvbHZlLG49ZS5zb3VyY2VQb2ludGVyUHJvcHMsbz10KEopO3RoaXMubGlzdGVuZXI9ZnVuY3Rpb24oKXtuLmlzUG9pbnRlcmluZyYmKG4uc3dpcGVkWD9vLnJ1bkFjdGlvbnMoKTpvLnJ1bk5vU3dpcGVBY3Rpb25zKCkpfX1mdW5jdGlvbiAkKGUpe3ZhciB0PXRoaXMsbj1lLmNvcmUsbz1uLmV2ZW50c0Rpc3BhdGNoZXIsaT1uLmdsb2JhbEV2ZW50c0NvbnRyb2xsZXIscj1uLnNjcm9sbGJhclJlY29tcGVuc29yLHM9ZS5kYXRhLGE9ZS5lbGVtZW50cyxjPWUuZnMsdT1lLnByb3BzLGQ9ZS5zb3VyY2VQb2ludGVyUHJvcHM7dGhpcy5pc0xpZ2h0Ym94RmFkaW5nT3V0PSExLHRoaXMucnVuQWN0aW9ucz1mdW5jdGlvbigpe3QuaXNMaWdodGJveEZhZGluZ091dD0hMCxhLmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKHYpLGkucmVtb3ZlTGlzdGVuZXJzKCksdS5leGl0RnVsbHNjcmVlbk9uQ2xvc2UmJnMuaWZzJiZjLngoKSxzZXRUaW1lb3V0KChmdW5jdGlvbigpe3QuaXNMaWdodGJveEZhZGluZ091dD0hMSxkLmlzUG9pbnRlcmluZz0hMSxhLmNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKHYpLGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGwpLHIucmVtb3ZlUmVjb21wZW5zZSgpLGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoYS5jb250YWluZXIpLG8uZGlzcGF0Y2goXCJvbkNsb3NlXCIpfSksMjcwKX19ZnVuY3Rpb24gSyhlLHQpe3ZhciBuPWUuY2xhc3NMaXN0O24uY29udGFpbnModCkmJm4ucmVtb3ZlKHQpfWZ1bmN0aW9uIFEoZSl7dmFyIHQsbixvO249KHQ9ZSkuY29yZS5ldmVudHNEaXNwYXRjaGVyLG89dC5wcm9wcyxuLmRpc3BhdGNoPWZ1bmN0aW9uKGUpe29bZV0mJm9bZV0oKX0sZnVuY3Rpb24oZSl7dmFyIHQ9ZS5jb21wb25lbnRzU2VydmljZXMsbj1lLmRhdGEsbz1lLmZzLGk9W1wiZnVsbHNjcmVlbmNoYW5nZVwiLFwid2Via2l0ZnVsbHNjcmVlbmNoYW5nZVwiLFwibW96ZnVsbHNjcmVlbmNoYW5nZVwiLFwiTVNGdWxsc2NyZWVuQ2hhbmdlXCJdO2Z1bmN0aW9uIHIoZSl7Zm9yKHZhciB0PTA7dDxpLmxlbmd0aDt0KyspZG9jdW1lbnRbZV0oaVt0XSxzKX1mdW5jdGlvbiBzKCl7ZG9jdW1lbnQuZnVsbHNjcmVlbkVsZW1lbnR8fGRvY3VtZW50LndlYmtpdElzRnVsbFNjcmVlbnx8ZG9jdW1lbnQubW96RnVsbFNjcmVlbnx8ZG9jdW1lbnQubXNGdWxsc2NyZWVuRWxlbWVudD90Lm9mcygpOnQueGZzKCl9by5vPWZ1bmN0aW9uKCl7dC5vZnMoKTt2YXIgZT1kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7ZS5yZXF1ZXN0RnVsbHNjcmVlbj9lLnJlcXVlc3RGdWxsc2NyZWVuKCk6ZS5tb3pSZXF1ZXN0RnVsbFNjcmVlbj9lLm1velJlcXVlc3RGdWxsU2NyZWVuKCk6ZS53ZWJraXRSZXF1ZXN0RnVsbHNjcmVlbj9lLndlYmtpdFJlcXVlc3RGdWxsc2NyZWVuKCk6ZS5tc1JlcXVlc3RGdWxsc2NyZWVuJiZlLm1zUmVxdWVzdEZ1bGxzY3JlZW4oKX0sby54PWZ1bmN0aW9uKCl7dC54ZnMoKSxkb2N1bWVudC5leGl0RnVsbHNjcmVlbj9kb2N1bWVudC5leGl0RnVsbHNjcmVlbigpOmRvY3VtZW50Lm1vekNhbmNlbEZ1bGxTY3JlZW4/ZG9jdW1lbnQubW96Q2FuY2VsRnVsbFNjcmVlbigpOmRvY3VtZW50LndlYmtpdEV4aXRGdWxsc2NyZWVuP2RvY3VtZW50LndlYmtpdEV4aXRGdWxsc2NyZWVuKCk6ZG9jdW1lbnQubXNFeGl0RnVsbHNjcmVlbiYmZG9jdW1lbnQubXNFeGl0RnVsbHNjcmVlbigpfSxvLnQ9ZnVuY3Rpb24oKXtuLmlmcz9vLngoKTpvLm8oKX0sby5sPWZ1bmN0aW9uKCl7cihcImFkZEV2ZW50TGlzdGVuZXJcIil9LG8ucT1mdW5jdGlvbigpe3IoXCJyZW1vdmVFdmVudExpc3RlbmVyXCIpfX0oZSksZnVuY3Rpb24oZSl7dmFyIHQ9ZS5jb3JlLG49dC5nbG9iYWxFdmVudHNDb250cm9sbGVyLG89dC53aW5kb3dSZXNpemVBY3Rpb25lcixpPWUuZnMscj1lLnJlc29sdmUscz1yKFUpLGE9cihWKSxjPXIoRyk7bi5hdHRhY2hMaXN0ZW5lcnM9ZnVuY3Rpb24oKXtkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcm1vdmVcIixhLmxpc3RlbmVyKSxkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcnVwXCIsYy5saXN0ZW5lciksYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLG8ucnVuQWN0aW9ucyksZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIixzLmxpc3RlbmVyKSxpLmwoKX0sbi5yZW1vdmVMaXN0ZW5lcnM9ZnVuY3Rpb24oKXtkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwicG9pbnRlcm1vdmVcIixhLmxpc3RlbmVyKSxkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwicG9pbnRlcnVwXCIsYy5saXN0ZW5lcikscmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLG8ucnVuQWN0aW9ucyksZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIixzLmxpc3RlbmVyKSxpLnEoKX19KGUpLGZ1bmN0aW9uKGUpe3ZhciB0PWUuY29yZS5saWdodGJveENsb3NlcixuPSgwLGUucmVzb2x2ZSkoJCk7dC5jbG9zZUxpZ2h0Ym94PWZ1bmN0aW9uKCl7bi5pc0xpZ2h0Ym94RmFkaW5nT3V0fHxuLnJ1bkFjdGlvbnMoKX19KGUpLGZ1bmN0aW9uKGUpe3ZhciB0PWUuZGF0YSxuPWUuY29yZS5zY3JvbGxiYXJSZWNvbXBlbnNvcjtmdW5jdGlvbiBvKCl7ZG9jdW1lbnQuYm9keS5vZmZzZXRIZWlnaHQ+aW5uZXJIZWlnaHQmJihkb2N1bWVudC5ib2R5LnN0eWxlLm1hcmdpblJpZ2h0PXQuc2Nyb2xsYmFyV2lkdGgrXCJweFwiKX1uLmFkZFJlY29tcGVuc2U9ZnVuY3Rpb24oKXtcImNvbXBsZXRlXCI9PT1kb2N1bWVudC5yZWFkeVN0YXRlP28oKTphZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLChmdW5jdGlvbigpe28oKSxuLmFkZFJlY29tcGVuc2U9b30pKX0sbi5yZW1vdmVSZWNvbXBlbnNlPWZ1bmN0aW9uKCl7ZG9jdW1lbnQuYm9keS5zdHlsZS5yZW1vdmVQcm9wZXJ0eShcIm1hcmdpbi1yaWdodFwiKX19KGUpLGZ1bmN0aW9uKGUpe3ZhciB0PWUuY29yZSxuPXQuc2xpZGVDaGFuZ2VGYWNhZGUsbz10LnNsaWRlSW5kZXhDaGFuZ2VyLGk9dC5zdGFnZU1hbmFnZXI7ZS5wcm9wcy5zb3VyY2VzLmxlbmd0aD4xPyhuLmNoYW5nZVRvUHJldmlvdXM9ZnVuY3Rpb24oKXtvLmp1bXBUbyhpLmdldFByZXZpb3VzU2xpZGVJbmRleCgpKX0sbi5jaGFuZ2VUb05leHQ9ZnVuY3Rpb24oKXtvLmp1bXBUbyhpLmdldE5leHRTbGlkZUluZGV4KCkpfSk6KG4uY2hhbmdlVG9QcmV2aW91cz1mdW5jdGlvbigpe30sbi5jaGFuZ2VUb05leHQ9ZnVuY3Rpb24oKXt9KX0oZSksZnVuY3Rpb24oZSl7dmFyIHQ9ZS5jb21wb25lbnRzU2VydmljZXMsbj1lLmNvcmUsbz1uLnNsaWRlSW5kZXhDaGFuZ2VyLGk9bi5zb3VyY2VEaXNwbGF5RmFjYWRlLHI9bi5zdGFnZU1hbmFnZXIscz1lLmVsZW1lbnRzLGE9cy5zbXcsYz1zLnNvdXJjZUFuaW1hdGlvbldyYXBwZXJzLGw9ZS5pc2wsdT1lLnN0YWdlSW5kZXhlcyxkPWUuc3dzO28uY2hhbmdlVG89ZnVuY3Rpb24oZSl7dS5jdXJyZW50PWUsci51cGRhdGVTdGFnZUluZGV4ZXMoKSx0LnNldFNsaWRlTnVtYmVyKGUrMSksaS5kaXNwbGF5U291cmNlc1doaWNoU2hvdWxkQmVEaXNwbGF5ZWQoKX0sby5qdW1wVG89ZnVuY3Rpb24oZSl7dmFyIHQ9dS5wcmV2aW91cyxuPXUuY3VycmVudCxpPXUubmV4dCxzPWxbbl0sZj1sW2VdO28uY2hhbmdlVG8oZSk7Zm9yKHZhciBwPTA7cDxhLmxlbmd0aDtwKyspYVtwXS5kKCk7ZC5kKG4pLGQuYygpLHJlcXVlc3RBbmltYXRpb25GcmFtZSgoZnVuY3Rpb24oKXtyZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKGZ1bmN0aW9uKCl7dmFyIGU9dS5wcmV2aW91cyxvPXUubmV4dDtmdW5jdGlvbiBwKCl7ci5pKG4pP249PT11LnByZXZpb3VzP2Fbbl0ubmUoKTpuPT09dS5uZXh0JiZhW25dLnAoKTooYVtuXS5oKCksYVtuXS5uKCkpfXMmJmNbbl0uY2xhc3NMaXN0LmFkZChtKSxmJiZjW3UuY3VycmVudF0uY2xhc3NMaXN0LmFkZChoKSxkLmEoKSx2b2lkIDAhPT1lJiZlIT09biYmYVtlXS5uZSgpLGFbdS5jdXJyZW50XS5uKCksdm9pZCAwIT09byYmbyE9PW4mJmFbb10ucCgpLGQuYih0KSxkLmIoaSksbFtuXT9zZXRUaW1lb3V0KHAsMjYwKTpwKCl9KSl9KSl9fShlKSxmdW5jdGlvbihlKXt2YXIgdD1lLmNvcmUuc291cmNlc1BvaW50ZXJEb3duLG49ZS5lbGVtZW50cyxvPW4uc213LGk9bi5zb3VyY2VzLHI9ZS5zb3VyY2VQb2ludGVyUHJvcHMscz1lLnN0YWdlSW5kZXhlczt0Lmxpc3RlbmVyPWZ1bmN0aW9uKGUpe1wiVklERU9cIiE9PWUudGFyZ2V0LnRhZ05hbWUmJmUucHJldmVudERlZmF1bHQoKSxyLmlzUG9pbnRlcmluZz0hMCxyLmRvd25TY3JlZW5YPWUuc2NyZWVuWCxyLnN3aXBlZFg9MDt2YXIgdD1pW3MuY3VycmVudF07dCYmdC5jb250YWlucyhlLnRhcmdldCk/ci5pc1NvdXJjZURvd25FdmVudFRhcmdldD0hMDpyLmlzU291cmNlRG93bkV2ZW50VGFyZ2V0PSExO2Zvcih2YXIgbj0wO248by5sZW5ndGg7bisrKW9bbl0uZCgpfX0oZSksZnVuY3Rpb24oZSl7dmFyIHQ9ZS5jb2xsZWN0aW9ucy5zb3VyY2VzUmVuZGVyRnVuY3Rpb25zLG49ZS5jb3JlLnNvdXJjZURpc3BsYXlGYWNhZGUsbz1lLnByb3BzLGk9ZS5zdGFnZUluZGV4ZXM7ZnVuY3Rpb24gcihlKXt0W2VdJiYodFtlXSgpLGRlbGV0ZSB0W2VdKX1uLmRpc3BsYXlTb3VyY2VzV2hpY2hTaG91bGRCZURpc3BsYXllZD1mdW5jdGlvbigpe2lmKG8ubG9hZE9ubHlDdXJyZW50U291cmNlKXIoaS5jdXJyZW50KTtlbHNlIGZvcih2YXIgZSBpbiBpKXIoaVtlXSl9fShlKSxmdW5jdGlvbihlKXt2YXIgdD1lLmNvcmUuc3RhZ2VNYW5hZ2VyLG49ZS5lbGVtZW50cyxvPW4uc213LGk9bi5zb3VyY2VBbmltYXRpb25XcmFwcGVycyxyPWUuaXNsLHM9ZS5zdGFnZUluZGV4ZXMsYT1lLnN3czthLmE9ZnVuY3Rpb24oKXtmb3IodmFyIGUgaW4gcylvW3NbZV1dLnMoKX0sYS5iPWZ1bmN0aW9uKGUpe3ZvaWQgMD09PWV8fHQuaShlKXx8KG9bZV0uaCgpLG9bZV0ubigpKX0sYS5jPWZ1bmN0aW9uKCl7Zm9yKHZhciBlIGluIHMpYS5kKHNbZV0pfSxhLmQ9ZnVuY3Rpb24oZSl7aWYocltlXSl7dmFyIHQ9aVtlXTtLKHQsZyksSyh0LGgpLEsodCxtKX19fShlKSxmdW5jdGlvbihlKXt2YXIgdD1lLmNvbGxlY3Rpb25zLnNvdXJjZVNpemVycyxuPWUuY29yZS53aW5kb3dSZXNpemVBY3Rpb25lcixvPWUuZGF0YSxpPWUuZWxlbWVudHMuc213LHI9ZS5zdGFnZUluZGV4ZXM7bi5ydW5BY3Rpb25zPWZ1bmN0aW9uKCl7aW5uZXJXaWR0aDw5OTI/by5tYXhTb3VyY2VXaWR0aD1pbm5lcldpZHRoOm8ubWF4U291cmNlV2lkdGg9LjkqaW5uZXJXaWR0aCxvLm1heFNvdXJjZUhlaWdodD0uOSppbm5lckhlaWdodDtmb3IodmFyIGU9MDtlPGkubGVuZ3RoO2UrKylpW2VdLmQoKSx0W2VdJiZ0W2VdLmFkanVzdFNpemUoKTt2YXIgbj1yLnByZXZpb3VzLHM9ci5uZXh0O3ZvaWQgMCE9PW4mJmlbbl0ubmUoKSx2b2lkIDAhPT1zJiZpW3NdLnAoKX19KGUpfWZ1bmN0aW9uIFooZSl7dmFyIHQ9ZS5jb21wb25lbnRzU2VydmljZXMsbj1lLmNvcmUsbz1uLmV2ZW50c0Rpc3BhdGNoZXIscj1uLmdsb2JhbEV2ZW50c0NvbnRyb2xsZXIscz1uLnNjcm9sbGJhclJlY29tcGVuc29yLGM9bi5zb3VyY2VEaXNwbGF5RmFjYWRlLHU9bi5zdGFnZU1hbmFnZXIsZj1uLndpbmRvd1Jlc2l6ZUFjdGlvbmVyLHA9ZS5kYXRhLGg9ZS5lbGVtZW50cyxtPShlLnByb3BzLGUuc3RhZ2VJbmRleGVzKSx2PWUuc3dzO2Z1bmN0aW9uIGIoKXt2YXIgdCxuO3AuaT0hMCxwLnNjcm9sbGJhcldpZHRoPWZ1bmN0aW9uKCl7dmFyIGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSx0PWUuc3R5bGUsbj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO3QudmlzaWJpbGl0eT1cImhpZGRlblwiLHQud2lkdGg9XCIxMDBweFwiLHQubXNPdmVyZmxvd1N0eWxlPVwic2Nyb2xsYmFyXCIsdC5vdmVyZmxvdz1cInNjcm9sbFwiLG4uc3R5bGUud2lkdGg9XCIxMDAlXCIsZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChlKTt2YXIgbz1lLm9mZnNldFdpZHRoO2UuYXBwZW5kQ2hpbGQobik7dmFyIGk9bi5vZmZzZXRXaWR0aDtyZXR1cm4gZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChlKSxvLWl9KCksUShlKSxoLmNvbnRhaW5lcj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLGguY29udGFpbmVyLmNsYXNzTmFtZT1cIlwiLmNvbmNhdChpLFwiY29udGFpbmVyIFwiKS5jb25jYXQoYSxcIiBcIikuY29uY2F0KGcpLGZ1bmN0aW9uKGUpe3ZhciB0PWUuZWxlbWVudHM7dC5zbGlkZVN3aXBpbmdIb3ZlcmVyPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksdC5zbGlkZVN3aXBpbmdIb3ZlcmVyLmNsYXNzTmFtZT1cIlwiLmNvbmNhdChpLFwic2xpZGUtc3dpcGluZy1ob3ZlcmVyIFwiKS5jb25jYXQoYSxcIiBcIikuY29uY2F0KGQpfShlKSxYKGUpLGZ1bmN0aW9uKGUpe3ZhciB0PWUuY29yZS5zb3VyY2VzUG9pbnRlckRvd24sbj1lLmVsZW1lbnRzLG89ZS5wcm9wcy5zb3VyY2VzLGk9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtpLmNsYXNzTmFtZT1cIlwiLmNvbmNhdChkLFwiIFwiKS5jb25jYXQoYSksbi5jb250YWluZXIuYXBwZW5kQ2hpbGQoaSksaS5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcmRvd25cIix0Lmxpc3RlbmVyKSxuLnNvdXJjZVdyYXBwZXJzQ29udGFpbmVyPWk7Zm9yKHZhciByPTA7cjxvLmxlbmd0aDtyKyspRChlLHIpfShlKSxlLnByb3BzLnNvdXJjZXMubGVuZ3RoPjEmJihuPSh0PWUpLmNvcmUuc2xpZGVDaGFuZ2VGYWNhZGUsQih0LG4uY2hhbmdlVG9QcmV2aW91cyxcInByZXZpb3VzXCIsXCJNMTguMjcxLDkuMjEySDMuNjE1bDQuMTg0LTQuMTg0YzAuMzA2LTAuMzA2LDAuMzA2LTAuODAxLDAtMS4xMDdjLTAuMzA2LTAuMzA2LTAuODAxLTAuMzA2LTEuMTA3LDBMMS4yMSw5LjQwM0MxLjE5NCw5LjQxNywxLjE3NCw5LjQyMSwxLjE1OCw5LjQzN2MtMC4xODEsMC4xODEtMC4yNDIsMC40MjUtMC4yMDksMC42NmMwLjAwNSwwLjAzOCwwLjAxMiwwLjA3MSwwLjAyMiwwLjEwOWMwLjAyOCwwLjA5OCwwLjA3NSwwLjE4OCwwLjE0MiwwLjI3MWMwLjAyMSwwLjAyNiwwLjAyMSwwLjA2MSwwLjA0NSwwLjA4NWMwLjAxNSwwLjAxNiwwLjAzNCwwLjAyLDAuMDUsMC4wMzNsNS40ODQsNS40ODNjMC4zMDYsMC4zMDcsMC44MDEsMC4zMDcsMS4xMDcsMGMwLjMwNi0wLjMwNSwwLjMwNi0wLjgwMSwwLTEuMTA1bC00LjE4NC00LjE4NWgxNC42NTZjMC40MzYsMCwwLjc4OC0wLjM1MywwLjc4OC0wLjc4OFMxOC43MDcsOS4yMTIsMTguMjcxLDkuMjEyelwiKSxCKHQsbi5jaGFuZ2VUb05leHQsXCJuZXh0XCIsXCJNMS43MjksOS4yMTJoMTQuNjU2bC00LjE4NC00LjE4NGMtMC4zMDctMC4zMDYtMC4zMDctMC44MDEsMC0xLjEwN2MwLjMwNS0wLjMwNiwwLjgwMS0wLjMwNiwxLjEwNiwwbDUuNDgxLDUuNDgyYzAuMDE4LDAuMDE0LDAuMDM3LDAuMDE5LDAuMDUzLDAuMDM0YzAuMTgxLDAuMTgxLDAuMjQyLDAuNDI1LDAuMjA5LDAuNjZjLTAuMDA0LDAuMDM4LTAuMDEyLDAuMDcxLTAuMDIxLDAuMTA5Yy0wLjAyOCwwLjA5OC0wLjA3NSwwLjE4OC0wLjE0MywwLjI3MWMtMC4wMjEsMC4wMjYtMC4wMjEsMC4wNjEtMC4wNDUsMC4wODVjLTAuMDE1LDAuMDE2LTAuMDM0LDAuMDItMC4wNTEsMC4wMzNsLTUuNDgzLDUuNDgzYy0wLjMwNiwwLjMwNy0wLjgwMiwwLjMwNy0xLjEwNiwwYy0wLjMwNy0wLjMwNS0wLjMwNy0wLjgwMSwwLTEuMTA1bDQuMTg0LTQuMTg1SDEuNzI5Yy0wLjQzNiwwLTAuNzg4LTAuMzUzLTAuNzg4LTAuNzg4UzEuMjkzLDkuMjEyLDEuNzI5LDkuMjEyelwiKSksZnVuY3Rpb24oZSl7Zm9yKHZhciB0PWUucHJvcHMuc291cmNlcyxuPWUucmVzb2x2ZSxvPW4oTCksaT1uKEgpLHI9bihSLFtvLGldKSxzPTA7czx0Lmxlbmd0aDtzKyspaWYoXCJzdHJpbmdcIj09dHlwZW9mIHRbc10pe3ZhciBhPXIuZ2V0VHlwZVNldEJ5Q2xpZW50Rm9ySW5kZXgocyk7aWYoYSlpLnJ1bkFjdGlvbnNGb3JTb3VyY2VUeXBlQW5kSW5kZXgoYSxzKTtlbHNle3ZhciBjPW8uZ2V0U291cmNlVHlwZUZyb21Mb2NhbFN0b3JhZ2VCeVVybCh0W3NdKTtjP2kucnVuQWN0aW9uc0ZvclNvdXJjZVR5cGVBbmRJbmRleChjLHMpOnIucmV0cmlldmVUeXBlV2l0aFhockZvckluZGV4KHMpfX1lbHNlIGkucnVuQWN0aW9uc0ZvclNvdXJjZVR5cGVBbmRJbmRleChcImN1c3RvbVwiLHMpfShlKSxvLmRpc3BhdGNoKFwib25Jbml0XCIpfWUub3Blbj1mdW5jdGlvbigpe3ZhciBuPWFyZ3VtZW50cy5sZW5ndGg+MCYmdm9pZCAwIT09YXJndW1lbnRzWzBdP2FyZ3VtZW50c1swXTowLGk9bS5wcmV2aW91cyxhPW0uY3VycmVudCxkPW0ubmV4dDttLmN1cnJlbnQ9bixwLml8fFMoZSksdS51cGRhdGVTdGFnZUluZGV4ZXMoKSxwLmk/KHYuYygpLHYuYSgpLHYuYihpKSx2LmIoYSksdi5iKGQpLG8uZGlzcGF0Y2goXCJvblNob3dcIikpOmIoKSxjLmRpc3BsYXlTb3VyY2VzV2hpY2hTaG91bGRCZURpc3BsYXllZCgpLHQuc2V0U2xpZGVOdW1iZXIobisxKSxkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGguY29udGFpbmVyKSxkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZChsKSxzLmFkZFJlY29tcGVuc2UoKSxyLmF0dGFjaExpc3RlbmVycygpLGYucnVuQWN0aW9ucygpLGguc213W20uY3VycmVudF0ubigpLG8uZGlzcGF0Y2goXCJvbk9wZW5cIil9fWZ1bmN0aW9uIGVlKGUsdCxuKXtyZXR1cm4oZWU9dGUoKT9SZWZsZWN0LmNvbnN0cnVjdC5iaW5kKCk6ZnVuY3Rpb24oZSx0LG4pe3ZhciBvPVtudWxsXTtvLnB1c2guYXBwbHkobyx0KTt2YXIgaT1uZXcoRnVuY3Rpb24uYmluZC5hcHBseShlLG8pKTtyZXR1cm4gbiYmbmUoaSxuLnByb3RvdHlwZSksaX0pLmFwcGx5KG51bGwsYXJndW1lbnRzKX1mdW5jdGlvbiB0ZSgpe2lmKFwidW5kZWZpbmVkXCI9PXR5cGVvZiBSZWZsZWN0fHwhUmVmbGVjdC5jb25zdHJ1Y3QpcmV0dXJuITE7aWYoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSlyZXR1cm4hMTtpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiBQcm94eSlyZXR1cm4hMDt0cnl7cmV0dXJuIEJvb2xlYW4ucHJvdG90eXBlLnZhbHVlT2YuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChCb29sZWFuLFtdLChmdW5jdGlvbigpe30pKSksITB9Y2F0Y2goZSl7cmV0dXJuITF9fWZ1bmN0aW9uIG5lKGUsdCl7cmV0dXJuKG5lPU9iamVjdC5zZXRQcm90b3R5cGVPZj9PYmplY3Quc2V0UHJvdG90eXBlT2YuYmluZCgpOmZ1bmN0aW9uKGUsdCl7cmV0dXJuIGUuX19wcm90b19fPXQsZX0pKGUsdCl9ZnVuY3Rpb24gb2UoZSl7cmV0dXJuIGZ1bmN0aW9uKGUpe2lmKEFycmF5LmlzQXJyYXkoZSkpcmV0dXJuIGllKGUpfShlKXx8ZnVuY3Rpb24oZSl7aWYoXCJ1bmRlZmluZWRcIiE9dHlwZW9mIFN5bWJvbCYmbnVsbCE9ZVtTeW1ib2wuaXRlcmF0b3JdfHxudWxsIT1lW1wiQEBpdGVyYXRvclwiXSlyZXR1cm4gQXJyYXkuZnJvbShlKX0oZSl8fGZ1bmN0aW9uKGUsdCl7aWYoIWUpcmV0dXJuO2lmKFwic3RyaW5nXCI9PXR5cGVvZiBlKXJldHVybiBpZShlLHQpO3ZhciBuPU9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChlKS5zbGljZSg4LC0xKTtcIk9iamVjdFwiPT09biYmZS5jb25zdHJ1Y3RvciYmKG49ZS5jb25zdHJ1Y3Rvci5uYW1lKTtpZihcIk1hcFwiPT09bnx8XCJTZXRcIj09PW4pcmV0dXJuIEFycmF5LmZyb20oZSk7aWYoXCJBcmd1bWVudHNcIj09PW58fC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKXJldHVybiBpZShlLHQpfShlKXx8ZnVuY3Rpb24oKXt0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIHNwcmVhZCBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKX0oKX1mdW5jdGlvbiBpZShlLHQpeyhudWxsPT10fHx0PmUubGVuZ3RoKSYmKHQ9ZS5sZW5ndGgpO2Zvcih2YXIgbj0wLG89bmV3IEFycmF5KHQpO248dDtuKyspb1tuXT1lW25dO3JldHVybiBvfWZ1bmN0aW9uIHJlKCl7Zm9yKHZhciBlPWRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiYVwiKSx0PWZ1bmN0aW9uKHQpe2lmKCFlW3RdLmhhc0F0dHJpYnV0ZShcImRhdGEtZnNsaWdodGJveFwiKSlyZXR1cm5cImNvbnRpbnVlXCI7dmFyIG49ZVt0XS5oYXNBdHRyaWJ1dGUoXCJkYXRhLWhyZWZcIik/ZVt0XS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWhyZWZcIik6ZVt0XS5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpO2lmKCFuKXJldHVybiBjb25zb2xlLndhcm4oJ1RoZSBcImRhdGEtZnNsaWdodGJveFwiIGF0dHJpYnV0ZSB3YXMgc2V0IHdpdGhvdXQgdGhlIFwiaHJlZlwiIGF0dHJpYnV0ZS4nKSxcImNvbnRpbnVlXCI7dmFyIG89ZVt0XS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWZzbGlnaHRib3hcIik7ZnNMaWdodGJveEluc3RhbmNlc1tvXXx8KGZzTGlnaHRib3hJbnN0YW5jZXNbb109bmV3IEZzTGlnaHRib3gpO3ZhciBpPW51bGw7XCIjXCI9PT1uLmNoYXJBdCgwKT8oaT1kb2N1bWVudC5nZXRFbGVtZW50QnlJZChuLnN1YnN0cmluZygxKSkuY2xvbmVOb2RlKCEwKSkucmVtb3ZlQXR0cmlidXRlKFwiaWRcIik6aT1uLGZzTGlnaHRib3hJbnN0YW5jZXNbb10ucHJvcHMuc291cmNlcy5wdXNoKGkpLGZzTGlnaHRib3hJbnN0YW5jZXNbb10uZWxlbWVudHMuYS5wdXNoKGVbdF0pO3ZhciByPWZzTGlnaHRib3hJbnN0YW5jZXNbb10ucHJvcHMuc291cmNlcy5sZW5ndGgtMTtlW3RdLm9uY2xpY2s9ZnVuY3Rpb24oZSl7ZS5wcmV2ZW50RGVmYXVsdCgpLGZzTGlnaHRib3hJbnN0YW5jZXNbb10ub3BlbihyKX0sZChcInR5cGVzXCIsXCJkYXRhLXR5cGVcIiksZChcInZpZGVvc1Bvc3RlcnNcIixcImRhdGEtdmlkZW8tcG9zdGVyXCIpLGQoXCJjdXN0b21DbGFzc2VzXCIsXCJkYXRhLWNsYXNzXCIpLGQoXCJjdXN0b21DbGFzc2VzXCIsXCJkYXRhLWN1c3RvbS1jbGFzc1wiKTtmb3IodmFyIHM9W1wiaHJlZlwiLFwiZGF0YS1mc2xpZ2h0Ym94XCIsXCJkYXRhLWhyZWZcIixcImRhdGEtdHlwZVwiLFwiZGF0YS12aWRlby1wb3N0ZXJcIixcImRhdGEtY2xhc3NcIixcImRhdGEtY3VzdG9tLWNsYXNzXCJdLGE9ZVt0XS5hdHRyaWJ1dGVzLGM9ZnNMaWdodGJveEluc3RhbmNlc1tvXS5wcm9wcy5jdXN0b21BdHRyaWJ1dGVzLGw9MDtsPGEubGVuZ3RoO2wrKylpZigtMT09PXMuaW5kZXhPZihhW2xdLm5hbWUpJiZcImRhdGEtXCI9PT1hW2xdLm5hbWUuc3Vic3RyKDAsNSkpe2Nbcl18fChjW3JdPXt9KTt2YXIgdT1hW2xdLm5hbWUuc3Vic3RyKDUpO2Nbcl1bdV09YVtsXS52YWx1ZX1mdW5jdGlvbiBkKG4saSl7ZVt0XS5oYXNBdHRyaWJ1dGUoaSkmJihmc0xpZ2h0Ym94SW5zdGFuY2VzW29dLnByb3BzW25dW3JdPWVbdF0uZ2V0QXR0cmlidXRlKGkpKX19LG49MDtuPGUubGVuZ3RoO24rKyl0KG4pO3ZhciBvPU9iamVjdC5rZXlzKGZzTGlnaHRib3hJbnN0YW5jZXMpO3dpbmRvdy5mc0xpZ2h0Ym94PWZzTGlnaHRib3hJbnN0YW5jZXNbb1tvLmxlbmd0aC0xXV19d2luZG93LkZzTGlnaHRib3g9ZnVuY3Rpb24oKXt2YXIgZT10aGlzO3RoaXMucHJvcHM9e3NvdXJjZXM6W10sY3VzdG9tQXR0cmlidXRlczpbXSxjdXN0b21DbGFzc2VzOltdLHR5cGVzOltdLHZpZGVvc1Bvc3RlcnM6W10sc2xpZGVEaXN0YW5jZTouM30sdGhpcy5kYXRhPXtpc0Z1bGxzY3JlZW5PcGVuOiExLG1heFNvdXJjZVdpZHRoOjAsbWF4U291cmNlSGVpZ2h0OjAsc2Nyb2xsYmFyV2lkdGg6MH0sdGhpcy5pc2w9W10sdGhpcy5zb3VyY2VQb2ludGVyUHJvcHM9e2Rvd25TY3JlZW5YOm51bGwsaXNQb2ludGVyaW5nOiExLGlzU291cmNlRG93bkV2ZW50VGFyZ2V0OiExLHN3aXBlZFg6MH0sdGhpcy5zdGFnZUluZGV4ZXM9e30sdGhpcy5lbGVtZW50cz17YTpbXSxjb250YWluZXI6bnVsbCxzbGlkZVN3aXBpbmdIb3ZlcmVyOm51bGwsc213OltdLHNvdXJjZVdyYXBwZXJzQ29udGFpbmVyOm51bGwsc291cmNlczpbXSxzb3VyY2VBbmltYXRpb25XcmFwcGVyczpbXX0sdGhpcy5jb21wb25lbnRzU2VydmljZXM9e3NldFNsaWRlTnVtYmVyOmZ1bmN0aW9uKCl7fX0sdGhpcy5yZXNvbHZlPWZ1bmN0aW9uKHQpe3ZhciBuPWFyZ3VtZW50cy5sZW5ndGg+MSYmdm9pZCAwIT09YXJndW1lbnRzWzFdP2FyZ3VtZW50c1sxXTpbXTtyZXR1cm4gbi51bnNoaWZ0KGUpLGVlKHQsb2UobikpfSx0aGlzLmNvbGxlY3Rpb25zPXtzb3VyY2VMb2FkSGFuZGxlcnM6W10sc291cmNlc1JlbmRlckZ1bmN0aW9uczpbXSxzb3VyY2VTaXplcnM6W119LHRoaXMuY29yZT17ZXZlbnRzRGlzcGF0Y2hlcjp7fSxnbG9iYWxFdmVudHNDb250cm9sbGVyOnt9LGxpZ2h0Ym94Q2xvc2VyOnt9LGxpZ2h0Ym94VXBkYXRlcjp7fSxzY3JvbGxiYXJSZWNvbXBlbnNvcjp7fSxzbGlkZUNoYW5nZUZhY2FkZTp7fSxzbGlkZUluZGV4Q2hhbmdlcjp7fSxzb3VyY2VzUG9pbnRlckRvd246e30sc291cmNlRGlzcGxheUZhY2FkZTp7fSxzdGFnZU1hbmFnZXI6e30sd2luZG93UmVzaXplQWN0aW9uZXI6e319LHRoaXMuZnM9e30sdGhpcy5zd3M9e30sWih0aGlzKSx0aGlzLmNsb3NlPWZ1bmN0aW9uKCl7cmV0dXJuIGUuY29yZS5saWdodGJveENsb3Nlci5jbG9zZUxpZ2h0Ym94KCl9fSx3aW5kb3cuZnNMaWdodGJveEluc3RhbmNlcz17fSxyZSgpLHdpbmRvdy5yZWZyZXNoRnNMaWdodGJveD1mdW5jdGlvbigpe2Zvcih2YXIgZSBpbiBmc0xpZ2h0Ym94SW5zdGFuY2VzKXt2YXIgdD1mc0xpZ2h0Ym94SW5zdGFuY2VzW2VdLnByb3BzO2ZzTGlnaHRib3hJbnN0YW5jZXNbZV09bmV3IEZzTGlnaHRib3gsZnNMaWdodGJveEluc3RhbmNlc1tlXS5wcm9wcz10LGZzTGlnaHRib3hJbnN0YW5jZXNbZV0ucHJvcHMuc291cmNlcz1bXSxmc0xpZ2h0Ym94SW5zdGFuY2VzW2VdLmVsZW1lbnRzLmE9W119cmUoKX19XSl9KSk7IiwgImltcG9ydCBmc2xpZ2h0Ym94IGZyb20gJ2ZzbGlnaHRib3gnO1xuXG53aW5kb3cuZnNsaWdodGJveCA9IGZzbGlnaHRib3g7XG5cbndpbmRvdy5TaW1wbGVMaWdodEJveCA9IHtcbiAgICBnZXRWaWV3ZXJVUkwodXJsLCBleHRlbnNpb24gPSBudWxsKSB7XG4gICAgICAgIC8vIGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL3RoZWVsMGphL2I5ZTQ0YTk2MWY4OTJjY2Y0M2UyMTdhYjc0Yjk0MTdiXG4gICAgICAgIC8vIEV4dHJhY3QgdGhlIGZpbGUgZXh0ZW5zaW9uXG5cbiAgICAgICAgaWYgKCFleHRlbnNpb24pIHtcbiAgICAgICAgICAgIGV4dGVuc2lvbiA9IHVybC5zcGxpdCgnLicpLnBvcCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3dpdGNoIChleHRlbnNpb24pIHtcbiAgICAgICAgICAgIGNhc2UgJ3BkZic6XG4gICAgICAgICAgICAgICAgcmV0dXJuIGBodHRwczovL2RvY3MuZ29vZ2xlLmNvbS9hL2JvdXdmbG93LmJlL3ZpZXdlcj91cmw9JHt1cmx9JmVtYmVkZGVkPXRydWVgO1xuICAgICAgICAgICAgY2FzZSAnZG9jJzpcbiAgICAgICAgICAgIGNhc2UgJ2RvY3gnOlxuICAgICAgICAgICAgY2FzZSAneGxzJzpcbiAgICAgICAgICAgIGNhc2UgJ3hsc3gnOlxuICAgICAgICAgICAgY2FzZSAncHB0JzpcbiAgICAgICAgICAgIGNhc2UgJ3BwdHgnOlxuICAgICAgICAgICAgICAgIHJldHVybiBgaHR0cHM6Ly92aWV3Lm9mZmljZWFwcHMubGl2ZS5jb20vb3AvZW1iZWQuYXNweD9zcmM9JHtlbmNvZGVVUklDb21wb25lbnQodXJsKX1gO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gdXJsO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBnZXRNdWx0aXBsZUltZ1VSTChlbGVtZW50KSB7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmIChlbGVtZW50ICE9IHVuZGVmaW5lZCAmJiBlbGVtZW50ICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBsZXQgaW1nQXJyID0gZWxlbWVudD8uY2xvc2VzdCgnZGl2Jyk/LnF1ZXJ5U2VsZWN0b3JBbGwoJ2ltZy5zaW1wbGUtbGlnaHQtYm94LWltZy1pbmRpY2F0b3InKTtcbiAgICAgICAgICAgICAgICBpZiAoaW1nQXJyICE9IHVuZGVmaW5lZCAmJiBBcnJheS5mcm9tKGltZ0FycikubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gQXJyYXkuZnJvbShpbWdBcnIsIChpbWdFbG0pID0+IGltZ0VsbS5nZXRBdHRyaWJ1dGUoJ3NyYycpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAvL1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSxcbiAgICBjcmVhdGVJZnJhbWUodXJsLCBleHRlbnNpb24pIHtcbiAgICAgICAgLy8gQ3JlYXRlIGEgbmV3IGlmcmFtZSBlbGVtZW50XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG1wLWlmcmFtZVwiKT8ucmVtb3ZlKCk7XG4gICAgICAgIGxldCBpZnJhbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpZnJhbWUnKTtcbiAgICAgICAgaWZyYW1lLnNyYyA9IHRoaXMuZ2V0Vmlld2VyVVJMKHVybCwgZXh0ZW5zaW9uKTtcbiAgICAgICAgaWZyYW1lLmlkID0gXCJ0bXAtaWZyYW1lXCI7XG4gICAgICAgIGlmcmFtZS5jbGFzc05hbWUgPSBcImZzbGlnaHRib3gtc291cmNlXCI7XG4gICAgICAgIGlmcmFtZS5mcmFtZUJvcmRlciA9IFwiMFwiO1xuICAgICAgICBpZnJhbWUuYWxsb3cgPSBcImF1dG9wbGF5OyBmdWxsc2NyZWVuXCI7XG4gICAgICAgIGlmcmFtZS5zdHlsZSA9IFwid2lkdGg6IDgwdnc7IGhlaWdodDogODB2aDtcIjtcbiAgICAgICAgaWZyYW1lLnNldEF0dHJpYnV0ZShcImFsbG93RnVsbFNjcmVlblwiLCBcIlwiKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChpZnJhbWUpO1xuICAgIH0sXG4gICAgb3Blbih1cmwsIGV4dGVuc2lvbiA9IG51bGwpIHtcbiAgICAgICAgY29uc3QgbGlnaHRib3ggPSBuZXcgRnNMaWdodGJveCgpO1xuICAgICAgICBpZiAodXJsICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlSWZyYW1lKHVybCwgZXh0ZW5zaW9uKTtcbiAgICAgICAgICAgIGxpZ2h0Ym94LnByb3BzLnNvdXJjZXMgPSBbZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0bXAtaWZyYW1lXCIpXTtcbiAgICAgICAgICAgIGxpZ2h0Ym94LnByb3BzLm9uQ2xvc2UgPSBmdW5jdGlvbihpbnN0YW5jZSkge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG1wLWlmcmFtZVwiKT8ucmVtb3ZlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsaWdodGJveC5vcGVuKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICB9XG59Il0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBLEtBQUMsU0FBUyxHQUFFLEdBQUU7QUFBQyxVQUFHLFlBQVUsT0FBTyxXQUFTLFlBQVUsT0FBTztBQUFPLGVBQU8sVUFBUSxFQUFFO0FBQUEsZUFBVSxjQUFZLE9BQU8sVUFBUSxPQUFPO0FBQUksZUFBTyxDQUFDLEdBQUUsQ0FBQztBQUFBLFdBQU07QUFBQyxZQUFJLElBQUUsRUFBRTtBQUFFLGlCQUFRLEtBQUs7QUFBRSxXQUFDLFlBQVUsT0FBTyxVQUFRLFVBQVEsR0FBRyxDQUFDLElBQUUsRUFBRSxDQUFDO0FBQUEsTUFBQztBQUFBLElBQUMsRUFBRSxRQUFRLFdBQVU7QUFBQyxhQUFPLFNBQVMsR0FBRTtBQUFDLFlBQUksSUFBRSxDQUFDO0FBQUUsaUJBQVMsRUFBRSxHQUFFO0FBQUMsY0FBRyxFQUFFLENBQUM7QUFBRSxtQkFBTyxFQUFFLENBQUMsRUFBRTtBQUFRLGNBQUksSUFBRSxFQUFFLENBQUMsSUFBRSxFQUFDLEdBQUUsR0FBRSxHQUFFLE9BQUcsU0FBUSxDQUFDLEVBQUM7QUFBRSxpQkFBTyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsU0FBUSxHQUFFLEVBQUUsU0FBUSxDQUFDLEdBQUUsRUFBRSxJQUFFLE1BQUcsRUFBRTtBQUFBLFFBQU87QUFBQyxlQUFPLEVBQUUs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QUNaLGtCQUFZLElBQUksTUFBTSxHQUFHLEVBQUUsSUFBSTtBQUFBLElBQ25DO0FBRUEsWUFBUSxXQUFXO0FBQUEsTUFDZixLQUFLO0FBQ0QsZUFBTyxvREFBb0QsR0FBRztBQUFBLE1BQ2xFLEtBQUs7QUFBQSxNQUNMLEtBQUs7QUFBQSxNQUNMLEtBQUs7QUFBQSxNQUNMLEtBQUs7QUFBQSxNQUNMLEtBQUs7QUFBQSxNQUNMLEtBQUs7QUFDRCxlQUFPLHNEQUFzRCxtQkFBbUIsR0FBRyxDQUFDO0FBQUEsTUFDeEY7QUFDSSxlQUFPO0FBQUEsSUFDZjtBQUFBLEVBQ0o7QUFBQSxFQUNBLGtCQUFrQixTQUFTO0FBRXZCLFFBQUk7QUFDQSxVQUFJLFdBQVcsVUFBYSxXQUFXLE1BQU07QUFDekMsWUFBSSxTQUFTLFNBQVMsUUFBUSxLQUFLLEdBQUcsaUJBQWlCLG9DQUFvQztBQUMzRixZQUFJLFVBQVUsVUFBYSxNQUFNLEtBQUssTUFBTSxFQUFFLFNBQVMsR0FBRztBQUN0RCxpQkFBTyxNQUFNLEtBQUssUUFBUSxDQUFDLFdBQVcsT0FBTyxhQUFhLEtBQUssQ0FBQztBQUFBLFFBQ3BFO0FBQUEsTUFDSjtBQUFBLElBQ0osU0FBUyxPQUFPO0FBQUEsSUFFaEI7QUFFQSxXQUFPO0FBQUEsRUFDWDtBQUFBLEVBQ0EsYUFBYSxLQUFLLFdBQVc7QUFFekIsYUFBUyxlQUFlLFlBQVksR0FBRyxPQUFPO0FBQzlDLFFBQUksU0FBUyxTQUFTLGNBQWMsUUFBUTtBQUM1QyxXQUFPLE1BQU0sS0FBSyxhQUFhLEtBQUssU0FBUztBQUM3QyxXQUFPLEtBQUs7QUFDWixXQUFPLFlBQVk7QUFDbkIsV0FBTyxjQUFjO0FBQ3JCLFdBQU8sUUFBUTtBQUNmLFdBQU8sUUFBUTtBQUNmLFdBQU8sYUFBYSxtQkFBbUIsRUFBRTtBQUN6QyxhQUFTLEtBQUssWUFBWSxNQUFNO0FBQUEsRUFDcEM7QUFBQSxFQUNBLEtBQUssS0FBSyxZQUFZLE1BQU07QUFDeEIsVUFBTSxXQUFXLElBQUksV0FBVztBQUNoQyxRQUFJLFFBQVEsUUFBVztBQUNuQixXQUFLLGFBQWEsS0FBSyxTQUFTO0FBQ2hDLGVBQVMsTUFBTSxVQUFVLENBQUMsU0FBUyxlQUFlLFlBQVksQ0FBQztBQUMvRCxlQUFTLE1BQU0sVUFBVSxTQUFTLFVBQVU7QUFDeEMsaUJBQVMsZUFBZSxZQUFZLEdBQUcsT0FBTztBQUFBLE1BQ2xEO0FBQ0EsZUFBUyxLQUFLO0FBQ2Q7QUFBQSxJQUNKO0FBQUEsRUFDSjtBQUNKOyIsCiAgIm5hbWVzIjogWyJlIiwgInQiLCAibiIsICJvIiwgImkiLCAiciIsICJzIiwgImEiLCAiYyIsICJsIiwgImYiLCAicCIsICJoIiwgInUiLCAiZCIsICJtIiwgInYiLCAiYiIsICJmc2xpZ2h0Ym94Il0KfQo=
