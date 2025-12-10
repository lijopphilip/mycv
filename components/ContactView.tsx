
import React from 'react';
import { MailIcon, LinkedInIcon } from './IconComponents';

export const ContactView: React.FC = () => {
  return (
    <div className="animate-fade-in flex flex-col items-center justify-center min-h-[80vh] px-6 pt-12 pb-24">
      <div className="w-full max-w-2xl text-center">
        <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">
          Get in Touch
        </h1>
        <p className="text-neutral-500 text-lg mb-16 max-w-lg mx-auto">
          Ready to optimize your transmission chain or discuss studio design?
        </p>
        
        <div className="border border-neutral-800 p-10 md:p-12 mb-12">
          <div className="flex flex-col items-center gap-6">
            <div className="text-white">
              <MailIcon />
            </div>
            <div>
              <p className="text-neutral-400 mb-2 text-sm uppercase tracking-wider">Email Address</p>
              <a 
                href="mailto:lijopphilip@gmail.com" 
                className="text-2xl md:text-3xl font-bold text-white hover:text-neutral-400 transition-colors"
              >
                lijopphilip@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-12">
           <a 
             href="https://www.linkedin.com/in/lijo-philip-846b387b/" 
             target="_blank" 
             rel="noopener noreferrer" 
             className="flex flex-col items-center gap-2 text-neutral-600 hover:text-white transition-colors group"
           >
             <LinkedInIcon />
             <span className="text-sm tracking-widest uppercase text-[10px] mt-2">LinkedIn</span>
           </a>
        </div>
      </div>
    </div>
  );
};
