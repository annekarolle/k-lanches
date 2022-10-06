import database from "../../database";

const updateProductsServices = async (id, body) => {
  try {
    if(body.id){
      delete body['id']
  }

  let query = 'UPDATE products SET '
  const keys = Object.keys(body)
  const values = Object.values(body)

  keys.forEach((key, index) => {
    
      query += `${key} = $${index+=1}, `
  })

  query = query.slice(0, -2)
  
  query += ` WHERE id = $${keys.length+=1} RETURNING *;`
  
  const res = await database.query(
      query,
      [...values, id]
  )

  if(res.rowCount === 0){
      throw new Error('User not found')
  } 
  
    return {
      message: "Product updated",
      product: res.rows[0],
    };

  } catch (error) {
    throw new Error(error);
  }
};

export default updateProductsServices;
