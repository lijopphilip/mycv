
import React from 'react';
import { Milestone } from '../types';
import { TimelineItem } from './TimelineItem';

interface TimelineProps {
  milestones: Milestone[];
}

export const Timeline: React.FC<TimelineProps> = ({ milestones }) => {
  return (
    <div className="relative border-l border-neutral-800 ml-3 md:ml-4">
      {milestones.map((milestone, index) => (
        <TimelineItem key={milestone.id} milestone={milestone} index={index} />
      ))}
    </div>
  );
};
