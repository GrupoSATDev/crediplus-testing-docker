import{a as T}from"./chunk-6IEWE3OU.js";import{a as Q,b as W}from"./chunk-SZPIMU4Q.js";import{a as J}from"./chunk-GRUKYV62.js";import"./chunk-T2JYV3CV.js";import{c as N,r as V}from"./chunk-ZWQDSRGM.js";import{a as K}from"./chunk-FJXBOPPW.js";import{C as z,s as H,z as q}from"./chunk-72YUQRCJ.js";import{_ as L,ca as U}from"./chunk-E54QLSYT.js";import"./chunk-7HDWK74Y.js";import{b as I}from"./chunk-C2VUAL6V.js";import{e as A,f as G,i as h,k as v,p as E,w as R,y as w,z as B}from"./chunk-6D7RVOMY.js";import{Cb as r,Db as o,Eb as P,Qb as u,Yb as n,Za as s,Zb as p,_a as M,ac as O,ba as g,bc as C,cc as k,ga as c,ha as l,jc as S,ka as y,kc as F,lc as $,pb as f,q as x,rb as m,yb as _}from"./chunk-T2GNEYCX.js";import"./chunk-NEB6MB4Y.js";var j=(()=>{let i=class i{constructor(t,e){this._http=t,this.appSettings=e}getCobros(){return this._http.get(this.appSettings.cobroTrabajadores.url.base)}getCobroEmpleado(t){return this._http.get(`${this.appSettings.cobroTrabajadores.url.base}/${t}`)}getCobrosGrid(t){return this._http.get(`${this.appSettings.cobroTrabajadores.url.baseTabla}/${t}`)}getCobroTrabajador(){return this._http.get(this.appSettings.cobroTrabajadores.url.baseCard)}};i.\u0275fac=function(e){return new(e||i)(c(E),c(I))},i.\u0275prov=g({token:i,factory:i.\u0275fac,providedIn:"root"});let a=i;return a})();var X=(()=>{let i=class i{constructor(t,e){this._http=t,this.appSettings=e}getEstadoCreditos(){return this._http.get(this.appSettings.estadoCreditos.url.base)}getEstadoCobros(){return this._http.get(this.appSettings.estadoCreditos.url.baseCobros)}};i.\u0275fac=function(e){return new(e||i)(c(E),c(I))},i.\u0275prov=g({token:i,factory:i.\u0275fac,providedIn:"root"});let a=i;return a})();function it(a,i){if(a&1&&(r(0,"div",3)(1,"div",5)(2,"fuse-card",6)(3,"div",7)(4,"div",8)(5,"span",9),n(6,"Fecha pr\xF3ximo pago:"),o(),r(7,"span",10),n(8),o()(),r(9,"div",8)(10,"span",9),n(11,"Pr\xF3ximo pago:"),o(),r(12,"span",10),n(13),o()(),r(14,"div",8)(15,"span",9),n(16,"Deuda total:"),o(),r(17,"span",10),n(18),o()(),r(19,"div",8)(20,"span",9),n(21,"Estado:"),o(),r(22,"span",10),n(23),o()(),r(24,"div",8)(25,"span",9),n(26,"Estudio cr\xE9dito:"),o(),r(27,"span",10),n(28,"Por definir"),o()(),r(29,"div",8)(30,"span",9),n(31,"Estudio pl\xE1stico:"),o(),r(32,"span",10),n(33,"Por definir"),o()()()()()()),a&2){let d=u();s(8),p(d.data.fechaCobro),s(5),p(d.data.montoProximoPago),s(5),p(d.data.deudaTotal),s(5),p(d.data.nombreEstadoCredito)}}function ot(a,i){a&1&&(r(0,"div",4)(1,"div",11)(2,"fuse-alert",12)(3,"span",13),n(4,"Informaci\xF3n"),o(),n(5," No tienes compromisos pendientes en este momento. "),o()()()),a&2&&(s(2),m("type","info")("appearance","outline"))}var Y=(()=>{let i=class i{constructor(t){this._matDialog=t,this.datePipe=l(h),this.router=l(w),this.estadoDatosService=l(Q),this.currencyPipe=l(v),this.cobroTrabadorService=l(j),this.estadoCreditosService=l(X),this.fb=l(q),this.estados=new H([""]),this.buttons=[{label:"View",icon:"visibility",action:e=>{console.log("Editing",e),this.selectedData=e,this.router.navigate(["pages/gestion-cobros/cobros/cobro",this.selectedData.idTrabajador])}}],this.Object=Object}cobros(){this.subcription$=this.cobroTrabadorService.getCobroTrabajador().pipe(x(t=>(t.data.fechaCobro=this.datePipe.transform(t.data.fechaCobro,"dd/MM/yyyy"),t.data.deudaTotal=this.currencyPipe.transform(t.data.deudaTotal,"USD","symbol","1.2-2"),t.data.montoProximoPago=this.currencyPipe.transform(t.data.montoProximoPago,"USD","symbol","1.2-2"),t))).subscribe(t=>{t?(console.log(t),this.data=t.data):this.data={}},t=>{this.data={}})}getCobros(){this.subcription$=this.cobroTrabadorService.getCobros().pipe(x(t=>(t.data.forEach(e=>{e.estado?e.estado=T.ACTIVO:e.estado=T.INACTIVO}),t)),x(t=>(t.data.forEach(e=>{e.fechaCobro=this.datePipe.transform(e.fechaCobro,"dd/MM/yyyy"),e.valorPendiente=this.currencyPipe.transform(e.valorPendiente,"USD","symbol","1.2-2"),e.valorPago=e.valorPago?this.currencyPipe.transform(e.valorPago,"USD","symbol","1.2-2"):"-"}),t))).subscribe(t=>{t?this.data=t.data:this.data=[]},t=>{this.data=[]})}listenGrid(){this.estadoDatosService.stateGrid.asObservable().subscribe(e=>{})}ngOnDestroy(){this.subcription$.unsubscribe()}ngOnInit(){this.listenGrid(),this.cobros()}};i.\u0275fac=function(e){return new(e||i)(M(V))},i.\u0275cmp=y({type:i,selectors:[["app-grid-cobros-empleados"]],standalone:!0,features:[O([h,v]),C],decls:6,vars:1,consts:[[1,"bg-card","flex","min-w-0","flex-auto","flex-col","dark:bg-transparent","sm:absolute","sm:inset-0","sm:overflow-hidden"],[1,"relative","flex","flex-0","flex-col","border-b","px-6","py-8","sm:flex-row","sm:items-center","sm:justify-between","md:px-8"],[1,"text-3xl","font-semibold","tracking-tight"],[1,"flex","flex-auto","overflow-hidden"],[1,"inset-0","min-w-0","overflow-auto","print:overflow-visible"],[1,"flex","flex-auto","flex-row","items-baseline","flex-wrap","gap-2.5","justify-center","overflow-hidden","sm:overflow-y-auto","bg-gray-100","sm:p-2"],[1,"filter-list","flex","w-full","max-w-lg","flex-col","p-6","sm:p-8","mt-4","shadow-lg","rounded-lg","bg-white"],[1,"space-y-6"],[1,"flex","justify-between","items-center"],[1,"font-semibold","text-gray-700"],[1,"text-md","text-secondary"],[1,"inline-block","p-4","sm:p-8","print:p-0","w-full"],[3,"type","appearance"],["fuseAlertTitle",""]],template:function(e,b){e&1&&(r(0,"div",0)(1,"div",1)(2,"div",2),n(3,"Pagos pendientes"),o()(),f(4,it,34,4,"div",3)(5,ot,6,2,"div",4),o()),e&2&&(s(4),_(b.data&&b.Object.keys(b.data).length>0?4:5))},dependencies:[z,W,K]});let a=i;return a})();var rt=()=>["/pages/gestion-cobros/cobros"];function at(a,i){if(a&1&&(r(0,"div",13),P(1,"mat-divider"),r(2,"div",14)(3,"div")(4,"h3",15),n(5,"Fecha de compra"),o()(),r(6,"p",16),n(7),S(8,"date"),o()(),r(9,"div",14)(10,"div")(11,"h3",15),n(12,"Valor pendiente"),o()(),r(13,"p",16),n(14),S(15,"currency"),o()(),r(16,"div",17)(17,"p",15),n(18,"Valor cuota"),o(),r(19,"p",16),n(20),S(21,"currency"),o()(),r(22,"div",18)(23,"p",15),n(24,"Cantidad cuotas"),o(),r(25,"p",16),n(26),o()(),r(27,"div",19)(28,"p",15),n(29,"Estado "),o(),r(30,"p",16),n(31),o()()()),a&2){let d=i.$implicit;s(7),p($(8,5,d.fechaCobro,"dd/MM/yyyy")),s(7),p(F(15,8,d.valorPendiente)),s(6),p(F(21,10,d.montoCuota)),s(6),p(d.numCuota),s(5),p(d.nombreEstadoCredito)}}function nt(a,i){if(a&1&&(r(0,"div",10)(1,"div",11),f(2,at,32,12,"div",12),o()()),a&2){let d=u(2);s(2),m("ngForOf",d.detalle)}}function st(a,i){if(a&1&&(r(0,"div",8),f(1,nt,3,1,"div",9),o()),a&2){let d=u();s(),m("ngIf",d.detalle)}}var Z=(()=>{let i=class i{constructor(){this.router=l(w),this.activatedRoute=l(R),this.cobroTrabadorService=l(j),this.idCredito=""}ngOnDestroy(){}ngOnInit(){this.idCredito=this.activatedRoute.snapshot.paramMap.get("id"),this.getDetalle(this.idCredito)}getDetalle(t){this.subcription$=this.cobroTrabadorService.getCobroEmpleado(t).subscribe(e=>{console.log(e),this.detalle=e.data})}};i.\u0275fac=function(e){return new(e||i)},i.\u0275cmp=y({type:i,selectors:[["app-form-cobros-empleados"]],standalone:!0,features:[C],decls:10,vars:4,consts:[["cdkScrollable","",1,"absolute","inset-0","min-w-0","overflow-auto","print:overflow-visible"],[1,"inline-block","p-6","sm:p-10","print:p-0","w-full"],[1,"bg-card","shadow","print:bg-transparent","print:p-0","print:shadow-none","rounded-2xl","max-w-xl","mx-auto","overflow-hidden"],[1,"bg-crediblue-50","px-6","py-4","flex","items-center","justify-between"],["mat-button","",1,"flex","items-center",3,"routerLink"],[1,"text-white",3,"svgIcon"],[1,"text-xl","font-bold","text-white"],["class","p-6",4,"ngIf"],[1,"p-6"],["class","w-full h-full px-4",4,"ngIf"],[1,"w-full","h-full","px-4"],[1,"max-w-2xl","mx-auto","p-4","bg-white","shadow-lg","rounded-lg"],["class","space-y-4 mb-12",4,"ngFor","ngForOf"],[1,"space-y-4","mb-12"],[1,"flex","justify-between","items-center","border-b","pb-2"],[1,"text-lg","font-semibold","text-gray-700"],[1,"text-lg","font-bold","text-gray-800"],[1,"flex","justify-between","items-center"],[1,"flex","justify-between","items-center","pt-4","border-t"],[1,"flex","justify-between","items-center","border-t","pt-4"]],template:function(e,b){e&1&&(r(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div")(5,"a",4),P(6,"mat-icon",5),o()(),r(7,"h2",6),n(8,"Cobro trabajadores"),o()(),f(9,st,2,1,"div",7),o()()()),e&2&&(s(5),m("routerLink",k(3,rt)),s(),m("svgIcon","heroicons_outline:arrow-long-left"),s(3),m("ngIf",b.detalle))},dependencies:[N,v,h,L,U,G,B,A,J]});let a=i;return a})();var Lt=[{path:"",component:Y},{path:"cobro/:id",component:Z}];export{Lt as default};
