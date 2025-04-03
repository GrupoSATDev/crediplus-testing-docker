import {
  AppSettingsService
} from "./chunk-ROMZC4L4.js";
import {
  HttpClient,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-WGDVSMOG.js";

// src/app/core/services/subscripcion.service.ts
var _SubscripcionService = class _SubscripcionService {
  constructor(_http, appSettingService) {
    this._http = _http;
    this.appSettingService = appSettingService;
  }
  getSubcripciones() {
    return this._http.get(this.appSettingService.subcripciones.url.base);
  }
  getSubcripcion(id) {
    return this._http.get(`${this.appSettingService.subcripciones.url.base}`);
  }
};
_SubscripcionService.\u0275fac = function SubscripcionService_Factory(t) {
  return new (t || _SubscripcionService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(AppSettingsService));
};
_SubscripcionService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SubscripcionService, factory: _SubscripcionService.\u0275fac, providedIn: "root" });
var SubscripcionService = _SubscripcionService;

export {
  SubscripcionService
};
//# sourceMappingURL=chunk-N2CJV5EX.js.map
