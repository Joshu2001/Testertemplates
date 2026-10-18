export interface Template {
  id: string;
  name: string;
  category: string;
  description: string;
  duration: string;
  difficulty: 'Easy' | 'Medium' | 'Advanced';
  tags: string[];
  previewType: string;
  featured?: boolean;
}

export const templates: Template[] = [
  // === EXISTING TEMPLATES ===
  {
    id: 'parallax-depth',
    name: 'Parallax Depth',
    category: 'Motion',
    description: 'Multi-layer parallax scrolling effect with depth separation. Perfect for product showcases and storytelling.',
    duration: '3-5s',
    difficulty: 'Easy',
    tags: ['parallax', 'depth', 'layers'],
    previewType: 'parallax'
  },
  {
    id: 'text-behind',
    name: 'Text Behind Object',
    category: 'Typography',
    description: 'Text that flows behind and in front of objects creating a stunning 3D depth effect.',
    duration: '2-4s',
    difficulty: 'Medium',
    tags: ['text', '3d', 'depth'],
    previewType: 'textBehind'
  },
  {
    id: 'doc-highlight',
    name: 'Document Highlight',
    category: 'Text',
    description: 'Animated highlight sweep across text or documents. Great for emphasizing key points.',
    duration: '2-3s',
    difficulty: 'Easy',
    tags: ['highlight', 'document', 'emphasis'],
    previewType: 'highlight'
  },
  {
    id: 'zoom-blur',
    name: 'Zoom Blur Burst',
    category: 'Motion',
    description: 'Dynamic zoom with motion blur for dramatic impact. Ideal for transitions and reveals.',
    duration: '1-2s',
    difficulty: 'Easy',
    tags: ['zoom', 'blur', 'transition'],
    previewType: 'zoomBlur'
  },
  {
    id: 'glitch-effect',
    name: 'Digital Glitch',
    category: 'Effects',
    description: 'Cyberpunk-style digital glitch with RGB split and distortion. Perfect for tech and edgy content.',
    duration: '1-3s',
    difficulty: 'Medium',
    tags: ['glitch', 'cyberpunk', 'distortion'],
    previewType: 'glitch'
  },
  {
    id: 'split-reveal',
    name: 'Split Screen Reveal',
    category: 'Transitions',
    description: 'Content splits apart to reveal what\'s underneath. Clean and modern transition effect.',
    duration: '2-3s',
    difficulty: 'Medium',
    tags: ['split', 'reveal', 'transition'],
    previewType: 'split'
  },
  {
    id: 'kinetic-type',
    name: 'Kinetic Typography',
    category: 'Typography',
    description: 'Dynamic animated text with bouncing and rotating characters. Eye-catching and energetic.',
    duration: '3-5s',
    difficulty: 'Medium',
    tags: ['kinetic', 'typography', 'animated'],
    previewType: 'kinetic'
  },
  {
    id: 'light-leak',
    name: 'Film Light Leak',
    category: 'Effects',
    description: 'Vintage film light leak overlay with warm tones. Adds cinematic feel to any footage.',
    duration: '2-4s',
    difficulty: 'Easy',
    tags: ['light', 'film', 'vintage'],
    previewType: 'lightLeak'
  },
  {
    id: 'mask-reveal',
    name: 'Circle Mask Reveal',
    category: 'Transitions',
    description: 'Content revealed through an expanding circle mask. Smooth and elegant reveal effect.',
    duration: '2-3s',
    difficulty: 'Easy',
    tags: ['mask', 'reveal', 'circle'],
    previewType: 'mask'
  },
  {
    id: 'particle-text',
    name: 'Particle Dissolve',
    category: 'Effects',
    description: 'Text or elements dissolve into floating particles. Magical and mesmerizing effect.',
    duration: '3-5s',
    difficulty: 'Advanced',
    tags: ['particles', 'dissolve', 'magic'],
    previewType: 'particles'
  },
  {
    id: 'typewriter',
    name: 'Typewriter Effect',
    category: 'Typography',
    description: 'Classic typewriter text animation with blinking cursor. Clean and professional.',
    duration: '3-6s',
    difficulty: 'Easy',
    tags: ['typewriter', 'text', 'cursor'],
    previewType: 'typewriter'
  },
  {
    id: '3d-rotate',
    name: '3D Card Flip',
    category: 'Motion',
    description: 'Card rotates in 3D space revealing content on the other side. Modern and interactive.',
    duration: '2-3s',
    difficulty: 'Medium',
    tags: ['3d', 'rotate', 'flip'],
    previewType: 'rotate3d'
  },

  // === NEW JAMES JANI STYLE TEMPLATES ===
  {
    id: 'newspaper-3d',
    name: '3D Newspaper Clipping',
    category: 'Documentary',
    description: 'News articles float in 3D space with camera parallax. The signature documentary-style newspaper effect used in investigative videos.',
    duration: '3-5s',
    difficulty: 'Advanced',
    tags: ['newspaper', '3d', 'documentary', 'parallax'],
    previewType: 'newspaper3d',
    featured: true
  },
  {
    id: 'headline-fly',
    name: 'Headlines Flying In',
    category: 'Documentary',
    description: 'News headlines and article clippings fly in from multiple angles building a wall of evidence. Perfect for investigative storytelling.',
    duration: '3-4s',
    difficulty: 'Medium',
    tags: ['headlines', 'news', 'flying', 'documentary'],
    previewType: 'headlineFly',
    featured: true
  },
  {
    id: 'money-counter',
    name: 'Money Counter',
    category: 'Documentary',
    description: 'Dramatic number counting animation with dollar signs. Numbers rapidly count up/down to emphasize financial figures and fraud amounts.',
    duration: '2-4s',
    difficulty: 'Easy',
    tags: ['money', 'counter', 'numbers', 'finance'],
    previewType: 'moneyCounter',
    featured: true
  },
  {
    id: 'photo-stack-3d',
    name: '3D Photo Stack',
    category: 'Documentary',
    description: 'Multiple photos arranged in 3D space with cinematic camera rotation. Creates a scrapbook-like depth effect for evidence presentation.',
    duration: '4-6s',
    difficulty: 'Advanced',
    tags: ['photos', '3d', 'stack', 'scrapbook'],
    previewType: 'photoStack',
    featured: true
  },
  {
    id: 'screen-blur',
    name: 'Screen Recording Blur',
    category: 'Documentary',
    description: 'Screen recording with gaussian blur overlay and subtle TV noise texture. Used for showing digital evidence while maintaining mystery.',
    duration: '2-3s',
    difficulty: 'Easy',
    tags: ['screen', 'blur', 'noise', 'recording'],
    previewType: 'screenBlur'
  },
  {
    id: 'timeline-anim',
    name: 'Animated Timeline',
    category: 'Documentary',
    description: 'Events appear sequentially along an animated timeline with connecting lines. Perfect for showing chronological story progression.',
    duration: '4-6s',
    difficulty: 'Medium',
    tags: ['timeline', 'chronology', 'events', 'documentary'],
    previewType: 'timeline',
    featured: true
  },
  {
    id: 'title-cinematic',
    name: 'Cinematic Title Reveal',
    category: 'Transitions',
    description: 'Dramatic title card with cinematic impact hit, subtle shake, and glow. The signature opening title treatment for documentaries.',
    duration: '2-3s',
    difficulty: 'Medium',
    tags: ['title', 'cinematic', 'reveal', 'impact'],
    previewType: 'titleCinematic',
    featured: true
  },
  {
    id: 'point-annotate',
    name: 'Point & Highlight',
    category: 'Documentary',
    description: 'Animated pointing hand or arrow that draws attention to specific elements. Great for guiding viewers through complex visuals.',
    duration: '2-3s',
    difficulty: 'Easy',
    tags: ['point', 'arrow', 'annotate', 'highlight'],
    previewType: 'pointAnnotate'
  },
  {
    id: 'film-grain',
    name: 'Film Grain Overlay',
    category: 'Effects',
    description: 'Subtle film grain and TV scan line overlay for that authentic documentary texture. Adds production value to any footage.',
    duration: 'Continuous',
    difficulty: 'Easy',
    tags: ['grain', 'film', 'texture', 'noise'],
    previewType: 'filmGrain'
  },
  {
    id: 'color-impact',
    name: 'Color Shift Impact',
    category: 'Effects',
    description: 'Text or elements dramatically shift color with a glow effect on impact moments. Used to emphasize key revelations.',
    duration: '1-2s',
    difficulty: 'Easy',
    tags: ['color', 'impact', 'glow', 'shift'],
    previewType: 'colorImpact'
  },
  {
    id: 'interview-cutin',
    name: 'Interview Cut-In',
    category: 'Documentary',
    description: 'Smooth transition into interview footage with subtle zoom and name lower-third. The breathing room technique between narration.',
    duration: '2-3s',
    difficulty: 'Easy',
    tags: ['interview', 'cut-in', 'lower-third', 'documentary'],
    previewType: 'interviewCutin'
  },
  {
    id: 'evidence-zoom',
    name: 'Evidence Zoom',
    category: 'Documentary',
    description: 'Dramatic slow zoom into a document or image with subtle shake. Used to build tension when revealing key evidence.',
    duration: '3-5s',
    difficulty: 'Easy',
    tags: ['zoom', 'evidence', 'document', 'tension'],
    previewType: 'evidenceZoom'
  },
  {
    id: 'scrapbook-flip',
    name: 'Scrapbook Page Flip',
    category: 'Documentary',
    description: 'Pages flip like a scrapbook revealing different evidence and documents. Creates a tactile, investigative feel.',
    duration: '3-4s',
    difficulty: 'Medium',
    tags: ['scrapbook', 'flip', 'pages', 'investigation'],
    previewType: 'scrapbookFlip'
  },
  {
    id: 'redacted-doc',
    name: 'Redacted Document',
    category: 'Documentary',
    description: 'Document with black redaction bars that animate to reveal hidden text. Perfect for whistleblower and investigation content.',
    duration: '2-4s',
    difficulty: 'Medium',
    tags: ['redacted', 'document', 'classified', 'reveal'],
    previewType: 'redactedDoc',
    featured: true
  },
  {
    id: 'map-pin-drop',
    name: 'Map Pin Drop',
    category: 'Documentary',
    description: 'Location pins drop onto a map with ripple effects. Great for showing global connections and geographic storytelling.',
    duration: '3-5s',
    difficulty: 'Medium',
    tags: ['map', 'location', 'pin', 'geography'],
    previewType: 'mapPin'
  },
  {
    id: 'fast-cut-montage',
    name: 'Fast Cut Montage',
    category: 'Transitions',
    description: 'Rapid-fire cuts synced to music beats. The hook-building technique with sub-second cuts that grab attention instantly.',
    duration: '2-3s',
    difficulty: 'Medium',
    tags: ['montage', 'fast', 'cuts', 'hook'],
    previewType: 'fastCut'
  },

  // === ADDITIONAL JAMES JANI TECHNIQUES ===
  {
    id: 'tension-text',
    name: 'Tension Text Flash',
    category: 'Documentary',
    description: 'Words appear one-by-one rapidly to build suspense. Perfect for dramatic revelations like "He... lost... EVERYTHING".',
    duration: '2-4s',
    difficulty: 'Easy',
    tags: ['text', 'tension', 'suspense', 'flash'],
    previewType: 'tensionText',
    featured: true
  },
  {
    id: 'black-cut',
    name: 'Dramatic Black Cut',
    category: 'Transitions',
    description: 'Sudden cut to black before a major reveal. Creates anticipation and emphasizes the moment of truth.',
    duration: '1-2s',
    difficulty: 'Easy',
    tags: ['black', 'cut', 'reveal', 'dramatic'],
    previewType: 'blackCut'
  },
  {
    id: 'social-post',
    name: 'Social Media Pop',
    category: 'Documentary',
    description: 'Social media posts appearing with notification animations. Great for showing online reactions and viral moments.',
    duration: '2-3s',
    difficulty: 'Easy',
    tags: ['social', 'twitter', 'notification', 'post'],
    previewType: 'socialPost'
  },
  {
    id: 'stock-chart',
    name: 'Stock Chart Animation',
    category: 'Documentary',
    description: 'Financial charts drawing and animating up/down. Perfect for showing market crashes, gains, or financial data.',
    duration: '3-5s',
    difficulty: 'Medium',
    tags: ['chart', 'stock', 'finance', 'graph'],
    previewType: 'stockChart',
    featured: true
  },
  {
    id: 'classified-stamp',
    name: 'Classified Stamp',
    category: 'Documentary',
    description: '"CLASSIFIED" or "CONFIDENTIAL" stamp slamming onto documents with impact. Adds authenticity to investigation content.',
    duration: '1-2s',
    difficulty: 'Easy',
    tags: ['stamp', 'classified', 'document', 'impact'],
    previewType: 'classifiedStamp',
    featured: true
  },
  {
    id: 'connection-web',
    name: 'Connection Web',
    category: 'Documentary',
    description: 'Lines connecting people and entities showing relationships. Visualizes complex networks and conspiracies.',
    duration: '3-5s',
    difficulty: 'Medium',
    tags: ['connection', 'web', 'network', 'relationships'],
    previewType: 'connectionWeb',
    featured: true
  },
  {
    id: 'text-scramble',
    name: 'Text Decode',
    category: 'Typography',
    description: 'Text that scrambles and decodes letter by letter. Matrix-style effect for revealing hidden information.',
    duration: '2-4s',
    difficulty: 'Medium',
    tags: ['scramble', 'decode', 'matrix', 'text'],
    previewType: 'textScramble'
  },
  {
    id: 'magnify-zoom',
    name: 'Magnifying Glass',
    category: 'Documentary',
    description: 'Zoom into specific part of a document or image. Highlights key details and evidence.',
    duration: '2-3s',
    difficulty: 'Easy',
    tags: ['magnify', 'zoom', 'detail', 'evidence'],
    previewType: 'magnifyZoom'
  },
  {
    id: 'conspiracy-board',
    name: 'Red String Board',
    category: 'Documentary',
    description: 'Detective-style conspiracy board with photos connected by red strings. Classic investigation aesthetic.',
    duration: '4-6s',
    difficulty: 'Advanced',
    tags: ['conspiracy', 'board', 'red-string', 'investigation'],
    previewType: 'conspiracyBoard',
    featured: true
  },
  {
    id: 'whip-pan',
    name: 'Whip Pan Transition',
    category: 'Transitions',
    description: 'Fast camera pan creating motion blur between scenes. Dynamic and energetic transition effect.',
    duration: '0.5-1s',
    difficulty: 'Easy',
    tags: ['whip', 'pan', 'transition', 'motion'],
    previewType: 'whipPan'
  },
  {
    id: 'dolly-zoom',
    name: 'Dolly Zoom Effect',
    category: 'Motion',
    description: 'Hitchcock vertigo effect - background moves while foreground stays. Creates unsettling, dramatic feeling.',
    duration: '2-3s',
    difficulty: 'Advanced',
    tags: ['dolly', 'zoom', 'vertigo', 'hitchcock'],
    previewType: 'dollyZoom'
  },
  {
    id: 'flash-frame',
    name: 'Flash Frame',
    category: 'Transitions',
    description: 'Quick white or black flash between cuts. Adds impact and emphasis to transitions.',
    duration: '0.2-0.5s',
    difficulty: 'Easy',
    tags: ['flash', 'frame', 'impact', 'transition'],
    previewType: 'flashFrame'
  },
  {
    id: 'quote-reveal',
    name: 'Quote Reveal',
    category: 'Typography',
    description: 'Famous quotes appearing dramatically with attribution. Perfect for impactful statements and revelations.',
    duration: '3-5s',
    difficulty: 'Easy',
    tags: ['quote', 'reveal', 'attribution', 'dramatic'],
    previewType: 'quoteReveal'
  },
  {
    id: 'progressive-text',
    name: 'Progressive Text',
    category: 'Typography',
    description: 'Lines appearing one by one building a story or argument. Creates narrative momentum.',
    duration: '4-6s',
    difficulty: 'Easy',
    tags: ['progressive', 'text', 'lines', 'narrative'],
    previewType: 'progressiveText'
  },
  {
    id: 'camera-shake',
    name: 'Camera Shake Impact',
    category: 'Effects',
    description: 'Camera shake on dramatic moments or revelations. Adds visceral impact to key points.',
    duration: '0.5-1s',
    difficulty: 'Easy',
    tags: ['shake', 'camera', 'impact', 'dramatic'],
    previewType: 'cameraShake'
  },
];

export const categories = ['All', 'Documentary', 'Motion', 'Typography', 'Effects', 'Transitions', 'Text'];
