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
        <div className="text-4xl xl:text-6xl md:text-5xl font-body">Accomplishments</div>
        {
          //eslint-disable-next-line
          <TimelineGraph {...(AccomplishmentsDataset as any)} />
        }
        <div className="mt-16 text-4xl xl:text-6xl md:text-5xl font-body">Roadmap</div>
        {
          //eslint-disable-next-line
          <TimelineGraph {...(RoadmapDataset as any)} />
        }
      </div>
    </>
  );
};

export default Roadmap;
