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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _aws_amplify_ui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @aws-amplify/ui-react */ \"./node_modules/@aws-amplify/ui-react/dist/esm/index.mjs\");\n/* harmony import */ var aws_amplify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! aws-amplify */ \"./node_modules/aws-amplify/dist/esm/index.mjs\");\n/* harmony import */ var _aws_amplify_ui_react_styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @aws-amplify/ui-react/styles.css */ \"./node_modules/@aws-amplify/ui-react/dist/styles.css\");\n/* harmony import */ var _aws_amplify_ui_react_styles_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_aws_amplify_ui_react_styles_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var aws_amplify_auth_cognito__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! aws-amplify/auth/cognito */ \"./node_modules/aws-amplify/dist/esm/auth/cognito/index.mjs\");\n/* harmony import */ var aws_amplify_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! aws-amplify/utils */ \"./node_modules/aws-amplify/dist/esm/utils/index.mjs\");\n/* harmony import */ var _amplify_outputs_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../amplify_outputs.json */ \"./amplify_outputs.json\");\n/* harmony import */ var aws_amplify_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! aws-amplify/auth */ \"./node_modules/aws-amplify/dist/esm/auth/index.mjs\");\n// import React, { useState, useEffect } from 'react';  \n// import { Authenticator } from '@aws-amplify/ui-react';  \n// import { Amplify } from 'aws-amplify';  \n// import '@aws-amplify/ui-react/styles.css';  \n// import { cognitoUserPoolsTokenProvider } from 'aws-amplify/auth/cognito';  \n// import { defaultStorage } from 'aws-amplify/utils';  \n// import outputs from '../amplify_outputs.json';  \n// import { fetchAuthSession } from 'aws-amplify/auth';  \n// // 配置 AWS Amplify  \n// Amplify.configure(outputs);  \n// cognitoUserPoolsTokenProvider.setKeyValueStorage(defaultStorage);  \n// export default function Home() {  \n//   const [userEmail, setUserEmail] = useState<string | null>(null);  \n//   const [credentials, setCredentials] = useState<any>(null);  \n//   const getSession = async () => {  \n//     try {  \n//       const session = await fetchAuthSession();  \n//       console.log('完整的 session:', session);  \n//       if (session && session.credentials) {  \n//         // 確保從 session 中正確提取憑證  \n//         const credentialsData = session.credentials;  \n//         console.log('提取的憑證:', credentialsData);  \n//         setCredentials(credentialsData);  \n//       } else {  \n//         console.warn('Session 或 credentials 未定義');  \n//       }  \n//     } catch (error) {  \n//       console.error('獲取授權 session 出錯:', error);  \n//     }  \n//   };  \n//   useEffect(() => {  \n//     if (userEmail) {  \n//       console.log('用戶電子郵件在 useEffect 中:', userEmail);  \n//       getSession();  \n//     } else {  \n//       console.log('用戶電子郵件未設置');  \n//     }  \n//   }, [userEmail]);  \n//   const handleLogin = async () => {  \n//     if (userEmail && credentials) {  \n//       console.log('用戶電子郵件:', userEmail);  \n//       console.log('傳入的 Credentials:', credentials);  \n//       try {  \n//         const response = await fetch('/api/getStreamingURL', {  \n//           method: 'POST',  \n//           headers: {  \n//             'Content-Type': 'application/json',  \n//           },  \n//           body: JSON.stringify({  \n//             email: userEmail,  \n//             credentials: {  \n//               AccessKeyId: credentials.AccessKeyId,  \n//               SecretKey: credentials.SecretKey,  \n//               SessionToken: credentials.SessionToken,  \n//             },  \n//           }),  \n//         });  \n//         if (response.ok) {  \n//           const data = await response.json();  \n//           console.log('生成的 Streaming URL:', data.streamingUrl);  \n//           window.location.href = data.streamingUrl;  \n//         } else {  \n//           const data = await response.json();  \n//           console.error('錯誤:', data.error);  \n//         }  \n//       } catch (error) {  \n//         console.error('獲取串流 URL 失敗:', error);  \n//       }  \n//     } else {  \n//       console.error('用戶電子郵件或憑證缺失');  \n//       console.log('當前用戶電子郵件:', userEmail);  \n//       console.log('當前憑證:', credentials);  \n//     }  \n//   };  \n//   const handleSignOut = (signOut: () => void = () => {}) => {  \n//     localStorage.removeItem('authToken');  \n//     sessionStorage.clear();  \n//     setUserEmail(null);  \n//     signOut();  \n//   };  \n//   return (  \n//     <Authenticator hideSignUp>  \n//       {({ signOut, user }) => {  \n//         if (user) {  \n//           const email = user.signInDetails?.loginId;  \n//           if (email && userEmail !== email) {  \n//             setUserEmail(email);  \n//           }  \n//         }  \n//         return (  \n//           <main>  \n//             <p>User email: {userEmail !== null ? userEmail : 'Loading...'}</p>  \n//             <div className=\"flex flex-col space-y-4\">  \n//               <button onClick={handleLogin} className=\"btn\">  \n//                 登入並獲取串流 URL  \n//               </button>  \n//               <button onClick={() => handleSignOut(signOut)} className=\"btn\">  \n//                 登出  \n//               </button>  \n//             </div>  \n//           </main>  \n//         );  \n//       }}  \n//     </Authenticator>  \n//   );  \n// }\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n// 配置 AWS Amplify  \naws_amplify__WEBPACK_IMPORTED_MODULE_4__.Amplify.configure(_amplify_outputs_json__WEBPACK_IMPORTED_MODULE_3__);\naws_amplify_auth_cognito__WEBPACK_IMPORTED_MODULE_5__.cognitoUserPoolsTokenProvider.setKeyValueStorage(aws_amplify_utils__WEBPACK_IMPORTED_MODULE_6__.defaultStorage);\nfunction Home() {\n    _s();\n    const [userEmail, setUserEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [credentials, setCredentials] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const getSession = async ()=>{\n        try {\n            const session = await (0,aws_amplify_auth__WEBPACK_IMPORTED_MODULE_7__.fetchAuthSession)();\n            console.log(\"完整的 session:\", session);\n            if (session && session.credentials) {\n                const credentialsData = session.credentials;\n                console.log(\"提取的憑證:\", credentialsData);\n                // 檢查憑證的結構  \n                if (!credentialsData.accessKeyId || !credentialsData.secretAccessKey || !credentialsData.sessionToken) {\n                    console.error(\"憑證缺少必要的屬性\");\n                    return;\n                }\n                setCredentials(credentialsData);\n            } else {\n                console.warn(\"Session 或 credentials 未定義\");\n            }\n        } catch (error) {\n            console.error(\"獲取授權 session 出錯:\", error);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (userEmail) {\n            console.log(\"用戶電子郵件在 useEffect 中:\", userEmail);\n            getSession();\n        } else {\n            console.log(\"用戶電子郵件未設置\");\n        }\n    }, [\n        userEmail\n    ]);\n    const handleLogin = async ()=>{\n        if (userEmail && credentials) {\n            console.log(\"用戶電子郵件:\", userEmail);\n            console.log(\"傳入的 Credentials:\", credentials);\n            try {\n                const response = await fetch(\"/api/getStreamingURL\", {\n                    method: \"POST\",\n                    headers: {\n                        \"Content-Type\": \"application/json\"\n                    },\n                    body: JSON.stringify({\n                        email: userEmail,\n                        credentials: {\n                            accessKeyId: credentials.accessKeyId,\n                            secretAccessKey: credentials.secretAccessKey,\n                            sessionToken: credentials.sessionToken\n                        }\n                    })\n                });\n                if (response.ok) {\n                    const data = await response.json();\n                    console.log(\"生成的 Streaming URL:\", data.streamingUrl);\n                    window.location.href = data.streamingUrl;\n                } else {\n                    const data = await response.json();\n                    console.error(\"錯誤:\", data.error);\n                }\n            } catch (error) {\n                console.error(\"獲取串流 URL 失敗:\", error);\n            }\n        } else {\n            console.error(\"用戶電子郵件或憑證缺失\");\n            console.log(\"當前用戶電子郵件:\", userEmail);\n            console.log(\"當前憑證:\", credentials);\n        }\n    };\n    const handleSignOut = function() {\n        let signOut = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ()=>{};\n        localStorage.removeItem(\"authToken\");\n        sessionStorage.clear();\n        setUserEmail(null);\n        signOut();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_aws_amplify_ui_react__WEBPACK_IMPORTED_MODULE_8__.Authenticator, {\n        hideSignUp: true,\n        children: (param)=>{\n            let { signOut, user } = param;\n            if (user) {\n                var _user_signInDetails;\n                const email = (_user_signInDetails = user.signInDetails) === null || _user_signInDetails === void 0 ? void 0 : _user_signInDetails.loginId;\n                if (email && userEmail !== email) {\n                    setUserEmail(email);\n                }\n            }\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"User email: \",\n                            userEmail !== null ? userEmail : \"Loading...\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/hao/Desktop/amplify-as2-mfa/pages/index.tsx\",\n                        lineNumber: 222,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col space-y-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: handleLogin,\n                                className: \"btn\",\n                                children: \"登入並獲取串流 URL\"\n                            }, void 0, false, {\n                                fileName: \"/Users/hao/Desktop/amplify-as2-mfa/pages/index.tsx\",\n                                lineNumber: 224,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: ()=>handleSignOut(signOut),\n                                className: \"btn\",\n                                children: \"登出\"\n                            }, void 0, false, {\n                                fileName: \"/Users/hao/Desktop/amplify-as2-mfa/pages/index.tsx\",\n                                lineNumber: 227,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/hao/Desktop/amplify-as2-mfa/pages/index.tsx\",\n                        lineNumber: 223,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/hao/Desktop/amplify-as2-mfa/pages/index.tsx\",\n                lineNumber: 221,\n                columnNumber: 11\n            }, this);\n        }\n    }, void 0, false, {\n        fileName: \"/Users/hao/Desktop/amplify-as2-mfa/pages/index.tsx\",\n        lineNumber: 211,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"RvdO/BiwlVyqZCwWfh3NY3AYDMg=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHdEQUF3RDtBQUN4RCwyREFBMkQ7QUFDM0QsMkNBQTJDO0FBQzNDLCtDQUErQztBQUMvQyw4RUFBOEU7QUFDOUUsd0RBQXdEO0FBQ3hELG1EQUFtRDtBQUNuRCx5REFBeUQ7QUFFekQsc0JBQXNCO0FBQ3RCLGdDQUFnQztBQUNoQyxzRUFBc0U7QUFFdEUscUNBQXFDO0FBQ3JDLHVFQUF1RTtBQUN2RSxpRUFBaUU7QUFFakUsdUNBQXVDO0FBQ3ZDLGNBQWM7QUFDZCxvREFBb0Q7QUFDcEQsZ0RBQWdEO0FBQ2hELGdEQUFnRDtBQUNoRCxtQ0FBbUM7QUFDbkMseURBQXlEO0FBQ3pELG9EQUFvRDtBQUNwRCw2Q0FBNkM7QUFDN0MsbUJBQW1CO0FBQ25CLHVEQUF1RDtBQUN2RCxZQUFZO0FBQ1osMEJBQTBCO0FBQzFCLG9EQUFvRDtBQUNwRCxVQUFVO0FBQ1YsU0FBUztBQUVULHdCQUF3QjtBQUN4Qix5QkFBeUI7QUFDekIsMERBQTBEO0FBQzFELHdCQUF3QjtBQUN4QixpQkFBaUI7QUFDakIsb0NBQW9DO0FBQ3BDLFVBQVU7QUFDVix1QkFBdUI7QUFFdkIsd0NBQXdDO0FBQ3hDLHdDQUF3QztBQUN4Qyw2Q0FBNkM7QUFDN0Msd0RBQXdEO0FBQ3hELGdCQUFnQjtBQUNoQixtRUFBbUU7QUFDbkUsOEJBQThCO0FBQzlCLHlCQUF5QjtBQUN6QixvREFBb0Q7QUFDcEQsaUJBQWlCO0FBQ2pCLHFDQUFxQztBQUNyQyxrQ0FBa0M7QUFDbEMsK0JBQStCO0FBQy9CLHdEQUF3RDtBQUN4RCxvREFBb0Q7QUFDcEQsMERBQTBEO0FBQzFELG1CQUFtQjtBQUNuQixrQkFBa0I7QUFDbEIsZ0JBQWdCO0FBRWhCLCtCQUErQjtBQUMvQixrREFBa0Q7QUFDbEQsb0VBQW9FO0FBQ3BFLHdEQUF3RDtBQUN4RCxxQkFBcUI7QUFDckIsa0RBQWtEO0FBQ2xELGdEQUFnRDtBQUNoRCxjQUFjO0FBQ2QsNEJBQTRCO0FBQzVCLGtEQUFrRDtBQUNsRCxZQUFZO0FBQ1osaUJBQWlCO0FBQ2pCLHdDQUF3QztBQUN4QywrQ0FBK0M7QUFDL0MsNkNBQTZDO0FBQzdDLFVBQVU7QUFDVixTQUFTO0FBRVQsa0VBQWtFO0FBQ2xFLDhDQUE4QztBQUM5QyxnQ0FBZ0M7QUFDaEMsNEJBQTRCO0FBQzVCLG1CQUFtQjtBQUNuQixTQUFTO0FBRVQsZUFBZTtBQUNmLG1DQUFtQztBQUNuQyxvQ0FBb0M7QUFDcEMsd0JBQXdCO0FBQ3hCLHlEQUF5RDtBQUN6RCxrREFBa0Q7QUFDbEQscUNBQXFDO0FBQ3JDLGdCQUFnQjtBQUNoQixjQUFjO0FBRWQscUJBQXFCO0FBQ3JCLHFCQUFxQjtBQUNyQixtRkFBbUY7QUFDbkYsMERBQTBEO0FBQzFELGlFQUFpRTtBQUNqRSxnQ0FBZ0M7QUFDaEMsNEJBQTRCO0FBQzVCLGtGQUFrRjtBQUNsRix1QkFBdUI7QUFDdkIsNEJBQTRCO0FBQzVCLHVCQUF1QjtBQUN2QixzQkFBc0I7QUFDdEIsZUFBZTtBQUNmLGFBQWE7QUFDYix5QkFBeUI7QUFDekIsU0FBUztBQUNULElBQUk7OztBQUcrQztBQUNHO0FBQ2hCO0FBQ0k7QUFDK0I7QUFDdEI7QUFDTDtBQUNNO0FBRXBELG1CQUFtQjtBQUNuQkksZ0RBQU9BLENBQUNLLFNBQVMsQ0FBQ0Ysa0RBQU9BO0FBQ3pCRixtRkFBNkJBLENBQUNLLGtCQUFrQixDQUFDSiw2REFBY0E7QUFFaEQsU0FBU0s7O0lBQ3RCLE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHWiwrQ0FBUUEsQ0FBZ0I7SUFDMUQsTUFBTSxDQUFDYSxhQUFhQyxlQUFlLEdBQUdkLCtDQUFRQSxDQUFNO0lBRXBELE1BQU1lLGFBQWE7UUFDakIsSUFBSTtZQUNGLE1BQU1DLFVBQVUsTUFBTVQsa0VBQWdCQTtZQUN0Q1UsUUFBUUMsR0FBRyxDQUFDLGdCQUFnQkY7WUFDNUIsSUFBSUEsV0FBV0EsUUFBUUgsV0FBVyxFQUFFO2dCQUNsQyxNQUFNTSxrQkFBa0JILFFBQVFILFdBQVc7Z0JBQzNDSSxRQUFRQyxHQUFHLENBQUMsVUFBVUM7Z0JBQ3RCLFlBQVk7Z0JBQ1osSUFBSSxDQUFDQSxnQkFBZ0JDLFdBQVcsSUFBSSxDQUFDRCxnQkFBZ0JFLGVBQWUsSUFBSSxDQUFDRixnQkFBZ0JHLFlBQVksRUFBRTtvQkFDckdMLFFBQVFNLEtBQUssQ0FBQztvQkFDZDtnQkFDRjtnQkFDQVQsZUFBZUs7WUFDakIsT0FBTztnQkFDTEYsUUFBUU8sSUFBSSxDQUFDO1lBQ2Y7UUFDRixFQUFFLE9BQU9ELE9BQU87WUFDZE4sUUFBUU0sS0FBSyxDQUFDLG9CQUFvQkE7UUFDcEM7SUFDRjtJQUVBdEIsZ0RBQVNBLENBQUM7UUFDUixJQUFJVSxXQUFXO1lBQ2JNLFFBQVFDLEdBQUcsQ0FBQyx3QkFBd0JQO1lBQ3BDSTtRQUNGLE9BQU87WUFDTEUsUUFBUUMsR0FBRyxDQUFDO1FBQ2Q7SUFDRixHQUFHO1FBQUNQO0tBQVU7SUFFZCxNQUFNYyxjQUFjO1FBQ2xCLElBQUlkLGFBQWFFLGFBQWE7WUFDNUJJLFFBQVFDLEdBQUcsQ0FBQyxXQUFXUDtZQUN2Qk0sUUFBUUMsR0FBRyxDQUFDLG9CQUFvQkw7WUFDaEMsSUFBSTtnQkFDRixNQUFNYSxXQUFXLE1BQU1DLE1BQU0sd0JBQXdCO29CQUNuREMsUUFBUTtvQkFDUkMsU0FBUzt3QkFDUCxnQkFBZ0I7b0JBQ2xCO29CQUNBQyxNQUFNQyxLQUFLQyxTQUFTLENBQUM7d0JBQ25CQyxPQUFPdEI7d0JBQ1BFLGFBQWE7NEJBQ1hPLGFBQWFQLFlBQVlPLFdBQVc7NEJBQ3BDQyxpQkFBaUJSLFlBQVlRLGVBQWU7NEJBQzVDQyxjQUFjVCxZQUFZUyxZQUFZO3dCQUN4QztvQkFDRjtnQkFDRjtnQkFFQSxJQUFJSSxTQUFTUSxFQUFFLEVBQUU7b0JBQ2YsTUFBTUMsT0FBTyxNQUFNVCxTQUFTVSxJQUFJO29CQUNoQ25CLFFBQVFDLEdBQUcsQ0FBQyxzQkFBc0JpQixLQUFLRSxZQUFZO29CQUNuREMsT0FBT0MsUUFBUSxDQUFDQyxJQUFJLEdBQUdMLEtBQUtFLFlBQVk7Z0JBQzFDLE9BQU87b0JBQ0wsTUFBTUYsT0FBTyxNQUFNVCxTQUFTVSxJQUFJO29CQUNoQ25CLFFBQVFNLEtBQUssQ0FBQyxPQUFPWSxLQUFLWixLQUFLO2dCQUNqQztZQUNGLEVBQUUsT0FBT0EsT0FBTztnQkFDZE4sUUFBUU0sS0FBSyxDQUFDLGdCQUFnQkE7WUFDaEM7UUFDRixPQUFPO1lBQ0xOLFFBQVFNLEtBQUssQ0FBQztZQUNkTixRQUFRQyxHQUFHLENBQUMsYUFBYVA7WUFDekJNLFFBQVFDLEdBQUcsQ0FBQyxTQUFTTDtRQUN2QjtJQUNGO0lBRUEsTUFBTTRCLGdCQUFnQjtZQUFDQywyRUFBc0IsS0FBTztRQUNsREMsYUFBYUMsVUFBVSxDQUFDO1FBQ3hCQyxlQUFlQyxLQUFLO1FBQ3BCbEMsYUFBYTtRQUNiOEI7SUFDRjtJQUVBLHFCQUNFLDhEQUFDeEMsZ0VBQWFBO1FBQUM2QyxVQUFVO2tCQUN0QjtnQkFBQyxFQUFFTCxPQUFPLEVBQUVNLElBQUksRUFBRTtZQUNqQixJQUFJQSxNQUFNO29CQUNNQTtnQkFBZCxNQUFNZixTQUFRZSxzQkFBQUEsS0FBS0MsYUFBYSxjQUFsQkQsMENBQUFBLG9CQUFvQkUsT0FBTztnQkFDekMsSUFBSWpCLFNBQVN0QixjQUFjc0IsT0FBTztvQkFDaENyQixhQUFhcUI7Z0JBQ2Y7WUFDRjtZQUVBLHFCQUNFLDhEQUFDa0I7O2tDQUNDLDhEQUFDQzs7NEJBQUU7NEJBQWF6QyxjQUFjLE9BQU9BLFlBQVk7Ozs7Ozs7a0NBQ2pELDhEQUFDMEM7d0JBQUlDLFdBQVU7OzBDQUNiLDhEQUFDQztnQ0FBT0MsU0FBUy9CO2dDQUFhNkIsV0FBVTswQ0FBTTs7Ozs7OzBDQUc5Qyw4REFBQ0M7Z0NBQU9DLFNBQVMsSUFBTWYsY0FBY0M7Z0NBQVVZLFdBQVU7MENBQU07Ozs7Ozs7Ozs7Ozs7Ozs7OztRQU12RTs7Ozs7O0FBR047R0F6R3dCNUM7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7ICBcbi8vIGltcG9ydCB7IEF1dGhlbnRpY2F0b3IgfSBmcm9tICdAYXdzLWFtcGxpZnkvdWktcmVhY3QnOyAgXG4vLyBpbXBvcnQgeyBBbXBsaWZ5IH0gZnJvbSAnYXdzLWFtcGxpZnknOyAgXG4vLyBpbXBvcnQgJ0Bhd3MtYW1wbGlmeS91aS1yZWFjdC9zdHlsZXMuY3NzJzsgIFxuLy8gaW1wb3J0IHsgY29nbml0b1VzZXJQb29sc1Rva2VuUHJvdmlkZXIgfSBmcm9tICdhd3MtYW1wbGlmeS9hdXRoL2NvZ25pdG8nOyAgXG4vLyBpbXBvcnQgeyBkZWZhdWx0U3RvcmFnZSB9IGZyb20gJ2F3cy1hbXBsaWZ5L3V0aWxzJzsgIFxuLy8gaW1wb3J0IG91dHB1dHMgZnJvbSAnLi4vYW1wbGlmeV9vdXRwdXRzLmpzb24nOyAgXG4vLyBpbXBvcnQgeyBmZXRjaEF1dGhTZXNzaW9uIH0gZnJvbSAnYXdzLWFtcGxpZnkvYXV0aCc7ICBcblxuLy8gLy8g6YWN572uIEFXUyBBbXBsaWZ5ICBcbi8vIEFtcGxpZnkuY29uZmlndXJlKG91dHB1dHMpOyAgXG4vLyBjb2duaXRvVXNlclBvb2xzVG9rZW5Qcm92aWRlci5zZXRLZXlWYWx1ZVN0b3JhZ2UoZGVmYXVsdFN0b3JhZ2UpOyAgXG5cbi8vIGV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7ICBcbi8vICAgY29uc3QgW3VzZXJFbWFpbCwgc2V0VXNlckVtYWlsXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpOyAgXG4vLyAgIGNvbnN0IFtjcmVkZW50aWFscywgc2V0Q3JlZGVudGlhbHNdID0gdXNlU3RhdGU8YW55PihudWxsKTsgIFxuXG4vLyAgIGNvbnN0IGdldFNlc3Npb24gPSBhc3luYyAoKSA9PiB7ICBcbi8vICAgICB0cnkgeyAgXG4vLyAgICAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZmV0Y2hBdXRoU2Vzc2lvbigpOyAgXG4vLyAgICAgICBjb25zb2xlLmxvZygn5a6M5pW055qEIHNlc3Npb246Jywgc2Vzc2lvbik7ICBcbi8vICAgICAgIGlmIChzZXNzaW9uICYmIHNlc3Npb24uY3JlZGVudGlhbHMpIHsgIFxuLy8gICAgICAgICAvLyDnorrkv53lvp4gc2Vzc2lvbiDkuK3mraPnorrmj5Dlj5bmhpHorYkgIFxuLy8gICAgICAgICBjb25zdCBjcmVkZW50aWFsc0RhdGEgPSBzZXNzaW9uLmNyZWRlbnRpYWxzOyAgXG4vLyAgICAgICAgIGNvbnNvbGUubG9nKCfmj5Dlj5bnmoTmhpHorYk6JywgY3JlZGVudGlhbHNEYXRhKTsgIFxuLy8gICAgICAgICBzZXRDcmVkZW50aWFscyhjcmVkZW50aWFsc0RhdGEpOyAgXG4vLyAgICAgICB9IGVsc2UgeyAgXG4vLyAgICAgICAgIGNvbnNvbGUud2FybignU2Vzc2lvbiDmiJYgY3JlZGVudGlhbHMg5pyq5a6a576pJyk7ICBcbi8vICAgICAgIH0gIFxuLy8gICAgIH0gY2F0Y2ggKGVycm9yKSB7ICBcbi8vICAgICAgIGNvbnNvbGUuZXJyb3IoJ+eNsuWPluaOiOasiiBzZXNzaW9uIOWHuumMrzonLCBlcnJvcik7ICBcbi8vICAgICB9ICBcbi8vICAgfTsgIFxuXG4vLyAgIHVzZUVmZmVjdCgoKSA9PiB7ICBcbi8vICAgICBpZiAodXNlckVtYWlsKSB7ICBcbi8vICAgICAgIGNvbnNvbGUubG9nKCfnlKjmiLbpm7vlrZDpg7Xku7blnKggdXNlRWZmZWN0IOS4rTonLCB1c2VyRW1haWwpOyAgXG4vLyAgICAgICBnZXRTZXNzaW9uKCk7ICBcbi8vICAgICB9IGVsc2UgeyAgXG4vLyAgICAgICBjb25zb2xlLmxvZygn55So5oi26Zu75a2Q6YO15Lu25pyq6Kit572uJyk7ICBcbi8vICAgICB9ICBcbi8vICAgfSwgW3VzZXJFbWFpbF0pOyAgXG5cbi8vICAgY29uc3QgaGFuZGxlTG9naW4gPSBhc3luYyAoKSA9PiB7ICBcbi8vICAgICBpZiAodXNlckVtYWlsICYmIGNyZWRlbnRpYWxzKSB7ICBcbi8vICAgICAgIGNvbnNvbGUubG9nKCfnlKjmiLbpm7vlrZDpg7Xku7Y6JywgdXNlckVtYWlsKTsgIFxuLy8gICAgICAgY29uc29sZS5sb2coJ+WCs+WFpeeahCBDcmVkZW50aWFsczonLCBjcmVkZW50aWFscyk7ICBcbi8vICAgICAgIHRyeSB7ICBcbi8vICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnL2FwaS9nZXRTdHJlYW1pbmdVUkwnLCB7ICBcbi8vICAgICAgICAgICBtZXRob2Q6ICdQT1NUJywgIFxuLy8gICAgICAgICAgIGhlYWRlcnM6IHsgIFxuLy8gICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJywgIFxuLy8gICAgICAgICAgIH0sICBcbi8vICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7ICBcbi8vICAgICAgICAgICAgIGVtYWlsOiB1c2VyRW1haWwsICBcbi8vICAgICAgICAgICAgIGNyZWRlbnRpYWxzOiB7ICBcbi8vICAgICAgICAgICAgICAgQWNjZXNzS2V5SWQ6IGNyZWRlbnRpYWxzLkFjY2Vzc0tleUlkLCAgXG4vLyAgICAgICAgICAgICAgIFNlY3JldEtleTogY3JlZGVudGlhbHMuU2VjcmV0S2V5LCAgXG4vLyAgICAgICAgICAgICAgIFNlc3Npb25Ub2tlbjogY3JlZGVudGlhbHMuU2Vzc2lvblRva2VuLCAgXG4vLyAgICAgICAgICAgICB9LCAgXG4vLyAgICAgICAgICAgfSksICBcbi8vICAgICAgICAgfSk7ICBcblxuLy8gICAgICAgICBpZiAocmVzcG9uc2Uub2spIHsgIFxuLy8gICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7ICBcbi8vICAgICAgICAgICBjb25zb2xlLmxvZygn55Sf5oiQ55qEIFN0cmVhbWluZyBVUkw6JywgZGF0YS5zdHJlYW1pbmdVcmwpOyAgXG4vLyAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBkYXRhLnN0cmVhbWluZ1VybDsgIFxuLy8gICAgICAgICB9IGVsc2UgeyAgXG4vLyAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTsgIFxuLy8gICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ+mMr+iqpDonLCBkYXRhLmVycm9yKTsgIFxuLy8gICAgICAgICB9ICBcbi8vICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7ICBcbi8vICAgICAgICAgY29uc29sZS5lcnJvcign542y5Y+W5Liy5rWBIFVSTCDlpLHmlZc6JywgZXJyb3IpOyAgXG4vLyAgICAgICB9ICBcbi8vICAgICB9IGVsc2UgeyAgXG4vLyAgICAgICBjb25zb2xlLmVycm9yKCfnlKjmiLbpm7vlrZDpg7Xku7bmiJbmhpHorYnnvLrlpLEnKTsgIFxuLy8gICAgICAgY29uc29sZS5sb2coJ+eVtuWJjeeUqOaItumbu+WtkOmDteS7tjonLCB1c2VyRW1haWwpOyAgXG4vLyAgICAgICBjb25zb2xlLmxvZygn55W25YmN5oaR6K2JOicsIGNyZWRlbnRpYWxzKTsgIFxuLy8gICAgIH0gIFxuLy8gICB9OyAgXG5cbi8vICAgY29uc3QgaGFuZGxlU2lnbk91dCA9IChzaWduT3V0OiAoKSA9PiB2b2lkID0gKCkgPT4ge30pID0+IHsgIFxuLy8gICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdhdXRoVG9rZW4nKTsgIFxuLy8gICAgIHNlc3Npb25TdG9yYWdlLmNsZWFyKCk7ICBcbi8vICAgICBzZXRVc2VyRW1haWwobnVsbCk7ICBcbi8vICAgICBzaWduT3V0KCk7ICBcbi8vICAgfTsgIFxuXG4vLyAgIHJldHVybiAoICBcbi8vICAgICA8QXV0aGVudGljYXRvciBoaWRlU2lnblVwPiAgXG4vLyAgICAgICB7KHsgc2lnbk91dCwgdXNlciB9KSA9PiB7ICBcbi8vICAgICAgICAgaWYgKHVzZXIpIHsgIFxuLy8gICAgICAgICAgIGNvbnN0IGVtYWlsID0gdXNlci5zaWduSW5EZXRhaWxzPy5sb2dpbklkOyAgXG4vLyAgICAgICAgICAgaWYgKGVtYWlsICYmIHVzZXJFbWFpbCAhPT0gZW1haWwpIHsgIFxuLy8gICAgICAgICAgICAgc2V0VXNlckVtYWlsKGVtYWlsKTsgIFxuLy8gICAgICAgICAgIH0gIFxuLy8gICAgICAgICB9ICBcblxuLy8gICAgICAgICByZXR1cm4gKCAgXG4vLyAgICAgICAgICAgPG1haW4+ICBcbi8vICAgICAgICAgICAgIDxwPlVzZXIgZW1haWw6IHt1c2VyRW1haWwgIT09IG51bGwgPyB1c2VyRW1haWwgOiAnTG9hZGluZy4uLid9PC9wPiAgXG4vLyAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgc3BhY2UteS00XCI+ICBcbi8vICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVMb2dpbn0gY2xhc3NOYW1lPVwiYnRuXCI+ICBcbi8vICAgICAgICAgICAgICAgICDnmbvlhaXkuKbnjbLlj5bkuLLmtYEgVVJMICBcbi8vICAgICAgICAgICAgICAgPC9idXR0b24+ICBcbi8vICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVTaWduT3V0KHNpZ25PdXQpfSBjbGFzc05hbWU9XCJidG5cIj4gIFxuLy8gICAgICAgICAgICAgICAgIOeZu+WHuiAgXG4vLyAgICAgICAgICAgICAgIDwvYnV0dG9uPiAgXG4vLyAgICAgICAgICAgICA8L2Rpdj4gIFxuLy8gICAgICAgICAgIDwvbWFpbj4gIFxuLy8gICAgICAgICApOyAgXG4vLyAgICAgICB9fSAgXG4vLyAgICAgPC9BdXRoZW50aWNhdG9yPiAgXG4vLyAgICk7ICBcbi8vIH1cblxuXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JzsgIFxuaW1wb3J0IHsgQXV0aGVudGljYXRvciB9IGZyb20gJ0Bhd3MtYW1wbGlmeS91aS1yZWFjdCc7ICBcbmltcG9ydCB7IEFtcGxpZnkgfSBmcm9tICdhd3MtYW1wbGlmeSc7ICBcbmltcG9ydCAnQGF3cy1hbXBsaWZ5L3VpLXJlYWN0L3N0eWxlcy5jc3MnOyAgXG5pbXBvcnQgeyBjb2duaXRvVXNlclBvb2xzVG9rZW5Qcm92aWRlciB9IGZyb20gJ2F3cy1hbXBsaWZ5L2F1dGgvY29nbml0byc7ICBcbmltcG9ydCB7IGRlZmF1bHRTdG9yYWdlIH0gZnJvbSAnYXdzLWFtcGxpZnkvdXRpbHMnOyAgXG5pbXBvcnQgb3V0cHV0cyBmcm9tICcuLi9hbXBsaWZ5X291dHB1dHMuanNvbic7ICBcbmltcG9ydCB7IGZldGNoQXV0aFNlc3Npb24gfSBmcm9tICdhd3MtYW1wbGlmeS9hdXRoJzsgIFxuXG4vLyDphY3nva4gQVdTIEFtcGxpZnkgIFxuQW1wbGlmeS5jb25maWd1cmUob3V0cHV0cyk7ICBcbmNvZ25pdG9Vc2VyUG9vbHNUb2tlblByb3ZpZGVyLnNldEtleVZhbHVlU3RvcmFnZShkZWZhdWx0U3RvcmFnZSk7ICBcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHsgIFxuICBjb25zdCBbdXNlckVtYWlsLCBzZXRVc2VyRW1haWxdID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbCk7ICBcbiAgY29uc3QgW2NyZWRlbnRpYWxzLCBzZXRDcmVkZW50aWFsc10gPSB1c2VTdGF0ZTxhbnk+KG51bGwpOyAgXG5cbiAgY29uc3QgZ2V0U2Vzc2lvbiA9IGFzeW5jICgpID0+IHsgIFxuICAgIHRyeSB7ICBcbiAgICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBmZXRjaEF1dGhTZXNzaW9uKCk7ICBcbiAgICAgIGNvbnNvbGUubG9nKCflrozmlbTnmoQgc2Vzc2lvbjonLCBzZXNzaW9uKTsgIFxuICAgICAgaWYgKHNlc3Npb24gJiYgc2Vzc2lvbi5jcmVkZW50aWFscykgeyAgXG4gICAgICAgIGNvbnN0IGNyZWRlbnRpYWxzRGF0YSA9IHNlc3Npb24uY3JlZGVudGlhbHM7ICBcbiAgICAgICAgY29uc29sZS5sb2coJ+aPkOWPlueahOaGkeitiTonLCBjcmVkZW50aWFsc0RhdGEpOyAgXG4gICAgICAgIC8vIOaqouafpeaGkeitieeahOe1kOaniyAgXG4gICAgICAgIGlmICghY3JlZGVudGlhbHNEYXRhLmFjY2Vzc0tleUlkIHx8ICFjcmVkZW50aWFsc0RhdGEuc2VjcmV0QWNjZXNzS2V5IHx8ICFjcmVkZW50aWFsc0RhdGEuc2Vzc2lvblRva2VuKSB7ICBcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCfmhpHorYnnvLrlsJHlv4XopoHnmoTlsazmgKcnKTsgIFxuICAgICAgICAgIHJldHVybjsgIFxuICAgICAgICB9ICBcbiAgICAgICAgc2V0Q3JlZGVudGlhbHMoY3JlZGVudGlhbHNEYXRhKTsgIFxuICAgICAgfSBlbHNlIHsgIFxuICAgICAgICBjb25zb2xlLndhcm4oJ1Nlc3Npb24g5oiWIGNyZWRlbnRpYWxzIOacquWumue+qScpOyAgXG4gICAgICB9ICBcbiAgICB9IGNhdGNoIChlcnJvcikgeyAgXG4gICAgICBjb25zb2xlLmVycm9yKCfnjbLlj5bmjojmrIogc2Vzc2lvbiDlh7rpjK86JywgZXJyb3IpOyAgXG4gICAgfSAgXG4gIH07ICBcblxuICB1c2VFZmZlY3QoKCkgPT4geyAgXG4gICAgaWYgKHVzZXJFbWFpbCkgeyAgXG4gICAgICBjb25zb2xlLmxvZygn55So5oi26Zu75a2Q6YO15Lu25ZyoIHVzZUVmZmVjdCDkuK06JywgdXNlckVtYWlsKTsgIFxuICAgICAgZ2V0U2Vzc2lvbigpOyAgXG4gICAgfSBlbHNlIHsgIFxuICAgICAgY29uc29sZS5sb2coJ+eUqOaItumbu+WtkOmDteS7tuacquioree9ricpOyAgXG4gICAgfSAgXG4gIH0sIFt1c2VyRW1haWxdKTsgIFxuXG4gIGNvbnN0IGhhbmRsZUxvZ2luID0gYXN5bmMgKCkgPT4geyAgXG4gICAgaWYgKHVzZXJFbWFpbCAmJiBjcmVkZW50aWFscykgeyAgXG4gICAgICBjb25zb2xlLmxvZygn55So5oi26Zu75a2Q6YO15Lu2OicsIHVzZXJFbWFpbCk7ICBcbiAgICAgIGNvbnNvbGUubG9nKCflgrPlhaXnmoQgQ3JlZGVudGlhbHM6JywgY3JlZGVudGlhbHMpOyAgXG4gICAgICB0cnkgeyAgXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9hcGkvZ2V0U3RyZWFtaW5nVVJMJywgeyAgXG4gICAgICAgICAgbWV0aG9kOiAnUE9TVCcsICBcbiAgICAgICAgICBoZWFkZXJzOiB7ICBcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsICBcbiAgICAgICAgICB9LCAgXG4gICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyAgXG4gICAgICAgICAgICBlbWFpbDogdXNlckVtYWlsLCAgXG4gICAgICAgICAgICBjcmVkZW50aWFsczogeyAgXG4gICAgICAgICAgICAgIGFjY2Vzc0tleUlkOiBjcmVkZW50aWFscy5hY2Nlc3NLZXlJZCwgIFxuICAgICAgICAgICAgICBzZWNyZXRBY2Nlc3NLZXk6IGNyZWRlbnRpYWxzLnNlY3JldEFjY2Vzc0tleSwgIFxuICAgICAgICAgICAgICBzZXNzaW9uVG9rZW46IGNyZWRlbnRpYWxzLnNlc3Npb25Ub2tlbiwgIFxuICAgICAgICAgICAgfSwgIFxuICAgICAgICAgIH0pLCAgXG4gICAgICAgIH0pOyAgXG5cbiAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7ICBcbiAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpOyAgXG4gICAgICAgICAgY29uc29sZS5sb2coJ+eUn+aIkOeahCBTdHJlYW1pbmcgVVJMOicsIGRhdGEuc3RyZWFtaW5nVXJsKTsgIFxuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gZGF0YS5zdHJlYW1pbmdVcmw7ICBcbiAgICAgICAgfSBlbHNlIHsgIFxuICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7ICBcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCfpjK/oqqQ6JywgZGF0YS5lcnJvcik7ICBcbiAgICAgICAgfSAgXG4gICAgICB9IGNhdGNoIChlcnJvcikgeyAgXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ+eNsuWPluS4sua1gSBVUkwg5aSx5pWXOicsIGVycm9yKTsgIFxuICAgICAgfSAgXG4gICAgfSBlbHNlIHsgIFxuICAgICAgY29uc29sZS5lcnJvcign55So5oi26Zu75a2Q6YO15Lu25oiW5oaR6K2J57y65aSxJyk7ICBcbiAgICAgIGNvbnNvbGUubG9nKCfnlbbliY3nlKjmiLbpm7vlrZDpg7Xku7Y6JywgdXNlckVtYWlsKTsgIFxuICAgICAgY29uc29sZS5sb2coJ+eVtuWJjeaGkeitiTonLCBjcmVkZW50aWFscyk7ICBcbiAgICB9ICBcbiAgfTsgIFxuXG4gIGNvbnN0IGhhbmRsZVNpZ25PdXQgPSAoc2lnbk91dDogKCkgPT4gdm9pZCA9ICgpID0+IHt9KSA9PiB7ICBcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnYXV0aFRva2VuJyk7ICBcbiAgICBzZXNzaW9uU3RvcmFnZS5jbGVhcigpOyAgXG4gICAgc2V0VXNlckVtYWlsKG51bGwpOyAgXG4gICAgc2lnbk91dCgpOyAgXG4gIH07ICBcblxuICByZXR1cm4gKCAgXG4gICAgPEF1dGhlbnRpY2F0b3IgaGlkZVNpZ25VcD4gIFxuICAgICAgeyh7IHNpZ25PdXQsIHVzZXIgfSkgPT4geyAgXG4gICAgICAgIGlmICh1c2VyKSB7ICBcbiAgICAgICAgICBjb25zdCBlbWFpbCA9IHVzZXIuc2lnbkluRGV0YWlscz8ubG9naW5JZDsgIFxuICAgICAgICAgIGlmIChlbWFpbCAmJiB1c2VyRW1haWwgIT09IGVtYWlsKSB7ICBcbiAgICAgICAgICAgIHNldFVzZXJFbWFpbChlbWFpbCk7ICBcbiAgICAgICAgICB9ICBcbiAgICAgICAgfSAgXG5cbiAgICAgICAgcmV0dXJuICggIFxuICAgICAgICAgIDxtYWluPiAgXG4gICAgICAgICAgICA8cD5Vc2VyIGVtYWlsOiB7dXNlckVtYWlsICE9PSBudWxsID8gdXNlckVtYWlsIDogJ0xvYWRpbmcuLi4nfTwvcD4gIFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHNwYWNlLXktNFwiPiAgXG4gICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlTG9naW59IGNsYXNzTmFtZT1cImJ0blwiPiAgXG4gICAgICAgICAgICAgICAg55m75YWl5Lim542y5Y+W5Liy5rWBIFVSTCAgXG4gICAgICAgICAgICAgIDwvYnV0dG9uPiAgXG4gICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlU2lnbk91dChzaWduT3V0KX0gY2xhc3NOYW1lPVwiYnRuXCI+ICBcbiAgICAgICAgICAgICAgICDnmbvlh7ogIFxuICAgICAgICAgICAgICA8L2J1dHRvbj4gIFxuICAgICAgICAgICAgPC9kaXY+ICBcbiAgICAgICAgICA8L21haW4+ICBcbiAgICAgICAgKTsgIFxuICAgICAgfX0gIFxuICAgIDwvQXV0aGVudGljYXRvcj4gIFxuICApOyAgXG59Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJBdXRoZW50aWNhdG9yIiwiQW1wbGlmeSIsImNvZ25pdG9Vc2VyUG9vbHNUb2tlblByb3ZpZGVyIiwiZGVmYXVsdFN0b3JhZ2UiLCJvdXRwdXRzIiwiZmV0Y2hBdXRoU2Vzc2lvbiIsImNvbmZpZ3VyZSIsInNldEtleVZhbHVlU3RvcmFnZSIsIkhvbWUiLCJ1c2VyRW1haWwiLCJzZXRVc2VyRW1haWwiLCJjcmVkZW50aWFscyIsInNldENyZWRlbnRpYWxzIiwiZ2V0U2Vzc2lvbiIsInNlc3Npb24iLCJjb25zb2xlIiwibG9nIiwiY3JlZGVudGlhbHNEYXRhIiwiYWNjZXNzS2V5SWQiLCJzZWNyZXRBY2Nlc3NLZXkiLCJzZXNzaW9uVG9rZW4iLCJlcnJvciIsIndhcm4iLCJoYW5kbGVMb2dpbiIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJlbWFpbCIsIm9rIiwiZGF0YSIsImpzb24iLCJzdHJlYW1pbmdVcmwiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJoYW5kbGVTaWduT3V0Iiwic2lnbk91dCIsImxvY2FsU3RvcmFnZSIsInJlbW92ZUl0ZW0iLCJzZXNzaW9uU3RvcmFnZSIsImNsZWFyIiwiaGlkZVNpZ25VcCIsInVzZXIiLCJzaWduSW5EZXRhaWxzIiwibG9naW5JZCIsIm1haW4iLCJwIiwiZGl2IiwiY2xhc3NOYW1lIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});