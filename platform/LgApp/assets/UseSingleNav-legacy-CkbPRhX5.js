;
(function () {
  System.register(['./index-legacy-DtSjVZOm.js'], function (exports, module) {
    'use strict';

    var useNavigate, useLocation, reactExports;
    return {
      setters: [module => {
        useNavigate = module.u;
        useLocation = module.i;
        reactExports = module.r;
      }],
      execute: function () {
        exports("S", SignOut);
        var __async = (__this, __arguments, generator) => {
          return new Promise((resolve, reject) => {
            var fulfilled = value => {
              try {
                step(generator.next(value));
              } catch (e) {
                reject(e);
              }
            };
            var rejected = value => {
              try {
                step(generator.throw(value));
              } catch (e) {
                reject(e);
              }
            };
            var step = x => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
            step((generator = generator.apply(__this, __arguments)).next());
          });
        };
        const LOGIN_URL = "https://hez88zgdif.execute-api.ap-south-1.amazonaws.com/dev";
        const AuthService = exports("A", (username, password) => __async(null, null, function* () {
          var _a;
          const credential = `${username}::${password}`;
          const utf8Bytes = new TextEncoder().encode(credential);
          const binaryString = String.fromCharCode(...utf8Bytes);
          const encoded = btoa(binaryString);
          const res = yield fetch(`${LOGIN_URL}/account/login`, {
            method: "POST",
            headers: {
              Authorization: `Basic ${encoded}`,
              // Origin: 'http://localhost:3000',
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              platform: "web"
            })
          });
          if (!res.ok) {
            throw new Error(`${res.status}`);
          }
          const result = yield res.json();
          const token = (_a = result == null ? void 0 : result.data) == null ? void 0 : _a.authentication_token;
          if (!token) {
            throw new Error("token not found");
          }
          return token;
        }));
        function SignOut() {
          localStorage.removeItem("auth_token");
        }
        const UseSingleNav = exports("U", () => {
          const navigate = useNavigate();
          const location = useLocation();
          return reactExports.useCallback(path => {
            if (location.pathname === path) return;
            navigate(path);
          }, [navigate, location.pathname]);
        });
      }
    };
  });
})();
