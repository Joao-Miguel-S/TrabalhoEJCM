import '../globals.css'
import { useNavigate } from 'react-router-dom';

import perfiMenuHamburguer from "../assets/perfilMenuHamburguer.svg"

type menuHamburguerProps ={
  aberto:boolean;
}

export default function MenuHamburguer(props:menuHamburguerProps) {
    const navigate= useNavigate();

  return (
    
    <>
    {props.aberto?(

      <div className='menuHamburguer '>

        <div id="cabecalhoHamburguer" className='flex w-full relative h-[84px] bg-[#2B2B2B] justify-center items-center'>
          <img src={perfiMenuHamburguer} className="absolute left-4"></img>
          <h6 className='montserrat text-white text-[20px]' >Usuário</h6>
        </div>

        <div id="corpoHamburguer" className='w-[85%] self-center'> 
          <p className='menuHamburguerTexto montserrat'>Editar dados</p>
          <p className='menuHamburguerTexto montserrat'>Meus pedidos</p>
          <p className='menuHamburguerTexto montserrat'>Meus produtos</p>
          <p className='menuHamburguerTexto montserrat border-none'>Meu carrinho</p>
        </div>

        <p className="cursor-pointer montserrat mt-auto mb-7 ml-7 "onClick={()=>navigate('/')}>Sair</p>

      </div>

    ): null}
    </>
  );
}