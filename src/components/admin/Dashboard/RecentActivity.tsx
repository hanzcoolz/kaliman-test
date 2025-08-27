import React from 'react';
import { FileText, Image, MessageSquare, User, Clock } from 'lucide-react';

const RecentActivity: React.FC = () => {
  const activities = [
    {
      id: 1,
      type: 'post',
      action: 'published',
      title: 'Tips Memilih Kontraktor Terpercaya',
      user: 'Administrator',
      time: '2 hours ago',
      icon: FileText,
      color: 'text-blue-600 bg-blue-100'
    },
    {
      id: 2,
      type: 'media',
      action: 'uploaded',
      title: '5 new construction images',
      user: 'Editor',
      time: '4 hours ago',
      icon: Image,
      color: 'text-green-600 bg-green-100'
    },
    {
      id: 3,
      type: 'comment',
      action: 'approved',
      title: 'Comment on "Renovasi Rumah Modern"',
      user: 'Administrator',
      time: '6 hours ago',
      icon: MessageSquare,
      color: 'text-orange-600 bg-orange-100'
    },
    {
      id: 4,
      type: 'user',
      action: 'registered',
      title: 'New user account created',
      user: 'System',
      time: '1 day ago',
      icon: User,
      color: 'text-purple-600 bg-purple-100'
    },
    {
      id: 5,
      type: 'post',
      action: 'scheduled',
      title: 'Panduan Konstruksi Ramah Lingkungan',
      user: 'Editor',
      time: '1 day ago',
      icon: Clock,
      color: 'text-indigo-600 bg-indigo-100'
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="px-6 py-4 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
      </div>
      <div className="p-6">
        <div className="flow-root">
          <ul className="-mb-8">
            {activities.map((activity, index) => {
              const IconComponent = activity.icon;
              return (
                <li key={activity.id}>
                  <div className="relative pb-8">
                    {index !== activities.length - 1 && (
                      <span
                        className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                        aria-hidden="true"
                      />
                    )}
                    <div className="relative flex space-x-3">
                      <div>
                        <span className={`h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white ${activity.color}`}>
                          <IconComponent className="w-4 h-4" />
                        </span>
                      </div>
                      <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                        <div>
                          <p className="text-sm text-gray-500">
                            <span className="font-medium text-gray-900">{activity.user}</span>{' '}
                            {activity.action}{' '}
                            <span className="font-medium text-gray-900">{activity.title}</span>
                          </p>
                        </div>
                        <div className="text-right text-sm whitespace-nowrap text-gray-500">
                          {activity.time}
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RecentActivity;