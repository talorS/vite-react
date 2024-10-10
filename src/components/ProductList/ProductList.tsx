import { Product } from '../../types/product';

type ProductListProps = {
    products: Product[];
};

export default function ProductList({ products }: ProductListProps) {
    return (
        <div className='product-cards-container'>
            {products.map((product) => (
                <div key={product.id} className='product-card'>
                    <h2>{product.name}</h2>
                    <p>{product.category}</p>
                    <p style={{ opacity: 0.5 }}>{product.price}$</p>
                    <img src={product.image} alt={product.name} style={{ borderRadius: '50%' }} />
                </div>
            ))}
        </div>
    );
}