import React, { useState } from 'react';
import { 
  Plus, 
  Search, 
  Edit, 
  Trash2, 
  FolderOpen,
  ChevronRight,
  ChevronDown,
  Tag,
  Calendar,
  User
} from 'lucide-react';

interface Category {
  id: string;
  name: string;
  slug: string;
  description?: string;
  parent_id?: string;
  post_count: number;
  created_at: string;
  children?: Category[];
}

const CategoryManager: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showAddModal, setShowAddModal] = useState(false);
  const [editingCategory, setEditingCategory] = useState<Category | null>(null);
  const [expandedCategories, setExpandedCategories] = useState<string[]>(['1', '2']);

  // Data dummy kategori
  const categories: Category[] = [
    {
      id: '1',
      name: 'Konstruksi Residensial',
      slug: 'konstruksi-residensial',
      description: 'Artikel tentang pembangunan rumah tinggal dan perumahan',
      post_count: 25,
      created_at: '2024-01-01T00:00:00Z',
      children: [
        {
          id: '1-1',
          name: 'Rumah Modern',
          slug: 'rumah-modern',
          parent_id: '1',
          post_count: 12,
          created_at: '2024-01-02T00:00:00Z'
        },
        {
          id: '1-2',
          name: 'Rumah Minimalis',
          slug: 'rumah-minimalis',
          parent_id: '1',
          post_count: 8,
          created_at: '2024-01-03T00:00:00Z'
        },
        {
          id: '1-3',
          name: 'Rumah Tradisional',
          slug: 'rumah-tradisional',
          parent_id: '1',
          post_count: 5,
          created_at: '2024-01-04T00:00:00Z'
        }
      ]
    },
    {
      id: '2',
      name: 'Konstruksi Komersial',
      slug: 'konstruksi-komersial',
      description: 'Artikel tentang pembangunan gedung perkantoran dan komersial',
      post_count: 18,
      created_at: '2024-01-05T00:00:00Z',
      children: [
        {
          id: '2-1',
          name: 'Gedung Perkantoran',
          slug: 'gedung-perkantoran',
          parent_id: '2',
          post_count: 10,
          created_at: '2024-01-06T00:00:00Z'
        },
        {
          id: '2-2',
          name: 'Pusat Perbelanjaan',
          slug: 'pusat-perbelanjaan',
          parent_id: '2',
          post_count: 8,
          created_at: '2024-01-07T00:00:00Z'
        }
      ]
    },
    {
      id: '3',
      name: 'Renovasi & Remodeling',
      slug: 'renovasi-remodeling',
      description: 'Tips dan panduan renovasi rumah dan bangunan',
      post_count: 32,
      created_at: '2024-01-08T00:00:00Z'
    },
    {
      id: '4',
      name: 'Tips & Panduan',
      slug: 'tips-panduan',
      description: 'Panduan praktis seputar konstruksi dan renovasi',
      post_count: 45,
      created_at: '2024-01-09T00:00:00Z'
    },
    {
      id: '5',
      name: 'Berita Konstruksi',
      slug: 'berita-konstruksi',
      description: 'Berita terkini seputar industri konstruksi',
      post_count: 15,
      created_at: '2024-01-10T00:00:00Z'
    }
  ];

  const toggleExpanded = (categoryId: string) => {
    setExpandedCategories(prev => 
      prev.includes(categoryId) 
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  const renderCategory = (category: Category, level: number = 0) => {
    const hasChildren = category.children && category.children.length > 0;
    const isExpanded = expandedCategories.includes(category.id);

    return (
      <div key={category.id}>
        <div className={`flex items-center justify-between p-4 hover:bg-gray-50 ${level > 0 ? 'ml-8 border-l-2 border-gray-200' : ''}`}>
          <div className="flex items-center space-x-3">
            {hasChildren ? (
              <button
                onClick={() => toggleExpanded(category.id)}
                className="text-gray-400 hover:text-gray-600"
              >
                {isExpanded ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
              </button>
            ) : (
              <div className="w-4 h-4" />
            )}
            <FolderOpen className="w-5 h-5 text-blue-500" />
            <div>
              <h3 className="font-medium text-gray-900">{category.name}</h3>
              {category.description && (
                <p className="text-sm text-gray-500">{category.description}</p>
              )}
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-500">{category.post_count} posts</span>
            <div className="flex space-x-2">
              <button
                onClick={() => setEditingCategory(category)}
                className="text-gray-400 hover:text-blue-600"
              >
                <Edit className="w-4 h-4" />
              </button>
              <button className="text-gray-400 hover:text-red-600">
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
        {hasChildren && isExpanded && (
          <div>
            {category.children!.map(child => renderCategory(child, level + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Categories</h1>
          <p className="text-gray-600">Organize your content with categories</p>
        </div>
        <button
          onClick={() => setShowAddModal(true)}
          className="mt-4 sm:mt-0 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center"
        >
          <Plus className="w-4 h-4 mr-2" />
          New Category
        </button>
      </div>

      {/* Search */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search categories..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* Categories List */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">All Categories</h3>
        </div>
        <div className="divide-y divide-gray-200">
          {categories.map(category => renderCategory(category))}
        </div>
      </div>

      {/* Add/Edit Modal */}
      {(showAddModal || editingCategory) && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">
                {editingCategory ? 'Edit Category' : 'Add New Category'}
              </h3>
              <button
                onClick={() => {
                  setShowAddModal(false);
                  setEditingCategory(null);
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
                  defaultValue={editingCategory?.name || ''}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Category name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Slug</label>
                <input
                  type="text"
                  defaultValue={editingCategory?.slug || ''}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="category-slug"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Parent Category</label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option value="">None (Top Level)</option>
                  {categories.map(cat => (
                    <option key={cat.id} value={cat.id}>{cat.name}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                <textarea
                  rows={3}
                  defaultValue={editingCategory?.description || ''}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Category description"
                />
              </div>
              
              <div className="flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={() => {
                    setShowAddModal(false);
                    setEditingCategory(null);
                  }}
                  className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  {editingCategory ? 'Update' : 'Create'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoryManager;