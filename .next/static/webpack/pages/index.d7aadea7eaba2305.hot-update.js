"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _aws_amplify_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @aws-amplify/ui-react */ \"./node_modules/@aws-amplify/ui-react/dist/esm/index.mjs\");\n/* harmony import */ var aws_amplify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! aws-amplify */ \"./node_modules/aws-amplify/dist/esm/index.mjs\");\n/* harmony import */ var _aws_amplify_ui_react_styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @aws-amplify/ui-react/styles.css */ \"./node_modules/@aws-amplify/ui-react/dist/styles.css\");\n/* harmony import */ var _aws_amplify_ui_react_styles_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_aws_amplify_ui_react_styles_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _amplify_outputs_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../amplify_outputs.json */ \"./amplify_outputs.json\");\n/* harmony import */ var aws_amplify_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! aws-amplify/auth */ \"./node_modules/aws-amplify/dist/esm/auth/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n// 配置 AWS Amplify  \naws_amplify__WEBPACK_IMPORTED_MODULE_4__.Amplify.configure(_amplify_outputs_json__WEBPACK_IMPORTED_MODULE_3__);\nfunction Home() {\n    _s();\n    const [userEmail, setUserEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [identityId, setIdentityId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [awsCredentials, setAwsCredentials] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const getSession = async ()=>{\n        try {\n            const session = await (0,aws_amplify_auth__WEBPACK_IMPORTED_MODULE_5__.fetchAuthSession)();\n            console.log(\"完整的 session:\", session);\n            if (session && session.tokens) {\n                const idToken = session.tokens.idToken;\n                const idTokenString = idToken && idToken.getJwtToken ? idToken.getJwtToken() : null;\n                if (idTokenString) {\n                    console.log(\"idToken as string:\", idTokenString);\n                    await getIdFromCognito(idTokenString);\n                }\n            } else {\n                console.warn(\"Session 或 tokens 未定義\");\n            }\n        } catch (error) {\n            console.error(\"獲取授權 session 出錯:\", error);\n        }\n    };\n    const getIdFromCognito = async (idToken)=>{\n        try {\n            const response = await fetch(\"/api/getId\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    IdentityPoolId: \"ap-northeast-2:844c51eb-ddfa-4c15-8042-e8cf1b0487fb\",\n                    LoginProvider: \"cognito-idp.ap-northeast-2.amazonaws.com/ap-northeast-2_CNXJJCt2G\",\n                    IdToken: idToken\n                })\n            });\n            if (response.ok) {\n                const data = await response.json();\n                console.log(\"GetId Response:\", data);\n                if (data.IdentityId) {\n                    setIdentityId(data.IdentityId);\n                    await getCredentialsFromCognito(data.IdentityId, idToken);\n                }\n            } else {\n                const errorData = await response.json();\n                console.error(\"GetId API 錯誤:\", errorData);\n            }\n        } catch (error) {\n            console.error(\"調用 GetId API 出錯:\", error);\n        }\n    };\n    const getCredentialsFromCognito = async (identityId, idToken)=>{\n        try {\n            const response = await fetch(\"/api/getCredentials\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    IdentityId: identityId,\n                    Logins: {\n                        \"cognito-idp.ap-northeast-2.amazonaws.com/ap-northeast-2_CNXJJCt2G\": idToken\n                    }\n                })\n            });\n            if (response.ok) {\n                const credentialsData = await response.json();\n                console.log(\"GetCredentials Response:\", credentialsData);\n                // 設置憑證狀態  \n                setAwsCredentials({\n                    accessKeyId: credentialsData.Credentials.AccessKeyId,\n                    secretAccessKey: credentialsData.Credentials.SecretKey,\n                    sessionToken: credentialsData.Credentials.SessionToken\n                });\n            } else {\n                const errorData = await response.json();\n                console.error(\"GetCredentials API 錯誤:\", errorData);\n            }\n        } catch (error) {\n            console.error(\"調用 GetCredentials API 出錯:\", error);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (userEmail && awsCredentials) {\n            handleLogin();\n        }\n    }, [\n        userEmail,\n        awsCredentials\n    ]);\n    const handleLogin = async ()=>{\n        if (userEmail && awsCredentials) {\n            try {\n                const response = await fetch(\"/api/getStreamingURL\", {\n                    method: \"POST\",\n                    headers: {\n                        \"Content-Type\": \"application/json\"\n                    },\n                    body: JSON.stringify({\n                        email: userEmail,\n                        Credentials: awsCredentials\n                    })\n                });\n                if (response.ok) {\n                    const data = await response.json();\n                    console.log(\"Streaming URL:\", data.streamingUrl);\n                    window.location.href = data.streamingUrl;\n                } else {\n                    const data = await response.json();\n                    console.error(\"錯誤:\", data.error);\n                }\n            } catch (error) {\n                console.error(\"獲取串流 URL 失敗:\", error);\n            }\n        }\n    };\n    const handleSignOut = function() {\n        let signOut = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ()=>{};\n        localStorage.removeItem(\"authToken\");\n        sessionStorage.clear();\n        setUserEmail(null);\n        setIdentityId(null);\n        setAwsCredentials(null);\n        signOut();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_aws_amplify_ui_react__WEBPACK_IMPORTED_MODULE_6__.Authenticator, {\n        hideSignUp: true,\n        children: (param)=>{\n            let { signOut, user } = param;\n            if (user) {\n                var _user_signInDetails;\n                const email = (_user_signInDetails = user.signInDetails) === null || _user_signInDetails === void 0 ? void 0 : _user_signInDetails.loginId;\n                if (email && userEmail !== email) {\n                    setUserEmail(email);\n                }\n            }\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"User email: \",\n                            userEmail !== null ? userEmail : \"Loading...\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/hao/Desktop/amplify-as2-mfa/pages/index.tsx\",\n                        lineNumber: 156,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col space-y-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: handleLogin,\n                                className: \"btn\",\n                                children: \"登入並獲取串流 URL\"\n                            }, void 0, false, {\n                                fileName: \"/Users/hao/Desktop/amplify-as2-mfa/pages/index.tsx\",\n                                lineNumber: 158,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: ()=>handleSignOut(signOut),\n                                className: \"btn\",\n                                children: \"登出\"\n                            }, void 0, false, {\n                                fileName: \"/Users/hao/Desktop/amplify-as2-mfa/pages/index.tsx\",\n                                lineNumber: 161,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/hao/Desktop/amplify-as2-mfa/pages/index.tsx\",\n                        lineNumber: 157,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/hao/Desktop/amplify-as2-mfa/pages/index.tsx\",\n                lineNumber: 155,\n                columnNumber: 11\n            }, this);\n        }\n    }, void 0, false, {\n        fileName: \"/Users/hao/Desktop/amplify-as2-mfa/pages/index.tsx\",\n        lineNumber: 145,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"TOgECCVG1+AYXewwEmyly48k6o0=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZCxNQUFNWixTQUFRWSxzQkFBQUEsS0FBS0MsYUFBYSxjQUFsQkQsMENBQUFBLG9CQUFvQkUsT0FBTztnQkFDekMsSUFBSWQsU0FBUzNDLGNBQWMyQyxPQUFPO29CQUNoQzFDLGFBQWEwQztnQkFDZjtZQUNGO1lBRUEscUJBQ0UsOERBQUNlOztrQ0FDQyw4REFBQ0M7OzRCQUFFOzRCQUFhM0QsY0FBYyxPQUFPQSxZQUFZOzs7Ozs7O2tDQUNqRCw4REFBQzREO3dCQUFJQyxXQUFVOzswQ0FDYiw4REFBQ0M7Z0NBQU9DLFNBQVNyQjtnQ0FBYW1CLFdBQVU7MENBQU07Ozs7OzswQ0FHOUMsOERBQUNDO2dDQUFPQyxTQUFTLElBQU1mLGNBQWNDO2dDQUFVWSxXQUFVOzBDQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7UUFNdkU7Ozs7OztBQUdOO0dBL0p3QjlEO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnOyAgXG5pbXBvcnQgeyBBdXRoZW50aWNhdG9yIH0gZnJvbSAnQGF3cy1hbXBsaWZ5L3VpLXJlYWN0JzsgIFxuaW1wb3J0IHsgQW1wbGlmeSB9IGZyb20gJ2F3cy1hbXBsaWZ5JzsgIFxuaW1wb3J0ICdAYXdzLWFtcGxpZnkvdWktcmVhY3Qvc3R5bGVzLmNzcyc7ICBcbmltcG9ydCBvdXRwdXRzIGZyb20gJy4uL2FtcGxpZnlfb3V0cHV0cy5qc29uJzsgIFxuaW1wb3J0IHsgZmV0Y2hBdXRoU2Vzc2lvbiB9IGZyb20gJ2F3cy1hbXBsaWZ5L2F1dGgnOyAgXG5cbi8vIOmFjee9riBBV1MgQW1wbGlmeSAgXG5BbXBsaWZ5LmNvbmZpZ3VyZShvdXRwdXRzKTsgIFxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkgeyAgXG4gIGNvbnN0IFt1c2VyRW1haWwsIHNldFVzZXJFbWFpbF0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKTsgIFxuICBjb25zdCBbaWRlbnRpdHlJZCwgc2V0SWRlbnRpdHlJZF0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKTsgIFxuICBjb25zdCBbYXdzQ3JlZGVudGlhbHMsIHNldEF3c0NyZWRlbnRpYWxzXSA9IHVzZVN0YXRlPGFueT4obnVsbCk7ICBcblxuICBjb25zdCBnZXRTZXNzaW9uID0gYXN5bmMgKCkgPT4geyAgXG4gICAgdHJ5IHsgIFxuICAgICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGZldGNoQXV0aFNlc3Npb24oKTsgIFxuICAgICAgY29uc29sZS5sb2coJ+WujOaVtOeahCBzZXNzaW9uOicsIHNlc3Npb24pOyAgXG4gICAgICBpZiAoc2Vzc2lvbiAmJiBzZXNzaW9uLnRva2VucykgeyAgXG4gICAgICAgIGNvbnN0IGlkVG9rZW4gPSBzZXNzaW9uLnRva2Vucy5pZFRva2VuOyAgXG4gICAgICAgIGNvbnN0IGlkVG9rZW5TdHJpbmc6IHN0cmluZyB8IG51bGwgPSAoaWRUb2tlbiAmJiAoaWRUb2tlbiBhcyBhbnkpLmdldEp3dFRva2VuKSA/IChpZFRva2VuIGFzIGFueSkuZ2V0Snd0VG9rZW4oKSA6IG51bGw7ICBcblxuICAgICAgICBpZiAoaWRUb2tlblN0cmluZykgeyAgXG4gICAgICAgICAgY29uc29sZS5sb2coJ2lkVG9rZW4gYXMgc3RyaW5nOicsIGlkVG9rZW5TdHJpbmcpOyAgXG4gICAgICAgICAgYXdhaXQgZ2V0SWRGcm9tQ29nbml0byhpZFRva2VuU3RyaW5nKTsgIFxuICAgICAgICB9ICBcbiAgICAgIH0gZWxzZSB7ICBcbiAgICAgICAgY29uc29sZS53YXJuKCdTZXNzaW9uIOaIliB0b2tlbnMg5pyq5a6a576pJyk7ICBcbiAgICAgIH0gIFxuICAgIH0gY2F0Y2ggKGVycm9yKSB7ICBcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ+eNsuWPluaOiOasiiBzZXNzaW9uIOWHuumMrzonLCBlcnJvcik7ICBcbiAgICB9ICBcbiAgfTsgIFxuXG4gIGNvbnN0IGdldElkRnJvbUNvZ25pdG8gPSBhc3luYyAoaWRUb2tlbjogc3RyaW5nKSA9PiB7ICBcbiAgICB0cnkgeyAgXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCcvYXBpL2dldElkJywgeyAgXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLCAgXG4gICAgICAgIGhlYWRlcnM6IHsgIFxuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsICBcbiAgICAgICAgfSwgIFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7ICBcbiAgICAgICAgICBJZGVudGl0eVBvb2xJZDogJ2FwLW5vcnRoZWFzdC0yOjg0NGM1MWViLWRkZmEtNGMxNS04MDQyLWU4Y2YxYjA0ODdmYicsICBcbiAgICAgICAgICBMb2dpblByb3ZpZGVyOiAnY29nbml0by1pZHAuYXAtbm9ydGhlYXN0LTIuYW1hem9uYXdzLmNvbS9hcC1ub3J0aGVhc3QtMl9DTlhKSkN0MkcnLCAgXG4gICAgICAgICAgSWRUb2tlbjogaWRUb2tlbiwgIFxuICAgICAgICB9KSwgIFxuICAgICAgfSk7ICBcblxuICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7ICBcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTsgIFxuICAgICAgICBjb25zb2xlLmxvZygnR2V0SWQgUmVzcG9uc2U6JywgZGF0YSk7ICBcbiAgICAgICAgaWYgKGRhdGEuSWRlbnRpdHlJZCkgeyAgXG4gICAgICAgICAgc2V0SWRlbnRpdHlJZChkYXRhLklkZW50aXR5SWQpOyAgXG4gICAgICAgICAgYXdhaXQgZ2V0Q3JlZGVudGlhbHNGcm9tQ29nbml0byhkYXRhLklkZW50aXR5SWQsIGlkVG9rZW4pOyAgXG4gICAgICAgIH0gIFxuICAgICAgfSBlbHNlIHsgIFxuICAgICAgICBjb25zdCBlcnJvckRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7ICBcbiAgICAgICAgY29uc29sZS5lcnJvcignR2V0SWQgQVBJIOmMr+iqpDonLCBlcnJvckRhdGEpOyAgXG4gICAgICB9ICBcbiAgICB9IGNhdGNoIChlcnJvcikgeyAgXG4gICAgICBjb25zb2xlLmVycm9yKCfoqr/nlKggR2V0SWQgQVBJIOWHuumMrzonLCBlcnJvcik7ICBcbiAgICB9ICBcbiAgfTsgIFxuXG4gIGNvbnN0IGdldENyZWRlbnRpYWxzRnJvbUNvZ25pdG8gPSBhc3luYyAoaWRlbnRpdHlJZDogc3RyaW5nLCBpZFRva2VuOiBzdHJpbmcpID0+IHsgIFxuICAgIHRyeSB7ICBcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9hcGkvZ2V0Q3JlZGVudGlhbHMnLCB7ICBcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsICBcbiAgICAgICAgaGVhZGVyczogeyAgXG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJywgIFxuICAgICAgICB9LCAgXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgIFxuICAgICAgICAgIElkZW50aXR5SWQ6IGlkZW50aXR5SWQsICBcbiAgICAgICAgICBMb2dpbnM6IHsgIFxuICAgICAgICAgICAgJ2NvZ25pdG8taWRwLmFwLW5vcnRoZWFzdC0yLmFtYXpvbmF3cy5jb20vYXAtbm9ydGhlYXN0LTJfQ05YSkpDdDJHJzogaWRUb2tlbiwgIFxuICAgICAgICAgIH0sICBcbiAgICAgICAgfSksICBcbiAgICAgIH0pOyAgXG5cbiAgICAgIGlmIChyZXNwb25zZS5vaykgeyAgXG4gICAgICAgIGNvbnN0IGNyZWRlbnRpYWxzRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTsgIFxuICAgICAgICBjb25zb2xlLmxvZygnR2V0Q3JlZGVudGlhbHMgUmVzcG9uc2U6JywgY3JlZGVudGlhbHNEYXRhKTsgIFxuXG4gICAgICAgIC8vIOioree9ruaGkeitieeLgOaFiyAgXG4gICAgICAgIHNldEF3c0NyZWRlbnRpYWxzKHsgIFxuICAgICAgICAgIGFjY2Vzc0tleUlkOiBjcmVkZW50aWFsc0RhdGEuQ3JlZGVudGlhbHMuQWNjZXNzS2V5SWQsICBcbiAgICAgICAgICBzZWNyZXRBY2Nlc3NLZXk6IGNyZWRlbnRpYWxzRGF0YS5DcmVkZW50aWFscy5TZWNyZXRLZXksICBcbiAgICAgICAgICBzZXNzaW9uVG9rZW46IGNyZWRlbnRpYWxzRGF0YS5DcmVkZW50aWFscy5TZXNzaW9uVG9rZW4sICBcbiAgICAgICAgfSk7ICBcblxuICAgICAgfSBlbHNlIHsgIFxuICAgICAgICBjb25zdCBlcnJvckRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7ICBcbiAgICAgICAgY29uc29sZS5lcnJvcignR2V0Q3JlZGVudGlhbHMgQVBJIOmMr+iqpDonLCBlcnJvckRhdGEpOyAgXG4gICAgICB9ICBcbiAgICB9IGNhdGNoIChlcnJvcikgeyAgXG4gICAgICBjb25zb2xlLmVycm9yKCfoqr/nlKggR2V0Q3JlZGVudGlhbHMgQVBJIOWHuumMrzonLCBlcnJvcik7ICBcbiAgICB9ICBcbiAgfTsgIFxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7ICBcbiAgICBpZiAodXNlckVtYWlsICYmIGF3c0NyZWRlbnRpYWxzKSB7ICBcbiAgICAgIGhhbmRsZUxvZ2luKCk7ICBcbiAgICB9ICBcbiAgfSwgW3VzZXJFbWFpbCwgYXdzQ3JlZGVudGlhbHNdKTsgIFxuXG4gIGNvbnN0IGhhbmRsZUxvZ2luID0gYXN5bmMgKCkgPT4geyAgXG4gICAgaWYgKHVzZXJFbWFpbCAmJiBhd3NDcmVkZW50aWFscykgeyAgXG4gICAgICB0cnkgeyAgXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYC9hcGkvZ2V0U3RyZWFtaW5nVVJMYCwgeyAgXG4gICAgICAgICAgbWV0aG9kOiAnUE9TVCcsICBcbiAgICAgICAgICBoZWFkZXJzOiB7ICBcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsICBcbiAgICAgICAgICB9LCAgXG4gICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyAgXG4gICAgICAgICAgICBlbWFpbDogdXNlckVtYWlsLCAgXG4gICAgICAgICAgICBDcmVkZW50aWFsczogYXdzQ3JlZGVudGlhbHMsICBcbiAgICAgICAgICB9KSwgIFxuICAgICAgICB9KTsgIFxuXG4gICAgICAgIGlmIChyZXNwb25zZS5vaykgeyAgXG4gICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTsgIFxuICAgICAgICAgIGNvbnNvbGUubG9nKCdTdHJlYW1pbmcgVVJMOicsIGRhdGEuc3RyZWFtaW5nVXJsKTsgIFxuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gZGF0YS5zdHJlYW1pbmdVcmw7ICBcbiAgICAgICAgfSBlbHNlIHsgIFxuICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7ICBcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCfpjK/oqqQ6JywgZGF0YS5lcnJvcik7ICBcbiAgICAgICAgfSAgXG4gICAgICB9IGNhdGNoIChlcnJvcikgeyAgXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ+eNsuWPluS4sua1gSBVUkwg5aSx5pWXOicsIGVycm9yKTsgIFxuICAgICAgfSAgXG4gICAgfSAgXG4gIH07ICBcblxuICBjb25zdCBoYW5kbGVTaWduT3V0ID0gKHNpZ25PdXQ6ICgpID0+IHZvaWQgPSAoKSA9PiB7fSkgPT4geyAgXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2F1dGhUb2tlbicpOyAgXG4gICAgc2Vzc2lvblN0b3JhZ2UuY2xlYXIoKTsgIFxuICAgIHNldFVzZXJFbWFpbChudWxsKTsgIFxuICAgIHNldElkZW50aXR5SWQobnVsbCk7ICBcbiAgICBzZXRBd3NDcmVkZW50aWFscyhudWxsKTsgIFxuICAgIHNpZ25PdXQoKTsgIFxuICB9OyAgXG5cbiAgcmV0dXJuICggIFxuICAgIDxBdXRoZW50aWNhdG9yIGhpZGVTaWduVXA+ICBcbiAgICAgIHsoeyBzaWduT3V0LCB1c2VyIH0pID0+IHsgIFxuICAgICAgICBpZiAodXNlcikgeyAgXG4gICAgICAgICAgY29uc3QgZW1haWwgPSB1c2VyLnNpZ25JbkRldGFpbHM/LmxvZ2luSWQ7ICBcbiAgICAgICAgICBpZiAoZW1haWwgJiYgdXNlckVtYWlsICE9PSBlbWFpbCkgeyAgXG4gICAgICAgICAgICBzZXRVc2VyRW1haWwoZW1haWwpOyAgXG4gICAgICAgICAgfSAgXG4gICAgICAgIH0gIFxuXG4gICAgICAgIHJldHVybiAoICBcbiAgICAgICAgICA8bWFpbj4gIFxuICAgICAgICAgICAgPHA+VXNlciBlbWFpbDoge3VzZXJFbWFpbCAhPT0gbnVsbCA/IHVzZXJFbWFpbCA6ICdMb2FkaW5nLi4uJ308L3A+ICBcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBzcGFjZS15LTRcIj4gIFxuICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUxvZ2lufSBjbGFzc05hbWU9XCJidG5cIj4gIFxuICAgICAgICAgICAgICAgIOeZu+WFpeS4pueNsuWPluS4sua1gSBVUkwgIFxuICAgICAgICAgICAgICA8L2J1dHRvbj4gIFxuICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZVNpZ25PdXQoc2lnbk91dCl9IGNsYXNzTmFtZT1cImJ0blwiPiAgXG4gICAgICAgICAgICAgICAg55m75Ye6ICBcbiAgICAgICAgICAgICAgPC9idXR0b24+ICBcbiAgICAgICAgICAgIDwvZGl2PiAgXG4gICAgICAgICAgPC9tYWluPiAgXG4gICAgICAgICk7ICBcbiAgICAgIH19ICBcbiAgICA8L0F1dGhlbnRpY2F0b3I+ICBcbiAgKTsgIFxufSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiQXV0aGVudGljYXRvciIsIkFtcGxpZnkiLCJvdXRwdXRzIiwiZmV0Y2hBdXRoU2Vzc2lvbiIsImNvbmZpZ3VyZSIsIkhvbWUiLCJ1c2VyRW1haWwiLCJzZXRVc2VyRW1haWwiLCJpZGVudGl0eUlkIiwic2V0SWRlbnRpdHlJZCIsImF3c0NyZWRlbnRpYWxzIiwic2V0QXdzQ3JlZGVudGlhbHMiLCJnZXRTZXNzaW9uIiwic2Vzc2lvbiIsImNvbnNvbGUiLCJsb2ciLCJ0b2tlbnMiLCJpZFRva2VuIiwiaWRUb2tlblN0cmluZyIsImdldEp3dFRva2VuIiwiZ2V0SWRGcm9tQ29nbml0byIsIndhcm4iLCJlcnJvciIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJJZGVudGl0eVBvb2xJZCIsIkxvZ2luUHJvdmlkZXIiLCJJZFRva2VuIiwib2siLCJkYXRhIiwianNvbiIsIklkZW50aXR5SWQiLCJnZXRDcmVkZW50aWFsc0Zyb21Db2duaXRvIiwiZXJyb3JEYXRhIiwiTG9naW5zIiwiY3JlZGVudGlhbHNEYXRhIiwiYWNjZXNzS2V5SWQiLCJDcmVkZW50aWFscyIsIkFjY2Vzc0tleUlkIiwic2VjcmV0QWNjZXNzS2V5IiwiU2VjcmV0S2V5Iiwic2Vzc2lvblRva2VuIiwiU2Vzc2lvblRva2VuIiwiaGFuZGxlTG9naW4iLCJlbWFpbCIsInN0cmVhbWluZ1VybCIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsImhhbmRsZVNpZ25PdXQiLCJzaWduT3V0IiwibG9jYWxTdG9yYWdlIiwicmVtb3ZlSXRlbSIsInNlc3Npb25TdG9yYWdlIiwiY2xlYXIiLCJoaWRlU2lnblVwIiwidXNlciIsInNpZ25JbkRldGFpbHMiLCJsb2dpbklkIiwibWFpbiIsInAiLCJkaXYiLCJjbGFzc05hbWUiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});