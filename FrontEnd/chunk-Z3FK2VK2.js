import {
  AppSettingsService
} from "./chunk-ROMZC4L4.js";
import {
  HttpClient,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-WGDVSMOG.js";

// src/app/core/services/empresas-clientes.service.ts
var _EmpresasClientesService = class _EmpresasClientesService {
  constructor(_http, appSettings) {
    this._http = _http;
    this.appSettings = appSettings;
  }
  getEmpresas() {
    return this._http.get(this.appSettings.empresasClientes.url.base);
  }
  getEmpresasClientes() {
    return this._http.get(this.appSettings.empresasClientes.url.baseTrabajador);
  }
  getEmpresasClientesSelect() {
    return this._http.get(`${this.appSettings.empresasClientes.url.base}/Select`);
  }
  postEmpresaCliente(data) {
    delete data.id;
    return this._http.post(this.appSettings.empresasClientes.url.base, data);
  }
  getEmpresaCliente(id) {
    return this._http.get(`${this.appSettings.empresasClientes.url.base}/${id}`);
  }
  putEmpresaCliente(data) {
    const id = data.id;
    delete data.id;
    return this._http.put(`${this.appSettings.empresasClientes.url.base}/${id}`, data);
  }
};
_EmpresasClientesService.\u0275fac = function EmpresasClientesService_Factory(t) {
  return new (t || _EmpresasClientesService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(AppSettingsService));
};
_EmpresasClientesService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _EmpresasClientesService, factory: _EmpresasClientesService.\u0275fac, providedIn: "root" });
var EmpresasClientesService = _EmpresasClientesService;

export {
  EmpresasClientesService
};
//# sourceMappingURL=chunk-Z3FK2VK2.js.map
