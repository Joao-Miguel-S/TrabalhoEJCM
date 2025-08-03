import '../globals.css'
import { useNavigate } from 'react-router-dom';

type buttonProps={
    texto: string
}

export default function ButtonEntrar(props:buttonProps){
    const navigate= useNavigate();
    return(
        <button className='buttonEntrar montserrat mt-8 cursor-pointer' onClick={()=>navigate('/home')}>{props.texto}</button>
    )

}