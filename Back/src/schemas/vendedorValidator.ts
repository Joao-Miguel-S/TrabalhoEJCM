import z from "zod";

const vendedor = z.object({
    nome:z.string().min(5,"Quantidade minima 5 caracteres").max(50,"Quantidade maxima 50 caracteres").trim(),
    email:z.email("Email invalido").trim(),
    numeroTelefone: z.string().trim().min(11,"Quantidade minima 11 caracteres").max(13,"Quantidade maxima 13 caracteres").optional(),
    endereco: z.string().trim().optional(),
    senha: z.string().min(8,"Quantidade minima 8 caracteres")

})

const criarVendedor = vendedor.required({
    email:true,
    nome:true,
})

const atualizarVendedor = vendedor.partial().omit({
    senha:true
});

const vendedorParams = z.object({
    id: z.uuid().trim()
}).required()

export default{
    criarVendedor,
    atualizarVendedor,
    vendedorParams,
}