import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Activity, Moon, Zap, Clock, TrendingUp } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface HealthMetric {
  value: number;
  unit: string;
  status: 'normal' | 'warning' | 'critical';
  trend: 'up' | 'down' | 'stable';
}

interface HeartRateRecord {
  time: string;
  value: number;
  date: string;
}

interface HealthMetricsCardProps {
  childName: string;
  age: string;
  heartRate: HealthMetric;
  spO2: HealthMetric;
  sleepHours: HealthMetric;
  activityLevel: HealthMetric;
  heartRateHistory?: HeartRateRecord[];
  childAgeInMonths?: number;
}

const getAgeSpecificHeartRateInfo = (ageInMonths: number) => {
  if (ageInMonths < 3) {
    return { normal: "100-150 bpm", range: "0-3 months" };
  } else if (ageInMonths < 6) {
    return { normal: "90-120 bpm", range: "3-6 months" };
  } else if (ageInMonths < 12) {
    return { normal: "80-120 bpm", range: "6-12 months" };
  } else if (ageInMonths < 24) {
    return { normal: "70-110 bpm", range: "1-2 years" };
  } else {
    return { normal: "60-100 bpm", range: "2+ years" };
  }
};

export default function HealthMetricsCard({
  childName,
  age,
  heartRate,
  spO2,
  sleepHours,
  activityLevel,
  heartRateHistory = [],
  childAgeInMonths = 12
}: HealthMetricsCardProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'normal': return 'bg-emerald-100 text-emerald-800 border-emerald-200';
      case 'warning': return 'bg-amber-100 text-amber-800 border-amber-200';
      case 'critical': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up': return <TrendingUp className="h-3 w-3 text-green-500" />;
      case 'down': return <TrendingUp className="h-3 w-3 text-red-500 rotate-180" />;
      default: return <span className="text-xs">→</span>;
    }
  };

  const ageInfo = getAgeSpecificHeartRateInfo(childAgeInMonths);

  return (
    <Card className="w-full bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200">
      <CardHeader className="pb-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-t-lg">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-lg flex items-center gap-2">
              <Heart className="h-5 w-5" />
              {childName}
            </CardTitle>
            <p className="text-sm text-blue-100">{age}</p>
          </div>
          <Badge variant="outline" className="text-xs bg-white/20 text-white border-white/30">
            Live Monitor
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-6 p-6">
        {/* Heart Rate Section with Age-Specific Info */}
        <div className="bg-white rounded-xl p-4 shadow-sm border border-red-100">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold text-gray-800 flex items-center gap-2">
              <Heart className="h-4 w-4 text-red-500" />
              Heart Rate Analysis
            </h3>
            <Badge className={getStatusColor(heartRate.status)}>
              {heartRate.status}
            </Badge>
          </div>
          
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <p className="text-sm text-gray-600">Current Reading</p>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-red-600">{heartRate.value}</span>
                <span className="text-sm text-gray-500">{heartRate.unit}</span>
                {getTrendIcon(heartRate.trend)}
              </div>
            </div>
            <div>
              <p className="text-sm text-gray-600">Normal Range ({ageInfo.range})</p>
              <p className="text-lg font-semibold text-green-600">{ageInfo.normal}</p>
            </div>
          </div>

          {/* Heart Rate History Chart */}
          {heartRateHistory.length > 0 && (
            <div className="mt-4">
              <h4 className="text-sm font-medium text-gray-700 mb-2 flex items-center gap-1">
                <Clock className="h-3 w-3" />
                24-Hour History
              </h4>
              <div className="h-32">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={heartRateHistory}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis dataKey="time" tick={{ fontSize: 10 }} />
                    <YAxis tick={{ fontSize: 10 }} />
                    <Tooltip 
                      formatter={(value) => [`${value} bpm`, 'Heart Rate']}
                      labelFormatter={(label) => `Time: ${label}`}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="value" 
                      stroke="#ef4444" 
                      strokeWidth={2}
                      dot={{ fill: '#ef4444', strokeWidth: 2, r: 3 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}
        </div>

        {/* Other Health Metrics */}
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white rounded-lg p-3 shadow-sm border border-blue-100">
            <div className="flex items-center gap-2 mb-2">
              <Activity className="h-4 w-4 text-blue-500" />
              <p className="text-xs font-medium text-gray-700">SpO₂</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold text-blue-600">{spO2.value}</span>
              <span className="text-xs text-gray-500">{spO2.unit}</span>
            </div>
            <Badge className={getStatusColor(spO2.status)}>
              {spO2.status}
            </Badge>
          </div>

          <div className="bg-white rounded-lg p-3 shadow-sm border border-purple-100">
            <div className="flex items-center gap-2 mb-2">
              <Moon className="h-4 w-4 text-purple-500" />
              <p className="text-xs font-medium text-gray-700">Sleep</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold text-purple-600">{sleepHours.value}</span>
              <span className="text-xs text-gray-500">{sleepHours.unit}</span>
            </div>
            <Badge className={getStatusColor(sleepHours.status)}>
              {sleepHours.status}
            </Badge>
          </div>

          <div className="bg-white rounded-lg p-3 shadow-sm border border-orange-100">
            <div className="flex items-center gap-2 mb-2">
              <Zap className="h-4 w-4 text-orange-500" />
              <p className="text-xs font-medium text-gray-700">Activity</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold text-orange-600">{activityLevel.value}</span>
              <span className="text-xs text-gray-500">{activityLevel.unit}</span>
            </div>
            <Badge className={getStatusColor(activityLevel.status)}>
              {activityLevel.status}
            </Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
