import {
  AppSettingsService
} from "./chunk-ROMZC4L4.js";
import {
  HttpClient,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-WGDVSMOG.js";

// src/app/core/services/capital-inversion.service.ts
var _CapitalInversionService = class _CapitalInversionService {
  constructor(_http, appSettings) {
    this._http = _http;
    this.appSettings = appSettings;
  }
  getCapitales() {
    return this._http.get(this.appSettings.capitalInversion.url.base);
  }
  getCapital(id) {
    return this._http.get(`${this.appSettings.capitalInversion.url.base}/${id}`);
  }
  postCapitales(data) {
    delete data.id;
    return this._http.post(this.appSettings.capitalInversion.url.base, data);
  }
  putCapitales(data) {
    const id = data.id;
    return this._http.put(`${this.appSettings.capitalInversion.url.base}/${id}`, data);
  }
};
_CapitalInversionService.\u0275fac = function CapitalInversionService_Factory(t) {
  return new (t || _CapitalInversionService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(AppSettingsService));
};
_CapitalInversionService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CapitalInversionService, factory: _CapitalInversionService.\u0275fac, providedIn: "root" });
var CapitalInversionService = _CapitalInversionService;

export {
  CapitalInversionService
};
//# sourceMappingURL=chunk-IDQETZVQ.js.map
