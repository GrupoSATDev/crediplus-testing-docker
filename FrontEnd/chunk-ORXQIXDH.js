import {
  CodigoCobroTrabajador,
  PagoTrabajadoresService
} from "./chunk-DM7P2DYO.js";
import {
  CobroTrabajadoresService
} from "./chunk-LQXUMPK3.js";
import {
  parseCurrency
} from "./chunk-5YT4VTHK.js";
import {
  utils,
  writeFileSync
} from "./chunk-VRN2SIHY.js";
import {
  MatTab,
  MatTabContent,
  MatTabGroup
} from "./chunk-6XMXDB2K.js";
import {
  EmpresasClientesService
} from "./chunk-Z3FK2VK2.js";
import {
  MatDatepicker,
  MatDatepickerInput,
  MatDatepickerToggle
} from "./chunk-AGZF7KUE.js";
import {
  DateAdapterService
} from "./chunk-K5K55XKD.js";
import {
  NgxMaskDirective,
  provideNgxMask
} from "./chunk-MZRCXYW5.js";
import {
  CustomTableComponent
} from "./chunk-ZB3PSQQS.js";
import {
  EstadosDatosService
} from "./chunk-5JAUKKTX.js";
import {
  MatSelect
} from "./chunk-CZDVBWDU.js";
import {
  SwalService
} from "./chunk-WCR4YL2S.js";
import "./chunk-NACP6IOB.js";
import {
  FuseConfirmationService,
  confirmarPago
} from "./chunk-HUKVMAZY.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  MatError,
  MatFormField,
  MatInput,
  MatLabel,
  MatSuffix,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-IZMZQUCC.js";
import {
  AesEncryptionService
} from "./chunk-4LX6KC25.js";
import {
  ActivatedRoute,
  Router
} from "./chunk-L2WXMDPA.js";
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogClose,
  MatDialogRef
} from "./chunk-GRFMDZQD.js";
import "./chunk-74CJHXHU.js";
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
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-WGDVSMOG.js";
import {
  __objRest,
  __spreadProps,
  __spreadValues
} from "./chunk-AYDYM6RQ.js";

// src/app/pages/gestion-cobros/pago-trabajadores/dialog-estado-masivo/dialog-estado-masivo.component.ts
var maskConfig = {
  validation: false
};
var _DialogEstadoMasivoComponent = class _DialogEstadoMasivoComponent {
  constructor() {
    this.dialogRef = inject(MatDialogRef);
    this._matData = inject(MAT_DIALOG_DATA);
    this.fb = inject(FormBuilder);
    this.pagoTrabajadoresService = inject(PagoTrabajadoresService);
    this.estadosDatosService = inject(EstadosDatosService);
    this.swalService = inject(SwalService);
  }
  ngOnInit() {
    this.createForm();
    const data = this._matData.data;
    console.log(data);
    this.form.patchValue({
      valorRecibido: parseFloat(data.total.replace(/[\$,]/g, ""))
    });
  }
  onCambioEstado() {
    if (this.form.valid) {
      const dataInput = this._matData.data;
      const data = this.form.getRawValue();
      const _a = data, { valorRecibido } = _a, form = __objRest(_a, ["valorRecibido"]);
      const createData = __spreadValues({
        id: dataInput.id,
        idEstadoCobroPago: CodigoCobroTrabajador.PAGADOS,
        valorRecibido: parseFloat(valorRecibido)
      }, form);
      this.pagoTrabajadoresService.putPagoTrabajadorIndividual(createData).subscribe((response) => {
        this.estadosDatosService.stateGrid.next(true);
        this.swalService.ToastAler({
          icon: "success",
          title: "Registro Creado o Actualizado con Exito.",
          timer: 4e3
        });
        this.closeDialog();
      }, (error) => {
        this.swalService.ToastAler({
          icon: "error",
          title: "Ha ocurrido un error al crear el registro!",
          timer: 4e3
        });
      });
    }
  }
  closeDialog() {
    this.dialogRef.close();
  }
  createForm() {
    this.form = this.fb.group({
      comprobante: ["", Validators.required],
      valorRecibido: [""],
      observacion: [""]
    });
  }
};
_DialogEstadoMasivoComponent.\u0275fac = function DialogEstadoMasivoComponent_Factory(t) {
  return new (t || _DialogEstadoMasivoComponent)();
};
_DialogEstadoMasivoComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DialogEstadoMasivoComponent, selectors: [["app-dialog-estado-masivo"]], standalone: true, features: [\u0275\u0275ProvidersFeature([
  { provide: DateAdapter, useClass: DateAdapterService },
  { provide: MAT_DATE_LOCALE, useValue: "en-GB" },
  DatePipe,
  CurrencyPipe,
  provideNgxMask(maskConfig)
]), \u0275\u0275StandaloneFeature], decls: 30, vars: 8, consts: [[1, "relative", "flex", "h-full", "w-full", "flex-col"], [1, "flex", "flex-auto", "flex-col", "items-center", "pb-6", "sm:flex-row", "sm:items-start", "sm:pb-8"], [1, "flex", "h-10", "w-10", "flex-0", "items-center", "justify-center", "rounded-full", "sm:mr-4", "bg-blue-100", "text-blue-600", "dark:bg-blue-600", "dark:text-blue-50"], [3, "svgIcon"], [1, "flex", "flex-col", "items-center", "space-y-1", "text-center", "sm:mt-0", "sm:items-start", "sm:pr-8", "sm:text-left"], [1, "text-xl", "font-medium", "leading-6"], [1, "text-secondary"], [1, "mt-8", 3, "formGroup"], [1, "mt-4", "flex", "flex-col", "items-center", "space-y-1", "text-center", "sm:mt-0", "sm:items-start", "sm:text-left"], ["floatLabel", "always", 1, "w-full", "min-w-90"], ["matInput", "", "placeholder", "Comprobante", 3, "formControlName"], ["matInput", "", "placeholder", "Valor recibido", "mask", "separator.2", "thousandSeparator", ",", "decimalMarker", ".", 3, "formControlName"], ["floatLabel", "always", 1, "w-full"], ["matInput", "", "placeholder", "Observaciones", 3, "formControlName"], [1, "flex", "items-center", "justify-center", "space-x-3", "bg-gray-50", "py-4", "dark:bg-black", "dark:bg-opacity-10", "sm:justify-end"], ["mat-stroked-button", "", 1, "sm:w-auto", "w-full", "bg-crediorange-100", "rounded-lg", "transition", "duration-200", "text-white", "font-semibold", 3, "matDialogClose"], ["mat-flat-button", "", 1, "sm:w-auto", "w-full", "bg-crediblue-50", "hover:bg-crediblue-100", "text-white", "font-semibold", "py-2", "px-4", "rounded-lg", "transition", "duration-200", 3, "click", "color", "matDialogClose"]], template: function DialogEstadoMasivoComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
    \u0275\u0275element(3, "mat-icon", 3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 4)(5, "div", 5);
    \u0275\u0275text(6, " Confirmacion ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 6);
    \u0275\u0275text(8, " \xBFEst\xE1 seguro de cambiar el estado?. ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "form", 7)(10, "div", 8)(11, "mat-form-field", 9)(12, "mat-label");
    \u0275\u0275text(13, "N\xFAmero de comprobante");
    \u0275\u0275elementEnd();
    \u0275\u0275element(14, "input", 10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 8)(16, "mat-form-field", 9)(17, "mat-label");
    \u0275\u0275text(18, "Valor recibido");
    \u0275\u0275elementEnd();
    \u0275\u0275element(19, "input", 11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 8)(21, "mat-form-field", 12)(22, "mat-label");
    \u0275\u0275text(23, "Observaciones");
    \u0275\u0275elementEnd();
    \u0275\u0275element(24, "textarea", 13);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "div", 14)(26, "button", 15);
    \u0275\u0275text(27, " Cancelar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "button", 16);
    \u0275\u0275listener("click", function DialogEstadoMasivoComponent_Template_button_click_28_listener() {
      return ctx.onCambioEstado();
    });
    \u0275\u0275text(29, " Confirmar ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275property("svgIcon", "heroicons_solid:question-mark-circle");
    \u0275\u0275advance(6);
    \u0275\u0275property("formGroup", ctx.form);
    \u0275\u0275advance(5);
    \u0275\u0275property("formControlName", "comprobante");
    \u0275\u0275advance(5);
    \u0275\u0275property("formControlName", "valorRecibido");
    \u0275\u0275advance(5);
    \u0275\u0275property("formControlName", "observacion");
    \u0275\u0275advance(2);
    \u0275\u0275property("matDialogClose", "cancelled");
    \u0275\u0275advance(2);
    \u0275\u0275property("color", "primary")("matDialogClose", "confirmed");
  }
}, dependencies: [
  FormsModule,
  \u0275NgNoValidate,
  DefaultValueAccessor,
  NgControlStatus,
  NgControlStatusGroup,
  MatButton,
  MatFormField,
  MatIcon,
  MatInput,
  MatLabel,
  NgxMaskDirective,
  ReactiveFormsModule,
  FormGroupDirective,
  FormControlName,
  MatDialogClose
] });
var DialogEstadoMasivoComponent = _DialogEstadoMasivoComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DialogEstadoMasivoComponent, { className: "DialogEstadoMasivoComponent", filePath: "src\\app\\pages\\gestion-cobros\\pago-trabajadores\\dialog-estado-masivo\\dialog-estado-masivo.component.ts", lineNumber: 46 });
})();

// src/app/pages/gestion-cobros/pago-trabajadores/dialog-abonos-masivos/dialog-abonos-masivos.component.ts
var _c0 = (a0, a1) => ({ "bg-crediblue-50": a0, "bg-credigray-100": a1 });
function DialogAbonosMasivosComponent_mat_error_20_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Error el abono no puede ser mayor igual al total, favor realice el pago por cambio de estado.");
    \u0275\u0275elementEnd();
  }
}
function DialogAbonosMasivosComponent_mat_error_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275template(1, DialogAbonosMasivosComponent_mat_error_20_span_1_Template, 2, 0, "span", 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_1_0 = ctx_r0.form.get("valor").errors) == null ? null : tmp_1_0.maxAmount);
  }
}
var maskConfig2 = {
  validation: false
};
var _DialogAbonosMasivosComponent = class _DialogAbonosMasivosComponent {
  constructor() {
    this.dialogRef = inject(MatDialogRef);
    this._matData = inject(MAT_DIALOG_DATA);
    this.fb = inject(FormBuilder);
    this.estadosDatosService = inject(EstadosDatosService);
    this.pagoTrabajadoresService = inject(PagoTrabajadoresService);
    this.swalService = inject(SwalService);
  }
  ngOnInit() {
    this.createForm();
    const data = this._matData.data;
    const totalNumber = typeof data.total === "string" ? parseFloat(data.total.replace(/[\$,]/g, "")) : typeof data.total === "number" ? data.total : 0;
    const totalAbonoNumber = typeof data.totalAbono === "string" ? parseFloat(data.totalAbono.replace(/[\$,]/g, "")) : typeof data.totalAbono === "number" ? data.totalAbono : 0;
    this.form.get("valor").setValidators([maxAmountValidator(totalNumber, totalAbonoNumber), Validators.required]);
    this.form.updateValueAndValidity();
  }
  closeDialog() {
    this.dialogRef.close();
  }
  createForm() {
    this.form = this.fb.group({
      comprobante: ["", Validators.required],
      valor: ["", Validators.required],
      idPagoTrabajador: [""]
    });
  }
  onAbono() {
    if (this.form.valid) {
      const dataInput = this._matData.data;
      const data = this.form.getRawValue();
      const { valor, comprobante } = data;
      const createData = {
        idPagoTrabajador: dataInput.id,
        valor: parseFloat(valor),
        comprobante
      };
      this.pagoTrabajadoresService.pagoTrabajadoresAbono(createData).subscribe((response) => {
        this.estadosDatosService.stateGrid.next(true);
        this.swalService.ToastAler({
          icon: "success",
          title: "Registro Creado o Actualizado con Exito.",
          timer: 4e3
        });
        this.closeDialog();
      }, (error) => {
        this.swalService.ToastAler({
          icon: "error",
          title: "Ha ocurrido un error al crear el registro!",
          timer: 4e3
        });
      });
    }
  }
};
_DialogAbonosMasivosComponent.\u0275fac = function DialogAbonosMasivosComponent_Factory(t) {
  return new (t || _DialogAbonosMasivosComponent)();
};
_DialogAbonosMasivosComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DialogAbonosMasivosComponent, selectors: [["app-dialog-abonos-masivos"]], standalone: true, features: [\u0275\u0275ProvidersFeature([
  { provide: DateAdapter, useClass: DateAdapterService },
  { provide: MAT_DATE_LOCALE, useValue: "en-GB" },
  DatePipe,
  CurrencyPipe,
  provideNgxMask(maskConfig2)
]), \u0275\u0275StandaloneFeature], decls: 26, vars: 13, consts: [[1, "relative", "flex", "h-full", "w-full", "flex-col"], [1, "flex", "flex-auto", "flex-col", "items-center", "pb-6", "sm:flex-row", "sm:items-start", "sm:pb-8"], [1, "flex", "h-10", "w-10", "flex-0", "items-center", "justify-center", "rounded-full", "sm:mr-4", "bg-blue-100", "text-blue-600", "dark:bg-blue-600", "dark:text-blue-50"], [3, "svgIcon"], [1, "flex", "flex-col", "items-center", "space-y-1", "text-center", "sm:mt-0", "sm:items-start", "sm:pr-8", "sm:text-left"], [1, "text-xl", "font-medium", "leading-6"], [1, "text-secondary"], [1, "mt-8", 3, "formGroup"], [1, "mt-4", "flex", "flex-col", "items-center", "space-y-1", "text-center", "sm:mt-0", "sm:items-start", "sm:text-left"], ["floatLabel", "always", 1, "w-full", "min-w-90"], ["matInput", "", "placeholder", "Comprobante", 3, "formControlName"], ["matInput", "", "placeholder", "Valor recibido", "mask", "separator.2", "thousandSeparator", ",", "decimalMarker", ".", 3, "formControlName"], [4, "ngIf"], [1, "flex", "items-center", "justify-center", "space-x-3", "bg-gray-50", "py-4", "dark:bg-black", "dark:bg-opacity-10", "sm:justify-end"], ["mat-stroked-button", "", 1, "sm:w-auto", "w-full", "bg-crediorange-100", "rounded-lg", "transition", "duration-200", "text-white", "font-semibold", 3, "matDialogClose"], ["mat-flat-button", "", 1, "sm:w-auto", "w-full", "hover:bg-crediblue-100", "text-white", "font-semibold", "py-2", "px-4", "rounded-lg", "transition", "duration-200", 3, "click", "color", "matDialogClose", "ngClass", "disabled"]], template: function DialogAbonosMasivosComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
    \u0275\u0275element(3, "mat-icon", 3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 4)(5, "div", 5);
    \u0275\u0275text(6, " Confirmacion ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 6);
    \u0275\u0275text(8, " \xBFEst\xE1 seguro de realizar abono?. ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "form", 7)(10, "div", 8)(11, "mat-form-field", 9)(12, "mat-label");
    \u0275\u0275text(13, "N\xFAmero de comprobante");
    \u0275\u0275elementEnd();
    \u0275\u0275element(14, "input", 10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 8)(16, "mat-form-field", 9)(17, "mat-label");
    \u0275\u0275text(18, "Valor abono");
    \u0275\u0275elementEnd();
    \u0275\u0275element(19, "input", 11);
    \u0275\u0275template(20, DialogAbonosMasivosComponent_mat_error_20_Template, 2, 1, "mat-error", 12);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "div", 13)(22, "button", 14);
    \u0275\u0275text(23, " Cancelar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "button", 15);
    \u0275\u0275listener("click", function DialogAbonosMasivosComponent_Template_button_click_24_listener() {
      return ctx.onAbono();
    });
    \u0275\u0275text(25, " Guardar ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275property("svgIcon", "heroicons_solid:question-mark-circle");
    \u0275\u0275advance(6);
    \u0275\u0275property("formGroup", ctx.form);
    \u0275\u0275advance(5);
    \u0275\u0275property("formControlName", "comprobante");
    \u0275\u0275advance(5);
    \u0275\u0275property("formControlName", "valor");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.form.get("valor").dirty || ctx.form.get("valor").touched);
    \u0275\u0275advance(2);
    \u0275\u0275property("matDialogClose", "cancelled");
    \u0275\u0275advance(2);
    \u0275\u0275property("color", "primary")("matDialogClose", "confirmed")("ngClass", \u0275\u0275pureFunction2(10, _c0, ctx.form.valid, ctx.form.invalid))("disabled", ctx.form.invalid);
  }
}, dependencies: [
  FormsModule,
  \u0275NgNoValidate,
  DefaultValueAccessor,
  NgControlStatus,
  NgControlStatusGroup,
  MatButton,
  MatFormField,
  MatIcon,
  MatInput,
  MatLabel,
  NgxMaskDirective,
  ReactiveFormsModule,
  FormGroupDirective,
  FormControlName,
  MatDialogClose,
  MatError,
  NgIf,
  NgClass
] });
var DialogAbonosMasivosComponent = _DialogAbonosMasivosComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DialogAbonosMasivosComponent, { className: "DialogAbonosMasivosComponent", filePath: "src\\app\\pages\\gestion-cobros\\pago-trabajadores\\dialog-abonos-masivos\\dialog-abonos-masivos.component.ts", lineNumber: 55 });
})();
function maxAmountValidator(total, totalAbono) {
  return (control) => {
    const value = control.value;
    const maxValue = total - totalAbono;
    return value >= maxValue ? { maxAmount: { maxValue, actual: value } } : null;
  };
}

// src/app/pages/gestion-cobros/pago-trabajadores/grid-pago-trabajadores/grid-pago-trabajadores.component.ts
function GridPagoTrabajadoresComponent_ng_template_17_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "app-custom-table", 19);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("columns", ctx_r1.columns)("displayedColumns", ctx_r1.columns)("columnPropertyMap", ctx_r1.columnPropertyMap)("data", ctx_r1.data)("buttons", ctx_r1.buttons)("searchTerm", ctx_r1.searchTerm);
  }
}
function GridPagoTrabajadoresComponent_ng_template_17_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "div", 21)(2, "fuse-alert", 22)(3, "span", 23);
    \u0275\u0275text(4, "Informaci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, " No hay pagos pendientes hasta el momento. ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275property("type", "info")("appearance", "outline");
  }
}
function GridPagoTrabajadoresComponent_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, GridPagoTrabajadoresComponent_ng_template_17_ng_container_0_Template, 2, 6, "ng-container", 18)(1, GridPagoTrabajadoresComponent_ng_template_17_ng_template_1_Template, 6, 2, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const noData_r3 = \u0275\u0275reference(2);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngIf", ctx_r1.data.length)("ngIfElse", noData_r3);
  }
}
function GridPagoTrabajadoresComponent_ng_template_19_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "app-custom-table", 19);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("columns", ctx_r1.columns)("displayedColumns", ctx_r1.columns)("columnPropertyMap", ctx_r1.columnPropertyMap)("data", ctx_r1.data)("buttons", ctx_r1.buttonsPagado)("searchTerm", ctx_r1.searchTerm);
  }
}
function GridPagoTrabajadoresComponent_ng_template_19_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "div", 21)(2, "fuse-alert", 22)(3, "span", 23);
    \u0275\u0275text(4, "Informaci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, " No hay pagos hasta el momento. ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275property("type", "info")("appearance", "outline");
  }
}
function GridPagoTrabajadoresComponent_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, GridPagoTrabajadoresComponent_ng_template_19_ng_container_0_Template, 2, 6, "ng-container", 18)(1, GridPagoTrabajadoresComponent_ng_template_19_ng_template_1_Template, 6, 2, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const noData_r4 = \u0275\u0275reference(2);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngIf", ctx_r1.data.length)("ngIfElse", noData_r4);
  }
}
var _GridPagoTrabajadoresComponent = class _GridPagoTrabajadoresComponent {
  constructor() {
    this.datePipe = inject(DatePipe);
    this.searchTerm = "";
    this.currencyPipe = inject(CurrencyPipe);
    this.pagoTrabajadorService = inject(PagoTrabajadoresService);
    this._matDialog = inject(MatDialog);
    this.estadoDatosService = inject(EstadosDatosService);
    this.router = inject(Router);
    this.selectedTab = CodigoCobroTrabajador.PENDIENTES;
    this.data = [];
    this.columns = ["Fecha de liquidaci\xF3n", "Empresa", "Valor", "Estado"];
    this.columnPropertyMap = {
      "Fecha de liquidaci\xF3n": "fechaCreacion",
      "Empresa": "nombreSubempresa",
      "Valor": "total",
      "Estado": "nombreEstadoCobro"
    };
    this.buttons = [
      {
        label: "Ver",
        icon: "visibility",
        action: (element) => {
          console.log("Editing", element);
          this.router.navigate(["/pages/gestion-cobros/trabajadores/pago/", element.id]);
        }
      },
      {
        label: "Cambiar estado",
        icon: "published_with_changes",
        action: (element) => {
          console.log("View", element);
          this.selectedData = element;
          this.onCambioEstado();
        }
      },
      {
        label: "Abonos",
        icon: "request_quote",
        action: (element) => {
          console.log("View", element);
          this.selectedData = element;
          this.onAbono();
        }
      },
      {
        label: "Comprobante",
        icon: "document_scanner",
        action: (element) => {
          console.log("Editing", element);
          this.router.navigate(["/pages/gestion-cobros/trabajador/individual/", element.id]);
        }
      }
    ];
    this.buttonsPagado = [
      {
        label: "Ver",
        icon: "visibility",
        action: (element) => {
          console.log("Editing", element);
          this.router.navigate(["/pages/gestion-cobros/trabajadores/pago/", element.id]);
        }
      },
      {
        label: "Comprobante",
        icon: "document_scanner",
        action: (element) => {
          console.log("Editing", element);
          this.router.navigate(["/pages/gestion-cobros/trabajador/individual/", element.id]);
        }
      }
    ];
    this.tabChanged = (tabChangeEvent) => {
      this.tabIndex = tabChangeEvent.index;
      this.selectedTab = tabChangeEvent.index == 0 ? CodigoCobroTrabajador.PENDIENTES : CodigoCobroTrabajador.PAGADOS;
      this.getPagoTrabajadores(this.selectedTab);
    };
  }
  onCambioEstado() {
    this._matDialog.open(DialogEstadoMasivoComponent, {
      autoFocus: false,
      data: {
        edit: true,
        data: this.selectedData
      },
      width: "35%",
      disableClose: true,
      panelClass: "custom-dialog-container"
    });
  }
  onAbono() {
    this._matDialog.open(DialogAbonosMasivosComponent, {
      autoFocus: false,
      data: {
        edit: true,
        data: this.selectedData
      },
      width: "35%",
      disableClose: true,
      panelClass: "custom-dialog-container"
    });
  }
  ngOnDestroy() {
  }
  ngOnInit() {
    this.getPagoTrabajadores(this.selectedTab);
    this.listenGrid();
  }
  onNew() {
    this.router.navigate(["/pages/gestion-cobros/trabajadores/pago"]);
  }
  getPagoTrabajadores(params) {
    this.pagoTrabajadorService.getPagosTrabajadores(params).pipe(tap((response) => {
      response.data.forEach((items) => {
        items.fechaCreacion = this.datePipe.transform(items.fechaCreacion, "dd/MM/yyyy");
        items.total = params == CodigoCobroTrabajador.PENDIENTES ? items.total - items.totalAbono : items.total;
        items.total = this.currencyPipe.transform(items.total, "USD", "symbol", "1.2-2");
      });
      return response;
    })).subscribe((response) => {
      this.data = response.data;
    });
  }
  onSearch(event) {
    const target = event.target;
    this.searchTerm = target.value.trim().toLowerCase();
  }
  listenGrid() {
    const refreshData$ = this.estadoDatosService.stateGrid.asObservable();
    refreshData$.subscribe((state) => {
      if (state) {
        this.getPagoTrabajadores(this.selectedTab);
      }
    });
  }
};
_GridPagoTrabajadoresComponent.\u0275fac = function GridPagoTrabajadoresComponent_Factory(t) {
  return new (t || _GridPagoTrabajadoresComponent)();
};
_GridPagoTrabajadoresComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GridPagoTrabajadoresComponent, selectors: [["app-grid-pago-trabajadores"]], standalone: true, features: [\u0275\u0275ProvidersFeature([
  DatePipe,
  CurrencyPipe
]), \u0275\u0275StandaloneFeature], decls: 20, vars: 8, consts: [["tabGroup", ""], ["noData", ""], [1, "bg-card", "flex", "min-w-0", "flex-auto", "flex-col", "dark:bg-transparent", "sm:absolute", "sm:inset-0", "sm:overflow-hidden"], [1, "relative", "flex", "flex-0", "flex-col", "border-b", "px-6", "py-8", "sm:flex-row", "sm:items-center", "sm:justify-between", "md:px-8"], [1, "text-3xl", "font-semibold", "tracking-tight"], [1, "mt-6", "flex", "w-full", "shrink-0", "flex-col", "items-center", "sm:ml-4", "sm:mt-0", "sm:flex-row", "sm:space-x-2", "sm:w-auto"], [1, "fuse-mat-dense", "rounded-lg", "w-full", "sm:w-auto", "min-w-64", 3, "subscriptSizing"], ["matPrefix", "", 1, "icon-size-5", 3, "svgIcon"], ["matInput", "", 3, "input", "autocomplete", "placeholder"], ["mat-flat-button", "", 1, "mt-2", "w-full", "bg-crediblue-50", "rounded-lg", "transition", "duration-200", "text-white", "font-semibold", "sm:ml-4", "sm:mt-0", "sm:w-auto", 3, "click", "color"], [3, "svgIcon"], [1, "ml-2", "mr-1"], [1, "flex", "flex-auto", "overflow-hidden"], [1, "flex", "flex-auto", "flex-col", "overflow-hidden", "sm:mb-18", "sm:overflow-y-auto"], ["mat-stretch-tabs", "false", 1, "sm:px-2", 3, "selectedIndexChange", "selectedTabChange", "animationDuration", "selectedIndex"], ["label", "Pendientes"], ["matTabContent", ""], ["label", "Pagados"], [4, "ngIf", "ngIfElse"], [3, "columns", "displayedColumns", "columnPropertyMap", "data", "buttons", "searchTerm"], [1, "inset-0", "min-w-0", "overflow-auto", "print:overflow-visible"], [1, "inline-block", "p-4", "sm:p-2", "print:p-0", "w-full"], [3, "type", "appearance"], ["fuseAlertTitle", ""]], template: function GridPagoTrabajadoresComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "div", 4);
    \u0275\u0275text(3, "Registro de Cobro Masivo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 5)(5, "mat-form-field", 6);
    \u0275\u0275element(6, "mat-icon", 7);
    \u0275\u0275elementStart(7, "input", 8);
    \u0275\u0275listener("input", function GridPagoTrabajadoresComponent_Template_input_input_7_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.onSearch($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "button", 9);
    \u0275\u0275listener("click", function GridPagoTrabajadoresComponent_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.onNew());
    });
    \u0275\u0275element(9, "mat-icon", 10);
    \u0275\u0275elementStart(10, "span", 11);
    \u0275\u0275text(11, "Registrar");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(12, "div", 12)(13, "div", 13)(14, "mat-tab-group", 14, 0);
    \u0275\u0275twoWayListener("selectedIndexChange", function GridPagoTrabajadoresComponent_Template_mat_tab_group_selectedIndexChange_14_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.tabIndex, $event) || (ctx.tabIndex = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("selectedTabChange", function GridPagoTrabajadoresComponent_Template_mat_tab_group_selectedTabChange_14_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.tabChanged($event));
    });
    \u0275\u0275elementStart(16, "mat-tab", 15);
    \u0275\u0275template(17, GridPagoTrabajadoresComponent_ng_template_17_Template, 3, 2, "ng-template", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "mat-tab", 17);
    \u0275\u0275template(19, GridPagoTrabajadoresComponent_ng_template_19_Template, 3, 2, "ng-template", 16);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275property("subscriptSizing", "dynamic");
    \u0275\u0275advance();
    \u0275\u0275property("svgIcon", "heroicons_solid:magnifying-glass");
    \u0275\u0275advance();
    \u0275\u0275property("autocomplete", "off")("placeholder", "Buscar");
    \u0275\u0275advance();
    \u0275\u0275property("color", "primary");
    \u0275\u0275advance();
    \u0275\u0275property("svgIcon", "heroicons_outline:plus");
    \u0275\u0275advance(5);
    \u0275\u0275property("animationDuration", "500");
    \u0275\u0275twoWayProperty("selectedIndex", ctx.tabIndex);
  }
}, dependencies: [
  CustomTableComponent,
  MatButton,
  MatFormField,
  MatIcon,
  MatInput,
  FuseAlertComponent,
  MatTab,
  MatTabContent,
  MatTabGroup,
  NgIf
] });
var GridPagoTrabajadoresComponent = _GridPagoTrabajadoresComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GridPagoTrabajadoresComponent, { className: "GridPagoTrabajadoresComponent", filePath: "src\\app\\pages\\gestion-cobros\\pago-trabajadores\\grid-pago-trabajadores\\grid-pago-trabajadores.component.ts", lineNumber: 43 });
})();

// src/app/pages/gestion-cobros/pago-trabajadores/form-pago-trabajadores/form-pago-trabajadores.component.ts
var _c02 = (a0, a1) => ({ "bg-credigray-100": a0, "bg-green-600": a1 });
function FormPagoTrabajadoresComponent_ng_container_18_mat_option_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 23);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    \u0275\u0275property("value", item_r2.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r2.razonSocial);
  }
}
function FormPagoTrabajadoresComponent_ng_container_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, FormPagoTrabajadoresComponent_ng_container_18_mat_option_1_Template, 2, 2, "mat-option", 22);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const empresas_r3 = ctx.ngIf;
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", empresas_r3.data);
  }
}
function FormPagoTrabajadoresComponent_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "div", 24);
    \u0275\u0275element(2, "app-custom-table", 25);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("columns", ctx_r3.columns)("displayedColumns", ctx_r3.columns)("columnPropertyMap", ctx_r3.columnPropertyMap)("data", ctx_r3.data)("buttons", ctx_r3.buttons);
  }
}
function FormPagoTrabajadoresComponent_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "div", 26)(2, "fuse-alert", 27)(3, "span", 28);
    \u0275\u0275text(4, "Informaci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("type", "info")("appearance", "outline");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r3.message, " ");
  }
}
function FormPagoTrabajadoresComponent_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 21);
    \u0275\u0275text(1, "Subtotal: ");
    \u0275\u0275elementStart(2, "span", 29);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "currency");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, ctx_r3.subtotal));
  }
}
function FormPagoTrabajadoresComponent_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 21);
    \u0275\u0275text(1, "Comisiones: ");
    \u0275\u0275elementStart(2, "span", 29);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "currency");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, ctx_r3.totalComision));
  }
}
function FormPagoTrabajadoresComponent_Conditional_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 21);
    \u0275\u0275text(1, "Total a pagar: ");
    \u0275\u0275elementStart(2, "span", 29);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "currency");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 1, ctx_r3.totalPagar), " ");
  }
}
var maskConfig3 = {
  validation: false
};
var _FormPagoTrabajadoresComponent = class _FormPagoTrabajadoresComponent {
  constructor() {
    this.fb = inject(FormBuilder);
    this.empresaClienteService = inject(EmpresasClientesService);
    this.pagoTrabajadorService = inject(PagoTrabajadoresService);
    this.cobroTrabajadorService = inject(CobroTrabajadoresService);
    this.datePipe = inject(DatePipe);
    this.swalService = inject(SwalService);
    this.estadosDatosService = inject(EstadosDatosService);
    this.fuseService = inject(FuseConfirmationService);
    this.currencyPipe = inject(CurrencyPipe);
    this.decimalPipe = inject(DecimalPipe);
    this.router = inject(Router);
    this.empresa$ = this.empresaClienteService.getEmpresasClientes();
    this.tipoPago$ = this.pagoTrabajadorService.tipoPagoTrabajadores().subscribe((response) => {
      this.idTipoPagoTrabajador = response.data[0].id;
    });
    this.data = [];
    this.fechaActual = /* @__PURE__ */ new Date();
    this.aesEncriptService = inject(AesEncryptionService);
    this.columns = ["Fecha de desembolso", "Identificaci\xF3n", "Nombres Apellidos", "Valor pendiente"];
    this.columnPropertyMap = {
      "Fecha de desembolso": "fechaCreacion",
      "Identificaci\xF3n": "documentoTrabajador",
      "Nombres Apellidos": "nombreCompleto",
      "Valor pendiente": "valorPendiente"
    };
    this.buttons = [
      {
        label: "Eliminar",
        icon: "delete",
        action: this.deleteItem.bind(this),
        iconColor: "text-crediorange-100"
      }
    ];
  }
  createForm() {
    this.form = this.fb.group({
      fechaFinal: ["", Validators.required],
      idSubEmpresa: ["", Validators.required],
      idTipoPagoTrabajador: [""]
    });
  }
  ngOnInit() {
    this.createForm();
  }
  closeDialog() {
    this.router.navigate(["/pages/gestion-cobros/trabajadores"]);
  }
  onGet() {
    if (this.form.valid) {
      const { fechaFinal, idSubEmpresa } = this.form.getRawValue();
      console.log(fechaFinal);
      const fechaFinallData = this.datePipe.transform(fechaFinal, "yyyy-MM-dd");
      const consulta = {
        fechaFinallData,
        idSubEmpresa
      };
      this.getAllPagoTrabajador(consulta);
    }
  }
  onSave() {
    const { fechaFinal, idSubEmpresa, idTipoPagoTrabajador } = this.form.getRawValue();
    const fechaFinallData = this.datePipe.transform(fechaFinal, "yyyy-MM-dd");
    const consulta = {
      fechaFinal: fechaFinallData,
      idSubEmpresa
    };
    let detallePagoTrabajador = [];
    detallePagoTrabajador = this.data.map((item) => {
      return {
        idCobroTrabajador: item.id
      };
    });
    const createData = __spreadProps(__spreadValues({}, consulta), {
      detallePagoTrabajador
    });
    console.log(createData);
    const dialog = this.fuseService.open(__spreadValues({}, confirmarPago));
    dialog.afterClosed().subscribe((response) => {
      if (response === "confirmed") {
        this.postSave(createData);
      }
    });
  }
  getAllPagoTrabajador(data) {
    this.cobroTrabajadorService.getCobroTrabajadores(data).pipe(map((response) => {
      this.subtotal = 0;
      this.totalComision = 0;
      this.totalPagar = 0;
      if (response && Array.isArray(response.data)) {
        response.data.forEach((items) => {
          if (items.montoCuota) {
            items.montoCuota = this.aesEncriptService.decrypt(items.montoCuota);
          }
          if (items.valorPendiente) {
            items.valorPendiente = this.aesEncriptService.decrypt(items.valorPendiente);
          }
          items.montoCuota = this.currencyPipe.transform(items.montoCuota, "USD", "symbol", "1.2-2");
          items.pagar = this.currencyPipe.transform(items.pagar, "USD", "symbol", "1.2-2");
          items.valorPendiente = this.currencyPipe.transform(items.valorPendiente, "USD", "symbol", "1.2-2");
          items.fechaCobro = this.datePipe.transform(items.fechaCobro, "dd/MM/yyyy");
          items.fechaCreacion = this.datePipe.transform(items.fechaCreacion, "dd/MM/yyyy");
          this.totalPagar += parseFloat(items.montoCuota.replace(/[^0-9.-]+/g, ""));
        });
      } else {
        this.data = [];
      }
      return response;
    })).subscribe((response) => {
      if (response && Array.isArray(response.data)) {
        this.data = response.data;
      } else {
        this.data = [];
        this.message = response.msg;
      }
    });
  }
  postSave(data) {
    this.pagoTrabajadorService.postPagosTrabajadores(data).subscribe((response) => {
      this.swalService.ToastAler({
        icon: "success",
        title: "Registro Creado o Actualizado con Exito.",
        timer: 4e3
      });
      this.estadosDatosService.stateGrid.next(true);
      this.closeDialog();
    }, (error) => {
      this.swalService.ToastAler({
        icon: "error",
        title: "Ha ocurrido un error al crear el registro!",
        timer: 4e3
      });
    });
  }
  deleteItem(item) {
    const index = this.data.findIndex((d) => d === item);
    if (index > -1) {
      const montoCuota = parseFloat(item.montoCuota.replace(/[^0-9.-]+/g, ""));
      this.totalPagar -= isNaN(montoCuota) ? 0 : montoCuota;
      this.data.splice(index, 1);
      this.data = [...this.data];
    }
  }
};
_FormPagoTrabajadoresComponent.\u0275fac = function FormPagoTrabajadoresComponent_Factory(t) {
  return new (t || _FormPagoTrabajadoresComponent)();
};
_FormPagoTrabajadoresComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FormPagoTrabajadoresComponent, selectors: [["app-form-pago-trabajadores"]], standalone: true, features: [\u0275\u0275ProvidersFeature([
  { provide: DateAdapter, useClass: DateAdapterService },
  { provide: MAT_DATE_LOCALE, useValue: "en-GB" },
  DatePipe,
  CurrencyPipe,
  DecimalPipe,
  provideNgxMask(maskConfig3)
]), \u0275\u0275StandaloneFeature], decls: 39, vars: 19, consts: [["finalPicker", ""], [1, "bg-card", "flex", "min-w-0", "flex-auto", "flex-col", "dark:bg-transparent", "sm:absolute", "sm:inset-0", "sm:overflow-hidden"], [1, "mt-8", "text-3xl", "font-semibold", "leading-tight", "tracking-tight", "pl-8"], [1, "relative", "flex", "flex-0", "flex-col", "border-b", "px-6", "sm:flex-row", "md:px-8"], [1, "mt-6", "w-full", "shrink-0", "sm:mt-0", "sm:space-x-2", "lg:w-full"], [1, "mt-8", 3, "formGroup"], [1, "flex", "flex-col", "sm:flex-row", "gap-2.5"], ["floatLabel", "always", 1, "w-full", "min-w-90"], ["matInput", "", "placeholder", "dd/mm/yyyy", 3, "matDatepicker", "formControlName"], ["matIconSuffix", "", 3, "for"], ["placeholder", "Empresa", 3, "formControlName"], [4, "ngIf"], [1, "relative", "border", "border-gray-300", "rounded-lg"], [1, "absolute", "-top-3", "left-4", "bg-white", "px-2", "text-gray-500", "font-semibold"], [1, "flex", "flex-wrap", "justify-end", "gap-2.5", "sm:mb-4", "pr-2"], ["mat-flat-button", "", 1, "sm:w-auto", "w-full", "sm:mt-6", "bg-credigray-100", "rounded-lg", "transition", "duration-200", "text-white", "font-semibold", 3, "click", "color"], ["mat-flat-button", "", 1, "sm:w-auto", "w-full", "sm:mt-6", "bg-crediblue-50", "rounded-lg", "transition", "duration-200", "text-white", "font-semibold", 3, "click", "color"], ["mat-flat-button", "", 1, "lg:w-auto", "w-full", "sm:mt-6", "transition", "duration-200", "text-white", "font-semibold", "rounded-lg", "md:w-auto", 3, "click", "ngClass", "disabled"], [1, "flex", "flex-auto", "overflow-hidden"], [1, "inset-0", "min-w-0", "overflow-auto", "print:overflow-visible"], [1, "flex", "flex-col", "gap-4", "justify-end", "sm:flex-row"], [1, "sm:pr-4", "text-gray-600", "font-bold", "text-right"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [1, "flex", "flex-auto", "flex-col", "overflow-hidden", "sm:p-4", "sm:mb-10", "sm:overflow-y-auto"], [3, "columns", "displayedColumns", "columnPropertyMap", "data", "buttons"], [1, "inline-block", "p-4", "sm:p-8", "print:p-0", "w-full"], [3, "type", "appearance"], ["fuseAlertTitle", ""], [1, "text-gray-800"]], template: function FormPagoTrabajadoresComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2);
    \u0275\u0275text(2, " Cobro Masivo ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 3)(4, "div", 4)(5, "form", 5)(6, "div", 6)(7, "mat-form-field", 7)(8, "mat-label");
    \u0275\u0275text(9, "Fecha de corte");
    \u0275\u0275elementEnd();
    \u0275\u0275element(10, "input", 8)(11, "mat-datepicker-toggle", 9)(12, "mat-datepicker", null, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "mat-form-field", 7)(15, "mat-label");
    \u0275\u0275text(16, "Empresa");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "mat-select", 10);
    \u0275\u0275template(18, FormPagoTrabajadoresComponent_ng_container_18_Template, 2, 1, "ng-container", 11);
    \u0275\u0275pipe(19, "async");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "div", 12)(21, "div", 13);
    \u0275\u0275text(22, " Opciones ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 14)(24, "button", 15);
    \u0275\u0275listener("click", function FormPagoTrabajadoresComponent_Template_button_click_24_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.closeDialog());
    });
    \u0275\u0275elementStart(25, "span");
    \u0275\u0275text(26, " Atras ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "button", 16);
    \u0275\u0275listener("click", function FormPagoTrabajadoresComponent_Template_button_click_27_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.onGet());
    });
    \u0275\u0275elementStart(28, "span");
    \u0275\u0275text(29, " Consultar ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "button", 17);
    \u0275\u0275listener("click", function FormPagoTrabajadoresComponent_Template_button_click_30_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.onSave());
    });
    \u0275\u0275elementStart(31, "span");
    \u0275\u0275text(32, " Regitrar ");
    \u0275\u0275elementEnd()()()()()()();
    \u0275\u0275template(33, FormPagoTrabajadoresComponent_Conditional_33_Template, 3, 5, "div", 18)(34, FormPagoTrabajadoresComponent_Conditional_34_Template, 6, 3, "div", 19);
    \u0275\u0275elementStart(35, "div", 20);
    \u0275\u0275template(36, FormPagoTrabajadoresComponent_Conditional_36_Template, 5, 3, "span", 21)(37, FormPagoTrabajadoresComponent_Conditional_37_Template, 5, 3, "span", 21)(38, FormPagoTrabajadoresComponent_Conditional_38_Template, 5, 3, "span", 21);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const finalPicker_r5 = \u0275\u0275reference(13);
    \u0275\u0275advance(5);
    \u0275\u0275property("formGroup", ctx.form);
    \u0275\u0275advance(5);
    \u0275\u0275property("matDatepicker", finalPicker_r5)("formControlName", "fechaFinal");
    \u0275\u0275advance();
    \u0275\u0275property("for", finalPicker_r5);
    \u0275\u0275advance(6);
    \u0275\u0275property("formControlName", "idSubEmpresa");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(19, 14, ctx.empresa$));
    \u0275\u0275advance(6);
    \u0275\u0275property("color", "primary");
    \u0275\u0275advance(3);
    \u0275\u0275property("color", "primary");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(16, _c02, ctx.data.length == 0, ctx.data.length > 0))("disabled", ctx.data.length == 0);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx.data.length ? 33 : ctx.message ? 34 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx.subtotal ? 36 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.totalComision ? 37 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.totalPagar ? 38 : -1);
  }
}, dependencies: [
  AsyncPipe,
  CurrencyPipe,
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
var FormPagoTrabajadoresComponent = _FormPagoTrabajadoresComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FormPagoTrabajadoresComponent, { className: "FormPagoTrabajadoresComponent", filePath: "src\\app\\pages\\gestion-cobros\\pago-trabajadores\\form-pago-trabajadores\\form-pago-trabajadores.component.ts", lineNumber: 66 });
})();

// src/app/pages/gestion-cobros/pago-trabajadores/form-view-pago-trabajadores/form-view-pago-trabajadores.component.ts
var maskConfig4 = {
  validation: false
};
var _FormViewPagoTrabajadoresComponent = class _FormViewPagoTrabajadoresComponent {
  constructor() {
    this.fuseService = inject(FuseConfirmationService);
    this.currencyPipe = inject(CurrencyPipe);
    this.decimalPipe = inject(DecimalPipe);
    this.router = inject(Router);
    this.activatedRoute = inject(ActivatedRoute);
    this.datePipe = inject(DatePipe);
    this.pagoTrabajadorService = inject(PagoTrabajadoresService);
    this.data = [];
    this.form = {
      fechaCreacion: "",
      fechaFinal: "",
      fechaIncial: "",
      nombreSubempresa: "",
      total: ""
    };
    this.columns = ["Identificaci\xF3n", "Nombres Apellidos", "Valor cobro"];
    this.columnPropertyMap = {
      "Identificaci\xF3n": "documentoTrabajador",
      "Nombres Apellidos": "nombreCompleto",
      "Valor cobro": "valorPago"
    };
  }
  ngOnDestroy() {
    this.subscription$.unsubscribe();
  }
  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    this.getTrabajador(this.id);
  }
  getTrabajador(id) {
    this.subscription$ = this.pagoTrabajadorService.getPagosTrabajador(id).pipe(tap((response) => {
      response.data.detallePagoTrabajador?.forEach((items) => {
        items.fechaCobro = this.datePipe.transform(items.fechaCobro, "dd/MM/yyyy");
        items.valorPago = this.currencyPipe.transform(items.valorPago, "USD", "symbol", "1.2-2");
      });
      return response;
    })).subscribe((response) => {
      console.log("Si entra");
      this.data = response.data.detallePagoTrabajador;
      this.form.fechaCreacion = this.datePipe.transform(response.data.fechaCreacion, "dd/MM/YYYY");
      this.form.fechaFinal = response.data.fechaFinal;
      this.form.nombreSubempresa = response.data.nombreSubempresa;
      this.form.total = this.currencyPipe.transform(response.data.total, "USD", "symbol", "1.2-2");
      this.exportData = response.data;
    });
  }
  exportToExcel() {
    const header = [
      ["Detalle cobro trabajadores"],
      // Título
      ["Empresa:", this.exportData.nombreSubempresa],
      ["Fecha de liquidaci\xF3n:", this.exportData.fechaFinal],
      ["Total:", this.exportData.total]
    ];
    const detalle = this.exportData.detallePagoTrabajador.map((items) => {
      return {
        Identificaci\u00F3n: items.documentoTrabajador,
        "Nombre completo": items.nombreCompleto,
        "Valor": parseCurrency(items.valorPago)
      };
    });
    const worksheet = utils.aoa_to_sheet(header);
    const detailStartRow = header.length + 2;
    utils.sheet_add_json(worksheet, detalle, {
      origin: `A${detailStartRow}`,
      // Comienza después del encabezado
      skipHeader: false
      // Incluye encabezados de columnas
    });
    worksheet["!merges"] = [
      { s: { r: 0, c: 0 }, e: { r: 0, c: 2 } }
      // Unir celdas para el título
    ];
    const workbook = utils.book_new();
    utils.book_append_sheet(workbook, worksheet, `DetallePago${this.exportData.fechaFinal}`);
    writeFileSync(workbook, `DetallePago${this.exportData.fechaFinal}.xlsx`);
  }
  closeDialog() {
    this.router.navigate(["/pages/gestion-cobros/trabajadores"]);
  }
};
_FormViewPagoTrabajadoresComponent.\u0275fac = function FormViewPagoTrabajadoresComponent_Factory(t) {
  return new (t || _FormViewPagoTrabajadoresComponent)();
};
_FormViewPagoTrabajadoresComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FormViewPagoTrabajadoresComponent, selectors: [["app-form-view-pago-trabajadores"]], standalone: true, features: [\u0275\u0275ProvidersFeature([
  { provide: DateAdapter, useClass: DateAdapterService },
  { provide: MAT_DATE_LOCALE, useValue: "en-GB" },
  DatePipe,
  CurrencyPipe,
  DecimalPipe,
  provideNgxMask(maskConfig4)
]), \u0275\u0275StandaloneFeature], decls: 32, vars: 8, consts: [[1, "bg-card", "flex", "min-w-0", "flex-auto", "flex-col", "dark:bg-transparent", "sm:absolute", "sm:inset-0", "sm:overflow-hidden"], [1, "sm:ml-8", "mt-8", "text-3xl", "font-semibold", "leading-tight", "tracking-tight"], [1, "relative", "flex", "flex-0", "flex-col", "border-b", "px-6", "sm:flex-row", "md:px-8"], [1, "mt-6", "w-full", "shrink-0", "sm:mt-0", "sm:space-x-2", "lg:w-full"], [1, "mt-8"], [1, "flex", "flex-col", "sm:flex-row", "gap-2.5"], ["floatLabel", "always", 1, "w-full", "min-w-90"], ["matInput", "", "placeholder", "Empresa", "readonly", "", 3, "value"], [1, "relative", "p-2", "border", "border-gray-300", "rounded-lg"], [1, "absolute", "-top-3", "left-4", "bg-white", "px-2", "text-gray-500", "font-semibold"], [1, "flex", "flex-wrap", "justify-end", "gap-2.5", "sm:mb-4"], ["mat-flat-button", "", 1, "sm:w-auto", "w-full", "sm:mt-6", "bg-credigray-100", "rounded-lg", "transition", "duration-200", "text-white", "font-semibold", 3, "click", "color"], ["mat-flat-button", "", 1, "lg:w-auto", "w-full", "sm:mt-6", "bg-green-600", "transition", "duration-200", "text-white", "font-semibold", "rounded-lg", "md:w-auto", 3, "click"], [1, "flex", "flex-auto", "overflow-hidden"], [1, "flex", "flex-auto", "flex-col", "overflow-hidden", "sm:p-4", "sm:mb-10", "sm:overflow-y-auto"], [3, "columns", "displayedColumns", "columnPropertyMap", "data"]], template: function FormViewPagoTrabajadoresComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
    \u0275\u0275text(2, " Detalle cobro trabajadores ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 2)(4, "div", 3)(5, "form", 4)(6, "div", 5)(7, "mat-form-field", 6)(8, "mat-label");
    \u0275\u0275text(9, "Empresa");
    \u0275\u0275elementEnd();
    \u0275\u0275element(10, "input", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "mat-form-field", 6)(12, "mat-label");
    \u0275\u0275text(13, "Fecha de liquidaci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275element(14, "input", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "mat-form-field", 6)(16, "mat-label");
    \u0275\u0275text(17, "Total");
    \u0275\u0275elementEnd();
    \u0275\u0275element(18, "input", 7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 8)(20, "div", 9);
    \u0275\u0275text(21, " Opciones ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 10)(23, "button", 11);
    \u0275\u0275listener("click", function FormViewPagoTrabajadoresComponent_Template_button_click_23_listener() {
      return ctx.closeDialog();
    });
    \u0275\u0275elementStart(24, "span");
    \u0275\u0275text(25, " Atras ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "button", 12);
    \u0275\u0275listener("click", function FormViewPagoTrabajadoresComponent_Template_button_click_26_listener() {
      return ctx.exportToExcel();
    });
    \u0275\u0275elementStart(27, "span");
    \u0275\u0275text(28, " Descargar ");
    \u0275\u0275elementEnd()()()()()()();
    \u0275\u0275elementStart(29, "div", 13)(30, "div", 14);
    \u0275\u0275element(31, "app-custom-table", 15);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(10);
    \u0275\u0275property("value", ctx.form.nombreSubempresa);
    \u0275\u0275advance(4);
    \u0275\u0275property("value", ctx.form.fechaCreacion);
    \u0275\u0275advance(4);
    \u0275\u0275property("value", ctx.form.total);
    \u0275\u0275advance(5);
    \u0275\u0275property("color", "primary");
    \u0275\u0275advance(8);
    \u0275\u0275property("columns", ctx.columns)("displayedColumns", ctx.columns)("columnPropertyMap", ctx.columnPropertyMap)("data", ctx.data);
  }
}, dependencies: [
  CustomTableComponent,
  FormsModule,
  \u0275NgNoValidate,
  NgControlStatusGroup,
  NgForm,
  MatButton,
  MatFormField,
  MatInput,
  MatLabel,
  ReactiveFormsModule
] });
var FormViewPagoTrabajadoresComponent = _FormViewPagoTrabajadoresComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FormViewPagoTrabajadoresComponent, { className: "FormViewPagoTrabajadoresComponent", filePath: "src\\app\\pages\\gestion-cobros\\pago-trabajadores\\form-view-pago-trabajadores\\form-view-pago-trabajadores.component.ts", lineNumber: 44 });
})();

// src/app/pages/gestion-cobros/pago-trabajadores/pago-trabajadores.routes.ts
var pago_trabajadores_routes_default = [
  {
    path: "",
    component: GridPagoTrabajadoresComponent
  },
  {
    path: "pago",
    component: FormPagoTrabajadoresComponent
  },
  {
    path: "pago/:id",
    component: FormViewPagoTrabajadoresComponent
  }
];
export {
  pago_trabajadores_routes_default as default
};
//# sourceMappingURL=chunk-ORXQIXDH.js.map
