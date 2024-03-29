import React from 'react';
import '../../css/DeductionHistory.css';

interface deductedProps {
  deductedData: {
    title: { title: string };
    episode: {
      id: number;
      episodeNum: number;
      title: string;
      thumbnail: string;
      cloud: number;
    };
    date: string;
    cloud: number;
  };
}
const DeductedLists: React.FC<deductedProps> = (props: deductedProps) => {
  return (
    <div className="cloudHistoryLists">
      <div className="leftSideDetails">
        <div className="deduction">사용</div>
        <div>
          <div className="cloudDate">
            {props.deductedData.date.slice(0, 10)}
          </div>
          <div className="cloudInfo">{props.deductedData.title.title}</div>
          <div className="cloudEpisodeTitle">
            {`${props.deductedData.episode.episodeNum}화. ${props.deductedData.episode.title}`}
          </div>
        </div>
      </div>
      <div className="cloudCounts">
        <div className="minusCount">{props.deductedData.cloud}</div>
        <div className="orangeCloud" />
      </div>
    </div>
  );
};

export default DeductedLists;
