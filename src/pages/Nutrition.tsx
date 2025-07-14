import { useState } from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Apple, Clock, Heart, Users, ChefHat, Utensils } from "lucide-react";

const nutritionMeals = [
  {
    id: 1,
    name: "Maize Porridge",
    localName: "Ugali wa Mahindi",
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=600&h=400&fit=crop",
    description: "A warm, nutritious porridge made from ground maize flour, perfect for growing children. Rich in carbohydrates and essential nutrients.",
    healthBenefits: "Rich in carbohydrates for energy, B-vitamins for brain development, and fiber for healthy digestion. Provides sustained energy for active children.",
    portion: "1/2 cup",
    timing: "Breakfast",
    ageGroup: "6+ months",
    priority: "high",
    nutrients: ["Carbohydrates", "Fiber", "Iron", "B-Vitamins"],
    preparationTime: "15 minutes",
    calories: "120 kcal"
  },
  {
    id: 2,
    name: "Sweet Potato Mash",
    localName: "Viazi Vitamu",
    image: "https://images.unsplash.com/photo-1509358271058-acd22cc93898?w=600&h=400&fit=crop",
    description: "Colorful and naturally sweet root vegetables that children love. Mashed to perfect consistency for easy eating.",
    healthBenefits: "Excellent source of Vitamin A for healthy vision, immune system support, and potassium for heart health. Natural sweetness appeals to children.",
    portion: "1/3 cup",
    timing: "Lunch",
    ageGroup: "6+ months",
    priority: "high",
    nutrients: ["Vitamin A", "Potassium", "Fiber", "Vitamin C"],
    preparationTime: "20 minutes",
    calories: "85 kcal"
  },
  {
    id: 3,
    name: "Ground Nuts Paste",
    localName: "Karanga",
    image: "https://images.unsplash.com/photo-1566454544558-6a42a31fe4e8?w=600&h=400&fit=crop",
    description: "Protein-rich nuts ground into a smooth paste, perfect for snacks and adding to meals for extra nutrition.",
    healthBenefits: "High in protein for muscle development, healthy fats for brain growth, and essential amino acids. Excellent source of plant-based protein.",
    portion: "2 tablespoons",
    timing: "Snack",
    ageGroup: "8+ months",
    priority: "medium",
    nutrients: ["Protein", "Healthy Fats", "Vitamin E", "Magnesium"],
    preparationTime: "5 minutes",
    calories: "180 kcal"
  },
  {
    id: 4,
    name: "Mixed Vegetable Stew",
    localName: "Mchuzi wa Mboga",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&h=400&fit=crop",
    description: "A colorful mix of locally available vegetables cooked in a nutritious stew, perfect for introducing various flavors and textures.",
    healthBenefits: "Packed with vitamins, minerals, and antioxidants from various vegetables. Supports immune system and overall growth.",
    portion: "1/2 cup",
    timing: "Dinner",
    ageGroup: "8+ months",
    priority: "high",
    nutrients: ["Vitamins", "Minerals", "Antioxidants", "Fiber"],
    preparationTime: "25 minutes",
    calories: "95 kcal"
  },
  {
    id: 5,
    name: "Mashed Bananas",
    localName: "Ndizi",
    image: "https://images.unsplash.com/photo-1603833665858-e61d17a86224?w=600&h=400&fit=crop",
    description: "Sweet, naturally soft bananas mashed to perfect consistency. An excellent first food for babies and energy source for toddlers.",
    healthBenefits: "Natural sugars for quick energy, potassium for heart health, and vitamin B6 for brain development. Easy to digest and naturally sweet.",
    portion: "1/2 banana",
    timing: "Snack",
    ageGroup: "4+ months",
    priority: "medium",
    nutrients: ["Potassium", "Vitamin B6", "Natural Sugars", "Vitamin C"],
    preparationTime: "2 minutes",
    calories: "60 kcal"
  },
  {
    id: 6,
    name: "Fish and Rice",
    localName: "Samaki na Wali",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=600&h=400&fit=crop",
    description: "Fresh fish with rice, providing complete proteins and essential omega-3 fatty acids crucial for brain development.",
    healthBenefits: "Complete proteins for growth, omega-3 fatty acids for brain development, and easy-to-digest carbohydrates for energy.",
    portion: "1/3 cup",
    timing: "Lunch",
    ageGroup: "10+ months",
    priority: "high",
    nutrients: ["Protein", "Omega-3", "Carbohydrates", "Phosphorus"],
    preparationTime: "30 minutes",
    calories: "140 kcal"
  }
];

export default function Nutrition() {
  const [selectedAgeGroup, setSelectedAgeGroup] = useState("all");
  const [selectedMealTime, setSelectedMealTime] = useState("all");

  const filteredMeals = nutritionMeals.filter(meal => {
    const ageMatch = selectedAgeGroup === "all" || meal.ageGroup.includes(selectedAgeGroup);
    const timeMatch = selectedMealTime === "all" || meal.timing.toLowerCase() === selectedMealTime.toLowerCase();
    return ageMatch && timeMatch;
  });

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'border-l-4 border-l-red-400 bg-red-50';
      case 'medium': return 'border-l-4 border-l-amber-400 bg-amber-50';
      case 'low': return 'border-l-4 border-l-green-400 bg-green-50';
      default: return 'border-l-4 border-l-gray-400 bg-gray-50';
    }
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gradient-to-br from-green-50 via-yellow-50 to-orange-50">
        <AppSidebar />
        
        <div className="flex-1 flex flex-col">
          <header className="h-16 border-b border-border flex items-center px-6 bg-gradient-to-r from-green-600 to-orange-600 text-white">
            <SidebarTrigger className="mr-4 text-white hover:bg-white/20" />
            <div className="flex items-center gap-4 flex-1">
              <div>
                <h1 className="text-xl font-bold">Nutrition Guide</h1>
                <p className="text-sm text-green-100">Healthy meals for your child's growth and development</p>
              </div>
            </div>
          </header>

          <main className="flex-1 p-6 space-y-6 overflow-auto">
            {/* Filter Controls */}
            <div className="flex flex-wrap gap-4 justify-center mb-8">
              <div className="flex gap-2">
                <Button
                  variant={selectedAgeGroup === "all" ? "default" : "outline"}
                  onClick={() => setSelectedAgeGroup("all")}
                  className="text-sm"
                >
                  All Ages
                </Button>
                <Button
                  variant={selectedAgeGroup === "4" ? "default" : "outline"}
                  onClick={() => setSelectedAgeGroup("4")}
                  className="text-sm"
                >
                  4+ months
                </Button>
                <Button
                  variant={selectedAgeGroup === "6" ? "default" : "outline"}
                  onClick={() => setSelectedAgeGroup("6")}
                  className="text-sm"
                >
                  6+ months
                </Button>
                <Button
                  variant={selectedAgeGroup === "8" ? "default" : "outline"}
                  onClick={() => setSelectedAgeGroup("8")}
                  className="text-sm"
                >
                  8+ months
                </Button>
              </div>
              <div className="flex gap-2">
                <Button
                  variant={selectedMealTime === "all" ? "default" : "outline"}
                  onClick={() => setSelectedMealTime("all")}
                  className="text-sm"
                >
                  All Meals
                </Button>
                <Button
                  variant={selectedMealTime === "breakfast" ? "default" : "outline"}
                  onClick={() => setSelectedMealTime("breakfast")}
                  className="text-sm"
                >
                  Breakfast
                </Button>
                <Button
                  variant={selectedMealTime === "lunch" ? "default" : "outline"}
                  onClick={() => setSelectedMealTime("lunch")}
                  className="text-sm"
                >
                  Lunch
                </Button>
                <Button
                  variant={selectedMealTime === "dinner" ? "default" : "outline"}
                  onClick={() => setSelectedMealTime("dinner")}
                  className="text-sm"
                >
                  Dinner
                </Button>
                <Button
                  variant={selectedMealTime === "snack" ? "default" : "outline"}
                  onClick={() => setSelectedMealTime("snack")}
                  className="text-sm"
                >
                  Snacks
                </Button>
              </div>
            </div>

            {/* Nutrition Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredMeals.map((meal) => (
                <Card key={meal.id} className={`overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ${getPriorityColor(meal.priority)}`}>
                  <div className="relative">
                    <img 
                      src={meal.image} 
                      alt={meal.name}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-2 right-2">
                      <Badge className="bg-white/90 text-gray-800">
                        {meal.priority} priority
                      </Badge>
                    </div>
                  </div>
                  
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg">{meal.name}</CardTitle>
                        <p className="text-sm text-gray-600 italic">({meal.localName})</p>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {meal.ageGroup}
                      </Badge>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <p className="text-sm text-gray-700">{meal.description}</p>
                    
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div className="flex items-center gap-1">
                        <Utensils className="h-3 w-3 text-orange-500" />
                        <span className="text-gray-600">Portion: {meal.portion}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3 text-blue-500" />
                        <span className="text-gray-600">{meal.timing}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <ChefHat className="h-3 w-3 text-purple-500" />
                        <span className="text-gray-600">{meal.preparationTime}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Apple className="h-3 w-3 text-green-500" />
                        <span className="text-gray-600">{meal.calories}</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <p className="text-xs font-medium text-gray-700 flex items-center gap-1">
                        <Heart className="h-3 w-3 text-red-500" />
                        Health Benefits:
                      </p>
                      <p className="text-xs text-gray-600 leading-relaxed">{meal.healthBenefits}</p>
                    </div>

                    <div className="space-y-2">
                      <p className="text-xs font-medium text-gray-700">Key Nutrients:</p>
                      <div className="flex flex-wrap gap-1">
                        {meal.nutrients.map((nutrient, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs bg-green-100 text-green-800">
                            {nutrient}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-2 pt-2">
                      <Button size="sm" className="flex-1 bg-green-600 hover:bg-green-700 text-xs">
                        Get Recipe
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1 border-green-300 text-green-700 hover:bg-green-50 text-xs">
                        Log Meal
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Feeding Tips */}
            <Card className="bg-gradient-to-r from-green-100 to-yellow-100 border-green-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-green-800">
                  <Users className="h-5 w-5" />
                  Feeding Tips for Parents
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-green-800">Age 4-6 months:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                      <li>Start with single-ingredient foods</li>
                      <li>Introduce new foods one at a time</li>
                      <li>Watch for allergic reactions</li>
                      <li>Continue breastfeeding</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-green-800">Age 6-12 months:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                      <li>Gradually increase food variety</li>
                      <li>Include iron-rich foods</li>
                      <li>Practice self-feeding</li>
                      <li>Offer water in a cup</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
