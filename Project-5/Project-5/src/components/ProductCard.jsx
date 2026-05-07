export default function ProductCard({product, addToCart}){
    return(
        <div className="productBox">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <h4>{product.price}</h4>
            <button onClick={()=>addToCart(product)}>Add to Cart</button>
        </div>
    );
}