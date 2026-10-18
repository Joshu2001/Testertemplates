import React from 'react';
import { Template } from '../data/templates';
import { TemplatePreview } from './TemplatePreview';

interface TemplateCardProps {
  template: Template;
  onEdit: (template: Template) => void;
  featured?: boolean;
}

const difficultyColor = {
  Easy: 'bg-green-500/20 text-green-400 border-green-500/30',
  Medium: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
  Advanced: 'bg-red-500/20 text-red-400 border-red-500/30',
};

const TemplateCard: React.FC<TemplateCardProps> = ({ template, onEdit, featured }) => {
  return (
    <div
      className={`template-card group relative rounded-2xl overflow-hidden bg-gray-900 border transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 cursor-pointer ${
        featured
          ? 'border-amber-500/30 hover:border-amber-500/50 hover:shadow-amber-500/10'
          : 'border-gray-800 hover:border-gray-600 hover:shadow-purple-500/10'
      }`}
      onClick={() => onEdit(template)}
    >
      {/* Preview Area */}
      <div className="relative aspect-video overflow-hidden">
        {/* Static State */}
        <div className="card-static absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
          <div className="text-center">
            <div className="w-12 h-12 mx-auto mb-2 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 flex items-center justify-center">
              <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <span className="text-xs text-gray-500">Hover to preview</span>
          </div>
        </div>

        {/* Animated Preview on Hover */}
        <div className="card-hover-preview absolute inset-0">
          <TemplatePreview type={template.previewType} />
        </div>

        {/* Category Badge */}
        <div className="absolute top-3 left-3 flex items-center gap-1.5">
          <span className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-black/60 text-white/80 backdrop-blur-sm border border-white/10">
            {template.category}
          </span>
          {featured && (
            <span className="px-1.5 py-0.5 rounded-full text-[9px] font-bold bg-amber-500/80 text-white backdrop-blur-sm flex items-center gap-0.5">
              <svg className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              JJ
            </span>
          )}
        </div>

        {/* Duration Badge */}
        <div className="absolute top-3 right-3">
          <span className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-black/60 text-white/80 backdrop-blur-sm border border-white/10">
            {template.duration}
          </span>
        </div>

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
          <button className="px-4 py-2 rounded-full bg-white text-black text-sm font-semibold hover:bg-gray-200 transition-colors flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
            Edit Template
          </button>
        </div>
      </div>

      {/* Card Info */}
      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-white font-semibold text-sm group-hover:text-purple-300 transition-colors">
            {template.name}
          </h3>
          <span className={`px-2 py-0.5 rounded-full text-[10px] font-medium border ${difficultyColor[template.difficulty]}`}>
            {template.difficulty}
          </span>
        </div>
        <p className="text-gray-400 text-xs leading-relaxed line-clamp-2">
          {template.description}
        </p>
        <div className="flex flex-wrap gap-1 mt-3">
          {template.tags.map(tag => (
            <span key={tag} className="px-1.5 py-0.5 rounded text-[10px] bg-gray-800 text-gray-400 border border-gray-700">
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TemplateCard;
