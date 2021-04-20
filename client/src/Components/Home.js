import {useContext} from 'react';
import {context} from '../App';
export const Homejs=()=>{
    const[newProd]=useContext(context);
    return(
        <>
        {
            newProd.map(p=><div><img src={p.image} alt=""/></div>)
        }
        </>
    )
}