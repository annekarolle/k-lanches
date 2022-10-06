import { request, response } from "express";
import createProductsServices from "../services/products/createProducts.services";
import deleteProductsServices from "../services/products/deleteProducts.services";
import selectProductByCategory from "../services/products/listProductByCategory.service";
import listProductsServices from "../services/products/listProducts.services";
import listProductsIDServices from "../services/products/listProductsID.services"
import updateProductsServices from "../services/products/updateProducts.services";

export const createProductsController = async (request, response) =>{
    
    const { name, price, category_id } = request.body;
      
    try {

        const product = await createProductsServices(name, price, category_id);

        const respost = {
            product: product,
            message: 'Product criado com sucesso'
        }

        return response.status(201).json(respost);
        
    } catch (error) {
        return response.status(400).json({
            message: error.message
        })
    }
}


export const listProductsController = async (request, response) =>{
 
    try {
        const categories = await listProductsServices();

        return response.json(categories)

    } catch (error) {
        return response.status(400).json({
            message: error.message
        })
    }

}


export const listProductsIDController = async (request, response) =>{
     const { uuid } = request.params    
 

    try {
        const categories = await listProductsIDServices(uuid);

        return response.status(200).json(categories)

    } catch (error) {
        return response.status(400).json({
            message: error.message
        })
    }

}

export const updateProductsController = async (request, response) =>{
    const { uuid } = request.params
    const body = request.body

   try {   

       const updated = await updateProductsServices(uuid, body);  

       return response.json(updated)

   } catch (error) {
       return response.status(400).json({
           message: error.message
       })
   }

}

export const deleteProductsController = async (request, response) =>{
    const { uuid } = request.params  

   try {
       const deleted = await deleteProductsServices(uuid);

       return response.status(204).json()

   } catch (error) {
       return response.status(400).json({
           message: error.message
       })
   }

}


export const listProductByCategoryController = async( request, response) =>{

    const  {category_id}  = request.params    
    
    try {
        const categories = await selectProductByCategory(category_id);

        return response.status(200).json(categories)

    } catch (error) {
        return response.status(400).json({
            message: error.message
        })
    }   

}