import{a as w}from"./chunk-PR4SMMMA.js";import{a as $}from"./chunk-QETDVRLC.js";import{a as L}from"./chunk-QKXBZ27Z.js";import{b as y}from"./chunk-YHNXG437.js";import{a as S}from"./chunk-K7UKSVEC.js";import{a as T}from"./chunk-6IEWE3OU.js";import{a as H}from"./chunk-5LJ3IWLD.js";import"./chunk-BW2UNIQM.js";import{g as k}from"./chunk-AYHPHLPH.js";import{a as A,b as F,c as I}from"./chunk-C7ANG7GI.js";import"./chunk-566EJEQN.js";import{C as P,F as B,J as D,b as M,i as v,l as N,p as R,q as z,u as O,x as V,y as j}from"./chunk-NFNLINIV.js";import"./chunk-32OSWJVT.js";import{ga as b,la as G}from"./chunk-IP22JCCO.js";import"./chunk-VFBDOJ4Z.js";import"./chunk-J6S3X3IJ.js";import{Cb as p,Mb as c,Ob as E,Qa as r,Ra as h,Wb as g,ha as l,ib as s,ma as f,q as _,tb as i,ub as n,vb as u}from"./chunk-VNCXNJPE.js";import{a as x}from"./chunk-NEB6MB4Y.js";var C=(()=>{let a=class a{constructor(){this.fb=l(P),this.dialogRef=l(A),this.fuseService=l(k),this.toasService=l(L),this.estadosDatosService=l(S),this.tiposDocumentoService=l(w),this._matData=l(F),this.swalService=l($)}ngOnInit(){this.createForm();let t=this._matData;if(t.edit){let e=t.data;this.form.patchValue(e)}}onSave(){if(this.form.valid)if(this._matData.edit){let t=this.form.getRawValue();this.fuseService.open(x({},y)).afterClosed().subscribe(o=>{o==="confirmed"?this.tiposDocumentoService.putDocumentos(t).subscribe(m=>{this.estadosDatosService.stateGrid.next(!0),this.swalService.ToastAler({icon:"success",title:"Registro actualizado con exito!",timer:4e3}),this.closeDialog()},m=>{this.swalService.ToastAler({icon:"error",title:"Ha ocurrido un error al actualizar el registro!",timer:4e3})}):this.closeDialog()})}else{let t=this.form.getRawValue();this.fuseService.open(x({},y)).afterClosed().subscribe(o=>{o==="confirmed"?this.tiposDocumentoService.postDocumentos(t).subscribe(m=>{this.estadosDatosService.stateGrid.next(!0),this.swalService.ToastAler({icon:"success",title:"Registro Creado o Actualizado con Exito.",timer:4e3}),this.closeDialog()},m=>{this.swalService.ToastAler({icon:"error",title:"Ha ocurrido un error al crear el registro!",timer:4e3})}):this.closeDialog()})}}createForm(){this.form=this.fb.group({id:[null],codigo:[""],nombre:[""]})}closeDialog(){this.dialogRef.close()}};a.\u0275fac=function(e){return new(e||a)},a.\u0275cmp=f({type:a,selectors:[["app-form-tipos-documentos"]],standalone:!0,features:[g],decls:20,vars:6,consts:[[1,"w-full","sm:bg-card","sm:rounded-2xl","sm:mx-0","mx-auto"],[1,""],[1,"mt-8","text-3xl","font-semibold","leading-tight","tracking-tight","text-center"],[1,"mt-8",3,"formGroup"],["floatLabel","always",1,"w-full"],["matInput","","placeholder","Abreviaatura",3,"formControlName"],["matInput","","placeholder","Tipo de documento",3,"formControlName"],[1,"flex","flex-wrap","justify-end","gap-2.5"],["mat-raised-button","",1,"sm:w-auto","w-full","sm:mt-6","bg-credigray-100","rounded-lg","transition","duration-200","text-white","font-semibold",3,"click","color"],["mat-raised-button","",1,"sm:w-auto","w-full","sm:mt-6","bg-crediblue-50","rounded-lg","transition","duration-200","text-white","font-semibold",3,"click","color"]],template:function(e,o){e&1&&(i(0,"div",0)(1,"div",1)(2,"div",2),c(3),n(),i(4,"form",3)(5,"mat-form-field",4)(6,"mat-label"),c(7,"Abreviaatura"),n(),u(8,"input",5),n(),i(9,"mat-form-field",4)(10,"mat-label"),c(11,"Tipo de documento"),n(),u(12,"input",6),n(),i(13,"div",7)(14,"button",8),p("click",function(){return o.closeDialog()}),i(15,"span"),c(16," Cancelar "),n()(),i(17,"button",9),p("click",function(){return o.onSave()}),i(18,"span"),c(19," Guardar "),n()()()()()()),e&2&&(r(3),E(" ",o._matData.edit?"Actualizar":"Agregar"," "),r(),s("formGroup",o.form),r(4),s("formControlName","codigo"),r(4),s("formControlName","nombre"),r(2),s("color","primary"),r(3),s("color","primary"))},dependencies:[B,O,N,R,z,V,j,v,D,M,b],styles:[".custom-dialog-container{width:100%}@media (min-width: 600px){  .custom-dialog-container{width:50%}}@media (min-width: 1280px){  .custom-dialog-container{width:25%}}"]});let d=a;return d})();var q=(()=>{let a=class a{constructor(t,e,o){this._matDialog=t,this.estadoDatosService=e,this.tiposDocumentosServices=o,this.searchTerm="",this.data=[],this.columns=["Estado","Abreviatura","Tipo de documento"],this.columnPropertyMap={Estado:"estado",Abreviatura:"codigo","Tipo de documento":"nombre"},this.buttons=[{label:"Edit",icon:"edit",action:m=>{console.log("Editing",m),this.selectedData=m,this.onEdit()}}]}onNew(){this._matDialog.open(C,{autoFocus:!1,data:{edit:!1},maxHeight:"90vh",disableClose:!0,panelClass:"custom-dialog-container"})}onEdit(){this._matDialog.open(C,{autoFocus:!1,data:{edit:!0,data:this.selectedData},maxHeight:"90vh",disableClose:!0,panelClass:"custom-dialog-container"})}getDocumentos(){this.subcription$=this.tiposDocumentosServices.getTiposDocumentos().pipe(_(t=>(t.data.forEach(e=>{e.estado?e.estado=T.ACTIVO:e.estado=T.INACTIVO}),t))).subscribe(t=>{this.data=t.data})}listenGrid(){this.estadoDatosService.stateGrid.asObservable().subscribe(e=>{e&&this.getDocumentos()})}onSearch(t){let e=t.target;this.searchTerm=e.value.trim().toLowerCase()}ngOnDestroy(){this.subcription$.unsubscribe()}ngOnInit(){this.getDocumentos(),this.listenGrid()}};a.\u0275fac=function(e){return new(e||a)(h(I),h(S),h(w))},a.\u0275cmp=f({type:a,selectors:[["app-grid-tipos-documentos"]],standalone:!0,features:[g],decls:15,vars:12,consts:[[1,"bg-card","flex","min-w-0","flex-auto","flex-col","dark:bg-transparent","sm:absolute","sm:inset-0","sm:overflow-hidden"],[1,"relative","flex","flex-0","flex-col","border-b","px-6","py-8","sm:flex-row","sm:items-center","sm:justify-between","md:px-8"],[1,"text-3xl","font-semibold","tracking-tight"],[1,"mt-6","flex","w-full","shrink-0","flex-col","items-center","sm:ml-4","sm:mt-0","sm:flex-row","sm:space-x-2","sm:w-auto"],[1,"fuse-mat-dense","rounded-lg","w-full","sm:w-auto","min-w-64",3,"subscriptSizing"],["matPrefix","",1,"icon-size-5",3,"svgIcon"],["matInput","",3,"input","autocomplete","placeholder"],["mat-flat-button","",1,"mt-2","w-full","bg-crediblue-50","rounded-lg","transition","duration-200","text-white","font-semibold","sm:ml-4","sm:mt-0","sm:w-auto",3,"click","color"],[3,"svgIcon"],[1,"ml-2","mr-1"],[1,"flex","flex-auto","overflow-hidden"],[1,"flex","flex-auto","flex-col","overflow-hidden","sm:mb-18","sm:overflow-y-auto"],[3,"columns","displayedColumns","columnPropertyMap","data","buttons","searchTerm"]],template:function(e,o){e&1&&(i(0,"div",0)(1,"div",1)(2,"div",2),c(3,"Tipos de Documentos"),n(),i(4,"div",3)(5,"mat-form-field",4),u(6,"mat-icon",5),i(7,"input",6),p("input",function(J){return o.onSearch(J)}),n()(),i(8,"button",7),p("click",function(){return o.onNew()}),u(9,"mat-icon",8),i(10,"span",9),c(11,"Agregar"),n()()()(),i(12,"div",10)(13,"div",11),u(14,"app-custom-table",12),n()()()),e&2&&(r(5),s("subscriptSizing","dynamic"),r(),s("svgIcon","heroicons_solid:magnifying-glass"),r(),s("autocomplete","off")("placeholder","Buscar"),r(),s("color","primary"),r(),s("svgIcon","heroicons_outline:plus"),r(5),s("columns",o.columns)("displayedColumns",o.columns)("columnPropertyMap",o.columnPropertyMap)("data",o.data)("buttons",o.buttons)("searchTerm",o.searchTerm))},dependencies:[H,b,v,G,D]});let d=a;return d})();var ye=[{path:"",component:q}];export{ye as default};
