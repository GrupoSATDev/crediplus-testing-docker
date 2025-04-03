import {
  BancosService
} from "./chunk-ZU5PKA56.js";
import {
  Estados
} from "./chunk-NSUZEV35.js";
import {
  CustomTableComponent
} from "./chunk-ZB3PSQQS.js";
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
  __spreadProps,
  __spreadValues
} from "./chunk-AYDYM6RQ.js";

// src/app/pages/gestion-bancos/bancos/form-bancos/form-bancos.component.ts
var _FormBancosComponent = class _FormBancosComponent {
  constructor() {
    this.fb = inject(FormBuilder);
    this.dialogRef = inject(MatDialogRef);
    this.estadosDatosService = inject(EstadosDatosService);
    this._matData = inject(MAT_DIALOG_DATA);
    this.swalService = inject(SwalService);
    this.fuseService = inject(FuseConfirmationService);
    this.bancosService = inject(BancosService);
  }
  ngOnInit() {
    this.createForm();
    const dialogData = this._matData;
    if (dialogData.edit) {
      const _a = dialogData.data, { estado } = _a, form = __objRest(_a, ["estado"]);
      this.form.patchValue(__spreadProps(__spreadValues({}, form), {
        estado: estado == "Activo" ? true : false
      }));
    }
  }
  onSave() {
    if (this.form.valid) {
      if (!this._matData.edit) {
        const data = this.form.getRawValue();
        const dialog = this.fuseService.open(__spreadValues({}, guardar));
        dialog.afterClosed().subscribe((response) => {
          if (response === "confirmed") {
            this.bancosService.postBancos(data).subscribe((res) => {
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
            this.bancosService.putBancos(data).subscribe((res) => {
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
      nombre: [""],
      estado: [true]
    });
  }
  closeDialog() {
    this.dialogRef.close();
  }
};
_FormBancosComponent.\u0275fac = function FormBancosComponent_Factory(t) {
  return new (t || _FormBancosComponent)();
};
_FormBancosComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FormBancosComponent, selectors: [["app-form-bancos"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 22, vars: 8, consts: [["twoStepToggle", ""], [1, "w-full", "sm:bg-card", "sm:rounded-2xl", "sm:mx-0", "mx-auto"], [1, ""], [1, "mt-8", "text-3xl", "font-semibold", "leading-tight", "tracking-tight", "text-center"], [1, "mt-8", 3, "formGroup"], [1, "flex", "mb-4"], [1, "fcursor-pointer", 3, "click"], [1, "font-medium", "leading-6"], [1, "ml-4", 3, "color", "formControlName"], ["floatLabel", "always", 1, "w-full"], ["matInput", "", "placeholder", "Nombre", 3, "formControlName"], [1, "flex", "flex-wrap", "justify-end", "gap-2.5"], ["mat-flat-button", "", 1, "sm:w-auto", "w-full", "sm:mt-6", "bg-credigray-100", "rounded-lg", "transition", "duration-200", "text-white", "font-semibold", 3, "click", "color"], ["mat-flat-button", "", 1, "sm:w-auto", "w-full", "sm:mt-6", "bg-crediblue-50", "rounded-lg", "transition", "duration-200", "text-white", "font-semibold", 3, "click", "color"]], template: function FormBancosComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "form", 4)(5, "div", 5)(6, "div", 6);
    \u0275\u0275listener("click", function FormBancosComponent_Template_div_click_6_listener() {
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
    \u0275\u0275text(13, "Nombre");
    \u0275\u0275elementEnd();
    \u0275\u0275element(14, "input", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 11)(16, "button", 12);
    \u0275\u0275listener("click", function FormBancosComponent_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.closeDialog());
    });
    \u0275\u0275elementStart(17, "span");
    \u0275\u0275text(18, " Cancelar ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "button", 13);
    \u0275\u0275listener("click", function FormBancosComponent_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.onSave());
    });
    \u0275\u0275elementStart(20, "span");
    \u0275\u0275text(21, " Guardar ");
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx._matData.edit ? "Actualizar banco" : "Agregar banco", " ");
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx.form);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" Estado ", ctx.form.get("estado").value ? "Activo" : "Inactivo", " ");
    \u0275\u0275advance();
    \u0275\u0275property("color", "primary")("formControlName", "estado");
    \u0275\u0275advance(5);
    \u0275\u0275property("formControlName", "nombre");
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
  MatSlideToggle
] });
var FormBancosComponent = _FormBancosComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FormBancosComponent, { className: "FormBancosComponent", filePath: "src\\app\\pages\\gestion-bancos\\bancos\\form-bancos\\form-bancos.component.ts", lineNumber: 29 });
})();

// src/app/pages/gestion-bancos/bancos/grid-bancos/grid-bancos.component.ts
var _GridBancosComponent = class _GridBancosComponent {
  constructor(_matDialog, estadoDatosService) {
    this._matDialog = _matDialog;
    this.estadoDatosService = estadoDatosService;
    this.bancosService = inject(BancosService);
    this.searchTerm = "";
    this.data = [];
    this.columns = ["Estado", "Nombre"];
    this.columnPropertyMap = {
      "Estado": "estado",
      "Nombre": "nombre"
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
  ngOnDestroy() {
    this.subcription$.unsubscribe();
  }
  ngOnInit() {
    this.getBancos();
    this.listenGrid();
  }
  onNew() {
    this._matDialog.open(FormBancosComponent, {
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
    this._matDialog.open(FormBancosComponent, {
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
  getBancos() {
    this.subcription$ = this.bancosService.getBancos().pipe(map((response) => {
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
  onSearch(event) {
    const target = event.target;
    this.searchTerm = target.value.trim().toLowerCase();
  }
  listenGrid() {
    const refreshData$ = this.estadoDatosService.stateGrid.asObservable();
    refreshData$.subscribe((state) => {
      if (state) {
        this.getBancos();
      }
    });
  }
};
_GridBancosComponent.\u0275fac = function GridBancosComponent_Factory(t) {
  return new (t || _GridBancosComponent)(\u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(EstadosDatosService));
};
_GridBancosComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GridBancosComponent, selectors: [["app-grid-bancos"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 15, vars: 12, consts: [[1, "bg-card", "flex", "min-w-0", "flex-auto", "flex-col", "dark:bg-transparent", "sm:absolute", "sm:inset-0", "sm:overflow-hidden"], [1, "relative", "flex", "flex-0", "flex-col", "border-b", "px-6", "py-8", "sm:flex-row", "sm:items-center", "sm:justify-between", "md:px-8"], [1, "text-3xl", "font-semibold", "tracking-tight"], [1, "mt-6", "flex", "w-full", "shrink-0", "flex-col", "items-center", "sm:ml-4", "sm:mt-0", "sm:flex-row", "sm:space-x-2", "sm:w-auto"], [1, "fuse-mat-dense", "rounded-lg", "w-full", "sm:w-auto", "min-w-64", 3, "subscriptSizing"], ["matPrefix", "", 1, "icon-size-5", 3, "svgIcon"], ["matInput", "", 3, "input", "autocomplete", "placeholder"], ["mat-flat-button", "", 1, "mt-2", "w-full", "bg-crediblue-50", "rounded-lg", "transition", "duration-200", "text-white", "font-semibold", "sm:ml-4", "sm:mt-0", "sm:w-auto", 3, "click", "color"], [3, "svgIcon"], [1, "ml-2", "mr-1"], [1, "flex", "flex-auto", "overflow-hidden"], [1, "flex", "flex-auto", "flex-col", "overflow-hidden", "sm:mb-18", "sm:overflow-y-auto"], [3, "columns", "displayedColumns", "columnPropertyMap", "data", "buttons", "searchTerm"]], template: function GridBancosComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
    \u0275\u0275text(3, "Bancos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 3)(5, "mat-form-field", 4);
    \u0275\u0275element(6, "mat-icon", 5);
    \u0275\u0275elementStart(7, "input", 6);
    \u0275\u0275listener("input", function GridBancosComponent_Template_input_input_7_listener($event) {
      return ctx.onSearch($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "button", 7);
    \u0275\u0275listener("click", function GridBancosComponent_Template_button_click_8_listener() {
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
var GridBancosComponent = _GridBancosComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GridBancosComponent, { className: "GridBancosComponent", filePath: "src\\app\\pages\\gestion-bancos\\bancos\\grid-bancos\\grid-bancos.component.ts", lineNumber: 29 });
})();

// src/app/pages/gestion-bancos/bancos/bancos.routes.ts
var bancos_routes_default = [
  {
    path: "",
    component: GridBancosComponent
  }
];
export {
  bancos_routes_default as default
};
//# sourceMappingURL=chunk-7HX26WPK.js.map
