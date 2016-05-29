// Compiled by ClojureScript 1.8.40 {}
goog.provide('reagent.session');
goog.require('cljs.core');
goog.require('reagent.core');
reagent.session.state = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
/**
 * Get the key's value from the session, returns nil if it doesn't exist.
 */
reagent.session.get = (function reagent$session$get(var_args){
var args__7283__auto__ = [];
var len__7276__auto___7849 = arguments.length;
var i__7277__auto___7850 = (0);
while(true){
if((i__7277__auto___7850 < len__7276__auto___7849)){
args__7283__auto__.push((arguments[i__7277__auto___7850]));

var G__7851 = (i__7277__auto___7850 + (1));
i__7277__auto___7850 = G__7851;
continue;
} else {
}
break;
}

var argseq__7284__auto__ = ((((1) < args__7283__auto__.length))?(new cljs.core.IndexedSeq(args__7283__auto__.slice((1)),(0),null)):null);
return reagent.session.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7284__auto__);
});

reagent.session.get.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__7847){
var vec__7848 = p__7847;
var default$ = cljs.core.nth.call(null,vec__7848,(0),null);
return cljs.core.get.call(null,cljs.core.deref.call(null,reagent.session.state),k,default$);
});

reagent.session.get.cljs$lang$maxFixedArity = (1);

reagent.session.get.cljs$lang$applyTo = (function (seq7845){
var G__7846 = cljs.core.first.call(null,seq7845);
var seq7845__$1 = cljs.core.next.call(null,seq7845);
return reagent.session.get.cljs$core$IFn$_invoke$arity$variadic(G__7846,seq7845__$1);
});
reagent.session.put_BANG_ = (function reagent$session$put_BANG_(k,v){
return cljs.core.swap_BANG_.call(null,reagent.session.state,cljs.core.assoc,k,v);
});
/**
 * Gets the value at the path specified by the vector ks from the session,
 *   returns nil if it doesn't exist.
 */
reagent.session.get_in = (function reagent$session$get_in(var_args){
var args__7283__auto__ = [];
var len__7276__auto___7856 = arguments.length;
var i__7277__auto___7857 = (0);
while(true){
if((i__7277__auto___7857 < len__7276__auto___7856)){
args__7283__auto__.push((arguments[i__7277__auto___7857]));

var G__7858 = (i__7277__auto___7857 + (1));
i__7277__auto___7857 = G__7858;
continue;
} else {
}
break;
}

var argseq__7284__auto__ = ((((1) < args__7283__auto__.length))?(new cljs.core.IndexedSeq(args__7283__auto__.slice((1)),(0),null)):null);
return reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7284__auto__);
});

reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__7854){
var vec__7855 = p__7854;
var default$ = cljs.core.nth.call(null,vec__7855,(0),null);
return cljs.core.get_in.call(null,cljs.core.deref.call(null,reagent.session.state),ks,default$);
});

reagent.session.get_in.cljs$lang$maxFixedArity = (1);

reagent.session.get_in.cljs$lang$applyTo = (function (seq7852){
var G__7853 = cljs.core.first.call(null,seq7852);
var seq7852__$1 = cljs.core.next.call(null,seq7852);
return reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic(G__7853,seq7852__$1);
});
/**
 * Replace the current session's value with the result of executing f with
 *   the current value and args.
 */
reagent.session.swap_BANG_ = (function reagent$session$swap_BANG_(var_args){
var args__7283__auto__ = [];
var len__7276__auto___7861 = arguments.length;
var i__7277__auto___7862 = (0);
while(true){
if((i__7277__auto___7862 < len__7276__auto___7861)){
args__7283__auto__.push((arguments[i__7277__auto___7862]));

var G__7863 = (i__7277__auto___7862 + (1));
i__7277__auto___7862 = G__7863;
continue;
} else {
}
break;
}

var argseq__7284__auto__ = ((((1) < args__7283__auto__.length))?(new cljs.core.IndexedSeq(args__7283__auto__.slice((1)),(0),null)):null);
return reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7284__auto__);
});

reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return cljs.core.apply.call(null,cljs.core.swap_BANG_,reagent.session.state,f,args);
});

reagent.session.swap_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.swap_BANG_.cljs$lang$applyTo = (function (seq7859){
var G__7860 = cljs.core.first.call(null,seq7859);
var seq7859__$1 = cljs.core.next.call(null,seq7859);
return reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__7860,seq7859__$1);
});
/**
 * Remove all data from the session and start over cleanly.
 */
reagent.session.clear_BANG_ = (function reagent$session$clear_BANG_(){
return cljs.core.reset_BANG_.call(null,reagent.session.state,cljs.core.PersistentArrayMap.EMPTY);
});
reagent.session.reset_BANG_ = (function reagent$session$reset_BANG_(m){
return cljs.core.reset_BANG_.call(null,reagent.session.state,m);
});
/**
 * Remove a key from the session
 */
reagent.session.remove_BANG_ = (function reagent$session$remove_BANG_(k){
return cljs.core.swap_BANG_.call(null,reagent.session.state,cljs.core.dissoc,k);
});
/**
 * Associates a value in the session, where ks is a
 * sequence of keys and v is the new value and returns
 * a new nested structure. If any levels do not exist,
 * hash-maps will be created.
 */
reagent.session.assoc_in_BANG_ = (function reagent$session$assoc_in_BANG_(ks,v){
return cljs.core.swap_BANG_.call(null,reagent.session.state,(function (p1__7864_SHARP_){
return cljs.core.assoc_in.call(null,p1__7864_SHARP_,ks,v);
}));
});
/**
 * Destructive get from the session. This returns the current value of the key
 *   and then removes it from the session.
 */
reagent.session.get_BANG_ = (function reagent$session$get_BANG_(var_args){
var args__7283__auto__ = [];
var len__7276__auto___7869 = arguments.length;
var i__7277__auto___7870 = (0);
while(true){
if((i__7277__auto___7870 < len__7276__auto___7869)){
args__7283__auto__.push((arguments[i__7277__auto___7870]));

var G__7871 = (i__7277__auto___7870 + (1));
i__7277__auto___7870 = G__7871;
continue;
} else {
}
break;
}

var argseq__7284__auto__ = ((((1) < args__7283__auto__.length))?(new cljs.core.IndexedSeq(args__7283__auto__.slice((1)),(0),null)):null);
return reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7284__auto__);
});

reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__7867){
var vec__7868 = p__7867;
var default$ = cljs.core.nth.call(null,vec__7868,(0),null);
var cur = reagent.session.get.call(null,k,default$);
reagent.session.remove_BANG_.call(null,k);

return cur;
});

reagent.session.get_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.get_BANG_.cljs$lang$applyTo = (function (seq7865){
var G__7866 = cljs.core.first.call(null,seq7865);
var seq7865__$1 = cljs.core.next.call(null,seq7865);
return reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__7866,seq7865__$1);
});
/**
 * Destructive get from the session. This returns the current value of the path
 *   specified by the vector ks and then removes it from the session.
 */
reagent.session.get_in_BANG_ = (function reagent$session$get_in_BANG_(var_args){
var args__7283__auto__ = [];
var len__7276__auto___7876 = arguments.length;
var i__7277__auto___7877 = (0);
while(true){
if((i__7277__auto___7877 < len__7276__auto___7876)){
args__7283__auto__.push((arguments[i__7277__auto___7877]));

var G__7878 = (i__7277__auto___7877 + (1));
i__7277__auto___7877 = G__7878;
continue;
} else {
}
break;
}

var argseq__7284__auto__ = ((((1) < args__7283__auto__.length))?(new cljs.core.IndexedSeq(args__7283__auto__.slice((1)),(0),null)):null);
return reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7284__auto__);
});

reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__7874){
var vec__7875 = p__7874;
var default$ = cljs.core.nth.call(null,vec__7875,(0),null);
var cur = cljs.core.get_in.call(null,cljs.core.deref.call(null,reagent.session.state),ks,default$);
reagent.session.assoc_in_BANG_.call(null,ks,null);

return cur;
});

reagent.session.get_in_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.get_in_BANG_.cljs$lang$applyTo = (function (seq7872){
var G__7873 = cljs.core.first.call(null,seq7872);
var seq7872__$1 = cljs.core.next.call(null,seq7872);
return reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__7873,seq7872__$1);
});
/**
 * Updates a value in session where k is a key and f
 * is the function that takes the old value along with any
 * supplied args and return the new value. If key is not
 * present it will be added.
 */
reagent.session.update_BANG_ = (function reagent$session$update_BANG_(var_args){
var args__7283__auto__ = [];
var len__7276__auto___7883 = arguments.length;
var i__7277__auto___7884 = (0);
while(true){
if((i__7277__auto___7884 < len__7276__auto___7883)){
args__7283__auto__.push((arguments[i__7277__auto___7884]));

var G__7885 = (i__7277__auto___7884 + (1));
i__7277__auto___7884 = G__7885;
continue;
} else {
}
break;
}

var argseq__7284__auto__ = ((((2) < args__7283__auto__.length))?(new cljs.core.IndexedSeq(args__7283__auto__.slice((2)),(0),null)):null);
return reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7284__auto__);
});

reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (k,f,args){
return cljs.core.swap_BANG_.call(null,reagent.session.state,(function (p1__7879_SHARP_){
return cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.update,p1__7879_SHARP_,k,f),args);
}));
});

reagent.session.update_BANG_.cljs$lang$maxFixedArity = (2);

reagent.session.update_BANG_.cljs$lang$applyTo = (function (seq7880){
var G__7881 = cljs.core.first.call(null,seq7880);
var seq7880__$1 = cljs.core.next.call(null,seq7880);
var G__7882 = cljs.core.first.call(null,seq7880__$1);
var seq7880__$2 = cljs.core.next.call(null,seq7880__$1);
return reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__7881,G__7882,seq7880__$2);
});
/**
 * 'Updates a value in the session, where ks is a
 * sequence of keys and f is a function that will
 * take the old value along with any supplied args and return
 * the new value. If any levels do not exist, hash-maps
 * will be created.
 */
reagent.session.update_in_BANG_ = (function reagent$session$update_in_BANG_(var_args){
var args__7283__auto__ = [];
var len__7276__auto___7890 = arguments.length;
var i__7277__auto___7891 = (0);
while(true){
if((i__7277__auto___7891 < len__7276__auto___7890)){
args__7283__auto__.push((arguments[i__7277__auto___7891]));

var G__7892 = (i__7277__auto___7891 + (1));
i__7277__auto___7891 = G__7892;
continue;
} else {
}
break;
}

var argseq__7284__auto__ = ((((2) < args__7283__auto__.length))?(new cljs.core.IndexedSeq(args__7283__auto__.slice((2)),(0),null)):null);
return reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7284__auto__);
});

reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,f,args){
return cljs.core.swap_BANG_.call(null,reagent.session.state,(function (p1__7886_SHARP_){
return cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.update_in,p1__7886_SHARP_,ks,f),args);
}));
});

reagent.session.update_in_BANG_.cljs$lang$maxFixedArity = (2);

reagent.session.update_in_BANG_.cljs$lang$applyTo = (function (seq7887){
var G__7888 = cljs.core.first.call(null,seq7887);
var seq7887__$1 = cljs.core.next.call(null,seq7887);
var G__7889 = cljs.core.first.call(null,seq7887__$1);
var seq7887__$2 = cljs.core.next.call(null,seq7887__$1);
return reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__7888,G__7889,seq7887__$2);
});

//# sourceMappingURL=session.js.map