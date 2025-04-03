import {
  AppSettingsService
} from "./chunk-ROMZC4L4.js";
import {
  HttpClient,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-WGDVSMOG.js";

// src/app/core/services/tipo-solicitudes.service.ts
var _TipoSolicitudesService = class _TipoSolicitudesService {
  constructor(_http, appSettings) {
    this._http = _http;
    this.appSettings = appSettings;
  }
  getTipos() {
    return this._http.get(this.appSettings.tipoSolicitudes.url.base);
  }
};
_TipoSolicitudesService.\u0275fac = function TipoSolicitudesService_Factory(t) {
  return new (t || _TipoSolicitudesService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(AppSettingsService));
};
_TipoSolicitudesService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _TipoSolicitudesService, factory: _TipoSolicitudesService.\u0275fac, providedIn: "root" });
var TipoSolicitudesService = _TipoSolicitudesService;

export {
  TipoSolicitudesService
};
//# sourceMappingURL=chunk-FEOMGNW7.js.map
