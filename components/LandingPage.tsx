import React from 'react';
import { LinkedInIcon } from './IconComponents';

const stationLogos = [
  { name: 'Hi FM', url: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/Hifm_logo.png' },
  { name: 'Hala FM', url: 'https://halafm.om/wp-content/uploads/2022/07/logo_re512-512.png' },
  { name: 'So Radio', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSImtiBD2VDFqwBJLM3cwcn-czXLa9pUiwaNg&s' },
  { name: 'BBC', url: 'https://radiotoday.co.uk/wp-content/uploads/2023/07/BBC-Radio.jpg' },
  { name: 'Monte Carlo', url: 'https://www.radio.net/300/mcd.png?version=7853e111bfd8e497a45bd87a18db37923b000f4d' },
  { name: 'Saut Al Khaleej', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOHLnpwtFD2j0ZXQHf15eEYqFwOK9zNuijWw&s' },
  { name: 'Radio Mango', url: 'https://upload.wikimedia.org/wikipedia/commons/e/ef/RadioMango.gif' },
  { name: 'Spice FM', url: 'https://spicefm.co.uk/wp-content/uploads/2020/12/spice-fm-PNG-370x370.png' },
];

export const LandingPage: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row h-auto lg:h-screen overflow-hidden">
      {/* Text Content */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 lg:pl-24 pt-20 lg:pt-0 pb-20 lg:pb-0 z-10 order-2 lg:order-1">
        <div className="space-y-8">
          <div className="flex gap-6 text-neutral-500 mb-4">
            <a 
              href="https://www.linkedin.com/in/lijo-philip-846b387b/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-white transition-colors"
            >
              <LinkedInIcon />
            </a>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold text-white tracking-tight leading-tight">
            I am <br />
            <span className="text-neutral-500">Lijo Philip</span>
          </h1>
          
          <div className="inline-block border border-neutral-700 px-6 py-3">
            <span className="text-lg lg:text-xl font-medium text-neutral-300 tracking-[0.2em] uppercase">
              Broadcast Engineer
            </span>
          </div>

          <p className="max-w-md text-neutral-400 mt-6 leading-loose text-sm lg:text-base">
            Powering the airwaves with over 17 years of specialized experience in Commercial FM Radio engineering. 
            Ensuring every broadcast reaches its audience with crystal-clear precision and technical excellence.
          </p>

          <div className="pt-6">
            <p className="text-xs text-neutral-600 uppercase tracking-widest mb-4 font-semibold">
              Stations & Networks
            </p>
            <div className="flex flex-wrap gap-4 items-center">
              {stationLogos.map((logo) => (
                <div 
                  key={logo.name} 
                  className="w-12 h-12 bg-white rounded-full p-1.5 overflow-hidden flex items-center justify-center opacity-80 hover:opacity-100 transition-all duration-300 transform hover:scale-110 shadow-lg shadow-black/50" 
                  title={logo.name}
                >
                  <img 
                    src={logo.url} 
                    alt={logo.name} 
                    className="w-full h-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Hero Image */}
      <div className="w-full lg:w-1/2 h-80 lg:h-full relative order-1 lg:order-2">
        <div className="absolute inset-0 bg-neutral-950/20 z-10"></div>
        <img 
          src="https://i.ibb.co/jvDGQ2mB/lijo1.jpg" 
          alt="Lijo Philip" 
          className="w-full h-full object-cover object-top grayscale contrast-125"
        />
      </div>
    </div>
  );
};