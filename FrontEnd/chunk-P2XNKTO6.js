import{a as Ie}from"./chunk-3MX4MELF.js";import{a as Fe}from"./chunk-NE46MTSM.js";import{a as w}from"./chunk-FAEUQIFQ.js";import{a as Ee,b as _}from"./chunk-P4PAYY2C.js";import{a as xe,b as Te,c as _e}from"./chunk-LZ3ZEVTF.js";import{a as we}from"./chunk-DTORAJAR.js";import{a as Se}from"./chunk-3R6HD5RM.js";import{a as ge}from"./chunk-CJO6YW5P.js";import"./chunk-7YBFULQ5.js";import{g as ie,h as ye}from"./chunk-QVE5MGEQ.js";import{C as ue,E as Ce,F as he,J as be,b as ee,e as te,i as oe,l as se,n as T,p as le,q as ce,s as de,u as me,x as pe,y as fe}from"./chunk-4PVPKBBG.js";import{e as ne}from"./chunk-KAEQCOKJ.js";import"./chunk-YKJB7XET.js";import{h as Z}from"./chunk-FUOI65R5.js";import{a as ve}from"./chunk-73F67TFK.js";import"./chunk-XTYNXB3F.js";import"./chunk-2YYUDHRL.js";import{$a as x,Ad as W,Eb as F,Fb as f,Gb as L,Ka as o,Md as Y,Ob as X,Pb as O,Sb as B,Xb as $,Yb as q,Z as D,bb as r,fe as ae,ga as u,ib as V,ka as P,ke as re,mb as s,nb as n,ob as g,pb as G,pc as z,q as M,qb as R,qc as U,rc as H,sb as N,ua as y,uc as J,va as v,vb as S,vc as I,xb as A,xc as K,yc as j,zd as Q}from"./chunk-ODJKW74N.js";import{a as E,d as k}from"./chunk-NEB6MB4Y.js";var ke=(a,l)=>({"bg-green-700":a,"bg-credigray-100":l});function Me(a,l){if(a&1&&(s(0,"mat-option",22),f(1),n()),a&2){let p=l.$implicit;r("value",p.id),o(),L(p.nombre)}}function De(a,l){if(a&1&&(G(0),x(1,Me,2,2,"mat-option",21),R()),a&2){let p=l.ngIf;o(),r("ngForOf",p.data)}}function Pe(a,l){if(a&1&&(s(0,"div",19)(1,"div",23),g(2,"app-custom-table",24),n()()),a&2){let p=A();o(2),r("columns",p.columns)("displayedColumns",p.columns)("columnPropertyMap",p.columnPropertyMap)("data",p.data)("searchTerm",p.searchTerm)}}function Ve(a,l){a&1&&(s(0,"div",20)(1,"div",25)(2,"fuse-alert",26)(3,"span",27),f(4,"Informaci\xF3n"),n(),f(5," No hay informaci\xF3n hasta el momento. "),n()()()),a&2&&(o(2),r("type","info")("appearance","outline"))}var je=(()=>{let l=class l{constructor(){this.searchTerm="",this.fb=u(ue),this.reportesService=u(Ie),this.datePipe=u(I),this.estados=new de([""]),this.detalleConsumoService=u(Fe),this.detalleConsumo$=this.detalleConsumoService.getEstadoCobros().pipe(D(c=>{let i=c.data;i&&(i.unshift({id:"0",nombre:"Todos"}),this.form.get("idEstadoCredito").setValue(i[0].id))})),this.data=[],this.columns=["Trabajador","Identificaci\xF3n","Tipo de contrato","Empresa","Inicio de contrato","Fin de contrato","Cantidad de cuotas","Fecha de cobro","Valor cuota","Valor sin intereses","Intereses ganados","Estado"],this.columnPropertyMap={Trabajador:"nombreTrabajador",Identificaci\u00F3n:"documetoTrabajador","Tipo de contrato":"tipoContratoTrabajador",Empresa:"nombreSubEmpresa","Inicio de contrato":"fechaInicioContratoTrabajador","Fin de contrato":"fechaFinContratoTrabajador","Cantidad de cuotas":"numCuota","Fecha de cobro":"fechaCobro","Valor cuota":"montoCuota","Valor sin intereses":"montoCuotaSinIntereses","Intereses ganados":"interesesGanados",Estado:"nombreEstadoCredito"},this.aesEncriptService=u(ne),this.currencyPipe=u(j),this.exportData=[],this.fuseService=u(ie)}onSearch(c){let i=c.target;this.searchTerm=i.value.trim().toLowerCase()}onSelect(c){let i=c.value}createForm(){this.form=this.fb.group({idEstadoCredito:["",T.required],fechaInicio:["",T.required],fechaFinal:["",T.required]})}ngOnInit(){this.createForm()}onConsultar(){if(this.form.valid){let c=this.form.getRawValue(),{fechaInicio:i,fechaFinal:e}=c,d=k(c,["fechaInicio","fechaFinal"]),m=this.datePipe.transform(i,"yyyy-MM-dd"),b=this.datePipe.transform(e,"yyyy-MM-dd"),C=E({fechaInicio:m,fechaFinal:b},d);C.idEstadoCredito=="0"&&(C={fechaInicio:C.fechaInicio,fechaFinal:C.fechaFinal,idEstadoCredito:""}),console.log(C),this.reportesService.getReporteCobros(C).pipe(M(h=>(h.data.forEach(t=>{t.fechaCobro=this.datePipe.transform(t.fechaCobro,"dd/MM/yyyy"),t.fechaInicioContratoTrabajador=this.datePipe.transform(t.fechaInicioContratoTrabajador,"dd/MM/yyyy"),t.fechaFinContratoTrabajador=this.datePipe.transform(t.fechaFinContratoTrabajador,"dd/MM/yyyy"),t.montoCuota&&(t.montoCuota=this.aesEncriptService.decrypt(t.montoCuota)),t.montoCuotaSinIntereses&&(t.montoCuotaSinIntereses=this.aesEncriptService.decrypt(t.montoCuotaSinIntereses)),t.interesesGanados&&(t.interesesGanados=this.aesEncriptService.decrypt(t.interesesGanados)),t.montoCuota=this.currencyPipe.transform(t.montoCuota,"USD","symbol","1.2-2"),t.montoCuotaSinIntereses=this.currencyPipe.transform(t.montoCuotaSinIntereses,"USD","symbol","1.2-2"),t.interesesGanados=parseFloat(t.interesesGanados.replace(",",".")),t.interesesGanados=this.currencyPipe.transform(t.interesesGanados,"USD","symbol","1.2-2")}),h))).subscribe(h=>{h.data?(this.data=h.data,this.convertDataExportFijos(h.data)):this.data=[]})}}convertDataExportFijos(c){let i=c.map(e=>({Trabajador:e.nombreTrabajador,Identificaci\u00F3n:e.documetoTrabajador,TipodeContrato:e.tipoContratoTrabajador,Empresa:e.nombreSubEmpresa,Iniciodecontrato:e.fechaInicioContratoTrabajador,Findecontrato:e.fechaFinContratoTrabajador,CantidaddeCuotas:e.numCuota,FechaCobro:e.fechaCobro,ValorCuota:w(e.montoCuota),ValorSinIntereses:w(e.montoCuotaSinIntereses),InteresesGanados:w(e.interesesGanados),Estado:e.nombreEstadoCredito}));this.exportData=i}exportToExcel(c){this.fuseService.open(E({},ye)).afterClosed().subscribe(e=>{if(e==="confirmed"){let d=_.json_to_sheet(c),m=_.book_new();_.book_append_sheet(m,d,"Sheet1"),Ee(m,`Reporte cobros trabajadores${this.datePipe.transform(new Date,"dd/MM/yyyy")}.xlsx`)}})}};l.\u0275fac=function(i){return new(i||l)},l.\u0275cmp=P({type:l,selectors:[["app-reporte-cobro-trabajadores"]],standalone:!0,features:[X([{provide:W,useClass:we},{provide:Q,useValue:"en-GB"},I,j,K]),O],decls:38,vars:23,consts:[["inicioPicker",""],["finalPicker",""],["cdkScrollable","",1,"bg-card","flex","min-w-0","flex-auto","flex-col","dark:bg-transparent","sm:absolute","sm:inset-0","sm:overflow-hidden"],[1,"relative","flex","flex-0","flex-col","px-6","py-8","sm:flex-row","sm:items-center","sm:justify-between","md:px-8"],[1,"text-3xl","font-semibold","tracking-tight"],[1,"mt-6","flex","w-full","shrink-0","flex-col","items-center","sm:ml-4","sm:mt-0","sm:flex-row","sm:space-x-2","sm:w-auto"],[1,"fuse-mat-dense","rounded-lg","w-full","sm:w-auto","min-w-64",3,"subscriptSizing"],["matPrefix","",1,"icon-size-5",3,"svgIcon"],["matInput","",3,"input","autocomplete","placeholder"],[1,"px-6","border-b","mt-6","w-full","shrink-0","sm:mt-0","sm:space-x-2","lg:w-full"],[1,"flex","flex-col","sm:flex-row","gap-2.5",3,"formGroup"],[1,"w-full","sm:w-1/2"],[3,"selectionChange","formControlName"],[4,"ngIf"],["floatLabel","always",1,"w-full","sm:w-1/2"],["matInput","","placeholder","dd/mm/yyyy",3,"matDatepicker","formControlName"],["matIconSuffix","",3,"for"],["mat-flat-button","",1,"sm:w-1/6","w-full","sm:mt-6","bg-crediblue-50","rounded-lg","transition","duration-200","text-white","font-semibold",3,"click","color"],["mat-flat-button","",1,"sm:sm:w-1/6","w-full","sm:mt-6","rounded-lg","transition","duration-200","text-white","font-semibold",3,"click","color","ngClass","disabled"],[1,"flex","flex-auto","overflow-hidden"],[1,"inset-0","min-w-0","overflow-auto","print:overflow-visible"],[3,"value",4,"ngFor","ngForOf"],[3,"value"],[1,"flex","flex-auto","flex-col","overflow-hidden","sm:mb-18","sm:overflow-y-auto"],[3,"columns","displayedColumns","columnPropertyMap","data","searchTerm"],[1,"inline-block","p-4","sm:p-2","print:p-0","w-full"],[3,"type","appearance"],["fuseAlertTitle",""]],template:function(i,e){if(i&1){let d=N();s(0,"div",2)(1,"div",3)(2,"div",4),f(3,"Reporte de Cobros Trabajadores"),n(),s(4,"div",5)(5,"mat-form-field",6),g(6,"mat-icon",7),s(7,"input",8),S("input",function(b){return y(d),v(e.onSearch(b))}),n()()()(),s(8,"div",9)(9,"form",10)(10,"mat-form-field",11)(11,"mat-label"),f(12,"Estados"),n(),s(13,"mat-select",12),S("selectionChange",function(b){return y(d),v(e.onSelect(b))}),x(14,De,2,1,"ng-container",13),$(15,"async"),n()(),s(16,"mat-form-field",14)(17,"mat-label"),f(18,"Fecha de inicio"),n(),g(19,"input",15)(20,"mat-datepicker-toggle",16)(21,"mat-datepicker",null,0),n(),s(23,"mat-form-field",14)(24,"mat-label"),f(25,"Fecha fin"),n(),g(26,"input",15)(27,"mat-datepicker-toggle",16)(28,"mat-datepicker",null,1),n(),s(30,"button",17),S("click",function(){return y(d),v(e.onConsultar())}),s(31,"span"),f(32," Consultar "),n()(),s(33,"button",18),S("click",function(){return y(d),v(e.exportToExcel(e.exportData))}),s(34,"span"),f(35," Exportar "),n()()()(),x(36,Pe,3,5,"div",19)(37,Ve,6,2,"div",20),n()}if(i&2){let d=F(22),m=F(29);o(5),r("subscriptSizing","dynamic"),o(),r("svgIcon","heroicons_solid:magnifying-glass"),o(),r("autocomplete","off")("placeholder","Buscar"),o(2),r("formGroup",e.form),o(4),r("formControlName","idEstadoCredito"),o(),r("ngIf",q(15,18,e.detalleConsumo$)),o(5),r("matDatepicker",d)("formControlName","fechaInicio"),o(),r("for",d),o(6),r("matDatepicker",m)("formControlName","fechaFinal"),o(),r("for",m),o(3),r("color","primary"),o(3),r("color","primary")("ngClass",B(20,ke,e.exportData.length,!e.exportData.length))("disabled",!e.exportData.length),o(3),V(e.data.length>0?36:37)}},dependencies:[J,Z,Se,Ce,me,se,le,ce,ve,ae,xe,Te,_e,oe,re,be,ee,Y,ge,te,U,H,he,pe,fe,z]});let a=l;return a})();var ct=[{path:"",component:je}];export{ct as default};
