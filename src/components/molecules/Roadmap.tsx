import React from 'react';
import { TimelineGraph } from './timeline-graph/TimelineGraph';
import AccomplishmentsDataset from '../../data/accomplishments.json';
import RoadmapDataset from '../../data/roadmap.json';
import { compareAsc } from 'date-fns';
AccomplishmentsDataset.events.sort((a, b) => compareAsc(new Date(a.date), new Date(b.date)));
RoadmapDataset.events.sort((a, b) => compareAsc(new Date(a.date), new Date(b.date)));

const Roadmap: React.FC = () => {
  return (
    <>
      <div className="flex flex-col justify-center bg-white">
        <div className="default-heading">Accomplishments</div>
        {
          //eslint-disable-next-line
          <TimelineGraph {...(AccomplishmentsDataset as any)} />
        }
        <div className="mt-16 default-heading">Roadmap</div>
        {
          //eslint-disable-next-line
          <TimelineGraph {...(RoadmapDataset as any)} />
        }
      </div>
    </>
  );
};

export default Roadmap;
