import database from "../../database";

const createProductsServices = async (name, price, category_id) =>{

    try {
        const res = await database.query(
            `INSERT INTO 
                products(name, price, category_id) 
            VALUES
                ($1, $2, $3) 
            RETURNING *`,
            [name, price, category_id]
        );
        return res.rows[0];
        
    } catch (error) {
        throw new Error(error);
    }

};


export default createProductsServices;