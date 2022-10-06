import { response } from "express";
import createCategoriesServices from "../services/categories/createCategories.services";
import deleteCategoriesServices from "../services/categories/deleteCategories.services";
import listCategoriesServices from "../services/categories/listCategories.services";
import listCategoriesIDServices from "../services/categories/listCategoriesID.services";
import updateCategoriesServices from "../services/categories/updateCategories.controller";



export const createCategoriesController = async (request, response) =>{
    
    const { name } = request.body;
      
    try {

        const category = await createCategoriesServices(name);


        const respost = {
            category: category,
            message: 'Category criada com sucesso'
        }
        

        return response.status(201).json(respost);
        
    } catch (error) {
        return response.status(400).json({
            message: error.message
        })
    }
}



export const listCategoriesController = async (request, response) =>{
 
    try {
        const categories = await listCategoriesServices();

        return response.json(categories)

    } catch (error) {
        return response.status(400).json({
            message: error.message
        })
    }

}


export const listCategoriesIDController = async (request, response) =>{
     const { id } = request.params

    try {
        const categories = await listCategoriesIDServices(id);

        return response.status(200).json(categories)

    } catch (error) {
        return response.status(400).json({
            message: error.message
        })
    }

}

export const updateCategoriesController = async (request, response) =>{
    const { id } = request.params
    const {name} = request.body

   try {   

       const updated = await updateCategoriesServices(id, name);  

       return response.json(updated)

   } catch (error) {
       return response.status(400).json({
           message: error.message
       })
   }

}

export const deleteCategoriesController = async (request, response) =>{
    const { id } = request.params  

   try {
       const deleted = await deleteCategoriesServices(id);

       return response.status(204).json()

   } catch (error) {
       return response.status(400).json({
           message: error.message
       })
   }

}