import {useContext,useState} from 'react';
import {context} from '../App';
export const Cartjs=()=>
{
    const[newProd,setNewProd]=useContext(context);
    const Increment=(prod)=>{
        const arr=[...newProd];
        prod.quantity=prod.quantity+1;
        setNewProd(arr)
    }
    const Decrement=(prod)=>{
        const arr=[...newProd];
        prod.quantity=prod.quantity-1;
        setNewProd(arr)
    }
    const Remove=(prod)=>{
        const arr=newProd.filter(p=> p.id !== prod.id)
        setNewProd(arr)
    }
    const Total=(prod)=>{
        return newProd.reduce((prev,next)=>prev+next.price*prev.quantity,0)
    }
    return(
        <table class="table container">
        <thead>
            <tr>
                <th scope="col">Name</th>
                <th scope="col">Image</th>
                <th scope="col">Price</th>
                <th scope="col">Quantity</th>
                <th scope="col">Remove</th>
                <th scope="col">Total</th>

            </tr>
        </thead>
        <tbody>
            {
                newProd.map(prod => (
                    <tr>
                        <th scope="row">{prod.title}</th>
                        <td><img style={{ width: 100 }} src={prod.image} /></td>
                        <td>{prod.price}$</td>
                        <td><button className="btn btn-primary" onClick={()=>Increment(prod)}>+</button>{prod.quantity}<button className="btn btn-primary" onClick={()=>Decrement(prod)}>-</button></td>
                        <td><button className="btn btn-primary" onClick={()=> Remove(prod)}>x</button></td>
                        <td>{prod.quantity * prod.price}$</td>
                    </tr>
                ))
            }
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>Grand Total: {Total(newProd)}$</td>
            </tr>

        </tbody>
    </table>
    )
}