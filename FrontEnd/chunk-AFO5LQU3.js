import {
  CobrosFijosService
} from "./chunk-DNOYBJ5X.js";
import "./chunk-AGZF7KUE.js";
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
  CustomTableComponent
} from "./chunk-ZB3PSQQS.js";
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
  NgControlStatus,
  NgControlStatusGroup,
  NumberValueAccessor,
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
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-WGDVSMOG.js";
import {
  __spreadValues
} from "./chunk-AYDYM6RQ.js";

// src/app/pages/configuraciones/cobros-fijos/form-cobro-fijo/form-cobro-fijo.component.ts
var maskConfig = {
  validation: false
};
var _FormCobroFijoComponent = class _FormCobroFijoComponent {
  constructor() {
    this.fb = inject(FormBuilder);
    this.dialogRef = inject(MatDialogRef);
    this.fuseService = inject(FuseConfirmationService);
    this.estadosDatosService = inject(EstadosDatosService);
    this._matData = inject(MAT_DIALOG_DATA);
    this.swalService = inject(SwalService);
    this.destroyedRef = inject(DestroyRef);
    this.cobrosFijosService = inject(CobrosFijosService);
  }
  ngOnInit() {
    this.createForm();
    const dialogData = this._matData;
    if (dialogData.edit) {
      const data = dialogData.data;
      this.getCobro(data.id);
    }
  }
  onSave() {
    if (this.form.valid) {
      if (!this._matData.edit) {
        const data = this.form.getRawValue();
        const dialog = this.fuseService.open(__spreadValues({}, guardar));
        dialog.afterClosed().subscribe((response) => {
          if (response === "confirmed") {
            this.cobrosFijosService.postCobros(data).pipe(takeUntilDestroyed(this.destroyedRef)).subscribe((res) => {
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
        const dialog = this.fuseService.open(__spreadValues({}, guardar));
        dialog.afterClosed().subscribe((response) => {
          if (response === "confirmed") {
            this.cobrosFijosService.putCobros(data).pipe(takeUntilDestroyed(this.destroyedRef)).subscribe((res) => {
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
  getCobro(id) {
    this.cobrosFijosService.getCobro(id).subscribe((response) => {
      if (response) {
        const data = response.data;
        const campos = {
          periodo: data.periodo,
          valorAval: data.valorAval,
          valorFirmaElectronica: data.valorFirmaElectronica,
          valorTarjeta: data.valorTarjeta,
          id: data.id
        };
        this.form.patchValue(campos);
      }
    });
  }
  createForm() {
    this.form = this.fb.group({
      id: [null],
      valorAval: [""],
      valorFirmaElectronica: [""],
      valorTarjeta: [""],
      periodo: [""]
    });
  }
  closeDialog() {
    this.dialogRef.close();
  }
};
_FormCobroFijoComponent.\u0275fac = function FormCobroFijoComponent_Factory(t) {
  return new (t || _FormCobroFijoComponent)();
};
_FormCobroFijoComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FormCobroFijoComponent, selectors: [["app-form-cobro-fijo"]], standalone: true, features: [\u0275\u0275ProvidersFeature([
  { provide: DateAdapter, useClass: DateAdapterService },
  { provide: MAT_DATE_LOCALE, useValue: "en-GB" },
  DatePipe,
  provideNgxMask(maskConfig)
]), \u0275\u0275StandaloneFeature], decls: 31, vars: 8, consts: [[1, "w-full", "sm:bg-card", "sm:rounded-2xl", "sm:mx-0", "mx-auto"], [1, ""], [1, "mt-8", "text-3xl", "font-semibold", "leading-tight", "tracking-tight", "text-center"], [1, "mt-8", 3, "formGroup"], [1, "flex", "flex-col", "sm:flex-row", "gap-2.5"], ["floatLabel", "always", 1, "w-full"], ["matInput", "", "placeholder", "Valor de aval", "mask", "separator.0", "thousandSeparator", ".", 3, "formControlName"], ["matInput", "", "placeholder", "Valor firma electronica", "mask", "separator.0", "thousandSeparator", ".", 3, "formControlName"], ["matInput", "", "placeholder", "Valor de tarjeta", "mask", "separator.0", "thousandSeparator", ".", 3, "formControlName"], ["matInput", "", "placeholder", "Cantidad de d\xEDas", "type", "number", 3, "formControlName"], [1, "flex", "flex-wrap", "justify-end", "gap-2.5"], ["mat-flat-button", "", 1, "sm:w-auto", "w-full", "sm:mt-6", "bg-credigray-100", "rounded-lg", "transition", "duration-200", "text-white", "font-semibold", 3, "click", "color"], ["mat-flat-button", "", 1, "sm:w-auto", "w-full", "sm:mt-6", "bg-crediblue-50", "rounded-lg", "transition", "duration-200", "text-white", "font-semibold", 3, "click", "color"]], template: function FormCobroFijoComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "form", 3)(5, "div")(6, "div", 4)(7, "mat-form-field", 5)(8, "mat-label");
    \u0275\u0275text(9, "Valor de aval");
    \u0275\u0275elementEnd();
    \u0275\u0275element(10, "input", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "mat-form-field", 5)(12, "mat-label");
    \u0275\u0275text(13, "Valor firma electronica");
    \u0275\u0275elementEnd();
    \u0275\u0275element(14, "input", 7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 4)(16, "mat-form-field", 5)(17, "mat-label");
    \u0275\u0275text(18, "Valor de tarjeta");
    \u0275\u0275elementEnd();
    \u0275\u0275element(19, "input", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "mat-form-field", 5)(21, "mat-label");
    \u0275\u0275text(22, "Cantidad de d\xEDas");
    \u0275\u0275elementEnd();
    \u0275\u0275element(23, "input", 9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "div", 10)(25, "button", 11);
    \u0275\u0275listener("click", function FormCobroFijoComponent_Template_button_click_25_listener() {
      return ctx.closeDialog();
    });
    \u0275\u0275elementStart(26, "span");
    \u0275\u0275text(27, " Cancelar ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "button", 12);
    \u0275\u0275listener("click", function FormCobroFijoComponent_Template_button_click_28_listener() {
      return ctx.onSave();
    });
    \u0275\u0275elementStart(29, "span");
    \u0275\u0275text(30, " Guardar ");
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx._matData.edit ? "Actualizar cobro adicional" : "Agregar cobro adicional", " ");
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx.form);
    \u0275\u0275advance(6);
    \u0275\u0275property("formControlName", "valorAval");
    \u0275\u0275advance(4);
    \u0275\u0275property("formControlName", "valorFirmaElectronica");
    \u0275\u0275advance(5);
    \u0275\u0275property("formControlName", "valorTarjeta");
    \u0275\u0275advance(4);
    \u0275\u0275property("formControlName", "periodo");
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
  NgxMaskDirective,
  ReactiveFormsModule,
  \u0275NgNoValidate,
  DefaultValueAccessor,
  NumberValueAccessor,
  NgControlStatus,
  NgControlStatusGroup,
  FormGroupDirective,
  FormControlName
], styles: ["\n\n  .custom-dialog-container {\n  width: 100%;\n}\n@media (min-width: 1280px) {\n    .custom-dialog-container {\n    width: 50%;\n  }\n}\n/*# sourceMappingURL=form-cobro-fijo.component.css.map */"] });
var FormCobroFijoComponent = _FormCobroFijoComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FormCobroFijoComponent, { className: "FormCobroFijoComponent", filePath: "src\\app\\pages\\configuraciones\\cobros-fijos\\form-cobro-fijo\\form-cobro-fijo.component.ts", lineNumber: 51 });
})();

// src/app/pages/configuraciones/cobros-fijos/grid-cobro-fijo/grid-cobro-fijo.component.ts
var _GridCobroFijoComponent = class _GridCobroFijoComponent {
  constructor() {
    this.datePipe = inject(DatePipe);
    this.currencyPipe = inject(CurrencyPipe);
    this.searchTerm = "";
    this._matDialog = inject(MatDialog);
    this.estadoDatosService = inject(EstadosDatosService);
    this.cobrosFijosService = inject(CobrosFijosService);
    this.data = [];
    this.columns = ["Valor aval", "Valor firma electronica", "Valor tarjeta", "Periodo"];
    this.columnPropertyMap = {
      "Valor aval": "valorAval",
      "Valor firma electronica": "valorFirmaElectronica",
      "Valor tarjeta": "valorTarjeta",
      "Periodo": "periodo"
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
    this._matDialog.open(FormCobroFijoComponent, {
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
    this._matDialog.open(FormCobroFijoComponent, {
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
  listenGrid() {
    const refreshData$ = this.estadoDatosService.stateGrid.asObservable();
    refreshData$.subscribe((state) => {
      if (state) {
        this.getCobros();
      }
    });
  }
  onSearch(event) {
    const target = event.target;
    this.searchTerm = target.value.trim().toLowerCase();
  }
  getCobros() {
    this.subcription$ = this.cobrosFijosService.getCobros().pipe(map((response) => {
      response.data.forEach((items) => {
        items.valorAval = this.currencyPipe.transform(items.valorAval, "USD", "symbol", "1.2-2");
        items.valorFirmaElectronica = this.currencyPipe.transform(items.valorFirmaElectronica, "USD", "symbol", "1.2-2");
        items.valorTarjeta = this.currencyPipe.transform(items.valorTarjeta, "USD", "symbol", "1.2-2");
      });
      return response;
    })).subscribe((response) => {
      if (response.data) {
        this.data = response.data;
      }
    });
  }
  ngOnDestroy() {
    this.subcription$.unsubscribe();
  }
  ngOnInit() {
    this.listenGrid();
    this.getCobros();
  }
};
_GridCobroFijoComponent.\u0275fac = function GridCobroFijoComponent_Factory(t) {
  return new (t || _GridCobroFijoComponent)();
};
_GridCobroFijoComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GridCobroFijoComponent, selectors: [["app-grid-cobro-fijo"]], standalone: true, features: [\u0275\u0275ProvidersFeature([
  DatePipe,
  CurrencyPipe
]), \u0275\u0275StandaloneFeature], decls: 15, vars: 12, consts: [[1, "bg-card", "flex", "min-w-0", "flex-auto", "flex-col", "dark:bg-transparent", "sm:absolute", "sm:inset-0", "sm:overflow-hidden"], [1, "relative", "flex", "flex-0", "flex-col", "border-b", "px-6", "py-8", "sm:flex-row", "sm:items-center", "sm:justify-between", "md:px-8"], [1, "text-3xl", "font-semibold", "tracking-tight"], [1, "mt-6", "flex", "w-full", "shrink-0", "flex-col", "items-center", "sm:ml-4", "sm:mt-0", "sm:flex-row", "sm:space-x-2", "sm:w-auto"], [1, "fuse-mat-dense", "rounded-lg", "w-full", "sm:w-auto", "min-w-64", 3, "subscriptSizing"], ["matPrefix", "", 1, "icon-size-5", 3, "svgIcon"], ["matInput", "", 3, "input", "autocomplete", "placeholder"], ["mat-flat-button", "", 1, "mt-2", "w-full", "bg-crediblue-50", "rounded-lg", "transition", "duration-200", "text-white", "font-semibold", "sm:ml-4", "sm:mt-0", "sm:w-auto", 3, "click", "color"], [3, "svgIcon"], [1, "ml-2", "mr-1"], [1, "flex", "flex-auto", "overflow-hidden"], [1, "flex", "flex-auto", "flex-col", "overflow-hidden", "sm:mb-18", "sm:overflow-y-auto"], [3, "columns", "displayedColumns", "columnPropertyMap", "data", "buttons", "searchTerm"]], template: function GridCobroFijoComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
    \u0275\u0275text(3, "Parametros de Costos Adicionales");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 3)(5, "mat-form-field", 4);
    \u0275\u0275element(6, "mat-icon", 5);
    \u0275\u0275elementStart(7, "input", 6);
    \u0275\u0275listener("input", function GridCobroFijoComponent_Template_input_input_7_listener($event) {
      return ctx.onSearch($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "button", 7);
    \u0275\u0275listener("click", function GridCobroFijoComponent_Template_button_click_8_listener() {
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
var GridCobroFijoComponent = _GridCobroFijoComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GridCobroFijoComponent, { className: "GridCobroFijoComponent", filePath: "src\\app\\pages\\configuraciones\\cobros-fijos\\grid-cobro-fijo\\grid-cobro-fijo.component.ts", lineNumber: 32 });
})();

// src/app/pages/configuraciones/cobros-fijos/cobros-fijos.routing.ts
var cobros_fijos_routing_default = [
  {
    path: "",
    component: GridCobroFijoComponent
  }
];
export {
  cobros_fijos_routing_default as default
};
//# sourceMappingURL=chunk-AFO5LQU3.js.map
