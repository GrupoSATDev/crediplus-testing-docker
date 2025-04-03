import {
  AppSettingsService
} from "./chunk-ROMZC4L4.js";
import {
  HttpClient,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-WGDVSMOG.js";

// src/app/core/services/cobros-fijos.service.ts
var _CobrosFijosService = class _CobrosFijosService {
  constructor(_http, appSettings) {
    this._http = _http;
    this.appSettings = appSettings;
  }
  getCobros() {
    return this._http.get(this.appSettings.cobrosFijos.url.base);
  }
  getCobro(id) {
    return this._http.get(`${this.appSettings.cobrosFijos.url.base}/${id}`);
  }
  postCobros(data) {
    delete data.id;
    return this._http.post(this.appSettings.cobrosFijos.url.base, data);
  }
  putCobros(data) {
    const id = data.id;
    delete data.id;
    return this._http.put(`${this.appSettings.cobrosFijos.url.base}/${id}`, data);
  }
};
_CobrosFijosService.\u0275fac = function CobrosFijosService_Factory(t) {
  return new (t || _CobrosFijosService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(AppSettingsService));
};
_CobrosFijosService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CobrosFijosService, factory: _CobrosFijosService.\u0275fac, providedIn: "root" });
var CobrosFijosService = _CobrosFijosService;

export {
  CobrosFijosService
};
//# sourceMappingURL=chunk-DNOYBJ5X.js.map
