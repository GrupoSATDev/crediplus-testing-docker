import {
  AppSettingsService
} from "./chunk-ROMZC4L4.js";
import {
  HttpClient,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-WGDVSMOG.js";

// src/app/core/services/pago-trabajadores.service.ts
var _PagoTrabajadoresService = class _PagoTrabajadoresService {
  constructor(_http, appSettings) {
    this._http = _http;
    this.appSettings = appSettings;
  }
  getPagosTrabajadores(params) {
    return this._http.get(`${this.appSettings.pagoTrabajadores.url.base}/Tabla?IdEstadoCobroPago=${params}`);
  }
  getPagoTrabajadorIndividual(params) {
    return this._http.get(`${this.appSettings.pagoTrabajadores.url.base}/TablaIndividual?IdEstadoCobroPago=${params}`);
  }
  postPagosTrabajadores(data) {
    return this._http.post(this.appSettings.pagoTrabajadores.url.base, data);
  }
  postPagoTrabajador(data) {
    return this._http.post(`${this.appSettings.pagoTrabajadores.url.base}/Individual`, data);
  }
  getPagosTrabajador(id) {
    return this._http.get(`${this.appSettings.pagoTrabajadores.url.base}/${id}`);
  }
  getPagosTrabajadorIndividual(id) {
    return this._http.get(`${this.appSettings.pagoTrabajadores.url.base}/individual/${id}`);
  }
  tipoPagoTrabajadores() {
    return this._http.get(this.appSettings.pagoTrabajadores.url.baseTipo);
  }
  putPagoTrabajadorIndividual(data) {
    const id = data.id;
    delete data.id;
    return this._http.put(`${this.appSettings.pagoTrabajadores.url.base}/${id}`, data);
  }
  pagoTrabajadoresAbono(data) {
    return this._http.post(`${this.appSettings.pagoTrabajadores.url.base}/Abonos`, data);
  }
};
_PagoTrabajadoresService.\u0275fac = function PagoTrabajadoresService_Factory(t) {
  return new (t || _PagoTrabajadoresService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(AppSettingsService));
};
_PagoTrabajadoresService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PagoTrabajadoresService, factory: _PagoTrabajadoresService.\u0275fac, providedIn: "root" });
var PagoTrabajadoresService = _PagoTrabajadoresService;

// src/app/core/enums/codigo-cobro-trabajador.ts
var CodigoCobroTrabajador;
(function(CodigoCobroTrabajador2) {
  CodigoCobroTrabajador2["PENDIENTES"] = "e626ea69-e995-4462-be9a-705326114702";
  CodigoCobroTrabajador2["PAGADOS"] = "e626ea69-e995-4462-be9a-705326114791";
})(CodigoCobroTrabajador || (CodigoCobroTrabajador = {}));

export {
  PagoTrabajadoresService,
  CodigoCobroTrabajador
};
//# sourceMappingURL=chunk-DM7P2DYO.js.map
