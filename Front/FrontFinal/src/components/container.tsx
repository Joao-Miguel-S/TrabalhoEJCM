import { useEffect, useRef, useState } from 'react'
import '../globals.css'
import {motion} from "framer-motion"

type containerProps={
    identificador: string
    children:any
}

export default function container(props: containerProps){
    const carrosel:any = useRef(null);
    const [largura,setLargura]= useState(0);

    const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

    useEffect(()=>{
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    setLargura(carrosel.current?.scrollWidth - carrosel.current?.offsetWidth)
    }

    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };

    },[])


    return (
        <motion.div ref={carrosel}  id={props.identificador} className='container carrossel-container' whileTap={{cursor:"grabbing"}} > 
            <motion.div drag="x" dragConstraints={{right:0, left: -largura}}className='container border-none' >
                {props.children}
            </motion.div>
        </motion.div>
    )
}