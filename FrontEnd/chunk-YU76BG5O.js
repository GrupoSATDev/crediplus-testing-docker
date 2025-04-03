import {
  EmpresasMaestrasService
} from "./chunk-UU3NN5UO.js";
import {
  NgxMaskDirective,
  provideNgxMask
} from "./chunk-MZRCXYW5.js";
import {
  LocacionService
} from "./chunk-EP2TKH7N.js";
import {
  CustomTableComponent
} from "./chunk-ZB3PSQQS.js";
import {
  ToastAlertsService
} from "./chunk-N5WAY7KO.js";
import {
  EstadosDatosService
} from "./chunk-5JAUKKTX.js";
import {
  MatSelect
} from "./chunk-CZDVBWDU.js";
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
  CommonModule,
  MatButton,
  MatIcon,
  MatOption,
  NgForOf,
  NgIf,
  inject,
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
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-WGDVSMOG.js";
import {
  __objRest,
  __spreadValues
} from "./chunk-AYDYM6RQ.js";

// src/app/pages/configuraciones/empresas-maestras/form-empresas/form-empresas.component.ts
function FormEmpresasComponent_ng_container_38_mat_option_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 22);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const departamento_r2 = ctx.$implicit;
    \u0275\u0275property("value", departamento_r2.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(departamento_r2.nombre);
  }
}
function FormEmpresasComponent_ng_container_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, FormEmpresasComponent_ng_container_38_mat_option_1_Template, 2, 2, "mat-option", 21);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const departamentos_r3 = ctx.ngIf;
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", departamentos_r3.data);
  }
}
function FormEmpresasComponent_ng_container_44_mat_option_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 22);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const municipio_r4 = ctx.$implicit;
    \u0275\u0275property("value", municipio_r4.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(municipio_r4.nombre);
  }
}
function FormEmpresasComponent_ng_container_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, FormEmpresasComponent_ng_container_44_mat_option_1_Template, 2, 2, "mat-option", 21);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const municipios_r5 = ctx.ngIf;
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", municipios_r5.data);
  }
}
var maskConfig = {
  validation: false
};
var _FormEmpresasComponent = class _FormEmpresasComponent {
  constructor() {
    this.fb = inject(FormBuilder);
    this._locacionService = inject(LocacionService);
    this.empresasService = inject(EmpresasMaestrasService);
    this.dialogRef = inject(MatDialogRef);
    this.fuseService = inject(FuseConfirmationService);
    this.estadosDatosService = inject(EstadosDatosService);
    this.toasService = inject(ToastAlertsService);
    this.departamentos$ = this._locacionService.getDepartamentos().pipe(tap((response) => {
      const valorSelected = response.data;
      const dialogData = this._matData;
      if (valorSelected && !dialogData.edit) {
        this.form.get("idDepartamento").setValue(valorSelected[0].id);
        const idDepto = this.form.get("idDepartamento").value;
        this.getMunicipios(idDepto);
      }
    }));
    this._matData = inject(MAT_DIALOG_DATA);
  }
  onSelected(matSelectChange) {
    const id = matSelectChange.value;
    this.getMunicipios(id);
  }
  getMunicipios(id) {
    this.municipios$ = this._locacionService.getMunicipio(id).pipe(tap((response) => {
      const valorSelected = response.data;
      const dialogData = this._matData;
      if (valorSelected && !dialogData.edit) {
        this.form.get("idMunicipio").setValue(valorSelected[0].id);
      }
    }));
  }
  ngOnInit() {
    this.createForm();
    const dialogData = this._matData;
    if (dialogData.edit) {
      const data = dialogData.data;
      this.form.patchValue(data);
      const { idDepartamento } = data;
      this.municipios$ = this._locacionService.getMunicipio(idDepartamento);
    }
  }
  createForm() {
    this.form = this.fb.group({
      id: [null],
      nit: [""],
      razonSocial: [""],
      correo: [""],
      telefono: [""],
      direccion: [""],
      idDepartamento: [""],
      idMunicipio: [""],
      procMaxPrestamo: [""],
      procMaxDesembolso: [""]
    });
  }
  onSave() {
    if (this.form.valid) {
      if (!this._matData.edit) {
        const data = this.form.getRawValue();
        const _a = data, { idDepartamento, procMaxPrestamo, procMaxDesembolso } = _a, form = __objRest(_a, ["idDepartamento", "procMaxPrestamo", "procMaxDesembolso"]);
        const createData = __spreadValues({
          procMaxPrestamo: Number(procMaxPrestamo),
          procMaxDesembolso: Number(procMaxDesembolso)
        }, form);
        const dialog = this.fuseService.open(__spreadValues({}, guardar));
        dialog.afterClosed().subscribe((response) => {
          if (response === "confirmed") {
            this.empresasService.postEmpresa(createData).subscribe((res) => {
              console.log(res);
              this.estadosDatosService.stateGrid.next(true);
              this.toasService.toasAlertWarn({
                message: "Registro Creado o Actualizado con Exito.",
                actionMessage: "Cerrar",
                duration: 3e3
              });
              this.closeDialog();
            });
          } else {
            this.closeDialog();
          }
        });
      } else {
        const data = this.form.getRawValue();
        const _b = data, { idDepartamento, procMaxPrestamo, procMaxDesembolso } = _b, form = __objRest(_b, ["idDepartamento", "procMaxPrestamo", "procMaxDesembolso"]);
        const createData = __spreadValues({
          procMaxPrestamo: Number(procMaxPrestamo),
          procMaxDesembolso: Number(procMaxDesembolso)
        }, form);
        const dialog = this.fuseService.open(__spreadValues({}, guardar));
        dialog.afterClosed().subscribe((response) => {
          if (response === "confirmed") {
            this.empresasService.putEmpresa(createData).subscribe((res) => {
              this.estadosDatosService.stateGrid.next(true);
              this.toasService.toasAlertWarn({
                message: "Registro actualizado con exito!",
                actionMessage: "Cerrar",
                duration: 3e3
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
_FormEmpresasComponent.\u0275fac = function FormEmpresasComponent_Factory(t) {
  return new (t || _FormEmpresasComponent)();
};
_FormEmpresasComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FormEmpresasComponent, selectors: [["app-form-empresas"]], standalone: true, features: [\u0275\u0275ProvidersFeature([
  provideNgxMask(maskConfig)
]), \u0275\u0275StandaloneFeature], decls: 58, vars: 26, consts: [["data", ""], [1, "w-full", "sm:bg-card", "sm:rounded-2xl", "sm:mx-0", "mx-auto"], [1, ""], [1, "mt-8", "text-3xl", "font-semibold", "leading-tight", "tracking-tight", "text-center"], [1, "mt-8", 3, "formGroup"], [1, "flex", "flex-col", "lg:flex-row", "mb-4", "gap-2"], ["floatLabel", "always", 1, "w-full"], ["id", "nit", "matInput", "", "placeholder", "Nit", 3, "formControlName"], ["matInput", "", "placeholder", "Raz\xF3n social", 3, "formControlName"], ["matInput", "", "placeholder", "Porcentaje maximo", "decimalMarker", ".", 3, "formControlName", "thousandSeparator", "dropSpecialCharacters", "mask"], ["matInput", "", "placeholder", "Porcentaje maximo desembolso", "decimalMarker", ".", 3, "formControlName", "thousandSeparator", "dropSpecialCharacters", "mask"], ["matInput", "", "placeholder", "Correo electronico", 3, "formControlName"], ["matInput", "", "placeholder", "Tel\xE9fono", 3, "formControlName"], ["placeholder", "Departamento", 3, "selectionChange", "formControlName"], [4, "ngIf"], ["placeholder", "Ciudad", 3, "formControlName"], [1, "flex", "flex-col", "sm:flex-row", "mb-4", "gap-2"], ["matInput", "", "placeholder", "Direcci\xF3n", 3, "formControlName"], [1, "flex", "flex-wrap", "justify-end", "gap-2.5"], ["mat-flat-button", "", 1, "lg:w-auto", "w-full", "lg:mt-6", "bg-credigray-100", "rounded-lg", "transition", "duration-200", "text-white", "font-semibold", 3, "click", "color"], ["mat-flat-button", "", 1, "lg:w-auto", "w-full", "lg:mt-6", "bg-crediblue-50", "rounded-lg", "transition", "duration-200", "text-white", "font-semibold", 3, "click", "color"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function FormEmpresasComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "form", 4)(5, "div", 5)(6, "mat-form-field", 6)(7, "mat-label");
    \u0275\u0275text(8, "Nit");
    \u0275\u0275elementEnd();
    \u0275\u0275element(9, "input", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "mat-form-field", 6)(11, "mat-label");
    \u0275\u0275text(12, "Raz\xF3n social");
    \u0275\u0275elementEnd();
    \u0275\u0275element(13, "input", 8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 5)(15, "mat-form-field", 6)(16, "mat-label");
    \u0275\u0275text(17, "Porcentaje maximo prestamo");
    \u0275\u0275elementEnd();
    \u0275\u0275element(18, "input", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "mat-form-field", 6)(20, "mat-label");
    \u0275\u0275text(21, "Porcentaje maximo desembolso");
    \u0275\u0275elementEnd();
    \u0275\u0275element(22, "input", 10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 5)(24, "mat-form-field", 6)(25, "mat-label");
    \u0275\u0275text(26, "Correo");
    \u0275\u0275elementEnd();
    \u0275\u0275element(27, "input", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "mat-form-field", 6)(29, "mat-label");
    \u0275\u0275text(30, "Tel\xE9fono");
    \u0275\u0275elementEnd();
    \u0275\u0275element(31, "input", 12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div", 5)(33, "mat-form-field", 6)(34, "mat-label");
    \u0275\u0275text(35, "Departamento");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "mat-select", 13, 0);
    \u0275\u0275listener("selectionChange", function FormEmpresasComponent_Template_mat_select_selectionChange_36_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.onSelected($event));
    });
    \u0275\u0275template(38, FormEmpresasComponent_ng_container_38_Template, 2, 1, "ng-container", 14);
    \u0275\u0275pipe(39, "async");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "mat-form-field", 6)(41, "mat-label");
    \u0275\u0275text(42, "Ciudad");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "mat-select", 15);
    \u0275\u0275template(44, FormEmpresasComponent_ng_container_44_Template, 2, 1, "ng-container", 14);
    \u0275\u0275pipe(45, "async");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(46, "div", 16)(47, "mat-form-field", 6)(48, "mat-label");
    \u0275\u0275text(49, "Direcci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275element(50, "input", 17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(51, "div", 18)(52, "button", 19);
    \u0275\u0275listener("click", function FormEmpresasComponent_Template_button_click_52_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.closeDialog());
    });
    \u0275\u0275elementStart(53, "span");
    \u0275\u0275text(54, " Cancelar ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(55, "button", 20);
    \u0275\u0275listener("click", function FormEmpresasComponent_Template_button_click_55_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.onSave());
    });
    \u0275\u0275elementStart(56, "span");
    \u0275\u0275text(57);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx._matData.edit ? "Actualizar empresa" : "Agregar empresa", " ");
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx.form);
    \u0275\u0275advance(5);
    \u0275\u0275property("formControlName", "nit");
    \u0275\u0275advance(4);
    \u0275\u0275property("formControlName", "razonSocial");
    \u0275\u0275advance(5);
    \u0275\u0275property("formControlName", "procMaxPrestamo")("thousandSeparator", "")("dropSpecialCharacters", true)("mask", "separator.6");
    \u0275\u0275advance(4);
    \u0275\u0275property("formControlName", "procMaxDesembolso")("thousandSeparator", "")("dropSpecialCharacters", true)("mask", "separator.6");
    \u0275\u0275advance(5);
    \u0275\u0275property("formControlName", "correo");
    \u0275\u0275advance(4);
    \u0275\u0275property("formControlName", "telefono");
    \u0275\u0275advance(5);
    \u0275\u0275property("formControlName", "idDepartamento");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(39, 22, ctx.departamentos$));
    \u0275\u0275advance(5);
    \u0275\u0275property("formControlName", "idMunicipio");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(45, 24, ctx.municipios$));
    \u0275\u0275advance(6);
    \u0275\u0275property("formControlName", "direccion");
    \u0275\u0275advance(2);
    \u0275\u0275property("color", "primary");
    \u0275\u0275advance(3);
    \u0275\u0275property("color", "primary");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx._matData.edit ? "Actualizar" : "Guardar", " ");
  }
}, dependencies: [
  MatFormField,
  MatInput,
  MatButton,
  MatLabel,
  MatSelect,
  MatOption,
  NgIf,
  AsyncPipe,
  NgForOf,
  ReactiveFormsModule,
  \u0275NgNoValidate,
  DefaultValueAccessor,
  NgControlStatus,
  NgControlStatusGroup,
  FormGroupDirective,
  FormControlName,
  NgxMaskDirective
], styles: ["\n\n  .custom-dialog-container {\n  width: 100%;\n}\n@media (min-width: 600px) {\n    .custom-dialog-container {\n    width: 60%;\n  }\n}\n@media (min-width: 1280px) {\n    .custom-dialog-container {\n    width: 50%;\n  }\n}\n/*# sourceMappingURL=form-empresas.component.css.map */"] });
var FormEmpresasComponent = _FormEmpresasComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FormEmpresasComponent, { className: "FormEmpresasComponent", filePath: "src\\app\\pages\\configuraciones\\empresas-maestras\\form-empresas\\form-empresas.component.ts", lineNumber: 46 });
})();

// src/app/pages/configuraciones/empresas-maestras/grid-empresas/grid-empresas.component.ts
var _GridEmpresasComponent = class _GridEmpresasComponent {
  constructor(_matDialog, empresasService, estadoDatosService) {
    this._matDialog = _matDialog;
    this.empresasService = empresasService;
    this.estadoDatosService = estadoDatosService;
    this.searchTerm = "";
    this.data = [];
    this.columns = ["Nit", "Razon social", "Correo", "Telefono", "Direccion"];
    this.columnPropertyMap = {
      "Nit": "nit",
      "Razon social": "razonSocial",
      "Correo": "correo",
      "Telefono": "telefono",
      "Direccion": "direccion"
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
      /*{
          label: 'Delete',
          icon: 'delete',
          action: (element) => {
              console.log('Deleting', element);
          }
      }*/
    ];
  }
  onNew() {
    this._matDialog.open(FormEmpresasComponent, {
      autoFocus: false,
      data: {
        edit: false
      },
      maxHeight: "90vh",
      width: "50%",
      disableClose: true,
      panelClass: "custom-dialog-container"
    });
  }
  onEdit() {
    this._matDialog.open(FormEmpresasComponent, {
      autoFocus: false,
      data: {
        edit: true,
        data: this.selectedData
      },
      maxHeight: "90vh",
      width: "50%",
      disableClose: true,
      panelClass: "custom-dialog-container"
    });
  }
  getEmpresas() {
    this.subcription$ = this.empresasService.getEmpresas().subscribe((response) => {
      this.data = response.data;
    });
  }
  ngOnInit() {
    this.getEmpresas();
    this.listenGrid();
  }
  listenGrid() {
    const refreshData$ = this.estadoDatosService.stateGrid.asObservable();
    refreshData$.subscribe((state) => {
      if (state) {
        this.getEmpresas();
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
  ngAfterViewInit() {
  }
};
_GridEmpresasComponent.\u0275fac = function GridEmpresasComponent_Factory(t) {
  return new (t || _GridEmpresasComponent)(\u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(EmpresasMaestrasService), \u0275\u0275directiveInject(EstadosDatosService));
};
_GridEmpresasComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GridEmpresasComponent, selectors: [["app-grid-empresas"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 15, vars: 12, consts: [[1, "bg-card", "flex", "min-w-0", "flex-auto", "flex-col", "dark:bg-transparent", "sm:absolute", "sm:inset-0", "sm:overflow-hidden"], [1, "relative", "flex", "flex-0", "flex-col", "border-b", "px-6", "py-8", "sm:flex-row", "sm:items-center", "sm:justify-between", "md:px-8"], [1, "text-3xl", "font-semibold", "tracking-tight"], [1, "mt-6", "flex", "w-full", "shrink-0", "flex-col", "items-center", "sm:ml-4", "sm:mt-0", "sm:flex-row", "sm:space-x-2", "sm:w-auto"], [1, "fuse-mat-dense", "rounded-lg", "w-full", "sm:w-auto", "min-w-64", 3, "subscriptSizing"], ["matPrefix", "", 1, "icon-size-5", 3, "svgIcon"], ["matInput", "", 3, "input", "autocomplete", "placeholder"], ["mat-flat-button", "", 1, "mt-2", "w-full", "bg-crediblue-50", "rounded-lg", "transition", "duration-200", "text-white", "font-semibold", "sm:ml-4", "sm:mt-0", "sm:w-auto", 3, "click", "color"], [3, "svgIcon"], [1, "ml-2", "mr-1"], [1, "flex", "flex-auto", "overflow-hidden"], [1, "flex", "flex-auto", "flex-col", "overflow-hidden", "sm:mb-18", "sm:overflow-y-auto"], [3, "columns", "displayedColumns", "columnPropertyMap", "data", "buttons", "searchTerm"]], template: function GridEmpresasComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
    \u0275\u0275text(3, "Empresas Maestras");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 3)(5, "mat-form-field", 4);
    \u0275\u0275element(6, "mat-icon", 5);
    \u0275\u0275elementStart(7, "input", 6);
    \u0275\u0275listener("input", function GridEmpresasComponent_Template_input_input_7_listener($event) {
      return ctx.onSearch($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "button", 7);
    \u0275\u0275listener("click", function GridEmpresasComponent_Template_button_click_8_listener() {
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
  CommonModule,
  MatFormField,
  MatIcon,
  MatButton,
  MatInput,
  CustomTableComponent
] });
var GridEmpresasComponent = _GridEmpresasComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GridEmpresasComponent, { className: "GridEmpresasComponent", filePath: "src\\app\\pages\\configuraciones\\empresas-maestras\\grid-empresas\\grid-empresas.component.ts", lineNumber: 32 });
})();

// src/app/pages/configuraciones/empresas-maestras/empresas-maestras.routes.ts
var empresas_maestras_routes_default = [
  {
    path: "",
    component: GridEmpresasComponent
  }
];
export {
  empresas_maestras_routes_default as default
};
//# sourceMappingURL=chunk-YU76BG5O.js.map
