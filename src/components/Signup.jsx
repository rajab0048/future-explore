import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Lock, User, ArrowRight } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const Signup = ({ onSwitchToLogin }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { signup } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      // Validate passwords match
      if (password !== confirmPassword) {
        throw new Error('Passwords do not match!');
      }
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Simple validation (in real app, this would be server-side)
      if (name && email && password) {
        const userData = {
          name,
          email,
          password,
        };
        signup(userData);
        navigate('/dashboard');
      } else {
        throw new Error('Please fill in all fields');
      }
    } catch (error) {
      console.error('Signup error:', error);
      alert(error.message || 'Signup failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fff7f3] via-[#f4fbff] to-[#fff5ff] flex items-center justify-center p-6 font-['Baloo_2']">
      <div className="bg-white rounded-[32px] shadow-[0_20px_60px_rgba(15,23,42,0.15)] p-10 w-full max-w-md backdrop-blur-sm border border-white/50">
        {/* Logo and Title */}
        <div className="text-center mb-10">
          <div className="flex items-center justify-center mb-6">
            <div className="w-14 h-14 bg-gradient-to-tr from-pink-500 to-orange-400 rounded-full flex items-center justify-center mr-3 shadow-lg">
              <span className="text-white font-bold text-2xl">F</span>
            </div>
            <h1 className="text-3xl font-bold text-gray-800 tracking-tight">Future Explorer</h1>
          </div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">Join the Adventure!</h2>
          <p className="text-gray-600 text-base">Create your account and start exploring.</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Field */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <User className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Full Name"
              className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent bg-gray-50/50 transition-all duration-200 text-base"
              required
            />
          </div>

          {/* Email Field */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Mail className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="parent@email.com"
              className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent bg-gray-50/50 transition-all duration-200 text-base"
              required
            />
          </div>

          {/* Password Field */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Lock className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="•••••••"
              className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent bg-gray-50/50 transition-all duration-200 text-base"
              required
            />
          </div>

          {/* Confirm Password Field */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Lock className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="•••••••"
              className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent bg-gray-50/50 transition-all duration-200 text-base"
              required
            />
          </div>

          {/* Sign Up Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-gradient-to-r from-pink-500 to-orange-400 text-white font-semibold py-4 rounded-2xl hover:from-pink-600 hover:to-orange-500 transition-all duration-300 flex items-center justify-center group disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-base mt-6"
          >
            {isLoading ? (
              <span className="flex items-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Creating Account...
              </span>
            ) : (
              <>
                Sign Up Free
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </button>
        </form>

        {/* Login Link */}
        <div className="text-center mt-8">
          <p className="text-gray-600 text-base">
            Already have an account?{' '}
            <button
              onClick={onSwitchToLogin}
              className="text-pink-500 font-semibold hover:text-pink-600 transition-colors"
            >
              Sign In
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
