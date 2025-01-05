import{a as Ae}from"./chunk-UHN5DKPC.js";import{a as U}from"./chunk-REKVC6HP.js";import{a as Z,b as T}from"./chunk-E3QK27E6.js";import{a as ie}from"./chunk-FAEUQIFQ.js";import{a as ct}from"./chunk-74VNGCAR.js";import{a as pt}from"./chunk-ZMWWFY7O.js";import{a as _e,b as we,c as rt,d as nt}from"./chunk-X5YKWCIG.js";import{a as Q}from"./chunk-LLMKJCSC.js";import{a as dt,b as Fe}from"./chunk-P4PAYY2C.js";import{a as lt,b as st,c as mt}from"./chunk-DVCUHTPM.js";import{b as ae}from"./chunk-LOIXTBAB.js";import{a as M}from"./chunk-7IDRY5LZ.js";import{a as at}from"./chunk-JJGIB4UC.js";import{a as X}from"./chunk-N3QIRYNR.js";import{a as z,b as it}from"./chunk-XVIRI3LF.js";import{a as Te}from"./chunk-K7UKSVEC.js";import{a as oe}from"./chunk-6IEWE3OU.js";import{a as ot}from"./chunk-L5Y3WK7D.js";import{a as tt}from"./chunk-BW2UNIQM.js";import{a as Ee}from"./chunk-QETDVRLC.js";import{g as $,h as Ye,i as te}from"./chunk-YDAJC2H3.js";import{c as ue}from"./chunk-C7ANG7GI.js";import"./chunk-566EJEQN.js";import{C as ye,E as Ke,F as De,J as H,b as fe,c as Ze,i as q,l as he,n as h,p as ve,q as ge,u as Ce,x as xe,y as Se}from"./chunk-NFNLINIV.js";import{b as G,d as B,e as Ue}from"./chunk-V24ZDQ6I.js";import{h as O}from"./chunk-32OSWJVT.js";import{a as et}from"./chunk-JLSTUWCW.js";import"./chunk-HR6HUVTD.js";import{Q as R,R as k,ba as Qe,ga as L,ha as We,la as be}from"./chunk-IP22JCCO.js";import"./chunk-QS2H5WYQ.js";import"./chunk-VFBDOJ4Z.js";import{b as Je}from"./chunk-J6S3X3IJ.js";import{Ac as V,Cb as D,Eb as C,Ec as E,Hc as x,Ib as se,Jb as me,Kb as de,Lb as Y,Mb as a,Nb as b,Nc as Xe,Ob as ce,Qa as n,Qb as pe,Rb as Be,Sb as Re,Tb as ke,Ub as Oe,Vb as A,Wb as I,X as le,Xb as qe,Zb as Le,ba as Ge,cc as _,dc as $e,ec as j,fc as ee,ga as Ne,gb as v,ha as p,ib as m,l as ne,ma as F,q as W,tb as i,ub as o,vb as u,wa as S,wb as J,xa as y,xb as K,yc as He,zb as N,zc as ze}from"./chunk-VNCXNJPE.js";import{a as w,d as Ve}from"./chunk-NEB6MB4Y.js";var ut=(()=>{let d=class d{constructor(r,t){this._http=r,this.AppSettings=t}postDesembolso(r){return this._http.post(this.AppSettings.detalleConsumos.url.desembolsoBase,r)}patchDesembolso(r){let t=r.id;delete r.id;let{idEstado:e,cuentaDestino:c,numFactura:f,idCuentaBancaria:g}=r;return this._http.patch(`${this.AppSettings.detalleConsumos.url.base}/Desembolso/${t}?idEstado=${e}&numFactura=${f}&cuentaDestino=${c}&idCuentaBancaria=${g}`,{})}};d.\u0275fac=function(t){return new(t||d)(Ne(Xe),Ne(Je))},d.\u0275prov=Ge({token:d,factory:d.\u0275fac,providedIn:"root"});let l=d;return l})();var Dt=["stepper"];function Et(l,d){l&1&&(i(0,"mat-error"),a(1,"El campo es requerido!"),o())}function Tt(l,d){l&1&&(i(0,"mat-error"),a(1,"El valor es requerido!"),o())}function _t(l,d){l&1&&(i(0,"mat-error"),a(1,"El valor ingresado no puede superar el cupo disponible!"),o())}function wt(l,d){if(l&1&&(i(0,"mat-option",28),a(1),o()),l&2){let s=d.$implicit;m("value",s.idTipoCuenta),n(),pe("",s.nombreBanco," - ",s.nombreTipoCuenta," - ",s.numeroCuenta,"")}}function Ft(l,d){l&1&&(i(0,"mat-error"),a(1,"El campo es requerido!"),o())}function At(l,d){if(l&1){let s=N();i(0,"div",29)(1,"div",30)(2,"div",31)(3,"h2",32),a(4,"Resumen de desembolso"),o(),i(5,"p",33),a(6,"Revise los detalles"),o()(),i(7,"div",34)(8,"div",35)(9,"div")(10,"h3",36),a(11,"Fecha"),o()(),i(12,"p",37),a(13),_(14,"date"),o()(),i(15,"div",35)(16,"div")(17,"h3",36),a(18,"N\xFAmero de comprobante"),o()(),i(19,"p",37),a(20),o()(),i(21,"div",35)(22,"div")(23,"h3",36),a(24,"Valor"),o()(),i(25,"p",37),a(26),_(27,"currency"),o()(),i(28,"div",35)(29,"div")(30,"h3",36),a(31,"Cuenta de origen"),o()(),i(32,"p",37),a(33),o()(),i(34,"div",38)(35,"div")(36,"h3",36),a(37,"Cuenta destino"),o()(),i(38,"p",37),a(39),o()()(),i(40,"div",39)(41,"button",40),D("click",function(){S(s);let t=C();return y(t.cerrar())}),a(42,"Cerrar"),o()()()()}if(l&2){let s=C();n(13),b(j(14,5,s.detaleConsumo.fechaCreacion,"dd/MM/yyyy")),n(7),b(s.detaleConsumo.numeroFactura),n(6),b(j(27,8,s.detaleConsumo.montoConsumo,"USD")),n(7),b(s.detaleConsumo.cuentaOrigen),n(6),b(s.detaleConsumo.cuentaDestino)}}var It={validation:!1},ft=(()=>{let d=class d{constructor(){this.fuseService=p($),this.estadosDatosService=p(Te),this.empleadosServices=p(Q),this.cuentasServices=p(pt),this.tipoCuentaService=p(at),this.datePipe=p(E),this.currencyPipe=p(x),this.router=p(B),this.fb=p(ye),this.detalleConsumo=p(M),this.cuentas=[],this.desembolsoService=p(ut),this.swalService=p(Ee),this.solicitudService=p(U),this.detalleConsumoService=p(M),this.activatedRoute=p(G),this.errorHandlerService=p(Ae),this.showAlert=!1,this.alert={type:"success",message:""},this.isStepThreeComplete=!1,this.creditos=[],this.focus=focus,this.FormatoOptionsPipe=ct}ngOnDestroy(){this.subscription$.unsubscribe()}ngOnInit(){this.createForm(),this.getCuentas();let r=this.activatedRoute.snapshot.paramMap.get("id");this.getSolicitud(r)}cerrar(){this.router.navigate(["/pages/gestion-creditos/desembolsos"])}getSolicitud(r){let t,e;this.subscription$=this.detalleConsumoService.getDetalleConsumoDesembolso(r).pipe(le(c=>{let f={idTipoDoc:c.data.trabajador.idTipoDoc,numDocumento:c.data.trabajador.numDoc};return t=c.data.montoConsumo,e=c.data.bancotrabajador+" - "+c.data.tipoCuentaTrabajador+" - "+c.data.numeroCuentaTrabajador,this.empleadosServices.getEmpleadoParams(f)})).subscribe(c=>{if(c){this.showAlert=!1;let f={numDoc:c.data.numDoc,primerNombre:c.data.primerNombre,segundoNombre:c.data.segundoNombre,primerApellido:c.data.primerApellido,segundoApellido:c.data.segundoApellido,idTrabajador:c.data.id,correo:c.data.correo,credito:c.data.creditos[0].numCredito+" - "+this.currencyPipe.transform(c.data.creditos[0].cupoDisponible,"USD","symbol","1.2-2"),idCredito:c.data.creditos[0].id,numCuentaBancaria:c.data.numCuentaBancaria,cuentaDestinoInformativa:e,idTipoCuenta:c.data.idTipoCuenta,nombreTipoCuenta:c.data.nombreTipoCuenta,id:r};this.secondFormGroup.patchValue(f),this.thirdFormGroup.patchValue({idCuentaBancaria:f.idTipoCuenta,cuentaDestino:f.numCuentaBancaria,cuentaDestinoInformativa:e,montoConsumo:t,nombreTipoCuenta:f.nombreTipoCuenta}),this.creditos=c.data.creditos}},c=>{this.alert={type:"error",message:"El trabajador no existe!"},this.showAlert=!0})}getCuentas(){this.subscription$=this.cuentasServices.getCuentasActivas().subscribe(r=>{this.cuentas=r.data,this.thirdFormGroup.get("cuentaOrigen").setValue(r.data[0].numeroCuenta)})}selectedData(r){let t=r.value,e=this.cuentas.find(c=>c.idTipoCuenta==t);this.thirdFormGroup.get("cuentaOrigen").setValue(e.numeroCuenta),this.thirdFormGroup.get("nombreTipoCuenta").setValue(e.nombreTipoCuenta)}selected(r){let t=r.value;this.compareValor=t.cupoDisponible,this.thirdFormGroup.get("montoConsumo").setValidators(jt(this.compareValor)),this.thirdFormGroup.get("montoConsumo").updateValueAndValidity()}compareWithConstants(r){let t=r.value,e=this.secondFormGroup.get("idCredito")?.value;return!e||!e.montoConsumo?(console.error("No se encontr\xF3 el objeto idCredito o montoConsumo"),ne(null)):(console.log(t),console.log(e.montoConsumo),t>e.montoConsumo?ne({notEqual:!0}):ne(null))}get montoConsumo(){return this.thirdFormGroup.get("montoConsumo")}get comprobante(){return this.thirdFormGroup.get("numFactura")}get cuentaDestino(){return this.thirdFormGroup.get("cuentaDestino")}onSave(){if(this.thirdFormGroup.valid){let r=this.thirdFormGroup.getRawValue(),{montoConsumo:t,idCuentaBancaria:e,cuentaDestino:c,cuentaDestinoInformativa:f,cuentaOrigen:g,nombreTipoCuenta:P}=r,gt=Ve(r,["montoConsumo","idCuentaBancaria","cuentaDestino","cuentaDestinoInformativa","cuentaOrigen","nombreTipoCuenta"]),{id:Ct,idCredito:xt,idTrabajador:St}=this.secondFormGroup.getRawValue();console.log(xt);let Me=this.cuentas.filter(re=>{if(re.idTipoCuenta==e)return re.id});console.log(Me[0].id);let Pe=w({id:Ct,idEstado:T.REALIZADA,cuentaDestino:f,idCuentaBancaria:Me[0].id},gt);console.log(Pe),this.fuseService.open(w({},te)).afterClosed().subscribe(re=>{re==="confirmed"&&this.desembolsoService.patchDesembolso(Pe).subscribe(je=>{console.log(je),this.swalService.ToastAler({icon:"success",title:"Registro Creado o Actualizado con Exito.",timer:4e3}),this.isStepThreeComplete=!0,this.getResumenCompra(St)},je=>{this.errorHandlerService.errorHandler(je)})})}}getResumenCompra(r){this.subscription$=this.detalleConsumo.getResumen(r).subscribe(t=>{t&&(this.detaleConsumo=t.data,this.stepper.next())})}createForm(){this.secondFormGroup=this.fb.group({numDoc:["",h.required],primerNombre:["",h.required],segundoNombre:[""],primerApellido:["",h.required],segundoApellido:[""],idTrabajador:[""],correo:["",h.required],credito:["",h.required],idCredito:["",h.required],numCuentaBancaria:[""],cuentaDestinoInformativa:[""],idTipoCuenta:[""],id:[""]}),this.thirdFormGroup=this.fb.group({montoConsumo:[{value:0,disabled:!0},[h.required]],numFactura:["",h.required],idCuentaBancaria:["",h.required],cuentaDestino:["",h.required],cuentaDestinoInformativa:[{value:0,disabled:!0}],nombreTipoCuenta:[{value:0,disabled:!0},h.required],cuentaOrigen:[{value:0,disabled:!0},h.required]})}};d.\u0275fac=function(t){return new(t||d)},d.\u0275cmp=F({type:d,selectors:[["app-form-desembolso"]],viewQuery:function(t,e){if(t&1&&se(Dt,5),t&2){let c;me(c=de())&&(e.stepper=c.first)}},standalone:!0,features:[A([{provide:k,useClass:X},{provide:R,useValue:"en-GB"},E,x,z(It)]),I],decls:85,vars:29,consts:[["stepper",""],["cdkScrollable","",1,"absolute","inset-0","flex","flex-col","min-w-0","items-center","overflow-y-auto","bg-gray-100","p-6","sm:p-8"],[1,"relative","w-full","flex-0","max-w-4xl","sm:rounded-lg","overflow-hidden"],[1,"p-2","text-3xl","font-semibold","text-center","text-gray-800"],[1,"w-full","px-6","py-4",3,"orientation","linear","animationDuration"],["label","Verificar informaci\xF3n",3,"stepControl"],[1,"w-full"],[1,"space-y-4","w-full","max-w-lg","mx-auto",3,"formGroup"],[1,"flex","flex-col","sm:flex-row","gap-4"],["matInput","","readonly","",3,"formControlName"],[1,"flex","flex-col"],[1,"flex","flex-wrap","justify-center","sm:justify-center","gap-4","mt-2"],["mat-button","",1,"sm:w-auto","w-full","py-2","px-4","text-white","bg-crediorange-100","rounded-lg",3,"click"],["mat-button","","matStepperNext","",1,"sm:w-auto","w-full","py-2","px-4","text-white","bg-crediblue-50","rounded-lg","hover:bg-opacity-80",3,"disabled"],["label","Confirmar desembolso"],[1,"w-full","h-full","p-4","sm:p-8"],[1,"flex","flex-col","sm:flex-row","items-baseline","gap-4"],["floatLabel","always",1,"w-full"],["matInput","","placeholder","N\xFAmero de comprobante",3,"formControlName"],[4,"ngIf"],["matInput","","thousandSeparator",".","placeholder","Valor",3,"formControlName","mask"],["placeholder","Cuenta de origen",3,"selectionChange","formControlName"],[3,"value",4,"ngFor","ngForOf"],["matInput","","placeholder","Cuenta destino",3,"formControlName"],["mat-button","","matStepperPrevious","",1,"sm:w-auto","w-full","py-2","px-4","text-white","bg-gray-500","rounded-lg","hover:bg-gray-600"],["mat-button","",1,"sm:w-auto","w-full","py-2","px-4","text-white","bg-crediblue-50","rounded-lg","hover:bg-opacity-80",3,"click","disabled"],["label","Resumen de desembolso",3,"completed"],["class","w-full px-4 sm:px-8",4,"ngIf"],[3,"value"],[1,"w-full","px-4","sm:px-8"],[1,"max-w-2xl","mx-auto","p-6","bg-white","shadow-lg","rounded-lg"],[1,"border-b","pb-4","mb-4","text-center"],[1,"text-2xl","font-bold","text-gray-800"],[1,"text-sm","text-gray-500"],[1,"space-y-4"],[1,"flex","justify-between","items-center","border-b","pb-2"],[1,"text-lg","font-semibold","text-gray-700"],[1,"text-lg","font-bold","text-gray-800"],[1,"flex","justify-between","items-center"],[1,"py-4"],["mat-button","",1,"w-full","py-2","px-4","text-white","bg-crediblue-50","rounded-lg","hover:bg-opacity-80",3,"click"]],template:function(t,e){if(t&1){let c=N();i(0,"div",1)(1,"div",2)(2,"div",3),a(3),o(),i(4,"mat-stepper",4,0)(6,"mat-step",5)(7,"div",6)(8,"form",7)(9,"div",8)(10,"mat-form-field",6)(11,"mat-label"),a(12,"Primer nombre"),o(),u(13,"input",9),o(),i(14,"mat-form-field",6)(15,"mat-label"),a(16,"Segundo nombre"),o(),u(17,"input",9),o()(),i(18,"div",8)(19,"mat-form-field",6)(20,"mat-label"),a(21,"Primer apellido"),o(),u(22,"input",9),o(),i(23,"mat-form-field",6)(24,"mat-label"),a(25,"Segundo apellido"),o(),u(26,"input",9),o()(),i(27,"div",8)(28,"mat-form-field",6)(29,"mat-label"),a(30,"Identificaci\xF3n"),o(),u(31,"input",9),o(),i(32,"mat-form-field",6)(33,"mat-label"),a(34,"Email"),o(),u(35,"input",9),o()(),i(36,"div",10)(37,"mat-form-field",6)(38,"mat-label"),a(39,"Cr\xE9dito / Cupo disponible"),o(),u(40,"input",9),o()(),i(41,"div",10)(42,"mat-form-field",6)(43,"mat-label"),a(44,"Cuenta destino: Banco - Tipo - N\xFAmero"),o(),u(45,"input",9),o()()(),i(46,"div",11)(47,"button",12),D("click",function(){return S(c),y(e.cerrar())}),a(48,"Cancelar"),o(),i(49,"button",13),a(50,"Siguiente"),o()()()(),i(51,"mat-step",14)(52,"div",15)(53,"form",7)(54,"div",16)(55,"mat-form-field",17)(56,"mat-label"),a(57,"N\xFAmero de comprobante"),o(),u(58,"input",18),v(59,Et,2,0,"mat-error",19),o(),i(60,"mat-form-field",17)(61,"mat-label"),a(62,"Valor de la transferencia"),o(),u(63,"input",20),v(64,Tt,2,0,"mat-error",19)(65,_t,2,0,"mat-error",19),o()(),i(66,"div",8)(67,"mat-form-field",17)(68,"mat-label"),a(69,"Cuenta origen: Banco - Tipo - N\xFAmero"),o(),i(70,"mat-select",21),D("selectionChange",function(g){return S(c),y(e.selectedData(g))}),v(71,wt,2,4,"mat-option",22),o()()(),i(72,"div",8)(73,"mat-form-field",17)(74,"mat-label"),a(75,"Cuenta destino: Banco - Tipo - N\xFAmero"),o(),u(76,"input",23),v(77,Ft,2,0,"mat-error",19),o()()(),i(78,"div",11)(79,"button",24),a(80,"Anterior"),o(),i(81,"button",25),D("click",function(){return S(c),y(e.onSave())}),a(82,"Confirmar"),o()()()(),i(83,"mat-step",26),v(84,At,43,11,"div",27),o()()()()}t&2&&(n(3),ce(" ","Desembolso"," "),n(),m("orientation","vertical")("linear",!0)("animationDuration","1500"),n(2),m("stepControl",e.secondFormGroup),n(2),m("formGroup",e.secondFormGroup),n(5),m("formControlName","primerNombre"),n(4),m("formControlName","segundoNombre"),n(5),m("formControlName","primerApellido"),n(4),m("formControlName","segundoApellido"),n(5),m("formControlName","numDoc"),n(4),m("formControlName","correo"),n(5),m("formControlName","credito"),n(5),m("formControlName","cuentaDestinoInformativa"),n(4),m("disabled",e.secondFormGroup.invalid),n(4),m("formGroup",e.thirdFormGroup),n(5),m("formControlName","numFactura"),n(),m("ngIf",(e.comprobante.touched||e.comprobante.dirty)&&e.comprobante.hasError("required")),n(4),m("formControlName","montoConsumo")("mask","separator.0"),n(),m("ngIf",(e.montoConsumo.touched||e.montoConsumo.dirty)&&e.montoConsumo.hasError("required")),n(),m("ngIf",(e.montoConsumo.touched||e.montoConsumo.dirty)&&e.montoConsumo.hasError("notEqual")),n(5),m("formControlName","idCuentaBancaria"),n(),m("ngForOf",e.cuentas),n(5),m("formControlName","cuentaDestinoInformativa"),n(),m("ngIf",(e.cuentaDestino.touched||e.cuentaDestino.dirty)&&e.cuentaDestino.hasError("required")),n(4),m("disabled",e.thirdFormGroup.invalid),n(2),m("completed",e.isStepThreeComplete),n(),m("ngIf",e.detaleConsumo))},dependencies:[O,x,E,Ke,Ce,he,ve,ge,L,Ze,q,H,fe,Qe,tt,_e,we,rt,nt,ze,V,it,De,xe,Se],styles:[".mat-vertical-stepper-header{pointer-events:none!important}"]});let l=d;return l})();function jt(l){return d=>{let s=d.value;return console.log(l),s>l?{notEqual:!0}:null}}var Nt=(l,d)=>({"bg-green-700":l,"bg-credigray-100":d});function Mt(l,d){if(l&1&&(J(0),u(1,"app-custom-table",19),K()),l&2){let s=C(2);n(),m("columns",s.columns)("displayedColumns",s.columns)("columnPropertyMap",s.columnPropertyMap)("data",s.data)("buttons",s.buttonsPendiente)("searchTerm",s.searchTerm)}}function Pt(l,d){l&1&&(i(0,"div",20)(1,"div",21)(2,"fuse-alert",22)(3,"span",23),a(4,"Informaci\xF3n"),o(),a(5," No hay solicitudes hasta el momento. "),o()()()),l&2&&(n(2),m("type","info")("appearance","outline"))}function Vt(l,d){if(l&1&&v(0,Mt,2,6,"ng-container",18)(1,Pt,6,2,"ng-template",null,1,ee),l&2){let s=Y(2),r=C();m("ngIf",r.data.length)("ngIfElse",s)}}function Gt(l,d){if(l&1&&(J(0),u(1,"app-custom-table",19),K()),l&2){let s=C(2);n(),m("columns",s.columns)("displayedColumns",s.columns)("columnPropertyMap",s.columnPropertyMap)("data",s.data)("buttons",s.buttons)("searchTerm",s.searchTerm)}}function Bt(l,d){l&1&&(i(0,"div",20)(1,"div",21)(2,"fuse-alert",22)(3,"span",23),a(4,"Informaci\xF3n"),o(),a(5," No hay solicitudes rechazadas hasta el momento. "),o()()()),l&2&&(n(2),m("type","info")("appearance","outline"))}function Rt(l,d){if(l&1&&v(0,Gt,2,6,"ng-container",18)(1,Bt,6,2,"ng-template",null,1,ee),l&2){let s=Y(2),r=C();m("ngIf",r.data.length)("ngIfElse",s)}}function kt(l,d){if(l&1&&(J(0),u(1,"app-custom-table",19),K()),l&2){let s=C(2);n(),m("columns",s.columnsDesembolsos)("displayedColumns",s.columnsDesembolsos)("columnPropertyMap",s.columnPropertyMapDesembolsos)("data",s.data)("buttons",s.buttonsApprove)("searchTerm",s.searchTerm)}}function Ot(l,d){l&1&&(i(0,"div",20)(1,"div",21)(2,"fuse-alert",22)(3,"span",23),a(4,"Informaci\xF3n"),o(),a(5," No hay solicitudes aprobadas hasta el momento. "),o()()()),l&2&&(n(2),m("type","info")("appearance","outline"))}function qt(l,d){if(l&1&&v(0,kt,2,6,"ng-container",18)(1,Ot,6,2,"ng-template",null,1,ee),l&2){let s=Y(2),r=C();m("ngIf",r.data.length)("ngIfElse",s)}}function Lt(l,d){if(l&1&&(J(0),u(1,"app-custom-table",19),K()),l&2){let s=C(2);n(),m("columns",s.columnsDesembolsos)("displayedColumns",s.columnsDesembolsos)("columnPropertyMap",s.columnPropertyMapDesembolsos)("data",s.data)("buttons",s.buttonsView)("searchTerm",s.searchTerm)}}function $t(l,d){l&1&&(i(0,"div",20)(1,"div",21)(2,"fuse-alert",22)(3,"span",23),a(4,"Informaci\xF3n"),o(),a(5," No hay solicitudes aprobadas hasta el momento. "),o()()()),l&2&&(n(2),m("type","info")("appearance","outline"))}function Ht(l,d){if(l&1&&v(0,Lt,2,6,"ng-container",18)(1,$t,6,2,"ng-template",null,1,ee),l&2){let s=Y(2),r=C();m("ngIf",r.data.length)("ngIfElse",s)}}var bt=(()=>{let d=class d{constructor(){this.datePipe=p(E),this.currencyPipe=p(x),this.router=p(B),this.selectedTab=T.PENDIENTE,this._matDialog=p(ue),this.estadoDatosService=p(Te),this.solicitudService=p(U),this.detalleConsumoService=p(M),this.fuseService=p($),this.exportData=[],this.searchTerm="",this.data=[],this.columns=["Fecha de solicitud","Identificaci\xF3n","Trabajador","Empresa","Cargo","Tipo de contrato","Fecha de inicio contrato","Fecha fin de contrato","Salario devengado","Cupo solicitado","Tipo de solicitud","Tipo de cuenta","Banco","N\xFAmero de cuenta","Estado"],this.columnPropertyMap={"Fecha de solicitud":"fechaCreacion",Identificaci\u00F3n:"documentoTrabajador",Trabajador:"nombreTrabajador",Empresa:"nombreSubEmpresa",Cargo:"cargoTrabajador","Tipo de contrato":"tipoContratoTrabajador","Fecha de inicio contrato":"fechaInicioContratoTrabajador","Fecha fin de contrato":"fechaFinContratoTrabajador","Salario devengado":"salarioDevengadoTrabajador","Cupo solicitado":"cupo","Tipo de solicitud":"nombreTipoSolicitud","Tipo de cuenta":"tipoCuentaTrabajador",Banco:"nombreBanco","N\xFAmero de cuenta":"numeroCuentaTrabajador",Estado:"nombreEstadoSolicitud"},this.columnsDesembolsos=["Fecha de solicitud","Identificaci\xF3n","Trabajador","Empresa","Cargo","Tipo de contrato","Fecha de inicio contrato","Fecha fin de contrato","Salario devengado","Monto aprobado","Cupo disponible","Tipo de consumo","Tipo de cuenta","Banco","N\xFAmero de cuenta","Estado"],this.columnPropertyMapDesembolsos={"Fecha de solicitud":"fechaCreacion",Identificaci\u00F3n:"documentoTrabajador",Trabajador:"nombreTrabajador",Empresa:"nombreEmpresaTrabajador",Cargo:"cargoTrabajador","Tipo de contrato":"tipoContratoTrabajador","Fecha de inicio contrato":"fechaInicioContratoTrabajador","Fecha fin de contrato":"fechaFinContratoTrabajador","Salario devengado":"salarioDevengadoTrabajador","Monto aprobado":"montoConsumo","Cupo disponible":"cupoDisponibleTrabajador","Tipo de consumo":"tipoConsumo","Tipo de cuenta":"tipoCuentaTrabajador",Banco:"bancotrabajador","N\xFAmero de cuenta":"numeroCuentaTrabajador",Estado:"nombreEstadoCredito"},this.buttons=[{label:"View",icon:"visibility",action:r=>{console.log("Approve",r),this.selectedData=r,this.router.navigate(["pages/gestion-creditos/solicitudes/estados",this.selectedData.id])}}],this.buttonsApprove=[{label:"View",icon:"visibility",action:r=>{console.log("Approve",r),this.selectedData=r,this.router.navigate(["pages/gestion-creditos/desembolsos/registrar",this.selectedData.id])}}],this.buttonsView=[{label:"View",icon:"visibility",action:r=>{console.log("Approve",r),this.selectedData=r,this.router.navigate(["pages/gestion-creditos/desembolsos/view",this.selectedData.id])}}],this.buttonsPendiente=[{label:"View",icon:"visibility",action:r=>{console.log("Approve",r),this.selectedData=r,this.router.navigate(["pages/gestion-creditos/desembolsos/desembolso",this.selectedData.id])}}],this.tabChanged=r=>{this.tabIndex=r.index,this.selectedTab=r.index==0?T.PENDIENTE:r.index==1?T.RECHAZADA:r.index==2?ae.APROBADA:r.index==3?ae.REALIZADA:Z.APROBADA,[T.PENDIENTE,T.RECHAZADA].includes(this.selectedTab)?this.getSolicitudes(this.selectedTab):[ae.APROBADA,ae.REALIZADA].includes(this.selectedTab)&&this.getDesembolsos(this.selectedTab)}}getSolicitudes(r){this.subcription$=this.solicitudService.getSolicitudesDesembolso(r).pipe(W(t=>(t.data.forEach(e=>{e.estado?e.estado=oe.ACTIVO:e.estado=oe.INACTIVO}),t)),W(t=>(t.data.forEach(e=>{e.fechaCreacion=this.datePipe.transform(e.fechaCreacion,"dd/MM/yyyy"),e.fechaInicioContratoTrabajador=this.datePipe.transform(e.fechaInicioContratoTrabajador,"dd/MM/yyyy"),e.fechaFinContratoTrabajador=this.datePipe.transform(e.fechaFinContratoTrabajador,"dd/MM/yyyy"),e.cupo=this.currencyPipe.transform(e.cupo,"USD","symbol","1.2-2"),e.salarioDevengadoTrabajador=this.currencyPipe.transform(e.salarioDevengadoTrabajador,"USD","symbol","1.2-2")}),t))).subscribe(t=>{t?(this.data=t.data,this.convertDataExportPendiente(t.data)):this.data=[]},t=>{this.data=[]})}getDesembolsos(r){this.subcription$=this.detalleConsumoService.getDetallesConsumoDesembolsos(r).pipe(W(t=>(t.data.forEach(e=>{e.estado?e.estado=oe.ACTIVO:e.estado=oe.INACTIVO}),t)),W(t=>(t.data.forEach(e=>{e.fechaCreacion=this.datePipe.transform(e.fechaCreacion,"dd/MM/yyyy"),e.fechaInicioContratoTrabajador=this.datePipe.transform(e.fechaInicioContratoTrabajador,"dd/MM/yyyy"),e.fechaFinContratoTrabajador=this.datePipe.transform(e.fechaFinContratoTrabajador,"dd/MM/yyyy"),e.salarioDevengadoTrabajador=this.currencyPipe.transform(e.salarioDevengadoTrabajador,"USD","symbol","1.2-2"),e.montoConsumo=this.currencyPipe.transform(e.montoConsumo,"USD","symbol","1.2-2"),e.cupoDisponibleTrabajador=this.currencyPipe.transform(e.cupoDisponibleTrabajador,"USD","symbol","1.2-2")}),t))).subscribe(t=>{t?(this.data=t.data,this.convertDataExport(t.data)):this.data=[]},t=>{this.data=[]})}onSearch(r){let t=r.target;this.searchTerm=t.value.trim().toLowerCase()}convertDataExport(r){let t=r.map(e=>({FechaSolicitud:e.fechaCreacion,Identificacion:e.documentoTrabajador,Trabajador:e.nombreTrabajador,Empresa:e.nombreEmpresaTrabajador,Cargo:e.cargoTrabajador,TipoContrato:e.tipoContratoTrabajador,FechaInicioContrato:e.fechaInicioContratoTrabajador,FechaFinContrato:e.fechaFinContratoTrabajador,SalarioDevengado:ie(e.salarioDevengadoTrabajador),MontoAprobado:ie(e.montoConsumo),CupoDisponible:ie(e.cupoDisponibleTrabajador),TipoConsumo:e.tipoConsumo,TipoCuenta:e.tipoCuentaTrabajador,Banco:e.bancotrabajador,NumeroCuenta:e.numeroCuentaTrabajador,Estado:e.nombreEstadoCredito}));this.exportData=t}convertDataExportPendiente(r){let t=r.map(e=>({FechaSolicitud:e.fechaCreacion,Identificacion:e.documentoTrabajador,Trabajador:e.nombreTrabajador,Empresa:e.nombreSubEmpresa,Cargo:e.cargoTrabajador,TipoContrato:e.tipoContratoTrabajador,FechaInicioContrato:e.fechaInicioContratoTrabajador,FechaFinContrato:e.fechaFinContratoTrabajador,SalarioDevengado:ie(e.salarioDevengadoTrabajador),CupoSolicitado:e.cupoDisponibleTrabajador,TipoSolicitud:e.nombreTipoSolicitud,TipoCuenta:e.tipoCuentaTrabajador,Banco:e.nombreBanco,NumeroCuenta:e.numeroCuentaTrabajador,Estado:e.nombreEstadoSolicitud}));this.exportData=t}ngOnDestroy(){this.subcription$.unsubscribe()}ngOnInit(){this.getSolicitudes(this.selectedTab),this.listenGrid()}listenGrid(){this.estadoDatosService.stateGridSolicitudes.asObservable().subscribe(t=>{t.state&&(console.log("Si entro"),console.log(t),this.selectedTab=t.tab==0?T.PENDIENTE:t.tab==1?Z.RECHAZADA:t.tab==2?Z.APROBADA:t.tab==3?Z.REALIZADA_DESEMBOLSO:Z.APROBADA,this.tabIndex=t.tab)})}exportToExcel(r){this.fuseService.open(w({},Ye)).afterClosed().subscribe(e=>{if(e==="confirmed"){let c=Fe.json_to_sheet(r),f=Fe.book_new();Fe.book_append_sheet(f,c,"Sheet1"),dt(f,`Desembolsos${this.datePipe.transform(new Date,"dd/MM/yyyy")}.xlsx`)}})}};d.\u0275fac=function(t){return new(t||d)},d.\u0275cmp=F({type:d,selectors:[["app-grid-desembolsos"]],standalone:!0,features:[A([E,x]),I],decls:23,vars:12,consts:[["tabGroup",""],["noData",""],[1,"bg-card","flex","min-w-0","flex-auto","flex-col","dark:bg-transparent","sm:absolute","sm:inset-0","sm:overflow-hidden"],[1,"relative","flex","flex-0","flex-col","px-6","py-6","sm:flex-row","sm:items-center","sm:justify-between","md:px-8"],[1,"text-3xl","font-semibold","tracking-tight"],[1,"mt-6","flex","w-full","shrink-0","flex-col","items-center","sm:ml-4","sm:mt-0","sm:flex-row","sm:space-x-2","sm:w-auto"],[1,"fuse-mat-dense","rounded-lg","w-full","sm:w-auto","min-w-64",3,"subscriptSizing"],["matPrefix","",1,"icon-size-5",3,"svgIcon"],["matInput","",3,"input","autocomplete","placeholder"],["mat-flat-button","",1,"sm:w-auto","w-full","sm:mt-0","mt-2","rounded-lg","transition","duration-200","text-white","font-semibold",3,"click","color","ngClass","disabled"],[1,"flex","flex-auto","overflow-hidden"],[1,"flex","flex-auto","flex-col","overflow-hidden","sm:overflow-y-auto","bg-gray-100"],["mat-stretch-tabs","false",1,"sm:px-2",3,"selectedIndexChange","selectedTabChange","animationDuration","selectedIndex"],["label","Pendientes"],["matTabContent",""],["label","Rechazadas"],["label","Aprobadas"],["label","Realizados"],[4,"ngIf","ngIfElse"],[3,"columns","displayedColumns","columnPropertyMap","data","buttons","searchTerm"],[1,"inset-0","min-w-0","overflow-auto","print:overflow-visible"],[1,"inline-block","p-4","sm:p-2","print:p-0","w-full"],[3,"type","appearance"],["fuseAlertTitle",""]],template:function(t,e){if(t&1){let c=N();i(0,"div",2)(1,"div",3)(2,"div",4),a(3,"Desembolsos"),o(),i(4,"div",5)(5,"mat-form-field",6),u(6,"mat-icon",7),i(7,"input",8),D("input",function(g){return S(c),y(e.onSearch(g))}),o()(),i(8,"button",9),D("click",function(){return S(c),y(e.exportToExcel(e.exportData))}),i(9,"span"),a(10," Exportar "),o()()()(),i(11,"div",10)(12,"div",11)(13,"mat-tab-group",12,0),Oe("selectedIndexChange",function(g){return S(c),ke(e.tabIndex,g)||(e.tabIndex=g),y(g)}),D("selectedTabChange",function(g){return S(c),y(e.tabChanged(g))}),i(15,"mat-tab",13),v(16,Vt,3,2,"ng-template",14),o(),i(17,"mat-tab",15),v(18,Rt,3,2,"ng-template",14),o(),i(19,"mat-tab",16),v(20,qt,3,2,"ng-template",14),o(),i(21,"mat-tab",17),v(22,Ht,3,2,"ng-template",14),o()()()()()}t&2&&(n(5),m("subscriptSizing","dynamic"),n(),m("svgIcon","heroicons_solid:magnifying-glass"),n(),m("autocomplete","off")("placeholder","Buscar"),n(),m("color","primary")("ngClass",Le(9,Nt,e.exportData.length,!e.exportData.length))("disabled",!e.exportData.length),n(5),m("animationDuration","500"),Re("selectedIndex",e.tabIndex))},dependencies:[ot,et,L,q,be,H,st,lt,mt,V,He]});let l=d;return l})();var zt=["stepper"],Xt={validation:!1},ht=(()=>{let d=class d{constructor(){this.fuseService=p($),this.router=p(B),this.fb=p(ye),this.activatedRoute=p(G),this.solicitudService=p(U),this.empleadosServices=p(Q),this.currencyPipe=p(x),this.swalService=p(Ee),this.errorHandlerService=p(Ae),this.showAlert=!1,this.alert={type:"success",message:""}}ngOnDestroy(){}ngOnInit(){this.createForm();let r=this.activatedRoute.snapshot.paramMap.get("id");this.getSolicitud(r)}getSolicitud(r){this.subscription$=this.solicitudService.getSolicitud(r).pipe(le(t=>{let e={idTipoDoc:t.data.trabajador.idTipoDoc,numDocumento:t.data.trabajador.numDoc};return this.empleadosServices.getEmpleadoParams(e)})).subscribe(t=>{if(t){this.showAlert=!1;let e={numDoc:t.data.numDoc,primerNombre:t.data.primerNombre,segundoNombre:t.data.segundoNombre,primerApellido:t.data.primerApellido,segundoApellido:t.data.segundoApellido,idTrabajador:t.data.id,correo:t.data.correo,credito:t.data.creditos[0].numCredito+" - "+this.currencyPipe.transform(t.data.creditos[0].cupoDisponible,"USD","symbol","1.2-2"),idCredito:t.data.creditos[0].id,numCuentaBancaria:t.data.numCuentaBancaria,idTipoCuenta:t.data.idTipoCuenta,id:r};this.secondFormGroup.patchValue(e)}},t=>{this.alert={type:"error",message:"El trabajador no existe!"},this.showAlert=!0})}onApprove(){if(this.secondFormGroup.valid){let{id:r,idCredito:t,idTrabajador:e}=this.secondFormGroup.getRawValue(),c={id:r,idEstado:T.APROBADA};this.fuseService.open(w({},te)).afterClosed().subscribe(g=>{g==="confirmed"&&this.solicitudService.patchSolicitudDesembolso(c).subscribe(P=>{this.swalService.ToastAler({icon:"success",title:"Registro Creado o Actualizado con Exito.",timer:4e3}),this.router.navigate(["pages/gestion-creditos/desembolsos"])},P=>{this.errorHandlerService.errorHandler(P)})})}}onRechazar(){if(this.secondFormGroup.valid){let{id:r,idCredito:t,idTrabajador:e}=this.secondFormGroup.getRawValue(),c={id:r,idEstado:T.RECHAZADA};this.fuseService.open(w({},te)).afterClosed().subscribe(g=>{g==="confirmed"&&this.solicitudService.patchSolicitudDesembolso(c).subscribe(P=>{this.swalService.ToastAler({icon:"success",title:"Registro Creado o Actualizado con Exito.",timer:4e3}),this.router.navigate(["pages/gestion-creditos/desembolsos"])},P=>{this.errorHandlerService.errorHandler(P)})})}}cerrar(){this.router.navigate(["/pages/gestion-creditos/desembolsos"])}createForm(){this.secondFormGroup=this.fb.group({numDoc:["",h.required],primerNombre:["",h.required],segundoNombre:[""],primerApellido:["",h.required],segundoApellido:[""],idTrabajador:[""],correo:["",h.required],credito:["",h.required],idCredito:["",h.required],numCuentaBancaria:[""],idTipoCuenta:[""],id:[""]})}};d.\u0275fac=function(t){return new(t||d)},d.\u0275cmp=F({type:d,selectors:[["app-form-approve-desembolso"]],viewQuery:function(t,e){if(t&1&&se(zt,5),t&2){let c;me(c=de())&&(e.stepper=c.first)}},standalone:!0,features:[A([{provide:k,useClass:X},{provide:R,useValue:"en-GB"},E,x,z(Xt)]),I],decls:51,vars:14,consts:[["stepper",""],["cdkScrollable","",1,"absolute","inset-0","flex","flex-col","min-w-0","items-center","overflow-y-auto","bg-gray-100","p-6","sm:p-8"],[1,"relative","w-full","flex-0","max-w-4xl","sm:rounded-lg","overflow-hidden"],[1,"p-2","text-3xl","font-semibold","text-center","text-gray-800"],[1,"w-full","px-6","py-4",3,"orientation","linear","animationDuration"],["label","Verificar informaci\xF3n",3,"stepControl"],[1,"w-full"],[1,"space-y-4","w-full","max-w-lg","mx-auto",3,"formGroup"],[1,"flex","flex-col","sm:flex-row","gap-4"],["matInput","","readonly","",3,"formControlName"],[1,"flex","flex-col"],[1,"flex","flex-wrap","justify-center","sm:justify-center","gap-4","mt-2"],["mat-button","",1,"sm:w-auto","w-full","py-2","px-4","text-white","bg-crediorange-100","rounded-lg",3,"click"],["mat-button","",1,"sm:w-auto","w-full","py-2","px-4","text-white","bg-crediblue-50","rounded-lg","hover:bg-opacity-80",3,"click"]],template:function(t,e){if(t&1){let c=N();i(0,"div",1)(1,"div",2)(2,"div",3),a(3),o(),i(4,"mat-stepper",4,0)(6,"mat-step",5)(7,"div",6)(8,"form",7)(9,"div",8)(10,"mat-form-field",6)(11,"mat-label"),a(12,"Primer nombre"),o(),u(13,"input",9),o(),i(14,"mat-form-field",6)(15,"mat-label"),a(16,"Segundo nombre"),o(),u(17,"input",9),o()(),i(18,"div",8)(19,"mat-form-field",6)(20,"mat-label"),a(21,"Primer apellido"),o(),u(22,"input",9),o(),i(23,"mat-form-field",6)(24,"mat-label"),a(25,"Segundo apellido"),o(),u(26,"input",9),o()(),i(27,"div",8)(28,"mat-form-field",6)(29,"mat-label"),a(30,"Identificaci\xF3n"),o(),u(31,"input",9),o(),i(32,"mat-form-field",6)(33,"mat-label"),a(34,"Email"),o(),u(35,"input",9),o()(),i(36,"div",10)(37,"mat-form-field",6)(38,"mat-label"),a(39,"Cr\xE9dito / Cupo disponible"),o(),u(40,"input",9),o()(),i(41,"div",10)(42,"mat-form-field",6)(43,"mat-label"),a(44,"N\xFAmero de cuenta"),o(),u(45,"input",9),o()()(),i(46,"div",11)(47,"button",12),D("click",function(){return S(c),y(e.onRechazar())}),a(48,"Rechazar"),o(),i(49,"button",13),D("click",function(){return S(c),y(e.onApprove())}),a(50,"Aprobar"),o()()()()()()()}t&2&&(n(3),ce(" ","Desembolso"," "),n(),m("orientation","vertical")("linear",!0)("animationDuration","1500"),n(2),m("stepControl",e.secondFormGroup),n(2),m("formGroup",e.secondFormGroup),n(5),m("formControlName","primerNombre"),n(4),m("formControlName","segundoNombre"),n(5),m("formControlName","primerApellido"),n(4),m("formControlName","segundoApellido"),n(5),m("formControlName","numDoc"),n(4),m("formControlName","correo"),n(5),m("formControlName","credito"),n(5),m("formControlName","numCuentaBancaria"))},dependencies:[O,we,L,q,H,fe,_e,De,Ce,he,ve,ge,xe,Se]});let l=d;return l})();var Ut=()=>["/pages/gestion-creditos/desembolsos"];function Qt(l,d){if(l&1&&(i(0,"div",8)(1,"div",9)(2,"div")(3,"h3",10),a(4),o(),i(5,"p",11),a(6,"Identificaci\xF3n: "),i(7,"span",12),a(8),o()(),i(9,"p",11),a(10,"Empresa: "),i(11,"span",12),a(12),o()(),i(13,"p",13),a(14,"Cargo: "),i(15,"span",12),a(16),o()(),i(17,"p",13),a(18,"Tipo de contrato: "),i(19,"span",12),a(20),o()(),i(21,"p",13),a(22,"Fecha inicio de contrato: "),i(23,"span",12),a(24),_(25,"date"),o()(),i(26,"p",13),a(27,"Fecha fin de contrato: "),i(28,"span",12),a(29),_(30,"date"),o()(),i(31,"p",13),a(32,"Salario devengado: "),i(33,"span",12),a(34),_(35,"currency"),o()(),i(36,"p",11),a(37,"Correo: "),i(38,"span",12),a(39),o()(),i(40,"p",11),a(41,"Direcci\xF3n: "),i(42,"span",12),a(43),o()(),i(44,"p",11),a(45,"Tel\xE9fono: "),i(46,"span",12),a(47),o()()(),i(48,"div")(49,"p",11),a(50,"Tipo de consumo: "),i(51,"span",12),a(52),o()(),i(53,"p",11),a(54,"Estado de Desembolso: "),i(55,"span",12),a(56),o()(),i(57,"p",11),a(58,"Valor de desembolso: "),i(59,"span",12),a(60),_(61,"currency"),o()(),i(62,"p",11),a(63,"Fecha de Solicitud: "),i(64,"span",12),a(65),_(66,"date"),o()(),i(67,"p",11),a(68,"Cuenta destino: "),i(69,"span",12),a(70),o()()()()()),l&2){let s=C();n(4),Be(" ",s.items.trabajador.primerNombre," ",s.items.trabajador.segundoNombre," ",s.items.trabajador.primerApellido," ",s.items.trabajador.segundoApellido," "),n(4),b(s.items.trabajador.numDoc),n(4),b(s.items.trabajador.nombreSubEmpresa),n(4),b(s.items.trabajador.cargo),n(4),b(s.items.trabajador.nombreTipoContrato),n(4),b(j(25,21,s.items.trabajador.fechaInicioContrato,"dd/MM/yyyy")),n(5),b(j(30,24,s.items.trabajador.fechaFinContrato,"dd/MM/yyyy")),n(5),b(j(35,27,s.items.trabajador.salarioDevengado,"USD")),n(5),b(s.items.trabajador.correo),n(4),b(s.items.trabajador.direccion),n(4),b(s.items.trabajador.telefono),n(5),b(s.items.tipoConsumo),n(4),b(s.items.nombreEstadoCredito),n(4),b($e(61,30,s.items.montoConsumo)),n(5),b(j(66,32,s.items.fechaCreacionSolicitud,"dd/MM/yyyy")),n(5),pe("",s.items.bancotrabajador," - ",s.items.tipoCuentaTrabajador," - ",s.items.numeroCuentaTrabajador," ")}}var Zt={validation:!1},vt=(()=>{let d=class d{constructor(){this.activatedRoute=p(G),this._matDialog=p(ue),this.detalleConsumoService=p(M),this.currencyPipe=p(x),this.empleadosServices=p(Q),this.showAlert=!1,this.alert={type:"success",message:""}}ngOnDestroy(){this.subscription$.unsubscribe()}ngOnInit(){let r=this.activatedRoute.snapshot.paramMap.get("id");this.getSolicitud(r)}getSolicitud(r){this.subscription$=this.detalleConsumoService.getDetalleConsumoDesembolso(r).subscribe(t=>{t&&(this.showAlert=!1,this.items=t.data)},t=>{this.alert={type:"error",message:"El trabajador no existe!"},this.showAlert=!0})}};d.\u0275fac=function(t){return new(t||d)},d.\u0275cmp=F({type:d,selectors:[["app-form-view-desembolso"]],standalone:!0,features:[A([{provide:k,useClass:X},{provide:R,useValue:"en-GB"},E,x,z(Zt)]),I],decls:10,vars:4,consts:[["cdkScrollable","",1,"absolute","inset-0","min-w-0","overflow-auto","print:overflow-visible"],[1,"inline-block","p-4","sm:p-6","md:p-10","print:p-0","w-full"],[1,"bg-card","shadow","print:bg-transparent","print:p-0","print:shadow-none","rounded-2xl","max-w-4xl","mx-auto","overflow-hidden"],[1,"bg-crediblue-50","px-4","py-3","sm:px-6","sm:py-4","flex","items-center","justify-between"],["mat-button","",1,"flex","items-center",3,"routerLink"],[1,"text-white",3,"svgIcon"],[1,"text-lg","sm:text-xl","font-bold","text-white"],["class","p-4 sm:p-6",4,"ngIf"],[1,"p-4","sm:p-6"],[1,"mb-4","flex","flex-col","md:flex-row","md:justify-between","gap-4"],[1,"text-lg","sm:text-xl","font-semibold","text-gray-800"],[1,"font-medium","text-gray-600"],[1,"text-md","text-secondary"],[1,"text-gray-600","font-medium"]],template:function(t,e){t&1&&(i(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div")(5,"a",4),u(6,"mat-icon",5),o()(),i(7,"h2",6),a(8,"Detalle de Desembolso"),o()(),v(9,Qt,71,35,"div",7),o()()()),t&2&&(n(5),m("routerLink",qe(3,Ut)),n(),m("svgIcon","heroicons_outline:arrow-long-left"),n(3),m("ngIf",e.items))},dependencies:[O,x,E,We,be,V,Ue]});let l=d;return l})();var Yi=[{path:"",component:bt},{path:"desembolso/:id",component:ht},{path:"registrar/:id",component:ft},{path:"view/:id",component:vt}];export{Yi as default};