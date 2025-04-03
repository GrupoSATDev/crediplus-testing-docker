import {
  AppSettingsService
} from "./chunk-ROMZC4L4.js";
import {
  HttpClient,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-WGDVSMOG.js";

// src/app/core/services/cuentas-bancarias.service.ts
var _CuentasBancariasService = class _CuentasBancariasService {
  constructor(_http, appSettings) {
    this._http = _http;
    this.appSettings = appSettings;
  }
  getCuentas() {
    return this._http.get(this.appSettings.cuentasBancarias.url.base);
  }
  getCuentasActivas() {
    return this._http.get(`${this.appSettings.cuentasBancarias.url.base}/Select`);
  }
  getCuenta(id) {
    return this._http.get(`${this.appSettings.cuentasBancarias.url.base}/${id}`);
  }
  postCuentas(data) {
    delete data.id;
    return this._http.post(this.appSettings.cuentasBancarias.url.base, data);
  }
  putCuentas(data) {
    const id = data.id;
    delete data.id;
    return this._http.put(`${this.appSettings.cuentasBancarias.url.base}/${id}`, data);
  }
};
_CuentasBancariasService.\u0275fac = function CuentasBancariasService_Factory(t) {
  return new (t || _CuentasBancariasService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(AppSettingsService));
};
_CuentasBancariasService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CuentasBancariasService, factory: _CuentasBancariasService.\u0275fac, providedIn: "root" });
var CuentasBancariasService = _CuentasBancariasService;

export {
  CuentasBancariasService
};
//# sourceMappingURL=chunk-RZQCSNVR.js.map
