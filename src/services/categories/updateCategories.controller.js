
import database from "../../database"

const updateCategoriesServices = async  (id, name) =>{
     try { 
      
        const res = await database.query(
            `UPDATE categories SET name = $1  WHERE id = $2 RETURNING *`, [name, id]);

            if (res.rows.length === 0) {
               throw "User Not Found";
             }

        return {
         message: "Category updated",  
         category: res.rows[0]
      };
        
       
     } catch (error) {
        throw new Error(error)
     }



}

export default updateCategoriesServices