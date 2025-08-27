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
import CategoryManager from './components/admin/Categories/CategoryManager';
import TagManager from './components/admin/Tags/TagManager';
import CommentManager from './components/admin/Comments/CommentManager';
import UserManager from './components/admin/Users/UserManager';
import SystemSettings from './components/admin/Settings/SystemSettings';

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
            <Route path="videos" element={<MediaLibrary />} />
            <Route path="categories" element={<CategoryManager />} />
            <Route path="tags" element={<TagManager />} />
            <Route path="comments" element={<CommentManager />} />
            <Route path="users" element={<UserManager />} />
            <Route path="analytics" element={<AdminAnalytics />} />
            <Route path="calendar" element={<EditorialCalendar />} />
            <Route path="settings" element={<SystemSettings />} />
          </Route>
          
          {/* Catch all route */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;