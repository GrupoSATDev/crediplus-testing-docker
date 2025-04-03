import {
  AppSettingsService
} from "./chunk-ROMZC4L4.js";
import {
  HttpClient,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-WGDVSMOG.js";

// src/app/core/services/tipos-pagos.service.ts
var _TiposPagosService = class _TiposPagosService {
  constructor(_http, appSettingService) {
    this._http = _http;
    this.appSettingService = appSettingService;
  }
  getTiposPagos() {
    return this._http.get(this.appSettingService.tiposPagos.url.base);
  }
  postTiposPagos(data) {
    delete data.id;
    return this._http.post(this.appSettingService.tiposPagos.url.base, data);
  }
  putTiposPagos(data) {
    const id = data.id;
    return this._http.put(`${this.appSettingService.tiposPagos.url.base}/${id}`, data);
  }
};
_TiposPagosService.\u0275fac = function TiposPagosService_Factory(t) {
  return new (t || _TiposPagosService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(AppSettingsService));
};
_TiposPagosService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _TiposPagosService, factory: _TiposPagosService.\u0275fac, providedIn: "root" });
var TiposPagosService = _TiposPagosService;

export {
  TiposPagosService
};
//# sourceMappingURL=chunk-73C42FVP.js.map
