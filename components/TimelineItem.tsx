
import React from 'react';
import { Milestone } from '../types';
import { BriefcaseIcon, GraduationCapIcon, LightbulbIcon, UserIcon } from './IconComponents';

interface TimelineItemProps {
  milestone: Milestone;
  index: number;
}

const iconMap = {
  work: <BriefcaseIcon />,
  education: <GraduationCapIcon />,
  project: <LightbulbIcon />,
  personal: <UserIcon />,
};

export const TimelineItem: React.FC<TimelineItemProps> = ({ milestone }) => {
  return (
    <div className="mb-12 ml-10 relative">
      <span className="absolute flex items-center justify-center w-8 h-8 bg-neutral-950 border border-neutral-700 rounded-full -left-[59px] text-white z-10">
        <div className="scale-75">
          {iconMap[milestone.icon]}
        </div>
      </span>
      <div className="group">
        <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2">
          <h3 className="text-xl font-bold text-white group-hover:text-neutral-200 transition-colors">{milestone.title}</h3>
          <time className="text-xs font-medium tracking-wider text-neutral-500 uppercase mt-1 md:mt-0">
            {milestone.date}
          </time>
        </div>
        <p className="text-neutral-400 leading-relaxed text-sm md:text-base border-l-2 border-transparent group-hover:border-neutral-800 pl-0 group-hover:pl-4 transition-all duration-300">
          {milestone.description}
        </p>
      </div>
    </div>
  );
};
