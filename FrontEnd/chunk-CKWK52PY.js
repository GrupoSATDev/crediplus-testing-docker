import {
  FuseCardComponent
} from "./chunk-EHCERKCP.js";
import {
  SubscripcionService
} from "./chunk-N2CJV5EX.js";
import {
  Estados
} from "./chunk-NSUZEV35.js";
import {
  CustomTableComponent
} from "./chunk-ZB3PSQQS.js";
import {
  EstadosDatosService
} from "./chunk-5JAUKKTX.js";
import "./chunk-CZDVBWDU.js";
import "./chunk-NACP6IOB.js";
import {
  MatFormField,
  MatInput
} from "./chunk-IZMZQUCC.js";
import {
  Router,
  RouterLink
} from "./chunk-L2WXMDPA.js";
import "./chunk-74CJHXHU.js";
import {
  FuseAlertComponent
} from "./chunk-YZGIFTGF.js";
import "./chunk-G7E77ZCS.js";
import "./chunk-ROMZC4L4.js";
import {
  CurrencyPipe,
  DatePipe,
  MatIcon,
  inject,
  tap,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵproperty,
  ɵɵtext
} from "./chunk-WGDVSMOG.js";
import "./chunk-AYDYM6RQ.js";

// src/app/pages/gestion-cobros/subscripciones/form-subscripciones/form-subscripciones.component.ts
var _FormSubscripcionesComponent = class _FormSubscripcionesComponent {
};
_FormSubscripcionesComponent.\u0275fac = function FormSubscripcionesComponent_Factory(t) {
  return new (t || _FormSubscripcionesComponent)();
};
_FormSubscripcionesComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FormSubscripcionesComponent, selectors: [["app-form-subscripciones"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 5, vars: 2, consts: [[1, "inline-block", "mb-4", "print:p-0", "w-full"], [3, "type", "appearance"], ["fuseAlertTitle", ""]], template: function FormSubscripcionesComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "fuse-alert", 1)(2, "span", 2);
    \u0275\u0275text(3, "Informaci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Estamos trabajando en ello. ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("type", "info")("appearance", "outline");
  }
}, dependencies: [FuseAlertComponent] });
var FormSubscripcionesComponent = _FormSubscripcionesComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FormSubscripcionesComponent, { className: "FormSubscripcionesComponent", filePath: "src\\app\\pages\\gestion-cobros\\subscripciones\\form-subscripciones\\form-subscripciones.component.ts", lineNumber: 13 });
})();

// src/app/pages/gestion-cobros/subscripciones/main-subscripciones/main-subscripciones.component.ts
var _MainSubscripcionesComponent = class _MainSubscripcionesComponent {
};
_MainSubscripcionesComponent.\u0275fac = function MainSubscripcionesComponent_Factory(t) {
  return new (t || _MainSubscripcionesComponent)();
};
_MainSubscripcionesComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MainSubscripcionesComponent, selectors: [["app-main-subscripciones"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 24, vars: 0, consts: [[1, "bg-card", "flex", "min-w-0", "flex-auto", "flex-col", "dark:bg-transparent", "sm:absolute", "sm:inset-0", "sm:overflow-hidden"], [1, "relative", "flex", "flex-0", "flex-col", "border-b", "px-6", "py-8", "sm:flex-row", "sm:items-center", "sm:justify-between", "md:px-8"], [1, "text-3xl", "font-semibold", "tracking-tight"], [1, "flex", "flex-auto", "overflow-hidden"], [1, "flex", "flex-auto", "flex-row", "items-baseline", "flex-wrap", "gap-6", "justify-center", "overflow-hidden", "sm:overflow-y-auto", "bg-gray-100", "sm:p-2"], [1, "filter-list", "flex", "w-full", "max-w-lg", "flex-col", "p-8", "sm:p-10", "mt-6", "shadow-xl", "rounded-xl", "bg-white", "hover:shadow-2xl", "transition-all", "duration-300", "transform", "hover:scale-105"], [1, "flex", "justify-between", "items-center", "mb-6"], [1, "flex", "items-center", "space-x-3"], [1, "font-semibold", "text-2xl", "text-blue-900"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "h-6", "w-6", "text-blue-500"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M13 7H7v6m6 0h5m-8 4H7m6 0h5"], ["routerLink", "/pages/gestion-cobros/subscripciones/listar", 1, "w-full", "py-3", "text-white", "bg-crediblue-50", "hover:bg-blue-600", "rounded-lg", "font-semibold", "text-sm", "transition-all", "duration-300", "shadow-lg", "hover:shadow-xl"], ["routerLink", "/pages/gestion-cobros/subscripciones/registrar", 1, "w-full", "py-3", "text-white", "bg-crediblue-50", "hover:bg-blue-600", "rounded-lg", "font-semibold", "text-sm", "transition-all", "duration-300", "shadow-lg", "hover:shadow-xl"]], template: function MainSubscripcionesComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
    \u0275\u0275text(3, "Subscripciones");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 3)(5, "div", 4)(6, "fuse-card", 5)(7, "div", 6)(8, "div", 7)(9, "span", 8);
    \u0275\u0275text(10, "Subscripciones");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(11, "svg", 9);
    \u0275\u0275element(12, "path", 10);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(13, "button", 11);
    \u0275\u0275text(14, " Subscripciones ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "fuse-card", 5)(16, "div", 6)(17, "div", 7)(18, "span", 8);
    \u0275\u0275text(19, "Realizar Subscripci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(20, "svg", 9);
    \u0275\u0275element(21, "path", 10);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(22, "button", 12);
    \u0275\u0275text(23, " Realizar Subscripci\xF3n ");
    \u0275\u0275elementEnd()()()()();
  }
}, dependencies: [
  FuseCardComponent,
  RouterLink
] });
var MainSubscripcionesComponent = _MainSubscripcionesComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MainSubscripcionesComponent, { className: "MainSubscripcionesComponent", filePath: "src\\app\\pages\\gestion-cobros\\subscripciones\\main-subscripciones\\main-subscripciones.component.ts", lineNumber: 15 });
})();

// src/app/pages/gestion-cobros/subscripciones/grid-subscripcion/grid-subscripcion.component.ts
var _GridSubscripcionComponent = class _GridSubscripcionComponent {
  constructor() {
    this.datePipe = inject(DatePipe);
    this.estadoDatosService = inject(EstadosDatosService);
    this.subscriptionService = inject(SubscripcionService);
    this.router = inject(Router);
    this.searchTerm = "";
    this.data = [];
    this.columns = ["Creaci\xF3n", "Nombre", "Estado"];
    this.columnPropertyMap = {
      "Creaci\xF3n": "fechaCreacion",
      "Nombre": "nombre",
      "Estado": "estado"
    };
    this.buttons = [
      {
        label: "Ver",
        icon: "visibility",
        action: (element) => {
          console.log("Editing", element);
        }
      }
    ];
  }
  onSearch(event) {
    const target = event.target;
    this.searchTerm = target.value.trim().toLowerCase();
  }
  ngOnDestroy() {
  }
  ngOnInit() {
    this.getSubscripcion();
  }
  getSubscripcion() {
    this.subcription$ = this.subscriptionService.getSubcripciones().pipe(tap((response) => {
      response.data.forEach((items) => {
        items.fechaCreacion = this.datePipe.transform(items.fechaCreacion, "dd/MM/yyyy");
        items.estado = items.estado ? Estados.ACTIVO : Estados.INACTIVO;
      });
      return response;
    })).subscribe((response) => {
      if (response.data) {
        this.data = response.data;
      }
    });
  }
};
_GridSubscripcionComponent.\u0275fac = function GridSubscripcionComponent_Factory(t) {
  return new (t || _GridSubscripcionComponent)();
};
_GridSubscripcionComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GridSubscripcionComponent, selectors: [["app-grid-subscripcion"]], standalone: true, features: [\u0275\u0275ProvidersFeature([
  DatePipe,
  CurrencyPipe
]), \u0275\u0275StandaloneFeature], decls: 11, vars: 10, consts: [[1, "bg-card", "flex", "min-w-0", "flex-auto", "flex-col", "dark:bg-transparent", "sm:absolute", "sm:inset-0", "sm:overflow-hidden"], [1, "relative", "flex", "flex-0", "flex-col", "border-b", "px-6", "py-8", "sm:flex-row", "sm:items-center", "sm:justify-between", "md:px-8"], [1, "text-3xl", "font-semibold", "tracking-tight"], [1, "mt-6", "flex", "w-full", "shrink-0", "flex-col", "items-center", "sm:ml-4", "sm:mt-0", "sm:flex-row", "sm:space-x-2", "sm:w-auto"], [1, "fuse-mat-dense", "rounded-lg", "w-full", "sm:w-auto", "min-w-64", 3, "subscriptSizing"], ["matPrefix", "", 1, "icon-size-5", 3, "svgIcon"], ["matInput", "", 3, "input", "autocomplete", "placeholder"], [1, "flex", "flex-auto", "overflow-hidden"], [1, "flex", "flex-auto", "flex-col", "overflow-hidden", "sm:mb-18", "sm:overflow-y-auto"], [3, "columns", "displayedColumns", "columnPropertyMap", "data", "buttons", "searchTerm"]], template: function GridSubscripcionComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
    \u0275\u0275text(3, "Subscripci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 3)(5, "mat-form-field", 4);
    \u0275\u0275element(6, "mat-icon", 5);
    \u0275\u0275elementStart(7, "input", 6);
    \u0275\u0275listener("input", function GridSubscripcionComponent_Template_input_input_7_listener($event) {
      return ctx.onSearch($event);
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(8, "div", 7)(9, "div", 8);
    \u0275\u0275element(10, "app-custom-table", 9);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275property("subscriptSizing", "dynamic");
    \u0275\u0275advance();
    \u0275\u0275property("svgIcon", "heroicons_solid:magnifying-glass");
    \u0275\u0275advance();
    \u0275\u0275property("autocomplete", "off")("placeholder", "Buscar");
    \u0275\u0275advance(3);
    \u0275\u0275property("columns", ctx.columns)("displayedColumns", ctx.columns)("columnPropertyMap", ctx.columnPropertyMap)("data", ctx.data)("buttons", ctx.buttons)("searchTerm", ctx.searchTerm);
  }
}, dependencies: [
  CustomTableComponent,
  MatFormField,
  MatIcon,
  MatInput
] });
var GridSubscripcionComponent = _GridSubscripcionComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GridSubscripcionComponent, { className: "GridSubscripcionComponent", filePath: "src\\app\\pages\\gestion-cobros\\subscripciones\\grid-subscripcion\\grid-subscripcion.component.ts", lineNumber: 32 });
})();

// src/app/pages/gestion-cobros/subscripciones/subscripciones.routes.ts
var subscripciones_routes_default = [
  {
    path: "",
    component: MainSubscripcionesComponent
  },
  {
    path: "listar",
    component: GridSubscripcionComponent
  },
  {
    path: "registrar",
    component: FormSubscripcionesComponent
  }
];
export {
  subscripciones_routes_default as default
};
//# sourceMappingURL=chunk-CKWK52PY.js.map
