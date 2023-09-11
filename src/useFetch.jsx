import { useEffect, useState } from "react";

const useFetch = (url) => {


    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    const [Loading, setLoading] = useState(true)
  
  useEffect(() => {
    // Define the API URL
    //const apiUrl = 'https://fakestoreapi.com/products';
    
    // Fetch data from the API
    const abortcont = new AbortController()

    fetch(url)
      .then((response) => {

        if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json()
    
    })
      .then((data) => {
        // Update the state with the fetched product data
        setProducts(data);
        setLoading(false)
        setError(null)
      })
      .catch((error) => {
          setLoading(false)
          setError(error)
      });

      return () => abortcont.abort();

  }, [url]);

  

    return {products,error,Loading};
}
 
export default useFetch;