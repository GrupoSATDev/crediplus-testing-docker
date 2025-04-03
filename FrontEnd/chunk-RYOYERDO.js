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
  TIPO_CONSUMO_AVANCE
} from "./chunk-VUEAR5BO.js";
import {
  DetalleConsumoService
} from "./chunk-S23R3MHA.js";
import {
  TiposDocumentosService
} from "./chunk-3HAPDTN7.js";
import {
  takeUntilDestroyed
} from "./chunk-GTAQN4AQ.js";
import {
  DateAdapterService
} from "./chunk-K5K55XKD.js";
import {
  NgxMaskDirective,
  provideNgxMask
} from "./chunk-MZRCXYW5.js";
import {
  LocacionService
} from "./chunk-EP2TKH7N.js";
import {
  ToastAlertsService
} from "./chunk-N5WAY7KO.js";
import {
  EstadosDatosService
} from "./chunk-5JAUKKTX.js";
import {
  MatSelect
} from "./chunk-CZDVBWDU.js";
import {
  SwalService
} from "./chunk-WCR4YL2S.js";
import {
  FuseConfirmationService,
  guardar
} from "./chunk-HUKVMAZY.js";
import {
  MatProgressSpinner
} from "./chunk-WO675REP.js";
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
  ActivatedRoute,
  Router
} from "./chunk-L2WXMDPA.js";
import "./chunk-GRFMDZQD.js";
import {
  CdkScrollable
} from "./chunk-74CJHXHU.js";
import {
  FuseAlertComponent
} from "./chunk-YZGIFTGF.js";
import {
  fuseAnimations
} from "./chunk-G7E77ZCS.js";
import {
  AppSettingsService
} from "./chunk-ROMZC4L4.js";
import {
  AsyncPipe,
  CurrencyPipe,
  DateAdapter,
  DatePipe,
  DestroyRef,
  HttpClient,
  MAT_DATE_LOCALE,
  MatButton,
  MatOption,
  NgClass,
  NgForOf,
  NgIf,
  inject,
  interval,
  map,
  of,
  switchMap,
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
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction2,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-WGDVSMOG.js";
import {
  __objRest,
  __spreadValues
} from "./chunk-AYDYM6RQ.js";

// src/app/core/services/tipo-consumos.service.ts
var _TipoConsumosService = class _TipoConsumosService {
  constructor(_http, appSettingService) {
    this._http = _http;
    this.appSettingService = appSettingService;
  }
  getTipoConsumos() {
    return this._http.get(this.appSettingService.tipoConsumos.url.base);
  }
  getTipoConsumo(id) {
    return this._http.get(`${this.appSettingService.tipoConsumos.url.base}/${id}`);
  }
};
_TipoConsumosService.\u0275fac = function TipoConsumosService_Factory(t) {
  return new (t || _TipoConsumosService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(AppSettingsService));
};
_TipoConsumosService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _TipoConsumosService, factory: _TipoConsumosService.\u0275fac, providedIn: "root" });
var TipoConsumosService = _TipoConsumosService;

// src/app/pages/gestion-creditos/detalle-consumo/form-detalle-consumo/form-detalle-consumo.component.ts
var _c0 = ["stepper"];
var _c1 = (a0, a1) => ({ "bg-crediblue-50": a0, "bg-credigray-100": a1 });
function FormDetalleConsumoComponent_ng_container_13_mat_option_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 34);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    \u0275\u0275property("value", item_r2.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r2.nombre);
  }
}
function FormDetalleConsumoComponent_ng_container_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, FormDetalleConsumoComponent_ng_container_13_mat_option_1_Template, 2, 2, "mat-option", 33);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const documentos_r3 = ctx.ngIf;
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", documentos_r3.data);
  }
}
function FormDetalleConsumoComponent_Conditional_19_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " El n\xFAmero de identificaci\xF3n es requerido!. ");
  }
}
function FormDetalleConsumoComponent_Conditional_19_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Solo se permiten n\xFAmeros. ");
  }
}
function FormDetalleConsumoComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275template(1, FormDetalleConsumoComponent_Conditional_19_Conditional_1_Template, 1, 0)(2, FormDetalleConsumoComponent_Conditional_19_Conditional_2_Template, 1, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.firstFormGroup.get("numDocumento").hasError("required") ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.firstFormGroup.get("numDocumento").hasError("pattern") ? 2 : -1);
  }
}
function FormDetalleConsumoComponent_fuse_alert_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "fuse-alert", 35);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("appearance", "outline")("showIcon", false)("type", ctx_r3.alert.type)("@shake", ctx_r3.alert.type === "error");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.alert.message, " ");
  }
}
function FormDetalleConsumoComponent_ng_container_75_mat_option_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 34);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const consumo_r5 = ctx.$implicit;
    \u0275\u0275property("value", consumo_r5.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(consumo_r5.nombre);
  }
}
function FormDetalleConsumoComponent_ng_container_75_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, FormDetalleConsumoComponent_ng_container_75_mat_option_1_Template, 2, 2, "mat-option", 33);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const tipoConsumos_r6 = ctx.ngIf;
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", tipoConsumos_r6.data);
  }
}
function FormDetalleConsumoComponent_mat_error_82_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, " El valor es requerido! ");
    \u0275\u0275elementEnd();
  }
}
function FormDetalleConsumoComponent_mat_error_82_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, " El valor ingresado no puede superar el cupo disponible! ");
    \u0275\u0275elementEnd();
  }
}
function FormDetalleConsumoComponent_mat_error_82_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275template(1, FormDetalleConsumoComponent_mat_error_82_span_1_Template, 2, 0, "span", 11)(2, FormDetalleConsumoComponent_mat_error_82_span_2_Template, 2, 0, "span", 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.montoConsumo.hasError("required"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.montoConsumo.hasError("notEqual"));
  }
}
function FormDetalleConsumoComponent_div_89_Conditional_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, " Recargar ");
    \u0275\u0275elementEnd();
  }
}
function FormDetalleConsumoComponent_div_89_Conditional_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-progress-spinner", 50);
  }
  if (rf & 2) {
    \u0275\u0275property("diameter", 24)("mode", "indeterminate");
  }
}
function FormDetalleConsumoComponent_div_89_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 36)(1, "div", 37)(2, "div", 38)(3, "h2", 39);
    \u0275\u0275text(4, "Resumen de la Compra");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 40);
    \u0275\u0275text(6, "Revise los detalles");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 41)(8, "div", 42)(9, "div")(10, "h3", 43);
    \u0275\u0275text(11, "Fecha de compra");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "p", 44);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 42)(16, "div")(17, "h3", 43);
    \u0275\u0275text(18, "N\xFAmero de factura");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "p", 44);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 42)(22, "div")(23, "h3", 43);
    \u0275\u0275text(24, "Valor");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "p", 44);
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 45)(29, "p", 43);
    \u0275\u0275text(30, "N\xFAmero de cuotas");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "p", 44);
    \u0275\u0275text(32);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "div", 46)(34, "p", 43);
    \u0275\u0275text(35, "Estado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "p", 44);
    \u0275\u0275text(37);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "div", 47)(39, "p", 43);
    \u0275\u0275text(40, "Detalle compra");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "p", 44);
    \u0275\u0275text(42);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(43, "div", 48)(44, "button", 49);
    \u0275\u0275listener("click", function FormDetalleConsumoComponent_div_89_Template_button_click_44_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onUpdate());
    });
    \u0275\u0275template(45, FormDetalleConsumoComponent_div_89_Conditional_45_Template, 2, 0, "span")(46, FormDetalleConsumoComponent_div_89_Conditional_46_Template, 1, 2, "mat-progress-spinner", 50);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "button", 51);
    \u0275\u0275listener("click", function FormDetalleConsumoComponent_div_89_Template_button_click_47_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onCerrar());
    });
    \u0275\u0275text(48, " Cerrar ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(13);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(14, 10, ctx_r3.detaleConsumo.fechaCreacion, "dd/MM/yyyy"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r3.detaleConsumo.numeroFactura);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(27, 13, ctx_r3.detaleConsumo.montoConsumo));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r3.detaleConsumo.cantidadCuotas);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r3.detaleConsumo.nombreEstadoCredito);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r3.detaleConsumo.detalleCompra);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r3.isButtonDisabled);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r3.isButtonDisabled ? 45 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.isButtonDisabled ? 46 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r3.isButtonDisabled);
  }
}
var maskConfig = {
  validation: false
};
var _FormDetalleConsumoComponent = class _FormDetalleConsumoComponent {
  constructor() {
    this.tiposDocumentosService = inject(TiposDocumentosService);
    this.fuseService = inject(FuseConfirmationService);
    this.estadosDatosService = inject(EstadosDatosService);
    this.toasService = inject(ToastAlertsService);
    this.empleadosServices = inject(EmpleadosService);
    this.tipoConsumosService = inject(TipoConsumosService);
    this.cuentasServices = inject(CuentasBancariasService);
    this.datePipe = inject(DatePipe);
    this.currencyPipe = inject(CurrencyPipe);
    this.router = inject(Router);
    this.activatedRoute = inject(ActivatedRoute);
    this.fb = inject(FormBuilder);
    this._locacionService = inject(LocacionService);
    this.detalleConsumo = inject(DetalleConsumoService);
    this.departamentos$ = this._locacionService.getDepartamentos();
    this.tipoConsumo$ = this.tipoConsumosService.getTipoConsumos().pipe(map((response) => {
      response.data = response.data.filter((item) => item.nombre !== "Cobros Fijos" && item.nombre !== "Avance");
      return response;
    }), tap((response) => {
      const creditoConsumo = response.data.find((item) => item.nombre === "Credito Consumo");
      if (creditoConsumo) {
        this.thirdFormGroup.get("idTipoConsumo").setValue(creditoConsumo.id);
      }
    }));
    this.cuentas$ = this.cuentasServices.getCuentas();
    this.swalService = inject(SwalService);
    this.showAlert = false;
    this.alert = {
      type: "success",
      message: ""
    };
    this.destroyedRef = inject(DestroyRef);
    this.tiposDocumentos$ = this.tiposDocumentosService.getTiposDocumentos().pipe(tap((response) => {
      const tipoDocumentos = response.data.find((item) => item.nombre === "C\xE9dula de ciudadan\xEDa");
      if (tipoDocumentos) {
        this.firstFormGroup.get("idTipoDoc").setValue(tipoDocumentos.id);
      }
    }));
    this.empleado$ = this.empleadosServices.getValidaInfo();
    this.creditos = [];
    this.isButtonDisabled = false;
    this.focus = focus;
    this.FormatoOptionsPipe = FormatoOptionsPipe;
  }
  ngOnDestroy() {
  }
  ngOnInit() {
    this.createForm();
    const tipoDoc = this.activatedRoute.snapshot.paramMap.get("tipo");
    const numDoc = this.activatedRoute.snapshot.paramMap.get("num");
    if (tipoDoc && numDoc) {
      const dataParams = {
        idTipoDoc: tipoDoc,
        numDocumento: numDoc
      };
      this.firstFormGroup.patchValue(dataParams);
    }
  }
  getMunicipios(matSelectChange) {
    const id = matSelectChange.value;
    this.municipios$ = this._locacionService.getMunicipio(id);
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
  validateValue(control) {
    return (control2) => {
      const compareValue = this.secondFormGroup.get("procMaxDesembolso").value;
      const value = control2.value;
      console.log(compareValue);
      if (value > compareValue) {
        return { notEqual: true };
      }
      return null;
    };
  }
  get montoConsumo() {
    return this.thirdFormGroup.get("montoConsumo");
  }
  onSearch() {
    const data = this.firstFormGroup.getRawValue();
    this.empleadosServices.getEmpleadoParams(data).subscribe((response) => {
      if (response && response.data.creditos.length > 0) {
        this.showAlert = false;
        const campos = {
          numDoc: response.data.numDoc,
          primerNombre: response.data.primerNombre,
          segundoNombre: response.data.segundoNombre,
          primerApellido: response.data.primerApellido,
          segundoApellido: response.data.segundoApellido,
          idTrabajador: response.data.id,
          correo: response.data.correo,
          credito: response.data.creditos[0].numCredito + " - " + this.currencyPipe.transform(response.data.creditos[0].cupoDisponible, "USD", "symbol", "1.2-2"),
          idCredito: response.data.creditos[0].id,
          procMaxDesembolso: response.data.procMaxDesembolso,
          procMaxPrestamo: response.data.procMaxPrestamo,
          cupoDisponible: response.data.creditos[0].cupoDisponible,
          cupoDisponibleAvances: response.data.creditos[0].cupoDisponibleAvances
        };
        this.secondFormGroup.patchValue(campos);
        this.creditos = response.data.creditos;
        this.thirdFormGroup.get("montoConsumo").setValidators([Validators.required, validateNumbers(campos.cupoDisponible)]);
        this.thirdFormGroup.updateValueAndValidity();
        setTimeout(() => {
          this.stepper.next();
        }, 1200);
      } else {
        this.alert = {
          type: "error",
          message: "El usuario no tiene cr\xE9dito aprobado, por favor comunicarse con el equipo de CrediPlus.!"
        };
      }
    }, (error) => {
      this.alert = {
        type: "error",
        message: error.error.errorMenssages[0]
      };
      this.showAlert = true;
    });
  }
  selectedTipo(event) {
    const { procMaxDesembolso, procMaxPrestamo, cupoDisponible, cupoDisponibleAvances } = this.secondFormGroup.getRawValue();
    let valorCalculado;
    if (event.value == TIPO_CONSUMO_AVANCE.ID_TIPO_CONSUMO_AVANCE) {
      this.thirdFormGroup.get("montoConsumo").setValue(0);
      this.thirdFormGroup.get("montoConsumo").setValidators([Validators.required, validateNumbers(cupoDisponible)]);
      this.thirdFormGroup.updateValueAndValidity();
    } else {
      valorCalculado = Number(cupoDisponible) * procMaxPrestamo / 100;
      this.thirdFormGroup.get("montoConsumo").setValue(0);
      this.thirdFormGroup.get("montoConsumo").setValidators([Validators.required, validateNumbers(cupoDisponible)]);
      this.thirdFormGroup.updateValueAndValidity();
    }
  }
  onSave() {
    if (this.thirdFormGroup.valid) {
      const _a = this.thirdFormGroup.getRawValue(), { montoConsumo } = _a, form = __objRest(_a, ["montoConsumo"]);
      const { idCredito, idTrabajador } = this.secondFormGroup.getRawValue();
      const createData = __spreadValues({
        idCredito,
        idTrabajador,
        montoConsumo: Number(montoConsumo)
      }, form);
      const dialog = this.fuseService.open(__spreadValues({}, guardar));
      dialog.afterClosed().subscribe((response) => {
        if (response === "confirmed") {
          this.detalleConsumo.postDetalle(createData).subscribe((res) => {
            console.log(res);
            this.swalService.ToastAler({
              icon: "success",
              title: "Registro Creado o Actualizado con Exito.",
              timer: 4e3
            });
            this.getResumenCompra(idTrabajador);
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
  }
  getResumenCompra(id) {
    this.subscription$ = this.detalleConsumo.getResumen(id).subscribe((response) => {
      if (response) {
        console.log(response);
        this.detaleConsumo = response.data;
        this.stepper.next();
      }
    });
  }
  onCerrar() {
    this.router.navigate(["pages/gestion-creditos/consumos"]);
  }
  onUpdate() {
    if (this.isButtonDisabled) {
      return;
    }
    this.isButtonDisabled = true;
    if (this.detalleSubscription$) {
      this.detalleSubscription$.unsubscribe();
    }
    this.detalleSubscription$ = interval(4e3).pipe(takeUntilDestroyed(this.destroyedRef), switchMap(() => this.detalleConsumo.getConsumoTrabajador(this.detaleConsumo.idTrabajador))).subscribe((detalleResponse) => {
      console.log(detalleResponse);
      if (detalleResponse.data.nombreEstadoCredito == "Aprobado") {
        this.detaleConsumo = detalleResponse.data;
        this.swalService.ToastAler({
          icon: "success",
          title: "Registro Creado o Actualizado con Exito.",
          timer: 4e3
        });
        this.detalleSubscription$.unsubscribe();
        this.isButtonDisabled = false;
      } else {
        this.isButtonDisabled = true;
      }
    });
    setTimeout(() => {
      this.isButtonDisabled = false;
    }, 3e3);
  }
  createForm() {
    this.firstFormGroup = this.fb.group({
      idTipoDoc: [""],
      numDocumento: ["", [Validators.required, Validators.pattern("^[0-9]*$")]]
    });
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
      procMaxDesembolso: [""],
      procMaxPrestamo: [""],
      cupoDisponible: [""],
      cupoDisponibleAvances: [""]
    });
    this.thirdFormGroup = this.fb.group({
      montoConsumo: ["", [Validators.required]],
      numeroFactura: ["", Validators.required],
      idTipoConsumo: ["", Validators.required]
    });
  }
};
_FormDetalleConsumoComponent.\u0275fac = function FormDetalleConsumoComponent_Factory(t) {
  return new (t || _FormDetalleConsumoComponent)();
};
_FormDetalleConsumoComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FormDetalleConsumoComponent, selectors: [["app-form-detalle-consumo"]], viewQuery: function FormDetalleConsumoComponent_Query(rf, ctx) {
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
]), \u0275\u0275StandaloneFeature], decls: 90, vars: 50, consts: [["stepper", ""], ["data", ""], ["cdkScrollable", "", 1, "absolute", "inset-0", "flex", "flex-col", "min-w-0", "items-center", "overflow-y-auto", "bg-gray-100", "p-6", "sm:p-8"], [1, "relative", "w-full", "flex-0", "max-w-4xl", "sm:rounded-lg", "overflow-hidden"], [1, "p-2", "text-3xl", "font-semibold", "text-center", "text-gray-800"], [1, "w-full", "px-6", "py-4", 3, "orientation", "linear", "animationDuration"], ["label", "Consultar trabajador", 3, "stepControl", "editable"], [1, "flex", "flex-col", "items-center", "w-full"], [1, "space-y-4", "w-full", "max-w-sm", 3, "formGroup"], [1, "w-full"], [3, "formControlName"], [4, "ngIf"], ["floatLabel", "always", 1, "w-full"], ["matInput", "", "placeholder", "N\xFAmero de identificaci\xF3n", 3, "formControlName"], ["class", "mb-4", 3, "appearance", "showIcon", "type", 4, "ngIf"], ["mat-raised-button", "", 1, "text-white", "px-6", "py-2", "rounded-md", "w-full", 3, "click", "disabled", "ngClass"], ["label", "Verificar informaci\xF3n", 3, "stepControl"], [1, "space-y-4", "w-full", "max-w-lg", "mx-auto", 3, "formGroup"], [1, "flex", "flex-col", "sm:flex-row", "gap-4"], ["matInput", "", 3, "formControlName", "readonly"], [1, "flex", "flex-col"], [1, "flex", "flex-wrap", "justify-center", "sm:justify-center", "mt-2", "w-full"], ["mat-button", "", "matStepperNext", "", 1, "w-2/3", "bg-crediblue-50", "text-white", "py-2", "px-4", "rounded", 3, "disabled"], ["label", "Completar compra", 3, "stepControl", "editable"], [1, "w-full", "h-full", "p-4", "sm:p-8"], ["matInput", "", "placeholder", "N\xFAmero de factura", 3, "formControlName"], ["placeholder", "Tipo de consumo", 3, "formControlName"], ["matInput", "", "thousandSeparator", ".", "placeholder", "Valor", 3, "formControlName", "mask"], [1, "flex", "flex-wrap", "justify-center", "sm:justify-center", "gap-4", "mt-2"], ["mat-button", "", "matStepperPrevious", "", 1, "sm:w-auto", "w-full", "bg-gray-500", "text-white", "py-2", "px-4", "rounded", "hover:bg-gray-600"], ["mat-button", "", 1, "sm:w-auto", "w-full", "bg-crediblue-50", "text-white", "py-2", "px-4", "rounded", 3, "click", "disabled"], ["label", "Resumen de compra", 3, "stepControl"], ["class", "w-full h-full px-4", 4, "ngIf"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [1, "mb-4", 3, "appearance", "showIcon", "type"], [1, "w-full", "h-full", "px-4"], [1, "max-w-2xl", "mx-auto", "p-4", "bg-white", "shadow-lg", "rounded-lg"], [1, "border-b", "pb-4", "mb-4"], [1, "text-2xl", "font-bold", "text-gray-800"], [1, "text-sm", "text-gray-500"], [1, "space-y-4"], [1, "flex", "justify-between", "items-center", "border-b", "pb-2"], [1, "text-lg", "font-semibold", "text-gray-700"], [1, "text-lg", "font-bold", "text-gray-800"], [1, "flex", "justify-between", "items-center", "pt-4", "border-t"], [1, "flex", "justify-between", "items-center"], [1, "flex", "justify-between", "items-center", "border-t", "pt-4"], [1, "flex", "sm:flex-row", "flex-col", "gap-2.5", "mt-6"], ["mat-flat-button", "", 1, "w-full", "bg-crediblue-50", "text-white", "py-2", "px-4", "rounded-lg", 3, "click", "disabled"], [3, "diameter", "mode"], ["mat-flat-button", "", 1, "w-full", "bg-crediorange-100", "text-white", "py-2", "px-4", "rounded-lg", 3, "click", "disabled"]], template: function FormDetalleConsumoComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "div", 4);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-stepper", 5, 0)(6, "mat-step", 6)(7, "div", 7)(8, "form", 8)(9, "mat-form-field", 9)(10, "mat-label");
    \u0275\u0275text(11, "Tipo de documento");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "mat-select", 10);
    \u0275\u0275template(13, FormDetalleConsumoComponent_ng_container_13_Template, 2, 1, "ng-container", 11);
    \u0275\u0275pipe(14, "async");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "mat-form-field", 12)(16, "mat-label");
    \u0275\u0275text(17, "N\xFAmero de identificaci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275element(18, "input", 13);
    \u0275\u0275template(19, FormDetalleConsumoComponent_Conditional_19_Template, 3, 2, "mat-error");
    \u0275\u0275elementEnd();
    \u0275\u0275template(20, FormDetalleConsumoComponent_fuse_alert_20_Template, 2, 5, "fuse-alert", 14);
    \u0275\u0275elementStart(21, "button", 15);
    \u0275\u0275listener("click", function FormDetalleConsumoComponent_Template_button_click_21_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.onSearch());
    });
    \u0275\u0275text(22, "Consultar");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(23, "mat-step", 16)(24, "div", 9)(25, "form", 17)(26, "div", 18)(27, "mat-form-field", 9)(28, "mat-label");
    \u0275\u0275text(29, "Primer nombre");
    \u0275\u0275elementEnd();
    \u0275\u0275element(30, "input", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "mat-form-field", 9)(32, "mat-label");
    \u0275\u0275text(33, "Segundo nombre");
    \u0275\u0275elementEnd();
    \u0275\u0275element(34, "input", 19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div", 18)(36, "mat-form-field", 9)(37, "mat-label");
    \u0275\u0275text(38, "Primer apellido");
    \u0275\u0275elementEnd();
    \u0275\u0275element(39, "input", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "mat-form-field", 9)(41, "mat-label");
    \u0275\u0275text(42, "Segundo apellido");
    \u0275\u0275elementEnd();
    \u0275\u0275element(43, "input", 19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(44, "div", 18)(45, "mat-form-field", 9)(46, "mat-label");
    \u0275\u0275text(47, "Identificaci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275element(48, "input", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "mat-form-field", 9)(50, "mat-label");
    \u0275\u0275text(51, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275element(52, "input", 19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(53, "div", 20)(54, "mat-form-field", 9)(55, "mat-label");
    \u0275\u0275text(56, "Cr\xE9dito / Cupo disponible");
    \u0275\u0275elementEnd();
    \u0275\u0275element(57, "input", 19);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(58, "div", 21)(59, "button", 22);
    \u0275\u0275text(60, "Siguiente");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(61, "mat-step", 23)(62, "div", 24)(63, "form", 17)(64, "div", 20)(65, "mat-form-field", 12)(66, "mat-label");
    \u0275\u0275text(67, "N\xFAmero de factura");
    \u0275\u0275elementEnd();
    \u0275\u0275element(68, "input", 25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(69, "div", 18)(70, "mat-form-field", 12)(71, "mat-label");
    \u0275\u0275text(72, "Tipo consumo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(73, "mat-select", 26, 1);
    \u0275\u0275template(75, FormDetalleConsumoComponent_ng_container_75_Template, 2, 1, "ng-container", 11);
    \u0275\u0275pipe(76, "async");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(77, "div", 20)(78, "mat-form-field", 12)(79, "mat-label");
    \u0275\u0275text(80, "Valor");
    \u0275\u0275elementEnd();
    \u0275\u0275element(81, "input", 27);
    \u0275\u0275template(82, FormDetalleConsumoComponent_mat_error_82_Template, 3, 2, "mat-error", 11);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(83, "div", 28)(84, "button", 29);
    \u0275\u0275text(85, "Anterior");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(86, "button", 30);
    \u0275\u0275listener("click", function FormDetalleConsumoComponent_Template_button_click_86_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.onSave());
    });
    \u0275\u0275text(87, "Pagar");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(88, "mat-step", 31);
    \u0275\u0275template(89, FormDetalleConsumoComponent_div_89_Template, 49, 15, "div", 32);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", "Detalle consumo", " ");
    \u0275\u0275advance();
    \u0275\u0275property("orientation", "vertical")("linear", true)("animationDuration", "500");
    \u0275\u0275advance(2);
    \u0275\u0275property("stepControl", ctx.firstFormGroup)("editable", false);
    \u0275\u0275advance(2);
    \u0275\u0275property("formGroup", ctx.firstFormGroup);
    \u0275\u0275advance(4);
    \u0275\u0275property("formControlName", "idTipoDoc");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(14, 43, ctx.tiposDocumentos$));
    \u0275\u0275advance(5);
    \u0275\u0275property("formControlName", "numDocumento");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.firstFormGroup.get("numDocumento").dirty || ctx.firstFormGroup.get("numDocumento").touched ? 19 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.showAlert);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx.firstFormGroup.invalid)("ngClass", \u0275\u0275pureFunction2(47, _c1, ctx.firstFormGroup.valid, ctx.firstFormGroup.invalid));
    \u0275\u0275advance(2);
    \u0275\u0275property("stepControl", ctx.secondFormGroup);
    \u0275\u0275advance(2);
    \u0275\u0275property("formGroup", ctx.secondFormGroup);
    \u0275\u0275advance(5);
    \u0275\u0275property("formControlName", "primerNombre")("readonly", true);
    \u0275\u0275advance(4);
    \u0275\u0275property("formControlName", "segundoNombre")("readonly", true);
    \u0275\u0275advance(5);
    \u0275\u0275property("formControlName", "primerApellido")("readonly", true);
    \u0275\u0275advance(4);
    \u0275\u0275property("formControlName", "segundoApellido")("readonly", true);
    \u0275\u0275advance(5);
    \u0275\u0275property("formControlName", "numDoc")("readonly", true);
    \u0275\u0275advance(4);
    \u0275\u0275property("formControlName", "correo")("readonly", true);
    \u0275\u0275advance(5);
    \u0275\u0275property("formControlName", "credito")("readonly", true);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx.secondFormGroup.invalid);
    \u0275\u0275advance(2);
    \u0275\u0275property("stepControl", ctx.thirdFormGroup)("editable", false);
    \u0275\u0275advance(2);
    \u0275\u0275property("formGroup", ctx.thirdFormGroup);
    \u0275\u0275advance(5);
    \u0275\u0275property("formControlName", "numeroFactura");
    \u0275\u0275advance(5);
    \u0275\u0275property("formControlName", "idTipoConsumo");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(76, 45, ctx.tipoConsumo$));
    \u0275\u0275advance(6);
    \u0275\u0275property("formControlName", "montoConsumo")("mask", "separator.0");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.montoConsumo.dirty || ctx.montoConsumo.touched);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx.thirdFormGroup.invalid);
    \u0275\u0275advance(2);
    \u0275\u0275property("stepControl", ctx.thirdFormGroup);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.detaleConsumo);
  }
}, dependencies: [
  MatStepper,
  MatStep,
  FormsModule,
  \u0275NgNoValidate,
  DefaultValueAccessor,
  NgControlStatus,
  NgControlStatusGroup,
  MatFormField,
  MatInput,
  MatLabel,
  MatButton,
  MatError,
  MatStepperNext,
  AsyncPipe,
  MatOption,
  MatSelect,
  NgForOf,
  NgIf,
  ReactiveFormsModule,
  FormGroupDirective,
  FormControlName,
  CdkScrollable,
  MatStepperPrevious,
  FuseAlertComponent,
  CurrencyPipe,
  DatePipe,
  NgClass,
  NgxMaskDirective,
  MatProgressSpinner
], styles: ["\n\n  .mat-step-header .mat-step-icon-selected, \n  .mat-step-header .mat-step-icon-state-done, \n  .mat-step-header .mat-step-icon-state-edit {\n  background-color: #155ee9 !important;\n  color: #fff;\n}\n  .mat-vertical-stepper-header {\n  pointer-events: none !important;\n}\n/*# sourceMappingURL=form-detalle-consumo.component.css.map */"], data: { animation: fuseAnimations } });
var FormDetalleConsumoComponent = _FormDetalleConsumoComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FormDetalleConsumoComponent, { className: "FormDetalleConsumoComponent", filePath: "src\\app\\pages\\gestion-creditos\\detalle-consumo\\form-detalle-consumo\\form-detalle-consumo.component.ts", lineNumber: 88 });
})();
function validateNumbers(valoraComparar) {
  return (control) => {
    const value = control.value;
    console.log(valoraComparar);
    console.log(value);
    if (value > valoraComparar) {
      return { notEqual: true };
    }
    return null;
  };
}

// src/app/pages/gestion-creditos/detalle-consumo/detalle-consumo.routes.ts
var detalle_consumo_routes_default = [
  {
    path: "",
    component: FormDetalleConsumoComponent
  },
  {
    path: ":tipo/:num",
    component: FormDetalleConsumoComponent
  }
];
export {
  detalle_consumo_routes_default as default
};
//# sourceMappingURL=chunk-RYOYERDO.js.map
