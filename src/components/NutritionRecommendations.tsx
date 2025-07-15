import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Apple, Clock, AlertCircle, CheckCircle, Utensils, Heart } from "lucide-react";

interface FoodRecommendation {
  food: string;
  portion: string;
  timing: string;
  localName?: string;
  benefits: string[];
  priority: 'high' | 'medium' | 'low';
  image?: string;
  description?: string;
  healthBenefits?: string;
}

interface NutritionRecommendationsProps {
  childAge: string;
  healthStatus: 'good' | 'attention' | 'concern';
  recommendations: FoodRecommendation[];
}

const mealImages = [
  {
    food: "Maize Porridge",
    image: "https://images.unsplash.com/photo-1551887373-6edba6dacbb1?w=400&h=300&fit=crop",
    description: "A warm, nutritious porridge made from ground maize, perfect for growing children.",
    healthBenefits: "Rich in carbohydrates for energy, B-vitamins for brain development, and fiber for healthy digestion."
  },
  {
    food: "Sweet Potato",
    image: "https://images.unsplash.com/photo-1586182845862-a85e2e76bccb?w=400&h=300&fit=crop",
    description: "Colorful and naturally sweet root vegetables that children love.",
    healthBenefits: "Excellent source of Vitamin A for healthy vision, immune system support, and potassium for heart health."
  },
  {
    food: "Ground Nuts",
    image: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=400&h=300&fit=crop",
    description: "Protein-rich nuts ground into a smooth paste, perfect for snacks.",
    healthBenefits: "High in protein for muscle development, healthy fats for brain growth, and essential amino acids."
  }
];

export default function NutritionRecommendations({
  childAge,
  healthStatus,
  recommendations
}: NutritionRecommendationsProps) {
  const getHealthStatusColor = (status: string) => {
    switch (status) {
      case 'good': return 'bg-emerald-100 text-emerald-800 border-emerald-200';
      case 'attention': return 'bg-amber-100 text-amber-800 border-amber-200';
      case 'concern': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'border-l-4 border-l-red-400 bg-red-50';
      case 'medium': return 'border-l-4 border-l-amber-400 bg-amber-50';
      case 'low': return 'border-l-4 border-l-green-400 bg-green-50';
      default: return 'border-l-4 border-l-gray-400 bg-gray-50';
    }
  };

  // Merge meal images with recommendations
  const enhancedRecommendations = recommendations.map(rec => {
    const mealImage = mealImages.find(img => img.food === rec.food);
    return { ...rec, ...mealImage };
  });

  return (
    <Card className="w-full bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200">
      <CardHeader className="bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-t-lg">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="flex items-center gap-2">
              <Apple className="h-5 w-5" />
              Nutrition Plan
            </CardTitle>
            <p className="text-sm text-green-100">Age: {childAge}</p>
          </div>
          <Badge className={getHealthStatusColor(healthStatus)}>
            {healthStatus === 'good' ? 'Healthy' : healthStatus === 'attention' ? 'Monitor' : 'Needs Attention'}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-6 p-6">
        <div className="text-sm mb-4">
          {healthStatus === 'concern' && (
            <div className="flex items-center gap-2 p-4 bg-red-100 rounded-lg text-red-700 border border-red-200">
              <AlertCircle className="h-4 w-4" />
              <span>Health metrics suggest adjusting feeding routine. Consult healthcare provider if concerns persist.</span>
            </div>
          )}
          {healthStatus === 'good' && (
            <div className="flex items-center gap-2 p-4 bg-emerald-100 rounded-lg text-emerald-700 border border-emerald-200">
              <CheckCircle className="h-4 w-4" />
              <span>Child's health metrics are within normal range. Continue current feeding plan.</span>
            </div>
          )}
        </div>

        {/* Meal Recommendations with Images */}
        <div className="space-y-4">
          <h3 className="font-semibold text-gray-800 flex items-center gap-2">
            <Utensils className="h-4 w-4 text-green-600" />
            Recommended Meals
          </h3>
          
          {enhancedRecommendations.map((rec, index) => (
            <div key={index} className={`rounded-xl p-4 ${getPriorityColor(rec.priority)} shadow-sm border`}>
              <div className="flex gap-4">
                {rec.image && (
                  <div className="flex-shrink-0">
                    <img 
                      src={rec.image} 
                      alt={rec.food}
                      className="w-24 h-24 rounded-lg object-cover border-2 border-white shadow-sm"
                    />
                  </div>
                )}
                
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-semibold text-gray-800">{rec.food}</h4>
                      {rec.localName && (
                        <p className="text-sm text-gray-600">({rec.localName})</p>
                      )}
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {rec.priority} priority
                    </Badge>
                  </div>
                  
                  {rec.description && (
                    <p className="text-sm text-gray-700 mb-2">{rec.description}</p>
                  )}
                  
                  <div className="grid grid-cols-2 gap-2 text-sm text-gray-600 mb-3">
                    <div className="flex items-center gap-1">
                      <Utensils className="h-3 w-3" />
                      Portion: {rec.portion}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {rec.timing}
                    </div>
                  </div>

                  {rec.healthBenefits && (
                    <div className="mb-3">
                      <p className="text-xs font-medium text-gray-700 flex items-center gap-1 mb-1">
                        <Heart className="h-3 w-3 text-red-500" />
                        Health Benefits:
                      </p>
                      <p className="text-xs text-gray-600">{rec.healthBenefits}</p>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-1">
                    {rec.benefits.map((benefit, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs bg-white/70">
                        {benefit}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex gap-2 pt-4">
          <Button className="flex-1 bg-green-600 hover:bg-green-700">
            Log Feeding
          </Button>
          <Button variant="outline" className="flex-1 border-green-300 text-green-700 hover:bg-green-50">
            Get Recipes
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
