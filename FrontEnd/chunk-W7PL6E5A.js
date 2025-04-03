import {
  CuentasBancariasService
} from "./chunk-RZQCSNVR.js";
import {
  BancosService
} from "./chunk-ZU5PKA56.js";
import {
  TipoCuentasService
} from "./chunk-HEWZPKYP.js";
import {
  provideNgxMask
} from "./chunk-MZRCXYW5.js";
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
  FormsModule,
  MatFormField,
  MatInput,
  MatLabel,
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
  AsyncPipe,
  MatButton,
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
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-WGDVSMOG.js";
import {
  __spreadValues
} from "./chunk-AYDYM6RQ.js";

// src/app/pages/gestion-bancos/cuentas-bancarias/form-cuentas/form-cuentas.component.ts
function FormCuentasComponent_ng_container_15_mat_option_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    \u0275\u0275property("value", item_r3.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r3.nombre);
  }
}
function FormCuentasComponent_ng_container_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, FormCuentasComponent_ng_container_15_mat_option_1_Template, 2, 2, "mat-option", 18);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const tipoCuentas_r4 = ctx.ngIf;
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", tipoCuentas_r4.data);
  }
}
function FormCuentasComponent_ng_container_21_mat_option_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    \u0275\u0275property("value", item_r5.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r5.nombre);
  }
}
function FormCuentasComponent_ng_container_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, FormCuentasComponent_ng_container_21_mat_option_1_Template, 2, 2, "mat-option", 18);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const bancos_r6 = ctx.ngIf;
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", bancos_r6.data);
  }
}
var maskConfig = {
  validation: false
};
var _FormCuentasComponent = class _FormCuentasComponent {
  constructor() {
    this.fb = inject(FormBuilder);
    this.dialogRef = inject(MatDialogRef);
    this.fuseService = inject(FuseConfirmationService);
    this.estadosDatosService = inject(EstadosDatosService);
    this.swalService = inject(SwalService);
    this.bancosService = inject(BancosService);
    this.cuentasBancariasService = inject(CuentasBancariasService);
    this.tipoCuentasService = inject(TipoCuentasService);
    this.tipoCuentas$ = this.tipoCuentasService.getTipoCuentas().pipe(tap((response) => {
      const valorSelected = response.data;
      const dialogData = this._matData;
      if (valorSelected && !dialogData.edit) {
        this.form.get("idTipoCuenta").setValue(valorSelected[0].id);
      }
    }));
    this._matData = inject(MAT_DIALOG_DATA);
    this.bancos$ = this.bancosService.getBancos().pipe(tap((response) => {
      const valorSelected = response.data;
      const dialogData = this._matData;
      if (valorSelected && !dialogData.edit) {
        this.form.get("idBanco").setValue(valorSelected[0].id);
      }
    }));
  }
  ngOnInit() {
    this.createForm();
    const dialogData = this._matData;
    if (dialogData.edit) {
      const data = dialogData.data;
      const id = data.id;
      this.getCuenta(id);
    }
  }
  getCuenta(id) {
    this.cuentasBancariasService.getCuenta(id).subscribe((response) => {
      if (response) {
        this.form.patchValue(response.data);
      }
    });
  }
  createForm() {
    this.form = this.fb.group({
      id: [null],
      idTipoCuenta: [""],
      idBanco: [""],
      numeroCuenta: [""],
      descripcion: [""],
      estado: [true]
    });
  }
  onSave() {
    if (this.form.valid) {
      if (!this._matData.edit) {
        const data = this.form.getRawValue();
        const dialog = this.fuseService.open(__spreadValues({}, guardar));
        dialog.afterClosed().subscribe((response) => {
          if (response === "confirmed") {
            this.cuentasBancariasService.postCuentas(data).subscribe((res) => {
              console.log(res);
              this.estadosDatosService.stateGrid.next(true);
              this.swalService.ToastAler({
                icon: "success",
                title: "Registro Creado con Exito.",
                timer: 4e3
              });
              this.closeDialog();
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
            this.cuentasBancariasService.putCuentas(data).subscribe((res) => {
              this.estadosDatosService.stateGrid.next(true);
              this.swalService.ToastAler({
                icon: "success",
                title: "Registro Creado o Actualizado con Exito.",
                timer: 4e3
              });
              this.closeDialog();
            });
          } else {
            this.closeDialog();
          }
        });
      }
    }
  }
  closeDialog() {
    this.dialogRef.close();
  }
};
_FormCuentasComponent.\u0275fac = function FormCuentasComponent_Factory(t) {
  return new (t || _FormCuentasComponent)();
};
_FormCuentasComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FormCuentasComponent, selectors: [["app-form-cuentas"]], standalone: true, features: [\u0275\u0275ProvidersFeature([
  provideNgxMask(maskConfig)
]), \u0275\u0275StandaloneFeature], decls: 38, vars: 17, consts: [["twoStepToggle", ""], [1, "sm:bg-card", "sm:rounded-2xl", "sm:mx-0", "mx-auto"], [1, ""], [1, "mt-8", "text-3xl", "font-semibold", "leading-tight", "tracking-tight", "text-center"], [1, "mt-8", 3, "formGroup"], [1, "flex", "mb-4"], [1, "fcursor-pointer", 3, "click"], [1, "font-medium", "leading-6"], [1, "ml-4", 3, "color", "formControlName"], ["floatLabel", "always", 1, "w-full"], ["placeholder", "Tipo de cuenta", 3, "formControlName"], [4, "ngIf"], ["placeholder", "Banco", 3, "formControlName"], ["matInput", "", "placeholder", "N\xFAmero de cuenta", 3, "formControlName"], ["matInput", "", "placeholder", "Detalle", 3, "formControlName"], [1, "flex", "flex-wrap", "justify-end", "gap-2.5"], ["mat-flat-button", "", 1, "sm:w-auto", "w-full", "sm:mt-6", "bg-credigray-100", "rounded-lg", "transition", "duration-200", "text-white", "font-semibold", 3, "click", "color"], ["mat-flat-button", "", 1, "sm:w-auto", "w-full", "sm:mt-6", "bg-crediblue-50", "rounded-lg", "transition", "duration-200", "text-white", "font-semibold", 3, "click", "color"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function FormCuentasComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "form", 4)(5, "div", 5)(6, "div", 6);
    \u0275\u0275listener("click", function FormCuentasComponent_Template_div_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      const twoStepToggle_r2 = \u0275\u0275reference(10);
      return \u0275\u0275resetView(twoStepToggle_r2.toggle());
    });
    \u0275\u0275elementStart(7, "div", 7);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(9, "mat-slide-toggle", 8, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "mat-form-field", 9)(12, "mat-label");
    \u0275\u0275text(13, "Tipo de cuenta");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "mat-select", 10);
    \u0275\u0275template(15, FormCuentasComponent_ng_container_15_Template, 2, 1, "ng-container", 11);
    \u0275\u0275pipe(16, "async");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "mat-form-field", 9)(18, "mat-label");
    \u0275\u0275text(19, "Banco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "mat-select", 12);
    \u0275\u0275template(21, FormCuentasComponent_ng_container_21_Template, 2, 1, "ng-container", 11);
    \u0275\u0275pipe(22, "async");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "mat-form-field", 9)(24, "mat-label");
    \u0275\u0275text(25, "N\xFAmero de cuenta");
    \u0275\u0275elementEnd();
    \u0275\u0275element(26, "input", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "mat-form-field", 9)(28, "mat-label");
    \u0275\u0275text(29, "Descripci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275element(30, "textarea", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 15)(32, "button", 16);
    \u0275\u0275listener("click", function FormCuentasComponent_Template_button_click_32_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.closeDialog());
    });
    \u0275\u0275elementStart(33, "span");
    \u0275\u0275text(34, " Cancelar ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "button", 17);
    \u0275\u0275listener("click", function FormCuentasComponent_Template_button_click_35_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.onSave());
    });
    \u0275\u0275elementStart(36, "span");
    \u0275\u0275text(37, " Guardar ");
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx._matData.edit ? "Actualizar cuenta" : "Agregar cuenta", " ");
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx.form);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" Estado ", ctx.form.get("estado").value ? "Activo" : "Inactivo", " ");
    \u0275\u0275advance();
    \u0275\u0275property("color", "primary")("formControlName", "estado");
    \u0275\u0275advance(5);
    \u0275\u0275property("formControlName", "idTipoCuenta");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(16, 13, ctx.tipoCuentas$));
    \u0275\u0275advance(5);
    \u0275\u0275property("formControlName", "idBanco");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(22, 15, ctx.bancos$));
    \u0275\u0275advance(5);
    \u0275\u0275property("formControlName", "numeroCuenta");
    \u0275\u0275advance(4);
    \u0275\u0275property("formControlName", "descripcion");
    \u0275\u0275advance(2);
    \u0275\u0275property("color", "primary");
    \u0275\u0275advance(3);
    \u0275\u0275property("color", "primary");
  }
}, dependencies: [
  FormsModule,
  \u0275NgNoValidate,
  DefaultValueAccessor,
  NgControlStatus,
  NgControlStatusGroup,
  MatButton,
  MatFormField,
  MatInput,
  MatLabel,
  ReactiveFormsModule,
  FormGroupDirective,
  FormControlName,
  MatOption,
  MatSelect,
  NgForOf,
  NgIf,
  AsyncPipe,
  MatSlideToggle
], styles: ["\n\n  .custom-dialog-container {\n  width: 80%;\n}\n@media (min-width: 1280px) {\n    .custom-dialog-container {\n    width: 40%;\n  }\n}\n/*# sourceMappingURL=form-cuentas.component.css.map */"] });
var FormCuentasComponent = _FormCuentasComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FormCuentasComponent, { className: "FormCuentasComponent", filePath: "src\\app\\pages\\gestion-bancos\\cuentas-bancarias\\form-cuentas\\form-cuentas.component.ts", lineNumber: 51 });
})();

// src/app/pages/gestion-bancos/cuentas-bancarias/grid-cuentas/grid-cuentas.component.ts
var _GridCuentasComponent = class _GridCuentasComponent {
  constructor(_matDialog, estadoDatosService, cuentasService) {
    this._matDialog = _matDialog;
    this.estadoDatosService = estadoDatosService;
    this.cuentasService = cuentasService;
    this.searchTerm = "";
    this.data = [];
    this.columns = ["N\xFAmero de cuenta", "Tipo de cuenta", "Banco", "Estado"];
    this.columnPropertyMap = {
      "N\xFAmero de cuenta": "numeroCuenta",
      "Tipo de cuenta": "nombreTipoCuenta",
      "Banco": "nombreBanco",
      "Estado": "estado"
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
    this._matDialog.open(FormCuentasComponent, {
      autoFocus: false,
      data: {
        edit: false
      },
      maxHeight: "90vh",
      maxWidth: "100%",
      disableClose: true,
      panelClass: "custom-dialog-container"
    });
  }
  onEdit() {
    this._matDialog.open(FormCuentasComponent, {
      autoFocus: false,
      data: {
        edit: true,
        data: this.selectedData
      },
      maxHeight: "90vh",
      maxWidth: "100%",
      disableClose: true,
      panelClass: "custom-dialog-container"
    });
  }
  getCuentas() {
    this.subcription$ = this.cuentasService.getCuentas().pipe(map((response) => {
      response.data.forEach((items) => {
        if (items.estado) {
          items.estado = Estados.ACTIVO;
          return items;
        } else {
          items.estado = Estados.INACTIVO;
          return items;
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
        this.getCuentas();
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
    this.getCuentas();
    this.listenGrid();
  }
};
_GridCuentasComponent.\u0275fac = function GridCuentasComponent_Factory(t) {
  return new (t || _GridCuentasComponent)(\u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(EstadosDatosService), \u0275\u0275directiveInject(CuentasBancariasService));
};
_GridCuentasComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GridCuentasComponent, selectors: [["app-grid-cuentas"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 15, vars: 12, consts: [[1, "bg-card", "flex", "min-w-0", "flex-auto", "flex-col", "dark:bg-transparent", "sm:absolute", "sm:inset-0", "sm:overflow-hidden"], [1, "relative", "flex", "flex-0", "flex-col", "border-b", "px-6", "py-8", "sm:flex-row", "sm:items-center", "sm:justify-between", "md:px-8"], [1, "text-3xl", "font-semibold", "tracking-tight"], [1, "mt-6", "flex", "w-full", "shrink-0", "flex-col", "items-center", "sm:ml-4", "sm:mt-0", "sm:flex-row", "sm:space-x-2", "sm:w-auto"], [1, "fuse-mat-dense", "rounded-lg", "w-full", "sm:w-auto", "min-w-64", 3, "subscriptSizing"], ["matPrefix", "", 1, "icon-size-5", 3, "svgIcon"], ["matInput", "", 3, "input", "autocomplete", "placeholder"], ["mat-flat-button", "", 1, "mt-2", "w-full", "bg-crediblue-50", "rounded-lg", "transition", "duration-200", "text-white", "font-semibold", "sm:ml-4", "sm:mt-0", "sm:w-auto", 3, "click", "color"], [3, "svgIcon"], [1, "ml-2", "mr-1"], [1, "flex", "flex-auto", "overflow-hidden"], [1, "flex", "flex-auto", "flex-col", "overflow-hidden", "sm:mb-18", "sm:overflow-y-auto"], [3, "columns", "displayedColumns", "columnPropertyMap", "data", "buttons", "searchTerm"]], template: function GridCuentasComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
    \u0275\u0275text(3, "Cuentas Bancarias");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 3)(5, "mat-form-field", 4);
    \u0275\u0275element(6, "mat-icon", 5);
    \u0275\u0275elementStart(7, "input", 6);
    \u0275\u0275listener("input", function GridCuentasComponent_Template_input_input_7_listener($event) {
      return ctx.onSearch($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "button", 7);
    \u0275\u0275listener("click", function GridCuentasComponent_Template_button_click_8_listener() {
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
var GridCuentasComponent = _GridCuentasComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GridCuentasComponent, { className: "GridCuentasComponent", filePath: "src\\app\\pages\\gestion-bancos\\cuentas-bancarias\\grid-cuentas\\grid-cuentas.component.ts", lineNumber: 29 });
})();

// src/app/pages/gestion-bancos/cuentas-bancarias/cuentas.routes.ts
var cuentas_routes_default = [
  {
    path: "",
    component: GridCuentasComponent
  }
];
export {
  cuentas_routes_default as default
};
//# sourceMappingURL=chunk-W7PL6E5A.js.map
