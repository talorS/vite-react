import { Product } from "../types/product";

export type ProductFilters = {
    category?: 'comedy' | 'drama' | 'horror' | 'family';
    search?: string;
};

const fetcher = async (category: ProductFilters['category']): Promise<Product[]> => {
    const response = await fetch(`https://api.sampleapis.com/movies/${category}`);
    const json = await response.json();
    return json;
}

export const fetchProducts = async (options?: ProductFilters) => {
    let filteredProducts = await fetcher(options?.category);

    if (options?.search) {
        filteredProducts = filteredProducts.filter((product) => {
            return product.title.toLowerCase().startsWith(options.search!.toLowerCase());
        });
    }

    return filteredProducts;
};