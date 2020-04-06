if (self.CavalryLogger) { CavalryLogger.start_js(["O4wyQ"]); }

__d("UFI2BanActorMutation.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{kind:"LocalArgument",name:"input",type:"FeedbackPageBanData!",defaultValue:null}],b=[{kind:"LinkedField",alias:null,name:"feedback_page_ban",storageKey:null,args:[{kind:"Variable",name:"data",variableName:"input"}],concreteType:"FeedbackPageBanResponsePayload",plural:!1,selections:[{kind:"ScalarField",alias:null,name:"__typename",args:null,storageKey:null}]}];return{kind:"Request",fragment:{kind:"Fragment",name:"UFI2BanActorMutation",type:"Mutation",metadata:null,argumentDefinitions:a,selections:b},operation:{kind:"Operation",name:"UFI2BanActorMutation",argumentDefinitions:a,selections:b},params:{operationKind:"mutation",name:"UFI2BanActorMutation",id:"2353097554735989",text:null,metadata:{}}}}();e.exports=a}),null);
__d("UFI2FeedbackReactMutation.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{kind:"LocalArgument",name:"input",type:"FeedbackReactData!",defaultValue:null},{kind:"LocalArgument",name:"useDefaultActor",type:"Boolean",defaultValue:null}],b=[{kind:"Variable",name:"data",variableName:"input"}],c={kind:"ScalarField",alias:null,name:"detection_analytics_enabled",args:null,storageKey:null},d=[{kind:"Variable",name:"use_default_actor",variableName:"useDefaultActor"}],e={kind:"ScalarField",alias:null,name:"key",args:null,storageKey:null},f={kind:"ScalarField",alias:null,name:"id",args:null,storageKey:null},g={kind:"ScalarField",alias:null,name:"__typename",args:null,storageKey:null},h={kind:"ScalarField",alias:null,name:"name",args:null,storageKey:null},i={kind:"ScalarField",alias:"i18n_reaction_count",name:"reaction_count_reduced",args:null,storageKey:null},j={kind:"ScalarField",alias:null,name:"count",args:null,storageKey:null};return{kind:"Request",fragment:{kind:"Fragment",name:"UFI2FeedbackReactMutation",type:"Mutation",metadata:null,argumentDefinitions:a,selections:[{kind:"LinkedField",alias:null,name:"feedback_react",storageKey:null,args:b,concreteType:"FeedbackReactResponsePayload",plural:!1,selections:[{kind:"LinkedField",alias:null,name:"feedback",storageKey:null,args:null,concreteType:"Feedback",plural:!1,selections:[{kind:"FragmentSpread",name:"UFI2ReactionActionLink_feedback",args:null},{kind:"FragmentSpread",name:"UFI2ReactionsCount_feedback",args:null},{kind:"FragmentSpread",name:"UFI2CommentTopReactions_feedback",args:null},{kind:"FragmentSpread",name:"UFI2CommentTopReactionsWrapper_feedback",args:null},{kind:"FragmentSpread",name:"UFI2TopReactions_feedback",args:null},{kind:"FragmentSpread",name:"UFI2FeedbackReactMutation_feedback",args:null}]},c]}]},operation:{kind:"Operation",name:"UFI2FeedbackReactMutation",argumentDefinitions:a,selections:[{kind:"LinkedField",alias:null,name:"feedback_react",storageKey:null,args:b,concreteType:"FeedbackReactResponsePayload",plural:!1,selections:[{kind:"LinkedField",alias:null,name:"feedback",storageKey:null,args:null,concreteType:"Feedback",plural:!1,selections:[{kind:"ScalarField",alias:null,name:"can_viewer_react",args:d,storageKey:null},{kind:"LinkedField",alias:null,name:"viewer_feedback_reaction_info",storageKey:null,args:d,concreteType:"FeedbackReactionInfo",plural:!1,selections:[e,f,g]},f,{kind:"LinkedField",alias:null,name:"viewer_actor",storageKey:null,args:d,concreteType:null,plural:!1,selections:[g,f,h]},{kind:"LinkedField",alias:null,name:"supported_reactions",storageKey:null,args:null,concreteType:"FeedbackReaction",plural:!0,selections:[e]},{kind:"LinkedField",alias:null,name:"associated_video",storageKey:null,args:null,concreteType:"Video",plural:!1,selections:[f]},{kind:"LinkedField",alias:null,name:"top_reactions",storageKey:'top_reactions(orderby:["COUNT_DESC","REACTION_TYPE"])',args:[{kind:"Literal",name:"orderby",value:["COUNT_DESC","REACTION_TYPE"]}],concreteType:"TopReactionsConnection",plural:!1,selections:[{kind:"LinkedField",alias:null,name:"edges",storageKey:null,args:null,concreteType:"TopReactionsEdge",plural:!0,selections:[{kind:"ScalarField",alias:null,name:"reaction_count",args:null,storageKey:null},{kind:"LinkedField",alias:null,name:"node",storageKey:null,args:null,concreteType:"FeedbackReactionInfo",plural:!1,selections:[e,f,{kind:"ScalarField",alias:null,name:"reaction_type",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"localized_name",args:null,storageKey:null}]},i]}]},{kind:"LinkedField",alias:null,name:"reactors",storageKey:null,args:null,concreteType:"ReactorsOfContentConnection",plural:!1,selections:[j,{kind:"ScalarField",alias:null,name:"count_reduced",args:null,storageKey:null}]},i,{kind:"LinkedField",alias:null,name:"important_reactors",storageKey:"important_reactors(first:2)",args:[{kind:"Literal",name:"first",value:2}],concreteType:"ImportantReactorsConnection",plural:!1,selections:[{kind:"LinkedField",alias:null,name:"nodes",storageKey:null,args:null,concreteType:null,plural:!0,selections:[g,h,f]}]},{kind:"LinkedField",alias:"reaction_count",name:"reactors",storageKey:null,args:null,concreteType:"ReactorsOfContentConnection",plural:!1,selections:[j]}]},c]}]},params:{operationKind:"mutation",name:"UFI2FeedbackReactMutation",id:"2580813318646067",text:null,metadata:{}}}}();e.exports=a}),null);
__d("UFI2FeedbackReactMutation_feedback.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{kind:"ScalarField",alias:null,name:"key",args:null,storageKey:null}];return{kind:"Fragment",name:"UFI2FeedbackReactMutation_feedback",type:"Feedback",metadata:{mask:!1},argumentDefinitions:[{kind:"RootArgument",name:"useDefaultActor",type:"Boolean"}],selections:[{kind:"LinkedField",alias:null,name:"associated_video",storageKey:null,args:null,concreteType:"Video",plural:!1,selections:[{kind:"ScalarField",alias:null,name:"id",args:null,storageKey:null}]},{kind:"LinkedField",alias:null,name:"top_reactions",storageKey:'top_reactions(orderby:["COUNT_DESC","REACTION_TYPE"])',args:[{kind:"Literal",name:"orderby",value:["COUNT_DESC","REACTION_TYPE"]}],concreteType:"TopReactionsConnection",plural:!1,selections:[{kind:"LinkedField",alias:null,name:"edges",storageKey:null,args:null,concreteType:"TopReactionsEdge",plural:!0,selections:[{kind:"ScalarField",alias:null,name:"reaction_count",args:null,storageKey:null},{kind:"LinkedField",alias:null,name:"node",storageKey:null,args:null,concreteType:"FeedbackReactionInfo",plural:!1,selections:a}]}]},{kind:"LinkedField",alias:null,name:"reactors",storageKey:null,args:null,concreteType:"ReactorsOfContentConnection",plural:!1,selections:[{kind:"ScalarField",alias:null,name:"count",args:null,storageKey:null}]},{kind:"LinkedField",alias:null,name:"viewer_feedback_reaction_info",storageKey:null,args:[{kind:"Variable",name:"use_default_actor",variableName:"useDefaultActor"}],concreteType:"FeedbackReactionInfo",plural:!1,selections:a}]}}();e.exports=a}),null);
__d("UFI2UnhideCommentMutation.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{kind:"LocalArgument",name:"input",type:"CommentUnhideData!",defaultValue:null},{kind:"LocalArgument",name:"isComet",type:"Boolean!",defaultValue:null},{kind:"LocalArgument",name:"feedLocation",type:"FBFeedLocation",defaultValue:null}],b=[{kind:"Variable",name:"data",variableName:"input"}],c={kind:"ScalarField",alias:null,name:"id",args:null,storageKey:null},d={kind:"ScalarField",alias:null,name:"spam_display_mode",args:null,storageKey:null},e={kind:"ScalarField",alias:null,name:"is_hidden_by_viewer",args:null,storageKey:null},f={kind:"ScalarField",alias:null,name:"is_hidden_by_content_owner",args:null,storageKey:null},g={kind:"ScalarField",alias:null,name:"__typename",args:null,storageKey:null},h=[{kind:"Variable",name:"feed_location",variableName:"feedLocation"}];return{kind:"Request",fragment:{kind:"Fragment",name:"UFI2UnhideCommentMutation",type:"Mutation",metadata:null,argumentDefinitions:a,selections:[{kind:"LinkedField",alias:null,name:"comment_unhide",storageKey:null,args:b,concreteType:"CommentUnhideResponsePayload",plural:!1,selections:[{kind:"LinkedField",alias:null,name:"comment",storageKey:null,args:null,concreteType:"Comment",plural:!1,selections:[c,d,e,f,{kind:"FragmentSpread",name:"UFI2CommentMenu_comment",args:null},{kind:"Condition",passingValue:!0,condition:"isComet",selections:[{kind:"FragmentSpread",name:"CometUFICommentMenu_comment",args:null}]}]}]}]},operation:{kind:"Operation",name:"UFI2UnhideCommentMutation",argumentDefinitions:a,selections:[{kind:"LinkedField",alias:null,name:"comment_unhide",storageKey:null,args:b,concreteType:"CommentUnhideResponsePayload",plural:!1,selections:[{kind:"LinkedField",alias:null,name:"comment",storageKey:null,args:null,concreteType:"Comment",plural:!1,selections:[c,d,e,f,{kind:"Condition",passingValue:!1,condition:"isComet",selections:[{kind:"ScalarField",alias:null,name:"legacy_fbid",args:null,storageKey:null},{kind:"LinkedField",alias:null,name:"author",storageKey:null,args:null,concreteType:null,plural:!1,selections:[g,c,{kind:"ScalarField",alias:null,name:"name",args:null,storageKey:null}]},{kind:"LinkedField",alias:null,name:"group_comment_info",storageKey:null,args:null,concreteType:"GroupCommentInfo",plural:!1,selections:[{kind:"ScalarField",alias:null,name:"is_author_muted",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"group_id",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"can_viewer_report_comment_to_admin_with_tags",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"can_viewer_block_author",args:null,storageKey:null}]},{kind:"ScalarField",alias:null,name:"legacy_token",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"comment_menu_tooltip",args:null,storageKey:null},{kind:"LinkedField",alias:null,name:"comment_menu_items",storageKey:null,args:null,concreteType:null,plural:!0,selections:[g,{kind:"InlineFragment",type:"CommentMenuItemDeleteAndRemoveMember",selections:[{kind:"ScalarField",alias:null,name:"show_remove_content_options",args:null,storageKey:null}]}]},{kind:"ScalarField",alias:null,name:"is_author_banned_by_content_owner",args:null,storageKey:null},{kind:"LinkedField",alias:null,name:"parent_feedback",storageKey:null,args:null,concreteType:"Feedback",plural:!1,selections:[c,{kind:"LinkedField",alias:null,name:"viewer_acts_as_page",storageKey:null,args:null,concreteType:"Page",plural:!1,selections:[c]}]},{kind:"ScalarField",alias:null,name:"create_detailed_report_uri",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"us_structured_reporting_enabled",args:null,storageKey:null}]},{kind:"Condition",passingValue:!0,condition:"isComet",selections:[{kind:"ScalarField",alias:null,name:"should_show_comment_menu",args:h,storageKey:null},{kind:"LinkedField",alias:"items",name:"comment_menu_items",storageKey:null,args:h,concreteType:null,plural:!0,selections:[g,{kind:"InlineFragment",type:"CommentMenuItemRemoveTag",selections:[{kind:"ModuleImport",documentName:"CometUFICommentMenu_comment",fragmentName:"CometUFICommentMenuItemRemoveTag_commentMenuItem",fragmentPropName:"commentMenuItem"}]},{kind:"InlineFragment",type:"CommentMenuItemDelete",selections:[{kind:"ModuleImport",documentName:"CometUFICommentMenu_comment",fragmentName:"CometUFICommentMenuItemDelete_commentMenuItem",fragmentPropName:"commentMenuItem"}]},{kind:"InlineFragment",type:"CommentMenuItemDeleteAndRemoveMember",selections:[{kind:"ModuleImport",documentName:"CometUFICommentMenu_comment",fragmentName:"CometUFICommentMenuItemDeleteAndRemoveMember_commentMenuItem",fragmentPropName:"commentMenuItem"}]},{kind:"InlineFragment",type:"CommentMenuItemDivider",selections:[{kind:"ModuleImport",documentName:"CometUFICommentMenu_comment",fragmentName:"CometUFICommentMenuItemDivider_commentMenuItem",fragmentPropName:"commentMenuItem"}]},{kind:"InlineFragment",type:"CommentMenuItemEdit",selections:[{kind:"ModuleImport",documentName:"CometUFICommentMenu_comment",fragmentName:"CometUFICommentMenuItemEdit_commentMenuItem",fragmentPropName:"commentMenuItem"}]},{kind:"InlineFragment",type:"CommentMenuItemReportToAdmins",selections:[{kind:"ModuleImport",documentName:"CometUFICommentMenu_comment",fragmentName:"CometUFICommentMenuItemReportToAdmins_commentMenuItem",fragmentPropName:"commentMenuItem"}]},{kind:"InlineFragment",type:"CommentMenuItemGiveFeedbackOrReport",selections:[{kind:"ModuleImport",documentName:"CometUFICommentMenu_comment",fragmentName:"CometUFICommentMenuItemGiveFeedbackOrReport_commentMenuItem",fragmentPropName:"commentMenuItem"}]},{kind:"InlineFragment",type:"CommentMenuItemCreateDetailedReport",selections:[{kind:"ModuleImport",documentName:"CometUFICommentMenu_comment",fragmentName:"CometUFICommentMenuItemCreateDetailedReport_commentMenuItem",fragmentPropName:"commentMenuItem"}]},{kind:"InlineFragment",type:"CommentMenuItemHide",selections:[{kind:"ModuleImport",documentName:"CometUFICommentMenu_comment",fragmentName:"CometUFICommentMenuItemHide_commentMenuItem",fragmentPropName:"commentMenuItem"}]},{kind:"InlineFragment",type:"CommentMenuItemBanCommenter",selections:[{kind:"ModuleImport",documentName:"CometUFICommentMenu_comment",fragmentName:"CometUFICommentMenuItemBanCommenter_commentMenuItem",fragmentPropName:"commentMenuItem"}]},{kind:"InlineFragment",type:"CommentMenuItemMuteMember",selections:[{kind:"ModuleImport",documentName:"CometUFICommentMenu_comment",fragmentName:"CometUFICommentMenuItemMuteMember_commentMenuItem",fragmentPropName:"commentMenuItem"}]},{kind:"InlineFragment",type:"CommentMenuItemRemoveWithFeedback",selections:[{kind:"ModuleImport",documentName:"CometUFICommentMenu_comment",fragmentName:"CometUFICommentMenuItemRemoveWithFeedback_commentMenuItem",fragmentPropName:"commentMenuItem"}]},{kind:"InlineFragment",type:"CommentMenuItemPublishTeleprompterComment",selections:[{kind:"ModuleImport",documentName:"CometUFICommentMenu_comment",fragmentName:"CometUFICommentMenuItemPublishTeleprompterComment_commentMenuItem",fragmentPropName:"commentMenuItem"}]},{kind:"InlineFragment",type:"CommentMenuItemPublishVidwallaOverlay",selections:[{kind:"ModuleImport",documentName:"CometUFICommentMenu_comment",fragmentName:"CometUFICommentMenuItemPublishVidwallaOverlay_commentMenuItem",fragmentPropName:"commentMenuItem"}]},{kind:"InlineFragment",type:"CommentMenuItemBanCommenterFromLiveVideoStream",selections:[{kind:"ModuleImport",documentName:"CometUFICommentMenu_comment",fragmentName:"CometUFICommentMenuItemBanCommenterFromLiveVideoStream_commentMenuItem",fragmentPropName:"commentMenuItem"}]},{kind:"InlineFragment",type:"CommentMenuItemBanCommenterFromPage",selections:[{kind:"ModuleImport",documentName:"CometUFICommentMenu_comment",fragmentName:"CometUFICommentMenuItemBanCommenterFromPage_commentMenuItem",fragmentPropName:"commentMenuItem"}]},{kind:"InlineFragment",type:"CommentMenuItemMuteCommenterForFifteenMinutes",selections:[{kind:"ModuleImport",documentName:"CometUFICommentMenu_comment",fragmentName:"CometUFICommentMenuItemMuteCommenterForFifteenMinutes_commentMenuItem",fragmentPropName:"commentMenuItem"}]},{kind:"InlineFragment",type:"CommentMenuItemMuteCommenterForThirtyMinutes",selections:[{kind:"ModuleImport",documentName:"CometUFICommentMenu_comment",fragmentName:"CometUFICommentMenuItemMuteCommenterForThirtyMinutes_commentMenuItem",fragmentPropName:"commentMenuItem"}]},{kind:"InlineFragment",type:"CommentMenuItemMuteCommenterForSixtyMinutes",selections:[{kind:"ModuleImport",documentName:"CometUFICommentMenu_comment",fragmentName:"CometUFICommentMenuItemMuteCommenterForSixtyMinutes_commentMenuItem",fragmentPropName:"commentMenuItem"}]}]},{kind:"ClientExtension",selections:[{kind:"ScalarField",alias:null,name:"optimistic_action",args:null,storageKey:null}]}]}]}]}]},params:{operationKind:"mutation",name:"UFI2UnhideCommentMutation",id:"3620189251356721",text:null,metadata:{}}}}();e.exports=a}),null);
__d("UFI2TypingSubscription.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{kind:"LocalArgument",name:"input",type:"FeedbackTypingSubscribeData!",defaultValue:null}],b=[{kind:"Variable",name:"data",variableName:"input"}],c=[{kind:"LinkedField",alias:null,name:"feedback",storageKey:null,args:null,concreteType:"Feedback",plural:!1,selections:[{kind:"FragmentSpread",name:"UFI2TypingIndicatorImpl_feedback",args:null}]}],d=[{kind:"LinkedField",alias:null,name:"feedback",storageKey:null,args:null,concreteType:"Feedback",plural:!1,selections:[{kind:"ScalarField",alias:null,name:"id",args:null,storageKey:null},{kind:"LinkedField",alias:null,name:"feedback_typers",storageKey:null,args:null,concreteType:"FeedbackTypersConnection",plural:!1,selections:[{kind:"ScalarField",alias:null,name:"other_count",args:null,storageKey:null}]},{kind:"ScalarField",alias:null,name:"subscription_target_id",args:null,storageKey:null}]}];return{kind:"Request",fragment:{kind:"Fragment",name:"UFI2TypingSubscription",type:"Subscription",metadata:null,argumentDefinitions:a,selections:[{kind:"LinkedField",alias:null,name:"feedback_typing_subscribe",storageKey:null,args:b,concreteType:null,plural:!1,selections:[{kind:"InlineFragment",type:"FeedbackStartTypingResponsePayload",selections:c},{kind:"InlineFragment",type:"FeedbackStopTypingResponsePayload",selections:c}]}]},operation:{kind:"Operation",name:"UFI2TypingSubscription",argumentDefinitions:a,selections:[{kind:"LinkedField",alias:null,name:"feedback_typing_subscribe",storageKey:null,args:b,concreteType:null,plural:!1,selections:[{kind:"ScalarField",alias:null,name:"__typename",args:null,storageKey:null},{kind:"InlineFragment",type:"FeedbackStartTypingResponsePayload",selections:d},{kind:"InlineFragment",type:"FeedbackStopTypingResponsePayload",selections:d}]}]},params:{operationKind:"subscription",name:"UFI2TypingSubscription",id:"3301511729876685",text:null,metadata:{subscriptionName:"feedback_typing_subscribe"}}}}();e.exports=a}),null);
__d("ExploreFeedEndOfFeedTracking",["OnVisible","tidyEvent"],(function(a,b,c,d,e,f){"use strict";var g=null,h=!1,i=!1;e.exports={reset:function(){h=!1,i=!1,g&&g.remove(),g=null},onEOFUnitRendered:function(a){h=!1,i=!1,g=new(b("OnVisible"))(a.element,function(){h=!0,g&&g.remove()},!0),b("tidyEvent")(g)},onStoryRendered:function(){if(!h||i)return;i=!0}}}),null);
__d("StickyRHC",["csx","Arbiter","DirectionalDockingElement","DockingElement","DOMDimensions","DOMQuery","Event","FullScreen","Run","SubscriptionsHandler","ViewportBounds","$","ge","getElementPosition","getViewportDimensions","removeFromArray","setImmediate","throttle"],(function(a,b,c,d,e,f,g){var h=35,i=[],j;function k(a,c){if(!c||!c.dom_id){i.forEach(l);return}a=b("$")(c.dom_id);for(var c=0;c<i.length;c++)if(b("DOMQuery").contains(i[c].getRoot(),a)){l(i[c]);return}}function l(a){var c=a.getRoot(),d=a.updateOffset.bind(a);a=b("DOMQuery").scry(c,"img.img");a.forEach(function(a){if(a.complete||a.getAttribute("height")||a.naturalHeight===void 0&&a.naturalHeight!==0)return;var c=function(){d(),e.remove(),f.remove(),g.remove()},e=b("Event").listen(a,"load",c),f=b("Event").listen(a,"error",c),g=b("Event").listen(a,"abort",c)});d()}function m(){if(b("FullScreen").isFullScreen())return;i.forEach(function(a){a.updateOffset()})}function n(a){var c,d=(c=b("DOMQuery")).scry(a,"._4-u2"),e=c.scry(a,"._4-u3"),f=c.scry(a,".uiHeader");c=c.scry(a,".ego_unit");return[].concat(d,e,f,c).filter(function(a){return r(a)!==0})}function o(a){return b("getElementPosition")(a).y}function p(a,b){return a-b}function q(){return r(b("ge")("pageFooter"))}function r(a){return a?b("DOMDimensions").getElementDimensions(a).height:0}var s=a(m);function a(a){return function(c){return b("Arbiter").subscribe(c,a)}}c=function(){"use strict";function a(a,c,d,e){var f=this;d===void 0&&(d=!0);this.$1=a;this.$2=c?new(b("DirectionalDockingElement"))(a):new(b("DockingElement"))(a);this.$3=d;this.$2.subscribe("changedheight",this.updateOffset.bind(this));this.updateOffset();l(this);i.length||(j=new(b("SubscriptionsHandler"))(),j.addSubscriptions(s("header_loaded"),s("responsive_rhc_loaded"),s("ad_home_pagelet_loaded"),s("comet_rhc_upsell_closed"),b("Arbiter").subscribe("netego_loaded",k),b("FullScreen").subscribe("changed",m),b("Event").listen(window,"resize",b("throttle")(m))));b("Run").onLeave(function(){return f.destroy()});i.push(this)}a.getInstances=function(){return i};var c=a.prototype;c.getRoot=function(){return this.$1};c.subscribe=function(a,b){return this.$2.subscribe(a,b)};c.destroy=function(){this.$2=null,b("removeFromArray")(i,this),!i.length&&j&&(j.release(),j=null)};c.unfixAndScrollBy=function(a){this.$2&&this.$2.unfixAndScrollBy(a)};c.updateOffset=function(){var a=this;b("setImmediate")(function(){a.$2&&a.$2.setOffset(a.calculateRHCOffset())})};c.calculateRHCOffset=function(){var a=this.getRoot(),b=r(a),c=t(),d=u();if(b<d)return c;if(this.$3){var e=n(a).map(o).sort(p);a=b+o(a);for(var e=e,f=Array.isArray(e),g=0,e=f?e:e[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var h;if(f){if(g>=e.length)break;h=e[g++]}else{g=e.next();if(g.done)break;h=g.value}h=h;h=a-h;if(h<d)return c-(b-h)}}return c-(b-d)};return a}();function t(){return b("ViewportBounds").getTop()}function u(){var a=t(),c=b("getViewportDimensions")().height,d=q();return c-a-h-d}e.exports=c}),null);
__d("UFI2ReactionsMenu",["requireCond","cr:682215"],(function(a,b,c,d,e,f){"use strict";e.exports=b("cr:682215")}),null);
__d("UFI2ActorPresenceProvider.react",["Arbiter","AvailableListConstants","PresenceStatus","React","SubscriptionsHandler"],(function(a,b,c,d,e,f){"use strict";a=b("React");c=function(a){babelHelpers.inheritsLoose(c,a);function c(){var b,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return(b=c=a.call.apply(a,[this].concat(e))||this,c.state={isActive:!1},b)||babelHelpers.assertThisInitialized(c)}var d=c.prototype;d.componentDidMount=function(){var a=this,c=this.props.actorID;this.$1=new(b("SubscriptionsHandler"))();this.$1.addSubscriptions(b("Arbiter").subscribe(b("AvailableListConstants").ON_AVAILABILITY_CHANGED,function(){a.setState({isActive:b("PresenceStatus").get(c)===b("AvailableListConstants").ACTIVE})}))};d.componentWillUnmount=function(){this.$1&&this.$1.release()};d.render=function(){return this.props.children(this.state.isActive)};return c}(a.PureComponent);e.exports=c}),null);
__d("UFI2BanActorMutation",["RelayModern","forEachUFI2DisplayCommentsConnection","UFI2BanActorMutation.graphql"],(function(a,b,c,d,e,f){"use strict";var g,h=b("RelayModern").commitMutation;b("RelayModern").graphql;var i=g!==void 0?g:g=b("UFI2BanActorMutation.graphql");e.exports={commit:function(a,c){var d=c.actorId,e=c.feedbackId,f=c.pageId,g=c.targetUserId,j=c.undoBan;c.feedbackSource;c=function(a){if(e==null)return;var c=a.get(e);if(!c)return;b("forEachUFI2DisplayCommentsConnection")(a,c,function(a){a=a.getLinkedRecords("edges");if(!a)return;a.forEach(function(a){if(!a)return;a=a.getLinkedRecord("node");if(!a)return;var b=a.getLinkedRecord("author");if(!b)return;if(b.getValue("id")===g){b=a.getValue("is_hidden_by_content_owner");a.setValue(j&&b!==!0?"none":"spam","spam_display_mode");a.setValue(!j,"is_author_banned_by_content_owner")}})})};return h(a,{mutation:i,optimisticResponse:{feedback_page_ban:{__typename:"FeedbackPageBanResponsePayload"}},optimisticUpdater:c,updater:c,variables:{input:{actor_id:d,ban_action:j?"UNDO_BAN":"BAN",page_id:f,target_user_id:g}}})}}}),null);
__d("UFI2FeedbackReactMutation",["invariant","requireCond","Bootloader","ChannelClientID","CurrentUser","FBLogger","FeedbackSourceType","JSEnumValueToGraphQLKey","RelayModern","RelayRuntime","UFIODSLogger","UFIReactionTypes","arrayStableSort","setTimeoutAcrossTransitions","cr:1088250","UFI2FeedbackReactMutation_feedback.graphql","UFI2FeedbackReactMutation.graphql"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=b("RelayModern").commitMutation;b("RelayModern").graphql;var k=b("RelayRuntime").ConnectionHandler,l=b("RelayRuntime").applyOptimisticMutation,m=b("UFIReactionTypes").ordering,n=2,o=3e3,p=b("JSEnumValueToGraphQLKey")(b("FeedbackSourceType"),1);h!==void 0?h:h=b("UFI2FeedbackReactMutation_feedback.graphql");var q=i!==void 0?i:i=b("UFI2FeedbackReactMutation.graphql");function a(a){var c=a.actorID,d=a.environment,e=a.feedbackArg,f=a.input,h=a.useDefaultActor,i=f.feedback_source,j=f.feedback_reaction,k=(e=e.associated_video)==null?void 0:e.id;j!==0&&k!=null&&b("Bootloader").loadModules(["CreateLivingRoomActionLinkStore","LivingRoomCreationSource"],function(a,b){a.activateLivingRoomCTAForVideo(k,b.FEED_CTA_ON_REACT)},"UFI2FeedbackReactMutation");e={input:babelHelpers["extends"]({},f,{actor_id:c,feedback_source:i!=null?b("JSEnumValueToGraphQLKey")(b("FeedbackSourceType"),i):void 0,session_id:b("ChannelClientID").getID()}),useDefaultActor:h};c=function(a){var c=a.get(f.feedback_id);if(c==null){b("FBLogger")("ufi2").addMetadata("UFI","FEEDBACK_TARGET_ID",f.feedback_id).warn("UFI2FeedbackReactMutation: Could not find feedback in Relay store.");return}var d=s(a,f.feedback_id,c),e=c.getLinkedRecord("viewer_feedback_reaction_info",{use_default_actor:h}),i=e?e.getValue("key")||0:0;typeof i==="number"||g(0,3027);var k=c.getLinkedRecord("top_reactions",{orderby:["COUNT_DESC","REACTION_TYPE"]});if(!k){var l="client:top_reactions:"+f.feedback_id;k=a.create(l,"TopReactionsConnection")}u(a,k,j,i);if(j===0){if(e!==null){l=d.getValue("count");k=typeof l==="number"?l:1;d.setValue(k-1,"count")}c.setValue(null,"viewer_feedback_reaction_info",{use_default_actor:h})}else{if(e===null){i=d.getValue("count");l=typeof i==="number"?i:0;d.setValue(l+1,"count")}e=t(a,j);c.setLinkedRecord(e,"viewer_feedback_reaction_info",{use_default_actor:h})}k=d.getValue("count_reduced");if(parseInt(k,10).toString()===k){i=d.getValue("count");typeof i==="number"&&d.setValue(i.toString(),"count_reduced")}};i={mutation:q,optimisticUpdater:c,variables:e};return r(d,i,c,0,f,a.onError)}function r(a,c,d,e,f,g){var h=j(a,babelHelpers["extends"]({},c,{onCompleted:function(a){a=c==null?void 0:(a=c.variables)==null?void 0:(a=a.input)==null?void 0:a.feedback_source;var d=Math.min(e+1,3);d=""+d+(e>=d?"+":"");a===p&&b("UFIODSLogger").bump("reaction.newsfeed.mutation.attempt."+d,"relay");b("UFIODSLogger").bump("reaction.mutation.attempt."+d,"relay");v(f)},onError:function(i){if(i.name==="GraphQLError")return g(i);h=l(a,babelHelpers["extends"]({},c,{optimisticUpdater:d}));if(e>=n)return g(i);b("setTimeoutAcrossTransitions")(function(){h&&h.dispose(),h=r(a,c,d,e+1,f,g)},o)}}));return{dispose:function(){h&&h.dispose(),h=null}}}function s(a,c,d){var e=d.getLinkedRecord("reactors");if(!e){b("FBLogger")("ufi2").addMetadata("UFI","FEEDBACK_TARGET_ID",c).warn("Expected Feedback record proxy to have a reactors connection");c="client:reactors:"+c;e=a.get(c)||a.create(c,"ReactorsOfContentConnection");e.setValue(0,"count");e.setValue("0","count_reduced");d.setLinkedRecord(e,"reactors")}return e}function t(a,c){c!==0||g(0,3028);var d="client:reaction_info:"+c,e=a.get(d);if(!e){e=a.create(d,"FeedbackReactionInfo");e.setValue(c,"key");a=b("UFIReactionTypes").reactions[c];a||g(0,3029,c);e.setValue(a.display_name,"localized_name");e.setValue(a.name.toUpperCase(),"reaction_type")}return e}function u(a,c,d,e){var f=(c.getLinkedRecords("edges")||[]).map(function(a){if(!a)return null;var b=a.getLinkedRecord("node"),c=a.getValue("reaction_count")||0,d=b&&b.getValue("key")||0;typeof c==="number"&&typeof d==="number"||g(0,3027);return b&&c!==0&&d!==0?{count:c,edge:a,key:d}:null}).filter(Boolean);if(e){var h=f.find(function(a){return a.key===e});h&&h.count--}if(d){h=f.find(function(a){return a.key===d});if(!h){var i=t(a,d);a=k.createEdge(a,c,i,"TopReactionsEdge");h={count:0,edge:a,key:d};f.push(h)}h.count++}i=b("arrayStableSort")(f,function(a,b){return b.count-a.count||m.indexOf(a.key)-m.indexOf(b.key)}).filter(function(a){return a.count!==0}).map(function(a){var b=a.edge;a=a.count;b.setValue(a,"reaction_count");b.setValue((a=b.getValue("reaction_count_reduced"))!=null?a:"","reaction_count_reduced");return b});c.setLinkedRecords(i,"edges")}function v(a){if(!b("CurrentUser").isWorkUser())return;if(a.tracking==null)return;a=a.tracking[0];a=(a=JSON.parse((a=a)!=null?a:""))==null?void 0:a.top_level_post_id;a&&b("cr:1088250")&&b("cr:1088250")(a)}e.exports={commit:a}}),null);
__d("UFI2UnhideCommentMutation",["FBLogger","RelayModern","UFI2UnhideCommentMutation.graphql"],(function(a,b,c,d,e,f){"use strict";var g,h=b("RelayModern").commitMutation;b("RelayModern").graphql;var i=g!==void 0?g:g=b("UFI2UnhideCommentMutation.graphql");function a(a,c){return h(a,{mutation:i,optimisticUpdater:function(a){a=a.get(c.commentId);if(a==null){b("FBLogger")("ufi2").mustfix("When trying to unhide a comment, the comment could not be found.");return}a.setValue(!1,"is_hidden_by_content_owner");a.setValue(!1,"is_hidden_by_viewer");a.setValue("none","spam_display_mode")},variables:{feedLocation:c.feedLocation,input:{actor_id:c.actorId,comment_id:c.commentId,feedback_source:c.feedbackSource,site:"www"},isComet:c.isComet}})}e.exports={commit:a}}),null);
__d("UFI2TypingSubscription",["RelayModern","UFI2FeedbackSubscriptionTopicProvider","UFI2TypingSubscription.graphql"],(function(a,b,c,d,e,f){"use strict";var g;b("RelayModern").graphql;var h=b("RelayModern").requestSubscription,i=g!==void 0?g:g=b("UFI2TypingSubscription.graphql");b("UFI2FeedbackSubscriptionTopicProvider").registerProvider(i,"gqls/feedback_typing_subscribe/feedback_id_");function a(a,c,d,e){b("UFI2FeedbackSubscriptionTopicProvider").addSubscriptionTargetIDForFeedbackID(c,e);return h(a,{onNext:d&&d.onNext,subscription:i,variables:{input:{feedback_id:c}}})}e.exports={subscribe:a}}),null);