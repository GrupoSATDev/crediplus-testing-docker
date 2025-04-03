import {
  utils,
  writeFileSync
} from "./chunk-VRN2SIHY.js";
import {
  MatTab,
  MatTabContent,
  MatTabGroup
} from "./chunk-6XMXDB2K.js";
import "./chunk-MZRCXYW5.js";
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
  exportar,
  guardar
} from "./chunk-HUKVMAZY.js";
import {
  DefaultValueAccessor,
  FormControl,
  FormControlDirective,
  FormsModule,
  MatError,
  MatFormField,
  MatInput,
  MatLabel,
  NgControlStatus,
  ReactiveFormsModule,
  Validators
} from "./chunk-IZMZQUCC.js";
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
import {
  AppSettingsService
} from "./chunk-ROMZC4L4.js";
import {
  CurrencyPipe,
  DatePipe,
  HttpClient,
  MatButton,
  MatIcon,
  NgClass,
  NgIf,
  inject,
  map,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
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
  ɵɵtextInterpolate2
} from "./chunk-WGDVSMOG.js";
import {
  __spreadValues
} from "./chunk-AYDYM6RQ.js";

// src/app/core/enums/estado-cobro-aliados.ts
var EstadoCobroAliados;
(function(EstadoCobroAliados2) {
  EstadoCobroAliados2["PENDIENTES"] = "e626ea69-e995-4462-be9a-705326114702";
  EstadoCobroAliados2["PAGADOS"] = "e626ea69-e995-4462-be9a-705326114791";
})(EstadoCobroAliados || (EstadoCobroAliados = {}));

// src/app/core/services/cobro-aliados.service.ts
var _CobroAliadosService = class _CobroAliadosService {
  constructor(_http, appSettings) {
    this._http = _http;
    this.appSettings = appSettings;
  }
  getCobroAliado(param) {
    return this._http.get(`${this.appSettings.cobroAliado.url.base}/Tabla/${param}`);
  }
  getCobroAliados(id) {
    return this._http.get(`${this.appSettings.cobroAliado.url.base}/${id}`);
  }
  putCobroAliado(data) {
    const id = data.id;
    delete data.id;
    return this._http.put(`${this.appSettings.cobroAliado.url.base}/${id}`, data);
  }
};
_CobroAliadosService.\u0275fac = function CobroAliadosService_Factory(t) {
  return new (t || _CobroAliadosService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(AppSettingsService));
};
_CobroAliadosService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CobroAliadosService, factory: _CobroAliadosService.\u0275fac, providedIn: "root" });
var CobroAliadosService = _CobroAliadosService;

// src/app/pages/gestion-cobros/cobro-aliados/dialog-cobro-aliado/dialog-cobro-aliado.component.ts
function DialogCobroAliadoComponent_mat_error_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "La observaci\xF3n es requerida!");
    \u0275\u0275elementEnd();
  }
}
var _DialogCobroAliadoComponent = class _DialogCobroAliadoComponent {
  constructor() {
    this.inputValue = new FormControl("", [Validators.required]);
    this._matData = inject(MAT_DIALOG_DATA);
    this.dialogRef = inject(MatDialogRef);
    this.router = inject(Router);
    this.swalService = inject(SwalService);
    this.fuseService = inject(FuseConfirmationService);
    this.cobroAliadoService = inject(CobroAliadosService);
    this.estadosDatosService = inject(EstadosDatosService);
  }
  onSave() {
    const inputData = this._matData.data;
    let data = {
      idEstadoCobroPago: EstadoCobroAliados.PAGADOS,
      observacion: this.inputValue.value,
      id: inputData.id
    };
    console.log(data);
    const dialog = this.fuseService.open(__spreadValues({}, guardar));
    dialog.afterClosed().subscribe((response) => {
      if (response === "confirmed") {
        this.cobroAliadoService.putCobroAliado(data).subscribe((response2) => {
          this.estadosDatosService.stateGrid.next(true);
          this.swalService.ToastAler({
            icon: "success",
            title: "Registro Creado o Actualizado con Exito.",
            timer: 4e3
          });
          this.closeDialog();
        }, (error) => {
          this.swalService.ToastAler({
            icon: "info",
            title: error.error.errorMenssages[0],
            timer: 6e3
          });
        });
      } else {
        this.closeDialog();
      }
    });
  }
  closeDialog() {
    this.dialogRef.close();
  }
  ngOnDestroy() {
  }
};
_DialogCobroAliadoComponent.\u0275fac = function DialogCobroAliadoComponent_Factory(t) {
  return new (t || _DialogCobroAliadoComponent)();
};
_DialogCobroAliadoComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DialogCobroAliadoComponent, selectors: [["app-dialog-cobro-aliado"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 20, vars: 7, consts: [[1, "relative", "flex", "h-full", "w-full", "flex-col"], [1, "flex", "flex-auto", "flex-col", "items-center", "pb-6", "sm:flex-row", "sm:items-start", "sm:pb-8"], [1, "flex", "h-10", "w-10", "flex-0", "items-center", "justify-center", "rounded-full", "sm:mr-4", "bg-blue-100", "text-blue-600", "dark:bg-blue-600", "dark:text-blue-50"], [3, "svgIcon"], [1, "flex", "flex-col", "items-center", "space-y-1", "text-center", "sm:mt-0", "sm:items-start", "sm:pr-8", "sm:text-left"], [1, "text-xl", "font-medium", "leading-6"], [1, "text-secondary"], [1, "mt-4", "flex", "flex-col", "items-center", "space-y-1", "text-center", "sm:mt-0", "sm:items-start", "sm:text-left"], ["floatLabel", "always", 1, "w-full"], ["matInput", "", "placeholder", "Observaciones", 3, "formControl"], [4, "ngIf"], [1, "flex", "items-center", "justify-center", "space-x-3", "bg-gray-50", "py-4", "dark:bg-black", "dark:bg-opacity-10", "sm:justify-end"], ["mat-stroked-button", "", 1, "fuse-mat-button-large", "bg-crediorange-100", "rounded-lg", "transition", "duration-200", "text-white", "font-semibold", 3, "matDialogClose"], ["mat-flat-button", "", 1, "fuse-mat-button-large", "bg-crediblue-50", "hover:bg-crediblue-100", "text-white", "font-semibold", "py-2", "px-4", "rounded-lg", "transition", "duration-200", 3, "click", "color", "matDialogClose", "disabled"]], template: function DialogCobroAliadoComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
    \u0275\u0275element(3, "mat-icon", 3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 4)(5, "div", 5);
    \u0275\u0275text(6, " Confirmacion ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 6);
    \u0275\u0275text(8, " \xBFEst\xE1s seguro que est\xE1 orden se encuentra pagada? ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 7)(10, "mat-form-field", 8)(11, "mat-label");
    \u0275\u0275text(12, "Observaciones");
    \u0275\u0275elementEnd();
    \u0275\u0275element(13, "textarea", 9);
    \u0275\u0275template(14, DialogCobroAliadoComponent_mat_error_14_Template, 2, 0, "mat-error", 10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 11)(16, "button", 12);
    \u0275\u0275text(17, " Cancelar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "button", 13);
    \u0275\u0275listener("click", function DialogCobroAliadoComponent_Template_button_click_18_listener() {
      return ctx.onSave();
    });
    \u0275\u0275text(19, " Confirmar ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275property("svgIcon", "heroicons_solid:question-mark-circle");
    \u0275\u0275advance(10);
    \u0275\u0275property("formControl", ctx.inputValue);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.inputValue.touched && ctx.inputValue.hasError("required"));
    \u0275\u0275advance(2);
    \u0275\u0275property("matDialogClose", "cancelled");
    \u0275\u0275advance(2);
    \u0275\u0275property("color", "primary")("matDialogClose", "confirmed")("disabled", ctx.inputValue.invalid);
  }
}, dependencies: [
  FormsModule,
  DefaultValueAccessor,
  NgControlStatus,
  MatButton,
  MatError,
  MatFormField,
  MatIcon,
  MatInput,
  MatLabel,
  NgIf,
  MatDialogClose,
  ReactiveFormsModule,
  FormControlDirective
] });
var DialogCobroAliadoComponent = _DialogCobroAliadoComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DialogCobroAliadoComponent, { className: "DialogCobroAliadoComponent", filePath: "src\\app\\pages\\gestion-cobros\\cobro-aliados\\dialog-cobro-aliado\\dialog-cobro-aliado.component.ts", lineNumber: 40 });
})();

// src/app/pages/gestion-cobros/cobro-aliados/grid-cobro-aliados/grid-cobro-aliados.component.ts
var _c0 = (a0, a1) => ({ "bg-green-700": a0, "bg-credigray-100": a1 });
function GridCobroAliadosComponent_ng_template_16_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "app-custom-table", 17);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("columns", ctx_r1.columns)("displayedColumns", ctx_r1.columns)("columnPropertyMap", ctx_r1.columnPropertyMap)("data", ctx_r1.data)("buttons", ctx_r1.buttons)("searchTerm", ctx_r1.searchTerm);
  }
}
function GridCobroAliadosComponent_ng_template_16_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "div", 19)(2, "fuse-alert", 20)(3, "span", 21);
    \u0275\u0275text(4, "Informaci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, " No hay cobros pendientes hasta el momento. ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275property("type", "info")("appearance", "outline");
  }
}
function GridCobroAliadosComponent_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, GridCobroAliadosComponent_ng_template_16_ng_container_0_Template, 2, 6, "ng-container", 16)(1, GridCobroAliadosComponent_ng_template_16_ng_template_1_Template, 6, 2, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const noData_r3 = \u0275\u0275reference(2);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngIf", ctx_r1.data.length)("ngIfElse", noData_r3);
  }
}
function GridCobroAliadosComponent_ng_template_18_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "app-custom-table", 17);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("columns", ctx_r1.columns)("displayedColumns", ctx_r1.columns)("columnPropertyMap", ctx_r1.columnPropertyMap)("data", ctx_r1.data)("buttons", ctx_r1.buttons)("searchTerm", ctx_r1.searchTerm);
  }
}
function GridCobroAliadosComponent_ng_template_18_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "div", 19)(2, "fuse-alert", 20)(3, "span", 21);
    \u0275\u0275text(4, "Informaci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, " No hay cobros pagados hasta el momento. ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275property("type", "info")("appearance", "outline");
  }
}
function GridCobroAliadosComponent_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, GridCobroAliadosComponent_ng_template_18_ng_container_0_Template, 2, 6, "ng-container", 16)(1, GridCobroAliadosComponent_ng_template_18_ng_template_1_Template, 6, 2, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const noData_r4 = \u0275\u0275reference(2);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngIf", ctx_r1.data.length)("ngIfElse", noData_r4);
  }
}
var _GridCobroAliadosComponent = class _GridCobroAliadosComponent {
  constructor() {
    this.datePipe = inject(DatePipe);
    this.router = inject(Router);
    this.selectedTab = EstadoCobroAliados.PENDIENTES;
    this.currencyPipe = inject(CurrencyPipe);
    this.cobroAliadoService = inject(CobroAliadosService);
    this.fuseService = inject(FuseConfirmationService);
    this.estadosDatosService = inject(EstadosDatosService);
    this.searchTerm = "";
    this._matDialog = inject(MatDialog);
    this.data = [];
    this.columns = ["Empresa", "Fecha inicial", "Total", "Estado"];
    this.columnPropertyMap = {
      "Empresa": "nombreSubEmpresa",
      "Fecha inicial": "fechaIncial",
      "Fecha final": "fechaFinal",
      "Total": "total",
      "Estado": "nombreEstadoCobro"
    };
    this.buttons = [
      {
        label: "View",
        icon: "visibility",
        action: (element) => {
          console.log("Editing", element);
          this.selectedData = element;
          this.router.navigate(["pages/gestion-cobros/cobro-aliado/factura", this.selectedData.id]);
        }
      },
      {
        label: "post_add",
        icon: "post_add",
        action: (element) => {
          console.log("Editing", element);
          this.onUpdateCobro(element);
        }
      }
    ];
    this.buttonsView = [
      {
        label: "View",
        icon: "visibility",
        action: (element) => {
          console.log("Editing", element);
          this.selectedData = element;
          this.router.navigate(["pages/gestion-cobros/cobro-aliado/factura", this.selectedData.id]);
        }
      }
    ];
    this.tabChanged = (tabChangeEvent) => {
      this.selectedTab = tabChangeEvent.index == 0 ? EstadoCobroAliados.PENDIENTES : EstadoCobroAliados.PAGADOS;
      this.getAliados(this.selectedTab);
    };
  }
  onUpdateCobro(data) {
    this._matDialog.open(DialogCobroAliadoComponent, {
      data: {
        data
      },
      width: "30%",
      disableClose: true
    });
  }
  onSearch(event) {
    const target = event.target;
    this.searchTerm = target.value.trim().toLowerCase();
  }
  getAliados(params) {
    this.subcription$ = this.cobroAliadoService.getCobroAliado(params).pipe(map((response) => {
      response.data.forEach((items) => {
        items.fechaCreacion = this.datePipe.transform(items.fechaCreacion, "dd/MM/yyyy");
        items.fechaIncial = this.datePipe.transform(items.fechaIncial, "dd/MM/yyyy");
        items.fechaFinal = this.datePipe.transform(items.fechaFinal, "dd/MM/yyyy");
        items.total = this.currencyPipe.transform(items.total, "USD", "symbol", "1.2-2");
      });
      return response;
    })).subscribe((response) => {
      if (response) {
        this.data = response.data;
      } else {
        this.data = [];
      }
    }, (error) => {
      this.data = [];
    });
  }
  exportToExcel(data) {
    const dialog = this.fuseService.open(__spreadValues({}, exportar));
    dialog.afterClosed().subscribe((response) => {
      if (response === "confirmed") {
        const worksheet = utils.json_to_sheet(data);
        const workbook = utils.book_new();
        utils.book_append_sheet(workbook, worksheet, "Sheet1");
        writeFileSync(workbook, "exported_data.xlsx");
      }
    });
  }
  listenGrid() {
    const refreshData$ = this.estadosDatosService.stateGrid.asObservable();
    refreshData$.subscribe((state) => {
      if (state) {
        this.getAliados(this.selectedTab);
      }
    });
  }
  ngOnDestroy() {
    this.subcription$.unsubscribe();
  }
  ngOnInit() {
    this.getAliados(this.selectedTab);
    this.listenGrid();
  }
};
_GridCobroAliadosComponent.\u0275fac = function GridCobroAliadosComponent_Factory(t) {
  return new (t || _GridCobroAliadosComponent)();
};
_GridCobroAliadosComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GridCobroAliadosComponent, selectors: [["app-grid-cobro-aliados"]], standalone: true, features: [\u0275\u0275ProvidersFeature([
  DatePipe,
  CurrencyPipe
]), \u0275\u0275StandaloneFeature], decls: 19, vars: 11, consts: [["tabGroup", ""], ["noData", ""], [1, "bg-card", "flex", "min-w-0", "flex-auto", "flex-col", "dark:bg-transparent", "sm:absolute", "sm:inset-0", "sm:overflow-hidden"], [1, "relative", "flex", "flex-0", "flex-col", "border-b", "px-6", "py-8", "sm:flex-row", "sm:items-center", "sm:justify-between", "md:px-8"], [1, "text-3xl", "font-semibold", "tracking-tight"], [1, "mt-6", "flex", "w-full", "shrink-0", "flex-col", "items-center", "sm:ml-4", "sm:mt-0", "sm:flex-row", "sm:space-x-2", "sm:w-auto"], [1, "fuse-mat-dense", "rounded-lg", "w-full", "sm:w-auto", "min-w-64", 3, "subscriptSizing"], ["matPrefix", "", 1, "icon-size-5", 3, "svgIcon"], ["matInput", "", 3, "input", "autocomplete", "placeholder"], ["mat-flat-button", "", 1, "sm:w-auto", "w-full", "sm:mt-0", "mt-2", "rounded-lg", "transition", "duration-200", "text-white", "font-semibold", 3, "click", "color", "ngClass", "disabled"], [1, "flex", "flex-auto", "overflow-hidden"], [1, "flex", "flex-auto", "flex-col", "overflow-hidden", "sm:mb-18", "sm:overflow-y-auto"], ["mat-stretch-tabs", "false", 1, "sm:px-2", 3, "selectedTabChange", "animationDuration"], ["label", "Pendientes por pagar"], ["matTabContent", ""], ["label", "Pagados"], [4, "ngIf", "ngIfElse"], [3, "columns", "displayedColumns", "columnPropertyMap", "data", "buttons", "searchTerm"], [1, "inset-0", "min-w-0", "overflow-auto", "print:overflow-visible"], [1, "inline-block", "p-4", "sm:p-2", "print:p-0", "w-full"], [3, "type", "appearance"], ["fuseAlertTitle", ""]], template: function GridCobroAliadosComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "div", 4);
    \u0275\u0275text(3, "Subscripciones");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 5)(5, "mat-form-field", 6);
    \u0275\u0275element(6, "mat-icon", 7);
    \u0275\u0275elementStart(7, "input", 8);
    \u0275\u0275listener("input", function GridCobroAliadosComponent_Template_input_input_7_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.onSearch($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "button", 9);
    \u0275\u0275listener("click", function GridCobroAliadosComponent_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.exportToExcel(ctx.data));
    });
    \u0275\u0275elementStart(9, "span");
    \u0275\u0275text(10, " Exportar ");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(11, "div", 10)(12, "div", 11)(13, "mat-tab-group", 12, 0);
    \u0275\u0275listener("selectedTabChange", function GridCobroAliadosComponent_Template_mat_tab_group_selectedTabChange_13_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.tabChanged($event));
    });
    \u0275\u0275elementStart(15, "mat-tab", 13);
    \u0275\u0275template(16, GridCobroAliadosComponent_ng_template_16_Template, 3, 2, "ng-template", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "mat-tab", 15);
    \u0275\u0275template(18, GridCobroAliadosComponent_ng_template_18_Template, 3, 2, "ng-template", 14);
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
    \u0275\u0275property("color", "primary")("ngClass", \u0275\u0275pureFunction2(8, _c0, ctx.data.length, !ctx.data.length))("disabled", !ctx.data.length);
    \u0275\u0275advance(5);
    \u0275\u0275property("animationDuration", "500");
  }
}, dependencies: [
  CustomTableComponent,
  MatFormField,
  MatIcon,
  MatInput,
  NgIf,
  MatTabGroup,
  FuseAlertComponent,
  MatTab,
  MatTabContent,
  MatButton,
  NgClass
] });
var GridCobroAliadosComponent = _GridCobroAliadosComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GridCobroAliadosComponent, { className: "GridCobroAliadosComponent", filePath: "src\\app\\pages\\gestion-cobros\\cobro-aliados\\grid-cobro-aliados\\grid-cobro-aliados.component.ts", lineNumber: 51 });
})();

// src/app/pages/gestion-cobros/cobro-aliados/cobro-aliado-factura/cobro-aliado-factura.component.ts
function CobroAliadoFacturaComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5);
    \u0275\u0275text(6, " Orden ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 6);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 7)(10, "div", 8);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 9);
    \u0275\u0275text(13, " Periodo cobrado ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 10);
    \u0275\u0275text(15, " Fecha inicial ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 11);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 10);
    \u0275\u0275text(20, " Fecha final ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 11);
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 10);
    \u0275\u0275text(25, " Tipo de subscripci\xF3n ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 11);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 10);
    \u0275\u0275text(29, " Total ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 11);
    \u0275\u0275text(31);
    \u0275\u0275pipe(32, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "div", 10);
    \u0275\u0275text(34, " Observaci\xF3nes ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "div", 11);
    \u0275\u0275text(36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "div", 10);
    \u0275\u0275text(38, " Estado ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "div", 11);
    \u0275\u0275text(40);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "div", 12)(42, "div", 13);
    \u0275\u0275element(43, "img", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "div", 15)(45, "div");
    \u0275\u0275text(46, "Calle 70B Cra 41 # 187");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "div");
    \u0275\u0275text(48, "Barranquilla - Atlantico");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "div");
    \u0275\u0275text(50, "+57 301 2523319");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "div");
    \u0275\u0275text(52, "info@crediplus.com.co");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "a", 16);
    \u0275\u0275text(54, "crediplus.com.co");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(55, "div", 17)(56, "div", 18);
    \u0275\u0275text(57, " Concepto ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "div", 19);
    \u0275\u0275text(59, " Total ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(60, "div", 20);
    \u0275\u0275elementStart(61, "div", 21);
    \u0275\u0275text(62);
    \u0275\u0275pipe(63, "date");
    \u0275\u0275pipe(64, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "div", 22);
    \u0275\u0275text(66);
    \u0275\u0275pipe(67, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275element(68, "div", 20)(69, "div", 23);
    \u0275\u0275elementStart(70, "div", 24);
    \u0275\u0275text(71, " Subtotal ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(72, "div", 25);
    \u0275\u0275text(73);
    \u0275\u0275pipe(74, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275element(75, "div", 26);
    \u0275\u0275elementStart(76, "div", 27);
    \u0275\u0275text(77, " Total a pagar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(78, "div", 28);
    \u0275\u0275text(79);
    \u0275\u0275pipe(80, "currency");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r0.detalleFactura.consecutivo);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Empresa: ", ctx_r0.detalleFactura.nombreSubEmpresa, "");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(18, 13, ctx_r0.detalleFactura.fechaIncial, "dd/MM/yyyy"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(23, 16, ctx_r0.detalleFactura.fechaFinal, "dd/MM/yyyy"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.detalleFactura.subscripcion);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(32, 19, ctx_r0.detalleFactura.total, "USD"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.detalleFactura.observacion);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.detalleFactura.nombreEstadoCobro);
    \u0275\u0275advance(22);
    \u0275\u0275textInterpolate2(" Subscripci\xF3n a plataforma CrediPlus durante el periodio ", \u0275\u0275pipeBind2(63, 22, ctx_r0.detalleFactura.fechaIncial, "dd/MM/yyyy"), " - ", \u0275\u0275pipeBind2(64, 25, ctx_r0.detalleFactura.fechaFinal, "dd/MM/yyyy"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(67, 28, ctx_r0.detalleFactura.detalleCobroAliados[0].valor, "USD"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(74, 31, ctx_r0.detalleFactura.total, "USD"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(80, 34, ctx_r0.detalleFactura.total, "USD"), " ");
  }
}
var _CobroAliadoFacturaComponent = class _CobroAliadoFacturaComponent {
  constructor() {
    this.cobroAliadoService = inject(CobroAliadosService);
    this.activatedRoute = inject(ActivatedRoute);
  }
  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get("id");
    this.getAliado(id);
  }
  getAliado(id) {
    this.subcription$ = this.cobroAliadoService.getCobroAliados(id).subscribe((response) => {
      if (response.data) {
        this.detalleFactura = response.data;
      }
    });
  }
};
_CobroAliadoFacturaComponent.\u0275fac = function CobroAliadoFacturaComponent_Factory(t) {
  return new (t || _CobroAliadoFacturaComponent)();
};
_CobroAliadoFacturaComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CobroAliadoFacturaComponent, selectors: [["app-cobro-aliado-factura"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 1, vars: 1, consts: [["cdkScrollable", "", 1, "absolute", "inset-0", "min-w-0", "overflow-auto", "text-center", "print:overflow-visible"], [1, "inline-block", "p-6", "text-left", "sm:p-10", "print:p-0"], [1, "bg-card", "w-240", "rounded-2xl", "p-16", "shadow", "print:w-auto", "print:rounded-none", "print:bg-transparent", "print:shadow-none"], [1, "flex", "items-start", "justify-between"], [1, "grid", "grid-cols-2", "gap-x-4", "gap-y-1"], [1, "text-secondary", "text-4xl", "tracking-tight"], [1, "text-4xl"], [1, "text-md", "mt-6"], [1, "text-xl", "font-medium"], [1, "text-secondary", "font-medium", "tracking-tight", "col-span-2"], [1, "text-secondary", "font-medium", "tracking-tight"], [1, "font-medium"], [1, "dark", "-mr-16", "grid", "auto-cols-max", "grid-flow-col", "gap-x-8", "rounded-l-2xl", "bg-accent", "px-8", "py-6"], [1, "w-24", "place-self-center"], ["src", "images/logo/logo-blanco.svg", 1, "w-24"], [1, "border-l", "pl-10", "text-md"], ["target", "_blank", "href", "https://crediplus.com.co"], [1, "mt-12", "grid", "grid-cols-12", "gap-x-1"], [1, "text-secondary", "col-span-8", "text-lg", "font-medium"], [1, "text-secondary", "col-span-4", "text-right", "text-lg", "font-medium"], [1, "col-span-12", "my-4", "border-b"], [1, "col-span-10", "text-md", "tracking-tight"], [1, "col-span-2", "self-center", "text-right"], [1, "col-span-12", "mt-16"], [1, "text-secondary", "col-span-10", "self-center", "font-medium", "tracking-tight"], [1, "col-span-2", "text-right", "text-lg"], [1, "col-span-12", "my-3", "border-b"], [1, "text-secondary", "col-span-10", "self-center", "text-2xl", "font-medium", "tracking-tight"], [1, "col-span-2", "text-right", "text-2xl", "font-medium"]], template: function CobroAliadoFacturaComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, CobroAliadoFacturaComponent_Conditional_0_Template, 81, 37, "div", 0);
  }
  if (rf & 2) {
    \u0275\u0275conditional(ctx.detalleFactura ? 0 : -1);
  }
}, dependencies: [
  CurrencyPipe,
  DatePipe,
  CdkScrollable
] });
var CobroAliadoFacturaComponent = _CobroAliadoFacturaComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CobroAliadoFacturaComponent, { className: "CobroAliadoFacturaComponent", filePath: "src\\app\\pages\\gestion-cobros\\cobro-aliados\\cobro-aliado-factura\\cobro-aliado-factura.component.ts", lineNumber: 19 });
})();

// src/app/pages/gestion-cobros/cobro-aliados/cobro-aliados.routes.ts
var cobro_aliados_routes_default = [
  {
    path: "",
    component: GridCobroAliadosComponent
  },
  {
    path: "factura/:id",
    component: CobroAliadoFacturaComponent
  }
];
export {
  cobro_aliados_routes_default as default
};
//# sourceMappingURL=chunk-RVNRSJYA.js.map
