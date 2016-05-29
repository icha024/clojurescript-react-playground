// Compiled by ClojureScript 1.8.40 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__13935_13949 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__13936_13950 = null;
var count__13937_13951 = (0);
var i__13938_13952 = (0);
while(true){
if((i__13938_13952 < count__13937_13951)){
var f_13953 = cljs.core._nth.call(null,chunk__13936_13950,i__13938_13952);
cljs.core.println.call(null,"  ",f_13953);

var G__13954 = seq__13935_13949;
var G__13955 = chunk__13936_13950;
var G__13956 = count__13937_13951;
var G__13957 = (i__13938_13952 + (1));
seq__13935_13949 = G__13954;
chunk__13936_13950 = G__13955;
count__13937_13951 = G__13956;
i__13938_13952 = G__13957;
continue;
} else {
var temp__4657__auto___13958 = cljs.core.seq.call(null,seq__13935_13949);
if(temp__4657__auto___13958){
var seq__13935_13959__$1 = temp__4657__auto___13958;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13935_13959__$1)){
var c__7018__auto___13960 = cljs.core.chunk_first.call(null,seq__13935_13959__$1);
var G__13961 = cljs.core.chunk_rest.call(null,seq__13935_13959__$1);
var G__13962 = c__7018__auto___13960;
var G__13963 = cljs.core.count.call(null,c__7018__auto___13960);
var G__13964 = (0);
seq__13935_13949 = G__13961;
chunk__13936_13950 = G__13962;
count__13937_13951 = G__13963;
i__13938_13952 = G__13964;
continue;
} else {
var f_13965 = cljs.core.first.call(null,seq__13935_13959__$1);
cljs.core.println.call(null,"  ",f_13965);

var G__13966 = cljs.core.next.call(null,seq__13935_13959__$1);
var G__13967 = null;
var G__13968 = (0);
var G__13969 = (0);
seq__13935_13949 = G__13966;
chunk__13936_13950 = G__13967;
count__13937_13951 = G__13968;
i__13938_13952 = G__13969;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_13970 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__6207__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__6207__auto__)){
return or__6207__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_13970);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_13970)))?cljs.core.second.call(null,arglists_13970):arglists_13970));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__13939 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__13940 = null;
var count__13941 = (0);
var i__13942 = (0);
while(true){
if((i__13942 < count__13941)){
var vec__13943 = cljs.core._nth.call(null,chunk__13940,i__13942);
var name = cljs.core.nth.call(null,vec__13943,(0),null);
var map__13944 = cljs.core.nth.call(null,vec__13943,(1),null);
var map__13944__$1 = ((((!((map__13944 == null)))?((((map__13944.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13944.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13944):map__13944);
var doc = cljs.core.get.call(null,map__13944__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__13944__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__13971 = seq__13939;
var G__13972 = chunk__13940;
var G__13973 = count__13941;
var G__13974 = (i__13942 + (1));
seq__13939 = G__13971;
chunk__13940 = G__13972;
count__13941 = G__13973;
i__13942 = G__13974;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__13939);
if(temp__4657__auto__){
var seq__13939__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13939__$1)){
var c__7018__auto__ = cljs.core.chunk_first.call(null,seq__13939__$1);
var G__13975 = cljs.core.chunk_rest.call(null,seq__13939__$1);
var G__13976 = c__7018__auto__;
var G__13977 = cljs.core.count.call(null,c__7018__auto__);
var G__13978 = (0);
seq__13939 = G__13975;
chunk__13940 = G__13976;
count__13941 = G__13977;
i__13942 = G__13978;
continue;
} else {
var vec__13946 = cljs.core.first.call(null,seq__13939__$1);
var name = cljs.core.nth.call(null,vec__13946,(0),null);
var map__13947 = cljs.core.nth.call(null,vec__13946,(1),null);
var map__13947__$1 = ((((!((map__13947 == null)))?((((map__13947.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13947.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13947):map__13947);
var doc = cljs.core.get.call(null,map__13947__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__13947__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__13979 = cljs.core.next.call(null,seq__13939__$1);
var G__13980 = null;
var G__13981 = (0);
var G__13982 = (0);
seq__13939 = G__13979;
chunk__13940 = G__13980;
count__13941 = G__13981;
i__13942 = G__13982;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map