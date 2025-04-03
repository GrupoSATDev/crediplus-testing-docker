import {
  LocacionService
} from "./chunk-EP2TKH7N.js";
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
  MatButton,
  MatIcon,
  inject,
  map,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-WGDVSMOG.js";
import {
  __objRest,
  __spreadValues
} from "./chunk-AYDYM6RQ.js";

// src/app/pages/configuraciones/departamentos/form-departamentos/form-departamentos.component.ts
var _FormDepartamentosComponent = class _FormDepartamentosComponent {
  constructor() {
    this.fb = inject(FormBuilder);
    this._locacionService = inject(LocacionService);
    this.dialogRef = inject(MatDialogRef);
    this.fuseService = inject(FuseConfirmationService);
    this.estadosDatosService = inject(EstadosDatosService);
    this.toasService = inject(ToastAlertsService);
    this._matData = inject(MAT_DIALOG_DATA);
    this.swalService = inject(SwalService);
  }
  ngOnInit() {
    this.createForm();
    const dialogData = this._matData;
    if (dialogData.edit) {
      const data = dialogData.data;
      this.form.patchValue(data);
    }
  }
  onSave() {
    if (this.form.valid) {
      if (!this._matData.edit) {
        const data = this.form.getRawValue();
        const _a = data, { codigoDane } = _a, form = __objRest(_a, ["codigoDane"]);
        const createData = __spreadValues({
          codigoDane: Number(codigoDane)
        }, form);
        const dialog = this.fuseService.open(__spreadValues({}, guardar));
        dialog.afterClosed().subscribe((response) => {
          if (response === "confirmed") {
            this._locacionService.postDepartamento(createData).subscribe((res) => {
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
                title: "Ha ocurrido un problema al crear el registro!",
                timer: 4e3
              });
            });
          } else {
            this.closeDialog();
          }
        });
      } else {
        const data = this.form.getRawValue();
        const _b = data, { codigoDane } = _b, form = __objRest(_b, ["codigoDane"]);
        const createData = __spreadValues({
          codigoDane: Number(codigoDane)
        }, form);
        const dialog = this.fuseService.open(__spreadValues({}, guardar));
        dialog.afterClosed().subscribe((response) => {
          if (response === "confirmed") {
            this._locacionService.putDepartamento(createData).subscribe((res) => {
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
                title: "Ha ocurrido un problema al actualizar el registro!",
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
      codigoDane: [""],
      nombre: [""]
    });
  }
  closeDialog() {
    this.dialogRef.close();
  }
};
_FormDepartamentosComponent.\u0275fac = function FormDepartamentosComponent_Factory(t) {
  return new (t || _FormDepartamentosComponent)();
};
_FormDepartamentosComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FormDepartamentosComponent, selectors: [["app-form-departamentos"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 20, vars: 6, consts: [[1, "w-full", "sm:bg-card", "sm:rounded-2xl", "sm:mx-0", "mx-auto"], [1, ""], [1, "mt-8", "text-3xl", "font-semibold", "leading-tight", "tracking-tight", "text-center"], [1, "mt-8", 3, "formGroup"], ["floatLabel", "always", 1, "w-full"], ["matInput", "", "placeholder", "C\xF3digo del DANE", 3, "formControlName"], ["matInput", "", "placeholder", "Nombre", 3, "formControlName"], [1, "flex", "flex-wrap", "justify-end", "gap-2.5"], ["mat-flat-button", "", 1, "sm:w-auto", "w-full", "sm:mt-6", "bg-credigray-100", "rounded-lg", "transition", "duration-200", "text-white", "font-semibold", 3, "click", "color"], ["mat-flat-button", "", 1, "sm:w-auto", "w-full", "sm:mt-6", "bg-crediblue-50", "rounded-lg", "transition", "duration-200", "text-white", "font-semibold", 3, "click", "color"]], template: function FormDepartamentosComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "form", 3)(5, "mat-form-field", 4)(6, "mat-label");
    \u0275\u0275text(7, "C\xF3digo del DANE");
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "input", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "mat-form-field", 4)(10, "mat-label");
    \u0275\u0275text(11, "Nombre");
    \u0275\u0275elementEnd();
    \u0275\u0275element(12, "input", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 7)(14, "button", 8);
    \u0275\u0275listener("click", function FormDepartamentosComponent_Template_button_click_14_listener() {
      return ctx.closeDialog();
    });
    \u0275\u0275elementStart(15, "span");
    \u0275\u0275text(16, " Cancelar ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "button", 9);
    \u0275\u0275listener("click", function FormDepartamentosComponent_Template_button_click_17_listener() {
      return ctx.onSave();
    });
    \u0275\u0275elementStart(18, "span");
    \u0275\u0275text(19, " Guardar ");
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx._matData.edit ? "Actualizar departamento" : "Agregar departamento", " ");
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx.form);
    \u0275\u0275advance(4);
    \u0275\u0275property("formControlName", "codigoDane");
    \u0275\u0275advance(4);
    \u0275\u0275property("formControlName", "nombre");
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
  FormControlName
], styles: ["\n\n  .custom-dialog-container {\n  width: 100%;\n}\n@media (min-width: 600px) {\n    .custom-dialog-container {\n    width: 50%;\n  }\n}\n@media (min-width: 1280px) {\n    .custom-dialog-container {\n    width: 25%;\n  }\n}\n/*# sourceMappingURL=form-departamentos.component.css.map */"] });
var FormDepartamentosComponent = _FormDepartamentosComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FormDepartamentosComponent, { className: "FormDepartamentosComponent", filePath: "src\\app\\pages\\configuraciones\\departamentos\\form-departamentos\\form-departamentos.component.ts", lineNumber: 27 });
})();

// src/app/pages/configuraciones/departamentos/grid-departamentos/grid-departamentos.component.ts
var _GridDepartamentosComponent = class _GridDepartamentosComponent {
  constructor(_matDialog, estadoDatosService, locacionService) {
    this._matDialog = _matDialog;
    this.estadoDatosService = estadoDatosService;
    this.locacionService = locacionService;
    this.searchTerm = "";
    this.data = [];
    this.columns = ["Estado", "C\xF3digo DANE", "Nombre departamento"];
    this.columnPropertyMap = {
      "Estado": "estado",
      "Nombre departamento": "nombre",
      "C\xF3digo DANE": "codigoDane"
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
    this._matDialog.open(FormDepartamentosComponent, {
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
    this._matDialog.open(FormDepartamentosComponent, {
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
  getDepartamentos() {
    this.subcription$ = this.locacionService.getDepartamentos().pipe(map((response) => {
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
        this.getDepartamentos();
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
    this.getDepartamentos();
    this.listenGrid();
  }
};
_GridDepartamentosComponent.\u0275fac = function GridDepartamentosComponent_Factory(t) {
  return new (t || _GridDepartamentosComponent)(\u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(EstadosDatosService), \u0275\u0275directiveInject(LocacionService));
};
_GridDepartamentosComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GridDepartamentosComponent, selectors: [["app-grid-departamentos"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 15, vars: 12, consts: [[1, "bg-card", "flex", "min-w-0", "flex-auto", "flex-col", "dark:bg-transparent", "sm:absolute", "sm:inset-0", "sm:overflow-hidden"], [1, "relative", "flex", "flex-0", "flex-col", "border-b", "px-6", "py-8", "sm:flex-row", "sm:items-center", "sm:justify-between", "md:px-8"], [1, "text-3xl", "font-semibold", "tracking-tight"], [1, "mt-6", "flex", "w-full", "shrink-0", "flex-col", "items-center", "sm:ml-4", "sm:mt-0", "sm:flex-row", "sm:space-x-2", "sm:w-auto"], [1, "fuse-mat-dense", "rounded-lg", "w-full", "sm:w-auto", "min-w-64", 3, "subscriptSizing"], ["matPrefix", "", 1, "icon-size-5", 3, "svgIcon"], ["matInput", "", 3, "input", "autocomplete", "placeholder"], ["mat-flat-button", "", 1, "mt-2", "w-full", "bg-crediblue-50", "rounded-lg", "transition", "duration-200", "text-white", "font-semibold", "sm:ml-4", "sm:mt-0", "sm:w-auto", 3, "click", "color"], [3, "svgIcon"], [1, "ml-2", "mr-1"], [1, "flex", "flex-auto", "overflow-hidden"], [1, "flex", "flex-auto", "flex-col", "overflow-hidden", "sm:mb-18", "sm:overflow-y-auto"], [3, "columns", "displayedColumns", "columnPropertyMap", "data", "buttons", "searchTerm"]], template: function GridDepartamentosComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
    \u0275\u0275text(3, "Departamentos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 3)(5, "mat-form-field", 4);
    \u0275\u0275element(6, "mat-icon", 5);
    \u0275\u0275elementStart(7, "input", 6);
    \u0275\u0275listener("input", function GridDepartamentosComponent_Template_input_input_7_listener($event) {
      return ctx.onSearch($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "button", 7);
    \u0275\u0275listener("click", function GridDepartamentosComponent_Template_button_click_8_listener() {
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
var GridDepartamentosComponent = _GridDepartamentosComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GridDepartamentosComponent, { className: "GridDepartamentosComponent", filePath: "src\\app\\pages\\configuraciones\\departamentos\\grid-departamentos\\grid-departamentos.component.ts", lineNumber: 28 });
})();

// src/app/pages/configuraciones/departamentos/departamentos.routes.ts
var departamentos_routes_default = [
  {
    path: "",
    component: GridDepartamentosComponent
  }
];
export {
  departamentos_routes_default as default
};
//# sourceMappingURL=chunk-ESRUVUA5.js.map
