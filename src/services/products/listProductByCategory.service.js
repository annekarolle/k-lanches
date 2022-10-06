
import database from "../../database";


const selectProductByCategory= async (category_id)=>{

    try {
        const res = await database.query(`
        SELECT 
            products.name,
            products.price,
            categories.name AS category   
        FROM
            products
        RIGHT JOIN categories ON categories.id = products.category_id
        WHERE categories.id = $1`, [category_id]);

      
        return res.rows;
        
    } catch (error) {
        throw new Error(error);
    }


}

export default selectProductByCategory