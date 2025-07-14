
import { useState } from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import HealthMetricsCard from "@/components/HealthMetricsCard";
import NutritionRecommendations from "@/components/NutritionRecommendations";
import UserProfiles from "@/components/UserProfiles";
import { mockUsers, generateHealthData, getNutritionRecommendations } from "@/utils/mockData";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Users, Heart, Apple } from "lucide-react";

const Index = () => {
  const [selectedUser, setSelectedUser] = useState(mockUsers[0]);

  // Simulate child data - in real app this would come from wearable devices
  const selectedChild = selectedUser.activeChildren[0];
  const childAge = selectedChild ? parseInt(selectedChild.match(/\((\d+)/)?.[1] || "6") : 6;
  const healthData = generateHealthData(childAge);
  const healthStatus = healthData.heartRate.status === 'normal' && healthData.spO2.status === 'normal' ? 'good' : 
                      healthData.heartRate.status === 'critical' ? 'concern' : 'attention';

  const handleUserSelect = (userId: number) => {
    const user = mockUsers.find(u => u.id === userId);
    if (user) setSelectedUser(user);
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <AppSidebar />
        
        <div className="flex-1 flex flex-col">
          <header className="h-16 border-b border-border flex items-center px-6 bg-card">
            <SidebarTrigger className="mr-4" />
            <div className="flex items-center gap-4 flex-1">
              <div>
                <h1 className="text-xl font-bold text-foreground">WeanWise Africa</h1>
                <p className="text-sm text-muted-foreground">Child Health & Nutrition Monitor</p>
              </div>
              <div className="ml-auto flex items-center gap-4">
                <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                  {mockUsers.length} Active Families
                </Badge>
                <Badge variant="outline" className="bg-accent/10 text-accent-foreground border-accent/20">
                  Live Monitoring
                </Badge>
              </div>
            </div>
          </header>

          <main className="flex-1 p-6 space-y-6 overflow-auto">
            {/* Overview Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium flex items-center gap-2">
                    <Users className="h-4 w-4 text-primary" />
                    Total Children
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">34</div>
                  <p className="text-xs text-muted-foreground">Under monitoring</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium flex items-center gap-2">
                    <Heart className="h-4 w-4 text-red-500" />
                    Health Alerts
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-accent">3</div>
                  <p className="text-xs text-muted-foreground">Require attention</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium flex items-center gap-2">
                    <Apple className="h-4 w-4 text-primary" />
                    Nutrition Plans
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">28</div>
                  <p className="text-xs text-muted-foreground">Active plans</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-primary" />
                    Improvement
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-primary">92%</div>
                  <p className="text-xs text-muted-foreground">Health outcomes</p>
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
            <Card>
              <CardHeader>
                <CardTitle>Recent Insights</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="p-3 bg-primary/5 rounded-lg border-l-4 border-l-primary">
                  <h4 className="font-medium text-sm">Iron Deficiency Prevention</h4>
                  <p className="text-sm text-muted-foreground">Moringa leaves can provide 25x more iron than spinach. Add 1 tsp daily to porridge.</p>
                </div>
                <div className="p-3 bg-accent/5 rounded-lg border-l-4 border-l-accent">
                  <h4 className="font-medium text-sm">Sleep Pattern Alert</h4>
                  <p className="text-sm text-muted-foreground">3 children showing reduced sleep. Consider reviewing evening meal timing and portions.</p>
                </div>
                <div className="p-3 bg-green-50 rounded-lg border-l-4 border-l-green-500">
                  <h4 className="font-medium text-sm">Success Story</h4>
                  <p className="text-sm text-muted-foreground">Fatima's weight gain improved 40% after incorporating local groundnut paste recommendations.</p>
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
