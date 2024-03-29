import React from 'react';
import { RouteComponentProps } from 'react-router';
import '../myCategoryCSS/MyWorksList.css';

interface CurrentNewNovelProps {
  id: number;
  title: string;
  author: string;
  category: number;
  description: string;
  cloud: number;
  userLike: number;
  episodeCount: number;
  complete: boolean;
  thumbnail: string;
  createdAt: string;
  updatedAt: string;
}
interface UserWorksDataProps extends RouteComponentProps {
  handleAxiosMyNovelEpisodeList: (novelId: number) => void;
  handleMyCurrentNewNovel: (data: CurrentNewNovelProps) => void;
  myCurrentNewNovel: {
    id: number;
    title: string;
    author: string;
    category: number;
    description: string;
    cloud: number;
    userLike: number;
    episodeCount: number;
    complete: boolean;
    thumbnail: string;
    createdAt: string;
    updatedAt: string;
  };
  userWorksData: {
    id: number;
    title: string;
    author: string;
    category: number;
    description: string;
    cloud: number;
    userLike: number;
    episodeCount: number;
    complete: boolean;
    thumbnail: string;
    createdAt: string;
    updatedAt: string;
  };
}

const MyWorksList: React.FC<UserWorksDataProps> = (
  props: UserWorksDataProps,
) => {
  const sliceTitle: string = props.userWorksData.title.slice(0, 16);
  const sliceAuthor: string = props.userWorksData.author.slice(0, 12);
  const getBoolTitleLength = (): boolean => {
    if (props.userWorksData.title.length > 16) return true;
    else return false;
  };
  const getBoolAuthorLength = (): boolean => {
    if (props.userWorksData.author.length > 12) return true;
    else return false;
  };
  return (
    <div className="MyWorksList">
      <div
        role="button"
        aria-hidden="true"
        className="Pointer"
        onClick={() => {
          props.handleAxiosMyNovelEpisodeList(props.userWorksData.id);
          props.handleMyCurrentNewNovel(props.userWorksData);
          props.history.push(
            `/main/mypage/myNovelEpisodeList/${props.userWorksData.id}`,
          );
        }}
      >
        <div
          className="MyWorksThumbnail"
          style={{
            backgroundImage: `url(${props.userWorksData.thumbnail})`,
          }}
        />
        {props.userWorksData.complete ? (
          <div className="CompleteObject">완결</div>
        ) : (
          <></>
        )}
        <div className="MyWorkshomeNovelListContentWrapper">
          <div className="MyWorksCountCloud">
            <div className="MyWorkscountCloudText">
              누적구름 {props.userWorksData.cloud}
            </div>
            <div className="MyWorkscountCloudImg" />
          </div>
          <div className="MyWorksNovelListSubjectWrapper">
            <div className="MyWorksHomeNovelListSubject">
              {getBoolTitleLength()
                ? `${sliceTitle} ...`
                : props.userWorksData.title}
            </div>
          </div>
          <div className="MyWorksHomeNovelListAuthorFavWrapper">
            <div className="MyWorksNovelListAuthor">
              {getBoolAuthorLength()
                ? `${sliceAuthor} ...`
                : props.userWorksData.author}
            </div>
            <div className="MyWorksNovelListFavorite">
              관심 {props.userWorksData.userLike}
            </div>
          </div>
        </div>
      </div>
      <div
        className="MygoNovelEpisode"
        role="button"
        aria-hidden="true"
        onClick={async () => {
          await props.handleMyCurrentNewNovel(props.userWorksData);
          await props.history.push(
            `/main/mypage/myNovelEpisodeWrite/${props.userWorksData.id}`,
          );
        }}
      >
        회차쓰기
      </div>
    </div>
  );
};

export default MyWorksList;
