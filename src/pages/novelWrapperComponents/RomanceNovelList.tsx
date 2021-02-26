import React from 'react';
import './NovelList.css';

interface RomanceDataProps {
  romanceData: {
    id: number;
    title: string;
    author: string;
    cloud: number;
    userLike: number;
    thumbnail: string;
    complete: boolean;
    createdAt: string;
    updatedAt: string;
  };
}

const getToday = (): string => {
  const date: Date = new Date();
  const year: number = date.getFullYear();
  const month: string = ('0' + (1 + date.getMonth())).slice(-2);
  const day: string = ('0' + date.getDate()).slice(-2);
  return `${year}-${month}-${day}`;
};

const NovelList: React.FC<RomanceDataProps> = (props: RomanceDataProps) => {
  const refinedupdatedAt: string = props.romanceData.updatedAt.slice(0, 10);

  const sliceTitle: string = props.romanceData.title.slice(0, 6);
  const sliceAuthor: string = props.romanceData.author.slice(0, 8);
  const getBoolTitleLength = (): boolean => {
    if (props.romanceData.title.length > 6) return true;
    else return false;
  };
  const getBoolAuthorLength = (): boolean => {
    if (props.romanceData.author.length > 8) return true;
    else return false;
  };

  return (
    <div className="novelList">
      <div
        className="thumbnail"
        style={{
          backgroundImage: `url(${props.romanceData.thumbnail})`,
        }}
      >
        {props.romanceData.complete ? (
          <div className="novelListCompleteObject">완결</div>
        ) : (
          <></>
        )}
      </div>
      <div className="novelListContentWrapper">
        <div className="countCloud">
          <div className="countCloudText">
            누적구름 {props.romanceData.cloud}
          </div>
          <div className="countCloudImg" />
        </div>
        <div className="novelListSubjectWrapper">
          <div className="novelListSubject">
            {getBoolTitleLength()
              ? `${sliceTitle} ...`
              : props.romanceData.title}
          </div>
          {refinedupdatedAt === getToday() ? (
            <div className="novelListNewObject">NEW</div>
          ) : (
            <></>
          )}
        </div>
        <div className="novelListAuthorFavWrapper">
          <div className="novelListAuthor">
            {getBoolAuthorLength()
              ? `${sliceAuthor} ...`
              : props.romanceData.author}
          </div>
          <div className="novelListFavorite">
            관심 {props.romanceData.userLike}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NovelList;