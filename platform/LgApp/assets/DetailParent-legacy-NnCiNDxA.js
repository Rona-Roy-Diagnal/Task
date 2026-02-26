;
(function () {
  System.register(['./index-legacy-DtSjVZOm.js', './Navbar-legacy-8DnhxB_k.js', './Useanalytics-legacy-BsLXquUc.js', './ContentService-legacy-gYYJEAne.js', './UseSingleNav-legacy-CkbPRhX5.js'], function (exports, module) {
    'use strict';

    var reactExports, useParams, useNavigate, distExports, jsxRuntimeExports, Navbar, Useanalytics, fetchContentDetails;
    return {
      setters: [module => {
        reactExports = module.r;
        useParams = module.b;
        useNavigate = module.u;
        distExports = module.d;
        jsxRuntimeExports = module.j;
      }, module => {
        Navbar = module.default;
      }, module => {
        Useanalytics = module.U;
      }, module => {
        fetchContentDetails = module.f;
      }, null],
      execute: function () {
        var __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "\r\n .details{\r\n  display: flex;\r\n  justify-content: space-between;\r\n  margin: 10px;\r\n\r\n }\r\n .overview {\r\n    font-size: 16px;\r\n    color: white;\r\n    margin: 8px 8px;\r\n    background: transparent;\r\n  }\r\n .left-content{\r\n    margin: 3px;\r\n      background: transparent;\r\n }\r\n\r\n .movie-img{\r\n  aspect-ratio: 16/9;\r\n  border-radius: 5px;\r\n    margin: 8px;\r\n }\r\n.right-content{\r\n  top: 0;\r\n  left: 8px;\r\nmargin: 3px;\r\nmargin-top: 22px;\r\nbackground: transparent;\r\nz-index: 10;\r\n}\r\n\r\n.detail-title {\r\n  color: #e50914;\r\n  top: 0;\r\n  margin: 8px ;\r\n  background: transparent;\r\n}\r\n.p-name {\r\n  box-sizing: border-box;\r\n  color: rgb(169, 173, 190);\r\n  font-family: FontBase;\r\n  margin-bottom: 5px;\r\n    background: transparent;\r\n}\r\n\r\n.genre-div {\r\n  white-space: nowrap;\r\n  display: block;\r\n  margin-bottom: 5px;\r\n    background: transparent;\r\n}\r\n.desc-label {\r\n  box-sizing: border-box;\r\n  color: rgb(169, 173, 190);\r\n  font-family: FontBase;\r\n  margin-bottom: 5px;\r\n    background: transparent;\r\n}\r\n.play-btn{\r\n  margin: 8px;\r\n}\r\n.play-btn:hover{\r\n  transform: scale(1.1);\r\n}\r\n.title-rating{\r\n    background: transparent;\r\n}\r\n.overview-btn{\r\n    background: transparent;\r\n}\r\n.not-available{\r\n  color: white;\r\n}/*$vite$:1*/";
        document.head.appendChild(__vite_style__);
        const Details = () => {
          var _a, _b, _c, _d, _e, _f, _g, _h, _i;
          const [details, setDetails] = reactExports.useState(null);
          const {
            id
          } = useParams();
          const navigate = useNavigate();
          const {
            contentSelect
          } = Useanalytics();
          const handlePlay = () => {
            navigate("/videoplay", {
              state: {
                details
              }
            });
          };
          const videoBtn = distExports.useFocusable({
            focusKey: "video_btn",
            onEnterPress: () => {
              handlePlay();
              contentSelect({
                contentId: details.ContentGuid,
                contentTitle: details.title,
                contentGenre: details.genre
              });
            },
            onArrowPress: direction => {
              if (direction == "up") {
                distExports.setFocus("nav_key");
              } else if (direction == "down") {
                distExports.setFocus("rowFocusKey");
              }
              return false;
            }
          });
          reactExports.useEffect(() => {
            if (id == void 0) return;
            fetchContentDetails(id).then(setDetails);
            videoBtn.focusSelf();
          }, [id]);
          const detaiRef = distExports.useFocusable({
            onFocus: () => {
              videoBtn.focusSelf();
            }
          });
          if (!details) {
            return /* @__PURE__ */jsxRuntimeExports.jsx("p", {
              className: "not-available",
              children: " Currently Not Available"
            });
          }
          const imageLink = ((_d = (_c = (_b = (_a = details == null ? void 0 : details.trailers) == null ? void 0 : _a[0]) == null ? void 0 : _b.images) == null ? void 0 : _c[0]) == null ? void 0 : _d.url) || ((_f = (_e = details == null ? void 0 : details.images) == null ? void 0 : _e[0]) == null ? void 0 : _f.url);
          const imageUrl = imageLink ? imageLink : "/notfound.png";
          if (!imageUrl) return null;
          return /* @__PURE__ */jsxRuntimeExports.jsx("div", {
            ref: detaiRef.ref,
            children: /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
              className: "details",
              children: [/* @__PURE__ */jsxRuntimeExports.jsx("div", {
                className: "left-content",
                children: /* @__PURE__ */jsxRuntimeExports.jsx("img", {
                  className: "movie-img",
                  src: imageUrl,
                  loading: "lazy",
                  alt: details.title
                })
              }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                className: "right-content",
                children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                  className: "title-rating",
                  children: [/* @__PURE__ */jsxRuntimeExports.jsxs("h1", {
                    className: "detail-title",
                    children: [details == null ? void 0 : details.title, " "]
                  }), /* @__PURE__ */jsxRuntimeExports.jsx("p", {
                    className: "overview",
                    children: details == null ? void 0 : details.releaseYear
                  }), /* @__PURE__ */jsxRuntimeExports.jsx("p", {
                    className: "overview",
                    children: details == null ? void 0 : details.description
                  })]
                }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                  className: "overview-btn",
                  children: [/* @__PURE__ */jsxRuntimeExports.jsx("div", {
                    className: "genre-div",
                    children: /* @__PURE__ */jsxRuntimeExports.jsxs("p", {
                      className: "overview",
                      children: [/* @__PURE__ */jsxRuntimeExports.jsx("label", {
                        className: "desc-label",
                        children: "Genre | "
                      }), (details == null ? void 0 : details.genre[0]) + ", " + (details == null ? void 0 : details.genre[1])]
                    })
                  }), /* @__PURE__ */jsxRuntimeExports.jsxs("p", {
                    className: "overview",
                    children: [/* @__PURE__ */jsxRuntimeExports.jsx("label", {
                      className: "desc-label",
                      children: "Cast | "
                    }), ((_g = details == null ? void 0 : details.actor[0]) == null ? void 0 : _g.personName) + ", " + ((_h = details == null ? void 0 : details.actor[1]) == null ? void 0 : _h.personName)]
                  }), /* @__PURE__ */jsxRuntimeExports.jsxs("p", {
                    className: "overview",
                    children: [/* @__PURE__ */jsxRuntimeExports.jsx("label", {
                      className: "desc-label",
                      children: "Director | "
                    }), (_i = details == null ? void 0 : details.director[0]) == null ? void 0 : _i.personName]
                  }), /* @__PURE__ */jsxRuntimeExports.jsx("button", {
                    ref: videoBtn.ref,
                    className: `play-btn ${videoBtn.focused ? "focused" : ""}`,
                    onClick: handlePlay,
                    children: "Play video"
                  })]
                })]
              })]
            })
          });
        };
        const DetailParent = exports("default", () => {
          const {
            ref,
            focusKey
          } = distExports.useFocusable({
            trackChildren: true
          });
          return /* @__PURE__ */jsxRuntimeExports.jsx("div", {
            ref,
            children: /* @__PURE__ */jsxRuntimeExports.jsxs(distExports.FocusContext.Provider, {
              value: focusKey,
              children: [/* @__PURE__ */jsxRuntimeExports.jsx(Navbar, {}), /* @__PURE__ */jsxRuntimeExports.jsx(Details, {})]
            })
          });
        });
      }
    };
  });
})();
