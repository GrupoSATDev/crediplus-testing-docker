import{b as p}from"./chunk-J6S3X3IJ.js";import{Nc as o,ba as e,ga as s}from"./chunk-VNCXNJPE.js";var h=(()=>{let a=class a{constructor(t,i){this._http=t,this.appSettings=i}getPagosTrabajadores(){return this._http.get(`${this.appSettings.pagoTrabajadores.url.base}/Tabla`)}getPagoTrabajadorIndividual(){return this._http.get(`${this.appSettings.pagoTrabajadores.url.base}/TablaIndividual`)}postPagosTrabajadores(t){return this._http.post(this.appSettings.pagoTrabajadores.url.base,t)}postPagoTrabajador(t){return this._http.post(`${this.appSettings.pagoTrabajadores.url.base}/Individual`,t)}getPagosTrabajador(t){return this._http.get(`${this.appSettings.pagoTrabajadores.url.base}/${t}`)}getPagosTrabajadorIndividual(t){return this._http.get(`${this.appSettings.pagoTrabajadores.url.base}/individual/${t}`)}tipoPagoTrabajadores(){return this._http.get(this.appSettings.pagoTrabajadores.url.baseTipo)}};a.\u0275fac=function(i){return new(i||a)(s(o),s(p))},a.\u0275prov=e({token:a,factory:a.\u0275fac,providedIn:"root"});let r=a;return r})();export{h as a};
