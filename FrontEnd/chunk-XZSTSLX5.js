import {
  AppSettingsService
} from "./chunk-ROMZC4L4.js";
import {
  HttpClient,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-WGDVSMOG.js";

// src/app/core/services/reportes.service.ts
var _ReportesService = class _ReportesService {
  constructor(_http, appSettings) {
    this._http = _http;
    this.appSettings = appSettings;
  }
  getReporteConsumo(data) {
    console.log(data);
    return this._http.get(`${this.appSettings.reportes.url.reporteConsumo}?idEstadoCredito=${data.idEstadoCredito}&fechaInicio=${data.fechaInicio}&fechaFinal=${data.fechaFinal}`);
  }
  getReporteDesembolsos(data) {
    console.log(data);
    return this._http.get(`${this.appSettings.reportes.url.reporteDesembolso}?fechaInicio=${data.fechaInicio}&fechaFinal=${data.fechaFinal}`);
  }
  getReporteCobros(data) {
    console.log(data);
    return this._http.get(`${this.appSettings.reportes.url.reporteCobro}?idEstadoCredito=${data.idEstadoCredito}&fechaInicio=${data.fechaInicio}&fechaFinal=${data.fechaFinal}`);
  }
  getReporteSolicitudes(data) {
    console.log(data);
    return this._http.get(`${this.appSettings.reportes.url.reporteSolicitudes}?idTipoSolicitud=${data.idTipoSolicitud}&fechaInicio=${data.fechaInicio}&fechaFinal=${data.fechaFinal}`);
  }
  getReporteDeudas(param) {
    return this._http.get(`${this.appSettings.reportes.url.reporteDeudas}?idEstadoCredito=${param}`);
  }
};
_ReportesService.\u0275fac = function ReportesService_Factory(t) {
  return new (t || _ReportesService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(AppSettingsService));
};
_ReportesService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ReportesService, factory: _ReportesService.\u0275fac, providedIn: "root" });
var ReportesService = _ReportesService;

export {
  ReportesService
};
//# sourceMappingURL=chunk-XZSTSLX5.js.map
