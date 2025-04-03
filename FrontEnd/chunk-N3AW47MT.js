import {
  AppSettingsService
} from "./chunk-ROMZC4L4.js";
import {
  HttpClient,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-WGDVSMOG.js";

// src/app/core/services/estado-creditos.service.ts
var _EstadoCreditosService = class _EstadoCreditosService {
  constructor(_http, appSettings) {
    this._http = _http;
    this.appSettings = appSettings;
  }
  getEstadoCreditos() {
    return this._http.get(this.appSettings.estadoCreditos.url.base);
  }
  getEstadoCobros() {
    return this._http.get(this.appSettings.estadoCreditos.url.baseCobros);
  }
  getDetalleConsumo() {
    return this._http.get(this.appSettings.estadoCreditos.url.detalleConsumo);
  }
};
_EstadoCreditosService.\u0275fac = function EstadoCreditosService_Factory(t) {
  return new (t || _EstadoCreditosService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(AppSettingsService));
};
_EstadoCreditosService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _EstadoCreditosService, factory: _EstadoCreditosService.\u0275fac, providedIn: "root" });
var EstadoCreditosService = _EstadoCreditosService;

export {
  EstadoCreditosService
};
//# sourceMappingURL=chunk-N3AW47MT.js.map
