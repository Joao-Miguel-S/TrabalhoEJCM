/*
  Warnings:

  - You are about to drop the column `imagemCaminho` on the `Produto` table. All the data in the column will be lost.
  - Added the required column `imagem` to the `Produto` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Produto" DROP COLUMN "imagemCaminho",
ADD COLUMN     "imagem" TEXT NOT NULL;
