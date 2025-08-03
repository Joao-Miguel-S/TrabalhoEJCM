import '../globals.css'
import Header from "../components/headerLoginCadastro";
import ButtonEntrar from "../components/buttonEntrar"
import ButtonEntrarCom from '../components/buttonEntrarCom';
import { useNavigate } from 'react-router-dom';

import Logo from "../assets/LogoElektro.svg"
import Senha from "../assets/Senha.svg"
import Email from "../assets/Email.svg"
import google from "../assets/google.svg"
import facebook from "../assets/facebook.svg"
import senhaVisivel from "../assets/senhaVisivel.svg"
import senhaInvisivel from "../assets/senhaInvisivel.svg"
import { useState } from 'react';

export default function Login(){
    const navigate= useNavigate();

    const [senhaVisibilidade, setsenhaVisibilidade] = useState(false);
    const [typeInputSenha,setTypeInputSenha]=useState("password");
    const [iconSenha,setIconSenha] = useState(senhaInvisivel);
    

    function verSenha(){
        setsenhaVisibilidade(!senhaVisibilidade)

        if(senhaVisibilidade){
            setTypeInputSenha("text");
            setIconSenha(senhaVisivel);
        }
        else{
            setTypeInputSenha("password");
            setIconSenha(senhaInvisivel);
        }
    }

    return(
        <div>
            <Header titulo="Entrar"></Header>
            
            <main className=" flex flex-col w-full items-center ">

                <img src={Logo} alt="" className='w-[330px] h-[330px]'/> 

                <div className="flex flex-col w-[75%] items-center">
                    <div className="flex items-center w-full border-b-1  ">
                        <img src={Email} alt="" className="size-5 "/> 
                        <input type='text' placeholder='Digite seu email' className="pl-1 w-full"></input>
                    </div>

                    <div className="flex items-center pt-3 w-full border-b-1 ">
                        <img src={Senha} alt="" className="size-5 "/> 
                        <input type={typeInputSenha} placeholder='***' className="pl-1 w-full"></input>
                        <img src={iconSenha} alt="" className="size-5 " onClick={()=>verSenha()}/> 
                    </div>
                    

                    <p className=' montserrat self-end font-[400] underline style-regular pt-3'>Esqueci minha senha</p>
                </div>

                <ButtonEntrar texto='Entrar'></ButtonEntrar>

                <div className="flex justify-around w-full mt-8">
                    <ButtonEntrarCom caminho={facebook} pagina="login" />
                    <p>ou</p>
                    <ButtonEntrarCom caminho={google} pagina="login" />
                </div>
                
                <p className='mt-10 montserrat text-[#0271A0] underline font-[400] style-regular cursor-pointer' onClick={()=>navigate('/cadastro')}>Não possui cadastro? Cadastre-se!</p>
            </main>
        </div>



    )
}