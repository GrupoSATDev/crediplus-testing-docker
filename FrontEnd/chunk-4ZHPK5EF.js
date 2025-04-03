import {
  CobroTrabajadoresService
} from "./chunk-LQXUMPK3.js";
import {
  EstadoCreditosService
} from "./chunk-N3AW47MT.js";
import {
  Estados
} from "./chunk-NSUZEV35.js";
import {
  CustomTableComponent
} from "./chunk-ZB3PSQQS.js";
import {
  EstadosDatosService
} from "./chunk-5JAUKKTX.js";
import {
  MatSelect
} from "./chunk-CZDVBWDU.js";
import "./chunk-LPU4EPA2.js";
import "./chunk-NACP6IOB.js";
import {
  FormBuilder,
  FormControl,
  FormControlDirective,
  MatFormField,
  MatInput,
  MatLabel,
  NgControlStatus,
  ReactiveFormsModule
} from "./chunk-IZMZQUCC.js";
import {
  AesEncryptionService
} from "./chunk-4LX6KC25.js";
import {
  ActivatedRoute,
  Router
} from "./chunk-L2WXMDPA.js";
import {
  MatDialog
} from "./chunk-GRFMDZQD.js";
import "./chunk-74CJHXHU.js";
import "./chunk-ROMZC4L4.js";
import {
  AsyncPipe,
  CurrencyPipe,
  DatePipe,
  MatIcon,
  MatOption,
  NgForOf,
  NgIf,
  inject,
  map,
  tap,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-WGDVSMOG.js";
import "./chunk-AYDYM6RQ.js";

// src/app/pages/gestion-cobros/cobro-empleados/grid-cobros-empleados/grid-cobros-empleados.component.ts
function GridCobrosEmpleadosComponent_ng_container_12_mat_option_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    \u0275\u0275property("value", item_r1.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r1.nombre);
  }
}
function GridCobrosEmpleadosComponent_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, GridCobrosEmpleadosComponent_ng_container_12_mat_option_1_Template, 2, 2, "mat-option", 13);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const estadoCreditos_r2 = ctx.ngIf;
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", estadoCreditos_r2.data);
  }
}
var _GridCobrosEmpleadosComponent = class _GridCobrosEmpleadosComponent {
  constructor(_matDialog) {
    this._matDialog = _matDialog;
    this.datePipe = inject(DatePipe);
    this.router = inject(Router);
    this.estadoDatosService = inject(EstadosDatosService);
    this.currencyPipe = inject(CurrencyPipe);
    this.cobroTrabadorService = inject(CobroTrabajadoresService);
    this.estadoCreditosService = inject(EstadoCreditosService);
    this.fb = inject(FormBuilder);
    this.estados = new FormControl([""]);
    this.searchTerm = "";
    this.estadoCreditos$ = this.estadoCreditosService.getEstadoCobros().pipe(tap((response) => {
      const selectedValue = response.data;
      if (selectedValue) {
        this.estados.setValue(selectedValue[1].id);
        this.cobros(selectedValue[1].id);
      }
    }));
    this.data = [];
    this.columns = ["Nombre completo", "Valor proximo a pagar", "Deuda total", "Empresa", "Estado"];
    this.columnPropertyMap = {
      "Nombre completo": "nombreTrabajador",
      "Valor proximo a pagar": "montoProximoPago",
      "Deuda total": "deudaTotal",
      "Empresa": "nombreSubEmpresa",
      "Estado": "nombreEstadoCredito"
    };
    this.buttons = [
      {
        label: "Ver",
        icon: "visibility",
        action: (element) => {
          console.log("Editing", element);
          this.selectedData = element;
          this.router.navigate(["pages/gestion-cobros/cobros/cobro", this.selectedData.idTrabajador]);
        }
      }
    ];
  }
  onSelect(estado) {
    const id = estado.value;
    this.cobros(id);
  }
  cobros(id) {
    this.subcription$ = this.cobroTrabadorService.getCobrosGrid(id).pipe(map((response) => {
      response.data.forEach((items) => {
        if (items.estado) {
          items.estado = Estados.ACTIVO;
        } else {
          items.estado = Estados.INACTIVO;
        }
      });
      return response;
    }), map((response) => {
      response.data.forEach((items) => {
        items.deudaTotal = this.currencyPipe.transform(items.deudaTotal, "USD", "symbol", "1.2-2");
        items.montoProximoPago = this.currencyPipe.transform(items.montoProximoPago, "USD", "symbol", "1.2-2");
      });
      return response;
    })).subscribe((response) => {
      if (response) {
        this.data = response.data;
      } else {
        this.data = [];
      }
    }, (error) => {
      this.data = [];
    });
  }
  getCobros() {
    this.subcription$ = this.cobroTrabadorService.getCobros().pipe(map((response) => {
      response.data.forEach((items) => {
        if (items.estado) {
          items.estado = Estados.ACTIVO;
        } else {
          items.estado = Estados.INACTIVO;
        }
      });
      return response;
    }), map((response) => {
      response.data.forEach((items) => {
        items.fechaCobro = this.datePipe.transform(items.fechaCobro, "dd/MM/yyyy");
        items.valorPendiente = this.currencyPipe.transform(items.valorPendiente, "USD", "symbol", "1.2-2");
        items.valorPago = items.valorPago ? this.currencyPipe.transform(items.valorPago, "USD", "symbol", "1.2-2") : "-";
      });
      return response;
    })).subscribe((response) => {
      if (response) {
        this.data = response.data;
      } else {
        this.data = [];
      }
    }, (error) => {
      this.data = [];
    });
  }
  listenGrid() {
    const refreshData$ = this.estadoDatosService.stateGrid.asObservable();
    refreshData$.subscribe((state) => {
      if (state) {
      }
    });
  }
  onSearch(event) {
    const target = event.target;
    this.searchTerm = target.value.trim().toLowerCase();
  }
  ngOnDestroy() {
    this.subcription$.unsubscribe();
  }
  ngOnInit() {
    this.listenGrid();
  }
};
_GridCobrosEmpleadosComponent.\u0275fac = function GridCobrosEmpleadosComponent_Factory(t) {
  return new (t || _GridCobrosEmpleadosComponent)(\u0275\u0275directiveInject(MatDialog));
};
_GridCobrosEmpleadosComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GridCobrosEmpleadosComponent, selectors: [["app-grid-cobros-empleados"]], standalone: true, features: [\u0275\u0275ProvidersFeature([
  DatePipe,
  CurrencyPipe
]), \u0275\u0275StandaloneFeature], decls: 17, vars: 14, consts: [[1, "bg-card", "flex", "min-w-0", "flex-auto", "flex-col", "dark:bg-transparent", "sm:absolute", "sm:inset-0", "sm:overflow-hidden"], [1, "relative", "flex", "flex-0", "flex-col", "border-b", "px-6", "py-8", "sm:flex-row", "sm:items-center", "sm:justify-between", "md:px-8"], [1, "text-3xl", "font-semibold", "tracking-tight"], [1, "mt-6", "flex", "w-full", "shrink-0", "flex-col", "items-center", "gap-2.5", "sm:ml-4", "sm:mt-0", "sm:flex-row", "sm:w-1/2"], [1, "fuse-mat-dense", "rounded-lg", "w-full", "sm:w-1/2", 3, "subscriptSizing"], ["matPrefix", "", 1, "icon-size-5", 3, "svgIcon"], ["matInput", "", 3, "input", "autocomplete", "placeholder"], [1, "w-full", "sm:w-1/2"], [3, "selectionChange", "formControl"], [4, "ngIf"], [1, "flex", "flex-auto", "overflow-hidden"], [1, "flex", "flex-auto", "flex-col", "overflow-hidden", "sm:mb-18", "sm:overflow-y-auto"], [3, "columns", "displayedColumns", "columnPropertyMap", "data", "buttons", "searchTerm"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function GridCobrosEmpleadosComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
    \u0275\u0275text(3, "Historico de Cartera - Trabajadores");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 3)(5, "mat-form-field", 4);
    \u0275\u0275element(6, "mat-icon", 5);
    \u0275\u0275elementStart(7, "input", 6);
    \u0275\u0275listener("input", function GridCobrosEmpleadosComponent_Template_input_input_7_listener($event) {
      return ctx.onSearch($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "mat-form-field", 7)(9, "mat-label");
    \u0275\u0275text(10, "Estados");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "mat-select", 8);
    \u0275\u0275listener("selectionChange", function GridCobrosEmpleadosComponent_Template_mat_select_selectionChange_11_listener($event) {
      return ctx.onSelect($event);
    });
    \u0275\u0275template(12, GridCobrosEmpleadosComponent_ng_container_12_Template, 2, 1, "ng-container", 9);
    \u0275\u0275pipe(13, "async");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(14, "div", 10)(15, "div", 11);
    \u0275\u0275element(16, "app-custom-table", 12);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275property("subscriptSizing", "dynamic");
    \u0275\u0275advance();
    \u0275\u0275property("svgIcon", "heroicons_solid:magnifying-glass");
    \u0275\u0275advance();
    \u0275\u0275property("autocomplete", "off")("placeholder", "Buscar");
    \u0275\u0275advance(4);
    \u0275\u0275property("formControl", ctx.estados);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(13, 12, ctx.estadoCreditos$));
    \u0275\u0275advance(4);
    \u0275\u0275property("columns", ctx.columns)("displayedColumns", ctx.columns)("columnPropertyMap", ctx.columnPropertyMap)("data", ctx.data)("buttons", ctx.buttons)("searchTerm", ctx.searchTerm);
  }
}, dependencies: [
  CustomTableComponent,
  MatFormField,
  MatIcon,
  MatInput,
  MatLabel,
  MatOption,
  MatSelect,
  NgForOf,
  NgIf,
  AsyncPipe,
  ReactiveFormsModule,
  NgControlStatus,
  FormControlDirective
] });
var GridCobrosEmpleadosComponent = _GridCobrosEmpleadosComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GridCobrosEmpleadosComponent, { className: "GridCobrosEmpleadosComponent", filePath: "src\\app\\pages\\gestion-cobros\\cobro-empleados\\grid-cobros-empleados\\grid-cobros-empleados.component.ts", lineNumber: 44 });
})();

// src/app/pages/gestion-cobros/cobro-empleados/form-cobros-empleados/form-cobros-empleados.component.ts
var _FormCobrosEmpleadosComponent = class _FormCobrosEmpleadosComponent {
  constructor() {
    this.router = inject(Router);
    this.activatedRoute = inject(ActivatedRoute);
    this.cobroTrabadorService = inject(CobroTrabajadoresService);
    this.idCredito = "";
    this.datePipe = inject(DatePipe);
    this.currencyPipe = inject(CurrencyPipe);
    this.aesEncriptService = inject(AesEncryptionService);
    this.searchTerm = "";
    this.columns = ["Fecha de cobro", "Nombre completo", "Empresa", "Concepto", "Valor cuota", "No. cuota", "Estado"];
    this.columnPropertyMap = {
      "Fecha de cobro": "fechaCobro",
      "Nombre completo": "nombreTrabajador",
      "Empresa": "nombreSubEmpresa",
      "Concepto": "tipoConsumo",
      "Valor cuota": "montoCuota",
      "No. cuota": "numCuota",
      "Estado": "nombreEstadoCredito"
    };
  }
  ngOnDestroy() {
  }
  ngOnInit() {
    this.idCredito = this.activatedRoute.snapshot.paramMap.get("id");
    this.getDetalle(this.idCredito);
  }
  getDetalle(id) {
    this.subcription$ = this.cobroTrabadorService.getCobroEmpleado(id).pipe(map((response) => {
      response.data.forEach((items) => {
        if (items.montoCuota) {
          items.montoCuota = this.aesEncriptService.decrypt(items.montoCuota);
        }
        if (items.valorPendiente) {
          items.valorPendiente = this.aesEncriptService.decrypt(items.valorPendiente);
        }
        items.fechaCobro = this.datePipe.transform(items.fechaCobro, "dd/MM/yyyy");
        items.valorPendiente = this.currencyPipe.transform(items.valorPendiente, "USD", "symbol", "1.2-2");
        items.montoCuota = this.currencyPipe.transform(items.montoCuota, "USD", "symbol", "1.2-2");
      });
      return response;
    })).subscribe((response) => {
      console.log(response);
      if (response.data) {
        this.detalle = response.data;
      }
    });
  }
  onSearch(event) {
    const target = event.target;
    this.searchTerm = target.value.trim().toLowerCase();
  }
};
_FormCobrosEmpleadosComponent.\u0275fac = function FormCobrosEmpleadosComponent_Factory(t) {
  return new (t || _FormCobrosEmpleadosComponent)();
};
_FormCobrosEmpleadosComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FormCobrosEmpleadosComponent, selectors: [["app-form-cobros-empleados"]], standalone: true, features: [\u0275\u0275ProvidersFeature([
  DatePipe,
  CurrencyPipe
]), \u0275\u0275StandaloneFeature], decls: 11, vars: 9, consts: [[1, "bg-card", "flex", "min-w-0", "flex-auto", "flex-col", "dark:bg-transparent", "sm:absolute", "sm:inset-0", "sm:overflow-hidden"], [1, "relative", "flex", "flex-0", "flex-col", "border-b", "px-6", "py-8", "sm:flex-row", "sm:items-center", "sm:justify-between", "md:px-8"], [1, "text-3xl", "font-semibold", "tracking-tight"], [1, "mt-6", "flex", "w-full", "shrink-0", "flex-col", "justify-end", "gap-2.5", "sm:ml-4", "sm:mt-0", "sm:flex-row", "sm:w-1/2"], [1, "fuse-mat-dense", "rounded-lg", "w-full", "sm:w-1/2", 3, "subscriptSizing"], ["matPrefix", "", 1, "icon-size-5", 3, "svgIcon"], ["matInput", "", 3, "input", "autocomplete", "placeholder"], [1, "flex", "flex-auto", "overflow-hidden"], [1, "flex", "flex-auto", "flex-col", "overflow-hidden", "sm:mb-18", "sm:overflow-y-auto"], [3, "columns", "displayedColumns", "columnPropertyMap", "data", "searchTerm"]], template: function FormCobrosEmpleadosComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
    \u0275\u0275text(3, "Historico de Cartera - Trabajadores");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 3)(5, "mat-form-field", 4);
    \u0275\u0275element(6, "mat-icon", 5);
    \u0275\u0275elementStart(7, "input", 6);
    \u0275\u0275listener("input", function FormCobrosEmpleadosComponent_Template_input_input_7_listener($event) {
      return ctx.onSearch($event);
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(8, "div", 7)(9, "div", 8);
    \u0275\u0275element(10, "app-custom-table", 9);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275property("subscriptSizing", "dynamic");
    \u0275\u0275advance();
    \u0275\u0275property("svgIcon", "heroicons_solid:magnifying-glass");
    \u0275\u0275advance();
    \u0275\u0275property("autocomplete", "off")("placeholder", "Buscar");
    \u0275\u0275advance(3);
    \u0275\u0275property("columns", ctx.columns)("displayedColumns", ctx.columns)("columnPropertyMap", ctx.columnPropertyMap)("data", ctx.detalle)("searchTerm", ctx.searchTerm);
  }
}, dependencies: [
  MatIcon,
  CustomTableComponent,
  MatFormField,
  MatInput
] });
var FormCobrosEmpleadosComponent = _FormCobrosEmpleadosComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FormCobrosEmpleadosComponent, { className: "FormCobrosEmpleadosComponent", filePath: "src\\app\\pages\\gestion-cobros\\cobro-empleados\\form-cobros-empleados\\form-cobros-empleados.component.ts", lineNumber: 47 });
})();

// src/app/pages/gestion-cobros/cobro-empleados/cobro-empleados.routes.ts
var cobro_empleados_routes_default = [
  {
    path: "",
    component: GridCobrosEmpleadosComponent
  },
  {
    path: "cobro/:id",
    component: FormCobrosEmpleadosComponent
  }
];
export {
  cobro_empleados_routes_default as default
};
//# sourceMappingURL=chunk-4ZHPK5EF.js.map
