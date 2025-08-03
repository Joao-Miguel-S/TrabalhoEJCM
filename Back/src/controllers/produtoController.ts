import { Prisma, PrismaClient } from "../generated/prisma";
import { Request, Response } from "express";


const prisma = new PrismaClient();

export class ProdutoController{

    public static async createProduto(request: Request, response: Response){
        try{
            const {nome,genero,preco,descricao,idVendedor}=request.body;
          
            if (request.user !== idVendedor) 
                return response.status(403).json({ message: "Acesso negado. Esse recurso não pertence a você." });
            
            const imagePath=  `/uploads/photos/${request.file?.filename}`;

            const createInput: Prisma.ProdutoCreateInput={
                nome: nome,
                genero:genero,
                preco: parseFloat(preco),
                descricao: descricao,
                vendedor:{
                    connect:{
                        id: idVendedor
                    }
                },
                imagem: imagePath
            }

            const createdProduto = await prisma.produto.create({
                data: createInput,
            });
            response.status(201).json(createdProduto);
            
        }
        catch(erro: any){
            
            response.status(500).json({message: erro.message });
        }
    }

    public static async readProduto(request: Request, response: Response){
        try {
            const { id} = request.params;

            const foundProduto = await prisma.produto.findUnique({
                where:{
                    idProd: id
                }
            })
            response.status(201).json(foundProduto);
        } 
        catch (erro: any) {
            response.status(500).json({ message: erro.message });
        }
    }

    public static async updateProduto(request: Request, response: Response) {
        try {
            const { id,idVendedor  } = request.params;
            const { nome,genero,preco,descricao} = request.body;

            if (request.user !== idVendedor) 
                return response.status(403).json({ message: "Acesso negado. Esse recurso não pertence a você." });

            const createInput: Prisma.ProdutoUpdateInput = {
                nome: nome,
                genero:genero,
                preco: preco,
                descricao: descricao,
            };

            const updatedProduto= await prisma.produto.update({
                data: createInput,
                where: {
                    idProd: id,
                },
            });

            response.status(200).json(updatedProduto);
        } 
        catch (erro: any) {
            response.status(500).json({ message: erro.message });
        }
    }

    public static async updateProdutoImagem(request: Request, response: Response){
        try {
            const { id,idVendedor } = request.params;


            if (request.user !== idVendedor) 
                return response.status(403).json({ message: "Acesso negado. Esse recurso não pertence a você." });

            const imagePath=  `/uploads/photos/${request.file?.filename}`;

            const createInput: Prisma.ProdutoUpdateInput = {
                imagem:imagePath
            };

            const updatedProduto= await prisma.produto.update({
                data: createInput,
                where: {
                    idProd: id,
                },
            });

            response.status(200).json(updatedProduto);
        } 
        catch (erro: any) {
            response.status(500).json({ message: erro.message });
        }
    }

    public static async deleteProduto(request: Request, response: Response) {
        try {
            const { id,idVendedor } = request.params;

            if (request.user !== idVendedor) 
                return response.status(403).json({ message: "Acesso negado. Esse recurso não pertence a você." });

            const deletedProduto = await prisma.produto.delete({
                where: {
                    idProd: id,
                },
            });

            response.status(200).json(deletedProduto);
        } 
        catch (erro: any) {
            response.status(500).json({ message: erro.message });
        }
    }


   
}