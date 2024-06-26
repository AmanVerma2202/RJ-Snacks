import express from "express";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import { createProductController, deleteProductController, getProductController, getSingleProductController, productPhotoController, updateProductController ,productFiltersController, productCountController, productListController, searchProductController, relatedProductController, productCategoryController, braintreeTokenController, braintreePaymentController} from "../controllers/productController.js";
import formidable from "express-formidable"

const router= express.Router();

//routes
router.post('/create-product',requireSignIn,isAdmin,formidable() ,createProductController)

//get products
router.get('/get-product',getProductController)

//single product
router.get("/get-product/:slug",getSingleProductController)

//get photo
router.get("/product-photo/:pid", productPhotoController);

//delete product
router.delete("/delete-product/:pid", deleteProductController);

//update product
router.put('/update-product/:pid',requireSignIn,isAdmin,formidable() ,updateProductController)

//filter product 
router.post("/product-filters", productFiltersController)

// count product
router.get('/product-count',productCountController)

//product per page 
router.get('/product-list/:page',productListController)

// search product 
router.get('/search/:keyword',searchProductController)

// similar product 
router.get('/related-product/:pid/:cid',relatedProductController)

//category wise product 
router.get('/product-category/:slug',productCategoryController)

//payment routes
//token
router.get('/braintree/token',braintreeTokenController)

//payments
router.post('/braintree/payment',requireSignIn,braintreePaymentController)

export default router