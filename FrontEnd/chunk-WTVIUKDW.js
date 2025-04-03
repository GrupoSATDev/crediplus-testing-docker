import {
  CodigoCobroTrabajador,
  PagoTrabajadoresService
} from "./chunk-DM7P2DYO.js";
import {
  CobroTrabajadoresService
} from "./chunk-LQXUMPK3.js";
import {
  MatTab,
  MatTabContent,
  MatTabGroup
} from "./chunk-6XMXDB2K.js";
import {
  EmpleadosService
} from "./chunk-WT4TBEYC.js";
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
  MatAutocomplete,
  MatAutocompleteTrigger
} from "./chunk-HUPCGCVI.js";
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
  FormControl,
  FormControlDirective,
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
  startWith,
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
  ɵɵpipeBind2,
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
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-WGDVSMOG.js";
import {
  __objRest,
  __spreadProps,
  __spreadValues
} from "./chunk-AYDYM6RQ.js";

// src/app/pages/gestion-cobros/pago-trabajador/dialog-estado/dialog-estado.component.ts
var maskConfig = {
  validation: false
};
var _DialogEstadoComponent = class _DialogEstadoComponent {
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
_DialogEstadoComponent.\u0275fac = function DialogEstadoComponent_Factory(t) {
  return new (t || _DialogEstadoComponent)();
};
_DialogEstadoComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DialogEstadoComponent, selectors: [["app-dialog-estado"]], standalone: true, features: [\u0275\u0275ProvidersFeature([
  { provide: DateAdapter, useClass: DateAdapterService },
  { provide: MAT_DATE_LOCALE, useValue: "en-GB" },
  DatePipe,
  CurrencyPipe,
  provideNgxMask(maskConfig)
]), \u0275\u0275StandaloneFeature], decls: 30, vars: 8, consts: [[1, "relative", "flex", "h-full", "w-full", "flex-col"], [1, "flex", "flex-auto", "flex-col", "items-center", "pb-6", "sm:flex-row", "sm:items-start", "sm:pb-8"], [1, "flex", "h-10", "w-10", "flex-0", "items-center", "justify-center", "rounded-full", "sm:mr-4", "bg-blue-100", "text-blue-600", "dark:bg-blue-600", "dark:text-blue-50"], [3, "svgIcon"], [1, "flex", "flex-col", "items-center", "space-y-1", "text-center", "sm:mt-0", "sm:items-start", "sm:pr-8", "sm:text-left"], [1, "text-xl", "font-medium", "leading-6"], [1, "text-secondary"], [1, "mt-8", 3, "formGroup"], [1, "mt-4", "flex", "flex-col", "items-center", "space-y-1", "text-center", "sm:mt-0", "sm:items-start", "sm:text-left"], ["floatLabel", "always", 1, "w-full", "min-w-90"], ["matInput", "", "placeholder", "Comprobante", 3, "formControlName"], ["matInput", "", "placeholder", "Valor recibido", "mask", "separator.2", "thousandSeparator", ",", "decimalMarker", ".", 3, "formControlName"], ["floatLabel", "always", 1, "w-full"], ["matInput", "", "placeholder", "Observaciones", 3, "formControlName"], [1, "flex", "items-center", "justify-center", "space-x-3", "bg-gray-50", "py-4", "dark:bg-black", "dark:bg-opacity-10", "sm:justify-end"], ["mat-stroked-button", "", 1, "sm:w-auto", "w-full", "bg-crediorange-100", "rounded-lg", "transition", "duration-200", "text-white", "font-semibold", 3, "matDialogClose"], ["mat-flat-button", "", 1, "sm:w-auto", "w-full", "bg-crediblue-50", "hover:bg-crediblue-100", "text-white", "font-semibold", "py-2", "px-4", "rounded-lg", "transition", "duration-200", 3, "click", "color", "matDialogClose"]], template: function DialogEstadoComponent_Template(rf, ctx) {
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
    \u0275\u0275listener("click", function DialogEstadoComponent_Template_button_click_28_listener() {
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
  MatButton,
  MatIcon,
  MatDialogClose,
  MatFormField,
  MatInput,
  MatLabel,
  ReactiveFormsModule,
  \u0275NgNoValidate,
  DefaultValueAccessor,
  NgControlStatus,
  NgControlStatusGroup,
  FormGroupDirective,
  FormControlName,
  FormsModule,
  NgxMaskDirective
] });
var DialogEstadoComponent = _DialogEstadoComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DialogEstadoComponent, { className: "DialogEstadoComponent", filePath: "src\\app\\pages\\gestion-cobros\\pago-trabajador\\dialog-estado\\dialog-estado.component.ts", lineNumber: 45 });
})();

// src/app/pages/gestion-cobros/pago-trabajador/dialog-abono-individual/dialog-abono-individual.component.ts
function DialogAbonoIndividualComponent_mat_error_20_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Error el abono no puede ser mayor igual al total, favor realice el pago por cambio de estado.");
    \u0275\u0275elementEnd();
  }
}
function DialogAbonoIndividualComponent_mat_error_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275template(1, DialogAbonoIndividualComponent_mat_error_20_span_1_Template, 2, 0, "span", 12);
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
var _DialogAbonoIndividualComponent = class _DialogAbonoIndividualComponent {
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
_DialogAbonoIndividualComponent.\u0275fac = function DialogAbonoIndividualComponent_Factory(t) {
  return new (t || _DialogAbonoIndividualComponent)();
};
_DialogAbonoIndividualComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DialogAbonoIndividualComponent, selectors: [["app-dialog-abono-individual"]], standalone: true, features: [\u0275\u0275ProvidersFeature([
  { provide: DateAdapter, useClass: DateAdapterService },
  { provide: MAT_DATE_LOCALE, useValue: "en-GB" },
  DatePipe,
  CurrencyPipe,
  provideNgxMask(maskConfig2)
]), \u0275\u0275StandaloneFeature], decls: 26, vars: 9, consts: [[1, "relative", "flex", "h-full", "w-full", "flex-col"], [1, "flex", "flex-auto", "flex-col", "items-center", "pb-6", "sm:flex-row", "sm:items-start", "sm:pb-8"], [1, "flex", "h-10", "w-10", "flex-0", "items-center", "justify-center", "rounded-full", "sm:mr-4", "bg-blue-100", "text-blue-600", "dark:bg-blue-600", "dark:text-blue-50"], [3, "svgIcon"], [1, "flex", "flex-col", "items-center", "space-y-1", "text-center", "sm:mt-0", "sm:items-start", "sm:pr-8", "sm:text-left"], [1, "text-xl", "font-medium", "leading-6"], [1, "text-secondary"], [1, "mt-8", 3, "formGroup"], [1, "mt-4", "flex", "flex-col", "items-center", "space-y-1", "text-center", "sm:mt-0", "sm:items-start", "sm:text-left"], ["floatLabel", "always", 1, "w-full", "min-w-90"], ["matInput", "", "placeholder", "Comprobante", 3, "formControlName"], ["matInput", "", "placeholder", "Valor recibido", "mask", "separator.2", "thousandSeparator", ",", "decimalMarker", ".", 3, "formControlName"], [4, "ngIf"], [1, "flex", "items-center", "justify-center", "space-x-3", "bg-gray-50", "py-4", "dark:bg-black", "dark:bg-opacity-10", "sm:justify-end"], ["mat-stroked-button", "", 1, "sm:w-auto", "w-full", "bg-crediorange-100", "rounded-lg", "transition", "duration-200", "text-white", "font-semibold", 3, "matDialogClose"], ["mat-flat-button", "", 1, "sm:w-auto", "w-full", "bg-crediblue-50", "hover:bg-crediblue-100", "text-white", "font-semibold", "py-2", "px-4", "rounded-lg", "transition", "duration-200", 3, "click", "color", "matDialogClose", "disabled"]], template: function DialogAbonoIndividualComponent_Template(rf, ctx) {
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
    \u0275\u0275template(20, DialogAbonoIndividualComponent_mat_error_20_Template, 2, 1, "mat-error", 12);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "div", 13)(22, "button", 14);
    \u0275\u0275text(23, " Cancelar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "button", 15);
    \u0275\u0275listener("click", function DialogAbonoIndividualComponent_Template_button_click_24_listener() {
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
    \u0275\u0275property("color", "primary")("matDialogClose", "confirmed")("disabled", ctx.form.invalid);
  }
}, dependencies: [
  FormsModule,
  \u0275NgNoValidate,
  DefaultValueAccessor,
  NgControlStatus,
  NgControlStatusGroup,
  MatButton,
  MatError,
  MatFormField,
  MatIcon,
  MatInput,
  MatLabel,
  NgIf,
  NgxMaskDirective,
  MatDialogClose,
  ReactiveFormsModule,
  FormGroupDirective,
  FormControlName
] });
var DialogAbonoIndividualComponent = _DialogAbonoIndividualComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DialogAbonoIndividualComponent, { className: "DialogAbonoIndividualComponent", filePath: "src\\app\\pages\\gestion-cobros\\pago-trabajador\\dialog-abono-individual\\dialog-abono-individual.component.ts", lineNumber: 55 });
})();
function maxAmountValidator(total, totalAbono) {
  return (control) => {
    const value = control.value;
    const maxValue = total - totalAbono;
    return value >= maxValue ? { maxAmount: { maxValue, actual: value } } : null;
  };
}

// src/app/pages/gestion-cobros/pago-trabajador/grid-pago-trabajador/grid-pago-trabajador.component.ts
function GridPagoTrabajadorComponent_ng_template_17_ng_container_0_Template(rf, ctx) {
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
function GridPagoTrabajadorComponent_ng_template_17_ng_template_1_Template(rf, ctx) {
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
function GridPagoTrabajadorComponent_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, GridPagoTrabajadorComponent_ng_template_17_ng_container_0_Template, 2, 6, "ng-container", 18)(1, GridPagoTrabajadorComponent_ng_template_17_ng_template_1_Template, 6, 2, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const noData_r3 = \u0275\u0275reference(2);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngIf", ctx_r1.data.length)("ngIfElse", noData_r3);
  }
}
function GridPagoTrabajadorComponent_ng_template_19_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "app-custom-table", 19);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("columns", ctx_r1.columns)("displayedColumns", ctx_r1.columns)("columnPropertyMap", ctx_r1.columnPropertyMap)("data", ctx_r1.data)("buttons", ctx_r1.buttonsPagados)("searchTerm", ctx_r1.searchTerm);
  }
}
function GridPagoTrabajadorComponent_ng_template_19_ng_template_1_Template(rf, ctx) {
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
function GridPagoTrabajadorComponent_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, GridPagoTrabajadorComponent_ng_template_19_ng_container_0_Template, 2, 6, "ng-container", 18)(1, GridPagoTrabajadorComponent_ng_template_19_ng_template_1_Template, 6, 2, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const noData_r4 = \u0275\u0275reference(2);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngIf", ctx_r1.data.length)("ngIfElse", noData_r4);
  }
}
var _GridPagoTrabajadorComponent = class _GridPagoTrabajadorComponent {
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
    this.columns = ["N\xFAmero de pago", "Identificaci\xF3n", "Nombres Apellidos", "Empresa", "Total", "Estado"];
    this.columnPropertyMap = {
      "N\xFAmero de pago": "consecutivo",
      "Identificaci\xF3n": "numDocumento",
      "Nombres Apellidos": "nombreTrabajador",
      "Empresa": "nombreSubempresa",
      "Total": "total",
      "Estado": "nombreEstadoCobro"
    };
    this.buttons = [
      {
        label: "Ver",
        icon: "visibility",
        action: (element) => {
          console.log("Editing", element);
          this.router.navigate(["/pages/gestion-cobros/trabajador/individual/", element.id]);
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
      }
    ];
    this.buttonsPagados = [
      {
        label: "Ver",
        icon: "visibility",
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
    this._matDialog.open(DialogEstadoComponent, {
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
    this._matDialog.open(DialogAbonoIndividualComponent, {
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
    this.router.navigate(["/pages/gestion-cobros/trabajador/individual"]);
  }
  getPagoTrabajadores(params) {
    this.pagoTrabajadorService.getPagoTrabajadorIndividual(params).pipe(tap((response) => {
      response.data.forEach((items) => {
        items.fechaCreacion = this.datePipe.transform(items.fechaCreacion, "dd/MM/yyyy");
        items.total = this.currencyPipe.transform(items.total, "USD", "symbol", "1.2-2");
      });
      return response;
    })).subscribe((response) => {
      if (response.data) {
        this.data = response.data;
      }
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
_GridPagoTrabajadorComponent.\u0275fac = function GridPagoTrabajadorComponent_Factory(t) {
  return new (t || _GridPagoTrabajadorComponent)();
};
_GridPagoTrabajadorComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GridPagoTrabajadorComponent, selectors: [["app-grid-pago-trabajador"]], standalone: true, features: [\u0275\u0275ProvidersFeature([
  DatePipe,
  CurrencyPipe
]), \u0275\u0275StandaloneFeature], decls: 20, vars: 8, consts: [["tabGroup", ""], ["noData", ""], [1, "bg-card", "flex", "min-w-0", "flex-auto", "flex-col", "dark:bg-transparent", "sm:absolute", "sm:inset-0", "sm:overflow-hidden"], [1, "relative", "flex", "flex-0", "flex-col", "border-b", "px-6", "py-8", "sm:flex-row", "sm:items-center", "sm:justify-between", "md:px-8"], [1, "text-3xl", "font-semibold", "tracking-tight"], [1, "mt-6", "flex", "w-full", "shrink-0", "flex-col", "items-center", "sm:ml-4", "sm:mt-0", "sm:flex-row", "sm:space-x-2", "sm:w-auto"], [1, "fuse-mat-dense", "rounded-lg", "w-full", "sm:w-auto", "min-w-64", 3, "subscriptSizing"], ["matPrefix", "", 1, "icon-size-5", 3, "svgIcon"], ["matInput", "", 3, "input", "autocomplete", "placeholder"], ["mat-flat-button", "", 1, "mt-2", "w-full", "bg-crediblue-50", "rounded-lg", "transition", "duration-200", "text-white", "font-semibold", "sm:ml-4", "sm:mt-0", "sm:w-auto", 3, "click", "color"], [3, "svgIcon"], [1, "ml-2", "mr-1"], [1, "flex", "flex-auto", "overflow-hidden"], [1, "flex", "flex-auto", "flex-col", "overflow-hidden", "sm:mb-18", "sm:overflow-y-auto"], ["mat-stretch-tabs", "false", 1, "sm:px-2", 3, "selectedIndexChange", "selectedTabChange", "animationDuration", "selectedIndex"], ["label", "Pendientes"], ["matTabContent", ""], ["label", "Pagados"], [4, "ngIf", "ngIfElse"], [3, "columns", "displayedColumns", "columnPropertyMap", "data", "buttons", "searchTerm"], [1, "inset-0", "min-w-0", "overflow-auto", "print:overflow-visible"], [1, "inline-block", "p-4", "sm:p-2", "print:p-0", "w-full"], [3, "type", "appearance"], ["fuseAlertTitle", ""]], template: function GridPagoTrabajadorComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "div", 4);
    \u0275\u0275text(3, "Registro de Cobro Individual");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 5)(5, "mat-form-field", 6);
    \u0275\u0275element(6, "mat-icon", 7);
    \u0275\u0275elementStart(7, "input", 8);
    \u0275\u0275listener("input", function GridPagoTrabajadorComponent_Template_input_input_7_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.onSearch($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "button", 9);
    \u0275\u0275listener("click", function GridPagoTrabajadorComponent_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.onNew());
    });
    \u0275\u0275element(9, "mat-icon", 10);
    \u0275\u0275elementStart(10, "span", 11);
    \u0275\u0275text(11, "Registrar");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(12, "div", 12)(13, "div", 13)(14, "mat-tab-group", 14, 0);
    \u0275\u0275twoWayListener("selectedIndexChange", function GridPagoTrabajadorComponent_Template_mat_tab_group_selectedIndexChange_14_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.tabIndex, $event) || (ctx.tabIndex = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("selectedTabChange", function GridPagoTrabajadorComponent_Template_mat_tab_group_selectedTabChange_14_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.tabChanged($event));
    });
    \u0275\u0275elementStart(16, "mat-tab", 15);
    \u0275\u0275template(17, GridPagoTrabajadorComponent_ng_template_17_Template, 3, 2, "ng-template", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "mat-tab", 17);
    \u0275\u0275template(19, GridPagoTrabajadorComponent_ng_template_19_Template, 3, 2, "ng-template", 16);
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
var GridPagoTrabajadorComponent = _GridPagoTrabajadorComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GridPagoTrabajadorComponent, { className: "GridPagoTrabajadorComponent", filePath: "src\\app\\pages\\gestion-cobros\\pago-trabajador\\grid-pago-trabajador\\grid-pago-trabajador.component.ts", lineNumber: 43 });
})();

// src/app/pages/gestion-cobros/pago-trabajador/form-pago-trabajador/form-pago-trabajador.component.ts
var _c0 = (a0, a1) => ({ "bg-credigray-100": a0, "bg-green-600": a1 });
function FormPagoTrabajadorComponent_ng_container_18_mat_option_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 27);
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
function FormPagoTrabajadorComponent_ng_container_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, FormPagoTrabajadorComponent_ng_container_18_mat_option_1_Template, 2, 2, "mat-option", 15);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const empresas_r3 = ctx.ngIf;
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", empresas_r3.data);
  }
}
function FormPagoTrabajadorComponent_mat_option_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 27);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const empleado_r4 = ctx.$implicit;
    \u0275\u0275property("value", empleado_r4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", empleado_r4.primerNombre, " ", empleado_r4.primerApellido, " ");
  }
}
function FormPagoTrabajadorComponent_div_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28)(1, "mat-form-field", 29)(2, "mat-label");
    \u0275\u0275text(3, "Observaciones");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "textarea", 30);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275property("formControlName", "observacion");
  }
}
function FormPagoTrabajadorComponent_Conditional_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23)(1, "div", 31)(2, "p", 32);
    \u0275\u0275text(3, "Movimientos");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "app-custom-table", 33);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("columns", ctx_r4.columns)("displayedColumns", ctx_r4.columns)("columnPropertyMap", ctx_r4.columnPropertyMap)("data", ctx_r4.data);
  }
}
function FormPagoTrabajadorComponent_Conditional_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24)(1, "div", 34)(2, "fuse-alert", 35)(3, "span", 36);
    \u0275\u0275text(4, "Informaci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("type", "info")("appearance", "outline");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r4.message, " ");
  }
}
function FormPagoTrabajadorComponent_Conditional_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 26);
    \u0275\u0275text(1, "Subtotal: ");
    \u0275\u0275elementStart(2, "span", 37);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "currency");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, ctx_r4.subtotal));
  }
}
function FormPagoTrabajadorComponent_Conditional_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 26);
    \u0275\u0275text(1, "Comisiones: ");
    \u0275\u0275elementStart(2, "span", 37);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "currency");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, ctx_r4.totalComision));
  }
}
function FormPagoTrabajadorComponent_Conditional_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 26);
    \u0275\u0275text(1, "Total a pagar: ");
    \u0275\u0275elementStart(2, "span", 37);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "currency");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 1, ctx_r4.totalPagar), " ");
  }
}
var maskConfig3 = {
  validation: false
};
var _FormPagoTrabajadorComponent = class _FormPagoTrabajadorComponent {
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
    this.empleadosService = inject(EmpleadosService);
    this.empleadoControl = new FormControl("");
    this.aesEncriptService = inject(AesEncryptionService);
    this.empresa$ = this.empresaClienteService.getEmpresasClientes().pipe(tap((response) => {
      const valorSelected = response.data;
      if (valorSelected) {
        this.form.get("idSubEmpresa").setValue(valorSelected[0].id);
        this.getEmpleadosSubEmpresas(valorSelected[0].id);
      }
    }));
    this.tipoPago$ = this.pagoTrabajadorService.tipoPagoTrabajadores().pipe(tap((response) => {
      const valorSelected = response.data;
      if (valorSelected) {
        this.selectOptionValue = valorSelected;
      }
    }));
    this.empleados = [];
    this.data = [];
    this.columns = ["Empresa", "N factura / Comprobante", "Valor pendiente"];
    this.columnPropertyMap = {
      "Empresa": "nombreSubEmpresa",
      "N factura / Comprobante": "numeroFactura",
      "Valor pendiente": "valorPendiente"
    };
  }
  displayFn(empleado) {
    return empleado ? `${empleado.primerNombre} ${empleado.primerApellido}` : "";
  }
  _filter(value) {
    const filterValue = value.toLowerCase();
    return this.empleados.filter((empleado) => `${empleado.primerNombre} ${empleado.primerApellido}`.toLowerCase().includes(filterValue));
  }
  onOptionSelected(event) {
    const selectedEmpleado = event.option.value;
    this.empleadoControl.setValue(selectedEmpleado);
    this.form.get("idTrabajador").setValue(selectedEmpleado.id);
  }
  createForm() {
    this.form = this.fb.group({
      fechaFinal: ["", Validators.required],
      idSubEmpresa: ["", Validators.required],
      idTrabajador: ["", Validators.required],
      observacion: [""]
    });
  }
  ngOnInit() {
    this.createForm();
    this.filteredEmpleados$ = this.empleadoControl.valueChanges.pipe(startWith(""), map((value) => {
      const name = typeof value === "string" ? value : value?.primerNombre || value?.primerApellido;
      return name ? this._filter(name) : this.empleados.slice();
    }));
  }
  actualizaSelected(inputValue) {
    if (inputValue === this.totalPagar) {
      console.log("Si entra al actualizar");
      this.form.get("idTipoPagoTrabajador").setValue(this.selectOptionValue[0].id);
    } else if (inputValue < this.totalPagar) {
      console.log("Si entra al actualizar 2");
      this.form.get("idTipoPagoTrabajador").setValue(this.selectOptionValue[1].id);
    }
  }
  get valorAbono() {
    return this.form.get("valorAbono");
  }
  maxAmountValidator(control) {
    if (control.value === null || control.value === void 0 || control.value === "") {
      return null;
    }
    console.log(control.value);
    const amount = parseFloat(control.value.toString().replace(/,/g, ""));
    console.log(amount);
    if (amount === 0) {
      return { valueZero: true };
    }
    if (amount > this.totalPagar) {
      console.log("Si entra");
      return { exceedsBalance: true };
    }
    return null;
  }
  closeDialog() {
    this.router.navigate(["/pages/gestion-cobros/trabajador"]);
  }
  getEmpleadosSubEmpresas(id) {
    this.empleadosService.getEmpleadosSubempresas(id).subscribe((response) => {
      if (response.data) {
        this.empleados = response.data;
      }
    });
  }
  selectedEmpleados(event) {
    const id = event.value;
    this.empleadosService.getEmpleadosSubempresas(id).subscribe((response) => {
      if (response.data) {
        this.empleados = response.data;
        this.empleadoControl.reset("");
      }
    });
  }
  onGet() {
    if (this.form.valid) {
      const { fechaFinal, idSubEmpresa, idTrabajador } = this.form.getRawValue();
      const fechaFinallData = this.datePipe.transform(fechaFinal, "yyyy-MM-dd");
      const consulta = {
        fechaFinallData,
        idSubEmpresa,
        idTrabajador
      };
      console.log(consulta);
      this.getAllPagoTrabajador(consulta);
    }
  }
  onSave() {
    const _a = this.form.getRawValue(), { fechaFinal, idSubEmpresa, idTrabajador, idTipoPagoTrabajador } = _a, form = __objRest(_a, ["fechaFinal", "idSubEmpresa", "idTrabajador", "idTipoPagoTrabajador"]);
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
    const createData = __spreadValues(__spreadProps(__spreadValues({}, consulta), {
      detallePagoTrabajador,
      idTrabajador
    }), form);
    console.log(createData);
    const dialog = this.fuseService.open(__spreadValues({}, confirmarPago));
    dialog.afterClosed().subscribe((response) => {
      if (response === "confirmed") {
        this.postSave(createData);
      }
    });
  }
  getAllPagoTrabajador(data) {
    this.cobroTrabajadorService.getCobroTrabajador(data).pipe(map((response) => {
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
          items.comision = this.currencyPipe.transform(items.comision, "USD", "symbol", "1.2-2");
          items.pagar = this.currencyPipe.transform(items.pagar, "USD", "symbol", "1.2-2");
          items.valorPendiente = this.currencyPipe.transform(items.valorPendiente, "USD", "symbol", "1.2-2");
          items.fechaCobro = this.datePipe.transform(items.fechaCobro, "dd/MM/yyyy");
          this.totalPagar += parseFloat(items.valorPendiente.replace(/[^0-9.-]+/g, ""));
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
    this.pagoTrabajadorService.postPagoTrabajador(data).subscribe((response) => {
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
};
_FormPagoTrabajadorComponent.\u0275fac = function FormPagoTrabajadorComponent_Factory(t) {
  return new (t || _FormPagoTrabajadorComponent)();
};
_FormPagoTrabajadorComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FormPagoTrabajadorComponent, selectors: [["app-form-pago-trabajador"]], standalone: true, features: [\u0275\u0275ProvidersFeature([
  { provide: DateAdapter, useClass: DateAdapterService },
  { provide: MAT_DATE_LOCALE, useValue: "en-GB" },
  DatePipe,
  CurrencyPipe,
  DecimalPipe,
  provideNgxMask(maskConfig3)
]), \u0275\u0275StandaloneFeature], decls: 49, vars: 26, consts: [["finalPicker", ""], ["auto", "matAutocomplete"], ["cdkScrollable", "", 1, "bg-card", "flex", "min-w-0", "flex-auto", "flex-col", "dark:bg-transparent", "sm:inset-0", "sm:overflow-hidden"], [1, "mt-8", "text-3xl", "font-semibold", "leading-tight", "tracking-tight", "pl-8"], [1, "relative", "flex", "flex-0", "flex-col", "border-b", "px-6", "sm:flex-row", "md:px-8"], [1, "mt-6", "w-full", "shrink-0", "sm:mt-0", "sm:space-x-2", "lg:w-full"], [1, "mt-8", 3, "formGroup"], [1, "flex", "flex-col", "sm:flex-row", "gap-2.5"], ["floatLabel", "always", 1, "w-full", "min-w-90"], ["matInput", "", "placeholder", "dd/mm/yyyy", 3, "matDatepicker", "formControlName"], ["matIconSuffix", "", 3, "for"], ["placeholder", "Empresa", 3, "selectionChange", "formControlName"], [4, "ngIf"], ["type", "text", "placeholder", "Trabajadores", "matInput", "", 3, "formControl", "matAutocomplete"], [3, "optionSelected", "displayWith"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "flex flex-col items-baseline sm:flex-row gap-2.5", 4, "ngIf"], [1, "relative", "border", "border-gray-300", "rounded-lg"], [1, "absolute", "-top-3", "left-4", "bg-white", "px-2", "text-gray-500", "font-semibold"], [1, "flex", "flex-wrap", "justify-end", "gap-2.5", "sm:mb-4", "pr-2"], ["mat-flat-button", "", 1, "sm:w-auto", "w-full", "sm:mt-6", "bg-credigray-100", "rounded-lg", "transition", "duration-200", "text-white", "font-semibold", 3, "click", "color"], ["mat-flat-button", "", 1, "sm:w-auto", "w-full", "sm:mt-6", "bg-crediblue-50", "rounded-lg", "transition", "duration-200", "text-white", "font-semibold", 3, "click", "color"], ["mat-flat-button", "", 1, "lg:w-auto", "w-full", "sm:mt-6", "transition", "duration-200", "text-white", "font-semibold", "rounded-lg", "md:w-auto", 3, "click", "ngClass", "disabled"], [1, "flex", "flex-auto", "overflow-hidden"], [1, "inset-0", "min-w-0", "overflow-auto", "print:overflow-visible"], [1, "flex", "flex-col", "gap-4", "justify-end", "sm:flex-row"], [1, "sm:pr-4", "text-gray-600", "font-bold", "text-right"], [3, "value"], [1, "flex", "flex-col", "items-baseline", "sm:flex-row", "gap-2.5"], ["floatLabel", "always", 1, "w-full"], ["matInput", "", "placeholder", "Observaciones", 3, "formControlName"], [1, "flex", "flex-auto", "flex-col", "overflow-hidden", "sm:p-4", "sm:mb-10", "sm:overflow-y-auto"], [1, "text-lg", "text-black", "font-semibold", "mb-4"], [3, "columns", "displayedColumns", "columnPropertyMap", "data"], [1, "inline-block", "p-4", "sm:p-8", "print:p-0", "w-full"], [3, "type", "appearance"], ["fuseAlertTitle", ""], [1, "text-gray-800"]], template: function FormPagoTrabajadorComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 3);
    \u0275\u0275text(2, " Cobro Individual ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 4)(4, "div", 5)(5, "form", 6)(6, "div", 7)(7, "mat-form-field", 8)(8, "mat-label");
    \u0275\u0275text(9, "Fecha de corte");
    \u0275\u0275elementEnd();
    \u0275\u0275element(10, "input", 9)(11, "mat-datepicker-toggle", 10)(12, "mat-datepicker", null, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "mat-form-field", 8)(15, "mat-label");
    \u0275\u0275text(16, "Empresa");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "mat-select", 11);
    \u0275\u0275listener("selectionChange", function FormPagoTrabajadorComponent_Template_mat_select_selectionChange_17_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.selectedEmpleados($event));
    });
    \u0275\u0275template(18, FormPagoTrabajadorComponent_ng_container_18_Template, 2, 1, "ng-container", 12);
    \u0275\u0275pipe(19, "async");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "div", 7)(21, "mat-form-field", 8)(22, "mat-label");
    \u0275\u0275text(23, "Trabajadores");
    \u0275\u0275elementEnd();
    \u0275\u0275element(24, "input", 13);
    \u0275\u0275elementStart(25, "mat-autocomplete", 14, 1);
    \u0275\u0275listener("optionSelected", function FormPagoTrabajadorComponent_Template_mat_autocomplete_optionSelected_25_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.onOptionSelected($event));
    });
    \u0275\u0275template(27, FormPagoTrabajadorComponent_mat_option_27_Template, 2, 3, "mat-option", 15);
    \u0275\u0275pipe(28, "async");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(29, FormPagoTrabajadorComponent_div_29_Template, 5, 1, "div", 16);
    \u0275\u0275elementStart(30, "div", 17)(31, "div", 18);
    \u0275\u0275text(32, " Opciones ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "div", 19)(34, "button", 20);
    \u0275\u0275listener("click", function FormPagoTrabajadorComponent_Template_button_click_34_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.closeDialog());
    });
    \u0275\u0275elementStart(35, "span");
    \u0275\u0275text(36, " Atras ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "button", 21);
    \u0275\u0275listener("click", function FormPagoTrabajadorComponent_Template_button_click_37_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.onGet());
    });
    \u0275\u0275elementStart(38, "span");
    \u0275\u0275text(39, " Consultar ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "button", 22);
    \u0275\u0275listener("click", function FormPagoTrabajadorComponent_Template_button_click_40_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.onSave());
    });
    \u0275\u0275elementStart(41, "span");
    \u0275\u0275text(42, " Registrar ");
    \u0275\u0275elementEnd()()()()()()();
    \u0275\u0275template(43, FormPagoTrabajadorComponent_Conditional_43_Template, 5, 4, "div", 23)(44, FormPagoTrabajadorComponent_Conditional_44_Template, 6, 3, "div", 24);
    \u0275\u0275elementStart(45, "div", 25);
    \u0275\u0275template(46, FormPagoTrabajadorComponent_Conditional_46_Template, 5, 3, "span", 26)(47, FormPagoTrabajadorComponent_Conditional_47_Template, 5, 3, "span", 26)(48, FormPagoTrabajadorComponent_Conditional_48_Template, 5, 3, "span", 26);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const finalPicker_r6 = \u0275\u0275reference(13);
    const auto_r7 = \u0275\u0275reference(26);
    \u0275\u0275advance(5);
    \u0275\u0275property("formGroup", ctx.form);
    \u0275\u0275advance(5);
    \u0275\u0275property("matDatepicker", finalPicker_r6)("formControlName", "fechaFinal");
    \u0275\u0275advance();
    \u0275\u0275property("for", finalPicker_r6);
    \u0275\u0275advance(6);
    \u0275\u0275property("formControlName", "idSubEmpresa");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(19, 19, ctx.empresa$));
    \u0275\u0275advance(6);
    \u0275\u0275property("formControl", ctx.empleadoControl)("matAutocomplete", auto_r7);
    \u0275\u0275advance();
    \u0275\u0275property("displayWith", ctx.displayFn);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(28, 21, ctx.filteredEmpleados$));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx.data.length);
    \u0275\u0275advance(5);
    \u0275\u0275property("color", "primary");
    \u0275\u0275advance(3);
    \u0275\u0275property("color", "primary");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(23, _c0, ctx.data.length == 0, ctx.data.length > 0))("disabled", ctx.data.length == 0 || ctx.form.invalid);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx.data.length ? 43 : ctx.message ? 44 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx.subtotal ? 46 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.totalComision ? 47 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.totalPagar ? 48 : -1);
  }
}, dependencies: [
  AsyncPipe,
  CurrencyPipe,
  CustomTableComponent,
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
  \u0275NgNoValidate,
  DefaultValueAccessor,
  NgControlStatus,
  NgControlStatusGroup,
  FormControlDirective,
  FormGroupDirective,
  FormControlName,
  NgClass,
  CdkScrollable,
  MatAutocomplete,
  MatAutocompleteTrigger
] });
var FormPagoTrabajadorComponent = _FormPagoTrabajadorComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FormPagoTrabajadorComponent, { className: "FormPagoTrabajadorComponent", filePath: "src\\app\\pages\\gestion-cobros\\pago-trabajador\\form-pago-trabajador\\form-pago-trabajador.component.ts", lineNumber: 78 });
})();

// src/app/pages/gestion-cobros/pago-trabajador/form-view-pago-trabajador/form-view-pago-trabajador.component.ts
function FormViewPagoTrabajadorComponent_Conditional_0_ng_container_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 29);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 29);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 30);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "div", 21);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", item_r1.nombreCompleto, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", item_r1.numeroFactura, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(7, 3, item_r1.valorPago, "USD"), " ");
  }
}
function FormViewPagoTrabajadorComponent_Conditional_0_Conditional_57_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 29);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 32);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 33);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275element(9, "div", 21);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const abono_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 3, abono_r2.fechaCreacion, "dd/MM/yyyy"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", abono_r2.comprobante, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(8, 6, abono_r2.valor, "USD"), " ");
  }
}
function FormViewPagoTrabajadorComponent_Conditional_0_Conditional_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275text(1, " Abonos Realizados ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 19);
    \u0275\u0275text(3, " Fecha de abono ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 19);
    \u0275\u0275text(5, " Factura No ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 20);
    \u0275\u0275text(7, " Valor abonado ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "div", 21);
    \u0275\u0275template(9, FormViewPagoTrabajadorComponent_Conditional_0_Conditional_57_ng_container_9_Template, 10, 9, "ng-container", 22);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(9);
    \u0275\u0275property("ngForOf", ctx_r2.detalleFactura.abonosPagos);
  }
}
function FormViewPagoTrabajadorComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5);
    \u0275\u0275text(6, " N\xFAmero de pago ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 6);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 7)(10, "div", 8);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(12, "div", 9);
    \u0275\u0275elementStart(13, "div", 10);
    \u0275\u0275text(14, " Periodo inicial ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 11);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 10);
    \u0275\u0275text(19, " Periodo final ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 11);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 10);
    \u0275\u0275text(24, " Total ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 11);
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 10);
    \u0275\u0275text(29, " Estado ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 11);
    \u0275\u0275text(31);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div", 12)(33, "div", 13);
    \u0275\u0275element(34, "img", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "div", 15)(36, "div");
    \u0275\u0275text(37, "Calle 70B Cra 41 # 187");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "div");
    \u0275\u0275text(39, "Barranquilla - Atlantico");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "div");
    \u0275\u0275text(41, "+57 301 2523319");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "div");
    \u0275\u0275text(43, "info@crediplus.com.co");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "a", 16);
    \u0275\u0275text(45, "crediplus.com.co");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(46, "div", 17)(47, "div", 18);
    \u0275\u0275text(48, " Detalles de Pago ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "div", 19);
    \u0275\u0275text(50, " Nombre completo ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "div", 19);
    \u0275\u0275text(52, " Factura No ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "div", 20);
    \u0275\u0275text(54, " Valor ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(55, "div", 21);
    \u0275\u0275template(56, FormViewPagoTrabajadorComponent_Conditional_0_ng_container_56_Template, 9, 6, "ng-container", 22)(57, FormViewPagoTrabajadorComponent_Conditional_0_Conditional_57_Template, 10, 1);
    \u0275\u0275element(58, "div", 23);
    \u0275\u0275elementStart(59, "div", 24);
    \u0275\u0275text(60, " Observaciones ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "div", 25);
    \u0275\u0275text(62);
    \u0275\u0275elementEnd();
    \u0275\u0275element(63, "div", 26);
    \u0275\u0275elementStart(64, "div", 27);
    \u0275\u0275text(65, " Total a cobrar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "div", 28);
    \u0275\u0275text(67);
    \u0275\u0275pipe(68, "currency");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r2.detalleFactura.consecutivo);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Trabajador: ", ctx_r2.detalleFactura.nombreTrabajador, "");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(17, 10, ctx_r2.detalleFactura.fechaIncial, "dd/MM/yyyy"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(22, 13, ctx_r2.detalleFactura.fechaFinal, "dd/MM/yyyy"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(27, 16, ctx_r2.detalleFactura.total, "USD"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.detalleFactura.nombreEstadoCobro);
    \u0275\u0275advance(25);
    \u0275\u0275property("ngForOf", ctx_r2.detalleFactura.detallePagoTrabajador);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.detalleFactura.abonosPagos.length > 0 ? 57 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.detalleFactura.observacion);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(68, 19, ctx_r2.detalleFactura.total - ctx_r2.totalAbonos, "USD"), " ");
  }
}
var maskConfig4 = {
  validation: false
};
var _FormViewPagoTrabajadorComponent = class _FormViewPagoTrabajadorComponent {
  constructor() {
    this.fuseService = inject(FuseConfirmationService);
    this.currencyPipe = inject(CurrencyPipe);
    this.decimalPipe = inject(DecimalPipe);
    this.router = inject(Router);
    this.activatedRoute = inject(ActivatedRoute);
    this.datePipe = inject(DatePipe);
    this.pagoTrabajadorService = inject(PagoTrabajadoresService);
    this.totalAbonos = 0;
  }
  ngOnDestroy() {
  }
  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get("id");
    this.getPagoIndividual(id);
  }
  getPagoIndividual(id) {
    this.subcription$ = this.pagoTrabajadorService.getPagosTrabajadorIndividual(id).pipe(map((response) => {
      if (response.data.abonosPagos) {
        response.data.abonosPagos.forEach((items) => {
          this.totalAbonos += items.valor;
        });
        return response;
      }
    })).subscribe((response) => {
      if (response.data) {
        this.detalleFactura = response.data;
      }
    });
  }
};
_FormViewPagoTrabajadorComponent.\u0275fac = function FormViewPagoTrabajadorComponent_Factory(t) {
  return new (t || _FormViewPagoTrabajadorComponent)();
};
_FormViewPagoTrabajadorComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FormViewPagoTrabajadorComponent, selectors: [["app-form-view-pago-trabajador"]], standalone: true, features: [\u0275\u0275ProvidersFeature([
  { provide: DateAdapter, useClass: DateAdapterService },
  { provide: MAT_DATE_LOCALE, useValue: "en-GB" },
  DatePipe,
  CurrencyPipe,
  DecimalPipe,
  provideNgxMask(maskConfig4)
]), \u0275\u0275StandaloneFeature], decls: 1, vars: 1, consts: [["cdkScrollable", "", 1, "absolute", "inset-0", "min-w-0", "overflow-auto", "text-center", "print:overflow-visible"], [1, "inline-block", "p-6", "text-left", "sm:p-10", "print:p-0"], [1, "bg-card", "w-240", "rounded-2xl", "p-16", "shadow", "print:w-auto", "print:rounded-none", "print:bg-transparent", "print:shadow-none"], [1, "flex", "items-start", "justify-between"], [1, "grid", "grid-cols-2", "gap-x-4", "gap-y-1"], [1, "text-secondary", "text-2xl", "tracking-tight"], [1, "text-2xl"], [1, "text-md", "mt-6"], [1, "text-xl", "font-medium"], [1, "text-secondary", "font-medium", "tracking-tight", "col-span-2"], [1, "text-secondary", "font-medium", "tracking-tight"], [1, "font-medium"], [1, "dark", "-mr-16", "grid", "auto-cols-max", "grid-flow-col", "gap-x-8", "rounded-l-2xl", "bg-accent", "px-8", "py-6"], [1, "w-24", "place-self-center"], ["src", "images/logo/logo-blanco.svg", 1, "w-24"], [1, "border-l", "pl-10", "text-md"], ["target", "_blank", "href", "https://crediplus.com.co"], [1, "mt-12", "grid", "grid-cols-12", "gap-x-1"], [1, "col-span-12", "text-xl", "font-bold", "mb-4"], [1, "text-secondary", "col-span-4", "text-lg", "font-medium"], [1, "text-secondary", "col-span-4", "text-right", "text-lg", "font-medium"], [1, "col-span-12", "my-4", "border-b"], [4, "ngFor", "ngForOf"], [1, "col-span-12", "mt-16"], [1, "text-secondary", "col-span-2", "self-center", "font-medium", "tracking-tight"], [1, "col-span-10", "text-right", "text-lg"], [1, "col-span-12", "my-3", "border-b"], [1, "text-secondary", "col-span-10", "self-center", "text-2xl", "font-medium", "tracking-tight"], [1, "col-span-2", "text-right", "text-2xl", "font-medium"], [1, "col-span-4", "text-md", "tracking-tight"], [1, "col-span-4", "self-center", "text-right"], [1, "col-span-12", "text-xl", "font-bold", "mt-8", "mb-4"], [1, "col-span-4", "self-center", "tracking-tight"], [1, "col-span-4", "text-md", "text-right"]], template: function FormViewPagoTrabajadorComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, FormViewPagoTrabajadorComponent_Conditional_0_Template, 69, 22, "div", 0);
  }
  if (rf & 2) {
    \u0275\u0275conditional(ctx.detalleFactura ? 0 : -1);
  }
}, dependencies: [
  CdkScrollable,
  CurrencyPipe,
  DatePipe,
  NgForOf
] });
var FormViewPagoTrabajadorComponent = _FormViewPagoTrabajadorComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FormViewPagoTrabajadorComponent, { className: "FormViewPagoTrabajadorComponent", filePath: "src\\app\\pages\\gestion-cobros\\pago-trabajador\\form-view-pago-trabajador\\form-view-pago-trabajador.component.ts", lineNumber: 36 });
})();

// src/app/pages/gestion-cobros/pago-trabajador/pago-trabajador.routes.ts
var pago_trabajador_routes_default = [
  {
    path: "",
    component: GridPagoTrabajadorComponent
  },
  {
    path: "individual",
    component: FormPagoTrabajadorComponent
  },
  {
    path: "individual/:id",
    component: FormViewPagoTrabajadorComponent
  }
];
export {
  pago_trabajador_routes_default as default
};
//# sourceMappingURL=chunk-WTVIUKDW.js.map
