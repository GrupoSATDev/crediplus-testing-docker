import {
  ɵɵdefinePipe
} from "./chunk-WGDVSMOG.js";

// src/app/core/pipes/formato-options.pipe.ts
var _FormatoOptionsPipe = class _FormatoOptionsPipe {
  transform(item) {
    return `${item.numCredito} - ${new Date(item.fechaAprobacion).toLocaleDateString("es-ES")}`;
  }
};
_FormatoOptionsPipe.\u0275fac = function FormatoOptionsPipe_Factory(t) {
  return new (t || _FormatoOptionsPipe)();
};
_FormatoOptionsPipe.\u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "formatoOptions", type: _FormatoOptionsPipe, pure: true, standalone: true });
var FormatoOptionsPipe = _FormatoOptionsPipe;

export {
  FormatoOptionsPipe
};
//# sourceMappingURL=chunk-SQJDTHWM.js.map
