import{a as ye}from"./chunk-7NZRBPPU.js";import{a as he,b as Ce,c as ge}from"./chunk-YP3OYDJU.js";import{a as ve}from"./chunk-M6JKQUTX.js";import{a as ue}from"./chunk-AW4GAERC.js";import{a as fe}from"./chunk-JC77WSFI.js";import"./chunk-CNRP5CR4.js";import{C as se,F as pe,J as ce,b as W,e as X,i as Y,l as oe,n as x,p as ie,q as ne,s as re,u as ae,x as me,y as le}from"./chunk-D3YOWHEC.js";import{h as U}from"./chunk-AIQUJILU.js";import{a as de}from"./chunk-EZC5HSZS.js";import"./chunk-ZFUJRZBK.js";import{Q as J,R as K,ba as Q,ga as Z,la as ee}from"./chunk-V35GW63T.js";import"./chunk-HADAFI3S.js";import"./chunk-AUCKEBH6.js";import{b as te}from"./chunk-YYQTFAQO.js";import{Cb as y,Cc as L,Dc as b,Eb as N,Fc as q,Gc as z,Lb as w,Mb as s,Mc as H,Nb as R,Qa as i,Ub as A,Vb as $,_ as k,ba as I,bc as j,cc as O,ga as _,gb as h,ha as u,ib as n,ma as M,pb as T,tb as m,ub as a,vb as C,wa as g,wb as D,xa as v,xb as P,yc as B,zb as V,zc as G}from"./chunk-YBEOGPR3.js";import{a as F,d as E}from"./chunk-NEB6MB4Y.js";var xe=(()=>{let t=class t{constructor(o,r){this._http=o,this.appSettings=r}getReporteConsumo(o){return console.log(o),this._http.get(`${this.appSettings.reportes.url.reporteConsumo}?idEstadoCredito=${o.idEstadoCredito}&fechaInicio=${o.fechaInicio}&fechaFinal=${o.fechaFinal}`)}};t.\u0275fac=function(r){return new(r||t)(_(H),_(te))},t.\u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();function Se(e,t){if(e&1&&(m(0,"mat-option",21),s(1),a()),e&2){let l=t.$implicit;n("value",l.id),i(),R(l.nombre)}}function Fe(e,t){if(e&1&&(D(0),h(1,Se,2,2,"mat-option",20),P()),e&2){let l=t.ngIf;i(),n("ngForOf",l.data)}}function Ee(e,t){if(e&1&&(m(0,"div",19)(1,"div",22),C(2,"app-custom-table",23),a()()),e&2){let l=N();i(2),n("columns",l.columns)("displayedColumns",l.columns)("columnPropertyMap",l.columnPropertyMap)("data",l.data)("searchTerm",l.searchTerm)}}function ke(e,t){e&1&&(m(0,"div",24)(1,"div",25)(2,"fuse-alert",26)(3,"span",27),s(4,"Informaci\xF3n"),a(),s(5," No hay informaci\xF3n hasta el momento. "),a()()()),e&2&&(i(2),n("type","info")("appearance","outline"))}function Ie(e,t){e&1&&h(0,ke,6,2,"ng-template")}var _e=(()=>{let t=class t{constructor(){this.searchTerm="",this.fb=u(se),this.reportesService=u(xe),this.datePipe=u(b),this.estados=new re([""]),this.detalleConsumoService=u(ye),this.detalleConsumo$=this.detalleConsumoService.getDetalleConsumo().pipe(k(o=>{let r=o.data;r&&this.form.get("idEstadoCredito").setValue(r[0].id)})),this.data=[],this.columns=["Empresa","N factura / Comprobante","Valor pendiente"],this.columnPropertyMap={Empresa:"nombreSubEmpresa","N factura / Comprobante":"numeroFactura","Valor pendiente":"valorPendiente"}}onSearch(o){let r=o.target;this.searchTerm=r.value.trim().toLowerCase()}onSelect(o){let r=o.value}createForm(){this.form=this.fb.group({idEstadoCredito:["",x.required],fechaInicio:["",x.required],fechaFinal:["",x.required]})}ngOnInit(){this.createForm()}onConsultar(){if(this.form.valid){let o=this.form.getRawValue(),{fechaInicio:r,fechaFinal:p}=o,c=E(o,["fechaInicio","fechaFinal"]),d=this.datePipe.transform(r,"yyyy-MM-dd"),f=this.datePipe.transform(p,"yyyy-MM-dd"),we=F({fechaInicio:d,fechaFinal:f},c);this.reportesService.getReporteConsumo(we).subscribe(S=>{S.data&&(this.data=S.data)})}}};t.\u0275fac=function(r){return new(r||t)},t.\u0275cmp=M({type:t,selectors:[["app-reporte-consumos"]],standalone:!0,features:[A([{provide:K,useClass:ve},{provide:J,useValue:"en-GB"},b,z,q]),$],decls:38,vars:18,consts:[["inicioPicker",""],["finalPicker",""],["cdkScrollable","",1,"bg-card","flex","min-w-0","flex-auto","flex-col","dark:bg-transparent","sm:absolute","sm:inset-0","sm:overflow-hidden"],[1,"relative","flex","flex-0","flex-col","px-6","py-8","sm:flex-row","sm:items-center","sm:justify-between","md:px-8"],[1,"text-3xl","font-semibold","tracking-tight"],[1,"mt-6","flex","w-full","shrink-0","flex-col","items-center","sm:ml-4","sm:mt-0","sm:flex-row","sm:space-x-2","sm:w-auto"],[1,"fuse-mat-dense","rounded-lg","w-full","sm:w-auto","min-w-64",3,"subscriptSizing"],["matPrefix","",1,"icon-size-5",3,"svgIcon"],["matInput","",3,"input","autocomplete","placeholder"],[1,"px-6","border-b","mt-6","w-full","shrink-0","sm:mt-0","sm:space-x-2","lg:w-full"],[1,"flex","flex-col","sm:flex-row","gap-2.5",3,"formGroup"],[1,"w-full","sm:w-1/2"],[3,"selectionChange","formControlName"],[4,"ngIf"],["floatLabel","always",1,"w-full","sm:w-1/2"],["matInput","","placeholder","dd/mm/yyyy",3,"matDatepicker","formControlName"],["matIconSuffix","",3,"for"],["mat-flat-button","",1,"sm:w-1/6","w-full","sm:mt-6","bg-crediblue-50","rounded-lg","transition","duration-200","text-white","font-semibold",3,"click","color"],["mat-flat-button","",1,"sm:sm:w-1/6","w-full","sm:mt-6","bg-green-700","rounded-lg","transition","duration-200","text-white","font-semibold",3,"color"],[1,"flex","flex-auto","overflow-hidden"],[3,"value",4,"ngFor","ngForOf"],[3,"value"],[1,"flex","flex-auto","flex-col","overflow-hidden","sm:mb-18","sm:overflow-y-auto"],[3,"columns","displayedColumns","columnPropertyMap","data","searchTerm"],[1,"inset-0","min-w-0","overflow-auto","print:overflow-visible"],[1,"inline-block","p-4","sm:p-2","print:p-0","w-full"],[3,"type","appearance"],["fuseAlertTitle",""]],template:function(r,p){if(r&1){let c=V();m(0,"div",2)(1,"div",3)(2,"div",4),s(3,"Reporte de Consumos"),a(),m(4,"div",5)(5,"mat-form-field",6),C(6,"mat-icon",7),m(7,"input",8),y("input",function(f){return g(c),v(p.onSearch(f))}),a()()()(),m(8,"div",9)(9,"form",10)(10,"mat-form-field",11)(11,"mat-label"),s(12,"Estados"),a(),m(13,"mat-select",12),y("selectionChange",function(f){return g(c),v(p.onSelect(f))}),h(14,Fe,2,1,"ng-container",13),j(15,"async"),a()(),m(16,"mat-form-field",14)(17,"mat-label"),s(18,"Fecha de inicio"),a(),C(19,"input",15)(20,"mat-datepicker-toggle",16)(21,"mat-datepicker",null,0),a(),m(23,"mat-form-field",14)(24,"mat-label"),s(25,"Fecha fin"),a(),C(26,"input",15)(27,"mat-datepicker-toggle",16)(28,"mat-datepicker",null,1),a(),m(30,"button",17),y("click",function(){return g(c),v(p.onConsultar())}),m(31,"span"),s(32," Consultar "),a()(),m(33,"button",18)(34,"span"),s(35," Exportar "),a()()()(),h(36,Ee,3,5,"div",19)(37,Ie,1,0),a()}if(r&2){let c=w(22),d=w(29);i(5),n("subscriptSizing","dynamic"),i(),n("svgIcon","heroicons_solid:magnifying-glass"),i(),n("autocomplete","off")("placeholder","Buscar"),i(2),n("formGroup",p.form),i(4),n("formControlName","idEstadoCredito"),i(),n("ngIf",O(15,16,p.detalleConsumo$)),i(5),n("matDatepicker",c)("formControlName","fechaInicio"),i(),n("for",c),i(6),n("matDatepicker",d)("formControlName","fechaFinal"),i(),n("for",d),i(3),n("color","primary"),i(3),n("color","primary"),i(3),T(p.data.length>0?36:37)}},dependencies:[L,ue,Y,ee,ce,W,Q,fe,B,G,de,pe,ae,oe,ie,ne,me,le,he,Ce,ge,X,U,Z]});let e=t;return e})();var et=[{path:"",component:_e}];export{et as default};
