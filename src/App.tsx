import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';

// Public components
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Admin components
import AdminLogin from './components/admin/Auth/AdminLogin';
import AdminLayout from './components/admin/Layout/AdminLayout';
import AdminDashboard from './components/admin/Dashboard/AdminDashboard';
import PostList from './components/admin/Posts/PostList';
import PostEditor from './components/admin/Posts/PostEditor';
import MediaLibrary from './components/admin/Media/MediaLibrary';
import EditorialCalendar from './components/admin/Editorial/EditorialCalendar';
import AdminAnalytics from './components/admin/Analytics/AdminAnalytics';

// Protected Route Component
const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user, loading } = useAuth();
  
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }
  
  return user ? <>{children}</> : <Navigate to="/admin/login" />;
};

// Public Website Component
const PublicWebsite: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <About />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<PublicWebsite />} />
          
          {/* Admin Routes */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin" element={
            <ProtectedRoute>
              <AdminLayout />
            </ProtectedRoute>
          }>
            <Route index element={<AdminDashboard />} />
            <Route path="posts" element={<PostList />} />
            <Route path="posts/new" element={<PostEditor />} />
            <Route path="posts/:id/edit" element={<PostEditor />} />
            <Route path="media" element={<MediaLibrary />} />
            <Route path="media/upload" element={<MediaLibrary />} />
            <Route path="videos" element={<div className="p-6"><h1 className="text-2xl font-bold">Video Management</h1><p className="text-gray-600">Video management interface coming soon...</p></div>} />
            <Route path="categories" element={<div className="p-6"><h1 className="text-2xl font-bold">Categories</h1><p className="text-gray-600">Category management interface coming soon...</p></div>} />
            <Route path="tags" element={<div className="p-6"><h1 className="text-2xl font-bold">Tags</h1><p className="text-gray-600">Tag management interface coming soon...</p></div>} />
            <Route path="comments" element={<div className="p-6"><h1 className="text-2xl font-bold">Comments</h1><p className="text-gray-600">Comment management interface coming soon...</p></div>} />
            <Route path="users" element={<div className="p-6"><h1 className="text-2xl font-bold">Users</h1><p className="text-gray-600">User management interface coming soon...</p></div>} />
            <Route path="analytics" element={<AdminAnalytics />} />
            <Route path="calendar" element={<EditorialCalendar />} />
            <Route path="settings" element={<div className="p-6"><h1 className="text-2xl font-bold">Settings</h1><p className="text-gray-600">System settings coming soon...</p></div>} />
          </Route>
          
          {/* Catch all route */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;