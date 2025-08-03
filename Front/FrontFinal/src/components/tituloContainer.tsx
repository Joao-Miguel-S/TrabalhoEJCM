import '../globals.css'

type tituloProps={
    titulo:string;
}

export default function tituloContainer(props: tituloProps){
    return (
        <p className='montserrat text-[16px] self-start mt-3 ml-1 '>{props.titulo}</p>
    )
}