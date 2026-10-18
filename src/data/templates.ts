export interface Template {
  id: string;
  name: string;
  category: string;
  description: string;
  duration: string;
  difficulty: 'Easy' | 'Medium' | 'Advanced';
  tags: string[];
  previewType: string;
}

export const templates: Template[] = [
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
];

export const categories = ['All', 'Motion', 'Typography', 'Effects', 'Transitions', 'Text'];
