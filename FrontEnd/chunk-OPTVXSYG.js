import {
  FuseCardComponent
} from "./chunk-EHCERKCP.js";
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
  CodigosDetalleConsumo,
  EstadoDetalleConsumosId
} from "./chunk-VUEAR5BO.js";
import {
  DetalleConsumoService
} from "./chunk-S23R3MHA.js";
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
  exportar,
  guardar
} from "./chunk-HUKVMAZY.js";
import {
  MatFormField,
  MatInput
} from "./chunk-IZMZQUCC.js";
import {
  AuthService
} from "./chunk-F2FVRPPM.js";
import "./chunk-4LX6KC25.js";
import {
  ActivatedRoute,
  Router,
  RouterLink
} from "./chunk-L2WXMDPA.js";
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
  DatePipe,
  MatAnchor,
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
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction2,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-WGDVSMOG.js";
import {
  __spreadValues
} from "./chunk-AYDYM6RQ.js";

// src/app/pages/gestion-creditos/consumos/grid-consumos/grid-consumos.component.ts
var _c0 = (a0, a1) => ({ "bg-green-700": a0, "bg-credigray-100": a1 });
function GridConsumosComponent_ng_template_16_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "app-custom-table", 18);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("columns", ctx_r1.columns)("displayedColumns", ctx_r1.columns)("columnPropertyMap", ctx_r1.columnPropertyMap)("data", ctx_r1.data)("buttons", ctx_r1.buttons)("searchTerm", ctx_r1.searchTerm);
  }
}
function GridConsumosComponent_ng_template_16_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "div", 20)(2, "fuse-alert", 21)(3, "span", 22);
    \u0275\u0275text(4, "Informaci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, " No hay consumos hasta el momento. ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275property("type", "info")("appearance", "outline");
  }
}
function GridConsumosComponent_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, GridConsumosComponent_ng_template_16_ng_container_0_Template, 2, 6, "ng-container", 17)(1, GridConsumosComponent_ng_template_16_ng_template_1_Template, 6, 2, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const noData_r3 = \u0275\u0275reference(2);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngIf", ctx_r1.data.length)("ngIfElse", noData_r3);
  }
}
function GridConsumosComponent_ng_template_18_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "app-custom-table", 18);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("columns", ctx_r1.columns)("displayedColumns", ctx_r1.columns)("columnPropertyMap", ctx_r1.columnPropertyMap)("data", ctx_r1.data)("buttons", ctx_r1.buttons)("searchTerm", ctx_r1.searchTerm);
  }
}
function GridConsumosComponent_ng_template_18_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "div", 20)(2, "fuse-alert", 21)(3, "span", 22);
    \u0275\u0275text(4, "Informaci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, " No hay consumos hasta el momento. ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275property("type", "info")("appearance", "outline");
  }
}
function GridConsumosComponent_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, GridConsumosComponent_ng_template_18_ng_container_0_Template, 2, 6, "ng-container", 17)(1, GridConsumosComponent_ng_template_18_ng_template_1_Template, 6, 2, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const noData_r4 = \u0275\u0275reference(2);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngIf", ctx_r1.data.length)("ngIfElse", noData_r4);
  }
}
function GridConsumosComponent_ng_template_20_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "app-custom-table", 18);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("columns", ctx_r1.columns)("displayedColumns", ctx_r1.columns)("columnPropertyMap", ctx_r1.columnPropertyMap)("data", ctx_r1.data)("buttons", ctx_r1.buttons)("searchTerm", ctx_r1.searchTerm);
  }
}
function GridConsumosComponent_ng_template_20_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "div", 20)(2, "fuse-alert", 21)(3, "span", 22);
    \u0275\u0275text(4, "Informaci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, " No hay consumos hasta el momento. ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275property("type", "info")("appearance", "outline");
  }
}
function GridConsumosComponent_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, GridConsumosComponent_ng_template_20_ng_container_0_Template, 2, 6, "ng-container", 17)(1, GridConsumosComponent_ng_template_20_ng_template_1_Template, 6, 2, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const noData_r5 = \u0275\u0275reference(2);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngIf", ctx_r1.data.length)("ngIfElse", noData_r5);
  }
}
var _GridConsumosComponent = class _GridConsumosComponent {
  constructor() {
    this.datePipe = inject(DatePipe);
    this.currencyPipe = inject(CurrencyPipe);
    this.router = inject(Router);
    this.estadoService = inject(EstadosDatosService);
    this.consumoService = inject(DetalleConsumoService);
    this.selectedTab = EstadoDetalleConsumosId.EN_REVISION;
    this.searchTerm = "";
    this.fuseService = inject(FuseConfirmationService);
    this.data = [];
    this.columns = ["Fecha", "Empresa", "N\xFAmero de factura", "Trabajador", "Valor factura", "Cantidad cuotas", "Estado"];
    this.columnPropertyMap = {
      "Fecha": "fechaCreacion",
      "Empresa": "nombreSubEmpresa",
      "N\xFAmero de factura": "numeroFactura",
      "Trabajador": "nombreTrabajador",
      "Valor factura": "montoConsumo",
      "Cantidad cuotas": "cantidadCuotas",
      "Estado": "nombreEstadoCredito"
    };
    this.buttons = [
      {
        label: "View",
        icon: "visibility",
        action: (element) => {
          console.log("Approve", element);
          this.selectedData = element;
          this.router.navigate(["pages/gestion-creditos/consumos/detalle", this.selectedData.id]);
        }
      }
    ];
    this.tabChanged = (tabChangeEvent) => {
      console.log("tabChangeEvent => ", tabChangeEvent);
      console.log("index => ", tabChangeEvent.index);
      this.tabIndex = tabChangeEvent.index;
      console.log(this.tabIndex);
      this.selectedTab = tabChangeEvent.index == 0 ? EstadoDetalleConsumosId.EN_REVISION : tabChangeEvent.index == 1 ? EstadoDetalleConsumosId.APROBADAS : (
        //tabChangeEvent.index == 2 ? EstadoDetalleConsumo.PAGADO :
        tabChangeEvent.index == 2 ? EstadoDetalleConsumosId.RECHAZADAS : EstadoDetalleConsumosId.EN_REVISION
      );
      this.getDetalle(this.selectedTab);
    };
  }
  listenGrid() {
    const refreshData$ = this.estadoService.stateGridSolicitudes.asObservable();
    refreshData$.subscribe((states) => {
      if (states.state) {
        console.log("Si entro");
        console.log(states);
        this.selectedTab = states.tab == 0 ? EstadoDetalleConsumosId.EN_REVISION : states.tab == 1 ? EstadoDetalleConsumosId.APROBADAS : (
          //states.tab == 2 ? EstadoDetalleConsumo.PAGADO :
          states.tab == 2 ? EstadoDetalleConsumosId.RECHAZADAS : EstadoDetalleConsumosId.EN_REVISION
        );
        this.tabIndex = states.tab;
        console.log(this.tabIndex);
        this.getDetalle(this.selectedTab);
      }
    });
  }
  onSearch(event) {
    const target = event.target;
    this.searchTerm = target.value.trim().toLowerCase();
  }
  getDetalle(param) {
    this.subcription$ = this.consumoService.getDetalle(param).pipe(map((response) => {
      response.data.forEach((items) => {
        items.fechaCreacion = this.datePipe.transform(items.fechaCreacion, "dd/MM/yyyy");
        items.montoConsumo = this.currencyPipe.transform(items.montoConsumo, "USD", "symbol", "1.2-2");
        items.montoCuotas = this.currencyPipe.transform(items.montoCuotas, "USD", "symbol", "1.2-2");
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
  ngOnDestroy() {
    this.subcription$.unsubscribe();
  }
  ngOnInit() {
    this.getDetalle(this.selectedTab);
    this.listenGrid();
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
};
_GridConsumosComponent.\u0275fac = function GridConsumosComponent_Factory(t) {
  return new (t || _GridConsumosComponent)();
};
_GridConsumosComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GridConsumosComponent, selectors: [["app-grid-consumos"]], standalone: true, features: [\u0275\u0275ProvidersFeature([
  DatePipe,
  CurrencyPipe
]), \u0275\u0275StandaloneFeature], decls: 21, vars: 12, consts: [["tabGroup", ""], ["noData", ""], [1, "bg-card", "flex", "min-w-0", "flex-auto", "flex-col", "dark:bg-transparent", "sm:absolute", "sm:inset-0", "sm:overflow-hidden"], [1, "relative", "flex", "flex-0", "flex-col", "border-b", "px-6", "py-8", "sm:flex-row", "sm:items-center", "sm:justify-between", "md:px-8"], [1, "text-3xl", "font-semibold", "tracking-tight"], [1, "mt-6", "flex", "w-full", "shrink-0", "flex-col", "items-center", "sm:ml-4", "sm:mt-0", "sm:flex-row", "sm:space-x-2", "sm:w-auto"], [1, "fuse-mat-dense", "rounded-lg", "w-full", "sm:w-auto", "min-w-64", 3, "subscriptSizing"], ["matPrefix", "", 1, "icon-size-5", 3, "svgIcon"], ["matInput", "", 3, "input", "autocomplete", "placeholder"], ["mat-flat-button", "", 1, "sm:w-auto", "w-full", "sm:mt-0", "mt-2", "rounded-lg", "transition", "duration-200", "text-white", "font-semibold", 3, "click", "color", "ngClass", "disabled"], [1, "flex", "flex-auto", "overflow-hidden"], [1, "flex", "flex-auto", "flex-col", "overflow-hidden", "sm:overflow-y-auto", "bg-gray-100"], ["mat-stretch-tabs", "false", 1, "sm:px-2", 3, "selectedIndexChange", "selectedTabChange", "animationDuration", "selectedIndex"], ["label", "En revisi\xF3n"], ["matTabContent", ""], ["label", "Aprobados"], ["label", "Rechazados"], [4, "ngIf", "ngIfElse"], [3, "columns", "displayedColumns", "columnPropertyMap", "data", "buttons", "searchTerm"], [1, "inset-0", "min-w-0", "overflow-auto", "print:overflow-visible"], [1, "inline-block", "p-4", "sm:p-2", "print:p-0", "w-full"], [3, "type", "appearance"], ["fuseAlertTitle", ""]], template: function GridConsumosComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "div", 4);
    \u0275\u0275text(3, "Detalle Consumo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 5)(5, "mat-form-field", 6);
    \u0275\u0275element(6, "mat-icon", 7);
    \u0275\u0275elementStart(7, "input", 8);
    \u0275\u0275listener("input", function GridConsumosComponent_Template_input_input_7_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.onSearch($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "button", 9);
    \u0275\u0275listener("click", function GridConsumosComponent_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.exportToExcel(ctx.data));
    });
    \u0275\u0275elementStart(9, "span");
    \u0275\u0275text(10, " Exportar ");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(11, "div", 10)(12, "div", 11)(13, "mat-tab-group", 12, 0);
    \u0275\u0275twoWayListener("selectedIndexChange", function GridConsumosComponent_Template_mat_tab_group_selectedIndexChange_13_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.tabIndex, $event) || (ctx.tabIndex = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("selectedTabChange", function GridConsumosComponent_Template_mat_tab_group_selectedTabChange_13_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.tabChanged($event));
    });
    \u0275\u0275elementStart(15, "mat-tab", 13);
    \u0275\u0275template(16, GridConsumosComponent_ng_template_16_Template, 3, 2, "ng-template", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "mat-tab", 15);
    \u0275\u0275template(18, GridConsumosComponent_ng_template_18_Template, 3, 2, "ng-template", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "mat-tab", 16);
    \u0275\u0275template(20, GridConsumosComponent_ng_template_20_Template, 3, 2, "ng-template", 14);
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
    \u0275\u0275property("color", "primary")("ngClass", \u0275\u0275pureFunction2(9, _c0, ctx.data.length, !ctx.data.length))("disabled", !ctx.data.length);
    \u0275\u0275advance(5);
    \u0275\u0275property("animationDuration", "500");
    \u0275\u0275twoWayProperty("selectedIndex", ctx.tabIndex);
  }
}, dependencies: [
  CustomTableComponent,
  MatButton,
  MatFormField,
  MatIcon,
  MatInput,
  MatTab,
  MatTabContent,
  MatTabGroup,
  NgIf,
  FuseAlertComponent,
  NgClass
] });
var GridConsumosComponent = _GridConsumosComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GridConsumosComponent, { className: "GridConsumosComponent", filePath: "src\\app\\pages\\gestion-creditos\\consumos\\grid-consumos\\grid-consumos.component.ts", lineNumber: 43 });
})();

// src/app/pages/gestion-creditos/consumos/form-consumos/form-consumos.component.ts
var _c02 = () => ["/pages/gestion-creditos/consumos/listar"];
function FormConsumosComponent_div_9_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "div", 11)(2, "div", 12)(3, "div", 13)(4, "div")(5, "h3", 14);
    \u0275\u0275text(6, "Empresa");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "p", 15);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 13)(10, "div")(11, "h3", 14);
    \u0275\u0275text(12, "Trabajador");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "p", 15);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 13)(16, "div")(17, "h3", 14);
    \u0275\u0275text(18, "Fecha de compra");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "p", 15);
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 13)(23, "div")(24, "h3", 14);
    \u0275\u0275text(25, "N\xFAmero de factura");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "p", 15);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 13)(29, "div")(30, "h3", 14);
    \u0275\u0275text(31, "Valor factura");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "p", 15);
    \u0275\u0275text(33);
    \u0275\u0275pipe(34, "currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div", 16)(36, "p", 14);
    \u0275\u0275text(37, "Valor cuota");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "p", 15);
    \u0275\u0275text(39);
    \u0275\u0275pipe(40, "currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "div", 17)(42, "p", 14);
    \u0275\u0275text(43, "Cantidad cuotas");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "p", 15);
    \u0275\u0275text(45);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r0.detalle.nombreSubEmpresa);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.detalle.nombreTrabajador);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(21, 7, ctx_r0.detalle.fechaCreacion, "dd/MM/yyyy"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r0.detalle.numeroFactura);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(34, 10, ctx_r0.detalle.montoConsumo));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(40, 12, ctx_r0.detalle.montoCuotas));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.detalle.cantidadCuotas);
  }
}
function FormConsumosComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275template(1, FormConsumosComponent_div_9_div_1_Template, 46, 14, "div", 9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.detalle);
  }
}
var _FormConsumosComponent = class _FormConsumosComponent {
  constructor() {
    this.toasService = inject(ToastAlertsService);
    this.fuseService = inject(FuseConfirmationService);
    this.estadosDatosService = inject(EstadosDatosService);
    this.detalleConsumoService = inject(DetalleConsumoService);
    this.activatedRoute = inject(ActivatedRoute);
    this.router = inject(Router);
    this.swalService = inject(SwalService);
    this.idCredito = "";
    this.CodigosDetalleConsumo = CodigosDetalleConsumo;
  }
  ngOnInit() {
    this.idCredito = this.activatedRoute.snapshot.paramMap.get("id");
    this.getDetalle(this.idCredito);
  }
  getDetalle(id) {
    this.subcription$ = this.detalleConsumoService.getConsumo(id).subscribe((response) => {
      console.log(response);
      this.detalle = response.data;
    });
  }
  onSave() {
    const data = {
      idEstado: CodigosDetalleConsumo.APROBADA,
      id: this.detalle.id
    };
    const dialog = this.fuseService.open(__spreadValues({}, guardar));
    dialog.afterClosed().subscribe((response) => {
      if (response === "confirmed") {
        this.subcription$ = this.detalleConsumoService.patchConsumo(data).subscribe((response2) => {
          if (response2.isExitoso) {
            this.swalService.ToastAler({
              icon: "success",
              title: "Registro Creado o Actualizado con Exito.",
              timer: 4e3
            });
            this.router.navigate(["/pages/gestion-creditos/consumos/listar"]);
            this.estadosDatosService.stateGridSolicitudes.next({ state: true, tab: 0 });
          }
        }, (error) => {
          this.swalService.ToastAler({
            icon: "error",
            title: "Ha ocurrido un error al crear el registro!",
            timer: 4e3
          });
        });
      }
    });
  }
  onReject() {
    const data = {
      idEstado: CodigosDetalleConsumo.RECHAZADA,
      id: this.detalle.id
    };
    const dialog = this.fuseService.open(__spreadValues({}, guardar));
    dialog.afterClosed().subscribe((response) => {
      if (response === "confirmed") {
        this.subcription$ = this.detalleConsumoService.patchConsumo(data).subscribe((response2) => {
          if (response2.isExitoso) {
            this.toasService.toasAlertWarn({
              message: "Registro Creado o Actualizado con Exito.",
              actionMessage: "Cerrar",
              duration: 3e3
            });
            this.router.navigate(["/pages/gestion-creditos/consumos/listar"]);
            this.estadosDatosService.stateGridSolicitudes.next({ state: true, tab: 0 });
          }
        }, (error) => {
          this.toasService.toasAlertWarn({
            message: "Ha ocurrido un error!!!!",
            actionMessage: "Cerrar",
            duration: 3e3
          });
        });
      }
    });
  }
};
_FormConsumosComponent.\u0275fac = function FormConsumosComponent_Factory(t) {
  return new (t || _FormConsumosComponent)();
};
_FormConsumosComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FormConsumosComponent, selectors: [["app-form-consumos"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 10, vars: 4, consts: [["cdkScrollable", "", 1, "absolute", "inset-0", "min-w-0", "overflow-auto", "print:overflow-visible"], [1, "inline-block", "p-6", "sm:p-10", "print:p-0", "w-full"], [1, "bg-card", "shadow", "print:bg-transparent", "print:p-0", "print:shadow-none", "rounded-2xl", "max-w-xl", "mx-auto", "overflow-hidden"], [1, "bg-crediblue-50", "px-6", "py-4", "flex", "items-center", "justify-between"], ["mat-button", "", 1, "flex", "items-center", 3, "routerLink"], [1, "text-white", 3, "svgIcon"], [1, "text-xl", "font-bold", "text-white"], ["class", "p-6", 4, "ngIf"], [1, "p-6"], ["class", "w-full h-full px-4", 4, "ngIf"], [1, "w-full", "h-full", "px-4"], [1, "max-w-2xl", "mx-auto", "p-4", "bg-white", "shadow-lg", "rounded-lg"], [1, "space-y-4"], [1, "flex", "justify-between", "items-center", "border-b", "pb-2"], [1, "text-lg", "font-semibold", "text-gray-700"], [1, "text-lg", "font-bold", "text-gray-800"], [1, "flex", "justify-between", "items-center"], [1, "flex", "justify-between", "items-center", "pt-4", "border-t"]], template: function FormConsumosComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div")(5, "a", 4);
    \u0275\u0275element(6, "mat-icon", 5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "h2", 6);
    \u0275\u0275text(8, "Detalle consumo");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(9, FormConsumosComponent_div_9_Template, 2, 1, "div", 7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(3, _c02));
    \u0275\u0275advance();
    \u0275\u0275property("svgIcon", "heroicons_outline:arrow-long-left");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx.detalle);
  }
}, dependencies: [
  CdkScrollable,
  CurrencyPipe,
  DatePipe,
  MatAnchor,
  MatIcon,
  NgIf,
  RouterLink
] });
var FormConsumosComponent = _FormConsumosComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FormConsumosComponent, { className: "FormConsumosComponent", filePath: "src\\app\\pages\\gestion-creditos\\consumos\\form-consumos\\form-consumos.component.ts", lineNumber: 33 });
})();

// src/app/pages/gestion-creditos/consumos/main-detalle-consumo/main-detalle-consumo.component.ts
var _c03 = () => ["Super Admin", "Analista"];
function MainDetalleConsumoComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "fuse-card", 5)(1, "div", 6)(2, "div", 7)(3, "span", 8);
    \u0275\u0275text(4, "Realizar Detalle Consumo");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(5, "svg", 9);
    \u0275\u0275element(6, "path", 10);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(7, "button", 12);
    \u0275\u0275text(8, " Realizar Detalle Consumo ");
    \u0275\u0275elementEnd()();
  }
}
var _MainDetalleConsumoComponent = class _MainDetalleConsumoComponent {
  constructor() {
    this._authService = inject(AuthService);
  }
};
_MainDetalleConsumoComponent.\u0275fac = function MainDetalleConsumoComponent_Factory(t) {
  return new (t || _MainDetalleConsumoComponent)();
};
_MainDetalleConsumoComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MainDetalleConsumoComponent, selectors: [["app-main-detalle-consumo"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 16, vars: 2, consts: [[1, "bg-card", "flex", "min-w-0", "flex-auto", "flex-col", "dark:bg-transparent", "sm:absolute", "sm:inset-0", "sm:overflow-hidden"], [1, "relative", "flex", "flex-0", "flex-col", "border-b", "px-6", "py-8", "sm:flex-row", "sm:items-center", "sm:justify-between", "md:px-8"], [1, "text-3xl", "font-semibold", "tracking-tight"], [1, "flex", "flex-auto", "overflow-hidden"], [1, "flex", "flex-auto", "flex-row", "items-baseline", "flex-wrap", "gap-6", "justify-center", "overflow-hidden", "sm:overflow-y-auto", "bg-gray-100", "sm:p-2"], [1, "filter-list", "flex", "w-full", "max-w-lg", "flex-col", "p-8", "sm:p-10", "mt-6", "shadow-xl", "rounded-xl", "bg-white", "hover:shadow-2xl", "transition-all", "duration-300", "transform", "hover:scale-105"], [1, "flex", "justify-between", "items-center", "mb-6"], [1, "flex", "items-center", "space-x-3"], [1, "font-semibold", "text-2xl", "text-blue-900"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "h-6", "w-6", "text-blue-500"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M13 7H7v6m6 0h5m-8 4H7m6 0h5"], ["routerLink", "/pages/gestion-creditos/consumos/listar", 1, "w-full", "py-3", "text-white", "bg-crediblue-50", "hover:bg-blue-600", "rounded-lg", "font-semibold", "text-sm", "transition-all", "duration-300", "shadow-lg", "hover:shadow-xl"], ["routerLink", "/pages/gestion-creditos/detalle-consumo", 1, "w-full", "py-3", "text-white", "bg-crediblue-50", "hover:bg-blue-600", "rounded-lg", "font-semibold", "text-sm", "transition-all", "duration-300", "shadow-lg", "hover:shadow-xl"]], template: function MainDetalleConsumoComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
    \u0275\u0275text(3, "Detalle consumo");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 3)(5, "div", 4)(6, "fuse-card", 5)(7, "div", 6)(8, "div", 7)(9, "span", 8);
    \u0275\u0275text(10, "Consumos Realizados");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(11, "svg", 9);
    \u0275\u0275element(12, "path", 10);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(13, "button", 11);
    \u0275\u0275text(14, " Consumos Realizados ");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(15, MainDetalleConsumoComponent_Conditional_15_Template, 9, 0, "fuse-card", 5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(15);
    \u0275\u0275conditional(!\u0275\u0275pureFunction0(1, _c03).includes(ctx._authService.getRole()) ? 15 : -1);
  }
}, dependencies: [
  FuseCardComponent,
  RouterLink
] });
var MainDetalleConsumoComponent = _MainDetalleConsumoComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MainDetalleConsumoComponent, { className: "MainDetalleConsumoComponent", filePath: "src\\app\\pages\\gestion-creditos\\consumos\\main-detalle-consumo\\main-detalle-consumo.component.ts", lineNumber: 16 });
})();

// src/app/pages/gestion-creditos/consumos/consumos.routes.ts
var consumos_routes_default = [
  {
    path: "",
    component: MainDetalleConsumoComponent
  },
  {
    path: "listar",
    component: GridConsumosComponent
  },
  {
    path: "detalle/:id",
    component: FormConsumosComponent
  }
];
export {
  consumos_routes_default as default
};
//# sourceMappingURL=chunk-OPTVXSYG.js.map
