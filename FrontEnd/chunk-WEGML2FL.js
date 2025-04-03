import{a as ee}from"./chunk-3MX4MELF.js";import{c as D}from"./chunk-SQM6EG5D.js";import{a as c}from"./chunk-FAEUQIFQ.js";import{a as Z,b as y}from"./chunk-P4PAYY2C.js";import{a as K,b as W,c as Y}from"./chunk-TTGDGER3.js";import{a as J}from"./chunk-DTORAJAR.js";import{a as H}from"./chunk-3R6HD5RM.js";import"./chunk-CJO6YW5P.js";import"./chunk-7YBFULQ5.js";import{g as B,h as Q}from"./chunk-QVE5MGEQ.js";import{J as G,i as z}from"./chunk-4PVPKBBG.js";import"./chunk-YKJB7XET.js";import{h as U}from"./chunk-FUOI65R5.js";import{a as $}from"./chunk-73F67TFK.js";import"./chunk-XTYNXB3F.js";import"./chunk-2YYUDHRL.js";import{$a as b,Ad as X,Fb as m,Gb as F,Hb as M,Ka as d,Ob as L,Pb as j,Sb as V,bb as p,fe as N,ga as f,ib as v,ka as P,ke as O,mb as s,nb as l,ob as _,pc as k,q as I,sb as q,ua as x,va as C,vb as g,vc as S,xb as h,xc as R,yc as w,zd as A}from"./chunk-ODJKW74N.js";import{a as E}from"./chunk-NEB6MB4Y.js";var ae=(t,r)=>({"bg-green-700":t,"bg-credigray-100":r});function oe(t,r){if(t&1&&_(0,"app-custom-table",17),t&2){let o=h(2);p("columns",o.columns)("displayedColumns",o.columns)("columnPropertyMap",o.columnPropertyMap)("data",o.data)("searchTerm",o.searchTerm)}}function ie(t,r){t&1&&(s(0,"div",18)(1,"div",19)(2,"fuse-alert",20)(3,"span",21),m(4,"Informaci\xF3n"),l(),m(5," No hay informaci\xF3n hasta el momento. "),l()()()),t&2&&(d(2),p("type","info")("appearance","outline"))}function re(t,r){if(t&1&&b(0,oe,1,5,"app-custom-table",17)(1,ie,6,2,"div",18),t&2){let o=h();v(o.data.length>0?0:1)}}function ne(t,r){if(t&1&&_(0,"app-custom-table",17),t&2){let o=h(2);p("columns",o.columnsLiquidado)("displayedColumns",o.columnsLiquidado)("columnPropertyMap",o.columnPropertyLiquidadoMap)("data",o.data)("searchTerm",o.searchTerm)}}function se(t,r){t&1&&(s(0,"div",18)(1,"div",19)(2,"fuse-alert",20)(3,"span",21),m(4,"Informaci\xF3n"),l(),m(5," No hay informaci\xF3n hasta el momento. "),l()()()),t&2&&(d(2),p("type","info")("appearance","outline"))}function le(t,r){if(t&1&&b(0,ne,1,5,"app-custom-table",17)(1,se,6,2,"div",18),t&2){let o=h();v(o.data.length>0?0:1)}}var te=(()=>{let r=class r{constructor(){this.searchTerm="",this.reportesService=f(ee),this.datePipe=f(S),this.fuseService=f(B),this.currencyPipe=f(w),this.selectedTab="",this.tabDescription="Este reporte muestra las personas que han recibido desembolsos pero a\xFAn no ha realizado el proceso de liquidaci\xF3n para el cobro. ",this.title="Sin liquidar",this.data=[],this.exportData=[],this.columns=["Fecha de desembolso","Trabajador","Identificaci\xF3n","Empresa","Cantidad cuotas","Valor desembolso","Deuda a la fecha","Intereses a la fecha","Valor cuota","Deuda costos"],this.columnsLiquidado=["Fecha de desembolso","Trabajador","Identificaci\xF3n","Empresa","Valor liquidado","Pagos pendientes"],this.columnPropertyMap={"Fecha de desembolso":"fechaDesembolso",Trabajador:"nombreTrabajador",Identificaci\u00F3n:"documentoTrabajador",Empresa:"nombreSubEmpresa","Cantidad cuotas":"cantCuotas","Valor desembolso":"valorDesembolso","Deuda a la fecha":"deudaTotal","Intereses a la fecha":"deudaIntereses","Valor cuota":"valorCuota","Deuda costos":"deudaCobroFijo"},this.columnPropertyLiquidadoMap={"Fecha de desembolso":"fechaDesembolso",Trabajador:"nombreTrabajador",Identificaci\u00F3n:"documentoTrabajador",Empresa:"nombreSubEmpresa","Valor liquidado":"deudaTotal","Pagos pendientes":"pagosPendientes"},this.tabChanged=n=>{n.index===0?(this.title="Sin liquidar: ",this.tabDescription="Este reporte muestra las personas que han recibido desembolsos pero a\xFAn no ha realizado el proceso de liquidaci\xF3n para el cobro. "):(this.title="Liquidado: ",this.tabDescription="Este reporte identifica a las personas que tienen uno o m\xE1s cobros liquidados pero que a\xFAn no ha recibido el pago. ",this.tabNote='Si los intereses a la fecha est\xE1n en $0, es porque solo tiene pendiente por pagar "Costos Adicionales".'),this.selectedTab=n.index==0?"":D.LIQUIDADO,this.loadDeudas(this.selectedTab)},this.CodigoEstadosCreditosLiquidados=D}onSearch(n){let a=n.target;this.searchTerm=a.value.trim().toLowerCase()}ngOnInit(){this.loadDeudas(this.selectedTab)}loadDeudas(n){this.reportesService.getReporteDeudas(n).pipe(I(a=>(a.data.forEach(e=>{e.fechaDesembolso=this.datePipe.transform(e.fechaDesembolso,"dd/MM/yyyy"),e.valorDesembolso=this.currencyPipe.transform(e.valorDesembolso,"USD","symbol","1.2-2"),e.deudaTotal=this.currencyPipe.transform(e.deudaTotal,"USD","symbol","1.2-2"),e.deudaIntereses=this.currencyPipe.transform(e.deudaIntereses,"USD","symbol","1.2-2"),e.valorCuota=this.currencyPipe.transform(e.valorCuota,"USD","symbol","1.2-2"),e.deudaCobroFijo=this.currencyPipe.transform(e.deudaCobroFijo,"USD","symbol","1.2-2")}),a))).subscribe(a=>{a.data?(this.data=a.data,this.convertDataExport(a.data)):this.data=[]})}exportToExcel(n){this.fuseService.open(E({},Q)).afterClosed().subscribe(e=>{if(e==="confirmed"){let i=y.json_to_sheet(n),u=y.book_new();y.book_append_sheet(u,i,"Sheet1"),Z(u,this.selectedTab==""?`Reporte de Deudas Sin liquidar ${this.datePipe.transform(new Date,"dd/MM/yyyy")}.xlsx`:`Reporte de Deudas liquidado ${this.datePipe.transform(new Date,"dd/MM/yyyy")}.xlsx`)}})}convertDataExport(n){let a=n.map(e=>{let i={FechaDeDesembolso:e.fechaDesembolso,Trabajador:e.nombreTrabajador,Identificacion:e.documentoTrabajador,Empresa:e.nombreSubEmpresa};return this.selectedTab==D.LIQUIDADO&&(i.Valorliquidado=c(e.deudaTotal)),this.selectedTab==""&&(i.CantidadCuotas=e.cantCuotas),this.selectedTab==""&&(i.ValorDesembolso=c(e.valorDesembolso)),this.selectedTab==""&&(i.DeudaAlaFecha=c(e.deudaTotal)),this.selectedTab==""&&(i.InteresesAlaFecha=c(e.deudaIntereses)),this.selectedTab==""&&(i.ValorCuota=c(e.valorCuota)),this.selectedTab==""&&(i.DeudaCostos=c(e.deudaCobroFijo)),this.selectedTab==D.LIQUIDADO&&(i.PagosPendientes=e.pagosPendientes),i});this.exportData=a}};r.\u0275fac=function(a){return new(a||r)},r.\u0275cmp=P({type:r,selectors:[["app-reporte-deudas"]],standalone:!0,features:[L([{provide:X,useClass:J},{provide:A,useValue:"en-GB"},S,w,R]),j],decls:23,vars:13,consts:[["tabGroup",""],["cdkScrollable","",1,"bg-card","flex","min-w-0","flex-auto","flex-col","dark:bg-transparent","sm:absolute","sm:inset-0","sm:overflow-hidden"],[1,"relative","flex","flex-0","flex-col","px-6","py-8","sm:flex-row","sm:items-center","sm:justify-between","md:px-8"],[1,"text-3xl","font-semibold","tracking-tight"],[1,"text-md","text-gray-600","mt-2","w-2/3"],[1,"font-bold"],[1,"mt-6","flex","w-full","shrink-0","flex-col","items-center","sm:ml-4","sm:mt-0","sm:flex-row","sm:space-x-2","sm:w-auto"],[1,"fuse-mat-dense","rounded-lg","w-full","sm:w-auto","min-w-64",3,"subscriptSizing"],["matPrefix","",1,"icon-size-5",3,"svgIcon"],["matInput","",3,"input","autocomplete","placeholder"],["mat-flat-button","",1,"w-full","mt-2","sm:mt-0","rounded-lg","transition","duration-200","text-white","font-semibold",3,"click","color","ngClass","disabled"],[1,"flex","flex-auto","overflow-hidden"],[1,"flex","flex-auto","flex-col","overflow-hidden","sm:mb-18","sm:overflow-y-auto"],["mat-stretch-tabs","false",1,"sm:px-2",3,"selectedTabChange","animationDuration"],["label","Sin liquidar"],["matTabContent",""],["label","Liquidado"],[3,"columns","displayedColumns","columnPropertyMap","data","searchTerm"],[1,"inset-0","min-w-0","overflow-auto","print:overflow-visible"],[1,"inline-block","p-4","sm:p-2","print:p-0","w-full"],[3,"type","appearance"],["fuseAlertTitle",""]],template:function(a,e){if(a&1){let i=q();s(0,"div",1)(1,"div",2)(2,"div",3),m(3,"Cartera general trabajador "),s(4,"div",4)(5,"span",5),m(6),l(),m(7),l()(),s(8,"div",6)(9,"mat-form-field",7),_(10,"mat-icon",8),s(11,"input",9),g("input",function(T){return x(i),C(e.onSearch(T))}),l()(),s(12,"button",10),g("click",function(){return x(i),C(e.exportToExcel(e.exportData))}),s(13,"span"),m(14," Exportar "),l()()()(),s(15,"div",11)(16,"div",12)(17,"mat-tab-group",13,0),g("selectedTabChange",function(T){return x(i),C(e.tabChanged(T))}),s(19,"mat-tab",14),b(20,re,2,1,"ng-template",15),l(),s(21,"mat-tab",16),b(22,le,2,1,"ng-template",15),l()()()()()}a&2&&(d(6),F(e.title),d(),M(" ",e.tabDescription," "),d(2),p("subscriptSizing","dynamic"),d(),p("svgIcon","heroicons_solid:magnifying-glass"),d(),p("autocomplete","off")("placeholder","Buscar"),d(),p("color","primary")("ngClass",V(10,ae,e.exportData.length,!e.exportData.length))("disabled",!e.exportData.length),d(5),p("animationDuration","500"))},dependencies:[U,z,O,G,N,k,H,$,Y,W,K]});let t=r;return t})();var je=[{path:"",component:te}];export{je as default};
