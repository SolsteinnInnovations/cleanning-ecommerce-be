"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Productroutes = void 0;
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const controller_1 = require("./controller");
const validationResult_1 = require("../../middlewares/validationResult");
const fileValidation_1 = require("../../middlewares/fileValidation");
class Productroutes {
    static get routes() {
        const router = (0, express_1.Router)();
        const controller = new controller_1.ProductController();
        // Definir las rutas
        router.post("/", [
            (0, express_validator_1.body)("*.codigo", "El código es obligatorio").not().isEmpty(),
            (0, express_validator_1.body)("*.nombre", "El nombre es obligatorio").not().isEmpty(),
            (0, express_validator_1.body)("*.nombre", "El nombre debe tener 3 caracteres como minimo").isLength({ min: 3 }),
            (0, express_validator_1.body)("*.precioVenta", "El precio de venta es obligatorio").not().isEmpty(),
            (0, express_validator_1.body)("*.precioLista", "El precio de lista es obligatorio").not().isEmpty(),
            (0, express_validator_1.body)("*.poseeIva", "El campo poseeIva es obligatorio").not().isEmpty(),
            (0, express_validator_1.body)("*.categoria", "El campo categoria es obligatorio").not().isEmpty(),
            (0, express_validator_1.body)("*.marca", "El campo marca es obligatorio").not().isEmpty(),
            (0, express_validator_1.body)("*.iva")
                .optional()
                .isFloat({ gt: 0 }).withMessage("El campo iva debe ser mayor a 0")
                .isFloat({ lt: 100 }).withMessage("El campo iva debe ser menor a 100"),
            (0, express_validator_1.body)("*.stock", "El campo stock es obligatorio").not().isEmpty(),
            (0, express_validator_1.body)("*.stock", "El campo debe ser mayor a 0").isInt({ gt: 0 }),
            validationResult_1.validarCampos,
        ], controller.createProduct);
        router.post("/bulk-upload", [
            (0, fileValidation_1.fileValidation)("xlsx"),
            validationResult_1.validarCampos
        ], controller.bulkUploadProducts);
        router.get("/", controller.getProducts);
        router.get("/low", controller.lowStockProducts);
        router.get("/:term", controller.getProduct);
        router.put("/:id", [
            (0, express_validator_1.param)('id').isMongoId().withMessage('ID inválido'),
            (0, express_validator_1.body)("codigo", "El código es obligatorio").not().isEmpty().optional(),
            (0, express_validator_1.body)("nombre", "El nombre es obligatorio").not().isEmpty().optional(),
            (0, express_validator_1.body)("nombre", "El nombre debe tener 3 caracteres como minimo").isLength({ min: 3 }).optional(),
            (0, express_validator_1.body)("precioVenta", "El precio de venta es obligatorio").not().isEmpty().optional(),
            (0, express_validator_1.body)("precioLista", "El precio de lista es obligatorio").not().isEmpty().optional(),
            (0, express_validator_1.body)("poseeIva", "El campo poseeIva es obligatorio").not().isEmpty().optional(),
            validationResult_1.validarCampos,
        ], controller.updateProduct);
        router.delete('/:id', controller.deleteProduct);
        return router;
    }
}
exports.Productroutes = Productroutes;
//# sourceMappingURL=routes.js.map