import React, { useState } from 'react';
import { Timeline } from './components/Timeline';
import { LandingPage } from './components/LandingPage';
import { BottomNav } from './components/BottomNav';
import { ContactView } from './components/ContactView';
import { Milestone } from './types';

type ViewType = 'home' | 'experience' | 'academic' | 'developed' | 'contact';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewType>('home');
  const [milestones] = useState<Milestone[]>([
    {
      id: 1,
      title: 'Diploma in Electronics',
      date: '2008',
      description: 'Completed comprehensive technical training in electronics, establishing a robust foundation in circuit analysis, troubleshooting, and electronic systems.',
      icon: 'education',
    },
    {
      id: 2,
      title: 'Junior Technical Supervisor',
      date: 'June 2008',
      description: 'Radio Mango, Malayala Manorama. Responsible for technical maintenance of studio and transmission equipment.',
      icon: 'work',
    },
    {
      id: 10,
      title: 'Silence Detection System',
      date: '2009',
      description: 'Developed a custom silence detection system with central level monitoring to ensure uninterrupted broadcast quality.',
      icon: 'project',
    },
    {
      id: 11,
      title: 'Power Monitoring Device',
      date: '2009',
      description: 'Built a power monitoring and alert device using Microcontrollers to track equipment health and prevent outages.',
      icon: 'project',
    },
    {
      id: 12,
      title: 'Independent Logger System',
      date: '2010',
      description: 'Created an independent logger system with web access for digital archiving and compliance verification.',
      icon: 'project',
    },
    {
      id: 13,
      title: 'Automatic Playback Redundancy',
      date: '2011',
      description: 'Implemented a system for automatic playback of the same song to maintain continuity even if the primary STL (Studio-Transmitter Link) fails.',
      icon: 'project',
    },
    {
      id: 3,
      title: 'Senior Supervisor',
      date: 'January 2012',
      description: 'Radio Mango, Malayala Manorama, Dubai. Managed technical operations and broadcast infrastructure in a challenging international environment.',
      icon: 'work',
    },
    {
      id: 9,
      title: 'B.Tech in Electronics & Communication (IEI)',
      date: '2012',
      description: 'Graduated from the Institution of Engineers (India). Specialized in advanced communication systems, RF engineering, and digital signal processing.',
      icon: 'education',
    },
    {
      id: 14,
      title: 'Dubai Station Infrastructure',
      date: '2012-2013',
      description: 'Complete design and installation of the new Dubai station, including Studio, STL (Studio-Transmitter Link), and Transmission infrastructure.',
      icon: 'project',
    },
    {
      id: 15,
      title: 'Corporate VPN & Data Center Design',
      date: '2014',
      description: 'Designed and commissioned Corporate VPN networks and Data Centers, integrated with AoIP (Audio over IP) networks for secure and efficient internal ecosystem access.',
      icon: 'project',
    },
    {
      id: 16,
      title: 'Audio Processor & MPX Encoding',
      date: '2014',
      description: 'Implemented advanced audio processor workflows and MPX (Multiplex) encode/decode methods for optimized signal quality.',
      icon: 'project',
    },
    {
      id: 17,
      title: 'AoIP Studio Implementation',
      date: '2015',
      description: 'Design and implementation of new studios with AoIP (Audio over IP) utilizing Livewire technology at India for company needs.',
      icon: 'project',
    },
    {
      id: 5,
      title: 'Broadcast Engineer',
      date: 'August 2016',
      description: 'OHI Telecom and Media Houses, Oman. Managed transmission chains and studio engineering for commercial broadcasts.',
      icon: 'work',
    },
    {
      id: 18,
      title: 'Studio & Network Revamp',
      date: '2016-2017',
      description: 'Complete revamping of Studio infrastructure, Networking, Datacenter, and STL systems for modernization.',
      icon: 'project',
    },
    {
      id: 6,
      title: 'Technical Head',
      date: 'January 2018',
      description: 'OHI Telecom and Media Houses, Oman. Oversaw technical strategy, regulatory compliance, and team management.',
      icon: 'work',
    },
    {
      id: 19,
      title: 'Transmission Infra Overhaul',
      date: '2018',
      description: 'Complete revamping of Transmission Infrastructure for 7 Radio Stations across 9 different locations in Oman.',
      icon: 'project',
    },
    {
      id: 20,
      title: 'Centralized Monitoring System',
      date: '2019',
      description: 'Deployed a network and studio monitoring system with centralized access and automatic change-over capabilities.',
      icon: 'project',
    },
    {
      id: 21,
      title: 'Rock Music Station Setup',
      date: '2021',
      description: 'Complete installation of a new Radio Station dedicated to Rock Music in Oman.',
      icon: 'project',
    },
    {
      id: 7,
      title: 'Operations Head',
      date: 'August 2022 - Present',
      description: 'OHI Telecom and Media Houses. Leading overall operations, optimizing technical workflows, and driving strategic growth.',
      icon: 'work',
    },
    {
      id: 22,
      title: 'Visual Radio & Streaming Integration',
      date: '2023',
      description: 'Visual Radio with multiple camera and AoIP integration with automatic camera switching and streaming to multiple platforms.',
      icon: 'project',
    },
    {
      id: 8,
      title: 'AI Control & Streaming Automation',
      date: '2025',
      description: 'Developed an AI-driven control system for scheduling and auto-tracking content. Implemented multiple social media integrations with a podcast streaming setup, including advanced automatic camera switching and recording.',
      icon: 'project',
    }
  ]);

  // Helper to filter milestones based on the view
  const getFilteredMilestones = () => {
    switch (currentView) {
      case 'experience':
        // Reverse to show newest first
        return milestones.filter(m => m.icon === 'work').reverse();
      case 'academic':
        return milestones.filter(m => m.icon === 'education').reverse();
      case 'developed':
        return milestones.filter(m => m.icon === 'project').reverse();
      default:
        return [];
    }
  };

  const getPageInfo = () => {
    switch (currentView) {
      case 'experience': 
        return { 
          title: 'Professional Experience', 
          subtitle: '17+ years ensuring crystal clear airwaves.'
        };
      case 'academic': 
        return { 
          title: 'Academic Journey', 
          subtitle: 'Foundations in Electronics and continuous RF training.'
        };
      case 'developed': 
        return { 
          title: 'Key Projects', 
          subtitle: 'Studio builds, transmitter installations, and technical innovations.'
        };
      default: 
        return { title: '', subtitle: '' };
    }
  };

  const pageInfo = getPageInfo();

  return (
    <div className="bg-neutral-950 min-h-screen text-neutral-300 font-sans selection:bg-white selection:text-black">
      
      {/* Content Area */}
      <main className="min-h-screen pb-24 lg:pb-0">
        {currentView === 'home' && (
          <div className="animate-fade-in">
            <LandingPage />
          </div>
        )}

        {(currentView === 'experience' || currentView === 'academic' || currentView === 'developed') && (
          <div className="animate-fade-in container mx-auto px-6 md:px-12 pt-20 pb-24 max-w-4xl">
            <div className="mb-16 border-l pl-6 border-neutral-800">
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-3 tracking-tight">
                {pageInfo.title}
              </h1>
              <p className="text-neutral-500 text-lg">
                {pageInfo.subtitle}
              </p>
            </div>
            
            <div className="ml-2">
              {getFilteredMilestones().length > 0 ? (
                <Timeline milestones={getFilteredMilestones()} />
              ) : (
                <div className="text-neutral-600 py-12 italic">No items found in this category.</div>
              )}
            </div>
          </div>
        )}

        {currentView === 'contact' && (
          <ContactView />
        )}
      </main>

      {/* Bottom Navigation */}
      <BottomNav currentView={currentView} onViewChange={setCurrentView} />
    </div>
  );
};

export default App;