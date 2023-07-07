require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT;
const mysql = require("mysql");
const cors = require("cors");


app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
}); 


app.listen(port, () => console.log(`Server listening on port ${port}!`));

 //Insert Client 
app.post("/api/insert", (req, res) => {
  const product = req.body.product;
  const amount = req.body.amount;
  const price = req.body.price;
  db.query(
    "INSERT INTO Products (product, amount, price) VALUES (?, ?, ?)",
    [product, amount, price],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values inserted");
      }
    }
  );
});


//Get Clients
app.get("/api/clients", ({res}) => {
  db.query("SELECT * FROM Products", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});


//Update Client
app.put("/api/update", (req, res) => {
  const id = req.body.id;
  const product = req.body.product;
  const amount = req.body.amount;
  const price = req.body.price;
  db.query(
    "UPDATE Products SET product = ?, amount = ?, price = ? WHERE id = ?",
    [product, amount , price, id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
}
);


//Delete Client
app.delete("/api/delete/:id", (req, res) => {
  const id = req.params.id;
  
  db.query("DELETE FROM Products WHERE id = ?", id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
}
);
