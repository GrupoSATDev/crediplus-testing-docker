import {
  ErrorHandlerService
} from "./chunk-LOA36BZQ.js";
import {
  GenerosService
} from "./chunk-24H3OWIV.js";
import {
  EmpleadosService
} from "./chunk-WT4TBEYC.js";
import {
  BancosService
} from "./chunk-ZU5PKA56.js";
import {
  TipoCuentasService
} from "./chunk-HEWZPKYP.js";
import {
  EmpresasClientesService
} from "./chunk-Z3FK2VK2.js";
import {
  TiposDocumentosService
} from "./chunk-3HAPDTN7.js";
import {
  MatDatepicker,
  MatDatepickerInput,
  MatDatepickerToggle
} from "./chunk-AGZF7KUE.js";
import {
  takeUntilDestroyed
} from "./chunk-GTAQN4AQ.js";
import {
  DateAdapterService
} from "./chunk-K5K55XKD.js";
import {
  NgxMaskDirective,
  provideNgxMask
} from "./chunk-MZRCXYW5.js";
import {
  LocacionService
} from "./chunk-EP2TKH7N.js";
import {
  Estados
} from "./chunk-NSUZEV35.js";
import {
  CustomTableComponent
} from "./chunk-ZB3PSQQS.js";
import {
  ToastAlertsService
} from "./chunk-N5WAY7KO.js";
import {
  EstadosDatosService
} from "./chunk-5JAUKKTX.js";
import {
  MatSelect
} from "./chunk-CZDVBWDU.js";
import {
  MatSlideToggle
} from "./chunk-ITBHXC67.js";
import {
  SwalService
} from "./chunk-WCR4YL2S.js";
import "./chunk-NACP6IOB.js";
import {
  FuseConfirmationService,
  guardar
} from "./chunk-HUKVMAZY.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  MatFormField,
  MatInput,
  MatLabel,
  MatSuffix,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  ɵNgNoValidate
} from "./chunk-IZMZQUCC.js";
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogClose,
  MatDialogRef
} from "./chunk-GRFMDZQD.js";
import "./chunk-74CJHXHU.js";
import {
  AppSettingsService
} from "./chunk-ROMZC4L4.js";
import {
  AsyncPipe,
  CommonModule,
  Component,
  DateAdapter,
  DatePipe,
  DestroyRef,
  Directive,
  HttpClient,
  Input,
  MAT_DATE_LOCALE,
  MatButton,
  MatIcon,
  MatOption,
  NgForOf,
  NgIf,
  NgModule,
  NgStyle,
  ViewContainerRef,
  inject,
  isDevMode,
  map,
  setClassMetadata,
  tap,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-WGDVSMOG.js";
import {
  __async,
  __commonJS,
  __objRest,
  __spreadValues,
  __toESM
} from "./chunk-AYDYM6RQ.js";

// node_modules/qrcode/lib/can-promise.js
var require_can_promise = __commonJS({
  "node_modules/qrcode/lib/can-promise.js"(exports, module) {
    module.exports = function() {
      return typeof Promise === "function" && Promise.prototype && Promise.prototype.then;
    };
  }
});

// node_modules/qrcode/lib/core/utils.js
var require_utils = __commonJS({
  "node_modules/qrcode/lib/core/utils.js"(exports) {
    var toSJISFunction;
    var CODEWORDS_COUNT = [
      0,
      // Not used
      26,
      44,
      70,
      100,
      134,
      172,
      196,
      242,
      292,
      346,
      404,
      466,
      532,
      581,
      655,
      733,
      815,
      901,
      991,
      1085,
      1156,
      1258,
      1364,
      1474,
      1588,
      1706,
      1828,
      1921,
      2051,
      2185,
      2323,
      2465,
      2611,
      2761,
      2876,
      3034,
      3196,
      3362,
      3532,
      3706
    ];
    exports.getSymbolSize = function getSymbolSize(version) {
      if (!version) throw new Error('"version" cannot be null or undefined');
      if (version < 1 || version > 40) throw new Error('"version" should be in range from 1 to 40');
      return version * 4 + 17;
    };
    exports.getSymbolTotalCodewords = function getSymbolTotalCodewords(version) {
      return CODEWORDS_COUNT[version];
    };
    exports.getBCHDigit = function(data) {
      let digit = 0;
      while (data !== 0) {
        digit++;
        data >>>= 1;
      }
      return digit;
    };
    exports.setToSJISFunction = function setToSJISFunction(f) {
      if (typeof f !== "function") {
        throw new Error('"toSJISFunc" is not a valid function.');
      }
      toSJISFunction = f;
    };
    exports.isKanjiModeEnabled = function() {
      return typeof toSJISFunction !== "undefined";
    };
    exports.toSJIS = function toSJIS(kanji) {
      return toSJISFunction(kanji);
    };
  }
});

// node_modules/qrcode/lib/core/error-correction-level.js
var require_error_correction_level = __commonJS({
  "node_modules/qrcode/lib/core/error-correction-level.js"(exports) {
    exports.L = { bit: 1 };
    exports.M = { bit: 0 };
    exports.Q = { bit: 3 };
    exports.H = { bit: 2 };
    function fromString(string) {
      if (typeof string !== "string") {
        throw new Error("Param is not a string");
      }
      const lcStr = string.toLowerCase();
      switch (lcStr) {
        case "l":
        case "low":
          return exports.L;
        case "m":
        case "medium":
          return exports.M;
        case "q":
        case "quartile":
          return exports.Q;
        case "h":
        case "high":
          return exports.H;
        default:
          throw new Error("Unknown EC Level: " + string);
      }
    }
    exports.isValid = function isValid(level) {
      return level && typeof level.bit !== "undefined" && level.bit >= 0 && level.bit < 4;
    };
    exports.from = function from(value, defaultValue) {
      if (exports.isValid(value)) {
        return value;
      }
      try {
        return fromString(value);
      } catch (e) {
        return defaultValue;
      }
    };
  }
});

// node_modules/qrcode/lib/core/bit-buffer.js
var require_bit_buffer = __commonJS({
  "node_modules/qrcode/lib/core/bit-buffer.js"(exports, module) {
    function BitBuffer() {
      this.buffer = [];
      this.length = 0;
    }
    BitBuffer.prototype = {
      get: function(index) {
        const bufIndex = Math.floor(index / 8);
        return (this.buffer[bufIndex] >>> 7 - index % 8 & 1) === 1;
      },
      put: function(num, length) {
        for (let i = 0; i < length; i++) {
          this.putBit((num >>> length - i - 1 & 1) === 1);
        }
      },
      getLengthInBits: function() {
        return this.length;
      },
      putBit: function(bit) {
        const bufIndex = Math.floor(this.length / 8);
        if (this.buffer.length <= bufIndex) {
          this.buffer.push(0);
        }
        if (bit) {
          this.buffer[bufIndex] |= 128 >>> this.length % 8;
        }
        this.length++;
      }
    };
    module.exports = BitBuffer;
  }
});

// node_modules/qrcode/lib/core/bit-matrix.js
var require_bit_matrix = __commonJS({
  "node_modules/qrcode/lib/core/bit-matrix.js"(exports, module) {
    function BitMatrix(size) {
      if (!size || size < 1) {
        throw new Error("BitMatrix size must be defined and greater than 0");
      }
      this.size = size;
      this.data = new Uint8Array(size * size);
      this.reservedBit = new Uint8Array(size * size);
    }
    BitMatrix.prototype.set = function(row, col, value, reserved) {
      const index = row * this.size + col;
      this.data[index] = value;
      if (reserved) this.reservedBit[index] = true;
    };
    BitMatrix.prototype.get = function(row, col) {
      return this.data[row * this.size + col];
    };
    BitMatrix.prototype.xor = function(row, col, value) {
      this.data[row * this.size + col] ^= value;
    };
    BitMatrix.prototype.isReserved = function(row, col) {
      return this.reservedBit[row * this.size + col];
    };
    module.exports = BitMatrix;
  }
});

// node_modules/qrcode/lib/core/alignment-pattern.js
var require_alignment_pattern = __commonJS({
  "node_modules/qrcode/lib/core/alignment-pattern.js"(exports) {
    var getSymbolSize = require_utils().getSymbolSize;
    exports.getRowColCoords = function getRowColCoords(version) {
      if (version === 1) return [];
      const posCount = Math.floor(version / 7) + 2;
      const size = getSymbolSize(version);
      const intervals = size === 145 ? 26 : Math.ceil((size - 13) / (2 * posCount - 2)) * 2;
      const positions = [size - 7];
      for (let i = 1; i < posCount - 1; i++) {
        positions[i] = positions[i - 1] - intervals;
      }
      positions.push(6);
      return positions.reverse();
    };
    exports.getPositions = function getPositions(version) {
      const coords = [];
      const pos = exports.getRowColCoords(version);
      const posLength = pos.length;
      for (let i = 0; i < posLength; i++) {
        for (let j = 0; j < posLength; j++) {
          if (i === 0 && j === 0 || // top-left
          i === 0 && j === posLength - 1 || // bottom-left
          i === posLength - 1 && j === 0) {
            continue;
          }
          coords.push([pos[i], pos[j]]);
        }
      }
      return coords;
    };
  }
});

// node_modules/qrcode/lib/core/finder-pattern.js
var require_finder_pattern = __commonJS({
  "node_modules/qrcode/lib/core/finder-pattern.js"(exports) {
    var getSymbolSize = require_utils().getSymbolSize;
    var FINDER_PATTERN_SIZE = 7;
    exports.getPositions = function getPositions(version) {
      const size = getSymbolSize(version);
      return [
        // top-left
        [0, 0],
        // top-right
        [size - FINDER_PATTERN_SIZE, 0],
        // bottom-left
        [0, size - FINDER_PATTERN_SIZE]
      ];
    };
  }
});

// node_modules/qrcode/lib/core/mask-pattern.js
var require_mask_pattern = __commonJS({
  "node_modules/qrcode/lib/core/mask-pattern.js"(exports) {
    exports.Patterns = {
      PATTERN000: 0,
      PATTERN001: 1,
      PATTERN010: 2,
      PATTERN011: 3,
      PATTERN100: 4,
      PATTERN101: 5,
      PATTERN110: 6,
      PATTERN111: 7
    };
    var PenaltyScores = {
      N1: 3,
      N2: 3,
      N3: 40,
      N4: 10
    };
    exports.isValid = function isValid(mask) {
      return mask != null && mask !== "" && !isNaN(mask) && mask >= 0 && mask <= 7;
    };
    exports.from = function from(value) {
      return exports.isValid(value) ? parseInt(value, 10) : void 0;
    };
    exports.getPenaltyN1 = function getPenaltyN1(data) {
      const size = data.size;
      let points = 0;
      let sameCountCol = 0;
      let sameCountRow = 0;
      let lastCol = null;
      let lastRow = null;
      for (let row = 0; row < size; row++) {
        sameCountCol = sameCountRow = 0;
        lastCol = lastRow = null;
        for (let col = 0; col < size; col++) {
          let module2 = data.get(row, col);
          if (module2 === lastCol) {
            sameCountCol++;
          } else {
            if (sameCountCol >= 5) points += PenaltyScores.N1 + (sameCountCol - 5);
            lastCol = module2;
            sameCountCol = 1;
          }
          module2 = data.get(col, row);
          if (module2 === lastRow) {
            sameCountRow++;
          } else {
            if (sameCountRow >= 5) points += PenaltyScores.N1 + (sameCountRow - 5);
            lastRow = module2;
            sameCountRow = 1;
          }
        }
        if (sameCountCol >= 5) points += PenaltyScores.N1 + (sameCountCol - 5);
        if (sameCountRow >= 5) points += PenaltyScores.N1 + (sameCountRow - 5);
      }
      return points;
    };
    exports.getPenaltyN2 = function getPenaltyN2(data) {
      const size = data.size;
      let points = 0;
      for (let row = 0; row < size - 1; row++) {
        for (let col = 0; col < size - 1; col++) {
          const last = data.get(row, col) + data.get(row, col + 1) + data.get(row + 1, col) + data.get(row + 1, col + 1);
          if (last === 4 || last === 0) points++;
        }
      }
      return points * PenaltyScores.N2;
    };
    exports.getPenaltyN3 = function getPenaltyN3(data) {
      const size = data.size;
      let points = 0;
      let bitsCol = 0;
      let bitsRow = 0;
      for (let row = 0; row < size; row++) {
        bitsCol = bitsRow = 0;
        for (let col = 0; col < size; col++) {
          bitsCol = bitsCol << 1 & 2047 | data.get(row, col);
          if (col >= 10 && (bitsCol === 1488 || bitsCol === 93)) points++;
          bitsRow = bitsRow << 1 & 2047 | data.get(col, row);
          if (col >= 10 && (bitsRow === 1488 || bitsRow === 93)) points++;
        }
      }
      return points * PenaltyScores.N3;
    };
    exports.getPenaltyN4 = function getPenaltyN4(data) {
      let darkCount = 0;
      const modulesCount = data.data.length;
      for (let i = 0; i < modulesCount; i++) darkCount += data.data[i];
      const k = Math.abs(Math.ceil(darkCount * 100 / modulesCount / 5) - 10);
      return k * PenaltyScores.N4;
    };
    function getMaskAt(maskPattern, i, j) {
      switch (maskPattern) {
        case exports.Patterns.PATTERN000:
          return (i + j) % 2 === 0;
        case exports.Patterns.PATTERN001:
          return i % 2 === 0;
        case exports.Patterns.PATTERN010:
          return j % 3 === 0;
        case exports.Patterns.PATTERN011:
          return (i + j) % 3 === 0;
        case exports.Patterns.PATTERN100:
          return (Math.floor(i / 2) + Math.floor(j / 3)) % 2 === 0;
        case exports.Patterns.PATTERN101:
          return i * j % 2 + i * j % 3 === 0;
        case exports.Patterns.PATTERN110:
          return (i * j % 2 + i * j % 3) % 2 === 0;
        case exports.Patterns.PATTERN111:
          return (i * j % 3 + (i + j) % 2) % 2 === 0;
        default:
          throw new Error("bad maskPattern:" + maskPattern);
      }
    }
    exports.applyMask = function applyMask(pattern, data) {
      const size = data.size;
      for (let col = 0; col < size; col++) {
        for (let row = 0; row < size; row++) {
          if (data.isReserved(row, col)) continue;
          data.xor(row, col, getMaskAt(pattern, row, col));
        }
      }
    };
    exports.getBestMask = function getBestMask(data, setupFormatFunc) {
      const numPatterns = Object.keys(exports.Patterns).length;
      let bestPattern = 0;
      let lowerPenalty = Infinity;
      for (let p = 0; p < numPatterns; p++) {
        setupFormatFunc(p);
        exports.applyMask(p, data);
        const penalty = exports.getPenaltyN1(data) + exports.getPenaltyN2(data) + exports.getPenaltyN3(data) + exports.getPenaltyN4(data);
        exports.applyMask(p, data);
        if (penalty < lowerPenalty) {
          lowerPenalty = penalty;
          bestPattern = p;
        }
      }
      return bestPattern;
    };
  }
});

// node_modules/qrcode/lib/core/error-correction-code.js
var require_error_correction_code = __commonJS({
  "node_modules/qrcode/lib/core/error-correction-code.js"(exports) {
    var ECLevel = require_error_correction_level();
    var EC_BLOCKS_TABLE = [
      // L  M  Q  H
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      2,
      2,
      1,
      2,
      2,
      4,
      1,
      2,
      4,
      4,
      2,
      4,
      4,
      4,
      2,
      4,
      6,
      5,
      2,
      4,
      6,
      6,
      2,
      5,
      8,
      8,
      4,
      5,
      8,
      8,
      4,
      5,
      8,
      11,
      4,
      8,
      10,
      11,
      4,
      9,
      12,
      16,
      4,
      9,
      16,
      16,
      6,
      10,
      12,
      18,
      6,
      10,
      17,
      16,
      6,
      11,
      16,
      19,
      6,
      13,
      18,
      21,
      7,
      14,
      21,
      25,
      8,
      16,
      20,
      25,
      8,
      17,
      23,
      25,
      9,
      17,
      23,
      34,
      9,
      18,
      25,
      30,
      10,
      20,
      27,
      32,
      12,
      21,
      29,
      35,
      12,
      23,
      34,
      37,
      12,
      25,
      34,
      40,
      13,
      26,
      35,
      42,
      14,
      28,
      38,
      45,
      15,
      29,
      40,
      48,
      16,
      31,
      43,
      51,
      17,
      33,
      45,
      54,
      18,
      35,
      48,
      57,
      19,
      37,
      51,
      60,
      19,
      38,
      53,
      63,
      20,
      40,
      56,
      66,
      21,
      43,
      59,
      70,
      22,
      45,
      62,
      74,
      24,
      47,
      65,
      77,
      25,
      49,
      68,
      81
    ];
    var EC_CODEWORDS_TABLE = [
      // L  M  Q  H
      7,
      10,
      13,
      17,
      10,
      16,
      22,
      28,
      15,
      26,
      36,
      44,
      20,
      36,
      52,
      64,
      26,
      48,
      72,
      88,
      36,
      64,
      96,
      112,
      40,
      72,
      108,
      130,
      48,
      88,
      132,
      156,
      60,
      110,
      160,
      192,
      72,
      130,
      192,
      224,
      80,
      150,
      224,
      264,
      96,
      176,
      260,
      308,
      104,
      198,
      288,
      352,
      120,
      216,
      320,
      384,
      132,
      240,
      360,
      432,
      144,
      280,
      408,
      480,
      168,
      308,
      448,
      532,
      180,
      338,
      504,
      588,
      196,
      364,
      546,
      650,
      224,
      416,
      600,
      700,
      224,
      442,
      644,
      750,
      252,
      476,
      690,
      816,
      270,
      504,
      750,
      900,
      300,
      560,
      810,
      960,
      312,
      588,
      870,
      1050,
      336,
      644,
      952,
      1110,
      360,
      700,
      1020,
      1200,
      390,
      728,
      1050,
      1260,
      420,
      784,
      1140,
      1350,
      450,
      812,
      1200,
      1440,
      480,
      868,
      1290,
      1530,
      510,
      924,
      1350,
      1620,
      540,
      980,
      1440,
      1710,
      570,
      1036,
      1530,
      1800,
      570,
      1064,
      1590,
      1890,
      600,
      1120,
      1680,
      1980,
      630,
      1204,
      1770,
      2100,
      660,
      1260,
      1860,
      2220,
      720,
      1316,
      1950,
      2310,
      750,
      1372,
      2040,
      2430
    ];
    exports.getBlocksCount = function getBlocksCount(version, errorCorrectionLevel) {
      switch (errorCorrectionLevel) {
        case ECLevel.L:
          return EC_BLOCKS_TABLE[(version - 1) * 4 + 0];
        case ECLevel.M:
          return EC_BLOCKS_TABLE[(version - 1) * 4 + 1];
        case ECLevel.Q:
          return EC_BLOCKS_TABLE[(version - 1) * 4 + 2];
        case ECLevel.H:
          return EC_BLOCKS_TABLE[(version - 1) * 4 + 3];
        default:
          return void 0;
      }
    };
    exports.getTotalCodewordsCount = function getTotalCodewordsCount(version, errorCorrectionLevel) {
      switch (errorCorrectionLevel) {
        case ECLevel.L:
          return EC_CODEWORDS_TABLE[(version - 1) * 4 + 0];
        case ECLevel.M:
          return EC_CODEWORDS_TABLE[(version - 1) * 4 + 1];
        case ECLevel.Q:
          return EC_CODEWORDS_TABLE[(version - 1) * 4 + 2];
        case ECLevel.H:
          return EC_CODEWORDS_TABLE[(version - 1) * 4 + 3];
        default:
          return void 0;
      }
    };
  }
});

// node_modules/qrcode/lib/core/galois-field.js
var require_galois_field = __commonJS({
  "node_modules/qrcode/lib/core/galois-field.js"(exports) {
    var EXP_TABLE = new Uint8Array(512);
    var LOG_TABLE = new Uint8Array(256);
    (function initTables() {
      let x = 1;
      for (let i = 0; i < 255; i++) {
        EXP_TABLE[i] = x;
        LOG_TABLE[x] = i;
        x <<= 1;
        if (x & 256) {
          x ^= 285;
        }
      }
      for (let i = 255; i < 512; i++) {
        EXP_TABLE[i] = EXP_TABLE[i - 255];
      }
    })();
    exports.log = function log(n) {
      if (n < 1) throw new Error("log(" + n + ")");
      return LOG_TABLE[n];
    };
    exports.exp = function exp(n) {
      return EXP_TABLE[n];
    };
    exports.mul = function mul(x, y) {
      if (x === 0 || y === 0) return 0;
      return EXP_TABLE[LOG_TABLE[x] + LOG_TABLE[y]];
    };
  }
});

// node_modules/qrcode/lib/core/polynomial.js
var require_polynomial = __commonJS({
  "node_modules/qrcode/lib/core/polynomial.js"(exports) {
    var GF = require_galois_field();
    exports.mul = function mul(p1, p2) {
      const coeff = new Uint8Array(p1.length + p2.length - 1);
      for (let i = 0; i < p1.length; i++) {
        for (let j = 0; j < p2.length; j++) {
          coeff[i + j] ^= GF.mul(p1[i], p2[j]);
        }
      }
      return coeff;
    };
    exports.mod = function mod(divident, divisor) {
      let result = new Uint8Array(divident);
      while (result.length - divisor.length >= 0) {
        const coeff = result[0];
        for (let i = 0; i < divisor.length; i++) {
          result[i] ^= GF.mul(divisor[i], coeff);
        }
        let offset = 0;
        while (offset < result.length && result[offset] === 0) offset++;
        result = result.slice(offset);
      }
      return result;
    };
    exports.generateECPolynomial = function generateECPolynomial(degree) {
      let poly = new Uint8Array([1]);
      for (let i = 0; i < degree; i++) {
        poly = exports.mul(poly, new Uint8Array([1, GF.exp(i)]));
      }
      return poly;
    };
  }
});

// node_modules/qrcode/lib/core/reed-solomon-encoder.js
var require_reed_solomon_encoder = __commonJS({
  "node_modules/qrcode/lib/core/reed-solomon-encoder.js"(exports, module) {
    var Polynomial = require_polynomial();
    function ReedSolomonEncoder(degree) {
      this.genPoly = void 0;
      this.degree = degree;
      if (this.degree) this.initialize(this.degree);
    }
    ReedSolomonEncoder.prototype.initialize = function initialize(degree) {
      this.degree = degree;
      this.genPoly = Polynomial.generateECPolynomial(this.degree);
    };
    ReedSolomonEncoder.prototype.encode = function encode(data) {
      if (!this.genPoly) {
        throw new Error("Encoder not initialized");
      }
      const paddedData = new Uint8Array(data.length + this.degree);
      paddedData.set(data);
      const remainder = Polynomial.mod(paddedData, this.genPoly);
      const start = this.degree - remainder.length;
      if (start > 0) {
        const buff = new Uint8Array(this.degree);
        buff.set(remainder, start);
        return buff;
      }
      return remainder;
    };
    module.exports = ReedSolomonEncoder;
  }
});

// node_modules/qrcode/lib/core/version-check.js
var require_version_check = __commonJS({
  "node_modules/qrcode/lib/core/version-check.js"(exports) {
    exports.isValid = function isValid(version) {
      return !isNaN(version) && version >= 1 && version <= 40;
    };
  }
});

// node_modules/qrcode/lib/core/regex.js
var require_regex = __commonJS({
  "node_modules/qrcode/lib/core/regex.js"(exports) {
    var numeric = "[0-9]+";
    var alphanumeric = "[A-Z $%*+\\-./:]+";
    var kanji = "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";
    kanji = kanji.replace(/u/g, "\\u");
    var byte = "(?:(?![A-Z0-9 $%*+\\-./:]|" + kanji + ")(?:.|[\r\n]))+";
    exports.KANJI = new RegExp(kanji, "g");
    exports.BYTE_KANJI = new RegExp("[^A-Z0-9 $%*+\\-./:]+", "g");
    exports.BYTE = new RegExp(byte, "g");
    exports.NUMERIC = new RegExp(numeric, "g");
    exports.ALPHANUMERIC = new RegExp(alphanumeric, "g");
    var TEST_KANJI = new RegExp("^" + kanji + "$");
    var TEST_NUMERIC = new RegExp("^" + numeric + "$");
    var TEST_ALPHANUMERIC = new RegExp("^[A-Z0-9 $%*+\\-./:]+$");
    exports.testKanji = function testKanji(str) {
      return TEST_KANJI.test(str);
    };
    exports.testNumeric = function testNumeric(str) {
      return TEST_NUMERIC.test(str);
    };
    exports.testAlphanumeric = function testAlphanumeric(str) {
      return TEST_ALPHANUMERIC.test(str);
    };
  }
});

// node_modules/qrcode/lib/core/mode.js
var require_mode = __commonJS({
  "node_modules/qrcode/lib/core/mode.js"(exports) {
    var VersionCheck = require_version_check();
    var Regex = require_regex();
    exports.NUMERIC = {
      id: "Numeric",
      bit: 1 << 0,
      ccBits: [10, 12, 14]
    };
    exports.ALPHANUMERIC = {
      id: "Alphanumeric",
      bit: 1 << 1,
      ccBits: [9, 11, 13]
    };
    exports.BYTE = {
      id: "Byte",
      bit: 1 << 2,
      ccBits: [8, 16, 16]
    };
    exports.KANJI = {
      id: "Kanji",
      bit: 1 << 3,
      ccBits: [8, 10, 12]
    };
    exports.MIXED = {
      bit: -1
    };
    exports.getCharCountIndicator = function getCharCountIndicator(mode, version) {
      if (!mode.ccBits) throw new Error("Invalid mode: " + mode);
      if (!VersionCheck.isValid(version)) {
        throw new Error("Invalid version: " + version);
      }
      if (version >= 1 && version < 10) return mode.ccBits[0];
      else if (version < 27) return mode.ccBits[1];
      return mode.ccBits[2];
    };
    exports.getBestModeForData = function getBestModeForData(dataStr) {
      if (Regex.testNumeric(dataStr)) return exports.NUMERIC;
      else if (Regex.testAlphanumeric(dataStr)) return exports.ALPHANUMERIC;
      else if (Regex.testKanji(dataStr)) return exports.KANJI;
      else return exports.BYTE;
    };
    exports.toString = function toString(mode) {
      if (mode && mode.id) return mode.id;
      throw new Error("Invalid mode");
    };
    exports.isValid = function isValid(mode) {
      return mode && mode.bit && mode.ccBits;
    };
    function fromString(string) {
      if (typeof string !== "string") {
        throw new Error("Param is not a string");
      }
      const lcStr = string.toLowerCase();
      switch (lcStr) {
        case "numeric":
          return exports.NUMERIC;
        case "alphanumeric":
          return exports.ALPHANUMERIC;
        case "kanji":
          return exports.KANJI;
        case "byte":
          return exports.BYTE;
        default:
          throw new Error("Unknown mode: " + string);
      }
    }
    exports.from = function from(value, defaultValue) {
      if (exports.isValid(value)) {
        return value;
      }
      try {
        return fromString(value);
      } catch (e) {
        return defaultValue;
      }
    };
  }
});

// node_modules/qrcode/lib/core/version.js
var require_version = __commonJS({
  "node_modules/qrcode/lib/core/version.js"(exports) {
    var Utils = require_utils();
    var ECCode = require_error_correction_code();
    var ECLevel = require_error_correction_level();
    var Mode = require_mode();
    var VersionCheck = require_version_check();
    var G18 = 1 << 12 | 1 << 11 | 1 << 10 | 1 << 9 | 1 << 8 | 1 << 5 | 1 << 2 | 1 << 0;
    var G18_BCH = Utils.getBCHDigit(G18);
    function getBestVersionForDataLength(mode, length, errorCorrectionLevel) {
      for (let currentVersion = 1; currentVersion <= 40; currentVersion++) {
        if (length <= exports.getCapacity(currentVersion, errorCorrectionLevel, mode)) {
          return currentVersion;
        }
      }
      return void 0;
    }
    function getReservedBitsCount(mode, version) {
      return Mode.getCharCountIndicator(mode, version) + 4;
    }
    function getTotalBitsFromDataArray(segments, version) {
      let totalBits = 0;
      segments.forEach(function(data) {
        const reservedBits = getReservedBitsCount(data.mode, version);
        totalBits += reservedBits + data.getBitsLength();
      });
      return totalBits;
    }
    function getBestVersionForMixedData(segments, errorCorrectionLevel) {
      for (let currentVersion = 1; currentVersion <= 40; currentVersion++) {
        const length = getTotalBitsFromDataArray(segments, currentVersion);
        if (length <= exports.getCapacity(currentVersion, errorCorrectionLevel, Mode.MIXED)) {
          return currentVersion;
        }
      }
      return void 0;
    }
    exports.from = function from(value, defaultValue) {
      if (VersionCheck.isValid(value)) {
        return parseInt(value, 10);
      }
      return defaultValue;
    };
    exports.getCapacity = function getCapacity(version, errorCorrectionLevel, mode) {
      if (!VersionCheck.isValid(version)) {
        throw new Error("Invalid QR Code version");
      }
      if (typeof mode === "undefined") mode = Mode.BYTE;
      const totalCodewords = Utils.getSymbolTotalCodewords(version);
      const ecTotalCodewords = ECCode.getTotalCodewordsCount(version, errorCorrectionLevel);
      const dataTotalCodewordsBits = (totalCodewords - ecTotalCodewords) * 8;
      if (mode === Mode.MIXED) return dataTotalCodewordsBits;
      const usableBits = dataTotalCodewordsBits - getReservedBitsCount(mode, version);
      switch (mode) {
        case Mode.NUMERIC:
          return Math.floor(usableBits / 10 * 3);
        case Mode.ALPHANUMERIC:
          return Math.floor(usableBits / 11 * 2);
        case Mode.KANJI:
          return Math.floor(usableBits / 13);
        case Mode.BYTE:
        default:
          return Math.floor(usableBits / 8);
      }
    };
    exports.getBestVersionForData = function getBestVersionForData(data, errorCorrectionLevel) {
      let seg;
      const ecl = ECLevel.from(errorCorrectionLevel, ECLevel.M);
      if (Array.isArray(data)) {
        if (data.length > 1) {
          return getBestVersionForMixedData(data, ecl);
        }
        if (data.length === 0) {
          return 1;
        }
        seg = data[0];
      } else {
        seg = data;
      }
      return getBestVersionForDataLength(seg.mode, seg.getLength(), ecl);
    };
    exports.getEncodedBits = function getEncodedBits(version) {
      if (!VersionCheck.isValid(version) || version < 7) {
        throw new Error("Invalid QR Code version");
      }
      let d = version << 12;
      while (Utils.getBCHDigit(d) - G18_BCH >= 0) {
        d ^= G18 << Utils.getBCHDigit(d) - G18_BCH;
      }
      return version << 12 | d;
    };
  }
});

// node_modules/qrcode/lib/core/format-info.js
var require_format_info = __commonJS({
  "node_modules/qrcode/lib/core/format-info.js"(exports) {
    var Utils = require_utils();
    var G15 = 1 << 10 | 1 << 8 | 1 << 5 | 1 << 4 | 1 << 2 | 1 << 1 | 1 << 0;
    var G15_MASK = 1 << 14 | 1 << 12 | 1 << 10 | 1 << 4 | 1 << 1;
    var G15_BCH = Utils.getBCHDigit(G15);
    exports.getEncodedBits = function getEncodedBits(errorCorrectionLevel, mask) {
      const data = errorCorrectionLevel.bit << 3 | mask;
      let d = data << 10;
      while (Utils.getBCHDigit(d) - G15_BCH >= 0) {
        d ^= G15 << Utils.getBCHDigit(d) - G15_BCH;
      }
      return (data << 10 | d) ^ G15_MASK;
    };
  }
});

// node_modules/qrcode/lib/core/numeric-data.js
var require_numeric_data = __commonJS({
  "node_modules/qrcode/lib/core/numeric-data.js"(exports, module) {
    var Mode = require_mode();
    function NumericData(data) {
      this.mode = Mode.NUMERIC;
      this.data = data.toString();
    }
    NumericData.getBitsLength = function getBitsLength(length) {
      return 10 * Math.floor(length / 3) + (length % 3 ? length % 3 * 3 + 1 : 0);
    };
    NumericData.prototype.getLength = function getLength() {
      return this.data.length;
    };
    NumericData.prototype.getBitsLength = function getBitsLength() {
      return NumericData.getBitsLength(this.data.length);
    };
    NumericData.prototype.write = function write(bitBuffer) {
      let i, group, value;
      for (i = 0; i + 3 <= this.data.length; i += 3) {
        group = this.data.substr(i, 3);
        value = parseInt(group, 10);
        bitBuffer.put(value, 10);
      }
      const remainingNum = this.data.length - i;
      if (remainingNum > 0) {
        group = this.data.substr(i);
        value = parseInt(group, 10);
        bitBuffer.put(value, remainingNum * 3 + 1);
      }
    };
    module.exports = NumericData;
  }
});

// node_modules/qrcode/lib/core/alphanumeric-data.js
var require_alphanumeric_data = __commonJS({
  "node_modules/qrcode/lib/core/alphanumeric-data.js"(exports, module) {
    var Mode = require_mode();
    var ALPHA_NUM_CHARS = [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
      " ",
      "$",
      "%",
      "*",
      "+",
      "-",
      ".",
      "/",
      ":"
    ];
    function AlphanumericData(data) {
      this.mode = Mode.ALPHANUMERIC;
      this.data = data;
    }
    AlphanumericData.getBitsLength = function getBitsLength(length) {
      return 11 * Math.floor(length / 2) + 6 * (length % 2);
    };
    AlphanumericData.prototype.getLength = function getLength() {
      return this.data.length;
    };
    AlphanumericData.prototype.getBitsLength = function getBitsLength() {
      return AlphanumericData.getBitsLength(this.data.length);
    };
    AlphanumericData.prototype.write = function write(bitBuffer) {
      let i;
      for (i = 0; i + 2 <= this.data.length; i += 2) {
        let value = ALPHA_NUM_CHARS.indexOf(this.data[i]) * 45;
        value += ALPHA_NUM_CHARS.indexOf(this.data[i + 1]);
        bitBuffer.put(value, 11);
      }
      if (this.data.length % 2) {
        bitBuffer.put(ALPHA_NUM_CHARS.indexOf(this.data[i]), 6);
      }
    };
    module.exports = AlphanumericData;
  }
});

// node_modules/encode-utf8/index.js
var require_encode_utf8 = __commonJS({
  "node_modules/encode-utf8/index.js"(exports, module) {
    "use strict";
    module.exports = function encodeUtf8(input) {
      var result = [];
      var size = input.length;
      for (var index = 0; index < size; index++) {
        var point = input.charCodeAt(index);
        if (point >= 55296 && point <= 56319 && size > index + 1) {
          var second = input.charCodeAt(index + 1);
          if (second >= 56320 && second <= 57343) {
            point = (point - 55296) * 1024 + second - 56320 + 65536;
            index += 1;
          }
        }
        if (point < 128) {
          result.push(point);
          continue;
        }
        if (point < 2048) {
          result.push(point >> 6 | 192);
          result.push(point & 63 | 128);
          continue;
        }
        if (point < 55296 || point >= 57344 && point < 65536) {
          result.push(point >> 12 | 224);
          result.push(point >> 6 & 63 | 128);
          result.push(point & 63 | 128);
          continue;
        }
        if (point >= 65536 && point <= 1114111) {
          result.push(point >> 18 | 240);
          result.push(point >> 12 & 63 | 128);
          result.push(point >> 6 & 63 | 128);
          result.push(point & 63 | 128);
          continue;
        }
        result.push(239, 191, 189);
      }
      return new Uint8Array(result).buffer;
    };
  }
});

// node_modules/qrcode/lib/core/byte-data.js
var require_byte_data = __commonJS({
  "node_modules/qrcode/lib/core/byte-data.js"(exports, module) {
    var encodeUtf8 = require_encode_utf8();
    var Mode = require_mode();
    function ByteData(data) {
      this.mode = Mode.BYTE;
      if (typeof data === "string") {
        data = encodeUtf8(data);
      }
      this.data = new Uint8Array(data);
    }
    ByteData.getBitsLength = function getBitsLength(length) {
      return length * 8;
    };
    ByteData.prototype.getLength = function getLength() {
      return this.data.length;
    };
    ByteData.prototype.getBitsLength = function getBitsLength() {
      return ByteData.getBitsLength(this.data.length);
    };
    ByteData.prototype.write = function(bitBuffer) {
      for (let i = 0, l = this.data.length; i < l; i++) {
        bitBuffer.put(this.data[i], 8);
      }
    };
    module.exports = ByteData;
  }
});

// node_modules/qrcode/lib/core/kanji-data.js
var require_kanji_data = __commonJS({
  "node_modules/qrcode/lib/core/kanji-data.js"(exports, module) {
    var Mode = require_mode();
    var Utils = require_utils();
    function KanjiData(data) {
      this.mode = Mode.KANJI;
      this.data = data;
    }
    KanjiData.getBitsLength = function getBitsLength(length) {
      return length * 13;
    };
    KanjiData.prototype.getLength = function getLength() {
      return this.data.length;
    };
    KanjiData.prototype.getBitsLength = function getBitsLength() {
      return KanjiData.getBitsLength(this.data.length);
    };
    KanjiData.prototype.write = function(bitBuffer) {
      let i;
      for (i = 0; i < this.data.length; i++) {
        let value = Utils.toSJIS(this.data[i]);
        if (value >= 33088 && value <= 40956) {
          value -= 33088;
        } else if (value >= 57408 && value <= 60351) {
          value -= 49472;
        } else {
          throw new Error(
            "Invalid SJIS character: " + this.data[i] + "\nMake sure your charset is UTF-8"
          );
        }
        value = (value >>> 8 & 255) * 192 + (value & 255);
        bitBuffer.put(value, 13);
      }
    };
    module.exports = KanjiData;
  }
});

// node_modules/dijkstrajs/dijkstra.js
var require_dijkstra = __commonJS({
  "node_modules/dijkstrajs/dijkstra.js"(exports, module) {
    "use strict";
    var dijkstra = {
      single_source_shortest_paths: function(graph, s, d) {
        var predecessors = {};
        var costs = {};
        costs[s] = 0;
        var open = dijkstra.PriorityQueue.make();
        open.push(s, 0);
        var closest, u, v, cost_of_s_to_u, adjacent_nodes, cost_of_e, cost_of_s_to_u_plus_cost_of_e, cost_of_s_to_v, first_visit;
        while (!open.empty()) {
          closest = open.pop();
          u = closest.value;
          cost_of_s_to_u = closest.cost;
          adjacent_nodes = graph[u] || {};
          for (v in adjacent_nodes) {
            if (adjacent_nodes.hasOwnProperty(v)) {
              cost_of_e = adjacent_nodes[v];
              cost_of_s_to_u_plus_cost_of_e = cost_of_s_to_u + cost_of_e;
              cost_of_s_to_v = costs[v];
              first_visit = typeof costs[v] === "undefined";
              if (first_visit || cost_of_s_to_v > cost_of_s_to_u_plus_cost_of_e) {
                costs[v] = cost_of_s_to_u_plus_cost_of_e;
                open.push(v, cost_of_s_to_u_plus_cost_of_e);
                predecessors[v] = u;
              }
            }
          }
        }
        if (typeof d !== "undefined" && typeof costs[d] === "undefined") {
          var msg = ["Could not find a path from ", s, " to ", d, "."].join("");
          throw new Error(msg);
        }
        return predecessors;
      },
      extract_shortest_path_from_predecessor_list: function(predecessors, d) {
        var nodes = [];
        var u = d;
        var predecessor;
        while (u) {
          nodes.push(u);
          predecessor = predecessors[u];
          u = predecessors[u];
        }
        nodes.reverse();
        return nodes;
      },
      find_path: function(graph, s, d) {
        var predecessors = dijkstra.single_source_shortest_paths(graph, s, d);
        return dijkstra.extract_shortest_path_from_predecessor_list(
          predecessors,
          d
        );
      },
      /**
       * A very naive priority queue implementation.
       */
      PriorityQueue: {
        make: function(opts) {
          var T = dijkstra.PriorityQueue, t = {}, key;
          opts = opts || {};
          for (key in T) {
            if (T.hasOwnProperty(key)) {
              t[key] = T[key];
            }
          }
          t.queue = [];
          t.sorter = opts.sorter || T.default_sorter;
          return t;
        },
        default_sorter: function(a, b) {
          return a.cost - b.cost;
        },
        /**
         * Add a new item to the queue and ensure the highest priority element
         * is at the front of the queue.
         */
        push: function(value, cost) {
          var item = { value, cost };
          this.queue.push(item);
          this.queue.sort(this.sorter);
        },
        /**
         * Return the highest priority element in the queue.
         */
        pop: function() {
          return this.queue.shift();
        },
        empty: function() {
          return this.queue.length === 0;
        }
      }
    };
    if (typeof module !== "undefined") {
      module.exports = dijkstra;
    }
  }
});

// node_modules/qrcode/lib/core/segments.js
var require_segments = __commonJS({
  "node_modules/qrcode/lib/core/segments.js"(exports) {
    var Mode = require_mode();
    var NumericData = require_numeric_data();
    var AlphanumericData = require_alphanumeric_data();
    var ByteData = require_byte_data();
    var KanjiData = require_kanji_data();
    var Regex = require_regex();
    var Utils = require_utils();
    var dijkstra = require_dijkstra();
    function getStringByteLength(str) {
      return unescape(encodeURIComponent(str)).length;
    }
    function getSegments(regex, mode, str) {
      const segments = [];
      let result;
      while ((result = regex.exec(str)) !== null) {
        segments.push({
          data: result[0],
          index: result.index,
          mode,
          length: result[0].length
        });
      }
      return segments;
    }
    function getSegmentsFromString(dataStr) {
      const numSegs = getSegments(Regex.NUMERIC, Mode.NUMERIC, dataStr);
      const alphaNumSegs = getSegments(Regex.ALPHANUMERIC, Mode.ALPHANUMERIC, dataStr);
      let byteSegs;
      let kanjiSegs;
      if (Utils.isKanjiModeEnabled()) {
        byteSegs = getSegments(Regex.BYTE, Mode.BYTE, dataStr);
        kanjiSegs = getSegments(Regex.KANJI, Mode.KANJI, dataStr);
      } else {
        byteSegs = getSegments(Regex.BYTE_KANJI, Mode.BYTE, dataStr);
        kanjiSegs = [];
      }
      const segs = numSegs.concat(alphaNumSegs, byteSegs, kanjiSegs);
      return segs.sort(function(s1, s2) {
        return s1.index - s2.index;
      }).map(function(obj) {
        return {
          data: obj.data,
          mode: obj.mode,
          length: obj.length
        };
      });
    }
    function getSegmentBitsLength(length, mode) {
      switch (mode) {
        case Mode.NUMERIC:
          return NumericData.getBitsLength(length);
        case Mode.ALPHANUMERIC:
          return AlphanumericData.getBitsLength(length);
        case Mode.KANJI:
          return KanjiData.getBitsLength(length);
        case Mode.BYTE:
          return ByteData.getBitsLength(length);
      }
    }
    function mergeSegments(segs) {
      return segs.reduce(function(acc, curr) {
        const prevSeg = acc.length - 1 >= 0 ? acc[acc.length - 1] : null;
        if (prevSeg && prevSeg.mode === curr.mode) {
          acc[acc.length - 1].data += curr.data;
          return acc;
        }
        acc.push(curr);
        return acc;
      }, []);
    }
    function buildNodes(segs) {
      const nodes = [];
      for (let i = 0; i < segs.length; i++) {
        const seg = segs[i];
        switch (seg.mode) {
          case Mode.NUMERIC:
            nodes.push([
              seg,
              { data: seg.data, mode: Mode.ALPHANUMERIC, length: seg.length },
              { data: seg.data, mode: Mode.BYTE, length: seg.length }
            ]);
            break;
          case Mode.ALPHANUMERIC:
            nodes.push([
              seg,
              { data: seg.data, mode: Mode.BYTE, length: seg.length }
            ]);
            break;
          case Mode.KANJI:
            nodes.push([
              seg,
              { data: seg.data, mode: Mode.BYTE, length: getStringByteLength(seg.data) }
            ]);
            break;
          case Mode.BYTE:
            nodes.push([
              { data: seg.data, mode: Mode.BYTE, length: getStringByteLength(seg.data) }
            ]);
        }
      }
      return nodes;
    }
    function buildGraph(nodes, version) {
      const table = {};
      const graph = { start: {} };
      let prevNodeIds = ["start"];
      for (let i = 0; i < nodes.length; i++) {
        const nodeGroup = nodes[i];
        const currentNodeIds = [];
        for (let j = 0; j < nodeGroup.length; j++) {
          const node = nodeGroup[j];
          const key = "" + i + j;
          currentNodeIds.push(key);
          table[key] = { node, lastCount: 0 };
          graph[key] = {};
          for (let n = 0; n < prevNodeIds.length; n++) {
            const prevNodeId = prevNodeIds[n];
            if (table[prevNodeId] && table[prevNodeId].node.mode === node.mode) {
              graph[prevNodeId][key] = getSegmentBitsLength(table[prevNodeId].lastCount + node.length, node.mode) - getSegmentBitsLength(table[prevNodeId].lastCount, node.mode);
              table[prevNodeId].lastCount += node.length;
            } else {
              if (table[prevNodeId]) table[prevNodeId].lastCount = node.length;
              graph[prevNodeId][key] = getSegmentBitsLength(node.length, node.mode) + 4 + Mode.getCharCountIndicator(node.mode, version);
            }
          }
        }
        prevNodeIds = currentNodeIds;
      }
      for (let n = 0; n < prevNodeIds.length; n++) {
        graph[prevNodeIds[n]].end = 0;
      }
      return { map: graph, table };
    }
    function buildSingleSegment(data, modesHint) {
      let mode;
      const bestMode = Mode.getBestModeForData(data);
      mode = Mode.from(modesHint, bestMode);
      if (mode !== Mode.BYTE && mode.bit < bestMode.bit) {
        throw new Error('"' + data + '" cannot be encoded with mode ' + Mode.toString(mode) + ".\n Suggested mode is: " + Mode.toString(bestMode));
      }
      if (mode === Mode.KANJI && !Utils.isKanjiModeEnabled()) {
        mode = Mode.BYTE;
      }
      switch (mode) {
        case Mode.NUMERIC:
          return new NumericData(data);
        case Mode.ALPHANUMERIC:
          return new AlphanumericData(data);
        case Mode.KANJI:
          return new KanjiData(data);
        case Mode.BYTE:
          return new ByteData(data);
      }
    }
    exports.fromArray = function fromArray(array) {
      return array.reduce(function(acc, seg) {
        if (typeof seg === "string") {
          acc.push(buildSingleSegment(seg, null));
        } else if (seg.data) {
          acc.push(buildSingleSegment(seg.data, seg.mode));
        }
        return acc;
      }, []);
    };
    exports.fromString = function fromString(data, version) {
      const segs = getSegmentsFromString(data, Utils.isKanjiModeEnabled());
      const nodes = buildNodes(segs);
      const graph = buildGraph(nodes, version);
      const path = dijkstra.find_path(graph.map, "start", "end");
      const optimizedSegs = [];
      for (let i = 1; i < path.length - 1; i++) {
        optimizedSegs.push(graph.table[path[i]].node);
      }
      return exports.fromArray(mergeSegments(optimizedSegs));
    };
    exports.rawSplit = function rawSplit(data) {
      return exports.fromArray(
        getSegmentsFromString(data, Utils.isKanjiModeEnabled())
      );
    };
  }
});

// node_modules/qrcode/lib/core/qrcode.js
var require_qrcode = __commonJS({
  "node_modules/qrcode/lib/core/qrcode.js"(exports) {
    var Utils = require_utils();
    var ECLevel = require_error_correction_level();
    var BitBuffer = require_bit_buffer();
    var BitMatrix = require_bit_matrix();
    var AlignmentPattern = require_alignment_pattern();
    var FinderPattern = require_finder_pattern();
    var MaskPattern = require_mask_pattern();
    var ECCode = require_error_correction_code();
    var ReedSolomonEncoder = require_reed_solomon_encoder();
    var Version = require_version();
    var FormatInfo = require_format_info();
    var Mode = require_mode();
    var Segments = require_segments();
    function setupFinderPattern(matrix, version) {
      const size = matrix.size;
      const pos = FinderPattern.getPositions(version);
      for (let i = 0; i < pos.length; i++) {
        const row = pos[i][0];
        const col = pos[i][1];
        for (let r = -1; r <= 7; r++) {
          if (row + r <= -1 || size <= row + r) continue;
          for (let c = -1; c <= 7; c++) {
            if (col + c <= -1 || size <= col + c) continue;
            if (r >= 0 && r <= 6 && (c === 0 || c === 6) || c >= 0 && c <= 6 && (r === 0 || r === 6) || r >= 2 && r <= 4 && c >= 2 && c <= 4) {
              matrix.set(row + r, col + c, true, true);
            } else {
              matrix.set(row + r, col + c, false, true);
            }
          }
        }
      }
    }
    function setupTimingPattern(matrix) {
      const size = matrix.size;
      for (let r = 8; r < size - 8; r++) {
        const value = r % 2 === 0;
        matrix.set(r, 6, value, true);
        matrix.set(6, r, value, true);
      }
    }
    function setupAlignmentPattern(matrix, version) {
      const pos = AlignmentPattern.getPositions(version);
      for (let i = 0; i < pos.length; i++) {
        const row = pos[i][0];
        const col = pos[i][1];
        for (let r = -2; r <= 2; r++) {
          for (let c = -2; c <= 2; c++) {
            if (r === -2 || r === 2 || c === -2 || c === 2 || r === 0 && c === 0) {
              matrix.set(row + r, col + c, true, true);
            } else {
              matrix.set(row + r, col + c, false, true);
            }
          }
        }
      }
    }
    function setupVersionInfo(matrix, version) {
      const size = matrix.size;
      const bits = Version.getEncodedBits(version);
      let row, col, mod;
      for (let i = 0; i < 18; i++) {
        row = Math.floor(i / 3);
        col = i % 3 + size - 8 - 3;
        mod = (bits >> i & 1) === 1;
        matrix.set(row, col, mod, true);
        matrix.set(col, row, mod, true);
      }
    }
    function setupFormatInfo(matrix, errorCorrectionLevel, maskPattern) {
      const size = matrix.size;
      const bits = FormatInfo.getEncodedBits(errorCorrectionLevel, maskPattern);
      let i, mod;
      for (i = 0; i < 15; i++) {
        mod = (bits >> i & 1) === 1;
        if (i < 6) {
          matrix.set(i, 8, mod, true);
        } else if (i < 8) {
          matrix.set(i + 1, 8, mod, true);
        } else {
          matrix.set(size - 15 + i, 8, mod, true);
        }
        if (i < 8) {
          matrix.set(8, size - i - 1, mod, true);
        } else if (i < 9) {
          matrix.set(8, 15 - i - 1 + 1, mod, true);
        } else {
          matrix.set(8, 15 - i - 1, mod, true);
        }
      }
      matrix.set(size - 8, 8, 1, true);
    }
    function setupData(matrix, data) {
      const size = matrix.size;
      let inc = -1;
      let row = size - 1;
      let bitIndex = 7;
      let byteIndex = 0;
      for (let col = size - 1; col > 0; col -= 2) {
        if (col === 6) col--;
        while (true) {
          for (let c = 0; c < 2; c++) {
            if (!matrix.isReserved(row, col - c)) {
              let dark = false;
              if (byteIndex < data.length) {
                dark = (data[byteIndex] >>> bitIndex & 1) === 1;
              }
              matrix.set(row, col - c, dark);
              bitIndex--;
              if (bitIndex === -1) {
                byteIndex++;
                bitIndex = 7;
              }
            }
          }
          row += inc;
          if (row < 0 || size <= row) {
            row -= inc;
            inc = -inc;
            break;
          }
        }
      }
    }
    function createData(version, errorCorrectionLevel, segments) {
      const buffer = new BitBuffer();
      segments.forEach(function(data) {
        buffer.put(data.mode.bit, 4);
        buffer.put(data.getLength(), Mode.getCharCountIndicator(data.mode, version));
        data.write(buffer);
      });
      const totalCodewords = Utils.getSymbolTotalCodewords(version);
      const ecTotalCodewords = ECCode.getTotalCodewordsCount(version, errorCorrectionLevel);
      const dataTotalCodewordsBits = (totalCodewords - ecTotalCodewords) * 8;
      if (buffer.getLengthInBits() + 4 <= dataTotalCodewordsBits) {
        buffer.put(0, 4);
      }
      while (buffer.getLengthInBits() % 8 !== 0) {
        buffer.putBit(0);
      }
      const remainingByte = (dataTotalCodewordsBits - buffer.getLengthInBits()) / 8;
      for (let i = 0; i < remainingByte; i++) {
        buffer.put(i % 2 ? 17 : 236, 8);
      }
      return createCodewords(buffer, version, errorCorrectionLevel);
    }
    function createCodewords(bitBuffer, version, errorCorrectionLevel) {
      const totalCodewords = Utils.getSymbolTotalCodewords(version);
      const ecTotalCodewords = ECCode.getTotalCodewordsCount(version, errorCorrectionLevel);
      const dataTotalCodewords = totalCodewords - ecTotalCodewords;
      const ecTotalBlocks = ECCode.getBlocksCount(version, errorCorrectionLevel);
      const blocksInGroup2 = totalCodewords % ecTotalBlocks;
      const blocksInGroup1 = ecTotalBlocks - blocksInGroup2;
      const totalCodewordsInGroup1 = Math.floor(totalCodewords / ecTotalBlocks);
      const dataCodewordsInGroup1 = Math.floor(dataTotalCodewords / ecTotalBlocks);
      const dataCodewordsInGroup2 = dataCodewordsInGroup1 + 1;
      const ecCount = totalCodewordsInGroup1 - dataCodewordsInGroup1;
      const rs = new ReedSolomonEncoder(ecCount);
      let offset = 0;
      const dcData = new Array(ecTotalBlocks);
      const ecData = new Array(ecTotalBlocks);
      let maxDataSize = 0;
      const buffer = new Uint8Array(bitBuffer.buffer);
      for (let b = 0; b < ecTotalBlocks; b++) {
        const dataSize = b < blocksInGroup1 ? dataCodewordsInGroup1 : dataCodewordsInGroup2;
        dcData[b] = buffer.slice(offset, offset + dataSize);
        ecData[b] = rs.encode(dcData[b]);
        offset += dataSize;
        maxDataSize = Math.max(maxDataSize, dataSize);
      }
      const data = new Uint8Array(totalCodewords);
      let index = 0;
      let i, r;
      for (i = 0; i < maxDataSize; i++) {
        for (r = 0; r < ecTotalBlocks; r++) {
          if (i < dcData[r].length) {
            data[index++] = dcData[r][i];
          }
        }
      }
      for (i = 0; i < ecCount; i++) {
        for (r = 0; r < ecTotalBlocks; r++) {
          data[index++] = ecData[r][i];
        }
      }
      return data;
    }
    function createSymbol(data, version, errorCorrectionLevel, maskPattern) {
      let segments;
      if (Array.isArray(data)) {
        segments = Segments.fromArray(data);
      } else if (typeof data === "string") {
        let estimatedVersion = version;
        if (!estimatedVersion) {
          const rawSegments = Segments.rawSplit(data);
          estimatedVersion = Version.getBestVersionForData(rawSegments, errorCorrectionLevel);
        }
        segments = Segments.fromString(data, estimatedVersion || 40);
      } else {
        throw new Error("Invalid data");
      }
      const bestVersion = Version.getBestVersionForData(segments, errorCorrectionLevel);
      if (!bestVersion) {
        throw new Error("The amount of data is too big to be stored in a QR Code");
      }
      if (!version) {
        version = bestVersion;
      } else if (version < bestVersion) {
        throw new Error(
          "\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: " + bestVersion + ".\n"
        );
      }
      const dataBits = createData(version, errorCorrectionLevel, segments);
      const moduleCount = Utils.getSymbolSize(version);
      const modules = new BitMatrix(moduleCount);
      setupFinderPattern(modules, version);
      setupTimingPattern(modules);
      setupAlignmentPattern(modules, version);
      setupFormatInfo(modules, errorCorrectionLevel, 0);
      if (version >= 7) {
        setupVersionInfo(modules, version);
      }
      setupData(modules, dataBits);
      if (isNaN(maskPattern)) {
        maskPattern = MaskPattern.getBestMask(
          modules,
          setupFormatInfo.bind(null, modules, errorCorrectionLevel)
        );
      }
      MaskPattern.applyMask(maskPattern, modules);
      setupFormatInfo(modules, errorCorrectionLevel, maskPattern);
      return {
        modules,
        version,
        errorCorrectionLevel,
        maskPattern,
        segments
      };
    }
    exports.create = function create(data, options) {
      if (typeof data === "undefined" || data === "") {
        throw new Error("No input text");
      }
      let errorCorrectionLevel = ECLevel.M;
      let version;
      let mask;
      if (typeof options !== "undefined") {
        errorCorrectionLevel = ECLevel.from(options.errorCorrectionLevel, ECLevel.M);
        version = Version.from(options.version);
        mask = MaskPattern.from(options.maskPattern);
        if (options.toSJISFunc) {
          Utils.setToSJISFunction(options.toSJISFunc);
        }
      }
      return createSymbol(data, version, errorCorrectionLevel, mask);
    };
  }
});

// node_modules/qrcode/lib/renderer/utils.js
var require_utils2 = __commonJS({
  "node_modules/qrcode/lib/renderer/utils.js"(exports) {
    function hex2rgba(hex) {
      if (typeof hex === "number") {
        hex = hex.toString();
      }
      if (typeof hex !== "string") {
        throw new Error("Color should be defined as hex string");
      }
      let hexCode = hex.slice().replace("#", "").split("");
      if (hexCode.length < 3 || hexCode.length === 5 || hexCode.length > 8) {
        throw new Error("Invalid hex color: " + hex);
      }
      if (hexCode.length === 3 || hexCode.length === 4) {
        hexCode = Array.prototype.concat.apply([], hexCode.map(function(c) {
          return [c, c];
        }));
      }
      if (hexCode.length === 6) hexCode.push("F", "F");
      const hexValue = parseInt(hexCode.join(""), 16);
      return {
        r: hexValue >> 24 & 255,
        g: hexValue >> 16 & 255,
        b: hexValue >> 8 & 255,
        a: hexValue & 255,
        hex: "#" + hexCode.slice(0, 6).join("")
      };
    }
    exports.getOptions = function getOptions(options) {
      if (!options) options = {};
      if (!options.color) options.color = {};
      const margin = typeof options.margin === "undefined" || options.margin === null || options.margin < 0 ? 4 : options.margin;
      const width = options.width && options.width >= 21 ? options.width : void 0;
      const scale = options.scale || 4;
      return {
        width,
        scale: width ? 4 : scale,
        margin,
        color: {
          dark: hex2rgba(options.color.dark || "#000000ff"),
          light: hex2rgba(options.color.light || "#ffffffff")
        },
        type: options.type,
        rendererOpts: options.rendererOpts || {}
      };
    };
    exports.getScale = function getScale(qrSize, opts) {
      return opts.width && opts.width >= qrSize + opts.margin * 2 ? opts.width / (qrSize + opts.margin * 2) : opts.scale;
    };
    exports.getImageWidth = function getImageWidth(qrSize, opts) {
      const scale = exports.getScale(qrSize, opts);
      return Math.floor((qrSize + opts.margin * 2) * scale);
    };
    exports.qrToImageData = function qrToImageData(imgData, qr, opts) {
      const size = qr.modules.size;
      const data = qr.modules.data;
      const scale = exports.getScale(size, opts);
      const symbolSize = Math.floor((size + opts.margin * 2) * scale);
      const scaledMargin = opts.margin * scale;
      const palette = [opts.color.light, opts.color.dark];
      for (let i = 0; i < symbolSize; i++) {
        for (let j = 0; j < symbolSize; j++) {
          let posDst = (i * symbolSize + j) * 4;
          let pxColor = opts.color.light;
          if (i >= scaledMargin && j >= scaledMargin && i < symbolSize - scaledMargin && j < symbolSize - scaledMargin) {
            const iSrc = Math.floor((i - scaledMargin) / scale);
            const jSrc = Math.floor((j - scaledMargin) / scale);
            pxColor = palette[data[iSrc * size + jSrc] ? 1 : 0];
          }
          imgData[posDst++] = pxColor.r;
          imgData[posDst++] = pxColor.g;
          imgData[posDst++] = pxColor.b;
          imgData[posDst] = pxColor.a;
        }
      }
    };
  }
});

// node_modules/qrcode/lib/renderer/canvas.js
var require_canvas = __commonJS({
  "node_modules/qrcode/lib/renderer/canvas.js"(exports) {
    var Utils = require_utils2();
    function clearCanvas(ctx, canvas, size) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      if (!canvas.style) canvas.style = {};
      canvas.height = size;
      canvas.width = size;
      canvas.style.height = size + "px";
      canvas.style.width = size + "px";
    }
    function getCanvasElement() {
      try {
        return document.createElement("canvas");
      } catch (e) {
        throw new Error("You need to specify a canvas element");
      }
    }
    exports.render = function render(qrData, canvas, options) {
      let opts = options;
      let canvasEl = canvas;
      if (typeof opts === "undefined" && (!canvas || !canvas.getContext)) {
        opts = canvas;
        canvas = void 0;
      }
      if (!canvas) {
        canvasEl = getCanvasElement();
      }
      opts = Utils.getOptions(opts);
      const size = Utils.getImageWidth(qrData.modules.size, opts);
      const ctx = canvasEl.getContext("2d");
      const image = ctx.createImageData(size, size);
      Utils.qrToImageData(image.data, qrData, opts);
      clearCanvas(ctx, canvasEl, size);
      ctx.putImageData(image, 0, 0);
      return canvasEl;
    };
    exports.renderToDataURL = function renderToDataURL(qrData, canvas, options) {
      let opts = options;
      if (typeof opts === "undefined" && (!canvas || !canvas.getContext)) {
        opts = canvas;
        canvas = void 0;
      }
      if (!opts) opts = {};
      const canvasEl = exports.render(qrData, canvas, opts);
      const type = opts.type || "image/png";
      const rendererOpts = opts.rendererOpts || {};
      return canvasEl.toDataURL(type, rendererOpts.quality);
    };
  }
});

// node_modules/qrcode/lib/renderer/svg-tag.js
var require_svg_tag = __commonJS({
  "node_modules/qrcode/lib/renderer/svg-tag.js"(exports) {
    var Utils = require_utils2();
    function getColorAttrib(color, attrib) {
      const alpha = color.a / 255;
      const str = attrib + '="' + color.hex + '"';
      return alpha < 1 ? str + " " + attrib + '-opacity="' + alpha.toFixed(2).slice(1) + '"' : str;
    }
    function svgCmd(cmd, x, y) {
      let str = cmd + x;
      if (typeof y !== "undefined") str += " " + y;
      return str;
    }
    function qrToPath(data, size, margin) {
      let path = "";
      let moveBy = 0;
      let newRow = false;
      let lineLength = 0;
      for (let i = 0; i < data.length; i++) {
        const col = Math.floor(i % size);
        const row = Math.floor(i / size);
        if (!col && !newRow) newRow = true;
        if (data[i]) {
          lineLength++;
          if (!(i > 0 && col > 0 && data[i - 1])) {
            path += newRow ? svgCmd("M", col + margin, 0.5 + row + margin) : svgCmd("m", moveBy, 0);
            moveBy = 0;
            newRow = false;
          }
          if (!(col + 1 < size && data[i + 1])) {
            path += svgCmd("h", lineLength);
            lineLength = 0;
          }
        } else {
          moveBy++;
        }
      }
      return path;
    }
    exports.render = function render(qrData, options, cb) {
      const opts = Utils.getOptions(options);
      const size = qrData.modules.size;
      const data = qrData.modules.data;
      const qrcodesize = size + opts.margin * 2;
      const bg = !opts.color.light.a ? "" : "<path " + getColorAttrib(opts.color.light, "fill") + ' d="M0 0h' + qrcodesize + "v" + qrcodesize + 'H0z"/>';
      const path = "<path " + getColorAttrib(opts.color.dark, "stroke") + ' d="' + qrToPath(data, size, opts.margin) + '"/>';
      const viewBox = 'viewBox="0 0 ' + qrcodesize + " " + qrcodesize + '"';
      const width = !opts.width ? "" : 'width="' + opts.width + '" height="' + opts.width + '" ';
      const svgTag = '<svg xmlns="http://www.w3.org/2000/svg" ' + width + viewBox + ' shape-rendering="crispEdges">' + bg + path + "</svg>\n";
      if (typeof cb === "function") {
        cb(null, svgTag);
      }
      return svgTag;
    };
  }
});

// node_modules/qrcode/lib/browser.js
var require_browser = __commonJS({
  "node_modules/qrcode/lib/browser.js"(exports) {
    var canPromise = require_can_promise();
    var QRCode = require_qrcode();
    var CanvasRenderer = require_canvas();
    var SvgRenderer = require_svg_tag();
    function renderCanvas(renderFunc, canvas, text, opts, cb) {
      const args = [].slice.call(arguments, 1);
      const argsNum = args.length;
      const isLastArgCb = typeof args[argsNum - 1] === "function";
      if (!isLastArgCb && !canPromise()) {
        throw new Error("Callback required as last argument");
      }
      if (isLastArgCb) {
        if (argsNum < 2) {
          throw new Error("Too few arguments provided");
        }
        if (argsNum === 2) {
          cb = text;
          text = canvas;
          canvas = opts = void 0;
        } else if (argsNum === 3) {
          if (canvas.getContext && typeof cb === "undefined") {
            cb = opts;
            opts = void 0;
          } else {
            cb = opts;
            opts = text;
            text = canvas;
            canvas = void 0;
          }
        }
      } else {
        if (argsNum < 1) {
          throw new Error("Too few arguments provided");
        }
        if (argsNum === 1) {
          text = canvas;
          canvas = opts = void 0;
        } else if (argsNum === 2 && !canvas.getContext) {
          opts = text;
          text = canvas;
          canvas = void 0;
        }
        return new Promise(function(resolve, reject) {
          try {
            const data = QRCode.create(text, opts);
            resolve(renderFunc(data, canvas, opts));
          } catch (e) {
            reject(e);
          }
        });
      }
      try {
        const data = QRCode.create(text, opts);
        cb(null, renderFunc(data, canvas, opts));
      } catch (e) {
        cb(e);
      }
    }
    exports.create = QRCode.create;
    exports.toCanvas = renderCanvas.bind(null, CanvasRenderer.render);
    exports.toDataURL = renderCanvas.bind(null, CanvasRenderer.renderToDataURL);
    exports.toString = renderCanvas.bind(null, function(data, _, opts) {
      return SvgRenderer.render(data, opts);
    });
  }
});

// src/app/core/services/cargos.service.ts
var _CargosService = class _CargosService {
  constructor(_http, appSettings) {
    this._http = _http;
    this.appSettings = appSettings;
  }
  getCargos() {
    return this._http.get(this.appSettings.cargos.url.base);
  }
  postCargos(data) {
    delete data.id;
    return this._http.post(this.appSettings.cargos.url.base, data);
  }
  putCargos(data) {
    const id = data.id;
    delete data.id;
    return this._http.put(`${this.appSettings.cargos.url.base}/${id}`, data);
  }
};
_CargosService.\u0275fac = function CargosService_Factory(t) {
  return new (t || _CargosService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(AppSettingsService));
};
_CargosService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CargosService, factory: _CargosService.\u0275fac, providedIn: "root" });
var CargosService = _CargosService;

// src/app/core/services/nivel-riesgo.service.ts
var _NivelRiesgoService = class _NivelRiesgoService {
  constructor(_http, appSettings) {
    this._http = _http;
    this.appSettings = appSettings;
  }
  getRiesgos() {
    return this._http.get(this.appSettings.riesgos.url.base);
  }
  getRiesgo(id) {
    return this._http.get(`${this.appSettings.riesgos.url.base}/${id}`);
  }
};
_NivelRiesgoService.\u0275fac = function NivelRiesgoService_Factory(t) {
  return new (t || _NivelRiesgoService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(AppSettingsService));
};
_NivelRiesgoService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _NivelRiesgoService, factory: _NivelRiesgoService.\u0275fac, providedIn: "root" });
var NivelRiesgoService = _NivelRiesgoService;

// src/app/core/services/contratos.service.ts
var _ContratosService = class _ContratosService {
  constructor(_http, appSettings) {
    this._http = _http;
    this.appSettings = appSettings;
  }
  getContratos() {
    return this._http.get(this.appSettings.tipoContratos.url.base);
  }
};
_ContratosService.\u0275fac = function ContratosService_Factory(t) {
  return new (t || _ContratosService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(AppSettingsService));
};
_ContratosService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ContratosService, factory: _ContratosService.\u0275fac, providedIn: "root" });
var ContratosService = _ContratosService;

// src/app/core/services/deducciones.service.ts
var _DeduccionesService = class _DeduccionesService {
  constructor(_http, appSettings) {
    this._http = _http;
    this.appSettings = appSettings;
  }
  getDeducciones() {
    return this._http.get(this.appSettings.deduccionesLegales.url.base);
  }
};
_DeduccionesService.\u0275fac = function DeduccionesService_Factory(t) {
  return new (t || _DeduccionesService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(AppSettingsService));
};
_DeduccionesService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _DeduccionesService, factory: _DeduccionesService.\u0275fac, providedIn: "root" });
var DeduccionesService = _DeduccionesService;

// src/app/core/constant/valores.ts
var VALOR_PORCENTAJE_100 = 100;
var VALOR_PORCENTAJE_30 = 40;

// src/app/pages/gestion-empleados/empleados/form-empleados/form-empleados.component.ts
function FormEmpleadosComponent_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "img", 54);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r1.image, \u0275\u0275sanitizeUrl)("alt", "Profile avatar");
  }
}
function FormEmpleadosComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 55);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_7_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (tmp_7_0 = ctx_r1.form.get("primerNombre").value.charAt(0)) !== null && tmp_7_0 !== void 0 ? tmp_7_0 : "P", " ");
  }
}
function FormEmpleadosComponent_ng_container_46_mat_option_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 56);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    \u0275\u0275property("value", item_r4.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r4.nombre);
  }
}
function FormEmpleadosComponent_ng_container_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, FormEmpleadosComponent_ng_container_46_mat_option_1_Template, 2, 2, "mat-option", 42);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const documentos_r5 = ctx.ngIf;
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", documentos_r5.data);
  }
}
function FormEmpleadosComponent_ng_container_57_mat_option_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 56);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r6 = ctx.$implicit;
    \u0275\u0275property("value", item_r6.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r6.nombre);
  }
}
function FormEmpleadosComponent_ng_container_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, FormEmpleadosComponent_ng_container_57_mat_option_1_Template, 2, 2, "mat-option", 42);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const generos_r7 = ctx.ngIf;
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", generos_r7.data);
  }
}
function FormEmpleadosComponent_ng_container_75_mat_option_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 56);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const departamento_r8 = ctx.$implicit;
    \u0275\u0275property("value", departamento_r8.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(departamento_r8.nombre);
  }
}
function FormEmpleadosComponent_ng_container_75_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, FormEmpleadosComponent_ng_container_75_mat_option_1_Template, 2, 2, "mat-option", 42);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const departamentos_r9 = ctx.ngIf;
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", departamentos_r9.data);
  }
}
function FormEmpleadosComponent_ng_container_81_mat_option_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 56);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const municipio_r10 = ctx.$implicit;
    \u0275\u0275property("value", municipio_r10.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(municipio_r10.nombre);
  }
}
function FormEmpleadosComponent_ng_container_81_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, FormEmpleadosComponent_ng_container_81_mat_option_1_Template, 2, 2, "mat-option", 42);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const municipios_r11 = ctx.ngIf;
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", municipios_r11.data);
  }
}
function FormEmpleadosComponent_ng_container_109_mat_option_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 56);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r12 = ctx.$implicit;
    \u0275\u0275property("value", item_r12.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r12.razonSocial);
  }
}
function FormEmpleadosComponent_ng_container_109_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, FormEmpleadosComponent_ng_container_109_mat_option_1_Template, 2, 2, "mat-option", 42);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const empresasClientes_r13 = ctx.ngIf;
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", empresasClientes_r13.data);
  }
}
function FormEmpleadosComponent_mat_option_135_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 56);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r14 = ctx.$implicit;
    \u0275\u0275property("value", item_r14.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r14.nombre);
  }
}
function FormEmpleadosComponent_ng_container_136_ng_container_6_mat_option_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 56);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r15 = ctx.$implicit;
    \u0275\u0275property("value", item_r15.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("Porcentaje salud: ", item_r15.porcentajeSalud, "% - Porcentaje pensi\xF3n: ", item_r15.porcentajePension, "%");
  }
}
function FormEmpleadosComponent_ng_container_136_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, FormEmpleadosComponent_ng_container_136_ng_container_6_mat_option_1_Template, 2, 3, "mat-option", 42);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const deducciones_r16 = ctx.ngIf;
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", deducciones_r16.data);
  }
}
function FormEmpleadosComponent_ng_container_136_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 21)(2, "mat-form-field", 22)(3, "mat-label");
    \u0275\u0275text(4, "Deducciones legales");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "mat-select", 57);
    \u0275\u0275template(6, FormEmpleadosComponent_ng_container_136_ng_container_6_Template, 2, 1, "ng-container", 28);
    \u0275\u0275pipe(7, "async");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275property("formControlName", "idDeduccionLegal")("disabled", true);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(7, 3, ctx_r1.deduccion$));
  }
}
function FormEmpleadosComponent_ng_container_146_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 21)(2, "mat-form-field", 22)(3, "mat-label");
    \u0275\u0275text(4, "Salud");
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "input", 58);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "mat-form-field", 22)(7, "mat-label");
    \u0275\u0275text(8, "Pensi\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275element(9, "input", 59);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275property("readonly", true)("formControlName", "salud");
    \u0275\u0275advance(4);
    \u0275\u0275property("readonly", true)("formControlName", "pension");
  }
}
function FormEmpleadosComponent_ng_container_157_mat_option_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 56);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r17 = ctx.$implicit;
    \u0275\u0275property("value", item_r17.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r17.nombre);
  }
}
function FormEmpleadosComponent_ng_container_157_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, FormEmpleadosComponent_ng_container_157_mat_option_1_Template, 2, 2, "mat-option", 42);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const riesgos_r18 = ctx.ngIf;
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", riesgos_r18.data);
  }
}
function FormEmpleadosComponent_ng_container_171_mat_option_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 56);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r19 = ctx.$implicit;
    \u0275\u0275property("value", item_r19.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r19.nombre);
  }
}
function FormEmpleadosComponent_ng_container_171_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, FormEmpleadosComponent_ng_container_171_mat_option_1_Template, 2, 2, "mat-option", 42);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const tipoCuentas_r20 = ctx.ngIf;
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", tipoCuentas_r20.data);
  }
}
function FormEmpleadosComponent_ng_container_178_mat_option_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 56);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r21 = ctx.$implicit;
    \u0275\u0275property("value", item_r21.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r21.nombre);
  }
}
function FormEmpleadosComponent_ng_container_178_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, FormEmpleadosComponent_ng_container_178_mat_option_1_Template, 2, 2, "mat-option", 42);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const bancos_r22 = ctx.ngIf;
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", bancos_r22.data);
  }
}
var maskConfig = {
  validation: false
};
var _FormEmpleadosComponent = class _FormEmpleadosComponent {
  constructor() {
    this.fb = inject(FormBuilder);
    this.dialogRef = inject(MatDialogRef);
    this.fuseService = inject(FuseConfirmationService);
    this.estadosDatosService = inject(EstadosDatosService);
    this.toasService = inject(ToastAlertsService);
    this.tiposDocumentosService = inject(TiposDocumentosService);
    this._locacionService = inject(LocacionService);
    this.generoService = inject(GenerosService);
    this.empresaClienteService = inject(EmpresasClientesService);
    this.datePipe = inject(DatePipe);
    this.empleadosServices = inject(EmpleadosService);
    this.cargosServices = inject(CargosService);
    this.riesgosServices = inject(NivelRiesgoService);
    this.bancosServices = inject(BancosService);
    this.swalService = inject(SwalService);
    this.destroyedRef = inject(DestroyRef);
    this.errorHandlerService = inject(ErrorHandlerService);
    this.porcentajeSalud = 0;
    this.porcentajePension = 0;
    this.sumaPorcentaje = 0;
    this.departamentos$ = this._locacionService.getDepartamentos().pipe(tap((response) => {
      const valorSelected = response.data;
      const dialogData = this._matData;
      if (valorSelected && !dialogData.edit) {
        this.form.get("idDepartamento").setValue(valorSelected[0].id);
        const idDepto = this.form.get("idDepartamento").value;
        this.getMunicipios(idDepto);
      }
    }));
    this.tiposDocumentos$ = this.tiposDocumentosService.getTiposDocumentos().pipe(tap((response) => {
      const valorSelected = response.data;
      const dialogData = this._matData;
      if (valorSelected && !dialogData.edit) {
        this.form.get("idTipoDoc").setValue(valorSelected[3].id);
      }
    }));
    this.generos$ = this.generoService.getGeneros().pipe(tap((response) => {
      const valorSelected = response.data;
      const dialogData = this._matData;
      if (valorSelected && !dialogData.edit) {
        this.form.get("idGenero").setValue(valorSelected[1].id);
      }
    }));
    this.empresasClientes$ = this.empresaClienteService.getEmpresasClientes().pipe(tap((response) => {
      const valorSelected = response.data;
      const dialogData = this._matData;
      if (valorSelected && !dialogData.edit) {
        this.form.get("idSubEmpresa").setValue(valorSelected[0].id);
      }
    }));
    this.cargos$ = this.cargosServices.getCargos();
    this.riesgos$ = this.riesgosServices.getRiesgos().pipe(tap((response) => {
      const valorSelected = response.data;
      const dialogData = this._matData;
      if (valorSelected && !dialogData.edit) {
        this.form.get("idNivelRiesgo").setValue(valorSelected[0].id);
      }
    }));
    this.bancos$ = this.bancosServices.getBancos().pipe(tap((response) => {
      const valorSelected = response.data;
      const dialogData = this._matData;
      if (valorSelected && !dialogData.edit) {
        this.form.get("idBanco").setValue(valorSelected[0].id);
      }
    }));
    this._matData = inject(MAT_DIALOG_DATA);
    this.tipoCuentasService = inject(TipoCuentasService);
    this.tipoCuentas$ = this.tipoCuentasService.getTipoCuentas().pipe(tap((response) => {
      const valorSelected = response.data;
      const dialogData = this._matData;
      if (valorSelected && !dialogData.edit) {
        this.form.get("idTipoCuenta").setValue(valorSelected[0].id);
      }
    }));
    this.tipoContratosService = inject(ContratosService);
    this.tipoContratos = [];
    this.deduccioLegalService = inject(DeduccionesService);
    this.deduccion$ = this.deduccioLegalService.getDeducciones().pipe(tap((response) => {
      const valorSelected = response.data;
      const dialogData = this._matData;
      if (valorSelected) {
        this.form.get("idDeduccionLegal").setValue(valorSelected[0].id);
        this.porcentajeSalud = valorSelected[0].porcentajeSalud;
        this.porcentajePension = valorSelected[0].porcentajePension;
        this.sumaPorcentaje = valorSelected[0].estado ? this.porcentajePension + this.porcentajeSalud : 0;
      }
    }));
    this.profile = {
      avatar: "",
      name: "Pedro"
    };
    this.event = event;
  }
  getContratos() {
    this.tipoContratosService.getContratos().pipe(tap((response) => {
      const valorSelected = response.data;
      const dialogData = this._matData;
      if (valorSelected && !dialogData.edit) {
        this.form.get("idTipoContrato").setValue(valorSelected[0].id);
        this.deduccionLegal = valorSelected[0].deduccioneLegal;
      }
    })).subscribe((response) => {
      if (response.data) {
        this.tipoContratos = response.data;
      }
    });
  }
  selectedDeduccion(event2) {
    const idContrato = event2.value;
    const datoDeduccion = this.tipoContratos.find((item) => {
      if (item.id == idContrato) {
        return item;
      }
    });
    this.deduccionLegal = datoDeduccion.deduccioneLegal;
    if (this.deduccionLegal) {
      this.resetConDeduccion();
    } else {
      this.resetSinDeduccion();
    }
  }
  ngOnInit() {
    this.createForm();
    this.getContratos();
    const dialogData = this._matData;
    if (dialogData.edit) {
      const data = dialogData.data;
      this.getTrabajador(data.id);
      this.setCampoValue();
    }
    if (!this._matData.edit) {
      this.setCampoValue();
    }
  }
  getTrabajador(id) {
    this.empleadosServices.getEmpleado(id).subscribe((response) => {
      if (response) {
        const data = response.data;
        this.deduccionLegal = this.buscarContrato(data.idTipoContrato);
        const _a = data, { idDepartamento, fechaNacimiento, fechaInicioContrato, fechaFinContrato, porcentajeSalud, porcentajePension, capacidadEndeudamiento, salarioBase, otroIngreso } = _a, form = __objRest(_a, ["idDepartamento", "fechaNacimiento", "fechaInicioContrato", "fechaFinContrato", "porcentajeSalud", "porcentajePension", "capacidadEndeudamiento", "salarioBase", "otroIngreso"]);
        const fecha = new Date(fechaNacimiento);
        const fechaInicioAntes = new Date(fechaInicioContrato);
        const fechaFinAntes = new Date(fechaFinContrato);
        this.municipios$ = this._locacionService.getMunicipio(idDepartamento);
        if (this.deduccionLegal) {
          const devengado = salarioBase + otroIngreso - salarioBase * (porcentajeSalud + porcentajePension) / VALOR_PORCENTAJE_100;
          const salud = (salarioBase + otroIngreso) * porcentajeSalud / VALOR_PORCENTAJE_100;
          const pension = (salarioBase + otroIngreso) * porcentajePension / VALOR_PORCENTAJE_100;
          const endeudamiento = devengado * VALOR_PORCENTAJE_30 / VALOR_PORCENTAJE_100;
          this.form.patchValue(__spreadValues({
            fechaNacimiento: fecha,
            fechaInicioContrato: new Date(fechaInicioAntes.getFullYear(), fechaInicioAntes.getMonth(), fechaInicioAntes.getDate()),
            fechaFinContrato: new Date(fechaFinAntes.getFullYear(), fechaFinAntes.getMonth(), fechaFinAntes.getDate()),
            idDepartamento,
            salarioBase,
            otroIngreso,
            salarioDevengado: devengado,
            salud,
            pension,
            capacidadEndeudamiento: endeudamiento
          }, form));
          this.image = `data:image/png;base64,  ${data.foto}`;
        } else {
          const devengado = salarioBase + otroIngreso;
          const endeudamiento = devengado * VALOR_PORCENTAJE_30 / VALOR_PORCENTAJE_100;
          this.form.patchValue(__spreadValues({
            fechaNacimiento: fecha,
            fechaInicioContrato: new Date(fechaInicioAntes.getFullYear(), fechaInicioAntes.getMonth(), fechaInicioAntes.getDate()),
            fechaFinContrato: new Date(fechaFinAntes.getFullYear(), fechaFinAntes.getMonth(), fechaFinAntes.getDate()),
            idDepartamento,
            salarioBase,
            otroIngreso,
            salarioDevengado: devengado,
            capacidadEndeudamiento: endeudamiento,
            salud: 0,
            pension: 0
          }, form));
          this.image = `data:image/png;base64,  ${data.foto}`;
        }
      }
    });
  }
  buscarContrato(id) {
    const idContrato = id;
    const datoDeduccion = this.tipoContratos.find((item) => {
      if (item.id == idContrato) {
        return item;
      }
    });
    return datoDeduccion.deduccioneLegal;
  }
  setCampoValue() {
    this.form.get("salarioBase").valueChanges.pipe(takeUntilDestroyed(this.destroyedRef)).subscribe(() => this.calcularCampo());
    this.form.get("otroIngreso").valueChanges.pipe(takeUntilDestroyed(this.destroyedRef)).subscribe(() => this.calcularCampo());
  }
  resetConDeduccion() {
    this.form.get("salarioBase").setValue(0);
    this.form.get("otroIngreso").setValue(0);
    this.form.get("salarioDevengado").setValue(0);
    this.form.get("salud").setValue(0);
    this.form.get("pension").setValue(0);
    this.form.get("capacidadEndeudamiento").setValue(0);
  }
  resetSinDeduccion() {
    this.form.get("salarioBase").setValue(0);
    this.form.get("otroIngreso").setValue(0);
    this.form.get("salarioDevengado").setValue(0);
  }
  calcularCampo() {
    const valorBase = this.form.get("salarioBase")?.value || 0;
    const otroIngreso = this.form.get("otroIngreso")?.value || 0;
    if (this.deduccionLegal) {
      const devengado = valorBase + otroIngreso - valorBase * this.sumaPorcentaje / VALOR_PORCENTAJE_100;
      const salud = (valorBase + otroIngreso) * this.porcentajeSalud / VALOR_PORCENTAJE_100;
      const pension = (valorBase + otroIngreso) * this.porcentajePension / VALOR_PORCENTAJE_100;
      const endeudamiento = devengado * VALOR_PORCENTAJE_30 / VALOR_PORCENTAJE_100;
      this.form.patchValue({
        salarioDevengado: devengado,
        salud,
        pension,
        capacidadEndeudamiento: endeudamiento
      });
    } else {
      const devengado = valorBase + otroIngreso;
      const endeudamiento = devengado * VALOR_PORCENTAJE_30 / VALOR_PORCENTAJE_100;
      this.form.patchValue({
        salarioDevengado: devengado,
        capacidadEndeudamiento: endeudamiento,
        salud: 0,
        pension: 0
      });
    }
  }
  onFileSelected(event2) {
    const input = event2.target;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        const image = reader.result;
        this.image = image;
        const valueImage = image.split(",")[1];
        this.form.get("foto").setValue(valueImage);
      };
      reader.readAsDataURL(file);
    }
  }
  onSelected(matSelectChange) {
    const id = matSelectChange.value;
    this.getMunicipios(id);
  }
  getMunicipios(id) {
    this.municipios$ = this._locacionService.getMunicipio(id).pipe(tap((response) => {
      const valorSelected = response.data;
      const dialogData = this._matData;
      if (valorSelected && !dialogData.edit) {
        this.form.get("idMunicipio").setValue(valorSelected[0].id);
      }
    }));
  }
  onSave() {
    if (this.form.valid) {
      if (!this._matData.edit) {
        const data = this.form.getRawValue();
        const _a = data, { idDepartamento, fechaNacimiento, fechaInicioContrato, fechaFinContrato, salarioDevengado, salud, pension } = _a, form = __objRest(_a, ["idDepartamento", "fechaNacimiento", "fechaInicioContrato", "fechaFinContrato", "salarioDevengado", "salud", "pension"]);
        let fecha = this.datePipe.transform(fechaNacimiento, "yyyy-MM-dd");
        let inicio = this.datePipe.transform(fechaInicioContrato, "yyyy-MM-dd");
        const createData = __spreadValues({
          fechaNacimiento: fecha,
          fechaInicioContrato: inicio,
          fechaFinContrato: "0001-01-01"
        }, form);
        console.log(createData);
        const dialog = this.fuseService.open(__spreadValues({}, guardar));
        dialog.afterClosed().subscribe((response) => {
          if (response === "confirmed") {
            this.empleadosServices.postEmpleados(createData).subscribe((res) => {
              console.log(res);
              this.estadosDatosService.stateGrid.next(true);
              this.swalService.ToastAler({
                icon: "success",
                title: "Registro Creado o Actualizado con Exito.",
                timer: 4e3
              });
              this.closeDialog();
            }, (error) => {
              this.errorHandlerService.errorHandler(error);
            });
          } else {
            this.closeDialog();
          }
        });
      } else {
        const data = this.form.getRawValue();
        const _b = data, { idDepartamento, fechaNacimiento, fechaInicioContrato, fechaFinContrato, salarioDevengado, salud, pension } = _b, form = __objRest(_b, ["idDepartamento", "fechaNacimiento", "fechaInicioContrato", "fechaFinContrato", "salarioDevengado", "salud", "pension"]);
        let fecha = this.datePipe.transform(fechaNacimiento, "yyyy-MM-dd");
        let inicio = this.datePipe.transform(fechaInicioContrato, "yyyy-MM-dd");
        let fin = this.datePipe.transform(fechaFinContrato, "yyyy-MM-dd");
        const createData = __spreadValues({
          fechaNacimiento: fecha,
          fechaInicioContrato: inicio,
          fechaFinContrato: fin
        }, form);
        const dialog = this.fuseService.open(__spreadValues({}, guardar));
        dialog.afterClosed().subscribe((response) => {
          if (response === "confirmed") {
            this.empleadosServices.putEmpleados(createData).subscribe((res) => {
              this.estadosDatosService.stateGrid.next(true);
              this.swalService.ToastAler({
                icon: "success",
                title: "Registro actualizado con exito!",
                timer: 4e3
              });
              this.closeDialog();
            }, (error) => {
              this.swalService.ToastAler({
                icon: "error",
                title: "Ha ocurrido un error al actualizar el registro!",
                timer: 4e3
              });
            });
          } else {
            this.closeDialog();
          }
        });
      }
    }
  }
  createForm() {
    this.form = this.fb.group({
      id: [null],
      primerNombre: [""],
      segundoNombre: [""],
      primerApellido: [""],
      segundoApellido: [""],
      idTipoDoc: [""],
      numDoc: [""],
      idDepartamento: [""],
      idMunicipio: [""],
      telefono: [""],
      telefono2: [""],
      direccion: [""],
      idGenero: [""],
      correo: [""],
      cargo: [""],
      fechaNacimiento: [""],
      fechaInicioContrato: [""],
      fechaFinContrato: ["null"],
      numCuentaBancaria: [""],
      capacidadEndeudamiento: [{ value: 0, disabled: true }],
      idNivelRiesgo: [""],
      idBanco: [""],
      idTipoCuenta: [""],
      foto: [""],
      firma: [""],
      idSubEmpresa: [""],
      idTipoContrato: [""],
      salarioBase: [0],
      otroIngreso: [0],
      idDeduccionLegal: [""],
      salarioDevengado: [{ value: 0, disabled: true }],
      salud: [{ value: 0, disabled: true }],
      pension: [{ value: 0, disabled: true }],
      estado: [true]
    });
  }
  closeDialog() {
    this.dialogRef.close();
  }
};
_FormEmpleadosComponent.\u0275fac = function FormEmpleadosComponent_Factory(t) {
  return new (t || _FormEmpleadosComponent)();
};
_FormEmpleadosComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FormEmpleadosComponent, selectors: [["app-form-empleados"]], standalone: true, features: [\u0275\u0275ProvidersFeature([
  { provide: DateAdapter, useClass: DateAdapterService },
  { provide: MAT_DATE_LOCALE, useValue: "en-GB" },
  DatePipe,
  provideNgxMask(maskConfig)
]), \u0275\u0275StandaloneFeature], decls: 191, vars: 72, consts: [["noAvatar", ""], ["twoStepToggle", ""], ["picker", ""], ["data", ""], ["inicio", ""], ["fin", ""], [1, "w-full", "sm:bg-card", "sm:rounded-2xl", "sm:mx-0", "mx-auto"], [1, ""], [1, "mt-8", "text-3xl", "font-semibold", "leading-tight", "tracking-tight", "text-center"], [1, "mt-8", "space-y-8", 3, "formGroup"], [1, "group", "relative", "mx-auto", "mt-8", "flex", "h-40", "w-40", "flex-0", "rounded-full", "mb-8"], [1, "absolute", "inset-0", "hidden", "cursor-pointer", "flex-col", "items-center", "justify-center", "rounded-full", "bg-gray-800", "bg-opacity-80", "backdrop-blur", "backdrop-filter", "group-hover:flex"], [1, "text-white", 3, "svgIcon"], [1, "mx-6", "mt-2", "text-center", "font-medium", "text-white"], ["type", "file", 1, "absolute", "inset-0", "opacity-0", "cursor-pointer", 3, "change"], [4, "ngIf", "ngIfElse"], [1, "font-bold", "mb-4", "text-2xl"], [1, "flex", "mb-4"], [1, "fcursor-pointer", 3, "click"], [1, "font-medium", "leading-6"], [1, "ml-4", 3, "color", "formControlName"], [1, "flex", "flex-col", "sm:flex-row", "gap-2.5"], ["floatLabel", "always", 1, "w-full"], ["matInput", "", "placeholder", "Primer nombre", 3, "formControlName"], ["matInput", "", "placeholder", "Segundo nombre", 3, "formControlName"], ["matInput", "", "placeholder", "Primer apellido", 3, "formControlName"], ["matInput", "", "placeholder", "Segundo apellido", 3, "formControlName"], ["placeholder", "Tipo de documento", 3, "formControlName"], [4, "ngIf"], ["matInput", "", "placeholder", "N\xFAmero de identificaci\xF3n", 3, "formControlName"], ["placeholder", "G\xE9nero", 3, "formControlName"], ["matInput", "", "placeholder", "dd/mm/yyyy", 3, "matDatepicker", "formControlName"], ["matIconSuffix", "", 3, "for"], ["placeholder", "Departamento", 3, "selectionChange", "formControlName"], ["placeholder", "Ciudad", 3, "formControlName"], ["matInput", "", "placeholder", "Direcci\xF3n", 3, "formControlName"], ["matInput", "", "placeholder", "Celular", 3, "formControlName"], ["matInput", "", "placeholder", "Tel\xE9fono", 3, "formControlName"], ["matInput", "", "placeholder", "Correo electronico (usuario)", 3, "formControlName"], ["placeholder", "Empresa", 3, "formControlName"], ["matInput", "", "placeholder", "Cargo", 3, "formControlName"], ["placeholder", "Tipo de contrato", 3, "selectionChange", "formControlName"], [3, "value", 4, "ngFor", "ngForOf"], ["matInput", "", "mask", "separator.0", "thousandSeparator", ".", "placeholder", "Salario base", 3, "formControlName"], ["matInput", "", "mask", "separator.0", "thousandSeparator", ".", "placeholder", "Otros ingresos", 3, "formControlName"], ["matInput", "", "mask", "separator.0", "thousandSeparator", ".", "placeholder", "Salario devengdado", 3, "readonly", "formControlName"], ["placeholder", "Nivel de riesgo", 3, "formControlName"], ["matInput", "", "mask", "separator.0", "thousandSeparator", ".", "placeholder", "Capacidad de endeudamiento", 3, "formControlName", "readonly"], ["placeholder", "Tipo de cuenta", 3, "formControlName"], ["placeholder", "Bancos", 3, "formControlName"], ["matInput", "", "placeholder", "N\xFAmero de cuenta", 3, "formControlName"], [1, "flex", "flex-wrap", "justify-end", "gap-2.5"], ["mat-flat-button", "", 1, "sm:w-auto", "w-full", "sm:mt-6", "bg-credigray-100", "rounded-lg", "transition", "duration-200", "text-white", "font-semibold", 3, "click", "color"], ["mat-flat-button", "", 1, "sm:w-auto", "w-full", "sm:mt-6", "bg-crediblue-50", "rounded-lg", "transition", "duration-200", "text-white", "font-semibold", 3, "click", "color"], [1, "h-full", "w-full", "rounded-full", "object-cover", 3, "src", "alt"], [1, "flex", "h-full", "w-full", "items-center", "justify-center", "rounded-full", "bg-gray-200", "text-8xl", "font-semibold", "uppercase", "text-gray-600", "dark:bg-gray-700", "dark:text-gray-200"], [3, "value"], ["placeholder", "Deducciones legales", 3, "formControlName", "disabled"], ["matInput", "", "mask", "separator.0", "thousandSeparator", ".", "placeholder", "Salud", 3, "readonly", "formControlName"], ["matInput", "", "mask", "separator.0", "thousandSeparator", ".", "placeholder", "Pensi\xF3n", 3, "readonly", "formControlName"]], template: function FormEmpleadosComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 7)(2, "div", 8);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "form", 9)(5, "div", 10)(6, "div", 11);
    \u0275\u0275element(7, "mat-icon", 12);
    \u0275\u0275elementStart(8, "div", 13);
    \u0275\u0275text(9, " Cambiar foto ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "input", 14);
    \u0275\u0275listener("change", function FormEmpleadosComponent_Template_input_change_10_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.onFileSelected($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(11, FormEmpleadosComponent_ng_container_11_Template, 2, 2, "ng-container", 15)(12, FormEmpleadosComponent_ng_template_12_Template, 2, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div")(15, "p", 16);
    \u0275\u0275text(16, "Informaci\xF3n general");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 17)(18, "div", 18);
    \u0275\u0275listener("click", function FormEmpleadosComponent_Template_div_click_18_listener() {
      \u0275\u0275restoreView(_r1);
      const twoStepToggle_r3 = \u0275\u0275reference(22);
      return \u0275\u0275resetView(twoStepToggle_r3.toggle());
    });
    \u0275\u0275elementStart(19, "div", 19);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(21, "mat-slide-toggle", 20, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 21)(24, "mat-form-field", 22)(25, "mat-label");
    \u0275\u0275text(26, "Primer nombre");
    \u0275\u0275elementEnd();
    \u0275\u0275element(27, "input", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "mat-form-field", 22)(29, "mat-label");
    \u0275\u0275text(30, "Segundo nombre");
    \u0275\u0275elementEnd();
    \u0275\u0275element(31, "input", 24);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div", 21)(33, "mat-form-field", 22)(34, "mat-label");
    \u0275\u0275text(35, "Primer apellido");
    \u0275\u0275elementEnd();
    \u0275\u0275element(36, "input", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "mat-form-field", 22)(38, "mat-label");
    \u0275\u0275text(39, "Segundo apellido");
    \u0275\u0275elementEnd();
    \u0275\u0275element(40, "input", 26);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "div", 21)(42, "mat-form-field", 22)(43, "mat-label");
    \u0275\u0275text(44, "Tipo de documento");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "mat-select", 27);
    \u0275\u0275template(46, FormEmpleadosComponent_ng_container_46_Template, 2, 1, "ng-container", 28);
    \u0275\u0275pipe(47, "async");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(48, "mat-form-field", 22)(49, "mat-label");
    \u0275\u0275text(50, "N\xFAmero de identificaci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275element(51, "input", 29);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(52, "div", 21)(53, "mat-form-field", 22)(54, "mat-label");
    \u0275\u0275text(55, "G\xE9nero");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "mat-select", 30);
    \u0275\u0275template(57, FormEmpleadosComponent_ng_container_57_Template, 2, 1, "ng-container", 28);
    \u0275\u0275pipe(58, "async");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(59, "mat-form-field", 22)(60, "mat-label");
    \u0275\u0275text(61, "Fecha de nacimiento");
    \u0275\u0275elementEnd();
    \u0275\u0275element(62, "input", 31)(63, "mat-datepicker-toggle", 32)(64, "mat-datepicker", null, 2);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(66, "div")(67, "p", 16);
    \u0275\u0275text(68, "Informaci\xF3n demogr\xE1fica");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(69, "div", 21)(70, "mat-form-field", 22)(71, "mat-label");
    \u0275\u0275text(72, "Departamento");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(73, "mat-select", 33, 3);
    \u0275\u0275listener("selectionChange", function FormEmpleadosComponent_Template_mat_select_selectionChange_73_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.onSelected($event));
    });
    \u0275\u0275template(75, FormEmpleadosComponent_ng_container_75_Template, 2, 1, "ng-container", 28);
    \u0275\u0275pipe(76, "async");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(77, "mat-form-field", 22)(78, "mat-label");
    \u0275\u0275text(79, "Ciudad");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(80, "mat-select", 34);
    \u0275\u0275template(81, FormEmpleadosComponent_ng_container_81_Template, 2, 1, "ng-container", 28);
    \u0275\u0275pipe(82, "async");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(83, "div", 21)(84, "mat-form-field", 22)(85, "mat-label");
    \u0275\u0275text(86, "Direcci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275element(87, "input", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(88, "mat-form-field", 22)(89, "mat-label");
    \u0275\u0275text(90, "Celular");
    \u0275\u0275elementEnd();
    \u0275\u0275element(91, "input", 36);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(92, "div", 21)(93, "mat-form-field", 22)(94, "mat-label");
    \u0275\u0275text(95, "Tel\xE9fono");
    \u0275\u0275elementEnd();
    \u0275\u0275element(96, "input", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(97, "mat-form-field", 22)(98, "mat-label");
    \u0275\u0275text(99, "Correo electronico (usuario)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(100, "input", 38);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(101, "div")(102, "p", 16);
    \u0275\u0275text(103, "Informaci\xF3n contractual");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(104, "div", 21)(105, "mat-form-field", 22)(106, "mat-label");
    \u0275\u0275text(107, "Empresa");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(108, "mat-select", 39);
    \u0275\u0275template(109, FormEmpleadosComponent_ng_container_109_Template, 2, 1, "ng-container", 28);
    \u0275\u0275pipe(110, "async");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(111, "mat-form-field", 22)(112, "mat-label");
    \u0275\u0275text(113, "Cargo");
    \u0275\u0275elementEnd();
    \u0275\u0275element(114, "input", 40);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(115, "div", 21)(116, "mat-form-field", 22)(117, "mat-label");
    \u0275\u0275text(118, "Inicio de contrato");
    \u0275\u0275elementEnd();
    \u0275\u0275element(119, "input", 31)(120, "mat-datepicker-toggle", 32)(121, "mat-datepicker", null, 4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(123, "mat-form-field", 22)(124, "mat-label");
    \u0275\u0275text(125, "Fin de contrato");
    \u0275\u0275elementEnd();
    \u0275\u0275element(126, "input", 31)(127, "mat-datepicker-toggle", 32)(128, "mat-datepicker", null, 5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(130, "div", 21)(131, "mat-form-field", 22)(132, "mat-label");
    \u0275\u0275text(133, "Tipo de contrato");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(134, "mat-select", 41);
    \u0275\u0275listener("selectionChange", function FormEmpleadosComponent_Template_mat_select_selectionChange_134_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.selectedDeduccion($event));
    });
    \u0275\u0275template(135, FormEmpleadosComponent_mat_option_135_Template, 2, 2, "mat-option", 42);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(136, FormEmpleadosComponent_ng_container_136_Template, 8, 5, "ng-container", 28);
    \u0275\u0275elementStart(137, "div", 21)(138, "mat-form-field", 22)(139, "mat-label");
    \u0275\u0275text(140, "Salario base");
    \u0275\u0275elementEnd();
    \u0275\u0275element(141, "input", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(142, "mat-form-field", 22)(143, "mat-label");
    \u0275\u0275text(144, "Otros ingresos");
    \u0275\u0275elementEnd();
    \u0275\u0275element(145, "input", 44);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(146, FormEmpleadosComponent_ng_container_146_Template, 10, 4, "ng-container", 28);
    \u0275\u0275elementStart(147, "div", 21)(148, "mat-form-field", 22)(149, "mat-label");
    \u0275\u0275text(150, "Salario devengado");
    \u0275\u0275elementEnd();
    \u0275\u0275element(151, "input", 45);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(152, "div", 21)(153, "mat-form-field", 22)(154, "mat-label");
    \u0275\u0275text(155, "Nivel de riesgo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(156, "mat-select", 46);
    \u0275\u0275template(157, FormEmpleadosComponent_ng_container_157_Template, 2, 1, "ng-container", 28);
    \u0275\u0275pipe(158, "async");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(159, "mat-form-field", 22)(160, "mat-label");
    \u0275\u0275text(161, "Capacidad de endeudamiento");
    \u0275\u0275elementEnd();
    \u0275\u0275element(162, "input", 47);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(163, "div")(164, "p", 16);
    \u0275\u0275text(165, "Informaci\xF3n bancaria");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(166, "div", 21)(167, "mat-form-field", 22)(168, "mat-label");
    \u0275\u0275text(169, "Tipo de cuenta");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(170, "mat-select", 48);
    \u0275\u0275template(171, FormEmpleadosComponent_ng_container_171_Template, 2, 1, "ng-container", 28);
    \u0275\u0275pipe(172, "async");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(173, "div", 21)(174, "mat-form-field", 22)(175, "mat-label");
    \u0275\u0275text(176, "Bancos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(177, "mat-select", 49);
    \u0275\u0275template(178, FormEmpleadosComponent_ng_container_178_Template, 2, 1, "ng-container", 28);
    \u0275\u0275pipe(179, "async");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(180, "mat-form-field", 22)(181, "mat-label");
    \u0275\u0275text(182, "N\xFAmero de cuenta bancaria");
    \u0275\u0275elementEnd();
    \u0275\u0275element(183, "input", 50);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(184, "div", 51)(185, "button", 52);
    \u0275\u0275listener("click", function FormEmpleadosComponent_Template_button_click_185_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.closeDialog());
    });
    \u0275\u0275elementStart(186, "span");
    \u0275\u0275text(187, " Cancelar ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(188, "button", 53);
    \u0275\u0275listener("click", function FormEmpleadosComponent_Template_button_click_188_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.onSave());
    });
    \u0275\u0275elementStart(189, "span");
    \u0275\u0275text(190, " Guardar ");
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const noAvatar_r23 = \u0275\u0275reference(13);
    const picker_r24 = \u0275\u0275reference(65);
    const inicio_r25 = \u0275\u0275reference(122);
    const fin_r26 = \u0275\u0275reference(129);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx._matData.edit ? "Actualizar trabajador" : "Agregar trabajador", " ");
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx.form);
    \u0275\u0275advance(3);
    \u0275\u0275property("svgIcon", "heroicons_outline:camera");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx.form.get("foto").value)("ngIfElse", noAvatar_r23);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1(" Estado ", ctx.form.get("estado").value ? "Activo" : "Inactivo", " ");
    \u0275\u0275advance();
    \u0275\u0275property("color", "primary")("formControlName", "estado");
    \u0275\u0275advance(6);
    \u0275\u0275property("formControlName", "primerNombre");
    \u0275\u0275advance(4);
    \u0275\u0275property("formControlName", "segundoNombre");
    \u0275\u0275advance(5);
    \u0275\u0275property("formControlName", "primerApellido");
    \u0275\u0275advance(4);
    \u0275\u0275property("formControlName", "segundoApellido");
    \u0275\u0275advance(5);
    \u0275\u0275property("formControlName", "idTipoDoc");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(47, 56, ctx.tiposDocumentos$));
    \u0275\u0275advance(5);
    \u0275\u0275property("formControlName", "numDoc");
    \u0275\u0275advance(5);
    \u0275\u0275property("formControlName", "idGenero");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(58, 58, ctx.generos$));
    \u0275\u0275advance(5);
    \u0275\u0275property("matDatepicker", picker_r24)("formControlName", "fechaNacimiento");
    \u0275\u0275advance();
    \u0275\u0275property("for", picker_r24);
    \u0275\u0275advance(10);
    \u0275\u0275property("formControlName", "idDepartamento");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(76, 60, ctx.departamentos$));
    \u0275\u0275advance(5);
    \u0275\u0275property("formControlName", "idMunicipio");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(82, 62, ctx.municipios$));
    \u0275\u0275advance(6);
    \u0275\u0275property("formControlName", "direccion");
    \u0275\u0275advance(4);
    \u0275\u0275property("formControlName", "telefono");
    \u0275\u0275advance(5);
    \u0275\u0275property("formControlName", "telefono2");
    \u0275\u0275advance(4);
    \u0275\u0275property("formControlName", "correo");
    \u0275\u0275advance(8);
    \u0275\u0275property("formControlName", "idSubEmpresa");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(110, 64, ctx.empresasClientes$));
    \u0275\u0275advance(5);
    \u0275\u0275property("formControlName", "cargo");
    \u0275\u0275advance(5);
    \u0275\u0275property("matDatepicker", inicio_r25)("formControlName", "fechaInicioContrato");
    \u0275\u0275advance();
    \u0275\u0275property("for", inicio_r25);
    \u0275\u0275advance(6);
    \u0275\u0275property("matDatepicker", fin_r26)("formControlName", "fechaFinContrato");
    \u0275\u0275advance();
    \u0275\u0275property("for", fin_r26);
    \u0275\u0275advance(7);
    \u0275\u0275property("formControlName", "idTipoContrato");
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx.tipoContratos);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.deduccionLegal);
    \u0275\u0275advance(5);
    \u0275\u0275property("formControlName", "salarioBase");
    \u0275\u0275advance(4);
    \u0275\u0275property("formControlName", "otroIngreso");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.deduccionLegal);
    \u0275\u0275advance(5);
    \u0275\u0275property("readonly", true)("formControlName", "salarioDevengado");
    \u0275\u0275advance(5);
    \u0275\u0275property("formControlName", "idNivelRiesgo");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(158, 66, ctx.riesgos$));
    \u0275\u0275advance(5);
    \u0275\u0275property("formControlName", "capacidadEndeudamiento")("readonly", true);
    \u0275\u0275advance(8);
    \u0275\u0275property("formControlName", "idTipoCuenta");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(172, 68, ctx.tipoCuentas$));
    \u0275\u0275advance(6);
    \u0275\u0275property("formControlName", "idBanco");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(179, 70, ctx.bancos$));
    \u0275\u0275advance(5);
    \u0275\u0275property("formControlName", "numCuentaBancaria");
    \u0275\u0275advance(2);
    \u0275\u0275property("color", "primary");
    \u0275\u0275advance(3);
    \u0275\u0275property("color", "primary");
  }
}, dependencies: [
  MatButton,
  MatFormField,
  MatInput,
  MatLabel,
  ReactiveFormsModule,
  \u0275NgNoValidate,
  DefaultValueAccessor,
  NgControlStatus,
  NgControlStatusGroup,
  FormGroupDirective,
  FormControlName,
  AsyncPipe,
  MatOption,
  MatSelect,
  NgForOf,
  NgIf,
  MatDatepicker,
  MatDatepickerInput,
  MatDatepickerToggle,
  MatSuffix,
  MatIcon,
  NgxMaskDirective,
  MatSlideToggle
], styles: ["\n\n  .custom-dialog-container {\n  width: 100%;\n}\n@media (min-width: 1280px) {\n    .custom-dialog-container {\n    width: 50%;\n  }\n}\n/*# sourceMappingURL=form-empleados.component.css.map */"] });
var FormEmpleadosComponent = _FormEmpleadosComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FormEmpleadosComponent, { className: "FormEmpleadosComponent", filePath: "src\\app\\pages\\gestion-empleados\\empleados\\form-empleados\\form-empleados.component.ts", lineNumber: 73 });
})();

// node_modules/ng-qrcode/fesm2022/ng-qrcode.mjs
var import_qrcode = __toESM(require_browser(), 1);
function QrCodeComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "canvas", 1);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r0.styleClass);
    \u0275\u0275property("qrCode", ctx_r0.value)("qrCodeErrorCorrectionLevel", ctx_r0.errorCorrectionLevel)("qrCodeCenterImageSrc", ctx_r0.centerImageSrc)("qrCodeCenterImageWidth", ctx_r0.centerImageSize)("qrCodeCenterImageHeight", ctx_r0.centerImageSize)("qrCodeMargin", ctx_r0.margin)("width", ctx_r0.size)("height", ctx_r0.size)("ngStyle", ctx_r0.style)("darkColor", ctx_r0.darkColor)("lightColor", ctx_r0.lightColor);
  }
}
var validColorRegex = /^#(?:[0-9a-fA-F]{3,4}){1,2}$/;
var _QrCodeDirective = class _QrCodeDirective {
  constructor(viewContainerRef) {
    this.viewContainerRef = viewContainerRef;
    this.errorCorrectionLevel = _QrCodeDirective.DEFAULT_ERROR_CORRECTION_LEVEL;
    this.darkColor = "#000000FF";
    this.lightColor = "#FFFFFFFF";
    this.margin = 16;
  }
  ngOnChanges() {
    return __async(this, null, function* () {
      if (!this.value) {
        return;
      }
      if (this.version && this.version > 40) {
        console.warn("[qrCode] max version is 40, clamping");
        this.version = 40;
      } else if (this.version && this.version < 1) {
        console.warn("[qrCode] min version is 1, clamping");
        this.version = 1;
      } else if (this.version !== void 0 && isNaN(this.version)) {
        console.warn("[qrCode] version should be set to a number, defaulting to auto");
        this.version = void 0;
      }
      const canvas = this.viewContainerRef.element.nativeElement;
      if (!canvas) {
        return;
      }
      const context = canvas.getContext("2d");
      if (context) {
        context.clearRect(0, 0, context.canvas.width, context.canvas.height);
      }
      const errorCorrectionLevel = this.errorCorrectionLevel ?? _QrCodeDirective.DEFAULT_ERROR_CORRECTION_LEVEL;
      const dark = validColorRegex.test(this.darkColor) ? this.darkColor : void 0;
      const light = validColorRegex.test(this.lightColor) ? this.lightColor : void 0;
      if (isDevMode()) {
        if (!dark && this.darkColor) {
          console.error("[ng-qrcode] darkColor set to invalid value, must be RGBA hex color string, eg: #3050A1FF");
        }
        if (!light && this.lightColor) {
          console.error("[ng-qrcode] lightColor set to invalid value, must be RGBA hex color string, eg: #3050A130");
        }
      }
      yield import_qrcode.default.toCanvas(canvas, this.value, {
        version: this.version,
        errorCorrectionLevel,
        width: this.width,
        margin: this.margin,
        color: {
          dark,
          light
        }
      });
      const centerImageSrc = this.centerImageSrc;
      const centerImageWidth = getIntOrDefault(this.centerImageWidth, _QrCodeDirective.DEFAULT_CENTER_IMAGE_SIZE);
      const centerImageHeight = getIntOrDefault(this.centerImageHeight, _QrCodeDirective.DEFAULT_CENTER_IMAGE_SIZE);
      if (centerImageSrc && context) {
        if (!this.centerImage) {
          this.centerImage = new Image(centerImageWidth, centerImageHeight);
        }
        const centerImage = this.centerImage;
        if (centerImageSrc !== this.centerImage.src) {
          centerImage.src = centerImageSrc;
        }
        if (centerImageWidth !== this.centerImage.width) {
          centerImage.width = centerImageWidth;
        }
        if (centerImageHeight !== this.centerImage.height) {
          centerImage.height = centerImageHeight;
        }
        const doDrawImage = () => {
          context.drawImage(centerImage, canvas.width / 2 - centerImageWidth / 2, canvas.height / 2 - centerImageHeight / 2, centerImageWidth, centerImageHeight);
        };
        centerImage.onload = doDrawImage;
        if (centerImage.complete) {
          doDrawImage();
        }
      }
    });
  }
};
_QrCodeDirective.DEFAULT_ERROR_CORRECTION_LEVEL = "M";
_QrCodeDirective.DEFAULT_CENTER_IMAGE_SIZE = 40;
_QrCodeDirective.\u0275fac = function QrCodeDirective_Factory(t) {
  return new (t || _QrCodeDirective)(\u0275\u0275directiveInject(ViewContainerRef));
};
_QrCodeDirective.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _QrCodeDirective,
  selectors: [["canvas", "qrCode", ""]],
  inputs: {
    value: [0, "qrCode", "value"],
    version: [0, "qrCodeVersion", "version"],
    errorCorrectionLevel: [0, "qrCodeErrorCorrectionLevel", "errorCorrectionLevel"],
    width: "width",
    height: "height",
    darkColor: "darkColor",
    lightColor: "lightColor",
    centerImageSrc: [0, "qrCodeCenterImageSrc", "centerImageSrc"],
    centerImageWidth: [0, "qrCodeCenterImageWidth", "centerImageWidth"],
    centerImageHeight: [0, "qrCodeCenterImageHeight", "centerImageHeight"],
    margin: [0, "qrCodeMargin", "margin"]
  },
  features: [\u0275\u0275NgOnChangesFeature]
});
var QrCodeDirective = _QrCodeDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(QrCodeDirective, [{
    type: Directive,
    args: [{
      // eslint-disable-next-line @angular-eslint/directive-selector
      selector: `canvas[qrCode]`
    }]
  }], () => [{
    type: ViewContainerRef
  }], {
    value: [{
      type: Input,
      args: ["qrCode"]
    }],
    version: [{
      type: Input,
      args: ["qrCodeVersion"]
    }],
    errorCorrectionLevel: [{
      type: Input,
      args: ["qrCodeErrorCorrectionLevel"]
    }],
    width: [{
      type: Input
    }],
    height: [{
      type: Input
    }],
    darkColor: [{
      type: Input
    }],
    lightColor: [{
      type: Input
    }],
    centerImageSrc: [{
      type: Input,
      args: ["qrCodeCenterImageSrc"]
    }],
    centerImageWidth: [{
      type: Input,
      args: ["qrCodeCenterImageWidth"]
    }],
    centerImageHeight: [{
      type: Input,
      args: ["qrCodeCenterImageHeight"]
    }],
    margin: [{
      type: Input,
      args: ["qrCodeMargin"]
    }]
  });
})();
function getIntOrDefault(value, defaultValue) {
  if (value === void 0 || value === "") {
    return defaultValue;
  }
  if (typeof value === "string") {
    return parseInt(value, 10);
  }
  return value;
}
var _QrCodeComponent = class _QrCodeComponent {
};
_QrCodeComponent.\u0275fac = function QrCodeComponent_Factory(t) {
  return new (t || _QrCodeComponent)();
};
_QrCodeComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _QrCodeComponent,
  selectors: [["qr-code"]],
  inputs: {
    value: "value",
    size: "size",
    style: "style",
    styleClass: "styleClass",
    darkColor: "darkColor",
    lightColor: "lightColor",
    errorCorrectionLevel: "errorCorrectionLevel",
    centerImageSrc: "centerImageSrc",
    centerImageSize: "centerImageSize",
    margin: "margin"
  },
  decls: 1,
  vars: 1,
  consts: [[3, "qrCode", "qrCodeErrorCorrectionLevel", "qrCodeCenterImageSrc", "qrCodeCenterImageWidth", "qrCodeCenterImageHeight", "qrCodeMargin", "width", "height", "class", "ngStyle", "darkColor", "lightColor"], [3, "qrCode", "qrCodeErrorCorrectionLevel", "qrCodeCenterImageSrc", "qrCodeCenterImageWidth", "qrCodeCenterImageHeight", "qrCodeMargin", "width", "height", "ngStyle", "darkColor", "lightColor"]],
  template: function QrCodeComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, QrCodeComponent_Conditional_0_Template, 1, 13, "canvas", 0);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.value ? 0 : -1);
    }
  },
  dependencies: [NgStyle, QrCodeDirective],
  encapsulation: 2
});
var QrCodeComponent = _QrCodeComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(QrCodeComponent, [{
    type: Component,
    args: [{
      selector: "qr-code",
      template: `
    @if (value) {
      <canvas
        [qrCode]="value"
        [qrCodeErrorCorrectionLevel]="errorCorrectionLevel"
        [qrCodeCenterImageSrc]="centerImageSrc"
        [qrCodeCenterImageWidth]="centerImageSize"
        [qrCodeCenterImageHeight]="centerImageSize"
        [qrCodeMargin]="margin"
        [width]="size"
        [height]="size"
        [class]="styleClass"
        [ngStyle]="style"
        [darkColor]="darkColor"
        [lightColor]="lightColor"
      >
      </canvas>
    }
  `
    }]
  }], null, {
    value: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    style: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    darkColor: [{
      type: Input
    }],
    lightColor: [{
      type: Input
    }],
    errorCorrectionLevel: [{
      type: Input
    }],
    centerImageSrc: [{
      type: Input
    }],
    centerImageSize: [{
      type: Input
    }],
    margin: [{
      type: Input
    }]
  });
})();
var _QrCodeModule = class _QrCodeModule {
};
_QrCodeModule.\u0275fac = function QrCodeModule_Factory(t) {
  return new (t || _QrCodeModule)();
};
_QrCodeModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _QrCodeModule
});
_QrCodeModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  imports: [CommonModule]
});
var QrCodeModule = _QrCodeModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(QrCodeModule, [{
    type: NgModule,
    args: [{
      declarations: [QrCodeComponent, QrCodeDirective],
      imports: [CommonModule],
      exports: [QrCodeComponent, QrCodeDirective]
    }]
  }], null, null);
})();

// src/app/pages/gestion-empleados/empleados/form-qr/form-qr.component.ts
var _FormQrComponent = class _FormQrComponent {
  constructor() {
    this.dialogRef = inject(MatDialogRef);
    this._matData = inject(MAT_DIALOG_DATA);
    this.qrDatas = null;
    this.qrData = null;
    this.employee = {
      id: 1,
      name: "Juan P\xE9rez",
      email: "juan.perez@example.com",
      phone: "+1234567890"
    };
  }
  ngOnInit() {
    const data = this._matData.data;
    this.qrDatas = data;
    this.qrData = `https://admin.crediplus.com.co/pages/gestion-creditos/detalle-consumo/${data.idTipoDoc}/${data.numDoc}`;
    console.log(this.qrData);
  }
};
_FormQrComponent.\u0275fac = function FormQrComponent_Factory(t) {
  return new (t || _FormQrComponent)();
};
_FormQrComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FormQrComponent, selectors: [["app-form-qr"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 9, vars: 4, consts: [[1, "w-full", "sm:bg-card", "sm:rounded-2xl", "sm:mx-0", "mx-auto"], [1, "mt-8", "text-3xl", "font-semibold", "leading-tight", "tracking-tight", "text-center"], [1, "flex", "flex-col", "justify-center", "sm:flex-row"], ["size", "200", "errorCorrectionLevel", "M", 3, "value"], [1, "flex", "flex-wrap", "justify-center"], ["mat-flat-button", "", "mat-dialog-close", "", 1, "sm:w-auto", "w-full", "sm:mt-6", "bg-crediorange-100", "rounded-lg", "transition", "duration-200", "text-white", "font-semibold", 3, "color", "mat-dialog-close"]], template: function FormQrComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 2);
    \u0275\u0275element(4, "qr-code", 3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 4)(6, "button", 5)(7, "span");
    \u0275\u0275text(8, " Cancelar ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx.qrDatas.nombreCompleto, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("value", ctx.qrData);
    \u0275\u0275advance(2);
    \u0275\u0275property("color", "primary")("mat-dialog-close", true);
  }
}, dependencies: [
  QrCodeModule,
  QrCodeComponent,
  MatButton,
  MatDialogClose
], styles: ["\n\n  .custom-dialog-container {\n  width: 100%;\n}\n@media (min-width: 600px) {\n    .custom-dialog-container {\n    width: 33.333333%;\n  }\n}\n/*# sourceMappingURL=form-qr.component.css.map */"] });
var FormQrComponent = _FormQrComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FormQrComponent, { className: "FormQrComponent", filePath: "src\\app\\pages\\gestion-empleados\\empleados\\form-qr\\form-qr.component.ts", lineNumber: 20 });
})();

// src/app/pages/gestion-empleados/empleados/grid-empleados/grid-empleados.component.ts
var _GridEmpleadosComponent = class _GridEmpleadosComponent {
  constructor(_matDialog, estadoDatosService, empleadoService) {
    this._matDialog = _matDialog;
    this.estadoDatosService = estadoDatosService;
    this.empleadoService = empleadoService;
    this.searchTerm = "";
    this.myAngularxQrCode = null;
    this.data = [];
    this.columns = ["Estado", "Identificaci\xF3n", "Nombre completo", "Tel\xE9fono", "Empresa", "Cargo"];
    this.columnPropertyMap = {
      "Estado": "estado",
      "Identificaci\xF3n": "numDoc",
      "Nombre completo": "nombreCompleto",
      "Tel\xE9fono": "telefono",
      "Empresa": "nombreSubEmpresa",
      "Cargo": "cargo"
    };
    this.buttons = [
      {
        label: "Edici\xF3n",
        icon: "edit",
        action: (element) => {
          console.log("Editing", element);
          this.selectedData = element;
          this.onEdit();
        }
      },
      {
        label: "Ver QR",
        icon: "qr_code",
        action: (element) => {
          console.log("View", element);
          this.selectedData = element;
          this.onGenerate();
        }
      }
    ];
  }
  onNew() {
    this._matDialog.open(FormEmpleadosComponent, {
      autoFocus: false,
      data: {
        edit: false
      },
      maxHeight: "90vh",
      disableClose: true,
      panelClass: "custom-dialog-container"
    });
  }
  onEdit() {
    this._matDialog.open(FormEmpleadosComponent, {
      autoFocus: false,
      data: {
        edit: true,
        data: this.selectedData
      },
      maxHeight: "90vh",
      disableClose: true,
      panelClass: "custom-dialog-container"
    });
  }
  onGenerate() {
    this._matDialog.open(FormQrComponent, {
      autoFocus: false,
      data: {
        edit: true,
        data: this.selectedData
      },
      maxHeight: "70vh",
      disableClose: true,
      panelClass: "custom-dialog-container"
    });
  }
  getEmpleados() {
    this.subcription$ = this.empleadoService.getEmpleados().pipe(map((response) => {
      response.data.forEach((items) => {
        if (items.estado) {
          items.estado = Estados.ACTIVO;
        } else {
          items.estado = Estados.INACTIVO;
        }
      });
      return response;
    }), map((response) => {
      response.data.forEach((items) => {
        if (items) {
          items.nombreCompleto = items.primerNombre.concat(" ", items.segundoNombre ? items.segundoNombre + " " : "", items.primerApellido, " ", items.segundoApellido);
        }
      });
      return response;
    })).subscribe((response) => {
      this.data = response.data;
    });
  }
  listenGrid() {
    const refreshData$ = this.estadoDatosService.stateGrid.asObservable();
    refreshData$.subscribe((state) => {
      if (state) {
        this.getEmpleados();
      }
    });
  }
  onSearch(event2) {
    const target = event2.target;
    this.searchTerm = target.value.trim().toLowerCase();
  }
  ngOnDestroy() {
    this.subcription$.unsubscribe();
  }
  ngOnInit() {
    this.getEmpleados();
    this.listenGrid();
  }
};
_GridEmpleadosComponent.\u0275fac = function GridEmpleadosComponent_Factory(t) {
  return new (t || _GridEmpleadosComponent)(\u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(EstadosDatosService), \u0275\u0275directiveInject(EmpleadosService));
};
_GridEmpleadosComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GridEmpleadosComponent, selectors: [["app-grid-empleados"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 15, vars: 12, consts: [[1, "bg-card", "flex", "min-w-0", "flex-auto", "flex-col", "dark:bg-transparent", "sm:absolute", "sm:inset-0", "sm:overflow-hidden"], [1, "relative", "flex", "flex-0", "flex-col", "border-b", "px-6", "py-8", "sm:flex-row", "sm:items-center", "sm:justify-between", "md:px-8"], [1, "text-3xl", "font-semibold", "tracking-tight"], [1, "mt-6", "flex", "w-full", "shrink-0", "flex-col", "items-center", "sm:ml-4", "sm:mt-0", "sm:flex-row", "sm:space-x-2", "sm:w-auto"], [1, "fuse-mat-dense", "rounded-lg", "w-full", "sm:w-auto", "min-w-64", 3, "subscriptSizing"], ["matPrefix", "", 1, "icon-size-5", 3, "svgIcon"], ["matInput", "", 3, "input", "autocomplete", "placeholder"], ["mat-flat-button", "", 1, "mt-2", "w-full", "bg-crediblue-50", "rounded-lg", "transition", "duration-200", "text-white", "font-semibold", "sm:ml-4", "sm:mt-0", "sm:w-auto", 3, "click", "color"], [3, "svgIcon"], [1, "ml-2", "mr-1"], [1, "flex", "flex-auto", "overflow-hidden"], [1, "flex", "flex-auto", "flex-col", "overflow-hidden", "sm:mb-18", "sm:overflow-y-auto"], [3, "columns", "displayedColumns", "columnPropertyMap", "data", "buttons", "searchTerm"]], template: function GridEmpleadosComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
    \u0275\u0275text(3, "Trabajadores");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 3)(5, "mat-form-field", 4);
    \u0275\u0275element(6, "mat-icon", 5);
    \u0275\u0275elementStart(7, "input", 6);
    \u0275\u0275listener("input", function GridEmpleadosComponent_Template_input_input_7_listener($event) {
      return ctx.onSearch($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "button", 7);
    \u0275\u0275listener("click", function GridEmpleadosComponent_Template_button_click_8_listener() {
      return ctx.onNew();
    });
    \u0275\u0275element(9, "mat-icon", 8);
    \u0275\u0275elementStart(10, "span", 9);
    \u0275\u0275text(11, "Agregar");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(12, "div", 10)(13, "div", 11);
    \u0275\u0275element(14, "app-custom-table", 12);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275property("subscriptSizing", "dynamic");
    \u0275\u0275advance();
    \u0275\u0275property("svgIcon", "heroicons_solid:magnifying-glass");
    \u0275\u0275advance();
    \u0275\u0275property("autocomplete", "off")("placeholder", "Buscar");
    \u0275\u0275advance();
    \u0275\u0275property("color", "primary");
    \u0275\u0275advance();
    \u0275\u0275property("svgIcon", "heroicons_outline:plus");
    \u0275\u0275advance(5);
    \u0275\u0275property("columns", ctx.columns)("displayedColumns", ctx.columns)("columnPropertyMap", ctx.columnPropertyMap)("data", ctx.data)("buttons", ctx.buttons)("searchTerm", ctx.searchTerm);
  }
}, dependencies: [
  CustomTableComponent,
  MatButton,
  MatFormField,
  MatIcon,
  MatInput
] });
var GridEmpleadosComponent = _GridEmpleadosComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GridEmpleadosComponent, { className: "GridEmpleadosComponent", filePath: "src\\app\\pages\\gestion-empleados\\empleados\\grid-empleados\\grid-empleados.component.ts", lineNumber: 29 });
})();

// src/app/pages/gestion-empleados/empleados/empleados.routes.ts
var empleados_routes_default = [
  {
    path: "",
    component: GridEmpleadosComponent
  }
];
export {
  empleados_routes_default as default
};
//# sourceMappingURL=chunk-ZHHYYARH.js.map
