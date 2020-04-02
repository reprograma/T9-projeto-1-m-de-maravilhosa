if (self.CavalryLogger) { CavalryLogger.start_js(["d909a"]); }

__d("HostnameRewriter",["URI","isFacebookURI","lowerFacebookDomain"],(function(a,b,c,d,e,f){var g,h=function(a){return String(a).replace(/([.*+?^=!:${}()|[\]\/\\])/g,"\\$1")},i=null,j=null,k=new RegExp("^(.*(?:channel-proxy|edge-chat).*)\\.(facebook\\.com)$","i"),l=new RegExp("facebook\\.com$"),m=new RegExp("^www\\.(|.*\\.)facebook\\.com$"),n=null,o="facebook.com",p=!1,q=!1,r=new RegExp("facebookcorewwwi\\.onion$"),s=new RegExp("facebookcorewwwi\\.testonion$"),t=new RegExp("fbcdn\\.net$"),u="fbcdn23dssr3jqnq.onion",v="fbcdn23dssr3jqnq.testonion",w=new RegExp("^www\\."),x=new RegExp("(^|\\.)(facebook\\.com|workplace\\.com)$","i");function y(a){i=null;a?a="(^|\\.)":a="^";n=a+h(o)+"$";j=null}function z(){if(n==null)return null;if(i)return i;i=new RegExp(n,"i");return i}function A(){if(j)return j;j=new RegExp("(^|\\.)("+h(o)+"|facebook\\.com)$","i");return j}function B(){return function(a){a=new(g||(g=b("URI")))(a);var c=k.exec(a.getDomain());if(!c||c.length<3)return a;a.setDomain("edge-chat."+c[2]);return a}}function C(){return function(a){a=new(g||(g=b("URI")))(a);A().test(a.getDomain())&&a.setProtocol("https");return a}}function D(){return function(a){a=new(g||(g=b("URI")))(a);var c=a.getDomain();A().test(c)&&o!=null?a.setDomain(c.replace(l,o)):p&&c!==null?a.setDomain(c.replace(t,u)):q&&c!==null&&a.setDomain(c.replace(t,v));return a}}function E(){return function(a){a=new(g||(g=b("URI")))(a);var c=a.getDomain();m.test(c)&&a.setDomain(c.replace(w,"web."));return a}}a={registerFacebookFilters:function(a,c){o=a,p=o!=null&&r.test(o),q=o!=null&&s.test(o),y(c),b("isFacebookURI").setRegex(z()),(g||(g=b("URI"))).registerFilter(B()),g.registerFilter(C()),g.registerFilter(D()),b("lowerFacebookDomain").setDomain(o)},registerInternetDotOrgFilters:function(a,c){o=a,(g||(g=b("URI"))).registerFilter(E())},treatWorkplaceAsFacebookURI:function(){b("isFacebookURI").setRegex(x)}};e.exports=a}),null);
__d("RoyalBluebar",["cx","Arbiter","BigPipe","CSS","Event","QuicklingFetchStreamConfig","Run","SubscriptionsHandler","clearTimeout","ge","setTimeoutAcrossTransitions"],(function(a,b,c,d,e,f,g){var h=null,i=!1,j=b("QuicklingFetchStreamConfig"),k=j.experimentName,l=k!=="off"&&k!=="none";function m(){h&&h()}var n={_subscriptionHandler:null,_getSubscriptionHandler:function(){var a=this;this._subscriptionHandler||(this._subscriptionHandler=new(b("SubscriptionsHandler"))(),b("Run").onUnload(function(){a._subscriptionHandler.release(),a._subscriptionHandler=null}));return this._subscriptionHandler},fixOnScroll:function(a){this._getSubscriptionHandler().addSubscriptions(b("Arbiter").subscribe("bluebarFixedBehaviorController/isfixed",function(c,d){c="_50ti";var e="_33rf";a.firstChild instanceof Element&&b("CSS").conditionClass(a.firstChild,c,d);a.firstChild instanceof Element&&b("CSS").conditionClass(a.firstChild,e,!d);b("Arbiter").inform("reflow")}))},informOnClick:function(a){this._getSubscriptionHandler().addSubscriptions(b("Event").listen(a,"click",function(a){b("Arbiter").inform("BlueBar/homeClick",a)===!1&&a.preventDefault()}))},stopAnimatingAfterDD:function(){var a=b("Arbiter").subscribeOnce(b("BigPipe").Events.init,function(a,c){c.arbiter.subscribeOnce(b("BigPipe").Events.displayed,m)}),c=b("Run").onAfterLoad(m);h=function(){h=null,b("Arbiter").unsubscribe(a),c.remove(),n.stopTransitionAnimation()}},startTransitionAnimation:function(){if(l){h&&h();var a=b("ge")(j.bluebarTransitionElement);a&&b("CSS").addClass(a,j.bluebarTransitionClass)}},stopTransitionAnimation:function(){if(l){var a=j,c=b("ge")(a.bluebarTransitionElement);if(!c)return;if(k==="Indeterminate"){if(!i){i=!0;b("CSS").addClass(c,"finishing");var d;h=function(){h=null,i=!1,b("clearTimeout")(d),b("CSS").removeClass(c,"finishing"),b("CSS").removeClass(c,a.bluebarTransitionClass)};d=b("setTimeoutAcrossTransitions")(h,200)}}else b("CSS").removeClass(c,a.bluebarTransitionClass)}}};e.exports=n}),null);
__d("AjaxError",[],(function(a,b,c,d,e,f){a={ERROR:"ar:error",TIMEOUT:"ar:timeout",PROXY_ERROR:"ar:proxy error",TRANSPORT_ERROR:"ar:transport error",SERVER_ERROR:"ar:http error",PARSE_ERROR:"ar:parse error",SERVICE_UNAVAILABLE:"ar:noservice"};e.exports=a}),null);
__d("AjaxRequest",["AjaxError","ErrorUtils","Keys","PHPQuerySerializer","TimeSlice","URI","UserAgent_DEPRECATED","ZeroRewrites","clearTimeout","killswitch","setTimeoutAcrossTransitions"],(function(a,b,c,d,e,f){var g,h,i,j=window.XMLHttpRequest&&"withCredentials"in new XMLHttpRequest(),k=[];function a(){var a=k;k=[];a.forEach(function(a){return a.abort()})}function l(a){a.onJSON=a.onError=a.onSuccess=null,b("clearTimeout")(a._timer),a.xhr&&a.xhr.readyState<4&&(a.xhr.abort(),a.xhr=null),k=k.filter(function(b){return b&&b!=a&&b.xhr&&b.xhr.readyState<4})}c=function(){"use strict";function a(a,c,d){this.timeout=6e4,this.streamMode=!0,this.prelude=/^for \(;;\);/,this.status=null,this.$1=-1,this.$2=null,this.$3=0,this.$4=null,this.json=null,this.errorType=null,this.errorText=null,this.onJSON=null,this.onSuccess=null,this.onError=null,c instanceof(g||(g=b("URI")))||(c=new(g||(g=b("URI")))(c)),this.xhr=b("ZeroRewrites").getTransportBuilderForURI(c)(),d&&a=="GET"&&c.setQueryData(d),this.method=a,this.uri=c,this.xhr.open(a,b("killswitch")("ASYNC_REQUEST_STRINGIFY_URI_BEFORE_PASSING_TO_OPEN_METHOD")?c:c.toString())}a.supportsCORS=function(){return j};var c=a.prototype;c.send=function(a){var c=this,d=b("TimeSlice").getReusableContinuation("AjaxRequest xhr.onreadystatechange");this.xhr.onreadystatechange=function(){return c.$5(d)};var e=this.timeout;e&&(this.$2=b("setTimeoutAcrossTransitions")(function(){c.errorType=b("AjaxError").TIMEOUT,c.errorText="timeout",c.$4=Date.now()-c.$3,c.onError&&c.onError(c),l(c)},e));k.push(this);this.method=="POST"&&this.xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");this.$3=Date.now();this.xhr.send(a?(h||(h=b("PHPQuerySerializer"))).serialize(a):"")};c.abort=function(){l(this)};c.toString=function(){var a="[AjaxRequest readyState="+this.xhr.readyState;this.errorType&&(a+=" errorType="+this.errorType,this.errorText&&(a+=" ("+this.errorText+")"));return a+"]"};c.toJSON=function(){var a={};this.json&&(a.json=this.json);this.status&&(a.status=this.status);this.errorType&&(a.errorType=this.errorType,a.uri=this.uri);this.errorText&&(a.errorText=this.errorText);this.$4&&(a.time=this.$4);return a};c.onJSONSafe=function(){this.onJSON&&this.onJSON(this)};c.onSuccessSafe=function(){this.onSuccess&&this.onSuccess(this)};c.onErrorSafe=function(){this.onError&&this.onError(this)};c.$6=function(){var a;try{this.status=this.xhr.status,a=this.xhr.statusText}catch(a){this.xhr.readyState>=4&&(this.errorType=b("AjaxError").TRANSPORT_ERROR,this.errorText=a.message);return}var c=this.status;if(c==null){this.errorType=b("AjaxError").ERROR;this.errorText="null status code";return}if(c===0&&!/^(file|ftp)/.test(this.uri.toString()))this.errorType=b("AjaxError").TRANSPORT_ERROR;else if(c>=100&&c<200)this.errorType=b("AjaxError").PROXY_ERROR;else if(c>=200&&c<300)return;else if(c>=300&&c<400)this.errorType=b("AjaxError").PROXY_ERROR;else if(c>=400&&c<500)this.errorType=b("AjaxError").SERVER_ERROR;else if(c===503)this.errorType=b("AjaxError").SERVICE_UNAVAILABLE;else if(c>500&&c<600)this.errorType=b("AjaxError").PROXY_ERROR;else if(c==1223)return;else c>=12001&&c<=12156?this.errorType=b("AjaxError").TRANSPORT_ERROR:(a="unrecognized status code: "+c,this.errorType=b("AjaxError").ERROR);this.errorText||(this.errorText=a)};c.$7=function(){var a,c=this.xhr.readyState;try{a=this.xhr.responseText||""}catch(a){c>=4&&(this.errorType=b("AjaxError").ERROR,this.errorText="responseText not available - "+a.message);return}while(this.xhr){var d=this.$1+1,e=this.streamMode?a.indexOf("\n",d):a.length;e<0&&c==4&&(e=a.length);if(e<=this.$1)break;var f=a;this.streamMode&&(f=a.substr(d,e-d).replace(/^\s*|\s*$/g,""));if(d===0&&this.prelude){var g=this.prelude;g.test(f)&&(f=f.replace(g,""))}this.$1=e;if(f){try{this.json=JSON.parse(f)}catch(c){g=a.match(/(<body[\S\s]+?<\/body>)/i);e=g!=null&&g.length>0?g[0]:null;g={message:c.message,"char":d,excerpt:(d===0&&e||f).substr(512)};this.errorType=b("AjaxError").PARSE_ERROR;this.errorText="parse error - "+JSON.stringify(g);return}(i||(i=b("ErrorUtils"))).applyWithGuard(this.onJSONSafe,this)}}};c.$5=function(a){var b=this,c=this.xhr&&this.xhr.readyState||0;this.status==null&&c>=2&&this.$6();!this.errorType&&this.status!=null&&((c===3&&this.streamMode||c===4)&&a(function(){return b.$7()}));(this.errorType||c===4)&&(this.$4=Date.now()-this.$3,a.last(function(){b.errorType?b.onErrorSafe():b.onSuccessSafe(),l(b)}))};return a}();window.addEventListener&&b("UserAgent_DEPRECATED").firefox()&&window.addEventListener("keydown",function(a){a.keyCode===b("Keys").ESC&&a.prevent()},!1);window.attachEvent&&window.attachEvent("onunload",a);e.exports=c}),null);
__d("FacepileRoundedProfile.react",["cx","fbt","CurrentUser","HovercardLink","Image.react","Link.react","React","Tooltip.react","URI","joinClasses"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j=b("React");a=function(a){babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a,c=this.props,d=c.borderColor,e=c.borderWidth,f=c.getCustomActivationLink,g=c.getCustomHovercardLink,i=c.hoverBehavior,k=c.imageSize,l=c.isClickable;c=c.profile;var m=this.props.style,n=c.glyph_size,o=c.image_src,p=c.entity_id;m=babelHelpers["extends"]({},m,{borderColor:d,borderWidth:e,height:k+"px",width:k+"px"});d={};n&&n<k&&(d.margin=(k-n)/2+"px");e="_4mnq";c.className&&(e=b("joinClasses")(e,c.className));a=b("CurrentUser").isWorkUser()&&((a=c.work_foreign_entity_info)==null?void 0:a.type)==="FOREIGN"?j.jsx("div",{className:"_7cf0"}):null;e=j.jsxs(j.Fragment,{children:[j.jsx("div",{className:e,style:m,children:j.jsx(b("Image.react"),{className:"_1h_6",height:n||k,src:o,style:d,width:n||k})}),a]});i==="name"&&c.name&&(e=j.jsx(b("Tooltip.react"),{className:"_4mns",tooltip:c.name,children:e}));m=i==="hovercard";if(p&&(l||m)){o={};m&&(o["data-hovercard"]=g(p));l&&(o.href=f(p));e=j.jsx(b("Link.react"),babelHelpers["extends"]({"aria-label":h._("Perfil de {name}",[h._param("name",c.name)])},o,{children:e}))}return e};return c}(j.Component);a.defaultProps={getCustomActivationLink:function(a){return new(i||(i=b("URI")))("/"+a)},getCustomHovercardLink:function(a){return b("HovercardLink").constructEndpoint({id:a})},hoverBehavior:"none",imageSize:32,isClickable:!1};e.exports=a}),null);
__d("FacepileRoundedCount.react",["cx","fbt","ix","FacepileRoundedProfile.react","Image.react","Link.react","React","Tooltip.react","prop-types"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j=b("React"),k=.3438;a=function(a){babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a=this.props,c=a.backgroundColor,d=a.borderColor,e=a.borderWidth,f=a.color,g=a.count,l=a.fontSize,m=a.profiles,n=a.size,o=a.style,p=a.use,q=a.shouldHideCountToolTip,r=a.image;a=a.href;var s=m.length;g=g||s;e={backgroundColor:c,borderColor:d,borderWidth:e,color:f,borderRadius:n,fontSize:(c=l)!=null?c:n*k+"px",height:n,minWidth:n};f=j.jsx("span",{className:"_4mnq _34n6",style:e,children:j.jsx("span",{className:"_40vg",children:"+"+g})});if(p==="image"){l=null;switch(n){case 16:l=i("409177");break;case 20:l=i("409178");break;case 28:l=i("409179");break;case 32:l=i("409180");break;case 48:l=i("409181");break}l&&(f=j.jsx("div",{className:"_4mnq",style:e,children:j.jsx(b("Image.react"),{className:"_1h_6",src:r?r:l})}))}else if(p==="face"&&s>0){c={left:"50%",marginLeft:"-"+n/2+"px"};f=j.jsxs("div",{className:"_ric",style:{borderColor:d},children:[j.jsx(b("FacepileRoundedProfile.react"),{borderColor:d,imageSize:n,profile:m[0],style:c}),f]})}e=g-s;r=m.map(function(a){return a.name}).filter(Boolean);l=s>0?r.join("\n")+"\n":"";if(e>0){p=h._({"*":"e outras {count} pessoas","_1":"e outros {count}."},[h._param("count",e),h._plural(e)]);l+=p.toString()}d=j.jsx("div",{style:{whiteSpace:"pre-wrap"},children:l});a!=null&&(f=j.jsxs(b("Link.react"),{href:a,children:[j.jsx("span",{className:"accessible_elem",children:l}),f]}));return j.jsx(b("Tooltip.react"),{className:"_4mns",style:o,tooltip:q?null:d,children:f})};return c}(j.Component);a.defaultProps={size:32,use:"count",image:null};a.propTypes={backgroundColor:(c=b("prop-types")).string,borderColor:c.string,borderWidth:c.number,color:c.string,className:c.string,count:c.number,fontSize:c.number,use:c.oneOf(["count","face","image"]),image:c.any,profiles:c.arrayOf(c.shape({className:c.string,entity_id:c.string,glyph_size:c.number,image_src:c.any.isRequired,name:c.string})).isRequired,size:c.number,style:c.object,shouldHideCountToolTip:c.bool};e.exports=a}),null);
__d("FacepileRounded.react",["cx","FacepileRoundedCount.react","FacepileRoundedProfile.react","React","joinClasses"],(function(a,b,c,d,e,f,g){"use strict";var h=b("React"),i=.3125;a=function(a){babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a=this.props,c=a.borderColor,d=a.borderWidth,e=a.direction,f=a.getCustomActivationLink,g=a.getCustomHovercardLink,j=a.hoverBehavior,k=a.imageSize,l=a.isClickable,m=a.message,n=a.numProfilesToDisplay,o=a.overflowBackgroundColor,p=a.overflowFontSize,q=a.overflowTextColor,r=a.profiles,s=a.remainingProfilesCount,t=a.remainingProfilesCountStyle,u=a.remainingProfilesCountImage,v=a.remainingProfilesCountHref,w=a.spacing;a=a.shouldHideCountToolTip;var x=e==="descending";e=r.length;var y=null,z=this.props.className;z=b("joinClasses")("_4mnv"+(x?" _4wh8":""),z);m&&(y=h.jsx("div",{className:"_4mnt",children:m}));m=r;var A=null;n&&n<e&&(m=r.slice(0,n),A=r.slice(n,e));var B={getCustomActivationLink:f,getCustomHovercardLink:g,hoverBehavior:j,imageSize:k,isClickable:l},C=(w!=null?w:-(k*i))+"px";n=m.map(function(a,e){var f={zIndex:x?r.length-e:e};e>0&&(f.marginLeft=C);return h.jsx(b("FacepileRoundedProfile.react"),babelHelpers["extends"]({borderColor:c,profile:a,style:f,borderWidth:d},B),e)});f=null;A&&(f=h.jsx(b("FacepileRoundedCount.react"),{backgroundColor:o,borderColor:c,color:q,fontSize:p,count:s,profiles:A,size:k,shouldHideCountToolTip:a,style:{marginLeft:C,zIndex:x?0:e},use:t,image:u,href:v,borderWidth:d}));return h.jsxs("div",{className:z,children:[h.jsxs("div",{className:"_4mnw",children:[n,f]}),y]})};return c}(h.Component);a.defaultProps={direction:"ascending",hoverBehavior:"none",imageSize:32,isClickable:!1,isOverlapDisabled:!1,remainingProfilesCountStyle:"count"};e.exports=a}),null);
__d("NotificationBeeperConst",["keyMirror"],(function(a,b,c,d,e,f){a={IDLE_DELAY:1e4,ACTIVE_DELAY_LONG:4e3,FADE_OUT_LENGTH:1500,BeepStates:b("keyMirror")({PENDING:!0,RENDERED:!0,READY_TO_HIDE:!0,FADING_OUT:!0})};e.exports=a}),null);
__d("MediaStream",[],(function(a,b,c,d,e,f){e.exports=window.MediaStream||window.webkitMediaStream}),null);
__d("changePageTitle",["DocumentTitle","UserAgent_DEPRECATED"],(function(a,b,c,d,e,f){"use strict";var g,h="";function a(a){a===void 0&&(a="Facebook"),b("DocumentTitle").set(a),b("UserAgent_DEPRECATED").ie()&&(h=a,g||(g=window.setInterval(function(){var a=h,c=b("DocumentTitle").get();c!==a&&b("DocumentTitle").set(a)},5e3,!1)))}e.exports=a}),null);
__d("QuickPipeRequest",["AjaxPipeRequest","Arbiter","ArtilleryOnUntilOffLogging","Quickling","QuicklingConfig","QuicklingFetchStreamConfig","QuicklingRefreshOverheadUtil","RoyalBluebar","URI","changePageTitle","goOrReplace","ifRequired"],(function(a,b,c,d,e,f){var g,h=b("QuicklingConfig").version;a=function(a){"use strict";babelHelpers.inheritsLoose(c,a);function c(c,d){var e={version:h};c=a.call(this,c,d,{quickling:e})||this;c._processFirstResponse=function(a){var c=a.getPayload();b("changePageTitle")(c.title);if(!c.isCometResponse){this._resetScrollOnFirstResponse();a=a.getRequest();a&&document.body&&(document.body.className=c.body_class||"")}b("Arbiter").inform("quickling/response");b("ArtilleryOnUntilOffLogging").onNewPageLoad()};c._isQuickling=!0;return c}var d=c.prototype;d._preBootloadFirstResponse=function(a){return!0};d._fireDomContentCallback=function(){this._request&&this._request.cavalry&&this._request.cavalry.setTimeStamp("t_domcontent"),b("ifRequired")("PageTransitions",function(a){a.transitionComplete()}),a.prototype._fireDomContentCallback.call(this)};d._fireOnloadCallback=function(){var b=this._request;b!=null&&b.cavalry&&(b.cavalry.setTimeStamp("t_hooks"),b.cavalry.setTimeStamp("t_layout"),b.cavalry.setTimeStamp("t_onload"));a.prototype._fireOnloadCallback.call(this)};d.isPageActive=function(a){return b("Quickling").isPageActive(a)};d._versionCheck=function(a){if(a.version==h){b("QuicklingRefreshOverheadUtil").onQuicklingVersionMatch();return!0}var c=["quickling","ajaxpipe","ajaxpipe_token","ajaxpipe_fetch_stream"];b("QuicklingRefreshOverheadUtil").onQuicklingRefreshStart();b("goOrReplace")(window.location,new(g||(g=b("URI")))(a.uri).removeQueryData(c),!0);b("RoyalBluebar").stopTransitionAnimation();return!1};d._resetScrollOnFirstResponse=function(){window.scrollTo(0,0)};d.getSanitizedParameters=function(){return["quickling"]};d._getAsyncRequestType=function(){return b("QuicklingFetchStreamConfig").experimentName!=="off"?"useFetchWithIframeFallback":"useIframeTransport"};return c}(b("AjaxPipeRequest"));e.exports=a}),null);
__d("QuicklingAugmenter",["URI"],(function(a,b,c,d,e,f){var g,h=[];a={addHandler:function(a){h.push(a)},augmentURI:function(a){var c=[],d=new(g||(g=b("URI")))(a);h.forEach(function(a){var b=a(d);if(!b)return d;c.push(a);d=d.addQueryData(b)});h=c;return d}};e.exports=a}),null);
__d("Quickling",["AjaxPipeRequest","Arbiter","BigPipe","ContextualComponent","PageEvents","PageHooks","PageTransitionsRegistrar","PHPQuerySerializer","QuicklingAugmenter","QuicklingConfig","QuicklingRefreshOverheadUtil","QuickPipeRequest","RoyalBluebar","Run","TimerStorage","URI","cancelAnimationFrame","cancelIdleCallback","clearImmediate","clearInterval","clearTimeout","ge","isEmpty"],(function(a,b,c,d,e,f){var g,h,i,j=b("QuicklingConfig").sessionLength,k=new RegExp(b("QuicklingConfig").inactivePageRegex),l=0,m=!1,n={init:function(){if(m)return;m=!0;b("Run").onAfterLoad(function(){b("PageTransitionsRegistrar").registerHandler(p,1)})},isActive:function(){return m},isPageActive:function(a){if(a==="#")return!1;a=new(g||(g=b("URI")))(a);if(a.getDomain()&&a.getDomain()!=new(g||(g=b("URI")))(window.location.href).getDomain())return!1;if(a.getPath()=="/l.php"){var c=a.getQueryData().u;if(c){c=new(g||(g=b("URI")))(unescape(c)).getDomain();if(c&&c!=new(g||(g=b("URI")))(window.location.href).getDomain())return!1}}c=a.getPath();a=a.getQueryData();(h||(h=b("isEmpty")))(a)||(c+="?"+(i||(i=b("PHPQuerySerializer"))).serialize(a));return Object.keys(a).reduce(function(a,c){return a||b("QuicklingConfig").badRequestKeys.includes(c)},!1)?!1:!k.test(c)},getLoadCount:function(){return l},transitionHandler_DO_NOT_USE:p};function o(){l++;return l>=j}function p(a){b("AjaxPipeRequest").setCurrentRequest(null);if(o())return!1;a=b("QuicklingAugmenter").augmentURI(a);if(!n.isPageActive(a))return!1;b("TimerStorage").clearAll(b("TimerStorage").ANIMATION_FRAME,b("cancelAnimationFrame"));b("TimerStorage").clearAll(b("TimerStorage").IDLE_CALLBACK,b("cancelIdleCallback"));b("TimerStorage").clearAll(b("TimerStorage").IMMEDIATE,b("clearImmediate"));b("TimerStorage").clearAll(b("TimerStorage").INTERVAL,b("clearInterval"));b("TimerStorage").clearAll(b("TimerStorage").TIMEOUT,b("clearTimeout"));window.ExitTime=Date.now();b("QuicklingRefreshOverheadUtil").onQuicklingStart();b("Run").__removeHook(b("PageHooks").ONLOAD_HOOK);b("Run").__removeHook(b("PageHooks").DOMREADY_HOOK);b("Arbiter").inform(b("PageEvents").AJAXPIPE_ONUNLOAD,{transition_type:"quickling"});var c="content";q(c);b("RoyalBluebar").startTransitionAnimation();c=new(b("QuickPipeRequest"))(c,a).setResetHandler(b("RoyalBluebar").stopTransitionAnimation).setFinallyHandler(b("RoyalBluebar").stopTransitionAnimation).send();c.getArbiter().subscribeOnce(b("BigPipe").Events.displayed,b("RoyalBluebar").stopTransitionAnimation);a=window.__bodyWrapper;a.getCodeUsage&&a.clearCodeUsage();return b("PageTransitionsRegistrar").DELAY_HISTORY}function q(a){var c=function(){var c=b("ge")(a);c=b("ContextualComponent").forNode(c);c&&c.cleanup();b("PageHooks").runHooks("onleavehooks")};c()}e.exports=n;a.Quickling=n}),null);
__d("FavIcon",["DOM"],(function(a,b,c,d,e,f){var g,h,i;function j(){var a=b("DOM").scry(document.head,"link");a&&a.forEach(function(a){(a.rel.indexOf("icon")!=-1||a.rel.indexOf("shortcut icon")!=-1)&&b("DOM").remove(a)})}a={isToggledResource:function(){return i&&g instanceof HTMLLinkElement&&g.href===i?!0:!1},set:function(a){g&&b("DOM").remove(g),j(),g=b("DOM").create("link",{type:"image/x-icon",rel:"icon",href:a}),b("DOM").appendContent(b("DOM").find(document,"head"),g)},setToggleResources:function(a,b){g=document.querySelector('link[rel*=icon][href*=".ico"]'),g instanceof HTMLLinkElement&&(h=b!=null?b:g.href,i=a)},toggle:function(){if(!g||!i)return;if(g.href===h){this.set(i);return}this.set(h)},toggleSet:function(a){if(!g||!i||!h)return;a=a?i:h;g.href!==a&&this.set(a)}};e.exports=a}),null);
__d("NotificationSound",["Sound"],(function(a,b,c,d,e,f){var g=5e3;b("Sound").init(["audio/mpeg"]);function a(a){this._soundPath=a,this._lastPlayed=0}Object.assign(a.prototype,{play:function(a){if(!this._soundPath)return;var c=Date.now();if(c-this._lastPlayed<g)return;this._lastPlayed=c;b("Sound").playOnlyIfImmediate(this._soundPath,a,!1)}});e.exports=a}),null);
__d("isDevelopersURI",["isFacebookURI"],(function(a,b,c,d,e,f){"use strict";function a(a){return b("isFacebookURI")(a)&&a.getSubdomain()==="developers"}e.exports=a}),null);
__d("FBPaymentsDispatcher",["ExplicitRegistrationReactDispatcher"],(function(a,b,c,d,e,f){"use strict";a=function(a){babelHelpers.inheritsLoose(b,a);function b(b){b=a.call(this,b)||this;babelHelpers.assertThisInitialized(b).dispatch=b.dispatch.bind(babelHelpers.assertThisInitialized(b));return b}return b}(b("ExplicitRegistrationReactDispatcher"));e.exports=new a({strict:!1})}),null);
__d("FBPaymentsDialogActions",["FBPaymentsDispatcher","keyMirror"],(function(a,b,c,d,e,f){"use strict";var g={types:b("keyMirror")({SHOW_DIALOG:null,HIDE_DIALOG:null}),showDialog:function(a,c){b("FBPaymentsDispatcher").dispatch({type:g.types.SHOW_DIALOG,data:{dialogClass:a,dialogProps:c}})},hideDialog:function(){b("FBPaymentsDispatcher").dispatch({type:g.types.HIDE_DIALOG,data:{}})}};e.exports=g}),null);