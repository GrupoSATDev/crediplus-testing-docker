import {
  ChartComponent,
  DashboardService,
  NgApexchartsModule
} from "./chunk-7FVT3N4G.js";
import {
  FuseAlertComponent
} from "./chunk-YZGIFTGF.js";
import "./chunk-G7E77ZCS.js";
import "./chunk-ROMZC4L4.js";
import {
  NgIf,
  inject,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵreference,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext
} from "./chunk-WGDVSMOG.js";
import "./chunk-AYDYM6RQ.js";

// src/app/pages/dashboard/dashboard-rentabilidad-intereses/dashboard-rentabilidad-intereses/dashboard-rentabilidad-intereses.component.ts
function DashboardRentabilidadInteresesComponent_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "apx-chart", 7);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("series", ctx_r0.chartOptions.series)("chart", ctx_r0.chartOptions.chart)("labels", ctx_r0.chartOptions.labels)("responsive", ctx_r0.chartOptions.responsive)("title", ctx_r0.chartOptions.title);
  }
}
function DashboardRentabilidadInteresesComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "div", 4)(2, "fuse-alert", 9)(3, "span", 10);
    \u0275\u0275text(4, "Informaci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, " No hay informaci\xF3n para mostrar hasta el momento. ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275property("type", "info")("appearance", "outline");
  }
}
var _DashboardRentabilidadInteresesComponent = class _DashboardRentabilidadInteresesComponent {
  constructor() {
    this.indicadoresService = inject(DashboardService);
  }
  ngOnInit() {
    this.getIndicadores();
  }
  getIndicadores() {
    this.indicadoresService.getRentabilidadInteres().subscribe((response) => {
      console.log(response);
      const montoInteresesPendientes = response.data.montoInteresesPendientesPorLiquidar || 0;
      const montoInteresesGanados = response.data.montoInteresesGanadosDeLiquidaciones || 0;
      this.chartOptions = {
        series: [montoInteresesPendientes, montoInteresesGanados],
        // Valores de las categorías
        chart: {
          type: "donut",
          height: 400,
          width: 700
          // Reduce el ancho para centrar mejor el contenido
        },
        labels: ["Intereses Pendientes por Liquidar", "Intereses Ganados de Liquidaciones"],
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 300
              },
              legend: {
                position: "bottom",
                // Leyenda abajo
                fontSize: "12px"
              }
            }
          }
        ],
        title: {
          text: "Distribuci\xF3n de Intereses",
          align: "left",
          // Centrar el título
          style: {
            fontSize: "18px",
            fontWeight: "bold"
          }
        },
        legend: {
          position: "bottom",
          // Leyenda en la parte inferior
          horizontalAlign: "center",
          // Centrada horizontalmente
          fontSize: "14px",
          // Tamaño de fuente más grande
          labels: {
            colors: ["#333"],
            // Mantén el color oscuro
            useSeriesColors: true
            // Usa los colores de las series
          },
          itemMargin: {
            horizontal: 10,
            // Espaciado entre ítems
            vertical: 8
          }
        },
        dataLabels: {
          enabled: true,
          // Muestra etiquetas dentro del gráfico
          style: {
            fontSize: "16px",
            // Tamaño más grande
            fontWeight: "bold",
            colors: ["#fff"]
            // Etiquetas en blanco
          },
          dropShadow: {
            enabled: true,
            top: 1,
            left: 1,
            blur: 2,
            color: "#000",
            opacity: 0.6
          }
        },
        tooltip: {
          enabled: true,
          style: {
            fontSize: "13px"
          },
          y: {
            formatter: function(val) {
              return `$${val.toLocaleString("en-US", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
              })}`;
            }
          }
        }
      };
    });
  }
};
_DashboardRentabilidadInteresesComponent.\u0275fac = function DashboardRentabilidadInteresesComponent_Factory(t) {
  return new (t || _DashboardRentabilidadInteresesComponent)();
};
_DashboardRentabilidadInteresesComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DashboardRentabilidadInteresesComponent, selectors: [["app-dashboard-rentabilidad-intereses"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 9, vars: 2, consts: [["noData", ""], [1, "relative", "min-w-0", "flex", "h-full", "w-full", "flex-col", "dark:bg-transparent", "sm:overflow-hidden", "sm:inset-0"], [1, "relative", "flex", "flex-0", "flex-col", "px-6", "py-6", "sm:flex-row", "sm:items-center", "sm:justify-between", "md:px-8"], [1, "text-3xl", "font-semibold", "tracking-tight"], [1, "inline-block", "p-4", "sm:p-2", "print:p-0", "w-full"], [1, "flex", "flex-row", "h-auto", "justify-center", "p-3"], [4, "ngIf", "ngIfElse"], [3, "series", "chart", "labels", "responsive", "title"], [1, "inset-0", "min-w-0", "overflow-auto", "print:overflow-visible"], [3, "type", "appearance"], ["fuseAlertTitle", ""]], template: function DashboardRentabilidadInteresesComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3);
    \u0275\u0275text(3, "Dashboard de Rentabilidad e Intereses");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 4)(5, "div", 5);
    \u0275\u0275template(6, DashboardRentabilidadInteresesComponent_ng_container_6_Template, 2, 5, "ng-container", 6)(7, DashboardRentabilidadInteresesComponent_ng_template_7_Template, 6, 2, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const noData_r2 = \u0275\u0275reference(8);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", (ctx.chartOptions == null ? null : ctx.chartOptions.series.length) > 0)("ngIfElse", noData_r2);
  }
}, dependencies: [
  FuseAlertComponent,
  NgApexchartsModule,
  ChartComponent,
  NgIf
] });
var DashboardRentabilidadInteresesComponent = _DashboardRentabilidadInteresesComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DashboardRentabilidadInteresesComponent, { className: "DashboardRentabilidadInteresesComponent", filePath: "src\\app\\pages\\dashboard\\dashboard-rentabilidad-intereses\\dashboard-rentabilidad-intereses\\dashboard-rentabilidad-intereses.component.ts", lineNumber: 18 });
})();

// src/app/pages/dashboard/dashboard-rentabilidad-intereses/rentabilidad-intereses.routes.ts
var rentabilidad_intereses_routes_default = [
  {
    path: "",
    component: DashboardRentabilidadInteresesComponent
  }
];
export {
  rentabilidad_intereses_routes_default as default
};
//# sourceMappingURL=chunk-7CSGMFAE.js.map
