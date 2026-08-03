import React, { useState } from 'react';
import { Outlet, Navigate, Link, useLocation } from 'react-router-dom';
import { LogOut, LayoutDashboard, Settings, Type, Layers, Menu, X, Image as ImageIcon, Users } from 'lucide-react';
import { images } from "../assets/image-mapping";
import { optimizeCloudinaryUrl } from "../utils/image-optimizer";

const AdminLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const token = localStorage.getItem('adminToken');
  const location = useLocation();

  if (!token) {
    return <Navigate to="/admin/login" replace />;
  }

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    window.location.href = '/admin/login';
  };

  const navLinks = [
    { name: 'Hero Section', path: '/admin/hero', icon: <Type size={20} /> },
    { name: 'Manage Services', path: '/admin/services', icon: <Layers size={20} /> },
    { name: 'Manage Gallery', path: '/admin/gallery', icon: <ImageIcon size={20} /> },
    { name: 'Manage Clients', path: '/admin/clients', icon: <Users size={20} /> },
  ];

  return (
    <div className="flex h-screen bg-background font-inter overflow-hidden relative">
      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-20 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside 
        className={`fixed lg:static top-0 left-0 h-full w-64 bg-white border-r border-gray-100 flex flex-col shadow-[0_0_40px_rgba(0,0,0,0.05)] lg:shadow-sm z-30 transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        <div className="h-20 flex items-center justify-between px-6 border-b border-gray-100">
          <img
            src={optimizeCloudinaryUrl(images.logos.sgs, { height: 60, crop: 'limit' })}
            alt="Sri Guru Sai Laser"
            className="h-8 w-auto"
          />
          <button 
            className="lg:hidden text-gray-500 hover:text-primary transition-colors p-1"
            onClick={() => setIsSidebarOpen(false)}
          >
            <X size={20} />
          </button>
        </div>
        <nav className="p-4 space-y-2 flex-1">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsSidebarOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-bold text-sm ${
                  isActive 
                    ? "bg-primary text-white shadow-md shadow-primary/20" 
                    : "text-gray-500 hover:bg-primary/5 hover:text-primary"
                }`}
              >
                {link.icon}
                <span>{link.name}</span>
              </Link>
            )
          })}
        </nav>
        
        {/* User / Settings Area */}
        <div className="p-4 border-t border-gray-100 bg-gray-50/50">
          <div className="flex items-center gap-3 px-4 py-2">
            <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center text-secondary font-black">
              A
            </div>
            <div className="flex-1">
              <p className="text-xs font-bold text-text">Administrator</p>
              <p className="text-[10px] text-gray-500">Active Session</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden relative">
        {/* Decorative Background */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 z-0 pointer-events-none"></div>

        {/* Header */}
        <header className="h-20 bg-white/80 backdrop-blur-md border-b border-gray-100 flex items-center justify-between px-4 md:px-8 z-10 sticky top-0">
          <div className="flex items-center gap-4">
            <button 
              className="lg:hidden text-gray-500 hover:text-primary transition-colors p-2 bg-gray-50 rounded-lg"
              onClick={() => setIsSidebarOpen(true)}
            >
              <Menu size={24} />
            </button>
            <h1 className="text-xl font-black text-text capitalize">
              {location.pathname === '/admin' ? 'Overview' : location.pathname.split('/').pop().replace('-', ' ')}
            </h1>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 text-xs font-bold text-gray-500 hover:text-red-500 transition-colors px-4 py-2 rounded-lg hover:bg-red-50"
          >
            <LogOut size={16} />
            <span className="uppercase tracking-widest">Logout</span>
          </button>
        </header>

        {/* Main Area */}
        <main className="flex-1 p-4 md:p-8 overflow-y-auto z-10">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
