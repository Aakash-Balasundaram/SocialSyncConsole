import React from 'react';
import {
  LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell
} from 'recharts';

const followerGrowth = [
  { date: 'Jan', followers: 1000 },
  { date: 'Feb', followers: 1300 },
  { date: 'Mar', followers: 1700 },
  { date: 'Apr', followers: 2100 },
  { date: 'May', followers: 2600 },
  { date: 'Jun', followers: 3100 },
];

const engagementData = [
  { post: 'Post 1', likes: 120, comments: 45, shares: 10 },
  { post: 'Post 2', likes: 180, comments: 60, shares: 25 },
  { post: 'Post 3', likes: 90, comments: 20, shares: 5 },
  { post: 'Post 4', likes: 150, comments: 35, shares: 15 },
];

const clickThroughRates = [
  { post: 'Campaign A', ctr: 2.5 },
  { post: 'Campaign B', ctr: 3.2 },
  { post: 'Campaign C', ctr: 1.8 },
  { post: 'Campaign D', ctr: 4.0 },
];

const impressionsData = [
  { post: 'Post 1', impressions: 2000 },
  { post: 'Post 2', impressions: 2400 },
  { post: 'Post 3', impressions: 1800 },
  { post: 'Post 4', impressions: 2200 },
];

const jobRoles = [
  { name: 'Engineer', value: 400, color: '#8884d8' },
  { name: 'Manager', value: 300, color: '#82ca9d' },
  { name: 'Designer', value: 200, color: '#ffc658' },
  { name: 'Other', value: 100, color: '#ff7f50' },
];

export default function LinkedInDashboard() {
  return (
    <div className="min-h-screen w-full bg-slate-900 text-white p-6 space-y-12">
      <h1 className="text-4xl font-bold mb-6 text-center">LinkedIn Analytics Dashboard</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Follower Growth */}
        <div className="bg-slate-800 p-6 rounded-xl">
          <h2 className="text-xl font-semibold mb-4">Follower Growth</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={followerGrowth}>
              <CartesianGrid strokeDasharray="3 3" stroke="#475569" />
              <XAxis dataKey="date" stroke="#CBD5E1" />
              <YAxis stroke="#CBD5E1" />
              <Tooltip />
              <Line type="monotone" dataKey="followers" stroke="#38bdf8" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Engagement */}
        <div className="bg-slate-800 p-6 rounded-xl">
          <h2 className="text-xl font-semibold mb-4">Post Engagement</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={engagementData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#475569" />
              <XAxis dataKey="post" stroke="#CBD5E1" />
              <YAxis stroke="#CBD5E1" />
              <Tooltip />
              <Bar dataKey="likes" stackId="a" fill="#818cf8" />
              <Bar dataKey="comments" stackId="a" fill="#f472b6" />
              <Bar dataKey="shares" stackId="a" fill="#facc15" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Click-through rate */}
        <div className="bg-slate-800 p-6 rounded-xl">
          <h2 className="text-xl font-semibold mb-4">Click-Through Rates</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={clickThroughRates}>
              <CartesianGrid strokeDasharray="3 3" stroke="#475569" />
              <XAxis dataKey="post" stroke="#CBD5E1" />
              <YAxis stroke="#CBD5E1" />
              <Tooltip />
              <Bar dataKey="ctr" fill="#34d399" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Impressions */}
        <div className="bg-slate-800 p-6 rounded-xl">
          <h2 className="text-xl font-semibold mb-4">Impressions Per Post</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={impressionsData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#475569" />
              <XAxis dataKey="post" stroke="#CBD5E1" />
              <YAxis stroke="#CBD5E1" />
              <Tooltip />
              <Line type="monotone" dataKey="impressions" stroke="#f87171" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Job Roles Donut Chart */}
      <div className="bg-slate-800 p-6 rounded-xl max-w-2xl mx-auto">
        <h2 className="text-xl font-semibold mb-4 text-center">Audience Job Roles</h2>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={jobRoles}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={100}
              innerRadius={50}
              paddingAngle={5}
              label
            >
              {jobRoles.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
