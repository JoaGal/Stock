require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.DB_PORT;
const cors = require("cors");
const userRoutes = require("./src/routes/users");
const productsRoutes = require("./src/routes/products");

app.use(cors());
app.use(express.json());

app.use("/users", userRoutes);
app.use("/products", productsRoutes);

app.get("/", (req, res) => {
    res.send("Welcome to the Api Stock!");
});

app.listen(port, () => console.log(`Server listening on port ${port}!`));
