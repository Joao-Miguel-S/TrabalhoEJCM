-- CreateTable
CREATE TABLE "Vendedor" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "numeroTelefone" TEXT NOT NULL,
    "avaliacao" INTEGER NOT NULL,
    "endereco" TEXT NOT NULL,

    CONSTRAINT "Vendedor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Produto" (
    "idProd" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "genero" TEXT NOT NULL,
    "dataPublicacao" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "preco" DOUBLE PRECISION NOT NULL,
    "descricao" TEXT NOT NULL,
    "idVendedor" TEXT NOT NULL,

    CONSTRAINT "Produto_pkey" PRIMARY KEY ("idProd")
);

-- CreateIndex
CREATE UNIQUE INDEX "Vendedor_email_key" ON "Vendedor"("email");

-- AddForeignKey
ALTER TABLE "Produto" ADD CONSTRAINT "Produto_idVendedor_fkey" FOREIGN KEY ("idVendedor") REFERENCES "Vendedor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
