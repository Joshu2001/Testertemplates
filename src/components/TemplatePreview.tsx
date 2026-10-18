import React from 'react';

interface PreviewProps {
  type: string;
}

export const TemplatePreview: React.FC<PreviewProps> = ({ type }) => {
  switch (type) {
    case 'parallax':
      return <ParallaxPreview />;
    case 'textBehind':
      return <TextBehindPreview />;
    case 'highlight':
      return <HighlightPreview />;
    case 'zoomBlur':
      return <ZoomBlurPreview />;
    case 'glitch':
      return <GlitchPreview />;
    case 'split':
      return <SplitPreview />;
    case 'kinetic':
      return <KineticPreview />;
    case 'lightLeak':
      return <LightLeakPreview />;
    case 'mask':
      return <MaskPreview />;
    case 'particles':
      return <ParticlesPreview />;
    case 'typewriter':
      return <TypewriterPreview />;
    case 'rotate3d':
      return <Rotate3DPreview />;
    case 'newspaper3d':
      return <Newspaper3DPreview />;
    case 'headlineFly':
      return <HeadlineFlyPreview />;
    case 'moneyCounter':
      return <MoneyCounterPreview />;
    case 'photoStack':
      return <PhotoStackPreview />;
    case 'screenBlur':
      return <ScreenBlurPreview />;
    case 'timeline':
      return <TimelinePreview />;
    case 'titleCinematic':
      return <TitleCinematicPreview />;
    case 'pointAnnotate':
      return <PointAnnotatePreview />;
    case 'filmGrain':
      return <FilmGrainPreview />;
    case 'colorImpact':
      return <ColorImpactPreview />;
    case 'interviewCutin':
      return <InterviewCutinPreview />;
    case 'evidenceZoom':
      return <EvidenceZoomPreview />;
    case 'scrapbookFlip':
      return <ScrapbookFlipPreview />;
    case 'redactedDoc':
      return <RedactedDocPreview />;
    case 'mapPin':
      return <MapPinPreview />;
    case 'fastCut':
      return <FastCutPreview />;
    case 'tensionText':
      return <TensionTextPreview />;
    case 'blackCut':
      return <BlackCutPreview />;
    case 'socialPost':
      return <SocialPostPreview />;
    case 'stockChart':
      return <StockChartPreview />;
    case 'classifiedStamp':
      return <ClassifiedStampPreview />;
    case 'connectionWeb':
      return <ConnectionWebPreview />;
    case 'textScramble':
      return <TextScramblePreview />;
    case 'magnifyZoom':
      return <MagnifyZoomPreview />;
    case 'conspiracyBoard':
      return <ConspiracyBoardPreview />;
    case 'whipPan':
      return <WhipPanPreview />;
    case 'dollyZoom':
      return <DollyZoomPreview />;
    case 'flashFrame':
      return <FlashFramePreview />;
    case 'quoteReveal':
      return <QuoteRevealPreview />;
    case 'progressiveText':
      return <ProgressiveTextPreview />;
    case 'cameraShake':
      return <CameraShakePreview />;
    default:
      return <ParallaxPreview />;
  }
};

// === ORIGINAL PREVIEWS ===

const ParallaxPreview = () => (
  <div className="relative w-full h-full overflow-hidden bg-gradient-to-br from-indigo-900 to-purple-900">
    <div className="absolute inset-0 flex items-center justify-center" style={{ animation: 'parallax3 3s ease-in-out infinite' }}>
      <div className="w-32 h-32 rounded-full bg-indigo-600/30 blur-xl" />
    </div>
    <div className="absolute inset-0 flex items-center justify-center" style={{ animation: 'parallax2 3s ease-in-out infinite' }}>
      <div className="w-20 h-20 rounded-lg bg-purple-500/50 rotate-12" />
    </div>
    <div className="absolute inset-0 flex items-center justify-center" style={{ animation: 'parallax1 3s ease-in-out infinite' }}>
      <span className="text-white font-bold text-lg drop-shadow-lg">PARALLAX</span>
    </div>
  </div>
);

const TextBehindPreview = () => (
  <div className="relative w-full h-full overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900">
    <div className="absolute inset-0 flex items-center justify-center">
      <span className="text-5xl font-black text-white/20 tracking-wider">BEHIND</span>
    </div>
    <div className="absolute inset-0 flex items-center justify-center" style={{ animation: 'textBehind 3s ease-in-out infinite' }}>
      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500 shadow-lg shadow-cyan-500/30" />
    </div>
    <div className="absolute inset-0 flex items-center justify-center">
      <span className="text-2xl font-bold text-white tracking-wider">FRONT</span>
    </div>
  </div>
);

const HighlightPreview = () => (
  <div className="relative w-full h-full overflow-hidden bg-gradient-to-br from-amber-50 to-orange-50 flex flex-col items-center justify-center gap-2 p-4">
    <div className="relative">
      <span className="text-lg font-semibold text-gray-800">Important Text</span>
      <div className="absolute bottom-0 left-0 h-3 bg-yellow-400/70 -z-0" style={{ animation: 'highlight 3s ease-in-out infinite' }} />
    </div>
    <div className="relative">
      <span className="text-sm text-gray-600">Key document content</span>
      <div className="absolute bottom-0 left-0 h-2 bg-orange-300/60 -z-0" style={{ animation: 'highlight 3s ease-in-out infinite 0.5s' }} />
    </div>
    <div className="relative">
      <span className="text-sm text-gray-600">Highlighted section</span>
      <div className="absolute bottom-0 left-0 h-2 bg-yellow-300/60 -z-0" style={{ animation: 'highlight 3s ease-in-out infinite 1s' }} />
    </div>
  </div>
);

const ZoomBlurPreview = () => (
  <div className="relative w-full h-full overflow-hidden bg-gradient-to-br from-rose-900 to-pink-900 flex items-center justify-center">
    <div className="absolute inset-0 flex items-center justify-center" style={{ animation: 'zoomBlur 2s ease-in-out infinite' }}>
      <div className="w-full h-full bg-gradient-to-br from-rose-500/40 to-pink-500/40 flex items-center justify-center">
        <span className="text-white font-bold text-xl">ZOOM</span>
      </div>
    </div>
  </div>
);

const GlitchPreview = () => (
  <div className="relative w-full h-full overflow-hidden bg-black flex items-center justify-center">
    <div className="relative">
      <span className="text-2xl font-black text-white tracking-wider">GLITCH</span>
      <span className="absolute top-0 left-0 text-2xl font-black text-cyan-400 tracking-wider" style={{ animation: 'glitch1 1.5s infinite' }}>GLITCH</span>
      <span className="absolute top-0 left-0 text-2xl font-black text-red-400 tracking-wider" style={{ animation: 'glitch2 1.5s infinite 0.1s' }}>GLITCH</span>
    </div>
  </div>
);

const SplitPreview = () => (
  <div className="relative w-full h-full overflow-hidden bg-gradient-to-br from-emerald-900 to-teal-900">
    <div className="absolute inset-0 flex items-center justify-center">
      <span className="text-white font-bold text-lg">REVEALED</span>
    </div>
    <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-br from-emerald-700 to-emerald-800 flex items-center justify-center" style={{ animation: 'splitReveal 3s ease-in-out infinite' }}>
      <span className="text-white/50 font-bold text-sm">LEFT</span>
    </div>
    <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-br from-teal-700 to-teal-800 flex items-center justify-center" style={{ animation: 'splitReveal2 3s ease-in-out infinite' }}>
      <span className="text-white/50 font-bold text-sm">RIGHT</span>
    </div>
  </div>
);

const KineticPreview = () => (
  <div className="relative w-full h-full overflow-hidden bg-gradient-to-br from-violet-900 to-fuchsia-900 flex items-center justify-center gap-1">
    {['K', 'I', 'N', 'E'].map((char, i) => (
      <span
        key={i}
        className="text-white font-black text-2xl"
        style={{ animation: `kineticBounce 2s ease-in-out infinite ${i * 0.15}s` }}
      >
        {char}
      </span>
    ))}
  </div>
);

const LightLeakPreview = () => (
  <div className="relative w-full h-full overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900">
    <div className="absolute inset-0 flex items-center justify-center">
      <span className="text-white/60 text-sm font-medium">Your Footage</span>
    </div>
    <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-transparent via-orange-400/60 to-transparent" style={{ animation: 'lightLeak 3s ease-in-out infinite' }} />
    <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-transparent via-yellow-300/40 to-transparent" style={{ animation: 'lightLeak 3s ease-in-out infinite 0.3s' }} />
  </div>
);

const MaskPreview = () => (
  <div className="relative w-full h-full overflow-hidden bg-gradient-to-br from-sky-900 to-blue-900">
    <div className="absolute inset-0 flex items-center justify-center" style={{ animation: 'maskReveal 3s ease-in-out infinite' }}>
      <div className="w-full h-full bg-gradient-to-br from-sky-400 to-blue-500 flex items-center justify-center">
        <span className="text-white font-bold text-lg">REVEAL</span>
      </div>
    </div>
  </div>
);

const ParticlesPreview = () => (
  <div className="relative w-full h-full overflow-hidden bg-gradient-to-br from-gray-900 to-slate-900 flex items-center justify-center">
    <span className="text-white font-bold text-lg">TEXT</span>
    {Array.from({ length: 12 }).map((_, i) => (
      <div
        key={i}
        className="absolute w-1.5 h-1.5 rounded-full bg-white/70"
        style={{
          left: `${20 + Math.random() * 60}%`,
          top: `${30 + Math.random() * 40}%`,
          animation: `particleFloat ${2 + Math.random() * 2}s ease-in-out infinite ${Math.random() * 2}s`
        }}
      />
    ))}
  </div>
);

const TypewriterPreview = () => (
  <div className="relative w-full h-full overflow-hidden bg-gradient-to-br from-gray-900 to-zinc-900 flex items-center justify-center">
    <div className="flex items-center">
      <div className="overflow-hidden">
        <span className="text-white font-mono text-sm whitespace-nowrap" style={{ animation: 'typewriter 4s steps(12) infinite' }}>
          Hello World_
        </span>
      </div>
      <span className="text-white font-mono text-sm ml-0.5" style={{ animation: 'cursorBlink 0.8s infinite' }}>|</span>
    </div>
  </div>
);

const Rotate3DPreview = () => (
  <div className="relative w-full h-full overflow-hidden bg-gradient-to-br from-neutral-800 to-neutral-900 flex items-center justify-center">
    <div style={{ animation: 'rotate3d 3s ease-in-out infinite' }}>
      <div className="w-24 h-16 rounded-lg bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center shadow-xl">
        <span className="text-white font-bold text-xs">3D FLIP</span>
      </div>
    </div>
  </div>
);

// === NEW JAMES JANI STYLE PREVIEWS ===

const Newspaper3DPreview = () => (
  <div className="relative w-full h-full overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" style={{ perspective: '600px' }}>
    <div className="absolute inset-0 flex items-center justify-center" style={{ animation: 'rotate3d 5s ease-in-out infinite' }}>
      {/* Newspaper articles in 3D space */}
      <div className="absolute w-20 h-14 bg-amber-50 rounded-sm shadow-lg -rotate-6 -translate-x-6 -translate-y-2 p-1" style={{ animation: 'parallax2 4s ease-in-out infinite' }}>
        <div className="w-full h-1 bg-gray-800 mb-0.5 rounded-sm" />
        <div className="w-3/4 h-0.5 bg-gray-400 mb-0.5 rounded-sm" />
        <div className="w-full h-0.5 bg-gray-300 mb-0.5 rounded-sm" />
        <div className="w-2/3 h-0.5 bg-gray-300 rounded-sm" />
      </div>
      <div className="absolute w-22 h-16 bg-amber-50 rounded-sm shadow-lg rotate-3 translate-x-4 translate-y-1 p-1" style={{ animation: 'parallax1 4s ease-in-out infinite' }}>
        <div className="w-full h-1.5 bg-gray-900 mb-1 rounded-sm" />
        <div className="w-full h-0.5 bg-gray-400 mb-0.5 rounded-sm" />
        <div className="w-4/5 h-0.5 bg-gray-400 mb-0.5 rounded-sm" />
        <div className="w-full h-0.5 bg-gray-300 mb-0.5 rounded-sm" />
        <div className="w-3/4 h-0.5 bg-gray-300 rounded-sm" />
      </div>
      <div className="absolute w-18 h-12 bg-amber-50 rounded-sm shadow-lg rotate-12 translate-x-8 -translate-y-4 p-1" style={{ animation: 'parallax3 4s ease-in-out infinite' }}>
        <div className="w-full h-1 bg-gray-800 mb-0.5 rounded-sm" />
        <div className="w-2/3 h-0.5 bg-gray-400 rounded-sm" />
      </div>
    </div>
    {/* Highlight sweep */}
    <div className="absolute bottom-4 left-4 right-4 h-2 bg-yellow-400/60 rounded-sm" style={{ animation: 'highlight 3s ease-in-out infinite' }} />
  </div>
);

const HeadlineFlyPreview = () => (
  <div className="relative w-full h-full overflow-hidden bg-gradient-to-br from-slate-900 to-gray-900">
    {/* Headlines flying in from different directions */}
    <div className="absolute top-3 left-2 px-2 py-0.5 bg-white/90 rounded-sm shadow-md" style={{ animation: 'slideUp 3s ease-in-out infinite' }}>
      <span className="text-[8px] font-bold text-gray-900">BREAKING NEWS</span>
    </div>
    <div className="absolute top-8 right-2 px-2 py-0.5 bg-white/90 rounded-sm shadow-md" style={{ animation: 'slideUp 3s ease-in-out infinite 0.3s' }}>
      <span className="text-[8px] font-bold text-gray-900">EXCLUSIVE REPORT</span>
    </div>
    <div className="absolute top-14 left-4 px-2 py-0.5 bg-white/90 rounded-sm shadow-md" style={{ animation: 'slideUp 3s ease-in-out infinite 0.6s' }}>
      <span className="text-[8px] font-bold text-gray-900">$69M SCANDAL</span>
    </div>
    <div className="absolute top-20 right-4 px-2 py-0.5 bg-red-500/90 rounded-sm shadow-md" style={{ animation: 'slideUp 3s ease-in-out infinite 0.9s' }}>
      <span className="text-[8px] font-bold text-white">FRAUD EXPOSED</span>
    </div>
    <div className="absolute bottom-6 left-3 px-2 py-0.5 bg-white/90 rounded-sm shadow-md" style={{ animation: 'slideUp 3s ease-in-out infinite 1.2s' }}>
      <span className="text-[8px] font-bold text-gray-900">INVESTIGATION</span>
    </div>
  </div>
);

const MoneyCounterPreview = () => (
  <div className="relative w-full h-full overflow-hidden bg-gradient-to-br from-gray-950 to-green-950 flex items-center justify-center">
    <div className="text-center">
      <div className="text-green-400/60 text-xs mb-1 font-mono">TOTAL LOSSES</div>
      <div className="font-mono font-black text-2xl text-green-400" style={{ animation: 'fadeInScale 2s ease-in-out infinite' }}>
        $<span>69,000,000</span>
      </div>
      <div className="mt-2 flex items-center justify-center gap-1">
        <div className="w-1 h-1 rounded-full bg-green-400 animate-pulse" />
        <div className="w-1 h-1 rounded-full bg-green-400 animate-pulse" style={{ animationDelay: '0.2s' }} />
        <div className="w-1 h-1 rounded-full bg-green-400 animate-pulse" style={{ animationDelay: '0.4s' }} />
      </div>
    </div>
    {/* Floating dollar signs */}
    {Array.from({ length: 6 }).map((_, i) => (
      <span
        key={i}
        className="absolute text-green-500/30 font-bold text-sm"
        style={{
          left: `${10 + i * 15}%`,
          top: `${20 + (i % 3) * 25}%`,
          animation: `particleFloat ${2 + i * 0.5}s ease-in-out infinite ${i * 0.3}s`
        }}
      >
        $
      </span>
    ))}
  </div>
);

const PhotoStackPreview = () => (
  <div className="relative w-full h-full overflow-hidden bg-gradient-to-br from-gray-900 to-slate-900" style={{ perspective: '800px' }}>
    <div className="absolute inset-0 flex items-center justify-center">
      {/* Stacked photos with 3D rotation */}
      <div className="absolute w-16 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded shadow-xl -rotate-12" style={{ animation: 'parallax3 4s ease-in-out infinite' }}>
        <div className="w-full h-full flex items-center justify-center text-white text-[6px]">📷</div>
      </div>
      <div className="absolute w-16 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded shadow-xl rotate-6 translate-x-2" style={{ animation: 'parallax2 4s ease-in-out infinite' }}>
        <div className="w-full h-full flex items-center justify-center text-white text-[6px]">📷</div>
      </div>
      <div className="absolute w-16 h-12 bg-gradient-to-br from-rose-400 to-rose-600 rounded shadow-xl -rotate-3 -translate-x-3 translate-y-2" style={{ animation: 'parallax1 4s ease-in-out infinite' }}>
        <div className="w-full h-full flex items-center justify-center text-white text-[6px]">📷</div>
      </div>
    </div>
  </div>
);

const ScreenBlurPreview = () => (
  <div className="relative w-full h-full overflow-hidden bg-gray-900">
    {/* Simulated screen content */}
    <div className="absolute inset-2 rounded bg-gray-800 flex flex-col p-2 gap-1">
      <div className="w-3/4 h-1.5 bg-gray-600 rounded" />
      <div className="w-full h-1 bg-gray-700 rounded" />
      <div className="w-2/3 h-1 bg-gray-700 rounded" />
      <div className="w-full h-1 bg-gray-700 rounded" />
      <div className="w-1/2 h-1 bg-gray-700 rounded" />
    </div>
    {/* Blur overlay */}
    <div className="absolute inset-0 backdrop-blur-[3px] bg-gray-900/30" />
    {/* TV noise lines */}
    {Array.from({ length: 8 }).map((_, i) => (
      <div
        key={i}
        className="absolute left-0 right-0 h-px bg-white/5"
        style={{ top: `${i * 14}%` }}
      />
    ))}
    {/* Scan line effect */}
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/3 to-transparent" style={{ animation: 'slideUp 4s linear infinite' }} />
  </div>
);

const TimelinePreview = () => (
  <div className="relative w-full h-full overflow-hidden bg-gradient-to-br from-gray-900 to-slate-900 flex items-center">
    {/* Timeline line */}
    <div className="absolute top-1/2 left-4 right-4 h-0.5 bg-gray-700 -translate-y-1/2" />
    {/* Timeline points */}
    {[0, 1, 2, 3].map(i => (
      <div
        key={i}
        className="absolute flex flex-col items-center"
        style={{
          left: `${15 + i * 23}%`,
          top: '50%',
          transform: 'translateY(-50%)',
          animation: `fadeInScale 3s ease-in-out infinite ${i * 0.5}s`
        }}
      >
        <div className="w-3 h-3 rounded-full bg-purple-500 border-2 border-purple-300 mb-1" />
        <div className="w-8 h-0.5 bg-gray-600 rounded" />
        <span className="text-[7px] text-gray-400 mt-1">20{i}9</span>
      </div>
    ))}
    {/* Progress line */}
    <div className="absolute top-1/2 left-4 h-0.5 bg-purple-500 -translate-y-1/2" style={{ animation: 'highlight 4s ease-in-out infinite' }} />
  </div>
);

const TitleCinematicPreview = () => (
  <div className="relative w-full h-full overflow-hidden bg-black flex items-center justify-center">
    {/* Subtle background glow */}
    <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-transparent" />
    {/* Title text with shake and glow */}
    <div style={{ animation: 'shake 3s ease-in-out infinite' }}>
      <span className="text-white font-black text-xl tracking-wider" style={{ textShadow: '0 0 20px rgba(168,85,247,0.5), 0 0 40px rgba(168,85,247,0.3)' }}>
        THE SCAM
      </span>
    </div>
    {/* Impact lines */}
    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-16 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent" style={{ animation: 'fadeInScale 3s ease-in-out infinite' }} />
  </div>
);

const PointAnnotatePreview = () => (
  <div className="relative w-full h-full overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900">
    {/* Content area */}
    <div className="absolute top-4 left-4 right-4 bottom-4 bg-gray-700/50 rounded-lg p-2">
      <div className="w-full h-1.5 bg-gray-600 rounded mb-1" />
      <div className="w-3/4 h-1 bg-gray-600 rounded mb-1" />
      <div className="w-full h-1 bg-gray-600 rounded" />
      {/* Highlighted area */}
      <div className="absolute top-6 right-6 w-8 h-4 border-2 border-yellow-400 rounded" style={{ animation: 'shake 2s ease-in-out infinite' }} />
    </div>
    {/* Pointing hand */}
    <div className="absolute" style={{ top: '55%', right: '20%', animation: 'textBehind 3s ease-in-out infinite' }}>
      <span className="text-xl">👆</span>
    </div>
  </div>
);

const FilmGrainPreview = () => (
  <div className="relative w-full h-full overflow-hidden bg-gradient-to-br from-gray-700 to-gray-800">
    <div className="absolute inset-0 flex items-center justify-center">
      <span className="text-white/50 text-sm">Your Footage</span>
    </div>
    {/* Film grain dots */}
    {Array.from({ length: 30 }).map((_, i) => (
      <div
        key={i}
        className="absolute w-0.5 h-0.5 bg-white/20 rounded-full"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animation: `particleFloat ${1 + Math.random()}s ease-in-out infinite ${Math.random() * 2}s`
        }}
      />
    ))}
    {/* Scan lines */}
    {Array.from({ length: 5 }).map((_, i) => (
      <div key={i} className="absolute left-0 right-0 h-px bg-white/5" style={{ top: `${20 + i * 15}%` }} />
    ))}
    {/* Vignette */}
    <div className="absolute inset-0 bg-gradient-radial from-transparent to-black/40" style={{ background: 'radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.4) 100%)' }} />
  </div>
);

const ColorImpactPreview = () => (
  <div className="relative w-full h-full overflow-hidden bg-gradient-to-br from-gray-900 to-black flex items-center justify-center">
    <div style={{ animation: 'fadeInScale 2s ease-in-out infinite' }}>
      <span className="text-2xl font-black tracking-wider" style={{ animation: 'colorShift 2s ease-in-out infinite' }}>
        EXPOSED
      </span>
    </div>
    {/* Glow burst */}
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-20 h-20 rounded-full bg-purple-500/20 blur-xl" style={{ animation: 'fadeInScale 2s ease-in-out infinite' }} />
    </div>
  </div>
);

const InterviewCutinPreview = () => (
  <div className="relative w-full h-full overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900">
    {/* Person silhouette */}
    <div className="absolute inset-0 flex items-center justify-center" style={{ animation: 'zoomBlur 4s ease-in-out infinite' }}>
      <div className="w-12 h-16 bg-gradient-to-b from-gray-600 to-gray-700 rounded-t-full" />
    </div>
    {/* Lower third */}
    <div className="absolute bottom-3 left-3 right-3">
      <div className="bg-black/70 backdrop-blur-sm rounded px-2 py-1 border-l-2 border-purple-500">
        <span className="text-white text-[8px] font-semibold">John Doe</span>
        <br />
        <span className="text-gray-400 text-[6px]">Former CEO, Company Inc.</span>
      </div>
    </div>
  </div>
);

const EvidenceZoomPreview = () => (
  <div className="relative w-full h-full overflow-hidden bg-gradient-to-br from-amber-50 to-amber-100">
    <div className="absolute inset-0 flex items-center justify-center" style={{ animation: 'zoomBlur 5s ease-in-out infinite' }}>
      {/* Document */}
      <div className="w-24 h-20 bg-white shadow-lg rounded-sm p-2 border border-gray-200">
        <div className="w-full h-1.5 bg-gray-800 mb-1 rounded-sm" />
        <div className="w-3/4 h-0.5 bg-gray-400 mb-0.5" />
        <div className="w-full h-0.5 bg-gray-400 mb-0.5" />
        <div className="w-2/3 h-0.5 bg-gray-400 mb-0.5" />
        <div className="w-full h-0.5 bg-gray-300 mb-0.5" />
        <div className="w-1/2 h-0.5 bg-gray-300" />
        {/* Highlighted section */}
        <div className="mt-1 w-3/4 h-2 bg-yellow-300/50 rounded-sm" />
      </div>
    </div>
    {/* Subtle shake */}
    <div className="absolute inset-0" style={{ animation: 'shake 5s ease-in-out infinite' }} />
  </div>
);

const ScrapbookFlipPreview = () => (
  <div className="relative w-full h-full overflow-hidden bg-gradient-to-br from-amber-900 to-yellow-900">
    <div className="absolute inset-0 flex items-center justify-center" style={{ perspective: '600px' }}>
      {/* Pages flipping */}
      <div className="absolute w-20 h-16 bg-amber-50 rounded shadow-lg" style={{ animation: 'rotate3d 3s ease-in-out infinite', transformOrigin: 'left center' }}>
        <div className="p-1.5">
          <div className="w-full h-1 bg-gray-800 mb-0.5 rounded-sm" />
          <div className="w-3/4 h-0.5 bg-gray-400 rounded-sm" />
          <div className="w-full h-0.5 bg-gray-300 rounded-sm" />
        </div>
      </div>
      {/* Second page behind */}
      <div className="absolute w-20 h-16 bg-amber-100 rounded shadow -rotate-2 translate-x-1">
        <div className="p-1.5">
          <div className="w-full h-1 bg-gray-700 mb-0.5 rounded-sm" />
          <div className="w-2/3 h-0.5 bg-gray-400 rounded-sm" />
        </div>
      </div>
    </div>
  </div>
);

const RedactedDocPreview = () => (
  <div className="relative w-full h-full overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
    <div className="w-28 h-24 bg-white shadow-lg rounded-sm p-2 border border-gray-300">
      <div className="w-full h-1.5 bg-gray-800 mb-1.5 rounded-sm" />
      <div className="w-full h-1 bg-gray-400 mb-0.5 rounded-sm" />
      {/* Redacted bars that animate */}
      <div className="relative w-full h-2 mb-0.5">
        <div className="absolute inset-0 bg-gray-400 rounded-sm" />
        <div className="absolute inset-y-0 left-0 bg-black rounded-sm" style={{ animation: 'highlight 4s ease-in-out infinite' }}>
          <span className="text-[5px] text-white px-0.5 leading-none relative top-0.5">CLASSIFIED</span>
        </div>
      </div>
      <div className="relative w-3/4 h-2 mb-0.5">
        <div className="absolute inset-0 bg-gray-400 rounded-sm" />
        <div className="absolute inset-y-0 left-0 bg-black rounded-sm" style={{ animation: 'highlight 4s ease-in-out infinite 0.5s' }} />
      </div>
      <div className="w-full h-1 bg-gray-300 rounded-sm mt-1" />
      <div className="w-2/3 h-1 bg-gray-300 rounded-sm" />
    </div>
  </div>
);

const MapPinPreview = () => (
  <div className="relative w-full h-full overflow-hidden bg-gradient-to-br from-blue-900 to-indigo-900">
    {/* Map grid */}
    {Array.from({ length: 4 }).map((_, i) => (
      <div key={`h${i}`} className="absolute left-0 right-0 h-px bg-blue-700/30" style={{ top: `${25 + i * 18}%` }} />
    ))}
    {Array.from({ length: 4 }).map((_, i) => (
      <div key={`v${i}`} className="absolute top-0 bottom-0 w-px bg-blue-700/30" style={{ left: `${20 + i * 20}%` }} />
    ))}
    {/* Pins dropping */}
    {[
      { x: '25%', y: '30%', delay: '0s' },
      { x: '60%', y: '45%', delay: '0.5s' },
      { x: '40%', y: '65%', delay: '1s' },
    ].map((pin, i) => (
      <div
        key={i}
        className="absolute flex flex-col items-center"
        style={{ left: pin.x, top: pin.y, animation: `fadeInScale 3s ease-in-out infinite ${pin.delay}` }}
      >
        <span className="text-red-500 text-sm">📍</span>
        {/* Ripple */}
        <div className="absolute -bottom-1 w-4 h-1 rounded-full bg-red-500/30" style={{ animation: 'fadeInScale 3s ease-in-out infinite', animationDelay: pin.delay }} />
      </div>
    ))}
    {/* Connection lines */}
    <svg className="absolute inset-0 w-full h-full" style={{ animation: 'fadeInScale 4s ease-in-out infinite' }}>
      <line x1="25%" y1="35%" x2="60%" y2="50%" stroke="rgba(239,68,68,0.3)" strokeWidth="1" strokeDasharray="4,4" />
      <line x1="60%" y1="50%" x2="40%" y2="70%" stroke="rgba(239,68,68,0.3)" strokeWidth="1" strokeDasharray="4,4" />
    </svg>
  </div>
);

const FastCutPreview = () => (
  <div className="relative w-full h-full overflow-hidden bg-black">
    {/* Rapid flashing cuts */}
    <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center" style={{ animation: 'fastCut1 2s steps(1) infinite' }}>
      <span className="text-white font-bold text-sm">CUT 1</span>
    </div>
    <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center" style={{ animation: 'fastCut2 2s steps(1) infinite' }}>
      <span className="text-white font-bold text-sm">CUT 2</span>
    </div>
    <div className="absolute inset-0 bg-gradient-to-br from-red-600 to-orange-600 flex items-center justify-center" style={{ animation: 'fastCut3 2s steps(1) infinite' }}>
      <span className="text-white font-bold text-sm">CUT 3</span>
    </div>
  </div>
);

// === ADDITIONAL JAMES JANI TECHNIQUES ===

const TensionTextPreview = () => (
  <div className="relative w-full h-full overflow-hidden bg-gradient-to-br from-gray-900 to-black flex items-center justify-center">
    <div className="text-center">
      <div className="flex items-center justify-center gap-1">
        {['He', 'lost', 'EVERYTHING'].map((word, i) => (
          <span
            key={i}
            className={`font-black ${i === 2 ? 'text-red-500 text-xl' : 'text-white text-base'}`}
            style={{ animation: `fadeInScale 2s ease-in-out infinite ${i * 0.4}s`, opacity: 0 }}
          >
            {word}
          </span>
        ))}
      </div>
    </div>
  </div>
);

const BlackCutPreview = () => (
  <div className="relative w-full h-full overflow-hidden bg-black">
    <div className="absolute inset-0 bg-gradient-to-br from-purple-900 to-pink-900 flex items-center justify-center" style={{ animation: 'blackCutFade 3s ease-in-out infinite' }}>
      <span className="text-white font-bold text-lg">REVEAL</span>
    </div>
  </div>
);

const SocialPostPreview = () => (
  <div className="relative w-full h-full overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
    <div className="w-24 bg-white rounded-lg shadow-lg p-2 border border-gray-200" style={{ animation: 'slideUp 3s ease-in-out infinite' }}>
      <div className="flex items-center gap-1 mb-1">
        <div className="w-3 h-3 rounded-full bg-blue-500" />
        <div className="w-10 h-1 bg-gray-800 rounded" />
      </div>
      <div className="w-full h-1 bg-gray-400 rounded mb-0.5" />
      <div className="w-3/4 h-1 bg-gray-400 rounded" />
      <div className="flex items-center gap-2 mt-1">
        <span className="text-[6px] text-gray-500">❤️ 1.2K</span>
        <span className="text-[6px] text-gray-500">💬 89</span>
      </div>
    </div>
    {/* Notification badge */}
    <div className="absolute top-4 right-4 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center" style={{ animation: 'fadeInScale 3s ease-in-out infinite 0.5s' }}>
      <span className="text-white text-[8px] font-bold">1</span>
    </div>
  </div>
);

const StockChartPreview = () => (
  <div className="relative w-full h-full overflow-hidden bg-gradient-to-br from-gray-900 to-green-950">
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 60" preserveAspectRatio="none">
      <path
        d="M 0 50 L 20 45 L 30 40 L 40 35 L 50 30 L 60 25 L 70 20 L 80 15 L 90 10 L 100 5"
        fill="none"
        stroke="#10b981"
        strokeWidth="2"
        style={{ animation: 'chartDraw 3s ease-in-out infinite' }}
      />
      <path
        d="M 0 50 L 20 45 L 30 40 L 40 35 L 50 30 L 60 25 L 70 20 L 80 15 L 90 10 L 100 5 L 100 60 L 0 60 Z"
        fill="url(#greenGradient)"
        opacity="0.3"
        style={{ animation: 'chartDraw 3s ease-in-out infinite' }}
      />
      <defs>
        <linearGradient id="greenGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#10b981" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
    <div className="absolute top-2 left-2 text-green-400 text-[8px] font-mono">+247.8%</div>
  </div>
);

const ClassifiedStampPreview = () => (
  <div className="relative w-full h-full overflow-hidden bg-gradient-to-br from-amber-50 to-amber-100 flex items-center justify-center">
    <div className="w-24 h-20 bg-white shadow-lg rounded-sm p-2 border border-gray-300">
      <div className="w-full h-1 bg-gray-800 mb-1 rounded-sm" />
      <div className="w-3/4 h-0.5 bg-gray-400 mb-0.5" />
      <div className="w-full h-0.5 bg-gray-400 mb-0.5" />
      <div className="w-2/3 h-0.5 bg-gray-300" />
    </div>
    {/* Stamp */}
    <div className="absolute inset-0 flex items-center justify-center" style={{ animation: 'stampSlam 2s ease-out infinite' }}>
      <div className="px-2 py-1 border-4 border-red-600 rounded-sm rotate-[-15deg]">
        <span className="text-red-600 font-black text-xs tracking-wider">CLASSIFIED</span>
      </div>
    </div>
  </div>
);

const ConnectionWebPreview = () => (
  <div className="relative w-full h-full overflow-hidden bg-gradient-to-br from-gray-900 to-slate-900">
    {/* Nodes */}
    {[
      { x: '20%', y: '30%', delay: '0s' },
      { x: '70%', y: '25%', delay: '0.3s' },
      { x: '50%', y: '60%', delay: '0.6s' },
      { x: '80%', y: '70%', delay: '0.9s' },
    ].map((node, i) => (
      <div
        key={i}
        className="absolute w-3 h-3 rounded-full bg-purple-500 border-2 border-purple-300"
        style={{ left: node.x, top: node.y, animation: `fadeInScale 3s ease-in-out infinite ${node.delay}` }}
      />
    ))}
    {/* Connection lines */}
    <svg className="absolute inset-0 w-full h-full" style={{ animation: 'fadeInScale 3s ease-in-out infinite' }}>
      <line x1="20%" y1="32%" x2="70%" y2="27%" stroke="rgba(168,85,247,0.5)" strokeWidth="1" />
      <line x1="70%" y1="27%" x2="50%" y2="62%" stroke="rgba(168,85,247,0.5)" strokeWidth="1" />
      <line x1="50%" y1="62%" x2="80%" y2="72%" stroke="rgba(168,85,247,0.5)" strokeWidth="1" />
      <line x1="20%" y1="32%" x2="50%" y2="62%" stroke="rgba(168,85,247,0.3)" strokeWidth="1" strokeDasharray="2,2" />
    </svg>
  </div>
);

const TextScramblePreview = () => (
  <div className="relative w-full h-full overflow-hidden bg-gradient-to-br from-black to-gray-900 flex items-center justify-center">
    <div className="font-mono text-green-400 text-sm" style={{ animation: 'textScramble 3s steps(10) infinite' }}>
      DECRYPTING...
    </div>
    {/* Matrix-style falling characters */}
    {Array.from({ length: 8 }).map((_, i) => (
      <div
        key={i}
        className="absolute text-green-500/30 text-[8px] font-mono"
        style={{
          left: `${10 + i * 12}%`,
          top: '-10%',
          animation: `matrixFall ${2 + Math.random() * 2}s linear infinite ${Math.random() * 2}s`
        }}
      >
        {String.fromCharCode(65 + Math.floor(Math.random() * 26))}
      </div>
    ))}
  </div>
);

const MagnifyZoomPreview = () => (
  <div className="relative w-full h-full overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
    {/* Document */}
    <div className="absolute inset-4 bg-white shadow-lg rounded-sm p-2">
      <div className="w-full h-1 bg-gray-800 mb-1 rounded-sm" />
      <div className="w-3/4 h-0.5 bg-gray-400 mb-0.5" />
      <div className="w-full h-0.5 bg-gray-400 mb-0.5" />
      <div className="w-2/3 h-0.5 bg-gray-300" />
      {/* Highlighted area */}
      <div className="absolute top-8 right-8 w-6 h-4 bg-yellow-300/50 rounded-sm" />
    </div>
    {/* Magnifying glass */}
    <div className="absolute inset-0 flex items-center justify-center" style={{ animation: 'magnifyMove 3s ease-in-out infinite' }}>
      <div className="w-10 h-10 rounded-full border-4 border-gray-700 bg-white/30 backdrop-blur-sm flex items-center justify-center">
        <div className="w-2 h-2 bg-gray-700 rounded-full" />
      </div>
    </div>
  </div>
);

const ConspiracyBoardPreview = () => (
  <div className="relative w-full h-full overflow-hidden bg-gradient-to-br from-amber-900 to-yellow-900">
    {/* Photos */}
    {[
      { x: '15%', y: '20%', rotate: '-10deg' },
      { x: '65%', y: '15%', rotate: '5deg' },
      { x: '40%', y: '55%', rotate: '-5deg' },
      { x: '75%', y: '60%', rotate: '8deg' },
    ].map((photo, i) => (
      <div
        key={i}
        className="absolute w-8 h-6 bg-gradient-to-br from-gray-600 to-gray-700 rounded-sm shadow-lg"
        style={{ left: photo.x, top: photo.y, transform: `rotate(${photo.rotate})` }}
      >
        <div className="w-full h-full flex items-center justify-center text-white text-[6px]">📷</div>
      </div>
    ))}
    {/* Red strings */}
    <svg className="absolute inset-0 w-full h-full">
      <line x1="18%" y1="23%" x2="68%" y2="18%" stroke="#ef4444" strokeWidth="1" />
      <line x1="68%" y1="18%" x2="43%" y2="58%" stroke="#ef4444" strokeWidth="1" />
      <line x1="43%" y1="58%" x2="78%" y2="63%" stroke="#ef4444" strokeWidth="1" />
      <line x1="18%" y1="23%" x2="43%" y2="58%" stroke="#ef4444" strokeWidth="1" strokeDasharray="2,2" />
    </svg>
    {/* Pins */}
    {[
      { x: '17%', y: '21%' },
      { x: '67%', y: '16%' },
      { x: '42%', y: '56%' },
      { x: '77%', y: '61%' },
    ].map((pin, i) => (
      <div
        key={i}
        className="absolute w-1.5 h-1.5 rounded-full bg-red-600 border border-red-800"
        style={{ left: pin.x, top: pin.y }}
      />
    ))}
  </div>
);

const WhipPanPreview = () => (
  <div className="relative w-full h-full overflow-hidden bg-gradient-to-br from-blue-900 to-indigo-900">
    <div className="absolute inset-0 flex items-center justify-center" style={{ animation: 'whipPan 1s ease-in-out infinite' }}>
      <span className="text-white font-bold text-lg">SCENE</span>
    </div>
    {/* Motion blur streaks */}
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent" style={{ animation: 'whipPan 1s ease-in-out infinite' }} />
  </div>
);

const DollyZoomPreview = () => (
  <div className="relative w-full h-full overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
    {/* Background moving */}
    <div className="absolute inset-0" style={{ animation: 'dollyZoomBg 3s ease-in-out infinite' }}>
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 to-pink-900/30" />
    </div>
    {/* Foreground staying still */}
    <div className="relative z-10">
      <div className="w-12 h-16 bg-gradient-to-br from-gray-600 to-gray-700 rounded-t-full" />
    </div>
  </div>
);

const FlashFramePreview = () => (
  <div className="relative w-full h-full overflow-hidden bg-black">
    <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center" style={{ animation: 'flashFrame 2s steps(1) infinite' }}>
      <span className="text-white font-bold text-sm">BEFORE</span>
    </div>
    <div className="absolute inset-0 bg-white" style={{ animation: 'flashFrameWhite 2s steps(1) infinite' }} />
    <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center" style={{ animation: 'flashFrameAfter 2s steps(1) infinite' }}>
      <span className="text-white font-bold text-sm">AFTER</span>
    </div>
  </div>
);

const QuoteRevealPreview = () => (
  <div className="relative w-full h-full overflow-hidden bg-gradient-to-br from-gray-900 to-black flex items-center justify-center">
    <div className="text-center px-4">
      <div className="text-3xl text-purple-400/30 mb-1">"</div>
      <p className="text-white text-xs italic mb-2" style={{ animation: 'fadeInScale 3s ease-in-out infinite' }}>
        The truth will be revealed
      </p>
      <div className="text-gray-400 text-[8px]" style={{ animation: 'fadeInScale 3s ease-in-out infinite 0.5s' }}>
        — Anonymous
      </div>
    </div>
  </div>
);

const ProgressiveTextPreview = () => (
  <div className="relative w-full h-full overflow-hidden bg-gradient-to-br from-gray-900 to-slate-900 flex items-center justify-center">
    <div className="text-left px-4 space-y-1">
      {['First point', 'Second point', 'Third point', 'Conclusion'].map((line, i) => (
        <div
          key={i}
          className="text-white text-[9px]"
          style={{ animation: `slideUp 3s ease-in-out infinite ${i * 0.5}s`, opacity: 0 }}
        >
          {line}
        </div>
      ))}
    </div>
  </div>
);

const CameraShakePreview = () => (
  <div className="relative w-full h-full overflow-hidden bg-gradient-to-br from-red-900 to-rose-900 flex items-center justify-center">
    <div style={{ animation: 'shake 0.5s ease-in-out infinite' }}>
      <span className="text-white font-black text-xl">IMPACT!</span>
    </div>
  </div>
);

export default TemplatePreview;
