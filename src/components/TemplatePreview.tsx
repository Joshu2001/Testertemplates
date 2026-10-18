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
    default:
      return <ParallaxPreview />;
  }
};

const ParallaxPreview = () => (
  <div className="relative w-full h-full overflow-hidden bg-gradient-to-br from-indigo-900 to-purple-900">
    {/* Background layer */}
    <div className="absolute inset-0 flex items-center justify-center" style={{ animation: 'parallax3 3s ease-in-out infinite' }}>
      <div className="w-32 h-32 rounded-full bg-indigo-600/30 blur-xl" />
    </div>
    {/* Mid layer */}
    <div className="absolute inset-0 flex items-center justify-center" style={{ animation: 'parallax2 3s ease-in-out infinite' }}>
      <div className="w-20 h-20 rounded-lg bg-purple-500/50 rotate-12" />
    </div>
    {/* Front layer */}
    <div className="absolute inset-0 flex items-center justify-center" style={{ animation: 'parallax1 3s ease-in-out infinite' }}>
      <span className="text-white font-bold text-lg drop-shadow-lg">PARALLAX</span>
    </div>
  </div>
);

const TextBehindPreview = () => (
  <div className="relative w-full h-full overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900">
    {/* Background text */}
    <div className="absolute inset-0 flex items-center justify-center">
      <span className="text-5xl font-black text-white/20 tracking-wider">BEHIND</span>
    </div>
    {/* Object that moves */}
    <div className="absolute inset-0 flex items-center justify-center" style={{ animation: 'textBehind 3s ease-in-out infinite' }}>
      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500 shadow-lg shadow-cyan-500/30" />
    </div>
    {/* Foreground text */}
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
    <div
      className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-transparent via-orange-400/60 to-transparent"
      style={{ animation: 'lightLeak 3s ease-in-out infinite' }}
    />
    <div
      className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-transparent via-yellow-300/40 to-transparent"
      style={{ animation: 'lightLeak 3s ease-in-out infinite 0.3s' }}
    />
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

export default TemplatePreview;
