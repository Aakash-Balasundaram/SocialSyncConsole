import React, { useState } from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell,
  Area, AreaChart
} from 'recharts';
import {
  MessageCircle, Clock, TrendingUp, Send,
  CheckCheck, Eye
} from 'lucide-react';

const WhatsAppDashboard = () => {
  const [timeRange, setTimeRange] = useState('7d');

  const messageStatusData = [
    { name: 'Mon', sent: 450, delivered: 425, read: 380 },
    { name: 'Tue', sent: 520, delivered: 495, read: 440 },
    { name: 'Wed', sent: 380, delivered: 365, read: 320 },
    { name: 'Thu', sent: 690, delivered: 655, read: 590 },
    { name: 'Fri', sent: 780, delivered: 745, read: 680 },
    { name: 'Sat', sent: 320, delivered: 305, read: 275 },
    { name: 'Sun', sent: 280, delivered: 270, read: 245 }
  ];

  const conversationVolumeData = [
    { date: '2024-07-01', conversations: 120 },
    { date: '2024-07-02', conversations: 145 },
    { date: '2024-07-03', conversations: 98 },
    { date: '2024-07-04', conversations: 167 },
    { date: '2024-07-05', conversations: 189 },
    { date: '2024-07-06', conversations: 134 },
    { date: '2024-07-07', conversations: 156 },
    { date: '2024-07-08', conversations: 178 },
    { date: '2024-07-09', conversations: 203 },
    { date: '2024-07-10', conversations: 145 },
    { date: '2024-07-11', conversations: 167 },
    { date: '2024-07-12', conversations: 189 },
    { date: '2024-07-13', conversations: 223 },
    { date: '2024-07-14', conversations: 198 }
  ];

  const responseTimeData = [
    { timeRange: '< 1 min', count: 45 },
    { timeRange: '1-5 min', count: 78 },
    { timeRange: '5-15 min', count: 34 },
    { timeRange: '15-30 min', count: 23 },
    { timeRange: '30-60 min', count: 12 },
    { timeRange: '> 1 hour', count: 8 }
  ];

  const useCaseData = [
    { name: 'Customer Support', value: 65, color: '#00D4AA' },
    { name: 'Marketing', value: 25, color: '#7C3AED' },
    { name: 'Sales', value: 10, color: '#F59E0B' }
  ];

  const engagementTrendData = [
    { week: 'Week 1', activeUsers: 245, messagesSent: 1200 },
    { week: 'Week 2', activeUsers: 267, messagesSent: 1450 },
    { week: 'Week 3', activeUsers: 289, messagesSent: 1380 },
    { week: 'Week 4', activeUsers: 312, messagesSent: 1680 }
  ];

  const heatmapData = Array.from({ length: 24 }, (_, hour) => ({
    hour: `${hour.toString().padStart(2, '0')}:00`,
    day: 'Mon',
    sessions: Math.floor(Math.random() * 100)
  }));

  const HeatmapChart = ({ data }) => {
    const maxSessions = Math.max(...data.map(d => d.sessions));
    return (
      <div className="grid grid-cols-24 gap-1 p-4">
        {data.map((item, index) => (
          <div
            key={index}
            className="w-4 h-4 rounded-sm flex items-center justify-center text-xs"
            style={{
              backgroundColor: `rgba(0, 212, 170, ${item.sessions / maxSessions})`,
              color: item.sessions > maxSessions * 0.5 ? 'white' : 'black'
            }}
            title={`${item.hour}: ${item.sessions} sessions`}
          >
            {item.sessions > 10 ? item.sessions : ''}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-x-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 p-6 shadow-2xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <MessageCircle size={32} className="text-white" />
            <h1 className="text-3xl font-bold">WhatsApp Business Analytics</h1>
          </div>
        </div>
      </div>

      {/* Time Range Dropdown (with spacing) */}
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

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6">
        <KPI title="Messages Sent" value="3,425" note="+12% from last week" icon={<Send />} color="blue" />
        <KPI title="Messages Delivered" value="3,260" note="95.2% delivery rate" icon={<CheckCheck />} color="green" />
        <KPI title="Messages Read" value="2,930" note="89.9% read rate" icon={<Eye />} color="purple" />
        <KPI title="Avg Response Time" value="8.5m" note="-2.1m from last week" icon={<Clock />} color="orange" />
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6">
        <ChartCard title="Message Status Overview">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={messageStatusData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="name" stroke="#9CA3AF" />
              <YAxis stroke="#9CA3AF" />
              <Tooltip contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #374151', borderRadius: '8px' }} />
              <Bar dataKey="sent" stackId="a" fill="#3B82F6" />
              <Bar dataKey="delivered" stackId="a" fill="#10B981" />
              <Bar dataKey="read" stackId="a" fill="#8B5CF6" />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard title="Daily Conversation Volume">
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={conversationVolumeData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="date" stroke="#9CA3AF" />
              <YAxis stroke="#9CA3AF" />
              <Tooltip contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #374151', borderRadius: '8px' }} />
              <defs>
                <linearGradient id="colorConversations" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#00D4AA" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#00D4AA" stopOpacity={0.1} />
                </linearGradient>
              </defs>
              <Area type="monotone" dataKey="conversations" stroke="#00D4AA" fill="url(#colorConversations)" />
            </AreaChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard title="Session Counts by Hour">
          <div className="text-sm text-gray-300 mb-4">Monday Activity Heatmap</div>
          <HeatmapChart data={heatmapData} />
          <div className="flex justify-between text-xs text-gray-400 mt-2">
            <span>00:00</span><span>06:00</span><span>12:00</span><span>18:00</span><span>23:00</span>
          </div>
        </ChartCard>

        <ChartCard title="Response Time Distribution">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={responseTimeData} layout="horizontal">
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis type="number" stroke="#9CA3AF" />
              <YAxis dataKey="timeRange" type="category" stroke="#9CA3AF" />
              <Tooltip contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #374151', borderRadius: '8px' }} />
              <Bar dataKey="count" fill="#F59E0B" />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard title="Contact Engagement Trends">
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={engagementTrendData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="week" stroke="#9CA3AF" />
              <YAxis stroke="#9CA3AF" />
              <Tooltip contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #374151', borderRadius: '8px' }} />
              <Line type="monotone" dataKey="activeUsers" stroke="#3B82F6" strokeWidth={3} />
              <Line type="monotone" dataKey="messagesSent" stroke="#10B981" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard title="Use Case Distribution">
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={useCaseData}
                cx="50%" cy="50%"
                innerRadius={60} outerRadius={120}
                paddingAngle={5}
                dataKey="value"
              >
                {useCaseData.map((entry, index) => (
                  <Cell key={index} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #374151', borderRadius: '8px' }} />
            </PieChart>
          </ResponsiveContainer>
          <div className="flex justify-center space-x-4 mt-4">
            {useCaseData.map((item, index) => (
              <div key={index} className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                <span className="text-sm text-gray-300">{item.name}</span>
              </div>
            ))}
          </div>
        </ChartCard>
      </div>
    </div>
  );
};

// KPI Card Reusable
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

// Chart Card Wrapper
const ChartCard = ({ title, children }) => (
  <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-700">
    <h3 className="text-xl font-semibold mb-4 text-white">{title}</h3>
    {children}
  </div>
);

export default WhatsAppDashboard;
