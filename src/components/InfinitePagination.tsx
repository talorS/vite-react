import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
//import { useInfiniteQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
//import { useInView } from 'react-intersection-observer';
//import { fetchItems } from '../api/items';
import { useElementInView } from '../hooks/useInView';
import { usePhotos } from '../hooks/useQuery';

function UserCard() {
    const { data, error, isError, isLoading, fetchNextPage, isFetchingNextPage } =
        usePhotos();
    // useInfiniteQuery({
    //     queryKey: ['items'],
    //     queryFn: fetchItems,
    //     initialPageParam: 0,
    //     getNextPageParam: (lastPage) => lastPage.nextPage,
    // });

    //const { ref, inView } = useInView();
    const { ref, inView } = useElementInView({ threshold: 0.1 });

    useEffect(() => {
        if (inView) {
            fetchNextPage();
        }
    }, [fetchNextPage, inView]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>{error.message}</div>;
    }

    return (
        <div className="flex flex-col gap-2">
            {data?.pages.map((page, index) => {
                return (
                    <div key={index} className="flex flex-col gap-2">
                        {page.map((item) => {
                            return (
                                <div key={item.id} className="rounded-md bg-grayscale-700 p-4">
                                    <img width={250} height={250} src={item.url} alt={item.title} className="rounded-md" />
                                </div>
                            );
                        })}
                    </div>
                );
            })}
            <div
                ref={ref}
                style={{
                    height: 100,
                }}
            >
                {isFetchingNextPage && 'Loading More...'}</div>
        </div>
    );
}

const queryClient = new QueryClient();
const InfinitePagination = () => (
    <QueryClientProvider client={queryClient}>
        <UserCard />
    </QueryClientProvider>
);

export default InfinitePagination;
