import PostData from './postData';

export default interface BoardData {
  category: string;
  boards: PostData[];
  boardTotalCount: number;
  boardTotalPage: number;
}
