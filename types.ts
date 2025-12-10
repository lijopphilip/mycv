
export type IconType = 'work' | 'education' | 'project' | 'personal';

export interface Milestone {
  id: number;
  title: string;
  date: string;
  description: string;
  icon: IconType;
}
