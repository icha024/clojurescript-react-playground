// Compiled by ClojureScript 1.8.40 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__14354 = cljs.core._EQ_;
var expr__14355 = (function (){var or__6207__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e14358){if((e14358 instanceof Error)){
var e = e14358;
return false;
} else {
throw e14358;

}
}})();
if(cljs.core.truth_(or__6207__auto__)){
return or__6207__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__14354.call(null,"true",expr__14355))){
return true;
} else {
if(cljs.core.truth_(pred__14354.call(null,"false",expr__14355))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__14355)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
} else {
}

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e14360){if((e14360 instanceof Error)){
var e = e14360;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e14360;

}
}} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.repl_print_fn = (function figwheel$client$repl_print_fn(var_args){
var args__7283__auto__ = [];
var len__7276__auto___14362 = arguments.length;
var i__7277__auto___14363 = (0);
while(true){
if((i__7277__auto___14363 < len__7276__auto___14362)){
args__7283__auto__.push((arguments[i__7277__auto___14363]));

var G__14364 = (i__7277__auto___14363 + (1));
i__7277__auto___14363 = G__14364;
continue;
} else {
}
break;
}

var argseq__7284__auto__ = ((((0) < args__7283__auto__.length))?(new cljs.core.IndexedSeq(args__7283__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__7284__auto__);
});

figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));

return null;
});

figwheel.client.repl_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_print_fn.cljs$lang$applyTo = (function (seq14361){
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14361));
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__14365){
var map__14368 = p__14365;
var map__14368__$1 = ((((!((map__14368 == null)))?((((map__14368.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14368.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14368):map__14368);
var message = cljs.core.get.call(null,map__14368__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__14368__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__6207__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__6207__auto__)){
return or__6207__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__6195__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__6195__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__6195__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__9351__auto___14530 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9351__auto___14530,ch){
return (function (){
var f__9352__auto__ = (function (){var switch__9239__auto__ = ((function (c__9351__auto___14530,ch){
return (function (state_14499){
var state_val_14500 = (state_14499[(1)]);
if((state_val_14500 === (7))){
var inst_14495 = (state_14499[(2)]);
var state_14499__$1 = state_14499;
var statearr_14501_14531 = state_14499__$1;
(statearr_14501_14531[(2)] = inst_14495);

(statearr_14501_14531[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14500 === (1))){
var state_14499__$1 = state_14499;
var statearr_14502_14532 = state_14499__$1;
(statearr_14502_14532[(2)] = null);

(statearr_14502_14532[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14500 === (4))){
var inst_14452 = (state_14499[(7)]);
var inst_14452__$1 = (state_14499[(2)]);
var state_14499__$1 = (function (){var statearr_14503 = state_14499;
(statearr_14503[(7)] = inst_14452__$1);

return statearr_14503;
})();
if(cljs.core.truth_(inst_14452__$1)){
var statearr_14504_14533 = state_14499__$1;
(statearr_14504_14533[(1)] = (5));

} else {
var statearr_14505_14534 = state_14499__$1;
(statearr_14505_14534[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14500 === (15))){
var inst_14459 = (state_14499[(8)]);
var inst_14474 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_14459);
var inst_14475 = cljs.core.first.call(null,inst_14474);
var inst_14476 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_14475);
var inst_14477 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_14476)].join('');
var inst_14478 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_14477);
var state_14499__$1 = state_14499;
var statearr_14506_14535 = state_14499__$1;
(statearr_14506_14535[(2)] = inst_14478);

(statearr_14506_14535[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14500 === (13))){
var inst_14483 = (state_14499[(2)]);
var state_14499__$1 = state_14499;
var statearr_14507_14536 = state_14499__$1;
(statearr_14507_14536[(2)] = inst_14483);

(statearr_14507_14536[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14500 === (6))){
var state_14499__$1 = state_14499;
var statearr_14508_14537 = state_14499__$1;
(statearr_14508_14537[(2)] = null);

(statearr_14508_14537[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14500 === (17))){
var inst_14481 = (state_14499[(2)]);
var state_14499__$1 = state_14499;
var statearr_14509_14538 = state_14499__$1;
(statearr_14509_14538[(2)] = inst_14481);

(statearr_14509_14538[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14500 === (3))){
var inst_14497 = (state_14499[(2)]);
var state_14499__$1 = state_14499;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14499__$1,inst_14497);
} else {
if((state_val_14500 === (12))){
var inst_14458 = (state_14499[(9)]);
var inst_14472 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_14458,opts);
var state_14499__$1 = state_14499;
if(cljs.core.truth_(inst_14472)){
var statearr_14510_14539 = state_14499__$1;
(statearr_14510_14539[(1)] = (15));

} else {
var statearr_14511_14540 = state_14499__$1;
(statearr_14511_14540[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14500 === (2))){
var state_14499__$1 = state_14499;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14499__$1,(4),ch);
} else {
if((state_val_14500 === (11))){
var inst_14459 = (state_14499[(8)]);
var inst_14464 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_14465 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_14459);
var inst_14466 = cljs.core.async.timeout.call(null,(1000));
var inst_14467 = [inst_14465,inst_14466];
var inst_14468 = (new cljs.core.PersistentVector(null,2,(5),inst_14464,inst_14467,null));
var state_14499__$1 = state_14499;
return cljs.core.async.ioc_alts_BANG_.call(null,state_14499__$1,(14),inst_14468);
} else {
if((state_val_14500 === (9))){
var inst_14459 = (state_14499[(8)]);
var inst_14485 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_14486 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_14459);
var inst_14487 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_14486);
var inst_14488 = [cljs.core.str("Not loading: "),cljs.core.str(inst_14487)].join('');
var inst_14489 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_14488);
var state_14499__$1 = (function (){var statearr_14512 = state_14499;
(statearr_14512[(10)] = inst_14485);

return statearr_14512;
})();
var statearr_14513_14541 = state_14499__$1;
(statearr_14513_14541[(2)] = inst_14489);

(statearr_14513_14541[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14500 === (5))){
var inst_14452 = (state_14499[(7)]);
var inst_14454 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_14455 = (new cljs.core.PersistentArrayMap(null,2,inst_14454,null));
var inst_14456 = (new cljs.core.PersistentHashSet(null,inst_14455,null));
var inst_14457 = figwheel.client.focus_msgs.call(null,inst_14456,inst_14452);
var inst_14458 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_14457);
var inst_14459 = cljs.core.first.call(null,inst_14457);
var inst_14460 = figwheel.client.autoload_QMARK_.call(null);
var state_14499__$1 = (function (){var statearr_14514 = state_14499;
(statearr_14514[(8)] = inst_14459);

(statearr_14514[(9)] = inst_14458);

return statearr_14514;
})();
if(cljs.core.truth_(inst_14460)){
var statearr_14515_14542 = state_14499__$1;
(statearr_14515_14542[(1)] = (8));

} else {
var statearr_14516_14543 = state_14499__$1;
(statearr_14516_14543[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14500 === (14))){
var inst_14470 = (state_14499[(2)]);
var state_14499__$1 = state_14499;
var statearr_14517_14544 = state_14499__$1;
(statearr_14517_14544[(2)] = inst_14470);

(statearr_14517_14544[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14500 === (16))){
var state_14499__$1 = state_14499;
var statearr_14518_14545 = state_14499__$1;
(statearr_14518_14545[(2)] = null);

(statearr_14518_14545[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14500 === (10))){
var inst_14491 = (state_14499[(2)]);
var state_14499__$1 = (function (){var statearr_14519 = state_14499;
(statearr_14519[(11)] = inst_14491);

return statearr_14519;
})();
var statearr_14520_14546 = state_14499__$1;
(statearr_14520_14546[(2)] = null);

(statearr_14520_14546[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14500 === (8))){
var inst_14458 = (state_14499[(9)]);
var inst_14462 = figwheel.client.reload_file_state_QMARK_.call(null,inst_14458,opts);
var state_14499__$1 = state_14499;
if(cljs.core.truth_(inst_14462)){
var statearr_14521_14547 = state_14499__$1;
(statearr_14521_14547[(1)] = (11));

} else {
var statearr_14522_14548 = state_14499__$1;
(statearr_14522_14548[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__9351__auto___14530,ch))
;
return ((function (switch__9239__auto__,c__9351__auto___14530,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__9240__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__9240__auto____0 = (function (){
var statearr_14526 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14526[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__9240__auto__);

(statearr_14526[(1)] = (1));

return statearr_14526;
});
var figwheel$client$file_reloader_plugin_$_state_machine__9240__auto____1 = (function (state_14499){
while(true){
var ret_value__9241__auto__ = (function (){try{while(true){
var result__9242__auto__ = switch__9239__auto__.call(null,state_14499);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9242__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9242__auto__;
}
break;
}
}catch (e14527){if((e14527 instanceof Object)){
var ex__9243__auto__ = e14527;
var statearr_14528_14549 = state_14499;
(statearr_14528_14549[(5)] = ex__9243__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14499);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14527;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9241__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14550 = state_14499;
state_14499 = G__14550;
continue;
} else {
return ret_value__9241__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__9240__auto__ = function(state_14499){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__9240__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__9240__auto____1.call(this,state_14499);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__9240__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__9240__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__9240__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__9240__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__9240__auto__;
})()
;})(switch__9239__auto__,c__9351__auto___14530,ch))
})();
var state__9353__auto__ = (function (){var statearr_14529 = f__9352__auto__.call(null);
(statearr_14529[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9351__auto___14530);

return statearr_14529;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9353__auto__);
});})(c__9351__auto___14530,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__14551_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__14551_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_14558 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_14558){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_14556 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_14557 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),figwheel.client.utils.eval_helper.call(null,code,opts)], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_14557;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_14556;
}}catch (e14555){if((e14555 instanceof Error)){
var e = e14555;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_14558], null));
} else {
var e = e14555;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_14558))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__14559){
var map__14566 = p__14559;
var map__14566__$1 = ((((!((map__14566 == null)))?((((map__14566.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14566.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14566):map__14566);
var opts = map__14566__$1;
var build_id = cljs.core.get.call(null,map__14566__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__14566,map__14566__$1,opts,build_id){
return (function (p__14568){
var vec__14569 = p__14568;
var map__14570 = cljs.core.nth.call(null,vec__14569,(0),null);
var map__14570__$1 = ((((!((map__14570 == null)))?((((map__14570.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14570.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14570):map__14570);
var msg = map__14570__$1;
var msg_name = cljs.core.get.call(null,map__14570__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__14569,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__14569,map__14570,map__14570__$1,msg,msg_name,_,map__14566,map__14566__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__14569,map__14570,map__14570__$1,msg,msg_name,_,map__14566,map__14566__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__14566,map__14566__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__14576){
var vec__14577 = p__14576;
var map__14578 = cljs.core.nth.call(null,vec__14577,(0),null);
var map__14578__$1 = ((((!((map__14578 == null)))?((((map__14578.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14578.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14578):map__14578);
var msg = map__14578__$1;
var msg_name = cljs.core.get.call(null,map__14578__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__14577,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__14580){
var map__14590 = p__14580;
var map__14590__$1 = ((((!((map__14590 == null)))?((((map__14590.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14590.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14590):map__14590);
var on_compile_warning = cljs.core.get.call(null,map__14590__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__14590__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__14590,map__14590__$1,on_compile_warning,on_compile_fail){
return (function (p__14592){
var vec__14593 = p__14592;
var map__14594 = cljs.core.nth.call(null,vec__14593,(0),null);
var map__14594__$1 = ((((!((map__14594 == null)))?((((map__14594.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14594.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14594):map__14594);
var msg = map__14594__$1;
var msg_name = cljs.core.get.call(null,map__14594__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__14593,(1));
var pred__14596 = cljs.core._EQ_;
var expr__14597 = msg_name;
if(cljs.core.truth_(pred__14596.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__14597))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__14596.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__14597))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__14590,map__14590__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__9351__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9351__auto__,msg_hist,msg_names,msg){
return (function (){
var f__9352__auto__ = (function (){var switch__9239__auto__ = ((function (c__9351__auto__,msg_hist,msg_names,msg){
return (function (state_14813){
var state_val_14814 = (state_14813[(1)]);
if((state_val_14814 === (7))){
var inst_14737 = (state_14813[(2)]);
var state_14813__$1 = state_14813;
if(cljs.core.truth_(inst_14737)){
var statearr_14815_14861 = state_14813__$1;
(statearr_14815_14861[(1)] = (8));

} else {
var statearr_14816_14862 = state_14813__$1;
(statearr_14816_14862[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14814 === (20))){
var inst_14807 = (state_14813[(2)]);
var state_14813__$1 = state_14813;
var statearr_14817_14863 = state_14813__$1;
(statearr_14817_14863[(2)] = inst_14807);

(statearr_14817_14863[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14814 === (27))){
var inst_14803 = (state_14813[(2)]);
var state_14813__$1 = state_14813;
var statearr_14818_14864 = state_14813__$1;
(statearr_14818_14864[(2)] = inst_14803);

(statearr_14818_14864[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14814 === (1))){
var inst_14730 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_14813__$1 = state_14813;
if(cljs.core.truth_(inst_14730)){
var statearr_14819_14865 = state_14813__$1;
(statearr_14819_14865[(1)] = (2));

} else {
var statearr_14820_14866 = state_14813__$1;
(statearr_14820_14866[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14814 === (24))){
var inst_14805 = (state_14813[(2)]);
var state_14813__$1 = state_14813;
var statearr_14821_14867 = state_14813__$1;
(statearr_14821_14867[(2)] = inst_14805);

(statearr_14821_14867[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14814 === (4))){
var inst_14811 = (state_14813[(2)]);
var state_14813__$1 = state_14813;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14813__$1,inst_14811);
} else {
if((state_val_14814 === (15))){
var inst_14809 = (state_14813[(2)]);
var state_14813__$1 = state_14813;
var statearr_14822_14868 = state_14813__$1;
(statearr_14822_14868[(2)] = inst_14809);

(statearr_14822_14868[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14814 === (21))){
var inst_14768 = (state_14813[(2)]);
var state_14813__$1 = state_14813;
var statearr_14823_14869 = state_14813__$1;
(statearr_14823_14869[(2)] = inst_14768);

(statearr_14823_14869[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14814 === (31))){
var inst_14792 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_14813__$1 = state_14813;
if(cljs.core.truth_(inst_14792)){
var statearr_14824_14870 = state_14813__$1;
(statearr_14824_14870[(1)] = (34));

} else {
var statearr_14825_14871 = state_14813__$1;
(statearr_14825_14871[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14814 === (32))){
var inst_14801 = (state_14813[(2)]);
var state_14813__$1 = state_14813;
var statearr_14826_14872 = state_14813__$1;
(statearr_14826_14872[(2)] = inst_14801);

(statearr_14826_14872[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14814 === (33))){
var inst_14790 = (state_14813[(2)]);
var state_14813__$1 = state_14813;
var statearr_14827_14873 = state_14813__$1;
(statearr_14827_14873[(2)] = inst_14790);

(statearr_14827_14873[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14814 === (13))){
var inst_14751 = figwheel.client.heads_up.clear.call(null);
var state_14813__$1 = state_14813;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14813__$1,(16),inst_14751);
} else {
if((state_val_14814 === (22))){
var inst_14772 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_14773 = figwheel.client.heads_up.append_message.call(null,inst_14772);
var state_14813__$1 = state_14813;
var statearr_14828_14874 = state_14813__$1;
(statearr_14828_14874[(2)] = inst_14773);

(statearr_14828_14874[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14814 === (36))){
var inst_14799 = (state_14813[(2)]);
var state_14813__$1 = state_14813;
var statearr_14829_14875 = state_14813__$1;
(statearr_14829_14875[(2)] = inst_14799);

(statearr_14829_14875[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14814 === (29))){
var inst_14783 = (state_14813[(2)]);
var state_14813__$1 = state_14813;
var statearr_14830_14876 = state_14813__$1;
(statearr_14830_14876[(2)] = inst_14783);

(statearr_14830_14876[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14814 === (6))){
var inst_14732 = (state_14813[(7)]);
var state_14813__$1 = state_14813;
var statearr_14831_14877 = state_14813__$1;
(statearr_14831_14877[(2)] = inst_14732);

(statearr_14831_14877[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14814 === (28))){
var inst_14779 = (state_14813[(2)]);
var inst_14780 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_14781 = figwheel.client.heads_up.display_warning.call(null,inst_14780);
var state_14813__$1 = (function (){var statearr_14832 = state_14813;
(statearr_14832[(8)] = inst_14779);

return statearr_14832;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14813__$1,(29),inst_14781);
} else {
if((state_val_14814 === (25))){
var inst_14777 = figwheel.client.heads_up.clear.call(null);
var state_14813__$1 = state_14813;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14813__$1,(28),inst_14777);
} else {
if((state_val_14814 === (34))){
var inst_14794 = figwheel.client.heads_up.flash_loaded.call(null);
var state_14813__$1 = state_14813;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14813__$1,(37),inst_14794);
} else {
if((state_val_14814 === (17))){
var inst_14759 = (state_14813[(2)]);
var state_14813__$1 = state_14813;
var statearr_14833_14878 = state_14813__$1;
(statearr_14833_14878[(2)] = inst_14759);

(statearr_14833_14878[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14814 === (3))){
var inst_14749 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_14813__$1 = state_14813;
if(cljs.core.truth_(inst_14749)){
var statearr_14834_14879 = state_14813__$1;
(statearr_14834_14879[(1)] = (13));

} else {
var statearr_14835_14880 = state_14813__$1;
(statearr_14835_14880[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14814 === (12))){
var inst_14745 = (state_14813[(2)]);
var state_14813__$1 = state_14813;
var statearr_14836_14881 = state_14813__$1;
(statearr_14836_14881[(2)] = inst_14745);

(statearr_14836_14881[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14814 === (2))){
var inst_14732 = (state_14813[(7)]);
var inst_14732__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_14813__$1 = (function (){var statearr_14837 = state_14813;
(statearr_14837[(7)] = inst_14732__$1);

return statearr_14837;
})();
if(cljs.core.truth_(inst_14732__$1)){
var statearr_14838_14882 = state_14813__$1;
(statearr_14838_14882[(1)] = (5));

} else {
var statearr_14839_14883 = state_14813__$1;
(statearr_14839_14883[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14814 === (23))){
var inst_14775 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_14813__$1 = state_14813;
if(cljs.core.truth_(inst_14775)){
var statearr_14840_14884 = state_14813__$1;
(statearr_14840_14884[(1)] = (25));

} else {
var statearr_14841_14885 = state_14813__$1;
(statearr_14841_14885[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14814 === (35))){
var state_14813__$1 = state_14813;
var statearr_14842_14886 = state_14813__$1;
(statearr_14842_14886[(2)] = null);

(statearr_14842_14886[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14814 === (19))){
var inst_14770 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_14813__$1 = state_14813;
if(cljs.core.truth_(inst_14770)){
var statearr_14843_14887 = state_14813__$1;
(statearr_14843_14887[(1)] = (22));

} else {
var statearr_14844_14888 = state_14813__$1;
(statearr_14844_14888[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14814 === (11))){
var inst_14741 = (state_14813[(2)]);
var state_14813__$1 = state_14813;
var statearr_14845_14889 = state_14813__$1;
(statearr_14845_14889[(2)] = inst_14741);

(statearr_14845_14889[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14814 === (9))){
var inst_14743 = figwheel.client.heads_up.clear.call(null);
var state_14813__$1 = state_14813;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14813__$1,(12),inst_14743);
} else {
if((state_val_14814 === (5))){
var inst_14734 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_14813__$1 = state_14813;
var statearr_14846_14890 = state_14813__$1;
(statearr_14846_14890[(2)] = inst_14734);

(statearr_14846_14890[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14814 === (14))){
var inst_14761 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_14813__$1 = state_14813;
if(cljs.core.truth_(inst_14761)){
var statearr_14847_14891 = state_14813__$1;
(statearr_14847_14891[(1)] = (18));

} else {
var statearr_14848_14892 = state_14813__$1;
(statearr_14848_14892[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14814 === (26))){
var inst_14785 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_14813__$1 = state_14813;
if(cljs.core.truth_(inst_14785)){
var statearr_14849_14893 = state_14813__$1;
(statearr_14849_14893[(1)] = (30));

} else {
var statearr_14850_14894 = state_14813__$1;
(statearr_14850_14894[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14814 === (16))){
var inst_14753 = (state_14813[(2)]);
var inst_14754 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_14755 = figwheel.client.format_messages.call(null,inst_14754);
var inst_14756 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_14757 = figwheel.client.heads_up.display_error.call(null,inst_14755,inst_14756);
var state_14813__$1 = (function (){var statearr_14851 = state_14813;
(statearr_14851[(9)] = inst_14753);

return statearr_14851;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14813__$1,(17),inst_14757);
} else {
if((state_val_14814 === (30))){
var inst_14787 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_14788 = figwheel.client.heads_up.display_warning.call(null,inst_14787);
var state_14813__$1 = state_14813;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14813__$1,(33),inst_14788);
} else {
if((state_val_14814 === (10))){
var inst_14747 = (state_14813[(2)]);
var state_14813__$1 = state_14813;
var statearr_14852_14895 = state_14813__$1;
(statearr_14852_14895[(2)] = inst_14747);

(statearr_14852_14895[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14814 === (18))){
var inst_14763 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_14764 = figwheel.client.format_messages.call(null,inst_14763);
var inst_14765 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_14766 = figwheel.client.heads_up.display_error.call(null,inst_14764,inst_14765);
var state_14813__$1 = state_14813;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14813__$1,(21),inst_14766);
} else {
if((state_val_14814 === (37))){
var inst_14796 = (state_14813[(2)]);
var state_14813__$1 = state_14813;
var statearr_14853_14896 = state_14813__$1;
(statearr_14853_14896[(2)] = inst_14796);

(statearr_14853_14896[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14814 === (8))){
var inst_14739 = figwheel.client.heads_up.flash_loaded.call(null);
var state_14813__$1 = state_14813;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14813__$1,(11),inst_14739);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__9351__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__9239__auto__,c__9351__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__9240__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__9240__auto____0 = (function (){
var statearr_14857 = [null,null,null,null,null,null,null,null,null,null];
(statearr_14857[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__9240__auto__);

(statearr_14857[(1)] = (1));

return statearr_14857;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__9240__auto____1 = (function (state_14813){
while(true){
var ret_value__9241__auto__ = (function (){try{while(true){
var result__9242__auto__ = switch__9239__auto__.call(null,state_14813);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9242__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9242__auto__;
}
break;
}
}catch (e14858){if((e14858 instanceof Object)){
var ex__9243__auto__ = e14858;
var statearr_14859_14897 = state_14813;
(statearr_14859_14897[(5)] = ex__9243__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14813);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14858;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9241__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14898 = state_14813;
state_14813 = G__14898;
continue;
} else {
return ret_value__9241__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__9240__auto__ = function(state_14813){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__9240__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__9240__auto____1.call(this,state_14813);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__9240__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__9240__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__9240__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__9240__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__9240__auto__;
})()
;})(switch__9239__auto__,c__9351__auto__,msg_hist,msg_names,msg))
})();
var state__9353__auto__ = (function (){var statearr_14860 = f__9352__auto__.call(null);
(statearr_14860[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9351__auto__);

return statearr_14860;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9353__auto__);
});})(c__9351__auto__,msg_hist,msg_names,msg))
);

return c__9351__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__9351__auto___14961 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9351__auto___14961,ch){
return (function (){
var f__9352__auto__ = (function (){var switch__9239__auto__ = ((function (c__9351__auto___14961,ch){
return (function (state_14944){
var state_val_14945 = (state_14944[(1)]);
if((state_val_14945 === (1))){
var state_14944__$1 = state_14944;
var statearr_14946_14962 = state_14944__$1;
(statearr_14946_14962[(2)] = null);

(statearr_14946_14962[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14945 === (2))){
var state_14944__$1 = state_14944;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14944__$1,(4),ch);
} else {
if((state_val_14945 === (3))){
var inst_14942 = (state_14944[(2)]);
var state_14944__$1 = state_14944;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14944__$1,inst_14942);
} else {
if((state_val_14945 === (4))){
var inst_14932 = (state_14944[(7)]);
var inst_14932__$1 = (state_14944[(2)]);
var state_14944__$1 = (function (){var statearr_14947 = state_14944;
(statearr_14947[(7)] = inst_14932__$1);

return statearr_14947;
})();
if(cljs.core.truth_(inst_14932__$1)){
var statearr_14948_14963 = state_14944__$1;
(statearr_14948_14963[(1)] = (5));

} else {
var statearr_14949_14964 = state_14944__$1;
(statearr_14949_14964[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14945 === (5))){
var inst_14932 = (state_14944[(7)]);
var inst_14934 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_14932);
var state_14944__$1 = state_14944;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14944__$1,(8),inst_14934);
} else {
if((state_val_14945 === (6))){
var state_14944__$1 = state_14944;
var statearr_14950_14965 = state_14944__$1;
(statearr_14950_14965[(2)] = null);

(statearr_14950_14965[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14945 === (7))){
var inst_14940 = (state_14944[(2)]);
var state_14944__$1 = state_14944;
var statearr_14951_14966 = state_14944__$1;
(statearr_14951_14966[(2)] = inst_14940);

(statearr_14951_14966[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14945 === (8))){
var inst_14936 = (state_14944[(2)]);
var state_14944__$1 = (function (){var statearr_14952 = state_14944;
(statearr_14952[(8)] = inst_14936);

return statearr_14952;
})();
var statearr_14953_14967 = state_14944__$1;
(statearr_14953_14967[(2)] = null);

(statearr_14953_14967[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__9351__auto___14961,ch))
;
return ((function (switch__9239__auto__,c__9351__auto___14961,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__9240__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__9240__auto____0 = (function (){
var statearr_14957 = [null,null,null,null,null,null,null,null,null];
(statearr_14957[(0)] = figwheel$client$heads_up_plugin_$_state_machine__9240__auto__);

(statearr_14957[(1)] = (1));

return statearr_14957;
});
var figwheel$client$heads_up_plugin_$_state_machine__9240__auto____1 = (function (state_14944){
while(true){
var ret_value__9241__auto__ = (function (){try{while(true){
var result__9242__auto__ = switch__9239__auto__.call(null,state_14944);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9242__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9242__auto__;
}
break;
}
}catch (e14958){if((e14958 instanceof Object)){
var ex__9243__auto__ = e14958;
var statearr_14959_14968 = state_14944;
(statearr_14959_14968[(5)] = ex__9243__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14944);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14958;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9241__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14969 = state_14944;
state_14944 = G__14969;
continue;
} else {
return ret_value__9241__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__9240__auto__ = function(state_14944){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__9240__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__9240__auto____1.call(this,state_14944);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__9240__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__9240__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__9240__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__9240__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__9240__auto__;
})()
;})(switch__9239__auto__,c__9351__auto___14961,ch))
})();
var state__9353__auto__ = (function (){var statearr_14960 = f__9352__auto__.call(null);
(statearr_14960[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9351__auto___14961);

return statearr_14960;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9353__auto__);
});})(c__9351__auto___14961,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__9351__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9351__auto__){
return (function (){
var f__9352__auto__ = (function (){var switch__9239__auto__ = ((function (c__9351__auto__){
return (function (state_14990){
var state_val_14991 = (state_14990[(1)]);
if((state_val_14991 === (1))){
var inst_14985 = cljs.core.async.timeout.call(null,(3000));
var state_14990__$1 = state_14990;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14990__$1,(2),inst_14985);
} else {
if((state_val_14991 === (2))){
var inst_14987 = (state_14990[(2)]);
var inst_14988 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_14990__$1 = (function (){var statearr_14992 = state_14990;
(statearr_14992[(7)] = inst_14987);

return statearr_14992;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14990__$1,inst_14988);
} else {
return null;
}
}
});})(c__9351__auto__))
;
return ((function (switch__9239__auto__,c__9351__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__9240__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__9240__auto____0 = (function (){
var statearr_14996 = [null,null,null,null,null,null,null,null];
(statearr_14996[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__9240__auto__);

(statearr_14996[(1)] = (1));

return statearr_14996;
});
var figwheel$client$enforce_project_plugin_$_state_machine__9240__auto____1 = (function (state_14990){
while(true){
var ret_value__9241__auto__ = (function (){try{while(true){
var result__9242__auto__ = switch__9239__auto__.call(null,state_14990);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9242__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9242__auto__;
}
break;
}
}catch (e14997){if((e14997 instanceof Object)){
var ex__9243__auto__ = e14997;
var statearr_14998_15000 = state_14990;
(statearr_14998_15000[(5)] = ex__9243__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14990);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14997;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9241__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15001 = state_14990;
state_14990 = G__15001;
continue;
} else {
return ret_value__9241__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__9240__auto__ = function(state_14990){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__9240__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__9240__auto____1.call(this,state_14990);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__9240__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__9240__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__9240__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__9240__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__9240__auto__;
})()
;})(switch__9239__auto__,c__9351__auto__))
})();
var state__9353__auto__ = (function (){var statearr_14999 = f__9352__auto__.call(null);
(statearr_14999[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9351__auto__);

return statearr_14999;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9353__auto__);
});})(c__9351__auto__))
);

return c__9351__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__15002){
var map__15009 = p__15002;
var map__15009__$1 = ((((!((map__15009 == null)))?((((map__15009.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15009.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15009):map__15009);
var ed = map__15009__$1;
var formatted_exception = cljs.core.get.call(null,map__15009__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__15009__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__15009__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__15011_15015 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__15012_15016 = null;
var count__15013_15017 = (0);
var i__15014_15018 = (0);
while(true){
if((i__15014_15018 < count__15013_15017)){
var msg_15019 = cljs.core._nth.call(null,chunk__15012_15016,i__15014_15018);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_15019);

var G__15020 = seq__15011_15015;
var G__15021 = chunk__15012_15016;
var G__15022 = count__15013_15017;
var G__15023 = (i__15014_15018 + (1));
seq__15011_15015 = G__15020;
chunk__15012_15016 = G__15021;
count__15013_15017 = G__15022;
i__15014_15018 = G__15023;
continue;
} else {
var temp__4657__auto___15024 = cljs.core.seq.call(null,seq__15011_15015);
if(temp__4657__auto___15024){
var seq__15011_15025__$1 = temp__4657__auto___15024;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15011_15025__$1)){
var c__7018__auto___15026 = cljs.core.chunk_first.call(null,seq__15011_15025__$1);
var G__15027 = cljs.core.chunk_rest.call(null,seq__15011_15025__$1);
var G__15028 = c__7018__auto___15026;
var G__15029 = cljs.core.count.call(null,c__7018__auto___15026);
var G__15030 = (0);
seq__15011_15015 = G__15027;
chunk__15012_15016 = G__15028;
count__15013_15017 = G__15029;
i__15014_15018 = G__15030;
continue;
} else {
var msg_15031 = cljs.core.first.call(null,seq__15011_15025__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_15031);

var G__15032 = cljs.core.next.call(null,seq__15011_15025__$1);
var G__15033 = null;
var G__15034 = (0);
var G__15035 = (0);
seq__15011_15015 = G__15032;
chunk__15012_15016 = G__15033;
count__15013_15017 = G__15034;
i__15014_15018 = G__15035;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__15036){
var map__15039 = p__15036;
var map__15039__$1 = ((((!((map__15039 == null)))?((((map__15039.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15039.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15039):map__15039);
var w = map__15039__$1;
var message = cljs.core.get.call(null,map__15039__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,true,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__6195__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__6195__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__6195__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__15047 = cljs.core.seq.call(null,plugins);
var chunk__15048 = null;
var count__15049 = (0);
var i__15050 = (0);
while(true){
if((i__15050 < count__15049)){
var vec__15051 = cljs.core._nth.call(null,chunk__15048,i__15050);
var k = cljs.core.nth.call(null,vec__15051,(0),null);
var plugin = cljs.core.nth.call(null,vec__15051,(1),null);
if(cljs.core.truth_(plugin)){
var pl_15053 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__15047,chunk__15048,count__15049,i__15050,pl_15053,vec__15051,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_15053.call(null,msg_hist);
});})(seq__15047,chunk__15048,count__15049,i__15050,pl_15053,vec__15051,k,plugin))
);
} else {
}

var G__15054 = seq__15047;
var G__15055 = chunk__15048;
var G__15056 = count__15049;
var G__15057 = (i__15050 + (1));
seq__15047 = G__15054;
chunk__15048 = G__15055;
count__15049 = G__15056;
i__15050 = G__15057;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__15047);
if(temp__4657__auto__){
var seq__15047__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15047__$1)){
var c__7018__auto__ = cljs.core.chunk_first.call(null,seq__15047__$1);
var G__15058 = cljs.core.chunk_rest.call(null,seq__15047__$1);
var G__15059 = c__7018__auto__;
var G__15060 = cljs.core.count.call(null,c__7018__auto__);
var G__15061 = (0);
seq__15047 = G__15058;
chunk__15048 = G__15059;
count__15049 = G__15060;
i__15050 = G__15061;
continue;
} else {
var vec__15052 = cljs.core.first.call(null,seq__15047__$1);
var k = cljs.core.nth.call(null,vec__15052,(0),null);
var plugin = cljs.core.nth.call(null,vec__15052,(1),null);
if(cljs.core.truth_(plugin)){
var pl_15062 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__15047,chunk__15048,count__15049,i__15050,pl_15062,vec__15052,k,plugin,seq__15047__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_15062.call(null,msg_hist);
});})(seq__15047,chunk__15048,count__15049,i__15050,pl_15062,vec__15052,k,plugin,seq__15047__$1,temp__4657__auto__))
);
} else {
}

var G__15063 = cljs.core.next.call(null,seq__15047__$1);
var G__15064 = null;
var G__15065 = (0);
var G__15066 = (0);
seq__15047 = G__15063;
chunk__15048 = G__15064;
count__15049 = G__15065;
i__15050 = G__15066;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args15067 = [];
var len__7276__auto___15070 = arguments.length;
var i__7277__auto___15071 = (0);
while(true){
if((i__7277__auto___15071 < len__7276__auto___15070)){
args15067.push((arguments[i__7277__auto___15071]));

var G__15072 = (i__7277__auto___15071 + (1));
i__7277__auto___15071 = G__15072;
continue;
} else {
}
break;
}

var G__15069 = args15067.length;
switch (G__15069) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15067.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__7283__auto__ = [];
var len__7276__auto___15078 = arguments.length;
var i__7277__auto___15079 = (0);
while(true){
if((i__7277__auto___15079 < len__7276__auto___15078)){
args__7283__auto__.push((arguments[i__7277__auto___15079]));

var G__15080 = (i__7277__auto___15079 + (1));
i__7277__auto___15079 = G__15080;
continue;
} else {
}
break;
}

var argseq__7284__auto__ = ((((0) < args__7283__auto__.length))?(new cljs.core.IndexedSeq(args__7283__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__7284__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__15075){
var map__15076 = p__15075;
var map__15076__$1 = ((((!((map__15076 == null)))?((((map__15076.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15076.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15076):map__15076);
var opts = map__15076__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq15074){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15074));
});

//# sourceMappingURL=client.js.map