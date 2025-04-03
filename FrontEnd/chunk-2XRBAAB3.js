import {
  ReportesService
} from "./chunk-XZSTSLX5.js";
import {
  CodigoEstadosCreditosLiquidados
} from "./chunk-XZGU2QMQ.js";
import {
  parseCurrency
} from "./chunk-5YT4VTHK.js";
import {
  utils,
  writeFileSync
} from "./chunk-VRN2SIHY.js";
import {
  MatTab,
  MatTabContent,
  MatTabGroup
} from "./chunk-6XMXDB2K.js";
import {
  DateAdapterService
} from "./chunk-K5K55XKD.js";
import {
  CustomTableComponent
} from "./chunk-ZB3PSQQS.js";
import "./chunk-CZDVBWDU.js";
import "./chunk-NACP6IOB.js";
import {
  FuseConfirmationService,
  exportar
} from "./chunk-HUKVMAZY.js";
import {
  MatFormField,
  MatInput
} from "./chunk-IZMZQUCC.js";
import "./chunk-GRFMDZQD.js";
import {
  CdkScrollable
} from "./chunk-74CJHXHU.js";
import {
  FuseAlertComponent
} from "./chunk-YZGIFTGF.js";
import "./chunk-G7E77ZCS.js";
import "./chunk-ROMZC4L4.js";
import {
  CurrencyPipe,
  DateAdapter,
  DatePipe,
  DecimalPipe,
  MAT_DATE_LOCALE,
  MatButton,
  MatIcon,
  NgClass,
  inject,
  map,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction2,
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

// src/app/pages/reportes/reporte-deudas/reporte-deudas/reporte-deudas.component.ts
var _c0 = (a0, a1) => ({ "bg-green-700": a0, "bg-credigray-100": a1 });
function ReporteDeudasComponent_ng_template_20_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-custom-table", 17);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("columns", ctx_r1.columns)("displayedColumns", ctx_r1.columns)("columnPropertyMap", ctx_r1.columnPropertyMap)("data", ctx_r1.data)("searchTerm", ctx_r1.searchTerm);
  }
}
function ReporteDeudasComponent_ng_template_20_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "div", 19)(2, "fuse-alert", 20)(3, "span", 21);
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
function ReporteDeudasComponent_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ReporteDeudasComponent_ng_template_20_Conditional_0_Template, 1, 5, "app-custom-table", 17)(1, ReporteDeudasComponent_ng_template_20_Conditional_1_Template, 6, 2, "div", 18);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r1.data.length > 0 ? 0 : 1);
  }
}
function ReporteDeudasComponent_ng_template_22_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-custom-table", 17);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("columns", ctx_r1.columnsLiquidado)("displayedColumns", ctx_r1.columnsLiquidado)("columnPropertyMap", ctx_r1.columnPropertyLiquidadoMap)("data", ctx_r1.data)("searchTerm", ctx_r1.searchTerm);
  }
}
function ReporteDeudasComponent_ng_template_22_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "div", 19)(2, "fuse-alert", 20)(3, "span", 21);
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
function ReporteDeudasComponent_ng_template_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ReporteDeudasComponent_ng_template_22_Conditional_0_Template, 1, 5, "app-custom-table", 17)(1, ReporteDeudasComponent_ng_template_22_Conditional_1_Template, 6, 2, "div", 18);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r1.data.length > 0 ? 0 : 1);
  }
}
var _ReporteDeudasComponent = class _ReporteDeudasComponent {
  constructor() {
    this.searchTerm = "";
    this.reportesService = inject(ReportesService);
    this.datePipe = inject(DatePipe);
    this.fuseService = inject(FuseConfirmationService);
    this.currencyPipe = inject(CurrencyPipe);
    this.selectedTab = "";
    this.tabDescription = "Este reporte muestra las personas que han recibido desembolsos pero a\xFAn no ha realizado el proceso de liquidaci\xF3n para el cobro. ";
    this.title = "Sin liquidar";
    this.data = [];
    this.exportData = [];
    this.columns = [
      "Fecha de desembolso",
      "Trabajador",
      "Identificaci\xF3n",
      "Empresa",
      "Cantidad cuotas",
      "Valor desembolso",
      "Deuda a la fecha",
      "Intereses a la fecha",
      "Valor cuota",
      "Deuda costos"
    ];
    this.columnsLiquidado = [
      "Fecha de desembolso",
      "Trabajador",
      "Identificaci\xF3n",
      "Empresa",
      "Valor liquidado",
      "Pagos pendientes"
    ];
    this.columnPropertyMap = {
      "Fecha de desembolso": "fechaDesembolso",
      "Trabajador": "nombreTrabajador",
      "Identificaci\xF3n": "documentoTrabajador",
      "Empresa": "nombreSubEmpresa",
      "Cantidad cuotas": "cantCuotas",
      "Valor desembolso": "valorDesembolso",
      "Deuda a la fecha": "deudaTotal",
      "Intereses a la fecha": "deudaIntereses",
      "Valor cuota": "valorCuota",
      "Deuda costos": "deudaCobroFijo"
    };
    this.columnPropertyLiquidadoMap = {
      "Fecha de desembolso": "fechaDesembolso",
      "Trabajador": "nombreTrabajador",
      "Identificaci\xF3n": "documentoTrabajador",
      "Empresa": "nombreSubEmpresa",
      "Valor liquidado": "deudaTotal",
      "Pagos pendientes": "pagosPendientes"
    };
    this.tabChanged = (tabChangeEvent) => {
      if (tabChangeEvent.index === 0) {
        this.title = "Sin liquidar: ";
        this.tabDescription = "Este reporte muestra las personas que han recibido desembolsos pero a\xFAn no ha realizado el proceso de liquidaci\xF3n para el cobro. ";
      } else {
        this.title = "Liquidado: ";
        this.tabDescription = "Este reporte identifica a las personas que tienen uno o m\xE1s cobros liquidados pero que a\xFAn no ha recibido el pago. ";
        this.tabNote = 'Si los intereses a la fecha est\xE1n en $0, es porque solo tiene pendiente por pagar "Costos Adicionales".';
      }
      this.selectedTab = tabChangeEvent.index == 0 ? "" : CodigoEstadosCreditosLiquidados.LIQUIDADO;
      this.loadDeudas(this.selectedTab);
    };
    this.CodigoEstadosCreditosLiquidados = CodigoEstadosCreditosLiquidados;
  }
  onSearch(event) {
    const target = event.target;
    this.searchTerm = target.value.trim().toLowerCase();
  }
  ngOnInit() {
    this.loadDeudas(this.selectedTab);
  }
  loadDeudas(params) {
    this.reportesService.getReporteDeudas(params).pipe(map((response) => {
      response.data.forEach((items) => {
        items.fechaDesembolso = this.datePipe.transform(items.fechaDesembolso, "dd/MM/yyyy");
        items.valorDesembolso = this.currencyPipe.transform(items.valorDesembolso, "USD", "symbol", "1.2-2");
        items.deudaTotal = this.currencyPipe.transform(items.deudaTotal, "USD", "symbol", "1.2-2");
        items.deudaIntereses = this.currencyPipe.transform(items.deudaIntereses, "USD", "symbol", "1.2-2");
        items.valorCuota = this.currencyPipe.transform(items.valorCuota, "USD", "symbol", "1.2-2");
        items.deudaCobroFijo = this.currencyPipe.transform(items.deudaCobroFijo, "USD", "symbol", "1.2-2");
      });
      return response;
    })).subscribe((response) => {
      if (response.data) {
        this.data = response.data;
        this.convertDataExport(response.data);
      } else {
        this.data = [];
      }
    });
  }
  exportToExcel(data) {
    const dialog = this.fuseService.open(__spreadValues({}, exportar));
    dialog.afterClosed().subscribe((response) => {
      if (response === "confirmed") {
        const worksheet = utils.json_to_sheet(data);
        const workbook = utils.book_new();
        utils.book_append_sheet(workbook, worksheet, "Sheet1");
        writeFileSync(workbook, this.selectedTab == "" ? `Reporte de Deudas Sin liquidar ${this.datePipe.transform(/* @__PURE__ */ new Date(), "dd/MM/yyyy")}.xlsx` : `Reporte de Deudas liquidado ${this.datePipe.transform(/* @__PURE__ */ new Date(), "dd/MM/yyyy")}.xlsx`);
      }
    });
  }
  convertDataExport(data) {
    const convertData = data.map((items) => {
      const mappedItem = {
        FechaDeDesembolso: items.fechaDesembolso,
        Trabajador: items.nombreTrabajador,
        Identificacion: items.documentoTrabajador,
        Empresa: items.nombreSubEmpresa
      };
      if (this.selectedTab == CodigoEstadosCreditosLiquidados.LIQUIDADO) {
        mappedItem.Valorliquidado = parseCurrency(items.deudaTotal);
      }
      if (this.selectedTab == "") {
        mappedItem.CantidadCuotas = items.cantCuotas;
      }
      if (this.selectedTab == "") {
        mappedItem.ValorDesembolso = parseCurrency(items.valorDesembolso);
      }
      if (this.selectedTab == "") {
        mappedItem.DeudaAlaFecha = parseCurrency(items.deudaTotal);
      }
      if (this.selectedTab == "") {
        mappedItem.InteresesAlaFecha = parseCurrency(items.deudaIntereses);
      }
      if (this.selectedTab == "") {
        mappedItem.ValorCuota = parseCurrency(items.valorCuota);
      }
      if (this.selectedTab == "") {
        mappedItem.DeudaCostos = parseCurrency(items.deudaCobroFijo);
      }
      if (this.selectedTab == CodigoEstadosCreditosLiquidados.LIQUIDADO) {
        mappedItem.PagosPendientes = items.pagosPendientes;
      }
      return mappedItem;
    });
    this.exportData = convertData;
  }
};
_ReporteDeudasComponent.\u0275fac = function ReporteDeudasComponent_Factory(t) {
  return new (t || _ReporteDeudasComponent)();
};
_ReporteDeudasComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReporteDeudasComponent, selectors: [["app-reporte-deudas"]], standalone: true, features: [\u0275\u0275ProvidersFeature([
  { provide: DateAdapter, useClass: DateAdapterService },
  { provide: MAT_DATE_LOCALE, useValue: "en-GB" },
  DatePipe,
  CurrencyPipe,
  DecimalPipe
]), \u0275\u0275StandaloneFeature], decls: 23, vars: 13, consts: [["tabGroup", ""], ["cdkScrollable", "", 1, "bg-card", "flex", "min-w-0", "flex-auto", "flex-col", "dark:bg-transparent", "sm:absolute", "sm:inset-0", "sm:overflow-hidden"], [1, "relative", "flex", "flex-0", "flex-col", "px-6", "py-8", "sm:flex-row", "sm:items-center", "sm:justify-between", "md:px-8"], [1, "text-3xl", "font-semibold", "tracking-tight"], [1, "text-md", "text-gray-600", "mt-2", "w-2/3"], [1, "font-bold"], [1, "mt-6", "flex", "w-full", "shrink-0", "flex-col", "items-center", "sm:ml-4", "sm:mt-0", "sm:flex-row", "sm:space-x-2", "sm:w-auto"], [1, "fuse-mat-dense", "rounded-lg", "w-full", "sm:w-auto", "min-w-64", 3, "subscriptSizing"], ["matPrefix", "", 1, "icon-size-5", 3, "svgIcon"], ["matInput", "", 3, "input", "autocomplete", "placeholder"], ["mat-flat-button", "", 1, "w-full", "mt-2", "sm:mt-0", "rounded-lg", "transition", "duration-200", "text-white", "font-semibold", 3, "click", "color", "ngClass", "disabled"], [1, "flex", "flex-auto", "overflow-hidden"], [1, "flex", "flex-auto", "flex-col", "overflow-hidden", "sm:mb-18", "sm:overflow-y-auto"], ["mat-stretch-tabs", "false", 1, "sm:px-2", 3, "selectedTabChange", "animationDuration"], ["label", "Sin liquidar"], ["matTabContent", ""], ["label", "Liquidado"], [3, "columns", "displayedColumns", "columnPropertyMap", "data", "searchTerm"], [1, "inset-0", "min-w-0", "overflow-auto", "print:overflow-visible"], [1, "inline-block", "p-4", "sm:p-2", "print:p-0", "w-full"], [3, "type", "appearance"], ["fuseAlertTitle", ""]], template: function ReporteDeudasComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3);
    \u0275\u0275text(3, "Cartera general trabajador ");
    \u0275\u0275elementStart(4, "div", 4)(5, "span", 5);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 6)(9, "mat-form-field", 7);
    \u0275\u0275element(10, "mat-icon", 8);
    \u0275\u0275elementStart(11, "input", 9);
    \u0275\u0275listener("input", function ReporteDeudasComponent_Template_input_input_11_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.onSearch($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "button", 10);
    \u0275\u0275listener("click", function ReporteDeudasComponent_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.exportToExcel(ctx.exportData));
    });
    \u0275\u0275elementStart(13, "span");
    \u0275\u0275text(14, " Exportar ");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(15, "div", 11)(16, "div", 12)(17, "mat-tab-group", 13, 0);
    \u0275\u0275listener("selectedTabChange", function ReporteDeudasComponent_Template_mat_tab_group_selectedTabChange_17_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.tabChanged($event));
    });
    \u0275\u0275elementStart(19, "mat-tab", 14);
    \u0275\u0275template(20, ReporteDeudasComponent_ng_template_20_Template, 2, 1, "ng-template", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "mat-tab", 16);
    \u0275\u0275template(22, ReporteDeudasComponent_ng_template_22_Template, 2, 1, "ng-template", 15);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx.title);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx.tabDescription, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("subscriptSizing", "dynamic");
    \u0275\u0275advance();
    \u0275\u0275property("svgIcon", "heroicons_solid:magnifying-glass");
    \u0275\u0275advance();
    \u0275\u0275property("autocomplete", "off")("placeholder", "Buscar");
    \u0275\u0275advance();
    \u0275\u0275property("color", "primary")("ngClass", \u0275\u0275pureFunction2(10, _c0, ctx.exportData.length, !ctx.exportData.length))("disabled", !ctx.exportData.length);
    \u0275\u0275advance(5);
    \u0275\u0275property("animationDuration", "500");
  }
}, dependencies: [
  CdkScrollable,
  MatFormField,
  MatIcon,
  MatInput,
  MatButton,
  NgClass,
  CustomTableComponent,
  FuseAlertComponent,
  MatTabGroup,
  MatTab,
  MatTabContent
] });
var ReporteDeudasComponent = _ReporteDeudasComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReporteDeudasComponent, { className: "ReporteDeudasComponent", filePath: "src\\app\\pages\\reportes\\reporte-deudas\\reporte-deudas\\reporte-deudas.component.ts", lineNumber: 48 });
})();

// src/app/pages/reportes/reporte-deudas/reporte-deudas.routes.ts
var reporte_deudas_routes_default = [
  {
    path: "",
    component: ReporteDeudasComponent
  }
];
export {
  reporte_deudas_routes_default as default
};
//# sourceMappingURL=chunk-2XRBAAB3.js.map
