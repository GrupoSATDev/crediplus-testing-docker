import{a as He}from"./chunk-74VNGCAR.js";import{a as Je}from"./chunk-ZMWWFY7O.js";import{a as Be,b as $e,c as Oe,d as Le}from"./chunk-X5YKWCIG.js";import{a as Ue}from"./chunk-LLMKJCSC.js";import{c as Qe}from"./chunk-LOIXTBAB.js";import{a as ze}from"./chunk-7IDRY5LZ.js";import{a as je}from"./chunk-PR4SMMMA.js";import{a as Re}from"./chunk-G2MI45FK.js";import{a as Te}from"./chunk-N7BRYQMC.js";import{a as Pe}from"./chunk-N3QIRYNR.js";import{a as Me,b as qe}from"./chunk-XVIRI3LF.js";import{a as ke}from"./chunk-QETDVRLC.js";import{a as Ie}from"./chunk-QKXBZ27Z.js";import{b as Ve}from"./chunk-YHNXG437.js";import{a as Ge}from"./chunk-K7UKSVEC.js";import{a as Ne}from"./chunk-BW2UNIQM.js";import{g as fe}from"./chunk-AYHPHLPH.js";import"./chunk-C7ANG7GI.js";import{a as we}from"./chunk-MH26QXBG.js";import{C as _e,E as Fe,F as De,J as Ee,b as de,c as pe,i as ue,l as he,n as u,p as be,q as ge,u as xe,x as ye,y as Se}from"./chunk-NFNLINIV.js";import{b as re,d as ne}from"./chunk-V24ZDQ6I.js";import{h as se}from"./chunk-32OSWJVT.js";import{a as Ae}from"./chunk-JLSTUWCW.js";import"./chunk-HR6HUVTD.js";import{Q as ae,R as le,ba as me,ga as ce}from"./chunk-IP22JCCO.js";import{a as ve}from"./chunk-QS2H5WYQ.js";import"./chunk-VFBDOJ4Z.js";import{b as Ce}from"./chunk-J6S3X3IJ.js";import{Ac as te,Cb as S,Dc as oe,Ea as Q,Eb as h,Ec as E,Hc as w,Ib as z,Jb as H,Kb as J,Mb as a,Nb as v,Nc as ie,Ob as P,Qa as o,Vb as W,Wb as K,X as O,Zb as X,_ as V,ba as L,cc as _,dc as D,ec as Y,ga as G,gb as f,ha as p,ib as m,l as F,ma as U,pb as b,q as B,tb as r,ub as t,vb as C,wa as x,wb as I,xa as y,xb as M,yc as Z,z as $,zb as q,zc as ee}from"./chunk-VNCXNJPE.js";import{a as T,d as j}from"./chunk-NEB6MB4Y.js";var We=(()=>{let s=class s{constructor(l,e){this._http=l,this.appSettingService=e}getTipoConsumos(){return this._http.get(this.appSettingService.tipoConsumos.url.base)}getTipoConsumo(l){return this._http.get(`${this.appSettingService.tipoConsumos.url.base}/${l}`)}};s.\u0275fac=function(e){return new(e||s)(G(ie),G(Ce))},s.\u0275prov=L({token:s,factory:s.\u0275fac,providedIn:"root"});let i=s;return i})();var Ye=["stepper"],Ze=(i,s)=>({"bg-crediblue-50":i,"bg-credigray-100":s});function et(i,s){if(i&1&&(r(0,"mat-option",33),a(1),t()),i&2){let d=s.$implicit;m("value",d.id),o(),v(d.nombre)}}function tt(i,s){if(i&1&&(I(0),f(1,et,2,2,"mat-option",32),M()),i&2){let d=s.ngIf;o(),m("ngForOf",d.data)}}function ot(i,s){i&1&&a(0," El n\xFAmero de identificaci\xF3n es requerido!. ")}function it(i,s){i&1&&a(0," Solo se permiten n\xFAmeros. ")}function rt(i,s){if(i&1&&(r(0,"mat-error"),f(1,ot,1,0)(2,it,1,0),t()),i&2){let d=h();o(),b(d.firstFormGroup.get("numDocumento").hasError("required")?1:-1),o(),b(d.firstFormGroup.get("numDocumento").hasError("pattern")?2:-1)}}function nt(i,s){if(i&1&&(r(0,"fuse-alert",34),a(1),t()),i&2){let d=h();m("appearance","outline")("showIcon",!1)("type",d.alert.type)("@shake",d.alert.type==="error"),o(),P(" ",d.alert.message," ")}}function at(i,s){if(i&1&&(r(0,"mat-option",33),a(1),t()),i&2){let d=s.$implicit;m("value",d.id),o(),v(d.nombre)}}function lt(i,s){if(i&1&&(I(0),f(1,at,2,2,"mat-option",32),M()),i&2){let d=s.ngIf;o(),m("ngForOf",d.data)}}function mt(i,s){i&1&&(r(0,"span"),a(1," El valor es requerido! "),t())}function st(i,s){i&1&&(r(0,"span"),a(1," El valor ingresado no puede superar el cupo disponible! "),t())}function dt(i,s){if(i&1&&(r(0,"mat-error"),f(1,mt,2,0,"span",11)(2,st,2,0,"span",11),t()),i&2){let d=h();o(),m("ngIf",d.montoConsumo.hasError("required")),o(),m("ngIf",d.montoConsumo.hasError("notEqual"))}}function pt(i,s){i&1&&(r(0,"span"),a(1," Recargar "),t())}function ut(i,s){i&1&&C(0,"mat-progress-spinner",49),i&2&&m("diameter",24)("mode","indeterminate")}function ct(i,s){if(i&1){let d=q();r(0,"div",35)(1,"div",36)(2,"div",37)(3,"h2",38),a(4,"Resumen de la Compra"),t(),r(5,"p",39),a(6,"Revise los detalles"),t()(),r(7,"div",40)(8,"div",41)(9,"div")(10,"h3",42),a(11,"Fecha de compra"),t()(),r(12,"p",43),a(13),_(14,"date"),t()(),r(15,"div",41)(16,"div")(17,"h3",42),a(18,"N\xFAmero de factura"),t()(),r(19,"p",43),a(20),t()(),r(21,"div",41)(22,"div")(23,"h3",42),a(24,"Valor"),t()(),r(25,"p",43),a(26),_(27,"currency"),t()(),r(28,"div",44)(29,"p",42),a(30,"N\xFAmero de cuotas"),t(),r(31,"p",43),a(32),t()(),r(33,"div",45)(34,"p",42),a(35,"Estado"),t(),r(36,"p",43),a(37),t()(),r(38,"div",46)(39,"p",42),a(40,"Detalle compra"),t(),r(41,"p",43),a(42),t()()(),r(43,"div",47)(44,"button",48),S("click",function(){x(d);let e=h();return y(e.onUpdate())}),f(45,pt,2,0,"span")(46,ut,1,2,"mat-progress-spinner",49),t(),r(47,"button",50),S("click",function(){x(d);let e=h();return y(e.onCerrar())}),a(48," Cerrar "),t()()()()}if(i&2){let d=h();o(13),v(Y(14,10,d.detaleConsumo.fechaCreacion,"dd/MM/yyyy")),o(7),v(d.detaleConsumo.numeroFactura),o(6),v(D(27,13,d.detaleConsumo.montoConsumo)),o(6),v(d.detaleConsumo.cantidadCuotas),o(5),v(d.detaleConsumo.nombreEstadoCredito),o(5),v(d.detaleConsumo.detalleCompra),o(2),m("disabled",d.isButtonDisabled),o(),b(d.isButtonDisabled?-1:45),o(),b(d.isButtonDisabled?46:-1),o(),m("disabled",d.isButtonDisabled)}}var ft={validation:!1},k=(()=>{let s=class s{constructor(){this.tiposDocumentosService=p(je),this.fuseService=p(fe),this.estadosDatosService=p(Ge),this.toasService=p(Ie),this.empleadosServices=p(Ue),this.tipoConsumosService=p(We),this.cuentasServices=p(Je),this.datePipe=p(E),this.currencyPipe=p(w),this.router=p(ne),this.activatedRoute=p(re),this.fb=p(_e),this._locacionService=p(Te),this.detalleConsumo=p(ze),this.departamentos$=this._locacionService.getDepartamentos(),this.tipoConsumo$=this.tipoConsumosService.getTipoConsumos().pipe(B(l=>(l.data=l.data.filter(e=>e.nombre!=="Cobros Fijos"&&e.nombre!=="Avance"),l)),V(l=>{let e=l.data.find(n=>n.nombre==="Credito Consumo");e&&this.thirdFormGroup.get("idTipoConsumo").setValue(e.id)})),this.cuentas$=this.cuentasServices.getCuentas(),this.swalService=p(ke),this.showAlert=!1,this.alert={type:"success",message:""},this.destroyedRef=p(Q),this.tiposDocumentos$=this.tiposDocumentosService.getTiposDocumentos().pipe(V(l=>{let e=l.data.find(n=>n.nombre==="C\xE9dula de ciudadan\xEDa");e&&this.firstFormGroup.get("idTipoDoc").setValue(e.id)})),this.empleado$=this.empleadosServices.getValidaInfo(),this.creditos=[],this.isButtonDisabled=!1,this.focus=focus,this.FormatoOptionsPipe=He}ngOnDestroy(){}ngOnInit(){this.createForm();let l=this.activatedRoute.snapshot.paramMap.get("tipo"),e=this.activatedRoute.snapshot.paramMap.get("num");if(l&&e){let n={idTipoDoc:l,numDocumento:e};this.firstFormGroup.patchValue(n)}}getMunicipios(l){let e=l.value;this.municipios$=this._locacionService.getMunicipio(e)}selected(l){let e=l.value;this.compareValor=e.cupoDisponible,this.thirdFormGroup.get("montoConsumo").setValidators(A(this.compareValor)),this.thirdFormGroup.get("montoConsumo").updateValueAndValidity()}compareWithConstants(l){let e=l.value,n=this.secondFormGroup.get("idCredito")?.value;return!n||!n.montoConsumo?(console.error("No se encontr\xF3 el objeto idCredito o montoConsumo"),F(null)):(console.log(e),console.log(n.montoConsumo),e>n.montoConsumo?F({notEqual:!0}):F(null))}validateValue(l){return e=>{let n=this.secondFormGroup.get("procMaxDesembolso").value,c=e.value;return console.log(n),c>n?{notEqual:!0}:null}}get montoConsumo(){return this.thirdFormGroup.get("montoConsumo")}onSearch(){let l=this.firstFormGroup.getRawValue();this.empleadosServices.getEmpleadoParams(l).subscribe(e=>{if(e&&e.data.creditos.length>0){this.showAlert=!1;let n={numDoc:e.data.numDoc,primerNombre:e.data.primerNombre,segundoNombre:e.data.segundoNombre,primerApellido:e.data.primerApellido,segundoApellido:e.data.segundoApellido,idTrabajador:e.data.id,correo:e.data.correo,credito:e.data.creditos[0].numCredito+" - "+this.currencyPipe.transform(e.data.creditos[0].cupoDisponible,"USD","symbol","1.2-2"),idCredito:e.data.creditos[0].id,procMaxDesembolso:e.data.procMaxDesembolso,procMaxPrestamo:e.data.procMaxPrestamo,cupoDisponible:e.data.creditos[0].cupoDisponible,cupoDisponibleAvances:e.data.creditos[0].cupoDisponibleAvances};this.secondFormGroup.patchValue(n),this.creditos=e.data.creditos,this.thirdFormGroup.get("montoConsumo").setValidators([u.required,A(n.cupoDisponible)]),this.thirdFormGroup.updateValueAndValidity(),setTimeout(()=>{this.stepper.next()},1200)}else this.alert={type:"error",message:"El usuario no tiene cr\xE9dito aprobado, por favor comunicarse con el equipo de CrediPlus.!"}},e=>{this.alert={type:"error",message:e.error.errorMenssages[0]},this.showAlert=!0})}selectedTipo(l){let{procMaxDesembolso:e,procMaxPrestamo:n,cupoDisponible:c,cupoDisponibleAvances:g}=this.secondFormGroup.getRawValue(),N;l.value==Qe.ID_TIPO_CONSUMO_AVANCE?(this.thirdFormGroup.get("montoConsumo").setValue(0),this.thirdFormGroup.get("montoConsumo").setValidators([u.required,A(c)]),this.thirdFormGroup.updateValueAndValidity()):(N=Number(c)*n/100,this.thirdFormGroup.get("montoConsumo").setValue(0),this.thirdFormGroup.get("montoConsumo").setValidators([u.required,A(c)]),this.thirdFormGroup.updateValueAndValidity())}onSave(){if(this.thirdFormGroup.valid){let l=this.thirdFormGroup.getRawValue(),{montoConsumo:e}=l,n=j(l,["montoConsumo"]),{idCredito:c,idTrabajador:g}=this.secondFormGroup.getRawValue(),N=T({idCredito:c,idTrabajador:g,montoConsumo:Number(e)},n);this.fuseService.open(T({},Ve)).afterClosed().subscribe(Ke=>{Ke==="confirmed"&&this.detalleConsumo.postDetalle(N).subscribe(R=>{console.log(R),this.swalService.ToastAler({icon:"success",title:"Registro Creado o Actualizado con Exito.",timer:4e3}),this.getResumenCompra(g)},R=>{this.swalService.ToastAler({icon:"error",title:"Ha ocurrido un error al crear el registro!",timer:4e3})})})}}getResumenCompra(l){this.subscription$=this.detalleConsumo.getResumen(l).subscribe(e=>{e&&(console.log(e),this.detaleConsumo=e.data,this.stepper.next())})}onCerrar(){this.router.navigate(["pages/gestion-creditos/consumos"])}onUpdate(){this.isButtonDisabled||(this.isButtonDisabled=!0,this.detalleSubscription$&&this.detalleSubscription$.unsubscribe(),this.detalleSubscription$=$(4e3).pipe(Re(this.destroyedRef),O(()=>this.detalleConsumo.getConsumoTrabajador(this.detaleConsumo.idTrabajador))).subscribe(l=>{console.log(l),l.data.nombreEstadoCredito=="Aprobado"?(this.detaleConsumo=l.data,this.swalService.ToastAler({icon:"success",title:"Registro Creado o Actualizado con Exito.",timer:4e3}),this.detalleSubscription$.unsubscribe(),this.isButtonDisabled=!1):this.isButtonDisabled=!0}),setTimeout(()=>{this.isButtonDisabled=!1},3e3))}createForm(){this.firstFormGroup=this.fb.group({idTipoDoc:[""],numDocumento:["",[u.required,u.pattern("^[0-9]*$")]]}),this.secondFormGroup=this.fb.group({numDoc:["",u.required],primerNombre:["",u.required],segundoNombre:[""],primerApellido:["",u.required],segundoApellido:[""],idTrabajador:[""],correo:["",u.required],credito:["",u.required],idCredito:["",u.required],procMaxDesembolso:[""],procMaxPrestamo:[""],cupoDisponible:[""],cupoDisponibleAvances:[""]}),this.thirdFormGroup=this.fb.group({montoConsumo:["",[u.required]],numeroFactura:["",u.required],idTipoConsumo:["",u.required]})}};s.\u0275fac=function(e){return new(e||s)},s.\u0275cmp=U({type:s,selectors:[["app-form-detalle-consumo"]],viewQuery:function(e,n){if(e&1&&z(Ye,5),e&2){let c;H(c=J())&&(n.stepper=c.first)}},standalone:!0,features:[W([{provide:le,useClass:Pe},{provide:ae,useValue:"en-GB"},E,w,Me(ft)]),K],decls:92,vars:51,consts:[["stepper",""],["data",""],["cdkScrollable","",1,"absolute","inset-0","flex","flex-col","min-w-0","items-center","overflow-y-auto","bg-gray-100","p-6","sm:p-8"],[1,"relative","w-full","flex-0","max-w-4xl","sm:rounded-lg","overflow-hidden"],[1,"p-2","text-3xl","font-semibold","text-center","text-gray-800"],[1,"w-full","px-6","py-4",3,"orientation","linear","animationDuration"],["label","Consultar trabajador",3,"stepControl","editable"],[1,"flex","flex-col","items-center","w-full"],[1,"space-y-4","w-full","max-w-sm",3,"formGroup"],[1,"w-full"],[3,"formControlName"],[4,"ngIf"],["floatLabel","always",1,"w-full"],["matInput","","placeholder","N\xFAmero de identificaci\xF3n",3,"formControlName"],["class","mb-4",3,"appearance","showIcon","type",4,"ngIf"],["mat-raised-button","",1,"text-white","px-6","py-2","rounded-md","w-full",3,"click","disabled","ngClass"],["label","Verificar informaci\xF3n",3,"stepControl","editable"],[1,"space-y-4","w-full","max-w-lg","mx-auto",3,"formGroup"],[1,"flex","flex-col","sm:flex-row","gap-4"],["matInput","",3,"formControlName","readonly"],[1,"flex","flex-col"],[1,"flex","flex-wrap","justify-center","sm:justify-center","gap-4","mt-2"],["mat-button","","matStepperPrevious","",1,"sm:w-auto","w-full","bg-gray-500","text-white","py-2","px-4","rounded","hover:bg-gray-600"],["mat-button","","matStepperNext","",1,"sm:w-auto","w-full","bg-crediblue-50","text-white","py-2","px-4","rounded",3,"disabled"],["label","Completar compra",3,"stepControl","editable"],[1,"w-full","h-full","p-4","sm:p-8"],["matInput","","placeholder","N\xFAmero de factura",3,"formControlName"],["placeholder","Tipo de consumo",3,"formControlName"],["matInput","","thousandSeparator",".","placeholder","Valor",3,"formControlName","mask"],["mat-button","",1,"sm:w-auto","w-full","bg-crediblue-50","text-white","py-2","px-4","rounded",3,"click","disabled"],["label","Resumen de compra",3,"stepControl"],["class","w-full h-full px-4",4,"ngIf"],[3,"value",4,"ngFor","ngForOf"],[3,"value"],[1,"mb-4",3,"appearance","showIcon","type"],[1,"w-full","h-full","px-4"],[1,"max-w-2xl","mx-auto","p-4","bg-white","shadow-lg","rounded-lg"],[1,"border-b","pb-4","mb-4"],[1,"text-2xl","font-bold","text-gray-800"],[1,"text-sm","text-gray-500"],[1,"space-y-4"],[1,"flex","justify-between","items-center","border-b","pb-2"],[1,"text-lg","font-semibold","text-gray-700"],[1,"text-lg","font-bold","text-gray-800"],[1,"flex","justify-between","items-center","pt-4","border-t"],[1,"flex","justify-between","items-center"],[1,"flex","justify-between","items-center","border-t","pt-4"],[1,"flex","sm:flex-row","flex-col","gap-2.5","mt-6"],["mat-flat-button","",1,"w-full","bg-crediblue-50","text-white","py-2","px-4","rounded-lg",3,"click","disabled"],[3,"diameter","mode"],["mat-flat-button","",1,"w-full","bg-crediorange-100","text-white","py-2","px-4","rounded-lg",3,"click","disabled"]],template:function(e,n){if(e&1){let c=q();r(0,"div",2)(1,"div",3)(2,"div",4),a(3),t(),r(4,"mat-stepper",5,0)(6,"mat-step",6)(7,"div",7)(8,"form",8)(9,"mat-form-field",9)(10,"mat-label"),a(11,"Tipo de documento"),t(),r(12,"mat-select",10),f(13,tt,2,1,"ng-container",11),_(14,"async"),t()(),r(15,"mat-form-field",12)(16,"mat-label"),a(17,"N\xFAmero de identificaci\xF3n"),t(),C(18,"input",13),f(19,rt,3,2,"mat-error"),t(),f(20,nt,2,5,"fuse-alert",14),r(21,"button",15),S("click",function(){return x(c),y(n.onSearch())}),a(22,"Consultar"),t()()()(),r(23,"mat-step",16)(24,"div",9)(25,"form",17)(26,"div",18)(27,"mat-form-field",9)(28,"mat-label"),a(29,"Primer nombre"),t(),C(30,"input",19),t(),r(31,"mat-form-field",9)(32,"mat-label"),a(33,"Segundo nombre"),t(),C(34,"input",19),t()(),r(35,"div",18)(36,"mat-form-field",9)(37,"mat-label"),a(38,"Primer apellido"),t(),C(39,"input",19),t(),r(40,"mat-form-field",9)(41,"mat-label"),a(42,"Segundo apellido"),t(),C(43,"input",19),t()(),r(44,"div",18)(45,"mat-form-field",9)(46,"mat-label"),a(47,"Identificaci\xF3n"),t(),C(48,"input",19),t(),r(49,"mat-form-field",9)(50,"mat-label"),a(51,"Email"),t(),C(52,"input",19),t()(),r(53,"div",20)(54,"mat-form-field",9)(55,"mat-label"),a(56,"Cr\xE9dito / Cupo disponible"),t(),C(57,"input",19),t()()(),r(58,"div",21)(59,"button",22),a(60,"Anterior"),t(),r(61,"button",23),a(62,"Siguiente"),t()()()(),r(63,"mat-step",24)(64,"div",25)(65,"form",17)(66,"div",20)(67,"mat-form-field",12)(68,"mat-label"),a(69,"N\xFAmero de factura"),t(),C(70,"input",26),t()(),r(71,"div",18)(72,"mat-form-field",12)(73,"mat-label"),a(74,"Tipo consumo"),t(),r(75,"mat-select",27,1),f(77,lt,2,1,"ng-container",11),_(78,"async"),t()()(),r(79,"div",20)(80,"mat-form-field",12)(81,"mat-label"),a(82,"Valor"),t(),C(83,"input",28),f(84,dt,3,2,"mat-error",11),t()()(),r(85,"div",21)(86,"button",22),a(87,"Anterior"),t(),r(88,"button",29),S("click",function(){return x(c),y(n.onSave())}),a(89,"Pagar"),t()()()(),r(90,"mat-step",30),f(91,ct,49,15,"div",31),t()()()()}e&2&&(o(3),P(" ","Detalle consumo"," "),o(),m("orientation","vertical")("linear",!0)("animationDuration","500"),o(2),m("stepControl",n.firstFormGroup)("editable",!1),o(2),m("formGroup",n.firstFormGroup),o(4),m("formControlName","idTipoDoc"),o(),m("ngIf",D(14,44,n.tiposDocumentos$)),o(5),m("formControlName","numDocumento"),o(),b(n.firstFormGroup.get("numDocumento").dirty||n.firstFormGroup.get("numDocumento").touched?19:-1),o(),m("ngIf",n.showAlert),o(),m("disabled",n.firstFormGroup.invalid)("ngClass",X(48,Ze,n.firstFormGroup.valid,n.firstFormGroup.invalid)),o(2),m("stepControl",n.secondFormGroup)("editable",!1),o(2),m("formGroup",n.secondFormGroup),o(5),m("formControlName","primerNombre")("readonly",!0),o(4),m("formControlName","segundoNombre")("readonly",!0),o(5),m("formControlName","primerApellido")("readonly",!0),o(4),m("formControlName","segundoApellido")("readonly",!0),o(5),m("formControlName","numDoc")("readonly",!0),o(4),m("formControlName","correo")("readonly",!0),o(5),m("formControlName","credito")("readonly",!0),o(4),m("disabled",n.secondFormGroup.invalid),o(2),m("stepControl",n.thirdFormGroup)("editable",!1),o(2),m("formGroup",n.thirdFormGroup),o(5),m("formControlName","numeroFactura"),o(5),m("formControlName","idTipoConsumo"),o(2),m("ngIf",D(78,46,n.tipoConsumo$)),o(6),m("formControlName","montoConsumo")("mask","separator.0"),o(),m("ngIf",n.montoConsumo.dirty||n.montoConsumo.touched),o(4),m("disabled",n.thirdFormGroup.invalid),o(2),m("stepControl",n.thirdFormGroup),o(),m("ngIf",n.detaleConsumo))},dependencies:[$e,Be,Fe,xe,he,be,ge,ue,Ee,de,ce,pe,Oe,oe,me,Ne,ee,te,De,ye,Se,se,Le,Ae,w,E,Z,qe,we],styles:[".mat-step-header .mat-step-icon-selected,   .mat-step-header .mat-step-icon-state-done,   .mat-step-header .mat-step-icon-state-edit{background-color:#155ee9!important;color:#fff}"],data:{animation:ve}});let i=s;return i})();function A(i){return s=>{let d=s.value;return console.log(i),console.log(d),d>i?{notEqual:!0}:null}}var ro=[{path:"",component:k},{path:":tipo/:num",component:k}];export{ro as default};
