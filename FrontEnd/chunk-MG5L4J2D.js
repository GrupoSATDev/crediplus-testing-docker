import {
  SubscripcionService
} from "./chunk-N2CJV5EX.js";
import {
  BancosService
} from "./chunk-ZU5PKA56.js";
import {
  TipoCuentasService
} from "./chunk-HEWZPKYP.js";
import {
  EmpresasClientesService
} from "./chunk-Z3FK2VK2.js";
import {
  EmpresasMaestrasService
} from "./chunk-UU3NN5UO.js";
import {
  MatDatepicker,
  MatDatepickerInput,
  MatDatepickerToggle
} from "./chunk-AGZF7KUE.js";
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
  MatFormField,
  MatFormFieldModule,
  MatInput,
  MatLabel,
  MatSuffix,
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
import {
  AppSettingsService
} from "./chunk-ROMZC4L4.js";
import {
  AsyncPipe,
  DateAdapter,
  DatePipe,
  DestroyRef,
  HttpClient,
  MAT_DATE_LOCALE,
  MatButton,
  MatIcon,
  MatOption,
  NgForOf,
  NgIf,
  inject,
  map,
  tap,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-WGDVSMOG.js";
import {
  __objRest,
  __spreadValues
} from "./chunk-AYDYM6RQ.js";

// src/app/core/services/tipos-empresas.service.ts
var _TiposEmpresasService = class _TiposEmpresasService {
  constructor(_http, appSettings) {
    this._http = _http;
    this.appSettings = appSettings;
  }
  getTiposEmpresas() {
    return this._http.get(this.appSettings.tiposEmpresas.url.base);
  }
};
_TiposEmpresasService.\u0275fac = function TiposEmpresasService_Factory(t) {
  return new (t || _TiposEmpresasService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(AppSettingsService));
};
_TiposEmpresasService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _TiposEmpresasService, factory: _TiposEmpresasService.\u0275fac, providedIn: "root" });
var TiposEmpresasService = _TiposEmpresasService;

// node_modules/date-fns/constants.js
var daysInYear = 365.2425;
var maxTime = Math.pow(10, 8) * 24 * 60 * 60 * 1e3;
var minTime = -maxTime;
var millisecondsInMinute = 6e4;
var millisecondsInHour = 36e5;
var secondsInHour = 3600;
var secondsInDay = secondsInHour * 24;
var secondsInWeek = secondsInDay * 7;
var secondsInYear = secondsInDay * daysInYear;
var secondsInMonth = secondsInYear / 12;
var secondsInQuarter = secondsInMonth * 3;
var constructFromSymbol = Symbol.for("constructDateFrom");

// node_modules/date-fns/constructFrom.js
function constructFrom(date, value) {
  if (typeof date === "function") return date(value);
  if (date && typeof date === "object" && constructFromSymbol in date)
    return date[constructFromSymbol](value);
  if (date instanceof Date) return new date.constructor(value);
  return new Date(value);
}

// node_modules/date-fns/toDate.js
function toDate(argument, context) {
  return constructFrom(context || argument, argument);
}

// node_modules/date-fns/parseISO.js
function parseISO(argument, options) {
  const invalidDate = () => constructFrom(options?.in, NaN);
  const additionalDigits = options?.additionalDigits ?? 2;
  const dateStrings = splitDateString(argument);
  let date;
  if (dateStrings.date) {
    const parseYearResult = parseYear(dateStrings.date, additionalDigits);
    date = parseDate(parseYearResult.restDateString, parseYearResult.year);
  }
  if (!date || isNaN(+date)) return invalidDate();
  const timestamp = +date;
  let time = 0;
  let offset;
  if (dateStrings.time) {
    time = parseTime(dateStrings.time);
    if (isNaN(time)) return invalidDate();
  }
  if (dateStrings.timezone) {
    offset = parseTimezone(dateStrings.timezone);
    if (isNaN(offset)) return invalidDate();
  } else {
    const tmpDate = new Date(timestamp + time);
    const result = toDate(0, options?.in);
    result.setFullYear(
      tmpDate.getUTCFullYear(),
      tmpDate.getUTCMonth(),
      tmpDate.getUTCDate()
    );
    result.setHours(
      tmpDate.getUTCHours(),
      tmpDate.getUTCMinutes(),
      tmpDate.getUTCSeconds(),
      tmpDate.getUTCMilliseconds()
    );
    return result;
  }
  return toDate(timestamp + time + offset, options?.in);
}
var patterns = {
  dateTimeDelimiter: /[T ]/,
  timeZoneDelimiter: /[Z ]/i,
  timezone: /([Z+-].*)$/
};
var dateRegex = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/;
var timeRegex = /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/;
var timezoneRegex = /^([+-])(\d{2})(?::?(\d{2}))?$/;
function splitDateString(dateString) {
  const dateStrings = {};
  const array = dateString.split(patterns.dateTimeDelimiter);
  let timeString;
  if (array.length > 2) {
    return dateStrings;
  }
  if (/:/.test(array[0])) {
    timeString = array[0];
  } else {
    dateStrings.date = array[0];
    timeString = array[1];
    if (patterns.timeZoneDelimiter.test(dateStrings.date)) {
      dateStrings.date = dateString.split(patterns.timeZoneDelimiter)[0];
      timeString = dateString.substr(
        dateStrings.date.length,
        dateString.length
      );
    }
  }
  if (timeString) {
    const token = patterns.timezone.exec(timeString);
    if (token) {
      dateStrings.time = timeString.replace(token[1], "");
      dateStrings.timezone = token[1];
    } else {
      dateStrings.time = timeString;
    }
  }
  return dateStrings;
}
function parseYear(dateString, additionalDigits) {
  const regex = new RegExp(
    "^(?:(\\d{4}|[+-]\\d{" + (4 + additionalDigits) + "})|(\\d{2}|[+-]\\d{" + (2 + additionalDigits) + "})$)"
  );
  const captures = dateString.match(regex);
  if (!captures) return { year: NaN, restDateString: "" };
  const year = captures[1] ? parseInt(captures[1]) : null;
  const century = captures[2] ? parseInt(captures[2]) : null;
  return {
    year: century === null ? year : century * 100,
    restDateString: dateString.slice((captures[1] || captures[2]).length)
  };
}
function parseDate(dateString, year) {
  if (year === null) return /* @__PURE__ */ new Date(NaN);
  const captures = dateString.match(dateRegex);
  if (!captures) return /* @__PURE__ */ new Date(NaN);
  const isWeekDate = !!captures[4];
  const dayOfYear = parseDateUnit(captures[1]);
  const month = parseDateUnit(captures[2]) - 1;
  const day = parseDateUnit(captures[3]);
  const week = parseDateUnit(captures[4]);
  const dayOfWeek = parseDateUnit(captures[5]) - 1;
  if (isWeekDate) {
    if (!validateWeekDate(year, week, dayOfWeek)) {
      return /* @__PURE__ */ new Date(NaN);
    }
    return dayOfISOWeekYear(year, week, dayOfWeek);
  } else {
    const date = /* @__PURE__ */ new Date(0);
    if (!validateDate(year, month, day) || !validateDayOfYearDate(year, dayOfYear)) {
      return /* @__PURE__ */ new Date(NaN);
    }
    date.setUTCFullYear(year, month, Math.max(dayOfYear, day));
    return date;
  }
}
function parseDateUnit(value) {
  return value ? parseInt(value) : 1;
}
function parseTime(timeString) {
  const captures = timeString.match(timeRegex);
  if (!captures) return NaN;
  const hours = parseTimeUnit(captures[1]);
  const minutes = parseTimeUnit(captures[2]);
  const seconds = parseTimeUnit(captures[3]);
  if (!validateTime(hours, minutes, seconds)) {
    return NaN;
  }
  return hours * millisecondsInHour + minutes * millisecondsInMinute + seconds * 1e3;
}
function parseTimeUnit(value) {
  return value && parseFloat(value.replace(",", ".")) || 0;
}
function parseTimezone(timezoneString) {
  if (timezoneString === "Z") return 0;
  const captures = timezoneString.match(timezoneRegex);
  if (!captures) return 0;
  const sign = captures[1] === "+" ? -1 : 1;
  const hours = parseInt(captures[2]);
  const minutes = captures[3] && parseInt(captures[3]) || 0;
  if (!validateTimezone(hours, minutes)) {
    return NaN;
  }
  return sign * (hours * millisecondsInHour + minutes * millisecondsInMinute);
}
function dayOfISOWeekYear(isoWeekYear, week, day) {
  const date = /* @__PURE__ */ new Date(0);
  date.setUTCFullYear(isoWeekYear, 0, 4);
  const fourthOfJanuaryDay = date.getUTCDay() || 7;
  const diff = (week - 1) * 7 + day + 1 - fourthOfJanuaryDay;
  date.setUTCDate(date.getUTCDate() + diff);
  return date;
}
var daysInMonths = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function isLeapYearIndex(year) {
  return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0;
}
function validateDate(year, month, date) {
  return month >= 0 && month <= 11 && date >= 1 && date <= (daysInMonths[month] || (isLeapYearIndex(year) ? 29 : 28));
}
function validateDayOfYearDate(year, dayOfYear) {
  return dayOfYear >= 1 && dayOfYear <= (isLeapYearIndex(year) ? 366 : 365);
}
function validateWeekDate(_year, week, day) {
  return week >= 1 && week <= 53 && day >= 0 && day <= 6;
}
function validateTime(hours, minutes, seconds) {
  if (hours === 24) {
    return minutes === 0 && seconds === 0;
  }
  return seconds >= 0 && seconds < 60 && minutes >= 0 && minutes < 60 && hours >= 0 && hours < 25;
}
function validateTimezone(_hours, minutes) {
  return minutes >= 0 && minutes <= 59;
}

// src/app/pages/configuraciones/empresas-clientes/form-empresas-clientes/form-empresas-clientes.component.ts
function FormEmpresasClientesComponent_ng_container_38_mat_option_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 36);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const departamento_r3 = ctx.$implicit;
    \u0275\u0275property("value", departamento_r3.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(departamento_r3.nombre);
  }
}
function FormEmpresasClientesComponent_ng_container_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, FormEmpresasClientesComponent_ng_container_38_mat_option_1_Template, 2, 2, "mat-option", 35);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const departamentos_r4 = ctx.ngIf;
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", departamentos_r4.data);
  }
}
function FormEmpresasClientesComponent_ng_container_44_mat_option_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 36);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const municipio_r5 = ctx.$implicit;
    \u0275\u0275property("value", municipio_r5.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(municipio_r5.nombre);
  }
}
function FormEmpresasClientesComponent_ng_container_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, FormEmpresasClientesComponent_ng_container_44_mat_option_1_Template, 2, 2, "mat-option", 35);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const municipios_r6 = ctx.ngIf;
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", municipios_r6.data);
  }
}
function FormEmpresasClientesComponent_ng_container_59_mat_option_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 36);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tipo_r7 = ctx.$implicit;
    \u0275\u0275property("value", tipo_r7.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(tipo_r7.nombre);
  }
}
function FormEmpresasClientesComponent_ng_container_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, FormEmpresasClientesComponent_ng_container_59_mat_option_1_Template, 2, 2, "mat-option", 35);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const tipos_r8 = ctx.ngIf;
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", tipos_r8.data);
  }
}
function FormEmpresasClientesComponent_ng_container_65_mat_option_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 36);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r9 = ctx.$implicit;
    \u0275\u0275property("value", item_r9.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r9.nombre);
  }
}
function FormEmpresasClientesComponent_ng_container_65_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, FormEmpresasClientesComponent_ng_container_65_mat_option_1_Template, 2, 2, "mat-option", 35);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const subscripciones_r10 = ctx.ngIf;
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", subscripciones_r10.data);
  }
}
function FormEmpresasClientesComponent_ng_container_92_mat_option_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 36);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r11 = ctx.$implicit;
    \u0275\u0275property("value", item_r11.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r11.nombre);
  }
}
function FormEmpresasClientesComponent_ng_container_92_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, FormEmpresasClientesComponent_ng_container_92_mat_option_1_Template, 2, 2, "mat-option", 35);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const tipoCuentas_r12 = ctx.ngIf;
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", tipoCuentas_r12.data);
  }
}
function FormEmpresasClientesComponent_ng_container_98_mat_option_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 36);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r13 = ctx.$implicit;
    \u0275\u0275property("value", item_r13.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r13.nombre);
  }
}
function FormEmpresasClientesComponent_ng_container_98_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, FormEmpresasClientesComponent_ng_container_98_mat_option_1_Template, 2, 2, "mat-option", 35);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const bancos_r14 = ctx.ngIf;
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", bancos_r14.data);
  }
}
var maskConfig = {
  validation: false
};
var _FormEmpresasClientesComponent = class _FormEmpresasClientesComponent {
  constructor() {
    this.fb = inject(FormBuilder);
    this._locacionService = inject(LocacionService);
    this.empresasService = inject(EmpresasMaestrasService);
    this.dialogRef = inject(MatDialogRef);
    this.fuseService = inject(FuseConfirmationService);
    this.estadosDatosService = inject(EstadosDatosService);
    this.toasService = inject(ToastAlertsService);
    this.tiposEmpresaService = inject(TiposEmpresasService);
    this.empresaClienteService = inject(EmpresasClientesService);
    this.subcripciones = inject(SubscripcionService);
    this.bancosServices = inject(BancosService);
    this.tipoCuentasService = inject(TipoCuentasService);
    this.destroyedRef = inject(DestroyRef);
    this.bancos$ = this.bancosServices.getBancos().pipe(tap((response) => {
      const valorSelected = response.data;
      const dialogData = this._matData;
      if (valorSelected && !dialogData.edit) {
        this.form.get("idBanco").setValue(valorSelected[0].id);
      }
    }));
    this.tipoCuentas$ = this.tipoCuentasService.getTipoCuentas().pipe(tap((response) => {
      const valorSelected = response.data;
      const dialogData = this._matData;
      if (valorSelected && !dialogData.edit) {
        this.form.get("idTipoCuenta").setValue(valorSelected[0].id);
      }
    }));
    this.departamentos$ = this._locacionService.getDepartamentos().pipe(tap((response) => {
      const valorSelected = response.data;
      const dialogData = this._matData;
      if (valorSelected && !dialogData.edit) {
        this.form.get("idDepartamento").setValue(valorSelected[0].id);
        const idDepto = this.form.get("idDepartamento").value;
        this.getMunicipios(idDepto);
      }
    }));
    this.empresas$ = this.empresasService.getEmpresas();
    this.tiposEmpresas$ = this.tiposEmpresaService.getTiposEmpresas().pipe(tap((response) => {
      const valorSelected = response.data;
      const dialogData = this._matData;
      if (valorSelected && !dialogData.edit) {
        this.form.get("idTipoEmpresa").setValue(valorSelected[0].id);
      }
    }));
    this.subcripciones$ = this.subcripciones.getSubcripciones().pipe(tap((response) => {
      const valorSelected = response.data;
      const dialogData = this._matData;
      if (valorSelected && !dialogData.edit) {
        this.form.get("idSubscripcion").setValue(valorSelected[0].id);
      }
    }));
    this._matData = inject(MAT_DIALOG_DATA);
    this.datePipe = inject(DatePipe);
    this.swalService = inject(SwalService);
  }
  onSelected(matSelectChange) {
    const id = matSelectChange.value;
    this.getMunicipios(id);
  }
  getMunicipios(id) {
    this.municipios$ = this._locacionService.getMunicipio(id).pipe(tap((response) => {
      const valorSelected = response.data;
      const dialogData = this._matData;
      if (valorSelected && !dialogData.edit) {
        this.form.get("idMunicipio").setValue(valorSelected[0].id);
      }
    }));
  }
  ngOnInit() {
    this.createForm();
    const dialogData = this._matData;
    if (dialogData.edit) {
      const data = dialogData.data;
      this.getEmpresas(data.id);
    }
  }
  onSave() {
    if (this.form.valid) {
      if (!this._matData.edit) {
        const data = this.form.getRawValue();
        const _a = data, { idDepartamento, idEmpresa, fechaCobro, porcCobro } = _a, form = __objRest(_a, ["idDepartamento", "idEmpresa", "fechaCobro", "porcCobro"]);
        let fecha = this.datePipe.transform(fechaCobro, "yyyy-MM-dd");
        const createData = __spreadValues({
          fechaCobro: fecha,
          porcCobro: parseFloat(porcCobro)
        }, form);
        const dialog = this.fuseService.open(__spreadValues({}, guardar));
        dialog.afterClosed().subscribe((response) => {
          if (response === "confirmed") {
            this.empresaClienteService.postEmpresaCliente(createData).subscribe((res) => {
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
        const _b = data, { idDepartamento, fechaCobro, porcCobro } = _b, form = __objRest(_b, ["idDepartamento", "fechaCobro", "porcCobro"]);
        let fecha = this.datePipe.transform(fechaCobro, "yyyy-MM-dd");
        const createData = __spreadValues({
          fechaCobro: fecha,
          porcCobro: parseFloat(porcCobro)
        }, form);
        const dialog = this.fuseService.open(__spreadValues({}, guardar));
        dialog.afterClosed().subscribe((response) => {
          if (response === "confirmed") {
            this.empresaClienteService.putEmpresaCliente(createData).subscribe((res) => {
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
  getEmpresas(id) {
    this.empresaClienteService.getEmpresaCliente(id).pipe(takeUntilDestroyed(this.destroyedRef)).subscribe((response) => {
      if (response) {
        const data = response.data;
        this.form.patchValue(data);
        const _a = data, { idDepartamento, fechaCobro } = _a, form = __objRest(_a, ["idDepartamento", "fechaCobro"]);
        const fecha = parseISO(fechaCobro);
        this.form.patchValue(__spreadValues({
          fechaCobro: fecha
        }, form));
        this.municipios$ = this._locacionService.getMunicipio(idDepartamento);
      }
    });
  }
  createForm() {
    this.form = this.fb.group({
      id: [null],
      nit: [""],
      razonSocial: [""],
      correo: [""],
      telefono: [""],
      direccion: [""],
      idDepartamento: [""],
      idTipoEmpresa: [""],
      idMunicipio: [""],
      idSubscripcion: [""],
      valorSuscripcion: [""],
      porcCobro: [""],
      fechaCobro: [""],
      idTipoCuenta: [""],
      idBanco: [""],
      numCuentaBancaria: [""],
      estado: [true]
    });
  }
  closeDialog() {
    this.dialogRef.close();
  }
};
_FormEmpresasClientesComponent.\u0275fac = function FormEmpresasClientesComponent_Factory(t) {
  return new (t || _FormEmpresasClientesComponent)();
};
_FormEmpresasClientesComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FormEmpresasClientesComponent, selectors: [["app-form-empresas-clientes"]], standalone: true, features: [\u0275\u0275ProvidersFeature([
  DatePipe,
  { provide: DateAdapter, useClass: DateAdapterService },
  { provide: MAT_DATE_LOCALE, useValue: "en-GB" },
  provideNgxMask(maskConfig)
]), \u0275\u0275StandaloneFeature], decls: 112, vars: 43, consts: [["twoStepToggle", ""], ["data", ""], ["picker", ""], [1, "w-full", "sm:bg-card", "sm:rounded-2xl", "sm:mx-0", "mx-auto"], [1, ""], [1, "mt-8", "text-3xl", "font-semibold", "leading-tight", "tracking-tight", "text-center"], [1, "mt-8", 3, "formGroup"], [1, "font-bold", "mb-4", "text-2xl"], [1, "flex", "flex-col", "sm:flex-row", "mb-4"], [1, "fcursor-pointer", 3, "click"], [1, "font-medium", "leading-6"], [1, "ml-4", 3, "color", "formControlName"], [1, "flex", "flex-col", "sm:flex-row", "mb-4", "gap-2"], ["floatLabel", "always", 1, "w-full"], ["matInput", "", "placeholder", "Nit", 3, "formControlName"], ["matInput", "", "placeholder", "Raz\xF3n social", 3, "formControlName"], ["matInput", "", "placeholder", "Correo electronico", 3, "formControlName"], ["matInput", "", "placeholder", "Tel\xE9fono", 3, "formControlName"], ["placeholder", "Departamento", 3, "selectionChange", "formControlName"], [4, "ngIf"], ["placeholder", "Ciudad", 3, "formControlName"], ["matInput", "", "placeholder", "Direcci\xF3n", 3, "formControlName"], ["placeholder", "Tipo de empresa", 3, "formControlName"], ["placeholder", "Subscripci\xF3n", 3, "formControlName"], ["matInput", "", "mask", "separator.0", "thousandSeparator", ".", "placeholder", "Valor subcripci\xF3n", 3, "formControlName"], ["matInput", "", "placeholder", "Porcentaje %", "mask", "separator.6", "thousandSeparator", "", "decimalMarker", ".", 3, "formControlName", "dropSpecialCharacters"], ["matInput", "", "placeholder", "Fecha de cobro", 3, "matDatepicker", "formControlName"], ["matIconSuffix", "", 3, "for"], [1, "flex", "flex-col", "sm:flex-row", "gap-2.5"], ["placeholder", "Tipo de cuenta", 3, "formControlName"], ["placeholder", "Bancos", 3, "formControlName"], ["matInput", "", "placeholder", "N\xFAmero de cuenta", 3, "formControlName"], [1, "flex", "flex-wrap", "justify-end", "gap-2.5"], ["mat-flat-button", "", 1, "sm:w-auto", "w-full", "lg:mt-6", "bg-credigray-100", "rounded-lg", "transition", "duration-200", "text-white", "font-semibold", 3, "click", "color"], ["mat-flat-button", "", 1, "sm:w-auto", "w-full", "lg:mt-6", "bg-crediblue-50", "rounded-lg", "transition", "duration-200", "text-white", "font-semibold", 3, "click", "color"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function FormEmpresasClientesComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 4)(2, "div", 5);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "form", 6)(5, "div")(6, "p", 7);
    \u0275\u0275text(7, "Informaci\xF3n general");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 8)(9, "div", 9);
    \u0275\u0275listener("click", function FormEmpresasClientesComponent_Template_div_click_9_listener() {
      \u0275\u0275restoreView(_r1);
      const twoStepToggle_r2 = \u0275\u0275reference(13);
      return \u0275\u0275resetView(twoStepToggle_r2.toggle());
    });
    \u0275\u0275elementStart(10, "div", 10);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(12, "mat-slide-toggle", 11, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 12)(15, "mat-form-field", 13)(16, "mat-label");
    \u0275\u0275text(17, "Nit");
    \u0275\u0275elementEnd();
    \u0275\u0275element(18, "input", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "mat-form-field", 13)(20, "mat-label");
    \u0275\u0275text(21, "Raz\xF3n social");
    \u0275\u0275elementEnd();
    \u0275\u0275element(22, "input", 15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 12)(24, "mat-form-field", 13)(25, "mat-label");
    \u0275\u0275text(26, "Correo");
    \u0275\u0275elementEnd();
    \u0275\u0275element(27, "input", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "mat-form-field", 13)(29, "mat-label");
    \u0275\u0275text(30, "Tel\xE9fono");
    \u0275\u0275elementEnd();
    \u0275\u0275element(31, "input", 17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div", 12)(33, "mat-form-field", 13)(34, "mat-label");
    \u0275\u0275text(35, "Departamento");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "mat-select", 18, 1);
    \u0275\u0275listener("selectionChange", function FormEmpresasClientesComponent_Template_mat_select_selectionChange_36_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.onSelected($event));
    });
    \u0275\u0275template(38, FormEmpresasClientesComponent_ng_container_38_Template, 2, 1, "ng-container", 19);
    \u0275\u0275pipe(39, "async");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "mat-form-field", 13)(41, "mat-label");
    \u0275\u0275text(42, "Ciudad");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "mat-select", 20);
    \u0275\u0275template(44, FormEmpresasClientesComponent_ng_container_44_Template, 2, 1, "ng-container", 19);
    \u0275\u0275pipe(45, "async");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(46, "div", 8)(47, "mat-form-field", 13)(48, "mat-label");
    \u0275\u0275text(49, "Direcci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275element(50, "input", 21);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(51, "div")(52, "p", 7);
    \u0275\u0275text(53, "Informaci\xF3n de contrato");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "div", 12)(55, "mat-form-field", 13)(56, "mat-label");
    \u0275\u0275text(57, "Tipo de empresa");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "mat-select", 22);
    \u0275\u0275template(59, FormEmpresasClientesComponent_ng_container_59_Template, 2, 1, "ng-container", 19);
    \u0275\u0275pipe(60, "async");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(61, "mat-form-field", 13)(62, "mat-label");
    \u0275\u0275text(63, "Subscripci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "mat-select", 23);
    \u0275\u0275template(65, FormEmpresasClientesComponent_ng_container_65_Template, 2, 1, "ng-container", 19);
    \u0275\u0275pipe(66, "async");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(67, "div", 12)(68, "mat-form-field", 13)(69, "mat-label");
    \u0275\u0275text(70, "Valor subscripci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275element(71, "input", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(72, "mat-form-field", 13)(73, "mat-label");
    \u0275\u0275text(74, "Porcentaje cobro");
    \u0275\u0275elementEnd();
    \u0275\u0275element(75, "input", 25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(76, "div", 8)(77, "mat-form-field", 13)(78, "mat-label");
    \u0275\u0275text(79, "Fecha de cobro");
    \u0275\u0275elementEnd();
    \u0275\u0275element(80, "input", 26)(81, "mat-datepicker-toggle", 27)(82, "mat-datepicker", null, 2);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(84, "div")(85, "p", 7);
    \u0275\u0275text(86, "Informaci\xF3n bancaria");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(87, "div", 28)(88, "mat-form-field", 13)(89, "mat-label");
    \u0275\u0275text(90, "Tipo de cuenta");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(91, "mat-select", 29);
    \u0275\u0275template(92, FormEmpresasClientesComponent_ng_container_92_Template, 2, 1, "ng-container", 19);
    \u0275\u0275pipe(93, "async");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(94, "mat-form-field", 13)(95, "mat-label");
    \u0275\u0275text(96, "Bancos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(97, "mat-select", 30);
    \u0275\u0275template(98, FormEmpresasClientesComponent_ng_container_98_Template, 2, 1, "ng-container", 19);
    \u0275\u0275pipe(99, "async");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(100, "div", 28)(101, "mat-form-field", 13)(102, "mat-label");
    \u0275\u0275text(103, "N\xFAmero de cuenta bancaria");
    \u0275\u0275elementEnd();
    \u0275\u0275element(104, "input", 31);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(105, "div", 32)(106, "button", 33);
    \u0275\u0275listener("click", function FormEmpresasClientesComponent_Template_button_click_106_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.closeDialog());
    });
    \u0275\u0275elementStart(107, "span");
    \u0275\u0275text(108, " Cancelar ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(109, "button", 34);
    \u0275\u0275listener("click", function FormEmpresasClientesComponent_Template_button_click_109_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.onSave());
    });
    \u0275\u0275elementStart(110, "span");
    \u0275\u0275text(111, " Guardar ");
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const picker_r15 = \u0275\u0275reference(83);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx._matData.edit ? "Actualizar empresa" : "Agregar empresa", " ");
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx.form);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" Estado ", ctx.form.get("estado").value ? "Activo" : "Inactivo", " ");
    \u0275\u0275advance();
    \u0275\u0275property("color", "primary")("formControlName", "estado");
    \u0275\u0275advance(6);
    \u0275\u0275property("formControlName", "nit");
    \u0275\u0275advance(4);
    \u0275\u0275property("formControlName", "razonSocial");
    \u0275\u0275advance(5);
    \u0275\u0275property("formControlName", "correo");
    \u0275\u0275advance(4);
    \u0275\u0275property("formControlName", "telefono");
    \u0275\u0275advance(5);
    \u0275\u0275property("formControlName", "idDepartamento");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(39, 31, ctx.departamentos$));
    \u0275\u0275advance(5);
    \u0275\u0275property("formControlName", "idMunicipio");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(45, 33, ctx.municipios$));
    \u0275\u0275advance(6);
    \u0275\u0275property("formControlName", "direccion");
    \u0275\u0275advance(8);
    \u0275\u0275property("formControlName", "idTipoEmpresa");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(60, 35, ctx.tiposEmpresas$));
    \u0275\u0275advance(5);
    \u0275\u0275property("formControlName", "idSubscripcion");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(66, 37, ctx.subcripciones$));
    \u0275\u0275advance(6);
    \u0275\u0275property("formControlName", "valorSuscripcion");
    \u0275\u0275advance(4);
    \u0275\u0275property("formControlName", "porcCobro")("dropSpecialCharacters", true);
    \u0275\u0275advance(5);
    \u0275\u0275property("matDatepicker", picker_r15)("formControlName", "fechaCobro");
    \u0275\u0275advance();
    \u0275\u0275property("for", picker_r15);
    \u0275\u0275advance(10);
    \u0275\u0275property("formControlName", "idTipoCuenta");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(93, 39, ctx.tipoCuentas$));
    \u0275\u0275advance(5);
    \u0275\u0275property("formControlName", "idBanco");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(99, 41, ctx.bancos$));
    \u0275\u0275advance(6);
    \u0275\u0275property("formControlName", "numCuentaBancaria");
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
  FormControlName,
  AsyncPipe,
  MatOption,
  MatSelect,
  NgForOf,
  NgIf,
  MatDatepickerInput,
  MatDatepickerToggle,
  MatDatepicker,
  MatFormFieldModule,
  MatSuffix,
  NgxMaskDirective,
  MatSlideToggle
], styles: ["\n\n  .custom-dialog-container {\n  width: 100%;\n}\n@media (min-width: 1280px) {\n    .custom-dialog-container {\n    width: 50%;\n  }\n}\n/*# sourceMappingURL=form-empresas-clientes.component.css.map */"] });
var FormEmpresasClientesComponent = _FormEmpresasClientesComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FormEmpresasClientesComponent, { className: "FormEmpresasClientesComponent", filePath: "src\\app\\pages\\configuraciones\\empresas-clientes\\form-empresas-clientes\\form-empresas-clientes.component.ts", lineNumber: 66 });
})();

// src/app/pages/configuraciones/empresas-clientes/grid-empresas-clientes/grid-empresas-clientes.component.ts
var _GridEmpresasClientesComponent = class _GridEmpresasClientesComponent {
  constructor(_matDialog, empresaClienteService, estadoDatosService) {
    this._matDialog = _matDialog;
    this.empresaClienteService = empresaClienteService;
    this.estadoDatosService = estadoDatosService;
    this.searchTerm = "";
    this.data = [];
    this.columns = ["Nit", "Razon social", "Correo", "Telefono", "Direccion", "Estado"];
    this.columnPropertyMap = {
      "Nit": "nit",
      "Razon social": "razonSocial",
      "Correo": "correo",
      "Telefono": "telefono",
      "Direccion": "direccion",
      "Estado": "estado"
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
    this._matDialog.open(FormEmpresasClientesComponent, {
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
    this._matDialog.open(FormEmpresasClientesComponent, {
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
  getEmpresas() {
    this.subcription$ = this.empresaClienteService.getEmpresas().pipe(map((response) => {
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
        this.getEmpresas();
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
    this.getEmpresas();
    this.listenGrid();
  }
};
_GridEmpresasClientesComponent.\u0275fac = function GridEmpresasClientesComponent_Factory(t) {
  return new (t || _GridEmpresasClientesComponent)(\u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(EmpresasClientesService), \u0275\u0275directiveInject(EstadosDatosService));
};
_GridEmpresasClientesComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GridEmpresasClientesComponent, selectors: [["app-grid-empresas-clientes"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 15, vars: 12, consts: [[1, "bg-card", "flex", "min-w-0", "flex-auto", "flex-col", "dark:bg-transparent", "sm:absolute", "sm:inset-0", "sm:overflow-hidden"], [1, "relative", "flex", "flex-0", "flex-col", "border-b", "px-6", "py-8", "sm:flex-row", "sm:items-center", "sm:justify-between", "md:px-8"], [1, "text-3xl", "font-semibold", "tracking-tight"], [1, "mt-6", "flex", "w-full", "shrink-0", "flex-col", "items-center", "sm:ml-4", "sm:mt-0", "sm:flex-row", "sm:space-x-2", "sm:w-auto"], [1, "fuse-mat-dense", "rounded-lg", "w-full", "sm:w-auto", "min-w-64", 3, "subscriptSizing"], ["matPrefix", "", 1, "icon-size-5", 3, "svgIcon"], ["matInput", "", 3, "input", "autocomplete", "placeholder"], ["mat-flat-button", "", 1, "mt-2", "w-full", "bg-crediblue-50", "rounded-lg", "transition", "duration-200", "text-white", "font-semibold", "sm:ml-4", "sm:mt-0", "sm:w-auto", 3, "click", "color"], [3, "svgIcon"], [1, "ml-2", "mr-1"], [1, "flex", "flex-auto", "overflow-hidden"], [1, "flex", "flex-auto", "flex-col", "overflow-hidden", "sm:mb-18", "sm:overflow-y-auto"], [3, "columns", "displayedColumns", "columnPropertyMap", "data", "buttons", "searchTerm"]], template: function GridEmpresasClientesComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
    \u0275\u0275text(3, "Clientes - Aliados");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 3)(5, "mat-form-field", 4);
    \u0275\u0275element(6, "mat-icon", 5);
    \u0275\u0275elementStart(7, "input", 6);
    \u0275\u0275listener("input", function GridEmpresasClientesComponent_Template_input_input_7_listener($event) {
      return ctx.onSearch($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "button", 7);
    \u0275\u0275listener("click", function GridEmpresasClientesComponent_Template_button_click_8_listener() {
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
  MatButton,
  MatFormField,
  MatIcon,
  MatInput,
  CustomTableComponent
] });
var GridEmpresasClientesComponent = _GridEmpresasClientesComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GridEmpresasClientesComponent, { className: "GridEmpresasClientesComponent", filePath: "src\\app\\pages\\configuraciones\\empresas-clientes\\grid-empresas-clientes\\grid-empresas-clientes.component.ts", lineNumber: 28 });
})();

// src/app/pages/configuraciones/empresas-clientes/empresas-clientes.routes.ts
var empresas_clientes_routes_default = [
  {
    path: "",
    component: GridEmpresasClientesComponent
  }
];
export {
  empresas_clientes_routes_default as default
};
//# sourceMappingURL=chunk-MG5L4J2D.js.map
