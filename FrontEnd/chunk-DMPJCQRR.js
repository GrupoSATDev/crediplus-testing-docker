import{a as De,b as B}from"./chunk-P4PAYY2C.js";import{a as Ee,b as _e,c as we}from"./chunk-WJEX57WX.js";import"./chunk-D35OUFHA.js";import{a as O}from"./chunk-HN2IWLXW.js";import{a as Ce}from"./chunk-6B6PMKOT.js";import"./chunk-CIRWMTLN.js";import{a as ye}from"./chunk-LUXURQN6.js";import{g as V,h as he,i as ve}from"./chunk-UD2FEJ4L.js";import{a as oe,b as ne,c as re,d as le}from"./chunk-MDZA5IL6.js";import"./chunk-XP7WEH62.js";import{E as ge,F as xe,J as N,b as se,c as de,i as k,l as me,n as pe,p as ue,s as fe,w as be}from"./chunk-KKJSUWDN.js";import{b as ie,d as I}from"./chunk-UEKZXHJT.js";import{h as ae}from"./chunk-L5AVPIHT.js";import{b as ce}from"./chunk-ZVLDBLLW.js";import{a as Se}from"./chunk-BP4Z4LAT.js";import"./chunk-LYM3MK3M.js";import{Ba as G,wa as P}from"./chunk-H26SRIJU.js";import{Ac as M,Cb as C,Eb as v,Ec as w,Hc as D,Lb as X,Mb as o,Nb as u,Nc as te,Ob as U,Pb as W,Qa as s,Vb as Y,Wb as E,Zb as Z,ba as J,cc as b,ec as g,fc as q,ga as R,gb as f,ha as c,ib as m,ma as S,pb as K,q as H,tb as e,ub as t,vb as p,wa as F,wb as L,xa as T,xb as $,yc as ee,zb as Q}from"./chunk-IEDNLM77.js";import{a as A}from"./chunk-NEB6MB4Y.js";var y=function(a){return a.PENDIENTES="e626ea69-e995-4462-be9a-705326114702",a.PAGADOS="e626ea69-e995-4462-be9a-705326114791",a}(y||{});var _=(()=>{let n=class n{constructor(i,r){this._http=i,this.appSettings=r}getCobroAliado(i){return this._http.get(`${this.appSettings.cobroAliado.url.base}/Tabla/${i}`)}getCobroAliados(i){return this._http.get(`${this.appSettings.cobroAliado.url.base}/${i}`)}putCobroAliado(i){let r=i.id;return delete i.id,this._http.put(`${this.appSettings.cobroAliado.url.base}/${r}`,i)}};n.\u0275fac=function(r){return new(r||n)(R(te),R(ce))},n.\u0275prov=J({token:n,factory:n.\u0275fac,providedIn:"root"});let a=n;return a})();function Me(a,n){a&1&&(e(0,"mat-error"),o(1,"La observaci\xF3n es requerida!"),t())}var Ae=(()=>{let n=class n{constructor(){this.inputValue=new fe("",[pe.required]),this._matData=c(ne),this.dialogRef=c(oe),this.router=c(I),this.swalService=c(ye),this.fuseService=c(V),this.cobroAliadoService=c(_),this.estadosDatosService=c(O)}onSave(){let i=this._matData.data,r={idEstadoCobroPago:y.PAGADOS,observacion:this.inputValue.value,id:i.id};console.log(r),this.fuseService.open(A({},ve)).afterClosed().subscribe(x=>{x==="confirmed"?this.cobroAliadoService.putCobroAliado(r).subscribe(h=>{this.estadosDatosService.stateGrid.next(!0),this.swalService.ToastAler({icon:"success",title:"Registro Creado o Actualizado con Exito.",timer:4e3}),this.closeDialog()},h=>{this.swalService.ToastAler({icon:"info",title:h.error.errorMenssages[0],timer:6e3})}):this.closeDialog()})}closeDialog(){this.dialogRef.close()}ngOnDestroy(){}};n.\u0275fac=function(r){return new(r||n)},n.\u0275cmp=S({type:n,selectors:[["app-dialog-cobro-aliado"]],standalone:!0,features:[E],decls:20,vars:7,consts:[[1,"relative","flex","h-full","w-full","flex-col"],[1,"flex","flex-auto","flex-col","items-center","pb-6","sm:flex-row","sm:items-start","sm:pb-8"],[1,"flex","h-10","w-10","flex-0","items-center","justify-center","rounded-full","sm:mr-4","bg-blue-100","text-blue-600","dark:bg-blue-600","dark:text-blue-50"],[3,"svgIcon"],[1,"flex","flex-col","items-center","space-y-1","text-center","sm:mt-0","sm:items-start","sm:pr-8","sm:text-left"],[1,"text-xl","font-medium","leading-6"],[1,"text-secondary"],[1,"mt-4","flex","flex-col","items-center","space-y-1","text-center","sm:mt-0","sm:items-start","sm:text-left"],["floatLabel","always",1,"w-full"],["matInput","","placeholder","Observaciones",3,"formControl"],[4,"ngIf"],[1,"flex","items-center","justify-center","space-x-3","bg-gray-50","py-4","dark:bg-black","dark:bg-opacity-10","sm:justify-end"],["mat-stroked-button","",1,"fuse-mat-button-large","bg-crediorange-100","rounded-lg","transition","duration-200","text-white","font-semibold",3,"matDialogClose"],["mat-flat-button","",1,"fuse-mat-button-large","bg-crediblue-50","hover:bg-crediblue-100","text-white","font-semibold","py-2","px-4","rounded-lg","transition","duration-200",3,"click","color","matDialogClose","disabled"]],template:function(r,d){r&1&&(e(0,"div",0)(1,"div",1)(2,"div",2),p(3,"mat-icon",3),t(),e(4,"div",4)(5,"div",5),o(6," Confirmacion "),t(),e(7,"div",6),o(8," \xBFEst\xE1s seguro que est\xE1 orden se encuentra pagada? "),t()()(),e(9,"div",7)(10,"mat-form-field",8)(11,"mat-label"),o(12,"Observaciones"),t(),p(13,"textarea",9),f(14,Me,2,0,"mat-error",10),t()(),e(15,"div",11)(16,"button",12),o(17," Cancelar "),t(),e(18,"button",13),C("click",function(){return d.onSave()}),o(19," Confirmar "),t()()()),r&2&&(s(3),m("svgIcon","heroicons_solid:question-mark-circle"),s(10),m("formControl",d.inputValue),s(),m("ngIf",d.inputValue.touched&&d.inputValue.hasError("required")),s(2),m("matDialogClose","cancelled"),s(2),m("color","primary")("matDialogClose","confirmed")("disabled",d.inputValue.invalid))},dependencies:[ge,me,ue,P,de,k,G,N,se,M,le,xe,be]});let a=n;return a})();var Ie=(a,n)=>({"bg-green-700":a,"bg-credigray-100":n});function ke(a,n){if(a&1&&(L(0),p(1,"app-custom-table",17),$()),a&2){let l=v(2);s(),m("columns",l.columns)("displayedColumns",l.columns)("columnPropertyMap",l.columnPropertyMap)("data",l.data)("buttons",l.buttons)("searchTerm",l.searchTerm)}}function Pe(a,n){a&1&&(e(0,"div",18)(1,"div",19)(2,"fuse-alert",20)(3,"span",21),o(4,"Informaci\xF3n"),t(),o(5," No hay cobros pendientes hasta el momento. "),t()()()),a&2&&(s(2),m("type","info")("appearance","outline"))}function Ge(a,n){if(a&1&&f(0,ke,2,6,"ng-container",16)(1,Pe,6,2,"ng-template",null,1,q),a&2){let l=X(2),i=v();m("ngIf",i.data.length)("ngIfElse",l)}}function Ve(a,n){if(a&1&&(L(0),p(1,"app-custom-table",17),$()),a&2){let l=v(2);s(),m("columns",l.columns)("displayedColumns",l.columns)("columnPropertyMap",l.columnPropertyMap)("data",l.data)("buttons",l.buttons)("searchTerm",l.searchTerm)}}function Ne(a,n){a&1&&(e(0,"div",18)(1,"div",19)(2,"fuse-alert",20)(3,"span",21),o(4,"Informaci\xF3n"),t(),o(5," No hay cobros pagados hasta el momento. "),t()()()),a&2&&(s(2),m("type","info")("appearance","outline"))}function Oe(a,n){if(a&1&&f(0,Ve,2,6,"ng-container",16)(1,Ne,6,2,"ng-template",null,1,q),a&2){let l=X(2),i=v();m("ngIf",i.data.length)("ngIfElse",l)}}var Fe=(()=>{let n=class n{constructor(){this.datePipe=c(w),this.router=c(I),this.selectedTab=y.PENDIENTES,this.currencyPipe=c(D),this.cobroAliadoService=c(_),this.fuseService=c(V),this.estadosDatosService=c(O),this.searchTerm="",this._matDialog=c(re),this.data=[],this.columns=["Empresa","Fecha inicial","Total","Estado"],this.columnPropertyMap={Empresa:"nombreSubEmpresa","Fecha inicial":"fechaIncial","Fecha final":"fechaFinal",Total:"total",Estado:"nombreEstadoCobro"},this.buttons=[{label:"View",icon:"visibility",action:i=>{console.log("Editing",i),this.selectedData=i,this.router.navigate(["pages/gestion-cobros/cobro-aliado/factura",this.selectedData.id])}},{label:"post_add",icon:"post_add",action:i=>{console.log("Editing",i),this.onUpdateCobro(i)}}],this.buttonsView=[{label:"View",icon:"visibility",action:i=>{console.log("Editing",i),this.selectedData=i,this.router.navigate(["pages/gestion-cobros/cobro-aliado/factura",this.selectedData.id])}}],this.tabChanged=i=>{this.selectedTab=i.index==0?y.PENDIENTES:y.PAGADOS,this.getAliados(this.selectedTab)}}onUpdateCobro(i){this._matDialog.open(Ae,{data:{data:i},width:"30%",disableClose:!0})}onSearch(i){let r=i.target;this.searchTerm=r.value.trim().toLowerCase()}getAliados(i){this.subcription$=this.cobroAliadoService.getCobroAliado(i).pipe(H(r=>(r.data.forEach(d=>{d.fechaCreacion=this.datePipe.transform(d.fechaCreacion,"dd/MM/yyyy"),d.fechaIncial=this.datePipe.transform(d.fechaIncial,"dd/MM/yyyy"),d.fechaFinal=this.datePipe.transform(d.fechaFinal,"dd/MM/yyyy"),d.total=this.currencyPipe.transform(d.total,"USD","symbol","1.2-2")}),r))).subscribe(r=>{r?this.data=r.data:this.data=[]},r=>{this.data=[]})}exportToExcel(i){this.fuseService.open(A({},he)).afterClosed().subscribe(d=>{if(d==="confirmed"){let x=B.json_to_sheet(i),h=B.book_new();B.book_append_sheet(h,x,"Sheet1"),De(h,"exported_data.xlsx")}})}listenGrid(){this.estadosDatosService.stateGrid.asObservable().subscribe(r=>{r&&this.getAliados(this.selectedTab)})}ngOnDestroy(){this.subcription$.unsubscribe()}ngOnInit(){this.getAliados(this.selectedTab),this.listenGrid()}};n.\u0275fac=function(r){return new(r||n)},n.\u0275cmp=S({type:n,selectors:[["app-grid-cobro-aliados"]],standalone:!0,features:[Y([w,D]),E],decls:19,vars:11,consts:[["tabGroup",""],["noData",""],[1,"bg-card","flex","min-w-0","flex-auto","flex-col","dark:bg-transparent","sm:absolute","sm:inset-0","sm:overflow-hidden"],[1,"relative","flex","flex-0","flex-col","border-b","px-6","py-8","sm:flex-row","sm:items-center","sm:justify-between","md:px-8"],[1,"text-3xl","font-semibold","tracking-tight"],[1,"mt-6","flex","w-full","shrink-0","flex-col","items-center","sm:ml-4","sm:mt-0","sm:flex-row","sm:space-x-2","sm:w-auto"],[1,"fuse-mat-dense","rounded-lg","w-full","sm:w-auto","min-w-64",3,"subscriptSizing"],["matPrefix","",1,"icon-size-5",3,"svgIcon"],["matInput","",3,"input","autocomplete","placeholder"],["mat-flat-button","",1,"sm:w-auto","w-full","sm:mt-0","mt-2","rounded-lg","transition","duration-200","text-white","font-semibold",3,"click","color","ngClass","disabled"],[1,"flex","flex-auto","overflow-hidden"],[1,"flex","flex-auto","flex-col","overflow-hidden","sm:mb-18","sm:overflow-y-auto"],["mat-stretch-tabs","false",1,"sm:px-2",3,"selectedTabChange","animationDuration"],["label","Pendientes por pagar"],["matTabContent",""],["label","Pagados"],[4,"ngIf","ngIfElse"],[3,"columns","displayedColumns","columnPropertyMap","data","buttons","searchTerm"],[1,"inset-0","min-w-0","overflow-auto","print:overflow-visible"],[1,"inline-block","p-4","sm:p-2","print:p-0","w-full"],[3,"type","appearance"],["fuseAlertTitle",""]],template:function(r,d){if(r&1){let x=Q();e(0,"div",2)(1,"div",3)(2,"div",4),o(3,"Subscripciones"),t(),e(4,"div",5)(5,"mat-form-field",6),p(6,"mat-icon",7),e(7,"input",8),C("input",function(j){return F(x),T(d.onSearch(j))}),t()(),e(8,"button",9),C("click",function(){return F(x),T(d.exportToExcel(d.data))}),e(9,"span"),o(10," Exportar "),t()()()(),e(11,"div",10)(12,"div",11)(13,"mat-tab-group",12,0),C("selectedTabChange",function(j){return F(x),T(d.tabChanged(j))}),e(15,"mat-tab",13),f(16,Ge,3,2,"ng-template",14),t(),e(17,"mat-tab",15),f(18,Oe,3,2,"ng-template",14),t()()()()()}r&2&&(s(5),m("subscriptSizing","dynamic"),s(),m("svgIcon","heroicons_solid:magnifying-glass"),s(),m("autocomplete","off")("placeholder","Buscar"),s(),m("color","primary")("ngClass",Z(8,Ie,d.data.length,!d.data.length))("disabled",!d.data.length),s(5),m("animationDuration","500"))},dependencies:[Ce,k,G,N,M,we,Se,_e,Ee,P,ee]});let a=n;return a})();function Be(a,n){if(a&1&&(e(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5),o(6," Orden "),t(),e(7,"div",6),o(8),t(),e(9,"div",7)(10,"div",8),o(11),t()(),e(12,"div",9),o(13," Periodo cobrado "),t(),e(14,"div",10),o(15," Fecha inicial "),t(),e(16,"div",11),o(17),b(18,"date"),t(),e(19,"div",10),o(20," Fecha final "),t(),e(21,"div",11),o(22),b(23,"date"),t(),e(24,"div",10),o(25," Tipo de subscripci\xF3n "),t(),e(26,"div",11),o(27),t(),e(28,"div",10),o(29," Total "),t(),e(30,"div",11),o(31),b(32,"currency"),t(),e(33,"div",10),o(34," Observaci\xF3nes "),t(),e(35,"div",11),o(36),t(),e(37,"div",10),o(38," Estado "),t(),e(39,"div",11),o(40),t()(),e(41,"div",12)(42,"div",13),p(43,"img",14),t(),e(44,"div",15)(45,"div"),o(46,"Calle 70B Cra 41 # 187"),t(),e(47,"div"),o(48,"Barranquilla - Atlantico"),t(),e(49,"div"),o(50,"+57 301 2523319"),t(),e(51,"div"),o(52,"info@crediplus.com.co"),t(),e(53,"a",16),o(54,"crediplus.com.co"),t()()()(),e(55,"div",17)(56,"div",18),o(57," Concepto "),t(),e(58,"div",19),o(59," Total "),t(),p(60,"div",20),e(61,"div",21),o(62),b(63,"date"),b(64,"date"),t(),e(65,"div",22),o(66),b(67,"currency"),t(),p(68,"div",20)(69,"div",23),e(70,"div",24),o(71," Subtotal "),t(),e(72,"div",25),o(73),b(74,"currency"),t(),p(75,"div",26),e(76,"div",27),o(77," Total a pagar "),t(),e(78,"div",28),o(79),b(80,"currency"),t()()()()()),a&2){let l=v();s(8),u(l.detalleFactura.consecutivo),s(3),U("Empresa: ",l.detalleFactura.nombreSubEmpresa,""),s(6),u(g(18,13,l.detalleFactura.fechaIncial,"dd/MM/yyyy")),s(5),u(g(23,16,l.detalleFactura.fechaFinal,"dd/MM/yyyy")),s(5),u(l.detalleFactura.subscripcion),s(4),u(g(32,19,l.detalleFactura.total,"USD")),s(5),u(l.detalleFactura.observacion),s(4),u(l.detalleFactura.nombreEstadoCobro),s(22),W(" Subscripci\xF3n a plataforma CrediPlus durante el periodio ",g(63,22,l.detalleFactura.fechaIncial,"dd/MM/yyyy")," - ",g(64,25,l.detalleFactura.fechaFinal,"dd/MM/yyyy")," "),s(4),u(g(67,28,l.detalleFactura.detalleCobroAliados[0].valor,"USD")),s(7),u(g(74,31,l.detalleFactura.total,"USD")),s(6),U(" ",g(80,34,l.detalleFactura.total,"USD")," ")}}var Te=(()=>{let n=class n{constructor(){this.cobroAliadoService=c(_),this.activatedRoute=c(ie)}ngOnInit(){let i=this.activatedRoute.snapshot.paramMap.get("id");this.getAliado(i)}getAliado(i){this.subcription$=this.cobroAliadoService.getCobroAliados(i).subscribe(r=>{r.data&&(this.detalleFactura=r.data)})}};n.\u0275fac=function(r){return new(r||n)},n.\u0275cmp=S({type:n,selectors:[["app-cobro-aliado-factura"]],standalone:!0,features:[E],decls:1,vars:1,consts:[["cdkScrollable","",1,"absolute","inset-0","min-w-0","overflow-auto","text-center","print:overflow-visible"],[1,"inline-block","p-6","text-left","sm:p-10","print:p-0"],[1,"bg-card","w-240","rounded-2xl","p-16","shadow","print:w-auto","print:rounded-none","print:bg-transparent","print:shadow-none"],[1,"flex","items-start","justify-between"],[1,"grid","grid-cols-2","gap-x-4","gap-y-1"],[1,"text-secondary","text-4xl","tracking-tight"],[1,"text-4xl"],[1,"text-md","mt-6"],[1,"text-xl","font-medium"],[1,"text-secondary","font-medium","tracking-tight","col-span-2"],[1,"text-secondary","font-medium","tracking-tight"],[1,"font-medium"],[1,"dark","-mr-16","grid","auto-cols-max","grid-flow-col","gap-x-8","rounded-l-2xl","bg-accent","px-8","py-6"],[1,"w-24","place-self-center"],["src","images/logo/logo-blanco.svg",1,"w-24"],[1,"border-l","pl-10","text-md"],["target","_blank","href","https://crediplus.com.co"],[1,"mt-12","grid","grid-cols-12","gap-x-1"],[1,"text-secondary","col-span-8","text-lg","font-medium"],[1,"text-secondary","col-span-4","text-right","text-lg","font-medium"],[1,"col-span-12","my-4","border-b"],[1,"col-span-10","text-md","tracking-tight"],[1,"col-span-2","self-center","text-right"],[1,"col-span-12","mt-16"],[1,"text-secondary","col-span-10","self-center","font-medium","tracking-tight"],[1,"col-span-2","text-right","text-lg"],[1,"col-span-12","my-3","border-b"],[1,"text-secondary","col-span-10","self-center","text-2xl","font-medium","tracking-tight"],[1,"col-span-2","text-right","text-2xl","font-medium"]],template:function(r,d){r&1&&f(0,Be,81,37,"div",0),r&2&&K(d.detalleFactura?0:-1)},dependencies:[D,w,ae]});let a=n;return a})();var Ut=[{path:"",component:Fe},{path:"factura/:id",component:Te}];export{Ut as default};
