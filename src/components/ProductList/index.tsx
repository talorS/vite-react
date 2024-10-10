import { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ProductFilters } from '../../api/products';
import { useFetchWithFilter } from '../../hooks/useQuery';
import ProductList from '../../components/ProductList/ProductList';
import ProductListFilters from '../../components/ProductList/ProductListFilters';

function App() {
    const [search, setSearch] = useState<ProductFilters['search']>();
    const [category, setCategory] = useState<ProductFilters['category']>();
    const [maxPrice, setMaxPrice] = useState<ProductFilters['maxPrice']>();
    const { data, isFetching } = useFetchWithFilter({ category, maxPrice, search });

    return (
        <div>
            <h1>Products</h1>
            <ProductListFilters
                onChange={(filters) => {
                    setCategory(filters.category);
                    setMaxPrice(filters.maxPrice);
                    setSearch(filters.search);
                }}
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