(()=>{var e={};e.id=527,e.ids=[527],e.modules={10846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},19121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},29294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},63033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},55511:e=>{"use strict";e.exports=require("crypto")},14985:e=>{"use strict";e.exports=require("dns")},94735:e=>{"use strict";e.exports=require("events")},29021:e=>{"use strict";e.exports=require("fs")},81630:e=>{"use strict";e.exports=require("http")},73496:e=>{"use strict";e.exports=require("http2")},91645:e=>{"use strict";e.exports=require("net")},21820:e=>{"use strict";e.exports=require("os")},33873:e=>{"use strict";e.exports=require("path")},19771:e=>{"use strict";e.exports=require("process")},27910:e=>{"use strict";e.exports=require("stream")},34631:e=>{"use strict";e.exports=require("tls")},79551:e=>{"use strict";e.exports=require("url")},28354:e=>{"use strict";e.exports=require("util")},74075:e=>{"use strict";e.exports=require("zlib")},4633:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>i.a,__next_app__:()=>u,pages:()=>c,routeModule:()=>p,tree:()=>d});var o=r(70260),s=r(28203),a=r(25155),i=r.n(a),n=r(67292),l={};for(let e in n)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>n[e]);r.d(t,l);let d=["",{children:["error",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,71844)),"D:\\MY PROJECTS\\Web Dev\\skill-main\\src\\app\\error\\page.tsx"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,70440))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,71354)),"D:\\MY PROJECTS\\Web Dev\\skill-main\\src\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,19937,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,70440))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["D:\\MY PROJECTS\\Web Dev\\skill-main\\src\\app\\error\\page.tsx"],u={require:r,loadChunk:()=>Promise.resolve()},p=new o.AppPageRouteModule({definition:{kind:s.RouteKind.APP_PAGE,page:"/error/page",pathname:"/error",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},15891:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,13219,23)),Promise.resolve().then(r.t.bind(r,34863,23)),Promise.resolve().then(r.t.bind(r,25155,23)),Promise.resolve().then(r.t.bind(r,9350,23)),Promise.resolve().then(r.t.bind(r,96313,23)),Promise.resolve().then(r.t.bind(r,48530,23)),Promise.resolve().then(r.t.bind(r,88921,23))},52843:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,66959,23)),Promise.resolve().then(r.t.bind(r,33875,23)),Promise.resolve().then(r.t.bind(r,88903,23)),Promise.resolve().then(r.t.bind(r,84178,23)),Promise.resolve().then(r.t.bind(r,86013,23)),Promise.resolve().then(r.t.bind(r,87190,23)),Promise.resolve().then(r.t.bind(r,61365,23))},65687:(e,t,r)=>{Promise.resolve().then(r.bind(r,13887)),Promise.resolve().then(r.bind(r,1524))},93711:(e,t,r)=>{Promise.resolve().then(r.bind(r,97195)),Promise.resolve().then(r.bind(r,57312))},96487:()=>{},78335:()=>{},97195:(e,t,r)=>{"use strict";r.d(t,{default:()=>d});var o=r(45512),s=r(58009),a=r(79334),i=r(57312),n=r(26008),l=r(25023);let d=()=>{let[e,t]=(0,s.useState)(!1),r=(0,a.usePathname)(),d=(0,a.useRouter)(),{user:c,logout:u}=(0,i.Z)(),[p,h]=(0,s.useState)(!1),g=e=>{t(!1),d.push(e)};return(0,o.jsxs)("header",{className:"flex flex-wrap flex-row justify-between md:items-center md:space-x-4 bg-white py-6 px-6 relative shadow-md",children:[(0,o.jsx)("button",{onClick:()=>g("/"),className:"block",children:(0,o.jsxs)(n.default,{href:"/",className:"flex items-center space-x-2",children:[(0,o.jsx)(l.A,{className:"h-8 w-8 text-blue-600"}),(0,o.jsx)("span",{className:"text-xl font-bold text-gray-900",children:"SkillMap Navigator"})]})}),(0,o.jsx)("button",{onClick:()=>{t(!e)},className:"inline-block md:hidden w-10 h-10 bg-gray-200 text-gray-600 p-2 rounded-lg shadow hover:shadow-md transition duration-200",children:(0,o.jsx)("svg",{fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:(0,o.jsx)("path",{fillRule:"evenodd",d:"M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",clipRule:"evenodd"})})}),(0,o.jsxs)("nav",{className:`${e?"":"hidden"} md:inline-flex absolute md:relative top-16 left-0 md:top-0 z-20 flex flex-col md:flex-row md:space-x-6 font-semibold w-full md:w-auto bg-white shadow-lg rounded-lg md:rounded-none md:shadow-none md:bg-transparent p-6 pt-0 md:p-0`,children:[(0,o.jsx)("button",{onClick:()=>g("/"),className:`block py-3 px-4 rounded-lg shadow-md hover:shadow-lg transition duration-200 ${"/"===r?"text-indigo-600 bg-gray-100":"text-gray-600 bg-white"} hover:bg-gray-50`,children:"Home"}),(0,o.jsx)("button",{onClick:()=>g("/how"),className:`block py-3 px-4 rounded-lg shadow-md hover:shadow-lg transition duration-200 ${"/how"===r?"text-indigo-600 bg-gray-100":"text-gray-600 bg-white"} hover:bg-gray-50`,children:"How it Works"}),c&&"Employee"===c.role&&(0,o.jsx)("button",{onClick:()=>g("/employeeForm"),className:`block py-3 px-4 rounded-lg shadow-md hover:shadow-lg transition duration-200 ${"/employeeForm"===r?"text-indigo-600 bg-gray-100":"text-gray-600 bg-white"} hover:bg-gray-50`,children:"Employee"}),c&&"Company"===c.role&&(0,o.jsx)("button",{onClick:()=>g("/CorpForm"),className:`block py-3 px-4 rounded-lg shadow-md hover:shadow-lg transition duration-200 ${"/CorpForm"===r?"text-indigo-600 bg-gray-100":"text-gray-600 bg-white"} hover:bg-gray-50`,children:"Corporation"}),c&&"Company"===c.role&&(0,o.jsx)("button",{onClick:()=>g("/jobs"),className:`block py-3 px-4 rounded-lg shadow-md hover:shadow-lg transition duration-200 ${"/jobs"===r?"text-indigo-600 bg-gray-100":"text-gray-600 bg-white"} hover:bg-gray-50`,children:"Report"}),c&&"Company"===c.role&&(0,o.jsx)("button",{onClick:()=>g("/courses"),className:`block py-3 px-4 rounded-lg shadow-md hover:shadow-lg transition duration-200 ${"/courses"===r?"text-indigo-600 bg-gray-100":"text-gray-600 bg-white"} hover:bg-gray-50`,children:"Courses"}),c&&"Employee"===c.role&&(0,o.jsx)("button",{onClick:()=>g("/courses/ecourses"),className:`block py-3 px-4 rounded-lg shadow-md hover:shadow-lg transition duration-200 ${"/courses"===r?"text-indigo-600 bg-gray-100":"text-gray-600 bg-white"} hover:bg-gray-50`,children:"Courses"}),(0,o.jsx)("button",{onClick:()=>g("/about"),className:`block py-3 px-4 rounded-lg shadow-md hover:shadow-lg transition duration-200 ${"/about"===r?"text-indigo-600 bg-gray-100":"text-gray-600 bg-white"} hover:bg-gray-50`,children:"About us"}),c?(0,o.jsx)("button",{onClick:()=>{h(!0)},className:"block py-3 px-4 rounded-lg shadow-md hover:shadow-lg transition duration-200 text-gray-600 bg-white hover:bg-gray-50",children:"Logout"}):(0,o.jsx)("button",{onClick:()=>g("/login"),className:`block py-3 px-4 rounded-lg shadow-md hover:shadow-lg transition duration-200 ${"/login"===r?"text-indigo-600 bg-gray-100":"text-gray-600 bg-white"} hover:bg-gray-50`,children:"Login"})]}),p&&(0,o.jsx)("div",{className:"fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-20",children:(0,o.jsxs)("div",{className:"bg-white p-6 rounded-lg shadow-lg",children:[(0,o.jsx)("h3",{className:"text-lg font-semibold mb-4",children:"Logout"}),(0,o.jsx)("p",{className:"text-gray-700 mb-4",children:"Are you sure you want to logout?"}),(0,o.jsxs)("div",{className:"flex justify-end",children:[(0,o.jsx)("button",{onClick:()=>{h(!1)},className:"px-4 py-2 text-gray-700 hover:text-gray-900",children:"Cancel"}),(0,o.jsx)("button",{onClick:()=>{h(!1),u(),d.push("/login")},className:"px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600",children:"Logout"})]})]})})]})}},5600:(e,t,r)=>{"use strict";r.d(t,{db:()=>l,j2:()=>d});var o=r(46722),s=r(17656),a=r(42390),i=r(52746);let n=(0,o.Wp)({apiKey:"AIzaSyBJiKAulzrw1igg9paw_qRqYPX-orpHC3M",authDomain:"sample-firebase-ai-app-13fca.firebaseapp.com",projectId:"sample-firebase-ai-app-13fca",storageBucket:"sample-firebase-ai-app-13fca.firebasestorage.app",messagingSenderId:"776146262459",appId:"1:776146262459:web:e41cc1003826f8d4070c9e"}),l=(0,s.aU)(n);(0,a.c7)(n);let d=(0,i.xI)(n);new i.HF},57312:(e,t,r)=>{"use strict";r.d(t,{Z:()=>d,default:()=>l});var o=r(45512),s=r(5600),a=r(52746),i=(r(17656),r(58009));let n=(0,i.createContext)(null);function l({children:e}){let[t,r]=(0,i.useState)(null),l=async()=>{let e=s.j2.currentUser;if(e)try{await (0,a.gA)(e),alert("Verification email sent!")}catch(e){console.error("Error sending verification email:",e),alert("Failed to send verification email.")}},d=async()=>{try{await (0,a.CI)(s.j2),r(null)}catch(e){console.error("Error logging out:",e),alert("Failed to log out.")}};return(0,o.jsx)(n.Provider,{value:{user:t,setUser:r,resendVerificationEmail:l,logout:d},children:e})}let d=()=>{let e=(0,i.useContext)(n);if(!e)throw Error("useAuthContext must be used within an AuthContextProvider");return e}},13887:(e,t,r)=>{"use strict";r.d(t,{default:()=>o});let o=(0,r(46760).registerClientReference)(function(){throw Error("Attempted to call the default export of \"D:\\\\MY PROJECTS\\\\Web Dev\\\\skill-main\\\\src\\\\app\\\\components\\\\navbar.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"D:\\MY PROJECTS\\Web Dev\\skill-main\\src\\app\\components\\navbar.tsx","default")},71844:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>s});var o=r(62740);let s=()=>(0,o.jsxs)("section",{className:"container mx-auto py-12 text-center",children:[(0,o.jsx)("h1",{className:"text-4xl font-bold",children:"Page Not Found"}),(0,o.jsx)("p",{className:"mt-4",children:"Oops! The page you're looking for doesn't exist."})]})},71354:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>u,metadata:()=>c});var o=r(62740),s=r(76381),a=r.n(s),i=r(93704),n=r.n(i);r(61135);var l=r(1524),d=r(13887);let c={title:"Skill Map",description:"Skill Map Navigator"};function u({children:e}){return(0,o.jsx)("html",{lang:"en",children:(0,o.jsx)("body",{className:`${a().variable} ${n().variable} antialiased`,children:(0,o.jsxs)(l.default,{children:[(0,o.jsx)(d.default,{}),e]})})})}},1524:(e,t,r)=>{"use strict";r.d(t,{default:()=>s});var o=r(46760);let s=(0,o.registerClientReference)(function(){throw Error("Attempted to call the default export of \"D:\\\\MY PROJECTS\\\\Web Dev\\\\skill-main\\\\src\\\\app\\\\services\\\\userServices.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"D:\\MY PROJECTS\\Web Dev\\skill-main\\src\\app\\services\\userServices.tsx","default");(0,o.registerClientReference)(function(){throw Error("Attempted to call useAuthContext() from the server but useAuthContext is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"D:\\MY PROJECTS\\Web Dev\\skill-main\\src\\app\\services\\userServices.tsx","useAuthContext")},70440:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>s});var o=r(88077);let s=async e=>[{type:"image/x-icon",sizes:"32x32",url:(0,o.fillMetadataSegment)(".",await e.params,"favicon.ico")+""}]},61135:()=>{}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),o=t.X(0,[989,515,77],()=>r(4633));module.exports=o})();