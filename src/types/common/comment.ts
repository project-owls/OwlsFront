interface User {
  nickname: string;
}

interface CommentBasic {
  id: number;
  content: string;
  likeCount: number;
  createdAt: string;
  user: User;
}
export default interface CommentType {
  id: number;
  content: string;
  likeCount: number;
  createdAt: string;
  user: User;
  comment?: CommentBasic[];
}
