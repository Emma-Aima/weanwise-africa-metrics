
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

// Generate realistic health data for demonstration
export const generateHealthData = (childAge: number) => {
  const baseHeartRate = childAge < 12 ? 130 : childAge < 24 ? 115 : 105;
  const variation = Math.random() * 20 - 10;
  
  return {
    heartRate: {
      value: Math.round(baseHeartRate + variation),
      unit: 'bpm',
      status: Math.abs(variation) < 5 ? 'normal' : Math.abs(variation) < 10 ? 'warning' : 'critical',
      trend: variation > 0 ? 'up' : variation < 0 ? 'down' : 'stable'
    },
    spO2: {
      value: Math.round(96 + Math.random() * 3),
      unit: '%',
      status: 'normal',
      trend: 'stable'
    },
    sleepHours: {
      value: Math.round((childAge < 12 ? 16 : childAge < 24 ? 14 : 12) + (Math.random() * 2 - 1)),
      unit: 'hrs',
      status: 'normal',
      trend: 'stable'
    },
    activityLevel: {
      value: Math.round(60 + Math.random() * 40),
      unit: '%',
      status: 'normal',
      trend: Math.random() > 0.5 ? 'up' : 'down'
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
      priority: "high" as const
    },
    {
      food: "Sweet Potato",
      localName: "Batata",
      portion: "2 tablespoons mashed",
      timing: "Lunch",
      benefits: ["Vitamin A", "Fiber", "Potassium"],
      priority: "high" as const
    },
    {
      food: "Ground Nuts",
      localName: "Peanuts",
      portion: "1 tablespoon paste",
      timing: "Snack",
      benefits: ["Protein", "Healthy Fats"],
      priority: "medium" as const
    }
  ];

  if (ageInMonths >= 6) {
    baseRecommendations.push({
      food: "Moringa Leaves",
      localName: "Drumstick Tree",
      portion: "1 teaspoon powder",
      timing: "Mixed with porridge",
      benefits: ["Iron", "Vitamin C", "Protein"],
      priority: "high" as const
    });
  }

  if (ageInMonths >= 9) {
    baseRecommendations.push({
      food: "Palm Fruit",
      localName: "Red Palm Oil",
      portion: "1/2 teaspoon",
      timing: "Added to vegetables",
      benefits: ["Vitamin A", "Healthy Fats"],
      priority: "medium" as const
    });
  }

  return baseRecommendations;
};
