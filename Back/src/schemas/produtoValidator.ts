import z, { uuid } from "zod";

const produto = z.object({
    nome:z.string().min(5,"Quantidade minima 5 caracteres").max(50,"Quantidade maxima 50 caracteres").trim(),
    genero:z.string().min(5,"Quantidade minima 5 caracteres").max(50,"Quantidade maxima 50 caracteres").trim(),
    preco:z.preprocess((val)=>Number(val),z.number().min(0)),
    descricao: z.string().min(5,"Quantidade minima 5 caracteres").max(50,"Quantidade maxima 50 caracteres").trim(),
    idVendedor: uuid().trim()

})

const criarProduto = produto.required();

const atualizarProduto = produto.partial().omit({
    idVendedor:true,
    
});

const readProduto = z.object({
    id: z.uuid().trim(),
}).required()

const produtoParams = z.object({
    id: z.uuid().trim(),
    idVendedor:z.uuid().trim()
}).required()


export default{
    criarProduto,
    atualizarProduto,
    produtoParams,
    readProduto
}