import {
  AppSettingsService
} from "./chunk-ROMZC4L4.js";
import {
  HttpClient,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-WGDVSMOG.js";

// src/app/core/services/generos.service.ts
var _GenerosService = class _GenerosService {
  constructor(_http, appSettings) {
    this._http = _http;
    this.appSettings = appSettings;
  }
  getGeneros() {
    return this._http.get(this.appSettings.generos.url.base);
  }
  postGeneros(data) {
    delete data.id;
    return this._http.post(this.appSettings.generos.url.base, data);
  }
  putGeneros(data) {
    const id = data.id;
    delete data.id;
    return this._http.put(`${this.appSettings.generos.url.base}/${id}`, data);
  }
};
_GenerosService.\u0275fac = function GenerosService_Factory(t) {
  return new (t || _GenerosService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(AppSettingsService));
};
_GenerosService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _GenerosService, factory: _GenerosService.\u0275fac, providedIn: "root" });
var GenerosService = _GenerosService;

export {
  GenerosService
};
//# sourceMappingURL=chunk-24H3OWIV.js.map
