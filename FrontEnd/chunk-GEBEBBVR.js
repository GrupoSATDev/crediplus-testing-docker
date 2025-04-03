import {
  CapitalInversionService
} from "./chunk-IDQETZVQ.js";
import {
  MatDatepicker,
  MatDatepickerInput,
  MatDatepickerToggle
} from "./chunk-AGZF7KUE.js";
import {
  takeUntilDestroyed
} from "./chunk-GTAQN4AQ.js";
import {
  DateAdapterService
} from "./chunk-K5K55XKD.js";
import {
  NgxMaskDirective,
  provideNgxMask
} from "./chunk-MZRCXYW5.js";
import {
  Estados
} from "./chunk-NSUZEV35.js";
import {
  CustomTableComponent
} from "./chunk-ZB3PSQQS.js";
import {
  ToastAlertsService
} from "./chunk-N5WAY7KO.js";
import {
  EstadosDatosService
} from "./chunk-5JAUKKTX.js";
import "./chunk-CZDVBWDU.js";
import {
  SwalService
} from "./chunk-WCR4YL2S.js";
import "./chunk-NACP6IOB.js";
import {
  FuseConfirmationService,
  guardar
} from "./chunk-HUKVMAZY.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  MatFormField,
  MatInput,
  MatLabel,
  MatSuffix,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  ɵNgNoValidate
} from "./chunk-IZMZQUCC.js";
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef
} from "./chunk-GRFMDZQD.js";
import "./chunk-74CJHXHU.js";
import "./chunk-ROMZC4L4.js";
import {
  CurrencyPipe,
  DateAdapter,
  DatePipe,
  DestroyRef,
  MAT_DATE_LOCALE,
  MatButton,
  MatIcon,
  inject,
  map,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-WGDVSMOG.js";
import {
  __objRest,
  __spreadValues
} from "./chunk-AYDYM6RQ.js";

// src/app/pages/configuraciones/capital-inversion/form-capital-inversion/form-capital-inversion.component.ts
var maskConfig = {
  validation: false
};
var _FormCapitalInversionComponent = class _FormCapitalInversionComponent {
  constructor() {
    this.fb = inject(FormBuilder);
    this.dialogRef = inject(MatDialogRef);
    this.fuseService = inject(FuseConfirmationService);
    this.estadosDatosService = inject(EstadosDatosService);
    this.toasService = inject(ToastAlertsService);
    this.capitalService = inject(CapitalInversionService);
    this._matData = inject(MAT_DIALOG_DATA);
    this.swalService = inject(SwalService);
    this.datePipe = inject(DatePipe);
    this.destroyedRef = inject(DestroyRef);
  }
  ngOnInit() {
    this.createForm();
    const dialogData = this._matData;
    if (dialogData.edit) {
      const data = dialogData.data;
      this.getCapital(data.id);
    }
  }
  onSave() {
    if (this.form.valid) {
      if (!this._matData.edit) {
        const data = this.form.getRawValue();
        const _a = data, { rubroInversion, plazoPagoInversor, tasaInteresInversor } = _a, form = __objRest(_a, ["rubroInversion", "plazoPagoInversor", "tasaInteresInversor"]);
        let plazoPagoInversorTransform = this.datePipe.transform(plazoPagoInversor, "yyyy-MM-dd");
        const createData = __spreadValues({
          rubroInversion: Number(rubroInversion),
          plazoPagoInversor: plazoPagoInversorTransform,
          tasaInteresInversor: parseFloat(tasaInteresInversor)
        }, form);
        const dialog = this.fuseService.open(__spreadValues({}, guardar));
        dialog.afterClosed().subscribe((response) => {
          if (response === "confirmed") {
            this.capitalService.postCapitales(createData).pipe(takeUntilDestroyed(this.destroyedRef)).subscribe((res) => {
              console.log(res);
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
          } else {
            this.closeDialog();
          }
        });
      } else {
        const data = this.form.getRawValue();
        const _b = data, { rubroInversion, plazoPagoInversor, tasaInteresInversor } = _b, form = __objRest(_b, ["rubroInversion", "plazoPagoInversor", "tasaInteresInversor"]);
        let plazoPagoInversorTransform = this.datePipe.transform(plazoPagoInversor, "yyyy-MM-dd");
        const createData = __spreadValues({
          rubroInversion: Number(rubroInversion),
          plazoPagoInversor: plazoPagoInversorTransform,
          tasaInteresInversor: parseFloat(tasaInteresInversor)
        }, form);
        const dialog = this.fuseService.open(__spreadValues({}, guardar));
        dialog.afterClosed().subscribe((response) => {
          if (response === "confirmed") {
            this.capitalService.putCapitales(createData).pipe(takeUntilDestroyed(this.destroyedRef)).subscribe((res) => {
              this.estadosDatosService.stateGrid.next(true);
              this.swalService.ToastAler({
                icon: "success",
                title: "Registro actualizado con exito!",
                timer: 4e3
              });
              this.closeDialog();
            }, (error) => {
              this.swalService.ToastAler({
                icon: "error",
                title: "Ha ocurrido un error al actualizar el registro!",
                timer: 4e3
              });
            });
          } else {
            this.closeDialog();
          }
        });
      }
    }
  }
  getCapital(id) {
    this.capitalService.getCapital(id).pipe(takeUntilDestroyed(this.destroyedRef)).subscribe((response) => {
      if (response) {
        const fechaConver = new Date(response.data.plazoPagoInversor);
        fechaConver.setMinutes(fechaConver.getMinutes() + fechaConver.getTimezoneOffset());
        const campos = {
          id: response.data.id,
          nombreInversor: response.data.nombreInversor,
          rubroInversion: response.data.rubroInversion,
          detalleInversion: response.data.detalleInversion,
          tasaInteresInversor: response.data.tasaInteresInversor,
          plazoPagoInversor: fechaConver
        };
        this.form.patchValue(campos);
        this.currentValuePorcentaje = __spreadValues({}, this.form.get("tasaInteresInversor"));
      }
    });
  }
  createForm() {
    this.form = this.fb.group({
      id: [null],
      nombreInversor: [""],
      rubroInversion: [""],
      detalleInversion: [""],
      tasaInteresInversor: [""],
      plazoPagoInversor: [""]
    });
  }
  closeDialog() {
    this.dialogRef.close();
  }
};
_FormCapitalInversionComponent.\u0275fac = function FormCapitalInversionComponent_Factory(t) {
  return new (t || _FormCapitalInversionComponent)();
};
_FormCapitalInversionComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FormCapitalInversionComponent, selectors: [["app-form-capital-inversion"]], standalone: true, features: [\u0275\u0275ProvidersFeature([
  { provide: DateAdapter, useClass: DateAdapterService },
  { provide: MAT_DATE_LOCALE, useValue: "en-GB" },
  DatePipe,
  provideNgxMask(maskConfig)
]), \u0275\u0275StandaloneFeature], decls: 41, vars: 15, consts: [["picker", ""], [1, "w-full", "sm:bg-card", "sm:rounded-2xl", "sm:mx-0", "mx-auto"], [1, ""], [1, "mt-8", "text-3xl", "font-semibold", "leading-tight", "tracking-tight", "text-center"], [1, "mt-8", 3, "formGroup"], [1, "font-bold", "mb-4", "text-2xl"], [1, "flex", "flex-col", "sm:flex-row", "gap-2.5"], ["floatLabel", "always", 1, "w-full"], ["matInput", "", "placeholder", "Inversor", 3, "formControlName"], ["matInput", "", "placeholder", "Valor", "thousandSeparator", ".", 3, "formControlName", "mask"], ["matInput", "", "placeholder", "Tasa de interes inversor", "decimalMarker", ".", 3, "formControlName", "thousandSeparator", "dropSpecialCharacters", "mask"], ["matInput", "", "placeholder", "Plazo de pago", 3, "matDatepicker", "formControlName"], ["matIconSuffix", "", 3, "for"], ["matInput", "", "placeholder", "Detalle inversi\xF3n", 3, "formControlName"], [1, "flex", "flex-wrap", "justify-end", "gap-2.5"], ["mat-flat-button", "", 1, "sm:w-auto", "w-full", "sm:mt-6", "bg-credigray-100", "rounded-lg", "transition", "duration-200", "text-white", "font-semibold", 3, "click", "color"], ["mat-flat-button", "", 1, "sm:w-auto", "w-full", "sm:mt-6", "bg-crediblue-50", "rounded-lg", "transition", "duration-200", "text-white", "font-semibold", 3, "click", "color"]], template: function FormCapitalInversionComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "form", 4)(5, "div")(6, "p", 5);
    \u0275\u0275text(7, "Informaci\xF3n de inversor");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 6)(9, "mat-form-field", 7)(10, "mat-label");
    \u0275\u0275text(11, "Inversor");
    \u0275\u0275elementEnd();
    \u0275\u0275element(12, "input", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "mat-form-field", 7)(14, "mat-label");
    \u0275\u0275text(15, "Rubro a invertir");
    \u0275\u0275elementEnd();
    \u0275\u0275element(16, "input", 9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 6)(18, "mat-form-field", 7)(19, "mat-label");
    \u0275\u0275text(20, "Tasa de interes inversor");
    \u0275\u0275elementEnd();
    \u0275\u0275element(21, "input", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "mat-form-field", 7)(23, "mat-label");
    \u0275\u0275text(24, "Plazo pago invesor");
    \u0275\u0275elementEnd();
    \u0275\u0275element(25, "input", 11)(26, "mat-datepicker-toggle", 12)(27, "mat-datepicker", null, 0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 6)(30, "mat-form-field", 7)(31, "mat-label");
    \u0275\u0275text(32, "Detalle de la inversi\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275element(33, "textarea", 13);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(34, "div", 14)(35, "button", 15);
    \u0275\u0275listener("click", function FormCapitalInversionComponent_Template_button_click_35_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.closeDialog());
    });
    \u0275\u0275elementStart(36, "span");
    \u0275\u0275text(37, " Cancelar ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "button", 16);
    \u0275\u0275listener("click", function FormCapitalInversionComponent_Template_button_click_38_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.onSave());
    });
    \u0275\u0275elementStart(39, "span");
    \u0275\u0275text(40, " Guardar ");
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const picker_r2 = \u0275\u0275reference(28);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx._matData.edit ? "Actualizar capital" : "Agregar capital", " ");
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx.form);
    \u0275\u0275advance(8);
    \u0275\u0275property("formControlName", "nombreInversor");
    \u0275\u0275advance(4);
    \u0275\u0275property("formControlName", "rubroInversion")("mask", "separator.0");
    \u0275\u0275advance(5);
    \u0275\u0275property("formControlName", "tasaInteresInversor")("thousandSeparator", "")("dropSpecialCharacters", true)("mask", "separator.6");
    \u0275\u0275advance(4);
    \u0275\u0275property("matDatepicker", picker_r2)("formControlName", "plazoPagoInversor");
    \u0275\u0275advance();
    \u0275\u0275property("for", picker_r2);
    \u0275\u0275advance(7);
    \u0275\u0275property("formControlName", "detalleInversion");
    \u0275\u0275advance(2);
    \u0275\u0275property("color", "primary");
    \u0275\u0275advance(3);
    \u0275\u0275property("color", "primary");
  }
}, dependencies: [
  MatButton,
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
  NgxMaskDirective,
  MatDatepicker,
  MatDatepickerInput,
  MatDatepickerToggle,
  MatSuffix
], styles: ["\n\n  .custom-dialog-container {\n  width: 100%;\n}\n@media (min-width: 1280px) {\n    .custom-dialog-container {\n    width: 50%;\n  }\n}\n/*# sourceMappingURL=form-capital-inversion.component.css.map */"] });
var FormCapitalInversionComponent = _FormCapitalInversionComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FormCapitalInversionComponent, { className: "FormCapitalInversionComponent", filePath: "src\\app\\pages\\configuraciones\\capital-inversion\\form-capital-inversion\\form-capital-inversion.component.ts", lineNumber: 47 });
})();

// src/app/pages/configuraciones/capital-inversion/grid-capital-inversion/grid-capital-inversion.component.ts
var _GridCapitalInversionComponent = class _GridCapitalInversionComponent {
  constructor(_matDialog, estadoDatosService, capitalService) {
    this._matDialog = _matDialog;
    this.estadoDatosService = estadoDatosService;
    this.capitalService = capitalService;
    this.datePipe = inject(DatePipe);
    this.currencyPipe = inject(CurrencyPipe);
    this.searchTerm = "";
    this.data = [];
    this.columns = ["Inversor", "Rubro invertido", "Rubro consumido", "Rubro disponible", "Fecha de retorno", "Detalle de inversi\xF3n"];
    this.columnPropertyMap = {
      "Inversor": "nombreInversor",
      "Rubro invertido": "rubroInversion",
      "Rubro consumido": "montoUtilizado",
      "Rubro disponible": "montoDisponible",
      "Fecha de retorno": "plazoPagoInversor",
      "Detalle de inversi\xF3n": "detalleInversion"
    };
    this.buttons = [
      {
        label: "Edici\xF3n",
        icon: "edit",
        action: (element) => {
          console.log("Editing", element);
          this.selectedData = element;
          this.onEdit();
        }
      }
    ];
  }
  onNew() {
    this._matDialog.open(FormCapitalInversionComponent, {
      autoFocus: false,
      data: {
        edit: false
      },
      maxHeight: "90vh",
      disableClose: true,
      panelClass: "custom-dialog-container"
    });
  }
  onEdit() {
    this._matDialog.open(FormCapitalInversionComponent, {
      autoFocus: false,
      data: {
        edit: true,
        data: this.selectedData
      },
      maxHeight: "90vh",
      disableClose: true,
      panelClass: "custom-dialog-container"
    });
  }
  getCapital() {
    this.subcription$ = this.capitalService.getCapitales().pipe(map((response) => {
      response.data.forEach((items) => {
        if (items.estado) {
          items.estado = Estados.ACTIVO;
          return items;
        }
      });
      return response;
    }), map((response) => {
      response.data.forEach((items) => {
        items.plazoPagoInversor = this.datePipe.transform(items.plazoPagoInversor, "dd/MM/yyyy");
        items.rubroInversion = this.currencyPipe.transform(items.rubroInversion, "USD", "symbol", "1.2-2");
        items.montoUtilizado = this.currencyPipe.transform(items.montoUtilizado, "USD", "symbol", "1.2-2");
        items.montoDisponible = this.currencyPipe.transform(items.montoDisponible, "USD", "symbol", "1.2-2");
      });
      return response;
    })).subscribe((response) => {
      this.data = response.data;
    });
  }
  listenGrid() {
    const refreshData$ = this.estadoDatosService.stateGrid.asObservable();
    refreshData$.subscribe((state) => {
      if (state) {
        this.getCapital();
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
    this.getCapital();
    this.listenGrid();
  }
};
_GridCapitalInversionComponent.\u0275fac = function GridCapitalInversionComponent_Factory(t) {
  return new (t || _GridCapitalInversionComponent)(\u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(EstadosDatosService), \u0275\u0275directiveInject(CapitalInversionService));
};
_GridCapitalInversionComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GridCapitalInversionComponent, selectors: [["app-grid-capital-inversion"]], standalone: true, features: [\u0275\u0275ProvidersFeature([
  DatePipe,
  CurrencyPipe
]), \u0275\u0275StandaloneFeature], decls: 15, vars: 12, consts: [[1, "bg-card", "flex", "min-w-0", "flex-auto", "flex-col", "dark:bg-transparent", "sm:absolute", "sm:inset-0", "sm:overflow-hidden"], [1, "relative", "flex", "flex-0", "flex-col", "border-b", "px-6", "py-8", "sm:flex-row", "sm:items-center", "sm:justify-between", "md:px-8"], [1, "text-3xl", "font-semibold", "tracking-tight"], [1, "mt-6", "flex", "w-full", "shrink-0", "flex-col", "items-center", "sm:ml-4", "sm:mt-0", "sm:flex-row", "sm:space-x-2", "sm:w-auto"], [1, "fuse-mat-dense", "rounded-lg", "w-full", "sm:w-auto", "min-w-64", 3, "subscriptSizing"], ["matPrefix", "", 1, "icon-size-5", 3, "svgIcon"], ["matInput", "", 3, "input", "autocomplete", "placeholder"], ["mat-flat-button", "", 1, "mt-2", "w-full", "bg-crediblue-50", "rounded-lg", "transition", "duration-200", "text-white", "font-semibold", "sm:ml-4", "sm:mt-0", "sm:w-auto", 3, "click", "color"], [3, "svgIcon"], [1, "ml-2", "mr-1"], [1, "flex", "flex-auto", "overflow-hidden"], [1, "flex", "flex-auto", "flex-col", "overflow-hidden", "sm:mb-18", "sm:overflow-y-auto"], [3, "columns", "displayedColumns", "columnPropertyMap", "data", "buttons", "searchTerm"]], template: function GridCapitalInversionComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
    \u0275\u0275text(3, "Capital de Inversi\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 3)(5, "mat-form-field", 4);
    \u0275\u0275element(6, "mat-icon", 5);
    \u0275\u0275elementStart(7, "input", 6);
    \u0275\u0275listener("input", function GridCapitalInversionComponent_Template_input_input_7_listener($event) {
      return ctx.onSearch($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "button", 7);
    \u0275\u0275listener("click", function GridCapitalInversionComponent_Template_button_click_8_listener() {
      return ctx.onNew();
    });
    \u0275\u0275element(9, "mat-icon", 8);
    \u0275\u0275elementStart(10, "span", 9);
    \u0275\u0275text(11, "Agregar");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(12, "div", 10)(13, "div", 11);
    \u0275\u0275element(14, "app-custom-table", 12);
    \u0275\u0275elementEnd()()();
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
    \u0275\u0275property("columns", ctx.columns)("displayedColumns", ctx.columns)("columnPropertyMap", ctx.columnPropertyMap)("data", ctx.data)("buttons", ctx.buttons)("searchTerm", ctx.searchTerm);
  }
}, dependencies: [
  CustomTableComponent,
  MatButton,
  MatFormField,
  MatIcon,
  MatInput
] });
var GridCapitalInversionComponent = _GridCapitalInversionComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GridCapitalInversionComponent, { className: "GridCapitalInversionComponent", filePath: "src\\app\\pages\\configuraciones\\capital-inversion\\grid-capital-inversion\\grid-capital-inversion.component.ts", lineNumber: 33 });
})();

// src/app/pages/configuraciones/capital-inversion/capital-inversion.routes.ts
var capital_inversion_routes_default = [
  {
    path: "",
    component: GridCapitalInversionComponent
  }
];
export {
  capital_inversion_routes_default as default
};
//# sourceMappingURL=chunk-GEBEBBVR.js.map
