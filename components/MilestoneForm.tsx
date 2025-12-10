
import React, { useState } from 'react';
import { Milestone, IconType } from '../types';
import { generateDescription } from '../services/geminiService';
import { LoadingSpinner } from './LoadingSpinner';

interface MilestoneFormProps {
  onAddMilestone: (milestone: Omit<Milestone, 'id'>) => void;
}

export const MilestoneForm: React.FC<MilestoneFormProps> = ({ onAddMilestone }) => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [icon, setIcon] = useState<IconType>('project');
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerateDescription = async () => {
    if (!title) {
      setError('Please enter a title first.');
      return;
    }
    setError(null);
    setIsGenerating(true);
    try {
      const generatedDesc = await generateDescription(title, date);
      setDescription(generatedDesc);
    } catch (err) {
      setError('Failed to generate description. Please try again.');
      console.error(err);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !date || !description) {
      setError('Please fill out all fields.');
      return;
    }
    setError(null);
    onAddMilestone({ title, date, description, icon });
    setTitle('');
    setDate('');
    setDescription('');
    setIcon('project');
  };

  return (
    <div className="bg-slate-900 p-6 rounded-2xl shadow-xl border border-slate-800">
      {error && <div className="bg-red-500/10 text-red-400 p-3 rounded-lg mb-6 text-sm">{error}</div>}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-slate-400 mb-1">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full bg-slate-800 border-slate-700 rounded-lg shadow-sm focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white p-3 transition-all"
            placeholder="e.g., Launched New Feature"
          />
        </div>
        <div>
          <label htmlFor="date" className="block text-sm font-medium text-slate-400 mb-1">Date</label>
          <input
            type="text"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full bg-slate-800 border-slate-700 rounded-lg shadow-sm focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white p-3 transition-all"
            placeholder="e.g., March 2023"
          />
        </div>
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-slate-400 mb-1">Learnings & Description</label>
          <div className="relative">
            <textarea
              id="description"
              rows={5}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full bg-slate-800 border-slate-700 rounded-lg shadow-sm focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white p-3 transition-all resize-none"
              placeholder="Describe the experience and what you learned..."
            />
            <button
              type="button"
              onClick={handleGenerateDescription}
              disabled={isGenerating || !title}
              className="absolute bottom-3 right-3 flex items-center gap-2 bg-cyan-600/20 hover:bg-cyan-600/40 text-cyan-300 hover:text-cyan-200 border border-cyan-500/30 disabled:opacity-50 disabled:cursor-not-allowed text-xs font-semibold py-1.5 px-3 rounded-md transition-all duration-300"
            >
              {isGenerating ? <LoadingSpinner /> : '✨ Generate with AI'}
            </button>
          </div>
        </div>
        <div>
          <label htmlFor="icon" className="block text-sm font-medium text-slate-400 mb-1">Icon Category</label>
          <div className="relative">
            <select
              id="icon"
              value={icon}
              onChange={(e) => setIcon(e.target.value as IconType)}
              className="w-full bg-slate-800 border-slate-700 rounded-lg shadow-sm focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white p-3 appearance-none transition-all"
            >
              <option value="project">Project</option>
              <option value="work">Work</option>
              <option value="education">Education</option>
              <option value="personal">Personal</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-400">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-bold py-3.5 px-4 rounded-lg transition-all duration-300 transform hover:scale-[1.02] shadow-lg shadow-cyan-500/20"
        >
          Add Milestone
        </button>
      </form>
    </div>
  );
};
