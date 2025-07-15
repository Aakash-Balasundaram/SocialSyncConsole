import React, { useState, useEffect, useRef } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, AreaChart, Area } from 'recharts';
import { Instagram, TrendingUp, Users, Eye, Heart, MessageCircle, Share2, BarChart3, Calendar, MapPin } from 'lucide-react';

export default function InstagramDashboard() {
  const [selectedTimeframe, setSelectedTimeframe] = useState('30d');
  const [isLoading, setIsLoading] = useState(true);

  // Mock data for demonstrations
  const followerData = [
    { date: '2024-01-01', followers: 12500, growth: 2.3 },
    { date: '2024-01-08', followers: 12850, growth: 2.8 },
    { date: '2024-01-15', followers: 13200, growth: 2.7 },
    { date: '2024-01-22', followers: 13600, growth: 3.0 },
    { date: '2024-01-29', followers: 14100, growth: 3.7 },
    { date: '2024-02-05', followers: 14650, growth: 3.9 },
    { date: '2024-02-12', followers: 15200, growth: 3.8 },
  ];

  const postReachData = [
    { post: 'Sunset Beach', reach: 4200, impressions: 5800, date: '2024-02-10' },
    { post: 'Coffee Morning', reach: 3800, impressions: 5200, date: '2024-02-08' },
    { post: 'City Lights', reach: 5100, impressions: 7300, date: '2024-02-06' },
    { post: 'Food Recipe', reach: 6200, impressions: 8900, date: '2024-02-04' },
    { post: 'Travel Diary', reach: 4900, impressions: 6800, date: '2024-02-02' },
  ];

  const engagementData = [
    { post: 'Sunset Beach', likes: 320, comments: 45, shares: 12, saves: 89 },
    { post: 'Coffee Morning', likes: 280, comments: 32, shares: 8, saves: 67 },
    { post: 'City Lights', likes: 410, comments: 67, shares: 18, saves: 134 },
    { post: 'Food Recipe', likes: 520, comments: 89, shares: 34, saves: 201 },
    { post: 'Travel Diary', likes: 390, comments: 56, shares: 15, saves: 112 },
  ];

  const topPostsData = [
    { title: 'Food Recipe Tutorial', engagement: 844, reach: 6200 },
    { title: 'City Lights Photography', engagement: 629, reach: 5100 },
    { title: 'Travel Diary - Tokyo', engagement: 573, reach: 4900 },
    { title: 'Sunset Beach Vibes', engagement: 466, reach: 4200 },
    { title: 'Morning Coffee Routine', engagement: 387, reach: 3800 },
  ];

  const storyViewsData = [
    { date: '2024-02-01', views: 1200, completion: 78 },
    { date: '2024-02-02', views: 1450, completion: 82 },
    { date: '2024-02-03', views: 1680, completion: 75 },
    { date: '2024-02-04', views: 1320, completion: 80 },
    { date: '2024-02-05', views: 1890, completion: 85 },
    { date: '2024-02-06', views: 1750, completion: 79 },
    { date: '2024-02-07', views: 1920, completion: 87 },
  ];

  const profileActionsData = [
    { name: 'Profile Views', value: 2840, color: '#8B5CF6' },
    { name: 'Website Clicks', value: 1250, color: '#06B6D4' },
    { name: 'Email Clicks', value: 890, color: '#F59E0B' },
    { name: 'Get Directions', value: 560, color: '#EF4444' },
    { name: 'Call Button', value: 340, color: '#10B981' },
  ];

  const demographicsData = [
    { age: '18-24', male: 25, female: 35, location: 'US' },
    { age: '25-34', male: 30, female: 45, location: 'UK' },
    { age: '35-44', male: 20, female: 28, location: 'Canada' },
    { age: '45-54', male: 15, female: 18, location: 'Australia' },
    { age: '55+', male: 10, female: 12, location: 'Germany' },
  ];

  const radarData = [
    { metric: 'Reach', value: 85, fullMark: 100 },
    { metric: 'Engagement', value: 78, fullMark: 100 },
    { metric: 'Impressions', value: 92, fullMark: 100 },
    { metric: 'Saves', value: 67, fullMark: 100 },
    { metric: 'Shares', value: 45, fullMark: 100 },
    { metric: 'Comments', value: 73, fullMark: 100 },
  ];

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const StatCard = ({ title, value, change, icon: Icon, color }) => (
    <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 hover:shadow-xl">
      <div className="flex items-center justify-between mb-4">
        <div className={`p-3 rounded-xl bg-gradient-to-r ${color}`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
        <div className={`text-sm font-medium px-2 py-1 rounded-full ${change >= 0 ? 'text-green-400 bg-green-400/10' : 'text-red-400 bg-red-400/10'}`}>
          {change >= 0 ? '+' : ''}{change}%
        </div>
      </div>
      <h3 className="text-slate-400 text-sm font-medium mb-1">{title}</h3>
      <p className="text-3xl font-bold text-white">{value.toLocaleString()}</p>
    </div>
  );

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-slate-800/95 backdrop-blur-sm border border-slate-700 rounded-lg p-3 shadow-xl">
          <p className="text-slate-300 text-sm mb-2">{label}</p>
          {payload.map((entry, index) => (
            <p key={index} className="text-white text-sm font-medium" style={{ color: entry.color }}>
              {entry.dataKey}: {entry.value.toLocaleString()}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-purple-500 mx-auto mb-4"></div>
          <p className="text-white text-lg">Loading Instagram Analytics...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-4 w-full">
      <div className="max-w-none w-full">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <div className="p-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500">
              <Instagram className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-white">Instagram Analytics</h1>
              <p className="text-slate-400 text-lg">Track your performance and grow your audience</p>
            </div>
          </div>
          
          {/* Timeframe Selector */}
            <select 
            value={selectedTimeframe} 
            onChange={(e) => setSelectedTimeframe(e.target.value)}
            className="bg-slate-800 text-white rounded-lg px-6 py-3 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-purple-500 text-lg mt-[6rem]"
            >
            <option value="7d">Last 7 days</option>
            <option value="30d">Last 30 days</option>
            <option value="90d">Last 90 days</option>
            </select>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-6 mb-8">
          <StatCard 
            title="Total Followers" 
            value={15200} 
            change={3.8} 
            icon={Users} 
            color="from-blue-500 to-cyan-500" 
          />
          <StatCard 
            title="Post Reach" 
            value={28100} 
            change={12.5} 
            icon={TrendingUp} 
            color="from-green-500 to-emerald-500" 
          />
          <StatCard 
            title="Engagement Rate" 
            value={7.8} 
            change={-2.1} 
            icon={Heart} 
            color="from-red-500 to-pink-500" 
          />
          <StatCard 
            title="Story Views" 
            value={12800} 
            change={15.3} 
            icon={Eye} 
            color="from-purple-500 to-violet-500" 
          />
          <StatCard 
            title="Profile Views" 
            value={2840} 
            change={8.7} 
            icon={MapPin} 
            color="from-yellow-500 to-orange-500" 
          />
          <StatCard 
            title="Website Clicks" 
            value={1250} 
            change={22.4} 
            icon={MessageCircle} 
            color="from-pink-500 to-rose-500" 
          />
        </div>

        {/* Main Charts Grid - Full Width */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mb-8">
          {/* Follower Growth */}
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <TrendingUp className="w-6 h-6 mr-3 text-blue-400" />
              Follower Growth
            </h3>
            <ResponsiveContainer width="100%" height={400}>
              <LineChart data={followerData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="date" stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" />
                <Tooltip content={<CustomTooltip />} />
                <Line 
                  type="monotone" 
                  dataKey="followers" 
                  stroke="#06B6D4" 
                  strokeWidth={3}
                  dot={{ fill: '#06B6D4', strokeWidth: 2, r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Post Reach & Impressions */}
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <BarChart3 className="w-6 h-6 mr-3 text-green-400" />
              Post Reach & Impressions
            </h3>
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={postReachData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="post" stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" />
                <Tooltip content={<CustomTooltip />} />
                <Bar dataKey="reach" fill="#10B981" radius={[4, 4, 0, 0]} />
                <Bar dataKey="impressions" fill="#06B6D4" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Second Row - Full Width */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mb-8">
          {/* Engagement Radar */}
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Heart className="w-6 h-6 mr-3 text-red-400" />
              Engagement Overview
            </h3>
            <ResponsiveContainer width="100%" height={400}>
              <RadarChart data={radarData}>
                <PolarGrid stroke="#374151" />
                <PolarAngleAxis dataKey="metric" tick={{ fill: '#9CA3AF', fontSize: 14 }} />
                <PolarRadiusAxis tick={{ fill: '#9CA3AF', fontSize: 12 }} />
                <Radar 
                  name="Performance" 
                  dataKey="value" 
                  stroke="#8B5CF6" 
                  fill="#8B5CF6" 
                  fillOpacity={0.2}
                  strokeWidth={2}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>

          {/* Story Views */}
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Eye className="w-6 h-6 mr-3 text-purple-400" />
              Story Views
            </h3>
            <ResponsiveContainer width="100%" height={400}>
              <AreaChart data={storyViewsData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="date" stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" />
                <Tooltip content={<CustomTooltip />} />
                <Area 
                  type="monotone" 
                  dataKey="views" 
                  stroke="#8B5CF6" 
                  fill="#8B5CF6" 
                  fillOpacity={0.3}
                  strokeWidth={2}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Bottom Row - Three Columns on Large Screens */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {/* Profile Actions */}
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <MapPin className="w-6 h-6 mr-3 text-yellow-400" />
              Profile Actions
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={profileActionsData}
                  cx="50%"
                  cy="50%"
                  innerRadius={80}
                  outerRadius={120}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {profileActionsData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
              </PieChart>
            </ResponsiveContainer>
            <div className="mt-6 space-y-3">
              {profileActionsData.map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-4 h-4 rounded-full mr-3" style={{ backgroundColor: item.color }}></div>
                    <span className="text-slate-300 text-sm">{item.name}</span>
                  </div>
                  <span className="text-white font-medium">{item.value.toLocaleString()}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Top Posts */}
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <TrendingUp className="w-6 h-6 mr-3 text-orange-400" />
              Top Performing Posts
            </h3>
            <div className="space-y-4">
              {topPostsData.map((post, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-slate-700/30 rounded-xl hover:bg-slate-700/50 transition-colors">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-white font-bold text-sm mr-4">
                      {index + 1}
                    </div>
                    <div>
                      <p className="text-white font-medium">{post.title}</p>
                      <p className="text-slate-400 text-sm">{post.reach.toLocaleString()} reach</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-green-400 font-bold text-lg">{post.engagement}</p>
                    <p className="text-slate-400 text-sm">engagements</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Demographics */}
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Users className="w-6 h-6 mr-3 text-cyan-400" />
              Audience Demographics
            </h3>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={demographicsData} layout="horizontal">
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis type="number" stroke="#9CA3AF" />
                <YAxis dataKey="age" type="category" stroke="#9CA3AF" />
                <Tooltip content={<CustomTooltip />} />
                <Bar dataKey="male" stackId="a" fill="#06B6D4" radius={[0, 4, 4, 0]} />
                <Bar dataKey="female" stackId="a" fill="#8B5CF6" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
            <div className="mt-6 flex justify-center space-x-8">
              <div className="flex items-center">
                <div className="w-4 h-4 bg-cyan-400 rounded-full mr-3"></div>
                <span className="text-slate-300">Male</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-purple-500 rounded-full mr-3"></div>
                <span className="text-slate-300">Female</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}