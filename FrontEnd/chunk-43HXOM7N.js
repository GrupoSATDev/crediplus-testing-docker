import {
  TipoSolicitudesService
} from "./chunk-FEOMGNW7.js";
import {
  SolicitudesService
} from "./chunk-W23MYNPT.js";
import {
  CodigosEstadosSolicitudes
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
  MatStep,
  MatStepper,
  MatStepperNext,
  MatStepperPrevious
} from "./chunk-P3XZLDFI.js";
import {
  EmpleadosService
} from "./chunk-WT4TBEYC.js";
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
import "./chunk-NACP6IOB.js";
import {
  FuseConfirmationService,
  exportar,
  guardar
} from "./chunk-HUKVMAZY.js";
import {
  MatCheckbox
} from "./chunk-Y3J4EKDD.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControl,
  FormControlDirective,
  FormControlName,
  FormGroupDirective,
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
import "./chunk-ROMZC4L4.js";
import {
  AsyncPipe,
  CurrencyPipe,
  DatePipe,
  EventEmitter,
  MatAnchor,
  MatButton,
  MatIcon,
  MatOption,
  NgClass,
  NgForOf,
  NgIf,
  inject,
  map,
  switchMap,
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
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate4,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-WGDVSMOG.js";
import {
  __objRest,
  __spreadValues
} from "./chunk-AYDYM6RQ.js";

// src/app/pages/gestion-creditos/solicitudes/terminos-condiciones/terminos-condiciones.component.ts
var _TerminosCondicionesComponent = class _TerminosCondicionesComponent {
  constructor() {
    this.aceptado = false;
    this.aceptacionCambiada = new EventEmitter();
  }
  toggleAceptar(event) {
    this.aceptado = event.checked;
    this.aceptacionCambiada.emit(this.aceptado);
  }
};
_TerminosCondicionesComponent.\u0275fac = function TerminosCondicionesComponent_Factory(t) {
  return new (t || _TerminosCondicionesComponent)();
};
_TerminosCondicionesComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TerminosCondicionesComponent, selectors: [["app-terminos-condiciones"]], outputs: { aceptacionCambiada: "aceptacionCambiada" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 35, vars: 0, consts: [[1, "p-4", "border", "rounded-md", "shadow-sm"], [1, "text-lg", "font-semibold", "mb-2", "text-center"], ["cdkScrollable", "", 1, "terminos-contenido"], [1, "mb-4"], [1, "block", "text-center"], [1, "text-gray-800", "text-left"], [1, "check"], [3, "change"]], template: function TerminosCondicionesComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "h2", 1);
    \u0275\u0275text(2, "T\xC9RMINOS Y CONDICIONES");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 2)(4, "p", 3)(5, "span", 4)(6, "b");
    \u0275\u0275text(7, " DECLARACI\xD3N DE TITULARIDAD Y VERACIDAD DE LA INFORMACI\xD3N. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(8, "br");
    \u0275\u0275elementStart(9, "small", 5);
    \u0275\u0275text(10, " Como la informaci\xF3n aqu\xED suministrada por m\xED es confidencial y b\xE1sica para la vinculaci\xF3n como Cliente de CREDIPLUS, la gesti\xF3n y aprobaci\xF3n de cualquier producto u operaci\xF3n y/o la atenci\xF3n de mis solicitudes, peticiones, quejas o reclamos; CREDIPLUS exige que todos los datos suministrados sean exactos y se puedan verificar. Declaro que la informaci\xF3n suministrada en este Sitio Web/Aplicaci\xF3n es de mi titularidad, concuerda con la realidad y asumo plena responsabilidad por la veracidad de la misma; cualquier inexactitud podr\xE1 acarrear su rechazo o la no aprobaci\xF3n de la vinculaci\xF3n al Banco y/o de la solicitud del (de los) producto(s), sin responsabilidad alguna por parte de CREDIPLUS frente a terceros o al (a los) solicitantes. Reconozco y acepto que en el evento que la informaci\xF3n por m\xED suministrada en este Sitio Web/Aplicaci\xF3n no sea de mi propiedad, induzca a una falsedad personal o sea violatoria del bien jur\xEDdico tutelado denominado \u201Cde la protecci\xF3n de la informaci\xF3n y de los datos\u201D podr\xE9 incurrir en tipos penales sanci\xF3nales por la Ley Penal Colombiana. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "p", 3)(12, "span", 4)(13, "b");
    \u0275\u0275text(14, " AUTORIZACI\xD3N PARA EL REPORTE Y CONSULTA DE INFORMACI\xD3N ANTE LOS OPERADORES DE BANCOS DE DATOS DE INFORMACI\xD3N FINANCIERA Y/O CREDITICIA (LEY 1266 DE 2008). ");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(15, "br");
    \u0275\u0275elementStart(16, "small", 5);
    \u0275\u0275text(17, " Con la finalidad de que CREDIPLUS pueda dar tr\xE1mite a mi solicitud de nuevos productos, evaluar y estudiar mi comportamiento crediticio y comercial y mantener actualizada mi informaci\xF3n financiera, crediticia y comercial ante los operadores de bancos de datos, AUTORIZO a CREDIPLUS para que: i) obtenga toda la informaci\xF3n y referencias relativas a mi persona, a mi comportamiento crediticio y comercial, mis h\xE1bitos de pago, el manejo de la(s) cuenta(s) corriente(s) y de ahorros, de tarjetas de cr\xE9dito, de otros productos financieros y/o de servicios contratados con el sector financiero y/o con el sector real y, en general, el cumplimiento dado a mis obligaciones; ii) consulte ante los operadores de bancos de datos, as\xED como ante cualquier otra entidad de caracter\xEDsticas similares que en el futuro se establezca, mi endeudamiento con el sector financiero, as\xED como la informaci\xF3n comercial disponible sobre el cumplimiento dado a los compromisos adquiridos con dicho(s) sector(es); iii) incluya mi nombre, apellidos y tipo y n\xFAmero de mi documento de identificaci\xF3n, y dem\xE1s informaci\xF3n que se haga necesaria, en los archivos de deudores y obligados que llevan los operadores de bancos de datos, o cualquiera otra entidad que en el futuro se establezca con ese prop\xF3sito, reportando el comportamiento positivo o negativo que se presente en la atenci\xF3n de las obligaciones a mi cargo. La autorizaci\xF3n de reporte aqu\xED establecida se hace extensiva a cualquier persona natural o jur\xEDdica que en el futuro llegue a ostentar la calidad de acreedor en relaci\xF3n con la(s) obligaci\xF3n(es) contra\xEDda(s) con CREDIPLUS; iv) consulte y procese mi informaci\xF3n ante los operadores de bancos de datos y operadores de informaci\xF3n y riesgo (Cifin, Experian, Covinoc, Fenalcheque) o cualquier otra que en un futuro se establezca; v) entregue o comparta mi informaci\xF3n con personas jur\xEDdicas que administran bases de datos, para efectos de prevenci\xF3n y control de fraudes y selecci\xF3n de riesgos; vi) remita v\xEDa correo electr\xF3nico y/o f\xEDsico, seg\xFAn lo estime pertinente, a la(s) direcci\xF3n(direcciones) suministradas por m\xED en este Sitio Web/Aplicaci\xF3n y/o en los registros de esa Entidad Financiera la notificaci\xF3n previa de que trata el art\xEDculo 21 de la Ley 1266 de 2008 y/o cualquier otra norma que lo modifique o adicione; vii) conserve, con las debidas actualizaciones y durante el per\xEDodo necesario se\xF1alado en la Ley, mi informaci\xF3n crediticia; viii) reporte a las autoridades p\xFAblicas, tributarias, aduaneras o judiciales, la informaci\xF3n que requieran en el desarrollo de sus funciones; ix) ejerza el derecho de inspecci\xF3n para corroborar en cualquier tiempo que la informaci\xF3n que he suministrado para la aprobaci\xF3n del (de los) producto(s) y/o servicio(s) es veraz, completa, exacta y actualizada; y, x) para que en el evento de negarse la solicitud de vinculaci\xF3n al Banco y/o el otorgamiento de uno o varios de los productos y/o servicios que \xE9ste ofrece, dicha Entidad destruya los documentos que se aportan como soporte de la respectiva solicitud, dejando al efecto constancia expresa de su destrucci\xF3n. El resultado del an\xE1lisis para acceder al producto, me ser\xE1 informado a trav\xE9s de alguno de los medios de contacto que he suministrado. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "p", 3)(19, "span", 4)(20, "b");
    \u0275\u0275text(21, " AUTORIZACI\xD3N PARA EL TRATAMIENTO DE LA INFORMACI\xD3N PERSONAL (LEY 1581 DE 2012) ");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(22, "br");
    \u0275\u0275elementStart(23, "small", 5);
    \u0275\u0275text(24, " De manera libre, voluntaria y expresa autorizo a CREDIPLUS para que lleve a cabo el tratamiento de mis datos personales. En virtud de dicha autorizaci\xF3n de tratamiento, CREDIPLUS podr\xE1 recolectar, almacenar, usar, circular, transferir, trasmitir, suprimir y/o actualizar mis datos e informaci\xF3n personal, la cual, es suministrada por m\xED a trav\xE9s del Sitio Web/Aplicaci\xF3n. Mis datos e informaci\xF3n personal podr\xE1n ser sujetos de tratamiento por CREDIPLUS, sus Encargados o Personas Responsables a quienes \xE9l les haya transmitido o transferido la informaci\xF3n. En ese sentido, el tratamiento por la presente autorizaci\xF3n permitido a CREDIPLUS y a quien tenga la calidad de Encargado o Persona Responsable podr\xE1 tener por objeto las finalidades leg\xEDtimas de: i) cumplir las obligaciones contractuales y reglamentarias, as\xED como para la prestaci\xF3n de los servicios contratados; ii) atender y dar soluci\xF3n a las solicitudes, peticiones, quejas o reclamos formulados al Banco; iii) crear y actualizar los perfiles transaccionales; iv) realizar gestiones comerciales; v) ofrecer productos o servicios, propios o de terceros; vi) realizar labores para que se avalen, afiancen o garanticen las operaciones de cr\xE9dito; vii) realizar labores para que se origine mi vinculaci\xF3n al Banco como Cliente de uno o varios productos y servicios financieros pudiendo compartir informaci\xF3n con terceros, tales como, Compa\xF1\xEDas Aseguradoras, Intermediarios de Seguros, Instituciones Educativas, Concesionarios, y Entidades P\xFAblicas y/o Privadas de cualquier naturaleza con las que se tengan Convenios de Libranza y/u otro tipo de alianzas comerciales, entre otros; viii) realizar gestiones de cobranza; ix) informar sobre los cambios realizados a los productos y servicios del portafolio del Banco; x) informar sobre las campa\xF1as y estrategias promocionales y de mercadeo; xi) analizar las tendencias y comportamientos de consumo de los consumidores financieros; xii) recibir informaci\xF3n, ofertas comerciales y publicitarias de productos del Banco y de aliados de \xE9ste; xiii) recibir cualquier tipo de informaci\xF3n y/o comunicaci\xF3n que el Banco estime necesario; y, xiv) se adelanten todos los procesos de relacionamiento con el cliente (soportados o no en tecnolog\xEDa), para un abordaje integral con todos mis productos y soluciones contratadas con CREDIPLUS, entre otros permitidos por la Ley. Conozco y entiendo que las respuestas a las preguntas sobre el tratamiento de datos sensibles son facultativas. Como Titular de la informaci\xF3n tengo derecho a conocer, actualizar y rectificar mis datos personales, solicitar prueba de la autorizaci\xF3n otorgada para el tratamiento de la informaci\xF3n, informarme sobre el uso que se ha dado a los mismos, revocar la autorizaci\xF3n, solicitar la supresi\xF3n de mis datos cuando sea procedente y acceder en forma gratuita a los mismos. En virtud de la presente autorizaci\xF3n el responsable del tratamiento de la informaci\xF3n es CREDIPLUS. La presente autorizaci\xF3n se hace extensiva a quien represente los intereses de CREDIPLUS y a quien la Entidad ceda sus derechos, obligaciones o su posici\xF3n contractual a cualquier t\xEDtulo, en relaci\xF3n con los productos o servicios de los que soy titular. Para ejercer los derechos sobre sus datos personales puede comunicarse a la l\xEDnea de Atenci\xF3n en Barranquilla: XXXXXXXXXXX. Para conocer nuestra pol\xEDtica de privacidad visite https://www.XXXXXXXXXXXX. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "p", 3)(26, "span", 4)(27, "b");
    \u0275\u0275text(28, " AUTORIZACI\xD3N PARA COMPARTIR DATOS PERSONALES CON ENTIDADES PERTENECIENTES AL GRUPO ECON\xD3MICO ");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(29, "br");
    \u0275\u0275elementStart(30, "small", 5);
    \u0275\u0275text(31, " Autorizo expresa y voluntariamente a CREDIPLUS y/o a cualquier otra Entidad que represente sus derechos, a compartir mi informaci\xF3n personal, financiera, crediticia y comercial como Cliente de la entidad con cualquiera otra persona o Entidad Vinculada al Grupo Econ\xF3mico al que pertenece y/o llegue a pertenecer CREDIPLUS o la Entidad que represente sus derechos; para realizar el mismo tratamiento y con las mismas finalidades que haya llegado a autorizar a CREDIPLUS. Declaro haber le\xEDdo cuidadosamente el contenido de este documento y haberlo comprendido a cabalidad, raz\xF3n por la cual entiendo su alcance e implicaciones y con la aceptaci\xF3n de los t\xE9rminos y condiciones contenidos en este Sitio Web/Aplicaci\xF3n de CREDIPLUS acepto expresamente: i) la autorizaci\xF3n para el reporte y consulta de mi informaci\xF3n ante los operadores de bancos de datos de informaci\xF3n financiera y/o crediticia (Ley 1266 de 2008); ii) el tratamiento de mis datos personales y dem\xE1s informaci\xF3n; y, iii) el compartir mis datos personales con Entidades pertenecientes al Grupo Econ\xF3mico. El presente documento tendr\xE1 validez desde su aceptaci\xF3n de los t\xE9rminos y condiciones marcando el check de aceptaci\xF3n electr\xF3nica del formulario de solicitud, durante la vigencia de la relaci\xF3n del Cliente con CREDIPLUS y/o de quien en el futuro represente sus derechos, u ostente los derechos y/u obligaciones a cargo de CREDIPLUS, y en general por el t\xE9rmino establecido en la Ley. ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(32, "div", 6)(33, "mat-checkbox", 7);
    \u0275\u0275listener("change", function TerminosCondicionesComponent_Template_mat_checkbox_change_33_listener($event) {
      return ctx.toggleAceptar($event);
    });
    \u0275\u0275text(34, " Acepto los t\xE9rminos y condiciones ");
    \u0275\u0275elementEnd()()();
  }
}, dependencies: [
  MatCheckbox,
  CdkScrollable
], styles: ['@charset "UTF-8";\n\n\n\n.terminos-contenido[_ngcontent-%COMP%] {\n  max-height: 200px;\n  overflow-y: auto;\n  padding-right: 10px;\n  margin-bottom: 15px;\n}\n.check[_ngcontent-%COMP%] {\n  margin-left: -12px;\n}\n/*# sourceMappingURL=terminos-condiciones.component.css.map */'] });
var TerminosCondicionesComponent = _TerminosCondicionesComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TerminosCondicionesComponent, { className: "TerminosCondicionesComponent", filePath: "src\\app\\pages\\gestion-creditos\\solicitudes\\terminos-condiciones\\terminos-condiciones.component.ts", lineNumber: 15 });
})();

// src/app/pages/gestion-creditos/solicitudes/form-solicitudes/form-solicitudes.component.ts
var _c0 = (a0, a1) => ({ "bg-crediblue-50": a0, "bg-credigray-100": a1 });
function FormSolicitudesComponent_ng_container_74_mat_option_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 31);
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
function FormSolicitudesComponent_ng_container_74_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, FormSolicitudesComponent_ng_container_74_mat_option_1_Template, 2, 2, "mat-option", 30);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const tipoSolicitud_r3 = ctx.ngIf;
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", tipoSolicitud_r3.data);
  }
}
function FormSolicitudesComponent_mat_error_80_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Este campo es requerido!. ");
    \u0275\u0275elementEnd();
  }
}
var maskConfig = {
  validation: false
};
var _FormSolicitudesComponent = class _FormSolicitudesComponent {
  constructor() {
    this.fb = inject(FormBuilder);
    this.dialogRef = inject(MatDialogRef);
    this.fuseService = inject(FuseConfirmationService);
    this.estadosDatosService = inject(EstadosDatosService);
    this.toasService = inject(ToastAlertsService);
    this.empleadoService = inject(EmpleadosService);
    this._matData = inject(MAT_DIALOG_DATA);
    this.aceptoTerminos = false;
    this.matDisabled = false;
    this.swalService = inject(SwalService);
    this.tipoSolicitudService = inject(TipoSolicitudesService);
    this.tipoSolicitud$ = this.tipoSolicitudService.getTipos().pipe(map((response) => {
      response.data = response.data.filter((res) => res.nombre !== "Desembolsos");
      return response;
    }), tap((opciones) => {
      const valorDefecto = opciones.data[0];
      if (valorDefecto) {
        this.secondFormGroup.get("idTipoSolicitud").setValue(valorDefecto.id);
      }
    }));
    this.solicitudService = inject(SolicitudesService);
  }
  ngOnInit() {
    this.createForm();
    const id = "c6d6b3a7-799f-42eb-8868-e069df989b11";
    this.subcripstion$ = this.empleadoService.getEmpleado(id).pipe(map((response) => {
      response.data.nombreCompleto = response.data.primerNombre + " " + response.data.segundoNombre + " " + response.data.primerApellido + " " + response.data.segundoApellido;
      return response;
    })).subscribe((response) => {
      const data = response.data;
      const campos = {
        nombreCompleto: response.data.nombreCompleto,
        numDoc: response.data.numDoc,
        direccion: response.data.direccion,
        idMunicipio: response.data.nombreMunicipio,
        correo: response.data.correo
      };
      this.firstFormGroup.patchValue(campos);
    });
    this.listenForm();
  }
  onAceptarTerminos(aceptado) {
    this.aceptoTerminos = aceptado;
    if (aceptado) {
      this.initialInfoForm.patchValue({ check: true });
    } else {
      this.initialInfoForm.patchValue({ check: "" });
    }
  }
  onSave() {
    if (this.secondFormGroup.valid) {
      if (!this._matData.edit) {
        const data = this.secondFormGroup.getRawValue();
        const _a = data, { cupo } = _a, form = __objRest(_a, ["cupo"]);
        const createData = __spreadValues({
          cupo: Number(cupo)
        }, form);
        const dialog = this.fuseService.open(__spreadValues({}, guardar));
        dialog.afterClosed().subscribe((response) => {
          if (response === "confirmed") {
            this.solicitudService.postSolicitudes(createData).subscribe((res) => {
              console.log(res);
              console.log("Edicion");
              this.estadosDatosService.stateGridSolicitudes.next({ state: true, tab: 2 });
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
    }
  }
  listenForm() {
  }
  createForm() {
    this.initialInfoForm = this.fb.group({
      check: ["", Validators.required]
    });
    this.firstFormGroup = this.fb.group({
      nombreCompleto: ["", [Validators.required]],
      numDoc: ["", [Validators.required]],
      direccion: ["", [Validators.required]],
      idMunicipio: ["", [Validators.required]],
      correo: ["", [Validators.required]]
    });
    this.secondFormGroup = this.fb.group({
      cupo: ["", [Validators.required]],
      observacion: [""],
      idTipoSolicitud: [""]
    });
  }
  closeDialog() {
    this.dialogRef.close();
  }
};
_FormSolicitudesComponent.\u0275fac = function FormSolicitudesComponent_Factory(t) {
  return new (t || _FormSolicitudesComponent)();
};
_FormSolicitudesComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FormSolicitudesComponent, selectors: [["app-form-solicitudes"]], standalone: true, features: [\u0275\u0275ProvidersFeature([
  provideNgxMask(maskConfig)
]), \u0275\u0275StandaloneFeature], decls: 91, vars: 45, consts: [["stepper", ""], [1, "w-full", "sm:bg-card", "sm:rounded-2xl", "sm:mx-0", "mx-auto"], [3, "linear"], ["label", "Terminos y condiciones", 3, "stepControl", "editable"], [1, "flex", "flex-col", "items-center", "justify-center", "w-full", "h-full", "px-4"], [1, "max-w-lg", 3, "formGroup"], [3, "aceptacionCambiada"], [1, "text-center"], ["mat-flat-button", "", 1, "bg-crediorange-100", "mt-4", "rounded-lg", "transition", "duration-200", "text-white", "font-semibold", 3, "click", "color"], ["mat-raised-button", "", "matStepperNext", "", 1, "text-white", "px-6", "py-2", "rounded-md", "mt-4", "ml-2", 3, "disabled", "ngClass"], ["label", "Verifica tu informaci\xF3n", 3, "stepControl", "editable"], [3, "formGroup"], [1, "w-full"], ["matInput", "", 3, "formControlName", "readonly"], [1, "flex", "flex-wrap", "justify-center", "gap-2.5"], ["mat-raised-button", "", "matStepperPrevious", "", 1, "bg-credigray-100", "rounded-lg", "transition", "duration-200", "text-white", "font-semibold"], ["mat-raised-button", "", "matStepperNext", "", 1, "bg-crediblue-50", "text-white", "px-6", "py-2", "rounded-md", 3, "disabled"], ["label", "Pasos a seguir", 3, "editable"], [1, "max-w-lg", "text-center", 3, "formGroup"], [1, "text-2xl", "font-bold", "mb-4"], [1, "mb-6", "text-left"], ["mat-flat-button", "", 1, "bg-crediorange-100", "rounded-lg", "transition", "duration-200", "text-white", "font-semibold", 3, "click", "color"], ["mat-raised-button", "", "matStepperNext", "", 1, "bg-crediblue-50", "text-white", "px-6", "py-2", "rounded-md", "ml-2", 3, "disabled"], ["label", "Solicita tu cupo", 3, "stepControl", "editable"], ["floatLabel", "always", 1, "w-full"], ["placeholder", "Tipo de solicitud", 3, "formControlName"], [4, "ngIf"], ["matInput", "", "thousandSeparator", ".", "placeholder", "Cupo solicitado", 3, "formControlName", "mask"], ["matInput", "", "placeholder", "Observaciones", 3, "formControlName"], ["mat-raised-button", "", 1, "text-white", "px-6", "py-2", "rounded-md", "ml-2", 3, "click", "disabled", "ngClass"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function FormSolicitudesComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "mat-horizontal-stepper", 2, 0)(3, "mat-step", 3)(4, "div", 4)(5, "form", 5)(6, "app-terminos-condiciones", 6);
    \u0275\u0275listener("aceptacionCambiada", function FormSolicitudesComponent_Template_app_terminos_condiciones_aceptacionCambiada_6_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.onAceptarTerminos($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 7)(8, "button", 8);
    \u0275\u0275listener("click", function FormSolicitudesComponent_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.closeDialog());
    });
    \u0275\u0275elementStart(9, "span");
    \u0275\u0275text(10, " Cancelar ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "button", 9);
    \u0275\u0275text(12, " Siguiente ");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(13, "mat-step", 10)(14, "div", 4)(15, "form", 11)(16, "mat-form-field", 12)(17, "mat-label");
    \u0275\u0275text(18, "Nombre de completo");
    \u0275\u0275elementEnd();
    \u0275\u0275element(19, "input", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "mat-form-field", 12)(21, "mat-label");
    \u0275\u0275text(22, "Identificaci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275element(23, "input", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "mat-form-field", 12)(25, "mat-label");
    \u0275\u0275text(26, "Direcci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275element(27, "input", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "mat-form-field", 12)(29, "mat-label");
    \u0275\u0275text(30, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275element(31, "input", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "mat-form-field", 12)(33, "mat-label");
    \u0275\u0275text(34, "Ciudad");
    \u0275\u0275elementEnd();
    \u0275\u0275element(35, "input", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "div", 14)(37, "button", 15);
    \u0275\u0275text(38, "Anterior");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "button", 16);
    \u0275\u0275text(40, "Siguiente");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(41, "mat-step", 17)(42, "div", 4)(43, "form", 18)(44, "h2", 19);
    \u0275\u0275text(45, "Pasos a seguir");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "p", 20);
    \u0275\u0275text(47, " 1. Al completar estos pasos nuestro equipo validar\xE1 la informaci\xF3n y aprobar\xE1 o rechazar\xE1 la solicitud, puedes ver el estado en cualquier momento. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "p", 20);
    \u0275\u0275text(49, " 2.	Si tu solicitud fue aprobada nuestro equipo se comunicar\xE1 contigo para socializarte el cupo aprobado y los detalles de tu cr\xE9dito. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "p", 20);
    \u0275\u0275text(51, " 3.	Si tu solicitud fue rechazada puedes comunicarte con nuestro equipo para obtener m\xE1s informaci\xF3n, podr\xE1s realizar una nueva solicitud dentro de XXX d\xEDas. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "div")(53, "button", 21);
    \u0275\u0275listener("click", function FormSolicitudesComponent_Template_button_click_53_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.closeDialog());
    });
    \u0275\u0275elementStart(54, "span");
    \u0275\u0275text(55, " Cancelar ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(56, "button", 22);
    \u0275\u0275text(57, " Siguiente ");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(58, "mat-step", 23)(59, "div", 4)(60, "form", 18)(61, "h2", 19);
    \u0275\u0275text(62, "Solicita tu cupo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "p", 20);
    \u0275\u0275text(64, " Tu solicitud ser\xE1 revisada por nuestro equipo, en caso de ser aprobada, tu cr\xE9dito quedar\xE1 en estado ");
    \u0275\u0275elementStart(65, "b");
    \u0275\u0275text(66, "pendiente,");
    \u0275\u0275elementEnd();
    \u0275\u0275text(67, " mientras validamos tu informaci\xF3n financiera. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "p", 20);
    \u0275\u0275text(69, " Te invitamos a revisar constantemente tus solicitudes y cr\xE9ditos para conocer el estado en que se encuentran. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "mat-form-field", 24)(71, "mat-label");
    \u0275\u0275text(72, "Tipo de solicitud");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(73, "mat-select", 25);
    \u0275\u0275template(74, FormSolicitudesComponent_ng_container_74_Template, 2, 1, "ng-container", 26);
    \u0275\u0275pipe(75, "async");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(76, "mat-form-field", 24)(77, "mat-label");
    \u0275\u0275text(78, "Digita el cupo que deseas solicitar");
    \u0275\u0275elementEnd();
    \u0275\u0275element(79, "input", 27);
    \u0275\u0275template(80, FormSolicitudesComponent_mat_error_80_Template, 2, 0, "mat-error", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(81, "mat-form-field", 24)(82, "mat-label");
    \u0275\u0275text(83, "Observaci\xF3nes");
    \u0275\u0275elementEnd();
    \u0275\u0275element(84, "textarea", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(85, "div")(86, "button", 21);
    \u0275\u0275listener("click", function FormSolicitudesComponent_Template_button_click_86_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.closeDialog());
    });
    \u0275\u0275elementStart(87, "span");
    \u0275\u0275text(88, " Cancelar ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(89, "button", 29);
    \u0275\u0275listener("click", function FormSolicitudesComponent_Template_button_click_89_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.onSave());
    });
    \u0275\u0275text(90, "Finalizar ");
    \u0275\u0275elementEnd()()()()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("linear", true);
    \u0275\u0275advance(2);
    \u0275\u0275property("stepControl", ctx.initialInfoForm)("editable", !ctx.matDisabled);
    \u0275\u0275advance(2);
    \u0275\u0275property("formGroup", ctx.initialInfoForm);
    \u0275\u0275advance(3);
    \u0275\u0275property("color", "primary");
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", !ctx.aceptoTerminos)("ngClass", \u0275\u0275pureFunction2(39, _c0, ctx.aceptoTerminos, !ctx.aceptoTerminos));
    \u0275\u0275advance(2);
    \u0275\u0275property("stepControl", ctx.firstFormGroup)("editable", !ctx.matDisabled);
    \u0275\u0275advance(2);
    \u0275\u0275property("formGroup", ctx.firstFormGroup);
    \u0275\u0275advance(4);
    \u0275\u0275property("formControlName", "nombreCompleto")("readonly", true);
    \u0275\u0275advance(4);
    \u0275\u0275property("formControlName", "numDoc")("readonly", true);
    \u0275\u0275advance(4);
    \u0275\u0275property("formControlName", "direccion")("readonly", true);
    \u0275\u0275advance(4);
    \u0275\u0275property("formControlName", "correo")("readonly", true);
    \u0275\u0275advance(4);
    \u0275\u0275property("formControlName", "idMunicipio")("readonly", true);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx.firstFormGroup.invalid);
    \u0275\u0275advance(2);
    \u0275\u0275property("editable", !ctx.matDisabled);
    \u0275\u0275advance(2);
    \u0275\u0275property("formGroup", ctx.initialInfoForm);
    \u0275\u0275advance(10);
    \u0275\u0275property("color", "primary");
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx.initialInfoForm.invalid);
    \u0275\u0275advance(2);
    \u0275\u0275property("stepControl", ctx.secondFormGroup)("editable", !ctx.matDisabled);
    \u0275\u0275advance(2);
    \u0275\u0275property("formGroup", ctx.secondFormGroup);
    \u0275\u0275advance(13);
    \u0275\u0275property("formControlName", "idTipoSolicitud");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(75, 37, ctx.tipoSolicitud$));
    \u0275\u0275advance(5);
    \u0275\u0275property("formControlName", "cupo")("mask", "separator.0");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.secondFormGroup.get("cupo").dirty || ctx.secondFormGroup.get("cupo").touched && ctx.secondFormGroup.get("cupo").errors.required);
    \u0275\u0275advance(4);
    \u0275\u0275property("formControlName", "observacion");
    \u0275\u0275advance(2);
    \u0275\u0275property("color", "primary");
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx.secondFormGroup.invalid)("ngClass", \u0275\u0275pureFunction2(42, _c0, ctx.secondFormGroup.valid, ctx.secondFormGroup.invalid));
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
  FormControlName,
  MatStepper,
  MatStep,
  MatStepperPrevious,
  MatStepperNext,
  TerminosCondicionesComponent,
  NgClass,
  NgIf,
  MatError,
  NgxMaskDirective,
  AsyncPipe,
  MatOption,
  MatSelect,
  NgForOf
] });
var FormSolicitudesComponent = _FormSolicitudesComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FormSolicitudesComponent, { className: "FormSolicitudesComponent", filePath: "src\\app\\pages\\gestion-creditos\\solicitudes\\form-solicitudes\\form-solicitudes.component.ts", lineNumber: 57 });
})();

// src/app/pages/gestion-creditos/solicitudes/grid-solicitudes/grid-solicitudes.component.ts
var _c02 = (a0, a1) => ({ "bg-green-700": a0, "bg-credigray-100": a1 });
function GridSolicitudesComponent_ng_template_16_ng_container_0_Template(rf, ctx) {
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
function GridSolicitudesComponent_ng_template_16_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "div", 20)(2, "fuse-alert", 21)(3, "span", 22);
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
function GridSolicitudesComponent_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, GridSolicitudesComponent_ng_template_16_ng_container_0_Template, 2, 6, "ng-container", 17)(1, GridSolicitudesComponent_ng_template_16_ng_template_1_Template, 6, 2, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const noData_r3 = \u0275\u0275reference(2);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngIf", ctx_r1.data.length)("ngIfElse", noData_r3);
  }
}
function GridSolicitudesComponent_ng_template_18_ng_container_0_Template(rf, ctx) {
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
function GridSolicitudesComponent_ng_template_18_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "div", 20)(2, "fuse-alert", 21)(3, "span", 22);
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
function GridSolicitudesComponent_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, GridSolicitudesComponent_ng_template_18_ng_container_0_Template, 2, 6, "ng-container", 17)(1, GridSolicitudesComponent_ng_template_18_ng_template_1_Template, 6, 2, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const noData_r4 = \u0275\u0275reference(2);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngIf", ctx_r1.data.length)("ngIfElse", noData_r4);
  }
}
function GridSolicitudesComponent_ng_template_20_ng_container_0_Template(rf, ctx) {
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
function GridSolicitudesComponent_ng_template_20_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "div", 20)(2, "fuse-alert", 21)(3, "span", 22);
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
function GridSolicitudesComponent_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, GridSolicitudesComponent_ng_template_20_ng_container_0_Template, 2, 6, "ng-container", 17)(1, GridSolicitudesComponent_ng_template_20_ng_template_1_Template, 6, 2, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const noData_r5 = \u0275\u0275reference(2);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngIf", ctx_r1.data.length)("ngIfElse", noData_r5);
  }
}
var _GridSolicitudesComponent = class _GridSolicitudesComponent {
  constructor(_matDialog, estadoDatosService, solicitudService) {
    this._matDialog = _matDialog;
    this.estadoDatosService = estadoDatosService;
    this.solicitudService = solicitudService;
    this.datePipe = inject(DatePipe);
    this.currencyPipe = inject(CurrencyPipe);
    this.fuseService = inject(FuseConfirmationService);
    this.router = inject(Router);
    this.selectedTab = CodigosEstadosSolicitudes.PENDIENTE;
    this.searchTerm = "";
    this.aesEncriptService = inject(AesEncryptionService);
    this.exportData = [];
    this.data = [];
    this.columns = ["Fecha de solicitud", "Identificaci\xF3n", "Trabajador", "Empresa", "Cargo", "Tipo de contrato", "Fecha de inicio contrato", "Fecha fin de contrato", "Salario devengado", "Cupo solicitado", "Tipo de solicitud", "Estado"];
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
      "Estado": "nombreEstadoSolicitud"
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
    this.tabChanged = (tabChangeEvent) => {
      console.log("tabChangeEvent => ", tabChangeEvent);
      console.log("index => ", tabChangeEvent.index);
      this.tabIndex = tabChangeEvent.index;
      console.log(this.tabIndex);
      this.selectedTab = tabChangeEvent.index == 0 ? CodigosEstadosSolicitudes.PENDIENTE : tabChangeEvent.index == 1 ? CodigosEstadosSolicitudes.RECHAZADA : tabChangeEvent.index == 2 ? CodigosEstadosSolicitudes.APROBADA : CodigosEstadosSolicitudes.PENDIENTE;
      this.getSolicitudes(this.selectedTab);
    };
  }
  onNew() {
    this._matDialog.open(FormSolicitudesComponent, {
      autoFocus: false,
      data: {
        edit: false
      },
      maxHeight: "95vh",
      maxWidth: "100%",
      disableClose: true
    });
  }
  getSolicitudes(param) {
    this.subcription$ = this.solicitudService.getSolicitudes(param).pipe(map((response) => {
      response.data.forEach((items) => {
        items.estado = items.estado ? Estados.ACTIVO : Estados.INACTIVO;
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
        this.convertDataExport(response.data);
      } else {
        this.data = [];
      }
    }, (error) => {
      this.data = [];
    });
  }
  convertDataExport(data) {
    const convertData = data.map((items) => {
      return {
        FechaSolicitud: items.fechaCreacion,
        Identificacion: items.documentoTrabajador,
        Trabajador: items.nombreTrabajador,
        Empresa: items.nombreSubEmpresa,
        Cargo: items.cargoTrabajador,
        Contrato: items.tipoContratoTrabajador,
        FechaInicioContrato: items.fechaInicioContratoTrabajador,
        FechaFinContrato: items.fechaFinContratoTrabajador,
        SalarioDevengado: parseCurrency(items.salarioDevengadoTrabajador),
        CupoSolicitado: parseCurrency(items.cupo),
        TipoSolicitud: items.nombreTipoSolicitud,
        Estado: items.nombreEstadoSolicitud
      };
    });
    this.exportData = convertData;
  }
  listenGrid() {
    const refreshData$ = this.estadoDatosService.stateGridSolicitudes.asObservable();
    refreshData$.subscribe((states) => {
      if (states.state) {
        console.log("Si entro");
        console.log(states);
        this.selectedTab = states.tab == 0 ? CodigosEstadosSolicitudes.PENDIENTE : states.tab == 1 ? CodigosEstadosSolicitudes.RECHAZADA : states.tab == 2 ? CodigosEstadosSolicitudes.APROBADA : CodigosEstadosSolicitudes.PENDIENTE;
        this.tabIndex = states.tab;
        console.log(this.tabIndex);
        this.getSolicitudes(this.selectedTab);
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
    this.getSolicitudes(this.selectedTab);
    this.listenGrid();
  }
  exportToExcel(data) {
    const dialog = this.fuseService.open(__spreadValues({}, exportar));
    dialog.afterClosed().subscribe((response) => {
      if (response === "confirmed") {
        const worksheet = utils.json_to_sheet(data);
        const workbook = utils.book_new();
        utils.book_append_sheet(workbook, worksheet, "Sheet1");
        writeFileSync(workbook, `solicitudes${this.datePipe.transform(/* @__PURE__ */ new Date(), "dd/MM/yyyy")}.xlsx`);
      }
    });
  }
};
_GridSolicitudesComponent.\u0275fac = function GridSolicitudesComponent_Factory(t) {
  return new (t || _GridSolicitudesComponent)(\u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(EstadosDatosService), \u0275\u0275directiveInject(SolicitudesService));
};
_GridSolicitudesComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GridSolicitudesComponent, selectors: [["app-grid-solicitudes"]], standalone: true, features: [\u0275\u0275ProvidersFeature([
  DatePipe,
  CurrencyPipe
]), \u0275\u0275StandaloneFeature], decls: 21, vars: 12, consts: [["tabGroup", ""], ["noData", ""], [1, "bg-card", "flex", "min-w-0", "flex-auto", "flex-col", "dark:bg-transparent", "sm:absolute", "sm:inset-0", "sm:overflow-hidden"], [1, "relative", "flex", "flex-0", "flex-col", "px-6", "py-6", "sm:flex-row", "sm:items-center", "sm:justify-between", "md:px-8"], [1, "text-3xl", "font-semibold", "tracking-tight"], [1, "mt-6", "flex", "w-full", "shrink-0", "flex-col", "items-center", "sm:ml-4", "sm:mt-0", "sm:flex-row", "sm:space-x-2", "sm:w-auto"], [1, "fuse-mat-dense", "rounded-lg", "w-full", "sm:w-auto", "min-w-64", 3, "subscriptSizing"], ["matPrefix", "", 1, "icon-size-5", 3, "svgIcon"], ["matInput", "", 3, "input", "autocomplete", "placeholder"], ["mat-flat-button", "", 1, "sm:w-auto", "w-full", "sm:mt-0", "mt-2", "rounded-lg", "transition", "duration-200", "text-white", "font-semibold", 3, "click", "color", "ngClass", "disabled"], [1, "flex", "flex-auto", "overflow-hidden"], [1, "flex", "flex-auto", "flex-col", "overflow-hidden", "sm:overflow-y-auto", "bg-gray-100"], ["mat-stretch-tabs", "false", 1, "sm:px-2", 3, "selectedIndexChange", "selectedTabChange", "animationDuration", "selectedIndex"], ["label", "Pendientes"], ["matTabContent", ""], ["label", "Rechazadas"], ["label", "Aprobadas"], [4, "ngIf", "ngIfElse"], [3, "columns", "displayedColumns", "columnPropertyMap", "data", "buttons", "searchTerm"], [1, "inset-0", "min-w-0", "overflow-auto", "print:overflow-visible"], [1, "inline-block", "p-4", "sm:p-2", "print:p-0", "w-full"], [3, "type", "appearance"], ["fuseAlertTitle", ""]], template: function GridSolicitudesComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "div", 4);
    \u0275\u0275text(3, "Solicitudes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 5)(5, "mat-form-field", 6);
    \u0275\u0275element(6, "mat-icon", 7);
    \u0275\u0275elementStart(7, "input", 8);
    \u0275\u0275listener("input", function GridSolicitudesComponent_Template_input_input_7_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.onSearch($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "button", 9);
    \u0275\u0275listener("click", function GridSolicitudesComponent_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.exportToExcel(ctx.exportData));
    });
    \u0275\u0275elementStart(9, "span");
    \u0275\u0275text(10, " Exportar ");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(11, "div", 10)(12, "div", 11)(13, "mat-tab-group", 12, 0);
    \u0275\u0275twoWayListener("selectedIndexChange", function GridSolicitudesComponent_Template_mat_tab_group_selectedIndexChange_13_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.tabIndex, $event) || (ctx.tabIndex = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("selectedTabChange", function GridSolicitudesComponent_Template_mat_tab_group_selectedTabChange_13_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.tabChanged($event));
    });
    \u0275\u0275elementStart(15, "mat-tab", 13);
    \u0275\u0275template(16, GridSolicitudesComponent_ng_template_16_Template, 3, 2, "ng-template", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "mat-tab", 15);
    \u0275\u0275template(18, GridSolicitudesComponent_ng_template_18_Template, 3, 2, "ng-template", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "mat-tab", 16);
    \u0275\u0275template(20, GridSolicitudesComponent_ng_template_20_Template, 3, 2, "ng-template", 14);
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
  MatButton,
  MatFormField,
  MatIcon,
  MatInput,
  MatTab,
  MatTabGroup,
  MatTabContent,
  NgIf,
  FuseAlertComponent,
  NgClass
] });
var GridSolicitudesComponent = _GridSolicitudesComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GridSolicitudesComponent, { className: "GridSolicitudesComponent", filePath: "src\\app\\pages\\gestion-creditos\\solicitudes\\grid-solicitudes\\grid-solicitudes.component.ts", lineNumber: 50 });
})();

// src/app/pages/gestion-creditos/solicitudes/dialog-confirm-solicitud/dialog-confirm-solicitud.component.ts
var _c03 = (a0, a1) => ({ "bg-crediblue-50": a0, "bg-crediorange-100": a1 });
var _DialogConfirmSolicitudComponent = class _DialogConfirmSolicitudComponent {
  constructor() {
    this.inputValue = new FormControl("");
    this._matData = inject(MAT_DIALOG_DATA);
    this.solicitudService = inject(SolicitudesService);
    this.toasService = inject(ToastAlertsService);
    this.estadosDatosService = inject(EstadosDatosService);
    this.activatedRoute = inject(ActivatedRoute);
    this.dialogRef = inject(MatDialogRef);
    this.router = inject(Router);
    this.swalService = inject(SwalService);
    this.CodigosEstadosSolicitudes = CodigosEstadosSolicitudes;
  }
  onSave() {
    let data = {};
    let putData = {};
    if (this._matData.data.idEstado == CodigosEstadosSolicitudes.APROBADA) {
      putData = {
        id: this._matData.data.id,
        cupo: this._matData.data.cupo,
        idTipoSolicitud: this._matData.data.idTipoSolicitud,
        observacion: this._matData.data.observacion,
        observaci\u00F3nAprueba: this.inputValue.value,
        observacionRechazo: ""
      };
      data = {
        id: this._matData.data.id,
        idEstado: this._matData.data.idEstado
      };
    } else {
      putData = {
        id: this._matData.data.id,
        cupo: this._matData.data.cupo,
        idTipoSolicitud: this._matData.data.idTipoSolicitud,
        observacion: this._matData.data.observacion,
        observacionRechazo: this.inputValue.value,
        observaci\u00F3nAprueba: ""
      };
      data = {
        id: this._matData.data.id,
        idEstado: this._matData.data.idEstado
      };
    }
    this.subcription$ = this.solicitudService.patchSolicitud(data).pipe(switchMap((response) => {
      return this.solicitudService.putSolicitudes(putData);
    })).subscribe((response) => {
      this.swalService.ToastAler({
        icon: "success",
        title: "Registro Creado o Actualizado con Exito.",
        timer: 4e3
      });
      this.router.navigate(["/pages/gestion-creditos/solicitudes"]);
      this.estadosDatosService.stateGridSolicitudes.next({ state: true, tab: 0 });
      this.close();
    }, (error) => {
      this.swalService.ToastAler({
        icon: "error",
        title: "Ha ocurrido un error al crear el registro!",
        timer: 4e3
      });
    });
  }
  close() {
    this.dialogRef.close();
  }
  ngOnDestroy() {
  }
};
_DialogConfirmSolicitudComponent.\u0275fac = function DialogConfirmSolicitudComponent_Factory(t) {
  return new (t || _DialogConfirmSolicitudComponent)();
};
_DialogConfirmSolicitudComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DialogConfirmSolicitudComponent, selectors: [["app-dialog-confirm-solicitud"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 19, vars: 10, consts: [[1, "relative", "flex", "h-full", "w-full", "flex-col"], [1, "flex", "flex-auto", "flex-col", "items-center", "pb-6", "sm:flex-row", "sm:items-start", "sm:pb-8"], [1, "flex", "h-10", "w-10", "flex-0", "items-center", "justify-center", "rounded-full", "sm:mr-4", "bg-blue-100", "text-blue-600", "dark:bg-blue-600", "dark:text-blue-50"], [3, "svgIcon"], [1, "flex", "flex-col", "items-center", "space-y-1", "text-center", "sm:mt-0", "sm:items-start", "sm:pr-8", "sm:text-left"], [1, "text-xl", "font-medium", "leading-6"], [1, "text-secondary"], [1, "mt-4", "flex", "flex-col", "items-center", "space-y-1", "text-center", "sm:mt-0", "sm:items-start", "sm:text-left"], ["floatLabel", "always", 1, "w-full"], ["matInput", "", "placeholder", "Observaciones", 3, "formControl"], [1, "flex", "items-center", "justify-center", "space-x-3", "bg-gray-50", "py-4", "dark:bg-black", "dark:bg-opacity-10", "sm:justify-end"], ["mat-stroked-button", "", 1, "fuse-mat-button-large", "bg-credigray-100", "rounded-lg", "transition", "duration-200", "text-white", "font-semibold", 3, "matDialogClose"], ["mat-flat-button", "", 1, "fuse-mat-button-large", "hover:bg-crediblue-100", "text-white", "font-semibold", "py-2", "px-4", "rounded-lg", "transition", "duration-200", 3, "click", "color", "matDialogClose", "ngClass"]], template: function DialogConfirmSolicitudComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
    \u0275\u0275element(3, "mat-icon", 3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 4)(5, "div", 5);
    \u0275\u0275text(6, " Confirmacion ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 6);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 7)(10, "mat-form-field", 8)(11, "mat-label");
    \u0275\u0275text(12, "Observaciones");
    \u0275\u0275elementEnd();
    \u0275\u0275element(13, "textarea", 9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 10)(15, "button", 11);
    \u0275\u0275text(16, " Cancelar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "button", 12);
    \u0275\u0275listener("click", function DialogConfirmSolicitudComponent_Template_button_click_17_listener() {
      return ctx.onSave();
    });
    \u0275\u0275text(18, " Confirmar ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275property("svgIcon", "heroicons_solid:question-mark-circle");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx._matData.data.idEstado == ctx.CodigosEstadosSolicitudes.APROBADA ? "Esta solicitud ser\xE1 aprobada para proceder con el estudio de cr\xE9dito. Por favor confirmar si deseas continuar." : "Esta solicitud ser\xE1 rechazada NO se proceder\xE1 con el estudio de cr\xE9dito. Por favor confirmar si deseas rechazar.", " ");
    \u0275\u0275advance(5);
    \u0275\u0275property("formControl", ctx.inputValue);
    \u0275\u0275advance(2);
    \u0275\u0275property("matDialogClose", "cancelled");
    \u0275\u0275advance(2);
    \u0275\u0275property("color", "primary")("matDialogClose", "confirmed")("ngClass", \u0275\u0275pureFunction2(7, _c03, ctx._matData.data.idEstado == ctx.CodigosEstadosSolicitudes.APROBADA, ctx._matData.data.idEstado == ctx.CodigosEstadosSolicitudes.RECHAZADA));
  }
}, dependencies: [
  MatIcon,
  MatDialogClose,
  NgClass,
  MatFormField,
  MatInput,
  MatLabel,
  ReactiveFormsModule,
  DefaultValueAccessor,
  NgControlStatus,
  FormControlDirective,
  MatButton
] });
var DialogConfirmSolicitudComponent = _DialogConfirmSolicitudComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DialogConfirmSolicitudComponent, { className: "DialogConfirmSolicitudComponent", filePath: "src\\app\\pages\\gestion-creditos\\solicitudes\\dialog-confirm-solicitud\\dialog-confirm-solicitud.component.ts", lineNumber: 35 });
})();

// src/app/pages/gestion-creditos/solicitudes/form-approve/form-approve.component.ts
var _c04 = () => ["/pages/gestion-creditos/solicitudes"];
function FormApproveComponent_div_9_ng_container_71_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 15)(2, "button", 16);
    \u0275\u0275listener("click", function FormApproveComponent_div_9_ng_container_71_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onReject());
    });
    \u0275\u0275text(3, " Rechazar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 17);
    \u0275\u0275listener("click", function FormApproveComponent_div_9_ng_container_71_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onSave());
    });
    \u0275\u0275text(5, " Aprobar ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
}
function FormApproveComponent_div_9_Template(rf, ctx) {
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
    \u0275\u0275text(50, "Tipo de solicitud: ");
    \u0275\u0275elementStart(51, "span", 12);
    \u0275\u0275text(52);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(53, "p", 11);
    \u0275\u0275text(54, "N\xFAmero de solicitud: ");
    \u0275\u0275elementStart(55, "span", 12);
    \u0275\u0275text(56);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(57, "p", 11);
    \u0275\u0275text(58, "Cupo solicitado: ");
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
    \u0275\u0275text(68, "Estado: ");
    \u0275\u0275elementStart(69, "span", 12);
    \u0275\u0275text(70);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(71, FormApproveComponent_div_9_ng_container_71_Template, 6, 0, "ng-container", 14);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate4(" ", ctx_r1.items.trabajador.primerNombre, " ", ctx_r1.items.trabajador.segundoNombre, " ", ctx_r1.items.trabajador.primerApellido, " ", ctx_r1.items.trabajador.segundoApellido, " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.items.trabajador.numDoc);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.items.nombreSubEmpresa);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.items.trabajador.cargo);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.items.trabajador.nombreTipoContrato);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(25, 20, ctx_r1.items.trabajador.fechaInicioContrato, "dd/MM/yyyy"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(30, 23, ctx_r1.items.trabajador.fechaFinContrato, "dd/MM/yyyy"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(35, 26, ctx_r1.items.trabajador.salarioDevengado, "USD"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.items.trabajador.correo);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.items.trabajador.direccion);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.items.trabajador.telefono);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.items.nombreTipoSolicitud);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.items.numSolicitud);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(61, 29, ctx_r1.items.cupo));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(66, 31, ctx_r1.items.fechaCreacion, "dd/MM/yyyy"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.items.nombreEstadoSolicitud);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.detalleEmpleado.idEstadoSolicitud == ctx_r1.CodigosEstadosSolicitudes.PENDIENTE);
  }
}
var _FormApproveComponent = class _FormApproveComponent {
  constructor() {
    this.empleadosServices = inject(EmpleadosService);
    this.solicitudService = inject(SolicitudesService);
    this.toasService = inject(ToastAlertsService);
    this.fuseService = inject(FuseConfirmationService);
    this.estadosDatosService = inject(EstadosDatosService);
    this.activatedRoute = inject(ActivatedRoute);
    this.router = inject(Router);
    this._matDialog = inject(MatDialog);
    this.CodigosEstadosSolicitudes = CodigosEstadosSolicitudes;
  }
  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get("id");
    this.getSolicitud(id);
  }
  getSolicitud(id) {
    this.subcription$ = this.solicitudService.getSolicitud(id).subscribe((response) => {
      console.log(response.data);
      this.items = response.data;
      this.detalleEmpleado = response.data;
    });
  }
  onSave() {
    const data = {
      idEstado: CodigosEstadosSolicitudes.APROBADA,
      id: this.detalleEmpleado.id,
      cupo: this.detalleEmpleado.cupo,
      observacion: this.detalleEmpleado.observacion,
      idTipoSolicitud: this.detalleEmpleado.idTipoSolicitud
    };
    this._matDialog.open(DialogConfirmSolicitudComponent, {
      autoFocus: true,
      data: {
        data,
        aprobado: true
      },
      width: "30%",
      disableClose: true
    });
  }
  onReject() {
    const data = {
      idEstado: CodigosEstadosSolicitudes.RECHAZADA,
      id: this.detalleEmpleado.id,
      cupo: this.detalleEmpleado.cupo,
      observacion: this.detalleEmpleado.observacion,
      idTipoSolicitud: this.detalleEmpleado.idTipoSolicitud
    };
    this._matDialog.open(DialogConfirmSolicitudComponent, {
      autoFocus: true,
      data: {
        data
      },
      width: "30%",
      disableClose: true
    });
  }
  ngOnDestroy() {
    this.subcription$.unsubscribe();
  }
};
_FormApproveComponent.\u0275fac = function FormApproveComponent_Factory(t) {
  return new (t || _FormApproveComponent)();
};
_FormApproveComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FormApproveComponent, selectors: [["app-form-approve"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 10, vars: 4, consts: [["cdkScrollable", "", 1, "absolute", "inset-0", "min-w-0", "overflow-auto", "print:overflow-visible"], [1, "inline-block", "p-4", "sm:p-6", "md:p-10", "print:p-0", "w-full"], [1, "bg-card", "shadow", "print:bg-transparent", "print:p-0", "print:shadow-none", "rounded-2xl", "max-w-4xl", "mx-auto", "overflow-hidden"], [1, "bg-crediblue-50", "px-4", "py-3", "sm:px-6", "sm:py-4", "flex", "items-center", "justify-between"], ["mat-button", "", 1, "flex", "items-center", 3, "routerLink"], [1, "text-white", 3, "svgIcon"], [1, "text-lg", "sm:text-xl", "font-bold", "text-white"], ["class", "p-4 sm:p-6", 4, "ngIf"], [1, "p-4", "sm:p-6"], [1, "mb-4", "flex", "flex-col", "md:flex-row", "md:justify-between", "gap-4"], [1, "text-lg", "sm:text-xl", "font-semibold", "text-gray-800"], [1, "font-medium", "text-gray-600"], [1, "text-md", "text-secondary"], [1, "text-gray-600", "font-medium"], [4, "ngIf"], [1, "flex", "flex-col", "sm:flex-row", "justify-end", "items-center", "gap-2", "sm:gap-2.5", "mt-4", "sm:mt-10"], ["mat-flat-button", "", 1, "sm:w-auto", "w-full", "bg-crediorange-100", "text-white", "font-semibold", "py-2", "px-4", "rounded-lg", "transition", "duration-200", 3, "click"], ["mat-flat-button", "", 1, "sm:w-auto", "w-full", "bg-crediblue-50", "hover:bg-crediblue-100", "text-white", "font-semibold", "py-2", "px-4", "rounded-lg", "transition", "duration-200", 3, "click"]], template: function FormApproveComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div")(5, "a", 4);
    \u0275\u0275element(6, "mat-icon", 5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "h2", 6);
    \u0275\u0275text(8, "Detalle de Solicitud");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(9, FormApproveComponent_div_9_Template, 72, 34, "div", 7);
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
  MatButton,
  CurrencyPipe,
  NgIf,
  CdkScrollable,
  DatePipe,
  MatAnchor,
  MatIcon,
  RouterLink
] });
var FormApproveComponent = _FormApproveComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FormApproveComponent, { className: "FormApproveComponent", filePath: "src\\app\\pages\\gestion-creditos\\solicitudes\\form-approve\\form-approve.component.ts", lineNumber: 36 });
})();

// src/app/pages/gestion-creditos/solicitudes/solicitudes.routes.ts
var solicitudes_routes_default = [
  {
    path: "",
    component: GridSolicitudesComponent
  },
  {
    path: "estados/:id",
    component: FormApproveComponent
  }
];
export {
  solicitudes_routes_default as default
};
//# sourceMappingURL=chunk-43HXOM7N.js.map
