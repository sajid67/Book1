import {useContext} from 'react';
import {context} from '../App';

export const Productsjs=()=>{
  const [prod,newProd,setNewProd,addtocart]=useContext(context)
 
      return (
        <>          
        <div className="border border-secondary container mt-4 mb-4">
        <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        {
          prod.map((p)=>{
            return(
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              <div key={p.id} className="card" style={{width:270,paddingTop:2,paddingTop:2}}>
              <img src={p.image} className="card-img-top h-100 w-100" alt="..."/>
                     <div className="card-body">
                         <h5 className="card-title">{p.title}</h5>
                         <p className="card-text">{p.price}$</p>
                         {/* <button className="btn btn-primary" onClick={addtocart}>Add to cart</button> */}
                     </div>
              </div>
             </div>
            )
          })
        }
        </div>
        </div>
        </div>
      </>
      );
}