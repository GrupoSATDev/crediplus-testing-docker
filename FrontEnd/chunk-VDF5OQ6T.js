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
import "./chunk-4LX6KC25.js";
import {
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
  NgIf,
  finalize,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
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
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-WGDVSMOG.js";
import "./chunk-AYDYM6RQ.js";

// src/app/modules/auth/forgot-password/forgot-password.component.ts
var _c0 = ["forgotPasswordNgForm"];
var _c1 = () => ["/sign-in"];
function AuthForgotPasswordComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "fuse-alert", 8);
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
function AuthForgotPasswordComponent_ng_container_12_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Correo electronico es requirido ");
    \u0275\u0275elementEnd();
  }
}
function AuthForgotPasswordComponent_ng_container_12_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Por favor ingrese un correo valido. ");
    \u0275\u0275elementEnd();
  }
}
function AuthForgotPasswordComponent_ng_container_12_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, " Recuperar ");
    \u0275\u0275elementEnd();
  }
}
function AuthForgotPasswordComponent_ng_container_12_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-progress-spinner", 28);
  }
  if (rf & 2) {
    \u0275\u0275property("diameter", 24)("mode", "indeterminate");
  }
}
function AuthForgotPasswordComponent_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "mat-form-field", 25)(2, "mat-label");
    \u0275\u0275text(3, "Correo electronico");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "input", 26);
    \u0275\u0275template(5, AuthForgotPasswordComponent_ng_container_12_Conditional_5_Template, 2, 0, "mat-error")(6, AuthForgotPasswordComponent_ng_container_12_Conditional_6_Template, 2, 0, "mat-error");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 27);
    \u0275\u0275listener("click", function AuthForgotPasswordComponent_ng_container_12_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.sendResetLink());
    });
    \u0275\u0275template(8, AuthForgotPasswordComponent_ng_container_12_Conditional_8_Template, 2, 0, "span")(9, AuthForgotPasswordComponent_ng_container_12_Conditional_9_Template, 1, 2, "mat-progress-spinner", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("formControlName", "email");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.forgotPasswordForm.get("email").hasError("required") ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.forgotPasswordForm.get("email").hasError("email") ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("color", "primary")("disabled", ctx_r0.forgotPasswordForm.disabled);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r0.forgotPasswordForm.disabled ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.forgotPasswordForm.disabled ? 9 : -1);
  }
}
var _AuthForgotPasswordComponent = class _AuthForgotPasswordComponent {
  /**
   * Constructor
   */
  constructor(_authService, _formBuilder) {
    this._authService = _authService;
    this._formBuilder = _formBuilder;
    this.alert = {
      type: "success",
      message: ""
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
    this.forgotPasswordForm = this._formBuilder.group({
      email: ["", [Validators.required, Validators.email]]
    });
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------
  /**
   * Send the reset link
   */
  sendResetLink() {
    if (this.forgotPasswordForm.invalid) {
      return;
    }
    this.forgotPasswordForm.disable();
    this.showAlert = false;
    this._authService.forgotPassword(this.forgotPasswordForm.get("email").value).pipe(finalize(() => {
      this.forgotPasswordForm.enable();
      this.forgotPasswordNgForm.resetForm();
      this.showAlert = true;
      this.showResponse = true;
    })).subscribe((response) => {
      if (response) {
        this.alert = {
          type: "success",
          message: "\xA1Se ha enviado el restablecimiento de contrase\xF1a! Recibir\xE1s un correo electr\xF3nico para continuar con el proceso."
        };
      }
    }, (error) => {
      this.alert = {
        type: "error",
        message: "\xA1No se encontr\xF3 el correo electr\xF3nico!"
      };
    });
  }
};
_AuthForgotPasswordComponent.\u0275fac = function AuthForgotPasswordComponent_Factory(t) {
  return new (t || _AuthForgotPasswordComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(UntypedFormBuilder));
};
_AuthForgotPasswordComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AuthForgotPasswordComponent, selectors: [["auth-forgot-password"]], viewQuery: function AuthForgotPasswordComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(_c0, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.forgotPasswordNgForm = _t.first);
  }
}, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 34, vars: 5, consts: [["forgotPasswordNgForm", "ngForm"], [1, "flex", "min-w-0", "flex-auto", "flex-col", "items-center", "sm:flex-row", "sm:justify-center", "md:items-start", "md:justify-start"], [1, "w-full", "px-4", "py-8", "sm:bg-card", "sm:w-auto", "sm:rounded-2xl", "sm:p-12", "sm:shadow", "md:flex", "md:h-full", "md:w-1/2", "md:items-center", "md:justify-end", "md:rounded-none", "md:p-16", "md:shadow-none"], [1, "mx-auto", "w-full", "max-w-80", "sm:mx-0", "sm:w-80"], [1, "w-4/5"], ["src", "images/logo/logo-azul.svg"], [1, "mt-8", "text-4xl", "font-extrabold", "leading-tight", "tracking-tight"], [1, "mt-0.5", "font-medium"], [1, "mt-8", 3, "appearance", "showIcon", "type"], [1, "mt-8", 3, "formGroup"], [4, "ngIf"], [1, "text-secondary", "mt-8", "text-md", "font-medium"], [1, "ml-1", "text-primary-500", "hover:underline", 3, "routerLink"], [1, "relative", "hidden", "h-full", "w-1/2", "flex-auto", "items-center", "justify-center", "overflow-hidden", "bg-gray-800", "p-16", "dark:border-l", "md:flex", "lg:px-28"], ["viewBox", "0 0 960 540", "width", "100%", "height", "100%", "preserveAspectRatio", "xMidYMax slice", "xmlns", "http://www.w3.org/2000/svg", 1, "absolute", "inset-0", "pointer-events-none"], ["fill", "none", "stroke", "currentColor", "stroke-width", "100", 1, "text-gray-700", "opacity-25"], ["r", "234", "cx", "196", "cy", "23"], ["r", "234", "cx", "790", "cy", "491"], ["viewBox", "0 0 220 192", "width", "220", "height", "192", "fill", "none", 1, "absolute", "-top-16", "-right-16", "text-gray-700"], ["id", "837c3e70-6c3a-44e6-8854-cc48c737b659", "x", "0", "y", "0", "width", "20", "height", "20", "patternUnits", "userSpaceOnUse"], ["x", "0", "y", "0", "width", "4", "height", "4", "fill", "currentColor"], ["width", "220", "height", "192", "fill", "url(#837c3e70-6c3a-44e6-8854-cc48c737b659)"], [1, "relative", "z-10", "w-full", "max-w-2xl"], [1, "text-7xl", "font-bold", "leading-none", "text-gray-100"], [1, "mt-6", "text-lg", "leading-6", "tracking-tight", "text-gray-400"], [1, "w-full"], ["id", "email", "matInput", "", "autocomplete", "off", 3, "formControlName"], ["mat-flat-button", "", 1, "fuse-mat-button-large", "mt-3", "w-full", 3, "click", "color", "disabled"], [3, "diameter", "mode"]], template: function AuthForgotPasswordComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "div", 4);
    \u0275\u0275element(4, "img", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 6);
    \u0275\u0275text(6, " Recuperar usuario? ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 7);
    \u0275\u0275text(8, " Ingrese la informaci\xF3n para recuperar usuario. ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, AuthForgotPasswordComponent_Conditional_9_Template, 2, 5, "fuse-alert", 8);
    \u0275\u0275elementStart(10, "form", 9, 0);
    \u0275\u0275template(12, AuthForgotPasswordComponent_ng_container_12_Template, 10, 7, "ng-container", 10);
    \u0275\u0275elementStart(13, "div", 11)(14, "span");
    \u0275\u0275text(15, "Regresar a");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "a", 12);
    \u0275\u0275text(17, "Inicio de sesi\xF3n ");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(18, "div", 13);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(19, "svg", 14)(20, "g", 15);
    \u0275\u0275element(21, "circle", 16)(22, "circle", 17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "svg", 18)(24, "defs")(25, "pattern", 19);
    \u0275\u0275element(26, "rect", 20);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(27, "rect", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(28, "div", 22)(29, "div", 23)(30, "div");
    \u0275\u0275text(31, "Bienvenido a CrediPlus");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div", 24);
    \u0275\u0275text(33, " Plataforma para gestionar pr\xE9stamos a colaboradores de manera eficiente y segura. Inicia Sesi\xF3n y accede las opciones que tenemos para ti. ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(9);
    \u0275\u0275conditional(ctx.showAlert ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx.forgotPasswordForm);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx.showResponse);
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
  MatInputModule,
  MatInput,
  MatButtonModule,
  MatButton,
  MatProgressSpinnerModule,
  MatProgressSpinner,
  RouterLink,
  NgIf
], encapsulation: 2, data: { animation: fuseAnimations } });
var AuthForgotPasswordComponent = _AuthForgotPasswordComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AuthForgotPasswordComponent, { className: "AuthForgotPasswordComponent", filePath: "src\\app\\modules\\auth\\forgot-password\\forgot-password.component.ts", lineNumber: 39 });
})();

// src/app/modules/auth/forgot-password/forgot-password.routes.ts
var forgot_password_routes_default = [
  {
    path: "",
    component: AuthForgotPasswordComponent
  }
];
export {
  forgot_password_routes_default as default
};
//# sourceMappingURL=chunk-VDF5OQ6T.js.map
