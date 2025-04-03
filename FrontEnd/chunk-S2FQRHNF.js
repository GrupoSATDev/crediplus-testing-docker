import {
  ChartComponent,
  DashboardService,
  NgApexchartsModule
} from "./chunk-7FVT3N4G.js";
import "./chunk-YZGIFTGF.js";
import "./chunk-G7E77ZCS.js";
import "./chunk-ROMZC4L4.js";
import {
  DecimalPipe,
  NgIf,
  inject,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-WGDVSMOG.js";
import "./chunk-AYDYM6RQ.js";

// src/app/pages/dashboard/dashboard-cartera-morosidad/dashboard-cartera-morosidad/dashboard-cartera-morosidad.component.ts
var _c0 = ["chart"];
function DashboardCarteraMorosidadComponent_div_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275element(1, "div", 16);
    \u0275\u0275elementEnd();
  }
}
function DashboardCarteraMorosidadComponent_div_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275element(1, "apx-chart", 18);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("series", ctx_r0.chartOptions.series)("chart", ctx_r0.chartOptions.chart)("xaxis", ctx_r0.chartOptions.xaxis)("yaxis", ctx_r0.chartOptions.yaxis)("dataLabels", ctx_r0.chartOptions.dataLabels)("title", ctx_r0.chartOptions.title)("subtitle", ctx_r0.chartOptions.subtitle)("tooltip", ctx_r0.chartOptions.tooltip)("plotOptions", ctx_r0.chartOptions.plotOptions)("colors", ctx_r0.chartOptions.colors)("grid", ctx_r0.chartOptions.grid);
  }
}
var _DashboardCarteraMorosidadComponent = class _DashboardCarteraMorosidadComponent {
  constructor() {
    this.indicadoresService = inject(DashboardService);
    this.loading = true;
  }
  ngOnInit() {
    this.getIndicadoresCartera();
  }
  getIndicadoresCartera() {
    this.indicadoresService.getCarteras().subscribe((response) => {
      const pagos = response.data;
      this.montoCobroFijosGanados = pagos.montoCobroFijosGanados || 0;
      this.montoInteresesGanados = pagos.montoInteresesGanados || 0;
      this.chartOptions = {
        series: [{
          name: "Deudas pendientes",
          data: []
        }],
        chart: {
          type: "bar",
          height: 400,
          width: 1e3,
          fontFamily: "Inter, sans-serif",
          toolbar: {
            show: true,
            tools: {
              download: false,
              selection: false,
              zoom: false,
              zoomin: false,
              zoomout: false,
              pan: false
            }
          },
          animations: {
            enabled: true,
            easing: "easeinout",
            speed: 800
          }
        },
        plotOptions: {
          bar: {
            borderRadius: 8,
            columnWidth: "60%",
            distributed: true,
            dataLabels: {
              position: "top"
            }
          }
        },
        colors: [
          "#155ee9",
          // Sky blue
          "#14B8A6",
          // Teal
          "#162683",
          // Violet
          "#ff7e0b",
          // Amber
          "#EC4899"
          // Pink
        ],
        dataLabels: {
          enabled: true,
          formatter: function(val) {
            return new Intl.NumberFormat("es-CO", {
              style: "currency",
              currency: "COP",
              minimumFractionDigits: 0,
              maximumFractionDigits: 0
            }).format(val);
          },
          offsetY: -20,
          style: {
            fontSize: "12px",
            colors: ["#333"]
          }
        },
        title: {
          text: "Pagos Pendientes por Empresa",
          align: "center",
          style: {
            fontSize: "20px",
            fontWeight: "600",
            color: "#1F2937"
          }
        },
        subtitle: {
          text: "Total de pagos por procesar",
          align: "center",
          style: {
            fontSize: "14px",
            color: "#6B7280"
          }
        },
        xaxis: {
          categories: [],
          labels: {
            style: {
              fontSize: "12px",
              colors: "#4B5563"
            },
            rotate: -45,
            rotateAlways: false,
            trim: true,
            maxHeight: 120
          },
          axisBorder: {
            show: false
          },
          axisTicks: {
            show: false
          }
        },
        yaxis: {
          title: {
            text: "Valores",
            style: {
              fontSize: "14px",
              color: "#4B5563"
            }
          },
          labels: {
            formatter: function(val) {
              return new Intl.NumberFormat("es-CO", {
                style: "currency",
                currency: "COP",
                minimumFractionDigits: 0,
                maximumFractionDigits: 0
              }).format(val);
            }
          }
        },
        grid: {
          borderColor: "#E5E7EB",
          strokeDashArray: 4,
          xaxis: {
            lines: {
              show: false
            }
          }
        },
        tooltip: {
          shared: true,
          intersect: false,
          y: {
            formatter: function(val) {
              return new Intl.NumberFormat("es-CO", {
                style: "currency",
                currency: "COP",
                minimumFractionDigits: 0,
                maximumFractionDigits: 0
              }).format(val);
            }
          }
        }
      };
      const pagosPorSubempresa = /* @__PURE__ */ new Map();
      pagos.pagosPendientes.forEach((pago) => {
        const totalActual = pagosPorSubempresa.get(pago.nombreSubempresa) || 0;
        pagosPorSubempresa.set(pago.nombreSubempresa, totalActual + pago.total - pago.totalAbono);
      });
      this.chartOptions.series = [{
        name: "Pagos pendientes",
        data: Array.from(pagosPorSubempresa.values())
      }];
      this.chartOptions.xaxis.categories = Array.from(pagosPorSubempresa.keys());
      this.loading = false;
    });
  }
};
_DashboardCarteraMorosidadComponent.\u0275fac = function DashboardCarteraMorosidadComponent_Factory(t) {
  return new (t || _DashboardCarteraMorosidadComponent)();
};
_DashboardCarteraMorosidadComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DashboardCarteraMorosidadComponent, selectors: [["app-dashboard-cartera-morosidad"]], viewQuery: function DashboardCarteraMorosidadComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(_c0, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.chart = _t.first);
  }
}, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 31, vars: 10, consts: [[1, "relative", "min-w-0", "flex", "h-full", "w-full", "flex-col", "dark:bg-transparent", "sm:overflow-hidden", "sm:inset-0"], [1, "relative", "flex", "flex-0", "flex-col", "px-6", "py-6", "sm:flex-row", "sm:items-center", "sm:justify-between", "md:px-8"], [1, "text-3xl", "font-semibold", "tracking-tight"], [1, "flex", "w-full", "lg:flex-row", "sm:items-center", "justify-center", "gap-2.5", "lg:gap-2", "flex-col", "p-5"], [1, "bg-white", "w-full", "sm:w-3/4", "md:w-2/4", "lg:w-1/2", "flex", "flex-col", "overflow-hidden", "rounded-2xl", "shadow-lg", "sm:col-span-2", "lg:col-span-1", "border", "border-gray-200"], [1, "px-6", "py-4", "flex", "items-start", "justify-between", "bg-gradient-to-r", "from-blue-500", "to-blue-900", "rounded-t-2xl"], [1, "truncate", "text-lg", "font-semibold", "leading-6", "tracking-tight", "text-white", "mx-auto"], [1, "px-6", "py-5", "flex", "sm:items-end", "lg:gap-3", "lg:flex-row", "lg:items-center", "mx-auto"], [1, "mt-3", "lg:mt-0", "lg:ml-4", "flex", "items-center", "justify-center", "w-8", "h-8", "bg-blue-100", "rounded-full"], [1, "text-blue-600", "text-5xl", "font-bold"], [1, "text-4xl", "font-semibold", "text-gray-800", "leading-tight", "tracking-tight"], [1, "max-w-screen-2xl", "mx-auto", "p-8"], [1, "bg-white", "rounded-xl", "shadow-lg", "overflow-hidden"], ["class", "flex justify-center items-center h-[550px]", 4, "ngIf"], ["class", "p-8", 4, "ngIf"], [1, "flex", "justify-center", "items-center", "h-[550px]"], [1, "animate-spin", "rounded-full", "h-12", "w-12", "border-b-2", "border-sky-500"], [1, "p-8"], [1, "w-full", "h-full", 3, "series", "chart", "xaxis", "yaxis", "dataLabels", "title", "subtitle", "tooltip", "plotOptions", "colors", "grid"]], template: function DashboardCarteraMorosidadComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
    \u0275\u0275text(3, "Dashboard de Cartera y Morosidad");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 3)(5, "div", 4)(6, "div", 5)(7, "div", 6);
    \u0275\u0275text(8, " Cobros fijos ganados ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 7)(10, "div", 8)(11, "span", 9);
    \u0275\u0275text(12, "$");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 10);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "number");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "div", 4)(17, "div", 5)(18, "div", 6);
    \u0275\u0275text(19, " Intereses fijos ganados ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 7)(21, "div", 8)(22, "span", 9);
    \u0275\u0275text(23, "$");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 10);
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "number");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(27, "div", 11)(28, "div", 12);
    \u0275\u0275template(29, DashboardCarteraMorosidadComponent_div_29_Template, 2, 0, "div", 13)(30, DashboardCarteraMorosidadComponent_div_30_Template, 2, 11, "div", 14);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(14);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(15, 4, ctx.montoCobroFijosGanados, "1.0-0"), " ");
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(26, 7, ctx.montoInteresesGanados, "1.0-0"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.loading);
  }
}, dependencies: [
  NgApexchartsModule,
  ChartComponent,
  NgIf,
  DecimalPipe
] });
var DashboardCarteraMorosidadComponent = _DashboardCarteraMorosidadComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DashboardCarteraMorosidadComponent, { className: "DashboardCarteraMorosidadComponent", filePath: "src\\app\\pages\\dashboard\\dashboard-cartera-morosidad\\dashboard-cartera-morosidad\\dashboard-cartera-morosidad.component.ts", lineNumber: 19 });
})();

// src/app/pages/dashboard/dashboard-cartera-morosidad/cartera-morosidad.routes.ts
var cartera_morosidad_routes_default = [
  {
    path: "",
    component: DashboardCarteraMorosidadComponent
  }
];
export {
  cartera_morosidad_routes_default as default
};
//# sourceMappingURL=chunk-S2FQRHNF.js.map
