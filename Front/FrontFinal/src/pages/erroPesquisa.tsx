import '../globals.css'
import erroImg from "../assets/Error.svg"
import seta from "../assets/seta.svg"

export default function ErroPesquisa(){
    return( 
        <div className='flex flex-col justify-center h-full '>
            <main className='flex flex-col items-center justify-start h-[75%] mt-30'>
                <h1 className='russoOne text-[30px]'>Opsss...</h1>
                <img src={erroImg}></img>
                <p className='w-[75%] text-center montserrat text-[#2B2B2B]'>Infelizmente, parece que não encontramos o produto desejado.</p>
            </main>
            <footer className='flex flex-row justify-end items-end h-[25%]' >
                <div className=' flex items-center justify-center h-[49px] w-[49px] rounded-full bg-[#D9D9D9] mb-8 mr-8'>
                    <img src={seta} className=' '></img>                   
                </div>
            </footer>  
        </div> 
    )
 

} 