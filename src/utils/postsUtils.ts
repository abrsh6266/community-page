import { Comment } from "../hooks/usePosts";

export const addReply = (
  comments: Comment[],
  commentId: number,
  body: string
): Comment[] => {
  return comments.map((comment) => {
    if (comment.id === commentId) {
      return {
        ...comment,
        replies: [
          ...comment.replies,
          {
            id: Date.now(),
            body,
            created_at: new Date().toISOString(),
            replies: [],
          },
        ],
      };
    }
    return {
      ...comment,
      replies: addReply(comment.replies, commentId, body),
    };
  });
};
