if (self.CavalryLogger) { CavalryLogger.start_js(["BghB9"]); }

__d("getBaseContextualLayerPositioningStyles_DEPRECATED",["Locale"],(function(a,b,c,d,e,f){"use strict";var g=b("Locale").isRTL();function a(a){var b=a.adjustment,c=a.align,d=a.contextRect,e=a.fixed,f=a.offsetRect;a=a.position;e={height:void 0,position:e?"fixed":void 0,transform:"",width:void 0};var h=0,i=0,j=0,k=0,l=(d.bottom+d.top)/2,m=(d.left+d.right)/2,n=g?"start":"end",o=g?"end":"start";switch(a){case"above":i=d.top-f.top;k="-100%";break;case"below":i=d.bottom-f.top;break;case o:h=d.left-f.left;j="-100%";break;case n:h=d.right-f.left;break}if(a==="start"||a==="end")switch(c){case"start":i=d.top-f.top;break;case"middle":i=l-f.top;k="-50%";break;case"end":i=d.bottom-f.top;k="-100%";break;case"stretch":i=d.top-f.top;e.height=d.bottom-d.top+"px";break}else if(a==="above"||a==="below")switch(c){case o:h=d.left-f.left;break;case"middle":h=m-f.left;j="-50%";break;case n:h=d.right-f.left;j="-100%";break;case"stretch":h=d.left-f.left;e.width=d.right-d.left+"px";break}b!=null&&(a==="start"||a==="end"?i+=b:(a==="above"||a==="below")&&(h+=b));l="";(h!==0||i!==0)&&(l+="translate("+Math.round(h)+"px, "+Math.round(i)+"px) ");(j!==0||k!==0)&&(l+="translate("+j+", "+k+") ");e.transform=l;return e}e.exports=a}),null);
__d("BaseContextualLayer.react",["BaseContextualLayerAnchorRoot.react","BaseContextualLayerAnchorRootContext","BaseContextualLayerContextSizeContext","BaseContextualLayerLayerAdjustmentContext","BaseContextualLayerOrientationContext","BaseContextualLayerPortalTargetContext","BaseLinkNestedPressableContext","BasePortal.react","BaseScrollableAreaContext","CometViewportMarginsContext","FirstFocusScopeQuery.react","FocusRegion.react","HiddenSubtreeContext","Locale","React","ReactDOMComet","TabbableScopeQuery.react","TetraTextContext","getBaseContextualLayerPositioningStyles_DEPRECATED","getComputedStyle","getDefaultViewForNode","mergeRefs","stylex","testID","useLayoutEffect_SAFE_FOR_SSR","useResizeObserver"],(function(a,b,c,d,e,f){"use strict";var g,h=b("FocusRegion.react").FocusRegion,i=b("React");d=b("React");var j=d.useCallback,k=d.useContext,l=d.useEffect,m=d.useImperativeHandle,n=d.useMemo,o=d.useRef,p=d.useState;function q(a,c){var d;c===void 0&&(c="document");if(c==="viewport"){c=a.getBoundingClientRect();return{bottom:c.bottom,left:c.left,right:c.right,top:c.top}}c=q(a,"viewport");a=b("getDefaultViewForNode")(a);d=(d=a==null?void 0:a.pageXOffset)!=null?d:0;a=(a=a==null?void 0:a.pageYOffset)!=null?a:0;return{bottom:c.bottom+a,left:c.left+d,right:c.right+d,top:c.top+a}}function r(a){var c=b("getComputedStyle")(a);return c!=null&&c.getPropertyValue("position")!=="static"?a:a instanceof HTMLElement&&a.offsetParent||a.ownerDocument.documentElement}function s(a){var c=a;while(c!=null&&c!==a.ownerDocument){var d=b("getComputedStyle")(c);if(d==null)return!1;d=d.getPropertyValue("position");if(d==="fixed"||d==="sticky")return!0;c=c.parentElement}return!1}var t=8;function u(a,b){return a.bottom<b.top||b.bottom<a.top||a.right<b.left||b.right<b.left?null:{bottom:Math.min(a.bottom,b.bottom),left:Math.max(a.left,b.left),right:Math.min(a.right,b.right),top:Math.max(a.top,b.top)}}var v=b("Locale").isRTL(),w={root:{left:"j34wkznp",marginRight:"qp9yad78",position:"pmk7jnqg",top:"kr520xx4"}};function c(c,d){var e=c.align,f=e===void 0?"start":e;e=c.autoAlign;var x=e===void 0?!1:e;e=c.children;var y=c.containFocus;y=y===void 0?!1:y;var z=c.context,A=c.disablePositionAutoflip,B=A===void 0?!1:A;A=c.hidden;A=A===void 0?!1:A;var C=c.layerRef,D=c.onIndeterminatePosition,E=c.position,F=E===void 0?"below":E;E=c.xstyle;var G=o(!1);c=p(function(){return F});var H=c[0],I=c[1];c=p(null);var J=c[0],K=c[1];c=p(null);var L=c[0],M=c[1];c=p(null);var aa=c[0],ba=c[1],N=k(b("BaseContextualLayerAnchorRootContext")),O=k(b("BaseScrollableAreaContext"));c=k(b("BaseContextualLayerPortalTargetContext"));var P=k(b("CometViewportMarginsContext")),Q=k(b("HiddenSubtreeContext"));Q=Q.hidden;var R=Q||A;Q=p(!1);var S=Q[0],T=Q[1],U=o(null),V=o(null),W=j(function(){var a=U.current,b=document.documentElement;if(a==null||B||b==null)return;var c=q(z,"viewport");a=q(a,"viewport");b={bottom:b.clientHeight-P.bottom-t,left:P.left+t,right:b.clientWidth-P.right-t,top:P.top+t};var d=a.bottom-a.top,e=a.right-a.left;V.current={height:d,width:e};var f=v?"start":"end",g=v?"end":"start";H==="above"||H==="below"?H==="above"&&a.top!==0&&a.top<b.top&&c.bottom+d<b.bottom?I("below"):H==="below"&&a.bottom!==0&&a.bottom>b.bottom&&c.top-d>b.top&&I("above"):(H==="start"||H==="end")&&(H===g&&a.left!==0&&a.left<b.left&&c.right+e<b.right?I(f):H===f&&a.right!==0&&a.right>b.right&&c.left-e>b.left&&I(g))},[z,B,H,P.bottom,P.left,P.right,P.top]),X=j(function(){var c=N.current||a.document.body,d=document.documentElement,e=r(c);if(e==null||d==null)return;c=s(c);var g=!c&&s(z),h=O.map(function(a){return a.getDOMNode()}).filter(Boolean).filter(function(a){return e.contains(a)}).reduce(function(a,b){return a!=null?u(a,q(b,g?"viewport":"document")):null},q(z,g?"viewport":"document"));if(h==null||h.left===0&&h.right===0){T(!0);D&&D();return}var i=g?{bottom:d.clientHeight,left:0,right:d.clientWidth,top:0}:q(e,"document"),j=null,k=V.current;if(G.current&&k!=null&&x===!0){d={bottom:d.clientHeight-P.bottom-t,left:P.left+t,right:d.clientWidth-P.right-t,top:P.top+t};if(H==="start"||H==="end"){var l,m;if(f==="middle"){var n=(h.bottom+h.top)/2;l=n-k.height/2;m=n+k.height/2}else f==="start"?(l=h.top,m=h.top+k.height):f==="end"&&(l=h.bottom-k.height,m=h.bottom);if(l!=null&&m!=null){if(c){l-=(n=window.pageYOffset)!=null?n:0;m-=(n=window.pageYOffset)!=null?n:0}l<d.top?j=d.top-l:m>d.bottom&&(j=d.bottom-m)}}else if(H==="above"||H==="below"){var o,p;n=v?"start":"end";var w=v?"end":"start";if(f==="middle"){var y=(h.right+h.left)/2;o=y-k.width/2;p=y+k.width/2}else f===w?(o=h.left,p=h.left+k.width):f===n&&(o=h.right-k.width,p=h.right);if(o!=null&&p!=null){if(c){o-=(y=window.layerXOffset)!=null?y:0;p-=(w=window.layerXOffset)!=null?w:0}o<d.left?j=d.left-o:p>d.right&&(j=d.right-p)}}}n=b("getBaseContextualLayerPositioningStyles_DEPRECATED")({adjustment:j,align:f,contextRect:h,fixed:g,offsetRect:i,position:H});k=U.current;if(k!=null){c=Object.keys(n);for(var y=0;y<c.length;y++){w=c[y];d=n[w];d!=null?k.style.setProperty(w,d):k.style.removeProperty(w)}}G.current=!0;b("ReactDOMComet").unstable_batchedUpdates(function(){T(!1),h!=null&&(K(h.bottom-h.top),M(h.right-h.left)),ba(j)})},[N,z,O,x,f,H,D,P.bottom,P.left,P.right,P.top]);m(d,function(){return{reposition:function(a){a=a||{};a=a.autoflip;a=a===void 0?!1:a;a&&W();X()}}},[X,W]);var Y=b("useResizeObserver")(function(a){var b=a.height;a=a.width;V.current={height:b,width:a}}),Z=o(F);b("useLayoutEffect_SAFE_FOR_SSR")(function(){F!==Z.current&&(I(F),W(),X()),Z.current=F},[F,X,W]);var $=j(function(a){U.current=a,a!=null&&!R?(G.current||X(),W(),X()):a==null&&(G.current=!1)},[R,X,W]);l(function(){if(R)return;var b=function(){W(),X()};a.addEventListener("resize",b);return function(){a.removeEventListener("resize",b)}},[R,X,W]);l(function(){if(R)return;var b=O.map(function(a){return a.getDOMNode()}).filter(Boolean);if(b.length>0){b.forEach(function(a){return a.addEventListener("scroll",X,{passive:!0})});return function(){b.forEach(function(a){return a.removeEventListener("scroll",X,{passive:!0})})}}if(a.addEventListener==null)return;a.addEventListener("scroll",X,{passive:!0});return function(){a.removeEventListener("scroll",X,{passive:!0})}},[R,X,O]);Q=n(function(){return b("mergeRefs")($,C,Y)},[$,C,Y]);d=n(function(){return{align:f,position:H}},[f,H]);var ca=n(function(){return J!=null&&L!=null?{height:J,width:L}:null},[J,L]);return i.jsx(b("BasePortal.react"),{target:(c=c)!=null?c:document.body,children:i.jsx("div",babelHelpers["extends"]({},b("testID")("ContextualLayerRoot"),{className:(g||(g=b("stylex")))(w.root,E),hidden:A||S,ref:Q,children:i.jsx(h,{autoFocus:y,autoRecoverFocus:!0,autoRestoreFocus:!0,containFocus:y,disabled:A||S,firstFocusQuery:b("FirstFocusScopeQuery.react"),focusQuery:b("TabbableScopeQuery.react"),children:i.jsx(b("BaseContextualLayerAnchorRoot.react"),{testid:void 0,children:i.jsx(b("BaseContextualLayerContextSizeContext").Provider,{value:ca,children:i.jsx(b("BaseContextualLayerLayerAdjustmentContext").Provider,{value:aa,children:i.jsx(b("BaseContextualLayerOrientationContext").Provider,{value:d,children:i.jsx(b("BaseLinkNestedPressableContext").Provider,{value:!1,children:i.jsx(b("TetraTextContext").Provider,{value:null,children:e})})})})})})})}))})}e.exports=i.forwardRef(c)}),null);
__d("BaseTooltipGroupContext",["React"],(function(a,b,c,d,e,f){"use strict";a=b("React");c=a.createContext(null);e.exports=c}),null);
__d("BaseTooltipGroup.react",["BaseTooltipGroupContext","React","clearTimeout","setTimeout","useSuspenseTransition"],(function(a,b,c,d,e,f){"use strict";var g=b("React");c=b("React");var h=c.useCallback,i=c.useEffect,j=c.useMemo,k=c.useRef,l=c.useState;function a(a){var c=a.children;a=a.tooltipImpl;var d=l(!1),e=d[0],f=d[1];d=l(null);var m=d[0],n=d[1];d=b("useSuspenseTransition")();var o=d[0],p=k(null),q=h(function(a,c,d){p.current!=null&&e===a?(b("clearTimeout")(p.current),p.current=null):c===0?(f(a),d&&d(a)):p.current=b("setTimeout")(function(){f(a),d&&d(a),p.current=null},c)},[e]);i(function(){return function(){p.current!=null&&b("clearTimeout")(p.current)}},[]);d=j(function(){return{isVisible:e,onHide:function(a,b){q(!1,a,b)},onShow:function(a,b,c){o(function(){n(a)}),q(!0,b,c)}}},[e,o,q]);return g.jsxs(g.Fragment,{children:[g.jsx(b("BaseTooltipGroupContext").Provider,{value:d,children:c}),m!=null?g.jsx(a,babelHelpers["extends"]({},m,{isVisible:e})):null]})}e.exports=a}),null);
__d("CometPopoverLoadingState.react",["CometPopover.react","CometProgressRingIndeterminate.react","React","stylex"],(function(a,b,c,d,e,f){"use strict";var g=b("React");function a(a){var c=a.minWidth;c=c===void 0?344:c;a=babelHelpers.objectWithoutPropertiesLoose(a,["minWidth"]);return g.jsx(b("CometPopover.react"),babelHelpers["extends"]({},a,{children:g.jsx("div",{className:"k4urcfbm taijpn5t e5d9fub0 j83agx80 bp9cbjyn",style:{minWidth:c},children:g.jsx(b("CometProgressRingIndeterminate.react"),{color:"disabled",size:24})})}))}e.exports=a}),null);
__d("useCometDeferredDialog",["CometDialogContext","CometSuspendedDialogImpl.react","React","deferredLoadComponent"],(function(a,b,c,d,e,f){"use strict";c=b("React");var g=c.useCallback,h=c.useContext,i=c.useRef;function a(a,c){var d=i(null),e=h(b("CometDialogContext")),f=g(function(d,f){var g=b("deferredLoadComponent")(a);e(b("CometSuspendedDialogImpl.react"),{dialog:g,dialogProps:babelHelpers["extends"]({},d,{loadImmediately:!0}),fallback:c},f)},[e,a,c]);return[f,d]}e.exports=a}),null);
__d("CometLoadingAnimation.react",["cssVar","React","stylex"],(function(a,b,c,d,e,f,g){"use strict";var h,i=b("React"),j=38,k=62,l=42,m=2,n=3,o=4,p=j/2,q=k/2,r=l/2,s=p-2,t=q-2,u=r-2;function a(a){var c=a.animationPaused;c=c===void 0?!1:c;a=a.size;var d,e,f;switch(a){case 36:d=j;e=p;f=s;break;case 40:d=l;e=r;f=u;break;case 60:default:d=k;e=q;f=t;break}return i.jsx("svg",{className:(h||(h=b("stylex"))).dedupe({"position-1":"pmk7jnqg"},a===36?{"start-1":"fuin34xk","top-1":"l59n7fsa"}:null,a===60?{"start-1":"fuin34xk","top-1":"l59n7fsa"}:null,a===40?{"start-1":"fuin34xk","top-1":"l59n7fsa"}:null),height:d,width:d,children:i.jsx("g",{className:"pf5603km a5zjgiyk koppk0rk ee40wjg4 l10wm3d9"+(c?" sb3519qa":""),children:i.jsx("circle",{className:h.dedupe({"animation-direction-1":"lqhrf7f0","animation-duration-1":"l248sb3c","animation-iteration-count-1":"ee40wjg4","animation-timing-function-1":"a5zjgiyk","transform-origin-1":"pf5603km"},a===36?{"animation-direction-1":"lqhrf7f0","animation-duration-1":"l10wm3d9","animation-iteration-count-1":"ee40wjg4","animation-name-1":"suagjxr3","animation-timing-function-1":"a5zjgiyk","stroke-width-1":"s6kb5r3f"}:null,a===40?{"animation-direction-1":"lqhrf7f0","animation-duration-1":"l10wm3d9","animation-iteration-count-1":"ee40wjg4","animation-name-1":"lx74ahqj","animation-timing-function-1":"a5zjgiyk","stroke-width-1":"ggutxrqb"}:null,a===60?{"animation-direction-1":"lqhrf7f0","animation-duration-1":"l10wm3d9","animation-iteration-count-1":"ee40wjg4","animation-name-1":"btit5cxg","animation-timing-function-1":"a5zjgiyk","stroke-width-1":"gjkn0k4t"}:null,c?{"animation-play-state-1":"sb3519qa"}:null),cx:e,cy:e,fill:"none",r:f,stroke:"#1877F2",strokeWidth:a===36?m:a===40?n:o})})})}e.exports=a}),null);
__d("CometListItemGlimmer.react",["BaseGlimmer.react","BaseListItem.react","BaseLoadingStateElement.react","React","stylex"],(function(a,b,c,d,e,f){"use strict";var g,h=b("React");c=b("React");var i=c.useMemo;function a(a){var c=a.imageSize,d=c===void 0?36:c;c=a.imageStyle;var e=c===void 0?"none":c;c=a.numberOfItems;var f=c===void 0?1:c;a=i(function(){return Array(f).fill().map(function(a,b){return Math.floor(Math.PI*Math.pow(10,b%10)%4)})},[f]);return h.jsx(b("BaseLoadingStateElement.react"),{children:a.map(function(a,c){return h.jsx(b("BaseListItem.react"),{addon:e!=="none"?h.jsx(b("BaseGlimmer.react"),{className:(g||(g=b("stylex"))).dedupe(d===20?{"height-1":"jnigpg78","width-1":"odw8uiq3"}:{},d===36?{"height-1":"tv7at329","width-1":"thwo4zme"}:null,d===48?{"height-1":"m7zwrmfr","width-1":"tmrshh9y"}:null,d===56?{"height-1":"e5d9fub0","width-1":"oeao4gh3"}:null,d===60?{"height-1":"cb02d2ww","width-1":"ljni7pan"}:null,e==="circle"?{"border-top-start-radius-1":"s45kfl79","border-top-end-radius-1":"emlxlaya","border-bottom-end-radius-1":"bkmhp75w","border-bottom-start-radius-1":"spb7xbtv"}:null,e==="roundedRect"?{"border-top-start-radius-1":"ue3kfks5","border-top-end-radius-1":"pw54ja7n","border-bottom-end-radius-1":"uo3d90p7","border-bottom-start-radius-1":"l82x9zwi"}:null),index:c}):null,className:(g||(g=b("stylex"))).dedupe(c===0?{"padding-top-1":"jb3vyjys"}:{},{"margin-top-1":"kvgmc6g5","margin-end-1":"oi9244e8","margin-bottom-1":"oygrvhab","margin-start-1":"h676nmdw","padding-top-1":"cxgpxx05","padding-end-1":"dflh9lhu","padding-bottom-1":"sj5x9vvc","padding-start-1":"scb9dxdr"}),children:h.jsx(b("BaseGlimmer.react"),{className:g.dedupe({"border-top-start-radius-1":"ue3kfks5","border-top-end-radius-1":"pw54ja7n","border-bottom-end-radius-1":"uo3d90p7","border-bottom-start-radius-1":"l82x9zwi","height-1":"ed3p1gfi"},a===0?{"width-1":"n99xedck"}:null,a===1?{"width-1":"jico2p30"}:null,a===2?{"width-1":"ptrm0iwj"}:null,a===3?{"width-1":"k4urcfbm"}:null),index:c})},c)})})}e.exports=a}),null);
__d("CometSection.react",["React"],(function(a,b,c,d,e,f){"use strict";var g=b("React");function a(a,b){var c=a.children,d=a.className,e=a.name,f=a.role;a=a.testid;return g.jsx("div",{"aria-label":e,className:d,"data-testid":void 0,ref:b,role:f,children:c})}e.exports=g.forwardRef(a)}),null);
__d("CometTooltipImpl.react",["BaseContextualLayer.react","CometHeroInteractionContextPassthrough.react","CometPlaceholder.react","CometProgressRingIndeterminate.react","CometTheme.react","React","TetraTextPairing.react","stylex","useCometDisplayTimingTrackerForInteraction","useFadeEffect"],(function(a,b,c,d,e,f){"use strict";var g,h=b("React");c=b("React");var i=c.useCallback,j=c.useRef,k={container:{backgroundColor:"ms7hmo2b",borderTopStartRadius:"ue3kfks5",borderTopEndRadius:"pw54ja7n",borderBottomEndRadius:"uo3d90p7",borderBottomStartRadius:"l82x9zwi",boxShadow:"r92hip7p",display:"a8c37x1j",marginBottom:"dicw6rsg",marginTop:"rs0gx3tq",maxWidth:"bkm5gps7",opacity:"b5wmifdl",paddingTop:"pybr56ya",paddingEnd:"d1544ag0",paddingBottom:"f10w8fjw",paddingStart:"tw6a2znq",position:"l9j0dhe7",transitionDuration:"c5ndavph",transitionProperty:"art1omkt",transitionTimingFunction:"ot9fgl3s"},containerVisible:{opacity:"pedkr2u6",transitionDuration:"ijkhr0an",transitionTimingFunction:"s13u9afw"},contextualLayer:{pointerEvents:"hzruof5a"},loadingState:{display:"j83agx80",justifyContent:"taijpn5t"}};function a(a){var c=a.headline,d=a.isVisible,e=a.tooltip,f=babelHelpers.objectWithoutPropertiesLoose(a,["headline","isVisible","tooltip"]),l=j(null);a=b("useFadeEffect")(d);d=a[0];var m=a[1],n=a[2],o=b("useCometDisplayTimingTrackerForInteraction")("ToolTip");a=i(function(a,d){return h.jsx(b("BaseContextualLayer.react"),babelHelpers["extends"]({align:"middle",autoAlign:!0},f,{layerRef:o,ref:l,xstyle:k.contextualLayer,children:h.jsx(b("CometTheme.react"),{theme:"invert",children:function(d){return h.jsx("span",{className:(g||(g=b("stylex")))(d,k.container,m&&k.containerVisible),"data-testid":void 0,ref:n,children:h.jsx(b("TetraTextPairing.react"),{body:a,bodyColor:"primary",headline:c,headlineColor:"primary",level:4})})}})}),d)},[n,o,c,f,m]);return e==null||!d?null:h.jsx(b("CometHeroInteractionContextPassthrough.react"),{clear:!0,children:h.jsx(b("CometPlaceholder.react"),{fallback:a(h.jsx("div",{className:(g||(g=b("stylex")))(k.loadingState),children:h.jsx(b("CometProgressRingIndeterminate.react"),{color:"dark",size:20})}),"loading"),children:a(e,"complete")})})}e.exports=a}),null);