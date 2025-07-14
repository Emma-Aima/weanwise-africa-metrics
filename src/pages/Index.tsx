
import { useState } from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import HealthMetricsCard from "@/components/HealthMetricsCard";
import NutritionRecommendations from "@/components/NutritionRecommendations";
import UserProfiles from "@/components/UserProfiles";
import { mockUsers, generateHealthData, generateHeartRateHistory, getNutritionRecommendations } from "@/utils/mockData";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Users, Heart, Apple, Activity, Shield } from "lucide-react";

const Index = () => {
  const [selectedUser, setSelectedUser] = useState(mockUsers[0]);

  // Simulate child data - in real app this would come from wearable devices
  const selectedChild = selectedUser.activeChildren[0];
  const childAge = selectedChild ? parseInt(selectedChild.match(/\((\d+)/)?.[1] || "6") : 6;
  const healthData = generateHealthData(childAge);
  const heartRateHistory = generateHeartRateHistory(childAge);
  const healthStatus = healthData.heartRate.status === 'normal' && healthData.spO2.status === 'normal' ? 'good' : 
                      healthData.heartRate.status === 'critical' ? 'concern' : 'attention';

  const handleUserSelect = (userId: number) => {
    const user = mockUsers.find(u => u.id === userId);
    if (user) setSelectedUser(user);
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gradient-to-br from-blue-50 via-white to-green-50">
        <AppSidebar />
        
        <div className="flex-1 flex flex-col">
          <header className="h-16 border-b border-border flex items-center px-6 bg-gradient-to-r from-blue-600 to-green-600 text-white shadow-lg">
            <SidebarTrigger className="mr-4 text-white hover:bg-white/20" />
            <div className="flex items-center gap-4 flex-1">
              <div>
                <h1 className="text-xl font-bold">WeanWise Africa</h1>
                <p className="text-sm text-blue-100">Child Health & Nutrition Monitor</p>
              </div>
              <div className="ml-auto flex items-center gap-4">
                <Badge className="bg-white/20 text-white border-white/30">
                  {mockUsers.length} Active Families
                </Badge>
                <Badge className="bg-emerald-500/80 text-white border-emerald-300/30">
                  Live Monitoring
                </Badge>
              </div>
            </div>
          </header>

          <main className="flex-1 p-6 space-y-6 overflow-auto">
            {/* Overview Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white border-0 shadow-lg">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    Total Children
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">34</div>
                  <p className="text-xs text-blue-100">Under monitoring</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-red-500 to-red-600 text-white border-0 shadow-lg">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium flex items-center gap-2">
                    <Heart className="h-4 w-4" />
                    Health Alerts
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">3</div>
                  <p className="text-xs text-red-100">Require attention</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white border-0 shadow-lg">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium flex items-center gap-2">
                    <Apple className="h-4 w-4" />
                    Nutrition Plans
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">28</div>
                  <p className="text-xs text-green-100">Active plans</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white border-0 shadow-lg">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium flex items-center gap-2">
                    <TrendingUp className="h-4 w-4" />
                    Improvement
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">92%</div>
                  <p className="text-xs text-purple-100">Health outcomes</p>
                </CardContent>
              </Card>
            </div>

            {/* Active Child Monitoring */}
            {selectedChild && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <HealthMetricsCard
                  childName={selectedChild.split(' ')[0]}
                  age={`${childAge} months old`}
                  heartRate={healthData.heartRate}
                  spO2={healthData.spO2}
                  sleepHours={healthData.sleepHours}
                  activityLevel={healthData.activityLevel}
                  heartRateHistory={heartRateHistory}
                  childAgeInMonths={childAge}
                />

                <NutritionRecommendations
                  childAge={`${childAge} months`}
                  healthStatus={healthStatus}
                  recommendations={getNutritionRecommendations(childAge, healthStatus)}
                />
              </div>
            )}

            {/* User Profiles Section */}
            <UserProfiles 
              users={mockUsers}
              onSelectUser={handleUserSelect}
            />

            {/* Educational Content */}
            <Card className="bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-200">
              <CardHeader className="bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-t-lg">
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  Recent Insights & Success Stories
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 p-6">
                <div className="p-4 bg-emerald-100 rounded-lg border-l-4 border-l-emerald-500 shadow-sm">
                  <h4 className="font-semibold text-sm text-emerald-800 flex items-center gap-2">
                    <Activity className="h-4 w-4" />
                    Iron Deficiency Prevention
                  </h4>
                  <p className="text-sm text-emerald-700 mt-1">Moringa leaves can provide 25x more iron than spinach. Add 1 tsp daily to porridge for optimal growth.</p>
                </div>
                <div className="p-4 bg-amber-100 rounded-lg border-l-4 border-l-amber-500 shadow-sm">
                  <h4 className="font-semibold text-sm text-amber-800 flex items-center gap-2">
                    <Heart className="h-4 w-4" />
                    Sleep Pattern Alert
                  </h4>
                  <p className="text-sm text-amber-700 mt-1">3 children showing reduced sleep. Consider reviewing evening meal timing and portions.</p>
                </div>
                <div className="p-4 bg-green-100 rounded-lg border-l-4 border-l-green-500 shadow-sm">
                  <h4 className="font-semibold text-sm text-green-800 flex items-center gap-2">
                    <TrendingUp className="h-4 w-4" />
                    Success Story
                  </h4>
                  <p className="text-sm text-green-700 mt-1">Fatima's weight gain improved 40% after incorporating local groundnut paste recommendations.</p>
                </div>
              </CardContent>
            </Card>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Index;
