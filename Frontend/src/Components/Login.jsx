import React, { useState } from 'react';
import { Eye, EyeOff, User, Mail, Phone, Lock, UserPlus, LogIn } from 'lucide-react';

export default function AdvancedLogin() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (isSignUp) {
      if (!formData.name.trim()) newErrors.name = 'Name is required';
      if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
      if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = 'Passwords do not match';
      }
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.password.trim()) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Handle form submission
      console.log('Form submitted:', formData);
      alert(`${isSignUp ? 'Sign up' : 'Login'} successful!`);
    }
  };

  const toggleMode = () => {
    setIsSignUp(!isSignUp);
    setFormData({
      name: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: ''
    });
    setErrors({});
  };

  return (
    <div className="w-screen min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 overflow-x-hidden -mx-4 -my-4 sm:-mx-6 sm:-my-6 md:-mx-8 md:-my-8 lg:-mx-12 lg:-my-12">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500 rounded-full opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-500 rounded-full opacity-10 animate-pulse delay-2000"></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full opacity-20 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          ></div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen p-4 py-12">
        <div className="w-full max-w-md">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-cyan-100 mb-2">
              {isSignUp ? 'Create Account' : 'Welcome Back'}
            </h1>
            <p className="text-cyan-300">
              {isSignUp ? 'Join us today and get started' : 'Sign in to your account'}
            </p>
          </div>

          {/* Form Container */}
          <div className="bg-transparent bg-opacity-80 backdrop-blur-md rounded-2xl p-8 shadow-2xl">
            <div className="space-y-6">
              {/* Name Field (Sign Up Only) */}
              {isSignUp && (
                <div className="space-y-2">
                  <label className="text-cyan-200 text-sm font-medium">Full Name</label>
                  <div className="relative">
                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 rounded-full p-1">
                      <User className="text-cyan-400 w-3 h-3" />
                    </div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 bg-white bg-opacity-15 border border-cyan-300 border-opacity-30 rounded-lg text-black placeholder-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition duration-200"
                      placeholder="Enter your full name"
                    />
                  </div>
                  {errors.name && <p className="text-red-300 text-sm">{errors.name}</p>}
                </div>
              )}

              {/* Email Field */}
              <div className="space-y-2">
                <label className="text-cyan-200 text-sm font-medium">Email</label>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 rounded-full p-1">
                    <Mail className="text-cyan-400 w-3 h-3" />
                  </div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 bg-white bg-opacity-15 border border-cyan-300 border-opacity-30 rounded-lg text-black placeholder-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition duration-200"
                    placeholder="Enter your email"
                  />
                </div>
                {errors.email && <p className="text-red-300 text-sm">{errors.email}</p>}
              </div>

              {/* Phone Field (Sign Up Only) */}
              {isSignUp && (
                <div className="space-y-2">
                  <label className="text-cyan-200 text-sm font-medium">Phone Number</label>
                  <div className="relative">
                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 rounded-full p-1">
                      <Phone className="text-cyan-400 w-3 h-3" />
                    </div>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 bg-white bg-opacity-15 border border-cyan-300 border-opacity-30 rounded-lg text-black placeholder-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition duration-200"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  {errors.phone && <p className="text-red-300 text-sm">{errors.phone}</p>}
                </div>
              )}

              {/* Password Field */}
              <div className="space-y-2">
                <label className="text-cyan-200 text-sm font-medium">Password</label>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 rounded-full p-1">
                    <Lock className="text-cyan-400 w-3 h-3" />
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-12 py-3 bg-white bg-opacity-15 border border-cyan-300 border-opacity-30 rounded-lg text-black placeholder-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition duration-200"
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 rounded-full p-1 hover:bg-opacity-30 transition duration-200"
                  >
                    {showPassword ? <EyeOff className="w-3 h-3 text-cyan-400" /> : <Eye className="w-3 h-3 text-cyan-400" />}
                  </button>
                </div>
                {errors.password && <p className="text-red-300 text-sm">{errors.password}</p>}
              </div>

              {/* Confirm Password Field (Sign Up Only) */}
              {isSignUp && (
                <div className="space-y-2">
                  <label className="text-cyan-200 text-sm font-medium">Confirm Password</label>
                  <div className="relative">
                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 rounded-full p-1">
                      <Lock className="text-cyan-400 w-3 h-3" />
                    </div>
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-12 py-3 bg-white bg-opacity-15 border border-cyan-300 border-opacity-30 rounded-lg text-black placeholder-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition duration-200"
                      placeholder="Confirm your password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 rounded-full p-1 hover:bg-opacity-30 transition duration-200"
                    >
                      {showConfirmPassword ? <EyeOff className="w-3 h-3 text-cyan-400" /> : <Eye className="w-3 h-3 text-cyan-400" />}
                    </button>
                  </div>
                  {errors.confirmPassword && <p className="text-red-300 text-sm">{errors.confirmPassword}</p>}
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                onClick={handleSubmit}
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-transparent transition duration-200 transform hover:scale-105 shadow-lg"
              >
                {isSignUp ? 'Create Account' : 'Sign In'}
              </button>
            </div>

            {/* Toggle Mode */}
            <div className="mt-6 text-center">
              <p className="text-cyan-300">
                {isSignUp ? 'Already have an account?' : "Don't have an account?"}
                <button
                  onClick={toggleMode}
                  className="ml-2 text-cyan-400 hover:text-cyan-200 font-medium transition duration-200"
                >
                  {isSignUp ? 'Sign In' : 'Sign Up'}
                </button>
              </p>
            </div>

            {/* Forgot Password (Login Only) */}
            {!isSignUp && (
              <div className="mt-4 text-center">
                <button className="text-cyan-400 hover:text-cyan-200 text-sm transition duration-200">
                  Forgot your password?
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}