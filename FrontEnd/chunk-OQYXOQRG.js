import {
  TiposDocumentosService
} from "./chunk-3HAPDTN7.js";
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
  __spreadValues
} from "./chunk-AYDYM6RQ.js";

// src/app/pages/configuraciones/tipos-documentos/form-tipos-documentos/form-tipos-documentos.component.ts
var _FormTiposDocumentosComponent = class _FormTiposDocumentosComponent {
  constructor() {
    this.fb = inject(FormBuilder);
    this.dialogRef = inject(MatDialogRef);
    this.fuseService = inject(FuseConfirmationService);
    this.toasService = inject(ToastAlertsService);
    this.estadosDatosService = inject(EstadosDatosService);
    this.tiposDocumentoService = inject(TiposDocumentosService);
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
        const dialog = this.fuseService.open(__spreadValues({}, guardar));
        dialog.afterClosed().subscribe((response) => {
          if (response === "confirmed") {
            this.tiposDocumentoService.postDocumentos(data).subscribe((res) => {
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
            this.tiposDocumentoService.putDocumentos(data).subscribe((res) => {
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
      codigo: [""],
      nombre: [""]
    });
  }
  closeDialog() {
    this.dialogRef.close();
  }
};
_FormTiposDocumentosComponent.\u0275fac = function FormTiposDocumentosComponent_Factory(t) {
  return new (t || _FormTiposDocumentosComponent)();
};
_FormTiposDocumentosComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FormTiposDocumentosComponent, selectors: [["app-form-tipos-documentos"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 20, vars: 6, consts: [[1, "w-full", "sm:bg-card", "sm:rounded-2xl", "sm:mx-0", "mx-auto"], [1, ""], [1, "mt-8", "text-3xl", "font-semibold", "leading-tight", "tracking-tight", "text-center"], [1, "mt-8", 3, "formGroup"], ["floatLabel", "always", 1, "w-full"], ["matInput", "", "placeholder", "Abreviaatura", 3, "formControlName"], ["matInput", "", "placeholder", "Tipo de documento", 3, "formControlName"], [1, "flex", "flex-wrap", "justify-end", "gap-2.5"], ["mat-raised-button", "", 1, "sm:w-auto", "w-full", "sm:mt-6", "bg-credigray-100", "rounded-lg", "transition", "duration-200", "text-white", "font-semibold", 3, "click", "color"], ["mat-raised-button", "", 1, "sm:w-auto", "w-full", "sm:mt-6", "bg-crediblue-50", "rounded-lg", "transition", "duration-200", "text-white", "font-semibold", 3, "click", "color"]], template: function FormTiposDocumentosComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "form", 3)(5, "mat-form-field", 4)(6, "mat-label");
    \u0275\u0275text(7, "Abreviaatura");
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "input", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "mat-form-field", 4)(10, "mat-label");
    \u0275\u0275text(11, "Tipo de documento");
    \u0275\u0275elementEnd();
    \u0275\u0275element(12, "input", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 7)(14, "button", 8);
    \u0275\u0275listener("click", function FormTiposDocumentosComponent_Template_button_click_14_listener() {
      return ctx.closeDialog();
    });
    \u0275\u0275elementStart(15, "span");
    \u0275\u0275text(16, " Cancelar ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "button", 9);
    \u0275\u0275listener("click", function FormTiposDocumentosComponent_Template_button_click_17_listener() {
      return ctx.onSave();
    });
    \u0275\u0275elementStart(18, "span");
    \u0275\u0275text(19, " Guardar ");
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx._matData.edit ? "Actualizar" : "Agregar", " ");
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx.form);
    \u0275\u0275advance(4);
    \u0275\u0275property("formControlName", "codigo");
    \u0275\u0275advance(4);
    \u0275\u0275property("formControlName", "nombre");
    \u0275\u0275advance(2);
    \u0275\u0275property("color", "primary");
    \u0275\u0275advance(3);
    \u0275\u0275property("color", "primary");
  }
}, dependencies: [
  ReactiveFormsModule,
  \u0275NgNoValidate,
  DefaultValueAccessor,
  NgControlStatus,
  NgControlStatusGroup,
  FormGroupDirective,
  FormControlName,
  MatFormField,
  MatInput,
  MatLabel,
  MatButton
], styles: ["\n\n  .custom-dialog-container {\n  width: 100%;\n}\n@media (min-width: 600px) {\n    .custom-dialog-container {\n    width: 50%;\n  }\n}\n@media (min-width: 1280px) {\n    .custom-dialog-container {\n    width: 25%;\n  }\n}\n/*# sourceMappingURL=form-tipos-documentos.component.css.map */"] });
var FormTiposDocumentosComponent = _FormTiposDocumentosComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FormTiposDocumentosComponent, { className: "FormTiposDocumentosComponent", filePath: "src\\app\\pages\\configuraciones\\tipos-documentos\\form-tipos-documentos\\form-tipos-documentos.component.ts", lineNumber: 27 });
})();

// src/app/pages/configuraciones/tipos-documentos/grid-tipos-documentos/grid-tipos-documentos.component.ts
var _GridTiposDocumentosComponent = class _GridTiposDocumentosComponent {
  constructor(_matDialog, estadoDatosService, tiposDocumentosServices) {
    this._matDialog = _matDialog;
    this.estadoDatosService = estadoDatosService;
    this.tiposDocumentosServices = tiposDocumentosServices;
    this.searchTerm = "";
    this.data = [];
    this.columns = ["Estado", "Abreviatura", "Tipo de documento"];
    this.columnPropertyMap = {
      "Estado": "estado",
      "Abreviatura": "codigo",
      "Tipo de documento": "nombre"
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
    this._matDialog.open(FormTiposDocumentosComponent, {
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
    this._matDialog.open(FormTiposDocumentosComponent, {
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
  getDocumentos() {
    this.subcription$ = this.tiposDocumentosServices.getTiposDocumentos().pipe(map((response) => {
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
        this.getDocumentos();
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
    this.getDocumentos();
    this.listenGrid();
  }
};
_GridTiposDocumentosComponent.\u0275fac = function GridTiposDocumentosComponent_Factory(t) {
  return new (t || _GridTiposDocumentosComponent)(\u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(EstadosDatosService), \u0275\u0275directiveInject(TiposDocumentosService));
};
_GridTiposDocumentosComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GridTiposDocumentosComponent, selectors: [["app-grid-tipos-documentos"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 15, vars: 12, consts: [[1, "bg-card", "flex", "min-w-0", "flex-auto", "flex-col", "dark:bg-transparent", "sm:absolute", "sm:inset-0", "sm:overflow-hidden"], [1, "relative", "flex", "flex-0", "flex-col", "border-b", "px-6", "py-8", "sm:flex-row", "sm:items-center", "sm:justify-between", "md:px-8"], [1, "text-3xl", "font-semibold", "tracking-tight"], [1, "mt-6", "flex", "w-full", "shrink-0", "flex-col", "items-center", "sm:ml-4", "sm:mt-0", "sm:flex-row", "sm:space-x-2", "sm:w-auto"], [1, "fuse-mat-dense", "rounded-lg", "w-full", "sm:w-auto", "min-w-64", 3, "subscriptSizing"], ["matPrefix", "", 1, "icon-size-5", 3, "svgIcon"], ["matInput", "", 3, "input", "autocomplete", "placeholder"], ["mat-flat-button", "", 1, "mt-2", "w-full", "bg-crediblue-50", "rounded-lg", "transition", "duration-200", "text-white", "font-semibold", "sm:ml-4", "sm:mt-0", "sm:w-auto", 3, "click", "color"], [3, "svgIcon"], [1, "ml-2", "mr-1"], [1, "flex", "flex-auto", "overflow-hidden"], [1, "flex", "flex-auto", "flex-col", "overflow-hidden", "sm:mb-18", "sm:overflow-y-auto"], [3, "columns", "displayedColumns", "columnPropertyMap", "data", "buttons", "searchTerm"]], template: function GridTiposDocumentosComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
    \u0275\u0275text(3, "Tipos de Documentos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 3)(5, "mat-form-field", 4);
    \u0275\u0275element(6, "mat-icon", 5);
    \u0275\u0275elementStart(7, "input", 6);
    \u0275\u0275listener("input", function GridTiposDocumentosComponent_Template_input_input_7_listener($event) {
      return ctx.onSearch($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "button", 7);
    \u0275\u0275listener("click", function GridTiposDocumentosComponent_Template_button_click_8_listener() {
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
var GridTiposDocumentosComponent = _GridTiposDocumentosComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GridTiposDocumentosComponent, { className: "GridTiposDocumentosComponent", filePath: "src\\app\\pages\\configuraciones\\tipos-documentos\\grid-tipos-documentos\\grid-tipos-documentos.component.ts", lineNumber: 28 });
})();

// src/app/pages/configuraciones/tipos-documentos/tipos-documentos.routes.ts
var tipos_documentos_routes_default = [
  {
    path: "",
    component: GridTiposDocumentosComponent
  }
];
export {
  tipos_documentos_routes_default as default
};
//# sourceMappingURL=chunk-OQYXOQRG.js.map
