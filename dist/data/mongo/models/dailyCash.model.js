"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.DailyCashModel = void 0;
const mongoose_1 = __importStar(require("mongoose"));
const dailyCashSchema = new mongoose_1.default.Schema({
    importeInicioCaja: {
        type: Number,
        required: [true, "El importe inicial de la caja es requerido"],
    },
    estado: {
        type: Boolean,
        default: true,
    },
    idSucursal: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Sucursal",
        required: [false, "El ID de la sucursal es requerido"],
    },
    fechaHoraInicio: {
        type: Date,
        required: [true, "La fecha y hora de inicio es requerida"],
    },
    fechaHoraCierre: {
        type: Date,
    },
    idUsuario: {
        type: String,
        required: false,
    },
    observaciones: {
        type: String,
    },
    validacionTotalEfectivo: {
        type: Number,
    },
    importeCierreCaja: {
        type: Number,
    },
    totalVentas: {
        type: Number,
    },
    totalProductosVendidos: {
        type: Number,
    },
    totalGastos: {
        type: Number,
    },
    organizacion: {
        type: String,
        required: [true, "La organizacion es requerida"],
    },
    transacciones: {
        type: Array,
        required: false,
    },
    totalCaja: {
        type: Number,
        required: false,
    }
}, {
    timestamps: true, // createdAt y updatedAt automáticos
});
exports.DailyCashModel = mongoose_1.default.model('DailyCash', dailyCashSchema);
//# sourceMappingURL=dailyCash.model.js.map