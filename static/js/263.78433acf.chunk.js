"use strict";(self.webpackChunkkinosearch_v2=self.webpackChunkkinosearch_v2||[]).push([[263],{730:function(e,r,n){n.d(r,{Z:function(){return l}});n(2791);var t=n(9712),o=n(3504),i=n(7087),a=(n(9713),n(184));var l=function(e){var r=e.film,n=e.isSearch;return(0,a.jsx)(t.xu,{minW:n?"full":"140px",w:n?"full":"140px",maxW:n?"full":"140px",children:(0,a.jsx)(t.xu,{as:o.rU,to:"/film/".concat(r.kinopoiskId||r.filmId),children:(0,a.jsxs)(t.Kq,{direction:"column",spacing:"10px",children:[(0,a.jsx)(i.LazyLoadImage,{src:r.posterUrl,width:n?"auto":"140px",height:n?"auto":"210px",className:"poster_image",effect:"blur"}),(0,a.jsx)(t.X6,{size:"sm",maxW:n?"full":"140px",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:n?"normal":"nowrap",children:r.nameRu||r.nameEn})]})})})}},7357:function(e,r,n){n.r(r),n.d(r,{default:function(){return M}});var t=n(4165),o=n(5861),i=n(9439),a=n(2791),l=n(9712),s=n(1413),c=n(4925),u=n(3544),d=n(7697),p=n(1197),g=["htmlWidth","htmlHeight","alt"],f=["fallbackSrc","fallback","src","srcSet","align","fit","loading","ignoreFallback","crossOrigin","fallbackStrategy","referrerPolicy"];var h=(0,u.Gp)((function(e,r){var n=e.htmlWidth,t=e.htmlHeight,o=e.alt,i=(0,c.Z)(e,g);return a.createElement("img",(0,s.Z)({width:n,height:t,ref:r,alt:o},i))}));d.Ts&&(h.displayName="NativeImage");var m=(0,u.Gp)((function(e,r){var n=e.fallbackSrc,t=e.fallback,o=e.src,l=e.srcSet,g=e.align,m=e.fit,v=e.loading,x=e.ignoreFallback,w=e.crossOrigin,b=e.fallbackStrategy,Z=void 0===b?"beforeLoadOrError":b,j=e.referrerPolicy,k=(0,c.Z)(e,f),E=null!=v||x||!(void 0!==n||void 0!==t),C=function(e){var r=e.loading,n=e.src,t=e.srcSet,o=e.onLoad,l=e.onError,s=e.crossOrigin,c=e.sizes,u=e.ignoreFallback,d=(0,a.useState)("pending"),g=(0,i.Z)(d,2),f=g[0],h=g[1];(0,a.useEffect)((function(){h(n?"loading":"pending")}),[n]);var m=(0,a.useRef)(),v=(0,a.useCallback)((function(){if(n){x();var e=new Image;e.src=n,s&&(e.crossOrigin=s),t&&(e.srcset=t),c&&(e.sizes=c),r&&(e.loading=r),e.onload=function(e){x(),h("loaded"),null==o||o(e)},e.onerror=function(e){x(),h("failed"),null==l||l(e)},m.current=e}}),[n,s,t,c,o,l,r]),x=function(){m.current&&(m.current.onload=null,m.current.onerror=null,m.current=null)};return(0,p.Gw)((function(){if(!u)return"loading"===f&&v(),function(){x()}}),[f,v,u]),u?"loaded":f}((0,s.Z)((0,s.Z)({},e),{},{ignoreFallback:E})),O=function(e,r){return"loaded"!==e&&"beforeLoadOrError"===r||"failed"===e&&"onError"===r}(C,Z),S=(0,s.Z)({ref:r,objectFit:m,objectPosition:g},E?k:(0,d.CE)(k,["onError","onLoad"]));return O?t||a.createElement(u.m$.img,(0,s.Z)({as:h,className:"chakra-image__placeholder",src:n},S)):a.createElement(u.m$.img,(0,s.Z)({as:h,src:o,srcSet:l,crossOrigin:w,loading:v,referrerPolicy:j,className:"chakra-image"},S))}));(0,u.Gp)((function(e,r){return a.createElement(u.m$.img,(0,s.Z)({ref:r,as:h,className:"chakra-image"},e))}));d.Ts&&(m.displayName="Image");var v=n(4942),x=n(3596),w=n(7819),b=n(3803),Z=n(2778),j=n(3395),k=n(1856),E=n(9642),C=["openDelay","closeDelay","closeOnClick","closeOnMouseDown","closeOnEsc","onOpen","onClose","placement","id","isOpen","defaultIsOpen","arrowSize","arrowShadowColor","arrowPadding","modifiers","isDisabled","gutter","offset","direction"],O=["children","label","shouldWrapChildren","aria-label","hasArrow","bg","portalProps","background","backgroundColor","bgColor"],S={exit:{scale:.85,opacity:0,transition:{opacity:{duration:.15,easings:"easeInOut"},scale:{duration:.2,easings:"easeInOut"}}},enter:{scale:1,opacity:1,transition:{opacity:{easings:"easeOut",duration:.2},scale:{duration:.2,ease:[.175,.885,.4,1.1]}}}};var y=(0,u.m$)(j.E.div),P=(0,u.Gp)((function(e,r){var n,t,o=(0,u.mq)("Tooltip",e),i=(0,b.Lr)(e),l=(0,u.Fg)(),g=i.children,f=i.label,h=i.shouldWrapChildren,m=i["aria-label"],j=i.hasArrow,P=i.bg,_=i.portalProps,I=i.background,z=i.backgroundColor,T=i.bgColor,F=(0,c.Z)(i,O),K=null!==(n=null!==(t=null!==I&&void 0!==I?I:z)&&void 0!==t?t:P)&&void 0!==n?n:T;K&&(o.bg=K,o[x.j.arrowBg.var]=(0,d.K1)(l,"colors",K));var D,q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=e.openDelay,n=void 0===r?0:r,t=e.closeDelay,o=void 0===t?0:t,i=e.closeOnClick,l=void 0===i||i,u=e.closeOnMouseDown,g=e.closeOnEsc,f=void 0===g||g,h=e.onOpen,m=e.onClose,w=e.placement,b=e.id,Z=e.isOpen,j=e.defaultIsOpen,k=e.arrowSize,O=void 0===k?10:k,S=e.arrowShadowColor,y=e.arrowPadding,P=e.modifiers,_=e.isDisabled,I=e.gutter,z=e.offset,T=e.direction,F=(0,c.Z)(e,C),K=(0,p.qY)({isOpen:Z,defaultIsOpen:j,onOpen:h,onClose:m}),D=K.isOpen,q=K.onOpen,R=K.onClose,W=(0,x.D)({enabled:D,placement:w,arrowPadding:y,modifiers:P,gutter:I,offset:z,direction:T}),X=W.referenceRef,A=W.getPopperProps,M=W.getArrowInnerProps,N=W.getArrowProps,$=(0,p.Me)(b,"tooltip"),L=(0,a.useRef)(null),U=(0,a.useRef)(),G=(0,a.useRef)(),Y=(0,a.useCallback)((function(){_||U.current||(U.current=window.setTimeout(q,n))}),[_,q,n]),B=(0,a.useCallback)((function(){U.current&&(clearTimeout(U.current),U.current=void 0),G.current=window.setTimeout(R,o)}),[o,R]),H=(0,a.useCallback)((function(){D&&l&&B()}),[l,B,D]),J=(0,a.useCallback)((function(){D&&u&&B()}),[u,B,D]),Q=(0,a.useCallback)((function(e){D&&"Escape"===e.key&&B()}),[D,B]);(0,p.OR)("keydown",f?Q:void 0),(0,a.useEffect)((function(){return function(){clearTimeout(U.current),clearTimeout(G.current)}}),[]),(0,p.OR)("mouseleave",B,(function(){return L.current}));var V=(0,a.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,s.Z)((0,s.Z)({},e),{},{ref:(0,E.lq)(L,r,X),onMouseEnter:(0,d.v0)(e.onMouseEnter,Y),onClick:(0,d.v0)(e.onClick,H),onMouseDown:(0,d.v0)(e.onMouseDown,J),onFocus:(0,d.v0)(e.onFocus,Y),onBlur:(0,d.v0)(e.onBlur,B),"aria-describedby":D?$:void 0})}),[Y,B,J,D,$,H,X]),ee=(0,a.useCallback)((function(){var e,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return A((0,s.Z)((0,s.Z)({},r),{},{style:(0,s.Z)((0,s.Z)({},r.style),{},(e={},(0,v.Z)(e,x.j.arrowSize.var,O?(0,d.px)(O):void 0),(0,v.Z)(e,x.j.arrowShadowColor.var,S),e))}),n)}),[A,O,S]),re=(0,a.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,s.Z)((0,s.Z)((0,s.Z)({ref:r},F),e),{},{id:$,role:"tooltip",style:(0,s.Z)((0,s.Z)({},e.style),{},{position:"relative",transformOrigin:x.j.transformOrigin.varRef})})}),[F,$]);return{isOpen:D,show:Y,hide:B,getTriggerProps:V,getTooltipProps:re,getTooltipPositionerProps:ee,getArrowProps:N,getArrowInnerProps:M}}((0,s.Z)((0,s.Z)({},F),{},{direction:l.direction}));if((0,d.HD)(g)||h)D=a.createElement(u.m$.span,(0,s.Z)({tabIndex:0},q.getTriggerProps()),g);else{var R=a.Children.only(g);D=(0,a.cloneElement)(R,q.getTriggerProps(R.props,R.ref))}var W=!!m,X=q.getTooltipProps({},r),A=W?(0,d.CE)(X,["role","id"]):X,M=(0,d.ei)(X,["role","id"]);return f?a.createElement(a.Fragment,null,D,a.createElement(k.M,null,q.isOpen&&a.createElement(w.h_,(0,s.Z)({},_),a.createElement(u.m$.div,(0,s.Z)((0,s.Z)({},q.getTooltipPositionerProps()),{},{__css:{zIndex:o.zIndex,pointerEvents:"none"}}),a.createElement(y,(0,s.Z)((0,s.Z)({variants:S},A),{},{initial:"exit",animate:"enter",exit:"exit",__css:o}),f,W&&a.createElement(Z.TX,(0,s.Z)({},M),m),j&&a.createElement(u.m$.div,{"data-popper-arrow":!0,className:"chakra-tooltip__arrow-wrapper"},a.createElement(u.m$.div,{"data-popper-arrow-inner":!0,className:"chakra-tooltip__arrow",__css:{bg:o.bg}}))))))):a.createElement(a.Fragment,null,g)}));d.Ts&&(P.displayName="Tooltip");var _=n(5777),I=n(6871),z=n(3504),T=n(4569),F=n.n(T),K=n(9478),D=n(1605),q=n(730),R=n(4370),W=n(8699),X=n(9555),A=n(184);var M=function(){var e=(0,I.UO)().filmId,r=a.useState(!1),n=(0,i.Z)(r,2),s=n[0],c=n[1],u=a.useState(!0),d=(0,i.Z)(u,2),p=d[0],g=d[1],f=a.useState(null),h=(0,i.Z)(f,2),v=h[0],x=h[1],w=(0,X.uF)(),b=a.useState([]),Z=(0,i.Z)(b,2),j=Z[0],k=Z[1],E=a.useState([]),C=(0,i.Z)(E,2),O=C[0],S=C[1];return a.useEffect((function(){var r=function(){var r=(0,o.Z)((0,t.Z)().mark((function r(){var n,o;return(0,t.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return k([]),S([]),g(!0),r.prev=3,r.next=6,F().get("".concat(K.Z.api_url,"/films/").concat(e),{headers:{"X-API-KEY":K.Z.api_token}});case 6:n=r.sent,o=n.data,x(o),c(!1),r.next=15;break;case 12:r.prev=12,r.t0=r.catch(3),c(!0);case 15:return r.prev=15,g(!1),r.finish(15);case 18:case"end":return r.stop()}}),r,null,[[3,12,15,18]])})));return function(){return r.apply(this,arguments)}}();if(r(),!s){var n=function(){var r=(0,o.Z)((0,t.Z)().mark((function r(){var n,o,i,a;return(0,t.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,F().get("".concat(K.Z.api_url,"/films/").concat(e,"/similars"),{headers:{"X-API-KEY":K.Z.api_token}});case 3:n=r.sent,o=n.data,k(o.items),r.next=10;break;case 8:r.prev=8,r.t0=r.catch(0);case 10:return r.prev=10,r.next=13,F().get("".concat(K.Z.sequels_and_prequels_url,"/films/").concat(e,"/sequels_and_prequels"),{headers:{"X-API-KEY":K.Z.api_token}});case 13:i=r.sent,a=i.data,S(a),r.next=20;break;case 18:r.prev=18,r.t1=r.catch(10);case 20:case"end":return r.stop()}}),r,null,[[0,8],[10,18]])})));return function(){return r.apply(this,arguments)}}();n()}}),[e]),(0,A.jsx)(A.Fragment,{children:p&&(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(R.D,{title:"KinoSearch"}),(0,A.jsx)(D.Z,{})]})||(0,A.jsx)(A.Fragment,{children:s&&(0,A.jsxs)(l.M5,{h:"80vh",children:[(0,A.jsx)(R.D,{title:"\u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u0430 \u2013 KinoSearch"}),(0,A.jsx)(l.X6,{children:"\u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u0430"})]})||(0,A.jsxs)(l.Kq,{direction:"column",spacing:10,children:[(0,A.jsx)(R.D,{title:"".concat(v.nameRu||v.nameEn," \u2013 KinoSearch")}),(0,A.jsxs)(l.Kq,{spacing:"50px",direction:["column","row"],paddingRight:[0,10],children:[(0,A.jsx)(m,{src:v.posterUrl,w:["auto","350px"],borderRadius:"20px"}),(0,A.jsxs)(l.Kq,{direction:"column",spacing:"20px",children:[(0,A.jsxs)(l.Kq,{direction:"row",justifyContent:"space-between",spacing:"15px",children:[(0,A.jsx)(l.X6,{size:"xl",fontWeight:"800",children:v.nameRu||v.nameEn}),v.ratingKinopoisk||v.ratingImdb||v.ratingFilmCritics?(0,A.jsx)(P,{label:"\u0420\u0435\u0439\u0442\u0438\u043d\u0433 \u0444\u0438\u043b\u044c\u043c\u0430",hasArrow:!0,bg:"#252525",color:"white",placement:"top",children:(0,A.jsx)(l.M5,{children:(0,A.jsx)(l.Ct,{colorScheme:"green",variant:"subtle",fontSize:"lg",children:v.ratingKinopoisk||v.ratingImdb||v.ratingFilmCritics})})}):null]}),(0,A.jsx)(l.xv,{fontWeight:"500",fontSize:"lg",children:v.shortDescription||v.slogan||v.description}),(0,A.jsxs)(l.Kq,{direction:"row",spacing:"10px",children:[(0,A.jsx)(_.zx,{colorScheme:"brand",variant:"outline",size:"lg",borderRadius:"30px",w:"100%",as:z.rU,to:"/watch/".concat(e),children:"\u0421\u043c\u043e\u0442\u0440\u0435\u0442\u044c"}),w&&(0,A.jsx)(P,{label:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432 \u0438\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0435",hasArrow:!0,bg:"#252525",color:"white",placement:"top",children:(0,A.jsx)(_.hU,{"aria-label":"Favorite",icon:(0,A.jsx)(W.r7,{w:6,h:6}),size:"lg"})})]}),(0,A.jsx)(l.X6,{size:"xl",fontWeight:"800",children:"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043e \u0444\u0438\u043b\u044c\u043c\u0435"}),(0,A.jsxs)(l.xv,{fontWeight:"500",fontSize:"lg",children:["\u0413\u043e\u0434 \u0432\u044b\u043f\u0443\u0441\u043a\u0430: ",v.year||"\u043d\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043d\u043e",(0,A.jsx)("br",{}),"\u0421\u0442\u0440\u0430\u043d\u0430: ",v.countries[0].country||"\u043d\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043d\u043e",(0,A.jsx)("br",{}),"\u0416\u0430\u043d\u0440: ",v.genres[0].genre||"\u043d\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043d\u043e"]})]})]}),0!==O.length&&(0,A.jsxs)(l.xu,{children:[(0,A.jsxs)(l.X6,{size:"md",fontWeight:"700",children:["\u0421\u0438\u043a\u0432\u0435\u043b\u044b \u0438 \u043f\u0440\u0438\u043a\u0432\u0435\u043b\u044b"," ",(0,A.jsx)(l.Ct,{ml:"1",fontSize:"md",children:O.length})]}),(0,A.jsx)(l.xu,{paddingTop:5,children:(0,A.jsx)(l.Kq,{direction:"row",overflow:"auto",overflowX:"auto",spacing:"20px",children:O.map((function(e){return(0,A.jsx)(q.Z,{film:e})}))})})]}),0!==j.length&&(0,A.jsxs)(l.xu,{children:[(0,A.jsxs)(l.X6,{size:"md",fontWeight:"700",children:["\u0415\u0441\u043b\u0438 \u0432\u0430\u043c \u043f\u043e\u043d\u0440\u0430\u0432\u0438\u043b\u0441\u044f \u044d\u0442\u043e\u0442 \u0444\u0438\u043b\u044c\u043c"," ",(0,A.jsx)(l.Ct,{ml:"1",fontSize:"md",children:j.length})]}),(0,A.jsx)(l.xu,{paddingTop:5,children:(0,A.jsx)(l.Kq,{direction:"row",overflow:"auto",overflowX:"auto",spacing:"20px",children:j.map((function(e){return(0,A.jsx)(q.Z,{film:e})}))})})]})]})})})}}}]);
//# sourceMappingURL=263.78433acf.chunk.js.map