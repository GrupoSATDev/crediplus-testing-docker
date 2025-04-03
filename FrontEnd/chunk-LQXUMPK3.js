import {
  AppSettingsService
} from "./chunk-ROMZC4L4.js";
import {
  HttpClient,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-WGDVSMOG.js";

// src/app/core/services/cobro-trabajadores.service.ts
var _CobroTrabajadoresService = class _CobroTrabajadoresService {
  constructor(_http, appSettings) {
    this._http = _http;
    this.appSettings = appSettings;
  }
  getCobros() {
    return this._http.get(this.appSettings.cobroTrabajadores.url.base);
  }
  getCobroEmpleado(id) {
    return this._http.get(`${this.appSettings.cobroTrabajadores.url.base}/${id}`);
  }
  getCobrosGrid(idEstado) {
    return this._http.get(`${this.appSettings.cobroTrabajadores.url.baseTabla}/${idEstado}`);
  }
  getCobroTrabajadores(data) {
    const { fechaFinallData, idSubEmpresa } = data;
    return this._http.get(`${this.appSettings.cobroTrabajadores.url.baseTrabajador}?fechaFinal=${fechaFinallData}&IdSubEmpresa=${idSubEmpresa}`);
  }
  getCobroTrabajador(data) {
    const { fechaFinallData, idSubEmpresa, idTrabajador } = data;
    return this._http.get(`${this.appSettings.cobroTrabajadores.url.baseTrabajadorIndividual}?fechaFinal=${fechaFinallData}&IdSubEmpresa=${idSubEmpresa}&Idtrabajador=${idTrabajador}`);
  }
};
_CobroTrabajadoresService.\u0275fac = function CobroTrabajadoresService_Factory(t) {
  return new (t || _CobroTrabajadoresService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(AppSettingsService));
};
_CobroTrabajadoresService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CobroTrabajadoresService, factory: _CobroTrabajadoresService.\u0275fac, providedIn: "root" });
var CobroTrabajadoresService = _CobroTrabajadoresService;

export {
  CobroTrabajadoresService
};
//# sourceMappingURL=chunk-LQXUMPK3.js.map
