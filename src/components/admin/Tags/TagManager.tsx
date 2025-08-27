import React, { useState } from 'react';
import { 
  Plus, 
  Search, 
  Edit, 
  Trash2, 
  Tag,
  TrendingUp,
  Hash,
  Calendar
} from 'lucide-react';

interface TagData {
  id: string;
  name: string;
  slug: string;
  description?: string;
  post_count: number;
  color: string;
  created_at: string;
}

const TagManager: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showAddModal, setShowAddModal] = useState(false);
  const [editingTag, setEditingTag] = useState<TagData | null>(null);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  // Data dummy tags
  const tags: TagData[] = [
    {
      id: '1',
      name: 'konstruksi',
      slug: 'konstruksi',
      description: 'Artikel tentang konstruksi bangunan',
      post_count: 45,
      color: '#3B82F6',
      created_at: '2024-01-01T00:00:00Z'
    },
    {
      id: '2',
      name: 'renovasi',
      slug: 'renovasi',
      description: 'Tips dan panduan renovasi',
      post_count: 32,
      color: '#10B981',
      created_at: '2024-01-02T00:00:00Z'
    },
    {
      id: '3',
      name: 'desain',
      slug: 'desain',
      description: 'Desain arsitektur dan interior',
      post_count: 28,
      color: '#8B5CF6',
      created_at: '2024-01-03T00:00:00Z'
    },
    {
      id: '4',
      name: 'rumah-modern',
      slug: 'rumah-modern',
      description: 'Konsep rumah modern dan minimalis',
      post_count: 25,
      color: '#F59E0B',
      created_at: '2024-01-04T00:00:00Z'
    },
    {
      id: '5',
      name: 'tips',
      slug: 'tips',
      description: 'Tips praktis konstruksi',
      post_count: 38,
      color: '#EF4444',
      created_at: '2024-01-05T00:00:00Z'
    },
    {
      id: '6',
      name: 'material',
      slug: 'material',
      description: 'Informasi material bangunan',
      post_count: 22,
      color: '#06B6D4',
      created_at: '2024-01-06T00:00:00Z'
    },
    {
      id: '7',
      name: 'budget',
      slug: 'budget',
      description: 'Panduan budget konstruksi',
      post_count: 18,
      color: '#84CC16',
      created_at: '2024-01-07T00:00:00Z'
    },
    {
      id: '8',
      name: 'kontraktor',
      slug: 'kontraktor',
      description: 'Tips memilih kontraktor',
      post_count: 15,
      color: '#F97316',
      created_at: '2024-01-08T00:00:00Z'
    },
    {
      id: '9',
      name: 'arsitektur',
      slug: 'arsitektur',
      description: 'Konsep dan gaya arsitektur',
      post_count: 20,
      color: '#EC4899',
      created_at: '2024-01-09T00:00:00Z'
    },
    {
      id: '10',
      name: 'interior',
      slug: 'interior',
      description: 'Desain interior rumah',
      post_count: 16,
      color: '#6366F1',
      created_at: '2024-01-10T00:00:00Z'
    }
  ];

  const filteredTags = tags.filter(tag =>
    tag.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleTagSelection = (tagId: string) => {
    setSelectedTags(prev =>
      prev.includes(tagId)
        ? prev.filter(id => id !== tagId)
        : [...prev, tagId]
    );
  };

  const handleBulkDelete = () => {
    console.log('Bulk delete tags:', selectedTags);
    setSelectedTags([]);
  };

  const colors = [
    '#3B82F6', '#10B981', '#8B5CF6', '#F59E0B', '#EF4444',
    '#06B6D4', '#84CC16', '#F97316', '#EC4899', '#6366F1'
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Tags</h1>
          <p className="text-gray-600">Manage content tags and labels</p>
        </div>
        <button
          onClick={() => setShowAddModal(true)}
          className="mt-4 sm:mt-0 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center"
        >
          <Plus className="w-4 h-4 mr-2" />
          New Tag
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center">
            <Hash className="w-8 h-8 text-blue-500 mr-3" />
            <div>
              <p className="text-2xl font-bold text-gray-900">{tags.length}</p>
              <p className="text-gray-600">Total Tags</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center">
            <TrendingUp className="w-8 h-8 text-green-500 mr-3" />
            <div>
              <p className="text-2xl font-bold text-gray-900">{Math.max(...tags.map(t => t.post_count))}</p>
              <p className="text-gray-600">Most Used</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center">
            <Tag className="w-8 h-8 text-purple-500 mr-3" />
            <div>
              <p className="text-2xl font-bold text-gray-900">{tags.reduce((sum, tag) => sum + tag.post_count, 0)}</p>
              <p className="text-gray-600">Total Usage</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center">
            <Calendar className="w-8 h-8 text-orange-500 mr-3" />
            <div>
              <p className="text-2xl font-bold text-gray-900">5</p>
              <p className="text-gray-600">This Month</p>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Bulk Actions */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search tags..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
          {selectedTags.length > 0 && (
            <div className="flex items-center space-x-3">
              <span className="text-sm text-gray-600">
                {selectedTags.length} selected
              </span>
              <button
                onClick={handleBulkDelete}
                className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors flex items-center"
              >
                <Trash2 className="w-4 h-4 mr-2" />
                Delete Selected
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Tags Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filteredTags.map((tag) => (
          <div
            key={tag.id}
            className={`bg-white rounded-lg shadow-sm border-2 transition-all cursor-pointer ${
              selectedTags.includes(tag.id) ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-gray-300'
            }`}
            onClick={() => toggleTagSelection(tag.id)}
          >
            <div className="p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-2">
                  <div
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: tag.color }}
                  />
                  <span className="font-medium text-gray-900">#{tag.name}</span>
                </div>
                <div className="flex space-x-1">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setEditingTag(tag);
                    }}
                    className="text-gray-400 hover:text-blue-600"
                  >
                    <Edit className="w-4 h-4" />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      console.log('Delete tag:', tag.id);
                    }}
                    className="text-gray-400 hover:text-red-600"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
              
              {tag.description && (
                <p className="text-sm text-gray-600 mb-3">{tag.description}</p>
              )}
              
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500">{tag.post_count} posts</span>
                <span className="text-gray-400">
                  {new Date(tag.created_at).toLocaleDateString('id-ID')}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add/Edit Modal */}
      {(showAddModal || editingTag) && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">
                {editingTag ? 'Edit Tag' : 'Add New Tag'}
              </h3>
              <button
                onClick={() => {
                  setShowAddModal(false);
                  setEditingTag(null);
                }}
                className="text-gray-400 hover:text-gray-600"
              >
                ×
              </button>
            </div>
            
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  defaultValue={editingTag?.name || ''}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Tag name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Slug</label>
                <input
                  type="text"
                  defaultValue={editingTag?.slug || ''}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="tag-slug"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Color</label>
                <div className="flex flex-wrap gap-2 mb-2">
                  {colors.map((color) => (
                    <button
                      key={color}
                      type="button"
                      className={`w-8 h-8 rounded-full border-2 ${
                        (editingTag?.color || colors[0]) === color ? 'border-gray-400' : 'border-gray-200'
                      }`}
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                <textarea
                  rows={3}
                  defaultValue={editingTag?.description || ''}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Tag description"
                />
              </div>
              
              <div className="flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={() => {
                    setShowAddModal(false);
                    setEditingTag(null);
                  }}
                  className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  {editingTag ? 'Update' : 'Create'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default TagManager;