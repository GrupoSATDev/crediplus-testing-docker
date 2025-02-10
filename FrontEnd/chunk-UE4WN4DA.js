import{a as w}from"./chunk-B23YL7VT.js";import{a as Y}from"./chunk-HVQGIO75.js";import{a as X}from"./chunk-WMNOZPY7.js";import{a as v}from"./chunk-6IEWE3OU.js";import{a as W}from"./chunk-HN2IWLXW.js";import{a as M}from"./chunk-H2GGAK7L.js";import{a as Q}from"./chunk-QF5DML3C.js";import"./chunk-DUPGJZ25.js";import"./chunk-Q5IBO7O7.js";import{c as B}from"./chunk-CY7MRQJZ.js";import"./chunk-P63XEOLN.js";import{C as J,F as K,J as T,b as U,i as E,p as L,s as H,w as q}from"./chunk-5EZKXU2X.js";import{b as R,d as P}from"./chunk-UEKZXHJT.js";import"./chunk-GQMDELPL.js";import{ba as z,la as x}from"./chunk-TS7YPRLN.js";import"./chunk-5TY7V3W7.js";import"./chunk-3D4SSKQC.js";import{Ac as $,Cb as b,Dc as k,Ec as u,Hc as f,Mb as p,Nb as N,Qa as i,Ra as F,Vb as y,Wb as S,_ as I,cc as V,dc as A,gb as D,ha as a,ib as n,ma as C,q as d,tb as m,ub as l,vb as c,wb as O,xb as j,zc as G}from"./chunk-IEDNLM77.js";import"./chunk-NEB6MB4Y.js";function oe(s,r){if(s&1&&(m(0,"mat-option",14),p(1),l()),s&2){let g=r.$implicit;n("value",g.id),i(),N(g.nombre)}}function re(s,r){if(s&1&&(O(0),D(1,oe,2,2,"mat-option",13),j()),s&2){let g=r.ngIf;i(),n("ngForOf",g.data)}}var Z=(()=>{let r=class r{constructor(o){this._matDialog=o,this.datePipe=a(u),this.router=a(P),this.estadoDatosService=a(W),this.currencyPipe=a(f),this.cobroTrabadorService=a(w),this.estadoCreditosService=a(Y),this.fb=a(J),this.estados=new H([""]),this.searchTerm="",this.estadoCreditos$=this.estadoCreditosService.getEstadoCobros().pipe(I(e=>{let t=e.data;t&&(this.estados.setValue(t[1].id),this.cobros(t[1].id))})),this.data=[],this.columns=["Nombre completo","Valor proximo a pagar","Deuda total","Empresa","Estado"],this.columnPropertyMap={"Nombre completo":"nombreTrabajador","Valor proximo a pagar":"montoProximoPago","Deuda total":"deudaTotal",Empresa:"nombreSubEmpresa",Estado:"nombreEstadoCredito"},this.buttons=[{label:"Ver",icon:"visibility",action:e=>{console.log("Editing",e),this.selectedData=e,this.router.navigate(["pages/gestion-cobros/cobros/cobro",this.selectedData.idTrabajador])}}]}onSelect(o){let e=o.value;this.cobros(e)}cobros(o){this.subcription$=this.cobroTrabadorService.getCobrosGrid(o).pipe(d(e=>(e.data.forEach(t=>{t.estado?t.estado=v.ACTIVO:t.estado=v.INACTIVO}),e)),d(e=>(e.data.forEach(t=>{t.deudaTotal=this.currencyPipe.transform(t.deudaTotal,"USD","symbol","1.2-2"),t.montoProximoPago=this.currencyPipe.transform(t.montoProximoPago,"USD","symbol","1.2-2")}),e))).subscribe(e=>{e?this.data=e.data:this.data=[]},e=>{this.data=[]})}getCobros(){this.subcription$=this.cobroTrabadorService.getCobros().pipe(d(o=>(o.data.forEach(e=>{e.estado?e.estado=v.ACTIVO:e.estado=v.INACTIVO}),o)),d(o=>(o.data.forEach(e=>{e.fechaCobro=this.datePipe.transform(e.fechaCobro,"dd/MM/yyyy"),e.valorPendiente=this.currencyPipe.transform(e.valorPendiente,"USD","symbol","1.2-2"),e.valorPago=e.valorPago?this.currencyPipe.transform(e.valorPago,"USD","symbol","1.2-2"):"-"}),o))).subscribe(o=>{o?this.data=o.data:this.data=[]},o=>{this.data=[]})}listenGrid(){this.estadoDatosService.stateGrid.asObservable().subscribe(e=>{})}onSearch(o){let e=o.target;this.searchTerm=e.value.trim().toLowerCase()}ngOnDestroy(){this.subcription$.unsubscribe()}ngOnInit(){this.listenGrid()}};r.\u0275fac=function(e){return new(e||r)(F(B))},r.\u0275cmp=C({type:r,selectors:[["app-grid-cobros-empleados"]],standalone:!0,features:[y([u,f]),S],decls:17,vars:14,consts:[[1,"bg-card","flex","min-w-0","flex-auto","flex-col","dark:bg-transparent","sm:absolute","sm:inset-0","sm:overflow-hidden"],[1,"relative","flex","flex-0","flex-col","border-b","px-6","py-8","sm:flex-row","sm:items-center","sm:justify-between","md:px-8"],[1,"text-3xl","font-semibold","tracking-tight"],[1,"mt-6","flex","w-full","shrink-0","flex-col","items-center","gap-2.5","sm:ml-4","sm:mt-0","sm:flex-row","sm:w-1/2"],[1,"fuse-mat-dense","rounded-lg","w-full","sm:w-1/2",3,"subscriptSizing"],["matPrefix","",1,"icon-size-5",3,"svgIcon"],["matInput","",3,"input","autocomplete","placeholder"],[1,"w-full","sm:w-1/2"],[3,"selectionChange","formControl"],[4,"ngIf"],[1,"flex","flex-auto","overflow-hidden"],[1,"flex","flex-auto","flex-col","overflow-hidden","sm:mb-18","sm:overflow-y-auto"],[3,"columns","displayedColumns","columnPropertyMap","data","buttons","searchTerm"],[3,"value",4,"ngFor","ngForOf"],[3,"value"]],template:function(e,t){e&1&&(m(0,"div",0)(1,"div",1)(2,"div",2),p(3,"Historico de Cartera - Trabajadores"),l(),m(4,"div",3)(5,"mat-form-field",4),c(6,"mat-icon",5),m(7,"input",6),b("input",function(h){return t.onSearch(h)}),l()(),m(8,"mat-form-field",7)(9,"mat-label"),p(10,"Estados"),l(),m(11,"mat-select",8),b("selectionChange",function(h){return t.onSelect(h)}),D(12,re,2,1,"ng-container",9),V(13,"async"),l()()()(),m(14,"div",10)(15,"div",11),c(16,"app-custom-table",12),l()()()),e&2&&(i(5),n("subscriptSizing","dynamic"),i(),n("svgIcon","heroicons_solid:magnifying-glass"),i(),n("autocomplete","off")("placeholder","Buscar"),i(4),n("formControl",t.estados),i(),n("ngIf",A(13,12,t.estadoCreditos$)),i(4),n("columns",t.columns)("displayedColumns",t.columns)("columnPropertyMap",t.columnPropertyMap)("data",t.data)("buttons",t.buttons)("searchTerm",t.searchTerm))},dependencies:[M,E,x,T,U,z,Q,G,$,k,K,L,q]});let s=r;return s})();var ee=(()=>{let r=class r{constructor(){this.router=a(P),this.activatedRoute=a(R),this.cobroTrabadorService=a(w),this.idCredito="",this.datePipe=a(u),this.currencyPipe=a(f),this.aesEncriptService=a(X),this.searchTerm="",this.columns=["Fecha de cobro","Nombre completo","Empresa","Concepto","Valor pendiente","Valor cuota","No. cuota","Estado"],this.columnPropertyMap={"Fecha de cobro":"fechaCobro","Nombre completo":"nombreTrabajador",Empresa:"nombreSubEmpresa",Concepto:"tipoConsumo","Valor pendiente":"valorPendiente","Valor cuota":"montoCuota","No. cuota":"numCuota",Estado:"nombreEstadoCredito"}}ngOnDestroy(){}ngOnInit(){this.idCredito=this.activatedRoute.snapshot.paramMap.get("id"),this.getDetalle(this.idCredito)}getDetalle(o){this.subcription$=this.cobroTrabadorService.getCobroEmpleado(o).pipe(d(e=>(e.data.forEach(t=>{t.montoCuota&&(t.montoCuota=this.aesEncriptService.decrypt(t.montoCuota)),t.valorPendiente&&(t.valorPendiente=this.aesEncriptService.decrypt(t.valorPendiente)),t.fechaCobro=this.datePipe.transform(t.fechaCobro,"dd/MM/yyyy"),t.valorPendiente=this.currencyPipe.transform(t.valorPendiente,"USD","symbol","1.2-2"),t.montoCuota=this.currencyPipe.transform(t.montoCuota,"USD","symbol","1.2-2")}),e))).subscribe(e=>{console.log(e),e.data&&(this.detalle=e.data)})}onSearch(o){let e=o.target;this.searchTerm=e.value.trim().toLowerCase()}};r.\u0275fac=function(e){return new(e||r)},r.\u0275cmp=C({type:r,selectors:[["app-form-cobros-empleados"]],standalone:!0,features:[y([u,f]),S],decls:11,vars:9,consts:[[1,"bg-card","flex","min-w-0","flex-auto","flex-col","dark:bg-transparent","sm:absolute","sm:inset-0","sm:overflow-hidden"],[1,"relative","flex","flex-0","flex-col","border-b","px-6","py-8","sm:flex-row","sm:items-center","sm:justify-between","md:px-8"],[1,"text-3xl","font-semibold","tracking-tight"],[1,"mt-6","flex","w-full","shrink-0","flex-col","justify-end","gap-2.5","sm:ml-4","sm:mt-0","sm:flex-row","sm:w-1/2"],[1,"fuse-mat-dense","rounded-lg","w-full","sm:w-1/2",3,"subscriptSizing"],["matPrefix","",1,"icon-size-5",3,"svgIcon"],["matInput","",3,"input","autocomplete","placeholder"],[1,"flex","flex-auto","overflow-hidden"],[1,"flex","flex-auto","flex-col","overflow-hidden","sm:mb-18","sm:overflow-y-auto"],[3,"columns","displayedColumns","columnPropertyMap","data","searchTerm"]],template:function(e,t){e&1&&(m(0,"div",0)(1,"div",1)(2,"div",2),p(3,"Historico de Cartera - Trabajadores"),l(),m(4,"div",3)(5,"mat-form-field",4),c(6,"mat-icon",5),m(7,"input",6),b("input",function(h){return t.onSearch(h)}),l()()()(),m(8,"div",7)(9,"div",8),c(10,"app-custom-table",9),l()()()),e&2&&(i(5),n("subscriptSizing","dynamic"),i(),n("svgIcon","heroicons_solid:magnifying-glass"),i(),n("autocomplete","off")("placeholder","Buscar"),i(3),n("columns",t.columns)("displayedColumns",t.columns)("columnPropertyMap",t.columnPropertyMap)("data",t.detalle)("searchTerm",t.searchTerm))},dependencies:[x,M,E,T]});let s=r;return s})();var Be=[{path:"",component:Z},{path:"cobro/:id",component:ee}];export{Be as default};
