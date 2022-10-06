import express from "express";
import { startDatabase } from "./database";

import productsRoutes from "./routes/products.routes";
import categoriesRoutes from "./routes/categories.routes";

const app = express();

app.use(express.json());

app.use('/categories', categoriesRoutes)
app.use('/products', productsRoutes)

export default app.listen(3000, () => {
  console.log("Server running");
  startDatabase()
});
