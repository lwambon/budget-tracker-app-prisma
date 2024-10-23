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
app.get("/budget", async (req, res) => {
  try {
    const allBudget = await client.budget.findMany();
    if (allBudget.length <= 0) {
      res.status(204).json({ message: "no budget available" });
    } else res.status(200).json({ data: allBudget });
  } catch (e) {
    res.status(500).json({ message: "server error" });
  }
});

//getting one budget
app.get("/budget/:title", async (req, res) => {
  const titleParam = req.params.title;
  try {
    const budget = await client.budget.findFirst({
      where: { title: titleParam },
    });

    if (!budget) {
      return res
        .status(404)
        .json({ message: `Budget with title "${titleParam}" not found` });
    }

    res.status(200).json({ data: budget });
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: "Server error", details: e.message });
  }
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
