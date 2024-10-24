import { PrismaClient } from "@prisma/client";
const client = new PrismaClient();

const createBudget = async (req, res) => {
  const { titleId, title, quantity, price } = req.body;
  const newBudget = await client.budget.create({
    data: { title: titleId, title: title, quantity: quantity, price: price },
  });
  res
    .status(201)
    .json({ message: "budget created successfully", data: newBudget });
};

//getting all contacts
const getAllBudget = async (req, res) => {
  try {
    const allBudget = await client.budget.findMany();
    if (allBudget.length <= 0) {
      res.status(204).json({ message: "no budget available" });
    } else res.status(200).json({ data: allBudget });
  } catch (e) {
    res.status(500).json({ message: "server error" });
  }
};

//getting one budget

const getBudget = async (req, res) => {
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
};

//updating budget

const updateBuget = async (req, res) => {
  const wantedTitle = req.params.title;
  const { titleId, title, quantity, price } = req.body;
  try {
    let updatedBudget;
    if (titleId) {
      updatedBudget = await client.budget.update({
        where: { title: wantedTitle },
        data: { titleId },
      });
    }
    if (title) {
      updatedBudget = await client.budget.update({
        where: { title: wantedTitle },
        data: { title },
      });
    }
    if (quantity) {
      updatedBudget = await client.budget.update({
        where: { title: wantedTitle },
        data: { quantity },
      });
    }
    if (price) {
      updatedBudget = await client.budget.update({
        where: { title: wantedTitle },
        data: { price },
      });
    }
    res
      .status(200)
      .json({ message: "budget updated successfully", data: updatedBudget });
  } catch (e) {
    res.status(500).json({ message: "server error" });
  }
};
//deleting a budget

const deleteBudget = async (req, res) => {
  const titleParam = req.params.title;
  try {
    await client.budget.delete({
      where: { title: titleParam },
    });
    res.status(200).json({ message: "budget  deleted successfully" });
  } catch (e) {
    res.status(500).json({ message: "server error" });
  }
};

export { createBudget, getAllBudget, getBudget, updateBuget, deleteBudget };
