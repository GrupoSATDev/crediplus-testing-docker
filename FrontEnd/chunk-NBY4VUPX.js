import "./chunk-AYDYM6RQ.js";

// src/app/pages/dashboard/dashboard.routes.ts
var dashboard_routes_default = [
  {
    path: "",
    children: [
      {
        path: "resumen-ejecutivo",
        loadChildren: () => import("./chunk-HIWEDLGA.js")
      },
      {
        path: "rentabilidad",
        loadChildren: () => import("./chunk-7CSGMFAE.js")
      },
      {
        path: "cartera",
        loadChildren: () => import("./chunk-S2FQRHNF.js")
      },
      {
        path: "financieras",
        loadChildren: () => import("./chunk-NCXYTY4Y.js")
      }
    ]
  }
];
export {
  dashboard_routes_default as default
};
//# sourceMappingURL=chunk-NBY4VUPX.js.map
