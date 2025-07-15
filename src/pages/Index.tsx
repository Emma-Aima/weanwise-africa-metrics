
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Users, Apple, Bell, Settings, Activity, TrendingUp, Clock, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";
import HealthMetricsCard from "@/components/HealthMetricsCard";
import NutritionRecommendations from "@/components/NutritionRecommendations";

// Mock data for the dashboard
const mockHeartRateHistory = [
  { time: "06:00", value: 98, date: "2024-01-15" },
  { time: "08:00", value: 102, date: "2024-01-15" },
  { time: "10:00", value: 95, date: "2024-01-15" },
  { time: "12:00", value: 105, date: "2024-01-15" },
  { time: "14:00", value: 100, date: "2024-01-15" },
  { time: "16:00", value: 97, date: "2024-01-15" },
  { time: "18:00", value: 94, date: "2024-01-15" },
  { time: "20:00", value: 92, date: "2024-01-15" },
];

const mockNutritionRecommendations = [
  {
    food: "Maize Porridge",
    localName: "Ugali wa Mahindi",
    portion: "1/2 cup",
    timing: "Breakfast",
    benefits: ["Energy", "Fiber", "B-Vitamins"],
    priority: "high" as const,
  },
  {
    food: "Sweet Potato",
    portion: "1/3 cup",
    timing: "Lunch",
    benefits: ["Vitamin A", "Potassium", "Fiber"],
    priority: "high" as const,
  },
  {
    food: "Ground Nuts",
    portion: "2 tbsp",
    timing: "Snack",
    benefits: ["Protein", "Healthy Fats", "Vitamin E"],
    priority: "medium" as const,
  },
];

export default function Index() {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <main className="flex-1 bg-gradient-to-br from-blue-50 via-green-50 to-yellow-50">
          <div className="p-6 space-y-8">
            {/* SDG Statement */}
            <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white p-4 rounded-lg shadow-lg mb-6">
              <h2 className="text-lg font-bold text-center">
                Weanwise Africa is addressing the SDG 3: Good Health & Wellbeing in Sub-Saharan Africa
              </h2>
            </div>

            {/* Header with Image */}
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent mb-4">
                WeanWise Africa Dashboard
              </h1>
              <p className="text-gray-600 mb-6">Your child's health and nutrition companion</p>
              
              {/* Hero Image */}
              <div className="relative w-full max-w-4xl mx-auto mb-8">
                <img 
                  src="https://images.unsplash.com/photo-1466721591366-2d5fba72006d?w=800&h=400&fit=crop&crop=center"
                  alt="African mothers and children in Sub-Saharan Africa"
                  className="w-full h-64 md:h-80 object-cover rounded-lg shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-lg"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-sm md:text-base font-medium">
                    Empowering mothers and children across Sub-Saharan Africa
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
              <Card className="bg-gradient-to-r from-red-100 to-pink-100 border-red-200">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-red-700">Heart Rate</p>
                      <p className="text-2xl font-bold text-red-800">98 bpm</p>
                    </div>
                    <Heart className="h-8 w-8 text-red-600" />
                  </div>
                  <Badge className="mt-2 bg-green-100 text-green-800">Normal</Badge>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-r from-blue-100 to-indigo-100 border-blue-200">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-blue-700">Activity Level</p>
                      <p className="text-2xl font-bold text-blue-800">Active</p>
                    </div>
                    <Activity className="h-8 w-8 text-blue-600" />
                  </div>
                  <Badge className="mt-2 bg-green-100 text-green-800">Good</Badge>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-r from-green-100 to-emerald-100 border-green-200">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-green-700">Nutrition</p>
                      <p className="text-2xl font-bold text-green-800">On Track</p>
                    </div>
                    <Apple className="h-8 w-8 text-green-600" />
                  </div>
                  <Badge className="mt-2 bg-green-100 text-green-800">Excellent</Badge>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-r from-yellow-100 to-orange-100 border-yellow-200">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-yellow-700">Alerts</p>
                      <p className="text-2xl font-bold text-yellow-800">2 New</p>
                    </div>
                    <AlertTriangle className="h-8 w-8 text-yellow-600" />
                  </div>
                  <Badge className="mt-2 bg-yellow-100 text-yellow-800">Review</Badge>
                </CardContent>
              </Card>
            </div>

            {/* Main Feature Buttons */}
            <Card className="bg-white/95 backdrop-blur-sm shadow-lg mb-8">
              <CardHeader>
                <CardTitle className="text-center text-xl font-bold">Main Features</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Link to="/health" className="group">
                    <div className="bg-gradient-to-br from-red-50 to-pink-50 border-2 border-red-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                      <div className="flex flex-col items-center text-center space-y-3">
                        <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center">
                          <Heart className="h-8 w-8 text-white" />
                        </div>
                        <h3 className="text-lg font-bold text-red-800">Health Monitor</h3>
                        <p className="text-sm text-red-600">Real-time health tracking for your children</p>
                        <Button className="bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white">
                          Monitor Health
                        </Button>
                      </div>
                    </div>
                  </Link>

                  <Link to="/nutrition" className="group">
                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                      <div className="flex flex-col items-center text-center space-y-3">
                        <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                          <Apple className="h-8 w-8 text-white" />
                        </div>
                        <h3 className="text-lg font-bold text-green-800">Nutrition Guide</h3>
                        <p className="text-sm text-green-600">Personalized nutrition plans and meal recommendations</p>
                        <Button className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white">
                          View Nutrition
                        </Button>
                      </div>
                    </div>
                  </Link>

                  <Link to="/team" className="group">
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                      <div className="flex flex-col items-center text-center space-y-3">
                        <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center">
                          <Users className="h-8 w-8 text-white" />
                        </div>
                        <h3 className="text-lg font-bold text-blue-800">Care Team</h3>
                        <p className="text-sm text-blue-600">Connect with healthcare professionals</p>
                        <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white">
                          View Team
                        </Button>
                      </div>
                    </div>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Tools Section */}
            <Card className="bg-white/95 backdrop-blur-sm shadow-lg mb-8">
              <CardHeader>
                <CardTitle className="text-center text-xl font-bold">Tools</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Link to="/alerts" className="group">
                    <div className="bg-gradient-to-br from-orange-50 to-red-50 border-2 border-orange-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                          <Bell className="h-6 w-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-orange-800">Alerts</h3>
                          <p className="text-sm text-orange-600">Health alerts and vaccination reminders</p>
                        </div>
                        <Button size="sm" className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white">
                          View Alerts
                        </Button>
                      </div>
                    </div>
                  </Link>

                  <Link to="/settings" className="group">
                    <div className="bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                          <Settings className="h-6 w-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-purple-800">Settings</h3>
                          <p className="text-sm text-purple-600">App preferences and account settings</p>
                        </div>
                        <Button size="sm" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white">
                          Open Settings
                        </Button>
                      </div>
                    </div>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Health Overview */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <HealthMetricsCard
                childName="Emma"
                age="12 months"
                heartRate={{ value: 98, unit: "bpm", status: "normal", trend: "stable" }}
                spO2={{ value: 98, unit: "%", status: "normal", trend: "stable" }}
                sleepHours={{ value: 12, unit: "hrs", status: "normal", trend: "up" }}
                activityLevel={{ value: 85, unit: "%", status: "normal", trend: "up" }}
                heartRateHistory={mockHeartRateHistory}
                childAgeInMonths={12}
              />

              <NutritionRecommendations
                childAge="12 months"
                healthStatus="good"
                recommendations={mockNutritionRecommendations}
              />
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}
