// Compiled by ClojureScript 1.8.40 {}
goog.provide('myproject.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent.session');
goog.require('secretary.core');
if(typeof myproject.core.click_count !== 'undefined'){
} else {
myproject.core.click_count = reagent.core.atom.call(null,(0));
}
myproject.core.sayHello = hello;
myproject.core.home_page = (function myproject$core$home_page(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Welcome to Reagent"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Just playin around..."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"click this",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
cljs.core.swap_BANG_.call(null,myproject.core.click_count,cljs.core.inc);

cljs.core.println.call(null,"button clicked");

return myproject.core.sayHello.call(null);
})], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"i've been clicked for: ",cljs.core.deref.call(null,myproject.core.click_count)], null)], null);
});
myproject.core.mount_root = (function myproject$core$mount_root(){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [myproject.core.home_page], null),document.getElementById("app"));
});
myproject.core.init_BANG_ = (function myproject$core$init_BANG_(){
return myproject.core.mount_root.call(null);
});

//# sourceMappingURL=core.js.map