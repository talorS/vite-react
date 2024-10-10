import { ProductFilters } from '../../api/products';
import { useDebounce } from '../../hooks/useDebounce';
import { useEffect, useState } from 'react';

type ProductListFiltersProps = {
    onChange: (filters: ProductFilters) => void;
    initCategory: ProductFilters['category']
};

export default function ProductListFilters({
    onChange,
    initCategory
}: ProductListFiltersProps) {
    const [search, setSearch] = useState<ProductFilters['search']>();
    const debouncedSearch = useDebounce(search);

    const [category, setCategory] = useState<ProductFilters['category']>(initCategory);

    useEffect(() => {
        onChange({ category, search: debouncedSearch });
    }, [category, debouncedSearch]);

    return (
        <div className='product-filter-container'>
            <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search movies"
            />
            <select
                value={category}
                onChange={(e) => {
                    const value = e.target.value as ProductFilters['category'];
                    setCategory(value);
                }
                }
            >
                <option value="comedy">Comedy</option>
                <option value="drama">Drama</option>
                <option value="horror">Horror</option>
                <option value="family">Family</option>
            </select>
        </div>
    );
}
