import { Product } from '../../types/product';

type ProductListProps = {
    products: Product[];
};

export default function ProductList({ products }: ProductListProps) {
    return (
        <div className='product-cards-container'>
            {products.map((product) => (
                <div key={product.id} className='product-card'>
                    <h2>{product.title}</h2>
                    <img src={product.posterURL} alt={product.imdbId} style={{ borderRadius: '50%' }} />
                </div>
            ))}
        </div>
    );
}