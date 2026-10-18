import React, { useState, useMemo } from 'react';
import { templates, categories, Template } from './data/templates';
import TemplateCard from './components/TemplateCard';
import EditorModal from './components/EditorModal';

function App() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [editingTemplate, setEditingTemplate] = useState<Template | null>(null);
  const [showFeatured, setShowFeatured] = useState(true);

  const featuredTemplates = useMemo(() => {
    return templates.filter(t => t.featured);
  }, []);

  const filteredTemplates = useMemo(() => {
    return templates.filter(t => {
      const matchesCategory = activeCategory === 'All' || t.category === activeCategory;
      const matchesSearch = searchQuery === '' ||
        t.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        t.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())) ||
        t.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-gray-950/80 backdrop-blur-xl border-b border-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg shadow-purple-500/20">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2m0 2a2 2 0 012 2v1a2 2 0 01-2 2 2 2 0 01-2-2V6a2 2 0 012-2zm0 10v2m0-2a2 2 0 01-2-2v-1a2 2 0 012-2 2 2 0 012 2v1a2 2 0 01-2 2zM17 4v2m0-2a2 2 0 00-2 2v1a2 2 0 002 2 2 2 0 002-2V6a2 2 0 00-2-2zm0 10v2m0-2a2 2 0 002-2v-1a2 2 0 00-2-2 2 2 0 00-2 2v1a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h1 className="text-lg font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  FX Templates
                </h1>
                <p className="text-[10px] text-gray-500 -mt-0.5">Video Effect Templates</p>
              </div>
            </div>

            {/* Search */}
            <div className="hidden sm:flex items-center flex-1 max-w-md mx-8">
              <div className="relative w-full">
                <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  placeholder="Search templates, effects, tags..."
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-gray-900 border border-gray-800 rounded-xl text-sm text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
                />
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setShowFeatured(!showFeatured)}
                className={`hidden sm:flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                  showFeatured
                    ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                    : 'bg-gray-800 text-gray-400 border border-gray-700 hover:border-amber-500/40 hover:text-amber-300'
                }`}
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                {showFeatured ? 'JJ Style ✓' : 'JJ Style'}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
                Pro Video Effects,
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Ready to Use
              </span>
            </h2>
            <p className="text-gray-400 text-sm sm:text-base max-w-lg mx-auto">
              Skip hours of editing. Browse premium effect templates — hover to preview, tap to customize. 
              Documentary-style effects inspired by top creators like James Jani.
            </p>
          </div>

          {/* Mobile Search */}
          <div className="sm:hidden mt-6">
            <div className="relative">
              <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Search templates..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-gray-900 border border-gray-800 rounded-xl text-sm text-white placeholder-gray-500 focus:outline-none focus:border-purple-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Section - James Jani Style */}
      {showFeatured && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            </div>
            <div>
              <h3 className="text-white font-bold text-lg">James Jani Style</h3>
              <p className="text-gray-400 text-xs">Signature documentary editing effects</p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {featuredTemplates.map(template => (
              <TemplateCard
                key={template.id}
                template={template}
                onEdit={setEditingTemplate}
                featured
              />
            ))}
          </div>
        </section>
      )}

      {/* Category Filter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                activeCategory === category
                  ? 'bg-purple-500/20 text-purple-300 border border-purple-500/40 shadow-lg shadow-purple-500/10'
                  : 'bg-gray-900 text-gray-400 border border-gray-800 hover:border-gray-600 hover:text-gray-200'
              }`}
            >
              {category}
              {category === 'Documentary' && (
                <span className="ml-1.5 inline-flex items-center px-1.5 py-0.5 rounded-full text-[9px] bg-amber-500/20 text-amber-400 border border-amber-500/30">
                  JJ
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Template Grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        {filteredTemplates.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filteredTemplates.map(template => (
              <TemplateCard
                key={template.id}
                template={template}
                onEdit={setEditingTemplate}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center">
              <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-gray-400 font-medium mb-1">No templates found</h3>
            <p className="text-gray-600 text-sm">Try adjusting your search or filter</p>
          </div>
        )}

        {/* Stats Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800/50">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { label: 'Templates', value: templates.length.toString(), icon: '🎬' },
              { label: 'Categories', value: (categories.length - 1).toString(), icon: '📂' },
              { label: 'JJ Style', value: featuredTemplates.length.toString(), icon: '⭐' },
              { label: 'Difficulty', value: 'All Levels', icon: '🎯' },
            ].map(stat => (
              <div key={stat.label} className="p-4 rounded-xl bg-gray-900/50 border border-gray-800/50 text-center">
                <span className="text-xl">{stat.icon}</span>
                <p className="text-white font-bold text-lg mt-1">{stat.value}</p>
                <p className="text-gray-500 text-xs">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Editor Modal */}
      {editingTemplate && (
        <EditorModal
          template={editingTemplate}
          onClose={() => setEditingTemplate(null)}
        />
      )}
    </div>
  );
}

export default App;
