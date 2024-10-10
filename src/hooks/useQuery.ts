import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { fetchProducts, ProductFilters } from '../api/products';
import { PhotosApiResponse } from '../types/photos';
import { UserApiResponse, UserPostsApiResponse } from '../types/user';

export const useFetchWithFilter = (options: ProductFilters) =>
    useQuery({
        queryKey: ['products', { ...options }],
        queryFn: () => fetchProducts({ ...options }),
    });


const fetcher = async (pageParam: number, limit: number) => {
    const url = new URL('https://jsonplaceholder.typicode.com/photos');
    url.searchParams.set('_start', `${pageParam}`);
    url.searchParams.set('_limit', `${limit}`);

    const response = await fetch(url.href);
    const json = await response.json();
    return json;
}

export const usePhotos = (pageSize = 10) =>
    useInfiniteQuery<PhotosApiResponse[], Error>({
        queryKey: ['photos', { pageSize }],
        queryFn: ({ pageParam }) => fetcher(Number(pageParam), pageSize),
        getNextPageParam: (lastPage, allPages) => lastPage.length > 0 ? allPages.length * lastPage.length : undefined,
        initialPageParam: 0,
        refetchOnWindowFocus: false,
    });


export const useUsers = () =>
    useQuery<UserApiResponse[], Error>({
        queryKey: ['users'],
        queryFn: async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const json = await response.json();
            return json;
        },
    });

export const useUserPosts = (userId: number) =>
    useQuery<UserPostsApiResponse[], Error>({
        queryKey: ['user-posts', { userId }],
        queryFn: async () => {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
            const json = await response.json();
            return json;
        },
    });