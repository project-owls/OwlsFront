interface PostData {
  id: number;
  title: string;
  content: string;
  published: boolean;
  views: number;
  likeCount: number;
  createdAt: string;
  updatedAt: string;
  user: {
    id: number;
    nickname: string;
    profileImage: {
      url: string;
    };
  };
  boardCategory: {
    name: string;
  };
  FileUpload: [];
}

export default PostData;
