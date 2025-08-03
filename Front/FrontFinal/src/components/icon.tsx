import '../globals.css'

type iconProps={
    src:string;
}

export default function Icon(props: iconProps){
    return (
        <img src={props.src} className='pr-3'></img>
    )
}