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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _aws_amplify_ui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @aws-amplify/ui-react */ \"./node_modules/@aws-amplify/ui-react/dist/esm/index.mjs\");\n/* harmony import */ var aws_amplify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! aws-amplify */ \"./node_modules/aws-amplify/dist/esm/index.mjs\");\n/* harmony import */ var _aws_amplify_ui_react_styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @aws-amplify/ui-react/styles.css */ \"./node_modules/@aws-amplify/ui-react/dist/styles.css\");\n/* harmony import */ var _aws_amplify_ui_react_styles_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_aws_amplify_ui_react_styles_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var aws_amplify_auth_cognito__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! aws-amplify/auth/cognito */ \"./node_modules/aws-amplify/dist/esm/auth/cognito/index.mjs\");\n/* harmony import */ var aws_amplify_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! aws-amplify/utils */ \"./node_modules/aws-amplify/dist/esm/utils/index.mjs\");\n/* harmony import */ var _amplify_outputs_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../amplify_outputs.json */ \"./amplify_outputs.json\");\n/* harmony import */ var aws_amplify_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! aws-amplify/auth */ \"./node_modules/aws-amplify/dist/esm/auth/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n// 配置 AWS Amplify  \naws_amplify__WEBPACK_IMPORTED_MODULE_4__.Amplify.configure(_amplify_outputs_json__WEBPACK_IMPORTED_MODULE_3__);\naws_amplify_auth_cognito__WEBPACK_IMPORTED_MODULE_5__.cognitoUserPoolsTokenProvider.setKeyValueStorage(aws_amplify_utils__WEBPACK_IMPORTED_MODULE_6__.defaultStorage);\nfunction Home() {\n    _s();\n    const [userEmail, setUserEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [identityId, setIdentityId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const getSession = async ()=>{\n        try {\n            const session = await (0,aws_amplify_auth__WEBPACK_IMPORTED_MODULE_7__.fetchAuthSession)();\n            console.log(\"完整的 session:\", session);\n            if (session && session.tokens) {\n                const idToken = session.tokens.idToken;\n                const idTokenString = idToken && idToken.getJwtToken ? idToken.getJwtToken() : null;\n                if (idTokenString) {\n                    console.log(\"idToken as string:\", idTokenString);\n                    await getIdFromCognito(idTokenString);\n                }\n            } else {\n                console.warn(\"Session 或 tokens 未定義\");\n            }\n        } catch (error) {\n            console.error(\"獲取授權 session 出錯:\", error);\n        }\n    };\n    const getIdFromCognito = async (idToken)=>{\n        try {\n            const response = await fetch(\"/api/getId\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    IdentityPoolId: \"ap-northeast-2:844c51eb-ddfa-4c15-8042-e8cf1b0487fb\",\n                    LoginProvider: \"cognito-idp.ap-northeast-2.amazonaws.com/ap-northeast-2_CNXJJCt2G\",\n                    IdToken: idToken\n                })\n            });\n            if (response.ok) {\n                const data = await response.json();\n                console.log(\"GetId Response:\", data);\n                if (data.IdentityId) {\n                    setIdentityId(data.IdentityId);\n                    await getCredentialsFromCognito(data.IdentityId, idToken);\n                }\n            } else {\n                console.error(\"GetId API 錯誤:\", await response.text());\n            }\n        } catch (error) {\n            console.error(\"調用 GetId API 出錯:\", error);\n        }\n    };\n    const getCredentialsFromCognito = async (identityId, idToken)=>{\n        try {\n            const response = await fetch(\"/api/getCredentials\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    IdentityId: identityId,\n                    Logins: {\n                        \"cognito-idp.ap-northeast-2.amazonaws.com/ap-northeast-2_CNXJJCt2G\": idToken\n                    }\n                })\n            });\n            if (response.ok) {\n                const credentialsData = await response.json();\n                console.log(\"GetCredentials Response:\", credentialsData);\n                const { AccessKeyId, SecretKey, SessionToken } = credentialsData.Credentials;\n                await fetch(\"/api/getStreamingURL\", {\n                    method: \"POST\",\n                    headers: {\n                        \"Content-Type\": \"application/json\"\n                    },\n                    body: JSON.stringify({\n                        accessKeyId: AccessKeyId,\n                        secretAccessKey: SecretKey,\n                        sessionToken: SessionToken,\n                        email: userEmail\n                    })\n                }).then(async (res)=>{\n                    if (res.ok) {\n                        const data = await res.json();\n                        console.log(\"Streaming URL received: \".concat(data.streamingUrl));\n                        window.location.href = data.streamingUrl;\n                    } else {\n                        console.error(\"錯誤:\", await res.text());\n                    }\n                });\n            } else {\n                console.error(\"GetCredentials API 錯誤:\", await response.text());\n            }\n        } catch (error) {\n            console.error(\"調用 GetCredentials API 出錯:\", error);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (userEmail) {\n            getSession();\n        }\n    }, [\n        userEmail\n    ]);\n    const handleLogin = async ()=>{\n        if (userEmail) {\n            try {\n                await getSession();\n            } catch (error) {\n                console.error(\"獲取串流 URL 失敗:\", error);\n            }\n        }\n    };\n    const handleSignOut = function() {\n        let signOut = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ()=>{};\n        localStorage.removeItem(\"authToken\");\n        sessionStorage.clear();\n        setUserEmail(null);\n        setIdentityId(null);\n        signOut();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_aws_amplify_ui_react__WEBPACK_IMPORTED_MODULE_8__.Authenticator, {\n        hideSignUp: true,\n        children: (param)=>{\n            let { signOut, user } = param;\n            if (user) {\n                var _user_signInDetails;\n                const email = (_user_signInDetails = user.signInDetails) === null || _user_signInDetails === void 0 ? void 0 : _user_signInDetails.loginId;\n                if (email && userEmail !== email) {\n                    setUserEmail(email);\n                }\n            }\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"User email: \",\n                            userEmail !== null ? userEmail : \"Loading...\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/hao/Desktop/amplify-as2-mfa/pages/index.tsx\",\n                        lineNumber: 151,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col space-y-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: handleLogin,\n                                className: \"btn\",\n                                children: \"登入並獲取串流 URL\"\n                            }, void 0, false, {\n                                fileName: \"/Users/hao/Desktop/amplify-as2-mfa/pages/index.tsx\",\n                                lineNumber: 153,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: ()=>handleSignOut(signOut),\n                                className: \"btn\",\n                                children: \"登出\"\n                            }, void 0, false, {\n                                fileName: \"/Users/hao/Desktop/amplify-as2-mfa/pages/index.tsx\",\n                                lineNumber: 156,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/hao/Desktop/amplify-as2-mfa/pages/index.tsx\",\n                        lineNumber: 152,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/hao/Desktop/amplify-as2-mfa/pages/index.tsx\",\n                lineNumber: 150,\n                columnNumber: 11\n            }, this);\n        }\n    }, void 0, false, {\n        fileName: \"/Users/hao/Desktop/amplify-as2-mfa/pages/index.tsx\",\n        lineNumber: 140,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"reaBZTIuDiRfXhl5utJV2KQfkWA=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQW1EO0FBQ0c7QUFDaEI7QUFDSTtBQUMrQjtBQUN0QjtBQUNMO0FBQ007QUFFcEQsbUJBQW1CO0FBQ25CSSxnREFBT0EsQ0FBQ0ssU0FBUyxDQUFDRixrREFBT0E7QUFDekJGLG1GQUE2QkEsQ0FBQ0ssa0JBQWtCLENBQUNKLDZEQUFjQTtBQUVoRCxTQUFTSzs7SUFDdEIsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdaLCtDQUFRQSxDQUFnQjtJQUMxRCxNQUFNLENBQUNhLFlBQVlDLGNBQWMsR0FBR2QsK0NBQVFBLENBQWdCO0lBRTVELE1BQU1lLGFBQWE7UUFDakIsSUFBSTtZQUNGLE1BQU1DLFVBQVUsTUFBTVQsa0VBQWdCQTtZQUN0Q1UsUUFBUUMsR0FBRyxDQUFDLGdCQUFnQkY7WUFDNUIsSUFBSUEsV0FBV0EsUUFBUUcsTUFBTSxFQUFFO2dCQUM3QixNQUFNQyxVQUFVSixRQUFRRyxNQUFNLENBQUNDLE9BQU87Z0JBRXRDLE1BQU1DLGdCQUFnQixXQUFZLFFBQWlCQyxXQUFXLEdBQUksUUFBaUJBLFdBQVcsS0FBSztnQkFFbkcsSUFBSUQsZUFBZTtvQkFDakJKLFFBQVFDLEdBQUcsQ0FBQyxzQkFBc0JHO29CQUNsQyxNQUFNRSxpQkFBaUJGO2dCQUN6QjtZQUNGLE9BQU87Z0JBQ0xKLFFBQVFPLElBQUksQ0FBQztZQUNmO1FBQ0YsRUFBRSxPQUFPQyxPQUFPO1lBQ2RSLFFBQVFRLEtBQUssQ0FBQyxvQkFBb0JBO1FBQ3BDO0lBQ0Y7SUFFQSxNQUFNRixtQkFBbUIsT0FBT0g7UUFDOUIsSUFBSTtZQUNGLE1BQU1NLFdBQVcsTUFBTUMsTUFBTSxjQUFjO2dCQUN6Q0MsUUFBUTtnQkFDUkMsU0FBUztvQkFDUCxnQkFBZ0I7Z0JBQ2xCO2dCQUNBQyxNQUFNQyxLQUFLQyxTQUFTLENBQUM7b0JBQ25CQyxnQkFBZ0I7b0JBQ2hCQyxlQUFlO29CQUNmQyxTQUFTZjtnQkFDWDtZQUNGO1lBRUEsSUFBSU0sU0FBU1UsRUFBRSxFQUFFO2dCQUNmLE1BQU1DLE9BQU8sTUFBTVgsU0FBU1ksSUFBSTtnQkFDaENyQixRQUFRQyxHQUFHLENBQUMsbUJBQW1CbUI7Z0JBQy9CLElBQUlBLEtBQUtFLFVBQVUsRUFBRTtvQkFDbkJ6QixjQUFjdUIsS0FBS0UsVUFBVTtvQkFDN0IsTUFBTUMsMEJBQTBCSCxLQUFLRSxVQUFVLEVBQUVuQjtnQkFDbkQ7WUFDRixPQUFPO2dCQUNMSCxRQUFRUSxLQUFLLENBQUMsaUJBQWlCLE1BQU1DLFNBQVNlLElBQUk7WUFDcEQ7UUFDRixFQUFFLE9BQU9oQixPQUFPO1lBQ2RSLFFBQVFRLEtBQUssQ0FBQyxvQkFBb0JBO1FBQ3BDO0lBQ0Y7SUFFQSxNQUFNZSw0QkFBNEIsT0FBTzNCLFlBQW9CTztRQUMzRCxJQUFJO1lBQ0YsTUFBTU0sV0FBVyxNQUFNQyxNQUFNLHVCQUF1QjtnQkFDbERDLFFBQVE7Z0JBQ1JDLFNBQVM7b0JBQ1AsZ0JBQWdCO2dCQUNsQjtnQkFDQUMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDO29CQUNuQk8sWUFBWTFCO29CQUNaNkIsUUFBUTt3QkFDTixxRUFBcUV0QjtvQkFDdkU7Z0JBQ0Y7WUFDRjtZQUVBLElBQUlNLFNBQVNVLEVBQUUsRUFBRTtnQkFDZixNQUFNTyxrQkFBa0IsTUFBTWpCLFNBQVNZLElBQUk7Z0JBQzNDckIsUUFBUUMsR0FBRyxDQUFDLDRCQUE0QnlCO2dCQUV4QyxNQUFNLEVBQUVDLFdBQVcsRUFBRUMsU0FBUyxFQUFFQyxZQUFZLEVBQUUsR0FBR0gsZ0JBQWdCSSxXQUFXO2dCQUM1RSxNQUFNcEIsTUFBTSx3QkFBd0I7b0JBQ2xDQyxRQUFRO29CQUNSQyxTQUFTO3dCQUFFLGdCQUFnQjtvQkFBbUI7b0JBQzlDQyxNQUFNQyxLQUFLQyxTQUFTLENBQUM7d0JBQ25CZ0IsYUFBYUo7d0JBQ2JLLGlCQUFpQko7d0JBQ2pCSyxjQUFjSjt3QkFDZEssT0FBT3hDO29CQUNUO2dCQUNGLEdBQUd5QyxJQUFJLENBQUMsT0FBT0M7b0JBQ2IsSUFBSUEsSUFBSWpCLEVBQUUsRUFBRTt3QkFDVixNQUFNQyxPQUFPLE1BQU1nQixJQUFJZixJQUFJO3dCQUMzQnJCLFFBQVFDLEdBQUcsQ0FBQywyQkFBNkMsT0FBbEJtQixLQUFLaUIsWUFBWTt3QkFDeERDLE9BQU9DLFFBQVEsQ0FBQ0MsSUFBSSxHQUFHcEIsS0FBS2lCLFlBQVk7b0JBQzFDLE9BQU87d0JBQ0xyQyxRQUFRUSxLQUFLLENBQUMsT0FBTyxNQUFNNEIsSUFBSVosSUFBSTtvQkFDckM7Z0JBQ0Y7WUFFRixPQUFPO2dCQUNMeEIsUUFBUVEsS0FBSyxDQUFDLDBCQUEwQixNQUFNQyxTQUFTZSxJQUFJO1lBQzdEO1FBQ0YsRUFBRSxPQUFPaEIsT0FBTztZQUNkUixRQUFRUSxLQUFLLENBQUMsNkJBQTZCQTtRQUM3QztJQUNGO0lBRUF4QixnREFBU0EsQ0FBQztRQUNSLElBQUlVLFdBQVc7WUFDYkk7UUFDRjtJQUNGLEdBQUc7UUFBQ0o7S0FBVTtJQUVkLE1BQU0rQyxjQUFjO1FBQ2xCLElBQUkvQyxXQUFXO1lBQ2IsSUFBSTtnQkFDRixNQUFNSTtZQUNSLEVBQUUsT0FBT1UsT0FBTztnQkFDZFIsUUFBUVEsS0FBSyxDQUFDLGdCQUFnQkE7WUFDaEM7UUFDRjtJQUNGO0lBRUEsTUFBTWtDLGdCQUFnQjtZQUFDQywyRUFBc0IsS0FBTztRQUNsREMsYUFBYUMsVUFBVSxDQUFDO1FBQ3hCQyxlQUFlQyxLQUFLO1FBQ3BCcEQsYUFBYTtRQUNiRSxjQUFjO1FBQ2Q4QztJQUNGO0lBRUEscUJBQ0UsOERBQUMxRCxnRUFBYUE7UUFBQytELFVBQVU7a0JBQ3RCO2dCQUFDLEVBQUVMLE9BQU8sRUFBRU0sSUFBSSxFQUFFO1lBQ2pCLElBQUlBLE1BQU07b0JBQ01BO2dCQUFkLE1BQU1mLFNBQVFlLHNCQUFBQSxLQUFLQyxhQUFhLGNBQWxCRCwwQ0FBQUEsb0JBQW9CRSxPQUFPO2dCQUN6QyxJQUFJakIsU0FBU3hDLGNBQWN3QyxPQUFPO29CQUNoQ3ZDLGFBQWF1QztnQkFDZjtZQUNGO1lBRUEscUJBQ0UsOERBQUNrQjs7a0NBQ0MsOERBQUNDOzs0QkFBRTs0QkFBYTNELGNBQWMsT0FBT0EsWUFBWTs7Ozs7OztrQ0FDakQsOERBQUM0RDt3QkFBSUMsV0FBVTs7MENBQ2IsOERBQUNDO2dDQUFPQyxTQUFTaEI7Z0NBQWFjLFdBQVU7MENBQU07Ozs7OzswQ0FHOUMsOERBQUNDO2dDQUFPQyxTQUFTLElBQU1mLGNBQWNDO2dDQUFVWSxXQUFVOzBDQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7UUFNdkU7Ozs7OztBQUdOO0dBdkp3QjlEO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnOyAgXG5pbXBvcnQgeyBBdXRoZW50aWNhdG9yIH0gZnJvbSAnQGF3cy1hbXBsaWZ5L3VpLXJlYWN0JzsgIFxuaW1wb3J0IHsgQW1wbGlmeSB9IGZyb20gJ2F3cy1hbXBsaWZ5JzsgIFxuaW1wb3J0ICdAYXdzLWFtcGxpZnkvdWktcmVhY3Qvc3R5bGVzLmNzcyc7ICBcbmltcG9ydCB7IGNvZ25pdG9Vc2VyUG9vbHNUb2tlblByb3ZpZGVyIH0gZnJvbSAnYXdzLWFtcGxpZnkvYXV0aC9jb2duaXRvJzsgIFxuaW1wb3J0IHsgZGVmYXVsdFN0b3JhZ2UgfSBmcm9tICdhd3MtYW1wbGlmeS91dGlscyc7ICBcbmltcG9ydCBvdXRwdXRzIGZyb20gJy4uL2FtcGxpZnlfb3V0cHV0cy5qc29uJzsgIFxuaW1wb3J0IHsgZmV0Y2hBdXRoU2Vzc2lvbiB9IGZyb20gJ2F3cy1hbXBsaWZ5L2F1dGgnOyAgXG5cbi8vIOmFjee9riBBV1MgQW1wbGlmeSAgXG5BbXBsaWZ5LmNvbmZpZ3VyZShvdXRwdXRzKTsgIFxuY29nbml0b1VzZXJQb29sc1Rva2VuUHJvdmlkZXIuc2V0S2V5VmFsdWVTdG9yYWdlKGRlZmF1bHRTdG9yYWdlKTsgIFxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkgeyAgXG4gIGNvbnN0IFt1c2VyRW1haWwsIHNldFVzZXJFbWFpbF0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKTsgIFxuICBjb25zdCBbaWRlbnRpdHlJZCwgc2V0SWRlbnRpdHlJZF0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKTsgIFxuXG4gIGNvbnN0IGdldFNlc3Npb24gPSBhc3luYyAoKSA9PiB7ICBcbiAgICB0cnkgeyAgXG4gICAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZmV0Y2hBdXRoU2Vzc2lvbigpOyAgXG4gICAgICBjb25zb2xlLmxvZygn5a6M5pW055qEIHNlc3Npb246Jywgc2Vzc2lvbik7ICBcbiAgICAgIGlmIChzZXNzaW9uICYmIHNlc3Npb24udG9rZW5zKSB7ICBcbiAgICAgICAgY29uc3QgaWRUb2tlbiA9IHNlc3Npb24udG9rZW5zLmlkVG9rZW47ICBcblxuICAgICAgICBjb25zdCBpZFRva2VuU3RyaW5nID0gKGlkVG9rZW4gJiYgKGlkVG9rZW4gYXMgYW55KS5nZXRKd3RUb2tlbikgPyAoaWRUb2tlbiBhcyBhbnkpLmdldEp3dFRva2VuKCkgOiBudWxsOyAgXG5cbiAgICAgICAgaWYgKGlkVG9rZW5TdHJpbmcpIHsgIFxuICAgICAgICAgIGNvbnNvbGUubG9nKCdpZFRva2VuIGFzIHN0cmluZzonLCBpZFRva2VuU3RyaW5nKTsgIFxuICAgICAgICAgIGF3YWl0IGdldElkRnJvbUNvZ25pdG8oaWRUb2tlblN0cmluZyk7ICBcbiAgICAgICAgfSAgXG4gICAgICB9IGVsc2UgeyAgXG4gICAgICAgIGNvbnNvbGUud2FybignU2Vzc2lvbiDmiJYgdG9rZW5zIOacquWumue+qScpOyAgXG4gICAgICB9ICBcbiAgICB9IGNhdGNoIChlcnJvcikgeyAgXG4gICAgICBjb25zb2xlLmVycm9yKCfnjbLlj5bmjojmrIogc2Vzc2lvbiDlh7rpjK86JywgZXJyb3IpOyAgXG4gICAgfSAgXG4gIH07ICBcblxuICBjb25zdCBnZXRJZEZyb21Db2duaXRvID0gYXN5bmMgKGlkVG9rZW46IHN0cmluZykgPT4geyAgXG4gICAgdHJ5IHsgIFxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnL2FwaS9nZXRJZCcsIHsgIFxuICAgICAgICBtZXRob2Q6ICdQT1NUJywgIFxuICAgICAgICBoZWFkZXJzOiB7ICBcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLCAgXG4gICAgICAgIH0sICBcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyAgXG4gICAgICAgICAgSWRlbnRpdHlQb29sSWQ6ICdhcC1ub3J0aGVhc3QtMjo4NDRjNTFlYi1kZGZhLTRjMTUtODA0Mi1lOGNmMWIwNDg3ZmInLCAgXG4gICAgICAgICAgTG9naW5Qcm92aWRlcjogJ2NvZ25pdG8taWRwLmFwLW5vcnRoZWFzdC0yLmFtYXpvbmF3cy5jb20vYXAtbm9ydGhlYXN0LTJfQ05YSkpDdDJHJywgIFxuICAgICAgICAgIElkVG9rZW46IGlkVG9rZW4sICBcbiAgICAgICAgfSksICBcbiAgICAgIH0pOyAgXG5cbiAgICAgIGlmIChyZXNwb25zZS5vaykgeyAgXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7ICBcbiAgICAgICAgY29uc29sZS5sb2coJ0dldElkIFJlc3BvbnNlOicsIGRhdGEpOyAgXG4gICAgICAgIGlmIChkYXRhLklkZW50aXR5SWQpIHsgIFxuICAgICAgICAgIHNldElkZW50aXR5SWQoZGF0YS5JZGVudGl0eUlkKTsgIFxuICAgICAgICAgIGF3YWl0IGdldENyZWRlbnRpYWxzRnJvbUNvZ25pdG8oZGF0YS5JZGVudGl0eUlkLCBpZFRva2VuKTsgIFxuICAgICAgICB9ICBcbiAgICAgIH0gZWxzZSB7ICBcbiAgICAgICAgY29uc29sZS5lcnJvcignR2V0SWQgQVBJIOmMr+iqpDonLCBhd2FpdCByZXNwb25zZS50ZXh0KCkpOyAgXG4gICAgICB9ICBcbiAgICB9IGNhdGNoIChlcnJvcikgeyAgXG4gICAgICBjb25zb2xlLmVycm9yKCfoqr/nlKggR2V0SWQgQVBJIOWHuumMrzonLCBlcnJvcik7ICBcbiAgICB9ICBcbiAgfTsgIFxuXG4gIGNvbnN0IGdldENyZWRlbnRpYWxzRnJvbUNvZ25pdG8gPSBhc3luYyAoaWRlbnRpdHlJZDogc3RyaW5nLCBpZFRva2VuOiBzdHJpbmcpID0+IHsgIFxuICAgIHRyeSB7ICBcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9hcGkvZ2V0Q3JlZGVudGlhbHMnLCB7ICBcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsICBcbiAgICAgICAgaGVhZGVyczogeyAgXG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJywgIFxuICAgICAgICB9LCAgXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgIFxuICAgICAgICAgIElkZW50aXR5SWQ6IGlkZW50aXR5SWQsICBcbiAgICAgICAgICBMb2dpbnM6IHsgIFxuICAgICAgICAgICAgJ2NvZ25pdG8taWRwLmFwLW5vcnRoZWFzdC0yLmFtYXpvbmF3cy5jb20vYXAtbm9ydGhlYXN0LTJfQ05YSkpDdDJHJzogaWRUb2tlbiwgIFxuICAgICAgICAgIH0sICBcbiAgICAgICAgfSksICBcbiAgICAgIH0pOyAgXG5cbiAgICAgIGlmIChyZXNwb25zZS5vaykgeyAgXG4gICAgICAgIGNvbnN0IGNyZWRlbnRpYWxzRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTsgIFxuICAgICAgICBjb25zb2xlLmxvZygnR2V0Q3JlZGVudGlhbHMgUmVzcG9uc2U6JywgY3JlZGVudGlhbHNEYXRhKTsgIFxuXG4gICAgICAgIGNvbnN0IHsgQWNjZXNzS2V5SWQsIFNlY3JldEtleSwgU2Vzc2lvblRva2VuIH0gPSBjcmVkZW50aWFsc0RhdGEuQ3JlZGVudGlhbHM7ICBcbiAgICAgICAgYXdhaXQgZmV0Y2goJy9hcGkvZ2V0U3RyZWFtaW5nVVJMJywgeyAgXG4gICAgICAgICAgbWV0aG9kOiAnUE9TVCcsICBcbiAgICAgICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSwgIFxuICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgIFxuICAgICAgICAgICAgYWNjZXNzS2V5SWQ6IEFjY2Vzc0tleUlkLCAgXG4gICAgICAgICAgICBzZWNyZXRBY2Nlc3NLZXk6IFNlY3JldEtleSwgIFxuICAgICAgICAgICAgc2Vzc2lvblRva2VuOiBTZXNzaW9uVG9rZW4sICBcbiAgICAgICAgICAgIGVtYWlsOiB1c2VyRW1haWwgICBcbiAgICAgICAgICB9KSwgIFxuICAgICAgICB9KS50aGVuKGFzeW5jIChyZXMpID0+IHsgIFxuICAgICAgICAgIGlmIChyZXMub2spIHsgIFxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7ICBcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBTdHJlYW1pbmcgVVJMIHJlY2VpdmVkOiAke2RhdGEuc3RyZWFtaW5nVXJsfWApOyAgXG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGRhdGEuc3RyZWFtaW5nVXJsOyAgXG4gICAgICAgICAgfSBlbHNlIHsgIFxuICAgICAgICAgICAgY29uc29sZS5lcnJvcign6Yyv6KqkOicsIGF3YWl0IHJlcy50ZXh0KCkpOyAgXG4gICAgICAgICAgfSAgXG4gICAgICAgIH0pOyAgXG5cbiAgICAgIH0gZWxzZSB7ICBcbiAgICAgICAgY29uc29sZS5lcnJvcignR2V0Q3JlZGVudGlhbHMgQVBJIOmMr+iqpDonLCBhd2FpdCByZXNwb25zZS50ZXh0KCkpOyAgXG4gICAgICB9ICBcbiAgICB9IGNhdGNoIChlcnJvcikgeyAgXG4gICAgICBjb25zb2xlLmVycm9yKCfoqr/nlKggR2V0Q3JlZGVudGlhbHMgQVBJIOWHuumMrzonLCBlcnJvcik7ICBcbiAgICB9ICBcbiAgfTsgIFxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7ICBcbiAgICBpZiAodXNlckVtYWlsKSB7ICBcbiAgICAgIGdldFNlc3Npb24oKTsgIFxuICAgIH0gIFxuICB9LCBbdXNlckVtYWlsXSk7ICBcblxuICBjb25zdCBoYW5kbGVMb2dpbiA9IGFzeW5jICgpID0+IHsgIFxuICAgIGlmICh1c2VyRW1haWwpIHsgIFxuICAgICAgdHJ5IHsgIFxuICAgICAgICBhd2FpdCBnZXRTZXNzaW9uKCk7ICAgXG4gICAgICB9IGNhdGNoIChlcnJvcikgeyAgXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ+eNsuWPluS4sua1gSBVUkwg5aSx5pWXOicsIGVycm9yKTsgIFxuICAgICAgfSAgXG4gICAgfSAgXG4gIH07ICBcblxuICBjb25zdCBoYW5kbGVTaWduT3V0ID0gKHNpZ25PdXQ6ICgpID0+IHZvaWQgPSAoKSA9PiB7fSkgPT4geyAgXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2F1dGhUb2tlbicpOyAgXG4gICAgc2Vzc2lvblN0b3JhZ2UuY2xlYXIoKTsgIFxuICAgIHNldFVzZXJFbWFpbChudWxsKTsgIFxuICAgIHNldElkZW50aXR5SWQobnVsbCk7ICBcbiAgICBzaWduT3V0KCk7ICBcbiAgfTsgIFxuXG4gIHJldHVybiAoICBcbiAgICA8QXV0aGVudGljYXRvciBoaWRlU2lnblVwPiAgXG4gICAgICB7KHsgc2lnbk91dCwgdXNlciB9KSA9PiB7ICBcbiAgICAgICAgaWYgKHVzZXIpIHsgIFxuICAgICAgICAgIGNvbnN0IGVtYWlsID0gdXNlci5zaWduSW5EZXRhaWxzPy5sb2dpbklkOyAgXG4gICAgICAgICAgaWYgKGVtYWlsICYmIHVzZXJFbWFpbCAhPT0gZW1haWwpIHsgIFxuICAgICAgICAgICAgc2V0VXNlckVtYWlsKGVtYWlsKTsgIFxuICAgICAgICAgIH0gIFxuICAgICAgICB9ICBcbiAgICAgICAgXG4gICAgICAgIHJldHVybiAoICBcbiAgICAgICAgICA8bWFpbj4gIFxuICAgICAgICAgICAgPHA+VXNlciBlbWFpbDoge3VzZXJFbWFpbCAhPT0gbnVsbCA/IHVzZXJFbWFpbCA6ICdMb2FkaW5nLi4uJ308L3A+ICBcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBzcGFjZS15LTRcIj4gIFxuICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUxvZ2lufSBjbGFzc05hbWU9XCJidG5cIj4gIFxuICAgICAgICAgICAgICAgIOeZu+WFpeS4pueNsuWPluS4sua1gSBVUkwgIFxuICAgICAgICAgICAgICA8L2J1dHRvbj4gIFxuICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZVNpZ25PdXQoc2lnbk91dCl9IGNsYXNzTmFtZT1cImJ0blwiPiAgXG4gICAgICAgICAgICAgICAg55m75Ye6ICBcbiAgICAgICAgICAgICAgPC9idXR0b24+ICBcbiAgICAgICAgICAgIDwvZGl2PiAgXG4gICAgICAgICAgPC9tYWluPiAgXG4gICAgICAgICk7ICBcbiAgICAgIH19ICBcbiAgICA8L0F1dGhlbnRpY2F0b3I+ICBcbiAgKTsgIFxufSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiQXV0aGVudGljYXRvciIsIkFtcGxpZnkiLCJjb2duaXRvVXNlclBvb2xzVG9rZW5Qcm92aWRlciIsImRlZmF1bHRTdG9yYWdlIiwib3V0cHV0cyIsImZldGNoQXV0aFNlc3Npb24iLCJjb25maWd1cmUiLCJzZXRLZXlWYWx1ZVN0b3JhZ2UiLCJIb21lIiwidXNlckVtYWlsIiwic2V0VXNlckVtYWlsIiwiaWRlbnRpdHlJZCIsInNldElkZW50aXR5SWQiLCJnZXRTZXNzaW9uIiwic2Vzc2lvbiIsImNvbnNvbGUiLCJsb2ciLCJ0b2tlbnMiLCJpZFRva2VuIiwiaWRUb2tlblN0cmluZyIsImdldEp3dFRva2VuIiwiZ2V0SWRGcm9tQ29nbml0byIsIndhcm4iLCJlcnJvciIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJJZGVudGl0eVBvb2xJZCIsIkxvZ2luUHJvdmlkZXIiLCJJZFRva2VuIiwib2siLCJkYXRhIiwianNvbiIsIklkZW50aXR5SWQiLCJnZXRDcmVkZW50aWFsc0Zyb21Db2duaXRvIiwidGV4dCIsIkxvZ2lucyIsImNyZWRlbnRpYWxzRGF0YSIsIkFjY2Vzc0tleUlkIiwiU2VjcmV0S2V5IiwiU2Vzc2lvblRva2VuIiwiQ3JlZGVudGlhbHMiLCJhY2Nlc3NLZXlJZCIsInNlY3JldEFjY2Vzc0tleSIsInNlc3Npb25Ub2tlbiIsImVtYWlsIiwidGhlbiIsInJlcyIsInN0cmVhbWluZ1VybCIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsImhhbmRsZUxvZ2luIiwiaGFuZGxlU2lnbk91dCIsInNpZ25PdXQiLCJsb2NhbFN0b3JhZ2UiLCJyZW1vdmVJdGVtIiwic2Vzc2lvblN0b3JhZ2UiLCJjbGVhciIsImhpZGVTaWduVXAiLCJ1c2VyIiwic2lnbkluRGV0YWlscyIsImxvZ2luSWQiLCJtYWluIiwicCIsImRpdiIsImNsYXNzTmFtZSIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});