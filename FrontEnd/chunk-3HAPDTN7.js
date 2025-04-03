import {
  AppSettingsService
} from "./chunk-ROMZC4L4.js";
import {
  HttpClient,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-WGDVSMOG.js";

// src/app/core/services/tipos-documentos.service.ts
var _TiposDocumentosService = class _TiposDocumentosService {
  constructor(_http, appSettings) {
    this._http = _http;
    this.appSettings = appSettings;
  }
  getTiposDocumentos() {
    return this._http.get(this.appSettings.tiposDocumentos.url.base);
  }
  postDocumentos(data) {
    delete data.id;
    return this._http.post(this.appSettings.tiposDocumentos.url.base, data);
  }
  putDocumentos(data) {
    const id = data.id;
    delete data.id;
    return this._http.put(`${this.appSettings.tiposDocumentos.url.base}/${id}`, data);
  }
};
_TiposDocumentosService.\u0275fac = function TiposDocumentosService_Factory(t) {
  return new (t || _TiposDocumentosService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(AppSettingsService));
};
_TiposDocumentosService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _TiposDocumentosService, factory: _TiposDocumentosService.\u0275fac, providedIn: "root" });
var TiposDocumentosService = _TiposDocumentosService;

export {
  TiposDocumentosService
};
//# sourceMappingURL=chunk-3HAPDTN7.js.map
