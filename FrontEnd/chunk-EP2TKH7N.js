import {
  AppSettingsService
} from "./chunk-ROMZC4L4.js";
import {
  HttpClient,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-WGDVSMOG.js";

// src/app/core/services/locacion.service.ts
var _LocacionService = class _LocacionService {
  constructor(_http, appSettingService) {
    this._http = _http;
    this.appSettingService = appSettingService;
  }
  getDepartamentos() {
    return this._http.get(this.appSettingService.departamentos.url.base);
  }
  getMunicipio(id) {
    return this._http.get(`${this.appSettingService.municipios.url.base}/${id}`);
  }
  postDepartamento(data) {
    delete data.id;
    return this._http.post(this.appSettingService.departamentos.url.base, data);
  }
  putDepartamento(data) {
    const id = data.id;
    delete data.id;
    return this._http.put(`${this.appSettingService.departamentos.url.base}/${id}`, data);
  }
};
_LocacionService.\u0275fac = function LocacionService_Factory(t) {
  return new (t || _LocacionService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(AppSettingsService));
};
_LocacionService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _LocacionService, factory: _LocacionService.\u0275fac, providedIn: "root" });
var LocacionService = _LocacionService;

export {
  LocacionService
};
//# sourceMappingURL=chunk-EP2TKH7N.js.map
