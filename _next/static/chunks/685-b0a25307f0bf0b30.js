"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[685],{7607:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"addLocale",{enumerable:!0,get:function(){return r}});n(6070);const r=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return e};("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7561:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return r}});n(6070);function r(e,t,n,r){return!1}("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3719:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"hasBasePath",{enumerable:!0,get:function(){return o}});const r=n(6892);function o(e){return(0,r.pathHasPrefix)(e,"/mamindlasathwika.io")}("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6685:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return b}});const r=n(1024)._(n(2265)),o=n(2156),u=n(3954),a=n(6162),c=n(5090),i=n(7607),s=n(2706),l=n(6656),f=n(5033),d=n(7561),p=n(6711),h=n(5685),y=new Set;function m(e,t,n,r,o,a){if(!a&&!(0,u.isLocalURL)(t))return;if(!r.bypassPrefetchedCheck){const o=t+"%"+n+"%"+("undefined"!==typeof r.locale?r.locale:"locale"in e?e.locale:void 0);if(y.has(o))return;y.add(o)}const c=a?e.prefetch(t,o):e.prefetch(t,n,r);Promise.resolve(c).catch((e=>{0}))}function g(e){return"string"===typeof e?e:(0,a.formatUrl)(e)}const b=r.default.forwardRef((function(e,t){let n;const{href:a,as:y,children:b,prefetch:P=null,passHref:_,replace:O,shallow:j,scroll:v,locale:R,onClick:E,onMouseEnter:M,onTouchStart:x,legacyBehavior:C=!1,...k}=e;n=b,!C||"string"!==typeof n&&"number"!==typeof n||(n=r.default.createElement("a",null,n));const w=r.default.useContext(s.RouterContext),I=r.default.useContext(l.AppRouterContext),S=null!=w?w:I,T=!w,L=!1!==P,N=null===P?h.PrefetchKind.AUTO:h.PrefetchKind.FULL;const{href:U,as:A}=r.default.useMemo((()=>{if(!w){const e=g(a);return{href:e,as:y?g(y):e}}const[e,t]=(0,o.resolveHref)(w,a,!0);return{href:e,as:y?(0,o.resolveHref)(w,y):t||e}}),[w,a,y]),K=r.default.useRef(U),z=r.default.useRef(A);let W;C&&(W=r.default.Children.only(n));const D=C?W&&"object"===typeof W&&W.ref:t,[B,F,$]=(0,f.useIntersection)({rootMargin:"200px"}),q=r.default.useCallback((e=>{z.current===A&&K.current===U||($(),z.current=A,K.current=U),B(e),D&&("function"===typeof D?D(e):"object"===typeof D&&(D.current=e))}),[A,D,U,$,B]);r.default.useEffect((()=>{S&&F&&L&&m(S,U,A,{locale:R},{kind:N},T)}),[A,U,F,R,L,null==w?void 0:w.locale,S,T,N]);const H={ref:q,onClick(e){C||"function"!==typeof E||E(e),C&&W.props&&"function"===typeof W.props.onClick&&W.props.onClick(e),S&&(e.defaultPrevented||function(e,t,n,o,a,c,i,s,l,f){const{nodeName:d}=e.currentTarget;if("A"===d.toUpperCase()&&(function(e){const t=e.currentTarget.getAttribute("target");return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!l&&!(0,u.isLocalURL)(n)))return;e.preventDefault();const p=()=>{const e=null==i||i;"beforePopState"in t?t[a?"replace":"push"](n,o,{shallow:c,locale:s,scroll:e}):t[a?"replace":"push"](o||n,{forceOptimisticNavigation:!f,scroll:e})};l?r.default.startTransition(p):p()}(e,S,U,A,O,j,v,R,T,L))},onMouseEnter(e){C||"function"!==typeof M||M(e),C&&W.props&&"function"===typeof W.props.onMouseEnter&&W.props.onMouseEnter(e),S&&(!L&&T||m(S,U,A,{locale:R,priority:!0,bypassPrefetchedCheck:!0},{kind:N},T))},onTouchStart(e){C||"function"!==typeof x||x(e),C&&W.props&&"function"===typeof W.props.onTouchStart&&W.props.onTouchStart(e),S&&(!L&&T||m(S,U,A,{locale:R,priority:!0,bypassPrefetchedCheck:!0},{kind:N},T))}};if((0,c.isAbsoluteUrl)(A))H.href=A;else if(!C||_||"a"===W.type&&!("href"in W.props)){const e="undefined"!==typeof R?R:null==w?void 0:w.locale,t=(null==w?void 0:w.isLocaleDomain)&&(0,d.getDomainLocale)(A,e,null==w?void 0:w.locales,null==w?void 0:w.domainLocales);H.href=t||(0,p.addBasePath)((0,i.addLocale)(A,e,null==w?void 0:w.defaultLocale))}return C?r.default.cloneElement(W,H):r.default.createElement("a",{...k,...H},n)}));("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8043:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{requestIdleCallback:function(){return n},cancelIdleCallback:function(){return r}});const n="undefined"!==typeof self&&self.requestIdleCallback&&self.requestIdleCallback.bind(window)||function(e){let t=Date.now();return self.setTimeout((function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})}),1)},r="undefined"!==typeof self&&self.cancelIdleCallback&&self.cancelIdleCallback.bind(window)||function(e){return clearTimeout(e)};("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5033:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return s}});const r=n(2265),o=n(8043),u="function"===typeof IntersectionObserver,a=new Map,c=[];function i(e,t,n){const{id:r,observer:o,elements:u}=function(e){const t={root:e.root||null,margin:e.rootMargin||""},n=c.find((e=>e.root===t.root&&e.margin===t.margin));let r;if(n&&(r=a.get(n),r))return r;const o=new Map,u=new IntersectionObserver((e=>{e.forEach((e=>{const t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return r={id:t,observer:u,elements:o},c.push(t),a.set(t,r),r}(n);return u.set(e,t),o.observe(e),function(){if(u.delete(e),o.unobserve(e),0===u.size){o.disconnect(),a.delete(r);const e=c.findIndex((e=>e.root===r.root&&e.margin===r.margin));e>-1&&c.splice(e,1)}}}function s(e){let{rootRef:t,rootMargin:n,disabled:a}=e;const c=a||!u,[s,l]=(0,r.useState)(!1),f=(0,r.useRef)(null),d=(0,r.useCallback)((e=>{f.current=e}),[]);(0,r.useEffect)((()=>{if(u){if(c||s)return;const e=f.current;if(e&&e.tagName){return i(e,(e=>e&&l(e)),{root:null==t?void 0:t.current,rootMargin:n})}}else if(!s){const e=(0,o.requestIdleCallback)((()=>l(!0)));return()=>(0,o.cancelIdleCallback)(e)}}),[c,n,t,s,f.current]);const p=(0,r.useCallback)((()=>{l(!1)}),[]);return[d,s,p]}("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3805:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"escapeStringRegexp",{enumerable:!0,get:function(){return o}});const n=/[|\\{}()[\]^$+*?.-]/,r=/[|\\{}()[\]^$+*?.-]/g;function o(e){return n.test(e)?e.replace(r,"\\$&"):e}},2706:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"RouterContext",{enumerable:!0,get:function(){return r}});const r=n(1024)._(n(2265)).default.createContext(null)},6162:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{formatUrl:function(){return u},urlObjectKeys:function(){return a},formatWithValidation:function(){return c}});const r=n(8533)._(n(5769)),o=/https?|ftp|gopher|file/;function u(e){let{auth:t,hostname:n}=e,u=e.protocol||"",a=e.pathname||"",c=e.hash||"",i=e.query||"",s=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?s=t+e.host:n&&(s=t+(~n.indexOf(":")?"["+n+"]":n),e.port&&(s+=":"+e.port)),i&&"object"===typeof i&&(i=String(r.urlQueryToSearchParams(i)));let l=e.search||i&&"?"+i||"";return u&&!u.endsWith(":")&&(u+=":"),e.slashes||(!u||o.test(u))&&!1!==s?(s="//"+(s||""),a&&"/"!==a[0]&&(a="/"+a)):s||(s=""),c&&"#"!==c[0]&&(c="#"+c),l&&"?"!==l[0]&&(l="?"+l),a=a.replace(/[?#]/g,encodeURIComponent),l=l.replace("#","%23"),""+u+s+a+l+c}const a=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function c(e){return u(e)}},9232:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"interpolateAs",{enumerable:!0,get:function(){return u}});const r=n(3658),o=n(8489);function u(e,t,n){let u="";const a=(0,o.getRouteRegex)(e),c=a.groups,i=(t!==e?(0,r.getRouteMatcher)(a)(t):"")||n;u=e;const s=Object.keys(c);return s.every((e=>{let t=i[e]||"";const{repeat:n,optional:r}=c[e];let o="["+(n?"...":"")+e+"]";return r&&(o=(t?"":"/")+"["+o+"]"),n&&!Array.isArray(t)&&(t=[t]),(r||e in i)&&(u=u.replace(o,n?t.map((e=>encodeURIComponent(e))).join("/"):encodeURIComponent(t))||"/")}))||(u=""),{params:s,result:u}}},8354:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isDynamicRoute",{enumerable:!0,get:function(){return r}});const n=/\/\[[^/]+?\](?=\/|$)/;function r(e){return n.test(e)}},3954:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isLocalURL",{enumerable:!0,get:function(){return u}});const r=n(5090),o=n(3719);function u(e){if(!(0,r.isAbsoluteUrl)(e))return!0;try{const t=(0,r.getLocationOrigin)(),n=new URL(e,t);return n.origin===t&&(0,o.hasBasePath)(n.pathname)}catch(t){return!1}}},3259:function(e,t){function n(e,t){const n={};return Object.keys(e).forEach((r=>{t.includes(r)||(n[r]=e[r])})),n}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"omit",{enumerable:!0,get:function(){return n}})},6892:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"pathHasPrefix",{enumerable:!0,get:function(){return o}});const r=n(2590);function o(e,t){if("string"!==typeof e)return!1;const{pathname:n}=(0,r.parsePath)(e);return n===t||n.startsWith(t+"/")}},5769:function(e,t){function n(e){const t={};return e.forEach(((e,n)=>{"undefined"===typeof t[n]?t[n]=e:Array.isArray(t[n])?t[n].push(e):t[n]=[t[n],e]})),t}function r(e){return"string"===typeof e||"number"===typeof e&&!isNaN(e)||"boolean"===typeof e?String(e):""}function o(e){const t=new URLSearchParams;return Object.entries(e).forEach((e=>{let[n,o]=e;Array.isArray(o)?o.forEach((e=>t.append(n,r(e)))):t.set(n,r(o))})),t}function u(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return n.forEach((t=>{Array.from(t.keys()).forEach((t=>e.delete(t))),t.forEach(((t,n)=>e.append(n,t)))})),e}Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{searchParamsToUrlQuery:function(){return n},urlQueryToSearchParams:function(){return o},assign:function(){return u}})},2156:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"resolveHref",{enumerable:!0,get:function(){return f}});const r=n(5769),o=n(6162),u=n(3259),a=n(5090),c=n(6070),i=n(3954),s=n(8354),l=n(9232);function f(e,t,n){let f,d="string"===typeof t?t:(0,o.formatWithValidation)(t);const p=d.match(/^[a-zA-Z]{1,}:\/\//),h=p?d.slice(p[0].length):d;if((h.split("?")[0]||"").match(/(\/\/|\\)/)){const e=(0,a.normalizeRepeatedSlashes)(h);d=(p?p[0]:"")+e}if(!(0,i.isLocalURL)(d))return n?[d]:d;try{f=new URL(d.startsWith("#")?e.asPath:e.pathname,"http://n")}catch(y){f=new URL("/","http://n")}try{const e=new URL(d,f);e.pathname=(0,c.normalizePathTrailingSlash)(e.pathname);let t="";if((0,s.isDynamicRoute)(e.pathname)&&e.searchParams&&n){const n=(0,r.searchParamsToUrlQuery)(e.searchParams),{result:a,params:c}=(0,l.interpolateAs)(e.pathname,e.pathname,n);a&&(t=(0,o.formatWithValidation)({pathname:a,hash:e.hash,query:(0,u.omit)(n,c)}))}const a=e.origin===f.origin?e.href.slice(e.origin.length):e.href;return n?[a,t||a]:a}catch(y){return n?[d]:d}}},3658:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getRouteMatcher",{enumerable:!0,get:function(){return o}});const r=n(5090);function o(e){let{re:t,groups:n}=e;return e=>{const o=t.exec(e);if(!o)return!1;const u=e=>{try{return decodeURIComponent(e)}catch(t){throw new r.DecodeError("failed to decode param")}},a={};return Object.keys(n).forEach((e=>{const t=n[e],r=o[t.pos];void 0!==r&&(a[e]=~r.indexOf("/")?r.split("/").map((e=>u(e))):t.repeat?[u(r)]:u(r))})),a}}},8489:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{getRouteRegex:function(){return i},getNamedRouteRegex:function(){return f},getNamedMiddlewareRegex:function(){return d}});const r=n(4507),o=n(3805),u=n(7369);function a(e){const t=e.startsWith("[")&&e.endsWith("]");t&&(e=e.slice(1,-1));const n=e.startsWith("...");return n&&(e=e.slice(3)),{key:e,repeat:n,optional:t}}function c(e){const t=(0,u.removeTrailingSlash)(e).slice(1).split("/"),n={};let c=1;return{parameterizedRoute:t.map((e=>{const t=r.INTERCEPTION_ROUTE_MARKERS.find((t=>e.startsWith(t))),u=e.match(/\[((?:\[.*\])|.+)\]/);if(t&&u){const{key:e,optional:r,repeat:i}=a(u[1]);return n[e]={pos:c++,repeat:i,optional:r},"/"+(0,o.escapeStringRegexp)(t)+"([^/]+?)"}if(u){const{key:e,repeat:t,optional:r}=a(u[1]);return n[e]={pos:c++,repeat:t,optional:r},t?r?"(?:/(.+?))?":"/(.+?)":"/([^/]+?)"}return"/"+(0,o.escapeStringRegexp)(e)})).join(""),groups:n}}function i(e){const{parameterizedRoute:t,groups:n}=c(e);return{re:new RegExp("^"+t+"(?:/)?$"),groups:n}}function s(e){let{segment:t,routeKeys:n,keyPrefix:r}=e;const o=function(){let e=97,t=1;return()=>{let n="";for(let r=0;r<t;r++)n+=String.fromCharCode(e),e++,e>122&&(t++,e=97);return n}}(),{key:u,optional:c,repeat:i}=a(t);let s=u.replace(/\W/g,"");r&&(s=""+r+s);let l=!1;return(0===s.length||s.length>30)&&(l=!0),isNaN(parseInt(s.slice(0,1)))||(l=!0),l&&(s=o()),n[s]=r?""+r+u:""+u,i?c?"(?:/(?<"+s+">.+?))?":"/(?<"+s+">.+?)":"/(?<"+s+">[^/]+?)"}function l(e,t){const n=(0,u.removeTrailingSlash)(e).slice(1).split("/"),a={};return{namedParameterizedRoute:n.map((e=>{const n=r.INTERCEPTION_ROUTE_MARKERS.some((t=>e.startsWith(t))),u=e.match(/\[((?:\[.*\])|.+)\]/);return n&&u?s({segment:u[1],routeKeys:a,keyPrefix:t?"nxtI":void 0}):u?s({segment:u[1],routeKeys:a,keyPrefix:t?"nxtP":void 0}):"/"+(0,o.escapeStringRegexp)(e)})).join(""),routeKeys:a}}function f(e,t){const n=l(e,t);return{...i(e),namedRegex:"^"+n.namedParameterizedRoute+"(?:/)?$",routeKeys:n.routeKeys}}function d(e,t){const{parameterizedRoute:n}=c(e),{catchAll:r=!0}=t;if("/"===n){return{namedRegex:"^/"+(r?".*":"")+"$"}}const{namedParameterizedRoute:o}=l(e,!1);return{namedRegex:"^"+o+(r?"(?:(/.*)?)":"")+"$"}}},5090:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{WEB_VITALS:function(){return n},execOnce:function(){return r},isAbsoluteUrl:function(){return u},getLocationOrigin:function(){return a},getURL:function(){return c},getDisplayName:function(){return i},isResSent:function(){return s},normalizeRepeatedSlashes:function(){return l},loadGetInitialProps:function(){return f},SP:function(){return d},ST:function(){return p},DecodeError:function(){return h},NormalizeError:function(){return y},PageNotFoundError:function(){return m},MissingStaticPage:function(){return g},MiddlewareNotFoundError:function(){return b},stringifyError:function(){return P}});const n=["CLS","FCP","FID","INP","LCP","TTFB"];function r(e){let t,n=!1;return function(){for(var r=arguments.length,o=new Array(r),u=0;u<r;u++)o[u]=arguments[u];return n||(n=!0,t=e(...o)),t}}const o=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,u=e=>o.test(e);function a(){const{protocol:e,hostname:t,port:n}=window.location;return e+"//"+t+(n?":"+n:"")}function c(){const{href:e}=window.location,t=a();return e.substring(t.length)}function i(e){return"string"===typeof e?e:e.displayName||e.name||"Unknown"}function s(e){return e.finished||e.headersSent}function l(e){const t=e.split("?");return t[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(t[1]?"?"+t.slice(1).join("?"):"")}async function f(e,t){const n=t.res||t.ctx&&t.ctx.res;if(!e.getInitialProps)return t.ctx&&t.Component?{pageProps:await f(t.Component,t.ctx)}:{};const r=await e.getInitialProps(t);if(n&&s(n))return r;if(!r){const t='"'+i(e)+'.getInitialProps()" should resolve to an object. But found "'+r+'" instead.';throw new Error(t)}return r}const d="undefined"!==typeof performance,p=d&&["mark","measure","getEntriesByName"].every((e=>"function"===typeof performance[e]));class h extends Error{}class y extends Error{}class m extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message="Cannot find module for page: "+e}}class g extends Error{constructor(e,t){super(),this.message="Failed to load static file for page: "+e+" "+t}}class b extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function P(e){return JSON.stringify({message:e.message,stack:e.stack})}}}]);
//# sourceMappingURL=685-b0a25307f0bf0b30.js.map