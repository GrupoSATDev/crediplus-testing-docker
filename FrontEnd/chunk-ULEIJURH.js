import {
  MatCheckboxModule
} from "./chunk-Y3J4EKDD.js";
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
import "./chunk-4LX6KC25.js";
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

// src/app/core/constant/rutasPermitidas.ts
var RoleRouteMap = {
  "Super Admin": "/pages/gestion-creditos/solicitudes",
  "Analista": "/pages/gestion-creditos/solicitudes",
  "Aliado": "/pages/gestion-creditos/detalle-consumo",
  "Desembolso": "/pages/gestion-creditos/desembolsos",
  "Auditor": "/pages/gestion-creditos/solicitudes"
};

// src/app/modules/auth/sign-in/sign-in.component.ts
var _c0 = ["signInNgForm"];
var _c1 = () => ["/forgot-password"];
function AuthSignInComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "fuse-alert", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("appearance", "outline")("showIcon", false)("type", ctx_r1.alert.type)("@shake", ctx_r1.alert.type === "error");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.alert.message, " ");
  }
}
function AuthSignInComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " El correo es requirido ");
    \u0275\u0275elementEnd();
  }
}
function AuthSignInComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " El correo es invalido! ");
    \u0275\u0275elementEnd();
  }
}
function AuthSignInComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-icon", 14);
  }
  if (rf & 2) {
    \u0275\u0275property("svgIcon", "heroicons_solid:eye");
  }
}
function AuthSignInComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-icon", 14);
  }
  if (rf & 2) {
    \u0275\u0275property("svgIcon", "heroicons_solid:eye-slash");
  }
}
function AuthSignInComponent_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, " Inciar sesi\xF3n ");
    \u0275\u0275elementEnd();
  }
}
function AuthSignInComponent_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-progress-spinner", 18);
  }
  if (rf & 2) {
    \u0275\u0275property("diameter", 24)("mode", "indeterminate");
  }
}
var _AuthSignInComponent = class _AuthSignInComponent {
  /**
   * Constructor
   */
  constructor(_activatedRoute, _authService, _formBuilder, _router) {
    this._activatedRoute = _activatedRoute;
    this._authService = _authService;
    this._formBuilder = _formBuilder;
    this._router = _router;
    this.showInstallButton = false;
    this.alert = {
      type: "success",
      message: ""
    };
    this.showAlert = false;
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------
  /**
   * On init
   */
  ngOnInit() {
    this.signInForm = this._formBuilder.group({
      correo: [
        "",
        [Validators.required, Validators.email]
      ],
      contrasena: ["", Validators.required]
    });
    window.addEventListener("beforeinstallprompt", (event) => {
      event.preventDefault();
      this.deferredPrompt = event;
      this.showInstallButton = true;
    });
  }
  installApp() {
    if (this.deferredPrompt) {
      this.deferredPrompt.prompt();
      this.deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === "accepted") {
          console.log("PWA instalada");
        } else {
          console.log("Instalaci\xF3n rechazada");
        }
        this.deferredPrompt = null;
      });
    }
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------
  /**
   * Sign in
   */
  signIn() {
    if (this.signInForm.invalid) {
      return;
    }
    this.signInForm.disable();
    this.showAlert = false;
    const form = this.signInForm.getRawValue();
    this._authService.signIn(form).subscribe(() => {
      const userRole = this._authService.getRole();
      const redirectURL = RoleRouteMap[userRole] || this._activatedRoute.snapshot.queryParamMap.get("redirectURL") || "/signed-in-redirect";
      this._router.navigateByUrl(redirectURL);
    }, (response) => {
      this.signInForm.enable();
      this.alert = {
        type: "error",
        message: response.error.errorMenssages[0]
      };
      this.showAlert = true;
    });
  }
};
_AuthSignInComponent.\u0275fac = function AuthSignInComponent_Factory(t) {
  return new (t || _AuthSignInComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(UntypedFormBuilder), \u0275\u0275directiveInject(Router));
};
_AuthSignInComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AuthSignInComponent, selectors: [["auth-sign-in"]], viewQuery: function AuthSignInComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(_c0, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.signInNgForm = _t.first);
  }
}, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 50, vars: 13, consts: [["signInNgForm", "ngForm"], ["passwordField", ""], [1, "flex", "min-w-0", "flex-auto", "flex-col", "items-center", "sm:flex-row", "sm:justify-center", "md:items-start", "md:justify-start"], [1, "w-full", "px-4", "py-8", "sm:bg-card", "sm:w-auto", "sm:rounded-2xl", "sm:p-12", "sm:shadow", "md:flex", "md:h-full", "md:w-1/2", "md:items-center", "md:justify-end", "md:rounded-none", "md:p-16", "md:shadow-none"], [1, "mx-auto", "w-full", "max-w-80", "sm:mx-0", "sm:w-80"], [1, "w-4/5"], ["src", "images/logo/logo-azul.svg"], [1, "mt-8", "text-4xl", "font-extrabold", "leading-tight", "tracking-tight"], [1, "mt-8", 3, "appearance", "showIcon", "type"], [1, "mt-8", 3, "formGroup"], [1, "w-full"], ["id", "correo", "matInput", "", 3, "formControlName"], ["id", "contrasena", "matInput", "", "type", "password", 3, "formControlName"], ["mat-icon-button", "", "type", "button", "matSuffix", "", 3, "click"], [1, "icon-size-5", 3, "svgIcon"], [1, "inline-flex", "w-full", "items-center", "justify-between"], [1, "text-md", "font-medium", "text-primary-500", "hover:underline", 3, "routerLink"], ["mat-flat-button", "", 1, "fuse-mat-button-large", "mt-6", "w-full", "bg-crediblue-50", "text-white", "font-semibold", "rounded-lg", 3, "click", "disabled"], [3, "diameter", "mode"], ["mat-flat-button", "", 1, "fuse-mat-button-large", "mt-6", "w-full", "bg-crediorange-100", "text-white", "font-semibold", "rounded-lg", 3, "click"], [1, "relative", "hidden", "h-full", "w-1/2", "flex-auto", "items-center", "justify-center", "overflow-hidden", "bg-gray-800", "p-16", "dark:border-l", "md:flex", "lg:px-28"], ["viewBox", "0 0 960 540", "width", "100%", "height", "100%", "preserveAspectRatio", "xMidYMax slice", "xmlns", "http://www.w3.org/2000/svg", 1, "absolute", "inset-0", "pointer-events-none"], ["fill", "none", "stroke", "currentColor", "stroke-width", "100", 1, "text-gray-700", "opacity-25"], ["r", "234", "cx", "196", "cy", "23"], ["r", "234", "cx", "790", "cy", "491"], ["viewBox", "0 0 220 192", "width", "220", "height", "192", "fill", "none", 1, "absolute", "-top-16", "-right-16", "text-gray-700"], ["id", "837c3e70-6c3a-44e6-8854-cc48c737b659", "x", "0", "y", "0", "width", "20", "height", "20", "patternUnits", "userSpaceOnUse"], ["x", "0", "y", "0", "width", "4", "height", "4", "fill", "currentColor"], ["width", "220", "height", "192", "fill", "url(#837c3e70-6c3a-44e6-8854-cc48c737b659)"], [1, "relative", "z-10", "w-full", "max-w-2xl"], [1, "text-7xl", "font-bold", "leading-none", "text-gray-100"], [1, "mt-6", "text-lg", "leading-6", "tracking-tight", "text-gray-400"]], template: function AuthSignInComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "div", 4)(3, "div", 5);
    \u0275\u0275element(4, "img", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 7);
    \u0275\u0275text(6, " Inicio de sesi\xF3n ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, AuthSignInComponent_Conditional_7_Template, 2, 5, "fuse-alert", 8);
    \u0275\u0275elementStart(8, "form", 9, 0)(10, "mat-form-field", 10)(11, "mat-label");
    \u0275\u0275text(12, "Correo electronico");
    \u0275\u0275elementEnd();
    \u0275\u0275element(13, "input", 11);
    \u0275\u0275template(14, AuthSignInComponent_Conditional_14_Template, 2, 0, "mat-error")(15, AuthSignInComponent_Conditional_15_Template, 2, 0, "mat-error");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "mat-form-field", 10)(17, "mat-label");
    \u0275\u0275text(18, "Contrase\xF1a");
    \u0275\u0275elementEnd();
    \u0275\u0275element(19, "input", 12, 1);
    \u0275\u0275elementStart(21, "button", 13);
    \u0275\u0275listener("click", function AuthSignInComponent_Template_button_click_21_listener() {
      \u0275\u0275restoreView(_r1);
      const passwordField_r3 = \u0275\u0275reference(20);
      return \u0275\u0275resetView(passwordField_r3.type === "password" ? passwordField_r3.type = "text" : passwordField_r3.type = "password");
    });
    \u0275\u0275template(22, AuthSignInComponent_Conditional_22_Template, 1, 1, "mat-icon", 14)(23, AuthSignInComponent_Conditional_23_Template, 1, 1, "mat-icon", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "mat-error");
    \u0275\u0275text(25, " Contrase\xF1a es invalida! ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 15)(27, "a", 16);
    \u0275\u0275text(28, "Recuperar usuario? ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "button", 17);
    \u0275\u0275listener("click", function AuthSignInComponent_Template_button_click_29_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.signIn());
    });
    \u0275\u0275template(30, AuthSignInComponent_Conditional_30_Template, 2, 0, "span")(31, AuthSignInComponent_Conditional_31_Template, 1, 2, "mat-progress-spinner", 18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "button", 19);
    \u0275\u0275listener("click", function AuthSignInComponent_Template_button_click_32_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.installApp());
    });
    \u0275\u0275text(33, " Instalar App ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(34, "div", 20);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(35, "svg", 21)(36, "g", 22);
    \u0275\u0275element(37, "circle", 23)(38, "circle", 24);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "svg", 25)(40, "defs")(41, "pattern", 26);
    \u0275\u0275element(42, "rect", 27);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(43, "rect", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(44, "div", 29)(45, "div", 30)(46, "div");
    \u0275\u0275text(47, "Bienvenido a CrediPlus");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(48, "div", 31);
    \u0275\u0275text(49, " Plataforma para gestionar pr\xE9stamos a colaboradores de manera eficiente y segura. Inicia Sesi\xF3n y accede las opciones que tenemos para ti. ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const passwordField_r3 = \u0275\u0275reference(20);
    \u0275\u0275advance(7);
    \u0275\u0275conditional(ctx.showAlert ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx.signInForm);
    \u0275\u0275advance(5);
    \u0275\u0275property("formControlName", "correo");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.signInForm.get("correo").hasError("required") ? 14 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.signInForm.get("correo").hasError("correo") ? 15 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275property("formControlName", "contrasena");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(passwordField_r3.type === "password" ? 22 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(passwordField_r3.type === "text" ? 23 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(12, _c1));
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx.signInForm.disabled);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx.signInForm.disabled ? 30 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.signInForm.disabled ? 31 : -1);
  }
}, dependencies: [
  RouterLink,
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
  MatCheckboxModule,
  MatProgressSpinnerModule,
  MatProgressSpinner
], encapsulation: 2, data: { animation: fuseAnimations } });
var AuthSignInComponent = _AuthSignInComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AuthSignInComponent, { className: "AuthSignInComponent", filePath: "src\\app\\modules\\auth\\sign-in\\sign-in.component.ts", lineNumber: 42 });
})();

// src/app/modules/auth/sign-in/sign-in.routes.ts
var sign_in_routes_default = [
  {
    path: "",
    component: AuthSignInComponent
  }
];
export {
  sign_in_routes_default as default
};
//# sourceMappingURL=chunk-ULEIJURH.js.map
