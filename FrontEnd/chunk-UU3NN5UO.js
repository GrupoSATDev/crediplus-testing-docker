import {
  AppSettingsService
} from "./chunk-ROMZC4L4.js";
import {
  HttpClient,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-WGDVSMOG.js";

// src/app/core/services/empresas-maestras.service.ts
var _EmpresasMaestrasService = class _EmpresasMaestrasService {
  constructor(_http, appSettings) {
    this._http = _http;
    this.appSettings = appSettings;
  }
  getEmpresas() {
    return this._http.get(this.appSettings.empresasMaestras.url.base);
  }
  postEmpresa(data) {
    delete data.id;
    return this._http.post(this.appSettings.empresasMaestras.url.base, data);
  }
  putEmpresa(data) {
    const id = data.id;
    delete data.id;
    return this._http.put(`${this.appSettings.empresasMaestras.url.base}/${id}`, data);
  }
};
_EmpresasMaestrasService.\u0275fac = function EmpresasMaestrasService_Factory(t) {
  return new (t || _EmpresasMaestrasService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(AppSettingsService));
};
_EmpresasMaestrasService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _EmpresasMaestrasService, factory: _EmpresasMaestrasService.\u0275fac, providedIn: "root" });
var EmpresasMaestrasService = _EmpresasMaestrasService;

export {
  EmpresasMaestrasService
};
//# sourceMappingURL=chunk-UU3NN5UO.js.map
