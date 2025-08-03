import '../globals.css'

type categoriaProps={
    src:string;
    nome:string;
}

export default function Categorias(props:categoriaProps){
    return (
        <div className='flex flex-col items-center w-[22%] mt-3'>
            <img src={props.src} className='w-[49px] h-[51px]'></img> 
            <p className='montserrat text-[14px]'>{props.nome}</p>
        </div>
    )
}