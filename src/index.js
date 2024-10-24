import express from "express";

import BudgetRouter from "./routes/budget.routes.js";

const app = express();

app.use(express.json());

app.use("/budget", BudgetRouter);

app.listen(3000, () => {
  console.log("app is running on port 3000");
});
