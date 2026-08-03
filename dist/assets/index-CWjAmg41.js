const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Hero-BHVk27y5.js","assets/vendor-animation-C7mr8vy0.js","assets/vendor-react-LFOJAp0i.js","assets/Counter-DS8BH_dD.js","assets/vendor-icons-57lUSub4.js","assets/Ticker-DIw8GAdP.js","assets/About-BW6SVnSI.js","assets/Services-9Zr-wTbn.js","assets/WhyChooseUs-Co0K_rIE.js","assets/Gallery-DeTxk_Il.js","assets/Clients-DH5Yposm.js","assets/Contact-CWxO1JJc.js","assets/Privacy-z2b9fe6Y.js","assets/Terms-DJ9m6l8R.js","assets/AdminLayout-BiH4allV.js","assets/Login-BnDsKfrx.js","assets/ManageHero-C6SmYlbV.js","assets/ManageServices-BZKqpD4c.js","assets/ManageGallery-Bt1oCxqY.js","assets/ManageClients-BZSc1eWh.js"])))=>i.map(i=>d[i]);
import{j as t,m as b,A as K}from"./vendor-animation-C7mr8vy0.js";import{a as le,r as c,L as B,R as X,B as ce,b as de,c as v,N as me}from"./vendor-react-LFOJAp0i.js";import{A as H,X as pe,M as ue,a as Z,I as J,P as R,b as D,c as ge,d as he}from"./vendor-icons-57lUSub4.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(o){if(o.ep)return;o.ep=!0;const i=r(o);fetch(o.href,i)}})();var $={},F=le;$.createRoot=F.createRoot,$.hydrateRoot=F.hydrateRoot;const xe="modulepreload",fe=function(e){return"/"+e},q={},f=function(s,r,n){let o=Promise.resolve();if(r&&r.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),d=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));o=Promise.allSettled(r.map(l=>{if(l=fe(l),l in q)return;q[l]=!0;const m=l.endsWith(".css"),u=m?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${u}`))return;const p=document.createElement("link");if(p.rel=m?"stylesheet":xe,m||(p.as="script"),p.crossOrigin="",p.href=l,d&&p.setAttribute("nonce",d),document.head.appendChild(p),m)return new Promise((g,h)=>{p.addEventListener("load",g),p.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${l}`)))})}))}function i(a){const d=new Event("vite:preloadError",{cancelable:!0});if(d.payload=a,window.dispatchEvent(d),!d.defaultPrevented)throw a}return o.then(a=>{for(const d of a||[])d.status==="rejected"&&i(d.reason);return s().catch(i)})};let ye={data:""},ve=e=>{if(typeof window=="object"){let s=(e?e.querySelector("#_goober"):window._goober)||Object.assign(document.createElement("style"),{innerHTML:" ",id:"_goober"});return s.nonce=window.__nonce__,s.parentNode||(e||document.head).appendChild(s),s.firstChild}return e||ye},be=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,je=/\/\*[^]*?\*\/|  +/g,Y=/\n+/g,N=(e,s)=>{let r="",n="",o="";for(let i in e){let a=e[i];i[0]=="@"?i[1]=="i"?r=i+" "+a+";":n+=i[1]=="f"?N(a,i):i+"{"+N(a,i[1]=="k"?"":s)+"}":typeof a=="object"?n+=N(a,s?s.replace(/([^,])+/g,d=>i.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,l=>/&/.test(l)?l.replace(/&/g,d):d?d+" "+l:l)):i):a!=null&&(i=i[1]=="-"?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),o+=N.p?N.p(i,a):i+":"+a+";")}return r+(s&&o?s+"{"+o+"}":o)+n},w={},ee=e=>{if(typeof e=="object"){let s="";for(let r in e)s+=r+ee(e[r]);return s}return e},_e=(e,s,r,n,o)=>{let i=ee(e),a=w[i]||(w[i]=(l=>{let m=0,u=11;for(;m<l.length;)u=101*u+l.charCodeAt(m++)>>>0;return"go"+u})(i));if(!w[a]){let l=i!==e?e:(m=>{let u,p,g=[{}];for(;u=be.exec(m.replace(je,""));)u[4]?g.shift():u[3]?(p=u[3].replace(Y," ").trim(),g.unshift(g[0][p]=g[0][p]||{})):g[0][u[1]]=u[2].replace(Y," ").trim();return g[0]})(e);w[a]=N(o?{["@keyframes "+a]:l}:l,r?"":"."+a)}let d=r&&w.g;return r&&(w.g=w[a]),((l,m,u,p)=>{p?m.data=m.data.replace(p,l):m.data.indexOf(l)===-1&&(m.data=u?l+m.data:m.data+l)})(w[a],s,n,d),a},we=(e,s,r)=>e.reduce((n,o,i)=>{let a=s[i];if(a&&a.call){let d=a(r),l=d&&d.props&&d.props.className||/^go/.test(d)&&d;a=l?"."+l:d&&typeof d=="object"?d.props?"":N(d,""):d===!1?"":d}return n+o+(a??"")},"");function L(e){let s=this||{},r=e.call?e(s.p):e;return _e(r.unshift?r.raw?we(r,[].slice.call(arguments,1),s.p):r.reduce((n,o)=>Object.assign(n,o&&o.call?o(s.p):o),{}):r,ve(s.target),s.g,s.o,s.k)}let te,M,G;L.bind({g:1});let _=L.bind({k:1});function Ne(e,s,r,n){N.p=s,te=e,M=r,G=n}function E(e,s){let r=this||{};return function(){let n=arguments;function o(i,a){let d=Object.assign({},i),l=d.className||o.className;r.p=Object.assign({theme:M&&M()},d),r.o=/go\d/.test(l),d.className=L.apply(r,n)+(l?" "+l:"");let m=e;return e[0]&&(m=d.as||e,delete d.as),G&&m[0]&&G(d),te(m,d)}return o}}var Ee=e=>typeof e=="function",z=(e,s)=>Ee(e)?e(s):e,Ie=(()=>{let e=0;return()=>(++e).toString()})(),se=(()=>{let e;return()=>{if(e===void 0&&typeof window<"u"){let s=matchMedia("(prefers-reduced-motion: reduce)");e=!s||s.matches}return e}})(),ke=20,U="default",ae=(e,s)=>{let{toastLimit:r}=e.settings;switch(s.type){case 0:return{...e,toasts:[s.toast,...e.toasts].slice(0,r)};case 1:return{...e,toasts:e.toasts.map(a=>a.id===s.toast.id?{...a,...s.toast}:a)};case 2:let{toast:n}=s;return ae(e,{type:e.toasts.find(a=>a.id===n.id)?1:0,toast:n});case 3:let{toastId:o}=s;return{...e,toasts:e.toasts.map(a=>a.id===o||o===void 0?{...a,dismissed:!0,visible:!1}:a)};case 4:return s.toastId===void 0?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(a=>a.id!==s.toastId)};case 5:return{...e,pausedAt:s.time};case 6:let i=s.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(a=>({...a,pauseDuration:a.pauseDuration+i}))}}},P=[],re={toasts:[],pausedAt:void 0,settings:{toastLimit:ke}},j={},oe=(e,s=U)=>{j[s]=ae(j[s]||re,e),P.forEach(([r,n])=>{r===s&&n(j[s])})},ie=e=>Object.keys(j).forEach(s=>oe(e,s)),Ae=e=>Object.keys(j).find(s=>j[s].toasts.some(r=>r.id===e)),S=(e=U)=>s=>{oe(s,e)},Ce={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},Pe=(e={},s=U)=>{let[r,n]=c.useState(j[s]||re),o=c.useRef(j[s]);c.useEffect(()=>(o.current!==j[s]&&n(j[s]),P.push([s,n]),()=>{let a=P.findIndex(([d])=>d===s);a>-1&&P.splice(a,1)}),[s]);let i=r.toasts.map(a=>{var d,l,m;return{...e,...e[a.type],...a,removeDelay:a.removeDelay||((d=e[a.type])==null?void 0:d.removeDelay)||(e==null?void 0:e.removeDelay),duration:a.duration||((l=e[a.type])==null?void 0:l.duration)||(e==null?void 0:e.duration)||Ce[a.type],style:{...e.style,...(m=e[a.type])==null?void 0:m.style,...a.style}}});return{...r,toasts:i}},ze=(e,s="blank",r)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:s,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...r,id:(r==null?void 0:r.id)||Ie()}),k=e=>(s,r)=>{let n=ze(s,e,r);return S(n.toasterId||Ae(n.id))({type:2,toast:n}),n.id},x=(e,s)=>k("blank")(e,s);x.error=k("error");x.success=k("success");x.loading=k("loading");x.custom=k("custom");x.dismiss=(e,s)=>{let r={type:3,toastId:e};s?S(s)(r):ie(r)};x.dismissAll=e=>x.dismiss(void 0,e);x.remove=(e,s)=>{let r={type:4,toastId:e};s?S(s)(r):ie(r)};x.removeAll=e=>x.remove(void 0,e);x.promise=(e,s,r)=>{let n=x.loading(s.loading,{...r,...r==null?void 0:r.loading});return typeof e=="function"&&(e=e()),e.then(o=>{let i=s.success?z(s.success,o):void 0;return i?x.success(i,{id:n,...r,...r==null?void 0:r.success}):x.dismiss(n),o}).catch(o=>{let i=s.error?z(s.error,o):void 0;i?x.error(i,{id:n,...r,...r==null?void 0:r.error}):x.dismiss(n)}),e};var Le=1e3,Se=(e,s="default")=>{let{toasts:r,pausedAt:n}=Pe(e,s),o=c.useRef(new Map).current,i=c.useCallback((p,g=Le)=>{if(o.has(p))return;let h=setTimeout(()=>{o.delete(p),a({type:4,toastId:p})},g);o.set(p,h)},[]);c.useEffect(()=>{if(n)return;let p=Date.now(),g=r.map(h=>{if(h.duration===1/0)return;let I=(h.duration||0)+h.pauseDuration-(p-h.createdAt);if(I<0){h.visible&&x.dismiss(h.id);return}return setTimeout(()=>x.dismiss(h.id,s),I)});return()=>{g.forEach(h=>h&&clearTimeout(h))}},[r,n,s]);let a=c.useCallback(S(s),[s]),d=c.useCallback(()=>{a({type:5,time:Date.now()})},[a]),l=c.useCallback((p,g)=>{a({type:1,toast:{id:p,height:g}})},[a]),m=c.useCallback(()=>{n&&a({type:6,time:Date.now()})},[n,a]),u=c.useCallback((p,g)=>{let{reverseOrder:h=!1,gutter:I=8,defaultPosition:A}=g||{},O=r.filter(y=>(y.position||A)===(p.position||A)&&y.height),ne=O.findIndex(y=>y.id===p.id),W=O.filter((y,T)=>T<ne&&y.visible).length;return O.filter(y=>y.visible).slice(...h?[W+1]:[0,W]).reduce((y,T)=>y+(T.height||0)+I,0)},[r]);return c.useEffect(()=>{r.forEach(p=>{if(p.dismissed)i(p.id,p.removeDelay);else{let g=o.get(p.id);g&&(clearTimeout(g),o.delete(p.id))}})},[r,i]),{toasts:r,handlers:{updateHeight:l,startPause:d,endPause:m,calculateOffset:u}}},Oe=_`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,Te=_`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Re=_`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,De=E("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${Oe} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${Te} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${Re} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,$e=_`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,Me=E("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${$e} 1s linear infinite;
`,Ge=_`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,Ve=_`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,Ue=E("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${Ge} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${Ve} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,We=E("div")`
  position: absolute;
`,Be=E("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,He=_`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Fe=E("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${He} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,qe=({toast:e})=>{let{icon:s,type:r,iconTheme:n}=e;return s!==void 0?typeof s=="string"?c.createElement(Fe,null,s):s:r==="blank"?null:c.createElement(Be,null,c.createElement(Me,{...n}),r!=="loading"&&c.createElement(We,null,r==="error"?c.createElement(De,{...n}):c.createElement(Ue,{...n})))},Ye=e=>`
0% {transform: translate3d(0,${e*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,Qe=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e*-150}%,-1px) scale(.6); opacity:0;}
`,Ke="0%{opacity:0;} 100%{opacity:1;}",Xe="0%{opacity:1;} 100%{opacity:0;}",Ze=E("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,Je=E("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,et=(e,s)=>{let r=e.includes("top")?1:-1,[n,o]=se()?[Ke,Xe]:[Ye(r),Qe(r)];return{animation:s?`${_(n)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${_(o)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},tt=c.memo(({toast:e,position:s,style:r,children:n})=>{let o=e.height?et(e.position||s||"top-center",e.visible):{opacity:0},i=c.createElement(qe,{toast:e}),a=c.createElement(Je,{...e.ariaProps},z(e.message,e));return c.createElement(Ze,{className:e.className,style:{...o,...r,...e.style}},typeof n=="function"?n({icon:i,message:a}):c.createElement(c.Fragment,null,i,a))});Ne(c.createElement);var st=({id:e,className:s,style:r,onHeightUpdate:n,children:o})=>{let i=c.useCallback(a=>{if(a){let d=()=>{let l=a.getBoundingClientRect().height;n(e,l)};d(),new MutationObserver(d).observe(a,{subtree:!0,childList:!0,characterData:!0})}},[e,n]);return c.createElement("div",{ref:i,className:s,style:r},o)},at=(e,s)=>{let r=e.includes("top"),n=r?{top:0}:{bottom:0},o=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:se()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${s*(r?1:-1)}px)`,...n,...o}},rt=L`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,C=16,ot=({reverseOrder:e,position:s="top-center",toastOptions:r,gutter:n,children:o,toasterId:i,containerStyle:a,containerClassName:d})=>{let{toasts:l,handlers:m}=Se(r,i);return c.createElement("div",{"data-rht-toaster":i||"",style:{position:"fixed",zIndex:9999,top:C,left:C,right:C,bottom:C,pointerEvents:"none",...a},className:d,onMouseEnter:m.startPause,onMouseLeave:m.endPause},l.map(u=>{let p=u.position||s,g=m.calculateOffset(u,{reverseOrder:e,gutter:n,defaultPosition:s}),h=at(p,g);return c.createElement(st,{id:u.id,key:u.id,onHeightUpdate:m.updateHeight,className:u.visible?rt:"",style:h},u.type==="custom"?z(u.message,u):o?o(u):c.createElement(tt,{toast:u,position:p}))}))},Pt=x;const V={logos:{cortex:"https://res.cloudinary.com/djdfmvg6b/image/upload/v1769871873/cortexlogo_ejrh3i.png",sgs:"https://res.cloudinary.com/djdfmvg6b/image/upload/v1769871882/sgslogopng_uev1qo.png"},cards:{acrylicCutting:"https://res.cloudinary.com/djdfmvg6b/image/upload/v1769870788/Acrylic_Cutting_lfyujw.avif",digitalPrinting:"https://res.cloudinary.com/djdfmvg6b/image/upload/v1769870787/DIGITALPRINTING_f4wnt4.webp",houseNamePlate:"https://res.cloudinary.com/djdfmvg6b/image/upload/v1769870789/HOUSENAMEPLATE_od5yzp.webp"},machines:{co2Laser:"https://res.cloudinary.com/djdfmvg6b/image/upload/v1769870803/CO2_Acrylic_Laser_cutting_machine_xzslfn.png",ecoSolvent:"https://res.cloudinary.com/djdfmvg6b/image/upload/v1769870800/Eco_solvent_machine_6ft_oy10dr.png"},works:{p1:"https://res.cloudinary.com/djdfmvg6b/image/upload/v1769871656/IMG20251124221008_mkal2m.jpg",p2:"https://res.cloudinary.com/djdfmvg6b/image/upload/v1769871651/IMG20251102210039_lppsj5.jpg",p3:"https://res.cloudinary.com/djdfmvg6b/image/upload/v1769871646/IMG20251110215210_aa149b.jpg",p4:"https://res.cloudinary.com/djdfmvg6b/image/upload/v1769871645/p9_h7ggbz.jpg",p5:"https://res.cloudinary.com/djdfmvg6b/image/upload/v1769871645/p8_cosnbu.jpg",p6:"https://res.cloudinary.com/djdfmvg6b/image/upload/v1769871644/p5_huod3z.jpg",p7:"https://res.cloudinary.com/djdfmvg6b/image/upload/v1769871644/p7_ospuvi.jpg",p8:"https://res.cloudinary.com/djdfmvg6b/image/upload/v1769871644/p6_wvdt6l.jpg",p9:"https://res.cloudinary.com/djdfmvg6b/image/upload/v1769871643/p4_mpclnk.jpg",p10:"https://res.cloudinary.com/djdfmvg6b/image/upload/v1769871643/p3_ttrxu1.jpg",img1:"https://res.cloudinary.com/djdfmvg6b/image/upload/v1769871642/IMG20251116200631_icc3kr.jpg",img2:"https://res.cloudinary.com/djdfmvg6b/image/upload/v1769871642/p2_yr0sdt.jpg",img3:"https://res.cloudinary.com/djdfmvg6b/image/upload/v1769871641/p10_sxj0sk.jpg",img4:"https://res.cloudinary.com/djdfmvg6b/image/upload/v1769871639/p1_v8vyv2.jpg",img5:"https://res.cloudinary.com/djdfmvg6b/image/upload/v1769871639/IMG20251022213635_dv81ft.jpg",img6:"https://res.cloudinary.com/djdfmvg6b/image/upload/v1769871632/IMG-20251026-WA0028_hxqvfb.jpg",img7:"https://res.cloudinary.com/djdfmvg6b/image/upload/v1769871632/IMG-20251103-WA0107_y1bv3n.jpg",img8:"https://res.cloudinary.com/djdfmvg6b/image/upload/v1769871632/IMG-20251121-WA0015_uyi6kx.jpg",img9:"https://res.cloudinary.com/djdfmvg6b/image/upload/v1769871631/IMG-20251121-WA0010_wjv3gm.jpg",img10:"https://res.cloudinary.com/djdfmvg6b/image/upload/v1769871631/IMG-20251026-WA0030_dye5id.jpg",img11:"https://res.cloudinary.com/djdfmvg6b/image/upload/v1769871631/IMG-20251015-WA0016_rvmxhr.jpg",img12:"https://res.cloudinary.com/djdfmvg6b/image/upload/v1769871630/IMG-20251021-WA0056_fgvb6c.jpg",img13:"https://res.cloudinary.com/djdfmvg6b/image/upload/v1769871630/IMG-20251021-WA0061_mcipj6.jpg",img14:"https://res.cloudinary.com/djdfmvg6b/image/upload/v1769871630/IMG-20251022-WA0095_ply6tt.jpg"}},it=(e,s={})=>{if(!e||!e.includes("cloudinary.com"))return e;const{width:r,height:n,crop:o="fill"}=s,i=e.indexOf("/upload/");if(i===-1)return e;const a=e.substring(0,i+8),d=e.substring(i+8);let l="f_auto,q_auto";r&&(l+=`,w_${r}`),n&&(l+=`,h_${n}`),(r||n)&&(l+=`,c_${o}`);const m=d.indexOf("/"),u=d.substring(0,m);return u.startsWith("v")&&!isNaN(u.substring(1))?`${a}${l}/${d}`:`${a}${l}/${d}`},nt=()=>{const[e,s]=c.useState(!1),[r,n]=c.useState(!1),[o,i]=c.useState("home");c.useEffect(()=>{const l=()=>{n(window.scrollY>50);const m=["home","about","services","gallery","contact"];let u="home";for(const p of m){const g=document.getElementById(p);g&&g.getBoundingClientRect().top<=150&&(u=p)}i(u)};return window.addEventListener("scroll",l),()=>window.removeEventListener("scroll",l)},[]);const a=(l,m)=>{l.preventDefault();const u=document.getElementById(m);if(u){const g=document.body.getBoundingClientRect().top,A=u.getBoundingClientRect().top-g-10;window.scrollTo({top:A,behavior:"smooth"}),s(!1)}},d=[{name:"Home",id:"home"},{name:"About",id:"about"},{name:"Services",id:"services"},{name:"Gallery",id:"gallery"},{name:"Contact",id:"contact"}];return t.jsxs("nav",{className:`fixed top-0 w-full z-[1000] transition-all duration-500 ${r?"py-5 bg-white/80 backdrop-blur-xl shadow-sm border-b border-gray-100":"py-5 bg-background"}`,children:[t.jsxs("div",{className:"max-w-[1200px] mx-auto px-4 md:px-2.5 flex justify-between items-center",children:[t.jsxs("div",{className:"flex items-center gap-2 cursor-pointer group",onClick:l=>a(l,"home"),children:[t.jsx("img",{src:it(V.logos.sgs,{height:80,crop:"limit"}),alt:"Sri Guru Sai Laser",width:"160",height:"60",className:"h-8 md:h-10 w-auto"}),t.jsx("p",{className:"text-l font-bold",children:"Sri Guru Sai Laser"})]}),t.jsxs("div",{className:"hidden lg:flex items-center gap-6",children:[t.jsx("ul",{className:"flex gap-6 list-none items-center",children:d.map(l=>t.jsx("li",{children:t.jsxs("button",{onClick:m=>a(m,l.id),className:`text-sm font-black uppercase tracking-widest transition-all duration-300 relative hover:text-primary ${o===l.id?"text-primary":"text-gray-600"}`,children:[l.name,o===l.id&&t.jsx(b.span,{layoutId:"activeNav",className:"absolute -bottom-2 left-0 w-full h-1 bg-secondary rounded-full"})]})},l.name))}),t.jsxs("button",{onClick:l=>a(l,"contact"),className:"group bg-gradient-to-r from-primary to-accent text-white px-6 py-2.5 rounded-xl font-black text-xs shadow-[0_10px_20px_rgba(83,28,179,0.2)] hover:shadow-[0_15px_30px_rgba(83,28,179,0.4)] hover:-translate-y-0.5 transition-all flex items-center gap-2 active:scale-95",children:["Get a Quote",t.jsx(H,{size:14,className:"group-hover:translate-x-1 transition-transform"})]})]}),t.jsxs("div",{className:"lg:hidden flex items-center gap-3",children:[t.jsxs("button",{onClick:l=>a(l,"contact"),className:"group bg-gradient-to-r from-primary to-accent text-white px-4 py-2 rounded-lg font-black text-[10px] shadow-lg flex items-center gap-1.5 active:scale-95",children:["Get a Quote",t.jsx(H,{size:12})]}),t.jsx("button",{className:"text-primary p-2 bg-primary/5 rounded-xl transition-colors hover:bg-primary/10",onClick:()=>s(!e),"aria-label":"Toggle Menu",children:e?t.jsx(pe,{size:24}):t.jsx(ue,{size:24})})]})]}),t.jsx(K,{children:e&&t.jsxs(b.div,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},className:"lg:hidden fixed inset-x-4 top-[85px] bg-white rounded-[32px] shadow-2xl border border-gray-100 p-8 z-[1001]",children:[t.jsx("ul",{className:"flex flex-col gap-6",children:d.map(l=>t.jsx("li",{children:t.jsx("button",{onClick:m=>a(m,l.id),className:`text-2xl font-black uppercase tracking-tighter ${o===l.id?"text-primary":"text-gray-300"}`,children:l.name})},l.name))}),t.jsxs("div",{className:"mt-10 pt-10 border-t border-gray-50",children:[t.jsx("h3",{className:"text-xs font-black uppercase tracking-widest text-gray-400 mb-6",children:"Contact Us"}),t.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[t.jsxs("a",{href:"https://wa.me/919844327471",className:"flex items-center gap-3 p-4 bg-gray-50 rounded-2xl",children:[t.jsx(Z,{size:20,className:"text-[#25D366]"}),t.jsx("span",{className:"text-sm font-bold",children:"WhatsApp"})]}),t.jsxs("a",{href:"https://www.instagram.com/sgslsrigurusailaser",className:"flex items-center gap-3 p-4 bg-gray-50 rounded-2xl",children:[t.jsx(J,{size:20,className:"text-[#E4405F]"}),t.jsx("span",{className:"text-sm font-bold",children:"Instagram"})]}),t.jsxs("a",{href:"tel:9844327471",className:"flex items-center gap-3 p-4 bg-gray-50 rounded-2xl",children:[t.jsx(R,{size:20,className:"text-primary"}),t.jsx("span",{className:"text-sm font-bold",children:"Call Us"})]}),t.jsxs("a",{href:"mailto:info@sgslaser.in",className:"flex items-center gap-3 p-4 bg-gray-50 rounded-2xl",children:[t.jsx(D,{size:20,className:"text-secondary"}),t.jsx("span",{className:"text-sm font-bold",children:"Email"})]})]})]})]})})]})},lt=()=>{const e=new Date().getFullYear(),s=o=>{const i=document.getElementById(o);i&&i.scrollIntoView({behavior:"smooth"})},r={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.6,staggerChildren:.1}}},n={hidden:{opacity:0,y:20},visible:{opacity:1,y:0}};return t.jsxs("footer",{className:"bg-[#1A1A1A] text-white pt-20 pb-10 overflow-hidden",children:[t.jsxs(b.div,{variants:r,initial:"hidden",whileInView:"visible",viewport:{once:!0,margin:"-100px"},className:"max-w-[1200px] mx-auto px-4 md:px-2 gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:gap-8",children:[t.jsxs(b.div,{variants:n,className:"space-y-6",children:[t.jsxs("div",{className:"flex items-center gap-2 cursor-pointer group",onClick:()=>s("home"),children:[t.jsx("img",{src:V.logos.sgs,alt:"Sri Guru Sai Laser",className:"h-8 md:h-10 w-auto"}),t.jsx("p",{className:"text-l font-bold",children:"Sri Guru Sai Laser"})]}),t.jsx("p",{className:"text-gray-400 leading-relaxed",children:"Leading the way in high-precision laser cutting solutions. Crafting excellence with technology and dedication."}),t.jsx("div",{className:"flex gap-4",children:[{Icon:Z,label:"WhatsApp",color:"#25D366",href:"https://wa.me/919844327471"},{Icon:J,label:"Instagram",color:"#E4405F",href:"https://www.instagram.com/sgslsrigurusailaser"},{Icon:R,label:"Call Us",color:"#D97D45",href:"tel:9844327471"},{Icon:D,label:"Email Us",color:"#92745a",href:"mailto:info@sgslaser.in"}].map(({Icon:o,label:i,color:a,href:d},l)=>t.jsx(b.a,{href:d,"aria-label":i,whileHover:{scale:1.1,y:-5},whileTap:{scale:.9},className:"w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors",style:{color:a},children:t.jsx(o,{size:18})},l))})]}),t.jsxs(b.div,{variants:n,children:[t.jsx("h3",{className:"text-lg font-bold mb-6",children:"Quick Navigation"}),t.jsx("ul",{className:"space-y-4 text-gray-400",children:["home","about","services","gallery","contact"].map(o=>t.jsx("li",{children:t.jsxs("button",{onClick:()=>s(o),className:"hover:text-secondary transition-colors capitalize flex items-center gap-2 group",children:[t.jsx("span",{className:"w-0 h-[2px] bg-secondary group-hover:w-4 transition-all duration-300"}),o]})},o))})]}),t.jsxs(b.div,{variants:n,children:[t.jsx("h3",{className:"text-lg font-bold mb-6",children:"Legal & Support"}),t.jsxs("ul",{className:"space-y-4 text-gray-400",children:[t.jsx("li",{children:t.jsxs(B,{to:"/privacy",className:"hover:text-secondary transition-colors flex items-center gap-2 group",children:[t.jsx("span",{className:"w-0 h-[2px] bg-secondary group-hover:w-4 transition-all duration-300"}),"Privacy Policy"]})}),t.jsx("li",{children:t.jsxs(B,{to:"/terms",className:"hover:text-secondary transition-colors flex items-center gap-2 group",children:[t.jsx("span",{className:"w-0 h-[2px] bg-secondary group-hover:w-4 transition-all duration-300"}),"Terms & Conditions"]})}),t.jsx("li",{children:t.jsxs("a",{href:"#contact",onClick:()=>s("contact"),className:"hover:text-secondary transition-colors flex items-center gap-2 group",children:[t.jsx("span",{className:"w-0 h-[2px] bg-secondary group-hover:w-4 transition-all duration-300"}),"Help Center"]})})]})]}),t.jsxs(b.div,{variants:n,className:"space-y-4",children:[t.jsx("h3",{className:"text-lg font-bold mb-6",children:"Get in Touch"}),t.jsxs("a",{href:"https://maps.app.goo.gl/cCTh87UEYHvz3ePd6",target:"_blank",rel:"noopener noreferrer",className:"flex items-start gap-3 text-gray-400 hover:text-secondary transition-colors group",children:[t.jsx(ge,{size:20,className:"text-secondary shrink-0 mt-1 group-hover:scale-110 transition-transform"}),t.jsx("p",{children:"#02 Narmada Layout, Kithiganur Main road, Bengaluru"})]}),t.jsxs("a",{href:"tel:9844327471",className:"flex items-center gap-3 text-gray-400 hover:text-secondary transition-colors group",children:[t.jsx(R,{size:20,className:"text-secondary shrink-0 group-hover:scale-110 transition-transform"}),t.jsx("p",{children:"9844327471"})]}),t.jsxs("a",{href:"mailto:info@sgslaser.in",className:"flex items-center gap-3 text-gray-400 hover:text-secondary transition-colors group",children:[t.jsx(D,{size:20,className:"text-secondary shrink-0 group-hover:scale-110 transition-transform"}),t.jsx("p",{children:"info@sgslaser.in"})]})]})]}),t.jsxs(b.div,{initial:{opacity:0},whileInView:{opacity:1},transition:{delay:.5},viewport:{once:!0},className:"max-w-[1200px] mx-auto px-4 mt-20 pt-8 border-t border-white/5 flex flex-col items-center justify-center gap-4 text-gray-400 text-sm",children:[t.jsxs("p",{children:["© ",e," Sri Guru Sai Laser. All rights reserved."]}),t.jsx("a",{href:"https://www.cortexit.in",target:"_blank",rel:"noopener noreferrer",children:t.jsxs("div",{className:"flex items-center gap-3 cursor-pointer group  grayscale hover:grayscale-0 hover:opacity-[100%]  transition-all duration-300",children:[t.jsx("span",{className:"text-xs uppercase tracking-tighter text-gray-200",children:"Designed and developed by"}),t.jsxs("div",{className:"flex items-center gap-1 ",children:[t.jsx("img",{src:V.logos.cortex,alt:"Cortex IT",className:"h-6 w-auto"}),t.jsx("span",{className:"font-black tracking-tighter text-white",children:"CORTEX™"})]})]})})]})]})},ct=()=>{const[e,s]=X.useState(!1);c.useEffect(()=>{const n=()=>{window.pageYOffset>500?s(!0):s(!1)};return window.addEventListener("scroll",n),()=>window.removeEventListener("scroll",n)},[]);const r=()=>{window.scrollTo({top:0,behavior:"smooth"})};return t.jsx(K,{children:e&&t.jsx(b.button,{initial:{opacity:0,scale:.5,y:20},animate:{opacity:1,scale:1,y:0},exit:{opacity:0,scale:.5,y:20},onClick:r,className:"fixed bottom-8 right-8 z-[1000] w-14 h-14 bg-primary text-white rounded-2xl shadow-2xl flex items-center justify-center hover:-translate-y-2 transition-transform group",children:t.jsx(he,{size:24,className:"group-hover:animate-bounce"})})})},dt=c.lazy(()=>f(()=>import("./Hero-BHVk27y5.js"),__vite__mapDeps([0,1,2,3,4]))),Q=c.lazy(()=>f(()=>import("./Ticker-DIw8GAdP.js"),__vite__mapDeps([5,1,2]))),mt=c.lazy(()=>f(()=>import("./About-BW6SVnSI.js"),__vite__mapDeps([6,1,2,3,4]))),pt=c.lazy(()=>f(()=>import("./Services-9Zr-wTbn.js"),__vite__mapDeps([7,1,2,4]))),ut=c.lazy(()=>f(()=>import("./WhyChooseUs-Co0K_rIE.js"),__vite__mapDeps([8,1,2,3,4]))),gt=c.lazy(()=>f(()=>import("./Gallery-DeTxk_Il.js"),__vite__mapDeps([9,1,2,4]))),ht=c.lazy(()=>f(()=>import("./Clients-DH5Yposm.js"),__vite__mapDeps([10,1,2,4]))),xt=c.lazy(()=>f(()=>import("./Contact-CWxO1JJc.js"),__vite__mapDeps([11,1,2,4]))),ft=c.lazy(()=>f(()=>import("./Privacy-z2b9fe6Y.js"),__vite__mapDeps([12,1,2,4]))),yt=c.lazy(()=>f(()=>import("./Terms-DJ9m6l8R.js"),__vite__mapDeps([13,1,2,4]))),vt=c.lazy(()=>f(()=>import("./AdminLayout-BiH4allV.js"),__vite__mapDeps([14,1,2,4]))),bt=c.lazy(()=>f(()=>import("./Login-BnDsKfrx.js"),__vite__mapDeps([15,1,2,4]))),jt=c.lazy(()=>f(()=>import("./ManageHero-C6SmYlbV.js"),__vite__mapDeps([16,1,2,4]))),_t=c.lazy(()=>f(()=>import("./ManageServices-BZKqpD4c.js"),__vite__mapDeps([17,1,2,4]))),wt=c.lazy(()=>f(()=>import("./ManageGallery-Bt1oCxqY.js"),__vite__mapDeps([18,1,2,4]))),Nt=c.lazy(()=>f(()=>import("./ManageClients-BZSc1eWh.js"),__vite__mapDeps([19,1,2,4]))),Et=()=>t.jsxs(t.Fragment,{children:[t.jsx(nt,{}),t.jsxs("main",{children:[t.jsx(c.Suspense,{fallback:t.jsx("div",{className:"min-h-screen"}),children:t.jsx(dt,{})}),t.jsx(c.Suspense,{fallback:t.jsx("div",{className:"h-20"}),children:t.jsx(Q,{})}),t.jsx(c.Suspense,{fallback:t.jsx("div",{className:"min-h-[600px]"}),children:t.jsx(mt,{})}),t.jsx(c.Suspense,{fallback:t.jsx("div",{className:"min-h-[800px]"}),children:t.jsx(pt,{})}),t.jsx(c.Suspense,{fallback:t.jsx("div",{className:"min-h-[600px]"}),children:t.jsx(ut,{})}),t.jsx(c.Suspense,{fallback:t.jsx("div",{className:"h-20"}),children:t.jsx(Q,{reverse:!0})}),t.jsx(c.Suspense,{fallback:t.jsx("div",{className:"min-h-[800px]"}),children:t.jsx(gt,{})}),t.jsx(c.Suspense,{fallback:t.jsx("div",{className:"min-h-[400px]"}),children:t.jsx(ht,{})}),t.jsx(c.Suspense,{fallback:t.jsx("div",{className:"min-h-[600px]"}),children:t.jsx(xt,{})})]}),t.jsx(lt,{}),t.jsx(ct,{})]});function It(){return t.jsx(ce,{children:t.jsxs("div",{className:"min-h-screen",children:[t.jsx(ot,{position:"top-center"}),t.jsx(c.Suspense,{fallback:t.jsx("div",{className:"min-h-screen bg-background"}),children:t.jsxs(de,{children:[t.jsx(v,{path:"/",element:t.jsx(Et,{})}),t.jsx(v,{path:"/privacy",element:t.jsx(ft,{})}),t.jsx(v,{path:"/terms",element:t.jsx(yt,{})}),t.jsx(v,{path:"/admin/login",element:t.jsx(bt,{})}),t.jsxs(v,{path:"/admin",element:t.jsx(vt,{}),children:[t.jsx(v,{index:!0,element:t.jsx(me,{to:"/admin/hero",replace:!0})}),t.jsx(v,{path:"hero",element:t.jsx(jt,{})}),t.jsx(v,{path:"services",element:t.jsx(_t,{})}),t.jsx(v,{path:"gallery",element:t.jsx(wt,{})}),t.jsx(v,{path:"clients",element:t.jsx(Nt,{})})]})]})})]})})}$.createRoot(document.getElementById("root")).render(t.jsx(X.StrictMode,{children:t.jsx(It,{})}));export{V as i,it as o,Pt as z};
