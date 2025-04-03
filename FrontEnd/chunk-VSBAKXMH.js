import {
  ErrorHandlerService
} from "./chunk-LOA36BZQ.js";
import {
  SolicitudesService
} from "./chunk-W23MYNPT.js";
import {
  CodigosEstadosSolicitudes,
  EstadosSolicitudes
} from "./chunk-FXAV5AVP.js";
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
  FormatoOptionsPipe
} from "./chunk-SQJDTHWM.js";
import {
  CuentasBancariasService
} from "./chunk-RZQCSNVR.js";
import {
  MatStep,
  MatStepper,
  MatStepperNext,
  MatStepperPrevious
} from "./chunk-P3XZLDFI.js";
import {
  EmpleadosService
} from "./chunk-WT4TBEYC.js";
import {
  CodigosDesembolso
} from "./chunk-VUEAR5BO.js";
import {
  DetalleConsumoService
} from "./chunk-S23R3MHA.js";
import {
  TipoCuentasService
} from "./chunk-HEWZPKYP.js";
import {
  DateAdapterService
} from "./chunk-K5K55XKD.js";
import {
  NgxMaskDirective,
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
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  MatError,
  MatFormField,
  MatInput,
  MatLabel,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-IZMZQUCC.js";
import {
  AesEncryptionService
} from "./chunk-4LX6KC25.js";
import {
  ActivatedRoute,
  Router,
  RouterLink
} from "./chunk-L2WXMDPA.js";
import {
  MatDialog
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
  DateAdapter,
  DatePipe,
  HttpClient,
  MAT_DATE_LOCALE,
  MatAnchor,
  MatButton,
  MatIcon,
  MatOption,
  NgClass,
  NgForOf,
  NgIf,
  inject,
  map,
  of,
  switchMap,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
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
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction2,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate3,
  ɵɵtextInterpolate4,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-WGDVSMOG.js";
import {
  __objRest,
  __spreadValues
} from "./chunk-AYDYM6RQ.js";

// src/app/core/services/desembolsos.service.ts
var _DesembolsosService = class _DesembolsosService {
  constructor(_http, AppSettings) {
    this._http = _http;
    this.AppSettings = AppSettings;
  }
  postDesembolso(data) {
    return this._http.post(this.AppSettings.detalleConsumos.url.desembolsoBase, data);
  }
  patchDesembolso(data) {
    const id = data.id;
    delete data.id;
    const { idEstado, cuentaDestino, numFactura, idCuentaBancaria } = data;
    return this._http.patch(`${this.AppSettings.detalleConsumos.url.base}/Desembolso/${id}?idEstado=${idEstado}&numFactura=${numFactura}&cuentaDestino=${cuentaDestino}&idCuentaBancaria=${idCuentaBancaria}`, {});
  }
};
_DesembolsosService.\u0275fac = function DesembolsosService_Factory(t) {
  return new (t || _DesembolsosService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(AppSettingsService));
};
_DesembolsosService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _DesembolsosService, factory: _DesembolsosService.\u0275fac, providedIn: "root" });
var DesembolsosService = _DesembolsosService;

// src/app/pages/gestion-creditos/desembolsos/form-desembolso/form-desembolso.component.ts
var _c0 = ["stepper"];
function FormDesembolsoComponent_mat_error_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "El campo es requerido!");
    \u0275\u0275elementEnd();
  }
}
function FormDesembolsoComponent_mat_error_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "El valor es requerido!");
    \u0275\u0275elementEnd();
  }
}
function FormDesembolsoComponent_mat_error_65_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "El valor ingresado no puede superar el cupo disponible!");
    \u0275\u0275elementEnd();
  }
}
function FormDesembolsoComponent_mat_option_71_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 28);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cuenta_r2 = ctx.$implicit;
    \u0275\u0275property("value", cuenta_r2.idTipoCuenta);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate3("", cuenta_r2.nombreBanco, " - ", cuenta_r2.nombreTipoCuenta, " - ", cuenta_r2.numeroCuenta, "");
  }
}
function FormDesembolsoComponent_mat_error_77_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "El campo es requerido!");
    \u0275\u0275elementEnd();
  }
}
function FormDesembolsoComponent_div_84_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 29)(1, "div", 30)(2, "div", 31)(3, "h2", 32);
    \u0275\u0275text(4, "Resumen de desembolso");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 33);
    \u0275\u0275text(6, "Revise los detalles");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 34)(8, "div", 35)(9, "div")(10, "h3", 36);
    \u0275\u0275text(11, "Fecha");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "p", 37);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 35)(16, "div")(17, "h3", 36);
    \u0275\u0275text(18, "N\xFAmero de comprobante");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "p", 37);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 35)(22, "div")(23, "h3", 36);
    \u0275\u0275text(24, "Valor");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "p", 37);
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 35)(29, "div")(30, "h3", 36);
    \u0275\u0275text(31, "Cuenta de origen");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "p", 37);
    \u0275\u0275text(33);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "div", 38)(35, "div")(36, "h3", 36);
    \u0275\u0275text(37, "Cuenta destino");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "p", 37);
    \u0275\u0275text(39);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(40, "div", 39)(41, "button", 40);
    \u0275\u0275listener("click", function FormDesembolsoComponent_div_84_Template_button_click_41_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.cerrar());
    });
    \u0275\u0275text(42, "Cerrar");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(13);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(14, 5, ctx_r3.detaleConsumo.fechaCreacion, "dd/MM/yyyy"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r3.detaleConsumo.numeroFactura);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(27, 8, ctx_r3.detaleConsumo.montoConsumo, "USD"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r3.detaleConsumo.cuentaOrigen);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r3.detaleConsumo.cuentaDestino);
  }
}
var maskConfig = {
  validation: false
};
var _FormDesembolsoComponent = class _FormDesembolsoComponent {
  constructor() {
    this.fuseService = inject(FuseConfirmationService);
    this.estadosDatosService = inject(EstadosDatosService);
    this.empleadosServices = inject(EmpleadosService);
    this.cuentasServices = inject(CuentasBancariasService);
    this.tipoCuentaService = inject(TipoCuentasService);
    this.datePipe = inject(DatePipe);
    this.currencyPipe = inject(CurrencyPipe);
    this.router = inject(Router);
    this.fb = inject(FormBuilder);
    this.detalleConsumo = inject(DetalleConsumoService);
    this.cuentas = [];
    this.desembolsoService = inject(DesembolsosService);
    this.swalService = inject(SwalService);
    this.solicitudService = inject(SolicitudesService);
    this.detalleConsumoService = inject(DetalleConsumoService);
    this.activatedRoute = inject(ActivatedRoute);
    this.errorHandlerService = inject(ErrorHandlerService);
    this.showAlert = false;
    this.aesEncriptService = inject(AesEncryptionService);
    this.alert = {
      type: "success",
      message: ""
    };
    this.isStepThreeComplete = false;
    this.creditos = [];
    this.focus = focus;
    this.FormatoOptionsPipe = FormatoOptionsPipe;
  }
  ngOnDestroy() {
    this.subscription$.unsubscribe();
  }
  ngOnInit() {
    this.createForm();
    this.getCuentas();
    const id = this.activatedRoute.snapshot.paramMap.get("id");
    this.getSolicitud(id);
  }
  cerrar() {
    this.router.navigate(["/pages/gestion-creditos/desembolsos"]);
  }
  getSolicitud(id) {
    let cupo;
    let cuentaDestinoInformativa;
    this.subscription$ = this.detalleConsumoService.getDetalleConsumoDesembolso(id).pipe(switchMap((response) => {
      const dataForm = {
        idTipoDoc: response.data.trabajador.idTipoDoc,
        numDocumento: response.data.trabajador.numDoc
      };
      cupo = response.data.montoConsumo;
      cuentaDestinoInformativa = response.data.bancotrabajador + " - " + response.data.tipoCuentaTrabajador + " - " + response.data.numeroCuentaTrabajador;
      return this.empleadosServices.getEmpleadoParams(dataForm);
    })).subscribe((response) => {
      if (response) {
        this.showAlert = false;
        const campos = {
          numDoc: response.data.numDoc,
          primerNombre: response.data.primerNombre,
          segundoNombre: response.data.segundoNombre,
          primerApellido: response.data.primerApellido,
          segundoApellido: response.data.segundoApellido,
          idTrabajador: response.data.id,
          correo: response.data.correo,
          credito: response.data.creditos[0].numCredito + " - " + this.currencyPipe.transform(this.aesEncriptService.decrypt(response.data.creditos[0].cupoDisponible), "USD", "symbol", "1.2-2"),
          idCredito: response.data.creditos[0].id,
          numCuentaBancaria: response.data.numCuentaBancaria,
          cuentaDestinoInformativa,
          idTipoCuenta: response.data.idTipoCuenta,
          nombreTipoCuenta: response.data.nombreTipoCuenta,
          id
        };
        this.secondFormGroup.patchValue(campos);
        this.thirdFormGroup.patchValue({
          idCuentaBancaria: campos.idTipoCuenta,
          cuentaDestino: campos.numCuentaBancaria,
          cuentaDestinoInformativa,
          montoConsumo: cupo,
          nombreTipoCuenta: campos.nombreTipoCuenta
        });
        this.creditos = response.data.creditos;
      }
    }, (error) => {
      this.alert = {
        type: "error",
        message: "El trabajador no existe!"
      };
      this.showAlert = true;
    });
  }
  getCuentas() {
    this.subscription$ = this.cuentasServices.getCuentasActivas().subscribe((response) => {
      this.cuentas = response.data;
      this.thirdFormGroup.get("cuentaOrigen").setValue(response.data[0].numeroCuenta);
    });
  }
  selectedData(event) {
    const id = event.value;
    const origenCuenta = this.cuentas.find((item) => item.idTipoCuenta == id);
    this.thirdFormGroup.get("cuentaOrigen").setValue(origenCuenta.numeroCuenta);
    this.thirdFormGroup.get("nombreTipoCuenta").setValue(origenCuenta.nombreTipoCuenta);
  }
  selected(matSelectChange) {
    const creditos = matSelectChange.value;
    this.compareValor = creditos.cupoDisponible;
    this.thirdFormGroup.get("montoConsumo").setValidators(validateNumbers(this.compareValor));
    this.thirdFormGroup.get("montoConsumo").updateValueAndValidity();
  }
  compareWithConstants(control) {
    const inputValue = control.value;
    const idCredito = this.secondFormGroup.get("idCredito")?.value;
    if (!idCredito || !idCredito.montoConsumo) {
      console.error("No se encontr\xF3 el objeto idCredito o montoConsumo");
      return of(null);
    }
    console.log(inputValue);
    console.log(idCredito.montoConsumo);
    if (inputValue > idCredito.montoConsumo) {
      return of({ notEqual: true });
    }
    return of(null);
  }
  get montoConsumo() {
    return this.thirdFormGroup.get("montoConsumo");
  }
  get comprobante() {
    return this.thirdFormGroup.get("numFactura");
  }
  get cuentaDestino() {
    return this.thirdFormGroup.get("cuentaDestino");
  }
  onSave() {
    if (this.thirdFormGroup.valid) {
      const _a = this.thirdFormGroup.getRawValue(), { montoConsumo, idCuentaBancaria, cuentaDestino, cuentaDestinoInformativa, cuentaOrigen, nombreTipoCuenta } = _a, form = __objRest(_a, ["montoConsumo", "idCuentaBancaria", "cuentaDestino", "cuentaDestinoInformativa", "cuentaOrigen", "nombreTipoCuenta"]);
      const { id, idCredito, idTrabajador } = this.secondFormGroup.getRawValue();
      console.log(idCredito);
      const cuenta = this.cuentas;
      const resultadoCuenta = cuenta.filter((cuenta2) => {
        if (cuenta2.idTipoCuenta == idCuentaBancaria) {
          return cuenta2.id;
        }
      });
      console.log(resultadoCuenta[0].id);
      const createData = __spreadValues({
        id,
        idEstado: CodigosEstadosSolicitudes.REALIZADA,
        cuentaDestino: cuentaDestinoInformativa,
        idCuentaBancaria: resultadoCuenta[0].id
      }, form);
      console.log(createData);
      const dialog = this.fuseService.open(__spreadValues({}, guardar));
      dialog.afterClosed().subscribe((response) => {
        if (response === "confirmed") {
          this.desembolsoService.patchDesembolso(createData).subscribe((res) => {
            console.log(res);
            this.swalService.ToastAler({
              icon: "success",
              title: "Registro Creado o Actualizado con Exito.",
              timer: 4e3
            });
            this.isStepThreeComplete = true;
            this.getResumenCompra(idTrabajador);
          }, (error) => {
            this.errorHandlerService.errorHandler(error);
          });
        }
      });
    }
  }
  getResumenCompra(id) {
    this.subscription$ = this.detalleConsumo.getResumen(id).pipe(map((response) => {
      if (response.data.montoConsumo) {
        response.data.montoConsumo = this.aesEncriptService.decrypt(response.data.montoConsumo);
      }
      return response;
    })).subscribe((response) => {
      if (response) {
        this.detaleConsumo = response.data;
        this.stepper.next();
      }
    });
  }
  createForm() {
    this.secondFormGroup = this.fb.group({
      numDoc: ["", Validators.required],
      primerNombre: ["", Validators.required],
      segundoNombre: [""],
      primerApellido: ["", Validators.required],
      segundoApellido: [""],
      idTrabajador: [""],
      correo: ["", Validators.required],
      credito: ["", Validators.required],
      idCredito: ["", Validators.required],
      numCuentaBancaria: [""],
      cuentaDestinoInformativa: [""],
      idTipoCuenta: [""],
      id: [""]
    });
    this.thirdFormGroup = this.fb.group({
      montoConsumo: [{ value: 0, disabled: true }, [Validators.required]],
      numFactura: ["", Validators.required],
      idCuentaBancaria: ["", Validators.required],
      cuentaDestino: ["", Validators.required],
      cuentaDestinoInformativa: [{ value: 0, disabled: true }],
      nombreTipoCuenta: [{ value: 0, disabled: true }, Validators.required],
      cuentaOrigen: [{ value: 0, disabled: true }, Validators.required]
    });
  }
};
_FormDesembolsoComponent.\u0275fac = function FormDesembolsoComponent_Factory(t) {
  return new (t || _FormDesembolsoComponent)();
};
_FormDesembolsoComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FormDesembolsoComponent, selectors: [["app-form-desembolso"]], viewQuery: function FormDesembolsoComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(_c0, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.stepper = _t.first);
  }
}, standalone: true, features: [\u0275\u0275ProvidersFeature([
  { provide: DateAdapter, useClass: DateAdapterService },
  { provide: MAT_DATE_LOCALE, useValue: "en-GB" },
  DatePipe,
  CurrencyPipe,
  provideNgxMask(maskConfig)
]), \u0275\u0275StandaloneFeature], decls: 85, vars: 29, consts: [["stepper", ""], ["cdkScrollable", "", 1, "absolute", "inset-0", "flex", "flex-col", "min-w-0", "items-center", "overflow-y-auto", "bg-gray-100", "p-6", "sm:p-8"], [1, "relative", "w-full", "flex-0", "max-w-4xl", "sm:rounded-lg", "overflow-hidden"], [1, "p-2", "text-3xl", "font-semibold", "text-center", "text-gray-800"], [1, "w-full", "px-6", "py-4", 3, "orientation", "linear", "animationDuration"], ["label", "Verificar informaci\xF3n", 3, "stepControl"], [1, "w-full"], [1, "space-y-4", "w-full", "max-w-lg", "mx-auto", 3, "formGroup"], [1, "flex", "flex-col", "sm:flex-row", "gap-4"], ["matInput", "", "readonly", "", 3, "formControlName"], [1, "flex", "flex-col"], [1, "flex", "flex-wrap", "justify-center", "sm:justify-center", "gap-4", "mt-2"], ["mat-button", "", 1, "sm:w-auto", "w-full", "py-2", "px-4", "text-white", "bg-crediorange-100", "rounded-lg", 3, "click"], ["mat-button", "", "matStepperNext", "", 1, "sm:w-auto", "w-full", "py-2", "px-4", "text-white", "bg-crediblue-50", "rounded-lg", "hover:bg-opacity-80", 3, "disabled"], ["label", "Confirmar desembolso"], [1, "w-full", "h-full", "p-4", "sm:p-8"], [1, "flex", "flex-col", "sm:flex-row", "items-baseline", "gap-4"], ["floatLabel", "always", 1, "w-full"], ["matInput", "", "placeholder", "N\xFAmero de comprobante", 3, "formControlName"], [4, "ngIf"], ["matInput", "", "thousandSeparator", ".", "placeholder", "Valor", 3, "formControlName", "mask"], ["placeholder", "Cuenta de origen", 3, "selectionChange", "formControlName"], [3, "value", 4, "ngFor", "ngForOf"], ["matInput", "", "placeholder", "Cuenta destino", 3, "formControlName"], ["mat-button", "", "matStepperPrevious", "", 1, "sm:w-auto", "w-full", "py-2", "px-4", "text-white", "bg-gray-500", "rounded-lg", "hover:bg-gray-600"], ["mat-button", "", 1, "sm:w-auto", "w-full", "py-2", "px-4", "text-white", "bg-crediblue-50", "rounded-lg", "hover:bg-opacity-80", 3, "click", "disabled"], ["label", "Resumen de desembolso", 3, "completed"], ["class", "w-full px-4 sm:px-8", 4, "ngIf"], [3, "value"], [1, "w-full", "px-4", "sm:px-8"], [1, "max-w-2xl", "mx-auto", "p-6", "bg-white", "shadow-lg", "rounded-lg"], [1, "border-b", "pb-4", "mb-4", "text-center"], [1, "text-2xl", "font-bold", "text-gray-800"], [1, "text-sm", "text-gray-500"], [1, "space-y-4"], [1, "flex", "justify-between", "items-center", "border-b", "pb-2"], [1, "text-lg", "font-semibold", "text-gray-700"], [1, "text-lg", "font-bold", "text-gray-800"], [1, "flex", "justify-between", "items-center"], [1, "py-4"], ["mat-button", "", 1, "w-full", "py-2", "px-4", "text-white", "bg-crediblue-50", "rounded-lg", "hover:bg-opacity-80", 3, "click"]], template: function FormDesembolsoComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-stepper", 4, 0)(6, "mat-step", 5)(7, "div", 6)(8, "form", 7)(9, "div", 8)(10, "mat-form-field", 6)(11, "mat-label");
    \u0275\u0275text(12, "Primer nombre");
    \u0275\u0275elementEnd();
    \u0275\u0275element(13, "input", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "mat-form-field", 6)(15, "mat-label");
    \u0275\u0275text(16, "Segundo nombre");
    \u0275\u0275elementEnd();
    \u0275\u0275element(17, "input", 9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 8)(19, "mat-form-field", 6)(20, "mat-label");
    \u0275\u0275text(21, "Primer apellido");
    \u0275\u0275elementEnd();
    \u0275\u0275element(22, "input", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "mat-form-field", 6)(24, "mat-label");
    \u0275\u0275text(25, "Segundo apellido");
    \u0275\u0275elementEnd();
    \u0275\u0275element(26, "input", 9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 8)(28, "mat-form-field", 6)(29, "mat-label");
    \u0275\u0275text(30, "Identificaci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275element(31, "input", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "mat-form-field", 6)(33, "mat-label");
    \u0275\u0275text(34, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275element(35, "input", 9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "div", 10)(37, "mat-form-field", 6)(38, "mat-label");
    \u0275\u0275text(39, "Cr\xE9dito / Cupo disponible");
    \u0275\u0275elementEnd();
    \u0275\u0275element(40, "input", 9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "div", 10)(42, "mat-form-field", 6)(43, "mat-label");
    \u0275\u0275text(44, "Cuenta destino: Banco - Tipo - N\xFAmero");
    \u0275\u0275elementEnd();
    \u0275\u0275element(45, "input", 9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(46, "div", 11)(47, "button", 12);
    \u0275\u0275listener("click", function FormDesembolsoComponent_Template_button_click_47_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.cerrar());
    });
    \u0275\u0275text(48, "Cancelar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "button", 13);
    \u0275\u0275text(50, "Siguiente");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(51, "mat-step", 14)(52, "div", 15)(53, "form", 7)(54, "div", 16)(55, "mat-form-field", 17)(56, "mat-label");
    \u0275\u0275text(57, "N\xFAmero de comprobante");
    \u0275\u0275elementEnd();
    \u0275\u0275element(58, "input", 18);
    \u0275\u0275template(59, FormDesembolsoComponent_mat_error_59_Template, 2, 0, "mat-error", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "mat-form-field", 17)(61, "mat-label");
    \u0275\u0275text(62, "Valor de la transferencia");
    \u0275\u0275elementEnd();
    \u0275\u0275element(63, "input", 20);
    \u0275\u0275template(64, FormDesembolsoComponent_mat_error_64_Template, 2, 0, "mat-error", 19)(65, FormDesembolsoComponent_mat_error_65_Template, 2, 0, "mat-error", 19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(66, "div", 8)(67, "mat-form-field", 17)(68, "mat-label");
    \u0275\u0275text(69, "Cuenta origen: Banco - Tipo - N\xFAmero");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "mat-select", 21);
    \u0275\u0275listener("selectionChange", function FormDesembolsoComponent_Template_mat_select_selectionChange_70_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.selectedData($event));
    });
    \u0275\u0275template(71, FormDesembolsoComponent_mat_option_71_Template, 2, 4, "mat-option", 22);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(72, "div", 8)(73, "mat-form-field", 17)(74, "mat-label");
    \u0275\u0275text(75, "Cuenta destino: Banco - Tipo - N\xFAmero");
    \u0275\u0275elementEnd();
    \u0275\u0275element(76, "input", 23);
    \u0275\u0275template(77, FormDesembolsoComponent_mat_error_77_Template, 2, 0, "mat-error", 19);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(78, "div", 11)(79, "button", 24);
    \u0275\u0275text(80, "Anterior");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(81, "button", 25);
    \u0275\u0275listener("click", function FormDesembolsoComponent_Template_button_click_81_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.onSave());
    });
    \u0275\u0275text(82, "Confirmar");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(83, "mat-step", 26);
    \u0275\u0275template(84, FormDesembolsoComponent_div_84_Template, 43, 11, "div", 27);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", "Desembolso", " ");
    \u0275\u0275advance();
    \u0275\u0275property("orientation", "vertical")("linear", true)("animationDuration", "1500");
    \u0275\u0275advance(2);
    \u0275\u0275property("stepControl", ctx.secondFormGroup);
    \u0275\u0275advance(2);
    \u0275\u0275property("formGroup", ctx.secondFormGroup);
    \u0275\u0275advance(5);
    \u0275\u0275property("formControlName", "primerNombre");
    \u0275\u0275advance(4);
    \u0275\u0275property("formControlName", "segundoNombre");
    \u0275\u0275advance(5);
    \u0275\u0275property("formControlName", "primerApellido");
    \u0275\u0275advance(4);
    \u0275\u0275property("formControlName", "segundoApellido");
    \u0275\u0275advance(5);
    \u0275\u0275property("formControlName", "numDoc");
    \u0275\u0275advance(4);
    \u0275\u0275property("formControlName", "correo");
    \u0275\u0275advance(5);
    \u0275\u0275property("formControlName", "credito");
    \u0275\u0275advance(5);
    \u0275\u0275property("formControlName", "cuentaDestinoInformativa");
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx.secondFormGroup.invalid);
    \u0275\u0275advance(4);
    \u0275\u0275property("formGroup", ctx.thirdFormGroup);
    \u0275\u0275advance(5);
    \u0275\u0275property("formControlName", "numFactura");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx.comprobante.touched || ctx.comprobante.dirty) && ctx.comprobante.hasError("required"));
    \u0275\u0275advance(4);
    \u0275\u0275property("formControlName", "montoConsumo")("mask", "separator.0");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx.montoConsumo.touched || ctx.montoConsumo.dirty) && ctx.montoConsumo.hasError("required"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx.montoConsumo.touched || ctx.montoConsumo.dirty) && ctx.montoConsumo.hasError("notEqual"));
    \u0275\u0275advance(5);
    \u0275\u0275property("formControlName", "idCuentaBancaria");
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx.cuentas);
    \u0275\u0275advance(5);
    \u0275\u0275property("formControlName", "cuentaDestinoInformativa");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx.cuentaDestino.touched || ctx.cuentaDestino.dirty) && ctx.cuentaDestino.hasError("required"));
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx.thirdFormGroup.invalid);
    \u0275\u0275advance(2);
    \u0275\u0275property("completed", ctx.isStepThreeComplete);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.detaleConsumo);
  }
}, dependencies: [
  CdkScrollable,
  CurrencyPipe,
  DatePipe,
  FormsModule,
  \u0275NgNoValidate,
  DefaultValueAccessor,
  NgControlStatus,
  NgControlStatusGroup,
  MatButton,
  MatError,
  MatFormField,
  MatInput,
  MatLabel,
  MatOption,
  MatSelect,
  MatStep,
  MatStepper,
  MatStepperNext,
  MatStepperPrevious,
  NgForOf,
  NgIf,
  NgxMaskDirective,
  ReactiveFormsModule,
  FormGroupDirective,
  FormControlName
], styles: ["\n\n  .mat-vertical-stepper-header {\n  pointer-events: none !important;\n}\n/*# sourceMappingURL=form-desembolso.component.css.map */"] });
var FormDesembolsoComponent = _FormDesembolsoComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FormDesembolsoComponent, { className: "FormDesembolsoComponent", filePath: "src\\app\\pages\\gestion-creditos\\desembolsos\\form-desembolso\\form-desembolso.component.ts", lineNumber: 85 });
})();
function validateNumbers(valoraComparar) {
  return (control) => {
    const value = control.value;
    console.log(valoraComparar);
    if (value > valoraComparar) {
      return { notEqual: true };
    }
    return null;
  };
}

// src/app/pages/gestion-creditos/desembolsos/grid-desembolsos/grid-desembolsos.component.ts
var _c02 = (a0, a1) => ({ "bg-green-700": a0, "bg-credigray-100": a1 });
function GridDesembolsosComponent_ng_template_16_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "app-custom-table", 19);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("columns", ctx_r1.columns)("displayedColumns", ctx_r1.columns)("columnPropertyMap", ctx_r1.columnPropertyMap)("data", ctx_r1.data)("buttons", ctx_r1.buttonsPendiente)("searchTerm", ctx_r1.searchTerm);
  }
}
function GridDesembolsosComponent_ng_template_16_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "div", 21)(2, "fuse-alert", 22)(3, "span", 23);
    \u0275\u0275text(4, "Informaci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, " No hay solicitudes hasta el momento. ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275property("type", "info")("appearance", "outline");
  }
}
function GridDesembolsosComponent_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, GridDesembolsosComponent_ng_template_16_ng_container_0_Template, 2, 6, "ng-container", 18)(1, GridDesembolsosComponent_ng_template_16_ng_template_1_Template, 6, 2, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const noData_r3 = \u0275\u0275reference(2);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngIf", ctx_r1.data.length)("ngIfElse", noData_r3);
  }
}
function GridDesembolsosComponent_ng_template_18_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "app-custom-table", 19);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("columns", ctx_r1.columns)("displayedColumns", ctx_r1.columns)("columnPropertyMap", ctx_r1.columnPropertyMap)("data", ctx_r1.data)("buttons", ctx_r1.buttons)("searchTerm", ctx_r1.searchTerm);
  }
}
function GridDesembolsosComponent_ng_template_18_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "div", 21)(2, "fuse-alert", 22)(3, "span", 23);
    \u0275\u0275text(4, "Informaci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, " No hay solicitudes rechazadas hasta el momento. ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275property("type", "info")("appearance", "outline");
  }
}
function GridDesembolsosComponent_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, GridDesembolsosComponent_ng_template_18_ng_container_0_Template, 2, 6, "ng-container", 18)(1, GridDesembolsosComponent_ng_template_18_ng_template_1_Template, 6, 2, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const noData_r4 = \u0275\u0275reference(2);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngIf", ctx_r1.data.length)("ngIfElse", noData_r4);
  }
}
function GridDesembolsosComponent_ng_template_20_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "app-custom-table", 19);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("columns", ctx_r1.columnsDesembolsos)("displayedColumns", ctx_r1.columnsDesembolsos)("columnPropertyMap", ctx_r1.columnPropertyMapDesembolsos)("data", ctx_r1.data)("buttons", ctx_r1.buttonsApprove)("searchTerm", ctx_r1.searchTerm);
  }
}
function GridDesembolsosComponent_ng_template_20_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "div", 21)(2, "fuse-alert", 22)(3, "span", 23);
    \u0275\u0275text(4, "Informaci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, " No hay solicitudes aprobadas hasta el momento. ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275property("type", "info")("appearance", "outline");
  }
}
function GridDesembolsosComponent_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, GridDesembolsosComponent_ng_template_20_ng_container_0_Template, 2, 6, "ng-container", 18)(1, GridDesembolsosComponent_ng_template_20_ng_template_1_Template, 6, 2, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const noData_r5 = \u0275\u0275reference(2);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngIf", ctx_r1.data.length)("ngIfElse", noData_r5);
  }
}
function GridDesembolsosComponent_ng_template_22_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "app-custom-table", 19);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("columns", ctx_r1.columnsDesembolsosRealizados)("displayedColumns", ctx_r1.columnsDesembolsosRealizados)("columnPropertyMap", ctx_r1.columnPropertyMapDesembolsosRealizados)("data", ctx_r1.data)("buttons", ctx_r1.buttonsView)("searchTerm", ctx_r1.searchTerm);
  }
}
function GridDesembolsosComponent_ng_template_22_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "div", 21)(2, "fuse-alert", 22)(3, "span", 23);
    \u0275\u0275text(4, "Informaci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, " No hay solicitudes aprobadas hasta el momento. ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275property("type", "info")("appearance", "outline");
  }
}
function GridDesembolsosComponent_ng_template_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, GridDesembolsosComponent_ng_template_22_ng_container_0_Template, 2, 6, "ng-container", 18)(1, GridDesembolsosComponent_ng_template_22_ng_template_1_Template, 6, 2, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const noData_r6 = \u0275\u0275reference(2);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngIf", ctx_r1.data.length)("ngIfElse", noData_r6);
  }
}
var _GridDesembolsosComponent = class _GridDesembolsosComponent {
  constructor() {
    this.datePipe = inject(DatePipe);
    this.currencyPipe = inject(CurrencyPipe);
    this.router = inject(Router);
    this.selectedTab = CodigosEstadosSolicitudes.PENDIENTE;
    this._matDialog = inject(MatDialog);
    this.estadoDatosService = inject(EstadosDatosService);
    this.solicitudService = inject(SolicitudesService);
    this.detalleConsumoService = inject(DetalleConsumoService);
    this.fuseService = inject(FuseConfirmationService);
    this.aesEncriptService = inject(AesEncryptionService);
    this.exportData = [];
    this.searchTerm = "";
    this.data = [];
    this.columns = ["Fecha de solicitud", "Identificaci\xF3n", "Trabajador", "Empresa", "Cargo", "Tipo de contrato", "Fecha de inicio contrato", "Fecha fin de contrato", "Salario devengado", "Cupo solicitado", "Tipo de solicitud", "Tipo de cuenta", "Banco", "N\xFAmero de cuenta", "Estado"];
    this.columnPropertyMap = {
      "Fecha de solicitud": "fechaCreacion",
      "Identificaci\xF3n": "documentoTrabajador",
      "Trabajador": "nombreTrabajador",
      "Empresa": "nombreSubEmpresa",
      "Cargo": "cargoTrabajador",
      "Tipo de contrato": "tipoContratoTrabajador",
      "Fecha de inicio contrato": "fechaInicioContratoTrabajador",
      "Fecha fin de contrato": "fechaFinContratoTrabajador",
      "Salario devengado": "salarioDevengadoTrabajador",
      "Cupo solicitado": "cupo",
      "Tipo de solicitud": "nombreTipoSolicitud",
      "Tipo de cuenta": "tipoCuentaTrabajador",
      "Banco": "nombreBanco",
      "N\xFAmero de cuenta": "numeroCuentaTrabajador",
      "Estado": "nombreEstadoSolicitud"
    };
    this.columnsDesembolsos = ["Fecha de solicitud", "Identificaci\xF3n", "Trabajador", "Empresa", "Cargo", "Tipo de contrato", "Fecha de inicio contrato", "Fecha fin de contrato", "Salario devengado", "Monto aprobado", "Cupo disponible", "Tipo de consumo", "Tipo de cuenta", "Banco", "N\xFAmero de cuenta", "Estado"];
    this.columnPropertyMapDesembolsos = {
      "Fecha de solicitud": "fechaCreacion",
      "Identificaci\xF3n": "documentoTrabajador",
      "Trabajador": "nombreTrabajador",
      "Empresa": "nombreEmpresaTrabajador",
      "Cargo": "cargoTrabajador",
      "Tipo de contrato": "tipoContratoTrabajador",
      "Fecha de inicio contrato": "fechaInicioContratoTrabajador",
      "Fecha fin de contrato": "fechaFinContratoTrabajador",
      "Salario devengado": "salarioDevengadoTrabajador",
      "Monto aprobado": "montoConsumo",
      "Cupo disponible": "cupoDisponibleTrabajador",
      "Tipo de consumo": "tipoConsumo",
      "Tipo de cuenta": "tipoCuentaTrabajador",
      "Banco": "bancotrabajador",
      "N\xFAmero de cuenta": "numeroCuentaTrabajador",
      "Estado": "nombreEstadoCredito"
    };
    this.columnsDesembolsosRealizados = ["Fecha de desembolso", "Identificaci\xF3n", "Trabajador", "Empresa", "Cargo", "Tipo de contrato", "Fecha de inicio contrato", "Fecha fin de contrato", "Salario devengado", "Monto aprobado", "Cupo disponible", "Tipo de consumo", "Tipo de cuenta", "Banco", "N\xFAmero de cuenta", "Estado"];
    this.columnPropertyMapDesembolsosRealizados = {
      "Fecha de desembolso": "fechaDesembolso",
      "Identificaci\xF3n": "documentoTrabajador",
      "Trabajador": "nombreTrabajador",
      "Empresa": "nombreEmpresaTrabajador",
      "Cargo": "cargoTrabajador",
      "Tipo de contrato": "tipoContratoTrabajador",
      "Fecha de inicio contrato": "fechaInicioContratoTrabajador",
      "Fecha fin de contrato": "fechaFinContratoTrabajador",
      "Salario devengado": "salarioDevengadoTrabajador",
      "Monto aprobado": "montoConsumo",
      "Cupo disponible": "cupoDisponibleTrabajador",
      "Tipo de consumo": "tipoConsumo",
      "Tipo de cuenta": "tipoCuentaTrabajador",
      "Banco": "bancotrabajador",
      "N\xFAmero de cuenta": "numeroCuentaTrabajador",
      "Estado": "nombreEstadoCredito"
    };
    this.buttons = [
      {
        label: "Ver",
        icon: "visibility",
        action: (element) => {
          console.log("Approve", element);
          this.selectedData = element;
          this.router.navigate(["pages/gestion-creditos/solicitudes/estados", this.selectedData.id]);
        }
      }
    ];
    this.buttonsApprove = [
      {
        label: "Ver",
        icon: "visibility",
        action: (element) => {
          console.log("Approve", element);
          this.selectedData = element;
          this.router.navigate(["pages/gestion-creditos/desembolsos/registrar", this.selectedData.id]);
        }
      }
    ];
    this.buttonsView = [
      {
        label: "Ver",
        icon: "visibility",
        action: (element) => {
          console.log("Approve", element);
          this.selectedData = element;
          this.router.navigate(["pages/gestion-creditos/desembolsos/view", this.selectedData.id]);
        }
      }
    ];
    this.buttonsPendiente = [
      {
        label: "Ver",
        icon: "visibility",
        action: (element) => {
          console.log("Approve", element);
          this.selectedData = element;
          this.router.navigate(["pages/gestion-creditos/desembolsos/desembolso", this.selectedData.id]);
        }
      }
    ];
    this.tabChanged = (tabChangeEvent) => {
      this.tabIndex = tabChangeEvent.index;
      this.selectedTab = tabChangeEvent.index == 0 ? CodigosEstadosSolicitudes.PENDIENTE : tabChangeEvent.index == 1 ? CodigosEstadosSolicitudes.RECHAZADA : tabChangeEvent.index == 2 ? CodigosDesembolso.APROBADA : tabChangeEvent.index == 3 ? CodigosDesembolso.REALIZADA : EstadosSolicitudes.APROBADA;
      if ([CodigosEstadosSolicitudes.PENDIENTE, CodigosEstadosSolicitudes.RECHAZADA].includes(this.selectedTab)) {
        this.getSolicitudes(this.selectedTab);
      } else if ([CodigosDesembolso.APROBADA, CodigosDesembolso.REALIZADA].includes(this.selectedTab)) {
        this.getDesembolsos(this.selectedTab);
      }
    };
  }
  getSolicitudes(param) {
    this.subcription$ = this.solicitudService.getSolicitudesDesembolso(param).pipe(map((response) => {
      response.data.forEach((items) => {
        if (items.estado) {
          items.estado = Estados.ACTIVO;
        } else {
          items.estado = Estados.INACTIVO;
        }
      });
      return response;
    }), map((response) => {
      response.data.forEach((items) => {
        items.fechaCreacion = this.datePipe.transform(items.fechaCreacion, "dd/MM/yyyy");
        items.fechaInicioContratoTrabajador = this.datePipe.transform(items.fechaInicioContratoTrabajador, "dd/MM/yyyy");
        items.fechaFinContratoTrabajador = this.datePipe.transform(items.fechaFinContratoTrabajador, "dd/MM/yyyy");
        items.cupo = this.currencyPipe.transform(items.cupo, "USD", "symbol", "1.2-2");
        items.salarioDevengadoTrabajador = this.currencyPipe.transform(items.salarioDevengadoTrabajador, "USD", "symbol", "1.2-2");
      });
      return response;
    })).subscribe((response) => {
      if (response) {
        this.data = response.data;
        this.convertDataExportPendiente(response.data);
      } else {
        this.data = [];
      }
    }, (error) => {
      this.data = [];
    });
  }
  getDesembolsos(param) {
    this.subcription$ = this.detalleConsumoService.getDetallesConsumoDesembolsos(param).pipe(map((response) => {
      response.data.forEach((items) => {
        items.estado = items.estado ? Estados.ACTIVO : Estados.INACTIVO;
        items.fechaCreacion = this.datePipe.transform(items.fechaCreacion, "dd/MM/yyyy");
        items.fechaDesembolso = this.datePipe.transform(items.fechaDesembolso, "dd/MM/yyyy");
        items.fechaInicioContratoTrabajador = this.datePipe.transform(items.fechaInicioContratoTrabajador, "dd/MM/yyyy");
        items.fechaFinContratoTrabajador = this.datePipe.transform(items.fechaFinContratoTrabajador, "dd/MM/yyyy");
        items.salarioDevengadoTrabajador = this.currencyPipe.transform(items.salarioDevengadoTrabajador, "USD", "symbol", "1.2-2");
        if (items.montoConsumo) {
          items.montoConsumo = this.aesEncriptService.decrypt(items.montoConsumo);
        }
        items.cupoDisponibleTrabajador = this.currencyPipe.transform(items.cupoDisponibleTrabajador, "USD", "symbol", "1.2-2");
        items.montoConsumo = this.currencyPipe.transform(items.montoConsumo, "USD", "symbol", "1.2-2");
      });
      return response;
    })).subscribe((response) => {
      if (response) {
        this.data = response.data;
        param == CodigosDesembolso.REALIZADA ? this.convertDataExportDesembolso(response.data) : this.convertDataExport(response.data);
      } else {
        this.data = [];
      }
    }, (error) => {
      this.data = [];
    });
  }
  onSearch(event) {
    const target = event.target;
    this.searchTerm = target.value.trim().toLowerCase();
  }
  convertDataExport(data) {
    const convertData = data.map((items) => {
      return {
        FechaSolicitud: items.fechaCreacion,
        Identificacion: items.documentoTrabajador,
        Trabajador: items.nombreTrabajador,
        Empresa: items.nombreEmpresaTrabajador,
        Cargo: items.cargoTrabajador,
        TipoContrato: items.tipoContratoTrabajador,
        FechaInicioContrato: items.fechaInicioContratoTrabajador,
        FechaFinContrato: items.fechaFinContratoTrabajador,
        SalarioDevengado: parseCurrency(items.salarioDevengadoTrabajador),
        MontoAprobado: parseCurrency(items.montoConsumo),
        CupoDisponible: parseCurrency(items.cupoDisponibleTrabajador),
        TipoConsumo: items.tipoConsumo,
        TipoCuenta: items.tipoCuentaTrabajador,
        Banco: items.bancotrabajador,
        NumeroCuenta: items.numeroCuentaTrabajador,
        Estado: items.nombreEstadoCredito
      };
    });
    this.exportData = convertData;
  }
  convertDataExportDesembolso(data) {
    const convertData = data.map((items) => {
      return {
        FechaDesembolso: items.fechaDesembolso,
        Identificacion: items.documentoTrabajador,
        Trabajador: items.nombreTrabajador,
        Empresa: items.nombreEmpresaTrabajador,
        Cargo: items.cargoTrabajador,
        TipoContrato: items.tipoContratoTrabajador,
        FechaInicioContrato: items.fechaInicioContratoTrabajador,
        FechaFinContrato: items.fechaFinContratoTrabajador,
        SalarioDevengado: parseCurrency(items.salarioDevengadoTrabajador),
        MontoAprobado: parseCurrency(items.montoConsumo),
        CupoDisponible: parseCurrency(items.cupoDisponibleTrabajador),
        TipoConsumo: items.tipoConsumo,
        TipoCuenta: items.tipoCuentaTrabajador,
        Banco: items.bancotrabajador,
        NumeroCuenta: items.numeroCuentaTrabajador,
        Estado: items.nombreEstadoCredito
      };
    });
    this.exportData = convertData;
  }
  convertDataExportPendiente(data) {
    const convertData = data.map((items) => {
      return {
        FechaSolicitud: items.fechaCreacion,
        Identificacion: items.documentoTrabajador,
        Trabajador: items.nombreTrabajador,
        Empresa: items.nombreSubEmpresa,
        Cargo: items.cargoTrabajador,
        TipoContrato: items.tipoContratoTrabajador,
        FechaInicioContrato: items.fechaInicioContratoTrabajador,
        FechaFinContrato: items.fechaFinContratoTrabajador,
        SalarioDevengado: parseCurrency(items.salarioDevengadoTrabajador),
        CupoSolicitado: parseCurrency(items.cupo),
        TipoSolicitud: items.nombreTipoSolicitud,
        TipoCuenta: items.tipoCuentaTrabajador,
        Banco: items.nombreBanco,
        NumeroCuenta: items.numeroCuentaTrabajador,
        Estado: items.nombreEstadoSolicitud
      };
    });
    this.exportData = convertData;
  }
  ngOnDestroy() {
    this.subcription$.unsubscribe();
  }
  ngOnInit() {
    this.getSolicitudes(this.selectedTab);
    this.listenGrid();
  }
  listenGrid() {
    const refreshData$ = this.estadoDatosService.stateGridSolicitudes.asObservable();
    refreshData$.subscribe((states) => {
      if (states.state) {
        console.log("Si entro");
        console.log(states);
        this.selectedTab = states.tab == 0 ? CodigosEstadosSolicitudes.PENDIENTE : states.tab == 1 ? EstadosSolicitudes.RECHAZADA : states.tab == 2 ? EstadosSolicitudes.APROBADA : states.tab == 3 ? EstadosSolicitudes.REALIZADA_DESEMBOLSO : EstadosSolicitudes.APROBADA;
        this.tabIndex = states.tab;
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
        writeFileSync(workbook, `Desembolsos${this.datePipe.transform(/* @__PURE__ */ new Date(), "dd/MM/yyyy")}.xlsx`);
      }
    });
  }
};
_GridDesembolsosComponent.\u0275fac = function GridDesembolsosComponent_Factory(t) {
  return new (t || _GridDesembolsosComponent)();
};
_GridDesembolsosComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GridDesembolsosComponent, selectors: [["app-grid-desembolsos"]], standalone: true, features: [\u0275\u0275ProvidersFeature([
  DatePipe,
  CurrencyPipe
]), \u0275\u0275StandaloneFeature], decls: 23, vars: 12, consts: [["tabGroup", ""], ["noData", ""], [1, "bg-card", "flex", "min-w-0", "flex-auto", "flex-col", "dark:bg-transparent", "sm:absolute", "sm:inset-0", "sm:overflow-hidden"], [1, "relative", "flex", "flex-0", "flex-col", "px-6", "py-6", "sm:flex-row", "sm:items-center", "sm:justify-between", "md:px-8"], [1, "text-3xl", "font-semibold", "tracking-tight"], [1, "mt-6", "flex", "w-full", "shrink-0", "flex-col", "items-center", "sm:ml-4", "sm:mt-0", "sm:flex-row", "sm:space-x-2", "sm:w-auto"], [1, "fuse-mat-dense", "rounded-lg", "w-full", "sm:w-auto", "min-w-64", 3, "subscriptSizing"], ["matPrefix", "", 1, "icon-size-5", 3, "svgIcon"], ["matInput", "", 3, "input", "autocomplete", "placeholder"], ["mat-flat-button", "", 1, "sm:w-auto", "w-full", "sm:mt-0", "mt-2", "rounded-lg", "transition", "duration-200", "text-white", "font-semibold", 3, "click", "color", "ngClass", "disabled"], [1, "flex", "flex-auto", "overflow-hidden"], [1, "flex", "flex-auto", "flex-col", "overflow-hidden", "sm:overflow-y-auto", "bg-gray-100"], ["mat-stretch-tabs", "false", 1, "sm:px-2", 3, "selectedIndexChange", "selectedTabChange", "animationDuration", "selectedIndex"], ["label", "Pendientes"], ["matTabContent", ""], ["label", "Rechazadas"], ["label", "Aprobadas"], ["label", "Realizados"], [4, "ngIf", "ngIfElse"], [3, "columns", "displayedColumns", "columnPropertyMap", "data", "buttons", "searchTerm"], [1, "inset-0", "min-w-0", "overflow-auto", "print:overflow-visible"], [1, "inline-block", "p-4", "sm:p-2", "print:p-0", "w-full"], [3, "type", "appearance"], ["fuseAlertTitle", ""]], template: function GridDesembolsosComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "div", 4);
    \u0275\u0275text(3, "Desembolsos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 5)(5, "mat-form-field", 6);
    \u0275\u0275element(6, "mat-icon", 7);
    \u0275\u0275elementStart(7, "input", 8);
    \u0275\u0275listener("input", function GridDesembolsosComponent_Template_input_input_7_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.onSearch($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "button", 9);
    \u0275\u0275listener("click", function GridDesembolsosComponent_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.exportToExcel(ctx.exportData));
    });
    \u0275\u0275elementStart(9, "span");
    \u0275\u0275text(10, " Exportar ");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(11, "div", 10)(12, "div", 11)(13, "mat-tab-group", 12, 0);
    \u0275\u0275twoWayListener("selectedIndexChange", function GridDesembolsosComponent_Template_mat_tab_group_selectedIndexChange_13_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.tabIndex, $event) || (ctx.tabIndex = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("selectedTabChange", function GridDesembolsosComponent_Template_mat_tab_group_selectedTabChange_13_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.tabChanged($event));
    });
    \u0275\u0275elementStart(15, "mat-tab", 13);
    \u0275\u0275template(16, GridDesembolsosComponent_ng_template_16_Template, 3, 2, "ng-template", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "mat-tab", 15);
    \u0275\u0275template(18, GridDesembolsosComponent_ng_template_18_Template, 3, 2, "ng-template", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "mat-tab", 16);
    \u0275\u0275template(20, GridDesembolsosComponent_ng_template_20_Template, 3, 2, "ng-template", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "mat-tab", 17);
    \u0275\u0275template(22, GridDesembolsosComponent_ng_template_22_Template, 3, 2, "ng-template", 14);
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
    \u0275\u0275property("color", "primary")("ngClass", \u0275\u0275pureFunction2(9, _c02, ctx.exportData.length, !ctx.exportData.length))("disabled", !ctx.exportData.length);
    \u0275\u0275advance(5);
    \u0275\u0275property("animationDuration", "500");
    \u0275\u0275twoWayProperty("selectedIndex", ctx.tabIndex);
  }
}, dependencies: [
  CustomTableComponent,
  FuseAlertComponent,
  MatButton,
  MatFormField,
  MatIcon,
  MatInput,
  MatTab,
  MatTabContent,
  MatTabGroup,
  NgIf,
  NgClass
] });
var GridDesembolsosComponent = _GridDesembolsosComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GridDesembolsosComponent, { className: "GridDesembolsosComponent", filePath: "src\\app\\pages\\gestion-creditos\\desembolsos\\grid-desembolsos\\grid-desembolsos.component.ts", lineNumber: 49 });
})();

// src/app/pages/gestion-creditos/desembolsos/form-approve-desembolso/form-approve-desembolso.component.ts
var _c03 = ["stepper"];
var maskConfig2 = {
  validation: false
};
var _FormApproveDesembolsoComponent = class _FormApproveDesembolsoComponent {
  constructor() {
    this.fuseService = inject(FuseConfirmationService);
    this.router = inject(Router);
    this.fb = inject(FormBuilder);
    this.activatedRoute = inject(ActivatedRoute);
    this.solicitudService = inject(SolicitudesService);
    this.empleadosServices = inject(EmpleadosService);
    this.currencyPipe = inject(CurrencyPipe);
    this.swalService = inject(SwalService);
    this.errorHandlerService = inject(ErrorHandlerService);
    this.aesEncriptService = inject(AesEncryptionService);
    this.showAlert = false;
    this.alert = {
      type: "success",
      message: ""
    };
  }
  ngOnDestroy() {
  }
  ngOnInit() {
    this.createForm();
    const id = this.activatedRoute.snapshot.paramMap.get("id");
    this.getSolicitud(id);
  }
  getSolicitud(id) {
    this.subscription$ = this.solicitudService.getSolicitud(id).pipe(switchMap((response) => {
      const dataForm = {
        idTipoDoc: response.data.trabajador.idTipoDoc,
        numDocumento: response.data.trabajador.numDoc
      };
      return this.empleadosServices.getEmpleadoParams(dataForm);
    })).subscribe((response) => {
      if (response) {
        this.showAlert = false;
        const campos = {
          numDoc: response.data.numDoc,
          primerNombre: response.data.primerNombre,
          segundoNombre: response.data.segundoNombre,
          primerApellido: response.data.primerApellido,
          segundoApellido: response.data.segundoApellido,
          idTrabajador: response.data.id,
          correo: response.data.correo,
          credito: response.data.creditos[0].numCredito + " - " + this.currencyPipe.transform(this.aesEncriptService.decrypt(response.data.creditos[0].cupoDisponible), "USD", "symbol", "1.2-2"),
          idCredito: response.data.creditos[0].id,
          numCuentaBancaria: response.data.numCuentaBancaria,
          idTipoCuenta: response.data.idTipoCuenta,
          id
        };
        this.secondFormGroup.patchValue(campos);
      }
    }, (error) => {
      this.alert = {
        type: "error",
        message: "El trabajador no existe!"
      };
      this.showAlert = true;
    });
  }
  onApprove() {
    if (this.secondFormGroup.valid) {
      const { id, idCredito, idTrabajador } = this.secondFormGroup.getRawValue();
      const createData = {
        id,
        idEstado: CodigosEstadosSolicitudes.APROBADA
      };
      const dialog = this.fuseService.open(__spreadValues({}, guardar));
      dialog.afterClosed().subscribe((response) => {
        if (response === "confirmed") {
          this.solicitudService.patchSolicitudDesembolso(createData).subscribe((response2) => {
            this.swalService.ToastAler({
              icon: "success",
              title: "Registro Creado o Actualizado con Exito.",
              timer: 4e3
            });
            this.router.navigate(["pages/gestion-creditos/desembolsos"]);
          }, (error) => {
            this.errorHandlerService.errorHandler(error);
          });
        }
      });
    }
  }
  onRechazar() {
    if (this.secondFormGroup.valid) {
      const { id, idCredito, idTrabajador } = this.secondFormGroup.getRawValue();
      const createData = {
        id,
        idEstado: CodigosEstadosSolicitudes.RECHAZADA
      };
      const dialog = this.fuseService.open(__spreadValues({}, guardar));
      dialog.afterClosed().subscribe((response) => {
        if (response === "confirmed") {
          this.solicitudService.patchSolicitudDesembolso(createData).subscribe((response2) => {
            this.swalService.ToastAler({
              icon: "success",
              title: "Registro Creado o Actualizado con Exito.",
              timer: 4e3
            });
            this.router.navigate(["pages/gestion-creditos/desembolsos"]);
          }, (error) => {
            this.errorHandlerService.errorHandler(error);
          });
        }
      });
    }
  }
  cerrar() {
    this.router.navigate(["/pages/gestion-creditos/desembolsos"]);
  }
  createForm() {
    this.secondFormGroup = this.fb.group({
      numDoc: ["", Validators.required],
      primerNombre: ["", Validators.required],
      segundoNombre: [""],
      primerApellido: ["", Validators.required],
      segundoApellido: [""],
      idTrabajador: [""],
      correo: ["", Validators.required],
      credito: ["", Validators.required],
      idCredito: ["", Validators.required],
      numCuentaBancaria: [""],
      idTipoCuenta: [""],
      id: [""]
    });
  }
};
_FormApproveDesembolsoComponent.\u0275fac = function FormApproveDesembolsoComponent_Factory(t) {
  return new (t || _FormApproveDesembolsoComponent)();
};
_FormApproveDesembolsoComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FormApproveDesembolsoComponent, selectors: [["app-form-approve-desembolso"]], viewQuery: function FormApproveDesembolsoComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(_c03, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.stepper = _t.first);
  }
}, standalone: true, features: [\u0275\u0275ProvidersFeature([
  { provide: DateAdapter, useClass: DateAdapterService },
  { provide: MAT_DATE_LOCALE, useValue: "en-GB" },
  DatePipe,
  CurrencyPipe,
  provideNgxMask(maskConfig2)
]), \u0275\u0275StandaloneFeature], decls: 51, vars: 14, consts: [["stepper", ""], ["cdkScrollable", "", 1, "absolute", "inset-0", "flex", "flex-col", "min-w-0", "items-center", "overflow-y-auto", "bg-gray-100", "p-6", "sm:p-8"], [1, "relative", "w-full", "flex-0", "max-w-4xl", "sm:rounded-lg", "overflow-hidden"], [1, "p-2", "text-3xl", "font-semibold", "text-center", "text-gray-800"], [1, "w-full", "px-6", "py-4", 3, "orientation", "linear", "animationDuration"], ["label", "Verificar informaci\xF3n", 3, "stepControl"], [1, "w-full"], [1, "space-y-4", "w-full", "max-w-lg", "mx-auto", 3, "formGroup"], [1, "flex", "flex-col", "sm:flex-row", "gap-4"], ["matInput", "", "readonly", "", 3, "formControlName"], [1, "flex", "flex-col"], [1, "flex", "flex-wrap", "justify-center", "sm:justify-center", "gap-4", "mt-2"], ["mat-button", "", 1, "sm:w-auto", "w-full", "py-2", "px-4", "text-white", "bg-crediorange-100", "rounded-lg", 3, "click"], ["mat-button", "", 1, "sm:w-auto", "w-full", "py-2", "px-4", "text-white", "bg-crediblue-50", "rounded-lg", "hover:bg-opacity-80", 3, "click"]], template: function FormApproveDesembolsoComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-stepper", 4, 0)(6, "mat-step", 5)(7, "div", 6)(8, "form", 7)(9, "div", 8)(10, "mat-form-field", 6)(11, "mat-label");
    \u0275\u0275text(12, "Primer nombre");
    \u0275\u0275elementEnd();
    \u0275\u0275element(13, "input", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "mat-form-field", 6)(15, "mat-label");
    \u0275\u0275text(16, "Segundo nombre");
    \u0275\u0275elementEnd();
    \u0275\u0275element(17, "input", 9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 8)(19, "mat-form-field", 6)(20, "mat-label");
    \u0275\u0275text(21, "Primer apellido");
    \u0275\u0275elementEnd();
    \u0275\u0275element(22, "input", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "mat-form-field", 6)(24, "mat-label");
    \u0275\u0275text(25, "Segundo apellido");
    \u0275\u0275elementEnd();
    \u0275\u0275element(26, "input", 9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 8)(28, "mat-form-field", 6)(29, "mat-label");
    \u0275\u0275text(30, "Identificaci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275element(31, "input", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "mat-form-field", 6)(33, "mat-label");
    \u0275\u0275text(34, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275element(35, "input", 9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "div", 10)(37, "mat-form-field", 6)(38, "mat-label");
    \u0275\u0275text(39, "Cr\xE9dito / Cupo disponible");
    \u0275\u0275elementEnd();
    \u0275\u0275element(40, "input", 9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "div", 10)(42, "mat-form-field", 6)(43, "mat-label");
    \u0275\u0275text(44, "N\xFAmero de cuenta");
    \u0275\u0275elementEnd();
    \u0275\u0275element(45, "input", 9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(46, "div", 11)(47, "button", 12);
    \u0275\u0275listener("click", function FormApproveDesembolsoComponent_Template_button_click_47_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.onRechazar());
    });
    \u0275\u0275text(48, "Rechazar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "button", 13);
    \u0275\u0275listener("click", function FormApproveDesembolsoComponent_Template_button_click_49_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.onApprove());
    });
    \u0275\u0275text(50, "Aprobar");
    \u0275\u0275elementEnd()()()()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", "Desembolso", " ");
    \u0275\u0275advance();
    \u0275\u0275property("orientation", "vertical")("linear", true)("animationDuration", "1500");
    \u0275\u0275advance(2);
    \u0275\u0275property("stepControl", ctx.secondFormGroup);
    \u0275\u0275advance(2);
    \u0275\u0275property("formGroup", ctx.secondFormGroup);
    \u0275\u0275advance(5);
    \u0275\u0275property("formControlName", "primerNombre");
    \u0275\u0275advance(4);
    \u0275\u0275property("formControlName", "segundoNombre");
    \u0275\u0275advance(5);
    \u0275\u0275property("formControlName", "primerApellido");
    \u0275\u0275advance(4);
    \u0275\u0275property("formControlName", "segundoApellido");
    \u0275\u0275advance(5);
    \u0275\u0275property("formControlName", "numDoc");
    \u0275\u0275advance(4);
    \u0275\u0275property("formControlName", "correo");
    \u0275\u0275advance(5);
    \u0275\u0275property("formControlName", "credito");
    \u0275\u0275advance(5);
    \u0275\u0275property("formControlName", "numCuentaBancaria");
  }
}, dependencies: [
  CdkScrollable,
  MatStepper,
  MatButton,
  MatFormField,
  MatInput,
  MatLabel,
  MatStep,
  ReactiveFormsModule,
  \u0275NgNoValidate,
  DefaultValueAccessor,
  NgControlStatus,
  NgControlStatusGroup,
  FormGroupDirective,
  FormControlName
] });
var FormApproveDesembolsoComponent = _FormApproveDesembolsoComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FormApproveDesembolsoComponent, { className: "FormApproveDesembolsoComponent", filePath: "src\\app\\pages\\gestion-creditos\\desembolsos\\form-approve-desembolso\\form-approve-desembolso.component.ts", lineNumber: 52 });
})();

// src/app/pages/gestion-creditos/desembolsos/form-view-desembolso/form-view-desembolso.component.ts
var _c04 = () => ["/pages/gestion-creditos/desembolsos"];
function FormViewDesembolsoComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "div", 9)(2, "div")(3, "h3", 10);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 11);
    \u0275\u0275text(6, "Identificaci\xF3n: ");
    \u0275\u0275elementStart(7, "span", 12);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "p", 11);
    \u0275\u0275text(10, "Empresa: ");
    \u0275\u0275elementStart(11, "span", 12);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "p", 13);
    \u0275\u0275text(14, "Cargo: ");
    \u0275\u0275elementStart(15, "span", 12);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "p", 13);
    \u0275\u0275text(18, "Tipo de contrato: ");
    \u0275\u0275elementStart(19, "span", 12);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "p", 13);
    \u0275\u0275text(22, "Fecha inicio de contrato: ");
    \u0275\u0275elementStart(23, "span", 12);
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "p", 13);
    \u0275\u0275text(27, "Fecha fin de contrato: ");
    \u0275\u0275elementStart(28, "span", 12);
    \u0275\u0275text(29);
    \u0275\u0275pipe(30, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "p", 13);
    \u0275\u0275text(32, "Salario devengado: ");
    \u0275\u0275elementStart(33, "span", 12);
    \u0275\u0275text(34);
    \u0275\u0275pipe(35, "currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "p", 11);
    \u0275\u0275text(37, "Correo: ");
    \u0275\u0275elementStart(38, "span", 12);
    \u0275\u0275text(39);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "p", 11);
    \u0275\u0275text(41, "Direcci\xF3n: ");
    \u0275\u0275elementStart(42, "span", 12);
    \u0275\u0275text(43);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(44, "p", 11);
    \u0275\u0275text(45, "Tel\xE9fono: ");
    \u0275\u0275elementStart(46, "span", 12);
    \u0275\u0275text(47);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(48, "div")(49, "p", 11);
    \u0275\u0275text(50, "Tipo de consumo: ");
    \u0275\u0275elementStart(51, "span", 12);
    \u0275\u0275text(52);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(53, "p", 11);
    \u0275\u0275text(54, "Estado de Desembolso: ");
    \u0275\u0275elementStart(55, "span", 12);
    \u0275\u0275text(56);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(57, "p", 11);
    \u0275\u0275text(58, "Valor de desembolso: ");
    \u0275\u0275elementStart(59, "span", 12);
    \u0275\u0275text(60);
    \u0275\u0275pipe(61, "currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(62, "p", 11);
    \u0275\u0275text(63, "Fecha de Solicitud: ");
    \u0275\u0275elementStart(64, "span", 12);
    \u0275\u0275text(65);
    \u0275\u0275pipe(66, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(67, "p", 11);
    \u0275\u0275text(68, "Cuenta destino: ");
    \u0275\u0275elementStart(69, "span", 12);
    \u0275\u0275text(70);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate4(" ", ctx_r0.items.trabajador.primerNombre, " ", ctx_r0.items.trabajador.segundoNombre, " ", ctx_r0.items.trabajador.primerApellido, " ", ctx_r0.items.trabajador.segundoApellido, " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.items.trabajador.numDoc);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.items.trabajador.nombreSubEmpresa);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.items.trabajador.cargo);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.items.trabajador.nombreTipoContrato);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(25, 21, ctx_r0.items.trabajador.fechaInicioContrato, "dd/MM/yyyy"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(30, 24, ctx_r0.items.trabajador.fechaFinContrato, "dd/MM/yyyy"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(35, 27, ctx_r0.items.trabajador.salarioDevengado, "USD"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.items.trabajador.correo);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.items.trabajador.direccion);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.items.trabajador.telefono);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.items.tipoConsumo);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.items.nombreEstadoCredito);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(61, 30, ctx_r0.aesEncriptService.decrypt(ctx_r0.items.montoConsumo)));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(66, 32, ctx_r0.items.fechaCreacionSolicitud, "dd/MM/yyyy"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate3("", ctx_r0.items.bancotrabajador, " - ", ctx_r0.items.tipoCuentaTrabajador, " - ", ctx_r0.items.numeroCuentaTrabajador, " ");
  }
}
var maskConfig3 = {
  validation: false
};
var _FormViewDesembolsoComponent = class _FormViewDesembolsoComponent {
  constructor() {
    this.activatedRoute = inject(ActivatedRoute);
    this._matDialog = inject(MatDialog);
    this.detalleConsumoService = inject(DetalleConsumoService);
    this.currencyPipe = inject(CurrencyPipe);
    this.empleadosServices = inject(EmpleadosService);
    this.showAlert = false;
    this.aesEncriptService = inject(AesEncryptionService);
    this.alert = {
      type: "success",
      message: ""
    };
  }
  ngOnDestroy() {
    this.subscription$.unsubscribe();
  }
  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get("id");
    this.getSolicitud(id);
  }
  getSolicitud(id) {
    this.subscription$ = this.detalleConsumoService.getDetalleConsumoDesembolso(id).subscribe((response) => {
      if (response) {
        this.showAlert = false;
        this.items = response.data;
      }
    }, (error) => {
      this.alert = {
        type: "error",
        message: "El trabajador no existe!"
      };
      this.showAlert = true;
    });
  }
};
_FormViewDesembolsoComponent.\u0275fac = function FormViewDesembolsoComponent_Factory(t) {
  return new (t || _FormViewDesembolsoComponent)();
};
_FormViewDesembolsoComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FormViewDesembolsoComponent, selectors: [["app-form-view-desembolso"]], standalone: true, features: [\u0275\u0275ProvidersFeature([
  { provide: DateAdapter, useClass: DateAdapterService },
  { provide: MAT_DATE_LOCALE, useValue: "en-GB" },
  DatePipe,
  CurrencyPipe,
  provideNgxMask(maskConfig3)
]), \u0275\u0275StandaloneFeature], decls: 10, vars: 4, consts: [["cdkScrollable", "", 1, "absolute", "inset-0", "min-w-0", "overflow-auto", "print:overflow-visible"], [1, "inline-block", "p-4", "sm:p-6", "md:p-10", "print:p-0", "w-full"], [1, "bg-card", "shadow", "print:bg-transparent", "print:p-0", "print:shadow-none", "rounded-2xl", "max-w-4xl", "mx-auto", "overflow-hidden"], [1, "bg-crediblue-50", "px-4", "py-3", "sm:px-6", "sm:py-4", "flex", "items-center", "justify-between"], ["mat-button", "", 1, "flex", "items-center", 3, "routerLink"], [1, "text-white", 3, "svgIcon"], [1, "text-lg", "sm:text-xl", "font-bold", "text-white"], ["class", "p-4 sm:p-6", 4, "ngIf"], [1, "p-4", "sm:p-6"], [1, "mb-4", "flex", "flex-col", "md:flex-row", "md:justify-between", "gap-4"], [1, "text-lg", "sm:text-xl", "font-semibold", "text-gray-800"], [1, "font-medium", "text-gray-600"], [1, "text-md", "text-secondary"], [1, "text-gray-600", "font-medium"]], template: function FormViewDesembolsoComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div")(5, "a", 4);
    \u0275\u0275element(6, "mat-icon", 5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "h2", 6);
    \u0275\u0275text(8, "Detalle de Desembolso");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(9, FormViewDesembolsoComponent_div_9_Template, 71, 35, "div", 7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(3, _c04));
    \u0275\u0275advance();
    \u0275\u0275property("svgIcon", "heroicons_outline:arrow-long-left");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx.items);
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
var FormViewDesembolsoComponent = _FormViewDesembolsoComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FormViewDesembolsoComponent, { className: "FormViewDesembolsoComponent", filePath: "src\\app\\pages\\gestion-creditos\\desembolsos\\form-view-desembolso\\form-view-desembolso.component.ts", lineNumber: 44 });
})();

// src/app/pages/gestion-creditos/desembolsos/desembolsos.routes.ts
var desembolsos_routes_default = [
  {
    path: "",
    component: GridDesembolsosComponent
  },
  {
    path: "desembolso/:id",
    component: FormApproveDesembolsoComponent
  },
  {
    path: "registrar/:id",
    component: FormDesembolsoComponent
  },
  {
    path: "view/:id",
    component: FormViewDesembolsoComponent
  }
];
export {
  desembolsos_routes_default as default
};
//# sourceMappingURL=chunk-VSBAKXMH.js.map
