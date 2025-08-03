import '../globals.css'
import coracaoVazio from "../assets/coracao.svg"
import coracaoPintado from "../assets/coracaoPintado.svg"
import { useState } from 'react';


type boxProdutoProps={
    src:string;
    nomeProduto:string;
    precoProduto: string;
}


export default function boxProduto(props: boxProdutoProps){
    const [marcado,setMarca]=useState(false)
    const [situacaoCoracao,setCoracao]=useState(coracaoVazio);

    function mudarCoracao(){
       
        const novoEstado: boolean = !marcado;
        setMarca(novoEstado);
        
        if(novoEstado)
            setCoracao(coracaoPintado);
        else
            setCoracao(coracaoVazio);
     
    }

    return (
        <div className='boxProduto'>

            <img src={props.src} className='m-1 rounded-[15px]' draggable="false" ></img>
            <div className='flex justify-around'>
                <div>
                    <p className='montserrat font-normal text-[#2B2B2B] text-[13px] mb-2'>{props.nomeProduto}</p>
                    <p className='montserrat font-bold text-[15px] mb-1'>{props.precoProduto}</p> 
                </div>
                <img src={situacaoCoracao} className='w-[22px] h-[20xp] cursor-pointer' draggable="false"onClick={mudarCoracao}></img>
            </div>
            
        </div>
    )
}