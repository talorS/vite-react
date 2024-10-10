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
        <div className="flex flex-col gap-2">
            <div>
                <h1 className="text-4xl font-bold">Products</h1>
            </div>
            <ProductListFilters
                onChange={(filters) => {
                    setCategory(filters.category);
                    setMaxPrice(filters.maxPrice);
                    setSearch(filters.search);
                }}
            />
            <div>
                {data && <ProductList products={data} />}
                {isFetching && <p>Loading...</p>}
            </div>
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