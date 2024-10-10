import {
    useContext,
    createContext,
    PropsWithChildren
} from 'react';

type Post = {
    id: number;
    title: string;
    content: string;
    user: {
        id: number;
        name: string;
    }
}

type PostCardContextProps = {
    post: Post;
}

export type PostCardProps = PropsWithChildren & {
    post: Post;
}

const PostCardContext = createContext<PostCardContextProps | undefined>(undefined);

export const PostCardProvider = ({ children, post }: PostCardProps) => {
    return (
        <PostCardContext.Provider value={{ post }}>
            <div>{children}</div>
        </PostCardContext.Provider>
    );
};

export function usePostCardContext() {
    const context = useContext(PostCardContext);
    if (!context) {
        throw new Error('usePostCardContext must be used within a PostCard')
    }
    return context;
}