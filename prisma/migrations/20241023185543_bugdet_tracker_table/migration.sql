-- CreateTable
CREATE TABLE "budget_tracker" (
    "titleId" SERIAL NOT NULL,
    "Title" TEXT NOT NULL,
    "Quantity" INTEGER NOT NULL,
    "Price" DECIMAL(65,30) NOT NULL,

    CONSTRAINT "budget_tracker_pkey" PRIMARY KEY ("titleId")
);

-- CreateIndex
CREATE UNIQUE INDEX "budget_tracker_titleId_key" ON "budget_tracker"("titleId");
