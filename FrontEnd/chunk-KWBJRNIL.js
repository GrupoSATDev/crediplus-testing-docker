import{b as p}from"./chunk-J6S3X3IJ.js";import{Nc as o,ba as e,ga as i}from"./chunk-VNCXNJPE.js";var b=(()=>{let a=class a{constructor(t,s){this._http=t,this.appSettings=s}getPagosTrabajadores(){return this._http.get(`${this.appSettings.pagoTrabajadores.url.base}/Tabla`)}getPagoTrabajadorIndividual(){return this._http.get(`${this.appSettings.pagoTrabajadores.url.base}/TablaIndividual`)}postPagosTrabajadores(t){return this._http.post(this.appSettings.pagoTrabajadores.url.base,t)}postPagoTrabajador(t){return this._http.post(`${this.appSettings.pagoTrabajadores.url.base}/Individual`,t)}getPagosTrabajador(t){return this._http.get(`${this.appSettings.pagoTrabajadores.url.base}/${t}`)}tipoPagoTrabajadores(){return this._http.get(this.appSettings.pagoTrabajadores.url.baseTipo)}};a.\u0275fac=function(s){return new(s||a)(i(o),i(p))},a.\u0275prov=e({token:a,factory:a.\u0275fac,providedIn:"root"});let r=a;return r})();export{b as a};