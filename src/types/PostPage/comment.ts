interface User {
  nickname: string;
}

export default interface CommentType {
  id: number;
  content: string;
  likeCount: number;
  createdAt: string;
  user: User;
  comment?: CommentType[];
}
