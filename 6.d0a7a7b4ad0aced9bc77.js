(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{CXQP:function(t,e,n){"use strict";n.r(e),n.d(e,"ShoppingListModule",function(){return m});var i=n("PCNd"),o=n("tyNb"),s=n("17Wa"),r=n("fXoL"),c=function(){return function(t,e){this.name=t,this.amount=e}}(),b=n("3Pt+"),u=["f"],p=function(){function t(t){this.shoppingListService=t,this.editMode=!1}return t.prototype.ngOnInit=function(){var t=this;this.subscription=this.shoppingListService.startedEditing.subscribe(function(e){t.editMode=!0,t.editedItemIndex=e,t.editedItem=t.shoppingListService.getIngredient(e),t.shoppingListForm.setValue({name:t.editedItem.name,amount:t.editedItem.amount})})},t.prototype.ngOnDestroy=function(){this.subscription.unsubscribe()},t.prototype.submitItem=function(t){var e=t.value,n=new c(e.name,e.amount);this.editMode?(console.log(this.editedItemIndex),console.log(n),this.shoppingListService.updateIngredient(this.editedItemIndex,n)):this.shoppingListService.addIngredient(n),this.editMode=!1,t.reset()},t.prototype.onClear=function(){this.shoppingListForm.reset(),this.editMode=!1},t.prototype.onDelete=function(){this.shoppingListService.deleteIngredient(this.editedItemIndex),this.onClear()},t.\u0275fac=function(e){return new(e||t)(r.Jb(s.a))},t.\u0275cmp=r.Db({type:t,selectors:[["app-shopping-edit"]],viewQuery:function(t,e){var n;1&t&&r.kc(u,3),2&t&&r.Zb(n=r.Ub())&&(e.shoppingListForm=n.first)},decls:21,vars:2,consts:[[1,"row"],[1,"col-xs-12"],[3,"ngSubmit"],["f","ngForm"],[1,"col-sm-5","form-group"],["for","name"],["type","text","id","name","name","name","ngModel","","required","",1,"form-control"],[1,"col-sm-2","form-group"],["for","amount"],["type","number","id","amount","name","amount","ngModel","","required","","pattern","^[1-9]+[0-9]*$",1,"form-control"],["type","submit",1,"btn","btn-success",3,"disabled"],["type","button",1,"btn","btn-danger",3,"click"],["type","button",1,"btn","btn-primary",3,"click"]],template:function(t,e){if(1&t){var n=r.Nb();r.Mb(0,"div",0),r.Mb(1,"div",1),r.Mb(2,"form",2,3),r.Tb("ngSubmit",function(){r.cc(n);var t=r.ac(3);return e.submitItem(t)}),r.Mb(4,"div",0),r.Mb(5,"div",4),r.Mb(6,"label",5),r.gc(7,"Name"),r.Lb(),r.Kb(8,"input",6),r.Lb(),r.Mb(9,"div",7),r.Mb(10,"label",8),r.gc(11,"Amount"),r.Lb(),r.Kb(12,"input",9),r.Lb(),r.Lb(),r.Mb(13,"div",0),r.Mb(14,"div",1),r.Mb(15,"button",10),r.gc(16),r.Lb(),r.Mb(17,"button",11),r.Tb("click",function(){return e.onDelete()}),r.gc(18,"Delete"),r.Lb(),r.Mb(19,"button",12),r.Tb("click",function(){return e.onClear()}),r.gc(20,"Clear"),r.Lb(),r.Lb(),r.Lb(),r.Lb(),r.Lb(),r.Lb()}if(2&t){var i=r.ac(3);r.zb(15),r.Wb("disabled",!i.valid),r.zb(1),r.hc(e.editMode?"Update":"Add")}},directives:[b.u,b.m,b.n,b.a,b.l,b.o,b.s,b.p,b.q],styles:[""]}),t}(),d=n("ofXK");function a(t,e){if(1&t){var n=r.Nb();r.Mb(0,"a",4),r.Tb("click",function(){r.cc(n);var t=e.index;return r.Vb().onEditItem(t)}),r.gc(1),r.Lb()}if(2&t){var i=e.$implicit;r.zb(1),r.jc(" ",i.name," (",i.amount,") ")}}var g=function(){function t(t){this.shoppingListService=t}return t.prototype.ngOnInit=function(){var t=this;this.ingredients=this.shoppingListService.getIngredients(),this.changeIngredientsSubs=this.shoppingListService.ingredientsChanged.subscribe(function(e){t.ingredients=e})},t.prototype.ngOnDestroy=function(){this.changeIngredientsSubs.unsubscribe()},t.prototype.onEditItem=function(t){this.shoppingListService.startedEditing.next(t)},t.\u0275fac=function(e){return new(e||t)(r.Jb(s.a))},t.\u0275cmp=r.Db({type:t,selectors:[["app-shopping-list"]],decls:6,vars:1,consts:[[1,"row"],[1,"col-xs-10"],[1,"list-group"],["class","list-group-item","style","cursor: pointer",3,"click",4,"ngFor","ngForOf"],[1,"list-group-item",2,"cursor","pointer",3,"click"]],template:function(t,e){1&t&&(r.Mb(0,"div",0),r.Mb(1,"div",1),r.Kb(2,"app-shopping-edit"),r.Kb(3,"hr"),r.Mb(4,"ul",2),r.fc(5,a,2,2,"a",3),r.Lb(),r.Lb(),r.Lb()),2&t&&(r.zb(5),r.Wb("ngForOf",e.ingredients))},directives:[p,d.h],styles:[""]}),t}(),m=function(){function t(){}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=r.Hb({type:t}),t.\u0275inj=r.Gb({imports:[[b.j,b.r,i.a,o.e.forChild([{path:"",component:g}])]]}),t}()}}]);