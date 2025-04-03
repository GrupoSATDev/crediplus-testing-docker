import {
  AppSettingsService
} from "./chunk-ROMZC4L4.js";
import {
  HttpClient,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-WGDVSMOG.js";

// src/app/core/services/empleados.service.ts
var _EmpleadosService = class _EmpleadosService {
  constructor(_http, appSettings) {
    this._http = _http;
    this.appSettings = appSettings;
  }
  getEmpleados() {
    return this._http.get(this.appSettings.empleados.url.base);
  }
  getEmpleadosSubempresas(id) {
    return this._http.get(`${this.appSettings.empleados.url.base}/subEmpresa?IdSubEmpresa=${id}`);
  }
  getEmpleado(id) {
    return this._http.get(`${this.appSettings.empleados.url.base}/${id}`);
  }
  postEmpleados(data) {
    delete data.id;
    return this._http.post(this.appSettings.empleados.url.base, data);
  }
  putEmpleados(data) {
    const id = data.id;
    delete data.id;
    return this._http.put(`${this.appSettings.empleados.url.base}/${id}`, data);
  }
  getEmpleadoParams(data) {
    const { idTipoDoc, numDocumento } = data;
    return this._http.get(`${this.appSettings.empleados.url.base}/Consultar?idTdocumento=${idTipoDoc}&numDocumento=${numDocumento}`);
  }
  getValidaInfo() {
    return this._http.get(this.appSettings.empleados.url.baseValidate);
  }
};
_EmpleadosService.\u0275fac = function EmpleadosService_Factory(t) {
  return new (t || _EmpleadosService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(AppSettingsService));
};
_EmpleadosService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _EmpleadosService, factory: _EmpleadosService.\u0275fac, providedIn: "root" });
var EmpleadosService = _EmpleadosService;

export {
  EmpleadosService
};
//# sourceMappingURL=chunk-WT4TBEYC.js.map
