
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Activity, Moon, Zap } from "lucide-react";

interface HealthMetric {
  value: number;
  unit: string;
  status: 'normal' | 'warning' | 'critical';
  trend: 'up' | 'down' | 'stable';
}

interface HealthMetricsCardProps {
  childName: string;
  age: string;
  heartRate: HealthMetric;
  spO2: HealthMetric;
  sleepHours: HealthMetric;
  activityLevel: HealthMetric;
}

export default function HealthMetricsCard({
  childName,
  age,
  heartRate,
  spO2,
  sleepHours,
  activityLevel
}: HealthMetricsCardProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'normal': return 'bg-primary text-primary-foreground';
      case 'warning': return 'bg-accent text-accent-foreground';
      case 'critical': return 'bg-destructive text-destructive-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up': return '↗';
      case 'down': return '↘';
      default: return '→';
    }
  };

  return (
    <Card className="w-full">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-lg">{childName}</CardTitle>
            <p className="text-sm text-muted-foreground">{age}</p>
          </div>
          <Badge variant="outline" className="text-xs">
            Live Monitor
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center space-x-3 p-3 bg-muted/30 rounded-lg">
            <Heart className={`h-5 w-5 text-red-500 ${heartRate.status === 'normal' ? 'pulse-heart' : ''}`} />
            <div>
              <p className="text-sm font-medium">Heart Rate</p>
              <div className="flex items-center gap-2">
                <span className="text-lg font-bold">{heartRate.value}</span>
                <span className="text-xs text-muted-foreground">{heartRate.unit}</span>
                <span className="text-xs">{getTrendIcon(heartRate.trend)}</span>
              </div>
              <Badge size="sm" className={getStatusColor(heartRate.status)}>
                {heartRate.status}
              </Badge>
            </div>
          </div>

          <div className="flex items-center space-x-3 p-3 bg-muted/30 rounded-lg">
            <Activity className={`h-5 w-5 text-blue-500 ${spO2.status !== 'normal' ? 'breathe' : ''}`} />
            <div>
              <p className="text-sm font-medium">SpO₂</p>
              <div className="flex items-center gap-2">
                <span className="text-lg font-bold">{spO2.value}</span>
                <span className="text-xs text-muted-foreground">{spO2.unit}</span>
                <span className="text-xs">{getTrendIcon(spO2.trend)}</span>
              </div>
              <Badge size="sm" className={getStatusColor(spO2.status)}>
                {spO2.status}
              </Badge>
            </div>
          </div>

          <div className="flex items-center space-x-3 p-3 bg-muted/30 rounded-lg">
            <Moon className="h-5 w-5 text-purple-500" />
            <div>
              <p className="text-sm font-medium">Sleep</p>
              <div className="flex items-center gap-2">
                <span className="text-lg font-bold">{sleepHours.value}</span>
                <span className="text-xs text-muted-foreground">{sleepHours.unit}</span>
                <span className="text-xs">{getTrendIcon(sleepHours.trend)}</span>
              </div>
              <Badge size="sm" className={getStatusColor(sleepHours.status)}>
                {sleepHours.status}
              </Badge>
            </div>
          </div>

          <div className="flex items-center space-x-3 p-3 bg-muted/30 rounded-lg">
            <Zap className="h-5 w-5 text-orange-500" />
            <div>
              <p className="text-sm font-medium">Activity</p>
              <div className="flex items-center gap-2">
                <span className="text-lg font-bold">{activityLevel.value}</span>
                <span className="text-xs text-muted-foreground">{activityLevel.unit}</span>
                <span className="text-xs">{getTrendIcon(activityLevel.trend)}</span>
              </div>
              <Badge size="sm" className={getStatusColor(activityLevel.status)}>
                {activityLevel.status}
              </Badge>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
