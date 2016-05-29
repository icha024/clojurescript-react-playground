// Compiled by ClojureScript 1.8.40 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__6207__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__6207__auto__){
return or__6207__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__6207__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__6207__auto__)){
return or__6207__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__12245_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__12245_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__12250 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__12251 = null;
var count__12252 = (0);
var i__12253 = (0);
while(true){
if((i__12253 < count__12252)){
var n = cljs.core._nth.call(null,chunk__12251,i__12253);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__12254 = seq__12250;
var G__12255 = chunk__12251;
var G__12256 = count__12252;
var G__12257 = (i__12253 + (1));
seq__12250 = G__12254;
chunk__12251 = G__12255;
count__12252 = G__12256;
i__12253 = G__12257;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__12250);
if(temp__4657__auto__){
var seq__12250__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12250__$1)){
var c__7018__auto__ = cljs.core.chunk_first.call(null,seq__12250__$1);
var G__12258 = cljs.core.chunk_rest.call(null,seq__12250__$1);
var G__12259 = c__7018__auto__;
var G__12260 = cljs.core.count.call(null,c__7018__auto__);
var G__12261 = (0);
seq__12250 = G__12258;
chunk__12251 = G__12259;
count__12252 = G__12260;
i__12253 = G__12261;
continue;
} else {
var n = cljs.core.first.call(null,seq__12250__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__12262 = cljs.core.next.call(null,seq__12250__$1);
var G__12263 = null;
var G__12264 = (0);
var G__12265 = (0);
seq__12250 = G__12262;
chunk__12251 = G__12263;
count__12252 = G__12264;
i__12253 = G__12265;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__12304_12311 = cljs.core.seq.call(null,deps);
var chunk__12305_12312 = null;
var count__12306_12313 = (0);
var i__12307_12314 = (0);
while(true){
if((i__12307_12314 < count__12306_12313)){
var dep_12315 = cljs.core._nth.call(null,chunk__12305_12312,i__12307_12314);
topo_sort_helper_STAR_.call(null,dep_12315,(depth + (1)),state);

var G__12316 = seq__12304_12311;
var G__12317 = chunk__12305_12312;
var G__12318 = count__12306_12313;
var G__12319 = (i__12307_12314 + (1));
seq__12304_12311 = G__12316;
chunk__12305_12312 = G__12317;
count__12306_12313 = G__12318;
i__12307_12314 = G__12319;
continue;
} else {
var temp__4657__auto___12320 = cljs.core.seq.call(null,seq__12304_12311);
if(temp__4657__auto___12320){
var seq__12304_12321__$1 = temp__4657__auto___12320;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12304_12321__$1)){
var c__7018__auto___12322 = cljs.core.chunk_first.call(null,seq__12304_12321__$1);
var G__12323 = cljs.core.chunk_rest.call(null,seq__12304_12321__$1);
var G__12324 = c__7018__auto___12322;
var G__12325 = cljs.core.count.call(null,c__7018__auto___12322);
var G__12326 = (0);
seq__12304_12311 = G__12323;
chunk__12305_12312 = G__12324;
count__12306_12313 = G__12325;
i__12307_12314 = G__12326;
continue;
} else {
var dep_12327 = cljs.core.first.call(null,seq__12304_12321__$1);
topo_sort_helper_STAR_.call(null,dep_12327,(depth + (1)),state);

var G__12328 = cljs.core.next.call(null,seq__12304_12321__$1);
var G__12329 = null;
var G__12330 = (0);
var G__12331 = (0);
seq__12304_12311 = G__12328;
chunk__12305_12312 = G__12329;
count__12306_12313 = G__12330;
i__12307_12314 = G__12331;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__12308){
var vec__12310 = p__12308;
var x = cljs.core.nth.call(null,vec__12310,(0),null);
var xs = cljs.core.nthnext.call(null,vec__12310,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__12310,x,xs,get_deps__$1){
return (function (p1__12266_SHARP_){
return clojure.set.difference.call(null,p1__12266_SHARP_,x);
});})(vec__12310,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__12344 = cljs.core.seq.call(null,provides);
var chunk__12345 = null;
var count__12346 = (0);
var i__12347 = (0);
while(true){
if((i__12347 < count__12346)){
var prov = cljs.core._nth.call(null,chunk__12345,i__12347);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__12348_12356 = cljs.core.seq.call(null,requires);
var chunk__12349_12357 = null;
var count__12350_12358 = (0);
var i__12351_12359 = (0);
while(true){
if((i__12351_12359 < count__12350_12358)){
var req_12360 = cljs.core._nth.call(null,chunk__12349_12357,i__12351_12359);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_12360,prov);

var G__12361 = seq__12348_12356;
var G__12362 = chunk__12349_12357;
var G__12363 = count__12350_12358;
var G__12364 = (i__12351_12359 + (1));
seq__12348_12356 = G__12361;
chunk__12349_12357 = G__12362;
count__12350_12358 = G__12363;
i__12351_12359 = G__12364;
continue;
} else {
var temp__4657__auto___12365 = cljs.core.seq.call(null,seq__12348_12356);
if(temp__4657__auto___12365){
var seq__12348_12366__$1 = temp__4657__auto___12365;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12348_12366__$1)){
var c__7018__auto___12367 = cljs.core.chunk_first.call(null,seq__12348_12366__$1);
var G__12368 = cljs.core.chunk_rest.call(null,seq__12348_12366__$1);
var G__12369 = c__7018__auto___12367;
var G__12370 = cljs.core.count.call(null,c__7018__auto___12367);
var G__12371 = (0);
seq__12348_12356 = G__12368;
chunk__12349_12357 = G__12369;
count__12350_12358 = G__12370;
i__12351_12359 = G__12371;
continue;
} else {
var req_12372 = cljs.core.first.call(null,seq__12348_12366__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_12372,prov);

var G__12373 = cljs.core.next.call(null,seq__12348_12366__$1);
var G__12374 = null;
var G__12375 = (0);
var G__12376 = (0);
seq__12348_12356 = G__12373;
chunk__12349_12357 = G__12374;
count__12350_12358 = G__12375;
i__12351_12359 = G__12376;
continue;
}
} else {
}
}
break;
}

var G__12377 = seq__12344;
var G__12378 = chunk__12345;
var G__12379 = count__12346;
var G__12380 = (i__12347 + (1));
seq__12344 = G__12377;
chunk__12345 = G__12378;
count__12346 = G__12379;
i__12347 = G__12380;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__12344);
if(temp__4657__auto__){
var seq__12344__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12344__$1)){
var c__7018__auto__ = cljs.core.chunk_first.call(null,seq__12344__$1);
var G__12381 = cljs.core.chunk_rest.call(null,seq__12344__$1);
var G__12382 = c__7018__auto__;
var G__12383 = cljs.core.count.call(null,c__7018__auto__);
var G__12384 = (0);
seq__12344 = G__12381;
chunk__12345 = G__12382;
count__12346 = G__12383;
i__12347 = G__12384;
continue;
} else {
var prov = cljs.core.first.call(null,seq__12344__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__12352_12385 = cljs.core.seq.call(null,requires);
var chunk__12353_12386 = null;
var count__12354_12387 = (0);
var i__12355_12388 = (0);
while(true){
if((i__12355_12388 < count__12354_12387)){
var req_12389 = cljs.core._nth.call(null,chunk__12353_12386,i__12355_12388);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_12389,prov);

var G__12390 = seq__12352_12385;
var G__12391 = chunk__12353_12386;
var G__12392 = count__12354_12387;
var G__12393 = (i__12355_12388 + (1));
seq__12352_12385 = G__12390;
chunk__12353_12386 = G__12391;
count__12354_12387 = G__12392;
i__12355_12388 = G__12393;
continue;
} else {
var temp__4657__auto___12394__$1 = cljs.core.seq.call(null,seq__12352_12385);
if(temp__4657__auto___12394__$1){
var seq__12352_12395__$1 = temp__4657__auto___12394__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12352_12395__$1)){
var c__7018__auto___12396 = cljs.core.chunk_first.call(null,seq__12352_12395__$1);
var G__12397 = cljs.core.chunk_rest.call(null,seq__12352_12395__$1);
var G__12398 = c__7018__auto___12396;
var G__12399 = cljs.core.count.call(null,c__7018__auto___12396);
var G__12400 = (0);
seq__12352_12385 = G__12397;
chunk__12353_12386 = G__12398;
count__12354_12387 = G__12399;
i__12355_12388 = G__12400;
continue;
} else {
var req_12401 = cljs.core.first.call(null,seq__12352_12395__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_12401,prov);

var G__12402 = cljs.core.next.call(null,seq__12352_12395__$1);
var G__12403 = null;
var G__12404 = (0);
var G__12405 = (0);
seq__12352_12385 = G__12402;
chunk__12353_12386 = G__12403;
count__12354_12387 = G__12404;
i__12355_12388 = G__12405;
continue;
}
} else {
}
}
break;
}

var G__12406 = cljs.core.next.call(null,seq__12344__$1);
var G__12407 = null;
var G__12408 = (0);
var G__12409 = (0);
seq__12344 = G__12406;
chunk__12345 = G__12407;
count__12346 = G__12408;
i__12347 = G__12409;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__12414_12418 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__12415_12419 = null;
var count__12416_12420 = (0);
var i__12417_12421 = (0);
while(true){
if((i__12417_12421 < count__12416_12420)){
var ns_12422 = cljs.core._nth.call(null,chunk__12415_12419,i__12417_12421);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_12422);

var G__12423 = seq__12414_12418;
var G__12424 = chunk__12415_12419;
var G__12425 = count__12416_12420;
var G__12426 = (i__12417_12421 + (1));
seq__12414_12418 = G__12423;
chunk__12415_12419 = G__12424;
count__12416_12420 = G__12425;
i__12417_12421 = G__12426;
continue;
} else {
var temp__4657__auto___12427 = cljs.core.seq.call(null,seq__12414_12418);
if(temp__4657__auto___12427){
var seq__12414_12428__$1 = temp__4657__auto___12427;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12414_12428__$1)){
var c__7018__auto___12429 = cljs.core.chunk_first.call(null,seq__12414_12428__$1);
var G__12430 = cljs.core.chunk_rest.call(null,seq__12414_12428__$1);
var G__12431 = c__7018__auto___12429;
var G__12432 = cljs.core.count.call(null,c__7018__auto___12429);
var G__12433 = (0);
seq__12414_12418 = G__12430;
chunk__12415_12419 = G__12431;
count__12416_12420 = G__12432;
i__12417_12421 = G__12433;
continue;
} else {
var ns_12434 = cljs.core.first.call(null,seq__12414_12428__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_12434);

var G__12435 = cljs.core.next.call(null,seq__12414_12428__$1);
var G__12436 = null;
var G__12437 = (0);
var G__12438 = (0);
seq__12414_12418 = G__12435;
chunk__12415_12419 = G__12436;
count__12416_12420 = G__12437;
i__12417_12421 = G__12438;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__6207__auto__ = goog.require__;
if(cljs.core.truth_(or__6207__auto__)){
return or__6207__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__12439__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__12439 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12440__i = 0, G__12440__a = new Array(arguments.length -  0);
while (G__12440__i < G__12440__a.length) {G__12440__a[G__12440__i] = arguments[G__12440__i + 0]; ++G__12440__i;}
  args = new cljs.core.IndexedSeq(G__12440__a,0);
} 
return G__12439__delegate.call(this,args);};
G__12439.cljs$lang$maxFixedArity = 0;
G__12439.cljs$lang$applyTo = (function (arglist__12441){
var args = cljs.core.seq(arglist__12441);
return G__12439__delegate(args);
});
G__12439.cljs$core$IFn$_invoke$arity$variadic = G__12439__delegate;
return G__12439;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__12443 = cljs.core._EQ_;
var expr__12444 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__12443.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__12444))){
var path_parts = ((function (pred__12443,expr__12444){
return (function (p1__12442_SHARP_){
return clojure.string.split.call(null,p1__12442_SHARP_,/[\/\\]/);
});})(pred__12443,expr__12444))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__12443,expr__12444){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e12446){if((e12446 instanceof Error)){
var e = e12446;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e12446;

}
}})());
});
;})(path_parts,sep,root,pred__12443,expr__12444))
} else {
if(cljs.core.truth_(pred__12443.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__12444))){
return ((function (pred__12443,expr__12444){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__12443,expr__12444){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__12443,expr__12444))
);

return deferred.addErrback(((function (deferred,pred__12443,expr__12444){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__12443,expr__12444))
);
});
;})(pred__12443,expr__12444))
} else {
return ((function (pred__12443,expr__12444){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__12443,expr__12444))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__12447,callback){
var map__12450 = p__12447;
var map__12450__$1 = ((((!((map__12450 == null)))?((((map__12450.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12450.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12450):map__12450);
var file_msg = map__12450__$1;
var request_url = cljs.core.get.call(null,map__12450__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__12450,map__12450__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__12450,map__12450__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__9351__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9351__auto__){
return (function (){
var f__9352__auto__ = (function (){var switch__9239__auto__ = ((function (c__9351__auto__){
return (function (state_12474){
var state_val_12475 = (state_12474[(1)]);
if((state_val_12475 === (7))){
var inst_12470 = (state_12474[(2)]);
var state_12474__$1 = state_12474;
var statearr_12476_12496 = state_12474__$1;
(statearr_12476_12496[(2)] = inst_12470);

(statearr_12476_12496[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12475 === (1))){
var state_12474__$1 = state_12474;
var statearr_12477_12497 = state_12474__$1;
(statearr_12477_12497[(2)] = null);

(statearr_12477_12497[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12475 === (4))){
var inst_12454 = (state_12474[(7)]);
var inst_12454__$1 = (state_12474[(2)]);
var state_12474__$1 = (function (){var statearr_12478 = state_12474;
(statearr_12478[(7)] = inst_12454__$1);

return statearr_12478;
})();
if(cljs.core.truth_(inst_12454__$1)){
var statearr_12479_12498 = state_12474__$1;
(statearr_12479_12498[(1)] = (5));

} else {
var statearr_12480_12499 = state_12474__$1;
(statearr_12480_12499[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12475 === (6))){
var state_12474__$1 = state_12474;
var statearr_12481_12500 = state_12474__$1;
(statearr_12481_12500[(2)] = null);

(statearr_12481_12500[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12475 === (3))){
var inst_12472 = (state_12474[(2)]);
var state_12474__$1 = state_12474;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12474__$1,inst_12472);
} else {
if((state_val_12475 === (2))){
var state_12474__$1 = state_12474;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12474__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_12475 === (11))){
var inst_12466 = (state_12474[(2)]);
var state_12474__$1 = (function (){var statearr_12482 = state_12474;
(statearr_12482[(8)] = inst_12466);

return statearr_12482;
})();
var statearr_12483_12501 = state_12474__$1;
(statearr_12483_12501[(2)] = null);

(statearr_12483_12501[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12475 === (9))){
var inst_12460 = (state_12474[(9)]);
var inst_12458 = (state_12474[(10)]);
var inst_12462 = inst_12460.call(null,inst_12458);
var state_12474__$1 = state_12474;
var statearr_12484_12502 = state_12474__$1;
(statearr_12484_12502[(2)] = inst_12462);

(statearr_12484_12502[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12475 === (5))){
var inst_12454 = (state_12474[(7)]);
var inst_12456 = figwheel.client.file_reloading.blocking_load.call(null,inst_12454);
var state_12474__$1 = state_12474;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12474__$1,(8),inst_12456);
} else {
if((state_val_12475 === (10))){
var inst_12458 = (state_12474[(10)]);
var inst_12464 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_12458);
var state_12474__$1 = state_12474;
var statearr_12485_12503 = state_12474__$1;
(statearr_12485_12503[(2)] = inst_12464);

(statearr_12485_12503[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12475 === (8))){
var inst_12460 = (state_12474[(9)]);
var inst_12454 = (state_12474[(7)]);
var inst_12458 = (state_12474[(2)]);
var inst_12459 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_12460__$1 = cljs.core.get.call(null,inst_12459,inst_12454);
var state_12474__$1 = (function (){var statearr_12486 = state_12474;
(statearr_12486[(9)] = inst_12460__$1);

(statearr_12486[(10)] = inst_12458);

return statearr_12486;
})();
if(cljs.core.truth_(inst_12460__$1)){
var statearr_12487_12504 = state_12474__$1;
(statearr_12487_12504[(1)] = (9));

} else {
var statearr_12488_12505 = state_12474__$1;
(statearr_12488_12505[(1)] = (10));

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
});})(c__9351__auto__))
;
return ((function (switch__9239__auto__,c__9351__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__9240__auto__ = null;
var figwheel$client$file_reloading$state_machine__9240__auto____0 = (function (){
var statearr_12492 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_12492[(0)] = figwheel$client$file_reloading$state_machine__9240__auto__);

(statearr_12492[(1)] = (1));

return statearr_12492;
});
var figwheel$client$file_reloading$state_machine__9240__auto____1 = (function (state_12474){
while(true){
var ret_value__9241__auto__ = (function (){try{while(true){
var result__9242__auto__ = switch__9239__auto__.call(null,state_12474);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9242__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9242__auto__;
}
break;
}
}catch (e12493){if((e12493 instanceof Object)){
var ex__9243__auto__ = e12493;
var statearr_12494_12506 = state_12474;
(statearr_12494_12506[(5)] = ex__9243__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12474);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12493;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9241__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12507 = state_12474;
state_12474 = G__12507;
continue;
} else {
return ret_value__9241__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__9240__auto__ = function(state_12474){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__9240__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__9240__auto____1.call(this,state_12474);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__9240__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__9240__auto____0;
figwheel$client$file_reloading$state_machine__9240__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__9240__auto____1;
return figwheel$client$file_reloading$state_machine__9240__auto__;
})()
;})(switch__9239__auto__,c__9351__auto__))
})();
var state__9353__auto__ = (function (){var statearr_12495 = f__9352__auto__.call(null);
(statearr_12495[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9351__auto__);

return statearr_12495;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9353__auto__);
});})(c__9351__auto__))
);

return c__9351__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__12508,callback){
var map__12511 = p__12508;
var map__12511__$1 = ((((!((map__12511 == null)))?((((map__12511.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12511.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12511):map__12511);
var file_msg = map__12511__$1;
var namespace = cljs.core.get.call(null,map__12511__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__12511,map__12511__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__12511,map__12511__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__12513){
var map__12516 = p__12513;
var map__12516__$1 = ((((!((map__12516 == null)))?((((map__12516.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12516.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12516):map__12516);
var file_msg = map__12516__$1;
var namespace = cljs.core.get.call(null,map__12516__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__6195__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__6195__auto__){
var or__6207__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__6207__auto__)){
return or__6207__auto__;
} else {
var or__6207__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__6207__auto____$1)){
return or__6207__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__6195__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__12518,callback){
var map__12521 = p__12518;
var map__12521__$1 = ((((!((map__12521 == null)))?((((map__12521.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12521.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12521):map__12521);
var file_msg = map__12521__$1;
var request_url = cljs.core.get.call(null,map__12521__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__12521__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__9351__auto___12609 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9351__auto___12609,out){
return (function (){
var f__9352__auto__ = (function (){var switch__9239__auto__ = ((function (c__9351__auto___12609,out){
return (function (state_12591){
var state_val_12592 = (state_12591[(1)]);
if((state_val_12592 === (1))){
var inst_12569 = cljs.core.nth.call(null,files,(0),null);
var inst_12570 = cljs.core.nthnext.call(null,files,(1));
var inst_12571 = files;
var state_12591__$1 = (function (){var statearr_12593 = state_12591;
(statearr_12593[(7)] = inst_12569);

(statearr_12593[(8)] = inst_12571);

(statearr_12593[(9)] = inst_12570);

return statearr_12593;
})();
var statearr_12594_12610 = state_12591__$1;
(statearr_12594_12610[(2)] = null);

(statearr_12594_12610[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12592 === (2))){
var inst_12574 = (state_12591[(10)]);
var inst_12571 = (state_12591[(8)]);
var inst_12574__$1 = cljs.core.nth.call(null,inst_12571,(0),null);
var inst_12575 = cljs.core.nthnext.call(null,inst_12571,(1));
var inst_12576 = (inst_12574__$1 == null);
var inst_12577 = cljs.core.not.call(null,inst_12576);
var state_12591__$1 = (function (){var statearr_12595 = state_12591;
(statearr_12595[(10)] = inst_12574__$1);

(statearr_12595[(11)] = inst_12575);

return statearr_12595;
})();
if(inst_12577){
var statearr_12596_12611 = state_12591__$1;
(statearr_12596_12611[(1)] = (4));

} else {
var statearr_12597_12612 = state_12591__$1;
(statearr_12597_12612[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12592 === (3))){
var inst_12589 = (state_12591[(2)]);
var state_12591__$1 = state_12591;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12591__$1,inst_12589);
} else {
if((state_val_12592 === (4))){
var inst_12574 = (state_12591[(10)]);
var inst_12579 = figwheel.client.file_reloading.reload_js_file.call(null,inst_12574);
var state_12591__$1 = state_12591;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12591__$1,(7),inst_12579);
} else {
if((state_val_12592 === (5))){
var inst_12585 = cljs.core.async.close_BANG_.call(null,out);
var state_12591__$1 = state_12591;
var statearr_12598_12613 = state_12591__$1;
(statearr_12598_12613[(2)] = inst_12585);

(statearr_12598_12613[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12592 === (6))){
var inst_12587 = (state_12591[(2)]);
var state_12591__$1 = state_12591;
var statearr_12599_12614 = state_12591__$1;
(statearr_12599_12614[(2)] = inst_12587);

(statearr_12599_12614[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12592 === (7))){
var inst_12575 = (state_12591[(11)]);
var inst_12581 = (state_12591[(2)]);
var inst_12582 = cljs.core.async.put_BANG_.call(null,out,inst_12581);
var inst_12571 = inst_12575;
var state_12591__$1 = (function (){var statearr_12600 = state_12591;
(statearr_12600[(12)] = inst_12582);

(statearr_12600[(8)] = inst_12571);

return statearr_12600;
})();
var statearr_12601_12615 = state_12591__$1;
(statearr_12601_12615[(2)] = null);

(statearr_12601_12615[(1)] = (2));


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
});})(c__9351__auto___12609,out))
;
return ((function (switch__9239__auto__,c__9351__auto___12609,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__9240__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__9240__auto____0 = (function (){
var statearr_12605 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12605[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__9240__auto__);

(statearr_12605[(1)] = (1));

return statearr_12605;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__9240__auto____1 = (function (state_12591){
while(true){
var ret_value__9241__auto__ = (function (){try{while(true){
var result__9242__auto__ = switch__9239__auto__.call(null,state_12591);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9242__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9242__auto__;
}
break;
}
}catch (e12606){if((e12606 instanceof Object)){
var ex__9243__auto__ = e12606;
var statearr_12607_12616 = state_12591;
(statearr_12607_12616[(5)] = ex__9243__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12591);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12606;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9241__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12617 = state_12591;
state_12591 = G__12617;
continue;
} else {
return ret_value__9241__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__9240__auto__ = function(state_12591){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__9240__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__9240__auto____1.call(this,state_12591);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__9240__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__9240__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__9240__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__9240__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__9240__auto__;
})()
;})(switch__9239__auto__,c__9351__auto___12609,out))
})();
var state__9353__auto__ = (function (){var statearr_12608 = f__9352__auto__.call(null);
(statearr_12608[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9351__auto___12609);

return statearr_12608;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9353__auto__);
});})(c__9351__auto___12609,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__12618,opts){
var map__12622 = p__12618;
var map__12622__$1 = ((((!((map__12622 == null)))?((((map__12622.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12622.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12622):map__12622);
var eval_body__$1 = cljs.core.get.call(null,map__12622__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__12622__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__6195__auto__ = eval_body__$1;
if(cljs.core.truth_(and__6195__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__6195__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e12624){var e = e12624;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__12625_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__12625_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__12630){
var vec__12631 = p__12630;
var k = cljs.core.nth.call(null,vec__12631,(0),null);
var v = cljs.core.nth.call(null,vec__12631,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__12632){
var vec__12633 = p__12632;
var k = cljs.core.nth.call(null,vec__12633,(0),null);
var v = cljs.core.nth.call(null,vec__12633,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__12637,p__12638){
var map__12885 = p__12637;
var map__12885__$1 = ((((!((map__12885 == null)))?((((map__12885.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12885.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12885):map__12885);
var opts = map__12885__$1;
var before_jsload = cljs.core.get.call(null,map__12885__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__12885__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__12885__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__12886 = p__12638;
var map__12886__$1 = ((((!((map__12886 == null)))?((((map__12886.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12886.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12886):map__12886);
var msg = map__12886__$1;
var files = cljs.core.get.call(null,map__12886__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__12886__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__12886__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__9351__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9351__auto__,map__12885,map__12885__$1,opts,before_jsload,on_jsload,reload_dependents,map__12886,map__12886__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__9352__auto__ = (function (){var switch__9239__auto__ = ((function (c__9351__auto__,map__12885,map__12885__$1,opts,before_jsload,on_jsload,reload_dependents,map__12886,map__12886__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_13039){
var state_val_13040 = (state_13039[(1)]);
if((state_val_13040 === (7))){
var inst_12900 = (state_13039[(7)]);
var inst_12903 = (state_13039[(8)]);
var inst_12901 = (state_13039[(9)]);
var inst_12902 = (state_13039[(10)]);
var inst_12908 = cljs.core._nth.call(null,inst_12901,inst_12903);
var inst_12909 = figwheel.client.file_reloading.eval_body.call(null,inst_12908,opts);
var inst_12910 = (inst_12903 + (1));
var tmp13041 = inst_12900;
var tmp13042 = inst_12901;
var tmp13043 = inst_12902;
var inst_12900__$1 = tmp13041;
var inst_12901__$1 = tmp13042;
var inst_12902__$1 = tmp13043;
var inst_12903__$1 = inst_12910;
var state_13039__$1 = (function (){var statearr_13044 = state_13039;
(statearr_13044[(7)] = inst_12900__$1);

(statearr_13044[(8)] = inst_12903__$1);

(statearr_13044[(11)] = inst_12909);

(statearr_13044[(9)] = inst_12901__$1);

(statearr_13044[(10)] = inst_12902__$1);

return statearr_13044;
})();
var statearr_13045_13131 = state_13039__$1;
(statearr_13045_13131[(2)] = null);

(statearr_13045_13131[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13040 === (20))){
var inst_12943 = (state_13039[(12)]);
var inst_12951 = figwheel.client.file_reloading.sort_files.call(null,inst_12943);
var state_13039__$1 = state_13039;
var statearr_13046_13132 = state_13039__$1;
(statearr_13046_13132[(2)] = inst_12951);

(statearr_13046_13132[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13040 === (27))){
var state_13039__$1 = state_13039;
var statearr_13047_13133 = state_13039__$1;
(statearr_13047_13133[(2)] = null);

(statearr_13047_13133[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13040 === (1))){
var inst_12892 = (state_13039[(13)]);
var inst_12889 = before_jsload.call(null,files);
var inst_12890 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_12891 = (function (){return ((function (inst_12892,inst_12889,inst_12890,state_val_13040,c__9351__auto__,map__12885,map__12885__$1,opts,before_jsload,on_jsload,reload_dependents,map__12886,map__12886__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__12634_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__12634_SHARP_);
});
;})(inst_12892,inst_12889,inst_12890,state_val_13040,c__9351__auto__,map__12885,map__12885__$1,opts,before_jsload,on_jsload,reload_dependents,map__12886,map__12886__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_12892__$1 = cljs.core.filter.call(null,inst_12891,files);
var inst_12893 = cljs.core.not_empty.call(null,inst_12892__$1);
var state_13039__$1 = (function (){var statearr_13048 = state_13039;
(statearr_13048[(13)] = inst_12892__$1);

(statearr_13048[(14)] = inst_12889);

(statearr_13048[(15)] = inst_12890);

return statearr_13048;
})();
if(cljs.core.truth_(inst_12893)){
var statearr_13049_13134 = state_13039__$1;
(statearr_13049_13134[(1)] = (2));

} else {
var statearr_13050_13135 = state_13039__$1;
(statearr_13050_13135[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13040 === (24))){
var state_13039__$1 = state_13039;
var statearr_13051_13136 = state_13039__$1;
(statearr_13051_13136[(2)] = null);

(statearr_13051_13136[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13040 === (39))){
var inst_12993 = (state_13039[(16)]);
var state_13039__$1 = state_13039;
var statearr_13052_13137 = state_13039__$1;
(statearr_13052_13137[(2)] = inst_12993);

(statearr_13052_13137[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13040 === (46))){
var inst_13034 = (state_13039[(2)]);
var state_13039__$1 = state_13039;
var statearr_13053_13138 = state_13039__$1;
(statearr_13053_13138[(2)] = inst_13034);

(statearr_13053_13138[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13040 === (4))){
var inst_12937 = (state_13039[(2)]);
var inst_12938 = cljs.core.List.EMPTY;
var inst_12939 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_12938);
var inst_12940 = (function (){return ((function (inst_12937,inst_12938,inst_12939,state_val_13040,c__9351__auto__,map__12885,map__12885__$1,opts,before_jsload,on_jsload,reload_dependents,map__12886,map__12886__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__12635_SHARP_){
var and__6195__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__12635_SHARP_);
if(cljs.core.truth_(and__6195__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__12635_SHARP_));
} else {
return and__6195__auto__;
}
});
;})(inst_12937,inst_12938,inst_12939,state_val_13040,c__9351__auto__,map__12885,map__12885__$1,opts,before_jsload,on_jsload,reload_dependents,map__12886,map__12886__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_12941 = cljs.core.filter.call(null,inst_12940,files);
var inst_12942 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_12943 = cljs.core.concat.call(null,inst_12941,inst_12942);
var state_13039__$1 = (function (){var statearr_13054 = state_13039;
(statearr_13054[(17)] = inst_12939);

(statearr_13054[(18)] = inst_12937);

(statearr_13054[(12)] = inst_12943);

return statearr_13054;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_13055_13139 = state_13039__$1;
(statearr_13055_13139[(1)] = (16));

} else {
var statearr_13056_13140 = state_13039__$1;
(statearr_13056_13140[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13040 === (15))){
var inst_12927 = (state_13039[(2)]);
var state_13039__$1 = state_13039;
var statearr_13057_13141 = state_13039__$1;
(statearr_13057_13141[(2)] = inst_12927);

(statearr_13057_13141[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13040 === (21))){
var inst_12953 = (state_13039[(19)]);
var inst_12953__$1 = (state_13039[(2)]);
var inst_12954 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_12953__$1);
var state_13039__$1 = (function (){var statearr_13058 = state_13039;
(statearr_13058[(19)] = inst_12953__$1);

return statearr_13058;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13039__$1,(22),inst_12954);
} else {
if((state_val_13040 === (31))){
var inst_13037 = (state_13039[(2)]);
var state_13039__$1 = state_13039;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13039__$1,inst_13037);
} else {
if((state_val_13040 === (32))){
var inst_12993 = (state_13039[(16)]);
var inst_12998 = inst_12993.cljs$lang$protocol_mask$partition0$;
var inst_12999 = (inst_12998 & (64));
var inst_13000 = inst_12993.cljs$core$ISeq$;
var inst_13001 = (inst_12999) || (inst_13000);
var state_13039__$1 = state_13039;
if(cljs.core.truth_(inst_13001)){
var statearr_13059_13142 = state_13039__$1;
(statearr_13059_13142[(1)] = (35));

} else {
var statearr_13060_13143 = state_13039__$1;
(statearr_13060_13143[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13040 === (40))){
var inst_13014 = (state_13039[(20)]);
var inst_13013 = (state_13039[(2)]);
var inst_13014__$1 = cljs.core.get.call(null,inst_13013,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_13015 = cljs.core.get.call(null,inst_13013,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_13016 = cljs.core.not_empty.call(null,inst_13014__$1);
var state_13039__$1 = (function (){var statearr_13061 = state_13039;
(statearr_13061[(21)] = inst_13015);

(statearr_13061[(20)] = inst_13014__$1);

return statearr_13061;
})();
if(cljs.core.truth_(inst_13016)){
var statearr_13062_13144 = state_13039__$1;
(statearr_13062_13144[(1)] = (41));

} else {
var statearr_13063_13145 = state_13039__$1;
(statearr_13063_13145[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13040 === (33))){
var state_13039__$1 = state_13039;
var statearr_13064_13146 = state_13039__$1;
(statearr_13064_13146[(2)] = false);

(statearr_13064_13146[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13040 === (13))){
var inst_12913 = (state_13039[(22)]);
var inst_12917 = cljs.core.chunk_first.call(null,inst_12913);
var inst_12918 = cljs.core.chunk_rest.call(null,inst_12913);
var inst_12919 = cljs.core.count.call(null,inst_12917);
var inst_12900 = inst_12918;
var inst_12901 = inst_12917;
var inst_12902 = inst_12919;
var inst_12903 = (0);
var state_13039__$1 = (function (){var statearr_13065 = state_13039;
(statearr_13065[(7)] = inst_12900);

(statearr_13065[(8)] = inst_12903);

(statearr_13065[(9)] = inst_12901);

(statearr_13065[(10)] = inst_12902);

return statearr_13065;
})();
var statearr_13066_13147 = state_13039__$1;
(statearr_13066_13147[(2)] = null);

(statearr_13066_13147[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13040 === (22))){
var inst_12956 = (state_13039[(23)]);
var inst_12957 = (state_13039[(24)]);
var inst_12961 = (state_13039[(25)]);
var inst_12953 = (state_13039[(19)]);
var inst_12956__$1 = (state_13039[(2)]);
var inst_12957__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_12956__$1);
var inst_12958 = (function (){var all_files = inst_12953;
var res_SINGLEQUOTE_ = inst_12956__$1;
var res = inst_12957__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_12956,inst_12957,inst_12961,inst_12953,inst_12956__$1,inst_12957__$1,state_val_13040,c__9351__auto__,map__12885,map__12885__$1,opts,before_jsload,on_jsload,reload_dependents,map__12886,map__12886__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__12636_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__12636_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_12956,inst_12957,inst_12961,inst_12953,inst_12956__$1,inst_12957__$1,state_val_13040,c__9351__auto__,map__12885,map__12885__$1,opts,before_jsload,on_jsload,reload_dependents,map__12886,map__12886__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_12959 = cljs.core.filter.call(null,inst_12958,inst_12956__$1);
var inst_12960 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_12961__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_12960);
var inst_12962 = cljs.core.not_empty.call(null,inst_12961__$1);
var state_13039__$1 = (function (){var statearr_13067 = state_13039;
(statearr_13067[(23)] = inst_12956__$1);

(statearr_13067[(24)] = inst_12957__$1);

(statearr_13067[(26)] = inst_12959);

(statearr_13067[(25)] = inst_12961__$1);

return statearr_13067;
})();
if(cljs.core.truth_(inst_12962)){
var statearr_13068_13148 = state_13039__$1;
(statearr_13068_13148[(1)] = (23));

} else {
var statearr_13069_13149 = state_13039__$1;
(statearr_13069_13149[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13040 === (36))){
var state_13039__$1 = state_13039;
var statearr_13070_13150 = state_13039__$1;
(statearr_13070_13150[(2)] = false);

(statearr_13070_13150[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13040 === (41))){
var inst_13014 = (state_13039[(20)]);
var inst_13018 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_13019 = cljs.core.map.call(null,inst_13018,inst_13014);
var inst_13020 = cljs.core.pr_str.call(null,inst_13019);
var inst_13021 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_13020)].join('');
var inst_13022 = figwheel.client.utils.log.call(null,inst_13021);
var state_13039__$1 = state_13039;
var statearr_13071_13151 = state_13039__$1;
(statearr_13071_13151[(2)] = inst_13022);

(statearr_13071_13151[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13040 === (43))){
var inst_13015 = (state_13039[(21)]);
var inst_13025 = (state_13039[(2)]);
var inst_13026 = cljs.core.not_empty.call(null,inst_13015);
var state_13039__$1 = (function (){var statearr_13072 = state_13039;
(statearr_13072[(27)] = inst_13025);

return statearr_13072;
})();
if(cljs.core.truth_(inst_13026)){
var statearr_13073_13152 = state_13039__$1;
(statearr_13073_13152[(1)] = (44));

} else {
var statearr_13074_13153 = state_13039__$1;
(statearr_13074_13153[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13040 === (29))){
var inst_12956 = (state_13039[(23)]);
var inst_12957 = (state_13039[(24)]);
var inst_12959 = (state_13039[(26)]);
var inst_12961 = (state_13039[(25)]);
var inst_12953 = (state_13039[(19)]);
var inst_12993 = (state_13039[(16)]);
var inst_12989 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_12992 = (function (){var all_files = inst_12953;
var res_SINGLEQUOTE_ = inst_12956;
var res = inst_12957;
var files_not_loaded = inst_12959;
var dependencies_that_loaded = inst_12961;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_12956,inst_12957,inst_12959,inst_12961,inst_12953,inst_12993,inst_12989,state_val_13040,c__9351__auto__,map__12885,map__12885__$1,opts,before_jsload,on_jsload,reload_dependents,map__12886,map__12886__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__12991){
var map__13075 = p__12991;
var map__13075__$1 = ((((!((map__13075 == null)))?((((map__13075.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13075.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13075):map__13075);
var namespace = cljs.core.get.call(null,map__13075__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_12956,inst_12957,inst_12959,inst_12961,inst_12953,inst_12993,inst_12989,state_val_13040,c__9351__auto__,map__12885,map__12885__$1,opts,before_jsload,on_jsload,reload_dependents,map__12886,map__12886__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_12993__$1 = cljs.core.group_by.call(null,inst_12992,inst_12959);
var inst_12995 = (inst_12993__$1 == null);
var inst_12996 = cljs.core.not.call(null,inst_12995);
var state_13039__$1 = (function (){var statearr_13077 = state_13039;
(statearr_13077[(28)] = inst_12989);

(statearr_13077[(16)] = inst_12993__$1);

return statearr_13077;
})();
if(inst_12996){
var statearr_13078_13154 = state_13039__$1;
(statearr_13078_13154[(1)] = (32));

} else {
var statearr_13079_13155 = state_13039__$1;
(statearr_13079_13155[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13040 === (44))){
var inst_13015 = (state_13039[(21)]);
var inst_13028 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_13015);
var inst_13029 = cljs.core.pr_str.call(null,inst_13028);
var inst_13030 = [cljs.core.str("not required: "),cljs.core.str(inst_13029)].join('');
var inst_13031 = figwheel.client.utils.log.call(null,inst_13030);
var state_13039__$1 = state_13039;
var statearr_13080_13156 = state_13039__$1;
(statearr_13080_13156[(2)] = inst_13031);

(statearr_13080_13156[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13040 === (6))){
var inst_12934 = (state_13039[(2)]);
var state_13039__$1 = state_13039;
var statearr_13081_13157 = state_13039__$1;
(statearr_13081_13157[(2)] = inst_12934);

(statearr_13081_13157[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13040 === (28))){
var inst_12959 = (state_13039[(26)]);
var inst_12986 = (state_13039[(2)]);
var inst_12987 = cljs.core.not_empty.call(null,inst_12959);
var state_13039__$1 = (function (){var statearr_13082 = state_13039;
(statearr_13082[(29)] = inst_12986);

return statearr_13082;
})();
if(cljs.core.truth_(inst_12987)){
var statearr_13083_13158 = state_13039__$1;
(statearr_13083_13158[(1)] = (29));

} else {
var statearr_13084_13159 = state_13039__$1;
(statearr_13084_13159[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13040 === (25))){
var inst_12957 = (state_13039[(24)]);
var inst_12973 = (state_13039[(2)]);
var inst_12974 = cljs.core.not_empty.call(null,inst_12957);
var state_13039__$1 = (function (){var statearr_13085 = state_13039;
(statearr_13085[(30)] = inst_12973);

return statearr_13085;
})();
if(cljs.core.truth_(inst_12974)){
var statearr_13086_13160 = state_13039__$1;
(statearr_13086_13160[(1)] = (26));

} else {
var statearr_13087_13161 = state_13039__$1;
(statearr_13087_13161[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13040 === (34))){
var inst_13008 = (state_13039[(2)]);
var state_13039__$1 = state_13039;
if(cljs.core.truth_(inst_13008)){
var statearr_13088_13162 = state_13039__$1;
(statearr_13088_13162[(1)] = (38));

} else {
var statearr_13089_13163 = state_13039__$1;
(statearr_13089_13163[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13040 === (17))){
var state_13039__$1 = state_13039;
var statearr_13090_13164 = state_13039__$1;
(statearr_13090_13164[(2)] = recompile_dependents);

(statearr_13090_13164[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13040 === (3))){
var state_13039__$1 = state_13039;
var statearr_13091_13165 = state_13039__$1;
(statearr_13091_13165[(2)] = null);

(statearr_13091_13165[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13040 === (12))){
var inst_12930 = (state_13039[(2)]);
var state_13039__$1 = state_13039;
var statearr_13092_13166 = state_13039__$1;
(statearr_13092_13166[(2)] = inst_12930);

(statearr_13092_13166[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13040 === (2))){
var inst_12892 = (state_13039[(13)]);
var inst_12899 = cljs.core.seq.call(null,inst_12892);
var inst_12900 = inst_12899;
var inst_12901 = null;
var inst_12902 = (0);
var inst_12903 = (0);
var state_13039__$1 = (function (){var statearr_13093 = state_13039;
(statearr_13093[(7)] = inst_12900);

(statearr_13093[(8)] = inst_12903);

(statearr_13093[(9)] = inst_12901);

(statearr_13093[(10)] = inst_12902);

return statearr_13093;
})();
var statearr_13094_13167 = state_13039__$1;
(statearr_13094_13167[(2)] = null);

(statearr_13094_13167[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13040 === (23))){
var inst_12956 = (state_13039[(23)]);
var inst_12957 = (state_13039[(24)]);
var inst_12959 = (state_13039[(26)]);
var inst_12961 = (state_13039[(25)]);
var inst_12953 = (state_13039[(19)]);
var inst_12964 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_12966 = (function (){var all_files = inst_12953;
var res_SINGLEQUOTE_ = inst_12956;
var res = inst_12957;
var files_not_loaded = inst_12959;
var dependencies_that_loaded = inst_12961;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_12956,inst_12957,inst_12959,inst_12961,inst_12953,inst_12964,state_val_13040,c__9351__auto__,map__12885,map__12885__$1,opts,before_jsload,on_jsload,reload_dependents,map__12886,map__12886__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__12965){
var map__13095 = p__12965;
var map__13095__$1 = ((((!((map__13095 == null)))?((((map__13095.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13095.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13095):map__13095);
var request_url = cljs.core.get.call(null,map__13095__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_12956,inst_12957,inst_12959,inst_12961,inst_12953,inst_12964,state_val_13040,c__9351__auto__,map__12885,map__12885__$1,opts,before_jsload,on_jsload,reload_dependents,map__12886,map__12886__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_12967 = cljs.core.reverse.call(null,inst_12961);
var inst_12968 = cljs.core.map.call(null,inst_12966,inst_12967);
var inst_12969 = cljs.core.pr_str.call(null,inst_12968);
var inst_12970 = figwheel.client.utils.log.call(null,inst_12969);
var state_13039__$1 = (function (){var statearr_13097 = state_13039;
(statearr_13097[(31)] = inst_12964);

return statearr_13097;
})();
var statearr_13098_13168 = state_13039__$1;
(statearr_13098_13168[(2)] = inst_12970);

(statearr_13098_13168[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13040 === (35))){
var state_13039__$1 = state_13039;
var statearr_13099_13169 = state_13039__$1;
(statearr_13099_13169[(2)] = true);

(statearr_13099_13169[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13040 === (19))){
var inst_12943 = (state_13039[(12)]);
var inst_12949 = figwheel.client.file_reloading.expand_files.call(null,inst_12943);
var state_13039__$1 = state_13039;
var statearr_13100_13170 = state_13039__$1;
(statearr_13100_13170[(2)] = inst_12949);

(statearr_13100_13170[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13040 === (11))){
var state_13039__$1 = state_13039;
var statearr_13101_13171 = state_13039__$1;
(statearr_13101_13171[(2)] = null);

(statearr_13101_13171[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13040 === (9))){
var inst_12932 = (state_13039[(2)]);
var state_13039__$1 = state_13039;
var statearr_13102_13172 = state_13039__$1;
(statearr_13102_13172[(2)] = inst_12932);

(statearr_13102_13172[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13040 === (5))){
var inst_12903 = (state_13039[(8)]);
var inst_12902 = (state_13039[(10)]);
var inst_12905 = (inst_12903 < inst_12902);
var inst_12906 = inst_12905;
var state_13039__$1 = state_13039;
if(cljs.core.truth_(inst_12906)){
var statearr_13103_13173 = state_13039__$1;
(statearr_13103_13173[(1)] = (7));

} else {
var statearr_13104_13174 = state_13039__$1;
(statearr_13104_13174[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13040 === (14))){
var inst_12913 = (state_13039[(22)]);
var inst_12922 = cljs.core.first.call(null,inst_12913);
var inst_12923 = figwheel.client.file_reloading.eval_body.call(null,inst_12922,opts);
var inst_12924 = cljs.core.next.call(null,inst_12913);
var inst_12900 = inst_12924;
var inst_12901 = null;
var inst_12902 = (0);
var inst_12903 = (0);
var state_13039__$1 = (function (){var statearr_13105 = state_13039;
(statearr_13105[(7)] = inst_12900);

(statearr_13105[(32)] = inst_12923);

(statearr_13105[(8)] = inst_12903);

(statearr_13105[(9)] = inst_12901);

(statearr_13105[(10)] = inst_12902);

return statearr_13105;
})();
var statearr_13106_13175 = state_13039__$1;
(statearr_13106_13175[(2)] = null);

(statearr_13106_13175[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13040 === (45))){
var state_13039__$1 = state_13039;
var statearr_13107_13176 = state_13039__$1;
(statearr_13107_13176[(2)] = null);

(statearr_13107_13176[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13040 === (26))){
var inst_12956 = (state_13039[(23)]);
var inst_12957 = (state_13039[(24)]);
var inst_12959 = (state_13039[(26)]);
var inst_12961 = (state_13039[(25)]);
var inst_12953 = (state_13039[(19)]);
var inst_12976 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_12978 = (function (){var all_files = inst_12953;
var res_SINGLEQUOTE_ = inst_12956;
var res = inst_12957;
var files_not_loaded = inst_12959;
var dependencies_that_loaded = inst_12961;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_12956,inst_12957,inst_12959,inst_12961,inst_12953,inst_12976,state_val_13040,c__9351__auto__,map__12885,map__12885__$1,opts,before_jsload,on_jsload,reload_dependents,map__12886,map__12886__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__12977){
var map__13108 = p__12977;
var map__13108__$1 = ((((!((map__13108 == null)))?((((map__13108.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13108.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13108):map__13108);
var namespace = cljs.core.get.call(null,map__13108__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__13108__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_12956,inst_12957,inst_12959,inst_12961,inst_12953,inst_12976,state_val_13040,c__9351__auto__,map__12885,map__12885__$1,opts,before_jsload,on_jsload,reload_dependents,map__12886,map__12886__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_12979 = cljs.core.map.call(null,inst_12978,inst_12957);
var inst_12980 = cljs.core.pr_str.call(null,inst_12979);
var inst_12981 = figwheel.client.utils.log.call(null,inst_12980);
var inst_12982 = (function (){var all_files = inst_12953;
var res_SINGLEQUOTE_ = inst_12956;
var res = inst_12957;
var files_not_loaded = inst_12959;
var dependencies_that_loaded = inst_12961;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_12956,inst_12957,inst_12959,inst_12961,inst_12953,inst_12976,inst_12978,inst_12979,inst_12980,inst_12981,state_val_13040,c__9351__auto__,map__12885,map__12885__$1,opts,before_jsload,on_jsload,reload_dependents,map__12886,map__12886__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_12956,inst_12957,inst_12959,inst_12961,inst_12953,inst_12976,inst_12978,inst_12979,inst_12980,inst_12981,state_val_13040,c__9351__auto__,map__12885,map__12885__$1,opts,before_jsload,on_jsload,reload_dependents,map__12886,map__12886__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_12983 = setTimeout(inst_12982,(10));
var state_13039__$1 = (function (){var statearr_13110 = state_13039;
(statearr_13110[(33)] = inst_12981);

(statearr_13110[(34)] = inst_12976);

return statearr_13110;
})();
var statearr_13111_13177 = state_13039__$1;
(statearr_13111_13177[(2)] = inst_12983);

(statearr_13111_13177[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13040 === (16))){
var state_13039__$1 = state_13039;
var statearr_13112_13178 = state_13039__$1;
(statearr_13112_13178[(2)] = reload_dependents);

(statearr_13112_13178[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13040 === (38))){
var inst_12993 = (state_13039[(16)]);
var inst_13010 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12993);
var state_13039__$1 = state_13039;
var statearr_13113_13179 = state_13039__$1;
(statearr_13113_13179[(2)] = inst_13010);

(statearr_13113_13179[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13040 === (30))){
var state_13039__$1 = state_13039;
var statearr_13114_13180 = state_13039__$1;
(statearr_13114_13180[(2)] = null);

(statearr_13114_13180[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13040 === (10))){
var inst_12913 = (state_13039[(22)]);
var inst_12915 = cljs.core.chunked_seq_QMARK_.call(null,inst_12913);
var state_13039__$1 = state_13039;
if(inst_12915){
var statearr_13115_13181 = state_13039__$1;
(statearr_13115_13181[(1)] = (13));

} else {
var statearr_13116_13182 = state_13039__$1;
(statearr_13116_13182[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13040 === (18))){
var inst_12947 = (state_13039[(2)]);
var state_13039__$1 = state_13039;
if(cljs.core.truth_(inst_12947)){
var statearr_13117_13183 = state_13039__$1;
(statearr_13117_13183[(1)] = (19));

} else {
var statearr_13118_13184 = state_13039__$1;
(statearr_13118_13184[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13040 === (42))){
var state_13039__$1 = state_13039;
var statearr_13119_13185 = state_13039__$1;
(statearr_13119_13185[(2)] = null);

(statearr_13119_13185[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13040 === (37))){
var inst_13005 = (state_13039[(2)]);
var state_13039__$1 = state_13039;
var statearr_13120_13186 = state_13039__$1;
(statearr_13120_13186[(2)] = inst_13005);

(statearr_13120_13186[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13040 === (8))){
var inst_12900 = (state_13039[(7)]);
var inst_12913 = (state_13039[(22)]);
var inst_12913__$1 = cljs.core.seq.call(null,inst_12900);
var state_13039__$1 = (function (){var statearr_13121 = state_13039;
(statearr_13121[(22)] = inst_12913__$1);

return statearr_13121;
})();
if(inst_12913__$1){
var statearr_13122_13187 = state_13039__$1;
(statearr_13122_13187[(1)] = (10));

} else {
var statearr_13123_13188 = state_13039__$1;
(statearr_13123_13188[(1)] = (11));

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
});})(c__9351__auto__,map__12885,map__12885__$1,opts,before_jsload,on_jsload,reload_dependents,map__12886,map__12886__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__9239__auto__,c__9351__auto__,map__12885,map__12885__$1,opts,before_jsload,on_jsload,reload_dependents,map__12886,map__12886__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__9240__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__9240__auto____0 = (function (){
var statearr_13127 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13127[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__9240__auto__);

(statearr_13127[(1)] = (1));

return statearr_13127;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__9240__auto____1 = (function (state_13039){
while(true){
var ret_value__9241__auto__ = (function (){try{while(true){
var result__9242__auto__ = switch__9239__auto__.call(null,state_13039);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9242__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9242__auto__;
}
break;
}
}catch (e13128){if((e13128 instanceof Object)){
var ex__9243__auto__ = e13128;
var statearr_13129_13189 = state_13039;
(statearr_13129_13189[(5)] = ex__9243__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13039);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13128;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9241__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13190 = state_13039;
state_13039 = G__13190;
continue;
} else {
return ret_value__9241__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__9240__auto__ = function(state_13039){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__9240__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__9240__auto____1.call(this,state_13039);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__9240__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__9240__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__9240__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__9240__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__9240__auto__;
})()
;})(switch__9239__auto__,c__9351__auto__,map__12885,map__12885__$1,opts,before_jsload,on_jsload,reload_dependents,map__12886,map__12886__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__9353__auto__ = (function (){var statearr_13130 = f__9352__auto__.call(null);
(statearr_13130[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9351__auto__);

return statearr_13130;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9353__auto__);
});})(c__9351__auto__,map__12885,map__12885__$1,opts,before_jsload,on_jsload,reload_dependents,map__12886,map__12886__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__9351__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__13193,link){
var map__13196 = p__13193;
var map__13196__$1 = ((((!((map__13196 == null)))?((((map__13196.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13196.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13196):map__13196);
var file = cljs.core.get.call(null,map__13196__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__13196,map__13196__$1,file){
return (function (p1__13191_SHARP_,p2__13192_SHARP_){
if(cljs.core._EQ_.call(null,p1__13191_SHARP_,p2__13192_SHARP_)){
return p1__13191_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__13196,map__13196__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__13202){
var map__13203 = p__13202;
var map__13203__$1 = ((((!((map__13203 == null)))?((((map__13203.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13203.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13203):map__13203);
var match_length = cljs.core.get.call(null,map__13203__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__13203__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__13198_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__13198_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args13205 = [];
var len__7276__auto___13208 = arguments.length;
var i__7277__auto___13209 = (0);
while(true){
if((i__7277__auto___13209 < len__7276__auto___13208)){
args13205.push((arguments[i__7277__auto___13209]));

var G__13210 = (i__7277__auto___13209 + (1));
i__7277__auto___13209 = G__13210;
continue;
} else {
}
break;
}

var G__13207 = args13205.length;
switch (G__13207) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13205.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__13212_SHARP_,p2__13213_SHARP_){
return cljs.core.assoc.call(null,p1__13212_SHARP_,cljs.core.get.call(null,p2__13213_SHARP_,key),p2__13213_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__13214){
var map__13217 = p__13214;
var map__13217__$1 = ((((!((map__13217 == null)))?((((map__13217.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13217.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13217):map__13217);
var f_data = map__13217__$1;
var file = cljs.core.get.call(null,map__13217__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__13219,files_msg){
var map__13226 = p__13219;
var map__13226__$1 = ((((!((map__13226 == null)))?((((map__13226.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13226.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13226):map__13226);
var opts = map__13226__$1;
var on_cssload = cljs.core.get.call(null,map__13226__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__13228_13232 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__13229_13233 = null;
var count__13230_13234 = (0);
var i__13231_13235 = (0);
while(true){
if((i__13231_13235 < count__13230_13234)){
var f_13236 = cljs.core._nth.call(null,chunk__13229_13233,i__13231_13235);
figwheel.client.file_reloading.reload_css_file.call(null,f_13236);

var G__13237 = seq__13228_13232;
var G__13238 = chunk__13229_13233;
var G__13239 = count__13230_13234;
var G__13240 = (i__13231_13235 + (1));
seq__13228_13232 = G__13237;
chunk__13229_13233 = G__13238;
count__13230_13234 = G__13239;
i__13231_13235 = G__13240;
continue;
} else {
var temp__4657__auto___13241 = cljs.core.seq.call(null,seq__13228_13232);
if(temp__4657__auto___13241){
var seq__13228_13242__$1 = temp__4657__auto___13241;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13228_13242__$1)){
var c__7018__auto___13243 = cljs.core.chunk_first.call(null,seq__13228_13242__$1);
var G__13244 = cljs.core.chunk_rest.call(null,seq__13228_13242__$1);
var G__13245 = c__7018__auto___13243;
var G__13246 = cljs.core.count.call(null,c__7018__auto___13243);
var G__13247 = (0);
seq__13228_13232 = G__13244;
chunk__13229_13233 = G__13245;
count__13230_13234 = G__13246;
i__13231_13235 = G__13247;
continue;
} else {
var f_13248 = cljs.core.first.call(null,seq__13228_13242__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_13248);

var G__13249 = cljs.core.next.call(null,seq__13228_13242__$1);
var G__13250 = null;
var G__13251 = (0);
var G__13252 = (0);
seq__13228_13232 = G__13249;
chunk__13229_13233 = G__13250;
count__13230_13234 = G__13251;
i__13231_13235 = G__13252;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__13226,map__13226__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__13226,map__13226__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map