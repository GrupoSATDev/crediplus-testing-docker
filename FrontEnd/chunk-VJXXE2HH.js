import {
  GenerosService
} from "./chunk-24H3OWIV.js";
import {
  MatTab,
  MatTabContent,
  MatTabGroup
} from "./chunk-6XMXDB2K.js";
import {
  EmpresasClientesService
} from "./chunk-Z3FK2VK2.js";
import {
  takeUntilDestroyed
} from "./chunk-GTAQN4AQ.js";
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
  EstadosDatosService
} from "./chunk-5JAUKKTX.js";
import {
  MatSelect
} from "./chunk-CZDVBWDU.js";
import {
  UsuariosService
} from "./chunk-4U6YC6GB.js";
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
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef
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
  DestroyRef,
  HttpClient,
  MatButton,
  MatIcon,
  MatIconButton,
  MatOption,
  NgForOf,
  NgIf,
  inject,
  map,
  tap,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵconditional,
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
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-WGDVSMOG.js";
import {
  __objRest,
  __spreadValues
} from "./chunk-AYDYM6RQ.js";

// src/app/core/services/tipo-usuarios.service.ts
var _TipoUsuariosService = class _TipoUsuariosService {
  constructor(_http, appSettingService) {
    this._http = _http;
    this.appSettingService = appSettingService;
  }
  getTipoUsuarios() {
    return this._http.get(`${this.appSettingService.tipoUsuarios.url.base}`);
  }
};
_TipoUsuariosService.\u0275fac = function TipoUsuariosService_Factory(t) {
  return new (t || _TipoUsuariosService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(AppSettingsService));
};
_TipoUsuariosService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _TipoUsuariosService, factory: _TipoUsuariosService.\u0275fac, providedIn: "root" });
var TipoUsuariosService = _TipoUsuariosService;

// src/app/core/services/roles.service.ts
var _RolesService = class _RolesService {
  constructor(_http, appSettingService) {
    this._http = _http;
    this.appSettingService = appSettingService;
  }
  getRoles() {
    return this._http.get(`${this.appSettingService.roles.url.base}`);
  }
};
_RolesService.\u0275fac = function RolesService_Factory(t) {
  return new (t || _RolesService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(AppSettingsService));
};
_RolesService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _RolesService, factory: _RolesService.\u0275fac, providedIn: "root" });
var RolesService = _RolesService;

// src/app/pages/seguridad/usuarios-empresas/form-usuarios-empresas/form-usuarios-empresas.component.ts
function FormUsuariosEmpresasComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8)(1, "div", 23);
    \u0275\u0275listener("click", function FormUsuariosEmpresasComponent_Conditional_5_Template_div_click_1_listener() {
      \u0275\u0275restoreView(_r2);
      const twoStepToggle_r3 = \u0275\u0275reference(5);
      return \u0275\u0275resetView(twoStepToggle_r3.toggle());
    });
    \u0275\u0275elementStart(2, "div", 24);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(4, "mat-slide-toggle", 25, 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" Estado ", ctx_r3.form.get("estado").value ? "Activo" : "Inactivo", " ");
    \u0275\u0275advance();
    \u0275\u0275property("color", "primary")("formControlName", "estado");
  }
}
function FormUsuariosEmpresasComponent_ng_container_21_mat_option_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 27);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tipoUsuario_r5 = ctx.$implicit;
    \u0275\u0275property("value", tipoUsuario_r5.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(tipoUsuario_r5.nombre);
  }
}
function FormUsuariosEmpresasComponent_ng_container_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, FormUsuariosEmpresasComponent_ng_container_21_mat_option_1_Template, 2, 2, "mat-option", 26);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const tipoUsuarios_r6 = ctx.ngIf;
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", tipoUsuarios_r6.data);
  }
}
function FormUsuariosEmpresasComponent_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8)(1, "div", 23);
    \u0275\u0275listener("click", function FormUsuariosEmpresasComponent_Conditional_28_Template_div_click_1_listener() {
      \u0275\u0275restoreView(_r7);
      const twoStepToggle_r8 = \u0275\u0275reference(5);
      return \u0275\u0275resetView(twoStepToggle_r8.toggle());
    });
    \u0275\u0275elementStart(2, "div", 24);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(4, "mat-slide-toggle", 25, 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" Establecer nueva contrase\xF1a ? ", ctx_r3.form.get("estadoContrasena").value ? "Si" : "No", " ");
    \u0275\u0275advance();
    \u0275\u0275property("color", "primary")("formControlName", "estadoContrasena");
  }
}
function FormUsuariosEmpresasComponent_Conditional_29_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-icon", 30);
  }
  if (rf & 2) {
    \u0275\u0275property("svgIcon", "heroicons_solid:eye");
  }
}
function FormUsuariosEmpresasComponent_Conditional_29_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-icon", 30);
  }
  if (rf & 2) {
    \u0275\u0275property("svgIcon", "heroicons_solid:eye-slash");
  }
}
function FormUsuariosEmpresasComponent_Conditional_29_Conditional_9_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " La contrase\xF1a es requerida!. ");
  }
}
function FormUsuariosEmpresasComponent_Conditional_29_Conditional_9_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " El m\xEDnimo de caracteres son 5. ");
  }
}
function FormUsuariosEmpresasComponent_Conditional_29_Conditional_9_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " El maximo de caracteres son 20. ");
  }
}
function FormUsuariosEmpresasComponent_Conditional_29_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275template(1, FormUsuariosEmpresasComponent_Conditional_29_Conditional_9_Conditional_1_Template, 1, 0)(2, FormUsuariosEmpresasComponent_Conditional_29_Conditional_9_Conditional_2_Template, 1, 0)(3, FormUsuariosEmpresasComponent_Conditional_29_Conditional_9_Conditional_3_Template, 1, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.form.get("contrasena").hasError("required") ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.form.get("contrasena").hasError("minlength") ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.form.get("contrasena").hasError("maxlength") ? 3 : -1);
  }
}
function FormUsuariosEmpresasComponent_Conditional_29_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-icon", 30);
  }
  if (rf & 2) {
    \u0275\u0275property("svgIcon", "heroicons_solid:eye");
  }
}
function FormUsuariosEmpresasComponent_Conditional_29_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-icon", 30);
  }
  if (rf & 2) {
    \u0275\u0275property("svgIcon", "heroicons_solid:eye-slash");
  }
}
function FormUsuariosEmpresasComponent_Conditional_29_Conditional_18_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " La confirmaci\xF3n de contrase\xF1a es requerida!. ");
  }
}
function FormUsuariosEmpresasComponent_Conditional_29_Conditional_18_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " El m\xEDnimo de caracteres son 5. ");
  }
}
function FormUsuariosEmpresasComponent_Conditional_29_Conditional_18_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " El maximo de caracteres son 20. ");
  }
}
function FormUsuariosEmpresasComponent_Conditional_29_Conditional_18_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Las contrase\xF1as no coinciden! ");
  }
}
function FormUsuariosEmpresasComponent_Conditional_29_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275template(1, FormUsuariosEmpresasComponent_Conditional_29_Conditional_18_Conditional_1_Template, 1, 0)(2, FormUsuariosEmpresasComponent_Conditional_29_Conditional_18_Conditional_2_Template, 1, 0)(3, FormUsuariosEmpresasComponent_Conditional_29_Conditional_18_Conditional_3_Template, 1, 0)(4, FormUsuariosEmpresasComponent_Conditional_29_Conditional_18_Conditional_4_Template, 1, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.form.get("confirmaContrasena").hasError("required") ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.form.get("confirmaContrasena").hasError("minlength") ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.form.get("confirmaContrasena").hasError("maxlength") ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.form.get("confirmaContrasena").hasError("passwordMismatchError") ? 4 : -1);
  }
}
function FormUsuariosEmpresasComponent_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9)(1, "mat-form-field", 10)(2, "mat-label");
    \u0275\u0275text(3, "Contrase\xF1a");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "input", 28, 2);
    \u0275\u0275elementStart(6, "button", 29);
    \u0275\u0275listener("click", function FormUsuariosEmpresasComponent_Conditional_29_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r9);
      const passwordField_r10 = \u0275\u0275reference(5);
      return \u0275\u0275resetView(passwordField_r10.type === "password" ? passwordField_r10.type = "text" : passwordField_r10.type = "password");
    });
    \u0275\u0275template(7, FormUsuariosEmpresasComponent_Conditional_29_Conditional_7_Template, 1, 1, "mat-icon", 30)(8, FormUsuariosEmpresasComponent_Conditional_29_Conditional_8_Template, 1, 1, "mat-icon", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, FormUsuariosEmpresasComponent_Conditional_29_Conditional_9_Template, 4, 3, "mat-error");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "mat-form-field", 10)(11, "mat-label");
    \u0275\u0275text(12, "Confirmar contrase\xF1a");
    \u0275\u0275elementEnd();
    \u0275\u0275element(13, "input", 31, 3);
    \u0275\u0275elementStart(15, "button", 29);
    \u0275\u0275listener("click", function FormUsuariosEmpresasComponent_Conditional_29_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r9);
      const passwordConfirm_r11 = \u0275\u0275reference(14);
      return \u0275\u0275resetView(passwordConfirm_r11.type === "password" ? passwordConfirm_r11.type = "text" : passwordConfirm_r11.type = "password");
    });
    \u0275\u0275template(16, FormUsuariosEmpresasComponent_Conditional_29_Conditional_16_Template, 1, 1, "mat-icon", 30)(17, FormUsuariosEmpresasComponent_Conditional_29_Conditional_17_Template, 1, 1, "mat-icon", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275template(18, FormUsuariosEmpresasComponent_Conditional_29_Conditional_18_Template, 5, 4, "mat-error");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const passwordField_r10 = \u0275\u0275reference(5);
    const passwordConfirm_r11 = \u0275\u0275reference(14);
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("formControlName", "contrasena");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(passwordField_r10.type === "password" ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(passwordField_r10.type === "text" ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.form.get("contrasena").dirty || ctx_r3.form.get("contrasena").touched ? 9 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275property("formControlName", "confirmaContrasena");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(passwordConfirm_r11.type === "password" ? 16 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(passwordConfirm_r11.type === "text" ? 17 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.form.get("confirmaContrasena").dirty || ctx_r3.form.get("confirmaContrasena").touched ? 18 : -1);
  }
}
function FormUsuariosEmpresasComponent_ng_container_36_mat_option_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 27);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const rol_r12 = ctx.$implicit;
    \u0275\u0275property("value", rol_r12.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(rol_r12.nombre);
  }
}
function FormUsuariosEmpresasComponent_ng_container_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, FormUsuariosEmpresasComponent_ng_container_36_mat_option_1_Template, 2, 2, "mat-option", 26);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const roles_r13 = ctx.ngIf;
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", roles_r13.data);
  }
}
function FormUsuariosEmpresasComponent_ng_container_42_mat_option_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 27);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const empresa_r14 = ctx.$implicit;
    \u0275\u0275property("value", empresa_r14.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(empresa_r14.razonSocial);
  }
}
function FormUsuariosEmpresasComponent_ng_container_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, FormUsuariosEmpresasComponent_ng_container_42_mat_option_1_Template, 2, 2, "mat-option", 26);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const empresas_r15 = ctx.ngIf;
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", empresas_r15.data);
  }
}
function FormUsuariosEmpresasComponent_ng_container_50_mat_option_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 27);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const departamento_r16 = ctx.$implicit;
    \u0275\u0275property("value", departamento_r16.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(departamento_r16.nombre);
  }
}
function FormUsuariosEmpresasComponent_ng_container_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, FormUsuariosEmpresasComponent_ng_container_50_mat_option_1_Template, 2, 2, "mat-option", 26);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const departamentos_r17 = ctx.ngIf;
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", departamentos_r17.data);
  }
}
function FormUsuariosEmpresasComponent_ng_container_56_mat_option_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 27);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const municipio_r18 = ctx.$implicit;
    \u0275\u0275property("value", municipio_r18.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(municipio_r18.nombre);
  }
}
function FormUsuariosEmpresasComponent_ng_container_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, FormUsuariosEmpresasComponent_ng_container_56_mat_option_1_Template, 2, 2, "mat-option", 26);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const municipios_r19 = ctx.ngIf;
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", municipios_r19.data);
  }
}
var _FormUsuariosEmpresasComponent = class _FormUsuariosEmpresasComponent {
  constructor() {
    this.fb = inject(FormBuilder);
    this._locacionService = inject(LocacionService);
    this.dialogRef = inject(MatDialogRef);
    this.fuseService = inject(FuseConfirmationService);
    this.estadosDatosService = inject(EstadosDatosService);
    this.usuariosService = inject(UsuariosService);
    this.tipoUsuariosService = inject(TipoUsuariosService);
    this.empresaClienteService = inject(EmpresasClientesService);
    this.rolesService = inject(RolesService);
    this._matData = inject(MAT_DIALOG_DATA);
    this.swalService = inject(SwalService);
    this.destroyedRef = inject(DestroyRef);
    this.departamentos$ = this._locacionService.getDepartamentos().pipe(tap((response) => {
      const valorSelected = response.data;
      const dialogData = this._matData;
      if (valorSelected && !dialogData.edit) {
        this.form.get("idDepartamento").setValue(valorSelected[0].id);
        const idDepto = this.form.get("idDepartamento").value;
        this.getMunicipios(idDepto);
      }
    }));
    this.tipoUsuarios$ = this.tipoUsuariosService.getTipoUsuarios().pipe(map((response) => {
      response.data = response.data.filter((res) => res.nombre !== "Trabajador");
      return response;
    }), tap((response) => {
      const valorSelected = response.data;
      const dialogData = this._matData;
      if (valorSelected && !dialogData.edit) {
        this.form.get("idTipoUsuario").setValue(valorSelected[0].id);
      }
    }));
    this.roles$ = this.rolesService.getRoles().pipe(tap((response) => {
      const valorSelected = response.data;
      const dialogData = this._matData;
      if (valorSelected && !dialogData.edit) {
        this.form.get("idRol").setValue(valorSelected[0].id);
      }
    }));
    this.empresas$ = this.empresaClienteService.getEmpresasClientesSelect().pipe(tap((response) => {
      const valorSelected = response.data;
      const dialogData = this._matData;
      if (valorSelected && !dialogData.edit) {
        this.form.get("idSubEmpresa").setValue(valorSelected[0].id);
      }
    }));
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
      this.getUsuario(data.id);
      this.form.get("estadoContrasena").valueChanges.pipe(takeUntilDestroyed(this.destroyedRef)).subscribe((response) => {
        if (response) {
          this.form.get("contrasena").setValidators([Validators.required, Validators.minLength(5), Validators.maxLength(20)]);
          this.form.get("confirmaContrasena").setValidators([Validators.required, Validators.minLength(5), Validators.maxLength(20)]);
          this.form.get("contrasena").updateValueAndValidity();
          this.form.get("confirmaContrasena").updateValueAndValidity();
        } else {
          this.form.get("contrasena").removeValidators([Validators.required]);
          this.form.get("confirmaContrasena").removeValidators([Validators.required]);
          this.form.get("contrasena").setValue("");
          this.form.get("confirmaContrasena").setValue("");
          this.form.get("contrasena").updateValueAndValidity();
          this.form.get("confirmaContrasena").updateValueAndValidity();
        }
      });
    }
  }
  createForm() {
    this.form = this.fb.group({
      id: [null],
      nombre: ["", [Validators.required]],
      apellido: ["", [Validators.required]],
      correo: ["", [Validators.required]],
      contrasena: ["", [Validators.required, Validators.minLength(5), Validators.maxLength(20)]],
      confirmaContrasena: ["", [Validators.required, Validators.minLength(5), Validators.maxLength(20)]],
      idRol: [""],
      idSubEmpresa: [""],
      idTipoUsuario: [""],
      idDepartamento: [""],
      idMunicipio: [""],
      estado: [true],
      estadoContrasena: [true]
    }, { validators: passwordMatchValidator("contrasena", "confirmaContrasena") });
  }
  onSave() {
    if (this.form.valid) {
      if (!this._matData.edit) {
        const data = this.form.getRawValue();
        const _a = data, { idDepartamento, confirmaContrasena, estadoContrasena } = _a, form = __objRest(_a, ["idDepartamento", "confirmaContrasena", "estadoContrasena"]);
        const dialog = this.fuseService.open(__spreadValues({}, guardar));
        dialog.afterClosed().subscribe((response) => {
          if (response === "confirmed") {
            this.usuariosService.postUsuarios(form).subscribe((res) => {
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
        const _b = data, { idDepartamento, confirmaContrasena, estadoContrasena } = _b, form = __objRest(_b, ["idDepartamento", "confirmaContrasena", "estadoContrasena"]);
        const dialog = this.fuseService.open(__spreadValues({}, guardar));
        dialog.afterClosed().subscribe((response) => {
          if (response === "confirmed") {
            this.usuariosService.putUsuario(form).subscribe((res) => {
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
      }
    } else {
      this.form.markAllAsTouched();
    }
  }
  getUsuario(id) {
    this.usuariosService.getUsuario(id).subscribe((response) => {
      if (response) {
        console.log(response.data);
        const _a = response.data, { idDepartamento } = _a, data = __objRest(_a, ["idDepartamento"]);
        this.form.patchValue(__spreadValues({
          idDepartamento
        }, data));
        this.municipios$ = this._locacionService.getMunicipio(idDepartamento);
      }
    });
  }
  isEditContrasena(estado) {
  }
  closeDialog() {
    this.dialogRef.close();
  }
};
_FormUsuariosEmpresasComponent.\u0275fac = function FormUsuariosEmpresasComponent_Factory(t) {
  return new (t || _FormUsuariosEmpresasComponent)();
};
_FormUsuariosEmpresasComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FormUsuariosEmpresasComponent, selectors: [["app-form-usuarios-empresas"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 65, vars: 31, consts: [["data", ""], ["twoStepToggle", ""], ["passwordField", ""], ["passwordConfirm", ""], [1, "w-full", "sm:bg-card", "sm:rounded-2xl", "sm:mx-0", "mx-auto"], [1, ""], [1, "mt-8", "text-3xl", "font-semibold", "leading-tight", "tracking-tight", "text-center"], [1, "mt-8", 3, "formGroup"], [1, "flex", "mb-4"], [1, "flex", "flex-col", "lg:flex-row", "mb-4", "gap-2"], ["floatLabel", "always", 1, "w-full"], ["matInput", "", "placeholder", "Nombre", 3, "formControlName"], ["matInput", "", "placeholder", "Apellido", 3, "formControlName"], ["placeholder", "Tipo de usuario", 3, "formControlName"], [4, "ngIf"], ["id", "nit", "matInput", "", "placeholder", "Correo", 3, "formControlName"], ["placeholder", "Rol", 3, "formControlName"], ["placeholder", "Empresa", 3, "formControlName"], ["placeholder", "Departamento", 3, "selectionChange", "formControlName"], ["placeholder", "Ciudad", 3, "formControlName"], [1, "flex", "flex-wrap", "justify-end", "gap-2.5"], ["mat-flat-button", "", 1, "lg:w-auto", "w-full", "lg:mt-6", "bg-credigray-100", "rounded-lg", "transition", "duration-200", "text-white", "font-semibold", 3, "click", "color"], ["mat-flat-button", "", 1, "lg:w-auto", "w-full", "lg:mt-6", "bg-crediblue-50", "rounded-lg", "transition", "duration-200", "text-white", "font-semibold", 3, "click", "color"], [1, "fcursor-pointer", 3, "click"], [1, "font-medium", "leading-6"], [1, "ml-4", 3, "color", "formControlName"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["id", "contrasena", "matInput", "", "type", "password", "placeholder", "Contrase\xF1a", 3, "formControlName"], ["mat-icon-button", "", "type", "button", "matSuffix", "", 3, "click"], [1, "icon-size-5", 3, "svgIcon"], ["id", "confirmaContrasena", "matInput", "", "type", "password", "placeholder", "Confirmar contrase\xF1a", 3, "formControlName"]], template: function FormUsuariosEmpresasComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 5)(2, "div", 6);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "form", 7);
    \u0275\u0275template(5, FormUsuariosEmpresasComponent_Conditional_5_Template, 6, 3, "div", 8);
    \u0275\u0275elementStart(6, "div", 9)(7, "mat-form-field", 10)(8, "mat-label");
    \u0275\u0275text(9, "Nombre");
    \u0275\u0275elementEnd();
    \u0275\u0275element(10, "input", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "mat-form-field", 10)(12, "mat-label");
    \u0275\u0275text(13, "Apellido");
    \u0275\u0275elementEnd();
    \u0275\u0275element(14, "input", 12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 9)(16, "mat-form-field", 10)(17, "mat-label");
    \u0275\u0275text(18, "Tipo de usuario");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "mat-select", 13, 0);
    \u0275\u0275template(21, FormUsuariosEmpresasComponent_ng_container_21_Template, 2, 1, "ng-container", 14);
    \u0275\u0275pipe(22, "async");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "mat-form-field", 10)(24, "mat-label");
    \u0275\u0275text(25, "Correo");
    \u0275\u0275elementEnd();
    \u0275\u0275element(26, "input", 15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 9);
    \u0275\u0275template(28, FormUsuariosEmpresasComponent_Conditional_28_Template, 6, 3, "div", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275template(29, FormUsuariosEmpresasComponent_Conditional_29_Template, 19, 8, "div", 9);
    \u0275\u0275elementStart(30, "div", 9)(31, "mat-form-field", 10)(32, "mat-label");
    \u0275\u0275text(33, "Rol");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "mat-select", 16, 0);
    \u0275\u0275template(36, FormUsuariosEmpresasComponent_ng_container_36_Template, 2, 1, "ng-container", 14);
    \u0275\u0275pipe(37, "async");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "mat-form-field", 10)(39, "mat-label");
    \u0275\u0275text(40, "Empresa");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "mat-select", 17);
    \u0275\u0275template(42, FormUsuariosEmpresasComponent_ng_container_42_Template, 2, 1, "ng-container", 14);
    \u0275\u0275pipe(43, "async");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(44, "div", 9)(45, "mat-form-field", 10)(46, "mat-label");
    \u0275\u0275text(47, "Departamento");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "mat-select", 18, 0);
    \u0275\u0275listener("selectionChange", function FormUsuariosEmpresasComponent_Template_mat_select_selectionChange_48_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.onSelected($event));
    });
    \u0275\u0275template(50, FormUsuariosEmpresasComponent_ng_container_50_Template, 2, 1, "ng-container", 14);
    \u0275\u0275pipe(51, "async");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(52, "mat-form-field", 10)(53, "mat-label");
    \u0275\u0275text(54, "Ciudad");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "mat-select", 19);
    \u0275\u0275template(56, FormUsuariosEmpresasComponent_ng_container_56_Template, 2, 1, "ng-container", 14);
    \u0275\u0275pipe(57, "async");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(58, "div", 20)(59, "button", 21);
    \u0275\u0275listener("click", function FormUsuariosEmpresasComponent_Template_button_click_59_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.closeDialog());
    });
    \u0275\u0275elementStart(60, "span");
    \u0275\u0275text(61, " Cancelar ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(62, "button", 22);
    \u0275\u0275listener("click", function FormUsuariosEmpresasComponent_Template_button_click_62_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.onSave());
    });
    \u0275\u0275elementStart(63, "span");
    \u0275\u0275text(64);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx._matData.edit ? "Actualizar usuario" : "Agregar usuario", " ");
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx.form);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx._matData.edit ? 5 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275property("formControlName", "nombre");
    \u0275\u0275advance(4);
    \u0275\u0275property("formControlName", "apellido");
    \u0275\u0275advance(5);
    \u0275\u0275property("formControlName", "idTipoUsuario");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(22, 21, ctx.tipoUsuarios$));
    \u0275\u0275advance(5);
    \u0275\u0275property("formControlName", "correo");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx._matData.edit ? 28 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.form.get("estadoContrasena").value ? 29 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275property("formControlName", "idRol");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(37, 23, ctx.roles$));
    \u0275\u0275advance(5);
    \u0275\u0275property("formControlName", "idSubEmpresa");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(43, 25, ctx.empresas$));
    \u0275\u0275advance(6);
    \u0275\u0275property("formControlName", "idDepartamento");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(51, 27, ctx.departamentos$));
    \u0275\u0275advance(5);
    \u0275\u0275property("formControlName", "idMunicipio");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(57, 29, ctx.municipios$));
    \u0275\u0275advance(3);
    \u0275\u0275property("color", "primary");
    \u0275\u0275advance(3);
    \u0275\u0275property("color", "primary");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx._matData.edit ? "Actualizar" : "Guardar", " ");
  }
}, dependencies: [
  FormsModule,
  \u0275NgNoValidate,
  DefaultValueAccessor,
  NgControlStatus,
  NgControlStatusGroup,
  MatFormField,
  MatInput,
  MatLabel,
  ReactiveFormsModule,
  FormGroupDirective,
  FormControlName,
  AsyncPipe,
  MatOption,
  MatSelect,
  NgForOf,
  NgIf,
  MatButton,
  MatIcon,
  MatIconButton,
  MatError,
  MatSlideToggle
], styles: ["\n\n  .custom-dialog-container {\n  width: 100%;\n}\n@media (min-width: 600px) {\n    .custom-dialog-container {\n    width: 60%;\n  }\n}\n@media (min-width: 1280px) {\n    .custom-dialog-container {\n    width: 50%;\n  }\n}\n/*# sourceMappingURL=form-usuarios-empresas.component.css.map */"] });
var FormUsuariosEmpresasComponent = _FormUsuariosEmpresasComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FormUsuariosEmpresasComponent, { className: "FormUsuariosEmpresasComponent", filePath: "src\\app\\pages\\seguridad\\usuarios-empresas\\form-usuarios-empresas\\form-usuarios-empresas.component.ts", lineNumber: 54 });
})();
function passwordMatchValidator(controlName, matchingControlName) {
  return (formGroup) => {
    const control = formGroup.get(controlName);
    const matchingControl = formGroup.get(matchingControlName);
    if (matchingControl?.errors && !matchingControl.errors["passwordMismatchError"]) {
      return null;
    }
    if (control?.value !== matchingControl?.value) {
      matchingControl?.setErrors({ passwordMismatchError: true });
    } else {
      matchingControl?.setErrors(null);
    }
    return null;
  };
}

// src/app/core/enums/codigos-usuarios.ts
var CodigosUsuarios;
(function(CodigosUsuarios2) {
  CodigosUsuarios2["TRABAJADORES"] = "e626ea69-e995-4462-be9a-905326714781";
  CodigosUsuarios2["USUARIOS"] = "e626ea69-e995-4462-be9a-905326714793";
})(CodigosUsuarios || (CodigosUsuarios = {}));

// src/app/pages/seguridad/usuarios-empresas/grid-usuarios-empresas/grid-usuarios-empresas.component.ts
function GridUsuariosEmpresasComponent_ng_template_17_ng_container_0_Template(rf, ctx) {
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
function GridUsuariosEmpresasComponent_ng_template_17_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "div", 21)(2, "fuse-alert", 22)(3, "span", 23);
    \u0275\u0275text(4, "Informaci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, " No hay usuarios hasta el momento. ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275property("type", "info")("appearance", "outline");
  }
}
function GridUsuariosEmpresasComponent_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, GridUsuariosEmpresasComponent_ng_template_17_ng_container_0_Template, 2, 6, "ng-container", 18)(1, GridUsuariosEmpresasComponent_ng_template_17_ng_template_1_Template, 6, 2, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const noData_r3 = \u0275\u0275reference(2);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngIf", ctx_r1.data.length)("ngIfElse", noData_r3);
  }
}
function GridUsuariosEmpresasComponent_ng_template_19_ng_container_0_Template(rf, ctx) {
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
function GridUsuariosEmpresasComponent_ng_template_19_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "div", 21)(2, "fuse-alert", 22)(3, "span", 23);
    \u0275\u0275text(4, "Informaci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, " No hay usuarios hasta el momento. ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275property("type", "info")("appearance", "outline");
  }
}
function GridUsuariosEmpresasComponent_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, GridUsuariosEmpresasComponent_ng_template_19_ng_container_0_Template, 2, 6, "ng-container", 18)(1, GridUsuariosEmpresasComponent_ng_template_19_ng_template_1_Template, 6, 2, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const noData_r4 = \u0275\u0275reference(2);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngIf", ctx_r1.data.length)("ngIfElse", noData_r4);
  }
}
var _GridUsuariosEmpresasComponent = class _GridUsuariosEmpresasComponent {
  constructor(_matDialog, estadoDatosService, generoService) {
    this._matDialog = _matDialog;
    this.estadoDatosService = estadoDatosService;
    this.generoService = generoService;
    this.usuariosService = inject(UsuariosService);
    this.searchTerm = "";
    this.selectedTab = CodigosUsuarios.USUARIOS;
    this.data = [];
    this.columns = ["Usuario", "Nombre completo", "Rol", "Tipo de usuario", "Estado"];
    this.columnPropertyMap = {
      "Usuario": "correo",
      "Nombre completo": "nombreCompleto",
      "Rol": "nombreRol",
      "Tipo de usuario": "nombreTipoUsuario",
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
    this.tabChanged = (tabChangeEvent) => {
      this.tabIndex = tabChangeEvent.index;
      this.selectedTab = tabChangeEvent.index == 0 ? CodigosUsuarios.USUARIOS : CodigosUsuarios.TRABAJADORES;
      this.getUsuarios(this.selectedTab);
    };
  }
  onNew() {
    this._matDialog.open(FormUsuariosEmpresasComponent, {
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
    this._matDialog.open(FormUsuariosEmpresasComponent, {
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
  onSearch(event) {
    const target = event.target;
    this.searchTerm = target.value.trim().toLowerCase();
  }
  getUsuarios(params) {
    this.subcription$ = this.usuariosService.getUsuarios(params).pipe(map((response) => {
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
        if (items) {
          items.nombreCompleto = items.nombre.concat(" ", items.apellido);
        }
      });
      return response;
    })).subscribe((response) => {
      if (response.data) {
        this.data = response.data;
      }
    });
  }
  ngOnInit() {
    this.getUsuarios(this.selectedTab);
  }
  ngOnDestroy() {
    this.subcription$.unsubscribe();
  }
};
_GridUsuariosEmpresasComponent.\u0275fac = function GridUsuariosEmpresasComponent_Factory(t) {
  return new (t || _GridUsuariosEmpresasComponent)(\u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(EstadosDatosService), \u0275\u0275directiveInject(GenerosService));
};
_GridUsuariosEmpresasComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GridUsuariosEmpresasComponent, selectors: [["app-grid-usuarios-empresas"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 20, vars: 8, consts: [["tabGroup", ""], ["noData", ""], [1, "bg-card", "flex", "min-w-0", "flex-auto", "flex-col", "dark:bg-transparent", "sm:absolute", "sm:inset-0", "sm:overflow-hidden"], [1, "relative", "flex", "flex-0", "flex-col", "border-b", "px-6", "py-8", "sm:flex-row", "sm:items-center", "sm:justify-between", "md:px-8"], [1, "text-3xl", "font-semibold", "tracking-tight"], [1, "mt-6", "flex", "w-full", "shrink-0", "flex-col", "items-center", "sm:ml-4", "sm:mt-0", "sm:flex-row", "sm:space-x-2", "sm:w-auto"], [1, "fuse-mat-dense", "rounded-lg", "w-full", "sm:w-auto", "min-w-64", 3, "subscriptSizing"], ["matPrefix", "", 1, "icon-size-5", 3, "svgIcon"], ["matInput", "", 3, "input", "autocomplete", "placeholder"], ["mat-flat-button", "", 1, "mt-2", "w-full", "bg-crediblue-50", "rounded-lg", "transition", "duration-200", "text-white", "font-semibold", "sm:ml-4", "sm:mt-0", "sm:w-auto", 3, "click", "color"], [3, "svgIcon"], [1, "ml-2", "mr-1"], [1, "flex", "flex-auto", "overflow-hidden"], [1, "flex", "flex-auto", "flex-col", "overflow-hidden", "sm:mb-18", "sm:overflow-y-auto"], ["mat-stretch-tabs", "false", 1, "sm:px-2", 3, "selectedIndexChange", "selectedTabChange", "animationDuration", "selectedIndex"], ["label", "Usuarios del sistema"], ["matTabContent", ""], ["label", "Trabajadores"], [4, "ngIf", "ngIfElse"], [3, "columns", "displayedColumns", "columnPropertyMap", "data", "buttons", "searchTerm"], [1, "inset-0", "min-w-0", "overflow-auto", "print:overflow-visible"], [1, "inline-block", "p-4", "sm:p-2", "print:p-0", "w-full"], [3, "type", "appearance"], ["fuseAlertTitle", ""]], template: function GridUsuariosEmpresasComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "div", 4);
    \u0275\u0275text(3, "Usuarios");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 5)(5, "mat-form-field", 6);
    \u0275\u0275element(6, "mat-icon", 7);
    \u0275\u0275elementStart(7, "input", 8);
    \u0275\u0275listener("input", function GridUsuariosEmpresasComponent_Template_input_input_7_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.onSearch($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "button", 9);
    \u0275\u0275listener("click", function GridUsuariosEmpresasComponent_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.onNew());
    });
    \u0275\u0275element(9, "mat-icon", 10);
    \u0275\u0275elementStart(10, "span", 11);
    \u0275\u0275text(11, "Agregar");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(12, "div", 12)(13, "div", 13)(14, "mat-tab-group", 14, 0);
    \u0275\u0275twoWayListener("selectedIndexChange", function GridUsuariosEmpresasComponent_Template_mat_tab_group_selectedIndexChange_14_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.tabIndex, $event) || (ctx.tabIndex = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("selectedTabChange", function GridUsuariosEmpresasComponent_Template_mat_tab_group_selectedTabChange_14_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.tabChanged($event));
    });
    \u0275\u0275elementStart(16, "mat-tab", 15);
    \u0275\u0275template(17, GridUsuariosEmpresasComponent_ng_template_17_Template, 3, 2, "ng-template", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "mat-tab", 17);
    \u0275\u0275template(19, GridUsuariosEmpresasComponent_ng_template_19_Template, 3, 2, "ng-template", 16);
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
    \u0275\u0275property("color", "primary");
    \u0275\u0275advance();
    \u0275\u0275property("svgIcon", "heroicons_outline:plus");
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
  MatTabGroup,
  FuseAlertComponent,
  MatTab,
  MatTabContent,
  NgIf
] });
var GridUsuariosEmpresasComponent = _GridUsuariosEmpresasComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GridUsuariosEmpresasComponent, { className: "GridUsuariosEmpresasComponent", filePath: "src\\app\\pages\\seguridad\\usuarios-empresas\\grid-usuarios-empresas\\grid-usuarios-empresas.component.ts", lineNumber: 38 });
})();

// src/app/pages/seguridad/usuarios-empresas/usuarios-empresas.routes.ts
var usuarios_empresas_routes_default = [
  {
    path: "",
    component: GridUsuariosEmpresasComponent
  }
];
export {
  usuarios_empresas_routes_default as default
};
//# sourceMappingURL=chunk-VJXXE2HH.js.map
