import React from 'react';
import { Plus, Upload, Edit, Settings, BarChart3, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const QuickActions: React.FC = () => {
  const actions = [
    {
      title: 'New Post',
      description: 'Create a new blog post',
      icon: Plus,
      href: '/admin/posts/new',
      color: 'bg-blue-500 hover:bg-blue-600'
    },
    {
      title: 'Upload Media',
      description: 'Add images or videos',
      icon: Upload,
      href: '/admin/media/upload',
      color: 'bg-green-500 hover:bg-green-600'
    },
    {
      title: 'Edit Pages',
      description: 'Manage site pages',
      icon: Edit,
      href: '/admin/pages',
      color: 'bg-purple-500 hover:bg-purple-600'
    },
    {
      title: 'View Analytics',
      description: 'Check site statistics',
      icon: BarChart3,
      href: '/admin/analytics',
      color: 'bg-orange-500 hover:bg-orange-600'
    },
    {
      title: 'Manage Users',
      description: 'User administration',
      icon: Users,
      href: '/admin/users',
      color: 'bg-indigo-500 hover:bg-indigo-600'
    },
    {
      title: 'Settings',
      description: 'System configuration',
      icon: Settings,
      href: '/admin/settings',
      color: 'bg-gray-500 hover:bg-gray-600'
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="px-6 py-4 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900">Quick Actions</h3>
      </div>
      <div className="p-6">
        <div className="grid grid-cols-2 gap-4">
          {actions.map((action, index) => {
            const IconComponent = action.icon;
            return (
              <Link
                key={index}
                to={action.href}
                className={`p-4 rounded-lg text-white transition-colors ${action.color} group`}
              >
                <div className="flex flex-col items-center text-center">
                  <IconComponent className="w-6 h-6 mb-2 group-hover:scale-110 transition-transform" />
                  <h4 className="font-medium text-sm mb-1">{action.title}</h4>
                  <p className="text-xs opacity-90">{action.description}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default QuickActions;