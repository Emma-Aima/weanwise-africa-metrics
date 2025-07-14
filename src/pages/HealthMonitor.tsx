
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Heart, Activity, TrendingUp, Clock, AlertTriangle, CheckCircle } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';

const generateHeartRateHistory = (ageInMonths: number) => {
  const getAgeSpecificRange = (age: number) => {
    if (age < 3) return { min: 100, max: 150 };
    if (age < 6) return { min: 90, max: 120 };
    if (age < 12) return { min: 80, max: 120 };
    if (age < 24) return { min: 70, max: 110 };
    return { min: 60, max: 100 };
  };

  const range = getAgeSpecificRange(ageInMonths);
  const data = [];
  
  for (let i = 0; i < 24; i++) {
    const hour = i;
    const time = `${hour.toString().padStart(2, '0')}:00`;
    const baseRate = range.min + (range.max - range.min) * 0.7;
    const variation = Math.random() * 20 - 10;
    const value = Math.round(baseRate + variation);
    
    data.push({
      time,
      value: Math.max(range.min, Math.min(range.max, value)),
      hour,
      status: value > range.max ? 'high' : value < range.min ? 'low' : 'normal'
    });
  }
  
  return data;
};

export default function HealthMonitor() {
  const [selectedChild, setSelectedChild] = useState("12");
  const [selectedTimeRange, setSelectedTimeRange] = useState("24h");
  
  const childAge = parseInt(selectedChild);
  const heartRateHistory = generateHeartRateHistory(childAge);
  const currentHeartRate = heartRateHistory[heartRateHistory.length - 1];

  const getAgeSpecificInfo = (ageInMonths: number) => {
    if (ageInMonths < 3) return { normal: "100-150 bpm", range: "0-3 months", color: "bg-blue-100" };
    if (ageInMonths < 6) return { normal: "90-120 bpm", range: "3-6 months", color: "bg-green-100" };
    if (ageInMonths < 12) return { normal: "80-120 bpm", range: "6-12 months", color: "bg-yellow-100" };
    if (ageInMonths < 24) return { normal: "70-110 bpm", range: "1-2 years", color: "bg-orange-100" };
    return { normal: "60-100 bpm", range: "2+ years", color: "bg-purple-100" };
  };

  const ageInfo = getAgeSpecificInfo(childAge);
  const alertCount = heartRateHistory.filter(h => h.status !== 'normal').length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-yellow-50 p-4">
      <div className="max-w-6xl mx-auto space-y-6">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent mb-2">
            Health Monitor
          </h1>
          <p className="text-gray-600">Real-time health tracking for your children</p>
        </div>

        {/* Controls */}
        <div className="flex flex-wrap gap-4 justify-center">
          <div className="flex items-center gap-2">
            <label className="text-sm font-medium">Child Age (months):</label>
            <Select value={selectedChild} onValueChange={setSelectedChild}>
              <SelectTrigger className="w-32">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="2">2 months</SelectItem>
                <SelectItem value="4">4 months</SelectItem>
                <SelectItem value="8">8 months</SelectItem>
                <SelectItem value="12">12 months</SelectItem>
                <SelectItem value="18">18 months</SelectItem>
                <SelectItem value="24">24 months</SelectItem>
                <SelectItem value="36">36 months</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-center gap-2">
            <label className="text-sm font-medium">Time Range:</label>
            <Select value={selectedTimeRange} onValueChange={setSelectedTimeRange}>
              <SelectTrigger className="w-24">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="24h">24h</SelectItem>
                <SelectItem value="7d">7d</SelectItem>
                <SelectItem value="30d">30d</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Current Status Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-gradient-to-br from-red-50 to-pink-50 border-red-200">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-red-700">
                <Heart className="h-5 w-5" />
                Current Heart Rate
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-red-600 mb-2">
                {currentHeartRate.value} <span className="text-lg text-gray-500">bpm</span>
              </div>
              <Badge className={
                currentHeartRate.status === 'normal' ? 'bg-green-100 text-green-800' :
                currentHeartRate.status === 'high' ? 'bg-red-100 text-red-800' :
                'bg-yellow-100 text-yellow-800'
              }>
                {currentHeartRate.status === 'normal' ? 'Normal' : 
                 currentHeartRate.status === 'high' ? 'High' : 'Low'}
              </Badge>
            </CardContent>
          </Card>

          <Card className={`${ageInfo.color} border-current`}>
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2">
                <Activity className="h-5 w-5" />
                Age-Specific Range
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-800 mb-1">
                {ageInfo.normal}
              </div>
              <p className="text-sm text-gray-600">{ageInfo.range}</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-blue-700">
                <AlertTriangle className="h-5 w-5" />
                Alert Status
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600 mb-2">
                {alertCount} alerts
              </div>
              <div className="flex items-center gap-2">
                {alertCount === 0 ? (
                  <><CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm text-green-600">All good</span></>
                ) : (
                  <><AlertTriangle className="h-4 w-4 text-yellow-500" />
                  <span className="text-sm text-yellow-600">Needs attention</span></>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Heart Rate History Chart */}
        <Card className="bg-white/95 backdrop-blur-sm shadow-2xl">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              24-Hour Heart Rate History
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={heartRateHistory}>
                  <defs>
                    <linearGradient id="heartRateGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#ef4444" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#ef4444" stopOpacity={0.1}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis 
                    dataKey="time" 
                    tick={{ fontSize: 12 }}
                    interval={2}
                  />
                  <YAxis 
                    tick={{ fontSize: 12 }}
                    domain={['dataMin - 10', 'dataMax + 10']}
                  />
                  <Tooltip 
                    formatter={(value, name) => [`${value} bpm`, 'Heart Rate']}
                    labelFormatter={(label) => `Time: ${label}`}
                    contentStyle={{
                      backgroundColor: 'rgba(255, 255, 255, 0.95)',
                      border: '1px solid #e2e8f0',
                      borderRadius: '8px',
                      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                    }}
                  />
                  <Area
                    type="monotone"
                    dataKey="value"
                    stroke="#ef4444"
                    strokeWidth={3}
                    fill="url(#heartRateGradient)"
                    dot={{ fill: '#ef4444', strokeWidth: 2, r: 4 }}
                    activeDot={{ r: 6, fill: '#dc2626' }}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Historical Records */}
        <Card className="bg-white/95 backdrop-blur-sm shadow-2xl">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              Recent Measurements
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {heartRateHistory.slice(-6).reverse().map((record, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                      <Heart className="h-5 w-5 text-red-500" />
                    </div>
                    <div>
                      <p className="font-medium">{record.value} bpm</p>
                      <p className="text-sm text-gray-500">Today at {record.time}</p>
                    </div>
                  </div>
                  <Badge className={
                    record.status === 'normal' ? 'bg-green-100 text-green-800' :
                    record.status === 'high' ? 'bg-red-100 text-red-800' :
                    'bg-yellow-100 text-yellow-800'
                  }>
                    {record.status === 'normal' ? 'Normal' : 
                     record.status === 'high' ? 'High' : 'Low'}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="flex justify-center">
          <div className="flex gap-4">
            <Button className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700">
              Export Data
            </Button>
            <Button variant="outline" className="border-blue-300 text-blue-700 hover:bg-blue-50">
              Share with Doctor
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
