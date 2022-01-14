import React from 'react';
import { TimelineGraph } from '../molecules/timeline-graph/TimelineGraph';
import AccomplishmentsDataset from '../../data/accomplishments.json';
import RoadmapDataset from '../../data/roadmap.json';
import { compareAsc } from 'date-fns';
AccomplishmentsDataset.events.sort((a, b) => compareAsc(new Date(a.date), new Date(b.date)));
RoadmapDataset.events.sort((a, b) => compareAsc(new Date(a.date), new Date(b.date)));

const Roadmap: React.FC = () => {
  return (
    <>
      <div className="flex flex-col justify-center bg-white">
        <div className="mt-16 ml-16 text-6xl font-body">Accomplishments</div>
        <div className="mx-24 mt-4 text-3xl">
          Some description of how we got here. The roadmaps need to be translated and/or updated.
        </div>
        {
          //eslint-disable-next-line
          <TimelineGraph {...(AccomplishmentsDataset as any)} />
        }
        <div className="mt-16 ml-16 text-6xl font-body">Roadmap</div>
        <div className="mx-24 mt-4 text-3xl">Some description of plans for the future.</div>

        {
          //eslint-disable-next-line
          <TimelineGraph {...(RoadmapDataset as any)} />
        }
      </div>
    </>
  );
};

export default Roadmap;
