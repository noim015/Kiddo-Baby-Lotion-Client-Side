import { useEffect, useState } from "react";

const useProducts = () => {
  const [products, setProducts] = useState([]);
    const [page, setPage] = useState(0);
    const [pageCount, setPageCount] = useState(0);
    // products to be rendered on the UI
    const [displayProducts, setDisplayProducts] = useState([]);
    
    useEffect(() => {
        fetch(`http://localhost:5000/products`)
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setDisplayProducts(data);
                const count = data.count;
                
            });
    }, [page]);

    return {
      displayProducts
    }
};

export default useProducts;
