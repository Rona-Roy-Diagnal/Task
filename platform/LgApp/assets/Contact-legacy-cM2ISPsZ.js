;
(function () {
  System.register(['./index-legacy-DtSjVZOm.js'], function (exports, module) {
    'use strict';

    var jsxRuntimeExports;
    return {
      setters: [module => {
        jsxRuntimeExports = module.j;
      }],
      execute: function () {
        var __vite_style__ = document.createElement('style');
        __vite_style__.textContent = ".container{\r\n     margin: 0;\r\n      padding: 0;\r\n      font-family: Arial, sans-serif;\r\n      \r\n      height: 100vh;\r\n      display: flex;\r\n      justify-content: center;\r\n      align-items: center;\r\n      color: #fff;\r\n      background-color: black;\r\n}\r\n.contact-container {\r\n    \r\n      padding: 30px 40px;\r\n      border-radius: 12px;\r\n      width: 90%;\r\n      max-width: 400px;\r\n      text-align: center;\r\n      border: 2px solid #E50914 ;\r\n      background-color: #1c1c1c;\r\n    \r\n    }\r\n     .contact-container h1 {\r\n      margin-bottom: 10px;\r\n      font-size: 28px;\r\n      color: #E50914;\r\n      background-color: #1c1c1c;\r\n    }\r\n\r\n    .contact-container p {\r\n      margin-bottom: 25px;\r\n      font-size: 14px;\r\n      color: #ddd;\r\n      background-color: #1c1c1c;\r\n    }\r\n\r\n    .contact-item {\r\n      margin: 15px 0;\r\n      font-size: 16px;\r\n      background-color: #1c1c1c;\r\n    }\r\n\r\n    .contact-item span {\r\n      display: block;\r\n      font-weight: bold;\r\n      margin-bottom: 5px;\r\n      color: #E50914;\r\n      background-color: #1c1c1c;\r\n    }\r\n\r\n    .contact-item a {\r\n      color: #fff;\r\n      text-decoration: none;\r\n      background-color:white\r\n    }\r\n\r\n    .contact-item a:hover {\r\n      text-decoration: underline;\r\n    }\r\n/*$vite$:1*/";
        document.head.appendChild(__vite_style__);
        const Contact = exports("default", () => {
          return /* @__PURE__ */jsxRuntimeExports.jsx("div", {
            className: "container",
            children: /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
              className: "contact-container",
              children: [/* @__PURE__ */jsxRuntimeExports.jsx("h1", {
                children: "Contact Us"
              }), /* @__PURE__ */jsxRuntimeExports.jsx("p", {
                children: "We love to hear from you"
              }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                className: "contact-item",
                children: [/* @__PURE__ */jsxRuntimeExports.jsx("span", {
                  children: "Email"
                }), /* @__PURE__ */jsxRuntimeExports.jsx("a", {
                  href: "mailto:flix@example.com",
                  children: "flix@example.com"
                })]
              }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                className: "contact-item",
                children: [/* @__PURE__ */jsxRuntimeExports.jsx("span", {
                  children: "Phone"
                }), /* @__PURE__ */jsxRuntimeExports.jsx("a", {
                  href: "tel:+911234567890",
                  children: "+91 678** *****"
                })]
              })]
            })
          });
        });
      }
    };
  });
})();
