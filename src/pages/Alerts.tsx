
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AlertTriangle, Heart, Activity, Syringe, Clock, CheckCircle, X, Bell, BellOff } from "lucide-react";

interface Alert {
  id: string;
  type: 'health' | 'vitals' | 'vaccination' | 'feeding';
  severity: 'low' | 'medium' | 'high' | 'critical';
  title: string;
  message: string;
  timestamp: string;
  childName: string;
  isRead: boolean;
  actionRequired: boolean;
}

const mockAlerts: Alert[] = [
  {
    id: '1',
    type: 'vitals',
    severity: 'high',
    title: 'High Heart Rate Detected',
    message: 'Emma\'s heart rate has been consistently above 140 bpm for the past 30 minutes. Normal range for her age is 80-120 bpm.',
    timestamp: '2024-01-15T10:30:00Z',
    childName: 'Emma',
    isRead: false,
    actionRequired: true
  },
  {
    id: '2',
    type: 'vaccination',
    severity: 'medium',
    title: 'Vaccination Due',
    message: 'James is due for his 12-month vaccination. MMR vaccine is scheduled for this week.',
    timestamp: '2024-01-15T08:00:00Z',
    childName: 'James',
    isRead: false,
    actionRequired: true
  },
  {
    id: '3',
    type: 'health',
    severity: 'low',
    title: 'Sleep Pattern Change',
    message: 'Emma\'s sleep duration has decreased by 2 hours compared to last week\'s average.',
    timestamp: '2024-01-14T22:00:00Z',
    childName: 'Emma',
    isRead: true,
    actionRequired: false
  },
  {
    id: '4',
    type: 'vitals',
    severity: 'critical',
    title: 'Low Blood Pressure Alert',
    message: 'James\'s blood pressure reading is 85/45 mmHg, which is below the normal range. Immediate medical attention may be required.',
    timestamp: '2024-01-14T16:45:00Z',
    childName: 'James',
    isRead: false,
    actionRequired: true
  },
  {
    id: '5',
    type: 'feeding',
    severity: 'medium',
    title: 'Feeding Schedule Reminder',
    message: 'Emma hasn\'t been fed for 4 hours. It\'s time for her next meal according to her feeding schedule.',
    timestamp: '2024-01-14T14:30:00Z',
    childName: 'Emma',
    isRead: true,
    actionRequired: false
  },
  {
    id: '6',
    type: 'vaccination',
    severity: 'high',
    title: 'Overdue Vaccination',
    message: 'James is 2 days overdue for his DPT booster shot. Please schedule an appointment with your healthcare provider.',
    timestamp: '2024-01-13T09:00:00Z',
    childName: 'James',
    isRead: false,
    actionRequired: true
  }
];

export default function Alerts() {
  const [alerts, setAlerts] = useState<Alert[]>(mockAlerts);
  const [filter, setFilter] = useState<'all' | 'unread' | 'critical'>('all');
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  const filteredAlerts = alerts.filter(alert => {
    if (filter === 'unread') return !alert.isRead;
    if (filter === 'critical') return alert.severity === 'critical';
    return true;
  });

  const markAsRead = (id: string) => {
    setAlerts(prev => prev.map(alert => 
      alert.id === id ? { ...alert, isRead: true } : alert
    ));
  };

  const dismissAlert = (id: string) => {
    setAlerts(prev => prev.filter(alert => alert.id !== id));
  };

  const getAlertIcon = (type: string) => {
    switch (type) {
      case 'vitals': return <Heart className="h-5 w-5" />;
      case 'health': return <Activity className="h-5 w-5" />;
      case 'vaccination': return <Syringe className="h-5 w-5" />;
      case 'feeding': return <Clock className="h-5 w-5" />;
      default: return <AlertTriangle className="h-5 w-5" />;
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical': return 'border-l-red-600 bg-red-50';
      case 'high': return 'border-l-orange-500 bg-orange-50';
      case 'medium': return 'border-l-yellow-500 bg-yellow-50';
      case 'low': return 'border-l-blue-500 bg-blue-50';
      default: return 'border-l-gray-500 bg-gray-50';
    }
  };

  const getSeverityBadge = (severity: string) => {
    switch (severity) {
      case 'critical': return 'bg-red-100 text-red-800 border-red-200';
      case 'high': return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'low': return 'bg-blue-100 text-blue-800 border-blue-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const formatTimestamp = (timestamp: string) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));
    
    if (diffInHours < 1) return 'Just now';
    if (diffInHours < 24) return `${diffInHours}h ago`;
    return date.toLocaleDateString();
  };

  const unreadCount = alerts.filter(alert => !alert.isRead).length;
  const criticalCount = alerts.filter(alert => alert.severity === 'critical').length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 p-4">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent mb-2">
            Health Alerts
          </h1>
          <p className="text-gray-600">Stay informed about your children's health status</p>
        </div>

        {/* Alert Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <Card className="bg-gradient-to-r from-red-100 to-pink-100 border-red-200">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-red-700">Critical Alerts</p>
                  <p className="text-2xl font-bold text-red-800">{criticalCount}</p>
                </div>
                <AlertTriangle className="h-8 w-8 text-red-600" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-orange-100 to-yellow-100 border-orange-200">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-orange-700">Unread Alerts</p>
                  <p className="text-2xl font-bold text-orange-800">{unreadCount}</p>
                </div>
                <Bell className="h-8 w-8 text-orange-600" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-blue-100 to-indigo-100 border-blue-200">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-blue-700">Total Alerts</p>
                  <p className="text-2xl font-bold text-blue-800">{alerts.length}</p>
                </div>
                <Activity className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Controls */}
        <div className="flex flex-wrap gap-4 justify-between items-center">
          <div className="flex gap-2">
            <Button
              variant={filter === 'all' ? 'default' : 'outline'}
              onClick={() => setFilter('all')}
              size="sm"
            >
              All Alerts
            </Button>
            <Button
              variant={filter === 'unread' ? 'default' : 'outline'}
              onClick={() => setFilter('unread')}
              size="sm"
            >
              Unread ({unreadCount})
            </Button>
            <Button
              variant={filter === 'critical' ? 'default' : 'outline'}
              onClick={() => setFilter('critical')}
              size="sm"
            >
              Critical ({criticalCount})
            </Button>
          </div>
          
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setNotificationsEnabled(!notificationsEnabled)}
              className="flex items-center gap-2"
            >
              {notificationsEnabled ? <Bell className="h-4 w-4" /> : <BellOff className="h-4 w-4" />}
              {notificationsEnabled ? 'Notifications On' : 'Notifications Off'}
            </Button>
          </div>
        </div>

        {/* Alerts List */}
        <div className="space-y-4">
          {filteredAlerts.length === 0 ? (
            <Card className="bg-white/90 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-800 mb-2">No alerts to show</h3>
                <p className="text-gray-600">
                  {filter === 'all' 
                    ? "All caught up! No alerts at the moment." 
                    : filter === 'unread' 
                    ? "No unread alerts. Great job staying on top of things!"
                    : "No critical alerts. Your children's health is looking good."}
                </p>
              </CardContent>
            </Card>
          ) : (
            filteredAlerts.map((alert) => (
              <Card key={alert.id} className={`border-l-4 ${getSeverityColor(alert.severity)} ${!alert.isRead ? 'shadow-lg' : 'opacity-75'}`}>
                <CardContent className="p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-3 flex-1">
                      <div className={`p-2 rounded-full ${
                        alert.severity === 'critical' ? 'bg-red-200 text-red-700' :
                        alert.severity === 'high' ? 'bg-orange-200 text-orange-700' :
                        alert.severity === 'medium' ? 'bg-yellow-200 text-yellow-700' :
                        'bg-blue-200 text-blue-700'
                      }`}>
                        {getAlertIcon(alert.type)}
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-semibold text-gray-800">{alert.title}</h3>
                          <Badge className={getSeverityBadge(alert.severity)}>
                            {alert.severity}
                          </Badge>
                          {!alert.isRead && (
                            <Badge className="bg-blue-100 text-blue-800">New</Badge>
                          )}
                        </div>
                        
                        <p className="text-sm text-gray-600 mb-2">
                          <span className="font-medium">{alert.childName}</span> • {formatTimestamp(alert.timestamp)}
                        </p>
                        
                        <p className="text-gray-700 mb-3">{alert.message}</p>
                        
                        <div className="flex gap-2">
                          {!alert.isRead && (
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => markAsRead(alert.id)}
                              className="text-xs"
                            >
                              Mark as Read
                            </Button>
                          )}
                          {alert.actionRequired && (
                            <Button
                              size="sm"
                              className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-xs"
                            >
                              Take Action
                            </Button>
                          )}
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => dismissAlert(alert.id)}
                            className="text-xs text-gray-500 hover:text-gray-700"
                          >
                            <X className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>

        {/* Emergency Contact */}
        <Card className="bg-gradient-to-r from-red-100 to-pink-100 border-red-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-red-800">
              <AlertTriangle className="h-5 w-5" />
              Emergency Contact
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-red-700 mb-4">
              If you notice any critical health symptoms or if your child's condition worsens, contact your healthcare provider immediately.
            </p>
            <div className="flex gap-4">
              <Button className="bg-red-600 hover:bg-red-700 text-white">
                Call Emergency Services
              </Button>
              <Button variant="outline" className="border-red-300 text-red-700 hover:bg-red-50">
                Contact Doctor
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
