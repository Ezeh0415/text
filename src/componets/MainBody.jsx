import { useState } from "react";
import useFetch from "../useFetch";
import Typography from '@mui/material/Typography';
const MainBody = () => {
   const {products, Loading, error} = useFetch("https://fakestoreapi.com/products");
   const {products:jewelery} = useFetch("https://fakestoreapi.com/products/category/jewelery");
   const {products:eletronics} = useFetch("https://fakestoreapi.com/products/category/electronics");
   //const {products:nasa} = useFetch("https://api.nasa.gov/planetary/apod?api_key=5536woCrJWpfBsSWitNI6zy60QGdUyfsSTwYqdq9")
   console.log(products)


    return ( 
      <>
        {Loading ? (
            <div>loading...</div>
            ): error ?(
               <div className="error">oga no browse if u no get data</div>
            ):(
            <>
            
            <div className="mens-wear">
               <Typography variant="h2">
                  cloths  eletronics and jewelerys for sale
               </Typography>
            </div>
            {products && (
               products.map((item,id ) => (
                  <div className="prod" key={id}>
                     <img src={item.image} />
                     <div className="discription">
                       <div className="category">
                       <Typography variant="h4">
                           {item.category}
                        </Typography>
                       </div>
                          <div className="title">
                           <Typography variant="h5">
                              {item.title}
                           </Typography>
                          </div>
                          <div className="disc">
                           <Typography variant="h6">
                             price: {item.price}
                           </Typography>
                          </div>
                     </div>
                  </div>
               ))
            )}
            </>
            )}
     </>
      
     );
}
 
export default MainBody;