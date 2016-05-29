// Compiled by ClojureScript 1.8.40 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('cljs.core.async');
goog.require('goog.string');

figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(var_args){
var args__7283__auto__ = [];
var len__7276__auto___14120 = arguments.length;
var i__7277__auto___14121 = (0);
while(true){
if((i__7277__auto___14121 < len__7276__auto___14120)){
args__7283__auto__.push((arguments[i__7277__auto___14121]));

var G__14122 = (i__7277__auto___14121 + (1));
i__7277__auto___14121 = G__14122;
continue;
} else {
}
break;
}

var argseq__7284__auto__ = ((((2) < args__7283__auto__.length))?(new cljs.core.IndexedSeq(args__7283__auto__.slice((2)),(0),null)):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7284__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__14112_14123 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__14113_14124 = null;
var count__14114_14125 = (0);
var i__14115_14126 = (0);
while(true){
if((i__14115_14126 < count__14114_14125)){
var k_14127 = cljs.core._nth.call(null,chunk__14113_14124,i__14115_14126);
e.setAttribute(cljs.core.name.call(null,k_14127),cljs.core.get.call(null,attrs,k_14127));

var G__14128 = seq__14112_14123;
var G__14129 = chunk__14113_14124;
var G__14130 = count__14114_14125;
var G__14131 = (i__14115_14126 + (1));
seq__14112_14123 = G__14128;
chunk__14113_14124 = G__14129;
count__14114_14125 = G__14130;
i__14115_14126 = G__14131;
continue;
} else {
var temp__4657__auto___14132 = cljs.core.seq.call(null,seq__14112_14123);
if(temp__4657__auto___14132){
var seq__14112_14133__$1 = temp__4657__auto___14132;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14112_14133__$1)){
var c__7018__auto___14134 = cljs.core.chunk_first.call(null,seq__14112_14133__$1);
var G__14135 = cljs.core.chunk_rest.call(null,seq__14112_14133__$1);
var G__14136 = c__7018__auto___14134;
var G__14137 = cljs.core.count.call(null,c__7018__auto___14134);
var G__14138 = (0);
seq__14112_14123 = G__14135;
chunk__14113_14124 = G__14136;
count__14114_14125 = G__14137;
i__14115_14126 = G__14138;
continue;
} else {
var k_14139 = cljs.core.first.call(null,seq__14112_14133__$1);
e.setAttribute(cljs.core.name.call(null,k_14139),cljs.core.get.call(null,attrs,k_14139));

var G__14140 = cljs.core.next.call(null,seq__14112_14133__$1);
var G__14141 = null;
var G__14142 = (0);
var G__14143 = (0);
seq__14112_14123 = G__14140;
chunk__14113_14124 = G__14141;
count__14114_14125 = G__14142;
i__14115_14126 = G__14143;
continue;
}
} else {
}
}
break;
}

var seq__14116_14144 = cljs.core.seq.call(null,children);
var chunk__14117_14145 = null;
var count__14118_14146 = (0);
var i__14119_14147 = (0);
while(true){
if((i__14119_14147 < count__14118_14146)){
var ch_14148 = cljs.core._nth.call(null,chunk__14117_14145,i__14119_14147);
e.appendChild(ch_14148);

var G__14149 = seq__14116_14144;
var G__14150 = chunk__14117_14145;
var G__14151 = count__14118_14146;
var G__14152 = (i__14119_14147 + (1));
seq__14116_14144 = G__14149;
chunk__14117_14145 = G__14150;
count__14118_14146 = G__14151;
i__14119_14147 = G__14152;
continue;
} else {
var temp__4657__auto___14153 = cljs.core.seq.call(null,seq__14116_14144);
if(temp__4657__auto___14153){
var seq__14116_14154__$1 = temp__4657__auto___14153;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14116_14154__$1)){
var c__7018__auto___14155 = cljs.core.chunk_first.call(null,seq__14116_14154__$1);
var G__14156 = cljs.core.chunk_rest.call(null,seq__14116_14154__$1);
var G__14157 = c__7018__auto___14155;
var G__14158 = cljs.core.count.call(null,c__7018__auto___14155);
var G__14159 = (0);
seq__14116_14144 = G__14156;
chunk__14117_14145 = G__14157;
count__14118_14146 = G__14158;
i__14119_14147 = G__14159;
continue;
} else {
var ch_14160 = cljs.core.first.call(null,seq__14116_14154__$1);
e.appendChild(ch_14160);

var G__14161 = cljs.core.next.call(null,seq__14116_14154__$1);
var G__14162 = null;
var G__14163 = (0);
var G__14164 = (0);
seq__14116_14144 = G__14161;
chunk__14117_14145 = G__14162;
count__14118_14146 = G__14163;
i__14119_14147 = G__14164;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq14109){
var G__14110 = cljs.core.first.call(null,seq14109);
var seq14109__$1 = cljs.core.next.call(null,seq14109);
var G__14111 = cljs.core.first.call(null,seq14109__$1);
var seq14109__$2 = cljs.core.next.call(null,seq14109__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__14110,G__14111,seq14109__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__7131__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__7132__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__7133__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__7134__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__7135__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__7131__auto__,prefer_table__7132__auto__,method_cache__7133__auto__,cached_hierarchy__7134__auto__,hierarchy__7135__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__7131__auto__,prefer_table__7132__auto__,method_cache__7133__auto__,cached_hierarchy__7134__auto__,hierarchy__7135__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__7135__auto__,method_table__7131__auto__,prefer_table__7132__auto__,method_cache__7133__auto__,cached_hierarchy__7134__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_14165 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_14165.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_14165.innerHTML = figwheel.client.heads_up.cljs_logo_svg;

el_14165.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_14165);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__14166,st_map){
var map__14171 = p__14166;
var map__14171__$1 = ((((!((map__14171 == null)))?((((map__14171.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14171.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14171):map__14171);
var container_el = cljs.core.get.call(null,map__14171__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__14171,map__14171__$1,container_el){
return (function (p__14173){
var vec__14174 = p__14173;
var k = cljs.core.nth.call(null,vec__14174,(0),null);
var v = cljs.core.nth.call(null,vec__14174,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__14171,map__14171__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__14175,dom_str){
var map__14178 = p__14175;
var map__14178__$1 = ((((!((map__14178 == null)))?((((map__14178.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14178.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14178):map__14178);
var c = map__14178__$1;
var content_area_el = cljs.core.get.call(null,map__14178__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__14180){
var map__14183 = p__14180;
var map__14183__$1 = ((((!((map__14183 == null)))?((((map__14183.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14183.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14183):map__14183);
var content_area_el = cljs.core.get.call(null,map__14183__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__9351__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9351__auto__){
return (function (){
var f__9352__auto__ = (function (){var switch__9239__auto__ = ((function (c__9351__auto__){
return (function (state_14226){
var state_val_14227 = (state_14226[(1)]);
if((state_val_14227 === (1))){
var inst_14211 = (state_14226[(7)]);
var inst_14211__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_14212 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_14213 = ["10px","10px","100%","68px","1.0"];
var inst_14214 = cljs.core.PersistentHashMap.fromArrays(inst_14212,inst_14213);
var inst_14215 = cljs.core.merge.call(null,inst_14214,style);
var inst_14216 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_14211__$1,inst_14215);
var inst_14217 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_14211__$1,msg);
var inst_14218 = cljs.core.async.timeout.call(null,(300));
var state_14226__$1 = (function (){var statearr_14228 = state_14226;
(statearr_14228[(7)] = inst_14211__$1);

(statearr_14228[(8)] = inst_14216);

(statearr_14228[(9)] = inst_14217);

return statearr_14228;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14226__$1,(2),inst_14218);
} else {
if((state_val_14227 === (2))){
var inst_14211 = (state_14226[(7)]);
var inst_14220 = (state_14226[(2)]);
var inst_14221 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_14222 = ["auto"];
var inst_14223 = cljs.core.PersistentHashMap.fromArrays(inst_14221,inst_14222);
var inst_14224 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_14211,inst_14223);
var state_14226__$1 = (function (){var statearr_14229 = state_14226;
(statearr_14229[(10)] = inst_14220);

return statearr_14229;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14226__$1,inst_14224);
} else {
return null;
}
}
});})(c__9351__auto__))
;
return ((function (switch__9239__auto__,c__9351__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__9240__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__9240__auto____0 = (function (){
var statearr_14233 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14233[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__9240__auto__);

(statearr_14233[(1)] = (1));

return statearr_14233;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__9240__auto____1 = (function (state_14226){
while(true){
var ret_value__9241__auto__ = (function (){try{while(true){
var result__9242__auto__ = switch__9239__auto__.call(null,state_14226);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9242__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9242__auto__;
}
break;
}
}catch (e14234){if((e14234 instanceof Object)){
var ex__9243__auto__ = e14234;
var statearr_14235_14237 = state_14226;
(statearr_14235_14237[(5)] = ex__9243__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14226);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14234;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9241__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14238 = state_14226;
state_14226 = G__14238;
continue;
} else {
return ret_value__9241__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__9240__auto__ = function(state_14226){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__9240__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__9240__auto____1.call(this,state_14226);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__9240__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__9240__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__9240__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__9240__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__9240__auto__;
})()
;})(switch__9239__auto__,c__9351__auto__))
})();
var state__9353__auto__ = (function (){var statearr_14236 = f__9352__auto__.call(null);
(statearr_14236[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9351__auto__);

return statearr_14236;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9353__auto__);
});})(c__9351__auto__))
);

return c__9351__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function figwheel$client$heads_up$file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg){
var msg__$1 = goog.string.htmlEscape(msg);
var temp__4655__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg__$1);
if(cljs.core.truth_(temp__4655__auto__)){
var vec__14240 = temp__4655__auto__;
var f = cljs.core.nth.call(null,vec__14240,(0),null);
var ln = cljs.core.nth.call(null,vec__14240,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg__$1);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg__$1),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__14243 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__14243,(0),null);
var file_line = cljs.core.nth.call(null,vec__14243,(1),null);
var file_column = cljs.core.nth.call(null,vec__14243,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__14243,file_name,file_line,file_column){
return (function (p1__14241_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(goog.string.htmlEscape(p1__14241_SHARP_)),cljs.core.str("</div>")].join('');
});})(vec__14243,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__6207__auto__ = file_line;
if(cljs.core.truth_(or__6207__auto__)){
return or__6207__auto__;
} else {
var and__6195__auto__ = cause;
if(cljs.core.truth_(and__6195__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__6195__auto__;
}
}
})(),[cljs.core.str(msg),cljs.core.str((cljs.core.truth_(cause)?[cljs.core.str("Error on file "),cljs.core.str(goog.string.htmlEscape(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause))),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''):""))].join('')))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function figwheel$client$heads_up$append_message(message){
var map__14246 = figwheel.client.heads_up.ensure_container.call(null);
var map__14246__$1 = ((((!((map__14246 == null)))?((((map__14246.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14246.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14246):map__14246);
var content_area_el = cljs.core.get.call(null,map__14246__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__9351__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9351__auto__){
return (function (){
var f__9352__auto__ = (function (){var switch__9239__auto__ = ((function (c__9351__auto__){
return (function (state_14294){
var state_val_14295 = (state_14294[(1)]);
if((state_val_14295 === (1))){
var inst_14277 = (state_14294[(7)]);
var inst_14277__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_14278 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_14279 = ["0.0"];
var inst_14280 = cljs.core.PersistentHashMap.fromArrays(inst_14278,inst_14279);
var inst_14281 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_14277__$1,inst_14280);
var inst_14282 = cljs.core.async.timeout.call(null,(300));
var state_14294__$1 = (function (){var statearr_14296 = state_14294;
(statearr_14296[(8)] = inst_14281);

(statearr_14296[(7)] = inst_14277__$1);

return statearr_14296;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14294__$1,(2),inst_14282);
} else {
if((state_val_14295 === (2))){
var inst_14277 = (state_14294[(7)]);
var inst_14284 = (state_14294[(2)]);
var inst_14285 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_14286 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_14287 = cljs.core.PersistentHashMap.fromArrays(inst_14285,inst_14286);
var inst_14288 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_14277,inst_14287);
var inst_14289 = cljs.core.async.timeout.call(null,(200));
var state_14294__$1 = (function (){var statearr_14297 = state_14294;
(statearr_14297[(9)] = inst_14284);

(statearr_14297[(10)] = inst_14288);

return statearr_14297;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14294__$1,(3),inst_14289);
} else {
if((state_val_14295 === (3))){
var inst_14277 = (state_14294[(7)]);
var inst_14291 = (state_14294[(2)]);
var inst_14292 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_14277,"");
var state_14294__$1 = (function (){var statearr_14298 = state_14294;
(statearr_14298[(11)] = inst_14291);

return statearr_14298;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14294__$1,inst_14292);
} else {
return null;
}
}
}
});})(c__9351__auto__))
;
return ((function (switch__9239__auto__,c__9351__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__9240__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__9240__auto____0 = (function (){
var statearr_14302 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14302[(0)] = figwheel$client$heads_up$clear_$_state_machine__9240__auto__);

(statearr_14302[(1)] = (1));

return statearr_14302;
});
var figwheel$client$heads_up$clear_$_state_machine__9240__auto____1 = (function (state_14294){
while(true){
var ret_value__9241__auto__ = (function (){try{while(true){
var result__9242__auto__ = switch__9239__auto__.call(null,state_14294);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9242__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9242__auto__;
}
break;
}
}catch (e14303){if((e14303 instanceof Object)){
var ex__9243__auto__ = e14303;
var statearr_14304_14306 = state_14294;
(statearr_14304_14306[(5)] = ex__9243__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14294);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14303;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9241__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14307 = state_14294;
state_14294 = G__14307;
continue;
} else {
return ret_value__9241__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__9240__auto__ = function(state_14294){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__9240__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__9240__auto____1.call(this,state_14294);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__9240__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__9240__auto____0;
figwheel$client$heads_up$clear_$_state_machine__9240__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__9240__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__9240__auto__;
})()
;})(switch__9239__auto__,c__9351__auto__))
})();
var state__9353__auto__ = (function (){var statearr_14305 = f__9352__auto__.call(null);
(statearr_14305[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9351__auto__);

return statearr_14305;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9353__auto__);
});})(c__9351__auto__))
);

return c__9351__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__9351__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9351__auto__){
return (function (){
var f__9352__auto__ = (function (){var switch__9239__auto__ = ((function (c__9351__auto__){
return (function (state_14339){
var state_val_14340 = (state_14339[(1)]);
if((state_val_14340 === (1))){
var inst_14329 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_14339__$1 = state_14339;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14339__$1,(2),inst_14329);
} else {
if((state_val_14340 === (2))){
var inst_14331 = (state_14339[(2)]);
var inst_14332 = cljs.core.async.timeout.call(null,(400));
var state_14339__$1 = (function (){var statearr_14341 = state_14339;
(statearr_14341[(7)] = inst_14331);

return statearr_14341;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14339__$1,(3),inst_14332);
} else {
if((state_val_14340 === (3))){
var inst_14334 = (state_14339[(2)]);
var inst_14335 = figwheel.client.heads_up.clear.call(null);
var state_14339__$1 = (function (){var statearr_14342 = state_14339;
(statearr_14342[(8)] = inst_14334);

return statearr_14342;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14339__$1,(4),inst_14335);
} else {
if((state_val_14340 === (4))){
var inst_14337 = (state_14339[(2)]);
var state_14339__$1 = state_14339;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14339__$1,inst_14337);
} else {
return null;
}
}
}
}
});})(c__9351__auto__))
;
return ((function (switch__9239__auto__,c__9351__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__9240__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__9240__auto____0 = (function (){
var statearr_14346 = [null,null,null,null,null,null,null,null,null];
(statearr_14346[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__9240__auto__);

(statearr_14346[(1)] = (1));

return statearr_14346;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__9240__auto____1 = (function (state_14339){
while(true){
var ret_value__9241__auto__ = (function (){try{while(true){
var result__9242__auto__ = switch__9239__auto__.call(null,state_14339);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9242__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9242__auto__;
}
break;
}
}catch (e14347){if((e14347 instanceof Object)){
var ex__9243__auto__ = e14347;
var statearr_14348_14350 = state_14339;
(statearr_14348_14350[(5)] = ex__9243__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14339);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14347;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9241__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14351 = state_14339;
state_14339 = G__14351;
continue;
} else {
return ret_value__9241__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__9240__auto__ = function(state_14339){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__9240__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__9240__auto____1.call(this,state_14339);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__9240__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__9240__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__9240__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__9240__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__9240__auto__;
})()
;})(switch__9239__auto__,c__9351__auto__))
})();
var state__9353__auto__ = (function (){var statearr_14349 = f__9352__auto__.call(null);
(statearr_14349[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9351__auto__);

return statearr_14349;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9353__auto__);
});})(c__9351__auto__))
);

return c__9351__auto__;
});
figwheel.client.heads_up.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' style='position:absolute; top:9px; left: 10px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";

//# sourceMappingURL=heads_up.js.map