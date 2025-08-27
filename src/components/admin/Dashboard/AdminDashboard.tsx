import React from 'react';
import { 
  FileText, 
  Image, 
  Video, 
  MessageSquare, 
  Users, 
  TrendingUp,
  Calendar,
  Clock
} from 'lucide-react';
import StatsCard from './StatsCard';
import RecentActivity from './RecentActivity';
import QuickActions from './QuickActions';

const AdminDashboard: React.FC = () => {
  const stats = [
    {
      title: 'Total Posts',
      value: '156',
      change: '+12%',
      changeType: 'increase' as const,
      icon: FileText,
      color: 'blue'
    },
    {
      title: 'Media Files',
      value: '2,341',
      change: '+8%',
      changeType: 'increase' as const,
      icon: Image,
      color: 'green'
    },
    {
      title: 'Videos',
      value: '89',
      change: '+15%',
      changeType: 'increase' as const,
      icon: Video,
      color: 'purple'
    },
    {
      title: 'Comments',
      value: '1,234',
      change: '-3%',
      changeType: 'decrease' as const,
      icon: MessageSquare,
      color: 'orange'
    },
    {
      title: 'Active Users',
      value: '45',
      change: '+5%',
      changeType: 'increase' as const,
      icon: Users,
      color: 'indigo'
    },
    {
      title: 'Page Views',
      value: '12.5K',
      change: '+18%',
      changeType: 'increase' as const,
      icon: TrendingUp,
      color: 'pink'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-6 text-white">
        <h1 className="text-2xl font-bold mb-2">Welcome back, Administrator!</h1>
        <p className="text-blue-100">
          Here's what's happening with your content management system today.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <StatsCard key={index} {...stat} />
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Recent Activity */}
        <div className="lg:col-span-2">
          <RecentActivity />
        </div>

        {/* Quick Actions */}
        <div className="lg:col-span-1">
          <QuickActions />
        </div>
      </div>

      {/* Recent Posts */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Recent Posts</h3>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            {[
              {
                title: 'Tips Memilih Kontraktor Terpercaya',
                status: 'Published',
                date: '2 hours ago',
                author: 'Admin'
              },
              {
                title: 'Tren Desain Rumah Modern 2024',
                status: 'Draft',
                date: '1 day ago',
                author: 'Editor'
              },
              {
                title: 'Panduan Renovasi Rumah Budget Terbatas',
                status: 'Scheduled',
                date: '2 days ago',
                author: 'Admin'
              }
            ].map((post, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <h4 className="font-medium text-gray-900">{post.title}</h4>
                  <div className="flex items-center space-x-4 mt-1 text-sm text-gray-500">
                    <span>By {post.author}</span>
                    <span>•</span>
                    <span>{post.date}</span>
                  </div>
                </div>
                <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                  post.status === 'Published' ? 'bg-green-100 text-green-800' :
                  post.status === 'Draft' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-blue-100 text-blue-800'
                }`}>
                  {post.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;