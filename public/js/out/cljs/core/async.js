// Compiled by ClojureScript 1.8.40 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args9396 = [];
var len__7276__auto___9402 = arguments.length;
var i__7277__auto___9403 = (0);
while(true){
if((i__7277__auto___9403 < len__7276__auto___9402)){
args9396.push((arguments[i__7277__auto___9403]));

var G__9404 = (i__7277__auto___9403 + (1));
i__7277__auto___9403 = G__9404;
continue;
} else {
}
break;
}

var G__9398 = args9396.length;
switch (G__9398) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9396.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async9399 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9399 = (function (f,blockable,meta9400){
this.f = f;
this.blockable = blockable;
this.meta9400 = meta9400;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async9399.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9401,meta9400__$1){
var self__ = this;
var _9401__$1 = this;
return (new cljs.core.async.t_cljs$core$async9399(self__.f,self__.blockable,meta9400__$1));
});

cljs.core.async.t_cljs$core$async9399.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9401){
var self__ = this;
var _9401__$1 = this;
return self__.meta9400;
});

cljs.core.async.t_cljs$core$async9399.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async9399.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async9399.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async9399.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async9399.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta9400","meta9400",831437102,null)], null);
});

cljs.core.async.t_cljs$core$async9399.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async9399.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9399";

cljs.core.async.t_cljs$core$async9399.cljs$lang$ctorPrWriter = (function (this__6813__auto__,writer__6814__auto__,opt__6815__auto__){
return cljs.core._write.call(null,writer__6814__auto__,"cljs.core.async/t_cljs$core$async9399");
});

cljs.core.async.__GT_t_cljs$core$async9399 = (function cljs$core$async$__GT_t_cljs$core$async9399(f__$1,blockable__$1,meta9400){
return (new cljs.core.async.t_cljs$core$async9399(f__$1,blockable__$1,meta9400));
});

}

return (new cljs.core.async.t_cljs$core$async9399(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args9408 = [];
var len__7276__auto___9411 = arguments.length;
var i__7277__auto___9412 = (0);
while(true){
if((i__7277__auto___9412 < len__7276__auto___9411)){
args9408.push((arguments[i__7277__auto___9412]));

var G__9413 = (i__7277__auto___9412 + (1));
i__7277__auto___9412 = G__9413;
continue;
} else {
}
break;
}

var G__9410 = args9408.length;
switch (G__9410) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9408.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args9415 = [];
var len__7276__auto___9418 = arguments.length;
var i__7277__auto___9419 = (0);
while(true){
if((i__7277__auto___9419 < len__7276__auto___9418)){
args9415.push((arguments[i__7277__auto___9419]));

var G__9420 = (i__7277__auto___9419 + (1));
i__7277__auto___9419 = G__9420;
continue;
} else {
}
break;
}

var G__9417 = args9415.length;
switch (G__9417) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9415.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args9422 = [];
var len__7276__auto___9425 = arguments.length;
var i__7277__auto___9426 = (0);
while(true){
if((i__7277__auto___9426 < len__7276__auto___9425)){
args9422.push((arguments[i__7277__auto___9426]));

var G__9427 = (i__7277__auto___9426 + (1));
i__7277__auto___9426 = G__9427;
continue;
} else {
}
break;
}

var G__9424 = args9422.length;
switch (G__9424) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9422.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_9429 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_9429);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_9429,ret){
return (function (){
return fn1.call(null,val_9429);
});})(val_9429,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args9430 = [];
var len__7276__auto___9433 = arguments.length;
var i__7277__auto___9434 = (0);
while(true){
if((i__7277__auto___9434 < len__7276__auto___9433)){
args9430.push((arguments[i__7277__auto___9434]));

var G__9435 = (i__7277__auto___9434 + (1));
i__7277__auto___9434 = G__9435;
continue;
} else {
}
break;
}

var G__9432 = args9430.length;
switch (G__9432) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9430.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__7121__auto___9437 = n;
var x_9438 = (0);
while(true){
if((x_9438 < n__7121__auto___9437)){
(a[x_9438] = (0));

var G__9439 = (x_9438 + (1));
x_9438 = G__9439;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__9440 = (i + (1));
i = G__9440;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async9444 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9444 = (function (alt_flag,flag,meta9445){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta9445 = meta9445;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async9444.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_9446,meta9445__$1){
var self__ = this;
var _9446__$1 = this;
return (new cljs.core.async.t_cljs$core$async9444(self__.alt_flag,self__.flag,meta9445__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async9444.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_9446){
var self__ = this;
var _9446__$1 = this;
return self__.meta9445;
});})(flag))
;

cljs.core.async.t_cljs$core$async9444.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async9444.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async9444.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async9444.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async9444.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta9445","meta9445",-49122875,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async9444.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async9444.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9444";

cljs.core.async.t_cljs$core$async9444.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__6813__auto__,writer__6814__auto__,opt__6815__auto__){
return cljs.core._write.call(null,writer__6814__auto__,"cljs.core.async/t_cljs$core$async9444");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async9444 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async9444(alt_flag__$1,flag__$1,meta9445){
return (new cljs.core.async.t_cljs$core$async9444(alt_flag__$1,flag__$1,meta9445));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async9444(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async9450 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9450 = (function (alt_handler,flag,cb,meta9451){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta9451 = meta9451;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async9450.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9452,meta9451__$1){
var self__ = this;
var _9452__$1 = this;
return (new cljs.core.async.t_cljs$core$async9450(self__.alt_handler,self__.flag,self__.cb,meta9451__$1));
});

cljs.core.async.t_cljs$core$async9450.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9452){
var self__ = this;
var _9452__$1 = this;
return self__.meta9451;
});

cljs.core.async.t_cljs$core$async9450.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async9450.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async9450.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async9450.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async9450.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta9451","meta9451",511439263,null)], null);
});

cljs.core.async.t_cljs$core$async9450.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async9450.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9450";

cljs.core.async.t_cljs$core$async9450.cljs$lang$ctorPrWriter = (function (this__6813__auto__,writer__6814__auto__,opt__6815__auto__){
return cljs.core._write.call(null,writer__6814__auto__,"cljs.core.async/t_cljs$core$async9450");
});

cljs.core.async.__GT_t_cljs$core$async9450 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async9450(alt_handler__$1,flag__$1,cb__$1,meta9451){
return (new cljs.core.async.t_cljs$core$async9450(alt_handler__$1,flag__$1,cb__$1,meta9451));
});

}

return (new cljs.core.async.t_cljs$core$async9450(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__9453_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__9453_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__9454_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__9454_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__6207__auto__ = wport;
if(cljs.core.truth_(or__6207__auto__)){
return or__6207__auto__;
} else {
return port;
}
})()], null));
} else {
var G__9455 = (i + (1));
i = G__9455;
continue;
}
} else {
return null;
}
break;
}
})();
var or__6207__auto__ = ret;
if(cljs.core.truth_(or__6207__auto__)){
return or__6207__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__6195__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__6195__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__6195__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__7283__auto__ = [];
var len__7276__auto___9461 = arguments.length;
var i__7277__auto___9462 = (0);
while(true){
if((i__7277__auto___9462 < len__7276__auto___9461)){
args__7283__auto__.push((arguments[i__7277__auto___9462]));

var G__9463 = (i__7277__auto___9462 + (1));
i__7277__auto___9462 = G__9463;
continue;
} else {
}
break;
}

var argseq__7284__auto__ = ((((1) < args__7283__auto__.length))?(new cljs.core.IndexedSeq(args__7283__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7284__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__9458){
var map__9459 = p__9458;
var map__9459__$1 = ((((!((map__9459 == null)))?((((map__9459.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9459.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9459):map__9459);
var opts = map__9459__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq9456){
var G__9457 = cljs.core.first.call(null,seq9456);
var seq9456__$1 = cljs.core.next.call(null,seq9456);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__9457,seq9456__$1);
});
/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args9464 = [];
var len__7276__auto___9514 = arguments.length;
var i__7277__auto___9515 = (0);
while(true){
if((i__7277__auto___9515 < len__7276__auto___9514)){
args9464.push((arguments[i__7277__auto___9515]));

var G__9516 = (i__7277__auto___9515 + (1));
i__7277__auto___9515 = G__9516;
continue;
} else {
}
break;
}

var G__9466 = args9464.length;
switch (G__9466) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9464.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__9351__auto___9518 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9351__auto___9518){
return (function (){
var f__9352__auto__ = (function (){var switch__9239__auto__ = ((function (c__9351__auto___9518){
return (function (state_9490){
var state_val_9491 = (state_9490[(1)]);
if((state_val_9491 === (7))){
var inst_9486 = (state_9490[(2)]);
var state_9490__$1 = state_9490;
var statearr_9492_9519 = state_9490__$1;
(statearr_9492_9519[(2)] = inst_9486);

(statearr_9492_9519[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9491 === (1))){
var state_9490__$1 = state_9490;
var statearr_9493_9520 = state_9490__$1;
(statearr_9493_9520[(2)] = null);

(statearr_9493_9520[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9491 === (4))){
var inst_9469 = (state_9490[(7)]);
var inst_9469__$1 = (state_9490[(2)]);
var inst_9470 = (inst_9469__$1 == null);
var state_9490__$1 = (function (){var statearr_9494 = state_9490;
(statearr_9494[(7)] = inst_9469__$1);

return statearr_9494;
})();
if(cljs.core.truth_(inst_9470)){
var statearr_9495_9521 = state_9490__$1;
(statearr_9495_9521[(1)] = (5));

} else {
var statearr_9496_9522 = state_9490__$1;
(statearr_9496_9522[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9491 === (13))){
var state_9490__$1 = state_9490;
var statearr_9497_9523 = state_9490__$1;
(statearr_9497_9523[(2)] = null);

(statearr_9497_9523[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9491 === (6))){
var inst_9469 = (state_9490[(7)]);
var state_9490__$1 = state_9490;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9490__$1,(11),to,inst_9469);
} else {
if((state_val_9491 === (3))){
var inst_9488 = (state_9490[(2)]);
var state_9490__$1 = state_9490;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9490__$1,inst_9488);
} else {
if((state_val_9491 === (12))){
var state_9490__$1 = state_9490;
var statearr_9498_9524 = state_9490__$1;
(statearr_9498_9524[(2)] = null);

(statearr_9498_9524[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9491 === (2))){
var state_9490__$1 = state_9490;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9490__$1,(4),from);
} else {
if((state_val_9491 === (11))){
var inst_9479 = (state_9490[(2)]);
var state_9490__$1 = state_9490;
if(cljs.core.truth_(inst_9479)){
var statearr_9499_9525 = state_9490__$1;
(statearr_9499_9525[(1)] = (12));

} else {
var statearr_9500_9526 = state_9490__$1;
(statearr_9500_9526[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9491 === (9))){
var state_9490__$1 = state_9490;
var statearr_9501_9527 = state_9490__$1;
(statearr_9501_9527[(2)] = null);

(statearr_9501_9527[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9491 === (5))){
var state_9490__$1 = state_9490;
if(cljs.core.truth_(close_QMARK_)){
var statearr_9502_9528 = state_9490__$1;
(statearr_9502_9528[(1)] = (8));

} else {
var statearr_9503_9529 = state_9490__$1;
(statearr_9503_9529[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9491 === (14))){
var inst_9484 = (state_9490[(2)]);
var state_9490__$1 = state_9490;
var statearr_9504_9530 = state_9490__$1;
(statearr_9504_9530[(2)] = inst_9484);

(statearr_9504_9530[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9491 === (10))){
var inst_9476 = (state_9490[(2)]);
var state_9490__$1 = state_9490;
var statearr_9505_9531 = state_9490__$1;
(statearr_9505_9531[(2)] = inst_9476);

(statearr_9505_9531[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9491 === (8))){
var inst_9473 = cljs.core.async.close_BANG_.call(null,to);
var state_9490__$1 = state_9490;
var statearr_9506_9532 = state_9490__$1;
(statearr_9506_9532[(2)] = inst_9473);

(statearr_9506_9532[(1)] = (10));


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
});})(c__9351__auto___9518))
;
return ((function (switch__9239__auto__,c__9351__auto___9518){
return (function() {
var cljs$core$async$state_machine__9240__auto__ = null;
var cljs$core$async$state_machine__9240__auto____0 = (function (){
var statearr_9510 = [null,null,null,null,null,null,null,null];
(statearr_9510[(0)] = cljs$core$async$state_machine__9240__auto__);

(statearr_9510[(1)] = (1));

return statearr_9510;
});
var cljs$core$async$state_machine__9240__auto____1 = (function (state_9490){
while(true){
var ret_value__9241__auto__ = (function (){try{while(true){
var result__9242__auto__ = switch__9239__auto__.call(null,state_9490);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9242__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9242__auto__;
}
break;
}
}catch (e9511){if((e9511 instanceof Object)){
var ex__9243__auto__ = e9511;
var statearr_9512_9533 = state_9490;
(statearr_9512_9533[(5)] = ex__9243__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9490);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9511;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9241__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9534 = state_9490;
state_9490 = G__9534;
continue;
} else {
return ret_value__9241__auto__;
}
break;
}
});
cljs$core$async$state_machine__9240__auto__ = function(state_9490){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9240__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9240__auto____1.call(this,state_9490);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9240__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9240__auto____0;
cljs$core$async$state_machine__9240__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9240__auto____1;
return cljs$core$async$state_machine__9240__auto__;
})()
;})(switch__9239__auto__,c__9351__auto___9518))
})();
var state__9353__auto__ = (function (){var statearr_9513 = f__9352__auto__.call(null);
(statearr_9513[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9351__auto___9518);

return statearr_9513;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9353__auto__);
});})(c__9351__auto___9518))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__9718){
var vec__9719 = p__9718;
var v = cljs.core.nth.call(null,vec__9719,(0),null);
var p = cljs.core.nth.call(null,vec__9719,(1),null);
var job = vec__9719;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__9351__auto___9901 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9351__auto___9901,res,vec__9719,v,p,job,jobs,results){
return (function (){
var f__9352__auto__ = (function (){var switch__9239__auto__ = ((function (c__9351__auto___9901,res,vec__9719,v,p,job,jobs,results){
return (function (state_9724){
var state_val_9725 = (state_9724[(1)]);
if((state_val_9725 === (1))){
var state_9724__$1 = state_9724;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9724__$1,(2),res,v);
} else {
if((state_val_9725 === (2))){
var inst_9721 = (state_9724[(2)]);
var inst_9722 = cljs.core.async.close_BANG_.call(null,res);
var state_9724__$1 = (function (){var statearr_9726 = state_9724;
(statearr_9726[(7)] = inst_9721);

return statearr_9726;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9724__$1,inst_9722);
} else {
return null;
}
}
});})(c__9351__auto___9901,res,vec__9719,v,p,job,jobs,results))
;
return ((function (switch__9239__auto__,c__9351__auto___9901,res,vec__9719,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__9240__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__9240__auto____0 = (function (){
var statearr_9730 = [null,null,null,null,null,null,null,null];
(statearr_9730[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__9240__auto__);

(statearr_9730[(1)] = (1));

return statearr_9730;
});
var cljs$core$async$pipeline_STAR__$_state_machine__9240__auto____1 = (function (state_9724){
while(true){
var ret_value__9241__auto__ = (function (){try{while(true){
var result__9242__auto__ = switch__9239__auto__.call(null,state_9724);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9242__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9242__auto__;
}
break;
}
}catch (e9731){if((e9731 instanceof Object)){
var ex__9243__auto__ = e9731;
var statearr_9732_9902 = state_9724;
(statearr_9732_9902[(5)] = ex__9243__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9724);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9731;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9241__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9903 = state_9724;
state_9724 = G__9903;
continue;
} else {
return ret_value__9241__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__9240__auto__ = function(state_9724){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__9240__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__9240__auto____1.call(this,state_9724);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__9240__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__9240__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__9240__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__9240__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__9240__auto__;
})()
;})(switch__9239__auto__,c__9351__auto___9901,res,vec__9719,v,p,job,jobs,results))
})();
var state__9353__auto__ = (function (){var statearr_9733 = f__9352__auto__.call(null);
(statearr_9733[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9351__auto___9901);

return statearr_9733;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9353__auto__);
});})(c__9351__auto___9901,res,vec__9719,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__9734){
var vec__9735 = p__9734;
var v = cljs.core.nth.call(null,vec__9735,(0),null);
var p = cljs.core.nth.call(null,vec__9735,(1),null);
var job = vec__9735;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__7121__auto___9904 = n;
var __9905 = (0);
while(true){
if((__9905 < n__7121__auto___9904)){
var G__9736_9906 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__9736_9906) {
case "compute":
var c__9351__auto___9908 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__9905,c__9351__auto___9908,G__9736_9906,n__7121__auto___9904,jobs,results,process,async){
return (function (){
var f__9352__auto__ = (function (){var switch__9239__auto__ = ((function (__9905,c__9351__auto___9908,G__9736_9906,n__7121__auto___9904,jobs,results,process,async){
return (function (state_9749){
var state_val_9750 = (state_9749[(1)]);
if((state_val_9750 === (1))){
var state_9749__$1 = state_9749;
var statearr_9751_9909 = state_9749__$1;
(statearr_9751_9909[(2)] = null);

(statearr_9751_9909[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9750 === (2))){
var state_9749__$1 = state_9749;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9749__$1,(4),jobs);
} else {
if((state_val_9750 === (3))){
var inst_9747 = (state_9749[(2)]);
var state_9749__$1 = state_9749;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9749__$1,inst_9747);
} else {
if((state_val_9750 === (4))){
var inst_9739 = (state_9749[(2)]);
var inst_9740 = process.call(null,inst_9739);
var state_9749__$1 = state_9749;
if(cljs.core.truth_(inst_9740)){
var statearr_9752_9910 = state_9749__$1;
(statearr_9752_9910[(1)] = (5));

} else {
var statearr_9753_9911 = state_9749__$1;
(statearr_9753_9911[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9750 === (5))){
var state_9749__$1 = state_9749;
var statearr_9754_9912 = state_9749__$1;
(statearr_9754_9912[(2)] = null);

(statearr_9754_9912[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9750 === (6))){
var state_9749__$1 = state_9749;
var statearr_9755_9913 = state_9749__$1;
(statearr_9755_9913[(2)] = null);

(statearr_9755_9913[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9750 === (7))){
var inst_9745 = (state_9749[(2)]);
var state_9749__$1 = state_9749;
var statearr_9756_9914 = state_9749__$1;
(statearr_9756_9914[(2)] = inst_9745);

(statearr_9756_9914[(1)] = (3));


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
});})(__9905,c__9351__auto___9908,G__9736_9906,n__7121__auto___9904,jobs,results,process,async))
;
return ((function (__9905,switch__9239__auto__,c__9351__auto___9908,G__9736_9906,n__7121__auto___9904,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__9240__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__9240__auto____0 = (function (){
var statearr_9760 = [null,null,null,null,null,null,null];
(statearr_9760[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__9240__auto__);

(statearr_9760[(1)] = (1));

return statearr_9760;
});
var cljs$core$async$pipeline_STAR__$_state_machine__9240__auto____1 = (function (state_9749){
while(true){
var ret_value__9241__auto__ = (function (){try{while(true){
var result__9242__auto__ = switch__9239__auto__.call(null,state_9749);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9242__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9242__auto__;
}
break;
}
}catch (e9761){if((e9761 instanceof Object)){
var ex__9243__auto__ = e9761;
var statearr_9762_9915 = state_9749;
(statearr_9762_9915[(5)] = ex__9243__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9749);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9761;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9241__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9916 = state_9749;
state_9749 = G__9916;
continue;
} else {
return ret_value__9241__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__9240__auto__ = function(state_9749){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__9240__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__9240__auto____1.call(this,state_9749);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__9240__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__9240__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__9240__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__9240__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__9240__auto__;
})()
;})(__9905,switch__9239__auto__,c__9351__auto___9908,G__9736_9906,n__7121__auto___9904,jobs,results,process,async))
})();
var state__9353__auto__ = (function (){var statearr_9763 = f__9352__auto__.call(null);
(statearr_9763[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9351__auto___9908);

return statearr_9763;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9353__auto__);
});})(__9905,c__9351__auto___9908,G__9736_9906,n__7121__auto___9904,jobs,results,process,async))
);


break;
case "async":
var c__9351__auto___9917 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__9905,c__9351__auto___9917,G__9736_9906,n__7121__auto___9904,jobs,results,process,async){
return (function (){
var f__9352__auto__ = (function (){var switch__9239__auto__ = ((function (__9905,c__9351__auto___9917,G__9736_9906,n__7121__auto___9904,jobs,results,process,async){
return (function (state_9776){
var state_val_9777 = (state_9776[(1)]);
if((state_val_9777 === (1))){
var state_9776__$1 = state_9776;
var statearr_9778_9918 = state_9776__$1;
(statearr_9778_9918[(2)] = null);

(statearr_9778_9918[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9777 === (2))){
var state_9776__$1 = state_9776;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9776__$1,(4),jobs);
} else {
if((state_val_9777 === (3))){
var inst_9774 = (state_9776[(2)]);
var state_9776__$1 = state_9776;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9776__$1,inst_9774);
} else {
if((state_val_9777 === (4))){
var inst_9766 = (state_9776[(2)]);
var inst_9767 = async.call(null,inst_9766);
var state_9776__$1 = state_9776;
if(cljs.core.truth_(inst_9767)){
var statearr_9779_9919 = state_9776__$1;
(statearr_9779_9919[(1)] = (5));

} else {
var statearr_9780_9920 = state_9776__$1;
(statearr_9780_9920[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9777 === (5))){
var state_9776__$1 = state_9776;
var statearr_9781_9921 = state_9776__$1;
(statearr_9781_9921[(2)] = null);

(statearr_9781_9921[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9777 === (6))){
var state_9776__$1 = state_9776;
var statearr_9782_9922 = state_9776__$1;
(statearr_9782_9922[(2)] = null);

(statearr_9782_9922[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9777 === (7))){
var inst_9772 = (state_9776[(2)]);
var state_9776__$1 = state_9776;
var statearr_9783_9923 = state_9776__$1;
(statearr_9783_9923[(2)] = inst_9772);

(statearr_9783_9923[(1)] = (3));


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
});})(__9905,c__9351__auto___9917,G__9736_9906,n__7121__auto___9904,jobs,results,process,async))
;
return ((function (__9905,switch__9239__auto__,c__9351__auto___9917,G__9736_9906,n__7121__auto___9904,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__9240__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__9240__auto____0 = (function (){
var statearr_9787 = [null,null,null,null,null,null,null];
(statearr_9787[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__9240__auto__);

(statearr_9787[(1)] = (1));

return statearr_9787;
});
var cljs$core$async$pipeline_STAR__$_state_machine__9240__auto____1 = (function (state_9776){
while(true){
var ret_value__9241__auto__ = (function (){try{while(true){
var result__9242__auto__ = switch__9239__auto__.call(null,state_9776);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9242__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9242__auto__;
}
break;
}
}catch (e9788){if((e9788 instanceof Object)){
var ex__9243__auto__ = e9788;
var statearr_9789_9924 = state_9776;
(statearr_9789_9924[(5)] = ex__9243__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9776);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9788;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9241__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9925 = state_9776;
state_9776 = G__9925;
continue;
} else {
return ret_value__9241__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__9240__auto__ = function(state_9776){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__9240__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__9240__auto____1.call(this,state_9776);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__9240__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__9240__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__9240__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__9240__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__9240__auto__;
})()
;})(__9905,switch__9239__auto__,c__9351__auto___9917,G__9736_9906,n__7121__auto___9904,jobs,results,process,async))
})();
var state__9353__auto__ = (function (){var statearr_9790 = f__9352__auto__.call(null);
(statearr_9790[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9351__auto___9917);

return statearr_9790;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9353__auto__);
});})(__9905,c__9351__auto___9917,G__9736_9906,n__7121__auto___9904,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__9926 = (__9905 + (1));
__9905 = G__9926;
continue;
} else {
}
break;
}

var c__9351__auto___9927 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9351__auto___9927,jobs,results,process,async){
return (function (){
var f__9352__auto__ = (function (){var switch__9239__auto__ = ((function (c__9351__auto___9927,jobs,results,process,async){
return (function (state_9812){
var state_val_9813 = (state_9812[(1)]);
if((state_val_9813 === (1))){
var state_9812__$1 = state_9812;
var statearr_9814_9928 = state_9812__$1;
(statearr_9814_9928[(2)] = null);

(statearr_9814_9928[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9813 === (2))){
var state_9812__$1 = state_9812;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9812__$1,(4),from);
} else {
if((state_val_9813 === (3))){
var inst_9810 = (state_9812[(2)]);
var state_9812__$1 = state_9812;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9812__$1,inst_9810);
} else {
if((state_val_9813 === (4))){
var inst_9793 = (state_9812[(7)]);
var inst_9793__$1 = (state_9812[(2)]);
var inst_9794 = (inst_9793__$1 == null);
var state_9812__$1 = (function (){var statearr_9815 = state_9812;
(statearr_9815[(7)] = inst_9793__$1);

return statearr_9815;
})();
if(cljs.core.truth_(inst_9794)){
var statearr_9816_9929 = state_9812__$1;
(statearr_9816_9929[(1)] = (5));

} else {
var statearr_9817_9930 = state_9812__$1;
(statearr_9817_9930[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9813 === (5))){
var inst_9796 = cljs.core.async.close_BANG_.call(null,jobs);
var state_9812__$1 = state_9812;
var statearr_9818_9931 = state_9812__$1;
(statearr_9818_9931[(2)] = inst_9796);

(statearr_9818_9931[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9813 === (6))){
var inst_9793 = (state_9812[(7)]);
var inst_9798 = (state_9812[(8)]);
var inst_9798__$1 = cljs.core.async.chan.call(null,(1));
var inst_9799 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_9800 = [inst_9793,inst_9798__$1];
var inst_9801 = (new cljs.core.PersistentVector(null,2,(5),inst_9799,inst_9800,null));
var state_9812__$1 = (function (){var statearr_9819 = state_9812;
(statearr_9819[(8)] = inst_9798__$1);

return statearr_9819;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9812__$1,(8),jobs,inst_9801);
} else {
if((state_val_9813 === (7))){
var inst_9808 = (state_9812[(2)]);
var state_9812__$1 = state_9812;
var statearr_9820_9932 = state_9812__$1;
(statearr_9820_9932[(2)] = inst_9808);

(statearr_9820_9932[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9813 === (8))){
var inst_9798 = (state_9812[(8)]);
var inst_9803 = (state_9812[(2)]);
var state_9812__$1 = (function (){var statearr_9821 = state_9812;
(statearr_9821[(9)] = inst_9803);

return statearr_9821;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9812__$1,(9),results,inst_9798);
} else {
if((state_val_9813 === (9))){
var inst_9805 = (state_9812[(2)]);
var state_9812__$1 = (function (){var statearr_9822 = state_9812;
(statearr_9822[(10)] = inst_9805);

return statearr_9822;
})();
var statearr_9823_9933 = state_9812__$1;
(statearr_9823_9933[(2)] = null);

(statearr_9823_9933[(1)] = (2));


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
});})(c__9351__auto___9927,jobs,results,process,async))
;
return ((function (switch__9239__auto__,c__9351__auto___9927,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__9240__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__9240__auto____0 = (function (){
var statearr_9827 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_9827[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__9240__auto__);

(statearr_9827[(1)] = (1));

return statearr_9827;
});
var cljs$core$async$pipeline_STAR__$_state_machine__9240__auto____1 = (function (state_9812){
while(true){
var ret_value__9241__auto__ = (function (){try{while(true){
var result__9242__auto__ = switch__9239__auto__.call(null,state_9812);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9242__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9242__auto__;
}
break;
}
}catch (e9828){if((e9828 instanceof Object)){
var ex__9243__auto__ = e9828;
var statearr_9829_9934 = state_9812;
(statearr_9829_9934[(5)] = ex__9243__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9812);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9828;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9241__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9935 = state_9812;
state_9812 = G__9935;
continue;
} else {
return ret_value__9241__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__9240__auto__ = function(state_9812){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__9240__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__9240__auto____1.call(this,state_9812);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__9240__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__9240__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__9240__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__9240__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__9240__auto__;
})()
;})(switch__9239__auto__,c__9351__auto___9927,jobs,results,process,async))
})();
var state__9353__auto__ = (function (){var statearr_9830 = f__9352__auto__.call(null);
(statearr_9830[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9351__auto___9927);

return statearr_9830;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9353__auto__);
});})(c__9351__auto___9927,jobs,results,process,async))
);


var c__9351__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9351__auto__,jobs,results,process,async){
return (function (){
var f__9352__auto__ = (function (){var switch__9239__auto__ = ((function (c__9351__auto__,jobs,results,process,async){
return (function (state_9868){
var state_val_9869 = (state_9868[(1)]);
if((state_val_9869 === (7))){
var inst_9864 = (state_9868[(2)]);
var state_9868__$1 = state_9868;
var statearr_9870_9936 = state_9868__$1;
(statearr_9870_9936[(2)] = inst_9864);

(statearr_9870_9936[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9869 === (20))){
var state_9868__$1 = state_9868;
var statearr_9871_9937 = state_9868__$1;
(statearr_9871_9937[(2)] = null);

(statearr_9871_9937[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9869 === (1))){
var state_9868__$1 = state_9868;
var statearr_9872_9938 = state_9868__$1;
(statearr_9872_9938[(2)] = null);

(statearr_9872_9938[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9869 === (4))){
var inst_9833 = (state_9868[(7)]);
var inst_9833__$1 = (state_9868[(2)]);
var inst_9834 = (inst_9833__$1 == null);
var state_9868__$1 = (function (){var statearr_9873 = state_9868;
(statearr_9873[(7)] = inst_9833__$1);

return statearr_9873;
})();
if(cljs.core.truth_(inst_9834)){
var statearr_9874_9939 = state_9868__$1;
(statearr_9874_9939[(1)] = (5));

} else {
var statearr_9875_9940 = state_9868__$1;
(statearr_9875_9940[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9869 === (15))){
var inst_9846 = (state_9868[(8)]);
var state_9868__$1 = state_9868;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9868__$1,(18),to,inst_9846);
} else {
if((state_val_9869 === (21))){
var inst_9859 = (state_9868[(2)]);
var state_9868__$1 = state_9868;
var statearr_9876_9941 = state_9868__$1;
(statearr_9876_9941[(2)] = inst_9859);

(statearr_9876_9941[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9869 === (13))){
var inst_9861 = (state_9868[(2)]);
var state_9868__$1 = (function (){var statearr_9877 = state_9868;
(statearr_9877[(9)] = inst_9861);

return statearr_9877;
})();
var statearr_9878_9942 = state_9868__$1;
(statearr_9878_9942[(2)] = null);

(statearr_9878_9942[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9869 === (6))){
var inst_9833 = (state_9868[(7)]);
var state_9868__$1 = state_9868;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9868__$1,(11),inst_9833);
} else {
if((state_val_9869 === (17))){
var inst_9854 = (state_9868[(2)]);
var state_9868__$1 = state_9868;
if(cljs.core.truth_(inst_9854)){
var statearr_9879_9943 = state_9868__$1;
(statearr_9879_9943[(1)] = (19));

} else {
var statearr_9880_9944 = state_9868__$1;
(statearr_9880_9944[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9869 === (3))){
var inst_9866 = (state_9868[(2)]);
var state_9868__$1 = state_9868;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9868__$1,inst_9866);
} else {
if((state_val_9869 === (12))){
var inst_9843 = (state_9868[(10)]);
var state_9868__$1 = state_9868;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9868__$1,(14),inst_9843);
} else {
if((state_val_9869 === (2))){
var state_9868__$1 = state_9868;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9868__$1,(4),results);
} else {
if((state_val_9869 === (19))){
var state_9868__$1 = state_9868;
var statearr_9881_9945 = state_9868__$1;
(statearr_9881_9945[(2)] = null);

(statearr_9881_9945[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9869 === (11))){
var inst_9843 = (state_9868[(2)]);
var state_9868__$1 = (function (){var statearr_9882 = state_9868;
(statearr_9882[(10)] = inst_9843);

return statearr_9882;
})();
var statearr_9883_9946 = state_9868__$1;
(statearr_9883_9946[(2)] = null);

(statearr_9883_9946[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9869 === (9))){
var state_9868__$1 = state_9868;
var statearr_9884_9947 = state_9868__$1;
(statearr_9884_9947[(2)] = null);

(statearr_9884_9947[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9869 === (5))){
var state_9868__$1 = state_9868;
if(cljs.core.truth_(close_QMARK_)){
var statearr_9885_9948 = state_9868__$1;
(statearr_9885_9948[(1)] = (8));

} else {
var statearr_9886_9949 = state_9868__$1;
(statearr_9886_9949[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9869 === (14))){
var inst_9846 = (state_9868[(8)]);
var inst_9848 = (state_9868[(11)]);
var inst_9846__$1 = (state_9868[(2)]);
var inst_9847 = (inst_9846__$1 == null);
var inst_9848__$1 = cljs.core.not.call(null,inst_9847);
var state_9868__$1 = (function (){var statearr_9887 = state_9868;
(statearr_9887[(8)] = inst_9846__$1);

(statearr_9887[(11)] = inst_9848__$1);

return statearr_9887;
})();
if(inst_9848__$1){
var statearr_9888_9950 = state_9868__$1;
(statearr_9888_9950[(1)] = (15));

} else {
var statearr_9889_9951 = state_9868__$1;
(statearr_9889_9951[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9869 === (16))){
var inst_9848 = (state_9868[(11)]);
var state_9868__$1 = state_9868;
var statearr_9890_9952 = state_9868__$1;
(statearr_9890_9952[(2)] = inst_9848);

(statearr_9890_9952[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9869 === (10))){
var inst_9840 = (state_9868[(2)]);
var state_9868__$1 = state_9868;
var statearr_9891_9953 = state_9868__$1;
(statearr_9891_9953[(2)] = inst_9840);

(statearr_9891_9953[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9869 === (18))){
var inst_9851 = (state_9868[(2)]);
var state_9868__$1 = state_9868;
var statearr_9892_9954 = state_9868__$1;
(statearr_9892_9954[(2)] = inst_9851);

(statearr_9892_9954[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9869 === (8))){
var inst_9837 = cljs.core.async.close_BANG_.call(null,to);
var state_9868__$1 = state_9868;
var statearr_9893_9955 = state_9868__$1;
(statearr_9893_9955[(2)] = inst_9837);

(statearr_9893_9955[(1)] = (10));


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
});})(c__9351__auto__,jobs,results,process,async))
;
return ((function (switch__9239__auto__,c__9351__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__9240__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__9240__auto____0 = (function (){
var statearr_9897 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9897[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__9240__auto__);

(statearr_9897[(1)] = (1));

return statearr_9897;
});
var cljs$core$async$pipeline_STAR__$_state_machine__9240__auto____1 = (function (state_9868){
while(true){
var ret_value__9241__auto__ = (function (){try{while(true){
var result__9242__auto__ = switch__9239__auto__.call(null,state_9868);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9242__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9242__auto__;
}
break;
}
}catch (e9898){if((e9898 instanceof Object)){
var ex__9243__auto__ = e9898;
var statearr_9899_9956 = state_9868;
(statearr_9899_9956[(5)] = ex__9243__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9868);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9898;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9241__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9957 = state_9868;
state_9868 = G__9957;
continue;
} else {
return ret_value__9241__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__9240__auto__ = function(state_9868){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__9240__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__9240__auto____1.call(this,state_9868);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__9240__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__9240__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__9240__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__9240__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__9240__auto__;
})()
;})(switch__9239__auto__,c__9351__auto__,jobs,results,process,async))
})();
var state__9353__auto__ = (function (){var statearr_9900 = f__9352__auto__.call(null);
(statearr_9900[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9351__auto__);

return statearr_9900;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9353__auto__);
});})(c__9351__auto__,jobs,results,process,async))
);

return c__9351__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args9958 = [];
var len__7276__auto___9961 = arguments.length;
var i__7277__auto___9962 = (0);
while(true){
if((i__7277__auto___9962 < len__7276__auto___9961)){
args9958.push((arguments[i__7277__auto___9962]));

var G__9963 = (i__7277__auto___9962 + (1));
i__7277__auto___9962 = G__9963;
continue;
} else {
}
break;
}

var G__9960 = args9958.length;
switch (G__9960) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9958.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args9965 = [];
var len__7276__auto___9968 = arguments.length;
var i__7277__auto___9969 = (0);
while(true){
if((i__7277__auto___9969 < len__7276__auto___9968)){
args9965.push((arguments[i__7277__auto___9969]));

var G__9970 = (i__7277__auto___9969 + (1));
i__7277__auto___9969 = G__9970;
continue;
} else {
}
break;
}

var G__9967 = args9965.length;
switch (G__9967) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9965.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args9972 = [];
var len__7276__auto___10025 = arguments.length;
var i__7277__auto___10026 = (0);
while(true){
if((i__7277__auto___10026 < len__7276__auto___10025)){
args9972.push((arguments[i__7277__auto___10026]));

var G__10027 = (i__7277__auto___10026 + (1));
i__7277__auto___10026 = G__10027;
continue;
} else {
}
break;
}

var G__9974 = args9972.length;
switch (G__9974) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9972.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__9351__auto___10029 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9351__auto___10029,tc,fc){
return (function (){
var f__9352__auto__ = (function (){var switch__9239__auto__ = ((function (c__9351__auto___10029,tc,fc){
return (function (state_10000){
var state_val_10001 = (state_10000[(1)]);
if((state_val_10001 === (7))){
var inst_9996 = (state_10000[(2)]);
var state_10000__$1 = state_10000;
var statearr_10002_10030 = state_10000__$1;
(statearr_10002_10030[(2)] = inst_9996);

(statearr_10002_10030[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10001 === (1))){
var state_10000__$1 = state_10000;
var statearr_10003_10031 = state_10000__$1;
(statearr_10003_10031[(2)] = null);

(statearr_10003_10031[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10001 === (4))){
var inst_9977 = (state_10000[(7)]);
var inst_9977__$1 = (state_10000[(2)]);
var inst_9978 = (inst_9977__$1 == null);
var state_10000__$1 = (function (){var statearr_10004 = state_10000;
(statearr_10004[(7)] = inst_9977__$1);

return statearr_10004;
})();
if(cljs.core.truth_(inst_9978)){
var statearr_10005_10032 = state_10000__$1;
(statearr_10005_10032[(1)] = (5));

} else {
var statearr_10006_10033 = state_10000__$1;
(statearr_10006_10033[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10001 === (13))){
var state_10000__$1 = state_10000;
var statearr_10007_10034 = state_10000__$1;
(statearr_10007_10034[(2)] = null);

(statearr_10007_10034[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10001 === (6))){
var inst_9977 = (state_10000[(7)]);
var inst_9983 = p.call(null,inst_9977);
var state_10000__$1 = state_10000;
if(cljs.core.truth_(inst_9983)){
var statearr_10008_10035 = state_10000__$1;
(statearr_10008_10035[(1)] = (9));

} else {
var statearr_10009_10036 = state_10000__$1;
(statearr_10009_10036[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10001 === (3))){
var inst_9998 = (state_10000[(2)]);
var state_10000__$1 = state_10000;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10000__$1,inst_9998);
} else {
if((state_val_10001 === (12))){
var state_10000__$1 = state_10000;
var statearr_10010_10037 = state_10000__$1;
(statearr_10010_10037[(2)] = null);

(statearr_10010_10037[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10001 === (2))){
var state_10000__$1 = state_10000;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10000__$1,(4),ch);
} else {
if((state_val_10001 === (11))){
var inst_9977 = (state_10000[(7)]);
var inst_9987 = (state_10000[(2)]);
var state_10000__$1 = state_10000;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10000__$1,(8),inst_9987,inst_9977);
} else {
if((state_val_10001 === (9))){
var state_10000__$1 = state_10000;
var statearr_10011_10038 = state_10000__$1;
(statearr_10011_10038[(2)] = tc);

(statearr_10011_10038[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10001 === (5))){
var inst_9980 = cljs.core.async.close_BANG_.call(null,tc);
var inst_9981 = cljs.core.async.close_BANG_.call(null,fc);
var state_10000__$1 = (function (){var statearr_10012 = state_10000;
(statearr_10012[(8)] = inst_9980);

return statearr_10012;
})();
var statearr_10013_10039 = state_10000__$1;
(statearr_10013_10039[(2)] = inst_9981);

(statearr_10013_10039[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10001 === (14))){
var inst_9994 = (state_10000[(2)]);
var state_10000__$1 = state_10000;
var statearr_10014_10040 = state_10000__$1;
(statearr_10014_10040[(2)] = inst_9994);

(statearr_10014_10040[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10001 === (10))){
var state_10000__$1 = state_10000;
var statearr_10015_10041 = state_10000__$1;
(statearr_10015_10041[(2)] = fc);

(statearr_10015_10041[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10001 === (8))){
var inst_9989 = (state_10000[(2)]);
var state_10000__$1 = state_10000;
if(cljs.core.truth_(inst_9989)){
var statearr_10016_10042 = state_10000__$1;
(statearr_10016_10042[(1)] = (12));

} else {
var statearr_10017_10043 = state_10000__$1;
(statearr_10017_10043[(1)] = (13));

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
});})(c__9351__auto___10029,tc,fc))
;
return ((function (switch__9239__auto__,c__9351__auto___10029,tc,fc){
return (function() {
var cljs$core$async$state_machine__9240__auto__ = null;
var cljs$core$async$state_machine__9240__auto____0 = (function (){
var statearr_10021 = [null,null,null,null,null,null,null,null,null];
(statearr_10021[(0)] = cljs$core$async$state_machine__9240__auto__);

(statearr_10021[(1)] = (1));

return statearr_10021;
});
var cljs$core$async$state_machine__9240__auto____1 = (function (state_10000){
while(true){
var ret_value__9241__auto__ = (function (){try{while(true){
var result__9242__auto__ = switch__9239__auto__.call(null,state_10000);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9242__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9242__auto__;
}
break;
}
}catch (e10022){if((e10022 instanceof Object)){
var ex__9243__auto__ = e10022;
var statearr_10023_10044 = state_10000;
(statearr_10023_10044[(5)] = ex__9243__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10000);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10022;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9241__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10045 = state_10000;
state_10000 = G__10045;
continue;
} else {
return ret_value__9241__auto__;
}
break;
}
});
cljs$core$async$state_machine__9240__auto__ = function(state_10000){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9240__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9240__auto____1.call(this,state_10000);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9240__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9240__auto____0;
cljs$core$async$state_machine__9240__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9240__auto____1;
return cljs$core$async$state_machine__9240__auto__;
})()
;})(switch__9239__auto__,c__9351__auto___10029,tc,fc))
})();
var state__9353__auto__ = (function (){var statearr_10024 = f__9352__auto__.call(null);
(statearr_10024[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9351__auto___10029);

return statearr_10024;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9353__auto__);
});})(c__9351__auto___10029,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__9351__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9351__auto__){
return (function (){
var f__9352__auto__ = (function (){var switch__9239__auto__ = ((function (c__9351__auto__){
return (function (state_10109){
var state_val_10110 = (state_10109[(1)]);
if((state_val_10110 === (7))){
var inst_10105 = (state_10109[(2)]);
var state_10109__$1 = state_10109;
var statearr_10111_10132 = state_10109__$1;
(statearr_10111_10132[(2)] = inst_10105);

(statearr_10111_10132[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10110 === (1))){
var inst_10089 = init;
var state_10109__$1 = (function (){var statearr_10112 = state_10109;
(statearr_10112[(7)] = inst_10089);

return statearr_10112;
})();
var statearr_10113_10133 = state_10109__$1;
(statearr_10113_10133[(2)] = null);

(statearr_10113_10133[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10110 === (4))){
var inst_10092 = (state_10109[(8)]);
var inst_10092__$1 = (state_10109[(2)]);
var inst_10093 = (inst_10092__$1 == null);
var state_10109__$1 = (function (){var statearr_10114 = state_10109;
(statearr_10114[(8)] = inst_10092__$1);

return statearr_10114;
})();
if(cljs.core.truth_(inst_10093)){
var statearr_10115_10134 = state_10109__$1;
(statearr_10115_10134[(1)] = (5));

} else {
var statearr_10116_10135 = state_10109__$1;
(statearr_10116_10135[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10110 === (6))){
var inst_10092 = (state_10109[(8)]);
var inst_10096 = (state_10109[(9)]);
var inst_10089 = (state_10109[(7)]);
var inst_10096__$1 = f.call(null,inst_10089,inst_10092);
var inst_10097 = cljs.core.reduced_QMARK_.call(null,inst_10096__$1);
var state_10109__$1 = (function (){var statearr_10117 = state_10109;
(statearr_10117[(9)] = inst_10096__$1);

return statearr_10117;
})();
if(inst_10097){
var statearr_10118_10136 = state_10109__$1;
(statearr_10118_10136[(1)] = (8));

} else {
var statearr_10119_10137 = state_10109__$1;
(statearr_10119_10137[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10110 === (3))){
var inst_10107 = (state_10109[(2)]);
var state_10109__$1 = state_10109;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10109__$1,inst_10107);
} else {
if((state_val_10110 === (2))){
var state_10109__$1 = state_10109;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10109__$1,(4),ch);
} else {
if((state_val_10110 === (9))){
var inst_10096 = (state_10109[(9)]);
var inst_10089 = inst_10096;
var state_10109__$1 = (function (){var statearr_10120 = state_10109;
(statearr_10120[(7)] = inst_10089);

return statearr_10120;
})();
var statearr_10121_10138 = state_10109__$1;
(statearr_10121_10138[(2)] = null);

(statearr_10121_10138[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10110 === (5))){
var inst_10089 = (state_10109[(7)]);
var state_10109__$1 = state_10109;
var statearr_10122_10139 = state_10109__$1;
(statearr_10122_10139[(2)] = inst_10089);

(statearr_10122_10139[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10110 === (10))){
var inst_10103 = (state_10109[(2)]);
var state_10109__$1 = state_10109;
var statearr_10123_10140 = state_10109__$1;
(statearr_10123_10140[(2)] = inst_10103);

(statearr_10123_10140[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10110 === (8))){
var inst_10096 = (state_10109[(9)]);
var inst_10099 = cljs.core.deref.call(null,inst_10096);
var state_10109__$1 = state_10109;
var statearr_10124_10141 = state_10109__$1;
(statearr_10124_10141[(2)] = inst_10099);

(statearr_10124_10141[(1)] = (10));


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
});})(c__9351__auto__))
;
return ((function (switch__9239__auto__,c__9351__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__9240__auto__ = null;
var cljs$core$async$reduce_$_state_machine__9240__auto____0 = (function (){
var statearr_10128 = [null,null,null,null,null,null,null,null,null,null];
(statearr_10128[(0)] = cljs$core$async$reduce_$_state_machine__9240__auto__);

(statearr_10128[(1)] = (1));

return statearr_10128;
});
var cljs$core$async$reduce_$_state_machine__9240__auto____1 = (function (state_10109){
while(true){
var ret_value__9241__auto__ = (function (){try{while(true){
var result__9242__auto__ = switch__9239__auto__.call(null,state_10109);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9242__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9242__auto__;
}
break;
}
}catch (e10129){if((e10129 instanceof Object)){
var ex__9243__auto__ = e10129;
var statearr_10130_10142 = state_10109;
(statearr_10130_10142[(5)] = ex__9243__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10109);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10129;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9241__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10143 = state_10109;
state_10109 = G__10143;
continue;
} else {
return ret_value__9241__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__9240__auto__ = function(state_10109){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__9240__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__9240__auto____1.call(this,state_10109);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__9240__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__9240__auto____0;
cljs$core$async$reduce_$_state_machine__9240__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__9240__auto____1;
return cljs$core$async$reduce_$_state_machine__9240__auto__;
})()
;})(switch__9239__auto__,c__9351__auto__))
})();
var state__9353__auto__ = (function (){var statearr_10131 = f__9352__auto__.call(null);
(statearr_10131[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9351__auto__);

return statearr_10131;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9353__auto__);
});})(c__9351__auto__))
);

return c__9351__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args10144 = [];
var len__7276__auto___10196 = arguments.length;
var i__7277__auto___10197 = (0);
while(true){
if((i__7277__auto___10197 < len__7276__auto___10196)){
args10144.push((arguments[i__7277__auto___10197]));

var G__10198 = (i__7277__auto___10197 + (1));
i__7277__auto___10197 = G__10198;
continue;
} else {
}
break;
}

var G__10146 = args10144.length;
switch (G__10146) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10144.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__9351__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9351__auto__){
return (function (){
var f__9352__auto__ = (function (){var switch__9239__auto__ = ((function (c__9351__auto__){
return (function (state_10171){
var state_val_10172 = (state_10171[(1)]);
if((state_val_10172 === (7))){
var inst_10153 = (state_10171[(2)]);
var state_10171__$1 = state_10171;
var statearr_10173_10200 = state_10171__$1;
(statearr_10173_10200[(2)] = inst_10153);

(statearr_10173_10200[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10172 === (1))){
var inst_10147 = cljs.core.seq.call(null,coll);
var inst_10148 = inst_10147;
var state_10171__$1 = (function (){var statearr_10174 = state_10171;
(statearr_10174[(7)] = inst_10148);

return statearr_10174;
})();
var statearr_10175_10201 = state_10171__$1;
(statearr_10175_10201[(2)] = null);

(statearr_10175_10201[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10172 === (4))){
var inst_10148 = (state_10171[(7)]);
var inst_10151 = cljs.core.first.call(null,inst_10148);
var state_10171__$1 = state_10171;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10171__$1,(7),ch,inst_10151);
} else {
if((state_val_10172 === (13))){
var inst_10165 = (state_10171[(2)]);
var state_10171__$1 = state_10171;
var statearr_10176_10202 = state_10171__$1;
(statearr_10176_10202[(2)] = inst_10165);

(statearr_10176_10202[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10172 === (6))){
var inst_10156 = (state_10171[(2)]);
var state_10171__$1 = state_10171;
if(cljs.core.truth_(inst_10156)){
var statearr_10177_10203 = state_10171__$1;
(statearr_10177_10203[(1)] = (8));

} else {
var statearr_10178_10204 = state_10171__$1;
(statearr_10178_10204[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10172 === (3))){
var inst_10169 = (state_10171[(2)]);
var state_10171__$1 = state_10171;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10171__$1,inst_10169);
} else {
if((state_val_10172 === (12))){
var state_10171__$1 = state_10171;
var statearr_10179_10205 = state_10171__$1;
(statearr_10179_10205[(2)] = null);

(statearr_10179_10205[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10172 === (2))){
var inst_10148 = (state_10171[(7)]);
var state_10171__$1 = state_10171;
if(cljs.core.truth_(inst_10148)){
var statearr_10180_10206 = state_10171__$1;
(statearr_10180_10206[(1)] = (4));

} else {
var statearr_10181_10207 = state_10171__$1;
(statearr_10181_10207[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10172 === (11))){
var inst_10162 = cljs.core.async.close_BANG_.call(null,ch);
var state_10171__$1 = state_10171;
var statearr_10182_10208 = state_10171__$1;
(statearr_10182_10208[(2)] = inst_10162);

(statearr_10182_10208[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10172 === (9))){
var state_10171__$1 = state_10171;
if(cljs.core.truth_(close_QMARK_)){
var statearr_10183_10209 = state_10171__$1;
(statearr_10183_10209[(1)] = (11));

} else {
var statearr_10184_10210 = state_10171__$1;
(statearr_10184_10210[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10172 === (5))){
var inst_10148 = (state_10171[(7)]);
var state_10171__$1 = state_10171;
var statearr_10185_10211 = state_10171__$1;
(statearr_10185_10211[(2)] = inst_10148);

(statearr_10185_10211[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10172 === (10))){
var inst_10167 = (state_10171[(2)]);
var state_10171__$1 = state_10171;
var statearr_10186_10212 = state_10171__$1;
(statearr_10186_10212[(2)] = inst_10167);

(statearr_10186_10212[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10172 === (8))){
var inst_10148 = (state_10171[(7)]);
var inst_10158 = cljs.core.next.call(null,inst_10148);
var inst_10148__$1 = inst_10158;
var state_10171__$1 = (function (){var statearr_10187 = state_10171;
(statearr_10187[(7)] = inst_10148__$1);

return statearr_10187;
})();
var statearr_10188_10213 = state_10171__$1;
(statearr_10188_10213[(2)] = null);

(statearr_10188_10213[(1)] = (2));


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
});})(c__9351__auto__))
;
return ((function (switch__9239__auto__,c__9351__auto__){
return (function() {
var cljs$core$async$state_machine__9240__auto__ = null;
var cljs$core$async$state_machine__9240__auto____0 = (function (){
var statearr_10192 = [null,null,null,null,null,null,null,null];
(statearr_10192[(0)] = cljs$core$async$state_machine__9240__auto__);

(statearr_10192[(1)] = (1));

return statearr_10192;
});
var cljs$core$async$state_machine__9240__auto____1 = (function (state_10171){
while(true){
var ret_value__9241__auto__ = (function (){try{while(true){
var result__9242__auto__ = switch__9239__auto__.call(null,state_10171);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9242__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9242__auto__;
}
break;
}
}catch (e10193){if((e10193 instanceof Object)){
var ex__9243__auto__ = e10193;
var statearr_10194_10214 = state_10171;
(statearr_10194_10214[(5)] = ex__9243__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10171);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10193;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9241__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10215 = state_10171;
state_10171 = G__10215;
continue;
} else {
return ret_value__9241__auto__;
}
break;
}
});
cljs$core$async$state_machine__9240__auto__ = function(state_10171){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9240__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9240__auto____1.call(this,state_10171);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9240__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9240__auto____0;
cljs$core$async$state_machine__9240__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9240__auto____1;
return cljs$core$async$state_machine__9240__auto__;
})()
;})(switch__9239__auto__,c__9351__auto__))
})();
var state__9353__auto__ = (function (){var statearr_10195 = f__9352__auto__.call(null);
(statearr_10195[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9351__auto__);

return statearr_10195;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9353__auto__);
});})(c__9351__auto__))
);

return c__9351__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__6870__auto__ = (((_ == null))?null:_);
var m__6871__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__6870__auto__)]);
if(!((m__6871__auto__ == null))){
return m__6871__auto__.call(null,_);
} else {
var m__6871__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__6871__auto____$1 == null))){
return m__6871__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__6870__auto__ = (((m == null))?null:m);
var m__6871__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__6870__auto__)]);
if(!((m__6871__auto__ == null))){
return m__6871__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__6871__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__6871__auto____$1 == null))){
return m__6871__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__6870__auto__ = (((m == null))?null:m);
var m__6871__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__6870__auto__)]);
if(!((m__6871__auto__ == null))){
return m__6871__auto__.call(null,m,ch);
} else {
var m__6871__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__6871__auto____$1 == null))){
return m__6871__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__6870__auto__ = (((m == null))?null:m);
var m__6871__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__6870__auto__)]);
if(!((m__6871__auto__ == null))){
return m__6871__auto__.call(null,m);
} else {
var m__6871__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__6871__auto____$1 == null))){
return m__6871__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async10437 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10437 = (function (mult,ch,cs,meta10438){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta10438 = meta10438;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async10437.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_10439,meta10438__$1){
var self__ = this;
var _10439__$1 = this;
return (new cljs.core.async.t_cljs$core$async10437(self__.mult,self__.ch,self__.cs,meta10438__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async10437.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_10439){
var self__ = this;
var _10439__$1 = this;
return self__.meta10438;
});})(cs))
;

cljs.core.async.t_cljs$core$async10437.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async10437.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async10437.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async10437.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async10437.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async10437.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async10437.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta10438","meta10438",733840388,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async10437.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async10437.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10437";

cljs.core.async.t_cljs$core$async10437.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__6813__auto__,writer__6814__auto__,opt__6815__auto__){
return cljs.core._write.call(null,writer__6814__auto__,"cljs.core.async/t_cljs$core$async10437");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async10437 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async10437(mult__$1,ch__$1,cs__$1,meta10438){
return (new cljs.core.async.t_cljs$core$async10437(mult__$1,ch__$1,cs__$1,meta10438));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async10437(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__9351__auto___10658 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9351__auto___10658,cs,m,dchan,dctr,done){
return (function (){
var f__9352__auto__ = (function (){var switch__9239__auto__ = ((function (c__9351__auto___10658,cs,m,dchan,dctr,done){
return (function (state_10570){
var state_val_10571 = (state_10570[(1)]);
if((state_val_10571 === (7))){
var inst_10566 = (state_10570[(2)]);
var state_10570__$1 = state_10570;
var statearr_10572_10659 = state_10570__$1;
(statearr_10572_10659[(2)] = inst_10566);

(statearr_10572_10659[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10571 === (20))){
var inst_10471 = (state_10570[(7)]);
var inst_10481 = cljs.core.first.call(null,inst_10471);
var inst_10482 = cljs.core.nth.call(null,inst_10481,(0),null);
var inst_10483 = cljs.core.nth.call(null,inst_10481,(1),null);
var state_10570__$1 = (function (){var statearr_10573 = state_10570;
(statearr_10573[(8)] = inst_10482);

return statearr_10573;
})();
if(cljs.core.truth_(inst_10483)){
var statearr_10574_10660 = state_10570__$1;
(statearr_10574_10660[(1)] = (22));

} else {
var statearr_10575_10661 = state_10570__$1;
(statearr_10575_10661[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10571 === (27))){
var inst_10518 = (state_10570[(9)]);
var inst_10513 = (state_10570[(10)]);
var inst_10511 = (state_10570[(11)]);
var inst_10442 = (state_10570[(12)]);
var inst_10518__$1 = cljs.core._nth.call(null,inst_10511,inst_10513);
var inst_10519 = cljs.core.async.put_BANG_.call(null,inst_10518__$1,inst_10442,done);
var state_10570__$1 = (function (){var statearr_10576 = state_10570;
(statearr_10576[(9)] = inst_10518__$1);

return statearr_10576;
})();
if(cljs.core.truth_(inst_10519)){
var statearr_10577_10662 = state_10570__$1;
(statearr_10577_10662[(1)] = (30));

} else {
var statearr_10578_10663 = state_10570__$1;
(statearr_10578_10663[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10571 === (1))){
var state_10570__$1 = state_10570;
var statearr_10579_10664 = state_10570__$1;
(statearr_10579_10664[(2)] = null);

(statearr_10579_10664[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10571 === (24))){
var inst_10471 = (state_10570[(7)]);
var inst_10488 = (state_10570[(2)]);
var inst_10489 = cljs.core.next.call(null,inst_10471);
var inst_10451 = inst_10489;
var inst_10452 = null;
var inst_10453 = (0);
var inst_10454 = (0);
var state_10570__$1 = (function (){var statearr_10580 = state_10570;
(statearr_10580[(13)] = inst_10454);

(statearr_10580[(14)] = inst_10451);

(statearr_10580[(15)] = inst_10488);

(statearr_10580[(16)] = inst_10452);

(statearr_10580[(17)] = inst_10453);

return statearr_10580;
})();
var statearr_10581_10665 = state_10570__$1;
(statearr_10581_10665[(2)] = null);

(statearr_10581_10665[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10571 === (39))){
var state_10570__$1 = state_10570;
var statearr_10585_10666 = state_10570__$1;
(statearr_10585_10666[(2)] = null);

(statearr_10585_10666[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10571 === (4))){
var inst_10442 = (state_10570[(12)]);
var inst_10442__$1 = (state_10570[(2)]);
var inst_10443 = (inst_10442__$1 == null);
var state_10570__$1 = (function (){var statearr_10586 = state_10570;
(statearr_10586[(12)] = inst_10442__$1);

return statearr_10586;
})();
if(cljs.core.truth_(inst_10443)){
var statearr_10587_10667 = state_10570__$1;
(statearr_10587_10667[(1)] = (5));

} else {
var statearr_10588_10668 = state_10570__$1;
(statearr_10588_10668[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10571 === (15))){
var inst_10454 = (state_10570[(13)]);
var inst_10451 = (state_10570[(14)]);
var inst_10452 = (state_10570[(16)]);
var inst_10453 = (state_10570[(17)]);
var inst_10467 = (state_10570[(2)]);
var inst_10468 = (inst_10454 + (1));
var tmp10582 = inst_10451;
var tmp10583 = inst_10452;
var tmp10584 = inst_10453;
var inst_10451__$1 = tmp10582;
var inst_10452__$1 = tmp10583;
var inst_10453__$1 = tmp10584;
var inst_10454__$1 = inst_10468;
var state_10570__$1 = (function (){var statearr_10589 = state_10570;
(statearr_10589[(13)] = inst_10454__$1);

(statearr_10589[(14)] = inst_10451__$1);

(statearr_10589[(18)] = inst_10467);

(statearr_10589[(16)] = inst_10452__$1);

(statearr_10589[(17)] = inst_10453__$1);

return statearr_10589;
})();
var statearr_10590_10669 = state_10570__$1;
(statearr_10590_10669[(2)] = null);

(statearr_10590_10669[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10571 === (21))){
var inst_10492 = (state_10570[(2)]);
var state_10570__$1 = state_10570;
var statearr_10594_10670 = state_10570__$1;
(statearr_10594_10670[(2)] = inst_10492);

(statearr_10594_10670[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10571 === (31))){
var inst_10518 = (state_10570[(9)]);
var inst_10522 = done.call(null,null);
var inst_10523 = cljs.core.async.untap_STAR_.call(null,m,inst_10518);
var state_10570__$1 = (function (){var statearr_10595 = state_10570;
(statearr_10595[(19)] = inst_10522);

return statearr_10595;
})();
var statearr_10596_10671 = state_10570__$1;
(statearr_10596_10671[(2)] = inst_10523);

(statearr_10596_10671[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10571 === (32))){
var inst_10510 = (state_10570[(20)]);
var inst_10513 = (state_10570[(10)]);
var inst_10512 = (state_10570[(21)]);
var inst_10511 = (state_10570[(11)]);
var inst_10525 = (state_10570[(2)]);
var inst_10526 = (inst_10513 + (1));
var tmp10591 = inst_10510;
var tmp10592 = inst_10512;
var tmp10593 = inst_10511;
var inst_10510__$1 = tmp10591;
var inst_10511__$1 = tmp10593;
var inst_10512__$1 = tmp10592;
var inst_10513__$1 = inst_10526;
var state_10570__$1 = (function (){var statearr_10597 = state_10570;
(statearr_10597[(22)] = inst_10525);

(statearr_10597[(20)] = inst_10510__$1);

(statearr_10597[(10)] = inst_10513__$1);

(statearr_10597[(21)] = inst_10512__$1);

(statearr_10597[(11)] = inst_10511__$1);

return statearr_10597;
})();
var statearr_10598_10672 = state_10570__$1;
(statearr_10598_10672[(2)] = null);

(statearr_10598_10672[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10571 === (40))){
var inst_10538 = (state_10570[(23)]);
var inst_10542 = done.call(null,null);
var inst_10543 = cljs.core.async.untap_STAR_.call(null,m,inst_10538);
var state_10570__$1 = (function (){var statearr_10599 = state_10570;
(statearr_10599[(24)] = inst_10542);

return statearr_10599;
})();
var statearr_10600_10673 = state_10570__$1;
(statearr_10600_10673[(2)] = inst_10543);

(statearr_10600_10673[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10571 === (33))){
var inst_10529 = (state_10570[(25)]);
var inst_10531 = cljs.core.chunked_seq_QMARK_.call(null,inst_10529);
var state_10570__$1 = state_10570;
if(inst_10531){
var statearr_10601_10674 = state_10570__$1;
(statearr_10601_10674[(1)] = (36));

} else {
var statearr_10602_10675 = state_10570__$1;
(statearr_10602_10675[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10571 === (13))){
var inst_10461 = (state_10570[(26)]);
var inst_10464 = cljs.core.async.close_BANG_.call(null,inst_10461);
var state_10570__$1 = state_10570;
var statearr_10603_10676 = state_10570__$1;
(statearr_10603_10676[(2)] = inst_10464);

(statearr_10603_10676[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10571 === (22))){
var inst_10482 = (state_10570[(8)]);
var inst_10485 = cljs.core.async.close_BANG_.call(null,inst_10482);
var state_10570__$1 = state_10570;
var statearr_10604_10677 = state_10570__$1;
(statearr_10604_10677[(2)] = inst_10485);

(statearr_10604_10677[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10571 === (36))){
var inst_10529 = (state_10570[(25)]);
var inst_10533 = cljs.core.chunk_first.call(null,inst_10529);
var inst_10534 = cljs.core.chunk_rest.call(null,inst_10529);
var inst_10535 = cljs.core.count.call(null,inst_10533);
var inst_10510 = inst_10534;
var inst_10511 = inst_10533;
var inst_10512 = inst_10535;
var inst_10513 = (0);
var state_10570__$1 = (function (){var statearr_10605 = state_10570;
(statearr_10605[(20)] = inst_10510);

(statearr_10605[(10)] = inst_10513);

(statearr_10605[(21)] = inst_10512);

(statearr_10605[(11)] = inst_10511);

return statearr_10605;
})();
var statearr_10606_10678 = state_10570__$1;
(statearr_10606_10678[(2)] = null);

(statearr_10606_10678[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10571 === (41))){
var inst_10529 = (state_10570[(25)]);
var inst_10545 = (state_10570[(2)]);
var inst_10546 = cljs.core.next.call(null,inst_10529);
var inst_10510 = inst_10546;
var inst_10511 = null;
var inst_10512 = (0);
var inst_10513 = (0);
var state_10570__$1 = (function (){var statearr_10607 = state_10570;
(statearr_10607[(27)] = inst_10545);

(statearr_10607[(20)] = inst_10510);

(statearr_10607[(10)] = inst_10513);

(statearr_10607[(21)] = inst_10512);

(statearr_10607[(11)] = inst_10511);

return statearr_10607;
})();
var statearr_10608_10679 = state_10570__$1;
(statearr_10608_10679[(2)] = null);

(statearr_10608_10679[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10571 === (43))){
var state_10570__$1 = state_10570;
var statearr_10609_10680 = state_10570__$1;
(statearr_10609_10680[(2)] = null);

(statearr_10609_10680[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10571 === (29))){
var inst_10554 = (state_10570[(2)]);
var state_10570__$1 = state_10570;
var statearr_10610_10681 = state_10570__$1;
(statearr_10610_10681[(2)] = inst_10554);

(statearr_10610_10681[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10571 === (44))){
var inst_10563 = (state_10570[(2)]);
var state_10570__$1 = (function (){var statearr_10611 = state_10570;
(statearr_10611[(28)] = inst_10563);

return statearr_10611;
})();
var statearr_10612_10682 = state_10570__$1;
(statearr_10612_10682[(2)] = null);

(statearr_10612_10682[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10571 === (6))){
var inst_10502 = (state_10570[(29)]);
var inst_10501 = cljs.core.deref.call(null,cs);
var inst_10502__$1 = cljs.core.keys.call(null,inst_10501);
var inst_10503 = cljs.core.count.call(null,inst_10502__$1);
var inst_10504 = cljs.core.reset_BANG_.call(null,dctr,inst_10503);
var inst_10509 = cljs.core.seq.call(null,inst_10502__$1);
var inst_10510 = inst_10509;
var inst_10511 = null;
var inst_10512 = (0);
var inst_10513 = (0);
var state_10570__$1 = (function (){var statearr_10613 = state_10570;
(statearr_10613[(20)] = inst_10510);

(statearr_10613[(30)] = inst_10504);

(statearr_10613[(10)] = inst_10513);

(statearr_10613[(21)] = inst_10512);

(statearr_10613[(11)] = inst_10511);

(statearr_10613[(29)] = inst_10502__$1);

return statearr_10613;
})();
var statearr_10614_10683 = state_10570__$1;
(statearr_10614_10683[(2)] = null);

(statearr_10614_10683[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10571 === (28))){
var inst_10529 = (state_10570[(25)]);
var inst_10510 = (state_10570[(20)]);
var inst_10529__$1 = cljs.core.seq.call(null,inst_10510);
var state_10570__$1 = (function (){var statearr_10615 = state_10570;
(statearr_10615[(25)] = inst_10529__$1);

return statearr_10615;
})();
if(inst_10529__$1){
var statearr_10616_10684 = state_10570__$1;
(statearr_10616_10684[(1)] = (33));

} else {
var statearr_10617_10685 = state_10570__$1;
(statearr_10617_10685[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10571 === (25))){
var inst_10513 = (state_10570[(10)]);
var inst_10512 = (state_10570[(21)]);
var inst_10515 = (inst_10513 < inst_10512);
var inst_10516 = inst_10515;
var state_10570__$1 = state_10570;
if(cljs.core.truth_(inst_10516)){
var statearr_10618_10686 = state_10570__$1;
(statearr_10618_10686[(1)] = (27));

} else {
var statearr_10619_10687 = state_10570__$1;
(statearr_10619_10687[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10571 === (34))){
var state_10570__$1 = state_10570;
var statearr_10620_10688 = state_10570__$1;
(statearr_10620_10688[(2)] = null);

(statearr_10620_10688[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10571 === (17))){
var state_10570__$1 = state_10570;
var statearr_10621_10689 = state_10570__$1;
(statearr_10621_10689[(2)] = null);

(statearr_10621_10689[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10571 === (3))){
var inst_10568 = (state_10570[(2)]);
var state_10570__$1 = state_10570;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10570__$1,inst_10568);
} else {
if((state_val_10571 === (12))){
var inst_10497 = (state_10570[(2)]);
var state_10570__$1 = state_10570;
var statearr_10622_10690 = state_10570__$1;
(statearr_10622_10690[(2)] = inst_10497);

(statearr_10622_10690[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10571 === (2))){
var state_10570__$1 = state_10570;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10570__$1,(4),ch);
} else {
if((state_val_10571 === (23))){
var state_10570__$1 = state_10570;
var statearr_10623_10691 = state_10570__$1;
(statearr_10623_10691[(2)] = null);

(statearr_10623_10691[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10571 === (35))){
var inst_10552 = (state_10570[(2)]);
var state_10570__$1 = state_10570;
var statearr_10624_10692 = state_10570__$1;
(statearr_10624_10692[(2)] = inst_10552);

(statearr_10624_10692[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10571 === (19))){
var inst_10471 = (state_10570[(7)]);
var inst_10475 = cljs.core.chunk_first.call(null,inst_10471);
var inst_10476 = cljs.core.chunk_rest.call(null,inst_10471);
var inst_10477 = cljs.core.count.call(null,inst_10475);
var inst_10451 = inst_10476;
var inst_10452 = inst_10475;
var inst_10453 = inst_10477;
var inst_10454 = (0);
var state_10570__$1 = (function (){var statearr_10625 = state_10570;
(statearr_10625[(13)] = inst_10454);

(statearr_10625[(14)] = inst_10451);

(statearr_10625[(16)] = inst_10452);

(statearr_10625[(17)] = inst_10453);

return statearr_10625;
})();
var statearr_10626_10693 = state_10570__$1;
(statearr_10626_10693[(2)] = null);

(statearr_10626_10693[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10571 === (11))){
var inst_10471 = (state_10570[(7)]);
var inst_10451 = (state_10570[(14)]);
var inst_10471__$1 = cljs.core.seq.call(null,inst_10451);
var state_10570__$1 = (function (){var statearr_10627 = state_10570;
(statearr_10627[(7)] = inst_10471__$1);

return statearr_10627;
})();
if(inst_10471__$1){
var statearr_10628_10694 = state_10570__$1;
(statearr_10628_10694[(1)] = (16));

} else {
var statearr_10629_10695 = state_10570__$1;
(statearr_10629_10695[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10571 === (9))){
var inst_10499 = (state_10570[(2)]);
var state_10570__$1 = state_10570;
var statearr_10630_10696 = state_10570__$1;
(statearr_10630_10696[(2)] = inst_10499);

(statearr_10630_10696[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10571 === (5))){
var inst_10449 = cljs.core.deref.call(null,cs);
var inst_10450 = cljs.core.seq.call(null,inst_10449);
var inst_10451 = inst_10450;
var inst_10452 = null;
var inst_10453 = (0);
var inst_10454 = (0);
var state_10570__$1 = (function (){var statearr_10631 = state_10570;
(statearr_10631[(13)] = inst_10454);

(statearr_10631[(14)] = inst_10451);

(statearr_10631[(16)] = inst_10452);

(statearr_10631[(17)] = inst_10453);

return statearr_10631;
})();
var statearr_10632_10697 = state_10570__$1;
(statearr_10632_10697[(2)] = null);

(statearr_10632_10697[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10571 === (14))){
var state_10570__$1 = state_10570;
var statearr_10633_10698 = state_10570__$1;
(statearr_10633_10698[(2)] = null);

(statearr_10633_10698[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10571 === (45))){
var inst_10560 = (state_10570[(2)]);
var state_10570__$1 = state_10570;
var statearr_10634_10699 = state_10570__$1;
(statearr_10634_10699[(2)] = inst_10560);

(statearr_10634_10699[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10571 === (26))){
var inst_10502 = (state_10570[(29)]);
var inst_10556 = (state_10570[(2)]);
var inst_10557 = cljs.core.seq.call(null,inst_10502);
var state_10570__$1 = (function (){var statearr_10635 = state_10570;
(statearr_10635[(31)] = inst_10556);

return statearr_10635;
})();
if(inst_10557){
var statearr_10636_10700 = state_10570__$1;
(statearr_10636_10700[(1)] = (42));

} else {
var statearr_10637_10701 = state_10570__$1;
(statearr_10637_10701[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10571 === (16))){
var inst_10471 = (state_10570[(7)]);
var inst_10473 = cljs.core.chunked_seq_QMARK_.call(null,inst_10471);
var state_10570__$1 = state_10570;
if(inst_10473){
var statearr_10638_10702 = state_10570__$1;
(statearr_10638_10702[(1)] = (19));

} else {
var statearr_10639_10703 = state_10570__$1;
(statearr_10639_10703[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10571 === (38))){
var inst_10549 = (state_10570[(2)]);
var state_10570__$1 = state_10570;
var statearr_10640_10704 = state_10570__$1;
(statearr_10640_10704[(2)] = inst_10549);

(statearr_10640_10704[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10571 === (30))){
var state_10570__$1 = state_10570;
var statearr_10641_10705 = state_10570__$1;
(statearr_10641_10705[(2)] = null);

(statearr_10641_10705[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10571 === (10))){
var inst_10454 = (state_10570[(13)]);
var inst_10452 = (state_10570[(16)]);
var inst_10460 = cljs.core._nth.call(null,inst_10452,inst_10454);
var inst_10461 = cljs.core.nth.call(null,inst_10460,(0),null);
var inst_10462 = cljs.core.nth.call(null,inst_10460,(1),null);
var state_10570__$1 = (function (){var statearr_10642 = state_10570;
(statearr_10642[(26)] = inst_10461);

return statearr_10642;
})();
if(cljs.core.truth_(inst_10462)){
var statearr_10643_10706 = state_10570__$1;
(statearr_10643_10706[(1)] = (13));

} else {
var statearr_10644_10707 = state_10570__$1;
(statearr_10644_10707[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10571 === (18))){
var inst_10495 = (state_10570[(2)]);
var state_10570__$1 = state_10570;
var statearr_10645_10708 = state_10570__$1;
(statearr_10645_10708[(2)] = inst_10495);

(statearr_10645_10708[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10571 === (42))){
var state_10570__$1 = state_10570;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10570__$1,(45),dchan);
} else {
if((state_val_10571 === (37))){
var inst_10538 = (state_10570[(23)]);
var inst_10529 = (state_10570[(25)]);
var inst_10442 = (state_10570[(12)]);
var inst_10538__$1 = cljs.core.first.call(null,inst_10529);
var inst_10539 = cljs.core.async.put_BANG_.call(null,inst_10538__$1,inst_10442,done);
var state_10570__$1 = (function (){var statearr_10646 = state_10570;
(statearr_10646[(23)] = inst_10538__$1);

return statearr_10646;
})();
if(cljs.core.truth_(inst_10539)){
var statearr_10647_10709 = state_10570__$1;
(statearr_10647_10709[(1)] = (39));

} else {
var statearr_10648_10710 = state_10570__$1;
(statearr_10648_10710[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10571 === (8))){
var inst_10454 = (state_10570[(13)]);
var inst_10453 = (state_10570[(17)]);
var inst_10456 = (inst_10454 < inst_10453);
var inst_10457 = inst_10456;
var state_10570__$1 = state_10570;
if(cljs.core.truth_(inst_10457)){
var statearr_10649_10711 = state_10570__$1;
(statearr_10649_10711[(1)] = (10));

} else {
var statearr_10650_10712 = state_10570__$1;
(statearr_10650_10712[(1)] = (11));

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
});})(c__9351__auto___10658,cs,m,dchan,dctr,done))
;
return ((function (switch__9239__auto__,c__9351__auto___10658,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__9240__auto__ = null;
var cljs$core$async$mult_$_state_machine__9240__auto____0 = (function (){
var statearr_10654 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10654[(0)] = cljs$core$async$mult_$_state_machine__9240__auto__);

(statearr_10654[(1)] = (1));

return statearr_10654;
});
var cljs$core$async$mult_$_state_machine__9240__auto____1 = (function (state_10570){
while(true){
var ret_value__9241__auto__ = (function (){try{while(true){
var result__9242__auto__ = switch__9239__auto__.call(null,state_10570);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9242__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9242__auto__;
}
break;
}
}catch (e10655){if((e10655 instanceof Object)){
var ex__9243__auto__ = e10655;
var statearr_10656_10713 = state_10570;
(statearr_10656_10713[(5)] = ex__9243__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10570);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10655;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9241__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10714 = state_10570;
state_10570 = G__10714;
continue;
} else {
return ret_value__9241__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__9240__auto__ = function(state_10570){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__9240__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__9240__auto____1.call(this,state_10570);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__9240__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__9240__auto____0;
cljs$core$async$mult_$_state_machine__9240__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__9240__auto____1;
return cljs$core$async$mult_$_state_machine__9240__auto__;
})()
;})(switch__9239__auto__,c__9351__auto___10658,cs,m,dchan,dctr,done))
})();
var state__9353__auto__ = (function (){var statearr_10657 = f__9352__auto__.call(null);
(statearr_10657[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9351__auto___10658);

return statearr_10657;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9353__auto__);
});})(c__9351__auto___10658,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args10715 = [];
var len__7276__auto___10718 = arguments.length;
var i__7277__auto___10719 = (0);
while(true){
if((i__7277__auto___10719 < len__7276__auto___10718)){
args10715.push((arguments[i__7277__auto___10719]));

var G__10720 = (i__7277__auto___10719 + (1));
i__7277__auto___10719 = G__10720;
continue;
} else {
}
break;
}

var G__10717 = args10715.length;
switch (G__10717) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10715.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__6870__auto__ = (((m == null))?null:m);
var m__6871__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__6870__auto__)]);
if(!((m__6871__auto__ == null))){
return m__6871__auto__.call(null,m,ch);
} else {
var m__6871__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__6871__auto____$1 == null))){
return m__6871__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__6870__auto__ = (((m == null))?null:m);
var m__6871__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__6870__auto__)]);
if(!((m__6871__auto__ == null))){
return m__6871__auto__.call(null,m,ch);
} else {
var m__6871__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__6871__auto____$1 == null))){
return m__6871__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__6870__auto__ = (((m == null))?null:m);
var m__6871__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__6870__auto__)]);
if(!((m__6871__auto__ == null))){
return m__6871__auto__.call(null,m);
} else {
var m__6871__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__6871__auto____$1 == null))){
return m__6871__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__6870__auto__ = (((m == null))?null:m);
var m__6871__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__6870__auto__)]);
if(!((m__6871__auto__ == null))){
return m__6871__auto__.call(null,m,state_map);
} else {
var m__6871__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__6871__auto____$1 == null))){
return m__6871__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__6870__auto__ = (((m == null))?null:m);
var m__6871__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__6870__auto__)]);
if(!((m__6871__auto__ == null))){
return m__6871__auto__.call(null,m,mode);
} else {
var m__6871__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__6871__auto____$1 == null))){
return m__6871__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__7283__auto__ = [];
var len__7276__auto___10732 = arguments.length;
var i__7277__auto___10733 = (0);
while(true){
if((i__7277__auto___10733 < len__7276__auto___10732)){
args__7283__auto__.push((arguments[i__7277__auto___10733]));

var G__10734 = (i__7277__auto___10733 + (1));
i__7277__auto___10733 = G__10734;
continue;
} else {
}
break;
}

var argseq__7284__auto__ = ((((3) < args__7283__auto__.length))?(new cljs.core.IndexedSeq(args__7283__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7284__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__10726){
var map__10727 = p__10726;
var map__10727__$1 = ((((!((map__10727 == null)))?((((map__10727.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10727.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10727):map__10727);
var opts = map__10727__$1;
var statearr_10729_10735 = state;
(statearr_10729_10735[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__10727,map__10727__$1,opts){
return (function (val){
var statearr_10730_10736 = state;
(statearr_10730_10736[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__10727,map__10727__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_10731_10737 = state;
(statearr_10731_10737[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq10722){
var G__10723 = cljs.core.first.call(null,seq10722);
var seq10722__$1 = cljs.core.next.call(null,seq10722);
var G__10724 = cljs.core.first.call(null,seq10722__$1);
var seq10722__$2 = cljs.core.next.call(null,seq10722__$1);
var G__10725 = cljs.core.first.call(null,seq10722__$2);
var seq10722__$3 = cljs.core.next.call(null,seq10722__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__10723,G__10724,G__10725,seq10722__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async10901 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10901 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta10902){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta10902 = meta10902;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async10901.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_10903,meta10902__$1){
var self__ = this;
var _10903__$1 = this;
return (new cljs.core.async.t_cljs$core$async10901(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta10902__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10901.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_10903){
var self__ = this;
var _10903__$1 = this;
return self__.meta10902;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10901.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async10901.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10901.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async10901.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10901.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10901.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10901.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10901.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10901.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta10902","meta10902",895074114,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10901.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async10901.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10901";

cljs.core.async.t_cljs$core$async10901.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__6813__auto__,writer__6814__auto__,opt__6815__auto__){
return cljs.core._write.call(null,writer__6814__auto__,"cljs.core.async/t_cljs$core$async10901");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async10901 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async10901(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta10902){
return (new cljs.core.async.t_cljs$core$async10901(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta10902));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async10901(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__9351__auto___11064 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9351__auto___11064,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__9352__auto__ = (function (){var switch__9239__auto__ = ((function (c__9351__auto___11064,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_11001){
var state_val_11002 = (state_11001[(1)]);
if((state_val_11002 === (7))){
var inst_10919 = (state_11001[(2)]);
var state_11001__$1 = state_11001;
var statearr_11003_11065 = state_11001__$1;
(statearr_11003_11065[(2)] = inst_10919);

(statearr_11003_11065[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11002 === (20))){
var inst_10931 = (state_11001[(7)]);
var state_11001__$1 = state_11001;
var statearr_11004_11066 = state_11001__$1;
(statearr_11004_11066[(2)] = inst_10931);

(statearr_11004_11066[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11002 === (27))){
var state_11001__$1 = state_11001;
var statearr_11005_11067 = state_11001__$1;
(statearr_11005_11067[(2)] = null);

(statearr_11005_11067[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11002 === (1))){
var inst_10907 = (state_11001[(8)]);
var inst_10907__$1 = calc_state.call(null);
var inst_10909 = (inst_10907__$1 == null);
var inst_10910 = cljs.core.not.call(null,inst_10909);
var state_11001__$1 = (function (){var statearr_11006 = state_11001;
(statearr_11006[(8)] = inst_10907__$1);

return statearr_11006;
})();
if(inst_10910){
var statearr_11007_11068 = state_11001__$1;
(statearr_11007_11068[(1)] = (2));

} else {
var statearr_11008_11069 = state_11001__$1;
(statearr_11008_11069[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11002 === (24))){
var inst_10961 = (state_11001[(9)]);
var inst_10954 = (state_11001[(10)]);
var inst_10975 = (state_11001[(11)]);
var inst_10975__$1 = inst_10954.call(null,inst_10961);
var state_11001__$1 = (function (){var statearr_11009 = state_11001;
(statearr_11009[(11)] = inst_10975__$1);

return statearr_11009;
})();
if(cljs.core.truth_(inst_10975__$1)){
var statearr_11010_11070 = state_11001__$1;
(statearr_11010_11070[(1)] = (29));

} else {
var statearr_11011_11071 = state_11001__$1;
(statearr_11011_11071[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11002 === (4))){
var inst_10922 = (state_11001[(2)]);
var state_11001__$1 = state_11001;
if(cljs.core.truth_(inst_10922)){
var statearr_11012_11072 = state_11001__$1;
(statearr_11012_11072[(1)] = (8));

} else {
var statearr_11013_11073 = state_11001__$1;
(statearr_11013_11073[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11002 === (15))){
var inst_10948 = (state_11001[(2)]);
var state_11001__$1 = state_11001;
if(cljs.core.truth_(inst_10948)){
var statearr_11014_11074 = state_11001__$1;
(statearr_11014_11074[(1)] = (19));

} else {
var statearr_11015_11075 = state_11001__$1;
(statearr_11015_11075[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11002 === (21))){
var inst_10953 = (state_11001[(12)]);
var inst_10953__$1 = (state_11001[(2)]);
var inst_10954 = cljs.core.get.call(null,inst_10953__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_10955 = cljs.core.get.call(null,inst_10953__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_10956 = cljs.core.get.call(null,inst_10953__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_11001__$1 = (function (){var statearr_11016 = state_11001;
(statearr_11016[(13)] = inst_10955);

(statearr_11016[(12)] = inst_10953__$1);

(statearr_11016[(10)] = inst_10954);

return statearr_11016;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_11001__$1,(22),inst_10956);
} else {
if((state_val_11002 === (31))){
var inst_10983 = (state_11001[(2)]);
var state_11001__$1 = state_11001;
if(cljs.core.truth_(inst_10983)){
var statearr_11017_11076 = state_11001__$1;
(statearr_11017_11076[(1)] = (32));

} else {
var statearr_11018_11077 = state_11001__$1;
(statearr_11018_11077[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11002 === (32))){
var inst_10960 = (state_11001[(14)]);
var state_11001__$1 = state_11001;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11001__$1,(35),out,inst_10960);
} else {
if((state_val_11002 === (33))){
var inst_10953 = (state_11001[(12)]);
var inst_10931 = inst_10953;
var state_11001__$1 = (function (){var statearr_11019 = state_11001;
(statearr_11019[(7)] = inst_10931);

return statearr_11019;
})();
var statearr_11020_11078 = state_11001__$1;
(statearr_11020_11078[(2)] = null);

(statearr_11020_11078[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11002 === (13))){
var inst_10931 = (state_11001[(7)]);
var inst_10938 = inst_10931.cljs$lang$protocol_mask$partition0$;
var inst_10939 = (inst_10938 & (64));
var inst_10940 = inst_10931.cljs$core$ISeq$;
var inst_10941 = (inst_10939) || (inst_10940);
var state_11001__$1 = state_11001;
if(cljs.core.truth_(inst_10941)){
var statearr_11021_11079 = state_11001__$1;
(statearr_11021_11079[(1)] = (16));

} else {
var statearr_11022_11080 = state_11001__$1;
(statearr_11022_11080[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11002 === (22))){
var inst_10961 = (state_11001[(9)]);
var inst_10960 = (state_11001[(14)]);
var inst_10959 = (state_11001[(2)]);
var inst_10960__$1 = cljs.core.nth.call(null,inst_10959,(0),null);
var inst_10961__$1 = cljs.core.nth.call(null,inst_10959,(1),null);
var inst_10962 = (inst_10960__$1 == null);
var inst_10963 = cljs.core._EQ_.call(null,inst_10961__$1,change);
var inst_10964 = (inst_10962) || (inst_10963);
var state_11001__$1 = (function (){var statearr_11023 = state_11001;
(statearr_11023[(9)] = inst_10961__$1);

(statearr_11023[(14)] = inst_10960__$1);

return statearr_11023;
})();
if(cljs.core.truth_(inst_10964)){
var statearr_11024_11081 = state_11001__$1;
(statearr_11024_11081[(1)] = (23));

} else {
var statearr_11025_11082 = state_11001__$1;
(statearr_11025_11082[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11002 === (36))){
var inst_10953 = (state_11001[(12)]);
var inst_10931 = inst_10953;
var state_11001__$1 = (function (){var statearr_11026 = state_11001;
(statearr_11026[(7)] = inst_10931);

return statearr_11026;
})();
var statearr_11027_11083 = state_11001__$1;
(statearr_11027_11083[(2)] = null);

(statearr_11027_11083[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11002 === (29))){
var inst_10975 = (state_11001[(11)]);
var state_11001__$1 = state_11001;
var statearr_11028_11084 = state_11001__$1;
(statearr_11028_11084[(2)] = inst_10975);

(statearr_11028_11084[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11002 === (6))){
var state_11001__$1 = state_11001;
var statearr_11029_11085 = state_11001__$1;
(statearr_11029_11085[(2)] = false);

(statearr_11029_11085[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11002 === (28))){
var inst_10971 = (state_11001[(2)]);
var inst_10972 = calc_state.call(null);
var inst_10931 = inst_10972;
var state_11001__$1 = (function (){var statearr_11030 = state_11001;
(statearr_11030[(7)] = inst_10931);

(statearr_11030[(15)] = inst_10971);

return statearr_11030;
})();
var statearr_11031_11086 = state_11001__$1;
(statearr_11031_11086[(2)] = null);

(statearr_11031_11086[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11002 === (25))){
var inst_10997 = (state_11001[(2)]);
var state_11001__$1 = state_11001;
var statearr_11032_11087 = state_11001__$1;
(statearr_11032_11087[(2)] = inst_10997);

(statearr_11032_11087[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11002 === (34))){
var inst_10995 = (state_11001[(2)]);
var state_11001__$1 = state_11001;
var statearr_11033_11088 = state_11001__$1;
(statearr_11033_11088[(2)] = inst_10995);

(statearr_11033_11088[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11002 === (17))){
var state_11001__$1 = state_11001;
var statearr_11034_11089 = state_11001__$1;
(statearr_11034_11089[(2)] = false);

(statearr_11034_11089[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11002 === (3))){
var state_11001__$1 = state_11001;
var statearr_11035_11090 = state_11001__$1;
(statearr_11035_11090[(2)] = false);

(statearr_11035_11090[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11002 === (12))){
var inst_10999 = (state_11001[(2)]);
var state_11001__$1 = state_11001;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11001__$1,inst_10999);
} else {
if((state_val_11002 === (2))){
var inst_10907 = (state_11001[(8)]);
var inst_10912 = inst_10907.cljs$lang$protocol_mask$partition0$;
var inst_10913 = (inst_10912 & (64));
var inst_10914 = inst_10907.cljs$core$ISeq$;
var inst_10915 = (inst_10913) || (inst_10914);
var state_11001__$1 = state_11001;
if(cljs.core.truth_(inst_10915)){
var statearr_11036_11091 = state_11001__$1;
(statearr_11036_11091[(1)] = (5));

} else {
var statearr_11037_11092 = state_11001__$1;
(statearr_11037_11092[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11002 === (23))){
var inst_10960 = (state_11001[(14)]);
var inst_10966 = (inst_10960 == null);
var state_11001__$1 = state_11001;
if(cljs.core.truth_(inst_10966)){
var statearr_11038_11093 = state_11001__$1;
(statearr_11038_11093[(1)] = (26));

} else {
var statearr_11039_11094 = state_11001__$1;
(statearr_11039_11094[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11002 === (35))){
var inst_10986 = (state_11001[(2)]);
var state_11001__$1 = state_11001;
if(cljs.core.truth_(inst_10986)){
var statearr_11040_11095 = state_11001__$1;
(statearr_11040_11095[(1)] = (36));

} else {
var statearr_11041_11096 = state_11001__$1;
(statearr_11041_11096[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11002 === (19))){
var inst_10931 = (state_11001[(7)]);
var inst_10950 = cljs.core.apply.call(null,cljs.core.hash_map,inst_10931);
var state_11001__$1 = state_11001;
var statearr_11042_11097 = state_11001__$1;
(statearr_11042_11097[(2)] = inst_10950);

(statearr_11042_11097[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11002 === (11))){
var inst_10931 = (state_11001[(7)]);
var inst_10935 = (inst_10931 == null);
var inst_10936 = cljs.core.not.call(null,inst_10935);
var state_11001__$1 = state_11001;
if(inst_10936){
var statearr_11043_11098 = state_11001__$1;
(statearr_11043_11098[(1)] = (13));

} else {
var statearr_11044_11099 = state_11001__$1;
(statearr_11044_11099[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11002 === (9))){
var inst_10907 = (state_11001[(8)]);
var state_11001__$1 = state_11001;
var statearr_11045_11100 = state_11001__$1;
(statearr_11045_11100[(2)] = inst_10907);

(statearr_11045_11100[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11002 === (5))){
var state_11001__$1 = state_11001;
var statearr_11046_11101 = state_11001__$1;
(statearr_11046_11101[(2)] = true);

(statearr_11046_11101[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11002 === (14))){
var state_11001__$1 = state_11001;
var statearr_11047_11102 = state_11001__$1;
(statearr_11047_11102[(2)] = false);

(statearr_11047_11102[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11002 === (26))){
var inst_10961 = (state_11001[(9)]);
var inst_10968 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_10961);
var state_11001__$1 = state_11001;
var statearr_11048_11103 = state_11001__$1;
(statearr_11048_11103[(2)] = inst_10968);

(statearr_11048_11103[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11002 === (16))){
var state_11001__$1 = state_11001;
var statearr_11049_11104 = state_11001__$1;
(statearr_11049_11104[(2)] = true);

(statearr_11049_11104[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11002 === (38))){
var inst_10991 = (state_11001[(2)]);
var state_11001__$1 = state_11001;
var statearr_11050_11105 = state_11001__$1;
(statearr_11050_11105[(2)] = inst_10991);

(statearr_11050_11105[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11002 === (30))){
var inst_10955 = (state_11001[(13)]);
var inst_10961 = (state_11001[(9)]);
var inst_10954 = (state_11001[(10)]);
var inst_10978 = cljs.core.empty_QMARK_.call(null,inst_10954);
var inst_10979 = inst_10955.call(null,inst_10961);
var inst_10980 = cljs.core.not.call(null,inst_10979);
var inst_10981 = (inst_10978) && (inst_10980);
var state_11001__$1 = state_11001;
var statearr_11051_11106 = state_11001__$1;
(statearr_11051_11106[(2)] = inst_10981);

(statearr_11051_11106[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11002 === (10))){
var inst_10907 = (state_11001[(8)]);
var inst_10927 = (state_11001[(2)]);
var inst_10928 = cljs.core.get.call(null,inst_10927,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_10929 = cljs.core.get.call(null,inst_10927,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_10930 = cljs.core.get.call(null,inst_10927,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_10931 = inst_10907;
var state_11001__$1 = (function (){var statearr_11052 = state_11001;
(statearr_11052[(16)] = inst_10928);

(statearr_11052[(17)] = inst_10930);

(statearr_11052[(18)] = inst_10929);

(statearr_11052[(7)] = inst_10931);

return statearr_11052;
})();
var statearr_11053_11107 = state_11001__$1;
(statearr_11053_11107[(2)] = null);

(statearr_11053_11107[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11002 === (18))){
var inst_10945 = (state_11001[(2)]);
var state_11001__$1 = state_11001;
var statearr_11054_11108 = state_11001__$1;
(statearr_11054_11108[(2)] = inst_10945);

(statearr_11054_11108[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11002 === (37))){
var state_11001__$1 = state_11001;
var statearr_11055_11109 = state_11001__$1;
(statearr_11055_11109[(2)] = null);

(statearr_11055_11109[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11002 === (8))){
var inst_10907 = (state_11001[(8)]);
var inst_10924 = cljs.core.apply.call(null,cljs.core.hash_map,inst_10907);
var state_11001__$1 = state_11001;
var statearr_11056_11110 = state_11001__$1;
(statearr_11056_11110[(2)] = inst_10924);

(statearr_11056_11110[(1)] = (10));


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
});})(c__9351__auto___11064,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__9239__auto__,c__9351__auto___11064,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__9240__auto__ = null;
var cljs$core$async$mix_$_state_machine__9240__auto____0 = (function (){
var statearr_11060 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11060[(0)] = cljs$core$async$mix_$_state_machine__9240__auto__);

(statearr_11060[(1)] = (1));

return statearr_11060;
});
var cljs$core$async$mix_$_state_machine__9240__auto____1 = (function (state_11001){
while(true){
var ret_value__9241__auto__ = (function (){try{while(true){
var result__9242__auto__ = switch__9239__auto__.call(null,state_11001);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9242__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9242__auto__;
}
break;
}
}catch (e11061){if((e11061 instanceof Object)){
var ex__9243__auto__ = e11061;
var statearr_11062_11111 = state_11001;
(statearr_11062_11111[(5)] = ex__9243__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11001);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11061;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9241__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11112 = state_11001;
state_11001 = G__11112;
continue;
} else {
return ret_value__9241__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__9240__auto__ = function(state_11001){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__9240__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__9240__auto____1.call(this,state_11001);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__9240__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__9240__auto____0;
cljs$core$async$mix_$_state_machine__9240__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__9240__auto____1;
return cljs$core$async$mix_$_state_machine__9240__auto__;
})()
;})(switch__9239__auto__,c__9351__auto___11064,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__9353__auto__ = (function (){var statearr_11063 = f__9352__auto__.call(null);
(statearr_11063[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9351__auto___11064);

return statearr_11063;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9353__auto__);
});})(c__9351__auto___11064,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__6870__auto__ = (((p == null))?null:p);
var m__6871__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__6870__auto__)]);
if(!((m__6871__auto__ == null))){
return m__6871__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__6871__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__6871__auto____$1 == null))){
return m__6871__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__6870__auto__ = (((p == null))?null:p);
var m__6871__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__6870__auto__)]);
if(!((m__6871__auto__ == null))){
return m__6871__auto__.call(null,p,v,ch);
} else {
var m__6871__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__6871__auto____$1 == null))){
return m__6871__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args11113 = [];
var len__7276__auto___11116 = arguments.length;
var i__7277__auto___11117 = (0);
while(true){
if((i__7277__auto___11117 < len__7276__auto___11116)){
args11113.push((arguments[i__7277__auto___11117]));

var G__11118 = (i__7277__auto___11117 + (1));
i__7277__auto___11117 = G__11118;
continue;
} else {
}
break;
}

var G__11115 = args11113.length;
switch (G__11115) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11113.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__6870__auto__ = (((p == null))?null:p);
var m__6871__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__6870__auto__)]);
if(!((m__6871__auto__ == null))){
return m__6871__auto__.call(null,p);
} else {
var m__6871__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__6871__auto____$1 == null))){
return m__6871__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__6870__auto__ = (((p == null))?null:p);
var m__6871__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__6870__auto__)]);
if(!((m__6871__auto__ == null))){
return m__6871__auto__.call(null,p,v);
} else {
var m__6871__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__6871__auto____$1 == null))){
return m__6871__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args11121 = [];
var len__7276__auto___11246 = arguments.length;
var i__7277__auto___11247 = (0);
while(true){
if((i__7277__auto___11247 < len__7276__auto___11246)){
args11121.push((arguments[i__7277__auto___11247]));

var G__11248 = (i__7277__auto___11247 + (1));
i__7277__auto___11247 = G__11248;
continue;
} else {
}
break;
}

var G__11123 = args11121.length;
switch (G__11123) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11121.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__6207__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__6207__auto__)){
return or__6207__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__6207__auto__,mults){
return (function (p1__11120_SHARP_){
if(cljs.core.truth_(p1__11120_SHARP_.call(null,topic))){
return p1__11120_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__11120_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__6207__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async11124 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11124 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta11125){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta11125 = meta11125;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async11124.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_11126,meta11125__$1){
var self__ = this;
var _11126__$1 = this;
return (new cljs.core.async.t_cljs$core$async11124(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta11125__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11124.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_11126){
var self__ = this;
var _11126__$1 = this;
return self__.meta11125;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11124.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async11124.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11124.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async11124.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11124.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11124.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11124.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11124.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta11125","meta11125",-1358867141,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11124.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11124.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11124";

cljs.core.async.t_cljs$core$async11124.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__6813__auto__,writer__6814__auto__,opt__6815__auto__){
return cljs.core._write.call(null,writer__6814__auto__,"cljs.core.async/t_cljs$core$async11124");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async11124 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async11124(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta11125){
return (new cljs.core.async.t_cljs$core$async11124(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta11125));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async11124(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__9351__auto___11250 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9351__auto___11250,mults,ensure_mult,p){
return (function (){
var f__9352__auto__ = (function (){var switch__9239__auto__ = ((function (c__9351__auto___11250,mults,ensure_mult,p){
return (function (state_11198){
var state_val_11199 = (state_11198[(1)]);
if((state_val_11199 === (7))){
var inst_11194 = (state_11198[(2)]);
var state_11198__$1 = state_11198;
var statearr_11200_11251 = state_11198__$1;
(statearr_11200_11251[(2)] = inst_11194);

(statearr_11200_11251[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11199 === (20))){
var state_11198__$1 = state_11198;
var statearr_11201_11252 = state_11198__$1;
(statearr_11201_11252[(2)] = null);

(statearr_11201_11252[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11199 === (1))){
var state_11198__$1 = state_11198;
var statearr_11202_11253 = state_11198__$1;
(statearr_11202_11253[(2)] = null);

(statearr_11202_11253[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11199 === (24))){
var inst_11177 = (state_11198[(7)]);
var inst_11186 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_11177);
var state_11198__$1 = state_11198;
var statearr_11203_11254 = state_11198__$1;
(statearr_11203_11254[(2)] = inst_11186);

(statearr_11203_11254[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11199 === (4))){
var inst_11129 = (state_11198[(8)]);
var inst_11129__$1 = (state_11198[(2)]);
var inst_11130 = (inst_11129__$1 == null);
var state_11198__$1 = (function (){var statearr_11204 = state_11198;
(statearr_11204[(8)] = inst_11129__$1);

return statearr_11204;
})();
if(cljs.core.truth_(inst_11130)){
var statearr_11205_11255 = state_11198__$1;
(statearr_11205_11255[(1)] = (5));

} else {
var statearr_11206_11256 = state_11198__$1;
(statearr_11206_11256[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11199 === (15))){
var inst_11171 = (state_11198[(2)]);
var state_11198__$1 = state_11198;
var statearr_11207_11257 = state_11198__$1;
(statearr_11207_11257[(2)] = inst_11171);

(statearr_11207_11257[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11199 === (21))){
var inst_11191 = (state_11198[(2)]);
var state_11198__$1 = (function (){var statearr_11208 = state_11198;
(statearr_11208[(9)] = inst_11191);

return statearr_11208;
})();
var statearr_11209_11258 = state_11198__$1;
(statearr_11209_11258[(2)] = null);

(statearr_11209_11258[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11199 === (13))){
var inst_11153 = (state_11198[(10)]);
var inst_11155 = cljs.core.chunked_seq_QMARK_.call(null,inst_11153);
var state_11198__$1 = state_11198;
if(inst_11155){
var statearr_11210_11259 = state_11198__$1;
(statearr_11210_11259[(1)] = (16));

} else {
var statearr_11211_11260 = state_11198__$1;
(statearr_11211_11260[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11199 === (22))){
var inst_11183 = (state_11198[(2)]);
var state_11198__$1 = state_11198;
if(cljs.core.truth_(inst_11183)){
var statearr_11212_11261 = state_11198__$1;
(statearr_11212_11261[(1)] = (23));

} else {
var statearr_11213_11262 = state_11198__$1;
(statearr_11213_11262[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11199 === (6))){
var inst_11129 = (state_11198[(8)]);
var inst_11179 = (state_11198[(11)]);
var inst_11177 = (state_11198[(7)]);
var inst_11177__$1 = topic_fn.call(null,inst_11129);
var inst_11178 = cljs.core.deref.call(null,mults);
var inst_11179__$1 = cljs.core.get.call(null,inst_11178,inst_11177__$1);
var state_11198__$1 = (function (){var statearr_11214 = state_11198;
(statearr_11214[(11)] = inst_11179__$1);

(statearr_11214[(7)] = inst_11177__$1);

return statearr_11214;
})();
if(cljs.core.truth_(inst_11179__$1)){
var statearr_11215_11263 = state_11198__$1;
(statearr_11215_11263[(1)] = (19));

} else {
var statearr_11216_11264 = state_11198__$1;
(statearr_11216_11264[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11199 === (25))){
var inst_11188 = (state_11198[(2)]);
var state_11198__$1 = state_11198;
var statearr_11217_11265 = state_11198__$1;
(statearr_11217_11265[(2)] = inst_11188);

(statearr_11217_11265[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11199 === (17))){
var inst_11153 = (state_11198[(10)]);
var inst_11162 = cljs.core.first.call(null,inst_11153);
var inst_11163 = cljs.core.async.muxch_STAR_.call(null,inst_11162);
var inst_11164 = cljs.core.async.close_BANG_.call(null,inst_11163);
var inst_11165 = cljs.core.next.call(null,inst_11153);
var inst_11139 = inst_11165;
var inst_11140 = null;
var inst_11141 = (0);
var inst_11142 = (0);
var state_11198__$1 = (function (){var statearr_11218 = state_11198;
(statearr_11218[(12)] = inst_11139);

(statearr_11218[(13)] = inst_11142);

(statearr_11218[(14)] = inst_11164);

(statearr_11218[(15)] = inst_11140);

(statearr_11218[(16)] = inst_11141);

return statearr_11218;
})();
var statearr_11219_11266 = state_11198__$1;
(statearr_11219_11266[(2)] = null);

(statearr_11219_11266[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11199 === (3))){
var inst_11196 = (state_11198[(2)]);
var state_11198__$1 = state_11198;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11198__$1,inst_11196);
} else {
if((state_val_11199 === (12))){
var inst_11173 = (state_11198[(2)]);
var state_11198__$1 = state_11198;
var statearr_11220_11267 = state_11198__$1;
(statearr_11220_11267[(2)] = inst_11173);

(statearr_11220_11267[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11199 === (2))){
var state_11198__$1 = state_11198;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11198__$1,(4),ch);
} else {
if((state_val_11199 === (23))){
var state_11198__$1 = state_11198;
var statearr_11221_11268 = state_11198__$1;
(statearr_11221_11268[(2)] = null);

(statearr_11221_11268[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11199 === (19))){
var inst_11129 = (state_11198[(8)]);
var inst_11179 = (state_11198[(11)]);
var inst_11181 = cljs.core.async.muxch_STAR_.call(null,inst_11179);
var state_11198__$1 = state_11198;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11198__$1,(22),inst_11181,inst_11129);
} else {
if((state_val_11199 === (11))){
var inst_11139 = (state_11198[(12)]);
var inst_11153 = (state_11198[(10)]);
var inst_11153__$1 = cljs.core.seq.call(null,inst_11139);
var state_11198__$1 = (function (){var statearr_11222 = state_11198;
(statearr_11222[(10)] = inst_11153__$1);

return statearr_11222;
})();
if(inst_11153__$1){
var statearr_11223_11269 = state_11198__$1;
(statearr_11223_11269[(1)] = (13));

} else {
var statearr_11224_11270 = state_11198__$1;
(statearr_11224_11270[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11199 === (9))){
var inst_11175 = (state_11198[(2)]);
var state_11198__$1 = state_11198;
var statearr_11225_11271 = state_11198__$1;
(statearr_11225_11271[(2)] = inst_11175);

(statearr_11225_11271[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11199 === (5))){
var inst_11136 = cljs.core.deref.call(null,mults);
var inst_11137 = cljs.core.vals.call(null,inst_11136);
var inst_11138 = cljs.core.seq.call(null,inst_11137);
var inst_11139 = inst_11138;
var inst_11140 = null;
var inst_11141 = (0);
var inst_11142 = (0);
var state_11198__$1 = (function (){var statearr_11226 = state_11198;
(statearr_11226[(12)] = inst_11139);

(statearr_11226[(13)] = inst_11142);

(statearr_11226[(15)] = inst_11140);

(statearr_11226[(16)] = inst_11141);

return statearr_11226;
})();
var statearr_11227_11272 = state_11198__$1;
(statearr_11227_11272[(2)] = null);

(statearr_11227_11272[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11199 === (14))){
var state_11198__$1 = state_11198;
var statearr_11231_11273 = state_11198__$1;
(statearr_11231_11273[(2)] = null);

(statearr_11231_11273[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11199 === (16))){
var inst_11153 = (state_11198[(10)]);
var inst_11157 = cljs.core.chunk_first.call(null,inst_11153);
var inst_11158 = cljs.core.chunk_rest.call(null,inst_11153);
var inst_11159 = cljs.core.count.call(null,inst_11157);
var inst_11139 = inst_11158;
var inst_11140 = inst_11157;
var inst_11141 = inst_11159;
var inst_11142 = (0);
var state_11198__$1 = (function (){var statearr_11232 = state_11198;
(statearr_11232[(12)] = inst_11139);

(statearr_11232[(13)] = inst_11142);

(statearr_11232[(15)] = inst_11140);

(statearr_11232[(16)] = inst_11141);

return statearr_11232;
})();
var statearr_11233_11274 = state_11198__$1;
(statearr_11233_11274[(2)] = null);

(statearr_11233_11274[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11199 === (10))){
var inst_11139 = (state_11198[(12)]);
var inst_11142 = (state_11198[(13)]);
var inst_11140 = (state_11198[(15)]);
var inst_11141 = (state_11198[(16)]);
var inst_11147 = cljs.core._nth.call(null,inst_11140,inst_11142);
var inst_11148 = cljs.core.async.muxch_STAR_.call(null,inst_11147);
var inst_11149 = cljs.core.async.close_BANG_.call(null,inst_11148);
var inst_11150 = (inst_11142 + (1));
var tmp11228 = inst_11139;
var tmp11229 = inst_11140;
var tmp11230 = inst_11141;
var inst_11139__$1 = tmp11228;
var inst_11140__$1 = tmp11229;
var inst_11141__$1 = tmp11230;
var inst_11142__$1 = inst_11150;
var state_11198__$1 = (function (){var statearr_11234 = state_11198;
(statearr_11234[(12)] = inst_11139__$1);

(statearr_11234[(13)] = inst_11142__$1);

(statearr_11234[(17)] = inst_11149);

(statearr_11234[(15)] = inst_11140__$1);

(statearr_11234[(16)] = inst_11141__$1);

return statearr_11234;
})();
var statearr_11235_11275 = state_11198__$1;
(statearr_11235_11275[(2)] = null);

(statearr_11235_11275[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11199 === (18))){
var inst_11168 = (state_11198[(2)]);
var state_11198__$1 = state_11198;
var statearr_11236_11276 = state_11198__$1;
(statearr_11236_11276[(2)] = inst_11168);

(statearr_11236_11276[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11199 === (8))){
var inst_11142 = (state_11198[(13)]);
var inst_11141 = (state_11198[(16)]);
var inst_11144 = (inst_11142 < inst_11141);
var inst_11145 = inst_11144;
var state_11198__$1 = state_11198;
if(cljs.core.truth_(inst_11145)){
var statearr_11237_11277 = state_11198__$1;
(statearr_11237_11277[(1)] = (10));

} else {
var statearr_11238_11278 = state_11198__$1;
(statearr_11238_11278[(1)] = (11));

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
});})(c__9351__auto___11250,mults,ensure_mult,p))
;
return ((function (switch__9239__auto__,c__9351__auto___11250,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__9240__auto__ = null;
var cljs$core$async$state_machine__9240__auto____0 = (function (){
var statearr_11242 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11242[(0)] = cljs$core$async$state_machine__9240__auto__);

(statearr_11242[(1)] = (1));

return statearr_11242;
});
var cljs$core$async$state_machine__9240__auto____1 = (function (state_11198){
while(true){
var ret_value__9241__auto__ = (function (){try{while(true){
var result__9242__auto__ = switch__9239__auto__.call(null,state_11198);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9242__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9242__auto__;
}
break;
}
}catch (e11243){if((e11243 instanceof Object)){
var ex__9243__auto__ = e11243;
var statearr_11244_11279 = state_11198;
(statearr_11244_11279[(5)] = ex__9243__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11198);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11243;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9241__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11280 = state_11198;
state_11198 = G__11280;
continue;
} else {
return ret_value__9241__auto__;
}
break;
}
});
cljs$core$async$state_machine__9240__auto__ = function(state_11198){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9240__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9240__auto____1.call(this,state_11198);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9240__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9240__auto____0;
cljs$core$async$state_machine__9240__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9240__auto____1;
return cljs$core$async$state_machine__9240__auto__;
})()
;})(switch__9239__auto__,c__9351__auto___11250,mults,ensure_mult,p))
})();
var state__9353__auto__ = (function (){var statearr_11245 = f__9352__auto__.call(null);
(statearr_11245[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9351__auto___11250);

return statearr_11245;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9353__auto__);
});})(c__9351__auto___11250,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args11281 = [];
var len__7276__auto___11284 = arguments.length;
var i__7277__auto___11285 = (0);
while(true){
if((i__7277__auto___11285 < len__7276__auto___11284)){
args11281.push((arguments[i__7277__auto___11285]));

var G__11286 = (i__7277__auto___11285 + (1));
i__7277__auto___11285 = G__11286;
continue;
} else {
}
break;
}

var G__11283 = args11281.length;
switch (G__11283) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11281.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args11288 = [];
var len__7276__auto___11291 = arguments.length;
var i__7277__auto___11292 = (0);
while(true){
if((i__7277__auto___11292 < len__7276__auto___11291)){
args11288.push((arguments[i__7277__auto___11292]));

var G__11293 = (i__7277__auto___11292 + (1));
i__7277__auto___11292 = G__11293;
continue;
} else {
}
break;
}

var G__11290 = args11288.length;
switch (G__11290) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11288.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args11295 = [];
var len__7276__auto___11366 = arguments.length;
var i__7277__auto___11367 = (0);
while(true){
if((i__7277__auto___11367 < len__7276__auto___11366)){
args11295.push((arguments[i__7277__auto___11367]));

var G__11368 = (i__7277__auto___11367 + (1));
i__7277__auto___11367 = G__11368;
continue;
} else {
}
break;
}

var G__11297 = args11295.length;
switch (G__11297) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11295.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__9351__auto___11370 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9351__auto___11370,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__9352__auto__ = (function (){var switch__9239__auto__ = ((function (c__9351__auto___11370,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_11336){
var state_val_11337 = (state_11336[(1)]);
if((state_val_11337 === (7))){
var state_11336__$1 = state_11336;
var statearr_11338_11371 = state_11336__$1;
(statearr_11338_11371[(2)] = null);

(statearr_11338_11371[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11337 === (1))){
var state_11336__$1 = state_11336;
var statearr_11339_11372 = state_11336__$1;
(statearr_11339_11372[(2)] = null);

(statearr_11339_11372[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11337 === (4))){
var inst_11300 = (state_11336[(7)]);
var inst_11302 = (inst_11300 < cnt);
var state_11336__$1 = state_11336;
if(cljs.core.truth_(inst_11302)){
var statearr_11340_11373 = state_11336__$1;
(statearr_11340_11373[(1)] = (6));

} else {
var statearr_11341_11374 = state_11336__$1;
(statearr_11341_11374[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11337 === (15))){
var inst_11332 = (state_11336[(2)]);
var state_11336__$1 = state_11336;
var statearr_11342_11375 = state_11336__$1;
(statearr_11342_11375[(2)] = inst_11332);

(statearr_11342_11375[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11337 === (13))){
var inst_11325 = cljs.core.async.close_BANG_.call(null,out);
var state_11336__$1 = state_11336;
var statearr_11343_11376 = state_11336__$1;
(statearr_11343_11376[(2)] = inst_11325);

(statearr_11343_11376[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11337 === (6))){
var state_11336__$1 = state_11336;
var statearr_11344_11377 = state_11336__$1;
(statearr_11344_11377[(2)] = null);

(statearr_11344_11377[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11337 === (3))){
var inst_11334 = (state_11336[(2)]);
var state_11336__$1 = state_11336;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11336__$1,inst_11334);
} else {
if((state_val_11337 === (12))){
var inst_11322 = (state_11336[(8)]);
var inst_11322__$1 = (state_11336[(2)]);
var inst_11323 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_11322__$1);
var state_11336__$1 = (function (){var statearr_11345 = state_11336;
(statearr_11345[(8)] = inst_11322__$1);

return statearr_11345;
})();
if(cljs.core.truth_(inst_11323)){
var statearr_11346_11378 = state_11336__$1;
(statearr_11346_11378[(1)] = (13));

} else {
var statearr_11347_11379 = state_11336__$1;
(statearr_11347_11379[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11337 === (2))){
var inst_11299 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_11300 = (0);
var state_11336__$1 = (function (){var statearr_11348 = state_11336;
(statearr_11348[(9)] = inst_11299);

(statearr_11348[(7)] = inst_11300);

return statearr_11348;
})();
var statearr_11349_11380 = state_11336__$1;
(statearr_11349_11380[(2)] = null);

(statearr_11349_11380[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11337 === (11))){
var inst_11300 = (state_11336[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_11336,(10),Object,null,(9));
var inst_11309 = chs__$1.call(null,inst_11300);
var inst_11310 = done.call(null,inst_11300);
var inst_11311 = cljs.core.async.take_BANG_.call(null,inst_11309,inst_11310);
var state_11336__$1 = state_11336;
var statearr_11350_11381 = state_11336__$1;
(statearr_11350_11381[(2)] = inst_11311);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11336__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11337 === (9))){
var inst_11300 = (state_11336[(7)]);
var inst_11313 = (state_11336[(2)]);
var inst_11314 = (inst_11300 + (1));
var inst_11300__$1 = inst_11314;
var state_11336__$1 = (function (){var statearr_11351 = state_11336;
(statearr_11351[(7)] = inst_11300__$1);

(statearr_11351[(10)] = inst_11313);

return statearr_11351;
})();
var statearr_11352_11382 = state_11336__$1;
(statearr_11352_11382[(2)] = null);

(statearr_11352_11382[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11337 === (5))){
var inst_11320 = (state_11336[(2)]);
var state_11336__$1 = (function (){var statearr_11353 = state_11336;
(statearr_11353[(11)] = inst_11320);

return statearr_11353;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11336__$1,(12),dchan);
} else {
if((state_val_11337 === (14))){
var inst_11322 = (state_11336[(8)]);
var inst_11327 = cljs.core.apply.call(null,f,inst_11322);
var state_11336__$1 = state_11336;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11336__$1,(16),out,inst_11327);
} else {
if((state_val_11337 === (16))){
var inst_11329 = (state_11336[(2)]);
var state_11336__$1 = (function (){var statearr_11354 = state_11336;
(statearr_11354[(12)] = inst_11329);

return statearr_11354;
})();
var statearr_11355_11383 = state_11336__$1;
(statearr_11355_11383[(2)] = null);

(statearr_11355_11383[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11337 === (10))){
var inst_11304 = (state_11336[(2)]);
var inst_11305 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_11336__$1 = (function (){var statearr_11356 = state_11336;
(statearr_11356[(13)] = inst_11304);

return statearr_11356;
})();
var statearr_11357_11384 = state_11336__$1;
(statearr_11357_11384[(2)] = inst_11305);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11336__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11337 === (8))){
var inst_11318 = (state_11336[(2)]);
var state_11336__$1 = state_11336;
var statearr_11358_11385 = state_11336__$1;
(statearr_11358_11385[(2)] = inst_11318);

(statearr_11358_11385[(1)] = (5));


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
});})(c__9351__auto___11370,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__9239__auto__,c__9351__auto___11370,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__9240__auto__ = null;
var cljs$core$async$state_machine__9240__auto____0 = (function (){
var statearr_11362 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11362[(0)] = cljs$core$async$state_machine__9240__auto__);

(statearr_11362[(1)] = (1));

return statearr_11362;
});
var cljs$core$async$state_machine__9240__auto____1 = (function (state_11336){
while(true){
var ret_value__9241__auto__ = (function (){try{while(true){
var result__9242__auto__ = switch__9239__auto__.call(null,state_11336);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9242__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9242__auto__;
}
break;
}
}catch (e11363){if((e11363 instanceof Object)){
var ex__9243__auto__ = e11363;
var statearr_11364_11386 = state_11336;
(statearr_11364_11386[(5)] = ex__9243__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11336);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11363;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9241__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11387 = state_11336;
state_11336 = G__11387;
continue;
} else {
return ret_value__9241__auto__;
}
break;
}
});
cljs$core$async$state_machine__9240__auto__ = function(state_11336){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9240__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9240__auto____1.call(this,state_11336);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9240__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9240__auto____0;
cljs$core$async$state_machine__9240__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9240__auto____1;
return cljs$core$async$state_machine__9240__auto__;
})()
;})(switch__9239__auto__,c__9351__auto___11370,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__9353__auto__ = (function (){var statearr_11365 = f__9352__auto__.call(null);
(statearr_11365[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9351__auto___11370);

return statearr_11365;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9353__auto__);
});})(c__9351__auto___11370,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args11389 = [];
var len__7276__auto___11445 = arguments.length;
var i__7277__auto___11446 = (0);
while(true){
if((i__7277__auto___11446 < len__7276__auto___11445)){
args11389.push((arguments[i__7277__auto___11446]));

var G__11447 = (i__7277__auto___11446 + (1));
i__7277__auto___11446 = G__11447;
continue;
} else {
}
break;
}

var G__11391 = args11389.length;
switch (G__11391) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11389.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__9351__auto___11449 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9351__auto___11449,out){
return (function (){
var f__9352__auto__ = (function (){var switch__9239__auto__ = ((function (c__9351__auto___11449,out){
return (function (state_11421){
var state_val_11422 = (state_11421[(1)]);
if((state_val_11422 === (7))){
var inst_11400 = (state_11421[(7)]);
var inst_11401 = (state_11421[(8)]);
var inst_11400__$1 = (state_11421[(2)]);
var inst_11401__$1 = cljs.core.nth.call(null,inst_11400__$1,(0),null);
var inst_11402 = cljs.core.nth.call(null,inst_11400__$1,(1),null);
var inst_11403 = (inst_11401__$1 == null);
var state_11421__$1 = (function (){var statearr_11423 = state_11421;
(statearr_11423[(7)] = inst_11400__$1);

(statearr_11423[(9)] = inst_11402);

(statearr_11423[(8)] = inst_11401__$1);

return statearr_11423;
})();
if(cljs.core.truth_(inst_11403)){
var statearr_11424_11450 = state_11421__$1;
(statearr_11424_11450[(1)] = (8));

} else {
var statearr_11425_11451 = state_11421__$1;
(statearr_11425_11451[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11422 === (1))){
var inst_11392 = cljs.core.vec.call(null,chs);
var inst_11393 = inst_11392;
var state_11421__$1 = (function (){var statearr_11426 = state_11421;
(statearr_11426[(10)] = inst_11393);

return statearr_11426;
})();
var statearr_11427_11452 = state_11421__$1;
(statearr_11427_11452[(2)] = null);

(statearr_11427_11452[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11422 === (4))){
var inst_11393 = (state_11421[(10)]);
var state_11421__$1 = state_11421;
return cljs.core.async.ioc_alts_BANG_.call(null,state_11421__$1,(7),inst_11393);
} else {
if((state_val_11422 === (6))){
var inst_11417 = (state_11421[(2)]);
var state_11421__$1 = state_11421;
var statearr_11428_11453 = state_11421__$1;
(statearr_11428_11453[(2)] = inst_11417);

(statearr_11428_11453[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11422 === (3))){
var inst_11419 = (state_11421[(2)]);
var state_11421__$1 = state_11421;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11421__$1,inst_11419);
} else {
if((state_val_11422 === (2))){
var inst_11393 = (state_11421[(10)]);
var inst_11395 = cljs.core.count.call(null,inst_11393);
var inst_11396 = (inst_11395 > (0));
var state_11421__$1 = state_11421;
if(cljs.core.truth_(inst_11396)){
var statearr_11430_11454 = state_11421__$1;
(statearr_11430_11454[(1)] = (4));

} else {
var statearr_11431_11455 = state_11421__$1;
(statearr_11431_11455[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11422 === (11))){
var inst_11393 = (state_11421[(10)]);
var inst_11410 = (state_11421[(2)]);
var tmp11429 = inst_11393;
var inst_11393__$1 = tmp11429;
var state_11421__$1 = (function (){var statearr_11432 = state_11421;
(statearr_11432[(11)] = inst_11410);

(statearr_11432[(10)] = inst_11393__$1);

return statearr_11432;
})();
var statearr_11433_11456 = state_11421__$1;
(statearr_11433_11456[(2)] = null);

(statearr_11433_11456[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11422 === (9))){
var inst_11401 = (state_11421[(8)]);
var state_11421__$1 = state_11421;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11421__$1,(11),out,inst_11401);
} else {
if((state_val_11422 === (5))){
var inst_11415 = cljs.core.async.close_BANG_.call(null,out);
var state_11421__$1 = state_11421;
var statearr_11434_11457 = state_11421__$1;
(statearr_11434_11457[(2)] = inst_11415);

(statearr_11434_11457[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11422 === (10))){
var inst_11413 = (state_11421[(2)]);
var state_11421__$1 = state_11421;
var statearr_11435_11458 = state_11421__$1;
(statearr_11435_11458[(2)] = inst_11413);

(statearr_11435_11458[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11422 === (8))){
var inst_11400 = (state_11421[(7)]);
var inst_11402 = (state_11421[(9)]);
var inst_11401 = (state_11421[(8)]);
var inst_11393 = (state_11421[(10)]);
var inst_11405 = (function (){var cs = inst_11393;
var vec__11398 = inst_11400;
var v = inst_11401;
var c = inst_11402;
return ((function (cs,vec__11398,v,c,inst_11400,inst_11402,inst_11401,inst_11393,state_val_11422,c__9351__auto___11449,out){
return (function (p1__11388_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__11388_SHARP_);
});
;})(cs,vec__11398,v,c,inst_11400,inst_11402,inst_11401,inst_11393,state_val_11422,c__9351__auto___11449,out))
})();
var inst_11406 = cljs.core.filterv.call(null,inst_11405,inst_11393);
var inst_11393__$1 = inst_11406;
var state_11421__$1 = (function (){var statearr_11436 = state_11421;
(statearr_11436[(10)] = inst_11393__$1);

return statearr_11436;
})();
var statearr_11437_11459 = state_11421__$1;
(statearr_11437_11459[(2)] = null);

(statearr_11437_11459[(1)] = (2));


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
});})(c__9351__auto___11449,out))
;
return ((function (switch__9239__auto__,c__9351__auto___11449,out){
return (function() {
var cljs$core$async$state_machine__9240__auto__ = null;
var cljs$core$async$state_machine__9240__auto____0 = (function (){
var statearr_11441 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11441[(0)] = cljs$core$async$state_machine__9240__auto__);

(statearr_11441[(1)] = (1));

return statearr_11441;
});
var cljs$core$async$state_machine__9240__auto____1 = (function (state_11421){
while(true){
var ret_value__9241__auto__ = (function (){try{while(true){
var result__9242__auto__ = switch__9239__auto__.call(null,state_11421);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9242__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9242__auto__;
}
break;
}
}catch (e11442){if((e11442 instanceof Object)){
var ex__9243__auto__ = e11442;
var statearr_11443_11460 = state_11421;
(statearr_11443_11460[(5)] = ex__9243__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11421);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11442;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9241__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11461 = state_11421;
state_11421 = G__11461;
continue;
} else {
return ret_value__9241__auto__;
}
break;
}
});
cljs$core$async$state_machine__9240__auto__ = function(state_11421){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9240__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9240__auto____1.call(this,state_11421);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9240__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9240__auto____0;
cljs$core$async$state_machine__9240__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9240__auto____1;
return cljs$core$async$state_machine__9240__auto__;
})()
;})(switch__9239__auto__,c__9351__auto___11449,out))
})();
var state__9353__auto__ = (function (){var statearr_11444 = f__9352__auto__.call(null);
(statearr_11444[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9351__auto___11449);

return statearr_11444;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9353__auto__);
});})(c__9351__auto___11449,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args11462 = [];
var len__7276__auto___11511 = arguments.length;
var i__7277__auto___11512 = (0);
while(true){
if((i__7277__auto___11512 < len__7276__auto___11511)){
args11462.push((arguments[i__7277__auto___11512]));

var G__11513 = (i__7277__auto___11512 + (1));
i__7277__auto___11512 = G__11513;
continue;
} else {
}
break;
}

var G__11464 = args11462.length;
switch (G__11464) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11462.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__9351__auto___11515 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9351__auto___11515,out){
return (function (){
var f__9352__auto__ = (function (){var switch__9239__auto__ = ((function (c__9351__auto___11515,out){
return (function (state_11488){
var state_val_11489 = (state_11488[(1)]);
if((state_val_11489 === (7))){
var inst_11470 = (state_11488[(7)]);
var inst_11470__$1 = (state_11488[(2)]);
var inst_11471 = (inst_11470__$1 == null);
var inst_11472 = cljs.core.not.call(null,inst_11471);
var state_11488__$1 = (function (){var statearr_11490 = state_11488;
(statearr_11490[(7)] = inst_11470__$1);

return statearr_11490;
})();
if(inst_11472){
var statearr_11491_11516 = state_11488__$1;
(statearr_11491_11516[(1)] = (8));

} else {
var statearr_11492_11517 = state_11488__$1;
(statearr_11492_11517[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11489 === (1))){
var inst_11465 = (0);
var state_11488__$1 = (function (){var statearr_11493 = state_11488;
(statearr_11493[(8)] = inst_11465);

return statearr_11493;
})();
var statearr_11494_11518 = state_11488__$1;
(statearr_11494_11518[(2)] = null);

(statearr_11494_11518[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11489 === (4))){
var state_11488__$1 = state_11488;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11488__$1,(7),ch);
} else {
if((state_val_11489 === (6))){
var inst_11483 = (state_11488[(2)]);
var state_11488__$1 = state_11488;
var statearr_11495_11519 = state_11488__$1;
(statearr_11495_11519[(2)] = inst_11483);

(statearr_11495_11519[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11489 === (3))){
var inst_11485 = (state_11488[(2)]);
var inst_11486 = cljs.core.async.close_BANG_.call(null,out);
var state_11488__$1 = (function (){var statearr_11496 = state_11488;
(statearr_11496[(9)] = inst_11485);

return statearr_11496;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11488__$1,inst_11486);
} else {
if((state_val_11489 === (2))){
var inst_11465 = (state_11488[(8)]);
var inst_11467 = (inst_11465 < n);
var state_11488__$1 = state_11488;
if(cljs.core.truth_(inst_11467)){
var statearr_11497_11520 = state_11488__$1;
(statearr_11497_11520[(1)] = (4));

} else {
var statearr_11498_11521 = state_11488__$1;
(statearr_11498_11521[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11489 === (11))){
var inst_11465 = (state_11488[(8)]);
var inst_11475 = (state_11488[(2)]);
var inst_11476 = (inst_11465 + (1));
var inst_11465__$1 = inst_11476;
var state_11488__$1 = (function (){var statearr_11499 = state_11488;
(statearr_11499[(10)] = inst_11475);

(statearr_11499[(8)] = inst_11465__$1);

return statearr_11499;
})();
var statearr_11500_11522 = state_11488__$1;
(statearr_11500_11522[(2)] = null);

(statearr_11500_11522[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11489 === (9))){
var state_11488__$1 = state_11488;
var statearr_11501_11523 = state_11488__$1;
(statearr_11501_11523[(2)] = null);

(statearr_11501_11523[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11489 === (5))){
var state_11488__$1 = state_11488;
var statearr_11502_11524 = state_11488__$1;
(statearr_11502_11524[(2)] = null);

(statearr_11502_11524[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11489 === (10))){
var inst_11480 = (state_11488[(2)]);
var state_11488__$1 = state_11488;
var statearr_11503_11525 = state_11488__$1;
(statearr_11503_11525[(2)] = inst_11480);

(statearr_11503_11525[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11489 === (8))){
var inst_11470 = (state_11488[(7)]);
var state_11488__$1 = state_11488;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11488__$1,(11),out,inst_11470);
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
});})(c__9351__auto___11515,out))
;
return ((function (switch__9239__auto__,c__9351__auto___11515,out){
return (function() {
var cljs$core$async$state_machine__9240__auto__ = null;
var cljs$core$async$state_machine__9240__auto____0 = (function (){
var statearr_11507 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_11507[(0)] = cljs$core$async$state_machine__9240__auto__);

(statearr_11507[(1)] = (1));

return statearr_11507;
});
var cljs$core$async$state_machine__9240__auto____1 = (function (state_11488){
while(true){
var ret_value__9241__auto__ = (function (){try{while(true){
var result__9242__auto__ = switch__9239__auto__.call(null,state_11488);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9242__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9242__auto__;
}
break;
}
}catch (e11508){if((e11508 instanceof Object)){
var ex__9243__auto__ = e11508;
var statearr_11509_11526 = state_11488;
(statearr_11509_11526[(5)] = ex__9243__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11488);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11508;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9241__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11527 = state_11488;
state_11488 = G__11527;
continue;
} else {
return ret_value__9241__auto__;
}
break;
}
});
cljs$core$async$state_machine__9240__auto__ = function(state_11488){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9240__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9240__auto____1.call(this,state_11488);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9240__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9240__auto____0;
cljs$core$async$state_machine__9240__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9240__auto____1;
return cljs$core$async$state_machine__9240__auto__;
})()
;})(switch__9239__auto__,c__9351__auto___11515,out))
})();
var state__9353__auto__ = (function (){var statearr_11510 = f__9352__auto__.call(null);
(statearr_11510[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9351__auto___11515);

return statearr_11510;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9353__auto__);
});})(c__9351__auto___11515,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async11535 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11535 = (function (map_LT_,f,ch,meta11536){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta11536 = meta11536;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async11535.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11537,meta11536__$1){
var self__ = this;
var _11537__$1 = this;
return (new cljs.core.async.t_cljs$core$async11535(self__.map_LT_,self__.f,self__.ch,meta11536__$1));
});

cljs.core.async.t_cljs$core$async11535.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11537){
var self__ = this;
var _11537__$1 = this;
return self__.meta11536;
});

cljs.core.async.t_cljs$core$async11535.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async11535.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async11535.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async11535.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async11535.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async11538 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11538 = (function (map_LT_,f,ch,meta11536,_,fn1,meta11539){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta11536 = meta11536;
this._ = _;
this.fn1 = fn1;
this.meta11539 = meta11539;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async11538.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_11540,meta11539__$1){
var self__ = this;
var _11540__$1 = this;
return (new cljs.core.async.t_cljs$core$async11538(self__.map_LT_,self__.f,self__.ch,self__.meta11536,self__._,self__.fn1,meta11539__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async11538.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_11540){
var self__ = this;
var _11540__$1 = this;
return self__.meta11539;
});})(___$1))
;

cljs.core.async.t_cljs$core$async11538.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async11538.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async11538.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async11538.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__11528_SHARP_){
return f1.call(null,(((p1__11528_SHARP_ == null))?null:self__.f.call(null,p1__11528_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async11538.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta11536","meta11536",1775115601,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async11535","cljs.core.async/t_cljs$core$async11535",-1244999119,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta11539","meta11539",461059651,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async11538.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11538.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11538";

cljs.core.async.t_cljs$core$async11538.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__6813__auto__,writer__6814__auto__,opt__6815__auto__){
return cljs.core._write.call(null,writer__6814__auto__,"cljs.core.async/t_cljs$core$async11538");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async11538 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async11538(map_LT___$1,f__$1,ch__$1,meta11536__$1,___$2,fn1__$1,meta11539){
return (new cljs.core.async.t_cljs$core$async11538(map_LT___$1,f__$1,ch__$1,meta11536__$1,___$2,fn1__$1,meta11539));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async11538(self__.map_LT_,self__.f,self__.ch,self__.meta11536,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__6195__auto__ = ret;
if(cljs.core.truth_(and__6195__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__6195__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async11535.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async11535.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async11535.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta11536","meta11536",1775115601,null)], null);
});

cljs.core.async.t_cljs$core$async11535.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11535.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11535";

cljs.core.async.t_cljs$core$async11535.cljs$lang$ctorPrWriter = (function (this__6813__auto__,writer__6814__auto__,opt__6815__auto__){
return cljs.core._write.call(null,writer__6814__auto__,"cljs.core.async/t_cljs$core$async11535");
});

cljs.core.async.__GT_t_cljs$core$async11535 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async11535(map_LT___$1,f__$1,ch__$1,meta11536){
return (new cljs.core.async.t_cljs$core$async11535(map_LT___$1,f__$1,ch__$1,meta11536));
});

}

return (new cljs.core.async.t_cljs$core$async11535(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async11544 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11544 = (function (map_GT_,f,ch,meta11545){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta11545 = meta11545;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async11544.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11546,meta11545__$1){
var self__ = this;
var _11546__$1 = this;
return (new cljs.core.async.t_cljs$core$async11544(self__.map_GT_,self__.f,self__.ch,meta11545__$1));
});

cljs.core.async.t_cljs$core$async11544.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11546){
var self__ = this;
var _11546__$1 = this;
return self__.meta11545;
});

cljs.core.async.t_cljs$core$async11544.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async11544.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async11544.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async11544.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async11544.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async11544.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async11544.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta11545","meta11545",-1727233406,null)], null);
});

cljs.core.async.t_cljs$core$async11544.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11544.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11544";

cljs.core.async.t_cljs$core$async11544.cljs$lang$ctorPrWriter = (function (this__6813__auto__,writer__6814__auto__,opt__6815__auto__){
return cljs.core._write.call(null,writer__6814__auto__,"cljs.core.async/t_cljs$core$async11544");
});

cljs.core.async.__GT_t_cljs$core$async11544 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async11544(map_GT___$1,f__$1,ch__$1,meta11545){
return (new cljs.core.async.t_cljs$core$async11544(map_GT___$1,f__$1,ch__$1,meta11545));
});

}

return (new cljs.core.async.t_cljs$core$async11544(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async11550 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11550 = (function (filter_GT_,p,ch,meta11551){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta11551 = meta11551;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async11550.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11552,meta11551__$1){
var self__ = this;
var _11552__$1 = this;
return (new cljs.core.async.t_cljs$core$async11550(self__.filter_GT_,self__.p,self__.ch,meta11551__$1));
});

cljs.core.async.t_cljs$core$async11550.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11552){
var self__ = this;
var _11552__$1 = this;
return self__.meta11551;
});

cljs.core.async.t_cljs$core$async11550.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async11550.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async11550.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async11550.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async11550.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async11550.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async11550.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async11550.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta11551","meta11551",-586749894,null)], null);
});

cljs.core.async.t_cljs$core$async11550.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11550.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11550";

cljs.core.async.t_cljs$core$async11550.cljs$lang$ctorPrWriter = (function (this__6813__auto__,writer__6814__auto__,opt__6815__auto__){
return cljs.core._write.call(null,writer__6814__auto__,"cljs.core.async/t_cljs$core$async11550");
});

cljs.core.async.__GT_t_cljs$core$async11550 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async11550(filter_GT___$1,p__$1,ch__$1,meta11551){
return (new cljs.core.async.t_cljs$core$async11550(filter_GT___$1,p__$1,ch__$1,meta11551));
});

}

return (new cljs.core.async.t_cljs$core$async11550(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args11553 = [];
var len__7276__auto___11597 = arguments.length;
var i__7277__auto___11598 = (0);
while(true){
if((i__7277__auto___11598 < len__7276__auto___11597)){
args11553.push((arguments[i__7277__auto___11598]));

var G__11599 = (i__7277__auto___11598 + (1));
i__7277__auto___11598 = G__11599;
continue;
} else {
}
break;
}

var G__11555 = args11553.length;
switch (G__11555) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11553.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__9351__auto___11601 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9351__auto___11601,out){
return (function (){
var f__9352__auto__ = (function (){var switch__9239__auto__ = ((function (c__9351__auto___11601,out){
return (function (state_11576){
var state_val_11577 = (state_11576[(1)]);
if((state_val_11577 === (7))){
var inst_11572 = (state_11576[(2)]);
var state_11576__$1 = state_11576;
var statearr_11578_11602 = state_11576__$1;
(statearr_11578_11602[(2)] = inst_11572);

(statearr_11578_11602[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11577 === (1))){
var state_11576__$1 = state_11576;
var statearr_11579_11603 = state_11576__$1;
(statearr_11579_11603[(2)] = null);

(statearr_11579_11603[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11577 === (4))){
var inst_11558 = (state_11576[(7)]);
var inst_11558__$1 = (state_11576[(2)]);
var inst_11559 = (inst_11558__$1 == null);
var state_11576__$1 = (function (){var statearr_11580 = state_11576;
(statearr_11580[(7)] = inst_11558__$1);

return statearr_11580;
})();
if(cljs.core.truth_(inst_11559)){
var statearr_11581_11604 = state_11576__$1;
(statearr_11581_11604[(1)] = (5));

} else {
var statearr_11582_11605 = state_11576__$1;
(statearr_11582_11605[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11577 === (6))){
var inst_11558 = (state_11576[(7)]);
var inst_11563 = p.call(null,inst_11558);
var state_11576__$1 = state_11576;
if(cljs.core.truth_(inst_11563)){
var statearr_11583_11606 = state_11576__$1;
(statearr_11583_11606[(1)] = (8));

} else {
var statearr_11584_11607 = state_11576__$1;
(statearr_11584_11607[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11577 === (3))){
var inst_11574 = (state_11576[(2)]);
var state_11576__$1 = state_11576;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11576__$1,inst_11574);
} else {
if((state_val_11577 === (2))){
var state_11576__$1 = state_11576;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11576__$1,(4),ch);
} else {
if((state_val_11577 === (11))){
var inst_11566 = (state_11576[(2)]);
var state_11576__$1 = state_11576;
var statearr_11585_11608 = state_11576__$1;
(statearr_11585_11608[(2)] = inst_11566);

(statearr_11585_11608[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11577 === (9))){
var state_11576__$1 = state_11576;
var statearr_11586_11609 = state_11576__$1;
(statearr_11586_11609[(2)] = null);

(statearr_11586_11609[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11577 === (5))){
var inst_11561 = cljs.core.async.close_BANG_.call(null,out);
var state_11576__$1 = state_11576;
var statearr_11587_11610 = state_11576__$1;
(statearr_11587_11610[(2)] = inst_11561);

(statearr_11587_11610[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11577 === (10))){
var inst_11569 = (state_11576[(2)]);
var state_11576__$1 = (function (){var statearr_11588 = state_11576;
(statearr_11588[(8)] = inst_11569);

return statearr_11588;
})();
var statearr_11589_11611 = state_11576__$1;
(statearr_11589_11611[(2)] = null);

(statearr_11589_11611[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11577 === (8))){
var inst_11558 = (state_11576[(7)]);
var state_11576__$1 = state_11576;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11576__$1,(11),out,inst_11558);
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
});})(c__9351__auto___11601,out))
;
return ((function (switch__9239__auto__,c__9351__auto___11601,out){
return (function() {
var cljs$core$async$state_machine__9240__auto__ = null;
var cljs$core$async$state_machine__9240__auto____0 = (function (){
var statearr_11593 = [null,null,null,null,null,null,null,null,null];
(statearr_11593[(0)] = cljs$core$async$state_machine__9240__auto__);

(statearr_11593[(1)] = (1));

return statearr_11593;
});
var cljs$core$async$state_machine__9240__auto____1 = (function (state_11576){
while(true){
var ret_value__9241__auto__ = (function (){try{while(true){
var result__9242__auto__ = switch__9239__auto__.call(null,state_11576);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9242__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9242__auto__;
}
break;
}
}catch (e11594){if((e11594 instanceof Object)){
var ex__9243__auto__ = e11594;
var statearr_11595_11612 = state_11576;
(statearr_11595_11612[(5)] = ex__9243__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11576);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11594;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9241__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11613 = state_11576;
state_11576 = G__11613;
continue;
} else {
return ret_value__9241__auto__;
}
break;
}
});
cljs$core$async$state_machine__9240__auto__ = function(state_11576){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9240__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9240__auto____1.call(this,state_11576);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9240__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9240__auto____0;
cljs$core$async$state_machine__9240__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9240__auto____1;
return cljs$core$async$state_machine__9240__auto__;
})()
;})(switch__9239__auto__,c__9351__auto___11601,out))
})();
var state__9353__auto__ = (function (){var statearr_11596 = f__9352__auto__.call(null);
(statearr_11596[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9351__auto___11601);

return statearr_11596;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9353__auto__);
});})(c__9351__auto___11601,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args11614 = [];
var len__7276__auto___11617 = arguments.length;
var i__7277__auto___11618 = (0);
while(true){
if((i__7277__auto___11618 < len__7276__auto___11617)){
args11614.push((arguments[i__7277__auto___11618]));

var G__11619 = (i__7277__auto___11618 + (1));
i__7277__auto___11618 = G__11619;
continue;
} else {
}
break;
}

var G__11616 = args11614.length;
switch (G__11616) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11614.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__9351__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9351__auto__){
return (function (){
var f__9352__auto__ = (function (){var switch__9239__auto__ = ((function (c__9351__auto__){
return (function (state_11786){
var state_val_11787 = (state_11786[(1)]);
if((state_val_11787 === (7))){
var inst_11782 = (state_11786[(2)]);
var state_11786__$1 = state_11786;
var statearr_11788_11829 = state_11786__$1;
(statearr_11788_11829[(2)] = inst_11782);

(statearr_11788_11829[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11787 === (20))){
var inst_11752 = (state_11786[(7)]);
var inst_11763 = (state_11786[(2)]);
var inst_11764 = cljs.core.next.call(null,inst_11752);
var inst_11738 = inst_11764;
var inst_11739 = null;
var inst_11740 = (0);
var inst_11741 = (0);
var state_11786__$1 = (function (){var statearr_11789 = state_11786;
(statearr_11789[(8)] = inst_11738);

(statearr_11789[(9)] = inst_11740);

(statearr_11789[(10)] = inst_11763);

(statearr_11789[(11)] = inst_11741);

(statearr_11789[(12)] = inst_11739);

return statearr_11789;
})();
var statearr_11790_11830 = state_11786__$1;
(statearr_11790_11830[(2)] = null);

(statearr_11790_11830[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11787 === (1))){
var state_11786__$1 = state_11786;
var statearr_11791_11831 = state_11786__$1;
(statearr_11791_11831[(2)] = null);

(statearr_11791_11831[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11787 === (4))){
var inst_11727 = (state_11786[(13)]);
var inst_11727__$1 = (state_11786[(2)]);
var inst_11728 = (inst_11727__$1 == null);
var state_11786__$1 = (function (){var statearr_11792 = state_11786;
(statearr_11792[(13)] = inst_11727__$1);

return statearr_11792;
})();
if(cljs.core.truth_(inst_11728)){
var statearr_11793_11832 = state_11786__$1;
(statearr_11793_11832[(1)] = (5));

} else {
var statearr_11794_11833 = state_11786__$1;
(statearr_11794_11833[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11787 === (15))){
var state_11786__$1 = state_11786;
var statearr_11798_11834 = state_11786__$1;
(statearr_11798_11834[(2)] = null);

(statearr_11798_11834[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11787 === (21))){
var state_11786__$1 = state_11786;
var statearr_11799_11835 = state_11786__$1;
(statearr_11799_11835[(2)] = null);

(statearr_11799_11835[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11787 === (13))){
var inst_11738 = (state_11786[(8)]);
var inst_11740 = (state_11786[(9)]);
var inst_11741 = (state_11786[(11)]);
var inst_11739 = (state_11786[(12)]);
var inst_11748 = (state_11786[(2)]);
var inst_11749 = (inst_11741 + (1));
var tmp11795 = inst_11738;
var tmp11796 = inst_11740;
var tmp11797 = inst_11739;
var inst_11738__$1 = tmp11795;
var inst_11739__$1 = tmp11797;
var inst_11740__$1 = tmp11796;
var inst_11741__$1 = inst_11749;
var state_11786__$1 = (function (){var statearr_11800 = state_11786;
(statearr_11800[(8)] = inst_11738__$1);

(statearr_11800[(9)] = inst_11740__$1);

(statearr_11800[(14)] = inst_11748);

(statearr_11800[(11)] = inst_11741__$1);

(statearr_11800[(12)] = inst_11739__$1);

return statearr_11800;
})();
var statearr_11801_11836 = state_11786__$1;
(statearr_11801_11836[(2)] = null);

(statearr_11801_11836[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11787 === (22))){
var state_11786__$1 = state_11786;
var statearr_11802_11837 = state_11786__$1;
(statearr_11802_11837[(2)] = null);

(statearr_11802_11837[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11787 === (6))){
var inst_11727 = (state_11786[(13)]);
var inst_11736 = f.call(null,inst_11727);
var inst_11737 = cljs.core.seq.call(null,inst_11736);
var inst_11738 = inst_11737;
var inst_11739 = null;
var inst_11740 = (0);
var inst_11741 = (0);
var state_11786__$1 = (function (){var statearr_11803 = state_11786;
(statearr_11803[(8)] = inst_11738);

(statearr_11803[(9)] = inst_11740);

(statearr_11803[(11)] = inst_11741);

(statearr_11803[(12)] = inst_11739);

return statearr_11803;
})();
var statearr_11804_11838 = state_11786__$1;
(statearr_11804_11838[(2)] = null);

(statearr_11804_11838[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11787 === (17))){
var inst_11752 = (state_11786[(7)]);
var inst_11756 = cljs.core.chunk_first.call(null,inst_11752);
var inst_11757 = cljs.core.chunk_rest.call(null,inst_11752);
var inst_11758 = cljs.core.count.call(null,inst_11756);
var inst_11738 = inst_11757;
var inst_11739 = inst_11756;
var inst_11740 = inst_11758;
var inst_11741 = (0);
var state_11786__$1 = (function (){var statearr_11805 = state_11786;
(statearr_11805[(8)] = inst_11738);

(statearr_11805[(9)] = inst_11740);

(statearr_11805[(11)] = inst_11741);

(statearr_11805[(12)] = inst_11739);

return statearr_11805;
})();
var statearr_11806_11839 = state_11786__$1;
(statearr_11806_11839[(2)] = null);

(statearr_11806_11839[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11787 === (3))){
var inst_11784 = (state_11786[(2)]);
var state_11786__$1 = state_11786;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11786__$1,inst_11784);
} else {
if((state_val_11787 === (12))){
var inst_11772 = (state_11786[(2)]);
var state_11786__$1 = state_11786;
var statearr_11807_11840 = state_11786__$1;
(statearr_11807_11840[(2)] = inst_11772);

(statearr_11807_11840[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11787 === (2))){
var state_11786__$1 = state_11786;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11786__$1,(4),in$);
} else {
if((state_val_11787 === (23))){
var inst_11780 = (state_11786[(2)]);
var state_11786__$1 = state_11786;
var statearr_11808_11841 = state_11786__$1;
(statearr_11808_11841[(2)] = inst_11780);

(statearr_11808_11841[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11787 === (19))){
var inst_11767 = (state_11786[(2)]);
var state_11786__$1 = state_11786;
var statearr_11809_11842 = state_11786__$1;
(statearr_11809_11842[(2)] = inst_11767);

(statearr_11809_11842[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11787 === (11))){
var inst_11738 = (state_11786[(8)]);
var inst_11752 = (state_11786[(7)]);
var inst_11752__$1 = cljs.core.seq.call(null,inst_11738);
var state_11786__$1 = (function (){var statearr_11810 = state_11786;
(statearr_11810[(7)] = inst_11752__$1);

return statearr_11810;
})();
if(inst_11752__$1){
var statearr_11811_11843 = state_11786__$1;
(statearr_11811_11843[(1)] = (14));

} else {
var statearr_11812_11844 = state_11786__$1;
(statearr_11812_11844[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11787 === (9))){
var inst_11774 = (state_11786[(2)]);
var inst_11775 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_11786__$1 = (function (){var statearr_11813 = state_11786;
(statearr_11813[(15)] = inst_11774);

return statearr_11813;
})();
if(cljs.core.truth_(inst_11775)){
var statearr_11814_11845 = state_11786__$1;
(statearr_11814_11845[(1)] = (21));

} else {
var statearr_11815_11846 = state_11786__$1;
(statearr_11815_11846[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11787 === (5))){
var inst_11730 = cljs.core.async.close_BANG_.call(null,out);
var state_11786__$1 = state_11786;
var statearr_11816_11847 = state_11786__$1;
(statearr_11816_11847[(2)] = inst_11730);

(statearr_11816_11847[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11787 === (14))){
var inst_11752 = (state_11786[(7)]);
var inst_11754 = cljs.core.chunked_seq_QMARK_.call(null,inst_11752);
var state_11786__$1 = state_11786;
if(inst_11754){
var statearr_11817_11848 = state_11786__$1;
(statearr_11817_11848[(1)] = (17));

} else {
var statearr_11818_11849 = state_11786__$1;
(statearr_11818_11849[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11787 === (16))){
var inst_11770 = (state_11786[(2)]);
var state_11786__$1 = state_11786;
var statearr_11819_11850 = state_11786__$1;
(statearr_11819_11850[(2)] = inst_11770);

(statearr_11819_11850[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11787 === (10))){
var inst_11741 = (state_11786[(11)]);
var inst_11739 = (state_11786[(12)]);
var inst_11746 = cljs.core._nth.call(null,inst_11739,inst_11741);
var state_11786__$1 = state_11786;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11786__$1,(13),out,inst_11746);
} else {
if((state_val_11787 === (18))){
var inst_11752 = (state_11786[(7)]);
var inst_11761 = cljs.core.first.call(null,inst_11752);
var state_11786__$1 = state_11786;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11786__$1,(20),out,inst_11761);
} else {
if((state_val_11787 === (8))){
var inst_11740 = (state_11786[(9)]);
var inst_11741 = (state_11786[(11)]);
var inst_11743 = (inst_11741 < inst_11740);
var inst_11744 = inst_11743;
var state_11786__$1 = state_11786;
if(cljs.core.truth_(inst_11744)){
var statearr_11820_11851 = state_11786__$1;
(statearr_11820_11851[(1)] = (10));

} else {
var statearr_11821_11852 = state_11786__$1;
(statearr_11821_11852[(1)] = (11));

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
});})(c__9351__auto__))
;
return ((function (switch__9239__auto__,c__9351__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__9240__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__9240__auto____0 = (function (){
var statearr_11825 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11825[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__9240__auto__);

(statearr_11825[(1)] = (1));

return statearr_11825;
});
var cljs$core$async$mapcat_STAR__$_state_machine__9240__auto____1 = (function (state_11786){
while(true){
var ret_value__9241__auto__ = (function (){try{while(true){
var result__9242__auto__ = switch__9239__auto__.call(null,state_11786);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9242__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9242__auto__;
}
break;
}
}catch (e11826){if((e11826 instanceof Object)){
var ex__9243__auto__ = e11826;
var statearr_11827_11853 = state_11786;
(statearr_11827_11853[(5)] = ex__9243__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11786);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11826;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9241__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11854 = state_11786;
state_11786 = G__11854;
continue;
} else {
return ret_value__9241__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__9240__auto__ = function(state_11786){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__9240__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__9240__auto____1.call(this,state_11786);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__9240__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__9240__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__9240__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__9240__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__9240__auto__;
})()
;})(switch__9239__auto__,c__9351__auto__))
})();
var state__9353__auto__ = (function (){var statearr_11828 = f__9352__auto__.call(null);
(statearr_11828[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9351__auto__);

return statearr_11828;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9353__auto__);
});})(c__9351__auto__))
);

return c__9351__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args11855 = [];
var len__7276__auto___11858 = arguments.length;
var i__7277__auto___11859 = (0);
while(true){
if((i__7277__auto___11859 < len__7276__auto___11858)){
args11855.push((arguments[i__7277__auto___11859]));

var G__11860 = (i__7277__auto___11859 + (1));
i__7277__auto___11859 = G__11860;
continue;
} else {
}
break;
}

var G__11857 = args11855.length;
switch (G__11857) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11855.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args11862 = [];
var len__7276__auto___11865 = arguments.length;
var i__7277__auto___11866 = (0);
while(true){
if((i__7277__auto___11866 < len__7276__auto___11865)){
args11862.push((arguments[i__7277__auto___11866]));

var G__11867 = (i__7277__auto___11866 + (1));
i__7277__auto___11866 = G__11867;
continue;
} else {
}
break;
}

var G__11864 = args11862.length;
switch (G__11864) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11862.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args11869 = [];
var len__7276__auto___11920 = arguments.length;
var i__7277__auto___11921 = (0);
while(true){
if((i__7277__auto___11921 < len__7276__auto___11920)){
args11869.push((arguments[i__7277__auto___11921]));

var G__11922 = (i__7277__auto___11921 + (1));
i__7277__auto___11921 = G__11922;
continue;
} else {
}
break;
}

var G__11871 = args11869.length;
switch (G__11871) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11869.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__9351__auto___11924 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9351__auto___11924,out){
return (function (){
var f__9352__auto__ = (function (){var switch__9239__auto__ = ((function (c__9351__auto___11924,out){
return (function (state_11895){
var state_val_11896 = (state_11895[(1)]);
if((state_val_11896 === (7))){
var inst_11890 = (state_11895[(2)]);
var state_11895__$1 = state_11895;
var statearr_11897_11925 = state_11895__$1;
(statearr_11897_11925[(2)] = inst_11890);

(statearr_11897_11925[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11896 === (1))){
var inst_11872 = null;
var state_11895__$1 = (function (){var statearr_11898 = state_11895;
(statearr_11898[(7)] = inst_11872);

return statearr_11898;
})();
var statearr_11899_11926 = state_11895__$1;
(statearr_11899_11926[(2)] = null);

(statearr_11899_11926[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11896 === (4))){
var inst_11875 = (state_11895[(8)]);
var inst_11875__$1 = (state_11895[(2)]);
var inst_11876 = (inst_11875__$1 == null);
var inst_11877 = cljs.core.not.call(null,inst_11876);
var state_11895__$1 = (function (){var statearr_11900 = state_11895;
(statearr_11900[(8)] = inst_11875__$1);

return statearr_11900;
})();
if(inst_11877){
var statearr_11901_11927 = state_11895__$1;
(statearr_11901_11927[(1)] = (5));

} else {
var statearr_11902_11928 = state_11895__$1;
(statearr_11902_11928[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11896 === (6))){
var state_11895__$1 = state_11895;
var statearr_11903_11929 = state_11895__$1;
(statearr_11903_11929[(2)] = null);

(statearr_11903_11929[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11896 === (3))){
var inst_11892 = (state_11895[(2)]);
var inst_11893 = cljs.core.async.close_BANG_.call(null,out);
var state_11895__$1 = (function (){var statearr_11904 = state_11895;
(statearr_11904[(9)] = inst_11892);

return statearr_11904;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11895__$1,inst_11893);
} else {
if((state_val_11896 === (2))){
var state_11895__$1 = state_11895;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11895__$1,(4),ch);
} else {
if((state_val_11896 === (11))){
var inst_11875 = (state_11895[(8)]);
var inst_11884 = (state_11895[(2)]);
var inst_11872 = inst_11875;
var state_11895__$1 = (function (){var statearr_11905 = state_11895;
(statearr_11905[(10)] = inst_11884);

(statearr_11905[(7)] = inst_11872);

return statearr_11905;
})();
var statearr_11906_11930 = state_11895__$1;
(statearr_11906_11930[(2)] = null);

(statearr_11906_11930[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11896 === (9))){
var inst_11875 = (state_11895[(8)]);
var state_11895__$1 = state_11895;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11895__$1,(11),out,inst_11875);
} else {
if((state_val_11896 === (5))){
var inst_11872 = (state_11895[(7)]);
var inst_11875 = (state_11895[(8)]);
var inst_11879 = cljs.core._EQ_.call(null,inst_11875,inst_11872);
var state_11895__$1 = state_11895;
if(inst_11879){
var statearr_11908_11931 = state_11895__$1;
(statearr_11908_11931[(1)] = (8));

} else {
var statearr_11909_11932 = state_11895__$1;
(statearr_11909_11932[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11896 === (10))){
var inst_11887 = (state_11895[(2)]);
var state_11895__$1 = state_11895;
var statearr_11910_11933 = state_11895__$1;
(statearr_11910_11933[(2)] = inst_11887);

(statearr_11910_11933[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11896 === (8))){
var inst_11872 = (state_11895[(7)]);
var tmp11907 = inst_11872;
var inst_11872__$1 = tmp11907;
var state_11895__$1 = (function (){var statearr_11911 = state_11895;
(statearr_11911[(7)] = inst_11872__$1);

return statearr_11911;
})();
var statearr_11912_11934 = state_11895__$1;
(statearr_11912_11934[(2)] = null);

(statearr_11912_11934[(1)] = (2));


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
});})(c__9351__auto___11924,out))
;
return ((function (switch__9239__auto__,c__9351__auto___11924,out){
return (function() {
var cljs$core$async$state_machine__9240__auto__ = null;
var cljs$core$async$state_machine__9240__auto____0 = (function (){
var statearr_11916 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_11916[(0)] = cljs$core$async$state_machine__9240__auto__);

(statearr_11916[(1)] = (1));

return statearr_11916;
});
var cljs$core$async$state_machine__9240__auto____1 = (function (state_11895){
while(true){
var ret_value__9241__auto__ = (function (){try{while(true){
var result__9242__auto__ = switch__9239__auto__.call(null,state_11895);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9242__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9242__auto__;
}
break;
}
}catch (e11917){if((e11917 instanceof Object)){
var ex__9243__auto__ = e11917;
var statearr_11918_11935 = state_11895;
(statearr_11918_11935[(5)] = ex__9243__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11895);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11917;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9241__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11936 = state_11895;
state_11895 = G__11936;
continue;
} else {
return ret_value__9241__auto__;
}
break;
}
});
cljs$core$async$state_machine__9240__auto__ = function(state_11895){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9240__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9240__auto____1.call(this,state_11895);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9240__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9240__auto____0;
cljs$core$async$state_machine__9240__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9240__auto____1;
return cljs$core$async$state_machine__9240__auto__;
})()
;})(switch__9239__auto__,c__9351__auto___11924,out))
})();
var state__9353__auto__ = (function (){var statearr_11919 = f__9352__auto__.call(null);
(statearr_11919[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9351__auto___11924);

return statearr_11919;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9353__auto__);
});})(c__9351__auto___11924,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args11937 = [];
var len__7276__auto___12007 = arguments.length;
var i__7277__auto___12008 = (0);
while(true){
if((i__7277__auto___12008 < len__7276__auto___12007)){
args11937.push((arguments[i__7277__auto___12008]));

var G__12009 = (i__7277__auto___12008 + (1));
i__7277__auto___12008 = G__12009;
continue;
} else {
}
break;
}

var G__11939 = args11937.length;
switch (G__11939) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11937.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__9351__auto___12011 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9351__auto___12011,out){
return (function (){
var f__9352__auto__ = (function (){var switch__9239__auto__ = ((function (c__9351__auto___12011,out){
return (function (state_11977){
var state_val_11978 = (state_11977[(1)]);
if((state_val_11978 === (7))){
var inst_11973 = (state_11977[(2)]);
var state_11977__$1 = state_11977;
var statearr_11979_12012 = state_11977__$1;
(statearr_11979_12012[(2)] = inst_11973);

(statearr_11979_12012[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11978 === (1))){
var inst_11940 = (new Array(n));
var inst_11941 = inst_11940;
var inst_11942 = (0);
var state_11977__$1 = (function (){var statearr_11980 = state_11977;
(statearr_11980[(7)] = inst_11941);

(statearr_11980[(8)] = inst_11942);

return statearr_11980;
})();
var statearr_11981_12013 = state_11977__$1;
(statearr_11981_12013[(2)] = null);

(statearr_11981_12013[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11978 === (4))){
var inst_11945 = (state_11977[(9)]);
var inst_11945__$1 = (state_11977[(2)]);
var inst_11946 = (inst_11945__$1 == null);
var inst_11947 = cljs.core.not.call(null,inst_11946);
var state_11977__$1 = (function (){var statearr_11982 = state_11977;
(statearr_11982[(9)] = inst_11945__$1);

return statearr_11982;
})();
if(inst_11947){
var statearr_11983_12014 = state_11977__$1;
(statearr_11983_12014[(1)] = (5));

} else {
var statearr_11984_12015 = state_11977__$1;
(statearr_11984_12015[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11978 === (15))){
var inst_11967 = (state_11977[(2)]);
var state_11977__$1 = state_11977;
var statearr_11985_12016 = state_11977__$1;
(statearr_11985_12016[(2)] = inst_11967);

(statearr_11985_12016[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11978 === (13))){
var state_11977__$1 = state_11977;
var statearr_11986_12017 = state_11977__$1;
(statearr_11986_12017[(2)] = null);

(statearr_11986_12017[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11978 === (6))){
var inst_11942 = (state_11977[(8)]);
var inst_11963 = (inst_11942 > (0));
var state_11977__$1 = state_11977;
if(cljs.core.truth_(inst_11963)){
var statearr_11987_12018 = state_11977__$1;
(statearr_11987_12018[(1)] = (12));

} else {
var statearr_11988_12019 = state_11977__$1;
(statearr_11988_12019[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11978 === (3))){
var inst_11975 = (state_11977[(2)]);
var state_11977__$1 = state_11977;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11977__$1,inst_11975);
} else {
if((state_val_11978 === (12))){
var inst_11941 = (state_11977[(7)]);
var inst_11965 = cljs.core.vec.call(null,inst_11941);
var state_11977__$1 = state_11977;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11977__$1,(15),out,inst_11965);
} else {
if((state_val_11978 === (2))){
var state_11977__$1 = state_11977;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11977__$1,(4),ch);
} else {
if((state_val_11978 === (11))){
var inst_11957 = (state_11977[(2)]);
var inst_11958 = (new Array(n));
var inst_11941 = inst_11958;
var inst_11942 = (0);
var state_11977__$1 = (function (){var statearr_11989 = state_11977;
(statearr_11989[(10)] = inst_11957);

(statearr_11989[(7)] = inst_11941);

(statearr_11989[(8)] = inst_11942);

return statearr_11989;
})();
var statearr_11990_12020 = state_11977__$1;
(statearr_11990_12020[(2)] = null);

(statearr_11990_12020[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11978 === (9))){
var inst_11941 = (state_11977[(7)]);
var inst_11955 = cljs.core.vec.call(null,inst_11941);
var state_11977__$1 = state_11977;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11977__$1,(11),out,inst_11955);
} else {
if((state_val_11978 === (5))){
var inst_11941 = (state_11977[(7)]);
var inst_11950 = (state_11977[(11)]);
var inst_11945 = (state_11977[(9)]);
var inst_11942 = (state_11977[(8)]);
var inst_11949 = (inst_11941[inst_11942] = inst_11945);
var inst_11950__$1 = (inst_11942 + (1));
var inst_11951 = (inst_11950__$1 < n);
var state_11977__$1 = (function (){var statearr_11991 = state_11977;
(statearr_11991[(12)] = inst_11949);

(statearr_11991[(11)] = inst_11950__$1);

return statearr_11991;
})();
if(cljs.core.truth_(inst_11951)){
var statearr_11992_12021 = state_11977__$1;
(statearr_11992_12021[(1)] = (8));

} else {
var statearr_11993_12022 = state_11977__$1;
(statearr_11993_12022[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11978 === (14))){
var inst_11970 = (state_11977[(2)]);
var inst_11971 = cljs.core.async.close_BANG_.call(null,out);
var state_11977__$1 = (function (){var statearr_11995 = state_11977;
(statearr_11995[(13)] = inst_11970);

return statearr_11995;
})();
var statearr_11996_12023 = state_11977__$1;
(statearr_11996_12023[(2)] = inst_11971);

(statearr_11996_12023[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11978 === (10))){
var inst_11961 = (state_11977[(2)]);
var state_11977__$1 = state_11977;
var statearr_11997_12024 = state_11977__$1;
(statearr_11997_12024[(2)] = inst_11961);

(statearr_11997_12024[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11978 === (8))){
var inst_11941 = (state_11977[(7)]);
var inst_11950 = (state_11977[(11)]);
var tmp11994 = inst_11941;
var inst_11941__$1 = tmp11994;
var inst_11942 = inst_11950;
var state_11977__$1 = (function (){var statearr_11998 = state_11977;
(statearr_11998[(7)] = inst_11941__$1);

(statearr_11998[(8)] = inst_11942);

return statearr_11998;
})();
var statearr_11999_12025 = state_11977__$1;
(statearr_11999_12025[(2)] = null);

(statearr_11999_12025[(1)] = (2));


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
});})(c__9351__auto___12011,out))
;
return ((function (switch__9239__auto__,c__9351__auto___12011,out){
return (function() {
var cljs$core$async$state_machine__9240__auto__ = null;
var cljs$core$async$state_machine__9240__auto____0 = (function (){
var statearr_12003 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12003[(0)] = cljs$core$async$state_machine__9240__auto__);

(statearr_12003[(1)] = (1));

return statearr_12003;
});
var cljs$core$async$state_machine__9240__auto____1 = (function (state_11977){
while(true){
var ret_value__9241__auto__ = (function (){try{while(true){
var result__9242__auto__ = switch__9239__auto__.call(null,state_11977);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9242__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9242__auto__;
}
break;
}
}catch (e12004){if((e12004 instanceof Object)){
var ex__9243__auto__ = e12004;
var statearr_12005_12026 = state_11977;
(statearr_12005_12026[(5)] = ex__9243__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11977);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12004;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9241__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12027 = state_11977;
state_11977 = G__12027;
continue;
} else {
return ret_value__9241__auto__;
}
break;
}
});
cljs$core$async$state_machine__9240__auto__ = function(state_11977){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9240__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9240__auto____1.call(this,state_11977);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9240__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9240__auto____0;
cljs$core$async$state_machine__9240__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9240__auto____1;
return cljs$core$async$state_machine__9240__auto__;
})()
;})(switch__9239__auto__,c__9351__auto___12011,out))
})();
var state__9353__auto__ = (function (){var statearr_12006 = f__9352__auto__.call(null);
(statearr_12006[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9351__auto___12011);

return statearr_12006;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9353__auto__);
});})(c__9351__auto___12011,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args12028 = [];
var len__7276__auto___12102 = arguments.length;
var i__7277__auto___12103 = (0);
while(true){
if((i__7277__auto___12103 < len__7276__auto___12102)){
args12028.push((arguments[i__7277__auto___12103]));

var G__12104 = (i__7277__auto___12103 + (1));
i__7277__auto___12103 = G__12104;
continue;
} else {
}
break;
}

var G__12030 = args12028.length;
switch (G__12030) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12028.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__9351__auto___12106 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9351__auto___12106,out){
return (function (){
var f__9352__auto__ = (function (){var switch__9239__auto__ = ((function (c__9351__auto___12106,out){
return (function (state_12072){
var state_val_12073 = (state_12072[(1)]);
if((state_val_12073 === (7))){
var inst_12068 = (state_12072[(2)]);
var state_12072__$1 = state_12072;
var statearr_12074_12107 = state_12072__$1;
(statearr_12074_12107[(2)] = inst_12068);

(statearr_12074_12107[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12073 === (1))){
var inst_12031 = [];
var inst_12032 = inst_12031;
var inst_12033 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_12072__$1 = (function (){var statearr_12075 = state_12072;
(statearr_12075[(7)] = inst_12033);

(statearr_12075[(8)] = inst_12032);

return statearr_12075;
})();
var statearr_12076_12108 = state_12072__$1;
(statearr_12076_12108[(2)] = null);

(statearr_12076_12108[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12073 === (4))){
var inst_12036 = (state_12072[(9)]);
var inst_12036__$1 = (state_12072[(2)]);
var inst_12037 = (inst_12036__$1 == null);
var inst_12038 = cljs.core.not.call(null,inst_12037);
var state_12072__$1 = (function (){var statearr_12077 = state_12072;
(statearr_12077[(9)] = inst_12036__$1);

return statearr_12077;
})();
if(inst_12038){
var statearr_12078_12109 = state_12072__$1;
(statearr_12078_12109[(1)] = (5));

} else {
var statearr_12079_12110 = state_12072__$1;
(statearr_12079_12110[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12073 === (15))){
var inst_12062 = (state_12072[(2)]);
var state_12072__$1 = state_12072;
var statearr_12080_12111 = state_12072__$1;
(statearr_12080_12111[(2)] = inst_12062);

(statearr_12080_12111[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12073 === (13))){
var state_12072__$1 = state_12072;
var statearr_12081_12112 = state_12072__$1;
(statearr_12081_12112[(2)] = null);

(statearr_12081_12112[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12073 === (6))){
var inst_12032 = (state_12072[(8)]);
var inst_12057 = inst_12032.length;
var inst_12058 = (inst_12057 > (0));
var state_12072__$1 = state_12072;
if(cljs.core.truth_(inst_12058)){
var statearr_12082_12113 = state_12072__$1;
(statearr_12082_12113[(1)] = (12));

} else {
var statearr_12083_12114 = state_12072__$1;
(statearr_12083_12114[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12073 === (3))){
var inst_12070 = (state_12072[(2)]);
var state_12072__$1 = state_12072;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12072__$1,inst_12070);
} else {
if((state_val_12073 === (12))){
var inst_12032 = (state_12072[(8)]);
var inst_12060 = cljs.core.vec.call(null,inst_12032);
var state_12072__$1 = state_12072;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12072__$1,(15),out,inst_12060);
} else {
if((state_val_12073 === (2))){
var state_12072__$1 = state_12072;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12072__$1,(4),ch);
} else {
if((state_val_12073 === (11))){
var inst_12036 = (state_12072[(9)]);
var inst_12040 = (state_12072[(10)]);
var inst_12050 = (state_12072[(2)]);
var inst_12051 = [];
var inst_12052 = inst_12051.push(inst_12036);
var inst_12032 = inst_12051;
var inst_12033 = inst_12040;
var state_12072__$1 = (function (){var statearr_12084 = state_12072;
(statearr_12084[(7)] = inst_12033);

(statearr_12084[(11)] = inst_12050);

(statearr_12084[(8)] = inst_12032);

(statearr_12084[(12)] = inst_12052);

return statearr_12084;
})();
var statearr_12085_12115 = state_12072__$1;
(statearr_12085_12115[(2)] = null);

(statearr_12085_12115[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12073 === (9))){
var inst_12032 = (state_12072[(8)]);
var inst_12048 = cljs.core.vec.call(null,inst_12032);
var state_12072__$1 = state_12072;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12072__$1,(11),out,inst_12048);
} else {
if((state_val_12073 === (5))){
var inst_12033 = (state_12072[(7)]);
var inst_12036 = (state_12072[(9)]);
var inst_12040 = (state_12072[(10)]);
var inst_12040__$1 = f.call(null,inst_12036);
var inst_12041 = cljs.core._EQ_.call(null,inst_12040__$1,inst_12033);
var inst_12042 = cljs.core.keyword_identical_QMARK_.call(null,inst_12033,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_12043 = (inst_12041) || (inst_12042);
var state_12072__$1 = (function (){var statearr_12086 = state_12072;
(statearr_12086[(10)] = inst_12040__$1);

return statearr_12086;
})();
if(cljs.core.truth_(inst_12043)){
var statearr_12087_12116 = state_12072__$1;
(statearr_12087_12116[(1)] = (8));

} else {
var statearr_12088_12117 = state_12072__$1;
(statearr_12088_12117[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12073 === (14))){
var inst_12065 = (state_12072[(2)]);
var inst_12066 = cljs.core.async.close_BANG_.call(null,out);
var state_12072__$1 = (function (){var statearr_12090 = state_12072;
(statearr_12090[(13)] = inst_12065);

return statearr_12090;
})();
var statearr_12091_12118 = state_12072__$1;
(statearr_12091_12118[(2)] = inst_12066);

(statearr_12091_12118[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12073 === (10))){
var inst_12055 = (state_12072[(2)]);
var state_12072__$1 = state_12072;
var statearr_12092_12119 = state_12072__$1;
(statearr_12092_12119[(2)] = inst_12055);

(statearr_12092_12119[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12073 === (8))){
var inst_12036 = (state_12072[(9)]);
var inst_12032 = (state_12072[(8)]);
var inst_12040 = (state_12072[(10)]);
var inst_12045 = inst_12032.push(inst_12036);
var tmp12089 = inst_12032;
var inst_12032__$1 = tmp12089;
var inst_12033 = inst_12040;
var state_12072__$1 = (function (){var statearr_12093 = state_12072;
(statearr_12093[(7)] = inst_12033);

(statearr_12093[(8)] = inst_12032__$1);

(statearr_12093[(14)] = inst_12045);

return statearr_12093;
})();
var statearr_12094_12120 = state_12072__$1;
(statearr_12094_12120[(2)] = null);

(statearr_12094_12120[(1)] = (2));


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
});})(c__9351__auto___12106,out))
;
return ((function (switch__9239__auto__,c__9351__auto___12106,out){
return (function() {
var cljs$core$async$state_machine__9240__auto__ = null;
var cljs$core$async$state_machine__9240__auto____0 = (function (){
var statearr_12098 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12098[(0)] = cljs$core$async$state_machine__9240__auto__);

(statearr_12098[(1)] = (1));

return statearr_12098;
});
var cljs$core$async$state_machine__9240__auto____1 = (function (state_12072){
while(true){
var ret_value__9241__auto__ = (function (){try{while(true){
var result__9242__auto__ = switch__9239__auto__.call(null,state_12072);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9242__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9242__auto__;
}
break;
}
}catch (e12099){if((e12099 instanceof Object)){
var ex__9243__auto__ = e12099;
var statearr_12100_12121 = state_12072;
(statearr_12100_12121[(5)] = ex__9243__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12072);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12099;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9241__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12122 = state_12072;
state_12072 = G__12122;
continue;
} else {
return ret_value__9241__auto__;
}
break;
}
});
cljs$core$async$state_machine__9240__auto__ = function(state_12072){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9240__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9240__auto____1.call(this,state_12072);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9240__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9240__auto____0;
cljs$core$async$state_machine__9240__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9240__auto____1;
return cljs$core$async$state_machine__9240__auto__;
})()
;})(switch__9239__auto__,c__9351__auto___12106,out))
})();
var state__9353__auto__ = (function (){var statearr_12101 = f__9352__auto__.call(null);
(statearr_12101[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9351__auto___12106);

return statearr_12101;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9353__auto__);
});})(c__9351__auto___12106,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map