import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-WO675REP.js";
import {
  DefaultValueAccessor,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  MatError,
  MatFormField,
  MatFormFieldModule,
  MatInput,
  MatInputModule,
  MatLabel,
  MatSuffix,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  UntypedFormBuilder,
  Validators,
  ɵNgNoValidate
} from "./chunk-IZMZQUCC.js";
import {
  AuthService
} from "./chunk-F2FVRPPM.js";
import {
  AesEncryptionService
} from "./chunk-4LX6KC25.js";
import {
  ActivatedRoute,
  Router,
  RouterLink
} from "./chunk-L2WXMDPA.js";
import "./chunk-GRFMDZQD.js";
import "./chunk-74CJHXHU.js";
import {
  FuseAlertComponent
} from "./chunk-YZGIFTGF.js";
import {
  fuseAnimations
} from "./chunk-G7E77ZCS.js";
import "./chunk-ROMZC4L4.js";
import {
  MatButton,
  MatButtonModule,
  MatIcon,
  MatIconButton,
  MatIconModule,
  delay,
  finalize,
  inject,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-WGDVSMOG.js";
import "./chunk-AYDYM6RQ.js";

// src/@fuse/validators/validators.ts
var FuseValidators = class {
  /**
   * Check for empty (optional fields) values
   *
   * @param value
   */
  static isEmptyInputValue(value) {
    return value == null || value.length === 0;
  }
  /**
   * Must match validator
   *
   * @param controlPath A dot-delimited string values that define the path to the control.
   * @param matchingControlPath A dot-delimited string values that define the path to the matching control.
   */
  static mustMatch(controlPath, matchingControlPath) {
    return (formGroup) => {
      const control = formGroup.get(controlPath);
      const matchingControl = formGroup.get(matchingControlPath);
      if (!control || !matchingControl) {
        return null;
      }
      if (matchingControl.hasError("mustMatch")) {
        delete matchingControl.errors.mustMatch;
        matchingControl.updateValueAndValidity();
      }
      if (this.isEmptyInputValue(matchingControl.value) || control.value === matchingControl.value) {
        return null;
      }
      const errors = { mustMatch: true };
      matchingControl.setErrors(errors);
      return errors;
    };
  }
};

// src/app/modules/auth/reset-password/reset-password.component.ts
var _c0 = ["resetPasswordNgForm"];
var _c1 = () => ["/sign-in"];
function AuthResetPasswordComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "fuse-alert", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("appearance", "outline")("showIcon", false)("type", ctx_r0.alert.type)("@shake", ctx_r0.alert.type === "error");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.alert.message, " ");
  }
}
function AuthResetPasswordComponent_Conditional_12_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-icon", 29);
  }
  if (rf & 2) {
    \u0275\u0275property("svgIcon", "heroicons_solid:eye");
  }
}
function AuthResetPasswordComponent_Conditional_12_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-icon", 29);
  }
  if (rf & 2) {
    \u0275\u0275property("svgIcon", "heroicons_solid:eye-slash");
  }
}
function AuthResetPasswordComponent_Conditional_12_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Contrase\xF1a es requerida ");
    \u0275\u0275elementEnd();
  }
}
function AuthResetPasswordComponent_Conditional_12_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " La contrase\xF1a debe tener m\xEDnimo 8 caracteres ");
    \u0275\u0275elementEnd();
  }
}
function AuthResetPasswordComponent_Conditional_12_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-icon", 29);
  }
  if (rf & 2) {
    \u0275\u0275property("svgIcon", "heroicons_solid:eye");
  }
}
function AuthResetPasswordComponent_Conditional_12_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-icon", 29);
  }
  if (rf & 2) {
    \u0275\u0275property("svgIcon", "heroicons_solid:eye-slash");
  }
}
function AuthResetPasswordComponent_Conditional_12_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " La contrase\xF1a de confirmaci\xF3n es requerida ");
    \u0275\u0275elementEnd();
  }
}
function AuthResetPasswordComponent_Conditional_12_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " No coinciden las contrase\xF1as ");
    \u0275\u0275elementEnd();
  }
}
function AuthResetPasswordComponent_Conditional_12_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " La confirmaci\xF3n debe tener m\xEDnimo 8 caracteres ");
    \u0275\u0275elementEnd();
  }
}
function AuthResetPasswordComponent_Conditional_12_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, " Cambiar ");
    \u0275\u0275elementEnd();
  }
}
function AuthResetPasswordComponent_Conditional_12_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-progress-spinner", 32);
  }
  if (rf & 2) {
    \u0275\u0275property("diameter", 24)("mode", "indeterminate");
  }
}
function AuthResetPasswordComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 26)(1, "mat-label");
    \u0275\u0275text(2, "Contrase\xF1a");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "input", 27, 1);
    \u0275\u0275elementStart(5, "button", 28);
    \u0275\u0275listener("click", function AuthResetPasswordComponent_Conditional_12_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r2);
      const passwordField_r3 = \u0275\u0275reference(4);
      return \u0275\u0275resetView(passwordField_r3.type === "password" ? passwordField_r3.type = "text" : passwordField_r3.type = "password");
    });
    \u0275\u0275template(6, AuthResetPasswordComponent_Conditional_12_Conditional_6_Template, 1, 1, "mat-icon", 29)(7, AuthResetPasswordComponent_Conditional_12_Conditional_7_Template, 1, 1, "mat-icon", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, AuthResetPasswordComponent_Conditional_12_Conditional_8_Template, 2, 0, "mat-error")(9, AuthResetPasswordComponent_Conditional_12_Conditional_9_Template, 2, 0, "mat-error");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "mat-form-field", 26)(11, "mat-label");
    \u0275\u0275text(12, "Confirmar (contrase\xF1a)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(13, "input", 30, 2);
    \u0275\u0275elementStart(15, "button", 28);
    \u0275\u0275listener("click", function AuthResetPasswordComponent_Conditional_12_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r2);
      const passwordConfirmField_r4 = \u0275\u0275reference(14);
      return \u0275\u0275resetView(passwordConfirmField_r4.type === "password" ? passwordConfirmField_r4.type = "text" : passwordConfirmField_r4.type = "password");
    });
    \u0275\u0275template(16, AuthResetPasswordComponent_Conditional_12_Conditional_16_Template, 1, 1, "mat-icon", 29)(17, AuthResetPasswordComponent_Conditional_12_Conditional_17_Template, 1, 1, "mat-icon", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275template(18, AuthResetPasswordComponent_Conditional_12_Conditional_18_Template, 2, 0, "mat-error")(19, AuthResetPasswordComponent_Conditional_12_Conditional_19_Template, 2, 0, "mat-error")(20, AuthResetPasswordComponent_Conditional_12_Conditional_20_Template, 2, 0, "mat-error");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "button", 31);
    \u0275\u0275listener("click", function AuthResetPasswordComponent_Conditional_12_Template_button_click_21_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.resetPassword());
    });
    \u0275\u0275template(22, AuthResetPasswordComponent_Conditional_12_Conditional_22_Template, 2, 0, "span")(23, AuthResetPasswordComponent_Conditional_12_Conditional_23_Template, 1, 2, "mat-progress-spinner", 32);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const passwordField_r3 = \u0275\u0275reference(4);
    const passwordConfirmField_r4 = \u0275\u0275reference(14);
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("formControlName", "contrasena");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(passwordField_r3.type === "password" ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(passwordField_r3.type === "text" ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.resetPasswordForm.get("contrasena").hasError("required") ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.resetPasswordForm.get("contrasena").hasError("minlength") ? 9 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275property("formControlName", "contrasenaConfirm");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(passwordConfirmField_r4.type === "password" ? 16 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(passwordConfirmField_r4.type === "text" ? 17 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.resetPasswordForm.get("contrasenaConfirm").hasError("required") ? 18 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.resetPasswordForm.get("contrasenaConfirm").hasError("mustMatch") ? 19 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.resetPasswordForm.get("contrasenaConfirm").hasError("minlength") ? 20 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("color", "primary")("disabled", ctx_r0.resetPasswordForm.disabled);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r0.resetPasswordForm.disabled ? 22 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.resetPasswordForm.disabled ? 23 : -1);
  }
}
var _AuthResetPasswordComponent = class _AuthResetPasswordComponent {
  /**
   * Constructor
   */
  constructor(_authService, _formBuilder, activatedRoute, router) {
    this._authService = _authService;
    this._formBuilder = _formBuilder;
    this.activatedRoute = activatedRoute;
    this.router = router;
    this.aesEncriptService = inject(AesEncryptionService);
    this.alert = {
      type: "success",
      message: "Contrase\xF1a actualizada con \xE9xito."
    };
    this.showAlert = false;
    this.showResponse = false;
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------
  /**
   * On init
   */
  ngOnInit() {
    this.token = this.activatedRoute.snapshot.queryParamMap.get("token");
    this.resetPasswordForm = this._formBuilder.group({
      contrasena: ["", [Validators.required, Validators.minLength(8)]],
      contrasenaConfirm: ["", [Validators.required, Validators.minLength(8)]]
    }, {
      validators: FuseValidators.mustMatch("contrasena", "contrasenaConfirm")
    });
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------
  /**
   * Reset password
   */
  resetPassword() {
    if (this.resetPasswordForm.invalid) {
      return;
    }
    this.resetPasswordForm.disable();
    this.showAlert = false;
    const form = {
      contrasena: this.aesEncriptService.encrypt(this.resetPasswordForm.get("contrasena").value),
      token: this.token.replace(/\s/g, "+")
    };
    this._authService.resetPassword(form).pipe(finalize(() => {
      this.resetPasswordForm.enable();
      this.resetPasswordNgForm.resetForm();
      this.showAlert = true;
      this.showResponse = true;
    }), delay(3500)).subscribe((response) => {
      this.alert = {
        type: "success",
        message: "Contrase\xF1a actualizada con \xE9xito."
      };
      this.router.navigate(["/sign-in"]);
    }, (response) => {
      this.alert = {
        type: "error",
        message: response.error.errorMenssages[0]
      };
    });
  }
};
_AuthResetPasswordComponent.\u0275fac = function AuthResetPasswordComponent_Factory(t) {
  return new (t || _AuthResetPasswordComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(UntypedFormBuilder), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router));
};
_AuthResetPasswordComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AuthResetPasswordComponent, selectors: [["auth-reset-password"]], viewQuery: function AuthResetPasswordComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(_c0, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.resetPasswordNgForm = _t.first);
  }
}, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 34, vars: 5, consts: [["resetPasswordNgForm", "ngForm"], ["passwordField", ""], ["passwordConfirmField", ""], [1, "flex", "min-w-0", "flex-auto", "flex-col", "items-center", "sm:flex-row", "sm:justify-center", "md:items-start", "md:justify-start"], [1, "w-full", "px-4", "py-8", "sm:bg-card", "sm:w-auto", "sm:rounded-2xl", "sm:p-12", "sm:shadow", "md:flex", "md:h-full", "md:w-1/2", "md:items-center", "md:justify-end", "md:rounded-none", "md:p-16", "md:shadow-none"], [1, "mx-auto", "w-full", "max-w-80", "sm:mx-0", "sm:w-80"], [1, "w-4/5"], ["src", "images/logo/logo-azul.svg"], [1, "mt-8", "text-4xl", "font-extrabold", "leading-tight", "tracking-tight"], [1, "mt-0.5", "font-medium"], [1, "mt-8", 3, "appearance", "showIcon", "type"], [1, "mt-8", 3, "formGroup"], [1, "text-secondary", "mt-8", "text-md", "font-medium"], [1, "ml-1", "text-primary-500", "hover:underline", 3, "routerLink"], [1, "relative", "hidden", "h-full", "w-1/2", "flex-auto", "items-center", "justify-center", "overflow-hidden", "bg-gray-800", "p-16", "dark:border-l", "md:flex", "lg:px-28"], ["viewBox", "0 0 960 540", "width", "100%", "height", "100%", "preserveAspectRatio", "xMidYMax slice", "xmlns", "http://www.w3.org/2000/svg", 1, "absolute", "inset-0", "pointer-events-none"], ["fill", "none", "stroke", "currentColor", "stroke-width", "100", 1, "text-gray-700", "opacity-25"], ["r", "234", "cx", "196", "cy", "23"], ["r", "234", "cx", "790", "cy", "491"], ["viewBox", "0 0 220 192", "width", "220", "height", "192", "fill", "none", 1, "absolute", "-top-16", "-right-16", "text-gray-700"], ["id", "837c3e70-6c3a-44e6-8854-cc48c737b659", "x", "0", "y", "0", "width", "20", "height", "20", "patternUnits", "userSpaceOnUse"], ["x", "0", "y", "0", "width", "4", "height", "4", "fill", "currentColor"], ["width", "220", "height", "192", "fill", "url(#837c3e70-6c3a-44e6-8854-cc48c737b659)"], [1, "relative", "z-10", "w-full", "max-w-2xl"], [1, "text-7xl", "font-bold", "leading-none", "text-gray-100"], [1, "mt-6", "text-lg", "leading-6", "tracking-tight", "text-gray-400"], [1, "w-full"], ["id", "password", "matInput", "", "type", "password", 3, "formControlName"], ["mat-icon-button", "", "type", "button", "matSuffix", "", 3, "click"], [1, "icon-size-5", 3, "svgIcon"], ["id", "password-confirm", "matInput", "", "type", "password", 3, "formControlName"], ["mat-flat-button", "", 1, "fuse-mat-button-large", "mt-3", "w-full", 3, "click", "color", "disabled"], [3, "diameter", "mode"]], template: function AuthResetPasswordComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 4)(2, "div", 5)(3, "div", 6);
    \u0275\u0275element(4, "img", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 8);
    \u0275\u0275text(6, " Cambiar contrase\xF1a ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 9);
    \u0275\u0275text(8, " Crea una nueva contrase\xF1a ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, AuthResetPasswordComponent_Conditional_9_Template, 2, 5, "fuse-alert", 10);
    \u0275\u0275elementStart(10, "form", 11, 0);
    \u0275\u0275template(12, AuthResetPasswordComponent_Conditional_12_Template, 24, 15);
    \u0275\u0275elementStart(13, "div", 12)(14, "span");
    \u0275\u0275text(15, "Regresar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "a", 13);
    \u0275\u0275text(17, "Inicio de sesi\xF3n ");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(18, "div", 14);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(19, "svg", 15)(20, "g", 16);
    \u0275\u0275element(21, "circle", 17)(22, "circle", 18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "svg", 19)(24, "defs")(25, "pattern", 20);
    \u0275\u0275element(26, "rect", 21);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(27, "rect", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(28, "div", 23)(29, "div", 24)(30, "div");
    \u0275\u0275text(31, "Bienvenido a CrediPlus");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div", 25);
    \u0275\u0275text(33, " Plataforma para gestionar pr\xE9stamos a colaboradores de manera eficiente y segura. Inicia Sesi\xF3n y accede las opciones que tenemos para ti. ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(9);
    \u0275\u0275conditional(ctx.showAlert ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx.resetPasswordForm);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx.showResponse ? 12 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(4, _c1));
  }
}, dependencies: [
  FuseAlertComponent,
  FormsModule,
  \u0275NgNoValidate,
  DefaultValueAccessor,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  FormGroupDirective,
  FormControlName,
  MatFormFieldModule,
  MatFormField,
  MatLabel,
  MatError,
  MatSuffix,
  MatInputModule,
  MatInput,
  MatButtonModule,
  MatButton,
  MatIconButton,
  MatIconModule,
  MatIcon,
  MatProgressSpinnerModule,
  MatProgressSpinner,
  RouterLink
], encapsulation: 2, data: { animation: fuseAnimations } });
var AuthResetPasswordComponent = _AuthResetPasswordComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AuthResetPasswordComponent, { className: "AuthResetPasswordComponent", filePath: "src\\app\\modules\\auth\\reset-password\\reset-password.component.ts", lineNumber: 41 });
})();

// src/app/modules/auth/reset-password/reset-password.routes.ts
var reset_password_routes_default = [
  {
    path: "",
    component: AuthResetPasswordComponent
  }
];
export {
  reset_password_routes_default as default
};
//# sourceMappingURL=chunk-XWHLYYRC.js.map
