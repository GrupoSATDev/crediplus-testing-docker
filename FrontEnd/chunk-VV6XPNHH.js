import{b as n}from"./chunk-J6S3X3IJ.js";import{Nc as p,ba as a,ga as r}from"./chunk-VNCXNJPE.js";var u=(()=>{let e=class e{constructor(t,s){this._http=t,this.appSettingService=s}getTass(){return this._http.get(this.appSettingService.tasasIntereses.url.base)}getTasasParametros(t){return this._http.get(`${this.appSettingService.tasasIntereses.url.base}/${t}`)}postTasas(t){return delete t.id,this._http.post(this.appSettingService.tasasIntereses.url.base,t)}putTasas(t){let s=t.id;return delete t.id,this._http.put(`${this.appSettingService.tasasIntereses.url.base}/${s}`,t)}};e.\u0275fac=function(s){return new(s||e)(r(p),r(n))},e.\u0275prov=a({token:e,factory:e.\u0275fac,providedIn:"root"});let i=e;return i})();export{u as a};
