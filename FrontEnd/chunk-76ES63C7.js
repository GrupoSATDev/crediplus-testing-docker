import {
  TasasInteresService
} from "./chunk-SXSZR7T2.js";
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
  MatSlideToggle
} from "./chunk-ITBHXC67.js";
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
  DateAdapter,
  DatePipe,
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

// src/app/pages/configuraciones/tasas-intereses/form-tasas/form-tasas.component.ts
var maskConfig = {
  validation: false
};
var _FormTasasComponent = class _FormTasasComponent {
  constructor() {
    this.fb = inject(FormBuilder);
    this.dialogRef = inject(MatDialogRef);
    this.fuseService = inject(FuseConfirmationService);
    this.estadosDatosService = inject(EstadosDatosService);
    this.toasService = inject(ToastAlertsService);
    this._matData = inject(MAT_DIALOG_DATA);
    this.datePipe = inject(DatePipe);
    this.tasasService = inject(TasasInteresService);
    this.swalService = inject(SwalService);
  }
  ngOnInit() {
    this.createForm();
    const dialogData = this._matData;
    if (dialogData.edit) {
      const data = dialogData.data;
      const _a = data, { estado, vigencia } = _a, form = __objRest(_a, ["estado", "vigencia"]);
      const vigenciaConvert = new Date(vigencia);
      vigenciaConvert.setMinutes(vigenciaConvert.getMinutes() + vigenciaConvert.getTimezoneOffset());
      this.form.patchValue(__spreadValues({
        estado: estado == "Activo" ? true : false,
        vigencia: vigenciaConvert
      }, form));
      this.currentValuePorcentaje = __spreadValues({}, this.form.get("porcentaje"));
    }
  }
  onSave() {
    if (this.form.valid) {
      if (!this._matData.edit) {
        const data = this.form.getRawValue();
        const _a = data, { porcentaje, porcentajeMensual, porcentajeDiario, vigencia } = _a, form = __objRest(_a, ["porcentaje", "porcentajeMensual", "porcentajeDiario", "vigencia"]);
        let fecha = this.datePipe.transform(vigencia, "yyyy-MM-dd");
        const createData = __spreadValues({
          vigencia: fecha,
          porcentaje: parseFloat(porcentaje),
          porcentajeMensual: parseFloat(porcentajeMensual),
          porcentajeDiario: parseFloat(porcentajeDiario)
        }, form);
        const dialog = this.fuseService.open(__spreadValues({}, guardar));
        console.log(createData);
        dialog.afterClosed().subscribe((response) => {
          if (response === "confirmed") {
            this.tasasService.postTasas(createData).subscribe((res) => {
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
        const _b = data, { porcentaje, porcentajeMensual, porcentajeDiario, vigencia } = _b, form = __objRest(_b, ["porcentaje", "porcentajeMensual", "porcentajeDiario", "vigencia"]);
        let fecha = this.datePipe.transform(vigencia, "yyyy-MM-dd");
        const createData = __spreadValues({
          vigencia: fecha,
          porcentaje: parseFloat(porcentaje),
          porcentajeMensual: parseFloat(porcentajeMensual),
          porcentajeDiario: parseFloat(porcentajeDiario)
        }, form);
        const dialog = this.fuseService.open(__spreadValues({}, guardar));
        dialog.afterClosed().subscribe((response) => {
          if (response === "confirmed") {
            this.tasasService.putTasas(createData).subscribe((res) => {
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
  createForm() {
    this.form = this.fb.group({
      id: [null],
      porcentaje: [""],
      porcentajeMensual: [""],
      porcentajeDiario: [""],
      vigencia: [""],
      nombre: [""],
      estado: ["true"]
    });
  }
  closeDialog() {
    this.dialogRef.close();
  }
};
_FormTasasComponent.\u0275fac = function FormTasasComponent_Factory(t) {
  return new (t || _FormTasasComponent)();
};
_FormTasasComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FormTasasComponent, selectors: [["app-form-tasas"]], standalone: true, features: [\u0275\u0275ProvidersFeature([
  { provide: DateAdapter, useClass: DateAdapterService },
  { provide: MAT_DATE_LOCALE, useValue: "en-GB" },
  DatePipe,
  provideNgxMask(maskConfig)
]), \u0275\u0275StandaloneFeature], decls: 44, vars: 15, consts: [["twoStepToggle", ""], ["picker", ""], [1, "w-full", "sm:bg-card", "sm:rounded-2xl", "sm:mx-0", "mx-auto"], [1, ""], [1, "mt-8", "text-3xl", "font-semibold", "leading-tight", "tracking-tight", "text-center"], [1, "mt-8", 3, "formGroup"], [1, "flex", "mb-4"], [1, "fcursor-pointer", 3, "click"], [1, "font-medium", "leading-6"], [1, "ml-4", 3, "color", "formControlName"], [1, "flex", "flex-col", "lg:flex-row", "mb-4", "gap-2"], ["floatLabel", "always", 1, "w-full"], ["matInput", "", "placeholder", "Nombre", 3, "formControlName"], ["matInput", "", "placeholder", "Tasa efectiva anual", "mask", "separator.6", "thousandSeparator", "", "decimalMarker", ".", 3, "formControlName", "dropSpecialCharacters"], ["matInput", "", "placeholder", "Tasa efectiva mensual", "mask", "separator.6", "thousandSeparator", "", "decimalMarker", ".", 3, "formControlName", "dropSpecialCharacters"], ["matInput", "", "placeholder", "Tasa efectiva diaria", "mask", "separator.6", "thousandSeparator", "", "decimalMarker", ".", 3, "formControlName", "dropSpecialCharacters"], ["matInput", "", "placeholder", "DD/MM/YYYY", 3, "matDatepicker", "formControlName"], ["matIconSuffix", "", 3, "for"], [1, "flex", "flex-wrap", "justify-end", "gap-2.5"], ["mat-flat-button", "", 1, "sm:w-auto", "w-full", "sm:mt-6", "bg-credigray-100", "rounded-lg", "transition", "duration-200", "text-white", "font-semibold", 3, "click"], ["mat-flat-button", "", 1, "sm:w-auto", "w-full", "sm:mt-6", "bg-crediblue-50", "rounded-lg", "transition", "duration-200", "text-white", "font-semibold", 3, "click"]], template: function FormTasasComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "div", 4);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "form", 5)(5, "div", 6)(6, "div", 7);
    \u0275\u0275listener("click", function FormTasasComponent_Template_div_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      const twoStepToggle_r2 = \u0275\u0275reference(10);
      return \u0275\u0275resetView(twoStepToggle_r2.toggle());
    });
    \u0275\u0275elementStart(7, "div", 8);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(9, "mat-slide-toggle", 9, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 10)(12, "mat-form-field", 11)(13, "mat-label");
    \u0275\u0275text(14, "Nombre");
    \u0275\u0275elementEnd();
    \u0275\u0275element(15, "input", 12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 10)(17, "mat-form-field", 11)(18, "mat-label");
    \u0275\u0275text(19, "Tasa efectiva anual");
    \u0275\u0275elementEnd();
    \u0275\u0275element(20, "input", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "mat-form-field", 11)(22, "mat-label");
    \u0275\u0275text(23, "Tasa efectiva mensual");
    \u0275\u0275elementEnd();
    \u0275\u0275element(24, "input", 14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 10)(26, "mat-form-field", 11)(27, "mat-label");
    \u0275\u0275text(28, "Tasa efectiva diaria");
    \u0275\u0275elementEnd();
    \u0275\u0275element(29, "input", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "mat-form-field", 11)(31, "mat-label");
    \u0275\u0275text(32, "Vigencia");
    \u0275\u0275elementEnd();
    \u0275\u0275element(33, "input", 16)(34, "mat-datepicker-toggle", 17)(35, "mat-datepicker", null, 1);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "div", 18)(38, "button", 19);
    \u0275\u0275listener("click", function FormTasasComponent_Template_button_click_38_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.closeDialog());
    });
    \u0275\u0275elementStart(39, "span");
    \u0275\u0275text(40, " Cancelar ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "button", 20);
    \u0275\u0275listener("click", function FormTasasComponent_Template_button_click_41_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.onSave());
    });
    \u0275\u0275elementStart(42, "span");
    \u0275\u0275text(43, " Guardar ");
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const picker_r3 = \u0275\u0275reference(36);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx._matData.edit ? "Actualizar tasa" : "Agregar tasa", " ");
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx.form);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" Estado ", ctx.form.get("estado").value ? "Activo" : "Inactivo", " ");
    \u0275\u0275advance();
    \u0275\u0275property("color", "primary")("formControlName", "estado");
    \u0275\u0275advance(6);
    \u0275\u0275property("formControlName", "nombre");
    \u0275\u0275advance(5);
    \u0275\u0275property("formControlName", "porcentaje")("dropSpecialCharacters", true);
    \u0275\u0275advance(4);
    \u0275\u0275property("formControlName", "porcentajeMensual")("dropSpecialCharacters", true);
    \u0275\u0275advance(5);
    \u0275\u0275property("formControlName", "porcentajeDiario")("dropSpecialCharacters", true);
    \u0275\u0275advance(4);
    \u0275\u0275property("matDatepicker", picker_r3)("formControlName", "vigencia");
    \u0275\u0275advance();
    \u0275\u0275property("for", picker_r3);
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
  MatDatepicker,
  MatDatepickerInput,
  MatDatepickerToggle,
  MatSuffix,
  MatSlideToggle,
  NgxMaskDirective
], styles: ["\n\n  .custom-dialog-container {\n  width: 100%;\n}\n@media (min-width: 600px) {\n    .custom-dialog-container {\n    width: 60%;\n  }\n}\n@media (min-width: 1280px) {\n    .custom-dialog-container {\n    width: 50%;\n  }\n}\n/*# sourceMappingURL=form-tasas.component.css.map */"] });
var FormTasasComponent = _FormTasasComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FormTasasComponent, { className: "FormTasasComponent", filePath: "src\\app\\pages\\configuraciones\\tasas-intereses\\form-tasas\\form-tasas.component.ts", lineNumber: 48 });
})();

// src/app/pages/configuraciones/tasas-intereses/grid-tasas/grid-tasas.component.ts
var _GridTasasComponent = class _GridTasasComponent {
  constructor(_matDialog, estadoDatosService, tasasService) {
    this._matDialog = _matDialog;
    this.estadoDatosService = estadoDatosService;
    this.tasasService = tasasService;
    this.searchTerm = "";
    this.data = [];
    this.columns = ["Estado", "Nombre", "Porcentaje anual %", "Porcentaje mensual %", "Porcentaje diario %"];
    this.columnPropertyMap = {
      "Estado": "estado",
      "Nombre": "nombre",
      "Porcentaje anual %": "porcentaje",
      "Porcentaje mensual %": "porcentajeMensual",
      "Porcentaje diario %": "porcentajeDiario"
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
    this._matDialog.open(FormTasasComponent, {
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
    this._matDialog.open(FormTasasComponent, {
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
  getTasas() {
    this.subcription$ = this.tasasService.getTass().pipe(map((response) => {
      response.data.forEach((items) => {
        if (items.estado) {
          items.estado = Estados.ACTIVO;
        } else {
          items.estado = Estados.INACTIVO;
        }
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
        this.getTasas();
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
    this.getTasas();
    this.listenGrid();
  }
};
_GridTasasComponent.\u0275fac = function GridTasasComponent_Factory(t) {
  return new (t || _GridTasasComponent)(\u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(EstadosDatosService), \u0275\u0275directiveInject(TasasInteresService));
};
_GridTasasComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GridTasasComponent, selectors: [["app-grid-tasas"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 15, vars: 11, consts: [[1, "bg-card", "flex", "min-w-0", "flex-auto", "flex-col", "dark:bg-transparent", "sm:absolute", "sm:inset-0", "sm:overflow-hidden"], [1, "relative", "flex", "flex-0", "flex-col", "border-b", "px-6", "py-8", "sm:flex-row", "sm:items-center", "sm:justify-between", "md:px-8"], [1, "text-3xl", "font-semibold", "tracking-tight"], [1, "mt-6", "flex", "w-full", "shrink-0", "flex-col", "items-center", "sm:ml-4", "sm:mt-0", "sm:flex-row", "sm:space-x-2", "sm:w-auto"], [1, "fuse-mat-dense", "rounded-lg", "w-full", "sm:w-auto", "min-w-64", 3, "subscriptSizing"], ["matPrefix", "", 1, "icon-size-5", 3, "svgIcon"], ["matInput", "", 3, "input", "autocomplete", "placeholder"], ["mat-flat-button", "", 1, "mt-2", "w-full", "bg-crediblue-50", "rounded-lg", "transition", "duration-200", "text-white", "font-semibold", "sm:ml-4", "sm:mt-0", "sm:w-auto", 3, "click"], [3, "svgIcon"], [1, "ml-2", "mr-1"], [1, "flex", "flex-auto", "overflow-hidden"], [1, "flex", "flex-auto", "flex-col", "overflow-hidden", "sm:mb-18", "sm:overflow-y-auto"], [3, "columns", "displayedColumns", "columnPropertyMap", "data", "buttons", "searchTerm"]], template: function GridTasasComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
    \u0275\u0275text(3, "Tasas de inter\xE9s");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 3)(5, "mat-form-field", 4);
    \u0275\u0275element(6, "mat-icon", 5);
    \u0275\u0275elementStart(7, "input", 6);
    \u0275\u0275listener("input", function GridTasasComponent_Template_input_input_7_listener($event) {
      return ctx.onSearch($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "button", 7);
    \u0275\u0275listener("click", function GridTasasComponent_Template_button_click_8_listener() {
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
    \u0275\u0275advance(2);
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
var GridTasasComponent = _GridTasasComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GridTasasComponent, { className: "GridTasasComponent", filePath: "src\\app\\pages\\configuraciones\\tasas-intereses\\grid-tasas\\grid-tasas.component.ts", lineNumber: 29 });
})();

// src/app/pages/configuraciones/tasas-intereses/tasa-intereses.routes.ts
var tasa_intereses_routes_default = [
  {
    path: "",
    component: GridTasasComponent
  }
];
export {
  tasa_intereses_routes_default as default
};
//# sourceMappingURL=chunk-76ES63C7.js.map
