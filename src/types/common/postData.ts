type PostData = {
  id: number;
  title: string;
  content: string;
  views: number;
  likeCount: number;
  createdAt: string;
  updatedAt: string;
  user: {
    nickname: string;
  };
  boardCategory: {
    name: string;
  };
  FileUpload: [];
};

export default PostData;
