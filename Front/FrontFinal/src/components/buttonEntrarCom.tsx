import '../globals.css'
import { useNavigate } from 'react-router-dom';

type buttonProps={
    caminho: string
    pagina:string
}

function buttonConfig(tipo:string):string{
    if(tipo=="login")
        return " flex justify-center items-center border-t-1 w-[35%] h-[100px]";
    else
        return "flex justify-center items-center border-b-1 w-[35%] h-[100px]";
}

export default function ButtonEntrarCom(props: buttonProps){
    const navigate= useNavigate();
    return(
        
        <div className={buttonConfig(props.pagina)} >
            <button className='buttonEntrarCom cursor-pointer' onClick={()=>navigate('/home')}> <img src={props.caminho}></img></button>
        </div>

    )

}