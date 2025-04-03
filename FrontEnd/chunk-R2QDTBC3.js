import {
  TiposPagosService
} from "./chunk-73C42FVP.js";
import {
  Estados
} from "./chunk-NSUZEV35.js";
import {
  CustomTableComponent
} from "./chunk-ZB3PSQQS.js";
import "./chunk-CZDVBWDU.js";
import "./chunk-NACP6IOB.js";
import "./chunk-IZMZQUCC.js";
import "./chunk-74CJHXHU.js";
import "./chunk-ROMZC4L4.js";
import {
  map,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty,
  ɵɵtext
} from "./chunk-WGDVSMOG.js";
import "./chunk-AYDYM6RQ.js";

// src/app/pages/configuraciones/tipos-pagos/grid-tipos-pagos/grid-tipos-pagos.component.ts
var _GridTiposPagosComponent = class _GridTiposPagosComponent {
  constructor(tiposPagos) {
    this.tiposPagos = tiposPagos;
    this.data = [];
    this.columns = ["Estado", "Tipos de pagos"];
    this.columnPropertyMap = {
      "Estado": "estado",
      "Tipos de pagos": "nombre"
    };
  }
  getTiposPagos() {
    this.subcription$ = this.tiposPagos.getTiposPagos().pipe(map((response) => {
      response.data.forEach((items) => {
        if (items.estado) {
          items.estado = Estados.ACTIVO;
        } else {
          items.estado = Estados.INACTIVO;
        }
      });
      return response;
    })).subscribe((response) => {
      this.data = response.data;
    });
  }
  ngOnDestroy() {
    this.subcription$.unsubscribe();
  }
  ngOnInit() {
    this.getTiposPagos();
  }
};
_GridTiposPagosComponent.\u0275fac = function GridTiposPagosComponent_Factory(t) {
  return new (t || _GridTiposPagosComponent)(\u0275\u0275directiveInject(TiposPagosService));
};
_GridTiposPagosComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GridTiposPagosComponent, selectors: [["app-grid-tipos-pagos"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 7, vars: 4, consts: [[1, "bg-card", "flex", "min-w-0", "flex-auto", "flex-col", "dark:bg-transparent", "sm:absolute", "sm:inset-0", "sm:overflow-hidden"], [1, "relative", "flex", "flex-0", "flex-col", "border-b", "px-6", "py-8", "sm:flex-row", "sm:items-center", "sm:justify-between", "md:px-8"], [1, "text-3xl", "font-semibold", "tracking-tight"], [1, "flex", "flex-auto", "overflow-hidden"], [1, "flex", "flex-auto", "flex-col", "overflow-hidden", "sm:mb-18", "sm:overflow-y-auto"], [3, "columns", "displayedColumns", "columnPropertyMap", "data"]], template: function GridTiposPagosComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
    \u0275\u0275text(3, "Tipos de Pagos");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 3)(5, "div", 4);
    \u0275\u0275element(6, "app-custom-table", 5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(6);
    \u0275\u0275property("columns", ctx.columns)("displayedColumns", ctx.columns)("columnPropertyMap", ctx.columnPropertyMap)("data", ctx.data);
  }
}, dependencies: [CustomTableComponent] });
var GridTiposPagosComponent = _GridTiposPagosComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GridTiposPagosComponent, { className: "GridTiposPagosComponent", filePath: "src\\app\\pages\\configuraciones\\tipos-pagos\\grid-tipos-pagos\\grid-tipos-pagos.component.ts", lineNumber: 26 });
})();

// src/app/pages/configuraciones/tipos-pagos/tipos-pagos.routes.ts
var tipos_pagos_routes_default = [
  {
    path: "",
    component: GridTiposPagosComponent
  }
];
export {
  tipos_pagos_routes_default as default
};
//# sourceMappingURL=chunk-R2QDTBC3.js.map
