import{ba as o}from"./chunk-YBEOGPR3.js";var r={production:!0,urlApi:"https://api.crediplus.com.co/api/",baseUrl:"https://api.crediplus.com.co/api/"};var s=class{static uriBase(a){return r.baseUrl+a}};var p=(()=>{let a=class a{constructor(){this.auth={url:{base:s.uriBase("Usuarios/Login")}},this.departamentos={url:{base:s.uriBase("Departamentos")}},this.municipios={url:{base:s.uriBase("Municipios/Departamento"),baseMunicipio:s.uriBase("Municipios")}},this.empresasMaestras={url:{base:s.uriBase("EmpresaMaestras")}},this.empresasClientes={url:{base:s.uriBase("SubEmpresas"),baseTrabajador:s.uriBase("SubEmpresas/Clientes")}},this.tiposEmpresas={url:{base:s.uriBase("TipoEmpresas")}},this.tiposDocumentos={url:{base:s.uriBase("TipoDocumentos")}},this.generos={url:{base:s.uriBase("Generos")}},this.capitalInversion={url:{base:s.uriBase("CapitalInversiones")}},this.solicitudesCreditos={url:{base:s.uriBase("Solicitudes")}},this.tasasIntereses={url:{base:s.uriBase("TasaIntereses")}},this.tiposPagos={url:{base:s.uriBase("TipoPagos")}},this.empleados={url:{base:s.uriBase("Trabajadores"),baseValidate:s.uriBase("Trabajadores/ValidaInfo")}},this.cargos={url:{base:s.uriBase("Cargos")}},this.creditos={url:{base:s.uriBase("Creditos")}},this.estadoCreditos={url:{base:s.uriBase("EstadoCreditos/Creditos"),baseCobros:s.uriBase("EstadoCreditos/CobroTrabajadores"),detalleConsumo:s.uriBase("EstadoCreditos/DetalleConsumo")}},this.detalleConsumos={url:{base:s.uriBase("DetalleConsumos"),desembolsoBase:s.uriBase("DetalleConsumos/DetalleConsumoDesembolso"),baseTrabajador:s.uriBase("DetalleConsumos/Trabajador"),aliado:s.uriBase("DetalleConsumos/AllPagoAlido"),cobroFijo:s.uriBase("DetalleConsumos/DetalleConsumoCobroFijo"),detalleDesembolso:s.uriBase("DetalleConsumos/DesembolsoAprobados"),detalleDesembolsoRealizado:s.uriBase("DetalleConsumos/DesembolsoRealizado"),desembolso:s.uriBase("DetalleConsumos/Desembolso")}},this.cobroTrabajadores={url:{base:s.uriBase("CobroTrabajadores"),baseTabla:s.uriBase("CobroTrabajadores/Tabla"),baseTrabajador:s.uriBase("CobroTrabajadores/AllTrabajador"),baseTrabajadorIndividual:s.uriBase("CobroTrabajadores/AllTrabajadorIndividual")}},this.subcripciones={url:{base:s.uriBase("Subscripciones")}},this.riesgos={url:{base:s.uriBase("NivelesRiesgos")}},this.bancos={url:{base:s.uriBase("Bancos")}},this.cuentasBancarias={url:{base:s.uriBase("CuentasBancarias")}},this.tipoConsumos={url:{base:s.uriBase("TipoConsumos")}},this.tipoCuentas={url:{base:s.uriBase("TipoCuentas")}},this.tipoSolicitudes={url:{base:s.uriBase("TipoSolicitudes")}},this.pagoAliados={url:{base:s.uriBase("PagoAliados")}},this.tipoContratos={url:{base:s.uriBase("TipoContratos")}},this.pagoTrabajadores={url:{base:s.uriBase("PagoTrabajadores"),baseTipo:s.uriBase("TipoPagoTrabajadores")}},this.deduccionesLegales={url:{base:s.uriBase("DeduccionesLegales")}},this.subscripciones={url:{base:s.uriBase("Subscripciones")}},this.usuarios={url:{base:s.uriBase("Usuarios")}},this.tipoUsuarios={url:{base:s.uriBase("TipoUsuarios")}},this.roles={url:{base:s.uriBase("Roles")}},this.dashboard={url:{base:s.uriBase("Indicadores")}},this.cobrosFijos={url:{base:s.uriBase("CobroFijos")}},this.reportes={url:{reporteConsumo:s.uriBase("Reportes/DetalleConsumoAliado")}},this.cobroAliado={url:{base:s.uriBase("CobroAliados")}}}};a.\u0275fac=function(i){return new(i||a)},a.\u0275prov=o({token:a,factory:a.\u0275fac,providedIn:"root"});let e=a;return e})();export{r as a,p as b};
