import{b as p}from"./chunk-J6S3X3IJ.js";import{Nc as o,ba as s,ga as i}from"./chunk-VNCXNJPE.js";var b=(()=>{let r=class r{constructor(t,e){this._http=t,this.appSettings=e}getPagosTrabajadores(t){return this._http.get(`${this.appSettings.pagoTrabajadores.url.base}/Tabla?IdEstadoCobroPago=${t}`)}getPagoTrabajadorIndividual(t){return this._http.get(`${this.appSettings.pagoTrabajadores.url.base}/TablaIndividual?IdEstadoCobroPago=${t}`)}postPagosTrabajadores(t){return this._http.post(this.appSettings.pagoTrabajadores.url.base,t)}postPagoTrabajador(t){return this._http.post(`${this.appSettings.pagoTrabajadores.url.base}/Individual`,t)}getPagosTrabajador(t){return this._http.get(`${this.appSettings.pagoTrabajadores.url.base}/${t}`)}getPagosTrabajadorIndividual(t){return this._http.get(`${this.appSettings.pagoTrabajadores.url.base}/individual/${t}`)}tipoPagoTrabajadores(){return this._http.get(this.appSettings.pagoTrabajadores.url.baseTipo)}putPagoTrabajadorIndividual(t){let e=t.id;return delete t.id,this._http.put(`${this.appSettings.pagoTrabajadores.url.base}/${e}`,t)}};r.\u0275fac=function(e){return new(e||r)(i(o),i(p))},r.\u0275prov=s({token:r,factory:r.\u0275fac,providedIn:"root"});let a=r;return a})();var n=function(a){return a.PENDIENTES="e626ea69-e995-4462-be9a-705326114702",a.PAGADOS="e626ea69-e995-4462-be9a-705326114791",a}(n||{});export{b as a,n as b};
