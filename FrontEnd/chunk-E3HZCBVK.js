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
  CustomTableComponent
} from "./chunk-ZB3PSQQS.js";
import {
  MatSelect
} from "./chunk-CZDVBWDU.js";
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
  FormsModule,
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
  AsyncPipe,
  CurrencyPipe,
  DateAdapter,
  DatePipe,
  DecimalPipe,
  MAT_DATE_LOCALE,
  MatButton,
  MatIcon,
  MatOption,
  NgClass,
  NgForOf,
  NgIf,
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
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction2,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-WGDVSMOG.js";
import {
  __objRest,
  __spreadValues
} from "./chunk-AYDYM6RQ.js";

// src/app/pages/reportes/reporte-cobro-trabajadores/reporte-cobro-trabajadores/reporte-cobro-trabajadores.component.ts
var _c0 = (a0, a1) => ({ "bg-green-700": a0, "bg-credigray-100": a1 });
function ReporteCobroTrabajadoresComponent_ng_container_14_mat_option_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 22);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    \u0275\u0275property("value", item_r2.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r2.nombre);
  }
}
function ReporteCobroTrabajadoresComponent_ng_container_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ReporteCobroTrabajadoresComponent_ng_container_14_mat_option_1_Template, 2, 2, "mat-option", 21);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const detalleConsumo_r3 = ctx.ngIf;
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", detalleConsumo_r3.data);
  }
}
function ReporteCobroTrabajadoresComponent_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "div", 23);
    \u0275\u0275element(2, "app-custom-table", 24);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("columns", ctx_r3.columns)("displayedColumns", ctx_r3.columns)("columnPropertyMap", ctx_r3.columnPropertyMap)("data", ctx_r3.data)("searchTerm", ctx_r3.searchTerm);
  }
}
function ReporteCobroTrabajadoresComponent_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "div", 25)(2, "fuse-alert", 26)(3, "span", 27);
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
var _ReporteCobroTrabajadoresComponent = class _ReporteCobroTrabajadoresComponent {
  constructor() {
    this.searchTerm = "";
    this.fb = inject(FormBuilder);
    this.reportesService = inject(ReportesService);
    this.datePipe = inject(DatePipe);
    this.estados = new FormControl([""]);
    this.detalleConsumoService = inject(EstadoCreditosService);
    this.detalleConsumo$ = this.detalleConsumoService.getEstadoCobros().pipe(tap((response) => {
      const selectedValue = response.data;
      if (selectedValue) {
        selectedValue.unshift({
          id: "0",
          nombre: "Todos"
        });
        this.form.get("idEstadoCredito").setValue(selectedValue[0].id);
      }
    }));
    this.data = [];
    this.columns = ["Trabajador", "Identificaci\xF3n", "Tipo de contrato", "Empresa", "Inicio de contrato", "Fin de contrato", "Cantidad de cuotas", "Fecha de cobro", "Valor cuota", "Valor sin intereses", "Intereses ganados", "Estado"];
    this.columnPropertyMap = {
      "Trabajador": "nombreTrabajador",
      "Identificaci\xF3n": "documetoTrabajador",
      "Tipo de contrato": "tipoContratoTrabajador",
      "Empresa": "nombreSubEmpresa",
      "Inicio de contrato": "fechaInicioContratoTrabajador",
      "Fin de contrato": "fechaFinContratoTrabajador",
      "Cantidad de cuotas": "numCuota",
      "Fecha de cobro": "fechaCobro",
      "Valor cuota": "montoCuota",
      "Valor sin intereses": "montoCuotaSinIntereses",
      "Intereses ganados": "interesesGanados",
      "Estado": "nombreEstadoCredito"
    };
    this.aesEncriptService = inject(AesEncryptionService);
    this.currencyPipe = inject(CurrencyPipe);
    this.exportData = [];
    this.fuseService = inject(FuseConfirmationService);
  }
  onSearch(event) {
    const target = event.target;
    this.searchTerm = target.value.trim().toLowerCase();
  }
  onSelect(estado) {
    const id = estado.value;
  }
  createForm() {
    this.form = this.fb.group({
      idEstadoCredito: ["", Validators.required],
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
      let consulta = __spreadValues({
        fechaInicio: fechaIniciallData,
        fechaFinal: fechaFinallData
      }, form);
      if (consulta.idEstadoCredito == "0") {
        consulta = {
          fechaInicio: consulta.fechaInicio,
          fechaFinal: consulta.fechaFinal,
          idEstadoCredito: ""
        };
      }
      console.log(consulta);
      this.reportesService.getReporteCobros(consulta).pipe(map((response) => {
        response.data.forEach((items) => {
          items.fechaCobro = this.datePipe.transform(items.fechaCobro, "dd/MM/yyyy");
          items.fechaInicioContratoTrabajador = this.datePipe.transform(items.fechaInicioContratoTrabajador, "dd/MM/yyyy");
          items.fechaFinContratoTrabajador = this.datePipe.transform(items.fechaFinContratoTrabajador, "dd/MM/yyyy");
          if (items.montoCuota) {
            items.montoCuota = this.aesEncriptService.decrypt(items.montoCuota);
          }
          if (items.montoCuotaSinIntereses) {
            items.montoCuotaSinIntereses = this.aesEncriptService.decrypt(items.montoCuotaSinIntereses);
          }
          if (items.interesesGanados) {
            items.interesesGanados = this.aesEncriptService.decrypt(items.interesesGanados);
          }
          items.montoCuota = this.currencyPipe.transform(items.montoCuota, "USD", "symbol", "1.2-2");
          items.montoCuotaSinIntereses = this.currencyPipe.transform(items.montoCuotaSinIntereses, "USD", "symbol", "1.2-2");
          items.interesesGanados = parseFloat(items.interesesGanados.replace(",", "."));
          items.interesesGanados = this.currencyPipe.transform(items.interesesGanados, "USD", "symbol", "1.2-2");
        });
        return response;
      })).subscribe((response) => {
        if (response.data) {
          this.data = response.data;
          this.convertDataExportFijos(response.data);
        } else {
          this.data = [];
        }
      });
    }
  }
  convertDataExportFijos(data) {
    const convertData = data.map((items) => {
      return {
        Trabajador: items.nombreTrabajador,
        Identificaci\u00F3n: items.documetoTrabajador,
        TipodeContrato: items.tipoContratoTrabajador,
        Empresa: items.nombreSubEmpresa,
        Iniciodecontrato: items.fechaInicioContratoTrabajador,
        Findecontrato: items.fechaFinContratoTrabajador,
        CantidaddeCuotas: items.numCuota,
        FechaCobro: items.fechaCobro,
        ValorCuota: parseCurrency(items.montoCuota),
        ValorSinIntereses: parseCurrency(items.montoCuotaSinIntereses),
        InteresesGanados: parseCurrency(items.interesesGanados),
        Estado: items.nombreEstadoCredito
      };
    });
    this.exportData = convertData;
  }
  exportToExcel(data) {
    const dialog = this.fuseService.open(__spreadValues({}, exportar));
    dialog.afterClosed().subscribe((response) => {
      if (response === "confirmed") {
        const worksheet = utils.json_to_sheet(data);
        const workbook = utils.book_new();
        utils.book_append_sheet(workbook, worksheet, "Sheet1");
        writeFileSync(workbook, `Reporte cobros trabajadores${this.datePipe.transform(/* @__PURE__ */ new Date(), "dd/MM/yyyy")}.xlsx`);
      }
    });
  }
};
_ReporteCobroTrabajadoresComponent.\u0275fac = function ReporteCobroTrabajadoresComponent_Factory(t) {
  return new (t || _ReporteCobroTrabajadoresComponent)();
};
_ReporteCobroTrabajadoresComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReporteCobroTrabajadoresComponent, selectors: [["app-reporte-cobro-trabajadores"]], standalone: true, features: [\u0275\u0275ProvidersFeature([
  { provide: DateAdapter, useClass: DateAdapterService },
  { provide: MAT_DATE_LOCALE, useValue: "en-GB" },
  DatePipe,
  CurrencyPipe,
  DecimalPipe
]), \u0275\u0275StandaloneFeature], decls: 38, vars: 23, consts: [["inicioPicker", ""], ["finalPicker", ""], ["cdkScrollable", "", 1, "bg-card", "flex", "min-w-0", "flex-auto", "flex-col", "dark:bg-transparent", "sm:absolute", "sm:inset-0", "sm:overflow-hidden"], [1, "relative", "flex", "flex-0", "flex-col", "px-6", "py-8", "sm:flex-row", "sm:items-center", "sm:justify-between", "md:px-8"], [1, "text-3xl", "font-semibold", "tracking-tight"], [1, "mt-6", "flex", "w-full", "shrink-0", "flex-col", "items-center", "sm:ml-4", "sm:mt-0", "sm:flex-row", "sm:space-x-2", "sm:w-auto"], [1, "fuse-mat-dense", "rounded-lg", "w-full", "sm:w-auto", "min-w-64", 3, "subscriptSizing"], ["matPrefix", "", 1, "icon-size-5", 3, "svgIcon"], ["matInput", "", 3, "input", "autocomplete", "placeholder"], [1, "px-6", "border-b", "mt-6", "w-full", "shrink-0", "sm:mt-0", "sm:space-x-2", "lg:w-full"], [1, "flex", "flex-col", "sm:flex-row", "gap-2.5", 3, "formGroup"], [1, "w-full", "sm:w-1/2"], [3, "selectionChange", "formControlName"], [4, "ngIf"], ["floatLabel", "always", 1, "w-full", "sm:w-1/2"], ["matInput", "", "placeholder", "dd/mm/yyyy", 3, "matDatepicker", "formControlName"], ["matIconSuffix", "", 3, "for"], ["mat-flat-button", "", 1, "sm:w-1/6", "w-full", "sm:mt-6", "bg-crediblue-50", "rounded-lg", "transition", "duration-200", "text-white", "font-semibold", 3, "click", "color"], ["mat-flat-button", "", 1, "sm:sm:w-1/6", "w-full", "sm:mt-6", "rounded-lg", "transition", "duration-200", "text-white", "font-semibold", 3, "click", "color", "ngClass", "disabled"], [1, "flex", "flex-auto", "overflow-hidden"], [1, "inset-0", "min-w-0", "overflow-auto", "print:overflow-visible"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [1, "flex", "flex-auto", "flex-col", "overflow-hidden", "sm:mb-18", "sm:overflow-y-auto"], [3, "columns", "displayedColumns", "columnPropertyMap", "data", "searchTerm"], [1, "inline-block", "p-4", "sm:p-2", "print:p-0", "w-full"], [3, "type", "appearance"], ["fuseAlertTitle", ""]], template: function ReporteCobroTrabajadoresComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "div", 4);
    \u0275\u0275text(3, "Reporte de Cobros Trabajadores");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 5)(5, "mat-form-field", 6);
    \u0275\u0275element(6, "mat-icon", 7);
    \u0275\u0275elementStart(7, "input", 8);
    \u0275\u0275listener("input", function ReporteCobroTrabajadoresComponent_Template_input_input_7_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.onSearch($event));
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(8, "div", 9)(9, "form", 10)(10, "mat-form-field", 11)(11, "mat-label");
    \u0275\u0275text(12, "Estados");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "mat-select", 12);
    \u0275\u0275listener("selectionChange", function ReporteCobroTrabajadoresComponent_Template_mat_select_selectionChange_13_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.onSelect($event));
    });
    \u0275\u0275template(14, ReporteCobroTrabajadoresComponent_ng_container_14_Template, 2, 1, "ng-container", 13);
    \u0275\u0275pipe(15, "async");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "mat-form-field", 14)(17, "mat-label");
    \u0275\u0275text(18, "Fecha de inicio");
    \u0275\u0275elementEnd();
    \u0275\u0275element(19, "input", 15)(20, "mat-datepicker-toggle", 16)(21, "mat-datepicker", null, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "mat-form-field", 14)(24, "mat-label");
    \u0275\u0275text(25, "Fecha fin");
    \u0275\u0275elementEnd();
    \u0275\u0275element(26, "input", 15)(27, "mat-datepicker-toggle", 16)(28, "mat-datepicker", null, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "button", 17);
    \u0275\u0275listener("click", function ReporteCobroTrabajadoresComponent_Template_button_click_30_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.onConsultar());
    });
    \u0275\u0275elementStart(31, "span");
    \u0275\u0275text(32, " Consultar ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "button", 18);
    \u0275\u0275listener("click", function ReporteCobroTrabajadoresComponent_Template_button_click_33_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.exportToExcel(ctx.exportData));
    });
    \u0275\u0275elementStart(34, "span");
    \u0275\u0275text(35, " Exportar ");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(36, ReporteCobroTrabajadoresComponent_Conditional_36_Template, 3, 5, "div", 19)(37, ReporteCobroTrabajadoresComponent_Conditional_37_Template, 6, 2, "div", 20);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const inicioPicker_r5 = \u0275\u0275reference(22);
    const finalPicker_r6 = \u0275\u0275reference(29);
    \u0275\u0275advance(5);
    \u0275\u0275property("subscriptSizing", "dynamic");
    \u0275\u0275advance();
    \u0275\u0275property("svgIcon", "heroicons_solid:magnifying-glass");
    \u0275\u0275advance();
    \u0275\u0275property("autocomplete", "off")("placeholder", "Buscar");
    \u0275\u0275advance(2);
    \u0275\u0275property("formGroup", ctx.form);
    \u0275\u0275advance(4);
    \u0275\u0275property("formControlName", "idEstadoCredito");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(15, 18, ctx.detalleConsumo$));
    \u0275\u0275advance(5);
    \u0275\u0275property("matDatepicker", inicioPicker_r5)("formControlName", "fechaInicio");
    \u0275\u0275advance();
    \u0275\u0275property("for", inicioPicker_r5);
    \u0275\u0275advance(6);
    \u0275\u0275property("matDatepicker", finalPicker_r6)("formControlName", "fechaFinal");
    \u0275\u0275advance();
    \u0275\u0275property("for", finalPicker_r6);
    \u0275\u0275advance(3);
    \u0275\u0275property("color", "primary");
    \u0275\u0275advance(3);
    \u0275\u0275property("color", "primary")("ngClass", \u0275\u0275pureFunction2(20, _c0, ctx.exportData.length, !ctx.exportData.length))("disabled", !ctx.exportData.length);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx.data.length > 0 ? 36 : 37);
  }
}, dependencies: [
  AsyncPipe,
  CdkScrollable,
  CustomTableComponent,
  FormsModule,
  \u0275NgNoValidate,
  DefaultValueAccessor,
  NgControlStatus,
  NgControlStatusGroup,
  FuseAlertComponent,
  MatButton,
  MatDatepicker,
  MatDatepickerInput,
  MatDatepickerToggle,
  MatFormField,
  MatIcon,
  MatInput,
  MatLabel,
  MatOption,
  MatSelect,
  MatSuffix,
  NgForOf,
  NgIf,
  ReactiveFormsModule,
  FormGroupDirective,
  FormControlName,
  NgClass
] });
var ReporteCobroTrabajadoresComponent = _ReporteCobroTrabajadoresComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReporteCobroTrabajadoresComponent, { className: "ReporteCobroTrabajadoresComponent", filePath: "src\\app\\pages\\reportes\\reporte-cobro-trabajadores\\reporte-cobro-trabajadores\\reporte-cobro-trabajadores.component.ts", lineNumber: 59 });
})();

// src/app/pages/reportes/reporte-cobro-trabajadores/reporte-cobro-trabajadores.routes.ts
var reporte_cobro_trabajadores_routes_default = [
  {
    path: "",
    component: ReporteCobroTrabajadoresComponent
  }
];
export {
  reporte_cobro_trabajadores_routes_default as default
};
//# sourceMappingURL=chunk-E3HZCBVK.js.map
