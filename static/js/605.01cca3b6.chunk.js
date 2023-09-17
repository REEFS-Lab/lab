"use strict";(self.webpackChunkearth_science=self.webpackChunkearth_science||[]).push([[605],{5605:function(e,t,n){function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,i,o=[],l=!0,a=!1;try{for(n=n.call(e);!(l=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);l=!0);}catch(u){a=!0,i=u}finally{try{l||null==n.return||n.return()}finally{if(a)throw i}}return o}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e){return u="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(e)}var c=n(2791);function s(e){return e&&"object"===u(e)&&"default"in e?e:{default:e}}var d,f,g=s(c),h=function(){var e,t={},n=[],r=function(){"function"===typeof Image&&(e=new Array(3).fill(0).map((function(){return new Image})))};return r(),{load:function(i){if(e){if(i&&!t[i])if(0===e.length)n.push(i);else{var o=e.shift();o.src=i,o.onload=function(){t[i]=!0,n.length>0?o.src=n.shift():e.push(o)}}}else r()}}}();!function(e){e[e.NORMAL=1]="NORMAL",e[e.BOLD=2]="BOLD"}(d||(d={})),function(e){e.LEFT="left",e.RIGHT="right"}(f||(f={}));var v=function(e){return g.default.createElement(g.default.Fragment,null,e.visible&&g.default.createElement("button",{type:"button",style:x.getNavStyle(e.direction,e.size,e.margin),onClick:e.onClickNav(e.direction)},g.default.createElement("img",{src:e.type===d.NORMAL?"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='24' height='24' viewBox='0 0 24 24'%3e %3cdefs%3e %3cfilter id='8utpkffr2a' width='171.8%25' height='232.4%25' x='-35.9%25' y='-66.2%25' filterUnits='objectBoundingBox'%3e %3cfeOffset in='SourceAlpha' result='shadowOffsetOuter1'/%3e %3cfeGaussianBlur in='shadowOffsetOuter1' result='shadowBlurOuter1' stdDeviation='2'/%3e %3cfeColorMatrix in='shadowBlurOuter1' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0'/%3e %3c/filter%3e %3cpath id='6inzdknobb' d='M20 6.999L20.707 7.706 12.354 16.06 4 7.706 4.707 6.999 12.354 14.646z'/%3e %3c/defs%3e %3cg fill='none' fill-rule='evenodd'%3e %3cg%3e %3cg%3e %3cg transform='translate(-67 -27) translate(67 27) rotate(90 12.354 11.53)'%3e %3cuse fill='black' filter='url(%238utpkffr2a)' xlink:href='%236inzdknobb'/%3e %3cuse fill='white' xlink:href='%236inzdknobb'/%3e %3c/g%3e %3c/g%3e %3c/g%3e %3c/g%3e%3c/svg%3e":"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='24' height='24' viewBox='0 0 24 24'%3e %3cdefs%3e %3cfilter id='0ls8o9a99a' width='168.9%25' height='218.6%25' x='-34.5%25' y='-59.3%25' filterUnits='objectBoundingBox'%3e %3cfeOffset in='SourceAlpha' result='shadowOffsetOuter1'/%3e %3cfeGaussianBlur in='shadowOffsetOuter1' result='shadowBlurOuter1' stdDeviation='2'/%3e %3cfeColorMatrix in='shadowBlurOuter1' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0'/%3e %3c/filter%3e %3cpath id='rs87bry78b' d='M19 7L20.413 8.414 11.707 17.12 2.999 8.414 4.413 7 11.707 14.291z'/%3e %3c/defs%3e %3cg fill='none' fill-rule='evenodd'%3e %3cg%3e %3cg%3e %3cg transform='translate(-24 -27) translate(24 27) rotate(90 11.707 12.06)'%3e %3cuse fill='black' filter='url(%230ls8o9a99a)' xlink:href='%23rs87bry78b'/%3e %3cuse fill='white' xlink:href='%23rs87bry78b'/%3e %3c/g%3e %3c/g%3e %3c/g%3e %3c/g%3e%3c/svg%3e",style:l({width:"100%"},e.direction===f.RIGHT&&{transform:"rotate(180deg)"}),alt:e.direction===f.LEFT?"slide to left":"slide to right"})))},p={display:"block",margin:"0",padding:"0",border:"0"},m={position:"absolute",left:0,top:0,width:"100%",height:"100%",backgroundSize:"cover"},b={position:"absolute",top:"50%",cursor:"pointer",outline:"none",background:"none"},y={position:"absolute",left:"50%",bottom:"15px"},w={display:"inline-block",cursor:"pointer",outline:"none",background:"none",boxShadow:"1px 1px 1px 0px #1a1a1a",borderRadius:"50%",border:"1px solid #FFFFFF",width:"".concat(15,"px"),height:"".concat(15,"px"),marginLeft:"".concat(3,"px"),marginRight:"".concat(3,"px")},x={ImageSlider:l(l({},p),{position:"absolute",left:0,top:0,width:"100%",height:"100%"}),ImageSlideCurrent:l(l({},m),{},{overflow:"hidden"}),ImageSlideNext:l(l({},m),{},{overflow:"hidden"}),NavLeft:l(l(l({},p),b),{},{left:"30px",marginTop:"-25px"}),NavRight:l(l(l({},p),b),{},{right:"30px",marginTop:"-25px"}),BulletNormal:l(l({},p),w),BulletActive:l(l(l({},p),w),{},{background:"#FFF"}),getRootContainer:function(e,t,n){return l(l({},p),{},{overflow:"hidden",width:e,height:t,backgroundColor:n})},getSubContainer:function(e,t){return l(l({},p),{},{position:"absolute",overflow:"hidden",width:e,height:t})},getBulletContainer:function(e){return l(l(l({},p),y),{},{marginLeft:"-".concat(21*e/2,"px")})},getImageSlide:function(e,t,n,r){return l(l({},m),{},{overflow:"hidden",transition:"".concat(t,"s"),backgroundImage:"url(".concat(e,")"),transform:r?"translate3d(".concat(100*n,"%, 0px, 0px)"):"translate(".concat(100*n,"%, 0px)")})},getNavStyle:function(e,t,n){return l(l(l(l({},p),b),e===f.LEFT?{left:"".concat(n,"px")}:{right:"".concat(n,"px")}),{},{marginTop:"-".concat(Math.floor(t/2),"px"),width:"".concat(t,"px")})}},k=function(e){var t=e.visible,n=e.length,r=e.currentIdx,i=e.onClickBullets;return g.default.createElement(g.default.Fragment,null,t&&n>0&&g.default.createElement("div",{style:x.getBulletContainer(n)},Array.from(Array(n).keys()).map((function(e){return g.default.createElement("button",{key:"bullet-".concat(e),type:"button","data-id":"bullet-".concat(e),style:e===r?x.BulletActive:x.BulletNormal,onClick:function(){return i(e)}})}))))},S=function(e){var t=e.startIndex,n=e.imageCount,i=e.autoPlay,o=e.autoPlayDelay,l=r(c.useState(t<n?t:0),2),a=l[0],u=l[1],s=c.useRef(!0),d=c.useRef(a),f=c.useRef(null),g=function(){null!==f.current&&(clearTimeout(f.current),f.current=null)},h=function(e){return e>=n?0:e<0?n-1:e},v=function(e){s.current=e>a,d.current=a,u(h(e))};return c.useEffect((function(){var e;return g(),e=a+1,i&&!f.current&&(f.current=setTimeout((function(){v(e)}),1e3*o)),g}),[a]),{slideIdx:a,updateSlideIdx:v,getNextLoopingIdx:h,isRightDirection:s.current,previousSlideIdx:d.current}},O=function(e,t){var n;return(null===(n=e[t])||void 0===n?void 0:n.url)||e[t]};e.exports=function(e){var t=e.width,n=e.height,i=e.images,o=e.showNavs,a=e.showBullets,u=e.loop,s=void 0===u||u,p=e.autoPlay,m=void 0!==p&&p,b=e.autoPlayDelay,y=void 0===b?2:b,w=e.startIndex,I=void 0===w?0:w,C=e.style,B=void 0===C?void 0:C,E=e.slideDuration,N=void 0===E?.5:E,R=e.bgColor,j=void 0===R?"#000":R,A=e.useGPURender,L=void 0===A||A,P=e.navSize,T=void 0===P?50:P,F=e.navMargin,D=void 0===F?30:F,M=e.navStyle,z=void 0===M?d.NORMAL:M,G=e.onClick,H=void 0===G?void 0:G,U=e.onClickNav,_=void 0===U?void 0:U,$=e.onClickBullets,q=void 0===$?void 0:$,J=e.onStartSlide,K=void 0===J?void 0:J,Q=e.onCompleteSlide,V=void 0===Q?void 0:Q,W=c.useMemo((function(){return x.getRootContainer(t,n,j)}),[t,n,j]),X=S({imageCount:i.length,startIndex:I,autoPlay:m,autoPlayDelay:y+N}),Y=X.slideIdx,Z=X.updateSlideIdx,ee=X.isRightDirection,te=X.getNextLoopingIdx,ne=X.previousSlideIdx,re=r(c.useState(x.getImageSlide(O(i,I),N,0,L)),2),ie=re[0],oe=re[1],le=r(c.useState(x.getImageSlide(O(i,I+1),N,1,L)),2),ae=le[0],ue=le[1],ce=c.useRef(!1),se=c.useCallback((function(e){null===H||void 0===H||H(Y,e)}),[Y]),de=c.useCallback((function(e){return function(){if(!ce.current){var t=e===f.RIGHT;null===_||void 0===_||_(t),Z(t?Y+1:Y-1)}}}),[_,Y,Z]),fe=c.useCallback((function(e){e===Y||ce.current||(null===q||void 0===q||q(e),Z(e))}),[q,Y,Z]);c.useEffect((function(){if(Y!==ne){var e=O(i,te(ee?Y-1:Y+1)),t=O(i,Y),n=ee?-1:1,r=ee?1:-1;null===K||void 0===K||K(Y+1,i.length),ue(x.getImageSlide(t,0,r,L)),setTimeout((function(){ce.current=!0,oe(x.getImageSlide(e,N,n,L)),ue(x.getImageSlide(t,N,0,L))}),50)}}),[K,Y,ee]);var ge=c.useCallback((function(){ce.current=!1,h.load(O(i,Y+2)),oe(x.getImageSlide(O(i,Y),0,0,L)),null===V||void 0===V||V(Y+1,i.length)}),[V,Y]);return g.default.createElement("div",{style:l(l({},W),B)},g.default.createElement("div",{style:x.getSubContainer(t,n)},g.default.createElement("div",{style:x.ImageSlider,onClick:se,className:"rsis-container"},g.default.createElement("div",{style:ie,onTransitionEnd:ge,className:"rsis-image"}),i.length>1&&g.default.createElement("div",{style:ae})),(s||Y>0)&&g.default.createElement(v,{direction:f.LEFT,visible:o&&i.length>0,type:z,size:T,margin:D,onClickNav:de}),(s||Y<i.length-1)&&g.default.createElement(v,{direction:f.RIGHT,visible:o&&i.length>0,type:z,size:T,margin:D,onClickNav:de}),g.default.createElement(k,{visible:a,length:i.length,currentIdx:Y,onClickBullets:fe})))}}}]);
//# sourceMappingURL=605.01cca3b6.chunk.js.map