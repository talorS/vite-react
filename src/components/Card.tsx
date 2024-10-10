import { PostCardProps, PostCardProvider, usePostCardContext } from "./CardProvider"

const PostCard = ({ children, post }: PostCardProps) => {
    return <PostCardProvider post={post}>{children}</PostCardProvider>
}

PostCard.Title = function PostCardTitle() {
    const { post } = usePostCardContext();
    return <h2>{post.title}</h2>
}

PostCard.Content = function PostCardContent() {
    const { post } = usePostCardContext();
    return <p>{post.content}</p>
}

PostCard.User = function PostCardUser() {
    const { post } = usePostCardContext();
    return <p>{post.user.name}</p>
}

PostCard.Buttons = function PostCardButtons() {
    return (
        <div>
            <button> Read More </button>
            <button> Comments </button>
        </div>
    );
}

export default PostCard;