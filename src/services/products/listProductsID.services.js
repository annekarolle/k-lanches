import database from "../../database";



const listProductsIDServices = async (uuid) =>{

    try {      
        const res = await database.query(`SELECT * FROM products WHERE id = $1`,[uuid]);

        return res.rows[0];
        
    } catch (error) {
        throw new Error(error);
    }

}

export default listProductsIDServices