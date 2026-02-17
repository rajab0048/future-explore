import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Home, BookOpen, Trophy, Settings, User, LogOut, Plus, Menu, X } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const Dashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  
  const [explorers, setExplorers] = useState([]);
  const [selectedExplorer, setSelectedExplorer] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    console.log('Dashboard useEffect - user:', user);
    // Load explorers from localStorage - filter by current user's email
    const savedExplorers = localStorage.getItem('explorers');
    console.log('Saved explorers from localStorage:', savedExplorers);
    if (savedExplorers) {
      const allExplorers = JSON.parse(savedExplorers);
      console.log('All explorers:', allExplorers);
      const userExplorers = allExplorers.filter(explorer => explorer.parentEmail === user?.email);
      console.log('Filtered user explorers:', userExplorers);
      setExplorers(userExplorers);
      if (userExplorers.length > 0) {
        setSelectedExplorer(userExplorers[0]);
      }
    } else {
      setExplorers([]);
    }
  }, []);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const handleAddExplorer = () => {
    navigate('/create-explorer');
  };

  const getAvatarEmoji = (avatarId) => {
    const avatars = {
      'fox': '🦊',
      'tiger': '🐯',
      'lion': '🦁',
      'panda': '🐼',
      'frog': '🐸',
      'monkey': '🐵',
      'unicorn': '🦄',
      'caterpillar': '🐛',
      'crab': '🦀',
      'bee': '🐝',
      'whale': '🐋',
      'butterfly': '🦋'
    };
    return avatars[avatarId] || '🦊';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fff7f3] via-[#f4fbff] to-[#fff5ff]">
      {/* Header - Responsive */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-orange-400 rounded-full flex items-center justify-center mr-3">
                <span className="text-white font-bold text-lg">F</span>
              </div>
              <h1 className="text-xl font-bold text-gray-800">Future Explorer</h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <button className="flex items-center text-gray-700 hover:text-red-500 transition-colors">
                <Home className="h-5 w-5 mr-2" />
                Dashboard
              </button>
              <button className="flex items-center text-gray-700 hover:text-red-500 transition-colors">
                <BookOpen className="h-5 w-5 mr-2" />
                Lessons
              </button>
              <button className="flex items-center text-gray-700 hover:text-red-500 transition-colors">
                <Trophy className="h-5 w-5 mr-2" />
                Downloads
              </button>
              <button className="flex items-center text-gray-700 hover:text-red-500 transition-colors">
                <Settings className="h-5 w-5 mr-2" />
                Settings
              </button>
            </nav>

            {/* Desktop User Menu */}
            <div className="hidden md:flex items-center space-x-3">
              <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                <User className="h-5 w-5 text-gray-600" />
              </div>
              <span className="text-gray-700 font-medium">{user?.name || 'Parent'}</span>
              <button
                onClick={handleLogout}
                className="flex items-center text-gray-600 hover:text-red-500 transition-colors ml-2"
                title="Logout"
              >
                <LogOut className="h-5 w-5" />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <div className="px-4 py-3 space-y-3">
              <div className="flex items-center space-x-3 pb-3 border-b border-gray-100">
                <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                  <User className="h-5 w-5 text-gray-600" />
                </div>
                <span className="text-gray-700 font-medium">{user?.name || 'Parent'}</span>
              </div>
              <button className="flex items-center w-full text-gray-700 hover:text-red-500 transition-colors py-2">
                <Home className="h-5 w-5 mr-3" />
                Dashboard
              </button>
              <button className="flex items-center w-full text-gray-700 hover:text-red-500 transition-colors py-2">
                <BookOpen className="h-5 w-5 mr-3" />
                Lessons
              </button>
              <button className="flex items-center w-full text-gray-700 hover:text-red-500 transition-colors py-2">
                <Trophy className="h-5 w-5 mr-3" />
                Downloads
              </button>
              <button className="flex items-center w-full text-gray-700 hover:text-red-500 transition-colors py-2">
                <Settings className="h-5 w-5 mr-3" />
                Settings
              </button>
              <button
                onClick={handleLogout}
                className="flex items-center w-full text-red-600 hover:text-red-700 transition-colors py-2 border-t border-gray-100 pt-3"
              >
                <LogOut className="h-5 w-5 mr-3" />
                Logout
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Welcome back, Parent!</h1>
          <p className="text-gray-600 text-lg">Track your child's learning journey and celebrate their achievements.</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <BookOpen className="h-6 w-6 text-blue-600" />
              </div>
              <span className="text-2xl font-bold text-gray-800">24</span>
            </div>
            <h3 className="text-gray-600 font-medium">Lessons Completed</h3>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                <Trophy className="h-6 w-6 text-yellow-600" />
              </div>
              <span className="text-2xl font-bold text-gray-800">15</span>
            </div>
            <h3 className="text-gray-600 font-medium">Badges Earned</h3>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <span className="text-xl">✓</span>
              </div>
              <span className="text-2xl font-bold text-gray-800">Active</span>
            </div>
            <h3 className="text-gray-600 font-medium">Subscription Status</h3>
          </div>
        </div>

        {/* Explorer Profiles Section */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-gray-800">Explorer Profiles</h2>
            <button
              onClick={handleAddExplorer}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-red-500 to-pink-500 text-white font-semibold shadow-md hover:shadow-lg transition-all"
            >
              <Plus className="h-4 w-4" />
              Add Explorer
            </button>
          </div>

          {/* Explorer Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {explorers.length === 0 ? (
              <div className="col-span-full text-center py-12">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="h-8 w-8 text-gray-400" />
                </div>
                <p className="text-gray-500 text-lg mb-4">No explorers yet</p>
                <button
                  onClick={handleAddExplorer}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-red-500 to-pink-500 text-white font-semibold shadow-md hover:shadow-lg transition-all"
                >
                  <Plus className="h-4 w-4" />
                  Create Your First Explorer
                </button>
              </div>
            ) : (
              explorers.map((explorer) => (
                <div
                  key={explorer.id}
                  className="border border-gray-200 rounded-xl p-6 hover:border-red-300 transition-all cursor-pointer"
                  onClick={() => setSelectedExplorer(explorer)}
                >
                  <div className="flex items-center mb-4">
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mr-4">
                      <span className="text-2xl">{getAvatarEmoji(explorer.avatar)}</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 text-lg">{explorer.name}</h3>
                      <p className="text-gray-600">Age: {explorer.age}</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 text-sm">Level</span>
                      <span className="font-semibold text-gray-800">{explorer.level || 1}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 text-sm">Progress</span>
                      <span className="font-semibold text-gray-800">{explorer.progress || 0}%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 text-sm">Badges</span>
                      <span className="font-semibold text-gray-800">{explorer.badges || 0}</span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
