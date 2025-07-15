
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Target, 
  AlertTriangle, 
  TrendingUp, 
  Users, 
  Heart, 
  Activity,
  Moon,
  Zap
} from "lucide-react";

export default function About() {
  const keyMetrics = [
    {
      name: "Heart Rate",
      description: "Detects stress, fatigue, or potential illness",
      icon: Heart,
      color: "text-red-600"
    },
    {
      name: "Blood Oxygen Levels (SpO₂)",
      description: "Flags respiratory concerns and oxygenation status",
      icon: Activity,
      color: "text-blue-600"
    },
    {
      name: "Sleep Patterns",
      description: "Evaluates rest quality and highlights disruptions linked to diet or discomfort",
      icon: Moon,
      color: "text-purple-600"
    },
    {
      name: "Activity Levels",
      description: "Measures energy and mobility to identify developmental changes or concerns",
      icon: Zap,
      color: "text-yellow-600"
    }
  ];

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gradient-to-br from-blue-50 via-white to-green-50">
        <AppSidebar />
        
        <div className="flex-1 flex flex-col">
          <header className="h-16 border-b border-border flex items-center px-6 bg-gradient-to-r from-blue-600 to-green-600 text-white">
            <SidebarTrigger className="mr-4 text-white hover:bg-white/20" />
            <div className="flex items-center gap-4 flex-1">
              <div>
                <h1 className="text-xl font-bold">About WeanWise Africa</h1>
                <p className="text-sm text-blue-100">Empowering Child Health & Nutrition</p>
              </div>
            </div>
          </header>

          <main className="flex-1 p-6 space-y-8 overflow-auto">
            {/* Hero Section with Image */}
            <Card className="bg-white shadow-lg overflow-hidden">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=1200&h=400&fit=crop&crop=center"
                  alt="African community healthcare setting"
                  className="w-full h-64 md:h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h2 className="text-2xl md:text-3xl font-bold mb-2">Transforming Child Health in Sub-Saharan Africa</h2>
                  <p className="text-lg opacity-90">Supporting mothers and caregivers with technology-driven health solutions</p>
                </div>
              </div>
            </Card>

            {/* Introduction */}
            <Card className="bg-white shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Target className="h-6 w-6 text-blue-600" />
                  Introduction
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Sub-Saharan Africa continues to face alarming rates of child mortality and malnutrition, with 72 deaths per 1,000 live births reported in 2022 and over 61 million children affected by stunted growth due to chronic undernutrition. While nutrition campaigns have raised general awareness, many caregivers still lack clear, age-specific guidance on what to feed their children, when to introduce different foods, and how to manage common feeding challenges such as allergies or intolerances.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  This gap is compounded by limited access to nutritionally appropriate yet locally available food options, leaving caregivers unsure of how to nourish their children with confidence and consistency.
                </p>
              </CardContent>
            </Card>

            {/* Community Impact Image */}
            <Card className="bg-white shadow-lg overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img 
                    src="https://images.unsplash.com/photo-1517022812141-23620dba5c23?w=600&h=400&fit=crop&crop=center"
                    alt="Mothers and children in Sub-Saharan Africa community setting"
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="p-6 md:w-1/2 flex flex-col justify-center">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Our Mission</h3>
                  <p className="text-gray-700 leading-relaxed">
                    WeanWise Africa is dedicated to reducing child mortality and malnutrition through innovative health monitoring and nutrition guidance. We empower mothers and caregivers with the tools and knowledge they need to ensure their children thrive during the critical weaning period.
                  </p>
                </div>
              </div>
            </Card>

            {/* Problem Statement */}
            <Card className="bg-white shadow-lg border-l-4 border-l-red-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <AlertTriangle className="h-6 w-6 text-red-600" />
                  Problem Statement
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Traditional health education often relies on static, one-size-fits-all guidance, which does not equip caregivers to respond effectively to their children's evolving health needs. In remote and underserved communities, where health services are sporadic and manual tracking is the norm, early signs of poor health—like low oxygen levels, irregular sleep, or reduced activity—can go unnoticed until they become critical.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Moreover, the growing threat of drug-resistant infections and underutilization of wearable health technologies highlight the urgent need for real-time, data-driven interventions. This project aims to close these gaps by integrating health monitoring with context-specific feeding recommendations to support child survival and holistic development.
                </p>
              </CardContent>
            </Card>

            {/* Objective */}
            <Card className="bg-white shadow-lg border-l-4 border-l-green-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Target className="h-6 w-6 text-green-600" />
                  Objective
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  The objective of this project is to explore and develop a technology-driven solution that improves infant nutrition and reduces child mortality in Sub-Saharan Africa through informed, culturally relevant weaning practices. Specifically, the study aims to examine how real-time health monitoring—via wearable devices and mobile platforms—can be used to track vital signs such as heart rate, blood oxygen levels, sleep patterns, and activity levels, and correlate these metrics with feeding behavior and nutritional intake.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  The research will also investigate the effectiveness of delivering localized dietary recommendations based on available food resources, and how accessible, age-specific guidance influences caregivers' decision-making during the weaning period. Ultimately, this project seeks to generate actionable insights that support healthier childhood development, empower caregivers, and reduce the burden of preventable illnesses across underserved communities.
                </p>
              </CardContent>
            </Card>

            {/* Key Metrics */}
            <Card className="bg-white shadow-lg border-l-4 border-l-blue-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <TrendingUp className="h-6 w-6 text-blue-600" />
                  Key Metrics to Monitor
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-gray-700 leading-relaxed">
                  To support proactive and personalized care for infants and young children, the proposed system will focus on monitoring a select group of vital health metrics using wearable devices and mobile platforms. These indicators are critical for detecting early signs of nutritional stress or developmental delays and will serve as a foundation for timely interventions and feeding adjustments.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {keyMetrics.map((metric, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                          <metric.icon className={`h-5 w-5 ${metric.color}`} />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-800 mb-1">{metric.name}</h4>
                          <p className="text-sm text-gray-600">{metric.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Target Users */}
            <Card className="bg-white shadow-lg border-l-4 border-l-purple-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Users className="h-6 w-6 text-purple-600" />
                  Target Users
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  This project targets mothers and caregivers of infants and young children in Sub-Saharan Africa, with a special focus on communities that lack reliable health and nutrition guidance. It also supports frontline health workers and local clinics who play a crucial role in guiding feeding practices and monitoring early childhood development.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  By equipping these groups with real-time tools and localized information, the project enhances both individual decision-making and community-based care.
                </p>
                
                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge className="bg-purple-100 text-purple-800">Mothers & Caregivers</Badge>
                  <Badge className="bg-blue-100 text-blue-800">Health Workers</Badge>
                  <Badge className="bg-green-100 text-green-800">Local Clinics</Badge>
                  <Badge className="bg-yellow-100 text-yellow-800">Community Leaders</Badge>
                </div>
              </CardContent>
            </Card>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
