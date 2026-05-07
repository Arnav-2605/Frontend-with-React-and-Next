import ProductCard from "./ProductCard";
export default function ProductList({product, addToCart}) 
{
    return(
        <div className="products">
            {product.map(product=>
                <ProductCard 
                key = {product.id}
                product = {product}
                addToCart = {addToCart} />
            )}
        </div>
    )
}