import {
  ɵɵdefineInjectable
} from "./chunk-WGDVSMOG.js";

// src/environments/environment.ts
var environment = {
  production: false,
  //urlApi: 'https://backend.crediplus.com.co/api/',
  urlApi: "https://api.crediplus.com.co/api/",
  //urlApi: 'https://localhost:7032/api/',
  //baseUrl: 'https://localhost:7032/api/',
  baseUrl: "https://api.crediplus.com.co/api/"
  //baseUrl: 'https://backend.crediplus.com.co/api/',
};

// src/app/core/app-config/end-points.ts
var EndPoints = class {
  /**
   * @description: Url base
   */
  static uriBase(url) {
    return environment.baseUrl + url;
  }
};

// src/app/core/app-config/app-settings-service.ts
var _AppSettingsService = class _AppSettingsService {
  constructor() {
    this.auth = {
      url: {
        base: EndPoints.uriBase("Auth/Login"),
        baseOut: EndPoints.uriBase("Auth/logout"),
        baseCheck: EndPoints.uriBase("Auth/checkSession"),
        baseRefresh: EndPoints.uriBase("Auth/refresh"),
        baseReset: EndPoints.uriBase("Auth/resetPassword"),
        baseChange: EndPoints.uriBase("Auth/ChangePassword")
      }
    };
    this.departamentos = {
      url: {
        base: EndPoints.uriBase("Departamentos")
      }
    };
    this.municipios = {
      url: {
        base: EndPoints.uriBase("Municipios/Departamento"),
        baseMunicipio: EndPoints.uriBase("Municipios")
      }
    };
    this.empresasMaestras = {
      url: {
        base: EndPoints.uriBase("EmpresaMaestras")
      }
    };
    this.empresasClientes = {
      url: {
        base: EndPoints.uriBase("SubEmpresas"),
        baseTrabajador: EndPoints.uriBase("SubEmpresas/Clientes")
      }
    };
    this.tiposEmpresas = {
      url: {
        base: EndPoints.uriBase("TipoEmpresas")
      }
    };
    this.tiposDocumentos = {
      url: {
        base: EndPoints.uriBase("TipoDocumentos")
      }
    };
    this.generos = {
      url: {
        base: EndPoints.uriBase("Generos")
      }
    };
    this.capitalInversion = {
      url: {
        base: EndPoints.uriBase("CapitalInversiones")
      }
    };
    this.solicitudesCreditos = {
      url: {
        base: EndPoints.uriBase("Solicitudes")
      }
    };
    this.tasasIntereses = {
      url: {
        base: EndPoints.uriBase("TasaIntereses")
      }
    };
    this.tiposPagos = {
      url: {
        base: EndPoints.uriBase("TipoPagos")
      }
    };
    this.empleados = {
      url: {
        base: EndPoints.uriBase("Trabajadores"),
        baseValidate: EndPoints.uriBase("Trabajadores/ValidaInfo")
      }
    };
    this.cargos = {
      url: {
        base: EndPoints.uriBase("Cargos")
      }
    };
    this.creditos = {
      url: {
        base: EndPoints.uriBase("Creditos")
      }
    };
    this.estadoSolicitudes = {
      url: {
        base: EndPoints.uriBase("EstadoSolicitudes")
      }
    };
    this.estadoCreditos = {
      url: {
        base: EndPoints.uriBase("EstadoCreditos/Creditos"),
        baseCobros: EndPoints.uriBase("EstadoCreditos/CobroTrabajadores"),
        detalleConsumo: EndPoints.uriBase("EstadoCreditos/DetalleConsumo")
      }
    };
    this.detalleConsumos = {
      url: {
        base: EndPoints.uriBase("DetalleConsumos"),
        desembolsoBase: EndPoints.uriBase("DetalleConsumos/DetalleConsumoDesembolso"),
        baseTrabajador: EndPoints.uriBase("DetalleConsumos/Trabajador"),
        aliado: EndPoints.uriBase("DetalleConsumos/AllPagoAlido"),
        cobroFijo: EndPoints.uriBase("DetalleConsumos/DetalleConsumoCobroFijo"),
        detalleDesembolso: EndPoints.uriBase("DetalleConsumos/DesembolsoAprobados"),
        detalleDesembolsoRealizado: EndPoints.uriBase("DetalleConsumos/DesembolsoRealizado"),
        desembolso: EndPoints.uriBase("DetalleConsumos/Desembolso"),
        desembolsos: EndPoints.uriBase("DetalleConsumos/Desembolsos")
      }
    };
    this.cobroTrabajadores = {
      url: {
        base: EndPoints.uriBase("CobroTrabajadores"),
        baseTabla: EndPoints.uriBase("CobroTrabajadores/Tabla"),
        baseTrabajador: EndPoints.uriBase("CobroTrabajadores/AllTrabajador"),
        baseTrabajadorIndividual: EndPoints.uriBase("CobroTrabajadores/AllTrabajadorIndividual")
      }
    };
    this.subcripciones = {
      url: {
        base: EndPoints.uriBase("Subscripciones")
      }
    };
    this.riesgos = {
      url: {
        base: EndPoints.uriBase("NivelesRiesgos")
      }
    };
    this.bancos = {
      url: {
        base: EndPoints.uriBase("Bancos")
      }
    };
    this.cuentasBancarias = {
      url: {
        base: EndPoints.uriBase("CuentasBancarias")
      }
    };
    this.tipoConsumos = {
      url: {
        base: EndPoints.uriBase("TipoConsumos")
      }
    };
    this.tipoCuentas = {
      url: {
        base: EndPoints.uriBase("TipoCuentas")
      }
    };
    this.tipoSolicitudes = {
      url: {
        base: EndPoints.uriBase("TipoSolicitudes")
      }
    };
    this.pagoAliados = {
      url: {
        base: EndPoints.uriBase("PagoAliados")
      }
    };
    this.tipoContratos = {
      url: {
        base: EndPoints.uriBase("TipoContratos")
      }
    };
    this.pagoTrabajadores = {
      url: {
        base: EndPoints.uriBase("PagoTrabajadores"),
        baseTipo: EndPoints.uriBase("TipoPagoTrabajadores")
      }
    };
    this.deduccionesLegales = {
      url: {
        base: EndPoints.uriBase("DeduccionesLegales")
      }
    };
    this.subscripciones = {
      url: {
        base: EndPoints.uriBase("Subscripciones")
      }
    };
    this.usuarios = {
      url: {
        base: EndPoints.uriBase("Usuarios")
      }
    };
    this.tipoUsuarios = {
      url: {
        base: EndPoints.uriBase("TipoUsuarios")
      }
    };
    this.roles = {
      url: {
        base: EndPoints.uriBase("Roles")
      }
    };
    this.dashboard = {
      url: {
        base: EndPoints.uriBase("Indicadores")
      }
    };
    this.cobrosFijos = {
      url: {
        base: EndPoints.uriBase("CobroFijos")
      }
    };
    this.reportes = {
      url: {
        reporteConsumo: EndPoints.uriBase("Reportes/DetalleConsumoAliado"),
        reporteDesembolso: EndPoints.uriBase("Reportes/DetalleDesembolsosRealizados"),
        reporteCobro: EndPoints.uriBase("Reportes/CobrosTrabajadores"),
        reporteSolicitudes: EndPoints.uriBase("Reportes/Solicitudes"),
        reporteDeudas: EndPoints.uriBase("Reportes/Deudas")
      }
    };
    this.cobroAliado = {
      url: {
        base: EndPoints.uriBase("CobroAliados")
      }
    };
  }
};
_AppSettingsService.\u0275fac = function AppSettingsService_Factory(t) {
  return new (t || _AppSettingsService)();
};
_AppSettingsService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AppSettingsService, factory: _AppSettingsService.\u0275fac, providedIn: "root" });
var AppSettingsService = _AppSettingsService;

export {
  environment,
  AppSettingsService
};
//# sourceMappingURL=chunk-ROMZC4L4.js.map
