import {
  AppSettingsService
} from "./chunk-ROMZC4L4.js";
import {
  HttpClient,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-WGDVSMOG.js";

// src/app/core/services/solicitudes.service.ts
var _SolicitudesService = class _SolicitudesService {
  constructor(_http, appSettings) {
    this._http = _http;
    this.appSettings = appSettings;
  }
  getSolicitudes(param) {
    return this._http.get(`${this.appSettings.solicitudesCreditos.url.base}/CreditoAumento/${param}`);
  }
  getSolicitudesDesembolso(param) {
    return this._http.get(`${this.appSettings.solicitudesCreditos.url.base}/Desembolso/${param}`);
  }
  getSolicitud(id) {
    return this._http.get(`${this.appSettings.solicitudesCreditos.url.base}/${id}`);
  }
  postSolicitudes(data) {
    delete data.id;
    return this._http.post(this.appSettings.solicitudesCreditos.url.base, data);
  }
  putSolicitudes(data) {
    const id = data.id;
    delete data.id;
    return this._http.put(`${this.appSettings.solicitudesCreditos.url.base}/${id}`, data);
  }
  patchSolicitud(data) {
    const id = data.id;
    delete data.id;
    const { idEstado } = data;
    return this._http.patch(`${this.appSettings.solicitudesCreditos.url.base}/${id}?idEstado=${idEstado}`, {});
  }
  patchSolicitudDesembolso(data) {
    const id = data.id;
    delete data.id;
    const { idEstado } = data;
    return this._http.patch(`${this.appSettings.solicitudesCreditos.url.base}/Desembolso/${id}?idEstado=${idEstado}`, {});
  }
};
_SolicitudesService.\u0275fac = function SolicitudesService_Factory(t) {
  return new (t || _SolicitudesService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(AppSettingsService));
};
_SolicitudesService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SolicitudesService, factory: _SolicitudesService.\u0275fac, providedIn: "root" });
var SolicitudesService = _SolicitudesService;

export {
  SolicitudesService
};
//# sourceMappingURL=chunk-W23MYNPT.js.map
