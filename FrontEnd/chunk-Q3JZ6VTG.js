import{a as We}from"./chunk-BD7XBA7W.js";import{a as B}from"./chunk-KBV34E5A.js";import{a as He}from"./chunk-WM2XU7DQ.js";import{a as Ze}from"./chunk-CGCMHNFF.js";import{a as ze}from"./chunk-N7CDUKB2.js";import{a as Je}from"./chunk-5WR2EL64.js";import{a as Oe}from"./chunk-U2GYTKTE.js";import{a as Ue,b as Ye,c as Pe}from"./chunk-YP3OYDJU.js";import{a as je}from"./chunk-M6JKQUTX.js";import{a as Re,b as Ge}from"./chunk-QDHNBSMD.js";import{a as Le}from"./chunk-OFI6PGZL.js";import{a as Be}from"./chunk-LNQSU7IH.js";import{b as W}from"./chunk-YHNXG437.js";import{a as z}from"./chunk-VOLXTRGQ.js";import{a as Z}from"./chunk-6IEWE3OU.js";import{a as Ve}from"./chunk-PS6I32XU.js";import{a as Ae}from"./chunk-JC77WSFI.js";import{a as $e}from"./chunk-YDQKZREE.js";import{g as De}from"./chunk-2XRFSBL3.js";import{a as he,b as ve,c as Ce}from"./chunk-BF24YLJO.js";import"./chunk-CNRP5CR4.js";import{C as Me,F as ke,J as O,b as Se,e as be,i as A,j as _e,l as ye,p as Ie,q as Te,u as Fe,x as Ne,y as we}from"./chunk-D3YOWHEC.js";import"./chunk-AIQUJILU.js";import{Q as fe,R as ue,ba as ge,ga as V,la as xe}from"./chunk-V35GW63T.js";import"./chunk-AUCKEBH6.js";import{b as Ee}from"./chunk-2VASWO2B.js";import{Cb as S,Cc as pe,Dc as L,Ea as ae,Lb as j,Mb as c,Mc as de,Nb as D,Ob as H,Qa as s,Ra as k,Ub as me,Vb as $,_ as b,ba as re,bc as E,cc as y,ga as P,gb as v,ha as u,ib as m,ma as M,q as ne,tb as l,ub as a,vb as h,wa as T,wb as _,xa as F,xb as x,yc as le,zb as se,zc as ce}from"./chunk-YBEOGPR3.js";import{a as I,d as w}from"./chunk-NEB6MB4Y.js";var qe=(()=>{let e=class e{constructor(o,i){this._http=o,this.appSettings=i}getTiposEmpresas(){return this._http.get(this.appSettings.tiposEmpresas.url.base)}};e.\u0275fac=function(i){return new(i||e)(P(de),P(Ee))},e.\u0275prov=re({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();var it=Math.pow(10,8)*24*60*60*1e3,zt=-it;var J=6e4,Q=36e5;var ot=3600;var Ke=ot*24,Bt=Ke*7,nt=Ke*365.2425,rt=nt/12,Rt=rt*3,q=Symbol.for("constructDateFrom");function R(t,e){return typeof t=="function"?t(e):t&&typeof t=="object"&&q in t?t[q](e):t instanceof Date?new t.constructor(e):new Date(e)}function K(t,e){return R(e||t,t)}function Xe(t,e){let n=()=>R(e?.in,NaN),o=e?.additionalDigits??2,i=lt(t),r;if(i.date){let d=ct(i.date,o);r=pt(d.restDateString,d.year)}if(!r||isNaN(+r))return n();let p=+r,f=0,g;if(i.time&&(f=dt(i.time),isNaN(f)))return n();if(i.timezone){if(g=ft(i.timezone),isNaN(g))return n()}else{let d=new Date(p+f),C=K(0,e?.in);return C.setFullYear(d.getUTCFullYear(),d.getUTCMonth(),d.getUTCDate()),C.setHours(d.getUTCHours(),d.getUTCMinutes(),d.getUTCSeconds(),d.getUTCMilliseconds()),C}return K(p+f+g,e?.in)}var G={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},at=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,st=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,mt=/^([+-])(\d{2})(?::?(\d{2}))?$/;function lt(t){let e={},n=t.split(G.dateTimeDelimiter),o;if(n.length>2)return e;if(/:/.test(n[0])?o=n[0]:(e.date=n[0],o=n[1],G.timeZoneDelimiter.test(e.date)&&(e.date=t.split(G.timeZoneDelimiter)[0],o=t.substr(e.date.length,t.length))),o){let i=G.timezone.exec(o);i?(e.time=o.replace(i[1],""),e.timezone=i[1]):e.time=o}return e}function ct(t,e){let n=new RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+e)+"})|(\\d{2}|[+-]\\d{"+(2+e)+"})$)"),o=t.match(n);if(!o)return{year:NaN,restDateString:""};let i=o[1]?parseInt(o[1]):null,r=o[2]?parseInt(o[2]):null;return{year:r===null?i:r*100,restDateString:t.slice((o[1]||o[2]).length)}}function pt(t,e){if(e===null)return new Date(NaN);let n=t.match(at);if(!n)return new Date(NaN);let o=!!n[4],i=N(n[1]),r=N(n[2])-1,p=N(n[3]),f=N(n[4]),g=N(n[5])-1;if(o)return Ct(e,f,g)?ut(e,f,g):new Date(NaN);{let d=new Date(0);return!ht(e,r,p)||!vt(e,i)?new Date(NaN):(d.setUTCFullYear(e,r,Math.max(i,p)),d)}}function N(t){return t?parseInt(t):1}function dt(t){let e=t.match(st);if(!e)return NaN;let n=X(e[1]),o=X(e[2]),i=X(e[3]);return St(n,o,i)?n*Q+o*J+i*1e3:NaN}function X(t){return t&&parseFloat(t.replace(",","."))||0}function ft(t){if(t==="Z")return 0;let e=t.match(mt);if(!e)return 0;let n=e[1]==="+"?-1:1,o=parseInt(e[2]),i=e[3]&&parseInt(e[3])||0;return bt(o,i)?n*(o*Q+i*J):NaN}function ut(t,e,n){let o=new Date(0);o.setUTCFullYear(t,0,4);let i=o.getUTCDay()||7,r=(e-1)*7+n+1-i;return o.setUTCDate(o.getUTCDate()+r),o}var gt=[31,null,31,30,31,30,31,31,30,31,30,31];function et(t){return t%400===0||t%4===0&&t%100!==0}function ht(t,e,n){return e>=0&&e<=11&&n>=1&&n<=(gt[e]||(et(t)?29:28))}function vt(t,e){return e>=1&&e<=(et(t)?366:365)}function Ct(t,e,n){return e>=1&&e<=53&&n>=0&&n<=6}function St(t,e,n){return t===24?e===0&&n===0:n>=0&&n<60&&e>=0&&e<60&&t>=0&&t<25}function bt(t,e){return e>=0&&e<=59}function _t(t,e){if(t&1&&(l(0,"mat-option",36),c(1),a()),t&2){let n=e.$implicit;m("value",n.id),s(),D(n.nombre)}}function xt(t,e){if(t&1&&(_(0),v(1,_t,2,2,"mat-option",35),x()),t&2){let n=e.ngIf;s(),m("ngForOf",n.data)}}function Dt(t,e){if(t&1&&(l(0,"mat-option",36),c(1),a()),t&2){let n=e.$implicit;m("value",n.id),s(),D(n.nombre)}}function Et(t,e){if(t&1&&(_(0),v(1,Dt,2,2,"mat-option",35),x()),t&2){let n=e.ngIf;s(),m("ngForOf",n.data)}}function yt(t,e){if(t&1&&(l(0,"mat-option",36),c(1),a()),t&2){let n=e.$implicit;m("value",n.id),s(),D(n.nombre)}}function It(t,e){if(t&1&&(_(0),v(1,yt,2,2,"mat-option",35),x()),t&2){let n=e.ngIf;s(),m("ngForOf",n.data)}}function Tt(t,e){if(t&1&&(l(0,"mat-option",36),c(1),a()),t&2){let n=e.$implicit;m("value",n.id),s(),D(n.nombre)}}function Ft(t,e){if(t&1&&(_(0),v(1,Tt,2,2,"mat-option",35),x()),t&2){let n=e.ngIf;s(),m("ngForOf",n.data)}}function Nt(t,e){if(t&1&&(l(0,"mat-option",36),c(1),a()),t&2){let n=e.$implicit;m("value",n.id),s(),D(n.nombre)}}function wt(t,e){if(t&1&&(_(0),v(1,Nt,2,2,"mat-option",35),x()),t&2){let n=e.ngIf;s(),m("ngForOf",n.data)}}function Mt(t,e){if(t&1&&(l(0,"mat-option",36),c(1),a()),t&2){let n=e.$implicit;m("value",n.id),s(),D(n.nombre)}}function kt(t,e){if(t&1&&(_(0),v(1,Mt,2,2,"mat-option",35),x()),t&2){let n=e.ngIf;s(),m("ngForOf",n.data)}}var $t={validation:!1},ee=(()=>{let e=class e{constructor(){this.fb=u(Me),this._locacionService=u(Oe),this.empresasService=u(ze),this.dialogRef=u(he),this.fuseService=u(De),this.estadosDatosService=u(z),this.toasService=u(Be),this.tiposEmpresaService=u(qe),this.empresaClienteService=u(B),this.subcripciones=u(He),this.bancosServices=u(We),this.tipoCuentasService=u(Ze),this.destroyedRef=u(ae),this.bancos$=this.bancosServices.getBancos().pipe(b(o=>{let i=o.data,r=this._matData;i&&!r.edit&&this.form.get("idBanco").setValue(i[0].id)})),this.tipoCuentas$=this.tipoCuentasService.getTipoCuentas().pipe(b(o=>{let i=o.data,r=this._matData;i&&!r.edit&&this.form.get("idTipoCuenta").setValue(i[0].id)})),this.departamentos$=this._locacionService.getDepartamentos().pipe(b(o=>{let i=o.data,r=this._matData;if(i&&!r.edit){this.form.get("idDepartamento").setValue(i[0].id);let p=this.form.get("idDepartamento").value;this.getMunicipios(p)}})),this.empresas$=this.empresasService.getEmpresas(),this.tiposEmpresas$=this.tiposEmpresaService.getTiposEmpresas().pipe(b(o=>{let i=o.data,r=this._matData;i&&!r.edit&&this.form.get("idTipoEmpresa").setValue(i[0].id)})),this.subcripciones$=this.subcripciones.getSubcripciones().pipe(b(o=>{let i=o.data,r=this._matData;i&&!r.edit&&this.form.get("idSubscripcion").setValue(i[0].id)})),this._matData=u(ve),this.datePipe=u(L),this.swalService=u(Le)}onSelected(o){let i=o.value;this.getMunicipios(i)}getMunicipios(o){this.municipios$=this._locacionService.getMunicipio(o).pipe(b(i=>{let r=i.data,p=this._matData;r&&!p.edit&&this.form.get("idMunicipio").setValue(r[0].id)}))}ngOnInit(){this.createForm();let o=this._matData;if(o.edit){let i=o.data;this.getEmpresas(i.id)}}onSave(){if(this.form.valid)if(this._matData.edit){let i=this.form.getRawValue(),{idDepartamento:p,fechaCobro:f,porcCobro:g}=i,d=w(i,["idDepartamento","fechaCobro","porcCobro"]),C=this.datePipe.transform(f,"yyyy-MM-dd"),U=I({fechaCobro:C,porcCobro:parseFloat(g)},d);this.fuseService.open(I({},W)).afterClosed().subscribe(ie=>{ie==="confirmed"?this.empresaClienteService.putEmpresaCliente(U).subscribe(Y=>{this.estadosDatosService.stateGrid.next(!0),this.swalService.ToastAler({icon:"success",title:"Registro actualizado con exito!",timer:4e3}),this.closeDialog()},Y=>{this.swalService.ToastAler({icon:"error",title:"Ha ocurrido un error al actualizar el registro!",timer:4e3})}):this.closeDialog()})}else{let o=this.form.getRawValue(),{idDepartamento:p,idEmpresa:f,fechaCobro:g,porcCobro:d}=o,C=w(o,["idDepartamento","idEmpresa","fechaCobro","porcCobro"]),U=this.datePipe.transform(g,"yyyy-MM-dd"),te=I({fechaCobro:U,porcCobro:parseFloat(d)},C);this.fuseService.open(I({},W)).afterClosed().subscribe(Y=>{Y==="confirmed"?this.empresaClienteService.postEmpresaCliente(te).subscribe(oe=>{console.log(oe),this.estadosDatosService.stateGrid.next(!0),this.swalService.ToastAler({icon:"success",title:"Registro Creado o Actualizado con Exito.",timer:4e3}),this.closeDialog()},oe=>{this.swalService.ToastAler({icon:"error",title:"Ha ocurrido un error al crear el registro!",timer:4e3})}):this.closeDialog()})}}getEmpresas(o){this.empresaClienteService.getEmpresaCliente(o).pipe(Je(this.destroyedRef)).subscribe(i=>{if(i){let p=i.data;this.form.patchValue(p);let r=p,{idDepartamento:f,fechaCobro:g}=r,d=w(r,["idDepartamento","fechaCobro"]),C=Xe(g);this.form.patchValue(I({fechaCobro:C},d)),this.municipios$=this._locacionService.getMunicipio(f)}})}createForm(){this.form=this.fb.group({id:[null],nit:[""],razonSocial:[""],correo:[""],telefono:[""],direccion:[""],idDepartamento:[""],idTipoEmpresa:[""],idMunicipio:[""],idSubscripcion:[""],valorSuscripcion:[""],porcCobro:[""],fechaCobro:[""],idTipoCuenta:[""],idBanco:[""],numCuentaBancaria:[""],estado:[!0]})}closeDialog(){this.dialogRef.close()}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=M({type:e,selectors:[["app-form-empresas-clientes"]],standalone:!0,features:[me([L,{provide:ue,useClass:je},{provide:fe,useValue:"en-GB"},Re($t)]),$],decls:112,vars:43,consts:[["twoStepToggle",""],["data",""],["picker",""],[1,"w-full","sm:bg-card","sm:rounded-2xl","sm:mx-0","mx-auto"],[1,""],[1,"mt-8","text-3xl","font-semibold","leading-tight","tracking-tight","text-center"],[1,"mt-8",3,"formGroup"],[1,"font-bold","mb-4","text-2xl"],[1,"flex","flex-col","sm:flex-row","mb-4"],[1,"fcursor-pointer",3,"click"],[1,"font-medium","leading-6"],[1,"ml-4",3,"color","formControlName"],[1,"flex","flex-col","sm:flex-row","mb-4","gap-2"],["floatLabel","always",1,"w-full"],["matInput","","placeholder","Nit",3,"formControlName"],["matInput","","placeholder","Raz\xF3n social",3,"formControlName"],["matInput","","placeholder","Correo electronico",3,"formControlName"],["matInput","","placeholder","Tel\xE9fono",3,"formControlName"],["placeholder","Departamento",3,"selectionChange","formControlName"],[4,"ngIf"],["placeholder","Ciudad",3,"formControlName"],["matInput","","placeholder","Direcci\xF3n",3,"formControlName"],["placeholder","Tipo de empresa",3,"formControlName"],["placeholder","Subscripci\xF3n",3,"formControlName"],["matInput","","mask","separator.0","thousandSeparator",".","placeholder","Valor subcripci\xF3n",3,"formControlName"],["matInput","","placeholder","Porcentaje %","mask","separator.6","thousandSeparator","","decimalMarker",".",3,"formControlName","dropSpecialCharacters"],["matInput","","placeholder","Fecha de cobro",3,"matDatepicker","formControlName"],["matIconSuffix","",3,"for"],[1,"flex","flex-col","sm:flex-row","gap-2.5"],["placeholder","Tipo de cuenta",3,"formControlName"],["placeholder","Bancos",3,"formControlName"],["matInput","","placeholder","N\xFAmero de cuenta",3,"formControlName"],[1,"flex","flex-wrap","justify-end","gap-2.5"],["mat-flat-button","",1,"sm:w-auto","w-full","lg:mt-6","bg-credigray-100","rounded-lg","transition","duration-200","text-white","font-semibold",3,"click","color"],["mat-flat-button","",1,"sm:w-auto","w-full","lg:mt-6","bg-crediblue-50","rounded-lg","transition","duration-200","text-white","font-semibold",3,"click","color"],[3,"value",4,"ngFor","ngForOf"],[3,"value"]],template:function(i,r){if(i&1){let p=se();l(0,"div",3)(1,"div",4)(2,"div",5),c(3),a(),l(4,"form",6)(5,"div")(6,"p",7),c(7,"Informaci\xF3n general"),a(),l(8,"div",8)(9,"div",9),S("click",function(){T(p);let g=j(13);return F(g.toggle())}),l(10,"div",10),c(11),a()(),h(12,"mat-slide-toggle",11,0),a(),l(14,"div",12)(15,"mat-form-field",13)(16,"mat-label"),c(17,"Nit"),a(),h(18,"input",14),a(),l(19,"mat-form-field",13)(20,"mat-label"),c(21,"Raz\xF3n social"),a(),h(22,"input",15),a()(),l(23,"div",12)(24,"mat-form-field",13)(25,"mat-label"),c(26,"Correo"),a(),h(27,"input",16),a(),l(28,"mat-form-field",13)(29,"mat-label"),c(30,"Tel\xE9fono"),a(),h(31,"input",17),a()(),l(32,"div",12)(33,"mat-form-field",13)(34,"mat-label"),c(35,"Departamento"),a(),l(36,"mat-select",18,1),S("selectionChange",function(g){return T(p),F(r.onSelected(g))}),v(38,xt,2,1,"ng-container",19),E(39,"async"),a()(),l(40,"mat-form-field",13)(41,"mat-label"),c(42,"Ciudad"),a(),l(43,"mat-select",20),v(44,Et,2,1,"ng-container",19),E(45,"async"),a()()(),l(46,"div",8)(47,"mat-form-field",13)(48,"mat-label"),c(49,"Direcci\xF3n"),a(),h(50,"input",21),a()()(),l(51,"div")(52,"p",7),c(53,"Informaci\xF3n de contrato"),a(),l(54,"div",12)(55,"mat-form-field",13)(56,"mat-label"),c(57,"Tipo de empresa"),a(),l(58,"mat-select",22),v(59,It,2,1,"ng-container",19),E(60,"async"),a()(),l(61,"mat-form-field",13)(62,"mat-label"),c(63,"Subscripci\xF3n"),a(),l(64,"mat-select",23),v(65,Ft,2,1,"ng-container",19),E(66,"async"),a()()(),l(67,"div",12)(68,"mat-form-field",13)(69,"mat-label"),c(70,"Valor subscripci\xF3n"),a(),h(71,"input",24),a(),l(72,"mat-form-field",13)(73,"mat-label"),c(74,"Porcentaje cobro"),a(),h(75,"input",25),a()(),l(76,"div",8)(77,"mat-form-field",13)(78,"mat-label"),c(79,"Fecha de cobro"),a(),h(80,"input",26)(81,"mat-datepicker-toggle",27)(82,"mat-datepicker",null,2),a()(),l(84,"div")(85,"p",7),c(86,"Informaci\xF3n bancaria"),a(),l(87,"div",28)(88,"mat-form-field",13)(89,"mat-label"),c(90,"Tipo de cuenta"),a(),l(91,"mat-select",29),v(92,wt,2,1,"ng-container",19),E(93,"async"),a()(),l(94,"mat-form-field",13)(95,"mat-label"),c(96,"Bancos"),a(),l(97,"mat-select",30),v(98,kt,2,1,"ng-container",19),E(99,"async"),a()()(),l(100,"div",28)(101,"mat-form-field",13)(102,"mat-label"),c(103,"N\xFAmero de cuenta bancaria"),a(),h(104,"input",31),a()()()(),l(105,"div",32)(106,"button",33),S("click",function(){return T(p),F(r.closeDialog())}),l(107,"span"),c(108," Cancelar "),a()(),l(109,"button",34),S("click",function(){return T(p),F(r.onSave())}),l(110,"span"),c(111," Guardar "),a()()()()()()}if(i&2){let p=j(83);s(3),H(" ",r._matData.edit?"Actualizar empresa":"Agregar empresa"," "),s(),m("formGroup",r.form),s(7),H(" Estado ",r.form.get("estado").value?"Activo":"Inactivo"," "),s(),m("color","primary")("formControlName","estado"),s(6),m("formControlName","nit"),s(4),m("formControlName","razonSocial"),s(5),m("formControlName","correo"),s(4),m("formControlName","telefono"),s(5),m("formControlName","idDepartamento"),s(2),m("ngIf",y(39,31,r.departamentos$)),s(5),m("formControlName","idMunicipio"),s(),m("ngIf",y(45,33,r.municipios$)),s(6),m("formControlName","direccion"),s(8),m("formControlName","idTipoEmpresa"),s(),m("ngIf",y(60,35,r.tiposEmpresas$)),s(5),m("formControlName","idSubscripcion"),s(),m("ngIf",y(66,37,r.subcripciones$)),s(6),m("formControlName","valorSuscripcion"),s(4),m("formControlName","porcCobro")("dropSpecialCharacters",!0),s(5),m("matDatepicker",p)("formControlName","fechaCobro"),s(),m("for",p),s(10),m("formControlName","idTipoCuenta"),s(),m("ngIf",y(93,39,r.tipoCuentas$)),s(5),m("formControlName","idBanco"),s(),m("ngIf",y(99,41,r.bancos$)),s(6),m("formControlName","numCuentaBancaria"),s(2),m("color","primary"),s(3),m("color","primary")}},dependencies:[V,A,O,Se,ke,Fe,ye,Ie,Te,Ne,we,pe,ge,Ae,le,ce,Ye,Pe,Ue,_e,be,Ge,$e],styles:[".custom-dialog-container{width:100%}@media (min-width: 1280px){  .custom-dialog-container{width:50%}}"]});let t=e;return t})();var tt=(()=>{let e=class e{constructor(o,i,r){this._matDialog=o,this.empresaClienteService=i,this.estadoDatosService=r,this.searchTerm="",this.data=[],this.columns=["Nit","Razon social","Correo","Telefono","Direccion","Estado"],this.columnPropertyMap={Nit:"nit","Razon social":"razonSocial",Correo:"correo",Telefono:"telefono",Direccion:"direccion",Estado:"estado"},this.buttons=[{label:"Edit",icon:"edit",action:p=>{console.log("Editing",p),this.selectedData=p,this.onEdit()}}]}onNew(){this._matDialog.open(ee,{autoFocus:!1,data:{edit:!1},maxHeight:"90vh",disableClose:!0,panelClass:"custom-dialog-container"})}onEdit(){this._matDialog.open(ee,{autoFocus:!1,data:{edit:!0,data:this.selectedData},maxHeight:"90vh",disableClose:!0,panelClass:"custom-dialog-container"})}getEmpresas(){this.subcription$=this.empresaClienteService.getEmpresas().pipe(ne(o=>(o.data.forEach(i=>{i.estado?i.estado=Z.ACTIVO:i.estado=Z.INACTIVO}),o))).subscribe(o=>{this.data=o.data})}listenGrid(){this.estadoDatosService.stateGrid.asObservable().subscribe(i=>{i&&this.getEmpresas()})}onSearch(o){let i=o.target;this.searchTerm=i.value.trim().toLowerCase()}ngOnDestroy(){this.subcription$.unsubscribe()}ngOnInit(){this.getEmpresas(),this.listenGrid()}};e.\u0275fac=function(i){return new(i||e)(k(Ce),k(B),k(z))},e.\u0275cmp=M({type:e,selectors:[["app-grid-empresas-clientes"]],standalone:!0,features:[$],decls:15,vars:12,consts:[[1,"bg-card","flex","min-w-0","flex-auto","flex-col","dark:bg-transparent","sm:absolute","sm:inset-0","sm:overflow-hidden"],[1,"relative","flex","flex-0","flex-col","border-b","px-6","py-8","sm:flex-row","sm:items-center","sm:justify-between","md:px-8"],[1,"text-3xl","font-semibold","tracking-tight"],[1,"mt-6","flex","w-full","shrink-0","flex-col","items-center","sm:ml-4","sm:mt-0","sm:flex-row","sm:space-x-2","sm:w-auto"],[1,"fuse-mat-dense","rounded-lg","w-full","sm:w-auto","min-w-64",3,"subscriptSizing"],["matPrefix","",1,"icon-size-5",3,"svgIcon"],["matInput","",3,"input","autocomplete","placeholder"],["mat-flat-button","",1,"mt-2","w-full","bg-crediblue-50","rounded-lg","transition","duration-200","text-white","font-semibold","sm:ml-4","sm:mt-0","sm:w-auto",3,"click","color"],[3,"svgIcon"],[1,"ml-2","mr-1"],[1,"flex","flex-auto","overflow-hidden"],[1,"flex","flex-auto","flex-col","overflow-hidden","sm:mb-18","sm:overflow-y-auto"],[3,"columns","displayedColumns","columnPropertyMap","data","buttons","searchTerm"]],template:function(i,r){i&1&&(l(0,"div",0)(1,"div",1)(2,"div",2),c(3,"Clientes - Aliados"),a(),l(4,"div",3)(5,"mat-form-field",4),h(6,"mat-icon",5),l(7,"input",6),S("input",function(f){return r.onSearch(f)}),a()(),l(8,"button",7),S("click",function(){return r.onNew()}),h(9,"mat-icon",8),l(10,"span",9),c(11,"Agregar"),a()()()(),l(12,"div",10)(13,"div",11),h(14,"app-custom-table",12),a()()()),i&2&&(s(5),m("subscriptSizing","dynamic"),s(),m("svgIcon","heroicons_solid:magnifying-glass"),s(),m("autocomplete","off")("placeholder","Buscar"),s(),m("color","primary"),s(),m("svgIcon","heroicons_outline:plus"),s(5),m("columns",r.columns)("displayedColumns",r.columns)("columnPropertyMap",r.columnPropertyMap)("data",r.data)("buttons",r.buttons)("searchTerm",r.searchTerm))},dependencies:[V,A,xe,O,Ve]});let t=e;return t})();var Yi=[{path:"",component:tt}];export{Yi as default};
