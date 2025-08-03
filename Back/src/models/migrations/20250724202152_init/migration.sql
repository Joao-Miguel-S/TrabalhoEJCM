-- DropForeignKey
ALTER TABLE "Produto" DROP CONSTRAINT "Produto_idVendedor_fkey";

-- AddForeignKey
ALTER TABLE "Produto" ADD CONSTRAINT "Produto_idVendedor_fkey" FOREIGN KEY ("idVendedor") REFERENCES "Vendedor"("id") ON DELETE CASCADE ON UPDATE CASCADE;
