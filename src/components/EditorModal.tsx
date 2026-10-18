import React, { useState } from 'react';
import { Template } from '../data/templates';
import { TemplatePreview } from './TemplatePreview';

interface EditorModalProps {
  template: Template;
  onClose: () => void;
}

const EditorModal: React.FC<EditorModalProps> = ({ template, onClose }) => {
  const [activeTab, setActiveTab] = useState<'preview' | 'settings' | 'export'>('preview');
  const [text, setText] = useState('Your Text Here');
  const [color, setColor] = useState('#a855f7');
  const [speed, setSpeed] = useState(1);
  const [fontSize, setFontSize] = useState(24);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

      {/* Modal */}
      <div
        className="relative w-full max-w-4xl max-h-[90vh] bg-gray-900 rounded-2xl border border-gray-700 shadow-2xl overflow-hidden flex flex-col"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-800">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
            </div>
            <div>
              <h2 className="text-white font-semibold text-lg">{template.name}</h2>
              <p className="text-gray-400 text-xs">{template.category} • {template.duration} • {template.difficulty}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-gray-800">
          {(['preview', 'settings', 'export'] as const).map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 text-sm font-medium transition-colors capitalize ${
                activeTab === tab
                  ? 'text-purple-400 border-b-2 border-purple-400 bg-purple-500/5'
                  : 'text-gray-400 hover:text-gray-200'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto">
          {activeTab === 'preview' && (
            <div className="p-6">
              <div className="aspect-video rounded-xl overflow-hidden border border-gray-700 mb-4">
                <TemplatePreview type={template.previewType} />
              </div>
              <p className="text-gray-300 text-sm">{template.description}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {template.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 rounded-full text-xs bg-gray-800 text-gray-300 border border-gray-700">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'settings' && (
            <div className="p-6 space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Text Content</label>
                <input
                  type="text"
                  value={text}
                  onChange={e => setText(e.target.value)}
                  className="w-full px-4 py-2.5 bg-gray-800 border border-gray-700 rounded-lg text-white text-sm focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Accent Color</label>
                  <div className="flex items-center gap-3">
                    <input
                      type="color"
                      value={color}
                      onChange={e => setColor(e.target.value)}
                      className="w-10 h-10 rounded-lg border border-gray-700 cursor-pointer bg-transparent"
                    />
                    <span className="text-gray-400 text-sm">{color}</span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Font Size: {fontSize}px</label>
                  <input
                    type="range"
                    min="12"
                    max="48"
                    value={fontSize}
                    onChange={e => setFontSize(Number(e.target.value))}
                    className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Animation Speed: {speed}x</label>
                <input
                  type="range"
                  min="0.5"
                  max="3"
                  step="0.25"
                  value={speed}
                  onChange={e => setSpeed(Number(e.target.value))}
                  className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>Slow</span>
                  <span>Normal</span>
                  <span>Fast</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Duration</label>
                <div className="grid grid-cols-4 gap-2">
                  {['1s', '2s', '3s', '5s'].map(d => (
                    <button
                      key={d}
                      className="px-3 py-2 rounded-lg bg-gray-800 border border-gray-700 text-gray-300 text-sm hover:border-purple-500 hover:text-purple-300 transition-colors"
                    >
                      {d}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Easing</label>
                <div className="grid grid-cols-3 gap-2">
                  {['Ease In', 'Ease Out', 'Ease In-Out'].map(e => (
                    <button
                      key={e}
                      className="px-3 py-2 rounded-lg bg-gray-800 border border-gray-700 text-gray-300 text-sm hover:border-purple-500 hover:text-purple-300 transition-colors"
                    >
                      {e}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'export' && (
            <div className="p-6 space-y-4">
              <h3 className="text-white font-medium">Export Options</h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { format: 'MP4', desc: 'Video file', icon: '🎬' },
                  { format: 'GIF', desc: 'Animated image', icon: '🖼️' },
                  { format: 'JSON', desc: 'Lottie animation', icon: '📄' },
                  { format: 'CSS', desc: 'CSS animation code', icon: '💻' },
                ].map(item => (
                  <button
                    key={item.format}
                    className="p-4 rounded-xl bg-gray-800 border border-gray-700 hover:border-purple-500 transition-all text-left group"
                  >
                    <span className="text-2xl">{item.icon}</span>
                    <p className="text-white font-medium text-sm mt-2">{item.format}</p>
                    <p className="text-gray-400 text-xs">{item.desc}</p>
                  </button>
                ))}
              </div>

              <div className="mt-6 p-4 rounded-xl bg-gray-800/50 border border-gray-700">
                <h4 className="text-sm font-medium text-gray-300 mb-2">Quick Export</h4>
                <div className="flex items-center gap-3">
                  <select className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white text-sm focus:outline-none focus:border-purple-500">
                    <option>1080p (Full HD)</option>
                    <option>720p (HD)</option>
                    <option>4K (Ultra HD)</option>
                    <option>Square (1:1)</option>
                    <option>Story (9:16)</option>
                  </select>
                  <button className="px-6 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-semibold hover:from-purple-600 hover:to-pink-600 transition-all shadow-lg shadow-purple-500/20">
                    Export
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between p-4 border-t border-gray-800 bg-gray-900/50">
          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-500">Template:</span>
            <span className="text-xs text-gray-300">{template.id}</span>
          </div>
          <div className="flex items-center gap-3">
            <button className="px-4 py-2 rounded-lg bg-gray-800 text-gray-300 text-sm hover:bg-gray-700 transition-colors">
              Duplicate
            </button>
            <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-semibold hover:from-purple-600 hover:to-pink-600 transition-all shadow-lg shadow-purple-500/20">
              Apply Template
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditorModal;
