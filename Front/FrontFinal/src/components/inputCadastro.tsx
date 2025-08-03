import '../globals.css'

type inputCadastro={
    campoNome: string;
    placeholder: string;
    tipo:string;

}

export default function InputCadastro(props: inputCadastro){
    return(
        <div>
            <label className="flex flex-col  border-b-1 mb-6 ">
                <p className='montserrat mb-3'>{props.campoNome}</p>
                <input type={props.tipo} placeholder={props.placeholder} className="montserrat color-[#B9B9B9]"></input>
             </label>
        </div>
    )
}