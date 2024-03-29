import React from 'react';
import './NovelComments.css';
import { IconContext } from 'react-icons';
import { IoMdRefresh } from 'react-icons/io';

import MakeNewComment from './commentComponents/MakeNewComment';
import CantMakeNewComment from './commentComponents/CantMakeNewComment';
import CommentsList from './commentComponents/CommentsList';

interface CommentsDataProps {
  handleAxiosClickedNovelData: (parameter: number) => void;
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
    userHistory?: any;
    userLike?: boolean;
    userPurchases?: {
      episodeId: number;
    }[];
  };
}

const NovelComments: React.FC<CommentsDataProps> = (
  props: CommentsDataProps,
) => {
  return (
    <IconContext.Provider value={{ size: '1.4em', color: '#464646' }}>
      <div className="wholeNovelCommentsWrapper" id="novelCommentsList">
        <div className="novelCommentsTextRefreshWrapper">
          <div className="novelCommentsText">
            작품 리뷰({props.clickedNovelData.comments.length})
          </div>
          <div
            className="novelRefreshBtn"
            onClick={() => {
              props.handleAxiosClickedNovelData(props.clickedNovelData.data.id);
            }}
            aria-hidden="true"
          >
            <IoMdRefresh />
          </div>
        </div>
        {props.nickname === 'guest' ? (
          <>
            <CantMakeNewComment />
            <div className="commentsListWrapper">
              {props.clickedNovelData.comments.map((data) => (
                <CommentsList
                  key={data.id}
                  data={data}
                  handleAxiosClickedNovelData={
                    props.handleAxiosClickedNovelData
                  }
                  novelData={props.clickedNovelData.data}
                />
              ))}
            </div>
          </>
        ) : (
          <>
            <MakeNewComment
              handleAxiosClickedNovelData={props.handleAxiosClickedNovelData}
              novelData={props.clickedNovelData.data}
              nickname={props.nickname}
            />
            <div className="commentsListWrapper">
              {props.clickedNovelData.comments.map((data) => (
                <CommentsList
                  key={data.id}
                  data={data}
                  handleAxiosClickedNovelData={
                    props.handleAxiosClickedNovelData
                  }
                  novelData={props.clickedNovelData.data}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </IconContext.Provider>
  );
};

export default NovelComments;
