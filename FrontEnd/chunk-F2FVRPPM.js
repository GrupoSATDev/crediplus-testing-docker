import {
  AesEncryptionService
} from "./chunk-4LX6KC25.js";
import {
  Router
} from "./chunk-L2WXMDPA.js";
import {
  MatDialog,
  MatDialogRef
} from "./chunk-GRFMDZQD.js";
import {
  AppSettingsService
} from "./chunk-ROMZC4L4.js";
import {
  BehaviorSubject,
  DestroyRef,
  HttpClient,
  MatButton,
  MatIcon,
  ReplaySubject,
  catchError,
  inject,
  interval,
  map,
  of,
  switchMap,
  take,
  tap,
  throwError,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-WGDVSMOG.js";
import {
  __spreadValues
} from "./chunk-AYDYM6RQ.js";

// src/app/core/auth/auth.utils.ts
var AuthUtils = class {
  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------
  /**
   * Is token expired?
   *
   * @param token
   * @param offsetSeconds
   */
  static isTokenExpired(token, offsetSeconds) {
    if (!token || token === "") {
      return true;
    }
    const date = this._getTokenExpirationDate(token);
    offsetSeconds = offsetSeconds || 0;
    if (date === null) {
      return true;
    }
    return !(date.valueOf() > (/* @__PURE__ */ new Date()).valueOf() + offsetSeconds * 1e3);
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Private methods
  // -----------------------------------------------------------------------------------------------------
  /**
   * Base64 decoder
   * Credits: https://github.com/atk
   *
   * @param str
   * @private
   */
  static _b64decode(str) {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    let output = "";
    str = String(str).replace(/=+$/, "");
    if (str.length % 4 === 1) {
      throw new Error("'atob' failed: The string to be decoded is not correctly encoded.");
    }
    for (
      let bc = 0, bs, buffer, idx = 0;
      // get next character
      buffer = str.charAt(idx++);
      // character found in table? initialize bit storage and add its ascii value;
      ~buffer && (bs = bc % 4 ? bs * 64 + buffer : buffer, // and if not first of each 4 characters,
      // convert the first 8 bits to one ascii character
      bc++ % 4) ? output += String.fromCharCode(255 & bs >> (-2 * bc & 6)) : 0
    ) {
      buffer = chars.indexOf(buffer);
    }
    return output;
  }
  /**
   * Base64 unicode decoder
   *
   * @param str
   * @private
   */
  static _b64DecodeUnicode(str) {
    return decodeURIComponent(Array.prototype.map.call(this._b64decode(str), (c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2)).join(""));
  }
  /**
   * URL Base 64 decoder
   *
   * @param str
   * @private
   */
  static _urlBase64Decode(str) {
    let output = str.replace(/-/g, "+").replace(/_/g, "/");
    switch (output.length % 4) {
      case 0: {
        break;
      }
      case 2: {
        output += "==";
        break;
      }
      case 3: {
        output += "=";
        break;
      }
      default: {
        throw Error("Illegal base64url string!");
      }
    }
    return this._b64DecodeUnicode(output);
  }
  /**
   * Decode token
   *
   * @param token
   * @private
   */
  static _decodeToken(token) {
    if (!token) {
      return null;
    }
    const parts = token.split(".");
    if (parts.length !== 3) {
      throw new Error("The inspected token doesn't appear to be a JWT. Check to make sure it has three parts and see https://jwt.io for more.");
    }
    const decoded = this._urlBase64Decode(parts[1]);
    if (!decoded) {
      throw new Error("Cannot decode the token.");
    }
    return JSON.parse(decoded);
  }
  /**
   * Get token expiration date
   *
   * @param token
   * @private
   */
  static _getTokenExpirationDate(token) {
    const decodedToken = this._decodeToken(token);
    decodedToken.iat = new Date(decodedToken.iat);
    decodedToken.iat = Math.floor(decodedToken.iat.getTime() / 1e4);
    if (!decodedToken.hasOwnProperty("exp")) {
      return null;
    }
    const date = /* @__PURE__ */ new Date(0);
    date.setUTCSeconds(decodedToken.exp);
    date.setUTCSeconds(decodedToken.exp);
    return date;
  }
  static getTokenExpirationTime(token) {
    if (!token) {
      return null;
    }
    try {
      const payload = JSON.parse(atob(token.split(".")[1]));
      if (!payload.exp) {
        return null;
      }
      return new Date(payload.exp * 1e3);
    } catch (error) {
      console.error("Error decoding token:", error);
      return null;
    }
  }
};

// src/app/core/user/user.service.ts
var _UserService = class _UserService {
  constructor() {
    this._httpClient = inject(HttpClient);
    this._user = new ReplaySubject(1);
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Accessors
  // -----------------------------------------------------------------------------------------------------
  /**
   * Setter & getter for user
   *
   * @param value
   */
  set user(value) {
    this._user.next(value);
  }
  get user$() {
    return this._user.asObservable();
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------
  /**
   * Get the current signed-in user data
   */
  get() {
    return this._httpClient.get("api/common/user").pipe(tap((user) => {
      this._user.next(user);
    }));
  }
  /**
   * Update the user
   *
   * @param user
   */
  update(user) {
    return this._httpClient.patch("api/common/user", { user }).pipe(map((response) => {
      this._user.next(response);
    }));
  }
};
_UserService.\u0275fac = function UserService_Factory(t) {
  return new (t || _UserService)();
};
_UserService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _UserService, factory: _UserService.\u0275fac, providedIn: "root" });
var UserService = _UserService;

// node_modules/jwt-decode/build/esm/index.js
var InvalidTokenError = class extends Error {
};
InvalidTokenError.prototype.name = "InvalidTokenError";
function b64DecodeUnicode(str) {
  return decodeURIComponent(atob(str).replace(/(.)/g, (m, p) => {
    let code = p.charCodeAt(0).toString(16).toUpperCase();
    if (code.length < 2) {
      code = "0" + code;
    }
    return "%" + code;
  }));
}
function base64UrlDecode(str) {
  let output = str.replace(/-/g, "+").replace(/_/g, "/");
  switch (output.length % 4) {
    case 0:
      break;
    case 2:
      output += "==";
      break;
    case 3:
      output += "=";
      break;
    default:
      throw new Error("base64 string is not of the correct length");
  }
  try {
    return b64DecodeUnicode(output);
  } catch (err) {
    return atob(output);
  }
}
function jwtDecode(token, options) {
  if (typeof token !== "string") {
    throw new InvalidTokenError("Invalid token specified: must be a string");
  }
  options || (options = {});
  const pos = options.header === true ? 0 : 1;
  const part = token.split(".")[pos];
  if (typeof part !== "string") {
    throw new InvalidTokenError(`Invalid token specified: missing part #${pos + 1}`);
  }
  let decoded;
  try {
    decoded = base64UrlDecode(part);
  } catch (e) {
    throw new InvalidTokenError(`Invalid token specified: invalid base64 for part #${pos + 1} (${e.message})`);
  }
  try {
    return JSON.parse(decoded);
  } catch (e) {
    throw new InvalidTokenError(`Invalid token specified: invalid json for part #${pos + 1} (${e.message})`);
  }
}

// src/app/pages/shared/tokenrenewaldialog/tokenrenewaldialog.component.ts
var _TokenrenewaldialogComponent = class _TokenrenewaldialogComponent {
  constructor(dialogRef) {
    this.dialogRef = dialogRef;
    this.countDown = 30;
    interval(1e3).pipe(take(30)).subscribe((val) => {
      this.countDown = 29 - val;
      if (this.countDown === 0) {
        this.dialogRef.close(false);
      }
    });
  }
  onRenew() {
    this.dialogRef.close(true);
  }
  onLogout() {
    this.dialogRef.close(false);
  }
};
_TokenrenewaldialogComponent.\u0275fac = function TokenrenewaldialogComponent_Factory(t) {
  return new (t || _TokenrenewaldialogComponent)(\u0275\u0275directiveInject(MatDialogRef));
};
_TokenrenewaldialogComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TokenrenewaldialogComponent, selectors: [["app-tokenrenewaldialog"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 17, vars: 3, consts: [[1, "relative", "flex", "h-full", "w-full", "flex-col"], [1, "flex", "flex-auto", "flex-col", "items-center", "pb-6", "sm:flex-row", "sm:items-start", "sm:pb-8"], [1, "flex", "h-10", "w-10", "flex-0", "items-center", "justify-center", "rounded-full", "sm:mr-4", "bg-blue-100", "text-blue-600", "dark:bg-blue-600", "dark:text-blue-50"], [3, "svgIcon"], [1, "flex", "flex-col", "items-center", "space-y-1", "text-center", "sm:mt-0", "sm:items-start", "sm:pr-8", "sm:text-left"], [1, "text-xl", "font-medium", "leading-6"], [1, "text-secondary"], [1, "flex", "items-center", "justify-center", "space-x-3", "bg-gray-50", "py-4", "dark:bg-black", "dark:bg-opacity-10", "sm:justify-end"], ["mat-flat-button", "", 1, "sm:w-auto", "w-full", "bg-crediblue-50", "hover:bg-crediblue-100", "text-white", "font-semibold", "py-2", "px-4", "rounded-lg", "transition", "duration-200", 3, "click", "color"], ["mat-stroked-button", "", 1, "sm:w-auto", "w-full", "bg-crediorange-100", "rounded-lg", "transition", "duration-200", "text-white", "font-semibold", 3, "click"]], template: function TokenrenewaldialogComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
    \u0275\u0275element(3, "mat-icon", 3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 4)(5, "h2", 5);
    \u0275\u0275text(6, "Tu sesi\xF3n est\xE1 por expirar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 6);
    \u0275\u0275text(8, "Tu sesi\xF3n expirar\xE1 en ");
    \u0275\u0275elementStart(9, "strong");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275text(11, " segundos.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 7)(13, "button", 8);
    \u0275\u0275listener("click", function TokenrenewaldialogComponent_Template_button_click_13_listener() {
      return ctx.onRenew();
    });
    \u0275\u0275text(14, " Extender ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "button", 9);
    \u0275\u0275listener("click", function TokenrenewaldialogComponent_Template_button_click_15_listener() {
      return ctx.onLogout();
    });
    \u0275\u0275text(16, " Cerrar sesi\xF3n ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275property("svgIcon", "heroicons_solid:question-mark-circle");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx.countDown);
    \u0275\u0275advance(3);
    \u0275\u0275property("color", "primary");
  }
}, dependencies: [
  MatButton,
  MatIcon
] });
var TokenrenewaldialogComponent = _TokenrenewaldialogComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TokenrenewaldialogComponent, { className: "TokenrenewaldialogComponent", filePath: "src\\app\\pages\\shared\\tokenrenewaldialog\\tokenrenewaldialog.component.ts", lineNumber: 20 });
})();

// src/app/core/auth/auth.service.ts
var _AuthService = class _AuthService {
  constructor() {
    this._authenticated = false;
    this._httpClient = inject(HttpClient);
    this._userService = inject(UserService);
    this._appSettings = inject(AppSettingsService);
    this.aesEncriptService = inject(AesEncryptionService);
    this.destroyedRef = inject(DestroyRef);
    this.matDialog = inject(MatDialog);
    this.router = inject(Router);
    this._tokenExpirationSubject = new BehaviorSubject(false);
    this.restoreSession();
    this.checkTokenExpiration();
  }
  restoreSession() {
    if (!this.accessToken || !this.accessRefreshToken) {
      this.signOut();
      return;
    }
    if (AuthUtils.isTokenExpired(this.accessToken)) {
      console.log("Token expirado, intentando renovar...");
      this.signInUsingToken().subscribe((isAuthenticated) => {
        if (!isAuthenticated) {
          console.log("No se pudo renovar el token, cerrando sesi\xF3n...");
          this.signOut();
        } else {
          console.log("Token renovado exitosamente.");
          this._authenticated = true;
        }
      });
    } else {
      console.log("Token v\xE1lido, restaurando sesi\xF3n...");
      this._authenticated = true;
    }
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Accessors
  // -----------------------------------------------------------------------------------------------------
  /**
   * Setter & getter for access token
   */
  set accessToken(token) {
    localStorage.setItem("accessToken", token);
  }
  set refreshToken(token) {
    localStorage.setItem("refreshToken", token);
  }
  get accessToken() {
    return localStorage.getItem("accessToken") ?? "";
  }
  get accessRefreshToken() {
    return localStorage.getItem("refreshToken") ?? "";
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------
  /**
   * Forgot password
   *
   * @param email
   */
  forgotPassword(email) {
    return this._httpClient.post(`${this._appSettings.auth.url.baseReset}?email=${email}`, {});
  }
  /**
   * Reset password
   *
   * @param password
   */
  resetPassword(form) {
    return this._httpClient.post(this._appSettings.auth.url.baseChange, form);
  }
  /**
   * Sign in
   *
   * @param credentials
   */
  signIn(credentials) {
    const form = {
      correo: credentials.correo,
      contrasena: credentials.contrasena
    };
    const encryptForm = {
      login: this.aesEncriptService.encryptObject(form)
    };
    if (this._authenticated) {
      return throwError("User is already logged in.");
    }
    return this._httpClient.post(this._appSettings.auth.url.base, encryptForm).pipe(map((response) => {
      const dataUser = {
        id: Math.random().toString(),
        name: response.data.nombre,
        email: response.data.correo,
        avatar: "images/avatars/avatar-user.png",
        status: "online"
      };
      response.tokenType = "bearer", response.user = __spreadValues({}, dataUser);
      delete response.data;
      return response;
    }), switchMap((response) => {
      this.accessToken = response.accessToken;
      this.refreshToken = response.refreshToken;
      this._authenticated = true;
      this._userService.user = response.user;
      return of(response);
    }));
  }
  /**
   * Sign in using the access token
   */
  signInUsingToken() {
    const token = this.accessToken;
    const refreshToken = this.accessRefreshToken;
    if (!token || !refreshToken) {
      this.signOut();
      return of(false);
    }
    console.log("Verificando token con API...");
    return this._httpClient.post(this._appSettings.auth.url.baseRefresh, { token, refreshToken }).pipe(catchError((error) => {
      this.signOut();
      return of(false);
    }), switchMap((response) => {
      if (response.token) {
        this.accessToken = response.token;
        this.refreshToken = response.refreshToken;
        this._authenticated = true;
        return of(true);
      }
      this.signOut();
      return of(false);
    }));
  }
  checkTokenExpiration() {
    let userInactive = true;
    const inactivityThreshold = 3e5;
    const tokenExpirationThreshold = 6e4;
    const markUserAsActive = () => {
      userInactive = false;
      setTimeout(() => {
        userInactive = true;
      }, inactivityThreshold);
    };
    const activityEvents = ["mousemove", "keydown", "scroll", "click", "touchstart"];
    activityEvents.forEach((event) => {
      window.addEventListener(event, markUserAsActive);
    });
    document.addEventListener("visibilitychange", () => {
      if (document.visibilityState === "hidden") {
        userInactive = true;
      } else {
        markUserAsActive();
      }
    });
    window.addEventListener("blur", () => {
      userInactive = true;
    });
    window.addEventListener("focus", markUserAsActive);
    interval(1e4).pipe(tap(() => {
      const token = this.accessToken;
      const refreshToken = this.accessRefreshToken;
      if (!token || !refreshToken) {
        this.signOut();
        return;
      }
      const expiresIn = AuthUtils.getTokenExpirationTime(token);
      const timeLeft = expiresIn - Date.now();
      if (timeLeft > 0 && timeLeft <= tokenExpirationThreshold) {
        if (!userInactive) {
          this.signInUsingToken().subscribe({
            next: (success) => {
              if (success) {
                console.log("Token renovado autom\xE1ticamente");
              } else {
                console.error("Error renovando el token");
                this.signOut();
              }
            },
            error: (err) => {
              console.error("Error renovando el token:", err);
              this.signOut();
            }
          });
        }
      } else if (timeLeft <= 0) {
        if (userInactive) {
          this.signOut();
        } else {
          this.signOut();
        }
      }
    })).subscribe();
  }
  openTokenRenewalDialog() {
    const dialogRef = this.matDialog.open(TokenrenewaldialogComponent, {
      width: "400px",
      disableClose: true
    });
    dialogRef.afterClosed().subscribe((renew) => {
      if (renew) {
        this.signInUsingToken().subscribe();
      } else {
        this.signOut();
        this.router.navigate(["/sign-in"]);
      }
    });
  }
  logoutSession() {
    return this._httpClient.post(this._appSettings.auth.url.baseOut, {});
  }
  /**
   * Sign out
   */
  signOut() {
    console.log("Cerrando sesi\xF3n...");
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    this._authenticated = false;
    this._userService.user = null;
    return of(true);
  }
  /**
   * Sign up
   *
   * @param user
   */
  signUp(user) {
    return this._httpClient.post("api/auth/sign-up", user);
  }
  /**
   * Unlock session
   *
   * @param credentials
   */
  unlockSession(credentials) {
    return this._httpClient.post("api/auth/unlock-session", credentials);
  }
  /**
   * Check the authentication status
   */
  check() {
    if (this._authenticated) {
      return of(true);
    }
    if (!this.accessToken) {
      return of(false);
    }
    if (AuthUtils.isTokenExpired(this.accessToken)) {
      return of(false);
    }
    return this.signInUsingToken();
  }
  decodeToken() {
    if (!this.accessToken)
      return null;
    try {
      return jwtDecode(this.accessToken);
    } catch (error) {
      console.error("Error al decodificar el token", error);
      return null;
    }
  }
  // Obtiene el rol desde el token
  getRole() {
    const decoded = this.decodeToken();
    return decoded?.["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"] || null;
  }
  // Obtiene el TipoUsuario desde el token
  getTipoUsuario() {
    const decoded = this.decodeToken();
    return decoded?.TipoUsuario || null;
  }
  // Valida si tiene un rol específico
  hasRole(role) {
    return this.getRole() === role;
  }
  // Valida si es un TipoUsuario específico
  hasTipoUsuario(tipoUsuario) {
    return this.getTipoUsuario() === tipoUsuario;
  }
};
_AuthService.\u0275fac = function AuthService_Factory(t) {
  return new (t || _AuthService)();
};
_AuthService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthService, factory: _AuthService.\u0275fac, providedIn: "root" });
var AuthService = _AuthService;

export {
  AuthUtils,
  UserService,
  AuthService
};
//# sourceMappingURL=chunk-F2FVRPPM.js.map
