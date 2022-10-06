import database from "../../database";

const deleteProductsServices = async (id) => {
  try {
    
    const res = await database.query(`DELETE FROM products WHERE id = $1`, [id]);

    return res.rows[0];

  } catch (error) {
    throw new Error(error);
  }
};

export default deleteProductsServices;
