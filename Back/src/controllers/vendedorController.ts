import { Prisma, PrismaClient } from "../generated/prisma";
import { Request, Response } from "express";
import {Mailer} from "../config/mailer"
import auth from "../config/auth";

const prisma = new PrismaClient();

export class VedendorController{

    public static async createVendedor(request: Request, response: Response){
        try{
            const {nome,email,numeroTelefone,endereco,senha}=request.body;
            const { hash, salt } = auth.generatePassword(senha);

            const createInput: Prisma.VendedorCreateInput={
                nome: nome,
                email:email,
                numeroTelefone:numeroTelefone,
                endereco: endereco,
                hash:hash,
                salt:salt
            }

            const createdVendedor = await prisma.vendedor.create({
                data: createInput,
            });

            const token = auth.generateJWT(createdVendedor);

            const vendedorToken={
                vendedor: createdVendedor,
                token: token
            }


            response.status(201).json(vendedorToken);
                    
            Mailer.sendEmail(createInput.email,"Conta","Conta criada com sucesso");
        }
        catch(erro: any){
            
            response.status(500).json({message: erro.message });
        }
    }

    public static async readVendedor(request: Request, response: Response){
        try {
			const { id } = request.params;

            if (request.user !== id) 
                return response.status(403).json({ message: "Acesso negado. Esse recurso não pertence a você." });

            const foundVendedor = await prisma.vendedor.findUnique({
                where:{
                    id: id
                }
            });
            
		if (!foundVendedor) 
			return response.status(404).json({ message: "Vendedor não encontrado" });

        const { hash, salt, ...userData } = foundVendedor;
		response.status(201).json(userData);

		} 
        catch (erro: any) {
			response.status(500).json({ message: erro.message });
		}
    }

    public static async updateVendedor(request: Request, response: Response) {
		try {
            
			const { id } = request.params;
			const { nome,email,numeroTelefone,avaliacao,endereco} = request.body;

            if (request.user !== id) 
                return response.status(403).json({ message: "Acesso negado. Esse recurso não pertence a você." });
  
			const createInput: Prisma.VendedorUpdateInput = {
                nome: nome,
                email:email,
                numeroTelefone:numeroTelefone,
                avaliacao: avaliacao,
                endereco: endereco
			};

			const updatedVendedor = await prisma.vendedor.update({
				data: createInput,
				where: {
					id: id,
				},
			});

        if (!updatedVendedor) 
			return response.status(404).json({ message: "Vendedor não encontrado" });

        const { hash, salt, ...userData } = updatedVendedor;
			response.status(200).json(userData);
		} 
        catch (erro: any) {
			response.status(500).json({ message: erro.message });
		}
	}

    public static async deleteVendedor(request: Request, response: Response) {
		try {
			const { id } = request.params;

            if (request.user !== id) 
                return response.status(403).json({ message: "Acesso negado. Esse recurso não pertence a você." });
            
			const deletedVendedor = await prisma.vendedor.delete({
				where: {
					id: id,
				},
			});

			response.status(200).json(deletedVendedor);
		} 
        catch (erro: any) {

			response.status(500).json({ message: erro.message });
		}
	}



    
}