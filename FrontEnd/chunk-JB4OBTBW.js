import {
  ReportesService
} from "./chunk-XZSTSLX5.js";
import {
  EstadoCreditosService
} from "./chunk-N3AW47MT.js";
import {
  parseCurrency
} from "./chunk-5YT4VTHK.js";
import {
  utils,
  writeFileSync
} from "./chunk-VRN2SIHY.js";
import {
  MatDatepicker,
  MatDatepickerInput,
  MatDatepickerToggle
} from "./chunk-AGZF7KUE.js";
import {
  DateAdapterService
} from "./chunk-K5K55XKD.js";
import {
  Estados
} from "./chunk-NSUZEV35.js";
import {
  CustomTableComponent
} from "./chunk-ZB3PSQQS.js";
import "./chunk-CZDVBWDU.js";
import "./chunk-NACP6IOB.js";
import {
  FuseConfirmationService,
  exportar
} from "./chunk-HUKVMAZY.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControl,
  FormControlName,
  FormGroupDirective,
  MatFormField,
  MatInput,
  MatLabel,
  MatSuffix,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-IZMZQUCC.js";
import {
  AesEncryptionService
} from "./chunk-4LX6KC25.js";
import "./chunk-GRFMDZQD.js";
import {
  CdkScrollable
} from "./chunk-74CJHXHU.js";
import {
  FuseAlertComponent
} from "./chunk-YZGIFTGF.js";
import "./chunk-G7E77ZCS.js";
import "./chunk-ROMZC4L4.js";
import {
  CurrencyPipe,
  DateAdapter,
  DatePipe,
  DecimalPipe,
  MAT_DATE_LOCALE,
  MatButton,
  MatIcon,
  NgClass,
  inject,
  map,
  tap,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction2,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext
} from "./chunk-WGDVSMOG.js";
import {
  __objRest,
  __spreadValues
} from "./chunk-AYDYM6RQ.js";

// src/app/pages/reportes/reporte-desembolsos/reporte-desembolsos/reporte-desembolsos.component.ts
var _c0 = (a0, a1) => ({ "bg-green-700": a0, "bg-credigray-100": a1 });
function ReporteDesembolsosComponent_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 18);
    \u0275\u0275element(2, "app-custom-table", 19);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("columns", ctx_r1.columns)("displayedColumns", ctx_r1.columns)("columnPropertyMap", ctx_r1.columnPropertyMap)("data", ctx_r1.data)("searchTerm", ctx_r1.searchTerm);
  }
}
function ReporteDesembolsosComponent_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "div", 20)(2, "fuse-alert", 21)(3, "span", 22);
    \u0275\u0275text(4, "Informaci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, " No hay informaci\xF3n hasta el momento. ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275property("type", "info")("appearance", "outline");
  }
}
var _ReporteDesembolsosComponent = class _ReporteDesembolsosComponent {
  constructor() {
    this.searchTerm = "";
    this.fb = inject(FormBuilder);
    this.reportesService = inject(ReportesService);
    this.datePipe = inject(DatePipe);
    this.estados = new FormControl([""]);
    this.detalleConsumoService = inject(EstadoCreditosService);
    this.aesEncriptService = inject(AesEncryptionService);
    this.currencyPipe = inject(CurrencyPipe);
    this.fuseService = inject(FuseConfirmationService);
    this.detalleConsumo$ = this.detalleConsumoService.getDetalleConsumo().pipe(map((response) => {
      response.data = response.data.filter((res) => res.nombre !== "Rechazado" && res.nombre !== "Pagado" && res.nombre !== "En Revision" && res.nombre !== "En Mora");
      return response;
    }), tap((response) => {
      const selectedValue = response.data;
      if (selectedValue) {
        this.form.get("idEstadoCredito").setValue(selectedValue[0].id);
      }
    }));
    this.data = [];
    this.exportData = [];
    this.columns = ["Fecha de solicitud", "Identificaci\xF3n", "Trabajador", "Empresa", "Cargo", "Tipo de contrato", "Fecha de inicio contrato", "Fecha fin de contrato", "Salario devengado", "Monto aprobado", "Cupo disponible", "Tipo de cuenta", "Banco", "Cuenta destino", "Estado"];
    this.columnPropertyMap = {
      "Fecha de solicitud": "fechaCreacionSolicitud",
      "Identificaci\xF3n": "documentoTrabajador",
      "Trabajador": "nombreTrabajador",
      "Empresa": "nombreEmpresaTrabajador",
      "Cargo": "cargoTrabajador",
      "Tipo de contrato": "tipoContratoTrabajador",
      "Fecha de inicio contrato": "fechaInicioContratoTrabajador",
      "Fecha fin de contrato": "fechaFinContratoTrabajador",
      "Salario devengado": "salarioDevengadoTrabajador",
      "Monto aprobado": "montoConsumo",
      "Cupo disponible": "cupoDisponibleTrabajador",
      "Tipo de cuenta": "tipoCuentaTrabajador",
      "Banco": "bancotrabajador",
      "Cuenta destino": "cuentaDestino",
      "Estado": "nombreEstadoCredito"
    };
  }
  convertDataExport(data) {
    const convertData = data.map((items) => {
      return {
        FechaSolicitud: items.fechaCreacionSolicitud,
        Identificacion: items.documentoTrabajador,
        Trabajador: items.nombreTrabajador,
        Empresa: items.nombreEmpresaTrabajador,
        Cargo: items.cargoTrabajador,
        TipoContrato: items.tipoContratoTrabajador,
        FechaInicioContrato: items.fechaInicioContratoTrabajador,
        FechaFinContrato: items.fechaFinContratoTrabajador,
        SalarioDevengado: parseCurrency(items.salarioDevengadoTrabajador),
        MontoAprobado: parseCurrency(items.montoConsumo),
        CupoDisponible: parseCurrency(items.cupoDisponibleTrabajador),
        TipoCuenta: items.tipoCuentaTrabajador,
        Banco: items.bancotrabajador,
        Cuentadestino: items.cuentaDestino,
        Estado: items.nombreEstadoCredito
      };
    });
    this.exportData = convertData;
  }
  onSearch(event) {
    const target = event.target;
    this.searchTerm = target.value.trim().toLowerCase();
  }
  onSelect(estado) {
    this.data = [];
    this.exportData = [];
  }
  createForm() {
    this.form = this.fb.group({
      fechaInicio: ["", Validators.required],
      fechaFinal: ["", Validators.required]
    });
  }
  ngOnInit() {
    this.createForm();
  }
  onConsultar() {
    if (this.form.valid) {
      const _a = this.form.getRawValue(), { fechaInicio, fechaFinal } = _a, form = __objRest(_a, ["fechaInicio", "fechaFinal"]);
      const fechaIniciallData = this.datePipe.transform(fechaInicio, "yyyy-MM-dd");
      const fechaFinallData = this.datePipe.transform(fechaFinal, "yyyy-MM-dd");
      const consulta = {
        fechaInicio: fechaIniciallData,
        fechaFinal: fechaFinallData
      };
      this.reportesService.getReporteDesembolsos(consulta).pipe(map((response) => {
        response.data.forEach((items) => {
          items.estado = items.estado ? Estados.ACTIVO : Estados.INACTIVO;
          items.fechaCreacionSolicitud = this.datePipe.transform(items.fechaCreacionSolicitud, "dd/MM/yyyy");
          items.fechaInicioContratoTrabajador = this.datePipe.transform(items.fechaInicioContratoTrabajador, "dd/MM/yyyy");
          items.fechaFinContratoTrabajador = this.datePipe.transform(items.fechaFinContratoTrabajador, "dd/MM/yyyy");
          items.salarioDevengadoTrabajador = this.currencyPipe.transform(items.salarioDevengadoTrabajador, "USD", "symbol", "1.2-2");
          if (items.montoConsumo) {
            items.montoConsumo = this.aesEncriptService.decrypt(items.montoConsumo);
          }
          items.cupoDisponibleTrabajador = this.currencyPipe.transform(items.cupoDisponibleTrabajador, "USD", "symbol", "1.2-2");
          items.montoConsumo = this.currencyPipe.transform(items.montoConsumo, "USD", "symbol", "1.2-2");
        });
        return response;
      })).subscribe((response) => {
        if (response.data) {
          this.data = response.data;
          this.convertDataExport(response.data);
        } else {
          this.data = [];
        }
      });
    }
  }
  exportToExcel(data) {
    const dialog = this.fuseService.open(__spreadValues({}, exportar));
    dialog.afterClosed().subscribe((response) => {
      if (response === "confirmed") {
        const worksheet = utils.json_to_sheet(data);
        const workbook = utils.book_new();
        utils.book_append_sheet(workbook, worksheet, "Sheet1");
        writeFileSync(workbook, `Reporte de Desembolsos${this.datePipe.transform(/* @__PURE__ */ new Date(), "dd/MM/yyyy")}.xlsx`);
      }
    });
  }
};
_ReporteDesembolsosComponent.\u0275fac = function ReporteDesembolsosComponent_Factory(t) {
  return new (t || _ReporteDesembolsosComponent)();
};
_ReporteDesembolsosComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReporteDesembolsosComponent, selectors: [["app-reporte-desembolsos"]], standalone: true, features: [\u0275\u0275ProvidersFeature([
  { provide: DateAdapter, useClass: DateAdapterService },
  { provide: MAT_DATE_LOCALE, useValue: "en-GB" },
  DatePipe,
  CurrencyPipe,
  DecimalPipe
]), \u0275\u0275StandaloneFeature], decls: 32, vars: 19, consts: [["inicioPicker", ""], ["finalPicker", ""], ["cdkScrollable", "", 1, "bg-card", "flex", "min-w-0", "flex-auto", "flex-col", "dark:bg-transparent", "sm:absolute", "sm:inset-0", "sm:overflow-hidden"], [1, "relative", "flex", "flex-0", "flex-col", "px-6", "py-8", "sm:flex-row", "sm:items-center", "sm:justify-between", "md:px-8"], [1, "text-3xl", "font-semibold", "tracking-tight"], [1, "mt-6", "flex", "w-full", "shrink-0", "flex-col", "items-center", "sm:ml-4", "sm:mt-0", "sm:flex-row", "sm:space-x-2", "sm:w-auto"], [1, "fuse-mat-dense", "rounded-lg", "w-full", "sm:w-auto", "min-w-64", 3, "subscriptSizing"], ["matPrefix", "", 1, "icon-size-5", 3, "svgIcon"], ["matInput", "", 3, "input", "autocomplete", "placeholder"], [1, "px-6", "border-b", "mt-6", "w-full", "shrink-0", "sm:mt-0", "sm:space-x-2", "lg:w-full"], [1, "flex", "flex-col", "sm:flex-row", "gap-2.5", 3, "formGroup"], ["floatLabel", "always", 1, "w-full", "sm:w-1/2"], ["matInput", "", "placeholder", "dd/mm/yyyy", 3, "matDatepicker", "formControlName"], ["matIconSuffix", "", 3, "for"], ["mat-flat-button", "", 1, "sm:w-1/6", "w-full", "sm:mt-6", "bg-crediblue-50", "rounded-lg", "transition", "duration-200", "text-white", "font-semibold", 3, "click", "color"], ["mat-flat-button", "", 1, "sm:sm:w-1/6", "w-full", "sm:mt-6", "rounded-lg", "transition", "duration-200", "text-white", "font-semibold", 3, "click", "color", "ngClass", "disabled"], [1, "flex", "flex-auto", "overflow-hidden"], [1, "inset-0", "min-w-0", "overflow-auto", "print:overflow-visible"], [1, "flex", "flex-auto", "flex-col", "overflow-hidden", "sm:mb-18", "sm:overflow-y-auto"], [3, "columns", "displayedColumns", "columnPropertyMap", "data", "searchTerm"], [1, "inline-block", "p-4", "sm:p-2", "print:p-0", "w-full"], [3, "type", "appearance"], ["fuseAlertTitle", ""]], template: function ReporteDesembolsosComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "div", 4);
    \u0275\u0275text(3, "Reporte de Desembolsos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 5)(5, "mat-form-field", 6);
    \u0275\u0275element(6, "mat-icon", 7);
    \u0275\u0275elementStart(7, "input", 8);
    \u0275\u0275listener("input", function ReporteDesembolsosComponent_Template_input_input_7_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.onSearch($event));
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(8, "div", 9)(9, "form", 10)(10, "mat-form-field", 11)(11, "mat-label");
    \u0275\u0275text(12, "Fecha de inicio");
    \u0275\u0275elementEnd();
    \u0275\u0275element(13, "input", 12)(14, "mat-datepicker-toggle", 13)(15, "mat-datepicker", null, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "mat-form-field", 11)(18, "mat-label");
    \u0275\u0275text(19, "Fecha fin");
    \u0275\u0275elementEnd();
    \u0275\u0275element(20, "input", 12)(21, "mat-datepicker-toggle", 13)(22, "mat-datepicker", null, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "button", 14);
    \u0275\u0275listener("click", function ReporteDesembolsosComponent_Template_button_click_24_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.onConsultar());
    });
    \u0275\u0275elementStart(25, "span");
    \u0275\u0275text(26, " Consultar ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "button", 15);
    \u0275\u0275listener("click", function ReporteDesembolsosComponent_Template_button_click_27_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.exportToExcel(ctx.exportData));
    });
    \u0275\u0275elementStart(28, "span");
    \u0275\u0275text(29, " Exportar ");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(30, ReporteDesembolsosComponent_Conditional_30_Template, 3, 5, "div", 16)(31, ReporteDesembolsosComponent_Conditional_31_Template, 6, 2, "div", 17);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const inicioPicker_r3 = \u0275\u0275reference(16);
    const finalPicker_r4 = \u0275\u0275reference(23);
    \u0275\u0275advance(5);
    \u0275\u0275property("subscriptSizing", "dynamic");
    \u0275\u0275advance();
    \u0275\u0275property("svgIcon", "heroicons_solid:magnifying-glass");
    \u0275\u0275advance();
    \u0275\u0275property("autocomplete", "off")("placeholder", "Buscar");
    \u0275\u0275advance(2);
    \u0275\u0275property("formGroup", ctx.form);
    \u0275\u0275advance(4);
    \u0275\u0275property("matDatepicker", inicioPicker_r3)("formControlName", "fechaInicio");
    \u0275\u0275advance();
    \u0275\u0275property("for", inicioPicker_r3);
    \u0275\u0275advance(6);
    \u0275\u0275property("matDatepicker", finalPicker_r4)("formControlName", "fechaFinal");
    \u0275\u0275advance();
    \u0275\u0275property("for", finalPicker_r4);
    \u0275\u0275advance(3);
    \u0275\u0275property("color", "primary");
    \u0275\u0275advance(3);
    \u0275\u0275property("color", "primary")("ngClass", \u0275\u0275pureFunction2(16, _c0, ctx.exportData.length, !ctx.exportData.length))("disabled", !ctx.exportData.length);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx.data.length > 0 ? 30 : 31);
  }
}, dependencies: [
  CdkScrollable,
  CustomTableComponent,
  FuseAlertComponent,
  MatButton,
  MatDatepicker,
  MatDatepickerInput,
  MatDatepickerToggle,
  MatFormField,
  MatIcon,
  MatInput,
  MatLabel,
  MatSuffix,
  ReactiveFormsModule,
  \u0275NgNoValidate,
  DefaultValueAccessor,
  NgControlStatus,
  NgControlStatusGroup,
  FormGroupDirective,
  FormControlName,
  NgClass
] });
var ReporteDesembolsosComponent = _ReporteDesembolsosComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReporteDesembolsosComponent, { className: "ReporteDesembolsosComponent", filePath: "src\\app\\pages\\reportes\\reporte-desembolsos\\reporte-desembolsos\\reporte-desembolsos.component.ts", lineNumber: 59 });
})();

// src/app/pages/reportes/reporte-desembolsos/reporteDesembolsos.routes.ts
var reporteDesembolsos_routes_default = [
  {
    path: "",
    component: ReporteDesembolsosComponent
  }
];
export {
  reporteDesembolsos_routes_default as default
};
//# sourceMappingURL=chunk-JB4OBTBW.js.map
