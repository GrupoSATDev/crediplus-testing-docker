import {
  AppSettingsService
} from "./chunk-ROMZC4L4.js";
import {
  HttpClient,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-WGDVSMOG.js";

// src/app/core/services/tipo-cuentas.service.ts
var _TipoCuentasService = class _TipoCuentasService {
  constructor(_http, appSettings) {
    this._http = _http;
    this.appSettings = appSettings;
  }
  getTipoCuentas() {
    return this._http.get(this.appSettings.tipoCuentas.url.base);
  }
  getTipoCuenta(id) {
    return this._http.get(`${this.appSettings.tipoCuentas.url.base}/${id}`);
  }
};
_TipoCuentasService.\u0275fac = function TipoCuentasService_Factory(t) {
  return new (t || _TipoCuentasService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(AppSettingsService));
};
_TipoCuentasService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _TipoCuentasService, factory: _TipoCuentasService.\u0275fac, providedIn: "root" });
var TipoCuentasService = _TipoCuentasService;

export {
  TipoCuentasService
};
//# sourceMappingURL=chunk-HEWZPKYP.js.map
