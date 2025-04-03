import {
  DateTime
} from "./chunk-RG7FFAHP.js";
import "./chunk-74CJHXHU.js";
import {
  DashboardService,
  NgApexchartsModule
} from "./chunk-7FVT3N4G.js";
import "./chunk-YZGIFTGF.js";
import "./chunk-G7E77ZCS.js";
import "./chunk-ROMZC4L4.js";
import {
  DecimalPipe,
  inject,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-WGDVSMOG.js";
import "./chunk-AYDYM6RQ.js";

// src/app/pages/dashboard/resumen-ejecutivo/dashboard-main/dashboard-main.component.ts
var now = DateTime.now();
var _DashboardMainComponent = class _DashboardMainComponent {
  constructor() {
    this.indicadoresService = inject(DashboardService);
    this.chartOptions = {
      chart: {
        type: "donut",
        height: 350,
        width: 1e3
      },
      labels: [],
      series: [],
      title: {
        text: "Distribuci\xF3n de Solicitudes y Cr\xE9ditos",
        align: "left",
        style: {
          fontSize: "18px",
          fontWeight: "bold"
        }
      },
      colors: ["#28a745", "#dc3545", "#ffc107", "#007bff", "#6c757d", "#17a2b8"],
      legend: {
        position: "right",
        horizontalAlign: "right",
        // Centra verticalmente los elementos
        fontSize: "14px",
        markers: {
          width: 12,
          height: 12
        },
        itemMargin: {
          horizontal: 5,
          vertical: 5
        }
      },
      dataLabels: {
        style: {
          fontSize: "12px"
        }
      }
    };
  }
  ngOnInit() {
    this.getIndicadoresMontos();
  }
  getIndicadores() {
    this.indicadoresService.getIndicadores().subscribe((response) => {
      if (response.data) {
        this.chartOptions.labels = [
          "Solicitudes Aprobadas",
          "Solicitudes Rechazadas",
          "Solicitudes Pendientes",
          "Cr\xE9ditos Aprobados",
          "Cr\xE9ditos Rechazados",
          "Cr\xE9ditos Pendientes"
        ];
        this.chartOptions.series = [
          response.data.canSolicitudesAprobadas,
          response.data.canSolicitudesRechazadas,
          response.data.canSolicitudesPendientes,
          response.data.canCreditosAprobados,
          response.data.canCreditosRechazados,
          response.data.canCreditosPendientes
        ];
      }
    });
  }
  getIndicadoresMontos() {
    this.indicadoresService.getCardsMontos().subscribe((response) => {
      if (response.data) {
        this.dataCards = response.data;
      }
    });
  }
};
_DashboardMainComponent.\u0275fac = function DashboardMainComponent_Factory(t) {
  return new (t || _DashboardMainComponent)();
};
_DashboardMainComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DashboardMainComponent, selectors: [["app-dashboard-main"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 72, vars: 24, consts: [[1, "relative", "min-w-0", "flex", "h-full", "w-full", "flex-col", "dark:bg-transparent", "sm:overflow-hidden", "sm:inset-0"], [1, "relative", "flex", "flex-0", "flex-col", "px-6", "py-6", "sm:flex-row", "sm:items-center", "sm:justify-between", "md:px-8"], [1, "text-3xl", "font-semibold", "tracking-tight"], [1, "flex", "w-full", "sm:items-center", "lg:flex-row", "gap-2.5", "lg:gap-2", "flex-col", "p-5"], [1, "bg-white", "w-full", "sm:w-3/4", "md:w-2/4", "lg:w-1/2", "flex", "flex-col", "overflow-hidden", "rounded-2xl", "shadow-lg", "sm:col-span-2", "lg:col-span-1", "border", "border-gray-200"], [1, "px-6", "py-4", "flex", "items-start", "justify-between", "bg-gradient-to-r", "from-blue-500", "to-blue-900", "rounded-t-2xl"], [1, "truncate", "text-lg", "font-semibold", "leading-6", "tracking-tight", "text-white", "mx-auto"], [1, "px-6", "py-5", "flex", "sm:items-end", "lg:gap-3", "lg:flex-row", "lg:items-center", "mx-auto"], [1, "mt-3", "lg:mt-0", "lg:ml-4", "flex", "items-center", "justify-center", "w-8", "h-8", "bg-blue-100", "rounded-full"], [1, "text-blue-600", "text-5xl", "font-bold"], [1, "text-4xl", "font-semibold", "text-gray-800", "leading-tight", "tracking-tight"], [1, "flex", "w-full", "lg:flex-row", "sm:items-center", "justify-center", "gap-2.5", "lg:gap-2", "flex-col", "p-5"]], template: function DashboardMainComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
    \u0275\u0275text(3, "Dashboard de Resumen Ejecutivo");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 3)(5, "div", 4)(6, "div", 5)(7, "div", 6);
    \u0275\u0275text(8, " Cartera por cobrar ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 7)(10, "div", 8)(11, "span", 9);
    \u0275\u0275text(12, "$");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 10);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "number");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "div", 4)(17, "div", 5)(18, "div", 6);
    \u0275\u0275text(19, " Cobros adicionales ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 7)(21, "div", 8)(22, "span", 9);
    \u0275\u0275text(23, "$");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 10);
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "number");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(27, "div", 4)(28, "div", 5)(29, "div", 6);
    \u0275\u0275text(30, " Intereses generados ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 7)(32, "div", 8)(33, "span", 9);
    \u0275\u0275text(34, "$");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div", 10);
    \u0275\u0275text(36);
    \u0275\u0275pipe(37, "number");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(38, "div", 11)(39, "div", 4)(40, "div", 5)(41, "div", 6);
    \u0275\u0275text(42, " Cr\xE9ditos aprobados ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "div", 7)(44, "div", 8)(45, "span", 9);
    \u0275\u0275text(46, "$");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(47, "div", 10);
    \u0275\u0275text(48);
    \u0275\u0275pipe(49, "number");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(50, "div", 4)(51, "div", 5)(52, "div", 6);
    \u0275\u0275text(53, " Cr\xE9dito real consumido ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(54, "div", 7)(55, "div", 8)(56, "span", 9);
    \u0275\u0275text(57, "$");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(58, "div", 10);
    \u0275\u0275text(59);
    \u0275\u0275pipe(60, "number");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(61, "div", 4)(62, "div", 5)(63, "div", 6);
    \u0275\u0275text(64, " Cr\xE9ditos sin utilizar ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(65, "div", 7)(66, "div", 8)(67, "span", 9);
    \u0275\u0275text(68, "$");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(69, "div", 10);
    \u0275\u0275text(70);
    \u0275\u0275pipe(71, "number");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(14);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(15, 6, ctx.dataCards == null ? null : ctx.dataCards.montoPagoTrabajadorLiquidados, "1.0-0"), " ");
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(26, 9, ctx.dataCards == null ? null : ctx.dataCards.montoCobrosFijosPendientesPorPagar, "1.0-0"), " ");
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(37, 12, ctx.dataCards == null ? null : ctx.dataCards.montoInteresesGanadosDeLiquidaciones, "1.0-0"), " ");
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(49, 15, ctx.dataCards == null ? null : ctx.dataCards.montoCreditoAprobado, "1.0-0"), " ");
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(60, 18, ctx.dataCards == null ? null : ctx.dataCards.montoDesembolsosRealizados, "1.0-0"), " ");
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(71, 21, (ctx.dataCards == null ? null : ctx.dataCards.montoDesembolsosRealizados) - (ctx.dataCards == null ? null : ctx.dataCards.montoDesembolsosAprobados), "1.0-0"), " ");
  }
}, dependencies: [
  DecimalPipe,
  NgApexchartsModule
] });
var DashboardMainComponent = _DashboardMainComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DashboardMainComponent, { className: "DashboardMainComponent", filePath: "src\\app\\pages\\dashboard\\resumen-ejecutivo\\dashboard-main\\dashboard-main.component.ts", lineNumber: 30 });
})();

// src/app/pages/dashboard/resumen-ejecutivo/resumen-ejecutivo.routes.ts
var resumen_ejecutivo_routes_default = [
  {
    path: "",
    component: DashboardMainComponent
  }
];
export {
  resumen_ejecutivo_routes_default as default
};
//# sourceMappingURL=chunk-HIWEDLGA.js.map
