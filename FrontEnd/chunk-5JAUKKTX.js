import {
  Subject,
  ɵɵdefineInjectable
} from "./chunk-WGDVSMOG.js";

// src/app/core/services/estados-datos.service.ts
var _EstadosDatosService = class _EstadosDatosService {
  constructor() {
    this.stateGrid = new Subject();
    this.stateGridSolicitudes = new Subject();
  }
};
_EstadosDatosService.\u0275fac = function EstadosDatosService_Factory(t) {
  return new (t || _EstadosDatosService)();
};
_EstadosDatosService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _EstadosDatosService, factory: _EstadosDatosService.\u0275fac, providedIn: "root" });
var EstadosDatosService = _EstadosDatosService;

export {
  EstadosDatosService
};
//# sourceMappingURL=chunk-5JAUKKTX.js.map
