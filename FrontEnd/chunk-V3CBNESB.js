import{a as D}from"./chunk-JBUSVL33.js";import{a as E}from"./chunk-5WR2EL64.js";import"./chunk-YP3OYDJU.js";import{a as X}from"./chunk-M6JKQUTX.js";import{a as Q,b as W}from"./chunk-QDHNBSMD.js";import{a as Y}from"./chunk-OFI6PGZL.js";import{b as F}from"./chunk-YHNXG437.js";import{a as y}from"./chunk-VOLXTRGQ.js";import{a as K}from"./chunk-PS6I32XU.js";import"./chunk-JC77WSFI.js";import{g as R}from"./chunk-2XRFSBL3.js";import{a as V,b as I,c as N}from"./chunk-BF24YLJO.js";import"./chunk-CNRP5CR4.js";import{C as q,F as J,J as S,b as P,i as g,l as z,p as L,q as O,u as B,v as H,x as U,y as $}from"./chunk-D3YOWHEC.js";import"./chunk-AIQUJILU.js";import{Q as A,R as k,ga as C,la as G}from"./chunk-V35GW63T.js";import"./chunk-AUCKEBH6.js";import"./chunk-2VASWO2B.js";import{Cb as u,Dc as f,Ea as _,Gc as w,Mb as m,Ob as M,Qa as a,Ub as h,Vb as b,ha as l,ib as s,ma as v,q as T,tb as r,ub as i,vb as d}from"./chunk-YBEOGPR3.js";import{a as x}from"./chunk-NEB6MB4Y.js";var oe={validation:!1},j=(()=>{let n=class n{constructor(){this.fb=l(q),this.dialogRef=l(V),this.fuseService=l(R),this.estadosDatosService=l(y),this._matData=l(I),this.swalService=l(Y),this.destroyedRef=l(_),this.cobrosFijosService=l(D)}ngOnInit(){this.createForm();let t=this._matData;if(t.edit){let e=t.data;this.getCobro(e.id)}}onSave(){if(this.form.valid)if(this._matData.edit){let t=this.form.getRawValue();this.fuseService.open(x({},F)).afterClosed().subscribe(o=>{o==="confirmed"?this.cobrosFijosService.putCobros(t).pipe(E(this.destroyedRef)).subscribe(c=>{this.estadosDatosService.stateGrid.next(!0),this.swalService.ToastAler({icon:"success",title:"Registro actualizado con exito!",timer:4e3}),this.closeDialog()},c=>{this.swalService.ToastAler({icon:"error",title:"Ha ocurrido un error al actualizar el registro!",timer:4e3})}):this.closeDialog()})}else{let t=this.form.getRawValue();this.fuseService.open(x({},F)).afterClosed().subscribe(o=>{o==="confirmed"?this.cobrosFijosService.postCobros(t).pipe(E(this.destroyedRef)).subscribe(c=>{console.log(c),this.estadosDatosService.stateGrid.next(!0),this.swalService.ToastAler({icon:"success",title:"Registro Creado o Actualizado con Exito.",timer:4e3}),this.closeDialog()},c=>{this.swalService.ToastAler({icon:"error",title:"Ha ocurrido un error al crear el registro!",timer:4e3})}):this.closeDialog()})}}getCobro(t){this.cobrosFijosService.getCobro(t).subscribe(e=>{if(e){let o=e.data,c={periodo:o.periodo,valorAval:o.valorAval,valorFirmaElectronica:o.valorFirmaElectronica,valorTarjeta:o.valorTarjeta,id:o.id};this.form.patchValue(c)}})}createForm(){this.form=this.fb.group({id:[null],valorAval:[""],valorFirmaElectronica:[""],valorTarjeta:[""],periodo:[""]})}closeDialog(){this.dialogRef.close()}};n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=v({type:n,selectors:[["app-form-cobro-fijo"]],standalone:!0,features:[h([{provide:k,useClass:X},{provide:A,useValue:"en-GB"},f,Q(oe)]),b],decls:31,vars:8,consts:[[1,"w-full","sm:bg-card","sm:rounded-2xl","sm:mx-0","mx-auto"],[1,""],[1,"mt-8","text-3xl","font-semibold","leading-tight","tracking-tight","text-center"],[1,"mt-8",3,"formGroup"],[1,"flex","flex-col","sm:flex-row","gap-2.5"],["floatLabel","always",1,"w-full"],["matInput","","placeholder","Valor de aval","mask","separator.0","thousandSeparator",".",3,"formControlName"],["matInput","","placeholder","Valor firma electronica","mask","separator.0","thousandSeparator",".",3,"formControlName"],["matInput","","placeholder","Valor de tarjeta","mask","separator.0","thousandSeparator",".",3,"formControlName"],["matInput","","placeholder","Cantidad de d\xEDas","type","number",3,"formControlName"],[1,"flex","flex-wrap","justify-end","gap-2.5"],["mat-flat-button","",1,"sm:w-auto","w-full","sm:mt-6","bg-credigray-100","rounded-lg","transition","duration-200","text-white","font-semibold",3,"click","color"],["mat-flat-button","",1,"sm:w-auto","w-full","sm:mt-6","bg-crediblue-50","rounded-lg","transition","duration-200","text-white","font-semibold",3,"click","color"]],template:function(e,o){e&1&&(r(0,"div",0)(1,"div",1)(2,"div",2),m(3),i(),r(4,"form",3)(5,"div")(6,"div",4)(7,"mat-form-field",5)(8,"mat-label"),m(9,"Valor de aval"),i(),d(10,"input",6),i(),r(11,"mat-form-field",5)(12,"mat-label"),m(13,"Valor firma electronica"),i(),d(14,"input",7),i()(),r(15,"div",4)(16,"mat-form-field",5)(17,"mat-label"),m(18,"Valor de tarjeta"),i(),d(19,"input",8),i(),r(20,"mat-form-field",5)(21,"mat-label"),m(22,"Cantidad de d\xEDas"),i(),d(23,"input",9),i()()(),r(24,"div",10)(25,"button",11),u("click",function(){return o.closeDialog()}),r(26,"span"),m(27," Cancelar "),i()(),r(28,"button",12),u("click",function(){return o.onSave()}),r(29,"span"),m(30," Guardar "),i()()()()()()),e&2&&(a(3),M(" ",o._matData.edit?"Actualizar cobro adicional":"Agregar cobro adicional"," "),a(),s("formGroup",o.form),a(6),s("formControlName","valorAval"),a(4),s("formControlName","valorFirmaElectronica"),a(5),s("formControlName","valorTarjeta"),a(4),s("formControlName","periodo"),a(2),s("color","primary"),a(3),s("color","primary"))},dependencies:[C,g,S,P,W,J,B,z,H,L,O,U,$],styles:[".custom-dialog-container{width:100%}@media (min-width: 1280px){  .custom-dialog-container{width:50%}}"]});let p=n;return p})();var Z=(()=>{let n=class n{constructor(){this.datePipe=l(f),this.currencyPipe=l(w),this.searchTerm="",this._matDialog=l(N),this.estadoDatosService=l(y),this.cobrosFijosService=l(D),this.data=[],this.columns=["Valor aval","Valor firma electronica","Valor tarjeta","Periodo"],this.columnPropertyMap={"Valor aval":"valorAval","Valor firma electronica":"valorFirmaElectronica","Valor tarjeta":"valorTarjeta",Periodo:"periodo"},this.buttons=[{label:"Edit",icon:"edit",action:t=>{console.log("Editing",t),this.selectedData=t,this.onEdit()}}]}onNew(){this._matDialog.open(j,{autoFocus:!1,data:{edit:!1},maxHeight:"90vh",disableClose:!0,panelClass:"custom-dialog-container"})}onEdit(){this._matDialog.open(j,{autoFocus:!1,data:{edit:!0,data:this.selectedData},maxHeight:"90vh",disableClose:!0,panelClass:"custom-dialog-container"})}listenGrid(){this.estadoDatosService.stateGrid.asObservable().subscribe(e=>{e&&this.getCobros()})}onSearch(t){let e=t.target;this.searchTerm=e.value.trim().toLowerCase()}getCobros(){this.subcription$=this.cobrosFijosService.getCobros().pipe(T(t=>(t.data.forEach(e=>{e.valorAval=this.currencyPipe.transform(e.valorAval,"USD","symbol","1.2-2"),e.valorFirmaElectronica=this.currencyPipe.transform(e.valorFirmaElectronica,"USD","symbol","1.2-2"),e.valorTarjeta=this.currencyPipe.transform(e.valorTarjeta,"USD","symbol","1.2-2")}),t))).subscribe(t=>{t.data&&(this.data=t.data)})}ngOnDestroy(){this.subcription$.unsubscribe()}ngOnInit(){this.listenGrid(),this.getCobros()}};n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=v({type:n,selectors:[["app-grid-cobro-fijo"]],standalone:!0,features:[h([f,w]),b],decls:15,vars:12,consts:[[1,"bg-card","flex","min-w-0","flex-auto","flex-col","dark:bg-transparent","sm:absolute","sm:inset-0","sm:overflow-hidden"],[1,"relative","flex","flex-0","flex-col","border-b","px-6","py-8","sm:flex-row","sm:items-center","sm:justify-between","md:px-8"],[1,"text-3xl","font-semibold","tracking-tight"],[1,"mt-6","flex","w-full","shrink-0","flex-col","items-center","sm:ml-4","sm:mt-0","sm:flex-row","sm:space-x-2","sm:w-auto"],[1,"fuse-mat-dense","rounded-lg","w-full","sm:w-auto","min-w-64",3,"subscriptSizing"],["matPrefix","",1,"icon-size-5",3,"svgIcon"],["matInput","",3,"input","autocomplete","placeholder"],["mat-flat-button","",1,"mt-2","w-full","bg-crediblue-50","rounded-lg","transition","duration-200","text-white","font-semibold","sm:ml-4","sm:mt-0","sm:w-auto",3,"click","color"],[3,"svgIcon"],[1,"ml-2","mr-1"],[1,"flex","flex-auto","overflow-hidden"],[1,"flex","flex-auto","flex-col","overflow-hidden","sm:mb-18","sm:overflow-y-auto"],[3,"columns","displayedColumns","columnPropertyMap","data","buttons","searchTerm"]],template:function(e,o){e&1&&(r(0,"div",0)(1,"div",1)(2,"div",2),m(3,"Parametros de Costos Adicionales"),i(),r(4,"div",3)(5,"mat-form-field",4),d(6,"mat-icon",5),r(7,"input",6),u("input",function(ee){return o.onSearch(ee)}),i()(),r(8,"button",7),u("click",function(){return o.onNew()}),d(9,"mat-icon",8),r(10,"span",9),m(11,"Agregar"),i()()()(),r(12,"div",10)(13,"div",11),d(14,"app-custom-table",12),i()()()),e&2&&(a(5),s("subscriptSizing","dynamic"),a(),s("svgIcon","heroicons_solid:magnifying-glass"),a(),s("autocomplete","off")("placeholder","Buscar"),a(),s("color","primary"),a(),s("svgIcon","heroicons_outline:plus"),a(5),s("columns",o.columns)("displayedColumns",o.columns)("columnPropertyMap",o.columnPropertyMap)("data",o.data)("buttons",o.buttons)("searchTerm",o.searchTerm))},dependencies:[K,C,g,G,S]});let p=n;return p})();var Oe=[{path:"",component:Z}];export{Oe as default};
