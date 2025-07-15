import React, { useState, useEffect } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  BarChart, Bar, PieChart, Pie, Cell, AreaChart, Area
} from 'recharts';
import {
  Youtube, TrendingUp, Users, Eye, Heart, MessageCircle, Share2,
  BarChart3, Clock, MapPin
} from 'lucide-react';

export default function YouTubeDashboard() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const subscriberGrowth = [
    { date: '2024-01-01', subscribers: 1000 },
    { date: '2024-01-08', subscribers: 1250 },
    { date: '2024-01-15', subscribers: 1420 },
    { date: '2024-01-22', subscribers: 1600 },
    { date: '2024-01-29', subscribers: 1870 },
  ];

  const videoStats = [
    { title: 'Video A', likes: 120, dislikes: 5, comments: 30 },
    { title: 'Video B', likes: 230, dislikes: 10, comments: 60 },
    { title: 'Video C', likes: 180, dislikes: 8, comments: 45 },
    { title: 'Video D', likes: 290, dislikes: 6, comments: 75 },
  ];

  const watchTimeStats = [
    { date: '2024-02-01', watchTime: 1200, avgViewDuration: 6.5 },
    { date: '2024-02-02', watchTime: 1320, avgViewDuration: 7.2 },
    { date: '2024-02-03', watchTime: 1420, avgViewDuration: 7.5 },
    { date: '2024-02-04', watchTime: 1550, avgViewDuration: 8.0 },
  ];

  const trafficSources = [
    { name: 'Search', value: 400, color: '#06B6D4' },
    { name: 'External', value: 300, color: '#F59E0B' },
    { name: 'Browse', value: 200, color: '#10B981' },
    { name: 'Suggested', value: 100, color: '#8B5CF6' },
  ];

  const topVideos = [
    { title: 'Video A', views: 5000 },
    { title: 'Video B', views: 4600 },
    { title: 'Video C', views: 4200 },
    { title: 'Video D', views: 3800 },
  ];

  const demographics = [
    { age: '18-24', male: 45, female: 55 },
    { age: '25-34', male: 50, female: 50 },
    { age: '35-44', male: 40, female: 60 },
  ];

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-slate-800 text-white p-3 rounded-lg">
          <p>{label}</p>
          {payload.map((entry, index) => (
            <p key={index}>{entry.name || entry.dataKey}: {entry.value}</p>
          ))}
        </div>
      );
    }
    return null;
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <p className="text-white text-xl">Loading YouTube Analytics...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full px-4 py-6 bg-gradient-to-br from-slate-900 via-red-900 to-slate-900">
      <div className="w-full">
        <div className="flex items-center space-x-4 mb-8">
          <div className="p-3 rounded-xl bg-gradient-to-r from-red-600 to-pink-500">
            <Youtube className="w-8 h-8 text-white" />
          </div>
          <div>
            <h1 className="text-4xl font-bold text-white">YouTube Analytics</h1>
            <p className="text-slate-400 text-lg">Visualize your video performance and audience</p>
          </div>
        </div>

        {/* Subscriber Growth */}
        <div className="mb-8 bg-slate-800 p-6 rounded-xl">
          <h3 className="text-white text-2xl mb-4">Subscriber Growth</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={subscriberGrowth}>
              <CartesianGrid stroke="#374151" strokeDasharray="3 3" />
              <XAxis dataKey="date" stroke="#9CA3AF" />
              <YAxis stroke="#9CA3AF" />
              <Tooltip content={<CustomTooltip />} />
              <Line type="monotone" dataKey="subscribers" stroke="#06B6D4" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Video Stats */}
        <div className="mb-8 bg-slate-800 p-6 rounded-xl">
          <h3 className="text-white text-2xl mb-4">Likes, Dislikes & Comments</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={videoStats}>
              <CartesianGrid stroke="#374151" strokeDasharray="3 3" />
              <XAxis dataKey="title" stroke="#9CA3AF" />
              <YAxis stroke="#9CA3AF" />
              <Tooltip content={<CustomTooltip />} />
              <Bar dataKey="likes" fill="#10B981" />
              <Bar dataKey="dislikes" fill="#EF4444" />
              <Bar dataKey="comments" fill="#8B5CF6" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Watch Time */}
        <div className="mb-8 bg-slate-800 p-6 rounded-xl">
          <h3 className="text-white text-2xl mb-4">Watch Time & Avg View Duration</h3>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={watchTimeStats}>
              <CartesianGrid stroke="#374151" strokeDasharray="3 3" />
              <XAxis dataKey="date" stroke="#9CA3AF" />
              <YAxis stroke="#9CA3AF" />
              <Tooltip content={<CustomTooltip />} />
              <Area type="monotone" dataKey="watchTime" stroke="#06B6D4" fill="#06B6D4" fillOpacity={0.3} />
              <Area type="monotone" dataKey="avgViewDuration" stroke="#F59E0B" fill="#F59E0B" fillOpacity={0.2} />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Traffic Sources */}
        <div className="mb-8 bg-slate-800 p-6 rounded-xl">
          <h3 className="text-white text-2xl mb-4">Traffic Sources</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie data={trafficSources} dataKey="value" cx="50%" cy="50%" outerRadius={100}>
                {trafficSources.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Top Videos */}
        <div className="mb-8 bg-slate-800 p-6 rounded-xl">
          <h3 className="text-white text-2xl mb-4">Top Videos by Views</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart layout="vertical" data={topVideos}>
              <CartesianGrid stroke="#374151" strokeDasharray="3 3" />
              <XAxis type="number" stroke="#9CA3AF" />
              <YAxis dataKey="title" type="category" stroke="#9CA3AF" />
              <Tooltip content={<CustomTooltip />} />
              <Bar dataKey="views" fill="#F472B6" radius={[0, 4, 4, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Demographics */}
        <div className="mb-8 bg-slate-800 p-6 rounded-xl">
          <h3 className="text-white text-2xl mb-4">Audience Demographics</h3>
          <ResponsiveContainer width="100%" height={250}>
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
