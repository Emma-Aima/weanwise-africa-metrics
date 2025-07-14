
import { UserProfile } from "@/components/UserProfiles";

// Mock user data representing diverse Sub-Saharan African communities
export const mockUsers: UserProfile[] = [
  {
    id: 1,
    name: "Amina Kone",
    role: "mother",
    location: "Bamako, Mali",
    children: 2,
    joinedDate: "Jan 2024",
    activeChildren: ["Fatima (8mo)", "Ibrahim (3yr)"]
  },
  {
    id: 2,
    name: "Grace Mwangi",
    role: "health_worker",
    location: "Kibera, Kenya",
    children: 15,
    joinedDate: "Oct 2023",
    activeChildren: ["Community Center A", "Community Center B"]
  },
  {
    id: 3,
    name: "Nkem Okafor",
    role: "mother",
    location: "Lagos, Nigeria",
    children: 1,
    joinedDate: "Mar 2024",
    activeChildren: ["Chioma (6mo)"]
  },
  {
    id: 4,
    name: "Sarah Banda",
    role: "caregiver",
    location: "Lusaka, Zambia",
    children: 4,
    joinedDate: "Dec 2023",
    activeChildren: ["Mary (1yr)", "John (2yr)", "Ruth (4mo)", "Paul (18mo)"]
  },
  {
    id: 5,
    name: "Fatou Diallo",
    role: "health_worker",
    location: "Dakar, Senegal",
    children: 12,
    joinedDate: "Feb 2024",
    activeChildren: ["Rural Clinic Patients"]
  }
];

// Generate heart rate history data
export const generateHeartRateHistory = (childAge: number) => {
  const baseHeartRate = childAge < 12 ? 120 : childAge < 24 ? 100 : 85;
  const history = [];
  
  for (let i = 23; i >= 0; i--) {
    const hour = 24 - i;
    const variation = (Math.random() - 0.5) * 20;
    const value = Math.round(baseHeartRate + variation);
    
    history.push({
      time: `${hour.toString().padStart(2, '0')}:00`,
      value: Math.max(60, Math.min(150, value)),
      date: new Date(Date.now() - i * 60 * 60 * 1000).toISOString()
    });
  }
  
  return history;
};

// Generate realistic health data for demonstration
export const generateHealthData = (childAge: number) => {
  const baseHeartRate = childAge < 12 ? 130 : childAge < 24 ? 115 : 105;
  const variation = Math.random() * 20 - 10;
  const heartRateValue = Math.round(baseHeartRate + variation);
  
  // Determine status based on age-appropriate ranges
  let heartRateStatus: 'normal' | 'warning' | 'critical' = 'normal';
  if (childAge < 3) {
    heartRateStatus = heartRateValue < 100 || heartRateValue > 150 ? 'critical' : 
                     heartRateValue < 110 || heartRateValue > 140 ? 'warning' : 'normal';
  } else if (childAge < 12) {
    heartRateStatus = heartRateValue < 80 || heartRateValue > 120 ? 'critical' : 
                     heartRateValue < 90 || heartRateValue > 110 ? 'warning' : 'normal';
  } else {
    heartRateStatus = heartRateValue < 60 || heartRateValue > 100 ? 'critical' : 
                     heartRateValue < 70 || heartRateValue > 90 ? 'warning' : 'normal';
  }
  
  return {
    heartRate: {
      value: heartRateValue,
      unit: 'bpm',
      status: heartRateStatus,
      trend: variation > 0 ? 'up' as const : variation < 0 ? 'down' as const : 'stable' as const
    },
    spO2: {
      value: Math.round(96 + Math.random() * 3),
      unit: '%',
      status: 'normal' as const,
      trend: 'stable' as const
    },
    sleepHours: {
      value: Math.round((childAge < 12 ? 16 : childAge < 24 ? 14 : 12) + (Math.random() * 2 - 1)),
      unit: 'hrs',
      status: 'normal' as const,
      trend: 'stable' as const
    },
    activityLevel: {
      value: Math.round(60 + Math.random() * 40),
      unit: '%',
      status: 'normal' as const,
      trend: Math.random() > 0.5 ? 'up' as const : 'down' as const
    }
  };
};

// Local food recommendations based on Sub-Saharan African dietary staples
export const getNutritionRecommendations = (ageInMonths: number, healthStatus: string) => {
  const baseRecommendations = [
    {
      food: "Maize Porridge",
      localName: "Posho/Ugali",
      portion: "3-4 tablespoons",
      timing: "Morning & Evening",
      benefits: ["Energy", "B-Vitamins"],
      priority: "high" as const,
      description: "A warm, nutritious porridge made from ground maize, perfect for growing children.",
      healthBenefits: "Rich in carbohydrates for energy, B-vitamins for brain development, and fiber for healthy digestion."
    },
    {
      food: "Sweet Potato",
      localName: "Batata",
      portion: "2 tablespoons mashed",
      timing: "Lunch",
      benefits: ["Vitamin A", "Fiber", "Potassium"],
      priority: "high" as const,
      description: "Colorful and naturally sweet root vegetables that children love.",
      healthBenefits: "Excellent source of Vitamin A for healthy vision, immune system support, and potassium for heart health."
    },
    {
      food: "Ground Nuts",
      localName: "Peanuts",
      portion: "1 tablespoon paste",
      timing: "Snack",
      benefits: ["Protein", "Healthy Fats"],
      priority: "medium" as const,
      description: "Protein-rich nuts ground into a smooth paste, perfect for snacks.",
      healthBenefits: "High in protein for muscle development, healthy fats for brain growth, and essential amino acids."
    }
  ];

  if (ageInMonths >= 6) {
    baseRecommendations.push({
      food: "Moringa Leaves",
      localName: "Drumstick Tree",
      portion: "1 teaspoon powder",
      timing: "Mixed with porridge",
      benefits: ["Iron", "Vitamin C", "Protein"],
      priority: "high" as const,
      description: "Nutrient-dense leaves from the miracle tree, packed with vitamins and minerals.",
      healthBenefits: "Contains 25x more iron than spinach, supports immune system and provides essential amino acids."
    });
  }

  if (ageInMonths >= 9) {
    baseRecommendations.push({
      food: "Palm Fruit",
      localName: "Red Palm Oil",
      portion: "1/2 teaspoon",
      timing: "Added to vegetables",
      benefits: ["Vitamin A", "Healthy Fats"],
      priority: "medium" as const,
      description: "Natural red oil rich in nutrients, perfect for cooking vegetables.",
      healthBenefits: "High in Vitamin A and E, supports brain development and provides healthy fats for growth."
    });
  }

  return baseRecommendations;
};
