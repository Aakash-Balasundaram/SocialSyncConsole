// TwitterXDashboard.jsx
import React, { useState, useEffect } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  BarChart, Bar, PieChart, Pie, Cell, AreaChart, Area, RadarChart, Radar,
  PolarGrid, PolarAngleAxis, PolarRadiusAxis
} from 'recharts';
import {
  Twitter, Users, TrendingUp, MessageCircle, Heart, Eye, BarChart3,
  Share2, Calendar, MapPin
} from 'lucide-react';

export default function TwitterXDashboard() {
  const [selectedTimeframe, setSelectedTimeframe] = useState('30d');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const tweetLikesData = [
    { date: '2024-07-01', likes: 120 },
    { date: '2024-07-02', likes: 140 },
    { date: '2024-07-03', likes: 180 },
    { date: '2024-07-04', likes: 160 },
    { date: '2024-07-05', likes: 210 },
  ];

  const impressionsData = [
    { post: 'AI Update', impressions: 8200, reach: 6100 },
    { post: 'Crypto News', impressions: 7400, reach: 5800 },
    { post: 'Tech Tips', impressions: 9200, reach: 7200 },
    { post: 'SpaceX Launch', impressions: 10300, reach: 8100 },
    { post: 'Startup Hacks', impressions: 8800, reach: 6900 }
  ];

  const engagementRadar = [
    { metric: 'Likes', value: 80 },
    { metric: 'Retweets', value: 72 },
    { metric: 'Replies', value: 64 },
    { metric: 'Quotes', value: 55 },
    { metric: 'Bookmarks', value: 50 },
    { metric: 'Profile Clicks', value: 85 }
  ];

  const profileActions = [
    { name: 'Profile Views', value: 4200, color: '#8B5CF6' },
    { name: 'Website Clicks', value: 2150, color: '#06B6D4' },
    { name: 'Mentions', value: 1350, color: '#F59E0B' }
  ];

  const demographics = [
    { age: '18-24', male: 22, female: 33 },
    { age: '25-34', male: 29, female: 41 },
    { age: '35-44', male: 18, female: 27 },
    { age: '45+', male: 11, female: 17 }
  ];

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-slate-800/95 p-3 rounded-lg border border-slate-700">
          <p className="text-slate-300 mb-1">{label}</p>
          {payload.map((entry, index) => (
            <p key={index} className="text-white" style={{ color: entry.color }}>
              {entry.dataKey}: {entry.value}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  const StatCard = ({ title, value, change, icon: Icon, color }) => (
    <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 rounded-xl border border-slate-700 hover:shadow-xl">
      <div className="flex items-center justify-between mb-3">
        <div className={`p-3 rounded-xl bg-gradient-to-r ${color}`}>
          <Icon className="text-white" />
        </div>
        <span className={`text-sm font-medium px-2 py-1 rounded-full ${change >= 0 ? 'text-green-400 bg-green-400/10' : 'text-red-400 bg-red-400/10'}`}>
          {change >= 0 ? '+' : ''}{change}%
        </span>
      </div>
      <h4 className="text-slate-400 text-sm mb-1">{title}</h4>
      <p className="text-white text-3xl font-bold">{value}</p>
    </div>
  );

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-cyan-900 to-slate-900 flex items-center justify-center">
        <div className="text-white text-lg">Loading Twitter X Dashboard...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-cyan-900 to-slate-900 p-6">
      <div className="flex items-center justify-between mb-10">
        <div className="flex items-center space-x-4">
          <div className="p-3 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500">
            <Twitter className="text-white w-8 h-8" />
          </div>
          <div>
            <h1 className="text-4xl text-white font-bold">Twitter X Analytics</h1>
            <p className="text-slate-400">Monitor tweet performance and engagement</p>
          </div>
        </div>
        <select
          value={selectedTimeframe}
          onChange={(e) => setSelectedTimeframe(e.target.value)}
          className="bg-slate-800 text-white px-4 py-2 border border-slate-600 rounded-lg"
        >
          <option value="7d">Last 7 Days</option>
          <option value="30d">Last 30 Days</option>
          <option value="90d">Last 90 Days</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        <StatCard title="Total Followers" value={46200} change={4.5} icon={Users} color="from-blue-500 to-cyan-500" />
        <StatCard title="Tweet Likes" value={1280} change={3.1} icon={Heart} color="from-red-500 to-pink-500" />
        <StatCard title="Impressions" value={39000} change={6.8} icon={Eye} color="from-purple-500 to-violet-500" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
          <h3 className="text-white text-xl font-bold mb-4">Tweet Likes Over Time</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={tweetLikesData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="date" stroke="#9CA3AF" />
              <YAxis stroke="#9CA3AF" />
              <Tooltip content={<CustomTooltip />} />
              <Line type="monotone" dataKey="likes" stroke="#06B6D4" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
          <h3 className="text-white text-xl font-bold mb-4">Post Impressions & Reach</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={impressionsData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="post" stroke="#9CA3AF" />
              <YAxis stroke="#9CA3AF" />
              <Tooltip content={<CustomTooltip />} />
              <Bar dataKey="reach" fill="#10B981" radius={[4, 4, 0, 0]} />
              <Bar dataKey="impressions" fill="#06B6D4" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
          <h3 className="text-white text-xl font-bold mb-4">Engagement Radar</h3>
          <ResponsiveContainer width="100%" height={300}>
            <RadarChart data={engagementRadar}>
              <PolarGrid stroke="#374151" />
              <PolarAngleAxis dataKey="metric" stroke="#9CA3AF" />
              <PolarRadiusAxis stroke="#9CA3AF" />
              <Radar dataKey="value" stroke="#8B5CF6" fill="#8B5CF6" fillOpacity={0.3} />
            </RadarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
          <h3 className="text-white text-xl font-bold mb-4">Profile Actions</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie data={profileActions} cx="50%" cy="50%" innerRadius={60} outerRadius={100} dataKey="value">
                {profileActions.map((entry, index) => <Cell key={index} fill={entry.color} />)}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 col-span-1 lg:col-span-2">
          <h3 className="text-white text-xl font-bold mb-4">Audience Demographics</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={demographics} layout="horizontal">
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis type="number" stroke="#9CA3AF" />
              <YAxis dataKey="age" type="category" stroke="#9CA3AF" />
              <Tooltip content={<CustomTooltip />} />
              <Bar dataKey="male" stackId="a" fill="#06B6D4" />
              <Bar dataKey="female" stackId="a" fill="#8B5CF6" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}