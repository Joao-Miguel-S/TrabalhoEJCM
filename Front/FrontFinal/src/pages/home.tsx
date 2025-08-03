import '../globals.css' 

import Categorias from '../components/categorias'
import BoxProduto from '../components/boxProduto'
import Container from '../components/container'
import Titulo from '../components/tituloContainer'
import Icon from "../components/icon"
import MenuHamburguer from './menuHamburguer'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion';

/* Importações abaixo são apenas imagens*/ 
import carrinho from "../assets/carrinho.svg" 
import menu from "../assets/menu.svg" 
import logo from "../assets/LogoElektro.svg" 


import imgInicio1 from "../assets/imgemInicio.svg"
import imgInicio2 from "../assets/imagemInicio2.svg"
import imgInicio3 from "../assets/imagemInicio3.svg"

import categoriaCelulares from "../assets/categoriaCelular.svg"
import categoriaNotebooks from "../assets/categoriaNotebook.svg"
import categoriaTablets from "../assets/categoriaTablet.svg"
import categoriaAcessorios from "../assets/categoriaAcessorios.svg"
import categoriaPcs from "../assets/categoriaPcs.svg"
import categoriaSmartwatches   from "../assets/categoriaSmartwatches.svg"
import categoriaPerifericos from "../assets/categoriaPerifericos.svg"
import categoriaTvs from "../assets/categoriaTvs.svg"

import paraVoce1 from "../assets/paraVoce1.png"
import paraVoce2 from "../assets/paraVoce2.png"
import paraVoce3 from "../assets/paraVoce3.png"
import paraVoce4 from "../assets/paraVoce4.png"
import paraVoce5 from "../assets/paraVoce5.png"

import maisVendidos1 from "../assets/maisVendidos1.png"
import maisVendidos2 from "../assets/maisVendidos2.png"
import maisVendidos3 from "../assets/maisVendidos3.png" 
import maisVendidos4 from "../assets/maisVendidos4.png" 
import maisVendidos5 from "../assets/maisVendidos5.png" 

import destaque1 from "../assets/destaque1.png"
import destaque2 from "../assets/destaque2.png"
import destaque3 from "../assets/destaque3.png"
import destaque4 from "../assets/destaque4.png"
import destaque5 from "../assets/destaque5.png"  

import facebookIcon from "../assets/facebookIcon.svg" 
import linkedinIcon from "../assets/linkedinIcon.svg"
import instaIcon from "../assets/instaIcon.svg"
import tiktokIcon from "../assets/tiktokIcon.svg"
import twitterIcon from "../assets/twitterIcon.svg"






export default function Home(){
    const [estadoMenuHamburguer, setEstadoMenuHamburguer]= useState(false);
    const [imagemIndex, setImagemIndex]=useState(0);
    const imagemArray=[imgInicio1,imgInicio2,imgInicio3];


    useEffect(() => {
        const intervalo = setInterval(() => {
            setImagemIndex(prev => (prev + 1) % imagemArray.length);
        }, 3000);

        return () => clearInterval(intervalo); 
    }, []);
    

    return(
        <div className='w-full flex  items-center  flex-col'>

            <header className='w-full h-[71px] flex flex-row justify-between items-center rounded-bl-[16px] rounded-br-[16px] bg-[#2B2B2B]' >
                <img src={menu} className='w-[24px] h-[24px] ml-7' onClick={()=>setEstadoMenuHamburguer(true)}></img>
                <img src={carrinho} className='w-[24px] h-[24px] mr-7' ></img>
            </header>

            <MenuHamburguer aberto={estadoMenuHamburguer}></MenuHamburguer>

            <main className='flex flex-col justify-center items-center mt-6 w-[85%]' onClick={()=>setEstadoMenuHamburguer(false)}>
                
                <div id="inicio" className='flex flex-col w-full border-solid border-[#7575759d] border-b-[2px]'>
                    <div className='flex flex-row w-full items-center justify-center text-[25px] '>
                        <img src={logo} className='w-[42px] h-[42px]'></img>
                        <h5 className='russoOne text-[#FF8F0E]'>Bem-vindo à Elektro! </h5>
                    </div>
                    <div className=' flex justify-center w-full  mb-5 mt-5'>
                        <motion.img 
                        key={imagemIndex}
                        src={imagemArray[imagemIndex]}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1 }}
                        className='w-[327px] h-[210px]'/>
                    </div>
                </div> 

                <Titulo titulo="Categorias Elektro"></Titulo>
                <div id='categorias' className='container flex-wrap border-none'>
                    <Categorias src={categoriaCelulares} nome='Celurares'></Categorias>
                    <Categorias src={categoriaNotebooks} nome='Notebooks'></Categorias>
                    <Categorias src={categoriaTablets} nome='Tablets'></Categorias>
                    <Categorias src={categoriaPerifericos} nome='Periféricos'></Categorias>
                    <Categorias src={categoriaTvs} nome='TVs'></Categorias>
                    <Categorias src={categoriaAcessorios} nome='Acessorios'></Categorias>
                    <Categorias src={categoriaPcs} nome='PCS'></Categorias>
                    <Categorias src={categoriaSmartwatches} nome='Smartwatches'></Categorias>
                </div> 

                <Titulo titulo="Para você"></Titulo>
                <Container identificador='paraVoce'>
                    <BoxProduto src={paraVoce1} nomeProduto='Celular' precoProduto='R$800,00'></BoxProduto>
                    <BoxProduto src={paraVoce2} nomeProduto='Capa protetora' precoProduto='R$20,00'></BoxProduto>
                    <BoxProduto src={paraVoce3} nomeProduto='Carregador' precoProduto='R$50,00'></BoxProduto>
                    <BoxProduto src={paraVoce4} nomeProduto='Mousepad' precoProduto='R$60,00'></BoxProduto>
                    <BoxProduto src={paraVoce5} nomeProduto='Teclado' precoProduto='R$120,00'></BoxProduto>
                </Container>
 
                <Titulo titulo="Produtos em Destaque"></Titulo>
                <Container identificador='Destaque'>
                    <BoxProduto src={destaque1} nomeProduto='Smart TV' precoProduto='R$1400,00'></BoxProduto>
                    <BoxProduto src={destaque2} nomeProduto='Monitor' precoProduto='R$750,00'></BoxProduto>
                    <BoxProduto src={destaque3} nomeProduto='Headset' precoProduto='R$250,00'></BoxProduto>
                    <BoxProduto src={destaque4} nomeProduto='Tablet' precoProduto='R$300,00'></BoxProduto>
                    <BoxProduto src={destaque5} nomeProduto='Notebook' precoProduto='R$900,00'></BoxProduto>
                </Container>

                <Titulo titulo="Mais vendidos"></Titulo>
                <Container identificador='Destaque'>
                    <BoxProduto src={maisVendidos1} nomeProduto='Smartphone' precoProduto='R$3200,00'></BoxProduto>
                    <BoxProduto src={maisVendidos2} nomeProduto='Smartwatch' precoProduto='R$900,00'></BoxProduto>
                    <BoxProduto src={maisVendidos3} nomeProduto='Mouse' precoProduto='R$50,00'></BoxProduto>
                    <BoxProduto src={maisVendidos4} nomeProduto='Fone de ouvido' precoProduto='R$50,00'></BoxProduto>
                    <BoxProduto src={maisVendidos5} nomeProduto='Caixa de som' precoProduto='R$300,00'></BoxProduto>
                </Container>

            </main> 

            <footer className='bg-[#FFAE50] w-full h-[150px] flex flex-col justify-center items-center'>
                <p className='montserrat text-[16px] text-[#2B2B2B] font-normal'>Siga-nos nas redes sociais!</p>
                <div className='flex mt-4 '>
                    <Icon src={facebookIcon}></Icon>
                    <Icon src={instaIcon}></Icon>
                    <Icon src={tiktokIcon}></Icon>
                    <Icon src={twitterIcon}></Icon>
                    <Icon src={linkedinIcon}></Icon>
                </div>
            </footer>
        </div> 
    )
}