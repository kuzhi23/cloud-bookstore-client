import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import NovelDetail from './novelInfoComponents/NovelDetail';
import LastUserHistory from './novelInfoComponents/LastUserHistory';
import EpisodeList from './novelInfoComponents/EpisodeList';
import NovelComments from './novelInfoComponents/NovelComments';
import '../css/NovelInfo.css';
interface ClickedNovelInfoProps extends RouteComponentProps {
  toggleUserLike: () => void;
  handleNovelLikesCount: (userLike: number) => void;
  handleAxiosClickedNovelData: (parameter: number) => void;
  handleAxiosSpecificEpisodeData: (novelId: number, episodeId: number) => void;
  handleClickedSpecificEpisode: (parameter: {
    episodeId: number;
    novelId: number;
  }) => void;
  nickname: string;
  clickedNovelData: {
    data: {
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
    episodes: {
      id: number;
      episodeNum: number;
      novelId: number;
      title: string;
      text: string;
      thumbnail: string;
      cloud: number;
      createdAt: string;
      updatedAt: string;
    }[];
    comments: {
      id: number;
      nickname: string;
      comment: string;
      novelId: number;
      createdAt: string;
      updatedAt: string;
    }[];
    userHistory: any;
    userLike: boolean;
    userPurchases: {
      episodeId: number;
    }[];
  };
}

const NovelInfo: React.FC<ClickedNovelInfoProps> = (
  props: ClickedNovelInfoProps,
) => {
  return (
    <div className="novelInfoWrapper">
      <NovelDetail
        clickedNovelData={props.clickedNovelData}
        toggleUserLike={props.toggleUserLike}
        handleNovelLikesCount={props.handleNovelLikesCount}
        history={props.history}
        location={props.location}
        match={props.match}
        handleClickedSpecificEpisode={props.handleClickedSpecificEpisode}
        handleAxiosSpecificEpisodeData={props.handleAxiosSpecificEpisodeData}
      />
      {props.clickedNovelData.userHistory.length === 0 ? (
        <div className="emptySpaceNovelInfo" />
      ) : (
        <LastUserHistory
          clickedNovelData={props.clickedNovelData}
          history={props.history}
          location={props.location}
          match={props.match}
          handleClickedSpecificEpisode={props.handleClickedSpecificEpisode}
        />
      )}
      <EpisodeList
        clickedNovelData={props.clickedNovelData}
        handleClickedSpecificEpisode={props.handleClickedSpecificEpisode}
      />
      <NovelComments
        clickedNovelData={props.clickedNovelData}
        handleAxiosClickedNovelData={props.handleAxiosClickedNovelData}
        nickname={props.nickname}
      />
    </div>
  );
};

export default NovelInfo;
