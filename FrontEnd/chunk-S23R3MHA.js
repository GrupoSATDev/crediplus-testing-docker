import {
  AppSettingsService
} from "./chunk-ROMZC4L4.js";
import {
  HttpClient,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-WGDVSMOG.js";

// src/app/core/services/detalle-consumo.service.ts
var _DetalleConsumoService = class _DetalleConsumoService {
  constructor(_http, appSettings) {
    this._http = _http;
    this.appSettings = appSettings;
  }
  getDetalle(param) {
    return this._http.get(`${this.appSettings.detalleConsumos.url.base}/DetalleConsumo/${param}`);
  }
  getConsumo(id) {
    return this._http.get(`${this.appSettings.detalleConsumos.url.base}/${id}`);
  }
  getDetalleConsumoDesembolsos() {
    return this._http.get(`${this.appSettings.detalleConsumos.url.desembolso}`);
  }
  getDetalleConsumoDesembolsosRealizado(params) {
    return this._http.get(`${this.appSettings.detalleConsumos.url.detalleDesembolsoRealizado}/${params}`);
  }
  getDetalleConsumoDesembolso(id) {
    return this._http.get(`${this.appSettings.detalleConsumos.url.desembolso}/${id}`);
  }
  getDetallesConsumoDesembolsos(id) {
    return this._http.get(`${this.appSettings.detalleConsumos.url.desembolsos}/${id}`);
  }
  getConsumoTrabajador(id) {
    return this._http.get(`${this.appSettings.detalleConsumos.url.baseTrabajador}/${id}`);
  }
  postDetalle(data) {
    return this._http.post(this.appSettings.detalleConsumos.url.base, data);
  }
  postDesembolso(data) {
    return this._http.post(this.appSettings.detalleConsumos.url.base, data);
  }
  getResumen(id) {
    return this._http.get(`${this.appSettings.detalleConsumos.url.base}/trabajador/${id}`);
  }
  getPagosAliados(data) {
    const { fechaFinallData, idSubEmpresa } = data;
    return this._http.get(`${this.appSettings.detalleConsumos.url.aliado}?fechaFinal=${fechaFinallData}&IdSubEmpresa=${idSubEmpresa}`);
  }
  patchConsumo(data) {
    const id = data.id;
    delete data.id;
    const { idEstado } = data;
    return this._http.patch(`${this.appSettings.detalleConsumos.url.base}/${id}?idEstado=${idEstado}`, {});
  }
  postConsumoFijo(data) {
    return this._http.post(this.appSettings.detalleConsumos.url.cobroFijo, data);
  }
};
_DetalleConsumoService.\u0275fac = function DetalleConsumoService_Factory(t) {
  return new (t || _DetalleConsumoService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(AppSettingsService));
};
_DetalleConsumoService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _DetalleConsumoService, factory: _DetalleConsumoService.\u0275fac, providedIn: "root" });
var DetalleConsumoService = _DetalleConsumoService;

export {
  DetalleConsumoService
};
//# sourceMappingURL=chunk-S23R3MHA.js.map
