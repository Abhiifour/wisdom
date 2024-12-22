-- CreateTable
CREATE TABLE "Wisdom" (
    "id" SERIAL NOT NULL,
    "data" TEXT NOT NULL,
    "createdBy" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Comment" (
    "id" SERIAL NOT NULL,
    "data" TEXT NOT NULL,
    "createdBy" TEXT NOT NULL,
    "wisdomId" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Wisdom_id_key" ON "Wisdom"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Comment_id_key" ON "Comment"("id");

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_wisdomId_fkey" FOREIGN KEY ("wisdomId") REFERENCES "Wisdom"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
