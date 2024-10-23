import express from "express";
import { PrismaClient } from "@prisma/client";
const app = express();

app.use(express.json());
const client = new PrismaClient();

//creating a budget list
app.post("/budget", async (req, res) => {
  const { titleId, title, quantity, price } = req.body;
  const newBudget = await client.budget.create({
    data: { title: titleId, title: title, quantity: quantity, price: price },
  });
  res
    .status(201)
    .json({ message: "budget created successfully", data: newBudget });
});

//getting all the budgets
app.get("/budget", (req, res) => {
  res.send("getting a budget list");
});

//getting one budget
app.get("/budget/:title", (req, res) => {
  res.send("getting one  budget list");
});
//updating the bugdet list
app.patch("/budget", (req, res) => {
  res.send("updating one  budget list");
});
//deleting a budget list
app.delete("/budget", (req, res) => {
  res.send("deleting one  budget list");
});

app.listen(3000, () => {
  console.log("app is running on port 3000");
});
