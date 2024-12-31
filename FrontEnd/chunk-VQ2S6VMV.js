import{a as D}from"./chunk-WZDFCBFR.js";import{a as Ie}from"./chunk-2U76ZNDX.js";import{a as ke}from"./chunk-FAEUQIFQ.js";import{a as Me,b as N}from"./chunk-P4PAYY2C.js";import{a as Ee}from"./chunk-CFJSYZ3M.js";import{a as je,b as Fe,c as De}from"./chunk-JDA76RF6.js";import{a as K}from"./chunk-N3QIRYNR.js";import{a as J}from"./chunk-XVIRI3LF.js";import{a as H}from"./chunk-K7UKSVEC.js";import{a as F}from"./chunk-L5Y3WK7D.js";import{a as _e}from"./chunk-BW2UNIQM.js";import{a as Te}from"./chunk-QETDVRLC.js";import{g as $,j as Pe}from"./chunk-YDAJC2H3.js";import{c as ue}from"./chunk-C7ANG7GI.js";import"./chunk-566EJEQN.js";import{C as Ce,E as z,F as Y,J as j,b as B,e as ge,i as w,l as he,n as Z,p as ve,q,r as ye,u as U,x as xe,y as Se}from"./chunk-NFNLINIV.js";import{b as ce,d as T}from"./chunk-V24ZDQ6I.js";import"./chunk-32OSWJVT.js";import{a as we}from"./chunk-JLSTUWCW.js";import"./chunk-HR6HUVTD.js";import{Q as O,R as X,ba as fe,ga as _,la as be}from"./chunk-IP22JCCO.js";import"./chunk-QS2H5WYQ.js";import"./chunk-VFBDOJ4Z.js";import"./chunk-J6S3X3IJ.js";import{Ac as de,Cb as u,Dc as pe,Eb as x,Ec as h,Gc as P,Hc as g,Lb as ne,Mb as s,Nb as R,Ob as k,Qa as o,Vb as S,Wb as C,Zb as le,_ as V,cc as I,dc as A,gb as E,ha as m,ib as d,ma as y,pb as M,q as ae,tb as a,ub as i,vb as f,wa as G,wb as oe,xa as L,xb as ie,yc as se,zb as re,zc as me}from"./chunk-VNCXNJPE.js";import{a as W,b as te}from"./chunk-NEB6MB4Y.js";var Ne=(()=>{let l=class l{constructor(){this.datePipe=m(h),this.searchTerm="",this.currencyPipe=m(g),this.pagoTrabajadorService=m(D),this._matDialog=m(ue),this.estadoDatosService=m(H),this.router=m(T),this.data=[],this.columns=["Fecha de liquidaci\xF3n","Empresa","Valor"],this.columnPropertyMap={"Fecha de liquidaci\xF3n":"fechaCreacion",Empresa:"nombreSubempresa",Valor:"total"},this.buttons=[{label:"Eye",icon:"visibility",action:n=>{console.log("Editing",n),this.router.navigate(["/pages/gestion-cobros/trabajadores/pago/",n.id])}}]}ngOnDestroy(){}ngOnInit(){this.getPagoTrabajadores(),this.listenGrid()}onNew(){this.router.navigate(["/pages/gestion-cobros/trabajadores/pago"])}getPagoTrabajadores(){this.pagoTrabajadorService.getPagosTrabajadores().pipe(V(n=>(n.data.forEach(t=>{t.fechaCreacion=this.datePipe.transform(t.fechaCreacion,"dd/MM/yyyy"),t.total=this.currencyPipe.transform(t.total,"USD","symbol","1.2-2")}),n))).subscribe(n=>{this.data=n.data})}onSearch(n){let t=n.target;this.searchTerm=t.value.trim().toLowerCase()}listenGrid(){this.estadoDatosService.stateGrid.asObservable().subscribe(t=>{t&&this.getPagoTrabajadores()})}};l.\u0275fac=function(t){return new(t||l)},l.\u0275cmp=y({type:l,selectors:[["app-grid-pago-trabajadores"]],standalone:!0,features:[S([h,g]),C],decls:15,vars:12,consts:[[1,"bg-card","flex","min-w-0","flex-auto","flex-col","dark:bg-transparent","sm:absolute","sm:inset-0","sm:overflow-hidden"],[1,"relative","flex","flex-0","flex-col","border-b","px-6","py-8","sm:flex-row","sm:items-center","sm:justify-between","md:px-8"],[1,"text-3xl","font-semibold","tracking-tight"],[1,"mt-6","flex","w-full","shrink-0","flex-col","items-center","sm:ml-4","sm:mt-0","sm:flex-row","sm:space-x-2","sm:w-auto"],[1,"fuse-mat-dense","rounded-lg","w-full","sm:w-auto","min-w-64",3,"subscriptSizing"],["matPrefix","",1,"icon-size-5",3,"svgIcon"],["matInput","",3,"input","autocomplete","placeholder"],["mat-flat-button","",1,"mt-2","w-full","bg-crediblue-50","rounded-lg","transition","duration-200","text-white","font-semibold","sm:ml-4","sm:mt-0","sm:w-auto",3,"click","color"],[3,"svgIcon"],[1,"ml-2","mr-1"],[1,"flex","flex-auto","overflow-hidden"],[1,"flex","flex-auto","flex-col","overflow-hidden","sm:mb-18","sm:overflow-y-auto"],[3,"columns","displayedColumns","columnPropertyMap","data","buttons","searchTerm"]],template:function(t,e){t&1&&(a(0,"div",0)(1,"div",1)(2,"div",2),s(3,"Registro de Cobro Masivo"),i(),a(4,"div",3)(5,"mat-form-field",4),f(6,"mat-icon",5),a(7,"input",6),u("input",function(b){return e.onSearch(b)}),i()(),a(8,"button",7),u("click",function(){return e.onNew()}),f(9,"mat-icon",8),a(10,"span",9),s(11,"Registrar"),i()()()(),a(12,"div",10)(13,"div",11),f(14,"app-custom-table",12),i()()()),t&2&&(o(5),d("subscriptSizing","dynamic"),o(),d("svgIcon","heroicons_solid:magnifying-glass"),o(),d("autocomplete","off")("placeholder","Buscar"),o(),d("color","primary"),o(),d("svgIcon","heroicons_outline:plus"),o(5),d("columns",e.columns)("displayedColumns",e.columns)("columnPropertyMap",e.columnPropertyMap)("data",e.data)("buttons",e.buttons)("searchTerm",e.searchTerm))},dependencies:[F,_,w,be,j]});let r=l;return r})();var Re=(r,l)=>({"bg-credigray-100":r,"bg-green-600":l});function Oe(r,l){if(r&1&&(a(0,"mat-option",23),s(1),i()),r&2){let p=l.$implicit;d("value",p.id),o(),R(p.razonSocial)}}function Xe(r,l){if(r&1&&(oe(0),E(1,Oe,2,2,"mat-option",22),ie()),r&2){let p=l.ngIf;o(),d("ngForOf",p.data)}}function Be(r,l){if(r&1&&(a(0,"div",18)(1,"div",24),f(2,"app-custom-table",25),i()()),r&2){let p=x();o(2),d("columns",p.columns)("displayedColumns",p.columns)("columnPropertyMap",p.columnPropertyMap)("data",p.data)}}function $e(r,l){if(r&1&&(a(0,"div",19)(1,"div",26)(2,"fuse-alert",27)(3,"span",28),s(4,"Informaci\xF3n"),i(),s(5),i()()()),r&2){let p=x();o(2),d("type","info")("appearance","outline"),o(3),k(" ",p.message," ")}}function qe(r,l){if(r&1&&(a(0,"span",21),s(1,"Subtotal: "),a(2,"span",29),s(3),I(4,"currency"),i()()),r&2){let p=x();o(3),R(A(4,1,p.subtotal))}}function Ue(r,l){if(r&1&&(a(0,"span",21),s(1,"Comisiones: "),a(2,"span",29),s(3),I(4,"currency"),i()()),r&2){let p=x();o(3),R(A(4,1,p.totalComision))}}function ze(r,l){if(r&1&&(a(0,"span",21),s(1,"Total a pagar: "),a(2,"span",29),s(3),I(4,"currency"),i()()),r&2){let p=x();o(3),k(" ",A(4,1,p.totalPagar)," ")}}var Ye={validation:!1},Ve=(()=>{let l=class l{constructor(){this.fb=m(Ce),this.empresaClienteService=m(Ee),this.pagoTrabajadorService=m(D),this.cobroTrabajadorService=m(Ie),this.datePipe=m(h),this.swalService=m(Te),this.estadosDatosService=m(H),this.fuseService=m($),this.currencyPipe=m(g),this.decimalPipe=m(P),this.router=m(T),this.empresa$=this.empresaClienteService.getEmpresasClientes(),this.tipoPago$=this.pagoTrabajadorService.tipoPagoTrabajadores().subscribe(n=>{this.idTipoPagoTrabajador=n.data[0].id}),this.data=[],this.fechaActual=new Date,this.columns=["Identificaci\xF3n","Nombres Apellidos","Valor pendiente"],this.columnPropertyMap={Identificaci\u00F3n:"documentoTrabajador","Nombres Apellidos":"nombreCompleto","Valor pendiente":"valorPendiente"}}createForm(){this.form=this.fb.group({fechaFinal:["",Z.required],idSubEmpresa:["",Z.required],idTipoPagoTrabajador:[""]})}ngOnInit(){this.createForm()}closeDialog(){this.router.navigate(["/pages/gestion-cobros/trabajadores"])}onGet(){if(this.form.valid){let{fechaFinal:n,idSubEmpresa:t}=this.form.getRawValue();console.log(n);let c={fechaFinallData:this.datePipe.transform(n,"yyyy-MM-dd"),idSubEmpresa:t};this.getAllPagoTrabajador(c)}}onSave(){let{fechaFinal:n,idSubEmpresa:t,idTipoPagoTrabajador:e}=this.form.getRawValue(),b={fechaFinal:this.datePipe.transform(n,"yyyy-MM-dd"),idSubEmpresa:t},v=[];v=this.data.map(Q=>({idCobroTrabajador:Q.id}));let ee=te(W({},b),{idTipoPagoTrabajador:this.idTipoPagoTrabajador,detallePagoTrabajador:v});console.log(ee),this.fuseService.open(W({},Pe)).afterClosed().subscribe(Q=>{Q==="confirmed"&&this.postSave(ee)})}getAllPagoTrabajador(n){this.cobroTrabajadorService.getCobroTrabajadores(n).pipe(ae(t=>(this.subtotal=0,this.totalComision=0,this.totalPagar=0,t&&Array.isArray(t.data)?t.data.forEach(e=>{e.montoCuota=this.currencyPipe.transform(e.montoCuota,"USD","symbol","1.2-2"),e.pagar=this.currencyPipe.transform(e.pagar,"USD","symbol","1.2-2"),e.valorPendiente=this.currencyPipe.transform(e.valorPendiente,"USD","symbol","1.2-2"),e.fechaCobro=this.datePipe.transform(e.fechaCobro,"dd/MM/yyyy"),this.totalPagar+=parseFloat(e.montoCuota.replace(/[^0-9.-]+/g,""))}):this.data=[],t))).subscribe(t=>{t&&Array.isArray(t.data)?this.data=t.data:(this.data=[],this.message=t.msg)})}postSave(n){this.pagoTrabajadorService.postPagosTrabajadores(n).subscribe(t=>{this.swalService.ToastAler({icon:"success",title:"Registro Creado o Actualizado con Exito.",timer:4e3}),this.estadosDatosService.stateGrid.next(!0),this.closeDialog()},t=>{this.swalService.ToastAler({icon:"error",title:"Ha ocurrido un error al crear el registro!",timer:4e3})})}};l.\u0275fac=function(t){return new(t||l)},l.\u0275cmp=y({type:l,selectors:[["app-form-pago-trabajadores"]],standalone:!0,features:[S([{provide:X,useClass:K},{provide:O,useValue:"en-GB"},h,g,P,J(Ye)]),C],decls:39,vars:19,consts:[["finalPicker",""],[1,"bg-card","flex","min-w-0","flex-auto","flex-col","dark:bg-transparent","sm:absolute","sm:inset-0","sm:overflow-hidden"],[1,"mt-8","text-3xl","font-semibold","leading-tight","tracking-tight","pl-8"],[1,"relative","flex","flex-0","flex-col","border-b","px-6","sm:flex-row","md:px-8"],[1,"mt-6","w-full","shrink-0","sm:mt-0","sm:space-x-2","lg:w-full"],[1,"mt-8",3,"formGroup"],[1,"flex","flex-col","sm:flex-row","gap-2.5"],["floatLabel","always",1,"w-full","min-w-90"],["matInput","","placeholder","dd/mm/yyyy",3,"matDatepicker","formControlName"],["matIconSuffix","",3,"for"],["placeholder","Empresa",3,"formControlName"],[4,"ngIf"],[1,"relative","border","border-gray-300","rounded-lg"],[1,"absolute","-top-3","left-4","bg-white","px-2","text-gray-500","font-semibold"],[1,"flex","flex-wrap","justify-end","gap-2.5","sm:mb-4","pr-2"],["mat-flat-button","",1,"sm:w-auto","w-full","sm:mt-6","bg-credigray-100","rounded-lg","transition","duration-200","text-white","font-semibold",3,"click","color"],["mat-flat-button","",1,"sm:w-auto","w-full","sm:mt-6","bg-crediblue-50","rounded-lg","transition","duration-200","text-white","font-semibold",3,"click","color"],["mat-flat-button","",1,"lg:w-auto","w-full","sm:mt-6","transition","duration-200","text-white","font-semibold","rounded-lg","md:w-auto",3,"click","ngClass","disabled"],[1,"flex","flex-auto","overflow-hidden"],[1,"inset-0","min-w-0","overflow-auto","print:overflow-visible"],[1,"flex","flex-col","gap-4","justify-end","sm:flex-row"],[1,"sm:pr-4","text-gray-600","font-bold","text-right"],[3,"value",4,"ngFor","ngForOf"],[3,"value"],[1,"flex","flex-auto","flex-col","overflow-hidden","sm:p-4","sm:mb-10","sm:overflow-y-auto"],[3,"columns","displayedColumns","columnPropertyMap","data"],[1,"inline-block","p-4","sm:p-8","print:p-0","w-full"],[3,"type","appearance"],["fuseAlertTitle",""],[1,"text-gray-800"]],template:function(t,e){if(t&1){let c=re();a(0,"div",1)(1,"div",2),s(2," Cobro Masivo "),i(),a(3,"div",3)(4,"div",4)(5,"form",5)(6,"div",6)(7,"mat-form-field",7)(8,"mat-label"),s(9,"Fecha de corte"),i(),f(10,"input",8)(11,"mat-datepicker-toggle",9)(12,"mat-datepicker",null,0),i(),a(14,"mat-form-field",7)(15,"mat-label"),s(16,"Empresa"),i(),a(17,"mat-select",10),E(18,Xe,2,1,"ng-container",11),I(19,"async"),i()()(),a(20,"div",12)(21,"div",13),s(22," Opciones "),i(),a(23,"div",14)(24,"button",15),u("click",function(){return G(c),L(e.closeDialog())}),a(25,"span"),s(26," Atras "),i()(),a(27,"button",16),u("click",function(){return G(c),L(e.onGet())}),a(28,"span"),s(29," Consultar "),i()(),a(30,"button",17),u("click",function(){return G(c),L(e.onSave())}),a(31,"span"),s(32," Regitrar "),i()()()()()()(),E(33,Be,3,4,"div",18)(34,$e,6,3,"div",19),a(35,"div",20),E(36,qe,5,3,"span",21)(37,Ue,5,3,"span",21)(38,ze,5,3,"span",21),i()()}if(t&2){let c=ne(13);o(5),d("formGroup",e.form),o(5),d("matDatepicker",c)("formControlName","fechaFinal"),o(),d("for",c),o(6),d("formControlName","idSubEmpresa"),o(),d("ngIf",A(19,14,e.empresa$)),o(6),d("color","primary"),o(3),d("color","primary"),o(3),d("ngClass",le(16,Re,e.data.length==0,e.data.length>0))("disabled",e.data.length==0),o(3),M(e.data.length?33:e.message?34:-1),o(3),M(e.subtotal?36:-1),o(),M(e.totalComision?37:-1),o(),M(e.totalPagar?38:-1)}},dependencies:[pe,g,F,z,U,he,ve,q,we,_,je,Fe,De,w,j,B,fe,_e,ge,me,de,Y,xe,Se,se]});let r=l;return r})();var He={validation:!1},Ge=(()=>{let l=class l{constructor(){this.fuseService=m($),this.currencyPipe=m(g),this.decimalPipe=m(P),this.router=m(T),this.activatedRoute=m(ce),this.datePipe=m(h),this.pagoTrabajadorService=m(D),this.data=[],this.form={fechaCreacion:"",fechaFinal:"",fechaIncial:"",nombreSubempresa:"",total:""},this.columns=["Identificaci\xF3n","Nombres Apellidos","Valor pagado"],this.columnPropertyMap={Identificaci\u00F3n:"documentoTrabajador","Nombres Apellidos":"nombreCompleto","Valor pagado":"valorPago"}}ngOnDestroy(){this.subscription$.unsubscribe()}ngOnInit(){this.id=this.activatedRoute.snapshot.paramMap.get("id"),this.getTrabajador(this.id)}getTrabajador(n){this.subscription$=this.pagoTrabajadorService.getPagosTrabajador(n).pipe(V(t=>(t.data.detallePagoTrabajador?.forEach(e=>{e.fechaCobro=this.datePipe.transform(e.fechaCobro,"dd/MM/yyyy"),e.valorPago=this.currencyPipe.transform(e.valorPago,"USD","symbol","1.2-2")}),t))).subscribe(t=>{console.log("Si entra"),this.data=t.data.detallePagoTrabajador,this.form.fechaCreacion=this.datePipe.transform(t.data.fechaCreacion,"dd/MM/YYYY"),this.form.fechaFinal=t.data.fechaFinal,this.form.nombreSubempresa=t.data.nombreSubempresa,this.form.total=this.currencyPipe.transform(t.data.total,"USD","symbol","1.2-2"),this.exportData=t.data})}exportToExcel(){let n=[["Detalle pago trabajadores"],["Empresa:",this.exportData.nombreSubempresa],["Fecha de liquidaci\xF3n:",this.exportData.fechaFinal],["Total:",this.exportData.total]],t=this.exportData.detallePagoTrabajador.map(v=>({Identificaci\u00F3n:v.documentoTrabajador,"Nombre completo":v.nombreCompleto,"Valor pagado":ke(v.valorPago)})),e=N.aoa_to_sheet(n),c=n.length+2;N.sheet_add_json(e,t,{origin:`A${c}`,skipHeader:!1}),e["!merges"]=[{s:{r:0,c:0},e:{r:0,c:2}}];let b=N.book_new();N.book_append_sheet(b,e,`DetallePago${this.exportData.fechaFinal}`),Me(b,`DetallePago${this.exportData.fechaFinal}.xlsx`)}closeDialog(){this.router.navigate(["/pages/gestion-cobros/trabajadores"])}};l.\u0275fac=function(t){return new(t||l)},l.\u0275cmp=y({type:l,selectors:[["app-form-view-pago-trabajadores"]],standalone:!0,features:[S([{provide:X,useClass:K},{provide:O,useValue:"en-GB"},h,g,P,J(He)]),C],decls:32,vars:9,consts:[[1,"bg-card","flex","min-w-0","flex-auto","flex-col","dark:bg-transparent","sm:absolute","sm:inset-0","sm:overflow-hidden"],[1,"sm:ml-8","mt-8","text-3xl","font-semibold","leading-tight","tracking-tight"],[1,"relative","flex","flex-0","flex-col","border-b","px-6","sm:flex-row","md:px-8"],[1,"mt-6","w-full","shrink-0","sm:mt-0","sm:space-x-2","lg:w-full"],[1,"mt-8"],[1,"flex","flex-col","sm:flex-row","gap-2.5"],["floatLabel","always",1,"w-full","min-w-90"],["matInput","","placeholder","Empresa","readonly","",3,"value"],[1,"relative","p-2","border","border-gray-300","rounded-lg"],[1,"absolute","-top-3","left-4","bg-white","px-2","text-gray-500","font-semibold"],[1,"flex","flex-wrap","justify-end","gap-2.5","sm:mb-4"],["mat-flat-button","",1,"sm:w-auto","w-full","sm:mt-6","bg-credigray-100","rounded-lg","transition","duration-200","text-white","font-semibold",3,"click","color"],["mat-flat-button","",1,"lg:w-auto","w-full","sm:mt-6","bg-green-600","transition","duration-200","text-white","font-semibold","rounded-lg","md:w-auto",3,"click"],[1,"flex","flex-auto","overflow-hidden"],[1,"flex","flex-auto","flex-col","overflow-hidden","sm:p-4","sm:mb-10","sm:overflow-y-auto"],[3,"columns","displayedColumns","columnPropertyMap","data"]],template:function(t,e){t&1&&(a(0,"div",0)(1,"div",1),s(2),i(),a(3,"div",2)(4,"div",3)(5,"form",4)(6,"div",5)(7,"mat-form-field",6)(8,"mat-label"),s(9,"Empresa"),i(),f(10,"input",7),i(),a(11,"mat-form-field",6)(12,"mat-label"),s(13,"Fecha de liquidaci\xF3n"),i(),f(14,"input",7),i(),a(15,"mat-form-field",6)(16,"mat-label"),s(17,"Total"),i(),f(18,"input",7),i()(),a(19,"div",8)(20,"div",9),s(21," Opciones "),i(),a(22,"div",10)(23,"button",11),u("click",function(){return e.closeDialog()}),a(24,"span"),s(25," Atras "),i()(),a(26,"button",12),u("click",function(){return e.exportToExcel()}),a(27,"span"),s(28," Descargar "),i()()()()()()(),a(29,"div",13)(30,"div",14),f(31,"app-custom-table",15),i()()()),t&2&&(o(2),k(" ","Detalle pago trabajadores"," "),o(8),d("value",e.form.nombreSubempresa),o(4),d("value",e.form.fechaCreacion),o(4),d("value",e.form.total),o(5),d("color","primary"),o(8),d("columns",e.columns)("displayedColumns",e.columns)("columnPropertyMap",e.columnPropertyMap)("data",e.data))},dependencies:[F,z,U,q,ye,_,w,j,B,Y]});let r=l;return r})();var aa=[{path:"",component:Ne},{path:"pago",component:Ve},{path:"pago/:id",component:Ge}];export{aa as default};