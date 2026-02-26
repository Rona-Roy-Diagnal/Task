;
(function () {
  System.register(['./index-legacy-DtSjVZOm.js', './Useanalytics-legacy-BsLXquUc.js', './ContentService-legacy-gYYJEAne.js'], function (exports, module) {
    'use strict';

    var distExports, reactExports, jsxRuntimeExports, useNavigate, logApiError, Useanalytics, fetchContentByGenre;
    return {
      setters: [module => {
        distExports = module.d;
        reactExports = module.r;
        jsxRuntimeExports = module.j;
        useNavigate = module.u;
        logApiError = module.w;
      }, module => {
        Useanalytics = module.U;
      }, module => {
        fetchContentByGenre = module.a;
      }],
      execute: function () {
        var __vite_style__ = document.createElement('style');
        __vite_style__.textContent = ".list-container {\r\n  padding: 15px 15px;\r\n}\r\n\r\n.layout-header h2 {\r\n  color: #fff;\r\n  font-size: 20px;\r\n  font-weight: 600;\r\n  margin-bottom: 12px;\r\n}\r\n\r\n.row-wrapper {\r\n  position: relative; \r\n  display: flex;\r\n  align-items: center;\r\n  width: 100%;\r\n}\r\n\r\n.layout-body {\r\n  display: flex;\r\n  gap: 12px;\r\n  margin: 8px 8px 8px 5px;\r\n  overflow-x: auto;\r\n  scroll-behavior: auto;\r\n}\r\n\r\n.layout-body::-webkit-scrollbar {\r\n  display: none;\r\n}\r\n\r\n\r\n.image-wrapper {\r\n  width: 100%;\r\n  height: 100%;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  overflow: hidden;\r\n\r\n  border-radius: 4px;\r\n}\r\n\r\n.normal-card {\r\n  position: relative;\r\n  width: 500;\r\n \r\n  /* aspect-ratio: auto 16/9; */\r\n  flex-shrink: 0; \r\n  cursor: pointer;\r\n  transition: transform 0.25s ease;\r\n  border-radius: 4px;\r\n}\r\n\r\n.normal-row .div-horizontal {\r\n  flex: 0 0 auto;\r\n  width: 23%;\r\n  margin: 8px;\r\n  aspect-ratio: 16/9;\r\n}\r\n\r\n.normal-card .video-img {\r\n  width: 100%;\r\n  height: 100%;\r\n  display: block;\r\n  object-fit: contain;\r\n  /* aspect-ratio: 16/9; */\r\n  border-radius: 4px;\r\n}\r\n\r\n.top10-card {\r\n  position: relative;\r\n  height: 250px;\r\n  aspect-ratio: 2/3;\r\n  flex-shrink: 0;\r\n  padding: 5px;\r\n  cursor: pointer;\r\n  transition: transform 0.25s ease;\r\n  border-radius: 4px;\r\n}\r\n\r\n.top10-rank {\r\n  position: absolute;\r\n  bottom: 10px;\r\n  left: -8px;\r\n  z-index: 5;\r\n  color: white;\r\n  font-size: 85px;\r\n  font-weight: 900;\r\n  line-height: 1;\r\n  text-shadow: 2px 2px 0 rgba(0,0,0,0.8), 4px 4px 8px rgba(0,0,0,0.6);\r\n  pointer-events: none;\r\n  margin-left: 20px;\r\n  background-color: transparent;\r\n}\r\n\r\n.top10-row .div-horizontal {\r\n  flex: 0 0 auto;\r\n  width: 18%;\r\n  margin: 10px 13px;\r\n}\r\n\r\n.top10-card .video-img {\r\n  width: 100%;\r\n  height: 100%;\r\n  display: block;\r\n  object-fit: contain;\r\n  object-position: right;\r\n  border-radius: 4px;\r\n}\r\n\r\n\r\n.normal-card:hover,\r\n.top10-card:hover, \r\n.focused {\r\n  transform: scale(1.02);\r\n  z-index: 10;\r\n  outline: 3px solid white;\r\n}\r\n\r\n.focused {\r\n  transition: transform 0.2s ease, outline 0.2s ease;\r\n  outline: 2px solid white;\r\n  outline-offset: 2px;\r\n}\r\n\r\n\r\n.arrow {\r\n  position: absolute;\r\n  top: 50%;\r\n  transform: translateY(-50%);\r\n  width: 60px;\r\n  height: 70px;\r\n  background: linear-gradient(to right, rgba(0,0,0,0.9), transparent);\r\n  border: none;\r\n  color: white;\r\n  z-index: 20;\r\n  cursor: pointer;\r\n  \r\n  \r\n  opacity: 0; \r\n  /* transition: opacity 0.3s ease, background 0.3s ease; */\r\n  \r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  font-size: 50px;\r\n}\r\n\r\n.right-arrow {\r\n  right: 0;\r\n}\r\n.scroll-cont{\r\n  display: flex;\r\n  overflow-x: hidden;\r\n  position: relative;\r\n}\r\n.left-arrow {\r\n  left: 0;\r\n}\r\n\r\n.arrow.visible-arrow {\r\n  opacity: 1;\r\n  background: rgba(0, 0, 0, 0.8);\r\n  outline: 4px solid white;\r\n  outline-offset: -4px;\r\n  z-index: 30;\r\n}\r\n\r\n.popup {\r\n  opacity: 0;\r\n}\r\n.row-wrapper:hover .arrow {\r\n  opacity: 1;\r\n}\r\n\r\n\r\n/*$vite$:1*/";
        document.head.appendChild(__vite_style__);
        const Card = ({
          video,
          index,
          rank,
          isTop10,
          onEnter,
          onFocusKeyReady,
          // isFirst,
          // isLast,
          isAbsoluteFirst,
          isAbsoluteLast
        }) => {
          var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
          const {
            contentSelect
          } = Useanalytics();
          const {
            ref,
            focused,
            focusKey
          } = distExports.useFocusable({
            onEnterPress: () => onEnter(video.contentGuid),
            onArrowPress: direction => {
              if (direction === "left" && isAbsoluteFirst) {
                return false;
              }
              if (direction === "right" && isAbsoluteLast) {
                return false;
              }
              return true;
            },
            onFocus: () => {
              ref.current.scrollIntoView({
                behaviour: "smooth",
                block: "nearest",
                inline: "center"
              }), contentSelect({
                contentId: video.ContentGuid,
                contentTitle: video.title,
                contentGenre: video.genre
              });
            }
          });
          const refer = reactExports.useRef(null);
          reactExports.useEffect(() => {
            if (focusKey && index === 0 && onFocusKeyReady) onFocusKeyReady(focusKey);
          }, [focusKey, index, onFocusKeyReady]);
          const imageLink = isTop10 ? ((_b = (_a = video == null ? void 0 : video.images) == null ? void 0 : _a[5]) == null ? void 0 : _b.url) || ((_f = (_e = (_d = (_c = video == null ? void 0 : video.trailers) == null ? void 0 : _c[0]) == null ? void 0 : _d.images) == null ? void 0 : _e[5]) == null ? void 0 : _f.url) : ((_h = (_g = video == null ? void 0 : video.images) == null ? void 0 : _g[7]) == null ? void 0 : _h.url) || ((_l = (_k = (_j = (_i = video == null ? void 0 : video.trailers) == null ? void 0 : _i[0]) == null ? void 0 : _j.images) == null ? void 0 : _k[7]) == null ? void 0 : _l.url);
          const imageUrl = imageLink ? imageLink : "/notfound.png";
          if (!imageUrl) return null;
          return /* @__PURE__ */jsxRuntimeExports.jsx(distExports.FocusContext.Provider, {
            value: focusKey,
            children: /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
              ref,
              className: `div-horizontal ${isTop10 ? "top10-card" : "normal-card"} ${focused ? "focused" : ""}`,
              onClick: () => onEnter(video.contentGuid),
              children: [isTop10 && /* @__PURE__ */jsxRuntimeExports.jsx("div", {
                className: "top10-rank",
                children: rank
              }), /* @__PURE__ */jsxRuntimeExports.jsx("div", {
                className: "image-wrapper",
                ref: refer,
                children: /* @__PURE__ */jsxRuntimeExports.jsx("img", {
                  src: imageUrl,
                  className: "video-img",
                  alt: video.title,
                  loading: "lazy"
                })
              })]
            })
          });
        };
        const ListMovies = exports("default", ({
          genre,
          title,
          isTop10 = false,
          excludeId,
          onFirstCardFocus
          // onDataLoaded
        }) => {
          const [videos, setVideos] = reactExports.useState([]);
          const navigate = useNavigate();
          const {
            ref: rowRef,
            focusKey: rowFocusKey
          } = distExports.useFocusable({
            trackChildren: true,
            onArrowPress: direction => {
              if (direction == "up" && onFirstCardFocus) {
                distExports.setFocus("nav_key");
              }
              return false;
            }
          });
          const dist = 900;
          const scrollRef = reactExports.useRef(null);
          const [scrolltoLeft, setScrolltoLeft] = reactExports.useState(false);
          const [scrolltoRight, setScrolltoRight] = reactExports.useState(false);
          const updateScroll = () => {
            const elmt = scrollRef.current;
            if (!elmt) return;
            setScrolltoLeft(elmt.scrollLeft > 0);
            setScrolltoRight(elmt.scrollLeft + elmt.clientWidth + 1 < elmt.scrollWidth);
          };
          const scrollLeft = () => {
            var _a;
            (_a = scrollRef.current) == null ? void 0 : _a.scrollBy({
              left: -dist,
              behavior: "smooth"
            });
          };
          const scrollRight = () => {
            var _a;
            (_a = scrollRef.current) == null ? void 0 : _a.scrollBy({
              left: dist,
              behavior: "smooth"
            });
          };
          reactExports.useEffect(() => {
            updateScroll();
          }, [videos]);
          reactExports.useEffect(() => {
            try {
              fetchContentByGenre(genre).then(data => {
                const filtered = excludeId ? data.filter(item => item.contentGuid !== excludeId) : data;
                setVideos(filtered);
              });
            } catch (error) {
              logApiError("General", error.config.data, error.response.data, error.response.status);
            }
          }, [genre, excludeId]);
          return /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
            className: "list-container",
            children: [/* @__PURE__ */jsxRuntimeExports.jsx("div", {
              className: "layout-header",
              children: /* @__PURE__ */jsxRuntimeExports.jsx("h2", {
                children: title
              })
            }), /* @__PURE__ */jsxRuntimeExports.jsx("div", {
              ref: rowRef,
              className: `layout-body ${isTop10 ? "top10-row" : "normal-row"}`,
              children: /* @__PURE__ */jsxRuntimeExports.jsx(distExports.FocusContext.Provider, {
                value: rowFocusKey,
                children: /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                  tabIndex: 0,
                  className: "row-wrapper",
                  onScroll: updateScroll,
                  children: [scrolltoLeft && /* @__PURE__ */jsxRuntimeExports.jsx("button", {
                    className: "arrow left-arrow",
                    onClick: scrollLeft,
                    children: "<"
                  }), /* @__PURE__ */jsxRuntimeExports.jsx("div", {
                    className: "scroll-cont",
                    ref: scrollRef,
                    onScroll: updateScroll,
                    children: videos.map((video, index) => {
                      const globalIndex = index + 1;
                      return /* @__PURE__ */jsxRuntimeExports.jsx(Card, {
                        video,
                        index,
                        rank: globalIndex,
                        isTop10,
                        rowTitle: title,
                        onEnter: id => navigate(`/details/${id}`),
                        onFocusKeyReady: key => index === 0 && (onFirstCardFocus == null ? void 0 : onFirstCardFocus(key)),
                        isAbsoluteFirst: index === 0,
                        isAbsoluteLast: index === video.length - 1
                      }, video.contentGuid);
                    })
                  }), scrolltoRight && /* @__PURE__ */jsxRuntimeExports.jsx("button", {
                    className: "arrow right-arrow",
                    onClick: scrollRight,
                    children: ">"
                  })]
                })
              })
            })]
          });
        });
      }
    };
  });
})();
