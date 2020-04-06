if (self.CavalryLogger) { CavalryLogger.start_js(["zzxHZ"]); }

__d("DimensionLogging",["BanzaiNectar","getViewportDimensions"],(function(a,b,c,d,e,f){a=b("getViewportDimensions")();b("BanzaiNectar").log("browser_dimension","homeload",{x:a.width,y:a.height,sw:window.screen.width,sh:window.screen.height,aw:window.screen.availWidth,ah:window.screen.availHeight,at:window.screen.availTop,al:window.screen.availLeft})}),null);
__d("ReactComposerFocusStore",["ReactComposerFocusActionTypes","ReactComposerStoreBase"],(function(a,b,c,d,e,f){"use strict";a=function(a){babelHelpers.inheritsLoose(c,a);function c(){var c,d;c=a.call(this,function(){return{focusConfig:{},isFocused:!1}},function(a){if(!d)return;switch(a.type){case b("ReactComposerFocusActionTypes").SUBSCRIBE:d.$ReactComposerFocusStore1(a.composerID,a.onFocusAcquiredCallback,a.onFocusLostCallback);d.emitChange(a.composerID);break;case b("ReactComposerFocusActionTypes").UNSUBSCRIBE:d.$ReactComposerFocusStore2(a.composerID);d.emitChange(a.composerID);break;case b("ReactComposerFocusActionTypes").FOCUS_ACQUIRED:d.$ReactComposerFocusStore3(a.composerID);d.emitChange(a.composerID);break;case b("ReactComposerFocusActionTypes").FOCUS_LOST:d.$ReactComposerFocusStore4(a.composerID);d.emitChange(a.composerID);break}})||this;d=babelHelpers.assertThisInitialized(c);return c}var d=c.prototype;d.$ReactComposerFocusStore1=function(a,b,c){a=this.getComposerData(a);a.focusConfig={onFocusAcquiredCallback:b,onFocusLostCallback:c}};d.$ReactComposerFocusStore2=function(a){a=this.getComposerData(a);a.focusConfig={}};d.$ReactComposerFocusStore3=function(a){a=this.getComposerData(a);a.focusConfig.onFocusAcquiredCallback&&setTimeout(a.focusConfig.onFocusAcquiredCallback,0);a.isFocused=!0};d.$ReactComposerFocusStore4=function(a){a=this.getComposerData(a);a.focusConfig.onFocusLostCallback&&setTimeout(a.focusConfig.onFocusLostCallback,0);a.isFocused=!1};d.isComposerFocused=function(a){return this.getComposerData(a).isFocused};return c}(b("ReactComposerStoreBase"));e.exports=new a()}),null);
__d("ReactComposerFocusHandleScrollAway",["Event","getActiveElement","throttle"],(function(a,b,c,d,e,f){"use strict";var g=-400,h=300;a={handler:function(a,c){var d=b("Event").listen(window,"scroll",b("throttle")(function(){var e=a.getBoundingClientRect().bottom;if(e<g){c();e=b("getActiveElement")();e&&e.blur();d.remove()}},h))}};e.exports=a}),null);
__d("ReactComposerFocusInit",["csx","invariant","DOM","DOMContainer.react","Parent","React","ReactDOM"],(function(a,b,c,d,e,f,g,h){"use strict";var i=b("React");a={handler:function(a,c,d,e,f,g,j){var k=b("DOM").create("div"),l=a.parentNode;if(g){g=b("Parent").bySelector(a,"._3u13");g&&(l=g.parentNode.parentNode)}b("ReactDOM").render(i.jsx(f,{composerID:c,actorID:d,gks:e,ReactComposerFocusExtraConfigData:j,enableFocusBehavior:!0,children:i.jsx(b("DOMContainer.react"),{display:"block",children:a})}),k);l||h(0,3645);l.firstChild?l.replaceChild(k,l.firstChild):l.appendChild(k)},preload:function(){}};e.exports=a}),null);
__d("ReactComposerConstants",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({ID_PREFIX:"rc.",GK_VIDEO_COPYRIGHT:"video_copyright_confirmation_dialog",GK_MULTILINGUAL_COMPOSER:"multilingual_composer_www",GK_PAGE_BREAKING_COMPOSER:"breaking_news_page"})}),null);
__d("ReactComposerIDGenerator",["ReactComposerConstants","uniqueID"],(function(a,b,c,d,e,f){"use strict";a={getID:function(){return b("ReactComposerConstants").ID_PREFIX+b("uniqueID")()},isComposerID:function(a){return!!a&&a.startsWith(b("ReactComposerConstants").ID_PREFIX)}};e.exports=a}),null);
__d("ReactComposerFocusWrapperCore.react",["ix","cssVar","cx","fbt","Arbiter","BlueCompatBroker","Bootloader","CurrentUser","DOM","DOMTraverser","Env","Event","Focus","Image.react","Keys","Link.react","React","ReactComponentWithPureRenderMixin","ReactComposerEvents","ReactComposerFocusActions","ReactComposerMediaUploadType","ReactDOM","Run","ShimButton.react","SubscriptionsHandler","TabbableElements","TabIsolation","TrackingNodes","URI","createReactClass_DEPRECATED","fbglyph","ifRequired","isKeyActivation","prop-types","ReactComposerFocusStore"],(function(a,b,c,d,e,f,g,h,i,j){var k,l,m=b("React");b("ReactComposerFocusStore");var n=parseInt("10px",10);a=b("createReactClass_DEPRECATED")({displayName:"ReactComposerFocusWrapperCore",_composerID:"",_fixedHeight:0,_subscriptions:b("SubscriptionsHandler"),_firstFocus:!0,_onLeaveHandle:null,_root:null,_tabIsolation:null,mixins:[b("ReactComponentWithPureRenderMixin")],propTypes:{composerID:b("prop-types").string.isRequired,ariaLabel:b("prop-types").string,onDismiss:b("prop-types").func.isRequired,onFocus:b("prop-types").func.isRequired,focused:b("prop-types").bool.isRequired,gks:b("prop-types").object,onFirstFocus:b("prop-types").func,fixHeight:b("prop-types").bool,ReactComposerFocusExtraConfigData:b("prop-types").object},getDefaultProps:function(){return{focused:!1,fixHeight:!1}},UNSAFE_componentWillMount:function(){this._composerID=this.props.composerID},UNSAFE_componentWillReceiveProps:function(a){if(this.props.fixHeight&&!this.props.focused&&a.focused){a=b("ReactDOM").findDOMNode(this.refs.container);this._fixedHeight=a.offsetHeight+n}},componentDidMount:function(){this._subscriptions=new(b("SubscriptionsHandler"))(),this._subscribeComposerEvents(),this._onLeaveHandle=b("Run").onLeave(this._onLeave),this._root&&(this._tabIsolation=new(b("TabIsolation"))(this._root),this.props.focused&&this._tabIsolation.enable())},componentDidUpdate:function(a){if(!a.focused&&this.props.focused){try{var c=document.createEvent("HTMLEvents");c.initEvent&&(c.initEvent("resize",!0,!1),window.dispatchEvent(new(b("Event"))("resize")))}catch(a){}this._tabIsolation&&this._tabIsolation.enable()}else a.focused&&!this.props.focused&&(this._tabIsolation&&this._tabIsolation.disable())},componentWillUnmount:function(){this._subscriptions&&this._subscriptions.release(),this._onLeave(),this._onLeaveHandle&&this._onLeaveHandle.remove(),this._tabIsolation&&this._tabIsolation.disable(),this._tabIsolation=null},render:function(){var a=this,c=this.props.fixHeight&&this.props.focused?{height:this._fixedHeight}:null,d=this.props.focused?this._renderDismissButton():null,e=this.props.focused?this._renderBugNub():null,f=this.props.label||j._("Criar uma publica\u00e7\u00e3o");return m.jsxs("div",{role:this.props.focused?"dialog":"region","aria-label":f,className:(this.props.ReactComposerFocusExtraConfigData&&this.props.ReactComposerFocusExtraConfigData.removeDarkFocus?"_6apc":"")+" _3u13 _3e9r"+(this.props.focused?" _3u14":"")+(this.props.focused?" _1b3n":""),"data-ft":b("TrackingNodes").getTrackingInfo(b("TrackingNodes").types.FEED_COMPOSER),ref:function(b){a._root=b},style:c,onKeyDown:this._onKeyDown,children:[m.jsx("div",{className:"_3u15",onClick:this._onDismiss,role:"presentation"}),m.jsxs("div",{className:"_3u16",ref:"container",onFocus:this._onFocus,children:[this.props.children,d]}),e]})},getComposerID:function(){return this._composerID},getComposer:function(){return this.refs.container},_renderDismissButton:function(){return m.jsx(b("ShimButton.react"),{className:"_3u17"+(this.props.gks&&this.props.gks.hasHeader?" _356d":"")+(this.props.gks&&this.props.gks.isSproutsComposer?" _3_fz":"")+(this.props.gks&&this.props.gks.wideHeader?" _37nh":"")+(this.props.gks&&this.props.gks.hideFocusDismissButton?" _1rbv":""),onClick:this._onClickDismissButton,onKeyDown:this._onDismissKeyDown,role:"button","data-testid":void 0,"aria-label":j._("Ignorar"),tabIndex:"0",children:m.jsx(b("Image.react"),{src:g("125922")})})},_renderBugNub:function(){if(!b("CurrentUser").isEmployee())return null;var a=new(k||(k=b("URI")))("/ajax/bugs/report");return m.jsx("div",{className:"_t95",children:m.jsx(b("Link.react"),{href:"#",ajaxify:a,className:"_t97",rel:"dialog","aria-label":j._("Relatar um problema")})})},_subscribeComposerEvents:function(){var a=this,c,d=(c=b("Arbiter")).subscribe(b("ReactComposerEvents").OPTIMISTIC_POSTING_STARTED+this._composerID,function(){a.props.onDismiss(!0)}),e=c.subscribe(b("ReactComposerEvents").POST_SUCCEEDED+this._composerID,function(){a.props.onDismiss(!0)}),f=c.subscribe("ReactFeedComposerXBootloader/focuscomposer/"+this._composerID,function(){return a._onFocus(null)});c=c.subscribe(b("ReactComposerEvents").COMPOSER_RESET+this._composerID,function(c,d){d&&d.newComposerID&&(a.props.onDismiss(),a._composerID=d.newComposerID,a._subscriptions.release(),a._subscriptions=new(b("SubscriptionsHandler"))(),a._subscribeComposerEvents())});this._subscriptions.addSubscriptions(d,e,f,c)},_onFocus:function(a){if(this.props.focused||a&&a.nativeEvent.composerPropagationStopped)return;this._firstFocus&&(this.props.onFirstFocus&&this.props.onFirstFocus(),this._firstFocus=!1);this.props.onFocus();b("ReactComposerFocusActions").notifyFocusAcquired(this.getComposerID())},_onKeyDown:function(a){a.keyCode===b("Keys").ESC&&!a.nativeEvent.composerPropagationStopped&&this._onDismiss()},_onDismissKeyDown:function(a){b("isKeyActivation")(a)&&this._onDismiss()},_onClickDismissButton:function(){var a=this;b("ifRequired")("ReactComposerMediaUploadStore",function(c){var d=c.getUploadsCount(a._composerID,b("ReactComposerMediaUploadType").VIDEO);c=c.getUploadsCount(a._composerID,b("ReactComposerMediaUploadType").PHOTO);d>0&&c===0&&b("Bootloader").loadModules(["ReactComposerVideoSurvey"],function(b){return b.showDismissalSurvey(a._composerID,d)},"ReactComposerFocusWrapperCore.react")});(l||(l=b("Env"))).isCQuick&&b("BlueCompatBroker").sendMessage({compatAction:"dialog-hide"});this._onDismiss()},_onDismiss:function(){var a=this;this._onLeave();if(this._root&&document.body){var c=b("DOMTraverser").nextFilteredNode(document.body,this._root,function(c){return!b("DOM").contains(a._root,c)&&b("TabbableElements").isTabbable(c)});b("Focus").set(c)}},_onLeave:function(){this.props.onDismiss(),b("ReactComposerFocusActions").notifyFocusLost(this.props.composerID)}});e.exports=a}),null);
__d("ReactComposerFocusInline.react",["Arbiter","React","ReactComposerFocusHandleScrollAway","ReactComposerFocusWrapperCore.react","ReactComposerTaggerType","ReactDOM","ifRequired","prop-types"],(function(a,b,c,d,e,f){var g=b("React");a=function(a){"use strict";babelHelpers.inheritsLoose(c,a);function c(){var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.state={focused:!1},d.$3=function(){var a=b("ReactDOM").findDOMNode(d.refs.focus.getComposer());b("ReactComposerFocusHandleScrollAway").handler(a,d.$1);b("ifRequired")("ReactComposerActions",function(a){d.props.gks&&d.props.gks.lazySproutsExpand||a.expandSprouts(d.$2())});b("ifRequired")("ReactComposerGroupPostTagsTaggerActions",function(a){a.setShowState(d.$2(),!0)});b("ifRequired")("ReactComposerTaggerActions",function(a){a.handleSetTaggerShowNUX(d.$2(),b("ReactComposerTaggerType").GROUP_MEET_UP,!1),a.handleSetTaggerShowNUX(d.$2(),b("ReactComposerTaggerType").VISUAL_POLL,!1)});d.setState({focused:!0})},d.$1=function(){b("Arbiter").inform("ReactComposerFocus/collapse/"+d.$2()),window.setTimeout(function(){if(d.refs.focus){var a;(a=b("ifRequired"))("ReactComposerFocusActions",function(a){a.notifyFocusLost(d.$2())});a("ReactComposerActions",function(a){a.collapseSprouts(d.$2())});a("ReactComposerGroupPostTagsTaggerActions",function(a){a.setShowState(d.$2(),!1)});a("ReactComposerTaggerActions",function(a){b("ifRequired")("ReactComposerLoggingName",function(b){a.deselectCurrentTagger(d.$2(),b.INLINE_COMPOSER)})})}},0),d.setState({focused:!1})},c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.componentWillUnmount=function(){this.$1()};d.componentDidMount=function(){b("Arbiter").inform("ReactComposerFocus/initialized"+this.$2())};d.render=function(){return g.jsx(b("ReactComposerFocusWrapperCore.react"),{composerID:this.props.composerID,focused:this.state.focused&&this.props.enableFocusBehavior,onFocus:this.$3,onDismiss:this.$1,gks:this.props.gks,ReactComposerFocusExtraConfigData:this.props.ReactComposerFocusExtraConfigData,ref:"focus",children:this.props.children})};d.$2=function(){return this.refs.focus&&this.refs.focus.getComposerID()};return c}(g.PureComponent);a.propTypes={composerID:b("prop-types").string.isRequired,gks:b("prop-types").object};e.exports=a}),null);
__d("FbFeedHighlight",["cx","CSS","DOM","DOMScroll","JSXDOM"],(function(a,b,c,d,e,f,g){var h=1e3,i=1e3,j=null;function k(){var a;return(a=b("JSXDOM")).div({className:"_1usz"},a.div({className:"_1us-"}),a.div({className:"_1us_"}),a.div({className:"_1ut0"}),a.div({className:"_1ut1"}))}var l={highlightAndScrollTo:function(a){l.highlightAndScrollToWithTime(a,i,0)},highlightAndScrollToWithTime:function(a,b,c){l.highlightWithTime(a,b),l.scrollTo(a,c,0)},highlightSingle:function(a){l.highlightSingleWithTime(a,i)},highlightSingleWithTime:function(a,c){var d=k();b("DOM").appendContent(a,d);setTimeout(function(){j&&b("DOM").remove(j),j=d,b("CSS").addClass(a,"_1ut2")},0);setTimeout(function(){b("CSS").removeClass(a,"_1ut2"),setTimeout(function(){b("DOM").remove(d),d==j&&(j=null)},h+c)},h+c)},highlight:function(a){l.highlightWithTime(a,i)},highlightWithTime:function(a,c){var d=l.highlightPermanent(a);setTimeout(function(){b("CSS").removeClass(a,"_1ut2"),setTimeout(b("DOM").remove.bind(null,d),h+h)},h+c)},highlightPermanent:function(a){var c=k();b("DOM").appendContent(a,c);setTimeout(function(){b("CSS").addClass(a,"_1ut2")},0);return c},scrollTo:function(a,c,d){setTimeout(function(){b("DOMScroll").scrollTo(a,750,!1,0,c)},d)}};e.exports=l}),null);
__d("LikeConfirmer",["AsyncDialog","AsyncRequest"],(function(a,b,c,d,e,f){var g=!1,h=!1;a={likeContent:function(){},like:function(a,c){var d=this;this.likeContent=a;if(h)return;if(g)this.likeContent();else{a=new(b("AsyncRequest"))().setURI("/like/confirm_like.php").setRelativeTo(c);b("AsyncDialog").send(a,function(a){h=!0,a.subscribe("hide",d.onCloseLikeConfirmDialog.bind(d)),a.setCausalElement(c)})}return!1},isShowingConfirmation:function(){return h},onCloseLikeConfirmDialog:function(){h=!1},likeSkipConfirmation:function(a){g=a,this.likeContent()}};e.exports=a}),null);
__d("FbFeedKeyboardController",["csx","cx","fbt","Arbiter","CSS","DOM","DOMQuery","DOMScroll","Event","FbFeedHighlight","Focus","JSXDOM","KeyboardShortcuts","LikeConfirmer","NavigationMessage","Parent","ReactComposerEvents","ReactComposerIDGenerator","Run","Scroll","SubscriptionsHandler","UITinyViewportAction","Vector","ViewportBounds","emptyFunction","ge","getActiveElement","isAsyncScrollQuery","isElementNode","throttle","translateKey"],(function(a,b,c,d,e,f,g,h,i){var j=45,k=0;function l(){k=b("UITinyViewportAction").isTiny()?0:b("ViewportBounds").getTop()}function m(a){if(!a)return null;if(a.previousElementSibling instanceof HTMLElement)return a.previousElementSibling;a=a.previousSibling;while(a&&!(a instanceof HTMLElement))a=a.previousSibling;return a||null}function n(a){if(a.nextElementSibling instanceof HTMLElement)return a.nextElementSibling;a=a.nextSibling;while(a&&!(a instanceof HTMLElement))a=a.nextSibling;return a||null}a=function(){"use strict";function a(a){this.root=a,this.init()}var c=a.prototype;c.getStories=function(a){return b("DOMQuery").scry(a||this.root,"._5jmm")};c.isStory=function(a){return b("CSS").matchesSelector(a,"._5jmm")};c.clickLike=function(){var a=this.$3();this.clickElement(a,"._3l2t",".UFILikeLink");if(a!==this.selected)return;a=this.getParentStory(b("getActiveElement")());if(a){a=[].concat(b("DOMQuery").scry(a,"._3l2t"),b("DOMQuery").scry(a,".UFILikeLink"));for(var c=0;c<a.length;c++)b("CSS").hasClass(a[c],"accessible_elem")||b("Focus").setWithoutOutline(a[c])}};c.clickComment=function(){this.clickElement(this.$3(),"._666h","._2pgm",".comment_link")};c.clickShare=function(){this.click("._2nj7",".share_action_link")};c.clickSeeMore=function(){this.click(".see_more_link")};c.clickLeft=function(){this.click("._1mri")};c.clickRight=function(){this.click("._2fu-")};c.openAttachment=function(){this.click("._5dec","a._52c6","._4-eo",".uiVideoThumb")};c.getHeadline=function(a){return b("DOMQuery").scry(a,"h5._5pbw")[0]};c.$4=function(a){var c=b("Parent").bySelector(a,"._5pcb"),d=b("ge")("pagelet_soft_permalink_posts");return!!(c||d&&b("DOM").contains(d,a))};c.getPreviousSibling=function(a){var c=m(a);if(c&&this.getParentStory(c))return c;c=null;if(this.$4(a)){var d=this.getStories(this.root);a=d.indexOf(a);while(a>-1){if(a===0)c=b("ge")("pagelet_composer"),c=c&&b("Parent").bySelector(c,"._5jmm");else if(a>0){c=d[a-1];if(c.offsetHeight>0)break}a--}}return c instanceof HTMLElement?c:this.selected};c.getPreviousStory=function(a){a=this.getPreviousSibling(a);while(a&&!this.isStory(a))a=this.getPreviousSibling(a);return a};c.getParentStory=function(a){a=b("Parent").bySelector(a,"._5jmm");return a instanceof HTMLElement?a:null};c.getNextSibling=function(a){var c=n(a);if(c&&this.getParentStory(c))return c;c=null;if(this.$4(a)){var d=this.getStories(this.root),e=d.indexOf(a);if(e>-1){c=d[++e];while(c&&c.offsetHeight===0)c=d[++e]}}else b("ge")("pagelet_composer",a)&&(c=b("DOMQuery").scry(document,"div._5pcb ._5jmm")[0]);return c||this.selected};c.getNextStory=function(a){a=this.getNextSibling(a);while(a&&!this.isStory(a))a=this.getNextSibling(a);return a};c.setSelected=function(a,c){if(a){var d="_5qdu",e=b("DOMQuery").scry(a,"._5qdu");!e.length&&c&&b("DOM").prependContent(a,b("JSXDOM").div({className:d}))}c&&(this.selected&&this.setTabindexOnStory(this.selected,"-1"),this.selected&&b("CSS").removeClass(this.selected,"_5qdv"),this.selected=a,a&&this.setTabindexOnStory(a,"0"),a&&b("CSS").addClass(a,"_5qdv"),a&&b("FbFeedHighlight").highlightSingle(a))};c.$3=function(){var a=b("DOM").scry(this.selected,"._1qch");return a.length>0?b("DOM").scry(this.selected,"._3el7")[0]:this.selected};c.focusComposer=function(){var a=["pagelet_composer","pagelet_group_composer","pagelet_event_composer","PageComposerPagelet_","PageComposerPagelet_Admin_View","timeline_composer_container"],c=null;for(var d=0;d<a.length;d++){var e=a[d];c=b("ge")(e);if(c)break}if(c){e=b("DOM").scry(c,"textarea")[0];if(e)b("Focus").set(e),b("DOMScroll").scrollTo(c,!0);else{d=b("DOM").scry(c,"div._36bx")[0];var f=d&&d.id;b("ReactComposerIDGenerator").isComposerID(f)&&(b("Focus").set(d),this.subscriptions.addSubscriptions(b("Arbiter").subscribeOnce(b("ReactComposerEvents").INSTANCE_MOUNTED+f,function(){b("Arbiter").inform(b("ReactComposerEvents").ACTIVATE_ATTACHMENT+f)})),b("Arbiter").inform(b("ReactComposerEvents").ACTIVATE_ATTACHMENT+d.id),b("DOMScroll").scrollTo(c,!0))}}};c.getScrollOffset=function(){return 10+(this.scrollOffset||0)};c.getAnimationLength=function(a){return Math.min(Math.abs(b("Vector").getElementPosition(a).y-b("ViewportBounds").getTop()-b("Scroll").getTop(document.body)),400)};c.findTop=function(){var a=this.getStories();for(var c=0;c<a.length;c++)if(b("Vector").getElementPosition(a[c]).y>b("Vector").getScrollPosition().y)return a[c];return null};c.onLeave=function(){this.subscriptions&&this.subscriptions.release()};c.init=function(){var a=this,c,d;b("Run").onLeave(this.onLeave.bind(this));this.subscriptions=new(b("SubscriptionsHandler"))();this.subscriptions.addSubscriptions(b("Arbiter").subscribe(b("NavigationMessage").NAVIGATION_BEGIN,this.onLeave.bind(this)),(c=b("KeyboardShortcuts")).register("j",this.vert.bind(this,1),{shortcutInfo:{displayKeys:[(d=b("translateKey"))("j")],description:i._("Rolar a tela para a pr\u00f3xima publica\u00e7\u00e3o do Feed de Not\u00edcias")}}),c.register("k",this.vert.bind(this,-1),{shortcutInfo:{displayKeys:[d("k")],description:i._("Rolar a tela para a publica\u00e7\u00e3o anterior do Feed de Not\u00edcias")}}),c.register("p",this.focusComposer.bind(this),{shortcutInfo:{displayKeys:[d("p")],description:i._("Fazer uma nova publica\u00e7\u00e3o")}}),c.register("l",function(){var c=a.getParentStory(b("getActiveElement")());b("LikeConfirmer").like(function(){a.setSelected(c,!1),a.clickLike()},b("getActiveElement")())},{filter:this.hasActiveStory.bind(this),shortcutInfo:{displayKeys:[d("l")],description:i._("Curtir ou descurtir a publica\u00e7\u00e3o selecionada")}}),c.register("c",this.clickComment.bind(this),{filter:this.hasActiveStory.bind(this),shortcutInfo:{displayKeys:[d("c")],description:i._("Comentar na publica\u00e7\u00e3o selecionada")}}),c.register("s",this.clickShare.bind(this),{filter:this.hasActiveStory.bind(this),shortcutInfo:{displayKeys:[d("s")],description:i._("Compartilhar a publica\u00e7\u00e3o selecionada")}}),c.register("o",this.openAttachment.bind(this),{filter:this.hasActiveStory.bind(this),shortcutInfo:{displayKeys:[d("o")],description:i._("Abrir o anexo da publica\u00e7\u00e3o selecionada")}}),c.register("RETURN",this.clickSeeMore.bind(this),{filter:this.hasExpandableStoryInFocus.bind(this),shortcutInfo:{displayKeys:[d("enter")],description:i._("Ver mais sobre a publica\u00e7\u00e3o selecionada")}}),c.register("LEFT",this.clickLeft.bind(this),{filter:this.hasActiveStory.bind(this)}),c.register("RIGHT",this.clickRight.bind(this),{filter:this.hasActiveStory.bind(this)}),b("Event").listen(this.root,"focusin",function(c){c=c.getTarget();if(!a.isStory(c)){var d=b("DOM").isNodeOfType(c,["object","embed","iframe"]);c=a.getParentStory(c);var e=a.selected;c&&!d&&e&&(a.setSelected(c,!0),a.selected=c)}}))};c.hasActiveStory=function(a,c){a=b("getActiveElement")();return!(a&&b("CSS").shown(a))||!!this.getParentStory(a)};c.hasExpandableStoryInFocus=function(a,c){a=b("getActiveElement")();return!!(a&&a.getElementsByClassName("text_exposed_root").length&&!a.getElementsByClassName("text_exposed_root text_exposed").length)};c.clickElement=function(a){if(!a)return;var c;for(var d=0,e=arguments.length<=1?0:arguments.length-1;d<e;d++){c=b("DOM").scry(a,d+1<1||arguments.length<=d+1?void 0:arguments[d+1])[0];if(c&&b("CSS").shown(c)){c.click();return}}};c.click=function(){for(var a=arguments.length,b=new Array(a),c=0;c<a;c++)b[c]=arguments[c];this.clickElement.apply(this,[this.selected].concat(b))};c.$5=function(){var a=this;if(!this.$1){this.scrollOffset=0;var c=b("ge")("pagelet_feed_switcher_root");c&&(this.scrollOffset+=c.getBoundingClientRect().height);this.subscriptions.addSubscriptions(b("Event").listen(document,"scroll",function(){a.selected&&!a.scrolling&&a.setSelected(null,!1)}));this.$1=!0}};c.$6=function(){this.$2||(l(),this.subscriptions.addSubscriptions(b("Event").listen(window,"resize",b("throttle")(l))),this.$2=!0)};c.vert=function(a){var c=this;this.$5();var d;if(this.selected){this.selected.id=="pagelet_composer"?d=a>0?this.getStories()[0]:null:a===0?d=this.selected:d=a>0?this.getNextStory(this.selected):this.getPreviousStory(this.selected)||b("ge")("pagelet_composer");if(!d)return;else if(!b("isElementNode")(d)||b("CSS").hasClass(d,"hidden_elem")){this.selected&&b("CSS").removeClass(this.selected,"selectedStorySimple");this.selected=d;this.vert(a);return}}(!d||b("Parent").byClass(d,"hidden_elem")||!b("DOM").contains(document,d))&&(d=this.findTop(),d&&a<0&&(d=this.getPreviousStory(d)));if(!d)return;this.anim&&this.anim();var e=Date.now()-(this.lastScroll||0)>30,f=b("emptyFunction");a!==0&&(f=this.setFocused.bind(this,d));b("isAsyncScrollQuery")()&&(e=!1,f(),f=b("emptyFunction"));this.scrolling=!0;this.scrollingTimer&&window.clearTimeout(this.scrollingTimer);this.$6();var g=b("Vector").getViewportDimensions().y-k-this.getScrollOffset();if(this.selected){var h=b("DOM").scry(this.selected,"._2pum")[0],i=b("DOM").scry(d,"._2pum")[0];h&&a>0&&(this.isExplore=!0);i&&(this.isExplore=!1)}this.root.id==="pagelet_explore_feed"&&(this.isExplore=!0);this.isExplore&&(g-=j);this.anim=b("DOMScroll").scrollTo(d,e?this.getAnimationLength(d):0,!1,g,0,function(){c.scrollingTimer=window.setTimeout(function(){c.scrolling=!1},300);var a=b("Vector").getScrollPosition();f();a.distanceTo(b("Vector").getScrollPosition())!==0&&b("DOMScroll").scrollTo(a,0)});this.setSelected(d,!0);this.lastScroll=Date.now()};c.setTabindexOnStory=function(a,b){a&&this.isStory(a)&&(a.tabIndex=parseInt(b,10))};c.setFocused=function(a){a&&this.isStory(a)&&b("Focus").setWithoutOutline(a)};a.init=function(b){return new a(b)};return a}();e.exports=a}),null);
__d("GHLSurvey",["Banzai","GHLInternalMonitorStore_DO_NOT_USE","ghlInternalBumpODSKey","ghlMonitor","ghlTestUBT"],(function(a,b,c,d,e,f){"use strict";var g={survey:function(){return b("ghlTestUBT")(function(a){var c,d=3;b("Banzai").post("search_check",(c={},c[d]=a,c))})},monitorID:function(a,b){a=document.getElementById(a);if(a==null)return;g.monitorEl(a,b)},monitorEl:function(a,c){if(b("GHLInternalMonitorStore_DO_NOT_USE").has(a)){b("ghlInternalBumpODSKey")("GHLSurvey","duplicate-b");return}if(c.t===""){b("ghlInternalBumpODSKey")("GHLSurvey","missing-t");return}b("ghlMonitor")(a,c.s,c.t,c.o)}};e.exports=g}),null);