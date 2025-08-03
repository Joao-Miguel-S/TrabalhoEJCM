import {Router} from "express";
import { ProdutoController } from "../controllers/produtoController";
import { VedendorController } from "../controllers/vendedorController";
import { validateBody, validateParams } from "../middlewares/validate";
import vendedorValidator from "../schemas/vendedorValidator";
import produtoValidator from "../schemas/produtoValidator";
import { authenticate } from "../middlewares/authentication";
import {photoUpload} from "../config/uploader"

const router = Router();


//rotas do Vendedor
router.post("/vendedor",validateBody(vendedorValidator.criarVendedor), VedendorController.createVendedor);
router.get("/vendedor/:id",authenticate,validateParams(vendedorValidator.vendedorParams), VedendorController.readVendedor);
router.put("/vendedor/:id",authenticate,validateBody(vendedorValidator.atualizarVendedor),validateParams(vendedorValidator.vendedorParams), VedendorController.updateVendedor);
router.delete("/vendedor/:id",authenticate,validateParams(vendedorValidator.vendedorParams),VedendorController.deleteVendedor);



//rotas dos Produtos
router.post("/produto",authenticate,photoUpload.single("imagem"),validateBody(produtoValidator.criarProduto),ProdutoController.createProduto);
router.get("/produto/:id/",validateParams(produtoValidator.readProduto),ProdutoController.readProduto);
router.put("/produto/:id/:idVendedor",authenticate,photoUpload.single("imagem"),validateBody(produtoValidator.atualizarProduto),validateParams(produtoValidator.produtoParams),ProdutoController.updateProduto);
router.put("/produtoImagem/:id/:idVendedor",authenticate,photoUpload.single("imagem"),validateParams(produtoValidator.produtoParams),ProdutoController.updateProdutoImagem);
router.delete("/produto/:id/:idVendedor",authenticate,validateParams(produtoValidator.produtoParams),ProdutoController.deleteProduto);

export default router
