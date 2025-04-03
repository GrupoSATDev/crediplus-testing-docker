import {
  AppSettingsService
} from "./chunk-ROMZC4L4.js";
import {
  HttpClient,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-WGDVSMOG.js";

// src/app/core/services/tasas-interes.service.ts
var _TasasInteresService = class _TasasInteresService {
  constructor(_http, appSettingService) {
    this._http = _http;
    this.appSettingService = appSettingService;
  }
  getTass() {
    return this._http.get(this.appSettingService.tasasIntereses.url.base);
  }
  getTasasParametros(parametro) {
    return this._http.get(`${this.appSettingService.tasasIntereses.url.base}/${parametro}`);
  }
  postTasas(data) {
    delete data.id;
    return this._http.post(this.appSettingService.tasasIntereses.url.base, data);
  }
  putTasas(data) {
    const id = data.id;
    delete data.id;
    return this._http.put(`${this.appSettingService.tasasIntereses.url.base}/${id}`, data);
  }
};
_TasasInteresService.\u0275fac = function TasasInteresService_Factory(t) {
  return new (t || _TasasInteresService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(AppSettingsService));
};
_TasasInteresService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _TasasInteresService, factory: _TasasInteresService.\u0275fac, providedIn: "root" });
var TasasInteresService = _TasasInteresService;

export {
  TasasInteresService
};
//# sourceMappingURL=chunk-SXSZR7T2.js.map
