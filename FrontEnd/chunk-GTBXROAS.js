import "./chunk-AYDYM6RQ.js";

// src/app/pages/gestion-creditos/gestion-creditos.routes.ts
var gestion_creditos_routes_default = [
  {
    path: "",
    children: [
      {
        path: "solicitudes",
        loadChildren: () => import("./chunk-43HXOM7N.js")
      },
      {
        path: "creditos",
        loadChildren: () => import("./chunk-5RSHXMJV.js")
      },
      {
        path: "detalle-consumo",
        loadChildren: () => import("./chunk-RYOYERDO.js")
      },
      {
        path: "consumos",
        loadChildren: () => import("./chunk-OPTVXSYG.js")
      },
      {
        path: "desembolsos",
        loadChildren: () => import("./chunk-VSBAKXMH.js")
      }
    ]
  }
];
export {
  gestion_creditos_routes_default as default
};
//# sourceMappingURL=chunk-GTBXROAS.js.map
