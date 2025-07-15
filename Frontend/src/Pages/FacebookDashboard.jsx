import React, { useState } from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell,
  AreaChart, Area, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar
} from 'recharts';
import {
  Users, Eye, ThumbsUp, MessageCircle, Globe, BarChartBig, TrendingUp
} from 'lucide-react';

const FacebookDashboard = () => {
  const [timeRange, setTimeRange] = useState('7d');

  const pageLikesData = [
    { date: 'Jul 1', likes: 120 },
    { date: 'Jul 2', likes: 150 },
    { date: 'Jul 3', likes: 170 },
    { date: 'Jul 4', likes: 210 },
    { date: 'Jul 5', likes: 250 },
    { date: 'Jul 6', likes: 220 },
    { date: 'Jul 7', likes: 300 }
  ];

  const impressionsReachData = [
    { name: 'Post 1', impressions: 800, reach: 650 },
    { name: 'Post 2', impressions: 1200, reach: 900 },
    { name: 'Post 3', impressions: 950, reach: 800 }
  ];

  const engagementData = [
    { name: 'Post 1', reactions: 120, comments: 80, shares: 40 },
    { name: 'Post 2', reactions: 140, comments: 90, shares: 50 },
    { name: 'Post 3', reactions: 160, comments: 100, shares: 60 }
  ];

  const postPerformance = [
    { name: 'Post 1', performance: 300 },
    { name: 'Post 2', performance: 450 },
    { name: 'Post 3', performance: 380 }
  ];

  const pageViewsActions = [
    { day: 'Mon', views: 250 },
    { day: 'Tue', views: 300 },
    { day: 'Wed', views: 320 },
    { day: 'Thu', views: 280 },
    { day: 'Fri', views: 360 },
    { day: 'Sat', views: 400 },
    { day: 'Sun', views: 420 }
  ];

  const demographicsData = [
    { name: '18-24', value: 30 },
    { name: '25-34', value: 45 },
    { name: '35-44', value: 15 },
    { name: '45+', value: 10 }
  ];

  const storyPerformance = [
    { time: 'Mon', views: 100 },
    { time: 'Tue', views: 180 },
    { time: 'Wed', views: 160 },
    { time: 'Thu', views: 200 },
    { time: 'Fri', views: 240 },
    { time: 'Sat', views: 300 },
    { time: 'Sun', views: 270 }
  ];

  const COLORS = ['#00D4AA', '#7C3AED', '#F59E0B', '#3B82F6'];

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-x-hidden">
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 shadow-2xl">
        <div className="flex items-center space-x-3">
          <Users size={32} className="text-white" />
          <h1 className="text-3xl font-bold">Facebook Business Analytics</h1>
        </div>
      </div>

      <div className="flex justify-end pr-8 mt-[6rem] mb-4">
        <select
          value={timeRange}
          onChange={(e) => setTimeRange(e.target.value)}
          className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-2 text-white"
        >
          <option value="7d">Last 7 Days</option>
          <option value="30d">Last 30 Days</option>
          <option value="90d">Last 90 Days</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
        <KPI title="Page Likes" value="1,250" note="+15% this week" icon={<ThumbsUp />} color="blue" />
        <KPI title="Post Impressions" value="4,860" note="+10% reach" icon={<Eye />} color="purple" />
        <KPI title="Story Views" value="2,140" note="+18% engagement" icon={<TrendingUp />} color="green" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6">
        <ChartCard title="Page Likes Over Time">
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={pageLikesData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="date" stroke="#9CA3AF" />
              <YAxis stroke="#9CA3AF" />
              <Tooltip contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #374151', borderRadius: '8px' }} />
              <Line type="monotone" dataKey="likes" stroke="#00D4AA" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard title="Post Impressions and Reach">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={impressionsReachData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="name" stroke="#9CA3AF" />
              <YAxis stroke="#9CA3AF" />
              <Tooltip contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #374151', borderRadius: '8px' }} />
              <Bar dataKey="impressions" fill="#3B82F6" />
              <Bar dataKey="reach" fill="#10B981" />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard title="Engagement Breakdown">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={engagementData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="name" stroke="#9CA3AF" />
              <YAxis stroke="#9CA3AF" />
              <Tooltip contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #374151', borderRadius: '8px' }} />
              <Bar dataKey="reactions" stackId="a" fill="#3B82F6" />
              <Bar dataKey="comments" stackId="a" fill="#7C3AED" />
              <Bar dataKey="shares" stackId="a" fill="#F59E0B" />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard title="Post Performance">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart layout="vertical" data={postPerformance}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis type="number" stroke="#9CA3AF" />
              <YAxis type="category" dataKey="name" stroke="#9CA3AF" />
              <Tooltip contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #374151', borderRadius: '8px' }} />
              <Bar dataKey="performance" fill="#00D4AA" />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard title="Page Views and Actions">
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={pageViewsActions}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="day" stroke="#9CA3AF" />
              <YAxis stroke="#9CA3AF" />
              <Tooltip contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #374151', borderRadius: '8px' }} />
              <Area type="monotone" dataKey="views" stroke="#00D4AA" fill="#00D4AA33" />
            </AreaChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard title="Audience Demographics">
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie data={demographicsData} cx="50%" cy="50%" innerRadius={60} outerRadius={100} fill="#8884d8" paddingAngle={5} dataKey="value">
                {demographicsData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #374151', borderRadius: '8px' }} />
            </PieChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard title="Story Performance">
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={storyPerformance}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="time" stroke="#9CA3AF" />
              <YAxis stroke="#9CA3AF" />
              <Tooltip contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #374151', borderRadius: '8px' }} />
              <Line type="monotone" dataKey="views" stroke="#F59E0B" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>
    </div>
  );
};

const KPI = ({ title, value, note, icon, color }) => {
  const colorMap = {
    blue: 'from-blue-600 to-blue-700 text-blue-200',
    green: 'from-green-600 to-green-700 text-green-200',
    purple: 'from-purple-600 to-purple-700 text-purple-200',
    orange: 'from-orange-600 to-orange-700 text-orange-200'
  };
  return (
    <div className={`bg-gradient-to-br ${colorMap[color]} rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300`}>
      <div className="flex items-center justify-between">
        <div>
          <p className={`${colorMap[color].split(' ')[2]} text-sm font-medium`}>{title}</p>
          <p className="text-3xl font-bold text-white">{value}</p>
          <p className={`${colorMap[color].split(' ')[2]} text-sm`}>{note}</p>
        </div>
        <div className={colorMap[color].split(' ')[2]}>{icon}</div>
      </div>
    </div>
  );
};

const ChartCard = ({ title, children }) => (
  <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-700">
    <h3 className="text-xl font-semibold mb-4 text-white">{title}</h3>
    {children}
  </div>
);

export default FacebookDashboard;
