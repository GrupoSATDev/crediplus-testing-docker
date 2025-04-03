import {
  DetalleConsumoService
} from "./chunk-S23R3MHA.js";
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
  FormControlName,
  FormGroupDirective,
  FormsModule,
  MatFormField,
  MatInput,
  MatLabel,
  MatSuffix,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-IZMZQUCC.js";
import {
  ActivatedRoute,
  Router
} from "./chunk-L2WXMDPA.js";
import {
  MatDialog
} from "./chunk-GRFMDZQD.js";
import "./chunk-74CJHXHU.js";
import {
  FuseAlertComponent
} from "./chunk-YZGIFTGF.js";
import "./chunk-G7E77ZCS.js";
import {
  AppSettingsService
} from "./chunk-ROMZC4L4.js";
import {
  AsyncPipe,
  CurrencyPipe,
  DateAdapter,
  DatePipe,
  DecimalPipe,
  HttpClient,
  MAT_DATE_LOCALE,
  MatButton,
  MatIcon,
  MatOption,
  NgClass,
  NgForOf,
  NgIf,
  inject,
  map,
  tap,
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
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction2,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-WGDVSMOG.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-AYDYM6RQ.js";

// src/app/core/services/pago-aliados.service.ts
var _PagoAliadosService = class _PagoAliadosService {
  constructor(_http, appSettings) {
    this._http = _http;
    this.appSettings = appSettings;
  }
  getAliados() {
    return this._http.get(`${this.appSettings.pagoAliados.url.base}/Tabla`);
  }
  postAliados(data) {
    return this._http.post(this.appSettings.pagoAliados.url.base, data);
  }
  getAliado(id) {
    return this._http.get(`${this.appSettings.pagoAliados.url.base}/${id}`);
  }
};
_PagoAliadosService.\u0275fac = function PagoAliadosService_Factory(t) {
  return new (t || _PagoAliadosService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(AppSettingsService));
};
_PagoAliadosService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PagoAliadosService, factory: _PagoAliadosService.\u0275fac, providedIn: "root" });
var PagoAliadosService = _PagoAliadosService;

// src/app/pages/gestion-cobros/pago-aliados/grid-aliados/grid-aliados.component.ts
function GridAliadosComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "div", 12);
    \u0275\u0275element(2, "app-custom-table", 13);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("columns", ctx_r0.columns)("displayedColumns", ctx_r0.columns)("columnPropertyMap", ctx_r0.columnPropertyMap)("data", ctx_r0.data)("buttons", ctx_r0.buttons)("searchTerm", ctx_r0.searchTerm);
  }
}
function GridAliadosComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "div", 14)(2, "fuse-alert", 15)(3, "span", 16);
    \u0275\u0275text(4, "Informaci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, " No hay informaci\xF3n hasta el momento. ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275property("type", "info")("appearance", "outline");
  }
}
var _GridAliadosComponent = class _GridAliadosComponent {
  constructor() {
    this.datePipe = inject(DatePipe);
    this.searchTerm = "";
    this.currencyPipe = inject(CurrencyPipe);
    this.pagoAliadoService = inject(PagoAliadosService);
    this._matDialog = inject(MatDialog);
    this.estadoDatosService = inject(EstadosDatosService);
    this.router = inject(Router);
    this.data = [];
    this.columns = ["Creaci\xF3n", "Empresa", "Total"];
    this.columnPropertyMap = {
      Creaci\u00F3n: "fechaCreacion",
      Empresa: "nombreSubempresa",
      Total: "total"
    };
    this.buttons = [
      {
        label: "Ver",
        icon: "visibility",
        action: (element) => {
          console.log("Editing", element);
          this.router.navigate([
            "/pages/gestion-cobros/aliados/detalle/",
            element.id
          ]);
        }
      }
    ];
  }
  ngOnDestroy() {
  }
  ngOnInit() {
    this.getAliados();
    this.listenGrid();
  }
  onNew() {
    this.router.navigate(["/pages/gestion-cobros/aliados/aliado"]);
  }
  getAliados() {
    this.pagoAliadoService.getAliados().pipe(tap((response) => {
      response.data.forEach((items) => {
        items.fechaCreacion = this.datePipe.transform(items.fechaCreacion, "dd/MM/yyyy");
        items.total = this.currencyPipe.transform(items.total, "USD", "symbol", "1.2-2");
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
        this.getAliados();
      }
    });
  }
};
_GridAliadosComponent.\u0275fac = function GridAliadosComponent_Factory(t) {
  return new (t || _GridAliadosComponent)();
};
_GridAliadosComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GridAliadosComponent, selectors: [["app-grid-aliados"]], standalone: true, features: [\u0275\u0275ProvidersFeature([DatePipe, CurrencyPipe]), \u0275\u0275StandaloneFeature], decls: 14, vars: 7, consts: [[1, "bg-card", "flex", "min-w-0", "flex-auto", "flex-col", "dark:bg-transparent", "sm:absolute", "sm:inset-0", "sm:overflow-hidden"], [1, "relative", "flex", "flex-0", "flex-col", "border-b", "px-6", "py-8", "sm:flex-row", "sm:items-center", "sm:justify-between", "md:px-8"], [1, "text-3xl", "font-semibold", "tracking-tight"], [1, "mt-6", "flex", "w-full", "shrink-0", "flex-col", "items-center", "sm:ml-4", "sm:mt-0", "sm:flex-row", "sm:space-x-2", "sm:w-auto"], [1, "fuse-mat-dense", "rounded-lg", "w-full", "sm:w-auto", "min-w-64", 3, "subscriptSizing"], ["matPrefix", "", 1, "icon-size-5", 3, "svgIcon"], ["matInput", "", 3, "input", "autocomplete", "placeholder"], ["mat-flat-button", "", 1, "mt-2", "w-full", "bg-crediblue-50", "rounded-lg", "transition", "duration-200", "text-white", "font-semibold", "sm:ml-4", "sm:mt-0", "sm:w-auto", 3, "click", "color"], [3, "svgIcon"], [1, "ml-2", "mr-1"], [1, "flex", "flex-auto", "overflow-hidden"], [1, "inset-0", "min-w-0", "overflow-auto", "print:overflow-visible"], [1, "flex", "flex-auto", "flex-col", "overflow-hidden", "sm:mb-18", "sm:overflow-y-auto"], [3, "columns", "displayedColumns", "columnPropertyMap", "data", "buttons", "searchTerm"], [1, "inline-block", "p-4", "sm:p-2", "print:p-0", "w-full"], [3, "type", "appearance"], ["fuseAlertTitle", ""]], template: function GridAliadosComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
    \u0275\u0275text(3, "Pago proveedores");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 3)(5, "mat-form-field", 4);
    \u0275\u0275element(6, "mat-icon", 5);
    \u0275\u0275elementStart(7, "input", 6);
    \u0275\u0275listener("input", function GridAliadosComponent_Template_input_input_7_listener($event) {
      return ctx.onSearch($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "button", 7);
    \u0275\u0275listener("click", function GridAliadosComponent_Template_button_click_8_listener() {
      return ctx.onNew();
    });
    \u0275\u0275element(9, "mat-icon", 8);
    \u0275\u0275elementStart(10, "span", 9);
    \u0275\u0275text(11, "Pagar");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(12, GridAliadosComponent_Conditional_12_Template, 3, 6, "div", 10)(13, GridAliadosComponent_Conditional_13_Template, 6, 2, "div", 11);
    \u0275\u0275elementEnd();
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
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx.data.length > 0 ? 12 : 13);
  }
}, dependencies: [
  CustomTableComponent,
  MatFormField,
  MatIcon,
  MatInput,
  MatButton,
  FuseAlertComponent
] });
var GridAliadosComponent = _GridAliadosComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GridAliadosComponent, { className: "GridAliadosComponent", filePath: "src\\app\\pages\\gestion-cobros\\pago-aliados\\grid-aliados\\grid-aliados.component.ts", lineNumber: 39 });
})();

// src/app/pages/gestion-cobros/pago-aliados/form-aliados/form-aliados.component.ts
var _c0 = (a0, a1) => ({ "bg-credigray-100": a0, "bg-green-600": a1 });
function FormAliadosComponent_ng_container_18_mat_option_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 23);
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
function FormAliadosComponent_ng_container_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, FormAliadosComponent_ng_container_18_mat_option_1_Template, 2, 2, "mat-option", 22);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const empresas_r3 = ctx.ngIf;
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", empresas_r3.data);
  }
}
function FormAliadosComponent_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "div", 24);
    \u0275\u0275element(2, "app-custom-table", 25);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("columns", ctx_r3.columns)("displayedColumns", ctx_r3.columns)("columnPropertyMap", ctx_r3.columnPropertyMap)("data", ctx_r3.data);
  }
}
function FormAliadosComponent_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "div", 26)(2, "fuse-alert", 27)(3, "span", 28);
    \u0275\u0275text(4, "Informaci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("type", "info")("appearance", "outline");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r3.message, " ");
  }
}
function FormAliadosComponent_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 21);
    \u0275\u0275text(1, "Subtotal: ");
    \u0275\u0275elementStart(2, "span", 29);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "currency");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, ctx_r3.subtotal));
  }
}
function FormAliadosComponent_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 21);
    \u0275\u0275text(1, "Comisiones: ");
    \u0275\u0275elementStart(2, "span", 29);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "currency");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, ctx_r3.totalComision));
  }
}
function FormAliadosComponent_Conditional_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 21);
    \u0275\u0275text(1, "Total a pagar: ");
    \u0275\u0275elementStart(2, "span", 29);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "currency");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 1, ctx_r3.totalPagar), " ");
  }
}
var maskConfig = {
  validation: false
};
var _FormAliadosComponent = class _FormAliadosComponent {
  constructor() {
    this.fb = inject(FormBuilder);
    this.empresaClienteService = inject(EmpresasClientesService);
    this.detalleConsumoService = inject(DetalleConsumoService);
    this.pagoAliadoService = inject(PagoAliadosService);
    this.datePipe = inject(DatePipe);
    this.swalService = inject(SwalService);
    this.estadosDatosService = inject(EstadosDatosService);
    this.fuseService = inject(FuseConfirmationService);
    this.currencyPipe = inject(CurrencyPipe);
    this.decimalPipe = inject(DecimalPipe);
    this.router = inject(Router);
    this.empresa$ = this.empresaClienteService.getEmpresasClientes();
    this.data = [];
    this.columns = ["N\xFAmero de factura", "Porcentaje", "Valor", "Comision", "Total a Pagar"];
    this.columnPropertyMap = {
      "N\xFAmero de factura": "numeroFactura",
      "Porcentaje": "porcentajeSubEmpresa",
      "Valor": "montoConsumo",
      "Comision": "comision",
      "Total a Pagar": "pagar"
    };
  }
  createForm() {
    this.form = this.fb.group({
      fechaFinal: ["", Validators.required],
      idSubEmpresa: ["", Validators.required]
    });
  }
  ngOnInit() {
    this.createForm();
  }
  closeDialog() {
    this.router.navigate(["/pages/gestion-cobros/aliados"]);
    ;
  }
  onGet() {
    if (this.form.valid) {
      const { fechaFinal, idSubEmpresa } = this.form.getRawValue();
      console.log(fechaFinal);
      const fechaFinallData = this.datePipe.transform(fechaFinal, "yyyy-MM-dd");
      const consulta = {
        fechaFinallData,
        idSubEmpresa
      };
      this.getAllPago(consulta);
    }
  }
  onSave() {
    const { fechaFinal, idSubEmpresa } = this.form.getRawValue();
    const fechaFinallData = this.datePipe.transform(fechaFinal, "yyyy-MM-dd");
    const consulta = {
      fechaFinal: fechaFinallData,
      idSubEmpresa
    };
    let detallePagoAliado = [];
    detallePagoAliado = this.data.map((item) => {
      return {
        idDetalleConsumo: item.id
      };
    });
    const createData = __spreadProps(__spreadValues({}, consulta), {
      detallePagoAliado
    });
    console.log(createData);
    const dialog = this.fuseService.open(__spreadValues({}, confirmarPago));
    dialog.afterClosed().subscribe((response) => {
      if (response === "confirmed") {
        this.postSave(createData);
      }
    });
  }
  getAllPago(data) {
    this.detalleConsumoService.getPagosAliados(data).pipe(map((response) => {
      this.subtotal = 0;
      this.totalComision = 0;
      this.totalPagar = 0;
      if (response && Array.isArray(response.data)) {
        response.data.forEach((items) => {
          items.comision = items.montoConsumo * items.porcentajeSubEmpresa / 100;
          items.pagar = items.montoConsumo - items.comision;
          items.montoConsumo = this.currencyPipe.transform(items.montoConsumo, "USD", "symbol", "1.2-2");
          items.comision = this.currencyPipe.transform(items.comision, "USD", "symbol", "1.2-2");
          items.pagar = this.currencyPipe.transform(items.pagar, "USD", "symbol", "1.2-2");
          items.porcentajeSubEmpresa = this.decimalPipe.transform(items.porcentajeSubEmpresa, "1.2-2") + "%";
          this.subtotal += parseFloat(items.montoConsumo.replace(/[^0-9.-]+/g, ""));
          this.totalComision += parseFloat(items.comision.replace(/[^0-9.-]+/g, ""));
          this.totalPagar += parseFloat(items.pagar.replace(/[^0-9.-]+/g, ""));
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
    this.pagoAliadoService.postAliados(data).subscribe((response) => {
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
_FormAliadosComponent.\u0275fac = function FormAliadosComponent_Factory(t) {
  return new (t || _FormAliadosComponent)();
};
_FormAliadosComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FormAliadosComponent, selectors: [["app-form-aliados"]], standalone: true, features: [\u0275\u0275ProvidersFeature([
  { provide: DateAdapter, useClass: DateAdapterService },
  { provide: MAT_DATE_LOCALE, useValue: "en-GB" },
  DatePipe,
  CurrencyPipe,
  DecimalPipe,
  provideNgxMask(maskConfig)
]), \u0275\u0275StandaloneFeature], decls: 39, vars: 20, consts: [["finalPicker", ""], [1, "bg-card", "flex", "min-w-0", "flex-auto", "flex-col", "dark:bg-transparent", "sm:absolute", "sm:inset-0", "sm:overflow-hidden"], [1, "mt-8", "text-3xl", "font-semibold", "leading-tight", "tracking-tight", "text-center"], [1, "relative", "flex", "flex-0", "flex-col", "border-b", "px-6", "sm:flex-row", "md:px-8"], [1, "mt-6", "w-full", "shrink-0", "sm:mt-0", "sm:space-x-2", "lg:w-full"], [1, "mt-8", 3, "formGroup"], [1, "flex", "flex-col", "sm:flex-row", "gap-2.5"], ["floatLabel", "always", 1, "w-full", "min-w-90"], ["matInput", "", "placeholder", "dd/mm/yyyy", 3, "matDatepicker", "formControlName"], ["matIconSuffix", "", 3, "for"], ["placeholder", "Empresa", 3, "formControlName"], [4, "ngIf"], [1, "relative", "p-4", "border", "border-gray-300", "rounded-lg", "mt-4"], [1, "absolute", "-top-3", "left-4", "bg-white", "px-2", "text-gray-500", "font-semibold"], [1, "flex", "flex-wrap", "justify-end", "gap-2.5", "sm:mb-4"], ["mat-flat-button", "", 1, "sm:w-auto", "w-full", "sm:mt-6", "bg-credigray-100", "rounded-lg", "transition", "duration-200", "text-white", "font-semibold", 3, "click", "color"], ["mat-flat-button", "", 1, "sm:w-auto", "w-full", "sm:mt-6", "bg-crediblue-50", "rounded-lg", "transition", "duration-200", "text-white", "font-semibold", 3, "click", "color"], ["mat-flat-button", "", 1, "lg:w-auto", "w-full", "sm:mt-6", "transition", "duration-200", "text-white", "font-semibold", "rounded-lg", "md:w-auto", 3, "click", "ngClass", "disabled"], [1, "flex", "flex-auto", "overflow-hidden"], [1, "inset-0", "min-w-0", "overflow-auto", "print:overflow-visible"], [1, "flex", "flex-col", "gap-4", "justify-end", "sm:flex-row"], [1, "sm:pr-4", "text-gray-600", "font-bold", "text-right"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [1, "flex", "flex-auto", "flex-col", "overflow-hidden", "sm:p-4", "sm:mb-10", "sm:overflow-y-auto"], [3, "columns", "displayedColumns", "columnPropertyMap", "data"], [1, "inline-block", "p-4", "sm:p-8", "print:p-0", "w-full"], [3, "type", "appearance"], ["fuseAlertTitle", ""], [1, "text-gray-800"]], template: function FormAliadosComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 3)(4, "div", 4)(5, "form", 5)(6, "div", 6)(7, "mat-form-field", 7)(8, "mat-label");
    \u0275\u0275text(9, "Fecha de corte");
    \u0275\u0275elementEnd();
    \u0275\u0275element(10, "input", 8)(11, "mat-datepicker-toggle", 9)(12, "mat-datepicker", null, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "mat-form-field", 7)(15, "mat-label");
    \u0275\u0275text(16, "Empresa");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "mat-select", 10);
    \u0275\u0275template(18, FormAliadosComponent_ng_container_18_Template, 2, 1, "ng-container", 11);
    \u0275\u0275pipe(19, "async");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "div", 12)(21, "div", 13);
    \u0275\u0275text(22, " Opciones ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 14)(24, "button", 15);
    \u0275\u0275listener("click", function FormAliadosComponent_Template_button_click_24_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.closeDialog());
    });
    \u0275\u0275elementStart(25, "span");
    \u0275\u0275text(26, " Atras ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "button", 16);
    \u0275\u0275listener("click", function FormAliadosComponent_Template_button_click_27_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.onGet());
    });
    \u0275\u0275elementStart(28, "span");
    \u0275\u0275text(29, " Consultar ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "button", 17);
    \u0275\u0275listener("click", function FormAliadosComponent_Template_button_click_30_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.onSave());
    });
    \u0275\u0275elementStart(31, "span");
    \u0275\u0275text(32, " Pagar ");
    \u0275\u0275elementEnd()()()()()()();
    \u0275\u0275template(33, FormAliadosComponent_Conditional_33_Template, 3, 4, "div", 18)(34, FormAliadosComponent_Conditional_34_Template, 6, 3, "div", 19);
    \u0275\u0275elementStart(35, "div", 20);
    \u0275\u0275template(36, FormAliadosComponent_Conditional_36_Template, 5, 3, "span", 21)(37, FormAliadosComponent_Conditional_37_Template, 5, 3, "span", 21)(38, FormAliadosComponent_Conditional_38_Template, 5, 3, "span", 21);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const finalPicker_r5 = \u0275\u0275reference(13);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", "Pago proveedores", " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("formGroup", ctx.form);
    \u0275\u0275advance(5);
    \u0275\u0275property("matDatepicker", finalPicker_r5)("formControlName", "fechaFinal");
    \u0275\u0275advance();
    \u0275\u0275property("for", finalPicker_r5);
    \u0275\u0275advance(6);
    \u0275\u0275property("formControlName", "idSubEmpresa");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(19, 15, ctx.empresa$));
    \u0275\u0275advance(6);
    \u0275\u0275property("color", "primary");
    \u0275\u0275advance(3);
    \u0275\u0275property("color", "primary");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(17, _c0, ctx.data.length == 0, ctx.data.length > 0))("disabled", ctx.data.length == 0);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx.data.length ? 33 : ctx.message ? 34 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx.subtotal ? 36 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.totalComision ? 37 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.totalPagar ? 38 : -1);
  }
}, dependencies: [
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
  MatFormField,
  MatInput,
  MatLabel,
  MatSuffix,
  AsyncPipe,
  MatOption,
  MatSelect,
  NgForOf,
  NgIf,
  MatButton,
  CustomTableComponent,
  NgClass,
  CurrencyPipe,
  FuseAlertComponent
], styles: ["\n\n  .custom-dialog-container {\n  width: 100%;\n}\n@media (min-width: 1280px) {\n    .custom-dialog-container {\n    width: 75%;\n  }\n}\n/*# sourceMappingURL=form-aliados.component.css.map */"] });
var FormAliadosComponent = _FormAliadosComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FormAliadosComponent, { className: "FormAliadosComponent", filePath: "src\\app\\pages\\gestion-cobros\\pago-aliados\\form-aliados\\form-aliados.component.ts", lineNumber: 64 });
})();

// src/app/pages/gestion-cobros/pago-aliados/form-view-aliados/form-view-aliados.component.ts
var maskConfig2 = {
  validation: false
};
var _FormViewAliadosComponent = class _FormViewAliadosComponent {
  constructor() {
    this.fuseService = inject(FuseConfirmationService);
    this.currencyPipe = inject(CurrencyPipe);
    this.decimalPipe = inject(DecimalPipe);
    this.router = inject(Router);
    this.activatedRoute = inject(ActivatedRoute);
    this.pagoAliadoService = inject(PagoAliadosService);
    this.datePipe = inject(DatePipe);
    this.data = [];
    this.form = {
      fechaCreacion: "",
      fechaFinal: "",
      fechaIncial: "",
      nombreSubempresa: "",
      total: ""
    };
    this.columns = ["N\xFAmero de factura", "Porcentaje", "Valor facturado", "Total"];
    this.columnPropertyMap = {
      "N\xFAmero de factura": "numeroFactura",
      "Porcentaje": "porcentaje",
      "Valor facturado": "valorFacturado",
      "Total": "total"
    };
  }
  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    this.getAliado(this.id);
  }
  getAliado(id) {
    this.subscription$ = this.pagoAliadoService.getAliado(id).pipe(tap((response) => {
      response.data.detallePagoAliados.forEach((items) => {
        items.total = this.currencyPipe.transform(items.total, "USD", "symbol", "1.2-2");
        items.valorFacturado = this.currencyPipe.transform(items.valorFacturado, "USD", "symbol", "1.2-2");
        items.porcentaje = this.decimalPipe.transform(items.porcentaje, "1.2-2") + "%";
      });
      return response;
    })).subscribe((response) => {
      if (response && Array.isArray(response.data.detallePagoAliados)) {
        this.data = response.data.detallePagoAliados;
        this.form.fechaCreacion = this.datePipe.transform(response.data.fechaCreacion, "dd/MM/YYYY");
        this.form.fechaFinal = response.data.fechaFinal;
        this.form.nombreSubempresa = response.data.nombreSubempresa;
        this.form.total = this.currencyPipe.transform(response.data.total, "USD", "symbol", "1.2-2");
        ;
      }
    });
  }
  ngOnDestroy() {
    this.subscription$.unsubscribe();
  }
  closeDialog() {
    this.router.navigate(["/pages/gestion-cobros/aliados"]);
    ;
  }
};
_FormViewAliadosComponent.\u0275fac = function FormViewAliadosComponent_Factory(t) {
  return new (t || _FormViewAliadosComponent)();
};
_FormViewAliadosComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FormViewAliadosComponent, selectors: [["app-form-view-aliados"]], standalone: true, features: [\u0275\u0275ProvidersFeature([
  { provide: DateAdapter, useClass: DateAdapterService },
  { provide: MAT_DATE_LOCALE, useValue: "en-GB" },
  DatePipe,
  CurrencyPipe,
  DecimalPipe,
  provideNgxMask(maskConfig2)
]), \u0275\u0275StandaloneFeature], decls: 32, vars: 10, consts: [[1, "bg-card", "flex", "min-w-0", "flex-auto", "flex-col", "dark:bg-transparent", "sm:absolute", "sm:inset-0", "sm:overflow-hidden"], [1, "sm:ml-8", "mt-8", "text-3xl", "font-semibold", "leading-tight", "tracking-tight"], [1, "relative", "flex", "flex-0", "flex-col", "border-b", "px-6", "sm:flex-row", "md:px-8"], [1, "mt-6", "w-full", "shrink-0", "sm:mt-0", "sm:space-x-2", "lg:w-full"], [1, "mt-8"], [1, "flex", "flex-col", "sm:flex-row", "gap-2.5"], ["floatLabel", "always", 1, "w-full", "min-w-90"], ["matInput", "", "placeholder", "Empresa", "readonly", "", 3, "value"], [1, "relative", "p-2", "border", "border-gray-300", "rounded-lg"], [1, "absolute", "-top-3", "left-4", "bg-white", "px-2", "text-gray-500", "font-semibold"], [1, "flex", "flex-wrap", "justify-end", "gap-2.5", "sm:mb-4"], ["mat-flat-button", "", 1, "sm:w-auto", "w-full", "sm:mt-6", "bg-credigray-100", "rounded-lg", "transition", "duration-200", "text-white", "font-semibold", 3, "click", "color"], ["mat-flat-button", "", 1, "lg:w-auto", "w-full", "sm:mt-6", "bg-green-600", "transition", "duration-200", "text-white", "font-semibold", "rounded-lg", "md:w-auto", 3, "disabled"], [1, "flex", "flex-auto", "overflow-hidden"], [1, "flex", "flex-auto", "flex-col", "overflow-hidden", "sm:p-4", "sm:mb-10", "sm:overflow-y-auto"], [3, "columns", "displayedColumns", "columnPropertyMap", "data"]], template: function FormViewAliadosComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 2)(4, "div", 3)(5, "form", 4)(6, "div", 5)(7, "mat-form-field", 6)(8, "mat-label");
    \u0275\u0275text(9, "Empresa");
    \u0275\u0275elementEnd();
    \u0275\u0275element(10, "input", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "mat-form-field", 6)(12, "mat-label");
    \u0275\u0275text(13, "Fecha de creaci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275element(14, "input", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "mat-form-field", 6)(16, "mat-label");
    \u0275\u0275text(17, "Total");
    \u0275\u0275elementEnd();
    \u0275\u0275element(18, "input", 7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 8)(20, "div", 9);
    \u0275\u0275text(21, " Opciones ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 10)(23, "button", 11);
    \u0275\u0275listener("click", function FormViewAliadosComponent_Template_button_click_23_listener() {
      return ctx.closeDialog();
    });
    \u0275\u0275elementStart(24, "span");
    \u0275\u0275text(25, " Atras ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "button", 12)(27, "span");
    \u0275\u0275text(28, " Descargar ");
    \u0275\u0275elementEnd()()()()()()();
    \u0275\u0275elementStart(29, "div", 13)(30, "div", 14);
    \u0275\u0275element(31, "app-custom-table", 15);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", "Detalle pago proveedores", " ");
    \u0275\u0275advance(8);
    \u0275\u0275property("value", ctx.form.nombreSubempresa);
    \u0275\u0275advance(4);
    \u0275\u0275property("value", ctx.form.fechaCreacion);
    \u0275\u0275advance(4);
    \u0275\u0275property("value", ctx.form.total);
    \u0275\u0275advance(5);
    \u0275\u0275property("color", "primary");
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx.data.length == 0);
    \u0275\u0275advance(5);
    \u0275\u0275property("columns", ctx.columns)("displayedColumns", ctx.columns)("columnPropertyMap", ctx.columnPropertyMap)("data", ctx.data);
  }
}, dependencies: [
  CustomTableComponent,
  FormsModule,
  \u0275NgNoValidate,
  NgControlStatusGroup,
  NgForm,
  MatFormField,
  MatLabel,
  MatInput,
  MatButton
] });
var FormViewAliadosComponent = _FormViewAliadosComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FormViewAliadosComponent, { className: "FormViewAliadosComponent", filePath: "src\\app\\pages\\gestion-cobros\\pago-aliados\\form-view-aliados\\form-view-aliados.component.ts", lineNumber: 49 });
})();

// src/app/pages/gestion-cobros/pago-aliados/pago-aliados.routes.ts
var pago_aliados_routes_default = [
  {
    path: "",
    component: GridAliadosComponent
  },
  {
    path: "aliado",
    component: FormAliadosComponent
  },
  {
    path: "detalle/:id",
    component: FormViewAliadosComponent
  }
];
export {
  pago_aliados_routes_default as default
};
//# sourceMappingURL=chunk-FOJN2YW6.js.map
