import '../globals.css'
import Header from "../components/headerLoginCadastro";
import ButtonEntrarCom from '../components/buttonEntrarCom';
import InputCadastro from '../components/inputCadastro';
import ButtonEntrar from '../components/buttonEntrar';

import google from "../assets/google.svg"
import facebook from "../assets/facebook.svg"

export default function Cadastro(){
    return( 
        <div>
            <Header titulo='Cadastro'></Header>
            <main className='flex flex-col justify-center items-center mt-10' >

                <div className='flex justify-around items-end w-full '>
                    <ButtonEntrarCom pagina='cadastro' caminho={facebook}></ButtonEntrarCom>
                    <p className=''>ou</p>
                    <ButtonEntrarCom pagina='cadastro' caminho={google}></ButtonEntrarCom>
                </div>

                <div className='w-[70%] items-center mt-10'>
                    <InputCadastro placeholder='Digite seu nome' campoNome='Nome' tipo='text'></InputCadastro>
                    <InputCadastro placeholder='Digite seu cpf' campoNome='CPF' tipo='text'></InputCadastro>
                    <InputCadastro placeholder='Digite seu telefone' campoNome='Telefone' tipo='text'></InputCadastro>
                    <InputCadastro placeholder='Digite seu email' campoNome='E-mail' tipo='text'></InputCadastro>
                    <InputCadastro placeholder='Digite seu senha' campoNome='Senha' tipo='password'></InputCadastro>
                    <InputCadastro placeholder='Confirme sua senha' campoNome='Confirme sua senha ' tipo='password'></InputCadastro>
                </div>

                <ButtonEntrar texto='Cadastrar-se!'></ButtonEntrar>
            </main>
        </div> 
    )
 

}