import React, { useState } from 'react';
import { MessageSquare, Search, Filter, Check, X, Trash2, Reply, Flag, User, Calendar, Mail, Globe, AlertTriangle, CheckCircle, Clock, Space as Spam } from 'lucide-react';

interface Comment {
  id: string;
  post_id: string;
  post_title: string;
  author_name: string;
  author_email: string;
  author_website?: string;
  author_ip: string;
  content: string;
  status: 'pending' | 'approved' | 'spam' | 'trash';
  created_at: string;
  parent_id?: string;
  replies?: Comment[];
}

const CommentManager: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [selectedComments, setSelectedComments] = useState<string[]>([]);
  const [showReplyModal, setShowReplyModal] = useState<string | null>(null);

  // Data dummy komentar
  const comments: Comment[] = [
    {
      id: '1',
      post_id: '1',
      post_title: 'Tips Memilih Kontraktor Terpercaya',
      author_name: 'Budi Santoso',
      author_email: 'budi@email.com',
      author_website: 'https://budisantoso.com',
      author_ip: '192.168.1.1',
      content: 'Artikel yang sangat bermanfaat! Saya sedang mencari kontraktor untuk renovasi rumah dan tips ini sangat membantu. Terima kasih sudah berbagi pengalaman.',
      status: 'approved',
      created_at: '2024-01-15T10:30:00Z'
    },
    {
      id: '2',
      post_id: '1',
      post_title: 'Tips Memilih Kontraktor Terpercaya',
      author_name: 'Sari Dewi',
      author_email: 'sari@email.com',
      author_ip: '192.168.1.2',
      content: 'Saya pernah mengalami masalah dengan kontraktor yang tidak profesional. Artikel ini benar-benar mengingatkan pentingnya riset sebelum memilih kontraktor.',
      status: 'pending',
      created_at: '2024-01-15T14:20:00Z'
    },
    {
      id: '3',
      post_id: '2',
      post_title: 'Tren Desain Rumah Modern 2024',
      author_name: 'Ahmad Rahman',
      author_email: 'ahmad@email.com',
      author_ip: '192.168.1.3',
      content: 'Desain minimalis memang sedang trend. Tapi menurut saya, yang penting adalah fungsionalitas ruang, bukan hanya estetika.',
      status: 'approved',
      created_at: '2024-01-14T16:45:00Z',
      replies: [
        {
          id: '3-1',
          post_id: '2',
          post_title: 'Tren Desain Rumah Modern 2024',
          author_name: 'Admin Berkah Konstruksi',
          author_email: 'admin@konstruksiberkah.com',
          author_ip: '192.168.1.100',
          content: 'Betul sekali Pak Ahmad. Keseimbangan antara estetika dan fungsionalitas memang kunci dari desain yang baik. Terima kasih atas komentarnya!',
          status: 'approved',
          created_at: '2024-01-14T17:00:00Z',
          parent_id: '3'
        }
      ]
    },
    {
      id: '4',
      post_id: '3',
      post_title: 'Panduan Renovasi Budget Terbatas',
      author_name: 'Linda Kusuma',
      author_email: 'linda@email.com',
      author_ip: '192.168.1.4',
      content: 'Wah, tips yang sangat praktis! Saya sedang merencanakan renovasi dengan budget terbatas. Boleh minta rekomendasi supplier material yang murah tapi berkualitas?',
      status: 'approved',
      created_at: '2024-01-13T11:15:00Z'
    },
    {
      id: '5',
      post_id: '1',
      post_title: 'Tips Memilih Kontraktor Terpercaya',
      author_name: 'Spam User',
      author_email: 'spam@fake.com',
      author_ip: '192.168.1.5',
      content: 'Check out our amazing construction deals! Visit our website for 50% discount! www.fake-construction.com',
      status: 'spam',
      created_at: '2024-01-15T09:00:00Z'
    },
    {
      id: '6',
      post_id: '2',
      post_title: 'Tren Desain Rumah Modern 2024',
      author_name: 'Rina Sari',
      author_email: 'rina@email.com',
      author_ip: '192.168.1.6',
      content: 'Artikel yang menarik. Saya tertarik dengan konsep open space. Apakah cocok untuk iklim tropis Indonesia?',
      status: 'pending',
      created_at: '2024-01-14T20:30:00Z'
    }
  ];

  const stats = {
    total: comments.length,
    pending: comments.filter(c => c.status === 'pending').length,
    approved: comments.filter(c => c.status === 'approved').length,
    spam: comments.filter(c => c.status === 'spam').length,
    trash: comments.filter(c => c.status === 'trash').length
  };

  const filteredComments = comments.filter(comment => {
    const matchesSearch = 
      comment.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
      comment.author_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      comment.post_title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || comment.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'approved':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'spam':
        return 'bg-red-100 text-red-800';
      case 'trash':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'approved':
        return CheckCircle;
      case 'pending':
        return Clock;
      case 'spam':
        return Flag;
      case 'trash':
        return Trash2;
      default:
        return AlertTriangle;
    }
  };

  const handleStatusChange = (commentId: string, newStatus: string) => {
    console.log(`Change comment ${commentId} status to ${newStatus}`);
  };

  const handleBulkAction = (action: string) => {
    console.log(`Bulk action: ${action} on comments:`, selectedComments);
    setSelectedComments([]);
  };

  const toggleCommentSelection = (commentId: string) => {
    setSelectedComments(prev =>
      prev.includes(commentId)
        ? prev.filter(id => id !== commentId)
        : [...prev, commentId]
    );
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Comments</h1>
          <p className="text-gray-600">Manage and moderate user comments</p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <div className="flex items-center">
            <MessageSquare className="w-6 h-6 text-blue-500 mr-2" />
            <div>
              <p className="text-lg font-bold text-gray-900">{stats.total}</p>
              <p className="text-sm text-gray-600">Total</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <div className="flex items-center">
            <Clock className="w-6 h-6 text-yellow-500 mr-2" />
            <div>
              <p className="text-lg font-bold text-gray-900">{stats.pending}</p>
              <p className="text-sm text-gray-600">Pending</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <div className="flex items-center">
            <CheckCircle className="w-6 h-6 text-green-500 mr-2" />
            <div>
              <p className="text-lg font-bold text-gray-900">{stats.approved}</p>
              <p className="text-sm text-gray-600">Approved</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <div className="flex items-center">
            <Flag className="w-6 h-6 text-red-500 mr-2" />
            <div>
              <p className="text-lg font-bold text-gray-900">{stats.spam}</p>
              <p className="text-sm text-gray-600">Spam</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <div className="flex items-center">
            <Trash2 className="w-6 h-6 text-gray-500 mr-2" />
            <div>
              <p className="text-lg font-bold text-gray-900">{stats.trash}</p>
              <p className="text-sm text-gray-600">Trash</p>
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search comments..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
          <div className="flex gap-4">
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">All Status</option>
              <option value="pending">Pending</option>
              <option value="approved">Approved</option>
              <option value="spam">Spam</option>
              <option value="trash">Trash</option>
            </select>
          </div>
        </div>

        {/* Bulk Actions */}
        {selectedComments.length > 0 && (
          <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <div className="flex items-center justify-between">
              <span className="text-sm text-blue-700">
                {selectedComments.length} comment(s) selected
              </span>
              <div className="flex space-x-2">
                <button
                  onClick={() => handleBulkAction('approve')}
                  className="px-3 py-1 bg-green-600 text-white rounded text-sm hover:bg-green-700"
                >
                  Approve
                </button>
                <button
                  onClick={() => handleBulkAction('spam')}
                  className="px-3 py-1 bg-red-600 text-white rounded text-sm hover:bg-red-700"
                >
                  Mark as Spam
                </button>
                <button
                  onClick={() => handleBulkAction('trash')}
                  className="px-3 py-1 bg-gray-600 text-white rounded text-sm hover:bg-gray-700"
                >
                  Move to Trash
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Comments List */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="divide-y divide-gray-200">
          {filteredComments.map((comment) => {
            const StatusIcon = getStatusIcon(comment.status);
            return (
              <div key={comment.id} className="p-6">
                <div className="flex items-start space-x-4">
                  <input
                    type="checkbox"
                    checked={selectedComments.includes(comment.id)}
                    onChange={() => toggleCommentSelection(comment.id)}
                    className="mt-1 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  
                  <div className="flex-1 min-w-0">
                    {/* Comment Header */}
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-2">
                          <User className="w-4 h-4 text-gray-400" />
                          <span className="font-medium text-gray-900">{comment.author_name}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Mail className="w-4 h-4 text-gray-400" />
                          <span className="text-sm text-gray-600">{comment.author_email}</span>
                        </div>
                        {comment.author_website && (
                          <div className="flex items-center space-x-2">
                            <Globe className="w-4 h-4 text-gray-400" />
                            <a 
                              href={comment.author_website}
                              className="text-sm text-blue-600 hover:text-blue-800"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Website
                            </a>
                          </div>
                        )}
                      </div>
                      <div className="flex items-center space-x-2">
                        <StatusIcon className={`w-4 h-4 ${
                          comment.status === 'approved' ? 'text-green-500' :
                          comment.status === 'pending' ? 'text-yellow-500' :
                          comment.status === 'spam' ? 'text-red-500' :
                          'text-gray-500'
                        }`} />
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(comment.status)}`}>
                          {comment.status}
                        </span>
                      </div>
                    </div>

                    {/* Post Reference */}
                    <div className="mb-3">
                      <span className="text-sm text-gray-500">
                        On post: <span className="font-medium text-gray-700">{comment.post_title}</span>
                      </span>
                    </div>

                    {/* Comment Content */}
                    <div className="mb-4">
                      <p className="text-gray-800 leading-relaxed">{comment.content}</p>
                    </div>

                    {/* Comment Meta */}
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{new Date(comment.created_at).toLocaleString('id-ID')}</span>
                        </div>
                        <span>IP: {comment.author_ip}</span>
                      </div>
                      
                      {/* Actions */}
                      <div className="flex items-center space-x-2">
                        {comment.status === 'pending' && (
                          <>
                            <button
                              onClick={() => handleStatusChange(comment.id, 'approved')}
                              className="text-green-600 hover:text-green-800 flex items-center"
                            >
                              <Check className="w-4 h-4 mr-1" />
                              Approve
                            </button>
                            <button
                              onClick={() => handleStatusChange(comment.id, 'spam')}
                              className="text-red-600 hover:text-red-800 flex items-center"
                            >
                              <Flag className="w-4 h-4 mr-1" />
                              Spam
                            </button>
                          </>
                        )}
                        {comment.status === 'approved' && (
                          <button
                            onClick={() => setShowReplyModal(comment.id)}
                            className="text-blue-600 hover:text-blue-800 flex items-center"
                          >
                            <Reply className="w-4 h-4 mr-1" />
                            Reply
                          </button>
                        )}
                        <button
                          onClick={() => handleStatusChange(comment.id, 'trash')}
                          className="text-gray-600 hover:text-red-600 flex items-center"
                        >
                          <Trash2 className="w-4 h-4 mr-1" />
                          Delete
                        </button>
                      </div>
                    </div>

                    {/* Replies */}
                    {comment.replies && comment.replies.length > 0 && (
                      <div className="mt-4 ml-8 border-l-2 border-gray-200 pl-4">
                        {comment.replies.map((reply) => (
                          <div key={reply.id} className="mb-4 last:mb-0">
                            <div className="flex items-center space-x-2 mb-2">
                              <User className="w-4 h-4 text-gray-400" />
                              <span className="font-medium text-gray-900">{reply.author_name}</span>
                              <span className="text-sm text-gray-500">
                                {new Date(reply.created_at).toLocaleString('id-ID')}
                              </span>
                            </div>
                            <p className="text-gray-800">{reply.content}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty State */}
        {filteredComments.length === 0 && (
          <div className="text-center py-12">
            <MessageSquare className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No comments found</h3>
            <p className="text-gray-500">
              {searchTerm || statusFilter !== 'all'
                ? 'Try adjusting your search or filter criteria.'
                : 'Comments will appear here when users interact with your posts.'
              }
            </p>
          </div>
        )}
      </div>

      {/* Reply Modal */}
      {showReplyModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-2xl mx-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Reply to Comment</h3>
              <button
                onClick={() => setShowReplyModal(null)}
                className="text-gray-400 hover:text-gray-600"
              >
                ×
              </button>
            </div>
            
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Your Reply</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Write your reply..."
                />
              </div>
              
              <div className="flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={() => setShowReplyModal(null)}
                  className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  Send Reply
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CommentManager;