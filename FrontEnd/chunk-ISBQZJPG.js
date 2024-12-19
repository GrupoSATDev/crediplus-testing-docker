import{a as M}from"./chunk-HT4TF3FQ.js";import{a as W}from"./chunk-M2NDIJWH.js";import{a as Q}from"./chunk-VOLXTRGQ.js";import{a as b}from"./chunk-6IEWE3OU.js";import{a as E}from"./chunk-PS6I32XU.js";import{a as K}from"./chunk-JC77WSFI.js";import"./chunk-VJ6C6I5J.js";import{c as z}from"./chunk-BF24YLJO.js";import"./chunk-CNRP5CR4.js";import{C as H,F as J,J as x,b as B,i as S,p as U,s as L,w as q}from"./chunk-D3YOWHEC.js";import{b as A,d as C}from"./chunk-FSJGACMT.js";import"./chunk-AIQUJILU.js";import{ba as R,la as P}from"./chunk-V35GW63T.js";import"./chunk-AUCKEBH6.js";import"./chunk-2VASWO2B.js";import{Cb as D,Cc as k,Dc as f,Gc as u,Mb as c,Nb as V,Qa as i,Ra as _,Ub as g,Vb as y,_ as I,bc as j,cc as N,gb as T,ha as a,ib as n,ma as v,q as d,tb as m,ub as l,vb as p,wb as F,xb as O,yc as G,zc as $}from"./chunk-YBEOGPR3.js";import"./chunk-NEB6MB4Y.js";function te(s,r){if(s&1&&(m(0,"mat-option",14),c(1),l()),s&2){let h=r.$implicit;n("value",h.id),i(),V(h.nombre)}}function oe(s,r){if(s&1&&(F(0),T(1,te,2,2,"mat-option",13),O()),s&2){let h=r.ngIf;i(),n("ngForOf",h.data)}}var X=(()=>{let r=class r{constructor(o){this._matDialog=o,this.datePipe=a(f),this.router=a(C),this.estadoDatosService=a(Q),this.currencyPipe=a(u),this.cobroTrabadorService=a(M),this.estadoCreditosService=a(W),this.fb=a(H),this.estados=new L([""]),this.searchTerm="",this.estadoCreditos$=this.estadoCreditosService.getEstadoCobros().pipe(I(e=>{let t=e.data;t&&(this.estados.setValue(t[1].id),this.cobros(t[1].id))})),this.data=[],this.columns=["Nombre completo","Valor proximo a pagar","Deuda total","Empresa","Estado"],this.columnPropertyMap={"Nombre completo":"nombreTrabajador","Valor proximo a pagar":"montoProximoPago","Deuda total":"deudaTotal",Empresa:"nombreSubEmpresa",Estado:"nombreEstadoCredito"},this.buttons=[{label:"View",icon:"visibility",action:e=>{console.log("Editing",e),this.selectedData=e,this.router.navigate(["pages/gestion-cobros/cobros/cobro",this.selectedData.idTrabajador])}}]}onSelect(o){let e=o.value;this.cobros(e)}cobros(o){this.subcription$=this.cobroTrabadorService.getCobrosGrid(o).pipe(d(e=>(e.data.forEach(t=>{t.estado?t.estado=b.ACTIVO:t.estado=b.INACTIVO}),e)),d(e=>(e.data.forEach(t=>{t.deudaTotal=this.currencyPipe.transform(t.deudaTotal,"USD","symbol","1.2-2"),t.montoProximoPago=this.currencyPipe.transform(t.montoProximoPago,"USD","symbol","1.2-2")}),e))).subscribe(e=>{e?this.data=e.data:this.data=[]},e=>{this.data=[]})}getCobros(){this.subcription$=this.cobroTrabadorService.getCobros().pipe(d(o=>(o.data.forEach(e=>{e.estado?e.estado=b.ACTIVO:e.estado=b.INACTIVO}),o)),d(o=>(o.data.forEach(e=>{e.fechaCobro=this.datePipe.transform(e.fechaCobro,"dd/MM/yyyy"),e.valorPendiente=this.currencyPipe.transform(e.valorPendiente,"USD","symbol","1.2-2"),e.valorPago=e.valorPago?this.currencyPipe.transform(e.valorPago,"USD","symbol","1.2-2"):"-"}),o))).subscribe(o=>{o?this.data=o.data:this.data=[]},o=>{this.data=[]})}listenGrid(){this.estadoDatosService.stateGrid.asObservable().subscribe(e=>{})}onSearch(o){let e=o.target;this.searchTerm=e.value.trim().toLowerCase()}ngOnDestroy(){this.subcription$.unsubscribe()}ngOnInit(){this.listenGrid()}};r.\u0275fac=function(e){return new(e||r)(_(z))},r.\u0275cmp=v({type:r,selectors:[["app-grid-cobros-empleados"]],standalone:!0,features:[g([f,u]),y],decls:17,vars:14,consts:[[1,"bg-card","flex","min-w-0","flex-auto","flex-col","dark:bg-transparent","sm:absolute","sm:inset-0","sm:overflow-hidden"],[1,"relative","flex","flex-0","flex-col","border-b","px-6","py-8","sm:flex-row","sm:items-center","sm:justify-between","md:px-8"],[1,"text-3xl","font-semibold","tracking-tight"],[1,"mt-6","flex","w-full","shrink-0","flex-col","items-center","gap-2.5","sm:ml-4","sm:mt-0","sm:flex-row","sm:w-1/2"],[1,"fuse-mat-dense","rounded-lg","w-full","sm:w-1/2",3,"subscriptSizing"],["matPrefix","",1,"icon-size-5",3,"svgIcon"],["matInput","",3,"input","autocomplete","placeholder"],[1,"w-full","sm:w-1/2"],[3,"selectionChange","formControl"],[4,"ngIf"],[1,"flex","flex-auto","overflow-hidden"],[1,"flex","flex-auto","flex-col","overflow-hidden","sm:mb-18","sm:overflow-y-auto"],[3,"columns","displayedColumns","columnPropertyMap","data","buttons","searchTerm"],[3,"value",4,"ngFor","ngForOf"],[3,"value"]],template:function(e,t){e&1&&(m(0,"div",0)(1,"div",1)(2,"div",2),c(3,"Cobro Trabajadores"),l(),m(4,"div",3)(5,"mat-form-field",4),p(6,"mat-icon",5),m(7,"input",6),D("input",function(w){return t.onSearch(w)}),l()(),m(8,"mat-form-field",7)(9,"mat-label"),c(10,"Estados"),l(),m(11,"mat-select",8),D("selectionChange",function(w){return t.onSelect(w)}),T(12,oe,2,1,"ng-container",9),j(13,"async"),l()()()(),m(14,"div",10)(15,"div",11),p(16,"app-custom-table",12),l()()()),e&2&&(i(5),n("subscriptSizing","dynamic"),i(),n("svgIcon","heroicons_solid:magnifying-glass"),i(),n("autocomplete","off")("placeholder","Buscar"),i(4),n("formControl",t.estados),i(),n("ngIf",N(13,12,t.estadoCreditos$)),i(4),n("columns",t.columns)("displayedColumns",t.columns)("columnPropertyMap",t.columnPropertyMap)("data",t.data)("buttons",t.buttons)("searchTerm",t.searchTerm))},dependencies:[E,S,P,x,B,R,K,G,$,k,J,U,q]});let s=r;return s})();var Y=(()=>{let r=class r{constructor(){this.router=a(C),this.activatedRoute=a(A),this.cobroTrabadorService=a(M),this.idCredito="",this.datePipe=a(f),this.currencyPipe=a(u),this.columns=["Fecha de cobro","Empresa","Valor pendiente","Valor cuota","No. cuota","Estado"],this.columnPropertyMap={"Fecha de cobro":"fechaCobro",Empresa:"nombreSubEmpresa","Valor pendiente":"valorPendiente","Valor cuota":"montoCuota","No. cuota":"numCuota",Estado:"nombreEstadoCredito"}}ngOnDestroy(){}ngOnInit(){this.idCredito=this.activatedRoute.snapshot.paramMap.get("id"),this.getDetalle(this.idCredito)}getDetalle(o){this.subcription$=this.cobroTrabadorService.getCobroEmpleado(o).pipe(d(e=>(e.data.forEach(t=>{t.fechaCobro=this.datePipe.transform(t.fechaCobro,"dd/MM/yyyy"),t.valorPendiente=this.currencyPipe.transform(t.valorPendiente,"USD","symbol","1.2-2"),t.montoCuota=this.currencyPipe.transform(t.montoCuota,"USD","symbol","1.2-2")}),e))).subscribe(e=>{console.log(e),this.detalle=e.data})}};r.\u0275fac=function(e){return new(e||r)},r.\u0275cmp=v({type:r,selectors:[["app-form-cobros-empleados"]],standalone:!0,features:[g([f,u]),y],decls:11,vars:8,consts:[[1,"bg-card","flex","min-w-0","flex-auto","flex-col","dark:bg-transparent","sm:absolute","sm:inset-0","sm:overflow-hidden"],[1,"relative","flex","flex-0","flex-col","border-b","px-6","py-8","sm:flex-row","sm:items-center","sm:justify-between","md:px-8"],[1,"text-3xl","font-semibold","tracking-tight"],[1,"mt-6","flex","w-full","shrink-0","flex-col","justify-end","gap-2.5","sm:ml-4","sm:mt-0","sm:flex-row","sm:w-1/2"],[1,"fuse-mat-dense","rounded-lg","w-full","sm:w-1/2",3,"subscriptSizing"],["matPrefix","",1,"icon-size-5",3,"svgIcon"],["matInput","",3,"autocomplete","placeholder"],[1,"flex","flex-auto","overflow-hidden"],[1,"flex","flex-auto","flex-col","overflow-hidden","sm:mb-18","sm:overflow-y-auto"],[3,"columns","displayedColumns","columnPropertyMap","data"]],template:function(e,t){e&1&&(m(0,"div",0)(1,"div",1)(2,"div",2),c(3,"Cobro Trabajadores"),l(),m(4,"div",3)(5,"mat-form-field",4),p(6,"mat-icon",5)(7,"input",6),l()()(),m(8,"div",7)(9,"div",8),p(10,"app-custom-table",9),l()()()),e&2&&(i(5),n("subscriptSizing","dynamic"),i(),n("svgIcon","heroicons_solid:magnifying-glass"),i(),n("autocomplete","off")("placeholder","Buscar"),i(3),n("columns",t.columns)("displayedColumns",t.columns)("columnPropertyMap",t.columnPropertyMap)("data",t.detalle))},dependencies:[P,E,S,x]});let s=r;return s})();var Re=[{path:"",component:X},{path:"cobro/:id",component:Y}];export{Re as default};
