import {
  NativeDateAdapter,
  ɵɵdefineInjectable,
  ɵɵgetInheritedFactory
} from "./chunk-WGDVSMOG.js";

// src/app/core/services/date-adapter.service.ts
var _DateAdapterService = class _DateAdapterService extends NativeDateAdapter {
  parse(value) {
    if (value) {
      const [year, month, day] = value.split("-").map(Number);
      return new Date(year, month - 1, day);
    }
    return null;
  }
  format(date, displayFormat) {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    return `${day}/${month}/${year}`;
  }
};
_DateAdapterService.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275DateAdapterService_BaseFactory;
  return function DateAdapterService_Factory(t) {
    return (\u0275DateAdapterService_BaseFactory || (\u0275DateAdapterService_BaseFactory = \u0275\u0275getInheritedFactory(_DateAdapterService)))(t || _DateAdapterService);
  };
})();
_DateAdapterService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _DateAdapterService, factory: _DateAdapterService.\u0275fac });
var DateAdapterService = _DateAdapterService;

export {
  DateAdapterService
};
//# sourceMappingURL=chunk-K5K55XKD.js.map
