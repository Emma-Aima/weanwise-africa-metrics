
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Apple, Clock, AlertCircle, CheckCircle } from "lucide-react";

interface FoodRecommendation {
  food: string;
  portion: string;
  timing: string;
  localName?: string;
  benefits: string[];
  priority: 'high' | 'medium' | 'low';
}

interface NutritionRecommendationsProps {
  childAge: string;
  healthStatus: 'good' | 'attention' | 'concern';
  recommendations: FoodRecommendation[];
}

export default function NutritionRecommendations({
  childAge,
  healthStatus,
  recommendations
}: NutritionRecommendationsProps) {
  const getHealthStatusColor = (status: string) => {
    switch (status) {
      case 'good': return 'bg-primary text-primary-foreground';
      case 'attention': return 'bg-accent text-accent-foreground';
      case 'concern': return 'bg-destructive text-destructive-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'border-l-4 border-l-destructive';
      case 'medium': return 'border-l-4 border-l-accent';
      case 'low': return 'border-l-4 border-l-primary';
      default: return 'border-l-4 border-l-muted';
    }
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="flex items-center gap-2">
              <Apple className="h-5 w-5 text-primary" />
              Nutrition Plan
            </CardTitle>
            <p className="text-sm text-muted-foreground">Age: {childAge}</p>
          </div>
          <Badge className={getHealthStatusColor(healthStatus)}>
            {healthStatus === 'good' ? 'Healthy' : healthStatus === 'attention' ? 'Monitor' : 'Needs Attention'}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="text-sm text-muted-foreground mb-4">
          {healthStatus === 'concern' && (
            <div className="flex items-center gap-2 p-3 bg-destructive/10 rounded-lg text-destructive">
              <AlertCircle className="h-4 w-4" />
              <span>Health metrics suggest adjusting feeding routine. Consult healthcare provider if concerns persist.</span>
            </div>
          )}
          {healthStatus === 'good' && (
            <div className="flex items-center gap-2 p-3 bg-primary/10 rounded-lg text-primary">
              <CheckCircle className="h-4 w-4" />
              <span>Child's health metrics are within normal range. Continue current feeding plan.</span>
            </div>
          )}
        </div>

        <div className="space-y-3">
          {recommendations.map((rec, index) => (
            <div key={index} className={`p-4 bg-muted/30 rounded-lg ${getPriorityColor(rec.priority)}`}>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="font-medium">{rec.food}</h4>
                  {rec.localName && (
                    <p className="text-sm text-muted-foreground">({rec.localName})</p>
                  )}
                </div>
                <Badge variant="outline" size="sm">
                  {rec.priority} priority
                </Badge>
              </div>
              
              <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground mb-2">
                <div>Portion: {rec.portion}</div>
                <div className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {rec.timing}
                </div>
              </div>

              <div className="flex flex-wrap gap-1">
                {rec.benefits.map((benefit, idx) => (
                  <Badge key={idx} variant="secondary" className="text-xs">
                    {benefit}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="flex gap-2 pt-2">
          <Button size="sm" className="flex-1">
            Log Feeding
          </Button>
          <Button size="sm" variant="outline" className="flex-1">
            Get Recipes
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
