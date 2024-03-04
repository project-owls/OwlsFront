type PostData = {
  id: number;
  kind: string;
  author: string;
  date: string;
  content: string;
  reactions: {
    likes: number;
    comments: number;
  };
  profile_url: string;
};

export default PostData;
