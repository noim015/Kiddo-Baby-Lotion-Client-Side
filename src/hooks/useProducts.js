import { useEffect, useState } from "react";

const useProducts = () => {
  const [products, setProducts] = useState([]);
    const [page, setPage] = useState(0);
    const [pageCount, setPageCount] = useState(0);
    // products to be rendered on the UI
    const [displayProducts, setDisplayProducts] = useState([]);
    
    useEffect(() => {
        fetch(`https://scary-ghost-60292.herokuapp.com/products`)
            .then(res => res.json())
            .then(data => {
                setProducts(data.products);
                setDisplayProducts(data.products);
                const count = data.count;
                
            });
    }, [page]);

    return {
      displayProducts
    }
};

export default useProducts;
