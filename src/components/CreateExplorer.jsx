import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Home, BookOpen, Trophy, Settings, User, LogOut, Star, Menu, X } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const CreateExplorer = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  
  const [selectedAvatar, setSelectedAvatar] = useState('fox');
  const [explorerName, setExplorerName] = useState('');
  const [selectedAge, setSelectedAge] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const avatars = [
    { id: 'fox', emoji: '🦊', name: 'Fox' },
    { id: 'tiger', emoji: '🐯', name: 'Tiger' },
    { id: 'lion', emoji: '🦁', name: 'Lion' },
    { id: 'panda', emoji: '🐼', name: 'Panda' },
    { id: 'frog', emoji: '🐸', name: 'Frog' },
    { id: 'monkey', emoji: '🐵', name: 'Monkey' },
    { id: 'unicorn', emoji: '🦄', name: 'Unicorn' },
    { id: 'caterpillar', emoji: '🐛', name: 'Caterpillar' },
    { id: 'crab', emoji: '🦀', name: 'Crab' },
    { id: 'bee', emoji: '🐝', name: 'Bee' },
    { id: 'whale', emoji: '🐋', name: 'Whale' },
    { id: 'butterfly', emoji: '🦋', name: 'Butterfly' }
  ];

  const ages = ['6', '7', '8', '9'];

  const handleCreateExplorer = () => {
    console.log('handleCreateExplorer called');
    console.log('user:', user);
    
    if (!explorerName.trim()) {
      alert('Please enter your child\'s name');
      return;
    }
    if (!selectedAge) {
      alert('Please select an age');
      return;
    }
    
    // Save explorer profile to localStorage with parent association
    const explorerProfile = {
      id: Date.now().toString(),
      parentEmail: user?.email, // Associate with current user
      name: explorerName,
      age: selectedAge,
      avatar: selectedAvatar,
      level: 1,
      progress: 0,
      badges: 0,
      createdAt: new Date().toISOString()
    };
    
    console.log('Creating explorer:', explorerProfile);
    
    // Get existing explorers or create empty array
    const existingExplorers = localStorage.getItem('explorers');
    const explorers = existingExplorers ? JSON.parse(existingExplorers) : [];
    
    console.log('Existing explorers:', explorers);
    
    // Add new explorer
    const updatedExplorers = [...explorers, explorerProfile];
    localStorage.setItem('explorers', JSON.stringify(updatedExplorers));
    
    console.log('Saved explorers:', updatedExplorers);
    console.log('Navigating to /dashboard');
    
    // Navigate to main dashboard
    navigate('/dashboard');
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
              <span className="text-gray-700 font-medium">{user?.name || 'Explorer'}</span>
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
                <span className="text-gray-700 font-medium">{user?.name || 'Explorer'}</span>
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
      <main className="flex items-center justify-center min-h-[calc(100vh-4rem)] p-6">
        <div className="bg-white rounded-[32px] shadow-[0_20px_60px_rgba(15,23,42,0.15)] p-10 w-full max-w-lg backdrop-blur-sm border border-white/50">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                <Star className="h-6 w-6 text-yellow-500" />
              </div>
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Create New Explorer</h2>
            <p className="text-gray-600 text-lg">Set up a fun profile for your child!</p>
          </div>

          {/* Avatar Selection */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Choose an Avatar</h3>
            
            {/* Avatar Grid */}
            <div className="grid grid-cols-4 sm:grid-cols-6 gap-2 sm:gap-3 mb-6">
              {avatars.map((avatar) => (
                <button
                  key={avatar.id}
                  onClick={() => setSelectedAvatar(avatar.id)}
                  className={`aspect-square rounded-xl border-2 transition-all duration-200 flex items-center justify-center text-2xl hover:scale-105 ${
                    selectedAvatar === avatar.id 
                      ? 'border-red-500 bg-red-50 shadow-lg' 
                      : 'border-gray-200 bg-gray-50 hover:border-gray-300'
                  }`}
                >
                  {avatar.emoji}
                </button>
              ))}
            </div>

            {/* Selected Avatar Display */}
            <div className="flex justify-center">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl border-4 border-red-500 bg-red-50 flex items-center justify-center shadow-lg">
                <span className="text-4xl sm:text-5xl">
                  {avatars.find(a => a.id === selectedAvatar)?.emoji}
                </span>
              </div>
            </div>
          </div>

          {/* Explorer Name */}
          <div className="mb-8">
            <label className="block text-lg font-semibold text-gray-800 mb-3">Explorer Name</label>
            <input
              type="text"
              value={explorerName}
              onChange={(e) => setExplorerName(e.target.value)}
              placeholder="Enter your child's name"
              className="w-full px-4 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent bg-gray-50/50 transition-all duration-200 text-lg"
            />
          </div>

          {/* Age Selection */}
          <div className="mb-8">
            <label className="block text-lg font-semibold text-gray-800 mb-3">Age</label>
            <div className="flex flex-wrap gap-3 sm:gap-4">
              {ages.map((age) => (
                <button
                  key={age}
                  onClick={() => setSelectedAge(age)}
                  className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 text-base sm:text-lg font-semibold transition-all duration-200 hover:scale-105 ${
                    selectedAge === age
                      ? 'border-red-500 bg-red-500 text-white shadow-lg'
                      : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {age}
                </button>
              ))}
            </div>
          </div>

          {/* Create Explorer Button */}
          <button
            onClick={handleCreateExplorer}
            className="w-full bg-gradient-to-r from-red-500 to-pink-500 text-white font-bold py-4 rounded-2xl hover:from-red-600 hover:to-pink-600 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-lg"
          >
            Create Explorer
            <span className="ml-2 text-xl">→</span>
          </button>
        </div>
      </main>
    </div>
  );
};

export default CreateExplorer;
