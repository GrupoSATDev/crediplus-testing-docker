import {
  FuseCardComponent
} from "./chunk-EHCERKCP.js";
import "./chunk-6XMXDB2K.js";
import "./chunk-ZB3PSQQS.js";
import "./chunk-CZDVBWDU.js";
import "./chunk-NACP6IOB.js";
import "./chunk-IZMZQUCC.js";
import {
  RouterLink
} from "./chunk-L2WXMDPA.js";
import "./chunk-74CJHXHU.js";
import "./chunk-YZGIFTGF.js";
import "./chunk-G7E77ZCS.js";
import {
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵtext
} from "./chunk-WGDVSMOG.js";
import "./chunk-AYDYM6RQ.js";

// src/app/pages/gestion-cobros/cobro-trabajadores-maestro/cobro-trabajadores-maestro/cobro-trabajadores-maestro.component.ts
var _CobroTrabajadoresMaestroComponent = class _CobroTrabajadoresMaestroComponent {
};
_CobroTrabajadoresMaestroComponent.\u0275fac = function CobroTrabajadoresMaestroComponent_Factory(t) {
  return new (t || _CobroTrabajadoresMaestroComponent)();
};
_CobroTrabajadoresMaestroComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CobroTrabajadoresMaestroComponent, selectors: [["app-cobro-trabajadores-maestro"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 32, vars: 0, consts: [[1, "bg-card", "flex", "min-w-0", "flex-auto", "flex-col", "dark:bg-transparent", "sm:absolute", "sm:inset-0", "sm:overflow-hidden"], [1, "relative", "flex", "flex-0", "flex-col", "border-b", "px-6", "py-8", "sm:flex-row", "sm:items-center", "sm:justify-between", "md:px-8"], [1, "text-3xl", "font-semibold", "tracking-tight"], [1, "flex", "flex-auto", "overflow-hidden"], [1, "flex", "flex-auto", "flex-row", "items-baseline", "flex-wrap", "gap-6", "justify-center", "overflow-hidden", "sm:overflow-y-auto", "bg-gray-100", "sm:p-2"], [1, "filter-list", "flex", "w-full", "max-w-lg", "flex-col", "p-8", "sm:p-10", "mt-6", "shadow-xl", "rounded-xl", "bg-white", "hover:shadow-2xl", "transition-all", "duration-300", "transform", "hover:scale-105"], [1, "flex", "justify-between", "items-center", "mb-6"], [1, "flex", "items-center", "space-x-3"], [1, "font-semibold", "text-2xl", "text-blue-900"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "h-6", "w-6", "text-blue-500"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M13 7H7v6m6 0h5m-8 4H7m6 0h5"], [1, "space-y-4", "text-gray-600"], [1, "text-sm", "leading-relaxed"], [1, "mt-8"], ["routerLink", "/pages/gestion-cobros/trabajadores", 1, "w-full", "py-3", "text-white", "bg-crediblue-50", "hover:bg-blue-600", "rounded-lg", "font-semibold", "text-sm", "transition-all", "duration-300", "shadow-lg", "hover:shadow-xl"], ["routerLink", "/pages/gestion-cobros/trabajador", 1, "w-full", "py-3", "text-white", "bg-crediblue-50", "hover:bg-blue-600", "rounded-lg", "font-semibold", "text-sm", "transition-all", "duration-300", "shadow-lg", "hover:shadow-xl"]], template: function CobroTrabajadoresMaestroComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
    \u0275\u0275text(3, "Cobro Trabajadores");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 3)(5, "div", 4)(6, "fuse-card", 5)(7, "div", 6)(8, "div", 7)(9, "span", 8);
    \u0275\u0275text(10, "Registro de Cobro Masivo");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(11, "svg", 9);
    \u0275\u0275element(12, "path", 10);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(13, "div", 11)(14, "p", 12);
    \u0275\u0275text(15, " Permite registrar los pagos de todos trabajadores por empresa, recopila un listado masivo de los trabajadores que tienen saldo pendiente a la fecha. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 13)(17, "button", 14);
    \u0275\u0275text(18, " Cobro Masivo ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "fuse-card", 5)(20, "div", 6)(21, "div", 7)(22, "span", 8);
    \u0275\u0275text(23, "Registro de Cobro Individual");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(24, "svg", 9);
    \u0275\u0275element(25, "path", 10);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(26, "div", 11)(27, "p", 12);
    \u0275\u0275text(28, " Permite registrar los pagos individuales de todos los trabajadores que tienen saldo pendiente a la fecha de corte seleccionada. (Esta opci\xF3n muestra todos los trabajadores de todas las empresas). ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 13)(30, "button", 15);
    \u0275\u0275text(31, " Cobro Individual ");
    \u0275\u0275elementEnd()()()()()();
  }
}, dependencies: [
  FuseCardComponent,
  RouterLink
] });
var CobroTrabajadoresMaestroComponent = _CobroTrabajadoresMaestroComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CobroTrabajadoresMaestroComponent, { className: "CobroTrabajadoresMaestroComponent", filePath: "src\\app\\pages\\gestion-cobros\\cobro-trabajadores-maestro\\cobro-trabajadores-maestro\\cobro-trabajadores-maestro.component.ts", lineNumber: 33 });
})();

// src/app/pages/gestion-cobros/cobro-trabajadores-maestro/cobro-trabajadores-maestro.routes.ts
var cobro_trabajadores_maestro_routes_default = [
  {
    path: "",
    component: CobroTrabajadoresMaestroComponent
  }
];
export {
  cobro_trabajadores_maestro_routes_default as default
};
//# sourceMappingURL=chunk-D3KU5AAA.js.map
