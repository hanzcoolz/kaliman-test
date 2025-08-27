import React, { useState } from 'react';
import { 
  TrendingUp, 
  TrendingDown, 
  Eye, 
  Users, 
  Clock, 
  Share2,
  Download,
  Calendar,
  Filter,
  BarChart3,
  PieChart,
  Activity,
  Globe,
  Smartphone,
  Monitor,
  MapPin
} from 'lucide-react';

const AdminAnalytics: React.FC = () => {
  const [dateRange, setDateRange] = useState('30d');
  const [selectedMetric, setSelectedMetric] = useState('pageviews');

  const stats = [
    {
      title: 'Total Page Views',
      value: '45,231',
      change: '+12.5%',
      changeType: 'increase' as const,
      icon: Eye,
      color: 'blue'
    },
    {
      title: 'Unique Visitors',
      value: '12,543',
      change: '+8.2%',
      changeType: 'increase' as const,
      icon: Users,
      color: 'green'
    },
    {
      title: 'Avg. Session Duration',
      value: '3m 24s',
      change: '+15.3%',
      changeType: 'increase' as const,
      icon: Clock,
      color: 'purple'
    },
    {
      title: 'Bounce Rate',
      value: '34.2%',
      change: '-5.1%',
      changeType: 'decrease' as const,
      icon: Activity,
      color: 'orange'
    },
    {
      title: 'Social Shares',
      value: '2,847',
      change: '+22.1%',
      changeType: 'increase' as const,
      icon: Share2,
      color: 'pink'
    },
    {
      title: 'Conversion Rate',
      value: '4.8%',
      change: '+1.2%',
      changeType: 'increase' as const,
      icon: TrendingUp,
      color: 'indigo'
    }
  ];

  const topPages = [
    { page: '/layanan/konstruksi-residensial', views: 8234, change: '+15%' },
    { page: '/portfolio/rumah-modern-jakarta', views: 6521, change: '+8%' },
    { page: '/tentang-kami', views: 5432, change: '+12%' },
    { page: '/kontak', views: 4321, change: '+5%' },
    { page: '/layanan/renovasi', views: 3876, change: '+18%' }
  ];

  const trafficSources = [
    { source: 'Organic Search', visitors: 15234, percentage: 45.2, color: 'bg-blue-500' },
    { source: 'Direct', visitors: 8765, percentage: 26.1, color: 'bg-green-500' },
    { source: 'Social Media', visitors: 5432, percentage: 16.1, color: 'bg-purple-500' },
    { source: 'Referral', visitors: 2876, percentage: 8.5, color: 'bg-orange-500' },
    { source: 'Email', visitors: 1432, percentage: 4.1, color: 'bg-pink-500' }
  ];

  const deviceStats = [
    { device: 'Desktop', users: 18543, percentage: 55.2, icon: Monitor },
    { device: 'Mobile', users: 12876, percentage: 38.3, icon: Smartphone },
    { device: 'Tablet', users: 2187, percentage: 6.5, icon: Monitor }
  ];

  const topLocations = [
    { location: 'Jakarta', users: 12543, percentage: 37.3 },
    { location: 'Surabaya', users: 5432, percentage: 16.2 },
    { location: 'Bandung', users: 4321, percentage: 12.9 },
    { location: 'Medan', users: 3210, percentage: 9.6 },
    { location: 'Semarang', users: 2876, percentage: 8.6 }
  ];

  const recentActivity = [
    { action: 'New user registered', time: '2 minutes ago', type: 'user' },
    { action: 'Contact form submitted', time: '5 minutes ago', type: 'conversion' },
    { action: 'Blog post shared on Facebook', time: '12 minutes ago', type: 'social' },
    { action: 'Quote request received', time: '18 minutes ago', type: 'conversion' },
    { action: 'Newsletter subscription', time: '25 minutes ago', type: 'user' }
  ];

  const colorClasses = {
    blue: 'bg-blue-500',
    green: 'bg-green-500',
    purple: 'bg-purple-500',
    orange: 'bg-orange-500',
    pink: 'bg-pink-500',
    indigo: 'bg-indigo-500'
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Analytics Dashboard</h1>
          <p className="text-gray-600">Monitor your website performance and user engagement</p>
        </div>
        <div className="mt-4 sm:mt-0 flex items-center space-x-3">
          <select
            value={dateRange}
            onChange={(e) => setDateRange(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="7d">Last 7 days</option>
            <option value="30d">Last 30 days</option>
            <option value="90d">Last 90 days</option>
            <option value="1y">Last year</option>
          </select>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center">
            <Download className="w-4 h-4 mr-2" />
            Export Report
          </button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stats.map((stat, index) => {
          const IconComponent = stat.icon;
          return (
            <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                </div>
                <div className={`p-3 rounded-lg ${colorClasses[stat.color]}`}>
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
              </div>
              
              <div className="mt-4 flex items-center">
                {stat.changeType === 'increase' ? (
                  <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                ) : (
                  <TrendingDown className="w-4 h-4 text-red-500 mr-1" />
                )}
                <span className={`text-sm font-medium ${
                  stat.changeType === 'increase' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {stat.change}
                </span>
                <span className="text-sm text-gray-500 ml-1">vs last period</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Charts Section */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Traffic Overview */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Traffic Overview</h3>
            <div className="flex space-x-2">
              <button
                onClick={() => setSelectedMetric('pageviews')}
                className={`px-3 py-1 rounded text-sm ${
                  selectedMetric === 'pageviews' 
                    ? 'bg-blue-100 text-blue-700' 
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                Page Views
              </button>
              <button
                onClick={() => setSelectedMetric('users')}
                className={`px-3 py-1 rounded text-sm ${
                  selectedMetric === 'users' 
                    ? 'bg-blue-100 text-blue-700' 
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                Users
              </button>
            </div>
          </div>
          
          {/* Mock Chart Area */}
          <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <BarChart3 className="w-12 h-12 text-gray-400 mx-auto mb-2" />
              <p className="text-gray-500">Traffic chart visualization</p>
              <p className="text-sm text-gray-400">Chart library integration needed</p>
            </div>
          </div>
        </div>

        {/* Traffic Sources */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Traffic Sources</h3>
          <div className="space-y-4">
            {trafficSources.map((source, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className={`w-3 h-3 rounded-full ${source.color}`}></div>
                  <span className="text-sm font-medium text-gray-900">{source.source}</span>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium text-gray-900">{source.visitors.toLocaleString()}</div>
                  <div className="text-xs text-gray-500">{source.percentage}%</div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Progress bars */}
          <div className="mt-6 space-y-3">
            {trafficSources.map((source, index) => (
              <div key={index}>
                <div className="flex justify-between text-xs text-gray-600 mb-1">
                  <span>{source.source}</span>
                  <span>{source.percentage}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full ${source.color}`}
                    style={{ width: `${source.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Detailed Analytics */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Top Pages */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Top Pages</h3>
          <div className="space-y-4">
            {topPages.map((page, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">{page.page}</p>
                  <p className="text-xs text-gray-500">{page.views.toLocaleString()} views</p>
                </div>
                <span className="text-xs font-medium text-green-600 ml-2">{page.change}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Device Stats */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Device Usage</h3>
          <div className="space-y-4">
            {deviceStats.map((device, index) => {
              const IconComponent = device.icon;
              return (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <IconComponent className="w-5 h-5 text-gray-400" />
                    <span className="text-sm font-medium text-gray-900">{device.device}</span>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium text-gray-900">{device.users.toLocaleString()}</div>
                    <div className="text-xs text-gray-500">{device.percentage}%</div>
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Device chart placeholder */}
          <div className="mt-6 h-32 bg-gray-50 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <PieChart className="w-8 h-8 text-gray-400 mx-auto mb-1" />
              <p className="text-xs text-gray-500">Device distribution chart</p>
            </div>
          </div>
        </div>

        {/* Top Locations */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Top Locations</h3>
          <div className="space-y-4">
            {topLocations.map((location, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-4 h-4 text-gray-400" />
                  <span className="text-sm font-medium text-gray-900">{location.location}</span>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium text-gray-900">{location.users.toLocaleString()}</div>
                  <div className="text-xs text-gray-500">{location.percentage}%</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-center space-x-4">
                <div className={`w-2 h-2 rounded-full ${
                  activity.type === 'user' ? 'bg-blue-500' :
                  activity.type === 'conversion' ? 'bg-green-500' :
                  'bg-purple-500'
                }`}></div>
                <div className="flex-1">
                  <p className="text-sm text-gray-900">{activity.action}</p>
                  <p className="text-xs text-gray-500">{activity.time}</p>
                </div>
                <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                  activity.type === 'user' ? 'bg-blue-100 text-blue-800' :
                  activity.type === 'conversion' ? 'bg-green-100 text-green-800' :
                  'bg-purple-100 text-purple-800'
                }`}>
                  {activity.type}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Performance Insights */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Performance Insights</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <TrendingUp className="w-8 h-8 text-green-600" />
            </div>
            <h4 className="font-medium text-gray-900 mb-1">Growing Traffic</h4>
            <p className="text-sm text-gray-600">Your website traffic has increased by 25% this month</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Users className="w-8 h-8 text-blue-600" />
            </div>
            <h4 className="font-medium text-gray-900 mb-1">New Visitors</h4>
            <p className="text-sm text-gray-600">65% of your visitors are new, showing good reach</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Clock className="w-8 h-8 text-purple-600" />
            </div>
            <h4 className="font-medium text-gray-900 mb-1">Engagement</h4>
            <p className="text-sm text-gray-600">Average session duration improved by 15%</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Globe className="w-8 h-8 text-orange-600" />
            </div>
            <h4 className="font-medium text-gray-900 mb-1">Global Reach</h4>
            <p className="text-sm text-gray-600">Visitors from 15+ countries this month</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminAnalytics;