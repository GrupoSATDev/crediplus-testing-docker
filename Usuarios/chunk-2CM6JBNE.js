import{b as T}from"./chunk-YW3XMNKD.js";import{p}from"./chunk-6D7RVOMY.js";import{D as g,W as d,Z as k,ba as h,h as m,ha as n,l as s,q as u}from"./chunk-T2GNEYCX.js";import{a as f}from"./chunk-NEB6MB4Y.js";var _=(()=>{let e=class e{constructor(){this._httpClient=n(p),this._user=new m(1)}set user(t){this._user.next(t)}get user$(){return this._user.asObservable()}get(){return this._httpClient.get("api/common/user").pipe(k(t=>{this._user.next(t)}))}update(t){return this._httpClient.patch("api/common/user",{user:t}).pipe(u(a=>{this._user.next(a)}))}};e.\u0275fac=function(a){return new(a||e)},e.\u0275prov=h({token:e,factory:e.\u0275fac,providedIn:"root"});let i=e;return i})();var l=class{static isTokenExpired(e,r){if(!e||e==="")return!0;let t=this._getTokenExpirationDate(e);return r=r||0,t===null?!0:!(t.valueOf()>new Date().valueOf()+r*1e3)}static _b64decode(e){let r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",t="";if(e=String(e).replace(/=+$/,""),e.length%4===1)throw new Error("'atob' failed: The string to be decoded is not correctly encoded.");for(let a=0,c,o,b=0;o=e.charAt(b++);~o&&(c=a%4?c*64+o:o,a++%4)?t+=String.fromCharCode(255&c>>(-2*a&6)):0)o=r.indexOf(o);return t}static _b64DecodeUnicode(e){return decodeURIComponent(Array.prototype.map.call(this._b64decode(e),r=>"%"+("00"+r.charCodeAt(0).toString(16)).slice(-2)).join(""))}static _urlBase64Decode(e){let r=e.replace(/-/g,"+").replace(/_/g,"/");switch(r.length%4){case 0:break;case 2:{r+="==";break}case 3:{r+="=";break}default:throw Error("Illegal base64url string!")}return this._b64DecodeUnicode(r)}static _decodeToken(e){if(!e)return null;let r=e.split(".");if(r.length!==3)throw new Error("The inspected token doesn't appear to be a JWT. Check to make sure it has three parts and see https://jwt.io for more.");let t=this._urlBase64Decode(r[1]);if(!t)throw new Error("Cannot decode the token.");return JSON.parse(t)}static _getTokenExpirationDate(e){let r=this._decodeToken(e);if(r.iat=new Date(r.iat),r.iat=Math.floor(r.iat.getTime()/1e4),!r.hasOwnProperty("exp"))return null;let t=new Date(0);return t.setUTCSeconds(r.exp),t.setUTCSeconds(r.exp),t}};var P=(()=>{let e=class e{constructor(){this._authenticated=!1,this._httpClient=n(p),this._userService=n(_),this._appSettings=n(T)}set accessToken(t){localStorage.setItem("accessToken",t)}get accessToken(){return localStorage.getItem("accessToken")??""}forgotPassword(t){return this._httpClient.post("api/auth/forgot-password",t)}resetPassword(t){return this._httpClient.post("api/auth/reset-password",t)}signIn(t){return this._httpClient.post(this._appSettings.auth.url.base,t).pipe(u(a=>{let c={id:Math.random().toString(),name:a.data.nombre,email:a.data.correo,avatar:"images/avatars/avatar-user.png",status:"online"};return a.tokenType="bearer",a.user=f({},c),delete a.data,a}),d(a=>(console.log(a),this.accessToken=a.accessToken,this._authenticated=!0,this._userService.user=a.user,s(a))))}signInUsingToken(){return this._httpClient.post("api/auth/sign-in-with-token",{accessToken:this.accessToken}).pipe(g(()=>s(!1)),d(t=>(t.accessToken&&(this.accessToken=t.accessToken),this._authenticated=!0,this._userService.user=t.user,s(!0))))}signOut(){return localStorage.removeItem("accessToken"),this._authenticated=!1,s(!0)}signUp(t){return this._httpClient.post(this._appSettings.authTrabajador.url.base,t)}unlockSession(t){return this._httpClient.post("api/auth/unlock-session",t)}check(){return this._authenticated?s(!0):this.accessToken?l.isTokenExpired(this.accessToken)?s(!1):s(!0):s(!1)}};e.\u0275fac=function(a){return new(a||e)},e.\u0275prov=h({token:e,factory:e.\u0275fac,providedIn:"root"});let i=e;return i})();export{_ as a,P as b};
