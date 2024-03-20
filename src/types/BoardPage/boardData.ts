import PostData from '../common/postData';

export default interface BoardData {
  category: string;
  boards: PostData[];
  boardTotalCount: number;
  boardTotalPage: number;
}
