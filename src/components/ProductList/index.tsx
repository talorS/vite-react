import { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ProductFilters } from '../../api/products';
import { useFetchWithFilter } from '../../hooks/useQuery';
import ProductList from '../../components/ProductList/ProductList';
import ProductListFilters from '../../components/ProductList/ProductListFilters';
import './style.css';

function App() {
    const [search, setSearch] = useState<ProductFilters['search']>();
    const [category, setCategory] = useState<ProductFilters['category']>('comedy');
    const { data, isFetching } = useFetchWithFilter({ category, search });

    return (
        <div>
            <h1>Products</h1>
            <ProductListFilters
                onChange={(filters) => {
                    setCategory(filters.category);
                    setSearch(filters.search);
                }}
                initCategory={category}
            />
            {data && <ProductList products={data} />}
            {isFetching && <p>Loading...</p>}
        </div>
    );
}

const queryClient = new QueryClient();
const ProductListProvider = () => (
    <QueryClientProvider client={queryClient}>
        <App />
    </QueryClientProvider>
);

export default ProductListProvider;