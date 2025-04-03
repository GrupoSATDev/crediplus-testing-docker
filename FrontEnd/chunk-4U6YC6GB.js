import {
  AppSettingsService
} from "./chunk-ROMZC4L4.js";
import {
  HttpClient,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-WGDVSMOG.js";

// src/app/core/services/usuarios.service.ts
var _UsuariosService = class _UsuariosService {
  constructor(_http, appSettingService) {
    this._http = _http;
    this.appSettingService = appSettingService;
  }
  getUsuarios(params) {
    return this._http.get(`${this.appSettingService.usuarios.url.base}/Table?idTipoUsuario=${params}`);
  }
  getUsuario(id) {
    return this._http.get(`${this.appSettingService.usuarios.url.base}/Empresa/${id}`);
  }
  postUsuarios(data) {
    delete data.id;
    return this._http.post(`${this.appSettingService.usuarios.url.base}/RegistroEmpresas`, data);
  }
  putUsuario(data) {
    const id = data.id;
    delete data.id;
    return this._http.put(`${this.appSettingService.usuarios.url.base}/Empresa/${id}`, data);
  }
  putUsuarioComunes(data) {
    const id = data.id;
    delete data.id;
    return this._http.put(`${this.appSettingService.usuarios.url.base}/Comunes`, data);
  }
  getUsuarioComun() {
    return this._http.get(`${this.appSettingService.usuarios.url.base}/Comunes`);
  }
};
_UsuariosService.\u0275fac = function UsuariosService_Factory(t) {
  return new (t || _UsuariosService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(AppSettingsService));
};
_UsuariosService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _UsuariosService, factory: _UsuariosService.\u0275fac, providedIn: "root" });
var UsuariosService = _UsuariosService;

export {
  UsuariosService
};
//# sourceMappingURL=chunk-4U6YC6GB.js.map
