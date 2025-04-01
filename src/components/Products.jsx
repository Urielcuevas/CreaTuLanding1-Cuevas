import { useEffect, useState } from "react";

export default function Products({ filteredCategory }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState(null);

 
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        setProducts(data.products); 
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const filteredProducts = filteredCategory === "all"
    ? products
    : products.filter((product) => product.category === filteredCategory);

  if (loading) {
    return <div>Cargando productos...</div>;
  }


  const handleShowMore = (product) => {
    setSelectedProduct(product);
  };

  return (
    <main className="container mt-5 pt-5">
      <div className="row">
        {filteredProducts.map((product) => (
          <div key={product.id} className="col-md-3 mb-4">
            <div className="card">
              <img src={product.image} alt={product.name} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">${product.price}</p>
                <p className="card-text">Categoría: {product.category}</p>

                <button
                  className="btn btn-primary"
                  onClick={() => handleShowMore(product)}
                >
                  Ver más
                </button>

                {selectedProduct && selectedProduct.id === product.id && (
                  <div className="mt-3">
                    <h6>Descripción:</h6>
                    <p>{product.description || "No hay descripción disponible."}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
