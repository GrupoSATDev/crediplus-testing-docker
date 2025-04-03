import{a as D,b as F,c as E}from"./chunk-DUPIKXVU.js";import"./chunk-73F67TFK.js";import"./chunk-XTYNXB3F.js";import"./chunk-2YYUDHRL.js";import{$a as b,Bb as v,Cb as w,Db as C,Fb as l,Hb as f,Ka as d,Pb as O,Xb as u,Zb as x,bb as c,ga as h,ka as g,mb as r,nb as a,ob as p,rc as S,xb as y,xc as I}from"./chunk-ODJKW74N.js";import"./chunk-NEB6MB4Y.js";var M=["chart"];function P(n,s){n&1&&(r(0,"div",15),p(1,"div",16),a())}function k(n,s){if(n&1&&(r(0,"div",17),p(1,"apx-chart",18),a()),n&2){let t=y();d(),c("series",t.chartOptions.series)("chart",t.chartOptions.chart)("xaxis",t.chartOptions.xaxis)("yaxis",t.chartOptions.yaxis)("dataLabels",t.chartOptions.dataLabels)("title",t.chartOptions.title)("subtitle",t.chartOptions.subtitle)("tooltip",t.chartOptions.tooltip)("plotOptions",t.chartOptions.plotOptions)("colors",t.chartOptions.colors)("grid",t.chartOptions.grid)}}var j=(()=>{let s=class s{constructor(){this.indicadoresService=h(E),this.loading=!0}ngOnInit(){this.getIndicadoresCartera()}getIndicadoresCartera(){this.indicadoresService.getCarteras().subscribe(m=>{let i=m.data;this.montoCobroFijosGanados=i.montoCobroFijosGanados||0,this.montoInteresesGanados=i.montoInteresesGanados||0,this.chartOptions={series:[{name:"Deudas pendientes",data:[]}],chart:{type:"bar",height:400,width:1e3,fontFamily:"Inter, sans-serif",toolbar:{show:!0,tools:{download:!1,selection:!1,zoom:!1,zoomin:!1,zoomout:!1,pan:!1}},animations:{enabled:!0,easing:"easeinout",speed:800}},plotOptions:{bar:{borderRadius:8,columnWidth:"60%",distributed:!0,dataLabels:{position:"top"}}},colors:["#155ee9","#14B8A6","#162683","#ff7e0b","#EC4899"],dataLabels:{enabled:!0,formatter:function(e){return new Intl.NumberFormat("es-CO",{style:"currency",currency:"COP",minimumFractionDigits:0,maximumFractionDigits:0}).format(e)},offsetY:-20,style:{fontSize:"12px",colors:["#333"]}},title:{text:"Pagos Pendientes por Empresa",align:"center",style:{fontSize:"20px",fontWeight:"600",color:"#1F2937"}},subtitle:{text:"Total de pagos por procesar",align:"center",style:{fontSize:"14px",color:"#6B7280"}},xaxis:{categories:[],labels:{style:{fontSize:"12px",colors:"#4B5563"},rotate:-45,rotateAlways:!1,trim:!0,maxHeight:120},axisBorder:{show:!1},axisTicks:{show:!1}},yaxis:{title:{text:"Valores",style:{fontSize:"14px",color:"#4B5563"}},labels:{formatter:function(e){return new Intl.NumberFormat("es-CO",{style:"currency",currency:"COP",minimumFractionDigits:0,maximumFractionDigits:0}).format(e)}}},grid:{borderColor:"#E5E7EB",strokeDashArray:4,xaxis:{lines:{show:!1}}},tooltip:{shared:!0,intersect:!1,y:{formatter:function(e){return new Intl.NumberFormat("es-CO",{style:"currency",currency:"COP",minimumFractionDigits:0,maximumFractionDigits:0}).format(e)}}}};let o=new Map;i.pagosPendientes.forEach(e=>{let A=o.get(e.nombreSubempresa)||0;o.set(e.nombreSubempresa,A+e.total-e.totalAbono)}),this.chartOptions.series=[{name:"Pagos pendientes",data:Array.from(o.values())}],this.chartOptions.xaxis.categories=Array.from(o.keys()),this.loading=!1})}};s.\u0275fac=function(i){return new(i||s)},s.\u0275cmp=g({type:s,selectors:[["app-dashboard-cartera-morosidad"]],viewQuery:function(i,o){if(i&1&&v(M,5),i&2){let e;w(e=C())&&(o.chart=e.first)}},standalone:!0,features:[O],decls:31,vars:10,consts:[[1,"relative","min-w-0","flex","h-full","w-full","flex-col","dark:bg-transparent","sm:overflow-hidden","sm:inset-0"],[1,"relative","flex","flex-0","flex-col","px-6","py-6","sm:flex-row","sm:items-center","sm:justify-between","md:px-8"],[1,"text-3xl","font-semibold","tracking-tight"],[1,"flex","w-full","lg:flex-row","sm:items-center","justify-center","gap-2.5","lg:gap-2","flex-col","p-5"],[1,"bg-white","w-full","sm:w-3/4","md:w-2/4","lg:w-1/2","flex","flex-col","overflow-hidden","rounded-2xl","shadow-lg","sm:col-span-2","lg:col-span-1","border","border-gray-200"],[1,"px-6","py-4","flex","items-start","justify-between","bg-gradient-to-r","from-blue-500","to-blue-900","rounded-t-2xl"],[1,"truncate","text-lg","font-semibold","leading-6","tracking-tight","text-white","mx-auto"],[1,"px-6","py-5","flex","sm:items-end","lg:gap-3","lg:flex-row","lg:items-center","mx-auto"],[1,"mt-3","lg:mt-0","lg:ml-4","flex","items-center","justify-center","w-8","h-8","bg-blue-100","rounded-full"],[1,"text-blue-600","text-5xl","font-bold"],[1,"text-4xl","font-semibold","text-gray-800","leading-tight","tracking-tight"],[1,"max-w-screen-2xl","mx-auto","p-8"],[1,"bg-white","rounded-xl","shadow-lg","overflow-hidden"],["class","flex justify-center items-center h-[550px]",4,"ngIf"],["class","p-8",4,"ngIf"],[1,"flex","justify-center","items-center","h-[550px]"],[1,"animate-spin","rounded-full","h-12","w-12","border-b-2","border-sky-500"],[1,"p-8"],[1,"w-full","h-full",3,"series","chart","xaxis","yaxis","dataLabels","title","subtitle","tooltip","plotOptions","colors","grid"]],template:function(i,o){i&1&&(r(0,"div",0)(1,"div",1)(2,"div",2),l(3,"Dashboard de Cartera y Morosidad"),a()(),r(4,"div",3)(5,"div",4)(6,"div",5)(7,"div",6),l(8," Cobros fijos ganados "),a()(),r(9,"div",7)(10,"div",8)(11,"span",9),l(12,"$"),a()(),r(13,"div",10),l(14),u(15,"number"),a()()(),r(16,"div",4)(17,"div",5)(18,"div",6),l(19," Intereses fijos ganados "),a()(),r(20,"div",7)(21,"div",8)(22,"span",9),l(23,"$"),a()(),r(24,"div",10),l(25),u(26,"number"),a()()()(),r(27,"div",11)(28,"div",12),b(29,P,2,0,"div",13)(30,k,2,11,"div",14),a()()()),i&2&&(d(14),f(" ",x(15,4,o.montoCobroFijosGanados,"1.0-0")," "),d(11),f(" ",x(26,7,o.montoInteresesGanados,"1.0-0")," "),d(4),c("ngIf",o.loading),d(),c("ngIf",!o.loading))},dependencies:[F,D,S,I]});let n=s;return n})();var q=[{path:"",component:j}];export{q as default};
