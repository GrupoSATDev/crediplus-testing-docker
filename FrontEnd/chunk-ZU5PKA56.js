import {
  AppSettingsService
} from "./chunk-ROMZC4L4.js";
import {
  HttpClient,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-WGDVSMOG.js";

// src/app/core/services/bancos.service.ts
var _BancosService = class _BancosService {
  constructor(_http, appSettings) {
    this._http = _http;
    this.appSettings = appSettings;
  }
  getBancos() {
    return this._http.get(this.appSettings.bancos.url.base);
  }
  getBanco(id) {
    return this._http.get(`${this.appSettings.bancos.url.base}/${id}`);
  }
  postBancos(data) {
    delete data.id;
    return this._http.post(this.appSettings.bancos.url.base, data);
  }
  putBancos(data) {
    const id = data.id;
    delete data.id;
    return this._http.put(`${this.appSettings.bancos.url.base}/${id}`, data);
  }
};
_BancosService.\u0275fac = function BancosService_Factory(t) {
  return new (t || _BancosService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(AppSettingsService));
};
_BancosService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _BancosService, factory: _BancosService.\u0275fac, providedIn: "root" });
var BancosService = _BancosService;

export {
  BancosService
};
//# sourceMappingURL=chunk-ZU5PKA56.js.map
